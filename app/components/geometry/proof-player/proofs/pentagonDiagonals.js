// ===========================================================
// proofs/pentagonDiagonals.js — the two diagonals from a vertex
// of a regular pentagon cut its angle into three equal parts.
// Each angle of the pentagon is 540°/5 = 108°. The triangles ABC
// and AED are isosceles with apex angle 108°, so their base
// angles are (180° − 108°)/2 = 36°; the middle part at A is
// 108° − 36° − 36° = 36°.
// B…E are A turned about the hidden centre O by 72° each
// (rotateDeg); dragging A turns and resizes the pentagon.
// Phases: given, interior, first, second, middle, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const V = ['A', 'B', 'C', 'D', 'E'];

const pentagonDiagonals = {
  label: 'Diagonals of a regular pentagon',
  info:
    'Each angle of a regular pentagon is 540°/5 = 108°. The triangle ABC has AB = BC, so its base ' +
    'angles are (180° − 108°)/2 = 36°, and so has the triangle AED. The diagonals AC and AD take ' +
    '36° from each end of the angle at A, which leaves 108° − 72° = 36° between them: three equal ' +
    'angles of 36°. Drag A to turn and resize the pentagon.',
  hint: 'Drag A to turn and resize the pentagon',
  // names point away from the centre
  labelCenter: ['O'],
  // Frame for the pentagon (radius about 150 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    // O (the centre) is never shown
    points: { O: { x: 280, y: 230 }, A: { x: 280, y: 92 } },
    params: {},
    composites: [],
    objects: [
      { id: 'B', type: 'rotateDeg', about: 'O', of: 'A', deg: 72 },
      { id: 'C', type: 'rotateDeg', about: 'O', of: 'B', deg: 72 },
      { id: 'D', type: 'rotateDeg', about: 'O', of: 'C', deg: 72 },
      { id: 'E', type: 'rotateDeg', about: 'O', of: 'D', deg: 72 },
      { id: 'H', type: 'polygon', of: V },
      ...V.map((v, i) => ({ id: 's' + v, type: 'segment', of: [v, V[(i + 1) % 5]] })),
      ...V.map((v, i) => ({ id: 't' + v, type: 'ticks', of: [v, V[(i + 1) % 5]], n: 1 })),
      { id: 'AC', type: 'segment', of: ['A', 'C'] },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'bB', type: 'angle', at: 'B', from: 'A', to: 'C', color: 'gamma', label: 'β', radius: 48 },
      { id: 'bE', type: 'angle', at: 'E', from: 'D', to: 'A', color: 'gamma', label: 'β', radius: 48 },
      { id: 'pABC', type: 'polygon', of: ['A', 'B', 'C'], color: 'beta' },
      { id: 'pAED', type: 'polygon', of: ['A', 'E', 'D'], color: 'beta' },
      { id: 'fA1', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'beta', label: 'φ', radius: 64 },
      { id: 'fC', type: 'angle', at: 'C', from: 'B', to: 'A', color: 'beta', label: 'φ' },
      { id: 'fA2', type: 'angle', at: 'A', from: 'D', to: 'E', color: 'beta', label: 'φ', radius: 64 },
      { id: 'fD', type: 'angle', at: 'D', from: 'A', to: 'E', color: 'beta', label: 'φ' },
      { id: 'mA', type: 'angle', at: 'A', from: 'C', to: 'D', color: 'alpha', label: 'ψ', radius: 64 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A regular pentagon and two diagonals',
      formula: 'ABCDE is a regular pentagon: its five sides are equal (one tick each) and its five angles are equal. AC and AD are the two diagonals from A. To prove: <strong>∠BAC = ∠CAD = ∠DAE</strong>, the diagonals cut the angle at A into three equal parts.',
      show: [...V, 'H', ...V.map((v) => 's' + v), ...V.map((v) => 't' + v), 'AC', 'AD'],
      hl: ['AC', 'AD']
    },
    {
      phase: 'interior', just: 'Polygon angle sum',
      title: 'Each angle is 108°',
      formula: 'The angles of a pentagon add up to (5 − 2) · 180° = 540°. In a regular pentagon the five angles are equal, so each is <strong>β = 540°/5 = 108°</strong>; this holds at B, at E and at A as well.',
      show: ['bB', 'bE'],
      hl: ['bB', 'bE']
    },
    {
      phase: 'first', just: 'Isosceles base angles',
      title: '∠BAC = 36°',
      formula: 'In the triangle ABC the sides AB and BC are sides of the pentagon, so they are equal and the base angles at A and C are equal, φ each. The angle sum gives 108° + 2φ = 180°, so <strong>φ = 36°</strong>.',
      show: ['pABC', 'fA1', 'fC'],
      hl: ['pABC', 'fA1', 'fC']
    },
    {
      phase: 'second', just: 'Isosceles base angles',
      title: '∠DAE = 36°',
      formula: 'In the same way the triangle AED has AE = ED and the angle 108° at E, so its base angles at A and D are φ = 36° as well: <strong>∠DAE = 36°</strong>.',
      show: ['pAED', 'fA2', 'fD'],
      hl: ['pAED', 'fA2', 'fD']
    },
    {
      phase: 'middle', just: 'Subtracting',
      title: '∠CAD = 36°',
      formula: 'The whole angle at A is 108° and is made of φ, ψ = ∠CAD and φ, so ψ = 108° − 36° − 36° = <strong>36°</strong>.',
      show: ['mA'],
      hl: ['mA', 'fA1', 'fA2']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: '∠BAC = ∠CAD = ∠DAE = 36°',
      formula: 'The three parts of the angle at A are all 36°: <strong>the diagonals AC and AD trisect the angle at A</strong>, and by the symmetry of the pentagon the same holds at every vertex. <strong>∎</strong>',
      show: [],
      hl: ['fA1', 'mA', 'fA2', 'AC', 'AD']
    }
  ],

  readout: (P) =>
    `∠BAC = ${fmt(angleDeg(P.A, P.B, P.C))}°,  ∠CAD = ${fmt(angleDeg(P.A, P.C, P.D))}°,  ∠DAE = ${fmt(angleDeg(P.A, P.D, P.E))}°`,

  // the pentagon large enough for the marks, turned at most 30° and every vertex
  // far enough inside the frame for its name
  isValid: (P) => {
    const inFrame = (p) => p.x > 86 && p.x < 474 && p.y > 84 && p.y < 372;
    const r = dist(P.O, P.A);
    // A kept within 30° of the top, so that the level angle labels stay apart
    const turn = Math.abs(Math.atan2(P.A.x - P.O.x, P.O.y - P.A.y)) * 180 / Math.PI;
    return r > 130 && r < 170 && turn < 30 && V.every((v) => inFrame(P[v]));
  }
};

export default pentagonDiagonals;
