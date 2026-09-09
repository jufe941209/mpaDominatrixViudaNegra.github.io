import { HeroCarousel } from '../components/organisms/HeroCarousel';
import { AboutSection } from '../components/organisms/AboutSection';
import { HomeGallerySection } from '../components/organisms/HomeGallerySection';
import { ArtesEscenicasSection } from '../components/organisms/ArtesEscenicasSection';
import { DisenadoraModaSection } from '../components/organisms/DisenadoraModaSection';

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <HomeGallerySection />
      <ArtesEscenicasSection />
      <DisenadoraModaSection />
    </>
  );
}
