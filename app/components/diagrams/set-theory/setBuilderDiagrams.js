// Frozen-state diagrams for SetBuilderExplorer (Line 1 on-page anchor mesh).
//
// One SVG string per explanation id resolveExplanationId can return.
//
// This tool draws no SVG of its own - its "picture" is HTML: the builder line
// and a wrapped strip of candidate chips. So the module redraws that layout as
// SVG, replicating the component's own values: the chip metrics from the
// .sbx-chip rules, the pass colouring from --sbx-ok / --sbx-ok-soft, the
// selection outline from --sbx-accent, the muted colour of a failing chip, the
// trailing ellipsis on an infinite domain, and the builder line's colouring of
// the domain in accent and the condition in the pass colour. The predicates are
// the component's own, so which chips light up is computed, never hand-listed.
//
// Consumed by the page inside getStaticProps, wrapped by demoUnitFrame, and
// rendered as a content-array item. Never interpolated into a content string.

// --- replicated predicates (DEFAULT_PREDICATES in the component) ------------

function mod(x, m) {
  const d = Math.abs(m);
  return ((x % d) + d) % d;
}

function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

const PRED = {
  lt: { sym: (a) => 'x < ' + a, f: (x, a) => x < a },
  le: { sym: (a) => 'x ≤ ' + a, f: (x, a) => x <= a },
  gt: { sym: (a) => 'x > ' + a, f: (x, a) => x > a },
  ge: { sym: (a) => 'x ≥ ' + a, f: (x, a) => x >= a },
  eq: { sym: (a) => 'x = ' + a, f: (x, a) => x === a },
  ne: { sym: (a) => 'x ≠ ' + a, f: (x, a) => x !== a },
  between: { sym: (a, b) => a + ' ≤ x ≤ ' + b, f: (x, a, b) => x >= a && x <= b },
  even: { sym: () => 'x is even', f: (x) => mod(x, 2) === 0 },
  odd: { sym: () => 'x is odd', f: (x) => mod(x, 2) === 1 },
  div: { sym: (a) => a + ' | x', f: (x, a) => a !== 0 && mod(x, a) === 0 },
  prime: { sym: () => 'x is prime', f: (x) => isPrime(x) },
  square: { sym: () => '∃k, x = k²', f: (x) => x >= 0 && Number.isInteger(Math.sqrt(x)) },
  sqlt: { sym: (a) => 'x² < ' + a, f: (x, a) => x * x < a }
};

// --- replicated domains (DEFAULT_DOMAINS in the component) ------------------

const DOMAIN = {
  N:  { symbol: 'ℕ',  lo: 1,   hi: 60, windowLo: 1,   windowSize: 24, infinite: true },
  N0: { symbol: 'ℕ₀', lo: 0,   hi: 60, windowLo: 0,   windowSize: 24, infinite: true },
  Z:  { symbol: 'ℤ',  lo: -30, hi: 30, windowLo: -12, windowSize: 25, infinite: true }
};

const THEME = {
  ink: '#131720',
  inkSoft: '#5a6472',
  ruleSoft: '#e3e9ef',
  paper: '#ffffff',
  ok: '#0e7c66',
  okSoft: '#dff2ed',
  muted: '#a3adb9',
  accent: '#2f4fd8'
};

const MATH_FONT = '&quot;Cambria Math&quot;, &quot;Latin Modern Math&quot;, Georgia, serif';
const UI_FONT = 'Inter, -apple-system, BlinkMacSystemFont, sans-serif';

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function args(c) {
  const p = PRED[c.key];
  if (!p || p.sym.length === 0) return [];
  return p.sym.length === 1 ? [c.a] : [c.a, c.b];
}

function condSym(c) {
  return PRED[c.key].sym.apply(null, args(c));
}

function passes(x, conditions, join) {
  if (!conditions.length) return true;
  const res = conditions.map((c) => Boolean(PRED[c.key].f.apply(null, [x].concat(args(c)))));
  return join === 'or' ? res.some(Boolean) : res.every(Boolean);
}

// The candidate window the component shows, from the domain's own settings.
function windowOf(domainKey, custom) {
  if (custom) return custom.slice();
  const d = DOMAIN[domainKey];
  const from = d.windowLo;
  const to = from + d.windowSize - 1;
  const out = [];
  for (let x = Math.max(d.lo, from); x <= Math.min(d.hi, to); x++) out.push(x);
  return out;
}

// --- drawing ----------------------------------------------------------------
// Chip metrics mirror .sbx-chip: 15px math type, 4px/10px padding, radius 7,
// 5px gap, wrapping inside the panel width.

const W = 520;
const PAD = 16;
const CHIP_H = 27;
const CHIP_GAP = 5;
const CHIP_FS = 15;

function chipWidth(label) {
  return Math.max(26, String(label).length * CHIP_FS * 0.6 + 20);
}

/**
 * One frozen state of the builder.
 * @param {object} o
 * @param {string} [o.domainKey]  N | N0 | Z
 * @param {number[]} [o.custom]   finite domain, used instead of domainKey
 * @param {string} o.domainSymbol symbol drawn in the builder line
 * @param {Array} o.conditions    [{key, a, b}]
 * @param {'and'|'or'} [o.join]
 * @param {number|null} [o.picked] candidate to outline
 * @param {boolean} [o.pickedOutside] draw the pick as a chip outside the strip
 * @returns {string} SVG markup
 */
function builder(o) {
  const conditions = o.conditions || [];
  const join = o.join || 'and';
  const glue = join === 'and' ? ' and ' : ' or ';
  const shown = windowOf(o.domainKey, o.custom);
  const infinite = !o.custom && DOMAIN[o.domainKey].infinite;

  // builder line: { x ∈ D : cond }
  const condText = conditions.map(condSym).join(glue);
  const line = '{ x ∈ ' + o.domainSymbol + (conditions.length ? ' : ' : ' ') + condText + ' }';

  // lay the chips out with wrapping
  const rows = [];
  let row = [];
  let x = PAD;
  shown.forEach((v) => {
    const w = chipWidth(v);
    if (x + w > W - PAD) { rows.push(row); row = []; x = PAD; }
    row.push({ v, x, w });
    x += w + CHIP_GAP;
  });
  if (infinite) {
    const w = 22;
    if (x + w > W - PAD) { rows.push(row); row = []; x = PAD; }
    row.push({ v: '…', x, w, ellipsis: true });
  }
  rows.push(row);

  const lineY = 46;
  const stripTop = 86;
  const height = stripTop + rows.length * (CHIP_H + CHIP_GAP) + (o.picked !== undefined && o.picked !== null ? 46 : 14);

  const parts = [];

  // builder line, coloured as the component colours it
  parts.push(
    '<text x="' + PAD + '" y="' + lineY + '" font-family="' + MATH_FONT + '" font-size="24" fill="' + THEME.ink + '">' +
    '<tspan>{ </tspan>' +
    '<tspan font-style="italic">x</tspan>' +
    '<tspan> ∈ </tspan>' +
    '<tspan fill="' + THEME.accent + '">' + esc(o.domainSymbol) + '</tspan>' +
    '<tspan>' + (conditions.length ? ' : ' : ' ') + '</tspan>' +
    '<tspan fill="' + THEME.ok + '">' + esc(condText) + '</tspan>' +
    '<tspan> }</tspan>' +
    '</text>'
  );

  // chips
  rows.forEach((r, ri) => {
    const y = stripTop + ri * (CHIP_H + CHIP_GAP);
    r.forEach((c) => {
      if (c.ellipsis) {
        parts.push(
          '<text x="' + (c.x + c.w / 2) + '" y="' + (y + 19) + '" text-anchor="middle" font-family="' + MATH_FONT +
          '" font-size="16" fill="' + THEME.muted + '">…</text>'
        );
        return;
      }
      const on = passes(c.v, conditions, join);
      const sel = o.picked !== undefined && o.picked !== null && c.v === o.picked;
      parts.push(
        '<rect x="' + c.x + '" y="' + y + '" width="' + c.w + '" height="' + CHIP_H + '" rx="7" fill="' +
        (on ? THEME.okSoft : THEME.paper) + '" stroke="' + (on ? THEME.ok : THEME.ruleSoft) + '" stroke-width="1"/>' +
        (sel
          ? '<rect x="' + (c.x - 3) + '" y="' + (y - 3) + '" width="' + (c.w + 6) + '" height="' + (CHIP_H + 6) +
            '" rx="9" fill="none" stroke="' + THEME.accent + '" stroke-width="2"/>'
          : '') +
        '<text x="' + (c.x + c.w / 2) + '" y="' + (y + 19) + '" text-anchor="middle" font-family="' + MATH_FONT +
        '" font-size="' + CHIP_FS + '" font-weight="' + (on ? '600' : '400') + '" fill="' +
        (on ? THEME.ok : THEME.muted) + '">' + esc(c.v) + '</text>'
      );
    });
  });

  // a picked candidate drawn outside the strip, for the outside-the-domain case
  if (o.pickedOutside) {
    const y = stripTop + rows.length * (CHIP_H + CHIP_GAP) + 6;
    const w = chipWidth(o.picked);
    parts.push(
      '<rect x="' + PAD + '" y="' + y + '" width="' + w + '" height="' + CHIP_H + '" rx="7" fill="' + THEME.paper +
      '" stroke="' + THEME.muted + '" stroke-width="1" stroke-dasharray="4 3"/>' +
      '<rect x="' + (PAD - 3) + '" y="' + (y - 3) + '" width="' + (w + 6) + '" height="' + (CHIP_H + 6) +
      '" rx="9" fill="none" stroke="' + THEME.accent + '" stroke-width="2"/>' +
      '<text x="' + (PAD + w / 2) + '" y="' + (y + 19) + '" text-anchor="middle" font-family="' + MATH_FONT +
      '" font-size="' + CHIP_FS + '" fill="' + THEME.muted + '">' + esc(o.picked) + '</text>' +
      '<text x="' + (PAD + w + 12) + '" y="' + (y + 19) + '" font-family="' + UI_FONT + '" font-size="12.5" fill="' +
      THEME.inkSoft + '">not in ' + esc(o.domainSymbol) + ' — never tested</text>'
    );
  }

  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + height +
    '" width="' + W + '" height="' + height +
    '" style="display:block;max-width:100%;height:auto" role="img">' +
    '<rect x="0" y="0" width="' + W + '" height="' + height + '" fill="#ffffff"/>' +
    parts.join('') +
    '</svg>'
  );
}

// --- the frozen states ------------------------------------------------------
// Keys match resolveExplanationId in SetBuilderExplorer.jsx exactly.

const setBuilderDiagrams = {

  // no condition after the bar: every candidate passes
  'no-conditions': builder({ domainKey: 'N', domainSymbol: 'ℕ', conditions: [] }),

  // two conditions that cannot both hold
  'empty-result': builder({
    domainKey: 'N', domainSymbol: 'ℕ', join: 'and',
    conditions: [{ key: 'even' }, { key: 'odd' }]
  }),

  // unbounded condition: the filter keeps passing forever
  'infinite-result': builder({
    domainKey: 'N', domainSymbol: 'ℕ',
    conditions: [{ key: 'even' }]
  }),

  // exactly one survivor
  'singleton-result': builder({
    domainKey: 'N', domainSymbol: 'ℕ', join: 'and',
    conditions: [{ key: 'prime' }, { key: 'even' }]
  }),

  // a passing candidate, picked
  'candidate-passes': builder({
    domainKey: 'N', domainSymbol: 'ℕ',
    conditions: [{ key: 'prime' }],
    picked: 7
  }),

  // a failing candidate, picked
  'candidate-fails': builder({
    domainKey: 'N', domainSymbol: 'ℕ',
    conditions: [{ key: 'prime' }],
    picked: 9
  }),

  // a number outside the domain entirely
  'candidate-outside': builder({
    domainKey: 'N', domainSymbol: 'ℕ',
    conditions: [{ key: 'lt', a: 10 }],
    picked: -4, pickedOutside: true
  }),

  // two conditions joined by and - intersection
  'and-join': builder({
    domainKey: 'N', domainSymbol: 'ℕ', join: 'and',
    conditions: [{ key: 'even' }, { key: 'lt', a: 12 }]
  }),

  // the same two joined by or - union
  'or-join': builder({
    domainKey: 'N', domainSymbol: 'ℕ', join: 'or',
    conditions: [{ key: 'even' }, { key: 'lt', a: 12 }]
  }),

  // the ordinary bounded case
  'general': builder({
    domainKey: 'N', domainSymbol: 'ℕ',
    conditions: [{ key: 'lt', a: 4 }]
  })
};

export default setBuilderDiagrams;
