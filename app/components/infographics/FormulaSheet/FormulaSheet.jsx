/*
  FormulaSheet.jsx

  A formula reference for a topic. Four variants:
    card     one row per formula: name, formula, what it does, example
    tiles    one tile per formula, its restriction as a badge
    grouped  formulas by family, in pairs; filter by family
    paired   the same operations on two axes, side by side

  Any row, tile, formula or cell can carry an expandable part (details).
  Prose inside the cards: card row `sub` (under the name), tile `text` (under the formula),
  grouped family `sub` (under the family header) and grouped formula `text` (under the formula).
  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['card', 'tiles', 'grouped', 'paired'];

export const DEFAULT_LABELS = {
  more: 'More',
  hide: 'Hide',
  all: 'All',
  count: '{n} formulas',
  countOne: '{n} formula',
  general: 'General form'
};

export const DEFAULT_THEME = {
  ink: '#1e293b',
  title: '#1e3a8a',
  muted: '#64748b',
  line: '#e2e8f0',
  box: '#c7cedb',
  panel: '#ffffff',
  soft: '#f8fafc',
  headBg: '#eff6ff',
  navy: '#1e3a8a',
  blue: '#2563eb',
  blueSoft: '#dbeafe',
  gold: '#ca8a04',
  goldBg: '#fef3c7',
  goldInk: '#a16207',
  slate: '#475569',
  slateBg: '#f1f5f9'
};

export const DEFAULT_OPTIONS = {
  groupFilter: true,
  counts: true,
  onePerPair: true,
  transformArrow: '\u2194'
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--fs-ink': th.ink, '--fs-title': th.title, '--fs-muted': th.muted, '--fs-line': th.line, '--fs-box': th.box,
  '--fs-panel': th.panel, '--fs-soft': th.soft, '--fs-head': th.headBg, '--fs-navy': th.navy,
  '--fs-blue': th.blue, '--fs-blue-soft': th.blueSoft, '--fs-gold': th.gold, '--fs-gold-bg': th.goldBg,
  '--fs-gold-ink': th.goldInk, '--fs-slate': th.slate, '--fs-slate-bg': th.slateBg
});

const CSS = `
.fs-root {
  font-family: 'Inter', system-ui, sans-serif; color: var(--fs-ink); line-height: 1.45;
}
.fs-root *, .fs-root *::before, .fs-root *::after { box-sizing: border-box; }
.fs-root .katex { text-transform: none; }
.fs-card { background: var(--fs-panel); border: 1.5px solid var(--fs-box); border-radius: 12px; overflow: hidden; }
.fs-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--fs-box); }
.fs-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--fs-blue); }
.fs-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--fs-title); letter-spacing: -.01em; }
.fs-lede { margin-top: 3px; font-size: 12.5px; color: var(--fs-muted); }
.fs-body { padding: 16px 20px 18px; background: var(--fs-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.fs-box { background: var(--fs-panel); border: 1.5px solid var(--fs-box); border-radius: 10px; }
.fs-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--fs-muted); margin-bottom: 4px; }
.fs-math { font-family: 'STIX Two Text', serif; }
.fs-note { padding: 10px 14px 12px; border-left: 4px solid var(--fs-blue); font-size: 12.5px; }
.fs-note .fs-lbl { color: var(--fs-blue); }
.fs-foot { font-size: 12px; color: var(--fs-muted); }

/* ---------- card: one row per formula ---------- */
.fs-tw { position: relative; overflow-x: auto; }
.fs-t { width: 100%; border-collapse: collapse; }
.fs-t th { padding: 8px 14px; background: var(--fs-head); border-bottom: 1.5px solid var(--fs-box); text-align: left; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--fs-title); }
.fs-t td { padding: 9px 14px; border-top: 1px solid var(--fs-line); font-size: 12.5px; vertical-align: middle; transition: background .15s; }
.fs-t tr:first-child td { border-top: 0; }
.fs-t tr:hover td { background: var(--fs-head); }
.fs-t td + td, .fs-t th + th { border-left: 1px solid var(--fs-line); }
.fs-t td.fs-name { font-weight: 700; color: var(--fs-title); font-size: 13px; min-width: 110px; }
.fs-t td.fs-f { font-family: 'STIX Two Text', serif; font-size: 15.5px; }
.fs-t td.fs-ex { font-family: 'STIX Two Text', serif; font-size: 14px; color: var(--fs-slate); background: var(--fs-soft); }
.fs-t tr:hover td.fs-ex { background: var(--fs-blue-soft); }
.fs-arrow { color: var(--fs-blue); font-weight: 700; padding: 0 3px; }
.fs-t td.fs-name .fs-sub { display: block; margin-top: 3px; font-weight: 400; font-size: 12px; color: var(--fs-ink); line-height: 1.45; }

/* prose inside tiles and grouped cells (text under a formula, a line under a family) */
.fs-tile-t { padding: 0 12px 10px; font-size: 12.5px; line-height: 1.5; color: var(--fs-ink); }
.fs-pair-t { margin-top: 5px; font: 400 12px/1.45 'Inter', system-ui, sans-serif; color: var(--fs-ink); text-align: center; }
.fs-group-sub { padding: 8px 14px 9px; font-size: 12.5px; line-height: 1.5; border-bottom: 1px solid var(--fs-line); }

/* ---------- tiles: one card per formula, restriction as a badge ---------- */
.fs-tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; }
.fs-tile { display: flex; flex-direction: column; overflow: hidden; transition: border-color .15s, box-shadow .15s; }
.fs-tile:hover { border-color: var(--fs-blue); box-shadow: 0 2px 10px rgba(37, 99, 235, .08); }
.fs-tile-n { padding: 7px 12px 0; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--fs-muted); }
.fs-tile-f { padding: 6px 12px 10px; font-family: 'STIX Two Text', serif; font-size: 17px; color: var(--fs-title); text-align: center; overflow-x: auto; flex: 1; display: flex; align-items: center; justify-content: center; }
.fs-tile-ex { padding: 6px 12px; border-top: 1px dashed var(--fs-line); font-family: 'STIX Two Text', serif; font-size: 13.5px; color: var(--fs-slate); text-align: center; background: var(--fs-soft); }
.fs-tile-r { padding: 5px 10px; font-size: 11px; display: flex; align-items: center; gap: 6px; border-top: 1px solid var(--fs-line); }
.fs-tile-r i { font-style: normal; flex: none; width: 15px; height: 15px; border-radius: 50%; background: var(--fs-gold-bg); color: var(--fs-gold-ink); font: 700 10px/15px 'Inter', sans-serif; text-align: center; }
.fs-tile-r span { color: var(--fs-gold-ink); }

/* ---------- grouped: families, with a filter ---------- */
.fs-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.fs-chip { font: 600 11.5px 'Inter', sans-serif; padding: 4px 11px; border-radius: 999px; border: 1.5px solid var(--fs-box); background: var(--fs-panel); color: var(--fs-slate); cursor: pointer; }
.fs-chip:focus-visible, .fs-tg:focus-visible { outline: 2px solid var(--fs-blue); outline-offset: 2px; }
.fs-chip:hover { border-color: var(--fs-blue); }
.fs-chip.on { background: var(--fs-navy); border-color: var(--fs-navy); color: #fff; }
.fs-groups { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 12px; align-items: start; }
.fs-group { overflow: hidden; }
.fs-group-h { padding: 8px 14px; background: var(--fs-head); border-bottom: 1.5px solid var(--fs-box); display: flex; justify-content: space-between; align-items: baseline; }
.fs-group-h b { font-size: 13.5px; color: var(--fs-title); }
.fs-group-h small { font: 600 10px 'JetBrains Mono', monospace; color: var(--fs-muted); }
.fs-pair { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--fs-line); }
.fs-pair:first-of-type { border-top: 0; }
.fs-pair > div { padding: 9px 12px; font-family: 'STIX Two Text', serif; font-size: 14.5px; text-align: center; transition: background .15s; overflow-x: auto; }
.fs-pair > div + div { border-left: 1px dashed var(--fs-line); }
.fs-pair > div.fs-empty { background: var(--fs-soft); }
.fs-pair > div:hover { background: var(--fs-head); }

/* ---------- paired: two axes of the same operations ---------- */
.fs-pr { overflow: hidden; }
.fs-pr-h, .fs-pr-r { display: grid; grid-template-columns: 130px minmax(0, 1fr) minmax(0, 1fr); }
.fs-pr-h { border-bottom: 1.5px solid var(--fs-box); }
.fs-pr-h > div { padding: 9px 14px; background: var(--fs-head); }
.fs-pr-h > div + div, .fs-pr-r > div + div { border-left: 1px solid var(--fs-line); }
.fs-pr-h b { display: block; font-size: 13.5px; color: var(--fs-title); }
.fs-pr-h small { font: 600 10.5px 'Inter', sans-serif; color: var(--fs-muted); }
.fs-pr-h .fs-pr-tag { display: inline-block; margin-top: 3px; font: 700 8.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; padding: 2px 6px; border-radius: 4px; }
.fs-pr-tag.direct { background: var(--fs-blue-soft); color: var(--fs-blue); }
.fs-pr-tag.reversed { background: var(--fs-gold-bg); color: var(--fs-gold-ink); }
.fs-pr-r { border-top: 1px solid var(--fs-line); }
.fs-pr-r:first-of-type { border-top: 0; }
.fs-pr-r > div { padding: 9px 14px; }
.fs-pr-op { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--fs-muted); display: flex; align-items: center; background: var(--fs-soft); }
.fs-cell-f { font-family: 'STIX Two Text', serif; font-size: 16px; color: var(--fs-title); }
.fs-cell-e { font-size: 12.5px; margin-top: 2px; }
.fs-cell-c { font-size: 11.5px; color: var(--fs-muted); margin-top: 3px; }
.fs-pr-r > div:not(.fs-pr-op):hover { background: var(--fs-head); }
.fs-general { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; padding: 10px 14px; font-size: 12.5px; color: var(--fs-muted); }
.fs-general > .fs-lbl { margin: 0; }
.fs-general .fs-math { font-size: 18px; color: var(--fs-title); }

/* ---------- expandable parts ---------- */
.fs-tg { display: inline-flex; align-items: center; gap: 4px; margin-top: 4px; padding: 0; border: 0; background: none; cursor: pointer; font: 600 11px 'Inter', sans-serif; color: var(--fs-blue); }
.fs-tg::after { content: ''; width: 5px; height: 5px; border-right: 1.5px solid currentColor; border-bottom: 1.5px solid currentColor; transform: rotate(45deg) translateY(-2px); transition: transform .2s; }
.fs-tg.open::after { transform: rotate(-135deg) translateY(-1px); }
.fs-tg:hover { text-decoration: underline; }
.fs-x { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .25s ease; }
.fs-x.open { grid-template-rows: 1fr; }
.fs-x > div { overflow: hidden; min-height: 0; }
.fs-xin { padding: 9px 14px 11px; font-size: 12.5px; border-top: 1px dashed var(--fs-line); background: var(--fs-soft); }
.fs-xin .fs-lbl { color: var(--fs-blue); }
.fs-xin p { margin: 0; }
.fs-xin p + p { margin-top: 5px; }
.fs-t tr.fs-xrow > td { padding: 0; border-top: 0; }
.fs-t tr.fs-xrow:hover > td { background: none; }
.fs-t tr.fs-xrow .fs-xin { border-left: 4px solid var(--fs-blue); }
.fs-tile .fs-tg { margin: 0; padding: 6px 12px; border-top: 1px solid var(--fs-line); justify-content: center; }
.fs-tile .fs-xin { border-top: 0; text-align: left; }
.fs-pair > div.fs-has { display: flex; flex-direction: column; align-items: center; }
.fs-pair > div.fs-on { background: var(--fs-head); }
.fs-pair-x .fs-xin { border-left: 4px solid var(--fs-blue); }
.fs-pr-r .fs-xin { margin: 8px -14px -9px; }

@media (max-width: 680px) {
  /* card: each row becomes a stacked block (name, formula, the rest), so nothing scrolls sideways */
  .fs-t thead { display: none; }
  .fs-t, .fs-t tbody, .fs-t tr, .fs-t td { display: block; width: 100%; }
  .fs-t tr + tr { border-top: 1px solid var(--fs-line); }
  .fs-t td, .fs-t tr:first-child td { border-top: 0; }
  .fs-t td + td { border-left: 0; padding-top: 0; }
  .fs-t td.fs-ex { background: none; }
  .fs-t tr.fs-xrow { border-top: 0; }
  /* grouped: the two formulas of a pair stack; an empty slot is dropped */
  .fs-pair { grid-template-columns: 1fr; }
  .fs-pair > div + div { border-left: 0; border-top: 1px dashed var(--fs-line); }
  .fs-pair > div.fs-empty { display: none; }
  .fs-pr-h { display: none; }
  .fs-pr-r { grid-template-columns: 1fr 1fr; }
  .fs-pr-op { grid-column: 1 / -1; }
  .fs-pr-r > div + div { border-left: 0; }
  .fs-pr-r > div:last-child { border-left: 1px solid var(--fs-line); }
  .fs-groups { grid-template-columns: 1fr; }
}
`;

/* ---------- expandable parts ---------- */
const Body = ({ d }) => (Array.isArray(d) ? d.map((p, i) => <p key={i}><R t={p} /></p>) : typeof d === 'string' ? <p><R t={d} /></p> : d);
const Toggle = ({ open, onClick, label, L }) => (
  <button type="button" className={'fs-tg' + (open ? ' open' : '')} aria-expanded={open} onClick={(e) => { e.stopPropagation(); onClick(); }}>
    {open ? <R t={L.hide} /> : <R t={label || L.more} />}
  </button>
);
const Panel = ({ open, x }) => (
  <div className={'fs-x' + (open ? ' open' : '')} aria-hidden={!open}>
    <div><div className="fs-xin">{x.detailsTitle && <span className="fs-lbl"><R t={x.detailsTitle} /></span>}<Body d={x.details} /></div></div>
  </div>
);
const useOpen = () => {
  const [open, setOpen] = useState({});
  return [open, (k) => setOpen((o) => ({ ...o, [k]: !o[k] }))];
};

/* ---------- card ---------- */
function Card({ data, L, O }) {
  const cols = data.columns;
  const [open, flip] = useOpen();
  return (
    <>
      <div className="fs-box fs-tw">
        <table className="fs-t">
          <thead><tr>{cols.map((c) => <th key={c.key}><R t={c.label} /></th>)}</tr></thead>
          <tbody>
            {data.rows.map((r, i) => (
              <React.Fragment key={i}>
                <tr>
                  {cols.map((c, ci) => (
                    <td key={c.key} className={c.kind === 'name' ? 'fs-name' : c.kind === 'formula' ? 'fs-f' : c.kind === 'example' ? 'fs-ex' : ''}>
                      {c.kind === 'transform' && Array.isArray(r[c.key])
                        ? <><R t={r[c.key][0]} /><span className="fs-arrow">{O.transformArrow}</span><R t={r[c.key][1]} /></>
                        : <R t={r[c.key]} />}
                      {c.kind === 'name' && r.sub && <span className="fs-sub"><R t={r.sub} /></span>}
                      {ci === 0 && r.details && <div><Toggle open={!!open[i]} onClick={() => flip(i)} label={r.detailsLabel} L={L} /></div>}
                    </td>
                  ))}
                </tr>
                {r.details && (
                  <tr className="fs-xrow"><td colSpan={cols.length}><Panel open={!!open[i]} x={r} /></td></tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {data.footnote && <div className="fs-foot"><R t={data.footnote} /></div>}
    </>
  );
}

/* ---------- tiles ---------- */
function Tiles({ data, L, O }) {
  const [open, flip] = useOpen();
  return (
    <>
      <div className="fs-tiles">
        {data.items.map((x, i) => (
          <div key={i} className="fs-box fs-tile">
            <div className="fs-tile-n"><R t={x.name} /></div>
            <div className="fs-tile-f"><R t={x.formula} /></div>
            {x.text && <div className="fs-tile-t"><R t={x.text} /></div>}
            {x.example && <div className="fs-tile-ex"><R t={x.example} /></div>}
            {x.restriction && <div className="fs-tile-r"><i>!</i><span><R t={x.restriction} /></span></div>}
            {x.details && <><Toggle open={!!open[i]} onClick={() => flip(i)} label={x.detailsLabel} L={L} /><Panel open={!!open[i]} x={x} /></>}
          </div>
        ))}
      </div>
      {data.footnote && <div className="fs-foot"><R t={data.footnote} /></div>}
    </>
  );
}

/* ---------- grouped ---------- */
function Grouped({ data, L, O }) {
  const [g, setG] = useState(null);
  const [open, setOpen] = useState({});
  const setOne = (key, group) => setOpen((o) => { const n = { ...o }; if (O.onePerPair) group.forEach((q) => { if (q !== key) n[q] = false; }); n[key] = !o[key]; return n; });
  const shown = data.groups.filter((x) => g == null || x.id === g);
  return (
    <>
      {O.groupFilter && data.groups.length > 1 && (
        <div className="fs-chips">
          <button type="button" aria-pressed={g == null} className={'fs-chip' + (g == null ? ' on' : '')} onClick={() => setG(null)}><R t={L.all} /></button>
          {data.groups.map((x) => (
            <button type="button" key={x.id} aria-pressed={g === x.id} className={'fs-chip' + (g === x.id ? ' on' : '')} onClick={() => setG(x.id)}><R t={x.name} /></button>
          ))}
        </div>
      )}
      <div className="fs-groups">
        {shown.map((x) => (
          <div key={x.id} className="fs-box fs-group">
            <div className="fs-group-h"><b><R t={x.name} /></b>{O.counts && (() => {
              const n = x.pairs.reduce((c, p) => c + p.filter((f) => f && (typeof f === 'string' || f.formula)).length, 0);
              return <small>{(n === 1 ? L.countOne : L.count).replace('{n}', n)}</small>;
            })()}</div>
            {x.sub && <div className="fs-group-sub"><R t={x.sub} /></div>}
            {x.pairs.map((p, i) => {
              // a pair may have one formula: a missing, null or '' slot is shown as an empty cell
              const it = [p[0], p[1]].map((f) => (f == null || f === '' ? { formula: '', empty: true } : typeof f === 'string' ? { formula: f } : f));
              const k = (j) => x.id + '-' + i + '-' + j;
              const cur = [0, 1].find((j) => open[k(j)] && it[j].details);
              return (
                <React.Fragment key={i}>
                  <div className="fs-pair">
                    {it.map((f, j) => (
                      <div key={j} className={(f.empty ? 'fs-empty' : '') + (f.details ? ' fs-has' : '') + (open[k(j)] ? ' fs-on' : '')}>
                        <R t={f.formula} />
                        {f.text && <div className="fs-pair-t"><R t={f.text} /></div>}
                        {f.details && <Toggle open={!!open[k(j)]} onClick={() => setOne(k(j), [k(0), k(1)])} label={f.detailsLabel} L={L} />}
                      </div>
                    ))}
                  </div>
                  {it.some((f) => f.details) && (
                    O.onePerPair
                      ? <div className="fs-pair-x"><Panel open={cur != null} x={cur != null ? it[cur] : it.find((f) => f.details)} /></div>
                      : it.map((f, j) => (f.details ? <div key={'x' + j} className="fs-pair-x"><Panel open={!!open[k(j)]} x={f} /></div> : null))
                  )}
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
      {data.footnote && <div className="fs-foot"><R t={data.footnote} /></div>}
    </>
  );
}

/* ---------- paired ---------- */
// Defined outside Paired so a redraw keeps the same cell and its panel can slide open.
const PairedCell = ({ c, open, onFlip, L }) => (
  <div>
    <div className="fs-cell-f"><R t={c.formula} /></div>
    <div className="fs-cell-e"><R t={c.effect} /></div>
    {c.condition && <div className="fs-cell-c"><R t={c.condition} /></div>}
    {c.details && <><Toggle open={open} onClick={onFlip} label={c.detailsLabel} L={L} /><Panel open={open} x={c} /></>}
  </div>
);

function Paired({ data, L, O }) {
  const [a, b] = data.sides;
  const [open, flip] = useOpen();
  return (
    <>
      {data.general && <div className="fs-box fs-general"><span className="fs-lbl"><R t={data.generalLabel || L.general} /></span><span className="fs-math"><R t={data.general} /></span></div>}
      <div className="fs-box fs-pr">
        <div className="fs-pr-h">
          <div />
          {[a, b].map((s, i) => <div key={i}><b><R t={s.name} /></b><small><R t={s.sub} /></small>{s.tag && <div><span className={'fs-pr-tag ' + (s.tone || 'direct')}><R t={s.tag} /></span></div>}</div>)}
        </div>
        {data.rows.map((r, i) => (
          <div key={i} className="fs-pr-r">
            <div className="fs-pr-op"><R t={r.op} /></div>
            {[0, 1].map((j) => (
              <PairedCell key={j} c={r.cells[j]} open={!!open[i + '-' + j]} onFlip={() => flip(i + '-' + j)} L={L} />
            ))}
          </div>
        ))}
      </div>
      {data.note && <div className="fs-box fs-note"><span className="fs-lbl"><R t={data.note.label} /></span><R t={data.note.text} /></div>}
    </>
  );
}

const V = { card: Card, tiles: Tiles, grouped: Grouped, paired: Paired };

export default function FormulaSheet({ data, variant = 'card', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = V[variant] || Card;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="fs-root" style={cssVars(th)}>
        <div className="fs-card">
          {hd && (
            <div className="fs-head">
              {hd.kicker && <div className="fs-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="fs-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="fs-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="fs-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
