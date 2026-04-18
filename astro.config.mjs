import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Замените на продакшен-домен перед деплоем (для sitemap и canonical)
const site = process.env.PUBLIC_SITE_URL || "https://vibecraft.su";

export default defineConfig({
  site,
  redirects: {
    "/favicon.ico": "/favicon.svg",
  },
  integrations: [react(), tailwind({ applyBaseStyles: false }), sitemap()],
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
