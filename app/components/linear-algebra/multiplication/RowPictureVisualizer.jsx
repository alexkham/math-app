'use client';

import React, { useState, useMemo, useRef, useCallback, useLayoutEffect, useEffect } from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import { fillTokens } from '@/app/utils/propsProcessor';

/* ============================================================
   RowPictureVisualizer

   vᵀA read as a combination of the rows of A. Fill the bracket
   one term at a time by the definition, then regroup the same six
   products by row instead of by entry.

   ------------------------------------------------------------
   THE MIRROR, AND WHERE IT DIFFERS

   The column visualizer stacks the result entries and you read
   DOWN the term positions. Here the result entries sit side by
   side, each one a vertical sum, and you read ACROSS. It is the
   same 2x3 array of six products, rotated.

   A is 3x2 here, not 2x3. A row of A has as many entries as A
   has columns, so rows of a 2x3 live in three dimensions and
   cannot be drawn in a plane. With 3x2 the rows are plane
   vectors and the figure mirrors the column version exactly.

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
                       is a scaled row of A. v never appears as an
                       arrow, only as the length it chose. a label
                       v-sub-i r-sub-i keeps both colours, because the
                       piece is an amber number times a blue row.

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
        to letterbox and no white margin around the plot.
     Heights release below 1180px, where the columns stack.

   ------------------------------------------------------------
   NUMBER RULES — for the figure, not for the algebra.
     No weight and no row may be zero: a zero collapses an arrow to
     a point, which has no direction to draw and no segment to
     label. Enforced at generation, not filtered afterwards.

   ------------------------------------------------------------
   CONTENT
     Every string is a prop, normally supplied by getStaticProps.
     DEFAULT_CONTENT below exists so a missing prop cannot crash
     the component — it is a fallback, not the intended source.
     Per-step strings run through fillTokens first, since they
     need values that only exist at runtime. Token list is at
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

/* A is 3x2: three rows, each a vector in the plane */
const DEFAULT_MATRIX = [[2, 1], [-1, 2], [3, 0]];
const DEFAULT_VECTOR = [2, 1, 3];

/*  stage map
      0          empty bracket
      1 .. 6     one term at a time: (j,i) = entry j, term i
      7 .. 9     read across: row 0, 1, 2
      10         the summary: the general statement
      11         multiplied through and added                      */
const MAX_STAGE = 11;

const SYMBOLS = {
  A: '$\\textcolor{#1450c8}{A}$',
  v: '$\\textcolor{#b45309}{v}$',
  vT: '$\\textcolor{#b45309}{v^{T}}$',
};

/* ------------------------------------------------------------
   FALLBACK COPY

   Dynamic strings take these tokens:
     {A} {v} {vT}   the symbols, in their encoding colours
     {i}            1-based index of the row / term in play
     {j}            1-based index of the entry being built
     {aij}          the entry of A feeding this term
     {vi}           the weight feeding this term
     {ra} {rb}      the two numbers of row i
     {entry}        the finished value of entry j
     {x} {y}        the two numbers of the finished answer
     {rows} {cols}  the shape of A

   A value may also be a (vars, symbols) => string function.
   ------------------------------------------------------------ */
export const DEFAULT_CONTENT = {
  heading: 'From the definition to the rows',

  intro:
    'The mirror of the column case. Put {vT} on the left and fill the {vT}{A} bracket one term at a ' +
    'time by the same definition — then read its terms **across** instead of down. Each horizontal ' +
    'band shares one entry of {v}, and the numbers it multiplies are a **row** of {A}.',

  legendA: '{A}, and anything built from it',
  legendV: '{v}, and the scalars taken from it',

  figureTitle: 'In the plane',

  generalNote:
    '$\\textcolor{#1450c8}{r_i}$ is row $i$ of {A}, a vector in its own right. ' +
    '$\\textcolor{#b45309}{v_i}$ is entry $i$ of {v}, a single number. ' +
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
      'The bracket on the right is empty. By the definition, entry $j$ of {vT}{A} is {v} paired term ' +
      'by term with column $j$ of {A}. Six products in all, one per step — press Run.',

    term:
      'Term {i} of entry {j}. Entry {i} of {v} is {vi}; row {i}, column {j} of {A} is {aij}. ' +
      'Both travel to the same slot in the bracket.',

    termComplete:
      'Term {i} of entry {j}. Entry {i} of {v} is {vi}; row {i}, column {j} of {A} is {aij}. ' +
      'Entry {j} is complete: **{entry}**.',

    regroup:
      'Stop reading down. Read **across**. Both term {i}s carry the same scalar, ' +
      '$\\textcolor{#b45309}{v_i}$ = {vi}, because the definition pairs {v} with every column of {A} ' +
      'the same way. The two numbers that scalar multiplies, {ra} and {rb}, are exactly row {i} of ' +
      '{A} — so {vi} comes out in front of the whole row, and that row drops below as one piece.',

    summary:
      'Read the line above as a sentence. {vT}{A} is built from the rows of {A} and nothing else; ' +
      '{v} contributes no direction at all, only three numbers saying how much of each row to take. ' +
      'The mirror of the column case, and the reason {A} on the right of a product gives up its rows.',

    compute:
      'Now carry out each product and add. Three {cols}-entry rows give one {cols}-entry answer, so ' +
      'the bracket collapses to {vT}{A} = ({x}, {y}).',
  },

  figure: {
    empty:
      'Nothing computed yet. The plane is empty because not one number of the answer exists.',

    xOnly:
      'The first entry fixes **x** and nothing else. Every point on this line has that x. The line ' +
      'sliding sideways as terms land is not motion — it is a number being corrected.',

    yPartial:
      'The second entry fixes **y**. Two lines, one crossing point — that is all a two-number ' +
      'bracket says. Still no vector: a point is not yet an arrow.',

    crossed:
      'Both lines are fixed, so they cross at one point and there is finally a vector. Look back at ' +
      'the route: **no step along the way was a real quantity**.',

    row:
      'Dashed from the origin is **row {i} of A on its own**. The solid arrow is that same row ' +
      'stretched by {vi}, moved so its tail sits on the end of the previous one. The direction never ' +
      'changes — only how far along it you go.',

    rowNegative:
      'Dashed from the origin is **row {i} of A on its own**. The solid arrow is that same row ' +
      'stretched by {vi}, moved so its tail sits on the end of the previous one. The direction never ' +
      'changes, and a negative weight sends you backwards along it.',

    summary:
      'Three arrows, each a row of **A** with its length chosen by **v**, laid end to end. Change ' +
      '**v** and they stretch or flip, but **the three directions are fixed by A and never move**.',

    compute:
      'The answer lives in the space the rows of A span. Every step of this route is a real vector — ' +
      'a partial sum of rows.',
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

function makeRandom(rowCount, colCount) {
  let matrix = [];
  let vector = [];
  let tries = 0;

  for (;;) {
    tries += 1;

    matrix = [];
    vector = new Array(rowCount).fill(0);

    for (let i = 0; i < rowCount; i += 1) {
      /* every weight is non-zero */
      vector[i] = randIntNonZero(-3, 3);
      /* every row is a non-zero vector */
      let row = new Array(colCount).fill(0);
      let zeroRow = true;
      while (zeroRow) {
        row = [];
        for (let j = 0; j < colCount; j += 1) row.push(randInt(-3, 4));
        zeroRow = row.every((value) => value === 0);
      }
      matrix.push(row);
    }

    let sx = 0;
    let sy = 0;
    for (let i = 0; i < rowCount; i += 1) {
      sx += matrix[i][0] * vector[i];
      sy += matrix[i][1] * vector[i];
    }

    /* no scaled row may collapse to a point either */
    let collapsed = false;
    for (let i = 0; i < rowCount; i += 1) {
      if (matrix[i][0] * vector[i] === 0 && matrix[i][1] * vector[i] === 0) collapsed = true;
    }

    const tooBig = Math.abs(sx) > 15 || Math.abs(sy) > 13;
    const atOrigin = sx === 0 && sy === 0;

    if ((!tooBig && !atOrigin && !collapsed) || tries > 400) break;
  }

  return { matrix, vector };
}

/* ============================================================ */

export default function RowPictureVisualizer({
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
    for (let i = 0; i < rows; i += 1) {
      scaled.push([matrix[i][0] * vector[i], matrix[i][1] * vector[i]]);
      cumulative.push([
        cumulative[i][0] + scaled[i][0],
        cumulative[i][1] + scaled[i][1],
      ]);
    }
    /* one width per term band, so the bands line up across every entry */
    const termWidths = [];
    for (let i = 0; i < rows; i += 1) {
      let longest = 0;
      for (let j = 0; j < cols; j += 1) {
        longest = Math.max(longest, `${vector[i]}\u00B7${par(matrix[i][j])}`.length);
      }
      termWidths.push(longest * 9.5 + 12);
    }
    return { scaled, cumulative, final: cumulative[rows], termWidths };
  }, [matrix, vector, rows, cols]);

  const { scaled, cumulative, final, termWidths } = derived;

  const phase = useMemo(() => {
    if (stage === 0) return { p: 0 };
    if (stage <= cols * rows) {
      const d = stage - 1;
      return { p: 1, j: Math.floor(d / rows), i: d % rows };
    }
    if (stage <= cols * rows + rows) return { p: 2, i: stage - cols * rows - 1 };
    if (stage === MAX_STAGE) return { p: 4 };
    return { p: 3 };
  }, [stage, rows, cols]);

  const plot = useMemo(() => {
    const xs = [0];
    const ys = [0];
    for (let i = 0; i < rows; i += 1) { xs.push(matrix[i][0]); ys.push(matrix[i][1]); }
    for (let i = 0; i <= rows; i += 1) { xs.push(cumulative[i][0]); ys.push(cumulative[i][1]); }

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
  }, [matrix, cumulative, rows, figSize]);

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
    const lane = boardEl.getBoundingClientRect().bottom - box.top - 20;

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
        marker: stroke === CA ? 'rpv-head-a' : 'rpv-head-v',
      };
    };

    const next = [];
    if (phase.p === 1) {
      next.push(arc(`vc${phase.i}`, `t${phase.j}-${phase.i}`, -13, CV));
      next.push(arc(`ac${phase.i}-${phase.j}`, `t${phase.j}-${phase.i}`, 13, CA));
    } else {
      for (let j = 0; j < cols; j += 1) {
        next.push(arc(`vc${phase.i}`, `t${j}-${phase.i}`, 0, CV));
      }
    }
    setArrows(next.filter(Boolean).map((a, index) => ({ ...a, key: `arc-${index}` })));
  }, [phase, cols]);

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
        j: phase.j + 1,
        aij: matrix[phase.i][phase.j],
        vi: vector[phase.i],
        entry: final[phase.j],
        ra: matrix[phase.i][0],
        rb: matrix[phase.i][1],
      };
    }
    if (phase.p === 2) {
      return {
        ...base,
        i: phase.i + 1,
        vi: vector[phase.i],
        ra: matrix[phase.i][0],
        rb: matrix[phase.i][1],
      };
    }
    return base;
  }, [phase, matrix, vector, final, rows, cols]);

  const say = useCallback((template) => fillTokens(template, vars, SYMBOLS), [vars]);

  /* Line 1: the state the figure is in, as one key — the same branches
     the narration already uses, named so explanations can be keyed by it. */
  const stateKey = useMemo(() => {
    if (phase.p === 0) return 'setup';
    if (phase.p === 1) return phase.i === rows - 1 ? 'termComplete' : 'term';
    if (phase.p === 2) return 'regroup';
    if (phase.p === 3) return 'summary';
    return 'compute';
  }, [phase, rows]);

  const narrationText = useMemo(() => {
    const n = copy.narration;
    const base = (() => {
      if (phase.p === 0) return say(n.setup);
      if (phase.p === 1) return say(phase.i === rows - 1 ? n.termComplete : n.term);
      if (phase.p === 2) return say(n.regroup);
      if (phase.p === 3) return say(n.summary);
      return say(n.compute);
    })();
    const extra = explanations && explanations[stateKey];
    return extra ? `${base} ${say(extra)}` : base;
  }, [copy, phase, rows, say, explanations, stateKey]);

  const figureText = useMemo(() => {
    const f = copy.figure;
    if (phase.p === 0) return say(f.empty);
    if (phase.p === 1) {
      if (phase.j === 0) return say(f.xOnly);
      return say(phase.i === rows - 1 ? f.crossed : f.yPartial);
    }
    if (phase.p === 2) return say(vector[phase.i] < 0 ? f.rowNegative : f.row);
    if (phase.p === 3) return say(f.summary);
    return say(f.compute);
  }, [copy, phase, rows, vector, say]);

  /* ---------------- local renderers ----------------
     These stay inside the component so scoped styles apply. */

  const symA = () => <span className="sym colA">A</span>;
  const symV = () => <span className="sym colV">v</span>;
  const symVT = () => <span className="sym colV">v<sup>T</sup></span>;

  const labelVR = (i) => (
    <>
      <span className="sym colV">v</span>
      <sub className="colV">{i + 1}</sub>
      <span className="sym colA">r</span>
      <sub className="colA">{i + 1}</sub>
    </>
  );

  const svgLabelVR = (i) => (
    <>
      <tspan fill={CV} fontStyle="italic">v</tspan>
      <tspan fill={CV} fontSize="9" dy="3">{i + 1}</tspan>
      <tspan fill={CA} fontStyle="italic" dy="-3">r</tspan>
      <tspan fill={CA} fontSize="9" dy="3">{i + 1}</tspan>
    </>
  );

  const bracket = ({ kind, columns, minWidth, mini, tall, cells }) => (
    <div
      className={[
        'grid',
        kind === 'a' ? 'gridA' : kind === 'v' ? 'gridV' : 'gridOut',
        mini ? 'gridMini' : '',
        tall ? 'gridTall' : '',
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

  /* ---------------- the result bracket: a vertical sum per entry ---------------- */

  const termState = (j, i) => {
    if (phase.p === 0) return 'hidden';
    if (phase.p === 1) {
      if (j > phase.j) return 'hidden';
      if (j < phase.j) return 'rest';
      if (i < phase.i) return 'rest';
      if (i === phase.i) return 'live';
      return 'hidden';
    }
    if (phase.p === 2) return i === phase.i ? 'live' : 'rest';
    return 'shown';
  };

  const resultCellBody = (j) => {
    if (phase.p === 0 || (phase.p === 1 && j > phase.j)) {
      return (
        <span className="placeholder">
          ({symVT()}{symA()})<sub>{j + 1}</sub>
        </span>
      );
    }
    if (phase.p === 4) return <span className="finalValue">{final[j]}</span>;

    const states = [];
    for (let i = 0; i < rows; i += 1) states.push(termState(j, i));

    return (
      <span className="sum">
        {states.map((state, i) => (
          <React.Fragment key={`term-${j}-${i}`}>
            <span
              className={[
                'pl',
                i > 0 && state !== 'hidden' && states[i - 1] !== 'hidden' ? 'plShown' : '',
              ].filter(Boolean).join(' ')}
            >
              {i > 0 ? '+' : ''}
            </span>
            <span
              ref={setNode(`t${j}-${i}`)}
              className={[
                'term',
                state !== 'hidden' ? 'termShown' : '',
                state === 'rest' ? 'termRest' : '',
                state === 'live' ? 'termLive' : '',
              ].filter(Boolean).join(' ')}
              style={{ minWidth: `${termWidths[i]}px` }}
            >
              <span className="termV">{vector[i]}</span>
              <span className="termDot">&middot;</span>
              <span className="termA">{par(matrix[i][j])}</span>
            </span>
          </React.Fragment>
        ))}
      </span>
    );
  };

  /* ---------------- board cells ---------------- */

  const vCells = [];
  for (let i = 0; i < rows; i += 1) {
    const live = (phase.p === 1 || phase.p === 2) ? (i === phase.i) : false;
    vCells.push({
      key: `v-${i}`,
      body: vector[i],
      live,
      rest: (phase.p === 1 || phase.p === 2) && !live,
      nodeRef: setNode(`vc${i}`),
    });
  }

  const aCells = [];
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const live =
        phase.p === 1 ? (i === phase.i && j === phase.j)
          : phase.p === 2 ? (i === phase.i)
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

  const rCells = [];
  for (let j = 0; j < cols; j += 1) {
    rCells.push({ key: `r-${j}`, body: resultCellBody(j), live: phase.p === 4 });
  }

  /* ---------------- factored line ---------------- */

  const factoredUpto = phase.p === 2 ? phase.i : rows - 1;
  const factoredGroups = [];

  if (phase.p >= 2) {
    for (let i = 0; i <= factoredUpto; i += 1) {
      const dim = phase.p === 2 && i !== phase.i ? 0.4 : 1;
      if (i > 0) {
        factoredGroups.push(
          <span key={`fplus-${i}`} className="fglyph" style={{ opacity: dim }}>+</span>,
        );
      }
      factoredGroups.push(
        <span key={`fg-${i}`} className="fitem" style={{ opacity: dim }}>
          <span className="frow">
            <span className="scalar">{vector[i]}</span>
            {bracket({
              kind: 'a',
              columns: cols,
              minWidth: 30,
              mini: true,
              cells: matrix[i].map((value, j) => ({ key: `fr-${i}-${j}`, body: value, live: true })),
            })}
          </span>
          <span className="flab">{labelVR(i)}</span>
        </span>,
      );
    }

    if (phase.p === 4) {
      factoredGroups.push(<span key="feq1" className="fglyph">=</span>);
      for (let i = 0; i < rows; i += 1) {
        if (i > 0) factoredGroups.push(<span key={`fp2-${i}`} className="fglyph">+</span>);
        factoredGroups.push(
          <span key={`fs-${i}`} className="fitem">
            <span className="frow">
              {bracket({
                kind: 'a',
                columns: cols,
                minWidth: 30,
                mini: true,
                cells: scaled[i].map((value, j) => ({ key: `fsv-${i}-${j}`, body: value, live: true })),
              })}
            </span>
            <span className="flab">{labelVR(i)}</span>
          </span>,
        );
      }
      factoredGroups.push(<span key="feq2" className="fglyph">=</span>);
      factoredGroups.push(
        <span key="ftot" className="fitem">
          <span className="frow">
            {bracket({
              kind: 'out',
              columns: cols,
              minWidth: 30,
              mini: true,
              cells: final.map((value, j) => ({ key: `ft-${j}`, body: value, live: true })),
            })}
          </span>
          <span className="flab">{symVT()}{symA()}</span>
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
    const out = { vline: null, hline: null, tip: null, segments: [], rawRow: null, resultant: null };

    if (phase.p === 1) {
      if (phase.j === 0) {
        let px = 0;
        for (let k = 0; k <= phase.i; k += 1) px += matrix[k][0] * vector[k];
        out.vline = { x: px, opacity: 0.7 };
      } else {
        const px = final[0];
        let py = 0;
        for (let k = 0; k <= phase.i; k += 1) py += matrix[k][1] * vector[k];
        out.vline = { x: px, opacity: 0.55 };
        out.hline = { y: py, opacity: 0.7 };
        out.tip = { x: px, y: py };
        if (phase.i === rows - 1) out.resultant = { x: px, y: py, opacity: 0.9, label: false };
      }
      return out;
    }

    if (phase.p >= 2) {
      const upto = phase.p === 2 ? phase.i : rows - 1;
      for (let i = 0; i < rows; i += 1) {
        const shown = i <= upto;
        out.segments.push({
          i,
          from: cumulative[i],
          to: shown ? cumulative[i + 1] : cumulative[i],
          opacity: shown ? (phase.p === 2 && i === phase.i ? 1 : 0.5) : 0,
        });
      }
      if (phase.p === 2) {
        out.rawRow = { i: phase.i, to: [matrix[phase.i][0], matrix[phase.i][1]] };
      } else {
        out.resultant = { x: final[0], y: final[1], opacity: phase.p === 3 ? 0.9 : 0.95, label: true };
      }
      out.tip = { x: cumulative[upto + 1][0], y: cumulative[upto + 1][1] };
    }

    return out;
  }, [phase, matrix, vector, cumulative, final, rows]);

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
    <div className={`rpvRoot ${compact ? 'rpvCompact' : ''} ${className}`.replace(/\s+/g, ' ').trim()}>
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
                <marker id="rpv-head-v" viewBox="0 0 10 10" refX="8" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M2 1L8 5L2 9" fill="none" stroke={CV} strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <marker id="rpv-head-a" viewBox="0 0 10 10" refX="8" refY="5"
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
                      <div className="nm">{symVT()}</div>
                      {bracket({ kind: 'v', columns: rows, minWidth: 42, cells: vCells })}
                      <div className="dims">
                        <span className="dim dimV">1</span>
                        <span className="dimX">&times;</span>
                        <span className="dim dimMust">{rows}</span>
                      </div>
                    </div>

                    {operator('')}

                    <div className="unit">
                      <div className="nm">{symA()}</div>
                      {bracket({ kind: 'a', columns: cols, minWidth: 42, cells: aCells })}
                      <div className="dims">
                        <span className="dim dimMust">{rows}</span>
                        <span className="dimX">&times;</span>
                        <span className="dim dimA">{cols}</span>
                      </div>
                    </div>

                    {operator('=')}

                    <div className="unit">
                      <div className="nm">{symVT()}{symA()}</div>
                      {bracket({ kind: 'out', columns: cols, minWidth: 74, tall: true, cells: rCells })}
                      <div className="dims">
                        <span className="dim dimV">1</span>
                        <span className="dimX">&times;</span>
                        <span className="dim dimA">{cols}</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="summary">
                  <div className={`general ${phase.p >= 3 ? 'generalShown' : ''}`}>
                    {phase.p >= 3 && (
                      <>
                        {symVT()}{symA()}<span className="glyph">=</span>
                        {matrix.map((unused, i) => (
                          <React.Fragment key={`gf-${i}`}>
                            {i > 0 && <span className="glyph">+</span>}
                            {labelVR(i)}
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
                          <marker id="rpv-g" viewBox="0 0 10 10" refX="9" refY="5"
                            markerWidth="5.6" markerHeight="5.6" orient="auto">
                            <path d="M3 2L8 5L3 8" fill="none" stroke={CA} strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round" />
                          </marker>
                          <marker id="rpv-gd" viewBox="0 0 10 10" refX="9" refY="5"
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

                        {geo.rawRow && (
                          <>
                            <line className="gline"
                              x1={GX(0)} y1={GY(0)}
                              x2={GX(geo.rawRow.to[0])} y2={GY(geo.rawRow.to[1])}
                              stroke={CA} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
                            <text className="gtext" fontSize="12.5" fontWeight="700"
                              textAnchor="middle" opacity="0.75"
                              {...labelPos(0, 0, geo.rawRow.to[0], geo.rawRow.to[1], true)}>
                              <tspan fill={CA} fontStyle="italic">r</tspan>
                              <tspan fill={CA} fontSize="9" dy="3">{geo.rawRow.i + 1}</tspan>
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
                          <line key={`seg-${segment.i}`} className="gline"
                            x1={GX(segment.from[0])} y1={GY(segment.from[1])}
                            x2={GX(segment.to[0])} y2={GY(segment.to[1])}
                            stroke={CA} strokeWidth="1.9" opacity={segment.opacity}
                            markerEnd="url(#rpv-g)" />
                        ))}
                        {geo.segments.filter((segment) => segment.opacity > 0).map((segment) => (
                          <text key={`seglab-${segment.i}`} className="gtext"
                            fontSize="12.5" fontWeight="700" textAnchor="middle"
                            opacity={segment.opacity}
                            {...labelPos(segment.from[0], segment.from[1], segment.to[0], segment.to[1], false)}>
                            {svgLabelVR(segment.i)}
                          </text>
                        ))}

                        {geo.resultant && (
                          <>
                            <line className="gline"
                              x1={GX(0)} y1={GY(0)} x2={GX(geo.resultant.x)} y2={GY(geo.resultant.y)}
                              stroke={CD} strokeWidth="2.5" opacity={geo.resultant.opacity}
                              markerEnd="url(#rpv-gd)" />
                            {geo.resultant.label && (
                              <text className="gtext" fontSize="12.5" fontWeight="700"
                                textAnchor="middle" opacity="0.95"
                                {...labelPos(0, 0, geo.resultant.x, geo.resultant.y, true)}>
                                <tspan fill={CD} fontStyle="italic">v</tspan>
                                <tspan fill={CD} fontSize="8" dy="-4">T</tspan>
                                <tspan fill={CD} fontStyle="italic" dy="4">A</tspan>
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
        .rpvRoot{
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

        .rpvRoot .sym{
          font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;
          font-style:italic;
          font-weight:600;
        }
        .rpvRoot .colA{ color:var(--a); font-weight:700 }
        .rpvRoot .colV{ color:var(--v); font-weight:700 }

        .rpvRoot .panel{ background:var(--paper); border:1px solid var(--rule); border-radius:3px }

        .rpvRoot .phead{
          display:flex; align-items:baseline; gap:16px; flex-wrap:wrap;
          padding:8px 16px; border-bottom:1px solid var(--info-line); background:var(--info-bg);
        }
        .rpvRoot .phead h2{
          font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;
          font-size:14.5px; font-weight:600; margin:0; color:var(--nav);
          white-space:nowrap; flex:0 0 auto;
        }
        .rpvRoot .pheadIntro{
          margin:0; font-size:12.5px; line-height:1.5; color:var(--info-tx);
          flex:1 1 420px; min-width:0;
        }
        .rpvRoot .pheadIntro br{ display:none }

        .rpvRoot .body{ padding:13px 16px 14px }

        .rpvRoot .key{
          display:flex; justify-content:center; gap:26px; flex-wrap:wrap;
          font-size:13px; color:var(--grey); margin:0 0 12px; height:22px;
        }
        .rpvRoot .keyItem{ display:inline-flex; align-items:center; gap:6px }
        .rpvRoot .keyItem br{ display:none }
        .rpvRoot .swatch{ width:12px; height:12px; border-radius:2px; display:inline-block }
        .rpvRoot .swatchA{ background:var(--a) }
        .rpvRoot .swatchV{ background:var(--v) }

        .rpvRoot .stagearea{ position:relative }
        .rpvRoot .arrows{
          position:absolute; inset:0; width:100%; height:100%;
          pointer-events:none; z-index:5; overflow:visible;
        }

        .rpvRoot .workrow{ display:flex; gap:24px; align-items:stretch }
        .rpvRoot .colL{ flex:1 1 auto; min-width:0 }
        .rpvRoot .colR{ flex:0 0 452px; display:flex }

        .rpvRoot .board{ height:244px; overflow:hidden; padding-bottom:54px }
        .rpvRoot .lay{
          display:flex; align-items:center; justify-content:center;
          gap:12px; min-width:min-content;
        }
        .rpvRoot .unit{ display:flex; flex-direction:column; align-items:center; gap:6px }
        .rpvRoot .nm{ font-size:19px; line-height:1; height:21px }

        .rpvRoot .dims{
          display:flex; align-items:center; gap:5px; height:22px;
          font-variant-numeric:tabular-nums;
        }
        .rpvRoot .dimX{ color:var(--grey); font-size:12px }
        .rpvRoot .dim{
          min-width:21px; height:20px; line-height:20px; text-align:center;
          font-size:12.5px; font-weight:700; border-radius:3px; border:1px solid transparent;
        }
        .rpvRoot .dimMust{ color:var(--ink); border-color:var(--ink); background:var(--wash); line-height:18px }
        .rpvRoot .dimA{ color:var(--a) }
        .rpvRoot .dimV{ color:var(--v) }

        .rpvRoot .grid{
          display:inline-grid; gap:0; padding:5px 3px; position:relative; color:var(--ink);
          border-left:2px solid currentColor; border-right:2px solid currentColor;
        }
        .rpvRoot .gridA{ color:var(--a) }
        .rpvRoot .gridV{ color:var(--v) }
        .rpvRoot .gridOut{
          color:var(--a);
          border-left-style:double; border-right-style:double;
          border-left-width:4px; border-right-width:4px;
        }
        .rpvRoot .grid::before, .rpvRoot .grid::after{
          content:""; position:absolute; width:8px; height:2px; background:currentColor;
        }
        .rpvRoot .grid::before{ top:0; left:-2px }
        .rpvRoot .grid::after{ bottom:0; left:-2px }
        .rpvRoot .gridOut::before, .rpvRoot .gridOut::after{ left:-4px; width:10px }
        .rpvRoot .cap{ position:absolute; width:8px; height:2px; background:currentColor; right:-2px }
        .rpvRoot .gridOut .cap{ right:-4px; width:10px }
        .rpvRoot .capT{ top:0 }
        .rpvRoot .capB{ bottom:0 }

        .rpvRoot .cell{
          padding:7px 12px; text-align:center; font-weight:400; font-size:16px;
          font-variant-numeric:tabular-nums; border-radius:2px;
          transition:opacity .25s, background .25s, font-weight .25s;
        }
        .rpvRoot .cellRest{ opacity:.35 }
        .rpvRoot .cellLive{ font-weight:700 }
        .rpvRoot .gridA .cellLive, .rpvRoot .gridOut .cellLive{ background:var(--a-wash) }
        .rpvRoot .gridV .cellLive{ background:var(--v-wash) }
        .rpvRoot .gridMini .cell{ padding:4px 8px; font-size:15px }
        .rpvRoot .gridTall .cell{ padding:7px 9px; text-align:left }
        .rpvRoot .placeholder{ opacity:.3; text-align:center; font-size:17px; padding:30px 0; display:inline-block }
        .rpvRoot .finalValue{ padding:26px 0; display:inline-block }

        .rpvRoot .sum{
          display:inline-grid; grid-template-columns:17px max-content;
          align-items:center; row-gap:1px;
        }
        .rpvRoot .pl{
          color:var(--grey); text-align:center; font-size:15px;
          opacity:0; transition:opacity .28s;
        }
        .rpvRoot .plShown{ opacity:1 }

        .rpvRoot .term{
          display:inline-block; text-align:center; padding:3px 2px; border-radius:3px;
          white-space:nowrap; opacity:0; transition:opacity .28s, background .28s;
        }
        .rpvRoot .termShown{ opacity:1 }
        .rpvRoot .termRest{ opacity:.35 }
        .rpvRoot .termLive{ background:var(--v-wash) }
        .rpvRoot .termA{ color:var(--a); font-weight:700 }
        .rpvRoot .termV{ color:var(--v); font-weight:700 }
        .rpvRoot .termDot{ color:var(--grey); padding:0 1px }

        .rpvRoot .op{ display:flex; flex-direction:column; align-items:center; gap:6px }
        .rpvRoot .opSp{ height:21px }
        .rpvRoot .opGlyph{ font-size:20px; color:var(--grey); line-height:1; min-width:12px; text-align:center }
        .rpvRoot .opSp2{ height:22px }

        .rpvRoot .summary{ height:216px; overflow:hidden; border-top:1px solid var(--rule); padding-top:14px }
        .rpvRoot .general{
          text-align:center; font-size:16.5px; margin:0 0 14px; height:80px;
          opacity:0; transition:opacity .35s;
        }
        .rpvRoot .generalShown{ opacity:1 }
        .rpvRoot .glyph{ color:var(--grey); padding:0 5px }
        .rpvRoot .generalNote{
          display:block; font-size:12.5px; color:var(--grey); margin-top:6px;
          font-weight:400; line-height:1.5;
        }
        .rpvRoot .generalNote br{ display:none }

        .rpvRoot .factored{
          display:flex; flex-wrap:nowrap; align-items:flex-start; justify-content:center;
          gap:8px; height:104px; overflow:hidden;
        }
        .rpvRoot .fitem{
          display:inline-flex; flex-direction:column; align-items:center; gap:4px;
          transition:opacity .35s;
        }
        .rpvRoot .frow{ display:inline-flex; align-items:center; gap:6px }
        .rpvRoot .flab{ font-size:12.5px; white-space:nowrap }
        .rpvRoot .scalar{ font-size:18px; font-weight:700; color:var(--v) }
        .rpvRoot .fglyph{ font-size:18px; color:var(--grey); padding-top:8px }

        .rpvRoot .diagram{
          flex:1 1 auto; display:flex; flex-direction:column; min-width:0;
          border:1px solid var(--rule); border-radius:3px;
          padding:10px 12px 11px; background:var(--paper);
        }
        .rpvRoot .diagramCap{
          font-size:10.5px; letter-spacing:.06em; text-transform:uppercase; color:var(--grey);
          margin:0 0 5px; font-weight:700; flex:0 0 auto;
        }
        .rpvRoot .diagramCap br{ display:none }

        .rpvRoot .figwrap{ flex:1 1 auto; position:relative; min-height:268px }
        .rpvRoot .figwrap svg{
          position:absolute; inset:0; width:100%; height:100%; display:block;
        }

        .rpvRoot .note{
          flex:0 0 auto; height:86px; font-size:12.5px; line-height:1.55;
          color:var(--grey); margin:9px 0 0; overflow:hidden;
        }
        .rpvRoot .note strong{ color:var(--ink); font-weight:600 }

        .rpvRoot .gline{ transition:x1 .45s ease, y1 .45s ease, x2 .45s ease, y2 .45s ease, opacity .35s }
        .rpvRoot .gdot{ transition:cx .45s ease, cy .45s ease, opacity .35s }
        .rpvRoot .gtext{ transition:x .45s ease, y .45s ease, opacity .35s }

        .rpvRoot .narr{
          margin-top:14px; padding:11px 14px; background:var(--nav-soft);
          border-left:3px solid var(--nav); font-size:13.5px; line-height:1.6;
          height:96px; overflow:hidden;
        }

        .rpvRoot .stepline{
          display:flex; align-items:center; gap:8px; padding:9px 16px;
          border-top:1px solid var(--rule); flex-wrap:wrap; background:#fbfcfe;
        }
        .rpvRoot .act{
          appearance:none; display:inline-flex; align-items:center; gap:6px;
          border:1px solid var(--nav-line); background:var(--paper); color:var(--nav);
          font:inherit; font-size:13px; font-weight:600; padding:6px 12px;
          border-radius:3px; cursor:pointer;
        }
        .rpvRoot .act:hover:not(:disabled){ background:var(--nav-soft) }
        .rpvRoot .act:disabled{ opacity:.38; cursor:default }
        .rpvRoot .actPrimary{
          background:var(--nav); border-color:var(--nav); color:#fff;
          min-width:74px; justify-content:center;
        }
        .rpvRoot .actPrimary:hover:not(:disabled){ background:var(--nav-dark) }
        .rpvRoot .act:focus-visible{ outline:2px solid var(--nav); outline-offset:2px }
        .rpvRoot .act svg{ display:block }

        .rpvRoot .sep{ width:1px; height:22px; background:var(--nav-line); margin:0 3px }

        .rpvRoot .pipwrap{ display:inline-flex; align-items:center; gap:8px; margin-left:6px }
        .rpvRoot .pipLabel{
          font-size:10.5px; font-weight:700; letter-spacing:.08em;
          text-transform:uppercase; color:var(--nav);
        }
        .rpvRoot .pips{ display:flex; gap:4px }
        .rpvRoot .pip{
          width:17px; height:7px; border-radius:2px;
          background:var(--nav-line); transition:background .2s;
        }
        .rpvRoot .pipOn{ background:var(--nav) }

        .rpvRoot .spacer{ flex:1 }
        .rpvRoot .stepnum{
          font-size:13px; font-weight:700; color:var(--nav);
          font-variant-numeric:tabular-nums;
        }
        .rpvRoot .stepnum em{
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
        .rpvCompact .phead{ align-items:center; padding:7px 16px }
        .rpvCompact .phead .key{
          margin:0; height:auto; flex:0 0 auto; gap:16px; font-size:12px;
          white-space:nowrap; margin-left:auto;
        }
        .rpvCompact .body{ padding:10px 16px }
        .rpvCompact .board{ height:196px; padding-bottom:40px }
        .rpvCompact .cell{ padding:6px 11px }
        .rpvCompact .summary{ height:176px; padding-top:10px }
        .rpvCompact .general{ height:70px; margin:0 0 8px; font-size:15.5px }
        .rpvCompact .factored{ height:88px }
        .rpvCompact .diagram{ padding:8px 12px 9px }
        .rpvCompact .figwrap{ min-height:0 }
        .rpvCompact .note{ height:70px; margin-top:7px; font-size:12px; line-height:1.45 }
        .rpvCompact .narr{ height:74px; margin-top:12px; padding:8px 14px }
        .rpvCompact .stepline{
          position:sticky; bottom:0; z-index:5;
          box-shadow:0 -6px 16px rgba(11,47,119,.10);
        }

        @media (max-width:1180px){
          .rpvRoot .workrow{ flex-direction:column; align-items:stretch }
          .rpvRoot .colR{ flex:1 1 auto; width:100%; max-width:520px; margin:0 auto }
          .rpvRoot .board{ height:auto; overflow-x:auto }
          .rpvRoot .summary{ height:auto; overflow:visible }
          .rpvRoot .general{ height:auto }
          .rpvRoot .factored{ height:auto; min-height:104px; flex-wrap:wrap; overflow:visible }
          .rpvRoot .figwrap{ min-height:300px }
          .rpvRoot .note{ height:auto; min-height:60px }
          .rpvRoot .narr{ height:auto; min-height:74px; overflow:visible }
          .rpvCompact .phead .key{ margin-left:0; white-space:normal; flex-wrap:wrap }
        }

        @media (prefers-reduced-motion:reduce){
          .rpvRoot *{ transition:none !important }
        }
      `}</style>
    </div>
  );
}
