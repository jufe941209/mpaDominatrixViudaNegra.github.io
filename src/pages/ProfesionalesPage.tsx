import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  professionalGalleryShowcase,
  professionalGalleryRow1,
  professionalGalleryRow2,
  professionalGalleryRow3,
  professionalGalleryRow4,
  type ProfessionalPhoto,
} from '../content/professionalGallery';
import { GalleryCard } from '../components/molecules/GalleryCard';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
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
          <GalleryCard src={photo.src} alt={photo.alt} heightClass={HEIGHT_CLASS[photo.height]} onClick={() => onOpen(startIndex + i)} />
        </div>
      ))}
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
    () => [...professionalGalleryRow3, ...professionalGalleryRow4].map((p) => ({ src: p.src, alt: p.alt })),
    [],
  );

  return (
    <>
      <div className="bg-black py-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] md:text-4xl">
            {t('profesionales:title')}
          </h2>
          <div className="space-y-4">
            <Row photos={professionalGalleryShowcase} startIndex={0} onOpen={galleryOneLightbox.open} />
            <Row photos={professionalGalleryRow1} startIndex={professionalGalleryShowcase.length} onOpen={galleryOneLightbox.open} />
            <Row
              photos={professionalGalleryRow2}
              startIndex={professionalGalleryShowcase.length + professionalGalleryRow1.length}
              onOpen={galleryOneLightbox.open}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#9b1818] py-12">
        <div className="mx-auto max-w-[1320px] space-y-4 px-4">
          <Row photos={professionalGalleryRow3} startIndex={0} onOpen={galleryTwoLightbox.open} />
          <Row photos={professionalGalleryRow4} startIndex={professionalGalleryRow3.length} onOpen={galleryTwoLightbox.open} />
        </div>
      </div>

      <GalleryLightbox images={galleryOneImages} index={galleryOneLightbox.index} onClose={galleryOneLightbox.close} />
      <GalleryLightbox images={galleryTwoImages} index={galleryTwoLightbox.index} onClose={galleryTwoLightbox.close} />
    </>
  );
}
