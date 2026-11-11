// ===========================================================
// proofs/parallelogramFromSides.js — the converse of the
// parallelogram sides theorem: a quadrilateral whose opposite
// sides are equal is a parallelogram. The diagonal BD makes
// two triangles congruent by SSS; the equal alternate angles
// force each pair of opposite sides to be parallel (if two
// lines with equal alternate angles met, a triangle would have
// an exterior angle equal to an interior opposite one).
// C = D + (B − A): the one convex figure with these side lengths.
// Phases: given, diagonal, sss, alternate, parallel, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

const parallelogramFromSides = {
  label: 'Parallelogram from equal sides',
  info:
    'AB = CD and AD = CB. The diagonal BD cuts the quadrilateral into the triangles ABD and CDB, ' +
    'which have three pairs of equal sides, so they are congruent (SSS). Their equal angles at B ' +
    'and D are alternate angles for AB and DC, and for AD and BC, with the transversal BD; equal ' +
    'alternate angles make the lines parallel, so ABCD is a parallelogram. Drag A, B or D.',
  hint: 'Drag A, B or D (C keeps the sides equal)',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the quadrilateral and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 120, y: 300 }, B: { x: 330, y: 300 }, D: { x: 200, y: 140 } },
    params: {},
    composites: [],
    objects: [
      // C = D + (B − A): CD = AB and CB = AD, the convex figure with these sides
      { id: 'C', type: 'pointAlongDist', from: 'D', dir: ['A', 'B'], lenOf: ['A', 'B'], scale: 1 },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 1 },
      { id: 'tCD', type: 'ticks', of: ['C', 'D'], n: 1 },
      { id: 'tDA', type: 'ticks', of: ['D', 'A'], n: 2 },
      { id: 'tBC', type: 'ticks', of: ['B', 'C'], n: 2 },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'pABD', type: 'polygon', of: ['A', 'B', 'D'], color: 'alpha' },
      { id: 'pCDB', type: 'polygon', of: ['C', 'D', 'B'], color: 'beta' },
      { id: 'aB', type: 'angle', at: 'B', from: 'A', to: 'D', color: 'alpha', label: 'α' },
      { id: 'aD', type: 'angle', at: 'D', from: 'C', to: 'B', color: 'alpha', label: 'α' },
      { id: 'bD', type: 'angle', at: 'D', from: 'B', to: 'A', color: 'beta', label: 'β' },
      { id: 'bB', type: 'angle', at: 'B', from: 'D', to: 'C', color: 'beta', label: 'β' },
      { id: 'mAB', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'mDC', type: 'parallel', of: ['D', 'C'], n: 1 },
      { id: 'mAD', type: 'parallel', of: ['A', 'D'], n: 2 },
      { id: 'mBC', type: 'parallel', of: ['B', 'C'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A quadrilateral with equal opposite sides',
      formula: 'ABCD is a convex quadrilateral with AB = CD (one tick) and AD = CB (two ticks). To prove: <strong>ABCD is a parallelogram</strong>, that is, AB ∥ DC and AD ∥ BC.',
      show: ['A', 'B', 'C', 'D', 'Q', 'AB', 'BC', 'CD', 'DA', 'tAB', 'tCD', 'tDA', 'tBC'],
      hl: ['tAB', 'tCD', 'tDA', 'tBC']
    },
    {
      phase: 'diagonal', just: 'Construction',
      title: 'The diagonal BD',
      formula: 'Draw the diagonal BD. It cuts the quadrilateral into the triangles ABD and CDB, which share the side BD.',
      show: ['BD', 'pABD', 'pCDB'],
      hl: ['BD']
    },
    {
      phase: 'sss', just: 'SSS',
      title: 'ABD ≅ CDB',
      formula: 'The two triangles have AB = CD, AD = CB, and the common side BD = DB: three pairs of equal sides. By SSS they are congruent, with A ↔ C, B ↔ D, D ↔ B.',
      show: [],
      hl: ['pABD', 'pCDB']
    },
    {
      phase: 'alternate', just: 'Corresponding parts',
      title: '∠ABD = ∠CDB,  ∠ADB = ∠CBD',
      formula: 'Corresponding angles of the congruent triangles are equal: ∠ABD = ∠CDB = α (the angles opposite the equal sides AD and CB) and ∠ADB = ∠CBD = β (opposite AB and CD).',
      show: ['aB', 'aD', 'bD', 'bB'],
      hl: ['aB', 'aD', 'bD', 'bB']
    },
    {
      phase: 'parallel', just: 'Equal alternate angles',
      title: 'AB ∥ DC and AD ∥ BC',
      formula: 'The angles α at B and at D lie on opposite sides of the transversal BD, between the lines AB and DC: they are alternate angles, and they are equal. Equal alternate angles make the lines parallel: if AB and DC met on one side, the triangle they formed with BD would have an exterior angle equal to an interior opposite angle, which the exterior angle theorem forbids. So <strong>AB ∥ DC</strong>; and in the same way the equal angles β make <strong>AD ∥ BC</strong>.',
      show: ['mAB', 'mDC', 'mAD', 'mBC'],
      hl: ['AB', 'CD', 'DA', 'BC']
    },
    {
      phase: 'conclude', just: 'Definition',
      title: 'ABCD is a parallelogram',
      formula: 'Both pairs of opposite sides are parallel, which is the definition of a parallelogram: <strong>ABCD is a parallelogram</strong>. Together with the theorem that a parallelogram has equal opposite sides, this says that a quadrilateral is a parallelogram exactly when its opposite sides are equal. <strong>∎</strong>',
      show: [],
      hl: ['mAB', 'mDC', 'mAD', 'mBC']
    }
  ],

  readout: (P) =>
    `∠ABD = ${fmt(angleDeg(P.B, P.A, P.D), 0)}°,  ∠CDB = ${fmt(angleDeg(P.D, P.C, P.B), 0)}°,  ∠ADB = ${fmt(angleDeg(P.D, P.A, P.B), 0)}°,  ∠CBD = ${fmt(angleDeg(P.B, P.C, P.D), 0)}°`,

  // a convex quadrilateral, sides long enough for the ticks, everything in the frame
  isValid: (P) => {
    if (!P.C) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348;
    const V = [P.A, P.B, P.C, P.D];
    const turns = V.map((p, i) => cross(p, V[(i + 1) % 4], V[(i + 2) % 4]));
    const sign = Math.sign(turns[0]);
    return V.every(inFrame) && turns.every((t) => Math.sign(t) === sign && Math.abs(t) > 4000) &&
      dist(P.A, P.B) > 90 && dist(P.A, P.D) > 90 && area2(P.A, P.B, P.D) > 8000 &&
      angleDeg(P.A, P.B, P.D) > 25 && angleDeg(P.A, P.B, P.D) < 155;
  }
};

export default parallelogramFromSides;
