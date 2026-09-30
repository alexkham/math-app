// binomialExpansion - (a + b)^n expanded by choosing a or b from each factor.
//
// renderBinomialExpansion(spec) -> SVG string. Docs: binomialExpansion.md
// beside it.
//
// Scene types (spec.kind):
//   choices   every one of the 2^n picks (a or b from each of the n factors),
//             sorted into columns by how many b's they take; each column's
//             size is C(n, k) and becomes the coefficient of a^(n-k) b^k
//
// Palette: the page theme ($meta.palette.$pageTheme in the combinatorics
// figure registry) - a in site blue, b in brand navy, the resulting terms in
// site amber.

const C = {
  a: '#2563EB', aFill: '#DBEAFE', b: '#06357A', bFill: '#E8EEF7', res: '#B45309', resFill: '#FDF3E3',
  text: '#1E3A5F', muted: '#64748B', hair: '#CBD5E1',

  wCell: 1.4, wTerm: 1.4, cell: 24, gap: 3, rowH: 34, colW: 135, termW: 76, termH: 30,
  fsTitle: 13, fsSub: 11, fsHead: 12, fsCell: 14, fsCount: 12, fsTerm: 16, fsCaption: 14,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const SUP = { 2: '²', 3: '³', 4: '⁴', 5: '⁵' };
const WORDS = ['no', 'one', 'two', 'three', 'four', 'five'];

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

const choose = (n, k) => { let v = 1; for (let i = 0; i < k; i++) v = v * (n - i) / (i + 1); return Math.round(v); };
const pow = (v, e) => (e === 0 ? '' : e === 1 ? v : v + SUP[e]);
const term = (n, k) => { const c = choose(n, k); return (c === 1 ? '' : String(c)) + pow('a', n - k) + pow('b', k); };

// ---------------------------------------------------------------- choices
// Picks are generated in binary order (a = 0, b = 1, first factor most
// significant) and dealt into columns by their b-count, so each column lists
// its picks in the order the factors would produce them. Column separators
// stop above the count row; the '+' signs sit between the term boxes.
function choices(spec, P) {
  const n = spec.n;
  const groups = [...Array(n + 1)].map(() => []);
  for (let m = 0; m < 2 ** n; m++) {
    const s = [...Array(n)].map((_, i) => ((m >> (n - 1 - i)) & 1 ? 'b' : 'a'));
    groups[s.filter((c) => c === 'b').length].push(s);
  }
  const cw = P.colW, W = spec.width || Math.max(580, cw * (n + 1) + 40), x0 = W / 2 - cw * n / 2, top = 86;
  const factors = [...Array(n)].map(() => '(a + b)').join('');
  const o = [];
  o.push(txt(`pick a or b from each factor of ${factors}`, W / 2, 24, P.text, P.fsTitle, 'middle', 600));
  o.push(txt(`${2 ** n} = ${[...Array(n)].map(() => '2').join(' × ')} picks in all, sorted by how many b’s they take`, W / 2, 44, P.muted, P.fsSub, 'middle', 500));
  const maxRows = Math.max(...groups.map((g) => g.length));
  const yCount = top + maxRows * P.rowH + 8;
  const chipW = n * P.cell + (n - 1) * P.gap;
  groups.forEach((g, k) => {
    const cx = x0 + k * cw;
    o.push(txt(`${WORDS[k]} ${k === 1 || k === 0 ? 'b' : 'b’s'}`, cx, top - 16, P.muted, P.fsHead, 'middle', 600));
    g.forEach((s, i) => {
      const y = top + i * P.rowH, sx = cx - chipW / 2;
      s.forEach((c, j) => {
        const x = sx + j * (P.cell + P.gap), isA = c === 'a';
        o.push(`<rect x="${x}" y="${y}" width="${P.cell}" height="${P.cell}" rx="4" fill="${isA ? P.aFill : P.bFill}" stroke="${isA ? P.a : P.b}" stroke-width="${P.wCell}"/>`);
        o.push(txt(c, x + P.cell / 2, y + 17, isA ? P.a : P.b, P.fsCell, 'middle', 700));
      });
    });
    o.push(txt(`${g.length} ${g.length === 1 ? 'pick' : 'picks'} = C(${n},${k})`, cx, yCount + 12, P.text, P.fsCount, 'middle', 600));
    o.push(`<rect x="${cx - P.termW / 2}" y="${yCount + 24}" width="${P.termW}" height="${P.termH}" rx="7" fill="${P.resFill}" stroke="${P.res}" stroke-width="${P.wTerm}"/>`);
    o.push(txt(term(n, k), cx, yCount + 44, P.res, P.fsTerm, 'middle', 700));
    if (k < n) o.push(txt('+', cx + cw / 2, yCount + 44, P.res, P.fsTerm, 'middle', 700));
  });
  for (let k = 1; k <= n; k++) {
    const x = x0 + (k - 0.5) * cw;
    o.push(`<line x1="${x}" y1="${top - 30}" x2="${x}" y2="${yCount - 6}" stroke="${P.hair}" stroke-dasharray="3 3"/>`);
  }
  const h = spec.height || yCount + 100;
  const cap = spec.caption === undefined
    ? `(a + b)${SUP[n]} = ${[...Array(n + 1)].map((_, k) => term(n, k)).join(' + ')}`
    : spec.caption;
  if (cap) o.push(txt(cap, W / 2, h - 16, P.text, P.fsCaption, 'middle', 700));
  return { w: W, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { choices };

export default function renderBinomialExpansion(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `binomialExpansion: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `Add a new one in a further file per process v10 rule 11; do not edit this one.`
    );
  }
  const { w, h, body } = build(spec, P);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" ` +
    `role="img" style="display:block;max-width:100%;height:auto">` +
    (spec.svgTitle ? `<title>${esc(spec.svgTitle)}</title>` : '') +
    body +
    `</svg>`
  );
}

export { renderBinomialExpansion, C as binomialExpansionDefaults };
