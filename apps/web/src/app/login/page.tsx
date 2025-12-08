"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { createAuthClient } from "@midika/auth";
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
import { DEFAULT_LOCALE, translate } from "../../lib/translations";
import { persistSession, readSession } from "../../lib/demo-session";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const t = (key: string) => translate(key, DEFAULT_LOCALE);

  useEffect(() => {
    const existing = readSession();
    if (existing?.user) {
      window.location.href = "/dashboard";
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    const session = {
      user: {
        id: trimmedEmail,
        email: trimmedEmail,
        name: trimmedEmail.split("@")[0] || trimmedEmail,
      },
    };

    const client = createAuthClient("memory", { session });
    const signedIn = await client.signIn().unwrapOr(session);
    persistSession(signedIn);
    window.location.href = "/dashboard";
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16">
      <Card className="w-full max-w-xl border border-border/70 bg-card/80 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            {t("login.title")}
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            {t("login.subtitle")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">{t("login.emailLabel")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t("login.emailPlaceholder")}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="bg-background"
              />
              <p className="text-xs text-muted-foreground">
                {t("login.helper")}
              </p>
            </div>
            <Button type="submit" className="w-full">
              {t("login.cta")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
