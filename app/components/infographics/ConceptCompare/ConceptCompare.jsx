/*
  ConceptCompare.jsx

  Two or more related concepts compared. Five variants:
    versus    two concepts, mirrored; the aspect sits on the spine between them
    table     three or more concepts; values shared with another column are marked
    when      when to use which, by area, with an optional workflow
    bridge    two sides joined by the formula that converts one into the other
    confused  an often-confused pair, ending in what separates them

  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['versus', 'table', 'when', 'bridge', 'confused'];

export const DEFAULT_LABELS = {
  vs: 'VS',
  aspect: 'Aspect',
  together: 'Together',
  sameHint: 'shared with another column',
  focusHint: 'Click a heading to follow one column',
  use: 'Use',
  for: 'for',
  useFor: 'Use for',
  verdict: 'Not both'
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
  areaA: '#c7d7fe',
  areaB: '#dbeafe'
};

export const DEFAULT_OPTIONS = {
  hover: true,
  markSame: true,
  columnFocus: true,
  hint: true,
  verdictMark: '≠',
  flowArrow: '→'
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--cc-ink': th.ink, '--cc-title': th.title, '--cc-muted': th.muted, '--cc-line': th.line, '--cc-box': th.box,
  '--cc-panel': th.panel, '--cc-soft': th.soft, '--cc-head': th.headBg, '--cc-navy': th.navy,
  '--cc-blue': th.blue, '--cc-blue-soft': th.blueSoft, '--cc-gold': th.gold, '--cc-gold-bg': th.goldBg,
  '--cc-gold-ink': th.goldInk, '--cc-slate': th.slate, '--cc-slate-bg': th.slateBg
});

const CSS = `
.cc-root { font-family: 'Inter', system-ui, sans-serif; color: var(--cc-ink); line-height: 1.45; }
.cc-root *, .cc-root *::before, .cc-root *::after { box-sizing: border-box; }
.cc-root .katex { text-transform: none; }
.cc-card { background: var(--cc-panel); border: 1.5px solid var(--cc-box); border-radius: 12px; overflow: hidden; }
.cc-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--cc-box); }
.cc-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--cc-blue); }
.cc-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--cc-title); letter-spacing: -.01em; }
.cc-lede { margin-top: 3px; font-size: 12.5px; color: var(--cc-muted); }
.cc-body { padding: 16px 20px 18px; background: var(--cc-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.cc-box { background: var(--cc-panel); border: 1.5px solid var(--cc-box); border-radius: 10px; }
.cc-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--cc-muted); margin-bottom: 4px; }
.cc-name { font-size: 15px; font-weight: 800; color: var(--cc-title); }
.cc-sym { font-family: 'STIX Two Text', serif; font-size: 15px; color: var(--cc-muted); margin-left: 6px; }
.cc-note { padding: 10px 14px 12px; border-left: 4px solid var(--cc-blue); font-size: 12.5px; }
.cc-note .cc-lbl { color: var(--cc-blue); }

/* ---------- versus ---------- */
.cc-vs { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); border: 1.5px solid var(--cc-box); border-radius: 10px; background: var(--cc-panel); overflow: hidden; }
.cc-vs-h { padding: 10px 14px; background: var(--cc-head); border-bottom: 1.5px solid var(--cc-box); }
.cc-vs-h.l { text-align: right; border-top: 4px solid var(--cc-navy); }
.cc-vs-h.r { border-top: 4px solid var(--cc-blue); }
.cc-vs-h.m { display: flex; align-items: center; justify-content: center; border-top: 4px solid var(--cc-box); padding: 0 10px; }
.cc-vs-badge { width: 30px; height: 30px; border-radius: 50%; background: var(--cc-navy); color: #fff; font: 800 11px/30px 'JetBrains Mono', monospace; text-align: center; }
.cc-vs-c { padding: 8px 14px; font-size: 13px; border-top: 1px solid var(--cc-line); display: flex; align-items: center; transition: background .15s; }
.cc-vs-c.l { justify-content: flex-end; text-align: right; }
.cc-vs-a { padding: 8px 10px; border-top: 1px solid var(--cc-line); border-left: 1.5px solid var(--cc-box); border-right: 1.5px solid var(--cc-box); background: var(--cc-soft); display: flex; align-items: center; justify-content: center; text-align: center; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--cc-muted); min-width: 110px; transition: background .15s, color .15s; }
.cc-first { border-top: 0 !important; }
.cc-vs .cc-hl { background: var(--cc-head); }
.cc-vs .cc-vs-a.cc-hl { background: var(--cc-blue-soft); color: var(--cc-title); }

/* ---------- table ---------- */
.cc-twrap { position: relative; overflow-x: auto; background: var(--cc-panel); border: 1.5px solid var(--cc-box); border-radius: 10px; }
.cc-t { width: 100%; border-collapse: collapse; }
.cc-t th { padding: 9px 12px; background: var(--cc-head); border-bottom: 1.5px solid var(--cc-box); text-align: left; transition: background .15s; }
.cc-t th.cc-click { cursor: pointer; }
.cc-t th.cc-click:focus-visible { outline: 2px solid var(--cc-blue); outline-offset: -2px; }
.cc-t th.cc-corner { cursor: default; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--cc-muted); }
.cc-t th .cc-name { font-size: 14px; }
.cc-t td { padding: 8px 12px; border-top: 1px solid var(--cc-line); font-size: 13px; vertical-align: top; transition: background .15s, opacity .15s; }
.cc-t td + td, .cc-t th + th { border-left: 1px solid var(--cc-line); }
.cc-t td.cc-rl { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--cc-muted); white-space: nowrap; padding-top: 10px; }
.cc-t td.cc-same { color: var(--cc-muted); }
.cc-t td.cc-same::before { content: '='; display: inline-block; width: 14px; height: 14px; margin-right: 6px; border-radius: 3px; background: var(--cc-slate-bg); color: var(--cc-slate); font: 700 10px/14px 'JetBrains Mono', monospace; text-align: center; vertical-align: 1px; }
.cc-t .cc-col { background: var(--cc-head); }
.cc-t th.cc-col { background: var(--cc-blue-soft); }
.cc-thint { display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; font-size: 11.5px; color: var(--cc-muted); }
.cc-thint i { font-style: normal; display: inline-block; width: 14px; height: 14px; border-radius: 3px; background: var(--cc-slate-bg); color: var(--cc-slate); font: 700 10px/14px 'JetBrains Mono', monospace; text-align: center; margin-right: 5px; }

/* ---------- when ---------- */
.cc-when { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.cc-use { padding: 10px 14px 12px; }
.cc-use.a { border-top: 4px solid var(--cc-navy); }
.cc-use.b { border-top: 4px solid var(--cc-blue); }
.cc-use-h { display: flex; align-items: baseline; gap: 8px; margin-bottom: 8px; }
.cc-use-h .cc-lbl { margin: 0; }
.cc-cases { display: grid; gap: 6px; }
.cc-case { display: grid; grid-template-columns: 96px minmax(0, 1fr); gap: 10px; align-items: baseline; padding: 6px 8px; border: 1.5px solid var(--cc-line); border-radius: 8px; font-size: 12.5px; }
.cc-case b { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .08em; text-transform: uppercase; color: var(--cc-title); }
.cc-case.cc-plain { grid-template-columns: minmax(0, 1fr); }
.cc-flow { display: flex; align-items: stretch; gap: 0; flex-wrap: wrap; }
.cc-flow-s { flex: 1 1 140px; padding: 8px 12px; font-size: 12.5px; background: var(--cc-panel); border: 1.5px solid var(--cc-box); border-radius: 8px; position: relative; }
.cc-flow-s .cc-lbl { color: var(--cc-blue); }
.cc-flow-a { display: flex; align-items: center; padding: 0 6px; color: var(--cc-blue); font-weight: 700; }

/* ---------- bridge ---------- */
.cc-br { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr) minmax(0, 1fr); align-items: center; }
.cc-side { padding: 12px 14px; }
.cc-side.a { border-top: 4px solid var(--cc-navy); }
.cc-side.b { border-top: 4px solid var(--cc-blue); }
.cc-side .cc-def { font-family: 'STIX Two Text', serif; font-size: 16px; margin: 4px 0 2px; }
.cc-side .cc-say { font-size: 12.5px; color: var(--cc-muted); }
.cc-side .cc-for { margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--cc-line); font-size: 12.5px; }
.cc-side .cc-for .cc-lbl { display: inline; margin-right: 6px; }
.cc-fig { display: block; width: 100%; height: auto; margin-top: 6px; }
.cc-bridge { position: relative; padding: 0 10px; display: grid; justify-items: center; gap: 4px; text-align: center; }
.cc-bridge::before { content: ''; position: absolute; left: 0; right: 0; top: 50%; border-top: 2px dashed var(--cc-blue); z-index: 0; }
.cc-bridge-f { position: relative; z-index: 1; background: var(--cc-panel); border: 1.5px solid var(--cc-blue); border-radius: 10px; padding: 8px 12px; font-family: 'STIX Two Text', serif; font-size: 15px; box-shadow: 0 0 0 4px var(--cc-soft); }
.cc-bridge-l { position: relative; z-index: 1; font: 700 9px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--cc-blue); background: var(--cc-soft); padding: 0 6px; }

/* ---------- confused ---------- */
.cc-cf { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.cc-cf-c { overflow: hidden; }
.cc-cf-h { padding: 10px 14px; background: var(--cc-head); border-bottom: 1.5px solid var(--cc-box); }
.cc-cf-c.a .cc-cf-h { border-top: 4px solid var(--cc-navy); }
.cc-cf-c.b .cc-cf-h { border-top: 4px solid var(--cc-blue); }
.cc-cf-r { padding: 7px 14px; border-top: 1px solid var(--cc-line); font-size: 12.5px; }
.cc-cf-r:first-of-type { border-top: 0; }
.cc-cf-r .cc-lbl { margin-bottom: 1px; }
.cc-cf-r.cc-key { background: var(--cc-head); }
.cc-cf-r.cc-key > span:last-child { font-family: 'STIX Two Text', serif; font-size: 15px; }
.cc-verdict { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 12px; align-items: start; padding: 12px 14px; border: 1.5px solid var(--cc-gold); background: var(--cc-gold-bg); border-radius: 10px; font-size: 13px; }
.cc-verdict-x { width: 26px; height: 26px; border-radius: 50%; background: var(--cc-gold); color: #fff; font: 800 13px/26px 'Inter', sans-serif; text-align: center; }
.cc-verdict .cc-lbl { color: var(--cc-gold-ink); }
.cc-verdict p { margin: 4px 0 0; color: var(--cc-ink); }

@media (max-width: 680px) {
  .cc-when, .cc-br, .cc-cf { grid-template-columns: 1fr; }
  .cc-bridge { padding: 12px 0; }
  .cc-bridge::before { left: 50%; right: auto; top: 0; bottom: 0; border-top: 0; border-left: 2px dashed var(--cc-blue); }
  .cc-vs-a { min-width: 76px; padding: 8px 4px; }
  .cc-vs-c { padding: 8px 10px; font-size: 12.5px; }
  .cc-flow-a { transform: rotate(90deg); width: 100%; justify-content: center; padding: 2px 0; }
  .cc-flow-s { flex-basis: 100%; }
  .cc-case { grid-template-columns: 1fr; gap: 2px; }
}
`;

const Together = ({ data, L }) =>
  data.together ? (
    <div className="cc-box cc-note">
      <span className="cc-lbl"><R t={data.together.label || L.together} /></span>
      <R t={data.together.text} />
    </div>
  ) : null;

/* ---------- versus ---------- */
function Versus({ data, L, O }) {
  const [a, b] = data.concepts;
  const [hl, setHl] = useState(null);
  const on = (i) => (O.hover ? { onMouseEnter: () => setHl(i), onMouseLeave: () => setHl(null) } : {});
  return (
    <>
      <div className="cc-vs">
        <div className="cc-vs-h l"><span className="cc-name"><R t={a.name} /></span>{a.symbol && <span className="cc-sym"><R t={a.symbol} /></span>}</div>
        <div className="cc-vs-h m"><span className="cc-vs-badge">{L.vs}</span></div>
        <div className="cc-vs-h r"><span className="cc-name"><R t={b.name} /></span>{b.symbol && <span className="cc-sym"><R t={b.symbol} /></span>}</div>
        {data.aspects.map((x, i) => {
          const f = i === 0 ? ' cc-first' : '';
          const h = hl === i ? ' cc-hl' : '';
          return (
            <React.Fragment key={x.id}>
              <div className={'cc-vs-c l' + f + h} {...on(i)}><R t={a.values[x.id]} /></div>
              <div className={'cc-vs-a' + f + h} {...on(i)}><R t={x.label} /></div>
              <div className={'cc-vs-c' + f + h} {...on(i)}><R t={b.values[x.id]} /></div>
            </React.Fragment>
          );
        })}
      </div>
      <Together data={data} L={L} />
    </>
  );
}

/* ---------- table ---------- */
function Table({ data, L, O }) {
  const [col, setCol] = useState(null);
  const cs = data.concepts;
  const toggle = (j) => setCol(col === j ? null : j);
  const anySame = O.markSame && data.aspects.some((x) =>
    cs.some((c, j) => cs.some((o, k) => k !== j && o.values[x.id] === c.values[x.id])));
  return (
    <>
      <div className="cc-twrap">
        <table className="cc-t">
          <thead>
            <tr>
              <th className="cc-corner"><R t={data.aspectsLabel || L.aspect} /></th>
              {cs.map((c, j) => (
                <th
                  key={c.id}
                  className={(O.columnFocus ? 'cc-click' : '') + (col === j ? ' cc-col' : '')}
                  onClick={O.columnFocus ? () => toggle(j) : undefined}
                  onKeyDown={O.columnFocus ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(j); } } : undefined}
                  tabIndex={O.columnFocus ? 0 : undefined}
                  aria-pressed={O.columnFocus ? col === j : undefined}
                >
                  <span className="cc-name"><R t={c.name} /></span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.aspects.map((x) => (
              <tr key={x.id}>
                <td className="cc-rl"><R t={x.label} /></td>
                {cs.map((c, j) => {
                  const v = c.values[x.id];
                  const same = O.markSame && v != null && v !== '' && cs.some((o, k) => k !== j && o.values[x.id] === v);
                  return <td key={c.id} className={(same ? 'cc-same' : '') + (col === j ? ' cc-col' : '')}><R t={v} /></td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {O.hint && (anySame || O.columnFocus) && (
        <div className="cc-thint">
          {anySame ? <span><i>=</i>{L.sameHint}</span> : <span />}
          {O.columnFocus && <span>{L.focusHint}</span>}
        </div>
      )}
      <Together data={data} L={L} />
    </>
  );
}

/* ---------- when ---------- */
function When({ data, L, O }) {
  return (
    <>
      <div className="cc-when">
        {data.concepts.map((c, i) => (
          <div key={c.id} className={'cc-box cc-use ' + (i ? 'b' : 'a')}>
            <div className="cc-use-h">
              <span className="cc-lbl">{L.use}</span>
              <span className="cc-name"><R t={c.name} /></span>
              <span className="cc-lbl">{L.for}</span>
            </div>
            <div className="cc-cases">
              {c.uses.map((u, j) => (
                <div key={j} className={'cc-case' + (u.area ? '' : ' cc-plain')}>
                  {u.area && <b><R t={u.area} /></b>}
                  <span><R t={u.text} /></span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {data.workflow && (
        <div>
          {data.workflow.label && <span className="cc-lbl"><R t={data.workflow.label} /></span>}
          <div className="cc-flow">
            {data.workflow.steps.map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="cc-flow-a">{O.flowArrow}</span>}
                <div className="cc-flow-s" data-keep-position="">{s.label && <span className="cc-lbl"><R t={s.label} /></span>}<R t={s.text} /></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      <Together data={data} L={L} />
    </>
  );
}

/* ---------- bridge ---------- */
/* figure: 'left' | 'right' | { side, z, label } — a standard normal curve with the area on that side of z shaded */
function Area({ fig, th, k }) {
  const f = typeof fig === 'string' ? { side: fig } : fig;
  const side = f.side || 'left', z = f.z == null ? 1 : f.z, lab = f.label || 'z';
  const W = 200, H = 70, P = 6, x0 = -3.2, x1 = 3.2;
  const X = (x) => P + (x - x0) / (x1 - x0) * (W - 2 * P);
  const Y = (x) => H - 8 - Math.exp(-x * x / 2) * (H - 18);
  const pts = [];
  for (let i = 0; i <= 80; i++) pts.push(x0 + (x1 - x0) * i / 80);
  const curve = pts.map((x, i) => (i ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Y(x).toFixed(1)).join(' ');
  const part = pts.filter((x) => (side === 'left' ? x <= z : x >= z));
  const area = 'M' + X(part[0]) + ' ' + (H - 8) + ' ' + part.map((x) => 'L' + X(x).toFixed(1) + ' ' + Y(x).toFixed(1)).join(' ') + ' L' + X(part[part.length - 1]) + ' ' + (H - 8) + ' Z';
  return (
    <svg className="cc-fig" viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      <path d={area} fill={k === 'a' ? th.areaA : th.areaB} stroke="none" />
      <path d={curve} fill="none" stroke={th.navy} strokeWidth="1.6" />
      <line x1={P} y1={H - 8} x2={W - P} y2={H - 8} stroke={th.box} strokeWidth="1" />
      <line x1={X(z)} y1={Y(z) - 4} x2={X(z)} y2={H - 8} stroke={th.blue} strokeWidth="1.4" />
      <text x={X(z)} y={H} textAnchor="middle" fontFamily="STIX Two Text, serif" fontStyle="italic" fontSize="10" fill={th.blue}>{lab}</text>
    </svg>
  );
}

function Side({ c, k, L, th }) {
  return (
    <div className={'cc-box cc-side ' + k}>
      <span className="cc-name"><R t={c.name} /></span>
      {c.formula && <div className="cc-def"><R t={c.formula} /></div>}
      {c.say && <div className="cc-say"><R t={c.say} /></div>}
      {c.figure && <Area fig={c.figure} th={th} k={k} />}
      {c.forText && <div className="cc-for"><span className="cc-lbl">{L.useFor}</span><R t={c.forText} /></div>}
    </div>
  );
}

function Bridge({ data, L, th }) {
  const [a, b] = data.concepts;
  return (
    <>
      <div className="cc-br">
        <Side c={a} k="a" L={L} th={th} />
        <div className="cc-bridge" data-keep-position="">
          {data.bridge.label && <span className="cc-bridge-l"><R t={data.bridge.label} /></span>}
          <span className="cc-bridge-f"><R t={data.bridge.formula} /></span>
        </div>
        <Side c={b} k="b" L={L} th={th} />
      </div>
      <Together data={data} L={L} />
    </>
  );
}

/* ---------- confused ---------- */
function Confused({ data, L, O }) {
  return (
    <>
      <div className="cc-cf">
        {data.concepts.map((c, i) => (
          <div key={c.id} className={'cc-box cc-cf-c ' + (i ? 'b' : 'a')}>
            <div className="cc-cf-h"><span className="cc-name"><R t={c.name} /></span></div>
            {data.aspects.map((x) => (
              <div key={x.id} className={'cc-cf-r' + (x.key ? ' cc-key' : '')}>
                <span className="cc-lbl"><R t={x.label} /></span><span><R t={c.values[x.id]} /></span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {data.verdict && (
        <div className="cc-verdict">
          <span className="cc-verdict-x">{O.verdictMark}</span>
          <div>
            <span className="cc-lbl"><R t={data.verdict.label || L.verdict} /></span>
            <R t={data.verdict.text} />
            {data.verdict.more && <p><R t={data.verdict.more} /></p>}
          </div>
        </div>
      )}
    </>
  );
}

const VIEWS = { versus: Versus, table: Table, when: When, bridge: Bridge, confused: Confused };

export default function ConceptCompare({ data, variant = 'versus', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = VIEWS[variant] || Versus;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cc-root" style={cssVars(th)}>
        <div className="cc-card">
          {hd && (
            <div className="cc-head">
              {hd.kicker && <div className="cc-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="cc-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="cc-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="cc-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
