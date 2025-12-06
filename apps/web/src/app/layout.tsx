import type { Metadata } from "next";
import { DEFAULT_LOCALE, translate } from "../lib/translations";
import "../app/globals.css";

const title = translate("meta.title", DEFAULT_LOCALE);
const description = translate("meta.description", DEFAULT_LOCALE);

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("http://localhost:3000")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}

