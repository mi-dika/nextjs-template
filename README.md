# Midika Next.js 16 + Convex Template

Open-source starter for building modular monorepos with Next.js 16, Convex, pnpm, and shared UI packages. It includes an auth abstraction, extension SDK, AI-ready docs, and comprehensive testing setup.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Features

- Next.js 16 with App Router and Turbopack
- Convex backend with schema and sample functions
- Auth abstraction (Convex, WorkOS, Clerk, memory)
- Extension SDK for modular apps
- Shared UI library (shadcn-style) and Tailwind preset
- Vitest, Playwright, and Storybook scaffolding
- GitHub Actions for CI, release, and deploy

## Workspace Layout

- `apps/web` – Next.js app
- `packages/ui` – Shared UI components
- `packages/utils` – neverthrow helpers and i18n utilities
- `packages/auth` – Auth provider abstraction
- `packages/app-sdk` – Extension system types and registry
- `packages/apps/example-app` – Sample manifest
- `convex` – Backend schema and functions
- `docs` – Documentation hub

## Scripts

- `pnpm dev` – Start dev servers via Turborepo
- `pnpm lint` – Run ESLint across workspace
- `pnpm type-check` – Type-check all packages
- `pnpm test` – Run Vitest suites
- `pnpm build` – Build all packages and apps

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_CONVEX_URL`
- `CONVEX_DEPLOYMENT`
- `NEXT_PUBLIC_AUTH_PROVIDER` (convex | workos | clerk | memory)

## Documentation

See `docs/README.md` for full guides, architecture notes, and agent instructions in `AGENTS.md`.

