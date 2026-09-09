import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  style?: CSSProperties;
}

/** Wraps content in a subtle fade-in-up entrance that plays once, the first time it scrolls into view. */
export function Reveal({ children, className = '', delayMs = 0, style }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      style={{ ...style, transitionDelay: visible ? `${delayMs}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
