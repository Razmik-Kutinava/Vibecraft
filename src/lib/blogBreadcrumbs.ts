import type { Lang } from "@/i18n/landing";
import type { LandingMessages } from "@/i18n/landing";

/** Строки для `breadcrumbList()` на маршрутах блога (пути от корня сайта). */
export function jsonLdBlogBreadcrumbTrail(
  lang: Lang,
  m: LandingMessages,
  post?: { slug: string; title: string },
) {
  const items = [
    { name: m.crumbs.home, path: `/${lang}/` },
    { name: m.nav.blog, path: `/${lang}/blog` },
  ];
  if (post) {
    items.push({ name: post.title, path: `/${lang}/blog/${post.slug}` });
  }
  return items;
}
