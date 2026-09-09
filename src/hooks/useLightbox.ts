import { useState } from 'react';

export function useLightbox() {
  const [index, setIndex] = useState(-1);
  return {
    index,
    open: (i: number) => setIndex(i),
    close: () => setIndex(-1),
  };
}
