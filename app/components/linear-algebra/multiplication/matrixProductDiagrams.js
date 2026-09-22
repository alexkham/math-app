/* ============================================================
   matrixProductDiagrams — frozen-state SVGs for Line 1 units

   One SVG per state MatrixProductVisualizer can display, built by
   replicating the component's own code paths rather than eyeballing
   its output:

     - same defaults A = [[2,-1],[1,2]], B = [[2,1],[1,3]]
     - same derived slices (colsOfA / rowsOfB / rowsOfA / colsOfB)
     - same trail() cumulative walk and projection() drop
     - same buildPlot bounds: floor/ceil ±1, the extraX/extraY
       re-centring pass, then ML/MR/MT/MB margins
     - same GX/GY, same niceStep grid and tick stepping
     - same palette (CP pieces / CW weights / CR the product) and the
       same stroke widths, opacities and paint order as drawTrail and
       drawEntry

   Deliberately NOT reproduced: the algebra board, the control bar and
   the legend. A frozen state carries the plane; the section prose and
   the panel carry the rest.

   `gen` and `done` are one entry per reading (columnsComplete /
   rowsComplete): the component routes both to the same drawTrail
   branch, so the plane is identical and only the board differs.

   Marker ids are suffixed per state — several of these SVGs share one
   page, and duplicate marker ids would cross-wire the arrowheads.
   ============================================================ */

const CP = '#1450c8'; /* pieces  */
const CW = '#b45309'; /* weights */
const CR = '#0b2f77'; /* AB      */

const GRID = '#eef1f6';
const AXIS = '#c8cfdb';
const TICK = '#a5adbb';
const DROP = '#8b94a3';

const A = [[2, -1], [1, 2]];
const B = [[2, 1], [1, 3]];

const m = A.length;
const k = A[0].length;
const n = B[0].length;

const colsOfA = [];
for (let p = 0; p < k; p += 1) colsOfA.push(A.map((row) => row[p]));
const rowsOfB = B.map((row) => row.slice());
const rowsOfA = A.map((row) => row.slice());
const colsOfB = [];
for (let j = 0; j < n; j += 1) colsOfB.push(B.map((row) => row[j]));

/* --- component helpers, copied so the frozen geometry matches --- */

function niceStep(span) {
  const rawStep = span / 7;
  const pow = Math.pow(10, Math.floor(Math.log(rawStep) / Math.LN10));
  const q = rawStep / pow;
  const mm = q <= 1 ? 1 : q <= 2 ? 2 : q <= 5 ? 5 : 10;
  return Math.max(1, Math.round(mm * pow));
}

function trail(kind, index) {
  const cum = [[0, 0]];
  for (let p = 0; p < k; p += 1) {
    const piece = kind === 'col' ? colsOfA[p] : rowsOfB[p];
    const weight = kind === 'col' ? B[p][index] : A[index][p];
    cum.push([cum[p][0] + weight * piece[0], cum[p][1] + weight * piece[1]]);
  }
  return cum;
}

function projection(i, j) {
  const r = rowsOfA[i];
  const c = colsOfB[j];
  const dot = r[0] * c[0] + r[1] * c[1];
  const l2 = c[0] * c[0] + c[1] * c[1];
  const t = l2 ? dot / l2 : 0;
  return { r, c, dot, p: [c[0] * t, c[1] * t] };
}

function buildPlot(reading, W, H) {
  const xs = [0];
  const ys = [0];
  if (reading === 'both') {
    for (let i = 0; i < m; i += 1) { xs.push(rowsOfA[i][0]); ys.push(rowsOfA[i][1]); }
    for (let j = 0; j < n; j += 1) { xs.push(colsOfB[j][0]); ys.push(colsOfB[j][1]); }
    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        const pr = projection(i, j);
        xs.push(pr.p[0]); ys.push(pr.p[1]);
      }
    }
  } else {
    for (let p = 0; p < k; p += 1) {
      xs.push(colsOfA[p][0]); ys.push(colsOfA[p][1]);
      xs.push(rowsOfB[p][0]); ys.push(rowsOfB[p][1]);
    }
    for (let j = 0; j < n; j += 1) trail('col', j).forEach((q) => { xs.push(q[0]); ys.push(q[1]); });
    for (let i = 0; i < m; i += 1) trail('row', i).forEach((q) => { xs.push(q[0]); ys.push(q[1]); });
  }

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

/* --- emitters --- */

const r2 = (v) => Math.round(v * 100) / 100;

function frame(plot, id) {
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

  out.push(`<line x1="${GX(plot.xmin)}" y1="${GY(0)}" x2="${GX(plot.xmax)}" y2="${GY(0)}" stroke="${AXIS}" stroke-width="1.2"/>`);
  out.push(`<line x1="${GX(0)}" y1="${GY(plot.ymin)}" x2="${GX(0)}" y2="${GY(plot.ymax)}" stroke="${AXIS}" stroke-width="1.2"/>`);

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
  const head = (suffix, colour) =>
    `<marker id="${id}-${suffix}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.4" markerHeight="5.4" orient="auto-start-reverse">`
    + `<path d="M 0 0 L 10 5 L 0 10 z" fill="${colour}"/></marker>`;
  return `<defs>${head('piece', CP)}${head('weight', CW)}${head('res', CR)}</defs>`;
}

function svg(plot, id, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${plot.W} ${plot.H}" width="${plot.W}" height="${plot.H}" role="img" style="display:block;max-width:100%;height:auto">`
    + defs(id) + frame(plot, id) + body + '</svg>';
}

/* drawTrail, as the component draws it */
function drawTrail(plot, id, kind, index, upto, labelText, strong) {
  const GX = (x) => r2(plot.ox + x * plot.unit);
  const GY = (y) => r2(plot.oy - y * plot.unit);
  const cum = trail(kind, index);
  const out = [];

  for (let p = 0; p <= upto && p < k; p += 1) {
    out.push(`<line x1="${GX(cum[p][0])}" y1="${GY(cum[p][1])}" x2="${GX(cum[p + 1][0])}" y2="${GY(cum[p + 1][1])}" stroke="${CP}" stroke-width="1.9" opacity="${strong ? 0.85 : 0.4}" marker-end="url(#${id}-piece)"/>`);
  }

  if (upto >= k - 1) {
    out.push(`<line x1="${GX(0)}" y1="${GY(0)}" x2="${GX(cum[k][0])}" y2="${GY(cum[k][1])}" stroke="${CR}" stroke-width="2.4" opacity="${strong ? 0.95 : 0.5}" marker-end="url(#${id}-res)"/>`);
    if (labelText) {
      const lx = Math.max(30, Math.min(plot.W - 8, GX(cum[k][0]) + 8));
      const ly = Math.max(14, GY(cum[k][1]) - 8);
      out.push(`<text x="${r2(lx)}" y="${r2(ly)}" font-size="12" font-weight="700" fill="${CR}">${labelText}</text>`);
    }
    out.push(`<circle cx="${GX(cum[k][0])}" cy="${GY(cum[k][1])}" r="3.4" fill="${CR}"/>`);
  }

  return out.join('');
}

/* drawEntry, as the component draws it */
function drawEntry(plot, id, i, j) {
  const GX = (x) => r2(plot.ox + x * plot.unit);
  const GY = (y) => r2(plot.oy - y * plot.unit);
  const pr = projection(i, j);
  const lab = (x, y) => ({
    x: r2(Math.max(26, Math.min(plot.W - 86, x))),
    y: r2(Math.max(13, Math.min(plot.H - 5, y))),
  });
  const rowLab = lab(GX(pr.r[0]) + 7, GY(pr.r[1]) - 7);
  const colLab = lab(GX(pr.c[0]) + 7, GY(pr.c[1]) + 15);

  return [
    `<line x1="${GX(0)}" y1="${GY(0)}" x2="${GX(pr.c[0])}" y2="${GY(pr.c[1])}" stroke="${CW}" stroke-width="2.1" marker-end="url(#${id}-weight)"/>`,
    `<line x1="${GX(0)}" y1="${GY(0)}" x2="${GX(pr.r[0])}" y2="${GY(pr.r[1])}" stroke="${CP}" stroke-width="2.1" marker-end="url(#${id}-piece)"/>`,
    `<line x1="${GX(pr.r[0])}" y1="${GY(pr.r[1])}" x2="${GX(pr.p[0])}" y2="${GY(pr.p[1])}" stroke="${DROP}" stroke-width="1" stroke-dasharray="3 3"/>`,
    `<line x1="${GX(0)}" y1="${GY(0)}" x2="${GX(pr.p[0])}" y2="${GY(pr.p[1])}" stroke="${CR}" stroke-width="3.4" opacity="0.9"/>`,
    `<circle cx="${GX(pr.p[0])}" cy="${GY(pr.p[1])}" r="3.4" fill="${CR}"/>`,
    `<text x="${rowLab.x}" y="${rowLab.y}" font-size="12" font-weight="700" fill="${CP}">row ${i + 1} of A</text>`,
    `<text x="${colLab.x}" y="${colLab.y}" font-size="12" font-weight="700" fill="${CW}">col ${j + 1} of B</text>`,
  ].join('');
}

const W = 360;
const H = 268;

const PLOT_BOTH = buildPlot('both', W, H);
const PLOT_COLUMNS = buildPlot('columns', W, H);
const PLOT_ROWS = buildPlot('rows', W, H);

/* every slice finished, the state the component paints for both
   `gen` and `done`: each trail at upto = k-1, only the last strong */
function complete(plot, id, kind) {
  const T = kind === 'col' ? n : m;
  const out = [];
  for (let i = 0; i < T; i += 1) {
    out.push(drawTrail(plot, id, kind, i, k - 1, `${kind === 'col' ? 'col' : 'row'} ${i + 1}`, i === T - 1));
  }
  return out.join('');
}

const diagrams = {
  /* step 0 in every tab: axes and nothing else */
  emptyPlane: svg(PLOT_COLUMNS, 'mpd-empty', ''),

  /* both tab, step 1: row 1 of A against col 1 of B, entry +3 */
  entryPositive: svg(PLOT_BOTH, 'mpd-entry-pos', drawEntry(PLOT_BOTH, 'mpd-entry-pos', 0, 0)),

  /* both tab, step 2: the same row against col 2 of B, entry -1 —
     the projection runs against the column */
  entryNegative: svg(PLOT_BOTH, 'mpd-entry-neg', drawEntry(PLOT_BOTH, 'mpd-entry-neg', 0, 1)),

  /* columns tab, step 1: the first piece of column 1 of AB */
  columnFirstPiece: svg(PLOT_COLUMNS, 'mpd-col-first',
    drawTrail(PLOT_COLUMNS, 'mpd-col-first', 'col', 0, 0, null, true)),

  /* columns tab, last steps: both columns of AB assembled */
  columnsComplete: svg(PLOT_COLUMNS, 'mpd-col-done', complete(PLOT_COLUMNS, 'mpd-col-done', 'col')),

  /* rows tab, step 1: the first piece of row 1 of AB */
  rowFirstPiece: svg(PLOT_ROWS, 'mpd-row-first',
    drawTrail(PLOT_ROWS, 'mpd-row-first', 'row', 0, 0, null, true)),

  /* rows tab, last steps: both rows of AB assembled */
  rowsComplete: svg(PLOT_ROWS, 'mpd-row-done', complete(PLOT_ROWS, 'mpd-row-done', 'row')),
};

export default diagrams;
