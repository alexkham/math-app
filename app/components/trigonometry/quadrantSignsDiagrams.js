// Static SVG diagrams for the functions-signs page sections.
// Each diagram freezes the Quadrants tool in one state: the selected quadrant
// shaded in its tool color, the sample point with radius and dashed coordinate
// drops, and (for function states) the function's sign badge. Consumed by
// getStaticProps of the page via processContent's inline-SVG pass.

const SZ = 360;
const C = 180;
const R = 120;

const QCOLOR = { 1: '#3b82f6', 2: '#22c55e', 3: '#eab308', 4: '#8b5cf6' };
const SAMPLE = { 1: 45, 2: 135, 3: 225, 4: 315 };
const COORDS = { 1: ['+', '+'], 2: ['−', '+'], 3: ['−', '−'], 4: ['+', '−'] };
const SIGNS = {
  1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
  2: { sin: '+', cos: '−', tan: '−', csc: '+', sec: '−', cot: '−' },
  3: { sin: '−', cos: '−', tan: '+', csc: '−', sec: '−', cot: '+' },
  4: { sin: '−', cos: '+', tan: '−', csc: '−', sec: '+', cot: '−' },
};
const GREEN = '#22c55e';
const RED = '#ef4444';
const GRAY = '#94a3b8';

const rad = (d) => (d * Math.PI) / 180;
const px = (r, a) => +(C + r * Math.cos(rad(a))).toFixed(2);
const py = (r, a) => +(C - r * Math.sin(rad(a))).toFixed(2);

const txt = (t, x, y, color, size = 13, weight = 600) =>
  `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="${size}" font-weight="${weight}" fill="${color}" font-family="system-ui,sans-serif">${t}</text>`;

const wrap = (inner) =>
  `<svg width="300" height="300" viewBox="0 0 ${SZ} ${SZ}" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #e5e7eb;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">${inner}</svg>`;

function base(q) {
  const start = { 1: 0, 2: 90, 3: 180, 4: 270 }[q];
  const col = QCOLOR[q];
  const romans = ['I', 'II', 'III', 'IV'];
  const qa = [45, 135, 225, 315];
  return (
    `<path d="M ${C} ${C} L ${px(R, start)} ${py(R, start)} A ${R} ${R} 0 0 0 ${px(R, start + 90)} ${py(R, start + 90)} Z" fill="${col}" opacity="0.16"/>` +
    `<circle cx="${C}" cy="${C}" r="${R}" fill="none" stroke="#d1d5db" stroke-width="1.5"/>` +
    `<line x1="${C - R - 26}" y1="${C}" x2="${C + R + 26}" y2="${C}" stroke="${GRAY}" stroke-width="1.5"/>` +
    `<line x1="${C}" y1="${C + R + 26}" x2="${C}" y2="${C - R - 26}" stroke="${GRAY}" stroke-width="1.5"/>` +
    txt('+x', C + R + 18, C - 12, GRAY, 11) + txt('−x', C - R - 18, C - 12, GRAY, 11) +
    txt('+y', C + 14, C - R - 16, GRAY, 11) + txt('−y', C + 14, C + R + 16, GRAY, 11) +
    romans.map((rm, i) => txt(rm, px(R * 0.55, qa[i]), py(R * 0.55, qa[i]), i + 1 === q ? col : '#cbd5e1', 15)).join('')
  );
}

function pointAndDrops(q) {
  const a = SAMPLE[q];
  const col = QCOLOR[q];
  const P = [px(R, a), py(R, a)];
  return (
    `<line x1="${P[0]}" y1="${P[1]}" x2="${P[0]}" y2="${C}" stroke="${col}" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.7"/>` +
    `<line x1="${P[0]}" y1="${P[1]}" x2="${C}" y2="${P[1]}" stroke="${col}" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.7"/>` +
    `<line x1="${C}" y1="${C}" x2="${P[0]}" y2="${P[1]}" stroke="${col}" stroke-width="2.5"/>` +
    txt('r', (C + P[0]) / 2 + 10, (C + P[1]) / 2 - 10, col, 12) +
    `<circle cx="${P[0]}" cy="${P[1]}" r="6" fill="${col}" stroke="#fff" stroke-width="2"/>`
  );
}

function quadrantDiagram(q) {
  const [xs, ys] = COORDS[q];
  return wrap(
    base(q) + pointAndDrops(q) +
    txt(`x: ${xs}`, 62, 30, xs === '+' ? GREEN : RED, 15) +
    txt(`y: ${ys}`, 62, 54, ys === '+' ? GREEN : RED, 15)
  );
}

function comboDiagram(fn, q) {
  const sign = SIGNS[q][fn];
  const col = sign === '+' ? GREEN : RED;
  return wrap(
    base(q) + pointAndDrops(q) +
    `<rect x="24" y="18" width="112" height="46" rx="10" fill="#f8fafc" stroke="#e5e7eb"/>` +
    txt(`${fn} θ`, 56, 41, '#334155', 15) +
    txt(sign, 108, 41, col, 26, 800)
  );
}

const quadrantSignsDiagrams = { quadrants: {}, combos: {} };
for (const q of [1, 2, 3, 4]) {
  quadrantSignsDiagrams.quadrants[q] = quadrantDiagram(q);
  quadrantSignsDiagrams.combos[q] = {};
  for (const fn of ['sin', 'cos', 'tan', 'csc', 'sec', 'cot']) {
    quadrantSignsDiagrams.combos[q][fn] = comboDiagram(fn, q);
  }
}

export default quadrantSignsDiagrams;
