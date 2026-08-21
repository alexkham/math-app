/*
  FormulaAnatomy.jsx

  Anatomised formula infographic with two layouts.

  Props
  -----
  data     required object, shape:
             {
               header?: {
                 kicker?: string,
                 title:   string,
                 lede?:   string
               },
               formula: FormulaNode[],
               parts:   PartDef[]
             }

             FormulaNode =
                | { kind: 'var',  text: string }                       // italic variable letter(s)
                | { kind: 'op',   text: string }                       // roman operator or numeral
                | { kind: 'sup',  children: FormulaNode[] }            // superscript
                | { kind: 'frac', num: FormulaNode[], den: FormulaNode[] }
                | { kind: 'rad',  children: FormulaNode[] }            // radical with overline
                | { kind: 'part', id: string, children: FormulaNode[] } // wraps a highlighted part

             PartDef = {
               id:     string,       // matches a formula part id
               color:  string,       // any CSS color; drives chip / hit tint / connector
               chip:   string,       // short label shown in the callout chip
               title:  string,       // short name
               desc:   string,       // one- or two-sentence description
               side?:  'top' | 'bottom'   // poster variant only. default 'top'
             }

  variant  'poster' | 'legend'   (default: 'poster')

  theme    optional partial theme, merged over DEFAULT_THEME (exported).
*/

'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

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
});

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
.fa-root .fa-head {
  padding: 26px 32px 20px;
  border-bottom: 1px solid var(--fa-line);
}
.fa-root .fa-head .kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--fa-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.fa-root .fa-head h2 {
  font-size: 24px; font-weight: 800;
  color: var(--fa-title); margin: 0;
  letter-spacing: -0.01em;
}
.fa-root .fa-head .lede {
  color: var(--fa-muted);
  font-size: 13px;
  margin-top: 6px;
  max-width: 640px;
}

/* ---- formula rendering (shared) ---- */
.fa-formula { font-family: 'Inter', serif; color: var(--fa-ink); }
.fa-formula .fa-var { font-style: italic; }
.fa-formula .fa-op  { font-style: normal; }
.fa-formula .fa-sup {
  font-size: 0.55em; font-style: italic;
  vertical-align: super;
}
.fa-formula .fa-frac {
  display: inline-flex; flex-direction: column;
  align-items: center; vertical-align: middle;
  line-height: 1;
}
.fa-formula .fa-num, .fa-formula .fa-den {
  padding: 0 8px;
  display: inline-flex; align-items: center;
  gap: 4px;
}
.fa-formula .fa-bar {
  height: 2.5px; width: 100%;
  background: currentColor;
  margin: 5px 0;
}
.fa-formula .fa-rad {
  display: inline-flex; align-items: baseline; gap: 1px;
}
.fa-formula .fa-rad-sym { font-size: 1.15em; }
.fa-formula .fa-rad-under {
  border-top: 2px solid currentColor;
  padding-top: 1px;
  display: inline-flex; align-items: baseline;
  line-height: 1;
}
.fa-formula .fa-part {
  padding: 2px 5px; border-radius: 4px;
  background: color-mix(in srgb, var(--fa-part-color) 16%, transparent);
  color: var(--fa-part-color);
  position: relative;
  display: inline-flex; align-items: baseline;
  gap: 2px;
}
.fa-formula .fa-part-badge {
  position: absolute; top: -14px; right: -10px;
  width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 700; font-size: 11px;
  color: #ffffff;
  background: var(--fa-part-color);
}

/* ---- poster ---- */
.fa-poster {
  position: relative;
  background: var(--fa-panel-softer);
  padding: 40px 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 40px;
  align-items: center;
}
.fa-poster .fa-callout-row {
  display: grid;
  gap: 16px;
  z-index: 2;
}
.fa-poster .fa-callout-row.top,
.fa-poster .fa-callout-row.bottom {
  padding: 0 24px;
}
.fa-poster .fa-formula-wrap {
  display: flex; justify-content: center;
  z-index: 2;
  font-size: 32px;
}
.fa-poster .fa-callout {
  background: var(--fa-panel);
  border: 1.5px solid var(--fa-part-color);
  border-radius: 6px;
  padding: 14px 16px 16px;
  position: relative;
  overflow: hidden;
  min-height: 100px;
}
.fa-poster .fa-callout .fa-strip {
  position: absolute; top: 0; left: 0; right: 0;
  height: 6px;
  background: var(--fa-part-color);
}
.fa-poster .fa-callout .fa-chip {
  display: inline-block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 700; font-size: 11px;
  color: #ffffff;
  background: var(--fa-part-color);
  padding: 3px 8px; border-radius: 3px;
  margin-top: 6px; margin-bottom: 10px;
}
.fa-poster .fa-callout .fa-title-c {
  font-weight: 700; font-size: 13px;
  color: var(--fa-title);
  margin-bottom: 4px;
}
.fa-poster .fa-callout .fa-desc {
  font-size: 11.5px; color: var(--fa-muted);
  line-height: 1.45;
}
.fa-poster .fa-conn-svg {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 1;
}

/* ---- legend ---- */
.fa-legend-hero {
  padding: 44px 32px 40px;
  background: var(--fa-panel-softer);
  border-bottom: 1px solid var(--fa-line);
  display: flex; align-items: center; justify-content: center;
}
.fa-legend-hero .fa-formula { font-size: 44px; }
.fa-legend-body { padding: 24px 32px 32px; }
.fa-legend-body .fa-legend-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--fa-muted);
  margin-bottom: 14px;
}
.fa-legend-body .fa-entries {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.fa-legend-body .fa-entry {
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 14px;
  padding: 14px 16px;
  border: 1px solid var(--fa-line);
  border-radius: 6px;
  background: var(--fa-panel);
}
.fa-legend-body .fa-entry-num {
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 700; font-size: 12px;
  color: #ffffff;
  align-self: start;
  background: var(--fa-part-color);
}
.fa-legend-body .fa-entry-top {
  display: flex; align-items: baseline; gap: 10px;
  margin-bottom: 4px;
}
.fa-legend-body .fa-entry-sym {
  font-family: 'Inter', serif; font-style: italic;
  font-size: 20px; font-weight: 700;
  padding: 2px 8px; border-radius: 4px;
  background: color-mix(in srgb, var(--fa-part-color) 16%, transparent);
  color: var(--fa-part-color);
}
.fa-legend-body .fa-entry-name {
  font-weight: 700; font-size: 14px;
  color: var(--fa-title);
}
.fa-legend-body .fa-entry-desc {
  font-size: 12.5px; color: var(--fa-ink);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .fa-poster .fa-callout-row.top,
  .fa-poster .fa-callout-row.bottom {
    grid-template-columns: 1fr !important;
  }
  .fa-legend-body .fa-entries { grid-template-columns: 1fr; }
  .fa-poster .fa-formula-wrap { font-size: 26px; }
  .fa-legend-hero .fa-formula { font-size: 32px; }
}
`;

/* ------------------------------------------------------------------ */
/*  formula renderer                                                   */
/* ------------------------------------------------------------------ */

function renderNodes(nodes, colorMap, partRefs, numbered) {
  return nodes.map((n, i) => renderNode(n, i, colorMap, partRefs, numbered));
}

function renderNode(node, key, colorMap, partRefs, numbered) {
  switch (node.kind) {
    case 'var':
      return <span key={key} className="fa-var">{processContent(node.text)}</span>;
    case 'op':
      return <span key={key} className="fa-op">{processContent(node.text)}</span>;
    case 'sup':
      return (
        <span key={key} className="fa-sup">
          {renderNodes(node.children, colorMap, partRefs, numbered)}
        </span>
      );
    case 'frac':
      return (
        <span key={key} className="fa-frac">
          <span className="fa-num">{renderNodes(node.num, colorMap, partRefs, numbered)}</span>
          <span className="fa-bar"/>
          <span className="fa-den">{renderNodes(node.den, colorMap, partRefs, numbered)}</span>
        </span>
      );
    case 'rad':
      return (
        <span key={key} className="fa-rad">
          <span className="fa-rad-sym">&#8730;</span>
          <span className="fa-rad-under">
            {renderNodes(node.children, colorMap, partRefs, numbered)}
          </span>
        </span>
      );
    case 'part': {
      const color = colorMap[node.id] || 'currentColor';
      const refFn = partRefs
        ? (el) => { if (el) partRefs.current[node.id] = el; }
        : undefined;
      const num = numbered ? numbered[node.id] : null;
      return (
        <span
          key={key}
          className="fa-part"
          ref={refFn}
          data-part-id={node.id}
          style={{ '--fa-part-color': color }}
        >
          {renderNodes(node.children, colorMap, partRefs, numbered)}
          {num != null && <span className="fa-part-badge">{num}</span>}
        </span>
      );
    }
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  poster variant                                                     */
/* ------------------------------------------------------------------ */

function Poster({ data }) {
  const containerRef = useRef(null);
  const partRefs     = useRef({});
  const calloutRefs  = useRef({});
  const [conns, setConns] = useState([]);
  const [dims,  setDims]  = useState({ w: 0, h: 0 });

  const colorMap  = Object.fromEntries(data.parts.map((p) => [p.id, p.color]));
  const topParts    = data.parts.filter((p) => (p.side || 'top') === 'top');
  const bottomParts = data.parts.filter((p) => p.side === 'bottom');

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      setDims({ w: cRect.width, h: cRect.height });

      const out = [];
      data.parts.forEach((p) => {
        const partEl    = partRefs.current[p.id];
        const calloutEl = calloutRefs.current[p.id];
        if (!partEl || !calloutEl) return;
        const pr = partEl.getBoundingClientRect();
        const cr = calloutEl.getBoundingClientRect();

        const partCx = pr.left + pr.width  / 2 - cRect.left;
        const isTop  = (p.side || 'top') === 'top';
        const partAnchorY = isTop
          ? pr.top    - cRect.top
          : pr.bottom - cRect.top;

        const calloutCx = cr.left + cr.width / 2 - cRect.left;
        const calloutY  = isTop
          ? cr.bottom - cRect.top
          : cr.top    - cRect.top;

        const midY = (calloutY + partAnchorY) / 2;
        const path = `M ${calloutCx} ${calloutY} Q ${calloutCx} ${midY} ${partCx} ${partAnchorY}`;

        out.push({ id: p.id, color: p.color, path, x: partCx, y: partAnchorY });
      });
      setConns(out);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [data]);

  const renderCallout = (p) => (
    <div
      key={p.id}
      className="fa-callout"
      ref={(el) => { if (el) calloutRefs.current[p.id] = el; }}
      style={{ '--fa-part-color': p.color }}
    >
      <div className="fa-strip"/>
      <div className="fa-chip">{processContent(p.chip)}</div>
      <div className="fa-title-c">{processContent(p.title)}</div>
      <div className="fa-desc">{processContent(p.desc)}</div>
    </div>
  );

  const topCols    = topParts.length    || 1;
  const bottomCols = bottomParts.length || 1;

  return (
    <div className="fa-card">
      {data.header && (
        <div className="fa-head">
          {data.header.kicker && <div className="kicker">{processContent(data.header.kicker)}</div>}
          <h2>{processContent(data.header.title)}</h2>
          {data.header.lede && <div className="lede">{processContent(data.header.lede)}</div>}
        </div>
      )}
      <div className="fa-poster" ref={containerRef}>
        {topParts.length > 0 && (
          <div className="fa-callout-row top"
               style={{ gridTemplateColumns: `repeat(${topCols}, 1fr)` }}>
            {topParts.map(renderCallout)}
          </div>
        )}
        <div className="fa-formula-wrap">
          <div className="fa-formula">
            {renderNodes(data.formula, colorMap, partRefs, null)}
          </div>
        </div>
        {bottomParts.length > 0 && (
          <div className="fa-callout-row bottom"
               style={{ gridTemplateColumns: `repeat(${bottomCols}, 1fr)` }}>
            {bottomParts.map(renderCallout)}
          </div>
        )}
        <svg
          className="fa-conn-svg"
          viewBox={`0 0 ${dims.w || 1} ${dims.h || 1}`}
          preserveAspectRatio="none"
        >
          {conns.map((c) => (
            <g key={c.id}>
              <path
                d={c.path}
                stroke={c.color}
                strokeWidth="1.5"
                strokeDasharray="3 3"
                fill="none"
              />
              <circle
                cx={c.x}
                cy={c.y}
                r="4"
                fill={c.color}
                stroke="#ffffff"
                strokeWidth="2"
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  legend variant                                                     */
/* ------------------------------------------------------------------ */

function Legend({ data }) {
  const colorMap = Object.fromEntries(data.parts.map((p) => [p.id, p.color]));
  const numbered = Object.fromEntries(data.parts.map((p, i) => [p.id, i + 1]));

  return (
    <div className="fa-card">
      {data.header && (
        <div className="fa-head">
          {data.header.kicker && <div className="kicker">{processContent(data.header.kicker)}</div>}
          <h2>{processContent(data.header.title)}</h2>
          {data.header.lede && <div className="lede">{processContent(data.header.lede)}</div>}
        </div>
      )}
      <div className="fa-legend-hero">
        <div className="fa-formula">
          {renderNodes(data.formula, colorMap, null, numbered)}
        </div>
      </div>
      <div className="fa-legend-body">
        <div className="fa-legend-label">Legend</div>
        <div className="fa-entries">
          {data.parts.map((p, i) => (
            <div key={p.id} className="fa-entry" style={{ '--fa-part-color': p.color }}>
              <div className="fa-entry-num">{i + 1}</div>
              <div className="fa-entry-body">
                <div className="fa-entry-top">
                  <span className="fa-entry-sym">{processContent(p.chip)}</span>
                  <span className="fa-entry-name">{processContent(p.title)}</span>
                </div>
                <div className="fa-entry-desc">{processContent(p.desc)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

export default function FormulaAnatomy({ data, variant = 'poster', theme }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const V = variant === 'legend' ? Legend : Poster;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="fa-root" style={cssVars(t)}>
        <V data={data} />
      </div>
    </>
  );
}