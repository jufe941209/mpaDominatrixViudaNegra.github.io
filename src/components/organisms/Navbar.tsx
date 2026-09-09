import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '../atoms/Icon';
import { NavDropdown, NAV_ITEM_CLASS } from '../molecules/NavDropdown';
import { navigation } from '../../content/navigation';
import { useStickyNavbar } from '../../hooks/useStickyNavbar';

const LANGUAGES = [
  { code: 'es', labelKey: 'common:nav.language_es', flag: '🇪🇸' },
  { code: 'en', labelKey: 'common:nav.language_en', flag: '🇺🇸' },
] as const;

interface NavbarProps {
  /** Overlay the navbar on top of the hero (home page only) until the user scrolls. */
  overlay?: boolean;
}

export function Navbar({ overlay = false }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const isSticky = useStickyNavbar();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const directLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${NAV_ITEM_CLASS} ${isActive ? 'font-semibold after:scale-x-100' : ''}`;

  const positionClass = overlay
    ? isSticky
      ? 'fixed inset-x-0 top-0 shadow-lg'
      : 'absolute inset-x-0 top-0'
    : 'sticky top-0 shadow-md';

  return (
    <nav className={`z-50 w-full bg-brand-scroll transition-shadow duration-300 ${positionClass}`}>
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-3 lg:px-8 lg:py-0">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-85 focus-visible:outline-white">
          <img src="/img/logo.png" alt="Viuda Negra" className={`transition-all duration-300 ${isSticky ? 'max-h-[45px]' : 'max-h-[60px]'}`} />
          <span className="font-heading text-xl font-semibold uppercase tracking-wide text-white">Viuda Negra</span>
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="rounded border border-white/60 px-3 py-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-white lg:hidden"
          aria-label="Toggle menu"
        >
          <Icon name="fas fa-bars" />
        </button>

        <div className={`${mobileOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`}>
          <div className="flex flex-col border-t border-white/20 pt-2 lg:flex-row lg:items-center lg:border-t-0 lg:pt-0">
            <NavLink to={navigation.home.path} className={directLinkClass} onClick={() => setMobileOpen(false)} end>
              {t(navigation.home.labelKey)}
            </NavLink>
            <NavLink to={navigation.practicas.path} className={directLinkClass} onClick={() => setMobileOpen(false)}>
              {t(navigation.practicas.labelKey)}
            </NavLink>
            <NavDropdown label={t(navigation.services.labelKey)} items={navigation.services.items} onNavigate={() => setMobileOpen(false)} />
            <NavDropdown label={t(navigation.gallery.labelKey)} items={navigation.gallery.items} onNavigate={() => setMobileOpen(false)} />
            <NavDropdown label={t(navigation.shop.labelKey)} items={navigation.shop.items} onNavigate={() => setMobileOpen(false)} />
            <NavDropdown label={t(navigation.news.labelKey)} items={navigation.news.items} onNavigate={() => setMobileOpen(false)} />
            <NavLink to={navigation.wishlist.path} className={directLinkClass} onClick={() => setMobileOpen(false)}>
              {t(navigation.wishlist.labelKey)}
            </NavLink>
            <NavLink to={navigation.press.path} className={directLinkClass} onClick={() => setMobileOpen(false)}>
              {t(navigation.press.labelKey)}
            </NavLink>

            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                className={`${NAV_ITEM_CLASS} w-full justify-between lg:w-auto`}
              >
                <Icon name="fas fa-globe" className="mr-1.5" />
                {t('common:nav.language')}
                <Icon name="fas fa-chevron-down" className={`ml-1.5 text-[10px] transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="static m-0 min-w-[180px] rounded-lg bg-white py-2 shadow-xl lg:absolute lg:left-0 lg:top-full">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setLangOpen(false);
                        setMobileOpen(false);
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-gray-800 transition-colors hover:bg-black hover:text-white"
                    >
                      <span>{lang.flag}</span>
                      {t(lang.labelKey)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
