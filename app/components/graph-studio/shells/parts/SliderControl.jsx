// Graph Studio — shell part: one slider with its controls
//
// Play button, lower limit, the slider, upper limit — the same row as
// under a slider row of the expression list, for shells that show
// sliders somewhere else (the Explorer's parameter strip).
//
//   <SliderControl value={2} min={-5} max={5} playing={false}
//                  onChange={v => …} onRange={({ min, max }) => …} onPlay={() => …}
//                  label="a" />
//
// It only shows and reports; animation is run by the shell.

import React from 'react';

const MONO = 'ui-monospace, Menlo, monospace';
const DEFAULT_LOOK = { accent: '#2d70b3', accentText: '#ffffff', border: '#e2e8f0', control: '#cbd5e1', value: '#475569', surface: '#ffffff' };

export default function SliderControl(props) {
  const { value, min, max, step = 0, playing = false, onChange, onRange, onPlay, label = 'value', look: lookProp, style } = props;
  const L = { ...DEFAULT_LOOK, ...(lookProp || {}) };
  const numberBox = {
    width: 46, padding: '2px 4px', border: `1px solid ${L.border}`, borderRadius: 4, fontSize: 11,
    fontFamily: MONO, color: L.value, background: L.surface, textAlign: 'center'
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, ...(style || {}) }}>
      {onPlay && (
        <button type="button" title={playing ? 'Pause' : 'Animate'} aria-label={playing ? `Pause ${label}` : `Animate ${label}`} aria-pressed={playing}
          onClick={onPlay}
          style={{ width: 24, height: 24, minWidth: 0, boxSizing: 'border-box', borderRadius: '50%', border: `1px solid ${L.control}`, background: playing ? L.accent : L.surface, color: playing ? L.accentText : L.value, cursor: 'pointer', fontSize: 10, lineHeight: 1, padding: 0, flexShrink: 0 }}>
          {playing ? '❚❚' : '▶'}
        </button>
      )}
      <input type="number" aria-label={`Lower limit of ${label}`} value={min} style={numberBox}
        onChange={ev => onRange && Number.isFinite(+ev.target.value) && onRange({ min: +ev.target.value, max })} />
      <input type="range" aria-label={`Value of ${label}`} min={min} max={max} step={step || 'any'}
        value={Number.isFinite(value) ? value : 0}
        onChange={ev => onChange && onChange(+ev.target.value)}
        style={{ flex: 1, minWidth: 60, accentColor: L.accent, margin: 0 }} />
      <input type="number" aria-label={`Upper limit of ${label}`} value={max} style={numberBox}
        onChange={ev => onRange && Number.isFinite(+ev.target.value) && onRange({ min, max: +ev.target.value })} />
    </div>
  );
}
