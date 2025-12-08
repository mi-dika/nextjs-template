import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { LandingFooter } from "./landing-footer";
import { DEFAULT_LOCALE, translations } from "../lib/translations";

describe("LandingFooter", () => {
  it("renders credit and external links", () => {
    const html = renderToStaticMarkup(<LandingFooter />);
    const t = translations[DEFAULT_LOCALE];

    expect(html).toContain(t["landing.footer.copyPrefix"]);
    expect(html).toContain(t["landing.footer.company"]);
    expect(html).toContain(t["landing.footer.madeWith"]);
    expect(html).toContain(t["landing.footer.madeWithLink"]);
    expect(html).toMatch(new RegExp(`<a[^>]+href="${t["links.midika"]}"`, "i"));
    expect(html).toMatch(new RegExp(`<a[^>]+href="${t["links.docs"]}"`, "i"));
    expect(html).toMatch(new RegExp(`<a[^>]+href="${t["links.repo"]}"`, "i"));
  });
});
