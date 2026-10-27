/*
  DecisionMaker.jsx  (single file)

  A static decision infographic: questions -> answers -> outcomes, shown in
  one of six views. The reader can switch views from the card header; props
  only set the starting view.

  ------------------------------------------------------------------
  PROPS
  ------------------------------------------------------------------
  data       required, see below
  variant    starting view: 'ladder' | 'tree' | 'board' | 'table' | 'rules'
             (also accepts 'treeH' / 'treeV').            default 'ladder'
  direction  'horizontal' | 'vertical' — tree direction when variant='tree'
                                                          default 'horizontal'
  switcher   show the reader's view switch                default true
  views      views the switch may offer, in display order
             default ['ladder', 'treeH', 'treeV', 'board', 'table', 'rules']
  theme      partial theme, merged over DEFAULT_THEME (exported)

  Which views are actually offered:
    ladder  only when the data is a chain (each question has at most one
            answer that leads to another question)
    board   only when the data branches and the first question has 2-4 answers
    table   only when there are at most 6 questions
    treeH / treeV / rules   always
  A view that does not fit the card's current width is disabled. Rules
  always fits, so on narrow screens the component falls back to it.

  ------------------------------------------------------------------
  DATA
  ------------------------------------------------------------------
  {
    header?: { kicker?, title, lede? },
    first?:  [ { label, text } ],     // "always do first" banners, above the view
    last?:   [ { label, text } ],     // "always do after" banners, below the view
    start:   'nodeId',
    nodes: {
      nodeId: {
        question: string,
        hint?:    string,
        answers:  [ { label: string, to: 'nodeId' | 'outcomeId' } ]
      }
    },
    outcomes: {
      outcomeId: {
        title:    string,
        action?:  string,              // one line: what to do
        example?: string,
        link?:    { label, href },     // where the method is taught
        tone?:    'go' | 'done' | 'stop'
                  // go (default) blue, done navy (the answer itself),
                  // stop gold (dead end / special case)
      }
    },
    labels?: { ... }                   // merged over DEFAULT_LABELS (exported)
  }

  All text goes through processContent ($math$, **bold**, links).
*/

'use client';

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;


/* ================================================================== */
/*  styles                                                            */
/* ================================================================== */

const CSS = `
.dm-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--dm-ink);
  line-height: 1.45;
}
.dm-root *, .dm-root *::before, .dm-root *::after { box-sizing: border-box; }
.dm-root .dm-inline br { display: none; }
.dm-root .dm-inline p  { margin: 0; display: inline; }

/* ---------------- card + header ---------------- */
.dm-root .dm-card {
  background: var(--dm-panel);
  border: 1.5px solid var(--dm-box);
  border-radius: 12px;
  overflow: hidden;
}
.dm-root .dm-head {
  display: flex; align-items: flex-start; gap: 16px; flex-wrap: wrap;
  padding: 14px 20px 12px;
  border-bottom: 1.5px solid var(--dm-box);
}
.dm-root .dm-head-main { flex: 1 1 280px; min-width: 0; }
.dm-root .dm-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--dm-blue);
}
.dm-root .dm-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--dm-title); letter-spacing: -0.01em; }
.dm-root .dm-lede  { margin-top: 3px; font-size: 12.5px; color: var(--dm-muted); }
.dm-root .dm-body  { padding: 16px 20px 18px; background: var(--dm-panel-softer); display: grid; gap: 12px; }

/* ---------------- view switch ---------------- */
.dm-root .dm-sw {
  display: inline-flex; flex-wrap: wrap; gap: 2px; padding: 3px;
  background: var(--dm-blue-softer);
  border: 1.5px solid var(--dm-box);
  border-radius: 9px;
}
.dm-root .dm-sw-b {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 5px 10px;
  border: none; border-radius: 6px; cursor: pointer;
  background: transparent; color: var(--dm-muted);
  font: 600 11.5px 'Inter', system-ui, sans-serif;
  transition: background 0.15s, color 0.15s, box-shadow 0.15s;
}
.dm-root .dm-sw-b svg { fill: currentColor; stroke: currentColor; flex: none; }
.dm-root .dm-sw-b:hover { color: var(--dm-blue); }
.dm-root .dm-sw-b.dm-on { background: var(--dm-panel); color: var(--dm-title); box-shadow: 0 1px 3px rgba(15, 23, 42, 0.15); }
.dm-root .dm-sw-b.dm-on svg { color: var(--dm-blue); }
.dm-root .dm-sw-b:disabled { opacity: 0.35; cursor: not-allowed; }
.dm-root .dm-sw-b:disabled:hover { color: var(--dm-muted); }

/* ---------------- banners ---------------- */
.dm-root .dm-banner {
  display: flex; align-items: baseline; gap: 10px;
  padding: 8px 12px;
  background: var(--dm-panel);
  border: 1.5px solid var(--dm-box);
  border-left: 4px solid var(--dm-navy);
  border-radius: 8px;
  font-size: 12.5px;
}
.dm-root .dm-banner-l {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--dm-navy); white-space: nowrap;
}

/* ---------------- question + outcome boxes ---------------- */
.dm-root .dm-q {
  background: var(--dm-panel);
  border: 1.5px solid var(--dm-box);
  border-radius: 8px;
  padding: 7px 12px;
  font-size: 13px; font-weight: 600; color: var(--dm-ink);
}
.dm-root .dm-hint { display: block; font-size: 11.5px; font-weight: 400; color: var(--dm-muted); margin-top: 2px; }
.dm-root .dm-root-tag {
  display: block; margin-bottom: 2px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--dm-blue);
}
.dm-root .dm-o {
  background: var(--dm-panel);
  border: 1.5px solid var(--dm-blue);
  border-left-width: 4px;
  border-radius: 8px;
  padding: 6px 12px 7px;
}
.dm-root .dm-o.dm-done { border-color: var(--dm-navy); }
.dm-root .dm-o.dm-stop { border-color: var(--dm-gold); }
.dm-root .dm-o-t { font-size: 13px; font-weight: 700; color: var(--dm-title); }
.dm-root .dm-o.dm-stop .dm-o-t { color: var(--dm-gold-ink); }
.dm-root .dm-o-a { font-size: 12px; color: var(--dm-ink); margin-top: 2px; }
.dm-root .dm-o-x { font-size: 11.5px; color: var(--dm-muted); margin-top: 2px; }
.dm-root .dm-o-l {
  display: inline-block; margin-left: 8px; white-space: nowrap;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 600; letter-spacing: 0.04em;
  color: var(--dm-blue); text-decoration: none;
}
.dm-root .dm-o-l:hover { text-decoration: underline; }
.dm-root .dm-o.dm-compact { padding: 5px 10px 6px; }
.dm-root .dm-o.dm-compact .dm-o-t { font-size: 12.5px; }
.dm-root .dm-o.dm-compact .dm-o-a { font-size: 11.5px; }
.dm-root .dm-o.dm-compact .dm-o-l { display: block; margin: 3px 0 0; white-space: normal; }

.dm-root .dm-pill {
  display: inline-block; padding: 1px 8px; border-radius: 999px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
  background: var(--dm-blue-soft); color: var(--dm-blue); white-space: nowrap;
}
.dm-root .dm-pill.dm-no { background: var(--dm-line); color: #475569; }
.dm-root .dm-ans {
  display: inline-block; padding: 1px 8px; border-radius: 999px;
  background: var(--dm-blue-soft); color: var(--dm-title);
  font-size: 11.5px; font-weight: 600; white-space: nowrap;
}

/* ---------------- ladder ---------------- */
.dm-root .dm-rung { display: grid; grid-template-columns: 30px minmax(0, 1fr) 64px minmax(0, 1.15fr); align-items: center; }
.dm-root .dm-num {
  width: 26px; height: 26px; border-radius: 50%;
  background: var(--dm-navy); color: #ffffff;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px; font-weight: 700; line-height: 26px; text-align: center;
}
.dm-root .dm-yes { position: relative; height: 100%; display: flex; align-items: center; justify-content: center; }
.dm-root .dm-yes::before { content: ''; position: absolute; left: 0; right: 6px; top: 50%; height: 1.5px; background: var(--dm-blue); }
.dm-root .dm-yes::after {
  content: ''; position: absolute; right: 0; top: 50%; transform: translateY(-50%);
  border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 7px solid var(--dm-blue);
}
.dm-root .dm-yes .dm-pill { position: relative; z-index: 1; }
.dm-root .dm-down { display: grid; grid-template-columns: 30px 1fr; height: 16px; align-items: center; }
.dm-root .dm-down-rail { justify-self: center; width: 1.5px; height: 100%; background: var(--dm-edge); position: relative; }
.dm-root .dm-down-rail::after {
  content: ''; position: absolute; bottom: -1px; left: 50%; transform: translateX(-50%);
  border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 6px solid var(--dm-edge);
}
.dm-root .dm-down .dm-pill { justify-self: start; margin-left: 10px; }
.dm-root .dm-multi { display: grid; gap: 6px; }
.dm-root .dm-multi-row { display: grid; grid-template-columns: auto 1fr; gap: 8px; align-items: center; }

/* ---------------- trees (shared) ---------------- */
.dm-root .dm-tree-wrap { overflow-x: auto; }
.dm-root .dm-tree { position: relative; margin: 0 auto; }
.dm-root .dm-tree svg { position: absolute; inset: 0; overflow: visible; }
.dm-root .dm-edge { fill: none; stroke: var(--dm-edge); stroke-width: 1.5; transition: stroke 0.15s, stroke-width 0.15s; }
.dm-root .dm-edge.dm-on { stroke: var(--dm-blue); stroke-width: 2.2; }
.dm-root .dm-tlabel {
  position: absolute; transform: translate(-50%, -50%);
  padding: 1px 7px; border-radius: 999px;
  background: var(--dm-panel); border: 1.5px solid var(--dm-box);
  font-size: 11px; font-weight: 600; color: #334155; white-space: nowrap;
  transition: border-color 0.15s, color 0.15s;
}
.dm-root .dm-tlabel.dm-on { border-color: var(--dm-blue); color: var(--dm-blue); }
.dm-root .dm-tnode { position: absolute; transition: opacity 0.15s; }
.dm-root .dm-tree.dm-has-hl .dm-tnode:not(.dm-on) { opacity: 0.35; }
.dm-root .dm-tnode.dm-on .dm-q { border-color: var(--dm-blue); }

/* horizontal tree */
.dm-root .dm-htree .dm-tnode { transform: translateY(-50%); }

/* vertical tree */
.dm-root .dm-vtree .dm-tnode > .dm-q {
  height: 100%;
  display: flex; flex-direction: column; justify-content: center;
  text-align: center; font-size: 12.5px; padding: 5px 10px;
}
.dm-root .dm-vtree .dm-vleaf .dm-o { border-left-width: 1.5px; border-top-width: 4px; padding: 6px 9px 8px; }
.dm-root .dm-vtree .dm-vleaf .dm-o-t { font-size: 12.5px; line-height: 1.3; }
.dm-root .dm-vtree .dm-vleaf .dm-o-a { font-size: 11.5px; line-height: 1.4; }
.dm-root .dm-vtree .dm-vleaf .dm-o-l { display: block; margin: 4px 0 0; white-space: normal; }

/* ---------------- board ---------------- */
.dm-root .dm-board-top { display: flex; justify-content: center; }
.dm-root .dm-board-top .dm-q { max-width: 320px; text-align: center; }
.dm-root .dm-board-bus { display: grid; gap: 12px; position: relative; height: 22px; }
.dm-root .dm-board-bus::before {
  content: ''; position: absolute; top: 0; left: 50%; width: 1.5px; height: 10px;
  background: var(--dm-edge); transform: translateX(-50%);
}
.dm-root .dm-board-bus-line {
  position: absolute; top: 10px; height: 1.5px; background: var(--dm-edge);
}
.dm-root .dm-board-bus > div { position: relative; }
.dm-root .dm-board-bus > div::after {
  content: ''; position: absolute; top: 10px; left: 50%; width: 1.5px; height: 12px;
  background: var(--dm-edge); transform: translateX(-50%);
}
.dm-root .dm-board { display: grid; gap: 12px; align-items: start; }
.dm-root .dm-col {
  background: var(--dm-panel);
  border: 1.5px solid var(--dm-box);
  border-radius: 10px;
  overflow: hidden;
}
.dm-root .dm-col-h {
  display: flex; align-items: center; justify-content: center;
  padding: 7px 10px;
  background: var(--dm-blue-softer);
  border-bottom: 1.5px solid var(--dm-box);
}
.dm-root .dm-col-h .dm-ans { font-size: 12.5px; background: var(--dm-panel); border: 1.5px solid var(--dm-blue-soft); }
.dm-root .dm-col-b { padding: 10px; display: grid; gap: 10px; }
.dm-root .dm-col-q { font-size: 12px; font-weight: 600; color: var(--dm-muted); text-align: center; }
.dm-root .dm-mini { display: grid; gap: 5px; }
.dm-root .dm-mini + .dm-mini { padding-top: 10px; border-top: 1px dashed var(--dm-box); }

/* conditions (board + rules) */
.dm-root .dm-conds { display: flex; flex-wrap: wrap; gap: 4px 6px; align-items: center; font-size: 11.5px; color: var(--dm-muted); }
.dm-root .dm-cond { display: inline-flex; align-items: center; gap: 5px; }
.dm-root .dm-cond-sep { color: var(--dm-edge); }

/* ---------------- rules ---------------- */
.dm-root .dm-rules { display: grid; gap: 8px; }
.dm-root .dm-rule {
  display: grid; grid-template-columns: minmax(0, 1fr) 28px minmax(0, 1fr);
  align-items: center; gap: 0;
  background: var(--dm-panel);
  border: 1.5px solid var(--dm-box);
  border-radius: 10px;
  padding: 8px 10px 8px 12px;
}
.dm-root .dm-rule .dm-conds { font-size: 12px; }
.dm-root .dm-rule-arrow { text-align: center; color: var(--dm-blue); font-weight: 700; }
.dm-root .dm-rule-arrow::before { content: '\\2192'; }

/* ---------------- table ---------------- */
.dm-root .dm-table-wrap { overflow-x: auto; border: 1.5px solid var(--dm-box); border-radius: 10px; background: var(--dm-panel); }
.dm-root .dm-table { width: 100%; border-collapse: collapse; font-size: 12px; }
.dm-root .dm-table th {
  padding: 8px 10px;
  background: var(--dm-blue-softer);
  border-bottom: 1.5px solid var(--dm-box);
  font-weight: 600; color: var(--dm-title); text-align: center; vertical-align: bottom;
}
.dm-root .dm-table th.dm-th-use {
  text-align: left;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--dm-blue);
}
.dm-root .dm-table td { padding: 7px 10px; border-top: 1px solid var(--dm-line); text-align: center; vertical-align: middle; }
.dm-root .dm-table tr:first-child td { border-top: none; }
.dm-root .dm-table td.dm-td-use { text-align: left; min-width: 220px; }
.dm-root .dm-table td + td { border-left: 1px solid var(--dm-line); }
.dm-root .dm-table .dm-na { color: var(--dm-edge); }
.dm-root .dm-table tbody tr:hover td { background: var(--dm-blue-softer); }

@media (max-width: 640px) {
  .dm-root .dm-body { padding: 12px; }
  .dm-root .dm-rule { grid-template-columns: 1fr; gap: 6px; }
  .dm-root .dm-rule-arrow { text-align: left; }
  .dm-root .dm-rule-arrow::before { content: '\\2193'; }
}
`;

/* ================================================================== */
/*  text, defaults, shared boxes, data helpers                        */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/*  text                                                               */
/* ------------------------------------------------------------------ */

function R({ t }) {
  if (t == null || t === '') return null;
  if (typeof t !== 'string') return <>{t}</>;
  return <span className="dm-inline">{processContent(t)}</span>;
}

/* ------------------------------------------------------------------ */
/*  defaults                                                           */
/* ------------------------------------------------------------------ */

const DEFAULT_LABELS = {
  view:     'View',
  ladder:   'Steps',
  treeH:    'Tree →',
  treeV:    'Tree ↓',
  board:    'Board',
  table:    'Table',
  rules:    'Rules',
  tooWide:  'Not enough room for this view here',
  start:    'Start',
  use:      'Use',
  notAsked: '—',
};

const DEFAULT_THEME = {
  panel:       '#ffffff',
  panelSofter: '#f8fafc',
  ink:         '#1e293b',
  title:       '#1e3a8a',
  muted:       '#64748b',
  line:        '#e2e8f0',
  box:         '#c7cedb',
  edge:        '#94a3b8',
  accent:      '#2563eb',
  accentSoft:  '#dbeafe',
  accentSofter:'#eff6ff',
  navy:        '#1e3a8a',
  warm:        '#ca8a04',
  warmInk:     '#a16207',
};

const cssVars = (t) => ({
  '--dm-panel':         t.panel,
  '--dm-panel-softer':  t.panelSofter,
  '--dm-ink':           t.ink,
  '--dm-title':         t.title,
  '--dm-muted':         t.muted,
  '--dm-line':          t.line,
  '--dm-box':           t.box,
  '--dm-edge':          t.edge,
  '--dm-blue':          t.accent,
  '--dm-blue-soft':     t.accentSoft,
  '--dm-blue-softer':   t.accentSofter,
  '--dm-navy':          t.navy,
  '--dm-gold':          t.warm,
  '--dm-gold-ink':      t.warmInk,
});

/* ------------------------------------------------------------------ */
/*  shared boxes                                                       */
/* ------------------------------------------------------------------ */

function Outcome({ o, compact }) {
  if (!o) return null;
  return (
    <div className={'dm-o' + (o.tone ? ' dm-' + o.tone : '') + (compact ? ' dm-compact' : '')}>
      <div className="dm-o-t"><R t={o.title} /></div>
      {(o.action || o.link) && (
        <div className="dm-o-a">
          <R t={o.action} />
          {o.link && (
            <a className="dm-o-l" href={o.link.href}>
              {'→ '}<R t={o.link.label} />
            </a>
          )}
        </div>
      )}
      {o.example && <div className="dm-o-x"><R t={o.example} /></div>}
    </div>
  );
}

function Banners({ items }) {
  if (!items || !items.length) return null;
  return items.map((b, i) => (
    <div className="dm-banner" key={i}>
      <span className="dm-banner-l"><R t={b.label} /></span>
      <span><R t={b.text} /></span>
    </div>
  ));
}

function Question({ node, isStart, labels }) {
  return (
    <div className="dm-q">
      {isStart && <span className="dm-root-tag"><R t={labels.start} /></span>}
      <R t={node.question} />
      {node.hint && <span className="dm-hint"><R t={node.hint} /></span>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  data helpers                                                       */
/* ------------------------------------------------------------------ */

const isNode = (data, id) => Boolean(data.nodes && data.nodes[id]);
const isOutcome = (data, id) => Boolean(data.outcomes && data.outcomes[id]);

/* a chain: every question has at most one answer that leads to another question */
function isChain(data) {
  return Object.values(data.nodes || {}).every(
    (n) => (n.answers || []).filter((a) => isNode(data, a.to)).length <= 1
  );
}

/* every route from `from` to an outcome: [{ steps: [{ node, answer }], outcome }] */
function flattenPaths(data, from = data.start) {
  const out = [];
  const walk = (id, steps, seen) => {
    if (isOutcome(data, id)) { out.push({ steps, outcome: id }); return; }
    if (!isNode(data, id) || seen.has(id)) return;
    const next = new Set(seen); next.add(id);
    data.nodes[id].answers.forEach((a) => walk(a.to, [...steps, { node: id, answer: a }], next));
  };
  walk(from, [], new Set());
  return out;
}

/* question ids in breadth-first order from the start */
function questionOrder(data) {
  const order = [];
  const seen = new Set();
  const queue = [data.start];
  while (queue.length) {
    const id = queue.shift();
    if (!isNode(data, id) || seen.has(id)) continue;
    seen.add(id);
    order.push(id);
    data.nodes[id].answers.forEach((a) => queue.push(a.to));
  }
  return order;
}

/* child -> parent, for path highlighting in the trees */
function parentMap(data) {
  const p = {};
  Object.entries(data.nodes || {}).forEach(([id, n]) => {
    n.answers.forEach((a) => { if (!(a.to in p)) p[a.to] = id; });
  });
  return p;
}

/* ================================================================== */
/*  layout: tree geometry, valid views, minimum widths                */
/* ================================================================== */

/* ---------------- tree, left to right ---------------- */

const H = { QW: 164, OW: 290, GX: 52, SLOT: 80 };

function layoutTreeH(data) {
  const pos = {};
  const edges = [];
  let leaf = 0;
  let maxDepth = 0;
  const walk = (id, depth) => {
    if (isOutcome(data, id)) {
      pos[id] = { leaf: true, depth, y: leaf++ * H.SLOT + H.SLOT / 2 };
      return pos[id].y;
    }
    maxDepth = Math.max(maxDepth, depth);
    const ys = data.nodes[id].answers.map((a) => {
      edges.push({ from: id, to: a.to, label: a.label });
      return walk(a.to, depth + 1);
    });
    pos[id] = { leaf: false, depth, y: (Math.min(...ys) + Math.max(...ys)) / 2 };
    return pos[id].y;
  };
  if (isNode(data, data.start)) walk(data.start, 0);
  const outX = (maxDepth + 1) * (H.QW + H.GX);
  Object.values(pos).forEach((p) => {
    p.x = p.leaf ? outX : p.depth * (H.QW + H.GX);
    p.w = p.leaf ? H.OW : H.QW;
  });
  return { pos, edges, W: outX + H.OW, H: leaf * H.SLOT };
}

/* ---------------- tree, top to bottom ---------------- */

const V = { QW: 168, LEAF: 132, LGAP: 10, ROWH: 104, QH: 50 };

function layoutTreeV(data) {
  const pos = {};
  const edges = [];
  let leaf = 0;
  let maxDepth = 0;
  const walk = (id, depth) => {
    if (isOutcome(data, id)) {
      pos[id] = { leaf: true, depth, x: leaf++ * (V.LEAF + V.LGAP) + V.LEAF / 2 };
      return pos[id].x;
    }
    maxDepth = Math.max(maxDepth, depth);
    const xs = data.nodes[id].answers.map((a) => {
      edges.push({ from: id, to: a.to, label: a.label });
      return walk(a.to, depth + 1);
    });
    pos[id] = { leaf: false, depth, x: (Math.min(...xs) + Math.max(...xs)) / 2 };
    return pos[id].x;
  };
  if (isNode(data, data.start)) walk(data.start, 0);
  const outTop = (maxDepth + 1) * V.ROWH;
  Object.values(pos).forEach((p) => {
    p.top = p.leaf ? outTop : p.depth * V.ROWH;
    p.w = p.leaf ? V.LEAF : V.QW;
  });
  return { pos, edges, W: Math.max(leaf * (V.LEAF + V.LGAP) - V.LGAP, V.QW), outTop };
}

/* ---------------- which views make sense for the data ---------------- */

const ALL_VIEWS = ['ladder', 'treeH', 'treeV', 'board', 'table', 'rules'];

const MAX_TABLE_QUESTIONS = 6;

function validViews(data) {
  const chain = isChain(data);
  const root = isNode(data, data.start) ? data.nodes[data.start] : null;
  const rootFan = root ? root.answers.length : 0;
  const qCount = questionOrder(data).length;
  return {
    ladder: chain,
    treeH:  true,
    treeV:  true,
    board:  !chain && rootFan >= 2 && rootFan <= 4,
    table:  qCount <= MAX_TABLE_QUESTIONS,
    rules:  true,
  };
}

/* minimum card-body width each view needs */
function minWidths(data) {
  const root = isNode(data, data.start) ? data.nodes[data.start] : null;
  const qCount = questionOrder(data).length;
  return {
    ladder: 560,
    treeH:  layoutTreeH(data).W,
    treeV:  layoutTreeV(data).W,
    board:  (root ? root.answers.length : 1) * 230,
    table:  qCount * 120 + 280,
    rules:  0,
  };
}

/* ================================================================== */
/*  view: ladder (Steps)                                              */
/* ================================================================== */

function Ladder({ data, labels }) {
  const rungs = [];
  const seen = new Set();
  let id = data.start;
  while (isNode(data, id) && !seen.has(id)) {
    seen.add(id);
    const n = data.nodes[id];
    const cont = n.answers.find((a) => isNode(data, a.to));
    const exits = n.answers.filter((a) => a !== cont && isOutcome(data, a.to));
    rungs.push({ id, n, cont, exits });
    id = cont ? cont.to : null;
  }

  return (
    <div className="dm-ladder">
      {rungs.map((r, i) => (
        <React.Fragment key={r.id}>
          <div className="dm-rung">
            <div className="dm-num">{i + 1}</div>
            <Question node={r.n} isStart={false} labels={labels} />
            {r.exits.length === 1 ? (
              <>
                <div className="dm-yes"><span className="dm-pill"><R t={r.exits[0].label} /></span></div>
                <Outcome o={data.outcomes[r.exits[0].to]} />
              </>
            ) : (
              <>
                <div className="dm-yes" />
                <div className="dm-multi">
                  {r.exits.map((e, k) => (
                    <div className="dm-multi-row" key={k}>
                      <span className="dm-pill"><R t={e.label} /></span>
                      <Outcome o={data.outcomes[e.to]} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          {r.cont && (
            <div className="dm-down">
              <div className="dm-down-rail" />
              <span className="dm-pill dm-no"><R t={r.cont.label} /></span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  view: tree, left to right                                         */
/* ================================================================== */

function TreeH({ data, labels }) {
  const L = useMemo(() => layoutTreeH(data), [data]);
  const parents = useMemo(() => parentMap(data), [data]);
  const [hl, setHl] = useState(null);

  const onPath = new Set();
  for (let c = hl; c; c = parents[c]) onPath.add(c);
  const edgeOn = (e) => onPath.has(e.from) && onPath.has(e.to);

  return (
    <div className="dm-tree-wrap">
      <div className={'dm-tree dm-htree' + (hl ? ' dm-has-hl' : '')} style={{ width: L.W, height: L.H }}>
        <svg width={L.W} height={L.H} aria-hidden="true">
          {L.edges.map((e, i) => {
            const a = L.pos[e.from];
            const b = L.pos[e.to];
            const x1 = a.x + a.w, y1 = a.y, x2 = b.x, y2 = b.y, xm = x1 + 18;
            const r = Math.min(8, Math.abs(y2 - y1) / 2);
            const dir = y2 > y1 ? 1 : -1;
            const d = Math.abs(y2 - y1) < 1
              ? `M${x1} ${y1} H${x2}`
              : `M${x1} ${y1} H${xm - r} Q${xm} ${y1} ${xm} ${y1 + dir * r} V${y2 - dir * r} Q${xm} ${y2} ${xm + r} ${y2} H${x2}`;
            return <path key={i} className={'dm-edge' + (edgeOn(e) ? ' dm-on' : '')} d={d} />;
          })}
        </svg>

        {L.edges.map((e, i) => {
          const a = L.pos[e.from];
          const b = L.pos[e.to];
          const lx = (a.x + a.w + 18 + b.x) / 2;
          return (
            <span key={'l' + i} className={'dm-tlabel' + (edgeOn(e) ? ' dm-on' : '')} style={{ left: lx, top: b.y }}>
              <R t={e.label} />
            </span>
          );
        })}

        {Object.entries(L.pos).map(([id, p]) => (
          <div
            key={id}
            className={'dm-tnode' + (onPath.has(id) ? ' dm-on' : '')}
            style={{ left: p.x, top: p.y, width: p.w }}
            onMouseEnter={() => setHl(id)}
            onMouseLeave={() => setHl(null)}
          >
            {p.leaf
              ? <Outcome o={data.outcomes[id]} />
              : <Question node={data.nodes[id]} isStart={id === data.start} labels={labels} />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  view: tree, top to bottom                                         */
/* ================================================================== */

function TreeV({ data, labels }) {
  const L = useMemo(() => layoutTreeV(data), [data]);
  const parents = useMemo(() => parentMap(data), [data]);
  const [hl, setHl] = useState(null);
  const [outH, setOutH] = useState(110);
  const ref = useRef(null);

  /* the outcome row is content-sized: measure it so the card height is right */
  useIsoLayoutEffect(() => {
    const measure = () => {
      if (!ref.current) return;
      const hs = [...ref.current.querySelectorAll('.dm-vleaf')].map((el) => el.offsetHeight);
      if (hs.length) setOutH(Math.max(...hs));
    };
    measure();
    let cancelled = false;
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { if (!cancelled) measure(); });
    }
    return () => { cancelled = true; };
  }, [data]);

  const onPath = new Set();
  for (let c = hl; c; c = parents[c]) onPath.add(c);
  const edgeOn = (e) => onPath.has(e.from) && onPath.has(e.to);
  const H = L.outTop + outH;

  return (
    <div className="dm-tree-wrap">
      <div ref={ref} className={'dm-tree dm-vtree' + (hl ? ' dm-has-hl' : '')} style={{ width: L.W, height: H }}>
        <svg width={L.W} height={H} aria-hidden="true">
          {L.edges.map((e, i) => {
            const a = L.pos[e.from];
            const b = L.pos[e.to];
            const x1 = a.x, y1 = a.top + V.QH, x2 = b.x, y2 = b.top, ym = y1 + 18;
            const r = Math.min(8, Math.abs(x2 - x1) / 2);
            const dir = x2 > x1 ? 1 : -1;
            const d = Math.abs(x2 - x1) < 1
              ? `M${x1} ${y1} V${y2}`
              : `M${x1} ${y1} V${ym - r} Q${x1} ${ym} ${x1 + dir * r} ${ym} H${x2 - dir * r} Q${x2} ${ym} ${x2} ${ym + r} V${y2}`;
            return <path key={i} className={'dm-edge' + (edgeOn(e) ? ' dm-on' : '')} d={d} />;
          })}
        </svg>

        {L.edges.map((e, i) => {
          const b = L.pos[e.to];
          return (
            <span key={'l' + i} className={'dm-tlabel' + (edgeOn(e) ? ' dm-on' : '')} style={{ left: b.x, top: b.top - 13 }}>
              <R t={e.label} />
            </span>
          );
        })}

        {Object.entries(L.pos).map(([id, p]) => (
          <div
            key={id}
            className={'dm-tnode' + (p.leaf ? ' dm-vleaf' : '') + (onPath.has(id) ? ' dm-on' : '')}
            style={{ left: p.x - p.w / 2, top: p.top, width: p.w, height: p.leaf ? undefined : V.QH }}
            onMouseEnter={() => setHl(id)}
            onMouseLeave={() => setHl(null)}
          >
            {p.leaf
              ? <Outcome o={data.outcomes[id]} />
              : <Question node={data.nodes[id]} isStart={id === data.start} labels={labels} />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  conditions (used by board + rules)                                */
/* ================================================================== */

function Conditions({ data, steps }) {
  return (
    <div className="dm-conds">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="dm-cond-sep">{'·'}</span>}
          <span className="dm-cond">
            <R t={data.nodes[s.node].question} />
            <span className="dm-ans"><R t={s.answer.label} /></span>
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  view: board                                                       */
/* ================================================================== */

function Board({ data, labels }) {
  const root = data.nodes[data.start];
  const n = root.answers.length;
  const cols = `repeat(${n}, minmax(0, 1fr))`;
  const edge = `calc(${100 / (2 * n)}% - ${(12 * (n - 1)) / (2 * n)}px)`;

  return (
    <div className="dm-boardview">
      <div className="dm-board-top">
        <Question node={root} isStart labels={labels} />
      </div>

      <div className="dm-board-bus" style={{ gridTemplateColumns: cols }}>
        <span className="dm-board-bus-line" style={{ left: edge, right: edge }} />
        {root.answers.map((a, i) => <div key={i} />)}
      </div>

      <div className="dm-board" style={{ gridTemplateColumns: cols }}>
        {root.answers.map((a, i) => (
          <div className="dm-col" key={i}>
            <div className="dm-col-h"><span className="dm-ans"><R t={a.label} /></span></div>
            <div className="dm-col-b">
              {isOutcome(data, a.to) ? (
                <Outcome o={data.outcomes[a.to]} compact />
              ) : (
                flattenPaths(data, a.to).map((p, k) => (
                  <div className="dm-mini" key={k}>
                    <Conditions data={data} steps={p.steps} />
                    <Outcome o={data.outcomes[p.outcome]} compact />
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  view: table                                                       */
/* ================================================================== */

function Table({ data, labels }) {
  const qs = questionOrder(data);
  const paths = flattenPaths(data);

  return (
    <div className="dm-table-wrap">
      <table className="dm-table">
        <thead>
          <tr>
            {qs.map((id) => <th key={id}><R t={data.nodes[id].question} /></th>)}
            <th className="dm-th-use"><R t={labels.use} /></th>
          </tr>
        </thead>
        <tbody>
          {paths.map((p, i) => {
            const byNode = Object.fromEntries(p.steps.map((s) => [s.node, s.answer]));
            return (
              <tr key={i}>
                {qs.map((id) => (
                  <td key={id}>
                    {byNode[id]
                      ? <span className="dm-ans"><R t={byNode[id].label} /></span>
                      : <span className="dm-na"><R t={labels.notAsked} /></span>}
                  </td>
                ))}
                <td className="dm-td-use"><Outcome o={data.outcomes[p.outcome]} compact /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ================================================================== */
/*  view: rules                                                       */
/* ================================================================== */

function Rules({ data }) {
  const paths = flattenPaths(data);
  return (
    <div className="dm-rules">
      {paths.map((p, i) => (
        <div className="dm-rule" key={i}>
          <Conditions data={data} steps={p.steps} />
          <span className="dm-rule-arrow" aria-hidden="true" />
          <Outcome o={data.outcomes[p.outcome]} compact />
        </div>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  view switch                                                       */
/* ================================================================== */

const ICONS = {
  ladder: (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <rect x="1" y="2" width="6" height="3" rx="1" /><rect x="1" y="7" width="6" height="3" rx="1" /><rect x="1" y="12" width="6" height="3" rx="1" />
      <rect x="10" y="2" width="5" height="3" rx="1" /><rect x="10" y="7" width="5" height="3" rx="1" /><rect x="10" y="12" width="5" height="3" rx="1" />
    </svg>
  ),
  treeH: (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <rect x="1" y="6.5" width="4" height="3" rx="1" />
      <rect x="11" y="1.5" width="4" height="3" rx="1" /><rect x="11" y="6.5" width="4" height="3" rx="1" /><rect x="11" y="11.5" width="4" height="3" rx="1" />
      <path d="M5 8h3M8 3v10M8 3h3M8 8h3M8 13h3" fill="none" strokeWidth="1.3" />
    </svg>
  ),
  treeV: (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <rect x="6.5" y="1" width="3" height="4" rx="1" />
      <rect x="1.5" y="11" width="3" height="4" rx="1" /><rect x="6.5" y="11" width="3" height="4" rx="1" /><rect x="11.5" y="11" width="3" height="4" rx="1" />
      <path d="M8 5v3M3 8h10M3 8v3M8 8v3M13 8v3" fill="none" strokeWidth="1.3" />
    </svg>
  ),
  board: (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <rect x="5" y="1" width="6" height="3" rx="1" />
      <rect x="1" y="6" width="4" height="9" rx="1" /><rect x="6" y="6" width="4" height="9" rx="1" /><rect x="11" y="6" width="4" height="9" rx="1" />
    </svg>
  ),
  table: (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path d="M1.5 2.5h13v11h-13zM1.5 6h13M1.5 9.5h13M6 2.5v11M10.5 2.5v11" fill="none" strokeWidth="1.3" />
    </svg>
  ),
  rules: (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <rect x="1" y="2" width="14" height="3" rx="1" /><rect x="1" y="6.5" width="14" height="3" rx="1" /><rect x="1" y="11" width="14" height="3" rx="1" />
    </svg>
  ),
};

function ViewSwitch({ views, view, onChange, labels, disabled }) {
  return (
    <div className="dm-sw" role="tablist" aria-label={typeof labels.view === 'string' ? labels.view : undefined}>
      {views.map((v) => {
        const off = disabled.has(v);
        return (
          <button
            key={v}
            type="button"
            role="tab"
            aria-selected={view === v}
            disabled={off}
            className={'dm-sw-b' + (view === v ? ' dm-on' : '')}
            onClick={() => onChange(v)}
            title={off ? labels.tooWide : undefined}
          >
            {ICONS[v]}
            <span><R t={labels[v]} /></span>
          </button>
        );
      })}
    </div>
  );
}

/* ================================================================== */
/*  public component                                                  */
/* ================================================================== */

const VIEW_COMPONENTS = { ladder: Ladder, treeH: TreeH, treeV: TreeV, board: Board, table: Table, rules: Rules };

function toViewKey(variant, direction) {
  if (variant === 'tree') return direction === 'vertical' ? 'treeV' : 'treeH';
  return VIEW_COMPONENTS[variant] ? variant : 'ladder';
}

function DecisionMaker({
  data,
  variant = 'ladder',
  direction = 'horizontal',
  switcher = true,
  views = ALL_VIEWS,
  theme,
}) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const labels = { ...DEFAULT_LABELS, ...(data.labels || {}) };

  /* views that make sense for this data, in the requested order */
  const valid = useMemo(() => validViews(data), [data]);
  const widths = useMemo(() => minWidths(data), [data]);
  const offered = views.filter((v) => VIEW_COMPONENTS[v] && valid[v]);

  /* measure the real body width; views wider than it are disabled */
  const bodyRef = useRef(null);
  const [avail, setAvail] = useState(Infinity);
  useIsoLayoutEffect(() => {
    const el = bodyRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const measure = () => {
      const cs = window.getComputedStyle(el);
      setAvail(el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const disabled = new Set(offered.filter((v) => widths[v] > avail));
  const usable = offered.filter((v) => !disabled.has(v));

  const [picked, setPicked] = useState(() => toViewKey(variant, direction));
  const view = usable.includes(picked) ? picked : (usable[0] || 'rules');
  const View = VIEW_COMPONENTS[view];
  const showSwitch = switcher && offered.length > 1;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="dm-root" style={cssVars(t)}>
        <div className="dm-card">
          {(data.header || showSwitch) && (
            <div className="dm-head">
              <div className="dm-head-main">
                {data.header && data.header.kicker && (
                  <div className="dm-kicker"><R t={data.header.kicker} /></div>
                )}
                {data.header && <h2 className="dm-title"><R t={data.header.title} /></h2>}
                {data.header && data.header.lede && (
                  <div className="dm-lede"><R t={data.header.lede} /></div>
                )}
              </div>
              {showSwitch && (
                <ViewSwitch
                  views={offered}
                  view={view}
                  onChange={setPicked}
                  labels={labels}
                  disabled={disabled}
                />
              )}
            </div>
          )}
          <div className="dm-body" ref={bodyRef}>
            <Banners items={data.first} />
            <View data={data} labels={labels} />
            <Banners items={data.last} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DecisionMaker;
export { DEFAULT_LABELS, DEFAULT_THEME, ALL_VIEWS };
