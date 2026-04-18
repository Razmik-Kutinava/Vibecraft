/**
 * Тест 1: Структура билда
 * Проверяет что все нужные страницы и файлы реально есть в dist/
 */

import fs from "fs";
import path from "path";

const dist = path.resolve("dist");

const REQUIRED_FILES = [
  "index.html",
  "ru/index.html",
  "en/index.html",
  "ru/blog/index.html",
  "en/blog/index.html",
  "ru/manifest/index.html",
  "en/manifest/index.html",
  "404.html",
  "sitemap-index.xml",
  "robots.txt",
];

let passed = 0;
let failed = 0;

console.log("=== BUILD STRUCTURE TEST ===\n");

for (const file of REQUIRED_FILES) {
  const full = path.join(dist, file);
  const exists = fs.existsSync(full);
  if (exists) {
    console.log(`  ✓  ${file}`);
    passed++;
  } else {
    console.log(`  ✗  MISSING: ${file}`);
    failed++;
  }
}

// Проверяем blog-посты
const blogSlugs = [
  "ru/blog/coffee-os",
  "en/blog/coffee-os",
  "ru/blog/hiring-hh-ai",
  "en/blog/hiring-hh-ai",
];
for (const slug of blogSlugs) {
  const full = path.join(dist, slug, "index.html");
  const exists = fs.existsSync(full);
  if (exists) {
    console.log(`  ✓  ${slug}/index.html`);
    passed++;
  } else {
    console.log(`  ✗  MISSING: ${slug}/index.html`);
    failed++;
  }
}

// Размеры JS чанков
console.log("\n--- JS Chunk sizes ---");
const astroDir = path.join(dist, "_astro");
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
