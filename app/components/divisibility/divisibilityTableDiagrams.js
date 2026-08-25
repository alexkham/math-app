// Frozen-state SVGs for the Divisibility Table tool (Line 1 anchor mesh).
// Replicates the live component's rendering in app/components/divisibility/divisibility-table.jsx:
// same 0-100 grid in 17 columns, same highlight predicate (selected.some(d => num % d === 0),
// so 0 highlights under every selection), same color vocabulary (default cell #f8fafc/#64748b,
// highlighted cell #dbeafe->#bfdbfe with #93c5fd border and #1e40af text, active divisor button
// #3b82f6->#2563eb gradient, clear button #fee2e2/#dc2626), same card-on-gradient page chrome.
// Gradient/clip ids are state-scoped - several of these SVGs share one page.

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif";

const W = 700;
const CELL = 34;
const GAP = 4;
const COLS = 17;
const GRID_W = COLS * CELL + (COLS - 1) * GAP;      // 642
const CARD_W = GRID_W + 32;                          // 674, 16px card padding
const CARD_X = (W - CARD_W) / 2;                     // 13

const BTN_W = 44, BTN_H = 30, BTN_GAP = 6;
const CLEAR_W = 34;

const SELECTOR_Y = 10, SELECTOR_H = BTN_H + 16;      // 46
const GRID_CARD_Y = SELECTOR_Y + SELECTOR_H + 16;    // 72
const ROWS = Math.ceil(101 / COLS);                  // 6
const GRID_H = ROWS * CELL + (ROWS - 1) * GAP;       // 224
const GRID_CARD_H = GRID_H + 32;                     // 256
const H = GRID_CARD_Y + GRID_CARD_H + 10;            // 338

function freeze(key, selected) {
  const isHighlighted = (num) => selected.some(d => num % d === 0);

  const defs =
    `<defs>` +
    `<linearGradient id="dt-${key}-bg" x1="0" y1="0" x2="0" y2="1">` +
    `<stop offset="0" stop-color="#f0f7ff"/><stop offset="1" stop-color="#e8f4fc"/>` +
    `</linearGradient>` +
    `<linearGradient id="dt-${key}-act" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#2563eb"/>` +
    `</linearGradient>` +
    `<linearGradient id="dt-${key}-hl" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="#dbeafe"/><stop offset="1" stop-color="#bfdbfe"/>` +
    `</linearGradient>` +
    `</defs>`;

  // Divisor selector card: 12 buttons plus the clear button (visible because a selection exists)
  const rowW = 12 * BTN_W + 11 * BTN_GAP + 8 + CLEAR_W;   // 636
  let bx = CARD_X + (CARD_W - rowW) / 2;
  const by = SELECTOR_Y + 8;
  let buttons = '';
  for (let d = 1; d <= 12; d++) {
    const active = selected.includes(d);
    buttons +=
      `<rect x="${bx}" y="${by}" width="${BTN_W}" height="${BTN_H}" rx="8" ` +
      (active
        ? `fill="url(#dt-${key}-act)" stroke="#3b82f6" stroke-width="2"/>`
        : `fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>`) +
      `<text x="${bx + BTN_W / 2}" y="${by + BTN_H / 2 + 4.5}" font-family="${FONT}" font-size="13" ` +
      `font-weight="600" fill="${active ? '#fff' : '#64748b'}" text-anchor="middle">÷${d}</text>`;
    bx += BTN_W + BTN_GAP;
  }
  bx += 8 - BTN_GAP;
  buttons +=
    `<rect x="${bx}" y="${by}" width="${CLEAR_W}" height="${BTN_H}" rx="8" fill="#fee2e2" stroke="#fecaca" stroke-width="2"/>` +
    `<text x="${bx + CLEAR_W / 2}" y="${by + BTN_H / 2 + 4.5}" font-family="${FONT}" font-size="13" ` +
    `font-weight="600" fill="#dc2626" text-anchor="middle">✕</text>`;

  // Number grid: 0-100 in 17 columns
  let cells = '';
  const gx = CARD_X + 16, gy = GRID_CARD_Y + 16;
  for (let num = 0; num <= 100; num++) {
    const col = num % COLS, row = Math.floor(num / COLS);
    const x = gx + col * (CELL + GAP), y = gy + row * (CELL + GAP);
    const hl = isHighlighted(num);
    cells +=
      `<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" rx="6" ` +
      (hl
        ? `fill="url(#dt-${key}-hl)" stroke="#93c5fd" stroke-width="1"/>`
        : `fill="#f8fafc"/>`) +
      `<text x="${x + CELL / 2}" y="${y + CELL / 2 + 4}" font-family="${FONT}" font-size="12" ` +
      `font-weight="${hl ? 600 : 500}" fill="${hl ? '#1e40af' : '#64748b'}" text-anchor="middle">${num}</text>`;
  }

  return (
    `<svg viewBox="0 0 ${W} ${H}" width="560" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Divisibility table frozen with ${selected.map(d => '÷' + d).join(' and ')} selected">` +
    defs +
    `<rect x="0" y="0" width="${W}" height="${H}" fill="url(#dt-${key}-bg)"/>` +
    `<rect x="${CARD_X}" y="${SELECTOR_Y}" width="${CARD_W}" height="${SELECTOR_H}" rx="12" fill="#fff" stroke="#e2e8f0" stroke-width="1"/>` +
    buttons +
    `<rect x="${CARD_X}" y="${GRID_CARD_Y}" width="${CARD_W}" height="${GRID_CARD_H}" rx="12" fill="#fff" stroke="#e2e8f0" stroke-width="1"/>` +
    cells +
    `</svg>`
  );
}

const divisibilityTableDiagrams = {};
for (let d = 1; d <= 12; d++) {
  divisibilityTableDiagrams[`d${d}`] = freeze(`d${d}`, [d]);
}
// Multi-select state: the union pattern, frozen at the doc's own example pair (÷2 + ÷3)
divisibilityTableDiagrams.multi = freeze('multi', [2, 3]);

export default divisibilityTableDiagrams;
