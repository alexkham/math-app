// Static SVG diagrams for the algebra inequality visualizer (Line 1).
// Each diagram freezes InequalityVisualizer's Hero graph in one state,
// replicating NumberLine's exact pipeline from logic.js/Panels.jsx: same G
// frame (980x332), the crit-driven view range (min-2.5 .. max+2.5, else ±5),
// the symmetric y-range with 5th/95th-percentile clamping, the 260-sample
// domain-aware curve, blue solution bars on the axis, open/closed endpoint
// circles colored by kind (zero #2563eb, pole #ef4444, domain-edge #b45309,
// expr blue), red domain shading for radicals/poles, and the marble frozen at
// its fresh-load position (first left test point, crit[0] - 2). Colors and
// endpoint-closure rules follow the component's own code paths — poles are
// never closed, endpoints close only for non-strict operators.

const G = {
  W: 980, padX: 46, curveTop: 20, curveBottom: 200,
  axisY: 232, tickLabelY: 250, trailY: 268, marbleY: 304, totalH: 332,
};
const y0 = (G.curveTop + G.curveBottom) / 2;

const fmt = (n) => {
  if (!Number.isFinite(n)) return '—';
  if (Math.abs(n) < 1e-9) return '0';
  if (Math.abs(n - Math.round(n)) < 1e-4) return String(Math.round(n));
  return n.toFixed(2);
};
const niceTickStep = (range, target = 5) => {
  const raw = range / target;
  const exp = Math.floor(Math.log10(raw));
  const base = raw / Math.pow(10, exp);
  const nice = base < 1.5 ? 1 : base < 3.5 ? 2 : base < 7 ? 5 : 10;
  return nice * Math.pow(10, exp);
};
const formatTick = (v) => {
  if (Math.abs(v) < 1e-9) return '0';
  if (Math.abs(v - Math.round(v)) < 1e-4) return String(Math.round(v));
  return v.toFixed(1);
};

// spec: { f, crits: [{x, kind ('zero'|'pole'|'expr'), mult}], domLo?, op, expr }
// op: 'lt' | 'le' | 'gt' | 'ge'
const OPS = {
  lt: { strict: true,  dir: 'lt', sym: '&lt;' },
  le: { strict: false, dir: 'lt', sym: '&#8804;' },
  gt: { strict: true,  dir: 'gt', sym: '&gt;' },
  ge: { strict: false, dir: 'gt', sym: '&#8805;' },
};

const freeze = (spec) => {
  const { f, crits, domLo, expr } = spec;
  const op = OPS[spec.op];
  const inDomain = (x) => {
    if (domLo !== undefined && x < domLo - 1e-9) return false;
    if (crits.some((c) => c.kind === 'pole' && Math.abs(c.x - x) < 1e-9)) return false;
    return Number.isFinite(f(x));
  };
  const holds = (x) => {
    if (!inDomain(x)) return false;
    const v = f(x);
    if (!Number.isFinite(v)) return false;
    if (Math.abs(v) < 1e-9) return !op.strict;
    return op.dir === 'lt' ? v < -1e-9 : v > 1e-9;
  };

  // view range: crit-driven (domain edge counts as a crit for the range)
  const allCrit = [...new Set([...crits.map((c) => c.x), ...(domLo !== undefined ? [domLo] : [])])]
    .filter(Number.isFinite).sort((a, b) => a - b);
  const vr = allCrit.length
    ? { lo: Math.min(...allCrit) - 2.5, hi: Math.max(...allCrit) + 2.5 }
    : { lo: -5, hi: 5 };
  const X = (v) => G.padX + (v - vr.lo) / (vr.hi - vr.lo) * (G.W - 2 * G.padX);

  // symmetric y-range with percentile clamp
  const vals = [];
  for (let i = 0; i <= 240; i++) {
    const x = vr.lo + (vr.hi - vr.lo) * i / 240;
    if (!inDomain(x)) continue;
    const y = f(x);
    if (Number.isFinite(y)) vals.push(y);
  }
  let yR = { min: -1, max: 1 };
  if (vals.length) {
    let mn = Math.min(...vals), mx = Math.max(...vals);
    const sorted = [...vals].sort((a, b) => a - b);
    const p5 = sorted[Math.floor(sorted.length * 0.05)];
    const p95 = sorted[Math.floor(sorted.length * 0.95)];
    if (mx - mn > 10 * (p95 - p5)) { mn = p5; mx = p95; }
    const mag = Math.max(Math.abs(mn), Math.abs(mx), 0.5);
    yR = { min: -mag, max: mag };
  }
  const Y = (v) => G.curveBottom - (Math.max(yR.min, Math.min(yR.max, v)) - yR.min) / (yR.max - yR.min) * (G.curveBottom - G.curveTop);

  let s = '';

  // domain shading (left-of-domain and pole stripes)
  if (domLo !== undefined) {
    const w = Math.max(0, X(domLo) - G.padX);
    s += `<rect x="${G.padX}" y="${G.curveTop - 2}" width="${w.toFixed(1)}" height="${G.axisY - G.curveTop + 12}" fill="#fee2e2" opacity="0.45"/>`;
  }
  crits.filter((c) => c.kind === 'pole').forEach((c) => {
    if (c.x < vr.lo || c.x > vr.hi) return;
    s += `<rect x="${(X(c.x) - 6).toFixed(1)}" y="${G.curveTop - 2}" width="12" height="${G.axisY - G.curveTop + 12}" fill="#fee2e2" opacity="0.55"/>`;
  });

  // y-axis, f(x) label, dashed zero line, y ticks
  s += `<line x1="${G.padX}" y1="${G.curveTop - 2}" x2="${G.padX}" y2="${G.curveBottom + 2}" stroke="#94a3b8" stroke-width="1"/>`;
  s += `<text x="${G.padX - 4}" y="${G.curveTop - 2}" font-size="10" fill="#475569" text-anchor="end" font-style="italic" font-weight="600">f(x)</text>`;
  s += `<line x1="${G.padX}" y1="${y0}" x2="${G.W - G.padX}" y2="${y0}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>`;
  const yStep = niceTickStep(yR.max - yR.min, 4);
  for (let v = Math.ceil(yR.min / yStep) * yStep; v <= yR.max + 1e-9; v += yStep) {
    if (Math.abs(v) < yStep * 0.01) v = 0;
    const py = Y(v);
    const z = Math.abs(v) < 1e-9;
    s += `<line x1="${G.padX - 3}" y1="${py.toFixed(1)}" x2="${G.padX + 3}" y2="${py.toFixed(1)}" stroke="#94a3b8" stroke-width="${z ? 1.5 : 1}"/>`;
    s += `<text x="${G.padX - 6}" y="${(py + 3).toFixed(1)}" font-size="9.5" fill="${z ? '#475569' : '#94a3b8'}" text-anchor="end" font-weight="${z ? 600 : 400}">${formatTick(v)}</text>`;
  }

  // curve (domain-aware segments, clipped)
  let d = '', started = false;
  for (let i = 0; i <= 260; i++) {
    const x = vr.lo + (vr.hi - vr.lo) * i / 260;
    let brk = !inDomain(x);
    if (!brk && i > 0) {
      const xPrev = vr.lo + (vr.hi - vr.lo) * (i - 1) / 260;
      if (crits.some((c) => c.kind === 'pole' && (xPrev - c.x) * (x - c.x) < 0)) brk = true;
    }
    const y = brk ? NaN : f(x);
    if (brk || !Number.isFinite(y)) { started = false; continue; }
    d += `${started ? 'L' : 'M'}${X(x).toFixed(1)} ${Y(y).toFixed(1)}`;
    started = true;
  }
  s += `<path d="${d}" fill="none" stroke="#2563eb" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;

  // solution segments (interval midpoint test; close zero endpoints iff non-strict)
  const bounds = [-Infinity, ...allCrit, Infinity];
  const segs = [];
  for (let i = 0; i < bounds.length - 1; i++) {
    const mid = Number.isFinite(bounds[i]) && Number.isFinite(bounds[i + 1])
      ? (bounds[i] + bounds[i + 1]) / 2
      : (Number.isFinite(bounds[i]) ? bounds[i] + 1 : bounds[i + 1] - 1);
    if (holds(mid)) segs.push({ lo: bounds[i], hi: bounds[i + 1], openLo: true, openHi: true });
  }
  const poleXs = crits.filter((c) => c.kind !== 'zero').map((c) => c.x);
  if (!op.strict) segs.forEach((g) => {
    if (Number.isFinite(g.lo) && !poleXs.includes(g.lo) && holds(g.lo)) g.openLo = false;
    if (Number.isFinite(g.hi) && !poleXs.includes(g.hi) && holds(g.hi)) g.openHi = false;
  });
  segs.forEach((g) => {
    const x1 = Number.isFinite(g.lo) ? X(g.lo) : G.padX;
    const x2 = Number.isFinite(g.hi) ? X(g.hi) : G.W - G.padX;
    s += `<rect x="${x1.toFixed(1)}" y="${G.axisY - 5}" width="${(x2 - x1).toFixed(1)}" height="10" fill="#3b82f6" rx="2" opacity="0.88"/>`;
  });

  // x-axis, arrowheads, integer ticks
  s += `<line x1="${G.padX}" y1="${G.axisY}" x2="${G.W - G.padX}" y2="${G.axisY}" stroke="#475569" stroke-width="1.5"/>`;
  s += `<polygon points="${G.W - G.padX},${G.axisY} ${G.W - G.padX - 9},${G.axisY - 5} ${G.W - G.padX - 9},${G.axisY + 5}" fill="#475569"/>`;
  s += `<polygon points="${G.padX},${G.axisY} ${G.padX + 9},${G.axisY - 5} ${G.padX + 9},${G.axisY + 5}" fill="#475569"/>`;
  s += `<text x="${G.W - G.padX + 6}" y="${G.axisY + 4}" font-size="11" fill="#475569" font-style="italic" font-weight="600">x</text>`;
  for (let v = Math.ceil(vr.lo); v <= Math.floor(vr.hi); v++) {
    s += `<line x1="${X(v).toFixed(1)}" y1="${G.axisY - 4}" x2="${X(v).toFixed(1)}" y2="${G.axisY + 4}" stroke="#94a3b8"/>`;
    s += `<text x="${X(v).toFixed(1)}" y="${G.tickLabelY}" font-size="10" fill="#94a3b8" text-anchor="middle">${v}</text>`;
  }

  // endpoint circles + drop lines + labels
  crits.forEach((c) => {
    if (!Number.isFinite(c.x) || c.x < vr.lo || c.x > vr.hi) return;
    const edge = segs.find((g) =>
      (Number.isFinite(g.lo) && Math.abs(g.lo - c.x) < 1e-9) ||
      (Number.isFinite(g.hi) && Math.abs(g.hi - c.x) < 1e-9));
    let open = true;
    if (edge) {
      if (Number.isFinite(edge.lo) && Math.abs(edge.lo - c.x) < 1e-9) open = edge.openLo;
      if (Number.isFinite(edge.hi) && Math.abs(edge.hi - c.x) < 1e-9) open = edge.openHi;
    }
    const color = c.kind === 'pole' ? '#ef4444' : c.kind === 'domain' ? '#b45309' : '#2563eb';
    s += `<line x1="${X(c.x).toFixed(1)}" y1="${y0}" x2="${X(c.x).toFixed(1)}" y2="${G.axisY}" stroke="${color}" stroke-width="1" stroke-dasharray="2 2" opacity="0.4"/>`;
    s += `<circle cx="${X(c.x).toFixed(1)}" cy="${G.axisY}" r="6.5" fill="${open ? '#fff' : color}" stroke="${color}" stroke-width="2.25"/>`;
    s += `<text x="${X(c.x).toFixed(1)}" y="${G.axisY - 9}" font-size="11" fill="${color}" text-anchor="middle" font-weight="700">${fmt(c.x)}</text>`;
  });

  // marble at fresh-load position: first left test point (crit[0] - 2)
  const m = allCrit.length ? allCrit[0] - 2 : -2;
  const mx = X(m);
  const isIn = inDomain(m);
  const ok = holds(m);
  const mc = !isIn ? '#ef4444' : ok ? '#3b82f6' : '#f59e0b';
  const md = !isIn ? '#b91c1c' : ok ? '#2563eb' : '#b45309';
  if (isIn && Number.isFinite(f(m))) {
    const cy = Y(f(m));
    const bt = Math.min(y0, cy), bb = Math.max(y0, cy);
    s += `<line x1="${mx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${mx.toFixed(1)}" y2="${G.marbleY - 9}" stroke="${md}" stroke-width="1" stroke-dasharray="3 3" opacity="0.55"/>`;
    s += `<circle cx="${mx.toFixed(1)}" cy="${cy.toFixed(1)}" r="3.5" fill="${mc}" stroke="${md}" stroke-width="1.5"/>`;
    s += `<rect x="${(mx - 4).toFixed(1)}" y="${bt.toFixed(1)}" width="8" height="${(bb - bt).toFixed(1)}" fill="${mc}" opacity="0.18"/>`;
  } else {
    s += `<line x1="${mx.toFixed(1)}" y1="${G.curveTop}" x2="${mx.toFixed(1)}" y2="${G.marbleY - 9}" stroke="${md}" stroke-width="1" stroke-dasharray="3 3" opacity="0.55"/>`;
  }
  s += `<circle cx="${mx.toFixed(1)}" cy="${G.marbleY}" r="8" fill="${mc}" stroke="${md}" stroke-width="2"/>`;

  // inequality chip: "expr op 0"
  s += `<rect x="${G.W - 340}" y="8" width="310" height="30" rx="8" fill="#f1f5f9" stroke="#e2e8f0"/>`;
  s += `<text x="${G.W - 185}" y="28" font-size="15" fill="#1e293b" text-anchor="middle" font-family="'Cambria Math','Times New Roman',serif">${expr} ${op.sym} 0</text>`;

  return (
    `<svg width="620" viewBox="0 0 ${G.W} ${G.totalH}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">` +
    `<rect width="${G.W}" height="${G.totalH}" fill="#fff"/>` + s + `</svg>`
  );
};

const z = (x, mult = 1) => ({ x, kind: 'zero', mult });
const pole = (x) => ({ x, kind: 'pole', mult: 1 });
const ex = (x) => ({ x, kind: 'expr', mult: 1 });

const inequalityVisualizerDiagrams = {
  // Polynomial templates (op < is the fresh-load default)
  'poly-three': freeze({ f: (x) => (x + 2) * (x - 1) * (x - 5), crits: [z(-2), z(1), z(5)], op: 'lt',
    expr: '(x + 2)(x &#8722; 1)(x &#8722; 5)' }),
  'poly-double': freeze({ f: (x) => (x + 3) * (x - 2) * (x - 2), crits: [z(-3), z(2, 2)], op: 'lt',
    expr: '(x + 3)(x &#8722; 2)&#178;' }),
  'poly-cluster': freeze({ f: (x) => (x + 1) * x * (x - 1), crits: [z(-1), z(0), z(1)], op: 'lt',
    expr: '(x + 1)(x)(x &#8722; 1)' }),
  // Quadratic templates
  'quad-two': freeze({ f: (x) => x * x - x - 6, crits: [z(-2), z(3)], op: 'lt',
    expr: '(x + 2)(x &#8722; 3)' }),
  'quad-none': freeze({ f: (x) => x * x + 4, crits: [], op: 'lt',
    expr: '(x&#178; + 4)' }),
  'quad-down': freeze({ f: (x) => -x * x + 2 * x + 3, crits: [z(-1), z(3)], op: 'lt',
    expr: '(x + 1)(x &#8722; 3)' }),
  // Absolute-value templates
  'abs-centered': freeze({ f: (x) => Math.abs(x) - 3, crits: [ex(-3), ex(3)], op: 'lt',
    expr: '|x| &#8722; 3' }),
  'abs-shifted': freeze({ f: (x) => Math.abs(x - 2) - 4, crits: [ex(-2), ex(6)], op: 'lt',
    expr: '|x &#8722; 2| &#8722; 4' }),
  'abs-zero': freeze({ f: (x) => Math.abs(x + 1), crits: [ex(-1)], op: 'lt',
    expr: '|x + 1|' }),
  // Rational templates
  'rat-simple': freeze({ f: (x) => (x - 1) / (x + 2), crits: [z(1), pole(-2)], op: 'lt',
    expr: '(x &#8722; 1) / (x + 2)' }),
  'rat-crossed': freeze({ f: (x) => (x + 3) / (x - 4), crits: [z(-3), pole(4)], op: 'lt',
    expr: '(x + 3) / (x &#8722; 4)' }),
  'rat-adjacent': freeze({ f: (x) => (x - 2) / (x - 3), crits: [z(2), pole(3)], op: 'lt',
    expr: '(x &#8722; 2) / (x &#8722; 3)' }),
  // Radical templates
  'rad-basic': freeze({ f: (x) => (x < 0 ? NaN : Math.sqrt(x) - 2), crits: [ex(0), ex(4)], domLo: 0, op: 'lt',
    expr: '&#8730;x &#8722; 2' }),
  'rad-shifted': freeze({ f: (x) => (x < -3 ? NaN : Math.sqrt(x + 3) - 1), crits: [ex(-3), ex(-2)], domLo: -3, op: 'lt',
    expr: '&#8730;(x + 3) &#8722; 1' }),
  'rad-high': freeze({ f: (x) => (x < 1 ? NaN : Math.sqrt(x - 1) - 4), crits: [ex(1), ex(17)], domLo: 1, op: 'lt',
    expr: '&#8730;(x &#8722; 1) &#8722; 4' }),
  // The four comparison operators, frozen on the default polynomial
  'op-lt': freeze({ f: (x) => (x + 2) * (x - 1) * (x - 5), crits: [z(-2), z(1), z(5)], op: 'lt',
    expr: '(x + 2)(x &#8722; 1)(x &#8722; 5)' }),
  'op-le': freeze({ f: (x) => (x + 2) * (x - 1) * (x - 5), crits: [z(-2), z(1), z(5)], op: 'le',
    expr: '(x + 2)(x &#8722; 1)(x &#8722; 5)' }),
  'op-gt': freeze({ f: (x) => (x + 2) * (x - 1) * (x - 5), crits: [z(-2), z(1), z(5)], op: 'gt',
    expr: '(x + 2)(x &#8722; 1)(x &#8722; 5)' }),
  'op-ge': freeze({ f: (x) => (x + 2) * (x - 1) * (x - 5), crits: [z(-2), z(1), z(5)], op: 'ge',
    expr: '(x + 2)(x &#8722; 1)(x &#8722; 5)' }),
};

export default inequalityVisualizerDiagrams;
