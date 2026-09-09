# Viuda Negra — React SPA

Migración del sitio original en PHP a una SPA en React + TypeScript + Tailwind, con atomic design y sistema de traducción unificado (react-i18next).

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build   # genera dist/
npm run preview # sirve el build localmente para verificar
```

## Estructura

- `src/components/{atoms,molecules,organisms,templates}` — atomic design.
- `src/pages` — una página por ruta.
- `src/content` — datos tipados (categorías de prácticas, galerías, servicios, prensa, etc.). Agregar una nueva categoría en `practicas` page es una línea nueva en `content/practiceCategories.ts`.
- `src/locales/{es,en}` — diccionarios de traducción por namespace. `src/locales/i18n.ts` los registra.
- `public/img` — todas las imágenes del sitio, servidas como assets estáticos.

## Despliegue (Vercel)

`vercel.json` en la raíz del repo define el build (`npm run build`), el output (`dist/`), el rewrite de SPA y los redirects desde las URLs `.php` antiguas. El repo ya está enlazado al proyecto de Vercel `mpa-viuda-negra` (ver `.vercel/project.json`) con Root Directory `.`, así que `vercel --prod` o un push a la rama conectada despliega directo.
