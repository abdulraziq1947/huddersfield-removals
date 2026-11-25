/** Shared UK PECR / UK GDPR consent helpers (client-side). */
export const CONSENT_KEY = "uk_cookie_consent";
export const CONSENT_VERSION = 1;
export const CONSENT_EVENT = "uk-cookie-consent";

export type ConsentState = {
  v: number;
  functional: boolean;
  updated: string;
};

export function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (!parsed || parsed.v !== CONSENT_VERSION || typeof parsed.functional !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(functional: boolean): ConsentState {
  const state: ConsentState = {
    v: CONSENT_VERSION,
    functional,
    updated: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  } catch {
    /* private mode / blocked storage */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
  return state;
}

export function hasFunctionalConsent(): boolean {
  return readConsent()?.functional === true;
}
