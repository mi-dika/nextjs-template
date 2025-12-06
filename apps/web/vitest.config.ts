import { createRequire } from "node:module";
import { defineConfig } from "vitest/config";

const require = createRequire(import.meta.url);

export default defineConfig({
  resolve: {
    alias: [
      { find: /^react$/, replacement: require.resolve("react") },
      {
        find: /^react\/jsx-runtime$/,
        replacement: require.resolve("react/jsx-runtime")
      },
      {
        find: /^react\/jsx-dev-runtime$/,
        replacement: require.resolve("react/jsx-dev-runtime")
      }
    ]
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules/**", "e2e/**"],
    passWithNoTests: true,
    deps: {
      moduleDirectories: ["node_modules", "../../node_modules"]
    },
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "**/*.config.*",
        "next.config.ts",
        "postcss.config.js",
        "tailwind.config.ts",
        "playwright.config.ts",
        "src/**/*.stories.tsx"
      ],
      thresholds: {
        lines: 85,
        branches: 80,
        functions: 80,
        statements: 85
      }
    }
  }
});

