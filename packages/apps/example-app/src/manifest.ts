import type { AppManifest } from "@midika/app-sdk";

export const manifest: AppManifest = {
  id: "example-app",
  nameKey: "apps.example.name",
  descriptionKey: "apps.example.description",
  version: "0.1.0",
  blocks: [
    {
      id: "example-dashboard-card",
      component: "@/components/example-card",
      target: "dashboard.main",
      order: 1,
      config: { cols: 1 }
    }
  ],
  actions: [
    {
      id: "example-row-action",
      resourceType: "clients",
      actionType: "row",
      labelKey: "apps.example.actions.rowAction",
      handler: "@/actions/example-row-action"
    }
  ],
  homepage: "https://github.com/midika-it/nextjs-template"
};

