import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/atoms/Reveal';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { VideoThumbnail } from '../components/molecules/VideoThumbnail';
import { VideoModal } from '../components/organisms/VideoModal';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { videos, videoPosters } from '../content/videos';
import { contenidoDetails } from '../content/contenidoDetails';

const FICHA_ROWS = ['rol', 'fotos', 'juguetes', 'outfit', 'hashtags', 'precioCop', 'precioUsd'] as const;

export function ContenidoDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const [videoOpen, setVideoOpen] = useState(false);

  const detail = contenidoDetails.find((item) => item.slug === slug);
  if (!detail) return <Navigate to="/contenido" replace />;

  return (
    <div
      className="min-h-screen bg-cover bg-center pt-28 pb-16"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(183,35,39,0.3), rgba(0,0,0,0.95)), url('/img/hero-bg.png.jpeg')",
      }}
    >
      <div className="mx-auto max-w-[1000px] px-4">
        <Reveal className="mb-8 text-center">
          <Icon name={detail.icon} className="mb-3 text-4xl text-brand" />
          <h1 className="mb-3 font-heading text-3xl font-bold text-white md:text-4xl">{t(detail.titleKey)}</h1>
          <p className="mx-auto max-w-xl text-white/80">{t(detail.descriptionKey)}</p>
        </Reveal>

        <Reveal className="mb-10 rounded-[20px] border border-white/20 bg-black/50 p-6 text-center shadow-2xl backdrop-blur-sm md:p-10">
          <VideoThumbnail
            posterSrc={videoPosters[detail.videoKey]}
            alt={detail.videoAlt}
            heightClass="h-[260px] sm:h-[380px]"
            onClick={() => setVideoOpen(true)}
          />
        </Reveal>

        <Reveal className="grid gap-6 md:grid-cols-[2fr_3fr] md:items-stretch">
          {/* Same cover image as this content's card on /contenido */}
          <div className="overflow-hidden rounded-[20px] border-2 border-brand bg-black shadow-2xl">
            <img
              src={detail.image}
              alt={detail.imageAlt}
              loading="lazy"
              className="h-[380px] w-full object-cover object-top md:h-full md:min-h-[420px]"
            />
          </div>

          <div className="rounded-[20px] border-2 border-brand bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-6 shadow-2xl md:p-8">
          <h2 className="mb-6 text-center font-heading text-xl font-bold uppercase tracking-wide text-brand">
            {t('contenido:fichaTecnica.title')}
          </h2>
          <dl className="mb-8 divide-y divide-white/10 border-y border-white/10">
            {FICHA_ROWS.map((key) => (
              <div key={key} className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm font-semibold uppercase tracking-wide text-white/60">{t(`contenido:fichaTecnica.${key}`)}</dt>
                <dd className="text-right text-sm font-bold text-white">{t(`contenido:fichaTecnica.values.${detail.fichaKey}.${key}`)}</dd>
              </div>
            ))}
          </dl>
          <div className="text-center">
            <Button href={buildWhatsAppUrl(detail.whatsappMessage)} variant="success">
              <Icon name="fab fa-whatsapp" />
              {t('contenido:fichaTecnica.comprar')}
            </Button>
          </div>
          </div>
        </Reveal>
      </div>

      {videoOpen && <VideoModal url={videos[detail.videoKey]} onClose={() => setVideoOpen(false)} />}
    </div>
  );
}
