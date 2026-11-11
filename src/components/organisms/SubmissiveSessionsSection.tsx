import { useTranslation } from 'react-i18next';
import { Icon } from '../atoms/Icon';
import { Button } from '../atoms/Button';
import { Reveal } from '../atoms/Reveal';
import { GalleryLightbox } from './GalleryLightbox';
import { useLightbox } from '../../hooks/useLightbox';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { submissiveSessionImages } from '../../content/presencialesData';

export function SubmissiveSessionsSection() {
  const { t } = useTranslation();
  const lightbox = useLightbox();
  const lightboxImages = submissiveSessionImages.map((src, i) => ({ src, alt: `${t('presenciales:submissive.title')} ${i + 1}` }));

  return (
    <div className="my-8 rounded-[20px] border-2 border-brand bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-6 shadow-2xl md:p-10">
      <div className="mb-10 text-center">
        <h2 className="mb-3 font-heading text-3xl font-bold text-brand [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] md:text-4xl">
          {t('presenciales:submissive.title')}
        </h2>
        <p className="mx-auto max-w-2xl text-center text-gray-200">{t('presenciales:submissive.description')}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {submissiveSessionImages.map((src, i) => (
          <Reveal key={src} delayMs={i * 60}>
            <button
              type="button"
              onClick={() => lightbox.open(i)}
              aria-label={`Ver ${t('presenciales:submissive.title')} ${i + 1}`}
              className="block w-full overflow-hidden rounded-2xl border-2 border-brand shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <img src={src} alt="" loading="lazy" className="aspect-[2/3] w-full object-cover" />
            </button>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href={buildWhatsAppUrl('Hola, me interesa información sobre Sesiones con Sumisa')} variant="danger">
          <Icon name="fas fa-calendar-check" />
          {t('presenciales:submissive.cta')}
        </Button>
      </div>
      <GalleryLightbox images={lightboxImages} index={lightbox.index} onClose={lightbox.close} />
    </div>
  );
}
