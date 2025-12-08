import { describe, expect, it } from "vitest";
import {
  DEFAULT_LOCALE,
  supportedLocales,
  translate,
  translations,
} from "./translations";

describe("translations", () => {
  it("returns strings for the default locale", () => {
    const result = translate("landing.title", DEFAULT_LOCALE);
    expect(result).toBe(translations[DEFAULT_LOCALE]["landing.title"]);
  });

  it("falls back to default locale when a translation is missing", () => {
    const fallbackKey = "meta.title";
    const translated = translate(
      fallbackKey,
      "unknown" as typeof DEFAULT_LOCALE,
    );
    expect(translated).toBe(translations[DEFAULT_LOCALE][fallbackKey]);
  });

  it("lists supported locales", () => {
    expect(supportedLocales).toContain(DEFAULT_LOCALE);
    expect(new Set(supportedLocales).size).toBe(supportedLocales.length);
  });
});
