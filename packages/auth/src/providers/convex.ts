import { errAsync, ResultAsync } from "neverthrow";
import type { AuthSession } from "../types";
import { BaseAuthProvider } from "../provider";

type SessionFetcher = () => Promise<AuthSession | null>;

export class ConvexAuthProvider extends BaseAuthProvider {
  constructor(private readonly fetcher?: SessionFetcher) {
    super();
  }

  protected async fetchSession(): Promise<AuthSession | null> {
    if (!this.fetcher) {
      return null;
    }
    return this.fetcher();
  }

  static from(fn: SessionFetcher): ConvexAuthProvider {
    return new ConvexAuthProvider(fn);
  }

  override signIn(): ResultAsync<AuthSession, Error> {
    return errAsync(
      new Error(
        "Convex Auth sign-in is handled client-side. Use Convex Auth helpers in the web app."
      )
    );
  }
}

