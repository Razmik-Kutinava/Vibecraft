import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_FALLBACK = "https://vibecraft.su";

/** Публичный origin без trailing slash (sitemap / canonical). Устойчиво к env без протокола и пробелам — иначе Astro падает с «site: Invalid url» на CI. */
function resolveSiteOrigin() {
  const tryNormalize = (raw) => {
    if (!raw || typeof raw !== "string") return null;
    const t = raw.trim();
    if (!t) return null;
    const withProto = /^https?:\/\//i.test(t) ? t : `https://${t.replace(/^\/+/, "")}`;
    try {
      const u = new URL(withProto);
      if (!u.hostname) return null;
      return u.origin;
    } catch {
      return null;
    }
  };

  const fromEnv = tryNormalize(process.env.PUBLIC_SITE_URL);
  if (fromEnv) return fromEnv;

  if (process.env.VERCEL_URL) {
    const host = process.env.VERCEL_URL.replace(/^https?:\/\//i, "").split("/")[0]?.trim();
    if (host) {
      const fromVercel = tryNormalize(`https://${host}`);
      if (fromVercel) return fromVercel;
    }
  }

  return SITE_FALLBACK;
}

const site = resolveSiteOrigin();
// Чтобы import.meta.env.PUBLIC_SITE_URL в страницах совпадал с config.site после нормализации
process.env.PUBLIC_SITE_URL = site;

export default defineConfig({
  site,
  // Sharp даёт ресайз/WebP для `<Image />` на типичных Linux/x64 и win32-x64. На win32-arm64 при падении sharp — временно noop + `npm i`.
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // Исключаем redirect-страницы — Google их не индексирует
      filter: (page) =>
        page !== `${site}/` &&
        page !== `${site}/blog/`,
      i18n: {
        defaultLocale: "ru",
        locales: {
          ru: "ru-RU",
          en: "en-US",
        },
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        // tw-animate-css: в package.json только exports["."].style — резолвим файл явно
        "tw-animate-css/tw-animate.bundle.css": path.resolve(
          __dirname,
          "node_modules/tw-animate-css/dist/tw-animate.css",
        ),
      },
    },
  },
});
