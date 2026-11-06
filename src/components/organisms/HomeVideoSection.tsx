import { useState } from 'react';
import { Reveal } from '../atoms/Reveal';
import { VideoThumbnail } from '../molecules/VideoThumbnail';
import { VideoModal } from './VideoModal';
import { videos } from '../../content/videos';

export function HomeVideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url(/img/fondo-webcam.jpg)' }}
    >
      <Reveal className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="mb-3 font-heading text-3xl font-semibold text-white md:text-4xl">Mírame en Acción</h2>
        <p className="mx-auto mb-8 max-w-2xl text-white/70">
          Un adelanto exclusivo de la Dominatrix Viuda Negra. Dale clic para ver el video completo.
        </p>
        <VideoThumbnail
          posterSrc="/img/throne/throne1.jpg"
          alt="Video de la Dominatrix Viuda Negra"
          heightClass="h-[300px] sm:h-[460px]"
          onClick={() => setOpen(true)}
        />
      </Reveal>
      {open && <VideoModal url={videos.home} onClose={() => setOpen(false)} />}
    </div>
  );
}
