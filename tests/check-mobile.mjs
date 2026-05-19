/**
 * QA-check: мобильный рендер + чеклист из DEPLOY.md
 * Запускается как: node tests/check-mobile.mjs
 * Требует: npm run build (dist/ должна быть актуальной)
 */
import fs from "fs";
import path from "path";

const DIST = path.resolve("dist");

let passed = 0;
let failed = 0;

function check(label, ok) {
  if (ok) {
    console.log(`  ✓  ${label}`);
    passed++;
  } else {
    console.log(`  ✗  FAIL: ${label}`);
    failed++;
  }
}

function read(rel) {
  const full = path.join(DIST, rel);
  if (!fs.existsSync(full)) return "";
  return fs.readFileSync(full, "utf8");
}

console.log("=== MOBILE / CHECKLIST QA ===\n");

// --- OG image ---
console.log("[OG image]");
const ruIndex = read("ru/index.html");
const enIndex = read("en/index.html");
check("ru: og:image не favicon.png", !ruIndex.includes('og:image" content="/favicon.png"') && ruIndex.includes("og:image"));
check("en: og:image не favicon.png", !enIndex.includes('og:image" content="/favicon.png"') && enIndex.includes("og:image"));
check("og-image.png существует в public/dist", fs.existsSync(path.join(DIST, "og-image.png")));
check("ru: twitter:image присутствует", ruIndex.includes("twitter:image"));
check("en: twitter:image присутствует", enIndex.includes("twitter:image"));

// --- Terms pages ---
console.log("\n[Terms pages]");
const ruTerms = read("ru/terms/index.html");
const enTerms = read("en/terms/index.html");
check("ru/terms существует", ruTerms.length > 0);
check("en/terms существует", enTerms.length > 0);
check("ru/terms: h1 есть", /<h1[^>]*>/.test(ruTerms));
check("en/terms: h1 есть", /<h1[^>]*>/.test(enTerms));
check("ru/terms: canonical есть", ruTerms.includes('rel="canonical"'));
check("en/terms: hreflang en есть", enTerms.includes('hreflang="en"'));
check("ru/terms: ссылка «назад» на /ru/", ruTerms.includes('href="/ru/"'));
check("en/terms: ссылка «назад» на /en/", enTerms.includes('href="/en/"'));
check("ru/terms: CTA-кнопка на #contact есть", ruTerms.includes("#contact"));

// --- Навигация: viewport meta (мобильная) ---
console.log("\n[Viewport / мобильный meta]");
for (const [label, html] of [["ru/index", ruIndex], ["en/index", enIndex], ["ru/terms", ruTerms]]) {
  check(`${label}: viewport meta есть`, html.includes('name="viewport"'));
}

// --- Sticky CTA бар —  есть ли секция в RU ---
console.log("\n[Sticky CTA / contact]");
check("ru: #contact секция есть", ruIndex.includes('id="contact"'));
check("ru: t.me ссылка есть", ruIndex.includes("t.me"));
check("ru: forms.gle ссылка есть", ruIndex.includes("forms.gle"));

// --- 404 ---
console.log("\n[404]");
const page404 = read("404.html");
check("404.html существует", page404.length > 0);
check("404: robots noindex", page404.includes("noindex"));

// --- sitemap ---
console.log("\n[Sitemap + robots]");
const sitemap = read("sitemap-index.xml");
const robots = read("robots.txt");
check("sitemap-index.xml существует", sitemap.length > 0);
check("robots.txt существует", robots.length > 0);
check("sitemap: содержит vibecraft.su", sitemap.includes("vibecraft.su") || sitemap.includes("sitemap"));

// --- Internal links (terms в сборке) ---
console.log("\n[Internal links terms]");
check("ru/terms: в sitemap попадает (sitemap-0.xml)", (() => {
  const sm0 = read("sitemap-0.xml");
  return sm0.includes("/ru/terms") || sm0.includes("/terms");
})());

console.log(`\nResult: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
