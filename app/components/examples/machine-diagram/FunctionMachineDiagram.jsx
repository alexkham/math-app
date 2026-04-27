'use client';

import React, { useId } from 'react';

const DEFAULT_COLORS = {
  input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
  output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
  intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
  operationText: '#5F5E5A',
  forwardArrow: null,
  inverseArrow: null,
};

export default function FunctionMachineDiagram({
  steps = [],
  inverse = null,
  label = '',
  colors = {},
  style = {},
}) {
  const uid = useId().replace(/:/g, '');
  const markerId = `fm-arr-${uid}`;

  const c = {
    input:         { ...DEFAULT_COLORS.input, ...colors.input },
    output:        { ...DEFAULT_COLORS.output, ...colors.output },
    intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
    operationText: colors.operationText || DEFAULT_COLORS.operationText,
    forwardArrow:  colors.forwardArrow || null,
    inverseArrow:  colors.inverseArrow || null,
  };

  if (steps.length < 2) return null;

  const hasInverse = !!inverse;

  // ── Layout constants ──
  const BOX_H       = hasInverse ? 50 : 44;
  const RX          = 8;
  const CHAR_W      = 9;
  const LABEL_CHAR_W = 7;
  const MIN_BOX_W   = 55;
  const MIN_GAP     = 80;
  const PAD_L       = 40;
  const PAD_R       = label ? 120 : 40;
  const PAD_TOP     = 20;
  const PAD_BOTTOM  = hasInverse ? 36 : 20;

  // ── Sizes ──
  const boxW = steps.map(s =>
    Math.max(MIN_BOX_W, s.value.length * CHAR_W + 24)
  );

  const gaps = [];
  for (let i = 0; i < steps.length - 1; i++) {
    const op = steps[i].operation || '';
    gaps.push(Math.max(MIN_GAP, op.length * LABEL_CHAR_W + 40));
  }

  const contentW = boxW.reduce((a, b) => a + b, 0)
                 + gaps.reduce((a, b) => a + b, 0);
  const W = PAD_L + contentW + PAD_R;
  const H = PAD_TOP + BOX_H + PAD_BOTTOM;

  // ── Box x positions ──
  const bx = [];
  let cx = PAD_L;
  for (let i = 0; i < steps.length; i++) {
    bx.push(cx);
    if (i < steps.length - 1) cx += boxW[i] + gaps[i];
  }

  const by = PAD_TOP;
  const cy = PAD_TOP + BOX_H / 2;

  // ── Colors ──
  const boxColor = (i) => {
    if (i === 0)                   return c.input;
    if (i === steps.length - 1)    return c.output;
    return c.intermediate;
  };

  const fwdArrowColor = c.forwardArrow
    || (steps.length === 2 ? c.input.border : c.operationText);

  const invArrowColor = c.inverseArrow || c.output.border;

  // ── Render ──
  return (
    <svg
      width="100%"
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      style={style}
    >
      <title>
        {`Function machine: ${steps.map(s => s.value).join(' \u2192 ')}`}
      </title>

      <defs>
        <marker
          id={markerId}
          viewBox="0 0 10 10"
          refX="8" refY="5"
          markerWidth="6" markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="context-stroke"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      {/* ── Boxes ── */}
      {steps.map((step, i) => {
        const col = boxColor(i);
        return (
          <g key={i}>
            <rect
              x={bx[i]}
              y={by}
              width={boxW[i]}
              height={BOX_H}
              rx={RX}
              fill={col.bg}
              stroke={col.border}
              strokeWidth="0.5"
            />
            <text
              x={bx[i] + boxW[i] / 2}
              y={cy}
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="sans-serif"
              fontSize={14}
              fontWeight="500"
              fill={col.text}
            >
              {step.value}
            </text>
          </g>
        );
      })}

      {/* ── Forward arrows ── */}
      {steps.map((step, i) => {
        if (i >= steps.length - 1 || !step.operation) return null;
        const x1 = bx[i] + boxW[i] + 2;
        const x2 = bx[i + 1] - 2;
        const arrowY = hasInverse ? cy - 9 : cy;

        return (
          <g key={`a${i}`}>
            <line
              x1={x1} y1={arrowY}
              x2={x2} y2={arrowY}
              stroke={fwdArrowColor}
              strokeWidth="1.5"
              markerEnd={`url(#${markerId})`}
              fill="none"
            />
            <text
              x={(x1 + x2) / 2}
              y={arrowY - 10}
              textAnchor="middle"
              fontFamily="sans-serif"
              fontSize={12}
              fill={c.operationText}
            >
              {step.operation}
            </text>
          </g>
        );
      })}

      {/* ── Inverse arrow ── */}
      {hasInverse && (() => {
        const last = steps.length - 1;
        const x1 = bx[last] - 2;
        const x2 = bx[0] + boxW[0] + 2;
        const arrowY = cy + 9;
        const labelY = arrowY + 18;
        const midX = (bx[0] + boxW[0] + bx[last]) / 2;

        return (
          <g>
            <line
              x1={x1} y1={arrowY}
              x2={x2} y2={arrowY}
              stroke={invArrowColor}
              strokeWidth="1.5"
              markerEnd={`url(#${markerId})`}
              fill="none"
            />
            <text
              x={midX}
              y={labelY}
              textAnchor="middle"
              fontFamily="sans-serif"
              fontSize={12}
              fill={c.operationText}
            >
              {inverse.operation}
            </text>
          </g>
        );
      })()}

      {/* ── Label ── */}
      {label && (
        <text
          x={W - 20}
          y={cy}
          textAnchor="end"
          dominantBaseline="central"
          fontFamily="sans-serif"
          fontSize={12}
          fill={c.operationText}
          opacity={0.55}
        >
          {label}
        </text>
      )}
    </svg>
  );
}