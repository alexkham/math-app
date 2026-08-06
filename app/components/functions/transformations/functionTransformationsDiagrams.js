// Static SVG diagrams for the function-transformations page sections.
// Each diagram freezes the FunctionTransformations visualizer on one tab,
// applied to the default quadratic base: original f dashed gray #94a3b8,
// transformed g solid blue #3b82f6 - matching the component's two-curve view.
// Window: x in [-10, 10], y in [-6.5, 6.5] (square units at 480x300).

const W = 480;
const H = 300;
const XR = 10;
const YR = 6.5;

const sx = (x) => +(((x + XR) / (2 * XR)) * W).toFixed(2);
const sy = (y) => +((H - ((y + YR) / (2 * YR)) * H)).toFixed(2);

const BASE = (x) => x * x;

// One frozen scene per tab, at a representative parameter value.
const STATES = {
  a:      { g: (x) => 2 * BASE(x),                 eq: 'g(x) = 2 · f(x)' },
  k:      { g: (x) => BASE(x) + 3,                 eq: 'g(x) = f(x) + 3' },
  b:      { g: (x) => BASE(2 * x),                 eq: 'g(x) = f(2x)' },
  h:      { g: (x) => BASE(x - 3),                 eq: 'g(x) = f(x − 3)' },
  custom: { g: (x) => 0.5 * BASE(1.5 * (x - 2)) + 1, eq: 'g(x) = 0.5 · f(1.5(x − 2)) + 1' },
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
  out += `<path d="${curvePath(BASE)}" fill="none" stroke="#94a3b8" stroke-width="1.75" stroke-dasharray="5 4"/>`;
  out += `<path d="${curvePath(spec.g)}" fill="none" stroke="#3b82f6" stroke-width="2.25"/>`;
  out += `<rect x="8" y="8" width="${10 + spec.eq.length * 6.4}" height="20" rx="4" fill="#fff" stroke="#cbd5e1" opacity="0.92"/>` +
         `<text x="14" y="22" font-size="11.5" font-style="italic" fill="#334155" font-family="Georgia,serif">${spec.eq}</text>`;
  return `<svg width="400" height="250" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
         `style="border:1px solid #cbd5e1;background:#fcfcfd;border-radius:12px;max-width:100%;display:block;margin:12px auto">${out}</svg>`;
}

const functionTransformationsDiagrams = {};
for (const key of Object.keys(STATES)) functionTransformationsDiagrams[key] = diagram(key);

export default functionTransformationsDiagrams;
