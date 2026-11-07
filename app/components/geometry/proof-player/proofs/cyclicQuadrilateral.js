// ===========================================================
// proofs/cyclicQuadrilateral.js — Euclid III.22
// Opposite angles of a cyclic quadrilateral add up to 180°.
// Join the centre to the four vertices: four isosceles
// triangles with base angles α, β, γ, δ; every angle of the
// quadrilateral is a sum of two of them, and all four angles
// add up to 360°, so α + β + γ + δ = 180° = ∠A + ∠C = ∠B + ∠D.
// Shown with the centre inside the quadrilateral.
// Phases: given, construct, iso, angles, sum, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const cross = (p, q, r) => (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);

const cyclicQuadrilateral = {
  label: 'Cyclic quadrilateral',
  info:
    'Join the centre O to A, B, C, D. The four radii are equal, so the four triangles OAB, OBC, ' +
    'OCD, ODA are isosceles, with base angles α, β, γ, δ. Each angle of ABCD is made of two of ' +
    'them, so all four add up to 2(α + β + γ + δ); and the angles of a quadrilateral add up to ' +
    '360°, so α + β + γ + δ = 180°. That sum is ∠A + ∠C, and also ∠B + ∠D. Slide a vertex round ' +
    'the circle.',
  hint: 'Drag B, C or D round the circle, A for the radius, O for the centre',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the circle (radius 150 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    points: { O: { x: 280, y: 230 }, A: { x: 180, y: 118 } },
    params: { tb: -0.75, tc: 0.65, td: 2.3 },
    composites: [],
    objects: [
      { id: 'K', type: 'circle', of: ['O', 'A'] },
      { id: 'B', type: 'onCircle', center: 'O', through: 'A', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'A', param: 'tc', drag: true },
      { id: 'D', type: 'onCircle', center: 'O', through: 'A', param: 'td', drag: true },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'OC', type: 'segment', of: ['O', 'C'] },
      { id: 'OD', type: 'segment', of: ['O', 'D'] },
      { id: 'tOA', type: 'ticks', of: ['O', 'A'], n: 1 },
      { id: 'tOB', type: 'ticks', of: ['O', 'B'], n: 1 },
      { id: 'tOC', type: 'ticks', of: ['O', 'C'], n: 1 },
      { id: 'tOD', type: 'ticks', of: ['O', 'D'], n: 1 },
      // base angles of the four isosceles triangles
      { id: 'aA', type: 'angle', at: 'A', from: 'B', to: 'O', color: 'alpha', label: 'α' },
      { id: 'aB', type: 'angle', at: 'B', from: 'O', to: 'A', color: 'alpha', label: 'α' },
      { id: 'bB', type: 'angle', at: 'B', from: 'C', to: 'O', color: 'beta', label: 'β' },
      { id: 'bC', type: 'angle', at: 'C', from: 'O', to: 'B', color: 'beta', label: 'β' },
      { id: 'cC', type: 'angle', at: 'C', from: 'D', to: 'O', color: 'gamma', label: 'γ' },
      { id: 'cD', type: 'angle', at: 'D', from: 'O', to: 'C', color: 'gamma', label: 'γ' },
      { id: 'dD', type: 'angle', at: 'D', from: 'A', to: 'O', color: 'delta', label: 'δ' },
      { id: 'dA', type: 'angle', at: 'A', from: 'O', to: 'D', color: 'delta', label: 'δ' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A quadrilateral inscribed in a circle',
      formula: 'A, B, C, D lie on a circle with centre O, in that order round it. To prove: <strong>∠A + ∠C = 180°</strong>, and likewise ∠B + ∠D = 180°.',
      show: ['K', 'O', 'A', 'B', 'C', 'D', 'Q', 'AB', 'BC', 'CD', 'DA'],
      hl: ['AB', 'BC', 'CD', 'DA']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Join the centre to the four vertices',
      formula: 'OA, OB, OC, OD are radii of the same circle, so all four are equal (one tick each). They cut ABCD into four triangles OAB, OBC, OCD, ODA, each with two equal sides.',
      show: ['OA', 'OB', 'OC', 'OD', 'tOA', 'tOB', 'tOC', 'tOD'],
      hl: ['OA', 'OB', 'OC', 'OD']
    },
    {
      phase: 'iso', just: 'Isosceles base angles',
      title: 'Four pairs of equal base angles',
      formula: 'In the isosceles triangle OAB the base angles at A and at B are equal: call them <i>α</i>. In the same way OBC gives <i>β</i> at B and at C, OCD gives <i>γ</i> at C and at D, and ODA gives <i>δ</i> at D and at A.',
      show: ['aA', 'aB', 'bB', 'bC', 'cC', 'cD', 'dD', 'dA'],
      hl: ['aA', 'aB', 'bB', 'bC', 'cC', 'cD', 'dD', 'dA']
    },
    {
      phase: 'angles', just: 'Adding the parts',
      title: 'Every angle of ABCD is a sum of two',
      formula: 'The radius through each vertex splits its angle: ∠A = <i>δ</i> + <i>α</i>, ∠B = <i>α</i> + <i>β</i>, ∠C = <i>β</i> + <i>γ</i>, ∠D = <i>γ</i> + <i>δ</i>. Each of <i>α</i>, <i>β</i>, <i>γ</i>, <i>δ</i> appears in exactly two angles.',
      show: [],
      hl: ['dA', 'aA', 'bC', 'cC']
    },
    {
      phase: 'sum', just: 'Polygon angle sum',
      title: '<i>α</i> + <i>β</i> + <i>γ</i> + <i>δ</i> = 180°',
      formula: 'The four angles of a quadrilateral add up to (4 − 2) · 180° = 360°. Adding the four sums gives ∠A + ∠B + ∠C + ∠D = 2(<i>α</i> + <i>β</i> + <i>γ</i> + <i>δ</i>) = 360°, so <i>α</i> + <i>β</i> + <i>γ</i> + <i>δ</i> = 180°.',
      show: [],
      hl: ['aA', 'aB', 'bB', 'bC', 'cC', 'cD', 'dD', 'dA']
    },
    {
      phase: 'conclude', just: 'Adding the parts',
      title: '∠A + ∠C = 180°, ∠B + ∠D = 180°',
      formula: '∠A + ∠C = (<i>δ</i> + <i>α</i>) + (<i>β</i> + <i>γ</i>) = 180°, and ∠B + ∠D = (<i>α</i> + <i>β</i>) + (<i>γ</i> + <i>δ</i>) = 180°: each pair of opposite angles collects all four letters once. <strong>∎</strong>',
      show: [],
      hl: ['dA', 'aA', 'bC', 'cC']
    }
  ],

  readout: (P) => {
    const ac = angleDeg(P.A, P.B, P.D) + angleDeg(P.C, P.B, P.D);
    const bd = angleDeg(P.B, P.A, P.C) + angleDeg(P.D, P.A, P.C);
    return `∠A + ∠C = ${fmt(ac)}°,  ∠B + ∠D = ${fmt(bd)}°`;
  },

  // A, B, C, D in order round the circle (a convex quadrilateral) with the
  // centre strictly inside it, and no triangle collapsed
  isValid: (P) => {
    const V = [P.A, P.B, P.C, P.D];
    const turns = V.map((p, i) => cross(p, V[(i + 1) % 4], V[(i + 2) % 4]));
    const sign = Math.sign(turns[0]);
    if (!turns.every((t) => Math.sign(t) === sign && Math.abs(t) > 3000)) return false;
    const inside = V.every((p, i) => Math.sign(cross(p, V[(i + 1) % 4], P.O)) === sign &&
      Math.abs(cross(p, V[(i + 1) % 4], P.O)) > 2500);
    return inside && area2(P.O, P.A, P.B) > 2000 && dist(P.O, P.A) > 60;
  }
};

export default cyclicQuadrilateral;
