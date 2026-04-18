# Vibecraft.su

Статический лендинг на [Astro 5](https://astro.build/) с [Tailwind CSS](https://tailwindcss.com/), двумя языками (RU/EN), блогом и интерактивным 3D-блоком в hero на десктопе.

## Возможности

- **Мультиязычность:** маршруты `/ru/` и `/en/`, строки в `src/i18n/landing.ts`.
- **Hero с 3D:** на ширине экрана ≥1024px подгружается React + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) + Three.js — неоновый «кристалл», кольца, перетаскивание мышью; на мобилках тяжёлый JS не грузится (`HeroIsland` + динамический импорт).
- **Брендинг:** логотип в шапке и подвале из `src/assets/logo_vibecraft.png` (импорт с суффиксом `?url`), подпись про MVP из i18n.
- **Фавикон:** `public/favicon.svg` (копия из `src/assets/vc_favicon.svg`), редирект `/favicon.ico` → `/favicon.svg`, мета в `Layout.astro`, JSON-LD в `src/lib/schema.ts`.
- **SEO:** canonical, Open Graph, Twitter, JSON-LD, `@astrojs/sitemap`.

## Требования

- Node.js **18.17+** (для Astro 5 удобен **Node 22 LTS**).

## Быстрый старт

```bash
npm install
npm run dev
```

В браузере: `http://localhost:4321` (или адрес из вывода терминала).

## Скрипты

| Команда | Назначение |
|--------|------------|
| `npm run dev` | Разработка, hot reload |
| `npm run build` | Сборка в `dist/` |
| `npm run preview` | Просмотр продакшен-сборки локально |

## Переменные окружения

Скопируйте `.env.example` в `.env` и задайте публичный URL без слэша в конце:

```env
PUBLIC_SITE_URL=https://vibecraft.su
```

Используется для `site` в `astro.config.mjs` (sitemap, canonical) и в `Layout.astro`.

## Структура проекта

| Путь | Описание |
|------|----------|
| `src/pages/` | Маршруты Astro |
| `src/layouts/Layout.astro` | HTML-оболочка, `<head>`, favicon, OG |
| `src/components/LandingPage.astro` | Главная: шапка, секции, подвал, блог-превью |
| `src/components/hero/` | `HeroIsland.tsx`, `HeroScene.tsx` — 3D hero |
| `src/i18n/landing.ts` | Тексты RU/EN |
| `src/styles/landing.css` | Стили лендинга |
| `src/styles/globals.css` | Токены и базовые стили |
| `src/assets/` | Логотип PNG/SVG, исходники фавикона |
| `public/` | Статика как есть (`favicon.svg`, `robots.txt`) |
| `docs/` | SEO, деплой, заметки |

## Импорты

В `tsconfig.json` настроен алиас `@/*` → `src/*`.

**Ассеты в разметке:** для URL в `<img src>` используйте суффикс Vite `?url` (например `import logo from "@/assets/logo.png?url"`), иначе SVG может импортироваться как компонент, а не как строка URL.

## Git: история изменений (кратко)

Репозиторий оформлен серией коммитов: конфигурация → страницы и контент → 3D hero → стили и лендинг → ассеты и документация. Смотрите `git log --oneline`.

## Документация

- [docs/SEO.md](./docs/SEO.md) — SEO-чеклист
- [docs/DEPLOY.md](./docs/DEPLOY.md) — публикация статики

## Лицензия

Приватный проект Vibecraft.
