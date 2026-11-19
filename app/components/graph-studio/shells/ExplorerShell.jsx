// Graph Studio — shell: the explorer
//
// One function of x, looked at in depth: its graph, a table and a
// mapping view, and panels for every property (domain, range, zeros,
// symmetry, continuity, asymptotes, monotonicity, concavity, bounds,
// invertibility, derivatives) with links to theory pages, tools and
// calculators. It is the successor of the earlier Function Explorer and
// keeps its layout and look.
//
//   <ExplorerShell />
//   <ExplorerShell initialExpression="x^3 - 3x" height={820} />
//   <ExplorerShell analysisRange={[-20, 20]} links={{ tools: { domain: '/my/page' } }} />
//   <ExplorerShell calculatorHref="/graphing-calculator" />   adds "Open in Calculator"
//   <ExplorerShell initialExpression="a sin(bx) + c" initialParams={{ a: 2 }} />
//
// Letters other than x are parameters. Each gets a slider in a strip
// under the expression box; every property and marker follows it.
//
// A link ending in #scene=… (written by another shell) opens the
// explorer on the first function of x in that scene, at its view.
//
// Where things come from:
//   • every property shown, and every marker on the graph, is one
//     result of analyzeFunction (engine/analysis.js), so they agree;
//   • the graph is <Graph>; the function is a row of a scene document,
//     the derivative, antiderivative and inverse are extra curves, and
//     roots, extrema, tangent and shaded area are annotations;
//   • full screen and the export window are the shared parts.
//
// Like every shell it holds no math.

import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import Graph from '../graph/Graph.jsx';
import GraphToolbar from './parts/GraphToolbar.jsx';
import FullscreenFrame, { useFullscreen } from './parts/FullscreenFrame.jsx';
import ExportModal from './parts/ExportModal.jsx';
import { Tex } from './parts/MathText.jsx';
import SliderControl from './parts/SliderControl.jsx';
import MathInput from './parts/MathInput.jsx';
import ComparePanel, { COMPARE_COLOR } from './explorer/ComparePanel.jsx';
import { createScene, analyzeFunction, readFunction, pickFunction, functionRows, numberText, valueAt, markersIn, antiderivative, areaPolygon, compareFunctions, sceneHash, readSceneHash } from '../engine/index.js';
import { getTheme } from '../themes/themes.js';
import { T, ExplorerContext, buildDefaultLinks, mergeLinks } from './explorer/explorerTokens.js';
import {
  Header, Funcbar, LeftRail, GraphViewSwitch, RightTabs, RightPanel,
  InsightsStrip, StatusBar, NumericTable, MappingDiagram, injectStyles
} from './explorer/ExplorerAtoms.jsx';
import {
  AboutPanel, DomainRangePanel, ZerosPanel, SymmetryPanel, ContinuityPanel, AsymptotesPanel,
  MonotonicityPanel, ConcavityPanel, BoundednessPanel, InvertibilityPanel,
  ParentTransformsPanel, OperationsPanel,
  DerivativePanel, SecondDerivativePanel, AntiderivativePanel, TangentApproxPanel,
  TheoryReadingList
} from './explorer/ExplorerPanels.jsx';

// The graph in the explorer's own colours.
const GRAPH_THEME = getTheme({
  base: 'default',
  background: T.bg.graph,
  gridMinor: T.border.soft,
  gridMajor: T.border.mid,
  axis: T.c.slate,
  axisWidth: 1.5,
  palette: [T.c.blue],
  curveWidth: 1.75,
  curveWidthSelected: 1.75,
  annotation: { line: T.c.slateD, band: T.c.blue, bandOpacity: 0.15, label: T.text.body }
});

const FIRST_VIEW = { cx: 0, cy: 0, ux: 0.03, uy: 0.03 };
const START_HALF_WIDTH = 10;   // the graph opens on −10 … 10
const SECONDS_PER_SWEEP = 4;   // one pass of an animated slider over its range
const SECONDS_PER_TRIP = 10;   // the moving point crosses the window in this time at 1×
const TRIP_SPEEDS = [0.5, 1, 2];
const DEFAULT_PARAM = { value: 1, min: -10, max: 10 };
const SLIDER_LOOK = { accent: T.c.blue, border: T.border.mid, control: T.border.strong, value: T.c.slate, surface: T.bg.panel };

function startParams(given) {
  const out = {};
  for (const name of Object.keys(given || {})) {
    const g = given[name];
    const p = typeof g === 'number' ? { value: g } : (g || {});
    const value = Number.isFinite(p.value) ? p.value : 1;
    out[name] = { value, min: Math.min(Number.isFinite(p.min) ? p.min : -10, value), max: Math.max(Number.isFinite(p.max) ? p.max : 10, value) };
  }
  return out;
}
// a slider value with no more decimals than its range calls for
function tidy(v, min, max) {
  const dec = Math.max(0, Math.min(8, 3 - Math.ceil(Math.log10(Math.max(max - min, 1e-9)))));
  return Number(v.toFixed(dec));
}
const OVERLAYS_OFF = { fp: false, fpp: false, anti: false, inv: false };
const MARKS_OFF = { roots: false, extrema: false, inflect: false, asymp: false, tangent: false, area: false };
const ZOOM_ONLY = { zoom: true, home: true, equalScale: true, grid: false, axes: false, theme: false, fullscreen: false, export: false };
const NO_SPECIALS = { specialPoints: 'none' };
const NO_SELECT = { select: false, dragPoints: false };

const TAB_TITLES = {
  compare: ['Compare', 'f and g side by side'],
  properties: ['Properties', '10 aspects · excerpts · links out'],
  transforms: ['Transformations & ops', 'parent / shifts / scales / compose'],
  calculus: ['Calculus bridge', 'mention only · links to /calculus'],
  theory: ['Theory & reading', 'curated for this function']
};

function insightCards(data) {
  if (!data || data.error) return [];
  const cards = [{ id: 'domain', label: 'Domain', value: data.domain, sub: '' }];
  if (data.roots.length === 1) {
    cards.push({ id: 'roots', label: 'Root', value: data.roots[0].toFixed(3), sub: '' });
  } else if (data.roots.length > 1) {
    cards.push({ id: 'roots', label: 'Roots', value: `${data.roots.length} roots`, sub: data.roots.slice(0, 2).map(r => r.toFixed(2)).join(', ') });
  }
  if (data.extrema.length > 0) {
    const e = data.extrema[0];
    cards.push({ id: 'ext0', label: e.kind === 'min' ? 'Min' : 'Max', value: `(${e.x.toFixed(2)}, ${e.y.toFixed(2)})`, sub: '' });
  }
  cards.push({ id: 'parity', label: 'Symmetry', value: data.parity, sub: data.period.periodic ? `period ${data.period.label}` : '' });
  cards.push({ id: 'continuity', label: 'Continuity', value: data.continuous ? 'continuous' : 'has gaps', sub: '' });
  return cards;
}

export default function ExplorerShell(props) {
  const {
    initialExpression = '0.1x^2 - 2',
    initialParams,             // { a: 2 } or { a: { value: 2, min: -5, max: 5 } }
    analysisRange = [-10, 10],
    width = '100%',
    height = 820,
    theoryBase = '/functions',
    toolsBase = '/functions/visual-tools',
    calculusBase = '/calculus',
    calculatorBase = 'https://calc.learnmathclass.com',
    links,
    compareWith,               // a second function to open with, e.g. 'x + 2'; Compare is then on
    calculatorHref,            // address of a page with the Calculator shell
    linkParam = 'scene',       // name used in the address: …#scene=…; null to ignore links
    onSearch, onSettings, onCompare, onAnimate
  } = props;

  useEffect(() => { injectStyles(); }, []);

  // ---------- state ----------
  const [expression, setExpression] = useState(initialExpression);
  const [activeTab, setActiveTab] = useState('properties');
  const [density, setDensity] = useState('compact');
  const [viewMode, setViewMode] = useState('graph');
  const [overlays, setOverlays] = useState(OVERLAYS_OFF);
  const [marks, setMarks] = useState({ roots: true, extrema: true, inflect: false, asymp: false, tangent: true, area: false });
  const [cursorX, setCursorX] = useState(0);
  const [viewport, setViewport] = useState({ xMin: -10, xMax: 10, yMin: -10, yMax: 10 });
  const [pinned, setPinned] = useState([]);
  const [exportOpen, setExportOpen] = useState(false);
  const [paramState, setParamState] = useState(() => startParams(initialParams));   // name → { value, min, max }
  const [playing, setPlaying] = useState({});                                        // name → true
  const [animateOn, setAnimateOn] = useState(false);     // the bar of the moving point is open
  const [tripPlaying, setTripPlaying] = useState(false);
  const [tripSpeed, setTripSpeed] = useState(1);
  const [compareOn, setCompareOn] = useState(!!compareWith);
  const [expressionG, setExpressionG] = useState(compareWith || 'x');
  const directions = useRef({});
  const graphRef = useRef(null);
  const fs = useFullscreen();

  const toggleOverlay = useCallback(k => setOverlays(p => ({ ...p, [k]: !p[k] })), []);
  const toggleMark = useCallback(k => setMarks(p => ({ ...p, [k]: !p[k] })), []);
  const resetRail = useCallback(() => { setOverlays(OVERLAYS_OFF); setMarks(MARKS_OFF); }, []);
  const pin = useCallback(card => setPinned(prev => (prev.some(p => p.id === card.id) ? prev : [...prev, card])), []);
  const unpin = useCallback(id => setPinned(p => p.filter(x => x.id !== id)), []);
  const isPinned = useCallback(id => pinned.some(p => p.id === id), [pinned]);

  // ---------- the analysis: one result for panels and graph ----------
  const a0 = analysisRange[0], a1 = analysisRange[1];
  // the letters of the expression that are parameters, and their values
  // (with Compare on, the letters of g as well)
  const names = useMemo(() => {
    const r = readFunction(expression);
    const list = r.error ? [] : [...r.parameters];
    if (compareOn) {
      const rg = readFunction(expressionG);
      if (!rg.error) for (const n of rg.parameters) if (!list.includes(n)) list.push(n);
    }
    return list;
  }, [expression, compareOn, expressionG]);
  const namesKey = names.join(',');
  const values = useMemo(() => {
    const v = {};
    for (const n of names) v[n] = (paramState[n] || DEFAULT_PARAM).value;
    return v;
  }, [namesKey, paramState]); // eslint-disable-line react-hooks/exhaustive-deps
  const data = useMemo(() => analyzeFunction(expression, { xMin: a0, xMax: a1, params: values }), [expression, a0, a1, values]);
  const ok = !data.error;
  // While the text cannot be read (half typed, say) the panels keep the
  // last function that could, dimmed; they never receive an error.
  const lastGood = useRef(null);
  if (ok) lastGood.current = data;
  const shown = ok ? data : lastGood.current;

  // ---------- Compare: a second function g ----------
  const dataG = useMemo(
    () => (compareOn && expressionG.trim() ? analyzeFunction(expressionG, { xMin: a0, xMax: a1, params: values }) : null),
    [compareOn, expressionG, a0, a1, values]
  );
  const okG = !!dataG && !dataG.error;
  const lastGoodG = useRef(null);
  if (okG) lastGoodG.current = dataG;
  if (!compareOn) lastGoodG.current = null;
  const shownG = okG ? dataG : lastGoodG.current;
  const toggleCompare = useCallback(() => {
    setActiveTab(t => (compareOn ? (t === 'compare' ? 'properties' : t) : 'compare'));
    setCompareOn(!compareOn);
    if (onCompare) onCompare();
  }, [compareOn, onCompare]);

  const cursorY = ok ? valueAt(data, cursorX) : null;
  const cursor = useMemo(() => ({ x: cursorX, y: cursorY === null ? 0 : cursorY }), [cursorX, cursorY]);

  // ---------- the scene the graph draws ----------
  const [doc, setDoc] = useState(() => createScene({
    expressions: [{ id: 'f', text: initialExpression, color: T.c.blue }],
    view: FIRST_VIEW,
    authoring: { title: 'Function Explorer' }
  }));
  const docRef = useRef(doc); docRef.current = doc;
  // rows: one unseen "a = 2" per parameter, then the function itself
  useEffect(() => {
    const rows = names.map(n => ({ id: 'p_' + n, text: `${n} = ${numberText(values[n])}`, lock: 'hidden-row' }));
    rows.push({ id: 'f', text: expression, color: T.c.blue });
    if (okG) rows.push({ id: 'g', text: expressionG, color: COMPARE_COLOR });
    setDoc(d => {
      const same = d.expressions.length === rows.length && d.expressions.every((e, i) => e.id === rows[i].id && e.text === rows[i].text);
      return same ? d : { ...d, expressions: rows };
    });
  }, [expression, values, okG, expressionG]); // eslint-disable-line react-hooks/exhaustive-deps

  // ---------- sliders ----------
  const setParam = useCallback((name, patch) => {
    setParamState(prev => {
      const cur = prev[name] || DEFAULT_PARAM;
      const next = { ...cur, ...patch };
      if (!(next.max > next.min)) return prev;
      next.value = Math.min(next.max, Math.max(next.min, next.value));
      return { ...prev, [name]: next };
    });
  }, []);

  // animation, by elapsed time
  const anyPlaying = names.some(n => playing[n]);
  useEffect(() => {
    if (!anyPlaying) return undefined;
    let raf = 0, last = performance.now();
    const tick = now => {
      const dt = Math.min(0.1, (now - last) / 1000); last = now;
      setParamState(prev => {
        const next = { ...prev };
        for (const n of names) {
          if (!playing[n]) continue;
          const p = prev[n] || DEFAULT_PARAM;
          const dir = directions.current[n] ?? 1;
          let v = p.value + dir * (p.max - p.min) * (dt / SECONDS_PER_SWEEP);
          if (v >= p.max) { v = p.max; directions.current[n] = -1; }
          else if (v <= p.min) { v = p.min; directions.current[n] = 1; }
          next[n] = { ...p, value: v };
        }
        return next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [anyPlaying, playing, namesKey]); // eslint-disable-line react-hooks/exhaustive-deps

  // The first time the size of the graph is known, the view is set so
  // that it shows −10 … 10 across, same scale on both axes.
  const homeView = useRef(FIRST_VIEW);
  const fitted = useRef(false);
  const onViewport = useCallback(b => {
    setViewport(v => (v.xMin === b.xMin && v.xMax === b.xMax && v.yMin === b.yMin && v.yMax === b.yMax ? v : b));
    if (!fitted.current) {
      fitted.current = true;
      const W = (b.xMax - b.xMin) / docRef.current.view.ux;
      if (W > 0) {
        const u = (2 * START_HALF_WIDTH) / W;
        homeView.current = { cx: 0, cy: 0, ux: u, uy: u };
        setDoc(d => ({ ...d, view: homeView.current }));
      }
    }
  }, []);

  // while the point travels by itself the mouse does not move it
  const tripRef = useRef(false); tripRef.current = tripPlaying;
  const onHover = useCallback(p => { if (p && !tripRef.current) setCursorX(p.x); }, []);

  // ---------- Animate: a point that travels along the graph ----------
  // It is the cursor, moved by the clock: the tangent, the panels and
  // the status bar follow it as they follow the mouse.
  const viewportRef = useRef(viewport); viewportRef.current = viewport;
  const toggleAnimate = useCallback(() => {
    if (!animateOn) { setCursorX(viewportRef.current.xMin); setTripPlaying(true); }
    else setTripPlaying(false);
    setAnimateOn(!animateOn);
    if (onAnimate) onAnimate();
  }, [animateOn, onAnimate]);
  useEffect(() => {
    if (!tripPlaying) return undefined;
    let raf = 0, last = performance.now();
    const tick = now => {
      const dt = Math.min(0.1, (now - last) / 1000); last = now;
      const { xMin, xMax } = viewportRef.current;
      setCursorX(x => {
        const next = x + (xMax - xMin) * dt * tripSpeed / SECONDS_PER_TRIP;
        return next > xMax || next < xMin ? xMin : next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [tripPlaying, tripSpeed]);

  // ---------- arriving by a link, leaving by a link ----------
  // Read after the first render, so the server and the browser start
  // from the same page.
  useEffect(() => {
    if (!linkParam || typeof window === 'undefined') return;
    const scene = readSceneHash(window.location.hash, linkParam);
    if (!scene) return;
    try { window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search); } catch { /* address stays as it is */ }
    const picked = pickFunction(scene);
    if (!picked) return;
    setParamState(prev => ({ ...prev, ...picked.params }));
    setExpression(picked.text);
    fitted.current = true;            // the link's view is used, not the opening one
    homeView.current = scene.view;
    setDoc(d => ({ ...d, view: scene.view }));
  }, [linkParam]);

  // The calculator gets the function as a named row with its sliders, at the view shown here.
  const calculatorLink = useMemo(() => {
    if (!calculatorHref || !ok) return null;
    const text = /=/.test(expression) ? expression : `f(x) = ${expression}`;
    const params = {};
    for (const n of names) params[n] = paramState[n] || DEFAULT_PARAM;
    const rows = functionRows(text, params);
    if (okG) rows.push({ text: /=/.test(expressionG) ? expressionG : `g(x) = ${expressionG}` });
    return calculatorHref + sceneHash({ expressions: rows, view: doc.view }, linkParam || 'scene');
  }, [calculatorHref, ok, expression, doc.view, linkParam, namesKey, paramState, okG, expressionG]); // eslint-disable-line react-hooks/exhaustive-deps

  // ---------- extra curves: f′, f″, F, f⁻¹ ----------
  const antiF = useMemo(() => (ok && overlays.anti ? antiderivative(data) : null), [ok, data, overlays.anti]);
  const curves = useMemo(() => {
    if (!ok) return [];
    const list = [];
    if (overlays.fp) list.push({ id: 'fp', f: data.fnPrime, color: T.c.slate, width: 1.5 });
    if (overlays.fpp) list.push({ id: 'fpp', f: data.fnDoublePrime, color: T.c.slateD, width: 1.4 });
    if (overlays.anti) list.push({ id: 'anti', f: antiF, color: T.c.blueL, width: 1.4 });
    if (overlays.inv && data.injective) list.push({ id: 'inv', type: 'curveY', g: data.fn, color: T.c.blueD, width: 1.4 });
    return list;
  }, [ok, data, overlays, antiF]);

  // ---------- markers, tangent, shaded area ----------
  const found = useMemo(() => markersIn(data, viewport.xMin, viewport.xMax), [data, viewport.xMin, viewport.xMax]);

  // where f and g meet, and which is higher, in the window shown
  const compared = useMemo(
    () => (ok && okG ? compareFunctions(data.fn, dataG.fn, viewport.xMin, viewport.xMax) : null),
    [ok, okG, data, dataG, viewport.xMin, viewport.xMax]
  );
  const lastCompared = useRef(null);
  if (compared) lastCompared.current = compared;
  if (!compareOn) lastCompared.current = null;
  const compareCursor = useMemo(() => ({
    x: cursorX,
    f: ok ? valueAt(data, cursorX) : null,
    g: okG ? valueAt(dataG, cursorX) : null
  }), [cursorX, ok, okG, data, dataG]);

  const annotations = useMemo(() => {
    if (!ok) return [];
    const list = [];
    if (marks.area) {
      let from, to;
      if (data.roots.length >= 2) { from = data.roots[0]; to = data.roots[1]; }
      else { const span = viewport.xMax - viewport.xMin; from = viewport.xMin + span * 0.3; to = viewport.xMin + span * 0.7; }
      list.push({ type: 'polygon', points: areaPolygon(data, from, to), color: T.c.blue, opacity: 0.15, stroke: 'rgba(59, 130, 246, 0.45)' });
    }
    if (marks.asymp) {
      for (const x of found.asymptotes) list.push({ type: 'vline', x, dashed: true, color: T.c.slateD, width: 1.25 });
      for (const h of data.horizAsymptotes) list.push({ type: 'hline', y: h.y, dashed: true, color: T.c.slateD, width: 1.25 });
    }
    if (marks.tangent && cursorY !== null) {
      const slope = data.fnPrime(cursorX);
      if (Number.isFinite(slope)) {
        list.push({ type: 'line', x: cursorX, y: cursorY, slope, dashed: true, color: T.c.slateD, width: 1.5 });
        list.push({ type: 'point', x: cursorX, y: cursorY, style: 'solid', color: T.c.slateD, radius: 3, width: 1 });
      }
    }
    if (animateOn && cursorY !== null) {
      list.push({ type: 'vline', x: cursorX, dashed: true, color: T.border.strong, width: 1 });
      list.push({ type: 'point', x: cursorX, y: cursorY, style: 'solid', color: T.c.blueD, radius: 5, width: 1.5 });
    }
    if (marks.inflect) for (const p of found.inflections) list.push({ type: 'point', x: p.x, y: p.y, color: T.c.slate });
    if (marks.extrema) for (const p of found.extrema) list.push({ type: 'point', x: p.x, y: p.y, color: T.c.slateD });
    if (marks.roots) for (const p of found.roots) list.push({ type: 'point', x: p.x, y: p.y, color: T.c.blueD });
    if (compared) for (const p of compared.crossings) list.push({ type: 'point', x: p.x, y: p.y, style: 'solid', color: COMPARE_COLOR, radius: 4, width: 1.5 });
    return list;
  }, [ok, data, found, marks, cursorX, cursorY, viewport.xMin, viewport.xMax, compared, animateOn]);

  // ---------- legend: which curve is which ----------
  const legend = useMemo(() => {
    if (!ok) return [];
    const rows = [{ id: 'f', color: T.c.blue, tex: data.formulaTex ? `f(x)=${data.formulaTex}` : null, text: `f(x) = ${data.formula}` }];
    if (overlays.fp) rows.push({ id: 'fp', color: T.c.slate, tex: data.derivTex ? `f'(x)=${data.derivTex}` : "f'(x)", text: "f'(x)" });
    if (overlays.fpp) rows.push({ id: 'fpp', color: T.c.slateD, tex: data.deriv2Tex ? `f''(x)=${data.deriv2Tex}` : "f''(x)", text: "f''(x)" });
    if (overlays.anti && antiF) rows.push({ id: 'anti', color: T.c.blueL, tex: `F(x)=\\int_{${+antiF.from.toFixed(2)}}^{x} f(t)\\,dt`, text: 'F(x)' });
    if (overlays.inv && data.injective) rows.push({ id: 'inv', color: T.c.blueD, tex: 'f^{-1}(x)', text: 'inverse' });
    if (okG) rows.push({ id: 'g', color: COMPARE_COLOR, tex: dataG.formulaTex ? `g(x)=${dataG.formulaTex}` : null, text: `g(x) = ${dataG.formula}` });
    return rows;
  }, [ok, data, overlays, antiF, okG, dataG]);

  // ---------- links and context for the panels ----------
  const resolvedLinks = useMemo(
    () => mergeLinks(buildDefaultLinks({ theoryBase, toolsBase, calculusBase, calculatorBase }), links),
    [theoryBase, toolsBase, calculusBase, calculatorBase, links]
  );
  const ctxValue = useMemo(() => ({
    pin, unpin, isPinned, density,
    routes: { theoryBase, toolsBase, calculusBase, calculatorBase },
    links: resolvedLinks
  }), [pin, unpin, isPinned, density, theoryBase, toolsBase, calculusBase, calculatorBase, resolvedLinks]);

  const openExport = useCallback(() => { setViewMode('graph'); setExportOpen(true); }, []);
  const closeExport = useCallback(() => setExportOpen(false), []);

  const modeLabel = viewMode === 'graph' ? 'graph · pan/zoom' : viewMode === 'table' ? 'numeric table' : 'mapping diagram';
  const [tabTitle, tabSubtitle] = TAB_TITLES[activeTab] || [activeTab, ''];
  const full = fs.isFull;

  return (
    <FullscreenFrame fs={fs}>
      <ExplorerContext.Provider value={ctxValue}>
        <div
          className="gs-explorer"
          style={{
            background: T.bg.panel,
            border: full ? 'none' : `1px solid ${T.border.soft}`,
            borderRadius: full ? 0 : T.radius.lg,
            boxShadow: full ? 'none' : T.shadow.s2,
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gridTemplateRows: `${T.height.header}px ${T.height.funcbar}px auto minmax(0, 1fr) ${T.height.insights}px ${T.height.status}px`,
            width: full ? '100%' : width,
            height: full ? '100%' : height,
            maxHeight: full ? 'none' : 'calc(100vh - 40px)',
            boxSizing: 'border-box',
            fontFamily: T.font.sans,
            fontSize: 13,
            color: T.text.body
          }}
        >
          <Header
            brandName="Function Explorer"
            formula={!ok ? '(invalid)' : data.formulaTex ? <span style={{ fontSize: 13 }}><Tex tex={`\\displaystyle ${data.formulaTex}`} /></span> : data.formula}
            formulaLabel={ok ? 'f(x) =' : 'error'}
            onSearch={onSearch}
            onSettings={onSettings}
            onExport={openExport}
            onMaximize={fs.toggle}
          />

          <Funcbar
            expression={expression}
            onExpressionChange={setExpression}
            family={ok ? data.family : null}
            onCompare={toggleCompare}
            compareOn={compareOn}
            onAnimate={toggleAnimate}
            animateOn={animateOn}
            calculatorLink={calculatorLink}
          />

          {/* this row of the layout holds the g(x) box (while comparing) and the sliders */}
          <div style={{ minWidth: 0 }}>
          {compareOn && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '6px 14px', borderBottom: `1px solid ${T.border.soft}`, background: T.bg.panel, overflow: 'hidden' }}>
              <span className="gs-fb-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: T.font.mono, fontSize: 10, textTransform: 'uppercase', color: T.text.faint, letterSpacing: '0.08em', flexShrink: 0 }}>
                <span style={{ width: 14, height: 0, borderTop: `2px solid ${COMPARE_COLOR}` }} />compare with
              </span>
              <span style={{ fontSize: 13, color: COMPARE_COLOR, flexShrink: 0 }}><Tex tex="g(x)=" /></span>
              <div style={{ flex: '1 1 110px', minWidth: 110, display: 'flex', alignItems: 'center', minHeight: 30, boxSizing: 'border-box', padding: '0 10px', background: T.bg.subtle, border: `1px solid ${dataG && dataG.error ? COMPARE_COLOR : T.border.soft}`, borderRadius: T.radius.sm }}>
                <MathInput value={expressionG} onChange={setExpressionG} ariaLabel="Second function of x, to compare with" placeholder="type a second function of x" fontSize={15} color={T.text.strong} accent={COMPARE_COLOR} />
              </div>
              {okG && <span className="gs-fb-family" style={{ display: 'inline-flex', alignItems: 'center', padding: '3px 9px', background: T.bg.subtle, border: `1px solid ${T.border.mid}`, borderRadius: 999, fontSize: 11.5, fontWeight: 500, color: COMPARE_COLOR, flexShrink: 0 }}>{dataG.family}</span>}
              <button type="button" onClick={toggleCompare} title="Stop comparing" aria-label="Stop comparing"
                style={{ width: 26, height: 26, minWidth: 0, padding: 0, flexShrink: 0, border: `1px solid ${T.border.mid}`, borderRadius: T.radius.sm, background: '#fff', color: T.text.muted, cursor: 'pointer', fontSize: 14, lineHeight: 1 }}>×</button>
            </div>
          )}
          {animateOn && (() => {
            const slope = ok ? data.fnPrime(cursorX) : NaN;
            const two = v => (v === null || !Number.isFinite(v) ? '\\text{—}' : v.toFixed(2));
            const round = { width: 26, height: 26, minWidth: 0, padding: 0, flexShrink: 0, boxSizing: 'border-box', border: `1px solid ${T.border.strong}`, background: '#fff', color: T.text.body, cursor: 'pointer', lineHeight: 1 };
            return (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 14px', borderBottom: `1px solid ${T.border.soft}`, background: T.bg.panel, overflow: 'hidden' }}>
                <span className="gs-fb-label" style={{ fontFamily: T.font.mono, fontSize: 10, textTransform: 'uppercase', color: T.text.faint, letterSpacing: '0.08em', flexShrink: 0 }}>moving point</span>
                <button type="button" onClick={() => setTripPlaying(p => !p)} title={tripPlaying ? 'Pause' : 'Play'} aria-label={tripPlaying ? 'Pause the moving point' : 'Play the moving point'} aria-pressed={tripPlaying}
                  style={{ ...round, borderRadius: '50%', fontSize: 10, background: tripPlaying ? T.c.blue : '#fff', color: tripPlaying ? '#fff' : T.text.body, borderColor: tripPlaying ? T.c.blue : T.border.strong }}>
                  {tripPlaying ? '❚❚' : '▶'}
                </button>
                <input type="range" aria-label="Where the point is, along x" min={viewport.xMin} max={viewport.xMax} step="any"
                  value={Math.min(viewport.xMax, Math.max(viewport.xMin, cursorX))}
                  onChange={ev => { setTripPlaying(false); setCursorX(+ev.target.value); }}
                  style={{ flex: '1 1 80px', minWidth: 80, margin: 0, accentColor: T.c.blue }} />
                <button type="button" onClick={() => setTripSpeed(s => TRIP_SPEEDS[(TRIP_SPEEDS.indexOf(s) + 1) % TRIP_SPEEDS.length])} title="Speed" aria-label={`Speed ${tripSpeed} times; press to change`}
                  style={{ ...round, width: 40, borderRadius: T.radius.sm, fontFamily: T.font.mono, fontSize: 11 }}>
                  {tripSpeed}×
                </button>
                <span className="gs-fb-family" style={{ display: 'inline-flex', gap: 14, fontSize: 12.5, color: T.text.strong, flexShrink: 0, whiteSpace: 'nowrap' }}>
                  <span style={{ minWidth: 64 }}><Tex tex={`x=${two(cursorX)}`} /></span>
                  <span style={{ minWidth: 84 }}><Tex tex={`f(x)=${two(cursorY)}`} /></span>
                  <span style={{ minWidth: 88 }}><Tex tex={`f'(x)=${two(slope)}`} /></span>
                </span>
                <button type="button" onClick={toggleAnimate} title="Stop the animation" aria-label="Close the moving point"
                  style={{ ...round, borderRadius: T.radius.sm, color: T.text.muted, borderColor: T.border.mid, fontSize: 14 }}>×</button>
              </div>
            );
          })()}
          <div className="gs-explorer-params" style={names.length ? { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 22px', padding: '7px 14px', borderBottom: `1px solid ${T.border.soft}`, background: T.bg.panel } : { height: 0, overflow: 'hidden' }}>
            <span style={{ fontFamily: T.font.mono, fontSize: 10, textTransform: 'uppercase', color: T.text.faint, letterSpacing: '0.08em' }}>parameters</span>
            {names.map(n => {
              const p = paramState[n] || DEFAULT_PARAM;
              const shown = tidy(p.value, p.min, p.max);
              return (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: '1 1 250px', maxWidth: 360, minWidth: 0 }}>
                  <span style={{ fontSize: 13, color: T.text.strong, whiteSpace: 'nowrap', minWidth: 62 }}>
                    <Tex tex={`${n.replace(/_(.+)$/, '_{$1}')}=${shown}`} />
                  </span>
                  <SliderControl
                    label={n} value={p.value} min={p.min} max={p.max} playing={!!playing[n]} look={SLIDER_LOOK}
                    onChange={v => setParam(n, { value: tidy(v, p.min, p.max) })}
                    onRange={r => setParam(n, r)}
                    onPlay={() => setPlaying(pl => ({ ...pl, [n]: !pl[n] }))}
                    style={{ flex: 1, minWidth: 0 }}
                  />
                </div>
              );
            })}
          </div>
          </div>

          <div className="gs-explorer-body" style={{ display: 'grid', gridTemplateColumns: `${T.width.rail}px minmax(0, 1fr) ${T.width.rtabs}px ${T.width.rpanel}px`, minHeight: 0, borderBottom: `1px solid ${T.border.soft}` }}>
            <LeftRail
              overlays={overlays}
              annotations={marks}
              onToggleOverlay={toggleOverlay}
              onToggleAnnot={toggleMark}
              onReset={resetRail}
              invDisabled={!ok || !data.injective}
            />

            <div style={{ position: 'relative', background: T.bg.graph, overflow: 'hidden', minWidth: 0, minHeight: 0 }}>
              <GraphViewSwitch value={viewMode} onChange={setViewMode} />

              {viewMode === 'graph' && ok && (
                <>
                  <Graph
                    ref={graphRef}
                    scene={doc} onSceneChange={setDoc}
                    theme={GRAPH_THEME}
                    curves={curves}
                    annotations={annotations}
                    overlays={NO_SPECIALS}
                    interaction={NO_SELECT}
                    onHover={onHover}
                    onViewport={onViewport}
                    ariaLabel={okG ? `Graphs of f(x) = ${data.formula} and g(x) = ${dataG.formula}` : `Graph of f(x) = ${data.formula}`}
                    style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
                  />

                  <div style={{ position: 'absolute', left: 12, top: 44, maxWidth: '60%', padding: '8px 10px', background: 'rgba(255, 255, 255, 0.96)', border: `1px solid ${T.border.mid}`, borderRadius: 6, fontSize: 12.5, color: T.c.slateD, pointerEvents: 'none', display: 'grid', gap: 6 }}>
                    {legend.map(row => (
                      <div key={row.id} style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', overflow: 'hidden' }}>
                        <span style={{ width: 16, height: 0, borderTop: `2px solid ${row.color}`, flexShrink: 0 }} />
                        {row.tex ? <Tex tex={row.tex} /> : row.text}
                      </div>
                    ))}
                  </div>

                  <GraphToolbar
                    graphRef={graphRef} scene={doc} onSceneChange={setDoc} homeView={homeView.current}
                    controls={ZOOM_ONLY}
                    style={{ position: 'absolute', right: 10, bottom: 10, flexDirection: 'column', flexWrap: 'nowrap', gap: 4, padding: 4, border: `1px solid ${T.border.mid}`, borderRadius: T.radius.md, boxShadow: T.shadow.s1 }}
                  />
                </>
              )}

              {viewMode === 'table' && ok && <NumericTable fn={data.fn} xMin={viewport.xMin} xMax={viewport.xMax} />}
              {viewMode === 'map' && ok && <MappingDiagram fn={data.fn} xMin={viewport.xMin} xMax={viewport.xMax} />}

              {!ok && (
                <div role="alert" style={{ padding: '56px 24px 24px', color: T.text.muted, fontFamily: T.font.mono, fontSize: 12 }}>
                  {data.error}
                </div>
              )}
            </div>

            <RightTabs active={activeTab} onChange={setActiveTab} showCompare={compareOn} />

            <RightPanel title={tabTitle} subtitle={tabSubtitle} density={density} onDensityChange={setDensity}>
              {!shown && (
                <div style={{ padding: 16, fontSize: 12, color: T.text.muted }}>The properties appear here once the function can be read.</div>
              )}
              <div style={{ opacity: ok ? 1 : 0.45, display: shown ? 'block' : 'none' }}>
              {shown && activeTab === 'compare' && (
                <div style={{ opacity: okG || !shownG ? 1 : 0.45 }}>
                  <ComparePanel f={shown} g={shownG} result={compared || lastCompared.current || { same: false, crossings: [], intervals: [] }} cursor={compareCursor} viewport={viewport} />
                </div>
              )}
              {shown && activeTab === 'properties' && (
                <>
                  <AboutPanel data={shown} />
                  <DomainRangePanel data={shown} />
                  <ZerosPanel data={shown} />
                  <SymmetryPanel data={shown} />
                  <ContinuityPanel data={shown} />
                  <AsymptotesPanel data={shown} />
                  <MonotonicityPanel data={shown} />
                  <ConcavityPanel data={shown} />
                  <BoundednessPanel data={shown} />
                  <InvertibilityPanel data={shown} />
                </>
              )}
              {shown && activeTab === 'transforms' && (
                <>
                  <ParentTransformsPanel data={shown} />
                  <OperationsPanel data={shown} />
                </>
              )}
              {shown && activeTab === 'calculus' && (
                <>
                  <DerivativePanel data={shown} cursor={cursor} />
                  <SecondDerivativePanel data={shown} />
                  <AntiderivativePanel data={shown} viewport={viewport} />
                  <TangentApproxPanel data={shown} cursor={cursor} />
                </>
              )}
              {shown && activeTab === 'theory' && <TheoryReadingList data={shown} />}
              </div>
            </RightPanel>
          </div>

          <InsightsStrip defaults={insightCards(shown)} pinned={pinned} onUnpin={unpin} />

          <StatusBar cursor={cursor} viewport={viewport} mode={modeLabel} />

          <ExportModal open={exportOpen} onClose={closeExport} graphRef={graphRef} scene={doc} fileName="function-explorer" />

          <style jsx>{`
            /* a narrow screen keeps the room for typing the function */
            @media (max-width: 600px) {
              .gs-explorer :global(.gs-fb-label),
              .gs-explorer :global(.gs-fb-family) {
                display: none !important;
              }
            }
            /* …and the buttons of the first row go under the box */
            @media (max-width: 600px) {
              .gs-explorer :global(.gs-fb) {
                flex-wrap: wrap;
                row-gap: 6px;
                padding-top: 6px !important;
                padding-bottom: 6px !important;
              }
              .gs-explorer :global(.gs-fb-buttons) {
                flex-wrap: wrap;
                justify-content: flex-end;
                flex-shrink: 1 !important;
              }
            }
            @media (max-width: 900px) {
              .gs-explorer {
                height: auto !important;
                max-height: none !important;
                grid-template-rows: auto auto auto auto auto auto !important;
              }
              .gs-explorer-body {
                grid-template-columns: ${T.width.rail}px minmax(0, 1fr) !important;
                grid-template-rows: 380px auto;
              }
            }
          `}</style>
        </div>
      </ExplorerContext.Provider>
    </FullscreenFrame>
  );
}
