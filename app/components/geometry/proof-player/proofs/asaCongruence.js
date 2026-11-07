// ===========================================================
// proofs/asaCongruence.js — the ASA criterion from SAS
// Two triangles with two equal angles and the equal side
// between them are congruent (Euclid I.26). By contradiction:
// if the sides AC and A′C′ differed, cutting AE = A′C′ off the
// longer one would give, by SAS, a triangle ABE with the same
// angle at B as ABC; but ∠ABE is only a part of ∠ABC.
// Phases: given, suppose, sas, inside, contra, conclude
// ===========================================================

import { angleDeg, area2, fmt } from '../engine/math';

const asaCongruence = {
  label: 'ASA congruence',
  info:
    'Suppose the sides AC and A′C′ next to the equal angles were different, say AC longer. Cut ' +
    'off AE = A′C′ on AC. Then ABE and A′B′C′ agree in two sides and the included angle, so by ' +
    'SAS the angle ABE equals the angle at B′, which equals the angle ABC. But E lies inside the ' +
    'angle ABC, so ∠ABE is only a part of it. The sides cannot differ, and SAS finishes. Slide E ' +
    'along AC to see the part fall short of the whole.',
  hint: 'Slide E along AC; drag A, B or C to reshape the triangle',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 110, y: 320 }, B: { x: 420, y: 320 }, C: { x: 240, y: 100 } },
    params: { t: 0.42 },
    composites: [],
    objects: [
      // E: the supposed point on AC with AE = A′C′
      { id: 'E', type: 'onLine', of: ['A', 'C'], param: 't', drag: true, minParam: 0.15, maxParam: 0.9 },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 1 },
      { id: 'aA', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'alpha', label: 'α' },
      { id: 'bB', type: 'angle', at: 'B', from: 'C', to: 'A', color: 'beta', label: 'β' },
      { id: 'BE', type: 'line', of: ['B', 'E'] },
      { id: 'tAE', type: 'ticks', of: ['A', 'E'], n: 2 },
      { id: 'TE', type: 'polygon', of: ['A', 'B', 'E'], color: 'gamma' },
      { id: 'gB', type: 'angle', at: 'B', from: 'E', to: 'A', color: 'gamma', label: 'β′', radius: 52 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two angles and the side between them',
      formula: 'Triangle ABC has angle <i>α</i> at A, angle <i>β</i> at B, and the side AB between them (one tick). A second triangle A′B′C′ has the same angle <i>α</i> at A′, the same angle <i>β</i> at B′, and A′B′ = AB. To prove: <strong>ABC ≅ A′B′C′</strong>.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'tAB', 'aA', 'bB'],
      hl: ['tAB', 'aA', 'bB']
    },
    {
      phase: 'suppose', just: 'Supposition',
      title: 'Suppose AC ≠ A′C′, say AC is the longer',
      formula: 'It is enough to show AC = A′C′. Suppose not: one of the two is longer, say AC. Then A′C′ fits inside AC: cut off AE = A′C′ from A along AC (two ticks), with E strictly between A and C, and join B to E.',
      show: ['E', 'BE', 'tAE'],
      hl: ['E', 'BE', 'tAE']
    },
    {
      phase: 'sas', just: 'SAS congruence',
      title: 'ABE ≅ A′B′C′, so ∠ABE = <i>β</i>',
      formula: 'Triangles ABE and A′B′C′ have AB = A′B′, AE = A′C′, and the same angle <i>α</i> between those sides. By SAS they are congruent, so their angles at B and B′ are equal: ∠ABE = ∠A′B′C′ = <i>β</i>. The player marks ∠ABE as <i>β′</i>, the angle the supposition says equals <i>β</i>.',
      show: ['TE', 'gB'],
      hl: ['TE', 'gB']
    },
    {
      phase: 'inside', just: 'A part of the whole',
      title: '∠ABE is only a part of ∠ABC',
      formula: 'E lies on AC strictly between A and C, so the ray BE runs inside the angle ABC, and ∠ABE is a part of ∠ABC: ∠ABE &lt; ∠ABC = <i>β</i>.',
      show: [],
      hl: ['gB', 'bB']
    },
    {
      phase: 'contra', just: 'Contradiction',
      title: 'The part cannot equal the whole',
      formula: '∠ABE = <i>β</i> from the supposition and ∠ABE &lt; <i>β</i> from the picture cannot both hold. So the supposition was false: AC is not longer than A′C′. The same argument with the triangles swapped shows A′C′ is not longer than AC. Hence AC = A′C′.',
      show: [],
      hl: ['gB', 'bB', 'E']
    },
    {
      phase: 'conclude', just: 'SAS congruence',
      title: 'ABC ≅ A′B′C′',
      formula: 'Now AB = A′B′, AC = A′C′ and the angle <i>α</i> between them is the same in both triangles. By SAS the triangles are congruent: two angles and the included side determine a triangle. <strong>∎</strong>',
      show: [],
      hl: ['T', 'AB', 'CA', 'aA']
    }
  ],

  readout: (P) => {
    const whole = angleDeg(P.B, P.C, P.A);
    const part = angleDeg(P.B, P.E, P.A);
    return `∠ABC = ${fmt(whole)}°,  ∠ABE = ${fmt(part)}°`;
  },

  // a real triangle inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 8000 &&
    [P.A, P.B, P.C].every((p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348)
};

export default asaCongruence;
