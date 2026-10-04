// inverseMirror - points of f and f^-1 swapped across the mirror line y = x.
//
// renderInverseMirror(spec) -> SVG string. Docs: inverseMirror.md beside it.
//
// Scene types (spec.kind):
//   swapPoints   pairs (a, b) on f and (b, a) on f^-1, each joined by a dotted
//                segment that crosses y = x at a right angle at its midpoint;
//                optional fixed points on the line, which the swap leaves alone
//
// Palette: the page theme ($meta.palette.$pageTheme in the functions figure
// registry): f points site blue, f^-1 points amber, the mirror navy.

const C = {
  f: '#2563EB', fFill: '#DBEAFE', inv: '#B45309', invFill: '#FDF3E3', mirror: '#06357A',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',
  wMirror: 1.8, wLink: 1.4, rPoint: 6, rMid: 3,
  fsTick: 10, fsAxis: 11, fsPoint: 12, fsMirror: 12, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);
const num = (v) => (v < 0 ? `−${-v}` : String(v));

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// ---------------------------------------------------------------- swapPoints
// spec.range [lo, hi] for both axes (square grid). spec.pairs [{a, b,
// fPos, invPos}]: the point (a, b) on f and (b, a) on f^-1; *Pos picks the
// label side ('ne' | 'nw' | 'se' | 'sw'). spec.fixed [{v, pos}]: (v, v) on
// the mirror.
function swapPoints(spec, P) {
  const [lo, hi] = spec.range, L = 50, S = 340, W = 480, top = 24;
  const u = S / (hi - lo), X = (x) => L + (x - lo) * u, Y = (y) => top + (hi - y) * u;
  const o = [];
  for (let v = lo; v <= hi; v += 1) if (v) {
    o.push(`<line x1="${f1(X(v))}" y1="${top}" x2="${f1(X(v))}" y2="${top + S}" stroke="${P.grid}"/>`);
    o.push(`<line x1="${L}" y1="${f1(Y(v))}" x2="${L + S}" y2="${f1(Y(v))}" stroke="${P.grid}"/>`);
    o.push(txt(num(v), X(v), Y(0) + 14, P.muted, P.fsTick, 'middle', 500));
    o.push(txt(num(v), X(0) - 6, Y(v) + 4, P.muted, P.fsTick, 'end', 500));
  }
  o.push(`<line x1="${L}" y1="${f1(Y(0))}" x2="${L + S}" y2="${f1(Y(0))}" stroke="${P.axis}" stroke-width="1.4"/>`);
  o.push(`<line x1="${f1(X(0))}" y1="${top}" x2="${f1(X(0))}" y2="${top + S}" stroke="${P.axis}" stroke-width="1.4"/>`);
  o.push(txt('x', L + S + 6, Y(0) + 4, P.muted, P.fsAxis, 'start'));
  o.push(txt('y', X(0) + 6, top + 2, P.muted, P.fsAxis, 'start'));
  o.push(`<line x1="${f1(X(lo))}" y1="${f1(Y(lo))}" x2="${f1(X(hi))}" y2="${f1(Y(hi))}" stroke="${P.mirror}" stroke-width="${P.wMirror}" stroke-dasharray="7 5"/>`);
  o.push(txt(spec.mirrorLabel || 'y = x', X(hi) + 4, Y(hi) + 14, P.mirror, P.fsMirror, 'start', 700));
  const off = { ne: [10, -10, 'start'], nw: [-10, -10, 'end'], se: [10, 20, 'start'], sw: [-10, 20, 'end'] };
  const label = (x, y, t, col, pos) => { const [dx, dy, an] = off[pos || 'ne']; return txt(t, X(x) + dx, Y(y) + dy, col, P.fsPoint, an, 700); };
  (spec.pairs || []).forEach(({ a, b, fPos, invPos }) => {
    const m = (a + b) / 2;
    o.push(`<line x1="${f1(X(a))}" y1="${f1(Y(b))}" x2="${f1(X(b))}" y2="${f1(Y(a))}" stroke="${P.muted}" stroke-width="${P.wLink}" stroke-dasharray="2 4"/>`);
    o.push(`<circle cx="${f1(X(m))}" cy="${f1(Y(m))}" r="${P.rMid}" fill="${P.mirror}"/>`);
    o.push(`<circle cx="${f1(X(a))}" cy="${f1(Y(b))}" r="${P.rPoint}" fill="${P.fFill}" stroke="${P.f}" stroke-width="2.2"/>`);
    o.push(`<circle cx="${f1(X(b))}" cy="${f1(Y(a))}" r="${P.rPoint}" fill="${P.invFill}" stroke="${P.inv}" stroke-width="2.2"/>`);
    o.push(label(a, b, `(${num(a)}, ${num(b)}) on f`, P.f, fPos));
    o.push(label(b, a, `(${num(b)}, ${num(a)}) on f⁻¹`, P.inv, invPos));
  });
  (spec.fixed || []).forEach(({ v, pos, text }) => {
    o.push(`<circle cx="${f1(X(v))}" cy="${f1(Y(v))}" r="${P.rPoint}" fill="#fff" stroke="${P.mirror}" stroke-width="2.2"/>`);
    o.push(label(v, v, text || `(${num(v)}, ${num(v)}) stays put`, P.mirror, pos));
  });
  const H = top + S + 54;
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 14, P.text, P.fsCaption, 'middle', 600));
  return { w: W, h: H, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { swapPoints };

export default function renderInverseMirror(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `inverseMirror: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `Add new kinds in a further file per process v10 rule 11.`
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

export { renderInverseMirror, C as inverseMirrorDefaults };
