// Frozen-state SVGs for the Tangent Line tool (Line 1 anchor mesh).
// Ports FunctionTangentLine.jsx verbatim: same model (f = x³/3 − x, f′ = x² − 1),
// same window (X −2.6..2.6, Y −1.8..1.8), the same 900x540 canvas aspect the tool
// fits itself to, the same THEMES palette, and the same draw order — region tint,
// grid, chevrons, curve, tangent, drop line, c marker, point P, slope pill.
// Each state is the tool at the END of its six-step animation (every reveal = 1),
// which is what the reader sees when the panel text for that state is showing.

const W = 900, H = 540;
const X_MIN = -2.6, X_MAX = 2.6;
const Y_MIN = -1.8, Y_MAX = 1.8;

const f = (x) => (x * x * x) / 3 - x;
const fp = (x) => x * x - 1;
const fmt = (n, d = 2) => (Math.abs(n) < 1e-9 ? '0.00' : n.toFixed(d));

const xToPx = (x) => ((x - X_MIN) / (X_MAX - X_MIN)) * W;
const yToPx = (y) => H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * H;
const r2 = (n) => Math.round(n * 100) / 100;

const THEMES = {
  pos: { main: '#3b82f6', deep: '#1e3a8a', soft: '#dfebfe', mid: '#dbeafe', rgb: '59,130,246' },
  neg: { main: '#b91c1c', deep: '#7f1d1d', soft: '#fee2e2', mid: '#fecaca', rgb: '185,28,28' },
  max: { main: '#d97706', deep: '#92400e', soft: '#fef3c7', mid: '#fde68a', rgb: '217,119,6' },
  min: { main: '#0d9488', deep: '#115e59', soft: '#ccfbf1', mid: '#99f6e4', rgb: '13,148,136' },
};

const SCENARIOS = {
  pos: { c: -1.7, regionA: -2.5, regionB: -1.0, signL: +1, signR: +1 },
  neg: { c: 0.4, regionA: -1.0, regionB: 1.0, signL: -1, signR: -1 },
  max: { c: -1.0, regionA: -1.8, regionB: -0.2, signL: +1, signR: -1 },
  min: { c: 1.0, regionA: 0.2, regionB: 1.8, signL: -1, signR: +1 },
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

/* ---------- the cubic ---------- */
function curve() {
  const N = 600;
  let d = '';
  for (let i = 0; i <= N; i++) {
    const x = X_MIN + (i / N) * (X_MAX - X_MIN);
    d += (i === 0 ? 'M' : 'L') + r2(xToPx(x)) + ' ' + r2(yToPx(f(x))) + ' ';
  }
  return `<path d="${d.trim()}" fill="none" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/>`;
}

/* ---------- region band (drawScene region tint) ---------- */
function region(cfg, th) {
  const xa = xToPx(cfg.regionA), xb = xToPx(cfg.regionB);
  const x = Math.min(xa, xb), w = Math.abs(xb - xa);
  return `<g opacity="0.55">` +
    `<rect x="${r2(x)}" y="0" width="${r2(w)}" height="${H}" fill="${th.soft}"/>` +
    `<path d="M${r2(xa)} 0V${H}M${r2(xb)} 0V${H}" stroke="${th.mid}" stroke-width="1" ` +
    `stroke-dasharray="2 3" fill="none"/></g>`;
}

/* ---------- chevrons on max/min (drawChevrons) ---------- */
function chevrons(cfg, th, c) {
  let s = '';
  const segment = (a, b, dir) => {
    const steps = 3;
    for (let i = 1; i <= steps; i++) {
      const x = a + (i / (steps + 1)) * (b - a);
      const dx = 0.08;
      const p0 = { x: xToPx(x - dx * dir), y: yToPx(f(x - dx * dir)) };
      const p1 = { x: xToPx(x + dx * dir), y: yToPx(f(x + dx * dir)) };
      const vx = p1.x - p0.x, vy = p1.y - p0.y;
      const len = Math.hypot(vx, vy) || 1;
      const ux = vx / len, uy = vy / len;
      const tip = { x: xToPx(x) + ux * 7, y: yToPx(f(x)) + uy * 7 };
      const t1 = { x: tip.x - ux * 9 - uy * 5, y: tip.y - uy * 9 + ux * 5 };
      const t2 = { x: tip.x - ux * 9 + uy * 5, y: tip.y - uy * 9 - ux * 5 };
      s += `<path d="M${r2(t1.x)} ${r2(t1.y)}L${r2(tip.x)} ${r2(tip.y)}L${r2(t2.x)} ${r2(t2.y)}" ` +
        `fill="none" stroke="${th.main}" stroke-width="2"/>`;
    }
  };
  segment(cfg.regionA, c, cfg.signL);
  segment(c, cfg.regionB, cfg.signR);
  return s;
}

/* ---------- tangent, drop, markers, slope pill ---------- */
function tangent(c, th) {
  const m = fp(c), b = f(c) - m * c;
  const half = (X_MAX - X_MIN) * 0.6;          // tangentReveal = 1
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
    `font-weight="600" font-family="${SANS}">P = (c, f(c))</text>`;
}

function slopePill(c, th) {
  const m = fp(c), b = f(c) - m * c;
  const xLbl = c + 0.45;
  const px = xToPx(xLbl), py = yToPx(m * xLbl + b);
  const text = 'slope = ' + fmt(m, 2);
  const w = text.length * 6.9 + 14, h = 22;
  const x = px + 8, y = py - 28;
  return `<rect x="${r2(x)}" y="${r2(y)}" width="${r2(w)}" height="${h}" rx="4" fill="#ffffff" ` +
    `stroke="${th.main}" stroke-width="1.5"/>` +
    `<text x="${r2(x + 7)}" y="${r2(y + h / 2 + 0.5)}" dominant-baseline="central" fill="${th.deep}" ` +
    `font-size="12" font-weight="600" font-family="${SANS}">${text}</text>`;
}

// key: 'pos' | 'neg' | 'max' | 'min' | null (free drag, no scenario)
function freeze(key, cFree) {
  const th = THEMES[key || 'pos'];
  const cfg = key ? SCENARIOS[key] : null;
  const c = cfg ? cfg.c : cFree;
  const m = fp(c);

  let s = '';
  if (cfg) s += region(cfg, th);
  s += grid();
  if (key === 'max' || key === 'min') s += chevrons(cfg, th, c);
  s += curve();
  s += tangent(c, th);
  s += drop(c);
  s += cMarker(c, th);
  s += pointP(c, th);
  s += slopePill(c, th);

  const label = key
    ? `tangent at c = ${fmt(c, 1)} with slope ${fmt(m, 2)}`
    : `free drag, tangent at c = ${fmt(c, 1)} with slope ${fmt(m, 2)}`;
  return (
    `<svg viewBox="0 0 ${W} ${H}" width="520" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Cubic f(x) = x cubed over 3 minus x, ${label}">` +
    `<rect width="${W}" height="${H}" fill="#ffffff"/>` +
    s +
    `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#cbd5e1" stroke-width="1" rx="10"/>` +
    `</svg>`
  );
}

const functionTangentLineDiagrams = {
  // free drag at the tool's DEFAULT_C = −0.5, no scenario tint (slope −0.75)
  idle: freeze(null, -0.5),
  // c = −1.7 on the left wing: f′ = 1.89 > 0
  pos: freeze('pos'),
  // c = 0.4 between the extrema: f′ = −0.84 < 0
  neg: freeze('neg'),
  // c = −1: f′ = 0, chevrons flip + to −
  max: freeze('max'),
  // c = 1: f′ = 0, chevrons flip − to +
  min: freeze('min'),
};

export default functionTangentLineDiagrams;
