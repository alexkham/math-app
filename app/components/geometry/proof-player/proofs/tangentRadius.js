// ===========================================================
// proofs/tangentRadius.js — Euclid III.18
// A tangent is perpendicular to the radius drawn to the point
// of contact. By contradiction: if a line through T made any
// other angle with OT, the perpendicular from O would hit it
// at F ≠ T, and mirroring T across F gives a second point T′
// of the line at distance r from O, so the line would cut the
// circle twice. The player draws the supposed line ℓ′ through
// T and a draggable point G, next to the true tangent ℓ.
// Phases: given, suppose, construct, sas, contra, conclude
// ===========================================================

import { angleDeg, area2, dist, fmt } from '../engine/math';

const tangentRadius = {
  label: 'Tangent ⟂ radius',
  info:
    'Suppose a line through T made an angle other than 90° with the radius OT. Drop the ' +
    'perpendicular from O to that line, meeting it at F, and mark T′ on the other side of F ' +
    'with FT′ = FT. The right triangles OFT and OFT′ are congruent, so OT′ = OT: the line ' +
    'meets the circle a second time, at T′, so it is not a tangent. Drag G towards the ' +
    'tangent and watch T′ slide into T.',
  hint: 'Drag G to tilt the supposed line, T for the point of contact, O for the centre',
  labelCenter: ['O'],
  // Frame for the circle (radius 140 about O), the tangent and the labels.
  viewBox: [60, 20, 440, 390],

  model: {
    points: { O: { x: 280, y: 250 }, T: { x: 280, y: 110 }, G: { x: 420, y: 160 } },
    params: {},
    composites: [],
    objects: [
      { id: 'K', type: 'circle', of: ['O', 'T'] },
      // the true tangent at T: perpendicular to OT, drawn 1.2 r each way
      { id: 'L1', type: 'perpAlongDist', from: 'T', dir: ['O', 'T'], lenOf: ['O', 'T'], scale: 1.2, side: 1 },
      { id: 'L2', type: 'perpAlongDist', from: 'T', dir: ['O', 'T'], lenOf: ['O', 'T'], scale: 1.2, side: -1 },
      // the supposed line through T and G, drawn 1.3 r each way
      { id: 'M1', type: 'pointAlongDist', from: 'T', dir: ['G', 'T'], lenOf: ['O', 'T'], scale: 1.3 },
      { id: 'M2', type: 'pointAlongDist', from: 'T', dir: ['T', 'G'], lenOf: ['O', 'T'], scale: 1.3 },
      // foot of the perpendicular from O, and the mirror image of T across it
      { id: 'F', type: 'foot', from: 'O', to: ['T', 'G'] },
      { id: 'Tm', type: 'pointAlongDist', from: 'F', dir: ['T', 'F'], lenOf: ['F', 'T'], label: 'T′' },

      { id: 'OT', type: 'segment', of: ['O', 'T'] },
      { id: 'ell', type: 'segment', of: ['L1', 'L2'] },
      { id: 'ellp', type: 'line', of: ['M1', 'M2'] },
      { id: 'angT', type: 'angle', at: 'T', from: 'O', to: 'G', color: 'alpha', label: 'φ' },
      { id: 'OF', type: 'segment', of: ['O', 'F'] },
      { id: 'rF', type: 'rightAngle', at: 'F', from: 'O', to: 'Tm' },
      { id: 'tFT', type: 'ticks', of: ['F', 'T'], n: 1 },
      { id: 'tFTm', type: 'ticks', of: ['F', 'Tm'], n: 1 },
      { id: 'tri1', type: 'polygon', of: ['O', 'F', 'T'], color: 'alpha' },
      { id: 'tri2', type: 'polygon', of: ['O', 'F', 'Tm'], color: 'beta' },
      { id: 'OTm', type: 'segment', of: ['O', 'Tm'] },
      { id: 'tOT', type: 'ticks', of: ['O', 'T'], n: 2 },
      { id: 'tOTm', type: 'ticks', of: ['O', 'Tm'], n: 2 },
      { id: 'rT', type: 'rightAngle', at: 'T', from: 'O', to: 'L2' }
    ]
  },

  steps: [
    {
      phase: 'given', just: 'Given',
      title: 'A tangent and the radius to the point of contact',
      formula: 'The line ℓ touches the circle with centre O at the single point T: it is a tangent, and OT is the radius to the point of contact. To prove: <strong>OT ⟂ ℓ</strong>.',
      show: ['K', 'O', 'T', 'OT', 'ell'],
      hl: ['ell', 'OT']
    },
    {
      phase: 'suppose', just: 'Supposition',
      title: 'Suppose the angle at T were not 90°',
      formula: 'Suppose a line through T could touch the circle while making an angle <i>φ</i> ≠ 90° with OT. The dashed line ℓ′ through T and G is such a line; the proof shows it cannot be a tangent.',
      show: ['G', 'ellp', 'angT'],
      hl: ['ellp', 'angT']
    },
    {
      phase: 'construct', just: 'Construction',
      title: 'The perpendicular OF and the mirror point T′',
      formula: 'Drop the perpendicular from O to ℓ′; it meets ℓ′ at F, and F ≠ T because <i>φ</i> ≠ 90°. On ℓ′, on the other side of F, mark T′ with FT′ = FT (one tick each).',
      show: ['F', 'OF', 'rF', 'Tm', 'tFT', 'tFTm'],
      hl: ['OF', 'rF', 'tFT', 'tFTm']
    },
    {
      phase: 'sas', just: 'SAS congruence',
      title: 'Triangles OFT and OFT′ are congruent',
      formula: 'They share the side OF, have FT = FT′, and the angles at F between those sides are both right angles. Two sides and the included angle: the triangles are congruent, so OT′ = OT.',
      show: ['tri1', 'tri2', 'OTm'],
      hl: ['tri1', 'tri2']
    },
    {
      phase: 'contra', just: 'Contradiction',
      title: 'T′ is a second point of ℓ′ on the circle',
      formula: 'OT′ = OT is the radius, so T′ lies on the circle (two ticks each). The line ℓ′ meets the circle at T and at T′, two different points: it cuts the circle, it does not touch it. So ℓ′ is not a tangent.',
      show: ['tOT', 'tOTm'],
      hl: ['OTm', 'tOT', 'tOTm', 'ellp']
    },
    {
      phase: 'conclude', just: 'Conclusion',
      title: 'OT ⟂ ℓ',
      formula: 'Every line through T except the perpendicular to OT cuts the circle a second time. The tangent ℓ meets the circle only at T, so it must be that perpendicular: the angle between the tangent and the radius is 90°. <strong>∎</strong>',
      show: ['rT'],
      hl: ['ell', 'OT', 'rT']
    }
  ],

  readout: (P) => {
    const phi = angleDeg(P.T, P.O, P.G);
    if (Math.abs(phi - 90) < 0.5) return `φ = ${fmt(phi)}°: T′ = T, one common point, ℓ′ is the tangent`;
    return `φ = ${fmt(phi)}°, OT′ = OT = r: ℓ′ meets the circle twice`;
  },

  // G off the line OT, not on top of T, and the figure not collapsed
  isValid: (P) => area2(P.O, P.T, P.G) > 1500 && dist(P.T, P.G) > 50 && dist(P.O, P.T) > 60
};

export default tangentRadius;
