// Frozen-state SVGs for the Full Permutation tool (Line 1 anchor mesh).
// Ports scenes/FullPermutation.jsx + shared.jsx verbatim: same ALL_ITEMS
// palette with radial-gradient balls (lighten 45 / base / darken 25), same
// geometry constants (SVG_W 720, SRC_Y 56, SRC_SP 80, SRC_R 26, BUILD_SP 70,
// BUILD_Y_OFFSET 130, RESULTS_TOP_OFFSET 64), same per-n card layout
// (CARD_CFG: n3 -> MINI_R 18 / 2 cols, n4 -> 18 / 3 cols, n5 -> 10 / computed),
// same group rows (tint 0.08 background, color accent stripe, avatar r13) and
// the same permsAll enumeration order. Balls mode only (the tool's default).
// Gradient ids are state-scoped - several SVGs share one page.

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
const CARD_CFG = {
  3: { MINI_R: 18, cols: 2 },
  4: { MINI_R: 18, cols: 3 },
  5: { MINI_R: 10, cols: null },
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
function permsAll(arr) {
  if (arr.length <= 1) return [arr];
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (const p of permsAll(rest)) out.push([arr[i], ...p]);
  }
  return out;
}

function ball(key, item, cx, cy, r, opacity = 1) {
  const fontSize = Math.max(8, r * 0.5);
  return `<g${opacity !== 1 ? ` opacity="${opacity}"` : ''}>` +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#fp-${key}-g${item.id})"/>` +
    `<text x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="central" fill="#fff" ` +
    `font-size="${fontSize}" font-weight="700" font-family="${MONO}">${item.id + 1}</text></g>`;
}

// state: { n, phase: 'idle' | 'building' | 'done', build?: {...} }
function freeze(key, n, phase, build) {
  const items = ALL_ITEMS.slice(0, n);
  const outcomes = permsAll(items.map(i => i.id));
  const outcomesPerGroup = factorial(n - 1);

  // layout (ported verbatim)
  const cfg = CARD_CFG[n] || CARD_CFG[5];
  const MINI_R = cfg.MINI_R;
  const MINI_SP = MINI_R * 2 + 3;
  const CARD_PAD_X = 8;
  const CARD_W = CARD_PAD_X * 2 + n * MINI_SP;
  const CARD_H = 12 + MINI_R * 2;
  const CARD_GAP_X = 6, CARD_GAP_Y = 6;
  const GRP_LBL_W = 36, ACCENT_W = 3;
  const GRP_LEFT_M = PAD + GRP_LBL_W + ACCENT_W + 8;
  const availW = SVG_W - GRP_LEFT_M - PAD;
  const cols = cfg.cols != null
    ? cfg.cols
    : Math.max(1, Math.floor((availW + CARD_GAP_X) / (CARD_W + CARD_GAP_X)));
  const rowsPerGroup = Math.ceil(outcomesPerGroup / cols);
  const TOP_PAD = 14;
  const fullCardsBlockH = rowsPerGroup * (CARD_H + CARD_GAP_Y) - CARD_GAP_Y;
  const ROW_H = Math.max(ROW_H_MIN, fullCardsBlockH + 2 * TOP_PAD);

  const srcStartX = (SVG_W - (items.length - 1) * SRC_SP) / 2;
  const srcPos = items.map((_, i) => ({ x: srcStartX + i * SRC_SP, y: SRC_Y }));
  const buildY = SRC_Y + BUILD_Y_OFFSET;
  const buildStartX = (SVG_W - (n - 1) * BUILD_SP) / 2;
  const buildPos = Array.from({ length: n }, (_, i) => ({ x: buildStartX + i * BUILD_SP, y: buildY }));
  const resultsTop = buildY + BUILD_R + RESULTS_TOP_OFFSET;

  // per-phase state
  const completed = phase === 'done'
    ? outcomes
    : phase === 'building' ? outcomes.slice(0, build.completedCount) : [];
  const currentOutcome = phase === 'building' ? outcomes[build.outcomeIdx] : [];
  const slotsFilled = phase === 'building' ? build.slotsFilled : 0;
  const flyingSlotIdx = phase === 'building' && build.flying ? slotsFilled : -1;

  const dimmed = new Set();
  for (let i = 0; i < slotsFilled; i++) dimmed.add(currentOutcome[i]);
  if (flyingSlotIdx >= 0) dimmed.add(currentOutcome[flyingSlotIdx]);

  // step statuses / visible groups
  const visibleSteps = [];
  for (let i = 0; i < n; i++) {
    const k = completed.filter(o => o[0] === i).length;
    const isCurrent = phase === 'building' && currentOutcome[0] === i;
    if (phase === 'done' || k > 0 || isCurrent) visibleSteps.push(i);
  }

  const svgH = resultsTop +
    visibleSteps.length * (ROW_H + 8) - (visibleSteps.length > 0 ? 8 : 0) + 24;

  const formulaShort = `P(${n}) = ${n}! = ${outcomes.length}`;
  let statusText;
  if (phase === 'done') statusText = `Complete · ${outcomes.length} / ${outcomes.length}`;
  else if (phase === 'idle') statusText = 'Press Play or Step to begin';
  else {
    const stepIdx = currentOutcome[0];
    const k = completed.filter(o => o[0] === stepIdx).length;
    statusText = `Step ${stepIdx + 1} (${items[stepIdx].name}): ${k} / ${outcomesPerGroup}`;
  }

  let defs = '<defs>';
  for (const it of items) {
    defs += `<radialGradient id="fp-${key}-g${it.id}" cx="35%" cy="35%" r="65%">` +
      `<stop offset="0%" stop-color="${lighten(it.color, 45)}"/>` +
      `<stop offset="60%" stop-color="${it.color}"/>` +
      `<stop offset="100%" stop-color="${darken(it.color, 25)}"/>` +
      `</radialGradient>`;
  }
  defs += '</defs>';

  let s = '';
  // header texts
  s += `<text x="${SVG_W - PAD}" y="26" text-anchor="end" fill="${C.accentDeep}" font-size="12" font-weight="600" font-family="${MONO}">${formulaShort}</text>`;
  s += `<text x="${SVG_W - PAD}" y="44" text-anchor="end" fill="${C.highlight}" font-size="11" font-weight="600" font-family="${MONO}">${statusText}</text>`;

  // source row
  s += `<text x="${PAD}" y="${SRC_Y - SRC_R - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">SOURCE (n = ${n})</text>`;
  items.forEach((it, i) => {
    s += ball(key, it, srcPos[i].x, srcPos[i].y, SRC_R, dimmed.has(it.id) ? 0.22 : 1);
  });

  // build area
  s += `<text x="${PAD}" y="${buildY - BUILD_R - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">BUILD AREA</text>`;
  buildPos.forEach((p, i) => {
    s += `<circle cx="${p.x}" cy="${p.y}" r="${BUILD_R + 3}" fill="none" stroke="${C.borderStrong}" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.45"/>`;
    s += `<text x="${p.x}" y="${p.y + BUILD_R + 18}" text-anchor="middle" fill="${C.textFaint}" font-size="9" font-family="${MONO}">#${i + 1}</text>`;
  });

  // landed balls + flying ball with its dotted guide (frozen mid-flight)
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

  // completed section
  if (visibleSteps.length > 0) {
    s += `<text x="${PAD}" y="${resultsTop - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">COMPLETED</text>`;
    s += `<text x="${SVG_W - PAD}" y="${resultsTop - 14}" text-anchor="end" fill="${C.accent}" font-size="11" font-weight="600" font-family="${MONO}">${completed.length} / ${outcomes.length}</text>`;
  }
  visibleSteps.forEach((stepIdx, vi) => {
    const stepItem = ALL_ITEMS[stepIdx];
    const rowY = resultsTop + vi * (ROW_H + 8);
    const cards = completed.filter(o => o[0] === stepIdx);
    const cardsStartY = rowY + (ROW_H - fullCardsBlockH) / 2;
    const avX = PAD + GRP_LBL_W / 2;
    const avY = cardsStartY + fullCardsBlockH / 2;

    s += `<rect x="${GRP_LEFT_M - 8}" y="${rowY}" width="${SVG_W - GRP_LEFT_M - PAD + 16}" height="${ROW_H}" rx="10" fill="${tint(stepItem.color, 0.08)}"/>`;
    s += `<rect x="${PAD + GRP_LBL_W + 2}" y="${rowY + 8}" width="${ACCENT_W}" height="${ROW_H - 16}" rx="1.5" fill="${stepItem.color}" opacity="0.9"/>`;
    s += `<circle cx="${avX}" cy="${avY}" r="13" fill="url(#fp-${key}-g${stepItem.id})"/>`;
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
    `aria-label="Full permutation visualizer, n = ${n}, ${phase}">` +
    defs +
    `<rect width="${SVG_W}" height="${svgH}" fill="#ffffff" stroke="${C.border}" stroke-width="1" rx="14"/>` +
    s +
    `</svg>`
  );
}

const fullPermutationDiagrams = {
  idle: freeze('idle', 3, 'idle'),
  // third arrangement under way: B landed in #1, A mid-flight to #2, group A complete
  building: freeze('building', 3, 'building', {
    outcomeIdx: 2, completedCount: 2, slotsFilled: 1, flying: true,
  }),
  n3: freeze('n3', 3, 'done'),
  n4: freeze('n4', 4, 'done'),
  n5: freeze('n5', 5, 'done'),
};

export default fullPermutationDiagrams;
