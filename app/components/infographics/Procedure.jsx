/*
  Procedure.jsx

  An algorithm or method as steps. Three variants:
    loop     steps with a repeat arc; a trace table you can step through
    stages   a pipeline of stages, with a fork where there is a choice
    worked   each general step beside the same step on an example, ending in a check

  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['loop', 'stages', 'worked'];

export const DEFAULT_LABELS = {
  algorithm: 'Algorithm',
  repeat: 'repeat',
  result: 'Result',
  stepOf: 'Step {k} of {n}',
  prev: 'Previous step',
  next: 'Next step',
  step: 'Step',
  example: 'Example'
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
  loopEdge: '#c7d7fe'
};

export const DEFAULT_OPTIONS = {
  startAt: 'end',
  arc: true,
  hover: true,
  checkMark: '✓'
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const cssVars = (th) => ({
  '--pr-ink': th.ink, '--pr-title': th.title, '--pr-muted': th.muted, '--pr-line': th.line, '--pr-box': th.box,
  '--pr-panel': th.panel, '--pr-soft': th.soft, '--pr-head': th.headBg, '--pr-navy': th.navy,
  '--pr-blue': th.blue, '--pr-blue-soft': th.blueSoft, '--pr-gold': th.gold, '--pr-gold-bg': th.goldBg,
  '--pr-gold-ink': th.goldInk, '--pr-slate': th.slate, '--pr-slate-bg': th.slateBg, '--pr-loop-edge': th.loopEdge
});

const CSS = `
.pr-root { font-family: 'Inter', system-ui, sans-serif; color: var(--pr-ink); line-height: 1.45; }
.pr-root *, .pr-root *::before, .pr-root *::after { box-sizing: border-box; }
.pr-root .katex { text-transform: none; }
.pr-card { background: var(--pr-panel); border: 1.5px solid var(--pr-box); border-radius: 12px; overflow: hidden; }
.pr-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--pr-box); }
.pr-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--pr-blue); }
.pr-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--pr-title); letter-spacing: -.01em; }
.pr-lede { margin-top: 3px; font-size: 12.5px; color: var(--pr-muted); }
.pr-body { padding: 16px 20px 18px; background: var(--pr-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.pr-box { background: var(--pr-panel); border: 1.5px solid var(--pr-box); border-radius: 10px; }
.pr-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--pr-muted); margin-bottom: 4px; }
.pr-math { font-family: 'STIX Two Text', serif; }
.pr-note { padding: 10px 14px 12px; border-left: 4px solid var(--pr-blue); font-size: 12.5px; }
.pr-note .pr-lbl { color: var(--pr-blue); }
.pr-warn { padding: 10px 14px 12px; border-left: 4px solid var(--pr-gold); font-size: 12.5px; }
.pr-warn .pr-lbl { color: var(--pr-gold-ink); }
.pr-two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.pr-n { width: 22px; height: 22px; border-radius: 6px; background: var(--pr-navy); color: #fff; font: 700 10px/22px 'JetBrains Mono', monospace; text-align: center; flex: none; }

/* ---------- loop ---------- */
.pr-loop { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr); gap: 12px; align-items: start; }
.pr-loop.pr-solo { grid-template-columns: minmax(0, 1fr); }
.pr-algo { padding: 10px 12px 12px; }
.pr-algo-in { position: relative; display: grid; gap: 6px; }
.pr-st { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 10px; align-items: center; padding: 7px 10px; border: 1.5px solid var(--pr-line); border-radius: 8px; font-size: 13px; background: var(--pr-panel); min-height: 38px; transition: border-color .15s, background .15s; }
.pr-st.in { border-color: var(--pr-loop-edge); }
.pr-arcs .pr-st.in { margin-right: 38px; }
.pr-st.on { border-color: var(--pr-blue); background: var(--pr-head); }
.pr-st.out .pr-n { background: var(--pr-blue); }
.pr-st.test { border-style: dashed; }
.pr-arc { position: absolute; right: 2px; width: 28px; border: 2px solid var(--pr-blue); border-left: 0; border-radius: 0 10px 10px 0; }
.pr-arc::after { content: ''; position: absolute; left: -6px; top: -6px; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 7px solid var(--pr-blue); }
.pr-arc-t { position: absolute; left: 3px; top: 50%; transform: translateY(-50%); writing-mode: vertical-rl; font: 600 10px 'Inter', sans-serif; color: var(--pr-blue); white-space: nowrap; }
.pr-trace { overflow: hidden; }
.pr-trace-h { display: flex; justify-content: space-between; align-items: center; gap: 8px; padding: 9px 12px; background: var(--pr-head); border-bottom: 1.5px solid var(--pr-box); }
.pr-trace-h .pr-lbl { margin: 0; color: var(--pr-title); }
.pr-tw { position: relative; overflow-x: auto; }
.pr-t { width: 100%; border-collapse: collapse; font-size: 13px; }
.pr-t th { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--pr-muted); padding: 7px 10px; text-align: center; border-bottom: 1px solid var(--pr-line); }
.pr-t td { padding: 7px 10px; text-align: center; border-top: 1px solid var(--pr-line); font-family: 'STIX Two Text', serif; font-size: 14.5px; transition: background .15s, opacity .15s; }
.pr-t td.eq { text-align: left; }
.pr-t tr.fut td { opacity: .25; }
.pr-t tr.cur td { background: var(--pr-head); }
.pr-t tr.end td { background: var(--pr-gold-bg); }
.pr-t td.zero { color: var(--pr-gold-ink); font-weight: 700; }
.pr-res { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 9px 12px; border-top: 1.5px solid var(--pr-box); }
.pr-res .pr-lbl { margin: 0; }
.pr-res .pr-math { font-size: 16px; color: var(--pr-title); }
.pr-btns { display: flex; gap: 6px; }
.pr-btn { font: 600 11.5px 'Inter', sans-serif; padding: 5px 11px; border-radius: 7px; border: 1.5px solid var(--pr-box); background: var(--pr-panel); color: var(--pr-title); cursor: pointer; }
.pr-btn:hover:not(:disabled) { border-color: var(--pr-blue); }
.pr-btn:disabled { opacity: .4; cursor: default; }
.pr-btn.pri { background: var(--pr-navy); border-color: var(--pr-navy); color: #fff; }

/* ---------- stages ---------- */
.pr-stages { display: grid; gap: 0; }
.pr-group { display: grid; grid-template-columns: 120px minmax(0, 1fr); gap: 12px; align-items: stretch; }
.pr-gl { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--pr-muted); padding-top: 14px; border-right: 2px solid var(--pr-line); padding-right: 10px; text-align: right; }
.pr-gl.pr-gap { padding: 0; }
.pr-gl b { display: block; color: var(--pr-title); font-size: 10px; }
.pr-glane { display: grid; gap: 0; padding: 4px 0; }
.pr-glane.fork { grid-template-columns: 1fr 1fr; gap: 10px; }
.pr-stage { padding: 10px 12px 12px; position: relative; }
.pr-stage.must { border-top: 4px solid var(--pr-navy); }
.pr-stage.opt { border-top: 4px solid var(--pr-blue); }
.pr-stage.out { border-top: 4px solid var(--pr-gold); }
.pr-stage-h { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
.pr-stage-h b { font-size: 14px; color: var(--pr-title); }
.pr-stage .pr-f { font-family: 'STIX Two Text', serif; font-size: 14.5px; }
.pr-stage .pr-c { font-size: 11.5px; color: var(--pr-muted); margin-top: 2px; }
.pr-stage .pr-d { font-size: 12.5px; margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--pr-line); }
.pr-down { height: 18px; position: relative; }
.pr-down::before { content: ''; position: absolute; left: 50%; top: 2px; bottom: 6px; border-left: 2px solid var(--pr-blue); }
.pr-down::after { content: ''; position: absolute; left: calc(50% - 5px); bottom: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 7px solid var(--pr-blue); }

/* ---------- worked ---------- */
.pr-wk { overflow: hidden; }
.pr-wk-h, .pr-wk-r { display: grid; grid-template-columns: 34px minmax(0, 1fr) minmax(0, 1fr); }
.pr-wk-h { background: var(--pr-head); border-bottom: 1.5px solid var(--pr-box); }
.pr-wk-h > div { padding: 8px 12px; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--pr-title); }
.pr-wk-h > div + div, .pr-wk-r > div + div { border-left: 1px solid var(--pr-line); }
.pr-wk-r { border-top: 1px solid var(--pr-line); transition: background .15s; }
.pr-wk-r:first-of-type { border-top: 0; }
.pr-hov .pr-wk-r:hover { background: var(--pr-head); }
.pr-wk-r > div { padding: 9px 12px; font-size: 13px; }
.pr-wk-r > div:first-child { display: flex; justify-content: center; padding: 9px 0; }
.pr-wk-r .pr-ex { font-family: 'STIX Two Text', serif; font-size: 14.5px; }
.pr-wk-r.chk { background: var(--pr-head); }
.pr-wk-r.chk .pr-n { background: var(--pr-blue); }
.pr-wk-r .pr-sub { display: block; font-size: 11.5px; color: var(--pr-muted); margin-top: 3px; font-family: 'Inter', sans-serif; }

@media (max-width: 680px) {
  .pr-loop, .pr-two, .pr-glane.fork { grid-template-columns: 1fr; }
  .pr-group { grid-template-columns: 1fr; gap: 4px; }
  .pr-gl { border-right: 0; text-align: left; padding: 8px 0 0; }
  .pr-wk-h { display: none; }
  .pr-wk-r { grid-template-columns: 34px minmax(0, 1fr); }
  .pr-wk-r > div:last-child { grid-column: 2; border-left: 0 !important; border-top: 1px dashed var(--pr-line); }
}
`;

const Notes = ({ data }) => {
  if (!data.note && !data.pitfall) return null;
  const both = data.note && data.pitfall;
  return (
    <div className={both ? 'pr-two' : ''}>
      {data.note && <div className="pr-box pr-note"><span className="pr-lbl"><R t={data.note.label} /></span><R t={data.note.text} /></div>}
      {data.pitfall && <div className="pr-box pr-warn"><span className="pr-lbl"><R t={data.pitfall.label} /></span><R t={data.pitfall.text} /></div>}
    </div>
  );
};

/* ---------- loop ---------- */
function Loop({ data, L, O }) {
  const Lp = data.loop;
  const T = data.trace;
  const rows = T ? T.rows : [];
  const [k, setK] = useState(O.startAt === 'start' ? 0 : rows.length);
  const done = k >= rows.length;
  const steps = Lp.steps;
  const first = steps.findIndex((s) => s.repeat);
  const last = steps.length - 1 - [...steps].reverse().findIndex((s) => s.repeat);
  const showArc = O.arc && first >= 0;

  // the arc is measured from the first and last repeated steps, so it follows wrapped text
  const inRef = useRef(null);
  const [arc, setArc] = useState(null);
  useIsoLayoutEffect(() => {
    if (!showArc || !inRef.current) return undefined;
    const measure = () => {
      const els = inRef.current.querySelectorAll('.pr-st');
      const a = els[first], b = els[last];
      if (!a || !b) return;
      const top = a.offsetTop + a.offsetHeight / 2;
      const bottom = b.offsetTop + b.offsetHeight / 2;
      setArc((p) => (p && p.top === top && p.height === bottom - top ? p : { top, height: bottom - top }));
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(inRef.current);
    return () => ro.disconnect();
  }, [showArc, first, last, steps.length]);

  const zeroRe = /^\$?\s*0\s*\$?$/;
  return (
    <>
      <div className={'pr-loop' + (T ? '' : ' pr-solo')}>
        <div className="pr-box pr-algo">
          <span className="pr-lbl"><R t={Lp.label || L.algorithm} /></span>
          <div className={'pr-algo-in' + (showArc ? ' pr-arcs' : '')} ref={inRef}>
            {steps.map((s, i) => {
              const on = T && ((!done && s.repeat) || (done && s.output));
              return (
                <div key={i} className={'pr-st' + (s.repeat ? ' in' : '') + (s.test ? ' test' : '') + (s.output ? ' out' : '') + (on ? ' on' : '')}>
                  <span className="pr-n">{i + 1}</span><span><R t={s.text} /></span>
                </div>
              );
            })}
            {showArc && arc && (
              <div className="pr-arc" style={{ top: arc.top, height: arc.height }}>
                <span className="pr-arc-t"><R t={Lp.repeat || L.repeat} /></span>
              </div>
            )}
          </div>
        </div>
        {T && (
          <div className="pr-box pr-trace">
            <div className="pr-trace-h">
              <span className="pr-lbl"><R t={T.label} /></span>
              <div className="pr-btns">
                <button type="button" className="pr-btn" aria-label={L.prev} disabled={k === 0} onClick={() => setK(k - 1)}>{'←'}</button>
                <button type="button" className="pr-btn pri" aria-label={L.next} disabled={done} onClick={() => setK(k + 1)}>{'→'}</button>
              </div>
            </div>
            <div className="pr-tw">
              <table className="pr-t">
                <thead><tr>{T.columns.map((c, i) => <th key={i}><R t={c} /></th>)}</tr></thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className={i > k ? 'fut' : i === k ? 'cur' : (i === rows.length - 1 && done ? 'end' : '')}>
                      {r.map((v, j) => (
                        <td key={j} className={(T.eqCol === j ? 'eq' : '') + (T.zeroCol === j && zeroRe.test(String(v)) ? ' zero' : '')}><R t={v} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pr-res" aria-live="polite">
              <span className="pr-lbl">{done ? L.result : L.stepOf.replace('{k}', k + 1).replace('{n}', rows.length)}</span>
              <span className="pr-math" style={{ visibility: done ? 'visible' : 'hidden' }}><R t={T.result} /></span>
            </div>
          </div>
        )}
      </div>
      <Notes data={data} />
    </>
  );
}

/* ---------- stages ---------- */
function Stages({ data }) {
  return (
    <>
      <div className="pr-stages">
        {data.groups.map((g, gi) => (
          <React.Fragment key={gi}>
            {gi > 0 && <div className="pr-group"><div className="pr-gl pr-gap" /><div className="pr-down" /></div>}
            <div className="pr-group">
              <div className="pr-gl"><b><R t={g.label} /></b><R t={g.sub} /></div>
              <div className={'pr-glane' + (g.fork ? ' fork' : '')}>
                {g.stages.map((s, i) => (
                  <React.Fragment key={i}>
                    {!g.fork && i > 0 && <div className="pr-down" />}
                    <div className={'pr-box pr-stage ' + (g.kind || 'must')}>
                      <div className="pr-stage-h">
                        {s.n != null && <span className="pr-n">{s.n}</span>}
                        <b><R t={s.name} /></b>
                      </div>
                      {s.what && <div className="pr-f"><R t={s.what} /></div>}
                      {s.cond && <div className="pr-c"><R t={s.cond} /></div>}
                      {s.detail && <div className="pr-d"><R t={s.detail} /></div>}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <Notes data={data} />
    </>
  );
}

/* ---------- worked ---------- */
function Worked({ data, L, O }) {
  const W = data.worked;
  let n = 0;
  return (
    <>
      <div className={'pr-box pr-wk' + (O.hover ? ' pr-hov' : '')}>
        <div className="pr-wk-h">
          <div />
          <div><R t={W.stepLabel || L.step} /></div>
          <div><R t={W.exampleLabel || L.example} /></div>
        </div>
        {W.rows.map((r, i) => {
          if (!r.check) n += 1;
          return (
            <div key={i} className={'pr-wk-r' + (r.check ? ' chk' : '')}>
              <div><span className="pr-n">{r.check ? O.checkMark : n}</span></div>
              <div><R t={r.step} />{r.stepSub && <span className="pr-sub"><R t={r.stepSub} /></span>}</div>
              <div className="pr-ex"><R t={r.example} /></div>
            </div>
          );
        })}
      </div>
      <Notes data={data} />
    </>
  );
}

const VIEWS = { loop: Loop, stages: Stages, worked: Worked };

export default function Procedure({ data, variant = 'worked', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = VIEWS[variant] || Worked;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="pr-root" style={cssVars(th)}>
        <div className="pr-card">
          {hd && (
            <div className="pr-head">
              {hd.kicker && <div className="pr-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="pr-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="pr-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="pr-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
