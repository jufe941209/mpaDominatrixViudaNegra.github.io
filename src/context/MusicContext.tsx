import { createContext, useContext, useState, type ReactNode } from 'react';

interface MusicContextValue {
  unlocked: boolean;
  unlock: () => void;
}

const MusicContext = createContext<MusicContextValue | null>(null);

function readAlreadyVerified() {
  try {
    return sessionStorage.getItem('vn_age_verified') === '1';
  } catch {
    return false;
  }
}

export function MusicProvider({ children }: { children: ReactNode }) {
  // If the age gate was already accepted earlier this tab session, music can play
  // on arrival at Home without waiting for another "Enter" click that won't happen.
  const [unlocked, setUnlocked] = useState(readAlreadyVerified);
  return <MusicContext.Provider value={{ unlocked, unlock: () => setUnlocked(true) }}>{children}</MusicContext.Provider>;
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error('useMusic must be used within a MusicProvider');
  return ctx;
}
