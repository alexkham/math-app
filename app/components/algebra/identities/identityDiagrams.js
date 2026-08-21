// Static SVG diagrams for the four algebraic-identity visualizers (Line 1).
// Each diagram freezes one visualizer at the arrival state of one of its four
// steps (stage N, sub-transition 0 — plus completed intro), replicating each
// component's own geometry, palette, and Dim dimension-line renderer:
//   SquareOfSum        a=5 b=3 PX=55, 760x560
//   SquareOfDifference a=7 b=3 PX=50, 760x560 (step 4 frozen fully exploded)
//   SquareOfTrinomial  a=4 b=2 c=3 PX=50, 840x660 (step 4 frozen fully exploded)
//   DifferenceOfSquares a=7 b=3 PX=50, 760x560 (step 4 frozen settled, shifted layout)
// Georgia serif italics match the components' fonts; oscillating stages are
// frozen at their fully-separated phase, the clearest teaching frame.

const G_FONT = "Georgia, 'Times New Roman', serif";
const DIM = '#444';

// ---- shared Dim renderer (ported verbatim) ----
const dim = (x1, y1, x2, y2, label, offset = 28, side = -1, color = DIM, fontSize = 20) => {
  const horiz = y1 === y2;
  let lx1 = x1, ly1 = y1, lx2 = x2, ly2 = y2, tx, ty, anchor = 'middle';
  if (horiz) {
    const off = offset * side;
    ly1 = ly2 = y1 + off;
    tx = (x1 + x2) / 2;
    ty = ly1 + (off > 0 ? 18 : -8);
  } else {
    const off = offset * side;
    lx1 = lx2 = x1 + off;
    tx = lx1 + (off > 0 ? 8 : -8);
    ty = (y1 + y2) / 2 + 6;
    anchor = off > 0 ? 'start' : 'end';
  }
  let s = `<line x1="${lx1}" y1="${ly1}" x2="${lx2}" y2="${ly2}" stroke="${color}" stroke-width="1.2"/>`;
  if (horiz) {
    s += `<line x1="${x1}" y1="${ly1 - 5}" x2="${x1}" y2="${ly1 + 5}" stroke="${color}" stroke-width="1.2"/>`;
    s += `<line x1="${x2}" y1="${ly2 - 5}" x2="${x2}" y2="${ly2 + 5}" stroke="${color}" stroke-width="1.2"/>`;
  } else {
    s += `<line x1="${lx1 - 5}" y1="${y1}" x2="${lx1 + 5}" y2="${y1}" stroke="${color}" stroke-width="1.2"/>`;
    s += `<line x1="${lx2 - 5}" y1="${y2}" x2="${lx2 + 5}" y2="${y2}" stroke="${color}" stroke-width="1.2"/>`;
  }
  s += `<text x="${tx}" y="${ty}" text-anchor="${anchor}" fill="${color}" font-size="${fontSize}" font-style="italic" font-family="${G_FONT}">${label}</text>`;
  return s;
};

const txt = (x, y, size, fill, t, extra = '') =>
  `<text x="${x}" y="${y}" text-anchor="middle" fill="${fill}" font-size="${size}" font-weight="500" font-style="italic" font-family="${G_FONT}" ${extra}>${t}</text>`;
const rect = (x, y, w, h, fill, stroke, sw = 2, extra = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="${sw}"` : ''} ${extra}/>`;

const wrap = (W, H, inner) =>
  `<svg width="560" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
  `style="border:1px solid #cbd5e1;background:#fafaf7;border-radius:12px;max-width:100%;display:block;margin:12px auto">` +
  `<rect width="${W}" height="${H}" fill="#fafaf7"/>` + inner + `</svg>`;

// ============ Square of a Sum ============
const sumFrame = (step) => {
  const PX = 55, a = 5, b = 3, W = 760, H = 560;
  const aPx = a * PX, bPx = b * PX, totalPx = aPx + bPx;
  const sqX = (W - totalPx) / 2, sqY = (H - totalPx) / 2 + 25;
  const A_FILL = '#dde9f7', A_STROKE = '#2c5d99', A_TEXT = '#143a66';
  const AB_FILL = '#fdecd0', AB_STROKE = '#d4881a', AB_TEXT = '#7a4a08';
  const B_FILL = '#f7dde9', B_STROKE = '#992c5d', B_TEXT = '#66143a';
  let s = '';

  if (step === 4) {
    s += rect(sqX, sqY, aPx, aPx, A_FILL, A_STROKE);
    s += txt(sqX + aPx / 2, sqY + aPx / 2 + 14, 42, A_TEXT, 'a²');
    s += rect(sqX + aPx, sqY + aPx, bPx, bPx, B_FILL, B_STROKE);
    s += txt(sqX + aPx + bPx / 2, sqY + aPx + bPx / 2 + 10, 28, B_TEXT, 'b²');
    s += rect(sqX + aPx, sqY, bPx, aPx, AB_FILL, AB_STROKE);
    s += txt(sqX + aPx + bPx / 2, sqY + aPx / 2 + 10, 26, AB_TEXT, 'ab');
    s += rect(sqX, sqY + aPx, aPx, bPx, AB_FILL, AB_STROKE);
    s += txt(sqX + aPx / 2, sqY + aPx + bPx / 2 + 10, 26, AB_TEXT, 'ab');
  }
  s += rect(sqX, sqY, totalPx, totalPx, 'none', A_STROKE, 2.5);
  if (step >= 3) {
    s += `<line x1="${sqX + aPx}" y1="${sqY}" x2="${sqX + aPx}" y2="${sqY + totalPx}" stroke="${A_STROKE}" stroke-width="1.5"/>`;
    s += `<line x1="${sqX}" y1="${sqY + aPx}" x2="${sqX + totalPx}" y2="${sqY + aPx}" stroke="${A_STROKE}" stroke-width="1.5"/>`;
  }
  if (step >= 2) {
    s += `<line x1="${sqX + aPx}" y1="${sqY - 6}" x2="${sqX + aPx}" y2="${sqY + 6}" stroke="${AB_STROKE}" stroke-width="2.5"/>`;
    s += `<line x1="${sqX - 6}" y1="${sqY + aPx}" x2="${sqX + 6}" y2="${sqY + aPx}" stroke="${AB_STROKE}" stroke-width="2.5"/>`;
  }
  if (step === 1) {
    s += txt(sqX + totalPx / 2, sqY + totalPx / 2 + 20, 56, A_TEXT, '(a+b)²');
  }
  const combinedOffset = step === 1 ? 32 : 65;
  s += dim(sqX, sqY, sqX + totalPx, sqY, 'a + b', combinedOffset, -1);
  s += dim(sqX, sqY, sqX, sqY + totalPx, 'a + b', combinedOffset, -1);
  if (step >= 2) {
    s += dim(sqX, sqY, sqX + aPx, sqY, 'a', 32, -1);
    s += dim(sqX + aPx, sqY, sqX + totalPx, sqY, 'b', 32, -1, AB_STROKE);
    s += dim(sqX, sqY, sqX, sqY + aPx, 'a', 32, -1);
    s += dim(sqX, sqY + aPx, sqX, sqY + totalPx, 'b', 32, -1, AB_STROKE);
  }
  return wrap(W, H, s);
};

// ============ Square of a Difference ============
const diffFrame = (step) => {
  const PX = 50, a = 7, b = 3, W = 760, H = 560;
  const aPx = a * PX, bPx = b * PX, ambPx = (a - b) * PX;
  const sqX = (W - aPx) / 2, sqY = (H - aPx) / 2 + 10;
  const ambX = sqX, ambY = sqY + bPx;
  const topX = sqX, topY = sqY;
  const rightX = sqX + ambPx;
  const cornerX = sqX + ambPx, cornerY = sqY;
  const A_FILL = '#dde9f7', A_STROKE = '#2c5d99', A_TEXT = '#143a66';
  const AB_FILL = '#fdecd0', AB_STROKE = '#d4881a', AB_TEXT = '#7a4a08';
  const B_FILL = '#f7dde9', B_STROKE = '#992c5d', B_TEXT = '#66143a';
  let s = '';

  const splitDims = () => {
    let d = '';
    d += dim(sqX, sqY, sqX, sqY + bPx, 'b', 32, -1, B_STROKE);
    d += dim(sqX, sqY + bPx, sqX, sqY + aPx, 'a − b', 32, -1);
    d += dim(sqX, sqY, sqX, sqY + aPx, 'a', 70, -1);
    d += dim(sqX, sqY, sqX + ambPx, sqY, 'a − b', 32, -1);
    d += dim(sqX + ambPx, sqY, sqX + aPx, sqY, 'b', 32, -1, B_STROKE);
    d += dim(sqX, sqY, sqX + aPx, sqY, 'a', 70, -1);
    return d;
  };

  if (step === 1) {
    s += rect(sqX, sqY, aPx, aPx, A_FILL, A_STROKE, 2.5);
    s += txt(sqX + aPx / 2, sqY + aPx / 2 + 18, 56, A_TEXT, 'a²');
    s += dim(sqX, sqY, sqX, sqY + aPx, 'a', 32, -1);
    s += dim(sqX, sqY, sqX + aPx, sqY, 'a', 32, -1);
  } else if (step === 2) {
    s += rect(sqX, sqY, aPx, aPx, A_FILL, A_STROKE, 2.5);
    s += txt(sqX + aPx / 2, sqY + aPx / 2 + 18, 56, A_TEXT, 'a²');
    s += rect(cornerX, cornerY, bPx, bPx, B_FILL, B_STROKE);
    s += txt(cornerX + bPx / 2, cornerY + bPx / 2 + 10, 28, B_TEXT, 'b²');
    s += splitDims();
  } else if (step === 3) {
    s += rect(ambX, ambY, ambPx, ambPx, A_FILL, A_STROKE, 2.5);
    s += txt(ambX + ambPx / 2, ambY + ambPx / 2 + 12, 32, A_TEXT, '(a−b)²');
    // top strip group (in place) with its b² corner
    s += rect(topX, topY, ambPx, bPx, AB_FILL, AB_STROKE);
    s += txt(topX + ambPx / 2, topY + bPx / 2 + 8, 22, AB_TEXT, 'ab');
    s += rect(cornerX, cornerY, bPx, bPx, B_FILL, B_STROKE);
    s += txt(cornerX + bPx / 2, cornerY + bPx / 2 + 8, 22, B_TEXT, 'b²');
    // right strip group (in place)
    s += rect(rightX, sqY + bPx, bPx, ambPx, AB_FILL, AB_STROKE);
    s += txt(rightX + bPx / 2, sqY + bPx + ambPx / 2 + 8, 22, AB_TEXT, 'ab');
    // dashed (a−b)² outline
    s += rect(ambX, ambY, ambPx, ambPx, 'none', A_STROKE, 2.5, 'stroke-dasharray="6 4"');
    s += splitDims();
  } else {
    // step 4: fully exploded (oscillation frozen at maximum separation)
    const liftDy = -120, shiftDx = 130;
    s += rect(ambX, ambY, ambPx, ambPx, A_FILL, A_STROKE, 2.5);
    s += txt(ambX + ambPx / 2, ambY + ambPx / 2 + 12, 32, A_TEXT, '(a−b)²');
    s += `<g transform="translate(0, ${liftDy})">`;
    s += rect(topX, topY, ambPx, bPx, AB_FILL, AB_STROKE);
    s += txt(topX + ambPx / 2, topY + bPx / 2 + 8, 22, AB_TEXT, 'ab');
    s += rect(cornerX, cornerY, bPx, bPx, B_FILL, B_STROKE);
    s += txt(cornerX + bPx / 2, cornerY + bPx / 2 + 8, 22, B_TEXT, 'b²');
    s += `</g>`;
    s += `<g transform="translate(${shiftDx}, 0)">`;
    s += rect(rightX, sqY + bPx, bPx, ambPx, AB_FILL, AB_STROKE);
    s += txt(rightX + bPx / 2, sqY + bPx + ambPx / 2 + 8, 22, AB_TEXT, 'ab');
    s += `</g>`;
    s += splitDims();
  }
  return wrap(W, H, s);
};

// ============ Square of a Trinomial ============
const triFrame = (step) => {
  const PX = 50, a = 4, b = 2, c = 3, W = 840, H = 660;
  const aPx = a * PX, bPx = b * PX, cPx = c * PX;
  const sidePx = aPx + bPx + cPx;
  const sqX = (W - sidePx) / 2, sqY = (H - sidePx) / 2 + 40;
  const colX = [sqX, sqX + aPx, sqX + aPx + bPx];
  const colW = [aPx, bPx, cPx];
  const rowY = [sqY, sqY + aPx, sqY + aPx + bPx];
  const rowH = [aPx, bPx, cPx];
  const names = ['a', 'b', 'c'];
  const A_TEXT = '#143a66', A_STROKE = '#2c5d99';
  const palettes = {
    aa: { fill: '#cfdef5', stroke: '#2c5d99', text: '#143a66' },
    bb: { fill: '#f4cdd9', stroke: '#992c5d', text: '#66143a' },
    cc: { fill: '#d8ebc6', stroke: '#5a8a3a', text: '#2f4d1a' },
    ab: { fill: '#fce4b8', stroke: '#d4881a', text: '#7a4a08' },
    ac: { fill: '#dcd4ee', stroke: '#6a4caf', text: '#3a2870' },
    bc: { fill: '#f7d9c2', stroke: '#c25e1e', text: '#6e2f08' },
  };
  const cx = sqX + sidePx / 2, cy = sqY + sidePx / 2;
  const explodeP = step === 4 ? 1 : 0;
  const explodeMag = 70;
  let s = '';

  if (step <= 2) {
    s += rect(sqX, sqY, sidePx, sidePx, 'none', A_STROKE, 2.5);
  }
  if (step === 1) {
    s += txt(cx, cy + 22, 56, A_TEXT, '(a+b+c)²');
  }
  if (step >= 3) {
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      const x = colX[j], y = rowY[i], w = colW[j], h = rowH[i];
      const ccx = x + w / 2, ccy = y + h / 2;
      const dx = ccx - cx, dy = ccy - cy;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const ox = (dx / dist) * explodeP * explodeMag;
      const oy = (dy / dist) * explodeP * explodeMag;
      const key = [names[i], names[j]].sort().join('');
      const pal = palettes[key];
      const label = i === j ? `${names[i]}²` : key;
      const fs = Math.min(w, h) * 0.32;
      s += `<g transform="translate(${ox.toFixed(1)}, ${oy.toFixed(1)})">`;
      s += rect(x, y, w, h, pal.fill, pal.stroke);
      s += txt(ccx, ccy + fs * 0.34, fs, pal.text, label);
      s += `</g>`;
    }
  }
  if (step === 1) {
    s += dim(sqX, sqY, sqX + sidePx, sqY, 'a+b+c', 32, -1);
    s += dim(sqX, sqY, sqX, sqY + sidePx, 'a+b+c', 32, -1);
  } else {
    for (let k = 0; k < 3; k++) {
      s += dim(colX[k], sqY, colX[k] + colW[k], sqY, names[k], 32, -1);
      s += dim(sqX, rowY[k], sqX, rowY[k] + rowH[k], names[k], 32, -1);
    }
    if (step < 4) {
      s += dim(sqX, sqY, sqX + sidePx, sqY, 'a+b+c', 70, -1);
      s += dim(sqX, sqY, sqX, sqY + sidePx, 'a+b+c', 78, -1);
    }
  }
  return wrap(W, H, s);
};

// ============ Difference of Squares ============
const dosFrame = (step) => {
  const PX = 50, a = 7, b = 3, W = 760, H = 560;
  const aPx = a * PX, bPx = b * PX;
  const shifted = step === 4;
  const sqX = shifted ? (W - aPx) / 2 - bPx / 2 - 10 : (W - aPx) / 2;
  const sqY = (H - aPx) / 2 - 10;
  const b2X = sqX + (a - b) * PX, b2Y = sqY;
  const A_FILL = '#dde9f7', A_STROKE = '#2c5d99', A_TEXT = '#143a66';
  const B_FILL = '#fdecd0', B_STROKE = '#d4881a', B_TEXT = '#7a4a08';
  const BG = '#fafaf7';
  const topW = (a - b) * PX, topH = bPx;
  const botX = sqX, botY = sqY + bPx, botW = aPx, botH = (a - b) * PX;
  const targetX = botX + botW, targetY = botY, targetW = bPx, targetH = (a - b) * PX;
  let s = '';

  if (step <= 3) {
    s += rect(sqX, sqY, aPx, aPx, A_FILL, null);
    const removed = step === 3;
    if (removed) s += rect(b2X, b2Y, bPx, bPx, BG, null);
    // outer boundary segments (removal-aware)
    s += `<line x1="${sqX}" y1="${sqY}" x2="${sqX}" y2="${sqY + aPx}" stroke="${A_STROKE}" stroke-width="2.5"/>`;
    s += `<line x1="${sqX}" y1="${sqY + aPx}" x2="${sqX + aPx}" y2="${sqY + aPx}" stroke="${A_STROKE}" stroke-width="2.5"/>`;
    s += `<line x1="${sqX}" y1="${sqY}" x2="${b2X}" y2="${sqY}" stroke="${A_STROKE}" stroke-width="2.5"/>`;
    s += `<line x1="${sqX + aPx}" y1="${b2Y + bPx}" x2="${sqX + aPx}" y2="${sqY + aPx}" stroke="${A_STROKE}" stroke-width="2.5"/>`;
    if (!removed) {
      s += `<line x1="${b2X}" y1="${sqY}" x2="${sqX + aPx}" y2="${sqY}" stroke="${A_STROKE}" stroke-width="2.5"/>`;
      s += `<line x1="${sqX + aPx}" y1="${sqY}" x2="${sqX + aPx}" y2="${b2Y + bPx}" stroke="${A_STROKE}" stroke-width="2.5"/>`;
    } else {
      s += `<line x1="${b2X}" y1="${sqY}" x2="${b2X}" y2="${b2Y + bPx}" stroke="${A_STROKE}" stroke-width="2.5"/>`;
      s += `<line x1="${b2X}" y1="${b2Y + bPx}" x2="${sqX + aPx}" y2="${b2Y + bPx}" stroke="${A_STROKE}" stroke-width="2.5"/>`;
    }
    if (step >= 2) {
      s += `<line x1="${sqX}" y1="${sqY + topH}" x2="${sqX + topW}" y2="${sqY + topH}" stroke="${A_STROKE}" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>`;
    }
    if (step === 2) {
      s += rect(b2X, b2Y, bPx, bPx, '#f7dde9', '#992c5d', 2.5);
      s += txt(b2X + bPx / 2, b2Y + bPx / 2 + 12, 32, '#66143a', 'b²');
      s += txt(sqX + (a - b) * PX / 2, sqY + aPx * 0.7, 48, A_TEXT, 'a²');
    }
    if (step === 1) {
      s += txt(sqX + aPx / 2, sqY + aPx / 2 + 18, 64, A_TEXT, 'a²');
    }
    if (step === 3) {
      s += txt(b2X + bPx / 2, b2Y + bPx / 2 - 4, 22, '#66143a', 'b²', 'opacity="0.55"');
      s += `<text x="${b2X + bPx / 2}" y="${b2Y + bPx / 2 + 18}" text-anchor="middle" fill="#66143a" font-size="13" font-style="italic" opacity="0.7">(removed)</text>`;
      s += txt(sqX + topW / 2, sqY + topH / 2 + 7, 20, A_TEXT, '(a − b) · b');
      s += txt(botX + botW / 2, botY + botH / 2 + 8, 24, A_TEXT, 'a · (a − b)');
    }
    s += dim(sqX, sqY, sqX, sqY + aPx, 'a', 32, -1);
    if (step === 1) {
      s += dim(sqX, sqY, sqX + aPx, sqY, 'a', 32, -1);
    } else {
      s += dim(sqX, sqY, b2X, sqY, 'a − b', 32, -1);
      s += dim(b2X, sqY, sqX + aPx, sqY, 'b', 32, -1, '#992c5d');
      s += dim(b2X + bPx, b2Y, b2X + bPx, b2Y + bPx, 'b', 32, 1, '#992c5d');
      s += dim(sqX + aPx, sqY + bPx, sqX + aPx, sqY + aPx, 'a − b', 32, 1);
    }
  } else {
    // step 4: settled rectangle a·(a−b) with the rotated (a−b)·b piece in place
    s += rect(botX, botY, botW, botH, A_FILL, A_STROKE, 2.5);
    s += txt(botX + botW / 2, botY + botH / 2 + 8, 24, A_TEXT, 'a · (a − b)');
    s += rect(botX, botY, botW + targetW, botH, 'none', '#222', 2.5);
    const cxp = targetX + targetW / 2, cyp = targetY + targetH / 2;
    s += `<g transform="translate(${cxp},${cyp}) rotate(-90) translate(${-topW / 2},${-topH / 2})">`;
    s += rect(0, 0, topW, topH, A_FILL, A_STROKE, 2.5);
    s += txt(topW / 2, topH / 2 + 7, 18, A_TEXT, '(a − b) · b');
    s += `</g>`;
    s += dim(botX, botY + botH, targetX + targetW, botY + botH, 'a + b', 32, 1);
    s += dim(targetX + targetW, targetY, targetX + targetW, targetY + targetH, 'a − b', 32, 1);
    s += dim(botX, botY, botX + botW, botY, 'a', 32, -1);
    s += dim(targetX, targetY, targetX + targetW, targetY, 'b', 32, -1, B_STROKE);
  }
  return wrap(W, H, s);
};

const identityDiagrams = {
  'sum-1': sumFrame(1), 'sum-2': sumFrame(2), 'sum-3': sumFrame(3), 'sum-4': sumFrame(4),
  'diff-1': diffFrame(1), 'diff-2': diffFrame(2), 'diff-3': diffFrame(3), 'diff-4': diffFrame(4),
  'tri-1': triFrame(1), 'tri-2': triFrame(2), 'tri-3': triFrame(3), 'tri-4': triFrame(4),
  'dos-1': dosFrame(1), 'dos-2': dosFrame(2), 'dos-3': dosFrame(3), 'dos-4': dosFrame(4),
};

export default identityDiagrams;
