import { lazy, Suspense } from 'react';
import type { GalleryImage } from '../../types/content';

// The lightbox library only needs to load the moment someone actually opens
// an image, not as part of every page's initial bundle (it sits on the home
// page too, which loads eagerly).
const GalleryLightboxImpl = lazy(() => import('./GalleryLightboxImpl'));

interface GalleryLightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
}

export function GalleryLightbox({ images, index, onClose }: GalleryLightboxProps) {
  if (index < 0) return null;

  return (
    <Suspense fallback={null}>
      <GalleryLightboxImpl images={images} index={index} onClose={onClose} />
    </Suspense>
  );
}
