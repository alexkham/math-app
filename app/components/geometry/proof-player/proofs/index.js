// ===========================================================
// proofs/index.js — proof registry. A proof file exports:
//   { label, info, hint, labelCenter, model, steps, readout, isValid }
// Adding a proof = one file + one line here.
// ===========================================================

import angleSum from './angleSum';
import isosceles from './isosceles';

const PROOFS = {
  angleSum,
  isosceles
};

export default PROOFS;
