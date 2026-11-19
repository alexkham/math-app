// Graph Studio — lesson embed, type 5: step by step
//
// A figure that walks through an explanation. Under the picture is one
// sentence and two buttons, Back and Next; each step has its own
// sentence and its own picture.
//
//   <GraphSteps steps={solving} caption="Solving $x^2 = x + 2$ with two graphs." />
//
// `steps` comes from sceneSteps(...) in getStaticProps (see
// lesson-build.js). Every step is a ready-made drawing, so this figure
// never downloads the engine.
//
// Props: those of GraphPicture (without `picture`), plus
//   steps        the result of sceneSteps
//   start        the step shown first, from 0 (default 0)
//
// This file must stay light: React and KaTeX only, nothing from the engine.

import React, { useState } from 'react';
import { FIGURE_LOOK, PictureFrame, FigureCaption, captionNodes } from './GraphPicture.jsx';

export default function GraphSteps(props) {
  const { steps: data, caption, calculatorHref, explorerHref, maxWidth, align = 'center', start = 0, style } = props;
  const list = (data && data.steps) || [];
  const [at, setAt] = useState(Math.min(Math.max(0, start), Math.max(0, list.length - 1)));
  if (!list.length) return null;

  const step = list[at];
  const last = at === list.length - 1;
  const picture = { ...step, width: data.width, height: data.height };
  const button = (primary, disabled) => ({
    padding: '6px 14px', fontSize: 13, fontWeight: 600, fontFamily: FIGURE_LOOK.font, lineHeight: 1.2, borderRadius: 999,
    border: `1px solid ${disabled ? FIGURE_LOOK.border : FIGURE_LOOK.accent}`,
    color: disabled ? '#94a3b8' : primary ? '#ffffff' : FIGURE_LOOK.accent,
    background: primary && !disabled ? FIGURE_LOOK.accent : '#ffffff',
    cursor: disabled ? 'default' : 'pointer', whiteSpace: 'nowrap'
  });

  return (
    <figure style={{ margin: align === 'left' ? '1.25em 0' : '1.25em auto', maxWidth: maxWidth || data.width, fontFamily: FIGURE_LOOK.font, ...(style || {}) }}>
      <PictureFrame picture={picture} />

      <div style={{ marginTop: 8, padding: '10px 12px', border: `1px solid ${FIGURE_LOOK.border}`, borderRadius: 8, background: '#f8fafc' }}>
        {/* all the sentences share one place, so its height is that of the longest and nothing jumps */}
        <div style={{ display: 'grid' }}>
          {list.map((s, i) => (
            <div key={i} aria-hidden={i !== at} aria-live={i === at ? 'polite' : undefined}
              style={{ gridArea: '1 / 1', visibility: i === at ? 'visible' : 'hidden', fontSize: 15, lineHeight: 1.5, color: '#1e293b' }}>
              <span style={{ fontWeight: 700, color: FIGURE_LOOK.navy }}>{i + 1}. </span>
              {captionNodes(s.text)}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
          <button type="button" onClick={() => setAt(a => Math.max(0, a - 1))} disabled={at === 0} style={button(false, at === 0)}>← Back</button>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, flexWrap: 'wrap' }}>
            {list.map((s, i) => (
              <button key={i} type="button" onClick={() => setAt(i)} aria-label={`Step ${i + 1} of ${list.length}`} aria-current={i === at ? 'step' : undefined}
                style={{ width: 22, height: 22, minWidth: 0, padding: 0, border: 'none', background: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', boxSizing: 'border-box', border: `1.5px solid ${FIGURE_LOOK.accent}`, background: i === at ? FIGURE_LOOK.accent : i < at ? '#bfd3fb' : '#ffffff' }} />
              </button>
            ))}
          </div>
          {/* both labels share one place, so the button keeps its width */}
          <button type="button" onClick={() => setAt(a => (a >= list.length - 1 ? 0 : a + 1))} style={{ ...button(true, false), display: 'inline-grid' }}>
            <span style={{ gridArea: '1 / 1', visibility: last ? 'hidden' : 'visible' }}>Next →</span>
            <span style={{ gridArea: '1 / 1', visibility: last ? 'visible' : 'hidden' }}>Start again</span>
          </button>
        </div>
      </div>

      <FigureCaption picture={picture} caption={caption} calculatorHref={calculatorHref} explorerHref={explorerHref} />
    </figure>
  );
}
