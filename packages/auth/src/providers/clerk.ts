import { errAsync, ResultAsync } from "neverthrow";
import { BaseAuthProvider } from "../provider";
import type { AuthSession } from "../types";

export class ClerkAuthProvider extends BaseAuthProvider {
  constructor(private readonly fetcher?: () => Promise<AuthSession | null>) {
    super();
  }

  protected async fetchSession(): Promise<AuthSession | null> {
    if (!this.fetcher) {
      return null;
    }
    return this.fetcher();
  }

  override signIn(): ResultAsync<AuthSession, Error> {
    return errAsync(
      new Error(
        "Clerk sign-in should be wired through the Clerk Next.js SDK in the app."
      )
    );
  }
}

