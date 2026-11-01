/*
  PropertySheet.jsx

  A properties infographic: laws with a verdict (holds always / under a
  condition / fails), shown in the layout that matches the content's shape.

  ------------------------------------------------------------------
  LAYOUTS  (picked from the data; `variant` overrides)
  ------------------------------------------------------------------
  matrix  the same properties checked across several objects or
          operations                  -> data has `subjects` and `cells`
  sheet   properties sorted into categories
                                      -> at least one group has a `name`
  cards   an unordered collection     -> one unnamed group

  ------------------------------------------------------------------
  PROPS
  ------------------------------------------------------------------
  data     required, see below
  variant  'auto' (default) | 'sheet' | 'matrix' | 'cards'
  theme    partial theme, merged over DEFAULT_THEME (data.theme wins)
  options  partial options, merged over DEFAULT_OPTIONS (data.options wins)

  ------------------------------------------------------------------
  DATA
  ------------------------------------------------------------------
  {
    header?:   { kicker?, title, lede? },
    subjects?: [ { id, label } ],        // matrix columns
    groups:    [ { name?, note?, properties: Property[] } ],
    footnote?: string,                   // line under the layout
    labels?:   { ... },                  // merged over DEFAULT_LABELS
    verdicts?: { [key]: Verdict },       // merged over DEFAULT_VERDICTS
    theme?:    { ... },                  // merged over DEFAULT_THEME
    options?:  { ... }                   // merged over DEFAULT_OPTIONS
  }

  Property = {
    id:         string,                  // required, unique
    name:       string,
    statement?: string,                  // the law (sheet, cards)
    verdict?:   string,                  // a key of verdicts; default 'holds'
    condition?: string,                  // shown under the verdict
    note?:      string,                  // one line of meaning
    tags?:      string[],                // enables tag chips
    link?:      { label, href },         // cards
    cells?:     { [subjectId]: Cell },   // matrix
    ...Expandable
  }

  Cell = { verdict: string, text?: string, ...Expandable }

  Expandable = {
    details?:      string | string[] | ReactNode,   // string[] = paragraphs
    detailsLabel?: string,               // toggle text   (default labels.more)
    detailsTitle?: string                // heading inside ('' hides it;
                                         //  default: property name in sheet,
                                         //  "Property · Subject" in matrix,
                                         //  labels.detailsTitle in cards)
  }

  Verdict = {
    label:  string,
    color:  string,                      // text + bar colour
    bg:     string,                      // chip background
    mark:   'check' | 'half' | 'cross' | 'dot' | 'none'
  }

  All text goes through processContent ($math$, **bold**, links).
*/

'use client';

import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ------------------------------------------------------------------ */
/*  defaults                                                           */
/* ------------------------------------------------------------------ */

export const DEFAULT_LABELS = {
  property:     'Property',
  notCovered:   'not covered',
  more:         'Details',
  hide:         'Hide',
  detailsTitle: 'Details',
  all:          'All',
  clear:        'Clear',
  search:       'Search properties',
  noMatch:      'No property matches these filters.',
  filterHint:   'Click to filter by verdict',
  focusHint:    'Click to focus',
};

export const DEFAULT_VERDICTS = {
  holds:       { label: 'Always',      color: '#2563eb', bg: '#dbeafe', mark: 'check' },
  conditional: { label: 'Conditional', color: '#a16207', bg: '#fef3c7', mark: 'half' },
  fails:       { label: 'Fails',       color: '#334155', bg: '#e2e8f0', mark: 'cross' },
};

export const DEFAULT_THEME = {
  ink:        '#1e293b',
  title:      '#1e3a8a',
  muted:      '#64748b',
  line:       '#e2e8f0',
  box:        '#c7cedb',
  panel:      '#ffffff',
  soft:       '#f8fafc',
  headBg:     '#eff6ff',
  accent:     '#2563eb',
  accentSoft: '#dbeafe',
};

export const DEFAULT_OPTIONS = {
  verdictFilter: true,     // clickable legend
  groupFilter:   true,     // category chips (sheet, 2+ named groups)
  tagFilter:     true,     // tag chips (when properties have tags)
  focus:         true,     // matrix row / column focus
  search:        'auto',   // true | false | 'auto'
  searchFrom:    12,       // 'auto' shows search from this many properties
  legend:        true,     // verdict legend in the header
};

const cssVars = (t) => ({
  '--ps-ink':         t.ink,
  '--ps-title':       t.title,
  '--ps-muted':       t.muted,
  '--ps-line':        t.line,
  '--ps-box':         t.box,
  '--ps-panel':       t.panel,
  '--ps-soft':        t.soft,
  '--ps-head-bg':     t.headBg,
  '--ps-accent':      t.accent,
  '--ps-accent-soft': t.accentSoft,
});

const verdictVars = (v) => (v ? { '--vc': v.color, '--vbg': v.bg } : {});

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.ps-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--ps-ink); line-height: 1.45;
}
.ps-root *, .ps-root *::before, .ps-root *::after { box-sizing: border-box; }
.ps-root .katex { text-transform: none; }
.ps-root .ps-inline br { display: none; }
.ps-root .ps-inline p { margin: 0; display: inline; }

.ps-root .ps-card { background: var(--ps-panel); border: 1.5px solid var(--ps-box); border-radius: 12px; overflow: hidden; }
.ps-root .ps-head {
  display: flex; gap: 16px; align-items: flex-end; flex-wrap: wrap;
  padding: 14px 20px 12px; border-bottom: 1.5px solid var(--ps-box);
}
.ps-root .ps-head-main { flex: 1 1 300px; min-width: 0; }
.ps-root .ps-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ps-accent);
}
.ps-root .ps-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--ps-title); letter-spacing: -0.01em; }
.ps-root .ps-lede { margin-top: 3px; font-size: 12.5px; color: var(--ps-muted); }
.ps-root .ps-body { padding: 16px 20px 18px; background: var(--ps-soft); display: grid; gap: 14px; }

/* ---------- verdict chip ---------- */
.ps-root .ps-v {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 1px 8px 1px 6px; border-radius: 999px;
  border: 1.5px solid transparent;
  background: var(--vbg); color: var(--vc);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; white-space: nowrap;
}
.ps-root .ps-mark { flex: none; width: 9px; height: 9px; position: relative; }
.ps-root .ps-mark.check::before {
  content: ''; position: absolute; left: 2px; top: 0; width: 3.5px; height: 6.5px;
  border: solid currentColor; border-width: 0 1.8px 1.8px 0; transform: rotate(45deg);
}
.ps-root .ps-mark.cross::before, .ps-root .ps-mark.cross::after {
  content: ''; position: absolute; left: 3.6px; top: 0; width: 1.8px; height: 9px; background: currentColor;
}
.ps-root .ps-mark.cross::before { transform: rotate(45deg); }
.ps-root .ps-mark.cross::after  { transform: rotate(-45deg); }
.ps-root .ps-mark.half { border-radius: 50%; border: 1.5px solid currentColor; background: linear-gradient(90deg, currentColor 50%, transparent 50%); width: 8px; height: 8px; }
.ps-root .ps-mark.dot  { border-radius: 50%; background: currentColor; width: 7px; height: 7px; }
.ps-root .ps-cond { font-size: 12px; font-weight: 600; color: var(--vc); }

/* ---------- legend = verdict filter ---------- */
.ps-root .ps-legend { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.ps-root .ps-lg { border: none; background: none; padding: 0; border-radius: 999px; transition: opacity 0.15s; }
.ps-root button.ps-lg { cursor: pointer; }
.ps-root button.ps-lg:hover .ps-v { border-color: currentColor; }
.ps-root .ps-lg.ps-on .ps-v { border-color: currentColor; box-shadow: 0 0 0 2px var(--ps-panel), 0 0 0 3.5px currentColor; }
.ps-root .ps-lg.ps-off { opacity: 0.4; }

/* ---------- toolbar ---------- */
.ps-root .ps-tools { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 14px; }
.ps-root .ps-tools-r { margin-left: auto; display: flex; align-items: center; gap: 8px; }
.ps-root .ps-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.ps-root .ps-chip {
  padding: 3px 11px; border-radius: 999px; cursor: pointer;
  background: var(--ps-panel); border: 1.5px solid var(--ps-box);
  font: 600 11.5px 'Inter', system-ui, sans-serif; color: var(--ps-muted);
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.ps-root .ps-chip:hover { border-color: var(--ps-accent); color: var(--ps-accent); }
.ps-root .ps-chip.ps-on { background: var(--ps-title); border-color: var(--ps-title); color: #ffffff; }
.ps-root .ps-search {
  width: 210px; padding: 5px 10px; border-radius: 8px;
  border: 1.5px solid var(--ps-box); background: var(--ps-panel);
  font: 500 12.5px 'Inter', system-ui, sans-serif; color: var(--ps-ink);
}
.ps-root .ps-search:focus { outline: none; border-color: var(--ps-accent); box-shadow: 0 0 0 3px var(--ps-accent-soft); }
.ps-root .ps-count { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10.5px; font-weight: 600; color: var(--ps-muted); }
.ps-root .ps-clear {
  padding: 3px 10px; border-radius: 999px; cursor: pointer;
  background: none; border: 1.5px solid var(--ps-box);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ps-muted);
}
.ps-root .ps-clear:hover { border-color: var(--ps-accent); color: var(--ps-accent); }
.ps-root .ps-none {
  padding: 18px; text-align: center; font-size: 13px; color: var(--ps-muted);
  background: var(--ps-panel); border: 1.5px dashed var(--ps-box); border-radius: 10px;
}

/* ---------- expandable parts ---------- */
.ps-root .ps-xbtn {
  display: inline-flex; align-items: center; gap: 6px; cursor: pointer;
  padding: 2px 8px 2px 6px; border-radius: 999px;
  background: var(--ps-panel); border: 1.5px solid var(--ps-accent-soft);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ps-accent);
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.ps-root .ps-xbtn:hover { border-color: var(--ps-accent); background: var(--ps-head-bg); }
.ps-root .ps-xbtn.ps-open { background: var(--ps-accent); border-color: var(--ps-accent); color: #ffffff; }
.ps-root .ps-chev {
  width: 0; height: 0; border-left: 4px solid transparent; border-right: 4px solid transparent;
  border-top: 5px solid currentColor; transition: transform 0.18s;
}
.ps-root .ps-xbtn.ps-open .ps-chev { transform: rotate(180deg); }
.ps-root .ps-coll { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.22s ease; }
.ps-root .ps-coll.ps-open { grid-template-rows: 1fr; }
.ps-root .ps-coll-in { overflow: hidden; min-height: 0; }
.ps-root .ps-xbody { font-size: 12.5px; line-height: 1.55; }
.ps-root .ps-xtitle {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--ps-accent); margin-bottom: 4px;
}
.ps-root .ps-panel-x {
  padding: 10px 12px; background: var(--ps-soft);
  border: 1.5px solid var(--ps-box); border-left: 4px solid var(--ps-accent); border-radius: 8px;
}

/* ---------- names ---------- */
.ps-root .ps-name { font-size: 13px; font-weight: 700; color: var(--ps-title); }
.ps-root .ps-name small { display: block; font-size: 11.5px; font-weight: 400; color: var(--ps-muted); margin-top: 1px; }
.ps-root .ps-stmt { font-family: 'STIX Two Text', 'Times New Roman', serif; font-size: 15px; }

/* ---------- sheet ---------- */
.ps-root .ps-group { background: var(--ps-panel); border: 1.5px solid var(--ps-box); border-radius: 10px; overflow: hidden; }
.ps-root .ps-group-h {
  display: flex; align-items: baseline; gap: 10px;
  padding: 7px 14px; background: var(--ps-head-bg); border-bottom: 1.5px solid var(--ps-box);
}
.ps-root .ps-group-n { font-size: 12.5px; font-weight: 700; color: var(--ps-title); }
.ps-root .ps-group-note {
  margin-left: auto; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10px; color: var(--ps-muted);
}
.ps-root .ps-rowwrap { border-top: 1px solid var(--ps-line); }
.ps-root .ps-rowwrap:first-of-type { border-top: none; }
.ps-root .ps-row {
  display: grid; grid-template-columns: 4px 170px minmax(0, 1fr) auto;
  align-items: center; gap: 14px; padding: 8px 14px 8px 0;
}
.ps-root .ps-row-bar { align-self: stretch; background: var(--vc); }
.ps-root .ps-side { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; }
.ps-root .ps-rowwrap .ps-panel-x { margin: 0 14px 10px 18px; }

/* ---------- matrix ---------- */
.ps-root .ps-mwrap { overflow-x: auto; background: var(--ps-panel); border: 1.5px solid var(--ps-box); border-radius: 10px; }
.ps-root .ps-m { width: 100%; border-collapse: collapse; }
.ps-root .ps-m th { padding: 9px 12px; background: var(--ps-head-bg); border-bottom: 1.5px solid var(--ps-box); }
.ps-root .ps-m th.ps-m-op {
  font-family: 'STIX Two Text', 'Times New Roman', serif; font-size: 20px; font-weight: 600;
  color: var(--ps-title); text-align: center; min-width: 120px;
}
.ps-root .ps-m th.ps-m-op.ps-click { cursor: pointer; }
.ps-root .ps-m th.ps-m-op.ps-click:hover { background: var(--ps-accent-soft); }
.ps-root .ps-m th.ps-m-corner {
  text-align: left; font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ps-muted);
}
.ps-root .ps-m td { padding: 9px 12px; border-top: 1px solid var(--ps-line); vertical-align: middle; }
.ps-root .ps-m td + td, .ps-root .ps-m th + th { border-left: 1px solid var(--ps-line); }
.ps-root .ps-m tbody tr:first-child td { border-top: none; }
.ps-root .ps-m td, .ps-root .ps-m th { transition: opacity 0.15s, background 0.15s; }
.ps-root .ps-m td.ps-m-prop { min-width: 170px; }
.ps-root .ps-m td.ps-hasv { background: color-mix(in srgb, var(--vbg) 22%, var(--ps-panel)); }
.ps-root .ps-cell { display: flex; flex-direction: column; align-items: center; gap: 4px; text-align: center; }
.ps-root .ps-cell-t { font-family: 'STIX Two Text', 'Times New Roman', serif; font-size: 13.5px; }
.ps-root .ps-cell-na {
  text-align: center; color: #94a3b8; font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
}
.ps-root .ps-m .ps-dim { opacity: 0.25; }
.ps-root .ps-m th.ps-focus { background: var(--ps-accent-soft); box-shadow: inset 0 -3px 0 var(--ps-accent); }
.ps-root .ps-m td.ps-focus { background: color-mix(in srgb, var(--ps-head-bg) 60%, var(--ps-panel)); }
.ps-root .ps-m td.ps-m-prop.ps-focus { box-shadow: inset 3px 0 0 var(--ps-accent); }
.ps-root .ps-m td.ps-cell-on { box-shadow: inset 0 0 0 2px var(--ps-accent); }
.ps-root .ps-name-btn { border: none; background: none; padding: 0; text-align: left; font-family: inherit; }
.ps-root .ps-name-btn.ps-click { cursor: pointer; }
.ps-root .ps-name-btn.ps-click:hover { color: var(--ps-accent); text-decoration: underline; text-underline-offset: 3px; }
.ps-root .ps-m-x { margin-top: 6px; }
.ps-root .ps-m tr.ps-m-xrow td { padding: 0; border-top: none; }
.ps-root .ps-m tr.ps-m-xrow .ps-panel-x { margin: 0 12px 10px; }
.ps-root .ps-foot { font-size: 12px; color: var(--ps-muted); }
.ps-root .ps-foot strong { color: var(--ps-ink); }

/* ---------- cards ---------- */
.ps-root .ps-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 12px; }
.ps-root .ps-c {
  display: flex; flex-direction: column; gap: 6px;
  background: var(--ps-panel); border: 1.5px solid var(--ps-box); border-top: 4px solid var(--vc);
  border-radius: 10px; padding: 10px 13px 11px;
}
.ps-root .ps-c.ps-xopen { border-color: color-mix(in srgb, var(--ps-accent) 45%, var(--ps-box)); border-top-color: var(--vc); }
.ps-root .ps-c-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.ps-root .ps-c .ps-name { font-size: 13.5px; }
.ps-root .ps-c .ps-stmt {
  font-size: 15.5px; text-align: center; padding: 6px 8px;
  background: var(--ps-soft); border: 1px solid var(--ps-line); border-radius: 6px;
}
.ps-root .ps-c-note { font-size: 12px; color: var(--ps-muted); }
.ps-root .ps-c-tags { display: flex; flex-wrap: wrap; gap: 4px; }
.ps-root .ps-tag {
  padding: 0 7px; border-radius: 4px; background: var(--ps-head-bg); color: var(--ps-accent);
  font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10px; font-weight: 600; letter-spacing: 0.04em;
}
.ps-root .ps-c .ps-xbody { margin-top: 2px; padding: 8px 10px; background: var(--ps-soft); border: 1px dashed var(--ps-box); border-radius: 6px; }
.ps-root .ps-c-foot { margin-top: auto; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding-top: 2px; }
.ps-root .ps-link {
  font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10px; font-weight: 600;
  color: var(--ps-accent); text-decoration: none;
}
.ps-root .ps-link:hover { text-decoration: underline; }

@media (max-width: 640px) {
  .ps-root .ps-body { padding: 12px; }
  .ps-root .ps-row { grid-template-columns: 4px minmax(0, 1fr); row-gap: 4px; }
  .ps-root .ps-row > .ps-stmt, .ps-root .ps-row > .ps-side { grid-column: 2; }
  .ps-root .ps-side { align-items: flex-start; }
  .ps-root .ps-tools-r { margin-left: 0; }
  .ps-root .ps-search { width: 100%; }
}

/* downloads (2026-10-30): the PNG/PDF generator marks the root with
   data-diagram-export; reader controls stay out of the file */
.ps-root[data-diagram-export] .ps-tools,
.ps-root[data-diagram-export] .ps-xbtn { display: none !important; }
/* the generator sets every element static; the check and cross marks are
   drawn against .ps-mark, so it keeps its position */
.ps-root .ps-mark { position: relative !important; }
`;

/* ------------------------------------------------------------------ */
/*  small parts                                                        */
/* ------------------------------------------------------------------ */

function R({ t }) {
  if (t == null || t === '') return null;
  if (typeof t !== 'string') return <>{t}</>;
  return <span className="ps-inline">{processContent(t)}</span>;
}

function VerdictChip({ vkey, verdicts }) {
  const v = verdicts[vkey] || verdicts.holds;
  return (
    <span className="ps-v" style={verdictVars(v)}>
      {v.mark && v.mark !== 'none' && <span className={'ps-mark ' + v.mark} aria-hidden="true" />}
      <R t={v.label} />
    </span>
  );
}

const hasDetails = (x) => Boolean(x) && x.details != null && x.details !== '';
const toggleText = (item, labels) => (item.detailsLabel != null ? item.detailsLabel : labels.more);
const titleText = (item, fallback) => (item.detailsTitle != null ? item.detailsTitle : fallback);

function DetailsBody({ value }) {
  if (Array.isArray(value)) {
    return value.map((v, i) => <div key={i} style={{ marginTop: i ? 5 : 0 }}><R t={v} /></div>);
  }
  return <R t={value} />;
}

function XBtn({ open, onClick, label, labels }) {
  return (
    <button type="button" className={'ps-xbtn' + (open ? ' ps-open' : '')} onClick={onClick} aria-expanded={open}>
      <span className="ps-chev" /><R t={open ? labels.hide : label} />
    </button>
  );
}

function Collapse({ open, children }) {
  return (
    <div className={'ps-coll' + (open ? ' ps-open' : '')}>
      <div className="ps-coll-in">{children}</div>
    </div>
  );
}

function XBody({ item, title, className }) {
  return (
    <div className={'ps-xbody' + (className ? ' ' + className : '')}>
      {title ? <div className="ps-xtitle"><R t={title} /></div> : null}
      <DetailsBody value={item.details} />
    </div>
  );
}

function useToggles() {
  const [open, setOpen] = useState({});
  return [open, (k) => setOpen((o) => ({ ...o, [k]: !o[k] }))];
}

/* ------------------------------------------------------------------ */
/*  filtering                                                          */
/* ------------------------------------------------------------------ */

const plainText = (s) => (typeof s === 'string' ? s.replace(/\$|\\|[{}]/g, ' ').toLowerCase() : '');

const EMPTY_FILTER = () => ({ verdicts: new Set(), group: null, tags: new Set(), query: '', col: null, row: null });

function matchesQuery(p, query) {
  if (!query) return true;
  const hay = [p.name, p.statement, p.note, p.condition].map(plainText).join(' ');
  return hay.includes(query.toLowerCase());
}

function propertyVisible(p, f) {
  if (f.verdicts.size && !f.verdicts.has(p.verdict || 'holds')) return false;
  if (f.tags.size && !(p.tags || []).some((t) => f.tags.has(t))) return false;
  return matchesQuery(p, f.query);
}

function Chips({ items, isOn, onToggle, allLabel, allOn, onAll }) {
  return (
    <div className="ps-chips">
      {allLabel != null && (
        <button type="button" className={'ps-chip' + (allOn ? ' ps-on' : '')} onClick={onAll}><R t={allLabel} /></button>
      )}
      {items.map((it) => (
        <button key={it.key} type="button" className={'ps-chip' + (isOn(it.key) ? ' ps-on' : '')} onClick={() => onToggle(it.key)}>
          <R t={it.label} />
        </button>
      ))}
    </div>
  );
}

function Legend({ used, verdicts, f, set, labels, clickable }) {
  return (
    <div className="ps-legend" title={clickable ? labels.filterHint : undefined}>
      {Object.keys(verdicts).filter((k) => used.has(k)).map((k) => {
        const on = f.verdicts.has(k);
        const off = f.verdicts.size > 0 && !on;
        if (!clickable) return <span key={k} className="ps-lg"><VerdictChip vkey={k} verdicts={verdicts} /></span>;
        return (
          <button
            key={k}
            type="button"
            className={'ps-lg' + (on ? ' ps-on' : '') + (off ? ' ps-off' : '')}
            aria-pressed={on}
            onClick={() => {
              const n = new Set(f.verdicts);
              if (n.has(k)) n.delete(k); else n.add(k);
              set({ verdicts: n });
            }}
          >
            <VerdictChip vkey={k} verdicts={verdicts} />
          </button>
        );
      })}
    </div>
  );
}

function Toolbar({ data, layout, f, set, labels, opts, showSearch, shown, total }) {
  const named = data.groups.filter((g) => g.name);
  const tags = [...new Set(data.groups.flatMap((g) => g.properties.flatMap((p) => p.tags || [])))];
  const showGroups = opts.groupFilter && layout === 'sheet' && named.length > 1;
  const showTags = opts.tagFilter && tags.length > 0;
  const active = f.verdicts.size || f.group || f.tags.size || f.query || f.col || f.row;
  if (!showGroups && !showTags && !showSearch && !active) return null;

  return (
    <div className="ps-tools">
      {showGroups && (
        <Chips
          items={named.map((g) => ({ key: g.name, label: g.name }))}
          isOn={(k) => f.group === k}
          onToggle={(k) => set({ group: f.group === k ? null : k })}
          allLabel={labels.all}
          allOn={!f.group}
          onAll={() => set({ group: null })}
        />
      )}
      {showTags && (
        <Chips
          items={tags.map((t) => ({ key: t, label: t }))}
          isOn={(k) => f.tags.has(k)}
          onToggle={(k) => {
            const n = new Set(f.tags);
            if (n.has(k)) n.delete(k); else n.add(k);
            set({ tags: n });
          }}
        />
      )}
      <div className="ps-tools-r">
        {showSearch && (
          <input
            className="ps-search"
            type="search"
            value={f.query}
            placeholder={typeof labels.search === 'string' ? labels.search : undefined}
            aria-label={typeof labels.search === 'string' ? labels.search : undefined}
            onChange={(e) => set({ query: e.target.value })}
          />
        )}
        {active ? (
          <>
            {total != null && <span className="ps-count">{shown} / {total}</span>}
            <button type="button" className="ps-clear" onClick={() => set(null)}><R t={labels.clear} /></button>
          </>
        ) : null}
      </div>
    </div>
  );
}

const NoMatch = ({ labels }) => <div className="ps-none"><R t={labels.noMatch} /></div>;

/* ------------------------------------------------------------------ */
/*  sheet                                                              */
/* ------------------------------------------------------------------ */

function Sheet({ data, labels, verdicts, f }) {
  const [open, toggle] = useToggles();
  const groups = data.groups
    .filter((g) => !f.group || g.name === f.group)
    .map((g) => ({ ...g, properties: g.properties.filter((p) => propertyVisible(p, f)) }))
    .filter((g) => g.properties.length);
  if (!groups.length) return <NoMatch labels={labels} />;

  return groups.map((g, gi) => (
    <div className="ps-group" key={gi}>
      {g.name && (
        <div className="ps-group-h">
          <span className="ps-group-n"><R t={g.name} /></span>
          {g.note && <span className="ps-group-note"><R t={g.note} /></span>}
        </div>
      )}
      {g.properties.map((p) => {
        const v = verdicts[p.verdict || 'holds'] || verdicts.holds;
        const has = hasDetails(p);
        const o = has && !!open[p.id];
        return (
          <div className="ps-rowwrap" key={p.id} style={verdictVars(v)}>
            <div className="ps-row">
              <span className="ps-row-bar" />
              <div className="ps-name"><R t={p.name} />{p.note && <small><R t={p.note} /></small>}</div>
              <div className="ps-stmt"><R t={p.statement} /></div>
              <div className="ps-side">
                <VerdictChip vkey={p.verdict || 'holds'} verdicts={verdicts} />
                {p.condition && <span className="ps-cond"><R t={p.condition} /></span>}
                {has && <XBtn open={o} onClick={() => toggle(p.id)} label={toggleText(p, labels)} labels={labels} />}
              </div>
            </div>
            {has && (
              <Collapse open={o}>
                <XBody item={p} title={titleText(p, p.name)} className="ps-panel-x" />
              </Collapse>
            )}
          </div>
        );
      })}
    </div>
  ));
}

/* ------------------------------------------------------------------ */
/*  matrix                                                             */
/* ------------------------------------------------------------------ */

function Matrix({ data, labels, verdicts, f, set, opts }) {
  const rows = data.groups.flatMap((g) => g.properties).filter((p) => matchesQuery(p, f.query));
  const [open, setOpen] = useState({});                 // rowId -> 'row' | subjectId
  const toggle = (rowId, key) => setOpen((o) => ({ ...o, [rowId]: o[rowId] === key ? null : key }));
  const subjectLabel = (id) => (data.subjects.find((s) => s.id === id) || {}).label;
  const cols = data.subjects.length + 1;

  if (!rows.length) return <NoMatch labels={labels} />;

  const cellDim = (p, sId, c) =>
    (f.col && f.col !== sId) ||
    (f.row && f.row !== p.id) ||
    (f.verdicts.size > 0 && (!c || !f.verdicts.has(c.verdict)));

  return (
    <>
      <div className="ps-mwrap">
        <table className="ps-m">
          <thead>
            <tr>
              <th className="ps-m-corner"><R t={labels.property} /></th>
              {data.subjects.map((s) => (
                <th
                  key={s.id}
                  className={'ps-m-op' + (opts.focus ? ' ps-click' : '') + (f.col === s.id ? ' ps-focus' : '') + (f.col && f.col !== s.id ? ' ps-dim' : '')}
                  onClick={opts.focus ? () => set({ col: f.col === s.id ? null : s.id, row: null }) : undefined}
                  title={opts.focus && typeof labels.focusHint === 'string' ? labels.focusHint : undefined}
                >
                  <R t={s.label} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => {
              const key = open[p.id];
              const item = key === 'row' ? p : key ? (p.cells || {})[key] : null;
              return (
                <React.Fragment key={p.id}>
                  <tr>
                    <td className={'ps-m-prop' + (f.row === p.id ? ' ps-focus' : '') + (f.row && f.row !== p.id ? ' ps-dim' : '')}>
                      <button
                        type="button"
                        className={'ps-name ps-name-btn' + (opts.focus ? ' ps-click' : '')}
                        onClick={opts.focus ? () => set({ row: f.row === p.id ? null : p.id, col: null }) : undefined}
                        title={opts.focus && typeof labels.focusHint === 'string' ? labels.focusHint : undefined}
                      >
                        <R t={p.name} />{p.note && <small><R t={p.note} /></small>}
                      </button>
                      {hasDetails(p) && (
                        <div className="ps-m-x">
                          <XBtn open={key === 'row'} onClick={() => toggle(p.id, 'row')} label={toggleText(p, labels)} labels={labels} />
                        </div>
                      )}
                    </td>
                    {data.subjects.map((s) => {
                      const c = (p.cells || {})[s.id];
                      const dim = cellDim(p, s.id, c);
                      const focus = f.col === s.id || f.row === p.id;
                      if (!c) {
                        return (
                          <td key={s.id} className={(dim ? 'ps-dim' : '') + (focus ? ' ps-focus' : '')}>
                            <div className="ps-cell-na"><R t={labels.notCovered} /></div>
                          </td>
                        );
                      }
                      const v = verdicts[c.verdict] || verdicts.holds;
                      const on = key === s.id;
                      return (
                        <td
                          key={s.id}
                          style={verdictVars(v)}
                          className={'ps-hasv' + (on ? ' ps-cell-on' : '') + (dim ? ' ps-dim' : '') + (focus ? ' ps-focus' : '')}
                        >
                          <div className="ps-cell">
                            <VerdictChip vkey={c.verdict} verdicts={verdicts} />
                            {c.text && <span className="ps-cell-t"><R t={c.text} /></span>}
                            {hasDetails(c) && (
                              <XBtn open={on} onClick={() => toggle(p.id, s.id)} label={toggleText(c, labels)} labels={labels} />
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="ps-m-xrow">
                    <td colSpan={cols}>
                      <Collapse open={!!item}>
                        {item && (
                          <XBody
                            item={item}
                            className="ps-panel-x"
                            title={titleText(item, key === 'row' ? p.name : `${p.name} · ${subjectLabel(key) || ''}`)}
                          />
                        )}
                      </Collapse>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  cards                                                              */
/* ------------------------------------------------------------------ */

function Cards({ data, labels, verdicts, f }) {
  const [open, toggle] = useToggles();
  const props = data.groups.flatMap((g) => g.properties).filter((p) => propertyVisible(p, f));
  if (!props.length) return <NoMatch labels={labels} />;

  return (
    <div className="ps-cards">
      {props.map((p) => {
        const v = verdicts[p.verdict || 'holds'] || verdicts.holds;
        const has = hasDetails(p);
        const o = has && !!open[p.id];
        return (
          <div className={'ps-c' + (o ? ' ps-xopen' : '')} key={p.id} style={verdictVars(v)}>
            <div className="ps-c-top">
              <span className="ps-name"><R t={p.name} /></span>
              <VerdictChip vkey={p.verdict || 'holds'} verdicts={verdicts} />
            </div>
            {p.statement && <div className="ps-stmt"><R t={p.statement} /></div>}
            {p.condition && <span className="ps-cond"><R t={p.condition} /></span>}
            {p.note && <div className="ps-c-note"><R t={p.note} /></div>}
            {p.tags && p.tags.length > 0 && (
              <div className="ps-c-tags">{p.tags.map((t) => <span key={t} className="ps-tag"><R t={t} /></span>)}</div>
            )}
            {has && (
              <Collapse open={o}>
                <XBody item={p} title={titleText(p, labels.detailsTitle)} />
              </Collapse>
            )}
            {(has || p.link) && (
              <div className="ps-c-foot">
                {has ? <XBtn open={o} onClick={() => toggle(p.id)} label={toggleText(p, labels)} labels={labels} /> : <span />}
                {p.link && <a className="ps-link" href={p.link.href}>{'→ '}<R t={p.link.label} /></a>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

function pickLayout(data) {
  const hasCells = Array.isArray(data.subjects) && data.subjects.length > 0 &&
    data.groups.some((g) => g.properties.some((p) => p.cells && Object.keys(p.cells).length));
  if (hasCells) return 'matrix';
  if (data.groups.some((g) => g.name)) return 'sheet';
  return 'cards';
}

const LAYOUTS = { sheet: Sheet, matrix: Matrix, cards: Cards };

export default function PropertySheet({ data, variant = 'auto', theme, options }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const labels = { ...DEFAULT_LABELS, ...(data.labels || {}) };
  const opts = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const verdicts = { ...DEFAULT_VERDICTS };
  Object.entries(data.verdicts || {}).forEach(([k, v]) => { verdicts[k] = { ...(DEFAULT_VERDICTS[k] || DEFAULT_VERDICTS.holds), ...v }; });

  const layout = LAYOUTS[variant] ? variant : pickLayout(data);
  const View = LAYOUTS[layout];

  const [f, setF] = useState(EMPTY_FILTER);
  const set = (patch) => setF((old) => (patch ? { ...old, ...patch } : EMPTY_FILTER()));

  const all = data.groups.flatMap((g) => g.properties);
  const used = new Set();
  all.forEach((p) => {
    if (layout === 'matrix') Object.values(p.cells || {}).forEach((c) => used.add(c.verdict));
    else used.add(p.verdict || 'holds');
  });

  const showSearch = opts.search === true || (opts.search === 'auto' && all.length >= opts.searchFrom);
  const shown = layout === 'matrix'
    ? null
    : all.filter((p) => (!f.group || data.groups.some((g) => g.name === f.group && g.properties.includes(p))) && propertyVisible(p, f)).length;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="ps-root" style={cssVars(t)}>
        <div className="ps-card">
          {(data.header || opts.legend) && (
            <div className="ps-head">
              <div className="ps-head-main">
                {data.header && data.header.kicker && <div className="ps-kicker"><R t={data.header.kicker} /></div>}
                {data.header && <h2 className="ps-title"><R t={data.header.title} /></h2>}
                {data.header && data.header.lede && <div className="ps-lede"><R t={data.header.lede} /></div>}
              </div>
              {opts.legend && (
                <Legend used={used} verdicts={verdicts} f={f} set={set} labels={labels} clickable={opts.verdictFilter} />
              )}
            </div>
          )}
          <div className="ps-body">
            <Toolbar
              data={data}
              layout={layout}
              f={f}
              set={set}
              labels={labels}
              opts={opts}
              showSearch={showSearch}
              shown={shown}
              total={layout === 'matrix' ? null : all.length}
            />
            <View data={data} labels={labels} verdicts={verdicts} f={f} set={set} opts={opts} />
            {data.footnote && <div className="ps-foot"><R t={data.footnote} /></div>}
          </div>
        </div>
      </div>
    </>
  );
}
