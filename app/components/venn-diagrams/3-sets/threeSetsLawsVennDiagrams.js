// Static SVG diagrams for the three-sets-laws-venn tool (Line 1).
// Each diagram freezes ThreeSetsLawsExplorer in one identity: the side-by-side
// LHS = RHS pair of mini three-circle Venn diagrams, replicating the
// component's mini geometry exactly — 270x240 frame, margin 6, three r=50
// circles on a 32px ring around (135,125) (A top, B lower-left, C lower-right),
// stroke #1e293b, 12px U label, Cambria side labels, 28px equals sign, and the
// green match badge. Shading uses the flat pre-blended #4675ee convention.
// Every law in the catalog is valid, so both sides paint the same region set,
// via the same coarse-to-fine 8-region painter as threeSetsVennDiagrams.js.
// Clip ids are law- and side-scoped: many SVGs share one page.

const W = 270;
const H = 240;
const M = 6;
const FILL = '#4675ee';
const STROKE = '#1e293b';
const SERIF = "'Cambria Math','Times New Roman',serif";

const CX = 135, CY = 125, R = 50, OFF = 32;
const place3 = (a) => ({
  cx: +(CX + OFF * Math.cos(a)).toFixed(2),
  cy: +(CY - OFF * Math.sin(a)).toFixed(2),
  r: R,
});
const A = place3(Math.PI / 2);
const B = place3(Math.PI / 2 + (2 * Math.PI) / 3);
const C = place3(Math.PI / 2 - (2 * Math.PI) / 3);

const disc = (c, fill) => `<circle cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="${fill}"/>`;
const outline = (c) => `<circle cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="none" stroke="${STROKE}" stroke-width="1"/>`;
const clipOf = (c, id) => `<clipPath id="${id}"><circle cx="${c.cx}" cy="${c.cy}" r="${c.r}"/></clipPath>`;
const lensIn = (outer, inner, fill, id) =>
  clipOf(outer, id) + `<circle cx="${inner.cx}" cy="${inner.cy}" r="${inner.r}" fill="${fill}" clip-path="url(#${id})"/>`;
const tripleLens = (fill, idA, idB) =>
  clipOf(A, idA) + clipOf(B, idB) +
  `<g clip-path="url(#${idA})"><g clip-path="url(#${idB})">` +
  `<circle cx="${C.cx}" cy="${C.cy}" r="${C.r}" fill="${fill}"/>` +
  `</g></g>`;
const uRectFill = (fill) => `<rect x="${M}" y="${M}" width="${W - 2 * M}" height="${H - 2 * M}" fill="${fill}"/>`;

const setLabel = (x, y, t) =>
  `<text x="${x}" y="${y}" font-size="12" font-style="italic" fill="${STROKE}" text-anchor="middle" font-family="${SERIF}">${t}</text>`;
const chrome =
  `<rect x="${M}" y="${M}" width="${W - 2 * M}" height="${H - 2 * M}" fill="none" stroke="#cbd5e1" stroke-width="1"/>` +
  outline(A) + outline(B) + outline(C) +
  `<text x="18" y="20" font-size="12" fill="#64748b" font-family="${SERIF}">U</text>` +
  setLabel(CX, CY - OFF - R - 8, 'A') + setLabel(CX - OFF - R + 6, CY + OFF + R - 2, 'B') + setLabel(CX + OFF + R - 6, CY + OFF + R - 2, 'C');

// Coarse-to-fine 8-region painter; region keys match the explorer's tooltips.
const mini = (key, side, S) => {
  const col = (r) => (S.includes(r) ? FILL : '#fff');
  const p = `l3-${key}-${side}`;
  return (
    `<rect width="${W}" height="${H}" fill="#fff"/>` +
    uRectFill(col('outside')) +
    disc(A, col('A')) + disc(B, col('B')) + disc(C, col('C')) +
    lensIn(A, B, col('A∩B'), `${p}-ab`) +
    lensIn(A, C, col('A∩C'), `${p}-ac`) +
    lensIn(B, C, col('B∩C'), `${p}-bc`) +
    tripleLens(col('A∩B∩C'), `${p}-ta`, `${p}-tb`) +
    chrome
  );
};

const PW = 660;   // pair viewBox width
const PH = 350;   // pair viewBox height
const RX = 390;   // rhs x offset

const sideLabel = (x, t) =>
  `<text x="${x}" y="20" font-size="14" font-weight="600" fill="${STROKE}" text-anchor="middle" font-family="${SERIF}">${t}</text>`;

const badge =
  `<rect x="${PW / 2 - 118}" y="294" width="236" height="26" rx="13" fill="#dcfce7"/>` +
  `<text x="${PW / 2}" y="311" font-size="12" font-weight="600" fill="#166534" text-anchor="middle" ` +
  `font-family="'Inter',-apple-system,sans-serif">&#10003; Regions match &#8212; identity holds</text>`;

const pair = (key, lhsSym, rhsSym, S) =>
  `<svg width="560" viewBox="0 0 ${PW} ${PH}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
  `style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">` +
  `<rect width="${PW}" height="${PH}" fill="#fff"/>` +
  sideLabel(135, lhsSym) +
  `<g transform="translate(0,32)">${mini(key, 'l', S)}</g>` +
  `<text x="${PW / 2}" y="165" font-size="28" font-weight="700" fill="#64748b" text-anchor="middle">=</text>` +
  sideLabel(RX + 135, rhsSym) +
  `<g transform="translate(${RX},32)">${mini(key, 'r', S)}</g>` +
  badge + `</svg>`;

const ALL7 = ['A', 'B', 'C', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C'];

const threeSetsLawsVennDiagrams = {
  'assoc-u':       pair('assoc-u', '(A &#8746; B) &#8746; C', 'A &#8746; (B &#8746; C)', ALL7),
  'assoc-i':       pair('assoc-i', '(A &#8745; B) &#8745; C', 'A &#8745; (B &#8745; C)', ['A∩B∩C']),
  'assoc-sd':      pair('assoc-sd', '(A &#9651; B) &#9651; C', 'A &#9651; (B &#9651; C)', ['A', 'B', 'C', 'A∩B∩C']),
  'dist-i-over-u': pair('dist-i-over-u', 'A &#8745; (B &#8746; C)', '(A &#8745; B) &#8746; (A &#8745; C)', ['A∩B', 'A∩C', 'A∩B∩C']),
  'dist-u-over-i': pair('dist-u-over-i', 'A &#8746; (B &#8745; C)', '(A &#8746; B) &#8745; (A &#8746; C)', ['A', 'A∩B', 'A∩C', 'A∩B∩C', 'B∩C']),
  'dm-u-3':        pair('dm-u-3', '(A &#8746; B &#8746; C)&#8242;', 'A&#8242; &#8745; B&#8242; &#8745; C&#8242;', ['outside']),
  'dm-i-3':        pair('dm-i-3', '(A &#8745; B &#8745; C)&#8242;', 'A&#8242; &#8746; B&#8242; &#8746; C&#8242;', ['outside', 'A', 'B', 'C', 'A∩B', 'A∩C', 'B∩C']),
  'diff-over-u':   pair('diff-over-u', 'A &#8726; (B &#8746; C)', '(A &#8726; B) &#8745; (A &#8726; C)', ['A']),
  'diff-over-i':   pair('diff-over-i', 'A &#8726; (B &#8745; C)', '(A &#8726; B) &#8746; (A &#8726; C)', ['A', 'A∩B', 'A∩C']),
  'union-minus-c': pair('union-minus-c', '(A &#8746; B) &#8726; C', '(A &#8726; C) &#8746; (B &#8726; C)', ['A', 'B', 'A∩B']),
  'inter-minus-c': pair('inter-minus-c', '(A &#8745; B) &#8726; C', 'A &#8745; (B &#8726; C)', ['A∩B']),
  'nested-diff':   pair('nested-diff', '(A &#8726; B) &#8726; C', 'A &#8726; (B &#8746; C)', ['A']),
};

export default threeSetsLawsVennDiagrams;
