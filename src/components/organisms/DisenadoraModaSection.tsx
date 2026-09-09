import { useTranslation } from 'react-i18next';
import { Reveal } from '../atoms/Reveal';

export function DisenadoraModaSection() {
  const { t } = useTranslation();

  return (
    <div
      className="bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: 'linear-gradient(#BA2505, rgba(0,0,0,0.2)), url(/img/tour-booking-bg.jpg)' }}
    >
      <Reveal className="mx-auto max-w-[1000px] px-4 text-center">
        <h1 className="mb-4 font-heading text-3xl font-semibold text-white">{t('home:moda.title')}</h1>
        <p className="text-center text-white/90">
          {t('home:moda.text')} {t('home:moda.contact')}
        </p>
      </Reveal>
    </div>
  );
}
