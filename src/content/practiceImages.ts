import type { PracticeCategory, GalleryImage } from '../types/content';

export function buildCategoryImages(category: PracticeCategory): GalleryImage[] {
  if (category.count === 1) {
    return [{ src: `${category.folder}/${category.filePrefix}.${category.extension}`, alt: category.slug }];
  }
  return Array.from({ length: category.count }, (_, i) => ({
    src: `${category.folder}/${category.filePrefix}${i + 1}.${category.extension}`,
    alt: `${category.slug} ${i + 1}`,
  }));
}
