import { GalleryCard } from '../molecules/GalleryCard';
import { GalleryLightbox } from './GalleryLightbox';
import { Reveal } from '../atoms/Reveal';
import { useLightbox } from '../../hooks/useLightbox';
import type { GalleryImage } from '../../types/content';

const images: GalleryImage[] = Array.from({ length: 4 }, (_, i) => ({
  src: `/img/throne/throne${i + 1}.jpg`,
  alt: `Dominatrix Viuda Negra en el trono ${i + 1}`,
}));

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
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {images.map((image, i) => (
            <GalleryCard key={image.src} src={image.src} alt={image.alt} heightClass="h-[260px] sm:h-[340px]" onClick={() => lightbox.open(i)} />
          ))}
        </div>
      </Reveal>
      <GalleryLightbox images={images} index={lightbox.index} onClose={lightbox.close} />
    </div>
  );
}
