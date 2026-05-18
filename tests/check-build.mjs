/**
 * Тест 1: Структура билда
 * Проверяет что все нужные страницы и файлы реально есть в dist/
 */

import fs from "fs";
import path from "path";

import { DIST_DIR } from "./lib/pageTestUtils.mjs";

const REQUIRED_FILES = [
  "index.html",
  "ru/index.html",
  "en/index.html",
  "ru/blog/index.html",
  "en/blog/index.html",
  "404.html",
  "sitemap-index.xml",
  "robots.txt",
];

let passed = 0;
let failed = 0;

console.log("=== BUILD STRUCTURE TEST ===\n");

for (const file of REQUIRED_FILES) {
  const full = path.join(DIST_DIR, file);
  const exists = fs.existsSync(full);
  if (exists) {
    console.log(`  ✓  ${file}`);
    passed++;
  } else {
    console.log(`  ✗  MISSING: ${file}`);
    failed++;
  }
}

const blogSlugs = [
  "ru/blog/coffee-os",
  "en/blog/coffee-os",
  "ru/blog/why-no-ads",
  "en/blog/why-no-ads",
  "ru/blog/slow-site-loses-clients",
  "en/blog/slow-site-loses-clients",
];
for (const slug of blogSlugs) {
  const full = path.join(DIST_DIR, slug, "index.html");
  const exists = fs.existsSync(full);
  if (exists) {
    console.log(`  ✓  ${slug}/index.html`);
    passed++;
  } else {
    console.log(`  ✗  MISSING: ${slug}/index.html`);
    failed++;
  }
}

console.log("\n--- JS Chunk sizes ---");
const astroDir = path.join(DIST_DIR, "_astro");
if (fs.existsSync(astroDir)) {
  const files = fs.readdirSync(astroDir).filter((f) => f.endsWith(".js"));
  for (const f of files) {
    const size = fs.statSync(path.join(astroDir, f)).size;
    const kb = (size / 1024).toFixed(1);
    const warn = size > 500 * 1024 ? " ⚠ >500KB" : "";
    console.log(`  ${f}: ${kb} KB${warn}`);
  }
}

console.log(`\nResult: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
