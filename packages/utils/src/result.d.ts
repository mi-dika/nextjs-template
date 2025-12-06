import { Result, ResultAsync } from "neverthrow";
export type UnknownError = Error & {
    cause?: unknown;
};
export declare function normalizeError(error: unknown): UnknownError;
export declare function safe<T>(operation: () => T): Result<T, UnknownError>;
export declare function safeAsync<T>(operation: () => Promise<T>): ResultAsync<T, UnknownError>;
//# sourceMappingURL=result.d.ts.map