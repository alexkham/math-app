// ===========================================================
// proofs/equalChords.js — equal chords are equidistant from the
// centre (Euclid III.14). AB = CD; the perpendiculars from O
// meet the chords at their midpoints M and N, so AM = CN; with
// the radii OA = OC the right triangles OMA and ONC are
// congruent (HL) and OM = ON. D is C turned about O by the
// angle AOB, so CD stays equal to AB while anything is dragged.
// Phases: given, feet, halves, radii, hl, conclude
// ===========================================================

import { dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const equalChords = {
  label: 'Equal chords',
  info:
    'AB and CD are equal chords. Drop the perpendiculars OM and ON from the centre: each meets ' +
    'its chord at the midpoint, so AM = AB/2 = CD/2 = CN. With the radii OA = OC, the right ' +
    'triangles OMA and ONC have equal hypotenuses and equal legs, so they are congruent (HL) and ' +
    'OM = ON. Drag B to change the chord length (D follows), C to move the second chord, A for ' +
    'the radius, O for the centre.',
  hint: 'Drag B (chord length, D follows) or C round the circle, A for the radius, O for the centre',
  labelCenter: ['O'],
  // Frame for the circle (radius about 150 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    points: { O: { x: 280, y: 230 }, A: { x: 150, y: 150 } },
    params: { tb: -1.2, tc: 0.9 },
    composites: [],
    objects: [
      { id: 'W', type: 'circle', of: ['O', 'A'] },
      { id: 'B', type: 'onCircle', center: 'O', through: 'A', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'A', param: 'tc', drag: true },
      // D: C turned about O by the angle AOB, so the chord CD equals AB
      { id: 'D', type: 'rotateBy', about: 'O', of: 'C', angle: ['A', 'O', 'B'] },
      { id: 'M', type: 'foot', from: 'O', to: ['A', 'B'] },
      { id: 'N', type: 'foot', from: 'O', to: ['C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 1 },
      { id: 'tCD', type: 'ticks', of: ['C', 'D'], n: 1 },
      { id: 'OM', type: 'segment', of: ['O', 'M'] },
      { id: 'ON', type: 'segment', of: ['O', 'N'] },
      { id: 'rM', type: 'rightAngle', at: 'M', from: 'A', to: 'O' },
      { id: 'rN', type: 'rightAngle', at: 'N', from: 'C', to: 'O' },
      { id: 'tAM', type: 'ticks', of: ['A', 'M'], n: 2 },
      { id: 'tCN', type: 'ticks', of: ['C', 'N'], n: 2 },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OC', type: 'segment', of: ['O', 'C'] },
      { id: 'tOA', type: 'ticks', of: ['O', 'A'], n: 3 },
      { id: 'tOC', type: 'ticks', of: ['O', 'C'], n: 3 },
      { id: 'pOMA', type: 'polygon', of: ['O', 'M', 'A'], color: 'alpha' },
      { id: 'pONC', type: 'polygon', of: ['O', 'N', 'C'], color: 'beta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two equal chords',
      formula: 'AB and CD are two chords of the circle with centre O, and they are equal: AB = CD (one tick each). To prove: <strong>the two chords are the same distance from the centre</strong>, that is, the perpendiculars from O to the two chords are equal.',
      show: ['O', 'A', 'B', 'C', 'D', 'W', 'AB', 'CD', 'tAB', 'tCD'],
      hl: ['AB', 'CD']
    },
    {
      phase: 'feet', just: 'Construction',
      title: 'The perpendiculars OM and ON',
      formula: 'Drop the perpendicular from O to each chord: OM ⟂ AB with M on AB, and ON ⟂ CD with N on CD. The distance from the centre to a chord is the length of this perpendicular, so the claim is <strong>OM = ON</strong>.',
      show: ['M', 'N', 'OM', 'ON', 'rM', 'rN'],
      hl: ['OM', 'ON']
    },
    {
      phase: 'halves', just: 'Perpendicular bisects the chord',
      title: 'AM = CN',
      formula: 'The perpendicular from the centre bisects the chord, so M is the midpoint of AB and N the midpoint of CD: AM = AB/2 and CN = CD/2. Since AB = CD, <strong>AM = CN</strong> (two ticks).',
      show: ['tAM', 'tCN'],
      hl: ['tAM', 'tCN']
    },
    {
      phase: 'radii', just: 'Equal radii',
      title: 'OA = OC',
      formula: 'Join O to A and to C. Both are radii of the circle, so <strong>OA = OC</strong> (three ticks). They are the hypotenuses of the right triangles OMA and ONC.',
      show: ['OA', 'OC', 'tOA', 'tOC', 'pOMA', 'pONC'],
      hl: ['OA', 'OC']
    },
    {
      phase: 'hl', just: 'HL congruence',
      title: 'OMA ≅ ONC',
      formula: 'The triangles OMA and ONC are right-angled at M and N, with equal hypotenuses OA = OC and equal legs AM = CN. By the hypotenuse-leg criterion they are congruent.',
      show: [],
      hl: ['pOMA', 'pONC']
    },
    {
      phase: 'conclude', just: 'Corresponding parts',
      title: 'OM = ON',
      formula: 'The remaining legs of the congruent triangles are equal: <strong>OM = ON</strong>. Equal chords are equidistant from the centre. Read backwards (OM = ON and OA = OC give AM = CN by HL, so AB = CD), the same figure proves the converse: chords equidistant from the centre are equal. <strong>∎</strong>',
      show: [],
      hl: ['OM', 'ON']
    }
  ],

  readout: (P) =>
    `AB = ${fmt(dist(P.A, P.B) / UNIT, 2)},  CD = ${fmt(dist(P.C, P.D) / UNIT, 2)},  OM = ${fmt(dist(P.O, P.M) / UNIT, 2)},  ON = ${fmt(dist(P.O, P.N) / UNIT, 2)}`,

  // two real chords, neither through the centre, apart from each other, everything in the frame
  isValid: (P) => {
    if (!P.D || !P.M || !P.N) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 62 && p.y < 398;
    const ab = dist(P.A, P.B);
    return [P.O, P.A, P.B, P.C, P.D].every(inFrame) && dist(P.O, P.A) > 90 &&
      ab > 80 && ab < 1.85 * dist(P.O, P.A) && dist(P.O, P.M) > 30 &&
      dist(P.M, P.N) > 60 && [P.A, P.B].every((p) => dist(p, P.C) > 35 && dist(p, P.D) > 35);
  }
};

export default equalChords;
