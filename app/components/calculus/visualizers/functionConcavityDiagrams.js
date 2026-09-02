// Frozen-state SVGs for the Concavity / Inflection Points tool (Line 1 anchor mesh).
// Ports FunctionConcavity.jsx verbatim: same model (f = x³/3 − x, f′ = x² − 1,
// f″ = 2x), same window (X −2.6..2.6, Y −1.8..1.8), the same 900x540 canvas
// aspect the tool fits itself to, the same THEMES palette, and the same draw
// order — region tint, grid, concavity gap, curve, tangent, drop line, c marker,
// point P, f″(c) badge. Each state is the tool at the end of its seven-step
// animation (every reveal = 1), which is what the reader sees while the panel
// text for that state is showing. The inflection state keeps the tool's
// two-colour gap split at c: red left (concave down), blue right (concave up).

const W = 900, H = 540;
const X_MIN = -2.6, X_MAX = 2.6;
const Y_MIN = -1.8, Y_MAX = 1.8;

const f = (x) => (x * x * x) / 3 - x;
const fp = (x) => x * x - 1;
const fpp = (x) => 2 * x;
const fmt = (n, d = 2) => (Math.abs(n) < 1e-9 ? '0.00' : n.toFixed(d));

const xToPx = (x) => ((x - X_MIN) / (X_MAX - X_MIN)) * W;
const yToPx = (y) => H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * H;
const r2 = (n) => Math.round(n * 100) / 100;

const THEMES = {
  up: { main: '#3b82f6', deep: '#1e3a8a', soft: '#dfebfe', mid: '#dbeafe', rgb: '59,130,246' },
  down: { main: '#b91c1c', deep: '#7f1d1d', soft: '#fee2e2', mid: '#fecaca', rgb: '185,28,28' },
  infl: { main: '#d97706', deep: '#92400e', soft: '#fef3c7', mid: '#fde68a', rgb: '217,119,6' },
};

const SCENARIOS = {
  up: { c: 1.3, regionA: 0.3, regionB: 2.3 },
  down: { c: -1.3, regionA: -2.3, regionB: -0.3 },
  infl: { c: 0.0, regionA: -1.0, regionB: 1.0 },
};

const SANS = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';

/* ---------- grid + axes (drawGrid) ---------- */
function grid() {
  let s = '';
  const minor = [];
  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) {
    for (let k = 1; k < 5; k++) {
      const xv = x + k * 0.2;
      if (xv < X_MIN || xv > X_MAX) continue;
      minor.push(`M${r2(xToPx(xv))} 0V${H}`);
    }
  }
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y++) {
    for (let k = 1; k < 5; k++) {
      const yv = y + k * 0.2;
      if (yv < Y_MIN || yv > Y_MAX) continue;
      minor.push(`M0 ${r2(yToPx(yv))}H${W}`);
    }
  }
  s += `<path d="${minor.join('')}" stroke="#eef2f7" stroke-width="1" fill="none"/>`;

  const major = [];
  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) major.push(`M${r2(xToPx(x))} 0V${H}`);
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y++) major.push(`M0 ${r2(yToPx(y))}H${W}`);
  s += `<path d="${major.join('')}" stroke="#e6eaf2" stroke-width="1" fill="none"/>`;

  const y0 = yToPx(0), x0 = xToPx(0);
  s += `<path d="M0 ${r2(y0)}H${W}M${r2(x0)} 0V${H}" stroke="#94a3b8" stroke-width="1.25" fill="none"/>`;

  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) {
    if (x === 0) continue;
    s += `<text x="${r2(xToPx(x))}" y="${r2(y0 + 4)}" text-anchor="middle" dominant-baseline="hanging" ` +
      `fill="#64748b" font-size="11" font-family="${SANS}">${x}</text>`;
  }
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y++) {
    if (y === 0) continue;
    s += `<text x="${r2(x0 - 5)}" y="${r2(yToPx(y))}" text-anchor="end" dominant-baseline="central" ` +
      `fill="#64748b" font-size="11" font-family="${SANS}">${y}</text>`;
  }
  s += `<text x="${r2(x0 - 5)}" y="${r2(y0 + 4)}" text-anchor="end" dominant-baseline="hanging" ` +
    `fill="#64748b" font-size="11" font-family="${SANS}">0</text>`;
  s += `<text x="${W - 6}" y="${r2(y0 + 4)}" text-anchor="end" dominant-baseline="hanging" ` +
    `fill="#475569" font-size="12" font-style="italic" font-family="Georgia,serif">x</text>`;
  s += `<text x="${r2(x0 + 6)}" y="4" text-anchor="start" dominant-baseline="hanging" ` +
    `fill="#475569" font-size="12" font-style="italic" font-family="Georgia,serif">y</text>`;
  return s;
}

function curve() {
  const N = 600;
  let d = '';
  for (let i = 0; i <= N; i++) {
    const x = X_MIN + (i / N) * (X_MAX - X_MIN);
    d += (i === 0 ? 'M' : 'L') + r2(xToPx(x)) + ' ' + r2(yToPx(f(x))) + ' ';
  }
  return `<path d="${d.trim()}" fill="none" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/>`;
}

function region(cfg, th) {
  const xa = xToPx(cfg.regionA), xb = xToPx(cfg.regionB);
  return `<g opacity="0.4">` +
    `<rect x="${r2(Math.min(xa, xb))}" y="0" width="${r2(Math.abs(xb - xa))}" height="${H}" fill="${th.soft}"/>` +
    `<path d="M${r2(xa)} 0V${H}M${r2(xb)} 0V${H}" stroke="${th.mid}" stroke-width="1" ` +
    `stroke-dasharray="2 3" fill="none"/></g>`;
}

/* ---------- concavity gap: area between curve and tangent (fillGapSegment) ---------- */
function gapSegment(c, xStart, xEnd, color) {
  if (xEnd - xStart < 1e-6) return '';
  const m = fp(c), fc = f(c);
  const tangentY = (x) => m * (x - c) + fc;
  const N = 60;
  let d = '';
  for (let i = 0; i <= N; i++) {
    const x = xStart + (i / N) * (xEnd - xStart);
    d += (i === 0 ? 'M' : 'L') + r2(xToPx(x)) + ' ' + r2(yToPx(f(x))) + ' ';
  }
  for (let i = N; i >= 0; i--) {
    const x = xStart + (i / N) * (xEnd - xStart);
    d += 'L' + r2(xToPx(x)) + ' ' + r2(yToPx(tangentY(x))) + ' ';
  }
  return `<path d="${d.trim()}Z" fill="${color}" fill-opacity="0.32" stroke="none"/>`;
}

function gap(key, c, th) {
  const win = 0.85;
  const xStart = Math.max(X_MIN + 0.02, c - win);
  const xEnd = Math.min(X_MAX - 0.02, c + win);
  if (key === 'infl') {
    // dual colour split at c, exactly as the tool draws it
    return gapSegment(c, xStart, c, '#b91c1c') + gapSegment(c, c, xEnd, '#3b82f6');
  }
  return gapSegment(c, xStart, xEnd, th.main);
}

function tangent(c, th) {
  const m = fp(c), b = f(c) - m * c;
  const half = (X_MAX - X_MIN) * 0.6;
  const xA = c - half, xB = c + half;
  return `<path d="M${r2(xToPx(xA))} ${r2(yToPx(m * xA + b))}L${r2(xToPx(xB))} ${r2(yToPx(m * xB + b))}" ` +
    `fill="none" stroke="${th.main}" stroke-width="2.25"/>`;
}

function drop(c) {
  return `<path d="M${r2(xToPx(c))} ${r2(yToPx(0))}V${r2(yToPx(f(c)))}" stroke="#94a3b8" ` +
    `stroke-width="1.4" stroke-dasharray="4 4" fill="none"/>`;
}

function cMarker(c, th) {
  const px = xToPx(c), y0 = yToPx(0);
  return `<circle cx="${r2(px)}" cy="${r2(y0)}" r="6" fill="${th.deep}" stroke="#fff" stroke-width="2"/>` +
    `<text x="${r2(px)}" y="${r2(y0 + 14)}" text-anchor="middle" dominant-baseline="hanging" ` +
    `fill="${th.deep}" font-size="12" font-style="italic" font-family="Georgia,serif">c</text>`;
}

function pointP(c, th) {
  const px = xToPx(c), py = yToPx(f(c));
  const up = f(c) >= 0;
  return `<circle cx="${r2(px)}" cy="${r2(py)}" r="11" fill="rgba(${th.rgb},.22)"/>` +
    `<circle cx="${r2(px)}" cy="${r2(py)}" r="6" fill="${th.deep}" stroke="#fff" stroke-width="2"/>` +
    `<text x="${r2(px + 9)}" y="${r2(py + (up ? -8 : 8))}" text-anchor="start" ` +
    `dominant-baseline="${up ? 'auto' : 'hanging'}" fill="${th.deep}" font-size="12" ` +
    `font-weight="600" font-family="${SANS}">P</text>`;
}

function fppBadge(c, th) {
  const px = xToPx(c), py = yToPx(f(c));
  const text = 'f″(c) = ' + fmt(fpp(c), 2);
  const w = text.length * 6.9 + 14, h = 22;
  const x = px + 16, y = py + (f(c) >= 0 ? -50 : 30);
  return `<rect x="${r2(x)}" y="${r2(y)}" width="${r2(w)}" height="${h}" rx="4" fill="#ffffff" ` +
    `stroke="${th.main}" stroke-width="1.5"/>` +
    `<text x="${r2(x + 7)}" y="${r2(y + h / 2 + 0.5)}" dominant-baseline="central" fill="${th.deep}" ` +
    `font-size="12" font-weight="600" font-family="${SANS}">${text}</text>`;
}

// key: 'up' | 'down' | 'infl' | null (free drag, no scenario)
function freeze(key, cFree) {
  const th = THEMES[key || 'up'];
  const cfg = key ? SCENARIOS[key] : null;
  const c = cfg ? cfg.c : cFree;

  let s = '';
  if (cfg) s += region(cfg, th);
  s += grid();
  s += gap(key, c, th);
  s += curve();
  s += tangent(c, th);
  s += drop(c);
  s += cMarker(c, th);
  s += pointP(c, th);
  s += fppBadge(c, th);

  const verdict = key === 'infl'
    ? 'inflection point, second derivative 0 with a sign change'
    : `second derivative ${fmt(fpp(c), 2)}, concave ${fpp(c) > 0 ? 'up' : 'down'}`;
  return (
    `<svg viewBox="0 0 ${W} ${H}" width="520" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Cubic f(x) = x cubed over 3 minus x at c = ${fmt(c, 1)}, ${verdict}">` +
    `<rect width="${W}" height="${H}" fill="#ffffff"/>` +
    s +
    `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#cbd5e1" stroke-width="1" rx="10"/>` +
    `</svg>`
  );
}

const functionConcavityDiagrams = {
  // free drag at the tool's DEFAULT_C = −0.5: f″ = −1, still concave down
  idle: freeze(null, -0.5),
  // c = 1.3, right of the inflection: f″ = 2.6 > 0, tangent under the curve
  up: freeze('up'),
  // c = −1.3, left of the inflection: f″ = −2.6 < 0, tangent over the curve
  down: freeze('down'),
  // c = 0: f″ = 0 with a sign flip, tangent crosses, gap changes colour
  infl: freeze('infl'),
};

export default functionConcavityDiagrams;
