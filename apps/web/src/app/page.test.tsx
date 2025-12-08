import { describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import HomePage from "./page";

vi.mock("../components/landing-hero", () => ({
  LandingHero: () => <div data-testid="landing-hero">hero</div>,
}));

vi.mock("../components/landing-footer", () => ({
  LandingFooter: () => <div data-testid="landing-footer">footer</div>,
}));

vi.mock("@midika/ui", () => ({
  Toaster: () => <div data-testid="toaster" />,
}));

describe("HomePage", () => {
  it("renders the hero and toaster", () => {
    const html = renderToStaticMarkup(<HomePage />);

    expect(html).toContain('data-testid="landing-hero"');
    expect(html).toContain('data-testid="landing-footer"');
    expect(html).toContain('data-testid="toaster"');
  });
});
