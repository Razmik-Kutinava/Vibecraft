/** Превью для Open Graph / Twitter, если у страницы нет своего изображения */
export const defaultOgImage = "/favicon.svg";

export function getSiteUrl(): string {
  return import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://vibecraft.su";
}
