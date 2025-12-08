import { createTranslator, listLocales } from "@midika/utils";

export type Locale = "en" | "it";

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    "meta.title": "Midika Next.js + Convex Starter",
    "meta.description":
      "An open-source template with Next.js 16, Convex, modular apps, and AI-ready docs.",
    "landing.title": "Build production-grade apps faster",
    "landing.subtitle":
      "Next.js 16 + Convex monorepo with modular extensions, shared UI, and battle-tested workflows.",
    "landing.primaryCta": "Open documentation",
    "landing.secondaryCta": "View GitHub template",
    "features.modular.title": "Modular Monorepo",
    "features.modular.body":
      "Apps, shared packages, and Convex backend wired with pnpm + Turborepo.",
    "features.auth.title": "Auth Abstraction",
    "features.auth.body":
      "Provider-agnostic auth layer supporting Convex Auth, WorkOS, and Clerk.",
    "features.ai.title": "AI-ready by default",
    "features.ai.body":
      "Agents guide, Cursor rules, and translation-first UI strings.",
    "features.testing.title": "Quality Gates",
    "features.testing.body":
      "Vitest, Playwright, Storybook, and coverage thresholds baked in.",
    "features.dx.title": "Developer Experience",
    "features.dx.body":
      "Tailwind presets, shared ESLint/TS configs, and preconfigured scripts.",
    "links.docs": "https://github.com/mi-dika/nextjs-template/tree/main/docs",
    "links.repo": "https://github.com/mi-dika/nextjs-template",
    "toasts.sample": "Welcome to the starter!"
  },
  it: {
    "meta.title": "Starter Midika Next.js + Convex",
    "meta.description":
      "Template open-source con Next.js 16, Convex, monorepo modulare e documentazione pronta.",
    "landing.title": "Costruisci app enterprise più velocemente",
    "landing.subtitle":
      "Monorepo Next.js 16 + Convex con estensioni modulari, UI condivisa e workflow testati.",
    "landing.primaryCta": "Apri la documentazione",
    "landing.secondaryCta": "Vedi il template GitHub",
    "features.modular.title": "Monorepo modulare",
    "features.modular.body":
      "App, pacchetti condivisi e backend Convex collegati con pnpm + Turborepo.",
    "features.auth.title": "Astrazione di autenticazione",
    "features.auth.body":
      "Layer provider-agnostic che supporta Convex Auth, WorkOS e Clerk.",
    "features.ai.title": "Pronto per l'AI",
    "features.ai.body":
      "Guida agli agenti, regole per Cursor e stringhe UI tradotte.",
    "features.testing.title": "Qualità garantita",
    "features.testing.body":
      "Vitest, Playwright, Storybook e soglie di copertura integrate.",
    "features.dx.title": "Developer Experience",
    "features.dx.body":
      "Preset Tailwind, config ESLint/TS condivisi e script preconfigurati.",
    "links.docs": "https://github.com/mi-dika/nextjs-template/tree/main/docs",
    "links.repo": "https://github.com/mi-dika/nextjs-template",
    "toasts.sample": "Benvenuto nello starter!"
  }
};

export const DEFAULT_LOCALE: Locale = "en";
export const supportedLocales: Locale[] = listLocales(translations);
export const translate = createTranslator<Locale>(translations, DEFAULT_LOCALE);

