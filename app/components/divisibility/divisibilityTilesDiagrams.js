// Frozen-state SVGs for the Divisibility Tiles tool (Line 1 anchor mesh).
// Replicates app/components/divisibility/DivisibilityTiles.jsx: the blue result
// banner, the white tiles card, gray 32px tiles in rows of ten (ungrouped view),
// and the grouped view's blue group boxes (#eff6ff on #bfdbfe, 24px tiles on the
// #3b82f6->#2563eb gradient) with labels, plus the yellow leftover box (#fef9c3
// on #fbbf24, tiles #fbbf24->#f59e0b, "+r" label). Grouping math is the
// component's own: groupCount = floor(n/d), remainder = n % d, and a group box
// only forms when a full divisor's worth of tiles exists. Gradient ids are
// state-scoped - several SVGs share one page.

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif";

const W = 460;
const CARD_X = 10, CARD_W = 440;
const PAD = 24;
const INNER_X = CARD_X + PAD, INNER_W = CARD_W - 2 * PAD;   // 34, 392
const BANNER_H = 40, BANNER_Y = 10;
const CARD_Y = BANNER_Y + BANNER_H + 12;                     // 62

function defs(key) {
  const grad = (id, c1, c2) =>
    `<linearGradient id="dtl-${key}-${id}" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>` +
    `</linearGradient>`;
  return `<defs>` +
    grad('banner', '#3b82f6', '#2563eb') +
    grad('gray', '#94a3b8', '#64748b') +
    grad('blue', '#3b82f6', '#2563eb') +
    grad('yellow', '#fbbf24', '#f59e0b') +
    `<linearGradient id="dtl-${key}-bg" x1="0" y1="0" x2="0" y2="1">` +
    `<stop offset="0" stop-color="#f0f7ff"/><stop offset="1" stop-color="#e8f4fc"/>` +
    `</linearGradient></defs>`;
}

function banner(key, parts) {
  // parts: array of {t, fill?, bold?} rendered as centered tspans on the blue banner
  const spans = parts.map(p =>
    `<tspan fill="${p.fill || '#fff'}" font-weight="${p.bold ? 700 : 500}"` +
    `${p.fill ? '' : p.bold ? '' : ' opacity="0.9"'}>${p.t}</tspan>`
  ).join('');
  return (
    `<rect x="${CARD_X}" y="${BANNER_Y}" width="${CARD_W}" height="${BANNER_H}" rx="12" fill="url(#dtl-${key}-banner)"/>` +
    `<text x="${W / 2}" y="${BANNER_Y + BANNER_H / 2 + 5}" font-family="${FONT}" font-size="15" text-anchor="middle">${spans}</text>`
  );
}

function svgShell(key, label, cardH, body) {
  const H = CARD_Y + cardH + 10;
  return (
    `<svg viewBox="0 0 ${W} ${H}" width="460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">` +
    defs(key) +
    `<rect x="0" y="0" width="${W}" height="${H}" fill="url(#dtl-${key}-bg)"/>` +
    body +
    `</svg>`
  );
}

// Ungrouped view: n gray tiles, 10 per row, 32px tiles with 8px gaps
function freezeUngrouped(key, n) {
  const rows = Math.ceil(n / 10);
  const cardH = rows * 32 + (rows - 1) * 8 + 2 * PAD;
  let tiles = '';
  for (let i = 0; i < n; i++) {
    const x = INNER_X + (i % 10) * 40;
    const y = CARD_Y + PAD + Math.floor(i / 10) * 40;
    tiles += `<rect x="${x}" y="${y}" width="32" height="32" rx="6" fill="url(#dtl-${key}-gray)"/>`;
  }
  const body =
    banner(key, [{ t: n, bold: true }, { t: ` tile${n !== 1 ? 's' : ''}` }]) +
    `<rect x="${CARD_X}" y="${CARD_Y}" width="${CARD_W}" height="${cardH}" rx="16" fill="#fff" stroke="#e2e8f0" stroke-width="1"/>` +
    tiles;
  return svgShell(key, `${n} ungrouped tiles in rows of ten`, cardH, body);
}

// Grouped view: complete blue groups of `divisor` tiles plus a yellow leftover box
function freezeGrouped(key, n, divisor) {
  const groupCount = Math.floor(n / divisor);
  const remainder = n % divisor;

  // One wrapper per group box (+ one for the leftover), flex-wrap centered at gap 16
  const boxW = d => d * 24 + (d - 1) * 4 + 16;
  const wrappers = [];
  for (let g = 0; g < groupCount; g++) wrappers.push({ w: boxW(divisor), count: divisor, leftover: false });
  if (remainder > 0) wrappers.push({ w: boxW(remainder), count: remainder, leftover: true });

  // Greedy row wrap within the card's inner width, rows centered like flex justify-center
  const rows = [];
  let row = [], rowW = 0;
  for (const wr of wrappers) {
    const next = rowW === 0 ? wr.w : rowW + 16 + wr.w;
    if (row.length && next > INNER_W) { rows.push({ items: row, w: rowW }); row = [wr]; rowW = wr.w; }
    else { row.push(wr); rowW = next; }
  }
  if (row.length) rows.push({ items: row, w: rowW });

  const WRAP_H = 58;   // 40px box + 18px label zone
  const cardH = rows.length * WRAP_H + (rows.length - 1) * 16 + 2 * PAD;

  let body = '';
  rows.forEach((r, ri) => {
    let x = CARD_X + (CARD_W - r.w) / 2;
    const y = CARD_Y + PAD + ri * (WRAP_H + 16);
    for (const wr of r.items) {
      body += wr.leftover
        ? `<rect x="${x}" y="${y}" width="${wr.w}" height="40" rx="10" fill="#fef9c3" stroke="#fbbf24" stroke-width="2"/>`
        : `<rect x="${x}" y="${y}" width="${wr.w}" height="40" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2"/>`;
      for (let t = 0; t < wr.count; t++) {
        body += `<rect x="${x + 8 + t * 28}" y="${y + 8}" width="24" height="24" rx="4" ` +
          `fill="url(#dtl-${key}-${wr.leftover ? 'yellow' : 'blue'})"/>`;
      }
      body += `<text x="${x + wr.w / 2}" y="${y + 54}" font-family="${FONT}" font-size="12" font-weight="600" ` +
        `fill="${wr.leftover ? '#f59e0b' : '#3b82f6'}" text-anchor="middle">${wr.leftover ? '+' + remainder : divisor}</text>`;
      x += wr.w + 16;
    }
  });

  const bannerParts = [
    { t: groupCount, bold: true },
    { t: ` group${groupCount !== 1 ? 's' : ''} of ` },
    { t: divisor, bold: true },
  ];
  if (remainder > 0) bannerParts.push({ t: ' + ' }, { t: remainder, bold: true, fill: '#fbbf24' }, { t: ' leftover' });
  else bannerParts.push({ t: ' — Divisible ✓', fill: '#4ade80', bold: true });

  body =
    banner(key, bannerParts) +
    `<rect x="${CARD_X}" y="${CARD_Y}" width="${CARD_W}" height="${cardH}" rx="16" fill="#fff" stroke="#e2e8f0" stroke-width="1"/>` +
    body;
  return svgShell(key, `${n} tiles grouped by ${divisor}: ${groupCount} groups, remainder ${remainder}`, cardH, body);
}

const divisibilityTilesDiagrams = {
  ungrouped: freezeUngrouped('ungrouped', 23),          // the tool's own default number
  divisible: freezeGrouped('divisible', 20, 5),         // perfect split, Divisible ✓
  remainder: freezeGrouped('remainder', 23, 5),         // the tool's default 23 ÷ 5
  zeroGroups: freezeGrouped('zeroGroups', 3, 5),        // divisor larger than the number
};

export default divisibilityTilesDiagrams;
