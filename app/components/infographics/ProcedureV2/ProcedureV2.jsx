/*
  ProcedureV2.jsx

  An algorithm with a loop that the reader runs one step at a time.
  Each press of Next carries out one step of the algorithm on the example:
    - the step being carried out is lit, the others are dimmed
    - a strip shows the current values; the ones that just changed flash
    - at the "repeat" step the arc lights up and the run goes back to the top of the loop
    - a row is added to the table when a pass is finished
    - Play runs it by itself

  Two layouts: loop (below) and worked (data.worked = { stepLabel, exampleLabel, rows: [{ step, stepSub?, example, check? }] },
  the same shape the older Procedure.jsx takes; the example side of a row appears when the row is reached).
  Third layout: stages (data.groups as in the older Procedure.jsx, plus, all optional:
    data.run = { label, start }                 the example and how it looks before the first stage
    stage.example, stage.exampleNote            what this stage does to the example
    stage.result                                the example after this stage, when stage.example shows the working
    stage.skip = 'reason'                       the stage has nothing to do on this example
    group.fork = true, group.take = index       at a fork, the branch the example takes; the other is not drawn).
  With data.run the stages are a row of buttons and one panel shows the open stage, so the block fits one screen;
    data.run.showBefore = true puts the example as it stood before the stage in front of stage.example (before → after).
  Without data.run the stages are a plain stacked list.
  The older Procedure.jsx is not touched.

  data = {
    header?: { kicker, title, lede },
    loop: {
      label?, repeat?,
      steps: [{ text, repeat?: true, test?: true, output?: true }]   // steps with repeat:true form the loop
    },
    run: {
      label,                                   // e.g. '$\\gcd(1071, 462)$'
      vars: [{ key, label }],                  // the values shown in the strip
      start: { key: value },                   // values after the first step
      startNote?,
      passes: [{
        steps: [{ set?: { key: value }, note? }],   // one entry per loop step, in order
        row?: [cell, ...]                            // table row added when this pass ends
      }],
      columns?, eqCol?, zeroCol?,
      result?, resultNote?
    },
    note?: { label, text }, pitfall?: { label, text },
    labels?, theme?, options?
  }
  Precedence: defaults -> props -> data.
*/

'use client';

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const DEFAULT_LABELS = {
  algorithm: 'Algorithm',
  repeat: 'repeat',
  values: 'Values now',
  now: 'This step',
  result: 'Result',
  stepOf: 'Step {k} of {n}',
  passOf: 'pass {k} of {n}',
  prev: 'Previous',
  next: 'Next',
  play: 'Play',
  pause: 'Pause',
  restart: 'Restart',
  empty: '–',
  step: 'Step',
  example: 'Example',
  checkMark: '✓',
  exprNow: 'The example now',
  onExample: 'On the example',
  notTaken: 'not needed in this example',
  skipped: 'nothing to do here'
};

export const DEFAULT_THEME = {
  ink: '#1e293b',
  title: '#06357A',
  muted: '#64748b',
  line: '#e2e8f0',
  box: '#c7cedb',
  panel: '#ffffff',
  soft: '#f8fafc',
  headBg: '#eff6ff',
  navy: '#06357A',
  blue: '#2563EB',
  gold: '#B45309',
  goldBg: '#fef3c7',
  loopEdge: '#c7d7fe'
};

export const DEFAULT_OPTIONS = {
  speed: 1600,   // milliseconds per step while playing
  arc: true
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const cssVars = (th) => ({
  '--pv-ink': th.ink, '--pv-title': th.title, '--pv-muted': th.muted, '--pv-line': th.line, '--pv-box': th.box,
  '--pv-panel': th.panel, '--pv-soft': th.soft, '--pv-head': th.headBg, '--pv-navy': th.navy,
  '--pv-blue': th.blue, '--pv-gold': th.gold, '--pv-gold-bg': th.goldBg, '--pv-loop-edge': th.loopEdge
});

// the narrow layout: used when the window is narrow and when the block itself sits in a narrow column
const NARROW = `
  .pv-body { padding: 12px; }
  .pv-loop, .pv-two, .pv-state { grid-template-columns: minmax(0, 1fr); }
  .pv-btns { width: 100%; }
  .pv-btn { flex: 1 1 auto; padding: 7px 6px; font-size: 12px; }
  .pv-val { min-width: 0; flex: 1 1 auto; padding: 6px 9px; }
  .pv-val b { font-size: 17px; }
  .pv-t td, .pv-t th { padding-left: 6px; padding-right: 6px; }
  .pv-now { min-height: 84px; }
  .pv-sg-g { grid-template-columns: minmax(0, 1fr); gap: 4px; }
  .pv-sg-l { border-right: 0; text-align: left; padding: 8px 0 0; }
  .pv-sg-l.gap { display: none; }
  .pv-sg-lane.fork { grid-template-columns: minmax(0, 1fr); }
  .pv-sg-now-v { font-size: 17px; }
  .pv-sg-exv { font-size: 15px; overflow-x: auto; overflow-y: hidden; padding-bottom: 2px; }
  .pv-stage { min-width: 0; }
  .pv-tag { margin-left: 0; white-space: normal; }
  .pv-wk-h { display: none; }
  .pv-wk-r { grid-template-columns: 42px minmax(0, 1fr); }
  .pv-wk-r > .pv-wk-e { grid-column: 2; border-left: 0 !important; padding-top: 0; }
  .pv-rail { gap: 6px; }
  .pv-rg-l { display: none; }
  .pv-chip { justify-content: center; padding: 6px 4px; }
  .pv-chip .pv-chip-nm { display: none; }
  .pv-panel { grid-template-columns: minmax(0, 1fr); }
  .pv-p-ex { border-left: 0; border-top: 1px dashed var(--pv-box); border-radius: 0 0 9px 9px; }
`;

const CSS = `
.pv-root { font-family: 'Inter', system-ui, sans-serif; color: var(--pv-ink); line-height: 1.45; container: pv / inline-size; }
.pv-root *, .pv-root *::before, .pv-root *::after { box-sizing: border-box; }
.pv-root .katex { text-transform: none; }
.pv-card { background: var(--pv-panel); border: 1.5px solid var(--pv-box); border-radius: 12px; overflow: hidden; }
.pv-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--pv-box); }
.pv-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--pv-blue); }
.pv-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--pv-title); }
.pv-lede { margin-top: 3px; font-size: 12.5px; color: var(--pv-muted); }
.pv-body { padding: 16px 20px 18px; background: var(--pv-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.pv-box { background: var(--pv-panel); border: 1.5px solid var(--pv-box); border-radius: 10px; }
.pv-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--pv-muted); }
.pv-math { font-family: 'STIX Two Text', serif; }

/* controls */
.pv-bar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 12px; }
.pv-bar-l { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.pv-run { font-size: 16px; color: var(--pv-title); font-weight: 700; }
.pv-count { font-size: 12px; color: var(--pv-muted); }
.pv-btns { display: flex; flex-wrap: wrap; gap: 6px; }
.pv-btn { font: 600 12.5px 'Inter', sans-serif; padding: 7px 13px; border-radius: 7px; border: 1.5px solid var(--pv-box); background: var(--pv-panel); color: var(--pv-title); cursor: pointer; min-height: 36px; white-space: nowrap; }
.pv-btn:hover:not(:disabled) { border-color: var(--pv-blue); }
.pv-btn:disabled { opacity: .4; cursor: default; }
.pv-btn.pri { background: var(--pv-navy); border-color: var(--pv-navy); color: #fff; }
.pv-prog { height: 4px; background: var(--pv-line); }
.pv-prog i { display: block; height: 100%; background: var(--pv-blue); transition: width .25s; }

/* values + what happens now */
.pv-state { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 12px; align-items: stretch; }
.pv-vals { padding: 9px 12px 11px; }
.pv-vals-in { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px; }
.pv-val { display: flex; align-items: baseline; gap: 6px; white-space: nowrap; min-width: 84px; padding: 6px 12px; border: 1.5px solid var(--pv-line); border-radius: 8px; background: var(--pv-panel); font-size: 14px; }
.pv-val b { font-family: 'STIX Two Text', serif; font-size: 19px; font-weight: 700; color: var(--pv-title); }
.pv-val.none b { color: var(--pv-muted); font-weight: 400; }
.pv-val.chg { border-color: var(--pv-gold); animation: pv-flash 1.1s ease-out; }
.pv-val.chg b { color: var(--pv-gold); }
.pv-now { padding: 9px 12px 11px; border-left: 4px solid var(--pv-blue); min-height: 66px; }
.pv-now.back { border-left-color: var(--pv-gold); }
.pv-now-t { margin-top: 5px; font-size: 14.5px; }
.pv-now-stack { display: grid; margin-top: 5px; }
.pv-now-stack > .pv-now-t { grid-area: 1 / 1; margin-top: 0; min-width: 0; }

/* algorithm */
.pv-loop { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: 12px; align-items: start; }
.pv-loop.pv-solo { grid-template-columns: minmax(0, 1fr); }
.pv-algo { padding: 10px 12px 12px; }
.pv-algo-in { position: relative; display: grid; gap: 6px; margin-top: 6px; }
.pv-st { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 10px; align-items: center; padding: 7px 10px; border: 2px solid var(--pv-line); border-radius: 8px; font-size: 13.5px; background: var(--pv-panel); min-height: 40px; opacity: .5; transition: opacity .2s, border-color .2s, background .2s; }
.pv-st.in { border-color: var(--pv-loop-edge); }
.pv-arcs .pv-st.in { margin-right: 40px; }
.pv-st.test { border-style: dashed; }
.pv-st.on { opacity: 1; border-style: solid; border-color: var(--pv-blue); background: var(--pv-head); box-shadow: 0 0 0 3px rgba(37, 99, 235, .14); }
.pv-st.on.back { border-color: var(--pv-gold); background: var(--pv-gold-bg); box-shadow: 0 0 0 3px rgba(180, 83, 9, .14); }
.pv-n { width: 22px; height: 22px; border-radius: 6px; background: var(--pv-navy); color: #fff; font: 700 10px/22px 'JetBrains Mono', monospace; text-align: center; flex: none; }
.pv-st.on.back .pv-n { background: var(--pv-gold); }
.pv-arc { position: absolute; right: 2px; width: 30px; border: 2px solid var(--pv-loop-edge); border-left: 0; border-radius: 0 10px 10px 0; transition: border-color .2s; }
.pv-arc::after { content: ''; position: absolute; left: -6px; top: -6px; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 7px solid var(--pv-loop-edge); transition: border-right-color .2s; }
.pv-arc-t { position: absolute; left: 4px; top: 50%; transform: translateY(-50%); writing-mode: vertical-rl; font: 600 10px 'Inter', sans-serif; color: var(--pv-muted); white-space: nowrap; }
.pv-arc.go { border-color: var(--pv-gold); border-width: 3px; }
.pv-arc.go::after { border-right-color: var(--pv-gold); }
.pv-arc.go .pv-arc-t { color: var(--pv-gold); }
.pv-arc i { display: none; position: absolute; right: -6px; width: 9px; height: 9px; border-radius: 50%; background: var(--pv-gold); }
.pv-arc.go i { display: block; animation: pv-climb 1.1s ease-in-out infinite; }
.pv-arc.came { border-color: var(--pv-blue); }
.pv-arc.came::after { border-right-color: var(--pv-blue); }

/* table */
.pv-trace { overflow: hidden; }
.pv-trace-h { padding: 9px 12px; background: var(--pv-head); border-bottom: 1.5px solid var(--pv-box); }
.pv-trace-h .pv-lbl { color: var(--pv-title); }
.pv-tw { overflow-x: auto; }
.pv-t { width: 100%; border-collapse: collapse; font-size: 13px; }
.pv-t th { font: 700 12px 'Inter', sans-serif; color: var(--pv-muted); padding: 7px 10px; text-align: center; border-bottom: 1px solid var(--pv-line); white-space: nowrap; }
.pv-t td { padding: 8px 10px; text-align: center; border-top: 1px solid var(--pv-line); font-family: 'STIX Two Text', serif; font-size: 14.5px; }
.pv-t td.eq { text-align: left; }
.pv-t td.pn { font: 700 10px 'JetBrains Mono', monospace; color: var(--pv-muted); width: 34px; }
.pv-t tr.fut td { visibility: hidden; border-top-color: transparent; }
.pv-t tr.new td { animation: pv-flash 1.1s ease-out; }
.pv-t td.zero { color: var(--pv-gold); font-weight: 700; }
.pv-res { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 12px; border-top: 1.5px solid var(--pv-box); min-height: 46px; }
.pv-res.done { background: var(--pv-gold-bg); }
.pv-res .pv-math { font-size: 17px; color: var(--pv-title); font-weight: 700; }

/* worked */
.pv-wk { overflow: hidden; }
.pv-wk-h, .pv-wk-r { display: grid; grid-template-columns: 42px minmax(0, 1fr) minmax(0, 1fr); }
.pv-wk-h { background: var(--pv-head); border-bottom: 1.5px solid var(--pv-box); }
.pv-wk-h > div { padding: 8px 12px; font: 700 12px 'Inter', sans-serif; color: var(--pv-title); }
.pv-wk-h > div + div, .pv-wk-r > div + div { border-left: 1px solid var(--pv-line); }
.pv-wk-r { border-top: 1px solid var(--pv-line); box-shadow: inset 4px 0 0 transparent; transition: background .2s, box-shadow .2s; }
.pv-wk-r > div { padding: 11px 12px; font-size: 13.5px; transition: opacity .2s; }
.pv-wk-r > div:first-child { display: flex; justify-content: center; align-items: flex-start; padding: 11px 0; }
.pv-wk-e { font-family: 'STIX Two Text', serif; font-size: 15px; overflow-x: auto; overflow-y: hidden; }
.pv-sub { display: block; font-size: 12px; color: var(--pv-muted); margin-top: 3px; }
.pv-wk-r.fut > div:first-child, .pv-wk-r.fut .pv-wk-s { opacity: .45; }
.pv-wk-r.fut .pv-wk-e > * { visibility: hidden; }
.pv-wk-r.on { background: var(--pv-head); box-shadow: inset 4px 0 0 var(--pv-blue); }
.pv-wk-r.on .pv-wk-e { animation: pv-flash 1.1s ease-out; }
.pv-wk-r.on .pv-wk-s { font-weight: 600; }
.pv-wk-r.chk .pv-n { background: var(--pv-gold); }
.pv-wk-r.chk.on { background: var(--pv-gold-bg); box-shadow: inset 4px 0 0 var(--pv-gold); }

/* stages */
.pv-sg-now { padding: 9px 14px 12px; border-left: 4px solid var(--pv-blue); min-height: 104px; }
.pv-sg-now-v { margin-top: 6px; font-size: 19px; color: var(--pv-title); display: inline-block; padding: 2px 8px; border-radius: 6px; }
.pv-sg-now-v.chg { animation: pv-flash 1.1s ease-out; }
.pv-sg { display: grid; gap: 0; }
.pv-sg-g { display: grid; grid-template-columns: 120px minmax(0, 1fr); gap: 12px; align-items: stretch; }
.pv-sg-l { font-size: 11.5px; color: var(--pv-muted); padding: 14px 10px 0 0; border-right: 2px solid var(--pv-line); text-align: right; }
.pv-sg-l.gap { padding: 0; }
.pv-sg-l b { display: block; color: var(--pv-title); font-size: 12.5px; }
.pv-sg-lane { display: grid; gap: 0; padding: 4px 0; }
.pv-sg-lane.fork { grid-template-columns: 1fr 1fr; gap: 10px; align-items: start; }
.pv-stage { padding: 10px 12px 12px; border-top-width: 4px; transition: opacity .2s, border-color .2s, background .2s, box-shadow .2s; }
.pv-stage.must { border-top-color: var(--pv-navy); }
.pv-stage.opt { border-top-color: var(--pv-blue); }
.pv-stage.out { border-top-color: var(--pv-gold); }
.pv-stage-h { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 4px; }
.pv-stage-h b { font-size: 14px; color: var(--pv-title); }
.pv-stage.out .pv-n { background: var(--pv-gold); }
.pv-tag { margin-left: auto; font-size: 11px; font-weight: 600; color: var(--pv-muted); border: 1px solid var(--pv-box); border-radius: 999px; padding: 1px 8px; white-space: nowrap; }
.pv-sg-f { font-size: 13.5px; }
.pv-sg-c { font-size: 12px; color: var(--pv-muted); margin-top: 2px; }
.pv-sg-ex { margin-top: 9px; padding-top: 8px; border-top: 1px dashed var(--pv-box); }
.pv-sg-exv { margin-top: 4px; font-size: 17px; color: var(--pv-title); }
.pv-sg-skip { margin-top: 4px; font-size: 13px; color: var(--pv-muted); }
.pv-stage.fut { opacity: .5; }
.pv-stage.fut .pv-sg-ex { visibility: hidden; }
.pv-stage.off { opacity: .4; border-style: dashed; border-top-style: solid; }
.pv-stage.on { background: var(--pv-head); border-color: var(--pv-blue); box-shadow: 0 0 0 3px rgba(37, 99, 235, .14); }
.pv-stage.on.out { background: var(--pv-gold-bg); border-color: var(--pv-gold); box-shadow: 0 0 0 3px rgba(180, 83, 9, .14); }
.pv-stage.on .pv-sg-ex { animation: pv-flash 1.1s ease-out; }
.pv-stage.skip:not(.on) { opacity: .7; }
.pv-down { height: 18px; position: relative; }
.pv-down::before { content: ''; position: absolute; left: 50%; top: 2px; bottom: 6px; border-left: 2px solid var(--pv-blue); }
.pv-down::after { content: ''; position: absolute; left: calc(50% - 5px); bottom: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 7px solid var(--pv-blue); }

/* stages with an example: a row of stage buttons and one panel for the open stage */
.pv-rail { display: flex; gap: 8px; align-items: stretch; }
.pv-rg { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.pv-rg-l { font-size: 11.5px; font-weight: 700; color: var(--pv-title); border-bottom: 2px solid var(--pv-line); padding-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.pv-rg-c { display: flex; gap: 6px; flex: 1; }
.pv-chip { flex: 1 1 0; min-width: 0; display: flex; align-items: center; gap: 7px; text-align: left; padding: 6px 9px; border: 1.5px solid var(--pv-box); border-radius: 8px; background: var(--pv-panel); font: 600 12.5px 'Inter', sans-serif; color: var(--pv-title); cursor: pointer; min-height: 40px; opacity: .55; transition: opacity .2s, border-color .2s, background .2s; }
.pv-chip:hover { border-color: var(--pv-blue); }
.pv-chip.done { opacity: 1; }
.pv-chip.on { opacity: 1; border-color: var(--pv-blue); background: var(--pv-head); box-shadow: 0 0 0 3px rgba(37, 99, 235, .14); }
.pv-chip.opt .pv-n { background: var(--pv-blue); }
.pv-chip.out .pv-n { background: var(--pv-gold); }
.pv-chip.on.out { border-color: var(--pv-gold); background: var(--pv-gold-bg); box-shadow: 0 0 0 3px rgba(180, 83, 9, .14); }
.pv-stack { display: grid; }
.pv-stack > .pv-panel { grid-area: 1 / 1; min-width: 0; }
.pv-panel { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); border-top: 4px solid var(--pv-navy); }
.pv-panel.solo { grid-template-columns: minmax(0, 1fr); }
.pv-panel.opt { border-top-color: var(--pv-blue); }
.pv-panel.out { border-top-color: var(--pv-gold); }
.pv-panel.opt .pv-n { background: var(--pv-blue); }
.pv-panel.out .pv-n { background: var(--pv-gold); }
.pv-p-rule { padding: 10px 14px 12px; }
.pv-p-rule .pv-stage-h b { font-size: 16px; flex: 1 1 0; min-width: 120px; }
.pv-p-rule .pv-sg-f { font-size: 14.5px; }
.pv-p-rule .pv-sg-c { font-size: 13px; }
.pv-p-ex { padding: 10px 14px 12px; border-left: 1px dashed var(--pv-box); background: var(--pv-head); border-radius: 0 9px 9px 0; }
.pv-panel.out .pv-p-ex { background: var(--pv-gold-bg); }
.pv-flow { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; margin-top: 6px; }
.pv-from { font-size: 16px; color: var(--pv-muted); }
.pv-arrow { font-size: 18px; color: var(--pv-blue); }
.pv-to { font-size: 19px; color: var(--pv-title); overflow-x: auto; overflow-y: hidden; max-width: 100%; }
.pv-p-ex .pv-sg-c { margin-top: 6px; font-size: 13px; color: var(--pv-ink); }

.pv-two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.pv-note { padding: 10px 14px 12px; border-left: 4px solid var(--pv-blue); font-size: 12.5px; }
.pv-note .pv-lbl { color: var(--pv-blue); margin-bottom: 4px; }
.pv-warn { padding: 10px 14px 12px; border-left: 4px solid var(--pv-gold); font-size: 12.5px; }
.pv-warn .pv-lbl { color: var(--pv-gold); margin-bottom: 4px; }

@keyframes pv-flash { 0% { background: var(--pv-gold-bg); } 100% { background: transparent; } }
@keyframes pv-climb { 0% { top: calc(100% - 5px); opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { top: -4px; opacity: 0; } }

@media (max-width: 680px) {
${NARROW}}
@container pv (max-width: 480px) {
${NARROW}}
@media (prefers-reduced-motion: reduce) {
  .pv-val.chg, .pv-t tr.new td, .pv-arc.go i, .pv-wk-r.on .pv-wk-e, .pv-sg-now-v.chg, .pv-stage.on .pv-sg-ex { animation: none; }
  .pv-arc.go i { top: 40%; }
}
`;

/* one frame per step that is carried out */
export function buildFrames(steps, run) {
  const body = [];
  steps.forEach((s, i) => { if (s.repeat) body.push(i); });
  const startIdx = steps.findIndex((s) => !s.repeat && !s.output);
  const outIdx = steps.findIndex((s) => s.output);
  const passes = run.passes || [];
  const frames = [];
  let vals = { ...(run.start || {}) };
  frames.push({ step: startIdx, vals, changed: Object.keys(vals), pass: 0, rows: 0, note: run.startNote });
  passes.forEach((p, pi) => {
    body.forEach((si, bi) => {
      const act = (p.steps && p.steps[bi]) || {};
      const set = act.set || {};
      vals = { ...vals, ...set };
      const lastOfPass = bi === body.length - 1;
      frames.push({
        step: si,
        vals,
        changed: Object.keys(set),
        pass: pi + 1,
        rows: lastOfPass ? pi + 1 : pi,
        newRow: lastOfPass,
        note: act.note,
        back: lastOfPass && pi < passes.length - 1,
        came: bi === 0 && pi > 0
      });
    });
  });
  if (outIdx >= 0) {
    frames.push({ step: outIdx, vals, changed: [], pass: passes.length, rows: passes.length, note: run.resultNote, done: true });
  } else if (frames.length) {
    frames[frames.length - 1].done = true;
  }
  return frames;
}

const Notes = ({ data }) => {
  if (!data.note && !data.pitfall) return null;
  const both = data.note && data.pitfall;
  return (
    <div className={both ? 'pv-two' : ''}>
      {data.note && <div className="pv-box pv-note"><span className="pv-lbl"><R t={data.note.label} /></span><R t={data.note.text} /></div>}
      {data.pitfall && <div className="pv-box pv-warn"><span className="pv-lbl"><R t={data.pitfall.label} /></span><R t={data.pitfall.text} /></div>}
    </div>
  );
};

function LoopView({ data, labels, theme, options }) {
  const steps = (data && data.loop && data.loop.steps) || [];
  const run = data && data.run;
  const frames = useMemo(() => (run ? buildFrames(steps, run) : []), [steps, run]);
  const [k, setK] = useState(0);
  const [playing, setPlaying] = useState(false);

  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...((data && data.labels) || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...((data && data.theme) || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...((data && data.options) || {}) };

  const lastK = Math.max(frames.length - 1, 0);
  const atEnd = k >= lastK;

  useEffect(() => {
    if (!playing) return undefined;
    if (atEnd) { setPlaying(false); return undefined; }
    const id = setTimeout(() => setK((v) => Math.min(v + 1, lastK)), O.speed);
    return () => clearTimeout(id);
  }, [playing, k, atEnd, lastK, O.speed]);

  // the arc runs from the first to the last loop step, measured so it follows wrapped text
  const first = steps.findIndex((s) => s.repeat);
  const last = steps.length - 1 - [...steps].reverse().findIndex((s) => s.repeat);
  const showArc = O.arc && first >= 0;
  const inRef = useRef(null);
  const [arc, setArc] = useState(null);
  useIsoLayoutEffect(() => {
    if (!showArc || !inRef.current) return undefined;
    const measure = () => {
      const els = inRef.current.querySelectorAll('.pv-st');
      const a = els[first], b = els[last];
      if (!a || !b) return;
      const top = a.offsetTop + a.offsetHeight / 2;
      const height = b.offsetTop + b.offsetHeight / 2 - top;
      setArc((p) => (p && p.top === top && p.height === height ? p : { top, height }));
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(inRef.current);
    return () => ro.disconnect();
  }, [showArc, first, last, steps.length]);

  if (!data || !data.loop) return null;

  const f = frames[k] || { step: -1, vals: {}, changed: [], pass: 0, rows: 0 };
  const passes = run ? run.passes || [] : [];
  const rows = passes.map((p) => p.row).filter(Boolean);
  const hasTable = run && run.columns && rows.length > 0;
  const zeroRe = /^\$?\s*0\s*\$?$/;
  const hd = data.header;

  const go = (v) => { setPlaying(false); setK(Math.max(0, Math.min(lastK, v))); };
  const togglePlay = () => {
    if (playing) { setPlaying(false); return; }
    if (atEnd) setK(0);
    setPlaying(true);
  };

  // every note is laid out in the same spot, so the box keeps the height of the longest one
  const noteOf = (fr) => fr.note || (steps[fr.step] && steps[fr.step].text) || '';
  const noteList = [...new Set(frames.map(noteOf))];
  const noteNow = noteOf(f);

  const count = L.stepOf.replace('{k}', k + 1).replace('{n}', frames.length)
    + (f.pass > 0 && passes.length > 0 ? ' · ' + L.passOf.replace('{k}', f.pass).replace('{n}', passes.length) : '');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="pv-root" style={cssVars(th)}>
        <div className="pv-card">
          {hd && (
            <div className="pv-head">
              {hd.kicker && <div className="pv-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="pv-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="pv-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="pv-body">
            {run && (
              <>
                <div className="pv-box" style={{ overflow: 'hidden' }}>
                  <div className="pv-bar">
                    <div className="pv-bar-l">
                      <span className="pv-run pv-math"><R t={run.label} /></span>
                      <span className="pv-count" aria-live="polite">{count}</span>
                    </div>
                    <div className="pv-btns">
                      <button type="button" className="pv-btn" disabled={k === 0} onClick={() => go(0)}>{L.restart}</button>
                      <button type="button" className="pv-btn" disabled={k === 0} onClick={() => go(k - 1)}>{'← ' + L.prev}</button>
                      <button type="button" className="pv-btn pri" disabled={atEnd} onClick={() => go(k + 1)}>{L.next + ' →'}</button>
                      <button type="button" className="pv-btn" onClick={togglePlay}>{playing ? L.pause : L.play}</button>
                    </div>
                  </div>
                  <div className="pv-prog"><i style={{ width: (lastK ? (k / lastK) * 100 : 100) + '%' }} /></div>
                </div>

                <div className="pv-state">
                  {run.vars && run.vars.length > 0 && (
                    <div className="pv-box pv-vals">
                      <span className="pv-lbl">{L.values}</span>
                      <div className="pv-vals-in">
                        {run.vars.map((v) => {
                          const val = f.vals[v.key];
                          const none = val == null || val === '';
                          const chg = !none && f.changed.includes(v.key);
                          return (
                            <span key={v.key + (chg ? '-' + k : '')} className={'pv-val' + (none ? ' none' : '') + (chg ? ' chg' : '')}>
                              <span><R t={v.label} /> =</span>
                              <b>{none ? L.empty : <R t={val} />}</b>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  <div className={'pv-box pv-now' + (f.back ? ' back' : '')} aria-live="polite">
                    <span className="pv-lbl">{L.now}</span>
                    <div className="pv-now-stack">
                      {noteList.map((t, i) => (
                        <div key={i} className="pv-now-t" aria-hidden={t !== noteNow} style={{ visibility: t === noteNow ? 'visible' : 'hidden' }}><R t={t} /></div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className={'pv-loop' + (hasTable ? '' : ' pv-solo')}>
              <div className="pv-box pv-algo">
                <span className="pv-lbl"><R t={data.loop.label || L.algorithm} /></span>
                <div className={'pv-algo-in' + (showArc ? ' pv-arcs' : '')} ref={inRef}>
                  {steps.map((s, i) => {
                    const on = !run || f.step === i;
                    return (
                      <div key={i} className={'pv-st' + (s.repeat ? ' in' : '') + (s.test ? ' test' : '') + (on ? ' on' : '') + (on && f.back ? ' back' : '')}>
                        <span className="pv-n">{i + 1}</span><span><R t={s.text} /></span>
                      </div>
                    );
                  })}
                  {showArc && arc && (
                    <div className={'pv-arc' + (f.back ? ' go' : f.came ? ' came' : '')} style={{ top: arc.top, height: arc.height }}>
                      <i />
                      <span className="pv-arc-t"><R t={data.loop.repeat || L.repeat} /></span>
                    </div>
                  )}
                </div>
              </div>

              {hasTable && (
                <div className="pv-box pv-trace">
                  <div className="pv-trace-h"><span className="pv-lbl"><R t={run.tableLabel || run.label} /></span></div>
                  <div className="pv-tw">
                    <table className="pv-t">
                      <thead><tr><th />{run.columns.map((c, i) => <th key={i}><R t={c} /></th>)}</tr></thead>
                      <tbody>
                        {rows.map((r, i) => {
                          const shown = i < f.rows;
                          const isNew = shown && f.newRow && i === f.rows - 1;
                          return (
                            <tr key={i + (isNew ? '-' + k : '')} className={shown ? (isNew ? 'new' : '') : 'fut'}>
                              <td className="pn">{i + 1}</td>
                              {r.map((v, j) => (
                                <td key={j} className={(run.eqCol === j ? 'eq' : '') + (run.zeroCol === j && zeroRe.test(String(v)) ? ' zero' : '')}><R t={v} /></td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {run.result && (
                    <div className={'pv-res' + (f.done ? ' done' : '')}>
                      <span className="pv-lbl">{L.result}</span>
                      <span className="pv-math" style={{ visibility: f.done ? 'visible' : 'hidden' }}><R t={run.result} /></span>
                    </div>
                  )}
                </div>
              )}
            </div>
            <Notes data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- worked: the general step beside the same step on an example, one row at a time ---------- */
function WorkedView({ data, labels, theme, options }) {
  const W = data.worked;
  const rows = W.rows || [];
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const [k, setK] = useState(0);
  const [playing, setPlaying] = useState(false);
  const lastK = Math.max(rows.length - 1, 0);
  const atEnd = k >= lastK;

  useEffect(() => {
    if (!playing) return undefined;
    if (atEnd) { setPlaying(false); return undefined; }
    const id = setTimeout(() => setK((v) => Math.min(v + 1, lastK)), O.speed);
    return () => clearTimeout(id);
  }, [playing, k, atEnd, lastK, O.speed]);

  const go = (v) => { setPlaying(false); setK(Math.max(0, Math.min(lastK, v))); };
  const togglePlay = () => {
    if (playing) { setPlaying(false); return; }
    if (atEnd) setK(0);
    setPlaying(true);
  };
  const hd = data.header;
  let n = 0;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="pv-root" style={cssVars(th)}>
        <div className="pv-card">
          {hd && (
            <div className="pv-head">
              {hd.kicker && <div className="pv-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="pv-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="pv-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="pv-body">
            <div className="pv-box" style={{ overflow: 'hidden' }}>
              <div className="pv-bar">
                <div className="pv-bar-l">
                  <span className="pv-run pv-math"><R t={W.exampleLabel || L.example} /></span>
                  <span className="pv-count" aria-live="polite">{L.stepOf.replace('{k}', k + 1).replace('{n}', rows.length)}</span>
                </div>
                <div className="pv-btns">
                  <button type="button" className="pv-btn" disabled={k === 0} onClick={() => go(0)}>{L.restart}</button>
                  <button type="button" className="pv-btn" disabled={k === 0} onClick={() => go(k - 1)}>{'← ' + L.prev}</button>
                  <button type="button" className="pv-btn pri" disabled={atEnd} onClick={() => go(k + 1)}>{L.next + ' →'}</button>
                  <button type="button" className="pv-btn" onClick={togglePlay}>{playing ? L.pause : L.play}</button>
                </div>
              </div>
              <div className="pv-prog"><i style={{ width: (lastK ? (k / lastK) * 100 : 100) + '%' }} /></div>
            </div>

            <div className="pv-box pv-wk">
              <div className="pv-wk-h">
                <div />
                <div><R t={W.stepLabel || L.step} /></div>
                <div><R t={W.exampleLabel || L.example} /></div>
              </div>
              {rows.map((r, i) => {
                if (!r.check) n += 1;
                const state = i === k ? ' on' : i > k ? ' fut' : '';
                return (
                  <div key={i} className={'pv-wk-r' + state + (r.check ? ' chk' : '')}>
                    <div><span className="pv-n">{r.check ? L.checkMark : n}</span></div>
                    <div className="pv-wk-s"><R t={r.step} />{r.stepSub && <span className="pv-sub"><R t={r.stepSub} /></span>}</div>
                    <div key={'ex' + (i === k ? '-' + k : '')} className="pv-wk-e"><R t={r.example} /></div>
                  </div>
                );
              })}
            </div>
            <Notes data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- stages: a pipeline of stages, run one stage at a time on an example ---------- */
function StagesView({ data, labels, theme, options }) {
  const groups = data.groups || [];
  const run = data.run;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };

  // the stages the run passes through, in order; at a fork only the branch that is taken
  const order = useMemo(() => {
    const out = [];
    groups.forEach((g, gi) => {
      (g.stages || []).forEach((s, si) => {
        if (g.fork && g.take != null && g.take !== si) return;
        out.push(gi + '-' + si);
      });
    });
    return out;
  }, [groups]);

  const [k, setK] = useState(0);
  const [playing, setPlaying] = useState(false);
  const lastK = Math.max(order.length - 1, 0);
  const atEnd = k >= lastK;

  useEffect(() => {
    if (!playing) return undefined;
    if (atEnd) { setPlaying(false); return undefined; }
    const id = setTimeout(() => setK((v) => Math.min(v + 1, lastK)), O.speed);
    return () => clearTimeout(id);
  }, [playing, k, atEnd, lastK, O.speed]);

  const go = (v) => { setPlaying(false); setK(Math.max(0, Math.min(lastK, v))); };
  const togglePlay = () => {
    if (playing) { setPlaying(false); return; }
    if (atEnd) setK(0);
    setPlaying(true);
  };

  const stageAt = (key) => { const p = key.split('-'); return groups[+p[0]].stages[+p[1]]; };
  // the example as it stands: the result of the last stage reached that changed it
  let nowValue = run ? run.start : null;
  let nowFrom = -1;
  for (let i = 0; i <= k && i < order.length; i += 1) {
    const s = stageAt(order[i]);
    if ((s.result || s.example) && !s.skip) { nowValue = s.result || s.example; nowFrom = i; }
  }
  const hd = data.header;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="pv-root" style={cssVars(th)}>
        <div className="pv-card">
          {hd && (
            <div className="pv-head">
              {hd.kicker && <div className="pv-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="pv-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="pv-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="pv-body">
            <div className="pv-box" style={{ overflow: 'hidden' }}>
              <div className="pv-bar">
                <div className="pv-bar-l">
                  {run && run.label && <span className="pv-run"><R t={run.label} /></span>}
                  <span className="pv-count" aria-live="polite">{L.stepOf.replace('{k}', k + 1).replace('{n}', order.length)}</span>
                </div>
                <div className="pv-btns">
                  <button type="button" className="pv-btn" disabled={k === 0} onClick={() => go(0)}>{L.restart}</button>
                  <button type="button" className="pv-btn" disabled={k === 0} onClick={() => go(k - 1)}>{'← ' + L.prev}</button>
                  <button type="button" className="pv-btn pri" disabled={atEnd} onClick={() => go(k + 1)}>{L.next + ' →'}</button>
                  <button type="button" className="pv-btn" onClick={togglePlay}>{playing ? L.pause : L.play}</button>
                </div>
              </div>
              <div className="pv-prog"><i style={{ width: (lastK ? (k / lastK) * 100 : 100) + '%' }} /></div>
            </div>

            {run && nowValue && (
              <div className="pv-box pv-sg-now" aria-live="polite">
                <span className="pv-lbl">{L.exprNow}</span>
                <div key={'now-' + nowFrom} className={'pv-sg-now-v pv-math' + (nowFrom === k ? ' chg' : '')}><R t={nowValue} /></div>
              </div>
            )}

            <div className="pv-sg">
              {groups.map((g, gi) => (
                <React.Fragment key={gi}>
                  {gi > 0 && <div className="pv-sg-g"><div className="pv-sg-l gap" /><div className="pv-down" /></div>}
                  <div className="pv-sg-g">
                    <div className="pv-sg-l"><b><R t={g.label} /></b><R t={g.sub} /></div>
                    <div className={'pv-sg-lane' + (g.fork ? ' fork' : '')}>
                      {(g.stages || []).map((s, si) => {
                        const pos = order.indexOf(gi + '-' + si);
                        const state = pos < 0 ? ' off' : pos === k ? ' on' : pos > k ? ' fut' : '';
                        const reached = pos >= 0 && pos <= k;
                        return (
                          <React.Fragment key={si}>
                            {!g.fork && si > 0 && <div className="pv-down" />}
                            <div className={'pv-box pv-stage ' + (g.kind || 'must') + state + (s.skip && reached ? ' skip' : '')}>
                              <div className="pv-stage-h">
                                {s.n != null && <span className="pv-n">{s.n}</span>}
                                <b><R t={s.name} /></b>
                                {pos < 0 && <span className="pv-tag">{L.notTaken}</span>}
                                {s.skip && reached && <span className="pv-tag">{L.skipped}</span>}
                              </div>
                              {s.what && <div className="pv-sg-f"><R t={s.what} /></div>}
                              {s.cond && <div className="pv-sg-c"><R t={s.cond} /></div>}
                              {pos >= 0 && (s.example || s.skip) && (
                                <div key={'ex' + (pos === k ? '-' + k : '')} className="pv-sg-ex">
                                  <span className="pv-lbl">{L.onExample}</span>
                                  <div className={s.skip ? 'pv-sg-skip' : 'pv-math pv-sg-exv'}><R t={s.skip || s.example} /></div>
                                  {s.exampleNote && <div className="pv-sg-c"><R t={s.exampleNote} /></div>}
                                </div>
                              )}
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <Notes data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- stages with an example: stage buttons in a row, one panel for the open stage ---------- */
function StagesStepView({ data, labels, theme, options }) {
  const groups = data.groups || [];
  const run = data.run;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };

  // the stages the run passes through, in order, each with the example as it stood before the stage;
  // at a fork only the branch that is taken
  const order = useMemo(() => {
    const out = [];
    let cur = run.start || null;
    groups.forEach((g, gi) => {
      (g.stages || []).forEach((s, si) => {
        if (g.fork && g.take != null && g.take !== si) return;
        const before = cur;
        if ((s.result || s.example) && !s.skip) cur = s.result || s.example;
        out.push({ key: gi + '-' + si, g, gi, s, before });
      });
    });
    return out;
  }, [groups, run]);

  const [k, setK] = useState(0);
  const [playing, setPlaying] = useState(false);
  const lastK = Math.max(order.length - 1, 0);
  const atEnd = k >= lastK;

  useEffect(() => {
    if (!playing) return undefined;
    if (atEnd) { setPlaying(false); return undefined; }
    const id = setTimeout(() => setK((v) => Math.min(v + 1, lastK)), O.speed);
    return () => clearTimeout(id);
  }, [playing, k, atEnd, lastK, O.speed]);

  const go = (v) => { setPlaying(false); setK(Math.max(0, Math.min(lastK, v))); };
  const togglePlay = () => {
    if (playing) { setPlaying(false); return; }
    if (atEnd) setK(0);
    setPlaying(true);
  };
  const hd = data.header;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="pv-root" style={cssVars(th)}>
        <div className="pv-card">
          {hd && (
            <div className="pv-head">
              {hd.kicker && <div className="pv-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="pv-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="pv-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="pv-body">
            <div className="pv-box" style={{ overflow: 'hidden' }}>
              <div className="pv-bar">
                <div className="pv-bar-l">
                  {run.label && <span className="pv-run"><R t={run.label} /></span>}
                  <span className="pv-count" aria-live="polite">{L.stepOf.replace('{k}', k + 1).replace('{n}', order.length)}</span>
                </div>
                <div className="pv-btns">
                  <button type="button" className="pv-btn" disabled={k === 0} onClick={() => go(0)}>{L.restart}</button>
                  <button type="button" className="pv-btn" disabled={k === 0} onClick={() => go(k - 1)}>{'← ' + L.prev}</button>
                  <button type="button" className="pv-btn pri" disabled={atEnd} onClick={() => go(k + 1)}>{L.next + ' →'}</button>
                  <button type="button" className="pv-btn" onClick={togglePlay}>{playing ? L.pause : L.play}</button>
                </div>
              </div>
              <div className="pv-prog"><i style={{ width: (lastK ? (k / lastK) * 100 : 100) + '%' }} /></div>
            </div>

            <div className="pv-rail">
              {groups.map((g, gi) => {
                const mine = order.map((o, i) => ({ o, i })).filter((x) => x.o.gi === gi);
                if (!mine.length) return null;
                return (
                  <div key={gi} className="pv-rg" style={{ flex: mine.length + ' 1 0' }}>
                    <span className="pv-rg-l"><R t={g.label} /></span>
                    <div className="pv-rg-c">
                      {mine.map(({ o, i }) => (
                        <button key={o.key} type="button" onClick={() => go(i)} aria-current={i === k ? 'step' : undefined}
                          className={'pv-chip ' + (g.kind || 'must') + (i === k ? ' on' : i < k ? ' done' : '')}>
                          <span className="pv-n">{o.s.n != null ? o.s.n : i + 1}</span>
                          <span className="pv-chip-nm"><R t={o.s.name} /></span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* every panel is laid out in the same spot, so the block keeps the height of the tallest one */}
            <div className="pv-stack">
              {order.map((o, i) => {
                const { s, g } = o;
                const hasEx = !!(s.example || s.skip);
                const showFrom = run.showBefore && !s.skip && o.before && o.before !== s.example;
                return (
                  <div key={o.key} className={'pv-box pv-panel ' + (g.kind || 'must') + (hasEx ? '' : ' solo')}
                    aria-hidden={i !== k} style={{ visibility: i === k ? 'visible' : 'hidden' }}>
                    <div className="pv-p-rule">
                      <div className="pv-stage-h">
                        {s.n != null && <span className="pv-n">{s.n}</span>}
                        <b><R t={s.name} /></b>
                        {s.skip && <span className="pv-tag">{L.skipped}</span>}
                      </div>
                      {s.what && <div className="pv-sg-f"><R t={s.what} /></div>}
                      {s.cond && <div className="pv-sg-c"><R t={s.cond} /></div>}
                    </div>
                    {hasEx && (
                      <div className="pv-p-ex">
                        <span className="pv-lbl">{L.onExample}</span>
                        {s.skip ? (
                          <>
                            {run.showBefore && o.before && <div className="pv-flow"><span className="pv-to pv-math"><R t={o.before} /></span></div>}
                            <div className="pv-sg-c"><R t={s.skip} /></div>
                          </>
                        ) : (
                          <>
                            <div className="pv-flow">
                              {showFrom && <><span className="pv-from pv-math"><R t={o.before} /></span><span className="pv-arrow">→</span></>}
                              <span className="pv-to pv-math"><R t={s.example} /></span>
                            </div>
                            {s.exampleNote && <div className="pv-sg-c"><R t={s.exampleNote} /></div>}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <Notes data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export const VARIANTS = ['loop', 'worked', 'stages'];

export default function ProcedureV2({ variant, ...rest }) {
  const data = rest.data;
  if (!data) return null;
  const v = variant || (data.groups ? 'stages' : data.worked && !data.loop ? 'worked' : 'loop');
  // with an example to run: one stage open at a time; without one: the plain list of stages
  if (v === 'stages') return data.groups ? (data.run ? <StagesStepView {...rest} /> : <StagesView {...rest} />) : null;
  if (v === 'worked') return data.worked ? <WorkedView {...rest} /> : null;
  return <LoopView {...rest} />;
}
