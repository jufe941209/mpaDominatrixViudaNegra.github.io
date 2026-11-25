import { practiceCategories } from './practiceCategories';
import type { PracticeCategory } from '../types/content';

const bySlug = (slug: string) => practiceCategories.find((c) => c.slug === slug)!;

export interface PracticeIntroImage {
  src: string;
  to: string;
}

export interface PracticeTab {
  slug: string;
  navLabelKey: string;
  titleKey: string;
  descriptionKey: string;
  categories?: PracticeCategory[];
  introImages?: PracticeIntroImage[];
  /** Full-page background image replacing the default red/black one. */
  backgroundImage?: string;
}

export const practiceTabs: PracticeTab[] = [
  {
    slug: 'fetiches',
    navLabelKey: 'common:nav.practices_fetiches',
    titleKey: 'practicas:tabs.fetiches.title',
    descriptionKey: 'practicas:tabs.fetiches.description',
    categories: [
      { slug: 'fetiches', titleKey: 'practicas:tabs.fetiches.title', folder: '/img/mazmorra/bondage', filePrefix: 'bondage', count: 2, numbers: [2, 5], extension: 'jpg' },
    ],
  },
  {
    slug: 'cuero',
    navLabelKey: 'common:nav.practices_cuero',
    titleKey: 'practicas:tabs.cuero.title',
    descriptionKey: 'practicas:tabs.cuero.description',    categories: [bySlug('leather'), bySlug('leatherGloves')],
    backgroundImage: '/img/leather-texture.jpg',
  },
  {
    slug: 'pegging',
    navLabelKey: 'common:nav.practices_pegging',
    titleKey: 'practicas:tabs.pegging.title',
    descriptionKey: 'practicas:tabs.pegging.description',
    categories: [bySlug('pegging'), bySlug('peggingScene')],
  },
  {
    slug: 'sadomasoquismo',
    navLabelKey: 'common:nav.practices_sadomasoquismo',
    titleKey: 'practicas:tabs.sadomasoquismo.title',
    descriptionKey: 'practicas:tabs.sadomasoquismo.description',
  },
  {
    slug: 'lluvias',
    navLabelKey: 'common:nav.practices_lluvias',
    titleKey: 'practicas:tabs.lluvias.title',
    descriptionKey: 'practicas:tabs.lluvias.description',
    categories: [
      { slug: 'lluvias', titleKey: 'practicas:tabs.lluvias.title', folder: '/img/lluvias', filePrefix: 'lluvias', count: 2, extension: 'jpg' },
    ],
  },
  {
    slug: 'bondage',
    navLabelKey: 'common:nav.practices_bondage',
    titleKey: 'practicas:tabs.bondage.title',
    descriptionKey: 'practicas:tabs.bondage.description',
    categories: [
      // Photos 2 and 5 live in the Fetiches tab instead.
      { slug: 'bondage', titleKey: 'practicas:tabs.bondage.title', folder: '/img/mazmorra/bondage', filePrefix: 'bondage', count: 5, numbers: [1, 3, 4, 6, 7], extension: 'jpg' },
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
    categories: ['boots', 'feet', 'smell', 'fishnet'].map(bySlug),
  },
  {
    slug: 'otros',
    navLabelKey: 'common:nav.practices_otros',
    titleKey: 'practicas:tabs.otros.title',
    descriptionKey: 'practicas:tabs.otros.description',
    categories: ['facesitting', 'nylon', 'smoking'].map(bySlug),
  },
];
