// Static SVG diagrams for the Complex Addition & Subtraction Visualizer page
// sections (Line 1 v5). Each diagram freezes ComplexAddSubVisualizer in one
// mode/preset state, replicating the component's rendering exactly: 720×720
// canvas #ECEEF0 (rx 12), range ±5, margin 52, grid #d8e4ec, axes #8098b0,
// navy z₁ vector / orange z₂ vector with arrowheads, teal sum vector +
// parallelogram fill #2A7A8C, purple difference vector #6A4E7A with the
// z₂→z₁ dashed line and the faint −z₂ ghost, dashed ghost tip-to-tail
// vectors, off-screen sums drawn as dashed rays to the edge (rayToEdge).
// Consumed by getStaticProps of the page via demoUnitFrame.

const P = {
  navy: '#304090',
  orange: '#B85C2A',
  teal: '#2A7A8C',
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

function arrowHead(fx, fy, tx, ty, color, size = 10) {
  const dx = tx - fx, dy = ty - fy;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len < 5) return '';
  const ux = dx / len, uy = dy / len;
  const a = 0.4;
  const lx = tx - size * (ux * Math.cos(a) - uy * Math.sin(a));
  const ly = ty - size * (uy * Math.cos(a) + ux * Math.sin(a));
  const rx = tx - size * (ux * Math.cos(-a) - uy * Math.sin(-a));
  const ry = ty - size * (uy * Math.cos(-a) + ux * Math.sin(-a));
  return `<polygon points="${tx},${ty} ${lx.toFixed(2)},${ly.toFixed(2)} ${rx.toFixed(2)},${ry.toFixed(2)}" fill="${color}"/>`;
}

function rayToEdge(angle, color, label) {
  const edgeDist = RANGE - 0.3;
  const cosA = Math.cos(angle), sinA = Math.sin(angle);
  let t = edgeDist * 100;
  if (Math.abs(cosA) > 0.001) t = Math.min(t, edgeDist / Math.abs(cosA));
  if (Math.abs(sinA) > 0.001) t = Math.min(t, edgeDist / Math.abs(sinA));
  const ex = sx(t * cosA), ey = sy(t * sinA);
  const aLen = 12, aAngle = 0.35;
  const bDx = OX - ex, bDy = OY - ey;
  const bMag = Math.sqrt(bDx * bDx + bDy * bDy);
  if (bMag < 1) return '';
  const ux = bDx / bMag, uy = bDy / bMag;
  const lx = ex + aLen * (ux * Math.cos(aAngle) - uy * Math.sin(aAngle));
  const ly = ey + aLen * (uy * Math.cos(aAngle) + ux * Math.sin(aAngle));
  const rx = ex + aLen * (ux * Math.cos(-aAngle) - uy * Math.sin(-aAngle));
  const ry = ey + aLen * (uy * Math.cos(-aAngle) + ux * Math.sin(-aAngle));
  return (
    `<line x1="${OX}" y1="${OY}" x2="${ex}" y2="${ey}" stroke="${color}" stroke-width="3" stroke-dasharray="8,4"/>` +
    `<polygon points="${ex},${ey} ${lx.toFixed(2)},${ly.toFixed(2)} ${rx.toFixed(2)},${ry.toFixed(2)}" fill="${color}"/>` +
    `<text x="${ex + (cosA >= 0 ? -50 : 8)}" y="${ey + (sinA >= 0 ? -10 : 18)}" font-size="13" font-weight="700" fill="${color}" font-family="${MONO}">${label} &#8594;</text>`
  );
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

function diagram(z1, z2, mode) {
  const sum = { re: z1.re + z2.re, im: z1.im + z2.im };
  const diff = { re: z1.re - z2.re, im: z1.im - z2.im };
  const p1 = { x: sx(z1.re), y: sy(z1.im) };
  const p2 = { x: sx(z2.re), y: sy(z2.im) };
  const ps = { x: sx(sum.re), y: sy(sum.im) };
  const pd = { x: sx(diff.re), y: sy(diff.im) };
  const pn2 = { x: sx(-z2.re), y: sy(-z2.im) };
  const sumVisible = Math.abs(sum.re) <= RANGE && Math.abs(sum.im) <= RANGE;
  const diffVisible = Math.abs(diff.re) <= RANGE && Math.abs(diff.im) <= RANGE;
  const showAdd = mode === 'add' || mode === 'both';
  const showSub = mode === 'sub' || mode === 'both';
  let out = planeBase();

  if (showAdd) {
    if (sumVisible) {
      out += `<polygon points="${OX},${OY} ${p1.x},${p1.y} ${ps.x},${ps.y} ${p2.x},${p2.y}" fill="${P.teal}" fill-opacity="0.06"/>`;
      out += `<line x1="${p1.x}" y1="${p1.y}" x2="${ps.x}" y2="${ps.y}" stroke="${P.orange}" stroke-width="2" stroke-dasharray="6,4" opacity="0.6"/>`;
      out += arrowHead(p1.x, p1.y, ps.x, ps.y, P.orange);
      out += `<line x1="${p2.x}" y1="${p2.y}" x2="${ps.x}" y2="${ps.y}" stroke="${P.navy}" stroke-width="2" stroke-dasharray="6,4" opacity="0.6"/>`;
      out += arrowHead(p2.x, p2.y, ps.x, ps.y, P.navy);
      out += `<line x1="${OX}" y1="${OY}" x2="${ps.x}" y2="${ps.y}" stroke="${P.teal}" stroke-width="3"/>`;
      out += arrowHead(OX, OY, ps.x, ps.y, P.teal, 12);
      out += `<circle cx="${ps.x}" cy="${ps.y}" r="8" fill="${P.teal}" stroke="#fff" stroke-width="2"/>`;
      out += `<text x="${ps.x + 14}" y="${ps.y - 10}" font-size="14" font-weight="700" fill="${P.teal}" font-family="${SANS}">z&#x2081;+z&#x2082;</text>`;
    } else {
      out += rayToEdge(Math.atan2(sum.im, sum.re), P.teal, 'z₁+z₂');
    }
  }

  if (showSub) {
    out += `<line x1="${p2.x}" y1="${p2.y}" x2="${p1.x}" y2="${p1.y}" stroke="${P.purple}" stroke-width="2" stroke-dasharray="5,3" opacity="0.5"/>`;
    if (diffVisible) {
      out += `<line x1="${OX}" y1="${OY}" x2="${pd.x}" y2="${pd.y}" stroke="${P.purple}" stroke-width="3"/>`;
      out += arrowHead(OX, OY, pd.x, pd.y, P.purple, 12);
      out += `<circle cx="${pd.x}" cy="${pd.y}" r="8" fill="${P.purple}" stroke="#fff" stroke-width="2"/>`;
      out += `<text x="${pd.x + 14}" y="${pd.y - 10}" font-size="14" font-weight="700" fill="${P.purple}" font-family="${SANS}">z&#x2081;&#8722;z&#x2082;</text>`;
    } else {
      out += rayToEdge(Math.atan2(diff.im, diff.re), P.purple, 'z₁−z₂');
    }
    out += `<line x1="${OX}" y1="${OY}" x2="${pn2.x}" y2="${pn2.y}" stroke="${P.orange}" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.35"/>`;
    out += `<text x="${pn2.x + 10}" y="${pn2.y - 8}" font-size="11" font-weight="600" fill="${P.orange}" opacity="0.6" font-family="${MONO}">&#8722;z&#x2082;</text>`;
  }

  out += `<line x1="${OX}" y1="${OY}" x2="${p1.x}" y2="${p1.y}" stroke="${P.navy}" stroke-width="2.5"/>`;
  out += arrowHead(OX, OY, p1.x, p1.y, P.navy, 11);
  out += `<line x1="${OX}" y1="${OY}" x2="${p2.x}" y2="${p2.y}" stroke="${P.orange}" stroke-width="2.5"/>`;
  out += arrowHead(OX, OY, p2.x, p2.y, P.orange, 11);
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

// Frozen states — the three display modes at the opening pair, plus the four
// non-default presets in Both mode. (The '(3+i) & (1+3i)' preset IS the
// opening pair; its state is the 'both' diagram.)
const complexAddSubDiagrams = {
  add: diagram({ re: 3, im: 1 }, { re: 1, im: 3 }, 'add'),
  sub: diagram({ re: 3, im: 1 }, { re: 1, im: 3 }, 'sub'),
  both: diagram({ re: 3, im: 1 }, { re: 1, im: 3 }, 'both'),
  mirror: diagram({ re: 2, im: 2 }, { re: -2, im: 2 }, 'both'),
  axes: diagram({ re: 4, im: 0 }, { re: 0, im: 3 }, 'both'),
  conjugatePair: diagram({ re: 3, im: 2 }, { re: 3, im: -2 }, 'both'),
  mixed: diagram({ re: -1, im: 3 }, { re: 2, im: -1 }, 'both'),
};

export default complexAddSubDiagrams;
