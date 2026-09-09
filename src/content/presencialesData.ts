import type { MultipleSessionCard } from '../types/content';

export const multipleSessionCards: MultipleSessionCard[] = [1, 2, 3, 4, 5].map((n) => ({
  id: n,
  image: `/img/presenciales/multiples${n}.jpg`,
  titleKey: `presenciales:multiples.cards.${n}.title`,
  subtitleKey: `presenciales:multiples.cards.${n}.subtitle`,
}));
