// Static SVG diagrams for the function-reflections page sections.
// Each diagram freezes the FunctionReflections visualizer in one reflection
// mode, replicating the component's rendering: the original f dashed gray
// #94a3b8, the reflected g solid blue #3b82f6, mirror lines dashed amber
// #f59e0b. Base functions are chosen per state so the move is unmistakable.
// Window: x in [-10, 10], y in [-6.5, 6.5] (square units at 480x300).

const W = 480;
const H = 300;
const XR = 10;
const YR = 6.5;

const sx = (x) => +(((x + XR) / (2 * XR)) * W).toFixed(2);
const sy = (y) => +((H - ((y + YR) / (2 * YR)) * H)).toFixed(2);

const SQ = (x) => x * x;
const SQRT = (x) => (x >= 0 ? Math.sqrt(x) : NaN);
const SIN = (x) => Math.sin(x);

// One frozen scene per reflection state: original, reflected curve(s), mirror line.
const STATES = {
  xAxis: { f: SQ, g: [(x) => -SQ(x)], eq: 'g(x) = −x²', mirror: { y: 0 } },
  yAxis: { f: SQRT, g: [(x) => SQRT(-x)], eq: 'g(x) = √(−x)', mirror: { x: 0 } },
  yEqX:  { f: SQ, g: [(x) => SQRT(x), (x) => -SQRT(x)], eq: 'x = y² (both branches)', diag: true },
  yLine: { f: SQ, g: [(x) => 2 * 1 - SQ(x)], eq: 'g(x) = 2 − x²', mirror: { y: 1 } },
  xLine: { f: SQRT, g: [(x) => SQRT(2 * 1 - x)], eq: 'g(x) = √(2 − x)', mirror: { x: 1 } },
  absF:  { f: SIN, g: [(x) => Math.abs(SIN(x))], eq: 'g(x) = |sin x|' },
  fAbs:  { f: SQRT, g: [(x) => SQRT(Math.abs(x))], eq: 'g(x) = √|x|' },
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

function curvePath(f) {
  const segs = [];
  let seg = [];
  const LIM = YR * 3;
  for (let i = 0; i <= 1200; i++) {
    const x = -XR + (i / 1200) * 2 * XR;
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

function diagram(key) {
  const spec = STATES[key];
  let out = `<rect width="${W}" height="${H}" fill="#fcfcfd"/>` + grid();
  if (spec.diag) {
    out += `<line x1="${sx(-YR)}" y1="${sy(-YR)}" x2="${sx(YR)}" y2="${sy(YR)}" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4"/>`;
  }
  if (spec.mirror) {
    if (spec.mirror.x !== undefined && spec.mirror.x !== 0) {
      out += `<line x1="${sx(spec.mirror.x)}" y1="0" x2="${sx(spec.mirror.x)}" y2="${H}" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4"/>`;
    }
    if (spec.mirror.y !== undefined && spec.mirror.y !== 0) {
      out += `<line x1="0" y1="${sy(spec.mirror.y)}" x2="${W}" y2="${sy(spec.mirror.y)}" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4"/>`;
    }
  }
  out += `<path d="${curvePath(spec.f)}" fill="none" stroke="#94a3b8" stroke-width="1.75" stroke-dasharray="5 4"/>`;
  for (const g of spec.g) {
    out += `<path d="${curvePath(g)}" fill="none" stroke="#3b82f6" stroke-width="2.25"/>`;
  }
  out += `<rect x="8" y="8" width="${10 + spec.eq.length * 6.4}" height="20" rx="4" fill="#fff" stroke="#cbd5e1" opacity="0.92"/>` +
         `<text x="14" y="22" font-size="11.5" font-style="italic" fill="#334155" font-family="Georgia,serif">${spec.eq}</text>`;
  return `<svg width="400" height="250" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
         `style="border:1px solid #cbd5e1;background:#fcfcfd;border-radius:12px;max-width:100%;display:block;margin:12px auto">${out}</svg>`;
}

const functionReflectionsDiagrams = {};
for (const key of Object.keys(STATES)) functionReflectionsDiagrams[key] = diagram(key);

export default functionReflectionsDiagrams;
