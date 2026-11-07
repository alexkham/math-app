// ===========================================================
// proofs/chordBisector.js — Euclid III.3
// The perpendicular from the centre to a chord bisects the
// chord: with M the foot of the perpendicular from O on AB,
// AM = MB. Two right triangles on the equal radii OA, OB with
// the common leg OM; Pythagoras gives AM² = OA² − OM² = MB².
// Phases: given, construct, right, pyth, equal, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const chordBisector = {
  label: 'Perpendicular bisects the chord',
  info:
    'Join the centre O to the ends of the chord. OA and OB are radii, so the triangles OMA ' +
    'and OMB are right triangles with equal hypotenuses and the common leg OM. Pythagoras ' +
    'gives AM² = OA² − OM² and MB² = OB² − OM², the same number, so AM = MB. Slide A or B ' +
    'round the circle: the foot of the perpendicular stays at the midpoint.',
  hint: 'Drag A or B round the circle, O to move the circle',
  labelCenter: ['O'],
  // Frame for the circle (radius 140 about O) and its labels.
  viewBox: [60, 50, 440, 380],

  model: {
    points: { O: { x: 280, y: 240 }, R: { x: 420, y: 240 } },
    params: { ta: -2.4, tb: -0.74 },
    composites: [],
    objects: [
      { id: 'K', type: 'circle', of: ['O', 'R'] },
      { id: 'A', type: 'onCircle', center: 'O', through: 'R', param: 'ta', drag: true },
      { id: 'B', type: 'onCircle', center: 'O', through: 'R', param: 'tb', drag: true },
      { id: 'M', type: 'foot', from: 'O', to: ['A', 'B'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'OM', type: 'segment', of: ['O', 'M'] },
      { id: 'rM', type: 'rightAngle', at: 'M', from: 'B', to: 'O' },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'tOA', type: 'ticks', of: ['O', 'A'], n: 1 },
      { id: 'tOB', type: 'ticks', of: ['O', 'B'], n: 1 },
      { id: 'tri1', type: 'polygon', of: ['O', 'M', 'A'], color: 'alpha' },
      { id: 'tri2', type: 'polygon', of: ['O', 'M', 'B'], color: 'beta' },
      { id: 'tMA', type: 'ticks', of: ['M', 'A'], n: 2 },
      { id: 'tMB', type: 'ticks', of: ['M', 'B'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A chord and the perpendicular from the centre',
      formula: 'AB is a chord of the circle with centre O, and the perpendicular from O meets the chord at M. To prove: <strong>AM = MB</strong>, the perpendicular from the centre bisects the chord.',
      show: ['K', 'O', 'A', 'B', 'M', 'AB', 'OM', 'rM'],
      hl: ['AB', 'OM']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Join O to A and to B',
      formula: 'OA and OB are radii of the same circle, so OA = OB = <i>r</i> (one tick each). With OM they make two triangles, OMA and OMB, which share the side OM.',
      show: ['OA', 'OB', 'tOA', 'tOB'],
      hl: ['OA', 'OB']
    },
    {
      phase: 'right', just: 'Right triangles',
      title: 'Two right triangles on the common leg OM',
      formula: 'OM ⟂ AB, so the angles at M are right: OMA and OMB are right triangles with hypotenuses OA and OB, and OM is a leg of both.',
      show: ['tri1', 'tri2'],
      hl: ['tri1', 'tri2', 'rM']
    },
    {
      phase: 'pyth', just: 'Pythagorean theorem',
      title: 'AM² = OA² − OM², MB² = OB² − OM²',
      formula: 'In the right triangle OMA, OA² = OM² + AM², so AM² = OA² − OM². In the right triangle OMB, in the same way, MB² = OB² − OM².',
      show: [],
      hl: ['tri1', 'tri2']
    },
    {
      phase: 'equal', just: 'Equal radii',
      title: 'The two right-hand sides are the same',
      formula: 'OA = OB = <i>r</i>, and OM is the same segment in both formulas. So AM² and MB² are both <i>r</i>² − OM²: AM² = MB².',
      show: [],
      hl: ['OM', 'tOA', 'tOB']
    },
    {
      phase: 'conclude', just: 'Positive roots',
      title: 'AM = MB',
      formula: 'Lengths are positive, and positive numbers with equal squares are equal. So AM = MB (two ticks each): M is the midpoint of the chord. <strong>∎</strong>',
      show: ['tMA', 'tMB'],
      hl: ['AB', 'tMA', 'tMB']
    }
  ],

  readout: (P) => {
    const am = dist(P.A, P.M) / UNIT;
    const mb = dist(P.M, P.B) / UNIT;
    const om = dist(P.O, P.M) / UNIT;
    return `AM = ${fmt(am, 2)}, MB = ${fmt(mb, 2)}  (OM = ${fmt(om, 2)})`;
  },

  // a real chord, not through the centre and not collapsed
  isValid: (P) => area2(P.O, P.A, P.B) > 3000 && dist(P.A, P.B) > 60 && dist(P.O, P.R) > 60
};

export default chordBisector;
