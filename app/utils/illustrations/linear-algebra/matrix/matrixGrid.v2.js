// matrixGrid.v2 - the 2 x 2 inverse as a recipe on the grid: swap the
// diagonal, negate the off-diagonal, divide by the determinant.
//
// Second file, not an edit: rule 11 - matrixGrid.js had shipped on the matrix
// page before this was needed.
//
//   matrixGrid.js     anatomy     matrix
//   matrixGrid.v2.js  recipe      matrix/inverse
//
// renderMatrixGridV2(spec) -> SVG string. Docs: matrixGrid.v2.md beside it.
//
// Palette: the page theme ($meta.palette.$pageTheme) - diagonal entries in
// site amber, off-diagonal in site blue, the determinant in brand navy.

const C = {
  diag: '#B45309', diagFill: '#FDF3E3', off: '#2563EB', offFill: '#DBEAFE', det: '#06357A',
  text: '#1E3A5F', muted: '#64748B',

  wCell: 1.4, wBracket: 2, wArrow: 1.6, wBar: 1.6,
  cellW: 56, cellH: 46, cellR: 7,
  fsEntry: 17, fsName: 15, fsDet: 15, fsStep: 12, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight, italic) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" font-size="${size || 13}" ` +
    `font-weight="${weight === undefined ? 600 : weight}" fill="${col}"${italic ? ' font-style="italic"' : ''}>${esc(t)}</text>`;
}

// ----------------------------------------------------------------- recipe
// Entries keep their colour across the arrow, so a and d visibly trade
// corners and b, c visibly stay put with a sign added. The steps are listed
// in the same three colours, in the order the page states them. The entries
// are symbols by default; `entries` and `result` may carry numbers instead.
function recipe(spec, P) {
  const cw = P.cellW, ch = P.cellH, LX = 60, TY = 70, RX = 400;
  const e = spec.entries || ['a', 'b', 'c', 'd'];
  const r = spec.result || [e[3], `−${e[1]}`, `−${e[2]}`, e[0]];
  const kinds = ['diag', 'off', 'off', 'diag'];
  const o = [];
  const bracket = (x) => o.push(`<path d="M ${x + 2} ${TY - 4} L ${x - 6} ${TY - 4} L ${x - 6} ${TY + 2 * ch + 4} L ${x + 2} ${TY + 2 * ch + 4} ` +
    `M ${x + 2 * cw - 2} ${TY - 4} L ${x + 2 * cw + 6} ${TY - 4} L ${x + 2 * cw + 6} ${TY + 2 * ch + 4} L ${x + 2 * cw - 2} ${TY + 2 * ch + 4}" ` +
    `fill="none" stroke="${P.text}" stroke-width="${P.wBracket}"/>`);
  const cell = (x, y, label, kind) => {
    const col = kind === 'diag' ? P.diag : P.off, fill = kind === 'diag' ? P.diagFill : P.offFill;
    o.push(`<rect x="${x + 6}" y="${y + 5}" width="${cw - 12}" height="${ch - 10}" rx="${P.cellR}" fill="${fill}" stroke="${col}" stroke-width="${P.wCell}"/>`);
    o.push(txt(label, x + cw / 2, y + ch / 2 + 6, col, P.fsEntry, 'middle', 700, true));
  };
  const grid = (x, labels, kindsAt) => labels.forEach((l, t) => cell(x + (t % 2) * cw, TY + Math.floor(t / 2) * ch, l, kindsAt[t]));

  bracket(LX);
  grid(LX, e, kinds);
  o.push(txt(spec.name || 'A', LX + cw, TY - 16, P.text, P.fsName, 'middle', 700, true));

  o.push(txt('1', RX - 52, TY + ch - 8, P.det, P.fsDet + 1, 'middle', 700));
  o.push(`<line x1="${RX - 92}" y1="${TY + ch}" x2="${RX - 12}" y2="${TY + ch}" stroke="${P.det}" stroke-width="${P.wBar}"/>`);
  o.push(txt(spec.det || 'ad − bc', RX - 52, TY + ch + 20, P.det, P.fsDet, 'middle', 700, true));
  bracket(RX);
  grid(RX, r, kinds);
  o.push(txt(spec.inverseName || 'A⁻¹', RX + cw, TY - 16, P.text, P.fsName, 'middle', 700, true));

  const ax1 = LX + 2 * cw + 30, ax2 = RX - 104, ay = TY + ch;
  o.push(`<line x1="${ax1}" y1="${ay}" x2="${ax2 - 6}" y2="${ay}" stroke="${P.muted}" stroke-width="${P.wArrow}"/>`);
  o.push(`<path d="M ${ax2} ${ay} L ${(ax2 - 8.3).toFixed(1)} ${ay + 3.5} L ${(ax2 - 8.3).toFixed(1)} ${ay - 3.5} Z" fill="${P.muted}"/>`);

  const steps = spec.steps || [
    ['1  swap the diagonal: a and d trade places', 'diag'],
    ['2  negate the off-diagonal: b → −b, c → −c', 'off'],
    ['3  divide every entry by the determinant ad − bc', 'det'],
  ];
  const ly = TY + 2 * ch + 64;
  steps.forEach(([t, role], i) => o.push(txt(t, 60, ly + 18 * i, P[role] || P.text, P.fsStep, 'start', 600)));
  const w = spec.width || 600, h = spec.height || ly + 18 * (steps.length - 1) + 40;
  if (spec.caption) o.push(txt(spec.caption, w / 2, h - 14, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { recipe };

export default function renderMatrixGridV2(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `matrixGrid.v2: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderMatrixGridV2, C as matrixGridV2Defaults };
