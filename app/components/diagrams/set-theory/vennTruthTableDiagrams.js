// Frozen-state diagrams for VennTruthTableExplorer (Line 1 on-page anchor mesh).
//
// One SVG string per explanation id resolveExplanationId can return. The
// geometry, clip-path region painting, outlines, labels and theme replicate
// VennTruthTableExplorer's own render path, so a frozen frame reads as the live
// tool paused rather than as a redrawing of it.
//
// A frozen frame carries no truth table: the table is DOM, not SVG, and the
// section prose beside each unit carries the row reading instead.
//
// Consumed by the page inside getStaticProps, wrapped by demoUnitFrame, and
// rendered as a content-array item. Never interpolated into a content string.

// --- geometry (mirrors GEOMETRY in the component) ---------------------------

const GEOMETRY = {
  2: {
    width: 440, height: 290, radius: 92,
    sets: ['A', 'B'],
    centres: { A: [178, 145], B: [262, 145] },
    labelOffset: { A: [-104, -70], B: [104, -70] }
  },
  3: {
    width: 440, height: 380, radius: 88,
    sets: ['A', 'B', 'C'],
    centres: { A: [220, 136], B: [176, 212], C: [264, 212] },
    labelOffset: { A: [0, -104], B: [-80, 78], C: [80, 78] }
  }
};

const THEME = {
  accent: '#2f4fd8',
  fill: '#2f4fd8',
  opacity: 0.8,
  neutral: '#ffffff',
  stroke: '#1e293b',
  strokeWidth: 1.4,
  labelColor: '#1e293b'
};

const MATH_FONT = "'Cambria Math','Latin Modern Math',Georgia,serif";

function circlePath(cx, cy, r) {
  return 'M ' + (cx - r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx + r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx - r) + ' ' + cy + ' Z';
}

function outsidePath(geo, cx, cy, r) {
  return 'M 0 0 L ' + geo.width + ' 0 L ' + geo.width + ' ' + geo.height + ' L 0 ' + geo.height + ' Z ' +
    circlePath(cx, cy, r);
}

// Region table, as buildRegionTable produces it in VennGenerator.
function regionTable(sets) {
  const rows = [];
  for (let m = 0; m < (1 << sets.length); m++) {
    const vars = {};
    sets.forEach((s, i) => { vars[s] = !!(m & (1 << i)); });
    const inside = sets.filter((s) => vars[s]);
    rows.push({ mask: m, vars, inside, label: inside.length ? inside.join('∩') : 'U' });
  }
  return rows;
}

// --- membership predicates --------------------------------------------------
// Each frozen state names its shaded regions by a predicate over `vars`, which
// is what evalNode would return for the expression. Writing them directly keeps
// this module free of the parser.

const EXPR = {
  'A ∩ B': (v) => v.A && v.B,
  'A ∪ B': (v) => v.A || v.B,
  'A ∪ Aᶜ': () => true,
  'A ∩ Aᶜ': () => false,
  'Aᶜ ∪ B': (v) => !v.A || v.B,
  'A ∩ (A ∪ B)': (v) => v.A && (v.A || v.B),
  'A ∩ (B ∪ C)': (v) => v.A && (v.B || v.C)
};

// XML-escape, and keep the set glyphs as entities.
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

let uidSeq = 0;

/**
 * One frozen diagram.
 * @param {object} o
 * @param {2|3} o.n                 number of sets
 * @param {function} o.test         (vars) => boolean, which regions are shaded
 * @param {number|null} [o.selected] mask of the region to outline, or null
 * @returns {string} SVG markup
 */
function diagram(o) {
  const geo = GEOMETRY[o.n];
  const sets = geo.sets;
  const rows = regionTable(sets);
  const uid = 'vtt' + (uidSeq++);
  const selected = o.selected === undefined ? null : o.selected;

  // defs: an in/out clip path per set, exactly as the component builds them
  const defs = sets.map((s) => {
    const c = geo.centres[s];
    return (
      '<clipPath id="in' + s + uid + '" clipPathUnits="userSpaceOnUse">' +
      '<path d="' + circlePath(c[0], c[1], geo.radius) + '"/></clipPath>' +
      '<clipPath id="out' + s + uid + '" clipPathUnits="userSpaceOnUse">' +
      '<path d="' + outsidePath(geo, c[0], c[1], geo.radius) + '" clip-rule="evenodd"/></clipPath>'
    );
  }).join('');

  // regions: a full-bleed rect clipped down by one clip path per set
  const regions = rows.map((r) => {
    const on = !!o.test(r.vars);
    let node =
      '<rect x="0" y="0" width="' + geo.width + '" height="' + geo.height +
      '" fill="' + (on ? THEME.fill : THEME.neutral) + '" opacity="' + (on ? THEME.opacity : 1) + '"/>';
    for (let i = sets.length - 1; i >= 0; i--) {
      const clip = ((r.mask & (1 << i)) ? 'in' : 'out') + sets[i] + uid;
      node = '<g clip-path="url(#' + clip + ')">' + node + '</g>';
    }

    let ring = '';
    if (selected !== null && r.mask === selected) {
      let outline =
        '<rect x="0" y="0" width="' + geo.width + '" height="' + geo.height +
        '" fill="none" stroke="' + THEME.accent + '" stroke-width="7" stroke-dasharray="6 4"/>';
      for (let i = sets.length - 1; i >= 0; i--) {
        const clip = ((r.mask & (1 << i)) ? 'in' : 'out') + sets[i] + uid;
        outline = '<g clip-path="url(#' + clip + ')">' + outline + '</g>';
      }
      ring = outline;
    }
    return '<g>' + node + ring + '</g>';
  }).join('');

  const outlines = sets.map((s) => {
    const c = geo.centres[s];
    return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + geo.radius +
      '" fill="none" stroke="' + THEME.stroke + '" stroke-width="' + THEME.strokeWidth + '"/>';
  }).join('');

  const labels = sets.map((s) => {
    const c = geo.centres[s];
    const d = geo.labelOffset[s];
    return '<text x="' + (c[0] + d[0]) + '" y="' + (c[1] + d[1]) +
      '" text-anchor="middle" font-family="' + MATH_FONT +
      '" font-size="19" font-style="italic" fill="' + THEME.labelColor + '">' + esc(s) + '</text>';
  }).join('');

  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + geo.width + ' ' + geo.height +
    '" width="' + geo.width + '" height="' + geo.height +
    '" style="display:block;max-width:100%;height:auto" role="img">' +
    '<defs>' + defs + '</defs>' +
    '<rect x="0" y="0" width="' + geo.width + '" height="' + geo.height + '" fill="#ffffff"/>' +
    regions + outlines + labels +
    '</svg>'
  );
}

// The expression box in a state the diagram cannot express: a parse failure and
// an unknown set both leave the shading untouched, so the frame shows the box.
function exprBox(text, message) {
  const w = 440;
  const h = 132;
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + ' ' + h +
    '" width="' + w + '" height="' + h +
    '" style="display:block;max-width:100%;height:auto" role="img">' +
    '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="#ffffff"/>' +
    '<rect x="16" y="30" width="' + (w - 32) + '" height="34" rx="7" fill="#ffffff" stroke="#c0392b" stroke-width="1.6"/>' +
    '<text x="28" y="52" font-family="' + MATH_FONT + '" font-size="15" fill="#131720">' + esc(text) + '</text>' +
    '<text x="16" y="88" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#c0392b">' +
    esc(message) + '</text>' +
    '<text x="16" y="110" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#5a6472">' +
    'Both views hold their previous shading until the expression parses.</text>' +
    '</svg>'
  );
}

// --- the frozen states ------------------------------------------------------
// Keys match resolveExplanationId in VennTruthTableExplorer.jsx exactly.

const vennTruthTableDiagrams = {

  // no expression typed: nothing shaded, the empty diagram waiting
  'empty': diagram({ n: 2, test: () => false }),

  // the reader stopped on a malformed expression
  'error': exprBox('A ∩ (B', 'Expected a closing bracket'),

  // a set that is not on the diagram
  'unknown-set': exprBox('A ∩ C', 'Unknown set “C” — the diagram holds A, B'),

  // every region shaded: A ∪ Aᶜ
  'tautology': diagram({ n: 2, test: EXPR['A ∪ Aᶜ'] }),

  // nothing shaded: A ∩ Aᶜ
  'contradiction': diagram({ n: 2, test: EXPR['A ∩ Aᶜ'] }),

  // a named connective: material implication, Aᶜ ∪ B
  'named': diagram({ n: 2, test: EXPR['Aᶜ ∪ B'] }),

  // the absorption case: A ∩ (A ∪ B) ignores B
  'independent': diagram({ n: 2, test: EXPR['A ∩ (A ∪ B)'] }),

  // an ordinary three-set expression: A ∩ (B ∪ C)
  'general': diagram({ n: 3, test: EXPR['A ∩ (B ∪ C)'] }),

  // a row picked out: A ∩ B shaded, the A-only region outlined
  'row-selected': diagram({ n: 2, test: EXPR['A ∩ B'], selected: 1 })
};

export default vennTruthTableDiagrams;
