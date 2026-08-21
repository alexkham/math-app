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

const threeSetsVennDiagrams = {
  plain: wrap(''),
  tripleIntersection: wrap(tripleLens(FILL, 'ts3-ti-a', 'ts3-ti-b')),
  aUnionBintC: wrap(disc(A, FILL) + lensBC(FILL, 'ts3-ubc')),
};

export default threeSetsVennDiagrams;
