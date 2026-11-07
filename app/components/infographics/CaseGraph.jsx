/*
  CaseGraph.jsx

  Cases shown on graphs. Two variants:
    graph  one graph split into cases (intervals); hover an interval or a row to match
    grid   two axes of cases, a small graph in each cell; a switch for a third

  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useId, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['graph', 'grid'];

export const DEFAULT_LABELS = {
  general: 'General',
  interval: 'Interval',
  factors: 'Factors',
  sign: 'Sign',
  inSolution: 'in',
  positive: 'positive',
  negative: 'negative',
  solution: 'solution',
  switchLabel: 'Solve',
  rows: 'Rows',
  columns: 'Columns',
  hint: 'Hover a cell to see its row and column; click a heading to focus it.',
  clear: 'Clear focus'
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
  // plot
  curve: '#1e3a8a',
  axis: '#94a3b8',
  cut: '#c7cedb',
  positiveFill: '#dbeafe',
  negativeFill: '#fef3c7',
  solutionLine: '#ca8a04',
  hoverBand: '#eff6ff',
  rootFill: '#ffffff',
  rootStroke: '#1e3a8a',
  rootLabel: '#1e3a8a',
  // sign chips
  posChipBg: '#dbeafe',
  posChipInk: '#2563eb',
  negChipBg: '#f1f5f9',
  negChipInk: '#475569',
  posDot: '#2563eb',
  negDot: '#ca8a04',
  onDark: '#ffffff'
};

export const DEFAULT_OPTIONS = {
  hover: true,
  key: true,
  marks: true,
  arrow: '\u2192',
  samples: 260,
  cellSamples: 120,
  width: 420,
  height: 230,
  cellWidth: 200,
  cellHeight: 104,
  focus: true,
  axisPicker: true
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--cg-ink': th.ink, '--cg-title': th.title, '--cg-muted': th.muted, '--cg-line': th.line, '--cg-box': th.box,
  '--cg-panel': th.panel, '--cg-soft': th.soft, '--cg-head': th.headBg, '--cg-navy': th.navy,
  '--cg-blue': th.blue, '--cg-blue-soft': th.blueSoft, '--cg-gold': th.gold, '--cg-gold-bg': th.goldBg,
  '--cg-gold-ink': th.goldInk, '--cg-slate': th.slate, '--cg-slate-bg': th.slateBg,
  '--cg-pos-bg': th.posChipBg, '--cg-pos-ink': th.posChipInk, '--cg-neg-bg': th.negChipBg, '--cg-neg-ink': th.negChipInk,
  '--cg-pos-dot': th.posDot, '--cg-neg-dot': th.negDot, '--cg-on-dark': th.onDark
});

const CSS = `

.cg-root { font-family: 'Inter', system-ui, sans-serif; color: var(--cg-ink); line-height: 1.45; }
.cg-root *, .cg-root *::before, .cg-root *::after { box-sizing: border-box; }
.cg-root .katex { text-transform: none; }
.cg-card { background: var(--cg-panel); border: 1.5px solid var(--cg-box); border-radius: 12px; overflow: hidden; }
.cg-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--cg-box); }
.cg-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--cg-blue); }
.cg-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--cg-title); letter-spacing: -.01em; }
.cg-lede { margin-top: 3px; font-size: 12.5px; color: var(--cg-muted); }
.cg-body { padding: 16px 20px 18px; background: var(--cg-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.cg-box { background: var(--cg-panel); border: 1.5px solid var(--cg-box); border-radius: 10px; }
.cg-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--cg-muted); margin-bottom: 4px; }
.cg-math { font-family: 'STIX Two Text', serif; }
.cg-general { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 14px; align-items: center; padding: 10px 16px; border-left: 4px solid var(--cg-navy); }
.cg-general .cg-lbl { margin: 0; color: var(--cg-navy); }
.cg-general .cg-math { font-size: 17px; overflow-x: auto; }
.cg-general .cg-gs { font-size: 12px; color: var(--cg-muted); margin-top: 2px; }
.cg-note { padding: 10px 14px 12px; border-left: 4px solid var(--cg-blue); font-size: 12.5px; }
.cg-note .cg-lbl { color: var(--cg-blue); }
.cg-warn { padding: 10px 14px 12px; border-left: 4px solid var(--cg-gold); font-size: 12.5px; }
.cg-warn .cg-lbl { color: var(--cg-gold-ink); }
.cg-two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

/* ---------- graph: one graph split into cases ---------- */
.cg-gr { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: 12px; align-items: start; }
.cg-gr-fig { padding: 8px 8px 4px; }
.cg-gr-fig svg { width: 100%; height: auto; display: block; }
.cg-key { display: flex; flex-wrap: wrap; gap: 6px 14px; padding: 4px 6px 4px; font-size: 11.5px; color: var(--cg-muted); }
.cg-key i { display: inline-block; width: 12px; height: 12px; border-radius: 3px; vertical-align: -1px; margin-right: 5px; }
.cg-q { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; padding: 9px 14px; border-left: 4px solid var(--cg-navy); font-size: 12.5px; }
.cg-q .cg-math { font-size: 16px; color: var(--cg-title); }
.cg-q .cg-ans { font-family: 'STIX Two Text', serif; font-size: 16px; color: var(--cg-gold-ink); font-weight: 600; }
.cg-ivs { overflow: hidden; }
.cg-ivh, .cg-iv { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr) 54px; align-items: center; }
.cg-ivh { background: var(--cg-head); border-bottom: 1.5px solid var(--cg-box); }
.cg-ivh > div { padding: 7px 10px; font: 700 9px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--cg-title); }
.cg-ivh > div + div, .cg-iv > div + div { border-left: 1px solid var(--cg-line); }
.cg-iv { border-top: 1px solid var(--cg-line); transition: background .15s; }
.cg-hov .cg-iv { cursor: pointer; }
.cg-iv:first-of-type { border-top: 0; }
.cg-iv > div { padding: 8px 10px; }
.cg-iv.on { background: var(--cg-head); }
.cg-iv-i { font-family: 'STIX Two Text', serif; font-size: 14.5px; display: flex; align-items: center; gap: 6px; }
.cg-iv-i .cg-in { font: 700 8px 'JetBrains Mono', monospace; letter-spacing: .08em; text-transform: uppercase; padding: 2px 5px; border-radius: 4px; background: var(--cg-gold-bg); color: var(--cg-gold-ink); }
.cg-fs { display: flex; gap: 4px; }
.cg-fs span { width: 20px; height: 20px; border-radius: 5px; display: inline-flex; align-items: center; justify-content: center; font: 700 12px 'Inter', sans-serif; }
.cg-fs .p { background: var(--cg-pos-bg); color: var(--cg-pos-ink); }
.cg-fs .n { background: var(--cg-neg-bg); color: var(--cg-neg-ink); }
.cg-prod { text-align: center; }
.cg-prod span { display: inline-flex; width: 26px; height: 26px; border-radius: 50%; align-items: center; justify-content: center; font: 800 14px 'Inter', sans-serif; color: var(--cg-on-dark); }
.cg-prod .p { background: var(--cg-pos-dot); }
.cg-prod .n { background: var(--cg-neg-dot); }
.cg-ivf { padding: 7px 10px; font-size: 11.5px; color: var(--cg-muted); border-top: 1.5px solid var(--cg-box); background: var(--cg-soft); }

/* ---------- grid: two axes of cases, a switch for a third ---------- */
.cg-sw { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.cg-sw .cg-lbl { margin: 0; }
.cg-seg { display: inline-flex; border: 1.5px solid var(--cg-box); border-radius: 8px; overflow: hidden; background: var(--cg-panel); }
.cg-seg button { border: 0; background: none; padding: 5px 12px; cursor: pointer; font: 600 12px 'Inter', sans-serif; color: var(--cg-slate); }
.cg-seg button + button { border-left: 1.5px solid var(--cg-box); }
.cg-seg button.on { background: var(--cg-navy); color: var(--cg-on-dark); }
.cg-seg button .katex { color: inherit; }
.cg-gw { position: relative; overflow-x: auto; }
.cg-g { display: grid; gap: 0; border: 1.5px solid var(--cg-box); border-radius: 10px; overflow: hidden; background: var(--cg-panel); min-width: 560px; }
.cg-g-h { padding: 8px 10px; background: var(--cg-head); border-bottom: 1.5px solid var(--cg-box); text-align: center; }
.cg-g-h b { display: block; font-family: 'STIX Two Text', serif; font-size: 15px; color: var(--cg-title); }
.cg-g-h small { font-size: 11px; color: var(--cg-muted); }
.cg-g-h + .cg-g-h { border-left: 1px solid var(--cg-line); }
.cg-g-corner { background: var(--cg-soft); border-bottom: 1.5px solid var(--cg-box); border-right: 1.5px solid var(--cg-box); }
.cg-g-r { padding: 10px; background: var(--cg-soft); border-right: 1.5px solid var(--cg-box); display: flex; flex-direction: column; justify-content: center; text-align: center; }
.cg-g-r b { font-family: 'STIX Two Text', serif; font-size: 15px; color: var(--cg-title); }
.cg-g-r small { font-size: 11px; color: var(--cg-muted); }
.cg-g-c { padding: 6px 8px 8px; border-left: 1px solid var(--cg-line); display: flex; flex-direction: column; gap: 2px; transition: background .15s; }
.cg-g-c.first { border-left: 0; }
.cg-g-c:hover { background: var(--cg-head); }
.cg-g-row-sep { border-top: 1px solid var(--cg-line); }
.cg-g-c svg { width: 100%; max-width: 280px; margin: 0 auto; height: auto; display: block; }
.cg-g-pat { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .14em; text-align: center; color: var(--cg-muted); }
.cg-g-sol { text-align: center; font-family: 'STIX Two Text', serif; font-size: 14.5px; color: var(--cg-gold-ink); font-weight: 600; }
.cg-g-sol.none { color: var(--cg-muted); font-weight: 400; }

/* ---------- interactivity ---------- */
.cg-ctl { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 18px; }
.cg-ctl-g { display: flex; align-items: center; gap: 8px; }
.cg-ctl-g .cg-lbl { margin: 0; }
.cg-seg.cg-axes button { font-size: 11.5px; padding: 4px 10px; }
.cg-g-h, .cg-g-r { transition: background .15s, box-shadow .15s; }
.cg-click .cg-g-h, .cg-click .cg-g-r { cursor: pointer; }
.cg-g-h.hl, .cg-g-r.hl { background: var(--cg-blue-soft); }
.cg-g-h.fx, .cg-g-r.fx { background: var(--cg-navy); }
.cg-g-h.fx b, .cg-g-r.fx b, .cg-g-h.fx small, .cg-g-r.fx small { color: var(--cg-on-dark); }
.cg-g-h.fx .katex, .cg-g-r.fx .katex { color: inherit; }
.cg-g-c.dim { opacity: .3; }
.cg-g-c.pick { background: var(--cg-head); box-shadow: inset 0 0 0 2px var(--cg-blue); }
.cg-g-c { transition: background .15s, opacity .2s; }
.cg-g-h:focus-visible, .cg-g-r:focus-visible, .cg-seg button:focus-visible { outline: 2px solid var(--cg-blue); outline-offset: -2px; }
.cg-hint { font-size: 11.5px; color: var(--cg-muted); display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.cg-clear { border: 0; background: none; padding: 0; font: 600 11.5px 'Inter', sans-serif; color: var(--cg-blue); cursor: pointer; }
.cg-clear:hover { text-decoration: underline; }

@media (max-width: 680px) {
  .cg-gr, .cg-two { grid-template-columns: 1fr; }
  .cg-general { grid-template-columns: 1fr; gap: 4px; }
}
`;

/* ---------- shared parts ---------- */
const General = ({ g, L }) =>
  g ? (
    <div className="cg-box cg-general">
      <span className="cg-lbl"><R t={g.label || L.general} /></span>
      <div>
        <div className="cg-math"><R t={g.text} /></div>
        {g.say && <div className="cg-gs"><R t={g.say} /></div>}
      </div>
    </div>
  ) : null;

const Notes = ({ data }) => {
  if (!data.note && !data.pitfall) return null;
  return (
    <div className={data.note && data.pitfall ? 'cg-two' : ''}>
      {data.note && <div className="cg-box cg-note"><span className="cg-lbl"><R t={data.note.label} /></span><R t={data.note.text} /></div>}
      {data.pitfall && <div className="cg-box cg-warn"><span className="cg-lbl"><R t={data.pitfall.label} /></span><R t={data.pitfall.text} /></div>}
    </div>
  );
};

const Seg = ({ options, value, onPick, className }) => (
  <div className={'cg-seg' + (className ? ' ' + className : '')} role="group">
    {options.map((o) => (
      <button key={o.id} type="button" aria-pressed={o.id === value} className={o.id === value ? 'on' : ''} onClick={() => onPick(o.id)}><R t={o.label} /></button>
    ))}
  </div>
);

/* ---------- plotting: one function on an interval, regions coloured by sign ---------- */
function Plot({ f, x0, x1, y0, y1, w, h, pad = 18, cuts = [], on = null, setOn, intervals = [], select, roots = [], th, small, samples }) {
  const uid = useId().replace(/:/g, '');
  const X = (x) => pad + (x - x0) / (x1 - x0) * (w - 2 * pad);
  const span = y1 - y0;
  const Y = (y) => h - pad - (Math.max(y0 - span, Math.min(y1 + span, y)) - y0) / span * (h - 2 * pad);
  const xs = [];
  for (let i = 0; i <= samples; i++) xs.push(x0 + (x1 - x0) * i / samples);
  const curve = xs.map((x, i) => (i ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Y(f(x)).toFixed(1)).join(' ');
  const area = (a, b) => {
    const all = [a, ...xs.filter((x) => x > a && x < b), b];
    return 'M' + X(a).toFixed(1) + ' ' + Y(0).toFixed(1) + ' ' + all.map((x) => 'L' + X(x).toFixed(1) + ' ' + Y(f(x)).toFixed(1)).join(' ') + ' L' + X(b).toFixed(1) + ' ' + Y(0).toFixed(1) + ' Z';
  };
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img">
      <defs><clipPath id={'cgclip' + uid}><rect x={0} y={pad - 6} width={w} height={h - 2 * pad + 12} /></clipPath></defs>
      <g clipPath={`url(#cgclip${uid})`}>
        {intervals.map((iv, k) => {
          const a = Math.max(x0, iv.from), b = Math.min(x1, iv.to);
          const sign = Math.sign(f((a + b) / 2));
          const chosen = select ? select(sign) : false;
          const dim = on != null && on !== k;
          return (
            <g key={k} opacity={dim ? 0.25 : 1} onMouseEnter={setOn ? () => setOn(k) : undefined} onMouseLeave={setOn ? () => setOn(null) : undefined}>
              <rect x={X(a)} y={pad - 6} width={X(b) - X(a)} height={h - 2 * pad + 12} fill={on === k ? th.hoverBand : 'transparent'} />
              <path d={area(a, b)} fill={sign > 0 ? th.positiveFill : th.negativeFill} stroke="none" />
              {chosen && <line x1={X(a)} y1={Y(0)} x2={X(b)} y2={Y(0)} stroke={th.solutionLine} strokeWidth={small ? 4 : 5} />}
            </g>
          );
        })}
        <line x1={pad - 4} y1={Y(0)} x2={w - pad + 4} y2={Y(0)} stroke={th.axis} strokeWidth="1.2" />
        {cuts.map((c, k) => <line key={'c' + k} x1={X(c)} y1={pad - 6} x2={X(c)} y2={h - pad + 6} stroke={th.cut} strokeWidth="1" strokeDasharray="3 3" />)}
        <path d={curve} fill="none" stroke={th.curve} strokeWidth={small ? 1.8 : 2.2} />
      </g>
      {roots.map((r, k) => (
        <g key={'r' + k}>
          <circle cx={X(r.x)} cy={Y(0)} r={small ? 3 : 4} fill={r.filled ? th.rootStroke : th.rootFill} stroke={th.rootStroke} strokeWidth="1.6" />
          {r.label && <text x={X(r.x)} y={Y(0) + (small ? 13 : 16)} textAnchor="middle" fontSize={small ? 10 : 11.5} fontFamily="STIX Two Text, serif" fontStyle={r.italic ? 'italic' : 'normal'} fill={th.rootLabel}>{r.label}</text>}
        </g>
      ))}
    </svg>
  );
}

/* ---------- graph ---------- */
function GraphView({ data, L, O, th }) {
  const G = data.graph;
  const cs = data.cases;
  const [on, setOn] = useState(null);
  const sw = G.switch;
  const [pick, setPick] = useState(sw ? (sw.initial || sw.options[0].id) : null);
  const opt = sw ? sw.options.find((o) => o.id === pick) : null;
  const sign = opt ? opt.sign : G.select;
  const sel = sign ? (s) => s === sign : null;
  const question = opt && opt.question ? opt.question : G.question;
  const answer = opt && opt.answer ? opt.answer : G.answer;
  const hov = O.hover ? setOn : undefined;
  const mid = (c) => (Math.max(G.x0, c.from) + Math.min(G.x1, c.to)) / 2;
  return (
    <>
      <General g={data.general} L={L} />
      {sw && (
        <div className="cg-sw"><span className="cg-lbl"><R t={sw.label || L.switchLabel} /></span><Seg options={sw.options} value={pick} onPick={setPick} /></div>
      )}
      {question && (
        <div className="cg-box cg-q">
          <span className="cg-math"><R t={question} /></span>
          {answer && <><span>{O.arrow}</span><span className="cg-ans"><R t={answer} /></span></>}
        </div>
      )}
      <div className={'cg-gr' + (O.hover ? ' cg-hov' : '')}>
        <div className="cg-box cg-gr-fig">
          <Plot f={G.f} x0={G.x0} x1={G.x1} y0={G.y0} y1={G.y1} w={O.width} h={O.height} samples={O.samples} th={th}
            cuts={G.cuts || []} roots={(G.cuts || []).map((c, k) => ({ x: c, label: G.cutLabels ? G.cutLabels[k] : String(c), filled: opt && opt.closed }))}
            intervals={cs.map((c) => ({ from: c.from, to: c.to }))} on={on} setOn={hov} select={sel} />
          {O.key && (
            <div className="cg-key">
              <span><i style={{ background: th.positiveFill }} /><R t={L.positive} /></span>
              <span><i style={{ background: th.negativeFill }} /><R t={L.negative} /></span>
              {sel && <span><i style={{ background: th.solutionLine, height: 4, verticalAlign: 3 }} /><R t={L.solution} /></span>}
            </div>
          )}
        </div>
        <div className="cg-box cg-ivs">
          <div className="cg-ivh"><div><R t={L.interval} /></div><div><R t={G.factorsLabel || L.factors} /></div><div><R t={L.sign} /></div></div>
          {cs.map((c, k) => {
            const sg = Math.sign(G.f(mid(c)));
            const inSol = sel && sel(sg);
            return (
              <div key={k} className={'cg-iv' + (on === k ? ' on' : '')} onMouseEnter={O.hover ? () => setOn(k) : undefined} onMouseLeave={O.hover ? () => setOn(null) : undefined}>
                <div className="cg-iv-i"><R t={c.name} />{inSol && O.marks && <span className="cg-in"><R t={L.inSolution} /></span>}</div>
                <div className="cg-fs">{(c.signs || []).map((x, j) => <span key={j} className={x > 0 ? 'p' : 'n'}>{x > 0 ? '+' : '−'}</span>)}</div>
                <div className="cg-prod"><span className={sg > 0 ? 'p' : 'n'}>{sg > 0 ? '+' : '−'}</span></div>
              </div>
            );
          })}
          {G.rule && <div className="cg-ivf"><R t={G.rule} /></div>}
        </div>
      </div>
      <Notes data={data} />
    </>
  );
}

/* ---------- grid ---------- */
function GridView({ data, L, O, th }) {
  const G = data.grid;
  const axes = G.axes;
  const byId = Object.fromEntries(axes.map((a) => [a.id, a]));
  const [layout, setLayout] = useState({ rows: (G.layout && G.layout.rows) || axes[0].id, cols: (G.layout && G.layout.cols) || axes[1].id });
  const [vals, setVals] = useState(Object.fromEntries(axes.map((a) => [a.id, a.initial || a.options[0].id])));
  const [hover, setHover] = useState(null);
  const [focus, setFocus] = useState({ row: null, col: null });
  const rowAx = byId[layout.rows], colAx = byId[layout.cols];
  const rest = axes.filter((a) => a.id !== layout.rows && a.id !== layout.cols);
  const shapeAxes = axes.filter((a) => !a.select);
  const selAx = axes.find((a) => a.select);

  const setAxis = (slot, id) => {
    const other = slot === 'rows' ? 'cols' : 'rows';
    setLayout((l) => (l[other] === id ? { [slot]: id, [other]: l[slot] } : { ...l, [slot]: id }));
    setFocus({ row: null, col: null });
  };
  const toggle = (k, id) => setFocus((f) => ({ ...f, [k]: f[k] === id ? null : id }));
  const keyAct = (fn) => (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } };
  const axisChoices = axes.map((a) => ({ id: a.id, label: a.name }));

  const cellFor = (rv, cv) => {
    const v = { ...vals, [rowAx.id]: rv, [colAx.id]: cv };
    const cell = G.cells[shapeAxes.map((a) => v[a.id]).join('|')] || {};
    const sOpt = selAx ? selAx.options.find((o) => o.id === v[selAx.id]) : null;
    const sol = cell.solution == null ? null : typeof cell.solution === 'string' ? cell.solution : cell.solution[v[selAx ? selAx.id : '']];
    return { cell, sOpt, sol };
  };
  const anyFocus = focus.row != null || focus.col != null;

  return (
    <>
      <General g={data.general} L={L} />
      <div className="cg-ctl">
        {O.axisPicker && axes.length > 2 && (
          <>
            <div className="cg-ctl-g"><span className="cg-lbl"><R t={L.rows} /></span><Seg className="cg-axes" options={axisChoices} value={layout.rows} onPick={(id) => setAxis('rows', id)} /></div>
            <div className="cg-ctl-g"><span className="cg-lbl"><R t={L.columns} /></span><Seg className="cg-axes" options={axisChoices} value={layout.cols} onPick={(id) => setAxis('cols', id)} /></div>
          </>
        )}
        {rest.map((a) => (
          <div key={a.id} className="cg-ctl-g">
            <span className="cg-lbl"><R t={a.name} /></span>
            <Seg options={a.options} value={vals[a.id]} onPick={(id) => setVals((v) => ({ ...v, [a.id]: id }))} />
          </div>
        ))}
      </div>
      <div className="cg-gw">
        <div className={'cg-g' + (O.focus ? ' cg-click' : '')} style={{ gridTemplateColumns: `110px repeat(${colAx.options.length}, minmax(0, 1fr))` }} onMouseLeave={() => setHover(null)}>
          <div className="cg-g-corner" />
          {colAx.options.map((c) => (
            <div
              key={c.id}
              className={'cg-g-h' + (focus.col === c.id ? ' fx' : hover && hover.col === c.id ? ' hl' : '')}
              onClick={O.focus ? () => toggle('col', c.id) : undefined}
              onKeyDown={O.focus ? keyAct(() => toggle('col', c.id)) : undefined}
              role={O.focus ? 'button' : undefined}
              tabIndex={O.focus ? 0 : undefined}
              aria-pressed={O.focus ? focus.col === c.id : undefined}
            >
              <b><R t={c.label} /></b>{c.sub && <small><R t={c.sub} /></small>}
            </div>
          ))}
          {rowAx.options.map((r, ri) => (
            <React.Fragment key={r.id}>
              <div
                className={'cg-g-r' + (ri ? ' cg-g-row-sep' : '') + (focus.row === r.id ? ' fx' : hover && hover.row === r.id ? ' hl' : '')}
                onClick={O.focus ? () => toggle('row', r.id) : undefined}
                onKeyDown={O.focus ? keyAct(() => toggle('row', r.id)) : undefined}
                role={O.focus ? 'button' : undefined}
                tabIndex={O.focus ? 0 : undefined}
                aria-pressed={O.focus ? focus.row === r.id : undefined}
              >
                <b><R t={r.label} /></b>{r.sub && <small><R t={r.sub} /></small>}
              </div>
              {colAx.options.map((c, ci) => {
                const { cell, sOpt, sol } = cellFor(r.id, c.id);
                const empty = sol != null && (G.emptySolutions || ['$\\varnothing$']).includes(sol);
                const out = anyFocus && ((focus.row != null && focus.row !== r.id) || (focus.col != null && focus.col !== c.id));
                const pick = focus.row === r.id && focus.col === c.id;
                return (
                  <div
                    key={c.id}
                    className={'cg-g-c' + (ci === 0 ? ' first' : '') + (ri ? ' cg-g-row-sep' : '') + (out ? ' dim' : '') + (pick ? ' pick' : '')}
                    onMouseEnter={O.hover ? () => setHover({ row: r.id, col: c.id }) : undefined}
                  >
                    {cell.f && (
                      <Plot small w={O.cellWidth} h={O.cellHeight} pad={12} f={cell.f} x0={G.x0} x1={G.x1} y0={G.y0} y1={G.y1} samples={O.cellSamples} th={th}
                        intervals={cell.intervals || [{ from: G.x0, to: G.x1 }]} select={sOpt ? (s) => s === sOpt.sign : null}
                        roots={(cell.roots || []).map((x) => ({ x: x.x, label: x.label, italic: true, filled: sOpt && sOpt.closed }))} />
                    )}
                    {cell.pattern && <div className="cg-g-pat">{cell.pattern}</div>}
                    {sol != null && <div className={'cg-g-sol' + (empty ? ' none' : '')}><R t={sol} /></div>}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
      {O.focus && (
        <div className="cg-hint">
          <span><R t={L.hint} /></span>
          {anyFocus && <button type="button" className="cg-clear" onClick={() => setFocus({ row: null, col: null })}><R t={L.clear} /></button>}
        </div>
      )}
      <Notes data={data} />
    </>
  );
}

const VIEWS = { graph: GraphView, grid: GridView };

export default function CaseGraph({ data, variant = 'graph', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = VIEWS[variant] || GraphView;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cg-root" style={cssVars(th)}>
        <div className="cg-card">
          {hd && (
            <div className="cg-head">
              {hd.kicker && <div className="cg-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="cg-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="cg-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="cg-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
