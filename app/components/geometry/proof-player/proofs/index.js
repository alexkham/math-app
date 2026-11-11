// ===========================================================
// proofs/index.js — proof registry. A proof file exports:
//   { label, info, hint, labelCenter, model, steps, readout, isValid }
// Adding a proof = one file + one line here.
// ===========================================================

import aasCongruence from './aasCongruence';
import aaSimilarity from './aaSimilarity';
import altitudeTheorem from './altitudeTheorem';
import angleBisector from './angleBisector';
import angleBisectorLocus from './angleBisectorLocus';
import angleSum from './angleSum';
import anglesAroundPoint from './anglesAroundPoint';
import anglesSameSegment from './anglesSameSegment';
import asaCongruence from './asaCongruence';
import centroid from './centroid';
import equalChords from './equalChords';
import equilateralTriangle from './equilateralTriangle';
import ceva from './ceva';
import chordBisector from './chordBisector';
import circumcentre from './circumcentre';
import cyclicExteriorAngle from './cyclicExteriorAngle';
import cyclicQuadrilateral from './cyclicQuadrilateral';
import eulerLine from './eulerLine';
import exteriorAngle from './exteriorAngle';
import exteriorAngleSum from './exteriorAngleSum';
import hlCongruence from './hlCongruence';
import incentre from './incentre';
import inscribedAngle from './inscribedAngle';
import interceptTheorem from './interceptTheorem';
import isosceles from './isosceles';
import isoscelesConverse from './isoscelesConverse';
import isoscelesTrapezoid from './isoscelesTrapezoid';
import kiteDiagonals from './kiteDiagonals';
import largerAngle from './largerAngle';
import linearPairBisectors from './linearPairBisectors';
import menelaus from './menelaus';
import midpointHypotenuse from './midpointHypotenuse';
import midsegment from './midsegment';
import ninePointCircle from './ninePointCircle';
import orthocentre from './orthocentre';
import parallelLines from './parallelLines';
import parallelogramDiagonals from './parallelogramDiagonals';
import parallelogramAngles from './parallelogramAngles';
import parallelogramFromSides from './parallelogramFromSides';
import parallelogramSides from './parallelogramSides';
import perpendicularBisector from './perpendicularBisector';
import perpendicularShortest from './perpendicularShortest';
import polygonAngleSum from './polygonAngleSum';
import polygonExteriorAngles from './polygonExteriorAngles';
import powerOfPoint from './powerOfPoint';
import ptolemy from './ptolemy';
import pythagoras from './pythagoras';
import rectangleDiagonals from './rectangleDiagonals';
import regularHexagon from './regularHexagon';
import regularPolygonAngles from './regularPolygonAngles';
import rhombusDiagonals from './rhombusDiagonals';
import sasSimilarity from './sasSimilarity';
import secantTangent from './secantTangent';
import simsonLine from './simsonLine';
import squareDiagonals from './squareDiagonals';
import sssCongruence from './sssCongruence';
import sssSimilarity from './sssSimilarity';
import tangentChord from './tangentChord';
import tangentRadius from './tangentRadius';
import thales from './thales';
import trapezoidMidsegment from './trapezoidMidsegment';
import triangle306090 from './triangle306090';
import triangleInequality from './triangleInequality';
import twoSecants from './twoSecants';
import twoTangents from './twoTangents';
import varignon from './varignon';
import verticalAngles from './verticalAngles';

const PROOFS = {
  aasCongruence,
  aaSimilarity,
  altitudeTheorem,
  angleBisector,
  angleBisectorLocus,
  angleSum,
  anglesAroundPoint,
  anglesSameSegment,
  asaCongruence,
  centroid,
  equalChords,
  equilateralTriangle,
  ceva,
  chordBisector,
  circumcentre,
  cyclicExteriorAngle,
  cyclicQuadrilateral,
  eulerLine,
  exteriorAngle,
  exteriorAngleSum,
  hlCongruence,
  incentre,
  inscribedAngle,
  interceptTheorem,
  isosceles,
  isoscelesConverse,
  isoscelesTrapezoid,
  kiteDiagonals,
  largerAngle,
  linearPairBisectors,
  menelaus,
  midpointHypotenuse,
  midsegment,
  ninePointCircle,
  orthocentre,
  parallelLines,
  parallelogramDiagonals,
  parallelogramAngles,
  parallelogramFromSides,
  parallelogramSides,
  perpendicularBisector,
  perpendicularShortest,
  polygonAngleSum,
  polygonExteriorAngles,
  powerOfPoint,
  ptolemy,
  pythagoras,
  rectangleDiagonals,
  regularHexagon,
  regularPolygonAngles,
  rhombusDiagonals,
  sasSimilarity,
  secantTangent,
  simsonLine,
  squareDiagonals,
  sssCongruence,
  sssSimilarity,
  tangentChord,
  tangentRadius,
  thales,
  trapezoidMidsegment,
  triangle306090,
  triangleInequality,
  twoSecants,
  twoTangents,
  varignon,
  verticalAngles
};

export default PROOFS;
