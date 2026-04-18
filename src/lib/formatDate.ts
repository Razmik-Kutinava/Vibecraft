import type { Lang } from "@/i18n/landing";

export function formatPostDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === "ru" ? "ru-RU" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function readTimeLabel(minutes: number, lang: Lang): string {
  return lang === "ru" ? `${minutes} мин` : `${minutes} min`;
}
