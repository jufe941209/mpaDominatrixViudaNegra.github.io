import { useTranslation } from 'react-i18next';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import type { ServiceCard } from '../../types/content';

export function PriceCard({ service }: { service: ServiceCard }) {
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[20px] border-2 border-brand bg-gradient-to-br from-white to-gray-50 shadow-xl transition-transform duration-300 hover:-translate-y-1">
      <div className="bg-gradient-to-br from-brand to-brand-dark px-6 py-6 text-center shadow-md">
        <h5 className="font-heading text-lg font-bold text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)]">
          {service.emoji} {t(service.titleKey)}
        </h5>
      </div>
      <div className="flex flex-1 flex-col items-center px-6 py-8 text-center">
        <img
          src={service.image}
          alt={t(service.titleKey)}
          loading="lazy"
          className="mb-4 h-[220px] w-full rounded-2xl object-cover shadow-md"
        />
        <p className="mb-4 flex-1 text-center text-sm leading-relaxed text-gray-600">{t(service.descriptionKey)}</p>
        <div className="mb-4">
          <Badge>✓ {t('common:available')}</Badge>
        </div>
        <Button href={buildWhatsAppUrl(service.whatsappMessage)} variant={service.buttonVariant}>
          {t('common:select')}
        </Button>
      </div>
    </div>
  );
}
