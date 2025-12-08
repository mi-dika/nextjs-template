import type { AuthSession } from "@midika/auth";

export const DEMO_SESSION_KEY = "midika-demo-session";

export function readSession(): AuthSession | null {
  if (typeof window === "undefined") return null;
  if (
    !window.localStorage ||
    typeof window.localStorage.getItem !== "function"
  ) {
    return null;
  }
  const raw = window.localStorage.getItem(DEMO_SESSION_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
}

export function persistSession(session: AuthSession) {
  if (typeof window === "undefined") return;
  if (
    !window.localStorage ||
    typeof window.localStorage.setItem !== "function"
  ) {
    return;
  }
  window.localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(session));
}

export function clearSession() {
  if (typeof window === "undefined") return;
  if (
    !window.localStorage ||
    typeof window.localStorage.removeItem !== "function"
  ) {
    return;
  }
  window.localStorage.removeItem(DEMO_SESSION_KEY);
}
