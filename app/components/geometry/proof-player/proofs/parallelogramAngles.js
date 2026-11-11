// ===========================================================
// proofs/parallelogramAngles.js — the angles of a parallelogram:
// neighbouring angles add up to 180° and opposite angles are
// equal. Each side is a transversal of the other pair of
// parallels, so each pair of neighbouring angles is co-interior.
// C = D + (B − A) keeps ABCD a parallelogram.
// Phases: given, first, second, opposite, third, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

const parallelogramAngles = {
  label: 'Parallelogram angles',
  info:
    'Each side of the parallelogram crosses the other pair of parallel sides, so the two angles ' +
    'at its ends are co-interior and add up to 180°: α + β = 180° along AB, β + γ = 180° along ' +
    'BC, γ + δ = 180° along CD. Subtracting gives α = γ and β = δ: opposite angles are equal. ' +
    'Drag A, B or D.',
  hint: 'Drag A, B or D (C keeps the figure a parallelogram)',
  labelCenter: ['A', 'B', 'C', 'D'],
  // Frame for the parallelogram and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 120, y: 300 }, B: { x: 330, y: 300 }, D: { x: 200, y: 140 } },
    params: {},
    composites: [],
    objects: [
      // C = D + (B − A): DC ∥ AB and BC ∥ AD
      { id: 'C', type: 'pointAlongDist', from: 'D', dir: ['A', 'B'], lenOf: ['A', 'B'], scale: 1 },
      { id: 'Q', type: 'polygon', of: ['A', 'B', 'C', 'D'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CD', type: 'segment', of: ['C', 'D'] },
      { id: 'DA', type: 'segment', of: ['D', 'A'] },
      { id: 'mAB', type: 'parallel', of: ['A', 'B'], n: 1 },
      { id: 'mDC', type: 'parallel', of: ['D', 'C'], n: 1 },
      { id: 'mAD', type: 'parallel', of: ['A', 'D'], n: 2 },
      { id: 'mBC', type: 'parallel', of: ['B', 'C'], n: 2 },
      { id: 'aA', type: 'angle', at: 'A', from: 'B', to: 'D', color: 'alpha', label: 'α' },
      { id: 'bB', type: 'angle', at: 'B', from: 'C', to: 'A', color: 'beta', label: 'β' },
      { id: 'cC', type: 'angle', at: 'C', from: 'D', to: 'B', color: 'alpha', label: 'γ' },
      { id: 'dD', type: 'angle', at: 'D', from: 'A', to: 'C', color: 'beta', label: 'δ' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A parallelogram and its four angles',
      formula: 'ABCD is a parallelogram: AB ∥ DC (one chevron) and AD ∥ BC (two chevrons). Its angles are α at A, β at B, γ at C and δ at D. To prove: <strong>neighbouring angles add up to 180°</strong> and <strong>opposite angles are equal</strong>, α = γ and β = δ.',
      show: ['A', 'B', 'C', 'D', 'Q', 'AB', 'BC', 'CD', 'DA', 'mAB', 'mDC', 'mAD', 'mBC'],
      hl: ['mAB', 'mDC', 'mAD', 'mBC']
    },
    {
      phase: 'first', just: 'Co-interior angles',
      title: 'α + β = 180°',
      formula: 'The side AB crosses the parallels AD and BC. The angles α and β lie between the parallels on the same side of AB: they are co-interior angles, and co-interior angles on parallel lines add up to 180°. So <strong>α + β = 180°</strong>.',
      show: ['aA', 'bB'],
      hl: ['AB', 'aA', 'bB']
    },
    {
      phase: 'second', just: 'Co-interior angles',
      title: 'β + γ = 180°',
      formula: 'The side BC crosses the parallels AB and DC, and β and γ are co-interior angles between them: <strong>β + γ = 180°</strong>.',
      show: ['cC'],
      hl: ['BC', 'bB', 'cC']
    },
    {
      phase: 'opposite', just: 'Subtracting',
      title: 'α = γ',
      formula: 'Both α and γ make 180° with the same angle β: α = 180° − β = γ. So <strong>α = γ</strong>, the angles at A and C are equal.',
      show: [],
      hl: ['aA', 'cC']
    },
    {
      phase: 'third', just: 'Co-interior angles',
      title: 'γ + δ = 180°, so δ = β',
      formula: 'The side CD crosses the parallels AD and BC, so γ and δ are co-interior: γ + δ = 180°. Then δ = 180° − γ = β, so <strong>β = δ</strong>, the angles at B and D are equal.',
      show: ['dD'],
      hl: ['CD', 'cC', 'dD']
    },
    {
      phase: 'conclude', just: 'Combining',
      title: 'α = γ, β = δ, α + β = 180°',
      formula: 'The opposite angles of a parallelogram are equal, <strong>α = γ</strong> and <strong>β = δ</strong>, and any two neighbouring angles add up to <strong>180°</strong>. The four angles add up to 2(α + β) = 360°, as for every quadrilateral. <strong>∎</strong>',
      show: [],
      hl: ['aA', 'bB', 'cC', 'dD']
    }
  ],

  readout: (P) => {
    const a = angleDeg(P.A, P.B, P.D);
    const b = angleDeg(P.B, P.C, P.A);
    const c = angleDeg(P.C, P.D, P.B);
    const d = angleDeg(P.D, P.A, P.C);
    return `α = ${fmt(a, 0)}°,  β = ${fmt(b, 0)}°,  γ = ${fmt(c, 0)}°,  δ = ${fmt(d, 0)}°,  α + β = ${fmt(a + b, 0)}°`;
  },

  // a convex parallelogram, sides long enough for the marks, everything in the frame
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

export default parallelogramAngles;
