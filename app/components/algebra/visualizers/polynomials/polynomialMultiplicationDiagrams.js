// Static SVG diagrams for the polynomial multiplication tool (Line 1).
// Each diagram freezes PolynomialMultiplicationVisualizer at completion for
// one preset: the fully-delivered product grid (headers sorted by descending
// exponent, every cell colored by its exponent from the component's
// EXP_PALETTE), the like-term buckets with their contribution lists and sums,
// and the final result line. All arithmetic is computed with the component's
// own pure logic (sortByExpDesc, cell products, combineByExp, row-major cell
// order for bucket contributions). Exponents render as unicode superscripts —
// the SVG equivalent of the component's <sup> markup.

const EXP_PALETTE = [
  { bg: '#e0e7ff', border: '#6366f1', text: '#312e81' },
  { bg: '#fef3c7', border: '#b45309', text: '#78350f' },
  { bg: '#ccfbf1', border: '#0d9488', text: '#134e4a' },
  { bg: '#ede9fe', border: '#7c3aed', text: '#4c1d95' },
  { bg: '#dcfce7', border: '#16a34a', text: '#14532d' },
  { bg: '#dbeafe', border: '#3b82f6', text: '#1e3a8a' },
  { bg: '#fef9c3', border: '#a16207', text: '#713f12' },
  { bg: '#e0f2fe', border: '#0284c7', text: '#0c4a6e' },
];
const colorForExp = (exp) => EXP_PALETTE[Math.max(0, exp) % EXP_PALETTE.length];

const MINUS = '−';
const SUP = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
const sup = (n) => String(n).split('').map((d) => SUP[+d]).join('');

const fmtTerm = (coeff, exp) => {
  if (coeff === 0) return '0';
  const absC = Math.abs(coeff);
  const sign = coeff < 0 ? MINUS : '';
  const coefStr = (exp === 0 || absC !== 1) ? String(absC) : '';
  const xPart = exp === 1 ? 'x' : exp > 1 ? `x${sup(exp)}` : '';
  return sign + coefStr + xPart;
};
const fmtPoly = (terms) => {
  const nz = terms.filter((t) => t.coeff !== 0).sort((a, b) => b.exp - a.exp);
  if (!nz.length) return '0';
  let s = '';
  nz.forEach((t, i) => {
    const absC = Math.abs(t.coeff);
    const signStr = i === 0 ? (t.coeff < 0 ? MINUS : '') : (t.coeff < 0 ? ` ${MINUS} ` : ' + ');
    const coefStr = (t.exp === 0 || absC !== 1) ? String(absC) : '';
    const xPart = t.exp === 1 ? 'x' : t.exp > 1 ? `x${sup(t.exp)}` : '';
    s += signStr + coefStr + xPart;
  });
  return s;
};
const fmtExpLabel = (exp) => (exp === 0 ? 'constants' : exp === 1 ? 'x terms' : `x${sup(exp)} terms`);

const CELL_W = 108, CELL_H = 42, HEAD_W = 108;
const M = 20, W = 700;

const freeze = (leftRaw, rightRaw, titleText) => {
  const left = [...leftRaw].sort((a, b) => b.exp - a.exp).filter((t) => t.coeff !== 0);
  const right = [...rightRaw].sort((a, b) => b.exp - a.exp).filter((t) => t.coeff !== 0);

  // row-major delivery, as the tool animates it
  const collected = [];
  left.forEach((lt) => right.forEach((rt) => collected.push({ coeff: lt.coeff * rt.coeff, exp: lt.exp + rt.exp })));
  const expSet = [...new Set(collected.map((c) => c.exp))].sort((a, b) => b - a);
  const sums = new Map();
  collected.forEach((c) => sums.set(c.exp, (sums.get(c.exp) || 0) + c.coeff));
  const result = fmtPoly(expSet.map((e) => ({ coeff: sums.get(e) || 0, exp: e })));

  const gridW = HEAD_W + right.length * CELL_W;
  const gridX = M + Math.max(0, (W - 2 * M - gridW) / 2);
  const gridY = 46;
  const gridH = CELL_H * (left.length + 1);

  let s = '';
  s += `<text x="${W / 2}" y="26" font-size="15" fill="#1e293b" text-anchor="middle" font-weight="700" font-family="'Cambria Math','Times New Roman',serif">${titleText}</text>`;

  const cellRect = (x, y, fill, stroke, w = 1.5) =>
    `<rect x="${x}" y="${y}" width="${CELL_W}" height="${CELL_H}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
  const cellText = (x, y, t, fill, weight = 600) =>
    `<text x="${x + CELL_W / 2}" y="${y + CELL_H / 2 + 5}" font-size="15" fill="${fill}" text-anchor="middle" font-weight="${weight}" font-family="'Cambria Math','Times New Roman',serif">${t}</text>`;

  // corner + column headers
  s += `<rect x="${gridX}" y="${gridY}" width="${HEAD_W}" height="${CELL_H}" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>`;
  right.forEach((rt, j) => {
    const x = gridX + HEAD_W + j * CELL_W;
    s += cellRect(x, gridY, '#f1f5f9', '#cbd5e1');
    s += cellText(x, gridY, fmtTerm(rt.coeff, rt.exp), '#334155', 700);
  });
  // rows
  left.forEach((lt, i) => {
    const y = gridY + (i + 1) * CELL_H;
    s += `<rect x="${gridX}" y="${y}" width="${HEAD_W}" height="${CELL_H}" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>`;
    s += cellText(gridX, y, fmtTerm(lt.coeff, lt.exp), '#334155', 700);
    right.forEach((rt, j) => {
      const x = gridX + HEAD_W + j * CELL_W;
      const exp = lt.exp + rt.exp;
      const col = colorForExp(exp);
      s += cellRect(x, y, col.bg, col.border, 2);
      s += cellText(x, y, fmtTerm(lt.coeff * rt.coeff, exp), col.text, 700);
    });
  });

  // buckets
  const bY = gridY + gridH + 26;
  const bGap = 10;
  const bW = (W - 2 * M - bGap * (expSet.length - 1)) / expSet.length;
  const bH = 74;
  s += `<text x="${M}" y="${bY - 8}" font-size="11" fill="#64748b" font-weight="600" letter-spacing="0.5">LIKE-TERM BUCKETS</text>`;
  expSet.forEach((exp, k) => {
    const x = M + k * (bW + bGap);
    const col = colorForExp(exp);
    const ofExp = collected.filter((c) => c.exp === exp);
    const contribs = ofExp.map((c, i) => `${c.coeff < 0 ? MINUS : i === 0 ? '' : '+'} ${Math.abs(c.coeff)}`).join(' ');
    s += `<rect x="${x.toFixed(1)}" y="${bY}" width="${bW.toFixed(1)}" height="${bH}" rx="8" fill="${col.bg}" stroke="${col.border}" stroke-width="1.5"/>`;
    s += `<text x="${(x + 10).toFixed(1)}" y="${bY + 20}" font-size="12.5" fill="${col.text}" font-weight="700">${fmtExpLabel(exp)}</text>`;
    s += `<text x="${(x + 10).toFixed(1)}" y="${bY + 40}" font-size="13" fill="${col.text}">${contribs}</text>`;
    s += `<text x="${(x + 10).toFixed(1)}" y="${bY + 60}" font-size="13" fill="${col.text}" font-weight="700">sum: ${fmtTerm(sums.get(exp) || 0, exp)}</text>`;
  });

  // final line
  const fY = bY + bH + 34;
  s += `<rect x="${M}" y="${fY - 22}" width="${W - 2 * M}" height="36" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>`;
  s += `<text x="${W / 2}" y="${fY + 2}" font-size="16" fill="#1e3a8a" text-anchor="middle" font-weight="700" font-family="'Cambria Math','Times New Roman',serif">P(x) &#183; Q(x) = ${result}</text>`;

  const H = fY + 28;
  return (
    `<svg width="600" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto;padding:4px 0">` +
    `<rect width="${W}" height="${H}" fill="#fff"/>` + s + `</svg>`
  );
};

const polynomialMultiplicationDiagrams = {
  'ps-foil': freeze(
    [{ coeff: 1, exp: 1 }, { coeff: 2, exp: 0 }],
    [{ coeff: 1, exp: 1 }, { coeff: 3, exp: 0 }],
    '(x + 2)(x + 3), all four cells delivered'),
  'ps-signs': freeze(
    [{ coeff: 2, exp: 1 }, { coeff: -1, exp: 0 }],
    [{ coeff: 1, exp: 1 }, { coeff: 4, exp: 0 }],
    `(2x ${MINUS} 1)(x + 4), all four cells delivered`),
  'ps-3x2': freeze(
    [{ coeff: 1, exp: 2 }, { coeff: -3, exp: 1 }, { coeff: 2, exp: 0 }],
    [{ coeff: 2, exp: 1 }, { coeff: 5, exp: 0 }],
    `(x${sup(2)} ${MINUS} 3x + 2)(2x + 5), all six cells delivered`),
  'ps-cubes': freeze(
    [{ coeff: 1, exp: 1 }, { coeff: 1, exp: 0 }],
    [{ coeff: 1, exp: 2 }, { coeff: -1, exp: 1 }, { coeff: 1, exp: 0 }],
    `(x + 1)(x${sup(2)} ${MINUS} x + 1), all six cells delivered`),
  'ps-3x3': freeze(
    [{ coeff: 2, exp: 2 }, { coeff: 1, exp: 1 }, { coeff: -3, exp: 0 }],
    [{ coeff: 1, exp: 2 }, { coeff: -2, exp: 1 }, { coeff: 1, exp: 0 }],
    `(2x${sup(2)} + x ${MINUS} 3)(x${sup(2)} ${MINUS} 2x + 1), all nine cells delivered`),
};

export default polynomialMultiplicationDiagrams;
