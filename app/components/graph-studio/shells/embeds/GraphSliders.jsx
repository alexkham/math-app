// Graph Studio — lesson embed, type 3: the graph with sliders
//
// A figure whose scene has slider rows ('a = 2'). The sliders sit under
// the graph; the reader moves them and the graph follows. The graph
// itself stays put (no moving, no zooming), so the page scrolls as usual.
//
//   <GraphSliders picture={wave} caption="$y = a \\sin(bx)$" calculatorHref="/…" />
//
// It loads as a picture. The engine is fetched when the figure comes
// near the screen (or at the first touch of a slider) and the picture is
// replaced by the live graph once a slider has been moved.
//
// Props: those of GraphPicture, plus
//   only         names of the sliders to show, e.g. ['a'] (default: all)
//   resetLabel   text of the reset button (default 'Reset')
//
// This file must stay light: the live part is in LiveSliderGraph.jsx and
// is loaded on demand.

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import katex from 'katex';
import { FIGURE_LOOK, PictureFrame, FigureCaption } from './GraphPicture.jsx';

function decimalsFor(s) {
  if (s.step > 0) return Math.min(6, Math.max(0, Math.ceil(-Math.log10(s.step) - 1e-9)));
  return Math.max(0, 2 - Math.floor(Math.log10(Math.max(s.max - s.min, 1e-9))));
}
function stepFor(s) {
  return s.step > 0 ? s.step : Math.pow(10, -decimalsFor(s));
}
function tex(source) {
  try { return katex.renderToString(source, { throwOnError: false, strict: 'ignore' }); } catch { return null; }
}

export default function GraphSliders(props) {
  const { picture, caption, calculatorHref, explorerHref, maxWidth, align = 'center', only, resetLabel = 'Reset', style } = props;
  const figureRef = useRef(null);
  const [values, setValues] = useState(null);         // null = as the author set them
  const [live, setLive] = useState(null);             // the loaded module
  const asked = useRef(false);

  const sliders = useMemo(() => {
    const all = (picture && picture.sliders) || [];
    return only ? all.filter(s => only.includes(s.name)) : all;
  }, [picture, only]);

  const load = useCallback(() => {
    if (asked.current) return;
    asked.current = true;
    import('./LiveSliderGraph.jsx').then(mod => setLive(mod)).catch(() => { asked.current = false; });
  }, []);

  // fetch the engine a little before the figure is on screen
  useEffect(() => {
    const el = figureRef.current;
    if (!el || !sliders.length) return undefined;
    if (typeof IntersectionObserver === 'undefined') { load(); return undefined; }
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { load(); io.disconnect(); }
    }, { rootMargin: '300px' });
    io.observe(el);
    return () => io.disconnect();
  }, [load, sliders.length]);

  const set = useCallback((name, v) => {
    load();
    setValues(prev => ({ ...(prev || {}), [name]: v }));
  }, [load]);

  const hash = useMemo(
    () => (live && values ? live.hashWith(picture, values) : picture ? picture.hash : ''),
    [live, values, picture]
  );

  if (!picture || !picture.svg) return null;
  const Live = live ? live.default : null;
  const changed = !!values && sliders.some(s => values[s.name] !== undefined && values[s.name] !== s.value);

  return (
    <figure ref={figureRef} style={{ margin: align === 'left' ? '1.25em 0' : '1.25em auto', maxWidth: maxWidth || picture.width, fontFamily: FIGURE_LOOK.font, ...(style || {}) }}>
      {Live && values ? <Live picture={picture} values={values} /> : <PictureFrame picture={picture} />}

      {sliders.length > 0 && (
        <div style={{ marginTop: 8, padding: '8px 12px', border: `1px solid ${FIGURE_LOOK.border}`, borderRadius: 8, background: '#f8fafc', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {sliders.map(s => {
            const v = values && values[s.name] !== undefined ? values[s.name] : s.value;
            const html = tex(`${s.tex} = ${v.toFixed(decimalsFor(s))}`);
            return (
              <label key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 12, margin: 0 }}>
                <span style={{ minWidth: 86, fontSize: 15, color: FIGURE_LOOK.navy, whiteSpace: 'nowrap' }}>
                  {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : `${s.name} = ${v}`}
                </span>
                <input type="range" aria-label={`Value of ${s.name}`} min={s.min} max={s.max} step={stepFor(s)} value={v}
                  onPointerDown={load} onFocus={load}
                  onChange={ev => set(s.name, +ev.target.value)}
                  style={{ flex: 1, minWidth: 80, margin: 0, accentColor: FIGURE_LOOK.accent, cursor: 'pointer' }} />
              </label>
            );
          })}
          </div>
          {/* always there, so that nothing jumps when it appears */}
              <button type="button" onClick={() => setValues(null)} disabled={!changed} aria-hidden={!changed}
                style={{ visibility: changed ? 'visible' : 'hidden', flexShrink: 0, padding: '3px 10px', fontSize: 12.5, fontWeight: 600, fontFamily: FIGURE_LOOK.font, color: FIGURE_LOOK.accent, background: '#ffffff', border: `1px solid ${FIGURE_LOOK.accent}`, borderRadius: 999, cursor: 'pointer' }}>
                {resetLabel}
              </button>
        </div>
      )}

      <FigureCaption picture={{ ...picture, hash }} caption={caption} calculatorHref={calculatorHref} explorerHref={explorerHref} />
    </figure>
  );
}
