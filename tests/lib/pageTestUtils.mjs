/**
 * Общие функции для node-тестов в tests/*.mjs
 */

import fs from "fs";
import path from "path";

export const DIST_DIR = path.resolve("dist");

export function readDistFile(relativePath) {
  return fs.readFileSync(path.join(DIST_DIR, relativePath), "utf-8");
}

/** Контент внутри `<head>...</head>` (без обёртки). При отсутствии — пустая строка. */
export function extractHead(html) {
  const m = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i);
  return m ? m[1] : "";
}

export function headHasRobotsNoindex(headInnerHtml) {
  const metaTags = headInnerHtml.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of metaTags) {
    if (!/\bname\s*=\s*["']robots["']/i.test(tag)) continue;
    if (/\bcontent\s*=\s*["'][^"']*noindex/i.test(tag)) return true;
  }
  return false;
}

export function extractJsonLd(html) {
  const results = [];
  const re = /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      results.push(JSON.parse(m[1]));
    } catch {
      results.push(null);
    }
  }
  return results;
}
