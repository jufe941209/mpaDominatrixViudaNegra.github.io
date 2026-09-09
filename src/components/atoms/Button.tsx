import type { ReactNode } from 'react';

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
  onClick?: () => void;
  variant?: Variant;
  pill?: boolean;
  className?: string;
  external?: boolean;
}

export function Button({ children, href, onClick, variant = 'danger', pill = true, className = '', external = true }: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 px-6 py-2.5 font-bold text-sm shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 focus-visible:outline-offset-4 ${pill ? 'rounded-full' : 'rounded-lg'} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={base} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base}>
      {children}
    </button>
  );
}
