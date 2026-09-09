import { Icon } from '../atoms/Icon';
import { siteConfig } from '../../content/siteConfig';

const ICONS: Record<string, string> = {
  twitter: 'fab fa-twitter',
  telegram: 'fab fa-telegram',
  instagram: 'fab fa-instagram',
  whatsapp: 'fab fa-whatsapp',
  snapchat: 'fab fa-snapchat',
  tiktok: 'fab fa-tiktok',
  youtube: 'fab fa-youtube',
  paypal: 'fab fa-cc-paypal',
};

type Platform = keyof typeof ICONS;

interface SocialIconRowProps {
  platforms: Platform[];
  variant?: 'outline' | 'solid';
}

/**
 * Single source of truth for social links, fed by siteConfig.socialLinks.
 * Replaces the old topbar (duplicate Twitter icon) and footer (Telegram
 * icon mistakenly linking to Instagram) implementations.
 */
export function SocialIconRow({ platforms, variant = 'outline' }: SocialIconRowProps) {
  const base = 'flex h-9 w-9 items-center justify-center rounded-full transition-colors';
  const style =
    variant === 'outline'
      ? 'border border-white/40 text-white hover:bg-white hover:text-black'
      : 'bg-brand text-white hover:bg-brand-dark';

  return (
    <div className="flex items-center gap-2">
      {platforms.map((platform) => (
        <a
          key={platform}
          href={siteConfig.socialLinks[platform as keyof typeof siteConfig.socialLinks]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform}
          className={`${base} ${style}`}
        >
          <Icon name={ICONS[platform]} />
        </a>
      ))}
    </div>
  );
}
