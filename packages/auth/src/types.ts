import { ResultAsync } from "neverthrow";

export type Role = string;

export interface AuthUser {
  id: string;
  email?: string;
  name?: string;
  roles?: Role[];
  metadata?: Record<string, unknown>;
}

export interface AuthSession {
  user: AuthUser | null;
  token?: string;
  refreshToken?: string;
  expiresAt?: number;
}

export interface AuthProvider {
  getSession(): ResultAsync<AuthSession, Error>;
  signIn(params?: Record<string, unknown>): ResultAsync<AuthSession, Error>;
  signOut(): ResultAsync<void, Error>;
}

export type AuthProviderName = "convex" | "workos" | "clerk" | "memory";

