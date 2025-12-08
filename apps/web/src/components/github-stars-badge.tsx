import type { SVGProps } from "react";
import { DEFAULT_LOCALE, translate } from "../lib/translations";

interface GitHubStarsBadgeProps {
  href: string;
  label: string;
  ariaLabel?: string;
}

export function GitHubStarsBadge({
  href,
  label,
  ariaLabel,
}: GitHubStarsBadgeProps) {
  const altText =
    ariaLabel ??
    translate("landing.starCta", DEFAULT_LOCALE) ??
    translate("meta.title", DEFAULT_LOCALE);

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-400"
      target="_blank"
      rel="noreferrer"
      aria-label={altText}
    >
      <StarIcon className="h-4 w-4 text-orange-400" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M12 2.5 9.09 8.26 2.8 9.27l4.6 4.48-1.08 6.29L12 17.77l5.68 2.99-1.08-6.29 4.6-4.48-6.29-1.01L12 2.5Z" />
    </svg>
  );
}
