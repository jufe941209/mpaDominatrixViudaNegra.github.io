import type { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  light?: boolean;
  className?: string;
}

/** Centered heading flanked by short horizontal rules, matching the site's .section-title pattern */
export function SectionHeading({ children, as: Tag = 'h2', light = false, className = '' }: SectionHeadingProps) {
  return (
    <div className={`flex items-center justify-center gap-6 ${className}`}>
      <span className={`h-px w-12 ${light ? 'bg-white/70' : 'bg-brand'}`} />
      <Tag className={`text-center font-heading font-semibold uppercase ${light ? 'text-white' : 'text-black'}`}>
        {children}
      </Tag>
      <span className={`h-px w-12 ${light ? 'bg-white/70' : 'bg-brand'}`} />
    </div>
  );
}
