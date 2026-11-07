// ===========================================================
// render/registry.js
// type → renderer, plus paint order. Adding a type = one
// component + one line here (+ a POINT_TYPES entry if it is a
// derived point).
// ===========================================================

import { Point, Segment, Line, Polygon, Circle, Angle } from './primitives';
import { Ticks, RightAngle, ParallelArrows, SideLabel } from './annotations';
import { isPointType } from '../engine/resolver';

export const REGISTRY = {
  point: Point,
  midpoint: Point,
  pointAlong: Point,
  pointAlongDist: Point,
  perpAlongDist: Point,
  tangentPoint: Point,
  bisectorFoot: Point,
  incentre: Point,
  onLine: Point,
  onCircle: Point,
  apex: Point,
  foot: Point,
  intersection: Point,

  polygon: Polygon,
  circle: Circle,
  line: Line,
  angle: Angle,
  segment: Segment,

  ticks: Ticks,
  rightAngle: RightAngle,
  parallel: ParallelArrows,
  sideLabel: SideLabel
};

const LAYERS = {
  polygon: 0,
  circle: 1,
  line: 2,
  angle: 3,
  segment: 4,
  ticks: 5,
  rightAngle: 5,
  parallel: 5,
  sideLabel: 7
};

export const layerOf = (o) => (isPointType(o.type) ? 9 : LAYERS[o.type] ?? 6);
