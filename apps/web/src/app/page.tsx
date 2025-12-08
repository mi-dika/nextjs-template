import { LandingHero } from "../components/landing-hero";
import { Toaster } from "@midika/ui";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-16">
      <LandingHero />
      <Toaster />
    </main>
  );
}
