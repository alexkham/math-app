// ===========================================================
// render/annotations.jsx
// Proof marks drawn on top of primitives. Same { o, hl, ctx }
// signature as primitives.
//   ticks       of: [a, b], n   — equal-length marks
//   rightAngle  at, from, to    — square corner marker
//   parallel    of: [a, b], n   — chevrons along a segment
// ===========================================================

import React from 'react';
import { unit, mid } from '../engine/math';
import { PALETTE, colorOf } from './primitives';

const markStroke = (o, hl) => ({
  stroke: hl ? PALETTE.hl : colorOf(o.color, PALETTE.ink),
  strokeWidth: hl ? 2.4 : 1.8,
  strokeLinecap: 'round',
  fill: 'none'
});

export function Ticks({ o, hl }) {
  const [p, q] = o.pts;
  const u = unit(p, q);
  const m = mid(p, q);
  const count = o.n || 1;
  const marks = [];
  for (let i = 0; i < count; i++) {
    const off = (i - (count - 1) / 2) * 6;
    const cx = m.x + u.x * off;
    const cy = m.y + u.y * off;
    marks.push(
      <line key={i} x1={cx + u.y * 7} y1={cy - u.x * 7} x2={cx - u.y * 7} y2={cy + u.x * 7} {...markStroke(o, hl)} />
    );
  }
  return <g>{marks}</g>;
}

export function RightAngle({ o, hl }) {
  const [v, p1, p2] = o.pts;
  const s = o.size || 12;
  const u1 = unit(v, p1);
  const u2 = unit(v, p2);
  const a = { x: v.x + u1.x * s, y: v.y + u1.y * s };
  const c = { x: v.x + u2.x * s, y: v.y + u2.y * s };
  const b = { x: a.x + u2.x * s, y: a.y + u2.y * s };
  return <path d={`M${a.x} ${a.y}L${b.x} ${b.y}L${c.x} ${c.y}`} {...markStroke(o, hl)} />;
}

export function ParallelArrows({ o, hl }) {
  const [p, q] = o.pts;
  const u = unit(p, q);
  const m = mid(p, q);
  const count = o.n || 1;
  const marks = [];
  for (let i = 0; i < count; i++) {
    const off = (i - (count - 1) / 2) * 7;
    const tip = { x: m.x + u.x * (off + 4), y: m.y + u.y * (off + 4) };
    const back = { x: tip.x - u.x * 7, y: tip.y - u.y * 7 };
    marks.push(
      <path
        key={i}
        d={`M${back.x + u.y * 5} ${back.y - u.x * 5}L${tip.x} ${tip.y}L${back.x - u.y * 5} ${back.y + u.x * 5}`}
        {...markStroke(o, hl)}
      />
    );
  }
  return <g>{marks}</g>;
}
