---
title: "Your site takes 6 seconds to load — the visitor already left. Here's why"
description: "Page speed directly affects leads. I broke down why most sites are slow and what actually fixes it."
tag: "Landings"
date: 2026-05-18
readMinutes: 6
emoji: "⚡"
---

Google published a number a few years back and has been confirming it ever since: **53% of mobile users leave a page if it takes more than 3 seconds to load**. Not 10 seconds. Three.

Check your site right now: open [PageSpeed Insights](https://pagespeed.web.dev), paste the URL. If you see red numbers in Performance — you're losing people before they even see your copy.

## Why sites are slow

Most of the time it's not the hosting and not the images. It's about **how the site was built**.

Take a typical WordPress landing page. A visitor opens it — the browser downloads WordPress itself, the theme, the plugins, their stylesheets, their scripts, Google Fonts, an SEO plugin, a contact form with its own library... and only then shows the text. All of this runs even if the landing has one page and five blocks.

Same story with React or Vue sites built "by the book": the browser downloads all the JavaScript first, runs it, then builds the page. This is called **client-side rendering** — and for a landing page it's like driving a truck to a corner store for a loaf of bread.

## What Core Web Vitals are and why they matter right now

Since 2021, Google officially uses page speed as a ranking factor. It's called **Core Web Vitals** — three metrics:

- **LCP** (Largest Contentful Paint) — how fast the main content appears on screen. Good: under 2.5 seconds.
- **CLS** (Cumulative Layout Shift) — does the content jump around while loading. Good: below 0.1.
- **INP** (Interaction to Next Paint) — how fast the site responds to clicks. Good: under 200 ms.

If the site doesn't pass — it ranks lower than competitors, even if the content is better. This isn't theory; it's Google's official position, documented [here](https://developers.google.com/search/docs/appearance/core-web-vitals).

## Why we build landing pages on Astro

When I was choosing a stack for landing pages, the goal was simple: the page should open instantly, look good, and not break.

**Astro** solves this at the architecture level. It generates **plain HTML at build time** — not in the visitor's browser, but ahead of time, on the server. When someone opens the landing page, the browser gets a ready-made page. No JavaScript on the first screen if it isn't needed there.

If you need interactivity — a form, an animation, a counter — Astro adds it precisely, only where it's actually needed. This is called **islands architecture**. The rest of the page stays static and fast.

In practice: landing pages built on Astro consistently score **90+ in Lighthouse Performance**. That's not magic — it's just the right tool for the job.

## What this means for you as a client

- The site loads fast on mobile, even on a weak connection
- Google sees good metrics — better search rankings
- Someone who came through an ad or search doesn't leave while waiting
- You pay for the landing once, instead of maintaining a plugin zoo

This isn't about Astro being trendy. It's about the fact that for a specific task — a fast landing page with a lead form — it simply fits better than WordPress or a heavy React site.

---

If you want to check your current site — [PageSpeed Insights](https://pagespeed.web.dev) is free and gives results in 30 seconds. Take a look at what it says. If the numbers are bad — now you know why.
