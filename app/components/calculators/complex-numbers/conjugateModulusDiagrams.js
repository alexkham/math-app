// Static SVG diagrams for the Complex Conjugate & Modulus Visualizer page
// sections (Line 1 v5). Each diagram freezes ConjugateModulusVisualizer in one
// of its preset/special states, replicating the component's rendering exactly:
// 520×520 canvas #ECEEF0 (rx 12), range ±10, margin 40, grid #d8e4ec, axes
// #8098b0 with navy Re/Im labels, ticks every 2 units in JetBrains Mono,
// dashed blue modulus circle #4098d8, navy z vector (solid) and orange z̄
// vector (dashed #B85C2A), purple symmetry line #6A4E7A, right-triangle guide
// legs at 0.4 opacity, z point r10 navy / z̄ point r8 orange, origin dot
// #8098b0. Consumed by getStaticProps of the page via demoUnitFrame.

const P = {
  navy: '#304090',
  blue: '#4098d8',
  orange: '#B85C2A',
  purple: '#6A4E7A',
  axis: '#8098b0',
  grid: '#d8e4ec',
  bg: '#ECEEF0',
};

const W = 520;
const H = 520;
const MARGIN = 40;
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
  if (n === 0) return '0';
  if (Number.isInteger(n)) return String(n);
  return n.toFixed(1);
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
  out += `<text x="${W - MARGIN + 8}" y="${OY + 5}" font-size="13" font-weight="600" fill="${P.navy}" font-family="${SANS}">Re</text>`;
  out += `<text x="${OX + 8}" y="${MARGIN - 8}" font-size="13" font-weight="600" fill="${P.navy}" font-family="${SANS}">Im</text>`;
  for (let i = -RANGE; i <= RANGE; i++) {
    if (i === 0 || i % 2 !== 0) continue;
    out += `<text x="${sx(i)}" y="${OY + 16}" text-anchor="middle" font-size="10" fill="${P.axis}" font-family="${MONO}">${i}</text>`;
    out += `<text x="${OX - 10}" y="${sy(i) + 4}" text-anchor="end" font-size="10" fill="${P.axis}" font-family="${MONO}">${i > 0 ? `${i}i` : `−${Math.abs(i)}i`}</text>`;
  }
  return out;
}

function diagram(re, im) {
  const modulus = Math.sqrt(re * re + im * im);
  const zx = sx(re), zy = sy(im);
  const cx = sx(re), cy = sy(-im);
  const rx = sx(re), ry = sy(0);
  let out = planeBase();

  if (modulus > 0) {
    out += `<circle cx="${OX}" cy="${OY}" r="${(modulus * SCALE).toFixed(2)}" fill="none" stroke="${P.blue}" stroke-width="1.5" stroke-dasharray="6,3" opacity="0.5"/>`;
  }
  out += `<line x1="${MARGIN}" y1="${OY}" x2="${W - MARGIN}" y2="${OY}" stroke="${P.navy}" stroke-width="2" opacity="0.15"/>`;
  out += `<line x1="${OX}" y1="${OY}" x2="${rx}" y2="${ry}" stroke="${P.navy}" stroke-width="1.5" opacity="0.4"/>`;
  out += `<line x1="${rx}" y1="${ry}" x2="${zx}" y2="${zy}" stroke="${P.navy}" stroke-width="1.5" opacity="0.4"/>`;
  out += `<line x1="${rx}" y1="${ry}" x2="${cx}" y2="${cy}" stroke="${P.orange}" stroke-width="1.5" opacity="0.4"/>`;
  out += `<line x1="${OX}" y1="${OY}" x2="${zx}" y2="${zy}" stroke="${P.navy}" stroke-width="2.5"/>`;
  out += `<line x1="${OX}" y1="${OY}" x2="${cx}" y2="${cy}" stroke="${P.orange}" stroke-width="2.5" stroke-dasharray="7,4"/>`;
  out += `<line x1="${zx}" y1="${zy}" x2="${cx}" y2="${cy}" stroke="${P.purple}" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>`;
  if (modulus > 0.5) {
    out += `<text x="${((OX + zx) / 2 - 12).toFixed(2)}" y="${((OY + zy) / 2 - 8).toFixed(2)}" font-size="12" font-weight="600" fill="${P.navy}" font-family="${MONO}">|z| = ${fmtNum(Math.round(modulus * 100) / 100)}</text>`;
  }
  out += `<circle cx="${zx}" cy="${zy}" r="10" fill="${P.navy}" stroke="#fff" stroke-width="2.5"/>`;
  out += `<text x="${zx + 14}" y="${zy - 10}" font-size="14" font-weight="700" fill="${P.navy}" font-family="${SANS}">z</text>`;
  out += `<circle cx="${cx}" cy="${cy}" r="8" fill="${P.orange}" stroke="#fff" stroke-width="2"/>`;
  out += `<text x="${cx + 14}" y="${cy + 14}" font-size="14" font-weight="700" fill="${P.orange}" font-family="${SANS}">z&#x305;</text>`;
  out += `<circle cx="${OX}" cy="${OY}" r="3" fill="${P.axis}"/>`;

  return (
    `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" ` +
    `style="display:block;max-width:100%;height:auto">` + out + `</svg>`
  );
}

// Frozen states — the five presets plus the origin special case.
const conjugateModulusDiagrams = {
  start: diagram(3, 2),
  negativeReal: diagram(-1, 4),
  pureImaginary: diagram(0, 3),
  purelyReal: diagram(4, 0),
  thirdQuadrant: diagram(-2, -3),
  origin: diagram(0, 0),
};

export default conjugateModulusDiagrams;
