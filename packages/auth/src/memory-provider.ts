import { okAsync, ResultAsync } from "neverthrow";
import type { AuthSession } from "./types";
import { BaseAuthProvider } from "./provider";

export class MemoryAuthProvider extends BaseAuthProvider {
  constructor(private readonly session: AuthSession) {
    super();
  }

  protected async fetchSession(): Promise<AuthSession | null> {
    return this.session;
  }

  override signIn(): ResultAsync<AuthSession, Error> {
    return okAsync(this.session);
  }
}

