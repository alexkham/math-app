// ===========================================================
// proofs/perpendicularBisector.js — the perpendicular bisector
// theorem. A point is on the perpendicular bisector of AB if
// and only if it is equally far from A and B.
// Forward: SAS on PMA and PMB. Converse: SSS on the same two
// triangles gives equal angles at M, a linear pair, so 90°.
// P is an onLine point on the perpendicular at the midpoint M.
// Phases: given, join, sas, equal, converse, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const perpendicularBisector = {
  label: 'Perpendicular bisector',
  info:
    'The perpendicular bisector of AB goes through the midpoint M at right angles to AB. For P on it, ' +
    'the triangles PMA and PMB have AM = MB, equal right angles at M and the common side PM, so they ' +
    'are congruent (SAS) and PA = PB. Conversely, if PA = PB, the same two triangles are congruent ' +
    'by SSS, the angles at M are equal and make a straight angle, so each is 90° and P is on the ' +
    'perpendicular bisector. Drag P along the line, or A or B.',
  hint: 'Drag P along the perpendicular bisector, or A or B',
  labelCenter: ['A', 'B', 'P'],
  // Frame for the segment, the dashed bisector and the labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 130, y: 300 }, B: { x: 430, y: 300 } },
    params: { t: 0.62 },
    composites: [],
    objects: [
      { id: 'M', type: 'midpoint', of: ['A', 'B'] },
      // Q, Q2 (never shown): the two ends of the dashed perpendicular at M
      { id: 'Q', type: 'perpAlongDist', from: 'M', dir: ['A', 'B'], lenOf: ['A', 'B'], scale: 0.75, side: 1 },
      { id: 'Q2', type: 'perpAlongDist', from: 'M', dir: ['A', 'B'], lenOf: ['A', 'B'], scale: 0.15, side: -1 },
      { id: 'P', type: 'onLine', of: ['M', 'Q'], param: 't', drag: true, minParam: 0.3, maxParam: 0.95 },
      { id: 'L', type: 'line', of: ['Q2', 'Q'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'rM', type: 'rightAngle', at: 'M', from: 'B', to: 'P' },
      { id: 'tAM', type: 'ticks', of: ['A', 'M'], n: 1 },
      { id: 'tMB', type: 'ticks', of: ['M', 'B'], n: 1 },
      { id: 'PA', type: 'segment', of: ['P', 'A'] },
      { id: 'PB', type: 'segment', of: ['P', 'B'] },
      { id: 'PM', type: 'segment', of: ['P', 'M'] },
      { id: 'pPMA', type: 'polygon', of: ['P', 'M', 'A'], color: 'alpha' },
      { id: 'pPMB', type: 'polygon', of: ['P', 'M', 'B'], color: 'beta' },
      { id: 'tPA', type: 'ticks', of: ['P', 'A'], n: 2 },
      { id: 'tPB', type: 'ticks', of: ['P', 'B'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A segment and its perpendicular bisector',
      formula: 'M is the midpoint of AB (AM = MB, one tick each), and the dashed line through M is perpendicular to AB: it is the perpendicular bisector of AB. P is any point on it. To prove: <strong>PA = PB</strong>, and conversely, every point equally far from A and B lies on this line.',
      show: ['A', 'B', 'M', 'P', 'L', 'AB', 'rM', 'tAM', 'tMB'],
      hl: ['L']
    },
    {
      phase: 'join', just: 'Construction',
      title: 'The triangles PMA and PMB',
      formula: 'Join P to A, to B and to M. The segment PM cuts the triangle PAB into the two triangles PMA and PMB, which share the side PM.',
      show: ['PA', 'PB', 'PM', 'pPMA', 'pPMB'],
      hl: ['pPMA', 'pPMB']
    },
    {
      phase: 'sas', just: 'SAS',
      title: 'PMA ≅ PMB',
      formula: 'The two triangles have AM = MB, equal angles at M (both 90°, the bisector is perpendicular), and the common side PM. Two sides and the included angle: by SAS they are congruent.',
      show: [],
      hl: ['tAM', 'tMB', 'rM', 'PM']
    },
    {
      phase: 'equal', just: 'Corresponding parts',
      title: 'PA = PB',
      formula: 'The third sides of the congruent triangles are equal: <strong>PA = PB</strong> (two ticks). Every point of the perpendicular bisector is equally far from A and B.',
      show: ['tPA', 'tPB'],
      hl: ['tPA', 'tPB']
    },
    {
      phase: 'converse', just: 'SSS',
      title: 'Conversely: PA = PB gives PMA ≅ PMB',
      formula: 'Now start only from PA = PB, for any point P, and let M be the midpoint of AB. The triangles PMA and PMB have PA = PB, AM = MB and the common side PM: three pairs of equal sides, so by SSS they are congruent, and <strong>∠PMA = ∠PMB</strong>.',
      show: [],
      hl: ['pPMA', 'pPMB', 'tPA', 'tPB']
    },
    {
      phase: 'conclude', just: 'Linear pair',
      title: '∠PMA = ∠PMB = 90°: P is on the bisector',
      formula: 'The angles PMA and PMB lie side by side along AB, so they add up to 180°; being equal, each is 90°. So PM is perpendicular to AB at its midpoint: <strong>P lies on the perpendicular bisector</strong>. The perpendicular bisector is exactly the set of points equally far from A and B. <strong>∎</strong>',
      show: [],
      hl: ['rM', 'L']
    }
  ],

  readout: (P) =>
    `PA = ${fmt(dist(P.P, P.A) / UNIT, 2)},  PB = ${fmt(dist(P.P, P.B) / UNIT, 2)},  ∠PMA = ${fmt(angleDeg(P.M, P.P, P.A), 0)}°`,

  // a segment long enough, the whole dashed line and P inside the frame
  isValid: (P) => {
    const inFrame = (p) => p && p.x > 75 && p.x < 485 && p.y > 62 && p.y < 358;
    return [P.A, P.B, P.P, P.Q, P.Q2].every(inFrame) && dist(P.A, P.B) > 150;
  }
};

export default perpendicularBisector;
