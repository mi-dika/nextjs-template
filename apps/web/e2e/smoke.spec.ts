import { test, expect } from "@playwright/test";

test("landing page renders headline", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Build production-grade apps faster",
  );
});
