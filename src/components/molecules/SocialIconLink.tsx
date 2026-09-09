import { Icon } from '../atoms/Icon';

interface SocialIconLinkProps {
  href: string;
  icon: string;
  label: string;
  size?: 'sm' | 'md';
}

export function SocialIconLink({ href, icon, label, size = 'sm' }: SocialIconLinkProps) {
  const dimension = size === 'sm' ? 'h-8 w-8 text-sm' : 'h-10 w-10 text-lg';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex ${dimension} items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-black`}
    >
      <Icon name={icon} />
    </a>
  );
}
