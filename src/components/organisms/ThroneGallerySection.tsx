import { GalleryLightbox } from './GalleryLightbox';
import { Reveal } from '../atoms/Reveal';
import { useLightbox } from '../../hooks/useLightbox';
import type { GalleryImage } from '../../types/content';

const images: GalleryImage[] = [
  ...[29, 30, 31, 32].map((n) => ({ src: `/img/profesionales/profesionales${n}.jpg`, alt: `Dominatrix Viuda Negra en el trono ${n}` })),
  ...[18, 19, 20, 21, 22, 23, 24, 25, 26, 27].map((n) => ({ src: `/img/profesionales/profesionales${n}.jpg`, alt: `Porte Real ${n}` })),
  ...[1, 2, 3, 4].map((n) => ({ src: `/img/throne/throne${n}.jpg`, alt: `Dominatrix Viuda Negra en el trono ${n}` })),
];

const track = [...images, ...images];

export function ThroneGallerySection() {
  const lightbox = useLightbox();

  return (
    <div className="bg-black py-16">
      <Reveal className="mx-auto max-w-[1320px] px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-3 font-heading text-3xl font-semibold text-white">Mi Reinado en el Trono</h2>
          <p className="text-white/70">
            Como Dominatrix, Ama y Mistress en Bogotá, Colombia, cada sesión es un ritual de poder. Estas imágenes
            capturan la esencia de mi dominio: control absoluto, estética impecable y una presencia que no pasa
            desapercibida.
          </p>
        </div>
      </Reveal>
      <div className="group relative mx-auto max-w-[1600px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-[practice-slide_40s_linear_infinite] gap-4 group-hover:[animation-play-state:paused]">
          {track.map((image, i) => (
            <button
              key={`${image.src}-${i}`}
              type="button"
              onClick={() => lightbox.open(i % images.length)}
              aria-label={`Ver ${image.alt}`}
              className="block h-[320px] w-[220px] flex-shrink-0 overflow-hidden rounded-2xl border-2 border-brand shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:h-[400px] sm:w-[280px]"
            >
              <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
      <GalleryLightbox images={images} index={lightbox.index} onClose={lightbox.close} />
    </div>
  );
}
