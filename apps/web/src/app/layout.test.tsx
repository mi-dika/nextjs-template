import { describe, expect, it } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import RootLayout, { metadata } from "./layout";
import { DEFAULT_LOCALE, translations } from "../lib/translations";

describe("RootLayout", () => {
  it("exposes metadata from translations", () => {
    const t = translations[DEFAULT_LOCALE];
    expect(metadata.title).toBe(t["meta.title"]);
    expect(metadata.description).toBe(t["meta.description"]);
  });

  it("renders the html lang and children", () => {
    const html = renderToStaticMarkup(
      <RootLayout>
        <div data-testid="child">content</div>
      </RootLayout>
    );

    expect(html).toContain(`lang="${DEFAULT_LOCALE}"`);
    expect(html).toContain('data-testid="child"');
  });
});

