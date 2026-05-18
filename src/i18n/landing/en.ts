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
    scenariosKicker: "Two common shapes — yours might differ; describe it below:",
    scenarioA: "Leads & storage: landing + validated form, a real database, notifications — capture without forcing a heavyweight admin upfront.",
    scenarioB: "Fast landing, no DB: single page focused on offer and conversion, technical SEO baseline, no admin panel dependency.",
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
        url: "https://haypsy.com",
        description:
          "Landing for a psychology-help platform (EN / RU / HY): promotional offer, lead capture, and groundwork ahead of an app rollout.",
        tags: ["Astro", "Landing", "Lead capture", "Multilingual"],
        cta: "Visit site →",
      },
      {
        name: "Telegram quiz for hospitality",
        url: "https://t.me/Razmik6",
        description:
          "A lightweight Telegram quiz scenario for hospitality: preference capture and engagement without shipping a standalone app first.",
        tags: ["Telegram", "Quiz", "HoReCa"],
        cta: "Discuss a similar build →",
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
    sub: "The form matches the fields we actually need — best for longer briefs. Telegram is fine for a short hello; the template below keeps first messages efficient.",
    scopeTrust:
      "Handover includes source access (repo or archive) and documented deploy credentials. We write down what's in the fixed scope vs. out-of-scope or billable before any deposit, so material delivery and boundaries stay explicit. Changes after sign-off go through a short written add-on — no silent scope creep.",
    telegramHint: "Plain bullet lists are perfect — no polished marketing copy required.",
    telegramPaste: `Paste template for Telegram:

Name:
What you need: (Leads + DB OR landing without DB — plus one short paragraph of context)
Timeline / deadline:
Preferred contact besides this chat / email for copies:
Copy & media status: ready / partial / to be produced later
Reference site or visual direction:
Budget or engagement type (optional):
How you found us (optional):`,
    formHintsTitle: "In the form, the “What do you need?” field is the main qualifier. It helps if you add:",
    formHints: [
      "What you want delivered: landing with database + lead flow vs. a single-page landing without a database (or your closest wording).",
      "One-line offer and the post-click action you care about — form submit, call, jump to Messenger, etc.",
      "Domain/hosting status and page languages; if integrations matter (CRM, payments), mention them in one line.",
    ],
    notFitTitle: "To save your time — we're usually not the right fit for:",
    notFitItems: [
      "Always-on paid media management or full social media retainers without a development component.",
      "Large brand or research-led UI programs before a first shippable page exists.",
      "Native mobile apps or heavy platforms when that's the core ask — say so early; we'll decline honestly or point you to a better match.",
    ],
    ctaTelegram: "Message on Telegram",
    ctaForm: "Open the request form",
    privacy: "Your contact is only used to follow up on your request.",
  },
  terms: {
    title: "How we work",
    shortNav: "Terms",
    preamble: [
      "Typical pace once assets are available: simple landing without a database often lands around 3–7 calendar days; landing + form + database commonly around 1–2 weeks if copy and product decisions don't stall.",
      "After scope is agreed, we run a few clear revision cycles on copy and layout (usually on the order of two to three) so we converge without endless micro-billing.",
      "If the work grows beyond the agreed package, we say so before or right after discovery: expand the package or add a written change order — no surprise scope after the deposit.",
    ],
    beforeKickoffTitle: "Nice to have before kickoff (lightweight, not bureaucracy):",
    beforeKickoffItems: [
      "Who the audience is, the main offer, and what “success” means right after launch.",
      "Whether copy and imagery are ready (yes / partial / later — latter may shift dates).",
      "Domain and hosting: already set or you want a quick recommendation.",
    ],
    items: [
      "Price and scope are fixed before the deposit. Revisions stay inside the agreed cycles and signed scope; net-new asks use a short change order or a separate phase.",
      "Source handover: repository access or an export before the final balance; deploy steps and key credentials are written down at handover.",
      "Copy, photos, and logo default to client-supplied; missing assets move the start and delivery dates.",
      "Visuals follow the package: clean and practical — not a standalone Figma product-design engagement.",
      "CRM, payments, heavy calculators, and bespoke integrations are scoped separately — not “just a few form fields” by default.",
      "14 days after launch: bugfixes. Content edits and new work after handover: separate agreement.",
      "Domain and hosting stay on your accounts; I'll help with deploy, renewals and invoices are yours.",
    ],
    closing: "Unsure what fits the package — ask before the first payment; we'll align in writing, no strings attached.",
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
