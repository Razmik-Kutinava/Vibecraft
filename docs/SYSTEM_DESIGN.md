# Vibecraft — System Design

Источник: спецификация дизайн-системы (neon dark + Space Grotesk / Space Mono).  
Адаптация под **Astro + Tailwind CSS v3** + существующий лендинг (`landing.css`).

## Зависимости

```bash
npm install tw-animate-css --save-dev
```

Использование анимаций: в `Layout.astro` импортируется алиас `tw-animate-css/tw-animate.bundle.css` → `node_modules/tw-animate-css/dist/tw-animate.css` (в `package.json` у пакета только `exports["."].style`, без прямого импорта в Vite). Утилиты совместимы с Tailwind v3.

Шрифты подключаются через **Google Fonts** в `Layout.astro` (аналог `next/font` из спецификации):

- **Space Grotesk** — основной текст (`font-sans`)
- **Space Mono** — метки, цифры, акценты (`font-mono`)

## Токены (CSS variables)

Соответствие спецификации `globals.css` / `:root`:

| Токен | Назначение |
|--------|------------|
| `--background` | фон страницы (~чёрный) |
| `--foreground` | основной текст |
| `--neon` | акцент, CTA, ключевые цифры |
| `--neon-dim` | hover / вторичный акцент |
| `--surface` | фон карточек |
| `--surface-2` | чуть светлее секций |
| `--line` | бордеры, разделители |
| `--muted-foreground` | вторичный текст |

Реализация: значения в **oklch** как в оригинале; в `tailwind.config.mjs` цвета продублированы для утилит `bg-background`, `text-neon`, и т.д.

## Паттерны компонентов (Tailwind)

Из спецификации, для новых блоков предпочтительно:

- **Метка секции:** `font-mono text-xs uppercase tracking-widest text-neon`
- **Заголовок H2:** `text-4xl md:text-5xl font-bold text-balance text-foreground`
- **Карточка:** `border border-line bg-surface p-6 hover:border-neon/40 transition-colors`
- **Кнопка primary:** `bg-neon text-primary-foreground font-bold px-8 py-3 font-mono text-sm tracking-wide`
- **Кнопка ghost:** `border border-line text-foreground px-8 py-3 hover:border-neon/40`
- **Бейдж:** `font-mono text-xs border border-neon/30 text-neon px-3 py-1`

Лендинг частично использует семантические классы из `landing.css` (`.btn`, `.card`), стилизованные под те же токены.

## Типографика

| Роль | Ориентир |
|------|----------|
| H1 hero | clamp + `font-bold leading-none` |
| H2 секция | `text-4xl md:text-5xl font-bold` |
| H3 карточка | `text-xl font-semibold` |
| Body | `text-muted-foreground leading-relaxed` |
| Цифры / цена | `font-mono text-neon` |

## Где в коде

- Глобальные стили и Tailwind layers: `src/styles/globals.css`
- Компонентный визуал лендинга: `src/styles/landing.css`
- Шрифты и глобальный импорт стилей: `src/layouts/Layout.astro`
- Расширение темы Tailwind: `tailwind.config.mjs`

## Примечание по Next.js из оригинала

Фрагменты с `next/font` и `globals.css` из исходного ТЗ **не используются напрямую** — эквивалент см. выше (Astro + ссылки на Google Fonts).
