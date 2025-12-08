"use client";

import type React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@midika/ui";
import { readSession } from "../../../lib/demo-session";
import { DEFAULT_LOCALE, translate } from "../../../lib/translations";

export default function SettingsPage() {
  const t = (key: string) => translate(key, DEFAULT_LOCALE);
  const session = typeof window !== "undefined" ? readSession() : null;
  const [name, setName] = useState(session?.user?.name ?? "");
  const [email, setEmail] = useState(session?.user?.email ?? "");
  const [role, setRole] = useState(t("dashboard.settings.roleDefault"));
  const [notifications, setNotifications] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Persist settings in a real backend when wiring live data.
  };

  return (
    <Card className="border border-border/70 bg-card/80">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">
          {t("dashboard.settings.title")}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {t("dashboard.settings.subtitle")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">{t("dashboard.settings.name")}</Label>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={t("dashboard.settings.name")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">{t("dashboard.settings.email")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t("dashboard.settings.email")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="role">{t("dashboard.settings.role")}</Label>
            <Input
              id="role"
              name="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              placeholder={t("dashboard.settings.role")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="notifications">
              {t("dashboard.settings.notifications")}
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id="notifications"
                name="notifications"
                type="checkbox"
                checked={notifications}
                onChange={(event) => setNotifications(event.target.checked)}
                className="h-4 w-4"
              />
              <span className="text-sm text-muted-foreground">
                {t("dashboard.settings.notifications")}
              </span>
            </div>
          </div>
          <div className="md:col-span-2">
            <Button type="submit">{t("dashboard.settings.save")}</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
