import { DEFAULT_LOCALE, translate } from "../lib/translations";

export function LandingFooter() {
  const locale = DEFAULT_LOCALE;
  const t = (key: string) => translate(key, locale);
  const docsLink = t("links.docs");
  const repoLink = t("links.repo");
  const midikaLink = t("links.midika");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span>
            {t("landing.footer.copyPrefix")} {currentYear}{" "}
            {t("landing.footer.company")}
          </span>
          <span className="text-border">•</span>
          <span>{t("landing.footer.madeWith")}</span>
          <a
            href={midikaLink}
            className="text-foreground underline underline-offset-4 transition hover:text-orange-400"
            target="_blank"
            rel="noreferrer"
          >
            {t("landing.footer.madeWithLink")}
          </a>
          {t("landing.footer.location") && (
            <span>{t("landing.footer.location")}</span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="text-foreground transition hover:text-orange-400"
            href={docsLink}
            target="_blank"
            rel="noreferrer"
          >
            {t("landing.footer.links.docs")}
          </a>
          <a
            className="text-foreground transition hover:text-orange-400"
            href={repoLink}
            target="_blank"
            rel="noreferrer"
          >
            {t("landing.footer.links.repo")}
          </a>
        </div>
      </div>
    </footer>
  );
}
