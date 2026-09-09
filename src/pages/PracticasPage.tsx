import { useMemo } from 'react';
import { practiceCategories } from '../content/practiceCategories';
import { buildCategoryImages } from '../content/practiceImages';
import { PracticeGallerySection } from '../components/organisms/PracticeGallerySection';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
import { useLightbox } from '../hooks/useLightbox';
import type { GalleryImage } from '../types/content';

export function PracticasPage() {
  const lightbox = useLightbox();

  const { allImages, offsets } = useMemo(() => {
    const images: GalleryImage[] = [];
    const offsetList: number[] = [];
    for (const category of practiceCategories) {
      offsetList.push(images.length);
      images.push(...buildCategoryImages(category));
    }
    return { allImages: images, offsets: offsetList };
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-fixed bg-center pt-28 pb-16"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(183,35,39,0.3), rgba(0,0,0,0.9)), url('/img/hero-bg.png.jpeg')",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-4">
        {practiceCategories.map((category, i) => (
          <PracticeGallerySection key={category.slug} category={category} offset={offsets[i]} onOpen={lightbox.open} />
        ))}
      </div>
      <GalleryLightbox images={allImages} index={lightbox.index} onClose={lightbox.close} />
    </div>
  );
}
