// ===========================================================
// proofs/twoTangents.js — the two tangents from a point
// From a point P outside a circle the two tangent segments
// are equal: PA = PB. Join the centre; the tangents are
// perpendicular to the radii, and Pythagoras in the two right
// triangles OAP, OBP gives PA² = OP² − r² = PB².
// Phases: given, construct, right, pyth, equal, conclude
// ===========================================================

import { dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const twoTangents = {
  label: 'Two tangents from a point',
  info:
    'Join the centre O to the points of contact A, B and to P. Each tangent is perpendicular ' +
    'to its radius, so OAP and OBP are right triangles with the same hypotenuse OP and equal ' +
    'legs OA = OB = r. Pythagoras gives PA² = OP² − r² and PB² = OP² − r², so PA = PB. Drag P ' +
    'about the circle and watch the two tangents stay equal.',
  hint: 'Drag P to move the outside point, O to move the circle',
  labelCenter: ['O', 'P'],
  // Frame for the circle (radius 120 about O), P on the right, and the labels.
  viewBox: [60, 55, 440, 390],

  model: {
    points: { O: { x: 230, y: 250 }, P: { x: 470, y: 250 } },
    params: { r: 120 },
    composites: [],
    objects: [
      { id: 'A', type: 'tangentPoint', center: 'O', from: 'P', radius: 'r', side: 1 },
      { id: 'B', type: 'tangentPoint', center: 'O', from: 'P', radius: 'r', side: -1 },
      { id: 'K', type: 'circle', of: ['O', 'A'] },
      { id: 'PA', type: 'segment', of: ['P', 'A'] },
      { id: 'PB', type: 'segment', of: ['P', 'B'] },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'OP', type: 'segment', of: ['O', 'P'] },
      { id: 'tOA', type: 'ticks', of: ['O', 'A'], n: 1 },
      { id: 'tOB', type: 'ticks', of: ['O', 'B'], n: 1 },
      { id: 'rA', type: 'rightAngle', at: 'A', from: 'O', to: 'P' },
      { id: 'rB', type: 'rightAngle', at: 'B', from: 'O', to: 'P' },
      { id: 'tri1', type: 'polygon', of: ['O', 'A', 'P'], color: 'alpha' },
      { id: 'tri2', type: 'polygon', of: ['O', 'B', 'P'], color: 'beta' },
      { id: 'tPA', type: 'ticks', of: ['P', 'A'], n: 2 },
      { id: 'tPB', type: 'ticks', of: ['P', 'B'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two tangents from an outside point',
      formula: 'P lies outside the circle with centre O. The two lines through P that touch the circle do so at A and at B. To prove: <strong>PA = PB</strong>.',
      show: ['K', 'O', 'P', 'A', 'B', 'PA', 'PB'],
      hl: ['PA', 'PB']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Join O to A, B and P',
      formula: 'OA and OB are radii, so OA = OB = <i>r</i> (one tick each). OP is a third segment, shared by the two triangles OAP and OBP that the construction makes.',
      show: ['OA', 'OB', 'OP', 'tOA', 'tOB'],
      hl: ['OA', 'OB', 'OP']
    },
    {
      phase: 'right', just: 'Tangent ⟂ radius',
      title: 'Right angles at A and at B',
      formula: 'A tangent is perpendicular to the radius drawn to its point of contact. So ∠OAP = 90° and ∠OBP = 90°: the triangles OAP and OBP are right triangles with hypotenuse OP.',
      show: ['rA', 'rB'],
      hl: ['rA', 'rB']
    },
    {
      phase: 'pyth', just: 'Pythagorean theorem',
      title: 'PA² = OP² − OA², PB² = OP² − OB²',
      formula: 'In the right triangle OAP the hypotenuse is OP, so OP² = OA² + PA², that is PA² = OP² − OA². In the same way, in OBP, PB² = OP² − OB².',
      show: ['tri1', 'tri2'],
      hl: ['tri1', 'tri2']
    },
    {
      phase: 'equal', just: 'Equal radii',
      title: 'The two right-hand sides are the same',
      formula: 'OA = OB = <i>r</i>, and OP is the same segment in both triangles. So OP² − OA² and OP² − OB² are the same number, OP² − <i>r</i>², and PA² = PB².',
      show: [],
      hl: ['OP', 'tOA', 'tOB']
    },
    {
      phase: 'conclude', just: 'Positive roots',
      title: 'PA = PB',
      formula: 'Two lengths with equal squares are equal, since lengths are positive. So PA = PB (two ticks each): the two tangent segments from P are equal. <strong>∎</strong>',
      show: ['tPA', 'tPB'],
      hl: ['PA', 'PB', 'tPA', 'tPB']
    }
  ],

  readout: (P) => {
    const pa = dist(P.P, P.A) / UNIT;
    const pb = dist(P.P, P.B) / UNIT;
    const op = dist(P.O, P.P) / UNIT;
    const r = dist(P.O, P.A) / UNIT;
    return `PA = ${fmt(pa, 2)}, PB = ${fmt(pb, 2)}  (OP = ${fmt(op, 2)}, r = ${fmt(r, 2)})`;
  },

  // P clearly outside the circle, and both points inside the frame
  isValid: (P) =>
    dist(P.O, P.P) > dist(P.O, P.A) + 40 &&
    [P.O, P.P].every((p) => p.x > 80 && p.x < 480 && p.y > 75 && p.y < 425)
};

export default twoTangents;
