import { practiceCategories } from './practiceCategories';
import type { PracticeCategory } from '../types/content';

const bySlug = (slug: string) => practiceCategories.find((c) => c.slug === slug)!;

export interface PracticeTab {
  slug: string;
  navLabelKey: string;
  titleKey: string;
  descriptionKey: string;
  categories?: PracticeCategory[];
}

export const practiceTabs: PracticeTab[] = [
  {
    slug: 'fetiches',
    navLabelKey: 'common:nav.practices_fetiches',
    titleKey: 'practicas:tabs.fetiches.title',
    descriptionKey: 'practicas:tabs.fetiches.description',
    categories: ['feet', 'fishnet', 'nylon', 'smoking', 'smell'].map(bySlug),
  },
  {
    slug: 'pegging',
    navLabelKey: 'common:nav.practices_pegging',
    titleKey: 'practicas:tabs.pegging.title',
    descriptionKey: 'practicas:tabs.pegging.description',
    categories: [bySlug('pegging')],
  },
  {
    slug: 'sadomasoquismo',
    navLabelKey: 'common:nav.practices_sadomasoquismo',
    titleKey: 'practicas:tabs.sadomasoquismo.title',
    descriptionKey: 'practicas:tabs.sadomasoquismo.description',
    categories: [
      { slug: 'sadomasoquismo', titleKey: 'practicas:tabs.sadomasoquismo.title', folder: '/img/throne', filePrefix: 'throne', count: 4, extension: 'jpg' },
    ],
  },
  {
    slug: 'lluvias',
    navLabelKey: 'common:nav.practices_lluvias',
    titleKey: 'practicas:tabs.lluvias.title',
    descriptionKey: 'practicas:tabs.lluvias.description',
  },
  {
    slug: 'bondage',
    navLabelKey: 'common:nav.practices_bondage',
    titleKey: 'practicas:tabs.bondage.title',
    descriptionKey: 'practicas:tabs.bondage.description',
    categories: [
      { slug: 'bondage', titleKey: 'practicas:tabs.bondage.title', folder: '/img/mazmorra/bondage', filePrefix: 'bondage', count: 7, extension: 'jpg' },
    ],
  },
  {
    slug: 'findom',
    navLabelKey: 'common:nav.practices_findom',
    titleKey: 'practicas:tabs.findom.title',
    descriptionKey: 'practicas:tabs.findom.description',
  },
  {
    slug: 'juego-de-roles',
    navLabelKey: 'common:nav.practices_juego_roles',
    titleKey: 'practicas:tabs.juegoDeRoles.title',
    descriptionKey: 'practicas:tabs.juegoDeRoles.description',
    categories: [bySlug('petplay')],
  },
  {
    slug: 'castidad',
    navLabelKey: 'common:nav.practices_castidad',
    titleKey: 'practicas:tabs.castidad.title',
    descriptionKey: 'practicas:tabs.castidad.description',
    categories: [bySlug('chastity')],
  },
  {
    slug: 'humillacion',
    navLabelKey: 'common:nav.practices_humillacion',
    titleKey: 'practicas:tabs.humillacion.title',
    descriptionKey: 'practicas:tabs.humillacion.description',
    categories: [bySlug('boots')],
  },
  {
    slug: 'otros',
    navLabelKey: 'common:nav.practices_otros',
    titleKey: 'practicas:tabs.otros.title',
    descriptionKey: 'practicas:tabs.otros.description',
  },
];
