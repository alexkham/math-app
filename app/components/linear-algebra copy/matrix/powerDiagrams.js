// Frozen-state SVGs for the Matrix Power tool (Line 1 anchor mesh).
//
// PowerWrapper keeps its scene builder private and dresses its tier-3 cells
// with hover tooltips, so these stills are composed here from the same cell
// semantics rather than pulled from the builder:
//
//   - a bare A shows a_{i,j}
//   - A² shows every cell inline: a_{i,1}a_{1,j} + a_{i,2}a_{2,j} (2×2)
//   - A³ and A⁴ show the tool's Σ summary: the sum over the inner indices of
//     the chain of factors a_{i,k1} a_{k1,k2} … a_{k,j}
//
// Four stills at the component's defaults (2×2, exponent 4):
//   chain  — the definition scene, four copies of A
//   square — stage 1 collapsed: A² · A · A, with A² written out
//   cube   — stage 2 collapsed: A³ · A, with A³ in Σ form
//   final  — A⁴, the result
//
// The tool's dashed and solid group brackets are overlays and are not
// reproduced; the highlight colours carry each state. Rendered through
// frozenMatrixSvgFixed, so the many subscripts sit on one baseline.
//
// Nothing in PowerWrapper.jsx is modified.

import React from 'react';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const SIZE = 2;
const EXPONENT = 4;

const subStyle = { fontSize: '0.65em', verticalAlign: 'sub', lineHeight: 0, fontStyle: 'italic' };
const sub = (t, key) => React.createElement('span', { style: subStyle, key }, t);
const plus = (key) => React.createElement('span', { style: { fontStyle: 'normal', margin: '0 2px' }, key }, '+');
const dots = (key) => React.createElement('span', { style: { fontStyle: 'normal', margin: '0 2px' }, key }, '⋯');

// a_{r,c} as [ 'a', sub ]
const factor = (r, c, key) => React.createElement(React.Fragment, { key }, 'a', sub(`${r},${c}`));

const SUPER = ['', 'A', 'A²', 'A³', 'A⁴', 'A⁵'];

function bareMatrix() {
  return { symbol: 'a', rows: SIZE, cols: SIZE, label: 'A', cellSize: 'auto' };
}

// A²: every cell inline, mirroring the tool's PathSum for p = 2
function squareMatrix() {
  const o = {};
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      const parts = [];
      for (let k = 0; k < SIZE; k++) {
        if (k > 0) parts.push(plus(`p${k}`));
        parts.push(factor(i + 1, k + 1, `f${k}a`));
        parts.push(factor(k + 1, j + 1, `f${k}b`));
      }
      o[`${i},${j}`] = {
        display: React.createElement(React.Fragment, null, ...parts),
        fontStyle: 'normal',
        style: { fontSize: '11px' }
      };
    }
  }
  return { symbol: 'a', rows: SIZE, cols: SIZE, label: SUPER[2], cellSize: 100, cellOverrides: o };
}

// A^p for p ≥ 3: the tool's Σ summary, written inline for the still
function sigmaMatrix(p) {
  const inner = p - 1;
  const o = {};
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      const idx = [];
      for (let d = 1; d <= inner; d++) idx.push(`k${d}`);
      const parts = [
        React.createElement('span', { style: { fontStyle: 'normal', fontSize: '1.15em' }, key: 's' }, 'Σ'),
        sub(idx.join(','), 'si'),
        React.createElement('span', { style: { fontStyle: 'normal' }, key: 'sp' }, ' '),
        factor(i + 1, 'k1', 'f1'),
      ];
      if (p === 3) {
        parts.push(factor('k1', 'k2', 'f2'));
        parts.push(factor('k2', j + 1, 'f3'));
      } else {
        parts.push(dots('d'));
        parts.push(factor(`k${inner}`, j + 1, 'fn'));
      }
      o[`${i},${j}`] = {
        display: React.createElement(React.Fragment, null, ...parts),
        fontStyle: 'normal',
        style: { fontSize: p === 3 ? '10.5px' : '10px' }
      };
    }
  }
  return { symbol: 'a', rows: SIZE, cols: SIZE, label: SUPER[p], cellSize: p === 3 ? 118 : 122, cellOverrides: o };
}

const allCells = (style) => {
  const out = [];
  for (let i = 0; i < SIZE; i++) for (let j = 0; j < SIZE; j++) out.push([i, j, style]);
  return { cells: out };
};

// scene: leftPower collapsed on the left, then (exponent − leftPower) bare copies
function collapseScene(leftPower) {
  const matrices = { LEFT: leftPower === 2 ? squareMatrix() : sigmaMatrix(leftPower) };
  const layout = [{ type: 'matrix', ref: 'LEFT' }];
  for (let r = 0; r < EXPONENT - leftPower; r++) {
    matrices[`R${r}`] = bareMatrix();
    layout.push({ type: 'operator', symbol: '·' });
    layout.push({ type: 'matrix', ref: `R${r}` });
  }
  return { matrices, layout, highlights: { LEFT: allCells('accent') } };
}

function chainScene() {
  const matrices = {};
  const layout = [];
  for (let f = 0; f < EXPONENT; f++) {
    matrices[`A${f}`] = bareMatrix();
    layout.push({ type: 'matrix', ref: `A${f}` });
    if (f < EXPONENT - 1) layout.push({ type: 'operator', symbol: '·' });
  }
  return { matrices, layout, highlights: {} };
}

const freeze = (sc) => frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });

export const meta = {
  size: SIZE,
  exponent: EXPONENT,
  termsPerCell: { 2: Math.pow(SIZE, 1), 3: Math.pow(SIZE, 2), 4: Math.pow(SIZE, 3) },
};

const powerDiagrams = {
  chain: freeze(chainScene()),
  square: freeze(collapseScene(2)),
  cube: freeze(collapseScene(3)),
  final: freeze(collapseScene(4)),
};

export default powerDiagrams;
