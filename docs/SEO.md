# SEO — чеклист

## Уже сделано в шаблоне

- Уникальные `title` и `description` через пропсы `Layout.astro`
- `<link rel="canonical">` на основе `PUBLIC_SITE_URL` и пути страницы
- Open Graph и Twitter Card (общие поля)
- JSON-LD типа `WebSite` (можно расширить под `Organization`, `Product` и т.д.)
- `@astrojs/sitemap` — карта сайта при сборке
- `public/robots.txt` — разрешена индексация; в конце указан URL sitemap (подставьте свой домен)

## Перед продакшеном

1. Заполните `.env`: `PUBLIC_SITE_URL` = финальный HTTPS-домен.
2. Обновите `public/robots.txt`: строка `Sitemap:` должна указывать на ваш `sitemap-index.xml`.
3. Добавьте реальное превью для соцсетей: положите изображение в `public/` (например `og.png` 1200×630) и передайте в страницу `ogImage="/og.png"` в `Layout`.
4. Подключите сайт в [Google Search Console](https://search.google.com/search-console) и загрузите sitemap URL.

## Контент

- Один `<h1>` на страницу, логичная иерархия заголовков
- Осмысленные `alt` у изображений; для LCP-картинок используйте `@astrojs/image` или `<Image />` из `astro:assets` при необходимости

## Производительность

Astro по умолчанию отдаёт мало клиентского JS — это помогает Core Web Vitals и косвенно SEO. После деплоя проверьте отчёт Lighthouse или PageSpeed Insights.
