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
  // Sharp часто недоступен на win32-arm64; noop даёт тот же `<Image />` без ресайза/WebP на билде.
  // Для полной оптимизации на Linux/x64: `entrypoint: "astro/assets/services/sharp"` и `npm i sharp`.
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
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
