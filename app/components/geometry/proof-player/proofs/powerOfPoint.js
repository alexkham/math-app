// ===========================================================
// proofs/powerOfPoint.js — intersecting chords (Euclid III.35)
// Two chords AB and CD cross at P inside the circle; then
// PA · PB = PC · PD. Euclid's proof without similar triangles:
// with M the midpoint of AB (foot of the perpendicular from O),
// PA · PB = (AM + MP)(AM − MP) = AM² − MP², and Pythagoras in
// OMA and OMP turns that into OA² − OP² = R² − OP², a number
// that does not depend on the chord. The same for CD.
// Phases: given, construct, difference, pyth, same, conclude
// ===========================================================

import { dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const between = (p, a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1);
  return t > 0.05 && t < 0.95;
};

const powerOfPoint = {
  label: 'Intersecting chords',
  info:
    'Drop the perpendicular from the centre O to the chord AB; its foot M is the midpoint of AB. ' +
    'Then PA · PB = (AM + MP)(AM − MP) = AM² − MP², and by Pythagoras in the right triangles OMA ' +
    'and OMP this equals OA² − OP² = R² − OP², which depends only on P. The same for the chord ' +
    'CD, so PA · PB = PC · PD. Slide the ends of the chords round the circle.',
  hint: 'Drag A, B, C or D round the circle, O to move the circle',
  labelCenter: ['O'],
  // Frame for the circle (radius 150 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    points: { O: { x: 280, y: 230 }, Z: { x: 430, y: 230 } },
    params: { ta: -2.6, tb: 0.4, tc: -0.9, td: 2.2 },
    composites: [],
    objects: [
      { id: 'K', type: 'circle', of: ['O', 'Z'] },
      { id: 'A', type: 'onCircle', center: 'O', through: 'Z', param: 'ta', drag: true },
      { id: 'B', type: 'onCircle', center: 'O', through: 'Z', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'Z', param: 'tc', drag: true },
      { id: 'D', type: 'onCircle', center: 'O', through: 'Z', param: 'td', drag: true },
      { id: 'P', type: 'intersection', of: ['A', 'B', 'C', 'D'] },
      { id: 'M', type: 'foot', from: 'O', to: ['A', 'B'] },
      { id: 'N', type: 'foot', from: 'O', to: ['C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'OM', type: 'segment', of: ['O', 'M'] },
      { id: 'rM', type: 'rightAngle', at: 'M', from: 'B', to: 'O' },
      { id: 'tAM', type: 'ticks', of: ['A', 'M'], n: 1 },
      { id: 'tMB', type: 'ticks', of: ['M', 'B'], n: 1 },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OP', type: 'segment', of: ['O', 'P'] },
      { id: 'triA', type: 'polygon', of: ['O', 'M', 'A'], color: 'alpha' },
      { id: 'triP', type: 'polygon', of: ['O', 'M', 'P'], color: 'beta' },
      { id: 'ON', type: 'segment', of: ['O', 'N'] },
      { id: 'rN', type: 'rightAngle', at: 'N', from: 'D', to: 'O' },
      { id: 'tCN', type: 'ticks', of: ['C', 'N'], n: 2 },
      { id: 'tND', type: 'ticks', of: ['N', 'D'], n: 2 },
      { id: 'OC', type: 'segment', of: ['O', 'C'] },
      { id: 'triC', type: 'polygon', of: ['O', 'N', 'C'], color: 'gamma' },
      { id: 'triQ', type: 'polygon', of: ['O', 'N', 'P'], color: 'delta' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two chords crossing inside the circle',
      formula: 'AB and CD are chords of the circle with centre O, and they cross at P. To prove: <strong>PA · PB = PC · PD</strong>.',
      show: ['K', 'O', 'A', 'B', 'C', 'D', 'P', 'AB', 'CD'],
      hl: ['AB', 'CD', 'P']
    },
    {
      phase: 'construct', just: 'Perpendicular bisects the chord',
      title: 'The foot M of the perpendicular from O is the midpoint of AB',
      formula: 'Drop the perpendicular from O to AB, meeting it at M. The perpendicular from the centre bisects the chord, so AM = MB (one tick each). Join O to A and to P.',
      show: ['M', 'OM', 'rM', 'tAM', 'tMB', 'OA', 'OP'],
      hl: ['OM', 'M', 'tAM', 'tMB']
    },
    {
      phase: 'difference', just: 'Difference of squares',
      title: 'PA · PB = AM² − MP²',
      formula: 'P lies on the chord between M and one end, say B. Then PA = AM + MP and PB = MB − MP = AM − MP, so PA · PB = (AM + MP)(AM − MP) = AM² − MP².',
      show: [],
      hl: ['AB', 'P', 'M']
    },
    {
      phase: 'pyth', just: 'Pythagorean theorem',
      title: 'AM² − MP² = OA² − OP² = R² − OP²',
      formula: 'OMA and OMP are right triangles at M. So AM² = OA² − OM² and MP² = OP² − OM², and subtracting, AM² − MP² = OA² − OP². OA is the radius R, so PA · PB = R² − OP²: it depends on P and the circle, not on the chord.',
      show: ['triA', 'triP'],
      hl: ['triA', 'triP', 'OA', 'OP']
    },
    {
      phase: 'same', just: 'Same argument',
      title: 'PC · PD = R² − OP² as well',
      formula: 'Repeat with the chord CD: the foot N of the perpendicular from O is its midpoint, PC · PD = CN² − NP², and Pythagoras in ONC and ONP gives CN² − NP² = OC² − OP² = R² − OP².',
      show: ['N', 'ON', 'rN', 'tCN', 'tND', 'OC', 'triC', 'triQ'],
      hl: ['triC', 'triQ', 'OC', 'OP']
    },
    {
      phase: 'conclude', just: 'Equal to the same',
      title: 'PA · PB = PC · PD',
      formula: 'Both products equal R² − OP², so they are equal to each other. The number R² − OP² is called the power of the point P with respect to the circle; every chord through P is cut by P into two pieces whose product is this number. <strong>∎</strong>',
      show: [],
      hl: ['AB', 'CD', 'P', 'OP']
    }
  ],

  readout: (P) => {
    const u2 = UNIT * UNIT;
    const ab = (dist(P.P, P.A) * dist(P.P, P.B)) / u2;
    const cd = (dist(P.P, P.C) * dist(P.P, P.D)) / u2;
    const r2 = (dist(P.O, P.Z) ** 2 - dist(P.O, P.P) ** 2) / u2;
    return `PA·PB = ${fmt(ab, 2)},  PC·PD = ${fmt(cd, 2)},  R² − OP² = ${fmt(r2, 2)}`;
  },

  // the chords really cross inside the circle, away from the centre and the midpoints
  isValid: (P) =>
    !!P.P && between(P.P, P.A, P.B) && between(P.P, P.C, P.D) &&
    dist(P.O, P.P) > 6 && dist(P.P, P.M) > 3 && dist(P.P, P.N) > 3 &&
    dist(P.A, P.B) > 80 && dist(P.C, P.D) > 80 && dist(P.O, P.Z) > 60
};

export default powerOfPoint;
