// Frozen-state diagrams for InclusionExclusionExplorer (Line 1 anchor mesh).
//
// One SVG string per explanation id resolveExplanationId can return. Geometry,
// clip-path region painting, region fills, the big multiplicity number and the
// small element count beneath it all replicate the component's own render path
// (GEOMETRY, DEFAULT_THEME, regionFill, numberInk, renderRegions), so a frozen
// frame reads as the live tool paused at that step.
//
// Multiplicities and region counts are computed with the component's own
// buildTerms / multiplicityAfter / regionsFromSizes logic rather than written
// out by hand, so a frame cannot drift from what the tool would draw.
//
// Consumed by the page inside getStaticProps, wrapped by demoUnitFrame, and
// rendered as a content-array item. Never interpolated into a content string.

// --- replicated term algebra ------------------------------------------------

function buildTerms(n) {
  if (n === 2) {
    return [
      { key: 'A', sign: 1, masks: [1, 3], order: 1 },
      { key: 'B', sign: 1, masks: [2, 3], order: 1 },
      { key: 'AB', sign: -1, masks: [3], order: 2 }
    ];
  }
  return [
    { key: 'A', sign: 1, masks: [1, 3, 5, 7], order: 1 },
    { key: 'B', sign: 1, masks: [2, 3, 6, 7], order: 1 },
    { key: 'C', sign: 1, masks: [4, 5, 6, 7], order: 1 },
    { key: 'AB', sign: -1, masks: [3, 7], order: 2 },
    { key: 'AC', sign: -1, masks: [5, 7], order: 2 },
    { key: 'BC', sign: -1, masks: [6, 7], order: 2 },
    { key: 'ABC', sign: 1, masks: [7], order: 3 }
  ];
}

function regionsFromSizes(n, v) {
  if (n === 2) {
    return { 1: v.A - v.AB, 2: v.B - v.AB, 3: v.AB };
  }
  return {
    7: v.ABC,
    3: v.AB - v.ABC,
    5: v.AC - v.ABC,
    6: v.BC - v.ABC,
    1: v.A - v.AB - v.AC + v.ABC,
    2: v.B - v.AB - v.BC + v.ABC,
    4: v.C - v.AC - v.BC + v.ABC
  };
}

function multiplicityAfter(n, step) {
  const terms = buildTerms(n).slice(0, step);
  const mult = {};
  for (let m = 1; m < (1 << n); m++) mult[m] = 0;
  terms.forEach((t) => t.masks.forEach((m) => { mult[m] += t.sign; }));
  return mult;
}

// --- geometry and theme (mirrors the component) -----------------------------

const GEOMETRY = {
  2: {
    width: 460, height: 300, radius: 96,
    sets: ['A', 'B'],
    centres: { A: [186, 150], B: [274, 150] },
    labelOffset: { A: [-108, -74], B: [108, -74] },
    anchors: { 1: [138, 150], 2: [322, 150], 3: [230, 150] }
  },
  3: {
    width: 460, height: 400, radius: 94,
    sets: ['A', 'B', 'C'],
    centres: { A: [230, 140], B: [184, 220], C: [276, 220] },
    labelOffset: { A: [0, -110], B: [-84, 82], C: [84, 82] },
    anchors: {
      1: [230, 94], 2: [156, 254], 3: [186, 176],
      4: [304, 254], 5: [274, 176], 6: [230, 246], 7: [230, 194]
    }
  }
};

const THEME = {
  accent: '#2f4fd8',
  accentSoft: '#eaeeff',
  add: '#0e7c66',
  addSoft: '#dff2ed',
  subtract: '#c0392b',
  subtractSoft: '#fdecea',
  over: '#fff8e6',
  neutral: '#ffffff',
  stroke: '#1e293b',
  strokeWidth: 1.4,
  labelColor: '#1e293b',
  mutedInk: '#9aa5b1'
};

const DEFAULT_SIZES = { A: 24, B: 20, C: 18, AB: 9, AC: 7, BC: 6, ABC: 3 };

const MATH_FONT = '&quot;Cambria Math&quot;, &quot;Latin Modern Math&quot;, Georgia, serif';
const MONO_FONT = 'ui-monospace, Menlo, Consolas, monospace';

function circlePath(cx, cy, r) {
  return 'M ' + (cx - r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx + r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx - r) + ' ' + cy + ' Z';
}

function outsidePath(g, cx, cy, r) {
  return 'M 0 0 L ' + g.width + ' 0 L ' + g.width + ' ' + g.height + ' L 0 ' + g.height + ' Z ' +
    circlePath(cx, cy, r);
}

let uidSeq = 0;

/**
 * One frozen step of the walk-through.
 * @param {object} o
 * @param {2|3} o.n         number of sets
 * @param {number} o.step   how many terms have been applied
 * @param {object} [o.sizes] entered sizes, defaults to the component's own
 * @returns {string} SVG markup
 */
function frame(o) {
  const n = o.n;
  const geo = GEOMETRY[n];
  const uid = 'iex' + (uidSeq++);
  const sizes = Object.assign({}, DEFAULT_SIZES, o.sizes || {});
  const terms = buildTerms(n);
  const step = o.step;
  const mult = multiplicityAfter(n, step);
  const regions = regionsFromSizes(n, sizes);
  const currentTerm = step > 0 ? terms[step - 1] : null;

  const regionFill = (mask) => {
    if (currentTerm && currentTerm.masks.indexOf(mask) > -1) {
      return currentTerm.sign > 0 ? THEME.addSoft : THEME.subtractSoft;
    }
    if (mult[mask] === 1) return THEME.accentSoft;
    if (mult[mask] > 1 || mult[mask] < 0) return THEME.over;
    return THEME.neutral;
  };

  const numberInk = (mask) => {
    if (currentTerm && currentTerm.masks.indexOf(mask) > -1) {
      return currentTerm.sign > 0 ? THEME.add : THEME.subtract;
    }
    return mult[mask] === 1 ? THEME.accent : '#8794a5';
  };

  const defs = geo.sets.map((s) => {
    const c = geo.centres[s];
    return (
      '<clipPath id="in' + s + uid + '" clipPathUnits="userSpaceOnUse">' +
      '<path d="' + circlePath(c[0], c[1], geo.radius) + '"/></clipPath>' +
      '<clipPath id="out' + s + uid + '" clipPathUnits="userSpaceOnUse">' +
      '<path d="' + outsidePath(geo, c[0], c[1], geo.radius) + '" clip-rule="evenodd"/></clipPath>'
    );
  }).join('');

  const regionShapes = [];
  for (let m = 1; m < (1 << n); m++) {
    let node = '<rect x="0" y="0" width="' + geo.width + '" height="' + geo.height +
      '" fill="' + regionFill(m) + '"/>';
    for (let i = geo.sets.length - 1; i >= 0; i--) {
      const clip = ((m & (1 << i)) ? 'in' : 'out') + geo.sets[i] + uid;
      node = '<g clip-path="url(#' + clip + ')">' + node + '</g>';
    }
    regionShapes.push(node);
  }

  const outlines = geo.sets.map((s) => {
    const c = geo.centres[s];
    return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + geo.radius +
      '" fill="none" stroke="' + THEME.stroke + '" stroke-width="' + THEME.strokeWidth + '"/>';
  }).join('');

  const labels = geo.sets.map((s) => {
    const c = geo.centres[s];
    const d = geo.labelOffset[s];
    return '<text x="' + (c[0] + d[0]) + '" y="' + (c[1] + d[1]) +
      '" text-anchor="middle" font-family="' + MATH_FONT +
      '" font-size="19" font-style="italic" fill="' + THEME.labelColor + '">' + s + '</text>';
  }).join('');

  const numbers = Object.keys(regions).map(Number).sort((a, b) => a - b).map((m) => {
    const a = geo.anchors[m];
    const count = Number(regions[m]);
    return (
      '<text x="' + a[0] + '" y="' + (a[1] + 2) + '" text-anchor="middle" font-family="' + MATH_FONT +
      '" font-size="22" font-weight="600" fill="' + numberInk(m) + '">' + mult[m] + '</text>' +
      '<text x="' + a[0] + '" y="' + (a[1] + 20) + '" text-anchor="middle" font-family="' + MONO_FONT +
      '" font-size="10.5" fill="' + (count < 0 ? THEME.subtract : THEME.mutedInk) + '">' +
      (count < 0 ? '&#10005;' : count) + '</text>'
    );
  }).join('');

  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + geo.width + ' ' + geo.height +
    '" width="' + geo.width + '" height="' + geo.height +
    '" style="display:block;max-width:100%;height:auto" role="img">' +
    '<defs>' + defs + '</defs>' +
    '<rect x="0" y="0" width="' + geo.width + '" height="' + geo.height + '" fill="#ffffff"/>' +
    regionShapes.join('') + outlines + labels + numbers +
    '</svg>'
  );
}

// --- the frozen states ------------------------------------------------------
// Keys match resolveExplanationId in InclusionExclusionExplorer.jsx exactly.

const inclusionExclusionDiagrams = {

  // sizes that no collection of sets can have: the A-only region goes negative
  'impossible': frame({ n: 3, step: 0, sizes: { A: 10, B: 20, C: 18, AB: 9, AC: 7, BC: 6, ABC: 3 } }),

  // every overlap zero, so the formula collapses to a sum. The resolver reaches
  // this id at step 0, so the frame is frozen there: the region counts carry
  // the whole story, and the three overlap regions read 0.
  'disjoint': frame({ n: 3, step: 0, sizes: { A: 24, B: 20, C: 18, AB: 0, AC: 0, BC: 0, ABC: 0 } }),

  // nothing applied yet: every region reads 0
  'start': frame({ n: 3, step: 0 }),

  // the first term is in, and the overlaps are already double counted
  'adding': frame({ n: 3, step: 2 }),

  // all three sets added: ones, twos and a three in the centre
  'all-added': frame({ n: 3, step: 3 }),

  // mid-correction: a pairwise overlap being taken back out
  'subtracting': frame({ n: 3, step: 4 }),

  // all three subtractions done - the centre has fallen to zero
  'centre-emptied': frame({ n: 3, step: 6 }),

  // the triple overlap added back: every region reads exactly 1
  'complete': frame({ n: 3, step: 7 }),

  // terms exhausted but a region is still wrong, because the sizes were invalid
  'incomplete': frame({ n: 3, step: 7, sizes: { A: 10, B: 20, C: 18, AB: 9, AC: 7, BC: 6, ABC: 3 } })
};

export default inclusionExclusionDiagrams;
