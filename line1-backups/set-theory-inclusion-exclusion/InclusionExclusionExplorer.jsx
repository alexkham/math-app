'use client';

// ============================================================================
// INCLUSION-EXCLUSION EXPLORER
// ----------------------------------------------------------------------------
// The counting formula for the size of a union, stepped one term at a time.
//
// The number drawn inside each region is not its element count. It is how many
// times that region has been counted so far. Every region starts at 0 and must
// finish at exactly 1 — that is the proof, and it is why the last term of the
// three-set formula is an addition rather than another subtraction.
//
// Regions are membership masks over the sets, the same keys the Venn components
// use, so the shading logic is shared rather than written per operation.
//
// IMPORTANT: fix the processContent import path below to match your project.
// If the path is wrong the whole module fails to load and the component
// becomes undefined in its consumers.
// ============================================================================

import React, { useState, useMemo, useEffect, useCallback, useRef, useId } from 'react';
import { processContent } from '../../../utils/contentProcessor';

// ============================================================================
// SECTION 1 - FORMULA
// Each term carries the masks it covers and the sign it contributes.
// ============================================================================

export const SIZE_KEYS = {
  2: ['A', 'B', 'AB'],
  3: ['A', 'B', 'C', 'AB', 'AC', 'BC', 'ABC']
};

export const SIZE_LABELS = {
  A: '|A|',
  B: '|B|',
  C: '|C|',
  AB: '|A \u2229 B|',
  AC: '|A \u2229 C|',
  BC: '|B \u2229 C|',
  ABC: '|A \u2229 B \u2229 C|'
};

export function buildTerms(n) {
  if (n === 2) {
    return [
      { key: 'A', sign: 1, masks: [1, 3], order: 1 },
      { key: 'B', sign: 1, masks: [2, 3], order: 1 },
      { key: 'AB', sign: -1, masks: [3], order: 2 }
    ];
  }
  return [
    { key: 'A', sign: 1, masks: [1, 3, 5, 7], order: 1 },
    { key: 'B', sign: 1, masks: [2, 3, 6, 7], order: 1 },
    { key: 'C', sign: 1, masks: [4, 5, 6, 7], order: 1 },
    { key: 'AB', sign: -1, masks: [3, 7], order: 2 },
    { key: 'AC', sign: -1, masks: [5, 7], order: 2 },
    { key: 'BC', sign: -1, masks: [6, 7], order: 2 },
    { key: 'ABC', sign: 1, masks: [7], order: 3 }
  ];
}

// Region counts derived from the entered sizes.
export function regionsFromSizes(n, v) {
  if (n === 2) {
    return { 1: v.A - v.AB, 2: v.B - v.AB, 3: v.AB };
  }
  return {
    7: v.ABC,
    3: v.AB - v.ABC,
    5: v.AC - v.ABC,
    6: v.BC - v.ABC,
    1: v.A - v.AB - v.AC + v.ABC,
    2: v.B - v.AB - v.BC + v.ABC,
    4: v.C - v.AC - v.BC + v.ABC
  };
}

// The opposite direction: sizes implied by a set of region counts.
export function sizesFromRegions(n, r) {
  const g = (m) => Number(r[m] || 0);
  if (n === 2) {
    return { A: g(1) + g(3), B: g(2) + g(3), AB: g(3) };
  }
  return {
    A: g(1) + g(3) + g(5) + g(7),
    B: g(2) + g(3) + g(6) + g(7),
    C: g(4) + g(5) + g(6) + g(7),
    AB: g(3) + g(7),
    AC: g(5) + g(7),
    BC: g(6) + g(7),
    ABC: g(7)
  };
}

// How many times each region has been counted after `step` terms.
export function multiplicityAfter(n, step) {
  const terms = buildTerms(n).slice(0, step);
  const mult = {};
  for (let m = 1; m < (1 << n); m++) mult[m] = 0;
  terms.forEach((t) => t.masks.forEach((m) => { mult[m] += t.sign; }));
  return mult;
}

export function runningTotal(n, step, v) {
  return buildTerms(n).slice(0, step).reduce((a, t) => a + t.sign * Number(v[t.key] || 0), 0);
}

// ============================================================================
// SECTION 2 - GEOMETRY
// Fixed layouts. Centroids are the label anchors for each region.
// ============================================================================

export const GEOMETRY = {
  2: {
    width: 460,
    height: 300,
    radius: 96,
    sets: ['A', 'B'],
    centres: { A: [186, 150], B: [274, 150] },
    labelOffset: { A: [-108, -74], B: [108, -74] },
    anchors: { 1: [138, 150], 2: [322, 150], 3: [230, 150] }
  },
  3: {
    width: 460,
    height: 400,
    radius: 94,
    sets: ['A', 'B', 'C'],
    centres: { A: [230, 140], B: [184, 220], C: [276, 220] },
    labelOffset: { A: [0, -110], B: [-84, 82], C: [84, 82] },
    anchors: {
      1: [230, 94], 2: [156, 254], 3: [186, 176],
      4: [304, 254], 5: [274, 176], 6: [230, 246], 7: [230, 194]
    }
  }
};

function circlePath(cx, cy, r) {
  return 'M ' + (cx - r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx + r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx - r) + ' ' + cy + ' Z';
}

function outsidePath(g, cx, cy, r) {
  return 'M 0 0 L ' + g.width + ' 0 L ' + g.width + ' ' + g.height + ' L 0 ' + g.height + ' Z ' +
    circlePath(cx, cy, r);
}

// ============================================================================
// SECTION 3 - EXPLANATIONS
// A resolver picks an id from the current state. The id is looked up in the
// `explanations` prop first, then in these defaults, so a caller can override
// one entry without restating the rest. A title or body may be a string or a
// function of the context object. Strings are written for processContent.
// ============================================================================

export const DEFAULT_EXPLANATIONS = {

  'impossible': {
    title: 'Those sizes cannot happen',
    body: (ctx) => {
      const many = ctx.negativeRegions.length > 1;
      return (many ? ctx.negativeRegions.length + ' regions come' : 'One region comes') +
        ' out negative, which means no collection of sets has these sizes.\n\n' +
        'An overlap can never exceed either set it sits inside, so $|A \\cap B|$ has to be at most the smaller of $|A|$ and $|B|$. With three sets there is a second trap: once the triple overlap is fixed, each pairwise overlap has to leave enough room for what remains. Push $|A \\cap B \\cap C|$ up too far and the pairwise-only slivers go negative even though every individual number looks reasonable.\n\n' +
        'The small grey number under each region is its count. Find the ones marked with a cross and work backwards from there.';
    }
  },

  'disjoint': {
    title: 'Nothing overlaps, so nothing is over-counted',
    body: (ctx) => 'Every overlap you have entered is zero, so the sets are **pairwise disjoint**. In that case the formula collapses: the union is just the sum of the sizes, $' + ctx.sizeList + ' = ' + ctx.unionValue + '$.\n\nThat is worth seeing before the general case. Inclusion-exclusion exists only to correct for double counting, and with no overlap there is nothing to correct. Step through anyway and watch every subtraction remove zero.\n\nGive one of the intersections a positive size and the correction terms start doing work.'
  },

  'start': {
    title: (ctx) => 'Nothing counted yet',
    body: (ctx) => 'Every region reads $0$, because no term has been applied.\n\nThe big number in each region is **how many times that region has been counted**, not how many elements it holds. Its element count is the small grey number underneath. The job of the formula is to get every big number to exactly $1$: each element counted once, no more and no less.\n\nPress **Next term** to add $|A|$.'
  },

  'adding': {
    title: (ctx) => 'Adding ' + ctx.termLabelPlain,
    body: (ctx) => {
      const over = ctx.overCounted;
      return 'Every region inside $' + ctx.termSet + '$ goes up by one, so the running total is now $' + ctx.running + '$.\n\n' +
        (over > 0
          ? 'Look at the ' + (over === 1 ? 'region' : over + ' regions') + ' now reading $2$ or more. Those elements have been counted twice, once for each set they belong to, and the total is too big by exactly that much. The subtractions coming next are what fix it.'
          : 'No region is over-counted yet, because the sets added so far do not overlap each other.');
    }
  },

  'all-added': {
    title: (ctx) => 'All the sets are in, and the total is too big',
    body: (ctx) => 'The running total is $' + ctx.running + '$, and it is wrong.\n\n' +
      (ctx.n === 3
        ? 'Regions in exactly one set read $1$ and are already correct. Regions in two sets read $2$. The centre, in all three, reads $3$. Each of those elements has been counted once for every set it belongs to.\n\nThe fix is not to guess a correction, it is to subtract each pairwise overlap. Watch what that does to the centre.'
        : 'The lens in the middle reads $2$: those elements are in both sets, so they were counted once by $|A|$ and again by $|B|$. Subtracting $|A \\cap B|$ removes exactly one of those counts.')
  },

  'subtracting': {
    title: (ctx) => 'Subtracting ' + ctx.termLabelPlain,
    body: (ctx) => 'Every region inside $' + ctx.termSet + '$ drops by one, bringing the total to $' + ctx.running + '$.\n\n' +
      (ctx.n === 3
        ? 'This corrects the pair, but notice it also hits the centre. The centre sits inside every pairwise overlap, so all three subtractions reach it — and it only needed correcting from $3$ down to $1$.'
        : 'That is the whole two-set formula. The lens was counted twice and is now counted once, so every element in the union is counted exactly once.')
  },

  'centre-emptied': {
    title: 'The centre has been subtracted into nothing',
    body: (ctx) => 'The three subtractions are done and the total reads $' + ctx.running + '$. Every region in exactly two sets is now correct at $1$.\n\nThe centre is at $0$. It was counted $3$ times by the three sets, then removed $3$ times by the three pairwise overlaps, because it lies inside all of them. Elements in all three sets are currently not being counted at all.\n\nThat is exactly why the last term is an **addition**. $+|A \\cap B \\cap C|$ puts the centre back to $1$, and it explains a sign that otherwise looks arbitrary.'
  },

  'complete': {
    title: 'Every region counted exactly once',
    body: (ctx) => 'Every region reads $1$, so the running total **is** the size of the union: $|' +
      (ctx.n === 3 ? 'A \\cup B \\cup C' : 'A \\cup B') + '| = ' + ctx.unionValue + '$.\n\n' +
      'That is the argument in full. The formula is not a recipe to memorise, it is a bookkeeping correction: add everything, remove what you double counted, put back what you removed too often. The alternating signs come from that and nothing else.\n\n' +
      'Check it against the regions: their counts sum to $' + ctx.regionSum + '$, which is the same number arrived at by adding up the picture directly.'
  },

  'incomplete': {
    title: 'Something did not land on 1',
    body: 'All the terms have been applied but at least one region is not counted exactly once. With valid sizes this cannot happen, so check the entered numbers for a region flagged as negative.'
  }
};

// Optional aside, keyed by the same ids.
export const DEFAULT_NOTES = {
  'complete': (ctx) =>
    ctx.n === 3
      ? 'The signs follow a pattern that keeps going. For four sets you add the four sizes, subtract the six pairs, add the four triples, and subtract the quadruple \u2014 alternating by the number of sets in each term.'
      : 'With three sets the same idea needs seven terms rather than three, and the last one is an addition. Switch to 3 sets and step through it.',
  'centre-emptied': 'A common wrong version of this formula stops here, or subtracts the triple overlap instead of adding it. Both leave the centre miscounted, and both are easy to spot once you are watching the region numbers rather than the algebra.'
};

function resolveExplanationId(ctx) {
  if (ctx.errorKind === 'impossible') return 'impossible';
  if (ctx.step === 0) return ctx.allDisjoint ? 'disjoint' : 'start';
  if (ctx.step === ctx.totalSteps) return ctx.allOnes ? 'complete' : 'incomplete';
  if (ctx.n === 3 && ctx.step === 6) return 'centre-emptied';
  if (ctx.step === ctx.n) return 'all-added';
  if (ctx.termSign < 0) return 'subtracting';
  return 'adding';
}

// ============================================================================
// SECTION 4 - STYLES
// Bump the version in CSS_ID whenever a rule below changes. Injection under a
// previously used id is skipped, so an unversioned edit silently does nothing.
// ============================================================================

const CSS_ID = 'inclusion-exclusion-styles-v1';

const CSS = `
.iex-root {
  --iex-ink: #131720;
  --iex-ink-soft: #5a6472;
  --iex-rule: #c2ccd8;
  --iex-rule-soft: #e3e9ef;
  --iex-hair: rgba(19, 23, 32, 0.06);
  --iex-panel: #f6f7f9;
  --iex-head: #eef0f4;
  --iex-paper: #ffffff;
  --iex-math: "Cambria Math", "Latin Modern Math", Georgia, "Times New Roman", serif;
  --iex-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  color: var(--iex-ink);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.45;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.iex-root *, .iex-root *::before, .iex-root *::after { box-sizing: border-box; }
.iex-intro { margin: 0 0 20px; max-width: 70ch; font-size: 15.5px; line-height: 1.65; color: var(--iex-ink-soft); }
.iex-intro > p { margin: 0 0 10px; }
.iex-intro > p:last-child { margin-bottom: 0; }
.iex-intro strong { color: var(--iex-ink); font-weight: 600; }
.iex-grid { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(320px, 1fr); gap: 16px; align-items: start; }
@media (max-width: 920px) { .iex-grid { grid-template-columns: 1fr; } }
.iex-panel { border: 1px solid var(--iex-rule-soft); border-radius: 10px; background: var(--iex-panel); overflow: hidden; }
.iex-panel + .iex-panel { margin-top: 14px; }
.iex-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 16px; background: var(--iex-head); }
.iex-head h3 { margin: 0; font-size: 10.5px; font-weight: 600; letter-spacing: 0.11em; text-transform: uppercase; color: var(--iex-ink-soft); }
.iex-body { padding: 14px 16px; }
.iex-readout { font-family: var(--iex-mono); font-size: 11.5px; color: var(--iex-ink-soft); }
.iex-readout strong { color: var(--iex-ink); font-weight: 600; }
.iex-stage { padding: 6px; background: var(--iex-paper); border-bottom: 1px solid var(--iex-rule-soft); }
.iex-svg { width: 100%; height: auto; display: block; max-width: 520px; margin: 0 auto; }
.iex-seg { display: flex; border: 1px solid var(--iex-rule); border-radius: 6px; overflow: hidden; }
.iex-seg button { font: inherit; font-size: 12.5px; border: 0; background: var(--iex-paper); color: var(--iex-ink-soft); padding: 6px 12px; cursor: pointer; border-right: 1px solid var(--iex-rule-soft); white-space: nowrap; }
.iex-seg button:last-child { border-right: 0; }
.iex-seg button[aria-pressed="true"] { background: var(--iex-accent); color: #ffffff; }
.iex-fields { display: grid; grid-template-columns: repeat(auto-fit, minmax(108px, 1fr)); gap: 8px; }
.iex-field { background: var(--iex-paper); border: 1px solid var(--iex-rule-soft); border-radius: 7px; padding: 7px 9px; }
.iex-field label { display: block; font-family: var(--iex-math); font-size: 15px; color: var(--iex-ink); margin-bottom: 3px; }
.iex-field input { width: 100%; border: 0; border-bottom: 1px solid var(--iex-rule-soft); background: transparent; font: inherit; font-family: var(--iex-mono); font-size: 14px; color: var(--iex-ink); padding: 2px 0; }
.iex-field input:focus { outline: none; border-bottom-color: var(--iex-accent); }
.iex-field.iex-bad { border-color: #c0392b; background: #fdecea; }
.iex-terms { list-style: none; margin: 0; padding: 0; }
.iex-terms li { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 7px; font-size: 13px; color: var(--iex-ink-soft); opacity: 0.42; }
.iex-terms li.iex-done { opacity: 1; }
.iex-terms li.iex-now { opacity: 1; background: var(--iex-paper); border: 1px solid var(--iex-rule); }
.iex-terms .iex-sign { flex: 0 0 20px; height: 20px; border-radius: 5px; display: grid; place-items: center; font-family: var(--iex-mono); font-size: 13px; font-weight: 700; }
.iex-terms .iex-expr { font-family: var(--iex-math); font-size: 15px; color: var(--iex-ink); flex: 1; }
.iex-terms .iex-val { font-family: var(--iex-mono); font-size: 12.5px; }
.iex-terms .iex-run { font-family: var(--iex-mono); font-size: 12.5px; color: var(--iex-ink-soft); width: 54px; text-align: right; }
.iex-terms li.iex-now .iex-run { color: var(--iex-accent); font-weight: 700; }
.iex-btn { font: inherit; font-size: 12.5px; padding: 7px 13px; border-radius: 6px; cursor: pointer; border: 1px solid var(--iex-rule); background: var(--iex-paper); color: var(--iex-ink); }
.iex-btn:hover { border-color: var(--iex-accent); color: var(--iex-accent); }
.iex-btn.iex-solid { background: var(--iex-accent); border-color: var(--iex-accent); color: #ffffff; }
.iex-btn.iex-solid:hover { background: #2540b8; color: #ffffff; }
.iex-btn:disabled { opacity: 0.4; cursor: default; border-color: var(--iex-rule-soft); color: var(--iex-ink-soft); }
.iex-btnrow { display: flex; gap: 7px; align-items: center; flex-wrap: wrap; }
.iex-answer { display: flex; align-items: baseline; gap: 10px; padding: 12px 14px; background: var(--iex-paper); border: 1px solid var(--iex-rule); border-radius: 8px; margin-top: 12px; }
.iex-answer .iex-m { font-family: var(--iex-math); font-size: 17px; }
.iex-answer .iex-n { font-family: var(--iex-math); font-size: 24px; font-weight: 600; color: var(--iex-accent); margin-left: auto; }
.iex-legend { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 10px; font-size: 12px; color: var(--iex-ink-soft); }
.iex-legend span { display: inline-flex; align-items: center; gap: 6px; }
.iex-sw { width: 12px; height: 12px; border-radius: 3px; border: 1px solid var(--iex-rule-soft); }
.iex-hint { font-size: 11.5px; line-height: 1.55; color: var(--iex-ink-soft); margin: 8px 0 0; }
.iex-err { color: #c0392b; font-size: 12px; margin-top: 8px; min-height: 16px; font-family: var(--iex-mono); }
.iex-exp { padding: 18px 20px 20px; }
.iex-exp-tag { display: inline-block; font-family: var(--iex-mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--iex-ink-soft); border: 1px solid var(--iex-rule-soft); border-radius: 4px; padding: 2px 7px; }
.iex-exp-title { margin: 10px 0 10px; font-size: 16px; font-weight: 600; letter-spacing: -0.005em; line-height: 1.3; }
.iex-exp.iex-state-bad .iex-exp-title { color: #c0392b; }
.iex-exp.iex-state-ok .iex-exp-title { color: #0e7c66; }
.iex-exp-body { font-size: 14px; line-height: 1.65; }
.iex-exp-body > p { margin: 0 0 12px; }
.iex-exp-body > p:last-child { margin-bottom: 0; }
.iex-exp-body a { color: var(--iex-accent); }
.iex-exp-note { margin-top: 16px; padding: 12px 0 12px 14px; border-left: 2px solid var(--iex-rule); color: var(--iex-ink-soft); font-size: 13px; line-height: 1.6; }
.iex-exp-note > p { margin: 0 0 10px; }
.iex-exp-note > p:last-child { margin-bottom: 0; }`;

function useInjectedStyles() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (document.getElementById(CSS_ID)) return;
    const tag = document.createElement('style');
    tag.id = CSS_ID;
    tag.textContent = CSS;
    document.head.appendChild(tag);
  }, []);
}

// ============================================================================
// SECTION 5 - CONTENT
// ============================================================================

function Content({ text, className }) {
  const rendered = useMemo(() => {
    if (!text) return '';
    try { return processContent(text); } catch (e) { return text; }
  }, [text]);

  if (!text) return null;
  if (typeof rendered === 'string') {
    return <div className={className} dangerouslySetInnerHTML={{ __html: rendered }} />;
  }
  return <div className={className}>{rendered}</div>;
}

// ============================================================================
// SECTION 6 - DEFAULT DATA
// ============================================================================

const DEFAULT_THEME = {
  accent: '#2f4fd8',
  accentSoft: '#eaeeff',
  add: '#0e7c66',
  addSoft: '#dff2ed',
  subtract: '#c0392b',
  subtractSoft: '#fdecea',
  over: '#fff8e6',
  neutral: '#ffffff',
  stroke: '#1e293b',
  strokeWidth: 1.4,
  labelColor: '#1e293b',
  mutedInk: '#9aa5b1'
};

const DEFAULT_SIZES = { A: 24, B: 20, C: 18, AB: 9, AC: 7, BC: 6, ABC: 3 };

const DEFAULT_INTRO =
  'Enter the sizes, then step through the formula one term at a time. The number inside ' +
  'each region is how many times that region has been counted so far. Every region starts ' +
  'at zero and has to land on exactly one \u2014 that is the whole proof, and you can watch ' +
  'the over-counts get corrected.';

const MATH_FONT = "'Cambria Math','Latin Modern Math',Georgia,serif";

// ============================================================================
// SECTION 7 - COMPONENT
// ============================================================================

export const InclusionExclusionExplorer = (props) => {
  const {
    initialSetCount = 3,
    initialSizes = null,
    initialStep = 0,
    intro = DEFAULT_INTRO,
    showIntro = true,
    maxWidth = 1200,
    theme: themeProp = null,
    explanations: explanationsProp = null,
    notes: notesProp = null,
    showExplanation = true,
    showExplanationId = false,
    showSetCount = true,
    showControls = true,
    showRegionCounts = true,
    showInputModeToggle = true,
    autoPlayMs = 1100,
    onChange = null,
    className = ''
  } = props;

  useInjectedStyles();

  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '');
  const timerRef = useRef(null);

  const theme = useMemo(() => ({ ...DEFAULT_THEME, ...(themeProp || {}) }), [themeProp]);

  const [n, setN] = useState(initialSetCount === 2 ? 2 : 3);
  const [sizes, setSizes] = useState(() => ({ ...DEFAULT_SIZES, ...(initialSizes || {}) }));
  const [regionInput, setRegionInput] = useState(null);
  const [inputMode, setInputMode] = useState('sizes');
  const [step, setStep] = useState(initialStep);
  const [playing, setPlaying] = useState(false);
  const [accent, setAccent] = useState(theme.accent);

  const terms = useMemo(() => buildTerms(n), [n]);
  const totalSteps = terms.length;
  const geo = GEOMETRY[n];

  // --- derived counts -------------------------------------------------------
  const regions = useMemo(() => {
    if (inputMode === 'regions' && regionInput) return regionInput;
    return regionsFromSizes(n, sizes);
  }, [inputMode, regionInput, n, sizes]);

  const effectiveSizes = useMemo(() => {
    if (inputMode === 'regions' && regionInput) return sizesFromRegions(n, regionInput);
    return sizes;
  }, [inputMode, regionInput, n, sizes]);

  const negativeRegions = useMemo(
    () => Object.keys(regions).filter((m) => Number(regions[m]) < 0).map(Number),
    [regions]
  );

  const mult = useMemo(() => multiplicityAfter(n, step), [n, step]);
  const running = useMemo(() => runningTotal(n, step, effectiveSizes), [n, step, effectiveSizes]);
  const unionValue = useMemo(() => runningTotal(n, totalSteps, effectiveSizes), [n, totalSteps, effectiveSizes]);
  const regionSum = useMemo(
    () => Object.keys(regions).reduce((a, m) => a + Number(regions[m] || 0), 0),
    [regions]
  );

  const currentTerm = step > 0 ? terms[step - 1] : null;
  const errorKind = negativeRegions.length ? 'impossible' : '';

  // A step index from one mode is meaningless in the other.
  useEffect(() => { setStep(0); }, [n]);

  // --- autoplay -------------------------------------------------------------
  useEffect(() => {
    if (!playing) return undefined;
    timerRef.current = window.setInterval(() => {
      setStep((prev) => {
        if (prev >= totalSteps) { setPlaying(false); return prev; }
        return prev + 1;
      });
    }, autoPlayMs);
    return () => window.clearInterval(timerRef.current);
  }, [playing, totalSteps, autoPlayMs]);

  useEffect(() => () => { if (timerRef.current) window.clearInterval(timerRef.current); }, []);

  // --- serializer -----------------------------------------------------------
  const config = useMemo(() => ({
    setCount: n,
    sizes: effectiveSizes,
    regions,
    step,
    totalSteps,
    running,
    union: unionValue,
    valid: negativeRegions.length === 0
  }), [n, effectiveSizes, regions, step, totalSteps, running, unionValue, negativeRegions]);

  const onChangeRef = useRef(onChange);
  useEffect(() => { onChangeRef.current = onChange; }, [onChange]);
  useEffect(() => { if (onChangeRef.current) onChangeRef.current(config); }, [config]);

  // --- explanation ----------------------------------------------------------
  const explanation = useMemo(() => {
    const masks = Object.keys(mult).map(Number);
    const overCounted = masks.filter((m) => mult[m] > 1).length;
    const allOnes = masks.every((m) => mult[m] === 1);
    const pairKeys = n === 2 ? ['AB'] : ['AB', 'AC', 'BC'];
    const allDisjoint = pairKeys.every((key) => Number(effectiveSizes[key] || 0) === 0);
    const setKeys = n === 2 ? ['A', 'B'] : ['A', 'B', 'C'];

    const ctx = {
      n,
      step,
      totalSteps,
      sizes: effectiveSizes,
      sizeList: setKeys.map((key) => effectiveSizes[key]).join(' + '),
      regions,
      regionSum,
      mult,
      overCounted,
      allOnes,
      allDisjoint,
      negativeRegions,
      running,
      unionValue,
      term: currentTerm,
      termKey: currentTerm ? currentTerm.key : null,
      termSign: currentTerm ? currentTerm.sign : 0,
      termValue: currentTerm ? Number(effectiveSizes[currentTerm.key] || 0) : 0,
      termLabel: currentTerm ? SIZE_LABELS[currentTerm.key] : '',
      termLabelPlain: currentTerm ? SIZE_LABELS[currentTerm.key].replace(/\|/g, '') : '',
      termSet: currentTerm ? currentTerm.key.split('').join(' \\cap ') : '',
      errorKind,
      plural: (word, count) => (count === 1 ? word : word + 's')
    };

    const id = resolveExplanationId(ctx);
    const source =
      (explanationsProp && explanationsProp[id]) ||
      DEFAULT_EXPLANATIONS[id] ||
      DEFAULT_EXPLANATIONS.start;

    const resolve = (v) => (typeof v === 'function' ? v(ctx) : v);

    const noteSource = notesProp && Object.prototype.hasOwnProperty.call(notesProp, id)
      ? notesProp[id]
      : DEFAULT_NOTES[id];

    return {
      id,
      title: resolve(source.title),
      body: resolve(source.body),
      note: resolve(noteSource) || '',
      isError: Boolean(errorKind),
      isDone: id === 'complete'
    };
  }, [n, step, totalSteps, effectiveSizes, regions, regionSum, mult, negativeRegions,
    running, unionValue, currentTerm, errorKind, explanationsProp, notesProp]);

  // --- handlers -------------------------------------------------------------
  const setSize = useCallback((key, value) => {
    setSizes((prev) => ({ ...prev, [key]: Math.max(0, parseInt(value || '0', 10) || 0) }));
  }, []);

  const setRegion = useCallback((mask, value) => {
    setRegionInput((prev) => {
      const base = prev || regionsFromSizes(n, sizes);
      return { ...base, [mask]: Math.max(0, parseInt(value || '0', 10) || 0) };
    });
  }, [n, sizes]);

  const switchMode = useCallback((mode) => {
    if (mode === 'regions') setRegionInput(regionsFromSizes(n, sizes));
    else if (regionInput) setSizes(sizesFromRegions(n, regionInput));
    setInputMode(mode);
  }, [n, sizes, regionInput]);

  const next = useCallback(() => setStep((p) => Math.min(totalSteps, p + 1)), [totalSteps]);
  const prev = useCallback(() => setStep((p) => Math.max(0, p - 1)), []);
  const reset = useCallback(() => { setPlaying(false); setStep(0); }, []);
  const togglePlay = useCallback(() => {
    setPlaying((p) => {
      if (!p && step >= totalSteps) setStep(0);
      return !p;
    });
  }, [step, totalSteps]);

  // --- render helpers -------------------------------------------------------
  const regionFill = (mask) => {
    if (currentTerm && currentTerm.masks.indexOf(mask) > -1) {
      return currentTerm.sign > 0 ? theme.addSoft : theme.subtractSoft;
    }
    if (mult[mask] === 1) return theme.accentSoft;
    if (mult[mask] > 1 || mult[mask] < 0) return theme.over;
    return theme.neutral;
  };

  const numberInk = (mask) => {
    if (currentTerm && currentTerm.masks.indexOf(mask) > -1) {
      return currentTerm.sign > 0 ? theme.add : theme.subtract;
    }
    return mult[mask] === 1 ? accent : '#8794a5';
  };

  const renderRegions = () => {
    const out = [];
    for (let m = 1; m < (1 << n); m++) {
      let node = (
        <rect x="0" y="0" width={geo.width} height={geo.height} fill={regionFill(m)} />
      );
      for (let i = geo.sets.length - 1; i >= 0; i--) {
        const clip = ((m & (1 << i)) ? 'in' : 'out') + geo.sets[i] + uid;
        node = <g clipPath={'url(#' + clip + ')'}>{node}</g>;
      }
      out.push(<g key={'reg-' + m}>{node}</g>);
    }
    return out;
  };

  const rootStyle = {
    '--iex-accent': accent,
    maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth
  };

  const sizeKeys = SIZE_KEYS[n];
  const regionMasks = Object.keys(regions).map(Number).sort((a, b) => a - b);

  return (
    <div className={'iex-root ' + className} style={rootStyle}>

      {showIntro && intro && (
        typeof intro === 'string'
          ? <Content className="iex-intro" text={intro} />
          : <div className="iex-intro">{intro}</div>
      )}

      <div className="iex-grid">

        {/* ---------------- diagram + explanation ---------------- */}
        <div>
          <div className="iex-panel">
            <div className="iex-head">
              <h3>Times counted</h3>
              <span className="iex-readout">
                term <strong>{step}</strong> of {totalSteps}
              </span>
            </div>

            <div className="iex-stage">
              <svg
                className="iex-svg"
                viewBox={'0 0 ' + geo.width + ' ' + geo.height}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {geo.sets.map((s) => {
                    const [cx, cy] = geo.centres[s];
                    return (
                      <React.Fragment key={'clip-' + s}>
                        <clipPath id={'in' + s + uid} clipPathUnits="userSpaceOnUse">
                          <path d={circlePath(cx, cy, geo.radius)} />
                        </clipPath>
                        <clipPath id={'out' + s + uid} clipPathUnits="userSpaceOnUse">
                          <path d={outsidePath(geo, cx, cy, geo.radius)} clipRule="evenodd" />
                        </clipPath>
                      </React.Fragment>
                    );
                  })}
                </defs>

                <rect x="0" y="0" width={geo.width} height={geo.height} fill="#ffffff" />

                <g>{renderRegions()}</g>

                {geo.sets.map((s) => {
                  const [cx, cy] = geo.centres[s];
                  return (
                    <circle
                      key={'outline-' + s}
                      cx={cx}
                      cy={cy}
                      r={geo.radius}
                      fill="none"
                      stroke={theme.stroke}
                      strokeWidth={theme.strokeWidth}
                    />
                  );
                })}

                {geo.sets.map((s) => {
                  const [cx, cy] = geo.centres[s];
                  const [dx, dy] = geo.labelOffset[s];
                  return (
                    <text
                      key={'label-' + s}
                      x={cx + dx}
                      y={cy + dy}
                      textAnchor="middle"
                      fontFamily={MATH_FONT}
                      fontSize="19"
                      fontStyle="italic"
                      fill={theme.labelColor}
                    >
                      {s}
                    </text>
                  );
                })}

                {regionMasks.map((m) => {
                  const [x, y] = geo.anchors[m];
                  const count = Number(regions[m]);
                  return (
                    <g key={'num-' + m}>
                      <text
                        x={x}
                        y={y + 2}
                        textAnchor="middle"
                        fontFamily={MATH_FONT}
                        fontSize="22"
                        fontWeight="600"
                        fill={numberInk(m)}
                      >
                        {mult[m]}
                      </text>
                      {showRegionCounts && (
                        <text
                          x={x}
                          y={y + 20}
                          textAnchor="middle"
                          fontFamily="ui-monospace, Menlo, Consolas, monospace"
                          fontSize="10.5"
                          fill={count < 0 ? theme.subtract : theme.mutedInk}
                        >
                          {count < 0 ? '\u2715' : count}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="iex-body">
              <div className="iex-btnrow">
                <button type="button" className="iex-btn" onClick={prev} disabled={step === 0}>
                  Previous
                </button>
                <button type="button" className="iex-btn iex-solid" onClick={next} disabled={step === totalSteps}>
                  Next term
                </button>
                <button type="button" className="iex-btn" onClick={reset}>Reset</button>
                <button type="button" className="iex-btn" onClick={togglePlay}>
                  {playing ? 'Pause' : 'Play'}
                </button>
              </div>

              <div className="iex-legend">
                <span>
                  <i className="iex-sw" style={{ background: theme.addSoft, borderColor: theme.add }} />
                  added by this term
                </span>
                <span>
                  <i className="iex-sw" style={{ background: theme.subtractSoft, borderColor: theme.subtract }} />
                  subtracted by this term
                </span>
                <span>
                  <i className="iex-sw" style={{ background: theme.accentSoft, borderColor: accent }} />
                  already at 1
                </span>
              </div>
            </div>
          </div>

          {showExplanation && (
            <div className="iex-panel">
              <div className={
                'iex-exp' +
                (explanation.isError ? ' iex-state-bad' : '') +
                (explanation.isDone ? ' iex-state-ok' : '')
              }>
                {showExplanationId && <span className="iex-exp-tag">{explanation.id}</span>}
                <h4 className="iex-exp-title">{explanation.title}</h4>
                <Content className="iex-exp-body" text={explanation.body} />
                {explanation.note && <Content className="iex-exp-note" text={explanation.note} />}
              </div>
            </div>
          )}
        </div>

        {/* ---------------- controls ---------------- */}
        {showControls && (
          <div>
            <div className="iex-panel">
              <div className="iex-head">
                <h3>{inputMode === 'sizes' ? 'Sizes' : 'Region counts'}</h3>
                {showSetCount && (
                  <div className="iex-seg" role="group" aria-label="Number of sets">
                    {[2, 3].map((count) => (
                      <button
                        key={'n' + count}
                        type="button"
                        aria-pressed={n === count}
                        onClick={() => setN(count)}
                      >
                        {count} sets
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="iex-body">
                {showInputModeToggle && (
                  <div className="iex-seg" style={{ marginBottom: 12 }} role="group" aria-label="Input mode">
                    <button type="button" aria-pressed={inputMode === 'sizes'} onClick={() => switchMode('sizes')}>
                      Enter sizes
                    </button>
                    <button type="button" aria-pressed={inputMode === 'regions'} onClick={() => switchMode('regions')}>
                      Enter regions
                    </button>
                  </div>
                )}

                {inputMode === 'sizes' ? (
                  <div className="iex-fields">
                    {sizeKeys.map((key) => (
                      <div key={key} className="iex-field">
                        <label htmlFor={'f' + key + uid}>{SIZE_LABELS[key]}</label>
                        <input
                          id={'f' + key + uid}
                          type="number"
                          min="0"
                          value={sizes[key]}
                          onChange={(e) => setSize(key, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="iex-fields">
                    {regionMasks.map((m) => {
                      const inside = geo.sets.filter((_, i) => m & (1 << i));
                      return (
                        <div key={'r' + m} className="iex-field">
                          <label htmlFor={'r' + m + uid}>
                            {inside.length > 1 ? inside.join(' \u2229 ') + ' only' : inside.join('') + ' only'}
                          </label>
                          <input
                            id={'r' + m + uid}
                            type="number"
                            min="0"
                            value={regions[m]}
                            onChange={(e) => setRegion(m, e.target.value)}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="iex-err">
                  {negativeRegions.length > 0 &&
                    negativeRegions.length + ' region' + (negativeRegions.length > 1 ? 's are' : ' is') + ' negative.'}
                </div>

                <p className="iex-hint">
                  {inputMode === 'sizes'
                    ? 'Sizes are cumulative: an intersection field counts every element in that intersection, including any in a bigger one.'
                    : 'Region counts are exclusive: each field counts only the elements in that region and no other. The sizes are derived from them.'}
                </p>
              </div>
            </div>

            <div className="iex-panel">
              <div className="iex-head">
                <h3>The formula</h3>
                <span className="iex-readout">running total</span>
              </div>
              <div className="iex-body">
                <ul className="iex-terms">
                  {terms.map((t, i) => {
                    const applied = i < step;
                    const run = runningTotal(n, i + 1, effectiveSizes);
                    return (
                      <li
                        key={t.key}
                        className={i === step - 1 ? 'iex-now' : (applied ? 'iex-done' : '')}
                      >
                        <span
                          className="iex-sign"
                          style={{
                            background: t.sign > 0 ? theme.addSoft : theme.subtractSoft,
                            color: t.sign > 0 ? theme.add : theme.subtract
                          }}
                        >
                          {t.sign > 0 ? '+' : '\u2212'}
                        </span>
                        <span className="iex-expr">{SIZE_LABELS[t.key]}</span>
                        <span className="iex-val" style={{ color: t.sign > 0 ? theme.add : theme.subtract }}>
                          {effectiveSizes[t.key]}
                        </span>
                        <span className="iex-run">{applied ? run : ''}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className="iex-answer">
                  <span className="iex-m">{n === 2 ? '|A \u222a B|' : '|A \u222a B \u222a C|'}</span>
                  <span className="iex-n">
                    {step === totalSteps ? unionValue : (step === 0 ? '?' : running)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default InclusionExclusionExplorer;