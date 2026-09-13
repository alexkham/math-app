/*
  SymbolLegend.jsx

  A legend for the notation used across a topic. Two layouts.

  ------------------------------------------------------------------
  CONTENT FORMAT
  ------------------------------------------------------------------
  Every text-bearing field is a plain string, passed through
  processContent, so the site markup applies as usual:

      $x \in \mathbb{R}$        inline KaTeX
      **bold**                  bold
      @[code]@                  inline code
      [label](!/path)           internal link

  The symbol itself is a string too, so a caller can write either a
  literal glyph or LaTeX &mdash; whichever reads better in the source:

      symbol: '\u2208'
      symbol: '$\\forall$'

  ------------------------------------------------------------------
  PROPS
  ------------------------------------------------------------------
  data     required object, shape:

    {
      header?: {
        kicker?: string,
        title:   string,
        lede?:   string
      },

      // GRID VARIANT reads this.
      // If only `groups` is supplied, the grid flattens them automatically.
      symbols?: Symbol[],

      // LEGEND VARIANT reads this.
      // If only `symbols` is supplied, the legend renders one unnamed group.
      groups?: Group[],

      columns?: number          // grid variant column count. default 4
    }

    Symbol = {
      id:       string,
      symbol:   string,         // the glyph, or LaTeX for it
      name:     string,         // e.g. 'Element of'
      reading?: string,         // how it is said aloud, e.g. 'is in'
      example?: string          // a short usage, e.g. '$x \\in \\mathbb{R}$'
    }

    Group = {
      id:      string,
      label:   string,          // e.g. 'Set membership'
      note?:   string,          // right-aligned caption; defaults to a count
      symbols: Symbol[]
    }

  variant  'grid' | 'legend'    (default: 'grid')

  theme    optional partial theme, merged over DEFAULT_THEME (exported).
*/

import React from 'react';

// Replace this with the real path in your tree.
import {processContent} from '../../utils/contentProcessor'
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
};

const cssVars = (t) => ({
  '--sl-bg':           t.bg,
  '--sl-panel':        t.panel,
  '--sl-panel-soft':   t.panelSoft,
  '--sl-panel-softer': t.panelSofter,
  '--sl-ink':          t.ink,
  '--sl-title':        t.title,
  '--sl-muted':        t.muted,
  '--sl-line':         t.line,
  '--sl-accent':       t.accent,
  '--sl-warm':         t.warm,
});

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.sl-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--sl-ink);
  line-height: 1.5;
}
.sl-root .sl-card {
  background: var(--sl-panel);
  border: 1px solid var(--sl-line);
  border-radius: 8px;
  overflow: hidden;
}

/* processContent emits <br/> after single-line input; suppress it where
   the surrounding box already controls its own spacing. */
.sl-root .sl-inline br { display: none; }
.sl-root .sl-inline p  { margin: 0; }

/* ---- head ---- */
.sl-root .sl-head {
  padding: 26px 32px 20px;
  border-bottom: 1px solid var(--sl-line);
}
.sl-root .sl-head .sl-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--sl-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.sl-root .sl-head h2 {
  font-size: 24px; font-weight: 800;
  color: var(--sl-title); margin: 0;
  letter-spacing: -0.01em;
}
.sl-root .sl-head .sl-lede {
  color: var(--sl-muted);
  font-size: 13px;
  margin-top: 6px;
  max-width: 640px;
}

/* ================================================================= */
/*  GRID VARIANT                                                       */
/* ================================================================= */

.sl-root .sl-grid {
  display: grid;
  gap: 10px;
  padding: 20px;
}
.sl-root .sl-tile {
  border: 1px solid var(--sl-line);
  border-radius: 6px;
  background: var(--sl-panel);
  overflow: hidden;
  display: flex; flex-direction: column;
}
.sl-root .sl-tile .sl-sym {
  background: var(--sl-panel-softer);
  border-bottom: 1px solid var(--sl-line);
  height: 88px;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Inter', serif;
  font-size: 40px;
  color: var(--sl-accent);
  line-height: 1;
}
/* KaTeX inherits the tile size rather than its own default */
.sl-root .sl-tile .sl-sym .katex { font-size: 1em; color: var(--sl-accent); }

.sl-root .sl-tile .sl-body {
  padding: 12px 14px 14px;
  display: flex; flex-direction: column; gap: 4px;
  flex: 1;
}
.sl-root .sl-tile .sl-name {
  font-size: 13px; font-weight: 700;
  color: var(--sl-title);
  letter-spacing: -0.01em;
}
.sl-root .sl-tile .sl-reading {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sl-muted);
}
.sl-root .sl-tile .sl-ex {
  font-family: 'Inter', serif;
  font-size: 12.5px;
  color: var(--sl-ink);
  padding: 6px 8px;
  background: var(--sl-panel-softer);
  border-radius: 4px;
  margin-top: 6px;
}
.sl-root .sl-tile .sl-ex .katex { font-size: 1em; }

/* ================================================================= */
/*  LEGEND VARIANT                                                     */
/* ================================================================= */

.sl-root .sl-legend { padding: 20px 32px 28px; }
.sl-root .sl-group + .sl-group { margin-top: 24px; }

.sl-root .sl-group .sl-ghead {
  display: flex; align-items: baseline; gap: 14px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--sl-line);
}
.sl-root .sl-group .sl-ghead .sl-gn {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--sl-accent);
  font-weight: 700;
}
.sl-root .sl-group .sl-ghead .sl-gname {
  font-size: 15px; font-weight: 700;
  color: var(--sl-title);
  letter-spacing: -0.01em;
}
.sl-root .sl-group .sl-ghead .sl-gnote {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  color: var(--sl-muted);
  letter-spacing: 0.08em;
  margin-left: auto;
}

.sl-root .sl-rows {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px 24px;
}
.sl-root .sl-row {
  display: grid;
  grid-template-columns: 44px 1fr auto;
  gap: 12px;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 1px dashed var(--sl-line);
}
.sl-root .sl-row .sl-rsym {
  font-family: 'Inter', serif;
  font-size: 20px;
  color: var(--sl-accent);
  font-weight: 600;
  text-align: center;
  line-height: 1;
}
.sl-root .sl-row .sl-rsym .katex { font-size: 1em; color: var(--sl-accent); }

.sl-root .sl-row .sl-info {
  display: flex; flex-direction: column; gap: 2px;
}
.sl-root .sl-row .sl-info .sl-rname {
  font-size: 12.5px; font-weight: 600;
  color: var(--sl-title);
}
.sl-root .sl-row .sl-info .sl-rreading {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--sl-muted);
}
.sl-root .sl-row .sl-rex {
  font-family: 'Inter', serif;
  font-size: 12px;
  color: var(--sl-muted);
  white-space: nowrap;
}
.sl-root .sl-row .sl-rex .katex { font-size: 1em; }

@media (max-width: 720px) {
  .sl-root .sl-grid { grid-template-columns: 1fr 1fr !important; }
  .sl-root .sl-rows { grid-template-columns: 1fr; }
  .sl-root .sl-row  { grid-template-columns: 40px 1fr; }
  .sl-root .sl-row .sl-rex { grid-column: 2; white-space: normal; }
}
@media (max-width: 440px) {
  .sl-root .sl-grid { grid-template-columns: 1fr !important; }
}
`;

/* ------------------------------------------------------------------ */
/*  helpers                                                            */
/* ------------------------------------------------------------------ */

/* Wraps processContent output so the shared <br/>-suppressing rules apply. */
function Rich({ text, className }) {
  if (!text) return null;
  return (
    <span className={'sl-inline' + (className ? ' ' + className : '')}>
      {processContent(text)}
    </span>
  );
}

/* Either shape can drive either variant, so normalise once up front. */
function flatten(data) {
  if (data.symbols && data.symbols.length) return data.symbols;
  if (data.groups) {
    return data.groups.reduce((all, g) => all.concat(g.symbols), []);
  }
  return [];
}

function grouped(data) {
  if (data.groups && data.groups.length) return data.groups;
  if (data.symbols) {
    return [{ id: 'all', label: 'Notation', symbols: data.symbols }];
  }
  return [];
}

/* ------------------------------------------------------------------ */
/*  head                                                               */
/* ------------------------------------------------------------------ */

function Head({ header }) {
  return (
    <div className="sl-head">
      {header.kicker && <div className="sl-kicker">{header.kicker}</div>}
      <h2>{header.title}</h2>
      {header.lede && <div className="sl-lede"><Rich text={header.lede} /></div>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  grid variant                                                       */
/* ------------------------------------------------------------------ */

function Grid({ data }) {
  const symbols = flatten(data);
  const cols = data.columns || 4;
  return (
    <div className="sl-card">
      {data.header && <Head header={data.header} />}
      <div
        className="sl-grid"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {symbols.map((s) => (
          <div className="sl-tile" key={s.id}>
            <div className="sl-sym"><Rich text={s.symbol} /></div>
            <div className="sl-body">
              <div className="sl-name"><Rich text={s.name} /></div>
              {s.reading && (
                <div className="sl-reading"><Rich text={s.reading} /></div>
              )}
              {s.example && (
                <div className="sl-ex"><Rich text={s.example} /></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  legend variant                                                     */
/* ------------------------------------------------------------------ */

function Legend({ data }) {
  const groups = grouped(data);
  return (
    <div className="sl-card">
      {data.header && <Head header={data.header} />}
      <div className="sl-legend">
        {groups.map((g, gi) => (
          <div className="sl-group" key={g.id}>
            <div className="sl-ghead">
              <span className="sl-gn">
                {String(gi + 1).padStart(2, '0')}
              </span>
              <span className="sl-gname"><Rich text={g.label} /></span>
              <span className="sl-gnote">
                {g.note || `${g.symbols.length} symbols`}
              </span>
            </div>
            <div className="sl-rows">
              {g.symbols.map((s) => (
                <div className="sl-row" key={s.id}>
                  <div className="sl-rsym"><Rich text={s.symbol} /></div>
                  <div className="sl-info">
                    <span className="sl-rname"><Rich text={s.name} /></span>
                    {s.reading && (
                      <span className="sl-rreading"><Rich text={s.reading} /></span>
                    )}
                  </div>
                  <div className="sl-rex">
                    {s.example && <Rich text={s.example} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

export default function SymbolLegend({ data, variant = 'grid', theme }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const V = variant === 'legend' ? Legend : Grid;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="sl-root" style={cssVars(t)}>
        <V data={data} />
      </div>
    </>
  );
}
