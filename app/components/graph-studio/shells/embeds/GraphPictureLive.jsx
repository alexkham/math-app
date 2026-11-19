// Graph Studio — lesson embed, type 2: the picture that wakes up
//
// Looks and loads exactly like the picture (type 1). A button in its
// corner turns it into a live graph in the same place: the reader can
// move it, zoom, and read points off the curves. "Done" puts the
// picture back.
//
//   <GraphPictureLive picture={parabola} caption="…" calculatorHref="/…" />
//
// The engine is fetched only when the button is pressed, so a page with
// ten such figures costs the same as a page with ten pictures.
//
// Props: those of GraphPicture, plus
//   buttonLabel   text of the button (default 'Move and zoom')
//
// This file must stay light: the live part is in LiveGraph.jsx and is
// loaded on demand.

import React, { useState, useCallback } from 'react';
import GraphPicture, { FIGURE_LOOK, captionNodes, FigureLinks } from './GraphPicture.jsx';

const HAND = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
  </svg>
);

export default function GraphPictureLive(props) {
  const { picture, caption, calculatorHref, explorerHref, maxWidth, align = 'center', buttonLabel = 'Move and zoom', style } = props;
  const [state, setState] = useState('picture');      // 'picture' | 'loading' | 'live' | 'failed'
  const [Live, setLive] = useState(null);

  const wake = useCallback(() => {
    if (Live) { setState('live'); return; }
    setState('loading');
    import('./LiveGraph.jsx')
      .then(mod => { setLive(() => mod.default); setState('live'); })
      .catch(() => setState('failed'));
  }, [Live]);
  const sleep = useCallback(() => setState('picture'), []);

  if (!picture || !picture.svg) return null;

  if (state === 'live' && Live) {
    const hasLinks = !!(calculatorHref || explorerHref);
    return (
      <figure style={{ margin: align === 'left' ? '1.25em 0' : '1.25em auto', maxWidth: maxWidth || picture.width, fontFamily: FIGURE_LOOK.font, ...(style || {}) }}>
        <Live picture={picture} onDone={sleep} />
        {(caption || hasLinks) && (
          <figcaption style={{ marginTop: 8, fontSize: 14, lineHeight: 1.5, color: FIGURE_LOOK.caption, textAlign: 'center' }}>
            {caption && <span>{captionNodes(caption)}</span>}
            {caption && hasLinks && ' '}
            <FigureLinks picture={picture} calculatorHref={calculatorHref} explorerHref={explorerHref} />
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <GraphPicture picture={picture} caption={caption} calculatorHref={calculatorHref} explorerHref={explorerHref} maxWidth={maxWidth} align={align} style={style}>
      <button type="button" onClick={wake} disabled={state === 'loading'}
        title="Turn this picture into a graph you can move and zoom"
        style={{
          position: 'absolute', right: 8, bottom: 8, display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 11px', fontSize: 12.5, fontWeight: 600, lineHeight: 1, fontFamily: FIGURE_LOOK.font,
          color: FIGURE_LOOK.accent, background: 'rgba(255, 255, 255, 0.96)', border: `1px solid ${FIGURE_LOOK.accent}`,
          borderRadius: 999, cursor: state === 'loading' ? 'default' : 'pointer', boxShadow: '0 1px 4px rgba(6, 53, 122, 0.15)'
        }}>
        {HAND}
        {state === 'loading' ? 'Loading…' : state === 'failed' ? 'Could not load — try again' : buttonLabel}
      </button>
    </GraphPicture>
  );
}
