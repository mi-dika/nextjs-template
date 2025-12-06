# Auth Abstraction

The template ships with a provider-agnostic auth layer in `packages/auth`.

## Providers

- Convex Auth (`convex`)
- WorkOS (`workos`)
- Clerk (`clerk`)
- Memory/dev (`memory`)

## Usage

```ts
import { createAuthClient, withAuthSession } from "@midika/auth";

const auth = createAuthClient(process.env.NEXT_PUBLIC_AUTH_PROVIDER ?? "convex");
const session = await withAuthSession(auth);
```

- Implement provider-specific login flows inside the web app.
- Keep UI text in `translations.ts`; use `labelKey` for actions/blocks.

