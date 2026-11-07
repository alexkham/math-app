// ===========================================================
// proofs/aasCongruence.js — the AAS criterion from ASA
// Two triangles with two equal angles and an equal side that
// is not between them are congruent (second half of Euclid
// I.26). The angle sum fixes the third angle, and then the
// given side lies between two equal angles: ASA.
// Phases: given, sum, third, asa, conclude
// ===========================================================

import { angleDeg, area2, fmt } from '../engine/math';

const aasCongruence = {
  label: 'AAS congruence',
  info:
    'The angle sum of a triangle is 180°, so two angles fix the third: in both triangles the ' +
    'angle at C is 180° minus the two given angles, hence the angles at C and C′ are equal. Now ' +
    'the given side BC lies between two angles known to be equal, β at B and γ at C, and the ' +
    'angle-side-angle criterion makes the triangles congruent. Drag any vertex.',
  hint: 'Drag A, B or C to reshape the triangle',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [60, 60, 440, 300],

  model: {
    points: { A: { x: 120, y: 320 }, B: { x: 430, y: 320 }, C: { x: 300, y: 100 } },
    params: {},
    composites: [],
    objects: [
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'tBC', type: 'ticks', of: ['B', 'C'], n: 1 },
      { id: 'aA', type: 'angle', at: 'A', from: 'B', to: 'C', color: 'alpha', label: 'α' },
      { id: 'bB', type: 'angle', at: 'B', from: 'C', to: 'A', color: 'beta', label: 'β' },
      { id: 'gC', type: 'angle', at: 'C', from: 'A', to: 'B', color: 'gamma', label: 'γ' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two angles and a side not between them',
      formula: 'Triangle ABC has angle <i>α</i> at A, angle <i>β</i> at B, and the side BC (one tick), which touches the angle at B but not the angle at A. A second triangle A′B′C′ has the same angle <i>α</i> at A′, the same angle <i>β</i> at B′, and B′C′ = BC. To prove: <strong>ABC ≅ A′B′C′</strong>.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'tBC', 'aA', 'bB'],
      hl: ['tBC', 'aA', 'bB']
    },
    {
      phase: 'sum', just: 'Triangle angle sum',
      title: '<i>α</i> + <i>β</i> + <i>γ</i> = 180°',
      formula: 'Call the third angle, at C, <i>γ</i>. The three angles of any triangle add up to 180°, so <i>γ</i> = 180° − <i>α</i> − <i>β</i>. The same holds in the second triangle: its angle at C′ is 180° − <i>α</i> − <i>β</i> as well.',
      show: ['gC'],
      hl: ['aA', 'bB', 'gC']
    },
    {
      phase: 'third', just: 'Equal remainders',
      title: '∠C = ∠C′ = <i>γ</i>',
      formula: 'Both third angles are the same number, 180° − <i>α</i> − <i>β</i>, so they are equal. The two triangles now agree in all three angles, and in one side: BC = B′C′.',
      show: [],
      hl: ['gC']
    },
    {
      phase: 'asa', just: 'ASA congruence',
      title: 'BC lies between <i>β</i> and <i>γ</i>',
      formula: 'The given side BC has the angle <i>β</i> at one end and the angle <i>γ</i> at the other, and B′C′ has the same two angles at its ends. Two angles and the side between them agree: the angle-side-angle criterion applies.',
      show: [],
      hl: ['tBC', 'bB', 'gC']
    },
    {
      phase: 'conclude', just: 'ASA congruence',
      title: 'ABC ≅ A′B′C′',
      formula: 'By angle-side-angle the triangles are congruent: two angles and any one side determine a triangle, whether or not the side lies between the angles. <strong>∎</strong>',
      show: [],
      hl: ['T', 'AB', 'BC', 'CA']
    }
  ],

  readout: (P) => {
    const a = angleDeg(P.A, P.B, P.C);
    const b = angleDeg(P.B, P.C, P.A);
    const c = angleDeg(P.C, P.A, P.B);
    return `∠C = ${fmt(c)}°,  180° − ∠A − ∠B = ${fmt(180 - a - b)}°`;
  },

  // a real triangle inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 8000 &&
    [P.A, P.B, P.C].every((p) => p.x > 75 && p.x < 485 && p.y > 72 && p.y < 348)
};

export default aasCongruence;
