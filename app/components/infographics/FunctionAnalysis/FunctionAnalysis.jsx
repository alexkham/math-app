/*
  FunctionAnalysis.jsx

  Compact function-analysis infographic. One data object drives:
    - the graph (curve, feature dots)
    - interval strips sharing the graph's x scale exactly (data mode)
    - key-point tiles (rows linked to a feature)
    - global facts (rows not linked to a feature)

  ------------------------------------------------------------------
  VARIANTS   (prop: variant)
  ------------------------------------------------------------------
  'diagram'    default. Graph + strips; every feature drops a connector
               through the strips into its own tile (tiles spread along x
               under their points). Global facts in a row at the bottom.
               prop tilesSide: 'below' (default) | 'above'
  'split'      graph + strips left (numbered badges), grouped property
               cards right.
  'annotated'  global facts as a cell row on top, key points as callout
               pills drawn on the graph.
  'plot'       graph + strips only (numbered badges).
  'table'      grouped property cards only.
  'full'       alias of 'diagram' (backward compatibility).

  Hovering a tile / row / callout highlights its feature everywhere and
  dims the rest.

  ------------------------------------------------------------------
  TWO GRAPH MODES
  ------------------------------------------------------------------
  DATA MODE   (graph.fn or graph.points present)
    The component owns the scale; strips can be drawn.
  SVG MODE    (graph.content present)
    The caller supplies raw SVG; feature points are in that SVG's viewBox
    coordinates. Strips are ignored. Connectors, badges and callouts still
    work, drawn in the same viewBox.

  ------------------------------------------------------------------
  PROPS
  ------------------------------------------------------------------
  data     required object:

    {
      header?: {
        kicker?:  string,
        title:    string,
        formula?: ReactNode | string
      },

      quickStats?: [ { n: string | number, label: string } ],   // pills in the header

      graph: GraphData,
      features?:   Feature[],
      intervals?:  IntervalRow[],     // data mode only
      properties?: PropertyGroup[],

      sections?: {                    // optional captions
        keys?:  { name?: string },    // diagram: label of the tile row,   default 'Key points'
        facts?: { name?: string }     // diagram: label of the facts row,  default 'Global'
      }
    }

  ---- GraphData (data mode) ----
    {
      xRange: [number, number],
      yRange: [number, number],
      fn?:     (x) => number,
      points?: [ [x, y], ... ],
      samples?: number,               // default 500
      xTicks?:  number[],             // default = integers in range
      yTicks?:  number[],             // default = none
      asymptotes?: [ { x: number } | { y: number } ],   // dashed lines, secondary colour
      extraContent?: ReactNode        // raw SVG drawn in the same pixel space
    }

  ---- GraphData (svg mode) ----
    {
      viewBox:   string,              // e.g. "0 0 640 440"
      content:   ReactNode,
      maxWidth?: number               // px cap, default 900
    }

  ---- Feature ----
    {
      id:        string,
      kind?:     'accent' | 'warm',   // accent = primary blue, warm = secondary (gold). default 'accent'
      badge?:    boolean,             // false: dots only, no number, no tile
      dropLine?: boolean,             // split / plot / annotated: dashed guide down to the strips
                                      // (diagram always drops from every numbered feature)
      points: [
        {
          x: number, y: number,
          dx?: number, dy?: number,   // badge offset (split / plot). default (-14, -14)
          r?:  number                 // dot radius. default 4.5. 0 = no dot
        }
      ],
      callout?: { at?: number, dx?: number, dy?: number }   // annotated: pill position relative
                                                            // to points[at]. default { 0, 24, -34 }
    }

  ---- IntervalRow (data mode only) ----
    {
      label: string,
      spans: [
        {
          from: number | null,        // null = left edge
          to:   number | null,        // null = right edge
          kind: 'pos' | 'neg' | 'soft',
          text?: string,
          sign?: string,              // large glyph
          arrow?: 'right' | 'left'
        }
      ]
    }

  ---- PropertyGroup ----
    {
      letter?: string,
      name:    string,
      note?:   string,
      rows: [
        {
          featureId?: string,         // linked -> key-point tile / numbered row
          label:      string,
          value:      ReactNode | string,
          sub?:       string,
          tone?: 'accent' | 'warm' | 'na' | 'serif'
        }
      ]
    }

  theme    optional partial theme, merged over DEFAULT_THEME (exported).

  HTML text goes through processContent when it is a string. Text drawn
  inside the SVG (strip labels, callout pills) is plain: $ and ** are
  stripped, because processContent output cannot live in an SVG <text>.

  Utility classNames for ReactNodes / extraContent / svg-mode content:
    fa-var  fa-sup  fa-axis  fa-grid  fa-curve  fa-dot  fa-dot-warm  fa-guide  fa-flabel
*/

'use client';

import React, { useId, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

const rc = (v) => (typeof v === 'string' ? processContent(v) : v);
const plain = (v) => (typeof v === 'string' ? v.replace(/\$|\*\*/g, '') : '');
const fmt = (t) => (t < 0 ? '−' + Math.abs(t) : String(t));

/* ------------------------------------------------------------------ */
/*  theme                                                              */
/* ------------------------------------------------------------------ */

export const DEFAULT_THEME = {
  bg:          '#ffffff',
  panel:       '#ffffff',
  panelSoft:   '#eff6ff',
  panelSofter: '#f8fafc',
  ink:         '#1e293b',
  title:       '#1e3a8a',
  muted:       '#64748b',
  line:        '#cbd5e1',
  lineSoft:    '#e2e8f0',
  accent:      '#2563eb',
  warm:        '#ca8a04',
  warmInk:     '#a16207',
  curve:       '#1e3a8a',
  posBg:       '#dbeafe',
  posBorder:   '#93c5fd',
  posInk:      '#1d4ed8',
  negBg:       '#e2e8f0',
  negBorder:   '#94a3b8',
  negInk:      '#1e293b',
  softBg:      '#f8fafc',
  softBorder:  '#94a3b8',
  softInk:     '#475569',
};

const cssVars = (t) => ({
  '--fa-bg':           t.bg,
  '--fa-panel':        t.panel,
  '--fa-panel-soft':   t.panelSoft,
  '--fa-panel-softer': t.panelSofter,
  '--fa-ink':          t.ink,
  '--fa-title':        t.title,
  '--fa-muted':        t.muted,
  '--fa-line':         t.line,
  '--fa-line-soft':    t.lineSoft,
  '--fa-accent':       t.accent,
  '--fa-warm':         t.warm,
  '--fa-warm-ink':     t.warmInk,
  '--fa-curve':        t.curve,
  '--fa-pos-bg':       t.posBg,
  '--fa-pos-bd':       t.posBorder,
  '--fa-pos-ink':      t.posInk,
  '--fa-neg-bg':       t.negBg,
  '--fa-neg-bd':       t.negBorder,
  '--fa-neg-ink':      t.negInk,
  '--fa-soft-bg':      t.softBg,
  '--fa-soft-bd':      t.softBorder,
  '--fa-soft-ink':     t.softInk,
});

const featureColor = (f) => (f && f.kind === 'warm' ? 'var(--fa-warm)' : 'var(--fa-accent)');

/* ------------------------------------------------------------------ */
/*  layout constants                                                   */
/* ------------------------------------------------------------------ */

const CONN    = 34;    // connector zone height (diagram)
const TILE_W  = 172;   // max key-tile width, viewBox units
const TILE_GAP = 12;

const SIZES = {
  diagram:   { W: 1050, gH: 210, PL: 96, rowH: 20, rowGap: 5 },
  split:     { W: 600,  gH: 250, PL: 84, rowH: 22, rowGap: 6 },
  annotated: { W: 1050, gH: 250, PL: 96, rowH: 20, rowGap: 5 },
  plot:      { W: 1050, gH: 250, PL: 96, rowH: 20, rowGap: 5 },
};

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.fa-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--fa-ink);
  line-height: 1.4;
}
.fa-root *, .fa-root *::before, .fa-root *::after { box-sizing: border-box; }
.fa-root .fa-card {
  background: var(--fa-panel);
  border: 1px solid var(--fa-line);
  border-radius: 12px;
  overflow: hidden;
}
.fa-root .fa-var { font-style: italic; }
.fa-root .fa-sup { font-size: 0.55em; font-style: italic; vertical-align: super; }

/* ---- header ---- */
.fa-root .fa-head {
  display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
  padding: 10px 16px;
  border-bottom: 1px solid var(--fa-line);
}
.fa-root .fa-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--fa-accent);
}
.fa-root .fa-title {
  font-size: 16px; font-weight: 800;
  color: var(--fa-title);
  letter-spacing: -0.01em;
  margin: 0;
}
.fa-root .fa-formula {
  font-family: 'STIX Two Text', 'Times New Roman', serif;
  font-size: 17px;
  color: var(--fa-title);
  padding: 2px 10px;
  background: var(--fa-panel-soft);
  border: 1px solid var(--fa-pos-bg);
  border-radius: 6px;
}
.fa-root .fa-stats { display: flex; gap: 6px; margin-left: auto; flex-wrap: wrap; }
.fa-root .fa-stat {
  display: inline-flex; align-items: baseline; gap: 5px;
  padding: 3px 9px;
  background: var(--fa-panel-soft);
  border-radius: 999px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}
.fa-root .fa-stat b { font-size: 13px; color: var(--fa-accent); }
.fa-root .fa-stat span { font-size: 9.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--fa-muted); }

/* ---- shared text bits ---- */
.fa-root .fa-klbl {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--fa-muted);
}
.fa-root .fa-val {
  font-family: 'STIX Two Text', 'Times New Roman', serif;
  font-size: 15px; color: var(--fa-ink);
}
.fa-root .fa-val.fa-t-accent { color: var(--fa-accent); }
.fa-root .fa-val.fa-t-warm   { color: var(--fa-warm-ink); }
.fa-root .fa-val.fa-t-serif  { color: var(--fa-title); }
.fa-root .fa-val.fa-t-na {
  font-family: 'Inter', sans-serif; font-style: italic;
  font-size: 12.5px; color: var(--fa-muted);
}
.fa-root .fa-sub { display: block; font-size: 11px; color: var(--fa-muted); margin-top: 1px; }
.fa-root .fa-badge-h {
  width: 18px; height: 18px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--c); color: #ffffff;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700;
  flex: none;
}
.fa-root .fa-badge-h.fa-empty { background: transparent; border: 1px dashed var(--fa-line); }

/* ---- hover linking ---- */
.fa-root .fa-lk { transition: opacity 0.15s; }
.fa-root .fa-card.fa-has-hl .fa-lk:not(.fa-on) { opacity: 0.25; }
.fa-root .fa-card.fa-has-hl .fa-lk.fa-on .fa-guide { opacity: 1; stroke-dasharray: none; }

/* ---- plot svg ---- */
.fa-root .fa-plot svg { display: block; width: 100%; height: auto; overflow: visible; }
.fa-root .fa-plot svg text { font-family: 'Inter', sans-serif; }
.fa-root .fa-plot .fa-grid   { stroke: #eef2f7; stroke-width: 1; }
.fa-root .fa-plot .fa-axis   { stroke: #94a3b8; stroke-width: 1; }
.fa-root .fa-plot .fa-tick-lbl {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 500; fill: var(--fa-muted);
}
.fa-root .fa-plot .fa-curve {
  fill: none; stroke: var(--fa-curve); stroke-width: 2.2;
  stroke-linecap: round; stroke-linejoin: round;
}
.fa-root .fa-plot .fa-asym  { stroke: var(--fa-warm); stroke-width: 1.3; stroke-dasharray: 5 4; }
.fa-root .fa-plot .fa-dot      { fill: var(--c, var(--fa-accent)); stroke: #ffffff; stroke-width: 2; }
.fa-root .fa-plot .fa-dot-warm { fill: var(--fa-warm); stroke: #ffffff; stroke-width: 2; }
.fa-root .fa-plot .fa-guide {
  stroke: var(--c, var(--fa-muted)); stroke-width: 1;
  stroke-dasharray: 2 3; opacity: 0.55;
}
.fa-root .fa-plot .fa-flabel {
  font-family: 'STIX Two Text', serif; font-style: italic; font-size: 12px;
  fill: var(--fa-title);
}
.fa-root .fa-plot .fa-conn { fill: none; stroke: var(--c); stroke-width: 1.3; stroke-linejoin: round; }
.fa-root .fa-plot .fa-badge circle { fill: var(--c); }
.fa-root .fa-plot .fa-badge text {
  fill: #ffffff;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700;
  text-anchor: middle; dominant-baseline: central;
}

.fa-root .fa-plot .fa-band { fill: var(--fa-panel-softer); stroke: var(--fa-line); stroke-width: 1; }
.fa-root .fa-plot .fa-row-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9px; font-weight: 700; letter-spacing: 0.12em;
  fill: var(--fa-muted); text-anchor: end; dominant-baseline: central;
  text-transform: uppercase;
}
.fa-root .fa-plot .fa-strip { stroke-width: 1; }
.fa-root .fa-plot .fa-strip.fa-pos  { fill: var(--fa-pos-bg);  stroke: var(--fa-pos-bd); }
.fa-root .fa-plot .fa-strip.fa-neg  { fill: var(--fa-neg-bg);  stroke: var(--fa-neg-bd); }
.fa-root .fa-plot .fa-strip.fa-soft { fill: var(--fa-soft-bg); stroke: var(--fa-soft-bd); stroke-dasharray: 3 3; }
.fa-root .fa-plot .fa-strip-txt {
  font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600;
  text-anchor: middle; dominant-baseline: central;
}
.fa-root .fa-plot .fa-strip-txt.fa-big { font-size: 15px; font-weight: 700; }
.fa-root .fa-plot .fa-strip-txt.fa-pos,  .fa-root .fa-plot .fa-arrow.fa-pos  { fill: var(--fa-pos-ink); }
.fa-root .fa-plot .fa-strip-txt.fa-neg,  .fa-root .fa-plot .fa-arrow.fa-neg  { fill: var(--fa-neg-ink); }
.fa-root .fa-plot .fa-strip-txt.fa-soft, .fa-root .fa-plot .fa-arrow.fa-soft { fill: var(--fa-soft-ink); }

.fa-root .fa-plot .fa-call rect { fill: #ffffff; stroke: var(--c); stroke-width: 1.2; }
.fa-root .fa-plot .fa-call .fa-cn { fill: var(--c); }
.fa-root .fa-plot .fa-call .fa-cnt {
  fill: #ffffff; font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9px; font-weight: 700; text-anchor: middle; dominant-baseline: central;
}
.fa-root .fa-plot .fa-call .fa-cl {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9px; font-weight: 700; letter-spacing: 0.1em;
  fill: var(--fa-muted); dominant-baseline: central;
}
.fa-root .fa-plot .fa-call .fa-cv {
  font-family: 'STIX Two Text', serif; font-size: 12px; font-weight: 600;
  fill: var(--fa-ink); dominant-baseline: central;
}
.fa-root .fa-plot .fa-lead { stroke: var(--c); stroke-width: 1; }

/* ---- diagram ---- */
.fa-root .fa-stage { padding: 10px 14px 0; }
.fa-root .fa-stage-inner { margin: 0 auto; }
.fa-root .fa-arow { position: relative; }
.fa-root .fa-arow-lbl {
  position: absolute; left: 0; top: 0; bottom: 0;
  display: flex; align-items: center; justify-content: flex-end;
  padding-right: 10px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; text-align: right; line-height: 1.3;
  color: var(--fa-muted);
}
.fa-root .fa-atile {
  position: absolute; top: 0; bottom: 0;
  background: #ffffff;
  border: 1.5px solid var(--c);
  border-radius: 8px;
  padding: 6px 10px 7px;
  box-shadow: 0 2px 4px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  cursor: default;
}
.fa-root .fa-arow.fa-below .fa-atile { border-top-width: 4px; }
.fa-root .fa-arow.fa-above .fa-atile { border-bottom-width: 4px; }
.fa-root .fa-atile-top { display: flex; align-items: center; gap: 6px; margin-bottom: 2px; min-width: 0; }
.fa-root .fa-atile-top .fa-klbl { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fa-root .fa-atile .fa-badge-h { width: 16px; height: 16px; font-size: 9px; }
.fa-root .fa-atile .fa-val { white-space: nowrap; }

.fa-root .fa-facts {
  margin-top: 12px;
  display: grid;
  grid-template-columns: var(--fa-gut, 96px) 1fr;
  background: var(--fa-panel-softer);
  border-top: 1px solid var(--fa-line);
}
.fa-root .fa-facts-lbl {
  display: flex; align-items: center; justify-content: flex-end;
  padding: 0 10px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; text-align: right;
  color: var(--fa-muted);
}
.fa-root .fa-facts-grid { display: flex; flex-wrap: wrap; gap: 8px; padding: 10px 14px 12px 0; }
.fa-root .fa-fact {
  flex: 1 1 auto; min-width: 110px;
  background: #ffffff;
  border: 1.5px solid var(--fa-line);
  border-left: 4px solid var(--fa-title);
  border-radius: 8px;
  padding: 6px 10px 7px;
}
.fa-root .fa-fact .fa-val { display: block; margin-top: 1px; white-space: nowrap; }

/* ---- split / table: grouped cards ---- */
.fa-root .fa-split { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr); }
.fa-root .fa-split .fa-plot { padding: 10px 12px 12px; border-right: 1px solid var(--fa-line); }
.fa-root .fa-groups {
  padding: 12px;
  background: var(--fa-panel-softer);
  display: grid; gap: 10px; align-content: start;
}
.fa-root .fa-groups.fa-two { grid-template-columns: 1fr 1fr; }
.fa-root .fa-grp {
  background: #ffffff;
  border: 1.5px solid var(--fa-line);
  border-radius: 10px;
  overflow: hidden;
}
.fa-root .fa-grp-h {
  display: flex; align-items: center; gap: 8px;
  padding: 7px 12px;
  background: var(--fa-panel-soft);
  border-bottom: 1px solid var(--fa-line);
}
.fa-root .fa-grp-l {
  width: 18px; height: 18px; border-radius: 4px;
  background: var(--fa-title); color: #ffffff;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 700; line-height: 18px; text-align: center;
}
.fa-root .fa-grp-n { font-size: 12.5px; font-weight: 700; color: var(--fa-title); }
.fa-root .fa-grp-note {
  margin-left: auto;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; color: var(--fa-muted);
}
.fa-root .fa-prow {
  display: grid; grid-template-columns: 18px 104px 1fr;
  gap: 10px; align-items: center;
  padding: 5px 12px;
  border-top: 1px solid var(--fa-line-soft);
  cursor: default;
}
.fa-root .fa-prow:first-of-type { border-top: none; }

/* ---- annotated: fact cells ---- */
.fa-root .fa-cells { display: flex; flex-wrap: wrap; border-bottom: 1px solid var(--fa-line); }
.fa-root .fa-cell {
  flex: 1 1 140px;
  padding: 8px 14px 9px;
  border-right: 1px solid var(--fa-line);
  min-width: 0;
}
.fa-root .fa-cell:last-child { border-right: none; }
.fa-root .fa-cell .fa-val { display: block; margin-top: 2px; }
.fa-root .fa-plot-pad { padding: 8px 14px 10px; }

/* ---- download safety ----
   The diagram generator flattens every element to position:static. These
   scoped rules outrank it, so the key-point tiles and the row caption keep
   their places along the x-axis in the PNG/PDF. Same values as above. */
.fa-root .fa-arow { position: relative !important; }
.fa-root .fa-arow-lbl,
.fa-root .fa-atile { position: absolute !important; }

@media (max-width: 760px) {
  .fa-root .fa-split { grid-template-columns: 1fr; }
  .fa-root .fa-split .fa-plot { border-right: none; border-bottom: 1px solid var(--fa-line); }
  .fa-root .fa-groups.fa-two { grid-template-columns: 1fr; }
  .fa-root .fa-stats { margin-left: 0; }
  .fa-root .fa-facts { grid-template-columns: 1fr; }
  .fa-root .fa-facts-lbl { justify-content: flex-start; padding: 10px 14px 0; }
  .fa-root .fa-facts-grid { padding-left: 14px; }
}
`;

/* ------------------------------------------------------------------ */
/*  data helpers                                                       */
/* ------------------------------------------------------------------ */

function numberFeatures(features) {
  const map = {};
  let n = 0;
  (features || []).forEach((f) => { map[f.id] = f.badge === false ? null : ++n; });
  return map;
}

function rowFor(properties, id) {
  for (const g of properties || []) for (const r of g.rows || []) if (r.featureId === id) return r;
  return null;
}

const allRows = (properties) => (properties || []).flatMap((g) => g.rows || []);

function integerTicks(x0, x1) {
  const out = [];
  for (let v = Math.ceil(x0); v <= Math.floor(x1); v++) out.push(v);
  return out;
}

/* spread tiles along x without overlap, each as close to its anchor as possible */
function spread(items, lo, hi, tw, gap) {
  const s = [...items].sort((a, b) => a.ax - b.ax);
  s.forEach((it) => { it.x = Math.max(lo, Math.min(hi - tw, it.ax - tw / 2)); });
  for (let i = 1; i < s.length; i++) s[i].x = Math.max(s[i].x, s[i - 1].x + tw + gap);
  for (let i = s.length - 1; i >= 0; i--) {
    const lim = i === s.length - 1 ? hi - tw : s[i + 1].x - tw - gap;
    s[i].x = Math.min(s[i].x, lim);
  }
  for (let i = 0; i < s.length; i++) s[i].x = Math.max(s[i].x, i ? s[i - 1].x + tw + gap : lo);
  return s;
}

/* ------------------------------------------------------------------ */
/*  geometry: one coordinate system for graph, strips and connectors   */
/* ------------------------------------------------------------------ */
/*
  mode: 'badges' | 'callouts' | 'below' | 'above'
*/
function buildGeometry(data, size, mode) {
  const graph = data.graph || {};
  const svgMode = Boolean(graph.content);

  if (svgMode) {
    const [mx, my, w, h] = String(graph.viewBox || '0 0 640 440').split(/[\s,]+/).map(Number);
    const top = mode === 'above' ? my - CONN : my;
    const H = h + (mode === 'above' || mode === 'below' ? CONN : 0);
    return {
      svgMode, W: w, minX: mx, vbTop: top, H,
      sx: (x) => x, sy: (y) => y,
      PL: mx, PR: mx + w, GT: my, GB: my + h, SB: my + h,
      rows: [], S0: my + h,
      viewBox: `${mx} ${top} ${w} ${H}`,
      maxWidth: graph.maxWidth || 900,
    };
  }

  const { W, gH, PL, rowH, rowGap } = size;
  const PR = W - 10;
  const GT = (mode === 'above' ? CONN : 0) + 10;
  const GB = GT + gH;
  const [x0, x1] = graph.xRange || [-5, 5];
  const [y0, y1] = graph.yRange || [-5, 5];
  const sx = (x) => PL + ((x - x0) / (x1 - x0)) * (PR - PL);
  const sy = (y) => GB - ((y - y0) / (y1 - y0)) * (GB - GT);
  const rows = data.intervals || [];
  const S0 = GB + 26;
  const SB = rows.length ? S0 + rows.length * (rowH + rowGap) - rowGap : GB + 16;
  const H = SB + (mode === 'below' ? CONN : 6);
  return {
    svgMode, W, minX: 0, vbTop: 0, H,
    sx, sy, x0, x1, y0, y1,
    PL, PR, GT, GB, S0, SB, rows, rowH, rowGap,
    viewBox: `0 0 ${W} ${H}`,
  };
}

function tileLayout(data, geo, numbers) {
  const feats = (data.features || []).filter((f) => numbers[f.id] != null);
  if (!feats.length) return { tiles: [], tw: TILE_W };
  const lo = geo.svgMode ? geo.minX : geo.PL;
  const hi = geo.PR;
  const tw = Math.min(TILE_W, (hi - lo - TILE_GAP * (feats.length - 1)) / feats.length);
  const items = feats.map((f) => ({
    f,
    ax: f.points.reduce((s, p) => s + geo.sx(p.x), 0) / f.points.length,
  }));
  return { tiles: spread(items, lo, hi, tw, TILE_GAP), tw };
}

/* ------------------------------------------------------------------ */
/*  plot svg                                                           */
/* ------------------------------------------------------------------ */

function curvePath(graph, geo) {
  const { sx, sy, x0, x1, y0, y1 } = geo;
  let samples;
  if (graph.points) samples = graph.points;
  else if (graph.fn) {
    const n = graph.samples || 500;
    samples = [];
    for (let i = 0; i <= n; i++) {
      const x = x0 + ((x1 - x0) * i) / n;
      samples.push([x, graph.fn(x)]);
    }
  } else return '';
  const pad = (y1 - y0) * 0.1;
  let d = '';
  let pen = false;
  samples.forEach(([x, y]) => {
    if (!Number.isFinite(y) || y < y0 - pad || y > y1 + pad) { pen = false; return; }
    d += (pen ? ' L ' : ' M ') + sx(x).toFixed(1) + ' ' + sy(y).toFixed(1);
    pen = true;
  });
  return d.trim();
}

function PlotSvg({ data, geo, mode, numbers, layout, hl, onHover }) {
  const rawId = useId();
  const clipId = 'fa-clip-' + rawId.replace(/[^a-zA-Z0-9_-]/g, '');
  const graph = data.graph || {};
  const features = data.features || [];
  const { sx, sy } = geo;
  const lk = (id) => 'fa-lk' + (hl === id ? ' fa-on' : '');
  const hoverProps = (id) => ({ onMouseEnter: () => onHover(id), onMouseLeave: () => onHover(null) });

  /* ---------- base: graph ---------- */
  let base = null;
  if (geo.svgMode) {
    base = graph.content;
  } else {
    const xTicks = graph.xTicks || integerTicks(geo.x0, geo.x1);
    const yTicks = graph.yTicks || [];
    const yAxisX = geo.x0 <= 0 && geo.x1 >= 0 ? sx(0) : geo.PL;
    const d = curvePath(graph, geo);
    base = (
      <>
        {geo.rows.length > 0 && (
          <rect className="fa-band" x={2} y={geo.GB + 18}
                width={geo.W - 4} height={geo.SB - geo.GB - 12} rx={6} />
        )}
        {xTicks.map((t, i) => (
          <line key={'gx' + i} className="fa-grid" x1={sx(t)} x2={sx(t)} y1={geo.GT} y2={geo.GB} />
        ))}
        {yTicks.map((t, i) => (
          <line key={'gy' + i} className="fa-grid" x1={geo.PL} x2={geo.PR} y1={sy(t)} y2={sy(t)} />
        ))}
        {geo.y0 <= 0 && geo.y1 >= 0 && (
          <line className="fa-axis" x1={geo.PL} x2={geo.PR} y1={sy(0)} y2={sy(0)} />
        )}
        {geo.x0 <= 0 && geo.x1 >= 0 && (
          <line className="fa-axis" x1={sx(0)} x2={sx(0)} y1={geo.GT} y2={geo.GB} />
        )}
        {xTicks.map((t, i) => (
          <text key={'xl' + i} className="fa-tick-lbl" x={sx(t)} y={geo.GB + 11} textAnchor="middle">{fmt(t)}</text>
        ))}
        {yTicks.map((t, i) => (
          <text key={'yl' + i} className="fa-tick-lbl" x={yAxisX - 6} y={sy(t) + 3.5} textAnchor="end">{fmt(t)}</text>
        ))}
        {(graph.asymptotes || []).map((a, i) =>
          a.x != null ? (
            <line key={'as' + i} className="fa-asym" x1={sx(a.x)} x2={sx(a.x)} y1={geo.GT} y2={geo.GB} />
          ) : (
            <line key={'as' + i} className="fa-asym" x1={geo.PL} x2={geo.PR} y1={sy(a.y)} y2={sy(a.y)} />
          )
        )}
        {graph.extraContent}
        <clipPath id={clipId}>
          <rect x={geo.PL} y={geo.GT} width={geo.PR - geo.PL} height={geo.GB - geo.GT} />
        </clipPath>
        {d && <path className="fa-curve" d={d} clipPath={`url(#${clipId})`} />}

        {/* strips */}
        {geo.rows.map((row, ri) => {
          const top = geo.S0 + ri * (geo.rowH + geo.rowGap);
          const mid = top + geo.rowH / 2;
          return (
            <g key={'row' + ri}>
              <text className="fa-row-label" x={geo.PL - 10} y={mid}>{plain(row.label)}</text>
              {(row.spans || []).map((s, si) => {
                const a = sx(s.from == null ? geo.x0 : s.from) + 1;
                const b = sx(s.to == null ? geo.x1 : s.to) - 1;
                const w = Math.max(0, b - a);
                const txt = plain(s.sign || s.text || '');
                const big = Boolean(s.sign) || txt.length === 1;
                const fits = txt && w > txt.length * (big ? 9 : 6.2) + 10;
                return (
                  <g key={'sp' + si}>
                    <rect className={'fa-strip fa-' + s.kind} x={a} y={top} width={w} height={geo.rowH} rx={4} />
                    {fits && (
                      <text className={'fa-strip-txt fa-' + s.kind + (big ? ' fa-big' : '')}
                            x={a + w / 2} y={mid + 0.5}>{txt}</text>
                    )}
                    {s.arrow === 'right' && w > 40 && (
                      <polygon className={'fa-arrow fa-' + s.kind}
                               points={`${b - 18},${mid - 4} ${b - 8},${mid} ${b - 18},${mid + 4}`} />
                    )}
                    {s.arrow === 'left' && w > 40 && (
                      <polygon className={'fa-arrow fa-' + s.kind}
                               points={`${a + 18},${mid - 4} ${a + 8},${mid} ${a + 18},${mid + 4}`} />
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}
      </>
    );
  }

  /* ---------- features ---------- */
  const tiles = layout ? layout.tiles : [];
  const tw = layout ? layout.tw : 0;
  const bottom = geo.vbTop + geo.H;

  const featureGroups = features.map((f) => {
    const c = featureColor(f);
    const num = numbers[f.id];
    const pts = (f.points || []).map((p) => ({ ...p, X: sx(p.x), Y: sy(p.y) }));
    const parts = [];
    const tIdx = tiles.findIndex((t) => t.f === f);
    const t = tIdx >= 0 ? tiles[tIdx] : null;

    if (mode === 'below' && t) {
      pts.forEach((p, i) => parts.push(
        <line key={'g' + i} className="fa-guide" x1={p.X} x2={p.X} y1={p.Y} y2={geo.SB} />
      ));
      const yB = geo.SB + 7;
      const yH = geo.SB + 14 + (tIdx % 2) * 7;
      const tx = t.x + tw / 2;
      if (pts.length > 1) {
        const xs = pts.map((p) => p.X);
        parts.push(<path key="brk" className="fa-conn"
          d={`M${Math.min(...xs)} ${geo.SB} V${yB} H${Math.max(...xs)} V${geo.SB}`} />);
        pts.forEach((p, i) => parts.push(
          <line key={'bt' + i} className="fa-conn" x1={p.X} x2={p.X} y1={geo.SB - 2} y2={yB} />
        ));
        parts.push(<path key="cn" className="fa-conn" d={`M${t.ax} ${yB} V${yH} H${tx} V${bottom}`} />);
      } else {
        parts.push(<path key="cn" className="fa-conn" d={`M${t.ax} ${geo.SB} V${yH} H${tx} V${bottom}`} />);
      }
    }

    if (mode === 'above' && t) {
      const yB = geo.vbTop + CONN - 4;
      const yH = geo.vbTop + CONN - 14 - (tIdx % 2) * 7;
      const tx = t.x + tw / 2;
      parts.push(<path key="cn" className="fa-conn" d={`M${tx} ${geo.vbTop} V${yH} H${t.ax} V${yB}`} />);
      if (pts.length > 1) {
        const xs = pts.map((p) => p.X);
        parts.push(<line key="brk" className="fa-conn" x1={Math.min(...xs)} x2={Math.max(...xs)} y1={yB} y2={yB} />);
      }
      pts.forEach((p, i) => parts.push(
        <line key={'g' + i} className="fa-guide" x1={p.X} x2={p.X} y1={yB} y2={p.Y} />
      ));
      if (geo.rows.length) pts.forEach((p, i) => parts.push(
        <line key={'d' + i} className="fa-guide" x1={p.X} x2={p.X} y1={p.Y} y2={geo.SB} />
      ));
    }

    if ((mode === 'badges' || mode === 'callouts') && f.dropLine && geo.rows.length) {
      pts.forEach((p, i) => parts.push(
        <line key={'g' + i} className="fa-guide" x1={p.X} x2={p.X} y1={p.Y} y2={geo.SB} />
      ));
    }

    pts.forEach((p, i) => {
      if (p.r === 0) return;
      parts.push(<circle key={'dot' + i} className="fa-dot" cx={p.X} cy={p.Y} r={p.r || 4.5} />);
    });

    if (mode === 'badges' && num != null) {
      pts.forEach((p, i) => {
        const bx = p.X + (p.dx == null ? -14 : p.dx);
        const by = p.Y + (p.dy == null ? -14 : p.dy);
        parts.push(
          <g key={'b' + i} className="fa-badge">
            <circle cx={bx} cy={by} r={9} />
            <text x={bx} y={by + 0.5}>{num}</text>
          </g>
        );
      });
    }

    if (mode === 'callouts' && num != null && pts.length) {
      const co = f.callout || {};
      const p = pts[co.at || 0] || pts[0];
      const row = rowFor(data.properties, f.id) || { label: f.id, value: '' };
      const lbl = plain(row.label).toUpperCase();
      const val = plain(typeof row.value === 'string' ? row.value : '');
      const lw = lbl.length * 6.6;
      const w = 26 + lw + (val ? 8 + val.length * 6.4 : 0) + 10;
      const h = 24;
      const rx = p.X + (co.dx == null ? 24 : co.dx);
      const ry = p.Y + (co.dy == null ? -34 : co.dy) - h / 2;
      const ex = Math.max(rx, Math.min(rx + w, p.X));
      const ey = Math.max(ry, Math.min(ry + h, p.Y));
      parts.push(<line key="ld" className="fa-lead" x1={p.X} y1={p.Y} x2={ex} y2={ey} />);
      parts.push(
        <g key="call" className="fa-call">
          <rect x={rx} y={ry} width={w} height={h} rx={12} />
          <circle className="fa-cn" cx={rx + 12} cy={ry + 12} r={8} />
          <text className="fa-cnt" x={rx + 12} y={ry + 12.5}>{num}</text>
          <text className="fa-cl" x={rx + 26} y={ry + 12.5}>{lbl}</text>
          {val && <text className="fa-cv" x={rx + 26 + lw + 8} y={ry + 12.5}>{val}</text>}
        </g>
      );
    }

    return (
      <g key={f.id} className={lk(f.id)} style={{ '--c': c }} {...hoverProps(f.id)}>
        {parts}
      </g>
    );
  });

  return (
    <svg viewBox={geo.viewBox} xmlns="http://www.w3.org/2000/svg">
      {base}
      {featureGroups}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  html pieces                                                        */
/* ------------------------------------------------------------------ */

function Head({ header, quickStats }) {
  if (!header) return null;
  return (
    <div className="fa-head">
      {header.kicker && <span className="fa-kicker">{rc(header.kicker)}</span>}
      <h2 className="fa-title">{rc(header.title)}</h2>
      {header.formula && <span className="fa-formula">{rc(header.formula)}</span>}
      {quickStats && quickStats.length > 0 && (
        <span className="fa-stats">
          {quickStats.map((s, i) => (
            <span className="fa-stat" key={i}>
              <b>{rc(s.n)}</b>
              <span>{rc(s.label)}</span>
            </span>
          ))}
        </span>
      )}
    </div>
  );
}

function Val({ row }) {
  return (
    <>
      <span className={'fa-val' + (row.tone ? ' fa-t-' + row.tone : '')}>{rc(row.value)}</span>
      {row.sub && <span className="fa-sub">{rc(row.sub)}</span>}
    </>
  );
}

function Groups({ data, numbers, hl, onHover, two }) {
  const byId = Object.fromEntries((data.features || []).map((f) => [f.id, f]));
  return (
    <div className={'fa-groups' + (two ? ' fa-two' : '')}>
      {(data.properties || []).map((g, gi) => (
        <div className="fa-grp" key={gi}>
          <div className="fa-grp-h">
            {g.letter && <span className="fa-grp-l">{rc(g.letter)}</span>}
            <span className="fa-grp-n">{rc(g.name)}</span>
            {g.note && <span className="fa-grp-note">{rc(g.note)}</span>}
          </div>
          {(g.rows || []).map((r, ri) => {
            const f = r.featureId ? byId[r.featureId] : null;
            const num = f ? numbers[f.id] : null;
            const linked = num != null;
            return (
              <div
                key={ri}
                className={'fa-prow' + (linked ? ' fa-lk' + (hl === f.id ? ' fa-on' : '') : '')}
                onMouseEnter={linked ? () => onHover(f.id) : undefined}
                onMouseLeave={linked ? () => onHover(null) : undefined}
              >
                {linked ? (
                  <span className="fa-badge-h" style={{ '--c': featureColor(f) }}>{num}</span>
                ) : (
                  <span className="fa-badge-h fa-empty" />
                )}
                <span className="fa-klbl">{rc(r.label)}</span>
                <span><Val row={r} /></span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  variants                                                           */
/* ------------------------------------------------------------------ */

function Diagram({ data, numbers, hl, onHover, side }) {
  const mode = side === 'above' ? 'above' : 'below';
  const geo = buildGeometry(data, SIZES.diagram, mode);
  const layout = tileLayout(data, geo, numbers);
  const pct = (v) => (v / geo.W) * 100 + '%';
  const sections = data.sections || {};

  const keyRows = layout.tiles.map((t) => ({ t, row: rowFor(data.properties, t.f.id) || { label: t.f.id, value: '' } }));
  const tileH = keyRows.some((k) => k.row.sub) ? 66 : 52;
  const gutter = geo.svgMode ? 0 : geo.PL;

  const tileRow = layout.tiles.length > 0 && (
    <div className={'fa-arow fa-' + mode} style={{ height: tileH }}>
      {gutter >= 60 && (
        <div className="fa-arow-lbl" style={{ width: pct(gutter) }}>
          {rc((sections.keys && sections.keys.name) || 'Key points')}
        </div>
      )}
      {keyRows.map(({ t, row }) => (
        <div
          key={t.f.id}
          className={'fa-atile fa-lk' + (hl === t.f.id ? ' fa-on' : '')}
          style={{ '--c': featureColor(t.f), left: pct(t.x - geo.minX), width: pct(layout.tw) }}
          onMouseEnter={() => onHover(t.f.id)}
          onMouseLeave={() => onHover(null)}
        >
          <div className="fa-atile-top">
            <span className="fa-badge-h" style={{ '--c': featureColor(t.f) }}>{numbers[t.f.id]}</span>
            <span className="fa-klbl">{rc(row.label)}</span>
          </div>
          <Val row={row} />
        </div>
      ))}
    </div>
  );

  const facts = allRows(data.properties).filter((r) => !r.featureId || numbers[r.featureId] == null);
  const gut = geo.svgMode ? '96px' : `calc(${geo.PL / geo.W} * (100% - 28px) + 14px)`;

  return (
    <>
      <div className="fa-stage fa-plot">
        <div className="fa-stage-inner" style={geo.svgMode ? { maxWidth: geo.maxWidth } : undefined}>
          {mode === 'above' && tileRow}
          <PlotSvg data={data} geo={geo} mode={mode} numbers={numbers} layout={layout} hl={hl} onHover={onHover} />
          {mode === 'below' && tileRow}
        </div>
      </div>
      {facts.length > 0 ? (
        <div className="fa-facts" style={{ '--fa-gut': gut }}>
          <div className="fa-facts-lbl">{rc((sections.facts && sections.facts.name) || 'Global')}</div>
          <div className="fa-facts-grid">
            {facts.map((r, i) => (
              <div className="fa-fact" key={i}>
                <span className="fa-klbl">{rc(r.label)}</span>
                <Val row={r} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ height: 12 }} />
      )}
    </>
  );
}

function Split({ data, numbers, hl, onHover }) {
  const geo = buildGeometry(data, SIZES.split, 'badges');
  return (
    <div className="fa-split">
      <div className="fa-plot">
        <div className="fa-stage-inner" style={geo.svgMode ? { maxWidth: geo.maxWidth } : undefined}>
          <PlotSvg data={data} geo={geo} mode="badges" numbers={numbers} hl={hl} onHover={onHover} />
        </div>
      </div>
      <Groups data={data} numbers={numbers} hl={hl} onHover={onHover} />
    </div>
  );
}

function Annotated({ data, numbers, hl, onHover }) {
  const geo = buildGeometry(data, SIZES.annotated, 'callouts');
  const facts = allRows(data.properties).filter((r) => !r.featureId || numbers[r.featureId] == null);
  return (
    <>
      {facts.length > 0 && (
        <div className="fa-cells">
          {facts.map((r, i) => (
            <div className="fa-cell" key={i}>
              <span className="fa-klbl">{rc(r.label)}</span>
              <Val row={r} />
            </div>
          ))}
        </div>
      )}
      <div className="fa-plot fa-plot-pad">
        <div className="fa-stage-inner" style={geo.svgMode ? { maxWidth: geo.maxWidth } : undefined}>
          <PlotSvg data={data} geo={geo} mode="callouts" numbers={numbers} hl={hl} onHover={onHover} />
        </div>
      </div>
    </>
  );
}

function PlotOnly({ data, numbers, hl, onHover }) {
  const geo = buildGeometry(data, SIZES.plot, 'badges');
  return (
    <div className="fa-plot fa-plot-pad">
      <div className="fa-stage-inner" style={geo.svgMode ? { maxWidth: geo.maxWidth } : undefined}>
        <PlotSvg data={data} geo={geo} mode="badges" numbers={numbers} hl={hl} onHover={onHover} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

export default function FunctionAnalysis({ data, variant = 'diagram', tilesSide = 'below', theme }) {
  const [hl, setHl] = useState(null);
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const numbers = numberFeatures(data.features);
  const v = variant === 'full' ? 'diagram' : variant;
  const common = { data, numbers, hl, onHover: setHl };

  let body;
  if (v === 'split')          body = <Split {...common} />;
  else if (v === 'annotated') body = <Annotated {...common} />;
  else if (v === 'plot')      body = <PlotOnly {...common} />;
  else if (v === 'table')     body = <Groups {...common} two />;
  else                        body = <Diagram {...common} side={tilesSide} />;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="fa-root" style={cssVars(t)}>
        <div className={'fa-card' + (hl ? ' fa-has-hl' : '')}>
          {data.header && <Head header={data.header} quickStats={data.quickStats} />}
          {body}
        </div>
      </div>
    </>
  );
}
