import { useState } from 'react';
import { HeroCarousel } from '../components/organisms/HeroCarousel';
import { AboutSection } from '../components/organisms/AboutSection';
import { DominaPhilosophySection } from '../components/organisms/DominaPhilosophySection';
import { ThroneGallerySection } from '../components/organisms/ThroneGallerySection';
import { ArtesEscenicasSection } from '../components/organisms/ArtesEscenicasSection';
import { DisenadoraModaSection } from '../components/organisms/DisenadoraModaSection';
import { Reveal } from '../components/atoms/Reveal';
import { VideoThumbnail } from '../components/molecules/VideoThumbnail';
import { VideoModal } from '../components/organisms/VideoModal';
import { videos, videoPosters } from '../content/videos';

export function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <HeroCarousel />

      <div
        className="bg-cover bg-center py-16"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url(/img/fondo-webcam.jpg)' }}
      >
        <Reveal className="mx-auto max-w-5xl px-4 text-center">
          <VideoThumbnail
            posterSrc={videoPosters.inicio}
            alt="Video de la Dominatrix Viuda Negra"
            heightClass="h-[300px] sm:h-[460px]"
            onClick={() => setVideoOpen(true)}
          />
        </Reveal>
      </div>

      <AboutSection />
      <DominaPhilosophySection />
      <ThroneGallerySection />
      <ArtesEscenicasSection />
      <DisenadoraModaSection />

      {videoOpen && <VideoModal url={videos.inicio} onClose={() => setVideoOpen(false)} />}
    </>
  );
}
