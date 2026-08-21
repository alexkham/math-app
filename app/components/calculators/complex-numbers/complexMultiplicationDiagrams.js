// Static SVG diagrams for the Complex Multiplication Visualizer page sections
// (Line 1 v5). Each diagram freezes ComplexMultiplicationVisualizer in one
// preset state, replicating the component's rendering exactly: 624×624 canvas
// #ECEEF0 (rx 12), range ±10, margin 48, grid #d8e4ec, axes #8098b0, navy z₁
// vector / orange z₂ vector, teal product vector with point and z₁z₂ label,
// and the three concentric angle arcs — navy θ₁ at r 0.8, orange θ₂ at r 1.1,
// teal θ₁+θ₂ at r 1.4 — with their mono labels (same visibility thresholds as
// the live tool). Consumed by getStaticProps of the page via demoUnitFrame.

const P = {
  navy: '#304090',
  orange: '#B85C2A',
  teal: '#2A7A8C',
  axis: '#8098b0',
  grid: '#d8e4ec',
  bg: '#ECEEF0',
};

const W = 624;
const H = 624;
const MARGIN = 48;
const RANGE = 10;
const SCALE = (W - 2 * MARGIN) / (2 * RANGE);
const OX = W / 2;
const OY = H / 2;

const sx = (re) => +(OX + re * SCALE).toFixed(2);
const sy = (im) => +(OY - im * SCALE).toFixed(2);

const MONO = "'JetBrains Mono', monospace";
const SANS = "'DM Sans', sans-serif";

function makeArc(arcRadius, startAngle, endAngle) {
  if (Math.abs(endAngle - startAngle) < 0.01) return '';
  const rPx = arcRadius * SCALE;
  const ax = OX + rPx * Math.cos(startAngle);
  const ay = OY - rPx * Math.sin(startAngle);
  const ex = OX + rPx * Math.cos(endAngle);
  const ey = OY - rPx * Math.sin(endAngle);
  const diff = endAngle - startAngle;
  const largeArc = Math.abs(diff) > Math.PI ? 1 : 0;
  const sweepFlag = diff > 0 ? 0 : 1;
  return `M ${ax.toFixed(2)},${ay.toFixed(2)} A ${rPx.toFixed(2)},${rPx.toFixed(2)} 0 ${largeArc},${sweepFlag} ${ex.toFixed(2)},${ey.toFixed(2)}`;
}

function planeBase() {
  let out = `<rect width="${W}" height="${H}" rx="12" fill="${P.bg}"/>`;
  for (let i = -RANGE; i <= RANGE; i++) {
    if (i === 0) continue;
    out += `<line x1="${sx(i)}" y1="${sy(-RANGE)}" x2="${sx(i)}" y2="${sy(RANGE)}" stroke="${P.grid}" stroke-width="0.7"/>`;
    out += `<line x1="${sx(-RANGE)}" y1="${sy(i)}" x2="${sx(RANGE)}" y2="${sy(i)}" stroke="${P.grid}" stroke-width="0.7"/>`;
  }
  out += `<line x1="${MARGIN}" y1="${OY}" x2="${W - MARGIN}" y2="${OY}" stroke="${P.axis}" stroke-width="1.5"/>`;
  out += `<line x1="${OX}" y1="${MARGIN}" x2="${OX}" y2="${H - MARGIN}" stroke="${P.axis}" stroke-width="1.5"/>`;
  out += `<text x="${W - MARGIN + 8}" y="${OY + 5}" font-size="14" font-weight="600" fill="${P.navy}" font-family="${SANS}">Re</text>`;
  out += `<text x="${OX + 8}" y="${MARGIN - 8}" font-size="14" font-weight="600" fill="${P.navy}" font-family="${SANS}">Im</text>`;
  for (let i = -RANGE; i <= RANGE; i++) {
    if (i === 0 || i % 2 !== 0) continue;
    out += `<text x="${sx(i)}" y="${OY + 16}" text-anchor="middle" font-size="11" fill="${P.axis}" font-family="${MONO}">${i}</text>`;
    out += `<text x="${OX - 10}" y="${sy(i) + 4}" text-anchor="end" font-size="11" fill="${P.axis}" font-family="${MONO}">${i > 0 ? `${i}i` : `−${Math.abs(i)}i`}</text>`;
  }
  return out;
}

function diagram(z1, z2) {
  const product = {
    re: z1.re * z2.re - z1.im * z2.im,
    im: z1.re * z2.im + z1.im * z2.re,
  };
  const mod1 = Math.sqrt(z1.re * z1.re + z1.im * z1.im);
  const mod2 = Math.sqrt(z2.re * z2.re + z2.im * z2.im);
  const modP = Math.sqrt(product.re * product.re + product.im * product.im);
  const arg1 = Math.atan2(z1.im, z1.re);
  const arg2 = Math.atan2(z2.im, z2.re);
  const argP = Math.atan2(product.im, product.re);
  const p1 = { x: sx(z1.re), y: sy(z1.im) };
  const p2 = { x: sx(z2.re), y: sy(z2.im) };
  const pp = { x: sx(product.re), y: sy(product.im) };
  let out = planeBase();

  if (mod1 > 0.3 && Math.abs(arg1) > 0.05) {
    out += `<path d="${makeArc(0.8, 0, arg1)}" fill="none" stroke="${P.navy}" stroke-width="2" opacity="0.6"/>`;
  }
  if (mod2 > 0.3 && Math.abs(arg2) > 0.05) {
    out += `<path d="${makeArc(1.1, 0, arg2)}" fill="none" stroke="${P.orange}" stroke-width="2" opacity="0.6"/>`;
  }
  if (modP > 0.3 && Math.abs(argP) > 0.05) {
    out += `<path d="${makeArc(1.4, 0, argP)}" fill="none" stroke="${P.teal}" stroke-width="2.5" opacity="0.7"/>`;
  }
  if (mod1 > 0.5 && Math.abs(arg1) > 0.15) {
    const mid = arg1 / 2;
    out += `<text x="${sx(1.0 * Math.cos(mid))}" y="${sy(1.0 * Math.sin(mid))}" text-anchor="middle" font-size="12" font-weight="600" fill="${P.navy}" font-family="${MONO}">&#952;&#x2081;</text>`;
  }
  if (mod2 > 0.5 && Math.abs(arg2) > 0.15) {
    const mid = arg2 / 2;
    out += `<text x="${sx(1.35 * Math.cos(mid))}" y="${sy(1.35 * Math.sin(mid))}" text-anchor="middle" font-size="12" font-weight="600" fill="${P.orange}" font-family="${MONO}">&#952;&#x2082;</text>`;
  }
  if (modP > 0.5 && Math.abs(argP) > 0.15) {
    const mid = argP / 2;
    out += `<text x="${sx(1.7 * Math.cos(mid))}" y="${sy(1.7 * Math.sin(mid))}" text-anchor="middle" font-size="12" font-weight="700" fill="${P.teal}" font-family="${MONO}">&#952;&#x2081;+&#952;&#x2082;</text>`;
  }

  out += `<line x1="${OX}" y1="${OY}" x2="${p1.x}" y2="${p1.y}" stroke="${P.navy}" stroke-width="2.5"/>`;
  out += `<line x1="${OX}" y1="${OY}" x2="${p2.x}" y2="${p2.y}" stroke="${P.orange}" stroke-width="2.5"/>`;

  if (modP > 0.1) {
    out += `<line x1="${OX}" y1="${OY}" x2="${pp.x}" y2="${pp.y}" stroke="${P.teal}" stroke-width="3"/>`;
    out += `<circle cx="${pp.x}" cy="${pp.y}" r="9" fill="${P.teal}" stroke="#fff" stroke-width="2"/>`;
    out += `<text x="${pp.x + 14}" y="${pp.y - 12}" font-size="15" font-weight="700" fill="${P.teal}" font-family="${SANS}">z&#x2081;z&#x2082;</text>`;
  }

  out += `<circle cx="${p1.x}" cy="${p1.y}" r="11" fill="${P.navy}" stroke="#fff" stroke-width="2.5"/>`;
  out += `<text x="${p1.x + 14}" y="${p1.y - 12}" font-size="15" font-weight="700" fill="${P.navy}" font-family="${SANS}">z&#x2081;</text>`;
  out += `<circle cx="${p2.x}" cy="${p2.y}" r="11" fill="${P.orange}" stroke="#fff" stroke-width="2.5"/>`;
  out += `<text x="${p2.x + 14}" y="${p2.y - 12}" font-size="15" font-weight="700" fill="${P.orange}" font-family="${SANS}">z&#x2082;</text>`;
  out += `<circle cx="${OX}" cy="${OY}" r="3" fill="${P.axis}"/>`;

  return (
    `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" ` +
    `style="display:block;max-width:100%;height:auto">` + out + `</svg>`
  );
}

// Frozen states — the tool's five presets. All products stay inside ±10, so
// the off-screen ray path never triggers here.
const complexMultiplicationDiagrams = {
  general: diagram({ re: 2, im: 1 }, { re: -1, im: 2 }),
  conjugateProduct: diagram({ re: 1, im: 1 }, { re: 1, im: -1 }),
  realTimesImaginary: diagram({ re: 3, im: 0 }, { re: 0, im: 2 }),
  iTimesI: diagram({ re: 0, im: 1 }, { re: 0, im: 1 }),
  realScaling: diagram({ re: 2, im: 0 }, { re: -3, im: 4 }),
};

export default complexMultiplicationDiagrams;
