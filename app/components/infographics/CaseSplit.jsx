/*
  CaseSplit.jsx

  One problem, several branches by condition. Two layouts.

  Props
  -----
  data     required object, shape:
             {
               header?: {
                 kicker?: string,
                 title:   string,
                 lede?:   string
               },
               parent: {
                 kicker?:  string,        // small label above formula (branch variant)
                 formula:  ReactNode,     // the problem being split, e.g. |x| = k
                 splitBy:  ReactNode,     // the parameter causing the split, e.g. sign of k
                 desc?:    string         // longer prose (parallel variant, under formula)
               },
               cases: Case[]              // 2..4 cases
             }

             Case = {
               id:         string,        // unique id (used as React key)
               number:     string,        // e.g. '01'
               condition:  ReactNode,     // the case condition, e.g. k > 0
               color:      'a' | 'b' | 'c' | string,
                                            // 'a' indigo, 'b' warm, 'c' muted, or any CSS color

               count: {                   // primary numeric result
                 n:      string | number, // e.g. 'Two', '2', 'None'
                 label:  string           // e.g. 'Solutions', 'real solutions'
               },

               headline:   string,        // brief description of the outcome
               desc?:      string,        // longer explanation (parallel variant)

               formula?:   ReactNode,     // solution expression, e.g. x = &plusmn;k
               na?:        boolean,       // if true, formula is greyed as "not applicable"

               example?:   ReactNode,     // worked example, e.g. |x| = 5 &rArr; &plusmn;5
               picture?:   string         // one-liner about the visual (branch variant)
             }

  variant  'branch' | 'parallel'   (default: 'branch')

  theme    optional partial theme, merged over DEFAULT_THEME (exported).

  Notes
  -----
  &bull; The branch variant draws connector lines from the parent problem down to
    each case. They are generated automatically from the number of cases (2..4).
  &bull; Color presets 'a', 'b', 'c' map to theme.accent / theme.warm / theme.muted.
    Passing any other string treats it as an explicit CSS color; the soft
    background is derived via color-mix.
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
};

const cssVars = (t) => ({
  '--cs-bg':           t.bg,
  '--cs-panel':        t.panel,
  '--cs-panel-soft':   t.panelSoft,
  '--cs-panel-softer': t.panelSofter,
  '--cs-ink':          t.ink,
  '--cs-title':        t.title,
  '--cs-muted':        t.muted,
  '--cs-line':         t.line,
  '--cs-accent':       t.accent,
  '--cs-warm':         t.warm,
});

function resolveColor(color, t) {
  if (color === 'a') return t.accent;
  if (color === 'b') return t.warm;
  if (color === 'c') return t.muted;
  return color || t.accent;
}

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.cs-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--cs-ink);
  line-height: 1.5;
}
.cs-root .cs-card {
  background: var(--cs-panel);
  border: 1px solid var(--cs-line);
  border-radius: 8px;
  overflow: hidden;
}

/* ---- shared head ---- */
.cs-root .cs-head {
  padding: 26px 32px 20px;
  border-bottom: 1px solid var(--cs-line);
}
.cs-root .cs-head .cs-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--cs-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.cs-root .cs-head h2 {
  font-size: 24px; font-weight: 800;
  color: var(--cs-title); margin: 0;
  letter-spacing: -0.01em;
}
.cs-root .cs-head .cs-lede {
  color: var(--cs-muted);
  font-size: 13px;
  margin-top: 6px;
  max-width: 640px;
}

/* ---- shared case card colors (per-case CSS custom prop drives everything) ---- */
.cs-root .cs-case { --case-color: var(--cs-accent); }
.cs-root .cs-case-soft {
  background: color-mix(in srgb, var(--case-color) 16%, transparent);
}

/* ================================================================= */
/*  BRANCH VARIANT                                                     */
/* ================================================================= */

.cs-root .cs-branch-body {
  padding: 32px 32px 28px;
  background: var(--cs-panel-softer);
}

.cs-root .cs-branch-parent {
  max-width: 520px;
  margin: 0 auto 12px;
  background: var(--cs-panel);
  border: 1.5px solid var(--cs-title);
  border-radius: 8px;
  padding: 18px 24px;
  text-align: center;
}
.cs-root .cs-branch-parent .cs-parent-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--cs-title);
  margin-bottom: 6px;
}
.cs-root .cs-branch-parent .cs-parent-formula {
  font-family: 'Inter', serif;
  font-size: 26px;
  color: var(--cs-ink);
  margin-bottom: 8px;
}
.cs-root .cs-branch-parent .cs-parent-splitby {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--cs-muted);
  letter-spacing: 0.1em;
}
.cs-root .cs-branch-parent .cs-parent-splitby strong {
  color: var(--cs-title);
  font-weight: 700;
}

.cs-root .cs-branch-connectors { height: 60px; position: relative; }
.cs-root .cs-branch-connectors svg { display: block; width: 100%; height: 100%; }

.cs-root .cs-branch-cases { display: grid; gap: 14px; }

.cs-root .cs-branch-case {
  border: 1.5px solid var(--case-color);
  border-radius: 8px;
  background: var(--cs-panel);
  overflow: hidden;
  display: flex; flex-direction: column;
}
.cs-root .cs-branch-case .cs-cond {
  background: var(--case-color);
  color: #ffffff;
  padding: 12px 16px;
  display: flex; align-items: center; justify-content: space-between;
}
.cs-root .cs-branch-case .cs-cond .cs-n {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.85;
}
.cs-root .cs-branch-case .cs-cond .cs-expr {
  font-family: 'Inter', serif;
  font-size: 20px;
  font-weight: 700;
}

.cs-root .cs-branch-case .cs-result {
  padding: 16px 16px 14px;
  background: color-mix(in srgb, var(--case-color) 16%, transparent);
  border-bottom: 1px solid var(--cs-line);
}
.cs-root .cs-branch-case .cs-result .cs-lbl {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--cs-muted);
  margin-bottom: 4px;
}
.cs-root .cs-branch-case .cs-result .cs-count {
  font-size: 22px; font-weight: 800;
  color: var(--case-color);
  letter-spacing: -0.01em;
}

.cs-root .cs-branch-case .cs-rows {
  padding: 14px 16px 16px;
  flex: 1;
}
.cs-root .cs-branch-case .cs-row {
  display: grid;
  grid-template-columns: 65px 1fr;
  gap: 10px;
  padding: 6px 0;
  align-items: baseline;
}
.cs-root .cs-branch-case .cs-row .cs-k {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--cs-muted);
}
.cs-root .cs-branch-case .cs-row .cs-v {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12.5px;
  color: var(--cs-ink);
}
.cs-root .cs-branch-case .cs-row .cs-v.cs-na {
  color: var(--cs-muted);
  font-style: italic;
}

/* ================================================================= */
/*  PARALLEL VARIANT                                                   */
/* ================================================================= */

.cs-root .cs-parallel-setup {
  padding: 24px 32px 22px;
  background: var(--cs-panel-softer);
  border-bottom: 1px solid var(--cs-line);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;
}
.cs-root .cs-parallel-setup .cs-parent-formula {
  font-family: 'Inter', serif;
  font-size: 26px;
  color: var(--cs-ink);
}
.cs-root .cs-parallel-setup .cs-parent-desc {
  font-size: 13px;
  color: var(--cs-muted);
  margin-top: 4px;
}
.cs-root .cs-parallel-setup .cs-parent-desc strong {
  color: var(--cs-title);
}
.cs-root .cs-parallel-setup .cs-switch {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  background: var(--cs-panel);
  border: 1px solid var(--cs-line);
  color: var(--cs-title);
  padding: 8px 14px;
  border-radius: 20px;
  letter-spacing: 0.1em;
  white-space: nowrap;
}
.cs-root .cs-parallel-setup .cs-switch::before {
  content: 'split by ';
  color: var(--cs-muted);
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-right: 6px;
}

.cs-root .cs-parallel-cases {
  display: grid;
}

.cs-root .cs-parallel-case {
  padding: 24px 24px 26px;
  border-right: 1px solid var(--cs-line);
  display: flex; flex-direction: column; gap: 14px;
  position: relative;
}
.cs-root .cs-parallel-case:last-child { border-right: none; }
.cs-root .cs-parallel-case::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: var(--case-color);
}

.cs-root .cs-parallel-case .cs-head-c {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.cs-root .cs-parallel-case .cs-head-c .cs-n {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--case-color);
  font-weight: 700;
}
.cs-root .cs-parallel-case .cs-head-c .cs-exp {
  font-family: 'Inter', serif;
  font-style: italic;
  font-size: 22px;
  color: var(--case-color);
  background: color-mix(in srgb, var(--case-color) 16%, transparent);
  padding: 2px 10px;
  border-radius: 5px;
  font-weight: 700;
}

.cs-root .cs-parallel-case .cs-name {
  font-size: 17px; font-weight: 700;
  color: var(--cs-title);
  letter-spacing: -0.01em;
}
.cs-root .cs-parallel-case .cs-name .cs-sub {
  display: block;
  font-size: 12px; font-weight: 400;
  color: var(--cs-muted);
  margin-top: 4px;
}

.cs-root .cs-parallel-case .cs-solutions {
  background: color-mix(in srgb, var(--case-color) 16%, transparent);
  border-radius: 6px;
  padding: 14px 16px;
  display: flex; align-items: baseline; gap: 14px;
}
.cs-root .cs-parallel-case .cs-solutions .cs-count {
  font-size: 34px; font-weight: 800;
  color: var(--case-color);
  letter-spacing: -0.02em;
  line-height: 1;
}
.cs-root .cs-parallel-case .cs-solutions .cs-txt {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--cs-muted);
  letter-spacing: 0.05em;
  line-height: 1.5;
}

.cs-root .cs-parallel-case .cs-formula {
  font-family: 'Inter', serif;
  font-size: 18px;
  color: var(--cs-ink);
  padding: 10px 0;
}
.cs-root .cs-parallel-case .cs-formula.cs-na {
  color: var(--cs-muted);
  font-style: italic;
  font-size: 14px;
}

.cs-root .cs-parallel-case .cs-example {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  color: var(--cs-ink);
  padding: 10px 12px;
  background: var(--cs-panel-softer);
  border-left: 2px solid var(--case-color);
  border-radius: 3px;
}
.cs-root .cs-parallel-case .cs-example .cs-lbl {
  display: block;
  font-size: 9.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--cs-muted);
  margin-bottom: 4px;
}

/* ---- inline formula helpers usable inside any ReactNode formula/expr ---- */
.cs-root .cs-var { font-style: italic; }

/* ---- responsive ---- */
@media (max-width: 640px) {
  .cs-root .cs-branch-cases,
  .cs-root .cs-parallel-cases {
    grid-template-columns: 1fr !important;
  }
  .cs-root .cs-parallel-case { border-right: none; border-bottom: 1px solid var(--cs-line); }
  .cs-root .cs-parallel-case:last-child { border-bottom: none; }
  .cs-root .cs-branch-connectors { display: none; }
  .cs-root .cs-parallel-setup { grid-template-columns: 1fr; }
}
`;

/* ------------------------------------------------------------------ */
/*  shared: header                                                     */
/* ------------------------------------------------------------------ */

function Head({ header }) {
  return (
    <div className="cs-head">
      {header.kicker && <div className="cs-kicker">{header.kicker}</div>}
      <h2>{header.title}</h2>
      {header.lede && <div className="cs-lede">{header.lede}</div>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  branch variant                                                     */
/* ------------------------------------------------------------------ */

function Connectors({ cases, theme }) {
  const N = cases.length;
  const W = 900;
  const H = 60;
  // column centers: (i + 0.5) / N of viewBox width
  return (
    <div className="cs-branch-connectors">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {cases.map((c, i) => {
          const cx = ((i + 0.5) / N) * W;
          const color = resolveColor(c.color, theme);
          const d = cx === W / 2
            ? `M ${W / 2} 0 L ${cx} ${H}`
            : `M ${W / 2} 0 Q ${W / 2} ${H / 2} ${cx} ${H}`;
          return (
            <g key={c.id}>
              <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 3"/>
              <circle cx={cx} cy={H} r="4" fill={color} stroke="#ffffff" strokeWidth="2"/>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function BranchCase({ c, theme }) {
  const color = resolveColor(c.color, theme);
  const style = { '--case-color': color };
  return (
    <div className="cs-branch-case cs-case" style={style}>
      <div className="cs-cond">
        <span className="cs-n">Case {c.number}</span>
        <span className="cs-expr">{c.condition}</span>
      </div>
      <div className="cs-result">
        <div className="cs-lbl">{c.count.label}</div>
        <div className="cs-count">{c.count.n}</div>
      </div>
      <div className="cs-rows">
        {c.formula !== undefined && (
          <div className="cs-row">
            <span className="cs-k">Values</span>
            <span className={'cs-v' + (c.na ? ' cs-na' : '')}>
              {c.na ? c.formula : c.formula}
            </span>
          </div>
        )}
        {c.example !== undefined && (
          <div className="cs-row">
            <span className="cs-k">Example</span>
            <span className="cs-v">{c.example}</span>
          </div>
        )}
        {c.picture && (
          <div className="cs-row">
            <span className="cs-k">Picture</span>
            <span className={'cs-v' + (c.na ? ' cs-na' : '')}>{c.picture}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Branch({ data, theme }) {
  const N = data.cases.length;
  return (
    <div className="cs-card">
      {data.header && <Head header={data.header} />}
      <div className="cs-branch-body">
        <div className="cs-branch-parent">
          {data.parent.kicker && <div className="cs-parent-kicker">{data.parent.kicker}</div>}
          <div className="cs-parent-formula">{data.parent.formula}</div>
          <div className="cs-parent-splitby">
            split by <strong>{data.parent.splitBy}</strong>
          </div>
        </div>
        <Connectors cases={data.cases} theme={theme} />
        <div
          className="cs-branch-cases"
          style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}
        >
          {data.cases.map((c) => <BranchCase key={c.id} c={c} theme={theme} />)}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  parallel variant                                                   */
/* ------------------------------------------------------------------ */

function ParallelCase({ c, theme }) {
  const color = resolveColor(c.color, theme);
  const style = { '--case-color': color };
  return (
    <div className="cs-parallel-case cs-case" style={style}>
      <div className="cs-head-c">
        <span className="cs-n">Case {c.number}</span>
        <span className="cs-exp">{c.condition}</span>
      </div>
      <div className="cs-name">
        {c.headline}
        {c.desc && <span className="cs-sub">{c.desc}</span>}
      </div>
      <div className="cs-solutions">
        <span className="cs-count">{c.count.n}</span>
        <span className="cs-txt">{c.count.label}</span>
      </div>
      {c.formula !== undefined && (
        <div className={'cs-formula' + (c.na ? ' cs-na' : '')}>{c.formula}</div>
      )}
      {c.example !== undefined && (
        <div className="cs-example">
          <span className="cs-lbl">Example</span>
          {c.example}
        </div>
      )}
    </div>
  );
}

function Parallel({ data, theme }) {
  const N = data.cases.length;
  return (
    <div className="cs-card">
      {data.header && <Head header={data.header} />}
      <div className="cs-parallel-setup">
        <div>
          <div className="cs-parent-formula">{data.parent.formula}</div>
          {data.parent.desc && (
            <div className="cs-parent-desc">{data.parent.desc}</div>
          )}
        </div>
        <div className="cs-switch">{data.parent.splitBy}</div>
      </div>
      <div
        className="cs-parallel-cases"
        style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}
      >
        {data.cases.map((c) => <ParallelCase key={c.id} c={c} theme={theme} />)}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

export default function CaseSplit({ data, variant = 'branch', theme }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const V = variant === 'parallel' ? Parallel : Branch;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cs-root" style={cssVars(t)}>
        <V data={data} theme={t} />
      </div>
    </>
  );
}
