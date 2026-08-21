/*
  TwoItemComparison.jsx

  A two-item comparison infographic with three layouts.

  Props
  -----
  data     required object, shape:
             {
               header: {
                 kicker?: string,        // small label above title
                 title:   string,        // main heading
                 edition?: string        // small right-side label (poster / ledger only)
               },
               itemA:  ItemDef,
               itemB:  ItemDef,
               attributes: Attr[]
             }

             ItemDef = {
               badge?: string,
               name:   string,
               formula: string,          // any inline expression string
               subtitle?: string
             }

             Attr = {
               label: string,            // shown as the attribute name
               valueA: string,
               valueB: string,
               mono?: boolean            // render values in monospace
             }

  variant  'poster' | 'ledger' | 'profiles'  (default: 'poster')

  theme    optional partial theme, merged over defaults.
           See DEFAULT_THEME below for the full set of keys.
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
  accent2:     '#3b82f6',
  warm:        '#f59e0b',
  indigoSoft:  '#e0e7ff',
  warmSoft:    '#fef3c7',
};

const cssVars = (t) => ({
  '--tic-bg':           t.bg,
  '--tic-panel':        t.panel,
  '--tic-panel-soft':   t.panelSoft,
  '--tic-panel-softer': t.panelSofter,
  '--tic-ink':          t.ink,
  '--tic-title':        t.title,
  '--tic-muted':        t.muted,
  '--tic-line':         t.line,
  '--tic-accent':       t.accent,
  '--tic-accent-2':     t.accent2,
  '--tic-warm':         t.warm,
  '--tic-indigo-soft':  t.indigoSoft,
  '--tic-warm-soft':    t.warmSoft,
});

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.tic-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--tic-ink);
  line-height: 1.5;
}
.tic-root .tic-card {
  background: var(--tic-panel);
  border: 1px solid var(--tic-line);
  border-radius: 8px;
  overflow: hidden;
}
.tic-root .tic-mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}

/* ------------ poster ------------ */
.tic-poster-head {
  padding: 26px 32px 20px;
  border-bottom: 1px solid var(--tic-line);
}
.tic-poster-head .kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--tic-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.tic-poster-head h2 {
  font-size: 24px; font-weight: 800;
  color: var(--tic-title); margin: 0;
  letter-spacing: -0.01em;
}
.tic-poster-arena {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}
.tic-poster-side {
  padding: 32px 28px;
  text-align: center;
}
.tic-poster-side.left  { background: var(--tic-panel-softer); }
.tic-poster-side.right { background: var(--tic-panel); }
.tic-poster-side .badge {
  display: inline-block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
  color: #ffffff;
  padding: 4px 10px; border-radius: 3px; margin-bottom: 16px;
}
.tic-poster-side.left  .badge { background: var(--tic-accent); }
.tic-poster-side.right .badge { background: var(--tic-warm); }
.tic-poster-side h3 {
  font-size: 26px; font-weight: 800;
  color: var(--tic-title); margin: 0 0 6px;
  letter-spacing: -0.02em;
}
.tic-poster-side .formula {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 22px; font-weight: 700;
  color: var(--tic-accent); margin-bottom: 8px;
}
.tic-poster-side .subtitle {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px; color: var(--tic-muted);
}
.tic-poster-vs {
  display: flex; align-items: center; justify-content: center;
  background: var(--tic-panel);
  border-left: 1px solid var(--tic-line);
  border-right: 1px solid var(--tic-line);
  padding: 0 6px;
}
.tic-poster-vs .dot {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--tic-title); color: #ffffff;
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 700; font-size: 11px; letter-spacing: 0.1em;
}
.tic-poster-attrs { border-top: 1px solid var(--tic-line); }
.tic-poster-attr {
  display: grid;
  grid-template-columns: 1fr 180px 1fr;
  border-bottom: 1px solid var(--tic-line);
}
.tic-poster-attr:last-child { border-bottom: none; }
.tic-poster-attr > div {
  padding: 14px 20px;
  font-size: 13px;
}
.tic-poster-attr .l { background: var(--tic-panel-softer); }
.tic-poster-attr .k {
  background: var(--tic-panel-soft);
  text-align: center;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px;
  color: var(--tic-accent);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 600;
  display: flex; align-items: center; justify-content: center;
  border-left: 1px solid var(--tic-line);
  border-right: 1px solid var(--tic-line);
}
.tic-poster-attr .mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12.5px;
}

/* ------------ ledger ------------ */
.tic-ledger-topbar {
  background: var(--tic-title);
  color: #ffffff;
  padding: 22px 32px;
  display: flex; align-items: baseline; gap: 20px;
  border-bottom: 4px solid var(--tic-accent);
}
.tic-ledger-topbar .kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--tic-warm);
}
.tic-ledger-topbar h2 {
  font-size: 22px; font-weight: 800; margin: 0;
  letter-spacing: -0.01em;
  color: #ffffff; flex: 1;
}
.tic-ledger-topbar .edition {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.15em;
}
.tic-ledger-arena {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.tic-ledger-hero {
  padding: 34px 32px 30px;
  position: relative;
  overflow: hidden;
  color: #ffffff;
}
.tic-ledger-hero.left  { background: var(--tic-accent); }
.tic-ledger-hero.right { background: var(--tic-warm); }
.tic-ledger-hero .n {
  position: absolute; top: 14px; right: 22px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 700; font-size: 64px;
  color: rgba(255,255,255,0.18);
  letter-spacing: -0.02em; line-height: 1;
}
.tic-ledger-hero .badge {
  display: inline-block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
  background: rgba(255,255,255,0.18); color: #ffffff;
  padding: 4px 10px; border-radius: 3px; margin-bottom: 14px;
}
.tic-ledger-hero .name {
  font-size: 30px; font-weight: 900;
  letter-spacing: -0.02em; line-height: 1.05;
  margin-bottom: 12px;
}
.tic-ledger-hero .formula {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 20px; font-weight: 700;
  background: rgba(255,255,255,0.15); color: #ffffff;
  padding: 8px 14px; border-radius: 5px;
  display: inline-block;
}
.tic-ledger-body { background: var(--tic-panel); }
.tic-ledger-row {
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  border-top: 1px solid var(--tic-line);
}
.tic-ledger-row .cell {
  padding: 20px 24px;
  display: flex; align-items: center;
  font-size: 16px; font-weight: 600;
  color: var(--tic-ink);
}
.tic-ledger-row .cell.left  {
  background: var(--tic-indigo-soft);
  justify-content: flex-end;
  text-align: right;
}
.tic-ledger-row .cell.right {
  background: var(--tic-warm-soft);
  justify-content: flex-start;
  text-align: left;
}
.tic-ledger-row .cell.mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 700; font-size: 17px;
}
.tic-ledger-row .attr {
  background: var(--tic-title); color: #ffffff;
  display: flex; align-items: center; justify-content: center;
  padding: 20px 16px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
  font-weight: 700;
  position: relative;
}
.tic-ledger-row .attr::before {
  content: attr(data-n);
  position: absolute; top: 6px; left: 12px;
  font-size: 9px; color: var(--tic-warm);
  opacity: 0.9; letter-spacing: 0.1em;
}

/* ------------ profiles ------------ */
.tic-profiles-head {
  padding: 26px 32px 20px;
  border-bottom: 1px solid var(--tic-line);
}
.tic-profiles-head .kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--tic-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.tic-profiles-head h2 {
  font-size: 24px; font-weight: 800;
  color: var(--tic-title); margin: 0;
  letter-spacing: -0.01em;
}
.tic-profiles-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  padding: 20px;
}
.tic-profiles-card {
  border: 1px solid var(--tic-line);
  border-radius: 8px;
  overflow: hidden;
  background: var(--tic-panel);
}
.tic-profiles-card .top {
  padding: 20px 20px 16px;
  background: var(--tic-panel-softer);
  border-bottom: 1px solid var(--tic-line);
}
.tic-profiles-card .top .badge {
  display: inline-block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
  color: #ffffff;
  padding: 3px 9px; border-radius: 3px; margin-bottom: 10px;
}
.tic-profiles-card.a .top .badge { background: var(--tic-accent); }
.tic-profiles-card.b .top .badge { background: var(--tic-warm); }
.tic-profiles-card .top h4 {
  font-size: 20px; font-weight: 800;
  color: var(--tic-title); margin: 0 0 4px;
  letter-spacing: -0.01em;
}
.tic-profiles-card .top .formula {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 14px; color: var(--tic-accent);
}
.tic-profiles-card .rows { padding: 6px 0; }
.tic-profiles-card .rows .r {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 16px;
  padding: 10px 20px;
  border-bottom: 1px solid var(--tic-line);
}
.tic-profiles-card .rows .r:last-child { border-bottom: none; }
.tic-profiles-card .rows .r .k {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--tic-muted);
  padding-top: 2px;
}
.tic-profiles-card .rows .r .v {
  font-size: 13px; color: var(--tic-ink);
}
.tic-profiles-card .rows .r .v.mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12.5px;
}
`;

/* ------------------------------------------------------------------ */
/*  variants                                                           */
/* ------------------------------------------------------------------ */

function Poster({ data }) {
  const { header, itemA, itemB, attributes } = data;
  return (
    <div className="tic-card">
      <div className="tic-poster-head">
        {header.kicker && <div className="kicker">{header.kicker}</div>}
        <h2>{header.title}</h2>
      </div>
      <div className="tic-poster-arena">
        <div className="tic-poster-side left">
          {itemA.badge && <div className="badge">{itemA.badge}</div>}
          <h3>{itemA.name}</h3>
          <div className="formula">{itemA.formula}</div>
          {itemA.subtitle && <div className="subtitle">{itemA.subtitle}</div>}
        </div>
        <div className="tic-poster-vs"><div className="dot">VS</div></div>
        <div className="tic-poster-side right">
          {itemB.badge && <div className="badge">{itemB.badge}</div>}
          <h3>{itemB.name}</h3>
          <div className="formula">{itemB.formula}</div>
          {itemB.subtitle && <div className="subtitle">{itemB.subtitle}</div>}
        </div>
      </div>
      <div className="tic-poster-attrs">
        {attributes.map((a, i) => (
          <div className="tic-poster-attr" key={i}>
            <div className={'l' + (a.mono ? ' mono' : '')}>{a.valueA}</div>
            <div className="k">{a.label}</div>
            <div className={'r' + (a.mono ? ' mono' : '')}>{a.valueB}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Ledger({ data }) {
  const { header, itemA, itemB, attributes } = data;
  return (
    <div className="tic-card">
      <div className="tic-ledger-topbar">
        {header.kicker && <span className="kicker">{header.kicker}</span>}
        <h2>{header.title}</h2>
        {header.edition && <span className="edition">{header.edition}</span>}
      </div>
      <div className="tic-ledger-arena">
        <div className="tic-ledger-hero left">
          <div className="n">01</div>
          {itemA.badge && <div className="badge">{itemA.badge}</div>}
          <div className="name">{itemA.name}</div>
          <div className="formula">{itemA.formula}</div>
        </div>
        <div className="tic-ledger-hero right">
          <div className="n">02</div>
          {itemB.badge && <div className="badge">{itemB.badge}</div>}
          <div className="name">{itemB.name}</div>
          <div className="formula">{itemB.formula}</div>
        </div>
      </div>
      <div className="tic-ledger-body">
        {attributes.map((a, i) => {
          const num = String(i + 1).padStart(2, '0');
          const mono = a.mono ? ' mono' : '';
          return (
            <div className="tic-ledger-row" key={i}>
              <div className={'cell left' + mono}>{a.valueA}</div>
              <div className="attr" data-n={num}>{a.label}</div>
              <div className={'cell right' + mono}>{a.valueB}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Profiles({ data }) {
  const { header, itemA, itemB, attributes } = data;
  const renderCard = (item, side) => (
    <div className={'tic-profiles-card ' + side}>
      <div className="top">
        {item.badge && <div className="badge">{item.badge}</div>}
        <h4>{item.name}</h4>
        <div className="formula">{item.formula}</div>
      </div>
      <div className="rows">
        {attributes.map((a, i) => {
          const value = side === 'a' ? a.valueA : a.valueB;
          return (
            <div className="r" key={i}>
              <div className="k">{a.label}</div>
              <div className={'v' + (a.mono ? ' mono' : '')}>{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
    <div className="tic-card">
      <div className="tic-profiles-head">
        {header.kicker && <div className="kicker">{header.kicker}</div>}
        <h2>{header.title}</h2>
      </div>
      <div className="tic-profiles-grid">
        {renderCard(itemA, 'a')}
        {renderCard(itemB, 'b')}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

export default function TwoItemComparison({ data, variant = 'poster', theme }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const V =
    variant === 'ledger'   ? Ledger   :
    variant === 'profiles' ? Profiles :
                             Poster;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="tic-root" style={cssVars(t)}>
        <V data={data} />
      </div>
    </>
  );
}