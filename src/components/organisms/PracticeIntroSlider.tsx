import { Link } from 'react-router-dom';
import type { PracticeIntroImage } from '../../content/practiceTabs';

interface PracticeIntroSliderProps {
  images: PracticeIntroImage[];
}

export function PracticeIntroSlider({ images }: PracticeIntroSliderProps) {
  const track = [...images, ...images];

  return (
    <div className="group relative mx-auto mb-4 max-w-full overflow-hidden rounded-[20px] border border-white/10 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="flex w-max animate-[practice-slide_28s_linear_infinite] gap-4 py-2 group-hover:[animation-play-state:paused]">
        {track.map((image, i) => (
          <Link
            key={`${image.src}-${i}`}
            to={image.to}
            className="block h-40 w-32 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-brand shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:h-48 sm:w-36"
          >
            <img src={image.src} alt="" loading="lazy" className="h-full w-full object-cover" />
          </Link>
        ))}
      </div>
    </div>
  );
}
