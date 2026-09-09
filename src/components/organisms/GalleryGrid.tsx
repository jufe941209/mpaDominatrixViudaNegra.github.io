import { GalleryCard } from '../molecules/GalleryCard';
import { Reveal } from '../atoms/Reveal';
import type { GalleryImage } from '../../types/content';

interface GalleryGridProps {
  images: GalleryImage[];
  onOpen: (index: number) => void;
  columns?: 3 | 4;
}

/**
 * Flex-wrap + justify-center naturally centers a lone last item in an
 * incomplete final row, matching the original offset-lg-4 centering trick
 * used on sesiones.php without needing special-case logic.
 */
export function GalleryGrid({ images, onOpen, columns = 4 }: GalleryGridProps) {
  const basis = columns === 4 ? 'basis-full sm:basis-[47%] lg:basis-[23%]' : 'basis-full sm:basis-[47%] lg:basis-[31%]';

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image, i) => (
        <Reveal key={image.src} className={basis} delayMs={(i % 4) * 80}>
          <GalleryCard src={image.src} alt={image.alt} heightClass="h-[300px]" onClick={() => onOpen(i)} />
        </Reveal>
      ))}
    </div>
  );
}
