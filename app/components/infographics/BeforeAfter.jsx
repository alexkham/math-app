/*
  BeforeAfter.jsx

  A transformation infographic: one expression shown before and after an
  operation, either as a two-panel diptych or as a full step-by-step
  progression. Two layouts.

  ------------------------------------------------------------------
  CONTENT FORMAT
  ------------------------------------------------------------------
  Every text-bearing field is a plain string, passed through
  processContent, so the site markup applies as usual:

      $x^2 + 6x + 5$            inline KaTeX
      **bold**                  bold
      @[code]@                  inline code
      [label](!/path)           internal link

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

      // DIPTYCH VARIANT reads `before`, `after`, `operation`, `notes`.
      // If only `steps` is supplied, the diptych uses the first and last
      // step as the two panels automatically.
      before?:    Panel,
      after?:     Panel,
      operation?: Operation,
      notes?:     Note[],

      // PROGRESSION VARIANT reads `steps`.
      // If only `before` / `after` are supplied, the progression renders
      // them as a two-step sequence with `operation` as the move between.
      steps?: Step[]
    }

    Panel = {
      stamp?:  string,          // corner label, e.g. 'Before'
      form?:   string,          // what this form is called, e.g. 'Standard form'
      expr:    string,          // the expression itself
      meta?:   string           // one line on what this form is good for
    }

    Operation = {
      name:  string,            // the move, e.g. 'Complete the square'
      desc?: string             // detail, e.g. 'Add and subtract $(b/2)^2 = 9$'
    }

    Note = {
      id:    string,
      badge: string,            // e.g. 'What changed'
      body:  string,
      tone?: 'accent' | 'warm'  // default 'accent'
    }

    Step = {
      id:     string,
      label:  string,           // what this line is, e.g. 'Grouped'
      expr:   string,
      stamp?: string,           // optional corner label ('Before' / 'After')
      move?:  {                 // the move that leads to the NEXT step;
        label: string,          // omit on the final step
        note?: string
      }
    }

  variant  'diptych' | 'progression'   (default: 'diptych')

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
  indigoSoft:  '#e0e7ff',
  warmSoft:    '#fef3c7',
};

const cssVars = (t) => ({
  '--ba-bg':           t.bg,
  '--ba-panel':        t.panel,
  '--ba-panel-soft':   t.panelSoft,
  '--ba-panel-softer': t.panelSofter,
  '--ba-ink':          t.ink,
  '--ba-title':        t.title,
  '--ba-muted':        t.muted,
  '--ba-line':         t.line,
  '--ba-accent':       t.accent,
  '--ba-warm':         t.warm,
  '--ba-indigo-soft':  t.indigoSoft,
  '--ba-warm-soft':    t.warmSoft,
});

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.ba-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--ba-ink);
  line-height: 1.5;
}
.ba-root .ba-card {
  background: var(--ba-panel);
  border: 1px solid var(--ba-line);
  border-radius: 8px;
  overflow: hidden;
}

/* processContent emits <br/> after single-line input; the boxes here own
   their spacing, so suppress it. */
.ba-root .ba-inline br { display: none; }
.ba-root .ba-inline p  { margin: 0; }

/* ---- head ---- */
.ba-root .ba-head {
  padding: 26px 32px 20px;
  border-bottom: 1px solid var(--ba-line);
}
.ba-root .ba-head .ba-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--ba-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.ba-root .ba-head h2 {
  font-size: 24px; font-weight: 800;
  color: var(--ba-title); margin: 0;
  letter-spacing: -0.01em;
}
.ba-root .ba-head .ba-lede {
  color: var(--ba-muted);
  font-size: 13px;
  margin-top: 6px;
  max-width: 640px;
}

/* ================================================================= */
/*  DIPTYCH VARIANT                                                    */
/* ================================================================= */

.ba-root .ba-arena {
  padding: 40px 32px 32px;
  background: var(--ba-panel-softer);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 24px;
  align-items: stretch;
}
.ba-root .ba-panel {
  background: var(--ba-panel);
  border: 1px solid var(--ba-line);
  border-radius: 8px;
  padding: 26px 24px 22px;
  display: flex; flex-direction: column; align-items: center; gap: 14px;
  text-align: center;
}
.ba-root .ba-panel .ba-stamp {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 3px;
  color: #ffffff;
}
.ba-root .ba-panel.ba-before .ba-stamp { background: var(--ba-muted); }
.ba-root .ba-panel.ba-after  .ba-stamp { background: var(--ba-accent); }

.ba-root .ba-panel .ba-form {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--ba-muted);
  letter-spacing: 0.1em;
}
.ba-root .ba-panel .ba-expr {
  font-family: 'Inter', serif;
  font-size: 28px;
  color: var(--ba-ink);
  padding: 8px 4px;
}
.ba-root .ba-panel.ba-after .ba-expr { color: var(--ba-title); }
.ba-root .ba-panel .ba-expr .katex { font-size: 1em; }

.ba-root .ba-panel .ba-meta {
  font-size: 12px;
  color: var(--ba-muted);
  margin-top: auto;
  padding-top: 8px;
}

.ba-root .ba-arrow {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 10px;
  padding: 0 6px;
  min-width: 170px;
}
.ba-root .ba-arrow .ba-op-name {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ba-warm);
  font-weight: 700;
  text-align: center;
}
.ba-root .ba-arrow .ba-op-desc {
  font-size: 12px;
  color: var(--ba-muted);
  text-align: center;
  line-height: 1.4;
}
.ba-root .ba-arrow svg { width: 100%; height: 36px; display: block; }

.ba-root .ba-notes {
  padding: 20px 32px 26px;
  display: grid;
  gap: 20px;
  border-top: 1px solid var(--ba-line);
}
.ba-root .ba-note {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: start;
}
.ba-root .ba-note .ba-nbadge {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 3px;
  color: var(--ba-title);
  background: var(--ba-indigo-soft);
  white-space: nowrap;
  align-self: start;
}
.ba-root .ba-note.ba-warm .ba-nbadge {
  color: var(--ba-warm);
  background: var(--ba-warm-soft);
}
.ba-root .ba-note .ba-nbody {
  font-size: 12.5px;
  color: var(--ba-ink);
  line-height: 1.55;
}

/* ================================================================= */
/*  PROGRESSION VARIANT                                                */
/* ================================================================= */

.ba-root .ba-track {
  padding: 32px 40px 36px;
  background: var(--ba-panel-softer);
}
.ba-root .ba-step {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 20px;
  align-items: start;
  position: relative;
}
.ba-root .ba-step + .ba-step { margin-top: 26px; }

.ba-root .ba-step .ba-numcol {
  display: flex; flex-direction: column; align-items: center;
  padding-top: 4px;
  align-self: stretch;
}
.ba-root .ba-step .ba-num {
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 700; font-size: 12px;
  color: #ffffff;
  background: var(--ba-accent);
  position: relative; z-index: 2;
  flex: none;
}
.ba-root .ba-step.ba-first .ba-num { background: var(--ba-muted); }
.ba-root .ba-step.ba-last  .ba-num { background: var(--ba-title); }

.ba-root .ba-step .ba-connector {
  flex: 1;
  width: 2px;
  background: var(--ba-line);
  margin: 6px 0 -6px;
  min-height: 60px;
}
.ba-root .ba-step.ba-last .ba-connector { display: none; }

.ba-root .ba-step .ba-content {
  background: var(--ba-panel);
  border: 1px solid var(--ba-line);
  border-radius: 6px;
  overflow: hidden;
}
.ba-root .ba-step.ba-last .ba-content { border: 1.5px solid var(--ba-title); }

.ba-root .ba-step .ba-ctop {
  padding: 10px 16px;
  display: flex; align-items: center; justify-content: space-between;
  background: var(--ba-panel-softer);
  border-bottom: 1px solid var(--ba-line);
}
.ba-root .ba-step.ba-last .ba-ctop {
  background: var(--ba-indigo-soft);
  border-bottom-color: var(--ba-accent);
}
.ba-root .ba-step .ba-clabel {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ba-accent);
  font-weight: 600;
}
.ba-root .ba-step.ba-first .ba-clabel { color: var(--ba-muted); }
.ba-root .ba-step.ba-last  .ba-clabel { color: var(--ba-title); }

.ba-root .ba-step .ba-cstamp {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 3px;
  background: var(--ba-muted);
  color: #ffffff;
}
.ba-root .ba-step.ba-last .ba-cstamp { background: var(--ba-title); }

.ba-root .ba-step .ba-cexpr {
  padding: 18px 20px;
  font-family: 'Inter', serif;
  font-size: 20px;
  color: var(--ba-ink);
  text-align: center;
}
.ba-root .ba-step.ba-last .ba-cexpr {
  color: var(--ba-title);
  font-weight: 700;
}
.ba-root .ba-step .ba-cexpr .katex { font-size: 1em; }

.ba-root .ba-step .ba-move {
  grid-column: 2;
  display: flex; align-items: center; gap: 10px;
  padding: 10px 0 0 4px;
  font-size: 12px;
  color: var(--ba-muted);
  flex-wrap: wrap;
}
.ba-root .ba-step .ba-move .ba-marrow {
  display: inline-flex; align-items: center; justify-content: center;
  width: 20px; height: 20px; border-radius: 50%;
  background: var(--ba-warm-soft);
  color: var(--ba-warm);
  font-weight: 700;
  flex: none;
}
.ba-root .ba-step .ba-move .ba-mlabel {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--ba-warm);
  letter-spacing: 0.05em;
}
.ba-root .ba-step .ba-move .ba-mnote { color: var(--ba-muted); }

@media (max-width: 720px) {
  .ba-root .ba-arena {
    grid-template-columns: 1fr;
    padding: 28px 20px 24px;
  }
  .ba-root .ba-arrow { min-width: 0; }
  .ba-root .ba-arrow svg { transform: rotate(90deg); height: 28px; }
  .ba-root .ba-notes { grid-template-columns: 1fr !important; }
  .ba-root .ba-track { padding: 24px 20px 28px; }
}
`;

/* ------------------------------------------------------------------ */
/*  helpers                                                            */
/* ------------------------------------------------------------------ */

function Rich({ text, className }) {
  if (!text) return null;
  return (
    <span className={'ba-inline' + (className ? ' ' + className : '')}>
      {processContent(text)}
    </span>
  );
}

/* Either shape can drive either variant, so normalise up front. */

function toPanels(data) {
  if (data.before && data.after) {
    return { before: data.before, after: data.after, operation: data.operation };
  }
  const steps = data.steps || [];
  if (steps.length < 2) return { before: null, after: null, operation: null };
  const first = steps[0];
  const last  = steps[steps.length - 1];
  return {
    before: { stamp: first.stamp || 'Before', form: first.label, expr: first.expr },
    after:  { stamp: last.stamp  || 'After',  form: last.label,  expr: last.expr },
    operation: data.operation || (first.move ? { name: first.move.label, desc: first.move.note } : null),
  };
}

function toSteps(data) {
  if (data.steps && data.steps.length) return data.steps;
  if (data.before && data.after) {
    return [
      {
        id: 'before',
        label: data.before.form || 'Before',
        expr: data.before.expr,
        stamp: data.before.stamp || 'Before',
        move: data.operation
          ? { label: data.operation.name, note: data.operation.desc }
          : undefined,
      },
      {
        id: 'after',
        label: data.after.form || 'After',
        expr: data.after.expr,
        stamp: data.after.stamp || 'After',
      },
    ];
  }
  return [];
}

/* ------------------------------------------------------------------ */
/*  head                                                               */
/* ------------------------------------------------------------------ */

function Head({ header }) {
  return (
    <div className="ba-head">
      {header.kicker && <div className="ba-kicker">{header.kicker}</div>}
      <h2>{header.title}</h2>
      {header.lede && <div className="ba-lede"><Rich text={header.lede} /></div>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  diptych variant                                                    */
/* ------------------------------------------------------------------ */

function Panel({ panel, side }) {
  return (
    <div className={'ba-panel ba-' + side}>
      {panel.stamp && <div className="ba-stamp">{panel.stamp}</div>}
      {panel.form && <div className="ba-form"><Rich text={panel.form} /></div>}
      <div className="ba-expr"><Rich text={panel.expr} /></div>
      {panel.meta && <div className="ba-meta"><Rich text={panel.meta} /></div>}
    </div>
  );
}

function Diptych({ data, theme }) {
  const { before, after, operation } = toPanels(data);
  const notes = data.notes || [];

  return (
    <div className="ba-card">
      {data.header && <Head header={data.header} />}

      <div className="ba-arena">
        {before && <Panel panel={before} side="before" />}

        <div className="ba-arrow">
          {operation && <div className="ba-op-name">{operation.name}</div>}
          <svg viewBox="0 0 170 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="6" y1="18" x2="152" y2="18" stroke={theme.warm} strokeWidth="2" />
            <polygon points="152,10 166,18 152,26" fill={theme.warm} />
          </svg>
          {operation && operation.desc && (
            <div className="ba-op-desc"><Rich text={operation.desc} /></div>
          )}
        </div>

        {after && <Panel panel={after} side="after" />}
      </div>

      {notes.length > 0 && (
        <div
          className="ba-notes"
          style={{ gridTemplateColumns: `repeat(${Math.min(notes.length, 2)}, 1fr)` }}
        >
          {notes.map((n) => (
            <div
              className={'ba-note' + (n.tone === 'warm' ? ' ba-warm' : '')}
              key={n.id}
            >
              <div className="ba-nbadge">{n.badge}</div>
              <div className="ba-nbody"><Rich text={n.body} /></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  progression variant                                                */
/* ------------------------------------------------------------------ */

function Progression({ data }) {
  const steps = toSteps(data);

  return (
    <div className="ba-card">
      {data.header && <Head header={data.header} />}
      <div className="ba-track">
        {steps.map((s, i) => {
          const first = i === 0;
          const last  = i === steps.length - 1;
          const cls =
            'ba-step' +
            (first ? ' ba-first' : '') +
            (last  ? ' ba-last'  : '');
          return (
            <div className={cls} key={s.id}>
              <div className="ba-numcol">
                <div className="ba-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="ba-connector"></div>
              </div>
              <div className="ba-content">
                <div className="ba-ctop">
                  <span className="ba-clabel"><Rich text={s.label} /></span>
                  {s.stamp && <span className="ba-cstamp">{s.stamp}</span>}
                </div>
                <div className="ba-cexpr"><Rich text={s.expr} /></div>
              </div>
              {s.move && !last && (
                <div className="ba-move">
                  <span className="ba-marrow">{'\u2193'}</span>
                  <span className="ba-mlabel"><Rich text={s.move.label} /></span>
                  {s.move.note && (
                    <span className="ba-mnote">
                      {'\u2014 '}<Rich text={s.move.note} />
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

export default function BeforeAfter({ data, variant = 'diptych', theme }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const V = variant === 'progression' ? Progression : Diptych;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="ba-root" style={cssVars(t)}>
        <V data={data} theme={t} />
      </div>
    </>
  );
}
