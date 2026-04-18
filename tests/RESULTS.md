# Результаты тестирования — Vibecraft.su

Дата: 2026-04-18

---

## Итог: все тесты прошли ✓

| Тест | Проверок | Passed | Failed |
|------|----------|--------|--------|
| check-build — структура сборки | 14 | 14 | 0 |
| check-seo — мета-теги | 83 | 83 | 0 |
| check-links — внутренние ссылки | 65 | 65 | 0 |
| check-html — HTML структура + a11y | 32 | 32 | 0 |
| check-jsonld — JSON-LD схемы | 15 | 15 | 0 |
| **ИТОГО** | **209** | **209** | **0** |

---

## Тест 1: Структура сборки (`check-build.mjs`)

**Что проверяет:** все нужные страницы есть в `dist/`, сайтмап и robots.txt на месте, размеры JS-чанков.

**Результат:** всё хорошо. Одно предупреждение — `HeroScene.js` весит **872 KB** (Three.js). Это нормально для 3D, но чанк грузится только на десктопе через lazy-load, мобилу не достаётся.

---

## Тест 2: SEO мета-теги (`check-seo.mjs`)

**Что проверяет:** `<title>`, description, canonical, hreflang (ru/en/x-default), Open Graph, Twitter Card, JSON-LD, noindex на 404, `html lang`.

**Страницы:** ru/index, en/index, ru/blog, en/blog, ru/blog/coffee-os, 404.

**Результат:** все 83 проверки зелёные.

---

## Тест 3: Внутренние ссылки (`check-links.mjs`)

**Что проверяет:** все внутренние href из всех HTML-файлов ведут на реально существующие страницы в `dist/`.

**Результат:** 65 уникальных ссылок — все живые, 404 нет.

---

## Тест 4: HTML структура и доступность (`check-html.mjs`)

**Что проверяет:**
- ровно один `<h1>` на странице
- все `<img>` имеют `alt`
- `<html lang>` задан
- `viewport` и `charset` есть
- `target="_blank"` без `rel="noopener"` отсутствуют (XSS/безопасность)
- логотип VIBE/CRAFT в разметке, старый `logo-img` удалён
- контактный блок: секция #contact, Telegram, Google Form, noopener

**Результат:** все 32 проверки зелёные.

---

## Тест 5: JSON-LD схемы (`check-jsonld.mjs`)

**Что проверяет:**
- JSON-LD парсится без ошибок (валидный JSON)
- На лендинге: `@graph` с `Organization`, `ProfessionalService`, `WebSite`
- `Organization` содержит name, url, sameAs с Telegram
- На блог-посте: `BlogPosting`, `BreadcrumbList`, headline, datePublished, author

**Результат:** все 15 проверок зелёные.

---

## Что не покрыто тестами (ручные проверки)

| Что проверить | Инструмент |
|---------------|------------|
| Core Web Vitals (LCP, CLS, FID) | Lighthouse в Chrome DevTools |
| Open Graph превью при шаринге в Telegram | opengraph.xyz |
| Google Rich Results (JSON-LD валидация Google) | search.google.com/test/rich-results |
| Работа 3D-канваса на Safari | Реальный iPhone/Mac |
| Мобильное меню на 375px | Chrome DevTools → iPhone SE |
| Форма Google — доходит ли ответ | Ручной тест |
| prefers-reduced-motion — анимация притормаживает | Системные настройки |

---

## Структура тестов

```
tests/
├── check-build.mjs    — структура dist/, размеры чанков
├── check-seo.mjs      — мета-теги, canonical, hreflang, JSON-LD
├── check-links.mjs    — внутренние ссылки, нет ли 404
├── check-html.mjs     — HTML структура, a11y, безопасность
├── check-jsonld.mjs   — JSON-LD схемы (Organization, BlogPosting)
└── RESULTS.md         — этот файл
```

Запуск всех тестов (после `npm run build`):
```bash
node tests/check-build.mjs
node tests/check-seo.mjs
node tests/check-links.mjs
node tests/check-html.mjs
node tests/check-jsonld.mjs
```
