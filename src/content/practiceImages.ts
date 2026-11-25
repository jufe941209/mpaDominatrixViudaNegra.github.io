import type { PracticeCategory, GalleryImage } from '../types/content';

export function buildCategoryImages(category: PracticeCategory): GalleryImage[] {
  if (category.numbers) {
    return category.numbers.map((n) => ({
      src: `${category.folder}/${category.filePrefix}${n}.${category.extension}`,
      alt: `${category.slug} ${n}`,
    }));
  }
  if (category.count === 1) {
    return [{ src: `${category.folder}/${category.filePrefix}.${category.extension}`, alt: category.slug }];
  }
  return Array.from({ length: category.count }, (_, i) => ({
    src: `${category.folder}/${category.filePrefix}${i + 1}.${category.extension}`,
    alt: `${category.slug} ${i + 1}`,
  }));
}
