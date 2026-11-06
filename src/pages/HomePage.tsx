import { HeroCarousel } from '../components/organisms/HeroCarousel';
import { AboutSection } from '../components/organisms/AboutSection';
import { DominaPhilosophySection } from '../components/organisms/DominaPhilosophySection';
import { ThroneGallerySection } from '../components/organisms/ThroneGallerySection';
import { HomeGallerySection } from '../components/organisms/HomeGallerySection';
import { ArtesEscenicasSection } from '../components/organisms/ArtesEscenicasSection';
import { DisenadoraModaSection } from '../components/organisms/DisenadoraModaSection';

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <DominaPhilosophySection />
      <ThroneGallerySection />
      <HomeGallerySection />
      <ArtesEscenicasSection />
      <DisenadoraModaSection />
    </>
  );
}
