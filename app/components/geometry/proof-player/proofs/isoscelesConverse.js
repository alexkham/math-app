// ===========================================================
// proofs/isoscelesConverse.js — the converse of the isosceles
// base angles theorem (Euclid I.6): if ∠B = ∠C then AB = AC.
// The bisector AD of the angle at A makes the triangles ABD and
// ACD congruent by AAS (∠B = ∠C, the halves at A, common AD).
// The equal base angles are kept by placing A on the
// perpendicular to BC at its midpoint (an onLine point).
// Phases: given, bisect, aas, equal, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const isoscelesConverse = {
  label: 'Isosceles converse',
  info:
    'The base angles at B and C are equal. Draw the bisector AD of the angle at A. The triangles ABD ' +
    'and ACD have equal angles at B and C, equal halves at A, and the common side AD, which is not ' +
    'between those angles; by AAS they are congruent, so AB = AC. Drag A up or down, or B or C.',
  hint: 'Drag A to change the base angles, or B or C',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { B: { x: 130, y: 310 }, C: { x: 430, y: 310 } },
    params: { t: 0.85 },
    composites: [],
    objects: [
      // M, Q (never shown): the midpoint of BC and the end of the perpendicular there
      { id: 'M', type: 'midpoint', of: ['B', 'C'] },
      { id: 'Q', type: 'perpAlongDist', from: 'M', dir: ['B', 'C'], lenOf: ['B', 'C'], scale: 0.85, side: 1 },
      { id: 'A', type: 'onLine', of: ['M', 'Q'], param: 't', drag: true, minParam: 0.3, maxParam: 1.0 },
      // D: where the bisector of the angle at A meets BC
      { id: 'D', type: 'bisectorFoot', at: 'A', of: ['B', 'C'] },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'bB', type: 'angle', at: 'B', from: 'C', to: 'A', color: 'beta', label: 'β' },
      { id: 'cC', type: 'angle', at: 'C', from: 'A', to: 'B', color: 'beta', label: 'β' },
      { id: 'AD', type: 'segment', of: ['A', 'D'] },
      { id: 'a1', type: 'angle', at: 'A', from: 'B', to: 'D', color: 'alpha', label: 'φ', radius: 44 },
      { id: 'a2', type: 'angle', at: 'A', from: 'D', to: 'C', color: 'alpha', label: 'φ', radius: 44 },
      { id: 'pABD', type: 'polygon', of: ['A', 'B', 'D'], color: 'alpha' },
      { id: 'pACD', type: 'polygon', of: ['A', 'C', 'D'], color: 'gamma' },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 1 },
      { id: 'tAC', type: 'ticks', of: ['A', 'C'], n: 1 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A triangle with two equal angles',
      formula: 'In triangle ABC the angles at B and C are equal, both β. To prove: <strong>AB = AC</strong>, the sides opposite the equal angles are equal, so the triangle is isosceles.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'bB', 'cC'],
      hl: ['bB', 'cC']
    },
    {
      phase: 'bisect', just: 'Construction',
      title: 'The bisector AD of the angle at A',
      formula: 'Draw the bisector of the angle at A; it meets BC at D. It cuts the angle at A into two equal halves: <strong>∠BAD = ∠CAD = φ</strong>.',
      show: ['D', 'AD', 'a1', 'a2'],
      hl: ['AD', 'a1', 'a2']
    },
    {
      phase: 'aas', just: 'AAS',
      title: 'ABD ≅ ACD',
      formula: 'The triangles ABD and ACD have ∠ABD = ∠ACD = β, ∠BAD = ∠CAD = φ, and the common side AD. AD is not between the two angles (it is opposite the angle at B in one triangle and at C in the other), so this is angle, angle, side: by AAS the triangles are congruent.',
      show: ['pABD', 'pACD'],
      hl: ['pABD', 'pACD']
    },
    {
      phase: 'equal', just: 'Corresponding parts',
      title: 'AB = AC',
      formula: 'In congruent triangles the sides opposite equal angles are equal. AB in ABD and AC in ACD are both opposite the angle at D, so <strong>AB = AC</strong> (one tick each).',
      show: ['tAB', 'tAC'],
      hl: ['tAB', 'tAC']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'Equal base angles make an isosceles triangle',
      formula: 'A triangle with two equal angles has equal sides opposite them. Together with the isosceles base angles theorem: <strong>a triangle is isosceles exactly when two of its angles are equal</strong>. The same congruence also gives BD = DC and AD ⟂ BC: the bisector is the median and the altitude. <strong>∎</strong>',
      show: [],
      hl: ['tAB', 'tAC', 'bB', 'cC']
    }
  ],

  readout: (P) =>
    `∠B = ${fmt(angleDeg(P.B, P.C, P.A), 0)}°,  ∠C = ${fmt(angleDeg(P.C, P.A, P.B), 0)}°,  AB = ${fmt(dist(P.A, P.B) / UNIT, 2)},  AC = ${fmt(dist(P.A, P.C) / UNIT, 2)}`,

  // a real triangle with readable base angles, everything in the frame
  isValid: (P) => {
    if (!P.A || !P.D) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348;
    const b = angleDeg(P.B, P.C, P.A);
    return [P.A, P.B, P.C].every(inFrame) && dist(P.B, P.C) > 150 && b > 20 && b < 80;
  }
};

export default isoscelesConverse;
