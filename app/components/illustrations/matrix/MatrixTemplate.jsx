import React from 'react';

/* ============================================================================
 * MatrixTemplate
 *
 * A self-contained SVG renderer for matrix illustrations (display, addition,
 * multiplication, transpose, factorization, symmetric, triangular, etc.).
 *
 * Usage:
 *   <MatrixTemplate scene="multiplication" content={{ A, B, result }} />
 *   <MatrixTemplate spec={fullSpecObject} />
 *
 * Bracket styles: 'square' (default), 'pipes' (| |), 'parens' (( )).
 *   Set per-matrix via `bracketStyle` on the matrix data, or via spec builders.
 *
 * Theming via CSS custom properties (with built-in fallbacks):
 *   --ill-cell-bg, --ill-cell-stroke, --ill-text-primary, --ill-text-secondary,
 *   --ill-text-tertiary
 * ============================================================================ */


/* ============================================================================
 * 1. Palette
 * ========================================================================== */

const ROLE_COLORS = {
  neutral: {
    fill: 'var(--ill-cell-bg, #F5F5F0)',
    stroke: 'var(--ill-cell-stroke, #D4D4CC)',
    text: 'var(--ill-text-primary, #2A2A28)',
  },
  activeRow:    { fill: '#378ADD', stroke: '#1F6BBF', text: '#0C447C' },
  activeCol:    { fill: '#D85A30', stroke: '#993C1D', text: '#5F2812' },
  result:       { fill: '#EF9F27', stroke: '#BA7517', text: '#633806' },
  transformed:  { fill: '#1D9E75', stroke: '#0F6E56', text: '#0A4D3D' },
  alt:          { fill: '#7F77DD', stroke: '#534AB7', text: '#3C3489' },
};

const FILL_OPACITY = {
  neutral: 1,
  activeRow: 0.22,
  activeCol: 0.22,
  result: 0.4,
  transformed: 0.22,
  alt: 0.22,
};

const TEXT_COLORS = {
  primary:   'var(--ill-text-primary, #2A2A28)',
  secondary: 'var(--ill-text-secondary, #6A6A65)',
  tertiary:  'var(--ill-text-tertiary, #8A8A85)',
};


/* ============================================================================
 * 2. Style tokens
 * ========================================================================== */

const TOKENS = {
  cell: {
    md: { w: 44, h: 30, fontSize: 14, rx: 4 },
    sm: { w: 36, h: 24, fontSize: 12, rx: 3 },
    lg: { w: 56, h: 38, fontSize: 16, rx: 5 },
  },
  bracket: { stroke: 1.5, hook: 6, padX: 4 },
  label: {
    nameFontSize: 12,
    nameMarginBottom: 8,
    dimFontSize: 11,
    dimMarginTop: 8,
  },
  operator: {
    fontSize: 16,
    sublabelFontSize: 11,
    gapX: 14,
    minWidth: 18,
  },
  scalar: {
    captionFontSize: 11,
    gapX: 14,
  },
  scene: {
    paddingX: 20,
    paddingY: 16,
    captionFontSize: 12,
    connectorClearance: 30,
    captionClearance: 16,
  },
  connector: {
    stroke: 1.2,
    opacity: 0.65,
    dashArray: '3 3',
  },
  divider: {
    stroke: 1.5,
    dashArray: '4 3',
  },
};


/* ============================================================================
 * 3. Scene builders
 *
 * Each builder takes a `content` object and returns a complete spec.
 * Add new builders to the registry at the bottom of this section.
 * ========================================================================== */

function subscript(n) {
  const map = { 0:'\u2080', 1:'\u2081', 2:'\u2082', 3:'\u2083', 4:'\u2084',
                5:'\u2085', 6:'\u2086', 7:'\u2087', 8:'\u2088', 9:'\u2089' };
  return String(n).split('').map(d => map[d] ?? d).join('');
}

function sceneDisplay({ A, name = 'A', showDim = false }) {
  return {
    matrices: [{ name, data: A, showDimension: showDim }],
  };
}

function sceneAddition({ A, B, result, names = ['A', 'B', 'C'] }) {
  return {
    matrices: [
      { name: names[0], data: A },
      { name: names[1], data: B },
      { name: names[2], data: result },
    ],
    operators: ['+', '='],
    relation: 'arithmetic',
  };
}

function sceneSubtraction({ A, B, result, names = ['A', 'B', 'C'] }) {
  return {
    matrices: [
      { name: names[0], data: A },
      { name: names[1], data: B },
      { name: names[2], data: result },
    ],
    operators: ['\u2212', '='],
    relation: 'arithmetic',
  };
}

function sceneScalarMultiplication({ A, result, scalar, name = 'A' }) {
  return {
    matrices: [
      { name, data: A },
      { name: `${scalar}${name}`, data: result },
    ],
    operators: [{ symbol: '\u00D7', sublabel: String(scalar) }],
    relation: 'arithmetic',
  };
}

function sceneMultiplication({ A, B, result, highlight }) {
  const colsB = B[0]?.length ?? 0;
  const rowOfA = highlight?.rowOfA ?? 0;
  const colOfB = highlight?.colOfB ?? colsB - 1;
  const resultCell = highlight?.resultCell ?? [rowOfA, colOfB];

  return {
    matrices: [
      {
        name: 'A', data: A,
        highlights: [{ target: { kind: 'row', index: rowOfA }, color: 'activeRow' }],
      },
      {
        name: 'B', data: B,
        highlights: [{ target: { kind: 'col', index: colOfB }, color: 'activeCol' }],
      },
      {
        name: 'C', data: result,
        highlights: [{
          target: { kind: 'cell', row: resultCell[0], col: resultCell[1] },
          color: 'result',
          caption: highlight?.caption,
        }],
      },
    ],
    operators: ['\u00D7', '='],
    connectors: [
      { from: { matrix: 0, row: rowOfA }, to: { matrix: 2, cell: resultCell }, color: 'activeRow' },
      { from: { matrix: 1, col: colOfB }, to: { matrix: 2, cell: resultCell }, color: 'activeCol' },
    ],
    relation: 'arithmetic',
  };
}

function sceneTranspose({ A, transposed, highlightRow = 0 }) {
  return {
    matrices: [
      {
        name: 'A', data: A,
        highlights: [{ target: { kind: 'row', index: highlightRow }, color: 'transformed' }],
      },
      {
        name: 'A\u1D40', data: transposed,
        highlights: [{ target: { kind: 'col', index: highlightRow }, color: 'transformed' }],
      },
    ],
    operators: [{ symbol: '\u2192', sublabel: 'transpose' }],
    relation: 'transpose',
  };
}

function sceneIdentity({ n }) {
  const data = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
  return {
    matrices: [{
      name: `I${subscript(n)}`,
      data,
      highlights: [{ target: { kind: 'diagonal' }, color: 'result' }],
    }],
  };
}

function sceneDiagonal({ values, name = 'D' }) {
  const n = values.length;
  const data = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? values[i] : 0))
  );
  return {
    matrices: [{
      name, data,
      highlights: [{ target: { kind: 'diagonal' }, color: 'result' }],
    }],
  };
}

function sceneRowOperation({ before, after, opLabel, sourceRow, targetRow }) {
  const beforeHighlights = [];
  if (typeof sourceRow === 'number') {
    beforeHighlights.push({ target: { kind: 'row', index: sourceRow }, color: 'activeRow' });
  }
  if (typeof targetRow === 'number') {
    beforeHighlights.push({ target: { kind: 'row', index: targetRow }, color: 'transformed' });
  }
  const afterHighlights = [];
  if (typeof targetRow === 'number') {
    afterHighlights.push({
      target: { kind: 'row', index: targetRow },
      color: 'result',
      caption: opLabel,
    });
  }
  return {
    matrices: [
      { name: 'A', data: before, highlights: beforeHighlights },
      { name: "A'", data: after, highlights: afterHighlights },
    ],
    operators: [{ symbol: '\u2192', sublabel: 'row op' }],
  };
}

function sceneDeterminant({ A, value, equation }) {
  return {
    matrices: [{ name: 'A', data: A, bracketStyle: 'pipes' }],
    scalarResult: { value, precedingOperator: '=', caption: equation },
  };
}

function sceneInversePair({ A, inverse, n }) {
  const I = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
  return {
    matrices: [
      { name: 'A', data: A },
      { name: 'A\u207B\u00B9', data: inverse },
      {
        name: `I${subscript(n)}`,
        data: I,
        highlights: [{ target: { kind: 'diagonal' }, color: 'result' }],
      },
    ],
    operators: ['\u00B7', '='],
    relation: 'inverse-pair',
  };
}

function sceneAugmented({ A, b, name = '[A | b]' }) {
  const data = A.map((row, i) => [...row, ...(Array.isArray(b[i]) ? b[i] : [b[i]])]);
  const dividerCol = A[0].length - 1;
  return {
    matrices: [{ name, data, dividers: [{ afterCol: dividerCol }] }],
    relation: 'augmented',
  };
}

function sceneLuFactorization({ A, L, U }) {
  return {
    matrices: [
      { name: 'A', data: A },
      {
        name: 'L', data: L,
        highlights: [{ target: { kind: 'lower-triangle' }, color: 'activeRow', caption: 'unit lower-\u0394' }],
      },
      {
        name: 'U', data: U,
        highlights: [{ target: { kind: 'upper-triangle' }, color: 'activeCol', caption: 'upper-\u0394' }],
      },
    ],
    operators: ['=', '\u00B7'],
    relation: 'factorization',
  };
}

function sceneSymmetric({ S, pairs, name = 'S' }) {
  const n = S.length;
  let actualPairs = pairs;
  if (!actualPairs) {
    actualPairs = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        actualPairs.push([i, j]);
      }
    }
  }
  return {
    matrices: [{
      name, data: S,
      highlights: [{
        target: { kind: 'symmetric-pairs', pairs: actualPairs, showAxis: true },
        color: 'transformed',
      }],
    }],
    caption: 'S = S\u1D40',
  };
}

function sceneUpperTriangular({ U, strict = false, name = 'U' }) {
  return {
    matrices: [{
      name, data: U,
      highlights: [{ target: { kind: 'upper-triangle', strict }, color: 'activeRow' }],
    }],
  };
}

function sceneLowerTriangular({ L, strict = false, name = 'L' }) {
  return {
    matrices: [{
      name, data: L,
      highlights: [{ target: { kind: 'lower-triangle', strict }, color: 'activeCol' }],
    }],
  };
}

function sceneBanded({ T, bands = [-1, 0, 1], name = 'T' }) {
  const palette = ['activeRow', 'result', 'activeCol', 'transformed', 'alt'];
  const highlights = bands.map((offset, i) => ({
    target: { kind: 'diagonal', offset },
    color: palette[i % palette.length],
  }));
  return {
    matrices: [{ name, data: T, highlights }],
    caption: bands.length === 3 ? 'tridiagonal' : 'banded',
  };
}

function sceneSparse({ M, name = 'M' }) {
  return {
    matrices: [{ name, data: M, dimZero: true }],
    caption: 'most entries are zero',
  };
}

function sceneTrace({ A, value, equation }) {
  return {
    matrices: [{
      name: 'A', data: A,
      highlights: [{ target: { kind: 'diagonal' }, color: 'result' }],
    }],
    scalarResult: {
      value,
      precedingOperator: '=',
      caption: equation ?? 'tr(A)',
    },
  };
}

const SCENE_BUILDERS = {
  display: sceneDisplay,
  addition: sceneAddition,
  subtraction: sceneSubtraction,
  scalarMultiplication: sceneScalarMultiplication,
  multiplication: sceneMultiplication,
  transpose: sceneTranspose,
  identity: sceneIdentity,
  diagonal: sceneDiagonal,
  rowOperation: sceneRowOperation,
  determinant: sceneDeterminant,
  inversePair: sceneInversePair,
  augmented: sceneAugmented,
  luFactorization: sceneLuFactorization,
  symmetric: sceneSymmetric,
  upperTriangular: sceneUpperTriangular,
  lowerTriangular: sceneLowerTriangular,
  banded: sceneBanded,
  sparse: sceneSparse,
  trace: sceneTrace,
};

function buildSpec(scene, content) {
  const builder = SCENE_BUILDERS[scene];
  if (!builder) {
    throw new Error(`MatrixTemplate: unknown scene '${scene}'`);
  }
  return builder(content ?? {});
}


/* ============================================================================
 * 4. Layout helpers
 * ========================================================================== */

function pickCellSize(size, maxRows, maxCols) {
  if (size && size !== 'auto') return TOKENS.cell[size];
  const dim = Math.max(maxRows, maxCols);
  if (dim <= 4) return TOKENS.cell.md;
  return TOKENS.cell.sm;
}

function computeMatrixLayout(matrix, cellSize) {
  const rows = matrix.data.length;
  const cols = rows > 0 ? matrix.data[0].length : 0;
  const contentWidth = cols * cellSize.w;
  const contentHeight = rows * cellSize.h;
  const bracketSpace = TOKENS.bracket.hook + TOKENS.bracket.padX;
  const width = bracketSpace * 2 + contentWidth;

  const hasName = !!matrix.name;
  const showDim = !!matrix.showDimension;

  const nameSpace = hasName
    ? TOKENS.label.nameFontSize + TOKENS.label.nameMarginBottom
    : 0;
  const dimSpace = showDim
    ? TOKENS.label.dimFontSize + TOKENS.label.dimMarginTop
    : 0;

  const height = nameSpace + contentHeight + dimSpace;
  const contentX = bracketSpace;
  const contentY = nameSpace;
  const nameY = TOKENS.label.nameFontSize;
  const dimY = nameSpace + contentHeight + TOKENS.label.dimMarginTop + TOKENS.label.dimFontSize;

  return {
    matrix, rows, cols,
    contentWidth, contentHeight,
    width, height,
    contentX, contentY,
    nameY, dimY,
  };
}

function operatorWidth(op) {
  if (!op) return 0;
  const symbol = typeof op === 'string' ? op : op.symbol;
  return Math.max(TOKENS.operator.minWidth, symbol.length * 9);
}

function scalarResultWidth(scalar) {
  if (!scalar) return 0;
  const opSymbol = scalar.precedingOperator ?? '=';
  const opW = Math.max(TOKENS.operator.minWidth, opSymbol.length * 9);
  const valueStr = String(scalar.value);
  const valueW = Math.max(20, valueStr.length * 11);
  return TOKENS.operator.gapX + opW + TOKENS.operator.gapX + valueW;
}

function cellHighlightRole(highlights, r, c) {
  if (!highlights) return null;
  for (const h of highlights) {
    const t = h.target;
    if (t.kind === 'cell' && t.row === r && t.col === c) return h.color;
    if (t.kind === 'row' && t.index === r) return h.color;
    if (t.kind === 'col' && t.index === c) return h.color;
    if (t.kind === 'diagonal') {
      const off = t.offset ?? 0;
      if (c - r === off) return h.color;
    }
    if (t.kind === 'upper-triangle') {
      const strict = !!t.strict;
      if (strict ? c > r : c >= r) return h.color;
    }
    if (t.kind === 'lower-triangle') {
      const strict = !!t.strict;
      if (strict ? c < r : c <= r) return h.color;
    }
    if (t.kind === 'symmetric-pairs') {
      for (const [i, j] of t.pairs) {
        if ((r === i && c === j) || (r === j && c === i)) return h.color;
      }
    }
  }
  return null;
}

function collectCaptions(layout, cellSize) {
  const captions = [];
  const highlights = layout.matrix.highlights ?? [];
  for (const h of highlights) {
    if (!h.caption) continue;
    let centerX = layout.contentWidth / 2;
    if (h.target.kind === 'cell') {
      centerX = h.target.col * cellSize.w + cellSize.w / 2;
    } else if (h.target.kind === 'col') {
      centerX = h.target.index * cellSize.w + cellSize.w / 2;
    } else if (h.target.kind === 'row') {
      centerX = layout.contentWidth + 8;
    }
    captions.push({ text: h.caption, centerX, color: h.color });
  }
  return captions;
}

function resolveConnectorEnd(end, layouts, positions, cellSize) {
  const layout = layouts[end.matrix];
  const pos = positions[end.matrix];
  const startX = pos.x + layout.contentX;
  const startY = pos.y + layout.contentY;

  if (end.cell) {
    const [r, c] = end.cell;
    return {
      x: startX + c * cellSize.w + cellSize.w / 2,
      y: startY + r * cellSize.h,
    };
  }
  if (typeof end.row === 'number') {
    return {
      x: startX + layout.contentWidth,
      y: startY + end.row * cellSize.h + cellSize.h / 2,
    };
  }
  if (typeof end.col === 'number') {
    return {
      x: startX + end.col * cellSize.w + cellSize.w / 2,
      y: startY,
    };
  }
  return {
    x: pos.x + layout.contentX + layout.contentWidth / 2,
    y: pos.y + layout.contentY,
  };
}


/* ============================================================================
 * 5. Subcomponents
 * ========================================================================== */

function Bracket({ side, x, y, height, style }) {
  const stroke = TOKENS.bracket.stroke;
  const hook = TOKENS.bracket.hook;
  const color = TEXT_COLORS.primary;

  if (style === 'pipes') {
    return (
      <line
        x1={x} y1={y} x2={x} y2={y + height}
        stroke={color} strokeWidth={stroke} strokeLinecap="round"
      />
    );
  }
  if (style === 'parens') {
    const dir = side === 'left' ? -1 : 1;
    const cpX = x + dir * (hook + 2);
    return (
      <path
        d={`M ${x} ${y} Q ${cpX} ${y + height / 2} ${x} ${y + height}`}
        fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round"
      />
    );
  }
  // square (default) — hooks point inward, toward the cells
  const dir = side === 'left' ? 1 : -1;
  const hookX = x + dir * hook;
  return (
    <path
      d={`M ${hookX} ${y} L ${x} ${y} L ${x} ${y + height} L ${hookX} ${y + height}`}
      fill="none" stroke={color} strokeWidth={stroke}
      strokeLinecap="round" strokeLinejoin="round"
    />
  );
}

function MatrixView({ layout, x, y, cellSize }) {
  const { matrix, rows, cols, contentX, contentY, contentWidth, contentHeight, nameY, dimY } = layout;
  const bracketStyle = matrix.bracketStyle ?? 'square';
  const captions = collectCaptions(layout, cellSize);

  return (
    <g>
      {/* Name label */}
      {matrix.name && (
        <text
          x={x + contentX + contentWidth / 2}
          y={y + nameY}
          textAnchor="middle"
          fontSize={TOKENS.label.nameFontSize}
          fontWeight={500}
          fill={TEXT_COLORS.primary}
        >
          {matrix.name}
        </text>
      )}

      {/* Cells */}
      {matrix.data.map((rowArr, r) =>
        rowArr.map((value, c) => {
          const cellX = x + contentX + c * cellSize.w;
          const cellY = y + contentY + r * cellSize.h;
          const valueStr = String(value);
          const isZero = value === 0 || value === '0' || value === '';
          const dimmed = matrix.dimZero && isZero;
          const role = cellHighlightRole(matrix.highlights, r, c);
          const groupOpacity = dimmed ? 0.3 : 1;

          if (role) {
            const palette = ROLE_COLORS[role];
            const opacity = FILL_OPACITY[role];
            return (
              <g key={`cell-${r}-${c}`} opacity={groupOpacity}>
                <rect
                  x={cellX} y={cellY}
                  width={cellSize.w} height={cellSize.h}
                  rx={cellSize.rx}
                  fill={palette.fill}
                  fillOpacity={opacity}
                  stroke={palette.stroke}
                  strokeWidth={1}
                />
                <text
                  x={cellX + cellSize.w / 2}
                  y={cellY + cellSize.h / 2}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={cellSize.fontSize}
                  fontWeight={500}
                  fill={palette.text}
                >
                  {valueStr}
                </text>
              </g>
            );
          }
          const palette = ROLE_COLORS.neutral;
          return (
            <g key={`cell-${r}-${c}`} opacity={groupOpacity}>
              <rect
                x={cellX} y={cellY}
                width={cellSize.w} height={cellSize.h}
                rx={cellSize.rx}
                fill={palette.fill}
                stroke={palette.stroke}
                strokeWidth={0.5}
              />
              <text
                x={cellX + cellSize.w / 2}
                y={cellY + cellSize.h / 2}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={cellSize.fontSize}
                fontWeight={500}
                fill={palette.text}
              >
                {valueStr}
              </text>
            </g>
          );
        })
      )}

      {/* Symmetric-pairs axis hairline */}
      {matrix.highlights?.some(
        h => h.target.kind === 'symmetric-pairs' && h.target.showAxis
      ) && (
        <line
          x1={x + contentX}
          y1={y + contentY}
          x2={x + contentX + Math.min(contentWidth, contentHeight)}
          y2={y + contentY + Math.min(contentWidth, contentHeight)}
          stroke={TEXT_COLORS.tertiary}
          strokeWidth={0.7}
          strokeDasharray="2 3"
        />
      )}

      {/* Column dividers */}
      {matrix.dividers?.map((div, i) => {
        const dx = x + contentX + (div.afterCol + 1) * cellSize.w;
        const dy = y + contentY;
        const dashArray = div.style === 'dashed' ? TOKENS.divider.dashArray : undefined;
        return (
          <line
            key={`div-${i}`}
            x1={dx} y1={dy} x2={dx} y2={dy + contentHeight}
            stroke={TEXT_COLORS.primary}
            strokeWidth={TOKENS.divider.stroke}
            strokeDasharray={dashArray}
          />
        );
      })}

      {/* Brackets */}
      <Bracket
        side="left"
        x={x + contentX}
        y={y + contentY}
        height={contentHeight}
        style={bracketStyle}
      />
      <Bracket
        side="right"
        x={x + contentX + contentWidth}
        y={y + contentY}
        height={contentHeight}
        style={bracketStyle}
      />

      {/* Dimension label */}
      {matrix.showDimension && (
        <text
          x={x + contentX + contentWidth / 2}
          y={y + dimY}
          textAnchor="middle"
          fontSize={TOKENS.label.dimFontSize}
          fill={TEXT_COLORS.secondary}
        >
          {rows} &times; {cols}
        </text>
      )}

      {/* Highlight captions */}
      {captions.map((cap, i) => (
        <text
          key={`cap-${i}`}
          x={x + contentX + cap.centerX}
          y={y + contentY + contentHeight + 14}
          textAnchor="middle"
          fontSize={11}
          fill={ROLE_COLORS[cap.color].text}
        >
          {cap.text}
        </text>
      ))}
    </g>
  );
}

function OperatorView({ op, x, contentTop, contentHeight }) {
  if (!op) return null;
  const symbol = typeof op === 'string' ? op : op.symbol;
  const sublabel = typeof op === 'string' ? undefined : op.sublabel;
  const cy = contentTop + contentHeight / 2;
  return (
    <g>
      <text
        x={x} y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={TOKENS.operator.fontSize}
        fontWeight={500}
        fill={TEXT_COLORS.primary}
      >
        {symbol}
      </text>
      {sublabel && (
        <text
          x={x}
          y={cy + TOKENS.operator.fontSize}
          textAnchor="middle"
          dominantBaseline="hanging"
          fontSize={TOKENS.operator.sublabelFontSize}
          fill={TEXT_COLORS.secondary}
        >
          {sublabel}
        </text>
      )}
    </g>
  );
}

function ScalarResultView({ scalar, x, contentTop, contentHeight }) {
  const opSymbol = scalar.precedingOperator ?? '=';
  const opW = Math.max(TOKENS.operator.minWidth, opSymbol.length * 9);
  const cy = contentTop + contentHeight / 2;
  const valueX = x + opW + TOKENS.operator.gapX;
  return (
    <g>
      <text
        x={x + opW / 2} y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={TOKENS.operator.fontSize}
        fontWeight={500}
        fill={TEXT_COLORS.primary}
      >
        {opSymbol}
      </text>
      <text
        x={valueX} y={cy}
        dominantBaseline="central"
        fontSize={TOKENS.operator.fontSize}
        fontWeight={600}
        fill={TEXT_COLORS.primary}
      >
        {String(scalar.value)}
      </text>
      {scalar.caption && (
        <text
          x={valueX}
          y={cy + TOKENS.operator.fontSize}
          dominantBaseline="hanging"
          fontSize={TOKENS.scalar.captionFontSize}
          fill={TEXT_COLORS.secondary}
        >
          {scalar.caption}
        </text>
      )}
    </g>
  );
}

function ConnectorView({ conn, layouts, positions, cellSize, index }) {
  const from = resolveConnectorEnd(conn.from, layouts, positions, cellSize);
  const to = resolveConnectorEnd(conn.to, layouts, positions, cellSize);
  const role = conn.color ?? 'result';
  const palette = ROLE_COLORS[role];
  const dashed = conn.style !== 'solid';
  const lift = Math.max(20, Math.abs(to.x - from.x) * 0.25);
  const cp1y = from.y - lift;
  const cp2y = to.y - lift;
  return (
    <path
      d={`M ${from.x} ${from.y} C ${from.x} ${cp1y}, ${to.x} ${cp2y}, ${to.x} ${to.y}`}
      fill="none"
      stroke={palette.stroke}
      strokeWidth={TOKENS.connector.stroke}
      strokeOpacity={TOKENS.connector.opacity}
      strokeDasharray={dashed ? TOKENS.connector.dashArray : undefined}
      markerEnd={`url(#mt-arrow-${role}-${index})`}
    />
  );
}


/* ============================================================================
 * 6. Main component
 * ========================================================================== */

export function MatrixTemplate({ spec: providedSpec, scene, content, width: maxWidth }) {
  const spec = providedSpec ?? (scene ? buildSpec(scene, content) : null);
  if (!spec || !spec.matrices || spec.matrices.length === 0) {
    return null;
  }

  // Cell-size selection
  let maxRows = 0;
  let maxCols = 0;
  for (const m of spec.matrices) {
    maxRows = Math.max(maxRows, m.data.length);
    maxCols = Math.max(maxCols, m.data[0]?.length ?? 0);
  }
  const cellSize = pickCellSize(spec.cellSize, maxRows, maxCols);

  // Per-matrix layouts
  const layouts = spec.matrices.map(m => computeMatrixLayout(m, cellSize));

  // Vertical accounting
  const hasCaptions = spec.matrices.some(m => m.highlights?.some(h => h.caption));
  const captionSpace = hasCaptions ? TOKENS.scene.captionClearance : 0;
  const hasConnectors = (spec.connectors?.length ?? 0) > 0;
  const connectorSpace = hasConnectors ? TOKENS.scene.connectorClearance : 0;
  const maxMatrixHeight = Math.max(...layouts.map(l => l.height));

  const innerHeight = maxMatrixHeight + captionSpace;
  const sceneCaptionSpace = spec.caption ? 24 : 0;
  const sceneHeight =
    TOKENS.scene.paddingY +
    connectorSpace +
    innerHeight +
    sceneCaptionSpace +
    TOKENS.scene.paddingY;

  // Horizontal layout
  const positions = [];
  let cursorX = TOKENS.scene.paddingX;
  const matrixTopBase = TOKENS.scene.paddingY + connectorSpace;

  for (let i = 0; i < layouts.length; i++) {
    const layout = layouts[i];
    const yOffset = matrixTopBase + (innerHeight - captionSpace - layout.height) / 2;
    positions.push({ x: cursorX, y: yOffset });
    cursorX += layout.width;

    if (i < layouts.length - 1) {
      const op = spec.operators?.[i];
      cursorX += TOKENS.operator.gapX + operatorWidth(op) + TOKENS.operator.gapX;
    }
  }

  let scalarRender = null;
  if (spec.scalarResult) {
    const lastLayout = layouts[layouts.length - 1];
    const lastPos = positions[positions.length - 1];
    const sx = lastPos.x + lastLayout.width + TOKENS.operator.gapX;
    const sTop = lastPos.y + lastLayout.contentY;
    const sH = lastLayout.contentHeight;
    scalarRender = (
      <ScalarResultView
        scalar={spec.scalarResult}
        x={sx}
        contentTop={sTop}
        contentHeight={sH}
      />
    );
    cursorX += scalarResultWidth(spec.scalarResult);
  }

  cursorX += TOKENS.scene.paddingX;
  const sceneWidth = cursorX;

  // Operators
  const operatorRenders = [];
  if (spec.operators) {
    for (let i = 0; i < spec.operators.length; i++) {
      const op = spec.operators[i];
      if (!op) continue;
      const leftLayout = layouts[i];
      const leftPos = positions[i];
      const opCenterX =
        leftPos.x + leftLayout.width + TOKENS.operator.gapX + operatorWidth(op) / 2;
      const contentTop = leftPos.y + leftLayout.contentY;
      const contentHeight = leftLayout.contentHeight;
      operatorRenders.push(
        <OperatorView
          key={`op-${i}`}
          op={op}
          x={opCenterX}
          contentTop={contentTop}
          contentHeight={contentHeight}
        />
      );
    }
  }

  const connectors = spec.connectors ?? [];

  return (
    <svg
      viewBox={`0 0 ${sceneWidth} ${sceneHeight}`}
      width="100%"
      style={{ maxWidth: maxWidth ?? sceneWidth, display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <defs>
        {connectors.map((c, i) => {
          const role = c.color ?? 'result';
          return (
            <marker
              key={`mt-arrow-${role}-${i}`}
              id={`mt-arrow-${role}-${i}`}
              viewBox="0 0 10 10"
              refX="9" refY="5"
              markerWidth="6" markerHeight="6"
              orient="auto-start-reverse"
            >
              <path
                d="M2 1L8 5L2 9"
                fill="none"
                stroke={ROLE_COLORS[role].stroke}
                strokeOpacity={TOKENS.connector.opacity}
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          );
        })}
      </defs>

      {/* Matrices */}
      {layouts.map((layout, i) => (
        <MatrixView
          key={`m-${i}`}
          layout={layout}
          x={positions[i].x}
          y={positions[i].y}
          cellSize={cellSize}
        />
      ))}

      {/* Operators */}
      {operatorRenders}

      {/* Scalar result */}
      {scalarRender}

      {/* Connectors (drawn last so they sit on top) */}
      {connectors.map((conn, i) => (
        <ConnectorView
          key={`conn-${i}`}
          conn={conn}
          layouts={layouts}
          positions={positions}
          cellSize={cellSize}
          index={i}
        />
      ))}

      {/* Scene caption */}
      {spec.caption && (
        <text
          x={sceneWidth / 2}
          y={sceneHeight - TOKENS.scene.paddingY / 2}
          textAnchor="middle"
          fontSize={TOKENS.scene.captionFontSize}
          fill={TEXT_COLORS.secondary}
        >
          {spec.caption}
        </text>
      )}
    </svg>
  );
}

export default MatrixTemplate;