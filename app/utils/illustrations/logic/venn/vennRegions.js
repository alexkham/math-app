// vennRegions - two-circle Venn diagram for propositional formulas.
//
// renderVennRegions(spec) -> SVG string. Docs: vennRegions.md beside it.
// Built 2026-10-12 for /logic/truth-tables/biconditionals; prototype approved by
// the owner the same day.
//
//   kind 'two'  regions inside a rectangle (the universe of truth assignments): P only, Q only,
//               both, neither. spec.test(p, q) -> true shades that region. The four regions are
//               painted with masks, so any of the 16 two-variable formulas can be drawn.
const C = { fill: '#BFD3F8', stroke: '#06357A', on: '#2563EB', text: '#1E3A5F', muted: '#64748B', frame: '#94A3B8', amber: '#B45309', fsLabel: 15, fsNote: 12, fsCaption: 13 };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const txt = (t, x, y, col, size, anchor, weight) => `<text x="${x}" y="${y}" text-anchor="${anchor || 'middle'}" font-family="sans-serif" font-size="${size}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
function two(spec) {
  const P = { ...C, ...(spec.style || {}) }, id = spec.id || 'vr';
  const W = 480, H = spec.height || 330, R = 78, ax = 150, bx = 250, cy = 140, RX = 40, RY = 40, RW = 360, RH = 200;
  const circ = (x) => `<circle cx="${x}" cy="${cy}" r="${R}"/>`;
  const defs = `<defs>` +
    `<mask id="${id}-a"><rect x="0" y="0" width="${W}" height="${H}" fill="black"/><circle cx="${ax}" cy="${cy}" r="${R}" fill="white"/></mask>` +
    `<mask id="${id}-na"><rect x="0" y="0" width="${W}" height="${H}" fill="white"/><circle cx="${ax}" cy="${cy}" r="${R}" fill="black"/></mask>` +
    `<clipPath id="${id}-b">${circ(bx)}</clipPath>` +
    `<mask id="${id}-nb"><rect x="0" y="0" width="${W}" height="${H}" fill="white"/><circle cx="${bx}" cy="${cy}" r="${R}" fill="black"/></mask></defs>`;
  const regions = [
    [true, true, `<circle cx="${ax}" cy="${cy}" r="${R}" clip-path="url(#${id}-b)"/>`],
    [true, false, `<g mask="url(#${id}-nb)"><circle cx="${ax}" cy="${cy}" r="${R}"/></g>`],
    [false, true, `<g mask="url(#${id}-na)"><circle cx="${bx}" cy="${cy}" r="${R}"/></g>`],
    [false, false, `<g mask="url(#${id}-na)"><g mask="url(#${id}-nb)"><rect x="${RX}" y="${RY}" width="${RW}" height="${RH}"/></g></g>`]];
  const o = [`<rect width="${W}" height="${H}" fill="#fff"/>`, defs];
  regions.forEach(([p, q, shape]) => { if (spec.test(p, q)) o.push(`<g fill="${P.fill}">${shape}</g>`); });
  o.push(`<rect x="${RX}" y="${RY}" width="${RW}" height="${RH}" fill="none" stroke="${P.frame}" stroke-width="1.4"/>`);
  o.push(`<circle cx="${ax}" cy="${cy}" r="${R}" fill="none" stroke="${P.stroke}" stroke-width="1.8"/><circle cx="${bx}" cy="${cy}" r="${R}" fill="none" stroke="${P.stroke}" stroke-width="1.8"/>`);
  o.push(txt(spec.labelA || 'P', ax - R + 6, cy - R + 4, P.stroke, P.fsLabel, 'end', 700), txt(spec.labelB || 'Q', bx + R - 6, cy - R + 4, P.stroke, P.fsLabel, 'start', 700));
  if (spec.formula) o.push(txt(spec.formula, W / 2, RY - 12, P.on, 14, 'middle', 700));
  let ny = RY + 16; (spec.notes || []).forEach((n) => { o.push(txt(n.text, RX + RW + 12, ny, n.color === 'r' ? P.amber : P.text, P.fsNote, 'start')); ny += 18; });
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 12, P.text, P.fsCaption, 'middle', 700));
  const title = esc(spec.svgTitle || spec.caption || 'Venn regions');
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}"><title>${title}</title>${o.join('')}</svg>`;
}
export default function renderVennRegions(spec) {
  if (spec.kind !== 'two') throw new Error(`vennRegions: unknown kind "${spec.kind}". Add new scene types in a new file (vennRegions.v2.js), rule 11.`);
  return two(spec);
}
