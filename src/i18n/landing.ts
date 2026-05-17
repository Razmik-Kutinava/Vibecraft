export type Lang = "ru" | "en";

export const telegramDirectUrl = "https://t.me/Razmik6";

export interface LandingMessages {
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

const ru: LandingMessages = {
  seo: {
    title: "Vibecraft — лендинги на Astro + Svelte | С базой и без",
    description:
      "Делаем лендинги на Astro и Svelte — быстро, качественно, с SEO из коробки. Простой лендинг от $500, с базой данных и формой сбора заявок от $800. Исходники и доступы — ваши.",
    keywords:
      "лендинг на заказ, лендинг Astro, лендинг Svelte, сайт под ключ, лендинг с базой данных, форма заявок, сайт для бизнеса, быстрый лендинг",
  },
  nav: {
    tagline: "лендинги на Astro + Svelte",
    benefits: "Преимущества",
    services: "Услуги",
    blog: "Блог",
    contact: "Контакты",
    order: "Обсудить проект →",
    langRu: "RU",
    langEn: "EN",
  },
  hero: {
    h1: "Лендинг под ключ. Astro + Svelte. С формой заявок и базой — или без, под вашу задачу.",
    lead: "Делаем быстрые, качественные лендинги для бизнеса. Прямой контакт с разработчиком — без менеджеров и переплат за структуру студии.",
    trustLine: "Реализованные проекты — в HoReCa, логистике и сфере услуг. Разборы в блоге →",
    ctaPrimary: "Обсудить проект",
    ctaTelegram: "Написать в Telegram →",
  },
  audience: {
    title: "Для кого",
    cards: [
      {
        icon: "→",
        title: "Бизнес и специалисты",
        subtitle: "",
        body: "Стоматологи, строители, юристы, кафе, фотографы, агентства — всем нужен сайт, который выглядит и работает. Без разработчика в штате, без ожидания и переплат за лишние прослойки.",
        featured: true,
      },
      {
        icon: "📋",
        title: "Те, кому нужно собирать заявки",
        subtitle: "",
        body: "Нужна форма, которая пишет в Telegram или таблицу? Лендинг с базой: заявка пришла — сразу видите. Ничего не теряется, всё под рукой.",
        featured: false,
      },
      {
        icon: "🚀",
        title: "Запуск нового продукта",
        subtitle: "",
        body: "Нужно быстро выйти на рынок и собрать первых клиентов. Лендинг — первое касание. Быстро делаем, SEO из коробки, деплой на ваш домен.",
        featured: false,
      },
    ],
    cta: "Узнать стоимость →",
  },
  whyUs: {
    title: "Почему Vibecraft",
    items: [
      {
        title: "Платите за результат, не за часы",
        text: "Фиксированная цена за готовый лендинг — без почасовки и скрытых расходов. Знаете что получите до старта.",
      },
      {
        title: "Делаем быстро",
        text: "Скорость зависит от задачи, но без затяжек и пустых итераций. Всё, что нужно для лендинга — в одном потоке.",
      },
      {
        title: "Ваш продукт — ваш актив",
        text: "Исходники, все доступы, деплой на ваш сервер. Никакой вечной аренды в чужом SaaS.",
      },
      {
        title: "Продакшен, не шаблон",
        text: "Деплой, SEO-разметка, адаптив под мобилку. Готово к реальным пользователям — не заготовка под доработку.",
      },
      {
        title: "Видите результат в процессе",
        text: "Показываем работающий лендинг до финала — не ждёте вслепую.",
      },
      {
        title: "Передача без головняка",
        text: "Документация, инструкция как пользоваться, 14 дней на проверку. Остаётесь с продуктом, а не с вопросами.",
      },
    ],
  },
  services: {
    title: "Услуги",
    sub: "В каждый вариант входит: передача исходников и всех доступов, деплой на ваш сервер или VPS, базовая SEO-разметка, 14 дней баг-фикса.",
    items: [
      {
        icon: "🌐",
        title: "Лендинг",
        price: "от $500",
        timeline: "3–7 дней",
        desc: "Чистый лендинг без базы данных. Astro + Svelte, быстро и по делу.",
        features: [
          "Адаптив под мобилку и десктоп",
          "SEO-разметка из коробки",
          "Lighthouse Performance 90+",
          "Деплой на ваш домен",
          "Исходники и все доступы",
          "14 дней баг-фикса",
        ],
        cta: "Обсудить →",
      },
      {
        icon: "🗄️",
        title: "Лендинг с базой",
        price: "от $800",
        timeline: "1–2 недели",
        desc: "Лендинг + форма сбора заявок, база данных, уведомления в Telegram. Заявка пришла — сразу видите.",
        features: [
          "Всё из тарифа «Лендинг»",
          "Форма заявок с валидацией",
          "База данных для хранения лидов",
          "Уведомления в Telegram",
          "Панель просмотра заявок",
          "14 дней баг-фикса",
        ],
        cta: "Обсудить →",
      },
    ],
  },
  portfolio: {
    title: "Пример работы",
    items: [
      {
        name: "HayPsy",
        url: "https://haypsy.am",
        description:
          "Лендинг для первой армянской платформы психологической помощи. Сбор листа ожидания с конверсионной формой и скидкой 30% на первую сессию. Запуск приложения — осень 2026.",
        tags: ["Astro", "Svelte", "Лендинг", "Форма заявок", "EN / RU / HY"],
        cta: "Открыть сайт →",
      },
    ],
  },
  midCta: {
    title: "Подобрали вариант?",
    sub: "Напишите задачу — отвечу с вилкой по срокам и бюджету, без обязательств.",
    btn: "Обсудить проект →",
  },
  blogSection: {
    title: "Блог",
    sub: "Разборы, стек, заметки про разработку.",
    viewAll: "Все статьи →",
  },
  blogList: {
    title: "Блог Vibecraft",
    description: "Разборы проектов, стек, заметки про разработку на Astro и Svelte.",
    keywords: "лендинг Astro, Svelte, разработка сайтов, заметки разработчика",
    h1: "Последние материалы",
    sub: "Разборы и заметки про разработку.",
    back: "← На главную",
    backToBlog: "← К списку статей",
  },
  contact: {
    title: "Расскажите о задаче",
    sub: "Напишите в Telegram или оставьте заявку в форме — как удобнее. Без обязательств.",
    ctaTelegram: "Написать в Telegram",
    ctaForm: "Оставить заявку",
    privacy: "Контакт используется только для ответа по вашей задаче.",
  },
  footer: {
    tagline: "VIBECRAFT",
    taglineSub: "лендинги на Astro + Svelte",
    motto: "Ваш продукт — ваш актив. Result > poetry.",
    navCol: "Навигация",
    contactsCol: "Связь",
    rights: "Все права защищены.",
    email: "hello@vibecraft.su",
    tgDirect: "Telegram",
  },
};

const en: LandingMessages = {
  seo: {
    title: "Vibecraft — landing pages on Astro + Svelte | With or without a database",
    description:
      "We build fast, quality landing pages on Astro and Svelte — with SEO out of the box. Simple landing from $500, with database and lead form from $800. Source code and access are yours.",
    keywords:
      "landing page development, Astro landing, Svelte landing, custom site, landing with database, lead form, business website, fast landing",
  },
  nav: {
    tagline: "landing pages on Astro + Svelte",
    benefits: "Benefits",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    order: "Discuss project →",
    langRu: "RU",
    langEn: "EN",
  },
  hero: {
    h1: "Landing page, done right. Astro + Svelte. With a lead form and database — or without, your call.",
    lead: "Fast, quality landing pages for businesses. Direct contact with the engineer — no account managers, no agency overhead.",
    trustLine: "Delivered projects in HoReCa, logistics and services — breakdowns in the blog →",
    ctaPrimary: "Discuss project",
    ctaTelegram: "Message on Telegram →",
  },
  audience: {
    title: "Who it's for",
    cards: [
      {
        icon: "→",
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
        title: "You see progress along the way",
        text: "We show working results before the finish — no blind waiting until the end.",
      },
      {
        title: "Clean handover",
        text: "Documentation, usage guide, 14 days to check for bugs. You keep the product, not open questions.",
      },
    ],
  },
  services: {
    title: "Services",
    sub: "Every option includes: source handover and access, deploy to your server or VPS, baseline SEO, 14 days of bugfix.",
    items: [
      {
        icon: "🌐",
        title: "Landing page",
        price: "from $500",
        timeline: "3–7 days",
        desc: "Clean landing without a database. Astro + Svelte, fast and to the point.",
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
        tags: ["Astro", "Svelte", "Landing", "Lead form", "EN / RU / HY"],
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
    description: "Project breakdowns, stack, dev notes on Astro and Svelte.",
    keywords: "Astro landing, Svelte, web development, developer notes",
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
  footer: {
    tagline: "VIBECRAFT",
    taglineSub: "landing pages on Astro + Svelte",
    motto: "Your product — your asset. Result > poetry.",
    navCol: "Navigate",
    contactsCol: "Contact",
    rights: "All rights reserved.",
    email: "hello@vibecraft.su",
    tgDirect: "Telegram",
  },
};

export function getLandingMessages(lang: Lang): LandingMessages {
  return lang === "ru" ? ru : en;
}
