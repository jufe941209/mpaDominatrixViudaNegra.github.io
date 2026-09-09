import type { GalleryImage } from '../types/content';

export const sessionGallery: GalleryImage[] = Array.from({ length: 9 }, (_, i) => ({
  src: `/img/destination-${i + 1}.jpg`,
  alt: `Sesión ${i + 1}`,
}));

export const homeGallery: GalleryImage[] = [1, 2, 7, 8, 9, 4, 5, 6].map((n) => ({
  src: `/img/destination-${n}.jpg`,
  alt: `Imagen ${n}`,
}));
