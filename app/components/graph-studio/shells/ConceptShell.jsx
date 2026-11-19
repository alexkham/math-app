// Graph Studio — shell: the Concept tool
//
// One concept taught with a few sliders and an explanation that follows
// them. The tool is described by data; adding a tool means writing a
// data file, not a component.
//
//   import transformations from '…/graph-studio/shells/concepts/transformations.js';
//   <ConceptShell concept={transformations} height={640} />
//
// The data (see shells/concepts/transformations.js for a full one):
//   title        name of the tool
//   scene        a scene document; slider rows carry their limits, rows
//                that only define things are marked lock: 'hidden-row'
//   legend       [{ row, tex }] what the legend says for a drawn row
//   sliders      { a: { label, default, seconds } } the sliders shown
//   sections     the tabs: [{ id, label, title, formula, sliders: ['a'],
//                general: [lines], notes: [{ when, text }] }]
//   choices      things to choose between (parent functions, say):
//                [{ id, label, group, rows: { f: 'f(x) = x^2' },
//                   notes: { a: [{ when, text }, …] }, marks: […] }]
//   toggles      [{ id, label, rows: [ids], marks: true, on }] switches
//                that show and hide rows or marks
//   marks        teaching marks on the graph, placed by the sliders:
//                [{ type: 'point', x: 'h', y: 'k', label, when }];
//                repeat: { index: 'j', count: 'n' } makes one per j
//   derived      quantities worked out from the sliders, in order:
//                [{ name: 'dx', value: '(b - a) / n' }, { name, sum, index,
//                count }, { name, integral: 'f', from, to }]
//   readouts     [{ tex, value, decimals }] numbers shown on the graph
//   about        { label, lines } a second page of text beside the explanation
// A section may carry `constants` ({ p: 0 }) for the rules to use; a
// choice may carry its own `view`.
//
// Texts: $…$ is math, **…** is bold, a line starting with "- " is a list
// item, {{…}} is a value worked out from the sliders. A rule (`when`) is
// a piece of math such as 'a < 0'; in a list of cases the first true one
// is used. Rules, values and marks are read by the engine (concept.js):
// like every shell this one holds no math.

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import Graph from '../graph/Graph.jsx';
import GraphToolbar, { toolbarButtonStyle } from './parts/GraphToolbar.jsx';
import FullscreenFrame, { useFullscreen } from './parts/FullscreenFrame.jsx';
import ExportModal from './parts/ExportModal.jsx';
import MathText, { Tex } from './parts/MathText.jsx';
import { createScene, compileScene, sliderRange, rowToTex, scanDefinitions, conceptText, conceptCase, conceptMarks, conceptNumber, conceptScope } from '../engine/index.js';
import { getTheme } from '../themes/themes.js';

const LOOK = {
  navy: '#06357A', blue: '#2563EB', amber: '#B45309', text: '#1e293b', muted: '#64748b', faint: '#94a3b8',
  border: '#e2e8f0', soft: '#f8fafc', tint: '#eff6ff', white: '#ffffff',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};
const SPEEDS = [0.5, 1, 2, 4];
const STILL = { dragPoints: false, select: false };
const NO_SPECIALS = { specialPoints: 'none' };
const TOOLBAR = { zoom: true, home: true, equalScale: false, grid: false, axes: false, theme: false, fullscreen: true, export: true };

// ---------- text with math, bold and lists ----------
function Inline({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => (
    part.startsWith('**') && part.endsWith('**') && part.length > 4
      ? <strong key={i} style={{ color: LOOK.navy }}><MathText text={part.slice(2, -2)} /></strong>
      : <MathText key={i} text={part} />
  ));
}
function RichText({ lines }) {
  const blocks = [];
  for (const line of lines) {
    if (!line) continue;
    if (line.startsWith('### ')) blocks.push({ h: line.slice(4) });
    else if (line.startsWith('- ')) {
      const last = blocks[blocks.length - 1];
      if (last && last.list) last.list.push(line.slice(2)); else blocks.push({ list: [line.slice(2)] });
    } else blocks.push({ p: line });
  }
  return blocks.map((b, i) => (b.h
    ? <Heading key={i}>{b.h}</Heading>
    : b.list
    ? <ul key={i} style={{ margin: '4px 0 8px', paddingLeft: 20 }}>{b.list.map((t, j) => <li key={j} style={{ margin: '3px 0' }}><Inline text={t} /></li>)}</ul>
    : <p key={i} style={{ margin: '0 0 8px' }}><Inline text={b.p} /></p>));
}
const Heading = ({ children }) => (
  <div style={{ margin: '14px 0 6px', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: LOOK.muted }}>{children}</div>
);

function roundTo(v, step) {
  if (!(step > 0)) return Number(v.toFixed(4));
  return Number((Math.round(v / step) * step).toFixed(6));
}

export default function ConceptShell(props) {
  const { concept, height = 640, style } = props;
  const theme = useMemo(() => getTheme('lesson'), []);
  const ui = theme.ui;
  const fs = useFullscreen();
  const graphRef = useRef(null);

  const base = useMemo(() => createScene(concept.scene), [concept]);
  const sliderNames = useMemo(() => Object.keys(concept.sliders || {}), [concept]);
  // limits of each slider, from its row in the scene
  const ranges = useMemo(() => {
    const info = compileScene(base).rows;
    const out = {};
    for (const e of base.expressions) {
      const r = info[e.id];
      if (r && r.kind === 'slider' && sliderNames.includes(r.name)) out[r.name] = { ...sliderRange(e), rowId: e.id, start: r.value };
    }
    return out;
  }, [base, sliderNames]);
  const startOf = useCallback(n => {
    const s = concept.sliders[n];
    return s && s.default !== undefined ? s.default : ranges[n] ? ranges[n].start : 0;
  }, [concept, ranges]);

  const choices = concept.choices || [];
  const sections = concept.sections || [];
  const [choiceId, setChoiceId] = useState(concept.startChoice || (choices[0] && choices[0].id) || null);
  const [sectionId, setSectionId] = useState(sections[0] ? sections[0].id : null);
  const [values, setValues] = useState(() => Object.fromEntries(sliderNames.map(n => [n, startOf(n)])));
  const [toggles, setToggles] = useState(() => Object.fromEntries((concept.toggles || []).map(t => [t.id, t.on !== false])));
  const [playing, setPlaying] = useState({});
  const [speed, setSpeed] = useState(1);
  const [view, setView] = useState(base.view);
  const [exportOpen, setExportOpen] = useState(false);
  const [page, setPage] = useState('explanation');     // or 'about'

  const choice = choices.find(c => c.id === choiceId) || null;
  const section = sections.find(s => s.id === sectionId) || sections[0] || null;
  const shownSliders = section ? section.sliders || [] : sliderNames;

  // ---------- the scene the graph draws ----------
  const expressions = useMemo(() => {
    const hiddenRows = new Set();
    for (const t of concept.toggles || []) if (!toggles[t.id]) for (const id of t.rows || []) hiddenRows.add(id);
    const rowOf = {};
    for (const n of sliderNames) if (ranges[n]) rowOf[ranges[n].rowId] = n;
    return base.expressions.map(e => {
      let row = e;
      if (rowOf[e.id]) row = { ...row, text: `${rowOf[e.id]} = ${conceptNumber(values[rowOf[e.id]], 6)}` };
      if (choice && choice.rows && choice.rows[e.id] !== undefined) row = { ...row, text: choice.rows[e.id] };
      if (hiddenRows.has(e.id)) row = { ...row, hidden: true };
      return row;
    });
  }, [base, concept, toggles, sliderNames, ranges, values, choice]);
  const doc = useMemo(() => ({ ...base, expressions, view }), [base, expressions, view]);
  const onSceneChange = useCallback(next => setView(next.view), []);

  // everything the rules and sentences can use: sliders, the tab's own
  // numbers, the functions of the scene, the worked-out quantities
  const functions = useMemo(() => compileScene({ ...base, expressions }).F, [base, expressions]);
  const scope = useMemo(
    () => conceptScope({ values, constants: section && section.constants, functions, derived: concept.derived }),
    [values, section, functions, concept]
  );

  // a choice may bring its own view
  const pickChoice = useCallback(id => {
    setChoiceId(id);
    const c = choices.find(x => x.id === id);
    if (c && c.view) setView(v => ({ ...v, ...c.view }));
  }, [choices]);

  // ---------- teaching marks ----------
  const marksOn = (concept.toggles || []).every(t => !t.marks || toggles[t.id]);
  const marks = useMemo(() => {
    if (!marksOn) return [];
    return conceptMarks([...(concept.marks || []), ...((choice && choice.marks) || [])], scope)
      .map(m => ({ color: LOOK.amber, width: m.type === 'point' ? 2 : 1.25, ...m }));
  }, [marksOn, concept, choice, scope]);

  // ---------- legend ----------
  const legend = useMemo(() => {
    const names = scanDefinitions(doc.expressions.map(e => e.text));
    const list = concept.legend || doc.expressions.filter(e => e.lock !== 'hidden-row').map(e => ({ row: e.id }));
    return list.map(item => {
      const row = doc.expressions.find(e => e.id === item.row);
      if (!row || row.hidden) return null;
      return { id: row.id, color: row.color || LOOK.blue, dashed: !!row.dashed, tex: item.tex || rowToTex(row.text, names) };
    }).filter(Boolean);
  }, [doc, concept]);

  // ---------- sliders: set, reset, play ----------
  const raw = useRef({});          // the unrounded place of a playing slider
  const direction = useRef({});
  const setValue = useCallback((n, v) => {
    raw.current[n] = v;
    setValues(prev => (prev[n] === v ? prev : { ...prev, [n]: v }));
  }, []);
  const resetShown = useCallback(() => {
    setPlaying({});
    setValues(prev => { const next = { ...prev }; for (const n of shownSliders) { next[n] = startOf(n); raw.current[n] = next[n]; } return next; });
  }, [shownSliders, startOf]);

  const anyPlaying = sliderNames.some(n => playing[n]);
  useEffect(() => {
    if (!anyPlaying) return undefined;
    let frame = 0, last = performance.now();
    const tick = now => {
      const dt = Math.min(0.1, (now - last) / 1000); last = now;
      setValues(prev => {
        let next = prev;
        for (const n of sliderNames) {
          if (!playing[n] || !ranges[n]) continue;
          const { min, max, step } = ranges[n];
          const seconds = (concept.sliders[n] && concept.sliders[n].seconds) || 6;
          let v = (raw.current[n] !== undefined ? raw.current[n] : prev[n]) + (direction.current[n] ?? 1) * (max - min) * dt * speed / seconds;
          if (v >= max) { v = max; direction.current[n] = -1; }
          else if (v <= min) { v = min; direction.current[n] = 1; }
          raw.current[n] = v;
          const shown = roundTo(v, step);
          if (shown !== prev[n]) { if (next === prev) next = { ...prev }; next[n] = shown; }
        }
        return next;
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [anyPlaying, playing, speed, sliderNames, ranges, concept]);

  // leaving a tab stops the sliders that are no longer shown
  useEffect(() => {
    setPlaying(p => { const next = {}; for (const n of shownSliders) if (p[n]) next[n] = true; return Object.keys(next).length === Object.keys(p).length ? p : next; });
  }, [sectionId]); // eslint-disable-line react-hooks/exhaustive-deps

  // ---------- the explanation for the state shown ----------
  const choiceName = choice ? choice.label : '';
  const idle = text => (text || '').replace('{choice}', choiceName);
  const ownSection = n => sections.find(s => (s.sliders || []).length === 1 && s.sliders[0] === n);
  const applied = useMemo(() => {
    if (!section) return [];
    const out = [];
    const noteFor = n => (choice && choice.notes && choice.notes[n] ? conceptCase(choice.notes[n], scope) : null);
    if (!choice || !choice.notes) {
      // a tool whose choices say nothing per slider: only the tab's own notes below
    } else if (shownSliders.length === 1) {
      const n = shownSliders[0];
      out.push({ text: noteFor(n) || idle(concept.idleText) });
    } else if (shownSliders.length > 1) {
      const moved = shownSliders.filter(n => values[n] !== startOf(n));
      if (!moved.length) out.push({ text: idle(concept.idleTextAll || concept.idleText) });
      for (const n of moved) {
        const own = ownSection(n);
        out.push({ title: own ? own.title : (concept.sliders[n] && concept.sliders[n].label) || n, value: `${n} = ${conceptNumber(values[n])}`, text: noteFor(n) || '' });
      }
    }
    for (const rule of section.notes || []) {
      const t = conceptCase([rule], scope);
      if (t) out.push({ text: t });
    }
    return out.filter(o => o.text || o.title);
  }, [section, shownSliders, choice, values, scope, concept, startOf]); // eslint-disable-line react-hooks/exhaustive-deps
  const appliedHeading = concept.appliedHeading
    ? concept.appliedHeading.replace('{choice}', choiceName)
    : choiceName ? `Applied to ${choiceName.toLowerCase()}` : 'Now';

  const full = fs.isFull;
  const btn = on => toolbarButtonStyle(ui, on);
  const groups = [...new Set(choices.map(c => c.group || ''))];

  return (
    <FullscreenFrame fs={fs} theme="lesson">
      <div className={full ? 'gs-concept gs-concept-full' : 'gs-concept'}
        style={{ height: full ? '100%' : height, fontFamily: LOOK.font, color: LOOK.text, background: LOOK.white, border: full ? 'none' : `1px solid ${LOOK.border}`, borderRadius: full ? 0 : 10, ...(style || {}) }}>

        {/* ---------- top: name, the choice, graph controls ---------- */}
        <div className="gs-concept-top" style={{ borderBottom: `1px solid ${LOOK.border}`, background: LOOK.soft }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: LOOK.navy, whiteSpace: 'nowrap' }}>{concept.title}</div>
          {choices.length > 0 && (
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: LOOK.muted, margin: 0 }}>
              {concept.choiceLabel || 'Example'}
              <select value={choiceId || ''} onChange={ev => pickChoice(ev.target.value)}
                style={{ padding: '5px 8px', fontSize: 13, fontFamily: LOOK.font, color: LOOK.text, background: LOOK.white, border: `1px solid ${LOOK.border}`, borderRadius: 6 }}>
                {groups.map(g => (g
                  ? <optgroup key={g} label={g}>{choices.filter(c => c.group === g).map(c => <option key={c.id} value={c.id}>{c.label}</option>)}</optgroup>
                  : choices.filter(c => !c.group).map(c => <option key={c.id} value={c.id}>{c.label}</option>)))}
              </select>
            </label>
          )}
          <GraphToolbar graphRef={graphRef} scene={doc} onSceneChange={onSceneChange} homeView={base.view} theme="lesson"
            controls={TOOLBAR} fullscreen={fs} onExport={() => setExportOpen(true)}
            style={{ marginLeft: 'auto', padding: 0, border: 'none', background: 'none', flexWrap: 'nowrap' }} />
        </div>

        <div className="gs-concept-body">
          {/* ---------- the graph ---------- */}
          <div className="gs-concept-graph" style={{ position: 'relative', minWidth: 0, minHeight: 0, background: theme.background }}>
            <Graph ref={graphRef} scene={doc} onSceneChange={onSceneChange} theme="lesson"
              annotations={marks} overlays={NO_SPECIALS} interaction={STILL}
              ariaLabel={`${concept.title}${choiceName ? ': ' + choiceName : ''}`}
              style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }} />

            <div style={{ position: 'absolute', left: 10, top: 10, maxWidth: 'calc(100% - 20px)', padding: '7px 10px', background: 'rgba(255, 255, 255, 0.95)', border: `1px solid ${LOOK.border}`, borderRadius: 6, fontSize: 13, display: 'grid', gap: 5, pointerEvents: 'none' }}>
              {legend.map(row => (
                <div key={row.id} style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', overflow: 'hidden' }}>
                  <span style={{ width: 18, height: 0, borderTop: `2px ${row.dashed ? 'dashed' : 'solid'} ${row.color}`, flexShrink: 0 }} />
                  <Tex tex={row.tex} />
                </div>
              ))}
            </div>

            {/* the values now applied */}
            <div style={{ position: 'absolute', left: 10, bottom: 10, right: 10, display: 'flex', flexWrap: 'wrap', gap: 6, pointerEvents: 'none' }}>
              {sliderNames.map(n => {
                const moved = values[n] !== startOf(n);
                return (
                  <span key={n} style={{ padding: '2px 9px', fontSize: 12.5, borderRadius: 999, background: moved ? LOOK.blue : 'rgba(255, 255, 255, 0.95)', color: moved ? LOOK.white : LOOK.muted, border: `1px solid ${moved ? LOOK.blue : LOOK.border}` }}>
                    <Tex tex={`${n} = ${conceptNumber(values[n])}`} />
                  </span>
                );
              })}
              {(concept.readouts || []).map((r, i) => (
                <span key={'r' + i} style={{ padding: '2px 9px', fontSize: 12.5, borderRadius: 999, background: '#fff7ed', color: LOOK.amber, border: '1px solid #fed7aa' }}>
                  <Tex tex={`${r.tex} = ${conceptText(`{{${r.value} | ${r.decimals === undefined ? 4 : r.decimals}}}`, scope).replace('—', '\\text{—}')}`} />
                </span>
              ))}
            </div>
          </div>

          {/* ---------- right: explanation above, controls below ---------- */}
          <div className="gs-concept-side" style={{ borderLeft: `1px solid ${LOOK.border}`, display: 'flex', flexDirection: 'column', minWidth: 0, minHeight: 0 }}>
            {section && (
              <div className="gs-concept-text" aria-live="polite" style={{ flex: '1 1 0', minHeight: 0, overflowY: 'auto', padding: '14px 16px', fontSize: 14, lineHeight: 1.55 }}>
                {concept.about && (
                  <div role="tablist" aria-label="What to read" style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
                    {[['explanation', 'Explanation'], ['about', concept.about.label || 'About']].map(([id, label]) => (
                      <button key={id} type="button" role="tab" aria-selected={page === id} onClick={() => setPage(id)}
                        style={{ padding: '4px 12px', fontSize: 12.5, fontWeight: 600, fontFamily: LOOK.font, borderRadius: 999, cursor: 'pointer', border: `1px solid ${page === id ? LOOK.navy : LOOK.border}`, background: page === id ? LOOK.navy : LOOK.white, color: page === id ? LOOK.white : LOOK.muted }}>
                        {label}
                      </button>
                    ))}
                  </div>
                )}
                {concept.about && page === 'about' && <RichText lines={concept.about.lines} />}
                {!(concept.about && page === 'about') && (<>
                <div style={{ fontSize: 17, fontWeight: 700, color: LOOK.navy }}>{section.title}{choiceName ? <span style={{ fontWeight: 400, color: LOOK.muted }}> · {choiceName}</span> : null}</div>
                {section.formula && <div style={{ margin: '8px 0 4px', padding: '8px 10px', background: LOOK.tint, borderRadius: 6, textAlign: 'center', fontSize: 14, overflowX: 'auto', overflowY: 'hidden' }}><Tex tex={`\\displaystyle ${section.formula}`} /></div>}
                {section.general && section.general.length > 0 && (
                  <>
                    <Heading>General</Heading>
                    <RichText lines={section.general.map(l => conceptText(l, scope))} />
                  </>
                )}
                {applied.length > 0 && (
                  <>
                    <Heading>{appliedHeading}</Heading>
                    {applied.map((o, i) => (
                      <div key={i} style={{ margin: '0 0 8px' }}>
                        {o.title && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                            <strong style={{ color: LOOK.navy }}>{o.title}</strong>
                            <span style={{ padding: '0 7px', fontSize: 12.5, borderRadius: 999, background: LOOK.tint, color: LOOK.navy }}><Tex tex={o.value} /></span>
                          </div>
                        )}
                        {o.text && <RichText lines={o.text.split('\n')} />}
                      </div>
                    ))}
                  </>
                )}
                </>)}
              </div>
            )}

            <div className="gs-concept-controls" style={{ borderTop: `1px solid ${LOOK.border}`, background: LOOK.soft, padding: '10px 12px 12px' }}>
              {sections.length > 1 && (
                <div role="tablist" aria-label="What to change" style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 10 }}>
                  {sections.map(s => {
                    const on = s.id === (section && section.id);
                    const moved = (s.sliders || []).length === 1 && values[s.sliders[0]] !== startOf(s.sliders[0]);
                    return (
                      <button key={s.id} type="button" role="tab" aria-selected={on} title={s.hint || s.title} onClick={() => setSectionId(s.id)}
                        style={{ position: 'relative', flex: '1 1 auto', padding: '6px 10px', fontSize: 12.5, fontWeight: 600, fontFamily: LOOK.font, borderRadius: 6, cursor: 'pointer', border: `1px solid ${on ? LOOK.blue : LOOK.border}`, background: on ? LOOK.blue : LOOK.white, color: on ? LOOK.white : LOOK.text }}>
                        {s.label}
                        {moved && <span aria-label="changed" style={{ position: 'absolute', right: 4, top: 4, width: 6, height: 6, borderRadius: '50%', background: on ? LOOK.white : LOOK.amber }} />}
                      </button>
                    );
                  })}
                </div>
              )}

              {shownSliders.map(n => {
                const r = ranges[n];
                if (!r) return null;
                const def = concept.sliders[n] || {};
                const on = !!playing[n];
                return (
                  <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '6px 0' }}>
                    <button type="button" onClick={() => setPlaying(p => ({ ...p, [n]: !p[n] }))} title={on ? 'Pause' : 'Play'} aria-label={on ? `Pause ${n}` : `Play ${n}`} aria-pressed={on}
                      style={{ width: 26, height: 26, minWidth: 0, padding: 0, flexShrink: 0, borderRadius: '50%', fontSize: 10, lineHeight: 1, cursor: 'pointer', border: `1px solid ${on ? LOOK.blue : '#cbd5e1'}`, background: on ? LOOK.blue : LOOK.white, color: on ? LOOK.white : LOOK.muted }}>
                      {on ? '❚❚' : '▶'}
                    </button>
                    <span style={{ width: 74, flexShrink: 0, fontSize: 14, color: LOOK.navy, whiteSpace: 'nowrap' }}><Tex tex={`${n} = ${conceptNumber(values[n])}`} /></span>
                    <input type="range" aria-label={`${def.label || n} (${n})`} title={def.label || n} min={r.min} max={r.max} step={r.step || 'any'} value={values[n]}
                      onChange={ev => { setPlaying(p => (p[n] ? { ...p, [n]: false } : p)); setValue(n, roundTo(+ev.target.value, r.step)); }}
                      style={{ flex: 1, minWidth: 60, margin: 0, accentColor: LOOK.blue, cursor: 'pointer' }} />
                  </div>
                );
              })}

              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                <span style={{ fontSize: 11.5, color: LOOK.muted }}>Speed</span>
                {SPEEDS.map(s => (
                  <button key={s} type="button" onClick={() => setSpeed(s)} aria-pressed={speed === s}
                    style={{ padding: '2px 7px', minWidth: 0, fontSize: 11.5, fontFamily: LOOK.font, borderRadius: 5, cursor: 'pointer', border: `1px solid ${speed === s ? LOOK.blue : LOOK.border}`, background: speed === s ? LOOK.tint : LOOK.white, color: speed === s ? LOOK.blue : LOOK.muted }}>
                    {s}×
                  </button>
                ))}
                <button type="button" onClick={resetShown} style={{ ...btn(false), marginLeft: 'auto' }} title="Put the sliders shown here back where they started">Reset</button>
              </div>

              {(concept.toggles || []).length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', marginTop: 10, paddingTop: 8, borderTop: `1px solid ${LOOK.border}` }}>
                  {concept.toggles.map(t => (
                    <label key={t.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: LOOK.text, margin: 0, cursor: 'pointer' }}>
                      <input type="checkbox" checked={!!toggles[t.id]} onChange={() => setToggles(p => ({ ...p, [t.id]: !p[t.id] }))} style={{ accentColor: LOOK.blue, margin: 0 }} />
                      {t.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <ExportModal open={exportOpen} onClose={() => setExportOpen(false)} graphRef={graphRef} scene={doc} fileName={concept.id || 'concept'} theme="lesson" />

        <style jsx>{`
          .gs-concept {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            grid-template-columns: minmax(0, 1fr);
            overflow: hidden;
            box-sizing: border-box;
          }
          .gs-concept-top {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px 16px;
            padding: 8px 12px;
            min-width: 0;
          }
          .gs-concept-body {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 380px;
            min-height: 0;
          }
          @media (max-width: 900px) {
            .gs-concept:not(.gs-concept-full) {
              height: auto !important;
            }
            .gs-concept-body {
              grid-template-columns: minmax(0, 1fr);
              grid-template-rows: 340px auto;
            }
            .gs-concept-side {
              border-left: none !important;
              border-top: 1px solid ${LOOK.border};
            }
            /* the sliders stay next to the graph; the explanation comes after them */
            .gs-concept-controls {
              order: 1;
              border-top: none !important;
              border-bottom: 1px solid ${LOOK.border};
            }
            .gs-concept-text {
              order: 2;
              flex: none !important;
              max-height: none;
            }
          }
        `}</style>
      </div>
    </FullscreenFrame>
  );
}
