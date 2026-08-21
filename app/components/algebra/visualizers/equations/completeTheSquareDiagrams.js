// Static SVG diagrams for the completing-the-square tool (Line 1).
// Each diagram freezes CompletingTheSquare's Geometric Picture at one stage of
// the construction, replicating the component's Diagram renderer exactly:
// same 640x280 viewBox, X_PX=140 square, UNIT_PX=22 strip scale (clamped
// 20..120), same palette (blue #dbeafe/#3b82f6 square, amber #fde68a/#d97706
// strips, green #d1fae5/#059669 constant, red #fecaca/#dc2626 gap, dashed
// corner outline), same labels and dimension bars. The live tool pulses the
// gap block with an <animate>; the frozen frames render it at full opacity.

const X_PX = 140;
const UNIT_PX = 22;
const ORIGIN_X = 60;
const ORIGIN_Y = 30;
const SVG_W = 640;
const SVG_H = 280;

const fmt = (x) => {
  if (!Number.isFinite(x)) return String(x);
  if (Number.isInteger(x)) return String(x);
  return parseFloat(x.toFixed(4)).toString();
};
const sign = (x, plus = true) => (x >= 0 ? (plus ? `+ ${fmt(x)}` : fmt(x)) : `&#8722; ${fmt(Math.abs(x))}`);

const derive = (a, b, c) => {
  const bm = b / a, cm = c / a;
  const half = bm / 2, halfSq = half * half;
  return { bm, cm, half, halfSq, gap: halfSq - cm };
};

const txt = (x, y, size, fill, t, o = '') =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" ${o}>${t}</text>`;
const mid = 'text-anchor="middle"';

const freeze = (stageId, a, b, c, solveCaption = false) => {
  const { bm, cm, half, halfSq, gap } = derive(a, b, c);
  const halfPx = Math.max(20, Math.min(120, Math.abs(half) * UNIT_PX));
  const sqX = ORIGIN_X, sqY = ORIGIN_Y;
  const xc = sqX + X_PX / 2, yc = sqY + X_PX / 2;
  const cornerHasFraction = (cm > 0 && halfSq > 0 && cm <= halfSq);
  const cPiecePx = cornerHasFraction ? (cm / halfSq) * halfPx : 0;
  const gapPiecePx = cornerHasFraction ? (halfPx - cPiecePx) : 0;
  let s = '';

  const square = (w = 2.5) =>
    `<rect x="${sqX}" y="${sqY}" width="${X_PX}" height="${X_PX}" fill="#dbeafe" stroke="#3b82f6" stroke-width="${w}"/>` +
    txt(xc, yc + 8, 24, '#1e3a5f', 'x&#178;', `${mid} font-style="italic" font-weight="700"`);
  const strips = (w = 2.5, fs = 16) =>
    `<rect x="${sqX + X_PX}" y="${sqY}" width="${halfPx}" height="${X_PX}" fill="#fde68a" stroke="#d97706" stroke-width="${w}"/>` +
    txt(sqX + X_PX + halfPx / 2, yc + 6, fs, '#1e3a5f', `${fmt(half)}x`, `${mid} font-style="italic" font-weight="600"`) +
    `<rect x="${sqX}" y="${sqY + X_PX}" width="${X_PX}" height="${halfPx}" fill="#fde68a" stroke="#d97706" stroke-width="${w}"/>` +
    txt(xc, sqY + X_PX + halfPx / 2 + 5, fs, '#1e3a5f', `${fmt(half)}x`, `${mid} font-style="italic" font-weight="600"`);
  const dims = () =>
    txt(xc, sqY - 14, 14, '#64748b', 'x', `${mid} font-style="italic"`) +
    txt(sqX + X_PX + halfPx / 2, sqY - 14, 14, '#64748b', fmt(half), mid) +
    txt(sqX - 16, yc + 5, 14, '#64748b', 'x', `${mid} font-style="italic"`) +
    txt(sqX - 16, sqY + X_PX + halfPx / 2 + 5, 14, '#64748b', fmt(half), mid);

  if (stageId === 0) {
    const fullRectW = 2 * halfPx;
    let cSidePx;
    if (cm > 0 && halfSq > 0) cSidePx = Math.max(28, Math.min(halfPx, Math.sqrt(cm / halfSq) * halfPx));
    else cSidePx = 40;
    const bxX = sqX + X_PX + 40;
    const cPieceX = bxX + fullRectW + 40;
    s += square();
    s += `<rect x="${bxX}" y="${sqY}" width="${fullRectW}" height="${X_PX}" fill="#fde68a" stroke="#d97706" stroke-width="2.5"/>`;
    s += txt(bxX + fullRectW / 2, yc + 8, 20, '#1e3a5f', `${fmt(bm)}x`, `${mid} font-style="italic" font-weight="700"`);
    s += `<rect x="${cPieceX}" y="${sqY + (X_PX - cSidePx) / 2}" width="${cSidePx}" height="${cSidePx}" fill="${cm >= 0 ? '#d1fae5' : '#fee2e2'}" stroke="${cm >= 0 ? '#059669' : '#dc2626'}" stroke-width="2.5"/>`;
    s += txt(cPieceX + cSidePx / 2, yc + 6, 16, cm >= 0 ? '#065f46' : '#991b1b', fmt(cm), `${mid} font-weight="700"`);
  } else if (stageId === 1) {
    s += txt(SVG_W / 2, 180, 16, '#475569', 'Working with the monic part:', mid);
    s += txt(SVG_W / 2, 220, 26, '#1e3a5f', `x&#178; ${bm >= 0 ? '+' : '&#8722;'} ${fmt(Math.abs(bm))}x`, `${mid} font-weight="700"`);
    s += txt(SVG_W / 2, 250, 14, '#94a3b8', `(factor of ${fmt(a)} restored at the end)`, mid);
  } else if (stageId === 2) {
    s += square();
    s += txt(xc, sqY - 14, 14, '#64748b', 'x', `${mid} font-style="italic"`);
    s += txt(sqX - 16, yc + 5, 14, '#64748b', 'x', `${mid} font-style="italic"`);
  } else if (stageId === 3) {
    s += square() + strips() + dims();
  } else if (stageId === 4) {
    const cornerCY = sqY + X_PX + halfPx / 2;
    const labelX = sqX + X_PX + halfPx + 28;
    s += square() + strips();
    s += `<rect x="${sqX + X_PX}" y="${sqY + X_PX}" width="${halfPx}" height="${halfPx}" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,4"/>`;
    if (cornerHasFraction && cPiecePx > 0) {
      s += `<rect x="${sqX + X_PX}" y="${(sqY + X_PX + halfPx - cPiecePx).toFixed(1)}" width="${halfPx}" height="${cPiecePx.toFixed(1)}" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>`;
      s += txt(sqX + X_PX + halfPx / 2, (sqY + X_PX + halfPx - cPiecePx / 2 + 5).toFixed(1), 15, '#065f46', fmt(cm), `${mid} font-weight="700"`);
    }
    s += `<line x1="${sqX + X_PX + halfPx}" y1="${cornerCY}" x2="${labelX - 6}" y2="${cornerCY}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>`;
    s += txt(labelX, sqY + X_PX + 8, 13, '#64748b', 'corner needs', 'text-anchor="start"');
    s += txt(labelX, sqY + X_PX + 28, 15, '#1e3a5f', `${fmt(half)} &#215; ${fmt(half)} = ${fmt(halfSq)}`, 'text-anchor="start" font-weight="700"');
    s += dims();
  } else if (stageId === 5) {
    s += square() + strips();
    if (cornerHasFraction && cPiecePx > 0) {
      s += `<rect x="${sqX + X_PX}" y="${(sqY + X_PX + halfPx - cPiecePx).toFixed(1)}" width="${halfPx}" height="${cPiecePx.toFixed(1)}" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>`;
      s += txt(sqX + X_PX + halfPx / 2, (sqY + X_PX + halfPx - cPiecePx / 2 + 5).toFixed(1), 14, '#065f46', fmt(cm), `${mid} font-weight="700"`);
    }
    if (cornerHasFraction && gapPiecePx > 0) {
      s += `<rect x="${sqX + X_PX}" y="${sqY + X_PX}" width="${halfPx}" height="${gapPiecePx.toFixed(1)}" fill="#fecaca" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5,4"/>`;
      s += txt(sqX + X_PX + halfPx / 2, (sqY + X_PX + gapPiecePx / 2 + 5).toFixed(1), 13, '#991b1b', `gap = ${fmt(gap)}`, `${mid} font-weight="700"`);
    }
    if (!cornerHasFraction && cm > 0 && cm > halfSq) {
      s += `<rect x="${sqX + X_PX}" y="${sqY + X_PX}" width="${halfPx}" height="${halfPx}" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>`;
      s += txt(sqX + X_PX + halfPx / 2, sqY + X_PX + halfPx / 2 + 5, 13, '#065f46', fmt(halfSq), `${mid} font-weight="700"`);
      s += txt(sqX + X_PX + halfPx + 10, sqY + X_PX + 20, 12, '#475569', `overflow: ${fmt(cm - halfSq)}`, '');
    }
    if (!cornerHasFraction && cm < 0) {
      s += `<rect x="${sqX + X_PX}" y="${sqY + X_PX}" width="${halfPx}" height="${halfPx}" fill="#fecaca" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5,4"/>`;
      s += txt(sqX + X_PX + halfPx / 2, sqY + X_PX + halfPx / 2 + 5, 13, '#991b1b', `gap = ${fmt(halfSq - cm)}`, `${mid} font-weight="700"`);
    }
    s += dims();
  } else if (stageId === 6) {
    const total = X_PX + halfPx;
    s += square(2) + strips(2, 14);
    if (cornerHasFraction && cPiecePx > 0) {
      s += `<rect x="${sqX + X_PX}" y="${(sqY + X_PX + halfPx - cPiecePx).toFixed(1)}" width="${halfPx}" height="${cPiecePx.toFixed(1)}" fill="#d1fae5" stroke="#059669" stroke-width="2"/>`;
      s += txt(sqX + X_PX + halfPx / 2, (sqY + X_PX + halfPx - cPiecePx / 2 + 5).toFixed(1), 13, '#065f46', fmt(cm), `${mid} font-weight="700"`);
    }
    if (cornerHasFraction && gapPiecePx > 0) {
      s += `<rect x="${sqX + X_PX}" y="${sqY + X_PX}" width="${halfPx}" height="${gapPiecePx.toFixed(1)}" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>`;
      s += txt(sqX + X_PX + halfPx / 2, (sqY + X_PX + gapPiecePx / 2 + 5).toFixed(1), 12, '#991b1b', fmt(gap), `${mid} font-weight="700"`);
    }
    if (!cornerHasFraction) {
      s += `<rect x="${sqX + X_PX}" y="${sqY + X_PX}" width="${halfPx}" height="${halfPx}" fill="#fde68a" stroke="#d97706" stroke-width="2"/>`;
    }
    const sideLabel = `x ${sign(half).replace(' ', '')}`;
    s += `<line x1="${sqX}" y1="${sqY - 28}" x2="${sqX + total}" y2="${sqY - 28}" stroke="#3b82f6" stroke-width="2"/>`;
    s += `<line x1="${sqX}" y1="${sqY - 32}" x2="${sqX}" y2="${sqY - 24}" stroke="#3b82f6" stroke-width="2"/>`;
    s += `<line x1="${sqX + total}" y1="${sqY - 32}" x2="${sqX + total}" y2="${sqY - 24}" stroke="#3b82f6" stroke-width="2"/>`;
    s += txt(sqX + total / 2, sqY - 36, 15, '#3b82f6', sideLabel, `${mid} font-weight="700"`);
    s += `<line x1="${sqX - 28}" y1="${sqY}" x2="${sqX - 28}" y2="${sqY + total}" stroke="#3b82f6" stroke-width="2"/>`;
    s += `<line x1="${sqX - 32}" y1="${sqY}" x2="${sqX - 24}" y2="${sqY}" stroke="#3b82f6" stroke-width="2"/>`;
    s += `<line x1="${sqX - 32}" y1="${sqY + total}" x2="${sqX - 24}" y2="${sqY + total}" stroke="#3b82f6" stroke-width="2"/>`;
    s += `<text x="${sqX - 38}" y="${sqY + total / 2}" font-size="15" fill="#3b82f6" font-weight="700" text-anchor="middle" transform="rotate(-90, ${sqX - 38}, ${sqY + total / 2})">${sideLabel}</text>`;
    s += txt(SVG_W / 2, SVG_H - 30, 16, '#1e3a5f',
      `${a === 1 ? '' : `${fmt(a)} &#183; `}(x ${sign(half)})&#178; ${sign(-gap)} = 0${solveCaption ? '  &#8594;  solve for x' : ''}`,
      `${mid} font-weight="700"`);
  }

  return (
    `<svg width="600" viewBox="0 0 ${SVG_W} ${SVG_H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto;padding:6px 0">` +
    `<rect width="${SVG_W}" height="${SVG_H}" fill="#fff"/>` + s + `</svg>`
  );
};

const completeTheSquareDiagrams = {
  // The step sequence, frozen on the default preset x² + 6x + 5
  // (the factor-out step exists only for a ≠ 1 — frozen on 2x² + 8x + 3).
  'step-start':  freeze(0, 1, 6, 5),
  'step-factor': freeze(1, 2, 8, 3),
  'step-square': freeze(2, 1, 6, 5),
  'step-split':  freeze(3, 1, 6, 5),
  'step-corner': freeze(4, 1, 6, 5),
  'step-gap':    freeze(5, 1, 6, 5),
  'step-vertex': freeze(6, 1, 6, 5),
  'step-solve':  freeze(6, 1, 6, 5, true),
  // The five presets, frozen at the gap/excess stage — each configuration's
  // most characteristic frame.
  'ps-basic':      freeze(5, 1, 6, 5),
  'ps-factored':   freeze(5, 2, 8, 3),
  'ps-negative-b': freeze(5, 1, -4, 1),
  'ps-odd-b':      freeze(5, 1, 5, 2),
  'ps-triple':     freeze(5, 3, 12, 7),
};

export default completeTheSquareDiagrams;
