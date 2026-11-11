// ===========================================================
// proofs/linearPairBisectors.js
// The bisectors of a linear pair are perpendicular: if the
// angles AOC = α and COB = β make a straight angle, their
// bisectors OP and OQ make ∠POQ = α/2 + β/2 = 90°.
// The bisector directions come from bisectorFoot points on AC
// and CB; the drawn rays are pushed out to a fixed length.
// Phases: given, linear, halves, add, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

const linearPairBisectors = {
  label: 'Bisectors of a linear pair',
  info:
    'The angles α = ∠AOC and β = ∠COB lie along the line AB, so α + β = 180°. The bisector OP ' +
    'halves α and the bisector OQ halves β, so the angle between the bisectors is ' +
    'α/2 + β/2 = (α + β)/2 = 90°. Drag C to change α and β, or slide O along the line.',
  hint: 'Drag C to change the two angles, O along the line, or A or B',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the line, the ray and the two bisectors.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 100, y: 275 }, B: { x: 460, y: 275 }, C: { x: 335, y: 115 } },
    params: { t: 0.5 },
    composites: [],
    objects: [
      { id: 'O', type: 'onLine', of: ['A', 'B'], param: 't', drag: true, minParam: 0.25, maxParam: 0.75 },
      // P0, Q0 (never shown): where the bisectors of AOC and COB meet AC and CB
      { id: 'P0', type: 'bisectorFoot', at: 'O', of: ['A', 'C'] },
      { id: 'Q0', type: 'bisectorFoot', at: 'O', of: ['C', 'B'] },
      // P, Q: the bisector rays drawn to a fixed length
      { id: 'P', type: 'pointAlongDist', from: 'O', dir: ['O', 'P0'], lenOf: ['O', 'C'], scale: 0.8 },
      { id: 'Q', type: 'pointAlongDist', from: 'O', dir: ['O', 'Q0'], lenOf: ['O', 'C'], scale: 0.8 },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'OC', type: 'segment', of: ['O', 'C'] },
      { id: 'OP', type: 'segment', of: ['O', 'P'] },
      { id: 'OQ', type: 'segment', of: ['O', 'Q'] },
      { id: 'aAOC', type: 'angle', at: 'O', from: 'A', to: 'C', color: 'alpha', label: 'α', radius: 64 },
      { id: 'bCOB', type: 'angle', at: 'O', from: 'C', to: 'B', color: 'beta', label: 'β', radius: 64 },
      { id: 'a1', type: 'angle', at: 'O', from: 'A', to: 'P', color: 'alpha', label: 'α/2', radius: 30 },
      { id: 'a2', type: 'angle', at: 'O', from: 'P', to: 'C', color: 'alpha', label: 'α/2', radius: 30 },
      { id: 'b1', type: 'angle', at: 'O', from: 'C', to: 'Q', color: 'beta', label: 'β/2', radius: 30 },
      { id: 'b2', type: 'angle', at: 'O', from: 'Q', to: 'B', color: 'beta', label: 'β/2', radius: 30 },
      { id: 'rO', type: 'rightAngle', at: 'O', from: 'P', to: 'Q' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A linear pair and its two bisectors',
      formula: 'O is a point of the line AB and OC is a ray from it. The angles α = ∠AOC and β = ∠COB are a linear pair: they share the arm OC and their other arms OA, OB lie along one line. OP bisects α and OQ bisects β. To prove: <strong>∠POQ = 90°</strong>, the two bisectors are perpendicular.',
      show: ['A', 'B', 'C', 'O', 'P', 'Q', 'AB', 'OC', 'OP', 'OQ', 'aAOC', 'bCOB'],
      hl: ['OP', 'OQ']
    },
    {
      phase: 'linear', just: 'Straight angle',
      title: 'α + β = 180°',
      formula: 'The two angles together fill the straight angle AOB along the line, so <strong>α + β = 180°</strong>.',
      show: [],
      hl: ['aAOC', 'bCOB']
    },
    {
      phase: 'halves', just: 'Bisectors',
      title: '∠POC = α/2,  ∠COQ = β/2',
      formula: 'OP bisects ∠AOC, so ∠AOP = ∠POC = α/2; OQ bisects ∠COB, so ∠COQ = ∠QOB = β/2. The angle between the bisectors is made of the two halves next to OC: ∠POQ = ∠POC + ∠COQ.',
      show: ['a1', 'a2', 'b1', 'b2'],
      hl: ['a2', 'b1']
    },
    {
      phase: 'add', just: 'Adding',
      title: '∠POQ = α/2 + β/2 = (α + β)/2',
      formula: 'Add the two halves: ∠POQ = α/2 + β/2 = (α + β)/2. The sum α + β is known from the straight angle.',
      show: [],
      hl: ['a2', 'b1', 'OP', 'OQ']
    },
    {
      phase: 'conclude', just: 'Substituting',
      title: '∠POQ = 180°/2 = 90°',
      formula: 'Since α + β = 180°, ∠POQ = 180°/2 = <strong>90°</strong>: the bisectors of a linear pair are perpendicular, whatever the two angles are. <strong>∎</strong>',
      show: ['rO'],
      hl: ['rO', 'OP', 'OQ']
    }
  ],

  readout: (P) =>
    `α = ${fmt(angleDeg(P.O, P.A, P.C), 0)}°,  β = ${fmt(angleDeg(P.O, P.C, P.B), 0)}°,  ∠POQ = ${fmt(angleDeg(P.O, P.P, P.Q), 0)}°`,

  // C above the line, both angles at least 20°, OC long enough, everything in the frame
  isValid: (P) => {
    if (!P.P || !P.Q) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348;
    return [P.A, P.B, P.C, P.P, P.Q].every(inFrame) && cross(P.A, P.B, P.C) < 0 &&
      dist(P.A, P.B) > 220 && dist(P.O, P.C) > 110 &&
      angleDeg(P.O, P.A, P.C) > 20 && angleDeg(P.O, P.C, P.B) > 20;
  }
};

export default linearPairBisectors;
