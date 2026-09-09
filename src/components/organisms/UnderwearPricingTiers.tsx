import { useTranslation } from 'react-i18next';
import { Button } from '../atoms/Button';
import { Reveal } from '../atoms/Reveal';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { underwearTiers } from '../../content/underwearData';

const ACCENT_BORDER: Record<string, string> = {
  economica: 'border-t-green-500',
  estandar: 'border-t-blue-500',
  plus: 'border-t-brand',
};

export function UnderwearPricingTiers() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {underwearTiers.map((tier, i) => (
        <Reveal key={tier.id} delayMs={i * 100}>
          <div
            className={`flex h-full flex-col justify-between rounded-[20px] border-t-[5px] bg-white/95 p-8 text-center shadow-xl transition-transform duration-300 hover:-translate-y-2 ${ACCENT_BORDER[tier.accent]}`}
          >
            <div>
              <h3 className="mb-4 font-heading text-2xl font-bold text-gray-800">{t(tier.titleKey)}</h3>
              <p className="mb-6 text-center text-gray-600">{t(tier.descriptionKey)}</p>
            </div>
            <Button href={buildWhatsAppUrl(tier.whatsappMessage)} variant="danger" pill={false} className="mx-auto">
              {t('ropaInterior:consultPrice')}
            </Button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
