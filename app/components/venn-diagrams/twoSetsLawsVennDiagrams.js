// Static SVG diagrams for the two-sets-laws-venn tool (Line 1).
// Each diagram freezes TwoSetsLawsExplorer in one identity: the side-by-side
// LHS = RHS pair of mini Venn diagrams, replicating the component's mini
// geometry exactly — 260x210 frame, margin 6, circles A(100,110,r55) and
// B(160,110,r55), stroke #1e293b, universe rect #cbd5e1 with 12px U label,
// side labels in Cambria Math, 28px equals sign, and the green match badge.
// Shading uses the default theme #2563eb at 0.85 pre-blended over white to
// flat #4675ee (same convention as twoSetsVennDiagrams.js). Since every law
// in the catalog is a valid identity, both sides paint the same region set.
// Clip-path ids are law- and side-scoped: many SVGs share one page.

const W = 260;
const H = 210;
const M = 6;
const A = { cx: 100, cy: 110, r: 55 };
const B = { cx: 160, cy: 110, r: 55 };
const FILL = '#4675ee';
const STROKE = '#1e293b';
const SERIF = "'Cambria Math','Times New Roman',serif";

const disc = (c, fill) => `<circle cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="${fill}"/>`;
const outline = (c) => `<circle cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="none" stroke="${STROKE}" stroke-width="1"/>`;
const lens = (fill, id) =>
  `<clipPath id="${id}"><circle cx="${A.cx}" cy="${A.cy}" r="${A.r}"/></clipPath>` +
  `<circle cx="${B.cx}" cy="${B.cy}" r="${B.r}" fill="${fill}" clip-path="url(#${id})"/>`;
const uFill = `<rect x="${M}" y="${M}" width="${W - 2 * M}" height="${H - 2 * M}" fill="${FILL}"/>`;

const chrome =
  `<rect x="${M}" y="${M}" width="${W - 2 * M}" height="${H - 2 * M}" fill="none" stroke="#cbd5e1" stroke-width="1"/>` +
  outline(A) + outline(B) +
  `<text x="18" y="20" font-size="12" fill="#64748b" font-family="${SERIF}">U</text>` +
  `<text x="60" y="180" font-size="13" font-style="italic" fill="${STROKE}" font-family="${SERIF}">A</text>` +
  `<text x="200" y="180" font-size="13" font-style="italic" fill="${STROKE}" font-family="${SERIF}">B</text>`;

// The 13 distinct region sets the 26-law catalog produces, as paint sequences.
// id → clip-path id for the lens paint when one is needed.
const REGION_PAINTS = {
  none:        () => '',
  fullA:       () => disc(A, FILL),                                          // A-only + lens
  aOnly:       (id) => disc(A, FILL) + lens('#fff', id),
  lensOnly:    (id) => lens(FILL, id),
  insideAny:   () => disc(A, FILL) + disc(B, FILL),                          // union
  crescents:   (id) => disc(A, FILL) + disc(B, FILL) + lens('#fff', id),     // symmetric difference
  all:         () => uFill,
  outsideOnly: () => uFill + disc(A, '#fff') + disc(B, '#fff'),
  allButLens:  (id) => uFill + lens('#fff', id),
  outsideLens: (id) => uFill + disc(A, '#fff') + disc(B, '#fff') + lens(FILL, id),
  allButAOnly: () => uFill + disc(A, '#fff') + disc(B, FILL),
  allButBOnly: () => uFill + disc(B, '#fff') + disc(A, FILL),
  bOnly:       (id) => disc(B, FILL) + lens('#fff', id),
};

const mini = (paintKey, clipId) =>
  `<rect width="${W}" height="${H}" fill="#fff"/>` +
  REGION_PAINTS[paintKey](clipId) + chrome;

const PW = 640;   // pair viewBox width
const PH = 320;   // pair viewBox height
const RX = 380;   // rhs x offset

const sideLabel = (x, t) =>
  `<text x="${x}" y="20" font-size="14" font-weight="600" fill="${STROKE}" text-anchor="middle" font-family="${SERIF}">${t}</text>`;

const badge =
  `<rect x="${PW / 2 - 118}" y="264" width="236" height="26" rx="13" fill="#dcfce7"/>` +
  `<text x="${PW / 2}" y="281" font-size="12" font-weight="600" fill="#166534" text-anchor="middle" ` +
  `font-family="'Inter',-apple-system,sans-serif">&#10003; Regions match &#8212; identity holds</text>`;

const pair = (key, lhsSym, rhsSym, paintKey) =>
  `<svg width="560" viewBox="0 0 ${PW} ${PH}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
  `style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">` +
  `<rect width="${PW}" height="${PH}" fill="#fff"/>` +
  sideLabel(130, lhsSym) +
  `<g transform="translate(0,32)">${mini(paintKey, `tslw-${key}-l`)}</g>` +
  `<text x="${PW / 2}" y="150" font-size="28" font-weight="700" fill="#64748b" text-anchor="middle">=</text>` +
  sideLabel(RX + 130, rhsSym) +
  `<g transform="translate(${RX},32)">${mini(paintKey, `tslw-${key}-r`)}</g>` +
  badge + `</svg>`;

const twoSetsLawsVennDiagrams = {
  'idem-u': pair('idem-u', 'A &#8746; A', 'A', 'fullA'),
  'idem-i': pair('idem-i', 'A &#8745; A', 'A', 'fullA'),
  'comm-u': pair('comm-u', 'A &#8746; B', 'B &#8746; A', 'insideAny'),
  'comm-i': pair('comm-i', 'A &#8745; B', 'B &#8745; A', 'lensOnly'),
  'id-u-e': pair('id-u-e', 'A &#8746; &#8709;', 'A', 'fullA'),
  'id-i-u': pair('id-i-u', 'A &#8745; U', 'A', 'fullA'),
  'ann-i':  pair('ann-i', 'A &#8745; &#8709;', '&#8709;', 'none'),
  'ann-u':  pair('ann-u', 'A &#8746; U', 'U', 'all'),
  'cmp-u':  pair('cmp-u', 'A &#8746; A&#8242;', 'U', 'all'),
  'cmp-i':  pair('cmp-i', 'A &#8745; A&#8242;', '&#8709;', 'none'),
  'dcmp':   pair('dcmp', '(A&#8242;)&#8242;', 'A', 'fullA'),
  'cmp-U':  pair('cmp-U', 'U&#8242;', '&#8709;', 'none'),
  'cmp-e':  pair('cmp-e', '&#8709;&#8242;', 'U', 'all'),
  'dm-u':   pair('dm-u', '(A &#8746; B)&#8242;', 'A&#8242; &#8745; B&#8242;', 'outsideOnly'),
  'dm-i':   pair('dm-i', '(A &#8745; B)&#8242;', 'A&#8242; &#8746; B&#8242;', 'allButLens'),
  'abs-u':  pair('abs-u', 'A &#8746; (A &#8745; B)', 'A', 'fullA'),
  'abs-i':  pair('abs-i', 'A &#8745; (A &#8746; B)', 'A', 'fullA'),
  'diff':   pair('diff', 'A &#8726; B', 'A &#8745; B&#8242;', 'aOnly'),
  'diff-r': pair('diff-r', 'B &#8726; A', 'A&#8242; &#8745; B', 'bOnly'),
  'sd-1':   pair('sd-1', 'A &#9651; B', '(A &#8726; B) &#8746; (B &#8726; A)', 'crescents'),
  'sd-2':   pair('sd-2', 'A &#9651; B', '(A &#8746; B) &#8745; (A &#8745; B)&#8242;', 'crescents'),
  'sd-c':   pair('sd-c', '(A &#9651; B)&#8242;', '(A &#8745; B) &#8746; (A &#8746; B)&#8242;', 'outsideLens'),
  'cc-1':   pair('cc-1', '(A&#8242; &#8746; B)&#8242;', 'A &#8745; B&#8242;', 'aOnly'),
  'cc-2':   pair('cc-2', '(A &#8746; B&#8242;)&#8242;', 'A&#8242; &#8745; B', 'bOnly'),
  'cc-3':   pair('cc-3', '(A &#8745; B&#8242;)&#8242;', 'A&#8242; &#8746; B', 'allButAOnly'),
  'cc-4':   pair('cc-4', '(A&#8242; &#8745; B)&#8242;', 'A &#8746; B&#8242;', 'allButBOnly'),
};

export default twoSetsLawsVennDiagrams;
