import { useState } from 'react';
import { Reveal } from '../components/atoms/Reveal';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { VideoThumbnail } from '../components/molecules/VideoThumbnail';
import { VideoModal } from '../components/organisms/VideoModal';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { showVideos } from '../content/videos';

export function ShowsPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="bg-black py-20">
      <div className="mx-auto max-w-[1320px] px-4">
        <Reveal>
          <h1 className="mb-4 text-center font-heading text-4xl font-bold text-white md:text-5xl">Show Eventos / Performers</h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-white/70">
            Shows en vivo, performances fetichistas y presentaciones de la Dominatrix Viuda Negra para clubes,
            fiestas temáticas y eventos privados en Bogotá.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {showVideos.map((video, i) => (
            <Reveal key={video.id} delayMs={i * 100}>
              <div className="flex h-full flex-col overflow-hidden rounded-[20px] border-2 border-brand bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <VideoThumbnail
                  posterSrc={video.poster}
                  alt={video.title}
                  heightClass="h-[220px]"
                  onClick={() => setActiveVideo(video.url)}
                />
                <div className="flex flex-1 flex-col p-5 text-center">
                  <h3 className="mb-2 font-heading font-bold text-brand">{video.title}</h3>
                  <p className="text-sm text-gray-300">{video.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={buildWhatsAppUrl('Hola, me interesa contratar un show o performance para un evento')} variant="danger">
            <Icon name="fas fa-calendar-check" />
            Contratar Show para mi Evento
          </Button>
        </div>
      </div>

      {activeVideo && <VideoModal url={activeVideo} onClose={() => setActiveVideo(null)} />}
    </div>
  );
}
