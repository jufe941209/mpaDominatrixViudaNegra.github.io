import { GalleryCard } from '../molecules/GalleryCard';
import { GalleryLightbox } from './GalleryLightbox';
import { Reveal } from '../atoms/Reveal';
import { useLightbox } from '../../hooks/useLightbox';
import type { GalleryImage } from '../../types/content';

const images: GalleryImage[] = [1, 2, 7, 8, 9, 4, 5, 6].map((n) => ({
  src: `/img/destination-${n}.jpg`,
  alt: `Imagen ${n}`,
}));

/** Asymmetric featured grid matching the home page's original destination gallery layout. */
export function HomeGallerySection() {
  const lightbox = useLightbox();

  return (
    <div className="bg-white py-16">
      <Reveal className="mx-auto max-w-[1320px] px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          <div className="md:col-span-1">
            <GalleryCard src={images[0].src} alt={images[0].alt} heightClass="h-[220px]" onClick={() => lightbox.open(0)} />
          </div>
          <div className="md:col-span-1">
            <GalleryCard src={images[1].src} alt={images[1].alt} heightClass="h-[220px]" onClick={() => lightbox.open(1)} />
          </div>
          <div className="md:row-span-2">
            <GalleryCard src={images[4].src} alt={images[4].alt} heightClass="h-[220px] md:h-full min-h-[300px]" onClick={() => lightbox.open(4)} />
          </div>
          <div className="md:col-span-1">
            <GalleryCard src={images[2].src} alt={images[2].alt} heightClass="h-[220px]" onClick={() => lightbox.open(2)} />
          </div>
          <div className="md:col-span-1">
            <GalleryCard src={images[3].src} alt={images[3].alt} heightClass="h-[220px]" onClick={() => lightbox.open(3)} />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[5, 6, 7].map((i) => (
            <GalleryCard key={images[i].src} src={images[i].src} alt={images[i].alt} heightClass="h-[220px]" onClick={() => lightbox.open(i)} />
          ))}
        </div>
      </Reveal>
      <GalleryLightbox images={images} index={lightbox.index} onClose={lightbox.close} />
    </div>
  );
}
