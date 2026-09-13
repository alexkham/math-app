// Shared frozen-scene SVG builder for the MatrixCore-based tools (Line 1 anchor mesh).
//
// The matrix wrappers (Trace, Transpose, Addition, ScalarMultiplication,
// LinearCombination, InnerProduct, Hadamard, ...) all describe a step as a
// declarative "scene": a set of matrices, a layout row, and per-cell highlight
// styles. MatrixCore renders that with HTML divs and CSS borders, which cannot
// be reused inside a static page, so this module reproduces the same geometry
// in SVG:
//
//   - cell size 'auto' resolves exactly as MatrixRenderer does
//     (maxDim <= 3 -> 58, === 4 -> 51, else 44), gap 3px between cells
//   - the same DEFAULT_HIGHLIGHTS palette, including the dashed border of
//     targetPending and the 1.06 scale-up of pairA
//   - square brackets 8px wide, 2.5px strokes, drawn on three sides
//   - the header line above each grid carries the label, a superscript T when
//     the matrix is transposed, and the displayed dimensions in grey - the same
//     single row MatrixRenderer emits
//   - cell content is the symbol with an italic i,j subscript, or a
//     cellOverrides display value. That display may be a plain string OR a
//     React element - several wrappers build their filled cells as JSX like
//     <>a<span sub>1,1</span> + b<span sub>1,1</span></> - so the element tree
//     is walked and re-emitted as tspans, with any span whose style sets
//     verticalAlign 'sub' becoming a real subscript
//
// Not reproduced: hover behaviour, overlays (arrows/braces) and the animated
// choreography - a frozen scene is a still, and any state whose meaning depends
// on an overlay should be frozen at a step where the cells alone carry it.

const HL = {
  primary: { bg: '#dbeafe', border: '#3b82f6', borderWidth: 2 },
  secondary: { bg: '#e2e8f0', border: '#475569', borderWidth: 2 },
  accent: { bg: '#dcfce7', border: '#22c55e', borderWidth: 2 },
  muted: { bg: '#f1f5f9', border: '#cbd5e1', borderWidth: 2 },
  row: { bg: '#dbeafe', border: '#3b82f6', borderWidth: 2 },
  col: { bg: '#e2e8f0', border: '#475569', borderWidth: 2 },
  target: { bg: '#dcfce7', border: '#22c55e', borderWidth: 2 },
  targetPending: { bg: 'transparent', border: '#22c55e', borderWidth: 2, dashed: true },
  pairA: { bg: '#bfdbfe', border: '#2563eb', borderWidth: 2, scale: 1.06 },
  pairB: { bg: '#cbd5e1', border: '#334155', borderWidth: 2, scale: 1.06 },
  none: { bg: '#fafafa', border: '#e5e7eb', borderWidth: 2 },
};

const GAP = 3;
const BRACKET_W = 8;
const BRACKET_GAP = 4;
const HEADER_H = 24;
const MATH = "'Cambria Math','Latin Modern Math',Georgia,serif";
const SANS = 'Arial, sans-serif';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const r2 = (n) => Math.round(n * 100) / 100;

function sizeOf(m) {
  const rows = m.transpose ? m.cols : m.rows;
  const cols = m.transpose ? m.rows : m.cols;
  const maxDim = Math.max(rows, cols);
  const cellPx = m.cellSize && m.cellSize !== 'auto'
    ? m.cellSize
    : (maxDim <= 3 ? 58 : maxDim === 4 ? 51 : 44);
  const fontPx = m.fontSize && m.fontSize !== 'auto'
    ? m.fontSize
    : (maxDim <= 3 ? 17 : maxDim === 4 ? 14 : 13);
  const gridW = cols * (cellPx + GAP) - GAP;
  const gridH = rows * (cellPx + GAP) - GAP;
  const hasHeader = m.label != null || m.showDimensions !== false;
  return { rows, cols, cellPx, fontPx, gridW, gridH, hasHeader,
    totalW: gridW + 2 * (BRACKET_W + BRACKET_GAP),
    totalH: gridH + (hasHeader ? HEADER_H : 0) };
}

function styleAt(hl, i, j) {
  if (!hl) return HL.none;
  if (hl.cells) {
    const hit = hl.cells.find(([r, c]) => r === i && c === j);
    if (hit && HL[hit[2]]) return HL[hit[2]];
  }
  if (hl.rows) {
    const hit = hl.rows.find(([r]) => r === i);
    if (hit && HL[hit[1]]) return HL[hit[1]];
  }
  if (hl.cols) {
    const hit = hl.cols.find(([c]) => c === j);
    if (hit && HL[hit[1]]) return HL[hit[1]];
  }
  if (hl.diagonal && i === j) {
    const nm = typeof hl.diagonal === 'string' ? hl.diagonal : 'primary';
    if (HL[nm]) return HL[nm];
  }
  return HL.none;
}

// Walk a React element (or string/number/array) and emit SVG tspans. Spans
// carrying verticalAlign:'sub' become subscripts; fontStyle:'normal' resets the
// italic default so operators like + read upright, exactly as on screen.
function displayToTspans(node, fontPx, italic = true) {
  if (node === null || node === undefined || node === false) return '';
  if (typeof node === 'string' || typeof node === 'number') {
    return `<tspan font-style="${italic ? 'italic' : 'normal'}">${esc(node)}</tspan>`;
  }
  if (Array.isArray(node)) return node.map((n) => displayToTspans(n, fontPx, italic)).join('');
  if (typeof node === 'object' && node.props) {
    const st = node.props.style || {};
    const kids = node.props.children;
    const isSub = st.verticalAlign === 'sub';
    const childItalic = st.fontStyle === 'normal' ? false : (st.fontStyle === 'italic' ? true : italic);
    const inner = displayToTspans(kids, fontPx, childItalic);
    if (isSub) {
      return `<tspan font-size="${r2(fontPx * 0.65)}" dy="${r2(fontPx * 0.28)}">${inner}</tspan>` +
        `<tspan dy="${r2(-fontPx * 0.28)}"></tspan>`;
    }
    return inner;
  }
  return '';
}

function cellText(m, i, j, cx, cy, fontPx) {
  const origI = m.transpose ? j : i;
  const origJ = m.transpose ? i : j;
  const ov = (m.cellOverrides || {})[`${origI},${origJ}`];
  if (ov && ov.empty) {
    return `<text x="${r2(cx)}" y="${r2(cy)}" text-anchor="middle" dominant-baseline="central" ` +
      `fill="#cbd5e1" font-size="${fontPx}" font-family="${MATH}">?</text>`;
  }
  if (ov && ov.display !== undefined) {
    const italic = ov.fontStyle === undefined ? true : ov.fontStyle !== 'normal';
    // the wrappers set a smaller font on composite cells (e.g. "a1,1 + b1,1")
    const fs = parseFloat((ov.style || {}).fontSize) || fontPx;
    const body = (typeof ov.display === 'object' && ov.display !== null)
      ? displayToTspans(ov.display, fs, italic)
      : `<tspan font-style="${italic ? 'italic' : 'normal'}">${esc(ov.display)}</tspan>`;
    return `<text x="${r2(cx)}" y="${r2(cy)}" text-anchor="middle" dominant-baseline="central" ` +
      `fill="#0f172a" font-size="${r2(fs)}" font-family="${MATH}">${body}</text>`;
  }
  const start = m.dimStartAt === undefined ? 1 : m.dimStartAt;
  const sub = `${origI + start},${origJ + start}`;
  return `<text x="${r2(cx)}" y="${r2(cy)}" text-anchor="middle" dominant-baseline="central" ` +
    `fill="#0f172a" font-size="${fontPx}" font-style="italic" font-family="${MATH}">` +
    `${esc(m.symbol || 'a')}<tspan font-size="${r2(fontPx * 0.65)}" dy="${r2(fontPx * 0.28)}">${sub}</tspan>` +
    `</text>`;
}

function bracket(x, y, h, side) {
  const w = BRACKET_W;
  const d = side === 'left'
    ? `M${r2(x + w)} ${r2(y)}H${r2(x)}V${r2(y + h)}H${r2(x + w)}`
    : `M${r2(x)} ${r2(y)}H${r2(x + w)}V${r2(y + h)}H${r2(x)}`;
  return `<path d="${d}" fill="none" stroke="#6b7280" stroke-width="2.5" stroke-linecap="square"/>`;
}

function renderMatrix(m, hl, ox, oy) {
  const s = sizeOf(m);
  let out = '';
  let y = oy;

  if (s.hasHeader) {
    // one line: label, superscript T when transposed, then the dimensions
    const parts = [];
    if (m.label != null) {
      parts.push(`<tspan font-style="italic" font-family="${MATH}" fill="#374151" font-weight="600">${esc(m.label)}</tspan>`);
      if (m.transpose) parts.push(`<tspan font-size="10" baseline-shift="super" font-style="normal">T</tspan>`);
    }
    if (m.showDimensions !== false) {
      parts.push(`<tspan font-size="12" font-style="normal" font-family="${SANS}" fill="#94a3b8"` +
        `${m.label != null ? ' dx="6"' : ''}>${s.rows}&#215;${s.cols}</tspan>`);
    }
    out += `<text x="${r2(ox + s.totalW / 2)}" y="${r2(y + 11)}" text-anchor="middle" ` +
      `dominant-baseline="central" font-size="15" font-weight="600">${parts.join('')}</text>`;
    y += HEADER_H;
  }

  const gx = ox + BRACKET_W + BRACKET_GAP;
  out += bracket(ox, y, s.gridH, 'left');
  out += bracket(ox + s.totalW - BRACKET_W, y, s.gridH, 'right');

  for (let i = 0; i < s.rows; i++) {
    for (let j = 0; j < s.cols; j++) {
      const st = styleAt(hl, i, j);
      const scale = st.scale || 1;
      const size = s.cellPx * scale;
      const cx = gx + j * (s.cellPx + GAP) + s.cellPx / 2;
      const cy = y + i * (s.cellPx + GAP) + s.cellPx / 2;
      out += `<rect x="${r2(cx - size / 2)}" y="${r2(cy - size / 2)}" width="${r2(size)}" height="${r2(size)}" ` +
        `rx="6" fill="${st.bg === 'transparent' ? 'none' : st.bg}" stroke="${st.border}" ` +
        `stroke-width="${st.borderWidth}"${st.dashed ? ' stroke-dasharray="5 4"' : ''}/>`;
      out += cellText(m, i, j, cx, cy, s.fontPx);
    }
  }

  return { svg: out, w: s.totalW, h: s.totalH };
}

/**
 * Freeze one MatrixCore scene as an SVG string.
 *
 * @param {object} o
 * @param {object} o.matrices  the scene's `matrices` map, verbatim
 * @param {Array}  o.layout    the scene's `layout` array; 'matrix' items are
 *                             drawn, 'op'/'text' items render as a centred glyph
 * @param {object} [o.highlights] the scene's `highlights` map, verbatim
 * @param {number} [o.gap]     horizontal gap between layout items
 * @param {number} [o.pad]     padding around the whole scene
 * @returns {string} standalone SVG markup
 */
export default function frozenMatrixSvg({ matrices, layout, highlights = {}, gap = 26, pad = 16 }) {
  const items = (layout || []).map((el) => {
    if (el.type === 'matrix') {
      const m = matrices[el.ref];
      const s = sizeOf(m);
      return { kind: 'matrix', el, m, w: s.totalW, h: s.totalH };
    }
    const raw = el.label || el.text || el.op || el.symbol || '';
    const label = raw === '->' ? '→' : raw === '=>' ? '⇒' : raw;
    return { kind: 'glyph', label, w: Math.max(22, String(label).length * 12), h: 40 };
  });

  const totalW = items.reduce((a, it) => a + it.w, 0) + gap * Math.max(0, items.length - 1) + pad * 2;
  const totalH = Math.max(...items.map((it) => it.h), 40) + pad * 2;

  let x = pad;
  let body = '';
  for (const it of items) {
    if (it.kind === 'matrix') {
      const oy = pad + (totalH - 2 * pad - it.h) / 2;
      body += renderMatrix(it.m, highlights[it.el.ref], x, oy).svg;
    } else {
      body += `<text x="${r2(x + it.w / 2)}" y="${r2(totalH / 2)}" text-anchor="middle" ` +
        `dominant-baseline="central" fill="#475569" font-size="20" font-family="${MATH}">` +
        `${esc(it.label)}</text>`;
    }
    x += it.w + gap;
  }

  return `<svg viewBox="0 0 ${r2(totalW)} ${r2(totalH)}" width="${Math.min(520, Math.round(totalW))}" ` +
    `xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Matrix scene">` +
    `<rect width="${r2(totalW)}" height="${r2(totalH)}" fill="#ffffff"/>` +
    body +
    `</svg>`;
}
