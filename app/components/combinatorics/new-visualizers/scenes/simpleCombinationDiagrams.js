// Frozen-state SVGs for the Simple Combination tool (Line 1 anchor mesh).
// Ports scenes/SimpleCombination.jsx + shared.jsx verbatim: same radial-
// gradient balls and geometry, UNLABELED build slots under the "BUILD SET
// (size r = r)" banner (no #position labels - the visual signature of
// unordered selection), combinations() canonical enumeration, groups indexed
// by smallest element with varying sizes C(n-1-i, r-1) and per-group row
// heights. Balls mode only. Gradient ids are state-scoped.

const ALL_ITEMS = [
  { id: 0, color: '#ef4444', letter: 'A', name: 'Red' },
  { id: 1, color: '#3b82f6', letter: 'B', name: 'Blue' },
  { id: 2, color: '#10b981', letter: 'C', name: 'Green' },
  { id: 3, color: '#f59e0b', letter: 'D', name: 'Orange' },
  { id: 4, color: '#8b5cf6', letter: 'E', name: 'Purple' },
];
const C = {
  border: '#cbd5e1',
  borderStrong: '#94a3b8',
  textDim: '#64748b',
  textFaint: '#94a3b8',
  accent: '#3b82f6',
  accentDeep: '#1d4ed8',
  highlight: '#f59e0b',
};
const MONO = "'JetBrains Mono',monospace";

const SVG_W = 720, PAD = 30;
const SRC_R = 26, SRC_Y = 56, SRC_SP = 80;
const BUILD_R = 26, BUILD_SP = 70, BUILD_Y_OFFSET = 130, RESULTS_TOP_OFFSET = 64;
const ROW_H_MIN = 140;
const CARD_CFG_BY_R = { 1: 22, 2: 18, 3: 16, 4: 11, 5: 10 };
const COLS_OVERRIDE = { '4_3': 3, '5_3': 3 };

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
function combinations(arr, r) {
  if (r === 0) return [[]];
  if (r === arr.length) return [arr];
  const out = [];
  for (let i = 0; i <= arr.length - r; i++) {
    for (const c of combinations(arr.slice(i + 1), r - 1)) {
      out.push([arr[i], ...c]);
    }
  }
  return out;
}
function binomial(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}

function ball(key, item, cx, cy, r, opacity = 1) {
  const fontSize = Math.max(8, r * 0.5);
  return `<g${opacity !== 1 ? ` opacity="${opacity}"` : ''}>` +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#scb-${key}-g${item.id})"/>` +
    `<text x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="central" fill="#fff" ` +
    `font-size="${fontSize}" font-weight="700" font-family="${MONO}">${item.id + 1}</text></g>`;
}

function freeze(key, n, r, phase, build) {
  const items = ALL_ITEMS.slice(0, n);
  const outcomes = combinations(items.map(i => i.id), r);
  const totalCount = outcomes.length;
  const distinctFirsts = Array.from({ length: Math.max(0, n - r + 1) }, (_, i) => i);
  const groupSizes = distinctFirsts.map(i => binomial(n - 1 - i, r - 1));

  const MINI_R = CARD_CFG_BY_R[r] || 10;
  const forcedCols = COLS_OVERRIDE[`${n}_${r}`];
  const MINI_SP = MINI_R * 2 + 3;
  const CARD_PAD_X = 8;
  const CARD_W = CARD_PAD_X * 2 + r * MINI_SP;
  const CARD_H = 12 + MINI_R * 2;
  const CARD_GAP_X = 6, CARD_GAP_Y = 6;
  const GRP_LBL_W = 36, ACCENT_W = 3;
  const GRP_LEFT_M = PAD + GRP_LBL_W + ACCENT_W + 8;
  const availW = SVG_W - GRP_LEFT_M - PAD;
  const cols = forcedCols != null
    ? forcedCols
    : Math.max(1, Math.floor((availW + CARD_GAP_X) / (CARD_W + CARD_GAP_X)));
  const TOP_PAD = 14;
  const groupBlocks = groupSizes.map(sz => {
    const rows = Math.ceil(sz / cols);
    const blockH = rows * (CARD_H + CARD_GAP_Y) - CARD_GAP_Y;
    return { blockH, rowH: Math.max(ROW_H_MIN, blockH + 2 * TOP_PAD) };
  });

  const srcStartX = (SVG_W - (n - 1) * SRC_SP) / 2;
  const srcPos = items.map((_, i) => ({ x: srcStartX + i * SRC_SP, y: SRC_Y }));
  const buildY = SRC_Y + BUILD_Y_OFFSET;
  const buildStartX = (SVG_W - (r - 1) * BUILD_SP) / 2;
  const buildPos = Array.from({ length: r }, (_, i) => ({ x: buildStartX + i * BUILD_SP, y: buildY }));
  const resultsTop = buildY + BUILD_R + RESULTS_TOP_OFFSET;

  const completed = phase === 'done'
    ? outcomes
    : phase === 'building' ? outcomes.slice(0, build.completedCount) : [];
  const currentOutcome = phase === 'building' ? outcomes[build.outcomeIdx] : [];
  const slotsFilled = phase === 'building' ? build.slotsFilled : 0;
  const flyingSlotIdx = phase === 'building' && build.flying ? slotsFilled : -1;

  const dimmed = new Set();
  for (let i = 0; i < slotsFilled; i++) dimmed.add(currentOutcome[i]);
  if (flyingSlotIdx >= 0) dimmed.add(currentOutcome[flyingSlotIdx]);

  const visibleSteps = [];
  distinctFirsts.forEach((firstId, gi) => {
    const k = completed.filter(o => o[0] === firstId).length;
    const isCurrent = phase === 'building' && currentOutcome[0] === firstId;
    if (phase === 'done' || k > 0 || isCurrent) visibleSteps.push(gi);
  });
  const offsets = [];
  let acc = 0;
  for (const gi of visibleSteps) { offsets.push(acc); acc += groupBlocks[gi].rowH + 8; }
  const svgH = resultsTop + Math.max(0, acc - 8) + 24;

  const formulaShort = `C(${n}, ${r}) = ${totalCount}`;
  let statusText;
  if (phase === 'done') statusText = `Complete · ${totalCount} / ${totalCount}`;
  else if (phase === 'idle') statusText = 'Press Play or Step to begin';
  else {
    const firstId = currentOutcome[0];
    const gi = distinctFirsts.indexOf(firstId);
    const k = completed.filter(o => o[0] === firstId).length;
    statusText = `Group ${items[firstId].name}: ${k} / ${groupSizes[gi]}`;
  }

  let defs = '<defs>';
  for (const it of items) {
    defs += `<radialGradient id="scb-${key}-g${it.id}" cx="35%" cy="35%" r="65%">` +
      `<stop offset="0%" stop-color="${lighten(it.color, 45)}"/>` +
      `<stop offset="60%" stop-color="${it.color}"/>` +
      `<stop offset="100%" stop-color="${darken(it.color, 25)}"/>` +
      `</radialGradient>`;
  }
  defs += '</defs>';

  let s = '';
  s += `<text x="${SVG_W - PAD}" y="26" text-anchor="end" fill="${C.accentDeep}" font-size="12" font-weight="600" font-family="${MONO}">${formulaShort}</text>`;
  s += `<text x="${SVG_W - PAD}" y="44" text-anchor="end" fill="${C.highlight}" font-size="11" font-weight="600" font-family="${MONO}">${statusText}</text>`;
  s += `<text x="${PAD}" y="${SRC_Y - SRC_R - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">SOURCE (n = ${n})</text>`;
  items.forEach((it, i) => {
    s += ball(key, it, srcPos[i].x, srcPos[i].y, SRC_R, dimmed.has(it.id) ? 0.22 : 1);
  });
  s += `<text x="${PAD}" y="${buildY - BUILD_R - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">BUILD SET (size r = ${r})</text>`;
  // unlabeled slots - order carries no meaning in a subset
  buildPos.forEach((p) => {
    s += `<circle cx="${p.x}" cy="${p.y}" r="${BUILD_R + 3}" fill="none" stroke="${C.borderStrong}" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.45"/>`;
  });
  for (let i = 0; i < slotsFilled; i++) {
    s += ball(key, ALL_ITEMS[currentOutcome[i]], buildPos[i].x, buildPos[i].y, BUILD_R);
  }
  if (flyingSlotIdx >= 0) {
    const srcId = currentOutcome[flyingSlotIdx];
    const sp = srcPos[srcId], tp = buildPos[flyingSlotIdx];
    s += `<line x1="${sp.x}" y1="${sp.y + SRC_R + 2}" x2="${tp.x}" y2="${tp.y - BUILD_R - 2}" stroke="${ALL_ITEMS[srcId].color}" stroke-width="2" stroke-dasharray="5 4" opacity="0.7"/>`;
    const mx = sp.x + (tp.x - sp.x) * 0.55, my = sp.y + (tp.y - sp.y) * 0.55;
    s += ball(key, ALL_ITEMS[srcId], mx, my, BUILD_R);
  }
  if (visibleSteps.length > 0) {
    s += `<text x="${PAD}" y="${resultsTop - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">COMPLETED</text>`;
    s += `<text x="${SVG_W - PAD}" y="${resultsTop - 14}" text-anchor="end" fill="${C.accent}" font-size="11" font-weight="600" font-family="${MONO}">${completed.length} / ${totalCount}</text>`;
  }
  visibleSteps.forEach((gi, vi) => {
    const firstId = distinctFirsts[gi];
    const stepItem = ALL_ITEMS[firstId];
    const block = groupBlocks[gi];
    const rowY = resultsTop + offsets[vi];
    const cards = completed.filter(o => o[0] === firstId);
    const cardsStartY = rowY + (block.rowH - block.blockH) / 2;
    const avX = PAD + GRP_LBL_W / 2;
    const avY = cardsStartY + block.blockH / 2;

    s += `<rect x="${GRP_LEFT_M - 8}" y="${rowY}" width="${SVG_W - GRP_LEFT_M - PAD + 16}" height="${block.rowH}" rx="10" fill="${tint(stepItem.color, 0.08)}"/>`;
    s += `<rect x="${PAD + GRP_LBL_W + 2}" y="${rowY + 8}" width="${ACCENT_W}" height="${block.rowH - 16}" rx="1.5" fill="${stepItem.color}" opacity="0.9"/>`;
    s += `<circle cx="${avX}" cy="${avY}" r="13" fill="url(#scb-${key}-g${stepItem.id})"/>`;
    s += `<text x="${avX}" y="${avY + 1}" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="10" font-weight="700" font-family="${MONO}">${stepItem.id + 1}</text>`;

    cards.forEach((out, ci) => {
      const col = ci % cols, row = Math.floor(ci / cols);
      const cx = GRP_LEFT_M + col * (CARD_W + CARD_GAP_X);
      const cy = cardsStartY + row * (CARD_H + CARD_GAP_Y);
      s += `<rect x="${cx}" y="${cy}" width="${CARD_W}" height="${CARD_H}" rx="6" fill="#ffffff" stroke="${C.border}" stroke-width="1"/>`;
      out.forEach((id, j) => {
        s += ball(key, ALL_ITEMS[id], cx + CARD_PAD_X + MINI_R + j * MINI_SP, cy + CARD_H / 2, MINI_R);
      });
    });
  });

  return (
    `<svg viewBox="0 0 ${SVG_W} ${svgH}" width="460" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Simple combination visualizer, C(${n}, ${r}), ${phase}">` +
    defs +
    `<rect width="${SVG_W}" height="${svgH}" fill="#ffffff" stroke="${C.border}" stroke-width="1" rx="14"/>` +
    s +
    `</svg>`
  );
}

const simpleCombinationDiagrams = {
  idle: freeze('idle', 3, 2, 'idle'),
  // third subset {B, C} under way: B landed, C mid-flight; group A ({A,B},{A,C}) done
  building: freeze('building', 3, 2, 'building', {
    outcomeIdx: 2, completedCount: 2, slotsFilled: 1, flying: true,
  }),
  default32: freeze('default32', 3, 2, 'done'),   // C(3,2) = 3
  sym52: freeze('sym52', 5, 2, 'done'),           // C(5,2) = 10 = C(5,3)
  big53: freeze('big53', 5, 3, 'done'),           // C(5,3) = 10, groups 6+3+1
  rEqualsN: freeze('rEqualsN', 5, 5, 'done'),     // C(5,5) = 1: the whole set
};

export default simpleCombinationDiagrams;
