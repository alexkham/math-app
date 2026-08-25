// Frozen-state SVGs for the Euclidean Algorithm Visualizer (Line 1 anchor mesh).
// Ports app/components/arithmetic/visualizers/EuclideanVisualizer.jsx verbatim:
// same computeChain (larger first, divide and carry the remainder down), same
// monospace layout constants (CHAR_W 10.8, FONT 18, PAD_X 34, ROW0_Y 58,
// ROW_DY 64, SEP), same paint vocabulary - amber remainder pills #EF9F27 on
// #C98A1E with #4A3000 text, dashed-gray terminating zero pill with an italic
// "stop", dashed-amber Bezier substitution arrows with solid arrowheads, and
// the purple #7F77DD GCD box + "gcd = N" callout under the final divisor.
// Non-hover appearance only (arrows at opacity 0.9). No gradients, so no
// state-scoped ids are needed.

const C = {
  primary: '#7F77DD',
  fillRemainder: '#EF9F27',
  strokeRemainder: '#C98A1E',
  remainderText: '#4A3000',
  gray: '#9AA0A6',
};
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';
const NEUTRAL = '#1a1a1a', MUTED = '#6b6b6b';

const CHAR_W = 10.8;
const FONT = 18;
const PAD_X = 34;
const ROW0_Y = 58;
const ROW_DY = 64;
const SEP = 3 * CHAR_W;

function computeChain(aIn, bIn) {
  let a = Math.max(aIn, bIn);
  let b = Math.min(aIn, bIn);
  const rows = [];
  let guard = 0;
  while (b !== 0 && guard < 200) {
    const q = Math.floor(a / b);
    const r = a % b;
    rows.push({ dividend: a, divisor: b, quotient: q, remainder: r });
    a = b;
    b = r;
    guard += 1;
  }
  const gcd = rows.length ? rows[rows.length - 1].divisor : Math.max(aIn, bIn);
  return { rows, gcd };
}

function layoutRow(row, y) {
  const dividend = String(row.dividend);
  const divisor = String(row.divisor);
  const quotient = String(row.quotient);
  const remainder = String(row.remainder);
  let x = PAD_X;
  const dividendX = x;
  x += dividend.length * CHAR_W + SEP;
  const divisorX = x;
  const divisorW = divisor.length * CHAR_W;
  const divisorCx = x + divisorW / 2;
  x += divisorW + SEP;
  const quotientX = x;
  x += quotient.length * CHAR_W + SEP;
  const remainderX = x;
  const remainderW = remainder.length * CHAR_W;
  const remainderCx = x + remainderW / 2;
  x += remainderW;
  return {
    y, dividend, divisor, quotient, remainder,
    dividendX, divisorX, divisorW, divisorCx,
    quotientX, remainderX, remainderW, remainderCx, endX: x,
  };
}

function freeze(aIn, bIn) {
  const { rows, gcd } = computeChain(aIn, bIn);
  const laid = rows.map((r, i) => layoutRow(r, ROW0_Y + i * ROW_DY));
  const lastIdx = laid.length - 1;
  const contentW = Math.max(360, ...laid.map(l => l.endX), PAD_X) + PAD_X;
  const svgH = laid.length ? ROW0_Y + lastIdx * ROW_DY + 72 : 80;

  let s = '';

  // substitution arrows: remainder(i) -> divisor(i+1)
  laid.forEach((l, i) => {
    if (i === lastIdx) return;
    const n = laid[i + 1];
    const sx = l.remainderCx, sy = l.y + 11;
    const ex = n.divisorCx, ey = n.y - 23;
    const d = `M ${sx} ${sy} C ${sx} ${sy + 28} ${ex} ${ey - 28} ${ex} ${ey}`;
    s += `<g opacity="0.9">` +
      `<path d="${d}" fill="none" stroke="${C.strokeRemainder}" stroke-width="1.3" stroke-dasharray="3 3"/>` +
      `<polygon points="${ex},${ey} ${ex - 4},${ey - 8} ${ex + 4},${ey - 8}" fill="${C.strokeRemainder}"/>` +
      `</g>`;
  });

  // rows
  laid.forEach((l, i) => {
    const isLast = i === lastIdx;
    const zero = l.remainder === '0';
    const pillX = l.remainderX - 7;
    const pillW = l.remainderW + 14;
    const pillTop = l.y - 19;
    const pillH = 27;

    s += `<g font-family="${MONO}" font-size="${FONT}">`;
    if (isLast) {
      s += `<rect x="${l.divisorX - 7}" y="${pillTop}" width="${l.divisorW + 14}" height="${pillH}" rx="6" ` +
        `fill="${C.primary}" fill-opacity="0.12" stroke="${C.primary}" stroke-width="1.6"/>`;
    }
    s += `<rect x="${pillX}" y="${pillTop}" width="${pillW}" height="${pillH}" rx="13" ` +
      (zero
        ? `fill="none" stroke="${C.gray}" stroke-width="1.2" stroke-dasharray="4 3"/>`
        : `fill="${C.fillRemainder}" fill-opacity="0.85" stroke="${C.strokeRemainder}" stroke-width="1.2"/>`);
    s += `<text x="${l.dividendX}" y="${l.y}" fill="${NEUTRAL}">${l.dividend}</text>`;
    s += `<text x="${l.dividendX + l.dividend.length * CHAR_W}" y="${l.y}" fill="${MUTED}"> = </text>`;
    s += `<text x="${l.divisorX}" y="${l.y}" fill="${isLast ? C.primary : NEUTRAL}"` +
      (isLast ? ` font-weight="700"` : '') + `>${l.divisor}</text>`;
    s += `<text x="${l.divisorX + l.divisorW}" y="${l.y}" fill="${MUTED}"> · </text>`;
    s += `<text x="${l.quotientX}" y="${l.y}" fill="${NEUTRAL}">${l.quotient}</text>`;
    s += `<text x="${l.quotientX + l.quotient.length * CHAR_W}" y="${l.y}" fill="${MUTED}"> + </text>`;
    s += `<text x="${l.remainderX}" y="${l.y}" fill="${zero ? C.gray : C.remainderText}" font-weight="600">${l.remainder}</text>`;
    if (zero) {
      s += `<text x="${l.remainderCx}" y="${l.y + 21}" fill="${C.gray}" font-size="11" font-style="italic" text-anchor="middle">stop</text>`;
    }
    s += `</g>`;
  });

  // GCD callout below the final row
  if (lastIdx >= 0) {
    const l = laid[lastIdx];
    s += `<g font-family="${MONO}">` +
      `<line x1="${l.divisorCx}" y1="${l.y + 16}" x2="${l.divisorCx}" y2="${l.y + 32}" stroke="${C.primary}" stroke-width="1.3"/>` +
      `<text x="${l.divisorCx}" y="${l.y + 50}" fill="${C.primary}" font-size="14" font-weight="700" text-anchor="middle">gcd = ${gcd}</text>` +
      `</g>`;
  }

  return (
    `<svg viewBox="0 0 ${contentW} ${svgH}" width="420" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Euclidean algorithm chain for gcd(${Math.max(aIn, bIn)}, ${Math.min(aIn, bIn)}) = ${gcd}">` +
    `<rect x="0" y="0" width="${contentW}" height="${svgH}" rx="12" fill="#fff" stroke="#e6e6e6" stroke-width="1"/>` +
    s +
    `</svg>`
  );
}

const euclideanVisualizerDiagrams = {
  classic: freeze(252, 105),       // the launch pair: 3 rows, gcd 21
  quickFinish: freeze(462, 198),   // first remainder 66 divides 198: 2 rows
  textbook: freeze(1071, 462),     // the canonical textbook example: 3 rows, gcd 21
  shortCase: freeze(56, 84),       // swap first, then remainder 28 divides 56: gcd 28
  coprime: freeze(35, 54),         // 5 rows grinding down to gcd 1
  fibonacci: freeze(89, 144),      // consecutive Fibonacci: 10 rows, the worst case
  equal: freeze(36, 36),           // one row, gcd(36, 36) = 36
};

export default euclideanVisualizerDiagrams;
