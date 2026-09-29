// matrixGrid.v3 - two matrices, both of their products, and the traces of
// those products.
//
// Third file, not an edit: rule 11 - matrixGrid.js and matrixGrid.v2.js had
// both shipped before this was needed.
//
//   matrixGrid.js     anatomy     matrix
//   matrixGrid.v2.js  recipe      matrix/inverse
//   matrixGrid.v3.js  products    matrix/trace
//
// renderMatrixGridV3(spec) -> SVG string. Docs: matrixGrid.v3.md beside it.
//
// Palette: the page theme ($meta.palette.$pageTheme) - A in site blue, B in
// brand navy, the diagonals and traces in site amber.

const C = {
  a: '#2563EB', b: '#06357A', diag: '#B45309', diagFill: '#FDF3E3',
  text: '#1E3A5F', muted: '#64748B', divider: '#CBD5E1',

  wBracket: 1.8, wDiag: 1.8, wDivider: 1,
  cellW: 38, cellH: 34, rDiag: 14,
  fsEntry: 14, fsName: 14, fsTrace: 14, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const num = (v) => String(v).replace('-', '−');

function txt(t, x, y, col, size, anchor, weight, italic) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" font-size="${size || 13}" ` +
    `font-weight="${weight === undefined ? 600 : weight}" fill="${col}"${italic ? ' font-style="italic"' : ''}>${esc(t)}</text>`;
}

const mul = (A, B) => A.map((r) => B[0].map((_, j) => r.reduce((s, v, k) => s + v * B[k][j], 0)));

// ---------------------------------------------------------------- products
// Top row: A and B as given. Bottom row: AB and BA, computed here, each with
// its diagonal ringed and its trace summed underneath. Everything numeric is
// computed from spec.A and spec.B - the figure cannot disagree with itself.
function products(spec, P) {
  const A = spec.A, B = spec.B;
  if (A[0].length !== B.length || B[0].length !== A.length) {
    throw new Error('matrixGrid.v3 products: A must be m x n and B n x m so that both AB and BA exist.');
  }
  const AB = mul(A, B), BA = mul(B, A);
  const cw = P.cellW, ch = P.cellH, o = [];
  const grid = (M, x, y, col, name, diag) => {
    const m = M.length, n = M[0].length, w = n * cw, h = m * ch;
    o.push(`<path d="M ${x + 6} ${y - 4} L ${x - 2} ${y - 4} L ${x - 2} ${y + h + 4} L ${x + 6} ${y + h + 4} ` +
      `M ${x + w - 6} ${y - 4} L ${x + w + 2} ${y - 4} L ${x + w + 2} ${y + h + 4} L ${x + w - 6} ${y + h + 4}" fill="none" stroke="${col}" stroke-width="${P.wBracket}"/>`);
    M.forEach((r, i) => r.forEach((v, j) => {
      const cx = x + j * cw + cw / 2, cy = y + i * ch + ch / 2, d = diag && i === j;
      if (d) o.push(`<circle cx="${cx}" cy="${cy}" r="${P.rDiag}" fill="${P.diagFill}" stroke="${P.diag}" stroke-width="${P.wDiag}"/>`);
      o.push(txt(num(v), cx, cy + 5, d ? P.diag : P.text, P.fsEntry, 'middle', d ? 700 : 500));
    }));
    o.push(txt(name, x + w / 2, y - 14, col, P.fsName, 'middle', 700, true));
    return w;
  };
  const dims = (M) => `${M.length} × ${M[0].length}`;
  grid(A, 60, 50, P.a, `A  (${dims(A)})`, false);
  grid(B, 250, 50, P.b, `B  (${dims(B)})`, false);
  const rows = Math.max(A.length, B.length);
  const yDiv = 50 + rows * ch + 34, yBot = yDiv + 44;
  o.push(`<line x1="20" y1="${yDiv}" x2="${(spec.width || 490) - 20}" y2="${yDiv}" stroke="${P.divider}" stroke-width="${P.wDivider}"/>`);
  const w1 = grid(AB, 90, yBot, P.text, `AB  (${dims(AB)})`, true);
  const w2 = grid(BA, 330, yBot, P.text, `BA  (${dims(BA)})`, true);
  const trace = (M) => M.map((r, i) => r[i]);
  const tAB = trace(AB), tBA = trace(BA);
  const sum = (a) => a.reduce((s, v) => s + v, 0);
  const yTr = yBot + Math.max(AB.length, BA.length) * ch + 30;
  o.push(txt(`tr(AB) = ${tAB.map(num).join(' + ')} = ${num(sum(tAB))}`, 90 + w1 / 2, yTr, P.diag, P.fsTrace, 'middle', 700));
  o.push(txt(`tr(BA) = ${tBA.map(num).join(' + ')} = ${num(sum(tBA))}`, 330 + w2 / 2, yTr, P.diag, P.fsTrace, 'middle', 700));
  const w = spec.width || 490, h = spec.height || yTr + 46;
  if (spec.caption) o.push(txt(spec.caption, w / 2, h - 14, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { products };

export default function renderMatrixGridV3(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `matrixGrid.v3: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderMatrixGridV3, C as matrixGridV3Defaults };
