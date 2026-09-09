import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '../atoms/Icon';
import { Button } from '../atoms/Button';
import { Reveal } from '../atoms/Reveal';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

interface StatusPageSectionProps {
  icon: string;
  iconColorClass: string;
  eyebrow?: string;
  titleKey: string;
  messageKey: string;
  homeKey: string;
  contactKey: string;
}

/** Shared shape for the "coming soon" and "404" pages. */
export function StatusPageSection({ icon, iconColorClass, eyebrow, titleKey, messageKey, homeKey, contactKey }: StatusPageSectionProps) {
  const { t } = useTranslation();

  return (
    <Reveal className="mx-auto max-w-3xl px-4 py-32 text-center">
      <Icon name={icon} className={`mb-6 text-6xl ${iconColorClass}`} />
      {eyebrow && <p className="mb-2 text-center font-heading text-6xl font-bold text-brand">{eyebrow}</p>}
      <h1 className="mb-4 font-heading text-3xl font-semibold">{t(titleKey)}</h1>
      <p className="mb-8 text-center text-gray-600">{t(messageKey)}</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105">
          <Icon name="fas fa-home" />
          {t(homeKey)}
        </Link>
        <Button href={buildWhatsAppUrl()} variant="success">
          <Icon name="fab fa-whatsapp" />
          {t(contactKey)}
        </Button>
      </div>
    </Reveal>
  );
}
