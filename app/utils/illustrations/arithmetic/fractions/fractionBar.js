// fractionBar - fraction models: equal parts of a whole, shaded.
//
// renderFractionBar(spec) -> SVG string. Docs: fractionBar.md beside it.
// Built 2026-10-11 for the /arithmetic/fractions pages; prototype approved by
// the owner the same day.
//
// Scene types (spec.kind):
//   bars  stacked bars of equal width = one whole each; a row is split into n equal
//         parts with k shaded (k may exceed n: extra wholes are drawn side by side)
//   area  the unit square cut into b columns and d rows; a/b of the columns and
//         c/d of the rows are shaded, the overlap is the product (a·c)/(b·d)
// Palette: page theme (navy/blue/amber).
const C = { f: '#2563EB', fFill: '#BFD3F8', r: '#B45309', rFill: '#F5D9B8', g: '#06357A', gFill: '#C9D6EA',
  text: '#1E3A5F', muted: '#64748B', grid: '#94A3B8', fsLabel: 13, fsNote: 12, fsCaption: 13, fsPart: 11 };
const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const r1 = (v) => Math.round(v * 10) / 10;
const txt = (t, x, y, col, size, anchor, weight) => `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" font-size="${size}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
function bars(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const W = 480, rows = spec.rows, X0 = spec.labelWidth || 70, maxWholes = Math.max(...rows.map((r) => Math.max(1, Math.ceil(r.k / r.n))));
  const BW = Math.min(300, (W - X0 - 30 - (maxWholes - 1) * 10) / maxWholes), BH = 34, GAP = 22;
  const H = spec.height || 40 + rows.length * (BH + GAP) + (spec.notes || []).length * 18 + 40;
  const o = [`<rect width="${W}" height="${H}" fill="#fff"/>`];
  rows.forEach((row, i) => {
    const y = 24 + i * (BH + GAP), wholes = Math.max(1, Math.ceil(row.k / row.n)), col = P[row.color || 'f'], fill = P[(row.color || 'f') + 'Fill'];
    o.push(txt(row.label, X0 - 12, y + BH / 2 + 5, col, P.fsLabel, 'end', 700));
    for (let w = 0; w < wholes; w++) {
      const bx = X0 + w * (BW + 10);
      for (let p = 0; p < row.n; p++) {
        const idx = w * row.n + p, px = bx + p * BW / row.n;
        o.push(`<rect x="${r1(px)}" y="${y}" width="${r1(BW / row.n)}" height="${BH}" fill="${idx < row.k ? fill : '#fff'}" stroke="${P.grid}" stroke-width="1"/>`);
        if (row.partLabels && BW / row.n >= 22) o.push(txt(`1/${row.n}`, px + BW / row.n / 2, y + BH / 2 + 4, P.muted, P.fsPart, 'middle', 500));
      }
      o.push(`<rect x="${r1(bx)}" y="${y}" width="${r1(BW)}" height="${BH}" fill="none" stroke="${col}" stroke-width="1.8"/>`);
    }
  });
  let ny = 24 + rows.length * (BH + GAP) + 6;
  (spec.notes || []).forEach((n) => { o.push(txt(n.text, X0, ny, P[n.color] || P.text, P.fsNote, 'start')); ny += 18; });
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 12, P.text, P.fsCaption, 'middle', 700));
  return [W, H, o];
}
function area(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const W = 480, H = spec.height || 330, S = 220, X0 = 40, Y0 = 34, [a, b] = spec.cols, [c, d] = spec.rows;
  const o = [`<rect width="${W}" height="${H}" fill="#fff"/>`];
  for (let i = 0; i < b; i++) for (let j = 0; j < d; j++) {
    const inA = i < a, inC = j < c, x = X0 + i * S / b, y = Y0 + S - (j + 1) * S / d;
    const fill = inA && inC ? P.rFill : inA ? P.fFill : inC ? P.gFill : '#fff';
    o.push(`<rect x="${r1(x)}" y="${r1(y)}" width="${r1(S / b)}" height="${r1(S / d)}" fill="${fill}" stroke="${P.grid}" stroke-width="1"/>`);
  }
  for (let i = 0; i < b; i++) for (let j = 0; j < d; j++) if (i < a && j < c) o.push(`<rect x="${r1(X0 + i * S / b)}" y="${r1(Y0 + S - (j + 1) * S / d)}" width="${r1(S / b)}" height="${r1(S / d)}" fill="none" stroke="${P.r}" stroke-width="1.6"/>`);
  o.push(`<rect x="${X0}" y="${Y0}" width="${S}" height="${S}" fill="none" stroke="${P.g}" stroke-width="1.8"/>`);
  o.push(txt(`${a}/${b}`, X0 + (a / b) * S / 2, Y0 + S + 18, P.f, P.fsLabel));
  o.push(txt(`${c}/${d}`, X0 - 8, Y0 + S - (c / d) * S / 2 + 5, P.g, P.fsLabel, 'end'));
  let ny = Y0 + 10; const LX = X0 + S + 26;
  (spec.notes || []).forEach((n) => { if (n.text) o.push(txt(n.text, LX, ny, P[n.color] || P.text, P.fsNote, 'start')); ny += 19; });
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 12, P.text, P.fsCaption, 'middle', 700));
  return [W, H, o];
}
export default function renderFractionBar(spec) {
  const fn = { bars, area }[spec.kind];
  if (!fn) throw new Error(`fractionBar: unknown kind "${spec.kind}". Add new scene types in a new file (fractionBar.v2.js), rule 11.`);
  const [W, H, o] = fn(spec);
  const title = esc(spec.svgTitle || spec.caption || 'Fraction model');
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}"><title>${title}</title>${o.join('')}</svg>`;
}
