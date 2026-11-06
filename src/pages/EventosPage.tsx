import { Reveal } from '../components/atoms/Reveal';
import { Icon } from '../components/atoms/Icon';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
import { useLightbox } from '../hooks/useLightbox';
import { eventItems } from '../content/eventItems';

export function EventosPage() {
  const lightbox = useLightbox();
  const lightboxImages = eventItems.map((item) => ({ src: item.image, alt: item.title }));

  return (
    <div
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('/img/fondo1.jpg')" }}
    >
      <div className="mx-auto max-w-[1320px] px-4">
        <Reveal>
          <h1 className="mb-4 text-center font-heading text-4xl font-bold text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] md:text-5xl">
            Noticias y Eventos
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-white/70">
            Fiestas, lanzamientos y presentaciones del universo fetichista y BDSM de la Dominatrix Viuda Negra.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {eventItems.map((item, i) => (
            <Reveal key={item.id} delayMs={(i % 3) * 80}>
              <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-white/20 bg-white/95 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2">
                <button type="button" onClick={() => lightbox.open(i)} aria-label={`Ver ${item.title}`} className="bg-black">
                  <img src={item.image} alt={item.title} loading="lazy" className="mx-auto max-h-[420px] w-full object-contain" />
                </button>
                <div className="flex flex-1 flex-col p-6 text-left">
                  <h3 className="mb-2 font-heading text-lg font-bold text-brand">{item.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray-700">{item.description}</p>
                  <button
                    type="button"
                    onClick={() => lightbox.open(i)}
                    className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-dark"
                  >
                    <Icon name="fas fa-search-plus" />
                    Ver completo
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <GalleryLightbox images={lightboxImages} index={lightbox.index} onClose={lightbox.close} />
    </div>
  );
}
