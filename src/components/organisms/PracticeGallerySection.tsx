import { useTranslation } from 'react-i18next';
import { GalleryCard } from '../molecules/GalleryCard';
import { SectionHeading } from '../atoms/SectionHeading';
import { Reveal } from '../atoms/Reveal';
import { buildCategoryImages } from '../../content/practiceImages';
import type { PracticeCategory } from '../../types/content';

interface PracticeGallerySectionProps {
  category: PracticeCategory;
  offset: number;
  onOpen: (globalIndex: number) => void;
}

export function PracticeGallerySection({ category, offset, onOpen }: PracticeGallerySectionProps) {
  const { t } = useTranslation();
  const images = buildCategoryImages(category);

  return (
    <Reveal className="my-8">
      <section className="rounded-[20px] border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 md:p-10">
        <SectionHeading as="h2" light className="mb-8 text-3xl md:text-4xl">
          {t(category.titleKey)}
        </SectionHeading>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:gap-5">
          {images.map((image, i) => (
            <GalleryCard
              key={image.src}
              src={image.src}
              alt={image.alt}
              heightClass="h-[200px] sm:h-[250px]"
              onClick={() => onOpen(offset + i)}
            />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
