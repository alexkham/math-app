/*
  MistakeFix.jsx

  A common-mistakes infographic. Each mistake carries the wrong working, the
  right working, why it happens and how to check — the structure of the
  site's "Common Pitfalls" sections.

  ------------------------------------------------------------------
  LAYOUTS
  ------------------------------------------------------------------
  split   one card per mistake: wrong | right side by side, why + check below
  ledger  many short false rules: one row each (false rule | what is true),
          a row opens its working when the data has any
  trace   the working as steps: shared start, the step that breaks
          ("error here"), and the right path from the same point

  variant 'auto' (default) picks:
    ledger  when no mistake has `why`/`check` beside a one-line `wrong`,
            or options.ledger is true
    trace   otherwise (the site's default for pitfall sections)
  split is used only when asked for by name.

  trace with a single-line `wrong` (no errorAt) has no shared start: the
  whole wrong working is the faulty step. A mistake without `right` shows
  its `truth` on the right path.

  ------------------------------------------------------------------
  PROPS
  ------------------------------------------------------------------
  data     required, see below
  variant  'auto' | 'split' | 'ledger' | 'trace'
  theme    partial theme, merged over DEFAULT_THEME (data.theme wins)
  options  partial options, merged over DEFAULT_OPTIONS (data.options wins)

  ------------------------------------------------------------------
  DATA
  ------------------------------------------------------------------
  {
    header?:   { kicker?, title, lede? },
    mistakes:  Mistake[],
    footnote?: string,
    labels?:   { ... },      // merged over DEFAULT_LABELS
    theme?:    { ... },      // merged over DEFAULT_THEME
    options?:  { ... }       // merged over DEFAULT_OPTIONS
  }

  Mistake = {
    id:       string,                 // required, unique; the card's anchor
                                      //   is options.anchorPrefix + id
    name:     string,                 // what the mistake is called
    what?:    string,                 // what goes wrong, shown under the name
    wrong:    string | string[],      // wrong working; array = steps
    right?:   string | string[],      // right working; array = steps
    errorAt?: number,                 // trace: index of the first wrong step;
                                      //   steps before it are shared
    truth?:   string,                 // ledger: what is true instead
    why?:     string,
    check?:   string,
    link?:    { label, href },        // where the topic is taught
    details?:      string | string[] | ReactNode,   // extra expandable part
    detailsLabel?: string,
    detailsTitle?: string
  }

  All text goes through processContent ($math$, $$display$$, **bold**, links).
  A step that is only maths is set in the maths font (and struck through in
  split); a step with words in it is set as text and never struck.
*/

'use client';

import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ------------------------------------------------------------------ */
/*  defaults                                                           */
/* ------------------------------------------------------------------ */

export const DEFAULT_LABELS = {
  wrong:        'Wrong',
  right:        'Right',
  notTrue:      'Not true',
  instead:      'Instead',
  start:        'Start',
  wrongTurn:    'Wrong turn',
  rightPath:    'Right path',
  errorHere:    'Error here',
  why:          'Why it happens',
  check:        'How to check',
  rightWorking: 'Right working',
  wrongWorking: 'Wrong working, continued',
  more:         'More',
  hide:         'Hide',
  detailsTitle: '',
};

export const DEFAULT_THEME = {
  ink:       '#1e293b',
  title:     '#06357A',
  muted:     '#64748b',
  line:      '#e2e8f0',
  box:       '#c7cedb',
  panel:     '#ffffff',
  soft:      '#f8fafc',
  headBg:    '#eff6ff',
  right:     '#2563eb',
  rightSoft: '#dbeafe',
  wrong:     '#475569',
  wrongBg:   '#f1f5f9',
  wrongSoft: '#e2e8f0',
  error:     '#B45309',  // site amber, as on the pitfall side boxes
  errorBg:   '#FDF3E3',
  errorInk:  '#B45309',
};

export const DEFAULT_OPTIONS = {
  numbered:     true,       // number badge on split / trace cards
  strikeWrong:  true,       // strike through the wrong working in split
  marks:        true,       // ✕ / ✓ marks on the Wrong / Right tags
  ledger:       false,      // 'auto' prefers ledger even when why/check exist
  anchorPrefix: 'pitfall-', // each card's id is anchorPrefix + mistake id
};

const cssVars = (t) => ({
  '--mf-ink':        t.ink,
  '--mf-title':      t.title,
  '--mf-muted':      t.muted,
  '--mf-line':       t.line,
  '--mf-box':        t.box,
  '--mf-panel':      t.panel,
  '--mf-soft':       t.soft,
  '--mf-head':       t.headBg,
  '--mf-right':      t.right,
  '--mf-right-soft': t.rightSoft,
  '--mf-wrong':      t.wrong,
  '--mf-wrong-bg':   t.wrongBg,
  '--mf-wrong-soft': t.wrongSoft,
  '--mf-err':        t.error,
  '--mf-err-bg':     t.errorBg,
  '--mf-err-ink':    t.errorInk,
});

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.mf-root { font-family: 'Inter', system-ui, -apple-system, sans-serif; color: var(--mf-ink); line-height: 1.45; }
.mf-root *, .mf-root *::before, .mf-root *::after { box-sizing: border-box; }
.mf-root .katex { text-transform: none; }
.mf-root .mf-inline br { display: none; }
.mf-root .mf-inline p { margin: 0; display: inline; }

.mf-root .mf-card { background: var(--mf-panel); border: 1.5px solid var(--mf-box); border-radius: 12px; overflow: hidden; }
.mf-root .mf-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--mf-box); }
.mf-root .mf-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--mf-right);
}
.mf-root .mf-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--mf-title); letter-spacing: -0.01em; }
.mf-root .mf-lede { margin-top: 3px; font-size: 12.5px; color: var(--mf-muted); }
.mf-root .mf-body { padding: 16px 20px 18px; background: var(--mf-soft); display: grid; gap: 14px; }
.mf-root .mf-foot { font-size: 12px; color: var(--mf-muted); }
/* grid items default to their content's width; let wide formulas scroll inside instead */
.mf-root .mf-body > *, .mf-root .mf-tr-col, .mf-root .mf-step, .mf-root .mf-sp-col, .mf-root .mf-sp-f, .mf-root .mf-box,
.mf-root .mf-ld-w, .mf-root .mf-ld-r, .mf-root .mf-ld-w > .mf-math, .mf-root .mf-ld-more > * { min-width: 0; max-width: 100%; }

/* tags + labels */
.mf-root .mf-tag {
  display: inline-flex; align-items: center; gap: 5px; padding: 1px 8px; border-radius: 999px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; white-space: nowrap;
}
.mf-root .mf-tag.w { background: var(--mf-wrong-soft); color: var(--mf-wrong); }
.mf-root .mf-tag.r { background: var(--mf-right-soft); color: var(--mf-right); }
.mf-root .mf-marks .mf-tag.w::before { content: '\\2715'; font-family: 'Inter', sans-serif; font-size: 10px; }
.mf-root .mf-marks .mf-tag.r::before { content: '\\2713'; font-family: 'Inter', sans-serif; font-size: 10px; }
.mf-root .mf-lbl {
  display: block; margin-bottom: 2px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--mf-muted);
}
.mf-root .mf-math { font-family: 'STIX Two Text', 'Times New Roman', serif; font-size: 15px; }
.mf-root .mf-math .katex-display { margin: 2px 0; overflow-x: auto; overflow-y: hidden; padding: 2px 0; }
.mf-root .mf-text { font-size: 13px; line-height: 1.5; }
.mf-root .mf-text .katex-display { margin: 4px 0; overflow-x: auto; overflow-y: hidden; }
.mf-root .mf-what { padding: 8px 14px; font-size: 13px; line-height: 1.5; border-bottom: 1px solid var(--mf-line); }
.mf-root .mf-anchor { scroll-margin-top: 90px; }
.mf-root .mf-num {
  width: 20px; height: 20px; border-radius: 50%; flex: none;
  background: var(--mf-title); color: #ffffff;
  font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10px; font-weight: 700; line-height: 20px; text-align: center;
}
.mf-root .mf-name { font-size: 13.5px; font-weight: 700; color: var(--mf-title); }
.mf-root .mf-link {
  margin-left: auto; white-space: nowrap;
  font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10px; font-weight: 600;
  color: var(--mf-right); text-decoration: none;
}
.mf-root .mf-link:hover { text-decoration: underline; }

/* expandable */
.mf-root .mf-xbtn {
  display: inline-flex; align-items: center; gap: 6px; cursor: pointer;
  padding: 2px 8px 2px 6px; border-radius: 999px;
  background: var(--mf-panel); border: 1.5px solid var(--mf-right-soft);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--mf-right);
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.mf-root .mf-xbtn:hover { border-color: var(--mf-right); background: var(--mf-head); }
.mf-root .mf-xbtn.mf-open { background: var(--mf-right); border-color: var(--mf-right); color: #ffffff; }
.mf-root .mf-chev { width: 0; height: 0; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 5px solid currentColor; transition: transform 0.18s; }
.mf-root .mf-xbtn.mf-open .mf-chev { transform: rotate(180deg); }
.mf-root .mf-coll { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.22s ease; }
.mf-root .mf-coll.mf-open { grid-template-rows: 1fr; }
.mf-root .mf-coll-in { overflow: hidden; min-height: 0; }
.mf-root .mf-xbody {
  padding: 10px 12px; font-size: 12.5px; line-height: 1.55;
  background: var(--mf-soft); border: 1.5px solid var(--mf-box); border-left: 4px solid var(--mf-right); border-radius: 8px;
}
.mf-root .mf-xtitle {
  margin-bottom: 4px; font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--mf-right);
}

/* ---------- split ---------- */
.mf-root .mf-sp { background: var(--mf-panel); border: 1.5px solid var(--mf-box); border-radius: 10px; overflow: hidden; }
.mf-root .mf-sp-h { display: flex; align-items: center; gap: 10px; padding: 8px 14px; background: var(--mf-head); border-bottom: 1.5px solid var(--mf-box); }
.mf-root .mf-sp-cols { display: grid; grid-template-columns: 1fr 1fr; }
.mf-root .mf-sp-col { padding: 10px 14px 12px; display: grid; gap: 6px; align-content: start; }
.mf-root .mf-sp-col.w { background: var(--mf-wrong-bg); border-right: 1.5px solid var(--mf-box); }
.mf-root .mf-sp-col.w .mf-math, .mf-root .mf-sp-col.w .mf-text { color: var(--mf-wrong); }
.mf-root .mf-strike .mf-sp-col.w .mf-math { text-decoration: line-through; text-decoration-color: color-mix(in srgb, var(--mf-wrong) 45%, transparent); }
/* text-decoration does not reach KaTeX's inline-block parts, so draw the line on each one */
.mf-root .mf-strike .mf-sp-col.w .mf-math .katex .base::after {
  content: ''; position: absolute; left: -1px; right: -1px; top: 50%;
  border-top: 1.5px solid color-mix(in srgb, var(--mf-wrong) 55%, transparent); pointer-events: none;
}
.mf-root .mf-sp-foot { display: grid; grid-template-columns: 1fr 1fr; border-top: 1.5px solid var(--mf-box); }
.mf-root .mf-sp-foot.mf-one { grid-template-columns: 1fr; }
.mf-root .mf-sp-f { padding: 8px 14px 10px; font-size: 12.5px; }
.mf-root .mf-sp-f + .mf-sp-f { border-left: 1px solid var(--mf-line); }
.mf-root .mf-sp-f.chk .mf-lbl { color: var(--mf-right); }
.mf-root .mf-sp-x { padding: 0 14px 12px; }
.mf-root .mf-sp-xbar { padding: 8px 14px; border-top: 1px solid var(--mf-line); }

/* ---------- ledger ---------- */
.mf-root .mf-ld { background: var(--mf-panel); border: 1.5px solid var(--mf-box); border-radius: 10px; overflow: hidden; }
.mf-root .mf-ld-hdr, .mf-root .mf-ld-row { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr) 28px; }
.mf-root .mf-ld-hdr { background: var(--mf-head); border-bottom: 1.5px solid var(--mf-box); }
.mf-root .mf-ld-hdr > div { padding: 7px 14px; }
.mf-root .mf-ld-row { border-top: 1px solid var(--mf-line); align-items: stretch; }
.mf-root .mf-ld-row.mf-first { border-top: none; }
.mf-root .mf-ld-row.mf-can { cursor: pointer; }
.mf-root .mf-ld-row.mf-can:hover .mf-ld-r { background: color-mix(in srgb, var(--mf-head) 50%, var(--mf-panel)); }
.mf-root .mf-ld-w { padding: 9px 14px; background: var(--mf-wrong-bg); border-right: 1.5px solid var(--mf-box); display: flex; align-items: center; }
.mf-root .mf-ld-w .mf-math { color: var(--mf-wrong); }
.mf-root .mf-ld-r { padding: 9px 14px; display: flex; flex-direction: column; justify-content: center; gap: 2px; transition: background 0.15s; }
.mf-root .mf-ld-r .mf-note { font-size: 12px; color: var(--mf-muted); }
.mf-root .mf-ld-w .katex-display > .katex, .mf-root .mf-ld-r .katex-display > .katex { text-align: left; }
.mf-root .mf-ld-x { display: flex; align-items: center; justify-content: center; }
.mf-root .mf-ld-x span { width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 6px solid var(--mf-right); transition: transform 0.18s; }
.mf-root .mf-ld-row.mf-open .mf-ld-x span { transform: rotate(180deg); }
.mf-root .mf-ld-more {
  margin: 0 14px 12px; padding: 10px 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 18px;
  background: var(--mf-soft); border: 1.5px solid var(--mf-box); border-left: 4px solid var(--mf-right); border-radius: 8px; font-size: 12.5px;
}
.mf-root .mf-ld-more .mf-full { grid-column: 1 / -1; }
.mf-root .mf-ld-more .mf-what { padding: 0; border-bottom: none; }
.mf-root .mf-ld-more .chk .mf-lbl { color: var(--mf-right); }
.mf-root .mf-ld-more .why .mf-lbl { color: var(--mf-err-ink); }

/* ---------- trace ---------- */
.mf-root .mf-tr { background: var(--mf-panel); border: 1.5px solid var(--mf-box); border-radius: 10px; padding: 12px 14px 14px; display: grid; gap: 10px; }
.mf-root .mf-tr-h { display: flex; align-items: center; gap: 10px; }
.mf-root .mf-tr-col { display: grid; gap: 6px; align-content: start; }
.mf-root .mf-tr-grid { display: grid; grid-template-columns: minmax(0, 1fr) 36px minmax(0, 1fr); align-items: start; }
.mf-root .mf-tr-fork { align-self: stretch; display: flex; justify-content: center; }
.mf-root .mf-tr-fork span { width: 0; border-left: 1.5px dashed var(--mf-box); }
.mf-root .mf-step { position: relative; padding: 6px 12px; border-radius: 8px; border: 1.5px solid var(--mf-box); background: var(--mf-panel); }
.mf-root .mf-step.shared { background: var(--mf-soft); }
.mf-root .mf-step.w { background: var(--mf-wrong-bg); }
.mf-root .mf-step.w .mf-math, .mf-root .mf-step.w .mf-text { color: var(--mf-wrong); }
.mf-root .mf-step.err { border: 2px solid var(--mf-err); background: var(--mf-err-bg); }
.mf-root .mf-step.err .mf-math, .mf-root .mf-step.err .mf-text { color: var(--mf-ink); }
.mf-root .mf-tr .mf-what { padding: 0; border-bottom: none; }
.mf-root .mf-step.r { border-color: color-mix(in srgb, var(--mf-right) 45%, var(--mf-box)); }
.mf-root .mf-step.res.w { border-style: dashed; }
.mf-root .mf-step.res.r { border: 2px solid var(--mf-right); }
.mf-root .mf-err-tag {
  position: absolute; top: -9px; right: 8px; padding: 0 6px; border-radius: 4px; background: var(--mf-err); color: #ffffff;
  font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 8.5px; font-weight: 700; line-height: 16px;
  letter-spacing: 0.12em; text-transform: uppercase;
}
.mf-root .mf-tr-why { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.mf-root .mf-tr-why.mf-one { grid-template-columns: 1fr; }
.mf-root .mf-box { padding: 8px 12px; border-radius: 8px; border: 1.5px solid var(--mf-box); background: var(--mf-soft); font-size: 12.5px; }
.mf-root .mf-box.why { border-left: 4px solid var(--mf-err); }
.mf-root .mf-box.why .mf-lbl { color: var(--mf-err-ink); }
.mf-root .mf-box.chk { border-left: 4px solid var(--mf-right); }
.mf-root .mf-box.chk .mf-lbl { color: var(--mf-right); }

@media (max-width: 680px) {
  .mf-root .mf-body { padding: 12px; }
  .mf-root .mf-sp-cols, .mf-root .mf-sp-foot, .mf-root .mf-tr-why, .mf-root .mf-ld-more { grid-template-columns: minmax(0, 1fr); }
  .mf-root .mf-sp-col.w { border-right: none; border-bottom: 1.5px solid var(--mf-box); }
  .mf-root .mf-sp-f + .mf-sp-f { border-left: none; border-top: 1px solid var(--mf-line); }
  .mf-root .mf-tr-grid { grid-template-columns: minmax(0, 1fr); row-gap: 10px; }
  .mf-root .mf-tr-fork { display: none; }
  .mf-root .mf-ld-hdr, .mf-root .mf-ld-row { grid-template-columns: minmax(0, 1fr) 24px; }
  .mf-root .mf-ld-hdr > div:nth-child(2) { display: none; }
  .mf-root .mf-ld-w { border-right: none; grid-column: 1; }
  .mf-root .mf-ld-r { grid-column: 1; grid-row: 2; }
  .mf-root .mf-ld-x { grid-column: 2; grid-row: 1 / span 2; }
}
`;

/* ------------------------------------------------------------------ */
/*  small parts                                                        */
/* ------------------------------------------------------------------ */

function R({ t }) {
  if (t == null || t === '') return null;
  if (typeof t !== 'string') return <>{t}</>;
  return <span className="mf-inline">{processContent(t)}</span>;
}

const arr = (x) => (x == null ? [] : Array.isArray(x) ? x : [x]);
const hasDetails = (m) => m.details != null && m.details !== '';

// a step is "maths" when nothing but punctuation is left outside its $…$ parts
const isMath = (s) =>
  typeof s === 'string' && s.includes('$') &&
  /^[\s.,;:]*$/.test(s.replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, ''));
const stepClass = (s) => (isMath(s) ? 'mf-math' : 'mf-text');

function Steps({ list }) {
  return list.map((s, k) => <div className={stepClass(s)} key={k}><R t={s} /></div>);
}

function What({ m }) {
  return m.what ? <div className="mf-what"><R t={m.what} /></div> : null;
}

const anchor = (m, opts) => (opts.anchorPrefix || '') + m.id;

function XBtn({ open, onClick, label, labels }) {
  return (
    <button type="button" className={'mf-xbtn' + (open ? ' mf-open' : '')} onClick={onClick} aria-expanded={open}>
      <span className="mf-chev" /><R t={open ? labels.hide : label} />
    </button>
  );
}

function Collapse({ open, children }) {
  return (
    <div className={'mf-coll' + (open ? ' mf-open' : '')}>
      <div className="mf-coll-in">{children}</div>
    </div>
  );
}

function Extra({ m, labels, open, onToggle, wrapClass, barClass }) {
  if (!hasDetails(m)) return null;
  const title = m.detailsTitle != null ? m.detailsTitle : labels.detailsTitle;
  return (
    <>
      <div className={barClass}>
        <XBtn open={open} onClick={onToggle} label={m.detailsLabel != null ? m.detailsLabel : labels.more} labels={labels} />
      </div>
      <Collapse open={open}>
        <div className={wrapClass}>
          <div className="mf-xbody">
            {title ? <div className="mf-xtitle"><R t={title} /></div> : null}
            {Array.isArray(m.details)
              ? m.details.map((d, i) => <div key={i} style={{ marginTop: i ? 5 : 0 }}><R t={d} /></div>)
              : <R t={m.details} />}
          </div>
        </div>
      </Collapse>
    </>
  );
}

function CardHead({ m, i, opts, className }) {
  return (
    <div className={className}>
      {opts.numbered && <span className="mf-num">{i + 1}</span>}
      <span className="mf-name"><R t={m.name} /></span>
      {m.link && <a className="mf-link" href={m.link.href}>{'→ '}<R t={m.link.label} /></a>}
    </div>
  );
}

function WhyCheck({ m, labels, className, itemClass }) {
  if (!m.why && !m.check) return null;
  const one = !(m.why && m.check);
  return (
    <div className={className + (one ? ' mf-one' : '')}>
      {m.why && <div className={itemClass + ' why'}><span className="mf-lbl"><R t={labels.why} /></span><R t={m.why} /></div>}
      {m.check && <div className={itemClass + ' chk'}><span className="mf-lbl"><R t={labels.check} /></span><R t={m.check} /></div>}
    </div>
  );
}

function useToggles() {
  const [open, setOpen] = useState({});
  return [open, (k) => setOpen((o) => ({ ...o, [k]: !o[k] }))];
}

/* ------------------------------------------------------------------ */
/*  split                                                              */
/* ------------------------------------------------------------------ */

function Split({ data, labels, opts }) {
  const [open, toggle] = useToggles();
  return data.mistakes.map((m, i) => (
    <div className={'mf-sp mf-anchor' + (opts.strikeWrong ? ' mf-strike' : '')} key={m.id} id={anchor(m, opts)}>
      <CardHead m={m} i={i} opts={opts} className="mf-sp-h" />
      <What m={m} />
      <div className="mf-sp-cols">
        <div className="mf-sp-col w">
          <span><span className="mf-tag w"><R t={labels.wrong} /></span></span>
          <Steps list={arr(m.wrong)} />
        </div>
        <div className="mf-sp-col r">
          <span><span className="mf-tag r"><R t={labels.right} /></span></span>
          <Steps list={arr(m.right != null ? m.right : m.truth)} />
        </div>
      </div>
      <WhyCheck m={m} labels={labels} className="mf-sp-foot" itemClass="mf-sp-f" />
      <Extra m={m} labels={labels} open={!!open[m.id]} onToggle={() => toggle(m.id)} wrapClass="mf-sp-x" barClass="mf-sp-xbar" />
    </div>
  ));
}

/* ------------------------------------------------------------------ */
/*  ledger                                                             */
/* ------------------------------------------------------------------ */

function Ledger({ data, labels, opts }) {
  const [open, toggle] = useToggles();
  return (
    <div className="mf-ld">
      <div className="mf-ld-hdr">
        <div><span className="mf-tag w"><R t={labels.notTrue} /></span></div>
        <div><span className="mf-tag r"><R t={labels.instead} /></span></div>
        <div />
      </div>
      {data.mistakes.map((m, i) => {
        const wrong = arr(m.wrong);
        const can = m.right != null || m.what || wrong.length > 1 || m.why || m.check || hasDetails(m);
        const o = !!open[m.id];
        const title = m.detailsTitle != null ? m.detailsTitle : labels.detailsTitle;
        return (
          <React.Fragment key={m.id}>
            <div
              id={anchor(m, opts)}
              className={'mf-ld-row mf-anchor' + (i === 0 ? ' mf-first' : '') + (can ? ' mf-can' : '') + (o ? ' mf-open' : '')}
              onClick={can ? () => toggle(m.id) : undefined}
              role={can ? 'button' : undefined}
              tabIndex={can ? 0 : undefined}
              aria-expanded={can ? o : undefined}
              onKeyDown={can ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(m.id); } } : undefined}
            >
              <div className="mf-ld-w"><span className="mf-math"><R t={wrong[0]} /></span></div>
              <div className="mf-ld-r">
                {m.truth && <span className="mf-math"><R t={m.truth} /></span>}
                <span className="mf-note"><R t={m.name} /></span>
              </div>
              <div className="mf-ld-x">{can ? <span /> : null}</div>
            </div>
            {can && (
              <Collapse open={o}>
                <div className="mf-ld-more">
                  {m.what && <div className="mf-full"><What m={m} /></div>}
                  {wrong.length > 1 && (
                    <div className="mf-full"><span className="mf-lbl"><R t={labels.wrongWorking} /></span><Steps list={wrong.slice(1)} /></div>
                  )}
                  {m.right != null && (
                    <div className="mf-full"><span className="mf-lbl"><R t={labels.rightWorking} /></span><Steps list={arr(m.right)} /></div>
                  )}
                  {m.why && <div className="why"><span className="mf-lbl"><R t={labels.why} /></span><R t={m.why} /></div>}
                  {m.check && <div className="chk"><span className="mf-lbl"><R t={labels.check} /></span><R t={m.check} /></div>}
                  {hasDetails(m) && (
                    <div className="mf-full">
                      {title ? <span className="mf-lbl"><R t={title} /></span> : null}
                      {Array.isArray(m.details) ? m.details.map((d, k) => <div key={k}><R t={d} /></div>) : <R t={m.details} />}
                    </div>
                  )}
                  {m.link && <div className="mf-full"><a className="mf-link" style={{ marginLeft: 0 }} href={m.link.href}>{'→ '}<R t={m.link.label} /></a></div>}
                </div>
              </Collapse>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  trace                                                              */
/* ------------------------------------------------------------------ */

function Trace({ data, labels, opts }) {
  const [open, toggle] = useToggles();
  return data.mistakes.map((m, i) => {
    const wrong = arr(m.wrong);
    const right = arr(m.right != null ? m.right : m.truth);
    const at = Math.max(0, Math.min(m.errorAt == null ? 1 : m.errorAt, wrong.length - 1));
    const shared = wrong.slice(0, at);
    const wTail = wrong.slice(at);
    const rTail = right.slice(Math.min(at, right.length));
    return (
      <div className="mf-tr mf-anchor" key={m.id} id={anchor(m, opts)}>
        <CardHead m={m} i={i} opts={opts} className="mf-tr-h" />
        <What m={m} />
        {shared.length > 0 && (
          <div className="mf-tr-col">
            <span className="mf-lbl"><R t={labels.start} /></span>
            {shared.map((s, k) => <div className="mf-step shared" key={k}><div className={stepClass(s)}><R t={s} /></div></div>)}
          </div>
        )}
        <div className="mf-tr-grid">
          <div className="mf-tr-col">
            <span><span className="mf-tag w"><R t={labels.wrongTurn} /></span></span>
            {wTail.map((s, k) => (
              <div key={k} className={'mf-step w' + (k === 0 ? ' err' : '') + (k === wTail.length - 1 && k > 0 ? ' res' : '')}>
                {k === 0 && <span className="mf-err-tag"><R t={labels.errorHere} /></span>}
                <div className={stepClass(s)}><R t={s} /></div>
              </div>
            ))}
          </div>
          <div className="mf-tr-fork" aria-hidden="true"><span /></div>
          <div className="mf-tr-col">
            <span><span className="mf-tag r"><R t={labels.rightPath} /></span></span>
            {rTail.map((s, k) => (
              <div key={k} className={'mf-step r' + (k === rTail.length - 1 ? ' res' : '')}><div className={stepClass(s)}><R t={s} /></div></div>
            ))}
          </div>
        </div>
        <WhyCheck m={m} labels={labels} className="mf-tr-why" itemClass="mf-box" />
        <Extra m={m} labels={labels} open={!!open[m.id]} onToggle={() => toggle(m.id)} wrapClass="" barClass="" />
      </div>
    );
  });
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

function pickLayout(data, opts) {
  const ms = data.mistakes || [];
  if (opts.ledger) return 'ledger';
  if (ms.length && ms.every((m) => !m.why && !m.check && arr(m.wrong).length === 1)) return 'ledger';
  return 'trace';
}

const LAYOUTS = { split: Split, ledger: Ledger, trace: Trace };

export default function MistakeFix({ data, variant = 'auto', theme, options }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const labels = { ...DEFAULT_LABELS, ...(data.labels || {}) };
  const opts = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const layout = LAYOUTS[variant] ? variant : pickLayout(data, opts);
  const View = LAYOUTS[layout];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className={'mf-root' + (opts.marks ? ' mf-marks' : '')} style={cssVars(t)}>
        <div className="mf-card">
          {data.header && (
            <div className="mf-head">
              {data.header.kicker && <div className="mf-kicker"><R t={data.header.kicker} /></div>}
              <h2 className="mf-title"><R t={data.header.title} /></h2>
              {data.header.lede && <div className="mf-lede"><R t={data.header.lede} /></div>}
            </div>
          )}
          <div className="mf-body">
            <View data={data} labels={labels} opts={opts} />
            {data.footnote && <div className="mf-foot"><R t={data.footnote} /></div>}
          </div>
        </div>
      </div>
    </>
  );
}
