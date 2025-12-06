# @midika/utils

Shared utilities for error handling and i18n.

## neverthrow Helpers

- `safe` – wraps sync operations
- `safeAsync` – wraps async operations
- `normalizeError` – converts unknown to `Error`

## i18n Helpers

- `createTranslator(dictionary, fallback)` – returns `(key, locale) => string`
- `listLocales(dictionary)` – returns available locales

