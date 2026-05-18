/**
 * Тест 4: HTML структура и доступность
 * Проверяет alt-тексты, заголовки h1, ARIA, форму
 */

import { readDistFile } from "./lib/pageTestUtils.mjs";

let passed = 0;
let failed = 0;

function check(label, condition, detail = "") {
  if (condition) {
    console.log(`    ✓  ${label}`);
    passed++;
  } else {
    console.log(`    ✗  ${label}${detail ? " — " + detail : ""}`);
    failed++;
  }
}

const PAGES = [
  "ru/index.html",
  "en/index.html",
  "ru/blog/index.html",
  "en/blog/index.html",
];

console.log("=== HTML STRUCTURE & A11Y TEST ===\n");

for (const page of PAGES) {
  let html;
  try {
    html = readDistFile(page);
  } catch {
    console.log(`  SKIP (missing): ${page}`);
    continue;
  }

  console.log(`\n  [${page}]`);

  const h1matches = html.match(/<h1[^>]*>/g) || [];
  check("ровно один <h1>", h1matches.length === 1, `найдено: ${h1matches.length}`);

  const imgTags = html.match(/<img[^>]+>/g) || [];
  const imgsWithoutAlt = imgTags.filter((t) => !/alt=/.test(t));
  check("все <img> имеют alt", imgsWithoutAlt.length === 0, `без alt: ${imgsWithoutAlt.length}`);

  check("<html lang> задан", /<html[^>]+lang=/.test(html));
  check("viewport meta есть", /name="viewport"/.test(html));
  check("charset задан", /charset=/.test(html));

  const externalLinks = html.match(/href="https?:[^"]*"[^>]*>/g) || [];
  const blankWithoutNoopener = externalLinks.filter(
    (l) => /target="_blank"/.test(l) && !/noopener/.test(l),
  );
  check(
    "target=_blank без noopener отсутствуют",
    blankWithoutNoopener.length === 0,
    `найдено небезопасных: ${blankWithoutNoopener.length}`,
  );

  if (page.includes("index") && !page.includes("blog")) {
    check("логотип VIBE/CRAFT присутствует", /logo-wordmark/.test(html));
    check('нет старого <img class="logo-img"', !/logo-img/.test(html));
  }
}

console.log(`\n  [Контакт — ru/index.html]`);
const landing = readDistFile("ru/index.html");
check("секция #contact есть", /id="contact"/.test(landing));
check("ссылка на Telegram есть", /t\.me/.test(landing));
check("ссылка на Google Form есть", /forms\.gle/.test(landing));
check(
  "кнопки контакта с noopener",
  /forms\.gle[^"]*"[^>]*noopener/.test(landing) || /rel="noopener noreferrer"/.test(landing),
);

console.log(`\nResult: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
