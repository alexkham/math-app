import React from 'react';

/* ============================================================================
 * THEMES — v2
 * Adds `pivot` as a first-class role, and an `onInk` block for variants that
 * render matrices against the ink background (filmstrip). Accent-on-ink has no
 * contrast in most themes, so onInk carries its own pivot and stroke values.
 * ==========================================================================*/
const THEMES = {
  navy: {
    paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
    line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
    pivot: '#1f4e8c', pivotText: '#ffffff',
    roles: {
      neutral: { fill: '#eef1f7', stroke: '#c6cfdf', text: '#0f1a2e' },
      rowA:    { fill: '#1f4e8c', stroke: '#1f4e8c', text: '#0b2a52' },
      colB:    { fill: '#8c3a1f', stroke: '#8c3a1f', text: '#5a2412' },
      out:     { fill: '#c98a1f', stroke: '#a06c12', text: '#5c3d05' },
      alt:     { fill: '#5a3a8c', stroke: '#4a2f75', text: '#33204f' },
    },
    onInk: { bg: '#0f1a2e', text: '#f4f6fa', dim: '#c9d4e6', pivot: '#e8b93a', pivotText: '#0f1a2e' },
  },
  terracotta: {
    paper: '#fffaf3', ink: '#2a1a14', muted: '#6b5848',
    line: '#e8d9c4', accent: '#c4543a', soft: '#fdf3e6',
    pivot: '#c4543a', pivotText: '#fffaf3',
    roles: {
      neutral: { fill: '#f7ecdd', stroke: '#dcc7ab', text: '#2a1a14' },
      rowA:    { fill: '#c4543a', stroke: '#a34029', text: '#6b2213' },
      colB:    { fill: '#3d6b7a', stroke: '#2d5261', text: '#1a3540' },
      out:     { fill: '#b8891f', stroke: '#946b12', text: '#523a05' },
      alt:     { fill: '#7a4a8c', stroke: '#5f3670', text: '#3d2049' },
    },
    onInk: { bg: '#2a1a14', text: '#fffaf3', dim: '#e0cdb8', pivot: '#e8a53a', pivotText: '#2a1a14' },
  },
  forest: {
    paper: '#f6f3ea', ink: '#1a2a1f', muted: '#5a6b5a',
    line: '#d8dcc9', accent: '#3d6b4a', soft: '#eef2e0',
    pivot: '#3d6b4a', pivotText: '#f6f3ea',
    roles: {
      neutral: { fill: '#eaeedc', stroke: '#c3cbb0', text: '#1a2a1f' },
      rowA:    { fill: '#3d6b4a', stroke: '#2c5136', text: '#152b1d' },
      colB:    { fill: '#8c5a2a', stroke: '#70441c', text: '#3d2510' },
      out:     { fill: '#b09020', stroke: '#8c7214', text: '#4d3e06' },
      alt:     { fill: '#3a5a7a', stroke: '#2a445e', text: '#152735' },
    },
    onInk: { bg: '#1a2a1f', text: '#f6f3ea', dim: '#c9d4c2', pivot: '#d8c04a', pivotText: '#1a2a1f' },
  },
  burgundy: {
    paper: '#faf4f4', ink: '#2a1418', muted: '#6b5258',
    line: '#e6d5d8', accent: '#7d2838', soft: '#f5e9ec',
    pivot: '#7d2838', pivotText: '#faf4f4',
    roles: {
      neutral: { fill: '#f2e4e6', stroke: '#d9bcc1', text: '#2a1418' },
      rowA:    { fill: '#7d2838', stroke: '#601c29', text: '#360f18' },
      colB:    { fill: '#2a5a6b', stroke: '#1e4352', text: '#10262f' },
      out:     { fill: '#a8801c', stroke: '#856310', text: '#473506' },
      alt:     { fill: '#5a3a7a', stroke: '#452b5e', text: '#261635' },
    },
    onInk: { bg: '#2a1418', text: '#faf4f4', dim: '#dcc4c8', pivot: '#dda84a', pivotText: '#2a1418' },
  },
  olive: {
    paper: '#f9f6ea', ink: '#1f1f14', muted: '#5a5a4a',
    line: '#dcd6bc', accent: '#7a7a2a', soft: '#f0ecd4',
    pivot: '#7a7a2a', pivotText: '#f9f6ea',
    roles: {
      neutral: { fill: '#efead0', stroke: '#c8c0a0', text: '#1f1f14' },
      rowA:    { fill: '#7a7a2a', stroke: '#5e5e1d', text: '#333310' },
      colB:    { fill: '#8c4a2a', stroke: '#70371d', text: '#3d1d10' },
      out:     { fill: '#a8801c', stroke: '#856310', text: '#473506' },
      alt:     { fill: '#3a5a6b', stroke: '#2a4352', text: '#15262f' },
    },
    onInk: { bg: '#1f1f14', text: '#f9f6ea', dim: '#d0cbb0', pivot: '#d6c84a', pivotText: '#1f1f14' },
  },
  ocean: {
    paper: '#f0f7f7', ink: '#0f2228', muted: '#4a6168',
    line: '#cfe0e0', accent: '#1f7a82', soft: '#e0eded',
    pivot: '#1f7a82', pivotText: '#f0f7f7',
    roles: {
      neutral: { fill: '#e2eded', stroke: '#b4cbcb', text: '#0f2228' },
      rowA:    { fill: '#1f7a82', stroke: '#155c62', text: '#0a3134' },
      colB:    { fill: '#a85a2a', stroke: '#85451d', text: '#472410' },
      out:     { fill: '#b09020', stroke: '#8c7214', text: '#4d3e06' },
      alt:     { fill: '#5a4a8c', stroke: '#453770', text: '#261e49' },
    },
    onInk: { bg: '#0f2228', text: '#f0f7f7', dim: '#bcd4d4', pivot: '#e0b83a', pivotText: '#0f2228' },
  },
  mono: {
    paper: '#ffffff', ink: '#000000', muted: '#666666',
    line: '#dddddd', accent: '#000000', soft: '#f4f4f4',
    pivot: '#000000', pivotText: '#ffffff',
    roles: {
      neutral: { fill: '#f4f4f4', stroke: '#cccccc', text: '#000000' },
      rowA:    { fill: '#000000', stroke: '#000000', text: '#000000' },
      colB:    { fill: '#777777', stroke: '#555555', text: '#222222' },
      out:     { fill: '#aaaaaa', stroke: '#888888', text: '#111111' },
      alt:     { fill: '#444444', stroke: '#333333', text: '#000000' },
    },
    onInk: { bg: '#000000', text: '#ffffff', dim: '#bbbbbb', pivot: '#ffffff', pivotText: '#000000' },
  },
  plum: {
    paper: '#f7f3f8', ink: '#1f1428', muted: '#5a4e6b',
    line: '#e0d6e4', accent: '#5a2d7a', soft: '#ede4f0',
    pivot: '#5a2d7a', pivotText: '#f7f3f8',
    roles: {
      neutral: { fill: '#eae0ee', stroke: '#c9b8d1', text: '#1f1428' },
      rowA:    { fill: '#5a2d7a', stroke: '#44205e', text: '#251134' },
      colB:    { fill: '#8c5a1f', stroke: '#704614', text: '#3d2607' },
      out:     { fill: '#a89020', stroke: '#857214', text: '#473e06' },
      alt:     { fill: '#2a6b6b', stroke: '#1d5252', text: '#0f2f2f' },
    },
    onInk: { bg: '#1f1428', text: '#f7f3f8', dim: '#cfc2d6', pivot: '#d8a84a', pivotText: '#1f1428' },
  },
  dark: {
    paper: '#1a1a22', ink: '#f0ece0', muted: '#9a958a',
    line: '#2e2e3a', accent: '#ffb84a', soft: '#22222e',
    pivot: '#ffb84a', pivotText: '#1a1a22',
    roles: {
      neutral: { fill: '#25252f', stroke: '#3a3a48', text: '#f0ece0' },
      rowA:    { fill: '#5a8fd6', stroke: '#7aa6e2', text: '#cfe0f7' },
      colB:    { fill: '#d67a5a', stroke: '#e29578', text: '#f7ddd0' },
      out:     { fill: '#ffb84a', stroke: '#ffc970', text: '#3d2a05' },
      alt:     { fill: '#a67ad6', stroke: '#bb98e2', text: '#e7d9f7' },
    },
    onInk: { bg: '#0e0e14', text: '#f0ece0', dim: '#8a857a', pivot: '#ffb84a', pivotText: '#0e0e14' },
  },
};

const ROLE_KEYS = ['neutral', 'rowA', 'colB', 'out', 'alt'];

/* ============================================================================
 * LAYOUT TOKENS
 * ==========================================================================*/
const TOKENS = {
  cell: {
    lg: { w: 54, h: 38, fs: 16, rx: 4 },
    md: { w: 46, h: 32, fs: 14, rx: 3 },
    sm: { w: 36, h: 26, fs: 12, rx: 3 },
    xs: { w: 28, h: 21, fs: 10, rx: 2 },
  },
  bracket:  { stroke: 2, hook: 7, padX: 5, overhang: 4 },
  label:    { nameFs: 11, nameGap: 9, dimFs: 10, dimGap: 8 },
  operator: { fs: 18, subFs: 10, gapX: 20 },
  scalar:   { fs: 17, gapX: 18 },
  scene:    { padX: 22, padY: 16, arcClearance: 46, capFs: 11, capGap: 14 },
  connector:{ stroke: 1.4, opacity: 0.85, dash: '4 3' },
  divider:  { stroke: 1.6, dash: '4 3' },
};

/* ============================================================================
 * SCENE BUILDERS
 * ==========================================================================*/
function buildDisplay(c) {
  return {
    matrices: [{ name: c.name || 'A', data: c.A, showDim: c.showDim, highlights: c.highlights }],
    caption: c.caption,
  };
}

function buildBinaryOp(c, symbol) {
  return {
    matrices: [
      { name: c.nameA || 'A', data: c.A, showDim: c.showDim },
      { name: c.nameB || 'B', data: c.B, showDim: c.showDim },
      { name: c.nameC || 'C', data: c.result, showDim: c.showDim },
    ],
    operators: [symbol, '='],
    caption: c.caption,
  };
}

function buildMultiplication(c) {
  const h = c.highlight;
  const matrices = [
    { name: c.nameA || 'A', data: c.A, showDim: c.showDim, highlights: [] },
    { name: c.nameB || 'B', data: c.B, showDim: c.showDim, highlights: [] },
    { name: c.nameC || 'C', data: c.result, showDim: c.showDim, highlights: [] },
  ];
  const connectors = [];

  if (h) {
    const r = h.rowOfA, k = h.colOfB;
    matrices[0].highlights.push({ target: { kind: 'row', index: r }, role: 'rowA' });
    matrices[1].highlights.push({ target: { kind: 'col', index: k }, role: 'colB' });
    matrices[2].highlights.push({ target: { kind: 'cell', row: r, col: k }, role: 'out' });
    connectors.push({ from: { matrix: 0, row: r }, to: { matrix: 2, cell: [r, k] }, role: 'rowA' });
    connectors.push({ from: { matrix: 1, col: k }, to: { matrix: 2, cell: [r, k] }, role: 'colB' });
  }

  return { matrices, operators: ['\u00D7', '='], connectors, caption: h ? h.caption : c.caption };
}

function buildTranspose(c) {
  const pairs = c.pairs || [];
  const hA = [], hB = [], connectors = [];
  const roles = ['rowA', 'colB', 'alt'];

  pairs.forEach(function (p, i) {
    const role = roles[i % roles.length];
    const r = p[0], k = p[1];
    hA.push({ target: { kind: 'cell', row: r, col: k }, role: role });
    hB.push({ target: { kind: 'cell', row: k, col: r }, role: role });
    connectors.push({ from: { matrix: 0, cell: [r, k] }, to: { matrix: 1, cell: [k, r] }, role: role });
  });

  return {
    matrices: [
      { name: c.nameA || 'A', data: c.A, showDim: true, highlights: hA },
      { name: c.nameB || 'A\u1D40', data: c.result, showDim: true, highlights: hB },
    ],
    operators: ['\u2192'],
    connectors: connectors,
    caption: c.caption,
  };
}

function buildScalar(c) {
  return {
    matrices: [
      { name: c.nameA || 'A', data: c.A },
      { name: c.nameC || 'cA', data: c.result },
    ],
    operators: ['='],
    leadingScalar: c.scalar,
    caption: c.caption,
  };
}

function buildIdentity(c) {
  const n = c.n || 3;
  const data = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(i === j ? 1 : 0);
    data.push(row);
  }
  return {
    matrices: [{
      name: c.name || 'I',
      data: data,
      dimZero: true,
      highlights: [{ target: { kind: 'diagonal', offset: 0 }, role: 'rowA' }],
    }],
    caption: c.caption,
  };
}

function buildDiagonal(c) {
  return {
    matrices: [{
      name: c.name || 'D', data: c.A, dimZero: true,
      highlights: [{ target: { kind: 'diagonal', offset: c.offset || 0 }, role: 'rowA' }],
    }],
    caption: c.caption,
  };
}

function buildTriangular(c, kind) {
  return {
    matrices: [{
      name: c.name || (kind === 'upper-triangle' ? 'U' : 'L'),
      data: c.A, dimZero: true,
      highlights: [{ target: { kind: kind, strict: c.strict }, role: 'rowA' }],
    }],
    caption: c.caption,
  };
}

function buildSymmetric(c) {
  return {
    matrices: [{
      name: c.name || 'S', data: c.A,
      highlights: [
        { target: { kind: 'diagonal', offset: 0 }, role: 'out' },
        { target: { kind: 'symmetric-pairs', pairs: c.pairs || [] }, role: 'rowA' },
      ],
    }],
    caption: c.caption,
  };
}

function buildSparse(c) {
  return {
    matrices: [{ name: c.name || 'A', data: c.A, dimZero: true, showDim: true }],
    caption: c.caption,
  };
}

function buildRowOperation(c) {
  return {
    matrices: [
      {
        name: c.nameA || 'A', data: c.A,
        pivots: c.pivotsBefore,
        highlights: (c.touchedBefore || []).map(function (i) {
          return { target: { kind: 'row', index: i }, role: 'rowA' };
        }),
      },
      {
        name: c.nameB || 'A\u2032', data: c.result,
        pivots: c.pivotsAfter,
        changed: c.changed,
        highlights: (c.touchedAfter || []).map(function (i) {
          return { target: { kind: 'row', index: i }, role: 'out' };
        }),
      },
    ],
    operators: [{ symbol: '\u2192', sublabel: c.operation }],
    caption: c.caption,
  };
}

function buildAugmented(c) {
  const rows = c.A.length;
  const data = [];
  for (let i = 0; i < rows; i++) data.push(c.A[i].concat(c.b[i]));
  return {
    matrices: [{
      name: c.name || '[A | b]', data: data, showDim: true, pivots: c.pivots,
      dividers: [{ afterCol: c.A[0].length - 1, style: 'dashed' }],
    }],
    caption: c.caption,
  };
}

function buildDeterminant(c) {
  return {
    matrices: [{ name: c.name || 'A', data: c.A, bracketStyle: 'pipes' }],
    scalarResult: { value: c.value, caption: c.detCaption },
    caption: c.caption,
  };
}

function buildTrace(c) {
  return {
    matrices: [{
      name: c.name || 'A', data: c.A,
      highlights: [{ target: { kind: 'diagonal', offset: 0 }, role: 'out' }],
    }],
    scalarResult: { value: c.value, precedingOperator: '\u21D2 tr =', caption: c.trCaption },
    caption: c.caption,
  };
}

function buildFactorization(c) {
  const names = c.names || ['A', 'L', 'U'];
  return {
    matrices: [
      { name: names[0], data: c.A },
      { name: names[1], data: c.F1, dimZero: true,
        highlights: [{ target: { kind: 'lower-triangle' }, role: 'rowA' }] },
      { name: names[2], data: c.F2, dimZero: true,
        highlights: [{ target: { kind: 'upper-triangle' }, role: 'colB' }] },
    ],
    operators: ['=', '\u00B7'],
    caption: c.caption,
  };
}

function buildInversePair(c) {
  return {
    matrices: [
      { name: c.nameA || 'A', data: c.A },
      { name: c.nameB || 'A\u207B\u00B9', data: c.inverse },
      { name: c.nameC || 'I', data: c.identity, dimZero: true,
        highlights: [{ target: { kind: 'diagonal', offset: 0 }, role: 'out' }] },
    ],
    operators: ['\u00B7', '='],
    caption: c.caption,
  };
}

function buildElementary(c) {
  return {
    matrices: [
      { name: c.nameE || 'E', data: c.E, dimZero: true,
        highlights: c.multiplierCell
          ? [{ target: { kind: 'cell', row: c.multiplierCell[0], col: c.multiplierCell[1] }, role: 'colB' }]
          : [] },
      { name: c.nameA || 'A', data: c.A, pivots: c.pivotsBefore },
      { name: c.nameB || 'A\u2032', data: c.result, pivots: c.pivotsAfter, changed: c.changed },
    ],
    operators: ['\u00B7', '='],
    caption: c.caption,
  };
}

const SCENES = {
  display: buildDisplay,
  addition: function (c) { return buildBinaryOp(c, '+'); },
  subtraction: function (c) { return buildBinaryOp(c, '\u2212'); },
  multiplication: buildMultiplication,
  scalarMultiplication: buildScalar,
  transpose: buildTranspose,
  identity: buildIdentity,
  diagonal: buildDiagonal,
  upperTriangular: function (c) { return buildTriangular(c, 'upper-triangle'); },
  lowerTriangular: function (c) { return buildTriangular(c, 'lower-triangle'); },
  symmetric: buildSymmetric,
  sparse: buildSparse,
  rowOperation: buildRowOperation,
  augmented: buildAugmented,
  determinant: buildDeterminant,
  trace: buildTrace,
  factorization: buildFactorization,
  inversePair: buildInversePair,
  elementary: buildElementary,
};

/* ============================================================================
 * GEOMETRY
 * ==========================================================================*/
function pickCellSize(requested, maxRows, maxCols) {
  if (requested && requested !== 'auto' && TOKENS.cell[requested]) return TOKENS.cell[requested];
  const dim = Math.max(maxRows, maxCols);
  if (dim <= 3) return TOKENS.cell.md;
  if (dim <= 5) return TOKENS.cell.sm;
  return TOKENS.cell.xs;
}

function layoutMatrix(m, cs) {
  const rows = m.data.length;
  const cols = m.data[0].length;
  const gridW = cols * cs.w;
  const gridH = rows * cs.h;
  const contentX = TOKENS.bracket.padX + TOKENS.bracket.stroke;
  const contentY = m.name ? TOKENS.label.nameFs + TOKENS.label.nameGap : 0;
  const dimH = m.showDim ? TOKENS.label.dimGap + TOKENS.label.dimFs : 0;
  return {
    rows: rows, cols: cols, gridW: gridW, gridH: gridH,
    contentX: contentX, contentY: contentY,
    width: gridW + 2 * contentX,
    height: contentY + gridH + TOKENS.bracket.overhang * 2 + dimH,
  };
}

function resolveAnchor(end, layouts, positions, cs) {
  const L = layouts[end.matrix];
  const P = positions[end.matrix];
  const ox = P.x + L.contentX;
  const oy = P.y + L.contentY + TOKENS.bracket.overhang;

  if (end.cell) {
    return { x: ox + end.cell[1] * cs.w + cs.w / 2, y: oy + end.cell[0] * cs.h };
  }
  if (typeof end.row === 'number') {
    return { x: ox + L.gridW, y: oy + end.row * cs.h + cs.h / 2 };
  }
  if (typeof end.col === 'number') {
    return { x: ox + end.col * cs.w + cs.w / 2, y: oy };
  }
  return { x: ox + L.gridW / 2, y: oy };
}

function arcPath(from, to) {
  const lift = Math.max(24, Math.abs(to.x - from.x) * 0.28);
  return 'M ' + from.x + ' ' + from.y +
         ' C ' + from.x + ' ' + (from.y - lift) +
         ', ' + to.x + ' ' + (to.y - lift) +
         ', ' + to.x + ' ' + to.y;
}

function isPivot(m, r, k) {
  const list = m.pivots || [];
  for (let i = 0; i < list.length; i++) {
    if (list[i][0] === r && list[i][1] === k) return true;
  }
  return false;
}

function isChanged(m, r, k) {
  const list = m.changed || [];
  for (let i = 0; i < list.length; i++) {
    if (list[i][0] === r && list[i][1] === k) return true;
  }
  return false;
}

function roleForCell(m, r, k) {
  const list = m.highlights || [];
  for (let i = 0; i < list.length; i++) {
    const h = list[i];
    const t = h.target;
    if (t.kind === 'cell' && t.row === r && t.col === k) return h.role;
    if (t.kind === 'row' && t.index === r) return h.role;
    if (t.kind === 'col' && t.index === k) return h.role;
    if (t.kind === 'diagonal' && r === k - (t.offset || 0)) return h.role;
    if (t.kind === 'upper-triangle' && (t.strict ? k > r : k >= r)) return h.role;
    if (t.kind === 'lower-triangle' && (t.strict ? k < r : k <= r)) return h.role;
    if (t.kind === 'symmetric-pairs') {
      const pairs = t.pairs || [];
      for (let p = 0; p < pairs.length; p++) {
        const a = pairs[p][0], b = pairs[p][1];
        if ((r === a && k === b) || (r === b && k === a)) return h.role;
      }
    }
  }
  return 'neutral';
}

function bracketPath(style, side, x, y1, y2, hook) {
  if (style === 'pipes') return 'M ' + x + ' ' + y1 + ' L ' + x + ' ' + y2;
  if (style === 'parens') {
    const bend = side === 'left' ? hook : -hook;
    return 'M ' + (x + bend) + ' ' + y1 +
           ' Q ' + x + ' ' + ((y1 + y2) / 2) + ', ' + (x + bend) + ' ' + y2;
  }
  const hookDir = side === 'left' ? hook : -hook;
  return 'M ' + (x + hookDir) + ' ' + y1 +
         ' L ' + x + ' ' + y1 +
         ' L ' + x + ' ' + y2 +
         ' L ' + (x + hookDir) + ' ' + y2;
}

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css =
    '.mxs-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;}' +
    '.mxs-root *,.mxs-root *::before,.mxs-root *::after{box-sizing:border-box;}' +
    '.mxs-svg{width:100%;height:auto;display:block;overflow:visible;}' +
    '.mxs-svg text{font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
    '.mxs-empty{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;' +
    'padding:16px;border:1px dashed var(--mxs-line);color:var(--mxs-muted);text-align:center;}';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    let block = '.mxs-root.mxs-t-' + key + '{' +
      '--mxs-paper:' + t.paper + ';--mxs-ink:' + t.ink + ';--mxs-muted:' + t.muted + ';' +
      '--mxs-line:' + t.line + ';--mxs-accent:' + t.accent + ';--mxs-soft:' + t.soft + ';' +
      '--mxs-pivot:' + t.pivot + ';--mxs-pivot-text:' + t.pivotText + ';' +
      '--mxs-onink-bg:' + t.onInk.bg + ';--mxs-onink-text:' + t.onInk.text + ';' +
      '--mxs-onink-dim:' + t.onInk.dim + ';--mxs-onink-pivot:' + t.onInk.pivot + ';' +
      '--mxs-onink-pivot-text:' + t.onInk.pivotText + ';';
    ROLE_KEYS.forEach(function (r) {
      block += '--mxs-' + r + '-fill:' + t.roles[r].fill + ';' +
               '--mxs-' + r + '-stroke:' + t.roles[r].stroke + ';' +
               '--mxs-' + r + '-text:' + t.roles[r].text + ';';
    });
    css += block + '}';
  });

  /* onInk surface flips ink, pivot and neutral text */
  css +=
    '.mxs-root.mxs-on-ink{--mxs-ink:var(--mxs-onink-text);' +
    '--mxs-muted:var(--mxs-onink-dim);' +
    '--mxs-pivot:var(--mxs-onink-pivot);' +
    '--mxs-pivot-text:var(--mxs-onink-pivot-text);' +
    '--mxs-neutral-fill:transparent;' +
    '--mxs-neutral-stroke:var(--mxs-onink-dim);' +
    '--mxs-neutral-text:var(--mxs-onink-text);}';

  return css;
}

const MXS_CSS = buildCss();

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   spec | scene + content
 *   theme    – nine theme keys; default navy
 *   cellSize – 'lg' | 'md' | 'sm' | 'xs' | 'auto'
 *   onInk    – boolean; render against the ink background (filmstrip variants)
 *   maxWidth
 * ==========================================================================*/
export default function MatrixScene(props) {
  const providedSpec = props.spec;
  const scene = props.scene;
  const content = props.content;
  const theme = THEMES[props.theme] ? props.theme : 'navy';
  const requestedSize = props.cellSize || 'auto';
  const onInk = !!props.onInk;
  const maxWidth = props.maxWidth;

  let spec = null;
  if (providedSpec) spec = providedSpec;
  else if (scene && SCENES[scene]) spec = SCENES[scene](content || {});

  const rootClass = 'mxs-root mxs-t-' + theme + (onInk ? ' mxs-on-ink' : '');

  if (!spec || !spec.matrices || spec.matrices.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: MXS_CSS }} />
        <div className="mxs-empty">MatrixScene: no matrices to render</div>
      </div>
    );
  }

  const matrices = spec.matrices;
  const operators = spec.operators || [];
  const connectors = spec.connectors || [];

  let maxRows = 0, maxCols = 0;
  matrices.forEach(function (m) {
    if (m.data.length > maxRows) maxRows = m.data.length;
    if (m.data[0].length > maxCols) maxCols = m.data[0].length;
  });
  const cs = pickCellSize(requestedSize, maxRows, maxCols);

  const layouts = matrices.map(function (m) { return layoutMatrix(m, cs); });
  let maxH = 0;
  layouts.forEach(function (L) { if (L.height > maxH) maxH = L.height; });

  const hasArcs = connectors.length > 0;
  const topBase = TOKENS.scene.padY + (hasArcs ? TOKENS.scene.arcClearance : 0);

  const positions = [];
  let cursor = TOKENS.scene.padX;
  if (spec.leadingScalar != null) cursor += TOKENS.scalar.gapX * 2;

  layouts.forEach(function (L, i) {
    positions.push({ x: cursor, y: topBase + (maxH - L.height) / 2 });
    cursor += L.width;
    if (i < layouts.length - 1) cursor += TOKENS.operator.gapX * 2;
  });

  let totalW = cursor + TOKENS.scene.padX;
  if (spec.scalarResult) totalW += TOKENS.scalar.gapX * 3;
  const capH = spec.caption ? TOKENS.scene.capGap + TOKENS.scene.capFs : 0;
  const totalH = topBase + maxH + TOKENS.scene.padY + capH;

  const midY = topBase + maxH / 2;
  const nodes = [];

  const markers = ROLE_KEYS.map(function (r) {
    return (
      <marker
        key={'mk-' + r}
        id={'mxs-ah-' + theme + '-' + r}
        markerWidth="9"
        markerHeight="9"
        refX="7.5"
        refY="3.2"
        orient="auto"
      >
        <path d="M0,0 L8,3.2 L0,6.4 z" fill={'var(--mxs-' + r + '-stroke)'} />
      </marker>
    );
  });
  nodes.push(<defs key="defs">{markers}</defs>);

  if (spec.leadingScalar != null) {
    nodes.push(
      <text
        key="lead"
        x={TOKENS.scene.padX + TOKENS.scalar.gapX}
        y={midY + 6}
        textAnchor="middle"
        fontSize={TOKENS.scalar.fs}
        fontWeight="700"
        fill="var(--mxs-ink)"
      >
        {spec.leadingScalar}
      </text>
    );
  }

  matrices.forEach(function (m, mi) {
    const L = layouts[mi];
    const P = positions[mi];
    const ox = P.x + L.contentX;
    const oy = P.y + L.contentY + TOKENS.bracket.overhang;

    if (m.name) {
      nodes.push(
        <text
          key={'nm-' + mi}
          x={P.x + L.width / 2}
          y={P.y + TOKENS.label.nameFs}
          textAnchor="middle"
          fontSize={TOKENS.label.nameFs}
          fontWeight="700"
          letterSpacing="1.3"
          fill="var(--mxs-muted)"
        >
          {m.name}
        </text>
      );
    }

    for (let r = 0; r < L.rows; r++) {
      for (let k = 0; k < L.cols; k++) {
        const pivot = isPivot(m, r, k);
        const changed = isChanged(m, r, k);
        const role = roleForCell(m, r, k);
        const raw = m.data[r][k];
        const zero = m.dimZero && (raw === 0 || raw === '0');
        const cx = ox + k * cs.w;
        const cy = oy + r * cs.h;

        const fill = pivot ? 'var(--mxs-pivot)' : 'var(--mxs-' + role + '-fill)';
        const stroke = pivot ? 'var(--mxs-pivot)' : 'var(--mxs-' + role + '-stroke)';
        const textFill = pivot ? 'var(--mxs-pivot-text)' : 'var(--mxs-' + role + '-text)';
        let fillOp = 1;
        if (!pivot && role !== 'neutral') fillOp = 0.28;
        if (!pivot && zero && role === 'neutral') fillOp = 0.35;

        nodes.push(
          <rect
            key={'c-' + mi + '-' + r + '-' + k}
            x={cx + 1}
            y={cy + 1}
            width={cs.w - 2}
            height={cs.h - 2}
            rx={cs.rx}
            fill={fill}
            fillOpacity={fillOp}
            stroke={stroke}
            strokeWidth="1"
          />
        );

        nodes.push(
          <text
            key={'v-' + mi + '-' + r + '-' + k}
            x={cx + cs.w / 2}
            y={cy + cs.h / 2 + cs.fs * 0.35}
            textAnchor="middle"
            fontSize={cs.fs}
            fontWeight={pivot || role !== 'neutral' ? 700 : 500}
            fillOpacity={zero && !pivot ? 0.3 : 1}
            fill={textFill}
          >
            {raw}
          </text>
        );

        if (changed) {
          nodes.push(
            <line
              key={'ch-' + mi + '-' + r + '-' + k}
              x1={cx + 5}
              y1={cy + cs.h - 3}
              x2={cx + cs.w - 5}
              y2={cy + cs.h - 3}
              stroke="var(--mxs-accent)"
              strokeWidth="2"
            />
          );
        }
      }
    }

    (m.dividers || []).forEach(function (d, di) {
      const dx = ox + (d.afterCol + 1) * cs.w;
      nodes.push(
        <line
          key={'dv-' + mi + '-' + di}
          x1={dx} y1={oy} x2={dx} y2={oy + L.gridH}
          stroke="var(--mxs-ink)"
          strokeWidth={TOKENS.divider.stroke}
          strokeDasharray={d.style === 'solid' ? undefined : TOKENS.divider.dash}
        />
      );
    });

    const style = m.bracketStyle || 'square';
    const bx1 = P.x + TOKENS.bracket.stroke / 2;
    const bx2 = P.x + L.width - TOKENS.bracket.stroke / 2;
    const by1 = oy - TOKENS.bracket.overhang;
    const by2 = oy + L.gridH + TOKENS.bracket.overhang;

    nodes.push(
      <path key={'bl-' + mi}
        d={bracketPath(style, 'left', bx1, by1, by2, TOKENS.bracket.hook)}
        stroke="var(--mxs-ink)" strokeWidth={TOKENS.bracket.stroke} fill="none" />
    );
    nodes.push(
      <path key={'br-' + mi}
        d={bracketPath(style, 'right', bx2, by1, by2, TOKENS.bracket.hook)}
        stroke="var(--mxs-ink)" strokeWidth={TOKENS.bracket.stroke} fill="none" />
    );

    if (m.showDim) {
      nodes.push(
        <text key={'dm-' + mi}
          x={P.x + L.width / 2}
          y={by2 + TOKENS.label.dimGap + TOKENS.label.dimFs - 2}
          textAnchor="middle" fontSize={TOKENS.label.dimFs} fill="var(--mxs-muted)">
          {L.rows + '\u00D7' + L.cols}
        </text>
      );
    }
  });

  operators.forEach(function (op, i) {
    if (!op) return;
    const symbol = typeof op === 'string' ? op : op.symbol;
    const sublabel = typeof op === 'string' ? null : op.sublabel;
    const gapMid = positions[i].x + layouts[i].width + TOKENS.operator.gapX;

    nodes.push(
      <text key={'op-' + i} x={gapMid} y={midY + 6} textAnchor="middle"
        fontSize={TOKENS.operator.fs} fill="var(--mxs-muted)">
        {symbol}
      </text>
    );

    if (sublabel) {
      nodes.push(
        <text key={'ops-' + i} x={gapMid} y={midY + 6 + TOKENS.operator.subFs + 6}
          textAnchor="middle" fontSize={TOKENS.operator.subFs} fontWeight="700"
          fill="var(--mxs-accent)">
          {sublabel}
        </text>
      );
    }
  });

  if (spec.scalarResult) {
    const last = positions.length - 1;
    const sx = positions[last].x + layouts[last].width + TOKENS.scalar.gapX;
    const pre = spec.scalarResult.precedingOperator || '=';

    nodes.push(
      <text key="sr" x={sx} y={midY + 6} textAnchor="start"
        fontSize={TOKENS.scalar.fs} fontWeight="700" fill="var(--mxs-ink)">
        {pre + ' ' + spec.scalarResult.value}
      </text>
    );

    if (spec.scalarResult.caption) {
      nodes.push(
        <text key="src" x={sx} y={midY + 6 + TOKENS.scene.capFs + 8} textAnchor="start"
          fontSize={TOKENS.scene.capFs} fill="var(--mxs-muted)">
          {spec.scalarResult.caption}
        </text>
      );
    }
  }

  connectors.forEach(function (conn, i) {
    const from = resolveAnchor(conn.from, layouts, positions, cs);
    const to = resolveAnchor(conn.to, layouts, positions, cs);
    const role = conn.role || 'out';
    nodes.push(
      <path key={'cn-' + i} d={arcPath(from, to)} fill="none"
        stroke={'var(--mxs-' + role + '-stroke)'}
        strokeWidth={TOKENS.connector.stroke}
        strokeOpacity={TOKENS.connector.opacity}
        strokeDasharray={conn.style === 'solid' ? undefined : TOKENS.connector.dash}
        markerEnd={'url(#mxs-ah-' + theme + '-' + role + ')'} />
    );
  });

  if (spec.caption) {
    nodes.push(
      <text key="cap" x={totalW - TOKENS.scene.padX} y={totalH - TOKENS.scene.padY + 4}
        textAnchor="end" fontSize={TOKENS.scene.capFs} fill="var(--mxs-muted)">
        {spec.caption}
      </text>
    );
  }

  return (
    <div className={rootClass} style={maxWidth ? { maxWidth: maxWidth } : undefined}>
      <style dangerouslySetInnerHTML={{ __html: MXS_CSS }} />
      <svg className="mxs-svg" viewBox={'0 0 ' + totalW + ' ' + totalH}
        xmlns="http://www.w3.org/2000/svg" role="img">
        {nodes}
      </svg>
    </div>
  );
}

export { THEMES as MXS_THEMES, ROLE_KEYS, TOKENS, SCENES };
