/*
  TheoremCard.jsx

  A theorem infographic with seven variants:
    card       one theorem: if → then; click a hypothesis to see its job and a counterexample
    matrix     related theorems side by side: which hypotheses each needs, what each concludes
    iff        a two-way theorem: both directions labelled, the general case and a misuse
    chain      theorems that lead to one another, ending in what they prove
    converse   what the theorem says, the backwards reading, and the counterexample
    apply      the theorem turned into steps on one example
    geometric  the statement next to its picture

  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['card', 'matrix', 'iff', 'chain', 'converse', 'apply', 'geometric'];

export const DEFAULT_LABELS = {
  if: 'If',
  then: 'Then',
  dropHint: 'click: drop it',
  dropped: 'dropped',
  without: 'Without hypothesis {n}',
  job: 'Its job',
  counterexample: 'Counterexample',
  noCounter: 'No counterexample on this page.',
  hypothesis: 'Hypothesis',
  matrixThen: 'Then',
  forward: 'implies',
  backward: 'conversely',
  says: 'The theorem says',
  not: 'It does not say',
  wrong: 'Wrong working',
  right: 'Right working',
  theorem: 'Theorem',
  geometrically: 'Geometrically',
  secant: 'secant',
  tangent: 'tangent at $c$',
  curve: '$f$'
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
  faint: '#cbd5e1',
  conclBg: '#fbfdff'
};

export const DEFAULT_OPTIONS = {
  interactive: true,
  marks: true,
  strikeNot: true,
  arrow: '⟹'
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--tc-ink': th.ink, '--tc-title': th.title, '--tc-muted': th.muted, '--tc-line': th.line, '--tc-box': th.box,
  '--tc-panel': th.panel, '--tc-soft': th.soft, '--tc-head': th.headBg, '--tc-navy': th.navy,
  '--tc-blue': th.blue, '--tc-blue-soft': th.blueSoft, '--tc-gold': th.gold, '--tc-gold-bg': th.goldBg,
  '--tc-gold-ink': th.goldInk, '--tc-slate': th.slate, '--tc-slate-bg': th.slateBg, '--tc-faint': th.faint,
  '--tc-concl': th.conclBg
});

const CSS = `
.tc-root { font-family: 'Inter', system-ui, sans-serif; color: var(--tc-ink); line-height: 1.45; }
.tc-root *, .tc-root *::before, .tc-root *::after { box-sizing: border-box; }
.tc-root .katex { text-transform: none; }
.tc-card { background: var(--tc-panel); border: 1.5px solid var(--tc-box); border-radius: 12px; overflow: hidden; }
.tc-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--tc-box); }
.tc-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--tc-blue); }
.tc-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--tc-title); letter-spacing: -.01em; }
.tc-lede { margin-top: 3px; font-size: 12.5px; color: var(--tc-muted); }
.tc-body { padding: 16px 20px 18px; background: var(--tc-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 14px; }
.tc-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--tc-muted); margin-bottom: 4px; }
.tc-math { font-family: 'STIX Two Text', serif; font-size: 15px; }
.tc-box { background: var(--tc-panel); border: 1.5px solid var(--tc-box); border-radius: 10px; }

/* ---------- card ---------- */
.tc-flow { display: grid; grid-template-columns: minmax(0, 1fr) 44px minmax(0, 1fr); align-items: stretch; }
.tc-if { padding: 10px 12px 12px; border-top: 4px solid var(--tc-slate); }
.tc-then { padding: 10px 14px 12px; border-top: 4px solid var(--tc-blue); display: flex; flex-direction: column; justify-content: center; }
.tc-then .tc-lbl { color: var(--tc-blue); }
.tc-then .tc-math { font-size: 16px; }
.tc-then .tc-say { font-size: 12.5px; color: var(--tc-muted); margin-top: 6px; }
.tc-arrow { display: flex; align-items: center; justify-content: center; color: var(--tc-blue); font-size: 22px; font-weight: 700; }
.tc-hyps { display: grid; gap: 6px; }
.tc-hyp { display: grid; grid-template-columns: 22px 1fr; gap: 8px; align-items: start; padding: 6px 8px; border: 1.5px solid var(--tc-line); border-radius: 8px; background: var(--tc-panel); transition: border-color .15s, background .15s; }
.tc-hyp.tc-click { cursor: pointer; }
.tc-hyp.tc-click:not(.tc-on):hover { border-color: var(--tc-blue); }
.tc-hyp.tc-click:focus-visible { outline: 2px solid var(--tc-blue); outline-offset: 1px; }
.tc-hyp.tc-on { border-color: var(--tc-gold); background: var(--tc-gold-bg); }
.tc-hn { width: 20px; height: 20px; border-radius: 50%; background: var(--tc-navy); color: #fff; font: 700 10px/20px 'JetBrains Mono', monospace; text-align: center; }
.tc-hyp.tc-on .tc-hn { background: var(--tc-gold); }
.tc-hyp-t { font-size: 13px; }
.tc-hyp-hint { display: block; font: 600 9px 'JetBrains Mono', monospace; letter-spacing: .08em; text-transform: uppercase; color: var(--tc-muted); margin-top: 2px; }
.tc-drop { padding: 10px 14px 12px; border-left: 4px solid var(--tc-gold); }
.tc-drop .tc-lbl { color: var(--tc-gold-ink); }
.tc-drop-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 18px; font-size: 12.5px; }
.tc-none { font-size: 12.5px; color: var(--tc-muted); font-style: italic; }

/* ---------- matrix ---------- */
.tc-mwrap { position: relative; overflow-x: auto; background: var(--tc-panel); border: 1.5px solid var(--tc-box); border-radius: 10px; }
.tc-m { width: 100%; border-collapse: collapse; }
.tc-m th { padding: 9px 12px; background: var(--tc-head); border-bottom: 1.5px solid var(--tc-box); }
.tc-m th.tc-th { font-size: 13px; font-weight: 700; color: var(--tc-title); text-align: center; min-width: 150px; }
.tc-m th.tc-th small { display: block; font: 600 9.5px 'JetBrains Mono', monospace; color: var(--tc-muted); letter-spacing: .06em; margin-top: 2px; }
.tc-m th.tc-corner { text-align: left; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--tc-muted); }
.tc-m td { padding: 8px 12px; border-top: 1px solid var(--tc-line); text-align: center; vertical-align: middle; }
.tc-m td + td, .tc-m th + th { border-left: 1px solid var(--tc-line); }
.tc-m td.tc-rl { text-align: left; font-size: 13px; }
.tc-m tr.tc-sep td { border-top: 1.5px solid var(--tc-box); }
.tc-m tr.tc-concl td { background: var(--tc-concl); }
.tc-m tr.tc-concl td.tc-rl { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--tc-blue); }
.tc-req { display: inline-flex; width: 22px; height: 22px; border-radius: 50%; align-items: center; justify-content: center; background: var(--tc-blue-soft); color: var(--tc-blue); font-weight: 700; font-size: 12px; }
.tc-no { color: var(--tc-faint); }
.tc-rel { display: flex; flex-wrap: wrap; gap: 8px; }
.tc-rel > span { padding: 4px 10px; border-radius: 999px; background: var(--tc-panel); border: 1.5px solid var(--tc-box); font-size: 12px; }
.tc-rel b { color: var(--tc-title); }

/* ---------- iff ---------- */
.tc-iff { display: grid; grid-template-columns: minmax(0, 1fr) 110px minmax(0, 1fr); align-items: center; }
.tc-side { padding: 14px 16px; text-align: center; border-top: 4px solid var(--tc-navy); }
.tc-side .tc-math { font-size: 17px; }
.tc-side .tc-say { font-size: 12px; color: var(--tc-muted); margin-top: 4px; }
.tc-mid { display: grid; gap: 10px; padding: 0 8px; }
.tc-dir { display: grid; gap: 2px; justify-items: center; }
.tc-dir-a { width: 100%; height: 10px; position: relative; }
.tc-dir-a::before { content: ''; position: absolute; left: 4px; right: 4px; top: 4px; height: 2px; background: var(--tc-blue); }
.tc-dir-a.r::after { content: ''; position: absolute; right: 0; top: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 8px solid var(--tc-blue); }
.tc-dir-a.l::after { content: ''; position: absolute; left: 0; top: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 8px solid var(--tc-blue); }
.tc-dir-t { font: 700 9px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--tc-blue); }
.tc-general { padding: 10px 14px 12px; border-left: 4px solid var(--tc-blue); }
.tc-general .tc-lbl { color: var(--tc-blue); }
.tc-gsay { font-size: 12px; color: var(--tc-muted); margin-top: 4px; }
.tc-misuse { padding: 10px 14px 12px; border-left: 4px solid var(--tc-gold); font-size: 12.5px; }
.tc-misuse .tc-lbl { color: var(--tc-gold-ink); }
.tc-two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

/* ---------- chain ---------- */
.tc-chain { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); gap: 0; align-items: stretch; }
.tc-link { display: grid; grid-template-columns: minmax(0, 1fr) 96px; }
.tc-link:last-child { grid-template-columns: minmax(0, 1fr); }
.tc-node { padding: 10px 14px 12px; border-top: 4px solid var(--tc-navy); }
.tc-node.tc-last { border-top-color: var(--tc-blue); }
.tc-node-n { font-size: 14px; font-weight: 800; color: var(--tc-title); margin-bottom: 4px; }
.tc-node .tc-math { font-size: 14px; }
.tc-node ul { margin: 0; padding-left: 16px; font-size: 12.5px; display: grid; gap: 4px; }
.tc-edge { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3px; padding: 0 6px; text-align: center; }
.tc-edge .tc-dir-a { width: 100%; }
.tc-edge-t { font: 700 9px 'JetBrains Mono', monospace; letter-spacing: .08em; text-transform: uppercase; color: var(--tc-blue); line-height: 1.35; }

/* ---------- converse ---------- */
.tc-conv { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.tc-says { padding: 10px 14px 12px; border-top: 4px solid var(--tc-blue); }
.tc-says .tc-lbl { color: var(--tc-blue); }
.tc-not { padding: 10px 14px 12px; border-top: 4px solid var(--tc-slate); background: var(--tc-slate-bg); }
.tc-not .tc-lbl { color: var(--tc-slate); }
.tc-not .tc-txt { color: var(--tc-slate); }
.tc-not.tc-strike .tc-txt { text-decoration: line-through; text-decoration-color: var(--tc-slate); }
.tc-txt { font-size: 13px; }
.tc-x { display: inline-flex; width: 16px; height: 16px; border-radius: 50%; background: var(--tc-slate); color: #fff; font-size: 10px; align-items: center; justify-content: center; margin-right: 6px; vertical-align: 1px; text-decoration: none; }
.tc-ce { padding: 10px 14px 12px; border-left: 4px solid var(--tc-gold); font-size: 12.5px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px 18px; }
.tc-ce > .tc-lbl { grid-column: 1 / -1; color: var(--tc-gold-ink); margin: 0; }
.tc-ce .tc-sub { font: 700 9px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--tc-muted); display: block; margin-bottom: 2px; }
.tc-scope { font-size: 12px; color: var(--tc-muted); }
.tc-scope b { color: var(--tc-title); }

/* ---------- apply ---------- */
.tc-stmt { padding: 10px 14px 12px; border-left: 4px solid var(--tc-navy); font-size: 13px; }
.tc-steps { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0; }
.tc-step { display: grid; grid-template-columns: 26px minmax(0, 1fr); gap: 10px; align-items: start; padding: 8px 12px; background: var(--tc-panel); border: 1.5px solid var(--tc-box); border-top-width: 0; }
.tc-step:first-child { border-top-width: 1.5px; border-radius: 10px 10px 0 0; }
.tc-step:last-child { border-radius: 0 0 10px 10px; }
.tc-step:only-child { border-radius: 10px; }
.tc-step.tc-hit { background: var(--tc-head); }
.tc-step-n { width: 22px; height: 22px; border-radius: 6px; background: var(--tc-navy); color: #fff; font: 700 10px/22px 'JetBrains Mono', monospace; text-align: center; }
.tc-step.tc-hit .tc-step-n { background: var(--tc-blue); }
.tc-step-l { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--tc-muted); }
.tc-step-b { font-size: 13px; margin-top: 1px; }
.tc-apply { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); gap: 12px; align-items: start; }
.tc-apply.tc-solo { grid-template-columns: minmax(0, 1fr); }

/* ---------- geometric ---------- */
.tc-geo { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr); gap: 12px; align-items: stretch; }
.tc-geo-l { display: grid; gap: 10px; align-content: start; }
.tc-fig { padding: 8px; display: flex; flex-direction: column; }
.tc-fig svg { width: 100%; height: auto; display: block; }
.tc-key { display: flex; flex-wrap: wrap; gap: 12px; padding: 2px 6px 4px; font-size: 11.5px; color: var(--tc-muted); }
.tc-key i { display: inline-block; width: 18px; height: 0; border-top: 2px solid; vertical-align: middle; margin-right: 5px; }
.tc-reading { padding: 10px 14px 12px; border-left: 4px solid var(--tc-blue); font-size: 12.5px; }
.tc-reading .tc-lbl { color: var(--tc-blue); }

@media (max-width: 680px) {
  .tc-flow, .tc-iff, .tc-two, .tc-drop-grid, .tc-conv, .tc-ce, .tc-apply, .tc-geo { grid-template-columns: 1fr; }
  .tc-chain { grid-auto-flow: row; }
  .tc-link { grid-template-columns: 1fr; }
  .tc-edge { padding: 6px 0; }
  .tc-edge .tc-dir-a { width: 36px; transform: rotate(90deg); margin: 14px 0; }
  .tc-arrow { height: 30px; }
  .tc-arrow span { display: inline-block; transform: rotate(90deg); }
  .tc-mid { grid-template-columns: 1fr 1fr; padding: 8px 0; }
}
`;

/* ---------- card ---------- */
function Card({ data, L, O }) {
  const t = data.theorem;
  const [drop, setDrop] = useState(null);
  const h = drop != null ? t.hypotheses[drop] : null;
  const toggle = (i) => setDrop(drop === i ? null : i);
  return (
    <>
      <div className="tc-flow">
        <div className="tc-box tc-if">
          <span className="tc-lbl">{L.if}</span>
          <div className="tc-hyps">
            {t.hypotheses.map((x, i) => (
              <div
                key={i}
                className={'tc-hyp' + (O.interactive ? ' tc-click' : '') + (drop === i ? ' tc-on' : '')}
                onClick={O.interactive ? () => toggle(i) : undefined}
                onKeyDown={O.interactive ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i); } } : undefined}
                role={O.interactive ? 'button' : undefined}
                tabIndex={O.interactive ? 0 : undefined}
                aria-pressed={O.interactive ? drop === i : undefined}
              >
                <span className="tc-hn">{i + 1}</span>
                <span className="tc-hyp-t">
                  <R t={x.text} />
                  {O.interactive && <span className="tc-hyp-hint">{drop === i ? L.dropped : L.dropHint}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="tc-arrow"><span>{O.arrow}</span></div>
        <div className="tc-box tc-then">
          <span className="tc-lbl">{L.then}</span>
          <div className="tc-math"><R t={t.conclusion} /></div>
          {t.meaning && <div className="tc-say"><R t={t.meaning} /></div>}
        </div>
      </div>
      {h && (
        <div className="tc-box tc-drop">
          <span className="tc-lbl">{L.without.replace('{n}', drop + 1)}</span>
          <div className="tc-drop-grid">
            {h.job && <div><span className="tc-lbl">{L.job}</span><R t={h.job} /></div>}
            {h.counter
              ? <div><span className="tc-lbl">{L.counterexample}</span><R t={h.counter} /></div>
              : <div className="tc-none">{L.noCounter}</div>}
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- matrix ---------- */
function Matrix({ data, L, O }) {
  return (
    <>
      <div className="tc-mwrap">
        <table className="tc-m">
          <thead>
            <tr>
              <th className="tc-corner">{L.hypothesis}</th>
              {data.theorems.map((t) => (
                <th key={t.id} className="tc-th"><R t={t.name} />{t.short && <small><R t={t.short} /></small>}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.hypotheses.map((h) => (
              <tr key={h.id}>
                <td className="tc-rl"><R t={h.text} /></td>
                {data.theorems.map((t) => (
                  <td key={t.id}>
                    {t.needs.includes(h.id)
                      ? <span className="tc-req">{O.marks ? '✓' : ''}</span>
                      : <span className="tc-no">{O.marks ? '—' : ''}</span>}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="tc-sep tc-concl">
              <td className="tc-rl">{L.matrixThen}</td>
              {data.theorems.map((t) => <td key={t.id}><span className="tc-math"><R t={t.conclusion} /></span></td>)}
            </tr>
          </tbody>
        </table>
      </div>
      {data.relations && data.relations.length > 0 && (
        <div className="tc-rel">{data.relations.map((r, i) => <span key={i}><R t={r} /></span>)}</div>
      )}
    </>
  );
}

/* ---------- iff ---------- */
function Iff({ data, L }) {
  const t = data.theorem;
  return (
    <>
      <div className="tc-iff">
        <div className="tc-box tc-side">
          <div className="tc-math"><R t={t.left} /></div>
          {t.leftSay && <div className="tc-say"><R t={t.leftSay} /></div>}
        </div>
        <div className="tc-mid">
          <div className="tc-dir"><span className="tc-dir-t"><R t={t.forward || L.forward} /></span><span className="tc-dir-a r" data-keep-position="" /></div>
          <div className="tc-dir"><span className="tc-dir-a l" data-keep-position="" /><span className="tc-dir-t"><R t={t.backward || L.backward} /></span></div>
        </div>
        <div className="tc-box tc-side">
          <div className="tc-math"><R t={t.right} /></div>
          {t.rightSay && <div className="tc-say"><R t={t.rightSay} /></div>}
        </div>
      </div>
      {(t.general || t.misuse) && (
        <div className="tc-two">
          {t.general && (
            <div className="tc-box tc-general">
              <span className="tc-lbl"><R t={t.general.label} /></span>
              <div className="tc-math"><R t={t.general.text} /></div>
              {t.general.say && <div className="tc-gsay"><R t={t.general.say} /></div>}
            </div>
          )}
          {t.misuse && (
            <div className="tc-box tc-misuse"><span className="tc-lbl"><R t={t.misuse.label} /></span><R t={t.misuse.text} /></div>
          )}
        </div>
      )}
    </>
  );
}

/* ---------- chain ---------- */
function Chain({ data }) {
  const n = data.chain.length;
  return (
    <div className="tc-chain">
      {data.chain.map((c, i) => (
        <div key={i} className="tc-link">
          <div className={'tc-box tc-node' + (i === n - 1 ? ' tc-last' : '')}>
            {c.name && <div className="tc-node-n"><R t={c.name} /></div>}
            {c.text && <div className="tc-math"><R t={c.text} /></div>}
            {c.items && <ul>{c.items.map((x, j) => <li key={j}><R t={x} /></li>)}</ul>}
          </div>
          {i < n - 1 && (
            <div className="tc-edge"><span className="tc-edge-t"><R t={c.edge} /></span><span className="tc-dir-a r" data-keep-position="" /></div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- converse ---------- */
function Converse({ data, L, O }) {
  const t = data.theorem;
  return (
    <>
      <div className="tc-conv">
        <div className="tc-box tc-says">
          <span className="tc-lbl"><R t={t.saysLabel || L.says} /></span>
          <div className="tc-txt"><R t={t.says} /></div>
        </div>
        <div className={'tc-box tc-not' + (O.strikeNot ? ' tc-strike' : '')}>
          <span className="tc-lbl">{O.marks && <span className="tc-x">{'✕'}</span>}<R t={t.notLabel || L.not} /></span>
          <div className="tc-txt"><R t={t.not} /></div>
        </div>
      </div>
      {t.counter && (
        <div className="tc-box tc-ce">
          <span className="tc-lbl"><R t={t.counter.label} /></span>
          <div><span className="tc-sub">{L.wrong}</span><R t={t.counter.wrong} /></div>
          <div><span className="tc-sub">{L.right}</span><R t={t.counter.right} /></div>
        </div>
      )}
      {t.scope && <div className="tc-scope"><R t={t.scope} /></div>}
    </>
  );
}

/* ---------- apply ---------- */
function Apply({ data, L }) {
  const t = data.theorem;
  return (
    <>
      <div className="tc-box tc-stmt"><span className="tc-lbl">{L.theorem}</span><R t={t.statement} /></div>
      <div className={'tc-apply' + (t.misuse ? '' : ' tc-solo')}>
        <div className="tc-steps">
          {t.steps.map((s, i) => (
            <div key={i} className={'tc-step' + (s.hit ? ' tc-hit' : '')}>
              <span className="tc-step-n">{i + 1}</span>
              <div>
                {s.label && <div className="tc-step-l"><R t={s.label} /></div>}
                <div className="tc-step-b"><R t={s.text} /></div>
              </div>
            </div>
          ))}
        </div>
        {t.misuse && (
          <div className="tc-box tc-misuse"><span className="tc-lbl"><R t={t.misuse.label} /></span><R t={t.misuse.text} /></div>
        )}
      </div>
    </>
  );
}

/* ---------- geometric ---------- */
function Figure({ fig, th }) {
  const W = 420, H = 250, P = 26;
  const { f, a, b, x0, x1 } = fig;
  const N = 160, xs = [], ys = [];
  for (let i = 0; i <= N; i++) { const x = x0 + (x1 - x0) * i / N; xs.push(x); ys.push(f(x)); }
  const y0 = Math.min(...ys), y1 = Math.max(...ys), pad = (y1 - y0) * 0.18;
  const X = (x) => P + (x - x0) / (x1 - x0) * (W - 2 * P);
  const Y = (y) => H - P - (y - (y0 - pad)) / (y1 - y0 + 2 * pad) * (H - 2 * P);
  const m = (f(b) - f(a)) / (b - a);
  let c = fig.c;
  if (c == null) {
    let best = Infinity;
    c = a;
    for (let i = 1; i < 400; i++) {
      const x = a + (b - a) * i / 400, d = (f(x + 1e-5) - f(x - 1e-5)) / 2e-5;
      if (Math.abs(d - m) < best) { best = Math.abs(d - m); c = x; }
    }
  }
  const len = (b - a) * 0.38;
  const tx1 = c - len, ty1 = f(c) - m * len, tx2 = c + len, ty2 = f(c) + m * len;
  const path = xs.map((x, i) => (i ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Y(ys[i]).toFixed(1)).join(' ');
  const ticks = [[a, fig.aLabel || 'a', th.ink], [c, fig.cLabel || 'c', th.goldInk], [b, fig.bLabel || 'b', th.ink]];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img">
      <line x1={P} y1={H - P} x2={W - P} y2={H - P} stroke={th.box} strokeWidth="1.2" />
      <path d={path} fill="none" stroke={th.navy} strokeWidth="2.2" />
      <line x1={X(a)} y1={Y(f(a))} x2={X(b)} y2={Y(f(b))} stroke={th.muted} strokeWidth="1.6" strokeDasharray="5 4" />
      <line x1={X(tx1)} y1={Y(ty1)} x2={X(tx2)} y2={Y(ty2)} stroke={th.blue} strokeWidth="2.2" />
      {[a, b].map((x, i) => <line key={i} x1={X(x)} y1={Y(f(x))} x2={X(x)} y2={H - P} stroke={th.line} strokeWidth="1" />)}
      <line x1={X(c)} y1={Y(f(c))} x2={X(c)} y2={H - P} stroke={th.gold} strokeWidth="1.2" strokeDasharray="3 3" />
      <circle cx={X(a)} cy={Y(f(a))} r="4" fill={th.muted} />
      <circle cx={X(b)} cy={Y(f(b))} r="4" fill={th.muted} />
      <circle cx={X(c)} cy={Y(f(c))} r="4.5" fill={th.gold} stroke="#fff" strokeWidth="1.5" />
      {ticks.map(([x, l, col]) => (
        <text key={l} x={X(x)} y={H - P + 15} textAnchor="middle" fontFamily="STIX Two Text, serif" fontStyle="italic" fontSize="14" fill={col}>{l}</text>
      ))}
    </svg>
  );
}

function Geometric({ data, L, th }) {
  const t = data.theorem;
  const key = t.key || [
    { text: L.secant, color: th.muted, dashed: true },
    { text: L.tangent, color: th.blue },
    { text: L.curve, color: th.navy }
  ];
  return (
    <div className="tc-geo">
      <div className="tc-geo-l">
        <div className="tc-box tc-stmt"><span className="tc-lbl">{L.theorem}</span><R t={t.statement} /></div>
        {t.reading && (
          <div className="tc-box tc-reading"><span className="tc-lbl"><R t={t.readingLabel || L.geometrically} /></span><R t={t.reading} /></div>
        )}
        {t.aside && (
          <div className="tc-box tc-misuse"><span className="tc-lbl"><R t={t.aside.label} /></span><R t={t.aside.text} /></div>
        )}
      </div>
      <div className="tc-box tc-fig">
        <Figure fig={t.figure} th={th} />
        {key.length > 0 && (
          <div className="tc-key">
            {key.map((k, i) => (
              <span key={i}><i style={{ borderColor: k.color, borderTopStyle: k.dashed ? 'dashed' : 'solid' }} /><R t={k.text} /></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const VIEWS = { card: Card, matrix: Matrix, iff: Iff, chain: Chain, converse: Converse, apply: Apply, geometric: Geometric };

export default function TheoremCard({ data, variant = 'card', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = VIEWS[variant] || Card;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="tc-root" style={cssVars(th)}>
        <div className="tc-card">
          {hd && (
            <div className="tc-head">
              {hd.kicker && <div className="tc-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="tc-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="tc-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="tc-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
