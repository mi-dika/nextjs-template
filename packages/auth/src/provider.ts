import { errAsync, okAsync, ResultAsync } from "neverthrow";
import { normalizeError } from "@midika/utils";
import type { AuthProvider, AuthSession } from "./types";

export abstract class BaseAuthProvider implements AuthProvider {
  protected abstract fetchSession(): Promise<AuthSession | null>;

  getSession(): ResultAsync<AuthSession, Error> {
    return ResultAsync.fromPromise(this.fetchSession(), normalizeError).map(
      (session) => session ?? { user: null }
    );
  }

  signIn(): ResultAsync<AuthSession, Error> {
    return errAsync(new Error("Sign-in not implemented for this provider"));
  }

  signOut(): ResultAsync<void, Error> {
    return okAsync(undefined);
  }
}

