// Frozen-state SVGs for the Coin Sample Space Explorer (Line 1 anchor mesh).
//
// As on the dice page, this page hosts two components in a
// GenericMultiComponentFrame: the toss SIMULATOR, whose charts are empirical and
// render nothing until random tosses accumulate, and this SAMPLE SPACE explorer,
// which is fully determined by its highlight condition. The frozen states come
// from the explorer.
//
// The explorer renders its outcomes as HTML cards - a row of coin discs (gold
// for H, silver for T) above an "H: x, T: y" line and "P = 1/8" - laid out in a
// CSS grid. That card is ported to SVG here with the same colours: #E3F2FD fill
// and #4A90E2 border when highlighted, white and #ddd when not.
//
// The sample space and the highlight predicate are the component's own logic for
// the conditions these stills use.

const N = 3;                        // the explorer's default numCoins
const CELL_W = 120, CELL_H = 86, GAP = 10, PAD = 12, COLS = 4;

// sampleSpace, generated exactly as the component generates it
const outcomes = [];
for (let i = 0; i < Math.pow(2, N); i++) {
  const o = [];
  for (let j = N - 1; j >= 0; j--) o.push(((i >> j) & 1) ? 'H' : 'T');
  outcomes.push(o);
}
const TOTAL = outcomes.length;      // 8

const headsIn = (o) => o.filter((c) => c === 'H').length;
const isAlternating = (o) => o.every((c, i) => i === 0 || c !== o[i - 1]);

// shouldHighlight, for the conditions these stills use
const PREDICATES = {
  none: () => false,
  majority: (o) => headsIn(o) > N - headsIn(o),
  allSame: (o) => new Set(o).size === 1,
  alternating: isAlternating,
  // with an odd number of coins this is empty - see the page prose
  equal: (o) => headsIn(o) === N - headsIn(o),
};

function coin(cx, cy, r, value) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${value === 'H' ? '#FFD700' : '#C0C0C0'}" ` +
    `stroke="#333" stroke-width="2"/>` +
    `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central" font-size="14" ` +
    `font-weight="bold" fill="#333" font-family="Arial, sans-serif">${value}</text>`;
}

function freeze(conditionKey, label) {
  const hit = PREDICATES[conditionKey];
  const rows = Math.ceil(TOTAL / COLS);
  const W = PAD * 2 + COLS * CELL_W + (COLS - 1) * GAP;
  const H = PAD * 2 + rows * CELL_H + (rows - 1) * GAP;

  let s = `<rect width="${W}" height="${H}" fill="#ffffff"/>`;
  let count = 0;

  outcomes.forEach((o, i) => {
    const col = i % COLS, row = Math.floor(i / COLS);
    const x = PAD + col * (CELL_W + GAP);
    const y = PAD + row * (CELL_H + GAP);
    const on = hit(o);
    if (on) count += 1;

    s += `<rect x="${x}" y="${y}" width="${CELL_W}" height="${CELL_H}" rx="6" ` +
      `fill="${on ? '#E3F2FD' : '#ffffff'}" stroke="${on ? '#4A90E2' : '#ddd'}" ` +
      `stroke-width="${on ? 2 : 1}"/>`;

    const d = 30, gap = 4;
    const totalW = N * d + (N - 1) * gap;
    let cx = x + (CELL_W - totalW) / 2 + d / 2;
    o.forEach((v) => { s += coin(cx, y + 24, d / 2, v); cx += d + gap; });

    const h = headsIn(o);
    s += `<text x="${x + CELL_W / 2}" y="${y + 58}" text-anchor="middle" font-size="12" ` +
      `fill="#666" font-family="Arial, sans-serif">H: ${h}, T: ${N - h}</text>`;
    s += `<text x="${x + CELL_W / 2}" y="${y + 74}" text-anchor="middle" font-size="12" ` +
      `fill="#666" font-family="Arial, sans-serif">P = 1/${TOTAL}</text>`;
  });

  return {
    svg: `<svg viewBox="0 0 ${W} ${H}" width="520" xmlns="http://www.w3.org/2000/svg" role="img" ` +
      `aria-label="${label}: ${count} of ${TOTAL} outcomes highlighted">` + s + `</svg>`,
    count,
  };
}

const built = {
  none: freeze('none', 'The full sample space for three coins'),
  majority: freeze('majority', 'Outcomes with a majority of heads'),
  allSame: freeze('allSame', 'Outcomes where all three coins match'),
  alternating: freeze('alternating', 'Alternating outcomes'),
};

export const counts = Object.fromEntries(
  Object.entries(built).map(([k, v]) => [k, { favourable: v.count, total: TOTAL, p: v.count / TOTAL }])
);

// the equal-split condition is empty for an odd number of coins; exported so the
// page can state that as a computed fact rather than an assertion
export const equalSplitCount = outcomes.filter(PREDICATES.equal).length;

export const meta = { numCoins: N, total: TOTAL };

const coinSampleSpaceDiagrams = Object.fromEntries(
  Object.entries(built).map(([k, v]) => [k, v.svg])
);

export default coinSampleSpaceDiagrams;
