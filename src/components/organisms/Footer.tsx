import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '../atoms/Icon';
import { SocialIconRow } from '../molecules/SocialIconRow';
import { siteConfig } from '../../content/siteConfig';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-[1320px] px-4 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col gap-2 text-white/80">
            <h4 className="mb-2 font-heading text-lg font-semibold text-white">{t('common:footer.contact')}</h4>
            <span><Icon name="fas fa-envelope" className="mr-2" />{t('common:footer.contact_email')}</span>
            <span><Icon name="fas fa-phone" className="mr-2" />{t('common:footer.contact_phone')}</span>
            <span className="mb-3"><Icon name="fas fa-print" className="mr-2" />{t('common:footer.contact_other')}</span>
            <div className="mt-1 flex items-center gap-2">
              <Icon name="fas fa-share" className="mr-1 text-xl text-white" />
              <SocialIconRow variant="solid" platforms={['whatsapp', 'twitter', 'instagram', 'telegram']} />
            </div>
          </div>

          <div className="flex flex-col gap-2 text-white/80">
            <h4 className="mb-2 font-heading text-lg font-semibold text-white">{t('common:footer.services')}</h4>
            <Link to="/presenciales" className="hover:text-brand transition-colors"><Icon name="fas fa-angle-right" className="mr-2" />{t('common:nav.services_presencial')}</Link>
            <Link to="/virtuales" className="hover:text-brand transition-colors"><Icon name="fas fa-angle-right" className="mr-2" />{t('common:nav.services_virtual')}</Link>
            <Link to="/virtuales" className="hover:text-brand transition-colors"><Icon name="fas fa-angle-right" className="mr-2" />{t('common:nav.services_webcam')}</Link>
            <Link to="/shows" className="hover:text-brand transition-colors"><Icon name="fas fa-angle-right" className="mr-2" />{t('common:nav.services_shows')}</Link>
          </div>

          <div className="flex flex-col gap-2 text-white/80">
            <h4 className="mb-2 font-heading text-lg font-semibold text-white">{t('common:footer.shop')}</h4>
            <Link to="/sexshop" className="hover:text-brand transition-colors"><Icon name="fas fa-angle-right" className="mr-2" />{t('common:nav.shop_sexshop')}</Link>
            <Link to="/ropa-interior" className="hover:text-brand transition-colors"><Icon name="fas fa-angle-right" className="mr-2" />{t('common:nav.shop_underwear')}</Link>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-lg font-semibold text-white">{t('common:footer.tributes')}</h4>
            <a
              href={siteConfig.socialLinks.paypal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-2xl text-white transition-colors hover:bg-blue-700"
            >
              <Icon name="fab fa-cc-paypal" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 bg-black py-4">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-center gap-2 px-4 text-sm text-white/70">
          <span><Icon name="fas fa-copyright" className="mr-2" />{t('common:footer.copyright')}</span>
        </div>
      </div>
    </footer>
  );
}
