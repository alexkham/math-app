/*
  Readings.jsx

  One idea, several readings of it. Three variants:
    lenses      one object, several readings in tabs (formula, explanation, where it helps)
    ladder      a chain where each rung is the rate of change of the one above, with a worked example beside it
    dictionary  rows of algebra, what it asks, and its picture on a number line

  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['lenses', 'ladder', 'dictionary'];

export const DEFAULT_LABELS = {
  whereItHelps: 'Where it helps',
  rate: 'rate of change',
  order: 'order {n}',
  leftLabel: 'Algebra',
  midLabel: 'Asks',
  rightLabel: 'Picture'
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
  // number line (dictionary)
  axis: '#94a3b8',
  span: '#2563eb',
  interval: '#ca8a04',
  mark: '#1e3a8a',
  markFill: '#ffffff',
  solution: '#ca8a04',
  solutionInk: '#a16207'
};

export const DEFAULT_OPTIONS = {
  initial: 0,
  hover: true
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--rd-ink': th.ink, '--rd-title': th.title, '--rd-muted': th.muted, '--rd-line': th.line, '--rd-box': th.box,
  '--rd-panel': th.panel, '--rd-soft': th.soft, '--rd-head': th.headBg, '--rd-navy': th.navy,
  '--rd-blue': th.blue, '--rd-blue-soft': th.blueSoft, '--rd-gold': th.gold, '--rd-gold-bg': th.goldBg,
  '--rd-gold-ink': th.goldInk, '--rd-slate': th.slate, '--rd-slate-bg': th.slateBg, '--rd-on-dark': th.onDark
});

const CSS = `
.rd-root {
  font-family: 'Inter', system-ui, sans-serif; color: var(--rd-ink); line-height: 1.45;
}
.rd-root *, .rd-root *::before, .rd-root *::after { box-sizing: border-box; }
.rd-root .katex { text-transform: none; }
.rd-card { background: var(--rd-panel); border: 1.5px solid var(--rd-box); border-radius: 12px; overflow: hidden; }
.rd-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--rd-box); }
.rd-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--rd-blue); }
.rd-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--rd-title); letter-spacing: -.01em; }
.rd-lede { margin-top: 3px; font-size: 12.5px; color: var(--rd-muted); }
.rd-body { padding: 16px 20px 18px; background: var(--rd-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.rd-box { background: var(--rd-panel); border: 1.5px solid var(--rd-box); border-radius: 10px; }
.rd-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--rd-muted); margin-bottom: 4px; }
.rd-math { font-family: 'STIX Two Text', serif; }
.rd-note { padding: 10px 14px 12px; border-left: 4px solid var(--rd-blue); font-size: 12.5px; }
.rd-note .rd-lbl { color: var(--rd-blue); }
.rd-warn { padding: 10px 14px 12px; border-left: 4px solid var(--rd-gold); font-size: 12.5px; }
.rd-warn .rd-lbl { color: var(--rd-gold-ink); }
.rd-two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

/* ---------- lenses: one object, several readings ---------- */
.rd-ln { display: grid; grid-template-columns: 210px minmax(0, 1fr); overflow: hidden; }
.rd-tabs { display: grid; align-content: start; border-right: 1.5px solid var(--rd-box); background: var(--rd-soft); }
.rd-tab { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 10px; align-items: center; text-align: left; padding: 10px 12px; border: 0; border-bottom: 1px solid var(--rd-line); background: none; cursor: pointer; font: 600 13px 'Inter', sans-serif; color: var(--rd-ink); border-left: 3px solid transparent; transition: background .15s; }
.rd-tab:hover { background: var(--rd-head); }
.rd-tab.on { background: var(--rd-panel); border-left-color: var(--rd-blue); color: var(--rd-title); }
.rd-tab small { display: block; font: 500 11px 'Inter', sans-serif; color: var(--rd-muted); margin-top: 1px; }
.rd-tn { width: 22px; height: 22px; border-radius: 50%; background: var(--rd-line); color: var(--rd-muted); font: 700 10px/22px 'JetBrains Mono', monospace; text-align: center; }
.rd-tab.on .rd-tn { background: var(--rd-navy); color: var(--rd-on-dark); }
.rd-pane { padding: 14px 18px 16px; display: grid; gap: 10px; align-content: start; min-height: 220px; }
.rd-pane-h { font-size: 15px; font-weight: 800; color: var(--rd-title); }
.rd-formula { padding: 10px 12px; background: var(--rd-head); border-radius: 8px; border: 1px solid var(--rd-blue-soft); overflow-x: auto; font-size: 16px; text-align: center; }
.rd-says { font-size: 13px; }
.rd-use { font-size: 12px; color: var(--rd-muted); padding-top: 8px; border-top: 1px dashed var(--rd-line); }
.rd-use b { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--rd-blue); margin-right: 6px; }

/* ---------- ladder: each rung the rate of change of the one above ---------- */
.rd-lad { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; align-items: start; }
.rd-rungs { padding: 6px 0; }
.rd-rung { display: grid; grid-template-columns: 62px minmax(0, 1fr); gap: 0; align-items: stretch; position: relative; cursor: pointer; }
.rd-rung-s { display: flex; align-items: center; justify-content: center; font-family: 'STIX Two Text', serif; font-size: 15px; color: var(--rd-title); border-right: 2px solid var(--rd-blue-soft); position: relative; }
.rd-rung-s::after { content: ''; position: absolute; right: -6px; top: 50%; width: 10px; height: 10px; margin-top: -5px; border-radius: 50%; background: var(--rd-panel); border: 2px solid var(--rd-blue); }
.rd-rung.minor .rd-rung-s::after { border-color: var(--rd-box); }
.rd-rung-b { padding: 4px 14px 4px 18px; border-radius: 0 8px 8px 0; transition: background .15s; }
.rd-rung:hover .rd-rung-b, .rd-rung.on .rd-rung-b { background: var(--rd-head); }
.rd-rung.on .rd-rung-s::after { background: var(--rd-blue); }
.rd-rung-n { font-size: 13.5px; font-weight: 700; color: var(--rd-title); }
.rd-rung-n i { font-style: normal; font: 700 9px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--rd-muted); margin-left: 6px; }
.rd-rung-m { font-size: 12px; color: var(--rd-muted); }
.rd-rung.minor .rd-rung-n { color: var(--rd-muted); font-weight: 600; }
.rd-rate { font: 700 8.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--rd-blue); padding: 0 0 0 76px; height: 12px; display: flex; align-items: center; }
.rd-rate::before { content: '\\2193'; margin-right: 6px; font-size: 11px; }
.rd-side { display: grid; gap: 12px; }
.rd-ex { overflow: hidden; }
.rd-ex-h { padding: 9px 12px; background: var(--rd-head); border-bottom: 1.5px solid var(--rd-box); }
.rd-ex-h .rd-lbl { margin: 0; color: var(--rd-title); }
.rd-ex-r { display: grid; grid-template-columns: 110px minmax(0, 1fr) 70px; border-top: 1px solid var(--rd-line); font-size: 13px; transition: background .15s; }
.rd-ex-r:first-of-type { border-top: 0; }
.rd-ex-r > div { padding: 7px 12px; }
.rd-ex-r > div + div { border-left: 1px solid var(--rd-line); }
.rd-ex-r .rd-math { font-size: 14.5px; }
.rd-ex-r.on { background: var(--rd-head); }
.rd-ex-r .rd-v { text-align: right; font-family: 'STIX Two Text', serif; font-size: 14.5px; color: var(--rd-title); font-weight: 600; }

/* ---------- dictionary: algebra on the left, picture on the right ---------- */
.rd-dict { overflow: hidden; }
.rd-dh, .rd-dr { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.1fr) minmax(0, 1fr); }
.rd-dh { background: var(--rd-head); border-bottom: 1.5px solid var(--rd-box); }
.rd-dh > div { padding: 8px 14px; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--rd-title); }
.rd-dh > div + div, .rd-dr > div + div { border-left: 1px solid var(--rd-line); }
.rd-dr { border-top: 1px solid var(--rd-line); }
.rd-dr:first-of-type { border-top: 0; }
.rd-dr > div { padding: 10px 14px; font-size: 12.5px; }
.rd-dr .rd-eq { font-family: 'STIX Two Text', serif; font-size: 16px; color: var(--rd-title); display: flex; align-items: center; }
.rd-dr .rd-q { font-size: 13px; }
.rd-dr .rd-cases { margin: 6px 0 0; padding: 0; list-style: none; display: grid; gap: 3px; font-size: 12px; color: var(--rd-muted); }
.rd-dr .rd-cases li::before { content: '\\2022'; color: var(--rd-blue); margin-right: 6px; }
.rd-nl { display: block; width: 100%; height: auto; }
.rd-nl-c { font-size: 11.5px; color: var(--rd-muted); text-align: center; margin-top: 2px; }

@media (max-width: 680px) {
  .rd-ln { grid-template-columns: 1fr; }
  .rd-tabs { grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); border-right: 0; border-bottom: 1.5px solid var(--rd-box); }
  .rd-tab { grid-template-columns: 1fr; justify-items: center; text-align: center; border-left: 0; border-bottom: 3px solid transparent; padding: 8px 4px; font-size: 11.5px; }
  .rd-tab.on { border-bottom-color: var(--rd-blue); }
  .rd-tab small { display: none; }
  .rd-lad, .rd-two { grid-template-columns: 1fr; }
  .rd-dh { display: none; }
  .rd-dr { grid-template-columns: 1fr; }
  .rd-dr > div + div { border-left: 0; border-top: 1px dashed var(--rd-line); }
}
`;

const Notes = ({ data }) => {
  if (!data.note && !data.pitfall) return null;
  return (
    <div className={data.note && data.pitfall ? 'rd-two' : ''}>
      {data.note && <div className="rd-box rd-note"><span className="rd-lbl"><R t={data.note.label} /></span><R t={data.note.text} /></div>}
      {data.pitfall && <div className="rd-box rd-warn"><span className="rd-lbl"><R t={data.pitfall.label} /></span><R t={data.pitfall.text} /></div>}
    </div>
  );
};

/* ---------- lenses ---------- */
function Lenses({ data, L, O }) {
  const [i, setI] = useState(Math.max(0, Math.min((data.readings || []).length - 1, data.initial != null ? data.initial : O.initial)));
  const r = data.readings[i];
  return (
    <>
      <div className="rd-box rd-ln">
        <div className="rd-tabs" role="tablist">
          {data.readings.map((x, k) => (
            <button key={k} role="tab" aria-selected={k === i} className={'rd-tab' + (k === i ? ' on' : '')} onClick={() => setI(k)}>
              <span className="rd-tn">{k + 1}</span>
              <span><R t={x.name} />{x.short && <small><R t={x.short} /></small>}</span>
            </button>
          ))}
        </div>
        <div className="rd-pane" role="tabpanel">
          <div className="rd-pane-h"><R t={r.title || r.name} /></div>
          {r.formula && <div className="rd-formula rd-math"><R t={r.formula} /></div>}
          <div className="rd-says"><R t={r.text} /></div>
          {r.use && <div className="rd-use"><b><R t={L.whereItHelps} /></b><R t={r.use} /></div>}
        </div>
      </div>
      <Notes data={data} />
    </>
  );
}

/* ---------- ladder ---------- */
function Ladder({ data, L, O }) {
  const [on, setOn] = useState(null);
  const ex = data.example;
  return (
    <>
      <div className="rd-lad">
        <div className="rd-box rd-rungs">
          {data.rungs.map((r, k) => (
            <React.Fragment key={k}>
              {k > 0 && <div className="rd-rate"><R t={data.rate || L.rate} /></div>}
              <div className={'rd-rung' + (r.minor ? ' minor' : '') + (on === k ? ' on' : '')} onMouseEnter={O.hover ? () => setOn(k) : undefined} onMouseLeave={O.hover ? () => setOn(null) : undefined}>
                <div className="rd-rung-s"><R t={r.symbol} /></div>
                <div className="rd-rung-b">
                  <div className="rd-rung-n"><R t={r.name} />{r.order != null && <i>{String(L.order).split('{n}').map((part, j) => <React.Fragment key={j}>{j > 0 && r.order}{part}</React.Fragment>)}</i>}</div>
                  <div className="rd-rung-m"><R t={r.meaning} /></div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="rd-side">
          {ex && (
            <div className="rd-box rd-ex">
              <div className="rd-ex-h"><span className="rd-lbl"><R t={ex.label} /></span></div>
              {ex.rows.map((x, k) => (
                <div key={k} className={'rd-ex-r' + (on === x.rung ? ' on' : '')}>
                  <div><R t={x.name} /></div>
                  <div className="rd-math"><R t={x.formula} /></div>
                  <div className="rd-v"><R t={x.value} /></div>
                </div>
              ))}
            </div>
          )}
          {ex && ex.say && <div className="rd-box rd-note"><span className="rd-lbl"><R t={ex.sayLabel} /></span><R t={ex.say} /></div>}
          {data.pitfall && <div className="rd-box rd-warn"><span className="rd-lbl"><R t={data.pitfall.label} /></span><R t={data.pitfall.text} /></div>}
        </div>
      </div>
      {data.note && <div className="rd-box rd-note"><span className="rd-lbl"><R t={data.note.label} /></span><R t={data.note.text} /></div>}
    </>
  );
}

/* ---------- dictionary: number-line figures ---------- */
function NumberLine({ fig, th }) {
  const W = 260, H = 54, P = 14, y = 26;
  const { from, to } = fig;
  const X = (v) => P + (v - from) / (to - from) * (W - 2 * P);
  const ticks = [];
  for (let v = Math.ceil(from); v <= to; v++) ticks.push(v);
  return (
    <svg className="rd-nl" viewBox={`0 0 ${W} ${H}`}>
      {(fig.spans || []).map((s, k) => (
        <g key={'s' + k}>
          <line x1={X(s[0])} y1={y - 12} x2={X(s[1])} y2={y - 12} stroke={th.span} strokeWidth="1.5" />
          <line x1={X(s[0])} y1={y - 16} x2={X(s[0])} y2={y - 8} stroke={th.span} strokeWidth="1.5" />
          <line x1={X(s[1])} y1={y - 16} x2={X(s[1])} y2={y - 8} stroke={th.span} strokeWidth="1.5" />
          {s[2] && <text x={(X(s[0]) + X(s[1])) / 2} y={y - 16} textAnchor="middle" fontSize="10" fontFamily="STIX Two Text, serif" fill={th.span}>{s[2]}</text>}
        </g>
      ))}
      {fig.interval && <line x1={X(fig.interval[0])} y1={y} x2={X(fig.interval[1])} y2={y} stroke={th.interval} strokeWidth="5" strokeLinecap="round" />}
      <line x1={P - 6} y1={y} x2={W - P + 6} y2={y} stroke={th.axis} strokeWidth="1.2" />
      {ticks.map((v) => <line key={v} x1={X(v)} y1={y - 3} x2={X(v)} y2={y + 3} stroke={th.axis} strokeWidth="1" />)}
      {(fig.marks || []).map((m, k) => (
        <g key={'m' + k}>
          <circle cx={X(m[0])} cy={y} r="4.5" fill={m[2] === 'sol' ? th.solution : th.markFill} stroke={m[2] === 'sol' ? th.solution : th.mark} strokeWidth="1.8" />
          <text x={X(m[0])} y={y + 17} textAnchor="middle" fontSize="11" fontFamily="STIX Two Text, serif" fill={m[2] === 'sol' ? th.solutionInk : th.mark} fontWeight={m[2] === 'sol' ? 700 : 400}>{m[1]}</text>
        </g>
      ))}
    </svg>
  );
}

function Dictionary({ data, L, th }) {
  const D = data.dictionary;
  return (
    <>
      <div className="rd-box rd-dict">
        <div className="rd-dh"><div><R t={D.leftLabel || L.leftLabel} /></div><div><R t={D.midLabel || L.midLabel} /></div><div><R t={D.rightLabel || L.rightLabel} /></div></div>
        {D.rows.map((r, k) => (
          <div key={k} className="rd-dr">
            <div className="rd-eq"><R t={r.algebra} /></div>
            <div>
              <div className="rd-q"><R t={r.reading} /></div>
              {r.cases && <ul className="rd-cases">{r.cases.map((c, j) => <li key={j}><R t={c} /></li>)}</ul>}
            </div>
            <div>{r.figure && <NumberLine fig={r.figure} th={th} />}{r.caption && <div className="rd-nl-c"><R t={r.caption} /></div>}</div>
          </div>
        ))}
      </div>
      <Notes data={data} />
    </>
  );
}

const V = { lenses: Lenses, ladder: Ladder, dictionary: Dictionary };

export default function Readings({ data, variant = 'lenses', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = V[variant] || Lenses;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="rd-root" style={cssVars(th)}>
        <div className="rd-card">
          {hd && (
            <div className="rd-head">
              {hd.kicker && <div className="rd-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="rd-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="rd-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="rd-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
