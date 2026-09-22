'use client';

import React, { useState, useMemo, useRef, useCallback, useLayoutEffect, useEffect } from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import { fillTokens } from '@/app/utils/propsProcessor';

/* ============================================================
   ColumnPictureVisualizer

   Av read as a combination of the columns of A. Fill the bracket
   one term at a time by the definition, then regroup the same six
   products by column instead of by row.

   ------------------------------------------------------------
   ENCODING TABLE. Nothing in this component may break it.

     colour            which object a thing belongs to
                         blue  #1450c8  A, and anything built from A
                         amber #b45309  v, and the scalars taken from v

     opacity           whether it is active in this step
                         1     active
                         .35   same object, resting

     tint background   active, and this is the thing being argued about

     arrow, algebra    a number travelling to the place it multiplies.
                       takes the colour of the number that travels:
                       blue leaves A, amber leaves v.

     arrow, diagram    a piece of the answer. always blue: every piece
                       is a scaled column of A. v never appears as an
                       arrow, only as the length it chose. a label
                       v-sub-j c-sub-j keeps both colours, because the
                       piece is an amber number times a blue column.

     dashed line       a coordinate that is known. the answer lies on
                       it. two crossing lines fix the point; only then
                       is there a vector to draw.

     double bracket    the assembled answer

     navy --nav        SITE CHROME ONLY: buttons, pips, focus rings,
                       headings, the info strip. brand colour, carries
                       no meaning about A or v, never touches a number,
                       a bracket or an arrow inside the figures.

     ink / grey / rule are structure only. They never mean A or v.

   ------------------------------------------------------------
   LAYOUT RULES
     1. No scrollbars. Anywhere.
     2. The control bar sits at the same y on every step, so each
        changing region has a fixed height, not a min-height.
     3. The diagram fills its box. Its viewBox is measured from the
        container in real pixels, so there is no fixed aspect ratio
        to letterbox and no white margin around the plot. Bounds,
        scale, tick spacing and label placement all derive from the
        data.
     Heights release below 1180px, where the columns stack.

   ------------------------------------------------------------
   NUMBER RULES — for the figure, not for the algebra.
     No weight and no column may be zero: a zero collapses an arrow
     to a point, which has no direction to draw and no segment to
     label. Enforced at generation, not filtered afterwards.

   ------------------------------------------------------------
   CONTENT
     Every string is a prop, normally supplied by getStaticProps.
     DEFAULT_CONTENT below exists so a missing prop cannot crash
     the component — it is a fallback, not the intended source.

     Static copy goes straight to processContent. The per-step
     strings cannot: they need values that only exist at runtime
     (which term is active, what a cell holds, what came out of
     Generate random). Those run through fillTokens first, which
     swaps {tokens} for the numbers on screen. Token list is at
     DEFAULT_CONTENT.

   ------------------------------------------------------------
   STYLING
     Scoped <style jsx> at the bottom. Every helper below is a local
     arrow function inside this component on purpose: JSX built in a
     separate top-level component would fall outside the style scope
     and lose its classes.
   ============================================================ */

const CA = '#1450c8';
const CV = '#b45309';
const CD = '#0b2f77';

const DEFAULT_MATRIX = [[2, -1, 3], [1, 2, 0]];
const DEFAULT_VECTOR = [2, 1, 3];

/*  stage map
      0          empty bracket
      1 .. 6     one term at a time: (i,k) = (0,0)(0,1)(0,2)(1,0)(1,1)(1,2)
      7 .. 9     read down: column 0, 1, 2 — each also lands below
      10         the summary: the general statement
      11         multiplied through and added                      */
const MAX_STAGE = 11;

/* tokens that expand to markup rather than to a value */
const SYMBOLS = {
  A: '$\\textcolor{#1450c8}{A}$',
  v: '$\\textcolor{#b45309}{v}$',
};

/* ------------------------------------------------------------
   FALLBACK COPY

   Dynamic strings take these tokens:
     {A} {v}        the two symbols, in their encoding colours
     {i}            1-based index of the entry being built
     {j}            1-based index of the term / column in play
     {aij}          the entry of A feeding this term
     {vj}           the weight feeding this term
     {ca} {cb}      the two numbers of column j
     {entry}        the finished value of entry i
     {x} {y}        the two numbers of the finished answer
     {rows} {cols}  the shape of A

   A value may also be a (vars, symbols) => string function.
   ------------------------------------------------------------ */
export const DEFAULT_CONTENT = {
  heading: 'From the definition to the columns',

  intro:
    'Nothing here is a new rule. Fill the {A}{v} bracket one term at a time by the plain ' +
    'definition, then read its terms downwards instead of across. Each vertical pair shares one ' +
    'entry of {v}, and the two numbers it multiplies are a column of {A} — which is the whole ' +
    'reason a column scales as one piece.',

  legendA: '{A}, and anything built from it',
  legendV: '{v}, and the scalars taken from it',

  figureTitle: 'In the plane',

  generalNote:
    '$\\textcolor{#1450c8}{c_j}$ is column $j$ of {A}, a vector in its own right. ' +
    '$\\textcolor{#b45309}{v_j}$ is entry $j$ of {v}, a single number. ' +
    'Three fixed directions, three amounts.',

  buttons: {
    back: 'Back',
    run: 'Run',
    pause: 'Pause',
    step: 'Step',
    reset: 'Reset',
    random: 'Generate random numbers',
    stepsLabel: 'Steps',
    stepLabel: 'Step',
  },

  narration: {
    setup:
      'The bracket on the right is empty. By the definition, entry $i$ of {A}{v} is row $i$ of ' +
      '{A} paired term by term with {v}. Six products in all, one per step — press Run.',

    term:
      'Term {j} of entry {i}. Row {i}, column {j} of {A} is {aij}; entry {j} of {v} is {vj}. ' +
      'Both travel to the same slot in the bracket.',

    termComplete:
      'Term {j} of entry {i}. Row {i}, column {j} of {A} is {aij}; entry {j} of {v} is {vj}. ' +
      'Entry {i} is complete: **{entry}**.',

    regroup:
      'Stop reading across. Read **down**. Both term {j}s carry the same scalar, ' +
      '$\\textcolor{#b45309}{v_j}$ = {vj}, because the definition pairs every row of {A} with ' +
      'the same entry of {v}. The two numbers that scalar multiplies, {ca} and {cb}, are exactly ' +
      'column {j} of {A} — so {vj} comes out in front of the whole column, and that column drops ' +
      'below as one piece.',

    summary:
      'Read the line above as a sentence. {A}{v} is built from the columns of {A} and nothing ' +
      'else; {v} contributes no direction at all, only three numbers saying how much of each ' +
      'column to take. Nothing was added to the definition to get here — the same six products ' +
      'were grouped by column instead of by row.',

    compute:
      'Now carry out each product and add. Three {rows}-entry columns give one {rows}-entry ' +
      'answer, so the bracket collapses to {A}{v} = ({x}, {y}) — the same numbers the ' +
      'row-by-row route produced.',
  },

  figure: {
    empty:
      'Nothing computed yet. The plane is empty because not one number of the answer exists.',

    xOnly:
      'The first entry fixes **x** and nothing else. Every point on this line has that x. The ' +
      'line sliding sideways as terms land is not motion — it is a number being corrected.',

    yPartial:
      'The second entry fixes **y**. Two lines, one crossing point — that is all a two-number ' +
      'bracket says. Still no vector: a point is not yet an arrow.',

    crossed:
      'Both lines are fixed, so they cross at one point and there is finally a vector. Look back ' +
      'at the route: **no step along the way was a real quantity**.',

    column:
      'Dashed from the origin is **column {j} of A on its own**. The solid arrow is that same ' +
      'column stretched by {vj}, moved so its tail sits on the end of the previous one. The ' +
      'direction never changes — only how far along it you go.',

    columnNegative:
      'Dashed from the origin is **column {j} of A on its own**. The solid arrow is that same ' +
      'column stretched by {vj}, moved so its tail sits on the end of the previous one. The ' +
      'direction never changes, and a negative weight sends you backwards along it.',

    summary:
      'Three arrows, each a column of **A** with its length chosen by **v**, laid end to end. ' +
      'Change **v** and they stretch or flip, but **the three directions are fixed by A and ' +
      'never move**.',

    compute:
      'The same endpoint the first route reached. The difference is that here **every ' +
      'intermediate point is a real vector** — a partial sum of columns.',
  },
};

/* ------------------------------------------------------------
   helpers with no JSX — safe outside the component
   ------------------------------------------------------------ */

function par(x) {
  return x < 0 ? `(${x})` : String(x);
}

function niceStep(span) {
  const rawStep = span / 7;
  const pow = Math.pow(10, Math.floor(Math.log(rawStep) / Math.LN10));
  const n = rawStep / pow;
  const m = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return Math.max(1, Math.round(m * pow));
}

function randInt(lo, hi) {
  return lo + Math.floor(Math.random() * (hi - lo + 1));
}

function randIntNonZero(lo, hi) {
  let n;
  do { n = randInt(lo, hi); } while (n === 0);
  return n;
}

function makeRandom(rows, cols) {
  let matrix = [];
  let vector = [];
  let tries = 0;

  for (;;) {
    tries += 1;

    matrix = [];
    for (let i = 0; i < rows; i += 1) matrix.push(new Array(cols).fill(0));
    vector = new Array(cols).fill(0);

    for (let j = 0; j < cols; j += 1) {
      /* every weight is non-zero */
      vector[j] = randIntNonZero(-3, 3);
      /* every column is a non-zero vector */
      let zeroColumn = true;
      while (zeroColumn) {
        for (let i = 0; i < rows; i += 1) matrix[i][j] = randInt(-3, 4);
        zeroColumn = matrix.every((row) => row[j] === 0);
      }
    }

    let sx = 0;
    let sy = 0;
    for (let j = 0; j < cols; j += 1) {
      sx += matrix[0][j] * vector[j];
      sy += matrix[1][j] * vector[j];
    }

    /* no scaled column may collapse to a point either */
    let collapsed = false;
    for (let j = 0; j < cols; j += 1) {
      if (matrix[0][j] * vector[j] === 0 && matrix[1][j] * vector[j] === 0) collapsed = true;
    }

    const tooBig = Math.abs(sx) > 15 || Math.abs(sy) > 13;
    const atOrigin = sx === 0 && sy === 0;

    if ((!tooBig && !atOrigin && !collapsed) || tries > 400) break;
  }

  return { matrix, vector };
}

/* ============================================================ */

export default function ColumnPictureVisualizer({
  matrix: matrixProp,
  vector: vectorProp,
  content: contentProp,
  showFigure = true,
  allowRandom = true,
  autoPlayMs = 1800,
  layout = 'stacked',
  /* Line 1: optional per-state sentences keyed by setup / term /
     termComplete / regroup / summary / compute, each normally ending in
     an on-page anchor. Additive — nothing passed, nothing appended. */
  explanations = null,
  className = '',
}) {
  /* pages normally pass the whole object from getStaticProps;
     the spread is only so a missing prop cannot crash the render */
  const copy = useMemo(() => ({
    ...DEFAULT_CONTENT,
    ...contentProp,
    buttons: { ...DEFAULT_CONTENT.buttons, ...(contentProp && contentProp.buttons) },
    narration: { ...DEFAULT_CONTENT.narration, ...(contentProp && contentProp.narration) },
    figure: { ...DEFAULT_CONTENT.figure, ...(contentProp && contentProp.figure) },
  }), [contentProp]);

  const [matrix, setMatrix] = useState(() =>
    (matrixProp || DEFAULT_MATRIX).map((row) => row.slice()));
  const [vector, setVector] = useState(() => (vectorProp || DEFAULT_VECTOR).slice());
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [figSize, setFigSize] = useState({ w: 426, h: 300 });
  const [arrows, setArrows] = useState([]);

  const rows = matrix.length;
  const cols = matrix[0].length;

  const figRef = useRef(null);
  const stageRef = useRef(null);
  const boardRef = useRef(null);
  const nodes = useRef({});
  const setNode = useCallback((key) => (el) => { nodes.current[key] = el; }, []);

  /* ---------------- derived ---------------- */

  const derived = useMemo(() => {
    const scaled = [];
    const cumulative = [[0, 0]];
    for (let j = 0; j < cols; j += 1) {
      scaled.push([matrix[0][j] * vector[j], matrix[1][j] * vector[j]]);
      cumulative.push([
        cumulative[j][0] + scaled[j][0],
        cumulative[j][1] + scaled[j][1],
      ]);
    }
    const termWidths = [];
    for (let j = 0; j < cols; j += 1) {
      let longest = 0;
      for (let i = 0; i < rows; i += 1) {
        longest = Math.max(longest, `${par(matrix[i][j])}\u00B7${vector[j]}`.length);
      }
      termWidths.push(longest * 9.5 + 12);
    }
    return { scaled, cumulative, final: cumulative[cols], termWidths };
  }, [matrix, vector, rows, cols]);

  const { scaled, cumulative, final, termWidths } = derived;

  const phase = useMemo(() => {
    if (stage === 0) return { p: 0 };
    if (stage <= rows * cols) {
      const d = stage - 1;
      return { p: 1, i: Math.floor(d / cols), k: d % cols };
    }
    if (stage <= rows * cols + cols) return { p: 2, j: stage - rows * cols - 1 };
    if (stage === MAX_STAGE) return { p: 4 };
    return { p: 3 };
  }, [stage, rows, cols]);

  const plot = useMemo(() => {
    const xs = [0];
    const ys = [0];
    for (let j = 0; j < cols; j += 1) { xs.push(matrix[0][j]); ys.push(matrix[1][j]); }
    for (let j = 0; j <= cols; j += 1) { xs.push(cumulative[j][0]); ys.push(cumulative[j][1]); }

    let xmin = Math.floor(Math.min(...xs)) - 1;
    let xmax = Math.ceil(Math.max(...xs)) + 1;
    let ymin = Math.floor(Math.min(...ys)) - 1;
    let ymax = Math.ceil(Math.max(...ys)) + 1;

    const ML = 34;
    const MR = 20;
    const MT = 16;
    const MB = 20;
    const availW = figSize.w - ML - MR;
    const availH = figSize.h - MT - MB;

    let unit = Math.min(availW / (xmax - xmin), availH / (ymax - ymin));

    /* spend the slack on range instead of on white margin */
    const extraX = Math.floor(availW / unit) - (xmax - xmin);
    const extraY = Math.floor(availH / unit) - (ymax - ymin);
    xmin -= Math.floor(extraX / 2);
    xmax += Math.ceil(extraX / 2);
    ymin -= Math.floor(extraY / 2);
    ymax += Math.ceil(extraY / 2);

    unit = Math.min(availW / (xmax - xmin), availH / (ymax - ymin));

    const usedW = (xmax - xmin) * unit;
    const usedH = (ymax - ymin) * unit;
    const ox = ML + (availW - usedW) / 2 - xmin * unit;
    const oy = MT + (availH - usedH) / 2 + ymax * unit;

    return { xmin, xmax, ymin, ymax, unit, ox, oy };
  }, [matrix, cumulative, cols, figSize]);

  const GX = useCallback((x) => plot.ox + x * plot.unit, [plot]);
  const GY = useCallback((y) => plot.oy - y * plot.unit, [plot]);

  /* ---------------- measure the figure box ---------------- */

  useLayoutEffect(() => {
    if (!showFigure) return undefined;
    const el = figRef.current;
    if (!el) return undefined;

    const measure = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w > 40 && h > 40) {
        setFigSize((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
      }
    };
    measure();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [showFigure]);

  /* ---------------- algebra arrows ---------------- */

  const recomputeArrows = useCallback(() => {
    const stageEl = stageRef.current;
    const boardEl = boardRef.current;
    if (!stageEl || !boardEl) return;
    if (phase.p !== 1 && phase.p !== 2) { setArrows([]); return; }

    const box = stageEl.getBoundingClientRect();
    const lane = boardEl.getBoundingClientRect().bottom - box.top - 22;

    const arc = (sourceKey, targetKey, dx, stroke) => {
      const src = nodes.current[sourceKey];
      const dst = nodes.current[targetKey];
      if (!src || !dst) return null;
      const sb = src.getBoundingClientRect();
      const db = dst.getBoundingClientRect();
      const x1 = sb.left + sb.width / 2 - box.left;
      const y1 = sb.bottom - box.top;
      const x2 = db.left + db.width / 2 - box.left + dx;
      const y2 = db.bottom - box.top + 2;
      return {
        d: `M${x1} ${y1} C${x1} ${lane} ${x2} ${lane} ${x2} ${y2}`,
        stroke,
        marker: stroke === CA ? 'cpv-head-a' : 'cpv-head-v',
      };
    };

    const next = [];
    if (phase.p === 1) {
      next.push(arc(`ac${phase.i}-${phase.k}`, `t${phase.i}-${phase.k}`, -13, CA));
      next.push(arc(`vc${phase.k}`, `t${phase.i}-${phase.k}`, 13, CV));
    } else {
      for (let i = 0; i < rows; i += 1) {
        next.push(arc(`vc${phase.j}`, `t${i}-${phase.j}`, 0, CV));
      }
    }
    setArrows(next.filter(Boolean).map((a, i) => ({ ...a, key: `arc-${i}` })));
  }, [phase, rows]);

  useLayoutEffect(() => {
    const id = requestAnimationFrame(recomputeArrows);
    return () => cancelAnimationFrame(id);
  }, [recomputeArrows, matrix, vector, figSize]);

  useEffect(() => {
    const onResize = () => recomputeArrows();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [recomputeArrows]);

  /* ---------------- playback ---------------- */

  useEffect(() => {
    if (!playing) return undefined;
    if (stage >= MAX_STAGE) { setPlaying(false); return undefined; }
    const id = setTimeout(() => setStage((s) => Math.min(MAX_STAGE, s + 1)), autoPlayMs);
    return () => clearTimeout(id);
  }, [playing, stage, autoPlayMs]);

  const goTo = useCallback((next) => {
    setPlaying(false);
    setStage(Math.max(0, Math.min(MAX_STAGE, next)));
  }, []);

  const toggleRun = useCallback(() => {
    setPlaying((was) => {
      if (was) return false;
      if (stage >= MAX_STAGE) setStage(0);
      return true;
    });
  }, [stage]);

  const regenerate = useCallback(() => {
    const next = makeRandom(rows, cols);
    setPlaying(false);
    setStage(0);
    setMatrix(next.matrix);
    setVector(next.vector);
  }, [rows, cols]);

  /* ---------------- copy ---------------- */

  const vars = useMemo(() => {
    const base = { rows, cols, x: final[0], y: final[1] };
    if (phase.p === 1) {
      return {
        ...base,
        i: phase.i + 1,
        j: phase.k + 1,
        aij: matrix[phase.i][phase.k],
        vj: vector[phase.k],
        entry: final[phase.i],
        ca: matrix[0][phase.k],
        cb: matrix[1][phase.k],
      };
    }
    if (phase.p === 2) {
      return {
        ...base,
        j: phase.j + 1,
        vj: vector[phase.j],
        ca: matrix[0][phase.j],
        cb: matrix[1][phase.j],
      };
    }
    return base;
  }, [phase, matrix, vector, final, rows, cols]);

  const say = useCallback((template) => fillTokens(template, vars, SYMBOLS), [vars]);

  /* Line 1: the state the figure is in, as one key — the same branches
     the narration already uses, named so explanations can be keyed by it. */
  const stateKey = useMemo(() => {
    if (phase.p === 0) return 'setup';
    if (phase.p === 1) return phase.k === cols - 1 ? 'termComplete' : 'term';
    if (phase.p === 2) return 'regroup';
    if (phase.p === 3) return 'summary';
    return 'compute';
  }, [phase, cols]);

  const narrationText = useMemo(() => {
    const n = copy.narration;
    const base = (() => {
      if (phase.p === 0) return say(n.setup);
      if (phase.p === 1) return say(phase.k === cols - 1 ? n.termComplete : n.term);
      if (phase.p === 2) return say(n.regroup);
      if (phase.p === 3) return say(n.summary);
      return say(n.compute);
    })();
    const extra = explanations && explanations[stateKey];
    return extra ? `${base} ${say(extra)}` : base;
  }, [copy, phase, cols, say, explanations, stateKey]);

  const figureText = useMemo(() => {
    const f = copy.figure;
    if (phase.p === 0) return say(f.empty);
    if (phase.p === 1) {
      if (phase.i === 0) return say(f.xOnly);
      return say(phase.k === cols - 1 ? f.crossed : f.yPartial);
    }
    if (phase.p === 2) return say(vector[phase.j] < 0 ? f.columnNegative : f.column);
    if (phase.p === 3) return say(f.summary);
    return say(f.compute);
  }, [copy, phase, cols, vector, say]);

  /* ---------------- local renderers ----------------
     These stay inside the component so scoped styles apply. */

  const symA = () => <span className="sym colA">A</span>;
  const symV = () => <span className="sym colV">v</span>;

  const labelVC = (j) => (
    <>
      <span className="sym colV">v</span>
      <sub className="colV">{j + 1}</sub>
      <span className="sym colA">c</span>
      <sub className="colA">{j + 1}</sub>
    </>
  );

  const svgLabelVC = (j) => (
    <>
      <tspan fill={CV} fontStyle="italic">v</tspan>
      <tspan fill={CV} fontSize="9" dy="3">{j + 1}</tspan>
      <tspan fill={CA} fontStyle="italic" dy="-3">c</tspan>
      <tspan fill={CA} fontSize="9" dy="3">{j + 1}</tspan>
    </>
  );

  const bracket = ({ kind, columns, minWidth, mini, wide, cells }) => (
    <div
      className={[
        'grid',
        kind === 'a' ? 'gridA' : kind === 'v' ? 'gridV' : 'gridOut',
        mini ? 'gridMini' : '',
        wide ? 'gridWide' : '',
      ].filter(Boolean).join(' ')}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(${minWidth}px, auto))` }}
    >
      <span className="cap capT" />
      <span className="cap capB" />
      {cells.map((cell, index) => (
        <b
          key={cell.key || index}
          ref={cell.nodeRef}
          className={[
            'cell',
            cell.live ? 'cellLive' : '',
            cell.rest ? 'cellRest' : '',
          ].filter(Boolean).join(' ')}
        >
          {cell.body}
        </b>
      ))}
    </div>
  );

  const operator = (glyph) => (
    <div className="op">
      <div className="opSp" />
      <div className="opGlyph">{glyph}</div>
      <div className="opSp2" />
    </div>
  );

  /* ---------------- the result bracket, which holds the derivation ---------------- */

  const termState = (i, j) => {
    if (phase.p === 0) return 'hidden';
    if (phase.p === 1) {
      if (i > phase.i) return 'hidden';
      if (i < phase.i) return 'rest';
      if (j < phase.k) return 'rest';
      if (j === phase.k) return 'live';
      return 'hidden';
    }
    if (phase.p === 2) return j === phase.j ? 'live' : 'rest';
    return 'shown';
  };

  const resultCellBody = (i) => {
    if (phase.p === 0 || (phase.p === 1 && i > phase.i)) {
      return (
        <span className="placeholder">
          ({symA()}{symV()})<sub>{i + 1}</sub>
        </span>
      );
    }
    if (phase.p === 4) return String(final[i]);

    const states = [];
    for (let j = 0; j < cols; j += 1) states.push(termState(i, j));

    return (
      <>
        {states.map((state, j) => (
          <React.Fragment key={`term-${i}-${j}`}>
            <span
              ref={setNode(`t${i}-${j}`)}
              className={[
                'term',
                state !== 'hidden' ? 'termShown' : '',
                state === 'rest' ? 'termRest' : '',
                state === 'live' ? 'termLive' : '',
              ].filter(Boolean).join(' ')}
              style={{ minWidth: `${termWidths[j]}px` }}
            >
              <span className="termA">{par(matrix[i][j])}</span>
              <span className="termDot">&middot;</span>
              <span className="termV">{vector[j]}</span>
            </span>
            {j < cols - 1 && (
              <span
                className={[
                  'plus',
                  state !== 'hidden' && states[j + 1] !== 'hidden' ? 'plusShown' : '',
                ].filter(Boolean).join(' ')}
              >
                +
              </span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  /* ---------------- board cells ---------------- */

  const aCells = [];
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const live =
        phase.p === 1 ? (i === phase.i && j === phase.k)
          : phase.p === 2 ? (j === phase.j)
            : false;
      aCells.push({
        key: `a-${i}-${j}`,
        body: matrix[i][j],
        live,
        rest: (phase.p === 1 || phase.p === 2) && !live,
        nodeRef: setNode(`ac${i}-${j}`),
      });
    }
  }

  const vCells = [];
  for (let j = 0; j < cols; j += 1) {
    const live =
      phase.p === 1 ? (j === phase.k)
        : phase.p === 2 ? (j === phase.j)
          : false;
    vCells.push({
      key: `v-${j}`,
      body: vector[j],
      live,
      rest: (phase.p === 1 || phase.p === 2) && !live,
      nodeRef: setNode(`vc${j}`),
    });
  }

  const rCells = [];
  for (let i = 0; i < rows; i += 1) {
    rCells.push({ key: `r-${i}`, body: resultCellBody(i), live: phase.p === 4 });
  }

  /* ---------------- factored line ---------------- */

  const factoredUpto = phase.p === 2 ? phase.j : cols - 1;
  const factoredGroups = [];

  if (phase.p >= 2) {
    for (let j = 0; j <= factoredUpto; j += 1) {
      const dim = phase.p === 2 && j !== phase.j ? 0.4 : 1;
      if (j > 0) {
        factoredGroups.push(
          <span key={`fplus-${j}`} className="fglyph" style={{ opacity: dim }}>+</span>,
        );
      }
      factoredGroups.push(
        <span key={`fg-${j}`} className="fitem" style={{ opacity: dim }}>
          <span className="frow">
            <span className="scalar">{vector[j]}</span>
            {bracket({
              kind: 'a',
              columns: 1,
              minWidth: 30,
              mini: true,
              cells: matrix.map((row, i) => ({ key: `fc-${j}-${i}`, body: row[j], live: true })),
            })}
          </span>
          <span className="flab">{labelVC(j)}</span>
        </span>,
      );
    }

    if (phase.p === 4) {
      factoredGroups.push(<span key="feq1" className="fglyph">=</span>);
      for (let j = 0; j < cols; j += 1) {
        if (j > 0) factoredGroups.push(<span key={`fp2-${j}`} className="fglyph">+</span>);
        factoredGroups.push(
          <span key={`fs-${j}`} className="fitem">
            <span className="frow">
              {bracket({
                kind: 'a',
                columns: 1,
                minWidth: 30,
                mini: true,
                cells: scaled[j].map((value, i) => ({ key: `fsv-${j}-${i}`, body: value, live: true })),
              })}
            </span>
            <span className="flab">{labelVC(j)}</span>
          </span>,
        );
      }
      factoredGroups.push(<span key="feq2" className="fglyph">=</span>);
      factoredGroups.push(
        <span key="ftot" className="fitem">
          <span className="frow">
            {bracket({
              kind: 'out',
              columns: 1,
              minWidth: 30,
              mini: true,
              cells: final.map((value, i) => ({ key: `ft-${i}`, body: value, live: true })),
            })}
          </span>
          <span className="flab">{symA()}{symV()}</span>
        </span>,
      );
    }
  }

  /* ---------------- diagram geometry ---------------- */

  const gridStep = plot.unit < 13
    ? niceStep(Math.max(plot.xmax - plot.xmin, plot.ymax - plot.ymin))
    : 1;
  const stepX = niceStep(plot.xmax - plot.xmin);
  const stepY = niceStep(plot.ymax - plot.ymin);

  const gridLines = [];
  for (let x = Math.ceil(plot.xmin / gridStep) * gridStep; x <= plot.xmax; x += gridStep) {
    gridLines.push(
      <line key={`gx-${x}`} x1={GX(x)} y1={GY(plot.ymin)} x2={GX(x)} y2={GY(plot.ymax)}
        stroke="#eef1f6" strokeWidth="1" />,
    );
  }
  for (let y = Math.ceil(plot.ymin / gridStep) * gridStep; y <= plot.ymax; y += gridStep) {
    gridLines.push(
      <line key={`gy-${y}`} x1={GX(plot.xmin)} y1={GY(y)} x2={GX(plot.xmax)} y2={GY(y)}
        stroke="#eef1f6" strokeWidth="1" />,
    );
  }

  const tickLabels = [];
  for (let x = Math.ceil(plot.xmin / stepX) * stepX; x <= plot.xmax; x += stepX) {
    if (x === 0) continue;
    tickLabels.push(
      <text key={`tx-${x}`} x={GX(x)} y={GY(0) + 13} fontSize="10" fill="#a5adbb"
        textAnchor="middle">{x}</text>,
    );
  }
  for (let y = Math.ceil(plot.ymin / stepY) * stepY; y <= plot.ymax; y += stepY) {
    if (y === 0) continue;
    tickLabels.push(
      <text key={`ty-${y}`} x={GX(0) - 6} y={GY(y) + 3.6} fontSize="10" fill="#a5adbb"
        textAnchor="end">{y}</text>,
    );
  }

  /* label on the perpendicular of a segment, clamped to the panel */
  const labelPos = (x1, y1, x2, y2, flipSide) => {
    const X1 = GX(x1);
    const Y1 = GY(y1);
    const X2 = GX(x2);
    const Y2 = GY(y2);
    const dx = X2 - X1;
    const dy = Y2 - Y1;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    let nx = -dy / len;
    let ny = dx / len;
    if ((ny > 0) !== !!flipSide) { nx = -nx; ny = -ny; }
    return {
      x: Math.max(22, Math.min(figSize.w - 14, (X1 + X2) / 2 + nx * 16)),
      y: Math.max(13, Math.min(figSize.h - 5, (Y1 + Y2) / 2 + ny * 16 + 4)),
    };
  };

  const geo = useMemo(() => {
    const out = { vline: null, hline: null, tip: null, segments: [], rawColumn: null, resultant: null };

    if (phase.p === 1) {
      if (phase.i === 0) {
        let px = 0;
        for (let k = 0; k <= phase.k; k += 1) px += matrix[0][k] * vector[k];
        out.vline = { x: px, opacity: 0.7 };
      } else {
        const px = final[0];
        let py = 0;
        for (let k = 0; k <= phase.k; k += 1) py += matrix[1][k] * vector[k];
        out.vline = { x: px, opacity: 0.55 };
        out.hline = { y: py, opacity: 0.7 };
        out.tip = { x: px, y: py };
        if (phase.k === cols - 1) out.resultant = { x: px, y: py, opacity: 0.9, label: false };
      }
      return out;
    }

    if (phase.p >= 2) {
      const upto = phase.p === 2 ? phase.j : cols - 1;
      for (let j = 0; j < cols; j += 1) {
        const shown = j <= upto;
        out.segments.push({
          j,
          from: cumulative[j],
          to: shown ? cumulative[j + 1] : cumulative[j],
          opacity: shown ? (phase.p === 2 && j === phase.j ? 1 : 0.5) : 0,
        });
      }
      if (phase.p === 2) {
        out.rawColumn = { j: phase.j, to: [matrix[0][phase.j], matrix[1][phase.j]] };
      } else {
        out.resultant = { x: final[0], y: final[1], opacity: phase.p === 3 ? 0.9 : 0.95, label: true };
      }
      out.tip = { x: cumulative[upto + 1][0], y: cumulative[upto + 1][1] };
    }

    return out;
  }, [phase, matrix, vector, cumulative, final, cols]);

  const buttons = copy.buttons;

  /* ============================================================ */

  const compact = layout === 'compact';

  const keyRow = (
    <div className="key">
      <span className="keyItem">
        <i className="swatch swatchA" />
        {processContent(say(copy.legendA))}
      </span>
      <span className="keyItem">
        <i className="swatch swatchV" />
        {processContent(say(copy.legendV))}
      </span>
    </div>
  );

  return (
    <div className={`cpvRoot ${compact ? 'cpvCompact' : ''} ${className}`.replace(/\s+/g, ' ').trim()}>
      <section className="panel">

        <div className="phead">
          <h2>{processContent(copy.heading)}</h2>
          <div className="pheadIntro">{processContent(say(copy.intro))}</div>
          {compact && keyRow}
        </div>

        <div className="body">

          {!compact && keyRow}

          <div className="stagearea" ref={stageRef}>
            <svg className="arrows" aria-hidden="true">
              <defs>
                <marker id="cpv-head-v" viewBox="0 0 10 10" refX="8" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M2 1L8 5L2 9" fill="none" stroke={CV} strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <marker id="cpv-head-a" viewBox="0 0 10 10" refX="8" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M2 1L8 5L2 9" fill="none" stroke={CA} strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
              {arrows.map((arrow) => (
                <path key={arrow.key} d={arrow.d} fill="none" stroke={arrow.stroke}
                  strokeWidth="1.6" opacity="0.85" markerEnd={`url(#${arrow.marker})`} />
              ))}
            </svg>

            <div className="workrow">
              <div className="colL">
                <div className="board" ref={boardRef}>
                  <div className="lay">

                    <div className="unit">
                      <div className="nm">{symA()}</div>
                      {bracket({ kind: 'a', columns: cols, minWidth: 42, cells: aCells })}
                      <div className="dims">
                        <span className="dim dimA">{rows}</span>
                        <span className="dimX">&times;</span>
                        <span className="dim dimMust">{cols}</span>
                      </div>
                    </div>

                    {operator('')}

                    <div className="unit">
                      <div className="nm">{symV()}</div>
                      {bracket({ kind: 'v', columns: 1, minWidth: 42, cells: vCells })}
                      <div className="dims">
                        <span className="dim dimMust">{cols}</span>
                        <span className="dimX">&times;</span>
                        <span className="dim dimV">1</span>
                      </div>
                    </div>

                    {operator('=')}

                    <div className="unit">
                      <div className="nm">{symA()}{symV()}</div>
                      {bracket({ kind: 'out', columns: 1, minWidth: 56, wide: true, cells: rCells })}
                      <div className="dims">
                        <span className="dim dimA">{rows}</span>
                        <span className="dimX">&times;</span>
                        <span className="dim dimV">1</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="summary">
                  <div className={`general ${phase.p >= 3 ? 'generalShown' : ''}`}>
                    {phase.p >= 3 && (
                      <>
                        {symA()}{symV()}<span className="glyph">=</span>
                        {matrix[0].map((unused, j) => (
                          <React.Fragment key={`gf-${j}`}>
                            {j > 0 && <span className="glyph">+</span>}
                            {labelVC(j)}
                          </React.Fragment>
                        ))}
                        <span className="generalNote">
                          {processContent(say(copy.generalNote))}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="factored">{factoredGroups}</div>
                </div>
              </div>

              {showFigure && (
                <div className="colR">
                  <div className="diagram">
                    <div className="diagramCap">{processContent(copy.figureTitle)}</div>

                    <div className="figwrap" ref={figRef}>
                      <svg
                        viewBox={`0 0 ${figSize.w} ${figSize.h}`}
                        preserveAspectRatio="none"
                        role="img"
                        aria-label={typeof copy.figureTitle === 'string' ? copy.figureTitle : 'Diagram'}
                      >
                        <defs>
                          <marker id="cpv-g" viewBox="0 0 10 10" refX="9" refY="5"
                            markerWidth="5.6" markerHeight="5.6" orient="auto">
                            <path d="M3 2L8 5L3 8" fill="none" stroke={CA} strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round" />
                          </marker>
                          <marker id="cpv-gd" viewBox="0 0 10 10" refX="9" refY="5"
                            markerWidth="5.6" markerHeight="5.6" orient="auto">
                            <path d="M3 2L8 5L3 8" fill="none" stroke={CD} strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round" />
                          </marker>
                        </defs>

                        <g>{gridLines}</g>
                        <g>
                          <line x1={GX(plot.xmin)} y1={GY(0)} x2={GX(plot.xmax)} y2={GY(0)}
                            stroke="#c3cad6" strokeWidth="1.1" />
                          <line x1={GX(0)} y1={GY(plot.ymin)} x2={GX(0)} y2={GY(plot.ymax)}
                            stroke="#c3cad6" strokeWidth="1.1" />
                          {tickLabels}
                        </g>

                        {geo.rawColumn && (
                          <>
                            <line className="gline"
                              x1={GX(0)} y1={GY(0)}
                              x2={GX(geo.rawColumn.to[0])} y2={GY(geo.rawColumn.to[1])}
                              stroke={CA} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
                            <text className="gtext" fontSize="12.5" fontWeight="700"
                              textAnchor="middle" opacity="0.75"
                              {...labelPos(0, 0, geo.rawColumn.to[0], geo.rawColumn.to[1], true)}>
                              <tspan fill={CA} fontStyle="italic">c</tspan>
                              <tspan fill={CA} fontSize="9" dy="3">{geo.rawColumn.j + 1}</tspan>
                            </text>
                          </>
                        )}

                        {geo.vline && (
                          <line className="gline"
                            x1={GX(geo.vline.x)} y1={GY(plot.ymin)}
                            x2={GX(geo.vline.x)} y2={GY(plot.ymax)}
                            stroke={CD} strokeWidth="1" strokeDasharray="4 3"
                            opacity={geo.vline.opacity} />
                        )}
                        {geo.hline && (
                          <line className="gline"
                            x1={GX(plot.xmin)} y1={GY(geo.hline.y)}
                            x2={GX(plot.xmax)} y2={GY(geo.hline.y)}
                            stroke={CD} strokeWidth="1" strokeDasharray="4 3"
                            opacity={geo.hline.opacity} />
                        )}

                        {geo.segments.map((segment) => (
                          <line key={`seg-${segment.j}`} className="gline"
                            x1={GX(segment.from[0])} y1={GY(segment.from[1])}
                            x2={GX(segment.to[0])} y2={GY(segment.to[1])}
                            stroke={CA} strokeWidth="1.9" opacity={segment.opacity}
                            markerEnd="url(#cpv-g)" />
                        ))}
                        {geo.segments.filter((segment) => segment.opacity > 0).map((segment) => (
                          <text key={`seglab-${segment.j}`} className="gtext"
                            fontSize="12.5" fontWeight="700" textAnchor="middle"
                            opacity={segment.opacity}
                            {...labelPos(segment.from[0], segment.from[1], segment.to[0], segment.to[1], false)}>
                            {svgLabelVC(segment.j)}
                          </text>
                        ))}

                        {geo.resultant && (
                          <>
                            <line className="gline"
                              x1={GX(0)} y1={GY(0)} x2={GX(geo.resultant.x)} y2={GY(geo.resultant.y)}
                              stroke={CD} strokeWidth="2.5" opacity={geo.resultant.opacity}
                              markerEnd="url(#cpv-gd)" />
                            {geo.resultant.label && (
                              <text className="gtext" fontSize="12.5" fontWeight="700"
                                textAnchor="middle" opacity="0.95"
                                {...labelPos(0, 0, geo.resultant.x, geo.resultant.y, true)}>
                                <tspan fill={CD} fontStyle="italic">A</tspan>
                                <tspan fill={CD} fontStyle="italic">v</tspan>
                              </text>
                            )}
                          </>
                        )}

                        {geo.tip && (
                          <>
                            <circle className="gdot" r="3.4" fill={CD}
                              cx={GX(geo.tip.x)} cy={GY(geo.tip.y)} />
                            <text className="gtext" fontSize="12.5" fontWeight="700"
                              fill={CD} textAnchor="end"
                              x={Math.max(44, Math.min(figSize.w - 4, GX(geo.tip.x) - 7))}
                              y={Math.max(13, GY(geo.tip.y) - 10)}>
                              ({geo.tip.x}, {geo.tip.y})
                            </text>
                          </>
                        )}
                      </svg>
                    </div>

                    <div className="note">{processContent(figureText)}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="narr" aria-live="polite">{processContent(narrationText)}</div>
        </div>

        <div className="stepline">
          <button type="button" className="act"
            onClick={() => goTo(stage - 1)} disabled={stage <= 0}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17 3 6 12l11 9z" />
            </svg>
            {buttons.back}
          </button>

          <button type="button" className="act actPrimary" onClick={toggleRun}>
            {playing ? buttons.pause : buttons.run}
          </button>

          <button type="button" className="act"
            onClick={() => goTo(stage + 1)} disabled={stage >= MAX_STAGE}>
            {buttons.step}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 3l11 9-11 9z" />
            </svg>
          </button>

          <button type="button" className="act" onClick={() => goTo(0)}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 2.6-6.4" />
              <path d="M3 3.5V9h5.5" />
            </svg>
            {buttons.reset}
          </button>

          {allowRandom && (
            <>
              <span className="sep" />
              <button type="button" className="act" onClick={regenerate}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.3" fill="currentColor" stroke="none" />
                  <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
                  <circle cx="15.5" cy="15.5" r="1.3" fill="currentColor" stroke="none" />
                </svg>
                {buttons.random}
              </button>
            </>
          )}

          <span className="pipwrap">
            <span className="pipLabel">{buttons.stepsLabel}</span>
            <span className="pips">
              {Array.from({ length: MAX_STAGE }, (unused, i) => (
                <i key={`pip-${i}`} className={`pip ${stage > i ? 'pipOn' : ''}`} />
              ))}
            </span>
          </span>

          <span className="spacer" />
          <span className="stepnum">
            <em>{buttons.stepLabel}</em>{stage} / {MAX_STAGE}
          </span>
        </div>
      </section>

      <style jsx global>{`
        .cpvRoot{
          --ink:#1a1f2b;
          --grey:#6b7684;
          --rule:#dfe4ec;
          --paper:#fff;
          --wash:#f6f7fa;

          --nav:#0b2f77;
          --nav-dark:#08245b;
          --nav-soft:#eaf0fa;
          --nav-line:#c6d3ea;

          --info-bg:#eff6ff;
          --info-line:#bfdbfe;
          --info-tx:#1e40af;

          --a:#1450c8;
          --a-wash:#e4ecfd;
          --v:#b45309;
          --v-wash:#fbf0e2;

          color:var(--ink);
          font-size:15px;
          line-height:1.55;
          -webkit-font-smoothing:antialiased;
        }

        .cpvRoot .sym{
          font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;
          font-style:italic;
          font-weight:600;
        }
        .cpvRoot .colA{ color:var(--a); font-weight:700 }
        .cpvRoot .colV{ color:var(--v); font-weight:700 }

        .cpvRoot .panel{ background:var(--paper); border:1px solid var(--rule); border-radius:3px }

        .cpvRoot .phead{
          display:flex; align-items:baseline; gap:16px; flex-wrap:wrap;
          padding:8px 16px; border-bottom:1px solid var(--info-line); background:var(--info-bg);
        }
        .cpvRoot .phead h2{
          font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;
          font-size:14.5px; font-weight:600; margin:0; color:var(--nav);
          white-space:nowrap; flex:0 0 auto;
        }
        .cpvRoot .pheadIntro{
          margin:0; font-size:12.5px; line-height:1.5; color:var(--info-tx);
          flex:1 1 420px; min-width:0;
        }
        .cpvRoot .pheadIntro br{ display:none }

        .cpvRoot .body{ padding:13px 16px 14px }

        .cpvRoot .key{
          display:flex; justify-content:center; gap:26px; flex-wrap:wrap;
          font-size:13px; color:var(--grey); margin:0 0 12px; height:22px;
        }
        .cpvRoot .keyItem{ display:inline-flex; align-items:center; gap:6px }
        .cpvRoot .keyItem br{ display:none }
        .cpvRoot .swatch{ width:12px; height:12px; border-radius:2px; display:inline-block }
        .cpvRoot .swatchA{ background:var(--a) }
        .cpvRoot .swatchV{ background:var(--v) }

        .cpvRoot .stagearea{ position:relative }
        .cpvRoot .arrows{
          position:absolute; inset:0; width:100%; height:100%;
          pointer-events:none; z-index:5; overflow:visible;
        }

        .cpvRoot .workrow{ display:flex; gap:24px; align-items:stretch }
        .cpvRoot .colL{ flex:1 1 auto; min-width:0 }
        .cpvRoot .colR{ flex:0 0 452px; display:flex }

        .cpvRoot .board{ height:244px; overflow:hidden; padding-bottom:58px }
        .cpvRoot .lay{
          display:flex; align-items:flex-start; justify-content:center;
          gap:12px; min-width:min-content;
        }
        .cpvRoot .unit{ display:flex; flex-direction:column; align-items:center; gap:6px }
        .cpvRoot .nm{ font-size:19px; line-height:1; height:21px }

        .cpvRoot .dims{
          display:flex; align-items:center; gap:5px; height:22px;
          font-variant-numeric:tabular-nums;
        }
        .cpvRoot .dimX{ color:var(--grey); font-size:12px }
        .cpvRoot .dim{
          min-width:21px; height:20px; line-height:20px; text-align:center;
          font-size:12.5px; font-weight:700; border-radius:3px; border:1px solid transparent;
        }
        .cpvRoot .dimMust{ color:var(--ink); border-color:var(--ink); background:var(--wash); line-height:18px }
        .cpvRoot .dimA{ color:var(--a) }
        .cpvRoot .dimV{ color:var(--v) }

        .cpvRoot .grid{
          display:inline-grid; gap:0; padding:5px 3px; position:relative; color:var(--ink);
          border-left:2px solid currentColor; border-right:2px solid currentColor;
        }
        .cpvRoot .gridA{ color:var(--a) }
        .cpvRoot .gridV{ color:var(--v) }
        .cpvRoot .gridOut{
          color:var(--a);
          border-left-style:double; border-right-style:double;
          border-left-width:4px; border-right-width:4px;
        }
        .cpvRoot .grid::before, .cpvRoot .grid::after{
          content:""; position:absolute; width:8px; height:2px; background:currentColor;
        }
        .cpvRoot .grid::before{ top:0; left:-2px }
        .cpvRoot .grid::after{ bottom:0; left:-2px }
        .cpvRoot .gridOut::before, .cpvRoot .gridOut::after{ left:-4px; width:10px }
        .cpvRoot .cap{ position:absolute; width:8px; height:2px; background:currentColor; right:-2px }
        .cpvRoot .gridOut .cap{ right:-4px; width:10px }
        .cpvRoot .capT{ top:0 }
        .cpvRoot .capB{ bottom:0 }

        .cpvRoot .cell{
          padding:7px 12px; text-align:center; font-weight:400; font-size:16px;
          font-variant-numeric:tabular-nums; border-radius:2px;
          transition:opacity .25s, background .25s, font-weight .25s;
        }
        .cpvRoot .cellRest{ opacity:.35 }
        .cpvRoot .cellLive{ font-weight:700 }
        .cpvRoot .gridA .cellLive, .cpvRoot .gridOut .cellLive{ background:var(--a-wash) }
        .cpvRoot .gridV .cellLive{ background:var(--v-wash) }
        .cpvRoot .gridMini .cell{ padding:4px 8px; font-size:15px }
        .cpvRoot .gridWide .cell{ padding:8px 10px; text-align:left; white-space:nowrap }
        .cpvRoot .placeholder{ opacity:.3; text-align:center; font-size:17px }

        .cpvRoot .term{
          display:inline-block; text-align:center; padding:4px 2px; border-radius:3px;
          opacity:0; transition:opacity .28s, background .28s;
        }
        .cpvRoot .termShown{ opacity:1 }
        .cpvRoot .termRest{ opacity:.35 }
        .cpvRoot .termLive{ background:var(--v-wash) }
        .cpvRoot .termA{ color:var(--a); font-weight:700 }
        .cpvRoot .termV{ color:var(--v); font-weight:700 }
        .cpvRoot .termDot{ color:var(--grey); padding:0 1px }

        .cpvRoot .plus{
          display:inline-block; text-align:center; width:20px; color:var(--grey);
          opacity:0; transition:opacity .28s;
        }
        .cpvRoot .plusShown{ opacity:1 }

        .cpvRoot .op{ display:flex; flex-direction:column; align-items:center; gap:6px }
        .cpvRoot .opSp{ height:21px }
        .cpvRoot .opGlyph{ font-size:20px; color:var(--grey); line-height:1; min-width:12px; text-align:center }
        .cpvRoot .opSp2{ height:22px }

        .cpvRoot .summary{ height:216px; overflow:hidden; border-top:1px solid var(--rule); padding-top:14px }
        .cpvRoot .general{
          text-align:center; font-size:16.5px; margin:0 0 14px; height:80px;
          opacity:0; transition:opacity .35s;
        }
        .cpvRoot .generalShown{ opacity:1 }
        .cpvRoot .glyph{ color:var(--grey); padding:0 5px }
        .cpvRoot .generalNote{
          display:block; font-size:12.5px; color:var(--grey); margin-top:6px;
          font-weight:400; line-height:1.5;
        }
        .cpvRoot .generalNote br{ display:none }

        .cpvRoot .factored{
          display:flex; flex-wrap:nowrap; align-items:flex-start; justify-content:center;
          gap:8px; height:104px; overflow:hidden;
        }
        .cpvRoot .fitem{
          display:inline-flex; flex-direction:column; align-items:center; gap:4px;
          transition:opacity .35s;
        }
        .cpvRoot .frow{ display:inline-flex; align-items:center; gap:6px }
        .cpvRoot .flab{ font-size:12.5px; white-space:nowrap }
        .cpvRoot .scalar{ font-size:18px; font-weight:700; color:var(--v) }
        .cpvRoot .fglyph{ font-size:18px; color:var(--grey); padding-top:8px }

        .cpvRoot .diagram{
          flex:1 1 auto; display:flex; flex-direction:column; min-width:0;
          border:1px solid var(--rule); border-radius:3px;
          padding:10px 12px 11px; background:var(--paper);
        }
        .cpvRoot .diagramCap{
          font-size:10.5px; letter-spacing:.06em; text-transform:uppercase; color:var(--grey);
          margin:0 0 5px; font-weight:700; flex:0 0 auto;
        }
        .cpvRoot .diagramCap br{ display:none }

        .cpvRoot .figwrap{ flex:1 1 auto; position:relative; min-height:268px }
        .cpvRoot .figwrap svg{
          position:absolute; inset:0; width:100%; height:100%; display:block;
        }

        .cpvRoot .note{
          flex:0 0 auto; height:86px; font-size:12.5px; line-height:1.55;
          color:var(--grey); margin:9px 0 0; overflow:hidden;
        }
        .cpvRoot .note strong{ color:var(--ink); font-weight:600 }

        .cpvRoot .gline{ transition:x1 .45s ease, y1 .45s ease, x2 .45s ease, y2 .45s ease, opacity .35s }
        .cpvRoot .gdot{ transition:cx .45s ease, cy .45s ease, opacity .35s }
        .cpvRoot .gtext{ transition:x .45s ease, y .45s ease, opacity .35s }

        .cpvRoot .narr{
          margin-top:14px; padding:11px 14px; background:var(--nav-soft);
          border-left:3px solid var(--nav); font-size:13.5px; line-height:1.6;
          height:96px; overflow:hidden;
        }

        .cpvRoot .stepline{
          display:flex; align-items:center; gap:8px; padding:9px 16px;
          border-top:1px solid var(--rule); flex-wrap:wrap; background:#fbfcfe;
        }
        .cpvRoot .act{
          appearance:none; display:inline-flex; align-items:center; gap:6px;
          border:1px solid var(--nav-line); background:var(--paper); color:var(--nav);
          font:inherit; font-size:13px; font-weight:600; padding:6px 12px;
          border-radius:3px; cursor:pointer;
        }
        .cpvRoot .act:hover:not(:disabled){ background:var(--nav-soft) }
        .cpvRoot .act:disabled{ opacity:.38; cursor:default }
        .cpvRoot .actPrimary{
          background:var(--nav); border-color:var(--nav); color:#fff;
          min-width:74px; justify-content:center;
        }
        .cpvRoot .actPrimary:hover:not(:disabled){ background:var(--nav-dark) }
        .cpvRoot .act:focus-visible{ outline:2px solid var(--nav); outline-offset:2px }
        .cpvRoot .act svg{ display:block }

        .cpvRoot .sep{ width:1px; height:22px; background:var(--nav-line); margin:0 3px }

        .cpvRoot .pipwrap{ display:inline-flex; align-items:center; gap:8px; margin-left:6px }
        .cpvRoot .pipLabel{
          font-size:10.5px; font-weight:700; letter-spacing:.08em;
          text-transform:uppercase; color:var(--nav);
        }
        .cpvRoot .pips{ display:flex; gap:4px }
        .cpvRoot .pip{
          width:17px; height:7px; border-radius:2px;
          background:var(--nav-line); transition:background .2s;
        }
        .cpvRoot .pipOn{ background:var(--nav) }

        .cpvRoot .spacer{ flex:1 }
        .cpvRoot .stepnum{
          font-size:13px; font-weight:700; color:var(--nav);
          font-variant-numeric:tabular-nums;
        }
        .cpvRoot .stepnum em{
          font-style:normal; font-weight:700; font-size:10.5px;
          letter-spacing:.08em; text-transform:uppercase; margin-right:7px;
        }

        /* ------------------------------------------------------------
           layout="compact"
           Same arrangement (the arrows need the board above the
           derivation), with the fixed heights trimmed, the legend folded
           into the header strip, and the button row pinned to the bottom
           of the window while the panel is on screen.
           ------------------------------------------------------------ */
        .cpvCompact .phead{ align-items:center; padding:7px 16px }
        .cpvCompact .phead .key{
          margin:0; height:auto; flex:0 0 auto; gap:16px; font-size:12px;
          white-space:nowrap; margin-left:auto;
        }
        .cpvCompact .body{ padding:10px 16px }
        .cpvCompact .board{ height:196px; padding-bottom:40px }
        .cpvCompact .cell{ padding:6px 11px }
        .cpvCompact .summary{ height:176px; padding-top:10px }
        .cpvCompact .general{ height:70px; margin:0 0 8px; font-size:15.5px }
        .cpvCompact .factored{ height:88px }
        .cpvCompact .diagram{ padding:8px 12px 9px }
        .cpvCompact .figwrap{ min-height:0 }
        .cpvCompact .note{ height:70px; margin-top:7px; font-size:12px; line-height:1.45 }
        .cpvCompact .narr{ height:74px; margin-top:12px; padding:8px 14px }
        .cpvCompact .stepline{
          position:sticky; bottom:0; z-index:5;
          box-shadow:0 -6px 16px rgba(11,47,119,.10);
        }

        @media (max-width:1180px){
          .cpvRoot .workrow{ flex-direction:column; align-items:stretch }
          .cpvRoot .colR{ flex:1 1 auto; width:100%; max-width:520px; margin:0 auto }
          .cpvRoot .board{ height:auto; overflow-x:auto }
          .cpvRoot .summary{ height:auto; overflow:visible }
          .cpvRoot .general{ height:auto }
          .cpvRoot .factored{ height:auto; min-height:104px; flex-wrap:wrap; overflow:visible }
          .cpvRoot .figwrap{ min-height:300px }
          .cpvRoot .note{ height:auto; min-height:60px }
          .cpvRoot .narr{ height:auto; min-height:74px; overflow:visible }
          .cpvCompact .phead .key{ margin-left:0; white-space:normal; flex-wrap:wrap }
        }

        @media (prefers-reduced-motion:reduce){
          .cpvRoot *{ transition:none !important }
        }
      `}</style>
    </div>
  );
}
