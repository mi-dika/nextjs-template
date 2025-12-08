import { StatsCard } from "../../components/stats-card";
import { DEFAULT_LOCALE, translate } from "../../lib/translations";

export default function OverviewPage() {
  const t = (key: string) => translate(key, DEFAULT_LOCALE);
  const metrics = [
    {
      label: t("dashboard.metrics.users"),
      value: t("dashboard.metrics.users.value"),
      helper: t("dashboard.overview.subtitle"),
    },
    {
      label: t("dashboard.metrics.revenue"),
      value: t("dashboard.metrics.revenue.value"),
      helper: t("dashboard.overview.subtitle"),
    },
    {
      label: t("dashboard.metrics.reliability"),
      value: t("dashboard.metrics.reliability.value"),
      helper: t("dashboard.overview.subtitle"),
    },
    {
      label: t("dashboard.metrics.apps"),
      value: t("dashboard.metrics.apps.value"),
      helper: t("dashboard.overview.subtitle"),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">
          {t("dashboard.overview.title")}
        </h1>
        <p className="text-muted-foreground">
          {t("dashboard.overview.subtitle")}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <StatsCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            helper={metric.helper}
          />
        ))}
      </div>
    </div>
  );
}
