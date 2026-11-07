// ===========================================================
// proofs/parallelogramSides.js — Euclid I.34
// A diagonal cuts a parallelogram into two congruent triangles,
// so opposite sides are equal (and opposite angles too). The
// congruence is ASA: two pairs of alternate angles on the
// diagonal, which is a transversal of both pairs of parallels,
// and the diagonal itself as the common side.
// Phases: given, construct, alt1, alt2, asa, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const parallelogramSides = {
  label: 'Parallelogram: opposite sides',
  info:
    'Draw the diagonal BD. It is a transversal of the parallels AB, DC and also of AD, BC, so ' +
    'it makes two pairs of equal alternate angles, α at B and D, β at D and B. Triangles ABD ' +
    'and CDB then share the side BD between two equal angles: they are congruent (ASA), so ' +
    'AB = CD and AD = BC. Drag A, B or D; C follows to keep the figure a parallelogram.',
  hint: 'Drag A, B or D; C follows so the figure stays a parallelogram',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the parallelogram and its labels.
  viewBox: [70, 95, 440, 260],

  model: {
    points: { A: { x: 120, y: 320 }, B: { x: 360, y: 320 }, D: { x: 180, y: 130 } },
    params: {},
    composites: [],
    objects: [
      // C = D + (B − A): the fourth vertex, so that AB ∥ DC and AD ∥ BC
      { id: 'C', type: 'pointAlongDist', from: 'D', dir: ['A', 'B'], lenOf: ['A', 'B'] },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'pAB', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'pDC', type: 'parallel', of: ['D', 'C'], n: 1 },
      { id: 'pAD', type: 'parallel', of: ['A', 'D'], n: 2 },
      { id: 'pBC', type: 'parallel', of: ['B', 'C'], n: 2 },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'tri1', type: 'polygon', of: ['A', 'B', 'D'], color: 'alpha' },
      { id: 'tri2', type: 'polygon', of: ['C', 'D', 'B'], color: 'beta' },
      // alternate angles on the transversal BD
      { id: 'aB', type: 'angle', at: 'B', from: 'A', to: 'D', color: 'alpha', label: 'α' },
      { id: 'aD', type: 'angle', at: 'D', from: 'C', to: 'B', color: 'alpha', label: 'α' },
      { id: 'bD', type: 'angle', at: 'D', from: 'B', to: 'A', color: 'beta', label: 'β' },
      { id: 'bB', type: 'angle', at: 'B', from: 'D', to: 'C', color: 'beta', label: 'β' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A parallelogram',
      formula: 'ABCD has AB ∥ DC (one chevron each) and AD ∥ BC (two chevrons each): it is a parallelogram. To prove: <strong>AB = CD and AD = BC</strong>, opposite sides are equal.',
      show: ['A', 'B', 'C', 'D', 'Q', 'AB', 'BC', 'CD', 'DA', 'pAB', 'pDC', 'pAD', 'pBC'],
      hl: ['AB', 'CD', 'DA', 'BC']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'The diagonal BD',
      formula: 'Join B to D. The diagonal cuts the parallelogram into two triangles, ABD and CDB, and it is a transversal of both pairs of parallel sides.',
      show: ['BD', 'tri1', 'tri2'],
      hl: ['BD']
    },
    {
      phase: 'alt1', just: 'Alternate angles',
      title: '∠ABD = ∠CDB = <i>α</i>',
      formula: 'AB ∥ DC and BD crosses both. The angles ∠ABD and ∠CDB lie on opposite sides of BD, between the parallels: they are alternate angles, so they are equal.',
      show: ['aB', 'aD'],
      hl: ['aB', 'aD', 'pAB', 'pDC']
    },
    {
      phase: 'alt2', just: 'Alternate angles',
      title: '∠ADB = ∠CBD = <i>β</i>',
      formula: 'AD ∥ BC and BD crosses both. The angles ∠ADB and ∠CBD are alternate angles on this second pair of parallels, so they are equal too.',
      show: ['bD', 'bB'],
      hl: ['bD', 'bB', 'pAD', 'pBC']
    },
    {
      phase: 'asa', just: 'ASA congruence',
      title: 'Triangles ABD and CDB are congruent',
      formula: 'In triangle ABD the side BD lies between the angles <i>α</i> at B and <i>β</i> at D; in triangle CDB the same side BD lies between <i>α</i> at D and <i>β</i> at B. Two angles and the included side: the triangles are congruent, with A ↔ C, B ↔ D, D ↔ B.',
      show: [],
      hl: ['tri1', 'tri2', 'BD']
    },
    {
      phase: 'conclude', just: 'Corresponding parts',
      title: 'AB = CD, AD = BC',
      formula: 'Corresponding sides of congruent triangles are equal: AB ↔ CD and AD ↔ CB. The corresponding angles at A and at C are equal as well, and ∠B = ∠D = <i>α</i> + <i>β</i>: opposite angles of a parallelogram are equal. <strong>∎</strong>',
      show: [],
      hl: ['AB', 'CD', 'DA', 'BC']
    }
  ],

  readout: (P) => {
    const ab = dist(P.A, P.B) / UNIT;
    const cd = dist(P.C, P.D) / UNIT;
    const ad = dist(P.A, P.D) / UNIT;
    const bc = dist(P.B, P.C) / UNIT;
    return `AB = ${fmt(ab, 2)}, CD = ${fmt(cd, 2)};  AD = ${fmt(ad, 2)}, BC = ${fmt(bc, 2)}`;
  },

  // a real parallelogram inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.D) > 6000 &&
    [P.A, P.B, P.C, P.D].every((p) => p.x > 85 && p.x < 495 && p.y > 108 && p.y < 342)
};

export default parallelogramSides;
