# @midika/auth

Provider-agnostic auth interface.

## Usage

```ts
import { createAuthClient, withAuthSession } from "@midika/auth";

const auth = createAuthClient("convex", { sessionFetcher });
const session = await withAuthSession(auth);
```

## Interfaces

- `AuthUser`, `AuthSession`
- `AuthProvider` with `getSession`, `signIn`, `signOut`
- `AuthProviderName`: `convex | workos | clerk | memory`

