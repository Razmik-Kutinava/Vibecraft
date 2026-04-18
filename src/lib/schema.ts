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
    logo: `${site}/favicon.svg`,
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
    logo: `${site}/favicon.svg`,
    description:
      "MVP и внутренние продукты за 2–4 недели по фикс-цене: приложения, админки, Telegram-боты, сайты с базой под поиск. Права на код, деплой на сторону клиента и ответ по заявке в течение 3 часов в рабочее время.",
    priceRange: "$1000-$3000",
    address: { "@type": "PostalAddress", addressCountry: "AM" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@vibecraft.su",
      availableLanguage: ["Russian", "English", "Armenian"],
    },
    serviceOffer: {
      "@type": "Service",
      serviceType: "MVP Development",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        minPrice: "1000",
        maxPrice: "3000",
      },
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
      logo: { "@type": "ImageObject", url: `${opts.site}/favicon.svg` },
    },
    ...(image ? { image: [image] } : {}),
  };
}
