import type { Lang } from "@/i18n/landing";

/** Совпадает с дефолтом `bodyClass` в `Layout.astro` — задаём явно на страницах для ясности. */
export const SITE_BODY_CLASS =
  "min-h-screen bg-background text-foreground font-sans antialiased";

export function ogLocalePair(lang: Lang): { ogLocale: string; ogLocaleAlternate: string[] } {
  if (lang === "ru") {
    return { ogLocale: "ru_RU", ogLocaleAlternate: ["en_US"] };
  }
  return { ogLocale: "en_US", ogLocaleAlternate: ["ru_RU"] };
}
