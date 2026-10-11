// pushforward - a random variable drawn as a map from outcomes to numbers.
//
// renderPushforward(spec) -> SVG string. Docs: pushforward.md beside it.
// Built 2026-10-11 for /probability/random-variables; prototype approved by the
// owner the same day.
//
// Scene types (spec.kind):
//   map-and-stack  outcome chips in an Omega box (top); arrows down to a number line; each
//                  outcome lands as a block on the stack above its value, so the stack heights
//                  are the PMF of X. Optional `highlight {test(value), label}` marks an event
//                  {X in A} and its preimage (event-as-preimage); values {0, 1} give an indicator.
const C = { f: '#2563EB', fFill: '#DCE8FD', r: '#B45309', rFill: '#F5D9B8', g: '#06357A', text: '#1E3A5F', muted: '#64748B', grid: '#CBD5E1', axis: '#94A3B8',
  fsChip: 12, fsNote: 12, fsCaption: 13, fsTick: 12 };
const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const r1 = (v) => Math.round(v * 10) / 10;
const txt = (t, x, y, col, size, anchor, weight) => `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" font-size="${size}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
function mapAndStack(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const W = 480, outs = spec.outcomes, perRow = spec.perRow || Math.min(outs.length, 4), rows = Math.ceil(outs.length / perRow);
  const CW = 64, CH = 26, GX = 14, GY = 10, boxW = perRow * CW + (perRow - 1) * GX + 24, BX = (W - boxW) / 2, BY = 30;
  const boxH = rows * CH + (rows - 1) * GY + 24, [vmin, vmax] = spec.range, AX0 = 60, AX1 = W - 120, AY = BY + boxH + 150;
  const X = (v) => AX0 + (v - vmin) / (vmax - vmin) * (AX1 - AX0);
  const hi = spec.highlight, isHi = (v) => hi && hi.test(v);
  const H = spec.height || AY + 96 + (spec.notes || []).length * 18;
  const o = [`<rect width="${W}" height="${H}" fill="#fff"/>`, `<defs><marker id="pfw-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${P.axis}"/></marker></defs>`];
  o.push(`<rect x="${r1(BX)}" y="${BY}" width="${r1(boxW)}" height="${boxH}" rx="8" fill="#fff" stroke="${P.g}" stroke-width="1.6"/>`);
  o.push(txt(spec.omegaLabel || 'Ω', BX - 10, BY + 16, P.g, 15, 'end', 700));
  const count = {}, BLK = 14, arrows = [], chips = [];
  outs.forEach((oc, i) => {
    const cx = BX + 12 + (i % perRow) * (CW + GX), cy = BY + 12 + Math.floor(i / perRow) * (CH + GY), h = isHi(oc.value);
    chips.push(`<rect x="${r1(cx)}" y="${r1(cy)}" width="${CW}" height="${CH}" rx="5" fill="${h ? P.rFill : P.fFill}" stroke="${h ? P.r : P.f}" stroke-width="1.3"/>`);
    chips.push(txt(oc.label, cx + CW / 2, cy + CH / 2 + 4, P.text, P.fsChip, 'middle', 600));
    const k = count[oc.value] = (count[oc.value] || 0) + 1;
    const tx = X(oc.value), ty = AY - 6 - (k - 1) * (BLK + 2) - BLK;
    arrows.push(`<path d="M${r1(cx + CW / 2)},${r1(cy + CH)} C${r1(cx + CW / 2)},${r1(cy + CH + 60)} ${r1(tx)},${r1(ty - 50)} ${r1(tx)},${r1(ty - 2)}" fill="none" stroke="${h ? P.r : P.axis}" stroke-width="1" opacity="0.8" marker-end="url(#pfw-arr)"/>`);
  });
  o.push(...arrows, ...chips);
  Object.entries(count).forEach(([v, n]) => {
    for (let k = 0; k < n; k++) { const h = isHi(+v); o.push(`<rect x="${r1(X(+v) - 14)}" y="${r1(AY - 6 - k * (BLK + 2) - BLK)}" width="28" height="${BLK}" fill="${h ? P.rFill : P.fFill}" stroke="${h ? P.r : P.f}" stroke-width="1.2"/>`); }
    o.push(txt(spec.massLabel ? spec.massLabel(+v, n) : `${n}/${outs.length}`, X(+v), AY + 36, isHi(+v) ? P.r : P.f, P.fsNote));
  });
  o.push(`<line x1="${AX0 - 20}" y1="${AY}" x2="${AX1 + 20}" y2="${AY}" stroke="${P.axis}" stroke-width="1.4"/>`);
  for (let v = vmin; v <= vmax; v++) { o.push(`<line x1="${r1(X(v))}" y1="${AY - 4}" x2="${r1(X(v))}" y2="${AY + 4}" stroke="${P.axis}"/>`); o.push(txt(String(v), X(v), AY + 18, P.muted, P.fsTick, 'middle', 500)); }
  o.push(txt(spec.axisLabel || 'X', AX1 + 20, AY + 20, P.muted, 13, 'start', 700));
  let ny = AY + 62;
  (spec.notes || []).forEach((n) => { o.push(txt(n.text, W / 2, ny, P[n.color] || P.text, P.fsNote, 'middle')); ny += 18; });
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 12, P.text, P.fsCaption, 'middle', 700));
  return [W, H, o];
}
export default function renderPushforward(spec) {
  if (spec.kind !== 'map-and-stack') throw new Error(`pushforward: unknown kind "${spec.kind}". Add new scene types in a new file (pushforward.v2.js), rule 11.`);
  const [W, H, o] = mapAndStack(spec);
  const title = esc(spec.svgTitle || spec.caption || 'A random variable maps outcomes to numbers');
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}"><title>${title}</title>${o.join('')}</svg>`;
}
