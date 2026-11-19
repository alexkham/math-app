// Graph Studio — lesson embed: the live part of "the picture that wakes up"
//
// Fetched on demand by GraphPictureLive. Shows the picture's scene in a
// real <Graph>, starting on exactly the rectangle the picture showed,
// with zoom buttons, "back to the start" and "Done".
//
// Like every shell it holds no math.

import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
import Graph from '../../graph/Graph.jsx';
import GraphToolbar, { toolbarButtonStyle } from '../parts/GraphToolbar.jsx';
import { getTheme } from '../../themes/themes.js';

const ZOOM_AND_HOME = { zoom: true, home: true, equalScale: false, grid: false, axes: false, theme: false, fullscreen: false, export: false };
const NO_DRAG = { dragPoints: false };

export default function LiveGraph({ picture, onDone }) {
  const holderRef = useRef(null);
  const graphRef = useRef(null);
  const [doc, setDoc] = useState(null);
  const [hint, setHint] = useState(true);       // goes away at the first touch
  const homeView = useRef(picture.scene.view);
  const theme = useMemo(() => getTheme(picture.theme), [picture.theme]);
  const ui = theme.ui;

  // The picture was drawn for `picture.width` pixels; on the page it may
  // be narrower. The live graph starts on the same rectangle of the plane.
  useLayoutEffect(() => {
    const w = holderRef.current ? holderRef.current.getBoundingClientRect().width : picture.width;
    const k = w > 0 ? picture.width / w : 1;
    const v = picture.scene.view;
    homeView.current = { cx: v.cx, cy: v.cy, ux: v.ux * k, uy: v.uy * k };
    setDoc({ ...picture.scene, view: homeView.current });
  }, [picture]);

  return (
    <div ref={holderRef} onPointerDownCapture={hint ? () => setHint(false) : undefined} onWheelCapture={hint ? () => setHint(false) : undefined} style={{ position: 'relative', border: `1px solid ${ui.accent}`, borderRadius: 8, overflow: 'hidden', background: theme.background, aspectRatio: `${picture.width} / ${picture.height}` }}>
      {doc && (
        <>
          <Graph
            ref={graphRef}
            scene={doc} onSceneChange={setDoc}
            theme={picture.theme}
            annotations={picture.annotations}
            interaction={NO_DRAG}
            ariaLabel={picture.alt}
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
          />
          <GraphToolbar
            graphRef={graphRef} scene={doc} onSceneChange={setDoc} homeView={homeView.current} theme={picture.theme}
            controls={ZOOM_AND_HOME}
            style={{ position: 'absolute', right: 8, bottom: 8, flexWrap: 'nowrap', gap: 4, padding: 4, border: `1px solid ${ui.border}`, borderRadius: 8, boxShadow: '0 1px 4px rgba(6, 53, 122, 0.15)' }}>
            <button type="button" onClick={onDone} style={{ ...toolbarButtonStyle(ui, true), fontWeight: 600 }} title="Back to the picture">Done</button>
          </GraphToolbar>
          {hint && <div style={{ position: 'absolute', left: 8, top: 8, maxWidth: 'calc(100% - 16px)', padding: '3px 8px', fontSize: 11.5, lineHeight: 1.3, color: ui.textMuted, background: 'rgba(255, 255, 255, 0.92)', border: `1px solid ${ui.border}`, borderRadius: 6, pointerEvents: 'none', fontFamily: ui.font }}>
            Drag to move · pinch or scroll to zoom · tap a curve for its points
          </div>}
        </>
      )}
    </div>
  );
}
