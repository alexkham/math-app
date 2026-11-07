// ===========================================================
// proofs/centroid.js — the medians meet at the centroid
// Two medians AD and BE meet at G. With P, Q the midpoints of
// AG and BG, both DE and PQ are midsegments parallel to AB and
// half of it, so PQDE is a parallelogram and its diagonals PD,
// QE bisect each other at G. Hence AP = PG = GD: G is two
// thirds of the way down each median, and the third median
// meets AD at that same point.
// Phases: given, construct, mid1, mid2, para, ratio, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const centroid = {
  label: 'Medians and the centroid',
  info:
    'The medians AD and BE meet at G. Mark the midpoints P of AG and Q of BG. DE is a ' +
    'midsegment of triangle ABC and PQ a midsegment of triangle GAB, so both are parallel to ' +
    'AB and half as long: PQDE is a parallelogram, and its diagonals bisect each other at G. ' +
    'So AP = PG = GD and BQ = QG = GE: G is two thirds of the way down each median, and the ' +
    'third median passes through it too. Drag any vertex.',
  hint: 'Drag A, B or C; the midpoints, G, P and Q follow',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [50, 50, 440, 320],

  model: {
    points: { A: { x: 250, y: 80 }, B: { x: 100, y: 340 }, C: { x: 420, y: 340 } },
    params: {},
    composites: [],
    objects: [
      { id: 'D', type: 'midpoint', of: ['B', 'C'] },
      { id: 'E', type: 'midpoint', of: ['C', 'A'] },
      { id: 'F', type: 'midpoint', of: ['A', 'B'] },
      { id: 'G', type: 'intersection', of: ['A', 'D', 'B', 'E'] },
      { id: 'P', type: 'midpoint', of: ['A', 'G'] },
      { id: 'Q', type: 'midpoint', of: ['B', 'G'] },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'BE', type: 'segment', of: ['B', 'E'] },
      { id: 'tri1', type: 'polygon', of: ['A', 'B', 'C'], color: 'alpha' },
      { id: 'DE', type: 'segment', of: ['D', 'E'], color: 'alpha' },
      { id: 'pAB', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'pDE', type: 'parallel', of: ['D', 'E'], n: 1 },
      { id: 'tri2', type: 'polygon', of: ['G', 'A', 'B'], color: 'beta' },
      { id: 'PQ', type: 'segment', of: ['P', 'Q'], color: 'beta' },
      { id: 'pPQ', type: 'parallel', of: ['P', 'Q'], n: 1 },
      { id: 'V', type: 'polygon', of: ['P', 'Q', 'D', 'E'], color: 'gamma' },
      { id: 'QD', type: 'segment', of: ['Q', 'D'], color: 'gamma' },
      { id: 'EP', type: 'segment', of: ['E', 'P'], color: 'gamma' },
      { id: 'tPG', type: 'ticks', of: ['P', 'G'], n: 1 },
      { id: 'tGD', type: 'ticks', of: ['G', 'D'], n: 1 },
      { id: 'tQG', type: 'ticks', of: ['Q', 'G'], n: 2 },
      { id: 'tGE', type: 'ticks', of: ['G', 'E'], n: 2 },
      { id: 'tAP', type: 'ticks', of: ['A', 'P'], n: 1 },
      { id: 'tBQ', type: 'ticks', of: ['B', 'Q'], n: 2 },
      { id: 'CF', type: 'segment', of: ['C', 'F'] }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two medians meet at G',
      formula: 'D and E are the midpoints of BC and CA, so AD and BE are medians of triangle ABC; they meet at G. To prove: <strong>AG = 2 GD and BG = 2 GE</strong>, and that the third median CF passes through G as well.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'D', 'E', 'AD', 'BE', 'G'],
      hl: ['AD', 'BE', 'G']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'The midpoints P of AG and Q of BG',
      formula: 'Mark P, the midpoint of AG, and Q, the midpoint of BG. Both are hollow: they follow G.',
      show: ['P', 'Q', 'tAP', 'tPG', 'tBQ', 'tQG'],
      hl: ['P', 'Q']
    },
    {
      phase: 'mid1', just: 'Midsegment theorem',
      title: 'DE ∥ AB and DE = ½ AB',
      formula: 'In triangle ABC, D and E are the midpoints of BC and CA, so DE is a midsegment: parallel to the third side AB and half as long.',
      show: ['tri1', 'DE', 'pAB', 'pDE'],
      hl: ['tri1', 'DE', 'AB']
    },
    {
      phase: 'mid2', just: 'Midsegment theorem',
      title: 'PQ ∥ AB and PQ = ½ AB',
      formula: 'In triangle GAB, P and Q are the midpoints of GA and GB, so PQ is a midsegment of that triangle: also parallel to AB and half as long.',
      show: ['tri2', 'PQ', 'pPQ'],
      hl: ['tri2', 'PQ', 'AB']
    },
    {
      phase: 'para', just: 'Parallelogram diagonals',
      title: 'PQDE is a parallelogram, so G is the midpoint of PD and of QE',
      formula: 'PQ and DE are equal and parallel, so PQDE is a parallelogram. Its diagonals are PD, which lies along the median AD, and QE, which lies along the median BE; they cross at G, and the diagonals of a parallelogram bisect each other: PG = GD and QG = GE.',
      show: ['V', 'QD', 'EP'],
      hl: ['V', 'tPG', 'tGD', 'tQG', 'tGE']
    },
    {
      phase: 'ratio', just: 'Adding the parts',
      title: 'AG = 2 GD and BG = 2 GE',
      formula: 'AP = PG because P is the midpoint of AG, and PG = GD was just shown, so the median AD is cut into three equal parts and AG = AP + PG = 2 GD. In the same way BQ = QG = GE, so BG = 2 GE.',
      show: [],
      hl: ['AD', 'BE', 'tAP', 'tPG', 'tGD', 'tBQ', 'tQG', 'tGE']
    },
    {
      phase: 'conclude', just: 'Same argument',
      title: 'The third median passes through G',
      formula: 'Run the same argument with the medians AD and CF: they meet at the point two thirds of the way from A to D. That point is G, because G is the only point of AD with AG = 2 GD. So all three medians pass through G, the centroid, and each is divided there in the ratio 2 : 1. <strong>∎</strong>',
      show: ['F', 'CF'],
      hl: ['CF', 'G']
    }
  ],

  readout: (P) => {
    const r1 = dist(P.A, P.G) / dist(P.G, P.D);
    const r2 = dist(P.B, P.G) / dist(P.G, P.E);
    return `AG : GD = ${fmt(r1, 2)} : 1,  BG : GE = ${fmt(r2, 2)} : 1`;
  },

  // a real triangle inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 10000 &&
    [P.A, P.B, P.C].every((p) => p.x > 70 && p.x < 470 && p.y > 70 && p.y < 355)
};

export default centroid;
