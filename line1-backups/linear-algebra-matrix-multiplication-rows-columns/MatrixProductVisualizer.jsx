'use client';

import React, { useState, useMemo, useRef, useCallback, useLayoutEffect, useEffect } from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import { fillTokens } from '@/app/utils/propsProcessor';

/* ============================================================
   MatrixProductVisualizer

   AB read as slices. One component, three readings, chosen with
   the `reading` prop:

     columns   every column of AB out of A's columns
     rows      every row of AB out of B's rows
     both      the definition: one row of A against one column of B,
               one entry of AB per step. Both readings live in every
               step, because the row is A's and the column is B's.

   ------------------------------------------------------------
   ENCODING TABLE. Nothing in this component may break it.

     colour            the ROLE a thing plays in this reading,
                       never which letter it is

                         blue  #1450c8  the pieces being combined
                         amber #b45309  the weights choosing how much

                       Which matrix is which SWAPS with the reading:

                         columns   pieces = columns of A
                                   weights = a column of B
                         rows      pieces = rows of B
                                   weights = a row of A

                       That swap is the lesson, not a bug. The left
                       operand always gives up columns, the right one
                       always gives up rows.

                         both      blue  = the row of A in play
                                   amber = the column of B in play
                                   Neither is a "piece" or a "weight":
                                   the two are paired term by term.

     navy  #0b2f77     AB itself. It belongs to neither side, so it
                       takes no ownership colour, and its bracket is
                       doubled to mark it as assembled.

     opacity           1    active in this step
                       .35  same object, resting

     arrow, diagram    a piece of the answer, laid tip to tail.
                       In `both`, the row of A and the column of B
                       from the origin, and the projection of the
                       row onto the column: its signed length times
                       the column's length is the entry.

     ink / grey / rule are structure only.

   ------------------------------------------------------------
   LAYOUT RULES
     1. No scrollbars. Anywhere.
     2. The control bar sits at the same y on every step and in every
        reading, so each changing region has a fixed height. The
        tallest case for the slice area is TWO slice lines at once —
        the end of the column reading — or the entry working in `both`.
     3. The diagram fills its box. Its viewBox is measured from the
        container in real pixels, so there is no fixed aspect ratio
        to letterbox.
     Heights release below 1180px, where the columns stack.

   ------------------------------------------------------------
   WHY 2x2 BY DEFAULT
     Products grow as m*k*n. At 2x2 there are eight, both columns of
     AB and rows of AB are plane vectors, and every slice is
     drawable. Larger shapes work in the algebra but lose the figure.

   NUMBER RULES — for the figure, not for the algebra.
     No weight and no piece may be zero, and no slice of AB may land
     on the origin: each would collapse an arrow to a point, with no
     direction to draw and nothing to label.

   ------------------------------------------------------------
   CONTENT
     Every string is a prop, normally from getStaticProps.
     DEFAULT_CONTENT is a fallback so a missing prop cannot crash the
     render. Per-step strings run through fillTokens first.

   STYLING
     Scoped <style jsx> at the bottom. Every helper is a local arrow
     function inside this component on purpose: JSX built in a
     separate top-level component would fall outside the style scope
     and lose its classes.
   ============================================================ */

const CP = '#1450c8';   /* pieces */
const CW = '#b45309';   /* weights */
const CR = '#0b2f77';   /* the product */

const DEFAULT_A = [[2, -1], [1, 2]];
const DEFAULT_B = [[2, 1], [1, 3]];

const SYMBOLS = {
  A: '$\\textcolor{#1450c8}{A}$',
  B: '$\\textcolor{#b45309}{B}$',
  AB: '$\\textcolor{#0b2f77}{AB}$',
};

/* ------------------------------------------------------------
   FALLBACK COPY

   Dynamic strings take these tokens:
     {A} {B} {AB}   the three symbols
     {slice}        1-based index of the column or row being built
     {piece}        1-based index of the piece in play
     {w}            the weight in play
     {i} {j}        1-based row and column of the entry in play (both)
     {rowA} {colB}  the row of A and the column of B in play, as "(a, b)"
     {entry}        the value of the entry in play
     {m} {k} {n}    the shapes

   A value may also be a (vars, symbols) => string function.
   ------------------------------------------------------------ */
export const DEFAULT_CONTENT = {
  heading: 'Matrix by matrix',

  intro:
    'The same product, read two ways. Neither reading is half of it — each one builds the whole of ' +
    '{AB}, out of different pieces. Watch which colour lands on which matrix when you switch: the left ' +
    'operand always gives up its columns, the right one always gives up its rows.',

  figureTitle: 'In the plane',

  legend: {
    piecesColumns: 'the pieces — columns of {A}',
    weightsColumns: 'the weights — a column of {B}',
    piecesRows: 'the pieces — rows of {B}',
    weightsRows: 'the weights — a row of {A}',
    rowBoth: 'row $i$ of {A}',
    colBoth: 'column $j$ of {B}',
    result: '{AB}, built from both',
    resultBoth: 'the entry they produce',
  },

  generalNote: {
    columns:
      '$\\textcolor{#1450c8}{c_p}$ is column $p$ of {A}. The weights are column $j$ of {B}. Every column ' +
      'of {AB} is a mix of the same {k} columns of {A}.',
    rows:
      '$\\textcolor{#1450c8}{r_p}$ is row $p$ of {B}. The weights are row $i$ of {A}. Every row of {AB} ' +
      'is a mix of the same {k} rows of {B}.',
    both:
      'Every step holds a row and a column at once — both readings, one entry. Row $i$ of {A} against every ' +
      'column of {B} is row $i$ of {AB}; column $j$ of {B} against every row of {A} is column $j$ of {AB}.',
  },

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
    idleSingle: 'The bracket on the right is empty. Press Run to build one slice of {AB} at a time.',
    idleBoth:
      'The definition, with both readings inside it. Every entry of {AB} is one dot product: a row of {A} ' +
      'against a column of {B}. {m} rows, {n} columns — {m} times {n} steps. Press Run.',

    buildColumns:
      'Column {slice} of {AB}, piece {piece}. Take column {piece} of {A} and scale it by {w} — entry ' +
      '{piece} of column {slice} of {B}. **{A} supplies the direction, {B} supplies the amount.**',
    buildRows:
      'Row {slice} of {AB}, piece {piece}. Take row {piece} of {B} and scale it by {w} — entry {piece} ' +
      'of row {slice} of {A}. **{B} supplies the direction, {A} supplies the amount.**',

    entry:
      'Row {i} of {A} is {rowA}. Column {j} of {B} is {colB}. Pair them term by term and add: ' +
      '**$(AB)_{{i}{j}} = {entry}$**. One row, one column, one entry.',

    genColumns:
      'Every column of {AB} is a mix of the same {k} columns of {A}. {B} never contributes a direction — ' +
      'only the amounts. That is why the left operand of a product gives up its columns.',
    genRows:
      'Every row of {AB} is a mix of the same {k} rows of {B}. {A} never contributes a direction — only ' +
      'the amounts. That is why the right operand of a product gives up its rows.',

    doneColumns:
      'The whole of {AB}, built one column at a time, with nothing used that was not already in the definition.',
    doneRows:
      'The whole of {AB}, built one row at a time, with nothing used that was not already in the definition.',
  },

  figure: {
    idle: 'Nothing built yet. Each slice of **AB** is a combination of the same fixed pieces.',
    idleBoth:
      'Nothing computed yet. Each step puts one row of **A** and one column of **B** in the plane and ' +
      'reads off the number they make.',

    buildColumns:
      'Piece {piece}, stretched by {w} and laid on the end of the last one. The direction is a column of ' +
      '**A** and never changes.',
    buildRows:
      'Piece {piece}, stretched by {w} and laid on the end of the last one. The direction is a row of ' +
      '**B** and never changes.',

    entry:
      'The thick navy segment is row {i} of **A** projected onto column {j} of **B**. Its signed length ' +
      'times the length of that column is **$(AB)_{{i}{j}} = {entry}$**.',
    entryNegative:
      'The thick navy segment is row {i} of **A** projected onto column {j} of **B**. Its signed length ' +
      'times the length of that column is **$(AB)_{{i}{j}} = {entry}$** — negative, because the projection ' +
      'points against the column.',

    doneColumns:
      'Every column of **AB**, each a mix of the same columns of A. Change B and the tips move; the ' +
      'directions do not.',
    doneRows:
      'Every row of **AB**, each a mix of the same rows of B. Change A and the tips move; the directions ' +
      'do not.',
  },
};

/* ------------------------------------------------------------
   helpers with no JSX — safe outside the component
   ------------------------------------------------------------ */

function niceStep(span) {
  const rawStep = span / 7;
  const pow = Math.pow(10, Math.floor(Math.log(rawStep) / Math.LN10));
  const q = rawStep / pow;
  const mm = q <= 1 ? 1 : q <= 2 ? 2 : q <= 5 ? 5 : 10;
  return Math.max(1, Math.round(mm * pow));
}

function randInt(lo, hi) {
  return lo + Math.floor(Math.random() * (hi - lo + 1));
}

function randIntNonZero(lo, hi) {
  let v;
  do { v = randInt(lo, hi); } while (v === 0);
  return v;
}

function product(a, b, m, k, n) {
  const out = [];
  for (let i = 0; i < m; i += 1) {
    out.push([]);
    for (let j = 0; j < n; j += 1) {
      let t = 0;
      for (let p = 0; p < k; p += 1) t += a[i][p] * b[p][j];
      out[i].push(t);
    }
  }
  return out;
}

function makeRandom(m, k, n) {
  let a = [];
  let b = [];
  let tries = 0;

  for (;;) {
    tries += 1;

    a = [];
    for (let i = 0; i < m; i += 1) {
      const row = [];
      for (let p = 0; p < k; p += 1) row.push(randIntNonZero(-3, 4));
      a.push(row);
    }
    b = [];
    for (let p = 0; p < k; p += 1) {
      const row = [];
      for (let j = 0; j < n; j += 1) row.push(randIntNonZero(-3, 4));
      b.push(row);
    }

    const ab = product(a, b, m, k, n);

    let ok = true;
    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (Math.abs(ab[i][j]) > 16) ok = false;
      }
    }
    /* keep both readings drawable: no slice may land on the origin */
    for (let j = 0; j < n; j += 1) {
      if (ab.every((row) => row[j] === 0)) ok = false;
    }
    for (let i = 0; i < m; i += 1) {
      if (ab[i].every((value) => value === 0)) ok = false;
    }

    if (ok || tries > 400) break;
  }

  return { a, b };
}

/* ============================================================ */

export default function MatrixProductVisualizer({
  reading = 'both',
  matrixA: matrixAProp,
  matrixB: matrixBProp,
  content: contentProp,
  showFigure = true,
  allowRandom = true,
  autoPlayMs = 1900,
  layout = 'stacked',
  className = '',
}) {
  const copy = useMemo(() => ({
    ...DEFAULT_CONTENT,
    ...contentProp,
    legend: { ...DEFAULT_CONTENT.legend, ...(contentProp && contentProp.legend) },
    generalNote: { ...DEFAULT_CONTENT.generalNote, ...(contentProp && contentProp.generalNote) },
    buttons: { ...DEFAULT_CONTENT.buttons, ...(contentProp && contentProp.buttons) },
    narration: { ...DEFAULT_CONTENT.narration, ...(contentProp && contentProp.narration) },
    figure: { ...DEFAULT_CONTENT.figure, ...(contentProp && contentProp.figure) },
  }), [contentProp]);

  const [A, setA] = useState(() => (matrixAProp || DEFAULT_A).map((row) => row.slice()));
  const [B, setB] = useState(() => (matrixBProp || DEFAULT_B).map((row) => row.slice()));
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [figSize, setFigSize] = useState({ w: 426, h: 280 });

  const m = A.length;
  const k = A[0].length;
  const n = B[0].length;

  const figRef = useRef(null);

  /* stage changes meaning with the reading, so restart on switch */
  useEffect(() => {
    setStage(0);
    setPlaying(false);
  }, [reading]);

  const maxStage = useMemo(() => {
    if (reading === 'both') return m * n;
    return k * (reading === 'columns' ? n : m) + 2;
  }, [reading, m, k, n]);

  /* ---------------- derived ---------------- */

  const derived = useMemo(() => {
    const ab = product(A, B, m, k, n);
    const colsOfA = [];
    for (let p = 0; p < k; p += 1) colsOfA.push(A.map((row) => row[p]));
    const rowsOfB = [];
    for (let p = 0; p < k; p += 1) rowsOfB.push(B[p].slice());
    const rowsOfA = A.map((row) => row.slice());
    const colsOfB = [];
    for (let j = 0; j < n; j += 1) colsOfB.push(B.map((row) => row[j]));
    return { ab, colsOfA, rowsOfB, rowsOfA, colsOfB };
  }, [A, B, m, k, n]);

  const { ab, colsOfA, rowsOfB, rowsOfA, colsOfB } = derived;

  const trail = useCallback((kind, index) => {
    const cum = [[0, 0]];
    for (let p = 0; p < k; p += 1) {
      const piece = kind === 'col' ? colsOfA[p] : rowsOfB[p];
      const weight = kind === 'col' ? B[p][index] : A[index][p];
      cum.push([cum[p][0] + weight * piece[0], cum[p][1] + weight * piece[1]]);
    }
    return cum;
  }, [A, B, k, colsOfA, rowsOfB]);

  /* the definition, in the plane: row i of A projected onto column j of B */
  const projection = useCallback((i, j) => {
    const r = rowsOfA[i];
    const c = colsOfB[j];
    const dot = r[0] * c[0] + r[1] * c[1];
    const l2 = c[0] * c[0] + c[1] * c[1];
    const t = l2 ? dot / l2 : 0;
    return { r, c, dot, p: [c[0] * t, c[1] * t] };
  }, [rowsOfA, colsOfB]);

  /*  stage map
        columns / rows
          0          nothing yet
          1 .. k*T   one piece at a time, T slices of k pieces
          k*T + 1    the general statement
          k*T + 2    the whole product
        both
          0          AB, nothing marked
          1 .. m*n   entry (i, j) in reading order: row i of A
                     against column j of B, one entry per step        */
  const phase = useMemo(() => {
    const q = stage;
    if (reading === 'both') {
      if (q === 0) return { p: 'idle' };
      const d = q - 1;
      return { p: 'entry', i: Math.floor(d / n), j: d % n, order: d };
    }
    const T = reading === 'columns' ? n : m;
    if (q === 0) return { p: 'idle' };
    if (q <= k * T) {
      const d = q - 1;
      return { p: 'build', index: Math.floor(d / k), piece: d % k };
    }
    if (q === k * T + 1) return { p: 'gen' };
    return { p: 'done' };
  }, [stage, reading, m, k, n]);

  const kindOf = reading === 'rows' ? 'row' : 'col';

  /* ---------------- plot ---------------- */

  const plot = useMemo(() => {
    const xs = [0];
    const ys = [0];
    if (reading === 'both') {
      for (let i = 0; i < m; i += 1) { xs.push(rowsOfA[i][0]); ys.push(rowsOfA[i][1]); }
      for (let j = 0; j < n; j += 1) { xs.push(colsOfB[j][0]); ys.push(colsOfB[j][1]); }
      for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
          const pr = projection(i, j);
          xs.push(pr.p[0]); ys.push(pr.p[1]);
        }
      }
    } else {
      for (let p = 0; p < k; p += 1) {
        xs.push(colsOfA[p][0]); ys.push(colsOfA[p][1]);
        xs.push(rowsOfB[p][0]); ys.push(rowsOfB[p][1]);
      }
      for (let j = 0; j < n; j += 1) trail('col', j).forEach((q) => { xs.push(q[0]); ys.push(q[1]); });
      for (let i = 0; i < m; i += 1) trail('row', i).forEach((q) => { xs.push(q[0]); ys.push(q[1]); });
    }

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
  }, [reading, rowsOfA, colsOfB, projection, colsOfA, rowsOfB, trail, k, m, n, figSize]);

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

  /* ---------------- playback ---------------- */

  useEffect(() => {
    if (!playing) return undefined;
    if (stage >= maxStage) { setPlaying(false); return undefined; }
    const id = setTimeout(() => setStage((s) => Math.min(maxStage, s + 1)), autoPlayMs);
    return () => clearTimeout(id);
  }, [playing, stage, maxStage, autoPlayMs]);

  const goTo = useCallback((next) => {
    setPlaying(false);
    setStage(Math.max(0, Math.min(maxStage, next)));
  }, [maxStage]);

  const toggleRun = useCallback(() => {
    setPlaying((was) => {
      if (was) return false;
      if (stage >= maxStage) setStage(0);
      return true;
    });
  }, [stage, maxStage]);

  const regenerate = useCallback(() => {
    const next = makeRandom(m, k, n);
    setPlaying(false);
    setStage(0);
    setA(next.a);
    setB(next.b);
  }, [m, k, n]);

  /* ---------------- copy ---------------- */

  const vars = useMemo(() => {
    const base = { m, k, n };
    if (phase.p === 'build') {
      return {
        ...base,
        slice: phase.index + 1,
        piece: phase.piece + 1,
        w: reading === 'columns' ? B[phase.piece][phase.index] : A[phase.index][phase.piece],
      };
    }
    if (phase.p === 'entry') {
      return {
        ...base,
        i: phase.i + 1,
        j: phase.j + 1,
        rowA: `(${rowsOfA[phase.i].join(', ')})`,
        colB: `(${colsOfB[phase.j].join(', ')})`,
        entry: ab[phase.i][phase.j],
      };
    }
    return base;
  }, [phase, reading, A, B, ab, rowsOfA, colsOfB, m, k, n]);

  const say = useCallback((template) => fillTokens(template, vars, SYMBOLS), [vars]);

  const narrationText = useMemo(() => {
    const t = copy.narration;
    switch (phase.p) {
      case 'idle': return say(reading === 'both' ? t.idleBoth : t.idleSingle);
      case 'build': return say(reading === 'columns' ? t.buildColumns : t.buildRows);
      case 'entry': return say(t.entry);
      case 'gen':
        return say(reading === 'columns' ? t.genColumns : t.genRows);
      default:
        return say(reading === 'columns' ? t.doneColumns : t.doneRows);
    }
  }, [copy, phase, reading, say]);

  const figureText = useMemo(() => {
    const t = copy.figure;
    switch (phase.p) {
      case 'idle': return say(reading === 'both' ? t.idleBoth : t.idle);
      case 'build': return say(reading === 'columns' ? t.buildColumns : t.buildRows);
      case 'entry': return say(ab[phase.i][phase.j] < 0 ? t.entryNegative : t.entry);
      default:
        return say(reading === 'columns' ? t.doneColumns : t.doneRows);
    }
  }, [copy, phase, reading, say, ab]);

  /* ---------------- local renderers ----------------
     inside the component so scoped styles apply */

  const sym = (text) => <span className="sym">{text}</span>;

  const bracket = ({ role, columns, minWidth, mini, cells }) => (
    <div
      className={[
        'grid',
        role === 'p' ? 'gridP' : role === 'w' ? 'gridW' : 'gridOut',
        mini ? 'gridMini' : '',
      ].filter(Boolean).join(' ')}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(${minWidth}px, auto))` }}
    >
      <span className="cap capT" />
      <span className="cap capB" />
      {cells.map((cell, index) => (
        <b
          key={cell.key || index}
          className={[
            'cell',
            cell.live ? 'cellLive' : '',
            cell.rest ? 'cellRest' : '',
            cell.blank ? 'cellBlank' : '',
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

  /* which matrix wears which role right now.
     In `both` the row of A is blue and the column of B amber: not
     pieces and weights, just the two operands of one dot product. */
  const roles = (() => {
    if (reading === 'rows') return { A: 'w', B: 'p' };
    return { A: 'p', B: 'w' };
  })();

  /* ---------------- board cells ---------------- */

  const dimming = phase.p === 'build' || phase.p === 'entry';

  const aCells = [];
  for (let i = 0; i < m; i += 1) {
    for (let p = 0; p < k; p += 1) {
      let live = false;
      if (reading === 'columns' && phase.p === 'build') live = p === phase.piece;
      else if (reading === 'rows' && phase.p === 'build') live = i === phase.index && p === phase.piece;
      else if (phase.p === 'entry') live = i === phase.i;
      aCells.push({ key: `a-${i}-${p}`, body: A[i][p], live, rest: dimming && !live });
    }
  }

  const bCells = [];
  for (let p = 0; p < k; p += 1) {
    for (let j = 0; j < n; j += 1) {
      let live = false;
      if (reading === 'columns' && phase.p === 'build') live = j === phase.index && p === phase.piece;
      else if (reading === 'rows' && phase.p === 'build') live = p === phase.piece;
      else if (phase.p === 'entry') live = j === phase.j;
      bCells.push({ key: `b-${p}-${j}`, body: B[p][j], live, rest: dimming && !live });
    }
  }

  const revealed = (i, j) => {
    if (phase.p === 'idle') return false;
    if (phase.p === 'gen' || phase.p === 'done') return true;
    if (reading === 'columns' && phase.p === 'build') {
      return j < phase.index || (j === phase.index && phase.piece === k - 1);
    }
    if (reading === 'rows' && phase.p === 'build') {
      return i < phase.index || (i === phase.index && phase.piece === k - 1);
    }
    if (phase.p === 'entry') return i * n + j <= phase.order;
    return false;
  };

  const rCells = [];
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const shown = revealed(i, j);
      let live = false;
      if (reading === 'columns' && phase.p === 'build') live = j === phase.index && phase.piece === k - 1;
      else if (reading === 'rows' && phase.p === 'build') live = i === phase.index && phase.piece === k - 1;
      else if (phase.p === 'entry') live = i === phase.i && j === phase.j;
      rCells.push({
        key: `r-${i}-${j}`,
        body: shown ? ab[i][j] : '?',
        live,
        rest: phase.p === 'entry' && shown && !live,
        blank: !shown,
      });
    }
  }

  /* ---------------- slice lines ---------------- */

  const pieceBracket = (kind, p) => bracket({
    role: 'p',
    columns: kind === 'col' ? 1 : n,
    minWidth: 30,
    mini: true,
    cells: (kind === 'col' ? colsOfA[p] : rowsOfB[p])
      .map((value, index) => ({ key: `pb-${p}-${index}`, body: value, live: true })),
  });

  const sliceBracket = (kind, index) => {
    const cells = kind === 'col'
      ? ab.map((row, i) => ({ key: `sb-${index}-${i}`, body: row[index], live: true }))
      : ab[index].map((value, j) => ({ key: `sb-${index}-${j}`, body: value, live: true }));
    return bracket({ role: 'r', columns: kind === 'col' ? 1 : n, minWidth: 30, mini: true, cells });
  };

  const sliceLine = (kind, index, upto, tag, activePiece, lineKey) => {
    const parts = [];
    for (let p = 0; p <= upto; p += 1) {
      const dim = (activePiece !== null && activePiece !== undefined && p !== activePiece) ? 0.4 : 1;
      if (p > 0) {
        parts.push(<span key={`plus-${lineKey}-${p}`} className="sglyph" style={{ opacity: dim }}>+</span>);
      }
      parts.push(
        <span key={`it-${lineKey}-${p}`} className="fitem" style={{ opacity: dim }}>
          <span className="frow">
            <span className="scalar">{kind === 'col' ? B[p][index] : A[index][p]}</span>
            {pieceBracket(kind, p)}
          </span>
          <span className="flab">
            {kind === 'col' ? (
              <>
                <span className="colW">b<sub>{p + 1}{index + 1}</sub></span>
                <span className="colP">c<sub>{p + 1}</sub></span>
              </>
            ) : (
              <>
                <span className="colW">a<sub>{index + 1}{p + 1}</sub></span>
                <span className="colP">r<sub>{p + 1}</sub></span>
              </>
            )}
          </span>
        </span>,
      );
    }

    if (upto === k - 1) {
      parts.push(<span key={`eq-${lineKey}`} className="sglyph">=</span>);
      parts.push(
        <span key={`tot-${lineKey}`} className="fitem">
          <span className="frow">{sliceBracket(kind, index)}</span>
          <span className="flab">
            <span className="tintR">
              {kind === 'col' ? `col ${index + 1}` : `row ${index + 1}`} of AB
            </span>
          </span>
        </span>,
      );
    }

    return (
      <div className="sliceline" key={`line-${lineKey}`}>
        <span className="sliceTag">{tag}</span>
        {parts}
      </div>
    );
  };

  /* ---------------- the working: one entry (both) ---------------- */

  const vecBracket = (role, values, vertical, keyPrefix) => bracket({
    role,
    columns: vertical ? 1 : values.length,
    minWidth: 30,
    mini: true,
    cells: values.map((value, index) => ({ key: `${keyPrefix}-${index}`, body: value, live: true })),
  });

  const entryWork = (i, j) => {
    const r = rowsOfA[i];
    const c = colsOfB[j];
    const terms = [];
    for (let p = 0; p < k; p += 1) {
      terms.push(
        <React.Fragment key={`term-${p}`}>
          <span className="termIdx">
            a<sub>{i + 1}{p + 1}</sub>&thinsp;b<sub>{p + 1}{j + 1}</sub>
          </span>
          <span className="chip chipP">{r[p]}</span>
          <span className="sglyph">&times;</span>
          <span className="chip chipW">{c[p]}</span>
          <span className="sglyph">=</span>
          <span className="termProd">{r[p] * c[p]}</span>
        </React.Fragment>,
      );
    }
    return (
      <div className="entrywork">
        <div className="entryHead">
          <span className="fitem">
            <span className="frow">{vecBracket('p', r, false, `er-${i}`)}</span>
            <span className="flab"><span className="colP">row {i + 1} of A</span></span>
          </span>
          <span className="sglyph">&middot;</span>
          <span className="fitem">
            <span className="frow">{vecBracket('w', c, true, `ec-${j}`)}</span>
            <span className="flab"><span className="colW">col {j + 1} of B</span></span>
          </span>
          <span className="sglyph">=</span>
          <span className="fitem">
            <span className="frow">{vecBracket('r', [ab[i][j]], true, `ee-${i}-${j}`)}</span>
            <span className="flab"><span className="tintR">(AB)<sub>{i + 1}{j + 1}</sub></span></span>
          </span>
        </div>
        <div className="entryTable">{terms}</div>
        <div className="entrySum">
          <span>add them</span>
          <span className="sglyph">&rarr;</span>
          <span className="entryTot">{ab[i][j]}</span>
          <span>into cell ({i + 1},&nbsp;{j + 1}) of AB</span>
        </div>
      </div>
    );
  };

  const sliceLines = (() => {
    if (phase.p === 'idle') return null;

    if (reading === 'both') {
      return entryWork(phase.i, phase.j);
    }

    const T = reading === 'columns' ? n : m;
    const out = [];
    if (phase.p === 'build') {
      for (let i = 0; i <= phase.index; i += 1) {
        out.push(sliceLine(kindOf, i, i < phase.index ? k - 1 : phase.piece, '',
          i === phase.index ? phase.piece : null, `b${i}`));
      }
    } else {
      for (let i = 0; i < T; i += 1) out.push(sliceLine(kindOf, i, k - 1, '', null, `f${i}`));
    }
    return out;
  })();

  const showGeneral = phase.p === 'gen' || phase.p === 'done'
    || (phase.p === 'entry' && phase.order === m * n - 1);

  /* ---------------- diagram ---------------- */

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

  const drawTrail = (kind, index, upto, labelText, strong, keyPrefix) => {
    const cum = trail(kind, index);
    const out = [];

    for (let p = 0; p <= upto && p < k; p += 1) {
      out.push(
        <line key={`${keyPrefix}-seg-${p}`} className="gline"
          x1={GX(cum[p][0])} y1={GY(cum[p][1])} x2={GX(cum[p + 1][0])} y2={GY(cum[p + 1][1])}
          stroke={CP} strokeWidth="1.9" opacity={strong ? 0.85 : 0.4} markerEnd="url(#mpv-piece)" />,
      );
    }

    if (upto >= k - 1) {
      out.push(
        <line key={`${keyPrefix}-res`} className="gline"
          x1={GX(0)} y1={GY(0)} x2={GX(cum[k][0])} y2={GY(cum[k][1])}
          stroke={CR} strokeWidth="2.4" opacity={strong ? 0.95 : 0.5} markerEnd="url(#mpv-res)" />,
      );
      if (labelText) {
        out.push(
          <text key={`${keyPrefix}-lab`} fontSize="12" fontWeight="700" fill={CR}
            x={Math.max(30, Math.min(figSize.w - 8, GX(cum[k][0]) + 8))}
            y={Math.max(14, GY(cum[k][1]) - 8)}>{labelText}</text>,
        );
      }
      out.push(
        <circle key={`${keyPrefix}-dot`} className="gdot"
          cx={GX(cum[k][0])} cy={GY(cum[k][1])} r="3.4" fill={CR} />,
      );
    }

    return out;
  };

  const drawEntry = (i, j) => {
    const pr = projection(i, j);
    const lab = (x, y) => ({
      x: Math.max(26, Math.min(figSize.w - 86, x)),
      y: Math.max(13, Math.min(figSize.h - 5, y)),
    });
    const rowLab = lab(GX(pr.r[0]) + 7, GY(pr.r[1]) - 7);
    const colLab = lab(GX(pr.c[0]) + 7, GY(pr.c[1]) + 15);
    return [
      <line key="e-col" className="gline"
        x1={GX(0)} y1={GY(0)} x2={GX(pr.c[0])} y2={GY(pr.c[1])}
        stroke={CW} strokeWidth="2.1" markerEnd="url(#mpv-weight)" />,
      <line key="e-row" className="gline"
        x1={GX(0)} y1={GY(0)} x2={GX(pr.r[0])} y2={GY(pr.r[1])}
        stroke={CP} strokeWidth="2.1" markerEnd="url(#mpv-piece)" />,
      <line key="e-drop" className="gline"
        x1={GX(pr.r[0])} y1={GY(pr.r[1])} x2={GX(pr.p[0])} y2={GY(pr.p[1])}
        stroke="#8b94a3" strokeWidth="1" strokeDasharray="3 3" />,
      <line key="e-proj" className="gline"
        x1={GX(0)} y1={GY(0)} x2={GX(pr.p[0])} y2={GY(pr.p[1])}
        stroke={CR} strokeWidth="3.4" opacity="0.9" />,
      <circle key="e-dot" className="gdot" cx={GX(pr.p[0])} cy={GY(pr.p[1])} r="3.4" fill={CR} />,
      <text key="e-rowlab" fontSize="12" fontWeight="700" fill={CP} x={rowLab.x} y={rowLab.y}>
        row {i + 1} of A
      </text>,
      <text key="e-collab" fontSize="12" fontWeight="700" fill={CW} x={colLab.x} y={colLab.y}>
        col {j + 1} of B
      </text>,
    ];
  };

  const trails = (() => {
    if (phase.p === 'idle') return null;

    if (reading === 'both') {
      return drawEntry(phase.i, phase.j);
    }

    if (phase.p === 'build') {
      return drawTrail(kindOf, phase.index, phase.piece, null, true, 'b');
    }

    const T = reading === 'columns' ? n : m;
    const all = [];
    for (let i = 0; i < T; i += 1) {
      all.push(...drawTrail(kindOf, i, k - 1,
        `${kindOf === 'col' ? 'col' : 'row'} ${i + 1}`, i === T - 1, `f${i}`));
    }
    return all;
  })();

  /* ---------------- legend text ---------------- */

  const legendPieces = (() => {
    if (reading === 'columns') return copy.legend.piecesColumns;
    if (reading === 'rows') return copy.legend.piecesRows;
    return copy.legend.rowBoth;
  })();

  const legendWeights = (() => {
    if (reading === 'columns') return copy.legend.weightsColumns;
    if (reading === 'rows') return copy.legend.weightsRows;
    return copy.legend.colBoth;
  })();

  const legendResult = reading === 'both' ? copy.legend.resultBoth : copy.legend.result;

  const generalNote = (() => {
    if (reading === 'columns') return copy.generalNote.columns;
    if (reading === 'rows') return copy.generalNote.rows;
    return copy.generalNote.both;
  })();

  const buttons = copy.buttons;

  /* ============================================================ */

  const compact = layout === 'compact';

  const keyRow = (
    <div className="key">
      <span className="keyItem"><i className="swatch swatchP" />{processContent(say(legendPieces))}</span>
      <span className="keyItem"><i className="swatch swatchW" />{processContent(say(legendWeights))}</span>
      <span className="keyItem"><i className="swatch swatchR" />{processContent(say(legendResult))}</span>
    </div>
  );

  return (
    <div className={`mpvRoot ${compact ? 'mpvCompact' : ''} ${className}`.replace(/\s+/g, ' ').trim()}>
      <section className="panel">

        <div className="phead">
          <h2>{processContent(copy.heading)}</h2>
          <div className="pheadIntro">{processContent(say(copy.intro))}</div>
          {compact && keyRow}
        </div>

        <div className="body">

          {!compact && keyRow}

          <div className="workrow">
            <div className="colL">
              <div className="board">
                <div className="lay">

                  <div className="unit">
                    <div className="nm">{sym('A')}</div>
                    {bracket({ role: roles.A, columns: k, minWidth: 44, cells: aCells })}
                    <div className="dims">
                      <span className="dim">{m}</span>
                      <span className="dimX">&times;</span>
                      <span className="dim dimMust">{k}</span>
                    </div>
                  </div>

                  {operator('')}

                  <div className="unit">
                    <div className="nm">{sym('B')}</div>
                    {bracket({ role: roles.B, columns: n, minWidth: 44, cells: bCells })}
                    <div className="dims">
                      <span className="dim dimMust">{k}</span>
                      <span className="dimX">&times;</span>
                      <span className="dim">{n}</span>
                    </div>
                  </div>

                  {operator('=')}

                  <div className="unit">
                    <div className="nm">{sym('AB')}</div>
                    {bracket({ role: 'r', columns: n, minWidth: 50, cells: rCells })}
                    <div className="dims">
                      <span className="dim">{m}</span>
                      <span className="dimX">&times;</span>
                      <span className="dim">{n}</span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="summary">
                <div className={`general ${showGeneral ? 'generalShown' : ''}`}>
                  {showGeneral && (
                    <>
                      {reading === 'columns' && (
                        <>
                          <span className="tintR">column <i>j</i> of AB</span>
                          <span className="sglyph">=</span>
                          <span className="colW">b<sub>1<i>j</i></sub></span><span className="colP">c<sub>1</sub></span>
                          <span className="sglyph">+</span>
                          <span className="colW">b<sub>2<i>j</i></sub></span><span className="colP">c<sub>2</sub></span>
                        </>
                      )}
                      {reading === 'rows' && (
                        <>
                          <span className="tintR">row <i>i</i> of AB</span>
                          <span className="sglyph">=</span>
                          <span className="colW">a<sub><i>i</i>1</sub></span><span className="colP">r<sub>1</sub></span>
                          <span className="sglyph">+</span>
                          <span className="colW">a<sub><i>i</i>2</sub></span><span className="colP">r<sub>2</sub></span>
                        </>
                      )}
                      {reading === 'both' && (
                        <>
                          <span className="tintR">(AB)<sub><i>ij</i></sub></span>
                          <span className="sglyph">=</span>
                          <span className="colP">row <i>i</i> of A</span>
                          <span className="sglyph">&middot;</span>
                          <span className="colW">column <i>j</i> of B</span>
                        </>
                      )}
                      <span className="generalNote">{processContent(say(generalNote))}</span>
                    </>
                  )}
                </div>
                <div className="slices">{sliceLines}</div>
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
                        <marker id="mpv-piece" viewBox="0 0 10 10" refX="9" refY="5"
                          markerWidth="5.6" markerHeight="5.6" orient="auto">
                          <path d="M3 2L8 5L3 8" fill="none" stroke={CP} strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </marker>
                        <marker id="mpv-res" viewBox="0 0 10 10" refX="9" refY="5"
                          markerWidth="5.6" markerHeight="5.6" orient="auto">
                          <path d="M3 2L8 5L3 8" fill="none" stroke={CR} strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </marker>
                        <marker id="mpv-weight" viewBox="0 0 10 10" refX="9" refY="5"
                          markerWidth="5.6" markerHeight="5.6" orient="auto">
                          <path d="M3 2L8 5L3 8" fill="none" stroke={CW} strokeWidth="1.5"
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
                      <g>{trails}</g>
                    </svg>
                  </div>

                  <div className="note">{processContent(figureText)}</div>
                </div>
              </div>
            )}
          </div>

          <div className="narr" aria-live="polite">{processContent(narrationText)}</div>
        </div>

        <div className="stepline">
          <button type="button" className="act" onClick={() => goTo(stage - 1)} disabled={stage <= 0}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17 3 6 12l11 9z" />
            </svg>
            {buttons.back}
          </button>

          <button type="button" className="act actPrimary" onClick={toggleRun}>
            {playing ? buttons.pause : buttons.run}
          </button>

          <button type="button" className="act" onClick={() => goTo(stage + 1)} disabled={stage >= maxStage}>
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
              {Array.from({ length: maxStage }, (unused, i) => (
                <i key={`pip-${i}`} className={`pip ${stage > i ? 'pipOn' : ''}`} />
              ))}
            </span>
          </span>

          <span className="spacer" />
          <span className="stepnum">
            <em>{buttons.stepLabel}</em>{stage} / {maxStage}
          </span>
        </div>
      </section>

      <style jsx global>{`
        .mpvRoot{
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

          --p:#1450c8;  --p-wash:#e4ecfd;
          --w:#b45309;  --w-wash:#fbf0e2;
          --r:#0b2f77;  --r-wash:#e7edf8;

          color:var(--ink);
          font-size:15px;
          line-height:1.55;
          -webkit-font-smoothing:antialiased;
        }

        .mpvRoot .sym{
          font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;
          font-style:italic;
          font-weight:600;
        }
        .mpvRoot .colP{ color:var(--p); font-weight:700 }
        .mpvRoot .colW{ color:var(--w); font-weight:700 }
        .mpvRoot .tintR{ color:var(--r); font-weight:700 }

        .mpvRoot .panel{ background:var(--paper); border:1px solid var(--rule); border-radius:3px }

        .mpvRoot .phead{
          display:flex; align-items:baseline; gap:16px; flex-wrap:wrap;
          padding:8px 16px; border-bottom:1px solid var(--info-line); background:var(--info-bg);
        }
        .mpvRoot .phead h2{
          font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;
          font-size:14.5px; font-weight:600; margin:0; color:var(--nav);
          white-space:nowrap; flex:0 0 auto;
        }
        .mpvRoot .pheadIntro{
          margin:0; font-size:12.5px; line-height:1.5; color:var(--info-tx);
          flex:1 1 420px; min-width:0;
        }
        .mpvRoot .pheadIntro br{ display:none }

        .mpvRoot .body{ padding:13px 16px 14px }

        .mpvRoot .key{
          display:flex; justify-content:center; gap:26px; flex-wrap:wrap;
          font-size:13px; color:var(--grey); margin:0 0 12px; height:22px;
        }
        .mpvRoot .keyItem{ display:inline-flex; align-items:center; gap:6px }
        .mpvRoot .keyItem br{ display:none }
        .mpvRoot .swatch{ width:12px; height:12px; border-radius:2px; display:inline-block }
        .mpvRoot .swatchP{ background:var(--p) }
        .mpvRoot .swatchW{ background:var(--w) }
        .mpvRoot .swatchR{ background:var(--r) }

        .mpvRoot .workrow{ display:flex; gap:24px; align-items:stretch }
        .mpvRoot .colL{ flex:1 1 auto; min-width:0 }
        .mpvRoot .colR{ flex:0 0 452px; display:flex }

        .mpvRoot .board{
          height:196px; overflow:hidden;
          display:flex; align-items:center; justify-content:center;
        }
        .mpvRoot .lay{
          display:flex; align-items:center; justify-content:center;
          gap:12px; min-width:min-content;
        }
        .mpvRoot .unit{ display:flex; flex-direction:column; align-items:center; gap:6px }
        .mpvRoot .nm{ font-size:19px; line-height:1; height:21px }

        .mpvRoot .dims{
          display:flex; align-items:center; gap:5px; height:22px;
          font-variant-numeric:tabular-nums;
        }
        .mpvRoot .dimX{ color:var(--grey); font-size:12px }
        .mpvRoot .dim{
          min-width:21px; height:20px; line-height:20px; text-align:center;
          font-size:12.5px; font-weight:700; border-radius:3px; border:1px solid transparent;
        }
        .mpvRoot .dimMust{ color:var(--ink); border-color:var(--ink); background:var(--wash); line-height:18px }

        .mpvRoot .grid{
          display:inline-grid; gap:0; padding:5px 3px; position:relative; color:var(--ink);
          border-left:2px solid currentColor; border-right:2px solid currentColor;
          transition:color .35s;
        }
        .mpvRoot .gridP{ color:var(--p) }
        .mpvRoot .gridW{ color:var(--w) }
        .mpvRoot .gridOut{
          color:var(--r);
          border-left-style:double; border-right-style:double;
          border-left-width:4px; border-right-width:4px;
        }
        .mpvRoot .grid::before, .mpvRoot .grid::after{
          content:""; position:absolute; width:8px; height:2px; background:currentColor;
        }
        .mpvRoot .grid::before{ top:0; left:-2px }
        .mpvRoot .grid::after{ bottom:0; left:-2px }
        .mpvRoot .gridOut::before, .mpvRoot .gridOut::after{ left:-4px; width:10px }
        .mpvRoot .cap{ position:absolute; width:8px; height:2px; background:currentColor; right:-2px }
        .mpvRoot .gridOut .cap{ right:-4px; width:10px }
        .mpvRoot .capT{ top:0 }
        .mpvRoot .capB{ bottom:0 }

        .mpvRoot .cell{
          padding:8px 15px; text-align:center; font-weight:400; font-size:16px;
          font-variant-numeric:tabular-nums; border-radius:2px;
          transition:opacity .3s, background .3s, font-weight .3s, color .35s;
        }
        .mpvRoot .cellRest{ opacity:.35 }
        .mpvRoot .cellBlank{ opacity:.25 }
        .mpvRoot .cellLive{ font-weight:700 }
        .mpvRoot .gridP .cellLive{ background:var(--p-wash) }
        .mpvRoot .gridW .cellLive{ background:var(--w-wash) }
        .mpvRoot .gridOut .cellLive{ background:var(--r-wash) }
        .mpvRoot .gridMini .cell{ padding:4px 9px; font-size:14.5px }

        .mpvRoot .op{ display:flex; flex-direction:column; align-items:center; gap:6px }
        .mpvRoot .opSp{ height:21px }
        .mpvRoot .opGlyph{ font-size:20px; color:var(--grey); line-height:1; min-width:12px; text-align:center }
        .mpvRoot .opSp2{ height:22px }

        .mpvRoot /* sized for the tallest case: two slice lines plus the general statement */
        .summary{ height:272px; overflow:hidden; border-top:1px solid var(--rule); padding-top:14px }
        .mpvRoot .general{
          text-align:center; font-size:16.5px; margin:0 0 10px; height:70px;
          opacity:0; transition:opacity .35s;
        }
        .mpvRoot .generalShown{ opacity:1 }
        .mpvRoot .sglyph{ color:var(--grey); padding:0 5px }
        .mpvRoot .generalNote{
          display:block; font-size:12.5px; color:var(--grey); margin-top:5px;
          font-weight:400; line-height:1.5;
        }
        .mpvRoot .generalNote br{ display:none }

        .mpvRoot .slices{
          display:flex; flex-direction:column; gap:8px; align-items:center;
          height:178px; overflow:hidden;
        }
        .mpvRoot .sliceline{
          display:flex; align-items:flex-start; justify-content:center;
          gap:8px; flex-wrap:nowrap;
        }
        .mpvRoot .sliceTag{
          font-size:11px; color:var(--grey); align-self:center; min-width:86px;
          text-align:right; padding-right:4px; line-height:1.35;
        }
        .mpvRoot .fitem{
          display:inline-flex; flex-direction:column; align-items:center; gap:3px;
          transition:opacity .35s;
        }
        .mpvRoot .frow{ display:inline-flex; align-items:center; gap:6px }
        .mpvRoot .flab{ font-size:12px; white-space:nowrap }
        .mpvRoot .scalar{ font-size:17px; font-weight:700; color:var(--w) }
        .mpvRoot .slices .sglyph{ font-size:17px; padding-top:7px }

        /* the working for one entry: row . column, the terms, the sum */
        .mpvRoot .entrywork{ display:flex; flex-direction:column; align-items:center; gap:4px; width:100% }
        .mpvRoot .entryHead{ display:flex; align-items:flex-start; justify-content:center; gap:8px }
        .mpvRoot .entryTable{
          display:grid; grid-template-columns:auto auto auto auto auto auto;
          align-items:center; column-gap:6px; row-gap:1px; font-size:14px;
        }
        .mpvRoot .entryTable .sglyph{ font-size:14px; padding:0 2px }
        .mpvRoot .termIdx{ font-size:11.5px; color:var(--grey); padding-right:8px; white-space:nowrap }
        .mpvRoot .termProd{ font-weight:700; min-width:26px; text-align:right }
        .mpvRoot .chip{
          display:inline-block; min-width:24px; text-align:center; padding:1px 6px;
          border-radius:3px; font-weight:700;
        }
        .mpvRoot .chipP{ background:var(--p-wash); color:var(--p) }
        .mpvRoot .chipW{ background:var(--w-wash); color:var(--w) }
        .mpvRoot .entrySum{
          display:flex; align-items:center; gap:6px; font-size:12.5px; color:var(--grey);
        }
        .mpvRoot .entrySum .sglyph{ font-size:14px; padding:0 }
        .mpvRoot .entryTot{
          font-size:17px; font-weight:700; color:var(--r); background:var(--r-wash);
          padding:1px 10px; border-radius:3px;
        }

        .mpvRoot .diagram{
          flex:1 1 auto; display:flex; flex-direction:column; min-width:0;
          border:1px solid var(--rule); border-radius:3px;
          padding:10px 12px 11px; background:var(--paper);
        }
        .mpvRoot .diagramCap{
          font-size:10.5px; letter-spacing:.06em; text-transform:uppercase; color:var(--grey);
          margin:0 0 5px; font-weight:700; flex:0 0 auto;
        }
        .mpvRoot .diagramCap br{ display:none }

        .mpvRoot .figwrap{ flex:1 1 auto; position:relative; min-height:250px }
        .mpvRoot .figwrap svg{
          position:absolute; inset:0; width:100%; height:100%; display:block;
        }

        .mpvRoot .note{
          flex:0 0 auto; height:86px; font-size:12.5px; line-height:1.55;
          color:var(--grey); margin:9px 0 0; overflow:hidden;
        }
        .mpvRoot .note strong{ color:var(--ink); font-weight:600 }

        .mpvRoot .gline{ transition:x1 .45s ease, y1 .45s ease, x2 .45s ease, y2 .45s ease, opacity .35s }
        .mpvRoot .gdot{ transition:cx .45s ease, cy .45s ease, opacity .35s }

        .mpvRoot .narr{
          margin-top:14px; padding:11px 14px; background:var(--nav-soft);
          border-left:3px solid var(--nav); font-size:13.5px; line-height:1.6;
          height:92px; overflow:hidden;
        }

        .mpvRoot .stepline{
          display:flex; align-items:center; gap:8px; padding:9px 16px;
          border-top:1px solid var(--rule); flex-wrap:wrap; background:#fbfcfe;
        }
        .mpvRoot .act{
          appearance:none; display:inline-flex; align-items:center; gap:6px;
          border:1px solid var(--nav-line); background:var(--paper); color:var(--nav);
          font:inherit; font-size:13px; font-weight:600; padding:6px 12px;
          border-radius:3px; cursor:pointer;
        }
        .mpvRoot .act:hover:not(:disabled){ background:var(--nav-soft) }
        .mpvRoot .act:disabled{ opacity:.38; cursor:default }
        .mpvRoot .actPrimary{
          background:var(--nav); border-color:var(--nav); color:#fff;
          min-width:74px; justify-content:center;
        }
        .mpvRoot .actPrimary:hover:not(:disabled){ background:var(--nav-dark) }
        .mpvRoot .act:focus-visible{ outline:2px solid var(--nav); outline-offset:2px }
        .mpvRoot .act svg{ display:block }

        .mpvRoot .sep{ width:1px; height:22px; background:var(--nav-line); margin:0 3px }

        .mpvRoot .pipwrap{ display:inline-flex; align-items:center; gap:8px; margin-left:6px }
        .mpvRoot .pipLabel{
          font-size:10.5px; font-weight:700; letter-spacing:.08em;
          text-transform:uppercase; color:var(--nav);
        }
        .mpvRoot .pips{ display:flex; gap:4px }
        .mpvRoot .pip{
          width:17px; height:7px; border-radius:2px;
          background:var(--nav-line); transition:background .2s;
        }
        .mpvRoot .pipOn{ background:var(--nav) }

        .mpvRoot .spacer{ flex:1 }
        .mpvRoot .stepnum{
          font-size:13px; font-weight:700; color:var(--nav);
          font-variant-numeric:tabular-nums;
        }
        .mpvRoot .stepnum em{
          font-style:normal; font-weight:700; font-size:10.5px;
          letter-spacing:.08em; text-transform:uppercase; margin-right:7px;
        }

        /* ------------------------------------------------------------
           layout="compact"
           Three columns — matrices | algebra | plane — instead of the
           algebra stacked under the matrices, the legend folded into
           the header strip, and the button row pinned to the bottom of
           the window while the panel is on screen. Cuts the panel from
           ~785px to ~520px so title and controls fit on a 768px screen.
           ------------------------------------------------------------ */
        .mpvCompact .phead{ align-items:center; padding:7px 16px }
        .mpvCompact .phead .key{
          margin:0; height:auto; flex:0 0 auto; gap:16px; font-size:12px;
          white-space:nowrap; margin-left:auto;
        }
        .mpvCompact .body{ padding:12px 16px }
        .mpvCompact .workrow{ gap:0 }
        .mpvCompact .colL{ display:contents }
        .mpvCompact .board{
          flex:0 0 auto; height:auto; align-self:center;
          padding:0 14px 0 4px; border-right:1px solid var(--rule);
        }
        .mpvCompact .board .cell{ padding:7px 12px }
        .mpvCompact .lay{ gap:10px }
        .mpvCompact .summary{
          flex:1 1 auto; min-width:0; height:auto; align-self:stretch;
          border-top:none; padding:0 10px; overflow:hidden;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
        }
        .mpvCompact .general{ height:auto; min-height:0; margin:0 0 8px; font-size:15.5px }
        .mpvCompact .general:not(.generalShown){ display:none }
        .mpvCompact .slices{ height:auto; overflow:visible; gap:6px }
        .mpvCompact .colR{ flex:0 0 clamp(340px, calc(100vh - 380px), 480px); margin-left:14px }
        .mpvCompact .diagram{ padding:8px 12px 9px }
        /* The plane takes whatever height is left above the fold: everything
           else on the page (nav, title, how-to, tabs, header strip, note,
           narration, button row) adds up to ~572px, so the figure grows with
           the window and the button row stays just inside it. */
        .mpvCompact .figwrap{
          flex:0 0 auto; min-height:0;
          height:clamp(196px, calc(100vh - 572px), 400px);
        }
        .mpvCompact .note{ height:70px; margin-top:7px; font-size:12px; line-height:1.45 }
        .mpvCompact .narr{ height:auto; min-height:44px; margin-top:12px; padding:8px 14px }
        .mpvCompact .stepline{
          position:sticky; bottom:0; z-index:5;
          box-shadow:0 -6px 16px rgba(11,47,119,.10);
        }

        @media (max-width:1180px){
          .mpvRoot .workrow{ flex-direction:column; align-items:stretch }
          .mpvRoot .colR{ flex:1 1 auto; width:100%; max-width:520px; margin:0 auto }
          .mpvRoot .board{ height:auto; overflow-x:auto }
          .mpvRoot .summary{ height:auto; overflow:visible }
          .mpvRoot .general{ height:auto }
          .mpvRoot .slices{ height:auto; overflow:visible }
          .mpvRoot .figwrap{ min-height:290px }
          .mpvRoot .note{ height:auto; min-height:60px }
          .mpvRoot .narr{ height:auto; min-height:74px; overflow:visible }

          .mpvCompact .board{ border-right:none; padding:0; align-self:auto }
          .mpvCompact .summary{ padding:10px 0 0; border-top:1px solid var(--rule); margin-top:10px }
          .mpvCompact .colR{ margin:12px auto 0 }
          .mpvCompact .figwrap{ height:auto; min-height:290px }
          .mpvCompact .phead .key{ margin-left:0; white-space:normal; flex-wrap:wrap }
        }

        @media (prefers-reduced-motion:reduce){
          .mpvRoot *{ transition:none !important }
        }
      `}</style>
    </div>
  );
}
