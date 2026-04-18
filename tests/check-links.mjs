/**
 * Тест 3: Внутренние ссылки
 * Проверяет что все href внутри сайта ведут на реально существующие страницы в dist/
 */

import fs from "fs";
import path from "path";

const dist = path.resolve("dist");

function getAllHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllHtmlFiles(full));
    else if (entry.name.endsWith(".html")) results.push(full);
  }
  return results;
}

function extractInternalLinks(html) {
  const links = [];
  const re = /href="(\/[^"#?]*)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    links.push(m[1]);
  }
  return [...new Set(links)];
}

function resolveToFile(href) {
  // /ru/ → dist/ru/index.html
  const withoutTrailing = href.replace(/\/$/, "");
  const candidates = [
    path.join(dist, href, "index.html"),
    path.join(dist, withoutTrailing + ".html"),
    path.join(dist, withoutTrailing, "index.html"),
  ];
  return candidates.find((c) => fs.existsSync(c)) || null;
}

console.log("=== INTERNAL LINKS TEST ===\n");

const IGNORE_PREFIXES = ["/favicon", "/_astro", "/assets"];

let passed = 0;
let failed = 0;
const broken = [];

const htmlFiles = getAllHtmlFiles(dist);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf-8");
  const links = extractInternalLinks(html);
  const relative = path.relative(dist, file);

  for (const href of links) {
    if (IGNORE_PREFIXES.some((p) => href.startsWith(p))) continue;
    const resolved = resolveToFile(href);
    if (resolved) {
      passed++;
    } else {
      failed++;
      broken.push({ from: relative, href });
    }
  }
}

if (broken.length === 0) {
  console.log("  ✓  Все внутренние ссылки ведут на существующие страницы");
} else {
  console.log("  Сломанные ссылки:\n");
  for (const { from, href } of broken) {
    console.log(`  ✗  ${from} → ${href}`);
  }
}

console.log(`\nResult: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
