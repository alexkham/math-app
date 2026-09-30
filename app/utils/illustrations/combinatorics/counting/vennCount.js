// vennCount - a Venn diagram with a count in every region.
//
// renderVennCount(spec) -> SVG string. Docs: vennCount.md beside it.
//
// Scene types (spec.kind):
//   twoSets   two overlapping sets inside a universe; each region shows how
//             many elements it holds; two lines under the diagram show the
//             sum |A| + |B| counting the overlap twice and the corrected union
//
// Palette: the page theme ($meta.palette.$pageTheme in the combinatorics
// figure registry) - set A in site blue, set B in brand navy, the overlap and
// the corrected count in site amber.

const C = {
  a: '#2563EB', aFill: '#DBEAFE', b: '#06357A', bFill: '#E8EEF7', both: '#B45309', bothFill: '#FDF3E3',
  text: '#1E3A5F', muted: '#64748B', hair: '#94A3B8', u: '#F8FAFC',

  wSet: 2, wU: 1.2, r: 100, gapX: 110,
  fsSet: 13, fsCount: 24, fsRegion: 11, fsNote: 10, fsCorner: 12, fsSum: 13, fsUnion: 14,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// ---------------------------------------------------------------- twoSets
// Region counts are derived from |A|, |B|, |A ∩ B| and |U|, never given, so
// the four regions always add up to the universe. The overlap is painted by
// clipping circle B to circle A; both outlines are redrawn on top so the lens
// does not cover them. The clip id carries spec.idPrefix, so two frames on
// one page cannot share it.
function twoSets(spec, P) {
  const W = spec.width || 540, cy = 142, r = P.r;
  const A = { x: W / 2 - P.gapX / 2, y: cy }, B = { x: W / 2 + P.gapX / 2, y: cy };
  const a = spec.a, b = spec.b, both = spec.both, total = spec.total;
  const onlyA = a.size - both, onlyB = b.size - both, union = a.size + b.size - both, neither = total - union;
  if (onlyA < 0 || onlyB < 0 || neither < 0) throw new Error('vennCount: sizes that no two sets can have');
  const id = `${spec.idPrefix || 'vc'}-clip`, mid = (A.x + B.x) / 2;
  const o = [];
  o.push(`<defs><clipPath id="${id}"><circle cx="${A.x}" cy="${A.y}" r="${r}"/></clipPath></defs>`);
  o.push(`<rect x="20" y="14" width="${W - 40}" height="252" rx="8" fill="${P.u}" stroke="${P.hair}" stroke-width="${P.wU}"/>`);
  o.push(`<circle cx="${A.x}" cy="${A.y}" r="${r}" fill="${P.aFill}" stroke="${P.a}" stroke-width="${P.wSet}"/>`);
  o.push(`<circle cx="${B.x}" cy="${B.y}" r="${r}" fill="${P.bFill}" stroke="${P.b}" stroke-width="${P.wSet}"/>`);
  o.push(`<circle cx="${B.x}" cy="${B.y}" r="${r}" fill="${P.bothFill}" clip-path="url(#${id})"/>`);
  o.push(`<circle cx="${A.x}" cy="${A.y}" r="${r}" fill="none" stroke="${P.a}" stroke-width="${P.wSet}"/>`);
  o.push(`<circle cx="${B.x}" cy="${B.y}" r="${r}" fill="none" stroke="${P.b}" stroke-width="${P.wSet}"/>`);
  o.push(txt(`${a.name} ${a.letter}: ${a.size}`, A.x - 50, 34, P.a, P.fsSet, 'middle', 700));
  o.push(txt(`${b.name} ${b.letter}: ${b.size}`, B.x + 50, 34, P.b, P.fsSet, 'middle', 700));
  o.push(txt(String(onlyA), A.x - 50, cy + 8, P.a, P.fsCount, 'middle', 700));
  o.push(txt(`${a.name} only`, A.x - 50, cy + 28, P.a, P.fsRegion, 'middle', 500));
  o.push(txt(String(both), mid, cy + 2, P.both, P.fsCount, 'middle', 700));
  o.push(txt('both', mid, cy + 20, P.both, P.fsRegion, 'middle', 600));
  o.push(txt(`in ${a.size} and`, mid, cy + 44, P.both, P.fsNote, 'middle', 500));
  o.push(txt(`in ${b.size}`, mid, cy + 56, P.both, P.fsNote, 'middle', 500));
  o.push(txt(String(onlyB), B.x + 50, cy + 8, P.b, P.fsCount, 'middle', 700));
  o.push(txt(`${b.name} only`, B.x + 50, cy + 28, P.b, P.fsRegion, 'middle', 500));
  o.push(txt(`U: ${total}${spec.unit ? ' ' + spec.unit : ''}`, 30, 256, P.muted, P.fsCorner, 'start', 600));
  o.push(txt(`${neither} ${spec.neitherNote || 'in neither'}`, W - 30, 256, P.muted, P.fsCorner, 'end', 600));
  const y1 = 296, L = a.letter, R = b.letter;
  o.push(txt(`|${L}| + |${R}| = ${a.size} + ${b.size} = ${a.size + b.size} counts the ${both} in both twice`, W / 2, y1, P.text, P.fsSum, 'middle', 600));
  o.push(txt(`|${L} ∪ ${R}| = ${a.size} + ${b.size} − ${both} = ${union} = ${onlyA} + ${both} + ${onlyB}`, W / 2, y1 + 24, P.both, P.fsUnion, 'middle', 700));
  let h = spec.height || y1 + 40;
  if (spec.caption) { h += 26; o.push(txt(spec.caption, W / 2, h - 14, P.text, P.fsSum)); }
  return { w: W, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { twoSets };

export default function renderVennCount(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `vennCount: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderVennCount, C as vennCountDefaults };
