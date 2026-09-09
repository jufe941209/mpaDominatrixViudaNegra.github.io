import { useEffect, useState } from 'react';

/** Mirrors the original js/main.js scroll listener: sticky + red bg past 45px. */
export function useStickyNavbar(threshold = 45) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsSticky(window.scrollY > threshold);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return isSticky;
}
