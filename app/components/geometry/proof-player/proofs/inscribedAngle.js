// ===========================================================
// proofs/inscribedAngle.js — Euclid III.20
// The angle at the centre is twice the angle at the circle on
// the same arc: ∠AOB = 2 ∠ACB. Shown in the case where the
// centre lies inside the inscribed angle: the diameter through
// C splits both angles, and each half follows from an isosceles
// triangle plus the exterior angle theorem.
// Phases: given, construct, isoA, extA, sideB, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const cross = (p, q, r) => (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);

const inscribedAngle = {
  label: 'Inscribed angle theorem',
  info:
    'Draw the diameter from C through the centre O. It splits the angle at C into α and β, ' +
    'and the angle at O into two parts. Triangle OCA is isosceles, so ∠OAC = α, and the ' +
    'exterior angle at O is α + α = 2α; the same on the other side gives 2β. So the angle at ' +
    'the centre is 2(α + β), twice the angle at the circle. Slide A, B or C round the circle.',
  hint: 'Drag B or C round the circle, A for the radius, O for the centre',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the circle (radius 150 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    points: { O: { x: 280, y: 230 }, A: { x: 151, y: 307 } },
    params: { tb: 0.4, tc: -1.9 },
    composites: [],
    objects: [
      { id: 'K', type: 'circle', of: ['O', 'A'] },
      { id: 'B', type: 'onCircle', center: 'O', through: 'A', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'A', param: 'tc', drag: true },
      // D: the other end of the diameter through C
      { id: 'D', type: 'pointAlongDist', from: 'O', dir: ['C', 'O'], lenOf: ['O', 'A'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'CB', type: 'segment', of: ['C', 'B'] },
      { id: 'OA', type: 'segment', of: ['O', 'A'] },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'tOA', type: 'ticks', of: ['O', 'A'], n: 1 },
      { id: 'tOB', type: 'ticks', of: ['O', 'B'], n: 1 },
      { id: 'tOC', type: 'ticks', of: ['O', 'C'], n: 1 },
      // the inscribed angle in two parts, split by the diameter
      { id: 'angOCA', type: 'angle', at: 'C', from: 'A', to: 'D', color: 'alpha', label: 'α' },
      { id: 'angOCB', type: 'angle', at: 'C', from: 'D', to: 'B', color: 'beta', label: 'β' },
      // the central angle in two parts
      { id: 'angAOD', type: 'angle', at: 'O', from: 'A', to: 'D', color: 'alpha', label: '2α' },
      { id: 'angBOD', type: 'angle', at: 'O', from: 'D', to: 'B', color: 'beta', label: '2β' },
      // the base angles at A and B of the two isosceles triangles
      { id: 'angOAC', type: 'angle', at: 'A', from: 'C', to: 'O', color: 'alpha', label: 'α' },
      { id: 'angOBC', type: 'angle', at: 'B', from: 'O', to: 'C', color: 'beta', label: 'β' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Angle at the circle, angle at the centre',
      formula: 'A, B, C lie on a circle with centre O. The inscribed angle ∠ACB and the central angle ∠AOB stand on the same arc AB. To prove: <strong>∠AOB = 2 ∠ACB</strong>.',
      show: ['K', 'O', 'A', 'B', 'C', 'CA', 'CB', 'OA', 'OB', 'angOCA', 'angOCB', 'angAOD', 'angBOD'],
      hl: ['CA', 'CB', 'OA', 'OB']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'The diameter CD through O',
      formula: 'Join C to O and extend to D on the circle. OA, OB and OC are radii, equal (one tick each). The diameter splits the angle at C into <i>α</i> + <i>β</i> and the angle at O into ∠AOD + ∠DOB.',
      show: ['CD', 'D', 'tOA', 'tOB', 'tOC'],
      hl: ['CD', 'tOA', 'tOB', 'tOC']
    },
    {
      phase: 'isoA', just: 'Isosceles base angles',
      title: '∠OAC = ∠OCA = <i>α</i>',
      formula: 'OA = OC, so triangle OAC is isosceles with apex O, and its base angles at A and at C are equal.',
      show: ['angOAC'],
      hl: ['angOAC', 'angOCA', 'tOA', 'tOC']
    },
    {
      phase: 'extA', just: 'Exterior angle theorem',
      title: '∠AOD = <i>α</i> + <i>α</i> = 2<i>α</i>',
      formula: 'C, O, D lie on one line, so ∠AOD is an exterior angle of triangle OAC. It equals the sum of the two remote interior angles, <i>α</i> at A and <i>α</i> at C.',
      show: [],
      hl: ['angAOD', 'angOAC', 'angOCA']
    },
    {
      phase: 'sideB', just: 'Same argument',
      title: '∠DOB = 2<i>β</i>',
      formula: 'On the other side: OB = OC makes triangle OBC isosceles, ∠OBC = ∠OCB = <i>β</i>, and the exterior angle ∠DOB of that triangle equals <i>β</i> + <i>β</i>.',
      show: ['angOBC'],
      hl: ['angBOD', 'angOBC', 'angOCB']
    },
    {
      phase: 'conclude', just: 'Adding the parts',
      title: '∠AOB = 2<i>α</i> + 2<i>β</i> = 2 ∠ACB',
      formula: 'The angle at the centre is ∠AOD + ∠DOB = 2<i>α</i> + 2<i>β</i> = 2(<i>α</i> + <i>β</i>), and <i>α</i> + <i>β</i> is the angle at the circle. <strong>∎</strong>',
      show: [],
      hl: ['angAOD', 'angBOD', 'angOCA', 'angOCB']
    }
  ],

  readout: (P) => {
    const inscribed = angleDeg(P.C, P.A, P.B);
    const central = angleDeg(P.O, P.A, P.D) + angleDeg(P.O, P.D, P.B);
    return `∠AOB ${fmt(central)}° = 2 × ∠ACB ${fmt(inscribed)}°`;
  },

  // the case shown: the centre inside the inscribed angle, i.e. A and B on
  // opposite sides of the diameter CD; and a figure that is not collapsed
  isValid: (P) =>
    cross(P.C, P.D, P.A) * cross(P.C, P.D, P.B) < 0 &&
    area2(P.A, P.B, P.C) > 3000 && area2(P.O, P.A, P.C) > 2000 && area2(P.O, P.B, P.C) > 2000 &&
    dist(P.O, P.A) > 60
};

export default inscribedAngle;
