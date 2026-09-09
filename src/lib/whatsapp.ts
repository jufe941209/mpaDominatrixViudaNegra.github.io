import { siteConfig } from '../content/siteConfig';

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
