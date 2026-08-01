// Static SVG diagrams for the function-composition page sections.
// Each diagram freezes the FunctionComposition visualizer on one (outer, inner)
// pair in its default view - only the two composed curves shown, using the
// component's color code: f(g(x)) solid blue #3b82f6 (stroke 2.5), g(f(x))
// solid amber #f59e0b (stroke 2.5). Grid/axes match the shared plot style.
// Window: x in [-10, 10], y in [-6.5, 6.5] (square units at 480x300).

const W = 480;
const H = 300;
const XR = 10;
const YR = 6.5;

const sx = (x) => +(((x + XR) / (2 * XR)) * W).toFixed(2);
const sy = (y) => +((H - ((y + YR) / (2 * YR)) * H)).toFixed(2);

// Base functions, copied from FAMILIES in FunctionCompositions.jsx.
const BASE = {
  identity: x => x,
  quadratic: x => x * x,
  cubic: x => x * x * x,
  reciprocal: x => (x === 0 ? NaN : 1 / x),
  exponential: x => Math.exp(x),
  logarithmic: x => (x > 0 ? Math.log(x) : NaN),
  sine: x => Math.sin(x),
  cosine: x => Math.cos(x),
  absolute: x => Math.abs(x),
  sqrt: x => (x >= 0 ? Math.sqrt(x) : NaN),
};

const compose = (o, i) => (x) => {
  const inside = BASE[i](x);
  if (!Number.isFinite(inside)) return NaN;
  return BASE[o](inside);
};

// Frozen pair per diagram key: [outer, inner, fogLabel, gofLabel]
const PAIRS = {
  identity:    ['identity', 'quadratic', 'f(g(x)) = x²', 'g(f(x)) = x²'],
  quadratic:   ['quadratic', 'sine', 'f(g(x)) = (sin x)²', 'g(f(x)) = sin(x²)'],
  cubic:       ['cubic', 'sine', 'f(g(x)) = (sin x)³', 'g(f(x)) = sin(x³)'],
  reciprocal:  ['reciprocal', 'sine', 'f(g(x)) = 1/sin(x)', 'g(f(x)) = sin(1/x)'],
  exponential: ['exponential', 'sine', 'f(g(x)) = e^(sin x)', 'g(f(x)) = sin(eˣ)'],
  logarithmic: ['logarithmic', 'quadratic', 'f(g(x)) = ln(x²)', 'g(f(x)) = (ln x)²'],
  sine:        ['sine', 'quadratic', 'f(g(x)) = sin(x²)', 'g(f(x)) = (sin x)²'],
  cosine:      ['cosine', 'quadratic', 'f(g(x)) = cos(x²)', 'g(f(x)) = (cos x)²'],
  absolute:    ['absolute', 'sine', 'f(g(x)) = |sin x|', 'g(f(x)) = sin|x|'],
  sqrt:        ['sqrt', 'sine', 'f(g(x)) = √(sin x)', 'g(f(x)) = sin(√x)'],
  inversePair: ['exponential', 'logarithmic', 'f(g(x)) = e^(ln x) = x', 'g(f(x)) = ln(eˣ) = x'],
  sqrtSquare:  ['sqrt', 'quadratic', 'f(g(x)) = √(x²) = |x|', 'g(f(x)) = (√x)² = x'],
  selfCompose: ['quadratic', 'quadratic', 'f(g(x)) = x⁴', 'g(f(x)) = x⁴'],
};

function grid() {
  let out = '';
  for (let x = -10; x <= 10; x += 2) {
    if (x !== 0) out += `<line x1="${sx(x)}" y1="0" x2="${sx(x)}" y2="${H}" stroke="#e5e7eb" stroke-width="1"/>`;
  }
  for (let y = -6; y <= 6; y += 2) {
    if (y !== 0) out += `<line x1="0" y1="${sy(y)}" x2="${W}" y2="${sy(y)}" stroke="#e5e7eb" stroke-width="1"/>`;
  }
  out += `<line x1="0" y1="${sy(0)}" x2="${W}" y2="${sy(0)}" stroke="#475569" stroke-width="1.5"/>`;
  out += `<line x1="${sx(0)}" y1="0" x2="${sx(0)}" y2="${H}" stroke="#475569" stroke-width="1.5"/>`;
  for (const x of [-10, -5, 5, 10]) {
    out += `<text x="${sx(x) + (x === 10 ? -14 : 3)}" y="${sy(0) + 13}" font-size="10" fill="#64748b" font-family="system-ui,sans-serif">${x}</text>`;
  }
  for (const y of [-5, 5]) {
    out += `<text x="${sx(0) + 4}" y="${sy(y) - 3}" font-size="10" fill="#64748b" font-family="system-ui,sans-serif">${y}</text>`;
  }
  return out;
}

function curvePath(f, samples = 1600) {
  const segs = [];
  let seg = [];
  const LIM = YR * 3;
  for (let i = 0; i <= samples; i++) {
    const x = -XR + (i / samples) * 2 * XR;
    const y = f(x);
    if (!Number.isFinite(y) || Math.abs(y) > LIM) {
      if (seg.length > 1) segs.push(seg);
      seg = [];
      continue;
    }
    const prev = seg[seg.length - 1];
    if (prev && Math.abs(y - prev[1]) > LIM) {
      if (seg.length > 1) segs.push(seg);
      seg = [];
    }
    seg.push([x, y]);
  }
  if (seg.length > 1) segs.push(seg);
  return segs
    .map((s) => 'M ' + s.map(([x, y]) => `${sx(x)} ${sy(Math.max(-LIM, Math.min(LIM, y)))}`).join(' L '))
    .join(' ');
}

function chip(x, text, color) {
  const w = 10 + text.length * 6.4;
  return `<rect x="${x}" y="8" width="${w}" height="20" rx="4" fill="#fff" stroke="${color}" opacity="0.94"/>` +
         `<text x="${x + 6}" y="22" font-size="11.5" font-style="italic" fill="${color}" font-family="Georgia,serif">${text}</text>`;
}

function diagram(key) {
  const [o, i, fogLabel, gofLabel] = PAIRS[key];
  let out = `<rect width="${W}" height="${H}" fill="#fcfcfd"/>` + grid();
  out += `<path d="${curvePath(compose(i, o))}" fill="none" stroke="#f59e0b" stroke-width="2.5"/>`;
  out += `<path d="${curvePath(compose(o, i))}" fill="none" stroke="#3b82f6" stroke-width="2.5"${key === 'selfCompose' || key === 'identity' ? ' stroke-dasharray="8 5"' : ''}/>`;
  out += chip(8, fogLabel, '#3b82f6');
  out += chip(8 + 18 + fogLabel.length * 6.4, gofLabel, '#b45309');
  return `<svg width="400" height="250" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
         `style="border:1px solid #cbd5e1;background:#fcfcfd;border-radius:12px;max-width:100%;display:block;margin:12px auto">${out}</svg>`;
}

const functionCompositionDiagrams = {};
for (const key of Object.keys(PAIRS)) functionCompositionDiagrams[key] = diagram(key);

export default functionCompositionDiagrams;
