// Frozen-state SVGs for the Average Rate of Change tool (Line 1 anchor mesh).
// Ports FunctionDerivativeLocal.jsx verbatim: same model (f = x³/3 − x), same
// window (X −2.6..2.6, Y −1.8..1.8), the same 900x540 canvas aspect the tool
// fits itself to, the same THEMES palette, and the same draw order — region
// tint, grid, curve, direction chevrons, Δx / Δy dashed legs, secant with its
// slope pill, then P₁ and P₂.
//
// Each scenario is frozen at the end of its animation. For asc and desc that is
// the seven-step run. For max and min the run continues into two tightening
// steps, so the frozen pair is the tightest one — which is the whole point of
// those scenarios: as P₁ and P₂ close in, the secant slope collapses toward
// f′(c) = 0.

const W = 900, H = 540;
const X_MIN = -2.6, X_MAX = 2.6;
const Y_MIN = -1.8, Y_MAX = 1.8;
const LOC_MAX_X = -1, LOC_MIN_X = 1;

const f = (x) => (x * x * x) / 3 - x;

const xToPx = (x) => ((x - X_MIN) / (X_MAX - X_MIN)) * W;
const yToPx = (y) => H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * H;
const r2 = (n) => Math.round(n * 100) / 100;

const THEMES = {
  asc: { main: '#3b82f6', deep: '#1e3a8a', soft: '#dfebfe', mid: '#dbeafe', rgb: '59,130,246' },
  desc: { main: '#b91c1c', deep: '#7f1d1d', soft: '#fee2e2', mid: '#fecaca', rgb: '185,28,28' },
  max: { main: '#d97706', deep: '#92400e', soft: '#fef3c7', mid: '#fde68a', rgb: '217,119,6' },
  min: { main: '#0d9488', deep: '#115e59', soft: '#ccfbf1', mid: '#99f6e4', rgb: '13,148,136' },
};

const SCENARIOS = {
  asc: { tx1: -2.05, tx2: -1.35, regionA: -2.5, regionB: -1.0, arrowsOn: 'left-asc', tighten: null },
  desc: { tx1: -0.55, tx2: 0.55, regionA: -1.0, regionB: 1.0, arrowsOn: 'mid-desc', tighten: null },
  max: { tx1: -1.45, tx2: -0.55, regionA: -1.8, regionB: -0.2, arrowsOn: 'around-max', tighten: [[-1.25, -0.75], [-1.08, -0.92]] },
  min: { tx1: 0.55, tx2: 1.45, regionA: 0.2, regionB: 1.8, arrowsOn: 'around-min', tighten: [[0.75, 1.25], [0.92, 1.08]] },
};

const DEFAULT_X = { x1: -1.40, x2: -0.40 };

const SANS = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
const SERIF_I = 'Georgia,serif';

const secantSlope = (x1, x2) => (f(x2) - f(x1)) / (x2 - x1);

/* ---------- grid + axes ---------- */
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
    `fill="#475569" font-size="12" font-style="italic" font-family="${SERIF_I}">x</text>`;
  s += `<text x="${r2(x0 + 6)}" y="4" text-anchor="start" dominant-baseline="hanging" ` +
    `fill="#475569" font-size="12" font-style="italic" font-family="${SERIF_I}">y</text>`;
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
  return `<g opacity="0.55">` +
    `<rect x="${r2(Math.min(xa, xb))}" y="0" width="${r2(Math.abs(xb - xa))}" height="${H}" fill="${th.soft}"/>` +
    `<path d="M${r2(xa)} 0V${H}M${r2(xb)} 0V${H}" stroke="${th.mid}" stroke-width="1" ` +
    `stroke-dasharray="2 3" fill="none"/></g>`;
}

/* ---------- direction chevrons + the extremum dot ---------- */
function chevrons(cfg, th) {
  const ranges = [];
  if (cfg.arrowsOn === 'left-asc') ranges.push([cfg.regionA, cfg.regionB, +1]);
  if (cfg.arrowsOn === 'mid-desc') ranges.push([cfg.regionA, cfg.regionB, -1]);
  if (cfg.arrowsOn === 'around-max') ranges.push([cfg.regionA, LOC_MAX_X, +1], [LOC_MAX_X, cfg.regionB, -1]);
  if (cfg.arrowsOn === 'around-min') ranges.push([cfg.regionA, LOC_MIN_X, -1], [LOC_MIN_X, cfg.regionB, +1]);

  let s = '';
  ranges.forEach(([a, b, dir]) => {
    const steps = 4;
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
  });

  if (cfg.arrowsOn === 'around-max' || cfg.arrowsOn === 'around-min') {
    const isMax = cfg.arrowsOn === 'around-max';
    const ex = isMax ? LOC_MAX_X : LOC_MIN_X;
    const px = xToPx(ex), py = yToPx(f(ex));
    s += `<circle cx="${r2(px)}" cy="${r2(py)}" r="4" fill="${th.deep}"/>`;
    s += `<text x="${r2(px)}" y="${r2(py + (isMax ? -8 : 8))}" text-anchor="middle" ` +
      `dominant-baseline="${isMax ? 'auto' : 'hanging'}" fill="${th.deep}" font-size="11" ` +
      `font-weight="600" font-family="${SANS}">local ${isMax ? 'max' : 'min'}  f&#8242; = 0</text>`;
  }
  return s;
}

/* ---------- Δx and Δy legs ---------- */
function deltas(x1, x2) {
  const X1 = xToPx(x1), Y1 = yToPx(f(x1));
  const X2 = xToPx(x2), Y2 = yToPx(f(x2));
  let s = `<path d="M${r2(X1)} ${r2(Y1)}H${r2(X2)}M${r2(X2)} ${r2(Y1)}V${r2(Y2)}" stroke="#64748b" ` +
    `stroke-width="1.5" stroke-dasharray="5 4" fill="none"/>`;
  s += `<text x="${r2((X1 + X2) / 2)}" y="${r2(Y1 + (Y2 > Y1 ? 5 : -5))}" text-anchor="middle" ` +
    `dominant-baseline="${Y2 > Y1 ? 'hanging' : 'auto'}" fill="#475569" font-size="13" ` +
    `font-style="italic" font-family="${SERIF_I}">&#916;x</text>`;
  s += `<text x="${r2(X2 + (X2 > X1 ? 6 : -6))}" y="${r2((Y1 + Y2) / 2)}" ` +
    `text-anchor="${X2 > X1 ? 'start' : 'end'}" dominant-baseline="central" fill="#475569" ` +
    `font-size="13" font-style="italic" font-family="${SERIF_I}">&#916;y</text>`;
  return s;
}

/* ---------- secant + slope pill ---------- */
function secant(x1, x2, th) {
  const m = secantSlope(x1, x2);
  const b = f(x1) - m * x1;
  const pad = 0.35 * Math.abs(x2 - x1) + 0.5;
  const xa = Math.min(x1, x2) - pad;
  const xb = Math.max(x1, x2) + pad;
  let s = `<path d="M${r2(xToPx(xa))} ${r2(yToPx(m * xa + b))}L${r2(xToPx(xb))} ${r2(yToPx(m * xb + b))}" ` +
    `fill="none" stroke="${th.main}" stroke-width="2.25"/>`;

  const xm = (x1 + x2) / 2, ym = m * xm + b;
  const text = 'm = ' + m.toFixed(2);
  const w = text.length * 6.9 + 14, hh = 22;
  const lx = xToPx(xm) + 12, ly = yToPx(ym) - 26;
  s += `<rect x="${r2(lx)}" y="${r2(ly)}" width="${r2(w)}" height="${hh}" rx="4" fill="#ffffff" ` +
    `stroke="${th.main}" stroke-width="1.5"/>`;
  s += `<text x="${r2(lx + 7)}" y="${r2(ly + hh / 2 + 0.5)}" dominant-baseline="central" fill="${th.deep}" ` +
    `font-size="12" font-weight="600" font-family="${SANS}">${text}</text>`;
  return s;
}

function point(x, label, th) {
  const px = xToPx(x), py = yToPx(f(x));
  return `<circle cx="${r2(px)}" cy="${r2(py)}" r="11" fill="rgba(${th.rgb},.18)"/>` +
    `<circle cx="${r2(px)}" cy="${r2(py)}" r="6" fill="${th.deep}" stroke="#ffffff" stroke-width="2"/>` +
    `<text x="${r2(px + 9)}" y="${r2(py - 8)}" text-anchor="start" fill="${th.deep}" font-size="12" ` +
    `font-weight="600" font-family="${SANS}">${label}</text>`;
}

// key: 'asc' | 'desc' | 'max' | 'min' | null (free drag, no scenario)
function freeze(key) {
  const th = THEMES[key || 'asc'];
  const cfg = key ? SCENARIOS[key] : null;
  let x1, x2;
  if (!cfg) {
    x1 = DEFAULT_X.x1; x2 = DEFAULT_X.x2;
  } else if (cfg.tighten) {
    [x1, x2] = cfg.tighten[cfg.tighten.length - 1];   // the tightest pair the run ends on
  } else {
    x1 = cfg.tx1; x2 = cfg.tx2;
  }

  let s = '';
  if (cfg) s += region(cfg, th);
  s += grid();
  s += curve();
  if (cfg) s += chevrons(cfg, th);
  s += deltas(x1, x2);
  s += secant(x1, x2, th);
  s += point(x1, 'P₁', th);
  s += point(x2, 'P₂', th);

  const m = secantSlope(x1, x2);
  return (
    `<svg viewBox="0 0 ${W} ${H}" width="520" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Cubic f(x) = x cubed over 3 minus x with a secant from x = ${x1} to x = ${x2}, ` +
    `average rate of change ${m.toFixed(2)}">` +
    `<rect width="${W}" height="${H}" fill="#ffffff"/>` +
    s +
    `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#cbd5e1" stroke-width="1" rx="10"/>` +
    `</svg>`
  );
}

// slopes the page's prose quotes, computed from the tool's own numbers
export const slopes = {
  idle: secantSlope(DEFAULT_X.x1, DEFAULT_X.x2),
  asc: secantSlope(SCENARIOS.asc.tx1, SCENARIOS.asc.tx2),
  desc: secantSlope(SCENARIOS.desc.tx1, SCENARIOS.desc.tx2),
  maxWide: secantSlope(SCENARIOS.max.tx1, SCENARIOS.max.tx2),
  maxMid: secantSlope(...SCENARIOS.max.tighten[0]),
  maxTight: secantSlope(...SCENARIOS.max.tighten[1]),
  minWide: secantSlope(SCENARIOS.min.tx1, SCENARIOS.min.tx2),
  minMid: secantSlope(...SCENARIOS.min.tighten[0]),
  minTight: secantSlope(...SCENARIOS.min.tighten[1]),
};

const functionDerivativeLocalDiagrams = {
  // free drag at the tool's DEFAULT_X pair, no scenario tint
  idle: freeze(null),
  // P₁ = −2.05, P₂ = −1.35 on the rising left wing
  asc: freeze('asc'),
  // P₁ = −0.55, P₂ = 0.55 straddling the falling middle
  desc: freeze('desc'),
  // tightened around the local maximum at x = −1
  max: freeze('max'),
  // tightened around the local minimum at x = 1
  min: freeze('min'),
};

export default functionDerivativeLocalDiagrams;
