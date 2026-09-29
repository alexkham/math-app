// vectorArrows.v2 - two vectors and what adding or subtracting them draws.
//
// Second file, not an edit to vectorArrows.js: rule 11 forbids editing a
// shipped renderer to gain a scene type, and vectorArrows was integrated on the
// vectors page before these were needed.
//
//   vectorArrows.js     copies               vectors
//   vectorArrows.v2.js  sum / difference     vectors/basic-operations
//
// renderVectorArrowsV2(spec) -> SVG string. Docs: vectorArrows.v2.md beside it.
//
// Palette is the linear-algebra census, plane family: the first vector orange,
// the second cyan (the i / j and v / Av pair of every 2D visualizer), the
// result green (the plane tools' subspace colour, the matrix tools' result).

const C = {
  a: '#EA580C', b: '#0891B2', result: '#059669', negation: '#DC2626',
  text: '#0F172A', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8', surface: '#FFFFFF',

  wVector: 2.6, wMoved: 2.2, wResult: 2.8, wGrid: 1, wAxis: 1.4,
  unit: 44, head: 11, rTip: 3.5, fillOpacity: 0.06,
  fsLabel: 14, fsNote: 11, fsCaption: 13, fsOrigin: 12,
};

const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// Grid with the origin at its lower-left corner, y up, as in vectorArrows.js.
function grid(nx, ny, P) {
  const X0 = 40, Y0 = 40 + ny * P.unit;
  const px = (x) => X0 + x * P.unit, py = (y) => Y0 - y * P.unit;
  const o = [];
  for (let i = 0; i <= nx; i += 1) o.push(`<line x1="${px(i)}" y1="${py(0)}" x2="${px(i)}" y2="${py(ny)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  for (let j = 0; j <= ny; j += 1) o.push(`<line x1="${px(0)}" y1="${py(j)}" x2="${px(nx)}" y2="${py(j)}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  o.push(`<line x1="${px(0)}" y1="${py(0)}" x2="${px(nx)}" y2="${py(0)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${px(0)}" y1="${py(0)}" x2="${px(0)}" y2="${py(ny)}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(txt('O', px(0) - 12, py(0) + 16, P.muted, P.fsOrigin, 'middle', 500));
  return { px, py, Y0, body: o.join('') };
}

function arrow(g, x1, y1, x2, y2, col, w, dash, P) {
  const a = g.px(x1), b = g.py(y1), c = g.px(x2), d = g.py(y2);
  const ang = Math.atan2(d - b, c - a), h = P.head;
  const ex = c - 8 * Math.cos(ang), ey = d - 8 * Math.sin(ang);
  return `<line x1="${f1(a)}" y1="${f1(b)}" x2="${f1(ex)}" y2="${f1(ey)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"` +
    `${dash ? ` stroke-dasharray="${dash}"` : ''}/>` +
    `<path d="M ${f1(c)} ${f1(d)} L ${f1(c - h * Math.cos(ang - 0.38))} ${f1(d - h * Math.sin(ang - 0.38))} ` +
    `L ${f1(c - h * Math.cos(ang + 0.38))} ${f1(d - h * Math.sin(ang + 0.38))} Z" fill="${col}"/>`;
}

const tip = (g, x, y, col, P) => `<circle cx="${f1(g.px(x))}" cy="${f1(g.py(y))}" r="${P.rTip}" fill="${col}"/>`;

// labels: [[text, x, y, role, anchor]] in grid units; role picks the colour.
function labels(g, list, P) {
  return (list || []).map(([t, x, y, role, anchor]) => txt(t, g.px(x), g.py(y), P[role] || P.text, P.fsLabel, anchor || 'middle')).join('');
}

// Notes under the grid, then the caption; returns the finished size.
function footer(g, spec, w, o, P) {
  let y = g.Y0 + 36;
  (spec.notes || []).forEach((n) => { o.push(txt(n, 40, y, P.text, P.fsNote, 'start', 400)); y += 16; });
  const h = spec.height || y + 16;
  if (spec.caption) o.push(txt(spec.caption, w / 2, h - 12, P.text, P.fsCaption));
  return h;
}

// ------------------------------------------------------------------- sum
// Both routes are drawn: a then b along one side of the parallelogram, b then
// a along the other. The moved copies are dashed so the reader sees they are
// the same vectors relocated, and both routes end on one green diagonal.
function sum(spec, P) {
  const nx = spec.nx || 7, ny = spec.ny || 5;
  const [ax, ay] = spec.a, [bx, by] = spec.b, sx = ax + bx, sy = ay + by;
  const g = grid(nx, ny, P);
  const o = [g.body];
  o.push(`<path d="M ${g.px(0)} ${g.py(0)} L ${g.px(ax)} ${g.py(ay)} L ${g.px(sx)} ${g.py(sy)} L ${g.px(bx)} ${g.py(by)} Z" ` +
    `fill="${P.result}" fill-opacity="${P.fillOpacity}" stroke="none"/>`);
  o.push(arrow(g, 0, 0, sx, sy, P.result, P.wResult, null, P));
  o.push(arrow(g, 0, 0, ax, ay, P.a, P.wVector, null, P));
  o.push(arrow(g, ax, ay, sx, sy, P.b, P.wMoved, '6 4', P));
  o.push(arrow(g, 0, 0, bx, by, P.b, P.wVector, null, P));
  o.push(arrow(g, bx, by, sx, sy, P.a, P.wMoved, '6 4', P));
  o.push(labels(g, spec.labels, P));
  o.push(tip(g, sx, sy, P.result, P));
  const w = spec.width || g.px(nx) + 30;
  const h = footer(g, spec, w, o, P);
  return { w, h, body: o.join('') };
}

// ------------------------------------------------------------ difference
// a and b share the origin; a - b is drawn from the tip of b to the tip of a,
// so "b followed by a - b lands on a" is visible without a second arrow.
function difference(spec, P) {
  const nx = spec.nx || 7, ny = spec.ny || 5;
  const [ax, ay] = spec.a, [bx, by] = spec.b;
  const g = grid(nx, ny, P);
  const o = [g.body];
  o.push(arrow(g, 0, 0, ax, ay, P.a, P.wVector, null, P));
  o.push(arrow(g, 0, 0, bx, by, P.b, P.wVector, null, P));
  o.push(arrow(g, bx, by, ax, ay, P.result, P.wResult, null, P));
  o.push(labels(g, spec.labels, P));
  o.push(tip(g, ax, ay, P.a, P));
  o.push(tip(g, bx, by, P.b, P));
  const w = spec.width || g.px(nx) + 30;
  const h = footer(g, spec, w, o, P);
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { sum, difference };

export default function renderVectorArrowsV2(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `vectorArrows.v2: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `Add a new one in a further file per process v10 rule 11; do not edit this one.`
    );
  }
  const { w, h, body } = build(spec, P);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${f1(w)} ${f1(h)}" width="${f1(w)}" height="${f1(h)}" ` +
    `role="img" style="display:block;max-width:100%;height:auto">` +
    (spec.svgTitle ? `<title>${esc(spec.svgTitle)}</title>` : '') +
    body +
    `</svg>`
  );
}

export { renderVectorArrowsV2, C as vectorArrowsV2Defaults };
