// Static SVG diagrams for the piecewise-function page sections.
// Each diagram freezes the FunctionPiecewise builder on one preset,
// replicating the component's rendering: pieces in #3b82f6, closed endpoints
// as filled dots, open endpoints as white-filled blue-ringed circles.
// Window: x in [-5.5, 5.5], y in [-5.5, 5.5] (480x300 canvas).

const W = 480;
const H = 300;
const XR = 5.5;
const YR = 5.5;

const sx = (x) => +(((x + XR) / (2 * XR)) * W).toFixed(2);
const sy = (y) => +((H - ((y + YR) / (2 * YR)) * H)).toFixed(2);

// Catalog subset used by the presets, copied from CATALOG in FunctionPiecewise.jsx.
const CAT = {
  c0: () => 0, c1: () => 1, cm1: () => -1,
  x: (x) => x, mx: (x) => -x,
  xp1: (x) => x + 1, xm1: (x) => x - 1, xp2: (x) => x + 2, xm2: (x) => x - 2,
};

// Presets copied verbatim from PRESETS in FunctionPiecewise.jsx.
const PRESETS = {
  absvalue: [
    { expr: 'mx', from: -5, to: 0, fromKind: 'closed', toKind: 'open' },
    { expr: 'x',  from: 0,  to: 5, fromKind: 'closed', toKind: 'closed' },
  ],
  heaviside: [
    { expr: 'cm1', from: -5, to: 0, fromKind: 'closed', toKind: 'open' },
    { expr: 'c1',  from: 0,  to: 5, fromKind: 'closed', toKind: 'closed' },
  ],
  sign: [
    { expr: 'cm1', from: -5, to: 0, fromKind: 'closed', toKind: 'open' },
    { expr: 'c0',  from: 0,  to: 0, fromKind: 'closed', toKind: 'closed' },
    { expr: 'c1',  from: 0,  to: 5, fromKind: 'open',   toKind: 'closed' },
  ],
  sawtooth: [
    { expr: 'xp2', from: -5, to: -3, fromKind: 'closed', toKind: 'open' },
    { expr: 'x',   from: -3, to: 1,  fromKind: 'closed', toKind: 'open' },
    { expr: 'xm2', from: 1,  to: 5,  fromKind: 'closed', toKind: 'closed' },
  ],
  hole: [
    { expr: 'x', from: -5, to: 1, fromKind: 'closed', toKind: 'open' },
    { expr: 'x', from: 1,  to: 5, fromKind: 'open',   toKind: 'closed' },
  ],
  jump: [
    { expr: 'xp1', from: -5, to: 0, fromKind: 'closed', toKind: 'open' },
    { expr: 'xm1', from: 0,  to: 5, fromKind: 'closed', toKind: 'closed' },
  ],
};

const EQ = {
  absvalue: 'the absolute value, built from two pieces',
  heaviside: 'the Heaviside step',
  sign: 'the sign function (three pieces)',
  sawtooth: 'a three-piece sawtooth',
  hole: 'a removable hole at x = 1',
  jump: 'a jump at x = 0',
};

function grid() {
  let out = '';
  for (let x = -5; x <= 5; x += 1) {
    if (x !== 0) out += `<line x1="${sx(x)}" y1="0" x2="${sx(x)}" y2="${H}" stroke="#e5e7eb" stroke-width="1"/>`;
  }
  for (let y = -5; y <= 5; y += 1) {
    if (y !== 0) out += `<line x1="0" y1="${sy(y)}" x2="${W}" y2="${sy(y)}" stroke="#e5e7eb" stroke-width="1"/>`;
  }
  out += `<line x1="0" y1="${sy(0)}" x2="${W}" y2="${sy(0)}" stroke="#475569" stroke-width="1.5"/>`;
  out += `<line x1="${sx(0)}" y1="0" x2="${sx(0)}" y2="${H}" stroke="#475569" stroke-width="1.5"/>`;
  for (const x of [-5, -3, 3, 5]) {
    out += `<text x="${sx(x) + (x === 5 ? -10 : 3)}" y="${sy(0) + 13}" font-size="10" fill="#64748b" font-family="system-ui,sans-serif">${x}</text>`;
  }
  for (const y of [-3, 3]) {
    out += `<text x="${sx(0) + 4}" y="${sy(y) - 3}" font-size="10" fill="#64748b" font-family="system-ui,sans-serif">${y}</text>`;
  }
  return out;
}

function endpointDot(x, y, kind) {
  return kind === 'closed'
    ? `<circle cx="${sx(x)}" cy="${sy(y)}" r="5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>`
    : `<circle cx="${sx(x)}" cy="${sy(y)}" r="5" fill="#fff" stroke="#3b82f6" stroke-width="2"/>`;
}

function diagram(key) {
  const pieces = PRESETS[key];
  let out = `<rect width="${W}" height="${H}" fill="#fcfcfd"/>` + grid();
  const dots = { open: [], closed: [] };
  for (const p of pieces) {
    const f = CAT[p.expr];
    if (p.to > p.from) {
      const pts = [];
      for (let i = 0; i <= 200; i++) {
        const x = p.from + (i / 200) * (p.to - p.from);
        pts.push(`${sx(x)} ${sy(f(x))}`);
      }
      out += `<path d="M ${pts.join(' L ')}" fill="none" stroke="#3b82f6" stroke-width="2"/>`;
    }
    dots[p.fromKind].push([p.from, f(p.from)]);
    if (p.to !== p.from) dots[p.toKind].push([p.to, f(p.to)]);
  }
  for (const [x, y] of dots.open) out += endpointDot(x, y, 'open');
  for (const [x, y] of dots.closed) out += endpointDot(x, y, 'closed');
  const eq = EQ[key];
  out += `<rect x="8" y="8" width="${10 + eq.length * 6.2}" height="20" rx="4" fill="#fff" stroke="#cbd5e1" opacity="0.92"/>` +
         `<text x="14" y="22" font-size="11.5" font-style="italic" fill="#334155" font-family="Georgia,serif">${eq}</text>`;
  return `<svg width="400" height="250" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
         `style="border:1px solid #cbd5e1;background:#fcfcfd;border-radius:12px;max-width:100%;display:block;margin:12px auto">${out}</svg>`;
}

const functionPiecewiseDiagrams = {};
for (const key of Object.keys(PRESETS)) functionPiecewiseDiagrams[key] = diagram(key);

export default functionPiecewiseDiagrams;
