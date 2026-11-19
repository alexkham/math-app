// Graph Studio — lesson embed: the live part of "the graph with sliders"
//
// Fetched on demand by GraphSliders. Draws the picture's scene with the
// slider values it is given. The graph itself does not move or zoom, so
// a finger on it still scrolls the page.
//
// Like every shell it holds no math.

import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
import Graph from '../../graph/Graph.jsx';
import { compileScene, setVariables, sceneHash } from '../../engine/index.js';
import { getTheme } from '../../themes/themes.js';
import { FIGURE_LOOK } from './GraphPicture.jsx';

const STILL = { pan: false, zoom: false, dragPoints: false, select: false, trace: true };
const NOTHING = () => {};

// The picture's scene with the given slider values written in.
export function sceneWith(picture, values) {
  return setVariables(picture.scene, compileScene(picture.scene), values || {});
}

// '#scene=…' for the tool links, with the reader's slider values.
export function hashWith(picture, values) {
  return sceneHash(sceneWith(picture, values));
}

// `scene`, when given, is drawn instead of the picture's scene with `values`.
export default function LiveSliderGraph({ picture, values, scene: sceneProp }) {
  const holderRef = useRef(null);
  const [scale, setScale] = useState(0);
  const theme = useMemo(() => getTheme(picture.theme), [picture.theme]);
  const compiled = useMemo(() => compileScene(picture.scene), [picture.scene]);

  // The picture was drawn for `picture.width` pixels; on the page it may
  // be narrower. The graph shows the same rectangle of the plane.
  useLayoutEffect(() => {
    const el = holderRef.current;
    if (!el) return undefined;
    const measure = () => {
      const w = el.getBoundingClientRect().width;
      setScale(w > 0 ? picture.width / w : 1);
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [picture.width]);

  const doc = useMemo(() => {
    if (!scale) return null;
    const v = picture.scene.view;
    const moved = sceneProp || setVariables(picture.scene, compiled, values || {});
    return { ...moved, view: { cx: v.cx, cy: v.cy, ux: v.ux * scale, uy: v.uy * scale } };
  }, [picture.scene, compiled, values, scale, sceneProp]);

  return (
    <div ref={holderRef} style={{ position: 'relative', border: `1px solid ${FIGURE_LOOK.border}`, borderRadius: 8, overflow: 'hidden', background: theme.background, aspectRatio: `${picture.width} / ${picture.height}` }}>
      {doc && (
        <Graph
          scene={doc} onSceneChange={NOTHING}
          theme={picture.theme}
          annotations={picture.annotations}
          interaction={STILL}
          ariaLabel={picture.alt}
          style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
}
