import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

/* ══════════════════════════════════════════════════════
   TRIG SCENE CORE — pure SVG renderer
   ══════════════════════════════════════════════════════ */

const STRUCT = {
  light: {
    grid: 'rgba(0,0,0,0.05)', axis: 'rgba(0,0,0,0.3)', axisArrow: '#1a2333',
    circle: 'rgba(0,0,0,0.14)', unitTick: 'rgba(0,0,0,0.25)',
    text: '#1a2333', textMuted: '#6b7a8d', textFaint: '#9aa5b4',
    rightAngle: 'rgba(0,0,0,0.25)', construction: 'rgba(0,0,0,0.15)',
    dotStroke: '#fff', formulaBg: 'rgba(255,255,255,0.88)', formulaBorder: 'rgba(0,0,0,0.08)',
    sqAlpha: 0.12, sqStrokeAlpha: 0.4,
  },
  dark: {
    grid: 'rgba(100,180,255,0.04)', axis: 'rgba(100,180,255,0.22)', axisArrow: '#8ab4d8',
    circle: 'rgba(100,180,255,0.18)', unitTick: 'rgba(100,180,255,0.2)',
    text: '#e2e8f0', textMuted: '#7a9ab8', textFaint: '#3a5a7a',
    rightAngle: 'rgba(100,180,255,0.2)', construction: 'rgba(100,180,255,0.12)',
    dotStroke: '#0f1724', formulaBg: 'rgba(22,31,48,0.88)', formulaBorder: 'rgba(100,180,255,0.1)',
    sqAlpha: 0.08, sqStrokeAlpha: 0.3,
  },
};

const FONT = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
const MONO = "'Consolas', 'SF Mono', monospace";

const arcPath = (cx, cy, r, startDeg, endDeg) => {
  const toR = (d) => (d * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toR(startDeg));
  const y1 = cy - r * Math.sin(toR(startDeg));
  const x2 = cx + r * Math.cos(toR(endDeg));
  const y2 = cy - r * Math.sin(toR(endDeg));
  const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 0 ${x2} ${y2}`;
};

const clampSvg = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

const Fade = ({ show, delay, children }) => (
  <g style={{
    opacity: show ? 1 : 0,
    transition: `opacity 0.55s ease-out ${delay || 0}s`,
    pointerEvents: show ? 'auto' : 'none',
  }}>
    {children}
  </g>
);

const TrigSceneCore = ({ angle = 0.7, scenario, stage = 0, dark = false, onAngleChange }) => {
  const svgRef = useRef(null);
  const dragging = useRef(false);
  const st = dark ? STRUCT.dark : STRUCT.light;

  const W = 520;
  const H = 500;
  const cx = 240;
  const cy = 255;
  const R = 155;

  const sinV = Math.sin(angle);
  const cosV = Math.cos(angle);
  const tanV = Math.abs(cosV) > 0.04 ? sinV / cosV : null;
  const secV = Math.abs(cosV) > 0.04 ? 1 / cosV : null;
  const cotV = Math.abs(sinV) > 0.04 ? cosV / sinV : null;
  const cscV = Math.abs(sinV) > 0.04 ? 1 / sinV : null;
  const degV = ((angle * 180 / Math.PI) % 360 + 360) % 360;

  const P = { x: cx + R * cosV, y: cy - R * sinV };
  const D = { x: P.x, y: cy };
  const tanPt = tanV !== null ? { x: cx + R, y: clampSvg(cy - R * tanV, -200, H + 200) } : null;
  const cotPt = cotV !== null ? { x: clampSvg(cx + R * cotV, -200, W + 200), y: cy - R } : null;

  const c = scenario.colors || {};
  const cSin = c.sin || '#2563eb';
  const cCos = c.cos || '#dc2626';
  const cRad = c.radius || '#16a34a';
  const cTan = c.tan || '#d97706';
  const cSec = c.sec || '#9333ea';
  const cCot = c.cot || '#0891b2';
  const cCsc = c.csc || '#be185d';
  const cPoint = c.point || '#d97706';
  const cAngle = c.angle || cRad;

  const visibleSet = useMemo(() => {
    const set = new Set();
    if (!scenario.stages) return set;
    for (let i = 0; i <= Math.min(stage, scenario.stages.length - 1); i++) {
      (scenario.stages[i].show || []).forEach((k) => set.add(k));
    }
    return set;
  }, [scenario, stage]);

  const currentShowList = (scenario.stages && scenario.stages[stage]) ? scenario.stages[stage].show || [] : [];
  const delayOf = (key) => {
    const idx = currentShowList.indexOf(key);
    return idx >= 0 ? idx * 0.12 : 0;
  };
  const vis = (key) => visibleSet.has(key);

  const calcAngle = (e) => {
    if (!svgRef.current) return null;
    const rect = svgRef.current.getBoundingClientRect();
    const mx = ((e.clientX || e.touches?.[0]?.clientX) - rect.left) / rect.width * W;
    const my = ((e.clientY || e.touches?.[0]?.clientY) - rect.top) / rect.height * H;
    return Math.atan2(cy - my, mx - cx);
  };

  const onDown = (e) => { e.preventDefault(); dragging.current = true; };
  const onMove = (e) => {
    if (!dragging.current) return;
    const a = calcAngle(e);
    if (a !== null && onAngleChange) onAngleChange(a);
  };
  const onUp = () => { dragging.current = false; };

  const sideSquare = (p1, p2, outward) => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const n = outward === 'left' ? { x: -dy, y: dx } : { x: dy, y: -dx };
    return `${p1.x},${p1.y} ${p2.x},${p2.y} ${p2.x + n.x},${p2.y + n.y} ${p1.x + n.x},${p1.y + n.y}`;
  };

  const sqCenter = (p1, p2, outward) => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const n = outward === 'left' ? { x: -dy, y: dx } : { x: dy, y: -dx };
    return {
      x: (p1.x + p2.x + p2.x + n.x + p1.x + n.x) / 4,
      y: (p1.y + p2.y + p2.y + n.y + p1.y + n.y) / 4,
    };
  };

  const radMid = { x: (cx + P.x) / 2, y: (cy + P.y) / 2 };
  const radNorm = { x: sinV * 14, y: cosV * 14 };

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      style={{ width: '100%', height: 'auto', cursor: dragging.current ? 'grabbing' : 'default', userSelect: 'none' }}
      onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}
      onTouchMove={onMove} onTouchEnd={onUp}
    >
      <defs>
        <marker id="sc-ah" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={st.axisArrow} />
        </marker>
      </defs>

      {/* Grid */}
      {[-1, -0.5, 0.5, 1].map((f) => (
        <React.Fragment key={f}>
          <line x1={cx + f * R} y1={cy - R - 25} x2={cx + f * R} y2={cy + R + 25} stroke={st.grid} strokeWidth="1" />
          <line x1={cx - R - 25} y1={cy - f * R} x2={cx + R + 25} y2={cy - f * R} stroke={st.grid} strokeWidth="1" />
        </React.Fragment>
      ))}

      {/* Axes */}
      <line x1={cx - R - 40} y1={cy} x2={cx + R + 40} y2={cy} stroke={st.axis} strokeWidth="1" markerEnd="url(#sc-ah)" />
      <line x1={cx} y1={cy + R + 35} x2={cx} y2={cy - R - 35} stroke={st.axis} strokeWidth="1" markerEnd="url(#sc-ah)" />
      <text x={cx + R + 44} y={cy - 6} fill={st.textMuted} fontSize="14" fontFamily={FONT} fontWeight="600">x</text>
      <text x={cx + 8} y={cy - R - 38} fill={st.textMuted} fontSize="14" fontFamily={FONT} fontWeight="600">y</text>

      {/* Unit ticks */}
      {[-1, 1].map((f) => (
        <React.Fragment key={`ut${f}`}>
          <line x1={cx + f * R} y1={cy - 4} x2={cx + f * R} y2={cy + 4} stroke={st.unitTick} strokeWidth="1.5" />
          <text x={cx + f * R} y={cy + 16} fill={st.textFaint} fontSize="10" fontFamily={MONO} textAnchor="middle">{f}</text>
          <line x1={cx - 4} y1={cy - f * R} x2={cx + 4} y2={cy - f * R} stroke={st.unitTick} strokeWidth="1.5" />
          <text x={cx - 10} y={cy - f * R + 4} fill={st.textFaint} fontSize="10" fontFamily={MONO} textAnchor="end">{f}</text>
        </React.Fragment>
      ))}

      {/* Unit circle */}
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={st.circle} strokeWidth="1.8" />

      {/* ═══ SCENARIO ELEMENTS ═══ */}

      <Fade show={vis('tanVertical')} delay={delayOf('tanVertical')}>
        <line x1={cx + R} y1={cy - R - 30} x2={cx + R} y2={cy + R + 30} stroke={st.construction} strokeWidth="1.5" strokeDasharray="6,4" />
        <text x={cx + R + 6} y={cy + R + 24} fill={st.textFaint} fontSize="9" fontFamily={MONO}>x = 1</text>
      </Fade>

      <Fade show={vis('cotHorizontal')} delay={delayOf('cotHorizontal')}>
        <line x1={cx - R - 20} y1={cy - R} x2={cx + R + 30} y2={cy - R} stroke={st.construction} strokeWidth="1.5" strokeDasharray="6,4" />
        <text x={cx - R - 18} y={cy - R - 6} fill={st.textFaint} fontSize="9" fontFamily={MONO}>y = 1</text>
      </Fade>

      <Fade show={vis('cosSeg')} delay={delayOf('cosSeg')}>
        <line x1={cx} y1={cy} x2={D.x} y2={cy} stroke={cCos} strokeWidth="3.5" />
      </Fade>

      <Fade show={vis('sinSeg')} delay={delayOf('sinSeg')}>
        <line x1={P.x} y1={P.y} x2={D.x} y2={D.y} stroke={cSin} strokeWidth="3.5" strokeDasharray="6,3" />
      </Fade>

      {tanPt && (
        <Fade show={vis('tanSeg')} delay={delayOf('tanSeg')}>
          <line x1={cx + R} y1={cy} x2={tanPt.x} y2={tanPt.y} stroke={cTan} strokeWidth="3" />
        </Fade>
      )}

      {tanPt && (
        <Fade show={vis('secSeg')} delay={delayOf('secSeg')}>
          <line x1={cx} y1={cy} x2={tanPt.x} y2={tanPt.y} stroke={cSec} strokeWidth="2.5" strokeDasharray="7,4" />
        </Fade>
      )}

      {cotPt && (
        <Fade show={vis('cotSeg')} delay={delayOf('cotSeg')}>
          <line x1={cx} y1={cy - R} x2={cotPt.x} y2={cotPt.y} stroke={cCot} strokeWidth="3" />
        </Fade>
      )}

      {cotPt && (
        <Fade show={vis('cscSeg')} delay={delayOf('cscSeg')}>
          <line x1={cx} y1={cy} x2={cotPt.x} y2={cotPt.y} stroke={cCsc} strokeWidth="2.5" strokeDasharray="7,4" />
        </Fade>
      )}

      <Fade show={vis('sinSquare')} delay={delayOf('sinSquare')}>
        <polygon points={sideSquare(D, P, 'right')} fill={cSin} fillOpacity={st.sqAlpha} stroke={cSin} strokeOpacity={st.sqStrokeAlpha} strokeWidth="1.5" />
        {(() => { const ctr = sqCenter(D, P, 'right'); return <text x={ctr.x} y={ctr.y} fill={cSin} fontSize="12" fontWeight="700" fontFamily={MONO} textAnchor="middle" dominantBaseline="middle" opacity="0.7">sin&sup2;&theta;</text>; })()}
      </Fade>

      <Fade show={vis('cosSquare')} delay={delayOf('cosSquare')}>
        <polygon points={sideSquare({ x: cx, y: cy }, D, 'right')} fill={cCos} fillOpacity={st.sqAlpha} stroke={cCos} strokeOpacity={st.sqStrokeAlpha} strokeWidth="1.5" />
        {(() => { const ctr = sqCenter({ x: cx, y: cy }, D, 'right'); return <text x={ctr.x} y={ctr.y} fill={cCos} fontSize="12" fontWeight="700" fontFamily={MONO} textAnchor="middle" dominantBaseline="middle" opacity="0.7">cos&sup2;&theta;</text>; })()}
      </Fade>

      <Fade show={vis('rightAngle')} delay={delayOf('rightAngle')}>
        {Math.abs(cosV) > 0.05 && Math.abs(sinV) > 0.05 && (
          <polyline
            points={`${D.x - 9 * Math.sign(cosV)},${D.y} ${D.x - 9 * Math.sign(cosV)},${D.y + 9 * Math.sign(sinV)} ${D.x},${D.y + 9 * Math.sign(sinV)}`}
            fill="none" stroke={st.rightAngle} strokeWidth="1.5"
          />
        )}
      </Fade>

      <Fade show={vis('angleArc')} delay={delayOf('angleArc')}>
        {degV > 0.5 && (
          <>
            <path d={`M ${cx} ${cy} L ${cx + 32} ${cy} ${arcPath(cx, cy, 32, 0, Math.min(degV, 359.5))} Z`} fill={cAngle} fillOpacity="0.06" />
            <path d={arcPath(cx, cy, 32, 0, Math.min(degV, 359.5))} stroke={cAngle} fill="none" strokeWidth="2" />
          </>
        )}
      </Fade>

      <Fade show={vis('angleLabel')} delay={delayOf('angleLabel')}>
        <text x={cx + 46 * Math.cos(angle / 2)} y={cy - 46 * Math.sin(angle / 2)} fill={cAngle} fontSize="15" fontWeight="700" fontFamily={FONT} textAnchor="middle" dominantBaseline="middle">&theta;</text>
        <text x={cx + 62 * Math.cos(angle / 2)} y={cy - 62 * Math.sin(angle / 2)} fill={st.textFaint} fontSize="9" fontWeight="600" fontFamily={MONO} textAnchor="middle" dominantBaseline="middle">{degV.toFixed(1)}&deg;</text>
      </Fade>

      <Fade show={vis('radius')} delay={delayOf('radius')}>
        <line x1={cx} y1={cy} x2={P.x} y2={P.y} stroke={cRad} strokeWidth="2.5" />
      </Fade>

      <Fade show={vis('radiusLabel')} delay={delayOf('radiusLabel')}>
        <rect x={radMid.x + radNorm.x - 11} y={radMid.y + radNorm.y - 10} width="22" height="18" rx="4" fill={st.formulaBg} stroke={st.formulaBorder} strokeWidth="1" />
        <text x={radMid.x + radNorm.x} y={radMid.y + radNorm.y + 3} fill={cRad} fontSize="13" fontWeight="800" fontFamily={MONO} textAnchor="middle" dominantBaseline="middle">1</text>
      </Fade>

      <Fade show={vis('sinLabel')} delay={delayOf('sinLabel')}>
        <text x={P.x + (cosV >= 0 ? 10 : -10)} y={(P.y + D.y) / 2} fill={cSin} fontSize="13" fontWeight="700" fontFamily={FONT} dominantBaseline="middle" textAnchor={cosV >= 0 ? 'start' : 'end'}>sin &theta;</text>
      </Fade>

      <Fade show={vis('cosLabel')} delay={delayOf('cosLabel')}>
        <text x={(cx + D.x) / 2} y={cy + (sinV >= 0 ? 18 : -8)} fill={cCos} fontSize="13" fontWeight="700" fontFamily={FONT} textAnchor="middle">cos &theta;</text>
      </Fade>

      {tanPt && (
        <Fade show={vis('tanLabel')} delay={delayOf('tanLabel')}>
          <text x={cx + R + 10} y={(cy + tanPt.y) / 2} fill={cTan} fontSize="12" fontWeight="700" fontFamily={FONT} dominantBaseline="middle">tan &theta;</text>
        </Fade>
      )}

      {tanPt && (
        <Fade show={vis('secLabel')} delay={delayOf('secLabel')}>
          <text x={(cx + tanPt.x) / 2 - 10} y={(cy + tanPt.y) / 2 - 12} fill={cSec} fontSize="12" fontWeight="700" fontFamily={FONT} textAnchor="middle">sec &theta;</text>
        </Fade>
      )}

      {cotPt && (
        <Fade show={vis('cotLabel')} delay={delayOf('cotLabel')}>
          <text x={(cx + cotPt.x) / 2} y={cy - R - 10} fill={cCot} fontSize="12" fontWeight="700" fontFamily={FONT} textAnchor="middle">cot &theta;</text>
        </Fade>
      )}

      {cotPt && (
        <Fade show={vis('cscLabel')} delay={delayOf('cscLabel')}>
          <text x={(cx + cotPt.x) / 2 + 10} y={(cy + (cy - R)) / 2 + 12} fill={cCsc} fontSize="12" fontWeight="700" fontFamily={FONT} textAnchor="middle">csc &theta;</text>
        </Fade>
      )}

      <Fade show={vis('formula')} delay={delayOf('formula')}>
        {scenario.stages && scenario.stages[stage] && scenario.stages[stage].formula && (
          <g>
            <rect x={cx - 130} y={H - 46} width="260" height="32" rx="6" fill={st.formulaBg} stroke={st.formulaBorder} strokeWidth="1" />
            <text x={cx} y={H - 26} fill={st.text} fontSize="14" fontWeight="700" fontFamily={MONO} textAnchor="middle" dominantBaseline="middle">{scenario.stages[stage].formula}</text>
          </g>
        )}
      </Fade>

      <Fade show={vis('point')} delay={delayOf('point')}>
        <circle cx={P.x} cy={P.y} r="8" fill={cPoint} stroke={st.dotStroke} strokeWidth="2.5" style={{ cursor: 'grab' }} onMouseDown={onDown} onTouchStart={onDown} />
      </Fade>
    </svg>
  );
};


/* ══════════════════════════════════════════════════════
   TRIG SCENE EXPLORER — wrapper with controls + explanation
   ══════════════════════════════════════════════════════ */

const explorerThemes = {
  light: {
    bg: '#f5f6fa', cardBg: '#fff', cardBorder: '#d0d7e2',
    cardShadow: '0 2px 12px rgba(0,0,0,0.07)',
    text: '#1a2333', textMuted: '#6b7a8d', textFaint: '#9aa5b4',
    accent: '#2b6cb0', accentText: '#fff',
    switchBg: '#d0d7e2', switchKnob: '#fff',
    stepBg: '#f8f9fc', stepBorder: '#e2e6ee',
    stepActiveBg: '#fff', stepActiveShadow: '0 1px 6px rgba(0,0,0,0.06)',
    stepNumber: '#2b6cb0', stepNumberBg: 'rgba(43,108,176,0.08)',
    tabBg: '#f0f2f7', tabBorder: '#d0d7e2', tabText: '#6b7a8d',
    controlBg: '#f0f2f7', controlBorder: '#d0d7e2',
    btnPlay: '#16a34a', btnPause: '#d97706', btnReset: '#64748b',
    valueBg: '#f8f9fc', valueBorder: '#e2e6ee',
    noteBg: '#f0f2f7', noteBorder: '#dde1ea',
  },
  dark: {
    bg: '#0f1724', cardBg: '#161f30', cardBorder: '#1e3450',
    cardShadow: '0 2px 16px rgba(0,0,0,0.3)',
    text: '#e2e8f0', textMuted: '#7a9ab8', textFaint: '#3a5a7a',
    accent: '#64b5f6', accentText: '#0f1724',
    switchBg: '#2d4a6f', switchKnob: '#64b5f6',
    stepBg: '#1a2744', stepBorder: '#2d4a6f',
    stepActiveBg: '#1e3450', stepActiveShadow: '0 1px 6px rgba(0,0,0,0.2)',
    stepNumber: '#64b5f6', stepNumberBg: 'rgba(100,181,246,0.1)',
    tabBg: '#1a2744', tabBorder: '#2d4a6f', tabText: '#5a7a9a',
    controlBg: '#1a2744', controlBorder: '#2d4a6f',
    btnPlay: '#4ade80', btnPause: '#fbbf24', btnReset: '#64748b',
    valueBg: '#1a2744', valueBorder: '#2d4a6f',
    noteBg: '#141e30', noteBorder: '#1e3450',
  },
};

const DEFAULT_SCENARIOS = [
  {
    id: 'sin-cos',
    title: 'sin & cos',
    subtitle: 'as side lengths',
    colors: { sin: '#2563eb', cos: '#dc2626', radius: '#16a34a', angle: '#16a34a', point: '#16a34a' },
    stages: [
      { show: ['radius', 'radiusLabel', 'point'], rule: 'The Unit Radius', description: 'Every radius of the unit circle has length exactly 1. This single fact transforms all trig ratios into simple lengths.' },
      { show: ['angleArc', 'angleLabel'], rule: 'Choose Angle \u03B8', description: 'The angle \u03B8 is measured counter-clockwise from the positive x-axis to the radius line. Drag the point to change it.' },
      { show: ['sinSeg', 'sinLabel'], rule: 'sin \u03B8 = Opposite', description: 'Drop a perpendicular from P to the x-axis. Since hypotenuse = 1: sin \u03B8 = opposite / 1 = opposite. The blue dashed segment IS sin \u03B8.' },
      { show: ['cosSeg', 'cosLabel', 'rightAngle'], rule: 'cos \u03B8 = Adjacent', description: 'The horizontal distance from O to the foot D. cos \u03B8 = adjacent / 1 = adjacent. The red segment IS cos \u03B8.' },
    ],
  },
  {
    id: 'tan-sec',
    title: 'tan & sec',
    subtitle: 'tangent line',
    colors: { sin: '#94a3b8', cos: '#94a3b8', tan: '#d97706', sec: '#9333ea', radius: '#16a34a', angle: '#16a34a', point: '#16a34a' },
    stages: [
      { show: ['radius', 'radiusLabel', 'point', 'angleArc', 'angleLabel', 'sinSeg', 'cosSeg', 'rightAngle'], rule: 'Start with the Triangle', description: 'The basic right triangle inscribed in the unit circle, with sin \u03B8 and cos \u03B8 as side lengths.' },
      { show: ['tanVertical'], rule: 'The Tangent Line', description: 'Draw a vertical line tangent to the circle at (1, 0). This is literally where the word \u201Ctangent\u201D comes from \u2014 it touches the circle.' },
      { show: ['tanSeg', 'tanLabel'], rule: 'tan \u03B8 = Segment Length', description: 'Extend the radius until it hits the tangent. The vertical segment from (1,0) to the intersection = tan \u03B8 = sin \u03B8 / cos \u03B8.' },
      { show: ['secSeg', 'secLabel'], rule: 'sec \u03B8 = Full Line', description: 'Distance from origin O to the tangent intersection = sec \u03B8 = 1/cos \u03B8. The \u201Csecant\u201D cuts through the circle.' },
    ],
  },
  {
    id: 'cot-csc',
    title: 'cot & csc',
    subtitle: 'co-tangent line',
    colors: { sin: '#94a3b8', cos: '#94a3b8', cot: '#0891b2', csc: '#be185d', radius: '#16a34a', angle: '#16a34a', point: '#16a34a' },
    stages: [
      { show: ['radius', 'radiusLabel', 'point', 'angleArc', 'angleLabel', 'sinSeg', 'cosSeg', 'rightAngle'], rule: 'Start with the Triangle', description: 'The unit circle triangle with sin \u03B8 and cos \u03B8.' },
      { show: ['cotHorizontal'], rule: 'The Co-tangent Line', description: 'Draw a horizontal line tangent to the circle at (0, 1). \u201CCo-\u201D always means complement.' },
      { show: ['cotSeg', 'cotLabel'], rule: 'cot \u03B8 = Segment Length', description: 'Extend radius to hit this line. Horizontal segment from (0,1) to intersection = cot \u03B8 = cos \u03B8 / sin \u03B8.' },
      { show: ['cscSeg', 'cscLabel'], rule: 'csc \u03B8 = Full Line', description: 'Distance from O to the co-tangent intersection = csc \u03B8 = 1/sin \u03B8.' },
    ],
  },
  {
    id: 'pythagorean',
    title: 'Pythagorean',
    subtitle: 'sin\u00B2 + cos\u00B2 = 1',
    colors: { sin: '#2563eb', cos: '#dc2626', radius: '#16a34a', angle: '#16a34a', point: '#16a34a' },
    stages: [
      { show: ['radius', 'radiusLabel', 'point', 'angleArc', 'angleLabel', 'sinSeg', 'sinLabel', 'cosSeg', 'cosLabel', 'rightAngle'], rule: 'The Right Triangle', description: 'Hypotenuse = 1, opposite = sin \u03B8, adjacent = cos \u03B8. Now apply the Pythagorean theorem.' },
      { show: ['sinSquare'], rule: 'Square on the Opposite', description: 'Construct a square on the sin \u03B8 side. Area = sin\u00B2\u03B8. Watch it grow and shrink as you drag \u03B8.' },
      { show: ['cosSquare'], rule: 'Square on the Adjacent', description: 'Construct a square on the cos \u03B8 side. Area = cos\u00B2\u03B8. As one grows, the other shrinks.' },
      { show: ['formula'], rule: 'sin\u00B2\u03B8 + cos\u00B2\u03B8 = 1\u00B2', description: 'By the Pythagorean theorem: the two squares always sum to the hypotenuse squared, which is 1. Always. For any angle.', formula: 'sin\u00B2\u03B8 + cos\u00B2\u03B8 = 1' },
    ],
  },
];

const TrigSceneExplorer = ({ scenarios = DEFAULT_SCENARIOS }) => {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [stage, setStage] = useState(0);
  const [angle, setAngle] = useState(0.75);
  const [dark, setDark] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playRef = useRef(null);

  const t = dark ? explorerThemes.dark : explorerThemes.light;
  const scenario = scenarios[scenarioIdx];
  const maxStage = scenario.stages ? scenario.stages.length - 1 : 0;

  useEffect(() => {
    if (isPlaying) {
      playRef.current = setInterval(() => {
        setStage((prev) => {
          if (prev < maxStage) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 2200);
    }
    return () => { if (playRef.current) clearInterval(playRef.current); };
  }, [isPlaying, maxStage]);

  const switchScenario = (idx) => { setScenarioIdx(idx); setStage(0); setIsPlaying(false); };
  const handleAngleChange = useCallback((a) => setAngle(a), []);

  const sinV = Math.sin(angle);
  const cosV = Math.cos(angle);
  const degV = ((angle * 180 / Math.PI) % 360 + 360) % 360;

  const s = {
    page: { background: t.bg, minHeight: '100vh', padding: '24px 16px', fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif", color: t.text, transition: 'background 0.3s, color 0.3s', userSelect: 'none', WebkitUserSelect: 'none' },
    container: { maxWidth: 1180, margin: '0 auto' },
    topBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
    titleGroup: { display: 'flex', alignItems: 'baseline', gap: 12 },
    title: { fontSize: 22, fontWeight: 700, margin: 0 },
    subtitle: { fontSize: 12, color: t.textMuted, letterSpacing: 3, textTransform: 'uppercase' },
    themeToggle: { display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' },
    themeLabel: { fontSize: 12, color: t.textMuted },
    switchTrack: { width: 44, height: 24, borderRadius: 12, position: 'relative', background: dark ? t.accent : t.switchBg, transition: 'background 0.25s', cursor: 'pointer' },
    switchKnob: { width: 18, height: 18, borderRadius: '50%', position: 'absolute', top: 3, left: dark ? 23 : 3, background: dark ? t.switchKnob : '#fff', transition: 'left 0.25s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' },
    card: { background: t.cardBg, border: `1px solid ${t.cardBorder}`, borderRadius: 10, boxShadow: t.cardShadow, overflow: 'hidden', transition: 'background 0.3s' },
    tabs: { display: 'flex', gap: 0, background: t.controlBg, padding: '0 16px', borderBottom: `1px solid ${t.cardBorder}` },
    tab: (active) => ({ padding: '12px 18px', fontSize: 12, fontWeight: 700, borderBottom: active ? `3px solid ${t.accent}` : '3px solid transparent', background: 'transparent', color: active ? t.accent : t.tabText, cursor: 'pointer', border: 'none', borderBottom: active ? `3px solid ${t.accent}` : '3px solid transparent', fontFamily: 'inherit', transition: 'all 0.15s' }),
    tabSub: { fontSize: 10, color: t.textFaint, fontWeight: 400, marginLeft: 6 },
    controlRow: { display: 'flex', gap: 6, alignItems: 'center', padding: '10px 16px', background: t.controlBg, borderBottom: `1px solid ${t.cardBorder}` },
    ctrlBtn: (bg, disabled) => ({ padding: '6px 14px', borderRadius: 6, border: 'none', background: disabled ? t.textFaint : bg, color: '#fff', cursor: disabled ? 'default' : 'pointer', fontSize: 12, fontWeight: 700, fontFamily: 'inherit', opacity: disabled ? 0.4 : 1, display: 'flex', alignItems: 'center', gap: 5 }),
    stageLabel: { fontSize: 12, fontFamily: MONO, fontWeight: 600, color: t.textMuted, marginLeft: 'auto' },
    bodyRow: { display: 'flex' },
    scenePanel: { flex: '0 0 520px', padding: 16 },
    explainPanel: { flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 8, borderLeft: `1px solid ${t.cardBorder}`, minWidth: 260, maxHeight: 530, overflowY: 'auto' },
    explainTitle: { fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: t.textFaint, marginBottom: 4, paddingBottom: 6, borderBottom: `1px solid ${t.stepBorder}` },
    stepCard: (active, visible) => ({ background: active ? t.stepActiveBg : t.stepBg, border: `1px solid ${active ? t.accent : t.stepBorder}`, borderLeft: `3px solid ${active ? t.accent : (visible ? t.stepBorder : 'transparent')}`, borderRadius: '0 8px 8px 0', padding: '12px 14px', transition: 'all 0.3s', boxShadow: active ? t.stepActiveShadow : 'none', cursor: visible ? 'pointer' : 'default', opacity: visible ? 1 : 0.3 }),
    stepBadge: (active) => ({ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: active ? t.stepNumber : t.textFaint, background: active ? t.stepNumberBg : 'transparent', padding: '2px 8px', borderRadius: 4 }),
    stepRule: { fontSize: 14, fontWeight: 700, color: t.text, marginBottom: 4, marginTop: 6, lineHeight: 1.3 },
    stepDesc: { fontSize: 12, color: t.textMuted, lineHeight: 1.55, margin: 0 },
    valueStrip: { display: 'flex', gap: 8, padding: '10px 16px', borderTop: `1px solid ${t.cardBorder}` },
    valBox: (bc) => ({ flex: 1, background: t.valueBg, border: `1px solid ${t.valueBorder}`, borderRadius: 7, padding: '8px 10px', borderLeft: `3px solid ${bc}`, textAlign: 'center' }),
    valLabel: { fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: t.textFaint, marginBottom: 2 },
    valNum: (color) => ({ fontSize: 15, fontWeight: 700, fontFamily: MONO, color }),
    noteBox: { background: t.noteBg, border: `1px solid ${t.noteBorder}`, borderRadius: 8, padding: '8px 12px', fontSize: 11, color: t.textMuted, lineHeight: 1.5, fontStyle: 'italic', marginTop: 'auto' },
  };

  return (
    <div style={s.page}>
      <div style={s.container}>
        <div style={s.topBar}>
          <div style={s.titleGroup}>
            <h2 style={s.title}>Trig Identities</h2>
            <span style={s.subtitle}>Visual Scene Explorer</span>
          </div>
          <div style={s.themeToggle} onClick={() => setDark(!dark)}>
            <span style={s.themeLabel}>{dark ? '\u263E Dark' : '\u2600 Light'}</span>
            <div style={s.switchTrack}><div style={s.switchKnob} /></div>
          </div>
        </div>

        <div style={s.card}>
          {/* Scenario tabs */}
          <div style={s.tabs}>
            {scenarios.map((sc, i) => (
              <button key={sc.id} style={s.tab(scenarioIdx === i)} onClick={() => switchScenario(i)}>
                {sc.title}
                {sc.subtitle && <span style={s.tabSub}>{sc.subtitle}</span>}
              </button>
            ))}
          </div>

          {/* Stage controls */}
          <div style={s.controlRow}>
            <button style={s.ctrlBtn(t.accent, stage === 0)} onClick={() => setStage((p) => Math.max(0, p - 1))}>
              &laquo; Prev
            </button>
            <button style={s.ctrlBtn(isPlaying ? t.btnPause : t.btnPlay, false)} onClick={() => setIsPlaying((p) => !p)}>
              {isPlaying ? '\u275A\u275A Pause' : '\u25B6 Play'}
            </button>
            <button style={s.ctrlBtn(t.accent, stage === maxStage)} onClick={() => setStage((p) => Math.min(maxStage, p + 1))}>
              Next &raquo;
            </button>
            <button style={s.ctrlBtn(t.btnReset, false)} onClick={() => { setStage(0); setIsPlaying(false); }}>
              &#x21BA; Reset
            </button>
            <span style={s.stageLabel}>Stage {stage + 1} / {maxStage + 1}</span>
          </div>

          {/* Body: scene + explanation */}
          <div style={s.bodyRow}>
            <div style={s.scenePanel}>
              <TrigSceneCore
                angle={angle}
                scenario={scenario}
                stage={stage}
                dark={dark}
                onAngleChange={handleAngleChange}
              />
            </div>

            <div style={s.explainPanel}>
              <div style={s.explainTitle}>Construction Steps</div>
              {scenario.stages && scenario.stages.map((stData, i) => {
                const active = i === stage;
                const visible = i <= stage;
                return (
                  <div key={i} style={s.stepCard(active, visible)} onClick={() => { if (visible) setStage(i); }}>
                    <span style={s.stepBadge(active)}>Step {i + 1}</span>
                    <div style={s.stepRule}>{stData.rule}</div>
                    {visible && <p style={s.stepDesc}>{stData.description}</p>}
                  </div>
                );
              })}
              <div style={s.noteBox}>
                Drag the point on the circle to change &theta;. Click any completed step to revisit it. Use Play to auto-advance.
              </div>
            </div>
          </div>

          {/* Values strip */}
          <div style={s.valueStrip}>
            <div style={s.valBox(scenario.colors?.angle || '#16a34a')}>
              <div style={s.valLabel}>&theta;</div>
              <div style={s.valNum(scenario.colors?.angle || '#16a34a')}>{degV.toFixed(1)}&deg;</div>
            </div>
            <div style={s.valBox(scenario.colors?.sin || '#2563eb')}>
              <div style={s.valLabel}>sin &theta;</div>
              <div style={s.valNum(scenario.colors?.sin || '#2563eb')}>{sinV.toFixed(5)}</div>
            </div>
            <div style={s.valBox(scenario.colors?.cos || '#dc2626')}>
              <div style={s.valLabel}>cos &theta;</div>
              <div style={s.valNum(scenario.colors?.cos || '#dc2626')}>{cosV.toFixed(5)}</div>
            </div>
            {scenario.id === 'tan-sec' && (
              <>
                <div style={s.valBox(scenario.colors?.tan || '#d97706')}>
                  <div style={s.valLabel}>tan &theta;</div>
                  <div style={s.valNum(scenario.colors?.tan || '#d97706')}>{Math.abs(cosV) < 0.04 ? 'Undef' : (sinV / cosV).toFixed(5)}</div>
                </div>
                <div style={s.valBox(scenario.colors?.sec || '#9333ea')}>
                  <div style={s.valLabel}>sec &theta;</div>
                  <div style={s.valNum(scenario.colors?.sec || '#9333ea')}>{Math.abs(cosV) < 0.04 ? 'Undef' : (1 / cosV).toFixed(5)}</div>
                </div>
              </>
            )}
            {scenario.id === 'cot-csc' && (
              <>
                <div style={s.valBox(scenario.colors?.cot || '#0891b2')}>
                  <div style={s.valLabel}>cot &theta;</div>
                  <div style={s.valNum(scenario.colors?.cot || '#0891b2')}>{Math.abs(sinV) < 0.04 ? 'Undef' : (cosV / sinV).toFixed(5)}</div>
                </div>
                <div style={s.valBox(scenario.colors?.csc || '#be185d')}>
                  <div style={s.valLabel}>csc &theta;</div>
                  <div style={s.valNum(scenario.colors?.csc || '#be185d')}>{Math.abs(sinV) < 0.04 ? 'Undef' : (1 / sinV).toFixed(5)}</div>
                </div>
              </>
            )}
            {scenario.id === 'pythagorean' && (
              <>
                <div style={s.valBox(scenario.colors?.sin || '#2563eb')}>
                  <div style={s.valLabel}>sin&sup2;&theta;</div>
                  <div style={s.valNum(scenario.colors?.sin || '#2563eb')}>{(sinV ** 2).toFixed(5)}</div>
                </div>
                <div style={s.valBox(scenario.colors?.cos || '#dc2626')}>
                  <div style={s.valLabel}>cos&sup2;&theta;</div>
                  <div style={s.valNum(scenario.colors?.cos || '#dc2626')}>{(cosV ** 2).toFixed(5)}</div>
                </div>
                <div style={s.valBox(scenario.colors?.radius || '#16a34a')}>
                  <div style={s.valLabel}>Sum</div>
                  <div style={s.valNum(scenario.colors?.radius || '#16a34a')}>{(sinV ** 2 + cosV ** 2).toFixed(5)}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrigSceneExplorer;