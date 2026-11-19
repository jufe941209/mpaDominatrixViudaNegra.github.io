declare global {
  interface Window {
    YT?: {
      Player: new (el: HTMLElement, options: Record<string, unknown>) => YouTubePlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export interface YouTubePlayer {
  playVideo: () => void;
  unMute: () => void;
  setVolume: (volume: number) => void;
  mute: () => void;
}

let apiPromise: Promise<void> | null = null;

/** Loads the YouTube IFrame Player API script once and resolves when window.YT is ready. */
export function loadYouTubeApi(): Promise<void> {
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve();
      return;
    }
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
  });

  return apiPromise;
}
