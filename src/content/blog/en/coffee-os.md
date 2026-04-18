---
title: "CoffeeOS: an operating system for a coffee chain"
description: "Not just an admin panel: baristas, shifts, stock, loyalty, RLS, and multi-tenant."
tag: "Case study"
date: 2026-03-24
readMinutes: 9
emoji: "☕"
---

What started as “three parts” grew into **CoffeeOS** — a hub for a coffee chain.

## Product scope

- Point **admin**.
- **Barista board** — orders and statuses.
- **Kiosk** and **mobile** for guests.
- **Shifts**, **cash**, **stock**.
- **Loyalty** and promos.
- **Prep kitchen** and shipments.

It’s an **operational system**, not a loose pile of screens.

## Engineering

- ~**65 tables**, **50+ SQL functions**.
- **RLS** roles.
- **Multi-tenant** architecture.

Built for operations: surface **what’s wrong** (payments, devices, receipts), suggest **what to do**, simplify **shift close**.

## Status

At the time of writing, the **MVP is ready for pilot testing** in stores; next is feedback loops and production rollout.

If you’re building something similar, align early on **data ownership**, **per-location roles**, and the **smallest** end-to-end scenario for v1.
