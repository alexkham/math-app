/**
 * Minimal in-memory rate limiter for API routes (single process).
 *
 *   const isAllowed = createRateLimiter({ limit: 30, windowMs: 10_000 });
 *   if (!isAllowed(clientIp(req))) return res.status(429)...
 *
 * Fixed window per key. Old keys are swept periodically so memory stays flat.
 * Reusable later for the AI assistant route (with a much lower limit).
 */

export function createRateLimiter({ limit = 30, windowMs = 10000 } = {}) {
  const hits = new Map();
  let lastSweep = Date.now();

  return function isAllowed(key) {
    const now = Date.now();

    if (now - lastSweep > windowMs * 6) {
      for (const [storedKey, entry] of hits) {
        if (now - entry.start > windowMs) hits.delete(storedKey);
      }
      lastSweep = now;
    }

    const entry = hits.get(key);
    if (!entry || now - entry.start > windowMs) {
      hits.set(key, { start: now, count: 1 });
      return true;
    }

    entry.count += 1;
    return entry.count <= limit;
  };
}

/**
 * Visitor IP behind Cloudflare / nginx. Falls back to the socket address.
 */
export function clientIp(req) {
  const cloudflare = req.headers['cf-connecting-ip'];
  if (cloudflare) return String(cloudflare).trim();

  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) return String(forwarded).split(',')[0].trim();

  return req.socket?.remoteAddress || 'unknown';
}