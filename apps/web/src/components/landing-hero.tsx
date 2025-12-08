"use client";

import { DEFAULT_LOCALE, translate } from "../lib/translations";

export function LandingHero() {
  const locale = DEFAULT_LOCALE;
  const t = (key: string) => translate(key, locale);
  const docsLink = t("links.docs");
  const repoLink = t("links.repo");

  const features = [
    {
      title: t("features.modular.title"),
      body: t("features.modular.body")
    },
    {
      title: t("features.auth.title"),
      body: t("features.auth.body")
    },
    {
      title: t("features.ai.title"),
      body: t("features.ai.body")
    },
    {
      title: t("features.testing.title"),
      body: t("features.testing.body")
    },
    {
      title: t("features.dx.title"),
      body: t("features.dx.body")
    }
  ];

  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {t("meta.title")}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {t("landing.title")}
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            {t("landing.subtitle")}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={docsLink}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md transition hover:shadow-lg"
            target="_blank"
            rel="noreferrer"
          >
            {t("landing.primaryCta")}
          </a>
          <a
            href={repoLink}
            className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-card"
            target="_blank"
            rel="noreferrer"
          >
            {t("landing.secondaryCta")}
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{feature.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

