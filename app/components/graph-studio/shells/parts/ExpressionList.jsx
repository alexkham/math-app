// Graph Studio — shell part: the expression list
//
// The editable list of rows beside a graph. It edits the scene document
// and nothing else: every change goes out through onSceneChange as a new
// document. Shells that need a list (calculator, lab) reuse this part.
//
//   <ExpressionList scene={doc} onSceneChange={setDoc}
//                   selectedId={id} onSelect={setId} theme="default"
//                   reorder colors />
//
// Per row:
//   • a tinted strip on the left with the row number (drag it to move
//     the row when `reorder` is on) and the colour dot (click to hide
//     or show; when `colors` is on, right-click it to choose a colour)
//   • the expression, typeset; a click turns it into the math editor
//     (MathInput), or into a plain text box with input="text"
//   • a value on the right for calculations and computed constants
//   • for a slider row: play, lower limit, the slider, upper limit
//   • for a parametric or polar row: the parameter range
//   • an error line, with an "add slider" button for an unknown letter
// Rows marked lock: 'readonly' cannot be edited; rows marked
// lock: 'hidden-row' are drawn but not listed.

import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { ensureScene, compileScene, setVariables, sliderRange, newRowId, fmtNum, scanDefinitions, rowToTex } from '../../engine/index.js';
import { getTheme, rowColor } from '../../themes/themes.js';
import { Tex } from './MathText.jsx';
import MathInput from './MathInput.jsx';

const SPEEDS = [0.5, 1, 2, 4];
const SECONDS_PER_SWEEP = 4;   // one pass over a slider's range at 1×

// row kinds that put something on the graph
const DRAWN = new Set(['curve', 'implicit', 'region', 'parametric', 'polar', 'function', 'point']);

function fmtValue(v) {
  if (typeof v !== 'number') return String(v);
  if (!Number.isFinite(v)) return Number.isNaN(v) ? 'undefined' : fmtNum(v);
  return fmtNum(v, Math.max(Math.abs(v) * 1e-6, 1e-12));   // about six significant digits
}

const SERIF = '"Cambria Math", Cambria, "Times New Roman", serif';
const MONO = 'ui-monospace, Menlo, monospace';

// The look of the list. In the default theme these are the exact values
// of the approved prototype; other themes take the same roles from
// their own colours.
const DEMO_LOOK = {
  surface: '#ffffff', border: '#e2e8f0', selBg: '#f0f6fc', strip: '#f8fafc', selStrip: '#e4eef8', stripBorder: '#eef2f6',
  accent: '#2d70b3', accentText: '#ffffff', num: '#94a3b8', text: '#0f172a', value: '#475569', muted: '#64748b',
  error: '#b45309', control: '#cbd5e1'
};
function lookFromTheme(ui) {
  return {
    surface: ui.surface, border: ui.border, selBg: ui.accentSoft, strip: ui.surfaceAlt, selStrip: ui.accentSoft, stripBorder: ui.border,
    accent: ui.accent, accentText: ui.accentText, num: ui.textMuted, text: ui.text, value: ui.textMuted, muted: ui.textMuted,
    error: ui.error, control: ui.borderStrong
  };
}

export default function ExpressionList(props) {
  const { scene, onSceneChange, selectedId = null, onSelect, theme: themeProp, allowAdd = true, reorder = false, colors = false, input = 'math' } = props;

  const doc = useMemo(() => ensureScene(scene), [scene]);
  const theme = useMemo(() => getTheme(themeProp || doc.settings.theme), [themeProp, doc.settings.theme]);
  const ui = theme.ui;
  const compiled = useMemo(() => compileScene(doc), [doc.expressions]); // eslint-disable-line react-hooks/exhaustive-deps
  const names = useMemo(() => scanDefinitions(doc.expressions.map(e => e.text)), [doc.expressions]);

  const docRef = useRef(doc); docRef.current = doc;
  const compiledRef = useRef(compiled); compiledRef.current = compiled;
  const change = useCallback(next => { if (onSceneChange && next !== docRef.current) { docRef.current = next; onSceneChange(next); } }, [onSceneChange]);

  const [playing, setPlaying] = useState({});          // row id → true
  const [speed, setSpeed] = useState(1);
  const [focusId, setFocusId] = useState(null);
  const [editingId, setEditingId] = useState(null);    // the row shown as a text box
  const [dragId, setDragId] = useState(null);          // row being dragged to a new place
  const [overId, setOverId] = useState(null);          // row it would land before
  const [colorOpenId, setColorOpenId] = useState(null);
  const directions = useRef({});

  const patchRow = (id, patch) => change({ ...docRef.current, expressions: docRef.current.expressions.map(e => (e.id === id ? { ...e, ...patch } : e)) });
  const removeRow = id => change({ ...docRef.current, expressions: docRef.current.expressions.filter(e => e.id !== id) });
  const insertRow = (afterId, text = '', before = false) => {
    const d = docRef.current;
    const row = { id: newRowId(d), text };
    const i = d.expressions.findIndex(e => e.id === afterId);
    const at = i < 0 ? d.expressions.length : before ? i : i + 1;
    const expressions = [...d.expressions];
    expressions.splice(at, 0, row);
    change({ ...d, expressions });
    return row.id;
  };
  // Moves row `id` to just before row `beforeId` (or to the end).
  const moveRow = (id, beforeId) => {
    const d = docRef.current;
    if (id === beforeId) return;
    const row = d.expressions.find(e => e.id === id);
    if (!row) return;
    const rest = d.expressions.filter(e => e.id !== id);
    const at = beforeId === null ? rest.length : rest.findIndex(e => e.id === beforeId);
    rest.splice(at < 0 ? rest.length : at, 0, row);
    change({ ...d, expressions: rest });
  };
  const setSlider = (name, value) => change(setVariables(docRef.current, compiledRef.current, { [name]: value }));

  // Slider animation: driven by elapsed time, never by frame count.
  const anyPlaying = Object.keys(playing).some(id => playing[id]);
  useEffect(() => {
    if (!anyPlaying) return undefined;
    let raf = 0, last = performance.now();
    const tick = now => {
      const dt = Math.min(0.1, (now - last) / 1000); last = now;
      const updates = {};
      for (const e of docRef.current.expressions) {
        if (!playing[e.id]) continue;
        const info = compiledRef.current.rows[e.id];
        if (!info || info.kind !== 'slider') continue;
        const { min, max } = sliderRange(e);
        const dir = directions.current[e.id] ?? 1;
        let v = info.value + dir * (max - min) * (dt / SECONDS_PER_SWEEP) * speed;
        if (v >= max) { v = max; directions.current[e.id] = -1; }
        else if (v <= min) { v = min; directions.current[e.id] = 1; }
        updates[info.name] = v;
      }
      if (Object.keys(updates).length) change(setVariables(docRef.current, compiledRef.current, updates));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [anyPlaying, playing, speed, change]);

  const themeName = themeProp || doc.settings.theme;
  const L = themeName === 'default' ? DEMO_LOOK : lookFromTheme(ui);
  const numberBox = {
    padding: '2px 4px', border: `1px solid ${L.border}`, borderRadius: 4, fontSize: 11,
    fontFamily: MONO, color: L.value, background: L.surface, textAlign: 'center'
  };
  const pill = { fontSize: 11, padding: '2px 8px', border: `1px solid ${L.accent}`, color: L.accent, background: L.surface, borderRadius: 12, cursor: 'pointer' };

  const rows = doc.expressions.map((e, index) => ({ e, index })).filter(({ e }) => e.lock !== 'hidden-row');

  return (
    <div className="gs-list" style={{ fontFamily: ui.font, color: L.text, background: L.surface }}>
      {anyPlaying && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderBottom: `1px solid ${L.border}`, fontSize: 11, color: L.muted, background: L.strip }}>
          <span>Animation speed</span>
          {SPEEDS.map(s => (
            <button key={s} type="button" onClick={() => setSpeed(s)} aria-pressed={s === speed}
              style={{ padding: '2px 8px', borderRadius: 12, cursor: 'pointer', fontSize: 11, border: `1px solid ${s === speed ? L.accent : L.control}`, background: s === speed ? L.accent : L.surface, color: s === speed ? L.accentText : L.value }}>
              {s}×
            </button>
          ))}
        </div>
      )}

      {rows.map(({ e, index }) => {
        const info = compiled.rows[e.id] || { kind: 'empty' };
        const selected = e.id === selectedId;
        const readonly = e.lock === 'readonly';
        const color = rowColor(theme, { color: e.color, index });
        const isError = info.kind === 'error';
        const range = sliderRange(e);
        const hasParam = info.kind === 'parametric' || info.kind === 'polar';
        const drawable = DRAWN.has(info.kind);
        const hasValue = info.kind === 'constant' || info.kind === 'value';
        // A row is shown typeset unless it is being edited or cannot be read yet.
        const tex = rowToTex(e.text, names);
        const showTypeset = !!tex && (readonly || editingId !== e.id);
        const dropHere = reorder && dragId && overId === e.id && dragId !== e.id;
        const isPlaying = !!playing[e.id];

        return (
          <div key={e.id} onMouseDown={() => onSelect && onSelect(e.id)}
            onDragOver={reorder && dragId ? ev => { ev.preventDefault(); if (overId !== e.id) setOverId(e.id); } : undefined}
            onDrop={reorder && dragId ? ev => { ev.preventDefault(); moveRow(dragId, e.id); setDragId(null); setOverId(null); } : undefined}
            style={{ display: 'flex', borderBottom: `1px solid ${L.border}`, background: selected ? L.selBg : L.surface, borderLeft: selected ? `3px solid ${L.accent}` : '3px solid transparent', boxShadow: dropHere ? `inset 0 3px 0 ${L.accent}` : 'none', opacity: dragId === e.id ? 0.45 : 1 }}>

            {/* ---------- left strip: row number and colour dot ---------- */}
            <div style={{ width: 38, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 10, gap: 6, background: selected ? L.selStrip : L.strip, borderRight: `1px solid ${L.stripBorder}` }}>
              <span
                draggable={reorder || undefined}
                onDragStart={reorder ? ev => { ev.dataTransfer.effectAllowed = 'move'; ev.dataTransfer.setData('text/plain', e.id); setDragId(e.id); } : undefined}
                onDragEnd={reorder ? () => { setDragId(null); setOverId(null); } : undefined}
                title={reorder ? 'Drag to move this row' : undefined}
                style={{ fontSize: 10, color: L.num, cursor: reorder ? 'grab' : 'default', userSelect: 'none' }}>
                {index + 1}
              </span>
              {drawable && (
                <button type="button"
                  title={e.hidden ? 'Show' : 'Hide'} aria-label={e.hidden ? 'Show this row' : 'Hide this row'} aria-pressed={!e.hidden}
                  onClick={ev => { ev.stopPropagation(); patchRow(e.id, { hidden: !e.hidden }); }}
                  onContextMenu={colors && !readonly ? ev => { ev.preventDefault(); setColorOpenId(id => (id === e.id ? null : e.id)); } : undefined}
                  style={{ width: 18, height: 18, minWidth: 0, minHeight: 0, boxSizing: 'border-box', borderRadius: '50%', border: `2px solid ${color}`, background: e.hidden ? L.surface : color, cursor: 'pointer', padding: 0 }} />
              )}
            </div>

            {/* ---------- the row itself ---------- */}
            <div style={{ flex: 1, padding: '8px 10px', minWidth: 0 }}>
              {colors && colorOpenId === e.id && (
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                  {theme.palette.map(c => (
                    <button key={c} type="button" aria-label={`Colour ${c}`} title={c}
                      onClick={() => { patchRow(e.id, { color: c }); setColorOpenId(null); }}
                      style={{ width: 18, height: 18, borderRadius: '50%', padding: 0, cursor: 'pointer', background: c, border: `2px solid ${L.surface}`, boxShadow: `0 0 0 ${e.color === c ? 2 : 1}px ${e.color === c ? L.text : L.control}` }} />
                  ))}
                  <button type="button" onClick={() => { patchRow(e.id, { color: undefined }); setColorOpenId(null); }} style={{ ...pill, borderColor: L.control, color: L.value }}>
                    by theme
                  </button>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {showTypeset ? (
                  // typeset form; a click (or Tab) turns it into the text box
                  <div
                    role={readonly ? undefined : 'button'} tabIndex={readonly ? undefined : 0}
                    aria-label={`Expression ${index + 1}: ${e.text}${readonly ? '' : '. Press to edit.'}`}
                    onClick={readonly ? undefined : () => { setEditingId(e.id); setFocusId(e.id); }}
                    onFocus={readonly ? undefined : () => { setEditingId(e.id); setFocusId(e.id); }}
                    style={{ flex: 1, minWidth: 0, minHeight: 26, display: 'flex', alignItems: 'center', overflowX: 'auto', overflowY: 'hidden', fontSize: 13, color: readonly ? L.muted : L.text, cursor: readonly ? 'default' : 'text', outline: 'none' }}>
                    <Tex tex={`\\displaystyle ${tex}`} />
                  </div>
                ) : input === 'math' && editingId === e.id && !readonly ? (
                  // the math editor: fractions, powers and roots are typed as they are written
                  <MathInput
                    value={e.text} names={names} autoFocus fontSize={16} color={L.text} accent={L.accent}
                    ariaLabel={`Expression ${index + 1}`} placeholder="type an expression"
                    onChange={text => patchRow(e.id, { text })}
                    onFocus={() => { if (onSelect) onSelect(e.id); }}
                    onBlur={() => setEditingId(cur => (cur === e.id ? null : cur))}
                    onEnter={allowAdd ? () => { const id = insertRow(e.id); setEditingId(id); setFocusId(id); if (onSelect) onSelect(id); } : undefined}
                    onEscape={() => setEditingId(cur => (cur === e.id ? null : cur))}
                    style={{ minHeight: 26, display: 'flex', alignItems: 'center' }}
                  />
                ) : input === 'math' ? (
                  // an empty row, or one that cannot be read yet: a click opens the editor
                  <div
                    role={readonly ? undefined : 'button'} tabIndex={readonly ? undefined : 0}
                    aria-label={`Expression ${index + 1}${e.text ? ': ' + e.text : ', empty'}${readonly ? '' : '. Press to edit.'}`}
                    onClick={readonly ? undefined : () => { setEditingId(e.id); setFocusId(e.id); }}
                    onFocus={readonly ? undefined : () => { setEditingId(e.id); setFocusId(e.id); }}
                    style={{ flex: 1, minWidth: 0, minHeight: 26, display: 'flex', alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: 15, fontFamily: SERIF, color: e.text ? L.text : L.num, cursor: readonly ? 'default' : 'text', outline: 'none' }}>
                    {e.text || 'type an expression'}
                  </div>
                ) : (
                  <input
                    type="text" value={e.text} readOnly={readonly} spellCheck={false} autoComplete="off" autoCapitalize="off"
                    aria-label={`Expression ${index + 1}`} placeholder="type an expression"
                    ref={el => { if (el && focusId === e.id) { el.focus(); setFocusId(null); } }}
                    onChange={ev => patchRow(e.id, { text: ev.target.value })}
                    onFocus={() => { setEditingId(e.id); if (onSelect) onSelect(e.id); }}
                    onBlur={() => setEditingId(cur => (cur === e.id ? null : cur))}
                    onKeyDown={ev => {
                      if (ev.key === 'Enter' && allowAdd) { ev.preventDefault(); const id = insertRow(e.id); setEditingId(id); setFocusId(id); if (onSelect) onSelect(id); }
                      else if (ev.key === 'Escape') ev.currentTarget.blur();
                    }}
                    style={{ flex: 1, minWidth: 0, height: 26, boxSizing: 'border-box', border: 'none', outline: 'none', boxShadow: 'none', fontSize: 15, fontFamily: SERIF, color: L.text, background: 'transparent', padding: '4px 0', margin: 0 }}
                  />
                )}
                {hasValue && (
                  <span style={{ fontSize: 13, color: L.value, fontFamily: MONO, whiteSpace: 'nowrap' }}>
                    = {fmtValue(info.value)}
                  </span>
                )}
                {!readonly && (
                  <button type="button" title="Delete" aria-label="Delete this row" onClick={ev => { ev.stopPropagation(); removeRow(e.id); }}
                    style={{ border: 'none', background: 'none', color: L.num, cursor: 'pointer', fontSize: 16, lineHeight: 1.2, padding: '0 2px' }}>×</button>
                )}
              </div>

              {isError && (
                <div role="alert" style={{ marginTop: 4, fontSize: 12, color: L.error, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6 }}>
                  <span>⚠ {info.error}</span>
                  {(info.missing || []).filter(n => /^[A-Za-z](_[A-Za-z0-9]+)?$/.test(n)).map(n => (
                    <button key={n} type="button" onClick={ev => { ev.stopPropagation(); insertRow(e.id, `${n} = 1`, true); }} style={pill}>
                      add slider: {n}
                    </button>
                  ))}
                </div>
              )}

              {info.kind === 'slider' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                  <button type="button" title={isPlaying ? 'Pause' : 'Animate'} aria-label={isPlaying ? 'Pause' : 'Animate'} aria-pressed={isPlaying}
                    onClick={() => setPlaying(p => ({ ...p, [e.id]: !p[e.id] }))}
                    style={{ width: 24, height: 24, minWidth: 0, boxSizing: 'border-box', borderRadius: '50%', border: `1px solid ${L.control}`, background: isPlaying ? L.accent : L.surface, color: isPlaying ? L.accentText : L.value, cursor: 'pointer', fontSize: 10, lineHeight: 1, padding: 0, flexShrink: 0 }}>
                    {isPlaying ? '❚❚' : '▶'}
                  </button>
                  <input type="number" aria-label="Slider lower limit" value={range.min} style={{ ...numberBox, width: 46 }}
                    onChange={ev => patchRow(e.id, { slider: { ...range, min: +ev.target.value } })} />
                  <input type="range" aria-label={`Value of ${info.name}`} min={range.min} max={range.max} step={range.step || 'any'}
                    value={Number.isFinite(info.value) ? info.value : 0}
                    onChange={ev => setSlider(info.name, +ev.target.value)}
                    style={{ flex: 1, minWidth: 60, accentColor: L.accent, margin: 0 }} />
                  <input type="number" aria-label="Slider upper limit" value={range.max} style={{ ...numberBox, width: 46 }}
                    onChange={ev => patchRow(e.id, { slider: { ...range, max: +ev.target.value } })} />
                </div>
              )}

              {hasParam && (
                <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: L.muted }}>
                  <input type="number" step="any" aria-label="Parameter from" value={+info.t0.toFixed(4)} style={{ ...numberBox, width: 52 }}
                    onChange={ev => patchRow(e.id, { param: { min: +ev.target.value, max: info.t1 } })} />
                  <Tex tex={info.kind === 'polar' ? '\\le \\theta \\le' : '\\le t \\le'} />
                  <input type="number" step="any" aria-label="Parameter to" value={+info.t1.toFixed(4)} style={{ ...numberBox, width: 52 }}
                    onChange={ev => patchRow(e.id, { param: { min: info.t0, max: +ev.target.value } })} />
                </div>
              )}

              {info.kind === 'point' && info.draggable && (
                <div style={{ marginTop: 4, fontSize: 11, color: L.muted }}>drag the point on the graph</div>
              )}
            </div>
          </div>
        );
      })}

      {allowAdd && (
        <button type="button" onClick={() => { const id = insertRow(null); setEditingId(id); setFocusId(id); if (onSelect) onSelect(id); }}
          style={{ width: '100%', padding: 12, border: 'none', background: 'none', color: L.accent, fontSize: 13, cursor: 'pointer', textAlign: 'left', fontWeight: 600, fontFamily: ui.font }}>
          + add expression
        </button>
      )}
    </div>
  );
}
