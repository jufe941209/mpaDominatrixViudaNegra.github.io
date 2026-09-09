import { useTranslation } from 'react-i18next';
import { Icon } from '../components/atoms/Icon';
import { Button } from '../components/atoms/Button';
import { Reveal } from '../components/atoms/Reveal';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { UnderwearPricingTiers } from '../components/organisms/UnderwearPricingTiers';
import { underwearAdditionalKeys } from '../content/underwearData';

export function RopaInteriorPage() {
  const { t } = useTranslation();
  const termItems = t('ropaInterior:terms.items', { returnObjects: true }) as string[];

  return (
    <div
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/fondo1.jpg')" }}
    >
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <h1 className="mb-2 text-center font-heading text-4xl font-bold text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] md:text-5xl">
            {t('ropaInterior:title')}
          </h1>
          <p className="mb-12 text-center font-medium text-brand">{t('ropaInterior:description')}</p>
        </Reveal>

        <Reveal>
          <section className="mb-10 rounded-[20px] border border-white/20 bg-white/95 p-8 shadow-2xl backdrop-blur-sm">
            <h2 className="mb-6 text-center font-heading text-2xl font-bold text-brand">{t('ropaInterior:gallery.title')}</h2>
            <div className="mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <img src="/img/tienda/interiorUsada1.jpg" alt="Ropa Interior Usada 1" className="w-full rounded-2xl shadow-lg" />
              <img src="/img/tienda/interiorUsada2.jpg" alt="Ropa Interior Usada 2" className="w-full rounded-2xl shadow-lg" />
            </div>
            <p className="text-center italic text-gray-600">{t('ropaInterior:gallery.caption')}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-10 rounded-[20px] border border-white/20 bg-white/95 p-8 shadow-2xl backdrop-blur-sm">
            <h2 className="mb-6 text-center font-heading text-2xl font-bold text-brand">{t('ropaInterior:example.title')}</h2>
            <div className="mb-4 flex justify-center">
              <img src="/img/tienda/interior1.jpg" alt={t('ropaInterior:example.title')} className="max-w-xs rounded-2xl shadow-lg" />
            </div>
            <p className="text-center italic text-gray-600">{t('ropaInterior:example.caption')}</p>
          </section>
        </Reveal>

        <div className="mb-10">
          <UnderwearPricingTiers />
        </div>

        <Reveal>
          <section className="mb-10 rounded-[20px] border border-white/20 bg-white/95 p-8 shadow-2xl backdrop-blur-sm">
            <h2 className="mb-6 text-center font-heading text-2xl font-bold text-brand">{t('ropaInterior:additionalServices.title')}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {underwearAdditionalKeys.map((key) => (
                <div key={key} className="rounded-xl border-2 border-brand/20 bg-brand/10 p-4 text-center transition-colors duration-300 hover:bg-brand/20">
                  <h4 className="mb-1 font-bold text-brand">{t(`ropaInterior:additionalServices.${key}.title`)}</h4>
                  <p className="text-center text-sm text-gray-600">{t(`ropaInterior:additionalServices.${key}.description`)}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-10 rounded-[20px] border border-white/20 bg-white/95 p-8 shadow-2xl backdrop-blur-sm">
            <h2 className="mb-6 text-center font-heading text-2xl font-bold text-brand">{t('ropaInterior:terms.title')}</h2>
            <ul className="space-y-2">
              {termItems.map((term, i) => (
                <li key={i} className="relative pl-6 text-left text-gray-800">
                  <span className="absolute left-0 font-bold text-brand">•</span>
                  {term}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <div className="text-center">
          <Button href={buildWhatsAppUrl('Hola! Me interesa información sobre ropa interior usada')} variant="danger" pill={false}>
            <Icon name="fab fa-whatsapp" />
            {t('ropaInterior:mainCta')}
          </Button>
        </div>
      </div>
    </div>
  );
}
