/*
  CaseSplit.jsx

  One problem, several branches by condition. Three layouts, one data shape.

  variant   'poster' (default) | 'tree' | 'fork'
            legacy aliases: 'branch' -> 'tree', 'parallel' -> 'fork'

  data = {
    header?: { kicker?, title, lede? },
    parent: {
      kicker?, formula, splitBy, desc?,
      colors?: { bg?, text? }
    },
    cases: Case[],                // any count; 2..5 recommended
    colors?: { ...any DEFAULT_THEME key },          // overrides theme for this instance
    prefaceColors?:    { bg, border, accent, label, text },
    conclusionColors?: { bg, border, accent, icon, label, text },
    detailsLabel?: string         // toggle text, default 'More'
  }

  Case = {
    id, number?, condition,
    color?: 'a'..'f' | cssColor | { main, tint?, text?, onMain? },
                                  // omitted = automatic by position (a, b, c, d, e, f)
    count?: { n, label? },
    headline?, desc?,
    formula?, na?,
    example?, picture?,
    details?: string | string[] | ReactNode,
    defaultOpen?: boolean
  }

  theme     optional partial, merged over DEFAULT_THEME (exported)

  Every text field: strings go through processContent, ReactNodes pass through.
  Full reference: CaseSplit.md
*/

import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

const rc = (v) => (typeof v === 'string' ? processContent(v) : v);

/* ------------------------------------------------------------------ */
/*  theme                                                              */
/* ------------------------------------------------------------------ */

export const DEFAULT_THEME = {
  // card + text
  bg:         '#ffffff',
  ink:        '#0f172a',
  title:      '#1e3a8a',
  muted:      '#64748b',
  line:       '#e2e8f0',
  trunk:      '#94a3b8',
  // parent block
  parentBg:   '#1e3a8a',
  parentText: '#ffffff',
  // case presets 'a'..'f' (also the automatic order when a case has no color)
  accent:     '#2563eb',
  warm:       '#ea580c',
  neutral:    '#64748b',
  teal:       '#0d9488',
  violet:     '#7c3aed',
  rose:       '#e11d48',
  // preface (all styles) and tabs conclusion
  proseBg:     '#eff6ff',
  proseBorder: '#bfdbfe',
  proseAccent: '#2563eb',
  proseLabel:  '#1e3a8a',
  proseText:   '#1e293b',
  // cards conclusion
  conclBg:     '#fffbeb',
  conclBorder: '#fde68a',
  conclAccent: '#d97706',
  conclLabel:  '#b45309',
  conclText:   '#1e293b',
  // gradient style
  gradPreface:    'linear-gradient(135deg, #eff6ff 0%, #eef2ff 55%, #f5f3ff 100%)',
  gradPrefaceBorder: '#c7d2fe',
  gradConclusion: 'linear-gradient(120deg, #1e3a8a 0%, #1d4ed8 100%)',
  gradConclLabel: '#bfdbfe',
  gradConclText:  '#ffffff',
};

const cssVars = (t) => ({
  '--cs-bg':          t.bg,
  '--cs-ink':         t.ink,
  '--cs-title':       t.title,
  '--cs-muted':       t.muted,
  '--cs-line':        t.line,
  '--cs-trunk':       t.trunk,
  '--cs-parent-bg':   t.parentBg,
  '--cs-parent-text': t.parentText,
});

/* resolved colours for the two prose blocks, per proseStyle, overridable per block */
function preVars(t, style, o = {}) {
  const g = style === 'gradient';
  const v = {
    bg:     o.bg     || (g ? t.gradPreface : t.proseBg),
    border: o.border || (g ? t.gradPrefaceBorder : t.proseBorder),
    accent: o.accent || t.proseAccent,
    label:  o.label  || t.proseLabel,
    text:   o.text   || t.proseText,
  };
  return {
    '--cs-pre-bg': v.bg, '--cs-pre-border': v.border, '--cs-pre-accent': v.accent,
    '--cs-pre-label': v.label, '--cs-pre-text': v.text,
  };
}

function conVars(t, style, o = {}) {
  let d;
  if (style === 'gradient') {
    d = { bg: t.gradConclusion, border: 'transparent', accent: '#ffffff', icon: t.accent, label: t.gradConclLabel, text: t.gradConclText };
  } else if (style === 'tabs') {
    d = { bg: t.proseBg, border: t.proseBorder, accent: t.proseLabel, icon: '#ffffff', label: t.proseLabel, text: t.proseText };
  } else {
    d = { bg: t.conclBg, border: t.conclBorder, accent: t.conclAccent, icon: '#ffffff', label: t.conclLabel, text: t.conclText };
  }
  const v = { ...d, ...Object.fromEntries(Object.entries(o).filter(([, x]) => x)) };
  return {
    '--cs-con-bg': v.bg, '--cs-con-border': v.border, '--cs-con-accent': v.accent,
    '--cs-con-icon': v.icon, '--cs-con-label': v.label, '--cs-con-text': v.text,
  };
}

const PRESETS = { a: 'accent', b: 'warm', c: 'neutral', d: 'teal', e: 'violet', f: 'rose' };
const AUTO_ORDER = ['a', 'b', 'c', 'd', 'e', 'f'];

function resolveCase(color, t, i = 0) {
  let main;
  let obj = {};
  const preset = (k) => t[PRESETS[k]];
  if (color && typeof color === 'object') {
    obj = color;
    main = color.main ? (PRESETS[color.main] ? preset(color.main) : color.main) : preset(AUTO_ORDER[i % 6]);
  } else if (!color) main = preset(AUTO_ORDER[i % 6]);
  else if (PRESETS[color]) main = preset(color);
  else main = color;
  return {
    '--c':  main,
    '--t':  obj.tint || `color-mix(in srgb, ${main} 7%, #ffffff)`,
    '--tx': obj.text || t.ink,
    '--on': obj.onMain || '#ffffff',
  };
}

function parentVars(parent) {
  const c = parent.colors || {};
  const s = {};
  if (c.bg) s['--cs-parent-bg'] = c.bg;
  if (c.text) s['--cs-parent-text'] = c.text;
  return s;
}

const caseNumber = (c, i) => c.number || String(i + 1);

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.cs-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--cs-ink);
  line-height: 1.5;
}
.cs-root *, .cs-root *::before, .cs-root *::after { box-sizing: border-box; }

.cs-root .cs-card {
  background: var(--cs-bg);
  border: 1px solid var(--cs-line);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(15,23,42,.04);
}

/* ---- header ---- */
.cs-root .cs-head { padding: 18px 24px 0; }
.cs-root .cs-head .cs-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 600;
  letter-spacing: .14em; text-transform: uppercase;
  color: var(--cs-title); opacity: .8;
  margin-bottom: 4px;
}
.cs-root .cs-head h2 {
  margin: 0; font-size: 17px; font-weight: 700;
  color: var(--cs-title); letter-spacing: -0.01em;
}
.cs-root .cs-head .cs-lede { margin-top: 4px; font-size: 13px; color: var(--cs-muted); max-width: 640px; }

/* ---- split-by pill ---- */
.cs-root .cs-by {
  display: inline-block;
  font-size: 11.5px; color: var(--cs-muted);
  background: var(--cs-bg);
  border: 1px solid var(--cs-line);
  border-radius: 999px;
  padding: 2px 11px;
}
.cs-root .cs-by b { color: var(--cs-title); font-weight: 600; }
.cs-root .cs-by-inv {
  display: inline-block;
  font-size: 11.5px;
  color: var(--cs-parent-text);
  background: color-mix(in srgb, var(--cs-parent-text) 14%, transparent);
  border-radius: 999px;
  padding: 2px 11px;
}
.cs-root .cs-by-inv .cs-by-l { opacity: .75; }
.cs-root .cs-by-inv b { font-weight: 600; }

/* ---- parent block (shared look) ---- */
.cs-root .cs-pk {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 600;
  letter-spacing: .14em; text-transform: uppercase;
  opacity: .7; margin-bottom: 4px;
}
.cs-root .cs-pdesc { font-size: 12.5px; opacity: .8; margin-top: 8px; line-height: 1.45; }

/* ---- badge (count.n) ---- */
.cs-root .cs-badge {
  flex: none;
  min-width: 26px; height: 26px; padding: 0 8px;
  border-radius: 999px;
  background: var(--c); color: var(--on);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; line-height: 1;
  white-space: nowrap;
}
.cs-root .cs-badge.cs-wide { font-size: 12px; letter-spacing: .02em; }

/* ---- verdict block ---- */
.cs-root .cs-vtext { display: flex; flex-direction: column; min-width: 0; }
.cs-root .cs-vh { font-size: 14.5px; font-weight: 700; color: var(--c); line-height: 1.25; }
.cs-root .cs-vl { font-size: 11.5px; color: var(--cs-muted); line-height: 1.3; }

/* ---- body lines ---- */
.cs-root .cs-desc { font-size: 13.5px; line-height: 1.5; color: var(--tx); }
.cs-root .cs-formula { font-size: 14px; color: var(--tx); }
.cs-root .cs-formula.cs-na { color: var(--cs-muted); font-style: italic; font-size: 13px; }

/* ---- example strip ---- */
.cs-root .cs-ex { font-size: 12.5px; color: var(--tx); }
.cs-root .cs-ex .cs-lbl {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 600;
  letter-spacing: .1em; text-transform: uppercase;
  color: var(--c); margin-right: 6px;
}
.cs-root .cs-ex .cs-pic { display: block; margin-top: 2px; color: var(--cs-muted); }

/* ---- expandable details ---- */
.cs-root .cs-more { border-top: 1px solid color-mix(in srgb, var(--c) 18%, #ffffff); }
.cs-root .cs-more > summary {
  list-style: none;
  cursor: pointer;
  user-select: none;
  display: flex; align-items: center; gap: 6px;
  padding: 8px 14px;
  font-size: 12px; font-weight: 600;
  color: var(--c);
}
.cs-root .cs-more > summary::-webkit-details-marker { display: none; }
.cs-root .cs-more > summary::before {
  content: '';
  width: 6px; height: 6px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(-45deg);
  transition: transform .15s ease;
  margin-right: 2px;
}
.cs-root .cs-more[open] > summary::before { transform: rotate(45deg); }
.cs-root .cs-more > summary:hover { background: var(--t); }
.cs-root .cs-more-body {
  padding: 2px 14px 12px;
  font-size: 13px; line-height: 1.55;
  color: var(--tx);
}
.cs-root .cs-more-body p { margin: 0 0 6px; }
.cs-root .cs-more-body p:last-child { margin-bottom: 0; }

/* ================================================================= */
/*  POSTER                                                             */
/* ================================================================= */

.cs-root .cs-p-top {
  background: var(--cs-parent-bg);
  color: var(--cs-parent-text);
  text-align: center;
  padding: 18px 20px 16px;
}
.cs-root .cs-p-top .cs-pf { font-size: 21px; }
.cs-root .cs-p-top .cs-by-inv { margin-top: 10px; }
.cs-root .cs-p-top .cs-pdesc { max-width: 620px; margin-left: auto; margin-right: auto; }

.cs-root .cs-p-tiles { display: grid; gap: 14px; padding: 22px 18px 18px; }
.cs-root .cs-p-tile {
  position: relative;
  background: var(--t);
  border: 1px solid color-mix(in srgb, var(--c) 28%, #ffffff);
  border-top: 3px solid var(--c);
  border-radius: 10px;
  text-align: center;
  display: flex; flex-direction: column;
  min-width: 0;
}
.cs-root .cs-p-tile::before {
  content: '';
  position: absolute; top: -26px; left: calc(50% - 6px);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid var(--cs-parent-bg);
}
.cs-root .cs-p-main {
  flex: 1;
  padding: 20px 16px 14px;
  display: flex; flex-direction: column; align-items: center;
}
.cs-root .cs-p-main .cs-badge {
  min-width: 46px; height: 46px; padding: 0 14px;
  font-size: 24px; font-weight: 800;
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--c) 14%, transparent);
}
.cs-root .cs-p-main .cs-badge.cs-wide { font-size: 15px; }
.cs-root .cs-p-n {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 600;
  letter-spacing: .12em; text-transform: uppercase;
  color: var(--c); opacity: .8;
  margin-top: 12px;
}
.cs-root .cs-p-cond { margin-top: 2px; font-size: 18px; color: var(--c); }
.cs-root .cs-p-main .cs-vh { margin-top: 4px; font-size: 15px; color: var(--tx); }
.cs-root .cs-p-main .cs-vl { margin-top: 1px; }
.cs-root .cs-p-main .cs-desc { margin-top: 6px; font-size: 13px; color: var(--cs-muted); max-width: 240px; }
.cs-root .cs-p-main .cs-formula { margin-top: 8px; }
.cs-root .cs-p-main .cs-ex {
  margin-top: 12px;
  background: var(--cs-bg);
  border: 1px solid color-mix(in srgb, var(--c) 25%, #ffffff);
  border-radius: 14px;
  padding: 4px 12px;
  font-size: 12px;
}
.cs-root .cs-p-tile .cs-more { text-align: left; }
.cs-root .cs-p-tile .cs-more > summary { justify-content: center; }

/* ================================================================= */
/*  TREE                                                               */
/* ================================================================= */

.cs-root .cs-t-body { padding: 22px 24px 22px; }
.cs-root .cs-t-parent {
  width: fit-content; max-width: 100%;
  margin: 0 auto;
  text-align: center;
  background: var(--cs-parent-bg);
  color: var(--cs-parent-text);
  border-radius: 10px;
  padding: 12px 24px 11px;
  box-shadow: 0 4px 14px rgba(30,58,138,.18);
}
.cs-root .cs-t-parent .cs-pf { font-size: 19px; }
.cs-root .cs-t-parent .cs-pdesc { max-width: 520px; }
.cs-root .cs-t-by { text-align: center; margin-top: 10px; }

.cs-root .cs-t-stem { width: 1.5px; height: 14px; background: var(--cs-trunk); margin: 0 auto; }
.cs-root .cs-t-tree { display: grid; }
.cs-root .cs-t-br { position: relative; padding: 24px 9px 0; min-width: 0; }
.cs-root .cs-t-br::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0;
  border-top: 1.5px solid var(--cs-trunk);
}
.cs-root .cs-t-br:first-child::before { left: 50%; }
.cs-root .cs-t-br:last-child::before  { right: 50%; }
.cs-root .cs-t-br::after {
  content: ''; position: absolute; top: 0; left: calc(50% - .75px);
  width: 1.5px; height: 24px; background: var(--c);
}
.cs-root .cs-t-tip {
  position: absolute; top: 18px; left: calc(50% - 4.5px);
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  border-top: 6px solid var(--c);
}

.cs-root .cs-t-card {
  height: 100%;
  display: flex; flex-direction: column;
  background: var(--cs-bg);
  border: 1px solid color-mix(in srgb, var(--c) 35%, #ffffff);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(15,23,42,.05);
}
.cs-root .cs-t-cond {
  background: var(--c); color: var(--on);
  padding: 10px 14px;
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
}
.cs-root .cs-t-cond .cs-n {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 600;
  letter-spacing: .12em; text-transform: uppercase;
  opacity: .75; white-space: nowrap;
}
.cs-root .cs-t-cond .cs-expr { font-size: 18px; text-align: right; }
.cs-root .cs-t-verdict {
  background: var(--t);
  padding: 11px 14px;
  display: flex; align-items: center; gap: 10px;
  border-bottom: 1px solid color-mix(in srgb, var(--c) 15%, #ffffff);
}
.cs-root .cs-t-main { flex: 1; padding: 11px 14px 4px; display: flex; flex-direction: column; gap: 6px; }
.cs-root .cs-t-card .cs-ex {
  margin: 8px 14px 13px;
  padding: 7px 10px;
  background: var(--t);
  border-radius: 6px;
}

/* ================================================================= */
/*  FORK                                                               */
/* ================================================================= */

.cs-root .cs-f-body {
  padding: 20px 24px 22px;
  display: grid;
  grid-template-columns: fit-content(320px) 1fr;
  align-items: center;
}
.cs-root .cs-f-parent {
  position: relative;
  min-width: 170px;
  background: var(--cs-parent-bg);
  color: var(--cs-parent-text);
  border-radius: 10px;
  padding: 16px 14px;
  text-align: center;
  box-shadow: 0 4px 14px rgba(30,58,138,.18);
}
.cs-root .cs-f-parent .cs-pf { font-size: 18px; }
.cs-root .cs-f-parent .cs-by-inv { margin-top: 8px; }
.cs-root .cs-f-parent::after {
  content: ''; position: absolute; right: -22px; top: calc(50% - .75px);
  width: 22px; height: 1.5px; background: var(--cs-trunk);
}

.cs-root .cs-f-rows { padding-left: 22px; display: flex; flex-direction: column; min-width: 0; }
.cs-root .cs-f-row { position: relative; padding: 6px 0 6px 28px; }
.cs-root .cs-f-row::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0;
  border-left: 1.5px solid var(--cs-trunk);
}
.cs-root .cs-f-row:first-child::before { top: 50%; }
.cs-root .cs-f-row:last-child::before  { bottom: 50%; }
.cs-root .cs-f-row::after {
  content: ''; position: absolute; left: 0; top: calc(50% - .75px);
  width: 22px; height: 1.5px; background: var(--c);
}
.cs-root .cs-f-tip {
  position: absolute; left: 20px; top: calc(50% - 4.5px);
  border-top: 4.5px solid transparent;
  border-bottom: 4.5px solid transparent;
  border-left: 6px solid var(--c);
}
/* with an open details panel the row grows; keep connectors on the top part */
.cs-root .cs-f-row.cs-has-more::after,
.cs-root .cs-f-row.cs-has-more .cs-f-tip { top: 42px; }
.cs-root .cs-f-row.cs-has-more:first-child::before { top: 42px; }

.cs-root .cs-f-case {
  background: var(--cs-bg);
  border: 1px solid color-mix(in srgb, var(--c) 35%, #ffffff);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(15,23,42,.05);
}
.cs-root .cs-f-grid {
  display: grid;
  grid-template-columns: 130px 180px 1fr;
  align-items: stretch;
  min-height: 72px;
}
.cs-root .cs-f-cond {
  background: var(--c); color: var(--on);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 10px; font-size: 17px; text-align: center;
}
.cs-root .cs-f-cond .cs-n {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 600;
  letter-spacing: .12em; text-transform: uppercase;
  opacity: .75; margin-bottom: 2px;
}
.cs-root .cs-f-verdict {
  background: var(--t);
  display: flex; align-items: center; gap: 9px;
  padding: 10px 14px;
  border-right: 1px solid color-mix(in srgb, var(--c) 15%, #ffffff);
  min-width: 0;
}
.cs-root .cs-f-detail {
  padding: 10px 16px;
  display: flex; flex-direction: column; justify-content: center; gap: 3px;
  min-width: 0;
}
.cs-root .cs-f-detail .cs-ex { color: var(--cs-muted); }


/* ================================================================= */
/*  PROSE: preface + conclusion  (proseStyle: cards | gradient | tabs) */
/* ================================================================= */

.cs-root .cs-preface { padding: 16px 24px 0; }
.cs-root .cs-concl { margin: 0 24px 22px; }
.cs-root .cs-pre-body p,
.cs-root .cs-concl-body p { margin: 0 0 8px; }
.cs-root .cs-pre-body p:last-child,
.cs-root .cs-concl-body p:last-child { margin-bottom: 0; }
.cs-root .cs-pre-body { font-size: 14px; line-height: 1.6; color: var(--cs-pre-text); }
.cs-root .cs-concl-body { font-size: 14px; line-height: 1.6; color: var(--cs-con-text); }
.cs-root .cs-concl-body .katex { color: var(--cs-con-text); }
.cs-root .cs-pre-ic,
.cs-root .cs-concl-ic { display: inline-flex; align-items: center; justify-content: center; flex: none; }
.cs-root .cs-pre-head { color: var(--cs-pre-label); }
.cs-root .cs-concl-lbl { color: var(--cs-con-label); }

/* ---- cards ---- */
.cs-root.cs-prose-cards .cs-pre-box {
  background: var(--cs-pre-bg);
  border: 1px solid var(--cs-pre-border);
  border-left: 4px solid var(--cs-pre-accent);
  border-radius: 10px;
  padding: 12px 16px 13px;
}
.cs-root.cs-prose-cards .cs-pre-head {
  display: flex; align-items: center; gap: 6px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase;
  margin-bottom: 5px;
}
.cs-root.cs-prose-cards .cs-concl {
  display: grid; grid-template-columns: 30px 1fr; gap: 12px; align-items: start;
  background: var(--cs-con-bg);
  border: 1px solid var(--cs-con-border);
  border-left: 4px solid var(--cs-con-accent);
  border-radius: 10px;
  padding: 12px 16px 13px;
}
.cs-root.cs-prose-cards .cs-concl-ic {
  width: 30px; height: 30px; border-radius: 50%;
  background: var(--cs-con-accent); color: var(--cs-con-icon);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--cs-con-accent) 18%, transparent);
}
.cs-root.cs-prose-cards .cs-concl.cs-no-title { align-items: center; }
.cs-root.cs-prose-cards .cs-concl-lbl {
  display: block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase;
  margin-bottom: 3px;
}

/* ---- gradient ---- */
.cs-root.cs-prose-gradient .cs-pre-box {
  position: relative;
  background: var(--cs-pre-bg);
  border: 1px solid var(--cs-pre-border);
  border-radius: 12px;
  padding: 14px 18px;
}
.cs-root.cs-prose-gradient .cs-pre-box.cs-has-title { padding-top: 22px; margin-top: 8px; }
.cs-root.cs-prose-gradient .cs-pre-head {
  display: inline-flex; align-items: center; gap: 6px;
  position: absolute; top: -11px; left: 16px;
  background: var(--cs-bg); border: 1px solid var(--cs-pre-border); border-radius: 999px;
  padding: 2px 11px 2px 8px;
  font-size: 11.5px; font-weight: 700;
}
.cs-root.cs-prose-gradient .cs-pre-ic { color: var(--cs-pre-accent); }
.cs-root.cs-prose-gradient .cs-concl {
  display: grid; grid-template-columns: 32px 1fr; gap: 14px; align-items: center;
  background: var(--cs-con-bg);
  border: 1px solid var(--cs-con-border);
  border-radius: 12px;
  padding: 14px 18px;
  box-shadow: 0 6px 18px rgba(30,58,138,.22);
}
.cs-root.cs-prose-gradient .cs-concl-ic {
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--cs-con-accent); color: var(--cs-con-icon);
}
.cs-root.cs-prose-gradient .cs-concl-lbl {
  display: block; font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  margin-bottom: 2px;
}

/* ---- tabs ---- */
.cs-root.cs-prose-tabs .cs-pre-box {
  position: relative;
  background: var(--cs-pre-bg);
  border: 1px solid var(--cs-pre-border);
  border-radius: 10px;
  padding: 12px 16px 13px;
}
.cs-root.cs-prose-tabs .cs-concl {
  position: relative;
  background: var(--cs-con-bg);
  border: 1px solid var(--cs-con-border);
  border-radius: 10px;
  padding: 12px 16px 13px;
}
.cs-root.cs-prose-tabs .cs-pre-box.cs-has-title,
.cs-root.cs-prose-tabs .cs-concl.cs-has-title { border-top-left-radius: 0; }
.cs-root.cs-prose-tabs .cs-preface.cs-has-title { padding-top: 34px; }
.cs-root.cs-prose-tabs .cs-concl.cs-has-title { margin-top: 28px; }
.cs-root.cs-prose-tabs .cs-concl-ic { display: none; }
.cs-root.cs-prose-tabs .cs-pre-head,
.cs-root.cs-prose-tabs .cs-concl-lbl {
  display: inline-flex; align-items: center; gap: 6px;
  position: absolute; bottom: 100%; left: -1px;
  color: #ffffff;
  border-radius: 7px 7px 0 0;
  padding: 3px 12px 3px 10px;
  font-size: 11px; font-weight: 700; letter-spacing: .04em;
}
.cs-root.cs-prose-tabs .cs-pre-head { background: var(--cs-pre-label); }
.cs-root.cs-prose-tabs .cs-concl-lbl { background: var(--cs-con-label); }

/* ---- title only (no body) ---- */
.cs-root .cs-pre-box.cs-no-body .cs-pre-head { margin-bottom: 0; }
.cs-root .cs-concl.cs-no-body { align-items: center; }
.cs-root .cs-concl.cs-no-body .cs-concl-lbl { margin-bottom: 0; }
.cs-root.cs-prose-gradient .cs-pre-box.cs-no-body { padding: 10px 14px; margin-top: 0; }
.cs-root.cs-prose-gradient .cs-pre-box.cs-no-body .cs-pre-head { position: static; }
.cs-root.cs-prose-tabs .cs-preface.cs-no-body { padding-top: 16px; }
.cs-root.cs-prose-tabs .cs-pre-box.cs-no-body,
.cs-root.cs-prose-tabs .cs-concl.cs-no-body { background: none; border: none; padding: 0; margin-top: 0; }
.cs-root.cs-prose-tabs .cs-pre-box.cs-no-body .cs-pre-head,
.cs-root.cs-prose-tabs .cs-concl.cs-no-body .cs-concl-lbl { position: static; border-radius: 7px; }

/* ---- inline helper ---- */
.cs-root .cs-var { font-style: italic; }

/* ---- responsive ---- */
@media (max-width: 760px) {
  .cs-root .cs-p-tiles,
  .cs-root .cs-t-tree { grid-template-columns: 1fr !important; }
  .cs-root .cs-p-tile + .cs-p-tile::before { display: none; }
  .cs-root .cs-t-br { padding: 20px 0 0; }
  .cs-root .cs-t-br::before { display: none; }
  .cs-root .cs-t-br::after { height: 20px; }
  .cs-root .cs-t-tip { top: 14px; }
  .cs-root .cs-f-body { grid-template-columns: 1fr; }
  .cs-root .cs-f-parent::after {
    right: auto; left: calc(50% - .75px);
    top: auto; bottom: -18px; width: 1.5px; height: 18px;
  }
  .cs-root .cs-f-rows { padding: 18px 0 0; }
  .cs-root .cs-f-grid { grid-template-columns: 1fr; }
  .cs-root .cs-f-verdict { border-right: none; }
}
`;

/* ------------------------------------------------------------------ */
/*  shared pieces                                                      */
/* ------------------------------------------------------------------ */

function Head({ header }) {
  return (
    <div className="cs-head">
      {header.kicker && <div className="cs-kicker">{rc(header.kicker)}</div>}
      <h2>{rc(header.title)}</h2>
      {header.lede && <div className="cs-lede">{rc(header.lede)}</div>}
    </div>
  );
}

function Badge({ n }) {
  if (n === undefined || n === null || n === '') return null;
  const wide = typeof n === 'string' && n.length > 2;
  return <span className={'cs-badge' + (wide ? ' cs-wide' : '')}>{rc(n)}</span>;
}

function VerdictText({ c }) {
  const label = c.count && c.count.label;
  if (!c.headline && !label) return null;
  return (
    <span className="cs-vtext">
      {c.headline && <span className="cs-vh">{rc(c.headline)}</span>}
      {label && <span className="cs-vl">{rc(label)}</span>}
    </span>
  );
}

function Formula({ c }) {
  if (c.formula === undefined) return null;
  return <div className={'cs-formula' + (c.na ? ' cs-na' : '')}>{rc(c.formula)}</div>;
}

function Example({ c }) {
  if (c.example === undefined && !c.picture) return null;
  return (
    <div className="cs-ex">
      {c.example !== undefined && (
        <>
          <span className="cs-lbl">e.g.</span>
          {rc(c.example)}
        </>
      )}
      {c.picture && <span className="cs-pic">{rc(c.picture)}</span>}
    </div>
  );
}

function Details({ c, label }) {
  if (c.details === undefined || c.details === null) return null;
  const body = Array.isArray(c.details)
    ? c.details.map((p, i) => <p key={i}>{rc(p)}</p>)
    : rc(c.details);
  return (
    <details className="cs-more" open={!!c.defaultOpen}>
      <summary>{label}</summary>
      <div className="cs-more-body">{body}</div>
    </details>
  );
}


const paras = (v) => (Array.isArray(v) ? v.map((p, i) => <p key={i}>{rc(p)}</p>) : rc(v));

const IconInfo = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
    <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 7v4.2M8 4.6v.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const IconKey = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
    <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Preface({ data, vars }) {
  const title = data.prefaceTitle;
  const body = data.preface;
  if (!title && !body) return null;
  const cls = (title ? ' cs-has-title' : '') + (body ? '' : ' cs-no-body');
  return (
    <div className={'cs-preface' + cls} style={vars}>
      <div className={'cs-pre-box' + cls}>
        {title && (
          <div className="cs-pre-head">
            <span className="cs-pre-ic"><IconInfo /></span>
            {rc(title)}
          </div>
        )}
        {body && <div className="cs-pre-body">{paras(body)}</div>}
      </div>
    </div>
  );
}

function Conclusion({ data, vars }) {
  const title = data.conclusionTitle;
  const body = data.conclusion;
  if (!title && !body) return null;
  const cls = (title ? ' cs-has-title' : ' cs-no-title') + (body ? '' : ' cs-no-body');
  return (
    <div className={'cs-concl' + cls} style={vars}>
      <span className="cs-concl-ic"><IconKey /></span>
      <div className="cs-concl-main">
        {title && <span className="cs-concl-lbl">{rc(title)}</span>}
        {body && <div className="cs-concl-body">{paras(body)}</div>}
      </div>
    </div>
  );
}

function SplitByInv({ splitBy }) {
  if (!splitBy) return null;
  return (
    <span className="cs-by-inv">
      <span className="cs-by-l">split by </span><b>{rc(splitBy)}</b>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  poster                                                             */
/* ------------------------------------------------------------------ */

function PosterTile({ c, i, theme, label }) {
  return (
    <div className="cs-p-tile" style={resolveCase(c.color, theme, i)}>
      <div className="cs-p-main">
        <Badge n={c.count && c.count.n} />
        <div className="cs-p-n">Case {caseNumber(c, i)}</div>
        <div className="cs-p-cond">{rc(c.condition)}</div>
        {c.headline && <div className="cs-vh">{rc(c.headline)}</div>}
        {c.count && c.count.label && <div className="cs-vl">{rc(c.count.label)}</div>}
        {c.desc && <div className="cs-desc">{rc(c.desc)}</div>}
        <Formula c={c} />
        <Example c={c} />
      </div>
      <Details c={c} label={label} />
    </div>
  );
}

function Poster({ data, theme, label, pre, con }) {
  const p = data.parent;
  const N = data.cases.length;
  return (
    <div className="cs-card">
      {data.header && <Head header={data.header} />}
      <Preface data={data} vars={pre} />
      <div className="cs-p-top" style={{ ...parentVars(p), marginTop: (data.header || data.preface) ? 16 : 0 }}>
        {p.kicker && <div className="cs-pk">{rc(p.kicker)}</div>}
        <div className="cs-pf">{rc(p.formula)}</div>
        <SplitByInv splitBy={p.splitBy} />
        {p.desc && <div className="cs-pdesc">{rc(p.desc)}</div>}
      </div>
      <div
        className="cs-p-tiles"
        style={{ ...parentVars(p), gridTemplateColumns: `repeat(${N}, 1fr)` }}
      >
        {data.cases.map((c, i) => (
          <PosterTile key={c.id} c={c} i={i} theme={theme} label={label} />
        ))}
      </div>
      <Conclusion data={data} vars={con} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  tree                                                               */
/* ------------------------------------------------------------------ */

function TreeCase({ c, i, theme, label }) {
  const badge = c.count && c.count.n;
  const hasVerdict = (badge !== undefined && badge !== '') || c.headline || (c.count && c.count.label);
  return (
    <div className="cs-t-br" style={resolveCase(c.color, theme, i)}>
      <i className="cs-t-tip" />
      <div className="cs-t-card">
        <div className="cs-t-cond">
          <span className="cs-n">Case {caseNumber(c, i)}</span>
          <span className="cs-expr">{rc(c.condition)}</span>
        </div>
        {hasVerdict && (
          <div className="cs-t-verdict">
            <Badge n={badge} />
            <VerdictText c={c} />
          </div>
        )}
        <div className="cs-t-main">
          {c.desc && <div className="cs-desc">{rc(c.desc)}</div>}
          <Formula c={c} />
        </div>
        <Example c={c} />
        <Details c={c} label={label} />
      </div>
    </div>
  );
}

function Tree({ data, theme, label, pre, con }) {
  const p = data.parent;
  const N = data.cases.length;
  const pv = parentVars(p);
  return (
    <div className="cs-card">
      {data.header && <Head header={data.header} />}
      <Preface data={data} vars={pre} />
      <div className="cs-t-body" style={pv}>
        <div className="cs-t-parent">
          {p.kicker && <div className="cs-pk">{rc(p.kicker)}</div>}
          <div className="cs-pf">{rc(p.formula)}</div>
          {p.desc && <div className="cs-pdesc">{rc(p.desc)}</div>}
        </div>
        {p.splitBy && (
          <div className="cs-t-by">
            <span className="cs-by">split by <b>{rc(p.splitBy)}</b></span>
          </div>
        )}
        <div className="cs-t-stem" />
        <div className="cs-t-tree" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}>
          {data.cases.map((c, i) => (
            <TreeCase key={c.id} c={c} i={i} theme={theme} label={label} />
          ))}
        </div>
      </div>
      <Conclusion data={data} vars={con} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  fork                                                               */
/* ------------------------------------------------------------------ */

function ForkCase({ c, i, theme, label }) {
  const hasMore = c.details !== undefined && c.details !== null;
  return (
    <div
      className={'cs-f-row' + (hasMore ? ' cs-has-more' : '')}
      style={resolveCase(c.color, theme, i)}
    >
      <i className="cs-f-tip" />
      <div className="cs-f-case">
        <div className="cs-f-grid">
          <div className="cs-f-cond">
            <span className="cs-n">Case {caseNumber(c, i)}</span>
            {rc(c.condition)}
          </div>
          <div className="cs-f-verdict">
            <Badge n={c.count && c.count.n} />
            <VerdictText c={c} />
          </div>
          <div className="cs-f-detail">
            {c.desc && <div className="cs-desc">{rc(c.desc)}</div>}
            <Formula c={c} />
            <Example c={c} />
          </div>
        </div>
        <Details c={c} label={label} />
      </div>
    </div>
  );
}

function Fork({ data, theme, label, pre, con }) {
  const p = data.parent;
  const pv = parentVars(p);
  return (
    <div className="cs-card">
      {data.header && <Head header={data.header} />}
      <Preface data={data} vars={pre} />
      <div className="cs-f-body" style={pv}>
        <div className="cs-f-parent">
          {p.kicker && <div className="cs-pk">{rc(p.kicker)}</div>}
          <div className="cs-pf">{rc(p.formula)}</div>
          <SplitByInv splitBy={p.splitBy} />
          {p.desc && <div className="cs-pdesc">{rc(p.desc)}</div>}
        </div>
        <div className="cs-f-rows">
          {data.cases.map((c, i) => (
            <ForkCase key={c.id} c={c} i={i} theme={theme} label={label} />
          ))}
        </div>
      </div>
      <Conclusion data={data} vars={con} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

const VARIANTS = {
  poster:   Poster,
  tree:     Tree,
  fork:     Fork,
  branch:   Tree,
  parallel: Fork,
};

const PROSE_STYLES = ['cards', 'gradient', 'tabs'];

export default function CaseSplit({ data, variant = 'poster', theme, proseStyle = 'cards' }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}), ...(data.colors || {}) };
  const V = VARIANTS[variant] || Poster;
  const style = PROSE_STYLES.includes(proseStyle) ? proseStyle : 'cards';
  const label = data.detailsLabel || 'More';
  const pre = preVars(t, style, data.prefaceColors);
  const con = conVars(t, style, data.conclusionColors);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className={'cs-root cs-prose-' + style} style={cssVars(t)}>
        <V data={data} theme={t} label={label} pre={pre} con={con} />
      </div>
    </>
  );
}
