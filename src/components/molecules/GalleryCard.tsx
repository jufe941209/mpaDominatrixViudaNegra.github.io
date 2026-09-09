import { Icon } from '../atoms/Icon';

interface GalleryCardProps {
  src: string;
  alt: string;
  onClick: () => void;
  heightClass?: string;
}

export function GalleryCard({ src, alt, onClick, heightClass = 'h-[250px]' }: GalleryCardProps) {
  return (
    <div className={`group relative ${heightClass} overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <button
        type="button"
        onClick={onClick}
        aria-label={`Ver ${alt}`}
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand/80 to-black/60 opacity-0 transition-opacity duration-300 focus-visible:opacity-100 focus-visible:outline-white group-hover:opacity-100 group-focus-within:opacity-100"
      >
        <Icon name="fas fa-search-plus" className="scale-90 text-3xl text-white drop-shadow transition-transform duration-300 group-hover:scale-100" />
      </button>
    </div>
  );
}
