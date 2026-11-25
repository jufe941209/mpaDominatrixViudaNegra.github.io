// Titles use a script font, where words written in ALL CAPS are unreadable.
// Tag any heading whose text is all uppercase so CSS (.script-caps) renders it in
// sentence case instead. Runs on every DOM change so it also covers page changes,
// language switches and React re-renders that reset the class attribute.
const SELECTOR = 'h1, h2, h3, h4, h5, h6, .font-heading';

function isAllCaps(text: string) {
  const letters = text.replace(/[^\p{L}]/gu, '');
  return letters.length > 1 && letters === letters.toUpperCase() && letters !== letters.toLowerCase();
}

function tagHeadings(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
    const caps = isAllCaps(el.textContent ?? '');
    if (caps !== el.classList.contains('script-caps')) el.classList.toggle('script-caps', caps);
  });
}

export function startScriptHeadingFix() {
  let scheduled = false;
  const run = () => {
    scheduled = false;
    tagHeadings();
  };
  new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(run);
  }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['class'] });
  tagHeadings();
}
