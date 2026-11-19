// Graph Studio — lesson embed, type 4: try your own
//
// A figure with its formula in a box under it. The reader rewrites the
// formula and the graph follows. Formulas to try can be offered as
// buttons. The graph itself stays put, so the page scrolls as usual.
//
//   <GraphTry picture={parabola} caption="…" calculatorHref="/…" />
//
// `picture` comes from scenePicture(scene, { editable, tries }): which
// row may be rewritten (default: the first one that draws something)
// and the formulas offered, e.g. tries: ['y = x^3', 'y = 1/x'].
//
// It loads as a picture with the formula typeset. The math editor and
// the engine are fetched when the reader presses the box or a formula
// to try. While what is typed cannot be read, the last good graph stays.
//
// Props: those of GraphPicture, plus
//   label        text before the box (default 'Formula')
//   triesLabel   text before the formulas to try (default 'Try')
//   resetLabel   text of the reset button (default 'Reset')
//
// This file must stay light: the live part is in LiveTry.jsx and is
// loaded on demand.

import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import katex from 'katex';
import { FIGURE_LOOK, PictureFrame, FigureCaption } from './GraphPicture.jsx';

function tex(source) {
  try { return katex.renderToString(source, { throwOnError: false, strict: 'ignore' }); } catch { return null; }
}

export default function GraphTry(props) {
  const { picture, caption, calculatorHref, explorerHref, maxWidth, align = 'center', label = 'Formula', triesLabel = 'Try', resetLabel = 'Reset', style } = props;
  const [text, setText] = useState(null);             // null = the author's formula
  const [live, setLive] = useState(null);             // the loaded module
  const [state, setState] = useState('idle');         // 'idle' | 'loading' | 'failed'
  const [focusWanted, setFocusWanted] = useState(false);
  const good = useRef(null);                          // the last text that could be drawn
  const asked = useRef(false);

  const editable = picture && picture.editable;
  const tries = (picture && picture.tries) || [];

  const load = useCallback(() => {
    if (asked.current) return;
    asked.current = true;
    setState('loading');
    import('./LiveTry.jsx')
      .then(mod => { setLive(mod); setState('idle'); })
      .catch(() => { asked.current = false; setState('failed'); });
  }, []);

  const current = text === null ? (editable ? editable.text : '') : text;
  const error = useMemo(() => (live && text !== null ? live.checkText(picture, text) : null), [live, text, picture]);
  useEffect(() => { if (text !== null && !error) good.current = text; }, [text, error]);
  const drawn = text === null ? null : (error ? good.current : text);

  const hash = useMemo(
    () => (live && drawn !== null && drawn !== undefined ? live.hashWithText(picture, drawn) : picture ? picture.hash : ''),
    [live, drawn, picture]
  );

  const staticHtml = useStaticHtml(editable, tries, current);

  if (!picture || !picture.svg || !editable) return null;
  const changed = text !== null && text !== editable.text;
  const pill = { padding: '3px 10px', fontSize: 12.5, fontWeight: 600, fontFamily: FIGURE_LOOK.font, color: FIGURE_LOOK.accent, background: '#ffffff', border: `1px solid ${FIGURE_LOOK.accent}`, borderRadius: 999, cursor: 'pointer' };

  return (
    <figure style={{ margin: align === 'left' ? '1.25em 0' : '1.25em auto', maxWidth: maxWidth || picture.width, fontFamily: FIGURE_LOOK.font, ...(style || {}) }}>
      {live && drawn !== null && drawn !== undefined ? <live.TryGraph picture={picture} text={drawn} /> : <PictureFrame picture={picture} />}

      <div style={{ marginTop: 8, padding: '8px 12px', border: `1px solid ${FIGURE_LOOK.border}`, borderRadius: 8, background: '#f8fafc' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: FIGURE_LOOK.caption, flexShrink: 0 }}>{label}</span>
          <div className="gs-try-box" style={{ flex: 1, minWidth: 0, boxSizing: 'border-box', padding: '4px 10px', display: 'flex', alignItems: 'center', background: '#ffffff', border: `1px solid ${error ? '#b45309' : FIGURE_LOOK.accent}`, borderRadius: 6, overflow: 'hidden' }}>
            {live ? (
              <div style={{ flex: 1, minWidth: 0 }}>
                <live.TryEditor picture={picture} text={current} onChange={setText} autoFocus={focusWanted} />
              </div>
            ) : (
              <button type="button" onClick={() => { setFocusWanted(true); load(); }}
                title="Change the formula" aria-label="Change the formula"
                style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: 0, margin: 0, border: 'none', background: 'none', cursor: 'text', textAlign: 'left', fontSize: 17, color: FIGURE_LOOK.navy, fontFamily: FIGURE_LOOK.font, opacity: state === 'loading' ? 0.55 : 1 }}>
                {staticHtml ? <span dangerouslySetInnerHTML={{ __html: staticHtml }} /> : <span>{current}</span>}
                <span style={{ fontSize: 12, fontWeight: 600, color: FIGURE_LOOK.accent, whiteSpace: 'nowrap' }}>
                  {state === 'loading' ? 'Loading…' : state === 'failed' ? 'Could not load — try again' : 'Change'}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* the place of the message is kept, so that nothing jumps */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, minHeight: 32, margin: '4px 0' }}>
          <div role="status" style={{ flex: 1, minWidth: 0, fontSize: 12, lineHeight: 1.3, color: '#b45309' }}>
            {error ? 'Not a complete formula yet — showing the last good graph.' : ''}
          </div>
          {/* always there, so that nothing jumps when it appears */}
          <button type="button" onClick={() => { setText(null); good.current = null; }} disabled={!changed} aria-hidden={!changed}
            style={{ ...pill, visibility: changed ? 'visible' : 'hidden', flexShrink: 0 }}>
            {resetLabel}
          </button>
        </div>

        {tries.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: FIGURE_LOOK.caption }}>{triesLabel}</span>
            {tries.map((t, i) => {
              const html = tex(t.tex);
              return (
                <button key={i} type="button" onClick={() => { load(); setText(t.text); }} aria-label={`Try ${t.text}`} aria-pressed={current === t.text}
                  style={{ ...pill, fontWeight: 400, fontSize: 14, padding: '4px 12px', color: FIGURE_LOOK.navy, background: current === t.text ? '#e8f0fe' : '#ffffff' }}>
                  {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : t.text}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <FigureCaption picture={{ ...picture, hash }} caption={caption} calculatorHref={calculatorHref} explorerHref={explorerHref} />
      {/* the math editor is taller on touch screens; the box has that height from the start */}
      <style jsx>{`
        .gs-try-box {
          min-height: 48px;
        }
        @media (pointer: coarse) {
          .gs-try-box {
            min-height: 70px;
          }
        }
      `}</style>
    </figure>
  );
}

// The formula as shown before the editor has arrived: the author's, or
// the offered one the reader has just pressed.
function useStaticHtml(editable, tries, current) {
  return useMemo(() => {
    if (!editable) return null;
    const hit = current === editable.text ? editable : tries.find(t => t.text === current);
    return hit ? tex(hit.tex) : null;
  }, [editable, tries, current]);
}
