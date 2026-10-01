// setElements.v2 - listing every element of an infinite set, and the diagonal
// argument that no listing of the reals can be complete.
//
// Second file, not an edit to setElements.js: rule 11 forbids editing a shipped
// renderer to gain a scene type, and setElements was integrated on the
// relationships page before these were needed.
//
//   setElements.js     pairing / partition     relationships (partition)
//   setElements.v2.js  pairing (corrected) / listing / diagonal
//                      relationships (equivalence), cardinality obj3-obj5
//
// renderSetElementsV2(spec) -> SVG string. Docs: setElements.v2.md beside it.
//
// Palette is the set-theory census, as in setElements.js.

const C = {
  primary: '#2F4FD8', primaryLight: '#EAEEFF',
  secondary: '#0E7C66', secondaryLight: '#DFF2ED',
  result: '#B4690E', resultFill: '#FDF3E3',
  negation: '#C0392B',
  text: '#1E293B', muted: '#64748B', hairline: '#CBD5E1', surface: '#FFFFFF',

  wRegion: 1.2, wElement: 1.4, wArrow: 1.4, wSkipped: 1, wPath: 1.6, wBox: 1.4, wDivider: 1,
  rElement: 13, rCell: 17, cell: 74, rowGap: 40, digitGap: 44, box: 30,
  fsCell: 12, fsIndex: 11, fsAxis: 12, fsTick: 11, fsNote: 11, fsLine: 13,
  fsDigit: 15, fsRowName: 14, fsElement: 13, fsSetName: 13, fsVerdict: 13,
};

const FONT = 'sans-serif';
const f1 = (n) => (+n).toFixed(1);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const SUB = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
const sub = (n) => String(n).split('').map((d) => SUB[+d]).join('');

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 13}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// An arrow between two cell centres, trimmed by r at both ends.
function step(a, b, r, col, P) {
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), h = 7;
  const x1 = a[0] + r * Math.cos(ang), y1 = a[1] + r * Math.sin(ang);
  const x2 = b[0] - r * Math.cos(ang), y2 = b[1] - r * Math.sin(ang);
  return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${col}" stroke-width="${P.wPath}"/>` +
    `<path d="M ${f1(x2)} ${f1(y2)} L ${f1(x2 - h * Math.cos(ang - 0.4))} ${f1(y2 - h * Math.sin(ang - 0.4))} ` +
    `L ${f1(x2 - h * Math.cos(ang + 0.4))} ${f1(y2 - h * Math.sin(ang + 0.4))} Z" fill="${col}"/>`;
}

// ---------------------------------------------------------------- pairing
// setElements.js pairing, corrected. Found on the page 2026-09-28: there the
// set name sat on the ellipse's top edge, and the ellipse edge ran through the
// "no partner" label. Here the name sits 10px above the ellipse, and the
// ellipses are narrower and further apart so the label fits in the gap.
// Same spec shape as setElements.js pairing.
function arrow(x1, y1, x2, y2, col, P) {
  const a = Math.atan2(y2 - y1, x2 - x1), h = 7;
  return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${col}" stroke-width="${P.wArrow}"/>` +
    `<path d="M ${f1(x2)} ${f1(y2)} L ${f1(x2 - h * Math.cos(a - 0.4))} ${f1(y2 - h * Math.sin(a - 0.4))} ` +
    `L ${f1(x2 - h * Math.cos(a + 0.4))} ${f1(y2 - h * Math.sin(a + 0.4))} Z" fill="${col}"/>`;
}
function element(x, y, label, col, P) {
  return `<circle cx="${f1(x)}" cy="${f1(y)}" r="${P.rElement}" fill="${P.surface}" stroke="${col}" stroke-width="${P.wElement}"/>` +
    txt(label, x, y + 4.5, col, P.fsElement);
}
function pairingPanel(p, x0, P) {
  const o = [];
  const gap = p.gap || 46, top = 84, erx = 38;
  const n = Math.max(p.left.length, p.right.length);
  const lh = n * gap;
  const lx = x0 + 55, rx = x0 + 215;
  const cy = top + lh / 2 - gap / 2, ry = lh / 2 + 18;
  o.push(`<ellipse cx="${lx}" cy="${f1(cy)}" rx="${erx}" ry="${f1(ry)}" fill="${P.primaryLight}" stroke="${P.primary}" stroke-width="${P.wRegion}"/>`);
  o.push(`<ellipse cx="${rx}" cy="${f1(cy)}" rx="${erx}" ry="${f1(ry)}" fill="${P.secondaryLight}" stroke="${P.secondary}" stroke-width="${P.wRegion}"/>`);
  o.push(txt(p.leftName, lx, cy - ry - 10, P.primary, P.fsSetName));
  o.push(txt(p.rightName, rx, cy - ry - 10, P.secondary, P.fsSetName));
  const y = (i) => top + i * gap;
  (p.pairs || []).forEach(([i, j]) => o.push(arrow(lx + 14, y(i), rx - 16, y(j), P.result, P)));
  p.left.forEach((t, i) => {
    const paired = (p.pairs || []).some(([a]) => a === i);
    o.push(element(lx, y(i), t, paired ? P.primary : P.negation, P));
    if (!paired) o.push(txt(p.unpairedLabel || 'no partner', lx + erx + 8, y(i) + 4, P.negation, P.fsNote, 'start', 400));
  });
  p.right.forEach((t, j) => o.push(element(rx, y(j), t, P.secondary, P)));
  o.push(txt(p.verdict, x0 + 135, top + lh + 34, p.ok ? P.result : P.negation, P.fsVerdict));
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

// ---------------------------------------------------------------- listing
// Positive fractions p/q in a grid, numerator across, denominator down, walked
// diagonal by diagonal in alternating directions. A cell not in lowest terms
// (2/2, 2/4 ...) is on the path but dashed and unnumbered: it names a number
// already listed, and "every element appears exactly once" is the claim.
// Cells off the drawn part of the path stay plain - reached later.
function listing(spec, P) {
  const N = spec.size || 5, s = P.cell, x0 = 110, y0 = 90;
  const xy = ([p, q]) => [x0 + (p - 1) * s, y0 + (q - 1) * s];
  const walk = [];
  for (let d = 2; d <= N + 1; d += 1) {
    const diag = [];
    for (let p = 1; p < d; p += 1) diag.push([p, d - p]);
    walk.push(...(d % 2 === 1 ? diag.reverse() : diag));
  }
  const label = ([p, q]) => (q === 1 ? String(p) : `${p}/${q}`);
  const idx = {}, listed = [];
  walk.forEach((c) => {
    if (gcd(c[0], c[1]) === 1) { listed.push(label(c)); idx[c.join('/')] = listed.length; }
  });

  const w = spec.width || x0 + (N - 1) * s + 110, h = spec.height || y0 + (N - 1) * s + 134;
  const o = [];
  const mid = x0 + ((N - 1) * s) / 2, midY = y0 + ((N - 1) * s) / 2;
  o.push(txt(spec.acrossLabel || 'numerator →', mid, 40, P.text, P.fsAxis, 'middle', 400));
  // turned clockwise so the arrow points down, the way denominators grow
  o.push(`<text x="40" y="${f1(midY)}" transform="rotate(90 40 ${f1(midY)})" text-anchor="middle" font-family="${FONT}" ` +
    `font-size="${P.fsAxis}" font-weight="400" fill="${P.text}">${esc(spec.downLabel || 'denominator →')}</text>`);
  for (let i = 1; i <= N; i += 1) {
    o.push(txt(i, xy([i, 1])[0], y0 - 28, P.muted, P.fsTick, 'middle', 400));
    o.push(txt(i, x0 - 38, xy([1, i])[1] + 4, P.muted, P.fsTick, 'middle', 400));
  }
  for (let k = 1; k < walk.length; k += 1) o.push(step(xy(walk[k - 1]), xy(walk[k]), P.rCell + 1, P.result, P));

  const onWalk = new Set(walk.map((c) => c.join('/')));
  for (let p = 1; p <= N; p += 1) {
    for (let q = 1; q <= N; q += 1) {
      const [x, y] = xy([p, q]), k = `${p}/${q}`;
      if (gcd(p, q) !== 1) {
        o.push(`<circle cx="${f1(x)}" cy="${f1(y)}" r="${P.rCell}" fill="${P.surface}" stroke="${P.muted}" stroke-width="${P.wSkipped}" stroke-dasharray="3 3"/>`);
        o.push(txt(label([p, q]), x, y + 4, P.muted, P.fsCell, 'middle', 400));
      } else {
        const on = onWalk.has(k);
        o.push(`<circle cx="${f1(x)}" cy="${f1(y)}" r="${P.rCell}" fill="${on ? P.primaryLight : P.surface}" stroke="${on ? P.primary : P.hairline}" stroke-width="${P.wElement}"/>`);
        o.push(txt(label([p, q]), x, y + 4, on ? P.primary : P.muted, P.fsCell));
      }
      // upper-left: the one corner no step of the walk ever enters through
      if (idx[k]) o.push(txt(idx[k], x - P.rCell - 1, y - P.rCell + 1, P.result, P.fsIndex, 'middle', 700));
    }
  }
  for (let i = 1; i <= N; i += 1) {
    o.push(txt('…', xy([N, i])[0] + 46, xy([N, i])[1] + 4, P.muted, P.fsLine, 'middle', 400));
    o.push(txt('⋮', xy([i, N])[0], xy([i, N])[1] + 44, P.muted, P.fsLine, 'middle', 400));
  }
  const ly = y0 + (N - 1) * s + 75;
  o.push(`<circle cx="158" cy="${f1(ly)}" r="9" fill="${P.surface}" stroke="${P.muted}" stroke-width="${P.wSkipped}" stroke-dasharray="3 3"/>`);
  o.push(txt(spec.skippedNote || 'dashed: already listed (2/2 = 1), skipped', 174, ly + 4, P.muted, P.fsNote, 'start', 400));
  o.push(txt(`${spec.setName || 'ℚ⁺'} in order: ${listed.join(', ')}, …`, w / 2, ly + 35, P.text, P.fsLine));
  return { w, h, body: o.join('') };
}

// --------------------------------------------------------------- diagonal
// An assumed complete list of decimals; the n-th digit of the n-th row is
// boxed, and the new number x takes each boxed digit changed. Each row carries
// the digit where it differs from x, in negation: x is on no row.
function diagonal(spec, P) {
  const rows = spec.rows || [];
  const n = rows.length, cx = (k) => 150 + k * P.digitGap, ry = (i) => 70 + i * P.rowGap;
  const change = spec.change || ((d) => (d + 1) % 10);
  const w = spec.width || 560, h = spec.height || ry(n) + 110;
  const o = [], b = P.box;
  const boxAt = (x, y) => `<rect x="${f1(x - b / 2)}" y="${f1(y - b / 2 - 5)}" width="${b}" height="${b}" rx="6" fill="${P.resultFill}" stroke="${P.result}" stroke-width="${P.wBox}"/>`;
  if (spec.heading) o.push(txt(spec.heading, w / 2, 30, P.text, P.fsAxis, 'middle', 400));

  rows.forEach((r, i) => {
    const y = ry(i) + 5;
    o.push(txt(`r${sub(i + 1)} = 0.`, 120, y, P.primary, P.fsRowName, 'end'));
    r.forEach((d, k) => {
      if (k === i) o.push(boxAt(cx(k), y));
      o.push(txt(d, cx(k), y, k === i ? P.result : P.primary, P.fsDigit, 'middle', k === i ? 700 : 500));
    });
    o.push(txt('…', cx(r.length), y, P.muted, P.fsRowName, 'middle', 400));
    o.push(txt(`differs from x in digit ${i + 1}`, cx(r.length) + 30, y, P.negation, P.fsNote, 'start', 400));
  });

  const yx = ry(n) + 39;
  o.push(`<line x1="60" y1="${f1(yx - 35)}" x2="${f1(w - 40)}" y2="${f1(yx - 35)}" stroke="${P.hairline}" stroke-width="${P.wDivider}"/>`);
  o.push(txt('x = 0.', 120, yx, P.result, P.fsRowName, 'end'));
  rows.forEach((r, k) => {
    const d = change(r[k]);
    o.push(boxAt(cx(k), yx));
    o.push(txt(d, cx(k), yx, P.result, P.fsDigit, 'middle', 700));
    o.push(txt(`${r[k]}→${d}`, cx(k), yx + 29, P.muted, P.fsNote, 'middle', 400));
  });
  o.push(txt('…', cx(n), yx, P.muted, P.fsRowName, 'middle', 400));
  if (spec.verdict) o.push(txt(spec.verdict, w / 2, h - 18, P.negation, P.fsLine));
  return { w, h, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { pairing, listing, diagonal };

export default function renderSetElementsV2(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `setElements.v2: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
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

export { renderSetElementsV2, C as setElementsV2Defaults };
