export type Lang = "ru" | "en";

/** Ссылки на Telegram: при необходимости замените канал на свой. */
export const telegramDirectUrl = "https://t.me/vibecraft";
export const telegramChannelUrl = "https://t.me/vibecraft";

export interface LandingMessages {
  seo: { title: string; description: string; keywords: string };
  nav: {
    tagline: string;
    benefits: string;
    services: string;
    process: string;
    cases: string;
    blog: string;
    manifest: string;
    contact: string;
    order: string;
    tgChannel: string;
    langRu: string;
    langEn: string;
  };
  hero: {
    h1: string;
    lead: string;
    bullets: string[];
    ctaPrimary: string;
    ctaTelegram: string;
  };
  audience: {
    title: string;
    cards: { icon: string; title: string; subtitle: string; body: string; featured: boolean }[];
    cta: string;
  };
  methodology: {
    title: string;
    lead: string;
    intro: string;
    bullets: string[];
    cta: string;
  };
  whyUs: {
    title: string;
    items: { title: string; text: string }[];
  };
  objections: {
    title: string;
    items: { q: string; a: string }[];
    ctaTelegram: string;
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
      cta: string;
    }[];
    customHint: string;
    customCta: string;
  };
  process: { title: string; steps: { title: string; desc: string }[]; cta: string };
  /** Промежуточный CTA после блока услуг */
  midCta: { title: string; sub: string; btn: string };
  cases: {
    title: string;
    moreLabel: string;
    items: {
      icon: string;
      title: string;
      meta: string;
      problem: string;
      solution: string;
      result: string;
      readMore: string;
      readMoreHref: string;
    }[];
  };
  testimonials: {
    title: string;
    note: string;
  };
  manifestTeaser: {
    title: string;
    paragraphs: string[];
    pillars: { title: string; text: string }[];
    fit: string;
    notFit: string;
    closing: string;
    linkLabel: string;
  };
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
    namePh: string;
    contactPh: string;
    messagePh: string;
    submit: string;
    privacy: string;
    fastTg: string;
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
    tgChannel: string;
  };
}

const ru: LandingMessages = {
  seo: {
    title: "Vibecraft — разработка MVP под ключ | 2–4 недели, фикс в договоре",
    description:
      "От идеи до рабочего продукта за 2–4 недели. Фикс-цена в договоре, код и доступы — ваши. MVP приложения, админки, Telegram-боты, сайты. Без менеджеров и полугодовых спринтов.",
    keywords:
      "MVP под ключ, разработка MVP, фикс цена, мобильное приложение, админка, Telegram бот, стартап, внутренние инструменты, ИИ в разработке",
  },
  nav: {
    tagline: "разработка MVP под ключ",
    benefits: "Преимущества",
    services: "Услуги",
    process: "Процесс",
    cases: "Кейсы",
    blog: "Блог",
    manifest: "Манифест",
    contact: "Контакты",
    order: "Обсудить проект →",
    tgChannel: "TG-канал",
    langRu: "RU",
    langEn: "EN",
  },
  hero: {
    h1: "От идеи до рабочего продукта — за 2–4 недели. Фикс в договоре. Код — ваш.",
    lead: "Прямой контакт с разработчиком. Без менеджеров, раздутых команд и полугодовых спринтов.",
    bullets: [
      "Срок и бюджет фиксирую до старта — письменно",
      "Прогресс показываю каждую неделю, не в конце",
      "Ответ по заявке — до 3 часов в рабочее время",
    ],
    ctaPrimary: "Обсудить проект",
    ctaTelegram: "Написать в Telegram →",
  },
  audience: {
    title: "Для кого",
    cards: [
      {
        icon: "→",
        title: "Бизнес, которому нужен инструмент",
        subtitle: "основная ЦА",
        body: "Таблицы кончились. Процессы растут, контроля нет. Нужна админка, дашборд или внутренняя система — чтобы видеть заявки, управлять командой, не терять данные. Без найма штатного разработчика и месяцев ожидания.",
        featured: true,
      },
      {
        icon: "💡",
        title: "Фаундер с гипотезой",
        subtitle: "",
        body: "Идея есть, команду нанимать дорого и долго. Нужен рабочий продукт для первых пользователей — не презентация для инвесторов.",
        featured: false,
      },
      {
        icon: "🚀",
        title: "Стартап на старте",
        subtitle: "",
        body: "Нужно проверить механику до того, как вкладывать большой бюджет. Запускаем MVP — смотрим на рынок — итерируем.",
        featured: false,
      },
    ],
    cta: "Узнать стоимость под вашу задачу →",
  },
  methodology: {
    title: "Как работаем быстрее",
    lead: "Vibecraft — это не агентство и не фриланс-лотерея.",
    intro:
      "Это методология сборки продуктов и один ответственный инженер за результат. Типовые модули — авторизация, роли, формы, уведомления — собираются через отлаженный ИИ-пайплайн. Архитектура, бизнес-логика и финальное ревью — вручную, под вашу задачу. Что это значит на практике:",
    bullets: [
      "Скорость типовых задач выше в разы — без потери качества",
      "Код читаемый и задокументированный — любой разработчик подхватит",
      "Никакого «спагетти от нейронки» — каждый коммит проходит ручную проверку на безопасность и поддерживаемость",
    ],
    cta: "Смотреть как это работает в кейсах →",
  },
  whyUs: {
    title: "Почему Vibecraft",
    items: [
      {
        title: "Фикс-цена",
        text: "Цена в договоре. Хотите добавить фичу — доп. соглашение. Никаких скрытых часов и сюрпризов в конце.",
      },
      {
        title: "Бизнес-фокус",
        text: "Отсекаю лишнее. Проверяю гипотезу минимальным объёмом — не рисую UI-концепты три месяца.",
      },
      {
        title: "Ваш продукт — ваш актив",
        text: "Исходники, все доступы, деплой на ваш сервер. Никакой вечной аренды в чужом SaaS.",
      },
      {
        title: "Продакшен, не прототип",
        text: "Деплой, базовая SEO-разметка, инструкция по администрированию. Готово к приёму реальных пользователей.",
      },
      {
        title: "Прозрачный процесс",
        text: "Еженедельные демо. Видите работающий продукт в процессе — не ждёте финального релиза вслепую.",
      },
      {
        title: "Передача без боли",
        text: "Видео-разбор после сдачи, документация, 14 дней баг-фикса. Остаётесь с продуктом, а не с вопросами.",
      },
    ],
  },
  objections: {
    title: "А если что-то пойдёт не так",
    items: [
      {
        q: "«А вдруг вы пропадёте?»",
        a: "Код с первого коммита в вашем репозитории. Все доступы — ваши с первого дня. Если работа прекратится завтра — у вас есть всё: исходники, документация, доступы. Физически не могу вас заблокировать.",
      },
      {
        q: "«ИИ в разработке — это же нестабильно?»",
        a: "ИИ ускоряет стандартные модули. Архитектура, бизнес-логика и ревью — вручную. Каждый коммит проверяется на читаемость, безопасность и покрытие тестами. Код сдаётся таким, чтобы любой разработчик мог его подхватить — не только тот, кто писал.",
      },
      {
        q: "«Я не технарь — как принимать работу?»",
        a: "Критерии приёмки фиксирую до старта на языке бизнеса: что должно работать, какие сценарии, что считается готовым. После сдачи — видео-разбор без погружения в код.",
      },
      {
        q: "«Почему дешевле студии — это нормально?»",
        a: "Студия держит в штате менеджеров, дизайнеров, аккаунтов — вы платите за всю эту структуру, даже если нужен только код. Здесь платите за результат: один инженер, чёткий скоуп, без прослоек. Дешевле — не значит хуже. Значит без накладных расходов офиса, простоя между спринтами и часов на согласования.",
      },
      {
        q: "«А вдруг вылезут доп. расходы?»",
        a: "Цена в договоре. Изменение скоупа — только через доп. соглашение с вашей подписью. Никаких устных «ну тут ещё немного».",
      },
      {
        q: "«А вдруг не подойдёте?»",
        a: "Первый шаг — 15-минутный созвон без обязательств. Не совпадаем по задаче, бюджету или подходу — скажу прямо. Не тяну проект ради проекта.",
      },
    ],
    ctaTelegram: "Остались вопросы — задать напрямую в Telegram →",
  },
  services: {
    title: "Услуги",
    sub: "В каждый пакет входит: передача исходников и всех доступов, деплой на ваш сервер или VPS, базовая SEO-разметка, видео-инструкция, 14 дней баг-фикса. Ответ по заявке — до 3 часов в рабочее время.",
    items: [
      {
        icon: "📱",
        title: "MVP приложения",
        price: "$1 500–3 000",
        timeline: "2–4 недели",
        desc: "Мобильное приложение + серверная часть + публикация в сторы. Объём фиксируем на старте.",
        cta: "Обсудить →",
      },
      {
        icon: "🖥️",
        title: "Админка и внутренние инструменты",
        price: "$1 000–2 500",
        timeline: "1–2 недели",
        desc: "Панели, дашборды, учёт, ролевые доступы. Под ваш процесс, не под шаблон.",
        cta: "Обсудить →",
      },
      {
        icon: "✈️",
        title: "Telegram-бот",
        price: "$1 000–1 500",
        timeline: "3–7 дней",
        desc: "Сценарии, интеграции, панель управления. Быстро, без копания в чужом легаси.",
        cta: "Обсудить →",
      },
      {
        icon: "🌐",
        title: "Сайт + база под поиск",
        price: "$1 000–2 000",
        timeline: "1–2 недели",
        desc: "Лендинг, несложная админка, форма + уведомления в Telegram.",
        cta: "Обсудить →",
      },
    ],
    customHint: "Не нашли свою задачу?",
    customCta: "Описать задачу →",
  },
  process: {
    title: "Процесс",
    steps: [
      {
        title: "Созвон 15 минут",
        desc: "Идея, сроки, бюджет. Без обязательств. Просто понять — совпадаем ли.",
      },
      {
        title: "КП за 24 часа",
        desc: "Объём, цена, этапы, стек. Письменно. До старта знаете что именно получите.",
      },
      {
        title: "Работа с еженедельными демо",
        desc: "Показываю работающие куски продукта. Без ожидания финального релиза вслепую.",
      },
      {
        title: "Тесты и деплой",
        desc: "QA, оптимизация, выкладка на ваш сервер.",
      },
      {
        title: "Передача и поддержка",
        desc: "Документация, видео-разбор, 14 дней баг-фикса. Остаётесь с продуктом, а не с вопросами.",
      },
    ],
    cta: "Начать с бесплатного созвона →",
  },
  midCta: {
    title: "Подобрали пакет?",
    sub: "Напишите задачу — отвечу с вилкой по срокам и бюджету, без обязательств.",
    btn: "Обсудить проект →",
  },
  cases: {
    title: "Кейсы",
    moreLabel: "Подробные разборы — в блоге; отдельные публичные кейсы дополняю по мере согласований.",
    items: [
      {
        icon: "🚚",
        title: "Приложение для водителей + центр управления",
        meta: "Логистика · стек по согласованию с клиентом",
        problem:
          "Заявки и маршруты жили в таблицах и чатах: статус рейсов был непрозрачен, руководству не хватало единой картины.",
        solution:
          "Мобильное приложение для исполнителей на местах и веб-админка для диспетчеризации: статусы, уведомления, базовая аналитика в одном контуре.",
        result: "Пилот на ограниченной географии — дальше масштабирование по факту метрик (подпись клиента запрашивается для публичной цифры).",
        readMore: "Материалы в блоге →",
        readMoreHref: "/blog",
      },
      {
        icon: "☕",
        title: "MVP для кофейни за 18 дней",
        meta: "HoReCa · Flutter · Supabase",
        problem: "Нужно было быстро проверить гипотезу заказа и лояльности без долгой разработки «с нуля» на неизвестном стеке.",
        solution:
          "Собрали поток заказа, оплату и программу лояльности на связке Flutter + Supabase — с фокусом на скорость выхода, не на бесконечный функционал.",
        result: "Запуск MVP за 18 дней; гипотеза проверена, дальше — масштабирование по данным (детали в статье).",
        readMore: "Читать разбор →",
        readMoreHref: "/blog/coffee-mvp.md",
      },
    ],
  },
  testimonials: {
    title: "Что говорят клиенты",
    note:
      "Публичные цитаты с именами и компаниями согласовываю индивидуально. Пока ориентир — разборы в блоге, фикс в договоре и еженедельные демо в процессе.",
  },
  manifestTeaser: {
    title: "Манифест",
    paragraphs: [
      "В разработке принято говорить «быстро» и сдавать через три месяца. Прятать цену за почасовкой. Называть прототип продуктом. Vibecraft работает иначе.",
    ],
    pillars: [
      {
        title: "Скорость — это дисциплина",
        text: "MVP за 2–4 недели — не наспех. Жёсткий отбор того, что нужно для проверки гипотезы. Типовое — через пайплайн. Бизнес-логика — вручную.",
      },
      {
        title: "Цена фиксируется. Точка.",
        text: "Договор — не черновик. Скоуп меняется только через доп. соглашение. Никаких скрытых часов.",
      },
      {
        title: "Ваш продукт — ваш актив",
        text: "Код, данные, сервер — всё ваше с первого дня. Зависимость не создаю принципиально.",
      },
      {
        title: "Честность дороже продажи",
        text: "Если задача не подходит по бюджету, срокам или здравому смыслу — скажу прямо на созвоне. Не возьму проект ради проекта.",
      },
    ],
    fit: "Работаю с: бизнесом которому нужен инструмент, фаундерами с гипотезой и дедлайном, теми кто ценит владение и прозрачность.",
    notFit:
      "Не работаю с: теми кто хочет «поиграться», бесконечными правками без ТЗ, теми кто путает MVP с энтерпрайзом на 50 экранов.",
    closing: "Манифест — это фильтр. Совпадаем — добро пожаловать.",
    linkLabel: "Читать полностью →",
  },
  blogSection: {
    title: "Блог",
    sub: "Кейсы, стек, методология — материалы длиннее, чем на главной.",
    viewAll: "Все статьи →",
  },
  blogList: {
    title: "Блог Vibecraft — кейсы и материалы",
    description: "Кейсы, запуск, владение данными.",
    keywords: "кейсы разработки, запуск MVP, админка, Telegram бот, Supabase",
    h1: "Последние материалы",
    sub: "Кейсы и заметки про запуск.",
    back: "← На главную",
    backToBlog: "← К списку статей",
  },
  contact: {
    title: "Расскажите о задаче — отвечу с оценкой за 3 часа",
    sub: "Без обязательств. Только контакт и суть.",
    namePh: "Имя",
    contactPh: "Email или Telegram",
    messagePh: "Кратко о задаче — опционально",
    submit: "Обсудить проект →",
    privacy: "Никакого спама. Контакт только для связи по заявке.",
    fastTg: "Нужно быстрее? Написать напрямую в Telegram →",
  },
  footer: {
    tagline: "VIBECRAFT",
    taglineSub: "разработка MVP под ключ",
    motto: "Свой продукт — ваш актив. Result > poetry.",
    navCol: "Навигация",
    contactsCol: "Связь",
    rights: "Все права защищены.",
    email: "hello@vibecraft.su",
    tgDirect: "Telegram",
    tgChannel: "TG-канал",
  },
};

const en: LandingMessages = {
  seo: {
    title: "Vibecraft — turnkey MVP development | 2–4 weeks, fixed contract",
    description:
      "From idea to working product in 2–4 weeks. Fixed price in the contract; code and access are yours. MVP apps, admin tools, bots, sites — no bloated teams or six-month sprints.",
    keywords:
      "MVP development, fixed price, mobile app, admin panel, Telegram bot, startup, internal tools, AI-assisted delivery",
  },
  nav: {
    tagline: "turnkey MVP development",
    benefits: "Benefits",
    services: "Services",
    process: "Process",
    cases: "Cases",
    blog: "Blog",
    manifest: "Manifesto",
    contact: "Contact",
    order: "Discuss project →",
    tgChannel: "TG channel",
    langRu: "RU",
    langEn: "EN",
  },
  hero: {
    h1: "From idea to a working product in 2–4 weeks. Fixed in the contract. The code is yours.",
    lead: "Direct contact with the engineer. No account managers, bloated teams, or endless sprints.",
    bullets: [
      "Timeline and budget fixed before kickoff — in writing",
      "Weekly progress — not a big reveal at the end",
      "Reply to your request within 3 business hours",
    ],
    ctaPrimary: "Discuss project",
    ctaTelegram: "Message on Telegram →",
  },
  audience: {
    title: "Who it’s for",
    cards: [
      {
        icon: "→",
        title: "Businesses that need a real tool",
        subtitle: "primary ICP",
        body: "Spreadsheets don’t scale. Processes grow; control fades. You need an admin, a dashboard, or an internal system — to track requests, run the team, and not lose data. Without hiring a full-time developer for months.",
        featured: true,
      },
      {
        icon: "💡",
        title: "Founder with a hypothesis",
        subtitle: "",
        body: "You have an idea; hiring a team is slow and expensive. You need a working product for first users — not an investor deck.",
        featured: false,
      },
      {
        icon: "🚀",
        title: "Early-stage startup",
        subtitle: "",
        body: "You need to validate mechanics before a big budget. Ship an MVP — watch the market — iterate.",
        featured: false,
      },
    ],
    cta: "Get a quote for your scope →",
  },
  methodology: {
    title: "How we ship faster",
    lead: "Vibecraft is not an agency and not a freelance lottery.",
    intro:
      "It’s a product assembly methodology and one accountable engineer. Standard modules — auth, roles, forms, notifications — are built through a proven AI pipeline. Architecture, business logic, and final review are manual, for your case. In practice:",
    bullets: [
      "Typical work is many times faster — without sacrificing quality",
      "Readable, documented code — any engineer can take over",
      "No “neural spaghetti” — every commit is reviewed for security and maintainability",
    ],
    cta: "See it in the cases →",
  },
  whyUs: {
    title: "Why Vibecraft",
    items: [
      {
        title: "Fixed price",
        text: "Price is in the contract. New feature? Change order. No hidden hours or end-of-project surprises.",
      },
      {
        title: "Business focus",
        text: "I cut noise. We validate the hypothesis with minimum scope — not three months of UI concepts.",
      },
      {
        title: "Your product — your asset",
        text: "Sources, access, deploy to your server. No eternal rent on someone else’s SaaS.",
      },
      {
        title: "Production, not a prototype",
        text: "Deploy, baseline SEO, admin handover. Ready for real users.",
      },
      {
        title: "Transparent process",
        text: "Weekly demos. You see working software along the way — not a blind wait for a final release.",
      },
      {
        title: "Clean handover",
        text: "Walkthrough video after delivery, docs, 14 days of bugfix. You keep the product, not open questions.",
      },
    ],
  },
  objections: {
    title: "If something goes wrong",
    items: [
      {
        q: "“What if you disappear?”",
        a: "Code from commit one in your repo. Access is yours from day one. If work stops tomorrow — you still have sources, docs, and access. I can’t lock you out.",
      },
      {
        q: "“Isn’t AI in development unstable?”",
        a: "AI speeds up standard modules. Architecture, business logic, and review are manual. Every commit is checked for readability, security, and tests. Code is delivered so another engineer can continue — not only the author.",
      },
      {
        q: "“I’m not technical — how do I accept the work?”",
        a: "Acceptance criteria are agreed upfront in business language: what works, which flows, what “done” means. After delivery — a video walkthrough without diving into code.",
      },
      {
        q: "“Cheaper than an agency — is that OK?”",
        a: "Agencies carry PMs, designers, accounts — you pay for the structure even if you only needed code. Here you pay for output: one engineer, clear scope, no layers. Cheaper doesn’t mean worse — it means no office overhead, idle sprints, or endless approvals.",
      },
      {
        q: "“What about extra costs?”",
        a: "Price is in the contract. Scope changes only via a signed change order. No verbal “just a bit more”.",
      },
      {
        q: "“What if we’re not a fit?”",
        a: "First step is a 15-minute call with no obligation. If scope, budget, or style don’t match — I’ll say so. I don’t take projects for the sake of projects.",
      },
    ],
    ctaTelegram: "Still questions — ask directly on Telegram →",
  },
  services: {
    title: "Services",
    sub: "Every package includes: source handover and access, deploy to your server or VPS, baseline SEO, video walkthrough, 14 days of bugfix. Reply within 3 business hours.",
    items: [
      {
        icon: "📱",
        title: "MVP app",
        price: "$1,500–3,000",
        timeline: "2–4 weeks",
        desc: "Mobile app + backend + store submission. Scope fixed at kickoff.",
        cta: "Discuss →",
      },
      {
        icon: "🖥️",
        title: "Admin & internal tools",
        price: "$1,000–2,500",
        timeline: "1–2 weeks",
        desc: "Panels, dashboards, accounting, roles — tailored to your process.",
        cta: "Discuss →",
      },
      {
        icon: "✈️",
        title: "Telegram bot",
        price: "$1,000–1,500",
        timeline: "3–7 days",
        desc: "Flows, integrations, admin UI. Fast, without legacy archaeology.",
        cta: "Discuss →",
      },
      {
        icon: "🌐",
        title: "Site + search baseline",
        price: "$1,000–2,000",
        timeline: "1–2 weeks",
        desc: "Landing, light admin, form + Telegram notifications.",
        cta: "Discuss →",
      },
    ],
    customHint: "Don’t see your task?",
    customCta: "Describe the task →",
  },
  process: {
    title: "Process",
    steps: [
      {
        title: "15-minute call",
        desc: "Idea, timeline, budget — no obligation. See if we match.",
      },
      {
        title: "Proposal in 24h",
        desc: "Scope, price, milestones, stack — in writing. You know what you get before start.",
      },
      {
        title: "Build + weekly demos",
        desc: "Working slices every week — no blind wait for a finale.",
      },
      {
        title: "Tests & deploy",
        desc: "QA, optimization, deploy to your server.",
      },
      {
        title: "Handover & support",
        desc: "Docs, video walkthrough, 14 days bugfix. You keep the product.",
      },
    ],
    cta: "Start with a free call →",
  },
  midCta: {
    title: "Picked a package?",
    sub: "Tell me the task — I’ll reply with a timeline and budget range, no obligation.",
    btn: "Discuss project →",
  },
  cases: {
    title: "Cases",
    moreLabel: "Longer write-ups live in the blog; standalone public cases are added as clients approve.",
    items: [
      {
        icon: "🚚",
        title: "Driver app + control center",
        meta: "Logistics · stack agreed with the client",
        problem:
          "Routes and requests lived in spreadsheets and chats: execution status was opaque and leadership lacked a single operational view.",
        solution:
          "A mobile app for people in the field plus a web admin for dispatch: statuses, notifications, and baseline analytics in one loop.",
        result: "Pilot in a limited region — scale when metrics justify it (a public number requires client sign-off).",
        readMore: "Blog →",
        readMoreHref: "/blog",
      },
      {
        icon: "☕",
        title: "Coffee-shop MVP in 18 days",
        meta: "HoReCa · Flutter · Supabase",
        problem: "Validate ordering and loyalty fast without a long greenfield build on an unknown stack.",
        solution:
          "Shipped ordering, payments, and loyalty on Flutter + Supabase — optimized for speed to market, not endless scope.",
        result: "MVP shipped in 18 days; hypothesis tested — details in the article.",
        readMore: "Read the breakdown →",
        readMoreHref: "/blog/coffee-mvp.md",
      },
    ],
  },
  testimonials: {
    title: "What clients say",
    note:
      "Public quotes with names and companies are agreed case by case. For now, see blog write-ups, fixed-price contracts, and weekly demos during the build.",
  },
  manifestTeaser: {
    title: "Manifesto",
    paragraphs: [
      "The industry says “fast” and ships in three months. Hides price behind hourly. Calls a prototype a product. Vibecraft works differently.",
    ],
    pillars: [
      {
        title: "Speed is discipline",
        text: "MVP in 2–4 weeks — not rushed. Ruthless scope for the hypothesis. Standard parts via pipeline. Business logic — by hand.",
      },
      {
        title: "Price is fixed. Period.",
        text: "The contract isn’t a draft. Scope changes only via addendum. No hidden hours.",
      },
      {
        title: "Your product — your asset",
        text: "Code, data, server — yours from day one. I don’t build lock-in.",
      },
      {
        title: "Honesty over sales",
        text: "If the task doesn’t fit budget, timeline, or sense — I’ll say so on the call. I don’t take work for the sake of work.",
      },
    ],
    fit: "I work with: businesses that need a tool, founders with a hypothesis and a deadline, people who value ownership and transparency.",
    notFit:
      "I don’t work with: “just experimenting”, endless tweaks without a spec, or MVP confused with a 50-screen enterprise build.",
    closing: "The manifesto is a filter. If it fits — welcome.",
    linkLabel: "Read full manifesto →",
  },
  blogSection: {
    title: "Blog",
    sub: "Cases, stack, methodology — longer reads than the homepage.",
    viewAll: "All articles →",
  },
  blogList: {
    title: "Vibecraft blog — cases & notes",
    description: "Cases, shipping, ownership.",
    keywords: "MVP cases, product launch, admin, Telegram bot, Supabase",
    h1: "Latest posts",
    sub: "Cases and launch notes.",
    back: "← Home",
    backToBlog: "← All articles",
  },
  contact: {
    title: "Tell me about the task — estimate within 3 hours",
    sub: "No obligation. Just contact and the gist.",
    namePh: "Name",
    contactPh: "Email or Telegram",
    messagePh: "Short brief — optional",
    submit: "Discuss project →",
    privacy: "No spam. Contact is only used to reply.",
    fastTg: "Need it faster? Message on Telegram →",
  },
  footer: {
    tagline: "VIBECRAFT",
    taglineSub: "turnkey MVP development",
    motto: "Your product — your asset. Result > poetry.",
    navCol: "Navigate",
    contactsCol: "Contact",
    rights: "All rights reserved.",
    email: "hello@vibecraft.su",
    tgDirect: "Telegram",
    tgChannel: "TG channel",
  },
};

export function getLandingMessages(lang: Lang): LandingMessages {
  return lang === "ru" ? ru : en;
}
