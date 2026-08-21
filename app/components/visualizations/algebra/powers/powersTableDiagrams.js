// Static SVG diagrams for the powers table tool (Line 1).
// Each diagram freezes PowerTable at one (base, maxPower) configuration,
// replicating the component's rendering: the blue #2563eb header row
// (Power / Expression / Value), zebra rows (#f8faff), blue serif power cells
// with superscript exponents, navy expression and bold navy value cells,
// thousand-separated BigInt values, the abbreviated expression for exponents
// above 10, and the "Each row is ×base the row above it" pattern note.
// Serif/sans stand-ins (Georgia / system sans) approximate the tool's
// next/font faces, which cannot be embedded in a static SVG.

const SUP = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
const sup = (n) => String(n).split('').map((d) => SUP[+d]).join('');

const expression = (b, p) => {
  if (p === 0) return '1';
  if (p === 1) return String(b);
  if (p <= 10) return Array(p).fill(b).join(' × ');
  return `${b} × ${b} × ... × ${b} (${p} times)`;
};

const value = (b, p) => (BigInt(b) ** BigInt(p)).toLocaleString('en-US');

const W = 640, M = 16;
const ROW_H = 27, HEAD_H = 34;

const freeze = (base, maxPower, chipText) => {
  const tableY = 44;
  const rows = maxPower + 1;
  const tableH = HEAD_H + rows * ROW_H;
  const noteY = tableY + tableH + 14;
  const H = noteY + 40;

  const colPowerX = M + 70;
  const colExprX = W / 2;
  const colValueX = W - M - 90;

  let s = '';
  // config chip
  s += `<rect x="${M}" y="8" width="${W - 2 * M}" height="26" rx="8" fill="#f8faff" stroke="#c8e0ff"/>`;
  s += `<text x="${W / 2}" y="26" font-size="13" fill="#4a6fa5" text-anchor="middle" font-family="sans-serif">${chipText}</text>`;

  // table card + header
  s += `<rect x="${M}" y="${tableY}" width="${W - 2 * M}" height="${tableH}" rx="10" fill="#fff" stroke="#c8e0ff"/>`;
  s += `<path d="M ${M + 10} ${tableY} H ${W - M - 10} Q ${W - M} ${tableY} ${W - M} ${tableY + 10} V ${tableY + HEAD_H} H ${M} V ${tableY + 10} Q ${M} ${tableY} ${M + 10} ${tableY} Z" fill="#2563eb"/>`;
  s += `<text x="${colPowerX}" y="${tableY + 22}" font-size="13" fill="#fff" font-weight="600" text-anchor="middle" font-family="sans-serif">Power</text>`;
  s += `<text x="${colExprX}" y="${tableY + 22}" font-size="13" fill="#fff" font-weight="600" text-anchor="middle" font-family="sans-serif">Expression</text>`;
  s += `<text x="${colValueX}" y="${tableY + 22}" font-size="13" fill="#fff" font-weight="600" text-anchor="middle" font-family="sans-serif">Value</text>`;

  for (let p = 0; p <= maxPower; p++) {
    const y = tableY + HEAD_H + p * ROW_H;
    if (p % 2 === 1) s += `<rect x="${M + 1}" y="${y}" width="${W - 2 * M - 2}" height="${ROW_H}" fill="#f8faff"/>`;
    if (p < maxPower) s += `<line x1="${M + 1}" y1="${y + ROW_H}" x2="${W - M - 1}" y2="${y + ROW_H}" stroke="#e0efff" stroke-width="1"/>`;
    const ty = y + ROW_H / 2 + 5;
    s += `<text x="${colPowerX}" y="${ty}" font-size="15" fill="#2563eb" font-weight="600" text-anchor="middle" font-family="Georgia,serif">${base}${sup(p)}</text>`;
    const expr = expression(base, p);
    s += `<text x="${colExprX}" y="${ty}" font-size="${expr.length > 34 ? 10.5 : 12.5}" fill="#1a365d" text-anchor="middle" font-family="Georgia,serif">${expr}</text>`;
    s += `<text x="${colValueX}" y="${ty}" font-size="13.5" fill="#1a365d" font-weight="700" text-anchor="middle" font-family="Georgia,serif">${value(base, p)}</text>`;
  }

  // pattern note
  s += `<rect x="${M}" y="${noteY}" width="${W - 2 * M}" height="30" rx="8" fill="#fff" stroke="#c8e0ff"/>`;
  s += `<text x="${W / 2}" y="${noteY + 20}" font-size="12.5" fill="#4a6fa5" text-anchor="middle" font-family="sans-serif">Each row is <tspan fill="#2563eb" font-weight="700">×${base}</tspan> the row above it — that is the power of exponents!</text>`;

  return (
    `<svg width="560" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto;padding:4px 0">` +
    `<rect width="${W}" height="${H}" fill="#fff"/>` + s + `</svg>`
  );
};

const powersTableDiagrams = {
  'b2-default': freeze(2, 10, 'Base 2, max power 10 — the default load'),
  'b2-deep': freeze(2, 16, 'Base 2, max power 16 — the small-base extended range'),
  'b5-cap': freeze(5, 10, 'Base 5, max power 10 — the first base capped at 10'),
  'b7': freeze(7, 10, 'Base 7, max power 10 — last digits cycling 7, 9, 3, 1'),
  'b10': freeze(10, 10, 'Base 10, max power 10 — place value, one zero per row'),
};

export default powersTableDiagrams;
