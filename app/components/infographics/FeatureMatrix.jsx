/*
  FeatureMatrix.jsx

  Items × features. Each feature has a cell type:
    text, math, tag, verdict, number (with a bar, sortable), graph (a small plot).
  Readers can flip the layout (items as rows / as columns), hover to trace a row and column,
  and sort by any number feature.

  Labels, verdicts, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useId, useMemo, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const CELL_TYPES = ['text', 'math', 'tag', 'verdict', 'number', 'graph'];

export const DEFAULT_LABELS = {
  orient: 'Layout',
  rows: 'Items as rows',
  cols: 'Items as columns',
  none: '—',
  sortAsc: 'sort ascending',
  sortDesc: 'sort descending'
};

export const DEFAULT_VERDICTS = {
  yes: { label: 'Yes', mark: '✓', color: '#2563eb', bg: '#dbeafe' },
  no: { label: 'No', mark: '✕', color: '#475569', bg: '#f1f5f9' },
  partly: { label: 'Partly', mark: '½', color: '#a16207', bg: '#fef3c7' }
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
  slate: '#475569',
  onDark: '#ffffff',
  hover: '#eff6ff',
  hoverHead: '#dbeafe',
  bar: '#2563eb',
  barTrack: '#e2e8f0',
  tagInk: '#1e3a8a',
  tagBg: '#eff6ff',
  sparkLine: '#1e3a8a',
  sparkFill: '#dbeafe',
  sparkAxis: '#94a3b8'
};

export const DEFAULT_OPTIONS = {
  orient: 'rows',
  orientToggle: true,
  hover: true,
  sortable: true,
  legend: true,
  sparkWidth: 110,
  sparkHeight: 40
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--fm-ink': th.ink, '--fm-title': th.title, '--fm-muted': th.muted, '--fm-line': th.line, '--fm-box': th.box,
  '--fm-panel': th.panel, '--fm-soft': th.soft, '--fm-head': th.headBg, '--fm-navy': th.navy,
  '--fm-blue': th.blue, '--fm-blue-soft': th.blueSoft, '--fm-slate': th.slate, '--fm-on-dark': th.onDark,
  '--fm-hover': th.hover, '--fm-hover-head': th.hoverHead, '--fm-bar': th.bar, '--fm-bar-track': th.barTrack
});

const CSS = `
.fm-root {
  font-family: 'Inter', system-ui, sans-serif; color: var(--fm-ink); line-height: 1.45;
}
.fm-root *, .fm-root *::before, .fm-root *::after { box-sizing: border-box; }
.fm-root .katex { text-transform: none; }
.fm-card { background: var(--fm-panel); border: 1.5px solid var(--fm-box); border-radius: 12px; overflow: hidden; }
.fm-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--fm-box); }
.fm-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--fm-blue); }
.fm-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--fm-title); letter-spacing: -.01em; }
.fm-lede { margin-top: 3px; font-size: 12.5px; color: var(--fm-muted); }
.fm-body { padding: 16px 20px 18px; background: var(--fm-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.fm-lbl { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--fm-muted); }
.fm-bar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 16px; }
.fm-ctl { display: flex; align-items: center; gap: 8px; }
.fm-seg { display: inline-flex; border: 1.5px solid var(--fm-box); border-radius: 8px; overflow: hidden; background: var(--fm-panel); }
.fm-seg button { border: 0; background: none; padding: 4px 11px; cursor: pointer; font: 600 11.5px 'Inter', sans-serif; color: var(--fm-slate); display: inline-flex; align-items: center; gap: 6px; }
.fm-seg button + button { border-left: 1.5px solid var(--fm-box); }
.fm-seg button.on { background: var(--fm-navy); color: var(--fm-on-dark); }
.fm-seg svg { display: block; }
.fm-legend { display: flex; flex-wrap: wrap; gap: 6px 12px; font-size: 11.5px; color: var(--fm-muted); }
.fm-legend span { display: inline-flex; align-items: center; gap: 5px; }
.fm-tw { position: relative; overflow-x: auto; background: var(--fm-panel); border: 1.5px solid var(--fm-box); border-radius: 10px; }
.fm-t { width: 100%; border-collapse: collapse; }
.fm-t th, .fm-t td { padding: 8px 12px; border-top: 1px solid var(--fm-line); vertical-align: middle; transition: background .15s, opacity .15s; }
.fm-t th + th, .fm-t td + td, .fm-t th + td, .fm-t td + th { border-left: 1px solid var(--fm-line); }
.fm-t thead th { border-top: 0; background: var(--fm-head); border-bottom: 1.5px solid var(--fm-box); text-align: center; font-weight: 700; color: var(--fm-title); font-size: 12.5px; white-space: nowrap; }
.fm-t thead th.fm-corner { background: var(--fm-soft); }
.fm-t tbody th { background: var(--fm-soft); text-align: left; font-weight: 700; color: var(--fm-title); font-size: 13px; border-right: 1.5px solid var(--fm-box); }
.fm-t tbody tr:first-child > * { border-top: 0; }
.fm-t th small { display: block; font: 500 10.5px 'Inter', sans-serif; color: var(--fm-muted); margin-top: 1px; white-space: normal; }
.fm-t th .fm-kind { display: block; font: 700 8.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--fm-muted); margin-top: 2px; }
.fm-t td { text-align: center; font-size: 12.5px; }
.fm-t td.fm-text { text-align: left; }
.fm-t td.fm-math { font-family: 'STIX Two Text', serif; font-size: 14.5px; white-space: nowrap; }
.fm-t .fm-hl { background: var(--fm-hover); }
.fm-t thead th.fm-hl, .fm-t tbody th.fm-hl { background: var(--fm-hover-head); }
.fm-sort { border: 0; background: none; padding: 0; margin-left: 4px; cursor: pointer; color: var(--fm-muted); font: 700 11px 'Inter', sans-serif; vertical-align: 1px; }
.fm-sort.on { color: var(--fm-blue); }
.fm-v { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; font: 700 12px 'Inter', sans-serif; }
.fm-tag { display: inline-block; padding: 2px 8px; border-radius: 999px; font: 600 11px 'Inter', sans-serif; white-space: nowrap; }
.fm-num { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 8px; min-width: 110px; }
.fm-num-b { height: 8px; border-radius: 4px; background: var(--fm-bar-track); overflow: hidden; }
.fm-num-b i { display: block; height: 100%; border-radius: 4px; background: var(--fm-bar); }
.fm-num-v { font-family: 'STIX Two Text', serif; font-size: 14.5px; color: var(--fm-title); font-weight: 600; min-width: 30px; text-align: right; }
.fm-spark { display: block; margin: 0 auto; }
.fm-foot { font-size: 12px; color: var(--fm-muted); }
.fm-none { color: var(--fm-muted); }
.fm-legend .fm-v { width: 18px; height: 18px; font-size: 10px; }
.fm-seg button:focus-visible, .fm-sort:focus-visible { outline: 2px solid var(--fm-blue); outline-offset: -2px; }

@media (max-width: 680px) {
  /* phones: the heading column stays put while the rest scrolls, and a shadow at the right edge shows there is more */
  .fm-tw {
    background:
      linear-gradient(to left, var(--fm-panel) 30%, rgba(255, 255, 255, 0)) right center / 36px 100% no-repeat local,
      radial-gradient(farthest-side at 100% 50%, rgba(15, 23, 42, .18), rgba(15, 23, 42, 0)) right center / 14px 100% no-repeat scroll,
      var(--fm-panel);
  }
  .fm-t th, .fm-t td { padding: 6px 8px; }
  .fm-t tbody th, .fm-t thead th.fm-corner { position: sticky; left: 0; z-index: 2; box-shadow: inset -1.5px 0 0 var(--fm-box); }
  .fm-t tbody th { min-width: 92px; max-width: 112px; font-size: 12px; border-right: 0; }
  .fm-t th small { font-size: 9.5px; }
}
`;

/* ---------- cell renderers by column type ---------- */
function Spark({ g, th, O }) {
  const uid = useId().replace(/:/g, '');
  const w = g.width || O.sparkWidth, h = g.height || O.sparkHeight, p = 3;
  const N = 80, xs = [];
  for (let i = 0; i <= N; i++) xs.push(g.x0 + (g.x1 - g.x0) * i / N);
  const ys = xs.map(g.f);
  const y0 = g.y0 != null ? g.y0 : Math.min(0, ...ys), y1 = g.y1 != null ? g.y1 : Math.max(...ys);
  const X = (x) => p + (x - g.x0) / (g.x1 - g.x0) * (w - 2 * p);
  const Y = (y) => h - p - (y - y0) / (y1 - y0 || 1) * (h - 2 * p);
  const line = xs.map((x, i) => (i ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Y(ys[i]).toFixed(1)).join(' ');
  return (
    <svg className="fm-spark" width={w} height={h} viewBox={`0 0 ${w} ${h}`} role="img">
      <defs><clipPath id={'fmc' + uid}><rect x="0" y="0" width={w} height={h} /></clipPath></defs>
      <g clipPath={`url(#fmc${uid})`}>
        <path d={line + ` L${X(g.x1)} ${Y(y0)} L${X(g.x0)} ${Y(y0)} Z`} fill={g.fill || th.sparkFill} stroke="none" />
        <path d={line} fill="none" stroke={g.color || th.sparkLine} strokeWidth="1.6" />
      </g>
      <line x1={p} y1={Y(y0)} x2={w - p} y2={Y(y0)} stroke={th.sparkAxis} strokeWidth="1" />
    </svg>
  );
}

function Cell({ col, v, max, verdicts, L, th, O }) {
  if (v == null || v === '') return <span className="fm-none">{L.none}</span>;
  switch (col.type) {
    case 'verdict': {
      const d = verdicts[v] || verdicts.no;
      return <span className="fm-v" title={d.label} style={{ color: d.color, background: d.bg }}>{d.mark}</span>;
    }
    case 'tag': {
      const t = (col.tags && col.tags[v]) || {};
      return <span className="fm-tag" style={{ color: t.color || th.tagInk, background: t.bg || th.tagBg }}><R t={t.label || v} /></span>;
    }
    case 'number': {
      const n = typeof v === 'object' ? v.value : v;
      const shown = typeof v === 'object' && v.label ? v.label : String(n);
      return (
        <div className="fm-num">
          <div className="fm-num-b"><i style={{ width: (max ? Math.max(2, (n / max) * 100) : 0) + '%' }} /></div>
          <span className="fm-num-v"><R t={shown} /></span>
        </div>
      );
    }
    case 'graph':
      return <Spark g={v} th={th} O={O} />;
    default:
      return <R t={v} />;
  }
}

const cls = (col) => (col.type === 'math' ? 'fm-math' : col.type === 'text' ? 'fm-text' : '');

const RowsIcon = () => <svg width="14" height="12" viewBox="0 0 14 12"><rect x="0" y="0" width="14" height="3" rx="1" fill="currentColor" /><rect x="0" y="4.5" width="14" height="3" rx="1" fill="currentColor" opacity=".6" /><rect x="0" y="9" width="14" height="3" rx="1" fill="currentColor" opacity=".35" /></svg>;
const ColsIcon = () => <svg width="14" height="12" viewBox="0 0 14 12"><rect x="0" y="0" width="3.5" height="12" rx="1" fill="currentColor" /><rect x="5.25" y="0" width="3.5" height="12" rx="1" fill="currentColor" opacity=".6" /><rect x="10.5" y="0" width="3.5" height="12" rx="1" fill="currentColor" opacity=".35" /></svg>;

export default function FeatureMatrix({ data, orient: orientProp, labels, theme, options, verdicts: verdictsProp }) {
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...((data && data.labels) || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...((data && data.theme) || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...((data && data.options) || {}) };
  const verdicts = { ...DEFAULT_VERDICTS, ...(verdictsProp || {}), ...((data && data.verdicts) || {}) };
  const [orient, setOrient] = useState((data && data.orient) || orientProp || O.orient);
  const [sort, setSort] = useState(null);
  const [hl, setHl] = useState({ item: null, feat: null });
  const items0 = (data && data.items) || [], feats = (data && data.features) || [];

  const max = useMemo(() => Object.fromEntries(feats.filter((f) => f.type === 'number').map((f) => [f.id, Math.max(...items0.map((it) => { const v = it.values[f.id]; return v == null ? 0 : typeof v === 'object' ? v.value : v; }))])), [feats, items0]);
  const items = useMemo(() => {
    if (!sort) return items0;
    const val = (it) => { const v = it.values[sort.id]; return v == null ? -Infinity : typeof v === 'object' ? v.value : v; };
    return [...items0].sort((a, b) => (val(a) - val(b)) * sort.dir);
  }, [items0, sort]);
  const flip = (id) => setSort((s) => (!s || s.id !== id ? { id, dir: -1 } : s.dir === -1 ? { id, dir: 1 } : null));

  const usedVerdicts = Object.keys(verdicts).filter((k) => feats.some((f) => f.type === 'verdict' && items0.some((it) => it.values[f.id] === k)));
  const hov = (item, feat) => (O.hover ? { onMouseEnter: () => setHl({ item, feat }), onMouseLeave: () => setHl({ item: null, feat: null }) } : {});
  const on = (item, feat) => (hl.item != null && hl.item === item) || (hl.feat != null && hl.feat === feat);

  const featHead = (f) => (
    <>
      <R t={f.name} />
      {f.type === 'number' && O.sortable && f.sortable !== false && (
        <button type="button" className={'fm-sort' + (sort && sort.id === f.id ? ' on' : '')} aria-label={sort && sort.id === f.id && sort.dir === -1 ? L.sortAsc : L.sortDesc} onClick={() => flip(f.id)}>
          {sort && sort.id === f.id ? (sort.dir === -1 ? '↓' : '↑') : '↕'}
        </button>
      )}
      {f.sub && <small><R t={f.sub} /></small>}
    </>
  );
  const itemHead = (it) => (<><R t={it.name} />{it.sub && <small><R t={it.sub} /></small>}</>);

  if (!data) return null;
  const showBar = O.orientToggle || (O.legend && usedVerdicts.length > 0);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="fm-root" style={cssVars(th)}>
        <div className="fm-card">
          {data.header && (
            <div className="fm-head">
              {data.header.kicker && <div className="fm-kicker"><R t={data.header.kicker} /></div>}
              {data.header.title && <h2 className="fm-title"><R t={data.header.title} /></h2>}
              {data.header.lede && <div className="fm-lede"><R t={data.header.lede} /></div>}
            </div>
          )}
          <div className="fm-body">
            {showBar && (
            <div className="fm-bar">
              {O.orientToggle ? (
              <div className="fm-ctl">
                <span className="fm-lbl"><R t={L.orient} /></span>
                <div className="fm-seg">
                  <button type="button" className={orient === 'rows' ? 'on' : ''} aria-pressed={orient === 'rows'} onClick={() => setOrient('rows')}><RowsIcon /><R t={L.rows} /></button>
                  <button type="button" className={orient === 'columns' ? 'on' : ''} aria-pressed={orient === 'columns'} onClick={() => setOrient('columns')}><ColsIcon /><R t={L.cols} /></button>
                </div>
              </div>
              ) : <span />}
              {O.legend && usedVerdicts.length > 0 && (
                <div className="fm-legend">
                  {usedVerdicts.map((k) => <span key={k}><span className="fm-v" style={{ color: verdicts[k].color, background: verdicts[k].bg }}>{verdicts[k].mark}</span><R t={verdicts[k].label} /></span>)}
                </div>
              )}
            </div>
            )}
            <div className="fm-tw">
              <table className="fm-t">
                {orient === 'rows' ? (
                  <>
                    <thead><tr><th className="fm-corner" />{feats.map((f) => <th key={f.id} className={hl.feat === f.id ? 'fm-hl' : ''} {...hov(null, f.id)}>{featHead(f)}</th>)}</tr></thead>
                    <tbody>
                      {items.map((it) => (
                        <tr key={it.id}>
                          <th className={hl.item === it.id ? 'fm-hl' : ''} {...hov(it.id, null)}>{itemHead(it)}</th>
                          {feats.map((f) => <td key={f.id} className={cls(f) + (on(it.id, f.id) ? ' fm-hl' : '')} {...hov(it.id, f.id)}><Cell col={f} v={it.values[f.id]} max={max[f.id]} verdicts={verdicts} L={L} th={th} O={O} /></td>)}
                        </tr>
                      ))}
                    </tbody>
                  </>
                ) : (
                  <>
                    <thead><tr><th className="fm-corner" />{items.map((it) => <th key={it.id} className={hl.item === it.id ? 'fm-hl' : ''} {...hov(it.id, null)}>{itemHead(it)}</th>)}</tr></thead>
                    <tbody>
                      {feats.map((f) => (
                        <tr key={f.id}>
                          <th className={hl.feat === f.id ? 'fm-hl' : ''} {...hov(null, f.id)}>{featHead(f)}</th>
                          {items.map((it) => <td key={it.id} className={cls(f) + (on(it.id, f.id) ? ' fm-hl' : '')} {...hov(it.id, f.id)}><Cell col={f} v={it.values[f.id]} max={max[f.id]} verdicts={verdicts} L={L} th={th} O={O} /></td>)}
                        </tr>
                      ))}
                    </tbody>
                  </>
                )}
              </table>
            </div>
            {data.footnote && <div className="fm-foot"><R t={data.footnote} /></div>}
          </div>
        </div>
      </div>
    </>
  );
}
