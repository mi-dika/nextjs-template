"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Button } from "@midika/ui";
import { Sidebar } from "../../components/sidebar";
import { GitHubStarsBadge } from "../../components/github-stars-badge";
import { clearSession, readSession } from "../../lib/demo-session";
import { DEFAULT_LOCALE, translate } from "../../lib/translations";
import type { AuthSession } from "@midika/auth";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [session] = useState<AuthSession | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }
    return readSession();
  });
  const t = (key: string) => translate(key, DEFAULT_LOCALE);

  useEffect(() => {
    if (!session?.user) {
      window.location.href = "/login";
      return;
    }
  }, [session]);

  const navItems = [
    { href: "/dashboard", label: t("dashboard.nav.overview") },
    { href: "/dashboard/data", label: t("dashboard.nav.data") },
    { href: "/dashboard/settings", label: t("dashboard.nav.settings") },
  ];

  const handleSignOut = () => {
    clearSession();
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar title={t("meta.title")} items={navItems} />

      <div className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex flex-col gap-3 rounded-xl border border-border bg-card/80 px-4 py-3 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-muted-foreground">
                {t("dashboard.header.welcome")}
              </p>
              {session?.user?.email ? (
                <span className="text-sm font-medium text-foreground">
                  {session.user.email}
                </span>
              ) : null}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <GitHubStarsBadge
                href={t("links.repo")}
                label={t("landing.starCta")}
              />
              <Button variant="outline" onClick={handleSignOut}>
                {t("dashboard.nav.logout")}
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg border border-border px-3 py-2 text-sm text-foreground hover:bg-card"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <main className="flex flex-1 flex-col gap-6">{children}</main>
      </div>
    </div>
  );
}
