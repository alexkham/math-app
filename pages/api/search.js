/**
 * GET /api/search?q=<text>&limit=8&kind=tool,definition
 *
 * Public search endpoint for the site's search bar.
 * Forwards to the local search service (127.0.0.1:3099) with this site's id;
 * the site id is fixed here, never taken from the browser.
 * If the service is unreachable or slow, answers from the sitemap instead,
 * so search keeps working (and works in local dev without the service).
 *
 * Response: { query, source: 'semantic' | 'fallback' | 'none', results: [...] }
 * Each result: { url, title, pageTitle, kind, topic, snippet }
 */

import { fallbackSearch } from '@/app/lib/searchFallback';
import { createRateLimiter, clientIp } from '@/app/lib/rateLimit';

const SERVICE_URL = process.env.SEARCH_SERVICE_URL || 'http://127.0.0.1:3099';
const SITE_ID = process.env.SEARCH_SITE_ID || 'math-app';
const TIMEOUT_MS = 2500;
const MAX_QUERY_LENGTH = 200;
const DEFAULT_LIMIT = 8;
const MAX_LIMIT = 20;
const ALLOWED_KINDS = new Set(['page', 'section', 'definition', 'tool']);

const WARN_INTERVAL_MS = 60000;

const isAllowed = createRateLimiter({ limit: 30, windowMs: 10000 });
let lastWarnAt = 0;

function warnFallback(message) {
  const now = Date.now();
  if (now - lastWarnAt < WARN_INTERVAL_MS) return;
  lastWarnAt = now;
  console.warn(`[api/search] search service unavailable, using sitemap fallback: ${message}`);
}

function parseLimit(value) {
  const number = Number.parseInt(value, 10);
  if (!Number.isFinite(number) || number < 1) return DEFAULT_LIMIT;
  return Math.min(number, MAX_LIMIT);
}

function parseKinds(value) {
  if (!value) return '';
  return String(value)
    .split(',')
    .map((kind) => kind.trim())
    .filter((kind) => ALLOWED_KINDS.has(kind))
    .join(',');
}

async function querySearchService(query, limit, kinds) {
  const params = new URLSearchParams({ site: SITE_ID, q: query, limit: String(limit) });
  if (kinds) params.set('kind', kinds);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${SERVICE_URL}/search?${params}`, { signal: controller.signal });
    if (!response.ok) throw new Error(`search service answered ${response.status}`);
    const data = await response.json();
    return (data.results || []).map(({ url, title, pageTitle, kind, topic, snippet }) => ({
      url,
      title,
      pageTitle,
      kind,
      topic,
      snippet,
    }));
  } finally {
    clearTimeout(timer);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAllowed(clientIp(req))) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  const query = String(req.query.q || '').replace(/\s+/g, ' ').trim().slice(0, MAX_QUERY_LENGTH);
  const limit = parseLimit(req.query.limit);
  const kinds = parseKinds(req.query.kind);

  if (query.length < 2) {
    return res.status(200).json({ query, source: 'none', results: [] });
  }

  try {
    const results = await querySearchService(query, limit, kinds);
    res.setHeader('Cache-Control', 'public, max-age=60');
    return res.status(200).json({ query, source: 'semantic', results });
  } catch (err) {
    warnFallback(err.message);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ query, source: 'fallback', results: fallbackSearch(query, limit) });
  }
}