import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMusic } from '../../context/MusicContext';
import { Icon } from '../atoms/Icon';

const VIDEO_ID = 'ib0zvPLVNMg';
const SONG_TITLE = 'Bloody Mi Señora';
const SONG_CREDIT = 'IDC Studios';
const SONG_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

/**
 * Plays background music on the Home page only, via YouTube's official embed
 * (never a ripped/rehosted audio file) so the song stays properly attributed
 * and playable only through YouTube's own player and terms.
 */
export function BackgroundMusicPlayer() {
  const { pathname } = useLocation();
  const { unlocked } = useMusic();
  const [muted, setMuted] = useState(false);

  if (pathname !== '/' || !unlocked) return null;

  const src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${VIDEO_ID}&controls=0&playsinline=1`;

  return (
    <>
      <iframe
        key={muted ? 'muted' : 'unmuted'}
        src={src}
        title={`Música de fondo: ${SONG_TITLE}`}
        allow="autoplay"
        className="pointer-events-none fixed -left-[9999px] -top-[9999px] h-px w-px opacity-0"
        aria-hidden="true"
      />
      <div className="animate-fadeInUp fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full border border-white/20 bg-black/75 py-2 pl-2 pr-4 shadow-lg backdrop-blur-sm">
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? 'Activar música de fondo' : 'Silenciar música de fondo'}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:text-brand"
        >
          <Icon name={muted ? 'fas fa-volume-mute' : 'fas fa-volume-up'} />
        </button>
        <span className="text-xs leading-tight text-white/70">
          🎵 "{SONG_TITLE}" — {SONG_CREDIT}
          <br />
          <a href={SONG_URL} target="_blank" rel="noopener noreferrer" className="text-brand underline">
            Ver canción original en YouTube
          </a>
        </span>
      </div>
    </>
  );
}
