/*
  ProofSteps.jsx

  A proof or derivation, step by step. Four variants:
    chain      an equation chain; each line has its reason beside it, the key step marked
    induction  base case, hypothesis, inductive step, conclusion
    align      two expressions aligned term by term, then combined
    stepper    one step at a time, with Back / Next

  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['chain', 'induction', 'align', 'stepper'];

export const DEFAULT_LABELS = {
  prove: 'Prove',
  baseCase: 'Base case',
  assume: 'Assume',
  inductionStep: 'Prove',
  loop: ['base', 'k', 'k + 1', 'all n'],
  back: 'Back',
  next: 'Next',
  stepAria: 'Step {n}'
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
  keyBg: '#fffdf5',
  rowA: '#c7d7fe'
};

export const DEFAULT_OPTIONS = {
  numbered: true,
  hover: true,
  loopChips: true,
  showPrevious: true,
  qedMark: true,
  arrow: '→'
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--pf-ink': th.ink, '--pf-title': th.title, '--pf-muted': th.muted, '--pf-line': th.line, '--pf-box': th.box,
  '--pf-panel': th.panel, '--pf-soft': th.soft, '--pf-head': th.headBg, '--pf-navy': th.navy,
  '--pf-blue': th.blue, '--pf-blue-soft': th.blueSoft, '--pf-gold': th.gold, '--pf-gold-bg': th.goldBg,
  '--pf-gold-ink': th.goldInk, '--pf-slate': th.slate, '--pf-slate-bg': th.slateBg,
  '--pf-key': th.keyBg, '--pf-row-a': th.rowA
});

const CSS = `
.pf-root { font-family: 'Inter', system-ui, sans-serif; color: var(--pf-ink); line-height: 1.45; }
.pf-root *, .pf-root *::before, .pf-root *::after { box-sizing: border-box; }
.pf-root .katex { text-transform: none; }
.pf-card { background: var(--pf-panel); border: 1.5px solid var(--pf-box); border-radius: 12px; overflow: hidden; }
.pf-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--pf-box); }
.pf-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--pf-blue); }
.pf-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--pf-title); letter-spacing: -.01em; }
.pf-lede { margin-top: 3px; font-size: 12.5px; color: var(--pf-muted); }
.pf-body { padding: 16px 20px 18px; background: var(--pf-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.pf-box { background: var(--pf-panel); border: 1.5px solid var(--pf-box); border-radius: 10px; }
.pf-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--pf-muted); margin-bottom: 4px; }
.pf-math { font-family: 'STIX Two Text', serif; font-size: 15px; }
.pf-goal { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 12px; align-items: center; padding: 10px 14px; border-left: 4px solid var(--pf-navy); }
.pf-goal .pf-lbl { margin: 0; color: var(--pf-navy); }
.pf-goal .pf-math { font-size: 16px; }
.pf-qed { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 12px; align-items: center; padding: 10px 14px; border: 1.5px solid var(--pf-blue); background: var(--pf-head); border-radius: 10px; }
.pf-qed.pf-nomark { grid-template-columns: minmax(0, 1fr); }
.pf-qed-m { width: 14px; height: 14px; background: var(--pf-blue); border-radius: 2px; }
.pf-qed .pf-math { font-size: 16px; }
.pf-qed-t { font-size: 12.5px; color: var(--pf-muted); margin-top: 2px; }
.pf-note { padding: 10px 14px 12px; border-left: 4px solid var(--pf-blue); font-size: 12.5px; }
.pf-note .pf-lbl { color: var(--pf-blue); }
.pf-warn { padding: 10px 14px 12px; border-left: 4px solid var(--pf-gold); font-size: 12.5px; }
.pf-warn .pf-lbl { color: var(--pf-gold-ink); }

/* ---------- chain ---------- */
.pf-chain { overflow: hidden; }
.pf-row { display: grid; grid-template-columns: 30px minmax(0, 1.6fr) minmax(0, 1fr); gap: 0; border-top: 1px solid var(--pf-line); transition: background .15s; }
.pf-row.pf-unnum { grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); }
.pf-row:first-child { border-top: 0; }
.pf-hov .pf-row:hover { background: var(--pf-head); }
.pf-row.pf-key { background: var(--pf-key); }
.pf-hov .pf-row.pf-key:hover { background: var(--pf-gold-bg); }
.pf-n { display: flex; align-items: center; justify-content: center; font: 700 10px 'JetBrains Mono', monospace; color: var(--pf-muted); border-right: 1px solid var(--pf-line); }
.pf-row.pf-key .pf-n { color: var(--pf-gold-ink); }
.pf-eq { padding: 8px 14px; overflow-x: auto; display: flex; align-items: center; }
.pf-why { padding: 8px 14px; font-size: 12px; color: var(--pf-muted); border-left: 1px dashed var(--pf-line); display: flex; align-items: center; gap: 8px; }
.pf-tag { flex: none; font: 700 8.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; padding: 2px 6px; border-radius: 4px; background: var(--pf-slate-bg); color: var(--pf-slate); }
.pf-row.pf-key .pf-tag { background: var(--pf-gold-bg); color: var(--pf-gold-ink); }

/* ---------- induction ---------- */
.pf-ind { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.7fr); gap: 12px; align-items: stretch; }
.pf-ind-l { display: grid; gap: 12px; align-content: stretch; }
.pf-part { padding: 10px 14px 12px; }
.pf-part.base { border-top: 4px solid var(--pf-slate); }
.pf-part.hyp { border-top: 4px solid var(--pf-navy); }
.pf-part.step { border-top: 4px solid var(--pf-blue); }
.pf-part .pf-lbl b { color: var(--pf-ink); margin-left: 6px; letter-spacing: .04em; }
.pf-part .pf-say { font-size: 12.5px; color: var(--pf-muted); margin-bottom: 6px; }
.pf-part .pf-say.after { margin-top: 6px; margin-bottom: 0; }
.pf-sub { display: grid; grid-template-columns: 18px minmax(0, 1fr); gap: 8px; padding: 6px 0; border-top: 1px dashed var(--pf-line); }
.pf-sub:first-of-type { border-top: 0; }
.pf-sub-n { width: 18px; height: 18px; border-radius: 50%; background: var(--pf-blue-soft); color: var(--pf-blue); font: 700 9px/18px 'JetBrains Mono', monospace; text-align: center; margin-top: 3px; }
.pf-sub .pf-why2 { font-size: 12px; color: var(--pf-muted); }
.pf-sub .pf-math { overflow-x: auto; }
.pf-loop { display: flex; align-items: center; gap: 8px; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--pf-blue); flex-wrap: wrap; }
.pf-loop > span { padding: 3px 8px; border: 1.5px solid var(--pf-blue-soft); border-radius: 999px; background: var(--pf-panel); }
.pf-loop i { font-style: normal; color: var(--pf-blue); }

/* ---------- align ---------- */
.pf-al { overflow-x: auto; padding: 12px 14px; }
.pf-al-g { display: grid; grid-auto-flow: column; justify-content: start; gap: 6px 6px; align-items: center; }
.pf-al-l { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--pf-muted); padding-right: 8px; white-space: nowrap; }
.pf-cell { min-width: 52px; padding: 6px 8px; text-align: center; border-radius: 6px; font-family: 'STIX Two Text', serif; font-size: 15px; border: 1.5px solid var(--pf-line); background: var(--pf-panel); transition: background .15s, border-color .15s; }
.pf-cell.r1 { border-color: var(--pf-row-a); }
.pf-cell.r2, .pf-cell.r3, .pf-cell.r4 { border-color: var(--pf-box); background: var(--pf-soft); }
.pf-cell.sum { border-color: var(--pf-blue); background: var(--pf-head); color: var(--pf-title); font-weight: 600; }
.pf-cell.on { background: var(--pf-gold-bg); border-color: var(--pf-gold); }
.pf-al-res { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--pf-line); font-size: 13px; }
.pf-al-res .pf-math { font-size: 16px; }
.pf-route { padding: 10px 14px 12px; border-left: 4px solid var(--pf-navy); font-size: 12.5px; }
.pf-route .pf-lbl { color: var(--pf-navy); }
.pf-route-t { margin-top: 4px; }
.pf-two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.pf-two.pf-one { grid-template-columns: minmax(0, 1fr); }

/* ---------- stepper ---------- */
.pf-st { padding: 0; overflow: hidden; }
.pf-st-bar { display: flex; gap: 4px; padding: 10px 14px; border-bottom: 1.5px solid var(--pf-box); background: var(--pf-head); align-items: center; }
.pf-dot { flex: 1; height: 6px; border-radius: 3px; background: var(--pf-line); cursor: pointer; transition: background .2s; border: 0; padding: 0; }
.pf-dot.done { background: var(--pf-blue-soft); }
.pf-dot.cur { background: var(--pf-blue); }
.pf-dot:focus-visible { outline: 2px solid var(--pf-blue); outline-offset: 2px; }
.pf-st-c { font: 700 10px 'JetBrains Mono', monospace; color: var(--pf-muted); margin-left: 8px; white-space: nowrap; }
.pf-st-body { padding: 14px 16px 12px; min-height: 160px; display: grid; gap: 10px; align-content: start; }
.pf-st-prev { font-size: 12px; color: var(--pf-muted); opacity: .75; overflow-x: auto; }
.pf-st-act { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--pf-blue); }
.pf-st-eq { font-family: 'STIX Two Text', serif; font-size: 17px; overflow-x: auto; padding: 6px 0; }
.pf-st-why { font-size: 12.5px; color: var(--pf-ink); padding: 8px 12px; background: var(--pf-soft); border-radius: 8px; border: 1px solid var(--pf-line); }
.pf-st-nav { display: flex; justify-content: space-between; gap: 8px; padding: 10px 14px; border-top: 1.5px solid var(--pf-box); }
.pf-btn { font: 600 12px 'Inter', sans-serif; padding: 6px 14px; border-radius: 8px; border: 1.5px solid var(--pf-box); background: var(--pf-panel); color: var(--pf-title); cursor: pointer; }
.pf-btn:hover:not(:disabled) { border-color: var(--pf-blue); }
.pf-btn:disabled { opacity: .4; cursor: default; }
.pf-btn.pri { background: var(--pf-navy); border-color: var(--pf-navy); color: #fff; }
.pf-btn.pri:hover:not(:disabled) { background: var(--pf-blue); border-color: var(--pf-blue); }

@media (max-width: 680px) {
  .pf-row { grid-template-columns: 26px minmax(0, 1fr); }
  .pf-row.pf-unnum { grid-template-columns: minmax(0, 1fr); }
  .pf-why { grid-column: 2; border-left: 0; border-top: 1px dashed var(--pf-line); padding-top: 6px; }
  .pf-row.pf-unnum .pf-why { grid-column: 1; }
  .pf-ind, .pf-two { grid-template-columns: 1fr; }
  /* align: a 4–6 column grid has to fit a phone column, so the cells shrink */
  .pf-al { padding: 10px 8px; }
  .pf-al-g { gap: 4px 3px; }
  .pf-al-l { padding-right: 3px; letter-spacing: .04em; }
  .pf-cell { min-width: min-content; padding: 4px 3px; font-size: 12.5px; border-radius: 5px; }
  /* stepper: one formula per screen, so give it the full width */
  .pf-st-body { padding: 12px 10px 10px; }
  .pf-st-eq { font-size: 14.5px; }
}
`;

/* ---------- shared parts ---------- */
const Goal = ({ g, L }) =>
  g ? (
    <div className="pf-box pf-goal">
      <span className="pf-lbl"><R t={g.label || L.prove} /></span>
      <span className="pf-math"><R t={g.text} /></span>
    </div>
  ) : null;

const Qed = ({ q, O }) =>
  q ? (
    <div className={'pf-qed' + (O.qedMark ? '' : ' pf-nomark')}>
      {O.qedMark && <span className="pf-qed-m" />}
      <div>
        <div className="pf-math"><R t={q.text} /></div>
        {q.say && <div className="pf-qed-t"><R t={q.say} /></div>}
      </div>
    </div>
  ) : null;

const Note = ({ n }) => (n ? <div className="pf-box pf-note"><span className="pf-lbl"><R t={n.label} /></span><R t={n.text} /></div> : null);
const Pitfall = ({ p }) => (p ? <div className="pf-box pf-warn"><span className="pf-lbl"><R t={p.label} /></span><R t={p.text} /></div> : null);

/* ---------- chain ---------- */
function Chain({ data, L, O }) {
  return (
    <>
      <Goal g={data.goal} L={L} />
      <div className={'pf-box pf-chain' + (O.hover ? ' pf-hov' : '')}>
        {data.steps.map((s, i) => (
          <div key={i} className={'pf-row' + (O.numbered ? '' : ' pf-unnum') + (s.key ? ' pf-key' : '')}>
            {O.numbered && <span className="pf-n">{i + 1}</span>}
            <div className="pf-eq pf-math"><R t={s.math} /></div>
            <div className="pf-why">
              {s.tag && <span className="pf-tag"><R t={s.tag} /></span>}
              <span><R t={s.why} /></span>
            </div>
          </div>
        ))}
      </div>
      <Qed q={data.conclusion} O={O} />
      <Note n={data.note} />
      <Pitfall p={data.pitfall} />
    </>
  );
}

/* ---------- induction ---------- */
function Induction({ data, L, O }) {
  const d = data.induction;
  return (
    <>
      <Goal g={data.goal} L={L} />
      <div className="pf-ind">
        <div className="pf-ind-l">
          <div className="pf-box pf-part base">
            <span className="pf-lbl"><R t={d.base.label || L.baseCase} /><b><R t={d.base.at} /></b></span>
            <div className="pf-math"><R t={d.base.math} /></div>
            {d.base.say && <div className="pf-say after"><R t={d.base.say} /></div>}
          </div>
          <div className="pf-box pf-part hyp">
            <span className="pf-lbl"><R t={d.hyp.label || L.assume} /><b><R t={d.hyp.at} /></b></span>
            <div className="pf-math"><R t={d.hyp.math} /></div>
            {d.hyp.say && <div className="pf-say after"><R t={d.hyp.say} /></div>}
          </div>
        </div>
        <div className="pf-box pf-part step">
          <span className="pf-lbl"><R t={d.step.label || L.inductionStep} /><b><R t={d.step.at} /></b></span>
          {d.step.say && <div className="pf-say"><R t={d.step.say} /></div>}
          {d.step.steps.map((s, i) => (
            <div key={i} className="pf-sub">
              <span className="pf-sub-n">{i + 1}</span>
              <div>
                {s.why && <div className="pf-why2"><R t={s.why} /></div>}
                <div className="pf-math"><R t={s.math} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {O.loopChips && L.loop && L.loop.length > 0 && (
        <div className="pf-loop">
          {L.loop.map((c, i) => (
            <React.Fragment key={i}>
              {i > 0 && <i>{O.arrow}</i>}
              <span><R t={c} /></span>
            </React.Fragment>
          ))}
        </div>
      )}
      <Qed q={data.conclusion} O={O} />
      <Note n={data.note} />
      <Pitfall p={data.pitfall} />
    </>
  );
}

/* ---------- align ---------- */
function Align({ data, L, O }) {
  const a = data.align;
  const [hl, setHl] = useState(null);
  const cols = a.rows[0].cells.length;
  const hov = (j) => (O.hover ? { onMouseEnter: () => setHl(j), onMouseLeave: () => setHl(null) } : {});
  const cell = (cells, j, cls) => (
    <div key={cls + j} className={'pf-cell ' + cls + (hl === j ? ' on' : '')} {...hov(j)}><R t={cells[j]} /></div>
  );
  const labels = [...a.rows.map((r) => r.label), ...(a.sum ? [a.sum.label] : [])];
  const nRows = labels.length;
  const side = [data.route, data.pitfall].filter(Boolean).length;
  return (
    <>
      <Goal g={data.goal} L={L} />
      <div className="pf-box pf-al">
        <div className="pf-al-g" style={{ gridTemplateRows: `repeat(${nRows}, auto)` }}>
          {labels.map((l, i) => <div key={'l' + i} className="pf-al-l"><R t={l} /></div>)}
          {Array.from({ length: cols }).map((_, j) => (
            <React.Fragment key={j}>
              {a.rows.map((r, ri) => cell(r.cells, j, 'r' + Math.min(ri + 1, 4)))}
              {a.sum && cell(a.sum.cells, j, 'sum')}
            </React.Fragment>
          ))}
        </div>
        {a.result && a.result.length > 0 && (
          <div className="pf-al-res">
            {a.result.map((x, i) => <span key={i} className={x.math ? 'pf-math' : ''}><R t={x.math || x.text} /></span>)}
          </div>
        )}
      </div>
      {side > 0 && (
        <div className={'pf-two' + (side === 1 ? ' pf-one' : '')}>
          {data.route && (
            <div className="pf-box pf-route">
              <span className="pf-lbl"><R t={data.route.label} /></span>
              {data.route.math && <div className="pf-math"><R t={data.route.math} /></div>}
              {data.route.text && <div className="pf-route-t"><R t={data.route.text} /></div>}
            </div>
          )}
          <Pitfall p={data.pitfall} />
        </div>
      )}
      <Note n={data.note} />
    </>
  );
}

/* ---------- stepper ---------- */
function Stepper({ data, L, O }) {
  const [i, setI] = useState(0);
  const n = data.steps.length;
  const s = data.steps[i];
  return (
    <>
      <Goal g={data.goal} L={L} />
      <div className="pf-box pf-st">
        <div className="pf-st-bar">
          {data.steps.map((_, k) => (
            <button
              key={k}
              type="button"
              aria-label={L.stepAria.replace('{n}', k + 1)}
              aria-current={k === i ? 'step' : undefined}
              className={'pf-dot' + (k < i ? ' done' : k === i ? ' cur' : '')}
              onClick={() => setI(k)}
            />
          ))}
          <span className="pf-st-c">{i + 1} / {n}</span>
        </div>
        <div className="pf-st-body" aria-live="polite">
          {O.showPrevious && i > 0 && <div className="pf-st-prev"><R t={data.steps[i - 1].math} /></div>}
          {s.action && <div className="pf-st-act"><R t={s.action} /></div>}
          <div className="pf-st-eq"><R t={s.math} /></div>
          {s.why && <div className="pf-st-why"><R t={s.why} /></div>}
        </div>
        <div className="pf-st-nav">
          <button type="button" className="pf-btn" disabled={i === 0} onClick={() => setI(i - 1)}>{'←'} {L.back}</button>
          <button type="button" className="pf-btn pri" disabled={i === n - 1} onClick={() => setI(i + 1)}>{L.next} {'→'}</button>
        </div>
      </div>
      <Qed q={data.conclusion} O={O} />
      <Note n={data.note} />
      <Pitfall p={data.pitfall} />
    </>
  );
}

const VIEWS = { chain: Chain, induction: Induction, align: Align, stepper: Stepper };

export default function ProofSteps({ data, variant = 'chain', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = VIEWS[variant] || Chain;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="pf-root" style={cssVars(th)}>
        <div className="pf-card">
          {hd && (
            <div className="pf-head">
              {hd.kicker && <div className="pf-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="pf-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="pf-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="pf-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
