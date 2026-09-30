/**
 * Fallback search used by /api/search when the search service is
 * unreachable (service down, or local dev where it doesn't exist).
 *
 * Same idea as the old SearchBar2 matching — every query word must appear
 * in the URL path — but server-side and in the same result shape as the
 * semantic results, so the search bar needs no special case.
 * The sitemap is re-read only when public/sitemap.xml changes.
 */

import fs from 'fs';
import path from 'path';

let sitemapCache = { mtimeMs: 0, entries: [] };

function humanize(segment) {
  const words = decodeURIComponent(segment || '').replace(/[-_]+/g, ' ').trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function loadEntries() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const stat = fs.statSync(sitemapPath);
  if (stat.mtimeMs === sitemapCache.mtimeMs) return sitemapCache.entries;

  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const locPattern = /<loc>(.*?)<\/loc>/g;
  const entries = [];
  let match;

  while ((match = locPattern.exec(xml)) !== null) {
    let pathname;
    try {
      pathname = new URL(match[1].trim()).pathname;
    } catch {
      continue;
    }
    if (pathname === '/') continue;

    const segments = pathname.split('/').filter(Boolean);
    entries.push({
      url: pathname,
      title: humanize(segments[segments.length - 1]),
      topic: segments[0],
      haystack: pathname.toLowerCase().replace(/[-/_]+/g, ' '),
    });
  }

  sitemapCache = { mtimeMs: stat.mtimeMs, entries };
  return entries;
}

export function fallbackSearch(query, limit = 10) {
  const terms = String(query || '').toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  try {
    return loadEntries()
      .filter((entry) => terms.every((term) => entry.haystack.includes(term)))
      .sort((a, b) => a.url.length - b.url.length)
      .slice(0, limit)
      .map(({ url, title, topic }) => ({
        url,
        title,
        pageTitle: title,
        kind: 'page',
        topic,
        snippet: '',
      }));
  } catch {
    return [];
  }
}