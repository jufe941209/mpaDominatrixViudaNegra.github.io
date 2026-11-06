import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoByPath, constructionSeo, notFoundSeo } from '../content/seo';

const UNDER_CONSTRUCTION_PATHS = new Set(['/sexshop', '/lista-deseos', '/packages', '/sesiones']);

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Updates the document title and meta description/OG/Twitter tags for the current route. */
export function useSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const entry = seoByPath[pathname] ?? (UNDER_CONSTRUCTION_PATHS.has(pathname) ? constructionSeo : notFoundSeo);

    document.title = entry.title;
    setMetaTag('name', 'description', entry.description);
    setMetaTag('property', 'og:title', entry.title);
    setMetaTag('property', 'og:description', entry.description);
    setMetaTag('name', 'twitter:title', entry.title);
    setMetaTag('name', 'twitter:description', entry.description);
  }, [pathname]);
}
