import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMusic } from '../../context/MusicContext';
import { Icon } from '../atoms/Icon';
import { loadYouTubeApi, type YouTubePlayer } from '../../lib/youtube';

const VIDEO_ID = '28rs5YY2yBE';
const SONG_TITLE = 'BDSM';
const SONG_CREDIT = 'DeathbyRomy';
const SONG_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

const TARGET_VOLUME = 20;

/**
 * Plays background music on the Home page only, via YouTube's official IFrame Player API
 * (never a ripped/rehosted audio file) so the song stays properly attributed and only
 * ever playable through YouTube's own player and terms.
 *
 * We request unmuted autoplay at low volume right as the player is created (as close to
 * the age gate's "Enter" click as an async-loaded iframe can get), which many browsers
 * honor. Browsers that still block audio-on-autoplay force it silently muted with no way
 * for us to detect that from a cross-origin iframe, so the visible control always lets a
 * visitor turn the sound on/off with one real click — a gesture every browser always honors.
 */
export function BackgroundMusicPlayer() {
  const { pathname } = useLocation();
  const { unlocked } = useMusic();
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [ready, setReady] = useState(false);
  // Optimistic unmuted autoplay is attempted below, but a cross-origin iframe never tells us
  // whether the browser actually honored it or silently force-muted it — so the UI always
  // starts as "click to make sure it's on" rather than claiming a success we can't verify.
  const [audible, setAudible] = useState(false);
  const isHome = pathname === '/';
  const isHomeRef = useRef(isHome);
  isHomeRef.current = isHome;

  // The player's methods only exist after onReady, and the iframe can be torn down at any
  // time — so every call goes through here and can never crash the page.
  function withPlayer(fn: (player: YouTubePlayer) => void) {
    const player = playerRef.current;
    if (!player || !ready) return;
    try {
      fn(player);
    } catch {
      /* player not attached/ready: ignore */
    }
  }

  useEffect(() => {
    if (!isHome || !unlocked || playerRef.current) return;
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !hostRef.current || !window.YT || playerRef.current) return;
      // YouTube replaces the element it's given with an iframe. Hand it a child we create
      // ourselves (not a React-owned node) so React never tries to reconcile a node it lost.
      const target = document.createElement('div');
      hostRef.current.appendChild(target);
      playerRef.current = new window.YT.Player(target, {
        videoId: VIDEO_ID,
        playerVars: { autoplay: 1, mute: 0, loop: 1, playlist: VIDEO_ID, controls: 0, playsinline: 1 },
        events: {
          onReady: (event: { target: YouTubePlayer }) => {
            try {
              event.target.unMute();
              event.target.setVolume(TARGET_VOLUME);
              // The visitor may have left Home while the player was loading.
              if (isHomeRef.current) event.target.playVideo();
              else event.target.pauseVideo();
            } catch {
              /* ignore */
            }
            setReady(true);
          },
        },
      });
    });

    return () => {
      cancelled = true;
    };
  }, [isHome, unlocked]);

  useEffect(() => {
    withPlayer((player) => {
      if (isHome) player.playVideo();
      else player.pauseVideo();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHome, ready]);

  function handleUnmute() {
    withPlayer((player) => {
      player.unMute();
      player.setVolume(TARGET_VOLUME);
      player.playVideo();
      setAudible(true);
    });
  }

  function handleMute() {
    withPlayer((player) => {
      player.mute();
      setAudible(false);
    });
  }

  return (
    <>
      <div ref={hostRef} className="pointer-events-none fixed -left-[9999px] -top-[9999px] h-px w-px opacity-0" aria-hidden="true" />
      {isHome && unlocked && (
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
          <br />
          <span className="font-bold text-brand">{audible ? 'Sonando' : 'Haz clic para escuchar'}</span>
          <br />
          <a href={SONG_URL} target="_blank" rel="noopener noreferrer" className="text-brand underline">
            Ver canción original en YouTube
          </a>
        </span>
      </div>
      )}
    </>
  );
}
