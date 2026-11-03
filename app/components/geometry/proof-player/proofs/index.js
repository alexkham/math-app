// ===========================================================
// proofs/index.js — proof registry. A proof file exports:
//   { label, info, hint, labelCenter, model, steps, readout, isValid }
// Adding a proof = one file + one line here.
// ===========================================================

import angleSum from './angleSum';
import exteriorAngle from './exteriorAngle';
import exteriorAngleSum from './exteriorAngleSum';
import isosceles from './isosceles';
import largerAngle from './largerAngle';
import perpendicularShortest from './perpendicularShortest';
import thales from './thales';
import triangleInequality from './triangleInequality';
import verticalAngles from './verticalAngles';

const PROOFS = {
  angleSum,
  exteriorAngle,
  exteriorAngleSum,
  isosceles,
  largerAngle,
  perpendicularShortest,
  thales,
  triangleInequality,
  verticalAngles
};

export default PROOFS;
