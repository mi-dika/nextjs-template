export type TranslationDictionary<L extends string = string> = Record<
  L,
  Record<string, string>
>;

export function createTranslator<L extends string>(
  dictionary: TranslationDictionary<L>,
  fallback: L
) {
  return (key: string, locale: L = fallback): string => {
    return (
      dictionary[locale]?.[key] ??
      dictionary[fallback]?.[key] ??
      key
    );
  };
}

export function listLocales<L extends string>(
  dictionary: TranslationDictionary<L>
): L[] {
  return Object.keys(dictionary) as L[];
}

