import { useState } from 'react';
import { Reveal } from '../components/atoms/Reveal';
import { VideoThumbnail } from '../components/molecules/VideoThumbnail';
import { VideoModal } from '../components/organisms/VideoModal';
import { videos } from '../content/videos';

export function RubberDollJadePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <div className="bg-black py-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <Reveal
            className="rounded-2xl p-10 text-center"
            style={{ background: 'linear-gradient(#b72327, rgba(0,0,0,0.8)), url(/img/fondo-webcam.jpg)', backgroundSize: 'cover' }}
          >
            <h1 className="font-heading text-3xl font-bold text-white md:text-4xl">Rubber Doll Jade</h1>
          </Reveal>
        </div>
      </div>

      <div className="bg-black py-16">
        <Reveal className="mx-auto max-w-[1320px] px-4">
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="h-full border-y-[10px] border-brand bg-black p-1">
                <img
                  src="/img/rubberdoll/jade2.jpg"
                  alt="Rubber Doll Jade 1"
                  loading="lazy"
                  className="h-full min-h-[320px] w-full bg-black object-contain"
                />
              </div>
            </div>
            <div
              className="flex flex-col justify-center px-6 py-10 text-center lg:col-span-7"
              style={{ background: 'linear-gradient(#b72327, rgba(0,0,0,0.85))' }}
            >
              <h2 className="mb-4 font-heading text-3xl font-semibold text-white">Rubber Doll Jade</h2>
              <p className="text-center text-white/90">Muy pronto encontrarás aquí toda la información sobre esta faceta.</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        className="bg-cover bg-center py-16"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url(/img/fondo-webcam.jpg)' }}
      >
        <Reveal className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">Mírame en Acción</h2>
          <p className="mb-8 text-white/70">Dale clic para ver el video de Rubber Doll Jade.</p>
          <VideoThumbnail
            posterSrc="/img/fondo-webcam.jpg"
            alt="Video de Rubber Doll Jade"
            heightClass="h-[260px] sm:h-[380px]"
            onClick={() => setVideoOpen(true)}
          />
        </Reveal>
      </div>

      <div className="bg-black py-16">
        <Reveal className="mx-auto max-w-[1320px] px-4">
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-12">
            <div
              className="order-2 flex flex-col justify-center px-6 py-10 text-center lg:order-1 lg:col-span-7"
              style={{ background: 'linear-gradient(rgba(0,0,0,0.85), #b72327)' }}
            >
              <h2 className="mb-4 font-heading text-3xl font-semibold text-white">Rubber Doll Jade</h2>
              <p className="text-center text-white/90">Muy pronto conocerás más sobre esta faceta de la Dominatrix Viuda Negra.</p>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <div className="h-full border-y-[10px] border-brand bg-black p-1">
                <img
                  src="/img/rubberdoll/jade1.jpg"
                  alt="Rubber Doll Jade 2"
                  loading="lazy"
                  className="h-full min-h-[320px] w-full bg-black object-contain"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {videoOpen && <VideoModal url={videos.rubberDollJade} onClose={() => setVideoOpen(false)} />}
    </>
  );
}
