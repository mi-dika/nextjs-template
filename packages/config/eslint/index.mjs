import nextConfig from "eslint-config-next";
import unusedImports from "eslint-plugin-unused-imports";
import storybook from "eslint-plugin-storybook";

const ignores = [
  "**/node_modules/**",
  "**/.next/**",
  "**/.turbo/**",
  "**/dist/**",
  "**/coverage/**",
  "convex/_generated/**"
];

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    ignores
  },
  ...nextConfig,
  {
    settings: {
      react: {
        // Avoid version detection warnings in packages without React dependency
        version: "19.2.1"
      }
    },
    plugins: {
      "unused-imports": unusedImports,
      storybook
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],
      "no-var": "error"
    }
  },
  {
    files: ["**/*.stories.{ts,tsx}"],
    ...storybook.configs["flat/recommended"]
  }
];

export default config;

