import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  professionalGalleryShowcase,
  professionalGalleryRow1,
  professionalGalleryRow2,
  professionalGalleryRow3,
  professionalGalleryRow4,
  professionalGalleryRow5,
  professionalGalleryRow6,
  type ProfessionalPhoto,
} from '../content/professionalGallery';
import { GalleryCard } from '../components/molecules/GalleryCard';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
import { Icon } from '../components/atoms/Icon';
import { Reveal } from '../components/atoms/Reveal';
import { useLightbox } from '../hooks/useLightbox';

const COL_CLASS: Record<ProfessionalPhoto['colSpan'], string> = {
  'lg-3': 'basis-full sm:basis-[47%] lg:basis-[23%]',
  'lg-4': 'basis-full sm:basis-[47%] lg:basis-[31%]',
  'lg-6': 'basis-full lg:basis-[48%]',
};

const HEIGHT_CLASS: Record<ProfessionalPhoto['height'], string> = {
  300: 'h-[300px]',
  400: 'h-[400px]',
};

function Row({ photos, startIndex, onOpen }: { photos: ProfessionalPhoto[]; startIndex: number; onOpen: (i: number) => void }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {photos.map((photo, i) => (
        <div key={photo.src} className={COL_CLASS[photo.colSpan]}>
          <GalleryCard
            src={photo.src}
            alt={photo.alt}
            heightClass={HEIGHT_CLASS[photo.height]}
            caption={photo.caption}
            onClick={() => onOpen(startIndex + i)}
          />
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ icon, light, children }: { icon: string; light?: boolean; children: string }) {
  const textClass = light ? 'text-white' : 'text-brand';
  const lineClass = light ? 'bg-white/50' : 'bg-brand/60';
  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      <span className={`h-px w-10 ${lineClass}`} />
      <h3 className={`flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.2em] ${textClass}`}>
        <Icon name={icon} />
        {children}
      </h3>
      <span className={`h-px w-10 ${lineClass}`} />
    </div>
  );
}

export function ProfesionalesPage() {
  const { t } = useTranslation();
  const galleryOneLightbox = useLightbox();
  const galleryTwoLightbox = useLightbox();

  const galleryOneImages = useMemo(
    () => [...professionalGalleryShowcase, ...professionalGalleryRow1, ...professionalGalleryRow2].map((p) => ({ src: p.src, alt: p.alt })),
    [],
  );
  const galleryTwoImages = useMemo(
    () =>
      [...professionalGalleryRow3, ...professionalGalleryRow4, ...professionalGalleryRow5, ...professionalGalleryRow6].map((p) => ({
        src: p.src,
        alt: p.alt,
      })),
    [],
  );

  return (
    <>
      <div
        className="bg-cover bg-center py-16"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(183,35,39,0.3), rgba(0,0,0,0.95)), url('/img/hero-bg.png.jpeg')",
        }}
      >
        <Reveal className="mx-auto max-w-[1320px] px-4 text-center">
          <h1 className="mb-3 font-heading text-4xl font-bold text-white [text-shadow:2px_2px_6px_rgba(0,0,0,0.6)] md:text-5xl">
            {t('profesionales:title')}
          </h1>
          <p className="mx-auto max-w-2xl text-center text-white/80">{t('profesionales:subtitle')}</p>
        </Reveal>
      </div>

      <div className="bg-black py-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <SectionLabel icon="fas fa-crown">{t('profesionales:sections.showcase')}</SectionLabel>
          <div className="mb-14">
            <Row photos={professionalGalleryShowcase} startIndex={0} onOpen={galleryOneLightbox.open} />
          </div>

          <SectionLabel icon="fas fa-images">{t('profesionales:sections.gallery')}</SectionLabel>
          <div className="space-y-4">
            <Row photos={professionalGalleryRow1} startIndex={professionalGalleryShowcase.length} onOpen={galleryOneLightbox.open} />
            <Row
              photos={professionalGalleryRow2}
              startIndex={professionalGalleryShowcase.length + professionalGalleryRow1.length}
              onOpen={galleryOneLightbox.open}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#9b1818] py-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <SectionLabel icon="fas fa-wine-glass" light>{t('profesionales:sections.candor')}</SectionLabel>
          <div className="space-y-4">
            <Row photos={professionalGalleryRow3} startIndex={0} onOpen={galleryTwoLightbox.open} />
            <Row photos={professionalGalleryRow4} startIndex={professionalGalleryRow3.length} onOpen={galleryTwoLightbox.open} />
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center py-16"
        style={{ backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.92), rgba(183,35,39,0.25), rgba(0,0,0,0.95)), url(/img/fondo1.jpg)' }}
      >
        <div className="mx-auto max-w-[1320px] px-4">
          <SectionLabel icon="fas fa-gem">{t('profesionales:sections.royalty')}</SectionLabel>
          <div className="space-y-4">
            <Row
              photos={professionalGalleryRow5}
              startIndex={professionalGalleryRow3.length + professionalGalleryRow4.length}
              onOpen={galleryTwoLightbox.open}
            />
            <Row
              photos={professionalGalleryRow6}
              startIndex={professionalGalleryRow3.length + professionalGalleryRow4.length + professionalGalleryRow5.length}
              onOpen={galleryTwoLightbox.open}
            />
          </div>
        </div>
      </div>

      <GalleryLightbox images={galleryOneImages} index={galleryOneLightbox.index} onClose={galleryOneLightbox.close} />
      <GalleryLightbox images={galleryTwoImages} index={galleryTwoLightbox.index} onClose={galleryTwoLightbox.close} />
    </>
  );
}
