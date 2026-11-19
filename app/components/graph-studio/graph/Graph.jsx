// Graph Studio — the Graph component
//
// One React component that takes a scene document and shows it as an
// interactive graph. Every shell (calculator, explorer, concept tool,
// lesson embed…) is this component with different chrome around it.
// It holds no math: the engine does the work.
//
//   <Graph
//     scene={doc} onSceneChange={setDoc}      controlled, or
//     defaultScene={doc}                      uncontrolled
//     selectedId={id} onSelect={setId}
//     interaction={{ pan, zoom, dragPoints, trace, select }}   all true by default
//     overlays={{ specialPoints: 'selected' | 'none' }}
//     annotations={[{ type: 'vline', x: 2, dashed: true }, …]}
//     curves={[{ id, f, color, width, dashed }]}   extra curves given as functions
//     onHover={({ x, y }) => …}  pointer position in world units, null when it leaves
//     onViewport={bounds => …}   the visible rectangle, whenever it changes
//     theme="default" | "dark" | "lesson" | "projector" | { …overrides }
//     style={{ width: '100%', height: 420 }}
//     onStats={({ ms, evals }) => …}
//     ref={graphRef}     getSVG(), getPNG(), getView(), setView(), getScene(), getGeometryStats()
//   />
//
// Works with no props at all (an empty grid).

import React, { useRef, useState, useEffect, useMemo, useCallback, useImperativeHandle, forwardRef } from 'react';
import {
  ensureScene, compileScene, computeGeometry, drawCanvas, renderSVG, setVariables, viewBounds
} from '../engine/index.js';
import { getTheme, rowColor } from '../themes/themes.js';

const DEFAULT_INTERACTION = { pan: true, zoom: true, dragPoints: true, trace: true, select: true };
const DEFAULT_OVERLAYS = { specialPoints: 'selected' };
const DEFAULT_STYLE = { width: '100%', height: 420 };
const EMPTY = [];

function roundTo(v, decimals) {
  const s = v.toFixed(Math.max(0, Math.min(10, decimals)));
  return +s;
}

const Graph = forwardRef(function Graph(props, ref) {
  const {
    scene: sceneProp,
    defaultScene,
    onSceneChange,
    selectedId: selectedProp,
    onSelect,
    interaction: interactionProp,
    overlays: overlaysProp,
    annotations = EMPTY,
    curves = EMPTY,
    onHover,
    onViewport,
    theme: themeProp,
    style,
    className,
    onStats,
    ariaLabel
  } = props;

  // ---------- the document: controlled or kept here ----------
  const controlled = sceneProp !== undefined;
  const [innerScene, setInnerScene] = useState(() => ensureScene(defaultScene));
  const doc = useMemo(() => ensureScene(controlled ? sceneProp : innerScene), [controlled, sceneProp, innerScene]);
  const docRef = useRef(doc);
  docRef.current = doc;

  const commit = useCallback(next => {
    if (next === docRef.current) return;
    docRef.current = next;            // several events can arrive before the next render
    if (!controlled) setInnerScene(next);
    if (onSceneChange) onSceneChange(next);
  }, [controlled, onSceneChange]);

  const selectedControlled = selectedProp !== undefined;
  const [innerSelected, setInnerSelected] = useState(null);
  const selectedId = selectedControlled ? selectedProp : innerSelected;
  const select = useCallback(id => {
    if (!selectedControlled) setInnerSelected(id);
    if (onSelect) onSelect(id);
  }, [selectedControlled, onSelect]);

  const interaction = useMemo(() => ({ ...DEFAULT_INTERACTION, ...(interactionProp || {}) }), [interactionProp]);
  const overlays = useMemo(() => ({ ...DEFAULT_OVERLAYS, ...(overlaysProp || {}) }), [overlaysProp]);
  const theme = useMemo(() => getTheme(themeProp || doc.settings.theme), [themeProp, doc.settings.theme]);
  const locked = !!doc.settings.lockViewport;
  const canPan = interaction.pan && !locked;
  const canZoom = interaction.zoom && !locked;

  // ---------- size ----------
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [size, setSize] = useState({ W: 0, H: 0 });
  const sizeRef = useRef(size);
  sizeRef.current = size;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const apply = (w, h) => {
      const W = Math.max(40, Math.floor(w)), H = Math.max(40, Math.floor(h));
      setSize(s => (s.W === W && s.H === H ? s : { W, H }));
    };
    const r = el.getBoundingClientRect();
    apply(r.width, r.height);
    const ro = new ResizeObserver(([entry]) => apply(entry.contentRect.width, entry.contentRect.height));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ---------- compile → geometry ----------
  // Compiling depends on the rows only, so panning and zooming skip it.
  const compiled = useMemo(() => compileScene(doc), [doc.expressions]); // eslint-disable-line react-hooks/exhaustive-deps
  const compiledRef = useRef(compiled);
  compiledRef.current = compiled;

  // Curves given as functions (an analysis layer, for instance) are drawn after the rows.
  const extraItems = useMemo(
    () => curves.map((c, i) => ({ type: c.type || 'curveX', id: c.id, index: compiled.items.length + i, color: c.color, width: c.width, dashed: c.dashed, f: c.f, g: c.g })),
    [curves, compiled]
  );
  const itemsRef = useRef([]);
  itemsRef.current = extraItems.length ? [...compiled.items, ...extraItems] : compiled.items;

  const view = doc.view;
  const ready = size.W > 0 && size.H > 0;
  const geometry = useMemo(
    () => (ready ? computeGeometry(compiled, view, size.W, size.H, { selectedId, specialPoints: overlays.specialPoints, extraItems }) : null),
    [ready, compiled, view, size, selectedId, overlays.specialPoints, extraItems]
  );
  const geometryRef = useRef(geometry);
  geometryRef.current = geometry;

  useEffect(() => { if (geometry && onStats) onStats(geometry.stats); }, [geometry, onStats]);

  // ---------- transient state: hover, pinned point, drag ----------
  const [hover, setHover] = useState(null);
  const [pinned, setPinned] = useState(null);
  const [dragId, setDragId] = useState(null);
  const pointers = useRef(new Map());
  const gesture = useRef(null);

  useEffect(() => { setPinned(null); }, [selectedId, compiled]);

  const bounds = geometry ? geometry.bounds : null;

  const toWorld = useCallback((sx, sy) => {
    const b = geometryRef.current.bounds, { W, H } = sizeRef.current;
    return { x: b.xMin + (sx / W) * (b.xMax - b.xMin), y: b.yMax - (sy / H) * (b.yMax - b.yMin) };
  }, []);

  // Nearest explicit curve under the pointer, measured straight up/down.
  const findTrace = useCallback((sx, sy, maxDist = 10) => {
    const g = geometryRef.current;
    if (!g) return null;
    const b = g.bounds, { H } = sizeRef.current;
    const { x } = toWorld(sx, sy);
    let best = null;
    for (const it of itemsRef.current) {
      if (it.type !== 'curveX') continue;
      const y = it.f(x);
      if (!Number.isFinite(y)) continue;
      const py = ((b.yMax - y) / (b.yMax - b.yMin)) * H;
      const d = Math.abs(py - sy);
      if (d < maxDist && (!best || d < best.d)) best = { d, id: it.id, index: it.index, color: it.color, x, y, sx, sy: py };
    }
    return best;
  }, [toWorld]);

  const hitPoint = useCallback((sx, sy) => {
    const g = geometryRef.current;
    if (!g) return null;
    let best = null;
    for (const L of g.layers) {
      if (L.kind !== 'point') continue;
      const d = Math.hypot(L.sx - sx, L.sy - sy);
      if (d < 14 && (!best || d < best.d)) best = { d, L };
    }
    return best ? best.L : null;
  }, []);

  const isDraggable = L => !!(L && L.drag && (L.drag.xVar || L.drag.yVar));

  // ---------- reports to the host ----------
  useEffect(() => {
    if (!onHover) return;
    onHover(hover && geometryRef.current ? toWorld(hover.sx, hover.sy) : null);
  }, [hover, onHover, toWorld]);

  const bxMin = bounds ? bounds.xMin : null, bxMax = bounds ? bounds.xMax : null;
  const byMin = bounds ? bounds.yMin : null, byMax = bounds ? bounds.yMax : null;
  useEffect(() => {
    if (onViewport && bxMin !== null) onViewport({ xMin: bxMin, xMax: bxMax, yMin: byMin, yMax: byMax });
  }, [onViewport, bxMin, bxMax, byMin, byMax]);

  // ---------- draw ----------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !geometry) return;
    const dpr = window.devicePixelRatio || 1;
    const { W, H } = geometry;
    const pw = Math.round(W * dpr), ph = Math.round(H * dpr);
    if (canvas.width !== pw || canvas.height !== ph) { canvas.width = pw; canvas.height = ph; }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let trace = null;
    const pointLabels = [];
    if (hover && !gesture.current) {
      const p = hitPoint(hover.sx, hover.sy);
      if (p) pointLabels.push(p);
      else if (interaction.trace) {
        trace = findTrace(hover.sx, hover.sy);
        if (trace) trace = { ...trace, color: rowColor(theme, trace) };
      }
    }
    for (const L of geometry.layers) {
      if (L.kind === 'point' && (L.id === dragId || L.id === selectedId) && !pointLabels.includes(L)) pointLabels.push(L);
    }
    drawCanvas(ctx, geometry, theme, {
      settings: doc.settings, selectedId, annotations,
      dragHalo: interaction.dragPoints,
      overlay: { pinned, trace, pointLabels }
    });
  }, [geometry, theme, doc.settings, selectedId, annotations, hover, pinned, dragId, interaction.trace, interaction.dragPoints, findTrace, hitPoint]);

  // ---------- view changes ----------
  const setView = useCallback(next => {
    const cur = docRef.current;
    const v = typeof next === 'function' ? next(cur.view) : next;
    if (!v || !(v.ux > 0) || !(v.uy > 0) || !Number.isFinite(v.cx) || !Number.isFinite(v.cy)) return;
    commit({ ...cur, view: { cx: v.cx, cy: v.cy, ux: v.ux, uy: v.uy } });
  }, [commit]);

  // Zoom keeping the world point under (sx, sy) where it is.
  const zoomAt = useCallback((sx, sy, fx, fy) => {
    const { W, H } = sizeRef.current;
    setView(v => {
      const wx = v.cx + (sx - W / 2) * v.ux, wy = v.cy - (sy - H / 2) * v.uy;
      const ux = Math.min(Math.max(v.ux * fx, 1e-300), 1e300), uy = Math.min(Math.max(v.uy * fy, 1e-300), 1e300);
      return { cx: wx - (sx - W / 2) * ux, cy: wy + (sy - H / 2) * uy, ux, uy };
    });
  }, [setView]);

  // Wheel: zoom about the pointer. Shift zooms x only, Alt zooms y only.
  useEffect(() => {
    const el = canvasRef.current;
    if (!el || !canZoom) return undefined;
    const onWheel = e => {
      e.preventDefault();
      const r = el.getBoundingClientRect();
      const delta = e.deltaY || e.deltaX;   // with Shift held some browsers report the wheel sideways
      const f = Math.exp(delta * (e.ctrlKey ? 0.01 : 0.0015));
      zoomAt(e.clientX - r.left, e.clientY - r.top, e.altKey ? 1 : f, e.shiftKey ? 1 : f);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [zoomAt, canZoom]);

  // ---------- pointers: pan, pinch, drag a point, select, pin ----------
  const pos = e => {
    const r = canvasRef.current.getBoundingClientRect();
    return { sx: e.clientX - r.left, sy: e.clientY - r.top };
  };

  const onPointerDown = e => {
    if (!geometryRef.current) return;
    try { canvasRef.current.setPointerCapture(e.pointerId); } catch { /* synthetic pointers cannot be captured */ }
    const p = pos(e);
    pointers.current.set(e.pointerId, p);

    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      gesture.current = canZoom
        ? { type: 'pinch', d0: Math.hypot(a.sx - b.sx, a.sy - b.sy), view0: docRef.current.view, mid: { sx: (a.sx + b.sx) / 2, sy: (a.sy + b.sy) / 2 } }
        : null;
      setDragId(null);
      return;
    }

    const pt = hitPoint(p.sx, p.sy);
    if (pt && isDraggable(pt) && interaction.dragPoints) {
      gesture.current = { type: 'drag', layer: pt };
      setDragId(pt.id);
      if (interaction.select) select(pt.id);
      return;
    }
    const sp = geometryRef.current.specials.find(s => Math.hypot(s.sx - p.sx, s.sy - p.sy) < 9);
    if (sp) setPinned(sp);
    else if (interaction.select) {
      const tr = findTrace(p.sx, p.sy, 8);
      if (tr) select(tr.id);
      else if (pt) select(pt.id);
    }
    gesture.current = canPan ? { type: 'pan', last: p, moved: false } : { type: 'none', last: p, moved: false };
  };

  const onPointerMove = e => {
    const p = pos(e);
    if (e.pointerType === 'mouse') setHover(p);
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, p);
    const g = gesture.current;
    if (!g) return;

    if (g.type === 'pan') {
      const dx = p.sx - g.last.sx, dy = p.sy - g.last.sy;
      g.last = p; g.moved = true;
      setView(v => ({ ...v, cx: v.cx - dx * v.ux, cy: v.cy + dy * v.uy }));
    } else if (g.type === 'drag') {
      const w = toWorld(p.sx, p.sy);
      const pxSize = docRef.current.view.ux;
      const dec = Math.max(0, Math.ceil(-Math.log10(pxSize)));
      const up = {};
      if (g.layer.drag.xVar) up[g.layer.drag.xVar] = roundTo(w.x, dec);
      if (g.layer.drag.yVar) up[g.layer.drag.yVar] = roundTo(w.y, dec);
      commit(setVariables(docRef.current, compiledRef.current, up));
    } else if (g.type === 'pinch' && pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      const d = Math.hypot(a.sx - b.sx, a.sy - b.sy);
      const f = g.d0 / Math.max(d, 1);
      const { W, H } = sizeRef.current, v0 = g.view0;
      const wx = v0.cx + (g.mid.sx - W / 2) * v0.ux, wy = v0.cy - (g.mid.sy - H / 2) * v0.uy;
      const mid = { sx: (a.sx + b.sx) / 2, sy: (a.sy + b.sy) / 2 };
      const ux = v0.ux * f, uy = v0.uy * f;
      setView({ cx: wx - (mid.sx - W / 2) * ux, cy: wy + (mid.sy - H / 2) * uy, ux, uy });
    }
  };

  const onPointerUp = e => {
    pointers.current.delete(e.pointerId);
    const g = gesture.current;
    // a tap on a touch screen shows the trace label where a mouse would hover
    if (g && (g.type === 'pan' || g.type === 'none') && !g.moved && e.pointerType !== 'mouse') {
      const tr = interaction.trace ? findTrace(g.last.sx, g.last.sy, 14) : null;
      setHover(tr ? g.last : null);
    }
    if (pointers.current.size === 0) { gesture.current = null; setDragId(null); }
    else if (pointers.current.size === 1) {
      const [p] = [...pointers.current.values()];
      gesture.current = canPan ? { type: 'pan', last: p, moved: true } : null;
    }
  };

  // ---------- handle for the host ----------
  useImperativeHandle(ref, () => ({
    // SVG text of what is on screen now. Pass { width, height } for another size,
    // { theme } for another theme, { withSelection: true } to keep the thicker selected curve.
    getSVG(opts = {}) {
      const d = docRef.current;
      const W = opts.width || sizeRef.current.W || 640, H = opts.height || sizeRef.current.H || 420;
      const th = opts.theme ? getTheme(opts.theme) : theme;
      const sel = opts.withSelection ? selectedId : null;
      // a different size keeps the same world rectangle
      const cur = sizeRef.current;
      const v = cur.W && cur.H && (W !== cur.W || H !== cur.H)
        ? { cx: d.view.cx, cy: d.view.cy, ux: (d.view.ux * cur.W) / W, uy: (d.view.uy * cur.H) / H }
        : d.view;
      const g = computeGeometry(compiledRef.current, v, W, H, { selectedId: sel, specialPoints: sel ? overlays.specialPoints : 'none', extraItems });
      return renderSVG(g, th, { settings: d.settings, selectedId: sel, annotations, title: d.authoring.title });
    },
    getPNG() { return canvasRef.current ? canvasRef.current.toDataURL('image/png') : null; },
    getView() { return { ...docRef.current.view }; },
    setView,
    getScene() { return docRef.current; },
    getBounds() { const s = sizeRef.current; return viewBounds(docRef.current.view, s.W, s.H); },
    getGeometryStats() { return geometryRef.current ? { ...geometryRef.current.stats } : null; }
  }), [theme, selectedId, annotations, overlays.specialPoints, setView, extraItems]);

  // ---------- markup ----------
  const hoverPoint = hover && geometry ? hitPoint(hover.sx, hover.sy) : null;
  const cursor = dragId !== null ? 'grabbing'
    : hoverPoint && isDraggable(hoverPoint) && interaction.dragPoints ? 'grab'
      : canPan ? 'crosshair' : 'default';

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ position: 'relative', overflow: 'hidden', background: theme.background, ...DEFAULT_STYLE, ...(style || {}) }}
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={ariaLabel || doc.authoring.title || 'Graph'}
        style={{ position: 'absolute', left: 0, top: 0, width: size.W || '100%', height: size.H || '100%', display: 'block', touchAction: canPan || canZoom ? 'none' : 'auto', cursor }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={() => setHover(null)}
      />
    </div>
  );
});

export default Graph;
