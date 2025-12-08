import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import DashboardLayout from "./layout";
import OverviewPage from "./page";
import DataPage from "./data/page";
import SettingsPage from "./settings/page";
import { DEFAULT_LOCALE, translations } from "../../lib/translations";

describe("Dashboard layout and pages", () => {
  it("renders navigation labels from translations", () => {
    const html = renderToStaticMarkup(
      <DashboardLayout>
        <div>content</div>
      </DashboardLayout>,
    );
    const t = translations[DEFAULT_LOCALE];

    expect(html).toContain(t["dashboard.nav.overview"]);
    expect(html).toContain(t["dashboard.nav.data"]);
    expect(html).toContain(t["dashboard.nav.settings"]);
  });

  it("shows overview metrics copy", () => {
    const html = renderToStaticMarkup(<OverviewPage />);
    const t = translations[DEFAULT_LOCALE];

    expect(html).toContain(t["dashboard.overview.title"]);
    expect(html).toContain(t["dashboard.overview.subtitle"]);
    expect(html).toContain(t["dashboard.metrics.users"]);
    expect(html).toContain(t["dashboard.metrics.revenue"]);
    expect(html).toContain(t["dashboard.metrics.reliability"]);
    expect(html).toContain(t["dashboard.metrics.apps"]);
  });

  it("shows data table headings", () => {
    const html = renderToStaticMarkup(<DataPage />);
    const t = translations[DEFAULT_LOCALE];

    expect(html).toContain(t["dashboard.data.title"]);
    expect(html).toContain(t["dashboard.data.subtitle"]);
    expect(html).toContain(t["dashboard.data.columns.name"]);
    expect(html).toContain(t["dashboard.data.columns.status"]);
    expect(html).toContain(t["dashboard.data.columns.spend"]);
    expect(html).toContain(t["dashboard.data.columns.usage"]);
  });

  it("renders settings form labels", () => {
    const html = renderToStaticMarkup(<SettingsPage />);
    const t = translations[DEFAULT_LOCALE];

    expect(html).toContain(t["dashboard.settings.title"]);
    expect(html).toContain(t["dashboard.settings.subtitle"]);
    expect(html).toContain(t["dashboard.settings.name"]);
    expect(html).toContain(t["dashboard.settings.email"]);
    expect(html).toContain(t["dashboard.settings.role"]);
  });
});
