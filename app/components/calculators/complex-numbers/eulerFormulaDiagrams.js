// Static SVG diagrams for the Euler's Formula Explorer page sections
// (Line 1 v5). Each diagram freezes EulerFormulaExplorer in one landmark
// state (or the scaled r ≠ 1 state), replicating the component's rendering
// exactly: 624×624 canvas #ECEEF0 (rx 12), range ±2.5, solid blue unit
// circle, dashed second circle when r ≠ 1, orange angle arc at 0.35r with
// θ label at 0.5r, navy hypotenuse, teal cos leg and red #c04040 sin leg
// with their mono labels, triangle fill, right-angle marker, projection
// dots, the seven blue landmark dots (active one enlarged orange), and the
// navy e^iθ point — all with the live tool's visibility thresholds.
// Consumed by getStaticProps of the page via demoUnitFrame.

const P = {
  navy: '#304090',
  blue: '#4098d8',
  orange: '#B85C2A',
  teal: '#2A7A8C',
  red: '#c04040',
  axis: '#8098b0',
  grid: '#d8e4ec',
  bg: '#ECEEF0',
};

const W = 624;
const H = 624;
const MARGIN = 48;
const RANGE = 2.5;
const SCALE = (W - 2 * MARGIN) / (2 * RANGE);
const OX = W / 2;
const OY = H / 2;

const sx = (re) => +(OX + re * SCALE).toFixed(2);
const sy = (im) => +(OY - im * SCALE).toFixed(2);

const MONO = "'JetBrains Mono', monospace";
const SANS = "'DM Sans', sans-serif";

const LANDMARKS = [0, Math.PI / 6, Math.PI / 4, Math.PI / 3, Math.PI / 2, Math.PI, 3 * Math.PI / 2];

function fmtNum(n) {
  if (Math.abs(n) < 0.005) return '0';
  if (Math.abs(n - Math.round(n)) < 0.005) return String(Math.round(n));
  return n.toFixed(3);
}

function arcPath(r, endAngle) {
  if (Math.abs(endAngle) < 0.001) return '';
  const largeArc = Math.abs(endAngle) > Math.PI ? 1 : 0;
  const s = { x: sx(r), y: sy(0) };
  const e = { x: sx(r * Math.cos(endAngle)), y: sy(r * Math.sin(endAngle)) };
  const rPx = r * SCALE;
  return `M ${s.x},${s.y} A ${rPx.toFixed(2)},${rPx.toFixed(2)} 0 ${largeArc},0 ${e.x},${e.y}`;
}

function planeBase() {
  let out = `<rect width="${W}" height="${H}" rx="12" fill="${P.bg}"/>`;
  for (let i = -2; i <= 2; i++) {
    if (i === 0) continue;
    out += `<line x1="${sx(i)}" y1="${sy(-RANGE)}" x2="${sx(i)}" y2="${sy(RANGE)}" stroke="${P.grid}" stroke-width="0.7"/>`;
    out += `<line x1="${sx(-RANGE)}" y1="${sy(i)}" x2="${sx(RANGE)}" y2="${sy(i)}" stroke="${P.grid}" stroke-width="0.7"/>`;
  }
  out += `<line x1="${MARGIN}" y1="${OY}" x2="${W - MARGIN}" y2="${OY}" stroke="${P.axis}" stroke-width="1.5"/>`;
  out += `<line x1="${OX}" y1="${MARGIN}" x2="${OX}" y2="${H - MARGIN}" stroke="${P.axis}" stroke-width="1.5"/>`;
  out += `<text x="${W - MARGIN + 8}" y="${OY + 5}" font-size="13" font-weight="600" fill="${P.navy}" font-family="${SANS}">Re</text>`;
  out += `<text x="${OX + 8}" y="${MARGIN - 8}" font-size="13" font-weight="600" fill="${P.navy}" font-family="${SANS}">Im</text>`;
  for (let i = -2; i <= 2; i++) {
    if (i === 0) continue;
    out += `<text x="${sx(i)}" y="${OY + 16}" text-anchor="middle" font-size="11" fill="${P.axis}" font-family="${MONO}">${i}</text>`;
    out += `<text x="${OX - 10}" y="${sy(i) + 4}" text-anchor="end" font-size="11" fill="${P.axis}" font-family="${MONO}">${i}i</text>`;
  }
  return out;
}

function diagram(theta, radius) {
  const zRe = radius * Math.cos(theta);
  const zIm = radius * Math.sin(theta);
  const z = { x: sx(zRe), y: sy(zIm) };
  const pr = { x: sx(zRe), y: sy(0) };
  const pi = { x: sx(0), y: sy(zIm) };
  let out = planeBase();

  out += `<circle cx="${OX}" cy="${OY}" r="${(1 * SCALE).toFixed(2)}" fill="none" stroke="${P.blue}" stroke-width="1.5" opacity="0.4"/>`;
  if (radius !== 1) {
    out += `<circle cx="${OX}" cy="${OY}" r="${(radius * SCALE).toFixed(2)}" fill="none" stroke="${P.blue}" stroke-width="1.5" stroke-dasharray="6,3" opacity="0.3"/>`;
  }
  if (theta > 0.01) {
    out += `<path d="${arcPath(0.35 * radius, theta)}" fill="none" stroke="${P.orange}" stroke-width="2"/>`;
  }
  if (theta > 0.15) {
    const midA = theta / 2;
    const labelR = 0.5 * radius;
    out += `<text x="${sx(labelR * Math.cos(midA))}" y="${sy(labelR * Math.sin(midA))}" text-anchor="middle" font-size="14" font-weight="700" fill="${P.orange}" font-family="${SANS}">&#952;</text>`;
  }
  out += `<line x1="${z.x}" y1="${z.y}" x2="${pi.x}" y2="${pi.y}" stroke="${P.navy}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>`;
  out += `<line x1="${z.x}" y1="${z.y}" x2="${pr.x}" y2="${pr.y}" stroke="${P.navy}" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>`;
  out += `<polygon points="${OX},${OY} ${pr.x},${pr.y} ${z.x},${z.y}" fill="${P.navy}" opacity="0.06"/>`;
  out += `<line x1="${OX}" y1="${OY}" x2="${z.x}" y2="${z.y}" stroke="${P.navy}" stroke-width="2.5"/>`;
  out += `<line x1="${OX}" y1="${OY}" x2="${pr.x}" y2="${pr.y}" stroke="${P.teal}" stroke-width="2"/>`;
  out += `<line x1="${pr.x}" y1="${pr.y}" x2="${z.x}" y2="${z.y}" stroke="${P.red}" stroke-width="2"/>`;
  if (Math.abs(zRe) > 0.15 && Math.abs(zIm) > 0.15) {
    const sz = 8;
    const dirX = zRe > 0 ? -1 : 1;
    const dirY = zIm > 0 ? -1 : 1;
    out += `<polyline points="${pr.x},${pr.y + dirY * sz} ${pr.x + dirX * sz},${pr.y + dirY * sz} ${pr.x + dirX * sz},${pr.y}" fill="none" stroke="${P.axis}" stroke-width="1"/>`;
  }
  if (Math.abs(zRe) > 0.2) {
    out += `<text x="${((OX + pr.x) / 2).toFixed(2)}" y="${OY + (zIm >= 0 ? 18 : -10)}" text-anchor="middle" font-size="12" font-weight="600" fill="${P.teal}" font-family="${MONO}">${radius === 1 ? 'cos &#952;' : 'r cos &#952;'}</text>`;
  }
  if (Math.abs(zIm) > 0.2) {
    out += `<text x="${pr.x + (zRe >= 0 ? 14 : -14)}" y="${((pr.y + z.y) / 2 + 4).toFixed(2)}" text-anchor="${zRe >= 0 ? 'start' : 'end'}" font-size="12" font-weight="600" fill="${P.red}" font-family="${MONO}">${radius === 1 ? 'sin &#952;' : 'r sin &#952;'}</text>`;
  }
  if (radius > 0.3) {
    out += `<text x="${((OX + z.x) / 2 - (zIm >= 0 ? 12 : -12)).toFixed(2)}" y="${((OY + z.y) / 2 + (zIm >= 0 ? -8 : 16)).toFixed(2)}" text-anchor="middle" font-size="11" font-weight="600" fill="${P.navy}" font-family="${MONO}">r = ${fmtNum(radius)}</text>`;
  }
  out += `<circle cx="${pr.x}" cy="${pr.y}" r="4" fill="${P.teal}"/>`;
  out += `<circle cx="${pi.x}" cy="${pi.y}" r="4" fill="${P.red}"/>`;
  for (const lm of LANDMARKS) {
    const lx = sx(Math.cos(lm)), ly = sy(Math.sin(lm));
    const isActive = Math.abs(theta - lm) < 0.05 && radius === 1;
    out += `<circle cx="${lx}" cy="${ly}" r="${isActive ? 5 : 3}" fill="${isActive ? P.orange : P.blue}" opacity="${isActive ? 1 : 0.5}"/>`;
  }
  out += `<circle cx="${z.x}" cy="${z.y}" r="11" fill="${P.navy}" stroke="#fff" stroke-width="2.5"/>`;
  out += `<text x="${z.x + 16}" y="${z.y - 10}" font-size="14" font-weight="700" fill="${P.navy}" font-family="${SANS}">e<tspan font-size="10" baseline-shift="super">i&#952;</tspan></text>`;
  out += `<circle cx="${OX}" cy="${OY}" r="3" fill="${P.axis}"/>`;

  return (
    `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" ` +
    `style="display:block;max-width:100%;height:auto">` + out + `</svg>`
  );
}

// Frozen states — the seven landmark angles on the unit circle, plus the
// scaled r ≠ 1 state demonstrating the general polar form.
const eulerFormulaDiagrams = {
  theta0: diagram(0, 1),
  theta30: diagram(Math.PI / 6, 1),
  theta45: diagram(Math.PI / 4, 1),
  theta60: diagram(Math.PI / 3, 1),
  theta90: diagram(Math.PI / 2, 1),
  theta180: diagram(Math.PI, 1),
  theta270: diagram(3 * Math.PI / 2, 1),
  scaled: diagram(Math.PI / 3, 2),
};

export default eulerFormulaDiagrams;
