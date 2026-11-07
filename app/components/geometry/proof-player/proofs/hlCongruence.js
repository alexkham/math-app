// ===========================================================
// proofs/hlCongruence.js — the hypotenuse-leg criterion
// Two right triangles with equal hypotenuses and one pair of
// equal legs are congruent. The second triangle is laid leg to
// leg against the first, on the far side of the common leg BC;
// the two right angles at C make A, C, A′ collinear, the equal
// hypotenuses make ABA′ isosceles, so ∠A = ∠A′, and AAS finishes.
// Phases: given, line, iso, aas, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const UNIT = 60;

const hlCongruence = {
  label: 'HL congruence',
  info:
    'Lay the second right triangle against the first along the equal legs, so that both share ' +
    'the leg BC and their other legs CA and CA′ point opposite ways. The two right angles at C ' +
    'make A, C, A′ a straight line, and the equal hypotenuses AB = A′B make ABA′ isosceles, so ' +
    'the angles at A and A′ are equal. Each triangle now has a right angle, the angle at its ' +
    'far vertex and the leg BC: angle-angle-side. Slide A along the line; drag B or C.',
  hint: 'Slide A along the line; drag B or C',
  labelCenter: ['A', 'B', 'A′'],
  // Frame for the two triangles side by side.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { B: { x: 250, y: 100 }, C: { x: 250, y: 300 } },
    params: { t: 0.68 },
    composites: [],
    objects: [
      // P: hidden end of the perpendicular to BC at C (never shown); A slides on the line C–P
      { id: 'P', type: 'perpAlongDist', from: 'C', dir: ['C', 'B'], lenOf: ['C', 'B'] },
      { id: 'A', type: 'onLine', of: ['C', 'P'], param: 't', drag: true, minParam: 0.3, maxParam: 1.6 },
      // A′: the second triangle's far vertex, the mirror of A through C
      { id: 'A2', type: 'pointAlongDist', from: 'C', dir: ['A', 'C'], lenOf: ['A', 'C'], label: 'A′' },
      { id: 'T1', type: 'polygon', of: ['A', 'B', 'C'], color: 'alpha' },
      { id: 'T2', type: 'polygon', of: ['A2', 'B', 'C'], color: 'beta' },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'CA2', type: 'segment', of: ['C', 'A2'] },
      { id: 'A2B', type: 'segment', of: ['A2', 'B'] },
      { id: 'rC1', type: 'rightAngle', at: 'C', from: 'B', to: 'A' },
      { id: 'rC2', type: 'rightAngle', at: 'C', from: 'A2', to: 'B' },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 1 },
      { id: 'tA2B', type: 'ticks', of: ['A2', 'B'], n: 1 },
      { id: 'tBC', type: 'ticks', of: ['B', 'C'], n: 2 },
      { id: 'L', type: 'line', of: ['A', 'A2'] },
      { id: 'aA', type: 'angle', at: 'A', from: 'C', to: 'B', color: 'alpha', label: 'α' },
      { id: 'aA2', type: 'angle', at: 'A2', from: 'B', to: 'C', color: 'beta', label: 'α' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two right triangles, leg to leg',
      formula: 'ABC and A′BC are right-angled at C, with the hypotenuses AB = A′B (one tick each) and the leg BC in common (two ticks). A′BC is the second triangle of the theorem, moved so that its leg equal to BC lies on BC and its far vertex A′ falls on the other side. To prove: <strong>ABC ≅ A′BC</strong>.',
      show: ['A', 'B', 'C', 'A2', 'T1', 'T2', 'AB', 'BC', 'CA', 'CA2', 'A2B', 'rC1', 'rC2', 'tAB', 'tA2B', 'tBC'],
      hl: ['tAB', 'tA2B', 'rC1', 'rC2']
    },
    {
      phase: 'line', just: 'Straight angle',
      title: 'A, C and A′ lie on one line',
      formula: 'The two right angles at C, ∠BCA and ∠BCA′, are on opposite sides of BC and add up to 180°, a straight angle. So CA and CA′ are opposite rays, and A, C, A′ lie on one line (dashed).',
      show: ['L'],
      hl: ['L', 'rC1', 'rC2']
    },
    {
      phase: 'iso', just: 'Isosceles base angles',
      title: '∠BAA′ = ∠BA′A = <i>α</i>',
      formula: 'Look at the large triangle ABA′. Its sides AB and A′B are the two equal hypotenuses, so it is isosceles with apex B, and its base angles at A and at A′ are equal. Since C lies on the base AA′, these are the angles ∠BAC of the first triangle and ∠BA′C of the second.',
      show: ['aA', 'aA2'],
      hl: ['aA', 'aA2', 'tAB', 'tA2B']
    },
    {
      phase: 'aas', just: 'AAS congruence',
      title: 'ABC ≅ A′BC',
      formula: 'In ABC and A′BC: the angles at A and A′ are equal (<i>α</i>), the angles at C are both right angles, and the side BC, opposite <i>α</i> in both, is common. Two angles and a side not between them: the triangles are congruent by angle-angle-side.',
      show: [],
      hl: ['aA', 'aA2', 'rC1', 'rC2', 'tBC']
    },
    {
      phase: 'conclude', just: 'Conclusion',
      title: 'Hypotenuse and leg determine a right triangle',
      formula: 'A′BC is a copy of the second given triangle, so the two given triangles are congruent: in right triangles, an equal hypotenuse and one equal leg are enough. In particular the other legs agree, CA = CA′. <strong>∎</strong>',
      show: [],
      hl: ['T1', 'T2']
    }
  ],

  readout: (P) => {
    const a = angleDeg(P.A, P.C, P.B);
    const a2 = angleDeg(P.A2, P.B, P.C);
    return `∠A = ${fmt(a)}°,  ∠A′ = ${fmt(a2)}°,  CA = ${fmt(dist(P.C, P.A) / UNIT)},  CA′ = ${fmt(dist(P.C, P.A2) / UNIT)}`;
  },

  // a real right triangle, both copies inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 6000 && dist(P.B, P.C) > 70 &&
    [P.A, P.B, P.C, P.A2].every((p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348)
};

export default hlCongruence;
