// jointRectangle - the unit square as total probability 1, cut so that areas are
// probabilities.
//
// renderJointRectangle(spec) -> SVG string. Docs: jointRectangle.md beside it.
//
// Scene types (spec.kind):
//   split   two columns, A and not-A, of widths P(A) and 1 - P(A); inside each
//           column the bottom part is B, of height P(B | that column). Each
//           coloured part is a joint probability (width x height), the two
//           coloured parts together are P(B), and P(A | B) is the A-share of the
//           coloured area. The joint areas are computed and printed in the parts.
//
// Palette: the page theme ($meta.palette.$pageTheme in the probability figure
// registry): the A-and-B part site blue, the notA-and-B part amber, frame navy.

const C = {
  f: '#2563EB', fFill: '#BFD3F8', r: '#B45309', rFill: '#F5D9B8', g: '#06357A',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',
  wFrame: 1, wPart: 1.6,
  fsHead: 12, fsArea: 11, fsNote: 12, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fmt = (v) => String(Math.round(v * 1000) / 1000);

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${Math.round(x * 10) / 10}" y="${Math.round(y * 10) / 10}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// --------------------------------------------------------------------- split

function renderSplit(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const W = 480, H = spec.height || 376, X0 = 40, Y0 = 40, S = 260;
  const pA = spec.pA, bA = spec.pBgivenA, bN = spec.pBgivenNotA;
  if (![pA, bA, bN].every((v) => v >= 0 && v <= 1)) throw new Error('jointRectangle: probabilities must lie in [0, 1]');
  const wA = S * pA, wN = S - wA, hA = S * bA, hN = S * bN;
  const o = [`<rect width="${W}" height="${H}" fill="#ffffff"/>`];

  o.push(`<rect x="${X0}" y="${Y0}" width="${wA}" height="${S}" fill="#ffffff" stroke="${P.axis}" stroke-width="${P.wFrame}"/>`);
  o.push(`<rect x="${X0 + wA}" y="${Y0}" width="${wN}" height="${S}" fill="#ffffff" stroke="${P.axis}" stroke-width="${P.wFrame}"/>`);
  if (hA > 0) o.push(`<rect x="${X0}" y="${Y0 + S - hA}" width="${wA}" height="${hA}" fill="${P.fFill}" stroke="${P.f}" stroke-width="${P.wPart}"/>`);
  if (hN > 0) o.push(`<rect x="${X0 + wA}" y="${Y0 + S - hN}" width="${wN}" height="${hN}" fill="${P.rFill}" stroke="${P.r}" stroke-width="${P.wPart}"/>`);
  o.push(`<rect x="${X0}" y="${Y0}" width="${S}" height="${S}" fill="none" stroke="${P.g}" stroke-width="${P.wPart}"/>`);

  o.push(txt(spec.labelA || 'A', X0 + wA / 2, Y0 - 10, P.g, P.fsHead));
  o.push(txt(spec.labelNotA || 'not A', X0 + wA + wN / 2, Y0 - 10, P.g, P.fsHead));
  o.push(txt(spec.widthLabelA || fmt(pA), X0 + wA / 2, Y0 + S + 16, P.muted, P.fsArea, 'middle', 400));
  o.push(txt(spec.widthLabelNotA || fmt(1 - pA), X0 + wA + wN / 2, Y0 + S + 16, P.muted, P.fsArea, 'middle', 400));

  if (spec.showAreas !== false) {
    const jA = pA * bA, jN = (1 - pA) * bN;
    if (wA >= 24 && hA >= 16) o.push(txt(fmt(jA), X0 + wA / 2, Y0 + S - hA / 2 + 4, P.f, P.fsArea));
    if (wN >= 24 && hN >= 16) o.push(txt(fmt(jN), X0 + wA + wN / 2, Y0 + S - hN / 2 + 4, P.r, P.fsArea));
  }

  let ly = Y0 + 8;
  const LX = X0 + S + 22;
  (spec.notes || []).forEach((n) => {
    if (n.text) o.push(txt(n.text, LX + (n.indent ? 12 : 0), ly, P[n.color] || P.text, P.fsNote, 'start'));
    ly += 19;
  });
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 12, P.text, P.fsCaption, 'middle', 700));

  const title = esc(spec.svgTitle || spec.caption || 'Unit square of probability');
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}">` +
    `<title>${title}</title>${o.join('')}</svg>`;
}

export default function renderJointRectangle(spec) {
  if (spec.kind === 'split') return renderSplit(spec);
  throw new Error(`jointRectangle: unknown kind "${spec.kind}". Add new scene types in a new file (jointRectangle.v2.js), rule 11.`);
}
