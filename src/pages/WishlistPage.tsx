import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/atoms/Reveal';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { siteConfig } from '../content/siteConfig';

const STEP_ICONS = ['fas fa-link', 'fas fa-gift', 'fab fa-whatsapp'];

export function WishlistPage() {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen bg-cover bg-center pt-28 pb-20"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(183,35,39,0.35), rgba(0,0,0,0.95)), url('/img/hero-bg.png.jpeg')",
      }}
    >
      <div className="mx-auto max-w-[900px] px-4">
        <Reveal className="mb-10 text-center">
          <Icon name="fas fa-crown" className="mb-4 text-5xl text-brand" />
          <h1 className="mb-3 font-heading text-3xl font-bold text-white md:text-5xl">{t('wishlist:title')}</h1>
          <p className="mb-4 font-heading text-lg italic text-white/90">{t('wishlist:subtitle')}</p>
          <p className="mx-auto max-w-2xl text-center leading-relaxed text-white/80">{t('wishlist:description')}</p>
        </Reveal>

        <Reveal className="mb-12 text-center">
          <Button href={siteConfig.wishlistUrl} variant="danger" className="px-10 py-4 text-base">
            <Icon name="fas fa-gift" />
            {t('wishlist:cta')}
          </Button>
        </Reveal>

        <Reveal className="mb-12 rounded-[20px] border-2 border-brand bg-black/50 p-8 shadow-2xl backdrop-blur-sm md:p-10">
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
