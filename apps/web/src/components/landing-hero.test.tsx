import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { LandingHero } from "./landing-hero";
import { DEFAULT_LOCALE, translations } from "../lib/translations";

describe("LandingHero", () => {
  it("renders headline, subtitle, and CTAs from translations", () => {
    const html = renderToStaticMarkup(<LandingHero />);
    const t = translations[DEFAULT_LOCALE];

    expect(html).toContain(t["landing.title"]);
    expect(html).toContain(t["landing.subtitle"]);
    expect(html).toContain(t["landing.primaryCta"]);
    expect(html).toContain(t["landing.secondaryCta"]);
  });

  it("renders all feature titles and bodies", () => {
    const html = renderToStaticMarkup(<LandingHero />);
    const t = translations[DEFAULT_LOCALE];
    const featureKeys = [
      "features.modular",
      "features.auth",
      "features.ai",
      "features.testing",
      "features.dx"
    ] as const;

    featureKeys.forEach((key) => {
      expect(html).toContain(t[`${key}.title`]);
      expect(html).toContain(t[`${key}.body`]);
    });
  });

  it("uses translated doc and repo links with external targets", () => {
    const html = renderToStaticMarkup(<LandingHero />);
    const t = translations[DEFAULT_LOCALE];

    expect(html).toMatch(
      new RegExp(
        `<a[^>]+href="${t["links.docs"]}"[^>]+target="_blank"[^>]+rel="noreferrer"`,
        "i"
      )
    );
    expect(html).toMatch(
      new RegExp(
        `<a[^>]+href="${t["links.repo"]}"[^>]+target="_blank"[^>]+rel="noreferrer"`,
        "i"
      )
    );
  });
});

