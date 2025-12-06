# Apps & Extensions

Extensions are described by manifests in `packages/apps/<app>/src/manifest.ts`.

## Manifest Shape

- `id`, `nameKey`, `version`
- `blocks`: UI blocks rendered in dashboards or pages
- `actions`: row/bulk/nav actions with translation keys

## Example

```ts
import type { AppManifest } from "@midika/app-sdk";

export const manifest: AppManifest = {
  id: "example-app",
  nameKey: "apps.example.name",
  version: "0.1.0",
  blocks: [{ id: "example-dashboard-card", component: "@/components/example-card", target: "dashboard.main" }],
  actions: [{ id: "example-row-action", resourceType: "clients", actionType: "row", labelKey: "apps.example.actions.rowAction" }]
};
```

## Registry

Use `createRegistry` from `@midika/app-sdk` to load manifests and resolve blocks/actions at runtime.

