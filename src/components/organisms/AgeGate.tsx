import { useEffect, useState } from 'react';

const STORAGE_KEY = 'vn_age_verified';
const EXIT_URL = 'https://www.google.com';

function readVerified() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

export function AgeGate() {
  const [verified, setVerified] = useState(readVerified);

  useEffect(() => {
    if (verified) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [verified]);

  if (verified) return null;

  function handleEnter() {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* localStorage unavailable, gate will reappear on next load */
    }
    setVerified(true);
  }

  function handleExit() {
    window.location.href = EXIT_URL;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto p-4 py-10"
    >
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center brightness-[0.35] blur-2xl"
        style={{ backgroundImage: "url('/img/fondoreglas.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-brand-dark/80"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg animate-fadeInUp rounded-2xl border border-brand/50 bg-black/90 p-6 text-center shadow-[0_0_80px_rgba(183,35,39,0.45)] sm:p-10">
        <img
          src="/img/logo.png"
          alt="Viuda Negra"
          className="mx-auto mb-4 w-16 drop-shadow-[0_0_18px_rgba(183,35,39,0.8)] sm:w-20"
        />

        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-brand/60 bg-brand/10 px-4 py-1 text-xs font-bold tracking-widest text-brand">
          <span>+18</span>
          <span className="h-1 w-1 rounded-full bg-brand" />
          <span>SOLO ADULTOS · ADULTS ONLY</span>
        </div>

        <h1 id="age-gate-title" className="mb-1 font-heading text-2xl font-semibold text-white sm:text-3xl">
          Advertencia de Contenido para Adultos
        </h1>
        <p className="mb-6 text-sm leading-relaxed text-white/80">
          Este sitio web contiene material exclusivo para adultos, incluyendo temática BDSM, fetiches
          y contenido de connotación sexual. Al ingresar confirmas que eres mayor de{' '}
          <span className="font-bold text-brand">18 años</span> (mayoría de edad legal en Colombia y en
          tu país de residencia) y que deseas acceder a este contenido por voluntad propia. Al continuar
          aceptas nuestros Términos de Servicio y Política de Privacidad.
        </p>

        <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-brand to-transparent" />

        <h2 className="mb-1 font-heading text-xl font-semibold text-white sm:text-2xl">
          Adult Content Warning
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-white/80">
          This website contains material exclusively for adults, including BDSM, fetish, and sexually
          explicit themes. By entering you confirm that you are at least{' '}
          <span className="font-bold text-brand">18 years old</span> (the legal age of majority in
          Colombia and your country of residence) and that you wish to access this content
          voluntarily. By continuing you agree to our Terms of Service and Privacy Policy.
        </p>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={handleExit}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-bold text-white/70 transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:text-white"
          >
            No, soy menor de edad · Exit
          </button>
          <button
            type="button"
            onClick={handleEnter}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand to-brand-dark px-8 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-brand-dark hover:to-brand hover:shadow-xl active:scale-100"
          >
            Sí, soy mayor de 18 años · Enter
          </button>
        </div>
      </div>
    </div>
  );
}
