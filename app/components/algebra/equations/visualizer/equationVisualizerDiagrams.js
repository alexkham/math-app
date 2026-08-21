// Static SVG diagrams for the algebra equation visualizer (Line 1).
// Each diagram freezes EquationVisualizer's Hero graph in one template state,
// replicating NumberLine's exact rendering pipeline from logic.js/Panels.jsx:
// same G frame (980x332, padX 46, curve band 18..202, axis 232, marble 304),
// same VIEW_DEFAULT [-8,8], same computeYRange padding, same 260-sample curve
// with Y clipping, same numeric root finder, same colors (#2563eb curve/n,
// #3b82f6/#f59e0b marble by hit, #94a3b8 ticks, #475569 axis). The marble is
// frozen at x = 0 — the position a fresh template load shows. An equation chip
// (the Hero's "expr = n" line) is drawn top-right so each frame is captioned
// by its own mathematics.

const G = {
  W: 980, padX: 46, curveTop: 18, curveBottom: 202,
  axisY: 232, trailY: 282, marbleY: 304, tickLabelY: 250, totalH: 332,
};
const VR = { lo: -8, hi: 8 };
const HOLD_TOL = 0.5;

const X = (x) => G.padX + (x - VR.lo) / (VR.hi - VR.lo) * (G.W - 2 * G.padX);
const yPos = (y, yR) => G.curveTop + (1 - (y - yR.min) / (yR.max - yR.min)) * (G.curveBottom - G.curveTop);
const Y_at = (y, yR) => (y < yR.min || y > yR.max ? null : yPos(y, yR));
const Y_clip = (y, yR) => yPos(Math.max(yR.min, Math.min(yR.max, y)), yR);

const fmt = (x) => {
  if (!Number.isFinite(x)) return '—';
  if (Math.abs(x) < 1e-9) return '0';
  if (Math.abs(x - Math.round(x)) < 1e-4) return String(Math.round(x));
  return x.toFixed(2);
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

const computeYRange = (f, n) => {
  let mn = n, mx = n;
  for (let i = 0; i <= 280; i++) {
    const y = f(VR.lo + (VR.hi - VR.lo) * i / 280);
    if (Number.isFinite(y)) { mn = Math.min(mn, y); mx = Math.max(mx, y); }
  }
  if (mx - mn < 4) { const c = (mx + mn) / 2; mn = c - 2; mx = c + 2; }
  const pad = Math.max(1, (mx - mn) * 0.1);
  return { min: mn - pad, max: mx + pad };
};

const findRoots = (f, n) => {
  const h = (x) => f(x) - n;
  const xs = [];
  let prev = null;
  for (let i = 0; i <= 1400; i++) {
    const x = VR.lo + (VR.hi - VR.lo) * i / 1400;
    const v = h(x);
    if (!Number.isFinite(v)) { prev = null; continue; }
    if (prev !== null) {
      const [px, pv] = prev;
      if (Math.abs(v) < 1e-7) xs.push(x);
      else if (pv * v < 0) {
        let lo = px, hi = x, flo = pv;
        for (let k = 0; k < 60; k++) {
          const m = 0.5 * (lo + hi);
          const fm = h(m);
          if (!Number.isFinite(fm)) break;
          if (Math.abs(fm) < 1e-7) { lo = hi = m; break; }
          if (flo * fm < 0) hi = m; else { lo = m; flo = fm; }
        }
        xs.push(0.5 * (lo + hi));
      }
    }
    prev = [x, v];
  }
  const out = [];
  for (const x of xs) if (!out.some((y) => Math.abs(y - x) < 1e-4)) out.push(x);
  return out.sort((a, b) => a - b);
};

// One frozen frame: expr chip, axes, ticks, n marker, curve, solutions, marble at x=0.
const freeze = (f, n, exprText) => {
  const yR = computeYRange(f, n);
  const y0 = (G.curveTop + G.curveBottom) / 2;
  let s = '';

  // y-axis + label + dashed midline
  s += `<line x1="${G.padX}" y1="${G.curveTop - 2}" x2="${G.padX}" y2="${G.curveBottom + 2}" stroke="#94a3b8" stroke-width="1"/>`;
  s += `<text x="${G.padX - 4}" y="${G.curveTop - 2}" font-size="10" fill="#475569" text-anchor="end" font-style="italic" font-weight="600">y</text>`;
  s += `<line x1="${G.padX}" y1="${y0}" x2="${G.W - G.padX}" y2="${y0}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>`;

  // y ticks
  const yStep = niceTickStep(yR.max - yR.min, 4);
  for (let v = Math.ceil(yR.min / yStep) * yStep; v <= yR.max + 1e-9; v += yStep) {
    if (Math.abs(v) < yStep * 0.01) v = 0;
    const py = Y_at(v, yR);
    if (py === null) continue;
    const z = Math.abs(v) < 1e-9;
    s += `<line x1="${G.padX - 3}" y1="${py.toFixed(1)}" x2="${G.padX + 3}" y2="${py.toFixed(1)}" stroke="#94a3b8" stroke-width="${z ? 1.5 : 1}"/>`;
    s += `<text x="${G.padX - 6}" y="${(py + 3).toFixed(1)}" font-size="9.5" fill="${z ? '#475569' : '#94a3b8'}" text-anchor="end" font-weight="${z ? 600 : 400}">${formatTick(v)}</text>`;
  }

  // level-n marker on the y-axis
  const pyN = Y_at(n, yR);
  if (pyN !== null) {
    s += `<line x1="${G.padX - 6}" y1="${pyN.toFixed(1)}" x2="${G.padX + 6}" y2="${pyN.toFixed(1)}" stroke="#2563eb" stroke-width="2"/>`;
    s += `<text x="${G.padX - 10}" y="${(pyN + 3).toFixed(1)}" font-size="10" fill="#2563eb" text-anchor="end" font-weight="700">n = ${fmt(n)}</text>`;
  }

  // curve (260 samples, clipped)
  let d = '';
  for (let i = 0; i <= 260; i++) {
    const x = VR.lo + (VR.hi - VR.lo) * i / 260;
    const y = f(x);
    if (!Number.isFinite(y)) continue;
    d += `${d === '' ? 'M' : 'L'}${X(x).toFixed(1)} ${Y_clip(y, yR).toFixed(1)}`;
  }
  s += `<path d="${d}" fill="none" stroke="#2563eb" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;

  // x-axis with arrowheads + integer ticks
  s += `<line x1="${G.padX}" y1="${G.axisY}" x2="${G.W - G.padX}" y2="${G.axisY}" stroke="#475569" stroke-width="1.5"/>`;
  s += `<polygon points="${G.W - G.padX},${G.axisY} ${G.W - G.padX - 9},${G.axisY - 5} ${G.W - G.padX - 9},${G.axisY + 5}" fill="#475569"/>`;
  s += `<polygon points="${G.padX},${G.axisY} ${G.padX + 9},${G.axisY - 5} ${G.padX + 9},${G.axisY + 5}" fill="#475569"/>`;
  s += `<text x="${G.W - G.padX + 6}" y="${G.axisY + 4}" font-size="11" fill="#475569" font-style="italic" font-weight="600">x</text>`;
  for (let v = Math.ceil(VR.lo); v <= Math.floor(VR.hi); v++) {
    s += `<line x1="${X(v).toFixed(1)}" y1="${G.axisY - 4}" x2="${X(v).toFixed(1)}" y2="${G.axisY + 4}" stroke="#94a3b8"/>`;
    s += `<text x="${X(v).toFixed(1)}" y="${G.tickLabelY}" font-size="10" fill="#94a3b8" text-anchor="middle">${v}</text>`;
  }

  // solution markers
  for (const x of findRoots(f, n)) {
    if (x < VR.lo || x > VR.hi) continue;
    const cx = X(x);
    if (pyN !== null) {
      s += `<line x1="${cx.toFixed(1)}" y1="${pyN.toFixed(1)}" x2="${cx.toFixed(1)}" y2="${G.axisY}" stroke="#2563eb" stroke-width="1" stroke-dasharray="2 2" opacity="0.5"/>`;
      s += `<circle cx="${cx.toFixed(1)}" cy="${pyN.toFixed(1)}" r="4.5" fill="#3b82f6" stroke="#fff" stroke-width="2"/>`;
    }
    s += `<circle cx="${cx.toFixed(1)}" cy="${G.axisY}" r="6" fill="#2563eb"/>`;
    s += `<text x="${cx.toFixed(1)}" y="${G.axisY - 9}" font-size="11" fill="#2563eb" text-anchor="middle" font-weight="700">${fmt(x)}</text>`;
  }

  // marble at x = 0 (fresh-load position) + projection + |f-n| bar
  const m = 0;
  const mx = X(m);
  const fv = f(m);
  const ok = Number.isFinite(fv) && Math.abs(fv - n) < HOLD_TOL;
  const mc = ok ? '#3b82f6' : '#f59e0b';
  const md = ok ? '#2563eb' : '#b45309';
  if (Number.isFinite(fv)) {
    const cy = Y_clip(fv, yR);
    s += `<line x1="${mx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${mx.toFixed(1)}" y2="${G.marbleY - 9}" stroke="${md}" stroke-width="1" stroke-dasharray="3 3" opacity="0.55"/>`;
    s += `<circle cx="${mx.toFixed(1)}" cy="${cy.toFixed(1)}" r="3.5" fill="${mc}" stroke="${md}" stroke-width="1.5"/>`;
    if (pyN !== null) {
      s += `<line x1="${mx.toFixed(1)}" y1="${Math.min(cy, pyN).toFixed(1)}" x2="${mx.toFixed(1)}" y2="${Math.max(cy, pyN).toFixed(1)}" stroke="#f59e0b" stroke-width="3" opacity="0.45"/>`;
    }
  }
  s += `<circle cx="${mx.toFixed(1)}" cy="${G.marbleY}" r="8" fill="${mc}" stroke="${md}" stroke-width="2"/>`;

  // equation chip (the Hero's "expr = n" line)
  s += `<rect x="${G.W - 320}" y="10" width="290" height="30" rx="8" fill="#f1f5f9" stroke="#e2e8f0"/>`;
  s += `<text x="${G.W - 175}" y="30" font-size="15" fill="#1e293b" text-anchor="middle" font-family="'Cambria Math','Times New Roman',serif">${exprText}</text>`;

  return (
    `<svg width="620" viewBox="0 0 ${G.W} ${G.totalH}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">` +
    `<rect width="${G.W}" height="${G.totalH}" fill="#fff"/>` + s + `</svg>`
  );
};

const equationVisualizerDiagrams = {
  // Linear templates + the a = 0 special state
  'lin-basic':    freeze((x) => x, 3, 'x = 3'),
  'lin-steep':    freeze((x) => 3 * x - 2, 4, '3x &#8722; 2 = 4'),
  'lin-negative': freeze((x) => -x + 5, 0, '&#8722;x + 5 = 0'),
  'lin-constant': freeze(() => 2, 3, '2 = 3'),
  // Quadratic templates
  'quad-two':  freeze((x) => x * x - 4, 0, 'x&#178; &#8722; 4 = 0'),
  'quad-one':  freeze((x) => x * x, 0, 'x&#178; = 0'),
  'quad-none': freeze((x) => x * x + 4, 0, 'x&#178; + 4 = 0'),
  'quad-high': freeze((x) => x * x - 2 * x - 3, 5, 'x&#178; &#8722; 2x &#8722; 3 = 5'),
  // Cubic templates
  'cubic-three':   freeze((x) => x * x * x - 3 * x, 0, 'x&#179; &#8722; 3x = 0'),
  'cubic-one':     freeze((x) => x * x * x, 0, 'x&#179; = 0'),
  'cubic-shifted': freeze((x) => x * x * x - 4 * x, 3, 'x&#179; &#8722; 4x = 3'),
  // Absolute-value templates
  'abs-two':  freeze((x) => Math.abs(x), 3, '|x| = 3'),
  'abs-one':  freeze((x) => Math.abs(x) + 3, 3, '|x| + 3 = 3'),
  'abs-none': freeze((x) => Math.abs(x) + 5, 2, '|x| + 5 = 2'),
};

export default equationVisualizerDiagrams;
