import { describe, expect, it, vi } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LandingHero } from "./landing-hero";
import { DEFAULT_LOCALE, translations } from "../lib/translations";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  )
}));

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
});

