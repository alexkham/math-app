/*
  ConceptMap.jsx

  How concepts relate. Three variants:
    graph  concepts as nodes, typed relations as edges; hover, click, filter by relation
    path   what a page builds on, and where it leads
    hub    one concept and its related concepts, grouped

  Labels, relation kinds, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['graph', 'path', 'hub'];

export const DEFAULT_LABELS = {
  hint: 'Click a concept to see how it connects. Hover to trace its links; click a line type to hide it.',
  buildsOn: 'Builds on',
  leadsTo: 'Leads to'
};

export const DEFAULT_KINDS = {
  special: { label: 'special case', color: '#1e3a8a', dash: '' },
  limit: { label: 'limit', color: '#2563eb', dash: '6 4' },
  approx: { label: 'approximation', color: '#ca8a04', dash: '2 4' },
  link: { label: 'connected', color: '#64748b', dash: '' }
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
  onDark: '#ffffff',
  link: '#2563eb',
  shadow: 'rgba(37, 99, 235, .14)',
  arrow: '#c7cedb'
};

export const DEFAULT_OPTIONS = {
  hover: true,
  select: true,
  legend: true,
  filter: true,
  counts: true,
  height: 460,
  minWidth: 760,
  nodeWidth: 150,
  nodeHeight: 34
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--cm-ink': th.ink, '--cm-title': th.title, '--cm-muted': th.muted, '--cm-line': th.line, '--cm-box': th.box,
  '--cm-panel': th.panel, '--cm-soft': th.soft, '--cm-head': th.headBg, '--cm-navy': th.navy,
  '--cm-blue': th.blue, '--cm-blue-soft': th.blueSoft, '--cm-on-dark': th.onDark, '--cm-link': th.link,
  '--cm-shadow': th.shadow, '--cm-arrow': th.arrow
});

const CSS = `
.cm-root {
  font-family: 'Inter', system-ui, sans-serif; color: var(--cm-ink); line-height: 1.45;
}
.cm-root *, .cm-root *::before, .cm-root *::after { box-sizing: border-box; }
.cm-root .katex { text-transform: none; }
.cm-card { background: var(--cm-panel); border: 1.5px solid var(--cm-box); border-radius: 12px; overflow: hidden; }
.cm-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--cm-box); }
.cm-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--cm-blue); }
.cm-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--cm-title); letter-spacing: -.01em; }
.cm-lede { margin-top: 3px; font-size: 12.5px; color: var(--cm-muted); }
.cm-body { padding: 16px 20px 18px; background: var(--cm-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.cm-box { background: var(--cm-panel); border: 1.5px solid var(--cm-box); border-radius: 10px; }
.cm-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--cm-muted); }
.cm-a { color: var(--cm-link); font-weight: 600; text-decoration: none; }
.cm-a:hover { text-decoration: underline; }

/* ---------- graph ---------- */
.cm-legend { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
.cm-chip { display: inline-flex; align-items: center; gap: 7px; padding: 3px 10px; border-radius: 999px; border: 1.5px solid var(--cm-box); background: var(--cm-panel); font: 600 11.5px 'Inter', sans-serif; color: var(--cm-ink); }
.cm-chip.cm-can { cursor: pointer; }
.cm-chip.off { opacity: .4; }
.cm-chip svg { display: block; }
.cm-gw { overflow-x: auto; }
.cm-g { position: relative; }
.cm-g svg.cm-edges { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.cm-band { position: absolute; top: 0; bottom: 0; border-radius: 10px; }
.cm-band span { position: absolute; top: 6px; left: 10px; font: 700 9px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--cm-muted); }
.cm-node { position: absolute; transform: translate(-50%, -50%); padding: 6px 12px; border-radius: 9px; background: var(--cm-panel); border: 1.5px solid var(--cm-box); font-size: 13px; font-weight: 700; color: var(--cm-title); white-space: nowrap; transition: opacity .15s, border-color .15s, background .15s, box-shadow .15s; z-index: 2; }
.cm-click .cm-node { cursor: pointer; }
.cm-node:focus-visible, .cm-chip:focus-visible { outline: 2px solid var(--cm-blue); outline-offset: 2px; }
.cm-node:hover, .cm-node.on { border-color: var(--cm-blue); box-shadow: 0 2px 10px var(--cm-shadow); }
.cm-node.sel { background: var(--cm-navy); border-color: var(--cm-navy); color: var(--cm-on-dark); }
.cm-node.dim { opacity: .3; }
.cm-elbl { position: absolute; transform: translate(-50%, -50%); font-size: 10.5px; padding: 0 5px; border-radius: 4px; background: var(--cm-soft); white-space: nowrap; z-index: 1; transition: opacity .15s; font-family: 'STIX Two Text', serif; }
.cm-elbl.dim { opacity: .2; }
.cm-detail { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr); gap: 0; overflow: hidden; }
.cm-detail > div { padding: 10px 14px; }
.cm-detail > div + div { border-left: 1px solid var(--cm-line); }
.cm-detail-n { font-size: 15px; font-weight: 800; color: var(--cm-title); }
.cm-detail-t { font-size: 12.5px; margin-top: 2px; }
.cm-rel { display: grid; gap: 4px; font-size: 12px; }
.cm-rel div { display: flex; gap: 8px; align-items: baseline; }
.cm-rel i { font-style: normal; flex: none; font: 700 8.5px 'JetBrains Mono', monospace; letter-spacing: .08em; text-transform: uppercase; padding: 1px 6px; border-radius: 4px; color: var(--cm-on-dark); }
.cm-hint { font-size: 12px; color: var(--cm-muted); padding: 10px 14px; }

/* ---------- path ---------- */
.cm-path { display: grid; grid-template-columns: minmax(0, 1fr) 46px minmax(0, 1.1fr) 46px minmax(0, 1fr); align-items: center; }
.cm-col { display: grid; gap: 8px; }
.cm-col > .cm-lbl { margin-bottom: 2px; }
.cm-pn { padding: 8px 12px; transition: border-color .15s, background .15s, opacity .15s; }
.cm-pn:hover { border-color: var(--cm-blue); background: var(--cm-head); }
.cm-pn-n { font-size: 13px; }
.cm-pn-w { font-size: 11.5px; color: var(--cm-muted); margin-top: 1px; }
.cm-target { padding: 14px 16px; border: 2px solid var(--cm-navy); text-align: center; }
.cm-target .cm-lbl { color: var(--cm-blue); }
.cm-target b { display: block; font-size: 17px; color: var(--cm-title); margin: 2px 0 4px; }
.cm-target .cm-t { font-size: 12.5px; }
.cm-target .cm-f { font-family: 'STIX Two Text', serif; font-size: 15px; margin-top: 6px; }
.cm-arr { position: relative; height: 100%; min-height: 40px; }
.cm-arr::before { content: ''; position: absolute; left: 6px; right: 10px; top: 50%; border-top: 2px solid var(--cm-arrow); }
.cm-arr::after { content: ''; position: absolute; right: 4px; top: calc(50% - 5px); border-left: 8px solid var(--cm-arrow); border-top: 5px solid transparent; border-bottom: 5px solid transparent; }

/* ---------- hub ---------- */
.cm-hub { position: relative; }
.cm-hub-c { display: flex; justify-content: center; margin-bottom: 14px; }
.cm-hub-core { padding: 10px 22px; border-radius: 999px; background: var(--cm-navy); color: var(--cm-on-dark); text-align: center; }
.cm-hub-core b { font-size: 16px; }
.cm-hub-core small { display: block; font-size: 11.5px; opacity: .85; }
.cm-groups { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 10px; }
.cm-grp { overflow: hidden; transition: opacity .15s, border-color .15s; }
.cm-grp.dim { opacity: .35; }
.cm-grp.on { border-color: var(--cm-blue); }
.cm-grp-h { padding: 7px 12px; background: var(--cm-head); border-bottom: 1.5px solid var(--cm-box); display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
.cm-grp-h b { font-size: 12.5px; color: var(--cm-title); }
.cm-grp-h small { font: 600 10px 'JetBrains Mono', monospace; color: var(--cm-muted); }
.cm-it { padding: 7px 12px; border-top: 1px solid var(--cm-line); font-size: 12px; }
.cm-it:first-of-type { border-top: 0; }
.cm-it-n { font-size: 12.5px; }
.cm-it-w { color: var(--cm-muted); }
.cm-hub-say { font-size: 12px; color: var(--cm-muted); padding: 6px 12px 8px; border-top: 1px dashed var(--cm-line); background: var(--cm-soft); }

@media (max-width: 680px) {
  .cm-path { grid-template-columns: 1fr; }
  .cm-arr { min-height: 26px; }
  .cm-arr::before { left: 50%; right: auto; top: 2px; bottom: 8px; border-top: 0; border-left: 2px solid var(--cm-arrow); }
  .cm-arr::after { right: auto; left: calc(50% - 4px); top: auto; bottom: 2px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 8px solid var(--cm-arrow); border-bottom: 0; }
  .cm-detail { grid-template-columns: 1fr; }
  .cm-detail > div + div { border-left: 0; border-top: 1px solid var(--cm-line); }
}
`;

const Link = ({ href, children }) => (href ? <a className="cm-a" href={href}>{children}</a> : <span>{children}</span>);

/* ---------- graph: nodes placed on a grid, typed edges ---------- */
function Graph({ data, L, O, kinds: kindsIn }) {
  const G = data.graph;
  const kinds = { ...kindsIn, ...(G.kinds || {}) };
  const W = 1000, H = G.height || O.height;
  const cols = G.cols, rows = G.rows;
  const P = (n) => ({ x: (n.x + 0.5) / cols * W, y: (n.y + 0.5) / rows * H });
  const byId = Object.fromEntries(G.nodes.map((n) => [n.id, n]));
  const [hover, setHover] = useState(null);
  const [sel, setSel] = useState(null);
  const [off, setOff] = useState({});
  const edges = G.edges.filter((e) => !off[e.kind]);
  const focus = hover || sel;
  const near = focus ? new Set([focus, ...edges.filter((e) => e.from === focus || e.to === focus).flatMap((e) => [e.from, e.to])]) : null;
  const nw = G.nodeWidth || O.nodeWidth, nh = G.nodeHeight || O.nodeHeight;
  const clip = (a, b) => {
    const dx = b.x - a.x, dy = b.y - a.y;
    const t = Math.min(Math.abs((nw / 2 + 6) / (dx || 1e-9)), Math.abs((nh / 2 + 8) / (dy || 1e-9)));
    return { x: a.x + dx * t, y: a.y + dy * t };
  };
  const s = sel ? byId[sel] : null;
  const rels = s ? G.edges.filter((e) => e.from === sel || e.to === sel) : [];
  return (
    <>
      {O.legend && (
      <div className="cm-legend">
        {Object.entries(kinds).filter(([k]) => G.edges.some((e) => e.kind === k)).map(([k, v]) => (
          <button key={k} type="button" className={'cm-chip' + (O.filter ? ' cm-can' : '') + (off[k] ? ' off' : '')} aria-pressed={O.filter ? !off[k] : undefined} disabled={!O.filter} onClick={() => setOff((o) => ({ ...o, [k]: !o[k] }))}>
            <svg width="26" height="8"><line x1="1" y1="4" x2="25" y2="4" stroke={v.color} strokeWidth="2" strokeDasharray={v.dash} /></svg><R t={v.label} />
          </button>
        ))}
      </div>
      )}
      <div className="cm-box cm-gw">
        <div className={'cm-g' + (O.select ? ' cm-click' : '')} style={{ aspectRatio: `${W} / ${H}`, minWidth: G.minWidth || O.minWidth }}>
          {(G.bands || []).map((b, i) => (
            <div key={i} className="cm-band" style={{ left: `${b.from / cols * 100}%`, width: `${(b.to - b.from) / cols * 100}%`, background: b.color || 'transparent' }}><span><R t={b.label} /></span></div>
          ))}
          <svg className="cm-edges" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
            <defs>
              {Object.entries(kinds).map(([k, v]) => (
                <marker key={k} id={'cm-ar-' + k} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill={v.color} /></marker>
              ))}
            </defs>
            {edges.map((e, i) => {
              const a = P(byId[e.from]), b = P(byId[e.to]);
              const p1 = clip(a, b), p2 = clip(b, a);
              const k = kinds[e.kind] || kinds.link;
              const dim = near && !(near.has(e.from) && near.has(e.to) && (e.from === focus || e.to === focus));
              return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={k.color} strokeWidth="2" strokeDasharray={k.dash} markerEnd={`url(#cm-ar-${e.kind})`} opacity={dim ? 0.15 : 1} />;
            })}
          </svg>
          {edges.filter((e) => e.label).map((e, i) => {
            const a = P(byId[e.from]), b = P(byId[e.to]);
            const dim = near && !(e.from === focus || e.to === focus);
            const k = kinds[e.kind] || kinds.link;
            return <div key={i} className={'cm-elbl' + (dim ? ' dim' : '')} style={{ left: `${(a.x + b.x) / 2 / W * 100}%`, top: `${(a.y + b.y) / 2 / H * 100}%`, color: k.color }}><R t={e.label} /></div>;
          })}
          {G.nodes.map((n) => {
            const p = P(n);
            return (
              <div key={n.id} className={'cm-node' + (sel === n.id ? ' sel' : '') + (hover === n.id ? ' on' : '') + (near && !near.has(n.id) ? ' dim' : '')}
                style={{ left: `${p.x / W * 100}%`, top: `${p.y / H * 100}%` }}
                onMouseEnter={O.hover ? () => setHover(n.id) : undefined} onMouseLeave={O.hover ? () => setHover(null) : undefined}
                onClick={O.select ? () => setSel(sel === n.id ? null : n.id) : undefined}
                role={O.select ? 'button' : undefined} tabIndex={O.select ? 0 : undefined} aria-pressed={O.select ? sel === n.id : undefined}
                onKeyDown={O.select ? (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); setSel(sel === n.id ? null : n.id); } } : undefined}>
                <R t={n.name} />
              </div>
            );
          })}
        </div>
      </div>
      {O.select && (
      <div className="cm-box">
        {s ? (
          <div className="cm-detail">
            <div><div className="cm-detail-n"><Link href={s.href}><R t={s.name} /></Link></div>{s.text && <div className="cm-detail-t"><R t={s.text} /></div>}</div>
            <div className="cm-rel">
              {rels.map((e, i) => {
                const k = kinds[e.kind] || kinds.link;
                return <div key={i}><i style={{ background: k.color }}><R t={k.label} /></i><span><b><R t={byId[e.from].name} /></b> {'→'} <b><R t={byId[e.to].name} /></b>{e.text && <>: <R t={e.text} /></>}</span></div>;
              })}
            </div>
          </div>
        ) : <div className="cm-hint"><R t={G.hint || L.hint} /></div>}
      </div>
      )}
    </>
  );
}

/* ---------- path: what it builds on, what it leads to ---------- */
function Path({ data, L }) {
  const P = data.path;
  const Col = ({ label, items }) => (
    <div className="cm-col">
      <span className="cm-lbl"><R t={label} /></span>
      {items.map((x, i) => (
        <div key={i} className="cm-box cm-pn">
          <div className="cm-pn-n"><Link href={x.href}><R t={x.name} /></Link></div>
          {x.why && <div className="cm-pn-w"><R t={x.why} /></div>}
        </div>
      ))}
    </div>
  );
  return (
    <div className="cm-path">
      <Col label={P.beforeLabel || L.buildsOn} items={P.before || []} />
      <div className="cm-arr" />
      <div className="cm-box cm-target">
        {P.target.kicker && <span className="cm-lbl"><R t={P.target.kicker} /></span>}
        <b><R t={P.target.name} /></b>
        {P.target.text && <div className="cm-t"><R t={P.target.text} /></div>}
        {P.target.formula && <div className="cm-f"><R t={P.target.formula} /></div>}
      </div>
      <div className="cm-arr" />
      <Col label={P.afterLabel || L.leadsTo} items={P.after || []} />
    </div>
  );
}

/* ---------- hub: related concepts around one centre ---------- */
function Hub({ data, O }) {
  const H = data.hub;
  const [on, setOn] = useState(null);
  return (
    <div className="cm-hub">
      <div className="cm-hub-c"><div className="cm-hub-core"><b><R t={H.center.name} /></b>{H.center.sub && <small><R t={H.center.sub} /></small>}</div></div>
      <div className="cm-groups">
        {H.groups.map((g, i) => (
          <div key={i} className={'cm-box cm-grp' + (on === i ? ' on' : '') + (on != null && on !== i ? ' dim' : '')} onMouseEnter={O.hover ? () => setOn(i) : undefined} onMouseLeave={O.hover ? () => setOn(null) : undefined}>
            <div className="cm-grp-h"><b><R t={g.name} /></b>{O.counts && <small>{g.items.length}</small>}</div>
            {g.items.map((x, j) => (
              <div key={j} className="cm-it"><span className="cm-it-n"><Link href={x.href}><R t={x.name} /></Link></span>{x.why && <span className="cm-it-w"> — <R t={x.why} /></span>}</div>
            ))}
            {g.say && <div className="cm-hub-say"><R t={g.say} /></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

const V = { graph: Graph, path: Path, hub: Hub };

export default function ConceptMap({ data, variant = 'graph', labels, theme, options, kinds }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const K = { ...DEFAULT_KINDS, ...(kinds || {}), ...(data.kinds || {}) };
  const View = V[variant] || Graph;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cm-root" style={cssVars(th)}>
        <div className="cm-card">
          {hd && (
            <div className="cm-head">
              {hd.kicker && <div className="cm-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="cm-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="cm-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="cm-body"><View data={data} L={L} O={O} th={th} kinds={K} /></div>
        </div>
      </div>
    </>
  );
}
