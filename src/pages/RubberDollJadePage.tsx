import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/atoms/Reveal';
import { Icon } from '../components/atoms/Icon';
import { VideoThumbnail } from '../components/molecules/VideoThumbnail';
import { VideoModal } from '../components/organisms/VideoModal';
import { GalleryLightbox } from '../components/organisms/GalleryLightbox';
import { useLightbox } from '../hooks/useLightbox';
import { videos, videoPosters } from '../content/videos';

export function RubberDollJadePage() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language?.startsWith('en');
  const [videoOpen, setVideoOpen] = useState(false);
  const lightbox = useLightbox();

  const infographics = [
    { src: '/img/rubberdoll/limits-es.jpg', srcEn: '/img/rubberdoll/limits-en.jpg', alt: t('rubberDollJade:limitsAlt') },
    { src: '/img/rubberdoll/practice-es.jpg', srcEn: '/img/rubberdoll/practice-en.jpg', alt: t('rubberDollJade:enjoyAlt') },
  ];
  const lightboxImages = infographics.map((item) => ({ src: isEnglish ? item.srcEn : item.src, alt: item.alt }));

  return (
    <>
      <div className="bg-black py-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <Reveal
            className="rounded-2xl p-10 text-center"
            style={{ background: 'linear-gradient(#b72327, rgba(0,0,0,0.8)), url(/img/fondo-webcam.jpg)', backgroundSize: 'cover' }}
          >
            <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">{t('rubberDollJade:pageTitle')}</h1>
            <p className="mb-4 text-center font-heading text-lg italic text-white/90">{t('rubberDollJade:tagline')}</p>
            <p className="mx-auto mb-6 max-w-3xl text-center text-white/90">{t('rubberDollJade:bio')}</p>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/60 bg-black/40 px-4 py-2 text-sm font-semibold text-white">
              <Icon name="fas fa-video" />
              {t('rubberDollJade:notice')}
            </div>
          </Reveal>
        </div>
      </div>

      <div
        className="bg-cover bg-center py-16"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url(/img/fondo-webcam.jpg)' }}
      >
        <Reveal className="mx-auto max-w-3xl px-4 text-center">
          <VideoThumbnail
            posterSrc={videoPosters.rubberDollJade}
            alt={t('rubberDollJade:videoAlt')}
            heightClass="h-[260px] sm:h-[380px]"
            onClick={() => setVideoOpen(true)}
          />
        </Reveal>
      </div>

      <div className="bg-black py-16">
        <Reveal className="mx-auto max-w-2xl px-4">
          <div className="border-y-[10px] border-brand bg-black p-1">
            <img
              src="/img/rubberdoll/jade3.jpg"
              alt={t('rubberDollJade:photoAlt')}
              loading="lazy"
              className="mx-auto max-h-[600px] w-full bg-black object-contain"
            />
          </div>
        </Reveal>
      </div>

      <div className="bg-[#fdfdfd] py-16">
        <Reveal className="mx-auto max-w-[1320px] px-4 text-center">
          <h2 className="mb-3 font-heading text-3xl font-semibold text-black">{t('rubberDollJade:dualTitle')}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">{t('rubberDollJade:dualText')}</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border-2 border-brand bg-black shadow-xl">
              <img src="/img/rubberdoll/jade1.jpg" alt={t('rubberDollJade:photo1Alt')} loading="lazy" className="mx-auto h-[420px] w-full bg-black object-contain" />
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-brand bg-black shadow-xl">
              <img src="/img/rubberdoll/jade2.jpg" alt={t('rubberDollJade:photo2Alt')} loading="lazy" className="mx-auto h-[420px] w-full bg-black object-contain" />
            </div>
          </div>
        </Reveal>
      </div>

      <div
        className="bg-cover bg-center py-16"
        style={{ backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.92), rgba(183,35,39,0.25), rgba(0,0,0,0.95)), url(/img/fondo1.jpg)' }}
      >
        <Reveal className="mx-auto max-w-[1320px] px-4 text-center">
          <h2 className="mb-3 font-heading text-3xl font-semibold text-white">{t('rubberDollJade:limitsTitle')}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-white/70">{t('rubberDollJade:limitsText')}</p>
          <button type="button" onClick={() => lightbox.open(0)} aria-label={infographics[0].alt} className="mx-auto block w-full max-w-xl bg-black">
            <img
              src={isEnglish ? infographics[0].srcEn : infographics[0].src}
              alt={infographics[0].alt}
              loading="lazy"
              className="mx-auto max-h-[600px] w-full border-y-[10px] border-brand bg-black object-contain p-1"
            />
          </button>
        </Reveal>
      </div>

      <div className="bg-[#fdfdfd] py-16">
        <Reveal className="mx-auto max-w-[1320px] px-4 text-center">
          <h2 className="mb-3 font-heading text-3xl font-semibold text-black">{t('rubberDollJade:enjoyTitle')}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">{t('rubberDollJade:enjoyText')}</p>
          <button type="button" onClick={() => lightbox.open(1)} aria-label={infographics[1].alt} className="mx-auto block w-full max-w-xl bg-black">
            <img
              src={isEnglish ? infographics[1].srcEn : infographics[1].src}
              alt={infographics[1].alt}
              loading="lazy"
              className="mx-auto max-h-[600px] w-full border-y-[10px] border-brand bg-black object-contain p-1"
            />
          </button>
        </Reveal>
      </div>

      {videoOpen && <VideoModal url={videos.rubberDollJade} onClose={() => setVideoOpen(false)} />}
      <GalleryLightbox images={lightboxImages} index={lightbox.index} onClose={lightbox.close} />
    </>
  );
}
