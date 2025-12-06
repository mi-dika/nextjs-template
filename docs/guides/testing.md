# Testing Stack

- **Vitest** for unit/integration tests
- **Playwright** for E2E
- **Storybook** for component docs and visual checks

## Commands

```bash
pnpm test       # Vitest
pnpm lint       # ESLint
pnpm type-check # TypeScript
pnpm build      # Production build
```

## Locations

- `apps/web/src` – unit/integration
- `apps/web/e2e` – Playwright tests
- `apps/web/.storybook` – Storybook config

## Coverage

- Set thresholds in Vitest config (85% lines / 80% branches recommended).

