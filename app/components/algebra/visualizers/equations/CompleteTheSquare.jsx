
'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';


const CTS_STYLES = `
        .cts-wrap {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #1e3a5f;
          max-width: 1100px;
          margin: 0 auto;
        }
        .cts-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
          height: calc(100vh - 40px);
        }
        @media (max-width: 900px) {
          .cts-main { grid-template-columns: 1fr; height: auto; }
        }
        .cts-card {
          background: #fff;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .cts-card.cts-left {
          height: 100%;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .cts-card.cts-left::-webkit-scrollbar { display: none; }
        .cts-card.cts-right {
          height: 100%;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          display: flex;
          flex-direction: column;
        }
        .cts-card.cts-right::-webkit-scrollbar { display: none; }
        .cts-label-small {
          font-size: 0.74rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .cts-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #fff;
          padding: 18px 22px;
          border-radius: 12px;
          font-size: 1.4rem;
          margin-bottom: 18px;
          justify-content: center;
        }
        .cts-input-row input {
          width: 60px;
          text-align: center;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.4);
          color: #fff;
          font-size: 1.3rem;
          font-family: inherit;
          padding: 6px 4px;
          border-radius: 6px;
          font-weight: 600;
          appearance: textfield;
        }
        .cts-input-row input:focus { outline: none; background: rgba(255,255,255,0.28); }
        .cts-input-row input::-webkit-outer-spin-button,
        .cts-input-row input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        .cts-input-row .op { color: rgba(255,255,255,0.75); }
        .cts-input-row .var { font-style: italic; }
        .cts-input-row sup { font-size: 0.7em; }
        .cts-presets {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .cts-presets button {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 8px 14px;
          font-family: inherit;
          font-size: 0.85rem;
          cursor: pointer;
          color: #475569;
          transition: all 0.15s ease;
        }
        .cts-presets button:hover {
          background: #e0e7ff;
          border-color: #6366f1;
          color: #1e3a5f;
        }
        .cts-geom-card {
          background: #fff;
          border-radius: 12px;
          padding: 18px;
          text-align: center;
          border: 1px solid #e2e8f0;
        }
        .cts-geom-title {
          font-size: 0.78rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .cts-geom-svg svg rect, .cts-geom-svg svg text, .cts-geom-svg svg line {
          transition: all 0.6s ease;
        }
        /* Proportional scale-up of the diagram. Tweak the scale factor here
           to enlarge/shrink the whole SVG uniformly. */
        .cts-geom-svg svg {
          transform: scale(1.1);
          transform-origin: center top;
        }
        .cts-geom-svg {
          padding-bottom: 22px;
        }
        .cts-caption {
          margin-top: 14px;
          padding: 12px 14px;
          background: #f8fafc;
          border-left: 4px solid #3b82f6;
          border-radius: 6px;
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.55;
          text-align: left;
          height: 110px;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .cts-caption::-webkit-scrollbar { display: none; }
        .cts-anim-controls {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .cts-anim-btn {
          background: #fff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 8px 14px;
          font-family: inherit;
          font-size: 0.85rem;
          font-weight: 500;
          color: #475569;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .cts-anim-btn:hover:not(:disabled) {
          background: #e0e7ff;
          border-color: #6366f1;
          color: #1e3a5f;
          box-shadow: 0 2px 6px rgba(99, 102, 241, 0.15);
        }
        .cts-anim-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .cts-anim-btn.primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 2px 6px rgba(59,130,246,0.25);
        }
        .cts-anim-btn.primary:hover:not(:disabled) {
          background: #e0e7ff;
          border-color: #6366f1;
          color: #1e3a5f;
          box-shadow: 0 2px 6px rgba(99, 102, 241, 0.15);
        }
        .cts-anim-btn.playing {
          background: #fef3c7;
          color: #92400e;
          border-color: #fcd34d;
        }
        .cts-anim-btn.playing:hover {
          background: #fde68a;
          border-color: #f59e0b;
        }
        .cts-pips {
          display: flex;
          gap: 4px;
          margin-left: auto;
        }
        .cts-pip {
          width: 22px; height: 5px;
          background: #e2e8f0;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .cts-pip.active { background: #3b82f6; width: 30px; }
        .cts-pip.done { background: #93c5fd; }
        .cts-steps-heading {
          font-size: 0.74rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .cts-step {
          background: #f8fafc;
          border-left: 3px solid #3b82f6;
          border-radius: 8px;
          padding: 14px 16px;
          margin-bottom: 10px;
          cursor: pointer;
          /* Faded by default — current step un-fades via .active below. */
          opacity: 0.45;
          filter: blur(0.4px);
          transition: opacity 0.3s ease, filter 0.3s ease,
                      background 0.3s ease, border-left-color 0.3s ease,
                      border-left-width 0.3s ease, box-shadow 0.3s ease,
                      transform 0.3s ease;
        }
        .cts-step:hover {
          background: #e0e7ff;
          border-left-color: #6366f1;
          opacity: 0.85;
          filter: blur(0);
        }
        .cts-step.active {
          background: #eff6ff;
          border-left-color: #2563eb;
          border-left-width: 5px;
          box-shadow: 0 4px 14px rgba(59, 130, 246, 0.18);
          transform: translateX(2px);
          opacity: 1;
          filter: blur(0);
        }
        @keyframes cts-fade-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 0.45; transform: translateY(0); }
        }
        .cts-step-num {
          display: inline-block;
          width: 22px; height: 22px;
          line-height: 22px;
          text-align: center;
          background: #3b82f6;
          color: #fff;
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
          margin-right: 8px;
          transition: all 0.3s ease;
        }
        .cts-step.active .cts-step-num {
          background: #2563eb;
          transform: scale(1.15);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
        }
        .cts-step-label {
          font-weight: 600;
          color: #1e3a5f;
          font-size: 0.95rem;
        }
        .cts-step-explain {
          color: #475569;
          font-size: 0.88rem;
          margin: 6px 0;
          line-height: 1.5;
        }
        .cts-step-math {
          font-family: "Cambria Math", Georgia, serif;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 8px 12px;
          margin-top: 6px;
          color: #1e3a5f;
          font-size: 1.05rem;
        }
        .cts-final {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #fff;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          margin-top: 18px;
          opacity: 0.45;
          filter: blur(0.4px);
          transition: opacity 0.3s ease, filter 0.3s ease;
        }
        .cts-final.active {
          opacity: 1;
          filter: blur(0);
        }
        .cts-final-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          opacity: 0.85;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .cts-final-eq {
          font-family: "Cambria Math", Georgia, serif;
          font-size: 1.4rem;
          font-weight: 700;
        }
        .cts-accent { color: #fbbf24; }
`;

/* =====================================================
   COMPLETING THE SQUARE — interactive component

   Input:  a, b, c for ax² + bx + c = 0
   Output: animated geometric diagram + accumulating step-by-step solution.

   Two synchronized panes:
   - Left: inputs + presets + diagram + animation controls.
   - Right: ALL steps are rendered from the start. The current step is
            highlighted; the others are faded/slightly blurred. Clicking
            a previous step jumps the diagram back to that stage.

   Diagram proportions:
   - The visual side "x" is a fixed number of pixels (X_PX).
   - The visual side for "b/2" is proportional to |b/(2a)| · UNIT_PX,
     so that b/2 strips are pixel-equal to half of the b rectangle.
   - The corner sub-rectangle sizes are proportional to c/a vs (b/(2a))²
     so the c piece and the missing piece have correct relative areas.
   ===================================================== */


const fmt = (x) => {
  if (!Number.isFinite(x)) return String(x);
  if (Number.isInteger(x)) return String(x);
  return parseFloat(x.toFixed(4)).toString();
};

const sign = (x, includePlusSign = true) => {
  if (x >= 0) return includePlusSign ? `+ ${fmt(x)}` : fmt(x);
  return `− ${fmt(Math.abs(x))}`;
};

function buildSteps(a, b, c) {
  const bm = b / a;
  const cm = c / a;
  const half = bm / 2;
  const halfSq = half * half;
  const gap = halfSq - cm;

  const steps = [];

  steps.push({
    stageId: 0,
    title: 'Starting equation',
    explain: `Three terms: an x² piece, a ${fmt(b)}x piece, and the constant ${fmt(c)}. We will arrange them into a geometric square to read off the vertex form.`,
    math: `${a === 1 ? '' : a === -1 ? '−' : fmt(a)}x² ${sign(b)}x ${sign(c)} = 0`,
  });

  if (a !== 1) {
    steps.push({
      stageId: 1,
      title: `Factor out ${fmt(a)}`,
      explain: `Factor the leading coefficient out of the x² and x terms so the inside is monic. The constant stays outside.`,
      math: `${fmt(a)}(x² ${sign(bm)}x) ${sign(c)} = 0`,
    });
  }

  steps.push({
    stageId: 2,
    title: 'Place the x² square',
    explain: `Start with a square of side x. Its area is x².`,
    math: `x² ${sign(bm)}x ${sign(cm)}`,
  });

  steps.push({
    stageId: 3,
    title: `Split the ${fmt(bm)}x rectangle`,
    explain: `Half of ${fmt(bm)} is ${fmt(half)}. Split the ${fmt(bm)}x rectangle into two equal strips of size x × ${fmt(half)}. Place one to the right of the square and one below.`,
    math: `x² + 2·(${fmt(half)}·x) ${sign(cm)}`,
  });

  steps.push({
    stageId: 4,
    title: `Move the constant ${fmt(cm)} into the corner`,
    explain: `The bottom-right corner has dimensions ${fmt(half)} × ${fmt(half)} = ${fmt(halfSq)}. The constant ${fmt(cm)} sits inside this corner${ Math.abs(gap) < 1e-10 ? ' and exactly fills it.' : (gap > 0 ? `, but only partially fills it.` : `, and overflows it.`)}`,
    math: cm >= 0
      ? `(x² + 2·(${fmt(half)}·x)) + ${fmt(cm)}`
      : `(x² + 2·(${fmt(half)}·x)) − ${fmt(Math.abs(cm))}`,
  });

  steps.push({
    stageId: 5,
    title: gap > 0 ? `Gap of ${fmt(gap)}` : gap < 0 ? `Excess of ${fmt(-gap)}` : `Corner exactly fills`,
    explain: gap > 0
      ? `The corner needs area ${fmt(halfSq)} to complete the square. The constant ${fmt(cm)} fills part of it; the gap is ${fmt(halfSq)} − ${fmt(cm)} = ${fmt(gap)}. So the original expression is ${fmt(gap)} less than the completed square.`
      : gap < 0
        ? `The corner only needs area ${fmt(halfSq)}, but the constant ${fmt(cm)} is larger. The excess is ${fmt(cm)} − ${fmt(halfSq)} = ${fmt(-gap)}. So the original expression is ${fmt(-gap)} more than the completed square.`
        : `The constant ${fmt(cm)} exactly fills the corner. The expression is already a perfect square.`,
    math: `Inside parentheses: (x ${sign(half)})² ${sign(-gap)}`,
  });

  const vertexH = -b / (2 * a);
  const vertexK = c - (b * b) / (4 * a);

  steps.push({
    stageId: 6,
    title: 'Vertex form',
    explain: a === 1
      ? `Combine the pieces: x² ${sign(b)}x ${sign(c)} = (x ${sign(half)})² ${sign(-gap)}.`
      : `Combine and restore the factor of ${fmt(a)}: ${fmt(a)}x² ${sign(b)}x ${sign(c)} = ${fmt(a)}(x ${sign(half)})² ${sign(vertexK)}.`,
    math: a === 1
      ? `(x ${sign(half)})² ${sign(-gap)} = 0`
      : `${fmt(a)}(x ${sign(half)})² ${sign(vertexK)} = 0`,
  });

  const h = -half;
  const rhs = -vertexK / a;
  let rootText;
  if (rhs < 0) {
    rootText = `x = ${fmt(h)} ± ${fmt(Math.sqrt(-rhs))}i (complex roots)`;
  } else if (rhs === 0) {
    rootText = `x = ${fmt(h)} (repeated root)`;
  } else {
    const sq = Math.sqrt(rhs);
    rootText = `x = ${fmt(h)} ± ${fmt(sq)} ≈ ${fmt(h + sq)} or ${fmt(h - sq)}`;
  }

  steps.push({
    stageId: 6,
    title: 'Solve for x',
    explain: `Move the constant to the right side and take the square root.`,
    math: rootText,
  });

  return { steps, vertexH, vertexK, half, halfSq, gap, bm, cm };
}


const X_PX = 140;
const UNIT_PX = 22;
const ORIGIN_X = 60;
const ORIGIN_Y = 30;

function Diagram({ stageId, a, b, c, derived }) {
  const { half, halfSq, gap, bm, cm } = derived;

  const halfPx = Math.max(20, Math.min(120, Math.abs(half) * UNIT_PX));
  const fullStripPx = 2 * halfPx;

  const sqX = ORIGIN_X;
  const sqY = ORIGIN_Y;
  const xc = sqX + X_PX / 2;
  const yc = sqY + X_PX / 2;

  const cornerHasFraction = (cm > 0 && halfSq > 0 && cm <= halfSq);
  const cPiecePx = cornerHasFraction ? (cm / halfSq) * halfPx : 0;
  const gapPiecePx = cornerHasFraction ? (halfPx - cPiecePx) : 0;

  const svgW = 640;
  const svgH = 280;

  if (stageId === 0) {
    const fullRectW = 2 * halfPx;
    const stage0xpos = sqX;
    const stage0ypos = sqY;

    let cSidePx;
    if (cm > 0 && halfSq > 0) {
      cSidePx = Math.sqrt((cm / halfSq)) * halfPx;
      cSidePx = Math.max(28, Math.min(halfPx, cSidePx));
    } else {
      cSidePx = 40;
    }

    const bxX = stage0xpos + X_PX + 40;
    const cPieceX = bxX + fullRectW + 40;

    return (
      <svg viewBox={`0 0 ${svgW} ${svgH}`} preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: 600, display: 'block', margin: '0 auto' }}>
        <rect x={stage0xpos} y={stage0ypos} width={X_PX} height={X_PX} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2.5} />
        <text x={stage0xpos + X_PX / 2} y={stage0ypos + X_PX / 2 + 8} textAnchor="middle" fontSize="24" fontStyle="italic" fill="#1e3a5f" fontWeight="700">x²</text>

        <rect x={bxX} y={stage0ypos} width={fullRectW} height={X_PX} fill="#fde68a" stroke="#d97706" strokeWidth={2.5} />
        <text x={bxX + fullRectW / 2} y={stage0ypos + X_PX / 2 + 8} textAnchor="middle" fontSize="20" fontStyle="italic" fill="#1e3a5f" fontWeight="700">{fmt(bm)}x</text>

        <rect x={cPieceX} y={stage0ypos + (X_PX - cSidePx) / 2} width={cSidePx} height={cSidePx} fill={cm >= 0 ? "#d1fae5" : "#fee2e2"} stroke={cm >= 0 ? "#059669" : "#dc2626"} strokeWidth={2.5} />
        <text x={cPieceX + cSidePx / 2} y={stage0ypos + X_PX / 2 + 6} textAnchor="middle" fontSize="16" fill={cm >= 0 ? "#065f46" : "#991b1b"} fontWeight="700">{fmt(cm)}</text>
      </svg>
    );
  }

  if (stageId === 1) {
    return (
      <svg viewBox={`0 0 ${svgW} ${svgH}`} preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: 600, display: 'block', margin: '0 auto' }}>
        <text x={svgW / 2} y={180} textAnchor="middle" fontSize="16" fill="#475569">Working with the monic part:</text>
        <text x={svgW / 2} y={220} textAnchor="middle" fontSize="26" fill="#1e3a5f" fontWeight="700">
          x² {bm >= 0 ? '+' : '−'} {fmt(Math.abs(bm))}x
        </text>
        <text x={svgW / 2} y={250} textAnchor="middle" fontSize="14" fill="#94a3b8">(factor of {fmt(a)} restored at the end)</text>
      </svg>
    );
  }

  if (stageId === 2) {
    return (
      <svg viewBox={`0 0 ${svgW} ${svgH}`} preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: 600, display: 'block', margin: '0 auto' }}>
        <rect x={sqX} y={sqY} width={X_PX} height={X_PX} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2.5} />
        <text x={xc} y={yc + 8} textAnchor="middle" fontSize="24" fontStyle="italic" fill="#1e3a5f" fontWeight="700">x²</text>
        <text x={xc} y={sqY - 14} textAnchor="middle" fontSize="14" fontStyle="italic" fill="#64748b">x</text>
        <text x={sqX - 16} y={yc + 5} textAnchor="middle" fontSize="14" fontStyle="italic" fill="#64748b">x</text>
      </svg>
    );
  }

  if (stageId === 3) {
    return (
      <svg viewBox={`0 0 ${svgW} ${svgH}`} preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: 600, display: 'block', margin: '0 auto' }}>
        <rect x={sqX} y={sqY} width={X_PX} height={X_PX} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2.5} />
        <text x={xc} y={yc + 8} textAnchor="middle" fontSize="24" fontStyle="italic" fill="#1e3a5f" fontWeight="700">x²</text>

        <rect x={sqX + X_PX} y={sqY} width={halfPx} height={X_PX} fill="#fde68a" stroke="#d97706" strokeWidth={2.5} />
        <text x={sqX + X_PX + halfPx / 2} y={yc + 6} textAnchor="middle" fontSize="16" fontStyle="italic" fill="#1e3a5f" fontWeight="600">{fmt(half)}x</text>

        <rect x={sqX} y={sqY + X_PX} width={X_PX} height={halfPx} fill="#fde68a" stroke="#d97706" strokeWidth={2.5} />
        <text x={xc} y={sqY + X_PX + halfPx / 2 + 5} textAnchor="middle" fontSize="16" fontStyle="italic" fill="#1e3a5f" fontWeight="600">{fmt(half)}x</text>

        <text x={xc} y={sqY - 14} textAnchor="middle" fontSize="14" fontStyle="italic" fill="#64748b">x</text>
        <text x={sqX + X_PX + halfPx / 2} y={sqY - 14} textAnchor="middle" fontSize="14" fill="#64748b">{fmt(half)}</text>
        <text x={sqX - 16} y={yc + 5} textAnchor="middle" fontSize="14" fontStyle="italic" fill="#64748b">x</text>
        <text x={sqX - 16} y={sqY + X_PX + halfPx / 2 + 5} textAnchor="middle" fontSize="14" fill="#64748b">{fmt(half)}</text>
      </svg>
    );
  }

  // Stage 4: "corner needs ..." info moved OUTSIDE the corner, to the right
  // of the diagram, with a leader line pointing at the corner. This keeps the
  // label legible even when the c-piece nearly fills the corner.
  if (stageId === 4) {
    const cornerCX = sqX + X_PX + halfPx / 2;
    const cornerCY = sqY + X_PX + halfPx / 2;
    const labelX   = sqX + X_PX + halfPx + 28;   // start of label block (right of corner)
    const labelY1  = sqY + X_PX + 8;
    const labelY2  = sqY + X_PX + 28;

    return (
      <svg viewBox={`0 0 ${svgW} ${svgH}`} preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: 600, display: 'block', margin: '0 auto' }}>
        <rect x={sqX} y={sqY} width={X_PX} height={X_PX} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2.5} />
        <text x={xc} y={yc + 8} textAnchor="middle" fontSize="24" fontStyle="italic" fill="#1e3a5f" fontWeight="700">x²</text>

        <rect x={sqX + X_PX} y={sqY} width={halfPx} height={X_PX} fill="#fde68a" stroke="#d97706" strokeWidth={2.5} />
        <text x={sqX + X_PX + halfPx / 2} y={yc + 6} textAnchor="middle" fontSize="16" fontStyle="italic" fill="#1e3a5f" fontWeight="600">{fmt(half)}x</text>

        <rect x={sqX} y={sqY + X_PX} width={X_PX} height={halfPx} fill="#fde68a" stroke="#d97706" strokeWidth={2.5} />
        <text x={xc} y={sqY + X_PX + halfPx / 2 + 5} textAnchor="middle" fontSize="16" fontStyle="italic" fill="#1e3a5f" fontWeight="600">{fmt(half)}x</text>

        {/* Corner outline */}
        <rect x={sqX + X_PX} y={sqY + X_PX} width={halfPx} height={halfPx} fill="#f8fafc" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5,4" />

        {/* c-piece sitting inside */}
        {cornerHasFraction && cPiecePx > 0 && (
          <>
            <rect x={sqX + X_PX} y={sqY + X_PX + halfPx - cPiecePx} width={halfPx} height={cPiecePx} fill="#d1fae5" stroke="#059669" strokeWidth={2.5} />
            <text x={sqX + X_PX + halfPx / 2} y={sqY + X_PX + halfPx - cPiecePx / 2 + 5} textAnchor="middle" fontSize="15" fill="#065f46" fontWeight="700">{fmt(cm)}</text>
          </>
        )}

        {/* Leader line from corner to outer label */}
        <line
          x1={sqX + X_PX + halfPx}
          y1={cornerCY}
          x2={labelX - 6}
          y2={cornerCY}
          stroke="#94a3b8"
          strokeWidth={1.5}
          strokeDasharray="3,3"
        />

        {/* Outer label */}
        <text x={labelX} y={labelY1} textAnchor="start" fontSize="13" fill="#64748b">corner needs</text>
        <text x={labelX} y={labelY2} textAnchor="start" fontSize="15" fill="#1e3a5f" fontWeight="700">
          {fmt(half)} × {fmt(half)} = {fmt(halfSq)}
        </text>

        {/* dimension labels */}
        <text x={xc} y={sqY - 14} textAnchor="middle" fontSize="14" fontStyle="italic" fill="#64748b">x</text>
        <text x={sqX + X_PX + halfPx / 2} y={sqY - 14} textAnchor="middle" fontSize="14" fill="#64748b">{fmt(half)}</text>
        <text x={sqX - 16} y={yc + 5} textAnchor="middle" fontSize="14" fontStyle="italic" fill="#64748b">x</text>
        <text x={sqX - 16} y={sqY + X_PX + halfPx / 2 + 5} textAnchor="middle" fontSize="14" fill="#64748b">{fmt(half)}</text>
      </svg>
    );
  }

  if (stageId === 5) {
    return (
      <svg viewBox={`0 0 ${svgW} ${svgH}`} preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: 600, display: 'block', margin: '0 auto' }}>
        <rect x={sqX} y={sqY} width={X_PX} height={X_PX} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2.5} />
        <text x={xc} y={yc + 8} textAnchor="middle" fontSize="24" fontStyle="italic" fill="#1e3a5f" fontWeight="700">x²</text>

        <rect x={sqX + X_PX} y={sqY} width={halfPx} height={X_PX} fill="#fde68a" stroke="#d97706" strokeWidth={2.5} />
        <text x={sqX + X_PX + halfPx / 2} y={yc + 6} textAnchor="middle" fontSize="16" fontStyle="italic" fill="#1e3a5f" fontWeight="600">{fmt(half)}x</text>

        <rect x={sqX} y={sqY + X_PX} width={X_PX} height={halfPx} fill="#fde68a" stroke="#d97706" strokeWidth={2.5} />
        <text x={xc} y={sqY + X_PX + halfPx / 2 + 5} textAnchor="middle" fontSize="16" fontStyle="italic" fill="#1e3a5f" fontWeight="600">{fmt(half)}x</text>

        {cornerHasFraction && cPiecePx > 0 && (
          <>
            <rect x={sqX + X_PX} y={sqY + X_PX + halfPx - cPiecePx} width={halfPx} height={cPiecePx} fill="#d1fae5" stroke="#059669" strokeWidth={2.5} />
            <text x={sqX + X_PX + halfPx / 2} y={sqY + X_PX + halfPx - cPiecePx / 2 + 5} textAnchor="middle" fontSize="14" fill="#065f46" fontWeight="700">{fmt(cm)}</text>
          </>
        )}
        {cornerHasFraction && gapPiecePx > 0 && (
          <>
            <rect x={sqX + X_PX} y={sqY + X_PX} width={halfPx} height={gapPiecePx} fill="#fecaca" stroke="#dc2626" strokeWidth={2.5} strokeDasharray="5,4">
              <animate attributeName="fill-opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
            </rect>
            <text x={sqX + X_PX + halfPx / 2} y={sqY + X_PX + gapPiecePx / 2 + 5} textAnchor="middle" fontSize="13" fill="#991b1b" fontWeight="700">gap = {fmt(gap)}</text>
          </>
        )}

        {!cornerHasFraction && cm > 0 && cm > halfSq && (
          <>
            <rect x={sqX + X_PX} y={sqY + X_PX} width={halfPx} height={halfPx} fill="#d1fae5" stroke="#059669" strokeWidth={2.5} />
            <text x={sqX + X_PX + halfPx / 2} y={sqY + X_PX + halfPx / 2 + 5} textAnchor="middle" fontSize="13" fill="#065f46" fontWeight="700">{fmt(halfSq)}</text>
            <text x={sqX + X_PX + halfPx + 10} y={sqY + X_PX + 20} fontSize="12" fill="#475569">overflow: {fmt(cm - halfSq)}</text>
          </>
        )}

        {!cornerHasFraction && cm < 0 && (
          <>
            <rect x={sqX + X_PX} y={sqY + X_PX} width={halfPx} height={halfPx} fill="#fecaca" stroke="#dc2626" strokeWidth={2.5} strokeDasharray="5,4">
              <animate attributeName="fill-opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
            </rect>
            <text x={sqX + X_PX + halfPx / 2} y={sqY + X_PX + halfPx / 2 + 5} textAnchor="middle" fontSize="13" fill="#991b1b" fontWeight="700">gap = {fmt(halfSq - cm)}</text>
          </>
        )}

        <text x={xc} y={sqY - 14} textAnchor="middle" fontSize="14" fontStyle="italic" fill="#64748b">x</text>
        <text x={sqX + X_PX + halfPx / 2} y={sqY - 14} textAnchor="middle" fontSize="14" fill="#64748b">{fmt(half)}</text>
        <text x={sqX - 16} y={yc + 5} textAnchor="middle" fontSize="14" fontStyle="italic" fill="#64748b">x</text>
        <text x={sqX - 16} y={sqY + X_PX + halfPx / 2 + 5} textAnchor="middle" fontSize="14" fill="#64748b">{fmt(half)}</text>
      </svg>
    );
  }

  if (stageId === 6) {
    const total = X_PX + halfPx;
    return (
      <svg viewBox={`0 0 ${svgW} ${svgH}`} preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: 600, display: 'block', margin: '0 auto' }}>
        <rect x={sqX} y={sqY} width={X_PX} height={X_PX} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2} />
        <text x={xc} y={yc + 8} textAnchor="middle" fontSize="24" fontStyle="italic" fill="#1e3a5f" fontWeight="700">x²</text>

        <rect x={sqX + X_PX} y={sqY} width={halfPx} height={X_PX} fill="#fde68a" stroke="#d97706" strokeWidth={2} />
        <text x={sqX + X_PX + halfPx / 2} y={yc + 6} textAnchor="middle" fontSize="14" fontStyle="italic" fill="#1e3a5f" fontWeight="600">{fmt(half)}x</text>

        <rect x={sqX} y={sqY + X_PX} width={X_PX} height={halfPx} fill="#fde68a" stroke="#d97706" strokeWidth={2} />
        <text x={xc} y={sqY + X_PX + halfPx / 2 + 5} textAnchor="middle" fontSize="14" fontStyle="italic" fill="#1e3a5f" fontWeight="600">{fmt(half)}x</text>

        {cornerHasFraction && cPiecePx > 0 && (
          <>
            <rect x={sqX + X_PX} y={sqY + X_PX + halfPx - cPiecePx} width={halfPx} height={cPiecePx} fill="#d1fae5" stroke="#059669" strokeWidth={2} />
            <text x={sqX + X_PX + halfPx / 2} y={sqY + X_PX + halfPx - cPiecePx / 2 + 5} textAnchor="middle" fontSize="13" fill="#065f46" fontWeight="700">{fmt(cm)}</text>
          </>
        )}
        {cornerHasFraction && gapPiecePx > 0 && (
          <>
            <rect x={sqX + X_PX} y={sqY + X_PX} width={halfPx} height={gapPiecePx} fill="#fecaca" stroke="#dc2626" strokeWidth={2} />
            <text x={sqX + X_PX + halfPx / 2} y={sqY + X_PX + gapPiecePx / 2 + 5} textAnchor="middle" fontSize="12" fill="#991b1b" fontWeight="700">{fmt(gap)}</text>
          </>
        )}
        {!cornerHasFraction && (
          <rect x={sqX + X_PX} y={sqY + X_PX} width={halfPx} height={halfPx} fill="#fde68a" stroke="#d97706" strokeWidth={2} />
        )}

        <line x1={sqX} y1={sqY - 28} x2={sqX + total} y2={sqY - 28} stroke="#3b82f6" strokeWidth={2} />
        <line x1={sqX} y1={sqY - 32} x2={sqX} y2={sqY - 24} stroke="#3b82f6" strokeWidth={2} />
        <line x1={sqX + total} y1={sqY - 32} x2={sqX + total} y2={sqY - 24} stroke="#3b82f6" strokeWidth={2} />
        <text x={sqX + total / 2} y={sqY - 36} textAnchor="middle" fontSize="15" fill="#3b82f6" fontWeight="700">x {sign(half).replace(' ', '')}</text>

        <line x1={sqX - 28} y1={sqY} x2={sqX - 28} y2={sqY + total} stroke="#3b82f6" strokeWidth={2} />
        <line x1={sqX - 32} y1={sqY} x2={sqX - 24} y2={sqY} stroke="#3b82f6" strokeWidth={2} />
        <line x1={sqX - 32} y1={sqY + total} x2={sqX - 24} y2={sqY + total} stroke="#3b82f6" strokeWidth={2} />
        <text x={sqX - 38} y={sqY + total / 2} textAnchor="middle" fontSize="15" fill="#3b82f6" fontWeight="700" transform={`rotate(-90, ${sqX - 38}, ${sqY + total / 2})`}>x {sign(half).replace(' ', '')}</text>

        <text x={svgW / 2} y={svgH - 30} textAnchor="middle" fontSize="16" fill="#1e3a5f" fontWeight="700">
          {a === 1 ? '' : `${fmt(a)} · `}(x {sign(half)})² {sign(gap > 0 ? -gap : -gap)} = 0
        </text>
      </svg>
    );
  }

  return null;
}


/* =====================================================
   MAIN COMPONENT
   ===================================================== */
export default function CompletingTheSquare() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(6);
  const [c, setC] = useState(5);

  const derived = buildSteps(a, b, c);
  const totalSteps = derived.steps.length;

  const [currentStep, setCurrentStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const playRef = useRef(null);
  const rightPanelRef = useRef(null);
  const activeStepRef = useRef(null);

  useEffect(() => {
    setCurrentStep(0);
    stopPlay();
  }, [a, b, c]);

  const stopPlay = useCallback(() => {
    if (playRef.current) {
      clearInterval(playRef.current);
      playRef.current = null;
    }
    setPlaying(false);
  }, []);

  const startPlay = useCallback(() => {
    if (currentStep >= totalSteps - 1) {
      setCurrentStep(0);
    }
    setPlaying(true);
    playRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= totalSteps - 1) {
          clearInterval(playRef.current);
          playRef.current = null;
          setPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2400);
  }, [currentStep, totalSteps]);

  const togglePlay = () => {
    if (playing) stopPlay();
    else startPlay();
  };

  const next = () => {
    stopPlay();
    if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    stopPlay();
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const restart = () => {
    stopPlay();
    setCurrentStep(0);
  };

  const goTo = (i) => {
    stopPlay();
    setCurrentStep(Math.max(0, Math.min(totalSteps - 1, i)));
  };

  useEffect(() => {
    return () => {
      if (playRef.current) clearInterval(playRef.current);
    };
  }, []);

  // Scope scroll to the right panel only — never the document.
  useEffect(() => {
    const container = rightPanelRef.current;
    if (!container) return;

    if (currentStep === totalSteps - 1) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
      return;
    }

    const stepEl = activeStepRef.current;
    if (!stepEl) return;

    const stepOffsetInContainer =
      stepEl.getBoundingClientRect().top
      - container.getBoundingClientRect().top
      + container.scrollTop;

    const targetScroll =
      stepOffsetInContainer - (container.clientHeight - stepEl.offsetHeight) / 2;

    container.scrollTo({
      top: Math.max(0, targetScroll),
      behavior: 'smooth',
    });
  }, [currentStep, totalSteps]);

  const currentStepObj = derived.steps[currentStep];

  const presets = [
    { label: 'x² + 6x + 5', a: 1, b: 6, c: 5 },
    { label: '2x² + 8x + 3', a: 2, b: 8, c: 3 },
    { label: 'x² − 4x + 1', a: 1, b: -4, c: 1 },
    { label: 'x² + 5x + 2', a: 1, b: 5, c: 2 },
    { label: '3x² + 12x + 7', a: 3, b: 12, c: 7 },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CTS_STYLES }} />

      <div className="cts-wrap">
        <div className="cts-main">

          {/* LEFT: inputs, diagram, animation controls */}
          <div className="cts-card cts-left">
            <div className="cts-label-small">Enter coefficients</div>
            <div className="cts-input-row">
              <input type="number" value={a} onChange={(e) => setA(parseFloat(e.target.value) || 0)} />
              <span className="var">x</span><sup>2</sup>
              <span className="op">+</span>
              <input type="number" value={b} onChange={(e) => setB(parseFloat(e.target.value) || 0)} />
              <span className="var">x</span>
              <span className="op">+</span>
              <input type="number" value={c} onChange={(e) => setC(parseFloat(e.target.value) || 0)} />
              <span className="op">= 0</span>
            </div>

            <div className="cts-label-small">Try a preset</div>
            <div className="cts-presets">
              {presets.map((p) => (
                <button key={p.label} onClick={() => { setA(p.a); setB(p.b); setC(p.c); }}>
                  {p.label}
                </button>
              ))}
            </div>

            <div className="cts-geom-card">
              <div className="cts-geom-title">Geometric Picture</div>
              <div className="cts-geom-svg">
                <Diagram stageId={currentStepObj.stageId} a={a} b={b} c={c} derived={derived} />
              </div>
              <div className="cts-caption">
                <strong>{currentStepObj.title}.</strong> {currentStepObj.explain}
              </div>
              <div className="cts-anim-controls">
                <button className="cts-anim-btn" onClick={prev} disabled={currentStep === 0}>← Back</button>
                <button
                  className="cts-anim-btn primary"
                  onClick={next}
                  disabled={currentStep === totalSteps - 1}
                >
                  {currentStep === totalSteps - 1 ? 'Done ✓' : 'Next →'}
                </button>
                <button
                  className={`cts-anim-btn ${playing ? 'playing' : ''}`}
                  onClick={togglePlay}
                >
                  {playing ? '⏸ Pause' : '▶ Play'}
                </button>
                <button className="cts-anim-btn" onClick={restart}>↺ Restart</button>
                <div className="cts-pips">
                  {derived.steps.map((_, i) => (
                    <div
                      key={i}
                      className={`cts-pip ${i === currentStep ? 'active' : i < currentStep ? 'done' : ''}`}
                      onClick={() => goTo(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: ALL steps always rendered; current is highlighted, the rest faded. */}
          <div className="cts-card cts-right" ref={rightPanelRef}>
            <div className="cts-steps-heading">Step-by-step solution</div>
            {derived.steps.map((s, i) => (
              <div
                key={i}
                ref={i === currentStep ? activeStepRef : null}
                className={`cts-step ${i === currentStep ? 'active' : ''}`}
                onClick={() => goTo(i)}
              >
                <div>
                  <span className="cts-step-num">{i + 1}</span>
                  <span className="cts-step-label">{s.title}</span>
                </div>
                <div className="cts-step-explain">{s.explain}</div>
                <div className="cts-step-math">{s.math}</div>
              </div>
            ))}

            <div className={`cts-final ${currentStep === totalSteps - 1 ? 'active' : ''}`}>
              <div className="cts-final-label">Vertex form</div>
              <div className="cts-final-eq">
                y = {a === 1 ? '' : `${fmt(a)}`}(x {derived.vertexH >= 0 ? '−' : '+'} {fmt(Math.abs(derived.vertexH))})² {derived.vertexK >= 0 ? '+' : '−'} <span className="cts-accent">{fmt(Math.abs(derived.vertexK))}</span>
              </div>
              <div style={{ marginTop: 12, fontSize: '0.95rem', opacity: 0.92 }}>
                Vertex: (<span className="cts-accent">{fmt(derived.vertexH)}</span>, <span className="cts-accent">{fmt(derived.vertexK)}</span>)
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}