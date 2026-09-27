// Static SVG diagrams for the function-parameters tool page (Line 1).
// Each diagram freezes SinusoidalParameterExplorer in one state of the guided
// walk: the same window, the same curve sampling, the same four parameter
// colours, and the same annotations the live tool draws - amplitude bracket,
// max/min dots, period bracket, phase-shift bar, midline.
//
// Consumed by the page's getStaticProps through demoUnitFrame. The renderer
// below duplicates the component's layout maths on purpose: a new file never
// edits the component (project rule), and the two must stay in step by value,
// not by import.

const FN_DEF = {
  sin: { f: Math.sin, period: 2 * Math.PI, bounded: true },
  cos: { f: Math.cos, period: 2 * Math.PI, bounded: true },
  tan: { f: Math.tan, period: Math.PI, bounded: false },
  cot: { f: (t) => 1 / Math.tan(t), period: Math.PI, bounded: false },
};

const C = {
  A: '#dc2626',
  B: '#b45309',
  C: '#7c3aed',
  D: '#475569',
  curve: '#1d6bd8',
  asymptote: '#ff6b6b',
  grid: '#f0f0f0',
  reference: '#94a3b8',
  muted: '#475569',
};

const W = 880;
const H = 356;
const X0 = -2 * Math.PI;
const X1 = 2 * Math.PI;
const L = 46;
const R = 856;
const T = 22;
const BT = 330;

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const piFraction = (n, d) => {
  if (n === 0) return '0';
  const sign = n < 0 ? '-' : '';
  let a = Math.abs(n);
  const k = gcd(a, d);
  a /= k;
  const dd = d / k;
  const num = a === 1 ? '' : a;
  return dd === 1 ? `${sign}${num}π` : `${sign}${num}π/${dd}`;
};

const piMultiple = (v) => {
  const r = Math.round((v / Math.PI) * 100) / 100;
  if (r === 0) return '0';
  if (r === 1) return 'π';
  if (r === -1) return '-π';
  return `${r}π`;
};

const txt = (x, y, fill, anchor, str, weight) =>
  `<text x="${(+x).toFixed(1)}" y="${(+y).toFixed(1)}" text-anchor="${anchor}" font-family="system-ui, sans-serif" font-size="11"${weight ? ' font-weight="600"' : ''} fill="${fill}">${str}</text>`;

/**
 * Freeze one state of the explorer.
 * @param {object} s
 * @param {'sin'|'cos'|'tan'|'cot'} s.fn
 * @param {number} s.A amplitude factor
 * @param {number} s.B input factor
 * @param {number} s.Cn phase term in twelfths of pi
 * @param {number} s.D vertical shift
 * @returns {string} SVG string
 */
function renderState({ fn = 'sin', A = 1, B = 1, Cn = 0, D = 0 }) {
  const spec = FN_DEF[fn] || FN_DEF.sin;
  const bounded = spec.bounded;
  const Cv = (Cn * Math.PI) / 12;
  const period = spec.period / B;
  const shift = Cv / B;
  const cLabel = piFraction(Cn, 12);
  const YM = bounded ? Math.max(2.2, Math.abs(D) + Math.abs(A) + 0.9) : 3.2;

  const px = (x) => L + ((x - X0) / (X1 - X0)) * (R - L);
  const py = (y) => (T + BT) / 2 - (y / YM) * ((BT - T) / 2);

  const build = (amp) => {
    const out = [];
    let cur = '';
    let prev = null;
    const n = 1000;
    for (let i = 0; i <= n; i++) {
      const x = X0 + ((X1 - X0) * i) / n;
      const y = amp * spec.f(B * x - Cv) + D;
      if (!isFinite(y) || (!bounded && Math.abs(y) > YM)) {
        if (cur) out.push(cur);
        cur = '';
        prev = null;
        continue;
      }
      if (!bounded && prev !== null && Math.abs(y - prev) > 3) {
        out.push(cur);
        cur = '';
      }
      cur += `${cur ? ' L ' : 'M '}${px(x).toFixed(1)} ${py(y).toFixed(1)}`;
      prev = y;
    }
    if (cur) out.push(cur);
    return out;
  };

  const o = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" style="display:block;max-width:100%;height:auto">`,
    `<title>y = ${A.toFixed(1)} ${fn}(${B.toFixed(2)}x - ${cLabel}) + ${D.toFixed(1)}</title>`,
  ];

  for (let k = -4; k <= 4; k++) {
    const xv = (k * Math.PI) / 2;
    o.push(`<line x1="${px(xv).toFixed(1)}" y1="${T}" x2="${px(xv).toFixed(1)}" y2="${BT}" stroke="${C.grid}" stroke-width="1"/>`);
    o.push(txt(px(xv), BT + 16, C.muted, 'middle', piFraction(k, 2)));
  }

  o.push(`<line x1="${L}" y1="${py(0).toFixed(1)}" x2="${R}" y2="${py(0).toFixed(1)}" stroke="${C.reference}" stroke-width="1"/>`);
  o.push(`<line x1="${px(0).toFixed(1)}" y1="${T}" x2="${px(0).toFixed(1)}" y2="${BT}" stroke="${C.reference}" stroke-width="1"/>`);

  if (!bounded) {
    const base = fn === 'tan' ? Math.PI / 2 : 0;
    for (let m = -8; m <= 8; m++) {
      const xa = (base + m * Math.PI + Cv) / B;
      if (xa < X0 || xa > X1) continue;
      o.push(`<line x1="${px(xa).toFixed(1)}" y1="${T}" x2="${px(xa).toFixed(1)}" y2="${BT}" stroke="${C.asymptote}" stroke-width="1" stroke-dasharray="4 4"/>`);
    }
  }

  o.push(`<line x1="${L}" y1="${py(D).toFixed(1)}" x2="${R}" y2="${py(D).toFixed(1)}" stroke="${C.D}" stroke-width="1.4" stroke-dasharray="6 4"/>`);
  o.push(txt(R - 4, py(D) - 6, C.D, 'end', `D — midline y = ${D.toFixed(1)}`, true));

  if (A < 0 && bounded) {
    build(-A).forEach((d) => {
      o.push(`<path d="${d}" fill="none" stroke="${C.reference}" stroke-width="1.5" stroke-dasharray="5 4"/>`);
    });
  }
  build(A).forEach((d) => {
    o.push(`<path d="${d}" fill="none" stroke="${C.curve}" stroke-width="3" stroke-linejoin="round"/>`);
  });

  if (bounded) {
    const off = fn === 'sin' ? (A >= 0 ? Math.PI / 2 : (3 * Math.PI) / 2) : (A >= 0 ? 0 : Math.PI);
    let peakX = shift + off / B;
    while (peakX > X1 - 0.5) peakX -= period;
    while (peakX < X0 + 0.5) peakX += period;
    const top = D + Math.abs(A);
    const bottom = D - Math.abs(A);

    o.push(`<line x1="${px(peakX).toFixed(1)}" y1="${py(D).toFixed(1)}" x2="${px(peakX).toFixed(1)}" y2="${py(top).toFixed(1)}" stroke="${C.A}" stroke-width="1.8"/>`);
    o.push(`<line x1="${(px(peakX) - 6).toFixed(1)}" y1="${py(top).toFixed(1)}" x2="${(px(peakX) + 6).toFixed(1)}" y2="${py(top).toFixed(1)}" stroke="${C.A}" stroke-width="1.8"/>`);
    o.push(txt(px(peakX) + 9, (py(D) + py(top)) / 2 + 4, C.A, 'start', `A — |A| = ${Math.abs(A).toFixed(1)}`, true));

    let maxX = shift + (fn === 'cos' ? 0 : Math.PI / 2) / B;
    let minX = maxX + period / 2;
    if (A < 0) {
      const swap = maxX;
      maxX = minX;
      minX = swap;
    }
    while (maxX > X1) maxX -= period;
    while (maxX < X0) maxX += period;
    while (minX > X1) minX -= period;
    while (minX < X0) minX += period;

    o.push(`<circle cx="${px(maxX).toFixed(1)}" cy="${py(top).toFixed(1)}" r="4" fill="${C.A}"/>`);
    o.push(txt(px(maxX), py(top) - 9, C.A, 'middle', `max = D + |A| = ${top.toFixed(1)}`));
    o.push(`<circle cx="${px(minX).toFixed(1)}" cy="${py(bottom).toFixed(1)}" r="4" fill="${C.A}"/>`);
    o.push(txt(px(minX), py(bottom) + 17, C.A, 'middle', `min = D - |A| = ${bottom.toFixed(1)}`));
  }

  let cycleStart = shift;
  while (cycleStart < X0 + 0.001) cycleStart += period;
  while (cycleStart - period >= X0) cycleStart -= period;
  const cycleEnd = cycleStart + period;
  if (cycleEnd <= X1) {
    const yb = BT - 8;
    o.push(`<line x1="${px(cycleStart).toFixed(1)}" y1="${py(D).toFixed(1)}" x2="${px(cycleStart).toFixed(1)}" y2="${yb}" stroke="${C.B}" stroke-width="1" stroke-dasharray="3 3"/>`);
    o.push(`<line x1="${px(cycleEnd).toFixed(1)}" y1="${py(D).toFixed(1)}" x2="${px(cycleEnd).toFixed(1)}" y2="${yb}" stroke="${C.B}" stroke-width="1" stroke-dasharray="3 3"/>`);
    o.push(`<line x1="${px(cycleStart).toFixed(1)}" y1="${yb}" x2="${px(cycleEnd).toFixed(1)}" y2="${yb}" stroke="${C.B}" stroke-width="1.8"/>`);
    o.push(txt((px(cycleStart) + px(cycleEnd)) / 2, yb - 6, C.B, 'middle', `B — period = ${piMultiple(period)}`, true));
  }

  if (Math.abs(shift) > 1e-9) {
    const ys = T - 6;
    o.push(`<line x1="${px(0).toFixed(1)}" y1="${ys}" x2="${px(shift).toFixed(1)}" y2="${ys}" stroke="${C.C}" stroke-width="1.8"/>`);
    o.push(`<line x1="${px(0).toFixed(1)}" y1="${ys - 5}" x2="${px(0).toFixed(1)}" y2="${ys + 5}" stroke="${C.C}" stroke-width="1.8"/>`);
    o.push(`<line x1="${px(shift).toFixed(1)}" y1="${ys - 5}" x2="${px(shift).toFixed(1)}" y2="${ys + 5}" stroke="${C.C}" stroke-width="1.8"/>`);
    o.push(txt((px(0) + px(shift)) / 2, ys - 7, C.C, 'middle', `C — shift C/B = ${piMultiple(shift)}`, true));
  }

  o.push('</svg>');
  return o.join('');
}

/* The eight states of the guided walk, in walk order. */
const STATES = {
  generalForm: { fn: 'sin', A: 1, B: 1, Cn: 0, D: 0 },
  amplitude: { fn: 'sin', A: 3, B: 1, Cn: 0, D: 0 },
  reflection: { fn: 'sin', A: -2, B: 1, Cn: 0, D: 0 },
  period: { fn: 'sin', A: 1, B: 2, Cn: 0, D: 0 },
  phaseShift: { fn: 'sin', A: 1, B: 2, Cn: 12, D: 0 },
  verticalShift: { fn: 'sin', A: 1, B: 1, Cn: 0, D: 2 },
  allFour: { fn: 'sin', A: 2, B: 2, Cn: 12, D: 1 },
  tangent: { fn: 'tan', A: 1, B: 1, Cn: 0, D: 0 },
};

const functionParametersDiagrams = Object.keys(STATES).reduce((acc, key) => {
  acc[key] = renderState(STATES[key]);
  return acc;
}, {});

export { renderState, STATES };
export default functionParametersDiagrams;
