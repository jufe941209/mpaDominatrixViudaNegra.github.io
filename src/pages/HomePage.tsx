import { HeroCarousel } from '../components/organisms/HeroCarousel';
import { AboutSection } from '../components/organisms/AboutSection';
import { HomeVideoSection } from '../components/organisms/HomeVideoSection';
import { WhyChooseSection } from '../components/organisms/WhyChooseSection';
import { ThroneGallerySection } from '../components/organisms/ThroneGallerySection';
import { HomeGallerySection } from '../components/organisms/HomeGallerySection';
import { ArtesEscenicasSection } from '../components/organisms/ArtesEscenicasSection';
import { DisenadoraModaSection } from '../components/organisms/DisenadoraModaSection';

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <HomeVideoSection />
      <AboutSection />
      <WhyChooseSection />
      <ThroneGallerySection />
      <HomeGallerySection />
      <ArtesEscenicasSection />
      <DisenadoraModaSection />
    </>
  );
}
