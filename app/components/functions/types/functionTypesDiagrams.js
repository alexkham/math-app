// Static SVG diagrams for the function-families gallery page sections.
// Each diagram freezes the FunctionGallery / VisualizerWithControls plot in one
// family at its DEFAULT parameters, replicating the component's rendering:
// graph area #fcfcfd, grid #e5e7eb, axes #475569, curve in the accent blue
// #3b82f6 (stroke ~1.75), vertical asymptotes dashed red #ef4444 [6 4],
// axis numerals #64748b, equation label in italic serif #334155.
// Window: x in [-10, 10], y in [-6.5, 6.5] (square units at 480x300).
// Consumed by getStaticProps of the page; SVG strings are interpolated into
// section content and rendered by processContent's SVG pass.

const W = 480;
const H = 300;
const XR = 10;
const YR = 6.5;

const sx = (x) => +(((x + XR) / (2 * XR)) * W).toFixed(2);
const sy = (y) => +((H - ((y + YR) / (2 * YR)) * H)).toFixed(2);

// Default-parameter functions, copied from FAMILIES in FunctionGallery.jsx.
const FNS = {
  linear:      { f: (x) => x,                          eq: 'f(x) = x' },
  quadratic:   { f: (x) => 0.3 * x * x - 3,            eq: 'f(x) = 0.3x² − 3' },
  cubic:       { f: (x) => 0.2 * x * x * x - 2 * x,    eq: 'f(x) = 0.2x³ − 2x' },
  power:       { f: (x) => Math.pow(x, 2),             eq: 'f(x) = x²' },
  rational:    { f: (x) => 1 / x,                      eq: 'f(x) = 1 / x', asym: [0] },
  exponential: { f: (x) => Math.pow(2, x),             eq: 'f(x) = 2ˣ' },
  logarithmic: { f: (x) => (x > 0 ? Math.log(x) : NaN), eq: 'f(x) = ln(x)', asym: [0] },
  sine:        { f: (x) => Math.sin(x),                eq: 'f(x) = sin(x)' },
  cosine:      { f: (x) => Math.cos(x),                eq: 'f(x) = cos(x)' },
  tangent:     { f: (x) => Math.tan(x),                eq: 'f(x) = tan(x)',
                 asym: [-5 * Math.PI / 2, -3 * Math.PI / 2, -Math.PI / 2, Math.PI / 2, 3 * Math.PI / 2, 5 * Math.PI / 2] },
  absolute:    { f: (x) => Math.abs(x),                eq: 'f(x) = |x|' },
  sqrt:        { f: (x) => (x >= 0 ? Math.sqrt(x) : NaN), eq: 'f(x) = √x' },
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
  for (let i = 0; i <= 1000; i++) {
    const x = -XR + (i / 1000) * 2 * XR;
    const y = f(x);
    if (!Number.isFinite(y) || Math.abs(y) > LIM) {
      if (seg.length > 1) segs.push(seg);
      seg = [];
      continue;
    }
    const prev = seg[seg.length - 1];
    if (prev && Math.abs(y - prev[1]) > LIM) {          // asymptote jump inside a segment
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
  for (const a of spec.asym || []) {
    out += `<line x1="${sx(a)}" y1="0" x2="${sx(a)}" y2="${H}" stroke="#ef4444" stroke-width="1.25" stroke-dasharray="6 4" opacity="0.8"/>`;
  }
  out += `<path d="${curvePath(spec.f)}" fill="none" stroke="#3b82f6" stroke-width="1.75"/>`;
  out += `<rect x="8" y="8" width="${10 + spec.eq.length * 6.6}" height="20" rx="4" fill="#fff" stroke="#cbd5e1" opacity="0.92"/>` +
         `<text x="14" y="22" font-size="12" font-style="italic" fill="#334155" font-family="Georgia,serif">${spec.eq}</text>`;
  return `<svg width="400" height="250" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
         `style="border:1px solid #cbd5e1;background:#fcfcfd;border-radius:12px;max-width:100%;display:block;margin:12px auto">${out}</svg>`;
}

const functionTypesDiagrams = {};
for (const key of Object.keys(FNS)) functionTypesDiagrams[key] = diagram(key);

export default functionTypesDiagrams;
