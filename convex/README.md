# Convex Backend

This folder contains the Convex backend for the template. It is intentionally minimal and demonstrates:

- Shared utilities in `convex/lib`
- Schema definition in `schema.ts`
- Example functions in `apps.ts`

## Development

```bash
pnpm convex dev
```

## Code Organization

- `schema.ts`: database tables and indexes
- `lib/`: shared helpers (neverthrow wrappers, security, audit)
- `apps.ts`: example query and mutation for registering extension apps

## Notes

- Generated code in `_generated/` is gitignored.
- Add new functions under `convex/` and export them through `convex.json` when using codegen.

