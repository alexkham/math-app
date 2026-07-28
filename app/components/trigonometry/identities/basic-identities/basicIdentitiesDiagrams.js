// Static SVG diagrams for the basic-identities page sections.
// Each diagram freezes the BasicTrigIdentitiesExplorer / CircleGraphDemo view in
// one concrete state: unit circle on the left (red ray, blue terminal point P,
// signed legs), function graph on the right (curve, asymptotes, tracking dot,
// coterminal ghost dots). Consumed by getStaticProps of the page via
// processContent's inline-SVG pass.

const W = 480;
const H = 300;
const CX = 150;
const CY = 150;
const R = 100;
const GX0 = 285;
const GX1 = 468;
const GY0 = 45;
const GY1 = 255;
const XMAX = 720; // degrees shown on the graph

const DEEP = '#4F46E5';
const AMBER = '#B45309';
const RED = '#DC2626';
const GRAY = '#94a3b8';
const SOFT = '#cbd5e1';

const toRad = (d) => (d * Math.PI) / 180;
const px = (r, a) => +(CX + r * Math.cos(toRad(a))).toFixed(2);
const py = (r, a) => +(CY - r * Math.sin(toRad(a))).toFixed(2);

const FNS = {
  sin: { f: (d) => Math.sin(toRad(d)), yMax: 1.4, asym: [], leg: 'sin', label: 'y = sin θ' },
  cos: { f: (d) => Math.cos(toRad(d)), yMax: 1.4, asym: [], leg: 'cos', label: 'y = cos θ' },
  tan: { f: (d) => Math.tan(toRad(d)), yMax: 3, asym: [90, 270, 450, 630], leg: 'both', label: 'y = tan θ' },
  csc: { f: (d) => 1 / Math.sin(toRad(d)), yMax: 4, asym: [0, 180, 360, 540, 720], leg: 'sin', label: 'y = csc θ' },
  sec: { f: (d) => 1 / Math.cos(toRad(d)), yMax: 4, asym: [90, 270, 450, 630], leg: 'cos', label: 'y = sec θ' },
  cot: { f: (d) => 1 / Math.tan(toRad(d)), yMax: 3, asym: [0, 180, 360, 540, 720], leg: 'both', label: 'y = cot θ' },
};

const gx = (d) => +(GX0 + ((GX1 - GX0) * d) / XMAX).toFixed(2);
const gy = (v, yMax) => +(GY1 - ((GY1 - GY0) * (v + yMax)) / (2 * yMax)).toFixed(2);

function curvePath(fn) {
  const { f, yMax } = FNS[fn];
  let d = '';
  let pen = false;
  for (let deg = 0; deg <= XMAX; deg += 3) {
    const v = f(deg);
    if (!Number.isFinite(v) || Math.abs(v) > yMax * 1.15) { pen = false; continue; }
    d += `${pen ? 'L' : 'M'} ${gx(deg)} ${gy(v, yMax)} `;
    pen = true;
  }
  return d.trim();
}

function graphBlock(fn, { dot = null, ghosts = [] } = {}) {
  const { yMax, asym, label } = FNS[fn];
  const zero = gy(0, yMax);
  return (
    `<rect x="${GX0 - 8}" y="${GY0 - 8}" width="${GX1 - GX0 + 16}" height="${GY1 - GY0 + 16}" fill="#fff" stroke="${SOFT}" rx="8"/>` +
    `<line x1="${GX0}" y1="${zero}" x2="${GX1}" y2="${zero}" stroke="${SOFT}" stroke-width="1"/>` +
    `<line x1="${gx(360)}" y1="${GY0}" x2="${gx(360)}" y2="${GY1}" stroke="${SOFT}" stroke-width="1" stroke-dasharray="2 3"/>` +
    asym.map((a) => `<line x1="${gx(a)}" y1="${GY0}" x2="${gx(a)}" y2="${GY1}" stroke="${GRAY}" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>`).join('') +
    `<path d="${curvePath(fn)}" fill="none" stroke="${DEEP}" stroke-width="2"/>` +
    ghosts.map((g) => `<circle cx="${gx(g)}" cy="${gy(FNS[fn].f(g), yMax)}" r="4" fill="${GRAY}" opacity="0.8"/>`).join('') +
    (dot !== null && Number.isFinite(FNS[fn].f(dot)) && Math.abs(FNS[fn].f(dot)) <= yMax
      ? `<circle cx="${gx(dot)}" cy="${gy(FNS[fn].f(dot), yMax)}" r="5.5" fill="${DEEP}" stroke="#fff" stroke-width="1.5"/>`
      : '') +
    `<text x="${GX0}" y="${GY0 - 14}" font-size="12" font-style="italic" fill="${GRAY}" font-family="Georgia,serif">${label}</text>`
  );
}

function circleBlock(theta, { leg = null, refArc = false, spiral = false } = {}) {
  const norm = ((theta % 360) + 360) % 360;
  const P = [px(R, norm), py(R, norm)];
  let out =
    `<line x1="${CX - R - 22}" y1="${CY}" x2="${CX + R + 22}" y2="${CY}" stroke="${SOFT}" stroke-width="1.5"/>` +
    `<line x1="${CX}" y1="${CY + R + 22}" x2="${CX}" y2="${CY - R - 22}" stroke="${SOFT}" stroke-width="1.5"/>` +
    `<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${SOFT}" stroke-width="1.5"/>`;
  if (leg === 'sin' || leg === 'both') {
    out += `<line x1="${P[0]}" y1="${P[1]}" x2="${P[0]}" y2="${CY}" stroke="${DEEP}" stroke-width="3.5" stroke-linecap="round"/>`;
  }
  if (leg === 'cos' || leg === 'both') {
    out += `<line x1="${CX}" y1="${CY}" x2="${P[0]}" y2="${CY}" stroke="${AMBER}" stroke-width="3.5" stroke-linecap="round"/>`;
  }
  if (refArc) {
    const near = norm <= 90 ? [0, norm] : norm <= 270 ? (norm <= 180 ? [norm, 180] : [180, norm]) : [norm, 360];
    out += `<path d="M ${px(26, near[0])} ${py(26, near[0])} A 26 26 0 0 0 ${px(26, near[1])} ${py(26, near[1])}" fill="none" stroke="#16a34a" stroke-width="2.5"/>`;
  }
  if (spiral) {
    const turns = Math.floor(theta / 360);
    for (let t = 0; t <= turns; t++) {
      const r = 22 + t * 9;
      const end = t === turns ? norm : 359.9;
      out += `<path d="M ${px(r, 0)} ${py(r, 0)} A ${r} ${r} 0 ${end > 180 ? 1 : 0} 0 ${px(r, end)} ${py(r, end)}" fill="none" stroke="${RED}" stroke-width="2" opacity="${0.45 + 0.25 * t}"/>`;
    }
  } else if (norm > 1) {
    out += `<path d="M ${px(26, 0)} ${py(26, 0)} A 26 26 0 ${norm > 180 ? 1 : 0} 0 ${px(26, norm)} ${py(26, norm)}" fill="none" stroke="${RED}" stroke-width="2"/>`;
  }
  out +=
    `<line x1="${CX}" y1="${CY}" x2="${P[0]}" y2="${P[1]}" stroke="${RED}" stroke-width="2.5" stroke-linecap="round"/>` +
    `<circle cx="${P[0]}" cy="${P[1]}" r="6" fill="${DEEP}" stroke="#fff" stroke-width="2"/>` +
    `<text x="${px(R + 14, norm)}" y="${py(R + 14, norm)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="700" fill="${RED}" font-family="system-ui,sans-serif">${theta}°</text>`;
  return out;
}

const wrap = (inner) =>
  `<svg width="360" height="225" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #cbd5e1;background:#f8fafc;border-radius:12px;max-width:100%;display:block;margin:12px auto">${inner}</svg>`;

// Per-step frozen states, mirroring the scenarios' five stages.
function stepDiagram(fn, step) {
  const leg = FNS[fn].leg;
  if (step === 1) return wrap(circleBlock(50) + graphBlock(fn));
  if (step === 2) return wrap(circleBlock(50, { leg }) + graphBlock(fn));
  if (step === 3) return wrap(circleBlock(50, { leg }) + graphBlock(fn, { dot: 50 }));
  if (step === 4) return wrap(circleBlock(140, { leg, refArc: true }) + graphBlock(fn, { dot: 140 }));
  return wrap(circleBlock(410, { leg, spiral: true }) + graphBlock(fn, { dot: 410, ghosts: [50] }));
}

const basicIdentitiesDiagrams = {};
for (const fn of Object.keys(FNS)) {
  basicIdentitiesDiagrams[fn] = {
    overview: stepDiagram(fn, 3),
    steps: [1, 2, 3, 4, 5].map((s) => stepDiagram(fn, s)),
  };
}

export default basicIdentitiesDiagrams;
