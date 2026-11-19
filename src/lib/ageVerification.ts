// Age-gate acceptance is stored in a *session cookie* (no Expires/Max-Age):
// - shared by every tab/window of the same browser, so opening a page in a new tab
//   doesn't ask again (sessionStorage is per-tab, which caused the repeat prompts);
// - deleted by the browser when it is fully closed, so the gate shows again next visit.
const COOKIE_NAME = 'vn_age_verified';

export function isAgeVerified(): boolean {
  try {
    return document.cookie.split('; ').some((c) => c === `${COOKIE_NAME}=1`);
  } catch {
    return false;
  }
}

export function markAgeVerified(): void {
  try {
    document.cookie = `${COOKIE_NAME}=1; path=/; SameSite=Lax`;
  } catch {
    /* cookies blocked: gate will simply reappear */
  }
}
