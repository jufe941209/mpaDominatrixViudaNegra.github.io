import { siteConfig } from '../content/siteConfig';

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/57${siteConfig.phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
