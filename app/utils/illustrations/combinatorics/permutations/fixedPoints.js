// fixedPoints - every arrangement of n items, with the items that stay in
// their own place marked.
//
// renderFixedPoints(spec) -> SVG string. Docs: fixedPoints.md beside it.
//
// Scene types (spec.kind):
//   derangements   all n! orders of n items, one row each; an item standing in
//                  its own place is circled, the rows with none (the
//                  derangements) are boxed, and a last column counts the
//                  items left in place
//
// Palette: the page theme ($meta.palette.$pageTheme in the combinatorics
// figure registry) - places in brand navy, items left in place in the
// negation red, derangements in site amber.

const C = {
  head: '#06357A', item: '#1E3A5F', own: '#C0392B', ownFill: '#FDECEA', der: '#B45309', derFill: '#FDF3E3',
  text: '#1E3A5F', muted: '#64748B', hair: '#CBD5E1',

  wOwn: 1.6, wDer: 1.4, rOwn: 14, rowH: 40, colW: 64, boxH: 32,
  fsHead: 15, fsLabel: 12, fsRow: 11, fsItem: 15, fsCount: 14, fsNote: 11, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// All orders of the list, in lexicographic order of positions.
function orders(items) {
  if (items.length <= 1) return [items.slice()];
  const out = [];
  items.forEach((x, i) => orders(items.filter((_, j) => j !== i)).forEach((rest) => out.push([x, ...rest])));
  return out;
}

const fact = (k) => (k <= 1 ? 1 : k * fact(k - 1));

// ---------------------------------------------------------------- derangements
// Row i is the i-th order; column j is place j, headed by the item that owns
// it. The box behind a derangement row is drawn before the row's text so the
// letters sit on top. The formula line is built from n, so it always matches
// the number of boxed rows.
function derangements(spec, P) {
  const items = spec.items, n = items.length, rows = orders(items);
  const x0 = 150, top = 70, rh = P.rowH, cw = P.colW;
  const xCount = x0 + n * cw + 30, right = xCount + 60;
  const o = [];
  o.push(txt(spec.placeName || 'place', 70, top - 22, P.muted, P.fsLabel, 'middle', 500));
  items.forEach((g, j) => o.push(txt(g, x0 + j * cw, top - 22, P.head, P.fsHead, 'middle', 700)));
  o.push(txt(spec.countName || 'in own place', xCount, top - 22, P.muted, P.fsLabel, 'middle', 500));
  o.push(`<line x1="40" y1="${top - 10}" x2="${right}" y2="${top - 10}" stroke="${P.hair}"/>`);
  let d = 0;
  rows.forEach((p, i) => {
    const y = top + i * rh + 14, fixed = p.filter((h, j) => h === items[j]).length;
    if (!fixed) {
      d++;
      o.push(`<rect x="44" y="${y - 20}" width="${right - 48}" height="${P.boxH}" rx="7" fill="${P.derFill}" stroke="${P.der}" stroke-width="${P.wDer}"/>`);
    }
    o.push(txt(`${spec.rowName || 'order'} ${i + 1}`, 70, y + 1, fixed ? P.muted : P.der, P.fsRow, 'middle', fixed ? 500 : 700));
    p.forEach((h, j) => {
      const x = x0 + j * cw, own = h === items[j];
      if (own) o.push(`<circle cx="${x}" cy="${y - 4}" r="${P.rOwn}" fill="${P.ownFill}" stroke="${P.own}" stroke-width="${P.wOwn}"/>`);
      o.push(txt(h, x, y + 1, own ? P.own : P.item, P.fsItem, 'middle', own ? 700 : 500));
    });
    o.push(txt(String(fixed), xCount, y + 1, fixed ? P.own : P.der, P.fsCount, 'middle', 700));
  });
  const w = spec.width || right + 20, yb = top + rows.length * rh + 22;
  o.push(`<circle cx="60" cy="${yb - 4}" r="9" fill="${P.ownFill}" stroke="${P.own}" stroke-width="${P.wOwn}"/>`);
  o.push(txt(spec.ownNote || 'an item in its own place', 76, yb, P.own, P.fsNote, 'start', 500));
  const terms = [];
  for (let k = 0; k <= n; k++) terms.push((k && k % 2 ? '− ' : k ? '+ ' : '') + (fact(k) === 1 ? '1' : `1/${fact(k)}`));
  o.push(txt(`!${n} = ${n}!(${terms.join(' ')}) = ${d}`, 40, yb + 22, P.text, P.fsNote, 'start', 400));
  const h = spec.height || yb + 58;
  const cap = spec.caption === undefined
    ? `${d} of the ${n}! = ${rows.length} orders leave nothing in its own place: !${n} = ${d}`
    : spec.caption;
  if (cap) o.push(txt(cap, w / 2, h - 14, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { derangements };

export default function renderFixedPoints(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `fixedPoints: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderFixedPoints, C as fixedPointsDefaults };
