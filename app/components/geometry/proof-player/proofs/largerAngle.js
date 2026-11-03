// ===========================================================
// proofs/largerAngle.js — Euclid I.18
// The larger side is opposite the larger angle: if AC > AB then
// ∠ABC > ∠ACB. Cut off AD = AB on AC; triangle ABD is isosceles,
// and ∠ADB is an exterior angle of triangle BDC.
// Phases: given, construct, isosceles, exterior, part, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const largerAngle = {
  label: 'Larger side, larger angle',
  info:
    'Cut off AD = AB on the longer side AC. Triangle ABD is isosceles, so ∠ABD = ∠ADB; ' +
    'and ∠ADB is an exterior angle of triangle BDC, so it is larger than ∠ACB. The whole ' +
    'angle at B is larger still. Drag any vertex: the larger angle always faces the larger side.',
  hint: 'Drag A, B or C (keep AC longer than AB)',
  labelCenter: ['A', 'B', 'C'],
  // Frame for A, B, C, D and their labels.
  viewBox: [40, 60, 460, 310],

  model: {
    points: { A: { x: 80, y: 320 }, B: { x: 220, y: 110 }, C: { x: 460, y: 320 } },
    params: {},
    composites: [
      {
        type: 'triangle', id: 'T', of: ['A', 'B', 'C'],
        angles: {
          B: { color: 'beta', label: 'β' },
          C: { color: 'gamma', label: 'γ' }
        }
      }
    ],
    objects: [
      // D on AC with AD = AB
      { id: 'D', type: 'pointAlongDist', from: 'A', dir: ['A', 'C'], lenOf: ['A', 'B'] },
      { id: 'BD', type: 'segment', of: ['B', 'D'] },
      { id: 'tAB', type: 'ticks', of: ['A', 'B'], n: 1 },
      { id: 'tAD', type: 'ticks', of: ['A', 'D'], n: 1 },
      { id: 'angABD', type: 'angle', at: 'B', from: 'D', to: 'A', color: 'alpha', label: 'δ' },
      { id: 'angADB', type: 'angle', at: 'D', from: 'A', to: 'B', color: 'alpha', label: 'δ' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Triangle ABC with AC &gt; AB',
      formula: 'The side AC is longer than the side AB. To prove: the angle opposite AC is larger than the angle opposite AB, <strong><i>β</i> &gt; <i>γ</i></strong>.',
      show: ['T.fill', 'T.AB', 'T.BC', 'T.CA', 'T.angleB', 'T.angleC', 'A', 'B', 'C'],
      hl: ['T.CA', 'T.AB']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'Cut off AD = AB on AC',
      formula: 'Since AC is the longer side, a point D can be marked on it with AD equal to AB (one tick each). Join B to D.',
      show: ['D', 'BD', 'tAB', 'tAD'],
      hl: ['BD', 'tAB', 'tAD']
    },
    {
      phase: 'isosceles', just: 'Isosceles base angles',
      title: '∠ABD = ∠ADB = <i>δ</i>',
      formula: 'AB = AD, so triangle ABD is isosceles with apex A, and its base angles at B and at D are equal.',
      show: ['angABD', 'angADB'],
      hl: ['angABD', 'angADB', 'tAB', 'tAD']
    },
    {
      phase: 'exterior', just: 'Exterior angle theorem',
      title: '∠ADB &gt; ∠ACB, so <i>δ</i> &gt; <i>γ</i>',
      formula: 'A, D and C lie on one line, so ∠ADB is an exterior angle of triangle BDC. It equals the sum of the two remote interior angles, one of which is <i>γ</i>, so it is larger than <i>γ</i>.',
      show: [],
      hl: ['angADB', 'T.angleC', 'BD', 'T.BC']
    },
    {
      phase: 'part', just: 'Whole greater than part',
      title: '∠ABC &gt; ∠ABD, so <i>β</i> &gt; <i>δ</i>',
      formula: 'The segment BD runs inside the angle ABC, so the angle ABD = <i>δ</i> is a part of the whole angle <i>β</i>.',
      show: [],
      hl: ['T.angleB', 'angABD']
    },
    {
      phase: 'conclude', just: 'Chain of inequalities',
      title: '<i>β</i> &gt; <i>γ</i>',
      formula: '<i>β</i> &gt; <i>δ</i> and <i>δ</i> &gt; <i>γ</i>, so <i>β</i> &gt; <i>γ</i>: the larger angle lies opposite the larger side. <strong>∎</strong>',
      show: [],
      hl: ['T.angleB', 'T.angleC', 'T.CA', 'T.AB']
    }
  ],

  readout: (P) => {
    const ac = dist(P.A, P.C);
    const ab = dist(P.A, P.B);
    const b = angleDeg(P.B, P.C, P.A);
    const g = angleDeg(P.C, P.A, P.B);
    return `AC ${fmt(ac, 0)} > AB ${fmt(ab, 0)}, so β ${fmt(b)}° > γ ${fmt(g)}°`;
  },

  // the theorem assumes AC > AB; drags that make AB the longer side are refused
  isValid: (P) => area2(P.A, P.B, P.C) > 3000 && dist(P.A, P.C) > dist(P.A, P.B) + 8
};

export default largerAngle;
