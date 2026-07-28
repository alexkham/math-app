// Static SVG diagrams for the functions-graphs page sections.
// Each diagram freezes TrigFunctionsExplorer's graph for one function: the curve
// across -360°..360°, vertical asymptotes where the function is undefined, and
// the current-angle marker frozen at θ = 60°. Consumed by getStaticProps of the
// page via processContent's inline-SVG pass.

const W = 480;
const H = 260;
const X0 = 30;
const X1 = 456;
const Y0 = 24;
const Y1 = 232;
const DMIN = -360;
const DMAX = 360;
const MARK = 60; // frozen angle in degrees

const CURVE = '#1d4ed8';
const AXIS = '#94a3b8';
const SOFT = '#e2e8f0';
const MARKC = '#dc2626';

const toRad = (d) => (d * Math.PI) / 180;

const FNS = {
  sin: { f: (d) => Math.sin(toRad(d)), yMax: 1.5, asym: [] },
  cos: { f: (d) => Math.cos(toRad(d)), yMax: 1.5, asym: [] },
  tan: { f: (d) => Math.tan(toRad(d)), yMax: 3.2, asym: [-270, -90, 90, 270] },
  csc: { f: (d) => 1 / Math.sin(toRad(d)), yMax: 4, asym: [-360, -180, 0, 180, 360] },
  sec: { f: (d) => 1 / Math.cos(toRad(d)), yMax: 4, asym: [-270, -90, 90, 270] },
  cot: { f: (d) => 1 / Math.tan(toRad(d)), yMax: 3.2, asym: [-360, -180, 0, 180, 360] },
};

const gx = (d) => +(X0 + ((X1 - X0) * (d - DMIN)) / (DMAX - DMIN)).toFixed(2);
const gy = (v, yMax) => +(Y1 - ((Y1 - Y0) * (v + yMax)) / (2 * yMax)).toFixed(2);

function curvePath(fn) {
  const { f, yMax } = FNS[fn];
  let d = '';
  let pen = false;
  for (let deg = DMIN; deg <= DMAX; deg += 2) {
    const v = f(deg);
    if (!Number.isFinite(v) || Math.abs(v) > yMax * 1.1) { pen = false; continue; }
    d += `${pen ? 'L' : 'M'} ${gx(deg)} ${gy(v, yMax)} `;
    pen = true;
  }
  return d.trim();
}

function graphDiagram(fn) {
  const { f, yMax, asym } = FNS[fn];
  const zero = gy(0, yMax);
  const mv = f(MARK);
  let out =
    `<line x1="${X0}" y1="${zero}" x2="${X1}" y2="${zero}" stroke="${AXIS}" stroke-width="1.5"/>` +
    `<line x1="${gx(0)}" y1="${Y0}" x2="${gx(0)}" y2="${Y1}" stroke="${AXIS}" stroke-width="1.5"/>`;
  for (const t of [-360, -180, 180, 360]) {
    out += `<line x1="${gx(t)}" y1="${zero - 4}" x2="${gx(t)}" y2="${zero + 4}" stroke="${AXIS}" stroke-width="1.5"/>` +
      `<text x="${gx(t)}" y="${zero + 16}" text-anchor="middle" font-size="10" fill="${AXIS}" font-family="system-ui,sans-serif">${t}°</text>`;
  }
  if (yMax <= 2) {
    for (const v of [1, -1]) {
      out += `<line x1="${X0}" y1="${gy(v, yMax)}" x2="${X1}" y2="${gy(v, yMax)}" stroke="${SOFT}" stroke-width="1" stroke-dasharray="3 4"/>` +
        `<text x="${X0 - 4}" y="${gy(v, yMax)}" text-anchor="end" dominant-baseline="central" font-size="10" fill="${AXIS}" font-family="system-ui,sans-serif">${v}</text>`;
    }
  }
  out += asym.map((a) => `<line x1="${gx(a)}" y1="${Y0}" x2="${gx(a)}" y2="${Y1}" stroke="${AXIS}" stroke-width="1" stroke-dasharray="5 4" opacity="0.75"/>`).join('');
  out += `<path d="${curvePath(fn)}" fill="none" stroke="${CURVE}" stroke-width="2.2"/>`;
  if (Number.isFinite(mv) && Math.abs(mv) <= yMax) {
    out +=
      `<line x1="${gx(MARK)}" y1="${Y0}" x2="${gx(MARK)}" y2="${Y1}" stroke="${MARKC}" stroke-width="1" stroke-dasharray="2 3" opacity="0.6"/>` +
      `<circle cx="${gx(MARK)}" cy="${gy(mv, yMax)}" r="5.5" fill="${MARKC}" stroke="#fff" stroke-width="1.5"/>` +
      `<text x="${gx(MARK) + 8}" y="${gy(mv, yMax) - 10}" font-size="11" fill="${MARKC}" font-family="system-ui,sans-serif">θ = 60°</text>`;
  }
  out += `<text x="${X0 + 4}" y="${Y0 + 4}" font-size="12" font-style="italic" fill="${CURVE}" font-family="Georgia,serif">y = ${fn} θ</text>`;
  return `<svg width="384" height="208" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #e2e8f0;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">${out}</svg>`;
}

const trigFunctionsGraphDiagrams = {
  sin: graphDiagram('sin'),
  cos: graphDiagram('cos'),
  tan: graphDiagram('tan'),
  csc: graphDiagram('csc'),
  sec: graphDiagram('sec'),
  cot: graphDiagram('cot'),
};

export default trigFunctionsGraphDiagrams;
