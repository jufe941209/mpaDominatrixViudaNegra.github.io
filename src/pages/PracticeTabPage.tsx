import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/atoms/Reveal';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { PracticeGallerySection } from '../components/organisms/PracticeGallerySection';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
import { useLightbox } from '../hooks/useLightbox';
import { buildCategoryImages } from '../content/practiceImages';
import { practiceTabs } from '../content/practiceTabs';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import type { GalleryImage } from '../types/content';

export function PracticeTabPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const lightbox = useLightbox();

  const tab = practiceTabs.find((item) => item.slug === slug);

  const { allImages, offsets } = useMemo(() => {
    const images: GalleryImage[] = [];
    const offsetList: number[] = [];
    for (const category of tab?.categories ?? []) {
      offsetList.push(images.length);
      images.push(...buildCategoryImages(category));
    }
    return { allImages: images, offsets: offsetList };
  }, [tab]);

  if (!tab) return <Navigate to="/practicas/fetiches" replace />;

  return (
    <div
      className="relative min-h-screen bg-cover bg-center pt-28 pb-16"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(183,35,39,0.3), rgba(0,0,0,0.9)), url('/img/hero-bg.png.jpeg')",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-4">
        <Reveal className="mb-8 text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">{t(tab.titleKey)}</h1>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-white/80">{t(tab.descriptionKey)}</p>
        </Reveal>

        {tab.categories && tab.categories.length > 0 ? (
          tab.categories.map((category, i) => (
            <PracticeGallerySection key={category.slug} category={category} offset={offsets[i]} onOpen={lightbox.open} />
          ))
        ) : (
          <Reveal className="mx-auto max-w-xl rounded-[20px] border border-white/10 bg-black/40 p-8 text-center shadow-2xl backdrop-blur-sm md:p-10">
            <Icon name="fas fa-hourglass-half" className="mb-4 text-4xl text-brand" />
            <p className="mb-6 text-white/80">{t('practicas:comingSoon')}</p>
            <Button href={buildWhatsAppUrl(`Hola, quiero más información sobre ${t(tab.titleKey)}`)} variant="success">
              <Icon name="fa fa-whatsapp" />
              {t('practicas:whatsappCta')}
            </Button>
          </Reveal>
        )}
      </div>
      <GalleryLightbox images={allImages} index={lightbox.index} onClose={lightbox.close} />
    </div>
  );
}
