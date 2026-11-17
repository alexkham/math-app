// ===========================================================
// proofs/arcMidpoint.js — the bisector of an angle of an
// inscribed triangle meets the circumcircle at the midpoint of
// the opposite arc: if AM bisects ∠A then MB = MC.
// The halves at A are inscribed angles on the arcs BM and MC, so
// the central angles BOM and MOC are equal; SAS on the radii
// gives MB = MC. M is the second point where the bisector from A
// meets the circle (secondIntersection), so it is not built in.
// Phases: given, halves, central, sas, conclude
// ===========================================================

import { angleDeg, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

const arcMidpoint = {
  label: 'Bisector meets the arc midpoint',
  info:
    'The bisector of the angle at A meets the circumcircle again at M. Its two halves are inscribed ' +
    'angles on the arcs BM and MC, so the central angles BOM and MOC are twice the same angle and ' +
    'equal. The triangles BOM and MOC have two radii each and equal angles between them, so they are ' +
    'congruent by SAS, and MB = MC: M is the midpoint of the arc BC. Drag A, B or C round the circle.',
  hint: 'Drag A, B or C round the circle (A on the larger arc)',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the circle (radius 140 about O) and its labels.
  viewBox: [60, 50, 440, 360],

  model: {
    // Z (sets the radius) is never shown
    points: { O: { x: 280, y: 220 }, Z: { x: 420, y: 220 } },
    params: { ta: -1.75, tb: 2.6, tc: 0.6 },
    composites: [],
    objects: [
      { id: 'W', type: 'circle', of: ['O', 'Z'] },
      { id: 'A', type: 'onCircle', center: 'O', through: 'Z', param: 'ta', drag: true },
      { id: 'B', type: 'onCircle', center: 'O', through: 'Z', param: 'tb', drag: true },
      { id: 'C', type: 'onCircle', center: 'O', through: 'Z', param: 'tc', drag: true },
      // D (never shown): where the bisector from A meets BC; M: where it meets the circle again
      { id: 'D', type: 'bisectorFoot', at: 'A', of: ['B', 'C'] },
      { id: 'M', type: 'secondIntersection', center: 'O', from: 'A', toward: 'D' },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'AM', type: 'segment', of: ['A', 'M'] },
      { id: 'a1', type: 'angle', at: 'A', from: 'B', to: 'M', color: 'alpha', label: 'φ', radius: 46 },
      { id: 'a2', type: 'angle', at: 'A', from: 'M', to: 'C', color: 'alpha', label: 'φ', radius: 46 },
      { id: 'OB', type: 'segment', of: ['O', 'B'] },
      { id: 'OM', type: 'segment', of: ['O', 'M'] },
      { id: 'OC', type: 'segment', of: ['O', 'C'] },
      { id: 'c1', type: 'angle', at: 'O', from: 'B', to: 'M', color: 'gamma', label: '2φ', radius: 28 },
      { id: 'c2', type: 'angle', at: 'O', from: 'M', to: 'C', color: 'gamma', label: '2φ', radius: 28 },
      { id: 'tOB', type: 'ticks', of: ['O', 'B'], n: 1 },
      { id: 'tOM', type: 'ticks', of: ['O', 'M'], n: 1 },
      { id: 'tOC', type: 'ticks', of: ['O', 'C'], n: 1 },
      { id: 'MB', type: 'segment', of: ['M', 'B'] },
      { id: 'MC', type: 'segment', of: ['M', 'C'] },
      { id: 'pBOM', type: 'polygon', of: ['B', 'O', 'M'], color: 'beta' },
      { id: 'pMOC', type: 'polygon', of: ['M', 'O', 'C'], color: 'delta' },
      { id: 'tMB', type: 'ticks', of: ['M', 'B'], n: 2 },
      { id: 'tMC', type: 'ticks', of: ['M', 'C'], n: 2 }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'The bisector from A meets the circle again at M',
      formula: 'Triangle ABC is inscribed in a circle with centre O. The bisector of the angle at A meets the circle a second time at M, on the arc BC that does not contain A. To prove: <strong>MB = MC</strong>, so M is the midpoint of that arc.',
      show: ['A', 'B', 'C', 'M', 'W', 'T', 'AB', 'BC', 'CA', 'AM'],
      hl: ['AM']
    },
    {
      phase: 'halves', just: 'Angle bisector',
      title: '∠BAM = ∠MAC = φ',
      formula: 'AM bisects the angle at A, so it cuts it into two equal halves: <strong>∠BAM = ∠MAC = φ</strong>. The first stands on the arc BM, the second on the arc MC.',
      show: ['a1', 'a2'],
      hl: ['a1', 'a2']
    },
    {
      phase: 'central', just: 'Inscribed angle theorem',
      title: '∠BOM = ∠MOC = 2φ',
      formula: 'Join O to B, M and C. The central angle on the arc BM is twice the inscribed angle on it, so ∠BOM = 2φ; in the same way ∠MOC = 2φ. So <strong>∠BOM = ∠MOC</strong>.',
      show: ['O', 'OB', 'OM', 'OC', 'c1', 'c2'],
      hl: ['c1', 'c2']
    },
    {
      phase: 'sas', just: 'SAS',
      title: 'BOM ≅ MOC',
      formula: 'The triangles BOM and MOC have OB = OM = OC (radii, one tick each) and equal angles 2φ at O between those sides. By SAS they are congruent.',
      show: ['tOB', 'tOM', 'tOC', 'MB', 'MC', 'pBOM', 'pMOC'],
      hl: ['pBOM', 'pMOC']
    },
    {
      phase: 'conclude', just: 'Corresponding parts',
      title: 'MB = MC',
      formula: 'The third sides of the congruent triangles are equal: <strong>MB = MC</strong> (two ticks each). M is equally far from B and C, so it lies on the perpendicular bisector of BC, and it is the midpoint of the arc BC. <strong>∎</strong>',
      show: ['tMB', 'tMC'],
      hl: ['tMB', 'tMC']
    }
  ],

  readout: (P) =>
    `MB = ${fmt(dist(P.M, P.B) / UNIT, 2)},  MC = ${fmt(dist(P.M, P.C) / UNIT, 2)},  ∠BAM = ${fmt(angleDeg(P.A, P.B, P.M), 0)}°,  ∠MAC = ${fmt(angleDeg(P.A, P.M, P.C), 0)}°`,

  // A on the larger arc (same side of BC as O), sides long enough, everything in the frame
  isValid: (P) => {
    if (!P.M || !P.D) return false;
    const inFrame = (p) => p.x > 75 && p.x < 485 && p.y > 62 && p.y < 398;
    return [P.A, P.B, P.C, P.M].every(inFrame) &&
      Math.sign(cross(P.B, P.C, P.A)) === Math.sign(cross(P.B, P.C, P.O)) &&
      Math.abs(cross(P.B, P.C, P.O)) > 3000 &&
      dist(P.A, P.B) > 90 && dist(P.A, P.C) > 90 && dist(P.B, P.C) > 110 &&
      dist(P.M, P.B) > 60 && dist(P.M, P.C) > 60;
  }
};

export default arcMidpoint;
