# Getting Started

## Prerequisites

- Node.js 20+
- pnpm 10+

## Setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Environment Variables

- `NEXT_PUBLIC_CONVEX_URL` – Convex deployment URL
- `CONVEX_DEPLOYMENT` – Deployment name
- `NEXT_PUBLIC_AUTH_PROVIDER` – `convex | workos | clerk | memory`

## Development Commands

- `pnpm dev` – Start dev servers via Turborepo
- `pnpm lint` – ESLint (shared config)
- `pnpm type-check` – TypeScript across workspaces
- `pnpm test` – Vitest suites
- `pnpm build` – Production build for all packages

