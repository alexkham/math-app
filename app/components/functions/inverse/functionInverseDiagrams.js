// Static SVG diagrams for the inverse-function page sections.
// Each diagram freezes the FunctionInverse visualizer in one family at default
// parameters, replicating the component's rendering: f #3b82f6, f-inverse
// #f59e0b, mirror line y = x dashed #94a3b8, and - for restricted families -
// the full unrestricted curve faded #cbd5e1 beneath the solid kept branch.
// Self-inverse families dash the amber curve so the coincidence stays visible.
// Window: x in [-10, 10], y in [-6.5, 6.5] (square units at 480x300).

const W = 480;
const H = 300;
const XR = 10;
const YR = 6.5;
const PI = Math.PI;

const sx = (x) => +(((x + XR) / (2 * XR)) * W).toFixed(2);
const sy = (y) => +((H - ((y + YR) / (2 * YR)) * H)).toFixed(2);

// Base pairs at default parameters, copied from FAMILIES in FunctionInverse.jsx.
// fFull: optional faded full curve; f: the (kept branch of the) function over [d0, d1];
// inv: the inverse over [i0, i1]; self: dash the inverse (coincides with f).
const FNS = {
  identity:    { f: (x) => x, eq: 'f(x) = x · f⁻¹(x) = x', self: true },
  linearScale: { f: (x) => 2 * x, inv: (x) => x / 2, eq: 'f(x) = 2x · f⁻¹(x) = x/2' },
  cubic:       { f: (x) => x * x * x, inv: (x) => Math.cbrt(x), eq: 'f(x) = x³ · f⁻¹(x) = ∛x' },
  reciprocal:  { f: (x) => (x === 0 ? NaN : 1 / x), eq: 'f(x) = 1/x · f⁻¹ = f', self: true },
  exponential: { f: (x) => Math.exp(x), inv: (x) => (x > 0 ? Math.log(x) : NaN), eq: 'f(x) = eˣ · f⁻¹(x) = ln(x)' },
  logarithmic: { f: (x) => (x > 0 ? Math.log(x) : NaN), inv: (x) => Math.exp(x), eq: 'f(x) = ln(x) · f⁻¹(x) = eˣ' },
  quadratic:   { fFull: (x) => x * x, f: (x) => (x >= 0 ? x * x : NaN), inv: (x) => (x >= 0 ? Math.sqrt(x) : NaN),
                 eq: 'f(x) = x² (x ≥ 0) · f⁻¹(x) = √x' },
  sqrt:        { f: (x) => (x >= 0 ? Math.sqrt(x) : NaN), inv: (x) => (x >= 0 ? x * x : NaN),
                 eq: 'f(x) = √x · f⁻¹(x) = x² (x ≥ 0)' },
  absolute:    { fFull: (x) => Math.abs(x), f: (x) => (x >= 0 ? x : NaN), inv: (x) => (x >= 0 ? x : NaN),
                 eq: 'f(x) = |x| (x ≥ 0) · f⁻¹(x) = x' },
  sine:        { fFull: (x) => Math.sin(x), f: (x) => (x >= -PI / 2 && x <= PI / 2 ? Math.sin(x) : NaN),
                 inv: (x) => (x >= -1 && x <= 1 ? Math.asin(x) : NaN), eq: 'f(x) = sin(x) on [−π/2, π/2] · f⁻¹ = arcsin' },
  cosine:      { fFull: (x) => Math.cos(x), f: (x) => (x >= 0 && x <= PI ? Math.cos(x) : NaN),
                 inv: (x) => (x >= -1 && x <= 1 ? Math.acos(x) : NaN), eq: 'f(x) = cos(x) on [0, π] · f⁻¹ = arccos' },
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
  let out = `<rect width="${W}" height="${H}" fill="#fcfcfd"/>` + grid();
  out += `<line x1="${sx(-YR)}" y1="${sy(-YR)}" x2="${sx(YR)}" y2="${sy(YR)}" stroke="#94a3b8" stroke-width="1.25" stroke-dasharray="5 4"/>`;
  if (spec.fFull) out += `<path d="${curvePath(spec.fFull)}" fill="none" stroke="#cbd5e1" stroke-width="1.75"/>`;
  out += `<path d="${curvePath(spec.f)}" fill="none" stroke="#3b82f6" stroke-width="2"/>`;
  if (spec.inv) out += `<path d="${curvePath(spec.inv)}" fill="none" stroke="#f59e0b" stroke-width="2"/>`;
  if (spec.self) out += `<path d="${curvePath(spec.f)}" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="8 6"/>`;
  out += `<rect x="8" y="8" width="${10 + spec.eq.length * 6.2}" height="20" rx="4" fill="#fff" stroke="#cbd5e1" opacity="0.92"/>` +
         `<text x="14" y="22" font-size="11.5" font-style="italic" fill="#334155" font-family="Georgia,serif">${spec.eq}</text>`;
  return `<svg width="400" height="250" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
         `style="border:1px solid #cbd5e1;background:#fcfcfd;border-radius:12px;max-width:100%;display:block;margin:12px auto">${out}</svg>`;
}

const functionInverseDiagrams = {};
for (const key of Object.keys(FNS)) functionInverseDiagrams[key] = diagram(key);

export default functionInverseDiagrams;
