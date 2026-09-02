// Frozen-state SVGs for the Pascal's Triangle tool (Line 1 anchor mesh).
// Ports general/PascalTriangle.jsx verbatim: same cell geometry (CELL_W 52,
// CELL_H 44, CELL_SP 60, ROW_H 56, TOP_Y 40), the same role palette (focus =
// solid accent with a C(n,r) caption beneath, related = amber-soft on amber,
// secondary = green-soft on green, default = surface with a dashed border),
// per-mode connectors (dashed parent lines, the hockey-stick polyline, the
// symmetry arc), the n = i row labels, the row-sum right-edge label, and the
// (a + b)^n polynomial banner. Unlike scenes #1-#10 this tool has no
// animation - the states are the four lenses plus the unfocused view.

const C = {
  bg: '#ffffff',
  surface: '#f8fafc',
  surfaceTint: '#eff6ff',
  border: '#cbd5e1',
  borderStrong: '#94a3b8',
  text: '#1e293b',
  textDim: '#64748b',
  textFaint: '#94a3b8',
  accent: '#3b82f6',
  accentDeep: '#1d4ed8',
  accentLight: '#93c5fd',
  highlight: '#f59e0b',
};
const COLOR_SYMMETRY = '#10b981';
const COLOR_SYMMETRY_SOFT = 'rgba(16,185,129,0.18)';
const COLOR_HIGHLIGHT_SOFT = 'rgba(245,158,11,0.18)';
const MONO = "'JetBrains Mono',monospace";

const SVG_W = 720, PAD = 30;
const TOP_Y = 40, ROW_H = 56, CELL_W = 52, CELL_H = 44, CELL_SP = 60;
const BANNER_GAP = 18, BANNER_H = 60;

function binomial(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}
function pow2(n) { return 1 << n; }
function sup(n) {
  const map = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
  return String(n).split('').map(d => map[+d]).join('');
}
function formatTerm(n, r, coeff) {
  const aPow = n - r, bPow = r;
  const aPart = aPow === 0 ? '' : aPow === 1 ? 'a' : 'a' + sup(aPow);
  const bPart = bPow === 0 ? '' : bPow === 1 ? 'b' : 'b' + sup(bPow);
  const letters = aPart + bPart;
  if (letters === '') return String(coeff);
  return (coeff === 1 ? '' : String(coeff)) + letters;
}
function buildPolynomial(n) {
  const terms = [];
  for (let r = 0; r <= n; r++) terms.push(formatTerm(n, r, binomial(n, r)));
  return terms.join(' + ');
}

const cellCenterX = (n, r) => SVG_W / 2 + (r - n / 2) * CELL_SP;
const cellCenterY = n => TOP_Y + n * ROW_H + CELL_H / 2;
const cellLeftX = (n, r) => cellCenterX(n, r) - CELL_W / 2;
const cellTopY = n => TOP_Y + n * ROW_H;

function computeHighlights(mode, focusN, focusR) {
  const focus = new Set(), related = new Set(), secondary = new Set();
  if (focusN === null || focusR === null) return { focus, related, secondary };
  const key = (n, r) => n + ',' + r;
  focus.add(key(focusN, focusR));
  if (mode === 'identity') {
    if (focusN >= 1) {
      if (focusR - 1 >= 0) related.add(key(focusN - 1, focusR - 1));
      if (focusR <= focusN - 1) related.add(key(focusN - 1, focusR));
    }
  } else if (mode === 'hockey') {
    if (focusR >= 1) {
      for (let i = focusR - 1; i <= focusN - 1; i++) related.add(key(i, focusR - 1));
    }
  } else if (mode === 'rowsum') {
    for (let c = 0; c <= focusN; c++) if (c !== focusR) related.add(key(focusN, c));
  } else if (mode === 'symmetry') {
    if (focusN - focusR !== focusR) secondary.add(key(focusN, focusN - focusR));
  }
  return { focus, related, secondary };
}

// mode: 'identity' | 'hockey' | 'rowsum' | 'symmetry' | null (unfocused)
function freeze(N, mode, focusN, focusR) {
  const { focus, related, secondary } = computeHighlights(mode, focusN, focusR);
  const key = (n, r) => n + ',' + r;
  const triangleBottom = TOP_Y + (N + 1) * ROW_H;
  const bannerY = triangleBottom + BANNER_GAP;
  const svgH = bannerY + BANNER_H + 16;
  const bannerRow = focusN !== null ? focusN : 0;
  const polyString = buildPolynomial(bannerRow);

  let s = '';

  // row labels (+ row-sum right-edge label in rowsum mode)
  for (let n = 0; n <= N; n++) {
    const y = cellCenterY(n);
    s += `<text x="${PAD + 6}" y="${y}" text-anchor="start" dominant-baseline="central" ` +
      `fill="${C.textFaint}" font-size="11" font-weight="600" font-family="${MONO}">n = ${n}</text>`;
    if (mode === 'rowsum' && focusN === n) {
      s += `<text x="${SVG_W - PAD - 6}" y="${y}" text-anchor="end" dominant-baseline="central" ` +
        `fill="${C.highlight}" font-size="13" font-weight="700" font-family="${MONO}">sum = ${pow2(n)} = 2${sup(n)}</text>`;
    }
  }

  // connectors (drawn under the cells)
  if (mode === 'identity' && focusN !== null && focusN >= 1) {
    const n = focusN, r = focusR;
    const tx = cellCenterX(n, r), ty = cellTopY(n);
    if (r - 1 >= 0) {
      s += `<line x1="${cellCenterX(n - 1, r - 1)}" y1="${cellTopY(n - 1) + CELL_H}" x2="${tx}" y2="${ty}" ` +
        `stroke="${C.accent}" stroke-width="2" opacity="0.5" stroke-dasharray="4 3"/>`;
    }
    if (r <= n - 1) {
      s += `<line x1="${cellCenterX(n - 1, r)}" y1="${cellTopY(n - 1) + CELL_H}" x2="${tx}" y2="${ty}" ` +
        `stroke="${C.accent}" stroke-width="2" opacity="0.5" stroke-dasharray="4 3"/>`;
    }
  }
  if (mode === 'hockey' && focusN !== null && focusR >= 1) {
    const P = focusN, Q = focusR;
    let d = '';
    let idx = 0;
    for (let i = Q - 1; i <= P - 1; i++) {
      d += (idx === 0 ? 'M' : 'L') + cellCenterX(i, Q - 1) + ' ' + cellCenterY(i) + ' ';
      idx++;
    }
    if (idx > 0) {
      d += 'L' + cellCenterX(P, Q) + ' ' + cellCenterY(P);
      s += `<path d="${d}" fill="none" stroke="${C.highlight}" stroke-width="2.5" ` +
        `stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>`;
    }
  }
  if (mode === 'symmetry' && focusN !== null && focusN - focusR !== focusR) {
    const n = focusN, r = focusR;
    const x1 = cellCenterX(n, r), y1 = cellCenterY(n);
    const x2 = cellCenterX(n, n - r), y2 = cellCenterY(n);
    s += `<path d="M${x1} ${y1} Q${(x1 + x2) / 2} ${y1 - 22} ${x2} ${y2}" fill="none" ` +
      `stroke="${COLOR_SYMMETRY}" stroke-width="2" opacity="0.5" stroke-dasharray="4 3"/>`;
  }

  // cells
  for (let n = 0; n <= N; n++) {
    for (let r = 0; r <= n; r++) {
      const k = key(n, r);
      const value = binomial(n, r);
      const x = cellLeftX(n, r), y = cellTopY(n);
      let fill, stroke, strokeWidth, textFill, dash = null;
      if (focus.has(k)) {
        fill = C.accent; stroke = C.accentDeep; strokeWidth = 2; textFill = '#ffffff';
      } else if (related.has(k)) {
        fill = COLOR_HIGHLIGHT_SOFT; stroke = C.highlight; strokeWidth = 1.8; textFill = C.text;
      } else if (secondary.has(k)) {
        fill = COLOR_SYMMETRY_SOFT; stroke = COLOR_SYMMETRY; strokeWidth = 1.8; textFill = C.text;
      } else {
        fill = C.surface; stroke = C.border; strokeWidth = 1; textFill = C.text; dash = '3 3';
      }
      s += `<rect x="${x}" y="${y}" width="${CELL_W}" height="${CELL_H}" rx="6" fill="${fill}" ` +
        `stroke="${stroke}" stroke-width="${strokeWidth}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
      s += `<text x="${x + CELL_W / 2}" y="${y + CELL_H / 2 + 1}" text-anchor="middle" dominant-baseline="central" ` +
        `fill="${textFill}" font-size="${value >= 100 ? 14 : 16}" font-weight="700" font-family="${MONO}">${value}</text>`;
      if (focus.has(k)) {
        s += `<text x="${x + CELL_W / 2}" y="${y + CELL_H + 12}" text-anchor="middle" fill="${C.accentDeep}" ` +
          `font-size="10" font-weight="600" font-family="${MONO}">C(${n}, ${r})</text>`;
      }
    }
  }

  // polynomial banner
  s += `<rect x="${PAD}" y="${bannerY}" width="${SVG_W - 2 * PAD}" height="${BANNER_H}" rx="8" ` +
    `fill="${C.surfaceTint}" stroke="${C.accentLight}" stroke-width="1.5"/>`;
  s += `<text x="${SVG_W / 2}" y="${bannerY + 18}" text-anchor="middle" fill="${C.textDim}" font-size="11" ` +
    `font-weight="600" font-family="${MONO}" letter-spacing="1">ROW ${bannerRow} = COEFFICIENTS OF (a + b)${sup(bannerRow)}</text>`;
  s += `<text x="${SVG_W / 2}" y="${bannerY + 44}" text-anchor="middle" font-size="${bannerRow >= 8 ? 12 : 14}" ` +
    `font-weight="700" font-family="${MONO}">` +
    `<tspan fill="${C.accentDeep}">(a + b)${sup(bannerRow)}</tspan>` +
    `<tspan fill="${C.textDim}"> = </tspan>` +
    `<tspan fill="${C.text}">${polyString}</tspan></text>`;

  const label = mode === null
    ? 'no cell selected'
    : `${mode} lens on C(${focusN}, ${focusR})`;
  return (
    `<svg viewBox="0 0 ${SVG_W} ${svgH}" width="460" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Pascal's triangle to row ${N}, ${label}">` +
    `<rect width="${SVG_W}" height="${svgH}" fill="#ffffff" stroke="${C.border}" stroke-width="1" rx="14"/>` +
    s +
    `</svg>`
  );
}

const pascalTriangleDiagrams = {
  // no focus: every cell dashed-neutral, banner falls back to row 0
  unfocused: freeze(6, null, null, null),
  // C(4,2) = 6 = C(3,1) + C(3,2) = 3 + 3 (the tool's own default focus)
  identity: freeze(6, 'identity', 4, 2),
  // C(5,2) = 10 = 1 + 2 + 3 + 4, the column-1 stick summing into the puck
  hockey: freeze(6, 'hockey', 5, 2),
  // row 4 highlighted end to end: 1+4+6+4+1 = 16 = 2^4 (matches the page's example)
  rowsum: freeze(6, 'rowsum', 4, 2),
  // C(7,2) = C(7,5) = 21, mirrored across the row's centre (page's example; needs N = 7)
  symmetry: freeze(7, 'symmetry', 7, 2),
};

export default pascalTriangleDiagrams;
