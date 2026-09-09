import { useTranslation } from 'react-i18next';
import { sessionGallery } from '../content/sessionGallery';
import { GalleryGrid } from '../components/organisms/GalleryGrid';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
import { useLightbox } from '../hooks/useLightbox';

export function SesionesPage() {
  const { t } = useTranslation();
  const lightbox = useLightbox();

  return (
    <div className="bg-black py-16">
      <div className="mx-auto max-w-[1320px] px-4">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] md:text-4xl">
          {t('common:nav.gallery_sessions')}
        </h2>
        <GalleryGrid images={sessionGallery} onOpen={lightbox.open} />
      </div>
      <GalleryLightbox images={sessionGallery} index={lightbox.index} onClose={lightbox.close} />
    </div>
  );
}
