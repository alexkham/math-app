// functionPlot.v4 - piecewise graphs: each formula on its own interval.
//
// renderFunctionPlotV4(spec) -> SVG string. Docs: functionPlot.v4.md beside it.
//
// Chains functionPlot.js, .v2 and .v3 (process v10 rule 11): those files are
// not edited. This one adds
//   pieces   a piecewise graph: each piece drawn only on its interval, in its
//            own colour and labelled with its formula; ends closed (filled
//            dot) or open (hollow dot), where a closed dot wins over an open
//            one at the same point; optional faint dashed continuations of a
//            piece outside its interval, marked points with labels, notes,
//            dashed threshold lines and range bars along the y-axis
//
// Palette: the page theme ($meta.palette.$pageTheme in the functions figure
// registry), the same defaults as functionPlot (copied, not imported, like
// the other chained files).

const C = {
  f: '#2563EB', g: '#06357A', r: '#B45309', rFill: '#FDF3E3',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8',
  wPiece: 2.6, wGhost: 1.4, wBar: 7, rEnd: 5.5, rPoint: 6, ghostOpacity: 0.45,
  fsTick: 10, fsAxis: 11, fsPiece: 13, fsLabel: 12, fsNote: 11, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const f1 = (v) => (Math.round(v * 10) / 10).toFixed(1);
const num = (v) => (v < 0 ? `−${-v}` : String(v));

function txt(t, x, y, col, size, anchor, weight) {
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size || 12}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}">${esc(t)}</text>`;
}

const OFF = { ne: [9, -9, 'start'], nw: [-9, -9, 'end'], se: [9, 18, 'start'], sw: [-9, 18, 'end'], e: [10, 4, 'start'], w: [-10, 4, 'end'], n: [0, -12, 'middle'], s: [0, 22, 'middle'] };

// ------------------------------------------------------------------- pieces
// piece: { fn, from, to, ends: [kind, kind] ('open' | 'closed' | null = runs
// on), color 'f' | 'g', label {text, x, y, pos}, ghost [[a, b]] }.
function pieces(spec, P) {
  const W = 480, H = 376, xr = spec.xRange, yr = spec.yRange, ys = spec.yStep || 1, xs = spec.xStep || 1;
  const [L, R, Tp, B] = [48, 436, 24, 320];
  const X = (x) => L + (x - xr[0]) / (xr[1] - xr[0]) * (R - L);
  const Y = (y) => B - (y - yr[0]) / (yr[1] - yr[0]) * (B - Tp);
  const col = (c) => (c === 'g' ? P.g : c === 'r' ? P.r : P.f);
  const o = [];
  for (let v = Math.ceil(xr[0] / xs) * xs; v <= xr[1]; v += xs) if (v) o.push(`<line x1="${f1(X(v))}" y1="${Tp}" x2="${f1(X(v))}" y2="${B}" stroke="${P.grid}"/>`);
  for (let v = Math.ceil(yr[0] / ys) * ys; v <= yr[1]; v += ys) if (v) o.push(`<line x1="${L}" y1="${f1(Y(v))}" x2="${R}" y2="${f1(Y(v))}" stroke="${P.grid}"/>`);
  const ax = Math.min(Math.max(0, xr[0]), xr[1]), ay = Math.min(Math.max(0, yr[0]), yr[1]);
  o.push(`<line x1="${L}" y1="${f1(Y(ay))}" x2="${R}" y2="${f1(Y(ay))}" stroke="${P.axis}" stroke-width="1.4"/>`);
  o.push(`<line x1="${f1(X(ax))}" y1="${Tp}" x2="${f1(X(ax))}" y2="${B}" stroke="${P.axis}" stroke-width="1.4"/>`);
  o.push(txt(spec.xLetter || 'x', R + 6, Y(ay) + 4, P.muted, P.fsAxis, 'start'));
  o.push(txt(spec.yLetter || 'y', X(ax) + 6, Tp + 2, P.muted, P.fsAxis, 'start'));
  for (let v = Math.ceil(xr[0] / xs) * xs; v <= xr[1]; v += xs) if (v !== ax) o.push(txt(num(v), X(v), Y(ay) + 15, P.muted, P.fsTick, 'middle', 500));
  for (let v = Math.ceil(yr[0] / ys) * ys; v <= yr[1]; v += ys) if (v !== ay) o.push(txt(num(v), X(ax) - 6, Y(v) + 4, P.muted, P.fsTick, 'end', 500));
  const seg = (fn, a0, b0) => {
    const a = Math.max(a0, xr[0]), b = Math.min(b0, xr[1]);
    const p = []; let pen = false;
    for (let i = 0; i <= 60; i += 1) {
      const x = a + (b - a) * i / 60, y = fn(x);
      if (!(y >= yr[0] && y <= yr[1])) { pen = false; continue; }
      p.push(`${pen ? 'L' : 'M'}${f1(X(x))},${f1(Y(y))}`); pen = true;
    }
    return p.join(' ');
  };
  (spec.vlines || []).forEach((v) => {
    o.push(`<line x1="${f1(X(v.x))}" y1="${Tp}" x2="${f1(X(v.x))}" y2="${B}" stroke="${P.muted}" stroke-width="1.2" stroke-dasharray="4 4"/>`);
    if (v.label) o.push(txt(v.label, X(v.x) + 6, Tp + 14, P.muted, P.fsNote, 'start', 600));
  });
  (spec.yBars || []).forEach((b) => {
    const c = col(b.color || 'r'), x = X(ax) + (b.dx || 0);
    o.push(`<line x1="${f1(x)}" y1="${f1(Y(b.from))}" x2="${f1(x)}" y2="${f1(Y(Math.min(b.to, yr[1])))}" stroke="${c}" stroke-width="${P.wBar}" opacity="0.55"/>`);
    if (b.to > yr[1]) o.push(`<path d="M${f1(x)},${Tp - 6} l-7,12 h14 z" fill="${c}"/>`);
    if (b.label) o.push(txt(b.label, x - 10, Y(b.labelY === undefined ? b.from : b.labelY) + 4, c, P.fsLabel, 'end', 700));
  });
  spec.pieces.forEach((pc) => (pc.ghost || []).forEach(([a, b]) =>
    o.push(`<path d="${seg(pc.fn, a, b)}" fill="none" stroke="${col(pc.color)}" stroke-width="${P.wGhost}" stroke-dasharray="5 5" opacity="${P.ghostOpacity}"/>`)));
  const dots = new Map();
  spec.pieces.forEach((pc) => {
    const c = col(pc.color);
    o.push(`<path d="${seg(pc.fn, pc.from, pc.to)}" fill="none" stroke="${c}" stroke-width="${P.wPiece}" stroke-linecap="round"/>`);
    [[pc.from, pc.ends[0]], [pc.to, pc.ends[1]]].forEach(([x, kind]) => {
      if (!kind) return;
      const y = pc.fn(x), k = `${f1(X(x))},${f1(Y(y))}`;
      if (dots.has(k) && dots.get(k).kind === 'closed') return;
      dots.set(k, { x, y, kind, c });
    });
    if (pc.label) { const [dx, dy, an] = OFF[pc.label.pos || 'n']; o.push(txt(pc.label.text, X(pc.label.x) + dx, Y(pc.label.y) + dy, c, P.fsPiece, an, 700)); }
  });
  dots.forEach(({ x, y, kind, c }) => o.push(kind === 'closed'
    ? `<circle cx="${f1(X(x))}" cy="${f1(Y(y))}" r="${P.rEnd}" fill="${c}"/>`
    : `<circle cx="${f1(X(x))}" cy="${f1(Y(y))}" r="${P.rEnd}" fill="#fff" stroke="${c}" stroke-width="2.2"/>`));
  (spec.points || []).forEach((p) => {
    o.push(`<circle cx="${f1(X(p.x))}" cy="${f1(Y(p.y))}" r="${P.rPoint}" fill="${P.rFill}" stroke="${P.r}" stroke-width="2.2"/>`);
    if (p.label) { const [dx, dy, an] = OFF[p.pos || 'ne']; o.push(txt(p.label, X(p.x) + dx, Y(p.y) + dy, P.r, P.fsLabel, an, 700)); }
  });
  (spec.notes || []).forEach((n) => { const [dx, dy, an] = OFF[n.pos || 'ne']; o.push(txt(n.text, X(n.x) + dx, Y(n.y) + dy, n.color ? col(n.color) : P.text, P.fsNote, an, 700)); });
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 14, P.text, P.fsCaption, 'middle', 600));
  return { w: W, h: H, body: o.join('') };
}

// ---------------------------------------------------------------------------
const KINDS = { pieces };

export default function renderFunctionPlotV4(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const build = KINDS[spec.kind];
  if (!build) {
    throw new Error(
      `functionPlot.v4: unknown scene type '${spec.kind}'. Built: ${Object.keys(KINDS).join(', ')}. ` +
      `For the other kinds use functionPlot.js, .v2 or .v3; add new ones in a further file per process v10 rule 11.`
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

export { renderFunctionPlotV4, C as functionPlotV4Defaults };
