// countTree - counting drawn as a tree of choices.
//
// renderCountTree(spec) -> SVG string. Docs: countTree.md beside it.
//
// Combinatorics' first authored component. Scene types (spec.kind):
//   product   a two-step choice: every first-step option branches into every
//             second-step option; each root-to-leaf path is one outcome, and
//             the leaf count is the product of the option counts
//
// Palette: the page theme (owner decision 2026-09-28, $meta.palette.$pageTheme
// in the combinatorics figure registry) - step 1 in site blue, step 2 in
// brand navy, outcomes in site amber.

const C = {
  s1: '#2563EB', s1Fill: '#DBEAFE', s2: '#06357A', s2Fill: '#E8EEF7', out: '#B45309', outFill: '#FDF3E3',
  text: '#1E3A5F', muted: '#64748B', line: '#94A3B8',

  wBranch: 1.6, wLead: 1.2, wNode: 1.6, wLeaf: 1.4,
  rRoot: 5, rStep1: 17, rStep2: 16, rowH: 44, leafW: 60, leafH: 28,
  fsHead: 12, fsSub: 11, fsNode: 13, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// ---------------------------------------------------------------- product
// Leaves are stacked one per row; each first-step node sits level with the
// middle of its own block of leaves, so the tree reads as three equal fans.
// Branch lines are drawn before nodes so every node sits on top of its lines.
// The leaf label is the concatenation of the two choices on its path.
function product(spec, P) {
  const step1 = spec.step1.options, step2 = spec.step2.options;
  const n1 = step1.length, n2 = step2.length, leaves = n1 * n2;
  const rootX = 50, x1 = 190, x2 = 330, xo = 470, top = 60, rowH = P.rowH;
  const ly = (i) => top + i * rowH;
  const y1 = (i) => (ly(i * n2) + ly(i * n2 + n2 - 1)) / 2;
  const rootY = (ly(0) + ly(leaves - 1)) / 2;
  const o = [];
  o.push(txt(spec.step1.name, x1, top - 34, P.s1, P.fsHead));
  o.push(txt(spec.step1.note || `${n1} choices`, x1, top - 20, P.s1, P.fsSub, 'middle', 500));
  o.push(txt(spec.step2.name, x2, top - 34, P.s2, P.fsHead));
  o.push(txt(spec.step2.note || `${n2} choices each`, x2, top - 20, P.s2, P.fsSub, 'middle', 500));
  o.push(txt(spec.outcomeName || 'outcome', xo + P.leafW / 2 - 6, top - 27, P.out, P.fsHead));
  o.push(`<circle cx="${rootX}" cy="${rootY}" r="${P.rRoot}" fill="${P.text}"/>`);
  step1.forEach((s, i) => {
    o.push(`<line x1="${rootX + P.rRoot}" y1="${rootY}" x2="${x1 - P.rStep1 - 1}" y2="${y1(i)}" stroke="${P.line}" stroke-width="${P.wBranch}"/>`);
    step2.forEach((p, j) => {
      const k = i * n2 + j, y = ly(k);
      o.push(`<line x1="${x1 + P.rStep1 + 1}" y1="${y1(i)}" x2="${x2 - P.rStep2 - 2}" y2="${y}" stroke="${P.line}" stroke-width="${P.wBranch}"/>`);
      o.push(`<line x1="${x2 + P.rStep2 + 2}" y1="${y}" x2="${xo - 8}" y2="${y}" stroke="${P.line}" stroke-width="${P.wLead}" stroke-dasharray="4 3"/>`);
      o.push(`<circle cx="${x2}" cy="${y}" r="${P.rStep2}" fill="${P.s2Fill}" stroke="${P.s2}" stroke-width="${P.wNode}"/>`);
      o.push(txt(p, x2, y + 5, P.s2, P.fsNode));
      o.push(`<rect x="${xo - 6}" y="${y - P.leafH / 2}" width="${P.leafW}" height="${P.leafH}" rx="6" fill="${P.outFill}" stroke="${P.out}" stroke-width="${P.wLeaf}"/>`);
      o.push(txt(`${s}${p}`, xo - 6 + P.leafW / 2, y + 5, P.out, P.fsNode));
    });
    o.push(`<circle cx="${x1}" cy="${y1(i)}" r="${P.rStep1}" fill="${P.s1Fill}" stroke="${P.s1}" stroke-width="${P.wNode}"/>`);
    o.push(txt(s, x1, y1(i) + 5, P.s1, P.fsNode));
  });
  const w = spec.width || 570, h = spec.height || ly(leaves - 1) + 62;
  const cap = spec.caption === undefined
    ? `${n1} × ${n2} = ${leaves} ${spec.outcomePlural || 'outcomes'}: every path through the tree is one ${spec.outcomeName || 'outcome'}`
    : spec.caption;
  if (cap) o.push(txt(cap, w / 2, h - 16, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { product };

export default function renderCountTree(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `countTree: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderCountTree, C as countTreeDefaults };
