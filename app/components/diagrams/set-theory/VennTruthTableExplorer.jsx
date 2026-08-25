'use client';

// ============================================================================
// VENN / TRUTH TABLE BRIDGE
// ----------------------------------------------------------------------------
// One expression, shown twice: as shaded regions of a Venn diagram, and as a
// truth table. The two are the same object. A region is a membership mask over
// the sets; a truth table row is an assignment of true and false to the same
// sets. Selecting either highlights the other.
//
// The parser is imported rather than duplicated: VennGenerator already
// tokenizes, parses and evaluates set expressions, and the region signature it
// computes IS the result column of the truth table.
//
// IMPORTANT: two import paths below must match your project.
//   - processContent
//   - the parser re-exported by VennGenerator
// If either is wrong the whole module fails to load and the component becomes
// undefined in its consumers.
// ============================================================================

import React, { useState, useMemo, useEffect, useCallback, useRef, useId } from 'react';
import { processContent } from '../../../utils/contentProcessor';
import {
  SET_NAMES,
  parseExpression,
  evalNode,
  buildRegionTable
} from '../venn-generator/VennGenerator';

// ============================================================================
// SECTION 1 - TRANSLATION
// Set notation and logic notation are the same expression in two alphabets.
// ============================================================================

export const CONNECTIVE_MAP = [
  ['\u2229', '\u2227', 'intersection', 'conjunction'],
  ['\u222a', '\u2228', 'union', 'disjunction'],
  ['\u2295', '\u22bb', 'symmetric difference', 'exclusive or'],
  ['\u2205', '\u22a5', 'empty set', 'falsity'],
  ['U', '\u22a4', 'universe', 'truth']
];

export function toLogicNotation(src) {
  let out = String(src || '');
  // Difference first: A \ B is A and not B, and the rewrite introduces a not.
  out = out.replace(/\s*[\\\u2216\u2212-]\s*/g, ' \u2227 \u00ac');
  out = out.replace(/\u2229|&/g, '\u2227');
  out = out.replace(/\u222a|\|/g, '\u2228');
  out = out.replace(/\u2295|\u0394|\u25b3/g, '\u22bb');
  out = out.replace(/\u2205/g, '\u22a5');
  out = out.replace(/\bU\b/g, '\u22a4');
  // Postfix complement becomes prefix negation on the atom it follows.
  out = out.replace(/([A-Z])\s*(?:\u1d9c|'|\u2032|\*|\^c)/g, '\u00ac$1');
  out = out.replace(/\)\s*(?:\u1d9c|'|\u2032|\*|\^c)/g, ')\u2032');
  out = out.replace(/~|!/g, '\u00ac');
  return out.replace(/\s+/g, ' ').trim();
}

// Forms worth naming when an expression turns out to be one of them.
export const NAMED_FORMS = [
  { expr: 'A \u2229 B', logic: 'A \u2227 B', name: 'conjunction', gloss: 'AND' },
  { expr: 'A \u222a B', logic: 'A \u2228 B', name: 'disjunction', gloss: 'OR' },
  { expr: 'A \u2295 B', logic: 'A \u22bb B', name: 'exclusive or', gloss: 'XOR' },
  { expr: '(A \u2229 B)\u1d9c', logic: '\u00ac(A \u2227 B)', name: 'the Sheffer stroke', gloss: 'NAND' },
  { expr: '(A \u222a B)\u1d9c', logic: '\u00ac(A \u2228 B)', name: 'the Peirce arrow', gloss: 'NOR' },
  { expr: 'A\u1d9c \u222a B', logic: 'A \u2192 B', name: 'material implication', gloss: 'IF A THEN B' },
  { expr: '(A \u2295 B)\u1d9c', logic: 'A \u2194 B', name: 'the biconditional', gloss: 'IF AND ONLY IF' },
  { expr: 'A \\ B', logic: 'A \u2227 \u00acB', name: 'non-implication', gloss: 'A BUT NOT B' }
];

// ============================================================================
// SECTION 2 - EVALUATION
// ============================================================================

export function evaluateExpression(src, sets, regionTable) {
  const trimmed = String(src || '').trim();
  if (!trimmed) {
    return { selected: new Set(), signature: '', error: '', errorKind: '' };
  }
  try {
    const tree = parseExpression(trimmed);
    const names = new Set();
    (function walk(node) {
      if (!node) return;
      if (node.op === 'set') names.add(node.name);
      if (node.a) walk(node.a);
      if (node.b) walk(node.b);
    })(tree);

    const unknown = Array.from(names).filter((x) => sets.indexOf(x) === -1);
    if (unknown.length) {
      return {
        selected: new Set(),
        signature: '',
        error: 'Unknown set \u201c' + unknown[0] + '\u201d',
        errorKind: 'unknown'
      };
    }

    const selected = new Set();
    regionTable.forEach((r) => { if (evalNode(tree, r.vars)) selected.add(r.mask); });
    const signature = regionTable.map((r) => (selected.has(r.mask) ? '1' : '0')).join('');
    return { selected, signature, error: '', errorKind: '', usedSets: Array.from(names) };
  } catch (e) {
    return { selected: new Set(), signature: '', error: e.message, errorKind: 'syntax' };
  }
}

// A set the expression does not actually depend on: flipping membership in it
// never changes the answer.
export function irrelevantSets(sets, regionTable, selected) {
  const out = [];
  sets.forEach((s, i) => {
    const bit = 1 << i;
    const matters = regionTable.some((r) => {
      const flipped = r.mask ^ bit;
      return selected.has(r.mask) !== selected.has(flipped);
    });
    if (!matters) out.push(s);
  });
  return out;
}

export function namedFormFor(signature, sets, regionTable) {
  if (sets.length !== 2 || !signature) return null;
  for (let i = 0; i < NAMED_FORMS.length; i++) {
    const form = NAMED_FORMS[i];
    const res = evaluateExpression(form.expr, sets, regionTable);
    if (res.signature === signature) return form;
  }
  return null;
}

// ============================================================================
// SECTION 3 - GEOMETRY
// ============================================================================

export const GEOMETRY = {
  2: {
    width: 440, height: 290, radius: 92,
    sets: ['A', 'B'],
    centres: { A: [178, 145], B: [262, 145] },
    labelOffset: { A: [-104, -70], B: [104, -70] }
  },
  3: {
    width: 440, height: 380, radius: 88,
    sets: ['A', 'B', 'C'],
    centres: { A: [220, 136], B: [176, 212], C: [264, 212] },
    labelOffset: { A: [0, -104], B: [-80, 78], C: [80, 78] }
  }
};

function circlePath(cx, cy, r) {
  return 'M ' + (cx - r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx + r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx - r) + ' ' + cy + ' Z';
}

function outsidePath(geo, cx, cy, r) {
  return 'M 0 0 L ' + geo.width + ' 0 L ' + geo.width + ' ' + geo.height + ' L 0 ' + geo.height + ' Z ' +
    circlePath(cx, cy, r);
}

// ============================================================================
// SECTION 4 - EXPLANATIONS
// A resolver picks an id from the current state. The id is looked up in the
// `explanations` prop first, then in these defaults, so a caller can override
// one entry without restating the rest. A title or body may be a string or a
// function of the context object. Strings are written for processContent.
// ============================================================================

export const DEFAULT_EXPLANATIONS = {

  'empty': {
    title: 'Two views of the same expression',
    body: 'Type a set expression and it appears twice: shaded regions on the left, a truth table on the right.\n\nThey are not two illustrations of one idea, they are the same object written in two alphabets. A **region** of the diagram is a decision about each set \u2014 in or out. A **row** of the truth table is a decision about each set \u2014 true or false. There are $2^n$ of each, and they are the same $2^n$ decisions.\n\nStart with $A \\cap B$ and watch which row lights up.'
  },

  'error': {
    title: 'That expression will not parse',
    body: (ctx) => 'The reader stopped at: **' + ctx.error + '**\n\nCheck the parentheses first \u2014 an unclosed bracket accounts for most of these. Operators need something on both sides, and the complement mark goes after what it negates.'
  },

  'unknown-set': {
    title: (ctx) => 'No set called that on this diagram',
    body: (ctx) => 'The expression names a set that is not drawn. Right now the diagram holds ' + ctx.setList + '.\n\nSwitch to three sets, or use only the letters available.'
  },

  'tautology': {
    title: 'True in every row',
    body: (ctx) => 'Every region is shaded and every row of the table reads true, so the result column is all $1$s.\n\nIn set terms this expression equals the universe $U$, no matter what the sets contain. In logic terms it is a **tautology** \u2014 true under every assignment. $A \\cup A^c$ is the standard example, and it is the law of the excluded middle wearing set notation.\n\nThe two statements are the same statement. That is the point of putting the diagram and the table side by side.'
  },

  'contradiction': {
    title: 'True in no row',
    body: (ctx) => 'Nothing is shaded and every row reads false, so the result column is all $0$s.\n\nIn set terms the expression equals the empty set $\\varnothing$ regardless of what the sets contain. In logic terms it is a **contradiction** \u2014 false under every assignment. $A \\cap A^c$ is the standard example.\n\nNote the pairing: the universe and the empty set correspond to the tautology and the contradiction, and complementing one gives the other.'
  },

  'named': {
    title: (ctx) => 'This is ' + ctx.formName,
    body: (ctx) => 'The result column is $' + ctx.signature + '$, which is exactly the column for **' + ctx.formGloss + '**.\n\nWritten as sets it is $' + ctx.formExpr + '$. Written as logic it is $' + ctx.formLogic + '$. Same column, same regions, two notations.\n\nThat correspondence is not a coincidence or an analogy. Intersection is conjunction, union is disjunction, complement is negation \u2014 and every set identity you can prove is a logical equivalence you have already proved, and the other way round.'
  },

  'independent': {
    title: (ctx) => 'The answer does not depend on ' + ctx.irrelevantList,
    body: (ctx) => 'Flip membership in $' + ctx.irrelevant[0] + '$ and nothing changes: every row keeps its value, and the shading is symmetric across that circle\u2019s boundary.\n\nThe expression mentions ' + (ctx.mentionsIrrelevant ? 'that set, but only in a position where it cancels' : 'other sets only') + '. $A \\cap (A \\cup B)$ is the classic case \u2014 it simplifies to $A$, so $B$ is along for the ride.\n\nA column that can be deleted without changing the answer is the signal that the expression can be simplified.'
  },

  'general': {
    title: (ctx) => ctx.count + ' of ' + ctx.total + ' regions, ' + ctx.count + ' of ' + ctx.total + ' rows',
    body: (ctx) => 'The result column reads $' + ctx.signature + '$, and the same $' + ctx.count + '$ regions are shaded on the left.\n\nRead one row to see the correspondence directly: each row fixes whether a point is inside or outside every set, which is exactly what picking a region does. The shaded regions are the true rows.\n\nWritten as logic the expression is $' + ctx.logicForm + '$.'
  },

  'row-selected': {
    title: (ctx) => 'Region ' + ctx.rowLabel,
    body: (ctx) => 'This row fixes ' + ctx.rowAssignment + ', which picks out one region of the diagram \u2014 highlighted on the left.\n\nThe expression is **' + (ctx.rowValue ? 'true' : 'false') + '** here, so that region is ' + (ctx.rowValue ? 'shaded' : 'left blank') + '.\n\nEvery point of the universe lies in exactly one region, so every point is described by exactly one row. That is why the table has no gaps and no overlaps.'
  }
};

export const DEFAULT_NOTES = {
  'general': (ctx) =>
    ctx.n === 2
      ? 'With two sets there are $2^2 = 4$ regions and $2^4 = 16$ possible result columns \u2014 so sixteen distinct expressions up to equivalence, which is exactly the number of binary logical connectives.'
      : 'With three sets there are $2^3 = 8$ rows, so $2^8 = 256$ distinct columns. Two expressions are equal precisely when their columns match, which is what makes checking an identity a finite job.',
  'named': 'Set notation and logic notation developed separately and still look nothing alike. They describe the same algebra \u2014 a Boolean algebra \u2014 and either one can be translated into the other mechanically.'
};

function resolveExplanationId(ctx) {
  if (ctx.errorKind === 'unknown') return 'unknown-set';
  if (ctx.errorKind === 'syntax') return 'error';
  if (!ctx.expression) return 'empty';
  if (ctx.selectedRow !== null) return 'row-selected';
  if (ctx.count === ctx.total) return 'tautology';
  if (ctx.count === 0) return 'contradiction';
  if (ctx.formName) return 'named';
  if (ctx.irrelevant.length) return 'independent';
  return 'general';
}

// ============================================================================
// SECTION 5 - STYLES
// Bump the version in CSS_ID whenever a rule below changes. Injection under a
// previously used id is skipped, so an unversioned edit silently does nothing.
// ============================================================================

const CSS_ID = 'venn-truth-table-styles-v1';

const CSS = `
.vtt-root {
  --vtt-ink: #131720;
  --vtt-ink-soft: #5a6472;
  --vtt-rule: #c2ccd8;
  --vtt-rule-soft: #e3e9ef;
  --vtt-hair: rgba(19, 23, 32, 0.06);
  --vtt-panel: #f6f7f9;
  --vtt-head: #eef0f4;
  --vtt-paper: #ffffff;
  --vtt-true: #0e7c66;
  --vtt-false: #a3adb9;
  --vtt-math: "Cambria Math", "Latin Modern Math", Georgia, "Times New Roman", serif;
  --vtt-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  color: var(--vtt-ink);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.45;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.vtt-root *, .vtt-root *::before, .vtt-root *::after { box-sizing: border-box; }
.vtt-intro { margin: 0 0 20px; max-width: 70ch; font-size: 15.5px; line-height: 1.65; color: var(--vtt-ink-soft); }
.vtt-intro > p { margin: 0 0 10px; }
.vtt-intro > p:last-child { margin-bottom: 0; }
.vtt-intro strong { color: var(--vtt-ink); font-weight: 600; }
.vtt-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(320px, 1fr); gap: 16px; align-items: start; }
@media (max-width: 920px) { .vtt-grid { grid-template-columns: 1fr; } }
.vtt-panel { border: 1px solid var(--vtt-rule-soft); border-radius: 10px; background: var(--vtt-panel); overflow: hidden; }
.vtt-panel + .vtt-panel { margin-top: 14px; }
.vtt-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 16px; background: var(--vtt-head); }
.vtt-head h3 { margin: 0; font-size: 10.5px; font-weight: 600; letter-spacing: 0.11em; text-transform: uppercase; color: var(--vtt-ink-soft); }
.vtt-body { padding: 14px 16px; }
.vtt-readout { font-family: var(--vtt-mono); font-size: 11.5px; color: var(--vtt-ink-soft); word-break: break-all; }
.vtt-readout strong { color: var(--vtt-ink); font-weight: 600; }
.vtt-stage { padding: 6px; background: var(--vtt-paper); border-bottom: 1px solid var(--vtt-rule-soft); }
.vtt-svg { width: 100%; height: auto; display: block; max-width: 480px; margin: 0 auto; }
.vtt-region { cursor: pointer; }
.vtt-exprline { display: flex; gap: 8px; }
.vtt-expr {
  flex: 1; min-width: 0; font-family: var(--vtt-math); font-size: 19px;
  padding: 8px 12px; border: 1px solid var(--vtt-rule); border-radius: 6px;
  background: var(--vtt-paper); color: var(--vtt-ink);
}
.vtt-expr:focus { outline: 2px solid var(--vtt-accent); outline-offset: -1px; border-color: var(--vtt-accent); }
.vtt-expr.vtt-bad { border-color: #c0392b; background: #fff6f5; }
.vtt-pal { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }
.vtt-pal button {
  font-family: var(--vtt-math); font-size: 16px; line-height: 1; min-width: 34px;
  padding: 7px 8px; border: 1px solid var(--vtt-rule); border-radius: 5px;
  background: var(--vtt-paper); color: var(--vtt-ink); cursor: pointer;
}
.vtt-pal button:hover { background: var(--vtt-accent-soft); border-color: var(--vtt-accent); }
.vtt-pal-gap { width: 8px; min-width: 8px; }
.vtt-err { color: #c0392b; font-size: 12px; margin-top: 7px; min-height: 16px; font-family: var(--vtt-mono); }
.vtt-forms { display: grid; grid-template-columns: 64px 1fr; gap: 6px 12px; align-items: baseline; margin-top: 12px; }
.vtt-forms dt { font-size: 10.5px; font-weight: 600; letter-spacing: 0.09em; text-transform: uppercase; color: var(--vtt-ink-soft); }
.vtt-forms dd { margin: 0; font-family: var(--vtt-math); font-size: 18px; color: var(--vtt-ink); }
.vtt-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.vtt-table th, .vtt-table td { padding: 6px 8px; border-bottom: 1px solid var(--vtt-hair); text-align: center; }
.vtt-table th {
  font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
  font-weight: 600; color: var(--vtt-ink-soft); background: var(--vtt-head);
}
.vtt-table th.vtt-result, .vtt-table td.vtt-result { border-left: 2px solid var(--vtt-rule); }
.vtt-table th:first-child, .vtt-table td:first-child { text-align: left; font-family: var(--vtt-math); font-size: 14px; }
.vtt-table th.vtt-setcol { font-family: var(--vtt-math); font-size: 15px; text-transform: none; letter-spacing: 0; font-style: italic; color: var(--vtt-ink); }
.vtt-table tbody tr { cursor: pointer; }
.vtt-table tbody tr:hover { background: var(--vtt-accent-soft); }
.vtt-table tbody tr.vtt-on td { background: var(--vtt-accent-soft); }
.vtt-table tbody tr.vtt-sel td { background: var(--vtt-accent); color: #ffffff; }
.vtt-table tbody tr.vtt-sel td.vtt-t { color: #ffffff; }
.vtt-table .vtt-t { color: var(--vtt-true); font-weight: 700; font-family: var(--vtt-mono); }
.vtt-table .vtt-f { color: var(--vtt-false); font-family: var(--vtt-mono); }
.vtt-seg { display: flex; border: 1px solid var(--vtt-rule); border-radius: 6px; overflow: hidden; }
.vtt-seg button { font: inherit; font-size: 12.5px; border: 0; background: var(--vtt-paper); color: var(--vtt-ink-soft); padding: 6px 12px; cursor: pointer; border-right: 1px solid var(--vtt-rule-soft); white-space: nowrap; }
.vtt-seg button:last-child { border-right: 0; }
.vtt-seg button[aria-pressed="true"] { background: var(--vtt-accent); color: #ffffff; }
.vtt-presets { display: flex; flex-wrap: wrap; gap: 5px; }
.vtt-presets button {
  font-family: var(--vtt-math); font-size: 14px; padding: 5px 9px;
  border: 1px solid var(--vtt-rule-soft); border-radius: 5px;
  background: var(--vtt-paper); color: var(--vtt-ink); cursor: pointer;
}
.vtt-presets button:hover { background: var(--vtt-accent-soft); border-color: var(--vtt-accent); }
.vtt-key { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 6px; margin-top: 12px; }
.vtt-key div { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--vtt-ink-soft); background: var(--vtt-paper); border: 1px solid var(--vtt-rule-soft); border-radius: 6px; padding: 6px 9px; }
.vtt-key b { font-family: var(--vtt-math); font-size: 16px; color: var(--vtt-ink); font-weight: 400; }
.vtt-hint { font-size: 11.5px; line-height: 1.55; color: var(--vtt-ink-soft); margin: 8px 0 0; }
.vtt-exp { padding: 18px 20px 20px; }
.vtt-exp-tag { display: inline-block; font-family: var(--vtt-mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--vtt-ink-soft); border: 1px solid var(--vtt-rule-soft); border-radius: 4px; padding: 2px 7px; }
.vtt-exp-title { margin: 10px 0 10px; font-size: 16px; font-weight: 600; letter-spacing: -0.005em; line-height: 1.3; }
.vtt-exp.vtt-state-bad .vtt-exp-title { color: #c0392b; }
.vtt-exp-body { font-size: 14px; line-height: 1.65; }
.vtt-exp-body > p { margin: 0 0 12px; }
.vtt-exp-body > p:last-child { margin-bottom: 0; }
.vtt-exp-body a { color: var(--vtt-accent); }
.vtt-exp-note { margin-top: 16px; padding: 12px 0 12px 14px; border-left: 2px solid var(--vtt-rule); color: var(--vtt-ink-soft); font-size: 13px; line-height: 1.6; }
.vtt-exp-note > p { margin: 0 0 10px; }
.vtt-exp-note > p:last-child { margin-bottom: 0; }`;

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
// SECTION 6 - CONTENT
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
// SECTION 7 - DEFAULT DATA
// ============================================================================

const PALETTE_OPS = ['gap', '\u2229', '\u222a', '\\', '\u2295', '\u1d9c', 'gap', '(', ')', '\u2205', 'U'];
const SPACED_OPS = '\u2229\u222a\\\u2295';

const DEFAULT_THEME = {
  accent: '#2f4fd8',
  accentSoft: '#eaeeff',
  fill: '#2f4fd8',
  opacity: 0.8,
  neutral: '#ffffff',
  stroke: '#1e293b',
  strokeWidth: 1.4,
  labelColor: '#1e293b'
};

const DEFAULT_PRESETS = {
  2: ['A \u2229 B', 'A \u222a B', 'A \u2295 B', 'A\u1d9c \u222a B', '(A \u2229 B)\u1d9c', 'A \u222a A\u1d9c', 'A \u2229 A\u1d9c'],
  3: ['A \u2229 (B \u222a C)', '(A \u2229 B) \u222a (A \u2229 C)', '(A \u222a B \u222a C)\u1d9c', 'A \u2295 B \u2295 C']
};

const DEFAULT_INTRO =
  'One expression, shown twice. The shaded regions on the left and the true rows on the ' +
  'right are the same thing: a region fixes whether a point is inside or outside each set, ' +
  'and a row fixes true or false for each set. Click a row or a region and the other lights up.';

const MATH_FONT = "'Cambria Math','Latin Modern Math',Georgia,serif";

// ============================================================================
// SECTION 8 - COMPONENT
// ============================================================================

export const VennTruthTableExplorer = (props) => {
  const {
    initialSetCount = 2,
    initialExpression = 'A \u2229 B',
    intro = DEFAULT_INTRO,
    showIntro = true,
    maxWidth = 1200,
    theme: themeProp = null,
    explanations: explanationsProp = null,
    notes: notesProp = null,
    presets: presetsProp = null,
    showExplanation = true,
    showExplanationId = false,
    showSetCount = true,
    showPalette = true,
    showPresets = true,
    showLogicForm = true,
    showConnectiveKey = true,
    trueSymbol = 'T',
    falseSymbol = 'F',
    onChange = null,
    className = ''
  } = props;

  useInjectedStyles();

  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '');
  const exprRef = useRef(null);

  const theme = useMemo(() => ({ ...DEFAULT_THEME, ...(themeProp || {}) }), [themeProp]);
  const presets = presetsProp || DEFAULT_PRESETS;

  const [setCount, setSetCount] = useState(initialSetCount === 3 ? 3 : 2);
  const [expression, setExpression] = useState(initialExpression);
  const [selectedRow, setSelectedRow] = useState(null);

  const sets = useMemo(() => SET_NAMES.slice(0, setCount), [setCount]);
  const regionTable = useMemo(() => buildRegionTable(sets), [sets]);
  const geo = GEOMETRY[setCount];

  const evaluation = useMemo(
    () => evaluateExpression(expression, sets, regionTable),
    [expression, sets, regionTable]
  );

  // Rows run from all-true down to all-false, the usual truth-table order.
  const rows = useMemo(
    () => regionTable.slice().sort((a, b) => b.mask - a.mask),
    [regionTable]
  );

  const irrelevant = useMemo(() => {
    if (evaluation.error || !String(expression || '').trim()) return [];
    return irrelevantSets(sets, regionTable, evaluation.selected);
  }, [evaluation, sets, regionTable, expression]);

  const namedForm = useMemo(
    () => namedFormFor(evaluation.signature, sets, regionTable),
    [evaluation.signature, sets, regionTable]
  );

  const logicForm = useMemo(() => toLogicNotation(expression), [expression]);

  // A row index from one set count is meaningless at another.
  useEffect(() => { setSelectedRow(null); }, [setCount]);

  // --- serializer -----------------------------------------------------------
  const config = useMemo(() => ({
    sets,
    expression: String(expression || '').trim(),
    logicForm,
    signature: evaluation.signature,
    highlight: regionTable.filter((r) => evaluation.selected.has(r.mask)).map((r) => r.key),
    namedForm: namedForm ? namedForm.name : null,
    irrelevant
  }), [sets, expression, logicForm, evaluation, regionTable, namedForm, irrelevant]);

  const onChangeRef = useRef(onChange);
  useEffect(() => { onChangeRef.current = onChange; }, [onChange]);
  useEffect(() => { if (onChangeRef.current) onChangeRef.current(config); }, [config]);

  // --- explanation ----------------------------------------------------------
  const explanation = useMemo(() => {
    const row = selectedRow === null ? null : regionTable.find((r) => r.mask === selectedRow);

    const ctx = {
      expression: String(expression || '').trim(),
      logicForm,
      sets,
      setList: sets.join(', '),
      n: setCount,
      total: regionTable.length,
      count: evaluation.selected.size,
      signature: evaluation.signature,
      error: evaluation.error,
      errorKind: evaluation.errorKind,
      irrelevant,
      irrelevantList: irrelevant.join(' or '),
      mentionsIrrelevant: irrelevant.some((s) => String(expression).indexOf(s) > -1),
      formName: namedForm ? namedForm.name : null,
      formGloss: namedForm ? namedForm.gloss : null,
      formExpr: namedForm ? namedForm.expr : null,
      formLogic: namedForm ? namedForm.logic : null,
      selectedRow,
      rowLabel: row ? row.label : '',
      rowValue: row ? evaluation.selected.has(row.mask) : false,
      rowAssignment: row
        ? sets.map((s) => s + ' ' + (row.vars[s] ? 'true' : 'false')).join(', ')
        : '',
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
      isError: Boolean(evaluation.error)
    };
  }, [selectedRow, regionTable, expression, logicForm, sets, setCount, evaluation,
    irrelevant, namedForm, explanationsProp, notesProp]);

  // --- handlers -------------------------------------------------------------
  const insertSymbol = useCallback((sym) => {
    const input = exprRef.current;
    if (!input) { setExpression((p) => p + sym); return; }
    const start = input.selectionStart == null ? input.value.length : input.selectionStart;
    const end = input.selectionEnd == null ? input.value.length : input.selectionEnd;
    const padded = SPACED_OPS.indexOf(sym) > -1 ? ' ' + sym + ' ' : sym;
    setExpression(input.value.slice(0, start) + padded + input.value.slice(end));
    window.requestAnimationFrame(() => {
      input.focus();
      const pos = start + padded.length;
      input.setSelectionRange(pos, pos);
    });
  }, []);

  const pickRow = useCallback((mask) => {
    setSelectedRow((prev) => (prev === mask ? null : mask));
  }, []);

  // --- render helpers -------------------------------------------------------
  const renderRegions = () => {
    return regionTable.map((r) => {
      const on = evaluation.selected.has(r.mask);
      const isSel = selectedRow === r.mask;
      let node = (
        <rect
          x="0"
          y="0"
          width={geo.width}
          height={geo.height}
          fill={on ? theme.fill : theme.neutral}
          opacity={on ? theme.opacity : 1}
        />
      );
      for (let i = sets.length - 1; i >= 0; i--) {
        const clip = ((r.mask & (1 << i)) ? 'in' : 'out') + sets[i] + uid;
        node = <g clipPath={'url(#' + clip + ')'}>{node}</g>;
      }
      let ring = null;
      if (isSel) {
        let outline = (
          <rect
            x="0"
            y="0"
            width={geo.width}
            height={geo.height}
            fill="none"
            stroke={theme.accent}
            strokeWidth="7"
            strokeDasharray="6 4"
          />
        );
        for (let i = sets.length - 1; i >= 0; i--) {
          const clip = ((r.mask & (1 << i)) ? 'in' : 'out') + sets[i] + uid;
          outline = <g clipPath={'url(#' + clip + ')'}>{outline}</g>;
        }
        ring = outline;
      }
      return (
        <g
          key={'region-' + r.mask}
          className="vtt-region"
          onClick={() => pickRow(r.mask)}
          role="button"
          aria-label={'Region ' + r.label}
        >
          {node}
          {ring}
        </g>
      );
    });
  };

  const rootStyle = {
    '--vtt-accent': theme.accent,
    '--vtt-accent-soft': theme.accentSoft,
    maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth
  };

  return (
    <div className={'vtt-root ' + className} style={rootStyle}>

      {showIntro && intro && (
        typeof intro === 'string'
          ? <Content className="vtt-intro" text={intro} />
          : <div className="vtt-intro">{intro}</div>
      )}

      {/* ---------------- expression ---------------- */}
      <div className="vtt-panel">
        <div className="vtt-head">
          <h3>Expression</h3>
          <span className="vtt-readout">
            {evaluation.error ? '' : (<><strong>{evaluation.selected.size}</strong>{'/' + regionTable.length}</>)}
          </span>
        </div>
        <div className="vtt-body">
          {showSetCount && (
            <div className="vtt-seg" style={{ marginBottom: 12 }} role="group" aria-label="Number of sets">
              {[2, 3].map((count) => (
                <button
                  key={'n' + count}
                  type="button"
                  aria-pressed={setCount === count}
                  onClick={() => setSetCount(count)}
                >
                  {count} sets
                </button>
              ))}
            </div>
          )}

          <div className="vtt-exprline">
            <input
              ref={exprRef}
              value={expression}
              spellCheck={false}
              className={'vtt-expr' + (evaluation.error ? ' vtt-bad' : '')}
              aria-label="Set expression"
              onChange={(e) => { setExpression(e.target.value); setSelectedRow(null); }}
            />
          </div>

          {showPalette && (
            <div className="vtt-pal">
              {sets.concat(PALETTE_OPS).map((sym, i) => (
                sym === 'gap'
                  ? <span key={'gap' + i} className="vtt-pal-gap" />
                  : <button key={'sym' + i} type="button" onClick={() => insertSymbol(sym)}>{sym}</button>
              ))}
            </div>
          )}

          <div className="vtt-err">{evaluation.error}</div>

          {showLogicForm && !evaluation.error && String(expression || '').trim() && (
            <dl className="vtt-forms">
              <dt>As sets</dt>
              <dd>{String(expression).trim()}</dd>
              <dt>As logic</dt>
              <dd>{logicForm}</dd>
            </dl>
          )}

          {showPresets && (
            <div className="vtt-presets" style={{ marginTop: 14 }}>
              {(presets[setCount] || DEFAULT_PRESETS[setCount]).map((p) => (
                <button key={p} type="button" onClick={() => { setExpression(p); setSelectedRow(null); }}>
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="vtt-grid" style={{ marginTop: 14 }}>

        {/* ---------------- diagram ---------------- */}
        <div>
          <div className="vtt-panel">
            <div className="vtt-head">
              <h3>Regions</h3>
              <span className="vtt-readout">{evaluation.signature}</span>
            </div>
            <div className="vtt-stage">
              <svg
                className="vtt-svg"
                viewBox={'0 0 ' + geo.width + ' ' + geo.height}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {sets.map((s) => {
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

                {sets.map((s) => {
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
                      pointerEvents="none"
                    />
                  );
                })}

                {sets.map((s) => {
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
                      pointerEvents="none"
                    >
                      {s}
                    </text>
                  );
                })}
              </svg>
            </div>
            <div className="vtt-body">
              <p className="vtt-hint" style={{ margin: 0 }}>
                Click a region to select the row that describes it.
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- truth table ---------------- */}
        <div>
          <div className="vtt-panel">
            <div className="vtt-head">
              <h3>Truth table</h3>
              <span className="vtt-readout">{rows.length} rows</span>
            </div>
            <div className="vtt-body">
              <table className="vtt-table">
                <thead>
                  <tr>
                    <th>Region</th>
                    {sets.map((s) => <th key={s} className="vtt-setcol">{s}</th>)}
                    <th className="vtt-result">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => {
                    const on = evaluation.selected.has(r.mask);
                    const isSel = selectedRow === r.mask;
                    return (
                      <tr
                        key={'row-' + r.mask}
                        className={isSel ? 'vtt-sel' : (on ? 'vtt-on' : '')}
                        onClick={() => pickRow(r.mask)}
                      >
                        <td>{r.label}</td>
                        {sets.map((s) => (
                          <td key={s} className={r.vars[s] ? 'vtt-t' : 'vtt-f'}>
                            {r.vars[s] ? trueSymbol : falseSymbol}
                          </td>
                        ))}
                        <td className={'vtt-result ' + (on ? 'vtt-t' : 'vtt-f')}>
                          {on ? trueSymbol : falseSymbol}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {showConnectiveKey && (
                <div className="vtt-key">
                  {CONNECTIVE_MAP.map((pair) => (
                    <div key={pair[0]}>
                      <b>{pair[0]}</b>
                      <span>=</span>
                      <b>{pair[1]}</b>
                      <span style={{ marginLeft: 'auto' }}>{pair[3]}</span>
                    </div>
                  ))}
                  <div>
                    <b>{'\u1d9c'}</b>
                    <span>=</span>
                    <b>{'\u00ac'}</b>
                    <span style={{ marginLeft: 'auto' }}>negation</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      {showExplanation && (
        <div className="vtt-panel" style={{ marginTop: 14 }}>
          <div className={'vtt-exp' + (explanation.isError ? ' vtt-state-bad' : '')}>
            {showExplanationId && <span className="vtt-exp-tag">{explanation.id}</span>}
            <h4 className="vtt-exp-title">{explanation.title}</h4>
            <Content className="vtt-exp-body" text={explanation.body} />
            {explanation.note && <Content className="vtt-exp-note" text={explanation.note} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default VennTruthTableExplorer;