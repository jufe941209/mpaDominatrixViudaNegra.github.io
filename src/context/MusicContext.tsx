import { createContext, useContext, useState, type ReactNode } from 'react';

interface MusicContextValue {
  unlocked: boolean;
  unlock: () => void;
}

const MusicContext = createContext<MusicContextValue | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  return <MusicContext.Provider value={{ unlocked, unlock: () => setUnlocked(true) }}>{children}</MusicContext.Provider>;
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error('useMusic must be used within a MusicProvider');
  return ctx;
}
