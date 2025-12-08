import { DemoTable } from "../../../components/demo-table";
import { DEFAULT_LOCALE, translate } from "../../../lib/translations";

export default function DataPage() {
  const t = (key: string) => translate(key, DEFAULT_LOCALE);

  const rows = [
    {
      name: t("dashboard.data.rows.acme"),
      status: t("dashboard.data.status.active"),
      spend: t("dashboard.data.rows.acme.spend"),
      usage: t("dashboard.data.rows.acme.usage"),
      updated: t("dashboard.data.rows.acme.updated"),
    },
    {
      name: t("dashboard.data.rows.nexus"),
      status: t("dashboard.data.status.trialing"),
      spend: t("dashboard.data.rows.nexus.spend"),
      usage: t("dashboard.data.rows.nexus.usage"),
      updated: t("dashboard.data.rows.nexus.updated"),
    },
    {
      name: t("dashboard.data.rows.atlas"),
      status: t("dashboard.data.status.risk"),
      spend: t("dashboard.data.rows.atlas.spend"),
      usage: t("dashboard.data.rows.atlas.usage"),
      updated: t("dashboard.data.rows.atlas.updated"),
    },
  ];

  return (
    <DemoTable
      title={t("dashboard.data.title")}
      subtitle={t("dashboard.data.subtitle")}
      columns={{
        name: t("dashboard.data.columns.name"),
        status: t("dashboard.data.columns.status"),
        spend: t("dashboard.data.columns.spend"),
        usage: t("dashboard.data.columns.usage"),
        updated: t("dashboard.data.columns.updated"),
      }}
      rows={rows}
    />
  );
}
