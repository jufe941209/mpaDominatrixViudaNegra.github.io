import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './locales/i18n'
import { App } from './App.tsx'
import { reloadForNewVersion } from './lib/lazyWithReload'
import { startScriptHeadingFix } from './lib/scriptHeadings'

// A chunk from a previous deploy failed to load: reload once to get the new build.
window.addEventListener('vite:preloadError', (event) => {
  if (reloadForNewVersion()) event.preventDefault()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

startScriptHeadingFix()
