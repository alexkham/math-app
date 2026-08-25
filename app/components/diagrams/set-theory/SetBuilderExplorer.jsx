'use client';

// ============================================================================
// SET BUILDER EXPLORER
// ----------------------------------------------------------------------------
// Set-builder notation as what it actually is: a filter. A domain supplies
// candidates, a condition tests each one, and whatever passes is the set.
//
// No predicate is ever evaluated from a string. Every condition is a named
// entry in the PREDICATES table with numeric parameters, so the set of things
// a user can express is fixed by that table rather than by a parser.
//
// IMPORTANT: fix the processContent import path below to match your project.
// If the path is wrong the whole module fails to load and SetBuilderExplorer
// becomes undefined in its consumers.
// ============================================================================

import React, { useState, useMemo, useEffect, useCallback, useRef, useId } from 'react';
import { processContent } from '../../../utils/contentProcessor';

// ============================================================================
// SECTION 1 - DOMAINS
// ============================================================================

export const DEFAULT_DOMAINS = {
  N: {
    symbol: '\u2115',
    label: '\u2115',
    read: 'the natural numbers',
    lo: 1,
    hi: 60,
    windowLo: 1,
    windowSize: 24,
    infinite: true
  },
  N0: {
    symbol: '\u2115\u2080',
    label: '\u2115\u2080',
    read: 'the naturals including zero',
    lo: 0,
    hi: 60,
    windowLo: 0,
    windowSize: 24,
    infinite: true
  },
  Z: {
    symbol: '\u2124',
    label: '\u2124',
    read: 'the integers',
    lo: -30,
    hi: 30,
    windowLo: -12,
    windowSize: 25,
    infinite: true
  },
  custom: {
    symbol: 'A',
    label: 'finite set',
    read: 'the set A',
    infinite: false
  }
};

// ============================================================================
// SECTION 2 - PREDICATES
// Each entry names a test. `sym` writes it in notation, `read` in words, and
// `f` decides. Adding a predicate here is the only way to extend the language.
// ============================================================================

function mod(x, m) {
  const d = Math.abs(m);
  return ((x % d) + d) % d;
}

export function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

export const DEFAULT_PREDICATES = {
  lt: { label: 'x < a', args: 1, sym: (a) => 'x < ' + a, read: (a) => 'x is less than ' + a, f: (x, a) => x < a },
  le: { label: 'x \u2264 a', args: 1, sym: (a) => 'x \u2264 ' + a, read: (a) => 'x is at most ' + a, f: (x, a) => x <= a },
  gt: { label: 'x > a', args: 1, sym: (a) => 'x > ' + a, read: (a) => 'x is greater than ' + a, f: (x, a) => x > a },
  ge: { label: 'x \u2265 a', args: 1, sym: (a) => 'x \u2265 ' + a, read: (a) => 'x is at least ' + a, f: (x, a) => x >= a },
  eq: { label: 'x = a', args: 1, sym: (a) => 'x = ' + a, read: (a) => 'x equals ' + a, f: (x, a) => x === a },
  ne: { label: 'x \u2260 a', args: 1, sym: (a) => 'x \u2260 ' + a, read: (a) => 'x is not ' + a, f: (x, a) => x !== a },
  between: {
    label: 'a \u2264 x \u2264 b',
    args: 2,
    sym: (a, b) => a + ' \u2264 x \u2264 ' + b,
    read: (a, b) => 'x is between ' + a + ' and ' + b,
    f: (x, a, b) => x >= a && x <= b
  },
  even: { label: 'x is even', args: 0, sym: () => 'x is even', read: () => 'x is even', f: (x) => mod(x, 2) === 0 },
  odd: { label: 'x is odd', args: 0, sym: () => 'x is odd', read: () => 'x is odd', f: (x) => mod(x, 2) === 1 },
  div: { label: 'a divides x', args: 1, sym: (a) => a + ' | x', read: (a) => 'x is a multiple of ' + a, f: (x, a) => a !== 0 && mod(x, a) === 0 },
  prime: { label: 'x is prime', args: 0, sym: () => 'x is prime', read: () => 'x is prime', f: (x) => isPrime(x) },
  square: {
    label: 'x is a perfect square',
    args: 0,
    sym: () => '\u2203k, x = k\u00b2',
    read: () => 'x is a perfect square',
    f: (x) => x >= 0 && Number.isInteger(Math.sqrt(x))
  },
  sqlt: { label: 'x\u00b2 < a', args: 1, sym: (a) => 'x\u00b2 < ' + a, read: (a) => 'x squared is less than ' + a, f: (x, a) => x * x < a }
};

export function conditionArgs(condition, predicates) {
  const p = predicates[condition.key];
  if (!p) return [];
  if (p.args === 0) return [];
  if (p.args === 1) return [condition.a];
  return [condition.a, condition.b];
}

export function conditionText(condition, predicates, mode) {
  const p = predicates[condition.key];
  if (!p) return '';
  const args = conditionArgs(condition, predicates);
  return mode === 'read' ? p.read.apply(null, args) : p.sym.apply(null, args);
}

export function testCandidate(x, conditions, predicates) {
  return conditions.map((c) => {
    const p = predicates[c.key];
    if (!p) return false;
    return Boolean(p.f.apply(null, [x].concat(conditionArgs(c, predicates))));
  });
}

export function candidatePasses(x, conditions, predicates, join) {
  if (!conditions.length) return true;
  const results = testCandidate(x, conditions, predicates);
  return join === 'or' ? results.some(Boolean) : results.every(Boolean);
}

function integerRange(a, b) {
  const out = [];
  for (let i = a; i <= b; i++) out.push(i);
  return out;
}

export function parseCustomSet(text) {
  const parts = String(text || '')
    .split(/[,;\s]+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map(Number)
    .filter((n) => Number.isFinite(n));
  const seen = [];
  parts.forEach((n) => { if (seen.indexOf(n) === -1) seen.push(n); });
  return seen.sort((a, b) => a - b);
}

// ============================================================================
// SECTION 3 - EXPLANATIONS
// A resolver picks an id from the current state. The id is looked up in the
// `explanations` prop first, then in these defaults, so a caller can override
// one entry without restating the rest. A title or body may be a string or a
// function of the context object. Strings are written for processContent.
// ============================================================================

export const DEFAULT_EXPLANATIONS = {

  'no-conditions': {
    title: 'A condition with nothing to test',
    body: (ctx) => 'With no condition after the bar, the expression keeps everything: the set is the whole domain $' + ctx.domainSymbol + '$.\n\nThat is legal but pointless. Set-builder notation earns its keep when the condition does work \u2014 **add a condition** and watch candidates start failing.'
  },

  'empty-result': {
    title: 'Nothing passes the filter',
    body: (ctx) => 'Every candidate in $' + ctx.domainSymbol + '$ fails at least one condition, so the set is $\\varnothing$.\n\n' +
      (ctx.join === 'and' && ctx.conditionCount > 1
        ? 'With conditions joined by **and**, this is easy to arrange: two tests that cannot both hold give the empty set however large the domain is. Click any candidate to see which condition kills it.'
        : 'An empty result is an answer, not an error. Set-builder notation can describe the empty set, and often the only way to know a set is empty is to work out that nothing satisfies the condition.')
  },

  'infinite-result': {
    title: 'Infinite, so roster form cannot reach it',
    body: (ctx) => 'The condition does not bound the domain, so the filter keeps passing elements forever.\n\nThis is where the notation earns its place. $' + ctx.builderText + '$ names this set **exactly**, while roster form can only gesture at it with an ellipsis. A list you cannot finish is not a description.\n\nEvery infinite set you meet is named this way, or by a rule like it. There is no alternative once the elements run out of room.'
  },

  'singleton-result': {
    title: (ctx) => 'Exactly one element survives',
    body: (ctx) => 'Only $' + ctx.members[0] + '$ passes, so the set is $\\{' + ctx.members[0] + '\\}$.\n\nNote the difference between the element and the set holding it. $' + ctx.members[0] + '$ is a number; $\\{' + ctx.members[0] + '\\}$ is a set with one member, and they are not interchangeable. $' + ctx.members[0] + ' \\in \\{' + ctx.members[0] + '\\}$ is true, while $' + ctx.members[0] + ' = \\{' + ctx.members[0] + '\\}$ is not.'
  },

  'candidate-passes': {
    title: (ctx) => ctx.picked + ' is in the set',
    body: (ctx) => '$' + ctx.picked + '$ is drawn from $' + ctx.domainSymbol + '$ and ' +
      (ctx.conditionCount === 1
        ? 'passes the condition, so it survives the filter.'
        : 'passes ' + (ctx.join === 'and' ? 'every condition' : 'at least one condition') + ', which is what joining with **' + ctx.join + '** requires.') +
      '\n\nThat is the entire membership test. Asking whether something is in a set defined this way is never a matter of looking it up \u2014 it is a matter of running the condition, which is why the notation can describe sets nobody could list.'
  },

  'candidate-fails': {
    title: (ctx) => ctx.picked + ' is not in the set',
    body: (ctx) => '$' + ctx.picked + '$ is a candidate \u2014 it comes from $' + ctx.domainSymbol + '$ \u2014 but it ' +
      (ctx.failedList
        ? 'fails ' + ctx.failedList + '.'
        : 'fails the condition.') +
      '\n\nBeing in the domain is not the same as being in the set. The domain says which things get tested; the condition decides which of them stay. Candidates that fail are still perfectly good members of $' + ctx.domainSymbol + '$.'
  },

  'candidate-outside': {
    title: (ctx) => ctx.picked + ' is not even a candidate',
    body: (ctx) => '$' + ctx.picked + '$ is not in $' + ctx.domainSymbol + '$, so the condition never gets applied to it.\n\nThis is the part people skip. A set-builder expression has two gates, and the domain is the first one. Something can satisfy the condition perfectly and still be excluded for coming from the wrong place.'
  },

  'and-join': {
    title: 'Joining with and is intersection',
    body: (ctx) => 'Two conditions joined by **and** keep only the candidates passing both, which is exactly what $\\cap$ does:\n\n$$\\{x \\in ' + ctx.domainSymbol + ' : P(x) \\text{ and } Q(x)\\} = \\{x \\in ' + ctx.domainSymbol + ' : P(x)\\} \\cap \\{x \\in ' + ctx.domainSymbol + ' : Q(x)\\}$$\n\nOf the ' + ctx.candidateCount + ' candidates shown, ' + ctx.memberCount + ' pass both. **Switch to or** and the same two conditions give the union instead.\n\nThe bar notation and the operation symbols are not two topics. They are two ways of writing one filter.'
  },

  'or-join': {
    title: 'Joining with or is union',
    body: (ctx) => 'Two conditions joined by **or** keep every candidate passing at least one, which is exactly what $\\cup$ does:\n\n$$\\{x \\in ' + ctx.domainSymbol + ' : P(x) \\text{ or } Q(x)\\} = \\{x \\in ' + ctx.domainSymbol + ' : P(x)\\} \\cup \\{x \\in ' + ctx.domainSymbol + ' : Q(x)\\}$$\n\nA candidate passing both is still counted once. Sets have no multiplicities, so there is nothing to double up \u2014 which is the same fact that makes $|A \\cup B|$ need a correction term while a simple count does not.'
  },

  'general': {
    title: 'Domain, then condition, then keep what passes',
    body: (ctx) => 'Set-builder notation has two parts and no more. Before the bar is the **domain**, saying where candidates come from. After it is the **condition**, the test each one has to pass. The set is whatever survives.\n\nHere ' + ctx.memberCount + ' of the candidates pass, so the roster form is available and both notations describe the same set. $\\{x \\in \\mathbb{N} : x < 4\\}$ and $\\{1, 2, 3\\}$ are the same set, and a set does not remember which notation named it.\n\n**Click any candidate** to watch it tested.'
  }
};

// Optional aside, keyed by the same ids.
export const DEFAULT_NOTES = {
  'general': 'The domain is not decoration. Dropping it and writing \u201call $x$ such that\u2026\u201d is precisely what Russell\u2019s paradox exploits, which is why every well-formed set-builder expression names the set its candidates are drawn from.',
  'infinite-result': 'An ellipsis in roster form is an appeal to the reader to guess the rule. Set-builder notation states the rule, so nothing is left to guess.',
  'candidate-outside': 'Changing the domain changes the set even when the condition is untouched. $\\{x \\in \\mathbb{N} : x^2 < 10\\}$ and $\\{x \\in \\mathbb{Z} : x^2 < 10\\}$ differ by four negative numbers.'
};

function resolveExplanationId(ctx) {
  if (ctx.picked !== null) {
    if (!ctx.pickedInDomain) return 'candidate-outside';
    return ctx.pickedPasses ? 'candidate-passes' : 'candidate-fails';
  }
  if (!ctx.conditionCount) return 'no-conditions';
  if (ctx.memberCount === 0) return 'empty-result';
  if (ctx.infinite) return 'infinite-result';
  if (ctx.memberCount === 1) return 'singleton-result';
  if (ctx.conditionCount > 1) return ctx.join === 'or' ? 'or-join' : 'and-join';
  return 'general';
}

// ============================================================================
// SECTION 4 - STYLES
// Bump the version in CSS_ID whenever a rule below changes. Injection under a
// previously used id is skipped, so an unversioned edit silently does nothing.
// ============================================================================

const CSS_ID = 'set-builder-explorer-styles-v1';

const CSS = `
.sbx-root {
  --sbx-ink: #131720;
  --sbx-ink-soft: #5a6472;
  --sbx-rule: #c2ccd8;
  --sbx-rule-soft: #e3e9ef;
  --sbx-hair: rgba(19, 23, 32, 0.06);
  --sbx-panel: #f6f7f9;
  --sbx-head: #eef0f4;
  --sbx-paper: #ffffff;
  --sbx-ok: #0e7c66;
  --sbx-ok-soft: #dff2ed;
  --sbx-bad: #c0392b;
  --sbx-bad-soft: #fdecea;
  --sbx-math: "Cambria Math", "Latin Modern Math", Georgia, "Times New Roman", serif;
  --sbx-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  color: var(--sbx-ink);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.45;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.sbx-root *, .sbx-root *::before, .sbx-root *::after { box-sizing: border-box; }
.sbx-intro { margin: 0 0 20px; max-width: 70ch; font-size: 15.5px; line-height: 1.65; color: var(--sbx-ink-soft); }
.sbx-intro > p { margin: 0 0 10px; }
.sbx-intro > p:last-child { margin-bottom: 0; }
.sbx-intro strong { color: var(--sbx-ink); font-weight: 600; }
.sbx-grid { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(320px, 1fr); gap: 16px; align-items: start; }
@media (max-width: 940px) { .sbx-grid { grid-template-columns: 1fr; } }
.sbx-panel { border: 1px solid var(--sbx-rule-soft); border-radius: 10px; background: var(--sbx-panel); overflow: hidden; }
.sbx-panel + .sbx-panel { margin-top: 14px; }
.sbx-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 16px; background: var(--sbx-head); }
.sbx-head h3 { margin: 0; font-size: 10.5px; font-weight: 600; letter-spacing: 0.11em; text-transform: uppercase; color: var(--sbx-ink-soft); }
.sbx-body { padding: 14px 16px; }
.sbx-readout { font-family: var(--sbx-mono); font-size: 11.5px; color: var(--sbx-ink-soft); }
.sbx-readout strong { color: var(--sbx-ink); font-weight: 600; }
.sbx-builder { padding: 16px; background: var(--sbx-paper); border-bottom: 1px solid var(--sbx-rule-soft); text-align: center; }
.sbx-expr { font-family: var(--sbx-math); font-size: 24px; line-height: 1.6; color: var(--sbx-ink); }
.sbx-expr .sbx-var { font-style: italic; }
.sbx-expr .sbx-dom { color: var(--sbx-accent); }
.sbx-expr .sbx-cond { color: var(--sbx-ok); }
.sbx-read { font-size: 12.5px; color: var(--sbx-ink-soft); margin-top: 8px; }
.sbx-chips { display: flex; flex-wrap: wrap; gap: 5px; }
.sbx-chip {
  font-family: var(--sbx-math); font-size: 15px; padding: 4px 10px; border-radius: 7px;
  border: 1px solid var(--sbx-rule-soft); background: var(--sbx-paper); color: #a3adb9;
  cursor: pointer; user-select: none;
}
.sbx-chip.sbx-pass { border-color: var(--sbx-ok); background: var(--sbx-ok-soft); color: var(--sbx-ok); font-weight: 600; }
.sbx-chip.sbx-sel { outline: 2px solid var(--sbx-accent); outline-offset: 1px; }
.sbx-more { align-self: center; font-family: var(--sbx-math); font-size: 16px; color: #a3adb9; padding: 0 4px; }
.sbx-why { margin-top: 12px; padding: 11px 13px; background: var(--sbx-paper); border: 1px solid var(--sbx-rule); border-radius: 8px; font-size: 13px; }
.sbx-why .sbx-n { font-family: var(--sbx-math); font-size: 17px; color: var(--sbx-ink); }
.sbx-why ul { list-style: none; margin: 8px 0 0; padding: 0; }
.sbx-why li { display: flex; gap: 8px; align-items: center; padding: 4px 0; font-size: 12.5px; color: var(--sbx-ink-soft); }
.sbx-tick { width: 16px; height: 16px; border-radius: 4px; display: grid; place-items: center; font-family: var(--sbx-mono); font-size: 10px; font-weight: 700; flex: 0 0 16px; }
.sbx-tick.sbx-yes { background: var(--sbx-ok-soft); color: var(--sbx-ok); }
.sbx-tick.sbx-no { background: var(--sbx-bad-soft); color: var(--sbx-bad); }
.sbx-why .sbx-m { font-family: var(--sbx-math); font-size: 14px; color: var(--sbx-ink); }
.sbx-roster { font-family: var(--sbx-math); font-size: 19px; line-height: 1.8; color: var(--sbx-ink); word-break: break-word; }
.sbx-roster .sbx-muted { color: #a3adb9; }
.sbx-cond-row { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; flex-wrap: wrap; }
.sbx-cond-row select, .sbx-cond-row input {
  font: inherit; font-size: 13px; padding: 6px 8px; border: 1px solid var(--sbx-rule);
  border-radius: 6px; background: var(--sbx-paper); color: var(--sbx-ink);
}
.sbx-cond-row select { flex: 1; min-width: 150px; }
.sbx-cond-row input[type="number"] { width: 74px; font-family: var(--sbx-mono); }
.sbx-cond-row .sbx-x { border: 0; background: transparent; color: var(--sbx-ink-soft); cursor: pointer; font-size: 16px; line-height: 1; padding: 0 4px; }
.sbx-cond-row .sbx-x:hover { color: var(--sbx-bad); }
.sbx-join { display: flex; align-items: center; gap: 8px; margin: 0 0 8px; }
.sbx-join span { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--sbx-ink-soft); }
.sbx-seg { display: flex; border: 1px solid var(--sbx-rule); border-radius: 6px; overflow: hidden; flex-wrap: wrap; }
.sbx-seg button {
  font: inherit; font-size: 12.5px; border: 0; background: var(--sbx-paper); color: var(--sbx-ink-soft);
  padding: 6px 11px; cursor: pointer; border-right: 1px solid var(--sbx-rule-soft); white-space: nowrap;
}
.sbx-seg button:last-child { border-right: 0; }
.sbx-seg button[aria-pressed="true"] { background: var(--sbx-accent); color: #ffffff; }
.sbx-btn { font: inherit; font-size: 12.5px; padding: 7px 12px; border-radius: 6px; cursor: pointer; border: 1px solid var(--sbx-rule); background: var(--sbx-paper); color: var(--sbx-ink); }
.sbx-btn:hover { border-color: var(--sbx-accent); color: var(--sbx-accent); }
.sbx-text { width: 100%; font-family: var(--sbx-math); font-size: 15px; padding: 7px 10px; border: 1px solid var(--sbx-rule); border-radius: 6px; background: var(--sbx-paper); color: var(--sbx-ink); }
.sbx-text:focus { outline: 2px solid var(--sbx-accent); outline-offset: -1px; }
.sbx-presets { display: flex; flex-wrap: wrap; gap: 5px; }
.sbx-presets button {
  font-family: var(--sbx-math); font-size: 13.5px; padding: 5px 9px; border: 1px solid var(--sbx-rule-soft);
  border-radius: 5px; background: var(--sbx-paper); color: var(--sbx-ink); cursor: pointer;
}
.sbx-presets button:hover { background: var(--sbx-accent-soft); border-color: var(--sbx-accent); }
.sbx-hint { font-size: 11.5px; line-height: 1.55; color: var(--sbx-ink-soft); margin: 8px 0 0; }
.sbx-exp { padding: 18px 20px 20px; }
.sbx-exp-tag { display: inline-block; font-family: var(--sbx-mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--sbx-ink-soft); border: 1px solid var(--sbx-rule-soft); border-radius: 4px; padding: 2px 7px; }
.sbx-exp-title { margin: 10px 0 10px; font-size: 16px; font-weight: 600; letter-spacing: -0.005em; line-height: 1.3; }
.sbx-exp.sbx-state-ok .sbx-exp-title { color: var(--sbx-ok); }
.sbx-exp.sbx-state-bad .sbx-exp-title { color: var(--sbx-bad); }
.sbx-exp-body { font-size: 14px; line-height: 1.65; }
.sbx-exp-body > p { margin: 0 0 12px; }
.sbx-exp-body > p:last-child { margin-bottom: 0; }
.sbx-exp-body a { color: var(--sbx-accent); }
.sbx-exp-note { margin-top: 16px; padding: 12px 0 12px 14px; border-left: 2px solid var(--sbx-rule); color: var(--sbx-ink-soft); font-size: 13px; line-height: 1.6; }
.sbx-exp-note > p { margin: 0 0 10px; }
.sbx-exp-note > p:last-child { margin-bottom: 0; }`;

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
  accentSoft: '#eaeeff'
};

const DEFAULT_PRESETS = [
  { label: '{ x \u2208 \u2115 : x is even }', domain: 'N', join: 'and', conditions: [{ key: 'even' }] },
  { label: '{ x \u2208 \u2115 : x < 6 }', domain: 'N', join: 'and', conditions: [{ key: 'lt', a: 6 }] },
  { label: '{ x \u2208 \u2124 : x\u00b2 < 10 }', domain: 'Z', join: 'and', conditions: [{ key: 'sqlt', a: 10 }] },
  { label: '{ x \u2208 \u2115 : x is prime, x < 30 }', domain: 'N', join: 'and', conditions: [{ key: 'prime' }, { key: 'lt', a: 30 }] },
  { label: '{ x \u2208 \u2115 : 3 | x, x \u2264 30 }', domain: 'N', join: 'and', conditions: [{ key: 'div', a: 3 }, { key: 'le', a: 30 }] },
  { label: '{ x \u2208 \u2115 : x is even or x is prime }', domain: 'N', join: 'or', conditions: [{ key: 'even' }, { key: 'prime' }] },
  { label: '{ x \u2208 \u2115 : x < 4 and x > 9 }', domain: 'N', join: 'and', conditions: [{ key: 'lt', a: 4 }, { key: 'gt', a: 9 }] },
  { label: '{ x \u2208 \u2124 : x is a perfect square, x \u2264 25 }', domain: 'Z', join: 'and', conditions: [{ key: 'square' }, { key: 'le', a: 25 }] }
];

const DEFAULT_INTRO =
  'Set-builder notation is a filter: name a domain, state a condition, keep what passes. ' +
  'Build one below and watch each candidate get tested. The elements that survive are the roster form.';

// ============================================================================
// SECTION 7 - COMPONENT
// ============================================================================

export const SetBuilderExplorer = (props) => {
  const {
    initialDomain = 'N',
    initialConditions = [{ key: 'even', a: 2, b: 10 }, { key: 'lt', a: 20, b: 10 }],
    initialJoin = 'and',
    initialCustomSet = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10',
    domains: domainsProp = null,
    predicates: predicatesProp = null,
    presets: presetsProp = null,
    intro = DEFAULT_INTRO,
    showIntro = true,
    maxWidth = 1200,
    maxConditions = 4,
    theme: themeProp = null,
    explanations: explanationsProp = null,
    notes: notesProp = null,
    showExplanation = true,
    showExplanationId = false,
    showDomainPicker = true,
    showPresets = true,
    showRoster = true,
    onChange = null,
    className = ''
  } = props;

  useInjectedStyles();

  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '');

  const theme = useMemo(() => ({ ...DEFAULT_THEME, ...(themeProp || {}) }), [themeProp]);
  const domains = domainsProp || DEFAULT_DOMAINS;
  const predicates = predicatesProp || DEFAULT_PREDICATES;
  const presets = presetsProp || DEFAULT_PRESETS;
  const predicateKeys = useMemo(() => Object.keys(predicates), [predicates]);

  const [domainKey, setDomainKey] = useState(initialDomain);
  const [conditions, setConditions] = useState(
    () => initialConditions.map((c) => ({ key: c.key, a: c.a == null ? 2 : c.a, b: c.b == null ? 10 : c.b }))
  );
  const [join, setJoin] = useState(initialJoin);
  const [customText, setCustomText] = useState(initialCustomSet);
  const [picked, setPicked] = useState(null);

  const domain = domains[domainKey] || domains.N;

  // --- candidates -----------------------------------------------------------
  const candidates = useMemo(() => {
    if (domainKey === 'custom') return parseCustomSet(customText);
    return integerRange(domain.lo, domain.hi);
  }, [domainKey, customText, domain]);

  const members = useMemo(
    () => candidates.filter((x) => candidatePasses(x, conditions, predicates, join)),
    [candidates, conditions, predicates, join]
  );

  // Does the filter keep passing elements past the scanned window?
  const infinite = useMemo(() => {
    if (!domain.infinite) return false;
    for (let x = domain.hi + 1; x <= domain.hi + 300; x++) {
      if (candidatePasses(x, conditions, predicates, join)) return true;
    }
    return false;
  }, [domain, conditions, predicates, join]);

  const shown = useMemo(() => {
    if (domainKey === 'custom') return candidates;
    const from = domain.windowLo;
    const to = from + (domain.windowSize || 24) - 1;
    return candidates.filter((x) => x >= from && x <= to);
  }, [candidates, domainKey, domain]);

  // A pick from one domain is meaningless in another.
  useEffect(() => { setPicked(null); }, [domainKey]);

  // --- notation -------------------------------------------------------------
  const glue = join === 'or' ? ' \u2228 ' : ' \u2227 ';
  const glueRead = join === 'or' ? ' or ' : ' and ';

  const conditionSymbols = useMemo(
    () => conditions.map((c) => conditionText(c, predicates, 'sym')),
    [conditions, predicates]
  );

  const builderText = useMemo(
    () => '\\{x \\in ' + domain.symbol + ' : ' + conditionSymbols.join(glue) + '\\}',
    [domain, conditionSymbols, glue]
  );

  // --- serializer -----------------------------------------------------------
  const config = useMemo(() => ({
    domain: domainKey,
    conditions,
    join,
    members,
    infinite,
    builder: '{ x \u2208 ' + domain.symbol + ' : ' + conditionSymbols.join(glue) + ' }'
  }), [domainKey, conditions, join, members, infinite, domain, conditionSymbols, glue]);

  const onChangeRef = useRef(onChange);
  useEffect(() => { onChangeRef.current = onChange; }, [onChange]);
  useEffect(() => { if (onChangeRef.current) onChangeRef.current(config); }, [config]);

  // --- explanation ----------------------------------------------------------
  const explanation = useMemo(() => {
    const pickedInDomain = picked === null ? false : candidates.indexOf(picked) > -1;
    const results = picked === null ? [] : testCandidate(picked, conditions, predicates);
    const pickedPasses = picked === null ? false : candidatePasses(picked, conditions, predicates, join);
    const failedIndexes = results.map((r, i) => (r ? -1 : i)).filter((i) => i >= 0);

    const ctx = {
      domainKey,
      domainSymbol: domain.symbol,
      domainRead: domain.read,
      conditions,
      conditionCount: conditions.length,
      conditionSymbols,
      join,
      builderText,
      candidates,
      candidateCount: shown.length,
      members,
      memberCount: members.length,
      infinite,
      picked,
      pickedInDomain,
      pickedPasses,
      pickedResults: results,
      failedList: failedIndexes
        .map((i) => '$' + conditionSymbols[i] + '$')
        .join(' and '),
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
      isGood: id === 'candidate-passes',
      isBad: id === 'empty-result' || id === 'candidate-fails' || id === 'candidate-outside'
    };
  }, [picked, candidates, conditions, predicates, join, domainKey, domain,
    conditionSymbols, builderText, shown, members, infinite, explanationsProp, notesProp]);

  // --- handlers -------------------------------------------------------------
  const setConditionKey = useCallback((index, key) => {
    setConditions((prev) => prev.map((c, i) => (i === index ? { ...c, key } : c)));
  }, []);

  const setConditionArg = useCallback((index, field, value) => {
    const parsed = parseInt(value, 10);
    setConditions((prev) => prev.map((c, i) => (
      i === index ? { ...c, [field]: Number.isFinite(parsed) ? parsed : 0 } : c
    )));
  }, []);

  const addCondition = useCallback(() => {
    setConditions((prev) => (
      prev.length >= maxConditions ? prev : prev.concat({ key: predicateKeys[0], a: 10, b: 20 })
    ));
  }, [maxConditions, predicateKeys]);

  const removeCondition = useCallback((index) => {
    setConditions((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const applyPreset = useCallback((preset) => {
    setDomainKey(preset.domain);
    setJoin(preset.join || 'and');
    setConditions(preset.conditions.map((c) => ({ key: c.key, a: c.a == null ? 2 : c.a, b: c.b == null ? 10 : c.b })));
    setPicked(null);
  }, []);

  const rootStyle = {
    '--sbx-accent': theme.accent,
    '--sbx-accent-soft': theme.accentSoft,
    maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth
  };

  const pickedResults = picked === null ? [] : testCandidate(picked, conditions, predicates);
  const pickedPasses = picked === null ? false : candidatePasses(picked, conditions, predicates, join);

  return (
    <div className={'sbx-root ' + className} style={rootStyle}>

      {showIntro && intro && (
        typeof intro === 'string'
          ? <Content className="sbx-intro" text={intro} />
          : <div className="sbx-intro">{intro}</div>
      )}

      <div className="sbx-grid">

        {/* ---------------- the set ---------------- */}
        <div>
          <div className="sbx-panel">
            <div className="sbx-head">
              <h3>The set</h3>
              <span className="sbx-readout">
                {infinite
                  ? 'infinitely many members'
                  : (<><strong>{members.length}</strong>{' ' + (members.length === 1 ? 'member' : 'members')}</>)}
              </span>
            </div>

            <div className="sbx-builder">
              <div className="sbx-expr">
                {'{ '}
                <span className="sbx-var">x</span>
                {' \u2208 '}
                <span className="sbx-dom">{domain.symbol}</span>
                {conditions.length ? ' : ' : ' '}
                <span className="sbx-cond">{conditionSymbols.join(glue)}</span>
                {' }'}
              </div>
              <div className="sbx-read">
                {'the set of all x in ' + domain.read +
                  (conditions.length
                    ? ' such that ' + conditions.map((c) => conditionText(c, predicates, 'read')).join(glueRead)
                    : '')}
              </div>
            </div>

            <div className="sbx-body">
              <div className="sbx-chips">
                {shown.map((x) => (
                  <span
                    key={'chip' + x}
                    className={
                      'sbx-chip' +
                      (candidatePasses(x, conditions, predicates, join) ? ' sbx-pass' : '') +
                      (picked === x ? ' sbx-sel' : '')
                    }
                    role="button"
                    tabIndex={0}
                    onClick={() => setPicked((p) => (p === x ? null : x))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setPicked((p) => (p === x ? null : x));
                      }
                    }}
                  >
                    {x}
                  </span>
                ))}
                {domain.infinite && <span className="sbx-more">{'\u2026'}</span>}
              </div>

              <div className="sbx-why">
                {picked === null ? (
                  <span style={{ color: '#a3adb9', fontSize: 12.5 }}>
                    Click a candidate to see it tested against each condition.
                  </span>
                ) : (
                  <>
                    <span className="sbx-n">{picked}</span>
                    {' is '}
                    <strong style={{ color: pickedPasses ? 'var(--sbx-ok)' : 'var(--sbx-bad)' }}>
                      {pickedPasses ? 'in the set' : 'not in the set'}
                    </strong>
                    <ul>
                      {conditions.map((c, i) => (
                        <li key={'why' + i}>
                          <span className={'sbx-tick ' + (pickedResults[i] ? 'sbx-yes' : 'sbx-no')}>
                            {pickedResults[i] ? '\u2713' : '\u2717'}
                          </span>
                          <span className="sbx-m">
                            {conditionText(c, predicates, 'sym').replace(/x/g, String(picked))}
                          </span>
                          <span style={{ marginLeft: 'auto' }}>{pickedResults[i] ? 'true' : 'false'}</span>
                        </li>
                      ))}
                    </ul>
                    {conditions.length > 1 && (
                      <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--sbx-ink-soft)' }}>
                        Joined with <strong>{join}</strong>, so{' '}
                        {join === 'and' ? 'every condition has to hold' : 'at least one has to hold'}.
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {showRoster && (
            <div className="sbx-panel">
              <div className="sbx-head"><h3>Roster form</h3></div>
              <div className="sbx-body">
                <div className="sbx-roster">
                  {!members.length
                    ? <span className="sbx-muted">{'\u2205'}</span>
                    : infinite
                      ? '{ ' + members.slice(0, 10).join(', ') + ', \u2026 }'
                      : '{ ' + members.join(', ') + ' }'}
                </div>
                <p className="sbx-hint">
                  {!members.length
                    ? 'No candidate passes, so the set is empty. The empty set is still a set.'
                    : infinite
                      ? 'This set is infinite, so roster form can only be suggested with an ellipsis. Set-builder notation describes it exactly; roster form cannot.'
                      : 'Finite, so roster form is exact. Both notations describe the same set.'}
                </p>
              </div>
            </div>
          )}

          {showExplanation && (
            <div className="sbx-panel">
              <div className={
                'sbx-exp' +
                (explanation.isGood ? ' sbx-state-ok' : '') +
                (explanation.isBad ? ' sbx-state-bad' : '')
              }>
                {showExplanationId && <span className="sbx-exp-tag">{explanation.id}</span>}
                <h4 className="sbx-exp-title">{explanation.title}</h4>
                <Content className="sbx-exp-body" text={explanation.body} />
                {explanation.note && <Content className="sbx-exp-note" text={explanation.note} />}
              </div>
            </div>
          )}
        </div>

        {/* ---------------- controls ---------------- */}
        <div>
          {showDomainPicker && (
            <div className="sbx-panel">
              <div className="sbx-head"><h3>Domain</h3></div>
              <div className="sbx-body">
                <div className="sbx-seg" role="group" aria-label="Domain">
                  {Object.keys(domains).map((key) => (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={domainKey === key}
                      onClick={() => setDomainKey(key)}
                    >
                      {domains[key].label}
                    </button>
                  ))}
                </div>

                {domainKey === 'custom' && (
                  <input
                    className="sbx-text"
                    style={{ marginTop: 10 }}
                    value={customText}
                    spellCheck={false}
                    aria-label="Elements of the finite domain"
                    onChange={(e) => { setCustomText(e.target.value); setPicked(null); }}
                  />
                )}

                <p className="sbx-hint">
                  Every set-builder expression needs a domain. Without one, &quot;all x such
                  that&hellip;&quot; is not a set &mdash; that assumption is what Russell&apos;s
                  paradox breaks.
                </p>
              </div>
            </div>
          )}

          <div className="sbx-panel">
            <div className="sbx-head">
              <h3>Conditions</h3>
              <button
                type="button"
                className="sbx-btn"
                onClick={addCondition}
                disabled={conditions.length >= maxConditions}
              >
                Add
              </button>
            </div>
            <div className="sbx-body">
              {conditions.length > 1 && (
                <div className="sbx-join">
                  <span>Join with</span>
                  <div className="sbx-seg" role="group" aria-label="Join">
                    {['and', 'or'].map((j) => (
                      <button key={j} type="button" aria-pressed={join === j} onClick={() => setJoin(j)}>
                        {j}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {conditions.map((c, i) => {
                const p = predicates[c.key] || {};
                return (
                  <div className="sbx-cond-row" key={'cond' + i}>
                    <select
                      value={c.key}
                      aria-label={'Condition ' + (i + 1)}
                      onChange={(e) => setConditionKey(i, e.target.value)}
                    >
                      {predicateKeys.map((key) => (
                        <option key={key} value={key}>{predicates[key].label}</option>
                      ))}
                    </select>
                    {p.args >= 1 && (
                      <input
                        type="number"
                        value={c.a}
                        aria-label="First parameter"
                        onChange={(e) => setConditionArg(i, 'a', e.target.value)}
                      />
                    )}
                    {p.args >= 2 && (
                      <input
                        type="number"
                        value={c.b}
                        aria-label="Second parameter"
                        onChange={(e) => setConditionArg(i, 'b', e.target.value)}
                      />
                    )}
                    {conditions.length > 1 && (
                      <button
                        type="button"
                        className="sbx-x"
                        aria-label={'Remove condition ' + (i + 1)}
                        onClick={() => removeCondition(i)}
                      >
                        &times;
                      </button>
                    )}
                  </div>
                );
              })}

              {!conditions.length && (
                <p className="sbx-hint" style={{ margin: 0 }}>
                  No condition, so the set is the whole domain. Add one.
                </p>
              )}
            </div>
          </div>

          {showPresets && presets.length > 0 && (
            <div className="sbx-panel">
              <div className="sbx-head"><h3>Examples</h3></div>
              <div className="sbx-body">
                <div className="sbx-presets">
                  {presets.map((p, i) => (
                    <button key={'preset' + i} type="button" onClick={() => applyPreset(p)}>
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SetBuilderExplorer;