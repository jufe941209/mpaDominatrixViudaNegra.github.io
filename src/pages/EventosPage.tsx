import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/atoms/Reveal';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
import { useLightbox } from '../hooks/useLightbox';
import { eventItems } from '../content/eventItems';

const performerPhotos = [
  { src: '/img/eventos/performers1.jpg', alt: 'Performers en látex en un evento fetichista' },
  { src: '/img/eventos/performers2.jpg', alt: 'Dominación en vivo durante un show de performers' },
];

export function EventosPage() {
  const { t } = useTranslation();
  const lightbox = useLightbox();
  const performersLightbox = useLightbox();
  const lightboxImages = eventItems.map((item) => ({ src: item.image, alt: item.title }));

  return (
    <div
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('/img/fondo1.jpg')" }}
    >
      <div className="mx-auto max-w-[1320px] px-4">
        <Reveal>
          <h1 className="mb-4 text-center font-heading text-4xl font-bold text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] md:text-5xl">
            {t('eventos:title')}
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-white/70">{t('eventos:description')}</p>
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
                    {t('eventos:viewFull')}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-16 max-w-5xl rounded-[20px] border border-white/20 bg-black/50 p-6 text-center shadow-2xl backdrop-blur-sm md:p-10">
          <h2 className="mb-3 font-heading text-2xl font-bold text-white md:text-3xl">{t('eventos:performers.title')}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-white/70">{t('eventos:performers.description')}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {performerPhotos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => performersLightbox.open(i)}
                aria-label={`Ver ${photo.alt}`}
                className="group overflow-hidden rounded-2xl border-2 border-brand shadow-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
          <div className="mt-8">
            <Button to="/shows" variant="danger">
              <Icon name="fas fa-theater-masks" />
              {t('eventos:performers.cta')}
            </Button>
          </div>
        </Reveal>
      </div>
      <GalleryLightbox images={lightboxImages} index={lightbox.index} onClose={lightbox.close} />
      <GalleryLightbox images={performerPhotos} index={performersLightbox.index} onClose={performersLightbox.close} />
    </div>
  );
}
