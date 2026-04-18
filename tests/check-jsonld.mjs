/**
 * Тест 5: JSON-LD схемы
 * Парсит и валидирует JSON-LD на страницах
 */

import fs from "fs";
import path from "path";

const dist = path.resolve("dist");

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

function extractJsonLd(html) {
  const results = [];
  const re = /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      results.push(JSON.parse(m[1]));
    } catch (e) {
      results.push(null);
    }
  }
  return results;
}

console.log("=== JSON-LD SCHEMA TEST ===\n");

// Лендинг RU
{
  const html = fs.readFileSync(path.join(dist, "ru/index.html"), "utf-8");
  const schemas = extractJsonLd(html);
  console.log(`  [ru/index.html] — найдено JSON-LD блоков: ${schemas.length}`);

  const valid = schemas.filter(Boolean);
  check("JSON-LD парсится без ошибок", valid.length === schemas.length);

  const graphs = valid.filter((s) => s["@graph"]);
  check("есть @graph", graphs.length > 0);

  if (graphs.length > 0) {
    const nodes = graphs[0]["@graph"];
    const types = nodes.map((n) => n["@type"]);
    check("Organization в @graph", types.includes("Organization"));
    check("ProfessionalService в @graph", types.includes("ProfessionalService"));
    check("WebSite в @graph", types.includes("WebSite"));

    const org = nodes.find((n) => n["@type"] === "Organization");
    if (org) {
      check("Organization.name задан", !!org.name);
      check("Organization.url задан", !!org.url);
      check("Organization.sameAs — массив", Array.isArray(org.sameAs));
      check("Telegram в sameAs", (org.sameAs || []).some((u) => u.includes("t.me")));
    }
  }
}

// Блог-пост
{
  const blogPost = path.join(dist, "ru/blog/coffee-os/index.html");
  if (fs.existsSync(blogPost)) {
    const html = fs.readFileSync(blogPost, "utf-8");
    const schemas = extractJsonLd(html);
    console.log(`\n  [ru/blog/coffee-os] — найдено JSON-LD блоков: ${schemas.length}`);

    const valid = schemas.filter(Boolean);
    check("JSON-LD парсится без ошибок", valid.length === schemas.length);

    const allNodes = valid.flatMap((s) => (s["@graph"] ? s["@graph"] : [s]));
    const types = allNodes.map((n) => n["@type"]);
    check("BlogPosting есть", types.includes("BlogPosting"));
    check("BreadcrumbList есть", types.includes("BreadcrumbList"));

    const post = allNodes.find((n) => n["@type"] === "BlogPosting");
    if (post) {
      check("headline задан", !!post.headline);
      check("datePublished задан", !!post.datePublished);
      check("author задан", !!post.author);
    }
  }
}

console.log(`\nResult: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
