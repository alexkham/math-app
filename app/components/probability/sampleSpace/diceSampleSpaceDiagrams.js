// Frozen-state SVGs for the Dice Sample Space Explorer (Line 1 anchor mesh).
//
// The page hosts two components in a GenericMultiComponentFrame: the roll
// SIMULATOR and this SAMPLE SPACE explorer. The simulator's two charts are both
// empirical - they render nothing until random rolls have accumulated - so
// there is no deterministic state of it to freeze. The sample space explorer,
// by contrast, is fully determined by its highlight condition, so these stills
// come from it.
//
// The explorer lays its outcomes out as HTML cards (two pip faces plus a sum
// caption) in a CSS grid, which cannot be reused inside a page, so the card is
// ported to SVG here: same #E3F2FD fill and #4A90E2 border when highlighted,
// same white/#ddd when not, same "Sum: n" caption.
//
// The highlight predicate is the component's own shouldHighlight logic for the
// conditions used below, applied to the same generated sample space.

const SIDES = 6;
const N = 2;                       // the explorer's default numDice
const CELL_W = 120, CELL_H = 86, GAP = 10, PAD = 12;
const COLS = 6;

const outcomes = [];
for (let a = 1; a <= SIDES; a++) for (let b = 1; b <= SIDES; b++) outcomes.push([a, b]);
const TOTAL = outcomes.length;     // 36

// shouldHighlight, for the conditions these stills use
const PREDICATES = {
  none: () => false,
  sum7: (o) => o[0] + o[1] === 7,
  doubles: (o) => new Set(o).size < o.length,
  even: (o) => (o[0] + o[1]) % 2 === 0,
};

// pip layout, matching a standard die face
const PIPS = {
  1: [[0.5, 0.5]],
  2: [[0.28, 0.28], [0.72, 0.72]],
  3: [[0.28, 0.28], [0.5, 0.5], [0.72, 0.72]],
  4: [[0.28, 0.28], [0.72, 0.28], [0.28, 0.72], [0.72, 0.72]],
  5: [[0.28, 0.28], [0.72, 0.28], [0.5, 0.5], [0.28, 0.72], [0.72, 0.72]],
  6: [[0.28, 0.25], [0.72, 0.25], [0.28, 0.5], [0.72, 0.5], [0.28, 0.75], [0.72, 0.75]],
};

function die(x, y, size, value) {
  let s = `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="5" fill="#ffffff" ` +
    `stroke="#334155" stroke-width="1.5"/>`;
  for (const [px, py] of PIPS[value]) {
    s += `<circle cx="${x + px * size}" cy="${y + py * size}" r="${size * 0.09}" fill="#1e293b"/>`;
  }
  return s;
}

function freeze(conditionKey, label) {
  const hit = PREDICATES[conditionKey];
  const rows = Math.ceil(outcomes.length / COLS);
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

    const dieSize = 30;
    const totalDiceW = N * dieSize + (N - 1) * 6;
    let dx = x + (CELL_W - totalDiceW) / 2;
    o.forEach((v) => { s += die(dx, y + 10, dieSize, v); dx += dieSize + 6; });

    s += `<text x="${x + CELL_W / 2}" y="${y + 58}" text-anchor="middle" font-size="12" ` +
      `fill="#666" font-family="Arial, sans-serif">Sum: ${o[0] + o[1]}</text>`;
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
  none: freeze('none', 'The full sample space for two dice'),
  sum7: freeze('sum7', 'Outcomes whose sum is 7'),
  doubles: freeze('doubles', 'Outcomes that are doubles'),
  even: freeze('even', 'Outcomes with an even sum'),
};

// counts the tool would report, so the page prose quotes them rather than a
// re-derivation
export const counts = Object.fromEntries(
  Object.entries(built).map(([k, v]) => [k, { favourable: v.count, total: TOTAL, p: v.count / TOTAL }])
);

export const meta = { numDice: N, sides: SIDES, total: TOTAL };

const diceSampleSpaceDiagrams = Object.fromEntries(
  Object.entries(built).map(([k, v]) => [k, v.svg])
);

export default diceSampleSpaceDiagrams;
