import type { Lang } from "@/i18n/landing";
import { telegramDirectUrl } from "@/i18n/landing";

const sameAs = [
  "https://tenchat.ru/vibecraft",
  "https://linkedin.com/company/vibecraft",
  "https://instagram.com/vibecraft",
  telegramDirectUrl,
];

export function organizationNode(site: string) {
  return {
    "@type": "Organization",
    "@id": `${site}/#organization`,
    name: "Vibecraft",
    url: site,
    logo: `${site}/favicon.png`,
    email: "hello@vibecraft.su",
    sameAs,
  };
}

export function professionalServiceNode(site: string) {
  return {
    "@type": "ProfessionalService",
    "@id": `${site}/#professional-service`,
    name: "Vibecraft",
    url: site,
    logo: `${site}/favicon.png`,
    description:
      "Лендинги на Astro и Svelte под ключ — с базой данных и без. Передача исходников, деплой на сервер клиента, SEO из коробки. От $500.",
    priceRange: "$500-$800",
    address: { "@type": "PostalAddress", addressCountry: "AM" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@vibecraft.su",
      availableLanguage: ["Russian", "English", "Armenian"],
    },
    serviceOffer: {
      "@type": "Service",
      serviceType: "Landing Page Development",
      offers: [
        {
          "@type": "Offer",
          name: "Лендинг",
          priceCurrency: "USD",
          price: "500",
        },
        {
          "@type": "Offer",
          name: "Лендинг с базой данных",
          priceCurrency: "USD",
          price: "800",
        },
      ],
    },
    sameAs,
    parentOrganization: { "@id": `${site}/#organization` },
  };
}

export function webSiteNode(site: string, lang: Lang) {
  const inLanguage = lang === "ru" ? "ru-RU" : "en-US";
  return {
    "@type": "WebSite",
    "@id": `${site}/#website`,
    url: site,
    name: "Vibecraft",
    inLanguage: [inLanguage],
    publisher: { "@id": `${site}/#organization` },
  };
}

export function landingJsonLdGraph(site: string, lang: Lang) {
  return [organizationNode(site), professionalServiceNode(site), webSiteNode(site, lang)];
}

export function breadcrumbList(site: string, items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path.startsWith("/") ? item.path : `/${item.path}`, site).href,
    })),
  };
}

export function articleJsonLd(opts: {
  site: string;
  url: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  inLanguage: string;
  image?: string;
}) {
  const image = opts.image ? new URL(opts.image.startsWith("http") ? opts.image : opts.image, opts.site).href : undefined;
  return {
    "@type": "BlogPosting",
    "@id": `${opts.url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    headline: opts.title,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: opts.inLanguage,
    author: { "@type": "Organization", "@id": `${opts.site}/#organization` },
    publisher: {
      "@type": "Organization",
      "@id": `${opts.site}/#organization`,
      logo: { "@type": "ImageObject", url: `${opts.site}/favicon.png` },
    },
    ...(image ? { image: [image] } : {}),
  };
}
