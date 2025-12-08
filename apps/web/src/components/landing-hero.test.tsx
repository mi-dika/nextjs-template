import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { LandingHero } from "./landing-hero";
import { DEFAULT_LOCALE, translations } from "../lib/translations";

describe("LandingHero", () => {
  it("renders hero copy, CTAs, and GitHub badge from translations", () => {
    const html = renderToStaticMarkup(<LandingHero />);
    const t = translations[DEFAULT_LOCALE];

    expect(html).toContain(t["landing.badge"]);
    expect(html).toContain(t["landing.title"]);
    expect(html).toContain(t["landing.subtitle"]);
    expect(html).toContain(t["landing.primaryCta"]);
    expect(html).toContain(t["landing.secondaryCta"]);
    expect(html).toContain(t["landing.starCta"]);
    expect(html).toMatch(
      new RegExp(`<a[^>]+href="${t["links.repo"]}"[^>]*>`, "i"),
    );
    expect(html).toMatch(/github\.com\/mi-dika\/nextjs-template/);
  });

  it("renders feature grid and stack items", () => {
    const html = renderToStaticMarkup(<LandingHero />);
    const t = translations[DEFAULT_LOCALE];
    const featureKeys = [
      "features.modular",
      "features.auth",
      "features.ai",
      "features.testing",
      "features.dx",
    ] as const;
    const stackKeys = [
      "landing.stack.next",
      "landing.stack.convex",
      "landing.stack.turbo",
      "landing.stack.tailwind",
      "landing.stack.vitest",
    ];

    featureKeys.forEach((key) => {
      expect(html).toContain(t[`${key}.title`]);
      expect(html).toContain(t[`${key}.body`]);
    });

    stackKeys.forEach((key) => {
      expect(html).toContain(t[key]);
    });
  });

  it("renders a GitHub star counter placeholder", () => {
    const html = renderToStaticMarkup(<LandingHero />);
    const t = translations[DEFAULT_LOCALE];

    expect(html).toContain(t["landing.stars.label"]);
    expect(html).toContain(t["landing.stars.loading"]);
  });
});
