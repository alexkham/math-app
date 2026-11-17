// ===========================================================
// proofs/incentreExcentre.js — the incentre-excentre lemma
// (trillium theorem). The bisector from A meets the circumcircle
// again at M; then MB = MC = MI, I the incentre.
// ∠MBI = ∠MBC + ∠CBI = α/2 + β/2 (same segment + bisector at B);
// ∠MIB = ∠IAB + ∠IBA = α/2 + β/2 (exterior angle of ABI);
// so MBI is isosceles and MI = MB. M is the second intersection
// of AI with the circle, so nothing about it is built in.
// Phases: given, segment, bisector, sum, exterior, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

const incentreExcentre = {
  label: 'Incentre-excentre lemma',
  info:
    'The bisector from A passes through the incentre I and meets the circumcircle again at M. The angle ' +
    'MBC equals MAC = α/2 (same segment), and CBI = β/2, so ∠MBI = α/2 + β/2. The angle MIB is an ' +
    'exterior angle of triangle ABI, so it equals α/2 + β/2 too. Equal angles: MI = MB, and MB = MC ' +
    'because M is the arc midpoint. Drag A, B or C round the circle.',
  hint: 'Drag A, B or C round the circle (A on the larger arc)',
  // names point away from a spot a third of the way from A to O, so the name of I
  // falls below I, clear of the marks at A
  labelCenter: ['A', 'A', 'O'],
  // Frame for the circle (radius 140 about O) and its labels.
  viewBox: [60, 42, 440, 360],

  model: {
    // O and Z (they fix the circle) are never shown
    points: { O: { x: 280, y: 220 }, Z: { x: 420, y: 220 } },
    params: { ta: -1.6, tb: 2.5, tc: 0 },
    composites: [],
    objects: [
      { id: 'W', type: 'circle', of: ['O', 'Z'] },
      { id: 'A', type: 'onCircle', center: 'O', through: 'Z', param: 'ta', drag: true },
      { id: 'B', type: 'onCircle', center: 'O', through: 'Z', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'Z', param: 'tc', drag: true },
      { id: 'I', type: 'incentre', of: ['A', 'B', 'C'] },
      // M: where the line AI (the bisector from A) meets the circle again
      { id: 'M', type: 'secondIntersection', center: 'O', from: 'A', toward: 'I' },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'AM', type: 'segment', of: ['A', 'M'] },
      { id: 'BI', type: 'segment', of: ['B', 'I'] },
      { id: 'MB', type: 'segment', of: ['M', 'B'] },
      { id: 'MC', type: 'segment', of: ['M', 'C'] },
      { id: 'a1', type: 'angle', at: 'A', from: 'B', to: 'I', color: 'alpha', label: 'α/2', radius: 61 },
      { id: 'a2', type: 'angle', at: 'A', from: 'I', to: 'C', color: 'alpha', label: 'α/2', radius: 32 },
      { id: 'mB', type: 'angle', at: 'B', from: 'C', to: 'M', color: 'alpha', label: 'α/2', radius: 60 },
      { id: 'b1', type: 'angle', at: 'B', from: 'A', to: 'I', color: 'beta', label: 'β/2', radius: 56 },
      { id: 'b2', type: 'angle', at: 'B', from: 'I', to: 'C', color: 'beta', label: 'β/2', radius: 28 },
      { id: 'pMBI', type: 'polygon', of: ['M', 'B', 'I'], color: 'gamma' },
      { id: 'pABI', type: 'polygon', of: ['A', 'B', 'I'], color: 'beta' },
      { id: 'tB', type: 'angle', at: 'B', from: 'I', to: 'M', color: 'gamma', label: 'θ', radius: 96 },
      { id: 'tI', type: 'angle', at: 'I', from: 'M', to: 'B', color: 'gamma', label: 'θ', radius: 30 },
      { id: 'tMB', type: 'ticks', of: ['M', 'B'], n: 1 },
      { id: 'tMI', type: 'ticks', of: ['M', 'I'], n: 1 },
      { id: 'tMC', type: 'ticks', of: ['M', 'C'], n: 1 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'The incentre and the arc midpoint',
      formula: 'Triangle ABC has angles α, β, γ and is inscribed in a circle. I is the incentre, where the angle bisectors meet. The bisector AI meets the circle again at M, the midpoint of the arc BC, so MB = MC. To prove: <strong>MI = MB = MC</strong>.',
      show: ['A', 'B', 'C', 'I', 'M', 'W', 'T', 'AB', 'BC', 'CA', 'AM', 'BI', 'MB', 'MC', 'a1', 'a2'],
      hl: ['AM', 'BI']
    },
    {
      phase: 'segment', just: 'Angles in the same segment',
      title: '∠MBC = ∠MAC = α/2',
      formula: 'The angles MBC and MAC both stand on the arc MC, from the same side, so they are equal: <strong>∠MBC = α/2</strong>.',
      show: ['mB'],
      hl: ['mB', 'a2']
    },
    {
      phase: 'bisector', just: 'Angle bisector',
      title: '∠ABI = ∠IBC = β/2',
      formula: 'I is on the bisector of the angle at B, so it cuts the angle β into two halves: <strong>∠ABI = ∠IBC = β/2</strong>.',
      show: ['b1', 'b2'],
      hl: ['b1', 'b2']
    },
    {
      phase: 'sum', just: 'Adding',
      title: '∠MBI = α/2 + β/2',
      formula: 'At B the angle between BI and BM is made of the two parts ∠IBC and ∠CBM: <strong>∠MBI = β/2 + α/2 = θ</strong>.',
      show: ['tB', 'pMBI'],
      hl: ['tB', 'mB', 'b2']
    },
    {
      phase: 'exterior', just: 'Exterior angle theorem',
      title: '∠MIB = α/2 + β/2',
      formula: 'The angle MIB lies at I outside the triangle ABI, between BI and the extension of AI: it is an exterior angle of ABI, so it equals the sum of the two remote interior angles: <strong>∠MIB = ∠IAB + ∠IBA = α/2 + β/2 = θ</strong>.',
      show: ['tI', 'pABI'],
      hl: ['tI', 'a1', 'b1', 'pABI']
    },
    {
      phase: 'conclude', just: 'Isosceles converse',
      title: 'MI = MB = MC',
      formula: 'In the triangle MBI the angles at B and I are equal, both θ, so the sides opposite them are equal: <strong>MI = MB</strong>. With MB = MC: <strong>MB = MC = MI</strong>, and the circle about M through B and C passes through the incentre I. <strong>∎</strong>',
      show: ['tMB', 'tMI', 'tMC'],
      hl: ['tMB', 'tMI', 'tMC']
    }
  ],

  readout: (P) =>
    `MB = ${fmt(dist(P.M, P.B) / UNIT, 2)},  MC = ${fmt(dist(P.M, P.C) / UNIT, 2)},  MI = ${fmt(dist(P.M, P.I) / UNIT, 2)}`,

  // A on the larger arc, sides long enough, all points in the frame; BI, AI and the
  // three angles kept large enough that the angle labels at A, B and I stay apart
  isValid: (P) => {
    if (!P.M || !P.I) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 62 && p.y < 390;
    return [P.A, P.B, P.C, P.M].every(inFrame) &&
      Math.sign(cross(P.B, P.C, P.A)) === Math.sign(cross(P.B, P.C, P.O)) &&
      Math.abs(cross(P.B, P.C, P.O)) > 3000 &&
      dist(P.A, P.B) > 110 && dist(P.A, P.C) > 110 && dist(P.B, P.C) > 130 &&
      dist(P.B, P.I) > 110 && dist(P.A, P.I) > 100 &&
      angleDeg(P.A, P.B, P.C) > 45 && angleDeg(P.B, P.A, P.C) > 45 && angleDeg(P.C, P.A, P.B) > 40;
  }
};

export default incentreExcentre;
