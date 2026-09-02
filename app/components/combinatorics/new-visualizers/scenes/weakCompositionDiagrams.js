// Frozen-state SVGs for the Weak Composition tool (Line 1 anchor mesh).
// Ports scenes/WeakComposition.jsx (v2) + shared.jsx verbatim: the holding
// row of accent bars, the numbered n+k-1 cell strip with pre-placed identical
// red items, cell-only alternating bin bands (blue/amber), progressive
// underbrackets with xi labels (? until the deciding bar lands), the dual
// composition <-> bar-positions readouts, the tinted formula card, and
// x1-grouped rows of mini strip cards. Balls mode only. Ids are state-scoped.

const STAR_ITEM = { id: 0, color: '#ef4444' };
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
const SUBS = ['₁', '₂', '₃', '₄', '₅'];

const SVG_W = 720, PAD = 30;
const HOLD_Y = 64, HOLD_BAR_H = 38, HOLD_BAR_W = 7, HOLD_BAR_SP = 50;
const STRIP_CY = 200, CELL_W = 48, CELL_H = 56, CELL_GAP = 4;
const BALL_R = 16, BAR_BUILD_H = 38, BAR_BUILD_W = 7;
const BRACKET_LINE_OFF = 14, BRACKET_LABEL_OFF = 36;
const READOUT_Y_OFFSET = 66, FORMULA_CARD_OFFSET = 108, FORMULA_CARD_H = 54;
const RESULTS_TOP_OFFSET = 188;
const ROW_H_MIN = 140;
const BAR_FILL = C.accent;

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
function binomial(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}
function weakCompositions(n, k) {
  if (k === 1) return [[n]];
  const out = [];
  for (let j = 0; j <= n; j++) {
    for (const rest of weakCompositions(n - j, k - 1)) out.push([j, ...rest]);
  }
  return out;
}
function barPositionsFromComp(comp) {
  const positions = [];
  let acc = 0;
  for (let i = 0; i < comp.length - 1; i++) {
    acc += comp[i];
    positions.push(acc + i);
  }
  return positions;
}

function star(key, cx, cy, r) {
  const fontSize = Math.max(8, r * 0.5);
  return `<g><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#wcp-${key}-g0)"/>` +
    `<text x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="central" fill="#fff" ` +
    `font-size="${fontSize}" font-weight="700" font-family="${MONO}">1</text></g>`;
}
function bar(cx, cy, h, w, opacity = 1) {
  return `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="2" fill="${BAR_FILL}"${opacity !== 1 ? ` opacity="${opacity}"` : ''}/>`;
}

function freeze(key, n, k, phase, build) {
  const numSymbols = n + k - 1;
  const numBars = k - 1;
  const outcomes = weakCompositions(n, k);
  const totalCount = outcomes.length;
  const distinctFirsts = Array.from({ length: n + 1 }, (_, j) => j);
  const groupSizes = distinctFirsts.map(j => binomial(n - j + k - 2, k - 2));

  const stripW = numSymbols * (CELL_W + CELL_GAP) - CELL_GAP;
  const stripX0 = (SVG_W - stripW) / 2;
  const cellTop = STRIP_CY - CELL_H / 2;
  const cellBottom = STRIP_CY + CELL_H / 2;
  const cellX = c => stripX0 + c * (CELL_W + CELL_GAP) + CELL_W / 2;
  const bracketLineY = cellBottom + BRACKET_LINE_OFF;
  const bracketLabelY = cellBottom + BRACKET_LABEL_OFF;
  const compReadoutY = cellBottom + READOUT_Y_OFFSET;
  const formulaCardTop = cellBottom + FORMULA_CARD_OFFSET;
  const resultsTop = cellBottom + RESULTS_TOP_OFFSET;

  const holdStartX = (SVG_W - (numBars - 1) * HOLD_BAR_SP) / 2;
  const holdPos = Array.from({ length: numBars }, (_, i) => ({
    x: numBars > 1 ? holdStartX + i * HOLD_BAR_SP : SVG_W / 2, y: HOLD_Y,
  }));

  const completed = phase === 'done'
    ? outcomes
    : phase === 'building' ? outcomes.slice(0, build.completedCount) : [];
  const outcomeIdx = phase === 'done'
    ? outcomes.length - 1
    : phase === 'building' ? build.outcomeIdx : 0;
  const slotsFilled = phase === 'done'
    ? numBars
    : phase === 'building' ? build.slotsFilled : 0;
  const flyingBarIdx = phase === 'building' && build.flying ? slotsFilled : -1;

  const currentComp = outcomes[outcomeIdx];
  const currentBars = barPositionsFromComp(currentComp);
  const placedCells = currentBars.slice(0, slotsFilled);
  const placedSet = new Set(placedCells);
  const barSet = new Set(currentBars);
  const partKnown = i => slotsFilled >= Math.min(i + 1, k - 1);

  // bin render info (cell-only extents)
  const binInfo = [];
  {
    const cellXOf = c => cellX(c);
    let prevBar = -1;
    for (const b of currentBars) {
      const firstCell = prevBar + 1, lastCell = b - 1;
      if (firstCell <= lastCell) {
        const xLeft = stripX0 + firstCell * (CELL_W + CELL_GAP);
        const xRight = stripX0 + lastCell * (CELL_W + CELL_GAP) + CELL_W;
        binInfo.push({ isEmpty: false, xLeft, xRight, midX: (xLeft + xRight) / 2 });
      } else {
        const midX = prevBar === -1 ? cellXOf(b) - 16 : (cellXOf(prevBar) + cellXOf(b)) / 2;
        binInfo.push({ isEmpty: true, midX });
      }
      prevBar = b;
    }
    const firstCell = prevBar + 1, lastCell = numSymbols - 1;
    if (firstCell <= lastCell) {
      const xLeft = stripX0 + firstCell * (CELL_W + CELL_GAP);
      const xRight = stripX0 + lastCell * (CELL_W + CELL_GAP) + CELL_W;
      binInfo.push({ isEmpty: false, xLeft, xRight, midX: (xLeft + xRight) / 2 });
    } else {
      binInfo.push({ isEmpty: true, midX: prevBar >= 0 ? cellXOf(prevBar) + 16 : 0 });
    }
  }

  // mini card layout
  let MINI_CW;
  if (numSymbols <= 4) MINI_CW = 22;
  else if (numSymbols <= 5) MINI_CW = 19;
  else if (numSymbols <= 6) MINI_CW = 16;
  else if (numSymbols <= 7) MINI_CW = 14;
  else MINI_CW = 12;
  const MINI_CH = Math.round(MINI_CW * 1.1);
  const MINI_GAP = 2;
  const MINI_BALL_R = Math.max(4, Math.round(MINI_CW * 0.42));
  const MINI_BAR_H = Math.round(MINI_CH * 0.72);
  const MINI_BAR_W = Math.max(2, Math.round(MINI_CW * 0.20));
  const CARD_PAD_X = 6, CARD_PAD_TOP = 5, READOUT_H = 12;
  const CARD_W = CARD_PAD_X * 2 + numSymbols * (MINI_CW + MINI_GAP) - MINI_GAP;
  const CARD_H = CARD_PAD_TOP * 2 + MINI_CH + 2 + READOUT_H;
  const CARD_GAP_X = 6, CARD_GAP_Y = 6;
  const GRP_LBL_W = 36, ACCENT_W = 3;
  const GRP_LEFT_M = PAD + GRP_LBL_W + ACCENT_W + 8;
  const availW = SVG_W - GRP_LEFT_M - PAD;
  const cols = Math.max(1, Math.floor((availW + CARD_GAP_X) / (CARD_W + CARD_GAP_X)));
  const TOP_PAD = 14;
  const groupBlocks = groupSizes.map(sz => {
    const rows = Math.max(1, Math.ceil(sz / cols));
    const blockH = rows * (CARD_H + CARD_GAP_Y) - CARD_GAP_Y;
    return { blockH, rowH: Math.max(ROW_H_MIN, blockH + 2 * TOP_PAD) };
  });

  const visibleSteps = [];
  distinctFirsts.forEach((firstVal, gi) => {
    const kd = completed.filter(o => o[0] === firstVal).length;
    const isCurrent = phase === 'building' && currentComp[0] === firstVal;
    if (phase === 'done' || kd > 0 || isCurrent) visibleSteps.push(gi);
  });
  const offsets = [];
  let acc2 = 0;
  for (const gi of visibleSteps) { offsets.push(acc2); acc2 += groupBlocks[gi].rowH + 8; }
  const svgH = resultsTop + Math.max(0, acc2 - 8) + 24;

  const formulaShort = `C(${n + k - 1}, ${k - 1}) = ${totalCount}`;
  const formulaFull =
    `C(${n + k - 1}, ${k - 1}) = ${n + k - 1}!/(${k - 1}! · ${n}!)` +
    ` = ${factorial(n + k - 1)}/(${factorial(k - 1)}·${factorial(n)}) = ${totalCount}`;
  let statusText;
  if (phase === 'done') statusText = `Complete · ${totalCount} / ${totalCount}`;
  else if (phase === 'idle') statusText = 'Press Play or Step to begin';
  else {
    const kd = completed.filter(o => o[0] === currentComp[0]).length;
    statusText = `x₁ = ${currentComp[0]}: ${kd} / ${groupSizes[currentComp[0]]}`;
  }

  const bandColors = ['rgba(59,130,246,0.22)', 'rgba(245,158,11,0.22)'];
  const frameColors = [C.accent, C.highlight];

  let defs = `<defs><radialGradient id="wcp-${key}-g0" cx="35%" cy="35%" r="65%">` +
    `<stop offset="0%" stop-color="${lighten(STAR_ITEM.color, 45)}"/>` +
    `<stop offset="60%" stop-color="${STAR_ITEM.color}"/>` +
    `<stop offset="100%" stop-color="${darken(STAR_ITEM.color, 25)}"/>` +
    `</radialGradient></defs>`;

  let s = '';
  s += `<text x="${SVG_W - PAD}" y="26" text-anchor="end" fill="${C.accentDeep}" font-size="12" font-weight="600" font-family="${MONO}">${formulaShort}</text>`;
  s += `<text x="${SVG_W - PAD}" y="44" text-anchor="end" fill="${C.highlight}" font-size="11" font-weight="600" font-family="${MONO}">${statusText}</text>`;
  s += `<text x="${PAD}" y="${HOLD_Y - HOLD_BAR_H / 2 - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">BARS TO PLACE (k − 1 = ${numBars})</text>`;
  holdPos.forEach((p, i) => {
    const dim = i < slotsFilled || i === flyingBarIdx;
    s += bar(p.x, p.y, HOLD_BAR_H, HOLD_BAR_W, dim ? 0.22 : 1);
  });
  s += `<text x="${PAD}" y="${cellTop - 22}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">STRIP (n + k − 1 = ${numSymbols} cells)</text>`;
  for (let c = 0; c < numSymbols; c++) {
    const landed = placedSet.has(c);
    s += `<text x="${cellX(c)}" y="${cellTop - 6}" text-anchor="middle" font-size="${landed ? 12 : 11}" font-weight="${landed ? 700 : 500}" font-family="${MONO}" fill="${landed ? C.accentDeep : C.textFaint}">${c + 1}</text>`;
  }
  binInfo.forEach((b, i) => {
    if (b.isEmpty) return;
    s += `<rect x="${b.xLeft - 2}" y="${cellTop - 2}" width="${b.xRight - b.xLeft + 4}" height="${CELL_H + 4}" rx="6" fill="${bandColors[i % 2]}"/>`;
    s += `<rect x="${b.xLeft - 2}" y="${cellTop - 2}" width="${b.xRight - b.xLeft + 4}" height="${CELL_H + 4}" rx="6" fill="none" stroke="${frameColors[i % 2]}" stroke-width="1.5"/>`;
  });
  for (let c = 0; c < numSymbols; c++) {
    s += `<rect x="${stripX0 + c * (CELL_W + CELL_GAP)}" y="${cellTop}" width="${CELL_W}" height="${CELL_H}" rx="6" fill="none" stroke="${C.borderStrong}" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/>`;
  }
  for (let c = 0; c < numSymbols; c++) {
    if (!barSet.has(c)) s += star(key, cellX(c), STRIP_CY, BALL_R);
  }
  placedCells.forEach(c => { s += bar(cellX(c), STRIP_CY, BAR_BUILD_H, BAR_BUILD_W); });
  if (flyingBarIdx >= 0 && currentBars[flyingBarIdx] !== undefined) {
    const targetC = currentBars[flyingBarIdx];
    const sp = holdPos[flyingBarIdx];
    const tx = cellX(targetC);
    s += `<line x1="${sp.x}" y1="${sp.y + HOLD_BAR_H / 2 + 4}" x2="${tx}" y2="${STRIP_CY - BAR_BUILD_H / 2 - 4}" stroke="${BAR_FILL}" stroke-width="2" stroke-dasharray="5 4" opacity="0.6"/>`;
    const mx = sp.x + (tx - sp.x) * 0.55, my = sp.y + (STRIP_CY - sp.y) * 0.55;
    s += bar(mx, my, BAR_BUILD_H, BAR_BUILD_W);
  }
  binInfo.forEach((b, i) => {
    const known = partKnown(i);
    const labelText = `x${SUBS[i]} = ${known ? currentComp[i] : '?'}`;
    const labelFill = known ? C.accentDeep : C.textFaint;
    if (!b.isEmpty) {
      s += `<line x1="${b.xLeft + 4}" y1="${bracketLineY}" x2="${b.xRight - 4}" y2="${bracketLineY}" stroke="${C.borderStrong}" stroke-width="1.5"/>`;
      s += `<line x1="${b.xLeft + 4}" y1="${bracketLineY}" x2="${b.xLeft + 4}" y2="${bracketLineY - 4}" stroke="${C.borderStrong}" stroke-width="1.5"/>`;
      s += `<line x1="${b.xRight - 4}" y1="${bracketLineY}" x2="${b.xRight - 4}" y2="${bracketLineY - 4}" stroke="${C.borderStrong}" stroke-width="1.5"/>`;
    } else {
      s += `<rect x="${b.midX - 7}" y="${bracketLineY - 6}" width="14" height="12" rx="3" fill="none" stroke="${C.textFaint}" stroke-width="1" stroke-dasharray="2 2"/>`;
    }
    s += `<text x="${b.midX}" y="${bracketLabelY}" text-anchor="middle" font-size="12" font-weight="700" font-family="${MONO}" fill="${labelFill}">${labelText}</text>`;
  });

  // dual readouts + connector
  let compParts = `<tspan fill="${C.textDim}">composition: (</tspan>`;
  currentComp.forEach((v, i) => {
    const known = partKnown(i);
    if (i > 0) compParts += `<tspan fill="${C.textDim}">, </tspan>`;
    compParts += `<tspan fill="${known ? C.accentDeep : C.textFaint}">${known ? v : '?'}</tspan>`;
  });
  compParts += `<tspan fill="${C.textDim}">)</tspan>`;
  s += `<text x="${SVG_W / 2 - 110}" y="${compReadoutY}" text-anchor="middle" font-size="13" font-weight="700" font-family="${MONO}" fill="${C.text}">${compParts}</text>`;
  s += `<text x="${SVG_W / 2}" y="${compReadoutY}" text-anchor="middle" font-size="14" font-weight="700" fill="${C.textFaint}">⇔</text>`;
  let barParts = `<tspan fill="${C.textDim}">bar positions: {</tspan>`;
  for (let i = 0; i < numBars; i++) {
    const known = slotsFilled > i;
    if (i > 0) barParts += `<tspan fill="${C.textDim}">, </tspan>`;
    barParts += `<tspan fill="${known ? C.accentDeep : C.textFaint}">${known ? currentBars[i] + 1 : '?'}</tspan>`;
  }
  barParts += `<tspan fill="${C.textDim}">}</tspan>`;
  s += `<text x="${SVG_W / 2 + 110}" y="${compReadoutY}" text-anchor="middle" font-size="13" font-weight="700" font-family="${MONO}" fill="${C.text}">${barParts}</text>`;

  s += `<rect x="${PAD + 30}" y="${formulaCardTop}" width="${SVG_W - 2 * (PAD + 30)}" height="${FORMULA_CARD_H}" rx="8" fill="${C.surfaceTint}" stroke="${C.accentLight}" stroke-width="1.5"/>`;
  s += `<text x="${SVG_W / 2}" y="${formulaCardTop + 18}" text-anchor="middle" font-size="11" font-weight="600" fill="${C.textDim}" font-family="${MONO}">Choose k − 1 = ${k - 1} bar positions out of n + k − 1 = ${n + k - 1} cells:</text>`;
  s += `<text x="${SVG_W / 2}" y="${formulaCardTop + 40}" text-anchor="middle" font-size="13" font-weight="700" fill="${C.accentDeep}" font-family="${MONO}">${formulaFull}</text>`;

  if (visibleSteps.length > 0) {
    s += `<text x="${PAD}" y="${resultsTop - 14}" fill="${C.textDim}" font-size="10" font-weight="600" font-family="${MONO}" letter-spacing="2">COMPLETED</text>`;
    s += `<text x="${SVG_W - PAD}" y="${resultsTop - 14}" text-anchor="end" fill="${C.accent}" font-size="11" font-weight="600" font-family="${MONO}">${completed.length} / ${totalCount}</text>`;
  }
  visibleSteps.forEach((gi, vi) => {
    const firstVal = distinctFirsts[gi];
    const block = groupBlocks[gi];
    const rowY = resultsTop + offsets[vi];
    const cards = completed.filter(o => o[0] === firstVal);
    const cardsStartY = rowY + (block.rowH - block.blockH) / 2;
    const avX = PAD + GRP_LBL_W / 2;
    const avY = cardsStartY + block.blockH / 2;

    s += `<rect x="${GRP_LEFT_M - 8}" y="${rowY}" width="${SVG_W - GRP_LEFT_M - PAD + 16}" height="${block.rowH}" rx="10" fill="rgba(59,130,246,0.05)"/>`;
    s += `<rect x="${PAD + GRP_LBL_W + 2}" y="${rowY + 8}" width="${ACCENT_W}" height="${block.rowH - 16}" rx="1.5" fill="${C.accent}" opacity="0.9"/>`;
    s += `<text x="${avX}" y="${avY - 6}" text-anchor="middle" dominant-baseline="central" fill="${C.textDim}" font-size="9" font-weight="600" font-family="${MONO}">x₁ =</text>`;
    s += `<text x="${avX}" y="${avY + 10}" text-anchor="middle" dominant-baseline="central" fill="${C.accentDeep}" font-size="16" font-weight="700" font-family="${MONO}">${firstVal}</text>`;

    cards.forEach((comp, ci) => {
      const col = ci % cols, row = Math.floor(ci / cols);
      const cx = GRP_LEFT_M + col * (CARD_W + CARD_GAP_X);
      const cy = cardsStartY + row * (CARD_H + CARD_GAP_Y);
      const compBars = new Set(barPositionsFromComp(comp));
      const stripCY = cy + CARD_PAD_TOP + MINI_CH / 2;
      s += `<rect x="${cx}" y="${cy}" width="${CARD_W}" height="${CARD_H}" rx="5" fill="#ffffff" stroke="${C.border}" stroke-width="1"/>`;
      for (let c = 0; c < numSymbols; c++) {
        const ccx = cx + CARD_PAD_X + c * (MINI_CW + MINI_GAP) + MINI_CW / 2;
        if (compBars.has(c)) {
          s += `<rect x="${ccx - MINI_BAR_W / 2}" y="${stripCY - MINI_BAR_H / 2}" width="${MINI_BAR_W}" height="${MINI_BAR_H}" rx="1" fill="${BAR_FILL}"/>`;
        } else {
          s += star(key, ccx, stripCY, MINI_BALL_R);
        }
      }
      s += `<text x="${cx + CARD_W / 2}" y="${cy + CARD_H - 4}" text-anchor="middle" font-size="9" font-weight="600" font-family="${MONO}" fill="${C.textDim}">(${comp.join(', ')})</text>`;
    });
  });

  return (
    `<svg viewBox="0 0 ${SVG_W} ${svgH}" width="460" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Weak composition visualizer, C(${n + k - 1}, ${k - 1}), ${phase}">` +
    defs +
    `<rect width="${SVG_W}" height="${svgH}" fill="#ffffff" stroke="${C.border}" stroke-width="1" rx="14"/>` +
    s +
    `</svg>`
  );
}

const weakCompositionDiagrams = {
  idle: freeze('idle', 4, 3, 'idle'),
  // second composition (0, 1, 3) under way: first bar landed at cell 1,
  // second bar mid-flight to cell 3; bracket labels reveal progressively
  building: freeze('building', 4, 3, 'building', {
    outcomeIdx: 1, completedCount: 1, slotsFilled: 1, flying: true,
  }),
  default43: freeze('default43', 4, 3, 'done'),   // C(6,2) = 15, groups 5+4+3+2+1
  twoBins: freeze('twoBins', 4, 2, 'done'),       // C(5,1) = 5: one bar, five doors
  big54: freeze('big54', 5, 4, 'done'),           // C(8,3) = 56: the largest run
};

export default weakCompositionDiagrams;
