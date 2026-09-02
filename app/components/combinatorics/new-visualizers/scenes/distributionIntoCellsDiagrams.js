// Frozen-state SVGs for the Distribution into Cells tool (Line 1 anchor mesh).
// Ports scenes/DistributionIntoCells.jsx + shared.jsx verbatim: same radial-
// gradient balls, ITEMS TO PLACE source row, labeled Cell 1..k boxes with
// bottom-up stacking, the live assignment readout (c1, c2, ...) with ? for
// unknowns, the legend and tinted formula card, uniform item-1-destination
// group rows of size k^(n-1), and mini cards of k stacked mini-cells with a
// tuple readout. Balls mode only. Gradient ids are state-scoped.

const ALL_ITEMS = [
  { id: 0, color: '#ef4444', letter: 'A', name: 'Red' },
  { id: 1, color: '#3b82f6', letter: 'B', name: 'Blue' },
  { id: 2, color: '#10b981', letter: 'C', name: 'Green' },
  { id: 3, color: '#f59e0b', letter: 'D', name: 'Orange' },
];
const C = {
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
const MONO = "'JetBrains Mono',monospace";
const SUPS = ['⁰', '¹', '²', '³', '⁴', '⁵'];

const SVG_W = 720, PAD = 30;
const SOURCE_Y = 64, SOURCE_ITEM_SP = 56;
const CELL_TOP = 152, CELL_W = 76, CELL_H = 160, CELL_GAP_X = 20;
const CELL_PAD_BOT = 12, CELL_LABEL_OFFSET = 14;
const BALL_R = 16, STACK_GAP = 4;
const READOUT_Y_OFFSET = 36, LEGEND_OFFSET = 56;
const FORMULA_CARD_OFFSET = 78, FORMULA_CARD_H = 54, RESULTS_TOP_OFFSET = 158;
const ROW_H_MIN = 140;

function lighten(hex, pct) {
  const num = parseInt(hex.slice(1), 16);
  const r = Math.min(255, (num >> 16) + Math.round((255 - (num >> 16)) * pct / 100));
  const g = Math.min(255, ((num >> 8) & 0xff) + Math.round((255 - ((num >> 8) & 0xff)) * pct / 100));
  const b = Math.min(255, (num & 0xff) + Math.round((255 - (num & 0xff)) * pct / 100));
  return `rgb(${r},${g},${b})`;
}
function darken(hex, pct) {
  const num = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.round((num >> 16) * (1 - pct / 100)));
  const g = Math.max(0, Math.round(((num >> 8) & 0xff) * (1 - pct / 100)));
  const b = Math.max(0, Math.round((num & 0xff) * (1 - pct / 100)));
  return `rgb(${r},${g},${b})`;
}
function tint(hex, opacity) {
  const num = parseInt(hex.slice(1), 16);
  return `rgba(${num >> 16},${(num >> 8) & 0xff},${num & 0xff},${opacity})`;
}
function pow(base, exp) { let r = 1; for (let i = 0; i < exp; i++) r *= base; return r; }
function distributions(n, k) {
  if (n === 0) return [[]];
  const out = [];
  for (let c = 1; c <= k; c++) {
    for (const rest of distributions(n - 1, k)) out.push([c, ...rest]);
  }
  return out;
}
function countItemsInCellBefore(comp, itemIdx, cell) {
  let count = 0;
  for (let j = 0; j < itemIdx; j++) if (comp[j] === cell) count++;
  return count;
}

function ball(key, item, cx, cy, r, opacity = 1) {
  const fontSize = Math.max(8, r * 0.5);
  return `<g${opacity !== 1 ? ` opacity="${opacity}"` : ''}>` +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#dic-${key}-g${item.id})"/>` +
    `<text x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="central" fill="#fff" ` +
    `font-size="${fontSize}" font-weight="700" font-family="${MONO}">${item.id + 1}</text></g>`;
}

function freeze(key, n, k, phase, build) {
  const items = ALL_ITEMS.slice(0, n);
  const outcomes = distributions(n, k);
  const totalCount = outcomes.length;
  const groupSize = pow(k, n - 1);

  const sourceStartX = (SVG_W - (n - 1) * SOURCE_ITEM_SP) / 2;
  const sourceX = i => sourceStartX + i * SOURCE_ITEM_SP;
  const cellsW = k * CELL_W + (k - 1) * CELL_GAP_X;
  const cellsX0 = (SVG_W - cellsW) / 2;
  const cellLeftX = c => cellsX0 + c * (CELL_W + CELL_GAP_X);
  const cellCenterX = c => cellLeftX(c) + CELL_W / 2;
  const cellBottom = CELL_TOP + CELL_H;
  const stackedItemY = p => CELL_TOP + CELL_H - CELL_PAD_BOT - BALL_R - p * (BALL_R * 2 + STACK_GAP);
  const compReadoutY = cellBottom + READOUT_Y_OFFSET;
  const legendY = cellBottom + LEGEND_OFFSET;
  const formulaCardTop = cellBottom + FORMULA_CARD_OFFSET;
  const resultsTop = cellBottom + RESULTS_TOP_OFFSET;

  // mini card layout
  const MINI_BALL_R = 4, MINI_STACK_GAP = 1;
  const MINI_CELL_W = 12;
  const MINI_CELL_H = n * 8 + (n - 1) * MINI_STACK_GAP + 6;
  const MINI_CELL_GAP = 2, MINI_PAD_TOP = 4, MINI_PAD_BOT = 3;
  const CARD_PAD_X = 6, READOUT_H = 12;
  const CARD_W = CARD_PAD_X * 2 + k * MINI_CELL_W + (k - 1) * MINI_CELL_GAP;
  const CARD_H = MINI_PAD_TOP + MINI_CELL_H + MINI_PAD_BOT + READOUT_H;
  const CARD_GAP_X = 6, CARD_GAP_Y = 6;
  const GRP_LBL_W = 36, ACCENT_W = 3;
  const GRP_LEFT_M = PAD + GRP_LBL_W + ACCENT_W + 8;
  const availW = SVG_W - GRP_LEFT_M - PAD;
  const cols = Math.max(1, Math.floor((availW + CARD_GAP_X) / (CARD_W + CARD_GAP_X)));
  const TOP_PAD = 14;
  const rowsPerGroup = Math.max(1, Math.ceil(groupSize / cols));
  const blockH = rowsPerGroup * (CARD_H + CARD_GAP_Y) - CARD_GAP_Y;
  const ROW_H = Math.max(ROW_H_MIN, blockH + 2 * TOP_PAD);

  const completed = phase === 'done'
    ? outcomes
    : phase === 'building' ? outcomes.slice(0, build.completedCount) : [];
  const currentComp = phase === 'building' ? outcomes[build.outcomeIdx] : [];
  const slotsFilled = phase === 'building' ? build.slotsFilled : 0;
  const flyingItemIdx = phase === 'building' && build.flying ? slotsFilled : -1;

  const visibleSteps = [];
  for (let c = 1; c <= k; c++) {
    const kd = completed.filter(o => o[0] === c).length;
    const isCurrent = phase === 'building' && currentComp[0] === c;
    if (phase === 'done' || kd > 0 || isCurrent) visibleSteps.push(c);
  }
  const svgH = resultsTop +
    visibleSteps.length * (ROW_H + 8) - (visibleSteps.length > 0 ? 8 : 0) + 24;

  const formulaShort = `${k}${SUPS[n]} = ${totalCount}`;
  const factors = Array(n).fill(String(k)).join(' × ');
  const formulaFull = `${k}${SUPS[n]} = ${factors} = ${totalCount}`;
  let statusText;
  if (phase === 'done') statusText = `Complete · ${totalCount} / ${totalCount}`;
  else if (phase === 'idle') statusText = 'Press Play or Step to begin';
  else {
    const kd = completed.filter(o => o[0] === currentComp[0]).length;
    statusText = `Cell ${currentComp[0]}: ${kd} / ${groupSize}`;
  }

  let defs = '<defs>';
  for (const it of ALL_ITEMS) {
    defs += `<radialGradient id="dic-${key}-g${it.id}" cx="35%" cy="35%" r="65%">` +
      `<stop offset="0%" stop-color="${lighten(it.color, 45)}"/>` +
      `<stop offset="60%" stop-color="${it.color}"/>` +
      `<stop offset="100%" stop-color="${darken(it.color, 25)}"/>` +
      `</radialGradient>`;
  }
  defs += '</defs>';

  let s = '';
  s += `<text x="${SVG_W - PAD}" y="26" text-anchor="end" fill="${C.accentDeep}" font-size="12" font-weight="600" font-family="${MONO}">${formulaShort}</text>`;
  s += `<text x="${SVG_W - PAD}" y="44" text-anchor="end" fill="${C.highlight}" font-size="11" font-weight="600" font-family="${MONO}">${statusText}</text>`;
  s += `<text x="${PAD}" y="${SOURCE_Y - BALL_R - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">ITEMS TO PLACE (n = ${n})</text>`;
  for (let i = 0; i < n; i++) {
    const dim = i < slotsFilled || i === flyingItemIdx;
    s += ball(key, items[i], sourceX(i), SOURCE_Y, BALL_R, dim ? 0.22 : 1);
  }
  s += `<text x="${PAD}" y="${CELL_TOP - CELL_LABEL_OFFSET - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">CELLS (k = ${k})</text>`;
  for (let c = 0; c < k; c++) {
    s += `<text x="${cellCenterX(c)}" y="${CELL_TOP - CELL_LABEL_OFFSET + 4}" text-anchor="middle" font-size="12" font-weight="700" font-family="${MONO}" fill="${C.accentDeep}">Cell ${c + 1}</text>`;
    s += `<rect x="${cellLeftX(c)}" y="${CELL_TOP}" width="${CELL_W}" height="${CELL_H}" rx="8" fill="${C.surface}" stroke="${C.borderStrong}" stroke-width="1.5"/>`;
  }
  for (let i = 0; i < slotsFilled; i++) {
    const c = currentComp[i] - 1;
    const p = countItemsInCellBefore(currentComp, i, c + 1);
    s += ball(key, items[i], cellCenterX(c), stackedItemY(p), BALL_R);
  }
  if (flyingItemIdx >= 0 && currentComp[flyingItemIdx] !== undefined) {
    const c = currentComp[flyingItemIdx] - 1;
    const p = countItemsInCellBefore(currentComp, flyingItemIdx, c + 1);
    const sx = sourceX(flyingItemIdx), sy = SOURCE_Y;
    const tx = cellCenterX(c), ty = stackedItemY(p);
    s += `<line x1="${sx}" y1="${sy + BALL_R + 4}" x2="${tx}" y2="${ty - BALL_R - 4}" stroke="${items[flyingItemIdx].color}" stroke-width="2" stroke-dasharray="5 4" opacity="0.55"/>`;
    const mx = sx + (tx - sx) * 0.55, my = sy + (ty - sy) * 0.55;
    s += ball(key, items[flyingItemIdx], mx, my, BALL_R);
  }

  // assignment readout + legend + formula card
  let readout = `<tspan fill="${C.textDim}">assignment: (</tspan>`;
  for (let i = 0; i < n; i++) {
    const known = i < slotsFilled || phase === 'done';
    if (i > 0) readout += `<tspan fill="${C.textDim}">, </tspan>`;
    readout += `<tspan fill="${known && currentComp[i] !== undefined ? C.accentDeep : C.textFaint}">${known && currentComp[i] !== undefined ? currentComp[i] : '?'}</tspan>`;
  }
  readout += `<tspan fill="${C.textDim}">)</tspan>`;
  s += `<text x="${SVG_W / 2}" y="${compReadoutY}" text-anchor="middle" font-size="14" font-weight="700" font-family="${MONO}" fill="${C.text}">${readout}</text>`;
  s += `<text x="${SVG_W / 2}" y="${legendY}" text-anchor="middle" font-size="10" font-weight="500" fill="${C.textDim}" font-family="${MONO}">(item 1 → cell c₁, item 2 → cell c₂, …)</text>`;
  s += `<rect x="${PAD + 30}" y="${formulaCardTop}" width="${SVG_W - 2 * (PAD + 30)}" height="${FORMULA_CARD_H}" rx="8" fill="${C.surfaceTint}" stroke="${C.accentLight}" stroke-width="1.5"/>`;
  s += `<text x="${SVG_W / 2}" y="${formulaCardTop + 18}" text-anchor="middle" font-size="11" font-weight="600" fill="${C.textDim}" font-family="${MONO}">Each of n = ${n} items independently picks 1 of k = ${k} cells:</text>`;
  s += `<text x="${SVG_W / 2}" y="${formulaCardTop + 40}" text-anchor="middle" font-size="14" font-weight="700" fill="${C.accentDeep}" font-family="${MONO}">${formulaFull}</text>`;

  if (visibleSteps.length > 0) {
    s += `<text x="${PAD}" y="${resultsTop - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">COMPLETED</text>`;
    s += `<text x="${SVG_W - PAD}" y="${resultsTop - 14}" text-anchor="end" fill="${C.accent}" font-size="11" font-weight="600" font-family="${MONO}">${completed.length} / ${totalCount}</text>`;
  }
  visibleSteps.forEach((firstVal, vi) => {
    const rowY = resultsTop + vi * (ROW_H + 8);
    const cards = completed.filter(o => o[0] === firstVal);
    const cardsStartY = rowY + (ROW_H - blockH) / 2;
    const avX = PAD + GRP_LBL_W / 2;
    const avY = cardsStartY + blockH / 2;

    s += `<rect x="${GRP_LEFT_M - 8}" y="${rowY}" width="${SVG_W - GRP_LEFT_M - PAD + 16}" height="${ROW_H}" rx="10" fill="${tint(C.accent, 0.05)}"/>`;
    s += `<rect x="${PAD + GRP_LBL_W + 2}" y="${rowY + 8}" width="${ACCENT_W}" height="${ROW_H - 16}" rx="1.5" fill="${C.accent}" opacity="0.9"/>`;
    s += `<text x="${avX}" y="${avY - 6}" text-anchor="middle" dominant-baseline="central" fill="${C.textDim}" font-size="8" font-weight="600" font-family="${MONO}">item 1 →</text>`;
    s += `<text x="${avX}" y="${avY + 8}" text-anchor="middle" dominant-baseline="central" fill="${C.accentDeep}" font-size="14" font-weight="700" font-family="${MONO}">Cell ${firstVal}</text>`;

    cards.forEach((comp, ci) => {
      const col = ci % cols, row = Math.floor(ci / cols);
      const cx = GRP_LEFT_M + col * (CARD_W + CARD_GAP_X);
      const cy = cardsStartY + row * (CARD_H + CARD_GAP_Y);
      s += `<rect x="${cx}" y="${cy}" width="${CARD_W}" height="${CARD_H}" rx="5" fill="#ffffff" stroke="${C.border}" stroke-width="1"/>`;
      for (let c = 0; c < k; c++) {
        const mLeft = cx + CARD_PAD_X + c * (MINI_CELL_W + MINI_CELL_GAP);
        const mCx = mLeft + MINI_CELL_W / 2;
        const mTop = cy + MINI_PAD_TOP;
        s += `<rect x="${mLeft}" y="${mTop}" width="${MINI_CELL_W}" height="${MINI_CELL_H}" rx="2" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>`;
        let p = 0;
        for (let i = 0; i < n; i++) {
          if (comp[i] === c + 1) {
            const ity = mTop + MINI_CELL_H - 3 - MINI_BALL_R - p * (MINI_BALL_R * 2 + MINI_STACK_GAP);
            s += ball(key, items[i], mCx, ity, MINI_BALL_R);
            p++;
          }
        }
      }
      s += `<text x="${cx + CARD_W / 2}" y="${cy + CARD_H - 4}" text-anchor="middle" font-size="9" font-weight="600" font-family="${MONO}" fill="${C.textDim}">(${comp.join(',')})</text>`;
    });
  });

  return (
    `<svg viewBox="0 0 ${SVG_W} ${svgH}" width="460" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Distribution into cells visualizer, ${k}^${n}, ${phase}">` +
    defs +
    `<rect width="${SVG_W}" height="${svgH}" fill="#ffffff" stroke="${C.border}" stroke-width="1" rx="14"/>` +
    s +
    `</svg>`
  );
}

const distributionIntoCellsDiagrams = {
  idle: freeze('idle', 3, 3, 'idle'),
  // second distribution (1,1,2) under way: items 1 and 2 stacked in Cell 1,
  // item 3 mid-flight to Cell 2; readout (1, 1, ?)
  building: freeze('building', 3, 3, 'building', {
    outcomeIdx: 1, completedCount: 1, slotsFilled: 2, flying: true,
  }),
  default33: freeze('default33', 3, 3, 'done'),   // 3^3 = 27, groups 9+9+9
  twoCells: freeze('twoCells', 3, 2, 'done'),     // 2^3 = 8: binary assignments
  manyCells: freeze('manyCells', 2, 4, 'done'),   // 4^2 = 16: empty cells guaranteed
  big43: freeze('big43', 4, 3, 'done'),           // 3^4 = 81: pigeonhole in every card
};

export default distributionIntoCellsDiagrams;
