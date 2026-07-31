// Static SVG diagrams for the two-set Venn tools.
// Each diagram freezes the TwoSetsBasicIdentitiesExplorer in one scenario,
// replicating the component's rendering: 520x420 frame, universe rect at
// margin 12 (stroke #cbd5e1, label U), circles A(200,210,r110) and
// B(320,210,r110) with stroke #1e293b, active regions in the default theme
// color #2563eb at opacity 0.85 - pre-blended over white to flat #4675ee so
// overlapping paints cannot double-darken.
// Consumed via demoUnitFrame (Operation A) or interpolated bare into
// sectionsContent (Line 1 style).

const W = 520;
const H = 420;
const M = 12;
const A = { cx: 200, cy: 210, r: 110 };
const B = { cx: 320, cy: 210, r: 110 };
const FILL = '#4675ee';
const STROKE = '#1e293b';
const SERIF = "'Cambria Math','Times New Roman',serif";

const disc = (c, fill) => `<circle cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="${fill}"/>`;
const outline = (c) => `<circle cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="none" stroke="${STROKE}" stroke-width="1"/>`;
// The lens A∩B: circle B clipped to circle A. Ids must be unique per page.
const lens = (fill, id) =>
  `<clipPath id="${id}"><circle cx="${A.cx}" cy="${A.cy}" r="${A.r}"/></clipPath>` +
  `<circle cx="${B.cx}" cy="${B.cy}" r="${B.r}" fill="${fill}" clip-path="url(#${id})"/>`;

const chrome =
  `<rect x="${M}" y="${M}" width="${W - 2 * M}" height="${H - 2 * M}" fill="none" stroke="#cbd5e1" stroke-width="1"/>` +
  outline(A) + outline(B) +
  `<text x="30" y="32" font-size="18" fill="#64748b" font-family="${SERIF}">U</text>` +
  `<text x="130" y="320" font-size="18" font-style="italic" fill="${STROKE}" font-family="${SERIF}">A</text>` +
  `<text x="390" y="320" font-size="18" font-style="italic" fill="${STROKE}" font-family="${SERIF}">B</text>`;

const wrap = (regions) =>
  `<svg width="340" height="275" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
  `style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">` +
  `<rect width="${W}" height="${H}" fill="#fff"/>` + regions + chrome + `</svg>`;

const twoSetsVennDiagrams = {
  union: wrap(disc(A, FILL) + disc(B, FILL)),
  intersection: wrap(lens(FILL, 'tsv-int')),
  complementA: wrap(
    `<rect x="${M}" y="${M}" width="${W - 2 * M}" height="${H - 2 * M}" fill="${FILL}"/>` + disc(A, '#fff')
  ),
  differenceAB: wrap(disc(A, FILL) + lens('#fff', 'tsv-diff')),
  symmetricDifference: wrap(disc(A, FILL) + disc(B, FILL) + lens('#fff', 'tsv-sym')),
};

export default twoSetsVennDiagrams;
