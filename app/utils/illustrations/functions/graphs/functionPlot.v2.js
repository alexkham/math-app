// functionPlot.v2 - number-line domains with open ends and excluded points.
//
// renderFunctionPlotV2(spec) -> SVG string. Docs: functionPlot.v2.md beside it.
//
// Chains functionPlot.js (process v10 rule 11): that file is not edited. Its
// `domain` kind draws closed ends only; this one adds
//   domainOpen   number lines built from segments, each end closed (filled
//                dot), open (hollow dot) or unbounded (arrowhead); the last
//                row is the result, drawn thicker; a legend tells included
//                from excluded
//
// Palette: the page theme ($meta.palette.$pageTheme in the functions figure
// registry), the same defaults as functionPlot (copied, not imported, like
// the other chained files).

const C = {
  f: '#2563EB', g: '#06357A', r: '#B45309', text: '#1E3A5F', muted: '#64748B', axis: '#94A3B8',
  wLine: 5, wResult: 7, rEnd: 6, wOpen: 2.4, rowGap: 60,
  fsLabel: 12, fsTag: 12, fsResultTag: 13, fsTick: 11, fsLegend: 11, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

// ---------------------------------------------------------------- domainOpen
// A segment is [a, b, aOpen, bOpen]; null for a or b means unbounded on that
// side. A bar stops 7 px short of an open end so the hollow dot reads as a
// gap. Shared endpoints (as at x = 3 in (−∞, 3) ∪ (3, ∞)) get one dot.
function domainOpen(spec, P) {
  const W = 520, [lo, hi] = spec.range, L = 70, R = 470, X = (x) => L + (x - lo) / (hi - lo) * (R - L);
  const rows = spec.rows, H = 70 + rows.length * P.rowGap;
  const colour = (c) => (c === 'g' ? P.g : c === 'r' ? P.r : P.f);
  const o = [];
  rows.forEach((row, i) => {
    const y = 60 + i * P.rowGap, last = i === rows.length - 1, col = colour(row.color);
    o.push(`<line x1="${L}" y1="${y}" x2="${R}" y2="${y}" stroke="${P.axis}" stroke-width="1.2"/>`);
    for (let v = lo; v <= hi; v += 1) {
      o.push(`<line x1="${f1(X(v))}" y1="${y - 4}" x2="${f1(X(v))}" y2="${y + 4}" stroke="${P.axis}"/>`);
      if (last) o.push(txt(v < 0 ? `−${-v}` : String(v), X(v), y + 20, P.muted, P.fsTick, 'middle', 500));
    }
    const ends = [];
    row.segs.forEach(([a, b, aOpen, bOpen]) => {
      const xa = a === null ? L : X(a) + (aOpen ? 7 : 0), xb = b === null ? R : X(b) - (bOpen ? 7 : 0);
      o.push(`<line x1="${f1(xa)}" y1="${y}" x2="${f1(xb)}" y2="${y}" stroke="${col}" stroke-width="${last ? P.wResult : P.wLine}"/>`);
      if (a === null) o.push(`<path d="M${L - 2},${y} l10,-7 v14 z" fill="${col}"/>`); else ends.push([a, aOpen]);
      if (b === null) o.push(`<path d="M${R + 2},${y} l-10,-7 v14 z" fill="${col}"/>`); else ends.push([b, bOpen]);
    });
    const seen = new Set();
    ends.forEach(([x, open]) => {
      if (seen.has(x)) return;
      seen.add(x);
      o.push(open
        ? `<circle cx="${f1(X(x))}" cy="${y}" r="${P.rEnd}" fill="#fff" stroke="${col}" stroke-width="${P.wOpen}"/>`
        : `<circle cx="${f1(X(x))}" cy="${y}" r="${P.rEnd}" fill="${col}"/>`);
    });
    o.push(txt(row.label, L, y - 14, col, P.fsLabel, 'start', 700));
    if (row.tag) o.push(txt(row.tag.text, X(row.tag.x), y - 14, col, last ? P.fsResultTag : P.fsTag, 'middle', 700));
  });
  o.push(`<circle cx="${L + 6}" cy="${H - 40}" r="5" fill="${P.text}"/>`);
  o.push(txt(spec.includedNote || 'included', L + 16, H - 36, P.text, P.fsLegend, 'start', 500));
  o.push(`<circle cx="${L + 96}" cy="${H - 40}" r="5" fill="#fff" stroke="${P.text}" stroke-width="2"/>`);
  o.push(txt(spec.excludedNote || 'excluded', L + 106, H - 36, P.text, P.fsLegend, 'start', 500));
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 12, P.text, P.fsCaption, 'middle', 600));
  return { w: W, h: H + 10, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { domainOpen };

export default function renderFunctionPlotV2(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `functionPlot.v2: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `For the other kinds use functionPlot.js; add new ones in a further file per process v10 rule 11.`
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

export { renderFunctionPlotV2, C as functionPlotV2Defaults };
