/*
  SetDiagram.jsx

  Venn diagrams with regions you can click. Four variants:
    operations  two or three sets with their elements; pick an operation, or click regions to build a set
    count       inclusion–exclusion one term at a time; each region shows how often it has been counted,
                and clicking a region shows which terms count it
    identity    two expressions built step by step, ending on the same regions (e.g. De Morgan's laws)
    relations   how sets can stand to each other (equal, equivalent, disjoint, overlapping, subset, partition)

  operations and count take an optional probability section (data.probability):
  the probability of what is shaded, with an optional condition ("given B").

  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useId, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['operations', 'count', 'identity', 'relations'];

export const DEFAULT_LABELS = {
  elementsThat: 'Elements that',
  definition: 'Definition',
  result: 'Result',
  properties: 'Key properties',
  selection: 'Your selection',
  regions: 'Regions',
  elements: 'Elements',
  noneSelected: 'none selected',
  outside: 'outside',
  noMatch: 'No single operation in the list gives exactly these regions. Pick an operation above to return to it.',
  clickHint: 'Click a region of the diagram to add or remove it.',
  runningTotal: 'running total',
  timesCounted: 'Times each element is counted',
  tones: ['not counted', 'counted once', 'counted twice', 'counted three times'],
  regionLine: '{count} elements, counted {times} {unit} so far.',
  time: 'time',
  times: 'times',
  noTermYet: 'no term added yet counts it',
  countHint: 'Click a region to see which terms of the formula count it. Click a term, or use the arrows, to add the formula one term at a time.',
  termsAdded: '{k} of {n} terms added.',
  prev: 'Previous term',
  next: 'Next term',
  term: 'term {n}',
  probability: 'Probability',
  rule: 'Rule',
  calc: 'Calculation',
  sumOfRegions: 'Sum of the shaded regions',
  condition: 'Condition',
  noCondition: 'none',
  selectionNotation: '\\text{selection}',
  thisRegion: 'This region',
  sameRegions: 'same regions',
  buildBoth: 'finish both sides',
  definingCondition: 'Defining condition',
  example: 'Example',
  keyFact: 'Key distinguishing fact',
  diagram: 'Venn diagram',
  inSets: 'in {sets}',
  notInSets: 'not in {sets}'
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
  // diagram
  circle: '#1e3a8a',
  setLabel: '#1e3a8a',
  universeLine: '#c7cedb',
  universeLabel: '#64748b',
  regionFill: '#ffffff',
  pickFill: '#fde68a',
  pickInk: '#a16207',
  pickLine: '#fde68a',
  elementInk: '#64748b',
  hatch: '#1e3a8a',
  veil: '#f1f5f9',
  // count: [fill, ink] for ×0, ×1, ×2, ×3 and more
  tones: [['#f1f5f9', '#94a3b8'], ['#dbeafe', '#1e3a8a'], ['#fde68a', '#a16207'], ['#f59e0b', '#ffffff']]
};

export const DEFAULT_OPTIONS = {
  clickable: true,
  hover: true,
  startAt: 'end',
  key: true
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--sd-ink': th.ink, '--sd-title': th.title, '--sd-muted': th.muted, '--sd-line': th.line, '--sd-box': th.box,
  '--sd-panel': th.panel, '--sd-soft': th.soft, '--sd-head': th.headBg, '--sd-navy': th.navy,
  '--sd-blue': th.blue, '--sd-blue-soft': th.blueSoft, '--sd-gold': th.gold, '--sd-gold-bg': th.goldBg,
  '--sd-gold-ink': th.goldInk, '--sd-slate': th.slate, '--sd-slate-bg': th.slateBg, '--sd-on-dark': th.onDark,
  '--sd-pick-line': th.pickLine
});

const CSS = `
.sd-root {
  font-family: 'Inter', system-ui, sans-serif; color: var(--sd-ink); line-height: 1.45;
}
.sd-root *, .sd-root *::before, .sd-root *::after { box-sizing: border-box; }
.sd-root .katex { text-transform: none; }
.sd-card { background: var(--sd-panel); border: 1.5px solid var(--sd-box); border-radius: 12px; overflow: hidden; }
.sd-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--sd-box); }
.sd-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--sd-blue); }
.sd-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--sd-title); letter-spacing: -.01em; }
.sd-lede { margin-top: 3px; font-size: 12.5px; color: var(--sd-muted); }
.sd-body { padding: 16px 20px 18px; background: var(--sd-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.sd-box { background: var(--sd-panel); border: 1.5px solid var(--sd-box); border-radius: 10px; }
.sd-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--sd-muted); }
.sd-math { font-family: 'STIX Two Text', serif; }
.sd-two { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 12px; align-items: stretch; }
.sd-fig { padding: 6px; display: flex; align-items: center; justify-content: center; }
.sd-fig svg { width: 100%; height: auto; display: block; max-width: 460px; }
.sd-fig .sd-reg { transition: fill .2s, opacity .2s; }
.sd-fig.sd-can .sd-reg { cursor: pointer; }
.sd-fig .sd-reg:focus { outline: none; }
.sd-muted { color: var(--sd-muted); }
.sd-sum .sd-muted { font-family: 'Inter', sans-serif; font-size: 12px; }
.sd-op:focus-visible, .sd-term:focus-visible, .sd-btn:focus-visible { outline: 2px solid var(--sd-blue); outline-offset: 2px; }
.sd-warn { padding: 10px 14px 12px; border-left: 4px solid var(--sd-gold); font-size: 12.5px; }
.sd-warn .sd-lbl { color: var(--sd-gold-ink); margin-bottom: 4px; }

/* ---------- operations ---------- */
.sd-ops { display: flex; flex-wrap: wrap; gap: 6px; }
.sd-op { border: 1.5px solid var(--sd-box); background: var(--sd-panel); border-radius: 8px; padding: 5px 12px; cursor: pointer; font: 600 12px 'Inter', sans-serif; color: var(--sd-slate); display: inline-flex; align-items: baseline; gap: 8px; }
.sd-op b { font-family: 'STIX Two Text', serif; font-size: 15px; font-weight: 400; color: var(--sd-title); }
.sd-op:hover { border-color: var(--sd-blue); }
.sd-op.on { background: var(--sd-navy); border-color: var(--sd-navy); color: var(--sd-on-dark); }
.sd-op.on b, .sd-op.on .katex { color: var(--sd-on-dark); }
.sd-info { display: grid; align-content: start; overflow: hidden; }
.sd-info-h { padding: 10px 14px; background: var(--sd-head); border-bottom: 1.5px solid var(--sd-box); }
.sd-info-h b { font-size: 15px; color: var(--sd-title); }
.sd-info-h .sd-math { font-size: 17px; color: var(--sd-title); margin-left: 8px; }
.sd-row { padding: 8px 14px; border-top: 1px solid var(--sd-line); font-size: 12.5px; }
.sd-row:first-of-type { border-top: 0; }
.sd-row .sd-lbl { margin-bottom: 2px; }
.sd-row .sd-math { font-size: 15.5px; }
.sd-row.res { background: var(--sd-gold-bg); }
.sd-row.res .sd-lbl { color: var(--sd-gold-ink); }
.sd-row.res .sd-math { font-size: 17px; color: var(--sd-gold-ink); font-weight: 600; }
.sd-hint { font-size: 11.5px; color: var(--sd-muted); display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.sd-chips { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 2px; }
.sd-chips span { padding: 2px 8px; border-radius: 999px; background: var(--sd-gold-bg); color: var(--sd-gold-ink); font-size: 11.5px; }

/* ---------- count ---------- */
.sd-terms { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; padding: 10px 12px; }
.sd-term { border: 1.5px solid var(--sd-line); background: var(--sd-panel); border-radius: 8px; padding: 4px 8px; cursor: pointer; display: grid; justify-items: center; gap: 0; min-width: 58px; transition: border-color .15s, background .15s, opacity .15s; opacity: .45; }
.sd-term.in { opacity: 1; border-color: var(--sd-box); }
.sd-term.cur { border-color: var(--sd-blue); background: var(--sd-head); opacity: 1; }
.sd-term.hit { box-shadow: 0 0 0 2px var(--sd-gold); }
.sd-term .sd-math { font-size: 13.5px; }
.sd-term small { font: 700 12px 'STIX Two Text', serif; color: var(--sd-title); }
.sd-term.neg small { color: var(--sd-gold-ink); }
.sd-eq { margin-left: auto; display: flex; align-items: baseline; gap: 8px; padding-left: 10px; }
.sd-eq b { font: 700 22px 'STIX Two Text', serif; color: var(--sd-title); }
.sd-nav { display: flex; gap: 6px; align-items: center; }
.sd-btn { font: 600 11.5px 'Inter', sans-serif; padding: 5px 11px; border-radius: 7px; border: 1.5px solid var(--sd-box); background: var(--sd-panel); color: var(--sd-title); cursor: pointer; }
.sd-btn:hover:not(:disabled) { border-color: var(--sd-blue); }
.sd-btn:disabled { opacity: .4; cursor: default; }
.sd-btn.pri { background: var(--sd-navy); border-color: var(--sd-navy); color: var(--sd-on-dark); }
.sd-side { display: grid; gap: 10px; align-content: start; }
.sd-key { padding: 10px 14px; display: grid; gap: 6px; font-size: 12px; }
.sd-key div { display: flex; align-items: center; gap: 8px; }
.sd-key i { flex: none; width: 26px; height: 18px; border-radius: 4px; border: 1px solid var(--sd-box); font: 700 10px/16px 'JetBrains Mono', monospace; font-style: normal; text-align: center; }
.sd-say { padding: 10px 14px; border-left: 4px solid var(--sd-blue); font-size: 12.5px; min-height: 74px; }
.sd-say .sd-lbl { color: var(--sd-blue); margin-bottom: 4px; }
.sd-regi { padding: 10px 14px; font-size: 12.5px; }
.sd-regi .sd-math { font-size: 15px; color: var(--sd-title); }
.sd-regi b { color: var(--sd-title); }
.sd-regi .sd-sum { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 6px; margin-top: 6px; font-family: 'STIX Two Text', serif; font-size: 14.5px; }
.sd-regi .sd-sum i { font-style: normal; padding: 1px 7px; border-radius: 6px; background: var(--sd-head); border: 1px solid var(--sd-blue-soft); }
.sd-regi .sd-sum i.neg { background: var(--sd-gold-bg); border-color: var(--sd-pick-line); }
.sd-regi .sd-sum b { font-size: 15.5px; }

/* ---------- probability section ---------- */
.sd-prob { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.4fr) auto; overflow: hidden; }
.sd-prob.sd-p2 { grid-template-columns: minmax(0, .9fr) minmax(0, 1.4fr); }
.sd-prob > div { padding: 10px 14px; }
.sd-prob > div + div { border-left: 1px solid var(--sd-line); }
.sd-prob .sd-lbl { margin-bottom: 3px; }
.sd-prob-v { background: var(--sd-gold-bg); }
.sd-prob-v .sd-lbl { color: var(--sd-gold-ink); }
.sd-prob-n { font-family: 'STIX Two Text', serif; font-size: 15px; color: var(--sd-gold-ink); }
.sd-val { font: 700 22px 'STIX Two Text', serif; color: var(--sd-gold-ink); margin-left: 6px; }
.sd-meter { height: 10px; border-radius: 5px; background: var(--sd-panel); overflow: hidden; margin-top: 6px; }
.sd-meter i { display: block; height: 100%; background: var(--sd-gold); border-radius: 5px; transition: width .25s; }
.sd-calc { font-family: 'STIX Two Text', serif; font-size: 15.5px; overflow-x: auto; display: block; }
.sd-calc + .sd-lbl { margin-top: 8px; }
.sd-psum { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 6px; font-family: 'STIX Two Text', serif; font-size: 15px; }
.sd-psum i { font-style: normal; padding: 1px 8px; border-radius: 6px; background: var(--sd-gold-bg); color: var(--sd-gold-ink); }
.sd-psum i.g { background: var(--sd-slate-bg); color: var(--sd-slate); }
.sd-psum b { color: var(--sd-title); }
.sd-pnote { font-size: 12px; color: var(--sd-muted); margin-top: 6px; }
.sd-seg { display: inline-flex; border: 1.5px solid var(--sd-box); border-radius: 8px; overflow: hidden; background: var(--sd-panel); }
.sd-seg button { border: 0; background: none; padding: 4px 11px; cursor: pointer; font: 600 11.5px 'Inter', sans-serif; color: var(--sd-slate); }
.sd-seg button + button { border-left: 1.5px solid var(--sd-box); }
.sd-seg button.on { background: var(--sd-navy); color: var(--sd-on-dark); }
.sd-seg button.on .katex { color: inherit; }

/* ---------- identity ---------- */
.sd-id { display: grid; grid-template-columns: minmax(0, 1fr) 44px minmax(0, 1fr); align-items: center; }
.sd-id-side { padding: 8px 10px 10px; display: grid; gap: 6px; }
.sd-id-side svg { width: 100%; height: auto; display: block; max-width: 340px; margin: 0 auto; }
.sd-id-h { text-align: center; font-family: 'STIX Two Text', serif; font-size: 17px; color: var(--sd-title); }
.sd-steps { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; }
.sd-step { border: 1.5px solid var(--sd-box); background: var(--sd-panel); border-radius: 999px; padding: 2px 10px; cursor: pointer; font-family: 'STIX Two Text', serif; font-size: 14px; color: var(--sd-slate); }
.sd-step.on { background: var(--sd-navy); border-color: var(--sd-navy); color: var(--sd-on-dark); }
.sd-step.on .katex { color: inherit; }
.sd-eqs { display: grid; justify-items: center; gap: 4px; }
.sd-eqs b { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font: 700 18px 'STIX Two Text', serif; background: var(--sd-line); color: var(--sd-muted); transition: background .2s, color .2s; }
.sd-eqs.ok b { background: var(--sd-gold); color: var(--sd-on-dark); }
.sd-eqs small { font: 700 8.5px 'JetBrains Mono', monospace; letter-spacing: .08em; text-transform: uppercase; color: var(--sd-muted); text-align: center; }
.sd-law { padding: 10px 14px; border-left: 4px solid var(--sd-blue); font-size: 12.5px; }
.sd-law .sd-math { font-size: 17px; color: var(--sd-title); display: block; margin-bottom: 2px; }

/* ---------- relations ---------- */
.sd-rels { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 10px; }
.sd-rel { overflow: hidden; display: flex; flex-direction: column; cursor: pointer; transition: border-color .15s, box-shadow .15s; text-align: left; padding: 0; font: inherit; color: inherit; }
.sd-rel:hover, .sd-rel.on { border-color: var(--sd-blue); }
.sd-rel.on { box-shadow: 0 0 0 2px var(--sd-blue-soft); }
.sd-rel svg { display: block; width: 100%; height: auto; background: var(--sd-soft); border-bottom: 1px solid var(--sd-line); }
.sd-rel-n { padding: 7px 12px 0; font-size: 13.5px; font-weight: 800; color: var(--sd-title); }
.sd-rel-c { padding: 2px 12px 9px; font-family: 'STIX Two Text', serif; font-size: 14px; }
.sd-reld { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.2fr); overflow: hidden; }
.sd-reld > div { padding: 9px 14px; font-size: 12.5px; }
.sd-reld > div + div { border-left: 1px solid var(--sd-line); }
.sd-reld .sd-lbl { margin-bottom: 2px; }

@media (max-width: 680px) {
  .sd-id, .sd-reld, .sd-prob, .sd-prob.sd-p2 { grid-template-columns: 1fr; }
  .sd-reld > div + div, .sd-prob > div + div { border-left: 0; border-top: 1px solid var(--sd-line); }
  .sd-two { grid-template-columns: 1fr; }
  .sd-eq { margin-left: 0; width: 100%; }
}
`;

/* ---------- geometry: 2 or 3 circles, regions named by membership ('A', 'AB', '' = outside) ---------- */
const LAYOUT = {
  2: { w: 420, h: 250, r: 88, c: { 0: [160, 130], 1: [260, 130] },
    at: { '10': [108, 130], '01': [312, 130], '11': [210, 130], '00': [386, 226] }, rows: { '10': 5, '01': 5, '11': 4, '00': 1 }, name: { 0: [96, 38], 1: [324, 38] } },
  3: { w: 420, h: 320, r: 84, c: { 0: [165, 120], 1: [255, 120], 2: [210, 198] },
    at: { '100': [122, 98], '010': [298, 98], '001': [210, 246], '110': [210, 88], '101': [160, 172], '011': [260, 172], '111': [210, 140], '000': [384, 296] },
    rows: { '100': 3, '010': 3, '001': 2, '110': 2, '101': 2, '011': 2, '111': 2, '000': 1 },
    name: { 0: [92, 34], 1: [328, 34], 2: [210, 306] } }
};
const keyOf = (sets, all) => all.filter((s) => sets.includes(s)).join('');
const regionsOf = (all) => { const out = []; for (let m = 0; m < (1 << all.length); m++) out.push(all.filter((_, i) => m & (1 << i))); return out; };
const fmt = (s, o) => String(s).replace(/\{(\w+)\}/g, (_, k) => (o[k] != null ? o[k] : ''));

function Venn({ sets, fill, content, on, setOn, universe, onPick, picked, th, veil, strong, L: lab, pressed, canPick }) {
  const uid = useId().replace(/:/g, '');
  const [foc, setFoc] = useState(null);                // region reached with the keyboard
  const dim = on != null ? on : foc;
  const names = sets.map((s) => s.id);
  const L = LAYOUT[names.length] || LAYOUT[2];
  const regs = regionsOf(names);                       // arrays of set ids, supersets later
  const idx = (n) => names.indexOf(n);
  const bits = (members) => names.map((n) => (members.includes(n) ? '1' : '0')).join('');
  const inClips = (members, el) => members.reduce((e, n) => <g clipPath={`url(#sd${uid}c${idx(n)})`}>{e}</g>, el);
  const pickedMembers = picked != null ? regs.find((m) => m.join('') === picked) : null;
  return (
    <svg viewBox={`0 0 ${L.w} ${L.h}`} role={onPick ? 'group' : 'img'} aria-label={lab.diagram}>
      <defs>
        <pattern id={`sd${uid}h`} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke={th.hatch} strokeWidth="1.4" opacity=".35" /></pattern>
        {names.map((n, i) => <clipPath key={n} id={`sd${uid}c${i}`}><circle cx={L.c[i][0]} cy={L.c[i][1]} r={L.r} /></clipPath>)}
        {regs.map((m) => (
          <mask key={bits(m)} id={`sd${uid}m${bits(m)}`}>
            <rect x="0" y="0" width={L.w} height={L.h} fill="#fff" />
            {names.filter((n) => !m.includes(n)).map((n) => <circle key={n} cx={L.c[idx(n)][0]} cy={L.c[idx(n)][1]} r={L.r} fill="#000" />)}
          </mask>
        ))}
      </defs>
      <rect x="2" y="2" width={L.w - 4} height={L.h - 4} rx="10" fill={th.regionFill} stroke={th.universeLine} strokeWidth="1.5" />
      {regs.map((m) => {
        const k = m.join('');
        const can = !!onPick && (!canPick || canPick(k));
        const rest = names.filter((n) => !m.includes(n));
        const name = m.length ? fmt(lab.inSets, { sets: m.join(', ') }) + (rest.length ? ', ' + fmt(lab.notInSets, { sets: rest.join(', ') }) : '') : lab.outside;
        const inner = (
          <rect className="sd-reg" x="3" y="3" width={L.w - 6} height={L.h - 6} rx="9" fill={fill(k)} opacity={dim != null && dim !== k ? 0.55 : 1} mask={`url(#sd${uid}m${bits(m)})`}
            tabIndex={can ? 0 : undefined} role={can ? 'button' : undefined} aria-label={can ? name : undefined} aria-pressed={can && pressed ? !!pressed(k) : undefined}
            onKeyDown={can ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick(k); } } : undefined}
            onFocus={can ? (e) => { if (e.target.matches(':focus-visible')) { setFoc(k); if (setOn) setOn(k); } } : undefined}
            onBlur={can ? () => { if (foc === k) { setFoc(null); if (setOn) setOn(null); } } : undefined}
            onPointerEnter={setOn ? (e) => { if (e.pointerType === 'mouse') setOn(k); } : undefined} onPointerLeave={setOn ? () => setOn(null) : undefined} onClick={onPick ? () => onPick(k) : undefined} />
        );
        return <g key={bits(m)}>{inClips(m, inner)}</g>;
      })}
      {pickedMembers && (
        <g pointerEvents="none">
          {inClips(pickedMembers, <rect x="3" y="3" width={L.w - 6} height={L.h - 6} rx="9" fill={`url(#sd${uid}h)`} mask={`url(#sd${uid}m${bits(pickedMembers)})`} />)}
        </g>
      )}
      {veil && regs.filter((m) => veil(m.join(''))).map((m) => (
        <g key={'v' + bits(m)} pointerEvents="none">{inClips(m, <rect x="3" y="3" width={L.w - 6} height={L.h - 6} rx="9" fill={th.veil} opacity=".82" mask={`url(#sd${uid}m${bits(m)})`} />)}</g>
      ))}
      {names.map((n, i) => <circle key={n} cx={L.c[i][0]} cy={L.c[i][1]} r={L.r} fill="none" stroke={strong && strong.includes(n) ? th.gold : th.circle} strokeWidth={strong && strong.includes(n) ? 3.2 : 1.8} pointerEvents="none" />)}
      {sets.map((s, i) => <text key={s.id} x={L.name[i][0]} y={L.name[i][1]} textAnchor="middle" fontFamily="STIX Two Text, serif" fontStyle="italic" fontSize="17" fill={th.setLabel} pointerEvents="none">{s.label || s.id}</text>)}
      {universe && <text x={14} y={22} fontFamily="STIX Two Text, serif" fontStyle="italic" fontSize="14" fill={th.universeLabel} pointerEvents="none">{universe}</text>}
      {regs.map((m) => {
        const k = m.join('');
        const c = content(k);
        if (!c) return null;
        const [x, y] = L.at[bits(m)];
        return <g key={'t' + bits(m)} pointerEvents="none">{c(x, y, L.rows[bits(m)])}</g>;
      })}
    </svg>
  );
}

/* ---------- probability section (optional, for operations and count) ---------- */
const num = (x) => String(Math.round(x * 1e4) / 1e4);
const inner = (t) => String(t || '').replace(/^\$|\$$/g, '');

function ProbOperations({ data, L, sel, cur, P, cond, setCond, names }) {
  const cfg = data.probability;
  const conds = cfg.conditions || [];
  const given = cond ? new Set(cond.regions) : null;
  const order = regionsOf(names).map((m) => m.join(''));
  const shaded = order.filter((k) => sel.has(k) && (!given || given.has(k)));
  const top = shaded.reduce((n, k) => n + (P[k] || 0), 0);
  const base = given ? order.filter((k) => given.has(k)).reduce((n, k) => n + (P[k] || 0), 0) : 1;
  const value = base ? top / base : 0;
  const ev = cur ? inner((cur.prob && cur.prob.event) || cur.notation) : L.selectionNotation;
  const notation = (cur && cur.prob && cur.prob.notation && !cond) ? cur.prob.notation : '$P(' + ev + (cond ? ' \\mid ' + inner(cond.notation) : '') + ')$';
  const pr = cur && !cond ? cur.prob : null;
  const note = cond ? cond.note : pr && pr.note;
  return (
    <div className={'sd-box sd-prob' + (conds.length ? '' : ' sd-p2')}>
      <div className="sd-prob-v">
        <span className="sd-lbl"><R t={cfg.title || L.probability} /></span>
        <span className="sd-prob-n"><R t={notation} /> =</span><span className="sd-val">{num(value)}</span>
        <div className="sd-meter"><i style={{ width: Math.max(0, Math.min(100, value * 100)) + '%' }} /></div>
      </div>
      <div>
        {pr && (pr.rule || pr.calc) ? (
          <>
            {pr.rule && <><span className="sd-lbl"><R t={pr.ruleLabel || L.rule} /></span><span className="sd-calc"><R t={pr.rule} /></span></>}
            {pr.calc && <><span className="sd-lbl"><R t={L.calc} /></span><span className="sd-calc"><R t={pr.calc} /></span></>}
          </>
        ) : (
          <>
            <span className="sd-lbl"><R t={L.sumOfRegions} /></span>
            <div className="sd-psum">
              {given && shaded.length > 1 && <span>(</span>}
              {shaded.length ? shaded.map((k, i) => <React.Fragment key={k}>{i > 0 && <span>+</span>}<i>{num(P[k] || 0)}</i></React.Fragment>) : <i>0</i>}
              {given && shaded.length > 1 && <span>)</span>}
              {given && <><span>{'÷'}</span><i className="g">{num(base)}</i></>}
              <span>=</span><b>{num(value)}</b>
            </div>
          </>
        )}
        {note && <div className="sd-pnote"><R t={note} /></div>}
      </div>
      {conds.length > 0 && (
        <div>
          <span className="sd-lbl"><R t={L.condition} /></span>
          <div className="sd-seg">
            <button type="button" className={!cond ? 'on' : ''} aria-pressed={!cond} onClick={() => setCond(null)}><R t={L.noCondition} /></button>
            {conds.map((c) => <button key={c.id} type="button" className={cond && cond.id === c.id ? 'on' : ''} aria-pressed={!!cond && cond.id === c.id} onClick={() => setCond(c.id)}><R t={c.label} /></button>)}
          </div>
        </div>
      )}
    </div>
  );
}

function ProbCount({ data, L, total, show, regions, regName }) {
  const cfg = data.probability;
  const size = cfg.total != null ? cfg.total : Object.values(regions).reduce((n, v) => n + v, 0);
  const value = size ? total / size : 0;
  return (
    <div className="sd-box sd-prob sd-p2">
      <div className="sd-prob-v">
        <span className="sd-lbl"><R t={cfg.title || L.probability} /></span>
        {cfg.notation && <span className="sd-prob-n"><R t={cfg.notation} /> =</span>}<span className="sd-val">{num(value)}</span>
        <div className="sd-meter"><i style={{ width: Math.max(0, Math.min(100, value * 100)) + '%' }} /></div>
      </div>
      <div>
        <span className="sd-lbl"><R t={L.calc} /></span>
        <div className="sd-psum"><i>{total}</i><span>{'÷'}</span><i className="g">{size}</i><span>=</span><b>{num(value)}</b></div>
        {show != null && show !== '' && regions[show] != null && (
          <div className="sd-pnote"><R t={L.thisRegion} /> (<R t={regName(show)} />): {regions[show]} {'÷'} {size} = {num(regions[show] / size)}</div>
        )}
        {cfg.note && <div className="sd-pnote"><R t={cfg.note} /></div>}
      </div>
    </div>
  );
}

/* ---------- operations ---------- */

function Operations({ data, L, O, th }) {
  const names = data.sets.map((s) => s.id);
  const ops = data.operations || [];
  const first = ops.find((o) => o.id === data.initial) || ops[0];
  const [sel, setSel] = useState(new Set(first ? first.regions : []));
  const [on, setOn] = useState(null);
  const same = (a, b) => a.length === b.size && a.every((x) => b.has(x));
  const cur = ops.find((o) => same(o.regions, sel));
  const toggle = (k) => setSel((p) => { const n = new Set(p); if (n.has(k)) n.delete(k); else n.add(k); return n; });
  const elements = data.elements || [];
  const elems = (k) => elements.filter((e) => keyOf(e.in, names) === k);
  const picked = regionsOf(names).map((m) => m.join('')).filter((k) => sel.has(k));
  const chosen = elements.filter((e) => sel.has(keyOf(e.in, names)));
  const rn = (k) => (data.regionNames && data.regionNames[k]) || k || L.outside;
  const prob = data.probability;
  const [condId, setCond] = useState(null);
  const cond = prob && condId ? (prob.conditions || []).find((c) => c.id === condId) : null;
  const P = !prob ? null : prob.regions || Object.fromEntries(regionsOf(names).map((m) => [m.join(''), elements.length ? elems(m.join('')).length / elements.length : 0]));
  const givenSet = cond ? new Set(cond.regions) : null;
  return (
    <>
      <div className="sd-ops">
        {ops.map((o) => (
          <button key={o.id} type="button" className={'sd-op' + (cur && o.id === cur.id ? ' on' : '')} aria-pressed={!!cur && o.id === cur.id} onClick={() => setSel(new Set(o.regions))}>
            <b><R t={o.notation} /></b><R t={o.name} />
          </button>
        ))}
      </div>
      <div className="sd-two">
        <div className={'sd-box sd-fig' + (O.clickable ? ' sd-can' : '')}>
          <Venn sets={data.sets} universe={data.universe} th={th} L={L} on={on} setOn={O.hover ? setOn : undefined} onPick={O.clickable ? toggle : undefined} pressed={(k) => sel.has(k)}
            veil={givenSet ? (k) => !givenSet.has(k) : null} strong={cond ? cond.sets : null}
            fill={(k) => (sel.has(k) ? th.pickFill : th.regionFill)}
            content={(k) => {
              const es = elems(k);
              if (!elements.length && P && P[k] != null) {
                return (x, y) => <text x={x} y={y + 6} textAnchor={k === '' ? 'end' : 'middle'} fontFamily="STIX Two Text, serif" fontSize="16" fontWeight={sel.has(k) ? 700 : 400} fill={sel.has(k) ? th.pickInk : th.elementInk}>{num(P[k])}</text>;
              }
              if (!es.length) return null;
              // more elements than the region has rows for: continue in further columns
              return (x, y, rows) => {
                const cols = Math.ceil(es.length / Math.max(1, rows || es.length));
                const per = Math.ceil(es.length / cols);
                const colW = Math.max(22, Math.max(...es.map((e) => String(e.label).length)) * 9 + 8);
                const x0 = k === '' ? x - (cols - 1) * colW : x - ((cols - 1) * colW) / 2;
                return es.map((e, i) => {
                  const c = Math.floor(i / per);
                  const n = Math.min(per, es.length - c * per);
                  return <text key={i} x={x0 + c * colW} y={y + ((i % per) - (n - 1) / 2) * 24 + 6} textAnchor="middle" fontFamily="STIX Two Text, serif" fontSize="17" fontWeight={sel.has(k) ? 700 : 400} fill={sel.has(k) ? th.pickInk : th.elementInk}>{e.label}</text>;
                });
              };
            }} />
        </div>
        <div className="sd-box sd-info">
          {cur ? (
            <>
              <div className="sd-info-h"><b><R t={cur.name} /></b><span className="sd-math"><R t={cur.notation} /></span></div>
              {cur.rule && <div className="sd-row"><span className="sd-lbl"><R t={L.elementsThat} /></span><R t={cur.rule} /></div>}
              {cur.formula && <div className="sd-row"><span className="sd-lbl"><R t={L.definition} /></span><span className="sd-math"><R t={cur.formula} /></span></div>}
              {cur.result && <div className="sd-row res"><span className="sd-lbl"><R t={L.result} /></span><span className="sd-math"><R t={cur.result} /></span></div>}
              {cur.props && <div className="sd-row"><span className="sd-lbl"><R t={L.properties} /></span><R t={cur.props} /></div>}
            </>
          ) : (
            <>
              <div className="sd-info-h"><b><R t={L.selection} /></b></div>
              <div className="sd-row"><span className="sd-lbl"><R t={L.regions} /></span>{picked.length ? <div className="sd-chips">{picked.map((k) => <span key={k}><R t={rn(k)} /></span>)}</div> : <R t={L.noneSelected} />}</div>
              <div className="sd-row res"><span className="sd-lbl"><R t={L.elements} /></span><span className="sd-math">{chosen.length ? '{' + chosen.map((e) => e.label).join(', ') + '}' : '∅'}</span></div>
              <div className="sd-row"><R t={data.noMatch || L.noMatch} /></div>
            </>
          )}
        </div>
      </div>
      {prob && <ProbOperations data={data} L={L} sel={sel} cur={cur} P={P} cond={cond} setCond={setCond} names={names} />}
      {(data.given || O.clickable) && (
        <div className="sd-hint">{data.given && <span><R t={data.given} /></span>}{O.clickable && <span><R t={L.clickHint} /></span>}</div>
      )}
    </>
  );
}

/* ---------- count: inclusion–exclusion, term by term ---------- */
function Count({ data, L, O, th }) {
  const T = data.terms || [];
  const [k, setK] = useState(O.startAt === 'start' ? 0 : T.length);
  const [on, setOn] = useState(null);
  const [pick, setPick] = useState(null);
  const show = on != null && on !== '' ? on : pick;
  const members = Object.fromEntries(regionsOf((data.sets || []).map((s) => s.id)).map((m) => [m.join(''), m]));   // region key -> set ids
  const inAll = (t, reg) => t.sets.every((s) => (members[reg] || []).includes(s));
  const hits = (t) => show != null && show !== '' && inAll(t, show);
  const mult = (reg) => T.slice(0, k).reduce((n, t) => n + (inAll(t, reg) ? t.sign : 0), 0);
  const total = T.slice(0, k).reduce((n, t) => n + t.sign * t.value, 0);
  const tone = (m) => th.tones[Math.max(0, Math.min(th.tones.length - 1, m))];
  const note = (data.notes || {})[k];
  const regName = (r) => (data.regionNames && data.regionNames[r]) || r;
  const regions = data.regions || {};
  const applied = T.slice(0, k).filter(hits);
  return (
    <>
      <div className="sd-box sd-terms">
        {T.map((t, i) => (
          <button key={i} type="button" className={'sd-term' + (i < k ? ' in' : '') + (i === k - 1 ? ' cur' : '') + (t.sign < 0 ? ' neg' : '') + (hits(t) ? ' hit' : '')} onClick={() => setK(i + 1)} aria-label={fmt(L.term, { n: i + 1 })}>
            <span className="sd-math"><R t={t.label} /></span><small>{(t.sign < 0 ? '−' : i ? '+' : '') + t.value}</small>
          </button>
        ))}
        <div className="sd-eq">
          <div className="sd-nav">
            <button type="button" className="sd-btn" aria-label={L.prev} disabled={k === 0} onClick={() => setK(k - 1)}>{'←'}</button>
            <button type="button" className="sd-btn pri" aria-label={L.next} disabled={k === T.length} onClick={() => setK(k + 1)}>{'→'}</button>
          </div>
          <span className="sd-lbl"><R t={L.runningTotal} /></span><b>{total}</b>
        </div>
      </div>
      <div className="sd-two">
        <div className={'sd-box sd-fig' + (O.clickable ? ' sd-can' : '')}>
          <Venn sets={data.sets} universe={data.universe} th={th} L={L} on={on} setOn={O.hover ? setOn : undefined} picked={pick} pressed={(r) => r === pick} canPick={(r) => r !== ''}
            onPick={O.clickable ? (r) => setPick(r === '' || r === pick ? null : r) : undefined}
            fill={(r) => (r === '' ? th.regionFill : tone(mult(r))[0])}
            content={(r) => {
              if (r === '') return regions[''] != null ? (x, y) => <text x={x} y={y} textAnchor="end" fontFamily="STIX Two Text, serif" fontSize="13" fill={th.universeLabel}>{regions[''] + ' ' + L.outside}</text> : null;
              const m = mult(r);
              return (x, y) => (
                <>
                  <text x={x} y={y + 2} textAnchor="middle" fontFamily="STIX Two Text, serif" fontSize="17" fontWeight="700" fill={tone(m)[1]}>{regions[r]}</text>
                  <text x={x} y={y + 16} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="700" fill={tone(m)[1]} opacity=".85">{'×' + m}</text>
                </>
              );
            }} />
        </div>
        <div className="sd-side">
          {O.key && (
            <div className="sd-box sd-key">
              <span className="sd-lbl"><R t={L.timesCounted} /></span>
              {th.tones.map((c, m) => <div key={m}><i style={{ background: c[0], color: c[1] }}>{'×' + m}</i><R t={L.tones[m]} /></div>)}
            </div>
          )}
          <div className="sd-box sd-regi">
            {show != null && show !== '' ? (
              <>
                <span className="sd-math"><R t={regName(show)} /></span>: {String(L.regionLine).split(/(\{count\}|\{times\}|\{unit\})/).map((part, i) => (
                  part === '{count}' ? <b key={i}>{regions[show]}</b>
                    : part === '{times}' ? <b key={i}>{mult(show)}</b>
                      : part === '{unit}' ? <React.Fragment key={i}>{mult(show) === 1 ? L.time : L.times}</React.Fragment>
                        : <React.Fragment key={i}>{part}</React.Fragment>
                ))}
                <div className="sd-sum">
                  {applied.map((t, i) => <i key={i} className={t.sign < 0 ? 'neg' : ''}>{t.sign < 0 ? '−' : '+'}<R t={t.label} /></i>)}
                  {applied.length === 0 ? <span className="sd-muted"><R t={L.noTermYet} /></span> : <><span>=</span><b>{'×' + mult(show)}</b></>}
                </div>
              </>
            ) : <span className="sd-muted"><R t={L.countHint} /></span>}
          </div>
          <div className={'sd-box ' + (note && note.warn ? 'sd-warn' : 'sd-say')}>
            {note ? <><span className="sd-lbl"><R t={note.label} /></span><R t={note.text} /></> : <span className="sd-muted"><R t={fmt(L.termsAdded, { k, n: T.length })} /></span>}
          </div>
        </div>
      </div>
      {data.probability && <ProbCount data={data} L={L} total={total} show={show} regions={regions} regName={regName} />}
    </>
  );
}


/* ---------- identity: two expressions that shade the same regions ---------- */
function Identity({ data, L, th }) {
  const laws = data.laws || [];
  const [li, setLi] = useState(0);
  const law = laws[li];
  const [st, setSt] = useState({});
  if (!law) return null;
  const at = (side) => { const v = st[li + side]; const n = law[side].steps.length; return v == null ? n - 1 : v; };
  const regs = (side) => new Set(law[side].steps[at(side)].regions);
  const a = regs('left'), b = regs('right');
  const done = at('left') === law.left.steps.length - 1 && at('right') === law.right.steps.length - 1;
  const equal = a.size === b.size && [...a].every((k) => b.has(k));
  // a plain function, not a component: a component defined here would be rebuilt on every click and drop keyboard focus
  const renderSide = (side) => (
    <div className="sd-box sd-id-side">
      <div className="sd-id-h"><R t={law[side].label} /></div>
      <Venn sets={data.sets} universe={data.universe} th={th} L={L} fill={(k) => (regs(side).has(k) ? th.pickFill : th.regionFill)} content={() => null} />
      <div className="sd-steps">
        {law[side].steps.map((s, i) => (
          <button key={i} type="button" className={'sd-step' + (at(side) === i ? ' on' : '')} aria-pressed={at(side) === i} onClick={() => setSt((o) => ({ ...o, [li + side]: i }))}><R t={s.label} /></button>
        ))}
      </div>
    </div>
  );
  return (
    <>
      {laws.length > 1 && (
        <div className="sd-ops">
          {laws.map((w, i) => <button key={i} type="button" className={'sd-op' + (i === li ? ' on' : '')} aria-pressed={i === li} onClick={() => setLi(i)}><R t={w.name} /></button>)}
        </div>
      )}
      <div className="sd-id">
        {renderSide('left')}
        <div className={'sd-eqs' + (done && equal ? ' ok' : '')}><b>{done && equal ? '=' : '?'}</b><small><R t={done && equal ? L.sameRegions : L.buildBoth} /></small></div>
        {renderSide('right')}
      </div>
      <div className="sd-box sd-law"><span className="sd-math"><R t={law.formula} /></span><R t={law.explanation} /></div>
    </>
  );
}

/* ---------- relations: how two sets can sit ---------- */
function Mini({ kind, th }) {
  const W = 200, H = 96, cy = 50;
  const C = (cx, r, key) => <circle key={key} cx={cx} cy={cy} r={r} fill={th.regionFill} stroke={th.circle} strokeWidth="1.6" />;
  const T = (x, y, t, key) => <text key={key} x={x} y={y} textAnchor="middle" fontFamily="STIX Two Text, serif" fontStyle="italic" fontSize="13" fill={th.setLabel}>{t}</text>;
  const dot = (x, y, key) => <circle key={key} cx={x} cy={y} r="2.6" fill={th.circle} />;
  let g = null;
  if (kind === 'equal') g = <>{C(100, 34, 'a')}<circle cx="100" cy={cy} r="29" fill={th.pickFill} stroke="none" />{T(100, cy + 5, 'A = B', 't')}</>;
  else if (kind === 'disjoint') g = <>{C(62, 30, 'a')}{C(138, 30, 'b')}{T(62, cy + 5, 'A', 't1')}{T(138, cy + 5, 'B', 't2')}</>;
  else if (kind === 'overlap') g = (
    <>
      {C(80, 32, 'a')}{C(120, 32, 'b')}
      <clipPath id={'ov' + kind}><circle cx="80" cy={cy} r="32" /></clipPath>
      <circle cx="120" cy={cy} r="32" fill={th.pickFill} clipPath={`url(#ov${kind})`} />
      <circle cx="80" cy={cy} r="32" fill="none" stroke={th.circle} strokeWidth="1.6" /><circle cx="120" cy={cy} r="32" fill="none" stroke={th.circle} strokeWidth="1.6" />
      {T(62, cy + 5, 'A', 't1')}{T(138, cy + 5, 'B', 't2')}
    </>
  );
  else if (kind === 'subset') g = <>{C(100, 38, 'b')}<circle cx="88" cy={cy + 4} r="20" fill={th.pickFill} stroke={th.circle} strokeWidth="1.6" />{T(88, cy + 9, 'A', 't1')}{T(124, cy - 12, 'B', 't2')}</>;
  else if (kind === 'equivalent') g = (
    <>
      {C(60, 32, 'a')}{C(140, 32, 'b')}
      {[-16, 0, 16].map((d, i) => <line key={'l' + i} x1="60" y1={cy + d} x2="140" y2={cy + d} stroke={th.gold} strokeWidth="1.4" strokeDasharray="3 3" />)}
      {[-16, 0, 16].map((d, i) => <React.Fragment key={i}>{dot(60, cy + d, 'p' + i)}{dot(140, cy + d, 'q' + i)}</React.Fragment>)}
    </>
  );
  else if (kind === 'partition') g = (
    <>
      <rect x="40" y="16" width="120" height="68" rx="10" fill={th.regionFill} stroke={th.circle} strokeWidth="1.6" />
      <line x1="84" y1="16" x2="74" y2="84" stroke={th.circle} strokeWidth="1.4" /><line x1="122" y1="16" x2="128" y2="84" stroke={th.circle} strokeWidth="1.4" />
      {T(60, cy + 5, 'S₁', 't1')}{T(102, cy + 5, 'S₂', 't2')}{T(142, cy + 5, 'S₃', 't3')}
    </>
  );
  return <svg viewBox={`0 0 ${W} ${H}`} aria-hidden="true">{g}</svg>;
}

function Relations({ data, L, th }) {
  const items = data.relations || [];
  const [on, setOn] = useState(0);
  const cur = items[on];
  return (
    <>
      <div className="sd-rels">
        {items.map((r, i) => (
          <button key={i} type="button" className={'sd-box sd-rel' + (i === on ? ' on' : '')} aria-pressed={i === on} onClick={() => setOn(i)}>
            <Mini kind={r.kind} th={th} />
            <div className="sd-rel-n"><R t={r.name} /></div>
            <div className="sd-rel-c"><R t={r.condition} /></div>
          </button>
        ))}
      </div>
      {cur && (
        <div className="sd-box sd-reld">
          <div><span className="sd-lbl"><R t={L.definingCondition} /></span><R t={cur.definition || cur.condition} /></div>
          <div><span className="sd-lbl"><R t={L.example} /></span><R t={cur.example} /></div>
          <div><span className="sd-lbl"><R t={L.keyFact} /></span><R t={cur.fact} /></div>
        </div>
      )}
    </>
  );
}

const VIEWS = { operations: Operations, count: Count, identity: Identity, relations: Relations };

export default function SetDiagram({ data, variant = 'operations', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = VIEWS[variant] || Operations;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="sd-root" style={cssVars(th)}>
        <div className="sd-card">
          {hd && (
            <div className="sd-head">
              {hd.kicker && <div className="sd-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="sd-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="sd-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="sd-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
