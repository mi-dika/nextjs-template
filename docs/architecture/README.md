# Architecture

## Monorepo Layout

- `apps/web` – Next.js 16 app using App Router and shared packages
- `convex/` – Real-time backend with schema and functions
- `packages/ui` – shadcn-style UI library
- `packages/auth` – Auth provider abstraction
- `packages/utils` – neverthrow + i18n utilities
- `packages/app-sdk` – Extension system types and registry
- `packages/apps/example-app` – Sample manifest showcasing extension points

## Build & Tooling

- pnpm workspaces + Turborepo
- Shared ESLint, TypeScript, Tailwind presets in `packages/config`
- Transpile local packages via `transpilePackages` in `apps/web/next.config.ts`

## Rendering Guidelines

- Prefer Server Components for data-fetching routes
- Use Client Components only when interactivity is required
- Keep UI text in `translations.ts`

## Backend Guidelines

- Use neverthrow helpers for error handling
- Add new tables to `convex/schema.ts`
- Group shared logic under `convex/lib`

## Extension System

- Define manifests in `packages/apps/<app>/src/manifest.ts`
- Blocks target dashboards or app pages
- Actions describe row/bulk/nav operations with translation keys

