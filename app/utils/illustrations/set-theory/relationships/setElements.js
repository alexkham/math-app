// setElements - named elements placed in set regions, and pairings between them.
//
// renderSetElements(spec) -> SVG string. Docs: setElements.md beside it.
//
// Set-theory's first authored component. It draws what the Venn tools do not:
// the individual elements of a set, where each one sits, and which element is
// paired with which.
//
// Scene types (spec.kind):
//   pairing    two sets side by side with arrows pairing their elements;
//              several panels, one comparison each
//   partition  a set divided into blocks, each element in exactly one
//
// Palette is the set-theory census (process v10 3.3), recorded in
// $meta.palette of session-docs/methodology/illustrations/set-theory/figure-registry.json.
// It is NOT the trigonometry palette: blue #2F4FD8 and teal #0E7C66, not
// indigo and green.

const C = {
  primary: '#2F4FD8', primaryLight: '#EAEEFF',
  secondary: '#0E7C66', secondaryLight: '#DFF2ED',
  result: '#B4690E', resultFill: '#FDF3E3',
  negation: '#C0392B',
  text: '#1E293B', muted: '#64748B', hairline: '#CBD5E1', surface: '#FFFFFF',

  wRegion: 1.2, wElement: 1.4, wArrow: 1.4, wDivider: 1,
  rElement: 13,
  fsElement: 13, fsSetName: 13, fsVerdict: 13, fsNote: 11, fsBlock: 12, fsCaption: 13,
};

const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// An element: a small white disc carrying its name, ringed in its set's colour.
function element(x, y, label, col, P) {
  return `<circle cx="${f1(x)}" cy="${f1(y)}" r="${P.rElement}" fill="${P.surface}" stroke="${col}" stroke-width="${P.wElement}"/>` +
    txt(label, x, y + 4.5, col, P.fsElement);
}

function arrow(x1, y1, x2, y2, col, P) {
  const a = Math.atan2(y2 - y1, x2 - x1), h = 7;
  return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${col}" stroke-width="${P.wArrow}"/>` +
    `<path d="M ${f1(x2)} ${f1(y2)} L ${f1(x2 - h * Math.cos(a - 0.4))} ${f1(y2 - h * Math.sin(a - 0.4))} ` +
    `L ${f1(x2 - h * Math.cos(a + 0.4))} ${f1(y2 - h * Math.sin(a + 0.4))} Z" fill="${col}"/>`;
}

// ---------------------------------------------------------------- pairing
// One panel: set L on the left, set R on the right, an arrow for each pair.
// An element of L with no pair is ringed in negation and labelled - the
// unpaired element is the whole claim of a failing panel, so it must be
// unmistakable, not merely arrow-less.
function pairingPanel(p, x0, P) {
  const o = [];
  const gap = p.gap || 46, top = 70;
  const n = Math.max(p.left.length, p.right.length);
  const lh = n * gap;
  const lx = x0 + 60, rx = x0 + 200;
  const cy = top + lh / 2 - gap / 2, ry = lh / 2 + 18;
  o.push(`<ellipse cx="${lx}" cy="${f1(cy)}" rx="42" ry="${f1(ry)}" fill="${P.primaryLight}" stroke="${P.primary}" stroke-width="${P.wRegion}"/>`);
  o.push(`<ellipse cx="${rx}" cy="${f1(cy)}" rx="42" ry="${f1(ry)}" fill="${P.secondaryLight}" stroke="${P.secondary}" stroke-width="${P.wRegion}"/>`);
  o.push(txt(p.leftName, lx, top - 36, P.primary, P.fsSetName));
  o.push(txt(p.rightName, rx, top - 36, P.secondary, P.fsSetName));
  const y = (i) => top + i * gap;
  (p.pairs || []).forEach(([i, j]) => o.push(arrow(lx + 14, y(i), rx - 16, y(j), P.result, P)));
  p.left.forEach((t, i) => {
    const paired = (p.pairs || []).some(([a]) => a === i);
    o.push(element(lx, y(i), t, paired ? P.primary : P.negation, P));
    if (!paired) o.push(txt(p.unpairedLabel || 'no partner', lx + 30, y(i) + 4, P.negation, P.fsNote, 'start', 400));
  });
  p.right.forEach((t, j) => o.push(element(rx, y(j), t, P.secondary, P)));
  o.push(txt(p.verdict, x0 + 130, top + lh + 34, p.ok ? P.result : P.negation, P.fsVerdict));
  return { body: o.join(''), h: top + lh + 58 };
}

function pairing(spec, P) {
  const pw = 270, gap = 20;
  const panels = spec.panels || [];
  const built = panels.map((p, i) => pairingPanel(p, i * (pw + gap), P));
  const w = spec.width || panels.length * pw + (panels.length - 1) * gap;
  const h = spec.height || Math.max(...built.map((b) => b.h));
  const o = built.map((b) => b.body);
  for (let i = 1; i < panels.length; i += 1) {
    const x = i * (pw + gap) - gap / 2;
    o.push(`<line x1="${f1(x)}" y1="30" x2="${f1(x)}" y2="${f1(h - 30)}" stroke="${P.hairline}" stroke-width="${P.wDivider}"/>`);
  }
  return { w, h, body: o.join('') };
}

// -------------------------------------------------------------- partition
// Blocks sit inside the set's outline, side by side and not touching: no
// overlap and no gap are both visible at a glance. Block widths follow the
// number of elements in each, so a singleton block reads as small.
function partition(spec, P) {
  const w = spec.width || 520, h = spec.height || 280;
  const X = 40, Y = 40, W = w - 80, H = spec.setHeight || 170;
  const o = [];
  o.push(`<rect x="${X}" y="${Y}" width="${W}" height="${H}" rx="14" fill="none" stroke="${P.text}" stroke-width="${P.wRegion}"/>`);
  if (spec.setLabel) o.push(txt(spec.setLabel, X + 8, Y - 10, P.text, P.fsCaption, 'start'));
  const blocks = spec.blocks || [];
  const inner = W - 28, pad = 14;
  const total = blocks.reduce((s, b) => s + Math.max(b.items.length, 1), 0);
  const avail = inner - pad * (blocks.length - 1);
  const tones = [
    [P.primary, P.primaryLight], [P.secondary, P.secondaryLight], [P.result, P.resultFill],
  ];
  let x = X + 14;
  blocks.forEach((b, i) => {
    const bw = Math.max(54, (avail * Math.max(b.items.length, 1)) / total);
    const [stroke, fill] = tones[i % tones.length];
    o.push(`<rect x="${f1(x)}" y="${Y + 14}" width="${f1(bw)}" height="${H - 28}" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="${P.wRegion}"/>`);
    const step = bw / (b.items.length + 1);
    b.items.forEach((t, k) => o.push(element(x + step * (k + 1), Y + H / 2, t, stroke, P)));
    if (b.label) o.push(txt(b.label, x + bw / 2, Y + H - 24, stroke, P.fsBlock));
    x += bw + pad;
  });
  if (spec.note) o.push(txt(spec.note, w / 2, h - 30, P.text, P.fsCaption));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { pairing, partition };

export default function renderSetElements(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `setElements: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderSetElements, C as setElementsDefaults };
