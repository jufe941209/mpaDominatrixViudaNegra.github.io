import { createContext, useContext, useState, type ReactNode } from 'react';
import { isAgeVerified } from '../lib/ageVerification';

interface MusicContextValue {
  unlocked: boolean;
  unlock: () => void;
}

const MusicContext = createContext<MusicContextValue | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  // If the age gate was already accepted earlier this browser session, music can play
  // on arrival at Home without waiting for another "Enter" click that won't happen.
  const [unlocked, setUnlocked] = useState(isAgeVerified);
  return <MusicContext.Provider value={{ unlocked, unlock: () => setUnlocked(true) }}>{children}</MusicContext.Provider>;
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error('useMusic must be used within a MusicProvider');
  return ctx;
}
