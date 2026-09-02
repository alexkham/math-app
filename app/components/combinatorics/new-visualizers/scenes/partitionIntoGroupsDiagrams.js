// Frozen-state SVGs for the Partition into Groups tool (Line 1 anchor mesh).
// Ports scenes/PartitionIntoGroups.jsx + shared.jsx verbatim: same radial-
// gradient balls, the labeled BUILD BOXES row (surface-filled boxes with
// BOX A (size) captions and dashed slot outlines), generatePartitions +
// sortByItemZeroBox canonical enumeration, mini partition cards with thin
// box separators, and group rows keyed by item 1's destination box with
// "→ Box X" avatars and per-group row heights. Balls mode only. Gradient
// ids are state-scoped.

const ALL_ITEMS = [
  { id: 0, color: '#ef4444', letter: 'A', name: 'Red' },
  { id: 1, color: '#3b82f6', letter: 'B', name: 'Blue' },
  { id: 2, color: '#10b981', letter: 'C', name: 'Green' },
  { id: 3, color: '#f59e0b', letter: 'D', name: 'Orange' },
  { id: 4, color: '#8b5cf6', letter: 'E', name: 'Purple' },
];
const C = {
  surface: '#f8fafc',
  border: '#cbd5e1',
  borderStrong: '#94a3b8',
  textDim: '#64748b',
  accent: '#3b82f6',
  accentDeep: '#1d4ed8',
  highlight: '#f59e0b',
};
const MONO = "'JetBrains Mono',monospace";

const SVG_W = 720, PAD = 30;
const SRC_R = 26, SRC_Y = 56, SRC_SP = 80;
const BUILD_BALL_R = 20, BUILD_BALL_SP = 48;
const BOX_PAD_X = 10, BOX_PAD_Y = 8, BOX_GAP = 22, BOX_LABEL_OFFSET = 14;
const BUILD_Y_OFFSET = 110, RESULTS_TOP_OFFSET = 70;
const ROW_H_MIN = 140;
const BOX_LABELS = ['A', 'B', 'C', 'D'];

const PARTITIONS = {
  '2+2': { sizes: [2, 2], n: 4 },
  '3+1': { sizes: [3, 1], n: 4 },
  '2+1+1': { sizes: [2, 1, 1], n: 4 },
  '4+1': { sizes: [4, 1], n: 5 },
  '3+2': { sizes: [3, 2], n: 5 },
  '3+1+1': { sizes: [3, 1, 1], n: 5 },
  '2+2+1': { sizes: [2, 2, 1], n: 5 },
};
const CARD_CFG = {
  '2+2': { MINI_R: 16, cols: null },
  '3+1': { MINI_R: 16, cols: null },
  '2+1+1': { MINI_R: 14, cols: null },
  '4+1': { MINI_R: 14, cols: null },
  '3+2': { MINI_R: 14, cols: null },
  '3+1+1': { MINI_R: 12, cols: null },
  '2+2+1': { MINI_R: 11, cols: 3 },
};

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
function factorial(n) { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; }
function combinations(arr, r) {
  if (r === 0) return [[]];
  if (r === arr.length) return [arr];
  const out = [];
  for (let i = 0; i <= arr.length - r; i++) {
    for (const c of combinations(arr.slice(i + 1), r - 1)) out.push([arr[i], ...c]);
  }
  return out;
}
function generatePartitions(items, sizes) {
  if (sizes.length === 0) return items.length === 0 ? [[]] : [];
  if (sizes.length === 1) return items.length === sizes[0] ? [[items.slice()]] : [];
  const [first, ...restSizes] = sizes;
  const out = [];
  for (const box0 of combinations(items, first)) {
    const box0Set = new Set(box0);
    const remaining = items.filter(x => !box0Set.has(x));
    for (const restPart of generatePartitions(remaining, restSizes)) {
      out.push([box0, ...restPart]);
    }
  }
  return out;
}
function whichBoxHasZero(part) {
  for (let i = 0; i < part.length; i++) if (part[i].includes(0)) return i;
  return -1;
}
function sortByItemZeroBox(parts) {
  return parts.slice().sort((a, b) => {
    const ba = whichBoxHasZero(a), bb = whichBoxHasZero(b);
    if (ba !== bb) return ba - bb;
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < Math.max(a[i].length, b[i].length); j++) {
        const ai = a[i][j] ?? -1, bj = b[i][j] ?? -1;
        if (ai !== bj) return ai - bj;
      }
    }
    return 0;
  });
}
function groupSizeFor(boxIdx, sizes) {
  const n = sizes.reduce((a, b) => a + b, 0);
  let r = factorial(n - 1);
  for (let j = 0; j < sizes.length; j++) {
    r /= factorial(j === boxIdx ? sizes[j] - 1 : sizes[j]);
  }
  return Math.round(r);
}

function ball(key, item, cx, cy, r, opacity = 1) {
  const fontSize = Math.max(8, r * 0.5);
  return `<g${opacity !== 1 ? ` opacity="${opacity}"` : ''}>` +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#pig-${key}-g${item.id})"/>` +
    `<text x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="central" fill="#fff" ` +
    `font-size="${fontSize}" font-weight="700" font-family="${MONO}">${item.id + 1}</text></g>`;
}

function freeze(key, presetId, phase, build) {
  const { sizes, n } = PARTITIONS[presetId];
  const k = sizes.length;
  const items = ALL_ITEMS.slice(0, n);
  const outcomes = sortByItemZeroBox(generatePartitions(items.map(i => i.id), sizes));
  const totalCount = outcomes.length;
  const groupSizes = Array.from({ length: k }, (_, bi) => groupSizeFor(bi, sizes));

  // build-box layout
  const boxWidths = sizes.map(s => s * BUILD_BALL_SP + 2 * BOX_PAD_X);
  const totalW = boxWidths.reduce((a, b) => a + b, 0) + (k - 1) * BOX_GAP;
  const startX = (SVG_W - totalW) / 2;
  const boxX = [];
  { let x = startX; for (const w of boxWidths) { boxX.push(x); x += w + BOX_GAP; } }
  const boxH = 2 * BUILD_BALL_R + 2 * BOX_PAD_Y;
  const buildY = SRC_Y + SRC_R + BUILD_Y_OFFSET;
  const ballY = buildY + boxH / 2;
  const slotPosByBoxIdx = sizes.map((s, bi) =>
    Array.from({ length: s }, (_, j) => ({
      x: boxX[bi] + BOX_PAD_X + (j + 0.5) * BUILD_BALL_SP, y: ballY,
    }))
  );
  const resultsTop = buildY + boxH + RESULTS_TOP_OFFSET;

  // card layout
  const cfg = CARD_CFG[presetId];
  const MINI_R = cfg.MINI_R, MINI_SP = MINI_R * 2 + 3;
  const CARD_PAD_X = 8, BOX_SEP_W = 10;
  const CARD_W = CARD_PAD_X * 2 + n * MINI_SP + (k - 1) * BOX_SEP_W;
  const CARD_H = 12 + MINI_R * 2;
  const CARD_GAP_X = 6, CARD_GAP_Y = 6;
  const GRP_LBL_W = 36, ACCENT_W = 3;
  const GRP_LEFT_M = PAD + GRP_LBL_W + ACCENT_W + 8;
  const availW = SVG_W - GRP_LEFT_M - PAD;
  const cols = cfg.cols != null
    ? cfg.cols
    : Math.max(1, Math.floor((availW + CARD_GAP_X) / (CARD_W + CARD_GAP_X)));
  const TOP_PAD = 14;
  const groupBlocks = groupSizes.map(sz => {
    const rows = Math.max(1, Math.ceil(sz / cols));
    const blockH = rows * (CARD_H + CARD_GAP_Y) - CARD_GAP_Y;
    return { blockH, rowH: Math.max(ROW_H_MIN, blockH + 2 * TOP_PAD) };
  });

  const srcStartX = (SVG_W - (n - 1) * SRC_SP) / 2;
  const srcPos = items.map((_, i) => ({ x: srcStartX + i * SRC_SP, y: SRC_Y }));

  const completed = phase === 'done'
    ? outcomes
    : phase === 'building' ? outcomes.slice(0, build.completedCount) : [];
  const currentOutcome = phase === 'building' ? outcomes[build.outcomeIdx] : null;
  const slotsFilled = phase === 'building' ? build.slotsFilled : 0;
  const flyingSlotIdx = phase === 'building' && build.flying ? slotsFilled : -1;

  const slotPlan = [];
  if (currentOutcome) {
    for (let bi = 0; bi < currentOutcome.length; bi++) {
      for (let pj = 0; pj < currentOutcome[bi].length; pj++) {
        slotPlan.push({ boxIdx: bi, posInBox: pj, itemId: currentOutcome[bi][pj] });
      }
    }
  }
  const dimmed = new Set();
  for (let i = 0; i < slotsFilled; i++) if (slotPlan[i]) dimmed.add(slotPlan[i].itemId);
  if (flyingSlotIdx >= 0 && slotPlan[flyingSlotIdx]) dimmed.add(slotPlan[flyingSlotIdx].itemId);

  const visibleSteps = [];
  for (let bi = 0; bi < k; bi++) {
    const kd = completed.filter(o => whichBoxHasZero(o) === bi).length;
    const isCurrent = phase === 'building' && currentOutcome && whichBoxHasZero(currentOutcome) === bi;
    if (phase === 'done' || kd > 0 || isCurrent) visibleSteps.push(bi);
  }
  const offsets = [];
  let acc = 0;
  for (const gi of visibleSteps) { offsets.push(acc); acc += groupBlocks[gi].rowH + 8; }
  const svgH = resultsTop + Math.max(0, acc - 8) + 24;

  const denomTerms = sizes.map(s => `${s}!`).join(' · ');
  const formulaShort = `${n}!/(${denomTerms}) = ${totalCount}`;
  let statusText;
  if (phase === 'done') statusText = `Complete · ${totalCount} / ${totalCount}`;
  else if (phase === 'idle') statusText = 'Press Play or Step to begin';
  else {
    const bi = whichBoxHasZero(currentOutcome);
    const kd = completed.filter(o => whichBoxHasZero(o) === bi).length;
    statusText = `Item 1 in Box ${BOX_LABELS[bi]}: ${kd} / ${groupSizes[bi]}`;
  }

  let defs = '<defs>';
  for (const it of items) {
    defs += `<radialGradient id="pig-${key}-g${it.id}" cx="35%" cy="35%" r="65%">` +
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
  s += `<text x="${PAD}" y="${buildY - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">BUILD BOXES (${presetId})</text>`;
  sizes.forEach((sz, bi) => {
    s += `<rect x="${boxX[bi]}" y="${buildY}" width="${boxWidths[bi]}" height="${boxH}" rx="10" fill="${C.surface}" stroke="${C.borderStrong}" stroke-width="1.5"/>`;
    s += `<text x="${boxX[bi] + boxWidths[bi] / 2}" y="${buildY - BOX_LABEL_OFFSET}" text-anchor="middle" fill="${C.textDim}" font-size="11" font-weight="700" font-family="${MONO}" letter-spacing="1">BOX ${BOX_LABELS[bi]} (${sz})</text>`;
    slotPosByBoxIdx[bi].forEach(p => {
      s += `<circle cx="${p.x}" cy="${p.y}" r="${BUILD_BALL_R + 2}" fill="none" stroke="${C.borderStrong}" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/>`;
    });
  });

  for (let i = 0; i < slotsFilled; i++) {
    const plan = slotPlan[i];
    if (!plan) continue;
    const p = slotPosByBoxIdx[plan.boxIdx][plan.posInBox];
    s += ball(key, ALL_ITEMS[plan.itemId], p.x, p.y, BUILD_BALL_R);
  }
  if (flyingSlotIdx >= 0 && slotPlan[flyingSlotIdx]) {
    const plan = slotPlan[flyingSlotIdx];
    const sp = srcPos[plan.itemId];
    const tp = slotPosByBoxIdx[plan.boxIdx][plan.posInBox];
    s += `<line x1="${sp.x}" y1="${sp.y + SRC_R + 2}" x2="${tp.x}" y2="${tp.y - BUILD_BALL_R - 2}" stroke="${ALL_ITEMS[plan.itemId].color}" stroke-width="2" stroke-dasharray="5 4" opacity="0.7"/>`;
    const mx = sp.x + (tp.x - sp.x) * 0.55, my = sp.y + (tp.y - sp.y) * 0.55;
    s += ball(key, ALL_ITEMS[plan.itemId], mx, my, BUILD_BALL_R);
  }

  if (visibleSteps.length > 0) {
    s += `<text x="${PAD}" y="${resultsTop - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">COMPLETED</text>`;
    s += `<text x="${SVG_W - PAD}" y="${resultsTop - 14}" text-anchor="end" fill="${C.accent}" font-size="11" font-weight="600" font-family="${MONO}">${completed.length} / ${totalCount}</text>`;
  }
  visibleSteps.forEach((bi, vi) => {
    const block = groupBlocks[bi];
    const rowY = resultsTop + offsets[vi];
    const cards = completed.filter(o => whichBoxHasZero(o) === bi);
    const cardsStartY = rowY + (block.rowH - block.blockH) / 2;
    const avX = PAD + GRP_LBL_W / 2;
    const avY = cardsStartY + block.blockH / 2;
    const tintColor = ALL_ITEMS[0].color;

    s += `<rect x="${GRP_LEFT_M - 8}" y="${rowY}" width="${SVG_W - GRP_LEFT_M - PAD + 16}" height="${block.rowH}" rx="10" fill="${tint(tintColor, 0.06)}"/>`;
    s += `<rect x="${PAD + GRP_LBL_W + 2}" y="${rowY + 8}" width="${ACCENT_W}" height="${block.rowH - 16}" rx="1.5" fill="${tintColor}" opacity="0.9"/>`;
    s += `<text x="${avX}" y="${avY - 6}" text-anchor="middle" dominant-baseline="central" fill="${C.textDim}" font-size="9" font-weight="600" font-family="${MONO}">→ Box</text>`;
    s += `<text x="${avX}" y="${avY + 10}" text-anchor="middle" dominant-baseline="central" fill="${C.accentDeep}" font-size="16" font-weight="700" font-family="${MONO}">${BOX_LABELS[bi]}</text>`;

    cards.forEach((part, ci) => {
      const col = ci % cols, row = Math.floor(ci / cols);
      const cx = GRP_LEFT_M + col * (CARD_W + CARD_GAP_X);
      const cy = cardsStartY + row * (CARD_H + CARD_GAP_Y);
      s += `<rect x="${cx}" y="${cy}" width="${CARD_W}" height="${CARD_H}" rx="6" fill="#ffffff" stroke="${C.border}" stroke-width="1"/>`;
      let cursor = cx + CARD_PAD_X;
      part.forEach((box, bj) => {
        box.forEach((itmId, j) => {
          s += ball(key, ALL_ITEMS[itmId], cursor + MINI_R + j * MINI_SP, cy + CARD_H / 2, MINI_R);
        });
        cursor += box.length * MINI_SP;
        if (bj < part.length - 1) {
          const sepX = cursor + BOX_SEP_W / 2;
          s += `<line x1="${sepX}" y1="${cy + 6}" x2="${sepX}" y2="${cy + CARD_H - 6}" stroke="${C.borderStrong}" stroke-width="1"/>`;
          cursor += BOX_SEP_W;
        }
      });
    });
  });

  return (
    `<svg viewBox="0 0 ${SVG_W} ${svgH}" width="460" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Partition into groups visualizer, ${presetId}, ${phase}">` +
    defs +
    `<rect width="${SVG_W}" height="${svgH}" fill="#ffffff" stroke="${C.border}" stroke-width="1" rx="14"/>` +
    s +
    `</svg>`
  );
}

const partitionIntoGroupsDiagrams = {
  idle: freeze('idle', '2+2', 'idle'),
  // second partition {A,C}|{B,D} under way: A and C landed in Box A, B mid-flight
  // into Box B - the first {A,B}|{C,D} card already filed above
  building: freeze('building', '2+2', 'building', {
    outcomeIdx: 1, completedCount: 1, slotsFilled: 2, flying: true,
  }),
  p22: freeze('p22', '2+2', 'done'),       // 4!/(2!·2!) = 6
  p31: freeze('p31', '3+1', 'done'),       // 4!/(3!·1!) = 4
  p211: freeze('p211', '2+1+1', 'done'),   // 4!/(2!·1!·1!) = 12
  p41: freeze('p41', '4+1', 'done'),       // 5!/(4!·1!) = 5
  p32: freeze('p32', '3+2', 'done'),       // 5!/(3!·2!) = 10
  p311: freeze('p311', '3+1+1', 'done'),   // 5!/(3!·1!·1!) = 20
  p221: freeze('p221', '2+2+1', 'done'),   // 5!/(2!·2!·1!) = 30
};

export default partitionIntoGroupsDiagrams;
