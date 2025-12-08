import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import LoginPage from "./page";
import { DEFAULT_LOCALE, translations } from "../../lib/translations";

describe("LoginPage", () => {
  it("renders login copy and form controls from translations", () => {
    const html = renderToStaticMarkup(<LoginPage />);
    const t = translations[DEFAULT_LOCALE];

    expect(html).toContain(t["login.title"]);
    expect(html).toContain(t["login.subtitle"]);
    expect(html).toContain(t["login.emailLabel"]);
    expect(html).toContain(t["login.emailPlaceholder"]);
    expect(html).toContain(t["login.cta"]);
  });
});
