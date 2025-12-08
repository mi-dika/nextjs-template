"use client";

import { useEffect, useState } from "react";
import { safeAsync } from "@midika/utils";
import { DEFAULT_LOCALE, translate } from "../lib/translations";
import { GitHubStarsBadge, StarIcon } from "./github-stars-badge";

const STAR_ENDPOINT = "https://api.github.com/repos/mi-dika/nextjs-template";

export function LandingHero() {
  const locale = DEFAULT_LOCALE;
  const t = (key: string) => translate(key, locale);
  const docsLink = t("links.docs");
  const repoLink = t("links.repo");
  const [starCount, setStarCount] = useState<number | null>(null);
  const starCountDisplay =
    starCount === null
      ? t("landing.stars.loading")
      : new Intl.NumberFormat(locale).format(starCount);

  useEffect(() => {
    let active = true;

    safeAsync(async () => {
      const response = await fetch(STAR_ENDPOINT, {
        headers: { Accept: "application/vnd.github+json" },
      });

      if (!response.ok) {
        throw new Error(`GitHub stars request failed: ${response.status}`);
      }

      const payload = (await response.json()) as {
        stargazers_count?: number;
      };

      if (typeof payload.stargazers_count !== "number") {
        throw new Error("GitHub stars payload missing stargazers_count");
      }

      return payload.stargazers_count;
    }).match(
      (count) => {
        if (active) {
          setStarCount(count);
        }
      },
      () => {
        if (active) {
          setStarCount(null);
        }
      },
    );

    return () => {
      active = false;
    };
  }, []);
  const stack = [
    t("landing.stack.next"),
    t("landing.stack.convex"),
    t("landing.stack.turbo"),
    t("landing.stack.tailwind"),
    t("landing.stack.vitest"),
  ];

  const features = [
    {
      title: t("features.modular.title"),
      body: t("features.modular.body"),
    },
    {
      title: t("features.auth.title"),
      body: t("features.auth.body"),
    },
    {
      title: t("features.ai.title"),
      body: t("features.ai.body"),
    },
    {
      title: t("features.testing.title"),
      body: t("features.testing.body"),
    },
    {
      title: t("features.dx.title"),
      body: t("features.dx.body"),
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          {t("landing.badge")}
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
            href="/login"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md transition hover:shadow-lg"
          >
            {t("landing.primaryCta")}
          </a>
          <a
            href={docsLink}
            className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-card"
            target="_blank"
            rel="noreferrer"
          >
            {t("landing.secondaryCta")}
          </a>
          <GitHubStarsBadge
            href={repoLink}
            label={t("landing.starCta")}
            ariaLabel={t("landing.starCta")}
          />
        </div>
      </section>

      <section className="grid gap-4 rounded-xl border border-border bg-card/60 p-4 md:grid-cols-3 md:p-6">
        <div className="col-span-2 flex flex-col gap-3">
          <div className="text-sm font-semibold text-orange-400">
            {t("landing.stack.title")}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {stack.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border/70 bg-background px-3 py-2 text-sm text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center rounded-lg border border-border/70 bg-background px-4 py-6 text-center text-sm text-muted-foreground">
          {t("landing.footer.actions")}
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

      <section className="grid gap-3 rounded-xl border border-border bg-card/60 px-4 py-4 text-sm text-muted-foreground md:grid-cols-2">
        <div className="flex flex-wrap items-center gap-2">
          <span>{t("landing.footer.repo")}</span>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3">
          <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2">
            <StarIcon className="h-4 w-4 text-orange-400" aria-hidden="true" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-muted-foreground">
                {t("landing.stars.label")}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {starCountDisplay}
              </span>
            </div>
          </div>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-foreground hover:bg-card"
            href={repoLink}
            target="_blank"
            rel="noreferrer"
          >
            {t("landing.starCta")}
          </a>
        </div>
      </section>
    </div>
  );
}
