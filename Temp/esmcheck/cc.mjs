// ===========================================================
// proofs/concentricChord.js — two circles with the same centre O:
// a chord AB of the larger circle that touches the smaller circle
// at T is bisected at T, AT = TB.
// OT ⊥ AB (tangent and radius); OA = OB (radii of the larger
// circle) and OT is shared, so the right triangles OTA and OTB are
// congruent (HL) and AT = TB.
// O is fixed (a midpoint of two hidden copies of the centre). A
// slides round the larger circle, E sets its size; T is where the
// tangent from A touches the smaller circle (radius r) and B is
// where the line AT meets the larger circle again.
// Phases: given, tangent, radii, congruent, conclude
// ===========================================================

import { dist, fmt } from './math.mjs';

const UNIT = 60; // px per unit in the readout
const D2R = Math.PI / 180;

const concentricChord = {
  label: 'Chord of concentric circles',
  info:
    'Two circles share the centre O, and the chord AB of the larger one touches the smaller one at T. ' +
    'OT is a radius to the point of contact, so OT ⊥ AB. OA = OB as radii of the larger circle and OT ' +
    'is shared, so the right triangles OTA and OTB are congruent (HL) and AT = TB. Drag A round the ' +
    'larger circle, or E to resize it.',
  hint: 'Drag A round the larger circle, or E to resize it',
  // names point away from a spot between O and T, so O is named on the side away from the
  // chord and every other point outward
  labelCenter: ['H1', 'H1', 'H1', 'T'],
  // Frame for the two circles and the labels.
  viewBox: [110, 72, 320, 310],

  model: {
    // H1, H2 (copies of the centre) are never shown
    points: { H1: { x: 270, y: 227 }, H2: { x: 270, y: 227 }, E: { x: 199, y: 143 } },
    params: { r: 60, ta: 150 * D2R },
    composites: [],
    objects: [
      { id: 'O', type: 'midpoint', of: ['H1', 'H2'] },
      { id: 'W1', type: 'circle', of: ['O', 'E'] },
      { id: 'A', type: 'onCircle', center: 'O', through: 'E', param: 'ta', drag: true },
      // T: where the tangent from A touches the smaller circle; B: the other end of the chord
      { id: 'T', type: 'tangentPoint', center: 'O', from: 'A', radius: 'r', side: 1 },
      { id: 'W2', type: 'circle', of: ['O', 'T'] },
      { id: 'B', type: 'secondIntersection', center: 'O', from: 'A', toward: 'T' },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'OT', type: 'segment', of: ['O', 'T'] },
      { id: 'rT', type: 'rightAngle', at: 'T', from: 'B', to: 'O' },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'tOA', type: 'ticks', of: ['O', 'A'], n: 2 },
      { id: 'tOB', type: 'ticks', of: ['O', 'B'], n: 2 },
      { id: 'pOTA', type: 'polygon', of: ['O', 'T', 'A'], color: 'alpha' },
      { id: 'pOTB', type: 'polygon', of: ['O', 'T', 'B'], color: 'beta' },
      { id: 'tAT', type: 'ticks', of: ['A', 'T'], n: 1 },
      { id: 'tTB', type: 'ticks', of: ['T', 'B'], n: 1 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two circles with one centre',
      formula: 'The two circles have the same centre O. The chord AB of the larger circle touches the smaller circle at T. To prove: <strong>AT = TB</strong>, so T is the midpoint of the chord.',
      show: ['O', 'W1', 'W2', 'E', 'A', 'B', 'T', 'AB'],
      hl: ['AB']
    },
    {
      phase: 'tangent', just: 'Tangent and radius',
      title: 'OT ⊥ AB',
      formula: 'AB touches the smaller circle at T, and OT is the radius to that point. A tangent is perpendicular to the radius at the point of contact: <strong>OT ⊥ AB</strong>.',
      show: ['OT', 'rT'],
      hl: ['OT', 'rT']
    },
    {
      phase: 'radii', just: 'Radii',
      title: 'OA = OB',
      formula: 'A and B both lie on the larger circle, so OA and OB are radii of it (two ticks each): <strong>OA = OB</strong>.',
      show: ['OA', 'OB', 'tOA', 'tOB'],
      hl: ['OA', 'OB', 'tOA', 'tOB']
    },
    {
      phase: 'congruent', just: 'HL congruence',
      title: 'OTA ≅ OTB',
      formula: 'The triangles OTA and OTB have right angles at T, equal hypotenuses OA = OB and the shared leg OT. By HL, <strong>OTA ≅ OTB</strong>.',
      show: ['pOTA', 'pOTB'],
      hl: ['pOTA', 'pOTB', 'OT', 'rT']
    },
    {
      phase: 'conclude', just: 'Matching sides',
      title: 'AT = TB',
      formula: 'In the congruent triangles the legs AT and TB match: <strong>AT = TB</strong> (one tick each). The point of contact is the midpoint of the chord. <strong>∎</strong>',
      show: ['tAT', 'tTB'],
      hl: ['tAT', 'tTB']
    }
  ],

  readout: (P) => `AT = ${fmt(dist(P.A, P.T) / UNIT, 2)},  TB = ${fmt(dist(P.T, P.B) / UNIT, 2)}`,

  // the larger circle between radius 98 and 118, so that it stays well outside the smaller one
  // and in the frame with its names, and E far enough from A and B for their names
  isValid: (P) => {
    if (!P.T || !P.B) return false;
    const R = dist(P.O, P.E);
    return R > 98 && R < 118 && dist(P.E, P.A) > 40 && dist(P.E, P.B) > 40;
  }
};

export default concentricChord;
