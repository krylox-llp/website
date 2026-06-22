export const CONSENT_KEY = "cookie_consent";
export const CONSENT_EVENT = "cookie-consent-change";

export function setConsent(value: "accepted" | "declined") {
  localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
