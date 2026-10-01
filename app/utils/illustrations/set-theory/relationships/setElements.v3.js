// setElements.v3 - building every subset of a set by one in-or-out choice per
// element.
//
// Third file, not an edit: rule 11 - setElements.js and setElements.v2.js had
// both shipped before this was needed.
//
//   setElements.js     pairing / partition                 relationships
//   setElements.v2.js  pairing (corrected) / listing / diagonal
//                                                          relationships, cardinality
//   setElements.v3.js  choices                             subsets obj4
//
// renderSetElementsV3(spec) -> SVG string. Docs: setElements.v3.md beside it.
//
// Palette is the set-theory census, as in setElements.js.

const C = {
  primary: '#2F4FD8', primaryLight: '#EAEEFF',
  result: '#B4690E', resultFill: '#FDF3E3',
  text: '#1E293B', muted: '#64748B', hairline: '#CBD5E1', surface: '#FFFFFF',

  wIn: 1.6, wOut: 1.2, wLeaf: 1.4, rNode: 4,
  levelGap: 72, leafW: 56, leafH: 28,
  fsLevel: 12, fsEdge: 11, fsLeaf: 12, fsTotal: 14,
};

const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴' };

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// ---------------------------------------------------------------- choices
// One level per element, top to bottom. At each node the left branch keeps
// the element (solid, primary) and the right branch leaves it out (dashed,
// muted). The leaves are the subsets, full set at the left, empty set at the
// right, and the total line multiplies one 2 per level: the tree is the
// reason the count is 2^n, not just a list of the answers.
function choices(spec, P) {
  const els = spec.elements || ['a', 'b', 'c'];
  const n = els.length, leaves = 1 << n;
  const w = spec.width || 620, x0 = 120, x1 = w - 24, top = 56, dy = P.levelGap;
  const span = (x1 - x0) / leaves;
  const X = (lvl, i) => x0 + span * (leaves >> lvl) * (i + 0.5);
  const Y = (lvl) => top + lvl * dy;
  const h = spec.height || Y(n) + 72;
  const o = [];

  for (let l = 0; l < n; l += 1) {
    o.push(txt(`${els[l]}: ${spec.levelQuestion || 'in or out?'}`, 20, (Y(l) + Y(l + 1)) / 2 + 4, P.text, P.fsLevel, 'start', 400));
    for (let i = 0; i < (1 << l); i += 1) {
      const px = X(l, i), py = Y(l);
      [0, 1].forEach((b) => {
        const keep = b === 0;
        const cx = X(l + 1, 2 * i + b), cy = l + 1 === n ? Y(l + 1) - P.leafH / 2 : Y(l + 1);
        o.push(`<line x1="${f1(px)}" y1="${f1(py)}" x2="${f1(cx)}" y2="${f1(cy)}" stroke="${keep ? P.primary : P.muted}" ` +
          `stroke-width="${keep ? P.wIn : P.wOut}"${keep ? '' : ' stroke-dasharray="4 3"'}/>`);
        o.push(txt(keep ? 'in' : 'out', (px + cx) / 2 + (keep ? -8 : 8), (py + cy) / 2 + 2,
          keep ? P.primary : P.muted, P.fsEdge, keep ? 'end' : 'start', keep ? 600 : 400));
      });
    }
  }
  for (let l = 0; l < n; l += 1) {
    for (let i = 0; i < (1 << l); i += 1) o.push(`<circle cx="${f1(X(l, i))}" cy="${f1(Y(l))}" r="${P.rNode}" fill="${P.text}"/>`);
  }
  for (let i = 0; i < leaves; i += 1) {
    const inside = els.filter((_, k) => !((i >> (n - 1 - k)) & 1));
    const x = X(n, i), y = Y(n);
    o.push(`<rect x="${f1(x - P.leafW / 2)}" y="${f1(y - P.leafH / 2)}" width="${P.leafW}" height="${P.leafH}" rx="6" ` +
      `fill="${P.resultFill}" stroke="${P.result}" stroke-width="${P.wLeaf}"/>`);
    o.push(txt(inside.length ? `{${inside.join(', ')}}` : '∅', x, y + 4.5, P.result, P.fsLeaf));
  }
  const twos = Array(n).fill('2').join(' × ');
  o.push(txt(spec.total || `${twos} = 2${SUP[n] || `^${n}`} = ${leaves} subsets`, (x0 + x1) / 2, h - 22, P.text, P.fsTotal));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { choices };

export default function renderSetElementsV3(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `setElements.v3: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `Add a new one in a further file per process v10 rule 11; do not edit this one.`
    );
  }
  const { w, h, body } = build(spec, P);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${f1(w)} ${f1(h)}" width="${f1(w)}" height="${f1(h)}" ` +
    `role="img" style="display:block;max-width:100%;height:auto">` +
    (spec.svgTitle ? `<title>${esc(spec.svgTitle)}</title>` : '') +
    body +
    `</svg>`
  );
}

export { renderSetElementsV3, C as setElementsV3Defaults };
