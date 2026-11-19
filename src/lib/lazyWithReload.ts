import { lazy, type ComponentType } from 'react';

// After a new deploy, tabs still running the previous build request JS chunks whose
// hashed filenames no longer exist ("Failed to fetch dynamically imported module").
// When that happens, reload the page once so the browser picks up the new build.
const RELOAD_KEY = 'vn_chunk_reload_at';
const RELOAD_WINDOW_MS = 10_000;

export function isChunkLoadError(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error ?? '');
  return /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|ChunkLoadError|Loading chunk .* failed/i.test(
    msg,
  );
}

/** Reloads once; returns false if a reload already happened moments ago (avoids loops). */
export function reloadForNewVersion(): boolean {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
    if (Date.now() - last < RELOAD_WINDOW_MS) return false;
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  } catch {
    /* storage blocked: still try a single reload */
  }
  window.location.reload();
  return true;
}

export function lazyWithReload<T extends ComponentType<object>>(factory: () => Promise<T>) {
  return lazy(async () => {
    try {
      return { default: await factory() };
    } catch (error) {
      if (isChunkLoadError(error) && reloadForNewVersion()) {
        // Keep suspending while the page reloads.
        return new Promise<{ default: T }>(() => {});
      }
      throw error;
    }
  });
}
