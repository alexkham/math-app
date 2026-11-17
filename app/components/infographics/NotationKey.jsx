/*
  NotationKey.jsx

  A page's notation as an infographic. Takes the same object NotationSection uses
  (title, lead, inherited, entries: [{ id, tex, read, means, cases, alsoWritten,
  confusedWith, confusedWithLabel, sameGlyphElsewhere, sameGlyphLabel }],
  symbolsHref, symbolsLabel, parentHref, parentLabel), unchanged. Three variants:
    tiles        every symbol as a tile; click one for its full entry
    confusables  each symbol beside what it must not be read as (first sentence of confusedWith)
    cards        flashcards: symbol on the front, how it is read and what it means on the back

  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['tiles', 'confusables', 'cards'];

export const DEFAULT_LABELS = {
  kicker: 'Notation',
  read: 'Read',
  means: 'Meaning',
  cases: 'Cases',
  alsoWritten: 'Also written',
  confusedWith: 'Do not confuse',
  sameGlyph: 'Same glyph elsewhere',
  inherited: 'Inherited',
  symbols: 'Symbol index',
  parent: 'Shared notation',
  tilesHint: 'Click a symbol for its details.',
  notThis: 'not',
  confusablesHint: 'Click a card for the full explanation.',
  cardsHint: 'Click a card to see how it is read. Can you read it first?',
  revealAll: 'Reveal all',
  hideAll: 'Hide all',
  flip: 'tap to reveal'
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
  slateBg: '#f1f5f9',
  onDark: '#ffffff',
  symbol: '#1e3a8a'
};

export const DEFAULT_OPTIONS = {
  initial: 0,          // tiles: entry open first (null = none)
  columns: 0           // tiles / cards: fixed number of columns (0 = automatic)
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--nk-ink': th.ink, '--nk-title': th.title, '--nk-muted': th.muted, '--nk-line': th.line, '--nk-box': th.box,
  '--nk-panel': th.panel, '--nk-soft': th.soft, '--nk-head': th.headBg, '--nk-navy': th.navy,
  '--nk-blue': th.blue, '--nk-blue-soft': th.blueSoft, '--nk-gold': th.gold, '--nk-gold-bg': th.goldBg,
  '--nk-gold-ink': th.goldInk, '--nk-slate': th.slate, '--nk-slate-bg': th.slateBg, '--nk-on-dark': th.onDark,
  '--nk-symbol': th.symbol
});

// split prose at the first ". " that is outside $…$: a short headline and the rest
function headline(s) {
  if (!s) return ['', ''];
  let math = false;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '$') math = !math;
    if (!math && s[i] === '.' && s[i + 1] === ' ') return [s.slice(0, i + 1), s.slice(i + 2)];
  }
  return [s, ''];
}

const CSS = `
.nk-root { font-family: 'Inter', system-ui, sans-serif; color: var(--nk-ink); line-height: 1.45; }
.nk-root *, .nk-root *::before, .nk-root *::after { box-sizing: border-box; }
.nk-root .katex { text-transform: none; }
.nk-card { background: var(--nk-panel); border: 1.5px solid var(--nk-box); border-radius: 12px; overflow: hidden; }
.nk-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--nk-box); }
.nk-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--nk-blue); }
.nk-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--nk-title); letter-spacing: -.01em; }
.nk-lede { margin-top: 3px; font-size: 12.5px; color: var(--nk-muted); }
.nk-body { padding: 16px 20px 18px; background: var(--nk-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.nk-box { background: var(--nk-panel); border: 1.5px solid var(--nk-box); border-radius: 10px; }
.nk-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--nk-muted); margin-bottom: 3px; }
.nk-hint { font-size: 12px; color: var(--nk-muted); }
.nk-sym { font-family: 'STIX Two Text', serif; color: var(--nk-symbol); }
.nk-inh { padding: 9px 14px; font-size: 12.5px; color: var(--nk-slate); border-left: 4px solid var(--nk-slate); }
.nk-inh .nk-lbl { color: var(--nk-slate); }
.nk-foot { display: flex; flex-wrap: wrap; gap: 8px; }
.nk-pill { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 999px; font: 600 12px 'Inter', sans-serif; text-decoration: none; border: 1.5px solid var(--nk-box); color: var(--nk-navy); background: var(--nk-panel); }
.nk-pill.main { background: var(--nk-navy); border-color: var(--nk-navy); color: var(--nk-on-dark); }
.nk-pill:hover { border-color: var(--nk-blue); }
.nk-band { padding: 9px 14px 10px; font-size: 12.5px; border-left: 4px solid var(--nk-blue); background: var(--nk-panel); }
.nk-band .nk-lbl { color: var(--nk-blue); }
.nk-band.warn { border-left-color: var(--nk-gold); background: var(--nk-gold-bg); }
.nk-band.warn .nk-lbl { color: var(--nk-gold-ink); }
.nk-band.cross { border-left-color: var(--nk-slate); background: var(--nk-slate-bg); }
.nk-band.cross .nk-lbl { color: var(--nk-slate); }

/* ---------- tiles ---------- */
.nk-tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 10px; }
.nk-tile { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; min-height: 104px; padding: 14px 12px 12px; border: 1.5px solid var(--nk-box); border-radius: 10px; background: var(--nk-panel); cursor: pointer; text-align: center; font: inherit; color: inherit; }
.nk-tile:hover { border-color: var(--nk-blue); }
.nk-tile.on { border-color: var(--nk-navy); box-shadow: 0 0 0 2px var(--nk-navy) inset; background: var(--nk-head); }
.nk-tile .nk-sym { font-size: 21px; line-height: 1.3; }
.nk-tile small { font-size: 12px; color: var(--nk-muted); line-height: 1.35; }
.nk-detail { overflow: hidden; }
.nk-detail-top { display: grid; grid-template-columns: minmax(0, 200px) minmax(0, 1fr); border-bottom: 1px solid var(--nk-line); }
.nk-detail-top > div:first-child { display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 14px; background: var(--nk-head); border-right: 1px solid var(--nk-line); text-align: center; }
.nk-detail-top > div:first-child .nk-sym { font-size: 24px; }
.nk-detail-top > div:first-child small { margin-top: 4px; font-size: 12px; color: var(--nk-muted); font-style: italic; }
.nk-detail-top > div + div { padding: 12px 16px; font-size: 13px; }
.nk-subs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
.nk-subs > div { padding: 10px 16px; font-size: 12.5px; border-bottom: 1px solid var(--nk-line); }
.nk-subs > div:nth-child(odd):not(:last-child) { border-right: 1px solid var(--nk-line); }
.nk-subs > div:last-child:nth-child(odd) { grid-column: 1 / -1; }
.nk-bands { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0; }
.nk-bands .nk-band { border-top: 1px solid var(--nk-line); }
.nk-bands .nk-band:first-child { border-top: 0; }

/* ---------- confusables ---------- */
.nk-cf { display: grid; grid-template-columns: minmax(0, 1fr); gap: 10px; }
.nk-cfc { overflow: hidden; cursor: pointer; }
.nk-cfc:hover { border-color: var(--nk-blue); }
.nk-cfc.on { border-color: var(--nk-gold); }
.nk-cf-row { display: grid; grid-template-columns: minmax(0, 1fr) 54px minmax(0, 1fr) 28px; align-items: stretch; }
.nk-cf-row > div { padding: 12px 16px; display: flex; flex-direction: column; justify-content: center; }
.nk-cf-this { background: var(--nk-head); }
.nk-cf-this .nk-sym { font-size: 19px; }
.nk-cf-this small { font-size: 12px; color: var(--nk-muted); font-style: italic; margin-top: 2px; }
.nk-cf-ne { align-items: center; justify-content: center !important; padding: 0 !important; font: 400 22px 'STIX Two Text', serif; color: var(--nk-gold); border-left: 1px solid var(--nk-line); border-right: 1px solid var(--nk-line); }
.nk-cf-ne span { font: 700 9px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--nk-gold-ink); }
.nk-cf-not { background: var(--nk-gold-bg); }
.nk-cf-not .nk-lbl { color: var(--nk-gold-ink); }
.nk-cf-not b { font-size: 14.5px; font-weight: 700; color: var(--nk-gold-ink); }
.nk-cf-row > .nk-cf-arrow { align-items: center; padding: 0 !important; color: var(--nk-muted); font-size: 12px; background: var(--nk-gold-bg); }
.nk-cf-more { padding: 10px 16px 12px; border-top: 1px solid var(--nk-line); font-size: 12.5px; }

/* ---------- cards ---------- */
.nk-cards-top { display: flex; flex-wrap: wrap; gap: 8px 14px; align-items: center; justify-content: space-between; }
.nk-btn { padding: 5px 12px; border: 1.5px solid var(--nk-box); border-radius: 8px; background: var(--nk-panel); font: 600 12px 'Inter', sans-serif; color: var(--nk-navy); cursor: pointer; }
.nk-btn:hover { border-color: var(--nk-blue); }
.nk-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; }
.nk-fc { display: flex; flex-direction: column; min-height: 168px; border: 1.5px solid var(--nk-box); border-radius: 10px; background: var(--nk-panel); cursor: pointer; text-align: left; padding: 0; font: inherit; color: inherit; overflow: hidden; }
.nk-fc:hover { border-color: var(--nk-blue); }
.nk-fc-front { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 16px 12px; gap: 8px; }
.nk-fc-front .nk-sym { font-size: 22px; text-align: center; }
.nk-fc-front small { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--nk-muted); }
.nk-fc.on { border-color: var(--nk-navy); }
.nk-fc.on .nk-fc-front { flex: 0; padding: 12px 12px 8px; background: var(--nk-head); border-bottom: 1px solid var(--nk-line); }
.nk-fc.on .nk-fc-front .nk-sym { font-size: 18px; }
.nk-fc-back { padding: 10px 14px 12px; font-size: 12.5px; }
.nk-fc-back .nk-read { font-size: 14px; font-weight: 600; color: var(--nk-navy); margin-bottom: 6px; }

@media (max-width: 680px) {
  .nk-detail-top { grid-template-columns: minmax(0, 1fr); }
  .nk-detail-top > div:first-child { border-right: 0; border-bottom: 1px solid var(--nk-line); }
  .nk-subs { grid-template-columns: minmax(0, 1fr); }
  .nk-subs > div:nth-child(odd):not(:last-child) { border-right: 0; }
  .nk-cf-row { grid-template-columns: minmax(0, 1fr) 28px; }
  .nk-cf-this { grid-column: 1 / -1; }
  .nk-cf-ne { display: none !important; }
  .nk-tiles { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .nk-fc { min-height: 112px; }
}
`;

/* ---------- shared bits ---------- */
function Inherited({ data, L }) {
  if (!data.inherited) return null;
  return <div className="nk-box nk-inh"><span className="nk-lbl"><R t={L.inherited} /></span><R t={data.inherited} /></div>;
}

function Foot({ data, L }) {
  if (!data.symbolsHref && !data.parentHref) return null;
  return (
    <div className="nk-foot">
      {data.symbolsHref && <a className="nk-pill main" href={data.symbolsHref}><R t={data.symbolsLabel || L.symbols} /> &rarr;</a>}
      {data.parentHref && <a className="nk-pill" href={data.parentHref}>&uarr; <R t={data.parentLabel || L.parent} /></a>}
    </div>
  );
}

function Bands({ e, L, skipConfused }) {
  const b = [];
  if (e.confusedWith && !skipConfused) b.push(<div key="c" className="nk-band warn"><span className="nk-lbl"><R t={e.confusedWithLabel || L.confusedWith} /></span><R t={e.confusedWith} /></div>);
  if (e.sameGlyphElsewhere) b.push(<div key="s" className="nk-band cross"><span className="nk-lbl"><R t={e.sameGlyphLabel || L.sameGlyph} /></span><R t={e.sameGlyphElsewhere} /></div>);
  return b.length ? <div className="nk-bands">{b}</div> : null;
}

/* ---------- tiles: every symbol at a glance, click for its entry ---------- */
function Tiles({ data, L, O }) {
  const E = data.entries || [];
  const start = data.initial !== undefined ? data.initial : O.initial;
  const [on, setOn] = useState(start == null ? null : Math.min(E.length - 1, start));
  const e = on == null ? null : E[on];
  const cols = O.columns ? { gridTemplateColumns: `repeat(${O.columns}, minmax(0, 1fr))` } : undefined;
  const subs = e ? [['cases', e.cases], ['alsoWritten', e.alsoWritten]].filter(([, v]) => v) : [];
  return (
    <>
      <Inherited data={data} L={L} />
      <div className="nk-tiles" style={cols}>
        {E.map((x, i) => (
          <button key={x.id || i} type="button" className={'nk-tile' + (i === on ? ' on' : '')} aria-pressed={i === on} onClick={() => setOn(i === on ? null : i)}>
            <span className="nk-sym"><R t={x.tex} /></span>
            {x.read && <small><R t={x.read} /></small>}
          </button>
        ))}
      </div>
      {e ? (
        <div className="nk-box nk-detail">
          <div className="nk-detail-top">
            <div><span className="nk-sym"><R t={e.tex} /></span>{e.read && <small><R t={e.read} /></small>}</div>
            <div><span className="nk-lbl"><R t={L.means} /></span><R t={e.means} /></div>
          </div>
          {subs.length > 0 && (
            <div className="nk-subs">
              {subs.map(([k, v]) => <div key={k}><span className="nk-lbl"><R t={L[k]} /></span><R t={v} /></div>)}
            </div>
          )}
          <Bands e={e} L={L} />
        </div>
      ) : <div className="nk-hint"><R t={data.hint || L.tilesHint} /></div>}
      <Foot data={data} L={L} />
    </>
  );
}

/* ---------- confusables: each mark beside what it must not be read as ---------- */
function Confusables({ data, L }) {
  const E = (data.entries || []).filter((e) => e.confusedWith);
  const [on, setOn] = useState(null);
  return (
    <>
      <div className="nk-cf">
        {E.map((e, i) => {
          const [head, rest] = headline(e.confusedWith);
          const open = on === i;
          return (
            <div key={e.id || i} className={'nk-box nk-cfc' + (open ? ' on' : '')} role="button" tabIndex={0} aria-expanded={open}
              onClick={() => setOn(open ? null : i)} onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); setOn(open ? null : i); } }}>
              <div className="nk-cf-row">
                <div className="nk-cf-this"><span className="nk-sym"><R t={e.tex} /></span>{e.read && <small><R t={e.read} /></small>}</div>
                <div className="nk-cf-ne">≠<span><R t={L.notThis} /></span></div>
                <div className="nk-cf-not"><span className="nk-lbl"><R t={e.confusedWithLabel || L.confusedWith} /></span><b><R t={head} /></b></div>
                <div className="nk-cf-arrow">{open ? '▴' : '▾'}</div>
              </div>
              {open && (
                <div className="nk-cf-more">
                  <R t={rest || e.confusedWith} />
                  {e.means && <div style={{ marginTop: 8, color: 'var(--nk-muted)' }}><span className="nk-lbl"><R t={L.means} /></span><R t={e.means} /></div>}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="nk-hint"><R t={data.hint || L.confusablesHint} /></div>
      <Foot data={data} L={L} />
    </>
  );
}

/* ---------- cards: symbol on the front, how it is read on the back ---------- */
function Cards({ data, L, O }) {
  const E = data.entries || [];
  const [open, setOpen] = useState({});
  const all = E.length > 0 && E.every((_, i) => open[i]);
  const cols = O.columns ? { gridTemplateColumns: `repeat(${O.columns}, minmax(0, 1fr))` } : undefined;
  return (
    <>
      <div className="nk-cards-top">
        <div className="nk-hint"><R t={data.hint || L.cardsHint} /></div>
        <button type="button" className="nk-btn" onClick={() => setOpen(all ? {} : Object.fromEntries(E.map((_, i) => [i, true])))}><R t={all ? L.hideAll : L.revealAll} /></button>
      </div>
      <div className="nk-cards" style={cols}>
        {E.map((e, i) => (
          <button key={e.id || i} type="button" className={'nk-fc' + (open[i] ? ' on' : '')} aria-expanded={!!open[i]} onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}>
            <div className="nk-fc-front">
              <span className="nk-sym"><R t={e.tex} /></span>
              {!open[i] && <small><R t={L.flip} /></small>}
            </div>
            {open[i] && (
              <div className="nk-fc-back">
                {e.read && <div className="nk-read"><R t={e.read} /></div>}
                <R t={e.means} />
              </div>
            )}
          </button>
        ))}
      </div>
      <Foot data={data} L={L} />
    </>
  );
}

const VIEWS = { tiles: Tiles, confusables: Confusables, cards: Cards };

export default function NotationKey({ data, variant = 'tiles', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = VIEWS[variant] || Tiles;
  // header: data.header, or the NotationSection fields (title, lead)
  const hd = data.header !== undefined ? data.header : { kicker: L.kicker, title: data.title, lede: data.lead };
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="nk-root" style={cssVars(th)}>
        <div className="nk-card">
          {hd && (hd.kicker || hd.title || hd.lede) && (
            <div className="nk-head">
              {hd.kicker && <div className="nk-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="nk-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="nk-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="nk-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
