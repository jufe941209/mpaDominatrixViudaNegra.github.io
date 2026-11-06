import { Icon } from '../atoms/Icon';

interface VideoThumbnailProps {
  posterSrc: string;
  alt: string;
  onClick: () => void;
  heightClass?: string;
  rounded?: boolean;
}

/** Clickable poster image with a play button overlay; opens a VideoModal on click. */
export function VideoThumbnail({ posterSrc, alt, onClick, heightClass = 'h-[200px] sm:h-[250px]', rounded = true }: VideoThumbnailProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Reproducir video: ${alt}`}
      className={`group relative ${heightClass} w-full overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl ${rounded ? 'rounded-2xl' : ''}`}
    >
      <img src={posterSrc} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
      <span className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors duration-300 group-hover:bg-black/55">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/90 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon name="fas fa-play" className="ml-1 text-2xl" />
        </span>
      </span>
    </button>
  );
}
