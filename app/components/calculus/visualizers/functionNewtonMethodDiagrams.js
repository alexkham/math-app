// Frozen-state SVGs for the Newton's Method tool (Line 1 anchor mesh).
// Ports FunctionNewtonMethod.jsx verbatim: same model (f = x³ − 2x − 5,
// f′ = 3x² − 2, root α ≈ 2.0945515), same window (X −2..4, Y −10..22), the same
// 900x540 canvas aspect the tool fits itself to, the same grid/root-marker/curve
// clipping, and the same iteration trail — dashed drop, faded tangent, fading
// P-markers, x-subscript labels.
//
// The two converging scenarios are frozen at rest (every iteration drawn, the
// last one at full strength), which is exactly what the tool shows once the run
// finishes. The stall scenario is frozen one phase earlier, at the moment the
// tool draws the near-horizontal tangent and the off-chart arrow: that frame is
// the failure, and the tool's own resting frame would hide the tangent.

const W = 900, H = 540;
const X_MIN = -2, X_MAX = 4;
const Y_MIN = -10, Y_MAX = 22;

const f = (x) => x * x * x - 2 * x - 5;
const fp = (x) => 3 * x * x - 2;
const ROOT = 2.0945514815423265;

const fmt = (n, d = 2) => (Math.abs(n) < 1e-9 ? '0.00' : n.toFixed(d));
const xToPx = (x) => ((x - X_MIN) / (X_MAX - X_MIN)) * W;
const yToPx = (y) => H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * H;
const r2 = (n) => Math.round(n * 100) / 100;

const SUBS = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
const sub = (n) => String(n).split('').map((d) => SUBS[+d] || d).join('');

const SANS = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';

const SCENARIOS = {
  fast: { x0: 3.0, maxIter: 4, failOnFirst: false },
  cross: { x0: -1.0, maxIter: 5, failOnFirst: false },
  flat: { x0: 0.85, maxIter: 1, failOnFirst: true },
};

/* ---------- computeIterations, ported ---------- */
function computeIterations(x0, maxIter, failOnFirst) {
  const out = [];
  let x = x0;
  for (let i = 0; i < maxIter; i++) {
    const fx = f(x), dfx = fp(x);
    if (Math.abs(dfx) < 1e-6) { out.push({ x, fx, dfx, corr: NaN, xNext: NaN, failed: 'flat' }); break; }
    const corr = fx / dfx;
    const xNext = x - corr;
    const flew = Math.abs(xNext) > X_MAX + 30 || (failOnFirst && Math.abs(corr) > 6);
    out.push({ x, fx, dfx, corr, xNext, flew });
    if (flew) break;
    if (Math.abs(fx) < 1e-7) break;
    x = xNext;
  }
  return out;
}

/* ---------- grid, root marker, curve ---------- */
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
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y += 2) minor.push(`M0 ${r2(yToPx(y))}H${W}`);
  s += `<path d="${minor.join('')}" stroke="#eef2f7" stroke-width="1" fill="none"/>`;

  const major = [];
  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) major.push(`M${r2(xToPx(x))} 0V${H}`);
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y += 5) major.push(`M0 ${r2(yToPx(y))}H${W}`);
  s += `<path d="${major.join('')}" stroke="#e6eaf2" stroke-width="1" fill="none"/>`;

  const y0 = yToPx(0), x0 = xToPx(0);
  s += `<path d="M0 ${r2(y0)}H${W}M${r2(x0)} 0V${H}" stroke="#94a3b8" stroke-width="1.25" fill="none"/>`;

  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) {
    if (x === 0) continue;
    s += `<text x="${r2(xToPx(x))}" y="${r2(y0 + 4)}" text-anchor="middle" dominant-baseline="hanging" ` +
      `fill="#64748b" font-size="11" font-family="${SANS}">${x}</text>`;
  }
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y += 5) {
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

function rootMarker() {
  const y0 = yToPx(0), rx = xToPx(ROOT);
  return `<path d="M${r2(rx)} ${r2(y0 + 6)}L${r2(rx - 5)} ${r2(y0 + 14)}L${r2(rx + 5)} ${r2(y0 + 14)}Z" fill="#94a3b8"/>` +
    `<text x="${r2(rx)}" y="${r2(y0 + 16)}" text-anchor="middle" dominant-baseline="hanging" ` +
    `fill="#64748b" font-size="11" font-style="italic" font-family="Georgia,serif">α</text>`;
}

function curve() {
  const N = 600;
  let d = '', started = false;
  for (let i = 0; i <= N; i++) {
    const x = X_MIN + (i / N) * (X_MAX - X_MIN);
    const y = f(x);
    if (y > Y_MAX + 3 || y < Y_MIN - 3) { started = false; continue; }
    d += (started ? 'L' : 'M') + r2(xToPx(x)) + ' ' + r2(yToPx(y)) + ' ';
    started = true;
  }
  return `<path d="${d.trim()}" fill="none" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/>`;
}

/* ---------- tangent clipped to the window (drawLineByEq) ---------- */
function lineByEq(m, b, stroke, width, opacity) {
  const pts = [{ x: X_MIN, y: m * X_MIN + b }, { x: X_MAX, y: m * X_MAX + b }];
  if (Math.abs(m) > 1e-9) {
    pts.push({ x: (Y_MAX - b) / m, y: Y_MAX });
    pts.push({ x: (Y_MIN - b) / m, y: Y_MIN });
  }
  const inside = pts.filter((p) => p.x >= X_MIN - 1e-6 && p.x <= X_MAX + 1e-6 && p.y >= Y_MIN - 1e-6 && p.y <= Y_MAX + 1e-6);
  if (inside.length < 2) return '';
  inside.sort((a, b2) => a.x - b2.x);
  const a = inside[0], c = inside[inside.length - 1];
  return `<path d="M${r2(xToPx(a.x))} ${r2(yToPx(a.y))}L${r2(xToPx(c.x))} ${r2(yToPx(c.y))}" fill="none" ` +
    `stroke="${stroke}" stroke-width="${width}" opacity="${opacity}"/>`;
}

const dropLine = (px, py, y0) =>
  `<path d="M${r2(px)} ${r2(py)}V${r2(y0)}" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 4" fill="none"/>`;

/* ---------- one settled iteration (drawIterationStatic) ---------- */
function iterationStatic(it, i, isLatest) {
  const alpha = isLatest ? 1.0 : Math.max(0.18, 0.7 - i * 0.13);
  const px = xToPx(it.x), py = yToPx(it.fx), y0 = yToPx(0);
  let s = `<g opacity="${r2(alpha)}">`;
  s += dropLine(px, py, y0);
  if (isFinite(it.dfx) && Math.abs(it.dfx) > 1e-9 && !it.flew) {
    s += lineByEq(it.dfx, it.fx - it.dfx * it.x, '#60a5fa', 1.5, 0.5);
  }
  s += `<circle cx="${r2(px)}" cy="${r2(py)}" r="${isLatest ? 11 : 8}" ` +
    `fill="${isLatest ? 'rgba(59,130,246,.22)' : 'rgba(148,163,184,.18)'}"/>`;
  s += `<circle cx="${r2(px)}" cy="${r2(py)}" r="${isLatest ? 6 : 4}" ` +
    `fill="${isLatest ? '#1e3a8a' : '#64748b'}" stroke="#fff" stroke-width="2"/>`;
  s += `<text x="${r2(px + 9)}" y="${r2(py - 8)}" text-anchor="start" fill="${isLatest ? '#1e3a8a' : '#64748b'}" ` +
    `font-size="${isLatest ? 12 : 11}" font-weight="${isLatest ? 600 : 500}" font-family="${SANS}">P${sub(i)}</text>`;
  s += `<text x="${r2(px)}" y="${r2(y0 + 18)}" text-anchor="middle" dominant-baseline="hanging" ` +
    `fill="${isLatest ? '#1e3a8a' : '#64748b'}" font-size="11" font-weight="${isLatest ? 600 : 500}" ` +
    `font-family="${SANS}">x${sub(i)}</text>`;
  s += `</g>`;
  return s;
}

/* ---------- the stall frame: tangent drawn, arrow off-chart (drawFlewArrow) ---------- */
function flewArrow(it) {
  const y = H * 0.5;
  return `<path d="M${W - 22} ${y}L${W - 8} ${y}L${W - 14} ${y - 6}M${W - 8} ${y}L${W - 14} ${y + 6}" ` +
    `fill="none" stroke="#b91c1c" stroke-width="2.5"/>` +
    `<text x="${W - 28}" y="${y}" text-anchor="end" dominant-baseline="central" fill="#b91c1c" ` +
    `font-size="11" font-weight="600" font-family="${SANS}">x₁ ≈ ${it.xNext > 0 ? '+' : ''}${fmt(it.xNext, 1)}</text>`;
}

function stallFrame(it) {
  const px = xToPx(it.x), py = yToPx(it.fx), y0 = yToPx(0);
  let s = dropLine(px, py, y0);
  s += lineByEq(it.dfx, it.fx - it.dfx * it.x, '#3b82f6', 2.25, 1);
  s += flewArrow(it);
  s += `<circle cx="${r2(px)}" cy="${r2(py)}" r="11" fill="rgba(59,130,246,.22)"/>`;
  s += `<circle cx="${r2(px)}" cy="${r2(py)}" r="6" fill="#1e3a8a" stroke="#fff" stroke-width="2"/>`;
  s += `<text x="${r2(px + 9)}" y="${r2(py - 8)}" text-anchor="start" fill="#1e3a8a" font-size="12" ` +
    `font-weight="600" font-family="${SANS}">P₀</text>`;
  s += `<text x="${r2(px)}" y="${r2(y0 + 18)}" text-anchor="middle" dominant-baseline="hanging" fill="#1e3a8a" ` +
    `font-size="11" font-weight="600" font-family="${SANS}">x₀</text>`;
  return s;
}

/* ---------- nothing run yet (drawInitialPoint) ---------- */
function initialPoint(x) {
  const px = xToPx(x), py = yToPx(f(x)), y0 = yToPx(0);
  return dropLine(px, py, y0) +
    `<circle cx="${r2(px)}" cy="${r2(y0)}" r="6" fill="#1e3a8a" stroke="#fff" stroke-width="2"/>` +
    `<circle cx="${r2(px)}" cy="${r2(py)}" r="11" fill="rgba(59,130,246,.2)"/>` +
    `<circle cx="${r2(px)}" cy="${r2(py)}" r="6" fill="#1e3a8a" stroke="#fff" stroke-width="2"/>` +
    `<text x="${r2(px + 9)}" y="${r2(py - 8)}" text-anchor="start" fill="#1e3a8a" font-size="12" ` +
    `font-weight="600" font-family="${SANS}">P₀</text>` +
    `<text x="${r2(px)}" y="${r2(y0 + 18)}" text-anchor="middle" dominant-baseline="hanging" fill="#1e3a8a" ` +
    `font-size="12" font-weight="600" font-family="${SANS}">x₀</text>`;
}

function wrap(inner, label) {
  return `<svg viewBox="0 0 ${W} ${H}" width="520" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Newton's method on f(x) = x cubed minus 2x minus 5, ${label}">` +
    `<rect width="${W}" height="${H}" fill="#ffffff"/>` +
    grid() + rootMarker() + curve() + inner +
    `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#cbd5e1" stroke-width="1" rx="10"/>` +
    `</svg>`;
}

function freezeRun(key) {
  const cfg = SCENARIOS[key];
  const iters = computeIterations(cfg.x0, cfg.maxIter, cfg.failOnFirst);
  if (key === 'flat') {
    return wrap(stallFrame(iters[0]),
      `start at x0 = ${cfg.x0} where the tangent is nearly flat and the next iterate flies off the chart`);
  }
  const inner = iters.map((it, i) => iterationStatic(it, i, i === iters.length - 1)).join('');
  const last = iters[iters.length - 1];
  return wrap(inner,
    `start at x0 = ${cfg.x0}, ${iters.length} iterations closing on the root, final x = ${fmt(last.x, 4)}`);
}

// exported for the page's prose so the numbers there cannot drift from the tool
export const iterationTrace = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, cfg]) => [
    k,
    computeIterations(cfg.x0, cfg.maxIter, cfg.failOnFirst).map((it) => ({
      x: it.x, fx: it.fx, dfx: it.dfx, xNext: it.xNext, err: it.x - ROOT, flew: !!it.flew,
    })),
  ])
);

const functionNewtonMethodDiagrams = {
  // nothing run yet: the draggable x0 at the tool's DEFAULT_X0 = 3
  idle: wrap(initialPoint(3.0), 'starting point x0 = 3 before any step is taken'),
  // x0 = 3 -> four iterations, error collapsing to machine precision
  fast: freezeRun('fast'),
  // x0 = -1 -> the first tangent throws the guess across to the right of the root
  cross: freezeRun('cross'),
  // x0 = 0.85 -> f'(x0) = 0.17, the correction blows up and x1 lands off the chart
  flat: freezeRun('flat'),
};

export default functionNewtonMethodDiagrams;
