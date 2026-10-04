'use client';
// DiagramsExplorer — the gallery of a subject's diagrams: every demonstration
// unit already placed on the subject's pages (drawn figures, frozen tool
// states on content pages, frozen states on the tool pages), each linked to
// the exact section it sits in. Reads one generated artifact
// (app/api/db/repositories/diagrams/<subject>.json, built by
// scripts/build-diagrams.mjs); draws nothing and decides nothing itself.
//
// Views: gallery (uniform thumbnails + lightbox), contact sheet, spotlight,
// shelves, by page. Browsing: chapter/page tree, source filter, search,
// pin two figures and compare. Deep links: #fig=<id>, #view=<view>.
// Docs: DiagramsExplorerDocs.md beside this file.

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import s from './DiagramsExplorer.module.css';

const VIEWS = ['gallery', 'sheet', 'spot', 'shelves', 'pages'];
const VIEW_LABEL = { gallery: 'Gallery', sheet: 'Contact sheet', spot: 'Spotlight', shelves: 'Shelves', pages: 'By page' };
const VIEW_ICON = {
  gallery: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>,
  sheet: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="8" height="6" rx="1.2"/><rect x="13" y="4" width="8" height="6" rx="1.2"/><rect x="3" y="14" width="5" height="6" rx="1.2"/><rect x="10" y="14" width="11" height="6" rx="1.2"/></svg>,
  spot: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="12" rx="1.5"/><rect x="3" y="18" width="4" height="3" rx=".8"/><rect x="10" y="18" width="4" height="3" rx=".8"/><rect x="17" y="18" width="4" height="3" rx=".8"/></svg>,
  shelves: <svg viewBox="0 0 24 24"><path d="M3 8h18M3 16h18"/><rect x="5" y="3" width="4" height="5"/><rect x="11" y="4" width="6" height="4"/><rect x="5" y="11" width="7" height="5"/><rect x="14" y="12" width="4" height="4"/></svg>,
  pages: <svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M9 11h7M9 15h7M9 7h4"/></svg>,
};
const ICON = {
  prev: <svg viewBox="0 0 24 24"><path d="m15 6-6 6 6 6"/></svg>,
  next: <svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>,
  close: <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>,
  pin: <svg viewBox="0 0 24 24"><rect x="3" y="5" width="7.5" height="14" rx="1.5"/><rect x="13.5" y="5" width="7.5" height="14" rx="1.5"/></svg>,
  search: <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  chev: <svg className={s.chev} viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>,
};

/* ---------- helpers ---------- */
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const isTool = it => it.kind !== 'authored';
const title = it => it.caption || it.secTitle;
const srcLabel = it => isTool(it) ? 'State of a visual tool' : 'Drawn for the page';
const aspect = it => { const w = Math.max(...it.dims.map(d => d[0])); const h = it.dims.reduce((a, d) => a + d[1] * (w / d[0]), 0); return w / h; };
const fullText = it => it.text ? (it.href ? `${it.text} <a href="${esc(it.href)}">${esc(it.linkText)}</a>${it.after ?? '.'}` : it.text) : '';
const plainCache = new WeakMap();
const plain = it => { if (!plainCache.has(it)) plainCache.set(it, (it.text || '').replace(/<[^>]+>/g, '').replace(/&#?\w+;/g, ' ') + ' ' + (it.linkText || '')); return plainCache.get(it); };

// One SVG string rendered many times on one page (tile, strip, lightbox, compare)
// must not share element ids: prefix them per instance.
const prepSvg = (svg, p) => svg
  .replace(/\sid="([^"]+)"/g, (m, a) => ` id="${p}-${a}"`)
  .replace(/url\(#([^)]+)\)/g, (m, a) => `url(#${p}-${a})`)
  .replace(/(xlink:href|href)="#([^"]+)"/g, (m, k, a) => `${k}="#${p}-${a}"`)
  .replace(/<svg\b([^>]*)>/, (m, at) => `<svg${at.replace(/\s(width|height|style)="[^"]*"/g, '')} preserveAspectRatio="xMidYMid meet" focusable="false" aria-hidden="true">`);
const svgCache = new Map();
function svgHtml(it, ctx) {
  const key = ctx + '|' + it.id;
  if (!svgCache.has(key)) svgCache.set(key, it.svgs.map((x, k) => prepSvg(x, `${ctx}-${it.id.replace(/[^a-zA-Z0-9_-]/g, '_')}-${k}`)).join(''));
  return svgCache.get(key);
}
// With a className the wrapper is the figure box itself; without one it is
// transparent (display:contents) so the svg is the flex child of its stage.
const Svg = ({ it, ctx, className, style }) => <div className={className} style={className ? style : { display: 'contents', ...(style || {}) }} dangerouslySetInnerHTML={{ __html: svgHtml(it, ctx) }} />;
const Dot = ({ it }) => <span className={`${s.dot} ${isTool(it) ? s.dotTool : s.dotDrawn}`} />;
const Text = ({ it, className }) => it.text ? <p className={className || s.text} dangerouslySetInnerHTML={{ __html: fullText(it) }} /> : null;

/* ---- stable presentational pieces (module level: a component type defined
   inside the explorer would be a new type on every render, and React would
   rebuild all 372 tiles instead of diffing them) ---- */
const Actions = ({ it }) => (
  <div className={s.actions}>
    <a className={s.btnPrimary} href={it.anchor}>Go to this section</a>
    {it.href ? <a className={s.btnGhost} href={it.href}>Open the {it.linkText || 'tool'}</a> : it.toolPage ? <a className={s.btnGhost} href={it.route}>Open the tool</a> : null}
  </div>);
const Pin = ({ it, pinned, onToggle, inline }) => (
  <span className={`${s.pin} ${inline ? s.pinInline : ''}`} role="button" tabIndex={0} aria-pressed={pinned} aria-label="Add to comparison" title="Add to comparison"
    onClick={e => { e.stopPropagation(); onToggle(it.id); }} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onToggle(it.id); } }}>{ICON.pin}</span>);
const Tile = React.memo(function Tile({ it, i, pinned, onToggle, onOpen, style, figStyle, sub }) {
  return (
    <div className={s.tile} role="button" tabIndex={0} aria-label={title(it)} style={style}
      onClick={() => onOpen(i)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(i); } }}>
      <Svg it={it} ctx="t" className={s.fig} style={figStyle} /><Pin it={it} pinned={pinned} onToggle={onToggle} />
      <p className={s.cap}>{title(it)}</p>
      {sub === undefined ? <p className={s.sub}><Dot it={it} />{it.page} › {it.secTitle}</p> : sub}
    </div>);
});

function readHash() {
  if (typeof window === 'undefined') return {};
  const hp = new URLSearchParams(window.location.hash.slice(1));
  return { view: hp.get('view'), fig: hp.get('fig') };
}
function writeHash(parts) {
  if (typeof window === 'undefined') return;
  const q = Object.entries(parts).filter(([, v]) => v).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
  window.history.replaceState(null, '', q ? '#' + q : window.location.pathname + window.location.search);
}

/* ================================================================ */
export default function DiagramsExplorer({ data, subjectLabel }) {
  const D = data;
  const label = subjectLabel || D.$meta.label;
  const [view, setViewState] = useState('gallery');
  const [chapter, setChapter] = useState(null);
  const [page, setPage] = useState(null);
  const [q, setQ] = useState('');
  const [qInput, setQInput] = useState('');
  const [src, setSrc] = useState('all');
  const [cur, setCur] = useState(0);
  const [open, setOpen] = useState(null);
  const [pins, setPins] = useState([]);
  const [compare, setCompare] = useState(false);
  const [expanded, setExpanded] = useState(() => new Set());
  const [sideOpen, setSideOpen] = useState(true);
  const [mainW, setMainW] = useState(0);
  const mainRef = useRef(null);
  const lbRef = useRef(null);
  const cmpRef = useRef(null);
  const lastFocus = useRef(null);
  const started = useRef(false);

  const pagesByRoute = useMemo(() => Object.fromEntries(D.pages.map(p => [p.route, p])), [D]);
  const chapterOf = useCallback(id => D.chapters.find(c => c.id === id), [D]);
  const hasBothKinds = useMemo(() => D.items.some(isTool) && D.items.some(i => !isTool(i)), [D]);

  const list = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return D.items.filter(it =>
      (!chapter || it.chapter === chapter) &&
      (!page || it.route === page) &&
      (src === 'all' || (src === 'tools' ? isTool(it) : !isTool(it))) &&
      (!qq || [title(it), it.page, it.secTitle, plain(it)].join(' ').toLowerCase().includes(qq)));
  }, [D, chapter, page, src, q]);

  const pagesOf = useCallback(chId => {
    const m = new Map();
    D.items.filter(i => i.chapter === chId).forEach(i => { if (!m.has(i.route)) m.set(i.route, { route: i.route, title: i.page, n: 0 }); m.get(i.route).n++; });
    return [...m.values()];
  }, [D]);

  /* ---- start: hash, sidebar, width ---- */
  useEffect(() => {
    if (started.current) return; started.current = true;
    const h = readHash();
    if (h.view && VIEWS.includes(h.view)) setViewState(h.view);
    if (h.fig) { const i = D.items.findIndex(x => x.id === h.fig); if (i >= 0) { setCur(i); setOpen(i); } }
  }, [D]);
  useEffect(() => {
    const mq = window.matchMedia('(max-width:900px)');
    const sync = () => setSideOpen(!mq.matches);
    sync(); mq.addEventListener('change', sync); return () => mq.removeEventListener('change', sync);
  }, []);
  useLayoutEffect(() => {
    const el = mainRef.current; if (!el) return;
    const measure = () => setMainW(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure); ro.observe(el); return () => ro.disconnect();
  }, []);
  useEffect(() => { const t = setTimeout(() => { setQ(qInput); setCur(0); }, 120); return () => clearTimeout(t); }, [qInput]);
  useEffect(() => { document.body.style.overflow = (open !== null || compare) ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open, compare]);
  useEffect(() => { if (open !== null) writeHash({ fig: list[open]?.id }); else writeHash({ view: view === 'gallery' ? null : view }); }, [open, view, list]);
  useEffect(() => { if (open !== null) lbRef.current?.focus({ preventScroll: true }); }, [open]);
  useEffect(() => { if (compare) cmpRef.current?.focus(); }, [compare]);

  const setView = v => { setViewState(VIEWS.includes(v) ? v : 'gallery'); };
  const openRef = useRef(null); openRef.current = open;
  const openLb = useCallback(i => { if (openRef.current === null) lastFocus.current = document.activeElement; setOpen(i); setCur(i); }, []);
  const closeLb = () => { setOpen(null); lastFocus.current?.focus?.({ preventScroll: true }); };
  const step = d => setCur(c => Math.max(0, Math.min(list.length - 1, c + d)));

  /* ---- keyboard ---- */
  useEffect(() => {
    const onKey = e => {
      if (compare) { if (e.key === 'Escape') setCompare(false); return; }
      if (open !== null) {
        if (e.key === 'Escape') closeLb();
        else if (e.key === 'ArrowLeft' && open > 0) openLb(open - 1);
        else if (e.key === 'ArrowRight' && open < list.length - 1) openLb(open + 1);
        else if (e.key === 'Tab' && lbRef.current) {
          const f = [...lbRef.current.querySelectorAll('a,button:not(:disabled)')]; if (!f.length) return;
          if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
          else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
        }
        return;
      }
      if (view === 'spot' && !/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) { if (e.key === 'ArrowLeft') step(-1); else if (e.key === 'ArrowRight') step(1); }
    };
    document.addEventListener('keydown', onKey); return () => document.removeEventListener('keydown', onKey);
  }, [compare, open, view, list, openLb]);

  /* ---- pins ---- */
  const togglePin = useCallback(id => setPins(p => { const i = p.indexOf(id); if (i >= 0) return p.filter(x => x !== id); const n = p.length === 2 ? p.slice(1) : p.slice(); n.push(id); return n; }), []);
  const pinned = useMemo(() => new Set(pins), [pins]);
  const byId = id => D.items.find(x => x.id === id);

  /* ---- tree ---- */
  const onTree = (kind, a, b) => {
    if (kind === 'all') { setChapter(null); setPage(null); }
    else if (kind === 'ch') { if (chapter === a && !page) setExpanded(e => { const n = new Set(e); n.has(a) ? n.delete(a) : n.add(a); return n; }); else { setChapter(a); setPage(null); setExpanded(e => new Set(e).add(a)); } }
    else { setPage(a); setChapter(b); }
    setCur(0);
    const tb = document.getElementById('dx-toolbar'); if (tb) window.scrollTo({ top: tb.offsetTop, behavior: 'smooth' });
  };
  const clearAll = () => { setQInput(''); setQ(''); setSrc('all'); setChapter(null); setPage(null); };

  /* ---- shared bits ---- */
  const pageLink = route => { const p = pagesByRoute[route]; return <a href={route}>{p?.toolPage ? 'Open the tool' : 'Read the page'}</a>; };
  const scopeHead = () => {
    if (page) { const p = pagesByRoute[page]; return <div className={s.scope}><h2>{p?.title || page}</h2>{pageLink(page)}</div>; }
    if (chapter) return <div className={s.scope}><h2>{chapterOf(chapter)?.title}</h2></div>;
    return null;
  };

  /* ---- views ---- */
  const renderGallery = () => <div className={s.ggrid}>{list.map((it, i) => <Tile key={it.id} it={it} i={i} pinned={pinned.has(it.id)} onToggle={togglePin} onOpen={openLb} />)}</div>;
  const renderSheet = () => {
    const W = Math.max(0, mainW - 1), H = W < 640 ? 120 : 168, GAP = 14, MAXH = 250;
    const rows = []; let row = [], sum = 0;
    list.forEach((it, i) => { const a = Math.min(aspect(it), 7); row.push([it, i, a]); sum += a; if (sum * H + GAP * (row.length - 1) >= W) { rows.push([row, Math.min(MAXH, (W - GAP * (row.length - 1)) / sum)]); row = []; sum = 0; } });
    if (row.length) rows.push([row, H]);
    return <div className={s.sheet}>{rows.map(([r, h], k) => <div className={s.jrow} key={k}>{r.map(([it, i, a]) =>
      <Tile key={it.id} it={it} i={i} pinned={pinned.has(it.id)} onToggle={togglePin} onOpen={openLb} style={{ width: Math.floor(a * h) }} figStyle={{ height: Math.round(h) }} sub={<p className={s.sub}><Dot it={it} />{it.page}</p>} />)}</div>)}</div>;
  };
  const stripRef = useRef(null);
  useEffect(() => { if (view !== 'spot' || !stripRef.current) return; const st = stripRef.current, c = st.querySelector('[aria-current="true"]'); if (c) st.scrollLeft = c.offsetLeft - st.clientWidth / 2 + c.clientWidth / 2; }, [view, cur, list]);
  const renderSpot = () => {
    const i = Math.min(cur, list.length - 1), it = list[i];
    return <>
      <div className={s.spot}>
        <Svg it={it} ctx="s" className={s.stage} />
        <div className={s.note}>
          <div className={s.pos}><span>{i + 1} of {list.length}</span><Pin it={it} pinned={pinned.has(it.id)} onToggle={togglePin} inline /></div>
          <h2>{title(it)}</h2>
          <div className={s.src}><Dot it={it} />{srcLabel(it)}</div>
          <Text it={it} />
          <div className={s.origin}><span className={s.lbl}>Appears in</span><p className={s.pg}>{it.page}</p><p className={s.s}>Section: {it.secTitle}</p><Actions it={it} /></div>
          <div className={s.stepper}><button onClick={() => step(-1)} disabled={i === 0}>{ICON.prev}Previous</button><button onClick={() => step(1)} disabled={i === list.length - 1}>Next{ICON.next}</button></div>
        </div>
      </div>
      <p className={s.stripLbl}><span>{page ? pagesByRoute[page]?.title : chapter ? chapterOf(chapter)?.title : 'All diagrams'}</span><span>Arrow keys step through</span></p>
      <div className={s.strip} ref={stripRef}>{list.map((x, k) => <button key={x.id} className={s.stripBtn} style={{ width: Math.round(Math.min(aspect(x), 5) * 64 + 12) }} aria-current={k === i} aria-label={title(x)} onClick={() => setCur(k)} dangerouslySetInnerHTML={{ __html: svgHtml(x, 'p') }} />)}</div>
    </>;
  };
  const groups = useMemo(() => { const g = []; list.forEach((it, i) => { let last = g[g.length - 1]; if (!last || last.route !== it.route) { last = { route: it.route, it, items: [] }; g.push(last); } last.items.push([it, i]); }); return g; }, [list]);
  const renderShelves = () => groups.map(g => <section className={s.shelf} key={g.route}>
    <div><h3>{g.it.page}</h3><p className={s.meta}>{chapterOf(g.it.chapter)?.title}, {g.items.length} {g.items.length === 1 ? 'diagram' : 'diagrams'}</p>{pageLink(g.route)}</div>
    <div className={s.items}>{g.items.map(([it, i]) => <Tile key={it.id} it={it} i={i} pinned={pinned.has(it.id)} onToggle={togglePin} onOpen={openLb} style={{ width: Math.round(Math.min(aspect(it), 3.4) * 116 + 18) }} sub={title(it) === it.secTitle ? null : <p className={s.sec}>in <b>{it.secTitle}</b></p>} />)}</div>
  </section>);
  const renderPages = () => groups.map(g => <section className={s.pgBlock} key={g.route}>
    <div className={s.pgHead}><h3>{g.it.page}</h3>{chapter ? null : <span className={s.ch}>{chapterOf(g.it.chapter)?.title}</span>}{pageLink(g.route)}</div>
    {g.items.map(([it, i]) => <div className={s.entry} key={it.id}>
      <Svg it={it} ctx="g" className={s.plate} />
      <div>
        <p className={s.secLine}>Section <a href={it.anchor}>{it.secTitle}</a></p>
        {it.caption ? <p className={s.cap}>{it.caption}</p> : null}
        {it.text ? <Text it={it} className={s.text} /> : <p style={{ color: 'var(--muted)' }}>Figure for this section.</p>}
      </div>
      <span style={{ display: 'none' }} />
    </div>)}
  </section>);
  // the by-page plate opens the lightbox
  const onMainClick = e => {
    if (e.target.closest('a')) return;
    const pl = e.target.closest(`.${s.plate}`); if (pl) { const idx = [...mainRef.current.querySelectorAll(`.${s.plate}`)].indexOf(pl); const flat = groups.flatMap(g => g.items); if (flat[idx]) openLb(flat[idx][1]); }
  };

  const lbItem = open !== null ? list[open] : null;
  const filmRef = useRef(null);
  useEffect(() => { if (!filmRef.current) return; const f = filmRef.current, c = f.querySelector('[aria-current="true"]'); if (c) f.scrollLeft = c.offsetLeft - f.clientWidth / 2 + c.clientWidth / 2; }, [open]);

  return (
    <div className={s.root}>
      <p className={s.lede}>Every diagram used on the {label.toLowerCase()} pages, in one place: <strong>{D.items.length} diagrams from {D.pages.length} pages</strong>. Open one to read its explanation and jump to the exact section where it appears.</p>

      <div className={s.toolbar} id="dx-toolbar">
        <div className={s.toolbarIn}>
          <label className={s.search}>{ICON.search}<input type="search" value={qInput} onChange={e => setQInput(e.target.value)} placeholder="Search captions, pages and sections" aria-label="Search diagrams" /></label>
          {hasBothKinds && <div className={s.seg} role="group" aria-label="Source">
            {[['all', 'All'], ['tools', 'From tools'], ['authored', 'Drawn for the page']].map(([k, l]) => <button key={k} aria-pressed={src === k} onClick={() => { setSrc(k); setCur(0); }}>{k === 'tools' ? <span className={`${s.dot} ${s.dotTool}`} /> : k === 'authored' ? <span className={`${s.dot} ${s.dotDrawn}`} /> : null}{l}</button>)}
          </div>}
          <div className={`${s.seg} ${s.views}`} role="group" aria-label="View">
            {VIEWS.map(v => <button key={v} aria-pressed={view === v} title={VIEW_LABEL[v]} onClick={() => setView(v)}>{VIEW_ICON[v]}<span>{VIEW_LABEL[v]}</span></button>)}
          </div>
          <div className={s.count}><b>{list.length}</b> of {D.items.length}</div>
        </div>
      </div>

      <div className={s.wrap}>
        <nav className={s.side} aria-label="Chapters and pages">
          <details open={sideOpen} onToggle={e => setSideOpen(e.target.open)}>
            <summary><h2>Browse by page</h2></summary>
            <ul className={s.tree}>
              <li><button className={!chapter ? s.on : ''} onClick={() => onTree('all')}>All diagrams<span className={s.n}>{D.items.length}</span></button></li>
              {D.chapters.map(c => { const ps = pagesOf(c.id); if (!ps.length) return null; const n = ps.reduce((a, p) => a + p.n, 0), isOpen = expanded.has(c.id);
                return <li key={c.id} className={isOpen ? s.open : ''}>
                  <button className={chapter === c.id && !page ? s.on : ''} aria-expanded={isOpen} onClick={() => onTree('ch', c.id)}>{ICON.chev}{c.title}<span className={s.n}>{n}</span></button>
                  <ul>{ps.map(p => <li key={p.route}><button className={page === p.route ? s.on : ''} onClick={() => onTree('pg', p.route, c.id)}>{p.title}<span className={s.n}>{p.n}</span></button></li>)}</ul>
                </li>; })}
            </ul>
            <div className={s.legend}><div><span className={`${s.dot} ${s.dotTool}`} />A state of a visual tool</div><div><span className={`${s.dot} ${s.dotDrawn}`} />A figure drawn for the page</div></div>
          </details>
        </nav>

        <main ref={mainRef} onClick={onMainClick}>
          {scopeHead()}
          {!list.length
            ? <div className={s.empty}><b>No diagrams match {q ? `“${q}”` : 'these filters'}</b>Search covers captions, explanations, page and section names.<br /><button onClick={clearAll}>Clear filters</button></div>
            : view === 'gallery' ? renderGallery() : view === 'sheet' ? renderSheet() : view === 'spot' ? renderSpot() : view === 'shelves' ? renderShelves() : renderPages()}
        </main>
      </div>

      {lbItem && <div className={s.lb} role="dialog" aria-modal="true" aria-labelledby="dx-lb-title" onClick={e => { if (e.target === e.currentTarget) closeLb(); }}>
        <div className={s.lbBox} ref={lbRef} tabIndex={-1}>
          <div className={s.lbStage}>
            <Svg it={lbItem} ctx="l" />
            <button className={`${s.lbNav} ${s.lbPrev}`} aria-label="Previous" disabled={open === 0} onClick={() => openLb(open - 1)}>{ICON.prev}</button>
            <button className={`${s.lbNav} ${s.lbNext}`} aria-label="Next" disabled={open === list.length - 1} onClick={() => openLb(open + 1)}>{ICON.next}</button>
          </div>
          <div className={s.lbSide}>
            <div className={s.lbTop}><span>{open + 1} of {list.length}</span><button className={s.x} aria-label="Close" onClick={closeLb}>{ICON.close}</button></div>
            <h2 id="dx-lb-title">{title(lbItem)}</h2>
            <div className={s.src}><Dot it={lbItem} />{srcLabel(lbItem)}</div>
            <Text it={lbItem} />
            <div className={s.origin}><span className={s.lbl}>Appears in</span><p className={s.pg}>{lbItem.page}</p><p className={s.s}>Section: {lbItem.secTitle}</p><Actions it={lbItem} /></div>
            <div className={s.kbd}>Arrow keys move between figures, Esc closes</div>
          </div>
          <div className={s.lbFoot}><div className={s.film} ref={filmRef}>{list.map((x, k) => <button key={x.id} className={s.filmBtn} style={{ width: Math.round(Math.min(aspect(x), 4) * 56 + 10) }} aria-current={k === open} aria-label={title(x)} onClick={() => openLb(k)} dangerouslySetInnerHTML={{ __html: svgHtml(x, 'f') }} />)}</div></div>
        </div>
      </div>}

      <div className={`${s.tray} ${pins.length ? s.trayOn : ''}`} aria-live="polite">
        <div className={s.slots}>{[0, 1].map(k => { const it = pins[k] && byId(pins[k]); return it
          ? <div key={k} className={`${s.slot} ${s.slotFull}`} title={title(it)}><Svg it={it} ctx="y" /><button className={s.rm} aria-label="Remove" onClick={() => togglePin(it.id)}>×</button></div>
          : <div key={k} className={s.slot}>Pick one more</div>; })}</div>
        <span className={s.msg}>{pins.length === 2 ? 'Ready to compare' : '1 of 2 selected'}</span>
        <button className={s.btnPrimary} disabled={pins.length < 2} onClick={() => setCompare(true)}>Compare</button>
        <button className={s.clear} onClick={() => setPins([])}>Clear</button>
      </div>

      {compare && <div className={s.overlay} role="dialog" aria-modal="true" aria-labelledby="dx-cmp-title" onClick={e => { if (e.target === e.currentTarget) setCompare(false); }}>
        <div className={s.cmp} ref={cmpRef} tabIndex={-1}>
          <div className={s.cmpHead}><h2 id="dx-cmp-title">Side by side</h2><button className={s.x} aria-label="Close" onClick={() => setCompare(false)}>{ICON.close}</button></div>
          <div className={s.cmpBody}>{pins.map(byId).filter(Boolean).map(it => <div className={s.cmpCol} key={it.id}>
            <Svg it={it} ctx="c" className={s.stage} />
            <div className={s.info}><h3>{title(it)}</h3><div className={s.where}>{it.page}, section {it.secTitle}</div><Text it={it} /><div className={s.actions}><a className={s.btnPrimary} href={it.anchor}>Go to this section</a></div></div>
          </div>)}</div>
        </div>
      </div>}
    </div>
  );
}
