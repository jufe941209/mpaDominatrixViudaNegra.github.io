import { useEffect } from 'react';
import { Icon } from '../atoms/Icon';

interface VideoModalProps {
  url: string;
  onClose: () => void;
}

/** Full-screen modal that embeds a Bunny Stream (or other iframe-embeddable) video player. */
export function VideoModal({ url, onClose }: VideoModalProps) {
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Reproductor de video"
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar video"
          className="absolute -top-12 right-0 text-3xl text-white transition-colors hover:text-brand focus-visible:outline-white"
        >
          <Icon name="fas fa-times" />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-2xl border-2 border-brand shadow-2xl">
          <iframe
            src={url}
            title="Video"
            loading="lazy"
            className="h-full w-full"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
