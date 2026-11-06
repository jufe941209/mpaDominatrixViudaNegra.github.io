import { useTranslation } from 'react-i18next';
import { Icon } from '../atoms/Icon';
import { Reveal } from '../atoms/Reveal';
import { pressItems } from '../../content/pressItems';

export function PressCardList() {
  const { t } = useTranslation();
  const [featured, ...rest] = pressItems;

  return (
    <div>
      <Reveal>
        <div className="mb-8 grid grid-cols-1 overflow-hidden rounded-[20px] border border-white/20 bg-white/95 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src={featured.image}
              alt={t(featured.titleKey)}
              loading="lazy"
              className="h-[260px] w-full object-cover md:h-full"
            />
          </div>
          <div className="flex flex-col justify-center p-8 text-left md:p-10">
            <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              <Icon name="fas fa-star" /> {t('prensa:featured')}
            </span>
            <h3 className="mb-4 font-heading text-2xl font-bold text-brand md:text-3xl">{t(featured.titleKey)}</h3>
            <p className="mb-6 leading-relaxed text-gray-700">{t(featured.textKey)}</p>
            <a
              href={featured.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-brand to-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:scale-105"
            >
              {t('prensa:click')}
              <Icon name="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item, i) => (
          <Reveal key={item.id} delayMs={(i % 3) * 80}>
            <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-white/20 bg-white/95 shadow-xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2">
              <img src={item.image} alt={t(item.titleKey)} loading="lazy" className="h-[180px] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6 text-left">
                <h3 className="mb-2 font-heading text-lg font-bold text-brand">{t(item.titleKey)}</h3>
                <p className="mb-4 line-clamp-4 flex-1 text-sm leading-relaxed text-gray-700">{t(item.textKey)}</p>
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-dark"
                >
                  {t('prensa:click')}
                  <Icon name="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
