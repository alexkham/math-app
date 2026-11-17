/*
  IntervalLine.jsx

  Solution sets on the number line. Three variants:
    notation  the interval forms; click an endpoint to include or exclude it, and the notation,
              meaning, endpoints and picture follow
    compound  each condition on its own line, an AND / OR switch, and the solution computed from them
    signs     a sign chart from factors and critical points, with a switch for <, <=, >, >=;
              poles are never included

  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['notation', 'compound', 'signs'];

export const DEFAULT_LABELS = {
  // notation
  interval: 'Interval',
  meaning: 'Meaning',
  endpoints: 'Endpoints',
  numberLine: 'Number line',
  clickHint: 'Click an endpoint to include or exclude it. Click an arrow for the infinite end.',
  noMatch: 'not in the list above',
  allReals: 'all real numbers',
  bothExcluded: 'both excluded',
  bothIncluded: 'both included',
  firstIn: '{a} included, {b} excluded',
  firstOut: '{a} excluded, {b} included',
  rayIn: '{a} included; {inf} never bracketed',
  rayOut: '{a} excluded; {inf} never bracketed',
  noEndpoints: 'no endpoints',
  lineOpenBoth: 'open dots at {a} and {b}, shaded between',
  lineSolidBoth: 'solid dots at {a} and {b}, shaded between',
  lineFirstIn: 'solid dot at {a}, open dot at {b}',
  lineFirstOut: 'open dot at {a}, solid dot at {b}',
  lineRight: '{dot} dot at {a}, shading extends right',
  lineLeft: '{dot} dot at {a}, shading extends left',
  lineAll: 'entire line shaded',
  open: 'open',
  solid: 'solid',
  infinity: 'Infinity',
  // compound
  rewrite: 'Rewrite',
  condition: 'Condition',
  solution: 'Solution',
  and: 'AND',
  or: 'OR',
  intersection: 'intersection: where both hold',
  union: 'union: where at least one holds',
  empty: '\\varnothing',
  // signs
  operator: 'Inequality',
  testValue: 'test value',
  sign: 'sign of',
  inSolution: 'in the solution?',
  yes: 'yes',
  no: 'no',
  zero: '0',
  undefinedAt: 'undefined',
  criticalPoints: 'Critical points',
  rootPoint: 'zero',
  polePoint: 'pole, never included'
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
  // number line
  axis: '#94a3b8',
  tickInk: '#64748b',
  condition: '#2563eb',
  solution: '#ca8a04',
  pole: '#b91c1c'
};

export const DEFAULT_OPTIONS = {
  clickable: true,
  hover: true
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);
const fmt = (s, o) => String(s).replace(/\{(\w+)\}/g, (_, k) => (o[k] != null ? o[k] : ''));

const cssVars = (th) => ({
  '--il-ink': th.ink, '--il-title': th.title, '--il-muted': th.muted, '--il-line': th.line, '--il-box': th.box,
  '--il-panel': th.panel, '--il-soft': th.soft, '--il-head': th.headBg, '--il-navy': th.navy,
  '--il-blue': th.blue, '--il-blue-soft': th.blueSoft, '--il-gold': th.gold, '--il-gold-bg': th.goldBg,
  '--il-gold-ink': th.goldInk, '--il-slate': th.slate, '--il-slate-bg': th.slateBg, '--il-on-dark': th.onDark,
  '--il-pole': th.pole
});

const CSS = `
.il-root { font-family: 'Inter', system-ui, sans-serif; color: var(--il-ink); line-height: 1.45; }
.il-root *, .il-root *::before, .il-root *::after { box-sizing: border-box; }
.il-root .katex { text-transform: none; }
.il-card { background: var(--il-panel); border: 1.5px solid var(--il-box); border-radius: 12px; overflow: hidden; }
.il-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--il-box); }
.il-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--il-blue); }
.il-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--il-title); letter-spacing: -.01em; }
.il-lede { margin-top: 3px; font-size: 12.5px; color: var(--il-muted); }
.il-body { padding: 16px 20px 18px; background: var(--il-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.il-box { background: var(--il-panel); border: 1.5px solid var(--il-box); border-radius: 10px; }
.il-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--il-muted); margin-bottom: 3px; }
.il-math { font-family: 'STIX Two Text', serif; }
.il-hint { font-size: 12px; color: var(--il-muted); }
.il-note { padding: 10px 14px 12px; border-left: 4px solid var(--il-blue); font-size: 12.5px; }
.il-note .il-lbl { color: var(--il-blue); }
.il-warn { padding: 10px 14px 12px; border-left: 4px solid var(--il-gold); font-size: 12.5px; }
.il-warn .il-lbl { color: var(--il-gold-ink); }
.il-svg { display: block; width: 100%; height: auto; }
.il-tabs { display: flex; flex-wrap: wrap; gap: 6px; }
.il-tab { padding: 6px 12px; border: 1.5px solid var(--il-box); border-radius: 8px; background: var(--il-panel); font: 600 12.5px 'Inter', sans-serif; color: var(--il-ink); cursor: pointer; }
.il-tab:hover { border-color: var(--il-blue); }
.il-tab.on { background: var(--il-navy); border-color: var(--il-navy); color: var(--il-on-dark); }
.il-seg { display: inline-flex; flex: none; border: 1.5px solid var(--il-box); border-radius: 8px; overflow: hidden; }
.il-seg button { padding: 5px 12px; border: 0; background: var(--il-panel); font: 700 12px 'Inter', sans-serif; color: var(--il-ink); cursor: pointer; }
.il-seg button + button { border-left: 1px solid var(--il-box); }
.il-seg button.on { background: var(--il-navy); color: var(--il-on-dark); }
.il-seg.math button { font: 400 16px 'STIX Two Text', serif; min-width: 40px; }
.il-root .il-dot { cursor: pointer; }
.il-root .il-dot:hover { stroke-width: 3; }

/* ---------- notation ---------- */
.il-nt { display: grid; grid-template-columns: minmax(0, .85fr) minmax(0, 1.3fr); gap: 12px; align-items: start; }
.il-list { overflow: hidden; }
.il-item { display: grid; grid-template-columns: 92px minmax(0, 1fr); align-items: center; width: 100%; padding: 7px 12px; border: 0; border-bottom: 1px solid var(--il-line); border-left: 3px solid transparent; background: none; text-align: left; cursor: pointer; font: 400 13px 'Inter', sans-serif; color: var(--il-ink); }
.il-item:last-child { border-bottom: 0; }
.il-item:hover { background: var(--il-head); }
.il-item.on { background: var(--il-head); border-left-color: var(--il-blue); }
.il-item .il-math { font-size: 15.5px; color: var(--il-title); }
.il-item small { font-size: 12px; color: var(--il-muted); }
.il-show { overflow: hidden; }
.il-show-top { padding: 12px 16px 6px; }
.il-big { font-family: 'STIX Two Text', serif; font-size: 26px; color: var(--il-gold-ink); font-weight: 600; }
.il-big small { font: 600 11px 'Inter', sans-serif; color: var(--il-muted); margin-left: 8px; }
.il-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--il-line); }
.il-facts > div { padding: 9px 14px; font-size: 12.5px; }
.il-facts > div + div { border-left: 1px solid var(--il-line); }
.il-facts .il-math { font-size: 15px; }

/* ---------- compound ---------- */
.il-rows { overflow: hidden; }
.il-row { display: grid; grid-template-columns: 170px minmax(0, 1fr); align-items: center; border-top: 1px solid var(--il-line); }
.il-row:first-child { border-top: 0; }
.il-row > div:first-child { padding: 8px 14px; font-size: 15px; }
.il-row > div:first-child .il-lbl { margin-bottom: 1px; }
.il-row > div + div { border-left: 1px solid var(--il-line); padding: 2px 8px; }
.il-row.rw > div:first-child { color: var(--il-muted); }
.il-row.rw .il-rw { font-size: 15px; padding: 8px 6px; }
.il-row.res { background: var(--il-gold-bg); }
.il-row.res > div:first-child .il-lbl { color: var(--il-gold-ink); }
.il-row.res .il-math { color: var(--il-gold-ink); font-weight: 600; }
.il-conn { display: flex; align-items: center; gap: 10px; padding: 8px 14px; border-top: 1px solid var(--il-line); background: var(--il-soft); font-size: 12px; color: var(--il-muted); }

/* ---------- signs ---------- */
.il-sc-top { display: flex; flex-wrap: wrap; gap: 10px 16px; align-items: center; justify-content: space-between; }
.il-sc-ineq { font-family: 'STIX Two Text', serif; font-size: 19px; color: var(--il-title); }
.il-chart { overflow-x: auto; position: relative; }
.il-chart table { border-collapse: collapse; width: 100%; min-width: 520px; font-size: 12.5px; }
.il-chart th, .il-chart td { padding: 6px 8px; text-align: center; border-left: 1px solid var(--il-line); border-top: 1px solid var(--il-line); }
.il-chart th:first-child, .il-chart td:first-child { text-align: left; border-left: 0; white-space: nowrap; padding-left: 14px; }
.il-chart thead th { border-top: 0; background: var(--il-head); color: var(--il-title); font-weight: 600; font-family: 'STIX Two Text', serif; font-size: 14px; }
.il-chart thead th:first-child { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--il-muted); }
.il-chart td.pt { width: 46px; background: var(--il-soft); color: var(--il-muted); font-family: 'STIX Two Text', serif; }
.il-chart td.pt.u { color: var(--il-pole); font: 600 10px 'Inter', sans-serif; }
.il-chart th.pt { width: 46px; }
.il-chart .il-s { display: inline-block; min-width: 22px; padding: 1px 6px; border-radius: 5px; font: 700 13px 'JetBrains Mono', monospace; }
.il-chart .il-s.p { background: var(--il-blue-soft); color: var(--il-navy); }
.il-chart .il-s.m { background: var(--il-slate-bg); color: var(--il-slate); }
.il-chart tr.prod td { font-weight: 700; }
.il-chart tr.ans td { font-weight: 700; }
.il-chart td.yes { background: var(--il-gold-bg); color: var(--il-gold-ink); }
.il-chart td.hl, .il-chart th.hl { box-shadow: inset 0 0 0 999px rgba(37, 99, 235, .06); }
.il-chart td.tv { color: var(--il-muted); font-family: 'STIX Two Text', serif; font-size: 13.5px; }
.il-res { display: grid; grid-template-columns: 170px minmax(0, 1fr); align-items: center; overflow: hidden; }
.il-res > div:first-child { padding: 10px 14px; background: var(--il-gold-bg); align-self: stretch; display: flex; flex-direction: column; justify-content: center; }
.il-res > div:first-child .il-lbl { color: var(--il-gold-ink); }
.il-res > div:first-child .il-math { color: var(--il-gold-ink); font-weight: 600; font-size: 15.5px; }
.il-res > div + div { padding: 2px 8px; border-left: 1px solid var(--il-line); }

@media (max-width: 680px) {
  .il-nt { grid-template-columns: minmax(0, 1fr); }
  .il-facts { grid-template-columns: minmax(0, 1fr); }
  .il-facts > div + div { border-left: 0; border-top: 1px solid var(--il-line); }
  .il-row, .il-res { grid-template-columns: minmax(0, 1fr); }
  .il-row > div + div, .il-res > div + div { border-left: 0; border-top: 1px dashed var(--il-line); }
}
`;

/* ---------- interval sets: lists of pieces { from, to, fromIn, toIn } ---------- */
const INF = Infinity;
const inPiece = (p, x) => (x > p.from || (x === p.from && p.fromIn)) && (x < p.to || (x === p.to && p.toIn));
const inSet = (ps, x) => ps.some((p) => inPiece(p, x));
const ends = (ps) => ps.flatMap((p) => [p.from, p.to]).filter((v) => isFinite(v));

// rebuild pieces from a membership test, given the only places it can change
function build(points, test) {
  const P = [...new Set(points)].sort((a, b) => a - b);
  const gap = (i) => {
    if (!P.length) return 0;
    if (i === 0) return P[0] - 1;
    if (i === P.length) return P[P.length - 1] + 1;
    return (P[i - 1] + P[i]) / 2;
  };
  const out = [];
  let cur = null;
  for (let i = 0; i <= P.length; i++) {
    const g = test(gap(i));
    if (g && !cur) cur = { from: i === 0 ? -INF : P[i - 1], fromIn: false };
    if (!g && cur) { cur.to = P[i - 1]; cur.toIn = true; out.push(cur); cur = null; }
    if (i === P.length) break;
    const t = test(P[i]);
    if (t && !cur) cur = { from: P[i], fromIn: true };
    if (!t && cur) { cur.to = P[i]; cur.toIn = false; out.push(cur); cur = null; }
  }
  if (cur) { cur.to = INF; cur.toIn = false; out.push(cur); }
  return out;
}

const num = (v, names) => {
  if (v === INF) return '\\infty';
  if (v === -INF) return '-\\infty';
  if (names && names[v] != null) return names[v];
  return String(Math.round(v * 1000) / 1000);
};
const notationOf = (ps, names, L) => {
  if (!ps.length) return L.empty;
  return ps.map((p) => (p.from === p.to ? '\\{' + num(p.from, names) + '\\}'
    : (p.fromIn ? '[' : '(') + num(p.from, names) + ', ' + num(p.to, names) + (p.toIn ? ']' : ')'))).join(' \\cup ');
};

/* ---------- number line ---------- */
function NumberLine({ range, step = 1, ticks = true, names, sets, poles = [], th, onDot, onInf, labels }) {
  const ref = useRef(null);
  const [W, setW] = useState(600);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(() => { const w = Math.round(el.clientWidth); if (w > 0) setW(w); });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const H = 64, P = 30, y = 30;
  const [lo, hi] = range;
  const X = (v) => P + (Math.max(lo, Math.min(hi, v)) - lo) / (hi - lo) * (W - 2 * P);
  const tk = [];
  if (ticks) for (let v = Math.ceil(lo / step) * step; v <= hi + 1e-9; v += step) tk.push(Math.round(v * 1000) / 1000);
  const named = names ? Object.keys(names).map(Number) : [];
  // crowded line (long range or narrow box): keep the numbers at the sets' endpoints, show every k-th of the rest
  const endTicks = sets.filter((s) => !s.overlay).flatMap((s) => ends(s.pieces)).concat(poles);
  const tickGap = tk.length > 1 ? X(tk[1]) - X(tk[0]) : 99;
  const every = Math.max(1, Math.ceil(20 / tickGap));
  const near = (list, v) => list.some((e) => e !== v && Math.abs(X(e) - X(v)) < 18);
  const showNum = (v) => !near(named, v) && (endTicks.includes(v) || (Math.round(v / step) % every === 0 && !near(endTicks.filter((e) => tk.includes(e)), v)));
  // sets marked overlay (the hover band) sit on the axis and do not push the other lines apart
  const lanes = sets.filter((s) => !s.overlay);
  const offOf = (s) => { const i = lanes.indexOf(s); return i < 0 || lanes.length < 2 ? 0 : (i - (lanes.length - 1) / 2) * 7; };
  return (
    <div ref={ref}>
    <svg className="il-svg" viewBox={`0 0 ${W} ${H}`}>
      <line x1={8} y1={y} x2={W - 8} y2={y} stroke={th.axis} strokeWidth="1.4" />
      <path d={`M${W - 8} ${y} l-7 -4 v8 z`} fill={th.axis} />
      <path d={`M8 ${y} l7 -4 v8 z`} fill={th.axis} />
      {tk.map((v) => (
        <g key={'t' + v}>
          <line x1={X(v)} y1={y - 4} x2={X(v)} y2={y + 4} stroke={th.axis} strokeWidth="1" />
          {!named.includes(v) && showNum(v) && <text x={X(v)} y={y + 20} textAnchor="middle" fontSize="11.5" fontFamily="STIX Two Text, serif" fill={th.tickInk}>{v < 0 ? '−' + -v : v}</text>}
        </g>
      ))}
      {named.map((v) => (
        <g key={'n' + v}>
          <line x1={X(v)} y1={y - 4} x2={X(v)} y2={y + 4} stroke={th.axis} strokeWidth="1" />
          <text x={X(v)} y={y + 21} textAnchor="middle" fontSize="15" fontStyle="italic" fontFamily="STIX Two Text, serif" fill={th.title}>{names[v]}</text>
        </g>
      ))}
      {sets.map((s, si) => s.pieces.map((p, k) => {
        const a = p.from === -INF ? 10 : X(p.from), b = p.to === INF ? W - 10 : X(p.to);
        const off = offOf(s);
        return (
          <g key={si + '-' + k}>
            {a !== b && <line x1={a} y1={y + off} x2={b} y2={y + off} stroke={s.color} strokeWidth={s.width || 6} strokeLinecap="butt" opacity={s.opacity || 1} />}
            {p.from === -INF && <path className={onInf ? 'il-dot' : ''} d={`M4 ${y + off} l12 -8 v16 z`} fill={s.color} opacity={s.opacity || 1} onClick={onInf ? () => onInf(-1) : undefined} />}
            {p.to === INF && <path className={onInf ? 'il-dot' : ''} d={`M${W - 4} ${y + off} l-12 -8 v16 z`} fill={s.color} opacity={s.opacity || 1} onClick={onInf ? () => onInf(1) : undefined} />}
          </g>
        );
      }))}
      {sets.map((s, si) => s.noDots ? null : s.pieces.map((p, k) => [[p.from, p.fromIn, 0], [p.to, p.toIn, 1]].filter(([v], j) => isFinite(v) && !(j === 1 && p.from === p.to)).map(([v, inc, side]) => {
        const off = offOf(s);
        return (
          <circle key={si + '-' + k + '-' + side} className={onDot ? 'il-dot' : ''} cx={X(v)} cy={y + off} r="6" fill={inc ? s.color : th.panel} stroke={s.color} strokeWidth="2.2"
            onClick={onDot ? () => onDot(k, side) : undefined}><title>{inc ? labels.solid : labels.open}</title></circle>
        );
      })))}
      {poles.map((v) => (
        <g key={'p' + v}>
          <line x1={X(v)} y1={y - 15} x2={X(v)} y2={y + 15} stroke={th.pole} strokeWidth="1.4" strokeDasharray="3 3" />
          <circle cx={X(v)} cy={y} r="6" fill={th.panel} stroke={th.pole} strokeWidth="2.2" />
        </g>
      ))}
    </svg>
    </div>
  );
}

/* ---------- notation: the interval forms, with clickable endpoints ---------- */
function describe(p, names, L) {
  const a = num(p.from, names), b = num(p.to, names);
  const A = '$' + a + '$', B = '$' + b + '$';
  if (p.from === -INF && p.to === INF) return { meaning: L.allReals, endpoints: L.noEndpoints, picture: L.lineAll };
  if (p.to === INF) {
    return { meaning: '$x ' + (p.fromIn ? '\\geq' : '>') + ' ' + a + '$', endpoints: fmt(p.fromIn ? L.rayIn : L.rayOut, { a: A, inf: '$\\infty$' }),
      picture: fmt(L.lineRight, { dot: p.fromIn ? L.solid : L.open, a: A }) };
  }
  if (p.from === -INF) {
    return { meaning: '$x ' + (p.toIn ? '\\leq' : '<') + ' ' + b + '$', endpoints: fmt(p.toIn ? L.rayIn : L.rayOut, { a: B, inf: '$-\\infty$' }),
      picture: fmt(L.lineLeft, { dot: p.toIn ? L.solid : L.open, a: B }) };
  }
  const meaning = '$' + a + ' ' + (p.fromIn ? '\\leq' : '<') + ' x ' + (p.toIn ? '\\leq' : '<') + ' ' + b + '$';
  const endpoints = p.fromIn && p.toIn ? L.bothIncluded : !p.fromIn && !p.toIn ? L.bothExcluded : fmt(p.fromIn ? L.firstIn : L.firstOut, { a: A, b: B });
  const picture = fmt(p.fromIn && p.toIn ? L.lineSolidBoth : !p.fromIn && !p.toIn ? L.lineOpenBoth : p.fromIn ? L.lineFirstIn : L.lineFirstOut, { a: A, b: B });
  return { meaning, endpoints, picture };
}

const toPiece = (it, pts) => ({
  from: it.from === '-inf' ? -INF : pts[it.from], to: it.to === 'inf' ? INF : pts[it.to],
  fromIn: !!it.fromIn, toIn: !!it.toIn
});

function Notation({ data, L, O, th }) {
  const N = data.notation;
  const pts = N.points;                         // { a: 2, b: 6 }
  const names = Object.fromEntries(Object.entries(pts).map(([k, v]) => [v, k]));
  const items = N.items.map((it) => ({ ...it, piece: toPiece(it, pts) }));
  const [p, setP] = useState(items[0].piece);
  const [inf, setInf] = useState(false);
  const same = (a, b) => a.from === b.from && a.to === b.to && a.fromIn === b.fromIn && a.toIn === b.toIn;
  const cur = items.findIndex((it) => same(it.piece, p));
  const d = describe(p, names, L);
  const it = cur >= 0 ? items[cur] : null;
  const toggle = (k, side) => { setInf(false); setP((q) => (side === 0 ? { ...q, fromIn: !q.fromIn } : { ...q, toIn: !q.toIn })); };
  return (
    <>
      <div className="il-nt">
        <div className="il-box il-list">
          {items.map((x, i) => (
            <button key={i} type="button" className={'il-item' + (i === cur ? ' on' : '')} aria-pressed={i === cur} onClick={() => { setInf(false); setP(x.piece); }}>
              <span className="il-math"><R t={'$' + notationOf([x.piece], names, L) + '$'} /></span>
              <small><R t={x.meaning || describe(x.piece, names, L).meaning} /></small>
            </button>
          ))}
        </div>
        <div className="il-box il-show">
          <div className="il-show-top">
            <span className="il-lbl"><R t={L.interval} /></span>
            <div className="il-big"><R t={'$' + notationOf([p], names, L) + '$'} />{cur < 0 && <small><R t={L.noMatch} /></small>}</div>
          </div>
          <div style={{ padding: '0 8px 6px' }}>
            <NumberLine range={N.range} ticks={!!N.ticks} names={names} th={th} labels={L}
              sets={[{ pieces: [p], color: th.solution }]} onDot={O.clickable ? toggle : undefined} onInf={O.clickable && N.infinityNote ? () => setInf(true) : undefined} />
          </div>
          <div className="il-facts">
            <div><span className="il-lbl"><R t={L.meaning} /></span><span className="il-math"><R t={(it && it.meaning) || d.meaning} /></span></div>
            <div><span className="il-lbl"><R t={L.endpoints} /></span><R t={(it && it.endpoints) || d.endpoints} /></div>
            <div><span className="il-lbl"><R t={L.numberLine} /></span><R t={(it && it.picture) || d.picture} /></div>
          </div>
        </div>
      </div>
      {inf && N.infinityNote ? (
        <div className="il-box il-warn"><span className="il-lbl"><R t={N.infinityNote.label || L.infinity} /></span><R t={N.infinityNote.text} /></div>
      ) : N.note ? <div className="il-box il-note"><span className="il-lbl"><R t={N.note.label} /></span><R t={N.note.text} /></div> : null}
      {O.clickable && <div className="il-hint"><R t={N.hint || L.clickHint} /></div>}
    </>
  );
}

/* ---------- compound: AND / OR of conditions ---------- */
const rayOf = (c) => {
  const v = c.value;
  if (c.op === '<') return [{ from: -INF, to: v, fromIn: false, toIn: false }];
  if (c.op === '<=') return [{ from: -INF, to: v, fromIn: false, toIn: true }];
  if (c.op === '>') return [{ from: v, to: INF, fromIn: false, toIn: false }];
  if (c.op === '>=') return [{ from: v, to: INF, fromIn: true, toIn: false }];
  return c.pieces || [];
};

function Compound({ data, L, th }) {
  const cases = data.compound.cases;
  const [ci, setCi] = useState(0);
  const c = cases[ci];
  const [conn, setConn] = useState({});
  const mode = conn[ci] || c.connective;
  const sets = c.conditions.map(rayOf);
  const pts = sets.flatMap(ends);
  // a condition may give the LaTeX of its value (tex), so 5/3 is written as a fraction, not 1.667
  const names = {};
  c.conditions.forEach((x) => { if (x.tex != null && x.value != null) names[x.value] = x.tex; });
  const res = build(pts, (x) => (mode === 'and' ? sets.every((s) => inSet(s, x)) : sets.some((s) => inSet(s, x))));
  const right = mode === c.connective;
  const note = right ? c.note : (c.wrongNote || data.compound.wrongNote);
  const range = c.range || data.compound.range;
  return (
    <>
      {cases.length > 1 && (
        <div className="il-tabs">
          {cases.map((x, i) => <button key={i} type="button" className={'il-tab' + (i === ci ? ' on' : '')} aria-pressed={i === ci} onClick={() => setCi(i)}><R t={x.name} /></button>)}
        </div>
      )}
      <div className="il-box il-rows">
        {c.source && (
          <div className="il-row rw">
            <div><span className="il-lbl"><R t={L.rewrite} /></span><span className="il-math"><R t={c.source} /></span></div>
            <div className="il-rw il-math"><R t={c.rewrite} /></div>
          </div>
        )}
        {c.conditions.map((x, i) => (
          <div key={i} className="il-row">
            <div><span className="il-lbl"><R t={L.condition} /> {i + 1}</span><span className="il-math"><R t={x.label} /></span></div>
            <div><NumberLine range={range} th={th} labels={L} sets={[{ pieces: sets[i], color: th.condition, width: 5 }]} /></div>
          </div>
        ))}
        <div className="il-conn">
          <div className="il-seg">
            {['and', 'or'].map((m) => <button key={m} type="button" className={mode === m ? 'on' : ''} aria-pressed={mode === m} onClick={() => setConn((o) => ({ ...o, [ci]: m }))}><R t={L[m]} /></button>)}
          </div>
          <span><R t={mode === 'and' ? L.intersection : L.union} /></span>
        </div>
        <div className="il-row res">
          <div><span className="il-lbl"><R t={L.solution} /></span><span className="il-math"><R t={'$' + notationOf(res, names, L) + '$'} /></span></div>
          <div><NumberLine range={range} th={th} labels={L} sets={[{ pieces: res, color: th.solution }]} /></div>
        </div>
      </div>
      {note && <div className={'il-box ' + (right ? 'il-note' : 'il-warn')}><span className="il-lbl"><R t={note.label} /></span><R t={note.text} /></div>}
    </>
  );
}

/* ---------- signs: sign chart with an operator switch ---------- */
const OPS = { '<': '<', '<=': '\\leq', '>': '>', '>=': '\\geq' };

function Signs({ data, L, O, th }) {
  const cases = data.signs.cases;
  const [ci, setCi] = useState(0);
  const c = cases[ci];
  const [opBy, setOp] = useState({});
  const op = opBy[ci] || c.op;
  const [hl, setHl] = useState(null);
  const F = c.factors;                                        // [{ label, root, power?, negative?, denominator? }]
  const crit = [...new Set(F.map((f) => f.root))].sort((a, b) => a - b);
  const poles = F.filter((f) => f.denominator).map((f) => f.root);
  const gaps = crit.length + 1;
  const tests = c.tests || Array.from({ length: gaps }, (_, i) => (i === 0 ? crit[0] - 1 : i === crit.length ? crit[crit.length - 1] + 1 : (crit[i - 1] + crit[i]) / 2));
  const fs = (f, x) => Math.sign(Math.pow(x - f.root, f.power || 1)) * (f.negative ? -1 : 1);
  const prod = (x) => F.reduce((n, f) => n * fs(f, x), 1);
  const ok = (s) => (op === '<' ? s < 0 : op === '<=' ? s <= 0 : op === '>' ? s > 0 : s >= 0);
  const test = (x) => {
    if (poles.includes(x)) return false;
    if (crit.includes(x)) return ok(0);
    return ok(prod(x));
  };
  const res = build(crit, test);
  const range = c.range || data.signs.range;
  const S = (s) => <span className={'il-s ' + (s > 0 ? 'p' : 'm')}>{s > 0 ? '+' : '−'}</span>;
  const head = (i) => (i === 0 ? 'x < ' + num(crit[0]) : i === crit.length ? 'x > ' + num(crit[crit.length - 1]) : num(crit[i - 1]) + ' < x < ' + num(crit[i]));
  const ptCell = (v, f) => {
    if (f) return f.root === v ? (f.denominator ? <td key={'p' + v} className="pt u"><R t={L.undefinedAt} /></td> : <td key={'p' + v} className="pt">0</td>) : <td key={'p' + v} className="pt" />;
    if (poles.includes(v)) return <td key={'p' + v} className="pt u"><R t={L.undefinedAt} /></td>;
    return <td key={'p' + v} className="pt">0</td>;
  };
  const cols = (render, pt) => {
    const out = [];
    for (let i = 0; i < gaps; i++) {
      out.push(render(i));
      if (i < crit.length) out.push(pt(crit[i]));
    }
    return out;
  };
  const hov = (i) => (O.hover ? { onMouseEnter: () => setHl(i), onMouseLeave: () => setHl(null) } : {});
  const hlPieces = hl == null ? [] : [{ from: hl === 0 ? -INF : crit[hl - 1], to: hl === crit.length ? INF : crit[hl], fromIn: false, toIn: false }];
  const note = (c.notes || {})[op] || (c.notes || {})['*'];
  return (
    <>
      <div className="il-sc-top">
        {cases.length > 1 ? (
          <div className="il-tabs">
            {cases.map((x, i) => <button key={i} type="button" className={'il-tab' + (i === ci ? ' on' : '')} aria-pressed={i === ci} onClick={() => { setCi(i); setHl(null); }}><R t={x.name} /></button>)}
          </div>
        ) : <span />}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="il-lbl" style={{ margin: 0 }}><R t={L.operator} /></span>
          <div className="il-seg math">
            {Object.keys(OPS).map((o) => <button key={o} type="button" className={op === o ? 'on' : ''} aria-pressed={op === o} onClick={() => setOp((m) => ({ ...m, [ci]: o }))}><R t={'$' + OPS[o] + '$'} /></button>)}
          </div>
        </div>
      </div>
      <div className="il-box" style={{ padding: '10px 14px' }}>
        <span className="il-sc-ineq"><R t={'$' + c.expression + ' ' + OPS[op] + ' 0$'} /></span>
      </div>
      <div className="il-box il-chart">
        <table>
          <thead>
            <tr>
              <th><R t={L.criticalPoints} /></th>
              {cols((i) => <th key={'g' + i} className={hl === i ? 'hl' : ''} {...hov(i)}><R t={'$' + head(i).replace('<', '<') + '$'} /></th>,
                (v) => <th key={'p' + v} className="pt"><R t={'$' + num(v) + '$'} /></th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><R t={L.testValue} /></td>
              {cols((i) => <td key={'g' + i} className={'tv' + (hl === i ? ' hl' : '')} {...hov(i)}>{num(tests[i]).replace('-', '−')}</td>, (v) => <td key={'p' + v} className="pt" />)}
            </tr>
            {F.map((f, k) => (
              <tr key={k}>
                <td><R t={L.sign} /> <span className="il-math"><R t={f.label} /></span></td>
                {cols((i) => <td key={'g' + i} className={hl === i ? 'hl' : ''} {...hov(i)}>{S(fs(f, tests[i]))}</td>, (v) => ptCell(v, f))}
              </tr>
            ))}
            <tr className="prod">
              <td><R t={L.sign} /> <span className="il-math"><R t={'$' + c.expression + '$'} /></span></td>
              {cols((i) => <td key={'g' + i} className={hl === i ? 'hl' : ''} {...hov(i)}>{S(prod(tests[i]))}</td>, (v) => ptCell(v, null))}
            </tr>
            <tr className="ans">
              <td><R t={L.inSolution} /></td>
              {cols((i) => { const y = ok(prod(tests[i])); return <td key={'g' + i} className={(y ? 'yes' : '') + (hl === i ? ' hl' : '')} {...hov(i)}><R t={y ? L.yes : L.no} /></td>; },
                (v) => { const y = test(v); return <td key={'p' + v} className={'pt' + (y ? ' yes' : '')}><R t={y ? L.yes : L.no} /></td>; })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="il-box il-res">
        <div><span className="il-lbl"><R t={L.solution} /></span><span className="il-math"><R t={'$' + notationOf(res, null, L) + '$'} /></span></div>
        <div>
          <NumberLine range={range} th={th} labels={L} poles={poles}
            sets={[...(hlPieces.length ? [{ pieces: hlPieces, color: th.condition, width: 14, opacity: 0.18, noDots: true, overlay: true }] : []), { pieces: res, color: th.solution }]} />
        </div>
      </div>
      {note && <div className="il-box il-note"><span className="il-lbl"><R t={note.label} /></span><R t={note.text} /></div>}
    </>
  );
}

const VIEWS = { notation: Notation, compound: Compound, signs: Signs };

export default function IntervalLine({ data, variant = 'notation', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = VIEWS[variant] || Notation;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="il-root" style={cssVars(th)}>
        <div className="il-card">
          {hd && (
            <div className="il-head">
              {hd.kicker && <div className="il-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="il-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="il-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="il-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
