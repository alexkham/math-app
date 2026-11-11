// ===========================================================
// render/primitives.jsx
// One SVG component per primitive type. Every renderer takes
// { o, hl, ctx }:
//   o   — resolved object (points carry x, y; others carry pts)
//   hl  — highlighted in the current scene
//   ctx — { center, labels, measures, draggable }
// Colors in proof data are role names (alpha, beta, ...) looked
// up in PALETTE, so proofs stay presentation-agnostic.
// ===========================================================

import React from 'react';
import { dist, angleGeom } from '../engine/math';

export const PALETTE = {
  ink: '#0f172a',
  soft: '#475569',
  faint: '#94a3b8',
  hl: '#2563eb',
  line: '#64748b',
  fill: '#2563eb',
  alpha: '#ea580c',
  beta: '#0891b2',
  gamma: '#7c3aed',
  delta: '#16a34a'
};

export const SERIF = '\'Cambria Math\', Georgia, serif';

export const colorOf = (c, fallback = PALETTE.fill) => (c ? PALETTE[c] || c : fallback);

const labelProps = (fill, size = 17) => ({
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontFamily: SERIF,
  fontStyle: 'italic',
  fontSize: size,
  fontWeight: 600,
  fill
});

export function Point({ o, ctx }) {
  const handle = ctx.draggable && (o.free || o.drag);
  const solid = o.free || o.drag;
  const dx = o.x - ctx.center.x;
  const dy = o.y - ctx.center.y;
  const n = Math.hypot(dx, dy) || 1;

  return (
    <g className={handle ? 'pp-handle' : undefined} data-handle={handle ? o.id : undefined}>
      {handle && <circle cx={o.x} cy={o.y} r={15} fill="transparent" />}
      {solid
        ? <circle cx={o.x} cy={o.y} r={6} fill={PALETTE.ink} stroke="#fff" strokeWidth={2} />
        : <circle cx={o.x} cy={o.y} r={4} fill="#fff" stroke={PALETTE.soft} strokeWidth={1.6} />}
      {ctx.labels && (
        <text x={o.x + (dx / n) * 22} y={o.y + (dy / n) * 22} {...labelProps(solid ? PALETTE.ink : PALETTE.soft)}>
          {o.label || o.id}
        </text>
      )}
    </g>
  );
}

export function Segment({ o, hl }) {
  const [p, q] = o.pts;
  return (
    <line
      x1={p.x} y1={p.y} x2={q.x} y2={q.y}
      stroke={hl ? PALETTE.hl : colorOf(o.color, PALETTE.ink)}
      strokeWidth={hl ? 3.2 : 2}
      strokeLinecap="round"
    />
  );
}

export function Line({ o, hl }) {
  const [p, q] = o.pts;
  return (
    <g>
      {hl && <line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={PALETTE.hl} strokeWidth={12} opacity={0.1} />}
      <line
        x1={p.x} y1={p.y} x2={q.x} y2={q.y}
        stroke={hl ? PALETTE.hl : colorOf(o.color, PALETTE.line)}
        strokeWidth={hl ? 2.2 : 1.6}
        strokeDasharray="8 5"
      />
    </g>
  );
}

export function Polygon({ o, hl }) {
  const opacity = hl ? 0.2 : o.color ? 0.1 : 0.05;
  return (
    <polygon
      points={o.pts.map((p) => `${p.x},${p.y}`).join(' ')}
      fill={colorOf(o.color)}
      fillOpacity={opacity}
    />
  );
}

// of: [center, through]
export function Circle({ o, hl }) {
  const [c, t] = o.pts;
  return (
    <circle
      cx={c.x} cy={c.y} r={dist(c, t)}
      fill="none"
      stroke={hl ? PALETTE.hl : colorOf(o.color, PALETTE.ink)}
      strokeWidth={hl ? 2.6 : 1.8}
    />
  );
}

// at / from / to — draws the smaller angle between the two rays; an optional
// `radius` fixes the arc size (for nested angles at one vertex)
export function Angle({ o, hl, ctx }) {
  const [v, p1, p2] = o.pts;
  const { a1, d } = angleGeom(v, p1, p2);
  const r = o.radius || Math.max(14, Math.min(34, 0.3 * Math.min(dist(v, p1), dist(v, p2))));
  // rounded to a thousandth so that server and client render the same path
  const q = (n) => Math.round(n * 1000) / 1000;
  const x1 = q(v.x + r * Math.cos(a1));
  const y1 = q(v.y + r * Math.sin(a1));
  const x2 = q(v.x + r * Math.cos(a1 + d));
  const y2 = q(v.y + r * Math.sin(a1 + d));
  const sweep = d > 0 ? 1 : 0;
  const m = a1 + d / 2;
  const lr = r + (ctx.measures ? 24 : 15);
  const color = colorOf(o.color, PALETTE.alpha);
  const arc = `M${x1} ${y1}A${r} ${r} 0 0 ${sweep} ${x2} ${y2}`;
  const text = ctx.measures
    ? `${o.label || ''} ${Math.round((Math.abs(d) * 180) / Math.PI)}°`
    : o.label;

  return (
    <g>
      <path d={`M${v.x} ${v.y}L${x1} ${y1}A${r} ${r} 0 0 ${sweep} ${x2} ${y2}Z`} fill={color} fillOpacity={hl ? 0.32 : 0.16} />
      <path d={arc} fill="none" stroke={color} strokeWidth={hl ? 2.6 : 1.6} />
      {text && (
        <text x={q(v.x + lr * Math.cos(m))} y={q(v.y + lr * Math.sin(m))} {...labelProps(color, 15)}>
          {text}
        </text>
      )}
    </g>
  );
}
