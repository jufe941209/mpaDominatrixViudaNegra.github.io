import type { UnderwearTier } from '../types/content';

export const underwearTiers: UnderwearTier[] = [
  {
    id: 'economica',
    titleKey: 'ropaInterior:tiers.economic.title',
    descriptionKey: 'ropaInterior:tiers.economic.description',
    whatsappMessage: 'Hola! Me interesa la Versión Económica de ropa interior usada',
    accent: 'economica',
  },
  {
    id: 'estandar',
    titleKey: 'ropaInterior:tiers.standard.title',
    descriptionKey: 'ropaInterior:tiers.standard.description',
    whatsappMessage: 'Hola! Me interesa la Versión Estándar de ropa interior usada',
    accent: 'estandar',
  },
  {
    id: 'plus',
    titleKey: 'ropaInterior:tiers.plus.title',
    descriptionKey: 'ropaInterior:tiers.plus.description',
    whatsappMessage: 'Hola! Me interesa la Versión Plus de ropa interior usada',
    accent: 'plus',
  },
];

export const underwearAdditionalKeys = ['1_day', 'photo', 'note', 'premium_box', 'exclusive_bag'] as const;
export const underwearTermsCount = 7;
