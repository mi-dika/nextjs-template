export type TranslationDictionary<L extends string = string> = Record<L, Record<string, string>>;
export declare function createTranslator<L extends string>(dictionary: TranslationDictionary<L>, fallback: L): (key: string, locale?: L) => string;
export declare function listLocales<L extends string>(dictionary: TranslationDictionary<L>): L[];
//# sourceMappingURL=i18n.d.ts.map