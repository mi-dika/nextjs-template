import { Result, ResultAsync, err, ok } from "neverthrow";

export type UnknownError = Error & { cause?: unknown };

export function normalizeError(error: unknown): UnknownError {
  if (error instanceof Error) {
    return error;
  }
  return new Error(typeof error === "string" ? error : "Unknown error", {
    cause: error
  });
}

export function safe<T>(operation: () => T): Result<T, UnknownError> {
  try {
    return ok(operation());
  } catch (error) {
    return err(normalizeError(error));
  }
}

export function safeAsync<T>(
  operation: () => Promise<T>
): ResultAsync<T, UnknownError> {
  return ResultAsync.fromPromise(operation(), normalizeError);
}

