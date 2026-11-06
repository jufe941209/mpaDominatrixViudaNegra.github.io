import { useTranslation } from 'react-i18next';
import { Reveal } from '../atoms/Reveal';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-black py-16">
      <Reveal className="mx-auto max-w-[1320px] px-4">
        <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="h-full border-y-[10px] border-brand p-1">
              <img src="/img/about-img.jpg" alt="Dominatrix Viuda Negra" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div
            className="flex flex-col justify-center px-6 py-10 text-center lg:col-span-7"
            style={{ background: 'linear-gradient(#b72327, rgba(0,0,0,0.8)), url(/img/about-img-1.jpg)', backgroundSize: 'cover' }}
          >
            <h1 className="mb-3 font-heading text-3xl font-semibold text-white">{t('home:about.title')}</h1>
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
              {(t('home:about.keywords', { returnObjects: true }) as string[]).map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <h4 className="mb-4 uppercase tracking-wide text-gray-200">{t('home:about.subtitle')}</h4>
            <p className="mb-6 text-center text-white/90">{t('home:about.text')}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/virtuales" variant="danger">
                <Icon name="fas fa-video" />
                Servicios Virtuales
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
