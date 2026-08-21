// Static SVG diagrams for the De Moivre's Theorem Visualizer page sections
// (Line 1 v5). Each diagram freezes DeMoivreCalculator in one preset state,
// replicating the component's rendering exactly: 624×624 canvas #ECEEF0
// (rx 12), range ±10, dashed navy |z| circle and teal |zⁿ| circle, navy θ arc
// at 0.7 and teal nθ arc at 1.2 (normalized angle) with mono labels, the
// purple #9060c0 intermediate-power trail with zᵏ labels and dashed polyline,
// navy z vector/point, teal result vector/point — or the dashed ray to the
// edge when the result leaves the ±10 window, and the zoom inset when the
// result modulus falls below 1. Consumed by getStaticProps via demoUnitFrame.

const P = {
  navy: '#304090',
  teal: '#2A7A8C',
  purple: '#9060c0',
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

const SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
const toSup = (num) => String(num).split('').map(c => SUP[c] || c).join('');

function fmtNum(v) {
  if (Math.abs(v) < 0.005) return '0';
  if (Math.abs(v - Math.round(v)) < 0.005) return String(Math.round(v));
  return v.toFixed(2);
}

function fmtComplex(r, i) {
  const rs = fmtNum(r);
  const ai = Math.abs(i);
  const is_ = fmtNum(ai);
  if (Math.abs(i) < 0.005) return rs;
  if (Math.abs(r) < 0.005) {
    if (is_ === '1') return i > 0 ? 'i' : '−i';
    return i > 0 ? `${is_}i` : `−${is_}i`;
  }
  const sign = i > 0 ? ' + ' : ' − ';
  const iPart = is_ === '1' ? 'i' : `${is_}i`;
  return `${rs}${sign}${iPart}`;
}

const normalizeAngle = (a) => {
  let r = a % (2 * Math.PI);
  if (r > Math.PI) r -= 2 * Math.PI;
  if (r < -Math.PI) r += 2 * Math.PI;
  return r;
};

function makeArc(arcRadius, startAngle, endAngle) {
  const diff = endAngle - startAngle;
  if (Math.abs(diff) < 0.01) return '';
  const clampedEnd = Math.abs(diff) >= 2 * Math.PI
    ? startAngle + Math.sign(diff) * (2 * Math.PI - 0.01)
    : endAngle;
  const rPx = arcRadius * SCALE;
  const ax = OX + rPx * Math.cos(startAngle);
  const ay = OY - rPx * Math.sin(startAngle);
  const ex = OX + rPx * Math.cos(clampedEnd);
  const ey = OY - rPx * Math.sin(clampedEnd);
  const absDiff = Math.abs(clampedEnd - startAngle);
  const largeArc = absDiff > Math.PI ? 1 : 0;
  const sweepFlag = (clampedEnd - startAngle) > 0 ? 0 : 1;
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

function diagram(key, re, im, n) {
  const mod = Math.sqrt(re * re + im * im);
  const arg = Math.atan2(im, re);
  const modResult = Math.pow(mod, n);
  const argResult = arg * n;
  const argResultNorm = normalizeAngle(argResult);
  const resultRe = modResult * Math.cos(argResult);
  const resultIm = modResult * Math.sin(argResult);
  const resultVisible = Math.abs(resultRe) <= RANGE && Math.abs(resultIm) <= RANGE;
  const z = { x: sx(re), y: sy(im) };
  const rp = { x: sx(resultRe), y: sy(resultIm) };
  let out = planeBase();

  if (mod > 0.2) {
    out += `<circle cx="${OX}" cy="${OY}" r="${(mod * SCALE).toFixed(2)}" fill="none" stroke="${P.navy}" stroke-width="1" stroke-dasharray="4,3" opacity="0.3"/>`;
  }
  if (modResult > 0.2 && modResult <= RANGE) {
    out += `<circle cx="${OX}" cy="${OY}" r="${(modResult * SCALE).toFixed(2)}" fill="none" stroke="${P.teal}" stroke-width="1" stroke-dasharray="4,3" opacity="0.3"/>`;
  }
  if (mod > 0.3 && Math.abs(arg) > 0.05) {
    out += `<path d="${makeArc(0.7, 0, arg)}" fill="none" stroke="${P.navy}" stroke-width="2" opacity="0.5"/>`;
  }
  if (modResult > 0.1 && Math.abs(argResult) > 0.05 && makeArc(1.2, 0, argResultNorm)) {
    out += `<path d="${makeArc(1.2, 0, argResultNorm)}" fill="none" stroke="${P.teal}" stroke-width="2.5" opacity="0.6"/>`;
  }
  if (mod > 0.5 && Math.abs(arg) > 0.15) {
    const mid = arg / 2;
    out += `<text x="${sx(0.9 * Math.cos(mid))}" y="${sy(0.9 * Math.sin(mid))}" text-anchor="middle" font-size="12" font-weight="600" fill="${P.navy}" font-family="${MONO}">&#952;</text>`;
  }
  if (modResult > 0.1 && Math.abs(argResultNorm) > 0.15) {
    const mid = argResultNorm / 2;
    out += `<text x="${sx(1.5 * Math.cos(mid))}" y="${sy(1.5 * Math.sin(mid))}" text-anchor="middle" font-size="12" font-weight="700" fill="${P.teal}" font-family="${MONO}">n&#952;</text>`;
  }

  const trail = [];
  if (mod > 0.01 && Math.abs(n) >= 2) {
    const steps = n > 0 ? n : -n;
    for (let k = 1; k < steps; k++) {
      const kActual = n > 0 ? k : -k;
      const tMod = Math.pow(mod, kActual);
      const tArg = arg * kActual;
      const tRe = tMod * Math.cos(tArg);
      const tIm = tMod * Math.sin(tArg);
      if (Math.abs(tRe) <= RANGE && Math.abs(tIm) <= RANGE) {
        trail.push({ re: tRe, im: tIm, k: kActual });
      }
    }
  }
  for (const t of trail) {
    const tx = sx(t.re), ty = sy(t.im);
    out += `<circle cx="${tx}" cy="${ty}" r="4" fill="${P.purple}" opacity="0.5"/>`;
    out += `<text x="${tx + 8}" y="${ty - 6}" font-size="10" font-weight="600" fill="${P.purple}" opacity="0.7" font-family="${MONO}">z${toSup(t.k)}</text>`;
  }
  if (trail.length > 0) {
    const allPts = [{ re, im }, ...trail, ...(resultVisible ? [{ re: resultRe, im: resultIm }] : [])];
    const pts = allPts.map(p => `${sx(p.re)},${sy(p.im)}`).join(' ');
    out += `<polyline points="${pts}" fill="none" stroke="${P.purple}" stroke-width="1" stroke-dasharray="3,3" opacity="0.4"/>`;
  }

  out += `<line x1="${OX}" y1="${OY}" x2="${z.x}" y2="${z.y}" stroke="${P.navy}" stroke-width="2.5"/>`;

  if (modResult > 0.1) {
    if (resultVisible) {
      out += `<line x1="${OX}" y1="${OY}" x2="${rp.x}" y2="${rp.y}" stroke="${P.teal}" stroke-width="3"/>`;
    } else {
      const edgeDist = RANGE - 0.3;
      const cosA = Math.cos(argResultNorm);
      const sinA = Math.sin(argResultNorm);
      let t = edgeDist * 100;
      if (Math.abs(cosA) > 0.001) t = Math.min(t, edgeDist / Math.abs(cosA));
      if (Math.abs(sinA) > 0.001) t = Math.min(t, edgeDist / Math.abs(sinA));
      const ex = sx(t * cosA), ey = sy(t * sinA);
      const aLen = 12, aAngle = 0.35;
      const bDx = OX - ex, bDy = OY - ey;
      const bMag = Math.sqrt(bDx * bDx + bDy * bDy);
      const ux = bDx / bMag, uy = bDy / bMag;
      const lx = ex + aLen * (ux * Math.cos(aAngle) - uy * Math.sin(aAngle));
      const ly = ey + aLen * (uy * Math.cos(aAngle) + ux * Math.sin(aAngle));
      const rx = ex + aLen * (ux * Math.cos(-aAngle) - uy * Math.sin(-aAngle));
      const ry = ey + aLen * (uy * Math.cos(-aAngle) + ux * Math.sin(-aAngle));
      out += `<line x1="${OX}" y1="${OY}" x2="${ex}" y2="${ey}" stroke="${P.teal}" stroke-width="3" stroke-dasharray="8,4"/>`;
      out += `<polygon points="${ex},${ey} ${lx.toFixed(2)},${ly.toFixed(2)} ${rx.toFixed(2)},${ry.toFixed(2)}" fill="${P.teal}"/>`;
      out += `<text x="${ex + (cosA >= 0 ? -46 : 8)}" y="${ey + (sinA >= 0 ? -10 : 18)}" font-size="12" font-weight="700" fill="${P.teal}" font-family="${MONO}">z${toSup(n)} &#8594;</text>`;
    }
  }

  if (resultVisible && modResult > 0.1) {
    out += `<circle cx="${rp.x}" cy="${rp.y}" r="9" fill="${P.teal}" stroke="#fff" stroke-width="2"/>`;
    out += `<text x="${rp.x + 14}" y="${rp.y - 12}" font-size="14" font-weight="700" fill="${P.teal}" font-family="${SANS}">z${toSup(n)}</text>`;
  }

  out += `<circle cx="${z.x}" cy="${z.y}" r="11" fill="${P.navy}" stroke="#fff" stroke-width="2.5"/>`;
  out += `<text x="${z.x + 14}" y="${z.y - 12}" font-size="15" font-weight="700" fill="${P.navy}" font-family="${SANS}">z</text>`;
  out += `<circle cx="${OX}" cy="${OY}" r="3" fill="${P.axis}"/>`;

  if (modResult > 0.01 && modResult < 1.0 && resultVisible) {
    const insetSize = 160;
    const insetX = W - MARGIN - insetSize - 4;
    const insetY = MARGIN + 4;
    const insetRange = Math.max(modResult * 1.8, 0.15);
    const insetScale = (insetSize - 20) / (2 * insetRange);
    const insetCx = insetX + insetSize / 2;
    const insetCy = insetY + insetSize / 2;
    const iqx = (insetCx + resultRe * insetScale).toFixed(2);
    const iqy = (insetCy - resultIm * insetScale).toFixed(2);
    out += `<rect x="${insetX}" y="${insetY}" width="${insetSize}" height="${insetSize}" rx="8" fill="#fff" stroke="${P.navy}" stroke-width="2" opacity="0.95"/>`;
    out += `<text x="${insetX + 8}" y="${insetY + 16}" font-size="11" font-weight="700" fill="${P.navy}" font-family="${SANS}">Zoom</text>`;
    out += `<clipPath id="insetClipDM-${key}"><rect x="${insetX + 1}" y="${insetY + 1}" width="${insetSize - 2}" height="${insetSize - 2}" rx="7"/></clipPath>`;
    out += `<g clip-path="url(#insetClipDM-${key})">`;
    out += `<line x1="${insetX}" y1="${insetCy}" x2="${insetX + insetSize}" y2="${insetCy}" stroke="${P.axis}" stroke-width="1"/>`;
    out += `<line x1="${insetCx}" y1="${insetY}" x2="${insetCx}" y2="${insetY + insetSize}" stroke="${P.axis}" stroke-width="1"/>`;
    out += `<line x1="${insetCx}" y1="${insetCy}" x2="${iqx}" y2="${iqy}" stroke="${P.teal}" stroke-width="2.5"/>`;
    out += `<circle cx="${iqx}" cy="${iqy}" r="6" fill="${P.teal}" stroke="#fff" stroke-width="1.5"/>`;
    out += `<text x="${+iqx + 10}" y="${+iqy - 8}" font-size="12" font-weight="700" fill="${P.teal}" font-family="${SANS}">z${toSup(n)}</text>`;
    out += `<circle cx="${insetCx}" cy="${insetCy}" r="2.5" fill="${P.axis}"/>`;
    out += `<text x="${insetX + insetSize / 2}" y="${insetY + insetSize - 8}" text-anchor="middle" font-size="10" font-weight="600" fill="#5a6480" font-family="${MONO}">${fmtComplex(resultRe, resultIm)}</text>`;
    out += `</g>`;
  }

  return (
    `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" ` +
    `style="display:block;max-width:100%;height:auto">` + out + `</svg>`
  );
}

// Frozen states — the tool's seven presets.
const deMoivreDiagrams = {
  squared: diagram('squared', 1, 1, 2),
  fourth: diagram('fourth', 1, 1, 4),
  iCubed: diagram('iCubed', 0, 1, 3),
  eighth: diagram('eighth', 1, 1, 8),
  inverse: diagram('inverse', 3, 4, -1),
  twoTen: diagram('twoTen', 2, 0, 10),
  inward: diagram('inward', 0.5, 0.5, 6),
};

export default deMoivreDiagrams;
