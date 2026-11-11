import { practiceTabs } from './practiceTabs';

export interface NavLinkItem {
  path: string;
  labelKey: string;
}

export const navigation = {
  home: { path: '/', labelKey: 'common:nav.home' },
  practicas: {
    labelKey: 'common:nav.practices',
    items: practiceTabs.map((tab) => ({ path: `/practicas/${tab.slug}`, labelKey: tab.navLabelKey })) as NavLinkItem[],
  },
  services: {
    labelKey: 'common:nav.services',
    items: [
      { path: '/presenciales', labelKey: 'common:nav.services_presencial' },
      { path: '/virtuales', labelKey: 'common:nav.services_virtual' },
      { path: '/shows', labelKey: 'common:nav.services_shows' },
      { path: '/talleres', labelKey: 'common:nav.services_workshops' },
      { path: '/contenido', labelKey: 'common:nav.services_content' },
    ] as NavLinkItem[],
  },
  gallery: {
    labelKey: 'common:nav.gallery',
    items: [
      { path: '/profesionales', labelKey: 'common:nav.gallery_professional' },
      { path: '/sesiones', labelKey: 'common:nav.gallery_sessions' },
      { path: '/mazmorra', labelKey: 'common:nav.gallery_dungeon' },
    ] as NavLinkItem[],
  },
  shop: {
    labelKey: 'common:nav.shop',
    items: [
      { path: '/sexshop', labelKey: 'common:nav.shop_sexshop' },
      { path: '/ropa-interior', labelKey: 'common:nav.shop_underwear' },
    ] as NavLinkItem[],
  },
  news: {
    labelKey: 'common:nav.news',
    items: [{ path: '/eventos', labelKey: 'common:nav.news_events' }] as NavLinkItem[],
  },
  wishlist: { path: '/lista-deseos', labelKey: 'common:nav.wishlist' },
  press: { path: '/prensa', labelKey: 'common:nav.press' },
  rubberDollJade: { path: '/rubber-doll-jade', labelKey: 'common:nav.rubber_doll_jade' },
};
