// app/utils/illustrations/arithmetic/divisibility/digitRule.js
//
// String-based SVG renderer for the "digit-rule" illustration component.
// v1.
//
// Scene types:
//   'last-k'    — highlight the last k digits; k derived from divisor.
//                 spec.number, spec.divisor, spec.info, spec.style
//   'digit-sum' — all digits feed an amber sum chip; test the sum.
//                 spec.number, spec.divisor, spec.info, spec.style
//   'alt-sum'   — digits get alternating +/- signs from the RIGHT; test the
//                 alternating sum. spec.number, spec.divisor, spec.info, spec.style
//
// The renderer computes everything: digit splitting, which cells are active,
// the last-k value, the digit sum, the alternating sum, and per-cell signs.
// Spec authors pass only the number, the divisor, and the info panel.

// ---------- Default palette ----------
const C = {
  background: '#f4f4f1',     // inactive cell fill
  border: '#cfcfc8',         // inactive cell stroke
  text: '#34495e',           // info text
  textMuted: '#8a8a85',      // gloss / inactive glyphs
  primary: '#7F77DD',        // active cell fill (last-k, digit-sum)
  primaryStroke: '#5A52C9',  // active cell stroke + glyph
  secondary: '#3FB6A8',      // alt-sum "+" cells
  secondaryStroke: '#2E8C81',
  negation: '#E0654A',       // alt-sum "-" cells
  negationStroke: '#C25E3A',
  result: '#EF9F27',         // sum chip fill
  resultStroke: '#C25E3A',   // chip stroke + result formula + brace
  separator: '#dddddd',      // info hairline
};

// ---------- Layout constants ----------
const VIEWBOX_W = 680;
const CELL_X0 = 60;
const CELL_Y0_DEFAULT = 60;
const CELL_W = 44;
const CELL_H = 52;
const INFO_X_GAP = 60;       // gap between digit row right edge and info panel
const INFO_MIN_X = 300;      // floor for info panel left edge
const INFO_RIGHT_PAD = 220;  // info separator width

// ---------- Helpers ----------
function digitsOf(n) {
  return String(Math.abs(Math.trunc(n))).split('').map(Number);
}
function digitSum(n) {
  return digitsOf(n).reduce((a, d) => a + d, 0);
}
// k for last-k rules, derived from the divisor.
function kForDivisor(d) {
  if (d === 4) return 2;
  if (d === 8) return 3;
  return 1; // 2, 5, 10
}
function lastKValue(n, k) {
  const s = String(Math.abs(Math.trunc(n)));
  return parseInt(s.slice(-k), 10);
}
// Alternating sum from the right: rightmost +, next -, ...
function altSum(n) {
  const ds = digitsOf(n);
  let sum = 0;
  for (let i = 0; i < ds.length; i++) {
    const fromRight = ds.length - 1 - i;
    sum += (fromRight % 2 === 0) ? ds[i] : -ds[i];
  }
  return sum;
}
function escapeText(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ---------- Shared fragment builders ----------
function cellRect(x, y, fill, fillOpacity, stroke) {
  return `<rect x="${x}" y="${y}" width="${CELL_W}" height="${CELL_H}" fill="${fill}"` +
    (fillOpacity != null ? ` fill-opacity="${fillOpacity}"` : '') +
    ` stroke="${stroke}" stroke-width="1.5"/>`;
}
function glyph(cx, y, ch, color, bold) {
  return `<text x="${cx}" y="${y + 35}" text-anchor="middle" font-size="24" fill="${color}"` +
    (bold ? ` font-weight="bold"` : '') + `>${ch}</text>`;
}

function infoPanel(info, x, palette) {
  if (!info || !Array.isArray(info.lines)) return { svg: '', endY: 0 };
  const right = x + INFO_RIGHT_PAD;
  let y = 60;
  let out = '';
  for (const line of info.lines) {
    if (line.kind === 'separator') {
      out += `<line x1="${x}" y1="${y - 12}" x2="${right}" y2="${y - 12}" stroke="${palette.separator}" stroke-width="1"/>`;
      y += 14; continue;
    }
    if (line.kind === 'formula') {
      const color =
        line.role === 'result' ? palette.resultStroke :
        line.role === 'secondary' ? palette.secondaryStroke :
        palette.primaryStroke;
      out += `<text x="${x}" y="${y}" font-size="14" font-weight="bold" fill="${color}">${escapeText(line.text)}</text>`;
      y += 26; continue;
    }
    const italic = line.italic ? ` font-style="italic"` : '';
    const fill = line.italic ? palette.textMuted : palette.text;
    out += `<text x="${x}" y="${y}" font-size="${line.italic ? 12 : 13}"${italic} fill="${fill}">${escapeText(line.text)}</text>`;
    y += line.italic ? 22 : 24;
  }
  return { svg: out, endY: y };
}

function wrapSvg(vbH, title, desc, body) {
  return `<svg viewBox="0 0 ${VIEWBOX_W} ${vbH}" xmlns="http://www.w3.org/2000/svg" width="100%" font-family="Arial, sans-serif">` +
    `<title>${escapeText(title)}</title><desc>${escapeText(desc)}</desc>` + body + `</svg>`;
}

// ---------- Scene: last-k ----------
function renderLastK(spec, palette) {
  const ds = digitsOf(spec.number);
  const k = kForDivisor(spec.divisor);
  const activeFrom = Math.max(0, ds.length - k);
  const y0 = CELL_Y0_DEFAULT;
  let body = '';

  ds.forEach((d, i) => {
    const x = CELL_X0 + i * CELL_W;
    const active = i >= activeFrom;
    if (active) {
      body += cellRect(x, y0, palette.primary, 0.16, palette.primaryStroke);
      body += glyph(x + CELL_W / 2, y0, d, palette.primaryStroke, true);
    } else {
      body += cellRect(x, y0, palette.background, null, palette.border);
      body += glyph(x + CELL_W / 2, y0, d, palette.textMuted, false);
    }
  });

  // underbrace under the active cells
  const bx0 = CELL_X0 + activeFrom * CELL_W;
  const bw = k * CELL_W;
  const bxMid = bx0 + bw / 2;
  const by = y0 + CELL_H + 10;
  body += `<path d="M ${bx0} ${by} q 0 6 6 6 h ${bw / 2 - 12} q 6 0 6 6 q 0 -6 6 -6 h ${bw / 2 - 12} q 6 0 6 -6" fill="none" stroke="${palette.resultStroke}" stroke-width="1.5"/>`;
  const kVal = lastKValue(spec.number, k);
  body += `<text x="${bxMid}" y="${by + 28}" text-anchor="middle" font-size="13" font-weight="bold" fill="${palette.resultStroke}">${kVal}</text>`;

  const rowRight = CELL_X0 + ds.length * CELL_W;
  const infoX = Math.max(rowRight + INFO_X_GAP, INFO_MIN_X);
  const info = infoPanel(spec.info, infoX, palette);

  const vbH = Math.max(by + 40, info.endY + 10, 160);
  const ok = kVal % spec.divisor === 0;
  return wrapSvg(vbH,
    `Divisibility by ${spec.divisor}: last ${k} digits of ${spec.number}`,
    `The last ${k} digits of ${spec.number} form ${kVal}, which is ${ok ? '' : 'not '}divisible by ${spec.divisor}.`,
    body + info.svg);
}

// ---------- Scene: digit-sum ----------
function renderDigitSum(spec, palette) {
  const ds = digitsOf(spec.number);
  const y0 = 50;
  let body = '';

  ds.forEach((d, i) => {
    const x = CELL_X0 + i * CELL_W;
    body += cellRect(x, y0, palette.primary, 0.16, palette.primaryStroke);
    body += glyph(x + CELL_W / 2, y0, d, palette.primaryStroke, true);
  });

  // plus signs between cells
  for (let i = 1; i < ds.length; i++) {
    const px = CELL_X0 + i * CELL_W - 1;
    body += `<text x="${px}" y="${y0 + 80}" text-anchor="middle" font-size="18" fill="${palette.textMuted}">+</text>`;
  }

  const rowRight = CELL_X0 + ds.length * CELL_W;
  const rowMid = CELL_X0 + (ds.length * CELL_W) / 2;
  const sum = digitSum(spec.number);

  // converging stem + sum chip
  const chipY = y0 + CELL_H + 44;
  body += `<path d="M ${rowMid} ${y0 + CELL_H} L ${rowMid} ${chipY}" stroke="${palette.resultStroke}" stroke-width="1.2" fill="none"/>`;
  const chipW = 56;
  body += `<rect x="${rowMid - chipW / 2}" y="${chipY}" width="${chipW}" height="34" rx="6" fill="${palette.result}" fill-opacity="0.55" stroke="${palette.resultStroke}" stroke-width="1.5"/>`;
  body += `<text x="${rowMid}" y="${chipY + 23}" text-anchor="middle" font-size="18" font-weight="bold" fill="${palette.resultStroke}">${sum}</text>`;

  const infoX = Math.max(rowRight + INFO_X_GAP, INFO_MIN_X);
  const info = infoPanel(spec.info, infoX, palette);

  const vbH = Math.max(chipY + 60, info.endY + 10, 170);
  const ok = sum % spec.divisor === 0;
  return wrapSvg(vbH,
    `Divisibility by ${spec.divisor}: digit sum of ${spec.number}`,
    `The digits of ${spec.number} sum to ${sum}, which is ${ok ? '' : 'not '}divisible by ${spec.divisor}.`,
    body + info.svg);
}

// ---------- Scene: alt-sum ----------
function renderAltSum(spec, palette) {
  const ds = digitsOf(spec.number);
  const y0 = 60;
  let body = '';

  ds.forEach((d, i) => {
    const x = CELL_X0 + i * CELL_W;
    const cx = x + CELL_W / 2;
    const fromRight = ds.length - 1 - i;
    const plus = fromRight % 2 === 0; // rightmost is +
    const fill = plus ? palette.secondary : palette.negation;
    const stroke = plus ? palette.secondaryStroke : palette.negationStroke;
    body += cellRect(x, y0, fill, plus ? 0.16 : 0.14, stroke);
    body += glyph(cx, y0, d, stroke, true);
    // sign tag above
    body += `<text x="${cx}" y="${y0 - 10}" text-anchor="middle" font-size="16" font-weight="bold" fill="${stroke}">${plus ? '+' : '−'}</text>`;
  });

  const rowRight = CELL_X0 + ds.length * CELL_W;
  const rowMid = CELL_X0 + (ds.length * CELL_W) / 2;

  body += `<text x="${rowRight - CELL_W / 2}" y="${y0 + CELL_H + 20}" text-anchor="middle" font-size="11" fill="${palette.textMuted}">← start from the right</text>`;

  const sum = altSum(spec.number);
  const chipY = y0 + CELL_H + 38;
  const chipW = 64;
  body += `<rect x="${rowMid - chipW / 2}" y="${chipY}" width="${chipW}" height="34" rx="6" fill="${palette.result}" fill-opacity="0.55" stroke="${palette.resultStroke}" stroke-width="1.5"/>`;
  body += `<text x="${rowMid}" y="${chipY + 23}" text-anchor="middle" font-size="18" font-weight="bold" fill="${palette.resultStroke}">${sum < 0 ? '−' + Math.abs(sum) : sum}</text>`;

  const infoX = Math.max(rowRight + INFO_X_GAP, INFO_MIN_X);
  const info = infoPanel(spec.info, infoX, palette);

  const vbH = Math.max(chipY + 60, info.endY + 10, 180);
  const ok = sum % spec.divisor === 0;
  return wrapSvg(vbH,
    `Divisibility by ${spec.divisor}: alternating sum of ${spec.number}`,
    `The alternating sum of ${spec.number} from the right is ${sum}, which is ${ok ? '' : 'not '}divisible by ${spec.divisor}.`,
    body + info.svg);
}

// ---------- Public API ----------
export function renderDigitRule(spec) {
  if (!spec) return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 120"></svg>';
  const palette = { ...C, ...(spec.style || {}) };
  if (spec.kind === 'last-k') return renderLastK(spec, palette);
  if (spec.kind === 'digit-sum') return renderDigitSum(spec, palette);
  if (spec.kind === 'alt-sum') return renderAltSum(spec, palette);
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 120"></svg>';
}