// Static SVG diagrams for the function-range page sections.
// Each diagram freezes the FunctionRange visualizer in one family at default
// parameters, replicating the component's rendering: curve #3b82f6, y-axis
// range highlight - green #10b981 band over the outputs the function actually
// produces, red #ef4444 where it never lands, with open/closed endpoint markers.
// Window: x in [-10, 10], y in [-6.5, 6.5] (square units at 480x300).

const W = 480;
const H = 300;
const XR = 10;
const YR = 6.5;

const sx = (x) => +(((x + XR) / (2 * XR)) * W).toFixed(2);
const sy = (y) => +((H - ((y + YR) / (2 * YR)) * H)).toFixed(2);

// Base functions at default parameters, copied from FAMILIES in FunctionRange.jsx.
// bands: [from, to, inRange] along the y-axis; pts: [y, 'open'|'closed']
const FNS = {
  identity:    { f: (x) => x,               eq: 'f(x) = x',    bands: [[-6.5, 6.5, true]], pts: [] },
  linearScale: { f: (x) => 2 * x,           eq: 'f(x) = 2x',   bands: [[-6.5, 6.5, true]], pts: [] },
  cubic:       { f: (x) => x * x * x,       eq: 'f(x) = x³', bands: [[-6.5, 6.5, true]], pts: [] },
  logarithmic: { f: (x) => (x > 0 ? Math.log(x) : NaN), eq: 'f(x) = ln(x)', bands: [[-6.5, 6.5, true]], pts: [] },
  quadratic:   { f: (x) => x * x,           eq: 'f(x) = x²', bands: [[-6.5, 0, false], [0, 6.5, true]], pts: [[0, 'closed']] },
  absolute:    { f: (x) => Math.abs(x),     eq: 'f(x) = |x|',  bands: [[-6.5, 0, false], [0, 6.5, true]], pts: [[0, 'closed']] },
  sqrt:        { f: (x) => (x >= 0 ? Math.sqrt(x) : NaN), eq: 'f(x) = √x',
                 bands: [[-6.5, 0, false], [0, 6.5, true]], pts: [[0, 'closed']] },
  exponential: { f: (x) => Math.exp(x),     eq: 'f(x) = eˣ',
                 bands: [[-6.5, 0, false], [0, 6.5, true]], pts: [[0, 'open']] },
  sine:        { f: (x) => Math.sin(x),     eq: 'f(x) = sin(x)',
                 bands: [[-6.5, -1, false], [-1, 1, true], [1, 6.5, false]], pts: [[-1, 'closed'], [1, 'closed']] },
  cosine:      { f: (x) => Math.cos(x),     eq: 'f(x) = cos(x)',
                 bands: [[-6.5, -1, false], [-1, 1, true], [1, 6.5, false]], pts: [[-1, 'closed'], [1, 'closed']] },
  reciprocal:  { f: (x) => (x === 0 ? NaN : 1 / x), eq: 'f(x) = 1/x',
                 bands: [[-6.5, 6.5, true]], pts: [[0, 'open']] },
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
  const axisX = sx(0);
  let out = `<rect width="${W}" height="${H}" fill="#fcfcfd"/>` + grid();
  for (const [from, to, ok] of spec.bands) {
    const yTop = sy(to), yBot = sy(from);
    out += `<rect x="${axisX - 5}" y="${yTop}" width="10" height="${(yBot - yTop).toFixed(2)}" rx="3" ` +
           `fill="${ok ? '#10b981' : '#ef4444'}" opacity="${ok ? 0.4 : 0.28}"/>`;
  }
  out += `<path d="${curvePath(spec.f)}" fill="none" stroke="#3b82f6" stroke-width="1.75"/>`;
  for (const [y, kind] of spec.pts) {
    out += `<circle cx="${axisX}" cy="${sy(y)}" r="5" fill="${kind === 'closed' ? '#10b981' : '#fff'}" ` +
           `stroke="${kind === 'closed' ? '#10b981' : '#ef4444'}" stroke-width="2"/>`;
  }
  out += `<rect x="8" y="8" width="${10 + spec.eq.length * 6.6}" height="20" rx="4" fill="#fff" stroke="#cbd5e1" opacity="0.92"/>` +
         `<text x="14" y="22" font-size="12" font-style="italic" fill="#334155" font-family="Georgia,serif">${spec.eq}</text>`;
  return `<svg width="400" height="250" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
         `style="border:1px solid #cbd5e1;background:#fcfcfd;border-radius:12px;max-width:100%;display:block;margin:12px auto">${out}</svg>`;
}

const functionRangeDiagrams = {};
for (const key of Object.keys(FNS)) functionRangeDiagrams[key] = diagram(key);

export default functionRangeDiagrams;
