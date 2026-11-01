// ===========================================================
// proofs/isosceles.js — Pons asinorum, Euclid I.5 (SSS route)
// Phases: given, construct, congruence, conclude
// C is an apex constrained to the perpendicular bisector of AB.
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const isosceles = {
  label: 'Isosceles base angles',
  info:
    'Join the apex to the midpoint of the base. The two halves share a side, ' +
    'have equal legs and equal half-bases, so they are congruent by SSS, and the ' +
    'base angles correspond. Drag C along the axis, or move A and B.',
  hint: 'Drag A, B, or C along the axis',
  labelCenter: ['A', 'B', 'C'],

  model: {
    points: { A: { x: 120, y: 350 }, B: { x: 440, y: 350 } },
    params: { h: 240 },
    composites: [
      {
        type: 'triangle', id: 'T', of: ['A', 'B', 'C'],
        angles: {
          A: { color: 'alpha', label: 'α' },
          B: { color: 'alpha', label: 'β' }
        }
      }
    ],
    objects: [
      { id: 'C', type: 'apex', base: ['A', 'B'], param: 'h', drag: true },
      { id: 'M', type: 'midpoint', of: ['A', 'B'] },
      { id: 'CM', type: 'segment', of: ['C', 'M'] },
      { id: 'tCA', type: 'ticks', of: ['C', 'A'], n: 1 },
      { id: 'tCB', type: 'ticks', of: ['C', 'B'], n: 1 },
      { id: 'tAM', type: 'ticks', of: ['A', 'M'], n: 2 },
      { id: 'tMB', type: 'ticks', of: ['M', 'B'], n: 2 },
      { id: 'triL', type: 'polygon', of: ['A', 'C', 'M'], color: 'beta' },
      { id: 'triR', type: 'polygon', of: ['B', 'C', 'M'], color: 'gamma' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Isosceles triangle ABC',
      formula: 'The legs are equal, CA = CB. To prove: the base angles are equal, <strong><i>α</i> = <i>β</i></strong>.',
      show: ['T.fill', 'T.AB', 'T.BC', 'T.CA', 'T.angleA', 'T.angleB', 'A', 'B', 'C', 'tCA', 'tCB'],
      hl: ['tCA', 'tCB']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Midpoint M, segment CM',
      formula: 'Let M be the midpoint of AB, so AM = MB, and join it to the apex.',
      show: ['M', 'CM', 'tAM', 'tMB'],
      hl: ['CM', 'tAM', 'tMB']
    },
    {
      phase: 'congruence', just: 'SSS',
      title: '△ACM ≅ △BCM',
      formula: 'CA = CB (given), AM = BM (midpoint), CM = CM (shared). Three pairs of equal sides.',
      show: ['triL', 'triR'],
      hl: ['triL', 'triR', 'CM']
    },
    {
      phase: 'conclude', just: 'CPCTC',
      title: '<i>α</i> = <i>β</i>',
      formula: '∠CAM and ∠CBM are corresponding angles of congruent triangles, so they are equal. <strong>∎</strong>',
      show: [],
      hl: ['triL', 'triR', 'T.angleA', 'T.angleB']
    }
  ],

  readout: (P) =>
    `α ${fmt(angleDeg(P.A, P.B, P.C))}° · β ${fmt(angleDeg(P.B, P.C, P.A))}° · ` +
    `CA ${Math.round(dist(P.C, P.A))} · CB ${Math.round(dist(P.C, P.B))}`,

  isValid: (P) => area2(P.A, P.B, P.C) > 3000
};

export default isosceles;
