import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'danger' | 'success' | 'primary' | 'dark' | 'secondary' | 'warning' | 'outline-light';

const variantClasses: Record<Variant, string> = {
  danger: 'bg-gradient-to-br from-brand to-brand-dark text-white hover:from-brand-dark hover:to-brand',
  success: 'bg-[#25d366] text-white hover:bg-[#1ebe5d]',
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  dark: 'bg-gray-900 text-white hover:bg-black',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  warning: 'bg-[#ffd700] text-black hover:bg-[#e6c200]',
  'outline-light': 'border border-white/60 text-white hover:bg-white hover:text-black',
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  /** Internal route (e.g. "/presenciales"). Navigates client-side via react-router instead of a full page load. */
  to?: string;
  onClick?: () => void;
  variant?: Variant;
  pill?: boolean;
  className?: string;
  external?: boolean;
}

export function Button({ children, href, to, onClick, variant = 'danger', pill = true, className = '', external = true }: ButtonProps) {
  const base = `group relative inline-flex items-center justify-center gap-2 overflow-hidden px-6 py-2.5 font-bold text-sm tracking-wide shadow-lg transition-all duration-300 hover:scale-105 hover:tracking-wider hover:shadow-2xl active:scale-100 focus-visible:outline-offset-4 ${pill ? 'rounded-full' : 'rounded-lg'} ${variantClasses[variant]} ${className}`;
  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={base}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={base} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base}>
      {content}
    </button>
  );
}
