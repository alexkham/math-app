'use client';

// ===========================================================
// player/ProofCanvas.jsx
// Scene + model → <svg>. Visibility is cumulative (everything
// shown in scenes 0..step), highlights come from the current
// scene only. Angles not highlighted are dimmed whenever the
// scene highlights an angle.
//
// Interactive when onHandleMove is given; static otherwise
// (used by proofDiagrams through renderToStaticMarkup).
// Objects mount once per id, so the fade-in runs when an object
// first appears and not on every drag frame.
// ===========================================================

import React, { useRef, useEffect } from 'react';
import { resolve } from '../engine/resolver';
import { centroid } from '../engine/math';
import { REGISTRY, layerOf } from '../render/registry';

const DEFAULT_VIEWBOX = [0, 0, 560, 420];

function visibleUpTo(scenes, step) {
  const vis = new Set();
  for (let k = 0; k <= step; k++) scenes[k].canvas.show.forEach((id) => vis.add(id));
  return vis;
}

export default function ProofCanvas({
  model,
  scenes,
  step,
  labelCenter = null,
  labels = true,
  measures = false,
  onHandleMove = null,
  viewBox = DEFAULT_VIEWBOX,
  animate = true,
  width,
  height,
  style
}) {
  const svgRef = useRef(null);
  const dragRef = useRef(null);
  const interactive = typeof onHandleMove === 'function';

  // Touch: only a touch that starts on a handle is kept from scrolling
  // the page (touch-action: none on .pp-handle, plus this non-passive
  // listener for browsers that ignore touch-action on SVG children).
  // A touch anywhere else on the canvas scrolls as usual.
  useEffect(() => {
    const svg = svgRef.current;
    if (!interactive || !svg) return undefined;
    const stop = (e) => { if (e.target.closest && e.target.closest('[data-handle]')) e.preventDefault(); };
    svg.addEventListener('touchstart', stop, { passive: false });
    return () => svg.removeEventListener('touchstart', stop);
  }, [interactive]);

  const { R, P } = resolve(model);
  const centerPts = labelCenter
    ? labelCenter.map((id) => P[id]).filter(Boolean)
    : Object.values(R).filter((o) => o.free).map((o) => P[o.id]);
  const ctx = { center: centroid(centerPts), labels, measures, draggable: interactive };

  const scene = scenes[step];
  const vis = visibleUpTo(scenes, step);
  const hl = new Set(scene.canvas.hl);
  const dimAngles = scene.canvas.hl.some((id) => R[id] && R[id].type === 'angle');

  const items = Object.values(R)
    .filter((o) => vis.has(o.id) && REGISTRY[o.type])
    .sort((a, b) => layerOf(a) - layerOf(b));

  const [vx, vy, vw, vh] = viewBox;

  const toSvg = (e) => {
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM().inverse());
    return {
      x: Math.min(vx + vw - 20, Math.max(vx + 20, p.x)),
      y: Math.min(vy + vh - 20, Math.max(vy + 20, p.y))
    };
  };

  const handlers = interactive
    ? {
        onPointerDown: (e) => {
          const t = e.target.closest('[data-handle]');
          if (!t) return;
          dragRef.current = t.getAttribute('data-handle');
          // Synthetic pointer events (the demo player) carry no capturable pointer.
          try { svgRef.current.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
        },
        onPointerMove: (e) => {
          if (dragRef.current) onHandleMove(dragRef.current, toSvg(e));
        },
        onPointerUp: () => { dragRef.current = null; },
        onPointerCancel: () => { dragRef.current = null; }
      }
    : {};

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox.join(' ')}
      width={width}
      height={height}
      style={{ display: 'block', width: width ? undefined : '100%', height: 'auto', userSelect: 'none', ...style }}
      {...handlers}
    >
      {items.map((o) => {
        const Comp = REGISTRY[o.type];
        const dim = dimAngles && o.type === 'angle' && !hl.has(o.id);
        return (
          <g key={o.id} className={animate ? 'pp-enter' : undefined} opacity={dim ? 0.3 : 1}>
            <Comp o={o} hl={hl.has(o.id)} ctx={ctx} />
          </g>
        );
      })}
    </svg>
  );
}
