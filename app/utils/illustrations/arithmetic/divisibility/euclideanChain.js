// utils/illustrations/arithmetic/divisibility/euclidean-chain/renderer.js
//
// String-based SVG renderer for the "euclidean-chain" illustration component.
// v1.
//
// Scene type: 'chain'
//   spec.a, spec.b — positive integers (auto-swapped if a < b)
//   spec.info     — info panel { lines: [...] }
//   spec.title    — optional override for the diagram title
//   spec.style    — optional palette overrides (merges over defaults in `C`)
//
// Layout:
//   Title at top. Vertical stack of equation rows of the form
//     dividend = divisor · quotient + remainder
//   with the remainder boxed (amber pill for nonzero, dashed-gray for the
//   final 0). A dashed-amber arrow connects each row's remainder to the
//   next row's divisor. The final row's divisor is boxed in primary as the
//   GCD, with a "gcd = N" callout underneath.

// ---------- Default palette ----------
//
// Every key is overridable via spec.style. The spec author can pass any
// subset; un-passed keys fall through to these defaults.
const C = {
  // Surface roles (overridable per spec)
  background:   'transparent',
  border:       '#888780',
  fill:         '#EF9F27',   // remainder pill fill (live remainders)
  stroke:       '#BA7517',   // remainder pill + arrow stroke
  text:         '#5F5E5A',   // main equation text
  textMuted:    '#888780',   // quotient text, note text

  // Role colors
  primary:      '#6B62CE',   // title, GCD box, GCD callout
  secondary:    '#4FA8A4',
  result:       '#EF9F27',
  resultStroke: '#BA7517',
  negation:     '#E24B4A',
  neutral:      '#888780',   // zero-remainder pill, separator
};

// ---------- Layout constants ----------
const VIEWBOX_W       = 680;
const TITLE_Y         = 28;
const ROW0_Y          = 80;
const ROW_DY          = 60;
const DIVIDEND_X      = 70;   // right edge (text-anchor=end)
const EQ_X            = 82;
const DIVISOR_RIGHT_X = 140;  // right edge of divisor column
const QUOT_X          = 148;
const PLUS_X          = 200;
const REM_X           = 220;  // left edge of remainder pill
const REM_W           = 42;
const REM_H           = 26;
const INFO_X          = 450;

// ---------- Math helpers ----------
function computeChain(a, b) {
  const rows = [];
  while (b !== 0) {
    const q = Math.floor(a / b);
    const r = a - q * b;
    rows.push({ a, b, q, r });
    [a, b] = [b, r];
  }
  return rows;
}

function digitWidth(n) {
  // approximate text width + padding for a number at font-size 16
  return String(n).length * 10 + 6;
}

// ---------- SVG fragment builders ----------
function resolveRole(role, palette) {
  switch (role) {
    case 'primary':   return palette.primary;
    case 'secondary': return palette.secondary;
    case 'result':    return palette.resultStroke;
    case 'negation':  return palette.negation;
    default:          return palette.text;
  }
}

function infoPanel(lines, yStart, palette) {
  const x = INFO_X;
  let y = yStart;
  const parts = [];
  (lines || []).forEach((line) => {
    if (line.kind === 'formula') {
      parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="15" font-weight="600" fill="${resolveRole(line.role, palette)}">${line.text}</text>`);
      y += 22;
    } else if (line.kind === 'separator') {
      parts.push(`<line x1="${x}" y1="${y - 10}" x2="${x + 200}" y2="${y - 10}" stroke="${palette.neutral}" stroke-width="0.5" stroke-opacity="0.4"/>`);
      y += 4;
    } else if (line.kind === 'note') {
      const style = line.italic ? ' font-style="italic"' : '';
      parts.push(`<text x="${x}" y="${y}" font-family="sans-serif" font-size="11" fill="${palette.textMuted}"${style}>${line.text}</text>`);
      y += 16;
    }
  });
  return `<g>${parts.join('')}</g>`;
}

// ---------- Scene renderer ----------
function renderChain(spec) {
  const palette = { ...C, ...(spec.style || {}) };
  let { a, b } = spec;
  const { info, title } = spec;

  if (!a || !b || a < 0 || b < 0) return '';
  if (a < b) [a, b] = [b, a];

  const rows = computeChain(a, b);
  if (rows.length === 0) return '';

  const gcdValue = rows[rows.length - 1].b;
  const height = ROW0_Y + (rows.length - 1) * ROW_DY + 70;

  const parts = [];

  // Title
  const titleText = title || `Euclidean algorithm \u2014 gcd(${a}, ${b})`;
  parts.push(`<text x="30" y="${TITLE_Y}" font-family="sans-serif" font-size="13" font-weight="600" fill="${palette.primary}">${titleText}</text>`);

  // Equation rows
  rows.forEach((row, i) => {
    const y = ROW0_Y + i * ROW_DY;
    const isLast = i === rows.length - 1;

    // Dividend (right-aligned)
    parts.push(`<text x="${DIVIDEND_X}" y="${y}" font-family="sans-serif" font-size="16" fill="${palette.text}" text-anchor="end">${row.a}</text>`);
    // =
    parts.push(`<text x="${EQ_X}" y="${y}" font-family="sans-serif" font-size="16" fill="${palette.text}">=</text>`);

    // Divisor — boxed in primary if this is the final row (it's the GCD)
    if (isLast) {
      const bw = digitWidth(row.b);
      const bx = DIVISOR_RIGHT_X - bw;
      const cx = bx + bw / 2;
      parts.push(`<rect x="${bx}" y="${y - 18}" width="${bw}" height="${REM_H}" rx="5" fill="${palette.primary}" fill-opacity="0.15" stroke="${palette.primary}" stroke-width="1.8"/>`);
      parts.push(`<text x="${cx}" y="${y}" font-family="sans-serif" font-size="16" font-weight="700" fill="${palette.primary}" text-anchor="middle">${row.b}</text>`);
    } else {
      parts.push(`<text x="${DIVISOR_RIGHT_X}" y="${y}" font-family="sans-serif" font-size="16" fill="${palette.text}" text-anchor="end">${row.b}</text>`);
    }

    // · quotient
    parts.push(`<text x="${QUOT_X}" y="${y}" font-family="sans-serif" font-size="14" fill="${palette.textMuted}">\u00B7 ${row.q}</text>`);
    // +
    parts.push(`<text x="${PLUS_X}" y="${y}" font-family="sans-serif" font-size="16" fill="${palette.text}">+</text>`);

    // Remainder pill
    if (row.r === 0) {
      // Terminator: dashed gray pill + "stop" label
      parts.push(`<rect x="${REM_X}" y="${y - 18}" width="${REM_W}" height="${REM_H}" rx="6" fill="${palette.neutral}" fill-opacity="0.08" stroke="${palette.neutral}" stroke-width="1.2" stroke-dasharray="3 3"/>`);
      parts.push(`<text x="${REM_X + REM_W / 2}" y="${y}" font-family="sans-serif" font-size="14" fill="${palette.textMuted}" text-anchor="middle">0</text>`);
      parts.push(`<text x="${REM_X + REM_W / 2}" y="${y + 27}" font-family="sans-serif" font-size="9" fill="${palette.textMuted}" text-anchor="middle" font-style="italic">stop</text>`);
    } else {
      // Live remainder: amber pill
      parts.push(`<rect x="${REM_X}" y="${y - 18}" width="${REM_W}" height="${REM_H}" rx="6" fill="${palette.fill}" fill-opacity="0.4" stroke="${palette.stroke}" stroke-width="1.4"/>`);
      parts.push(`<text x="${REM_X + REM_W / 2}" y="${y}" font-family="sans-serif" font-size="14" font-weight="600" fill="${palette.text}" text-anchor="middle">${row.r}</text>`);
    }

    // Substitution arrow: this row's remainder \u2192 next row's divisor
    if (!isLast) {
      const startX = REM_X + REM_W;
      const startY = y - 5;
      const endX   = DIVISOR_RIGHT_X;
      const endY   = ROW0_Y + (i + 1) * ROW_DY;
      const ctrlX  = startX + 54;
      parts.push(`<path d="M ${startX} ${startY} C ${ctrlX} ${startY} ${ctrlX} ${endY} ${endX} ${endY}" fill="none" stroke="${palette.stroke}" stroke-width="1.2" stroke-dasharray="3 3"/>`);
      // Arrowhead — apex at (endX, endY), base 8px to the right
      parts.push(`<polygon points="${endX},${endY} ${endX + 8},${endY - 4} ${endX + 8},${endY + 4}" fill="${palette.stroke}"/>`);
    }
  });

  // GCD callout below the final row
  const lastRowY  = ROW0_Y + (rows.length - 1) * ROW_DY;
  const bw        = digitWidth(gcdValue);
  const calloutCx = DIVISOR_RIGHT_X - bw / 2;
  parts.push(`<line x1="${calloutCx}" y1="${lastRowY + 18}" x2="${calloutCx}" y2="${lastRowY + 34}" stroke="${palette.primary}" stroke-width="1.2"/>`);
  parts.push(`<text x="${calloutCx}" y="${lastRowY + 52}" font-family="sans-serif" font-size="13" font-weight="600" fill="${palette.primary}" text-anchor="middle">gcd = ${gcdValue}</text>`);

  // Info panel
  parts.push(infoPanel(info?.lines, TITLE_Y, palette));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${VIEWBOX_W} ${height}" role="img"><title>Euclidean algorithm chain</title>${parts.join('')}</svg>`;
}

// ---------- Public API ----------
export function renderEuclideanChain(spec) {
  if (!spec) return '';
  if (spec.kind === 'chain') return renderChain(spec);
  return '';
}