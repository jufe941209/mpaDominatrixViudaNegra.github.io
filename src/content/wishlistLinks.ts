export interface WishlistLink {
  id: string;
  icon: string;
  url: string;
  titleKey: string;
  descriptionKey: string;
}

export const wishlistLinks: WishlistLink[] = [
  {
    id: 'throne',
    icon: 'fas fa-crown',
    url: 'https://throne.com/mistressviudanegra',
    titleKey: 'wishlist:platforms.throne.title',
    descriptionKey: 'wishlist:platforms.throne.description',
  },
  {
    id: 'amazon',
    icon: 'fab fa-amazon',
    url: 'https://www.amazon.com/hz/wishlist/ls/2L2E23AC3QO8U/ref=nav_wishlist_lists_1',
    titleKey: 'wishlist:platforms.amazon.title',
    descriptionKey: 'wishlist:platforms.amazon.description',
  },
  {
    id: 'lovense',
    icon: 'fas fa-wifi',
    url: 'https://es.lovense.com/wish-list/n6bd',
    titleKey: 'wishlist:platforms.lovense.title',
    descriptionKey: 'wishlist:platforms.lovense.description',
  },
  {
    id: 'aliexpress',
    icon: 'fas fa-gift',
    url: 'https://www.aliexpress.com/p/wish-manage/share.html?smbPageCode=wishlist-amp&spreadId=6FEB941139EAF49B3AC5B27FA7C3CDFA45784CB9E70E8B14048FAF37DB04124D',
    titleKey: 'wishlist:platforms.aliexpress.title',
    descriptionKey: 'wishlist:platforms.aliexpress.description',
  },
  {
    id: 'paypal',
    icon: 'fab fa-paypal',
    url: 'https://www.paypal.com/paypalme/amaviudanegra',
    titleKey: 'wishlist:platforms.paypal.title',
    descriptionKey: 'wishlist:platforms.paypal.description',
  },
];
