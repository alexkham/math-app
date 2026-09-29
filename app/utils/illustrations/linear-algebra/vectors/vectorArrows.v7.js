// vectorArrows.v7 - a 2 x 2 matrix read as what it does to the unit square.
//
// Seventh file, not an edit: rule 11 - v1 to v6 had all shipped before this
// was needed.
//
//   vectorArrows.js     copies               vectors
//   vectorArrows.v2.js  sum / difference     vectors/basic-operations, magnitude
//   vectorArrows.v3.js  units                vectors/magnitude
//   vectorArrows.v4.js  angle / signs        vectors/dot-product
//   vectorArrows.v5.js  area / orientation   vectors/cross-product
//   vectorArrows.v6.js  solutionSet          linear-systems/homogeneous
//   vectorArrows.v7.js  unitSquareMap        transformations/geometric
//
// renderVectorArrowsV7(spec) -> SVG string. Docs: vectorArrows.v7.md beside it.
//
// Palette: the page theme ($meta.palette.$pageTheme) - Ae1 in site blue, Ae2 in
// brand navy, the image of the square in site amber, the original square in
// brand slate-blue.

const C = {
  e1: '#2563EB', e2: '#06357A', image: '#B45309', imageFill: '#FDF3E3', orig: '#5A7299',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',

  wVector: 2.6, wImage: 1.8, wOrig: 1.6, wGrid: 1, wAxis: 1.4,
  unit: 110, head: 11, gridStep: 0.5,
  fsLabel: 13, fsNote: 11, fsCaption: 13,
};

const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// ----------------------------------------------------------- unitSquareMap
// The image parallelogram is drawn first and filled, the original square over
// it dashed and unfilled, so both outlines stay visible where they overlap.
// Ae1 and Ae2 are the matrix's columns, read straight from spec.A - the image
// is always exactly the parallelogram they span.
function unitSquareMap(spec, P) {
  const [xmin, xmax] = spec.xRange || [-0.5, 2.5], [ymin, ymax] = spec.yRange || [-0.5, 2];
  const U = P.unit, X0 = 30 - xmin * U, Y0 = 30 + ymax * U;
  const px = (x) => X0 + x * U, py = (y) => Y0 - y * U;
  const [[a, b], [c, d]] = spec.A;
  const e1 = [a, c], e2 = [b, d];
  const o = [];
  const st = P.gridStep;
  for (let i = Math.ceil(xmin / st) * st; i <= xmax + 1e-9; i += st) o.push(`<line x1="${f1(px(i))}" y1="${f1(py(ymin))}" x2="${f1(px(i))}" y2="${f1(py(ymax))}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  for (let j = Math.ceil(ymin / st) * st; j <= ymax + 1e-9; j += st) o.push(`<line x1="${f1(px(xmin))}" y1="${f1(py(j))}" x2="${f1(px(xmax))}" y2="${f1(py(j))}" stroke="${P.grid}" stroke-width="${P.wGrid}"/>`);
  o.push(`<line x1="${f1(px(xmin))}" y1="${f1(py(0))}" x2="${f1(px(xmax))}" y2="${f1(py(0))}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  o.push(`<line x1="${f1(px(0))}" y1="${f1(py(ymin))}" x2="${f1(px(0))}" y2="${f1(py(ymax))}" stroke="${P.axis}" stroke-width="${P.wAxis}"/>`);
  const poly = (pts) => pts.map(([x, y]) => `${f1(px(x))},${f1(py(y))}`).join(' ');
  o.push(`<polygon points="${poly([[0, 0], e1, [e1[0] + e2[0], e1[1] + e2[1]], e2])}" fill="${P.imageFill}" stroke="${P.image}" stroke-width="${P.wImage}"/>`);
  o.push(`<polygon points="${poly([[0, 0], [1, 0], [1, 1], [0, 1]])}" fill="none" stroke="${P.orig}" stroke-width="${P.wOrig}" stroke-dasharray="6 4"/>`);
  const arrow = (v, col) => {
    const x2 = px(v[0]), y2 = py(v[1]), x1 = px(0), y1 = py(0);
    const ang = Math.atan2(y2 - y1, x2 - x1), h = P.head, ex = x2 - 8 * Math.cos(ang), ey = y2 - 8 * Math.sin(ang);
    o.push(`<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(ex)}" y2="${f1(ey)}" stroke="${col}" stroke-width="${P.wVector}" stroke-linecap="round"/>` +
      `<path d="M ${f1(x2)} ${f1(y2)} L ${f1(x2 - h * Math.cos(ang - 0.38))} ${f1(y2 - h * Math.sin(ang - 0.38))} ` +
      `L ${f1(x2 - h * Math.cos(ang + 0.38))} ${f1(y2 - h * Math.sin(ang + 0.38))} Z" fill="${col}"/>`);
  };
  arrow(e1, P.e1);
  arrow(e2, P.e2);
  (spec.labels || []).forEach(([t, x, y, role, anchor]) => o.push(txt(t, px(x), py(y), P[role] || P.text, P.fsLabel, anchor || 'start')));
  const w = spec.width || px(xmax) + 30;
  let y = py(ymin) + 30;
  (spec.notes || []).forEach((n) => { o.push(txt(n, 30, y, P.text, P.fsNote, 'start', 400)); y += 16; });
  const h = spec.height || y + 18;
  if (spec.caption) o.push(txt(spec.caption, w / 2, h - 12, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { unitSquareMap };

export default function renderVectorArrowsV7(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `vectorArrows.v7: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderVectorArrowsV7, C as vectorArrowsV7Defaults };
