// Static SVG diagrams for the tangent-line page sections.
// Each diagram freezes the TangentLine visualizer in one family at default
// parameters with the tangent point at a representative x0, replicating the
// component's rendering: curve #3b82f6, tangent line #f59e0b, tangent point
// as an amber dot. Families whose tangent coincides with the curve (lines,
// the arms of |x|) dash the tangent so the coincidence stays visible.
// Window: x in [-10, 10], y in [-6.5, 6.5] (square units at 480x300).

const W = 480;
const H = 300;
const XR = 10;
const YR = 6.5;
const PI = Math.PI;

const sx = (x) => +(((x + XR) / (2 * XR)) * W).toFixed(2);
const sy = (y) => +((H - ((y + YR) / (2 * YR)) * H)).toFixed(2);

// Base functions and derivatives, copied from FAMILIES in TangentLine.jsx.
// x0: frozen tangent point. dash: tangent coincides with (part of) the curve.
const FNS = {
  identity:    { f: (x) => x, d: () => 1, x0: 2, eq: 'f(x) = x · x&#8320; = 2', dash: true },
  linearScale: { f: (x) => 2 * x, d: () => 2, x0: 1, eq: 'f(x) = 2x · x&#8320; = 1', dash: true },
  quadratic:   { f: (x) => x * x, d: (x) => 2 * x, x0: 1.5, eq: 'f(x) = x² · x&#8320; = 1.5' },
  cubic:       { f: (x) => x * x * x, d: (x) => 3 * x * x, x0: 1, eq: 'f(x) = x³ · x&#8320; = 1' },
  reciprocal:  { f: (x) => (x === 0 ? NaN : 1 / x), d: (x) => -1 / (x * x), x0: 1, eq: 'f(x) = 1/x · x&#8320; = 1' },
  exponential: { f: (x) => Math.exp(x), d: (x) => Math.exp(x), x0: 1, eq: 'f(x) = eˣ · x&#8320; = 1' },
  logarithmic: { f: (x) => (x > 0 ? Math.log(x) : NaN), d: (x) => 1 / x, x0: 2, eq: 'f(x) = ln(x) · x&#8320; = 2' },
  sqrt:        { f: (x) => (x >= 0 ? Math.sqrt(x) : NaN), d: (x) => 1 / (2 * Math.sqrt(x)), x0: 4, eq: 'f(x) = √x · x&#8320; = 4' },
  absolute:    { f: (x) => Math.abs(x), d: (x) => (x > 0 ? 1 : -1), x0: 2, eq: 'f(x) = |x| · x&#8320; = 2', dash: true },
  sine:        { f: (x) => Math.sin(x), d: (x) => Math.cos(x), x0: 0, eq: 'f(x) = sin(x) · x&#8320; = 0' },
  cosine:      { f: (x) => Math.cos(x), d: (x) => -Math.sin(x), x0: PI / 2, eq: 'f(x) = cos(x) · x&#8320; = π/2' },
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
  const spec = FNS[key];
  const y0 = spec.f(spec.x0);
  const m = spec.d(spec.x0);
  let out = `<rect width="${W}" height="${H}" fill="#fcfcfd"/>` + grid();
  out += `<path d="${curvePath(spec.f)}" fill="none" stroke="#3b82f6" stroke-width="2"/>`;
  const tangent = (x) => y0 + m * (x - spec.x0);
  out += `<path d="${curvePath(tangent)}" fill="none" stroke="#f59e0b" stroke-width="1.75"${spec.dash ? ' stroke-dasharray="8 6"' : ''}/>`;
  out += `<circle cx="${sx(spec.x0)}" cy="${sy(y0)}" r="5.5" fill="#f59e0b" stroke="#fff" stroke-width="2"/>`;
  const eq = spec.eq;
  out += `<rect x="8" y="8" width="${10 + eq.replace(/&#[0-9]+;/g, 'x').length * 6.4}" height="20" rx="4" fill="#fff" stroke="#cbd5e1" opacity="0.92"/>` +
         `<text x="14" y="22" font-size="11.5" font-style="italic" fill="#334155" font-family="Georgia,serif">${eq}</text>`;
  return `<svg width="400" height="250" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
         `style="border:1px solid #cbd5e1;background:#fcfcfd;border-radius:12px;max-width:100%;display:block;margin:12px auto">${out}</svg>`;
}

const tangentLineDiagrams = {};
for (const key of Object.keys(FNS)) tangentLineDiagrams[key] = diagram(key);

export default tangentLineDiagrams;
