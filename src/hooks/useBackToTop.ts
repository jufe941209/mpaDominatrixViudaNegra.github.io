import { useEffect, useState } from 'react';

/** Mirrors the original js/main.js back-to-top fade in/out past 50px. */
export function useBackToTop(threshold = 50) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > threshold);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return visible;
}
