// ===========================================================
// proofs/index.js — proof registry. A proof file exports:
//   { label, info, hint, labelCenter, model, steps, readout, isValid }
// Adding a proof = one file + one line here.
// ===========================================================

import aasCongruence from './aasCongruence';
import angleBisector from './angleBisector';
import angleSum from './angleSum';
import asaCongruence from './asaCongruence';
import centroid from './centroid';
import ceva from './ceva';
import chordBisector from './chordBisector';
import circumcentre from './circumcentre';
import cyclicQuadrilateral from './cyclicQuadrilateral';
import eulerLine from './eulerLine';
import exteriorAngle from './exteriorAngle';
import exteriorAngleSum from './exteriorAngleSum';
import hlCongruence from './hlCongruence';
import incentre from './incentre';
import inscribedAngle from './inscribedAngle';
import isosceles from './isosceles';
import kiteDiagonals from './kiteDiagonals';
import largerAngle from './largerAngle';
import menelaus from './menelaus';
import midsegment from './midsegment';
import ninePointCircle from './ninePointCircle';
import orthocentre from './orthocentre';
import parallelLines from './parallelLines';
import parallelogramDiagonals from './parallelogramDiagonals';
import parallelogramSides from './parallelogramSides';
import perpendicularShortest from './perpendicularShortest';
import polygonAngleSum from './polygonAngleSum';
import powerOfPoint from './powerOfPoint';
import pythagoras from './pythagoras';
import rectangleDiagonals from './rectangleDiagonals';
import rhombusDiagonals from './rhombusDiagonals';
import secantTangent from './secantTangent';
import sssCongruence from './sssCongruence';
import tangentRadius from './tangentRadius';
import thales from './thales';
import trapezoidMidsegment from './trapezoidMidsegment';
import triangleInequality from './triangleInequality';
import twoSecants from './twoSecants';
import twoTangents from './twoTangents';
import varignon from './varignon';
import verticalAngles from './verticalAngles';

const PROOFS = {
  aasCongruence,
  angleBisector,
  angleSum,
  asaCongruence,
  centroid,
  ceva,
  chordBisector,
  circumcentre,
  cyclicQuadrilateral,
  eulerLine,
  exteriorAngle,
  exteriorAngleSum,
  hlCongruence,
  incentre,
  inscribedAngle,
  isosceles,
  kiteDiagonals,
  largerAngle,
  menelaus,
  midsegment,
  ninePointCircle,
  orthocentre,
  parallelLines,
  parallelogramDiagonals,
  parallelogramSides,
  perpendicularShortest,
  polygonAngleSum,
  powerOfPoint,
  pythagoras,
  rectangleDiagonals,
  rhombusDiagonals,
  secantTangent,
  sssCongruence,
  tangentRadius,
  thales,
  trapezoidMidsegment,
  triangleInequality,
  twoSecants,
  twoTangents,
  varignon,
  verticalAngles
};

export default PROOFS;
