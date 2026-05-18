export type Lang = "ru" | "en";

export interface LandingMessages {
  crumbs: {
    /** Подпись первого пункта BreadcrumbList (JSON-LD) — не путать с «← На главную» и т.п. */
    home: string;
  };
  seo: { title: string; description: string; keywords: string };
  nav: {
    tagline: string;
    benefits: string;
    services: string;
    blog: string;
    contact: string;
    order: string;
    langRu: string;
    langEn: string;
  };
  hero: {
    h1: string;
    lead: string;
    trustLine: string;
    ctaPrimary: string;
    ctaTelegram: string;
  };
  audience: {
    title: string;
    cards: { icon: string; title: string; subtitle: string; body: string; featured: boolean }[];
    cta: string;
  };
  whyUs: {
    title: string;
    items: { title: string; text: string }[];
  };
  services: {
    title: string;
    sub: string;
    items: {
      icon: string;
      title: string;
      price: string;
      timeline: string;
      desc: string;
      features: string[];
      cta: string;
    }[];
  };
  portfolio: {
    title: string;
    items: {
      name: string;
      url: string;
      description: string;
      tags: string[];
      cta: string;
    }[];
  };
  midCta: { title: string; sub: string; btn: string };
  blogSection: { title: string; sub: string; viewAll: string };
  blogList: {
    title: string;
    description: string;
    keywords: string;
    h1: string;
    sub: string;
    back: string;
    backToBlog: string;
  };
  terms: {
    title: string;
    shortNav: string;
    items: string[];
    closing: string;
  };
  contact: {
    title: string;
    sub: string;
    ctaTelegram: string;
    ctaForm: string;
    privacy: string;
  };
  footer: {
    tagline: string;
    taglineSub: string;
    motto: string;
    navCol: string;
    contactsCol: string;
    rights: string;
    email: string;
    tgDirect: string;
  };
}
