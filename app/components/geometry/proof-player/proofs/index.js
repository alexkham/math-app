// ===========================================================
// proofs/index.js — proof registry. A proof file exports:
//   { label, info, hint, labelCenter, model, steps, readout, isValid }
// Adding a proof = one file + one line here.
// ===========================================================

import aasCongruence from './aasCongruence';
import aaSimilarity from './aaSimilarity';
import alternateBisectors from './alternateBisectors';
import altitudeTheorem from './altitudeTheorem';
import angleBisector from './angleBisector';
import angleBisectorLocus from './angleBisectorLocus';
import angleSum from './angleSum';
import anglesAroundPoint from './anglesAroundPoint';
import anglesSameSegment from './anglesSameSegment';
import arcMidpoint from './arcMidpoint';
import asaCongruence from './asaCongruence';
import centroid from './centroid';
import equalChords from './equalChords';
import equilateralTriangle from './equilateralTriangle';
import ceva from './ceva';
import chordBisector from './chordBisector';
import chordsAngle from './chordsAngle';
import circumcentre from './circumcentre';
import cointeriorBisectors from './cointeriorBisectors';
import concentricChord from './concentricChord';
import cyclicExteriorAngle from './cyclicExteriorAngle';
import cyclicHexagon from './cyclicHexagon';
import diagonalsBisectConverse from './diagonalsBisectConverse';
import cyclicQuadrilateral from './cyclicQuadrilateral';
import eulerLine from './eulerLine';
import exteriorAngle from './exteriorAngle';
import exteriorAngleSum from './exteriorAngleSum';
import hlCongruence from './hlCongruence';
import incentre from './incentre';
import incentreExcentre from './incentreExcentre';
import inscribedAngle from './inscribedAngle';
import interceptTheorem from './interceptTheorem';
import isosceles from './isosceles';
import isoscelesConverse from './isoscelesConverse';
import isoscelesTrapezoid from './isoscelesTrapezoid';
import kiteDiagonals from './kiteDiagonals';
import largerAngle from './largerAngle';
import linearPairBisectors from './linearPairBisectors';
import medianArea from './medianArea';
import menelaus from './menelaus';
import midpointHypotenuse from './midpointHypotenuse';
import midsegment from './midsegment';
import ninePointCircle from './ninePointCircle';
import orthocentre from './orthocentre';
import parallelBend from './parallelBend';
import parallelLines from './parallelLines';
import parallelogramDiagonals from './parallelogramDiagonals';
import parallelogramAngles from './parallelogramAngles';
import parallelogramBisectors from './parallelogramBisectors';
import parallelogramFromSides from './parallelogramFromSides';
import parallelogramSides from './parallelogramSides';
import pentagonDiagonals from './pentagonDiagonals';
import pentagonGoldenRatio from './pentagonGoldenRatio';
import pentagramAngles from './pentagramAngles';
import perpendicularBisector from './perpendicularBisector';
import perpendicularShortest from './perpendicularShortest';
import pitot from './pitot';
import polygonAngleSum from './polygonAngleSum';
import polygonExteriorAngles from './polygonExteriorAngles';
import powerOfPoint from './powerOfPoint';
import ptolemy from './ptolemy';
import pythagoras from './pythagoras';
import rectangleDiagonals from './rectangleDiagonals';
import regularHexagon from './regularHexagon';
import regularPolygonAngles from './regularPolygonAngles';
import regularPolygonArea from './regularPolygonArea';
import rhombusDiagonals from './rhombusDiagonals';
import sasSimilarity from './sasSimilarity';
import secantTangent from './secantTangent';
import secantsAngle from './secantsAngle';
import simsonLine from './simsonLine';
import squareDiagonals from './squareDiagonals';
import sssCongruence from './sssCongruence';
import sssSimilarity from './sssSimilarity';
import tangentChord from './tangentChord';
import tangentSecantAngle from './tangentSecantAngle';
import tangentRadius from './tangentRadius';
import thales from './thales';
import trapezoidMidsegment from './trapezoidMidsegment';
import triangle306090 from './triangle306090';
import triangleInequality from './triangleInequality';
import twoSecants from './twoSecants';
import twoTangents from './twoTangents';
import varignon from './varignon';
import verticalAngles from './verticalAngles';
import verticalBisectors from './verticalBisectors';
import viviani from './viviani';

const PROOFS = {
  aasCongruence,
  aaSimilarity,
  alternateBisectors,
  altitudeTheorem,
  angleBisector,
  angleBisectorLocus,
  angleSum,
  anglesAroundPoint,
  anglesSameSegment,
  arcMidpoint,
  asaCongruence,
  centroid,
  equalChords,
  equilateralTriangle,
  ceva,
  chordBisector,
  chordsAngle,
  circumcentre,
  cointeriorBisectors,
  concentricChord,
  cyclicExteriorAngle,
  cyclicHexagon,
  diagonalsBisectConverse,
  cyclicQuadrilateral,
  eulerLine,
  exteriorAngle,
  exteriorAngleSum,
  hlCongruence,
  incentre,
  incentreExcentre,
  inscribedAngle,
  interceptTheorem,
  isosceles,
  isoscelesConverse,
  isoscelesTrapezoid,
  kiteDiagonals,
  largerAngle,
  linearPairBisectors,
  medianArea,
  menelaus,
  midpointHypotenuse,
  midsegment,
  ninePointCircle,
  orthocentre,
  parallelBend,
  parallelLines,
  parallelogramDiagonals,
  parallelogramAngles,
  parallelogramBisectors,
  parallelogramFromSides,
  parallelogramSides,
  pentagonDiagonals,
  pentagonGoldenRatio,
  pentagramAngles,
  perpendicularBisector,
  perpendicularShortest,
  pitot,
  polygonAngleSum,
  polygonExteriorAngles,
  powerOfPoint,
  ptolemy,
  pythagoras,
  rectangleDiagonals,
  regularHexagon,
  regularPolygonAngles,
  regularPolygonArea,
  rhombusDiagonals,
  sasSimilarity,
  secantTangent,
  secantsAngle,
  simsonLine,
  squareDiagonals,
  sssCongruence,
  sssSimilarity,
  tangentChord,
  tangentSecantAngle,
  tangentRadius,
  thales,
  trapezoidMidsegment,
  triangle306090,
  triangleInequality,
  twoSecants,
  twoTangents,
  varignon,
  verticalAngles,
  verticalBisectors,
  viviani
};

export default PROOFS;
