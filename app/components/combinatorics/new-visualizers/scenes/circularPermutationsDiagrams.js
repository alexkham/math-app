// Frozen-state SVGs for the Circular Permutation tool (Line 1 anchor mesh).
// Ports scenes/CircularPermutations.jsx + shared.jsx verbatim: same radial-
// gradient balls, same build ring geometry (R 78, ball 22, centered at
// SVG_W/2, SRC_Y + 168), the FIXED badge and solid-vs-dashed slot outlines,
// the anchor (Red, id 0) always dimmed in the source and pinned at the top,
// permsAll enumeration of the remaining n-1 items, and the mini circular
// result cards with per-n CARD_CFG. Balls mode only. Ids are state-scoped.

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
const BUILD_RING_R = 78, BUILD_BALL_R = 22;
const BUILD_CX = SVG_W / 2, BUILD_CY = SRC_Y + 168;
const RESULTS_TOP_OFFSET = 60, CARD_GAP = 10, RESULTS_BOTTOM_PAD = 24;
const CARD_CFG = {
  3: { CARD_SIZE: 110, BALL_R: 14, cols: 2 },
  4: { CARD_SIZE: 90, BALL_R: 12, cols: 3 },
  5: { CARD_SIZE: 72, BALL_R: 9, cols: 6 },
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
function factorial(n) { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; }
function permsAll(arr) {
  if (arr.length <= 1) return [arr];
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (const p of permsAll(rest)) out.push([arr[i], ...p]);
  }
  return out;
}
function ringPos(cx, cy, ringR, i, total) {
  const angle = -Math.PI / 2 + (2 * Math.PI * i) / total;
  return { x: cx + ringR * Math.cos(angle), y: cy + ringR * Math.sin(angle) };
}

function ball(key, item, cx, cy, r, opacity = 1) {
  const fontSize = Math.max(8, r * 0.5);
  return `<g${opacity !== 1 ? ` opacity="${opacity}"` : ''}>` +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#cpm-${key}-g${item.id})"/>` +
    `<text x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="central" fill="#fff" ` +
    `font-size="${fontSize}" font-weight="700" font-family="${MONO}">${item.id + 1}</text></g>`;
}

function freeze(key, n, phase, build) {
  const items = ALL_ITEMS.slice(0, n);
  const fixedItem = items[0];
  const outcomes = permsAll(items.slice(1).map(i => i.id));
  const totalCount = factorial(n - 1);
  const { CARD_SIZE, BALL_R, cols } = CARD_CFG[n];
  const cardRingR = CARD_SIZE / 2 - BALL_R - 4;

  const srcStartX = (SVG_W - (n - 1) * SRC_SP) / 2;
  const srcPos = items.map((_, i) => ({ x: srcStartX + i * SRC_SP, y: SRC_Y }));
  const slotPos = Array.from({ length: n }, (_, i) => ringPos(BUILD_CX, BUILD_CY, BUILD_RING_R, i, n));

  const resultsTop = BUILD_CY + BUILD_RING_R + RESULTS_TOP_OFFSET;
  const completed = phase === 'done'
    ? outcomes
    : phase === 'building' ? outcomes.slice(0, build.completedCount) : [];
  const gridW = cols * CARD_SIZE + (cols - 1) * CARD_GAP;
  const gridStartX = (SVG_W - gridW) / 2;
  const rowsAll = Math.ceil(outcomes.length / cols);
  const svgH = resultsTop + rowsAll * CARD_SIZE + (rowsAll - 1) * CARD_GAP + RESULTS_BOTTOM_PAD;

  const currentOutcome = phase === 'building' ? outcomes[build.outcomeIdx] : [];
  const slotsFilled = phase === 'building' ? build.slotsFilled : 0;
  const flyingSlotIdx = phase === 'building' && build.flying ? slotsFilled : -1;

  const dimmed = new Set([0]);
  for (let i = 0; i < slotsFilled; i++) dimmed.add(currentOutcome[i]);
  if (flyingSlotIdx >= 0) dimmed.add(currentOutcome[flyingSlotIdx]);

  const formulaShort = `(${n}−1)! = ${totalCount}`;
  let statusText;
  if (phase === 'done') statusText = `Complete · ${totalCount} / ${totalCount}`;
  else if (phase === 'idle') statusText = 'Press Play or Step to begin';
  else statusText = `Arrangements: ${completed.length} / ${totalCount}`;

  let defs = '<defs>';
  for (const it of items) {
    defs += `<radialGradient id="cpm-${key}-g${it.id}" cx="35%" cy="35%" r="65%">` +
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

  s += `<text x="${PAD}" y="${BUILD_CY - BUILD_RING_R - BUILD_BALL_R - 4}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">BUILD RING</text>`;
  s += `<circle cx="${BUILD_CX}" cy="${BUILD_CY}" r="${BUILD_RING_R}" fill="none" stroke="${C.border}" stroke-width="1" opacity="0.5" stroke-dasharray="3 4"/>`;
  slotPos.forEach((p, i) => {
    s += `<circle cx="${p.x}" cy="${p.y}" r="${BUILD_BALL_R + 3}" fill="none" ` +
      `stroke="${i === 0 ? C.highlight : C.borderStrong}" stroke-width="${i === 0 ? 2 : 1.5}" ` +
      (i === 0 ? '' : `stroke-dasharray="5 3" `) +
      `opacity="${i === 0 ? 0.85 : 0.45}"/>`;
  });
  s += `<text x="${slotPos[0].x}" y="${slotPos[0].y - BUILD_BALL_R - 12}" text-anchor="middle" fill="${C.highlight}" font-size="9" font-weight="700" font-family="${MONO}" letter-spacing="1.5">FIXED</text>`;
  slotPos.slice(1).forEach((p, i) => {
    const dx = p.x - BUILD_CX, dy = p.y - BUILD_CY;
    const norm = Math.sqrt(dx * dx + dy * dy) || 1;
    const lx = p.x + (dx / norm) * (BUILD_BALL_R + 14);
    const ly = p.y + (dy / norm) * (BUILD_BALL_R + 14) + 3;
    s += `<text x="${lx}" y="${ly}" text-anchor="middle" fill="${C.textFaint}" font-size="9" font-family="${MONO}">#${i + 2}</text>`;
  });

  // anchor ball, landed balls, flying ball with guide
  s += ball(key, fixedItem, slotPos[0].x, slotPos[0].y, BUILD_BALL_R);
  for (let i = 0; i < slotsFilled; i++) {
    const p = slotPos[i + 1];
    s += ball(key, ALL_ITEMS[currentOutcome[i]], p.x, p.y, BUILD_BALL_R);
  }
  if (flyingSlotIdx >= 0) {
    const srcId = currentOutcome[flyingSlotIdx];
    const sp = srcPos[srcId], tp = slotPos[flyingSlotIdx + 1];
    const dx = tp.x - sp.x, dy = tp.y - sp.y;
    const norm = Math.sqrt(dx * dx + dy * dy) || 1;
    s += `<line x1="${sp.x + (dx / norm) * (SRC_R + 2)}" y1="${sp.y + (dy / norm) * (SRC_R + 2)}" ` +
      `x2="${tp.x - (dx / norm) * (BUILD_BALL_R + 2)}" y2="${tp.y - (dy / norm) * (BUILD_BALL_R + 2)}" ` +
      `stroke="${ALL_ITEMS[srcId].color}" stroke-width="2" stroke-dasharray="5 4" opacity="0.7"/>`;
    const mx = sp.x + dx * 0.55, my = sp.y + dy * 0.55;
    s += ball(key, ALL_ITEMS[srcId], mx, my, BUILD_BALL_R);
  }

  if (completed.length > 0 || phase !== 'idle') {
    s += `<text x="${PAD}" y="${resultsTop - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">COMPLETED</text>`;
    s += `<text x="${SVG_W - PAD}" y="${resultsTop - 14}" text-anchor="end" fill="${C.accent}" font-size="11" font-weight="600" font-family="${MONO}">${completed.length} / ${totalCount}</text>`;
  }
  completed.forEach((out, ci) => {
    const col = ci % cols, row = Math.floor(ci / cols);
    const x = gridStartX + col * (CARD_SIZE + CARD_GAP);
    const y = resultsTop + row * (CARD_SIZE + CARD_GAP);
    const cx = x + CARD_SIZE / 2, cy = y + CARD_SIZE / 2;
    s += `<rect x="${x}" y="${y}" width="${CARD_SIZE}" height="${CARD_SIZE}" rx="8" fill="#ffffff" stroke="${C.border}" stroke-width="1"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="${cardRingR}" fill="none" stroke="${C.border}" stroke-width="1" opacity="0.5" stroke-dasharray="2 3"/>`;
    for (let i = 0; i < n; i++) {
      const p = ringPos(cx, cy, cardRingR, i, n);
      const itm = i === 0 ? fixedItem : ALL_ITEMS[out[i - 1]];
      s += ball(key, itm, p.x, p.y, BALL_R);
    }
  });

  return (
    `<svg viewBox="0 0 ${SVG_W} ${svgH}" width="460" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Circular permutation visualizer, n = ${n}, ${phase}">` +
    defs +
    `<rect width="${SVG_W}" height="${svgH}" fill="#ffffff" stroke="${C.border}" stroke-width="1" rx="14"/>` +
    s +
    `</svg>`
  );
}

const circularPermutationsDiagrams = {
  idle: freeze('idle', 3, 'idle'),
  // second arrangement (C, B) under way: C landed in slot #2, B mid-flight to #3;
  // the anchor Red never moves and stays dimmed in the source
  building: freeze('building', 3, 'building', {
    outcomeIdx: 1, completedCount: 1, slotsFilled: 1, flying: true,
  }),
  n3: freeze('n3', 3, 'done'),   // (3-1)! = 2
  n4: freeze('n4', 4, 'done'),   // (4-1)! = 6
  n5: freeze('n5', 5, 'done'),   // (5-1)! = 24
};

export default circularPermutationsDiagrams;
