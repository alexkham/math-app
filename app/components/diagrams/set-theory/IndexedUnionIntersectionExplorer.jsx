'use client';

// ============================================================================
// INDEXED UNION AND INTERSECTION EXPLORER
// ----------------------------------------------------------------------------
// The big operators over an indexed family of sets. Both are accumulated one
// index at a time, so their monotonicity is visible rather than asserted: the
// union can only grow, the intersection can only shrink.
//
// Two renderers share one component. A family declares kind 'interval' and is
// drawn on a number line, or kind 'discrete' and is drawn as membership rows.
// Adding a family to the table is the only way to extend what can be shown.
//
// The interval engine in Section 1 is self-contained and has no dependency on
// the rest of the file. If an interval-operations tool is ever built it should
// import from here rather than carry a second copy.
//
// IMPORTANT: fix the processContent import path below to match your project.
// If the path is wrong the whole module fails to load and the component
// becomes undefined in its consumers.
// ============================================================================

import React, { useState, useMemo, useEffect, useCallback, useRef, useId } from 'react';
import { processContent } from '../../../utils/contentProcessor';

// ============================================================================
// SECTION 1 - INTERVAL ENGINE
// A set of reals is a sorted list of disjoint pieces.
//   piece = { lo, loIn, hi, hiIn }   *In means the endpoint is included
// ============================================================================

export const NEG_INF = -Infinity;
export const POS_INF = Infinity;

export function isValidPiece(p) {
  if (p.lo > p.hi) return false;
  if (p.lo === p.hi) return p.loIn && p.hiIn && isFinite(p.lo);
  return true;
}

export function normalizeIntervals(list) {
  const pieces = list
    .filter(isValidPiece)
    .slice()
    .sort((x, y) => x.lo - y.lo || (x.loIn === y.loIn ? 0 : (x.loIn ? -1 : 1)));
  const out = [];
  pieces.forEach((p) => {
    const last = out[out.length - 1];
    if (!last) { out.push({ ...p }); return; }
    const touches = p.lo < last.hi || (p.lo === last.hi && (p.loIn || last.hiIn));
    if (touches) {
      if (p.hi > last.hi) { last.hi = p.hi; last.hiIn = p.hiIn; }
      else if (p.hi === last.hi) { last.hiIn = last.hiIn || p.hiIn; }
    } else {
      out.push({ ...p });
    }
  });
  return out;
}

function intersectPair(x, y) {
  let lo;
  let loIn;
  if (x.lo > y.lo) { lo = x.lo; loIn = x.loIn; }
  else if (y.lo > x.lo) { lo = y.lo; loIn = y.loIn; }
  else { lo = x.lo; loIn = x.loIn && y.loIn; }

  let hi;
  let hiIn;
  if (x.hi < y.hi) { hi = x.hi; hiIn = x.hiIn; }
  else if (y.hi < x.hi) { hi = y.hi; hiIn = y.hiIn; }
  else { hi = x.hi; hiIn = x.hiIn && y.hiIn; }

  const p = { lo, loIn, hi, hiIn };
  return isValidPiece(p) ? p : null;
}

export function unionIntervals(a, b) {
  return normalizeIntervals(a.concat(b));
}

export function intersectIntervals(a, b) {
  const out = [];
  a.forEach((x) => b.forEach((y) => {
    const p = intersectPair(x, y);
    if (p) out.push(p);
  }));
  return normalizeIntervals(out);
}

// Recognises 1/k, so a shrinking family reads as fractions rather than decimals.
export function numberText(v) {
  if (v === NEG_INF) return '\u2212\u221e';
  if (v === POS_INF) return '\u221e';
  if (Number.isInteger(v)) return String(v);
  const inv = 1 / Math.abs(v);
  if (Math.abs(inv - Math.round(inv)) < 1e-9 && Math.round(inv) <= 60) {
    return (v < 0 ? '\u2212' : '') + '1/' + Math.round(inv);
  }
  return String(Math.round(v * 1000) / 1000);
}

export function pieceText(p) {
  if (p.lo === p.hi) return '{' + numberText(p.lo) + '}';
  return (p.loIn && isFinite(p.lo) ? '[' : '(') +
    numberText(p.lo) + ', ' + numberText(p.hi) +
    (p.hiIn && isFinite(p.hi) ? ']' : ')');
}

export function intervalSetText(list) {
  return list.length ? list.map(pieceText).join(' \u222a ') : '\u2205';
}

export function subscript(k) {
  return String(k).split('').map((d) => '\u2080\u2081\u2082\u2083\u2084\u2085\u2086\u2087\u2088\u2089'[Number(d)]).join('');
}

// ============================================================================
// SECTION 1b - VENN GEOMETRY
// A region of a Venn diagram is a membership mask, so a Venn family is just a
// discrete family whose elements happen to be regions. The accumulation code
// is shared; only the renderer differs.
// ============================================================================

export const VENN_GEOMETRY = {
  2: {
    width: 300, height: 210, radius: 66,
    sets: ['A\u2081', 'A\u2082'],
    centres: { 0: [118, 105], 1: [182, 105] },
    labelOffset: { 0: [-74, -50], 1: [74, -50] }
  },
  3: {
    width: 300, height: 262, radius: 62,
    sets: ['A\u2081', 'A\u2082', 'A\u2083'],
    centres: { 0: [150, 96], 1: [118, 150], 2: [182, 150] },
    labelOffset: { 0: [0, -74], 1: [-58, 56], 2: [58, 56] }
  }
};

export function vennCirclePath(cx, cy, r) {
  return 'M ' + (cx - r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx + r) + ' ' + cy +
    ' A ' + r + ' ' + r + ' 0 1 0 ' + (cx - r) + ' ' + cy + ' Z';
}

export function vennOutsidePath(geo, cx, cy, r) {
  return 'M 0 0 L ' + geo.width + ' 0 L ' + geo.width + ' ' + geo.height +
    ' L 0 ' + geo.height + ' Z ' + vennCirclePath(cx, cy, r);
}

// Every region mask of a diagram with `count` sets, outside excluded.
export function vennRegions(count) {
  const out = [];
  for (let m = 1; m < (1 << count); m++) out.push(m);
  return out;
}

export function regionLabel(mask, count) {
  const inside = [];
  for (let i = 0; i < count; i++) if (mask & (1 << i)) inside.push('A' + subscript(i + 1));
  return inside.join('\u2229');
}

export function regionSetText(masks, count) {
  if (!masks.length) return '\u2205';
  return '{' + masks.slice().sort((a, b) => a - b).map((m) => regionLabel(m, count)).join(', ') + '}';
}

// ============================================================================
// SECTION 2 - FAMILIES
// `punch` names the lesson the family exists to deliver; the explanation
// resolver keys off it. `at(i, cap)` returns the i-th set.
// ============================================================================

export const DEFAULT_FAMILIES = {
  shrinkOpen: {
    kind: 'interval',
    expr: 'A\u1d62 = (0, 1/i]',
    blurb: 'shrinking, left endpoint excluded',
    at: (i) => [{ lo: 0, loIn: false, hi: 1 / i, hiIn: true }],
    view: [-0.12, 1.12],
    unionLimit: '(0, 1]',
    intersectionLimit: '\u2205',
    punch: 'empty'
  },
  shrinkClosed: {
    kind: 'interval',
    expr: 'A\u1d62 = [0, 1/i]',
    blurb: 'shrinking, left endpoint included',
    at: (i) => [{ lo: 0, loIn: true, hi: 1 / i, hiIn: true }],
    view: [-0.12, 1.12],
    unionLimit: '[0, 1]',
    intersectionLimit: '{0}',
    punch: 'point'
  },
  expand: {
    kind: 'interval',
    expr: 'A\u1d62 = [\u2212i, i]',
    blurb: 'growing without bound',
    at: (i) => [{ lo: -i, loIn: true, hi: i, hiIn: true }],
    view: null,
    unionLimit: '\u211d',
    intersectionLimit: '[\u22121, 1]',
    punch: 'grow'
  },
  tails: {
    kind: 'interval',
    expr: 'A\u1d62 = [i, \u221e)',
    blurb: 'sliding off to the right',
    at: (i) => [{ lo: i, loIn: true, hi: POS_INF, hiIn: false }],
    view: null,
    unionLimit: '[1, \u221e)',
    intersectionLimit: '\u2205',
    punch: 'empty'
  },
  prefixes: {
    kind: 'discrete',
    expr: 'A\u1d62 = {1, 2, \u2026, i}',
    blurb: 'each one contains the last',
    at: (i) => Array.from({ length: i }, (_, k) => k + 1),
    unionLimit: '\u2115',
    intersectionLimit: '{1}',
    punch: 'grow'
  },
  discreteTails: {
    kind: 'discrete',
    expr: 'A\u1d62 = {i, i+1, i+2, \u2026}',
    blurb: 'each one drops its smallest',
    at: (i, cap) => Array.from({ length: Math.max(0, cap - i + 1) }, (_, k) => k + i),
    unionLimit: '\u2115',
    intersectionLimit: '\u2205',
    punch: 'empty'
  },
  multiples: {
    kind: 'discrete',
    expr: 'A\u1d62 = { n \u2208 \u2115 : i divides n }',
    blurb: 'multiples of the index',
    at: (i, cap) => Array.from({ length: Math.floor(cap / i) }, (_, k) => (k + 1) * i),
    unionLimit: '\u2115',
    intersectionLimit: '\u2205',
    punch: 'lcm'
  },
  venn3: {
    kind: 'venn',
    setCount: 3,
    maxIndex: 3,
    expr: 'A\u2081, A\u2082, A\u2083 on a Venn diagram',
    blurb: 'the finite chain, three overlapping sets',
    // A_i holds every region lying inside the i-th circle.
    at: (i) => vennRegions(3).filter((m) => m & (1 << (i - 1))),
    punch: 'chain'
  },
  venn2: {
    kind: 'venn',
    setCount: 2,
    maxIndex: 2,
    expr: 'A\u2081, A\u2082 on a Venn diagram',
    blurb: 'where the big operators reduce to \u222a and \u2229',
    at: (i) => vennRegions(2).filter((m) => m & (1 << (i - 1))),
    punch: 'chain'
  }
};

// ============================================================================
// SECTION 3 - EXPLANATIONS
// A resolver picks an id from the current state. The id is looked up in the
// `explanations` prop first, then in these defaults, so a caller can override
// one entry without restating the rest. A title or body may be a string or a
// function of the context object. Strings are written for processContent.
// ============================================================================

export const DEFAULT_EXPLANATIONS = {

  'start': {
    title: 'One set is not a family',
    body: (ctx) => 'With a single index there is nothing to accumulate: both operators return $A_1$ itself, and neither has done any work.\n\n$\\bigcup$ and $\\bigcap$ do to a family of sets what $\\sum$ does to a family of numbers \u2014 take the whole indexed collection, return one object. **Add another index** and they start to differ.'
  },

  'building': {
    title: 'Two operators, moving in opposite directions',
    body: (ctx) => 'The union of $A_1$ through $A_{' + ctx.n + '}$ is $' + ctx.unionText + '$ and the intersection is $' + ctx.intersectionText + '$.\n\nBoth are **monotone**, and in opposite directions. Adding another set can only make the union bigger and the intersection smaller \u2014 never the reverse. Membership in a union survives any new term, and membership in an intersection is only ever at risk.\n\nKeep adding. With ' + ctx.n + ' the pattern is not visible yet.'
  },

  'nested-empty': {
    title: 'Every set non-empty, and the intersection empty',
    body: (ctx) => 'Look at what has happened. Every single $A_i$ in this family is non-empty \u2014 each holds points, and no matter how far the index runs that stays true. The infinite intersection is still $\\varnothing$.\n\nThere is no contradiction in that. An element of the intersection would have to sit in **every** $A_i$ at once, and for any candidate you name there is an index far enough along to exclude it. Non-empty at every stage, empty in the limit.\n\nThis is the most useful thing indexed intersection has to teach, and two sets can never show it. It needs infinitely many.'
  },

  'endpoint-decides': {
    title: 'One bracket decides the answer',
    body: (ctx) => 'This family differs from $A_i = (0, 1/i]$ in one character: the left endpoint is now included. That single bracket changes the infinite intersection from $\\varnothing$ to $\\{0\\}$.\n\nThe reason is that $0$ belongs to every set here, so it survives every stage. In the open version nothing does \u2014 any $x > 0$ is dropped as soon as $1/i < x$, and no positive number is small enough to escape that forever.\n\nOpen versus closed is not a formality of notation. Here it is the difference between an empty set and a point.'
  },

  'unbounded-union': {
    title: 'Bounded sets, unbounded union',
    body: (ctx) => 'Every $A_i$ here is bounded \u2014 an ordinary set of finite extent \u2014 and yet the union of all of them is not.\n\nEvery point is caught eventually: whatever $x$ you pick, some index reaches it, and from that index on it stays in. That is exactly what union membership asks for \u2014 belonging to **at least one** $A_i$, not to all of them.\n\nThe intersection meanwhile is stuck at $A_1$. The family is nested upward, so the first set is the smallest, and nothing after it can remove anything.'
  },

  'lcm-intersection': {
    title: 'The running intersection is the least common multiple',
    body: (ctx) => 'The intersection so far is the multiples of $\\mathrm{lcm}(1, \\ldots, ' + ctx.n + ')$, and that number climbs quickly: $1, 2, 6, 12, 60, 60, 420$. Each new index either divides what came before, changing nothing, or multiplies the requirement.\n\nOver the whole infinite family the intersection is $\\varnothing$, because no natural number is a multiple of every natural number. The union is all of $\\mathbb{N}$, because every $n$ is a multiple of itself.\n\nA set operation producing the lcm is not a coincidence. Divisibility orders $\\mathbb{N}$ the way $\\subseteq$ orders sets, and the lcm is the meet.'
  },

  'finite-chain': {
    title: (ctx) => 'The big operator is shorthand for a chain',
    body: (ctx) => 'With finitely many sets the notation unpacks into something you already know:\n\n$$\\bigcup_{i=1}^{' + ctx.n + '} A_i = ' + ctx.chainUnion + ' \\qquad \\bigcap_{i=1}^{' + ctx.n + '} A_i = ' + ctx.chainIntersection + '$$\n\nThe shaded regions on the right are the answer. Union takes every region lying inside **at least one** circle; intersection takes only the regions inside **all** of them, which is why it shrinks to the centre.\n\nThat is the whole content of the operators at finite size \u2014 the same $\\cup$ and $\\cap$, written once instead of ' + Math.max(1, ctx.n - 1) + ' ' + ctx.plural('time', ctx.n - 1) + '. The reason for having the notation is that it keeps working when the chain has no end, which the other families show.'
  },

  'union-stalled': {
    title: (ctx) => 'A' + ctx.nSub + ' added nothing',
    body: (ctx) => 'The union did not change when $A_{' + ctx.n + '}$ joined, because everything in it was already there. In this family each set is contained in the one before, so the union was settled at $A_1$ and no later term can add to it.\n\nThat is not a failure of the operator. A union takes each element once however many sets contain it, so a term contained in what came before contributes nothing at all.\n\nThe intersection is where the action is here: $' + ctx.intersectionText + '$.'
  },

  'intersection-stalled': {
    title: (ctx) => 'A' + ctx.nSub + ' removed nothing',
    body: (ctx) => 'The intersection is unchanged, because $A_{' + ctx.n + '}$ contains everything that had survived so far. In an upward-nested family the first set is the smallest, so the intersection settles immediately and stays at $A_1$.\n\nWatch the union instead: $' + ctx.unionText + '$, and still growing.'
  },

  'general': {
    title: 'Union is "there exists", intersection is "for all"',
    body: (ctx) => 'After ' + ctx.n + ' terms the union is $' + ctx.unionText + '$ and the intersection is $' + ctx.intersectionText + '$.\n\nRead the notation as a quantifier and both operators stop needing to be memorised. $x \\in \\bigcup_i A_i$ says $x$ lies in **some** $A_i$. $x \\in \\bigcap_i A_i$ says $x$ lies in **every** $A_i$. Union is existence, intersection is universality.\n\nThat also explains the monotonicity. A new term gives existence another chance to succeed, and universality another chance to fail.'
  }
};

// Optional aside, keyed by the same ids.
export const DEFAULT_NOTES = {
  'finite-chain': 'A Venn diagram can only ever show a finite family, and only a small one. That is not a limitation of this tool but of the picture: the diagram needs a separate region for every combination of memberships, and there are $2^n$ of them.',
  'general': 'The same reading extends past countable families. The index set can be anything at all \u2014 the operators only ever ask whether an element is in some member, or in every member.',
  'nested-empty': 'The condition that rules this out is compactness. For closed bounded intervals nested downward, the intersection is guaranteed non-empty \u2014 which is exactly why the closed version of this family behaves differently.',
  'endpoint-decides': 'This is worth doing by hand once. Pick any $x > 0$, find an $i$ with $1/i < x$, and you have shown $x$ is missing from the open family\u2019s intersection. Since $x$ was arbitrary, nothing positive survives.',
  'lcm-intersection': 'The union stalls at once here \u2014 $A_1$ is all of $\\mathbb{N}$, since every number is a multiple of 1 \u2014 so this family is entirely about the intersection.'
};

function resolveExplanationId(ctx) {
  if (ctx.n <= 1) return 'start';
  if (ctx.punch === 'chain') return ctx.n < 2 ? 'start' : 'finite-chain';
  if (ctx.n < 4) return 'building';
  if (ctx.punch === 'empty') return 'nested-empty';
  if (ctx.punch === 'point') return 'endpoint-decides';
  if (ctx.punch === 'lcm') return 'lcm-intersection';
  if (ctx.punch === 'grow') return 'unbounded-union';
  if (ctx.unionStalled) return 'union-stalled';
  if (ctx.intersectionStalled) return 'intersection-stalled';
  return 'general';
}

// ============================================================================
// SECTION 4 - STYLES
// Bump the version in CSS_ID whenever a rule below changes. Injection under a
// previously used id is skipped, so an unversioned edit silently does nothing.
// ============================================================================

const CSS_ID = 'indexed-union-intersection-styles-v1';

const CSS = `
.ifx-root {
  --ifx-ink: #131720;
  --ifx-ink-soft: #5a6472;
  --ifx-rule: #c2ccd8;
  --ifx-rule-soft: #e3e9ef;
  --ifx-hair: rgba(19, 23, 32, 0.06);
  --ifx-panel: #f6f7f9;
  --ifx-head: #eef0f4;
  --ifx-paper: #ffffff;
  --ifx-math: "Cambria Math", "Latin Modern Math", Georgia, "Times New Roman", serif;
  --ifx-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  color: var(--ifx-ink);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.45;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.ifx-root *, .ifx-root *::before, .ifx-root *::after { box-sizing: border-box; }
.ifx-intro { margin: 0 0 20px; max-width: 72ch; font-size: 15.5px; line-height: 1.65; color: var(--ifx-ink-soft); }
.ifx-intro > p { margin: 0 0 10px; }
.ifx-intro > p:last-child { margin-bottom: 0; }
.ifx-intro strong { color: var(--ifx-ink); font-weight: 600; }
.ifx-grid { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(300px, 1fr); gap: 16px; align-items: start; }
@media (max-width: 940px) { .ifx-grid { grid-template-columns: 1fr; } }
.ifx-panel { border: 1px solid var(--ifx-rule-soft); border-radius: 10px; background: var(--ifx-panel); overflow: hidden; }
.ifx-panel + .ifx-panel { margin-top: 14px; }
.ifx-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 16px; background: var(--ifx-head); }
.ifx-head h3 { margin: 0; font-size: 10.5px; font-weight: 600; letter-spacing: 0.11em; text-transform: uppercase; color: var(--ifx-ink-soft); }
.ifx-head .ifx-fam { font-family: var(--ifx-math); font-size: 15px; text-transform: none; letter-spacing: 0; color: var(--ifx-ink); }
.ifx-body { padding: 14px 16px; }
.ifx-readout { font-family: var(--ifx-mono); font-size: 11.5px; color: var(--ifx-ink-soft); }
.ifx-readout strong { color: var(--ifx-ink); font-weight: 600; }
.ifx-stage { padding: 8px 4px; background: var(--ifx-paper); border-bottom: 1px solid var(--ifx-rule-soft); overflow-x: auto; }
.ifx-svg { width: 100%; height: auto; display: block; }
.ifx-chipsrow { display: flex; align-items: center; gap: 8px; padding: 5px 0; border-bottom: 1px solid var(--ifx-hair); }
.ifx-chipsrow:last-child { border-bottom: 0; }
.ifx-chipsrow .ifx-lab { font-family: var(--ifx-math); font-size: 15px; color: var(--ifx-ink-soft); width: 56px; flex: 0 0 56px; }
.ifx-chipsrow .ifx-set { display: flex; flex-wrap: wrap; gap: 4px; }
.ifx-el { font-family: var(--ifx-math); font-size: 14px; padding: 2px 8px; border-radius: 6px; border: 1px solid var(--ifx-rule-soft); background: var(--ifx-paper); color: #a3adb9; }
.ifx-el.ifx-in { border-color: var(--ifx-rule); color: var(--ifx-ink); }
.ifx-el.ifx-u { border-color: var(--ifx-uni); background: var(--ifx-uni-soft); color: var(--ifx-uni); font-weight: 600; }
.ifx-el.ifx-i { border-color: var(--ifx-int); background: var(--ifx-int-soft); color: var(--ifx-int); font-weight: 600; }
.ifx-dots { font-family: var(--ifx-math); font-size: 15px; color: #a3adb9; align-self: center; }
.ifx-result { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; }
@media (max-width: 620px) { .ifx-result { grid-template-columns: 1fr; } }
.ifx-card { padding: 11px 13px; border-radius: 8px; background: var(--ifx-paper); border: 1px solid var(--ifx-rule); }
.ifx-card.ifx-u { border-color: var(--ifx-uni); }
.ifx-card.ifx-i { border-color: var(--ifx-int); }
.ifx-card .ifx-top { display: flex; align-items: center; gap: 7px; font-size: 11px; letter-spacing: 0.07em; text-transform: uppercase; color: var(--ifx-ink-soft); }
.ifx-card .ifx-op { font-family: var(--ifx-math); font-size: 15px; }
.ifx-card .ifx-big { font-family: var(--ifx-math); font-size: 19px; margin-top: 5px; word-break: break-word; }
.ifx-card.ifx-u .ifx-big { color: var(--ifx-uni); }
.ifx-card.ifx-i .ifx-big { color: var(--ifx-int); }
.ifx-card .ifx-move { font-size: 11.5px; color: var(--ifx-ink-soft); margin-top: 5px; }
.ifx-limit { margin-top: 12px; padding: 12px 14px; background: var(--ifx-paper); border: 1px dashed var(--ifx-rule); border-radius: 8px; }
.ifx-limit .ifx-lab2 { font-size: 11px; letter-spacing: 0.07em; text-transform: uppercase; color: var(--ifx-ink-soft); margin-bottom: 6px; }
.ifx-limit .ifx-row { display: flex; align-items: baseline; gap: 10px; font-family: var(--ifx-math); font-size: 17px; margin-bottom: 4px; }
.ifx-limit .ifx-row:last-child { margin-bottom: 0; }
.ifx-limit .ifx-k { width: 100px; flex: 0 0 100px; color: var(--ifx-ink-soft); font-size: 15px; }
.ifx-fams { display: flex; flex-direction: column; gap: 5px; }
.ifx-fams button { font: inherit; text-align: left; padding: 8px 10px; border: 1px solid var(--ifx-rule-soft); border-radius: 7px; background: var(--ifx-paper); color: var(--ifx-ink); cursor: pointer; }
.ifx-fams button:hover { border-color: var(--ifx-accent); }
.ifx-fams button[aria-pressed="true"] { border-color: var(--ifx-accent); background: var(--ifx-accent-soft); }
.ifx-fams .ifx-f { font-family: var(--ifx-math); font-size: 16px; }
.ifx-fams .ifx-d { font-size: 11.5px; color: var(--ifx-ink-soft); margin-top: 2px; }
.ifx-btn { font: inherit; font-size: 12.5px; padding: 7px 12px; border-radius: 6px; cursor: pointer; border: 1px solid var(--ifx-rule); background: var(--ifx-paper); color: var(--ifx-ink); }
.ifx-btn:hover { border-color: var(--ifx-accent); color: var(--ifx-accent); }
.ifx-btn.ifx-solid { background: var(--ifx-accent); border-color: var(--ifx-accent); color: #ffffff; }
.ifx-btn.ifx-solid:hover { background: #2540b8; color: #ffffff; }
.ifx-btn:disabled { opacity: 0.4; cursor: default; border-color: var(--ifx-rule-soft); color: var(--ifx-ink-soft); }
.ifx-btnrow { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; }
.ifx-hint { font-size: 11.5px; line-height: 1.55; color: var(--ifx-ink-soft); margin: 8px 0 0; }
.ifx-exp { padding: 18px 20px 20px; }
.ifx-exp-tag { display: inline-block; font-family: var(--ifx-mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ifx-ink-soft); border: 1px solid var(--ifx-rule-soft); border-radius: 4px; padding: 2px 7px; }
.ifx-exp-title { margin: 10px 0 10px; font-size: 16px; font-weight: 600; letter-spacing: -0.005em; line-height: 1.3; }
.ifx-exp-body { font-size: 14px; line-height: 1.65; }
.ifx-exp-body > p { margin: 0 0 12px; }
.ifx-exp-body > p:last-child { margin-bottom: 0; }
.ifx-exp-body a { color: var(--ifx-accent); }
.ifx-exp-note { margin-top: 16px; padding: 12px 0 12px 14px; border-left: 2px solid var(--ifx-rule); color: var(--ifx-ink-soft); font-size: 13px; line-height: 1.6; }
.ifx-exp-note > p { margin: 0 0 10px; }
.ifx-exp-note > p:last-child { margin-bottom: 0; }`;

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
  union: '#2f4fd8',
  unionSoft: '#eaeeff',
  intersection: '#b4690e',
  intersectionSoft: '#fdf3e3',
  member: '#5a6472',
  axis: '#c2ccd8',
  grid: '#f4f6f8'
};

const DEFAULT_INTRO =
  'A family of sets A\u2081, A\u2082, A\u2083, \u2026 and the two big operators that accumulate over it. ' +
  'Like \u03a3, they take a whole indexed family and return one object \u2014 but unlike a sum, ' +
  'one of them only ever grows and the other only ever shrinks. Push the index up and watch ' +
  'what the two of them settle on.';

const MATH_FONT = "'Cambria Math','Latin Modern Math',Georgia,serif";

// ============================================================================
// SECTION 7 - COMPONENT
// ============================================================================

export const IndexedUnionIntersectionExplorer = (props) => {
  const {
    initialFamily = 'shrinkOpen',
    initialIndex = 2,
    maxIndex = 8,
    discreteCap = 16,
    families: familiesProp = null,
    intro = DEFAULT_INTRO,
    showIntro = true,
    maxWidth = 1200,
    theme: themeProp = null,
    explanations: explanationsProp = null,
    notes: notesProp = null,
    showExplanation = true,
    showExplanationId = false,
    showFamilyPicker = true,
    showLimits = true,
    autoPlayMs = 900,
    onChange = null,
    className = ''
  } = props;

  useInjectedStyles();

  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '');
  const timerRef = useRef(null);

  const theme = useMemo(() => ({ ...DEFAULT_THEME, ...(themeProp || {}) }), [themeProp]);
  const families = familiesProp || DEFAULT_FAMILIES;
  const familyKeys = useMemo(() => Object.keys(families), [families]);

  const [familyKey, setFamilyKey] = useState(initialFamily);
  const [n, setN] = useState(Math.min(maxIndex, Math.max(1, initialIndex)));
  const [playing, setPlaying] = useState(false);

  const family = families[familyKey] || families[familyKeys[0]];

  // A Venn family is capped by its own set count, not by the global maximum.
  const topIndex = Math.min(maxIndex, family.maxIndex || maxIndex);
  const vennSets = family.setCount || 3;

  // --- the family, term by term --------------------------------------------
  const sets = useMemo(() => {
    const out = [];
    for (let i = 1; i <= n; i++) {
      out.push(family.kind === 'interval' ? family.at(i) : family.at(i, discreteCap));
    }
    return out;
  }, [family, n, discreteCap]);

  const accumulated = useMemo(() => {
    if (!sets.length) return null;
    if (family.kind === 'interval') {
      const union = sets.reduce((a, s) => unionIntervals(a, s), []);
      const intersection = sets.slice(1).reduce((a, s) => intersectIntervals(a, s), sets[0]);
      const before = sets.slice(0, -1);
      const prevUnion = before.length ? before.reduce((a, s) => unionIntervals(a, s), []) : null;
      const prevIntersection = before.length
        ? before.slice(1).reduce((a, s) => intersectIntervals(a, s), before[0])
        : null;
      return {
        union,
        intersection,
        unionText: intervalSetText(union),
        intersectionText: intervalSetText(intersection),
        unionStalled: prevUnion !== null && intervalSetText(prevUnion) === intervalSetText(union),
        intersectionStalled: prevIntersection !== null &&
          intervalSetText(prevIntersection) === intervalSetText(intersection)
      };
    }
    const unionSet = new Set();
    sets.forEach((s) => s.forEach((x) => unionSet.add(x)));
    const intersection = sets.reduce((acc, s) => acc.filter((x) => s.indexOf(x) > -1), sets[0].slice());
    const before = sets.slice(0, -1);
    const prevUnionSet = new Set();
    before.forEach((s) => s.forEach((x) => prevUnionSet.add(x)));
    const prevIntersection = before.length
      ? before.reduce((acc, s) => acc.filter((x) => s.indexOf(x) > -1), before[0].slice())
      : null;
    const sorted = Array.from(unionSet).sort((a, b) => a - b);
    const isVenn = family.kind === 'venn';
    return {
      union: unionSet,
      intersection,
      unionText: isVenn
        ? regionSetText(sorted, vennSets)
        : (sorted.length
          ? '{' + sorted.join(', ') + (sorted.length >= discreteCap ? ', \u2026' : '') + '}'
          : '\u2205'),
      intersectionText: isVenn
        ? regionSetText(intersection, vennSets)
        : (intersection.length
          ? '{' + intersection.join(', ') + (family.punch === 'lcm' ? ', \u2026' : '') + '}'
          : '\u2205'),
      unionStalled: before.length > 0 && prevUnionSet.size === unionSet.size,
      intersectionStalled: prevIntersection !== null && prevIntersection.length === intersection.length
    };
  }, [sets, family, discreteCap, vennSets]);

  // An index from one family means nothing in another.
  useEffect(() => { setN(Math.min(topIndex, 2)); setPlaying(false); }, [familyKey, topIndex]);

  // --- autoplay -------------------------------------------------------------
  useEffect(() => {
    if (!playing) return undefined;
    timerRef.current = window.setInterval(() => {
      setN((prev) => {
        if (prev >= topIndex) { setPlaying(false); return prev; }
        return prev + 1;
      });
    }, autoPlayMs);
    return () => window.clearInterval(timerRef.current);
  }, [playing, topIndex, autoPlayMs]);

  useEffect(() => () => { if (timerRef.current) window.clearInterval(timerRef.current); }, []);

  // --- serializer -----------------------------------------------------------
  const config = useMemo(() => ({
    family: familyKey,
    kind: family.kind,
    index: n,
    union: accumulated ? accumulated.unionText : '',
    intersection: accumulated ? accumulated.intersectionText : '',
    unionLimit: family.unionLimit,
    intersectionLimit: family.intersectionLimit
  }), [familyKey, family, n, accumulated]);

  const onChangeRef = useRef(onChange);
  useEffect(() => { onChangeRef.current = onChange; }, [onChange]);
  useEffect(() => { if (onChangeRef.current) onChangeRef.current(config); }, [config]);

  // --- explanation ----------------------------------------------------------
  const explanation = useMemo(() => {
    const ctx = {
      familyKey,
      family,
      kind: family.kind,
      expr: family.expr,
      punch: family.punch,
      n,
      nSub: subscript(n),
      maxIndex: topIndex,
      sets,
      unionText: accumulated ? accumulated.unionText : '',
      intersectionText: accumulated ? accumulated.intersectionText : '',
      unionLimit: family.unionLimit,
      intersectionLimit: family.intersectionLimit,
      unionStalled: accumulated ? accumulated.unionStalled : false,
      intersectionStalled: accumulated ? accumulated.intersectionStalled : false,
      // The big operator written out as the chain it abbreviates.
      chainUnion: Array.from({ length: n }, (_, k) => 'A_' + (k + 1)).join(' \\cup '),
      chainIntersection: Array.from({ length: n }, (_, k) => 'A_' + (k + 1)).join(' \\cap '),
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
      note: resolve(noteSource) || ''
    };
  }, [familyKey, family, n, topIndex, vennSets, sets, accumulated, explanationsProp, notesProp]);

  // --- handlers -------------------------------------------------------------
  const next = useCallback(() => setN((p) => Math.min(topIndex, p + 1)), [topIndex]);
  const prev = useCallback(() => setN((p) => Math.max(1, p - 1)), []);
  const reset = useCallback(() => { setPlaying(false); setN(1); }, []);
  const togglePlay = useCallback(() => {
    setPlaying((p) => {
      if (!p && n >= topIndex) setN(1);
      return !p;
    });
  }, [n, topIndex]);

  // --- interval renderer ----------------------------------------------------
  const renderIntervalView = () => {
    let lo;
    let hi;
    if (family.view) { lo = family.view[0]; hi = family.view[1]; }
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

    const bar = (list, y, colour, label, width, key) => (
      <g key={key}>
        <text x="8" y={y + 5} fontFamily={MATH_FONT} fontSize="14" fill={colour}>{label}</text>
        {list.length === 0 && (
          <text
            x={(padL + W - padR) / 2}
            y={y + 4}
            textAnchor="middle"
            fontFamily={MATH_FONT}
            fontSize="13"
            fill="#c2ccd8"
          >
            {'\u2205'}
          </text>
        )}
        {list.map((p, idx) => {
          const x1 = X(p.lo);
          const x2 = X(p.hi);
          return (
            <g key={key + '-p' + idx}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke={colour} strokeWidth={width} />
              {isFinite(p.lo) ? (
                <circle cx={x1} cy={y} r="4.5" fill={p.loIn ? colour : '#ffffff'} stroke={colour} strokeWidth="1.8" />
              ) : (
                <polygon points={padL + ',' + y + ' ' + (padL + 10) + ',' + (y - 5) + ' ' + (padL + 10) + ',' + (y + 5)} fill={colour} />
              )}
              {isFinite(p.hi) ? (
                <circle cx={x2} cy={y} r="4.5" fill={p.hiIn ? colour : '#ffffff'} stroke={colour} strokeWidth="1.8" />
              ) : (
                <polygon points={(W - padR) + ',' + y + ' ' + (W - padR - 10) + ',' + (y - 5) + ' ' + (W - padR - 10) + ',' + (y + 5)} fill={colour} />
              )}
              {p.lo === p.hi && <circle cx={x1} cy={y} r="5" fill={colour} />}
            </g>
          );
        })}
      </g>
    );

    const yU = top + sets.length * rowH + 18;
    const yI = yU + rowH;

    return (
      <svg className="ifx-svg" viewBox={'0 0 ' + W + ' ' + H} xmlns="http://www.w3.org/2000/svg">
        {ticks.map((t, i) => (
          <g key={'tick' + i}>
            <line x1={X(t)} y1={top} x2={X(t)} y2={H - 34} stroke={theme.grid} />
            <text
              x={X(t)}
              y={H - 16}
              textAnchor="middle"
              fontFamily="ui-monospace, Menlo, Consolas, monospace"
              fontSize="10"
              fill="#a3adb9"
            >
              {Math.abs(t) < 1e-9 ? 0 : Math.round(t * 100) / 100}
            </text>
          </g>
        ))}
        <line x1={padL} y1={H - 34} x2={W - padR} y2={H - 34} stroke={theme.axis} />

        {sets.map((set, idx) => (
          <g key={'set' + idx} opacity={0.35 + 0.65 * ((idx + 1) / sets.length)}>
            {bar(set, top + idx * rowH + 12, theme.member, 'A' + subscript(idx + 1), 5, 'm' + idx)}
          </g>
        ))}

        <line x1={padL} y1={yU - 14} x2={W - padR} y2={yU - 14} stroke={theme.axis} strokeDasharray="3 3" />
        {accumulated && bar(accumulated.union, yU, theme.union, '\u22C3', 7, 'union')}
        {accumulated && bar(accumulated.intersection, yI, theme.intersection, '\u22C2', 7, 'inter')}
      </svg>
    );
  };

  // --- discrete renderer ----------------------------------------------------
  const renderDiscreteView = () => {
    const cells = Array.from({ length: discreteCap }, (_, k) => k + 1);
    const unionSet = accumulated ? accumulated.union : new Set();
    const intersection = accumulated ? accumulated.intersection : [];

    return (
      <div style={{ padding: '6px 10px' }}>
        {sets.map((set, idx) => (
          <div className="ifx-chipsrow" key={'row' + idx}>
            <span className="ifx-lab">{'A' + subscript(idx + 1)}</span>
            <span className="ifx-set">
              {cells.map((x) => (
                <span key={'c' + idx + '-' + x} className={'ifx-el' + (set.indexOf(x) > -1 ? ' ifx-in' : '')}>
                  {x}
                </span>
              ))}
            </span>
            <span className="ifx-dots">{'\u2026'}</span>
          </div>
        ))}

        <div style={{ height: 8 }} />

        <div className="ifx-chipsrow" style={{ borderTop: '1px dashed var(--ifx-rule)', paddingTop: 8 }}>
          <span className="ifx-lab" style={{ color: theme.union }}>{'\u22C3'}</span>
          <span className="ifx-set">
            {cells.map((x) => (
              <span key={'u' + x} className={'ifx-el' + (unionSet.has && unionSet.has(x) ? ' ifx-u' : '')}>{x}</span>
            ))}
          </span>
          <span className="ifx-dots">{'\u2026'}</span>
        </div>

        <div className="ifx-chipsrow">
          <span className="ifx-lab" style={{ color: theme.intersection }}>{'\u22C2'}</span>
          <span className="ifx-set">
            {cells.map((x) => (
              <span key={'i' + x} className={'ifx-el' + (intersection.indexOf(x) > -1 ? ' ifx-i' : '')}>{x}</span>
            ))}
          </span>
          <span className="ifx-dots">{'\u2026'}</span>
        </div>
      </div>
    );
  };

  // --- venn renderer --------------------------------------------------------
  // One small diagram per term, then the two accumulated ones. Small multiples
  // keep the accumulation readable; a single diagram would have to encode both
  // operators at once.
  const renderVennView = () => {
    const geo = VENN_GEOMETRY[vennSets] || VENN_GEOMETRY[3];
    const indexes = [];
    for (let i = 0; i < vennSets; i++) indexes.push(i);

    const diagram = (masks, colour, caption, key, faded) => (
      <figure key={key} style={{ margin: 0, textAlign: 'center', opacity: faded ? 0.32 : 1 }}>
        <svg
          viewBox={'0 0 ' + geo.width + ' ' + geo.height}
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <defs>
            {indexes.map((i) => {
              const c = geo.centres[i];
              return (
                <React.Fragment key={key + '-clip' + i}>
                  <clipPath id={'ifxin' + i + key + uid} clipPathUnits="userSpaceOnUse">
                    <path d={vennCirclePath(c[0], c[1], geo.radius)} />
                  </clipPath>
                  <clipPath id={'ifxout' + i + key + uid} clipPathUnits="userSpaceOnUse">
                    <path d={vennOutsidePath(geo, c[0], c[1], geo.radius)} clipRule="evenodd" />
                  </clipPath>
                </React.Fragment>
              );
            })}
          </defs>

          <rect x="0" y="0" width={geo.width} height={geo.height} fill="#ffffff" />

          {masks.map((m) => {
            let node = <rect x="0" y="0" width={geo.width} height={geo.height} fill={colour} opacity="0.8" />;
            for (let i = vennSets - 1; i >= 0; i--) {
              const clip = ((m & (1 << i)) ? 'ifxin' : 'ifxout') + i + key + uid;
              node = <g clipPath={'url(#' + clip + ')'}>{node}</g>;
            }
            return <g key={key + '-r' + m}>{node}</g>;
          })}

          {indexes.map((i) => {
            const c = geo.centres[i];
            return (
              <circle
                key={key + '-o' + i}
                cx={c[0]}
                cy={c[1]}
                r={geo.radius}
                fill="none"
                stroke="#1e293b"
                strokeWidth="1.3"
              />
            );
          })}

          {indexes.map((i) => {
            const c = geo.centres[i];
            const off = geo.labelOffset[i];
            return (
              <text
                key={key + '-l' + i}
                x={c[0] + off[0]}
                y={c[1] + off[1]}
                textAnchor="middle"
                fontFamily={MATH_FONT}
                fontSize="15"
                fontStyle="italic"
                fill="#1e293b"
              >
                {geo.sets[i]}
              </text>
            );
          })}
        </svg>
        <figcaption
          style={{
            fontFamily: MATH_FONT,
            fontSize: 15,
            color: colour,
            marginTop: 2
          }}
        >
          {caption}
        </figcaption>
      </figure>
    );

    return (
      <div style={{ padding: '6px 8px 10px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(' + (family.maxIndex || vennSets) + ', 1fr)',
            gap: 8,
            marginBottom: 12
          }}
        >
          {Array.from({ length: family.maxIndex || vennSets }, (_, idx) => (
            idx < sets.length
              ? diagram(sets[idx], theme.member, 'A' + subscript(idx + 1), 'm' + idx, false)
              : diagram([], '#ffffff', 'A' + subscript(idx + 1), 'm' + idx, true)
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
            borderTop: '1px dashed var(--ifx-rule)',
            paddingTop: 12
          }}
        >
          {accumulated && diagram(
            Array.from(accumulated.union).sort((a, b) => a - b),
            theme.union,
            '\u22C3 A\u1d62',
            'union',
            false
          )}
          {accumulated && diagram(accumulated.intersection, theme.intersection, '\u22C2 A\u1d62', 'inter', false)}
        </div>
      </div>
    );
  };

  const rootStyle = {
    '--ifx-accent': theme.accent,
    '--ifx-accent-soft': theme.accentSoft,
    '--ifx-uni': theme.union,
    '--ifx-uni-soft': theme.unionSoft,
    '--ifx-int': theme.intersection,
    '--ifx-int-soft': theme.intersectionSoft,
    maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth
  };

  return (
    <div className={'ifx-root ' + className} style={rootStyle}>

      {showIntro && intro && (
        typeof intro === 'string'
          ? <Content className="ifx-intro" text={intro} />
          : <div className="ifx-intro">{intro}</div>
      )}

      <div className="ifx-grid">

        {/* ---------------- family + accumulation ---------------- */}
        <div>
          <div className="ifx-panel">
            <div className="ifx-head">
              <h3><span className="ifx-fam">{family.expr}</span></h3>
              <span className="ifx-readout">n = <strong>{n}</strong></span>
            </div>

            <div className="ifx-stage">
              {family.kind === 'interval' && renderIntervalView()}
              {family.kind === 'discrete' && renderDiscreteView()}
              {family.kind === 'venn' && renderVennView()}
            </div>

            <div className="ifx-body">
              <div className="ifx-btnrow">
                <button type="button" className="ifx-btn" onClick={prev} disabled={n === 1}>Previous</button>
                <button type="button" className="ifx-btn ifx-solid" onClick={next} disabled={n === topIndex}>
                  Add A{subscript(n + 1 > topIndex ? topIndex : n + 1)}
                </button>
                <button type="button" className="ifx-btn" onClick={togglePlay}>
                  {playing ? 'Pause' : 'Play'}
                </button>
                <button type="button" className="ifx-btn" onClick={reset}>Reset</button>
              </div>

              <div className="ifx-result">
                <div className="ifx-card ifx-u">
                  <div className="ifx-top"><span className="ifx-op">{'\u22C3'}</span> union so far</div>
                  <div className="ifx-big">{accumulated ? accumulated.unionText : ''}</div>
                  <div className="ifx-move">
                    {n === 1
                      ? 'starts as A\u2081'
                      : (accumulated && accumulated.unionStalled ? 'unchanged \u2014 A' + subscript(n) + ' added nothing new' : 'grew')}
                  </div>
                </div>
                <div className="ifx-card ifx-i">
                  <div className="ifx-top"><span className="ifx-op">{'\u22C2'}</span> intersection so far</div>
                  <div className="ifx-big">{accumulated ? accumulated.intersectionText : ''}</div>
                  <div className="ifx-move">
                    {n === 1
                      ? 'starts as A\u2081'
                      : (accumulated && accumulated.intersectionStalled ? 'unchanged \u2014 A' + subscript(n) + ' removed nothing' : 'shrank')}
                  </div>
                </div>
              </div>

              {showLimits && family.unionLimit && (
                <div className="ifx-limit">
                  <div className="ifx-lab2">As the index runs forever</div>
                  <div className="ifx-row">
                    <span className="ifx-k">{'\u22C3'}<sub>i=1</sub><sup>{'\u221e'}</sup> A<sub>i</sub></span>
                    <span>{family.unionLimit}</span>
                  </div>
                  <div className="ifx-row">
                    <span className="ifx-k">{'\u22C2'}<sub>i=1</sub><sup>{'\u221e'}</sup> A<sub>i</sub></span>
                    <span>{family.intersectionLimit}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {showExplanation && (
            <div className="ifx-panel">
              <div className="ifx-exp">
                {showExplanationId && <span className="ifx-exp-tag">{explanation.id}</span>}
                <h4 className="ifx-exp-title">{explanation.title}</h4>
                <Content className="ifx-exp-body" text={explanation.body} />
                {explanation.note && <Content className="ifx-exp-note" text={explanation.note} />}
              </div>
            </div>
          )}
        </div>

        {/* ---------------- family picker ---------------- */}
        {showFamilyPicker && (
          <div>
            <div className="ifx-panel">
              <div className="ifx-head"><h3>The family</h3></div>
              <div className="ifx-body">
                <div className="ifx-fams">
                  {familyKeys.map((key) => (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={familyKey === key}
                      onClick={() => setFamilyKey(key)}
                    >
                      <div className="ifx-f">{families[key].expr}</div>
                      <div className="ifx-d">{families[key].blurb}</div>
                    </button>
                  ))}
                </div>
                <p className="ifx-hint">
                  The first two families differ by a single bracket, and that bracket decides
                  whether the infinite intersection is empty or a point.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default IndexedUnionIntersectionExplorer;