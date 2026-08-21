// Static SVG diagrams for the Complex Distance & Midpoint page sections
// (Line 1 v5). Each diagram freezes ComplexDistanceMidpoint in one preset
// state (plus the coincident-points state), replicating the component's
// rendering exactly: 720×720 canvas #ECEEF0 (rx 12), range ±5, dashed blue
// locus circle centered at z₁ through z₂, teal Δa leg and red #c04040 Δb leg
// with the right-angle marker and mono labels, orange distance segment with
// its rotated d-label, purple midpoint M, faint origin vectors, and the navy
// z₁ / orange z₂ points — all with the live tool's visibility thresholds.
// Consumed by getStaticProps of the page via demoUnitFrame.

const P = {
  navy: '#304090',
  blue: '#4098d8',
  orange: '#B85C2A',
  teal: '#2A7A8C',
  red: '#c04040',
  purple: '#6A4E7A',
  axis: '#8098b0',
  grid: '#d8e4ec',
  bg: '#ECEEF0',
};

const W = 720;
const H = 720;
const MARGIN = 52;
const RANGE = 5;
const SCALE = (W - 2 * MARGIN) / (2 * RANGE);
const OX = W / 2;
const OY = H / 2;

const sx = (re) => +(OX + re * SCALE).toFixed(2);
const sy = (im) => +(OY - im * SCALE).toFixed(2);

const MONO = "'JetBrains Mono', monospace";
const SANS = "'DM Sans', sans-serif";

function fmtNum(v) {
  if (Math.abs(v) < 0.005) return '0';
  if (Math.abs(v - Math.round(v)) < 0.005) return String(Math.round(v));
  return v.toFixed(2);
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
    if (i === 0) continue;
    out += `<text x="${sx(i)}" y="${OY + 16}" text-anchor="middle" font-size="12" fill="${P.axis}" font-family="${MONO}">${i}</text>`;
    out += `<text x="${OX - 10}" y="${sy(i) + 4}" text-anchor="end" font-size="12" fill="${P.axis}" font-family="${MONO}">${i > 0 ? `${i}i` : `−${Math.abs(i)}i`}</text>`;
  }
  return out;
}

function diagram(z1, z2) {
  const diff = { re: z1.re - z2.re, im: z1.im - z2.im };
  const distance = Math.sqrt(diff.re * diff.re + diff.im * diff.im);
  const midpoint = { re: (z1.re + z2.re) / 2, im: (z1.im + z2.im) / 2 };
  const p1 = { x: sx(z1.re), y: sy(z1.im) };
  const p2 = { x: sx(z2.re), y: sy(z2.im) };
  const pm = { x: sx(midpoint.re), y: sy(midpoint.im) };
  const labelAngle = Math.atan2(z1.im - z2.im, z1.re - z2.re) + Math.PI / 2;
  const labelOffset = 16;
  let out = planeBase();

  if (distance > 0.1) {
    out += `<circle cx="${p1.x}" cy="${p1.y}" r="${(distance * SCALE).toFixed(2)}" fill="none" stroke="${P.blue}" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.3"/>`;
  }

  if (Math.abs(diff.re) > 0.15 && Math.abs(diff.im) > 0.15) {
    out += `<line x1="${p2.x}" y1="${p2.y}" x2="${p1.x}" y2="${p2.y}" stroke="${P.teal}" stroke-width="2" opacity="0.5"/>`;
    out += `<line x1="${p1.x}" y1="${p2.y}" x2="${p1.x}" y2="${p1.y}" stroke="${P.red}" stroke-width="2" opacity="0.5"/>`;
    const sz = 9;
    const dirX = diff.re > 0 ? -1 : 1;
    const dirY = diff.im > 0 ? -1 : 1;
    out += `<polyline points="${p1.x},${p2.y + dirY * sz} ${p1.x + dirX * sz},${p2.y + dirY * sz} ${p1.x + dirX * sz},${p2.y}" fill="none" stroke="${P.axis}" stroke-width="1.2"/>`;
    out += `<text x="${((p2.x + p1.x) / 2).toFixed(2)}" y="${p2.y + (diff.im > 0 ? 18 : -10)}" text-anchor="middle" font-size="12" font-weight="600" fill="${P.teal}" font-family="${MONO}">&#916;a = ${fmtNum(Math.abs(diff.re))}</text>`;
    out += `<text x="${p1.x + (diff.re > 0 ? 16 : -16)}" y="${((p2.y + p1.y) / 2 + 4).toFixed(2)}" text-anchor="${diff.re > 0 ? 'start' : 'end'}" font-size="12" font-weight="600" fill="${P.red}" font-family="${MONO}">&#916;b = ${fmtNum(Math.abs(diff.im))}</text>`;
  }

  out += `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="${P.orange}" stroke-width="3"/>`;

  if (distance > 0.2) {
    out += `<text x="${((p1.x + p2.x) / 2 + labelOffset * Math.cos(labelAngle)).toFixed(2)}" y="${((p1.y + p2.y) / 2 + labelOffset * Math.sin(labelAngle)).toFixed(2)}" text-anchor="middle" font-size="14" font-weight="700" fill="${P.orange}" font-family="${MONO}">d = ${fmtNum(distance)}</text>`;
  }

  out += `<circle cx="${pm.x}" cy="${pm.y}" r="7" fill="${P.purple}" stroke="#fff" stroke-width="2"/>`;
  out += `<text x="${pm.x + 12}" y="${pm.y - 10}" font-size="13" font-weight="700" fill="${P.purple}" font-family="${SANS}">M</text>`;

  out += `<line x1="${OX}" y1="${OY}" x2="${p1.x}" y2="${p1.y}" stroke="${P.navy}" stroke-width="1.5" opacity="0.35"/>`;
  out += `<line x1="${OX}" y1="${OY}" x2="${p2.x}" y2="${p2.y}" stroke="${P.orange}" stroke-width="1.5" opacity="0.35"/>`;

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

// Frozen states — the five presets plus the coincident-points configuration.
const distanceMidpointDiagrams = {
  general: diagram({ re: -2, im: 1 }, { re: 3, im: 3 }),
  originPair: diagram({ re: 0, im: 0 }, { re: 3, im: 4 }),
  symmetric: diagram({ re: -3, im: -2 }, { re: 3, im: 2 }),
  vertical: diagram({ re: 1, im: 4 }, { re: 1, im: -2 }),
  horizontal: diagram({ re: -4, im: 0 }, { re: 4, im: 0 }),
  coincident: diagram({ re: 2, im: 1 }, { re: 2, im: 1 }),
};

export default distanceMidpointDiagrams;
