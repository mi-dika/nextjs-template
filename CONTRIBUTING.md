# Contributing

Thanks for contributing to the Midika Next.js + Convex template!

## Workflow

1. Fork and clone the repo.
2. Install dependencies with `pnpm install`.
3. Follow TDD: write a failing test, implement, and refactor.
4. Run the suite before pushing:
   - `pnpm lint`
   - `pnpm type-check`
   - `pnpm test`
   - `pnpm build`

## Code Style

- Use the shared ESLint/TypeScript configs from `packages/config`.
- Keep UI text in `translations.ts`.
- Prefer Server Components; use Client Components only when needed.
- Use neverthrow helpers from `@midika/utils` for error handling.

## Branches & PRs

- Target `main`.
- Keep PRs small and focused; include screenshots for UI changes.
- Add or update documentation in `docs/` when you change behavior.

## Testing

- Unit/integration: Vitest
- E2E: Playwright (`apps/web/e2e`)
- Visual/Docs: Storybook

## Security

- Do not commit secrets. Use `.env.local`.
- Follow the auth abstraction instead of wiring providers directly.

