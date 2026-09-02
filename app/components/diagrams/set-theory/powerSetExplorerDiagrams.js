// Frozen-state diagrams for PowerSetExplorer (Line 1 on-page anchor mesh).
//
// One SVG string per explanation id the component's resolveExplanationId can
// return. The geometry, colours and label rules below replicate the component's
// own code paths - buildLevels / subsetLabel / buildLayout, DEFAULT_THEME, the
// renderEdges stroke rules and the renderNodes rects - so a frozen frame looks
// like the live tool paused in that state rather than an approximation.
//
// Consumed by the page inside getStaticProps, wrapped by demoUnitFrame, and
// rendered as a content-array item. Never interpolated into a content string.

// --- replicated helpers -----------------------------------------------------

function popcount(mask) {
  let m = mask;
  let c = 0;
  while (m) { c += m & 1; m >>= 1; }
  return c;
}

function buildLevels(n) {
  const rows = [];
  for (let k = 0; k <= n; k++) rows.push([]);
  for (let m = 0; m < (1 << n); m++) rows[popcount(m)].push(m);
  return rows;
}

const isSubsetOf = (a, b) => (a & b) === a;

function subsetLabel(mask, elements, emptySymbol) {
  const inside = elements.filter((_, i) => mask & (1 << i));
  if (!inside.length) return emptySymbol ? '∅' : '{ }';
  return '{' + inside.join(', ') + '}';
}

function buildLayout(n, elements, emptySymbol, opts) {
  const o = opts || {};
  const levels = buildLevels(n);
  const widest = levels.reduce((a, r) => Math.max(a, r.length), 1);

  let longest = 1;
  for (let m = 0; m < (1 << n); m++) {
    longest = Math.max(longest, subsetLabel(m, elements, emptySymbol).length);
  }

  const fontSize = n >= 5 ? 11 : n === 4 ? 12 : 13;
  const nodeH = n >= 5 ? 23 : 26;
  const nodeW = Math.max(o.minNodeWidth || 46, longest * fontSize * 0.58 + 18);
  const gapX = n >= 5 ? 10 : 14;
  const gapY = o.levelGap || (n >= 5 ? 62 : 76);

  const width = Math.max(o.minWidth || 520, widest * (nodeW + gapX) + 40);
  const height = n * gapY + nodeH * 2 + 34;

  const positions = {};
  levels.forEach((row, k) => {
    row.forEach((mask, i) => {
      positions[mask] = {
        x: (width * (i + 1)) / (row.length + 1),
        y: height - nodeH - 12 - k * gapY,
        level: k
      };
    });
  });

  return { levels, positions, width, height, nodeW, nodeH, fontSize };
}

// --- theme (mirrors DEFAULT_THEME in the component) -------------------------

const THEME = {
  accent: '#2f4fd8',
  accentSoft: '#eaeeff',
  up: '#0e7c66',
  upSoft: '#e3f4f0',
  node: '#ffffff',
  nodeStroke: '#c2ccd8',
  edge: '#dfe5ec',
  edgeMuted: '#eef2f6',
  mutedStroke: '#e8edf2',
  mutedInk: '#9aa5b1',
  ink: '#131720'
};

const MATH_FONT = '&quot;Cambria Math&quot;, &quot;Latin Modern Math&quot;, Georgia, &quot;Times New Roman&quot;, serif';

const COLOURS = {
  self: { fill: THEME.accent, stroke: THEME.accent, ink: '#ffffff' },
  down: { fill: THEME.accentSoft, stroke: THEME.accent, ink: THEME.accent },
  up: { fill: THEME.upSoft, stroke: THEME.up, ink: THEME.up },
  other: { fill: THEME.node, stroke: THEME.mutedStroke, ink: THEME.mutedInk },
  none: { fill: THEME.node, stroke: THEME.nodeStroke, ink: THEME.ink }
};

// XML-escape a label: element names are author-supplied, and the empty-set
// glyph must survive as a numeric entity inside an HTML string.
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/∅/g, '&#8709;');
}

const round = (v) => Math.round(v * 100) / 100;

// --- one frozen lattice -----------------------------------------------------

/**
 * @param {object} o
 * @param {string[]} o.elements   set members, in order
 * @param {number|null} o.selected  selected mask, or null for no selection
 * @param {boolean} [o.emptySymbol] draw the empty subset as the empty-set glyph
 * @param {boolean} [o.showEdgeFade] dim edges outside the two cones
 * @returns {string} SVG markup
 */
function lattice(o) {
  const elements = o.elements;
  const selected = o.selected === undefined ? null : o.selected;
  const emptySymbol = o.emptySymbol !== false;
  const showEdgeFade = o.showEdgeFade !== false;

  const n = elements.length;
  const total = 1 << n;
  const layout = buildLayout(n, elements, emptySymbol, {});

  const relation = (mask) => {
    if (selected === null) return 'none';
    if (mask === selected) return 'self';
    if (isSubsetOf(mask, selected)) return 'down';
    if (isSubsetOf(selected, mask)) return 'up';
    return 'other';
  };

  const parts = [];

  // edges, in the component's iteration order
  for (let m = 0; m < total; m++) {
    for (let i = 0; i < n; i++) {
      if (m & (1 << i)) continue;
      const upMask = m | (1 << i);
      const a = layout.positions[m];
      const b = layout.positions[upMask];
      const relLow = relation(m);
      const relHigh = relation(upMask);

      let stroke = THEME.edge;
      let width = 1;
      if (selected !== null) {
        const downPath = (relLow === 'down' || relLow === 'self') && (relHigh === 'down' || relHigh === 'self');
        const upPath = (relLow === 'up' || relLow === 'self') && (relHigh === 'up' || relHigh === 'self');
        if (downPath) { stroke = THEME.accent; width = 1.6; }
        else if (upPath) { stroke = THEME.up; width = 1.6; }
        else if (showEdgeFade) { stroke = THEME.edgeMuted; }
      }

      parts.push(
        '<line x1="' + round(a.x) + '" y1="' + round(a.y - layout.nodeH / 2) +
        '" x2="' + round(b.x) + '" y2="' + round(b.y + layout.nodeH / 2) +
        '" stroke="' + stroke + '" stroke-width="' + width + '"/>'
      );
    }
  }

  // nodes
  for (let m = 0; m < total; m++) {
    const p = layout.positions[m];
    const c = COLOURS[relation(m)];
    const label = subsetLabel(m, elements, emptySymbol);
    parts.push(
      '<rect x="' + round(p.x - layout.nodeW / 2) + '" y="' + round(p.y - layout.nodeH / 2) +
      '" width="' + round(layout.nodeW) + '" height="' + layout.nodeH +
      '" rx="6" fill="' + c.fill + '" stroke="' + c.stroke + '" stroke-width="1.2"/>' +
      '<text x="' + round(p.x) + '" y="' + round(p.y + layout.fontSize * 0.35) +
      '" text-anchor="middle" font-size="' + layout.fontSize +
      '" font-family="' + MATH_FONT + '" fill="' + c.ink + '">' + esc(label) + '</text>'
    );
  }

  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + layout.width + ' ' + layout.height +
    '" width="' + layout.width + '" height="' + layout.height +
    '" style="display:block;max-width:100%;height:auto" role="img">' +
    '<rect x="0" y="0" width="' + layout.width + '" height="' + layout.height + '" fill="#ffffff"/>' +
    parts.join('') +
    '</svg>'
  );
}

// The stage when there is nothing to draw - the component prints a single
// muted line in place of the svg, so the frozen frame shows the same thing.
function emptyStage() {
  const w = 520;
  const h = 140;
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + ' ' + h +
    '" width="' + w + '" height="' + h +
    '" style="display:block;max-width:100%;height:auto" role="img">' +
    '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="#ffffff"/>' +
    '<rect x="0.5" y="0.5" width="' + (w - 1) + '" height="' + (h - 1) +
    '" rx="8" fill="none" stroke="' + THEME.mutedStroke + '" stroke-dasharray="5 4"/>' +
    '<text x="' + w / 2 + '" y="' + (h / 2 + 4) +
    '" text-anchor="middle" font-size="13" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" fill="' +
    THEME.mutedInk + '">Nothing to draw yet.</text>' +
    '</svg>'
  );
}

// --- the frozen states ------------------------------------------------------
// Keys match resolveExplanationId in PowerSetExplorer.jsx exactly.

const powerSetExplorerDiagrams = {

  // elements box empty - no lattice exists
  'no-elements': emptyStage(),

  // "a, b, a" parses to two elements, the repeat dropped
  'duplicate': lattice({ elements: ['a', 'b'], selected: null }),

  // six elements offered, the first five drawn
  'too-many': lattice({ elements: ['a', 'b', 'c', 'd', 'e'], selected: null }),

  // the base case: one element, two subsets
  'one-element-set': lattice({ elements: ['a'], selected: null }),

  // the default view - three elements, nothing picked
  'nothing-selected': lattice({ elements: ['a', 'b', 'c'], selected: null }),

  // bottom of the lattice: no cone below, everything above
  'empty-set': lattice({ elements: ['a', 'b', 'c'], selected: 0 }),

  // top of the lattice: everything below, no cone above
  'full-set': lattice({ elements: ['a', 'b', 'c'], selected: 7 }),

  // a single element - half the lattice sits above it
  'singleton': lattice({ elements: ['a', 'b', 'c'], selected: 1 }),

  // a middling subset of a four-element set: both cones visible at once
  'general': lattice({ elements: ['a', 'b', 'c', 'd'], selected: 3 })
};

export default powerSetExplorerDiagrams;
