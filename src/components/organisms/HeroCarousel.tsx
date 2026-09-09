import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../atoms/Icon';

interface Slide {
  image: string;
  titleKey?: string;
  textKey: string;
}

const SLIDES: Slide[] = [
  { image: '/img/carousel-1.jpg', titleKey: 'home:carousel.title_1', textKey: 'home:carousel.text_1' },
  { image: '/img/carousel-2.jpg', textKey: 'home:carousel.text_2' },
  { image: '/img/carousel-3.jpg', textKey: 'home:carousel.text_3' },
];

const AUTOPLAY_MS = 5000;

export function HeroCarousel() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setActive((i + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === active ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
          <img
            src={slide.image}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'low'}
            decoding={i === 0 ? 'sync' : 'async'}
            className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${i === active ? 'scale-105' : 'scale-100'}`}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 pt-[60px] text-center">
            <div
              className={`max-w-[900px] transition-all duration-700 ${i === active ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0'}`}
            >
              {slide.titleKey && (
                <h1 className="mb-5 font-heading text-4xl font-semibold text-white md:text-5xl">{t(slide.titleKey)}</h1>
              )}
              <p className="text-center text-lg text-white md:text-2xl">{t(slide.textKey)}</p>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(active - 1)}
        className="absolute left-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-r-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus-visible:outline-white md:h-16 md:w-16"
      >
        <Icon name="fas fa-chevron-left" className="text-xl" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(active + 1)}
        className="absolute right-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-l-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus-visible:outline-white md:h-16 md:w-16"
      >
        <Icon name="fas fa-chevron-right" className="text-xl" />
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Ir a la diapositiva ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-white ${
              i === active ? 'w-7 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
