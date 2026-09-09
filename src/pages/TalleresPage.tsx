import { useTranslation } from 'react-i18next';
import { capacitacionGallery, plotterGallery } from '../content/workshopGalleries';
import { GalleryGrid } from '../components/organisms/GalleryGrid';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
import { useLightbox } from '../hooks/useLightbox';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { buildWhatsAppUrl } from '../lib/whatsapp';

export function TalleresPage() {
  const { t } = useTranslation();
  const capacitacionLightbox = useLightbox();
  const plotterLightbox = useLightbox();

  return (
    <>
      <div className="bg-black py-16">
        <div className="mx-auto max-w-[1320px] px-4 text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">{t('talleres:title')}</h1>
          <h5 className="mb-10 text-white/80">
            {t('talleres:description')}
            <br />
            <br />
            {t('talleres:descriptionExtra')}
          </h5>
          <GalleryGrid images={capacitacionGallery} onOpen={capacitacionLightbox.open} />
        </div>
      </div>

      <div className="bg-[#9b1818] py-12">
        <div className="mx-auto max-w-[1320px] px-4 text-center">
          <h1 className="mb-8 font-heading text-2xl font-bold text-white md:text-3xl">{t('talleres:subtitle')}</h1>
          <GalleryGrid images={plotterGallery} onOpen={plotterLightbox.open} columns={3} />
          <div className="mt-8">
            <Button href={buildWhatsAppUrl()} variant="success">
              <Icon name="fa fa-whatsapp" />
              {t('talleres:book')}
            </Button>
          </div>
        </div>
      </div>

      <GalleryLightbox images={capacitacionGallery} index={capacitacionLightbox.index} onClose={capacitacionLightbox.close} />
      <GalleryLightbox images={plotterGallery} index={plotterLightbox.index} onClose={plotterLightbox.close} />
    </>
  );
}
