/* ============================================================
   vectorPictureDiagrams — frozen-state SVGs for Line 1 units on the
   two vector pages (ColumnPictureVisualizer, RowPictureVisualizer).

   One module for both because the two components are exact mirrors:
   same MAX_STAGE (11), same five phases, same geo shape (vline /
   hline / segments / raw piece / resultant), same palette. Only the
   index that walks changes - a column of A weighted by v_j, or a row
   of A weighted by v_i - and the label that goes with it.

   Because the rows page uses the transpose of the columns page's
   matrix with the same weights, both walks are numerically identical:

       [0,0] -> [4,2] -> [3,4] -> [12,4]

   That is the coincidence the two pages already argue about, so the
   figures are meant to match.

   Replicated from the components: the derived scaled/cumulative walk,
   the plot bounds (floor/ceil +-1, the extraX/extraY re-centring pass,
   ML/MR/MT/MB margins), GX/GY, the niceStep grid and ticks, and the
   paint order and stroke weights of the geo block.

   Marker ids are suffixed per state - these SVGs share one page.
   ============================================================ */

const CA = '#1450c8'; /* the matrix and anything built from it */
const CV = '#b45309'; /* the vector and the scalars from it     */
const CD = '#0b2f77'; /* the answer                             */

const GRID = '#eef1f6';
const AXIS = '#c3cad6';
const TICK = '#a5adbb';

const COLUMN_MATRIX = [[2, -1, 3], [1, 2, 0]];
const ROW_MATRIX = [[2, 1], [-1, 2], [3, 0]];
const VECTOR = [2, 1, 3];

function niceStep(span) {
  const rawStep = span / 7;
  const pow = Math.pow(10, Math.floor(Math.log(rawStep) / Math.LN10));
  const q = rawStep / pow;
  const mm = q <= 1 ? 1 : q <= 2 ? 2 : q <= 5 ? 5 : 10;
  return Math.max(1, Math.round(mm * pow));
}

/* the pieces being walked, in order, and the weight on each */
function piecesOf(kind) {
  if (kind === 'col') {
    const out = [];
    for (let j = 0; j < COLUMN_MATRIX[0].length; j += 1) {
      out.push([COLUMN_MATRIX[0][j], COLUMN_MATRIX[1][j]]);
    }
    return out;
  }
  return ROW_MATRIX.map((row) => row.slice());
}

function derive(kind) {
  const pieces = piecesOf(kind);
  const scaled = [];
  const cumulative = [[0, 0]];
  for (let p = 0; p < pieces.length; p += 1) {
    scaled.push([pieces[p][0] * VECTOR[p], pieces[p][1] * VECTOR[p]]);
    cumulative.push([
      cumulative[p][0] + scaled[p][0],
      cumulative[p][1] + scaled[p][1],
    ]);
  }
  return { pieces, scaled, cumulative, final: cumulative[pieces.length] };
}

function buildPlot(kind, W, H) {
  const { pieces, cumulative } = derive(kind);
  const xs = [0];
  const ys = [0];
  pieces.forEach((p) => { xs.push(p[0]); ys.push(p[1]); });
  cumulative.forEach((c) => { xs.push(c[0]); ys.push(c[1]); });

  let xmin = Math.floor(Math.min(...xs)) - 1;
  let xmax = Math.ceil(Math.max(...xs)) + 1;
  let ymin = Math.floor(Math.min(...ys)) - 1;
  let ymax = Math.ceil(Math.max(...ys)) + 1;

  const ML = 34;
  const MR = 20;
  const MT = 16;
  const MB = 20;
  const availW = W - ML - MR;
  const availH = H - MT - MB;

  let unit = Math.min(availW / (xmax - xmin), availH / (ymax - ymin));
  const extraX = Math.floor(availW / unit) - (xmax - xmin);
  const extraY = Math.floor(availH / unit) - (ymax - ymin);
  xmin -= Math.floor(extraX / 2);
  xmax += Math.ceil(extraX / 2);
  ymin -= Math.floor(extraY / 2);
  ymax += Math.ceil(extraY / 2);
  unit = Math.min(availW / (xmax - xmin), availH / (ymax - ymin));

  const usedW = (xmax - xmin) * unit;
  const usedH = (ymax - ymin) * unit;
  const ox = ML + (availW - usedW) / 2 - xmin * unit;
  const oy = MT + (availH - usedH) / 2 + ymax * unit;

  return { xmin, xmax, ymin, ymax, unit, ox, oy, W, H };
}

const r2 = (v) => Math.round(v * 100) / 100;

function frame(plot) {
  const GX = (x) => r2(plot.ox + x * plot.unit);
  const GY = (y) => r2(plot.oy - y * plot.unit);
  const out = [];

  const gridStep = plot.unit < 13
    ? niceStep(Math.max(plot.xmax - plot.xmin, plot.ymax - plot.ymin))
    : 1;
  for (let x = Math.ceil(plot.xmin / gridStep) * gridStep; x <= plot.xmax; x += gridStep) {
    out.push(`<line x1="${GX(x)}" y1="${GY(plot.ymin)}" x2="${GX(x)}" y2="${GY(plot.ymax)}" stroke="${GRID}" stroke-width="1"/>`);
  }
  for (let y = Math.ceil(plot.ymin / gridStep) * gridStep; y <= plot.ymax; y += gridStep) {
    out.push(`<line x1="${GX(plot.xmin)}" y1="${GY(y)}" x2="${GX(plot.xmax)}" y2="${GY(y)}" stroke="${GRID}" stroke-width="1"/>`);
  }

  out.push(`<line x1="${GX(plot.xmin)}" y1="${GY(0)}" x2="${GX(plot.xmax)}" y2="${GY(0)}" stroke="${AXIS}" stroke-width="1.1"/>`);
  out.push(`<line x1="${GX(0)}" y1="${GY(plot.ymin)}" x2="${GX(0)}" y2="${GY(plot.ymax)}" stroke="${AXIS}" stroke-width="1.1"/>`);

  const stepX = niceStep(plot.xmax - plot.xmin);
  const stepY = niceStep(plot.ymax - plot.ymin);
  for (let x = Math.ceil(plot.xmin / stepX) * stepX; x <= plot.xmax; x += stepX) {
    if (x === 0) continue;
    out.push(`<text x="${GX(x)}" y="${GY(0) + 13}" font-size="10" fill="${TICK}" text-anchor="middle">${x}</text>`);
  }
  for (let y = Math.ceil(plot.ymin / stepY) * stepY; y <= plot.ymax; y += stepY) {
    if (y === 0) continue;
    out.push(`<text x="${GX(0) - 6}" y="${r2(GY(y) + 3.6)}" font-size="10" fill="${TICK}" text-anchor="end">${y}</text>`);
  }
  return out.join('');
}

function defs(id) {
  const head = (suffix, colour, w) =>
    `<marker id="${id}-${suffix}" viewBox="0 0 10 10" refX="8.6" refY="5" markerWidth="${w}" markerHeight="${w}" orient="auto">`
    + `<path d="M3 2L8 5L3 8" fill="none" stroke="${colour}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>`;
  return `<defs>${head('a', CA, 5.6)}${head('d', CD, 5.6)}</defs>`;
}

function svg(plot, id, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${plot.W} ${plot.H}" width="${plot.W}" height="${plot.H}" role="img" style="display:block;max-width:100%;height:auto">`
    + defs(id) + frame(plot) + body + '</svg>';
}

/* label placed just off the midpoint of a segment, as labelPos does */
function label(plot, x1, y1, x2, y2, text, colour) {
  const GX = (x) => plot.ox + x * plot.unit;
  const GY = (y) => plot.oy - y * plot.unit;
  const mx = (GX(x1) + GX(x2)) / 2;
  const my = (GY(y1) + GY(y2)) / 2;
  const dx = GX(x2) - GX(x1);
  const dy = GY(y2) - GY(y1);
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * 13;
  const ny = (dx / len) * 13;
  const px = Math.max(20, Math.min(plot.W - 20, mx + nx));
  const py = Math.max(13, Math.min(plot.H - 6, my + ny));
  return `<text x="${r2(px)}" y="${r2(py)}" font-size="12.5" font-weight="700" text-anchor="middle" fill="${colour}">${text}</text>`;
}

const W = 360;
const H = 268;

/* --- the five frozen states, per reading --- */

function statesFor(kind) {
  const plot = buildPlot(kind, W, H);
  const { pieces, cumulative, final } = derive(kind);
  const N = pieces.length;
  const GX = (x) => r2(plot.ox + x * plot.unit);
  const GY = (y) => r2(plot.oy - y * plot.unit);
  const tag = kind === 'col' ? 'c' : 'r';
  const pre = kind === 'col' ? 'vpd-c' : 'vpd-r';

  const dashV = (x, op) => `<line x1="${GX(x)}" y1="${GY(plot.ymin)}" x2="${GX(x)}" y2="${GY(plot.ymax)}" stroke="${CD}" stroke-width="1" stroke-dasharray="4 3" opacity="${op}"/>`;
  const dashH = (y, op) => `<line x1="${GX(plot.xmin)}" y1="${GY(y)}" x2="${GX(plot.xmax)}" y2="${GY(y)}" stroke="${CD}" stroke-width="1" stroke-dasharray="4 3" opacity="${op}"/>`;

  const segment = (p, op) =>
    `<line x1="${GX(cumulative[p][0])}" y1="${GY(cumulative[p][1])}" x2="${GX(cumulative[p + 1][0])}" y2="${GY(cumulative[p + 1][1])}" stroke="${CA}" stroke-width="1.9" opacity="${op}" marker-end="url(#${pre}-a)"/>`;

  const resultant = (op, withLabel) =>
    `<line x1="${GX(0)}" y1="${GY(0)}" x2="${GX(final[0])}" y2="${GY(final[1])}" stroke="${CD}" stroke-width="2.5" opacity="${op}" marker-end="url(#${pre}-d)"/>`
    + (withLabel ? label(plot, 0, 0, final[0], final[1], kind === 'col' ? 'Av' : 'v&#7488;A', CD) : '');

  return {
    /* stage 0 — the empty bracket */
    emptyPlane: svg(plot, `${pre}0`, ''),

    /* stage 3 — entry 1 complete: one coordinate known, one dashed line */
    oneCoordinate: svg(plot, `${pre}1`, dashV(final[0], 0.7)),

    /* stage 6 — both entries complete: two dashed lines crossing at the
       answer, and only now is there an arrow at all */
    bothCoordinates: svg(plot, `${pre}2`,
      dashV(final[0], 0.55) + dashH(final[1], 0.7) + resultant(0.9, false)),

    /* stage 7 — the first piece lifted out: dashed from the origin is the
       piece on its own, solid is that piece scaled by its weight */
    firstScaledPiece: svg(plot, `${pre}3`,
      `<line x1="${GX(0)}" y1="${GY(0)}" x2="${GX(pieces[0][0])}" y2="${GY(pieces[0][1])}" stroke="${CA}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.5"/>`
      + label(plot, 0, 0, pieces[0][0], pieces[0][1], `${tag}<tspan font-size="9" dy="3">1</tspan>`, CA)
      + segment(0, 1)
      + label(plot, cumulative[0][0], cumulative[0][1], cumulative[1][0], cumulative[1][1],
        `v<tspan font-size="9" dy="3">1</tspan><tspan font-size="12.5" dy="-3" fill="${CA}">${tag}</tspan><tspan font-size="9" dy="3" fill="${CA}">1</tspan>`, CV)),

    /* stage 10/11 — every piece laid tail to head, the answer reached */
    allPieces: svg(plot, `${pre}4`,
      Array.from({ length: N }, (unused, p) => segment(p, 0.5)).join('')
      + Array.from({ length: N }, (unused, p) => label(
        plot, cumulative[p][0], cumulative[p][1], cumulative[p + 1][0], cumulative[p + 1][1],
        `v<tspan font-size="9" dy="3">${p + 1}</tspan><tspan font-size="12.5" dy="-3" fill="${CA}">${tag}</tspan><tspan font-size="9" dy="3" fill="${CA}">${p + 1}</tspan>`,
        CV)).join('')
      + resultant(0.95, true)),
  };
}

const diagrams = {
  columns: statesFor('col'),
  rows: statesFor('row'),
};

export default diagrams;
