import { useTranslation } from 'react-i18next';
import { Icon } from '../components/atoms/Icon';
import { Button } from '../components/atoms/Button';
import { Badge } from '../components/atoms/Badge';
import { Reveal } from '../components/atoms/Reveal';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
import { useLightbox } from '../hooks/useLightbox';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { siteConfig } from '../content/siteConfig';
import { MultipleSessionsSection } from '../components/organisms/MultipleSessionsSection';
import { SubmissiveSessionsSection } from '../components/organisms/SubmissiveSessionsSection';
import { RulesSection } from '../components/organisms/RulesSection';

export function PresencialesPage() {
  const { t } = useTranslation();
  const paymentLightbox = useLightbox();

  return (
    <div
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/fondo-webcam.jpg')" }}
    >
      <div className="mx-auto max-w-[1320px] px-4">
        <Reveal
          className="mb-8 rounded-2xl p-10 text-center"
          style={{ background: 'linear-gradient(#b72327, rgba(0,0,0,0.8)), url(/img/fondo-webcam.jpg)', backgroundSize: 'cover' }}
        >
          <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">{t('presenciales:title')}</h1>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-white">{t('presenciales:description')}</p>
          <div className="mt-6">
            <Button href={siteConfig.bookingUrl} variant="success">
              <Icon name="fas fa-calendar-check" />
              {t('presenciales:booking.button')}
            </Button>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/80">{t('presenciales:booking.note')}</p>
          </div>
        </Reveal>

        <RulesSection />

        <SubmissiveSessionsSection />

        <MultipleSessionsSection />

        <div className="my-8 rounded-[20px] border border-white/20 bg-gradient-to-br from-gray-100 to-gray-200 p-6 shadow-2xl md:p-10">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold text-brand md:text-3xl">
            {t('presenciales:additional_services')}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col overflow-hidden rounded-[20px] border-2 border-brand bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-brand to-brand-dark px-6 py-6 text-center">
                  <h5 className="font-heading text-lg font-bold text-white">🤖 {t('presenciales:fuck_machine.title')}</h5>
                </div>
                <div className="flex flex-1 flex-col items-center px-6 py-8 text-center">
                  <div className="mb-4 grid w-full grid-cols-2 gap-2">
                    <img src="/img/presenciales/fuckmachine.jpg" alt={t('presenciales:fuck_machine.title')} loading="lazy" className="h-[220px] w-full rounded-2xl object-cover shadow-md" />
                    <img src="/img/presenciales/fuckmachine2.jpg" alt={t('presenciales:fuck_machine.title')} loading="lazy" className="h-[220px] w-full rounded-2xl object-cover shadow-md" />
                  </div>
                  <p className="mb-4 flex-1 text-center text-sm text-gray-600">{t('presenciales:fuck_machine.description')}</p>
                  <div className="mb-4"><Badge>✓ {t('common:available')}</Badge></div>
                  <Button href={buildWhatsAppUrl('Hola, me interesa el servicio de Fuck Machine')} variant="danger">
                    <Icon name="fas fa-robot" />
                    {t('common:select')}
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="flex h-full flex-col overflow-hidden rounded-[20px] border-2 border-brand bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-brand to-brand-dark px-6 py-6 text-center">
                  <h5 className="font-heading text-lg font-bold text-white">👗 {t('presenciales:sissys_rental.title')}</h5>
                </div>
                <div className="flex flex-1 flex-col items-center px-6 py-8 text-center">
                  <img src="/img/presenciales/sissys.jpg" alt={t('presenciales:sissys_rental.title')} loading="lazy" className="mb-4 h-[220px] w-full rounded-2xl object-cover shadow-md" />
                  <p className="mb-4 flex-1 text-center text-sm text-gray-600">{t('presenciales:sissys_rental.description')}</p>
                  <div className="mb-4"><Badge>✓ {t('common:available')}</Badge></div>
                  <Button href={buildWhatsAppUrl('Hola, me interesa el servicio de Alquiler de Sissys')} variant="danger">
                    <Icon name="fas fa-heart" />
                    {t('common:select')}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="my-8 overflow-hidden rounded-[20px] border-2 border-brand bg-gradient-to-br from-gray-100 to-gray-200 p-6 shadow-2xl md:p-10">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <button
              type="button"
              onClick={() => paymentLightbox.open(0)}
              aria-label={`Ver ${t('presenciales:payment_methods.title')}`}
              className="block overflow-hidden rounded-2xl border-2 border-brand bg-black shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src="/img/presenciales/mediospago.jpg"
                alt={t('presenciales:payment_methods.title')}
                loading="lazy"
                className="mx-auto max-h-[480px] w-full bg-black object-contain"
              />
            </button>
            <div className="flex flex-col items-center text-center">
              <Icon name="fas fa-money-bill-wave" className="mb-4 text-4xl text-brand" />
              <h2 className="mb-4 font-heading text-2xl font-bold text-brand md:text-3xl">{t('presenciales:payment_methods.title')}</h2>
              <p className="text-center text-gray-600">{t('presenciales:payment_methods.description')}</p>
            </div>
          </div>
        </Reveal>
      </div>
      <GalleryLightbox
        images={[{ src: '/img/presenciales/mediospago.jpg', alt: t('presenciales:payment_methods.title') }]}
        index={paymentLightbox.index}
        onClose={paymentLightbox.close}
      />
    </div>
  );
}
