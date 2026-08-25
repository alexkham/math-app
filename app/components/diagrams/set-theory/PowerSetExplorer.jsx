'use client';

// ============================================================================
// POWER SET EXPLORER
// ----------------------------------------------------------------------------
// Every subset of a small set, drawn as a Hasse diagram of the subset lattice.
// Levels are cardinalities; an edge joins two subsets differing by exactly one
// element, so the subset relation reads as upward paths.
//
// Nothing is written per set size. A subset is a membership mask over the
// elements, the lattice is derived from the masks, and the layout is a function
// of the level sizes — so the element count is a parameter, not a rewrite.
//
// IMPORTANT: fix the processContent import path below to match your project.
// If the path is wrong the whole module fails to load and PowerSetExplorer
// becomes undefined in its consumers.
// ============================================================================

import React, { useState, useMemo, useEffect, useCallback, useRef, useId } from 'react';
import { processContent } from '../../../utils/contentProcessor';

// ============================================================================
// SECTION 1 - LATTICE
// A subset is a membership mask. Bit i is set when element i is in the subset.
// ============================================================================

export function popcount(mask) {
  let m = mask;
  let c = 0;
  while (m) { c += m & 1; m >>= 1; }
  return c;
}

export function choose(n, k) {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - i + 1)) / i;
  return Math.round(r);
}

export function parseElements(text, max) {
  const parts = String(text || '')
    .split(/[,;\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const seen = [];
  let duplicate = false;
  parts.forEach((p) => {
    if (seen.indexOf(p) > -1) duplicate = true;
    else seen.push(p);
  });
  return {
    elements: seen.slice(0, max),
    duplicate,
    overflow: seen.length > max,
    raw: parts.length
  };
}

// Rows of masks, index k holding every subset of size k.
export function buildLevels(n) {
  const rows = [];
  for (let k = 0; k <= n; k++) rows.push([]);
  for (let m = 0; m < (1 << n); m++) rows[popcount(m)].push(m);
  return rows;
}

export const isSubsetOf = (a, b) => (a & b) === a;

export function subsetLabel(mask, elements, emptySymbol) {
  const inside = elements.filter((_, i) => mask & (1 << i));
  if (!inside.length) return emptySymbol ? '\u2205' : '{ }';
  return '{' + inside.join(', ') + '}';
}

// ============================================================================
// SECTION 2 - LAYOUT
// Level k sits at height k. Nodes inside a level are spread evenly, ordered by
// mask so the left-to-right reading of the labels stays stable.
// ============================================================================

export function buildLayout(n, elements, emptySymbol, opts) {
  const o = opts || {};
  const levels = buildLevels(n);
  const widest = levels.reduce((a, r) => Math.max(a, r.length), 1);

  let longest = 1;
  for (let m = 0; m < (1 << n); m++) {
    longest = Math.max(longest, subsetLabel(m, elements, emptySymbol).length);
  }

  const fontSize = n >= 5 ? 11 : n === 4 ? 12 : 13;
  const nodeH = n >= 5 ? 23 : 26;
  const nodeW = Math.max(o.minNodeWidth || 46, longest * fontSize * 0.58 + 18);
  const gapX = n >= 5 ? 10 : 14;
  const gapY = o.levelGap || (n >= 5 ? 62 : 76);

  const width = Math.max(o.minWidth || 520, widest * (nodeW + gapX) + 40);
  const height = n * gapY + nodeH * 2 + 34;

  const positions = {};
  levels.forEach((row, k) => {
    row.forEach((mask, i) => {
      positions[mask] = {
        x: (width * (i + 1)) / (row.length + 1),
        y: height - nodeH - 12 - k * gapY,
        level: k
      };
    });
  });

  return { levels, positions, width, height, nodeW, nodeH, fontSize };
}

// ============================================================================
// SECTION 3 - EXPLANATIONS
// A resolver picks an id from the current state. The id is looked up in the
// `explanations` prop first, then in these defaults, so a caller can override
// one entry without restating the rest. A title or body may be a string or a
// function of the context object. Strings are written for processContent, so
// math and emphasis use its syntax.
// ============================================================================

export const DEFAULT_EXPLANATIONS = {

  'no-elements': {
    title: 'Give the set something to hold',
    body: 'A set needs at least one element before its power set is worth drawing. Type a few names into the elements box, separated by commas.\n\nThe one exception is the empty set itself: $P(\\varnothing) = \\{\\varnothing\\}$, a set with exactly one member. Empty is not the same as nothing.'
  },

  'duplicate': {
    title: 'A set has no repeats',
    body: 'One of those elements was listed twice, and the repeat has been dropped.\n\nThis is not a formatting rule, it is what a set **is**. $\\{a, b, a\\}$ and $\\{a, b\\}$ are the same set with the same two members, so they have the same power set. Order does not count either: $\\{a, b\\} = \\{b, a\\}$.'
  },

  'too-many': {
    title: (ctx) => 'Stopped at ' + ctx.max + ' elements',
    body: (ctx) => 'Only the first ' + ctx.max + ' elements are drawn. The reason is the doubling: each element you add doubles the number of subsets, so ' + ctx.max + ' elements already give $2^{' + ctx.max + '} = ' + Math.pow(2, ctx.max) + '$ nodes.\n\nOne more would be ' + Math.pow(2, ctx.max + 1) + ', and the diagram stops being readable long before it stops being correct.'
  },

  'one-element-set': {
    title: (ctx) => 'The smallest interesting power set',
    body: (ctx) => 'With a single element, $A = \\{' + ctx.elements[0] + '\\}$ has exactly two subsets: the empty set at the bottom and $A$ itself at the top.\n\nThat is $2^1 = 2$, and it is the base case the whole pattern grows from. Add a second element and every one of these two subsets splits in two — the ones without it, and the same ones with it added. That is why the count doubles rather than growing some other way.'
  },

  'nothing-selected': {
    title: (ctx) => 'The subset lattice of a ' + ctx.n + '-element set',
    body: (ctx) => 'The bottom node is the empty set, the top node is $A$ itself, and every line upward adds exactly one element. Any path you can trace upward from one subset to another means the first is contained in the second.\n\nThere are $2^{' + ctx.n + '} = ' + ctx.total + '$ subsets in total, because each of the ' + ctx.n + ' elements is independently either in or out. Level $k$ holds $\\binom{' + ctx.n + '}{k}$ of them: ' + ctx.levelCounts.join(' + ') + ' = ' + ctx.total + '.\n\n**Click any subset** to see what it contains and what contains it.'
  },

  'empty-set': {
    title: 'The empty set is a subset of everything',
    body: (ctx) => 'Nothing is highlighted below $\\varnothing$ because nothing is below it. It is the bottom of the lattice, and it has exactly one subset: itself.\n\nEverything else is above it. The empty set is a subset of all $' + ctx.total + '$ subsets here, and of every set anywhere. The reason is that $\\varnothing \\subseteq S$ asks whether every element of $\\varnothing$ is in $S$, and there are no elements to check, so the condition holds by default.\n\nStudents often want this to be false. It is not — but note that $\\varnothing \\in S$ is a different claim and usually **is** false.'
  },

  'full-set': {
    title: (ctx) => 'The whole set sits at the top',
    body: (ctx) => '$A$ itself is a subset of $A$, which is why it appears in its own power set. Every other node is below it, so $A$ has all $' + ctx.total + '$ subsets and $' + ctx.properSubsetCount + '$ proper ones.\n\nA **proper** subset is any subset except the set itself. That single exclusion is the only difference between $\\subseteq$ and $\\subset$, and it is why the counts here differ by exactly one.'
  },

  'singleton': {
    title: (ctx) => 'A singleton and its two subsets',
    body: (ctx) => '$' + ctx.selectedLabel + '$ holds one element, so it has $2^1 = 2$ subsets: itself and the empty set. The cone below it is the smallest one in the diagram.\n\nAbove it are the $' + ctx.supersetCount + '$ subsets that contain this element — exactly half of all $' + ctx.total + '$, because every other element is independently in or out.'
  },

  'general': {
    title: (ctx) => 'Inside ' + ctx.selectedLabel + ', and around it',
    body: (ctx) => 'The blue cone below $' + ctx.selectedLabel + '$ is its own power set. It holds $2^{' + ctx.k + '} = ' + ctx.subsetCount + '$ subsets, and it is a complete copy of this whole diagram for a set of size ' + ctx.k + '. That is the recursion behind $|P(A)| = 2^n$ made visible: every node carries a smaller copy of the picture inside it.\n\nThe green cone above holds the $' + ctx.supersetCount + '$ subsets that contain it, which is $2^{' + (ctx.n - ctx.k) + '}$ — one choice, in or out, for each of the ' + (ctx.n - ctx.k) + ' elements not already in it.\n\nProperly: $' + ctx.properSubsetCount + '$ proper subsets below, $' + ctx.properSupersetCount + '$ proper supersets above.'
  }
};

// Optional aside, keyed by the same ids. Rendered under the main body.
export const DEFAULT_NOTES = {
  'nothing-selected': (ctx) =>
    ctx.n >= 3
      ? 'The level counts $' + ctx.levelCounts.join(', ') + '$ are a row of Pascal\u2019s triangle, and they read the same forwards and backwards. Choosing $k$ elements to include is the same job as choosing $' + ctx.n + ' - k$ to leave out, so the two counts have to match.'
      : '',
  'general': (ctx) =>
    'The two cones overlap only at $' + ctx.selectedLabel + '$ itself, and together they miss the subsets that neither contain it nor sit inside it. Those are the ones drawn pale — they are incomparable to it, which is what makes $\\subseteq$ a partial order rather than a ranking.'
};

function resolveExplanationId(ctx) {
  if (ctx.errorKind === 'empty') return 'no-elements';
  if (ctx.errorKind === 'overflow') return 'too-many';
  if (ctx.errorKind === 'duplicate') return 'duplicate';
  if (ctx.selected === null) return ctx.n === 1 ? 'one-element-set' : 'nothing-selected';
  if (ctx.k === 0) return 'empty-set';
  if (ctx.k === ctx.n) return 'full-set';
  if (ctx.k === 1) return 'singleton';
  return 'general';
}

// ============================================================================
// SECTION 4 - STYLES
// Bump the version in CSS_ID whenever a rule below changes. Injection under a
// previously used id is skipped, so an unversioned edit silently does nothing.
// ============================================================================

const CSS_ID = 'power-set-explorer-styles-v1';

const CSS = `
.pse-root {
  --pse-ink: #131720;
  --pse-ink-soft: #5a6472;
  --pse-rule: #c2ccd8;
  --pse-rule-soft: #e3e9ef;
  --pse-hair: rgba(19, 23, 32, 0.06);
  --pse-panel: #f6f7f9;
  --pse-head: #eef0f4;
  --pse-paper: #ffffff;
  --pse-math: "Cambria Math", "Latin Modern Math", Georgia, "Times New Roman", serif;
  --pse-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  color: var(--pse-ink);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.45;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.pse-root *, .pse-root *::before, .pse-root *::after { box-sizing: border-box; }
.pse-intro { margin: 0 0 20px; max-width: 68ch; font-size: 15.5px; line-height: 1.65; color: var(--pse-ink-soft); }
.pse-intro > p { margin: 0 0 10px; }
.pse-intro > p:last-child { margin-bottom: 0; }
.pse-intro strong { color: var(--pse-ink); font-weight: 600; }
.pse-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 1fr);
  gap: 16px;
  align-items: start;
}
@media (max-width: 920px) { .pse-grid { grid-template-columns: 1fr; } }
.pse-panel { border: 1px solid var(--pse-rule-soft); border-radius: 10px; background: var(--pse-panel); overflow: hidden; }
.pse-panel + .pse-panel { margin-top: 14px; }
.pse-head {
  display: flex; align-items: center; justify-content: space-between;
  gap: 10px; padding: 10px 16px; background: var(--pse-head);
}
.pse-head h3 {
  margin: 0; font-size: 10.5px; font-weight: 600;
  letter-spacing: 0.11em; text-transform: uppercase; color: var(--pse-ink-soft);
}
.pse-body { padding: 14px 16px; }
.pse-readout { font-family: var(--pse-mono); font-size: 11.5px; color: var(--pse-ink-soft); }
.pse-readout strong { color: var(--pse-ink); font-weight: 600; }
.pse-stage { padding: 8px; background: var(--pse-paper); border-bottom: 1px solid var(--pse-rule-soft); overflow-x: auto; }
.pse-svg { width: 100%; height: auto; display: block; }
.pse-node { cursor: pointer; }
.pse-node text { font-family: var(--pse-math); pointer-events: none; }
.pse-node:focus { outline: none; }
.pse-node:focus-visible rect { stroke: var(--pse-accent); stroke-width: 2.4; }
.pse-tabs { display: flex; gap: 2px; border-bottom: 2px solid var(--pse-rule-soft); padding: 0 12px; overflow-x: auto; background: var(--pse-head); }
.pse-tabs button {
  font: inherit; font-size: 12px; border: 0; background: transparent; color: var(--pse-ink-soft);
  padding: 9px 12px; cursor: pointer; border-bottom: 2px solid transparent;
  margin-bottom: -2px; white-space: nowrap;
}
.pse-tabs button[aria-selected="true"] { color: var(--pse-accent); border-bottom-color: var(--pse-accent); font-weight: 600; }
.pse-row { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.pse-row:last-child { margin-bottom: 0; }
.pse-row label { font-size: 12px; color: var(--pse-ink-soft); width: 92px; flex: 0 0 92px; }
.pse-row input[type="text"] {
  flex: 1; min-width: 0; font-family: var(--pse-math); font-size: 17px;
  padding: 7px 10px; border: 1px solid var(--pse-rule); border-radius: 6px;
  background: var(--pse-paper); color: var(--pse-ink);
}
.pse-row input[type="text"]:focus { outline: 2px solid var(--pse-accent); outline-offset: -1px; border-color: var(--pse-accent); }
.pse-row input[type="range"] { flex: 1; accent-color: var(--pse-accent); }
.pse-row input[type="color"] {
  width: 34px; height: 26px; padding: 0; border: 1px solid var(--pse-rule);
  border-radius: 4px; background: var(--pse-paper); cursor: pointer;
}
.pse-row input[type="checkbox"] { accent-color: var(--pse-accent); width: 15px; height: 15px; }
.pse-row output { font-family: var(--pse-mono); font-size: 11.5px; color: var(--pse-ink-soft); width: 44px; text-align: right; }
.pse-seg { display: flex; border: 1px solid var(--pse-rule); border-radius: 6px; overflow: hidden; }
.pse-seg button {
  font: inherit; font-size: 12.5px; border: 0; background: var(--pse-paper); color: var(--pse-ink-soft);
  padding: 6px 12px; cursor: pointer; border-right: 1px solid var(--pse-rule-soft);
}
.pse-seg button:last-child { border-right: 0; }
.pse-seg button[aria-pressed="true"] { background: var(--pse-accent); color: #ffffff; }
.pse-err { color: #c0392b; font-size: 12px; margin-top: 8px; min-height: 16px; font-family: var(--pse-mono); }
.pse-hint { font-size: 11.5px; line-height: 1.55; color: var(--pse-ink-soft); margin: 8px 0 0; }
.pse-table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
.pse-table th, .pse-table td { text-align: left; padding: 6px 8px; border-bottom: 1px solid var(--pse-hair); color: var(--pse-ink-soft); }
.pse-table th { font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; }
.pse-table td:first-child, .pse-table th:first-child { width: 76px; }
.pse-table .pse-m { font-family: var(--pse-math); font-size: 14px; color: var(--pse-ink); }
.pse-table tfoot td { font-weight: 600; color: var(--pse-ink); border-bottom: 0; padding-top: 8px; }
.pse-bar { height: 5px; border-radius: 3px; background: var(--pse-accent); opacity: 0.75; }
.pse-roster { font-family: var(--pse-math); font-size: 14px; line-height: 1.95; color: var(--pse-ink-soft); word-break: break-word; }
.pse-roster button {
  font: inherit; font-family: var(--pse-math); font-size: 14px; border: 0;
  background: transparent; color: inherit; padding: 1px 5px; border-radius: 4px; cursor: pointer;
}
.pse-roster button:hover { background: var(--pse-rule-soft); }
.pse-legend { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 12px; font-size: 12px; color: var(--pse-ink-soft); }
.pse-legend span { display: inline-flex; align-items: center; gap: 6px; }
.pse-sw { width: 12px; height: 12px; border-radius: 3px; border: 1px solid var(--pse-rule-soft); }
.pse-exp { padding: 18px 20px 20px; }
.pse-exp-tag {
  display: inline-block; font-family: var(--pse-mono); font-size: 10px;
  letter-spacing: 0.06em; text-transform: uppercase; color: var(--pse-ink-soft);
  border: 1px solid var(--pse-rule-soft); border-radius: 4px; padding: 2px 7px;
}
.pse-exp-title { margin: 10px 0 10px; font-size: 16px; font-weight: 600; letter-spacing: -0.005em; line-height: 1.3; }
.pse-exp.pse-state-bad .pse-exp-title { color: #c0392b; }
.pse-exp-body { font-size: 14px; line-height: 1.65; }
.pse-exp-body > p { margin: 0 0 12px; }
.pse-exp-body > p:last-child { margin-bottom: 0; }
.pse-exp-body a { color: var(--pse-accent); }
.pse-exp-note {
  margin-top: 16px; padding: 12px 0 12px 14px;
  border-left: 2px solid var(--pse-rule); color: var(--pse-ink-soft); font-size: 13px; line-height: 1.6;
}
.pse-exp-note > p { margin: 0 0 10px; }
.pse-exp-note > p:last-child { margin-bottom: 0; }`;

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
  up: '#0e7c66',
  upSoft: '#e3f4f0',
  node: '#ffffff',
  nodeStroke: '#c2ccd8',
  edge: '#dfe5ec',
  edgeMuted: '#eef2f6',
  mutedStroke: '#e8edf2',
  mutedInk: '#9aa5b1',
  ink: '#131720'
};

const DEFAULT_INTRO =
  'Every subset of a small set, arranged as a Hasse diagram. A line joins two subsets ' +
  'that differ by exactly one element, so the whole subset relation reads as upward ' +
  'paths. Click any subset to see what it contains and what contains it.';

const DEFAULT_PRESETS = [
  { label: 'a, b, c', value: 'a, b, c' },
  { label: '1, 2, 3, 4', value: '1, 2, 3, 4' },
  { label: 'x, y', value: 'x, y' },
  { label: 'red, green, blue', value: 'red, green, blue' }
];

// ============================================================================
// SECTION 7 - COMPONENT
// ============================================================================

export const PowerSetExplorer = (props) => {
  const {
    initialElements = 'a, b, c',
    initialSelected = null,
    maxElements = 5,
    emptySetSymbol = true,
    intro = DEFAULT_INTRO,
    showIntro = true,
    maxWidth = 1200,
    theme: themeProp = null,
    explanations: explanationsProp = null,
    notes: notesProp = null,
    presets: presetsProp = null,
    showExplanation = true,
    showExplanationId = false,
    showControls = true,
    showLevelTable = true,
    showRoster = true,
    showStyleTab = true,
    onChange = null,
    className = ''
  } = props;

  useInjectedStyles();

  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '');
  const svgRef = useRef(null);

  const theme = useMemo(() => ({ ...DEFAULT_THEME, ...(themeProp || {}) }), [themeProp]);
  const presets = presetsProp || DEFAULT_PRESETS;

  const [elementText, setElementText] = useState(initialElements);
  const [selected, setSelected] = useState(initialSelected);
  const [emptySymbol, setEmptySymbol] = useState(emptySetSymbol);
  const [tab, setTab] = useState('set');
  const [accent, setAccent] = useState(theme.accent);
  const [levelGap, setLevelGap] = useState(0);
  const [showEdgeFade, setShowEdgeFade] = useState(true);

  // --- parsing --------------------------------------------------------------
  const parsed = useMemo(() => parseElements(elementText, maxElements), [elementText, maxElements]);
  const elements = parsed.elements;
  const n = elements.length;
  const total = n ? (1 << n) : 0;

  const errorKind = !n ? 'empty' : (parsed.overflow ? 'overflow' : (parsed.duplicate ? 'duplicate' : ''));

  // --- geometry -------------------------------------------------------------
  const layout = useMemo(() => {
    if (!n) return null;
    return buildLayout(n, elements, emptySymbol, {
      levelGap: levelGap || undefined
    });
  }, [n, elements, emptySymbol, levelGap]);

  // A selection made at one size is meaningless at another.
  useEffect(() => {
    if (selected !== null && (!n || selected >= (1 << n))) setSelected(null);
  }, [n, selected]);

  const k = selected === null ? null : popcount(selected);

  const relation = useCallback((mask) => {
    if (selected === null) return 'none';
    if (mask === selected) return 'self';
    if (isSubsetOf(mask, selected)) return 'down';
    if (isSubsetOf(selected, mask)) return 'up';
    return 'other';
  }, [selected]);

  // --- level counts ---------------------------------------------------------
  const levelCounts = useMemo(() => {
    const out = [];
    for (let i = 0; i <= n; i++) out.push(choose(n, i));
    return out;
  }, [n]);

  // --- serializer -----------------------------------------------------------
  const config = useMemo(() => ({
    elements,
    size: n,
    total,
    selected,
    selectedLabel: selected === null ? null : subsetLabel(selected, elements, emptySymbol),
    levelCounts,
    theme: { accent }
  }), [elements, n, total, selected, emptySymbol, levelCounts, accent]);

  const onChangeRef = useRef(onChange);
  useEffect(() => { onChangeRef.current = onChange; }, [onChange]);
  useEffect(() => { if (onChangeRef.current) onChangeRef.current(config); }, [config]);

  // --- explanation ----------------------------------------------------------
  const explanation = useMemo(() => {
    const selectedLabel = selected === null ? '' : subsetLabel(selected, elements, emptySymbol);
    const subsetCount = k === null ? 0 : (1 << k);
    const supersetCount = k === null ? 0 : (1 << (n - k));

    const ctx = {
      elements,
      setList: elements.join(', '),
      n,
      total,
      max: maxElements,
      selected,
      selectedLabel,
      k,
      levelCounts,
      subsetCount,
      properSubsetCount: Math.max(0, subsetCount - 1),
      supersetCount,
      properSupersetCount: Math.max(0, supersetCount - 1),
      isEmptySet: k === 0,
      isFullSet: k === n && n > 0,
      isSingleton: k === 1,
      errorKind,
      plural: (word, count) => (count === 1 ? word : word + 's')
    };

    const id = resolveExplanationId(ctx);
    const source =
      (explanationsProp && explanationsProp[id]) ||
      DEFAULT_EXPLANATIONS[id] ||
      DEFAULT_EXPLANATIONS.general;

    const resolve = (v) => (typeof v === 'function' ? v(ctx) : v);

    const noteSource = notesProp && Object.prototype.hasOwnProperty.call(notesProp, id)
      ? notesProp[id]
      : DEFAULT_NOTES[id];

    return {
      id,
      title: resolve(source.title),
      body: resolve(source.body),
      note: resolve(noteSource) || '',
      isError: Boolean(errorKind)
    };
  }, [selected, elements, emptySymbol, k, n, total, maxElements, levelCounts,
    errorKind, explanationsProp, notesProp]);

  // --- handlers -------------------------------------------------------------
  const pick = useCallback((mask) => {
    setSelected((prev) => (prev === mask ? null : mask));
  }, []);

  const onNodeKeyDown = useCallback((mask) => (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      pick(mask);
    }
  }, [pick]);

  const applySize = useCallback((size) => {
    setElementText('abcde'.slice(0, size).split('').join(', '));
    setSelected(null);
  }, []);

  // --- render helpers -------------------------------------------------------
  const colours = useMemo(() => ({
    self: { fill: accent, stroke: accent, ink: '#ffffff' },
    down: { fill: theme.accentSoft, stroke: accent, ink: accent },
    up: { fill: theme.upSoft, stroke: theme.up, ink: theme.up },
    other: { fill: theme.node, stroke: theme.mutedStroke, ink: theme.mutedInk },
    none: { fill: theme.node, stroke: theme.nodeStroke, ink: theme.ink }
  }), [accent, theme]);

  const renderEdges = () => {
    if (!layout) return null;
    const out = [];
    for (let m = 0; m < total; m++) {
      for (let i = 0; i < n; i++) {
        if (m & (1 << i)) continue;
        const upMask = m | (1 << i);
        const a = layout.positions[m];
        const b = layout.positions[upMask];
        const relLow = relation(m);
        const relHigh = relation(upMask);

        let stroke = theme.edge;
        let width = 1;
        if (selected !== null) {
          const downPath = (relLow === 'down' || relLow === 'self') && (relHigh === 'down' || relHigh === 'self');
          const upPath = (relLow === 'up' || relLow === 'self') && (relHigh === 'up' || relHigh === 'self');
          if (downPath) { stroke = accent; width = 1.6; }
          else if (upPath) { stroke = theme.up; width = 1.6; }
          else if (showEdgeFade) { stroke = theme.edgeMuted; }
        }
        out.push(
          <line
            key={'e-' + m + '-' + upMask}
            x1={a.x}
            y1={a.y - layout.nodeH / 2}
            x2={b.x}
            y2={b.y + layout.nodeH / 2}
            stroke={stroke}
            strokeWidth={width}
          />
        );
      }
    }
    return out;
  };

  const renderNodes = () => {
    if (!layout) return null;
    const out = [];
    for (let m = 0; m < total; m++) {
      const p = layout.positions[m];
      const c = colours[relation(m)];
      const label = subsetLabel(m, elements, emptySymbol);
      out.push(
        <g
          key={'n-' + m}
          className="pse-node"
          role="button"
          tabIndex={0}
          aria-pressed={selected === m}
          aria-label={'Subset ' + label}
          onClick={() => pick(m)}
          onKeyDown={onNodeKeyDown(m)}
        >
          <rect
            x={p.x - layout.nodeW / 2}
            y={p.y - layout.nodeH / 2}
            width={layout.nodeW}
            height={layout.nodeH}
            rx="6"
            fill={c.fill}
            stroke={c.stroke}
            strokeWidth="1.2"
          />
          <text
            x={p.x}
            y={p.y + layout.fontSize * 0.35}
            textAnchor="middle"
            fontSize={layout.fontSize}
            fill={c.ink}
          >
            {label}
          </text>
        </g>
      );
    }
    return out;
  };

  const rootStyle = {
    '--pse-accent': accent,
    maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth
  };

  return (
    <div className={'pse-root ' + className} style={rootStyle}>

      {showIntro && intro && (
        typeof intro === 'string'
          ? <Content className="pse-intro" text={intro} />
          : <div className="pse-intro">{intro}</div>
      )}

      <div className="pse-grid">

        {/* ---------------- diagram + explanation ---------------- */}
        <div>
          <div className="pse-panel">
            <div className="pse-head">
              <h3>Subset lattice</h3>
              <span className="pse-readout">
                {n ? (<>|A| = <strong>{n}</strong>{'\u2003'}|P(A)| = 2^{n} = <strong>{total}</strong></>) : 'no elements'}
              </span>
            </div>

            <div className="pse-stage">
              {layout ? (
                <svg
                  ref={svgRef}
                  className="pse-svg"
                  viewBox={'0 0 ' + layout.width + ' ' + layout.height}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>{renderEdges()}</g>
                  <g>{renderNodes()}</g>
                </svg>
              ) : (
                <div style={{ padding: '48px 0', textAlign: 'center', color: theme.mutedInk, fontSize: 13 }}>
                  Nothing to draw yet.
                </div>
              )}
            </div>

            <div className="pse-body">
              <div className="pse-legend">
                <span><i className="pse-sw" style={{ background: accent, borderColor: accent }} />selected</span>
                <span><i className="pse-sw" style={{ background: theme.accentSoft, borderColor: accent }} />its subsets, below</span>
                <span><i className="pse-sw" style={{ background: theme.upSoft, borderColor: theme.up }} />its supersets, above</span>
              </div>
            </div>
          </div>

          {showExplanation && (
            <div className="pse-panel">
              <div className={'pse-exp' + (explanation.isError ? ' pse-state-bad' : '')}>
                {showExplanationId && <span className="pse-exp-tag">{explanation.id}</span>}
                <h4 className="pse-exp-title">{explanation.title}</h4>
                <Content className="pse-exp-body" text={explanation.body} />
                {explanation.note && <Content className="pse-exp-note" text={explanation.note} />}
              </div>
            </div>
          )}
        </div>

        {/* ---------------- controls ---------------- */}
        {showControls && (
          <div>
            <div className="pse-panel">
              <div className="pse-tabs" role="tablist">
                <button type="button" role="tab" aria-selected={tab === 'set'} onClick={() => setTab('set')}>
                  Set
                </button>
                {(showLevelTable || showRoster) && (
                  <button type="button" role="tab" aria-selected={tab === 'subsets'} onClick={() => setTab('subsets')}>
                    Subsets
                  </button>
                )}
                {showStyleTab && (
                  <button type="button" role="tab" aria-selected={tab === 'style'} onClick={() => setTab('style')}>
                    Style
                  </button>
                )}
              </div>

              {tab === 'set' && (
                <div className="pse-body">
                  <div className="pse-row">
                    <label htmlFor={'els' + uid}>Elements</label>
                    <input
                      id={'els' + uid}
                      type="text"
                      value={elementText}
                      spellCheck={false}
                      onChange={(e) => setElementText(e.target.value)}
                    />
                  </div>

                  <div className="pse-row">
                    <label>Size</label>
                    <div className="pse-seg" role="group" aria-label="Number of elements">
                      {Array.from({ length: maxElements }, (_, i) => i + 1).map((size) => (
                        <button
                          key={'size' + size}
                          type="button"
                          aria-pressed={n === size}
                          onClick={() => applySize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pse-row">
                    <label htmlFor={'empty' + uid}>Empty set</label>
                    <input
                      id={'empty' + uid}
                      type="checkbox"
                      checked={emptySymbol}
                      onChange={(e) => setEmptySymbol(e.target.checked)}
                    />
                    <span className="pse-hint" style={{ margin: 0 }}>
                      write as &#8709; rather than &#123; &#125;
                    </span>
                  </div>

                  <div className="pse-err">
                    {errorKind === 'duplicate' && 'Repeated element dropped \u2014 a set has no duplicates.'}
                    {errorKind === 'overflow' && 'Only the first ' + maxElements + ' elements are drawn.'}
                    {errorKind === 'empty' && 'Give at least one element.'}
                  </div>

                  {presets.length > 0 && (
                    <>
                      <div className="pse-row" style={{ flexWrap: 'wrap', gap: 5 }}>
                        {presets.map((p) => (
                          <button
                            key={p.value}
                            type="button"
                            className="pse-seg"
                            style={{
                              fontFamily: 'inherit',
                              fontSize: 12.5,
                              padding: '5px 10px',
                              borderRadius: 6,
                              cursor: 'pointer',
                              background: '#ffffff',
                              color: 'inherit'
                            }}
                            onClick={() => { setElementText(p.value); setSelected(null); }}
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                      <p className="pse-hint">
                        Elements are separated by commas or spaces. Repeats are dropped, because a
                        set has no duplicates, and order never matters.
                      </p>
                    </>
                  )}
                </div>
              )}

              {tab === 'subsets' && (
                <div className="pse-body">
                  {showLevelTable && n > 0 && (
                    <table className="pse-table">
                      <thead>
                        <tr><th>Size</th><th>Count</th><th /></tr>
                      </thead>
                      <tbody>
                        {levelCounts.map((count, i) => {
                          const widest = Math.max.apply(null, levelCounts);
                          return (
                            <tr key={'lvl' + i}>
                              <td className="pse-m">C({n}, {i})</td>
                              <td><strong>{count}</strong></td>
                              <td>
                                <div
                                  className="pse-bar"
                                  style={{ width: Math.max(6, Math.round((100 * count) / widest)) + '%' }}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr><td>Total</td><td colSpan={2}>{total} = 2^{n}</td></tr>
                      </tfoot>
                    </table>
                  )}

                  {showRoster && n > 0 && (
                    <>
                      <div className="pse-head" style={{ padding: '14px 0 8px', background: 'transparent' }}>
                        <h3>Roster form</h3>
                      </div>
                      <div className="pse-roster">
                        {'{ '}
                        {Array.from({ length: total }, (_, m) => {
                          const rel = relation(m);
                          const style =
                            rel === 'self' ? { background: accent, color: '#ffffff' } :
                            rel === 'down' ? { background: theme.accentSoft, color: accent } :
                            rel === 'up' ? { background: theme.upSoft, color: theme.up } :
                            undefined;
                          return (
                            <React.Fragment key={'r' + m}>
                              <button type="button" style={style} onClick={() => pick(m)}>
                                {subsetLabel(m, elements, emptySymbol)}
                              </button>
                              {m < total - 1 ? ', ' : ''}
                            </React.Fragment>
                          );
                        })}
                        {' }'}
                      </div>
                    </>
                  )}
                </div>
              )}

              {tab === 'style' && showStyleTab && (
                <div className="pse-body">
                  <div className="pse-row">
                    <label htmlFor={'accent' + uid}>Highlight</label>
                    <input
                      id={'accent' + uid}
                      type="color"
                      value={accent}
                      onChange={(e) => setAccent(e.target.value)}
                    />
                  </div>
                  <div className="pse-row">
                    <label htmlFor={'gap' + uid}>Level gap</label>
                    <input
                      id={'gap' + uid}
                      type="range"
                      min="52"
                      max="120"
                      value={levelGap || (n >= 5 ? 62 : 76)}
                      onChange={(e) => setLevelGap(Number(e.target.value))}
                    />
                    <output>{levelGap || (n >= 5 ? 62 : 76)}</output>
                  </div>
                  <div className="pse-row">
                    <label htmlFor={'fade' + uid}>Fade edges</label>
                    <input
                      id={'fade' + uid}
                      type="checkbox"
                      checked={showEdgeFade}
                      onChange={(e) => setShowEdgeFade(e.target.checked)}
                    />
                    <span className="pse-hint" style={{ margin: 0 }}>
                      dim the lines outside the selected cones
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default PowerSetExplorer;