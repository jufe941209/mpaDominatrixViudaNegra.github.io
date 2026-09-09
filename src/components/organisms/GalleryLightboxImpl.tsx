import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { GalleryImage } from '../../types/content';

interface GalleryLightboxImplProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
}

export default function GalleryLightboxImpl({ images, index, onClose }: GalleryLightboxImplProps) {
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
