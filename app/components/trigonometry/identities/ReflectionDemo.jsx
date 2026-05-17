
import React, { useState, useEffect, useRef } from 'react';

/* ============================================================
   ReflectionDemo v3

   Changes from v2:
   (1) Step panel uses MiniSolutionPanel pattern (numbered badges,
       scrollable list with clickable jump) — matches the other
       demos in the family.
   (2) Bigger scene: card maxWidth 1240, column ratio 2.4/1,
       SVG viewBox 820×576 (height +20%), R 180→215.
   (3) Distinct leg colors:
         cos (original)      → deepBlue
         sin (original)      → sinBrown (was midBlue/light-blue)
         cos (reflected)     → teal
         sin (reflected)     → violet (was amber, too close to sin)
   (4) Distinct arc colors:
         θ arc          → red
         gap1 + gap2    → amber (same color, emphasizes equality)
         new angle arc  → green
   ============================================================ */

const COLORS = {
  deepBlue:    '#4F46E5',
  sinBrown:    '#B45309',
  teal:        '#0D9488',
  violet:      '#7C3AED',
  amber:       '#D97706',
  green:       '#16A34A',
  red:         '#DC2626',
  panelBg:     '#F1F5F9',
  panelBgDeep: '#E2E8F0',
  panelLight:  '#F8FAFC',
  text:        '#1e3a5f',
  textMuted:   '#64748b',
  textFaint:   '#94a3b8',
  borderTer:   'rgba(0,0,0,0.10)',
  borderSec:   'rgba(0,0,0,0.30)',
  borderSoft:  '#cbd5e1',
  borderGrid:  'rgba(0,0,0,0.15)',
  white:       '#ffffff',
  calloutBg:   '#FEF2F2',
  calloutBorder: '#FCA5A5',
  calloutText: '#991B1B',
};

function colorOf(name) { return COLORS[name] || COLORS.text; }

/* ------------------------------------------------------------
   Mirror geometry
------------------------------------------------------------ */
function mirrorGeometry(mirror, cx, cy, R) {
  switch (mirror) {
    case 'y=x':
      return {
        line: { x1: cx - R, y1: cy + R, x2: cx + R, y2: cy - R },
        labelText: 'y = x',
        labelPos:  { x: cx + R - 14, y: cy - R + 20 },
        mirrorAngleRad: Math.PI / 4,
        mirrorBadge: '45°',
        reflect: (px, py) => {
          const dx = px - cx, dy = cy - py;
          return { x: cx + dy, y: cy - dx };
        },
        thetaToReflectedAngle: (th) => Math.PI / 2 - th,
        gapFormula: (deg) => `45° − ${deg}°`,
        newAngleFormula: (deg) => `90° − ${deg}°`,
      };
    case 'x':
      return {
        line: { x1: cx - R, y1: cy, x2: cx + R, y2: cy },
        labelText: 'x-axis',
        labelPos:  { x: cx + R - 30, y: cy - 8 },
        mirrorAngleRad: 0,
        mirrorBadge: '0°',
        reflect: (px, py) => ({ x: px, y: 2 * cy - py }),
        thetaToReflectedAngle: (th) => -th,
        gapFormula: (deg) => `${deg}°`,
        newAngleFormula: (deg) => `−${deg}°`,
      };
    case 'y':
      return {
        line: { x1: cx, y1: cy - R, x2: cx, y2: cy + R },
        labelText: 'y-axis',
        labelPos:  { x: cx + 10, y: cy - R + 18 },
        mirrorAngleRad: Math.PI / 2,
        mirrorBadge: '90°',
        reflect: (px, py) => ({ x: 2 * cx - px, y: py }),
        thetaToReflectedAngle: (th) => Math.PI - th,
        gapFormula: (deg) => `90° − ${deg}°`,
        newAngleFormula: (deg) => `180° − ${deg}°`,
      };
    case 'origin':
      return {
        line: null,
        labelText: 'origin',
        labelPos:  null,
        mirrorAngleRad: null,
        mirrorBadge: null,
        reflect: (px, py) => ({ x: 2 * cx - px, y: 2 * cy - py }),
        thetaToReflectedAngle: (th) => Math.PI + th,
        gapFormula: () => '',
        newAngleFormula: (deg) => `180° + ${deg}°`,
      };
    default:
      throw new Error('Unknown mirror: ' + mirror);
  }
}

/* ------------------------------------------------------------
   Defaults
------------------------------------------------------------ */
const DEFAULTS = {
  'y=x': {
    identity: {
      pieces: [
        { text: 'sin', italic: true },
        { text: '(' },
        { text: 'π/2 − θ', color: 'red', bold: true },
        { text: ') = ' },
        { text: 'cos θ', color: 'deepBlue', italic: true },
      ],
    },
    steps: [
      { rule: 'Setup', description: 'Place point P on the unit circle at angle θ from the x-axis. Drop perpendiculars: horizontal leg = cos θ, vertical leg = sin θ. The hypotenuse OP has length 1.' },
      { rule: 'Introduce the mirror', description: 'Draw the line y = x. It bisects the first quadrant — its angle from the x-axis is exactly 45°.' },
      { rule: 'Measure the gap to the mirror', description: 'The angle from the x-axis up to OP is θ. The angle from OP up to the mirror is therefore (45° − θ). This is how far P is from the mirror, measured as an angle.' },
      { rule: 'Reflect across the mirror', description: 'Reflect P across y = x to get P′. Reflections preserve distances and angles to the mirror line — so the angle from the mirror to P′ is also (45° − θ), on the other side.', callout: 'Reflection preserves angle to the mirror.' },
      { rule: 'Read the new angle from x-axis', description: 'Angle from x-axis to OP′ = 45° (mirror) + (45° − θ) (gap on the other side) = 90° − θ. So P′ sits at angle (π/2 − θ).' },
      { rule: 'Compare coordinates', description: 'P = (cos θ, sin θ). Reflection across y = x swaps coordinates, so P′ = (sin θ, cos θ). But P′ also equals (cos(π/2 − θ), sin(π/2 − θ)). Equating: cos(π/2 − θ) = sin θ and sin(π/2 − θ) = cos θ.' },
    ],
    metricPairs: [
      { label: 'sin(π/2 − θ)', compute: (th) => Math.sin(Math.PI / 2 - th) },
      { label: 'cos θ',         compute: (th) => Math.cos(th) },
    ],
  },

  'x': {
    identity: {
      pieces: [
        { text: 'sin', italic: true },
        { text: '(' },
        { text: '−θ', color: 'red', bold: true },
        { text: ') = −' },
        { text: 'sin θ', color: 'sinBrown', italic: true },
      ],
    },
    steps: [
      { rule: 'Setup', description: 'Place point P on the unit circle at angle θ from the x-axis. Drop perpendiculars: horizontal leg = cos θ, vertical leg = sin θ.' },
      { rule: 'Introduce the mirror', description: 'Draw the x-axis as the mirror line. Its angle from itself is 0°.' },
      { rule: 'Measure the gap to the mirror', description: 'The angle from the x-axis up to OP is θ. So the gap from P to the mirror equals θ.' },
      { rule: 'Reflect across the mirror', description: 'Reflect P across the x-axis to get P′. Reflections preserve angles to the mirror line — so P′ is at angle θ below the x-axis, i.e. at angle −θ.', callout: 'Reflection preserves angle to the mirror.' },
      { rule: 'Read the new angle from x-axis', description: 'P′ sits at angle −θ from the x-axis (measured as a signed angle, going clockwise).' },
      { rule: 'Compare coordinates', description: 'P = (cos θ, sin θ). Reflection across the x-axis flips the y-coordinate, so P′ = (cos θ, −sin θ). But P′ also equals (cos(−θ), sin(−θ)). Equating: cos(−θ) = cos θ (cosine is even) and sin(−θ) = −sin θ (sine is odd).' },
    ],
    metricPairs: [
      { label: 'sin(−θ)', compute: (th) => Math.sin(-th) },
      { label: '−sin θ',  compute: (th) => -Math.sin(th) },
    ],
  },

  'y': {
    identity: {
      pieces: [
        { text: 'sin', italic: true },
        { text: '(' },
        { text: 'π − θ', color: 'red', bold: true },
        { text: ') = ' },
        { text: 'sin θ', color: 'sinBrown', italic: true },
      ],
    },
    steps: [
      { rule: 'Setup', description: 'Place point P on the unit circle at angle θ from the x-axis. Drop perpendiculars: horizontal leg = cos θ, vertical leg = sin θ.' },
      { rule: 'Introduce the mirror', description: 'Draw the y-axis as the mirror line. Its angle from the x-axis is 90°.' },
      { rule: 'Measure the gap to the mirror', description: 'The angle from the x-axis up to OP is θ. The angle from OP up to the y-axis is (90° − θ). This is how far P is from the mirror.' },
      { rule: 'Reflect across the mirror', description: 'Reflect P across the y-axis to get P′. Reflections preserve angles to the mirror line — so the angle from the mirror to P′ is also (90° − θ), on the other side.', callout: 'Reflection preserves angle to the mirror.' },
      { rule: 'Read the new angle from x-axis', description: 'Angle from x-axis to OP′ = 90° (mirror) + (90° − θ) (gap on the other side) = 180° − θ. So P′ sits at angle (π − θ).' },
      { rule: 'Compare coordinates', description: 'P = (cos θ, sin θ). Reflection across the y-axis flips the x-coordinate, so P′ = (−cos θ, sin θ). But P′ also equals (cos(π − θ), sin(π − θ)). Equating: cos(π − θ) = −cos θ and sin(π − θ) = sin θ.' },
    ],
    metricPairs: [
      { label: 'sin(π − θ)', compute: (th) => Math.sin(Math.PI - th) },
      { label: 'sin θ',       compute: (th) => Math.sin(th) },
    ],
  },

  'origin': {
    identity: {
      pieces: [
        { text: 'sin', italic: true },
        { text: '(' },
        { text: 'π + θ', color: 'red', bold: true },
        { text: ') = −' },
        { text: 'sin θ', color: 'sinBrown', italic: true },
      ],
    },
    steps: [
      { rule: 'Setup', description: 'Place point P on the unit circle at angle θ from the x-axis. Drop perpendiculars: horizontal leg = cos θ, vertical leg = sin θ.' },
      { rule: 'Reflect through the origin', description: 'Point reflection through the origin sends every point P = (x, y) to P′ = (−x, −y). Equivalently: rotate by 180° about O.', callout: 'Point reflection through O = rotation by 180°.' },
      { rule: 'Decompose the new angle', description: "By rotational symmetry, the angle from the NEGATIVE x-axis up to OP′ equals the original θ. So the full angle from the POSITIVE x-axis to OP′ is 180° (straight across the x-axis) + θ (the same θ, on the other side) = (π + θ).", callout: '180° across + θ by symmetry = π + θ.' },
      { rule: 'Compare coordinates', description: "P = (cos θ, sin θ). Through the origin: P′ = (−cos θ, −sin θ). But P′ also equals (cos(π + θ), sin(π + θ)). Equating: cos(π + θ) = −cos θ and sin(π + θ) = −sin θ." },
    ],
    metricPairs: [
      { label: 'sin(π + θ)', compute: (th) => Math.sin(Math.PI + th) },
      { label: '−sin θ',     compute: (th) => -Math.sin(th) },
    ],
  },
};

/* ------------------------------------------------------------
   IdentityBar
------------------------------------------------------------ */
function IdentityBar({ pieces }) {
  return (
    <div style={{
      fontSize: '1.15rem', padding: '14px 18px',
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px',
      textAlign: 'center', marginBottom: '12px',
      fontFamily: 'Georgia, serif', color: COLORS.text,
    }}>
      {pieces.map((p, i) => (
        <span key={i} style={{
          color: p.color ? colorOf(p.color) : 'inherit',
          fontStyle: p.italic ? 'italic' : 'normal',
          fontWeight: p.bold ? 500 : 'normal',
        }}>{p.text}</span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------
   ControlButton
------------------------------------------------------------ */
function ControlButton({ onClick, disabled, primary, children, title }) {
  return (
    <button onClick={onClick} disabled={disabled} title={title} style={{
      border: `1px solid ${primary ? COLORS.deepBlue : COLORS.borderSoft}`,
      background: primary ? COLORS.deepBlue : COLORS.white,
      color: primary ? COLORS.white : COLORS.text,
      padding: '7px 16px', borderRadius: '6px',
      fontSize: '0.96rem', fontWeight: 500,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'inherit', minWidth: '60px',
      transition: 'background 0.15s, opacity 0.15s',
    }}>{children}</button>
  );
}

/* ------------------------------------------------------------
   MetricCard
------------------------------------------------------------ */
function MetricCard({ label, value, visible }) {
  return (
    <div style={{
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px', padding: '0.9rem 1.2rem',
      opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease',
    }}>
      <p style={{
        fontSize: '0.9rem', color: COLORS.textMuted,
        margin: '0 0 4px', fontStyle: 'italic',
      }}>{label}</p>
      <p style={{
        fontSize: '1.5rem', fontWeight: 500,
        fontVariantNumeric: 'tabular-nums',
        margin: 0, color: COLORS.deepBlue,
      }}>{value}</p>
    </div>
  );
}

/* ------------------------------------------------------------
   MiniSolutionPanel — numbered badges, scroll-on-active,
   clickable jump. Matches BisectedApexDemo / NegativeAngleDemo.
------------------------------------------------------------ */
function MiniSolutionPanel({ steps, stepsTitle = 'Derivation', placeholder, onStepClick }) {
  const listRef = useRef(null);
  const activeIndex = steps.length - 1;

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <div>
      <style>{`
        @keyframes refl-fade-in {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .refl-step-log::-webkit-scrollbar { display: none; width: 0; height: 0; }
      `}</style>

      <div style={{
        fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1.6px',
        color: COLORS.textMuted, marginBottom: '14px', fontWeight: 600,
      }}>{stepsTitle}</div>

      <div
        ref={listRef}
        className="refl-step-log"
        style={{
          maxHeight: '620px',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingRight: '2px',
        }}
      >
        {steps.length === 0 && (
          <div style={{
            background: COLORS.white,
            border: `1px dashed ${COLORS.borderSoft}`,
            borderRadius: '8px', padding: '40px 18px', textAlign: 'center',
            fontSize: '0.92rem', color: COLORS.textFaint, fontStyle: 'italic',
            minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{placeholder}</div>
        )}
        {steps.map((step, i) => {
          const isActive  = i === activeIndex;
          const clickable = !!onStepClick;
          return (
            <div
              key={i}
              role={clickable ? 'button' : undefined}
              tabIndex={clickable ? 0 : undefined}
              onClick={clickable ? () => onStepClick(i) : undefined}
              onKeyDown={clickable ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStepClick(i); }
              } : undefined}
              style={{
                background: isActive ? COLORS.white : 'transparent',
                border: isActive ? `2px solid ${COLORS.deepBlue}` : `2px solid transparent`,
                borderRadius: '8px',
                padding: '11px 13px',
                marginBottom: '6px',
                cursor: clickable ? 'pointer' : 'default',
                transition: 'background 0.2s, border-color 0.2s',
                animation: 'refl-fade-in 0.35s ease',
                outline: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '5px' }}>
                <span style={{
                  display: 'inline-block', fontSize: '0.78rem', fontWeight: 700,
                  color: COLORS.white,
                  background: isActive ? COLORS.deepBlue : COLORS.textFaint,
                  padding: '3px 8px', borderRadius: '4px', flexShrink: 0,
                  fontVariantNumeric: 'tabular-nums',
                }}>{i + 1}</span>
                <span style={{
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '1rem',
                  color: isActive ? COLORS.deepBlue : COLORS.textMuted,
                }}>{step.rule}</span>
              </div>
              <p style={{
                fontSize: '0.88rem',
                color: isActive ? COLORS.text : COLORS.textMuted,
                lineHeight: 1.5, margin: 0, paddingLeft: '36px',
              }}>{step.description}</p>
              {step.callout && isActive && (
                <div style={{
                  background: COLORS.calloutBg,
                  border: `1px solid ${COLORS.calloutBorder}`,
                  borderRadius: '6px',
                  padding: '8px 12px',
                  fontSize: '0.82rem',
                  color: COLORS.calloutText,
                  marginTop: '8px',
                  marginLeft: '36px',
                  animation: 'refl-fade-in 0.4s ease',
                }}>{step.callout}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   ReflectionScene — bigger circle, 4 distinct arc colors
------------------------------------------------------------ */
function ReflectionScene({
  theta, mirror, currentStep,
  cx = 340, cy = 290, R = 215,
}) {
  const geom = mirrorGeometry(mirror, cx, cy, R);

  const th = (theta * Math.PI) / 180;
  const c  = Math.cos(th);
  const s  = Math.sin(th);

  const px = cx + R * c;
  const py = cy - R * s;
  const pp = geom.reflect(px, py);
  const ppx = pp.x, ppy = pp.y;

  const refAngle = geom.thetaToReflectedAngle(th);

  const arcRTheta = 36;
  const arcRGap   = 92;
  const arcRNew   = 60;

  const showOrig    = currentStep >= 1;
  const showMirror  = currentStep >= 2 && mirror !== 'origin';
  const showGap1    = currentStep >= 3 && mirror !== 'origin';
  const showRefl    = mirror === 'origin' ? currentStep >= 2 : currentStep >= 4;
  const showGap2    = currentStep >= 4 && mirror !== 'origin';
  const showNewAng  = mirror === 'origin' ? currentStep >= 3 : currentStep >= 5;

  const fade = (vis) => ({ opacity: vis ? 1 : 0, transition: 'opacity 0.5s ease' });

  const thetaArcD = `M ${cx + arcRTheta} ${cy} A ${arcRTheta} ${arcRTheta} 0 0 0 ${cx + arcRTheta * c} ${cy - arcRTheta * s}`;

  let mirrorBadgeArc = null;
  if (geom.mirrorAngleRad !== null && mirror !== 'x') {
    const mr = 66;
    const ex = cx + mr * Math.cos(geom.mirrorAngleRad);
    const ey = cy - mr * Math.sin(geom.mirrorAngleRad);
    mirrorBadgeArc = `M ${cx + mr} ${cy} A ${mr} ${mr} 0 0 0 ${ex} ${ey}`;
  }

  let gap1ArcD = null, gap2ArcD = null;
  if (geom.mirrorAngleRad !== null) {
    const a1Start = th, a1End = geom.mirrorAngleRad;
    const sx1 = cx + arcRGap * Math.cos(a1Start), sy1 = cy - arcRGap * Math.sin(a1Start);
    const ex1 = cx + arcRGap * Math.cos(a1End),   ey1 = cy - arcRGap * Math.sin(a1End);
    const sweep1 = a1End > a1Start ? 0 : 1;
    gap1ArcD = `M ${sx1} ${sy1} A ${arcRGap} ${arcRGap} 0 0 ${sweep1} ${ex1} ${ey1}`;

    const a2Start = geom.mirrorAngleRad, a2End = refAngle;
    const sx2 = cx + arcRGap * Math.cos(a2Start), sy2 = cy - arcRGap * Math.sin(a2Start);
    const ex2 = cx + arcRGap * Math.cos(a2End),   ey2 = cy - arcRGap * Math.sin(a2End);
    const sweep2 = a2End > a2Start ? 0 : 1;
    gap2ArcD = `M ${sx2} ${sy2} A ${arcRGap} ${arcRGap} 0 0 ${sweep2} ${ex2} ${ey2}`;
  }

  let newAngArcD;
  {
    const startAng = 0, endAng = refAngle;
    const sx = cx + arcRNew, sy = cy;
    const ex = cx + arcRNew * Math.cos(endAng), ey = cy - arcRNew * Math.sin(endAng);
    const sweep = endAng > startAng ? 0 : 1;
    const large = Math.abs(endAng - startAng) > Math.PI ? 1 : 0;
    newAngArcD = `M ${sx} ${sy} A ${arcRNew} ${arcRNew} ${large} ${large} ${sweep} ${ex} ${ey}`;
  }

  /* Origin-only: a second θ arc near OP', between the −x-axis
     and OP'. Visualizes that the angle equals the original θ
     by rotational symmetry, so the green new-angle arc
     decomposes as 180° + θ. */
  let reflThetaArcD = null;
  let reflThetaLabelPos = null;
  if (mirror === 'origin') {
    const startAng = Math.PI;
    const endAng   = Math.PI + th;
    const sx = cx + arcRTheta * Math.cos(startAng);
    const sy = cy - arcRTheta * Math.sin(startAng);
    const ex = cx + arcRTheta * Math.cos(endAng);
    const ey = cy - arcRTheta * Math.sin(endAng);
    const sweep = endAng > startAng ? 0 : 1;
    reflThetaArcD = `M ${sx} ${sy} A ${arcRTheta} ${arcRTheta} 0 0 ${sweep} ${ex} ${ey}`;
    reflThetaLabelPos = {
      x: cx + (arcRTheta + 10) * Math.cos(Math.PI + th / 2),
      y: cy - (arcRTheta + 10) * Math.sin(Math.PI + th / 2) + 4,
    };
  }

  /* Arc colors:
     θ        → red
     gap1+gap2 → amber (same to emphasize equality)
     new angle → green                                     */
  const cTheta = COLORS.red;
  const cGap   = COLORS.amber;
  const cNew   = COLORS.green;

  const callouts = [];
  callouts.push({
    visible: showOrig,
    anchor:  { x: cx + arcRTheta * Math.cos(th / 2), y: cy - arcRTheta * Math.sin(th / 2) },
    box:     { x: 660, y: 410, w: 116, h: 28 },
    rows:    [{ text: `θ = ${theta}°`, color: cTheta }],
  });
  if (mirror !== 'origin') {
    callouts.push({
      visible: showGap1,
      anchor:  { x: cx + arcRGap * Math.cos((th + geom.mirrorAngleRad) / 2),
                 y: cy - arcRGap * Math.sin((th + geom.mirrorAngleRad) / 2) },
      box:     { x: 660, y: 240, w: 120, h: 44 },
      rows: [
        { text: 'gap to mirror', color: 'text', size: 11 },
        { text: geom.gapFormula(theta), color: cGap },
      ],
    });
    callouts.push({
      visible: showGap2,
      anchor:  { x: cx + arcRGap * Math.cos((geom.mirrorAngleRad + refAngle) / 2),
                 y: cy - arcRGap * Math.sin((geom.mirrorAngleRad + refAngle) / 2) },
      box:     { x: 660, y: 200, w: 120, h: 44 },
      rows: [
        { text: 'same gap (mirrored)', color: 'text', size: 11 },
        { text: geom.gapFormula(theta), color: cGap },
      ],
    });
  }
  callouts.push({
    visible: showNewAng,
    anchor:  { x: cx + arcRNew * Math.cos(refAngle / 2), y: cy - arcRNew * Math.sin(refAngle / 2) },
    box:     { x: 660, y: 320, w: 120, h: 44 },
    rows: [
      { text: 'new angle', color: 'text', size: 11 },
      { text: geom.newAngleFormula(theta), color: cNew },
    ],
  });

  return (
    <svg width="100%" viewBox="0 0 820 576" role="img" style={{ display: 'block' }}>
      <title>Reflection scene</title>

      {/* LEGEND */}
      <g transform="translate(636, 6)">
        <rect x="0" y="0" width="178" height="172" rx="8"
              fill={COLORS.panelLight} stroke={COLORS.borderTer} strokeWidth="0.6"/>
        <text x="12" y="20" fill={COLORS.textMuted} fontSize="10"
              fontWeight="700" letterSpacing="1.4"
              style={{ textTransform: 'uppercase' }}>Legend</text>

        <line x1="12" y1="40" x2="32" y2="40" stroke={COLORS.deepBlue} strokeWidth="3.2" strokeLinecap="round"/>
        <text x="38" y="44" fill={COLORS.text} fontSize="11.5"><tspan fontStyle="italic">cos θ</tspan></text>

        <line x1="12" y1="60" x2="32" y2="60" stroke={COLORS.sinBrown} strokeWidth="3.2" strokeLinecap="round"/>
        <text x="38" y="64" fill={COLORS.text} fontSize="11.5"><tspan fontStyle="italic">sin θ</tspan></text>

        <line x1="12" y1="80" x2="32" y2="80" stroke={COLORS.teal} strokeWidth="3.2" strokeLinecap="round"/>
        <text x="38" y="84" fill={COLORS.text} fontSize="11.5"><tspan fontStyle="italic">cos (reflected)</tspan></text>

        <line x1="12" y1="100" x2="32" y2="100" stroke={COLORS.violet} strokeWidth="3.2" strokeLinecap="round"/>
        <text x="38" y="104" fill={COLORS.text} fontSize="11.5"><tspan fontStyle="italic">sin (reflected)</tspan></text>

        <line x1="12" y1="120" x2="32" y2="120" stroke={COLORS.red} strokeWidth="2" strokeDasharray="4 3"/>
        <text x="38" y="124" fill={COLORS.text} fontSize="11.5">{geom.labelText} mirror</text>

        <g>
          <path d="M 12 138 a 6 6 0 0 1 12 0" fill="none" stroke={cTheta} strokeWidth="1.6"/>
          <text x="38" y="142" fill={COLORS.text} fontSize="11.5">θ angle</text>
        </g>

        <g>
          <path d="M 12 156 a 6 6 0 0 1 12 0" fill="none" stroke={cGap} strokeWidth="1.6" strokeDasharray="3 2"/>
          <text x="38" y="160" fill={COLORS.text} fontSize="11.5">gap to mirror (×2)</text>
        </g>
      </g>

      {/* Unit circle — always */}
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={COLORS.borderSec} strokeWidth="1"/>

      {/* x-axis: drawn from Setup step (it's the reference frame mentioned in step 1) */}
      <g style={fade(showOrig)}>
        <line x1={cx - R - 12} y1={cy} x2={cx + R + 12} y2={cy}
              stroke={COLORS.red} strokeWidth="1.4" strokeDasharray="6 4" strokeOpacity="0.55"/>
        <text x={cx + R - 30} y={cy - 8} fontSize="13"
              fill={COLORS.red} fontStyle="italic" fontWeight="500">x-axis</text>
      </g>

      {/* Mirror line */}
      {geom.line && (
        <g style={fade(showMirror)}>
          <line x1={geom.line.x1} y1={geom.line.y1} x2={geom.line.x2} y2={geom.line.y2}
                stroke={COLORS.red} strokeWidth="1.7" strokeDasharray="6 4" strokeOpacity="0.75"/>
          {geom.labelPos && (
            <text x={geom.labelPos.x} y={geom.labelPos.y}
                  fill={COLORS.red} fontSize="13" fontStyle="italic" fontWeight="500">
              {geom.labelText}
            </text>
          )}
          {mirrorBadgeArc && (
            <>
              <path d={mirrorBadgeArc} fill="none" stroke={COLORS.red} strokeWidth="1" strokeOpacity="0.6"/>
              <text x={cx + 76 * Math.cos(geom.mirrorAngleRad / 2)}
                    y={cy - 76 * Math.sin(geom.mirrorAngleRad / 2) + 4}
                    fill={COLORS.red} fontSize="11" fontStyle="italic">
                {geom.mirrorBadge}
              </text>
            </>
          )}
        </g>
      )}

      {/* Original triangle */}
      <g style={fade(showOrig)}>
        <polygon points={`${cx},${cy} ${px},${cy} ${px},${py}`}
                 fill={COLORS.deepBlue} fillOpacity="0.06" stroke="none"/>
        <line x1={cx} y1={cy} x2={px} y2={py} stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.7"/>
        <line x1={cx} y1={cy} x2={px} y2={cy} stroke={COLORS.deepBlue} strokeWidth="3.2" strokeLinecap="round"/>
        <line x1={px} y1={cy} x2={px} y2={py} stroke={COLORS.sinBrown} strokeWidth="3.2" strokeLinecap="round"/>
        <polyline points={`${px - 9},${cy} ${px - 9},${cy - 9} ${px},${cy - 9}`}
                  fill="none" stroke={COLORS.textMuted} strokeWidth="0.9"/>
        <circle cx={px} cy={py} r="4.5" fill={COLORS.text}/>
        <text x={px + 9} y={py - 7} fill={COLORS.text} fontSize="14" fontWeight="600">P</text>
        <path d={thetaArcD} fill="none" stroke={cTheta} strokeWidth="1.5"/>
      </g>

      {/* gap arc 1 */}
      <g style={fade(showGap1)}>
        {gap1ArcD && (
          <path d={gap1ArcD} fill="none" stroke={cGap} strokeWidth="1.5" strokeDasharray="3 2"/>
        )}
      </g>

      {/* Reflected triangle */}
      <g style={fade(showRefl)}>
        <polygon points={`${cx},${cy} ${ppx},${cy} ${ppx},${ppy}`}
                 fill={COLORS.teal} fillOpacity="0.06" stroke="none"/>
        <line x1={cx} y1={cy} x2={ppx} y2={ppy} stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.7"/>
        <line x1={cx} y1={cy} x2={ppx} y2={cy} stroke={COLORS.teal} strokeWidth="3.2" strokeLinecap="round"/>
        <line x1={ppx} y1={cy} x2={ppx} y2={ppy} stroke={COLORS.violet} strokeWidth="3.2" strokeLinecap="round"/>
        <polyline points={`${ppx - 9},${cy} ${ppx - 9},${cy - 9} ${ppx},${cy - 9}`}
                  fill="none" stroke={COLORS.textMuted} strokeWidth="0.9"/>
        <circle cx={ppx} cy={ppy} r="4.5" fill={COLORS.text}/>
        <text x={ppx + 9} y={ppy - 7} fill={COLORS.text} fontSize="14" fontWeight="600">P&apos;</text>
        <line x1={px} y1={py} x2={ppx} y2={ppy}
              stroke={COLORS.red} strokeWidth="1" strokeOpacity="0.45" strokeDasharray="2 3"/>
      </g>

      {/* gap arc 2 */}
      <g style={fade(showGap2)}>
        {gap2ArcD && (
          <path d={gap2ArcD} fill="none" stroke={cGap} strokeWidth="1.5" strokeDasharray="3 2"/>
        )}
      </g>

      {/* new angle arc */}
      <g style={fade(showNewAng)}>
        <path d={newAngArcD} fill="none" stroke={cNew} strokeWidth="1.6"/>
      </g>

      {/* Origin-only: reflected θ arc near OP', showing the
          angle is the same as the original by rotational
          symmetry — so new angle = 180° + θ */}
      {reflThetaArcD && (
        <g style={fade(showNewAng)}>
          <path d={reflThetaArcD} fill="none" stroke={cTheta} strokeWidth="1.5"/>
          <text x={reflThetaLabelPos.x} y={reflThetaLabelPos.y}
                fill={cTheta} fontSize="12" fontStyle="italic">θ</text>
        </g>
      )}

      {/* Origin */}
      <circle cx={cx} cy={cy} r="3.2" fill={COLORS.text}/>
      <text x={cx - 9} y={cy + 18} textAnchor="end"
            fill={COLORS.textMuted} fontSize="13" fontStyle="italic">O</text>

      {/* Callouts */}
      {callouts.map((co, i) => (
        <g key={i} style={fade(co.visible)}>
          <line x1={co.anchor.x} y1={co.anchor.y}
                x2={co.box.x} y2={co.box.y + co.box.h / 2}
                stroke={COLORS.textFaint} strokeWidth="0.7"/>
          <rect x={co.box.x} y={co.box.y} width={co.box.w} height={co.box.h} rx="4"
                fill={COLORS.panelLight} stroke={COLORS.borderTer} strokeWidth="0.6"/>
          {co.rows.map((row, j) => {
            const baseY = co.rows.length === 1
              ? co.box.y + co.box.h / 2 + 4
              : co.box.y + 18 + j * 18;
            const fill = row.color === 'text'
              ? COLORS.text
              : (typeof row.color === 'string' && row.color.startsWith('#'))
                ? row.color
                : colorOf(row.color);
            return (
              <text key={j}
                    x={co.box.x + co.box.w / 2}
                    y={baseY}
                    textAnchor="middle"
                    fill={fill}
                    fontSize={row.size || 13}
                    fontStyle={row.color === 'text' ? 'normal' : 'italic'}
                    fontWeight={row.color === 'text' ? 'normal' : 500}>
                {row.text}
              </text>
            );
          })}
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------
   Main exported component
------------------------------------------------------------ */
export default function ReflectionDemo({
  mirror         = 'y=x',
  scenario       = {},
  initialTheta   = 35,
  theta:           thetaProp,
  onThetaChange,
  thetaMin       = 10,
  thetaMax       = 80,
  stepDurationMs = 2500,
  showSlider     = true,
  maxWidth       = 1240,
}) {
  const def = DEFAULTS[mirror];
  if (!def) {
    return <div>Unknown mirror: {String(mirror)}</div>;
  }

  const merged = {
    identity:    scenario.identity    ?? def.identity,
    steps:       scenario.steps       ?? def.steps,
    metricPairs: scenario.metricPairs ?? def.metricPairs,
  };

  const isControlled = thetaProp !== undefined;
  const [thetaInternal, setThetaInternal] = useState(initialTheta);
  const theta = isControlled ? thetaProp : thetaInternal;
  const setTheta = (v) => {
    if (isControlled) onThetaChange?.(v);
    else setThetaInternal(v);
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying]     = useState(false);
  const [speed, setSpeed]             = useState(1);

  const totalSteps        = merged.steps.length;
  const effectiveDuration = stepDurationMs / speed;

  useEffect(() => {
    if (!isPlaying) return;
    if (currentStep >= totalSteps) { setIsPlaying(false); return; }
    const id = setTimeout(() => setCurrentStep(s => Math.min(s + 1, totalSteps)), effectiveDuration);
    return () => clearTimeout(id);
  }, [isPlaying, currentStep, totalSteps, effectiveDuration]);

  const handlePlayPause = () => {
    if (currentStep >= totalSteps) { setCurrentStep(0); setIsPlaying(true); }
    else setIsPlaying(p => !p);
  };
  const handleNext   = () => { setIsPlaying(false); setCurrentStep(s => Math.min(s + 1, totalSteps)); };
  const handlePrev   = () => { setIsPlaying(false); setCurrentStep(s => Math.max(s - 1, 0)); };
  const handleReset  = () => { setIsPlaying(false); setCurrentStep(0); };
  const handleJumpTo = (idx) => { setIsPlaying(false); setCurrentStep(idx + 1); };

  const visibleSteps = merged.steps.slice(0, currentStep);
  const isAtStart    = currentStep === 0;
  const isAtEnd      = currentStep >= totalSteps;
  const playLabel    = isPlaying ? 'Pause' : (isAtEnd ? 'Replay' : 'Play');

  const th = (theta * Math.PI) / 180;

  return (
    <div style={{
      maxWidth: `${maxWidth}px`,
      margin: '0 auto',
      background: COLORS.white,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '14px',
      boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05), 0 10px 28px rgba(15, 23, 42, 0.07)',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: COLORS.text,
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', gap: '20px', width: '100%' }}>

        {/* LEFT: scene (2.4 of total) */}
        <div style={{ flex: '2.4 1 0', minWidth: 0 }}>
          <IdentityBar pieces={merged.identity.pieces} />

          {showSlider && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', padding: '0 4px' }}>
              <span style={{ fontSize: '1rem', color: COLORS.textMuted, fontStyle: 'italic', minWidth: '14px' }}>θ</span>
              <input
                type="range" min={thetaMin} max={thetaMax} step={1}
                value={theta}
                onChange={e => setTheta(+e.target.value)}
                style={{ flex: 1, accentColor: COLORS.deepBlue }}
              />
              <span style={{
                fontSize: '1rem', fontWeight: 500, color: COLORS.deepBlue,
                minWidth: '50px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
              }}>{theta}&deg;</span>
            </div>
          )}

          <div style={{
            background: COLORS.panelBg,
            border: `1px solid ${COLORS.borderSoft}`,
            borderRadius: '10px',
            padding: '10px',
          }}>
            <ReflectionScene
              theta={theta}
              mirror={mirror}
              currentStep={currentStep}
            />
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '8px', marginTop: '12px', padding: '12px 14px',
            background: COLORS.panelBg,
            border: `1px solid ${COLORS.borderSoft}`,
            borderRadius: '10px',
            flexWrap: 'wrap',
          }}>
            <ControlButton onClick={handleReset} disabled={isAtStart && !isPlaying} title="Reset">Reset</ControlButton>
            <ControlButton onClick={handlePrev}  disabled={isAtStart}                title="Previous">&lsaquo; Prev</ControlButton>
            <ControlButton onClick={handlePlayPause} primary                        title={isPlaying ? 'Pause' : 'Play'}>{playLabel}</ControlButton>
            <ControlButton onClick={handleNext}  disabled={isAtEnd}                  title="Next">Next &rsaquo;</ControlButton>
            <select value={speed} onChange={e => setSpeed(+e.target.value)} title="Animation speed" style={{
              border: `1px solid ${COLORS.borderSoft}`, background: COLORS.white, color: COLORS.text,
              padding: '7px 10px', borderRadius: '6px', fontSize: '0.92rem', fontWeight: 500,
              fontFamily: 'inherit', cursor: 'pointer', marginLeft: '6px',
            }}>
              <option value={0.5}>0.5×</option>
              <option value={1}>1×</option>
              <option value={1.5}>1.5×</option>
              <option value={2}>2×</option>
            </select>
            <span style={{
              marginLeft: '10px', fontSize: '0.88rem',
              color: COLORS.textFaint, fontVariantNumeric: 'tabular-nums',
            }}>Step {currentStep} of {totalSteps}</span>
          </div>

          {merged.metricPairs && merged.metricPairs.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${merged.metricPairs.length}, 1fr)`,
              gap: '12px', marginTop: '12px',
            }}>
              {merged.metricPairs.map((m, i) => (
                <MetricCard
                  key={i}
                  label={m.label}
                  value={m.compute(th).toFixed(3)}
                  visible={isAtEnd}
                />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: derivation (1 of total) — squeezed */}
        <div style={{
          flex: '1 1 0', minWidth: 0,
          background: COLORS.panelBg,
          border: `1px solid ${COLORS.borderSoft}`,
          borderRadius: '10px',
          padding: '14px',
          minHeight: '660px',
        }}>
          <MiniSolutionPanel
            steps={visibleSteps}
            stepsTitle="Derivation"
            placeholder="Press Play to step through the proof."
            onStepClick={handleJumpTo}
          />
        </div>
      </div>
    </div>
  );
}