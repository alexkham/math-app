// ===========================================================
// proofs/angleBisectorLocus.js — the angle bisector as a locus.
// A point inside an angle is on its bisector if and only if it
// is equally far from the two arms.
// Forward: AAS on the right triangles OPD and OPE. Converse: HL
// on the same triangles. The bisector direction comes from a
// hidden bisectorFoot point; P is an onLine point along it.
// Phases: given, feet, aas, equal, converse, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const along = (X, U, V) => {
  const dx = V.x - U.x;
  const dy = V.y - U.y;
  return ((X.x - U.x) * dx + (X.y - U.y) * dy) / (dx * dx + dy * dy || 1);
};

const angleBisectorLocus = {
  label: 'Angle bisector locus',
  info:
    'Drop the perpendiculars from P to the two arms, with feet D and E. For P on the bisector the ' +
    'right triangles OPD and OPE have equal angles at O, right angles at D and E, and the common side ' +
    'OP, so they are congruent (AAS) and PD = PE. Conversely, if PD = PE, the right triangles share the ' +
    'hypotenuse OP and have equal legs, so they are congruent (HL) and ∠POD = ∠POE. Drag P along the ' +
    'bisector, or O, A or B.',
  hint: 'Drag P along the bisector, or O, A or B to change the angle',
  labelCenter: ['O', 'A', 'B'],
  // Frame for the angle, the bisector and the labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { O: { x: 100, y: 240 }, A: { x: 470, y: 330 }, B: { x: 420, y: 90 } },
    params: { t: 0.6 },
    composites: [],
    objects: [
      // F0 (never shown) sets the bisector direction; F is its end at a fixed length
      { id: 'F0', type: 'bisectorFoot', at: 'O', of: ['A', 'B'] },
      { id: 'F', type: 'pointAlongDist', from: 'O', dir: ['O', 'F0'], lenOf: ['O', 'A'], scale: 0.9 },
      { id: 'P', type: 'onLine', of: ['O', 'F'], param: 't', drag: true, minParam: 0.3, maxParam: 0.92 },
      { id: 'D', type: 'foot', from: 'P', to: ['O', 'A'] },
      { id: 'E', type: 'foot', from: 'P', to: ['O', 'B'] },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'OF', type: 'line', of: ['O', 'F'] },
      { id: 'a1', type: 'angle', at: 'O', from: 'A', to: 'P', color: 'alpha', label: 'φ', radius: 64 },
      { id: 'a2', type: 'angle', at: 'O', from: 'P', to: 'B', color: 'alpha', label: 'φ', radius: 64 },
      { id: 'PD', type: 'segment', of: ['P', 'D'] },
      { id: 'PE', type: 'segment', of: ['P', 'E'] },
      { id: 'rD', type: 'rightAngle', at: 'D', from: 'O', to: 'P' },
      { id: 'rE', type: 'rightAngle', at: 'E', from: 'O', to: 'P' },
      { id: 'OP', type: 'segment', of: ['O', 'P'] },
      { id: 'pOPD', type: 'polygon', of: ['O', 'P', 'D'], color: 'alpha' },
      { id: 'pOPE', type: 'polygon', of: ['O', 'P', 'E'], color: 'beta' },
      { id: 'tPD', type: 'ticks', of: ['P', 'D'], n: 1 },
      { id: 'tPE', type: 'ticks', of: ['P', 'E'], n: 1 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'An angle and its bisector',
      formula: 'The rays OA and OB make an angle at O, and the dashed ray from O bisects it: the two angles φ are equal. P is a point on the bisector. To prove: <strong>P is equally far from the two arms</strong>, and conversely every point inside the angle that is equally far from the arms lies on the bisector.',
      show: ['O', 'A', 'B', 'P', 'OA', 'OB', 'OF', 'a1', 'a2'],
      hl: ['OF', 'a1', 'a2']
    },
    {
      phase: 'feet', just: 'Construction',
      title: 'The perpendiculars PD and PE',
      formula: 'The distance from P to an arm is the length of the perpendicular to it. Drop PD ⟂ OA and PE ⟂ OB, with feet D and E. The claim is <strong>PD = PE</strong>.',
      show: ['D', 'E', 'PD', 'PE', 'rD', 'rE'],
      hl: ['PD', 'PE']
    },
    {
      phase: 'aas', just: 'AAS',
      title: 'OPD ≅ OPE',
      formula: 'The triangles OPD and OPE have ∠POD = ∠POE = φ (the bisector), right angles at D and E, and the common side OP, opposite the right angles. Two angles and a side not between them: by AAS they are congruent.',
      show: ['OP', 'pOPD', 'pOPE'],
      hl: ['pOPD', 'pOPE']
    },
    {
      phase: 'equal', just: 'Corresponding parts',
      title: 'PD = PE',
      formula: 'The sides opposite the equal angles at O are equal: <strong>PD = PE</strong> (one tick each). Every point of the bisector is equally far from the two arms.',
      show: ['tPD', 'tPE'],
      hl: ['tPD', 'tPE']
    },
    {
      phase: 'converse', just: 'HL congruence',
      title: 'Conversely: PD = PE gives ∠POD = ∠POE',
      formula: 'Now start only from a point P inside the angle with PD = PE. The right triangles OPD and OPE share the hypotenuse OP and have equal legs PD = PE. By the hypotenuse-leg criterion they are congruent, so <strong>∠POD = ∠POE</strong>.',
      show: [],
      hl: ['pOPD', 'pOPE', 'tPD', 'tPE']
    },
    {
      phase: 'conclude', just: 'Definition',
      title: 'P lies on the bisector',
      formula: 'OP makes equal angles with the two arms, so it is the bisector and P lies on it. <strong>The bisector of an angle is exactly the set of points inside it that are equally far from its two arms.</strong> <strong>∎</strong>',
      show: [],
      hl: ['OF', 'a1', 'a2']
    }
  ],

  readout: (P) =>
    `PD = ${fmt(dist(P.P, P.D) / UNIT, 2)},  PE = ${fmt(dist(P.P, P.E) / UNIT, 2)},  ∠AOP = ${fmt(angleDeg(P.O, P.A, P.P), 0)}°,  ∠POB = ${fmt(angleDeg(P.O, P.P, P.B), 0)}°`,

  // a real angle, the feet on the drawn arms, everything in the frame
  isValid: (P) => {
    if (!P.D || !P.E || !P.F) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348;
    const ang = angleDeg(P.O, P.A, P.B);
    const tD = along(P.D, P.O, P.A);
    const tE = along(P.E, P.O, P.B);
    return [P.O, P.A, P.B, P.P, P.D, P.E, P.F].every(inFrame) && ang > 30 && ang < 120 &&
      dist(P.O, P.A) > 200 && dist(P.O, P.B) > 200 &&
      tD > 0.15 && tD < 0.95 && tE > 0.15 && tE < 0.95 && dist(P.P, P.D) > 30;
  }
};

export default angleBisectorLocus;
