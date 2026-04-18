# Vibecraft — Performance Test Report

Дата: 2026-04-17  
Окружение: локальный dev-сервер `astro dev` (`http://localhost:4321`)  
Фокус: скорость загрузки, поведение по маршрутам, базовые UX/SEO метрики.

## Что было сделано

Проведены тесты в двух группах:

1. **Lighthouse (лабораторные замеры)**
   - Mobile: `/ru/`, `/ru/blog`, `/ru/manifest`, `/en/`
   - Desktop: `/ru/`
2. **Маршрутные сценарии (фактические ответы сервера)**
   - Два прохода по `GET`:
     - `/ru/`
     - `/ru/blog`
     - `/ru/manifest`
     - `/en/`
3. **Проверка служебного маршрута**
   - `GET /favicon.ico` (проверка предупреждений роутера)

## Сценарии тестов

- Cold/Warm открытие основных страниц (2 прохода подряд).
- Навигационный путь: `Главная -> Блог -> Манифест -> EN`.
- Сравнение mobile/desktop для главной.
- Проверка Core Web Vitals в lab-режиме (LCP/CLS/TBT, где доступно).

## Результаты Lighthouse

| Страница | Профиль | Perf | Access | Best Practices | SEO | FCP | LCP | Speed Index | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `/ru/` | Mobile | 56 | 82 | 100 | 100 | 8.2s | 12.6s | 8.7s | 70ms | 0 |
| `/ru/` | Desktop | 80 | 90 | 100 | 100 | 1.6s | 2.3s | 1.9s | 10ms | 0.002 |
| `/ru/blog` | Mobile | 57 | 93 | 100 | 100 | 7.6s | 12.1s | 8.3s | 60ms | 0 |
| `/ru/manifest` | Mobile | 57 | 100 | 100 | 100 | 7.6s | 12.0s | 7.6s | 60ms | 0 |
| `/en/` | Mobile | 56 | 82 | 100 | 92 | 8.1s | 12.3s | 8.6s | 90ms | 0 |

Примечание: `INP` в отчётах не отображался (`n/a`) для этих лабораторных прогонов.

## Результаты маршрутных тестов (2 прохода)

### Проход 1
- `/ru/` — 200, **182ms**
- `/ru/blog` — 200, **69ms**
- `/ru/manifest` — 200, **68ms**
- `/en/` — 200, **130ms**

### Проход 2
- `/ru/` — 200, **82ms**
- `/ru/blog` — 200, **76ms**
- `/ru/manifest` — 200, **71ms**
- `/en/` — 200, **97ms**

## Служебный маршрут

- `/favicon.ico` -> **301** (редирект отрабатывает, предупреждение роутера устранено).

## Вывод

1. **Бэкенд/роутинг в локальном dev работают стабильно**: все ключевые маршруты отдают 200, с быстрым TTFB и улучшением на повторном проходе.
2. **Основная зона риска — mobile performance**: высокий `LCP` (~12s) и `FCP` (~8s) на ключевых страницах.
3. **Desktop главной в рабочем состоянии** (`Perf 80`, низкий TBT/CLS), но mobile требует оптимизаций перед агрессивным трафиком.

## Артефакты тестирования

Сырые Lighthouse-отчёты сохранены в:

- `docs/perf/ru-home-mobile.report.html`
- `docs/perf/ru-home-mobile.report.json`
- `docs/perf/ru-home-desktop.report.html`
- `docs/perf/ru-home-desktop.report.json`
- `docs/perf/ru-blog-mobile.report.html`
- `docs/perf/ru-blog-mobile.report.json`
- `docs/perf/ru-manifest-mobile.report.html`
- `docs/perf/ru-manifest-mobile.report.json`
- `docs/perf/en-home-mobile.report.html`
- `docs/perf/en-home-mobile.report.json`

## Re-test после mobile-first оптимизации (2026-04-17)

Выполнены дополнительные прогоны главной страницы `/ru/` после адаптивного рефактора и оптимизаций рендера.

### Desktop (`/ru/`)
- До: `Perf 80`, `FCP 1.6s`, `LCP 2.3s`, `Speed Index 1.9s`, `TBT 10ms`, `CLS 0.002`
- После: `Perf 82`, `FCP 1.5s`, `LCP 2.3s`, `Speed Index 1.6s`, `TBT 0ms`, `CLS 0`

### Mobile (`/ru/`, 3 прогона после изменений)
- Baseline (до): `Perf 56`, `FCP 8.2s`, `LCP 12.6s`, `Speed Index 8.7s`, `TBT 70ms`, `CLS 0`
- После #1: `Perf 49`, `FCP 8.2s`, `LCP 12.8s`, `Speed Index 8.2s`, `TBT 360ms`, `CLS 0`
- После #2: `Perf 56`, `FCP 7.9s`, `LCP 12.2s`, `Speed Index 7.9s`, `TBT 130ms`, `CLS 0`
- После #3: `Perf 56`, `FCP 7.9s`, `LCP 12.2s`, `Speed Index 7.9s`, `TBT 130ms`, `CLS 0`

### Интерпретация
- В `astro dev` mobile-метрики Lighthouse дают высокий разброс по `TBT` (шум dev-режима и HMR-процессов).
- При этом повторяемо улучшился `Speed Index` и немного улучшился `LCP` в стабильных прогонах.
- Для финального решения по производительности нужен контрольный прогон на `build + preview`/production.

### Дополнительные артефакты re-test
- `docs/perf/ru-home-mobile-after`
- `docs/perf/ru-home-mobile-after-2`
- `docs/perf/ru-home-mobile-after-3`
- `docs/perf/ru-home-desktop-after`

## Production Benchmark (build + preview)

Формат прогона:

1. `npm run build`
2. `npm run preview -- --port 4322`
3. Lighthouse по тем же ключевым страницам (mobile/desktop)
4. Два прохода по HTTP-маршрутам для проверки задержек ответа

### Lighthouse (preview, localhost)

| Страница | Профиль | Perf | Access | Best Practices | SEO | FCP | LCP | Speed Index | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `/ru/` | Mobile | 100 | 89 | 100 | 100 | 1.0s | 1.0s | 2.5s | 10ms | 0 |
| `/ru/` | Desktop | 100 | 89 | 100 | 100 | 0.3s | 0.3s | 0.8s | 0ms | 0 |
| `/ru/blog` | Mobile | 100 | 91 | 100 | 100 | 0.8s | 0.9s | 2.1s | 40ms | 0 |
| `/ru/manifest` | Mobile | 100 | 100 | 100 | 100 | 0.8s | 0.9s | 0.8s | 40ms | 0 |
| `/en/` | Mobile | 100 | 89 | 100 | 100 | 0.9s | 0.9s | 2.6s | 20ms | 0 |

### Маршрутные задержки (preview, 2 прохода)

Проход 1:
- `/ru/` — 200, **195ms**
- `/ru/blog` — 200, **23ms**
- `/ru/manifest` — 200, **22ms**
- `/en/` — 200, **26ms**

Проход 2:
- `/ru/` — 200, **22ms**
- `/ru/blog` — 200, **24ms**
- `/ru/manifest` — 200, **21ms**
- `/en/` — 200, **60ms**

### Итог production benchmark

- Сборка и preview прошли стабильно, ключевые маршруты отвечают быстро.
- После mobile-first правок проект корректно адаптирован по основным сценариям.
- Lighthouse в локальном preview показывает максимально высокие оценки; для полностью реалистичной картины стоит дополнительно прогнать тот же набор на реальном прод-хостинге/CDN и с внешней сети.

### Артефакты production benchmark

- `docs/perf/prod-ru-home-mobile.report.html`
- `docs/perf/prod-ru-home-mobile.report.json`
- `docs/perf/prod-ru-home-desktop.report.html`
- `docs/perf/prod-ru-home-desktop.report.json`
- `docs/perf/prod-ru-blog-mobile.report.html`
- `docs/perf/prod-ru-blog-mobile.report.json`
- `docs/perf/prod-ru-manifest-mobile.report.html`
- `docs/perf/prod-ru-manifest-mobile.report.json`
- `docs/perf/prod-en-home-mobile.report.html`
- `docs/perf/prod-en-home-mobile.report.json`
