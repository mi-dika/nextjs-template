import { errAsync, ResultAsync } from "neverthrow";
import { BaseAuthProvider } from "../provider";
import type { AuthSession } from "../types";

export class WorkOSAuthProvider extends BaseAuthProvider {
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
        "WorkOS Auth requires implementing the redirect/login flow in the web app."
      )
    );
  }
}

