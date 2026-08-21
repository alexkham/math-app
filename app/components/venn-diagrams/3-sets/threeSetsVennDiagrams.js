// Static SVG diagrams for the three-set Venn tools.
// Each diagram freezes the ThreeSetBasicIdentitiesExplorer / ThreeSetsLawsExplorer
// view in one scenario, replicating the component's rendering: 520x420 frame,
// universe rect at margin 12, three r=90 circles centered on a 58px ring around
// (260,215) - A on top, B lower-left, C lower-right - stroke #1e293b, active
// regions in the default theme color #2563eb at opacity 0.85, pre-blended over
// white to flat #4675ee. Same conventions as twoSetsVennDiagrams.js.

const W = 520;
const H = 420;
const M = 12;
const FILL = '#4675ee';
const STROKE = '#1e293b';
const SERIF = "'Cambria Math','Times New Roman',serif";

const TRI_CX = 260, TRI_CY = 215, TRI_R = 90, TRI_OFF = 58;
const place3 = (a) => ({
  cx: +(TRI_CX + TRI_OFF * Math.cos(a)).toFixed(2),
  cy: +(TRI_CY - TRI_OFF * Math.sin(a)).toFixed(2),
  r: TRI_R,
});
const A = place3(Math.PI / 2);
const B = place3(Math.PI / 2 + (2 * Math.PI) / 3);
const C = place3(Math.PI / 2 - (2 * Math.PI) / 3);

const disc = (c, fill) => `<circle cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="${fill}"/>`;
const outline = (c) => `<circle cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="none" stroke="${STROKE}" stroke-width="1"/>`;
const clipOf = (c, id) => `<clipPath id="${id}"><circle cx="${c.cx}" cy="${c.cy}" r="${c.r}"/></clipPath>`;

// B∩C lens: circle C clipped to B. Triple intersection: C clipped to B, nested in a group clipped to A.
const lensBC = (fill, id) => clipOf(B, id) + `<circle cx="${C.cx}" cy="${C.cy}" r="${C.r}" fill="${fill}" clip-path="url(#${id})"/>`;
const tripleLens = (fill, idA, idB) =>
  clipOf(A, idA) + clipOf(B, idB) +
  `<g clip-path="url(#${idA})"><g clip-path="url(#${idB})">` +
  `<circle cx="${C.cx}" cy="${C.cy}" r="${C.r}" fill="${fill}"/>` +
  `</g></g>`;

const setLabel = (x, y, t) =>
  `<text x="${x}" y="${y}" font-size="18" font-style="italic" fill="${STROKE}" font-family="${SERIF}">${t}</text>`;
const chrome =
  `<rect x="${M}" y="${M}" width="${W - 2 * M}" height="${H - 2 * M}" fill="none" stroke="#cbd5e1" stroke-width="1"/>` +
  outline(A) + outline(B) + outline(C) +
  `<text x="30" y="32" font-size="18" fill="#64748b" font-family="${SERIF}">U</text>` +
  setLabel(253, 55, 'A') + setLabel(115, 355, 'B') + setLabel(395, 355, 'C');

const wrap = (regions) =>
  `<svg width="340" height="275" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
  `style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">` +
  `<rect width="${W}" height="${H}" fill="#fff"/>` + regions + chrome + `</svg>`;

// ---- Line 1 additions (2026-08-21): generic 8-region painter + all 40 explorer states ----

const lensAB = (fill, id) => clipOf(A, id) + `<circle cx="${B.cx}" cy="${B.cy}" r="${B.r}" fill="${fill}" clip-path="url(#${id})"/>`;
const lensAC = (fill, id) => clipOf(A, id) + `<circle cx="${C.cx}" cy="${C.cy}" r="${C.r}" fill="${fill}" clip-path="url(#${id})"/>`;
const uRectFill = (fill) => `<rect x="${M}" y="${M}" width="${W - 2 * M}" height="${H - 2 * M}" fill="${fill}"/>`;

// freeze(key, regions): paint coarse-to-fine so each of the 8 disjoint regions
// ends in its own color. Region names match the explorer's highlight keys
// (A/B/C = the "only" regions, A∩B etc. = pairwise-not-third, A∩B∩C = center).
// Clip ids are state-scoped: many SVGs share one page.
const freeze = (key, S) => {
  const col = (r) => (S.includes(r) ? FILL : '#fff');
  return wrap(
    uRectFill(col('outside')) +
    disc(A, col('A')) + disc(B, col('B')) + disc(C, col('C')) +
    lensAB(col('A∩B'), `f3-${key}-ab`) +
    lensAC(col('A∩C'), `f3-${key}-ac`) +
    lensBC(col('B∩C'), `f3-${key}-bc`) +
    tripleLens(col('A∩B∩C'), `f3-${key}-ta`, `f3-${key}-tb`)
  );
};

const ALL7 = ['A', 'B', 'C', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C'];

// Keyed by the explorer's scenario ids (highlight sets copied verbatim).
const line1States = {
  'set-a':        freeze('set-a', ['A', 'A∩B', 'A∩C', 'A∩B∩C']),
  'set-b':        freeze('set-b', ['B', 'A∩B', 'B∩C', 'A∩B∩C']),
  'set-c':        freeze('set-c', ['C', 'A∩C', 'B∩C', 'A∩B∩C']),
  'universe':     freeze('universe', ['outside', ...ALL7]),
  'empty':        freeze('empty', []),
  'a-comp':       freeze('a-comp', ['outside', 'B', 'C', 'B∩C']),
  'b-comp':       freeze('b-comp', ['outside', 'A', 'C', 'A∩C']),
  'c-comp':       freeze('c-comp', ['outside', 'A', 'B', 'A∩B']),
  'inter-abc':    freeze('inter-abc', ['A∩B∩C']),
  'inter-ab':     freeze('inter-ab', ['A∩B', 'A∩B∩C']),
  'inter-ac':     freeze('inter-ac', ['A∩C', 'A∩B∩C']),
  'inter-bc':     freeze('inter-bc', ['B∩C', 'A∩B∩C']),
  'union-abc':    freeze('union-abc', ALL7),
  'union-ab':     freeze('union-ab', ['A', 'B', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C']),
  'union-ac':     freeze('union-ac', ['A', 'C', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C']),
  'union-bc':     freeze('union-bc', ['B', 'C', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C']),
  'a-minus-b':    freeze('a-minus-b', ['A', 'A∩C']),
  'a-minus-c':    freeze('a-minus-c', ['A', 'A∩B']),
  'b-minus-a':    freeze('b-minus-a', ['B', 'B∩C']),
  'b-minus-c':    freeze('b-minus-c', ['B', 'A∩B']),
  'c-minus-a':    freeze('c-minus-a', ['C', 'B∩C']),
  'c-minus-b':    freeze('c-minus-b', ['C', 'A∩C']),
  'a-only-only':  freeze('a-only-only', ['A']),
  'b-only-only':  freeze('b-only-only', ['B']),
  'c-only-only':  freeze('c-only-only', ['C']),
  'ab-minus-c':   freeze('ab-minus-c', ['A', 'B', 'A∩B']),
  'symdiff-ab':   freeze('symdiff-ab', ['A', 'A∩C', 'B', 'B∩C']),
  'symdiff-abc':  freeze('symdiff-abc', ['A', 'B', 'C', 'A∩B∩C']),
  'ab-not-c':     freeze('ab-not-c', ['A∩B']),
  'ac-not-b':     freeze('ac-not-b', ['A∩C']),
  'bc-not-a':     freeze('bc-not-a', ['B∩C']),
  'a-and-bORc':   freeze('a-and-bORc', ['A∩B', 'A∩C', 'A∩B∩C']),
  'aORb-and-c':   freeze('aORb-and-c', ['A∩C', 'B∩C', 'A∩B∩C']),
  'a-or-bANDc':   freeze('a-or-bANDc', ['A', 'A∩B', 'A∩C', 'A∩B∩C', 'B∩C']),
  'exactly-one':  freeze('exactly-one', ['A', 'B', 'C']),
  'exactly-two':  freeze('exactly-two', ['A∩B', 'A∩C', 'B∩C']),
  'at-least-two': freeze('at-least-two', ['A∩B', 'A∩C', 'B∩C', 'A∩B∩C']),
  'at-most-one':  freeze('at-most-one', ['outside', 'A', 'B', 'C']),
  'dm-union':     freeze('dm-union', ['outside']),
  'dm-inter':     freeze('dm-inter', ['outside', 'A', 'B', 'C', 'A∩B', 'A∩C', 'B∩C']),
};

const threeSetsVennDiagrams = {
  plain: wrap(''),
  tripleIntersection: wrap(tripleLens(FILL, 'ts3-ti-a', 'ts3-ti-b')),
  aUnionBintC: wrap(disc(A, FILL) + lensBC(FILL, 'ts3-ubc')),
  states: line1States,
};

export default threeSetsVennDiagrams;
