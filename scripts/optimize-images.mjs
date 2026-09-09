// One-off / re-runnable maintenance script: shrinks every image under public/img
// in place (dimensions + compression) so the site doesn't ship phone-camera-sized
// originals to a browser that renders them at a few hundred pixels.
// Run with: npm run optimize:images
import { readdir, stat, writeFile, rename } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('public/img');

// Full-bleed hero / fixed-background images seen at up to full viewport width.
const LARGE_MAX_WIDTH = 1920;
// Reused destination-*.jpg photos (home gallery + sesiones + profesionales' 2nd gallery).
const MEDIUM_MAX_WIDTH = 1400;
// Everything else: category grids, cards, press clippings, platform logos.
const SMALL_MAX_WIDTH = 900;

const LARGE_FILES = new Set([
  'carousel-1.jpg', 'carousel-2.jpg', 'carousel-3.jpg',
  'tour-booking-bg.jpg', 'hero-bg.png.jpeg', 'fondoreglas.jpg', 'fondo-webcam.jpg', 'fondo1.jpg',
  'about-img.jpg', 'about-img-1.jpg',
]);
const MEDIUM_PREFIX = 'destination-';

const JPEG_QUALITY = 78;
const PNG_QUALITY = 78;

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function maxWidthFor(fileName) {
  if (LARGE_FILES.has(fileName)) return LARGE_MAX_WIDTH;
  if (fileName.startsWith(MEDIUM_PREFIX)) return MEDIUM_MAX_WIDTH;
  return SMALL_MAX_WIDTH;
}

// Already tiny (14KB) and Windows keeps a lock on it that blocks in-place
// rewrites; not worth chasing for a file this small.
const SKIP_FILES = new Set(['logo.png']);

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  if (SKIP_FILES.has(path.basename(file))) return;

  const before = (await stat(file)).size;
  const fileName = path.basename(file);
  const maxWidth = maxWidthFor(fileName);

  const image = sharp(file);
  const metadata = await image.metadata();
  const resizeOpts = metadata.width && metadata.width > maxWidth ? { width: maxWidth } : {};

  let pipeline = image.resize({ ...resizeOpts, withoutEnlargement: true });
  pipeline =
    ext === '.png'
      ? pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true })
      : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

  const buffer = await pipeline.toBuffer();
  if (buffer.length < before) {
    // Sharp keeps a read handle on `file` open; Windows refuses to overwrite
    // it in place while that handle is alive, so write to a temp file and
    // rename over the original instead. Retry once — on Windows the handle
    // (or an AV scan of the freshly-written temp file) can outlive toBuffer().
    const tmp = file + '.opt-tmp';
    await writeFile(tmp, buffer);
    try {
      await rename(tmp, file);
    } catch {
      await new Promise((r) => setTimeout(r, 300));
      await rename(tmp, file);
    }
  }
  const after = Math.min(buffer.length, before);

  totalBefore += before;
  totalAfter += after;
  processed++;

  const pct = (100 * (1 - after / before)).toFixed(0);
  console.log(`${path.relative(ROOT, file)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${pct}%)`);
}

const failed = [];
for await (const file of walk(ROOT)) {
  try {
    await optimize(file);
  } catch (err) {
    failed.push(file);
    console.error(`FAILED ${path.relative(ROOT, file)}: ${err.message}`);
  }
}

if (failed.length) {
  console.log(`\n${failed.length} file(s) failed, retrying once...`);
  for (const file of failed) {
    try {
      await optimize(file);
    } catch (err) {
      console.error(`STILL FAILED ${path.relative(ROOT, file)}: ${err.message}`);
    }
  }
}

console.log('\n---');
console.log(`${processed} images processed`);
console.log(`${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`);
console.log(`Saved ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%`);
