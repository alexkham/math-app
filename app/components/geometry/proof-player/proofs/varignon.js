// ===========================================================
// proofs/varignon.js — Varignon's theorem
// The midpoints of the sides of any quadrilateral are the
// vertices of a parallelogram. Each diagonal of ABCD is the
// third side of two triangles whose midsegments are opposite
// sides of PQRS; the midsegment theorem makes both parallel to
// that diagonal, so both pairs of opposite sides are parallel.
// Phases: given, diag1, mid1, mid2, diag2, conclude
// ===========================================================

import { dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout
const cross = (p, q, r) => (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);

const varignon = {
  label: 'Varignon’s theorem',
  info:
    'P, Q, R, S are the midpoints of the sides of ABCD. The diagonal AC makes two triangles, ' +
    'ABC and ADC; PQ and SR are their midsegments, so both are parallel to AC. The diagonal BD ' +
    'does the same for QR and PS. Both pairs of opposite sides of PQRS are parallel: it is a ' +
    'parallelogram, whatever shape ABCD has. Drag any vertex.',
  hint: 'Drag A, B, C or D; the midpoints follow',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the quadrilateral and its labels.
  viewBox: [60, 60, 440, 320],

  model: {
    points: { A: { x: 110, y: 290 }, B: { x: 300, y: 350 }, C: { x: 440, y: 160 }, D: { x: 190, y: 90 } },
    params: {},
    composites: [],
    objects: [
      { id: 'P', type: 'midpoint', of: ['A', 'B'] },
      { id: 'Q', type: 'midpoint', of: ['B', 'C'] },
      { id: 'R', type: 'midpoint', of: ['C', 'D'] },
      { id: 'S', type: 'midpoint', of: ['D', 'A'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'tAP', type: 'ticks', of: ['A', 'P'], n: 1 },
      { id: 'tPB', type: 'ticks', of: ['P', 'B'], n: 1 },
      { id: 'tBQ', type: 'ticks', of: ['B', 'Q'], n: 2 },
      { id: 'tQC', type: 'ticks', of: ['Q', 'C'], n: 2 },
      { id: 'tCR', type: 'ticks', of: ['C', 'R'], n: 3 },
      { id: 'tRD', type: 'ticks', of: ['R', 'D'], n: 3 },
      { id: 'tDS', type: 'ticks', of: ['D', 'S'], n: 4 },
      { id: 'tSA', type: 'ticks', of: ['S', 'A'], n: 4 },
      { id: 'V', type: 'polygon', of: ['P', 'Q', 'R', 'S'], color: 'gamma' },
      { id: 'PQ', type: 'segment', of: ['P', 'Q'] },
      { id: 'QR', type: 'segment', of: ['Q', 'R'] },
      { id: 'RS', type: 'segment', of: ['R', 'S'] },
      { id: 'SP', type: 'segment', of: ['S', 'P'] },
      { id: 'AC', type: 'line', of: ['A', 'C'] },
      { id: 'tri1', type: 'polygon', of: ['A', 'B', 'C'], color: 'alpha' },
      { id: 'pPQ', type: 'parallel', of: ['P', 'Q'], n: 1 },
      { id: 'pAC', type: 'parallel', of: ['A', 'C'], n: 1 },
      { id: 'tri2', type: 'polygon', of: ['A', 'D', 'C'], color: 'beta' },
      { id: 'pSR', type: 'parallel', of: ['S', 'R'], n: 1 },
      { id: 'BD', type: 'line', of: ['B', 'D'] },
      { id: 'pQR', type: 'parallel', of: ['Q', 'R'], n: 2 },
      { id: 'pBD', type: 'parallel', of: ['B', 'D'], n: 2 },
      { id: 'pPS', type: 'parallel', of: ['P', 'S'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'The midpoints of the four sides',
      formula: 'ABCD is any quadrilateral. P, Q, R, S are the midpoints of AB, BC, CD, DA (one to four ticks). To prove: <strong>PQRS is a parallelogram</strong>.',
      show: ['A', 'B', 'C', 'D', 'AB', 'BC', 'CD', 'DA', 'P', 'Q', 'R', 'S', 'tAP', 'tPB', 'tBQ', 'tQC', 'tCR', 'tRD', 'tDS', 'tSA', 'V', 'PQ', 'QR', 'RS', 'SP'],
      hl: ['PQ', 'QR', 'RS', 'SP']
    },
    {
      phase: 'diag1', just: 'Construction',
      title: 'The diagonal AC',
      formula: 'Draw the diagonal AC. It cuts ABCD into two triangles, ABC and ADC, and each of them has two of the midpoints on its sides.',
      show: ['AC'],
      hl: ['AC']
    },
    {
      phase: 'mid1', just: 'Midsegment theorem',
      title: 'PQ ∥ AC in triangle ABC',
      formula: 'In triangle ABC, P is the midpoint of AB and Q the midpoint of BC, so PQ is a midsegment: PQ ∥ AC, and PQ = ½ AC.',
      show: ['tri1', 'pPQ', 'pAC'],
      hl: ['tri1', 'PQ', 'pPQ', 'pAC']
    },
    {
      phase: 'mid2', just: 'Midsegment theorem',
      title: 'SR ∥ AC in triangle ADC',
      formula: 'In triangle ADC, S is the midpoint of DA and R the midpoint of CD, so SR is a midsegment: SR ∥ AC, and SR = ½ AC. Two lines parallel to AC are parallel to each other: PQ ∥ SR.',
      show: ['tri2', 'pSR'],
      hl: ['tri2', 'RS', 'pSR', 'pPQ']
    },
    {
      phase: 'diag2', just: 'Midsegment theorem',
      title: 'QR ∥ BD and PS ∥ BD',
      formula: 'Now the other diagonal, BD. In triangle BCD, QR is a midsegment, so QR ∥ BD; in triangle BAD, PS is a midsegment, so PS ∥ BD. Hence QR ∥ PS.',
      show: ['BD', 'pQR', 'pBD', 'pPS'],
      hl: ['BD', 'QR', 'SP', 'pQR', 'pPS', 'pBD']
    },
    {
      phase: 'conclude', just: 'Definition',
      title: 'PQRS is a parallelogram',
      formula: 'Both pairs of opposite sides of PQRS are parallel, PQ ∥ SR and QR ∥ PS, which is what a parallelogram is. Its sides are half the diagonals of ABCD: PQ = SR = ½ AC and QR = PS = ½ BD. <strong>∎</strong>',
      show: [],
      hl: ['V', 'PQ', 'QR', 'RS', 'SP']
    }
  ],

  readout: (P) => {
    const pq = dist(P.P, P.Q) / UNIT;
    const sr = dist(P.S, P.R) / UNIT;
    const qr = dist(P.Q, P.R) / UNIT;
    const ps = dist(P.P, P.S) / UNIT;
    return `PQ = ${fmt(pq, 2)}, SR = ${fmt(sr, 2)};  QR = ${fmt(qr, 2)}, PS = ${fmt(ps, 2)}`;
  },

  // a convex quadrilateral inside the frame
  isValid: (P) => {
    const V = [P.A, P.B, P.C, P.D];
    const turns = V.map((p, i) => cross(p, V[(i + 1) % 4], V[(i + 2) % 4]));
    const sign = Math.sign(turns[0]);
    return turns.every((t) => Math.sign(t) === sign && Math.abs(t) > 4000) &&
      V.every((p) => p.x > 80 && p.x < 480 && p.y > 80 && p.y < 360);
  }
};

export default varignon;
