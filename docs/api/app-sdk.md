# @midika/app-sdk

Types and registry helpers for building modular extensions.

## Types

- `AppManifest` – describes an extension
- `AppBlock` – UI block target and component path
- `AppAction` – row/bulk/nav action with translation key

## Registry

```ts
import { createRegistry } from "@midika/app-sdk";
import { manifest } from "@midika/example-app";

const registry = createRegistry([manifest]);
const blocks = [...registry.blocks.values()];
```

