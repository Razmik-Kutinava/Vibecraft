---
title: "A Telegram Mini App quiz for a bar: MVP, stack, and numbers"
description: "Rails, PostgreSQL, Telegram Web Apps: how a quiz replaced a static menu and moved revenue."
tag: "Case study"
date: 2026-02-22
readMinutes: 8
emoji: "🍸"
---

Friends asked for a better way to present a **seasonal cocktail menu** in a small venue (~12 seats) than paper or a plain post. We borrowed the old “what sofa are you?” meme: people like **“who am I?”** mechanics.

## Goal

- Ship a fast **MVP**: a **Telegram Mini App** quiz instead of a boring menu or story.
- Flow: short quiz → **“your seasonal cocktail”** → menu picks + **10% off**.

## Stack

- **Ruby on Rails 7** — monolith.
- **PostgreSQL** — users, questions, answers, results.
- **Telegram Bot API** (`telegram-bot-ruby`) + **Telegram Web Apps** — quiz UI.
- **Admin** — Rails **TUI** in the terminal: quiz config, stats, live passes, conversions.
- **Hosting** — VPS (Timeweb).

## Results (first weeks)

- **350+** users finished the quiz.
- The quiz became the **entry point** to the seasonal menu.
- On the **first day** of seasonal sales:
  - **56.7%** of revenue came from **seasonal cocktails**;
  - **2.3%** of revenue tied to the **quiz discount**.

So it’s not just engagement — it’s **measurable**.

## Takeaway

For HoReCa, Telegram is a natural channel: Mini Apps give a **real UI** without an app store, and a quiz gives a **reason to tap** before ordering.

Live bot: **@springbonus_bot** (verify before linking in production).
