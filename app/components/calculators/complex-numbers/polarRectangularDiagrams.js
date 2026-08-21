// Static SVG diagrams for the Polar ↔ Rectangular Converter page sections
// (Line 1 v5). Each diagram freezes PolarRectangularConverter in one preset
// state, replicating the component's rendering exactly: 624×624 canvas
// #ECEEF0 (rx 12), range ±10, margin 48, grid #d8e4ec, axes #8098b0, dashed
// blue modulus circle, orange argument arc with θ label, navy hypotenuse,
// teal adjacent leg (a) and red #c04040 opposite leg (b) with mono side
// labels, faint triangle fill, dashed axis projections with colored
// projection dots, right-angle marker, and the draggable z point — all with
// the live tool's visibility thresholds. Consumed by getStaticProps of the
// page via demoUnitFrame.

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
const RANGE = 10;
const SCALE = (W - 2 * MARGIN) / (2 * RANGE);
const OX = W / 2;
const OY = H / 2;

const sx = (re) => +(OX + re * SCALE).toFixed(2);
const sy = (im) => +(OY - im * SCALE).toFixed(2);

const MONO = "'JetBrains Mono', monospace";
const SANS = "'DM Sans', sans-serif";

// Copied from the component so frozen labels match the live tool exactly.
function fmtNum(n) {
  if (Math.abs(n) < 0.005) return '0';
  if (Math.abs(n - Math.round(n)) < 0.005) return String(Math.round(n));
  return n.toFixed(2);
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

function diagram(re, im) {
  const modulus = Math.sqrt(re * re + im * im);
  const argument = Math.atan2(im, re);
  const z = { x: sx(re), y: sy(im) };
  const pr = { x: sx(re), y: sy(0) };
  const pi = { x: sx(0), y: sy(im) };
  let out = planeBase();

  if (modulus > 0.2) {
    out += `<circle cx="${OX}" cy="${OY}" r="${(modulus * SCALE).toFixed(2)}" fill="none" stroke="${P.blue}" stroke-width="1.5" stroke-dasharray="6,3" opacity="0.35"/>`;
  }
  if (modulus > 0.2 && Math.abs(argument) >= 0.01) {
    const arcR = Math.min(1.2, modulus * 0.4) * SCALE;
    const startX = OX + arcR, startY = OY;
    const endX = OX + arcR * Math.cos(argument);
    const endY = OY - arcR * Math.sin(argument);
    const largeArc = Math.abs(argument) > Math.PI ? 1 : 0;
    const sweepFlag = argument > 0 ? 0 : 1;
    out += `<path d="M ${startX.toFixed(2)},${startY.toFixed(2)} A ${arcR.toFixed(2)},${arcR.toFixed(2)} 0 ${largeArc},${sweepFlag} ${endX.toFixed(2)},${endY.toFixed(2)}" fill="none" stroke="${P.orange}" stroke-width="2.5"/>`;
  }
  if (modulus > 0.5 && Math.abs(argument) > 0.1) {
    const midA = argument / 2;
    const labelR = Math.min(1.8, modulus * 0.55) * SCALE;
    out += `<text x="${(OX + labelR * Math.cos(midA)).toFixed(2)}" y="${(OY - labelR * Math.sin(midA)).toFixed(2)}" text-anchor="middle" font-size="15" font-weight="700" fill="${P.orange}" font-family="${SANS}">&#952;</text>`;
  }
  if (modulus > 0.3) {
    out += `<polygon points="${OX},${OY} ${pr.x},${pr.y} ${z.x},${z.y}" fill="${P.navy}" opacity="0.05"/>`;
  }
  out += `<line x1="${z.x}" y1="${z.y}" x2="${pi.x}" y2="${pi.y}" stroke="${P.navy}" stroke-width="1" stroke-dasharray="4,3" opacity="0.35"/>`;
  out += `<line x1="${z.x}" y1="${z.y}" x2="${pr.x}" y2="${pr.y}" stroke="${P.navy}" stroke-width="1" stroke-dasharray="4,3" opacity="0.35"/>`;
  out += `<line x1="${OX}" y1="${OY}" x2="${z.x}" y2="${z.y}" stroke="${P.navy}" stroke-width="2.5"/>`;
  out += `<line x1="${OX}" y1="${OY}" x2="${pr.x}" y2="${pr.y}" stroke="${P.teal}" stroke-width="2"/>`;
  out += `<line x1="${pr.x}" y1="${pr.y}" x2="${z.x}" y2="${z.y}" stroke="${P.red}" stroke-width="2"/>`;
  if (Math.abs(re) > 0.4 && Math.abs(im) > 0.4) {
    const sz = 9;
    const dirX = re > 0 ? -1 : 1;
    const dirY = im > 0 ? -1 : 1;
    out += `<polyline points="${pr.x},${pr.y + dirY * sz} ${pr.x + dirX * sz},${pr.y + dirY * sz} ${pr.x + dirX * sz},${pr.y}" fill="none" stroke="${P.axis}" stroke-width="1.2"/>`;
  }
  if (Math.abs(re) > 0.6) {
    out += `<text x="${((OX + pr.x) / 2).toFixed(2)}" y="${OY + (im >= 0 ? 22 : -12)}" text-anchor="middle" font-size="13" font-weight="600" fill="${P.teal}" font-family="${MONO}">a = ${fmtNum(re)}</text>`;
  }
  if (Math.abs(im) > 0.6) {
    out += `<text x="${pr.x + (re >= 0 ? 18 : -18)}" y="${((pr.y + z.y) / 2 + 4).toFixed(2)}" text-anchor="${re >= 0 ? 'start' : 'end'}" font-size="13" font-weight="600" fill="${P.red}" font-family="${MONO}">b = ${fmtNum(im)}</text>`;
  }
  if (modulus > 0.8) {
    out += `<text x="${((OX + z.x) / 2 + (im >= 0 ? -14 : 14)).toFixed(2)}" y="${((OY + z.y) / 2 + (im >= 0 ? -10 : 18)).toFixed(2)}" text-anchor="middle" font-size="12" font-weight="600" fill="${P.navy}" font-family="${MONO}">r = ${fmtNum(modulus)}</text>`;
  }
  out += `<circle cx="${pr.x}" cy="${pr.y}" r="4" fill="${P.teal}"/>`;
  out += `<circle cx="${pi.x}" cy="${pi.y}" r="4" fill="${P.red}"/>`;
  out += `<circle cx="${z.x}" cy="${z.y}" r="11" fill="${P.navy}" stroke="#fff" stroke-width="2.5"/>`;
  out += `<text x="${z.x + 16}" y="${z.y - 10}" font-size="15" font-weight="700" fill="${P.navy}" font-family="${SANS}">z</text>`;
  out += `<circle cx="${OX}" cy="${OY}" r="3" fill="${P.axis}"/>`;

  return (
    `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" ` +
    `style="display:block;max-width:100%;height:auto">` + out + `</svg>`
  );
}

// Frozen states — the tool's six presets, one per plane region.
const polarRectangularDiagrams = {
  qi: diagram(3, 2),
  qii: diagram(-4, 3),
  qiii: diagram(-3, -4),
  qiv: diagram(5, -5),
  posImaginary: diagram(0, 5),
  negReal: diagram(-6, 0),
};

export default polarRectangularDiagrams;
