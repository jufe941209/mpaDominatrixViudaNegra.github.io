import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../components/atoms/Icon';
import { Button } from '../components/atoms/Button';
import { Badge } from '../components/atoms/Badge';
import { Reveal } from '../components/atoms/Reveal';
import { VideoThumbnail } from '../components/molecules/VideoThumbnail';
import { VideoModal } from '../components/organisms/VideoModal';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { videos } from '../content/videos';
import { MultipleSessionsSection } from '../components/organisms/MultipleSessionsSection';
import { RulesSection } from '../components/organisms/RulesSection';

export function PresencialesPage() {
  const { t } = useTranslation();
  const [videoOpen, setVideoOpen] = useState(false);

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
        </Reveal>

        <Reveal className="mb-8 rounded-[20px] border border-white/20 bg-black/50 p-6 text-center shadow-2xl backdrop-blur-sm md:p-10">
          <h2 className="mb-2 font-heading text-2xl font-bold text-white md:text-3xl">Mírame en Acción</h2>
          <p className="mb-6 text-white/70">Dale clic para ver un adelanto de mis sesiones presenciales.</p>
          <VideoThumbnail
            posterSrc="/img/presenciales/multiples1.jpg"
            alt="Video de sesiones presenciales"
            heightClass="h-[260px] sm:h-[380px]"
            onClick={() => setVideoOpen(true)}
          />
        </Reveal>

        <RulesSection />

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
                  <img src="/img/presenciales/fuckmachine.jpg" alt={t('presenciales:fuck_machine.title')} loading="lazy" className="mb-4 h-[220px] w-full rounded-2xl object-cover shadow-md" />
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
      </div>
      {videoOpen && <VideoModal url={videos.presenciales} onClose={() => setVideoOpen(false)} />}
    </div>
  );
}
