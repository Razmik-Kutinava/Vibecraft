export type { Lang, LandingMessages } from "./types";
export { landingMessagesRu } from "./ru";
export { landingMessagesEn } from "./en";

import type { Lang, LandingMessages } from "./types";
import { landingMessagesEn } from "./en";
import { landingMessagesRu } from "./ru";

export const telegramDirectUrl = "https://t.me/Razmik6";

export function getLandingMessages(lang: Lang): LandingMessages {
  return lang === "ru" ? landingMessagesRu : landingMessagesEn;
}
