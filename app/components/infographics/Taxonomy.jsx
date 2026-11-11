/*
  Taxonomy.jsx

  A family of objects split into kinds. Three variants:
    tree    a root, branch conditions, and the types as leaves, each with a sketch
    scale   types ordered by a number (degree, order…); hover or click a step for its description
    facets  types grouped by criterion; hover a type to see what it links to

  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useId, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['tree', 'scale', 'facets'];

export const DEFAULT_LABELS = {
  branchIf: 'if'
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
  onDark: '#ffffff',
  connector: '#c7cedb',
  shadow: 'rgba(37, 99, 235, .1)',
  // sketches
  sketchCurve: '#1e3a8a',
  sketchAxis: '#cbd5e1',
  sketchGuide: '#94a3b8',
  sketchDot: '#ca8a04',
  sketchHole: '#ffffff'
};

export const DEFAULT_OPTIONS = {
  hover: true,
  sketches: true,
  sketchHeight: 58,
  scaleSketchHeight: 50,
  stepMinWidth: 130
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--tx-ink': th.ink, '--tx-title': th.title, '--tx-muted': th.muted, '--tx-line': th.line, '--tx-box': th.box,
  '--tx-panel': th.panel, '--tx-soft': th.soft, '--tx-head': th.headBg, '--tx-navy': th.navy,
  '--tx-blue': th.blue, '--tx-blue-soft': th.blueSoft, '--tx-gold': th.gold, '--tx-gold-bg': th.goldBg,
  '--tx-gold-ink': th.goldInk, '--tx-on-dark': th.onDark, '--tx-conn': th.connector, '--tx-shadow': th.shadow
});

const CSS = `
.tx-root {
  font-family: 'Inter', system-ui, sans-serif; color: var(--tx-ink); line-height: 1.45;
}
.tx-root *, .tx-root *::before, .tx-root *::after { box-sizing: border-box; }
.tx-root .katex { text-transform: none; }
.tx-card { background: var(--tx-panel); border: 1.5px solid var(--tx-box); border-radius: 12px; overflow: hidden; }
.tx-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--tx-box); }
.tx-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--tx-blue); }
.tx-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--tx-title); letter-spacing: -.01em; }
.tx-lede { margin-top: 3px; font-size: 12.5px; color: var(--tx-muted); }
.tx-body { padding: 16px 20px 18px; background: var(--tx-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.tx-box { background: var(--tx-panel); border: 1.5px solid var(--tx-box); border-radius: 10px; }
.tx-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--tx-muted); }
.tx-math { font-family: 'STIX Two Text', serif; }
.tx-note { padding: 10px 14px 12px; border-left: 4px solid var(--tx-blue); font-size: 12.5px; }
.tx-note .tx-lbl { color: var(--tx-blue); margin-bottom: 4px; }
.tx-sketch { display: block; width: 100%; height: auto; }

/* ---------- tree ---------- */
.tx-tree { display: grid; justify-items: center; gap: 0; overflow-x: auto; padding-bottom: 2px; }
.tx-rootnode { padding: 9px 18px; border: 1.5px solid var(--tx-navy); background: var(--tx-navy); color: var(--tx-on-dark); border-radius: 10px; text-align: center; }
.tx-rootnode b { display: block; font-size: 14.5px; }
.tx-rootnode small { font-size: 11.5px; opacity: .85; }
.tx-rootnode .katex { color: inherit; }
.tx-stem { width: 2px; height: 16px; background: var(--tx-conn); }
.tx-branches { display: grid; gap: 14px; width: 100%; position: relative; }
.tx-branch { display: grid; justify-items: stretch; gap: 0; position: relative; }
.tx-branch::before { content: ''; position: absolute; top: -16px; height: 16px; left: 50%; border-left: 2px solid var(--tx-conn); }
.tx-bar { position: absolute; top: -16px; height: 0; border-top: 2px solid var(--tx-conn); }
.tx-cond { justify-self: center; padding: 6px 12px; border: 1.5px dashed var(--tx-blue); border-radius: 999px; background: var(--tx-head); font-size: 12px; color: var(--tx-title); text-align: center; }
.tx-cond b { font: 700 9px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--tx-blue); margin-right: 6px; }
.tx-leaves { display: grid; gap: 10px; margin-top: 16px; position: relative; }
.tx-leaves::before { content: ''; position: absolute; top: -16px; height: 16px; left: 50%; border-left: 2px solid var(--tx-conn); }
.tx-leaf { padding: 8px 10px 10px; display: flex; flex-direction: column; gap: 4px; transition: border-color .15s, box-shadow .15s, opacity .15s; position: relative; }
.tx-hov .tx-leaf { cursor: pointer; }
.tx-hov .tx-leaf:hover, .tx-leaf.on { border-color: var(--tx-blue); box-shadow: 0 2px 10px var(--tx-shadow); }
.tx-leaves.multi .tx-leaf::before { content: ''; position: absolute; top: -10px; left: 50%; height: 10px; border-left: 2px solid var(--tx-conn); }
.tx-leaves.multi { margin-top: 26px; }
.tx-leaves.multi::after { content: ''; position: absolute; top: -10px; border-top: 2px solid var(--tx-conn); left: var(--tx-l, 12%); right: var(--tx-r, 12%); }
.tx-leaves.multi::before { height: 6px; top: -16px; }
.tx-leaf-n { font-size: 13.5px; font-weight: 800; color: var(--tx-title); }
.tx-leaf-c { font-size: 12px; }
.tx-leaf-e { font-size: 11.5px; color: var(--tx-muted); }
.tx-leaf .tx-sketch { background: var(--tx-soft); border-radius: 6px; }

/* ---------- scale ---------- */
.tx-scale { overflow-x: auto; }
.tx-sc { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(var(--tx-step-min, 130px), 1fr); gap: 0; position: relative; min-width: 640px; }
.tx-sc-axis { position: absolute; left: 0; right: 0; top: 30px; height: 2px; background: var(--tx-box); }
.tx-step { display: grid; grid-template-rows: auto auto 1fr; justify-items: center; gap: 6px; padding: 0 5px; position: relative; cursor: pointer; }
.tx-step-k { width: 32px; height: 32px; margin-top: 15px; border-radius: 50%; background: var(--tx-panel); border: 2px solid var(--tx-navy); color: var(--tx-navy); font: 700 13px/28px 'STIX Two Text', serif; text-align: center; position: relative; z-index: 1; transition: background .15s, color .15s; }
.tx-step-k.open { border-style: dashed; border-color: var(--tx-box); color: var(--tx-muted); }
.tx-step:focus-visible { outline: 2px solid var(--tx-blue); outline-offset: 2px; border-radius: 8px; }
.tx-step.on .tx-step-k { background: var(--tx-navy); color: var(--tx-on-dark); }
.tx-step-sup { position: absolute; top: 0; font: 700 8.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--tx-muted); }
.tx-step-n { font-size: 13.5px; font-weight: 800; color: var(--tx-title); text-align: center; }
.tx-step-b { width: 100%; padding: 6px 8px 8px; display: flex; flex-direction: column; gap: 4px; align-items: stretch; transition: border-color .15s; }
.tx-step.on .tx-step-b { border-color: var(--tx-blue); }
.tx-step-f { font-family: 'STIX Two Text', serif; font-size: 13.5px; text-align: center; }
.tx-step-t { font-size: 11.5px; color: var(--tx-muted); text-align: center; }
.tx-step.muted .tx-step-n { color: var(--tx-muted); }
.tx-detail { padding: 10px 14px; border-left: 4px solid var(--tx-blue); font-size: 12.5px; display: grid; gap: 4px; }
.tx-detail .tx-lbl { color: var(--tx-blue); }
.tx-detail .tx-ex { font-family: 'STIX Two Text', serif; font-size: 14.5px; }

/* ---------- facets ---------- */
.tx-facets { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 12px; align-items: start; }
.tx-facet { overflow: hidden; }
.tx-facet-h { padding: 9px 14px; background: var(--tx-head); border-bottom: 1.5px solid var(--tx-box); }
.tx-facet-h .tx-lbl { color: var(--tx-blue); }
.tx-facet-h b { font-size: 13.5px; color: var(--tx-title); }
.tx-type { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 4px 12px; padding: 9px 14px; border-top: 1px solid var(--tx-line); transition: background .15s, opacity .15s; }
.tx-type:first-of-type { border-top: 0; }
.tx-type.on { background: var(--tx-head); }
.tx-type.dim { opacity: .35; }
.tx-type-n { font-size: 13.5px; font-weight: 700; color: var(--tx-title); }
.tx-type-c { font-size: 12px; grid-column: 1; }
.tx-type-x { grid-row: 1 / span 2; grid-column: 2; align-self: center; font-family: 'STIX Two Text', serif; font-size: 16px; color: var(--tx-title); text-align: right; }
.tx-link { grid-column: 1 / -1; display: inline-flex; align-items: center; gap: 6px; font-size: 11.5px; color: var(--tx-gold-ink); justify-self: start; }
.tx-link i { font-style: normal; padding: 1px 6px; border-radius: 4px; background: var(--tx-gold-bg); font: 700 8.5px 'JetBrains Mono', monospace; letter-spacing: .08em; text-transform: uppercase; }

@media (max-width: 680px) {
  .tx-branches, .tx-leaves { grid-template-columns: 1fr !important; }
  .tx-bar, .tx-leaves.multi::after, .tx-leaves.multi .tx-leaf::before { display: none; }
}
`;

/* ---------- small sketch: pieces of functions, holes, dots, asymptotes ---------- */
function Sketch({ s, h, th }) {
  const uid = useId().replace(/:/g, '');
  const w = 140, p = 6;
  const X = (x) => p + (x - s.x0) / (s.x1 - s.x0) * (w - 2 * p);
  const Y = (y) => h - p - (y - s.y0) / (s.y1 - s.y0) * (h - 2 * p);
  const path = (pc) => {
    const n = pc.n || 90, out = [];
    let pen = false;
    for (let i = 0; i <= n; i++) {
      const x = pc.from + (pc.to - pc.from) * i / n, y = pc.f(x);
      if (!isFinite(y) || y > s.y1 + 3 * (s.y1 - s.y0) || y < s.y0 - 3 * (s.y1 - s.y0)) { pen = false; continue; }
      out.push((pen ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Y(y).toFixed(1)); pen = true;
    }
    return out.join(' ');
  };
  return (
    <svg className="tx-sketch" viewBox={`0 0 ${w} ${h}`} role="img">
      <defs><clipPath id={'tx' + uid}><rect x="0" y="0" width={w} height={h} /></clipPath></defs>
      {s.axis !== false && <line x1={p} y1={Y(0)} x2={w - p} y2={Y(0)} stroke={th.sketchAxis} strokeWidth="1" />}
      {(s.vlines || []).map((x, i) => <line key={'v' + i} x1={X(x)} y1={p} x2={X(x)} y2={h - p} stroke={th.sketchGuide} strokeWidth="1" strokeDasharray="3 3" />)}
      <g clipPath={`url(#tx${uid})`}>{s.pieces.map((pc, i) => <path key={i} d={path(pc)} fill="none" stroke={pc.color || th.sketchCurve} strokeWidth="1.8" />)}</g>
      {(s.dots || []).map(([x, y], i) => <circle key={'d' + i} cx={X(x)} cy={Y(y)} r="3" fill={th.sketchDot} />)}
      {(s.holes || []).map(([x, y], i) => <circle key={'h' + i} cx={X(x)} cy={Y(y)} r="3.2" fill={th.sketchHole} stroke={th.sketchCurve} strokeWidth="1.6" />)}
    </svg>
  );
}

/* ---------- tree ---------- */
function Tree({ data, L, O, th }) {
  const [on, setOn] = useState(null);
  const T = data.tree;
  const nb = T.branches.length;
  const total = T.branches.reduce((n, b) => n + b.leaves.length, 0);
  return (
    <>
      <div className={'tx-tree' + (O.hover ? ' tx-hov' : '')}>
        <div className="tx-rootnode"><b><R t={T.root.name} /></b>{T.root.sub && <small><R t={T.root.sub} /></small>}</div>
        <div className="tx-stem" />
        <div className="tx-branches" style={{ gridTemplateColumns: T.branches.map((b) => `${b.leaves.length}fr`).join(' ') }}>
          {nb > 1 && <div className="tx-bar" style={{ left: `${(T.branches[0].leaves.length / 2) / total * 100}%`, right: `${(T.branches[nb - 1].leaves.length / 2) / total * 100}%` }} />}
          {T.branches.map((b, bi) => {
            const k = b.leaves.length;
            return (
              <div key={bi} className="tx-branch">
                {b.condition && <div className="tx-cond"><b><R t={b.label || L.branchIf} /></b><R t={b.condition} /></div>}
                <div className={'tx-leaves' + (k > 1 ? ' multi' : '')} style={{ gridTemplateColumns: `repeat(${k}, minmax(0, 1fr))`, '--tx-l': `${50 / k}%`, '--tx-r': `${50 / k}%` }}>
                  {b.leaves.map((l, li) => {
                    const id = bi + '-' + li;
                    return (
                      <div key={li} className={'tx-box tx-leaf' + (on === id ? ' on' : '')} onMouseEnter={O.hover ? () => setOn(id) : undefined} onMouseLeave={O.hover ? () => setOn(null) : undefined}>
                        <div className="tx-leaf-n"><R t={l.name} /></div>
                        {O.sketches && l.sketch && <Sketch s={l.sketch} h={l.sketch.height || O.sketchHeight} th={th} />}
                        <div className="tx-leaf-c"><R t={l.condition} /></div>
                        {l.example && <div className="tx-leaf-e"><R t={l.example} /></div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {data.note && <div className="tx-box tx-note"><span className="tx-lbl"><R t={data.note.label} /></span><R t={data.note.text} /></div>}
    </>
  );
}

/* ---------- scale ---------- */
function Scale({ data, O, th }) {
  const S = data.scale;
  const [on, setOn] = useState(S.initial != null ? S.initial : 0);
  const cur = S.steps[on];
  return (
    <>
      <div className="tx-scale">
        <div className="tx-sc" style={{ '--tx-step-min': O.stepMinWidth + 'px', minWidth: Math.max(640, S.steps.length * 90) }}>
          <div className="tx-sc-axis" />
          {S.steps.map((st, i) => (
            <div
              key={i}
              className={'tx-step' + (on === i ? ' on' : '') + (st.muted ? ' muted' : '')}
              onMouseEnter={O.hover ? () => setOn(i) : undefined}
              onClick={() => setOn(i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOn(i); } }}
              role="button"
              tabIndex={0}
              aria-pressed={on === i}
            >
              {i === 0 && S.axisLabel && <span className="tx-step-sup"><R t={S.axisLabel} /></span>}
              <div className={'tx-step-k' + (st.open ? ' open' : '')}><R t={st.key} /></div>
              <div className="tx-step-n"><R t={st.name} /></div>
              <div className="tx-box tx-step-b">
                {O.sketches && st.sketch && <Sketch s={st.sketch} h={st.sketch.height || O.scaleSketchHeight} th={th} />}
                {st.form && <div className="tx-step-f"><R t={st.form} /></div>}
                {st.short && <div className="tx-step-t"><R t={st.short} /></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
      {cur && (cur.text || cur.examples) && (
        <div className="tx-box tx-detail">
          <span className="tx-lbl"><R t={cur.name} /></span>
          {cur.text && <div><R t={cur.text} /></div>}
          {cur.examples && <div className="tx-ex"><R t={cur.examples} /></div>}
        </div>
      )}
    </>
  );
}

/* ---------- facets ---------- */
function Facets({ data, O }) {
  const [on, setOn] = useState(null);
  const all = data.facets.flatMap((f) => f.types);
  const linked = on ? new Set([on, ...((all.find((t) => t.id === on) || {}).links || []).map((l) => l.to)]) : null;
  return (
    <>
      <div className="tx-facets">
        {data.facets.map((f, fi) => (
          <div key={fi} className="tx-box tx-facet">
            <div className="tx-facet-h"><span className="tx-lbl"><R t={f.label} /></span><b><R t={f.criterion} /></b></div>
            {f.types.map((t) => (
              <div key={t.id} className={'tx-type' + (linked && linked.has(t.id) ? ' on' : '') + (linked && !linked.has(t.id) ? ' dim' : '')}
                onMouseEnter={O.hover ? () => setOn(t.id) : undefined} onMouseLeave={O.hover ? () => setOn(null) : undefined}>
                <div className="tx-type-n"><R t={t.name} /></div>
                <div className="tx-type-x"><R t={t.example} /></div>
                <div className="tx-type-c"><R t={t.condition} /></div>
                {(t.links || []).map((l, li) => {
                  const target = all.find((x) => x.id === l.to);
                  return <span key={li} className="tx-link"><i><R t={l.label} /></i><R t={target ? target.name : l.to} /></span>;
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
      {data.note && <div className="tx-box tx-note"><span className="tx-lbl"><R t={data.note.label} /></span><R t={data.note.text} /></div>}
    </>
  );
}

const V = { tree: Tree, scale: Scale, facets: Facets };

export default function Taxonomy({ data, variant = 'tree', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = V[variant] || Tree;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="tx-root" style={cssVars(th)}>
        <div className="tx-card">
          {hd && (
            <div className="tx-head">
              {hd.kicker && <div className="tx-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="tx-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="tx-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="tx-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
