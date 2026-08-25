// Frozen-state SVGs for the Permutation with Identical Items tool (Line 1).
// Ports scenes/PermutationWithIdentical.jsx + shared.jsx verbatim: same
// ALL_ITEMS radial-gradient balls, same geometry constants, same distinctPerms
// enumeration order, same per-multiset CARD_CFG, same PER-GROUP row heights
// (group sizes vary with the leftover multiplicities), and the same POSITIONAL
// source dimming - only the specific copy in use dims, its twin stays bright.
// Balls mode only. Gradient ids are state-scoped.

const ALL_ITEMS = [
  { id: 0, color: '#ef4444', letter: 'A', name: 'Red' },
  { id: 1, color: '#3b82f6', letter: 'B', name: 'Blue' },
  { id: 2, color: '#10b981', letter: 'C', name: 'Green' },
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

const MULTISETS = {
  AAB: [0, 0, 1],
  AAAB: [0, 0, 0, 1],
  AABB: [0, 0, 1, 1],
  AABC: [0, 0, 1, 2],
  AAABB: [0, 0, 0, 1, 1],
  AABBC: [0, 0, 1, 1, 2],
};
const CARD_CFG = {
  AAB: { MINI_R: 22, cols: null },
  AAAB: { MINI_R: 18, cols: null },
  AABB: { MINI_R: 18, cols: null },
  AABC: { MINI_R: 18, cols: 3 },
  AAABB: { MINI_R: 14, cols: null },
  AABBC: { MINI_R: 14, cols: 3 },
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

function distinctPerms(arr) {
  if (arr.length <= 1) return [arr.slice()];
  const out = [];
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) continue;
    seen.add(arr[i]);
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (const p of distinctPerms(rest)) out.push([arr[i], ...p]);
  }
  return out;
}
function countItems(arr) {
  const c = {};
  for (const x of arr) c[x] = (c[x] || 0) + 1;
  return c;
}
function multinomial(arr) {
  const c = countItems(arr);
  let r = factorial(arr.length);
  for (const k of Object.values(c)) r /= factorial(k);
  return r;
}
function removeOne(arr, x) {
  const i = arr.indexOf(x);
  return [...arr.slice(0, i), ...arr.slice(i + 1)];
}
function assignSourceIndices(outcome, source) {
  const used = new Array(source.length).fill(false);
  const out = [];
  for (const itemId of outcome) {
    let found = -1;
    for (let i = 0; i < source.length; i++) {
      if (!used[i] && source[i] === itemId) { found = i; break; }
    }
    if (found >= 0) { used[found] = true; out.push(found); }
    else out.push(-1);
  }
  return out;
}

function ball(key, item, cx, cy, r, opacity = 1) {
  const fontSize = Math.max(8, r * 0.5);
  return `<g${opacity !== 1 ? ` opacity="${opacity}"` : ''}>` +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#pwi-${key}-g${item.id})"/>` +
    `<text x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="central" fill="#fff" ` +
    `font-size="${fontSize}" font-weight="700" font-family="${MONO}">${item.id + 1}</text></g>`;
}

// phase: 'idle' | 'building' | 'done'; build: { outcomeIdx, completedCount, slotsFilled, flying }
function freeze(key, msId, phase, build) {
  const multisetIds = MULTISETS[msId];
  const nTotal = multisetIds.length;
  const numDistinct = Math.max(...multisetIds) + 1;
  const items = ALL_ITEMS.slice(0, numDistinct);
  const outcomes = distinctPerms(multisetIds);
  const totalCount = outcomes.length;

  const distinctFirsts = [];
  { const seen = new Set(); for (const id of multisetIds) if (!seen.has(id)) { seen.add(id); distinctFirsts.push(id); } }
  const groupSizes = distinctFirsts.map(id => multinomial(removeOne(multisetIds, id)));

  // layout (ported verbatim, per-group blocks)
  const cfg = CARD_CFG[msId];
  const MINI_R = cfg.MINI_R, MINI_SP = MINI_R * 2 + 3;
  const CARD_PAD_X = 8;
  const CARD_W = CARD_PAD_X * 2 + nTotal * MINI_SP;
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
    const rows = Math.ceil(sz / cols);
    const blockH = rows * (CARD_H + CARD_GAP_Y) - CARD_GAP_Y;
    return { blockH, rowH: Math.max(ROW_H_MIN, blockH + 2 * TOP_PAD) };
  });

  const srcStartX = (SVG_W - (nTotal - 1) * SRC_SP) / 2;
  const srcPos = multisetIds.map((_, i) => ({ x: srcStartX + i * SRC_SP, y: SRC_Y }));
  const buildY = SRC_Y + BUILD_Y_OFFSET;
  const buildStartX = (SVG_W - (nTotal - 1) * BUILD_SP) / 2;
  const buildPos = Array.from({ length: nTotal }, (_, i) => ({ x: buildStartX + i * BUILD_SP, y: buildY }));
  const resultsTop = buildY + BUILD_R + RESULTS_TOP_OFFSET;

  const completed = phase === 'done'
    ? outcomes
    : phase === 'building' ? outcomes.slice(0, build.completedCount) : [];
  const currentOutcome = phase === 'building' ? outcomes[build.outcomeIdx] : [];
  const slotsFilled = phase === 'building' ? build.slotsFilled : 0;
  const flyingSlotIdx = phase === 'building' && build.flying ? slotsFilled : -1;

  const sourceAssignment = assignSourceIndices(currentOutcome, multisetIds);
  const dimmedSrcIdx = new Set();
  for (let i = 0; i < slotsFilled; i++) if (sourceAssignment[i] >= 0) dimmedSrcIdx.add(sourceAssignment[i]);
  if (flyingSlotIdx >= 0 && sourceAssignment[flyingSlotIdx] >= 0) dimmedSrcIdx.add(sourceAssignment[flyingSlotIdx]);

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

  const counts = countItems(multisetIds);
  const denomTermsAll = Object.values(counts).map(c => `${c}!`).join(' · ');
  const formulaShort = `${nTotal}!/(${denomTermsAll}) = ${totalCount}`;
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
    defs += `<radialGradient id="pwi-${key}-g${it.id}" cx="35%" cy="35%" r="65%">` +
      `<stop offset="0%" stop-color="${lighten(it.color, 45)}"/>` +
      `<stop offset="60%" stop-color="${it.color}"/>` +
      `<stop offset="100%" stop-color="${darken(it.color, 25)}"/>` +
      `</radialGradient>`;
  }
  defs += '</defs>';

  let s = '';
  s += `<text x="${SVG_W - PAD}" y="26" text-anchor="end" fill="${C.accentDeep}" font-size="12" font-weight="600" font-family="${MONO}">${formulaShort}</text>`;
  s += `<text x="${SVG_W - PAD}" y="44" text-anchor="end" fill="${C.highlight}" font-size="11" font-weight="600" font-family="${MONO}">${statusText}</text>`;
  s += `<text x="${PAD}" y="${SRC_Y - SRC_R - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">SOURCE — MULTISET ${msId} (n = ${nTotal})</text>`;
  multisetIds.forEach((id, i) => {
    s += ball(key, ALL_ITEMS[id], srcPos[i].x, srcPos[i].y, SRC_R, dimmedSrcIdx.has(i) ? 0.22 : 1);
  });
  s += `<text x="${PAD}" y="${buildY - BUILD_R - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">BUILD AREA</text>`;
  buildPos.forEach((p, i) => {
    s += `<circle cx="${p.x}" cy="${p.y}" r="${BUILD_R + 3}" fill="none" stroke="${C.borderStrong}" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.45"/>`;
    s += `<text x="${p.x}" y="${p.y + BUILD_R + 18}" text-anchor="middle" fill="${C.textFaint}" font-size="9" font-family="${MONO}">#${i + 1}</text>`;
  });
  for (let i = 0; i < slotsFilled; i++) {
    s += ball(key, ALL_ITEMS[currentOutcome[i]], buildPos[i].x, buildPos[i].y, BUILD_R);
  }
  if (flyingSlotIdx >= 0) {
    const srcIdx = sourceAssignment[flyingSlotIdx];
    const sp = srcPos[srcIdx], tp = buildPos[flyingSlotIdx];
    const colorId = multisetIds[srcIdx];
    s += `<line x1="${sp.x}" y1="${sp.y + SRC_R + 2}" x2="${tp.x}" y2="${tp.y - BUILD_R - 2}" stroke="${ALL_ITEMS[colorId].color}" stroke-width="2" stroke-dasharray="5 4" opacity="0.7"/>`;
    const mx = sp.x + (tp.x - sp.x) * 0.55, my = sp.y + (tp.y - sp.y) * 0.55;
    s += ball(key, ALL_ITEMS[colorId], mx, my, BUILD_R);
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
    s += `<circle cx="${avX}" cy="${avY}" r="13" fill="url(#pwi-${key}-g${stepItem.id})"/>`;
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
    `aria-label="Multiset permutation visualizer, ${msId}, ${phase}">` +
    defs +
    `<rect width="${SVG_W}" height="${svgH}" fill="#ffffff" stroke="${C.border}" stroke-width="1" rx="14"/>` +
    s +
    `</svg>`
  );
}

const permutationWithIdenticalDiagrams = {
  idle: freeze('idle', 'AAB', 'idle'),
  // second arrangement (A B A) under way: A landed in #1, B mid-flight to #2 -
  // note only the LEFT A dims; its identical twin stays bright (positional dimming)
  building: freeze('building', 'AAB', 'building', {
    outcomeIdx: 1, completedCount: 1, slotsFilled: 1, flying: true,
  }),
  mAAB: freeze('mAAB', 'AAB', 'done'),
  mAAAB: freeze('mAAAB', 'AAAB', 'done'),
  mAABB: freeze('mAABB', 'AABB', 'done'),
  mAABC: freeze('mAABC', 'AABC', 'done'),
  mAAABB: freeze('mAAABB', 'AAABB', 'done'),
  mAABBC: freeze('mAABBC', 'AABBC', 'done'),
};

export default permutationWithIdenticalDiagrams;
