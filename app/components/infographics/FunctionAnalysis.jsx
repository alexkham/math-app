/*
  FunctionAnalysis.jsx

  A combined function-analysis infographic:
    1. a graph, with numbered badges on its notable features
    2. an interval strip band sharing the graph&apos;s x-axis exactly
    3. a property table whose rows carry the same badge numbers

  Everything is driven from one data object, so a value is never defined twice.

  ------------------------------------------------------------------
  TWO GRAPH MODES
  ------------------------------------------------------------------
  DATA MODE   (graph.fn or graph.points present)
    The component owns the coordinate scale. The caller supplies math
    coordinates and the component maps them to pixels. Because the scale
    is shared, the strip band lines up with the curve automatically.
    This is the only mode in which strips can be drawn.

  SVG MODE    (graph.content present)
    The caller supplies raw SVG and marker positions in that SVG&apos;s own
    viewBox coordinates, exactly like CorrespondenceMap. The component
    overlays numbered badges and renders the table. Strips are ignored,
    because the component cannot know where x = 1 sits inside somebody
    else&apos;s drawing.

  The mode is inferred: graph.content wins if present, otherwise data mode.

  ------------------------------------------------------------------
  PROPS
  ------------------------------------------------------------------
  data     required object, shape:

    {
      header?: {
        kicker?: string,
        title:   string,
        formula?: ReactNode        // rendered as a chip under the title
      },

      quickStats?: [               // small stat block, top right
        { n: string | number, label: string }
      ],

      graph: GraphData,
      features?: Feature[],
      intervals?: IntervalRow[],   // data mode only
      properties?: PropertyGroup[],

      sections?: {                 // optional section captions
        plot?:  { number?: string, name?: string, hint?: string },
        props?: { number?: string, name?: string, hint?: string }
      }
    }

  ---- GraphData (data mode) ----
    {
      xRange: [number, number],
      yRange: [number, number],
      fn?:     (x) => number,      // sampled by the component
      points?: [ [x, y], ... ],    // or supply the samples directly
      samples?: number,            // default 400
      xTicks?:  number[],          // labelled ticks; default = integers in range
      yTicks?:  number[],          // labelled ticks; default = none
      extraContent?: ReactNode     // raw SVG drawn in the same pixel space,
                                    // for anything the component does not cover
    }

  ---- GraphData (svg mode) ----
    {
      viewBox:   string,           // e.g. &quot;0 0 640 440&quot;
      content:   ReactNode,        // caller-drawn SVG
      maxWidth?: number            // px cap, default 900
    }

  ---- Feature ----
    A notable spot on the graph. Gets one badge number, but may have several
    markers (three x-intercepts all badged 1, for example).

    {
      id:    string,
      kind?: 'accent' | 'warm',    // badge and dot color. default 'accent'
      badge?: boolean,             // false to draw the dots without numbering
      dropLine?: boolean,          // data mode: dashed line down to the strips
      points: [
        {
          x: number, y: number,    // math coords (data mode) or
                                    // viewBox coords (svg mode)
          dx?: number, dy?: number, // badge offset in px. default (-24, -24)
          r?:  number               // dot radius. default 5 (6 when warm)
        }
      ]
    }

  ---- IntervalRow (data mode only) ----
    {
      label: string,               // row caption, e.g. 'Sign of f'
      spans: [
        {
          from: number | null,     // null means the left edge of xRange
          to:   number | null,     // null means the right edge
          kind: 'pos' | 'neg' | 'soft',
          text?: string,           // label inside the span
          sign?: string,           // large glyph instead of text, e.g. '+'
          arrow?: 'right' | 'left' // small direction arrow inside the span
        }
      ]
    }

  ---- PropertyGroup ----
    {
      letter?: string,             // e.g. 'A'
      name:    string,
      note?:   string,             // right-aligned caption
      rows: [
        {
          featureId?: string,      // links the row to a Feature, pulling its number
          label:      string,
          value:      ReactNode,
          sub?:       string,
          tone?: 'accent' | 'warm' | 'na' | 'serif'
        }
      ]
    }

  variant  'full' | 'plot' | 'table'   (default: 'full')
             full  = graph + strips + properties
             plot  = graph + strips only
             table = properties only

  theme    optional partial theme, merged over DEFAULT_THEME (exported).

  ------------------------------------------------------------------
  Utility classNames available inside any ReactNode passed in
  ------------------------------------------------------------------
    fa-var    italic (variables)
    fa-sup    superscript
  And, inside graph.content or graph.extraContent:
    fa-axis  fa-grid  fa-curve  fa-dot  fa-dot-warm  fa-guide  fa-flabel
*/

import React from 'react';

/* ------------------------------------------------------------------ */
/*  theme                                                              */
/* ------------------------------------------------------------------ */

export const DEFAULT_THEME = {
  bg:          '#ffffff',
  panel:       '#ffffff',
  panelSoft:   '#eef2ff',
  panelSofter: '#f8faff',
  ink:         '#1f2937',
  title:       '#1e3a8a',
  muted:       '#6b7280',
  line:        '#e5e7eb',
  accent:      '#4f46e5',
  warm:        '#d97706',
  indigoSoft:  '#e0e7ff',
  warmSoft:    '#fef3c7',
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
  '--fa-accent':       t.accent,
  '--fa-warm':         t.warm,
  '--fa-indigo-soft':  t.indigoSoft,
  '--fa-warm-soft':    t.warmSoft,
});

/* ------------------------------------------------------------------ */
/*  layout constants (data mode pixel space)                           */
/* ------------------------------------------------------------------ */

const VB_W         = 900;   // viewBox width
const PLOT_LEFT    = 150;   // left edge of plot / strips (room for row labels)
const PLOT_RIGHT   = 900;
const GRAPH_TOP    = 50;
const GRAPH_BOTTOM = 350;
const STRIP_AXIS_Y = 410;   // the shared x-axis under the graph
const STRIP_START  = 436;   // top of the first strip
const STRIP_H      = 24;
const STRIP_GAP    = 40;    // vertical pitch between strips

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.fa-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--fa-ink);
  line-height: 1.5;
}
.fa-root .fa-card {
  background: var(--fa-panel);
  border: 1px solid var(--fa-line);
  border-radius: 8px;
  overflow: hidden;
}
.fa-root .fa-var { font-style: italic; }
.fa-root .fa-sup { font-size: 0.55em; font-style: italic; vertical-align: super; }

/* ---- head ---- */
.fa-root .fa-head {
  padding: 26px 32px 22px;
  border-bottom: 1px solid var(--fa-line);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;
}
.fa-root .fa-head .fa-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--fa-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.fa-root .fa-head h2 {
  font-size: 26px; font-weight: 800;
  color: var(--fa-title);
  margin: 0 0 10px;
  letter-spacing: -0.02em;
}
.fa-root .fa-head .fa-formula {
  display: inline-block;
  font-family: 'Inter', serif;
  font-size: 22px;
  color: var(--fa-ink);
  background: var(--fa-panel-softer);
  border: 1px solid var(--fa-line);
  padding: 6px 14px;
  border-radius: 6px;
}
.fa-root .fa-stats {
  display: flex; gap: 22px;
  padding: 14px 18px;
  background: var(--fa-panel-softer);
  border: 1px solid var(--fa-line);
  border-radius: 6px;
}
.fa-root .fa-stats .fa-stat .fa-n {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 22px; font-weight: 700;
  color: var(--fa-accent);
  line-height: 1;
}
.fa-root .fa-stats .fa-stat .fa-l {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--fa-muted);
  margin-top: 6px;
}

/* ---- sections ---- */
.fa-root .fa-section { border-bottom: 1px solid var(--fa-line); }
.fa-root .fa-section:last-child { border-bottom: none; }
.fa-root .fa-section-head {
  padding: 16px 32px 12px;
  display: flex; align-items: baseline; gap: 14px;
}
.fa-root .fa-section-head .fa-sn {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--fa-accent);
  font-weight: 700;
}
.fa-root .fa-section-head .fa-sname {
  font-size: 15px; font-weight: 700;
  color: var(--fa-title);
  letter-spacing: -0.01em;
}
.fa-root .fa-section-head .fa-shint {
  font-size: 12px; color: var(--fa-muted);
  margin-left: auto;
}

/* ---- plot block ---- */
.fa-root .fa-plot {
  background: var(--fa-panel-softer);
  padding: 4px 24px 20px;
  display: flex; justify-content: center;
}
.fa-root .fa-plot svg { display: block; width: 100%; height: auto; }
.fa-root .fa-plot svg text { font-family: 'Inter', sans-serif; }

.fa-root .fa-plot .fa-grid   { stroke: var(--fa-line); stroke-width: 0.8; }
.fa-root .fa-plot .fa-axis   { stroke: var(--fa-muted); stroke-width: 1; }
.fa-root .fa-plot .fa-axis-strong { stroke: var(--fa-ink); stroke-width: 1.2; }
.fa-root .fa-plot .fa-tick   { stroke: var(--fa-muted); stroke-width: 1; }
.fa-root .fa-plot .fa-axis-lbl {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; fill: var(--fa-muted);
}
.fa-root .fa-plot .fa-curve {
  fill: none; stroke: var(--fa-title); stroke-width: 2.4;
  stroke-linecap: round; stroke-linejoin: round;
}
.fa-root .fa-plot .fa-dot      { fill: var(--fa-title); stroke: #ffffff; stroke-width: 2; }
.fa-root .fa-plot .fa-dot-warm { fill: var(--fa-warm);  stroke: #ffffff; stroke-width: 2; }
.fa-root .fa-plot .fa-guide {
  stroke: var(--fa-muted); stroke-width: 0.9;
  stroke-dasharray: 3 3; opacity: 0.45;
}
.fa-root .fa-plot .fa-flabel {
  font-family: 'Inter', serif; font-style: italic; font-size: 11px;
  fill: var(--fa-title);
}

.fa-root .fa-plot .fa-badge circle      { fill: var(--fa-accent); }
.fa-root .fa-plot .fa-badge.fa-w circle { fill: var(--fa-warm); }
.fa-root .fa-plot .fa-badge text {
  fill: #ffffff;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px; font-weight: 700;
  text-anchor: middle; dominant-baseline: central;
}

.fa-root .fa-plot .fa-row-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  fill: var(--fa-muted); font-weight: 700;
}
.fa-root .fa-plot .fa-strip { rx: 3; ry: 3; }
.fa-root .fa-plot .fa-strip.fa-pos  { fill: var(--fa-accent); }
.fa-root .fa-plot .fa-strip.fa-neg  { fill: var(--fa-warm); }
.fa-root .fa-plot .fa-strip.fa-soft { fill: var(--fa-indigo-soft); }
.fa-root .fa-plot .fa-sign {
  font-family: 'Inter', serif; font-weight: 700; font-size: 15px;
  fill: #ffffff; text-anchor: middle; dominant-baseline: central;
}
.fa-root .fa-plot .fa-strip-txt {
  font-family: 'Inter', sans-serif; font-size: 10.5px; font-weight: 700;
  fill: #ffffff; text-anchor: middle; dominant-baseline: central;
}
.fa-root .fa-plot .fa-strip-txt.fa-on-soft {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  fill: var(--fa-accent);
}
.fa-root .fa-plot .fa-arrow { fill: #ffffff; }

/* ---- legend ---- */
.fa-root .fa-legend {
  padding: 4px 32px 18px;
  display: flex; gap: 20px; flex-wrap: wrap; align-items: center;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  color: var(--fa-muted);
  letter-spacing: 0.08em;
}
.fa-root .fa-legend span { display: inline-flex; align-items: center; gap: 6px; }
.fa-root .fa-legend .fa-sw {
  width: 12px; height: 12px; border-radius: 3px; display: inline-block;
}
.fa-root .fa-legend .fa-sw.fa-pos  { background: var(--fa-accent); }
.fa-root .fa-legend .fa-sw.fa-neg  { background: var(--fa-warm); }
.fa-root .fa-legend .fa-sw.fa-soft { background: var(--fa-indigo-soft); }
.fa-root .fa-legend .fa-sw.fa-dot  {
  background: var(--fa-accent); border-radius: 50%;
  width: 10px; height: 10px;
}

/* ---- properties ---- */
.fa-root .fa-props { padding: 4px 24px 24px; }
.fa-root .fa-pgroup + .fa-pgroup { margin-top: 18px; }
.fa-root .fa-pgroup .fa-ghead {
  display: flex; align-items: baseline; gap: 12px;
  padding: 0 8px 8px;
  border-bottom: 1px solid var(--fa-line);
  margin-bottom: 10px;
}
.fa-root .fa-pgroup .fa-ghead .fa-gn {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--fa-accent);
  font-weight: 700;
}
.fa-root .fa-pgroup .fa-ghead .fa-gname {
  font-size: 13.5px; font-weight: 700; color: var(--fa-title);
}
.fa-root .fa-pgroup .fa-ghead .fa-gnote {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px;
  color: var(--fa-muted);
  letter-spacing: 0.08em;
  margin-left: auto;
}

.fa-root .fa-prows {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 28px;
}
.fa-root .fa-prow {
  display: grid;
  grid-template-columns: 26px 130px 1fr;
  gap: 10px;
  align-items: baseline;
  padding: 9px 8px;
  border-bottom: 1px dashed var(--fa-line);
}
.fa-root .fa-prow .fa-b {
  width: 22px; height: 22px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--fa-accent); color: #ffffff;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 700; font-size: 10px;
  align-self: start;
}
.fa-root .fa-prow .fa-b.fa-w     { background: var(--fa-warm); }
.fa-root .fa-prow .fa-b.fa-empty {
  background: transparent;
  border: 1px dashed var(--fa-line);
}
.fa-root .fa-prow .fa-k {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--fa-muted);
}
.fa-root .fa-prow .fa-v {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12.5px;
  color: var(--fa-ink);
  font-weight: 600;
}
.fa-root .fa-prow .fa-v .fa-vsub {
  display: block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px;
  color: var(--fa-muted);
  font-weight: 500;
  margin-top: 2px;
}
.fa-root .fa-prow .fa-v.fa-t-serif {
  font-family: 'Inter', serif; font-size: 14px; color: var(--fa-title);
}
.fa-root .fa-prow .fa-v.fa-t-accent { color: var(--fa-accent); }
.fa-root .fa-prow .fa-v.fa-t-warm   { color: var(--fa-warm); }
.fa-root .fa-prow .fa-v.fa-t-na {
  color: var(--fa-muted); font-style: italic; font-weight: 500;
}

@media (max-width: 720px) {
  .fa-root .fa-head  { grid-template-columns: 1fr; }
  .fa-root .fa-prows { grid-template-columns: 1fr; }
}
`;

/* ------------------------------------------------------------------ */
/*  scale + geometry helpers (data mode)                               */
/* ------------------------------------------------------------------ */

function makeScales(graph) {
  const [x0, x1] = graph.xRange;
  const [y0, y1] = graph.yRange;
  const sx = (x) => PLOT_LEFT + ((x - x0) / (x1 - x0)) * (PLOT_RIGHT - PLOT_LEFT);
  const sy = (y) => GRAPH_BOTTOM - ((y - y0) / (y1 - y0)) * (GRAPH_BOTTOM - GRAPH_TOP);
  return { sx, sy, x0, x1, y0, y1 };
}

/* Samples the curve and returns an SVG path, breaking the path wherever the
   function is undefined or leaves the y-window. That break is what keeps
   rational functions from drawing a false vertical line through a pole. */
function buildCurvePath(graph, scales) {
  const { sx, sy, x0, x1, y0, y1 } = scales;
  const n = graph.samples || 400;

  let samples;
  if (graph.points) {
    samples = graph.points.map(([x, y]) => [x, y]);
  } else if (graph.fn) {
    samples = [];
    for (let i = 0; i <= n; i++) {
      const x = x0 + ((x1 - x0) * i) / n;
      samples.push([x, graph.fn(x)]);
    }
  } else {
    return '';
  }

  const pad = (y1 - y0) * 0.15;
  const ok = (y) => Number.isFinite(y) && y >= y0 - pad && y <= y1 + pad;

  let d = '';
  let pen = false;
  samples.forEach(([x, y]) => {
    if (!ok(y)) { pen = false; return; }
    const px = sx(x).toFixed(2);
    const py = sy(y).toFixed(2);
    d += (pen ? ' L ' : ' M ') + px + ' ' + py;
    pen = true;
  });
  return d.trim();
}

function integerTicks(x0, x1) {
  const out = [];
  for (let v = Math.ceil(x0); v <= Math.floor(x1); v++) out.push(v);
  return out;
}

/* ------------------------------------------------------------------ */
/*  badge numbering                                                    */
/* ------------------------------------------------------------------ */

function numberFeatures(features) {
  const map = {};
  let n = 0;
  (features || []).forEach((f) => {
    if (f.badge === false) { map[f.id] = null; return; }
    n += 1;
    map[f.id] = n;
  });
  return map;
}

/* ------------------------------------------------------------------ */
/*  head                                                               */
/* ------------------------------------------------------------------ */

function Head({ header, quickStats }) {
  return (
    <div className="fa-head">
      <div>
        {header.kicker && <div className="fa-kicker">{header.kicker}</div>}
        <h2>{header.title}</h2>
        {header.formula && <div className="fa-formula">{header.formula}</div>}
      </div>
      {quickStats && quickStats.length > 0 && (
        <div className="fa-stats">
          {quickStats.map((s, i) => (
            <div className="fa-stat" key={i}>
              <div className="fa-n">{s.n}</div>
              <div className="fa-l">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionHead({ meta, fallback }) {
  const m = meta || {};
  return (
    <div className="fa-section-head">
      {(m.number || fallback.number) && (
        <span className="fa-sn">{m.number || fallback.number}</span>
      )}
      <span className="fa-sname">{m.name || fallback.name}</span>
      {(m.hint || fallback.hint) && (
        <span className="fa-shint">{m.hint || fallback.hint}</span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  plot — data mode                                                   */
/* ------------------------------------------------------------------ */

function DataPlot({ graph, features, intervals, numbers }) {
  const scales = makeScales(graph);
  const { sx, sy, x0, x1, y0, y1 } = scales;

  const rows    = intervals || [];
  const hasStr  = rows.length > 0;
  const vbH     = hasStr
    ? STRIP_START + rows.length * STRIP_GAP + 6
    : GRAPH_BOTTOM + 40;

  const xTicks = graph.xTicks || integerTicks(x0, x1);
  const yTicks = graph.yTicks || [];

  const curveD = buildCurvePath(graph, scales);

  const spanX = (v, fallbackVal) => sx(v == null ? fallbackVal : v);

  return (
    <svg viewBox={`0 0 ${VB_W} ${vbH}`} xmlns="http://www.w3.org/2000/svg">

      {/* grid */}
      <g className="fa-grid">
        {xTicks.map((t, i) => (
          <line key={'gx' + i} x1={sx(t)} y1={GRAPH_TOP} x2={sx(t)} y2={GRAPH_BOTTOM} />
        ))}
        {yTicks.map((t, i) => (
          <line key={'gy' + i} x1={PLOT_LEFT} y1={sy(t)} x2={PLOT_RIGHT} y2={sy(t)} />
        ))}
      </g>

      {/* axes */}
      {y0 <= 0 && y1 >= 0 && (
        <line className="fa-axis" x1={PLOT_LEFT} y1={sy(0)} x2={PLOT_RIGHT} y2={sy(0)} />
      )}
      {x0 <= 0 && x1 >= 0 && (
        <line className="fa-axis" x1={sx(0)} y1={GRAPH_TOP} x2={sx(0)} y2={GRAPH_BOTTOM} />
      )}

      {/* y tick labels */}
      <g className="fa-axis-lbl">
        {yTicks.map((t, i) => (
          <text key={'yl' + i} x={sx(0) - 8} y={sy(t) + 4} textAnchor="end">
            {t < 0 ? '\u2212' + Math.abs(t) : t}
          </text>
        ))}
      </g>

      {/* caller extras, drawn in the same pixel space */}
      {graph.extraContent}

      {/* the curve */}
      {curveD && <path className="fa-curve" d={curveD} />}

      {/* drop lines from features down to the strip axis */}
      {hasStr && (features || []).map((f) =>
        f.dropLine
          ? f.points.map((p, i) => (
              <line
                key={f.id + '-drop-' + i}
                className="fa-guide"
                x1={sx(p.x)} y1={sy(p.y)}
                x2={sx(p.x)} y2={STRIP_AXIS_Y}
              />
            ))
          : null
      )}

      {/* feature dots */}
      {(features || []).map((f) =>
        f.points.map((p, i) => (
          <circle
            key={f.id + '-dot-' + i}
            className={f.kind === 'warm' ? 'fa-dot-warm' : 'fa-dot'}
            cx={sx(p.x)} cy={sy(p.y)}
            r={p.r || (f.kind === 'warm' ? 6 : 5)}
          />
        ))
      )}

      {/* badges */}
      {(features || []).map((f) => {
        const num = numbers[f.id];
        if (num == null) return null;
        return f.points.map((p, i) => (
          <g
            key={f.id + '-badge-' + i}
            className={'fa-badge' + (f.kind === 'warm' ? ' fa-w' : '')}
            transform={`translate(${sx(p.x) + (p.dx == null ? -24 : p.dx)} ${sy(p.y) + (p.dy == null ? -24 : p.dy)})`}
          >
            <circle r="12" />
            <text>{num}</text>
          </g>
        ));
      })}

      {/* ============ strip band ============ */}
      {hasStr && (
        <>
          <line
            className="fa-axis-strong"
            x1={PLOT_LEFT} y1={STRIP_AXIS_Y}
            x2={PLOT_RIGHT} y2={STRIP_AXIS_Y}
          />
          <g>
            {xTicks.map((t, i) => (
              <line
                key={'tk' + i}
                className="fa-tick"
                x1={sx(t)} y1={STRIP_AXIS_Y - 5}
                x2={sx(t)} y2={STRIP_AXIS_Y + 5}
              />
            ))}
          </g>
          <g className="fa-axis-lbl">
            {xTicks.map((t, i) => (
              <text key={'tl' + i} x={sx(t)} y={STRIP_AXIS_Y - 14} textAnchor="middle">
                {t < 0 ? '\u2212' + Math.abs(t) : t}
              </text>
            ))}
          </g>

          {/* feature dots repeated on the strip axis, so the eye can carry across */}
          {(features || []).map((f) =>
            f.dropLine
              ? f.points.map((p, i) => (
                  <circle
                    key={f.id + '-axis-' + i}
                    className={f.kind === 'warm' ? 'fa-dot-warm' : 'fa-dot'}
                    cx={sx(p.x)} cy={STRIP_AXIS_Y} r="4"
                  />
                ))
              : null
          )}

          {rows.map((row, ri) => {
            const top = STRIP_START + ri * STRIP_GAP;
            const mid = top + STRIP_H / 2;
            return (
              <g key={'row' + ri}>
                <text className="fa-row-label" x="18" y={mid} dominantBaseline="middle">
                  {row.label}
                </text>
                {row.spans.map((s, si) => {
                  const a = spanX(s.from, x0);
                  const b = spanX(s.to,   x1);
                  const w = Math.max(0, b - a);
                  const cx = a + w / 2;
                  return (
                    <g key={'span' + si}>
                      <rect
                        className={'fa-strip fa-' + s.kind}
                        x={a} y={top} width={w} height={STRIP_H}
                      />
                      {s.sign && (
                        <text className="fa-sign" x={cx} y={mid}>{s.sign}</text>
                      )}
                      {s.text && (
                        <text
                          className={'fa-strip-txt' + (s.kind === 'soft' ? ' fa-on-soft' : '')}
                          x={cx} y={mid}
                        >
                          {s.text}
                        </text>
                      )}
                      {s.arrow === 'right' && (
                        <polygon
                          className="fa-arrow"
                          points={`${b - 30},${mid - 6} ${b - 13},${mid} ${b - 30},${mid + 6}`}
                        />
                      )}
                      {s.arrow === 'left' && (
                        <polygon
                          className="fa-arrow"
                          points={`${a + 30},${mid - 6} ${a + 13},${mid} ${a + 30},${mid + 6}`}
                        />
                      )}
                    </g>
                  );
                })}
              </g>
            );
          })}
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  plot — svg mode                                                    */
/* ------------------------------------------------------------------ */

function SvgPlot({ graph, features, numbers }) {
  return (
    <svg
      viewBox={graph.viewBox}
      style={{ maxWidth: `${graph.maxWidth || VB_W}px` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {graph.content}
      {(features || []).map((f) => {
        const num = numbers[f.id];
        if (num == null) return null;
        return f.points.map((p, i) => (
          <g
            key={f.id + '-badge-' + i}
            className={'fa-badge' + (f.kind === 'warm' ? ' fa-w' : '')}
            transform={`translate(${p.x + (p.dx || 0)} ${p.y + (p.dy || 0)})`}
          >
            <circle r="12" />
            <text>{num}</text>
          </g>
        ));
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  legend                                                             */
/* ------------------------------------------------------------------ */

function Legend({ hasStrips }) {
  if (!hasStrips) {
    return (
      <div className="fa-legend">
        <span><span className="fa-sw fa-dot"></span>Numbered feature &mdash; see the table below</span>
      </div>
    );
  }
  return (
    <div className="fa-legend">
      <span><span className="fa-sw fa-soft"></span>Defined</span>
      <span><span className="fa-sw fa-pos"></span>Positive &middot; increasing &middot; concave up</span>
      <span><span className="fa-sw fa-neg"></span>Negative &middot; decreasing &middot; concave down</span>
      <span><span className="fa-sw fa-dot"></span>Numbered feature &mdash; see the table below</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  properties                                                         */
/* ------------------------------------------------------------------ */

function Properties({ groups, features, numbers }) {
  const kindOf = {};
  (features || []).forEach((f) => { kindOf[f.id] = f.kind; });

  return (
    <div className="fa-props">
      {groups.map((g, gi) => (
        <div className="fa-pgroup" key={gi}>
          <div className="fa-ghead">
            {g.letter && <span className="fa-gn">{g.letter}</span>}
            <span className="fa-gname">{g.name}</span>
            {g.note && <span className="fa-gnote">{g.note}</span>}
          </div>
          <div className="fa-prows">
            {g.rows.map((r, ri) => {
              const num  = r.featureId ? numbers[r.featureId] : null;
              const warm = r.featureId && kindOf[r.featureId] === 'warm';
              const tone = r.tone ? ' fa-t-' + r.tone : '';
              return (
                <div className="fa-prow" key={ri}>
                  {num != null ? (
                    <div className={'fa-b' + (warm ? ' fa-w' : '')}>{num}</div>
                  ) : (
                    <div className="fa-b fa-empty"></div>
                  )}
                  <div className="fa-k">{r.label}</div>
                  <div className={'fa-v' + tone}>
                    {r.value}
                    {r.sub && <span className="fa-vsub">{r.sub}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

export default function FunctionAnalysis({ data, variant = 'full', theme }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };

  const svgMode  = Boolean(data.graph && data.graph.content);
  const numbers  = numberFeatures(data.features);
  const intervals = svgMode ? null : data.intervals;
  const hasStrips = Boolean(intervals && intervals.length);

  const showPlot  = variant !== 'table';
  const showProps = variant !== 'plot' && data.properties && data.properties.length > 0;

  const sections = data.sections || {};

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="fa-root" style={cssVars(t)}>
        <div className="fa-card">

          {data.header && (
            <Head header={data.header} quickStats={data.quickStats} />
          )}

          {showPlot && (
            <div className="fa-section">
              <SectionHead
                meta={sections.plot}
                fallback={{
                  number: '01',
                  name: hasStrips
                    ? 'The graph, and what happens along x'
                    : 'The graph',
                  hint: hasStrips
                    ? 'Strips share the graph x-axis exactly'
                    : undefined,
                }}
              />
              <div className="fa-plot">
                {svgMode ? (
                  <SvgPlot
                    graph={data.graph}
                    features={data.features}
                    numbers={numbers}
                  />
                ) : (
                  <DataPlot
                    graph={data.graph}
                    features={data.features}
                    intervals={intervals}
                    numbers={numbers}
                  />
                )}
              </div>
              <Legend hasStrips={hasStrips} />
            </div>
          )}

          {showProps && (
            <div className="fa-section">
              <SectionHead
                meta={sections.props}
                fallback={{
                  number: showPlot ? '02' : '01',
                  name: 'Point properties',
                  hint: 'Numbered rows match the badges on the graph',
                }}
              />
              <Properties
                groups={data.properties}
                features={data.features}
                numbers={numbers}
              />
            </div>
          )}

        </div>
      </div>
    </>
  );
}
