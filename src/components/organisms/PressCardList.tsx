import { useTranslation } from 'react-i18next';
import { Reveal } from '../atoms/Reveal';
import { pressItems } from '../../content/pressItems';

export function PressCardList() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {pressItems.map((item, i) => (
        <Reveal key={item.id} delayMs={Math.min(i, 4) * 60}>
          <div className="grid grid-cols-1 items-center gap-6 rounded-[20px] border border-white/20 bg-white/95 p-8 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 md:grid-cols-3">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src={item.image} alt={t(item.titleKey)} className="h-[200px] w-full object-cover" />
            </div>
            <div className="md:col-span-2">
              <h3 className="mb-3 font-heading text-xl font-bold text-brand">{t(item.titleKey)}</h3>
              <p className="mb-4 leading-relaxed text-gray-800">{t(item.textKey)}</p>
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gradient-to-br from-brand to-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:scale-105"
              >
                {t('prensa:click')}
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
