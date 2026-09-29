// matrixGrid - a matrix drawn as its grid of entries, with the parts a
// section talks about marked on the grid itself.
//
// renderMatrixGrid(spec) -> SVG string. Docs: matrixGrid.md beside it.
//
// Scene types (spec.kind):
//   anatomy   an m x n matrix of symbolic entries a_ij, with one row, one
//             column and the main diagonal marked, each named at the side
//
// Palette: the page theme (owner decision 2026-09-28, $meta.palette.$pageTheme
// in the linear-algebra figure registry) - row in site blue, column in brand
// navy, diagonal in site amber.

const C = {
  row: '#2563EB', rowFill: '#DBEAFE', col: '#06357A', colFill: '#E8EEF7', diag: '#B45309', diagFill: '#FDF3E3',
  text: '#1E3A5F', muted: '#64748B',

  wBand: 1.6, wBracket: 2, wDiag: 1.8,
  cellW: 58, cellH: 44, rDiag: 17, colFillOpacity: 0.85,
  fsEntry: 15, fsSub: 10, fsSize: 12, fsName: 13, fsNote: 11, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// a_ij with the index pair as a lowered tspan; italic like the page's math.
function entry(i, j, x, y, col, bold, P) {
  return `<text x="${x}" y="${y}" text-anchor="middle" font-family="${FONT}" font-size="${P.fsEntry}" ` +
    `font-weight="${bold ? 700 : 500}" fill="${col}" font-style="italic">a<tspan font-size="${P.fsSub}" dy="4">${i}${j}</tspan></text>`;
}

// ---------------------------------------------------------------- anatomy
// Row and column are tinted bands behind the entries, so their crossing cell
// sits in both; the diagonal is a ring on each a_ii, drawn over the bands.
// The diagonal runs for min(m, n) entries - on a wide matrix it stops before
// the last columns, which is the point the section makes about non-square
// matrices. Names sit to the right (diagonal, row) and below (column).
function anatomy(spec, P) {
  const m = spec.m || 3, n = spec.n || 4, R = spec.row || 2, K = spec.col || 3;
  const cw = P.cellW, ch = P.cellH, X0 = 120, Y0 = 70;
  const cx = (j) => X0 + (j - 1) * cw, cy = (i) => Y0 + (i - 1) * ch;
  const k = Math.min(m, n);
  const o = [];
  o.push(`<rect x="${cx(1) - 4}" y="${cy(R) + 2}" width="${n * cw + 8}" height="${ch - 4}" rx="6" fill="${P.rowFill}" stroke="${P.row}" stroke-width="${P.wBand}"/>`);
  o.push(`<rect x="${cx(K) + 2}" y="${cy(1) - 4}" width="${cw - 4}" height="${m * ch + 8}" rx="6" fill="${P.colFill}" fill-opacity="${P.colFillOpacity}" stroke="${P.col}" stroke-width="${P.wBand}"/>`);
  const bx1 = cx(1) - 12, bx2 = cx(n) + cw + 12, by1 = cy(1) - 10, by2 = cy(m) + ch + 10;
  o.push(`<path d="M ${bx1 + 8} ${by1} L ${bx1} ${by1} L ${bx1} ${by2} L ${bx1 + 8} ${by2} M ${bx2 - 8} ${by1} L ${bx2} ${by1} L ${bx2} ${by2} L ${bx2 - 8} ${by2}" ` +
    `fill="none" stroke="${P.text}" stroke-width="${P.wBracket}"/>`);
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const x = cx(j) + cw / 2, y = cy(i) + ch / 2 + 5;
      if (i === j) o.push(`<circle cx="${x}" cy="${y - 5}" r="${P.rDiag}" fill="${P.diagFill}" stroke="${P.diag}" stroke-width="${P.wDiag}"/>`);
      const col = i === j ? P.diag : i === R ? P.row : j === K ? P.col : P.text;
      o.push(entry(i, j, x - 4, y, col, i === j || i === R || j === K, P));
    }
  }
  o.push(txt(`${m} rows`, bx1 - 14, (by1 + by2) / 2 + 4, P.muted, P.fsSize, 'end', 500));
  o.push(txt(`${n} columns`, (bx1 + bx2) / 2, by1 - 14, P.muted, P.fsSize, 'middle', 500));
  const lx = bx2 + 26;
  const diagList = Array.from({ length: k }, (_, t) => `a${'₀₁₂₃₄₅₆₇₈₉'[t + 1]}${'₀₁₂₃₄₅₆₇₈₉'[t + 1]}`).join(', ');
  o.push(txt('main diagonal', lx, cy(1) + 8, P.diag, P.fsName, 'start'));
  o.push(txt(diagList, lx, cy(1) + 23, P.diag, P.fsNote, 'start', 500));
  o.push(txt(`k = min(${m}, ${n}) = ${k} entries`, lx, cy(1) + 37, P.diag, P.fsNote, 'start', 500));
  o.push(txt(`row ${R}`, lx, cy(R) + ch / 2 - 2, P.row, P.fsName, 'start'));
  o.push(txt(`a 1 × ${n} vector`, lx, cy(R) + ch / 2 + 13, P.row, P.fsNote, 'start', 500));
  o.push(txt(`column ${K}`, cx(K) + cw / 2, by2 + 22, P.col, P.fsName));
  o.push(txt(`a ${m} × 1 vector`, cx(K) + cw / 2, by2 + 37, P.col, P.fsNote, 'middle', 500));
  const w = spec.width || lx + 150, h = spec.height || by2 + 80;
  const cap = spec.caption === undefined ? `a ${m} × ${n} matrix: ${m * n} entries, entry aᵢⱼ in row i and column j` : spec.caption;
  if (cap) o.push(txt(cap, w / 2, h - 12, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { anatomy };

export default function renderMatrixGrid(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `matrixGrid: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `Add a new one in a further file per process v10 rule 11; do not edit this one.`
    );
  }
  const { w, h, body } = build(spec, P);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" ` +
    `role="img" style="display:block;max-width:100%;height:auto">` +
    (spec.svgTitle ? `<title>${esc(spec.svgTitle)}</title>` : '') +
    body +
    `</svg>`
  );
}

export { renderMatrixGrid, C as matrixGridDefaults };
