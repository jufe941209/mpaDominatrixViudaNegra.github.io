import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { GalleryImage } from '../../types/content';

interface GalleryLightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
}

export function GalleryLightbox({ images, index, onClose }: GalleryLightboxProps) {
  return (
    <Lightbox
      open={index >= 0}
      close={onClose}
      index={index}
      slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
      styles={{ container: { backgroundColor: 'rgba(0,0,0,0.92)' } }}
    />
  );
}
