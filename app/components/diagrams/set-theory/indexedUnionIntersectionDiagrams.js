// Frozen-state diagrams for IndexedUnionIntersectionExplorer (Line 1 mesh).
//
// One SVG string per explanation id resolveExplanationId can return. The tool
// has three renderers and this module mirrors all three: the interval number
// line (member rows plus the running union and intersection bars), the discrete
// chip grid, and the Venn pair. Geometry, padding, row heights, endpoint dots,
// infinity arrowheads and the theme colours replicate the component's own code.
//
// Set membership is computed from the component's own family definitions and
// interval algebra rather than hand-listed, so a frame cannot drift from what
// the tool would draw.
//
// Consumed by the page inside getStaticProps, wrapped by demoUnitFrame, and
// rendered as a content-array item. Never interpolated into a content string.

const NEG_INF = -Infinity;
const POS_INF = Infinity;

// --- replicated interval algebra --------------------------------------------

function isValidPiece(p) {
  if (!p) return false;
  if (p.lo > p.hi) return false;
  if (p.lo === p.hi) return Boolean(p.loIn && p.hiIn);
  return true;
}

function normalizeIntervals(list) {
  const parts = list.filter(isValidPiece).slice().sort((a, b) => (a.lo - b.lo) || (a.loIn === b.loIn ? 0 : (a.loIn ? -1 : 1)));
  const out = [];
  parts.forEach((p) => {
    const last = out[out.length - 1];
    if (!last) { out.push(Object.assign({}, p)); return; }
    const touches = p.lo < last.hi || (p.lo === last.hi && (p.loIn || last.hiIn));
    if (touches) {
      if (p.hi > last.hi || (p.hi === last.hi && p.hiIn)) { last.hi = p.hi; last.hiIn = p.hiIn; }
    } else out.push(Object.assign({}, p));
  });
  return out;
}

function intersectPair(x, y) {
  let lo; let loIn;
  if (x.lo > y.lo) { lo = x.lo; loIn = x.loIn; }
  else if (y.lo > x.lo) { lo = y.lo; loIn = y.loIn; }
  else { lo = x.lo; loIn = x.loIn && y.loIn; }
  let hi; let hiIn;
  if (x.hi < y.hi) { hi = x.hi; hiIn = x.hiIn; }
  else if (y.hi < x.hi) { hi = y.hi; hiIn = y.hiIn; }
  else { hi = x.hi; hiIn = x.hiIn && y.hiIn; }
  const piece = { lo, loIn, hi, hiIn };
  return isValidPiece(piece) ? piece : null;
}

function unionIntervals(a, b) {
  return normalizeIntervals(a.concat(b));
}

function intersectIntervals(a, b) {
  const out = [];
  a.forEach((x) => b.forEach((y) => {
    const p = intersectPair(x, y);
    if (p) out.push(p);
  }));
  return normalizeIntervals(out);
}

function subscript(k) {
  const map = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉' };
  return String(k).split('').map((c) => map[c] || c).join('');
}

// --- replicated families (the ones the frozen states use) -------------------

const FAMILY = {
  shrinkOpen: {
    kind: 'interval',
    at: (i) => [{ lo: 0, loIn: false, hi: 1 / i, hiIn: true }],
    view: [-0.12, 1.12]
  },
  shrinkClosed: {
    kind: 'interval',
    at: (i) => [{ lo: 0, loIn: true, hi: 1 / i, hiIn: true }],
    view: [-0.12, 1.12]
  },
  expand: {
    kind: 'interval',
    at: (i) => [{ lo: -i, loIn: true, hi: i, hiIn: true }],
    view: null
  },
  tails: {
    kind: 'interval',
    at: (i) => [{ lo: i, loIn: true, hi: POS_INF, hiIn: false }],
    view: null
  },
  prefixes: {
    kind: 'discrete',
    at: (i) => Array.from({ length: i }, (_, k) => k + 1)
  },
  multiples: {
    kind: 'discrete',
    at: (i, cap) => Array.from({ length: Math.floor(cap / i) }, (_, k) => (k + 1) * i)
  },
  venn3: { kind: 'venn', setCount: 3, at: (i) => vennRegions(3).filter((m) => m & (1 << (i - 1))) },
  venn2: { kind: 'venn', setCount: 2, at: (i) => vennRegions(2).filter((m) => m & (1 << (i - 1))) }
};

function vennRegions(count) {
  const out = [];
  for (let m = 1; m < (1 << count); m++) out.push(m);
  return out;
}

const VENN_GEOMETRY = {
  2: {
    width: 300, height: 210, radius: 66,
    sets: ['A₁', 'A₂'],
    centres: { 0: [118, 105], 1: [182, 105] },
    labelOffset: { 0: [-74, -50], 1: [74, -50] }
  },
  3: {
    width: 300, height: 262, radius: 62,
    sets: ['A₁', 'A₂', 'A₃'],
    centres: { 0: [150, 96], 1: [118, 150], 2: [182, 150] },
    labelOffset: { 0: [0, -74], 1: [-58, 56], 2: [58, 56] }
  }
};

const THEME = {
  accent: '#2f4fd8',
  union: '#2f4fd8',
  intersection: '#b4690e',
  member: '#5a6472',
  axis: '#c2ccd8',
  grid: '#f4f6f8'
};

const MATH_FONT = "'Cambria Math','Latin Modern Math',Georgia,serif";
const MONO_FONT = 'ui-monospace, Menlo, Consolas, monospace';

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const r2 = (v) => Math.round(v * 100) / 100;

// --- interval renderer ------------------------------------------------------

function intervalFrame(familyKey, n) {
  const fam = FAMILY[familyKey];
  const sets = [];
  for (let i = 1; i <= n; i++) sets.push(normalizeIntervals(fam.at(i)));

  let acc = null;
  sets.forEach((s) => {
    acc = acc === null
      ? { union: s.slice(), intersection: s.slice() }
      : { union: unionIntervals(acc.union, s), intersection: intersectIntervals(acc.intersection, s) };
  });

  let lo; let hi;
  if (fam.view) { lo = fam.view[0]; hi = fam.view[1]; }
  else {
    const finite = [];
    sets.forEach((s) => s.forEach((p) => {
      if (isFinite(p.lo)) finite.push(p.lo);
      if (isFinite(p.hi)) finite.push(p.hi);
    }));
    lo = Math.min.apply(null, finite.concat(0)) - 1;
    hi = Math.max.apply(null, finite.concat(1)) + 1;
  }

  const W = 820;
  const padL = 52;
  const padR = 40;
  const rowH = 34;
  const top = 16;
  const H = top + (sets.length + 2) * rowH + 44;
  const X = (v) => padL + ((Math.max(lo, Math.min(hi, v)) - lo) / (hi - lo)) * (W - padL - padR);

  const gridStep = (hi - lo) > 4 ? Math.ceil((hi - lo) / 8) : (hi - lo) / 8;
  const ticks = [];
  for (let t = Math.ceil(lo / gridStep) * gridStep; t <= hi; t += gridStep) ticks.push(t);

  const bar = (list, y, colour, label, width) => {
    const parts = [
      '<text x="8" y="' + (y + 5) + '" font-family="' + MATH_FONT + '" font-size="14" fill="' + colour + '">' +
      esc(label) + '</text>'
    ];
    if (!list.length) {
      parts.push(
        '<text x="' + r2((padL + W - padR) / 2) + '" y="' + (y + 4) +
        '" text-anchor="middle" font-family="' + MATH_FONT + '" font-size="13" fill="#c2ccd8">&#8709;</text>'
      );
    }
    list.forEach((p) => {
      const x1 = X(p.lo);
      const x2 = X(p.hi);
      parts.push('<line x1="' + r2(x1) + '" y1="' + y + '" x2="' + r2(x2) + '" y2="' + y +
        '" stroke="' + colour + '" stroke-width="' + width + '"/>');
      parts.push(isFinite(p.lo)
        ? '<circle cx="' + r2(x1) + '" cy="' + y + '" r="4.5" fill="' + (p.loIn ? colour : '#ffffff') +
          '" stroke="' + colour + '" stroke-width="1.8"/>'
        : '<polygon points="' + padL + ',' + y + ' ' + (padL + 10) + ',' + (y - 5) + ' ' + (padL + 10) + ',' + (y + 5) +
          '" fill="' + colour + '"/>');
      parts.push(isFinite(p.hi)
        ? '<circle cx="' + r2(x2) + '" cy="' + y + '" r="4.5" fill="' + (p.hiIn ? colour : '#ffffff') +
          '" stroke="' + colour + '" stroke-width="1.8"/>'
        : '<polygon points="' + (W - padR) + ',' + y + ' ' + (W - padR - 10) + ',' + (y - 5) + ' ' +
          (W - padR - 10) + ',' + (y + 5) + '" fill="' + colour + '"/>');
      if (p.lo === p.hi) {
        parts.push('<circle cx="' + r2(x1) + '" cy="' + y + '" r="5" fill="' + colour + '"/>');
      }
    });
    return parts.join('');
  };

  const yU = top + sets.length * rowH + 18;
  const yI = yU + rowH;

  const tickMarks = ticks.map((t) =>
    '<line x1="' + r2(X(t)) + '" y1="' + top + '" x2="' + r2(X(t)) + '" y2="' + (H - 34) +
    '" stroke="' + THEME.grid + '"/>' +
    '<text x="' + r2(X(t)) + '" y="' + (H - 16) + '" text-anchor="middle" font-family="' + MONO_FONT +
    '" font-size="10" fill="#a3adb9">' + (Math.abs(t) < 1e-9 ? 0 : r2(t)) + '</text>'
  ).join('');

  const memberRows = sets.map((set, idx) =>
    '<g opacity="' + r2(0.35 + 0.65 * ((idx + 1) / sets.length)) + '">' +
    bar(set, top + idx * rowH + 12, THEME.member, 'A' + subscript(idx + 1), 5) +
    '</g>'
  ).join('');

  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H +
    '" width="' + W + '" height="' + H + '" style="display:block;max-width:100%;height:auto" role="img">' +
    '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="#ffffff"/>' +
    tickMarks +
    '<line x1="' + padL + '" y1="' + (H - 34) + '" x2="' + (W - padR) + '" y2="' + (H - 34) +
    '" stroke="' + THEME.axis + '"/>' +
    memberRows +
    '<line x1="' + padL + '" y1="' + (yU - 14) + '" x2="' + (W - padR) + '" y2="' + (yU - 14) +
    '" stroke="' + THEME.axis + '" stroke-dasharray="3 3"/>' +
    bar(acc.union, yU, THEME.union, '⋃', 7) +
    bar(acc.intersection, yI, THEME.intersection, '⋂', 7) +
    '</svg>'
  );
}

// --- discrete renderer ------------------------------------------------------

function discreteFrame(familyKey, n, cap) {
  const fam = FAMILY[familyKey];
  const CAP = cap || 16;
  const sets = [];
  for (let i = 1; i <= n; i++) sets.push(fam.at(i, CAP));

  const union = [];
  sets.forEach((s) => s.forEach((x) => { if (union.indexOf(x) === -1) union.push(x); }));
  const intersection = sets.length
    ? sets.reduce((a, s) => a.filter((x) => s.indexOf(x) > -1), sets[0].slice())
    : [];

  const cellW = 30;
  const cellH = 24;
  const gap = 3;
  const labW = 44;
  const W = labW + CAP * (cellW + gap) + 16;
  const rowGap = 6;
  const rows = sets.length + 2;
  const H = 14 + rows * (cellH + rowGap) + 14;

  const row = (label, list, y, colour, soft) => {
    const parts = [
      '<text x="8" y="' + (y + 17) + '" font-family="' + MATH_FONT + '" font-size="14" fill="' +
      (colour || THEME.member) + '">' + esc(label) + '</text>'
    ];
    for (let k = 1; k <= CAP; k++) {
      const on = list.indexOf(k) > -1;
      const x = labW + (k - 1) * (cellW + gap);
      parts.push(
        '<rect x="' + x + '" y="' + y + '" width="' + cellW + '" height="' + cellH + '" rx="5" fill="' +
        (on ? soft : '#ffffff') + '" stroke="' + (on ? colour : '#e3e9ef') + '" stroke-width="1"/>' +
        '<text x="' + (x + cellW / 2) + '" y="' + (y + 16) + '" text-anchor="middle" font-family="' + MATH_FONT +
        '" font-size="12.5" fill="' + (on ? colour : '#c2ccd8') + '">' + k + '</text>'
      );
    }
    return parts.join('');
  };

  const memberRows = sets.map((s, idx) =>
    row('A' + subscript(idx + 1), s, 14 + idx * (cellH + rowGap), THEME.member, '#eef1f4')
  ).join('');
  const yU = 14 + sets.length * (cellH + rowGap);
  const yI = yU + cellH + rowGap;

  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H +
    '" width="' + W + '" height="' + H + '" style="display:block;max-width:100%;height:auto" role="img">' +
    '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="#ffffff"/>' +
    memberRows +
    row('⋃', union, yU, THEME.union, '#eaeeff') +
    row('⋂', intersection, yI, THEME.intersection, '#fdf3e3') +
    '</svg>'
  );
}

// --- venn renderer ----------------------------------------------------------

let vennSeq = 0;

function vennFrame(familyKey, n) {
  const fam = FAMILY[familyKey];
  const count = fam.setCount;
  const geo = VENN_GEOMETRY[count];
  const sets = [];
  for (let i = 1; i <= n; i++) sets.push(fam.at(i));

  const union = [];
  sets.forEach((s) => s.forEach((m) => { if (union.indexOf(m) === -1) union.push(m); }));
  const intersection = sets.length
    ? sets.reduce((a, s) => a.filter((m) => s.indexOf(m) > -1), sets[0].slice())
    : [];

  const panel = (masks, colour, caption) => {
    const key = 'k' + (vennSeq++);
    const defs = [];
    for (let i = 0; i < count; i++) {
      const c = geo.centres[i];
      defs.push(
        '<clipPath id="ifxin' + i + key + '" clipPathUnits="userSpaceOnUse"><path d="' +
        circle(c[0], c[1], geo.radius) + '"/></clipPath>' +
        '<clipPath id="ifxout' + i + key + '" clipPathUnits="userSpaceOnUse"><path d="' +
        outside(geo, c[0], c[1], geo.radius) + '" clip-rule="evenodd"/></clipPath>'
      );
    }
    const shapes = masks.map((m) => {
      let node = '<rect x="0" y="0" width="' + geo.width + '" height="' + geo.height +
        '" fill="' + colour + '" opacity="0.8"/>';
      for (let i = count - 1; i >= 0; i--) {
        const clip = ((m & (1 << i)) ? 'ifxin' : 'ifxout') + i + key;
        node = '<g clip-path="url(#' + clip + ')">' + node + '</g>';
      }
      return node;
    }).join('');
    let outlines = '';
    let labels = '';
    for (let i = 0; i < count; i++) {
      const c = geo.centres[i];
      const o = geo.labelOffset[i];
      outlines += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + geo.radius +
        '" fill="none" stroke="#1e293b" stroke-width="1.3"/>';
      labels += '<text x="' + (c[0] + o[0]) + '" y="' + (c[1] + o[1]) +
        '" text-anchor="middle" font-family="' + MATH_FONT +
        '" font-size="15" font-style="italic" fill="#1e293b">' + esc(geo.sets[i]) + '</text>';
    }
    return {
      defs: defs.join(''),
      body: '<rect x="0" y="0" width="' + geo.width + '" height="' + geo.height + '" fill="#ffffff"/>' +
        shapes + outlines + labels,
      caption
    };
  };

  const u = panel(union, THEME.union, '⋃ Aᵢ');
  const i2 = panel(intersection, THEME.intersection, '⋂ Aᵢ');

  const gap = 24;
  const capH = 22;
  const W = geo.width * 2 + gap;
  const H = geo.height + capH;

  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H +
    '" width="' + W + '" height="' + H + '" style="display:block;max-width:100%;height:auto" role="img">' +
    '<defs>' + u.defs + i2.defs + '</defs>' +
    '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="#ffffff"/>' +
    '<g>' + u.body + '</g>' +
    '<g transform="translate(' + (geo.width + gap) + ',0)">' + i2.body + '</g>' +
    '<text x="' + (geo.width / 2) + '" y="' + (geo.height + 16) + '" text-anchor="middle" font-family="' +
    MATH_FONT + '" font-size="14" fill="' + THEME.union + '">' + esc(u.caption) + '</text>' +
    '<text x="' + (geo.width + gap + geo.width / 2) + '" y="' + (geo.height + 16) +
    '" text-anchor="middle" font-family="' + MATH_FONT + '" font-size="14" fill="' +
    THEME.intersection + '">' + esc(i2.caption) + '</text>' +
    '</svg>'
  );
}

function circle(cx, cy, r) {
  return 'M ' + (cx - r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx + r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx - r) + ' ' + cy + ' Z';
}

function outside(geo, cx, cy, r) {
  return 'M 0 0 L ' + geo.width + ' 0 L ' + geo.width + ' ' + geo.height +
    ' L 0 ' + geo.height + ' Z ' + circle(cx, cy, r);
}

// --- the frozen states ------------------------------------------------------
// Keys match resolveExplanationId in IndexedUnionIntersectionExplorer.jsx.
//
// NOTE on three dead entries. With the shipped families every `punch` value is
// one of empty / point / grow / lcm / chain, and the resolver returns on those
// before it can reach 'union-stalled', 'intersection-stalled' or 'general'.
// Those ids are unreachable unless a caller supplies its own `families` prop.
// The v5 recipe says to hoist dead entries anyway, so they are given faithful
// frames here: a family whose union has settled, one whose intersection has
// settled, and an ordinary family where neither has.

const indexedUnionIntersectionDiagrams = {

  // a single index: both operators return A1 itself
  'start': intervalFrame('shrinkOpen', 1),

  // a few terms in, before any pattern is visible
  'building': intervalFrame('shrinkOpen', 3),

  // every set non-empty, intersection empty in the limit
  'nested-empty': intervalFrame('shrinkOpen', 6),

  // the closed variant, where 0 survives every stage
  'endpoint-decides': intervalFrame('shrinkClosed', 6),

  // bounded sets whose union is unbounded
  'unbounded-union': intervalFrame('expand', 5),

  // the running intersection is the multiples of the lcm
  'lcm-intersection': discreteFrame('multiples', 6, 16),

  // the finite case: the big operators as a chain over a Venn diagram
  'finite-chain': vennFrame('venn3', 3),

  // dead by default - a downward-nested family, union settled at A1
  'union-stalled': intervalFrame('shrinkOpen', 5),

  // dead by default - an upward-nested family, intersection settled at A1
  'intersection-stalled': intervalFrame('expand', 4),

  // dead by default - an ordinary family, neither operator settled
  'general': intervalFrame('tails', 4)
};

export default indexedUnionIntersectionDiagrams;
