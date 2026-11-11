import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/atoms/Reveal';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { siteConfig } from '../content/siteConfig';
import { wishlistLinks } from '../content/wishlistLinks';

const STEP_ICONS = ['fas fa-hand-pointer', 'fas fa-gift', 'fab fa-whatsapp'];

export function WishlistPage() {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen bg-cover bg-center pt-28 pb-20"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(0,0,0,0.88), rgba(183,35,39,0.4), rgba(0,0,0,0.95)), url('/img/throne/throne2.jpg')",
      }}
    >
      <div className="mx-auto max-w-[1100px] px-4">
        <Reveal className="mb-12 text-center">
          <Icon name="fas fa-crown" className="mb-4 text-5xl text-brand [text-shadow:2px_2px_8px_rgba(0,0,0,0.6)]" />
          <h1 className="mb-3 font-heading text-4xl font-bold text-white [text-shadow:2px_2px_6px_rgba(0,0,0,0.7)] md:text-6xl">
            {t('wishlist:title')}
          </h1>
          <p className="mb-4 font-heading text-lg italic text-white/90 md:text-xl">{t('wishlist:subtitle')}</p>
          <p className="mx-auto max-w-2xl text-center leading-relaxed text-white/80">{t('wishlist:description')}</p>
        </Reveal>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistLinks.map((link, i) => (
            <Reveal key={link.id} delayMs={i * 70} className="h-full">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center rounded-[20px] border-2 border-brand bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-8 text-center shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-brand/30"
              >
                <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon name={link.icon} />
                </span>
                <h2 className="mb-2 font-heading text-xl font-bold text-white">{t(link.titleKey)}</h2>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-white/70">{t(link.descriptionKey)}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand transition-colors group-hover:text-white">
                  <Icon name="fas fa-arrow-up-right-from-square" />
                  {t('wishlist:open')}
                </span>
              </a>
            </Reveal>
          ))}

          <Reveal delayMs={wishlistLinks.length * 70} className="h-full">
            <a
              href={siteConfig.wishlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-white/40 bg-black/30 p-8 text-center shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:border-brand"
            >
              <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 text-2xl text-white/80 transition-colors group-hover:border-brand group-hover:text-brand">
                <Icon name="fas fa-link" />
              </span>
              <h2 className="mb-2 font-heading text-xl font-bold text-white">{t('wishlist:cta')}</h2>
              <p className="text-sm text-white/60">linktr.ee/KinksterJade</p>
            </a>
          </Reveal>
        </div>

        <Reveal className="mb-12 rounded-[20px] border border-white/10 bg-black/50 p-8 shadow-2xl backdrop-blur-sm md:p-10">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-brand md:text-3xl">{t('wishlist:steps.title')}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {(['1', '2', '3'] as const).map((n, i) => (
              <div key={n} className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-xl text-white shadow-lg">
                  <Icon name={STEP_ICONS[i]} />
                </span>
                <h3 className="mb-2 font-heading text-lg font-bold text-white">{t(`wishlist:steps.${n}.title`)}</h3>
                <p className="text-sm text-white/70">{t(`wishlist:steps.${n}.text`)}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mx-auto max-w-xl rounded-[20px] border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-8 text-center shadow-2xl md:p-10">
          <Icon name="fas fa-heart" className="mb-4 text-3xl text-brand" />
          <p className="mb-6 italic text-white/80">{t('wishlist:note')}</p>
          <Button href={buildWhatsAppUrl('Hola, ya te compré algo de tu lista de deseos')} variant="success">
            <Icon name="fa fa-whatsapp" />
            {t('wishlist:whatsappCta')}
          </Button>
        </Reveal>
      </div>
    </div>
  );
}
