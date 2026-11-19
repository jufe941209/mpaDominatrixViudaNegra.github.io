import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMusic } from '../../context/MusicContext';
import { Icon } from '../atoms/Icon';
import { loadYouTubeApi, type YouTubePlayer } from '../../lib/youtube';

const VIDEO_ID = '28rs5YY2yBE';
const SONG_TITLE = 'BDSM';
const SONG_CREDIT = 'DeathbyRomy';
const SONG_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

/**
 * Plays background music on the Home page only, via YouTube's official IFrame Player API
 * (never a ripped/rehosted audio file) so the song stays properly attributed and only
 * ever playable through YouTube's own player and terms.
 *
 * Browsers block unmuted autoplay even right after an unrelated click (like the age
 * gate's "Enter" button), so we start muted (always allowed) and unmute at full volume
 * the moment the visitor clicks the player's own sound button — a real, direct gesture
 * the browser always honors.
 */
export function BackgroundMusicPlayer() {
  const { pathname } = useLocation();
  const { unlocked } = useMusic();
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [ready, setReady] = useState(false);
  const [audible, setAudible] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome || !unlocked || playerRef.current) return;
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !containerRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: { autoplay: 1, mute: 1, loop: 1, playlist: VIDEO_ID, controls: 0, playsinline: 1 },
        events: {
          onReady: (event: { target: YouTubePlayer }) => {
            event.target.playVideo();
            setReady(true);
          },
        },
      });
    });

    return () => {
      cancelled = true;
    };
  }, [isHome, unlocked]);

  if (!isHome || !unlocked) return null;

  function handleUnmute() {
    const player = playerRef.current;
    if (!player) return;
    player.unMute();
    player.setVolume(100);
    player.playVideo();
    setAudible(true);
  }

  function handleMute() {
    playerRef.current?.mute();
    setAudible(false);
  }

  return (
    <>
      <div ref={containerRef} className="pointer-events-none fixed -left-[9999px] -top-[9999px] h-px w-px opacity-0" aria-hidden="true" />
      <div className="animate-fadeInUp fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full border border-white/20 bg-black/75 py-2 pl-2 pr-4 shadow-lg backdrop-blur-sm">
        <button
          type="button"
          onClick={audible ? handleMute : handleUnmute}
          disabled={!ready}
          aria-label={audible ? 'Silenciar música de fondo' : 'Activar música de fondo'}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:text-brand disabled:opacity-40"
        >
          <Icon name={audible ? 'fas fa-volume-up' : 'fas fa-volume-mute'} />
        </button>
        <span className="text-xs leading-tight text-white/70">
          🎵 "{SONG_TITLE}" — {SONG_CREDIT}
          {!audible && (
            <>
              <br />
              <span className="font-bold text-brand">Haz clic para escuchar</span>
            </>
          )}
          <br />
          <a href={SONG_URL} target="_blank" rel="noopener noreferrer" className="text-brand underline">
            Ver canción original en YouTube
          </a>
        </span>
      </div>
    </>
  );
}
