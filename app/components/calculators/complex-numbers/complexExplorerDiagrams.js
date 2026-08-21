// Static SVG diagrams for the Complex Number Explorer page sections (Line 1 v5).
// Each diagram freezes the ComplexExplorer tool in one of its explanation
// states, replicating ComplexPlaneKit's rendering at the default range (±5):
// canvas #ECEEF0 (rx 12), grid #d8e8f0, real axis in orange #B85C2A, imaginary
// axis in navy #304090, point/modulus elements in blue #4098d8, text #102050,
// tick labels #8a9ab0. Per state (mirroring the live render paths): right
// triangle with orange horizontal leg / navy vertical leg / blue hypotenuse
// (PlaneTriangle), dashed axis projections (PlaneProjection), conjugate ghost
// point with dashed reflection line (b ≠ 0 only), faint dashed modulus circle,
// then the main point with its z-label.
// Consumed by getStaticProps of the page; wrapped into framed illustration
// units via demoUnitFrame — never interpolated into content strings.

const C = {
  bg: '#ECEEF0',
  orange: '#B85C2A',
  navy: '#304090',
  blue: '#4098d8',
  text: '#102050',
  light: '#8a9ab0',
  grid: '#d8e8f0',
};

const W = 520;
const H = 480;
const RANGE = 5;
const MARGIN = 28;
const OX = W / 2;
const OY = H / 2;
const UNIT = Math.min((W - MARGIN * 2) / (RANGE * 2), (H - MARGIN * 2) / (RANGE * 2));

const px = (a) => +(OX + a * UNIT).toFixed(2);
const py = (b) => +(OY - b * UNIT).toFixed(2);

// Copied from ComplexPlaneKit so the frozen labels match the live tool exactly.
function formatNum(n) {
  if (Number.isInteger(n)) return n.toString();
  return n.toFixed(2).replace(/\.?0+$/, '');
}

function formatComplex(a, b) {
  if (a === 0 && b === 0) return '0';
  if (b === 0) return formatNum(a);
  if (a === 0) {
    if (b === 1) return 'i';
    if (b === -1) return '−i';
    return b < 0 ? `−${formatNum(-b)}i` : `${formatNum(b)}i`;
  }
  const bAbs = Math.abs(b);
  const bStr = bAbs === 1 ? '' : formatNum(bAbs);
  const sign = b > 0 ? ' + ' : ' − ';
  return `${formatNum(a)}${sign}${bStr}i`;
}

function planeBase() {
  let out = `<rect width="${W}" height="${H}" rx="12" fill="${C.bg}"/>`;
  for (let i = -RANGE; i <= RANGE; i++) {
    if (i === 0) continue;
    out += `<line x1="${px(i)}" y1="${MARGIN - 4}" x2="${px(i)}" y2="${H - MARGIN + 4}" stroke="${C.grid}" stroke-width="0.6"/>`;
    out += `<line x1="${MARGIN - 4}" y1="${py(i)}" x2="${W - MARGIN + 4}" y2="${py(i)}" stroke="${C.grid}" stroke-width="0.6"/>`;
  }
  out += `<line x1="${MARGIN - 8}" y1="${OY}" x2="${W - MARGIN + 8}" y2="${OY}" stroke="${C.orange}" stroke-width="2"/>`;
  out += `<text x="${W - MARGIN + 10}" y="${OY - 8}" font-size="12" font-weight="600" fill="${C.orange}">Re</text>`;
  out += `<line x1="${OX}" y1="${H - MARGIN + 8}" x2="${OX}" y2="${MARGIN - 8}" stroke="${C.navy}" stroke-width="2"/>`;
  out += `<text x="${OX + 8}" y="${MARGIN - 4}" font-size="12" font-weight="600" fill="${C.navy}">Im</text>`;
  for (let i = -RANGE; i <= RANGE; i++) {
    if (i === 0) continue;
    out += `<text x="${px(i)}" y="${OY + 15}" text-anchor="middle" font-size="10" fill="${C.light}">${i}</text>`;
    out += `<text x="${OX - 10}" y="${py(i) + 4}" text-anchor="end" font-size="10" fill="${C.light}">${i > 0 ? `${i}i` : `−${-i}i`}</text>`;
  }
  out += `<circle cx="${OX}" cy="${OY}" r="3" fill="${C.text}"/>`;
  out += `<text x="${OX - 10}" y="${OY + 15}" font-size="10" font-weight="600" fill="${C.text}">0</text>`;
  return out;
}

function triangle(a, b) {
  if (a === 0 || b === 0) return '';
  const X = px(a);
  const Y = py(b);
  const modulus = Math.sqrt(a * a + b * b);
  const sz = 10;
  const sx = a > 0 ? -sz : sz;
  const sy = b > 0 ? sz : -sz;
  const mx = (OX + X) / 2;
  const my = (OY + Y) / 2;
  const angle = (Math.atan2(OY - Y, X - OX) * 180) / Math.PI;
  let out = '';
  out += `<line x1="${OX}" y1="${OY}" x2="${X}" y2="${OY}" stroke="${C.orange}" stroke-width="2.5" opacity="0.7"/>`;
  out += `<line x1="${X}" y1="${OY}" x2="${X}" y2="${Y}" stroke="${C.navy}" stroke-width="2.5" opacity="0.7"/>`;
  out += `<line x1="${OX}" y1="${OY}" x2="${X}" y2="${Y}" stroke="${C.blue}" stroke-width="3" opacity="0.85"/>`;
  out += `<polyline points="${X + sx},${OY} ${X + sx},${OY + sy} ${X},${OY + sy}" fill="none" stroke="${C.light}" stroke-width="1"/>`;
  out += `<text x="${mx}" y="${b > 0 ? OY + 18 : OY - 8}" text-anchor="middle" font-size="13" font-weight="700" fill="${C.orange}" font-style="italic">a = ${formatNum(a)}</text>`;
  out += `<text x="${a > 0 ? X + 12 : X - 12}" y="${(OY + Y) / 2 + 4}" text-anchor="${a > 0 ? 'start' : 'end'}" font-size="13" font-weight="700" fill="${C.navy}" font-style="italic">b = ${formatNum(b)}</text>`;
  out += `<text x="${mx + (b > 0 ? -14 : 14) * (a > 0 ? 1 : -1)}" y="${my + (a > 0 ? -8 : 8)}" text-anchor="middle" font-size="13" font-weight="700" fill="${C.blue}" transform="rotate(${+(-angle).toFixed(2)}, ${mx}, ${my})">|z| = ${formatNum(modulus)}</text>`;
  return out;
}

function projections(a, b) {
  const X = px(a);
  const Y = py(b);
  let out = '';
  if (b !== 0) {
    out += `<line x1="${X}" y1="${Y}" x2="${X}" y2="${OY}" stroke="${C.navy}" stroke-width="1" stroke-dasharray="4,3" opacity="0.3"/>`;
  }
  if (a !== 0) {
    out += `<line x1="${X}" y1="${Y}" x2="${OX}" y2="${Y}" stroke="${C.orange}" stroke-width="1" stroke-dasharray="4,3" opacity="0.3"/>`;
  }
  return out;
}

function conjugate(a, b) {
  if (b === 0) return '';
  const X = px(a);
  let out = `<line x1="${X}" y1="${py(b)}" x2="${X}" y2="${py(-b)}" stroke="${C.blue}" stroke-width="1" stroke-dasharray="4,4" opacity="0.2"/>`;
  out += `<circle cx="${X}" cy="${py(-b)}" r="4.5" fill="${C.orange}" opacity="0.35"/>`;
  out += `<text x="${X + 10}" y="${py(-b) - 6}" font-size="13" font-weight="700" fill="${C.orange}" opacity="0.55" font-style="italic">z&#x305;</text>`;
  return out;
}

function modulusCircle(a, b) {
  const m = Math.sqrt(a * a + b * b);
  if (m === 0) return '';
  return `<circle cx="${OX}" cy="${OY}" r="${(m * UNIT).toFixed(2)}" fill="none" stroke="${C.blue}" stroke-width="1.2" stroke-dasharray="6,4" opacity="0.15"/>`;
}

function mainPoint(a, b, key) {
  const X = px(a);
  const Y = py(b);
  return (
    `<circle cx="${X}" cy="${Y}" r="7" fill="${C.blue}" filter="url(#drop-${key})"/>` +
    `<text x="${X + 12}" y="${Y - 10}" font-size="13" font-weight="700" fill="${C.text}" font-style="italic">z = ${formatComplex(a, b)}</text>`
  );
}

function diagram(key, a, b) {
  return (
    `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" ` +
    `font-family="'DM Sans','Segoe UI',sans-serif" style="display:block;max-width:100%;height:auto">` +
    `<defs><filter id="drop-${key}" x="-10%" y="-10%" width="130%" height="140%">` +
    `<feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="${C.navy}" flood-opacity="0.1"/></filter></defs>` +
    planeBase() +
    triangle(a, b) +
    projections(a, b) +
    conjugate(a, b) +
    modulusCircle(a, b) +
    mainPoint(a, b, key) +
    `</svg>`
  );
}

// Frozen states — one per explanation state of the tool's default engine.
const complexExplorerDiagrams = {
  origin: diagram('origin', 0, 0),
  purelyReal: diagram('purelyReal', 3, 0),
  pureImaginary: diagram('pureImaginary', 0, 2),
  quadrantI: diagram('quadrantI', 2, 3),
  quadrantII: diagram('quadrantII', -3, 2),
  quadrantIII: diagram('quadrantIII', -2, -3),
  quadrantIV: diagram('quadrantIV', 3, -2),
};

export default complexExplorerDiagrams;
