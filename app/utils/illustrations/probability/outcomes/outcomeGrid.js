// outcomeGrid - the equally likely outcomes of two dice as a 6 x 6 grid, with events
// coloured on it.
//
// renderOutcomeGrid(spec) -> SVG string. Docs: outcomeGrid.md beside it.
//
// Scene types (spec.kind):
//   dice   36 cells (first die = row, second die = column); up to three events,
//          each a predicate (a, b) => boolean, filled in its own colour; a cell in
//          two events is split diagonally and outlined navy; an optional
//          condition greys out every cell outside it, and the counts beside the
//          grid are then taken inside the condition
//
// Counts are computed from the predicates, never typed in the spec.
// Palette: the page theme ($meta.palette.$pageTheme in the probability figure
// registry): event colours site blue, amber, navy.

const C = {
  f: '#2563EB', fFill: '#DBEAFE', r: '#B45309', rFill: '#FDF3E3', g: '#06357A', gFill: '#E0E7F1',
  text: '#1E3A5F', muted: '#64748B', grid: '#E2E8F0', axis: '#94A3B8', off: '#F1F5F9',
  wEvent: 1.6, wBoth: 2,
  fsHead: 12, fsCell: 11, fsLegend: 12, fsCaption: 13,
};

const FONT = 'sans-serif';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function txt(t, x, y, col, size, anchor, weight, extra) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor || 'middle'}" font-family="${FONT}" ` +
    `font-size="${size}" font-weight="${weight === undefined ? 600 : weight}" fill="${col}"${extra || ''}>${esc(t)}</text>`;
}

// ---------------------------------------------------------------------- dice

function renderDice(spec) {
  const P = { ...C, ...(spec.style || {}) };
  const CELL = 40, X0 = 70, Y0 = 56, W = 480;
  const H = spec.height || 376;
  const LX = X0 + 6 * CELL + 24;
  const events = spec.events || [];
  if (events.length > 3) throw new Error('outcomeGrid: at most three events');
  const cond = spec.condition || null;
  const o = [`<rect width="${W}" height="${H}" fill="#ffffff"/>`];

  o.push(txt('second die', X0 + 3 * CELL, Y0 - 30, P.muted, P.fsHead, 'middle', 400));
  o.push(txt('first die', X0 - 40, Y0 + 3 * CELL, P.muted, P.fsHead, 'middle', 400,
    ` transform="rotate(-90 ${X0 - 40} ${Y0 + 3 * CELL})"`));
  for (let k = 1; k <= 6; k++) {
    o.push(txt(String(k), X0 + (k - 0.5) * CELL, Y0 - 10, P.text, P.fsHead));
    o.push(txt(String(k), X0 - 12, Y0 + (k - 0.5) * CELL + 4, P.text, P.fsHead));
  }

  const counts = events.map(() => 0);
  let inCond = 0;
  for (let a = 1; a <= 6; a++) {
    for (let b = 1; b <= 6; b++) {
      const x = X0 + (b - 1) * CELL, y = Y0 + (a - 1) * CELL, s = CELL - 2;
      const live = cond ? !!cond.test(a, b) : true;
      if (live) inCond += 1;
      const on = events.map((e, i) => (e.test(a, b) ? i : -1)).filter((i) => i >= 0);
      if (live) on.forEach((i) => { counts[i] += 1; });
      o.push(`<rect x="${x + 1}" y="${y + 1}" width="${s}" height="${s}" rx="4" fill="${live ? '#ffffff' : P.off}" stroke="${P.grid}"/>`);
      if (live && on.length === 1) {
        const c = events[on[0]].color || 'f';
        o.push(`<rect x="${x + 1}" y="${y + 1}" width="${s}" height="${s}" rx="4" fill="${P[c + 'Fill']}" stroke="${P[c]}" stroke-width="${P.wEvent}"/>`);
      } else if (live && on.length > 1) {
        const c1 = events[on[0]].color || 'f', c2 = events[on[1]].color || 'r';
        o.push(`<path d="M${x + 1},${y + 1} h${s} L${x + 1},${y + s + 1} z" fill="${P[c1 + 'Fill']}"/>`);
        o.push(`<path d="M${x + s + 1},${y + 1} v${s} h${-s} z" fill="${P[c2 + 'Fill']}"/>`);
        o.push(`<rect x="${x + 1}" y="${y + 1}" width="${s}" height="${s}" rx="4" fill="none" stroke="${P.g}" stroke-width="${P.wBoth}"/>`);
      }
      o.push(txt(`${a},${b}`, x + CELL / 2, y + CELL / 2 + 4, live ? P.text : P.axis, P.fsCell, 'middle', 400));
    }
  }

  let ly = Y0 + 8;
  events.forEach((e, i) => {
    const c = e.color || 'f';
    o.push(`<rect x="${LX}" y="${ly - 10}" width="14" height="14" rx="3" fill="${P[c + 'Fill']}" stroke="${P[c]}" stroke-width="${P.wEvent}"/>`);
    o.push(txt(e.label, LX + 20, ly + 1, P[c], P.fsLegend, 'start'));
    o.push(txt(`${counts[i]} of ${inCond} outcomes`, LX + 20, ly + 16, P.text, P.fsLegend, 'start', 400));
    ly += 40;
  });
  if (cond && cond.label) {
    o.push(`<rect x="${LX}" y="${ly - 10}" width="14" height="14" rx="3" fill="${P.off}" stroke="${P.grid}"/>`);
    o.push(txt(cond.label, LX + 20, ly + 1, P.muted, P.fsLegend, 'start'));
    ly += 26;
  }
  (spec.notes || []).forEach((n) => {
    o.push(txt(n.text, LX, ly, P[n.color] || P.text, P.fsLegend, 'start'));
    ly += 18;
  });
  if (spec.caption) o.push(txt(spec.caption, W / 2, H - 12, P.text, P.fsCaption, 'middle', 700));

  const title = esc(spec.svgTitle || spec.caption || 'Outcomes of two dice');
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}">` +
    `<title>${title}</title>${o.join('')}</svg>`;
}

export default function renderOutcomeGrid(spec) {
  if (spec.kind === 'dice') return renderDice(spec);
  throw new Error(`outcomeGrid: unknown kind "${spec.kind}". Add new scene types in a new file (outcomeGrid.v2.js), rule 11.`);
}
