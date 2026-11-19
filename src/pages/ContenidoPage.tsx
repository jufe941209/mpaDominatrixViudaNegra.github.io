import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/atoms/Reveal';
import { Icon } from '../components/atoms/Icon';
import { contenidoDetails } from '../content/contenidoDetails';

export function ContenidoPage() {
  const { t } = useTranslation();

  return (
    <div
      className="bg-cover bg-center py-20"
      style={{ backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.92), rgba(183,35,39,0.25), rgba(0,0,0,0.95)), url(/img/fondo1.jpg)' }}
    >
      <div className="mx-auto max-w-[1100px] px-4">
        <Reveal className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">{t('contenido:title')}</h1>
          <p className="mx-auto max-w-2xl text-white/70">{t('contenido:description')}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {contenidoDetails.map((detail, i) => (
            <Reveal key={detail.slug} delayMs={i * 100} className="h-full">
              <a
                href={`/contenido/${detail.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center rounded-[20px] border-2 border-brand bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-8 text-center shadow-2xl transition-transform duration-300 hover:-translate-y-1 md:p-10"
              >
                <Icon name={detail.icon} className="mb-4 text-5xl text-brand" />
                <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">{t(detail.titleKey)}</h2>
                <div className="mb-6 w-full overflow-hidden rounded-2xl border-2 border-brand bg-black shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                  <img src={detail.image} alt={detail.imageAlt} loading="lazy" className="mx-auto h-[360px] w-full bg-black object-contain" />
                </div>
                <p className="mb-4 flex-1 leading-relaxed text-gray-300">{t(detail.descriptionKey)}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand transition-colors group-hover:text-white">
                  <Icon name="fas fa-arrow-up-right-from-square" />
                  {t('contenido:clickHint')}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
