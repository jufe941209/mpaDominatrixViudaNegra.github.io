import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '../atoms/Icon';
import type { NavLinkItem } from '../../content/navigation';

interface NavDropdownProps {
  label: string;
  items: NavLinkItem[];
  icon?: string;
  onNavigate?: () => void;
}

const NAV_ITEM_CLASS =
  'relative flex items-center px-4 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-white/85 focus-visible:outline-white lg:py-6 ' +
  "after:absolute after:bottom-2 after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 lg:after:bottom-6";
const DROPDOWN_ITEM_CLASS =
  'block px-4 py-2.5 text-sm text-gray-800 transition-colors hover:bg-black hover:text-white focus-visible:outline-brand';

export function NavDropdown({ label, items, icon, onNavigate }: NavDropdownProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${NAV_ITEM_CLASS} w-full justify-between lg:w-auto`}
      >
        {icon && <Icon name={icon} className="mr-1.5" />}
        {label}
        <Icon name="fas fa-chevron-down" className={`ml-1.5 text-[10px] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="static m-0 min-w-[220px] animate-fadeInUp rounded-lg bg-white py-2 shadow-xl lg:absolute lg:left-0 lg:top-full">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={DROPDOWN_ITEM_CLASS}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export { NAV_ITEM_CLASS };
