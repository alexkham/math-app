/**
 * POST /api/assist
 *
 * Public endpoint for the AI assistant. Forwards the conversation to the local
 * search service (127.0.0.1:3099/chat) with this site's id and streams the
 * answer back to the browser unchanged (Server-Sent Events).
 * The site id is fixed here, never taken from the browser.
 *
 * Request body (JSON):
 *   { "page": "/probability/covariance", "messages": [{ "role": "user", "content": "..." }, ...] }
 *
 * Errors before streaming are JSON: { error: 'rate_limited' | 'busy' | 'unavailable' | 'bad_request' | 'forbidden' }
 * Stream events (from the service): sources, delta, done, error. See search-service lib/chat.mjs.
 */

import { createRateLimiter, clientIp } from '@/app/lib/rateLimit';

const SERVICE_URL = process.env.SEARCH_SERVICE_URL || 'http://127.0.0.1:3099';
const SITE_ID = process.env.SEARCH_SITE_ID || 'math-app';
const CONNECT_TIMEOUT_MS = 15000;
const MAX_MESSAGES = 12;
const MAX_MESSAGE_CHARS = 2000;
const MAX_PAGE_CHARS = 300;

const WARN_INTERVAL_MS = 60000;

// Per visitor: a short burst limit and an hourly limit.
const allowedPerMinute = createRateLimiter({ limit: 6, windowMs: 60000 });
const allowedPerHour = createRateLimiter({ limit: 40, windowMs: 3600000 });
let lastWarnAt = 0;

export const config = {
  api: {
    bodyParser: { sizeLimit: '32kb' },
    responseLimit: false,
  },
};

function warn(message) {
  const now = Date.now();
  if (now - lastWarnAt < WARN_INTERVAL_MS) return;
  lastWarnAt = now;
  console.warn(`[api/assist] ${message}`);
}

/** Blocks other websites from using the endpoint from their pages. */
function isSameOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true;
  try {
    return new URL(origin).host === req.headers.host;
  } catch {
    return false;
  }
}

function cleanMessages(messages) {
  if (!Array.isArray(messages)) return null;
  const cleaned = messages
    .slice(-MAX_MESSAGES)
    .filter((message) => message && (message.role === 'user' || message.role === 'assistant'))
    .map((message) => ({ role: message.role, content: String(message.content ?? '').slice(0, MAX_MESSAGE_CHARS) }))
    .filter((message) => message.content.trim());
  if (!cleaned.length || cleaned[cleaned.length - 1].role !== 'user') return null;
  return cleaned;
}

function cleanPage(page) {
  const value = String(page ?? '').slice(0, MAX_PAGE_CHARS);
  return value.startsWith('/') ? value : '';
}

function errorStatus(upstreamStatus, upstreamError) {
  if (upstreamError === 'busy') return { status: 503, error: 'busy' };
  if (upstreamStatus === 400 || upstreamStatus === 413) return { status: 400, error: 'bad_request' };
  return { status: 503, error: 'unavailable' };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isSameOrigin(req)) return res.status(403).json({ error: 'forbidden' });

  const ip = clientIp(req);
  if (!allowedPerMinute(ip) || !allowedPerHour(ip)) {
    return res.status(429).json({ error: 'rate_limited' });
  }

  const messages = cleanMessages(req.body?.messages);
  if (!messages) return res.status(400).json({ error: 'bad_request' });

  const controller = new AbortController();
  const connectTimer = setTimeout(() => controller.abort(), CONNECT_TIMEOUT_MS);
  res.on('close', () => controller.abort());

  let upstream;
  try {
    upstream = await fetch(`${SERVICE_URL}/chat`, {
      method: 'POST',
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ site: SITE_ID, page: cleanPage(req.body?.page), messages }),
    });
  } catch (err) {
    clearTimeout(connectTimer);
    if (controller.signal.aborted && res.writableEnded) return undefined;
    warn(`search service unreachable: ${err.message}`);
    return res.status(503).json({ error: 'unavailable' });
  }
  clearTimeout(connectTimer);

  if (!upstream.ok) {
    let upstreamError = '';
    try {
      upstreamError = (await upstream.json())?.error || '';
    } catch {
      upstreamError = '';
    }
    if (upstreamError !== 'busy') warn(`search service answered ${upstream.status} ${upstreamError}`);
    const { status, error } = errorStatus(upstream.status, upstreamError);
    return res.status(status).json({ error });
  }

  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    // no-transform also stops Next's gzip from buffering the stream
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    'X-Accel-Buffering': 'no',
  });

  const reader = upstream.body.getReader();
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      if (res.writableEnded || res.destroyed) break;
      res.write(value);
    }
  } catch (err) {
    if (!controller.signal.aborted) warn(`stream interrupted: ${err.message}`);
  } finally {
    reader.cancel().catch(() => {});
    if (!res.writableEnded) res.end();
  }
  return undefined;
}
