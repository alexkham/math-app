// Static SVG diagrams for the function-asymptotes page sections.
// Each diagram freezes the FunctionAsymptotes visualizer in one family at the
// default parameters (a=1, k=0, b=1, h=0), replicating the component's
// rendering: graph area #fcfcfd, grid #e5e7eb, axes #475569, curve #3b82f6,
// and the tool's asymptote colors - vertical #ef4444, horizontal #10b981,
// oblique #8b5cf6, all dashed as the detector draws them.
// Window: x in [-10, 10], y in [-6.5, 6.5] (square units at 480x300).

const W = 480;
const H = 300;
const XR = 10;
const YR = 6.5;

const sx = (x) => +(((x + XR) / (2 * XR)) * W).toFixed(2);
const sy = (y) => +((H - ((y + YR) / (2 * YR)) * H)).toFixed(2);

const PI = Math.PI;

// Base functions at default parameters, copied from FAMILIES in FunctionAsymptotes.jsx.
const FNS = {
  logarithmic:    { f: (x) => (x > 0 ? Math.log(x) : NaN),                    eq: 'f(x) = ln(x)',            va: [0] },
  tangent:        { f: (x) => Math.tan(x),                                    eq: 'f(x) = tan(x)',
                    va: [-5 * PI / 2, -3 * PI / 2, -PI / 2, PI / 2, 3 * PI / 2, 5 * PI / 2] },
  expDecay:       { f: (x) => Math.exp(-x),                                   eq: 'f(x) = e^(−x)',      ha: [0] },
  bell:           { f: (x) => 1 / (1 + x * x),                                eq: 'f(x) = 1/(1 + x²)',  ha: [0] },
  arctan:         { f: (x) => Math.atan(x),                                   eq: 'f(x) = arctan(x)',        ha: [PI / 2, -PI / 2] },
  logistic:       { f: (x) => 1 / (1 + Math.exp(-x)),                         eq: 'f(x) = 1/(1 + e^(−x))', ha: [0, 1] },
  reciprocal:     { f: (x) => (x === 0 ? NaN : 1 / x),                        eq: 'f(x) = 1/x',              va: [0], ha: [0] },
  rationalShifted:{ f: (x) => (x === 1 ? NaN : (x + 1) / (x - 1)),            eq: 'f(x) = (x + 1)/(x − 1)', va: [1], ha: [1] },
  xOverX2Minus1:  { f: (x) => (Math.abs(x * x - 1) < 1e-12 ? NaN : x / (x * x - 1)),
                    eq: 'f(x) = x/(x² − 1)',                        va: [-1, 1], ha: [0] },
  obliqueClassic: { f: (x) => (x === 0 ? NaN : x + 1 / x),                    eq: 'f(x) = x + 1/x',          va: [0], oa: [[1, 0]] },
  obliqueRational:{ f: (x) => (x === 0 ? NaN : (x * x - 1) / x),              eq: 'f(x) = (x² − 1)/x', va: [0], oa: [[1, 0]] },
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
  for (const c of spec.va || []) {
    out += `<line x1="${sx(c)}" y1="0" x2="${sx(c)}" y2="${H}" stroke="#ef4444" stroke-width="1.4" stroke-dasharray="6 4" opacity="0.85"/>`;
  }
  for (const L of spec.ha || []) {
    out += `<line x1="0" y1="${sy(L)}" x2="${W}" y2="${sy(L)}" stroke="#10b981" stroke-width="1.4" stroke-dasharray="6 4" opacity="0.85"/>`;
  }
  for (const [m, b] of spec.oa || []) {
    const y1 = m * -XR + b, y2 = m * XR + b;
    out += `<line x1="${sx(-XR)}" y1="${sy(y1)}" x2="${sx(XR)}" y2="${sy(y2)}" stroke="#8b5cf6" stroke-width="1.4" stroke-dasharray="6 4" opacity="0.85"/>`;
  }
  out += `<path d="${curvePath(spec.f)}" fill="none" stroke="#3b82f6" stroke-width="1.75"/>`;
  out += `<rect x="8" y="8" width="${10 + spec.eq.length * 6.6}" height="20" rx="4" fill="#fff" stroke="#cbd5e1" opacity="0.92"/>` +
         `<text x="14" y="22" font-size="12" font-style="italic" fill="#334155" font-family="Georgia,serif">${spec.eq}</text>`;
  return `<svg width="400" height="250" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
         `style="border:1px solid #cbd5e1;background:#fcfcfd;border-radius:12px;max-width:100%;display:block;margin:12px auto">${out}</svg>`;
}

const functionAsymptotesDiagrams = {};
for (const key of Object.keys(FNS)) functionAsymptotesDiagrams[key] = diagram(key);

export default functionAsymptotesDiagrams;
