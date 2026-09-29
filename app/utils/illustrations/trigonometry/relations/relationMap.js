// relationMap - named things and the relations between them. No geometry.
//
// renderRelationMap(spec) -> SVG string. Docs: relationMap.md beside it.
//
// The one component in this subject that draws nothing mathematical: boxes,
// arrows and labels. It exists for the sections whose claim is about how
// quantities are derived from each other rather than about a shape.
//
// Scene types (spec.kind):
//   roots  several boxes reducing to one or two root boxes
//   chain  a left-to-right derivation, each arrow labelled with its rule,
//          optionally fanning out to a set of results at the end
//
// Palette is the trigonometry census (process v10 3.3). Blue is a starting
// point or a root; amber is something derived from it. That convention is the
// whole reading of both scene types.

const C = {
  primary: '#4F46E5',
  primaryFill: '#EEF2FF',
  resultStroke: '#B45309',
  resultFill: '#FEF6EC',
  secondary: '#16A34A',
  negation: '#DC2626',
  text: '#1E3A5F',
  muted: '#64748B',
  mutedLight: '#94A3B8',
  hairline: '#CBD5E1',
  surface: '#F8FAFC',

  wBox: 1.4,
  wArrow: 1.3,
  radius: 7,
  headLen: 6,

  fsBox: 15,
  fsSmall: 13,
  fsLabel: 11,
  fsNote: 12,
  weightBold: 600,
};

const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

function box(x, y, w, h, label, stroke, fill, size, P) {
  return `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="${P.radius}" ` +
    `fill="${fill}" stroke="${stroke}" stroke-width="${P.wBox}"/>` +
    txt(label, x + w / 2, y + h / 2 + 5, stroke, size || P.fsBox);
}

function arrow(x1, y1, x2, y2, col, P) {
  const a = Math.atan2(y2 - y1, x2 - x1), hd = P.headLen;
  return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${col}" stroke-width="${P.wArrow}"/>` +
    `<path d="M ${f1(x2)} ${f1(y2)} L ${f1(x2 - hd * Math.cos(a - 0.4))} ${f1(y2 - hd * Math.sin(a - 0.4))} ` +
    `L ${f1(x2 - hd * Math.cos(a + 0.4))} ${f1(y2 - hd * Math.sin(a + 0.4))} Z" fill="${col}"/>`;
}

// ----------------------------------------------------------------- roots
// Each derived box gets ONE arrow, to the root it is built from, carrying the
// whole relation as its label. The first build drew tan and cot to BOTH roots:
// four arrows crossed the middle of the figure and it read as a tangle.
function roots(spec, P) {
  const bw = spec.boxWidth || 92, bh = spec.boxHeight || 36;
  const w = spec.width || 560, h = spec.height || 286;
  const rootY = spec.rootY === undefined ? 34 : spec.rootY;
  const leafY = spec.leafY === undefined ? 196 : spec.leafY;
  const o = [];

  const rootX = {};
  (spec.roots || []).forEach((r) => {
    rootX[r.key] = r.x + bw / 2;
    o.push(box(r.x, rootY, bw, bh, r.label, P.primary, P.primaryFill, spec.boxSize, P));
  });
  if (spec.rootsLabel) {
    const xs = (spec.roots || []).map((r) => r.x);
    o.push(txt(spec.rootsLabel, (Math.min(...xs) + Math.max(...xs)) / 2 + bw / 2, rootY - 13, P.primary, P.fsNote));
  }

  (spec.leaves || []).forEach((l) => {
    o.push(box(l.x, leafY, bw, bh, l.label, P.resultStroke, P.resultFill, spec.boxSize, P));
    const x1 = l.x + bw / 2, y1 = leafY, x2 = rootX[l.root], y2 = rootY + bh + 3;
    o.push(arrow(x1, y1, x2, y2, P.resultStroke, P));
    const t = spec.labelAt === undefined ? 0.52 : spec.labelAt;
    o.push(txt(l.relation, x1 + (x2 - x1) * t + (x1 < x2 ? -20 : 20), y1 + (y2 - y1) * t, P.resultStroke, P.fsLabel));
  });

  if (spec.note) o.push(txt(spec.note, w / 2, h - 12, P.text, P.fsNote));
  return { w, h, body: o.join('') };
}

// ----------------------------------------------------------------- chain
function chain(spec, P) {
  const w = spec.width || 620, h = spec.height || 250;
  const bw = spec.boxWidth || 130, bh = spec.boxHeight || 44;
  const y = spec.y === undefined ? 52 : spec.y;
  const o = [];
  const steps = spec.steps || [];

  steps.forEach((s, i) => {
    const stroke = s.tone === 'root' ? P.primary : s.tone === 'result' ? P.resultStroke : P.text;
    const fill = s.tone === 'root' ? P.primaryFill : s.tone === 'result' ? P.resultFill : P.surface;
    o.push(box(s.x, y, bw, bh, s.label, stroke, fill, spec.boxSize || 14, P));
    if (s.under) o.push(txt(s.under, s.x + bw / 2, y + bh + 16, P.muted, P.fsLabel, 'middle', 400));
    if (i > 0) {
      const prev = steps[i - 1];
      o.push(arrow(prev.x + bw, y + bh / 2, s.x, y + bh / 2, P.muted, P));
      if (s.via) o.push(txt(s.via, (prev.x + bw + s.x) / 2, y - 6, P.muted, P.fsLabel));
    }
  });

  // the results the last step fans out to
  const outs = spec.outputs || [];
  const ow = spec.outWidth || 104, oh = spec.outHeight || 34;
  const last = steps[steps.length - 1];
  outs.forEach((t, i) => {
    const bx = spec.outX === undefined ? 500 : spec.outX;
    const by = (spec.outY === undefined ? 22 : spec.outY) + i * (spec.outGap === undefined ? 50 : spec.outGap);
    o.push(box(bx, by, ow, oh, t, P.resultStroke, P.resultFill, P.fsSmall, P));
    if (last) o.push(arrow(last.x + bw, y + bh / 2, bx, by + oh / 2, P.resultStroke, P));
  });

  if (spec.note) o.push(txt(spec.note, spec.noteX === undefined ? w / 2 : spec.noteX, h - 12, P.text, P.fsNote));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { roots, chain };

export default function renderRelationMap(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `relationMap: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderRelationMap, C as relationMapDefaults };
