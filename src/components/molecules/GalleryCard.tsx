import { Icon } from '../atoms/Icon';

interface GalleryCardProps {
  src: string;
  alt: string;
  onClick: () => void;
  heightClass?: string;
  caption?: string;
}

export function GalleryCard({ src, alt, onClick, heightClass = 'h-[250px]', caption }: GalleryCardProps) {
  return (
    <div
      className={`group relative ${heightClass} overflow-hidden rounded-2xl border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-2xl`}
    >
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
      {caption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3 pb-2 pt-6">
          <span className="font-heading text-xs font-semibold uppercase tracking-wide text-white/90">{caption}</span>
        </div>
      )}
    </div>
  );
}
