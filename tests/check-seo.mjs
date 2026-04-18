/**
 * Тест 2: SEO и мета-теги
 * Проверяет canonical, hreflang, og:*, JSON-LD, robots в каждой странице
 */

import fs from "fs";
import path from "path";

const dist = path.resolve("dist");

const PAGES = [
  { file: "ru/index.html", lang: "ru", shouldHaveHreflang: true },
  { file: "en/index.html", lang: "en", shouldHaveHreflang: true },
  { file: "ru/blog/index.html", lang: "ru", shouldHaveHreflang: true },
  { file: "en/blog/index.html", lang: "en", shouldHaveHreflang: true },
  { file: "ru/blog/coffee-os/index.html", lang: "ru", shouldHaveHreflang: false },
  { file: "404.html", lang: null, shouldHaveHreflang: false },
];

let passed = 0;
let failed = 0;

function check(label, condition) {
  if (condition) {
    console.log(`    ✓  ${label}`);
    passed++;
  } else {
    console.log(`    ✗  ${label}`);
    failed++;
  }
}

console.log("=== SEO META TAGS TEST ===\n");

for (const page of PAGES) {
  const full = path.join(dist, page.file);
  if (!fs.existsSync(full)) {
    console.log(`  SKIP (file missing): ${page.file}`);
    continue;
  }

  const html = fs.readFileSync(full, "utf-8");
  console.log(`\n  [${page.file}]`);

  check("<title> не пустой", /<title>[^<]{5,}<\/title>/.test(html));
  check("<meta name=description> есть", /meta name="description"/.test(html));
  check("canonical есть", /rel="canonical"/.test(html));
  check("og:title есть", /property="og:title"/.test(html));
  check("og:description есть", /property="og:description"/.test(html));
  check("og:image есть", /property="og:image"/.test(html));
  check("og:type есть", /property="og:type"/.test(html));
  check("twitter:card есть", /name="twitter:card"/.test(html));

  if (page.shouldHaveHreflang) {
    check("hreflang ru есть", /hreflang="ru"/.test(html));
    check("hreflang en есть", /hreflang="en"/.test(html));
    check("hreflang x-default есть", /hreflang="x-default"/.test(html));
  }

  check("JSON-LD есть", /application\/ld\+json/.test(html));
  check("@type в JSON-LD есть", /"@type"/.test(html));

  if (page.file === "404.html") {
    check("robots noindex на 404", /noindex/.test(html));
  } else {
    check("нет noindex на обычной странице", !/noindex/.test(html));
  }

  if (page.lang) {
    check(`html lang="${page.lang}"`, new RegExp(`<html[^>]*lang="${page.lang}"`).test(html));
  }
}

console.log(`\nResult: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
