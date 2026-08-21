/*
  MultiItemComparison.jsx

  A multi-item (3+) comparison infographic with three layouts.

  Props
  -----
  data     required object, shape:
             {
               header: {
                 kicker?: string,
                 title:   string,
                 lede?:   string
               },
               items: Item[],
               attributes: Attr[]
             }

             Item = {
               number?: string,      // e.g. "01"
               name:   string,
               formula?: string
             }

             Attr = {
               label: string,
               mono?: boolean,       // render text values in monospace
               kind?: 'mark',        // if 'mark', values are treated as ok|no|mid
               values: Value[]       // length must match items.length
             }

             Value = string
                   | { text: string, sub?: string }
                   | 'ok' | 'no' | 'mid'          (only when kind === 'mark')

  variant  'matrix' | 'grid' | 'checklist'  (default: 'matrix')

  theme    optional partial theme, merged over defaults.
           See DEFAULT_THEME below.
*/

import React from 'react';
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
  accent2:     '#3b82f6',
  warm:        '#f59e0b',
  good:        '#059669',
  bad:         '#e11d48',
};

const cssVars = (t) => ({
  '--mic-bg':           t.bg,
  '--mic-panel':        t.panel,
  '--mic-panel-soft':   t.panelSoft,
  '--mic-panel-softer': t.panelSofter,
  '--mic-ink':          t.ink,
  '--mic-title':        t.title,
  '--mic-muted':        t.muted,
  '--mic-line':         t.line,
  '--mic-accent':       t.accent,
  '--mic-accent-2':     t.accent2,
  '--mic-warm':         t.warm,
  '--mic-good':         t.good,
  '--mic-bad':          t.bad,
});

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.mic-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--mic-ink);
  line-height: 1.5;
}
.mic-root .mic-card {
  background: var(--mic-panel);
  border: 1px solid var(--mic-line);
  border-radius: 8px;
  overflow: hidden;
}
.mic-root .mic-head {
  padding: 26px 32px 20px;
  border-bottom: 1px solid var(--mic-line);
}
.mic-root .mic-head .kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--mic-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.mic-root .mic-head h2 {
  font-size: 24px; font-weight: 800;
  color: var(--mic-title); margin: 0;
  letter-spacing: -0.01em;
}
.mic-root .mic-head .lede {
  color: var(--mic-muted);
  font-size: 13px;
  margin-top: 6px;
  max-width: 640px;
}

/* ------------ matrix ------------ */
.mic-matrix {
  display: grid;
  font-size: 13px;
}
.mic-matrix > div {
  padding: 12px 14px;
  border-bottom: 1px solid var(--mic-line);
  border-right: 1px solid var(--mic-line);
}
.mic-matrix .colhead {
  background: var(--mic-panel-softer);
  padding: 18px 14px 14px;
  border-bottom: 2px solid var(--mic-line);
}
.mic-matrix .colhead .n {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  color: var(--mic-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.mic-matrix .colhead .nm {
  font-size: 15px; font-weight: 700;
  color: var(--mic-title); margin-top: 2px;
}
.mic-matrix .colhead .form {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--mic-accent);
  background: var(--mic-panel);
  border: 1px solid var(--mic-line);
  border-radius: 4px;
  padding: 3px 6px;
  margin-top: 8px;
  display: inline-block;
}
.mic-matrix .colhead.first {
  background: transparent;
  border-bottom: 2px solid var(--mic-line);
}
.mic-matrix .rowhead {
  background: var(--mic-panel-soft);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--mic-muted);
  font-weight: 600;
  display: flex;
  align-items: center;
}
.mic-matrix .cell .sub {
  display: block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px;
  color: var(--mic-muted);
  margin-top: 3px;
}
.mic-matrix .cell.mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
}

/* ------------ grid ------------ */
.mic-grid {
  display: grid;
  gap: 14px;
  padding: 20px;
}
.mic-grid-item {
  border: 1px solid var(--mic-line);
  border-radius: 8px;
  overflow: hidden;
  background: var(--mic-panel);
  display: flex;
  flex-direction: column;
}
.mic-grid-item .cap {
  padding: 14px 16px 12px;
  background: var(--mic-panel-softer);
  border-bottom: 1px solid var(--mic-line);
}
.mic-grid-item .cap .n {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  color: var(--mic-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.mic-grid-item .cap h4 {
  font-size: 16px; font-weight: 800;
  color: var(--mic-title);
  margin: 2px 0 6px;
  letter-spacing: -0.01em;
}
.mic-grid-item .cap .form {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11.5px;
  color: var(--mic-accent);
  background: var(--mic-panel);
  border: 1px solid var(--mic-line);
  border-radius: 4px;
  padding: 3px 6px;
  display: inline-block;
}
.mic-grid-item .body { padding: 4px 0; flex: 1; }
.mic-grid-item .body .r {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 10px;
  padding: 9px 16px;
  border-bottom: 1px solid var(--mic-line);
  font-size: 12px;
}
.mic-grid-item .body .r:last-child { border-bottom: none; }
.mic-grid-item .body .r .k {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--mic-muted);
  padding-top: 2px;
}
.mic-grid-item .body .r .v.mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11.5px;
}
.mic-grid-item .body .r .v .sub {
  display: block;
  color: var(--mic-muted);
  font-size: 10.5px;
  margin-top: 2px;
}

/* ------------ checklist ------------ */
.mic-check-wrap { padding: 20px; }
.mic-check {
  display: grid;
  border-top: 1px solid var(--mic-line);
}
.mic-check > div {
  padding: 12px 14px;
  border-bottom: 1px solid var(--mic-line);
  border-right: 1px solid var(--mic-line);
  font-size: 12.5px;
}
.mic-check .top {
  background: var(--mic-panel-softer);
  padding: 18px 12px 16px;
  text-align: center;
}
.mic-check .top.first {
  background: transparent;
  text-align: left;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--mic-muted);
  display: flex;
  align-items: flex-end;
}
.mic-check .top .nm {
  font-size: 14px; font-weight: 700;
  color: var(--mic-title);
}
.mic-check .top .form {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px;
  color: var(--mic-accent);
  margin-top: 4px;
}
.mic-check .feat {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--mic-muted);
  background: var(--mic-panel-soft);
  display: flex;
  align-items: center;
}
.mic-check .val {
  text-align: center;
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  color: var(--mic-ink);
}
.mic-check .val.ok  { color: var(--mic-good); font-weight: 700; font-size: 16px; }
.mic-check .val.no  { color: var(--mic-bad);  font-weight: 700; font-size: 16px; }
.mic-check .val.mid { color: var(--mic-warm); font-weight: 700; font-size: 16px; }
`;

/* ------------------------------------------------------------------ */
/*  helpers                                                            */
/* ------------------------------------------------------------------ */

const MARK_TO_GLYPH = { ok: '\u2713', no: '\u2717', mid: '\u223C' };

function renderValue(v, mono) {
  if (v == null) return null;
  if (typeof v === 'string') {
    return <span className={mono ? 'mono' : ''}>{processContent(v)}</span>;
  }
  return (
    <span className={mono ? 'mono' : ''}>
      {processContent(v.text)}
      {v.sub && <span className="sub">{processContent(v.sub)}</span>}
    </span>
  );
}

function markKind(v) {
  if (typeof v === 'string' && MARK_TO_GLYPH[v]) return v;
  return 'mid';
}

/* ------------------------------------------------------------------ */
/*  variants                                                           */
/* ------------------------------------------------------------------ */

function Matrix({ data }) {
  const { header, items, attributes } = data;
  const cols = items.length + 1;
  const gridStyle = {
    gridTemplateColumns: `170px repeat(${items.length}, 1fr)`,
  };
  return (
    <div className="mic-card">
      <div className="mic-head">
        {header.kicker && <div className="kicker">{processContent(header.kicker)}</div>}
        <h2>{processContent(header.title)}</h2>
        {header.lede && <div className="lede">{processContent(header.lede)}</div>}
      </div>
      <div className="mic-matrix" style={gridStyle}>
        <div className="colhead first"></div>
        {items.map((it, i) => (
          <div className="colhead" key={i}>
            {it.number && <div className="n">{processContent(it.number)}</div>}
            <div className="nm">{processContent(it.name)}</div>
            {it.formula && <div className="form">{processContent(it.formula)}</div>}
          </div>
        ))}
        {attributes.map((a, r) => (
          <React.Fragment key={r}>
            <div className="rowhead">{processContent(a.label)}</div>
            {a.values.map((v, c) => (
              <div className={'cell' + (a.mono ? ' mono' : '')} key={c}>
                {typeof v === 'string' ? processContent(v) : (
                  <>
                    {processContent(v.text)}
                    {v.sub && <span className="sub">{processContent(v.sub)}</span>}
                  </>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Grid({ data }) {
  const { header, items, attributes } = data;
  const gridStyle = {
    gridTemplateColumns: `repeat(${Math.min(items.length, 3)}, 1fr)`,
  };
  return (
    <div className="mic-card">
      <div className="mic-head">
        {header.kicker && <div className="kicker">{processContent(header.kicker)}</div>}
        <h2>{processContent(header.title)}</h2>
        {header.lede && <div className="lede">{processContent(header.lede)}</div>}
      </div>
      <div className="mic-grid" style={gridStyle}>
        {items.map((it, i) => (
          <div className="mic-grid-item" key={i}>
            <div className="cap">
              {it.number && <div className="n">{processContent(it.number)}</div>}
              <h4>{processContent(it.name)}</h4>
              {it.formula && <div className="form">{processContent(it.formula)}</div>}
            </div>
            <div className="body">
              {attributes.map((a, ai) => {
                const v = a.values[i];
                return (
                  <div className="r" key={ai}>
                    <div className="k">{processContent(a.label)}</div>
                    <div className={'v' + (a.mono ? ' mono' : '')}>
                      {typeof v === 'string' ? processContent(v) : (
                        <>
                          {processContent(v.text)}
                          {v.sub && <span className="sub">{processContent(v.sub)}</span>}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Checklist({ data }) {
  const { header, items, attributes } = data;
  const gridStyle = {
    gridTemplateColumns: `200px repeat(${items.length}, 1fr)`,
  };
  return (
    <div className="mic-card">
      <div className="mic-head">
        {header.kicker && <div className="kicker">{processContent(header.kicker)}</div>}
        <h2>{processContent(header.title)}</h2>
        {header.lede && <div className="lede">{processContent(header.lede)}</div>}
      </div>
      <div className="mic-check-wrap">
        <div className="mic-check" style={gridStyle}>
          <div className="top first">Feature</div>
          {items.map((it, i) => (
            <div className="top" key={i}>
              <div className="nm">{processContent(it.name)}</div>
              {it.formula && <div className="form">{processContent(it.formula)}</div>}
            </div>
          ))}
          {attributes.map((a, r) => (
            <React.Fragment key={r}>
              <div className="feat">{processContent(a.label)}</div>
              {a.values.map((v, c) => {
                if (a.kind === 'mark') {
                  const k = markKind(v);
                  return (
                    <div className={'val ' + k} key={c}>
                      {MARK_TO_GLYPH[k]}
                    </div>
                  );
                }
                return (
                  <div className="val" key={c}>
                    {typeof v === 'string' ? processContent(v) : processContent(v.text)}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

export default function MultiItemComparison({ data, variant = 'matrix', theme }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const V =
    variant === 'grid'      ? Grid      :
    variant === 'checklist' ? Checklist :
                              Matrix;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="mic-root" style={cssVars(t)}>
        <V data={data} />
      </div>
    </>
  );
}