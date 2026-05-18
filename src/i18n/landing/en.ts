import type { LandingMessages } from "./types";

export const landingMessagesEn: LandingMessages = {
  crumbs: {
    home: "Home",
  },
  seo: {
    title: "Vibecraft — landing pages on Astro | With or without a database",
    description:
      "We build fast, quality landing pages on Astro — with SEO out of the box. Simple landing from $500, with database and lead form from $800. Source code and access are yours.",
    keywords:
      "landing page development, Astro landing, custom site, landing with database, lead form, business website, fast landing",
  },
  nav: {
    tagline: "landing pages on Astro",
    benefits: "Benefits",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    order: "Discuss project →",
    langRu: "RU",
    langEn: "EN",
  },
  hero: {
    h1: "Landing page, done right. Built on Astro. With a lead form and database — or without, your call.",
    lead: "Fast, quality landing pages for businesses. Direct contact with the engineer — no account managers, no agency overhead.",
    trustLine: "Delivered projects in HoReCa, logistics and services — breakdowns in the blog →",
    ctaPrimary: "Discuss project",
    ctaTelegram: "Message on Telegram →",
  },
  audience: {
    title: "Who it's for",
    cards: [
      {
        icon: "💼",
        title: "Businesses and specialists",
        subtitle: "",
        body: "Dentists, builders, lawyers, cafes, photographers, agencies — everyone needs a site that looks good and works. No in-house developer, no long waits, no agency markups.",
        featured: true,
      },
      {
        icon: "📋",
        title: "Those who need to capture leads",
        subtitle: "",
        body: "Need a form that sends to Telegram or a spreadsheet? Landing with a database: lead comes in — you see it immediately. Nothing lost, everything at hand.",
        featured: false,
      },
      {
        icon: "🚀",
        title: "Launching something new",
        subtitle: "",
        body: "Need to hit the market fast and collect your first customers. A landing is the first touchpoint. We build quickly, SEO out of the box, deploy to your domain.",
        featured: false,
      },
    ],
    cta: "Get a quote →",
  },
  whyUs: {
    title: "Why Vibecraft",
    items: [
      {
        title: "Pay for the result, not the hours",
        text: "Fixed price for a finished landing — no hourly billing, no hidden costs. You know what you get before we start.",
      },
      {
        title: "We ship fast",
        text: "Speed depends on the scope, but no drawn-out iterations. Everything needed for the landing in one clean flow.",
      },
      {
        title: "Your product — your asset",
        text: "Sources, all access, deploy to your server. No eternal rent on someone else's SaaS.",
      },
      {
        title: "Production, not a template",
        text: "Deploy, baseline SEO, mobile-ready. Ready for real users — not a draft for future revision.",
      },
      {
        title: "We build sites — not ads",
        text: "Technical SEO, speed, markup — inside every project. Ad campaigns and promotion aren't our lane. Honest about the focus.",
      },
      {
        title: "Clean handover",
        text: "Documentation, usage guide, 14 days to check for bugs. You keep the product, not open questions.",
      },
    ],
  },
  services: {
    title: "Services",
    sub: "Every option includes: source handover and access, deploy to your server or VPS, baseline SEO, 14 days of bugfix. Look and feel is clean and straightforward — no separate Figma UI/UX phase. Share colors or a couple of reference sites and I'll align within scope and timeline.",
    items: [
      {
        icon: "🌐",
        title: "Landing page",
        price: "from $500",
        timeline: "3–7 days",
        desc: "Clean landing without a database. Built on Astro, fast and to the point.",
        features: [
          "Responsive — mobile and desktop",
          "SEO markup out of the box",
          "Lighthouse Performance 90+",
          "Deploy to your domain",
          "Source code and all access",
          "14 days bugfix",
        ],
        cta: "Discuss →",
      },
      {
        icon: "🗄️",
        title: "Landing with database",
        price: "from $800",
        timeline: "1–2 weeks",
        desc: "Landing + lead capture form, database, Telegram notifications. Lead comes in — you see it immediately.",
        features: [
          "Everything in Landing page",
          "Lead form with validation",
          "Database to store submissions",
          "Telegram notifications",
          "Submissions panel",
          "14 days bugfix",
        ],
        cta: "Discuss →",
      },
    ],
  },
  portfolio: {
    title: "Example work",
    items: [
      {
        name: "HayPsy",
        url: "https://haypsy.am",
        description:
          "Landing page for the first pan-Armenian psychology platform. Waitlist collection with a lead form and 30% off for early signups. App launch target: autumn 2026.",
        tags: ["Astro", "Landing", "Lead form", "EN / RU / HY"],
        cta: "Visit site →",
      },
    ],
  },
  midCta: {
    title: "Found the right option?",
    sub: "Tell me the task — I'll reply with a timeline and budget range, no obligation.",
    btn: "Discuss project →",
  },
  blogSection: {
    title: "Blog",
    sub: "Project breakdowns, stack notes, dev writing.",
    viewAll: "All articles →",
  },
  blogList: {
    title: "Vibecraft blog",
    description: "Project breakdowns, stack, dev notes on Astro.",
    keywords: "Astro landing, web development, developer notes",
    h1: "Latest posts",
    sub: "Breakdowns and dev notes.",
    back: "← Home",
    backToBlog: "← All articles",
  },
  contact: {
    title: "Tell me about the task",
    sub: "Message me on Telegram or submit the form — your choice. No obligation.",
    ctaTelegram: "Message on Telegram",
    ctaForm: "Submit a request",
    privacy: "Your contact is only used to follow up on your request.",
  },
  terms: {
    title: "How we work",
    shortNav: "Terms",
    items: [
      "Price and timeline are agreed before kickoff. Two revision rounds after scope sign-off — beyond that, only via a change order.",
      "Copy, photos, and logo come from you. Without assets, the start date moves.",
      "Visuals follow the package description: clean and practical — no standalone Figma UI/UX engagement.",
      "CRM, payments, heavy calculators, and custom integrations are scoped separately — not “just a form”.",
      "14 days after launch: bugfixes. Content tweaks after handover: separate agreement.",
      "Domain and hosting stay on your accounts. I'll help with deploy; renewals and bills are yours.",
    ],
    closing: "Questions about scope — we align before kickoff, no strings attached.",
  },
  footer: {
    tagline: "VIBECRAFT",
    taglineSub: "landing pages on Astro",
    motto: "Your product — your asset. Result > poetry.",
    navCol: "Navigate",
    contactsCol: "Contact",
    rights: "All rights reserved.",
    email: "hello@vibecraft.su",
    tgDirect: "Telegram",
  },
};
