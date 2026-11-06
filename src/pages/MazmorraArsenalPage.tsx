import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/atoms/Reveal';
import { SectionHeading } from '../components/atoms/SectionHeading';
import { GalleryCard } from '../components/molecules/GalleryCard';
import { VideoThumbnail } from '../components/molecules/VideoThumbnail';
import { VideoModal } from '../components/organisms/VideoModal';
import { mazmorraCategories } from '../content/mazmorraCategories';
import { buildCategoryImages } from '../content/practiceImages';
import { videos, videoPosters } from '../content/videos';
import { PracticeGallerySection } from '../components/organisms/PracticeGallerySection';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
import { useLightbox } from '../hooks/useLightbox';
import type { GalleryImage } from '../types/content';

export function MazmorraArsenalPage() {
  const { t } = useTranslation();
  const lightbox = useLightbox();
  const [videoOpen, setVideoOpen] = useState(false);

  const { allImages, offsets } = useMemo(() => {
    const images: GalleryImage[] = [];
    const offsetList: number[] = [];
    for (const category of mazmorraCategories) {
      offsetList.push(images.length);
      images.push(...buildCategoryImages(category));
    }
    return { allImages: images, offsets: offsetList };
  }, []);

  const juguetesCategory = mazmorraCategories.find((c) => c.slug === 'juguetes')!;
  const juguetesIndex = mazmorraCategories.indexOf(juguetesCategory);
  const juguetesImages = buildCategoryImages(juguetesCategory);
  const juguetesOffset = offsets[juguetesIndex];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center pt-28 pb-16"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(183,35,39,0.3), rgba(0,0,0,0.92)), url('/img/fondo1.jpg')",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-4">
        <Reveal className="mb-8 text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">{t('mazmorra:title')}</h1>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/80">{t('mazmorra:subtitle')}</p>
        </Reveal>

        {mazmorraCategories.map((category, i) => {
          if (category.slug === 'juguetes') {
            return (
              <Reveal key={category.slug} className="my-8">
                <section className="rounded-[20px] border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 md:p-10">
                  <SectionHeading as="h2" light className="mb-8 text-3xl md:text-4xl">
                    {t(category.titleKey)}
                  </SectionHeading>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:gap-5">
                    {juguetesImages.map((image, j) => (
                      <GalleryCard
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        heightClass="h-[200px] sm:h-[250px]"
                        onClick={() => lightbox.open(juguetesOffset + j)}
                      />
                    ))}
                    <VideoThumbnail
                      posterSrc={videoPosters.mazmorraJuguetes}
                      alt="Video del módulo de juguetes sexuales"
                      heightClass="h-[200px] sm:h-[250px]"
                      onClick={() => setVideoOpen(true)}
                    />
                  </div>
                </section>
              </Reveal>
            );
          }
          return <PracticeGallerySection key={category.slug} category={category} offset={offsets[i]} onOpen={lightbox.open} />;
        })}
      </div>
      <GalleryLightbox images={allImages} index={lightbox.index} onClose={lightbox.close} />
      {videoOpen && <VideoModal url={videos.mazmorraJuguetes} onClose={() => setVideoOpen(false)} />}
    </div>
  );
}
