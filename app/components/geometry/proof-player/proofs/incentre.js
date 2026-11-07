// ===========================================================
// proofs/incentre.js — the angle bisectors meet at the incentre
// Two bisectors meet at I. A point on a bisector is equidistant
// from the two sides of the angle (AAS on the right triangles
// along the bisector), so IE = IF and IF = ID; then ID = IE puts
// I on the bisector of the third angle (the right triangles on
// the hypotenuse CI agree in a leg, hence in all sides). The
// circle about I with radius ID touches all three sides.
// Phases: given, feet, aas1, aas2, third, conclude
// ===========================================================

import { area2, dist, fmt } from '../engine/math';

const UNIT = 60; // px per unit in the readout

const incentre = {
  label: 'Incentre',
  info:
    'The bisectors of the angles at A and B meet at I. Drop perpendiculars from I to the three ' +
    'sides: ID, IE, IF. Being on the bisector at A makes IE = IF; being on the bisector at B ' +
    'makes IF = ID. So ID = IE, and the right triangles CID and CIE agree in the hypotenuse and ' +
    'a leg, so CI bisects the angle at C. The circle about I with radius ID touches all three ' +
    'sides. Drag any vertex.',
  hint: 'Drag A, B or C; the bisectors, I and the feet follow',
  labelCenter: ['A', 'B', 'C'],
  // Frame for the triangle and its labels.
  viewBox: [50, 40, 440, 340],

  model: {
    points: { A: { x: 250, y: 70 }, B: { x: 90, y: 330 }, C: { x: 430, y: 330 } },
    params: {},
    composites: [],
    objects: [
      { id: 'I', type: 'incentre', of: ['A', 'B', 'C'] },
      { id: 'D', type: 'foot', from: 'I', to: ['B', 'C'] },
      { id: 'E', type: 'foot', from: 'I', to: ['C', 'A'] },
      { id: 'F', type: 'foot', from: 'I', to: ['A', 'B'] },
      { id: 'T', type: 'polygon', of: ['A', 'B', 'C'] },
      { id: 'AB', type: 'segment', of: ['A', 'B'] },
      { id: 'BC', type: 'segment', of: ['B', 'C'] },
      { id: 'CA', type: 'segment', of: ['C', 'A'] },
      { id: 'AI', type: 'segment', of: ['A', 'I'] },
      { id: 'BI', type: 'segment', of: ['B', 'I'] },
      { id: 'aA1', type: 'angle', at: 'A', from: 'B', to: 'I', color: 'alpha', label: 'α' },
      { id: 'aA2', type: 'angle', at: 'A', from: 'I', to: 'C', color: 'alpha', label: 'α' },
      { id: 'bB1', type: 'angle', at: 'B', from: 'I', to: 'A', color: 'beta', label: 'β' },
      { id: 'bB2', type: 'angle', at: 'B', from: 'C', to: 'I', color: 'beta', label: 'β' },
      { id: 'ID', type: 'segment', of: ['I', 'D'], color: 'gamma' },
      { id: 'IE', type: 'segment', of: ['I', 'E'], color: 'gamma' },
      { id: 'IF', type: 'segment', of: ['I', 'F'], color: 'gamma' },
      { id: 'rD', type: 'rightAngle', at: 'D', from: 'C', to: 'I' },
      { id: 'rE', type: 'rightAngle', at: 'E', from: 'A', to: 'I' },
      { id: 'rF', type: 'rightAngle', at: 'F', from: 'B', to: 'I' },
      { id: 'triAE', type: 'polygon', of: ['A', 'I', 'E'], color: 'alpha' },
      { id: 'triAF', type: 'polygon', of: ['A', 'I', 'F'], color: 'alpha' },
      { id: 'tIE', type: 'ticks', of: ['I', 'E'], n: 1 },
      { id: 'tIF', type: 'ticks', of: ['I', 'F'], n: 1 },
      { id: 'triBF', type: 'polygon', of: ['B', 'I', 'F'], color: 'beta' },
      { id: 'triBD', type: 'polygon', of: ['B', 'I', 'D'], color: 'beta' },
      { id: 'tID', type: 'ticks', of: ['I', 'D'], n: 1 },
      { id: 'CI', type: 'segment', of: ['C', 'I'] },
      { id: 'triCD', type: 'polygon', of: ['C', 'I', 'D'], color: 'delta' },
      { id: 'triCE', type: 'polygon', of: ['C', 'I', 'E'], color: 'delta' },
      { id: 'cC1', type: 'angle', at: 'C', from: 'I', to: 'B', color: 'delta', label: 'γ' },
      { id: 'cC2', type: 'angle', at: 'C', from: 'A', to: 'I', color: 'delta', label: 'γ' },
      { id: 'K', type: 'circle', of: ['I', 'D'] }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'Two angle bisectors meet at I',
      formula: 'AI bisects the angle at A (two angles <i>α</i>) and BI bisects the angle at B (two angles <i>β</i>); they meet at I. To prove: <strong>I is equidistant from the three sides</strong>, and the bisector of the angle at C passes through I as well.',
      show: ['A', 'B', 'C', 'T', 'AB', 'BC', 'CA', 'I', 'AI', 'BI', 'aA1', 'aA2', 'bB1', 'bB2'],
      hl: ['AI', 'BI', 'I']
    },
    {
      phase: 'feet', just: 'Construction',
      title: 'Perpendiculars from I to the three sides',
      formula: 'Drop the perpendiculars from I to BC, CA and AB, with feet D, E and F. Their lengths ID, IE, IF are the distances from I to the three sides.',
      show: ['D', 'E', 'F', 'ID', 'IE', 'IF', 'rD', 'rE', 'rF'],
      hl: ['ID', 'IE', 'IF']
    },
    {
      phase: 'aas1', just: 'AAS congruence',
      title: 'IE = IF',
      formula: 'The right triangles AIE and AIF share the hypotenuse AI and have equal angles <i>α</i> at A, so their third angles agree too: they are congruent, and IE = IF. A point on the bisector at A is equidistant from AB and AC.',
      show: ['triAE', 'triAF', 'tIE', 'tIF'],
      hl: ['triAE', 'triAF', 'tIE', 'tIF']
    },
    {
      phase: 'aas2', just: 'AAS congruence',
      title: 'IF = ID',
      formula: 'In the same way the right triangles BIF and BID share the hypotenuse BI and have equal angles <i>β</i> at B: congruent, so IF = ID. Now ID = IE = IF (one tick each).',
      show: ['triBF', 'triBD', 'tID'],
      hl: ['triBF', 'triBD', 'tID', 'tIF']
    },
    {
      phase: 'third', just: 'Pythagoras + SSS',
      title: 'CI bisects the angle at C',
      formula: 'Join C to I. The right triangles CID and CIE share the hypotenuse CI and have equal legs ID = IE, so by Pythagoras their other legs CD and CE are equal too; three equal sides make them congruent, and their angles at C are equal: CI is the bisector of the angle at C, so all three bisectors pass through I.',
      show: ['CI', 'triCD', 'triCE', 'cC1', 'cC2'],
      hl: ['CI', 'cC1', 'cC2']
    },
    {
      phase: 'conclude', just: 'Tangent ⟂ radius',
      title: 'The circle about I touches all three sides',
      formula: 'The circle with centre I and radius ID = IE = IF passes through D, E and F, and each side is perpendicular to the radius at that point, so each side is a tangent: the inscribed circle, with I its incentre. <strong>∎</strong>',
      show: ['K'],
      hl: ['K', 'I']
    }
  ],

  readout: (P) => {
    const d = dist(P.I, P.D) / UNIT;
    const e = dist(P.I, P.E) / UNIT;
    const f = dist(P.I, P.F) / UNIT;
    return `ID = ${fmt(d, 2)}, IE = ${fmt(e, 2)}, IF = ${fmt(f, 2)}`;
  },

  // a real triangle inside the frame
  isValid: (P) =>
    area2(P.A, P.B, P.C) > 12000 &&
    [P.A, P.B, P.C].every((p) => p.x > 70 && p.x < 470 && p.y > 60 && p.y < 360)
};

export default incentre;
