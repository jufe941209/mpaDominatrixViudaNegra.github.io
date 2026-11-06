import { useTranslation } from 'react-i18next';
import { PriceCard } from '../components/molecules/PriceCard';
import { WebcamPlatformList } from '../components/organisms/WebcamPlatformList';
import { Reveal } from '../components/atoms/Reveal';
import { virtualesServices } from '../content/virtualesServices';

export function VirtualesPage() {
  const { t } = useTranslation();

  return (
    <div
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/fondo-webcam.jpg')" }}
    >
      <div className="mx-auto max-w-[1320px] px-4">
        <div
          className="mb-8 rounded-2xl p-10 text-center"
          style={{ background: 'linear-gradient(#b72327, rgba(0,0,0,0.8)), url(/img/fondo-webcam.jpg)', backgroundSize: 'cover' }}
        >
          <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">{t('virtuales:title')}</h1>
          <p className="text-center text-white">{t('virtuales:description')}</p>
        </div>

        <div className="mb-8 rounded-[20px] border border-white/20 bg-gradient-to-br from-gray-100 to-gray-200 p-6 shadow-2xl md:p-10">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-brand md:text-3xl">{t('virtuales:title')}</h2>

          <Reveal className="mx-auto mb-10 max-w-3xl rounded-2xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 text-center text-yellow-900 shadow-lg">
            <h4 className="mb-2 text-xl font-bold">{t('virtuales:important')}</h4>
            <p className="mb-2 text-center font-semibold">{t('virtuales:hello')}</p>
            <p className="mb-2 text-center">
              📱 <strong>{t('virtuales:telegram')}</strong>{' '}
              <a href={t('virtuales:telegramHandle')} target="_blank" rel="noopener noreferrer" className="underline">
                {t('virtuales:telegramHandle')}
              </a>
            </p>
            <hr className="my-3 border-yellow-300" />
            <p className="text-center font-bold">⚠️ {t('virtuales:payment_first')}</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {virtualesServices.map((service, i) => (
              <Reveal key={service.id} delayMs={(i % 2) * 100}>
                <PriceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="rounded-[20px] border border-white/20 bg-gradient-to-br from-gray-100 to-gray-200 p-6 shadow-2xl md:p-10">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-brand md:text-3xl">
            {t('virtuales:webcamPlatformsTitle')}
          </h2>
          <WebcamPlatformList />
        </div>
      </div>
    </div>
  );
}
