import type {
  AuthProvider,
  AuthProviderName,
  AuthSession,
  AuthUser
} from "./types";
import { BaseAuthProvider } from "./provider";
import { ConvexAuthProvider } from "./providers/convex";
import { WorkOSAuthProvider } from "./providers/workos";
import { ClerkAuthProvider } from "./providers/clerk";
import { MemoryAuthProvider } from "./memory-provider";

export type { AuthProvider, AuthProviderName, AuthSession, AuthUser };
export {
  BaseAuthProvider,
  ConvexAuthProvider,
  WorkOSAuthProvider,
  ClerkAuthProvider,
  MemoryAuthProvider
};

export function createAuthClient(
  provider: AuthProviderName,
  options?: {
    sessionFetcher?: () => Promise<AuthSession | null>;
    session?: AuthSession;
  }
): AuthProvider {
  switch (provider) {
    case "convex":
      return new ConvexAuthProvider(options?.sessionFetcher);
    case "workos":
      return new WorkOSAuthProvider(options?.sessionFetcher);
    case "clerk":
      return new ClerkAuthProvider(options?.sessionFetcher);
    case "memory":
      return new MemoryAuthProvider(
        options?.session ?? {
          user: { id: "dev-user", email: "dev@example.com", name: "Dev User" }
        }
      );
    default:
      return new MemoryAuthProvider({ user: null });
  }
}

export async function withAuthSession(
  client: AuthProvider
): Promise<AuthSession> {
  return client.getSession().unwrapOr({ user: null });
}

