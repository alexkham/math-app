// Frozen-state SVGs for the Waffle Chart tool (Line 1 anchor mesh).
//
// The component renders four 10x10 grids of HTML divs, one per region, and
// darkens round(p * 100) tiles in each. This module reproduces the grids in SVG
// at the component's own tile colours (region tint, dark tiles #1e40af).
//
// ONE UNAVOIDABLE DIFFERENCE, stated rather than hidden. The component SHUFFLES
// which tiles are dark, with Math.random(), on every render:
//
//     for (let i = tileTypes.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [tileTypes[i], tileTypes[j]] = [tileTypes[j], tileTypes[i]];
//     }
//
// so the ARRANGEMENT of dark tiles is different every time the tool is opened
// and cannot be frozen. The COUNT is fully determined, and the count is what
// carries the meaning. These stills therefore fill tiles in reading order,
// row by row, which shows the same 15 / 40 / 65 / 85 dark tiles as a block
// rather than scattered. The page says so in the unit text.
//
// The four regions open at p = 0.15, 0.40, 0.65, 0.85, all equally likely at
// 1/4 each, which makes P(dark) = (0.15 + 0.40 + 0.65 + 0.85) / 4 - the law of
// total probability over a uniform partition.

const GRID = 10;
const TOTAL = GRID * GRID;
const TILE = 16, GAP = 2, PAD = 12, LABEL_H = 26;
const DARK = '#1e40af';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---- the component's opening regions ---- */
export const AREAS = [
  { id: 1, name: 'Region A', color: '#93c5fd', probability: 0.15 },
  { id: 2, name: 'Region B', color: '#fca5a5', probability: 0.40 },
  { id: 3, name: 'Region C', color: '#86efac', probability: 0.65 },
  { id: 4, name: 'Region D', color: '#fde047', probability: 0.85 },
];

// the component's own tile count per region
export const darkCount = (p) => Math.round(p * TOTAL);

function grid(area, ox, oy) {
  const numDark = darkCount(area.probability);
  let s = '';
  s += `<text x="${ox}" y="${oy - 8}" font-size="12" font-weight="600" fill="#1e293b" ` +
    `font-family="Arial, sans-serif">${esc(area.name)} &#8212; P = ${area.probability.toFixed(2)}</text>`;
  for (let i = 0; i < TOTAL; i++) {
    const row = Math.floor(i / GRID), col = i % GRID;
    s += `<rect x="${ox + col * (TILE + GAP)}" y="${oy + row * (TILE + GAP)}" ` +
      `width="${TILE}" height="${TILE}" rx="2" ` +
      `fill="${i < numDark ? DARK : area.color}"/>`;
  }
  return s;
}

function freeze(areas, label) {
  const gw = GRID * (TILE + GAP) - GAP;
  const cols = 2;
  const W = PAD * 2 + cols * gw + (cols - 1) * 40;
  const rows = Math.ceil(areas.length / cols);
  const H = PAD * 2 + rows * (gw + LABEL_H + 18);

  let s = `<rect width="${W}" height="${H}" fill="#ffffff"/>`;
  areas.forEach((a, i) => {
    const c = i % cols, r = Math.floor(i / cols);
    s += grid(a, PAD + c * (gw + 40), PAD + LABEL_H + r * (gw + LABEL_H + 18));
  });

  return `<svg viewBox="0 0 ${W} ${H}" width="500" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${esc(label)}">` + s + `</svg>`;
}

/* ---- what the tool reports, computed its way ---- */
export function stats(areas = AREAS) {
  const counts = areas.map((a) => darkCount(a.probability));
  const totalDark = counts.reduce((a, b) => a + b, 0);
  return {
    counts,
    totalDark,
    tilesTotal: TOTAL * areas.length,
    // the component's totalProbDarkBlue
    pDark: totalDark / (TOTAL * areas.length),
    pEachRegion: 1 / areas.length,
    // the same number as a weighted average of the conditionals
    weightedAverage: areas.reduce((s, a) => s + a.probability * (1 / areas.length), 0),
  };
}

export const readings = stats();

// a second state the sliders can reach: every region at the same rate, where the
// weighted average collapses to that single value
const EQUAL = AREAS.map((a) => ({ ...a, probability: 0.5 }));
export const equalReadings = stats(EQUAL);

const waffleChartDiagrams = {
  opening: freeze(AREAS,
    'Four 10 by 10 grids at P = 0.15, 0.40, 0.65 and 0.85, with 15, 40, 65 and 85 dark tiles'),
  allEqual: freeze(EQUAL,
    'The same four grids with every region set to 0.5, giving 50 dark tiles in each'),
};

export default waffleChartDiagrams;
