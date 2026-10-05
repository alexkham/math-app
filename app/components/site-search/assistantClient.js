/**
 * assistantClient.js: talks to POST /api/assist and parses its Server-Sent Events. No React.
 *
 *   streamAssist({ page, messages, signal, onSources, onDelta })
 *     → resolves { outcome: 'done' | 'error' | 'interrupted', finishReason, model, message }
 *     → rejects with AssistError (kind 'limited' | 'busy' | 'unavailable' | 'badRequest')
 *       when the request fails before streaming, or with the AbortError when `signal` aborts.
 *   parseFrames(buffer) → { events: [{ event, data }], rest }
 *       pure, exported so it can be tested with chunks cut in the middle of a frame.
 *   trackAssistant(name, params)
 *       GA4 event through window.gtag when it exists. Never pass answer text.
 *
 * Wire format (pages/api/assist.js, forwarded unchanged from the search service):
 *   frames separated by a blank line, each with one `event:` line and one `data:` line of JSON.
 *   Events: sources (once, first), delta ({ t }) many times, then done ({ model, finishReason })
 *   or error ({ message }). A stream that ends with neither is reported as 'interrupted'.
 */

import { ASSIST } from './searchConfig';

export class AssistError extends Error {
  constructor(kind, status) {
    super(`assist ${kind}`);
    this.name = 'AssistError';
    this.kind = kind;
    this.status = status;
  }
}

const ERROR_KINDS = {
  rate_limited: 'limited',
  busy: 'busy',
  unavailable: 'unavailable',
  bad_request: 'badRequest',
};

function kindFor(status, body) {
  const fromBody = body && ERROR_KINDS[body.error];
  if (fromBody) return fromBody;
  if (status === 429) return 'limited';
  if (status === 400) return 'badRequest';
  return 'unavailable';
}

/** Split complete frames off the front of `buffer`. Incomplete tail comes back as `rest`. */
export function parseFrames(buffer) {
  const events = [];
  let rest = String(buffer || '').replace(/\r\n/g, '\n');
  for (;;) {
    const at = rest.indexOf('\n\n');
    if (at === -1) break;
    const frame = rest.slice(0, at);
    rest = rest.slice(at + 2);
    let event = 'message';
    const dataLines = [];
    frame.split('\n').forEach((line) => {
      if (!line || line[0] === ':') return;
      const colon = line.indexOf(':');
      const field = colon === -1 ? line : line.slice(0, colon);
      let value = colon === -1 ? '' : line.slice(colon + 1);
      if (value[0] === ' ') value = value.slice(1);
      if (field === 'event') event = value;
      else if (field === 'data') dataLines.push(value);
    });
    if (!dataLines.length) continue;
    try {
      events.push({ event, data: JSON.parse(dataLines.join('\n')) });
    } catch {
      /* malformed frame: skip it */
    }
  }
  return { events, rest };
}

export async function streamAssist({ page = '', messages = [], signal, onSources, onDelta }) {
  const response = await fetch(ASSIST.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ page, messages }),
    signal,
  });

  if (!response.ok) {
    let body = null;
    try { body = await response.json(); } catch { body = null; }
    throw new AssistError(kindFor(response.status, body), response.status);
  }
  if (!response.body || typeof response.body.getReader !== 'function') {
    throw new AssistError('unavailable', response.status);
  }

  const handle = ({ event, data }) => {
    if (event === 'sources') {
      if (typeof onSources === 'function') onSources(Array.isArray(data) ? data : []);
      return null;
    }
    if (event === 'delta') {
      if (data && typeof data.t === 'string' && typeof onDelta === 'function') onDelta(data.t);
      return null;
    }
    if (event === 'done') {
      return {
        outcome: 'done',
        finishReason: (data && data.finishReason) || 'stop',
        model: (data && data.model) || '',
        message: '',
      };
    }
    if (event === 'error') {
      return { outcome: 'error', finishReason: '', model: '', message: (data && data.message) || '' };
    }
    return null;
  };

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const parsed = parseFrames(buffer);
      buffer = parsed.rest;
      for (let i = 0; i < parsed.events.length; i += 1) {
        const result = handle(parsed.events[i]);
        if (result) return result;
      }
    }
    buffer += decoder.decode();
    const tail = parseFrames(`${buffer}\n\n`);
    for (let i = 0; i < tail.events.length; i += 1) {
      const result = handle(tail.events[i]);
      if (result) return result;
    }
    return { outcome: 'interrupted', finishReason: '', model: '', message: '' };
  } finally {
    reader.cancel().catch(() => {});
  }
}

/** GA4 event, only when gtag is loaded. Analytics must never break the UI. */
export function trackAssistant(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', name, params);
  } catch {
    /* ignore */
  }
}
