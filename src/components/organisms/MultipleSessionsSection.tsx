import { useTranslation } from 'react-i18next';
import { Icon } from '../atoms/Icon';
import { Button } from '../atoms/Button';
import { Reveal } from '../atoms/Reveal';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { multipleSessionCards } from '../../content/presencialesData';

export function MultipleSessionsSection() {
  const { t } = useTranslation();

  return (
    <div className="my-8 rounded-[20px] border-2 border-brand bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-6 shadow-2xl md:p-10">
      <div className="mb-10 text-center">
        <h2 className="mb-3 font-heading text-3xl font-bold text-brand [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] md:text-4xl">
          🔥 {t('presenciales:multiples.title')} 🔥
        </h2>
        <h4 className="mb-4 font-heading italic font-light text-white">{t('presenciales:multiples.subtitle')}</h4>
        <div className="mx-auto mb-4 max-w-2xl rounded-2xl border-2 border-[#ff4500] bg-gradient-to-br from-[#ff6b35] to-[#f7931e] px-5 py-4 font-bold text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)]">
          <Icon name="fas fa-exclamation-triangle" className="mr-2" />
          {t('presenciales:multiples.warning')}
        </div>
        <p className="text-center text-gray-200">{t('presenciales:multiples.description')}</p>
      </div>

      <h3 className="mb-6 text-center font-heading text-2xl font-bold text-brand">
        <Icon name="fas fa-images" className="mr-2" />
        {t('presenciales:multiples.gallery')}
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {multipleSessionCards.map((card, i) => (
          <Reveal key={card.id} delayMs={i * 80}>
            <div className="overflow-hidden rounded-2xl border-2 border-brand bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] shadow-xl transition-transform duration-300 hover:-translate-y-1">
              <img src={card.image} alt={t(card.titleKey)} loading="lazy" className="aspect-[2/3] w-full object-cover object-top" />
              <div className="p-5 text-center">
                <h5 className="mb-1 font-heading font-bold text-brand">{t(card.titleKey)}</h5>
                <p className="text-center text-sm text-gray-300">{t(card.subtitleKey)}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href={buildWhatsAppUrl('Hola, me interesa información sobre Sesiones Múltiples')} variant="danger">
          <Icon name="fas fa-calendar-check" />
          {t('presenciales:multiples.cta')}
        </Button>
      </div>
    </div>
  );
}
