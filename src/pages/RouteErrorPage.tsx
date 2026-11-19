import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';
import { isChunkLoadError, reloadForNewVersion } from '../lib/lazyWithReload';

// Replaces React Router's default "Unexpected Application Error!" screen.
export function RouteErrorPage() {
  const error = useRouteError();
  const isStaleBuild = isChunkLoadError(error);

  useEffect(() => {
    if (isStaleBuild) reloadForNewVersion();
  }, [isStaleBuild]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-black via-black to-brand-dark/60 p-4 text-center">
      <div className="w-full max-w-md rounded-2xl border border-brand/50 bg-black/90 p-8 shadow-[0_0_80px_rgba(183,35,39,0.35)]">
        <img src="/img/logo.png" alt="Viuda Negra" className="mx-auto mb-4 w-16" />
        <h1 className="mb-2 font-heading text-2xl font-semibold text-white">
          {isStaleBuild ? 'Actualizando el sitio…' : 'Algo salió mal'}
        </h1>
        <p className="mb-6 text-sm text-white/70">
          {isStaleBuild
            ? 'Hay una nueva versión disponible. Si la página no se recarga sola, toca el botón.'
            : 'Ocurrió un error inesperado. Intenta recargar la página.'}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-full bg-gradient-to-br from-brand to-brand-dark px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            Recargar · Reload
          </button>
          <a
            href="/"
            className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-bold text-white/80 hover:bg-white/10"
          >
            Ir al inicio · Home
          </a>
        </div>
      </div>
    </div>
  );
}
