import { useTranslation } from 'react-i18next';
import { capacitacionGallery, plotterGallery } from '../content/workshopGalleries';
import { GalleryGrid } from '../components/organisms/GalleryGrid';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
import { useLightbox } from '../hooks/useLightbox';
import { Reveal } from '../components/atoms/Reveal';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface PriceTier {
  label: string;
  price: string;
}

export function TalleresPage() {
  const { t } = useTranslation();
  const capacitacionLightbox = useLightbox();
  const plotterLightbox = useLightbox();

  const tiers = t('talleres:pricing.tiers', { returnObjects: true }) as PriceTier[];
  const items = t('talleres:available.items', { returnObjects: true }) as string[];

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
          <h2 className="mb-8 font-heading text-2xl font-bold text-white md:text-3xl">{t('talleres:subtitle')}</h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-[20px] border-2 border-white/30 bg-black/30 shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <button type="button" onClick={() => plotterLightbox.open(0)} aria-label={plotterGallery[0].alt} className="bg-black">
                  <img
                    src={plotterGallery[0].src}
                    alt={plotterGallery[0].alt}
                    loading="lazy"
                    className="mx-auto max-h-[460px] w-full object-contain"
                  />
                </button>
                <div className="flex flex-1 flex-col px-6 py-6">
                  <h3 className="mb-4 text-center font-heading text-xl font-bold text-white">{t('talleres:pricing.title')}</h3>
                  <ul className="mb-6 space-y-3 text-left">
                    {tiers.map((tier) => (
                      <li key={tier.label} className="flex items-center justify-between border-b border-white/20 pb-2 text-white">
                        <span>{tier.label}</span>
                        <span className="font-bold text-[#ffd700]">{tier.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto text-center">
                    <Button href={buildWhatsAppUrl('Hola, me interesa información sobre los talleres')} variant="success">
                      <Icon name="fa fa-whatsapp" />
                      {t('talleres:book')}
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="h-full" delayMs={100}>
              <div className="flex h-full flex-col overflow-hidden rounded-[20px] border-2 border-white/30 bg-black/30 shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <button type="button" onClick={() => plotterLightbox.open(1)} aria-label={plotterGallery[1].alt} className="bg-black">
                  <img
                    src={plotterGallery[1].src}
                    alt={plotterGallery[1].alt}
                    loading="lazy"
                    className="mx-auto max-h-[460px] w-full object-contain"
                  />
                </button>
                <div className="flex flex-1 flex-col px-6 py-6">
                  <h3 className="mb-4 text-center font-heading text-xl font-bold text-white">{t('talleres:available.title')}</h3>
                  <ul className="mb-6 space-y-3 text-left">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-white/20 pb-2 text-white">
                        <Icon name="fas fa-check-circle" className="text-[#ffd700]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto text-center">
                    <Button href={buildWhatsAppUrl('Hola, me interesa información sobre los talleres')} variant="success">
                      <Icon name="fa fa-whatsapp" />
                      {t('talleres:book')}
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <GalleryLightbox images={capacitacionGallery} index={capacitacionLightbox.index} onClose={capacitacionLightbox.close} />
      <GalleryLightbox images={plotterGallery} index={plotterLightbox.index} onClose={plotterLightbox.close} />
    </>
  );
}
