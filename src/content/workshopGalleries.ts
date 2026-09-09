import type { GalleryImage } from '../types/content';

export const capacitacionGallery: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
  src: `/img/capacitaciones/capacitacion${i + 1}.jpg`,
  alt: `Capacitación ${i + 1}`,
}));

export const plotterGallery: GalleryImage[] = Array.from({ length: 2 }, (_, i) => ({
  src: `/img/capacitaciones/plotter${i + 1}.jpg`,
  alt: `Plotter ${i + 1}`,
}));
