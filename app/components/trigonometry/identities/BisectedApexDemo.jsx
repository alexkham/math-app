import React, { useState, useEffect } from 'react';

/* ============================================================
   BisectedApexDemo — v3
   Same as v2, with optional controlled `theta` + `onThetaChange`
   so a parent (e.g. DoubleAngleExplorer) can lift slider state.
   ============================================================ */

const COLORS = {
  deepBlue:    '#4F46E5',
  midBlue:     '#818CF8',
  red:         '#DC2626',
  panelBg:     '#f8fafc',
  panelBgDeep: '#E2E8F0',
  borderSoft:  '#e2e8f0',
  text:        '#1e3a5f',
  textMuted:   '#64748b',
  textFaint:   '#94a3b8',
  borderTer:   'rgba(0,0,0,0.15)',
  borderSec:   'rgba(0,0,0,0.30)',
  white:       '#ffffff',
  fillTri:     '#818CF8',
};

const FULL_STATE = {
  showRadii:     true,
  showApex:      true,
  showTriFill:   true,
  showBisector:  true,
  showSubAngles: true,
  showSinLabels: true,
  showMetrics:   true,
};

const DEFAULT_SCENARIO = {
  identity: {
    fnName:   'sin',
    lhs:      '2θ',
    lhsColor: 'red',
    rhsParts: [
      { text: '2',     color: 'text' },
      { text: 'sin θ', color: 'midBlue' },
      { text: ' · ',   color: 'text' },
      { text: 'cos θ', color: 'deepBlue' },
    ],
  },
  steps: [
    {
      rule: 'Setup',
      description: 'Draw two radii OA and OB of length 1, meeting at center O with angle 2θ between them. Together with chord AB they form an isosceles triangle.',
      state: { showRadii: true, showApex: true },
    },
    {
      rule: 'Area, first way',
      description: 'The area of a triangle equals half the product of two sides times the sine of the angle between them. The radii OA and OB (each of length 1) meet at angle 2θ, so area = ½ · 1 · 1 · sin(2θ).',
      state: { showRadii: true, showApex: true, showTriFill: true },
    },
    {
      rule: 'Bisect',
      description: 'Drop the perpendicular bisector OM from center O onto chord AB. It splits the apex angle 2θ into two equal halves of θ, and splits the triangle into two congruent right triangles.',
      state: {
        showRadii: true, showApex: true, showTriFill: true,
        showBisector: true, showSubAngles: true,
      },
    },
    {
      rule: 'Read off the legs',
      description: 'In right triangle OMA, the hypotenuse OA = 1 and the angle at O is θ. So leg MA = sin θ (the half-chord) and leg OM = cos θ (the bisector).',
      state: {
        showRadii: true, showApex: true, showTriFill: true,
        showBisector: true, showSubAngles: true, showSinLabels: true,
      },
    },
    {
      rule: 'Area, second way',
      description: 'Each of the two right triangles has area ½ · sin θ · cos θ. Summing both gives total area = sin θ · cos θ.',
      state: {
        showRadii: true, showApex: true, showTriFill: true,
        showBisector: true, showSubAngles: true, showSinLabels: true,
      },
    },
    {
      rule: 'Equate',
      description: 'Both expressions describe the same triangle: ½ sin(2θ) = sin θ · cos θ. Multiplying by 2 gives the identity: sin(2θ) = 2 sin θ · cos θ.',
      state: { ...FULL_STATE },
    },
  ],
  metricPairs: [
    { label: 'sin(2θ)',       compute: (th) => Math.sin(2 * th) },
    { label: '2 sin θ cos θ', compute: (th) => 2 * Math.sin(th) * Math.cos(th) },
  ],
};

function colorOf(name) {
  return COLORS[name] || COLORS.text;
}

/* ---- FadeGroup ---- */
function FadeGroup({ visible, duration = 400, children }) {
  return (
    <g style={{ opacity: visible ? 1 : 0, transition: `opacity ${duration}ms ease` }}>
      {children}
    </g>
  );
}

/* ---- Core SVG renderer (pure) ---- */
function BisectedApexCore({
  theta = 35,
  showRadii = true, showApex = true, showTriFill = true,
  showBisector = true, showSubAngles = true, showSinLabels = true,
  showLegend = false,
  subAngleAngleThreshold = 22,
  cx = 340, cy = 210, R = 170,
  viewBox = '0 0 680 420',
}) {
  const th = (theta * Math.PI) / 180;
  const s  = Math.sin(th);
  const c  = Math.cos(th);

  const ax = cx + R * c, ay = cy - R * s;
  const bx = cx + R * c, by = cy + R * s;
  const mx = cx + R * c, my = cy;

  const arcR = Math.min(32, R * c * 0.6);
  const subR = arcR * 0.55;

  const apexStartX = cx + arcR * c, apexStartY = cy - arcR * s;
  const apexEndX   = cx + arcR * c, apexEndY   = cy + arcR * s;

  const subStartX  = cx + subR,        subStartY  = cy;
  const subUpEndX  = cx + subR * c,    subUpEndY  = cy - subR * s;
  const subDnEndX  = cx + subR * c,    subDnEndY  = cy + subR * s;

  const halfTh   = th / 2;
  const subLblR  = subR + 12;
  const subLblX  = cx + subLblR * Math.cos(halfTh);
  const subLblYU = cy - subLblR * Math.sin(halfTh);
  const subLblYD = cy + subLblR * Math.sin(halfTh);

  const subAnglesActuallyVisible = showSubAngles && theta >= subAngleAngleThreshold;
  const showRA = showBisector && R * c > 30 && R * s > 12;

  return (
    <svg viewBox={viewBox} style={{ display: 'block', width: '100%' }} role="img">
      <title>Bisected apex scene</title>

      <circle cx={cx} cy={cy} r={R} fill="none" stroke={COLORS.borderSec} strokeWidth="1" />
      <line x1={cx - R - 10} y1={cy} x2={cx + R + 10} y2={cy}
            stroke={COLORS.borderTer} strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1={cx} y1={cy - R - 10} x2={cx} y2={cy + R + 10}
            stroke={COLORS.borderTer} strokeWidth="0.5" strokeDasharray="3 3" />

      {/* Legend */}
      {showLegend && (
        <g transform="translate(10, 16)">
          <rect x="0" y="0" width="152" height="220" rx="6"
                fill={COLORS.panelBg} stroke={COLORS.borderTer} strokeWidth="0.5" />
          <text x="12" y="20" fontSize="10" fontWeight="600" fill={COLORS.textMuted}
                style={{ textTransform: 'uppercase', letterSpacing: '1.2px' }}>Legend</text>

          <text x="12" y="42" fontSize="12" fill={COLORS.text}>
            <tspan fontStyle="italic" fontWeight="500">O</tspan>
            <tspan dx="4" fill={COLORS.textMuted}>— center</tspan>
          </text>

          <g style={{ opacity: showRadii ? 1 : 0, transition: 'opacity 400ms ease' }}>
            <text x="12" y="62" fontSize="12" fill={COLORS.text}>
              <tspan fontStyle="italic" fontWeight="500">A, B</tspan>
              <tspan dx="4" fill={COLORS.textMuted}>— chord ends</tspan>
            </text>
            <text x="12" y="82" fontSize="12" fill={COLORS.text}>
              <tspan fontStyle="italic" fontWeight="500">a, b</tspan>
              <tspan dx="4" fill={COLORS.textMuted}>— sides (= 1)</tspan>
            </text>
          </g>

          <g style={{ opacity: showApex ? 1 : 0, transition: 'opacity 400ms ease' }}>
            <text x="12" y="102" fontSize="12" fill={COLORS.text}>
              <tspan fontStyle="italic" fontWeight="500" fill={COLORS.red}>C</tspan>
              <tspan dx="4" fill={COLORS.textMuted}>— apex (= 2θ)</tspan>
            </text>
          </g>

          <g style={{ opacity: showBisector ? 1 : 0, transition: 'opacity 400ms ease' }}>
            <text x="12" y="122" fontSize="12" fill={COLORS.text}>
              <tspan fontStyle="italic" fontWeight="500">M</tspan>
              <tspan dx="4" fill={COLORS.textMuted}>— bisector foot</tspan>
            </text>
            <text x="12" y="142" fontSize="12" fill={COLORS.text}>
              <tspan fontStyle="italic" fontWeight="500" fill={COLORS.deepBlue}>cos θ</tspan>
              <tspan dx="4" fill={COLORS.textMuted}>— OM length</tspan>
            </text>
          </g>

          <g style={{ opacity: showSubAngles ? 1 : 0, transition: 'opacity 400ms ease' }}>
            <text x="12" y="162" fontSize="12" fill={COLORS.text}>
              <tspan fontStyle="italic" fontWeight="500">θ</tspan>
              <tspan dx="4" fill={COLORS.textMuted}>— half of C</tspan>
            </text>
          </g>

          <g style={{ opacity: showSinLabels ? 1 : 0, transition: 'opacity 400ms ease' }}>
            <text x="12" y="182" fontSize="12" fill={COLORS.text}>
              <tspan fontStyle="italic" fontWeight="500" fill={COLORS.midBlue}>sin θ</tspan>
              <tspan dx="4" fill={COLORS.textMuted}>— half-chord</tspan>
            </text>
          </g>
        </g>
      )}

      <FadeGroup visible={showTriFill}>
        <polygon
          points={`${cx},${cy} ${ax},${ay} ${bx},${by}`}
          style={{ fill: COLORS.fillTri, fillOpacity: 0.12, stroke: 'none' }}
        />
      </FadeGroup>

      <FadeGroup visible={showRadii}>
        <line x1={cx} y1={cy} x2={ax} y2={ay}
              stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
        <line x1={cx} y1={cy} x2={bx} y2={by}
              stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
        <line x1={ax} y1={ay} x2={bx} y2={by}
              stroke={COLORS.midBlue} strokeWidth="2.5" strokeLinecap="round" />
      </FadeGroup>

      <FadeGroup visible={showBisector}>
        <line x1={cx} y1={cy} x2={mx} y2={my}
              stroke={COLORS.deepBlue} strokeWidth="2.5" strokeLinecap="round" />
        {showRA && (
          <polyline
            points={`${mx - 8},${my} ${mx - 8},${my - 8} ${mx},${my - 8}`}
            fill="none" stroke={COLORS.deepBlue} strokeWidth="0.8"
          />
        )}
      </FadeGroup>

      <FadeGroup visible={showApex}>
        <path
          d={`M ${apexStartX} ${apexStartY} A ${arcR} ${arcR} 0 0 1 ${apexEndX} ${apexEndY}`}
          fill="none" stroke={COLORS.red} strokeWidth="1.5"
        />
      </FadeGroup>

      <FadeGroup visible={subAnglesActuallyVisible}>
        <path
          d={`M ${subStartX} ${subStartY} A ${subR} ${subR} 0 0 0 ${subUpEndX} ${subUpEndY}`}
          fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" strokeOpacity="0.7"
        />
        <path
          d={`M ${subStartX} ${subStartY} A ${subR} ${subR} 0 0 1 ${subDnEndX} ${subDnEndY}`}
          fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" strokeOpacity="0.7"
        />
      </FadeGroup>

      <circle cx={cx} cy={cy} r={3} fill={COLORS.text} />
      <FadeGroup visible={showRadii}>
        <circle cx={ax} cy={ay} r={3} fill={COLORS.text} />
        <circle cx={bx} cy={by} r={3} fill={COLORS.text} />
      </FadeGroup>
      <FadeGroup visible={showBisector}>
        <circle cx={mx} cy={my} r={2.5} fill={COLORS.deepBlue} />
      </FadeGroup>

      <text x={cx - 8} y={cy + 16} textAnchor="end"
            fontSize="12" fill={COLORS.textMuted} fontStyle="italic">O</text>

      <FadeGroup visible={showRadii}>
        <text x={ax + 8} y={ay - 4} fontSize="12" fill={COLORS.textMuted} fontStyle="italic">A</text>
        <text x={bx + 8} y={by + 14} fontSize="12" fill={COLORS.textMuted} fontStyle="italic">B</text>
      </FadeGroup>

      <FadeGroup visible={showBisector}>
        <text x={mx + 8} y={my + 18} fontSize="12" fill={COLORS.textMuted} fontStyle="italic">M</text>
      </FadeGroup>

      <FadeGroup visible={showRadii}>
        <text
          x={(cx + ax) / 2 - s * 18}
          y={(cy + ay) / 2 - c * 18 + 4}
          textAnchor="middle"
          fontSize="14" fontWeight="500" fill={COLORS.text}
        >a = 1</text>
        <text
          x={(cx + bx) / 2 - s * 18}
          y={(cy + by) / 2 + c * 18 + 4}
          textAnchor="middle"
          fontSize="14" fontWeight="500" fill={COLORS.text}
        >b = 1</text>
      </FadeGroup>

      <FadeGroup visible={showApex}>
        <text x={cx + arcR + 6} y={cy + 14}
              fontSize="14" fontWeight="500" fontStyle="italic" fill={COLORS.red}>C = 2θ</text>
      </FadeGroup>

      <FadeGroup visible={subAnglesActuallyVisible}>
        <text x={subLblX - 4} y={subLblYU + 4} fontSize="12" fill={COLORS.textMuted} fontStyle="italic">θ</text>
        <text x={subLblX - 4} y={subLblYD + 4} fontSize="12" fill={COLORS.textMuted} fontStyle="italic">θ</text>
      </FadeGroup>

      <FadeGroup visible={showBisector}>
        <text x={(cx + mx) / 2} y={cy - 8} textAnchor="middle"
              fontSize="14" fontWeight="500" fontStyle="italic" fill={COLORS.deepBlue}>cos θ</text>
      </FadeGroup>

      <FadeGroup visible={showSinLabels}>
        <text x={mx + 10} y={(ay + my) / 2 + 4}
              fontSize="14" fontWeight="500" fontStyle="italic" fill={COLORS.midBlue}>sin θ</text>
        <text x={mx + 10} y={(by + my) / 2 + 4}
              fontSize="14" fontWeight="500" fontStyle="italic" fill={COLORS.midBlue}>sin θ</text>
      </FadeGroup>
    </svg>
  );
}

/* ---- Inline mini SolutionPanel ---- */
function MiniSolutionPanel({ steps, tabs = [], stepsTitle = 'Derivation', placeholder }) {
  const [activeTab, setActiveTab] = useState('steps');

  const stepsTab = {
    key: 'steps',
    label: stepsTitle,
    order: 0,
    visible: true,
    render: () => (
      <div>
        {steps.length === 0 && (
          <div style={{
            background: COLORS.white,
            border: `1px dashed ${COLORS.borderSoft}`,
            borderRadius: '8px', padding: '40px 24px', textAlign: 'center',
            fontSize: '0.85rem', color: COLORS.textFaint, fontStyle: 'italic',
            minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {placeholder}
          </div>
        )}
        {steps.map((step, i) => (
          <div key={i} style={{
            background: COLORS.white,
            border: `1px solid ${COLORS.borderSoft}`,
            borderLeft: `3px solid ${COLORS.deepBlue}`,
            borderRadius: '0 8px 8px 0',
            padding: '12px 14px',
            marginBottom: '10px',
            animation: 'bae-fade-in 0.4s ease',
          }}>
            <div style={{
              fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '1.4px',
              color: COLORS.deepBlue, fontWeight: 600,
            }}>Step {i + 1}</div>
            <div style={{
              fontWeight: 600, fontSize: '0.92rem', color: COLORS.text, margin: '3px 0 2px',
            }}>{step.rule}</div>
            <p style={{
              fontSize: '0.8rem', color: COLORS.textMuted, lineHeight: 1.5, margin: 0,
            }}>{step.description}</p>
          </div>
        ))}
      </div>
    ),
  };

  const allTabs = [stepsTab, ...tabs.map(t => ({
    ...t, order: t.order ?? 10, visible: t.visible ?? true,
  }))];
  const visibleTabs = allTabs.filter(t => t.visible).sort((a, b) => a.order - b.order);
  const activeExists = visibleTabs.some(t => t.key === activeTab);
  const effective = activeExists ? activeTab : visibleTabs[0]?.key;
  const current = visibleTabs.find(t => t.key === effective);
  const showTabBar = visibleTabs.length > 1;

  return (
    <div>
      <style>{`
        @keyframes bae-fade-in {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {showTabBar && (
        <div style={{
          display: 'flex', gap: '2px', background: COLORS.panelBgDeep,
          borderRadius: '8px', padding: '3px', marginBottom: '16px',
        }}>
          {visibleTabs.map(t => (
            <button key={t.key} onClick={() => setActiveTab(t.key)} style={{
              flex: 1, padding: '8px 16px', border: 'none', borderRadius: '6px',
              fontFamily: 'inherit', fontSize: '0.82rem', fontWeight: 500, cursor: 'pointer',
              background: effective === t.key ? COLORS.white : 'transparent',
              color: effective === t.key ? COLORS.text : COLORS.textMuted,
              boxShadow: effective === t.key ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
            }}>
              {t.label}
            </button>
          ))}
        </div>
      )}

      {!showTabBar && (
        <div style={{
          fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1.6px',
          color: COLORS.textMuted, marginBottom: '14px', fontWeight: 600,
        }}>{stepsTitle}</div>
      )}

      {current && current.render()}
    </div>
  );
}

/* ---- Identity bar ---- */
function IdentityBar({ identity }) {
  if (!identity) return null;
  const { fnName = 'sin', lhs, lhsColor = 'red', rhsParts = [] } = identity;
  return (
    <div style={{
      fontSize: '1.05rem', padding: '12px 16px',
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px', textAlign: 'center', marginBottom: '12px',
      fontFamily: 'Georgia, serif', color: COLORS.text,
    }}>
      <em>{fnName}</em>(
      <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
      ) ={' '}
      {rhsParts.map((part, i) => (
        <span key={i} style={{
          color: colorOf(part.color),
          fontStyle: part.color !== 'text' ? 'italic' : 'normal',
        }}>{part.text}</span>
      ))}
    </div>
  );
}

/* ---- Control button ---- */
function ControlButton({ onClick, disabled, children, title, primary }) {
  return (
    <button onClick={onClick} disabled={disabled} title={title} style={{
      border: `1px solid ${primary ? COLORS.deepBlue : COLORS.borderSoft}`,
      background: primary ? COLORS.deepBlue : COLORS.white,
      color: primary ? COLORS.white : COLORS.text,
      padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 500,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1, fontFamily: 'inherit', minWidth: '52px',
      transition: 'background 0.15s, opacity 0.15s',
    }}>{children}</button>
  );
}

/* ---- Metric card ---- */
function MetricCard({ label, value, visible }) {
  return (
    <div style={{
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px', padding: '0.75rem 1rem',
      opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease',
    }}>
      <p style={{
        fontSize: '0.8rem', color: COLORS.textMuted, margin: '0 0 4px', fontStyle: 'italic',
      }}>{label}</p>
      <p style={{
        fontSize: '1.35rem', fontWeight: 500, fontVariantNumeric: 'tabular-nums',
        margin: 0, color: COLORS.deepBlue,
      }}>{value}</p>
    </div>
  );
}

/* ---- Explorer (default export) ---- */
export default function BisectedApexDemo({
  scenario       = {},
  initialTheta   = 35,
  theta:           thetaProp,        // optional controlled value
  onThetaChange,                     // optional controlled callback
  thetaMin       = 10,
  thetaMax       = 80,
  stepDurationMs = 2500,
  extraTabs      = [],
  showSlider     = true,
  maxWidth       = 1100,
  svgMaxWidth    = 560,
}) {
  const mergedScenario = {
    identity:    scenario.identity    ?? DEFAULT_SCENARIO.identity,
    steps:       scenario.steps       ?? DEFAULT_SCENARIO.steps,
    metricPairs: scenario.metricPairs ?? DEFAULT_SCENARIO.metricPairs,
  };

  // ---- controlled / uncontrolled theta ----
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

  const totalSteps = mergedScenario.steps.length;
  const effectiveDuration = stepDurationMs / speed;

  useEffect(() => {
    if (!isPlaying) return;
    if (currentStep >= totalSteps) { setIsPlaying(false); return; }
    const id = setTimeout(() => {
      setCurrentStep(s => Math.min(s + 1, totalSteps));
    }, effectiveDuration);
    return () => clearTimeout(id);
  }, [isPlaying, currentStep, totalSteps, effectiveDuration]);

  const handlePlayPause = () => {
    if (currentStep >= totalSteps) { setCurrentStep(0); setIsPlaying(true); }
    else setIsPlaying(p => !p);
  };
  const handleNext  = () => { setIsPlaying(false); setCurrentStep(s => Math.min(s + 1, totalSteps)); };
  const handlePrev  = () => { setIsPlaying(false); setCurrentStep(s => Math.max(s - 1, 0)); };
  const handleReset = () => { setIsPlaying(false); setCurrentStep(0); };

  const visibleSteps = mergedScenario.steps.slice(0, currentStep);
  const activeStep   = currentStep > 0 ? mergedScenario.steps[currentStep - 1] : null;
  const activeState  = activeStep ? activeStep.state : {};

  const th        = (theta * Math.PI) / 180;
  const isAtEnd   = currentStep >= totalSteps;
  const isAtStart = currentStep === 0;
  const playLabel = isPlaying ? 'Pause' : (isAtEnd ? 'Replay' : 'Play');

  return (
    <div style={{
      maxWidth: `${maxWidth}px`,
      margin: '0 auto',
      background: COLORS.white,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '14px',
      boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.05)',
      padding: '22px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: COLORS.text,
    }}>
      <div style={{ display: 'flex', gap: '20px', width: '100%' }}>

        {/* ===== LEFT (main) ===== */}
        <div style={{ flex: '2 1 0', minWidth: 0 }}>
          <IdentityBar identity={mergedScenario.identity} />

          {showSlider && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '0 4px', marginBottom: '10px',
            }}>
              <span style={{
                fontSize: '0.9rem', color: COLORS.textMuted,
                fontStyle: 'italic', minWidth: '14px',
              }}>θ</span>
              <input
                type="range"
                min={thetaMin} max={thetaMax} step={1}
                value={theta}
                onChange={e => setTheta(+e.target.value)}
                style={{ flex: 1, accentColor: COLORS.deepBlue }}
              />
              <span style={{
                fontSize: '0.9rem', fontWeight: 500, color: COLORS.deepBlue,
                minWidth: '44px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
              }}>{theta}&deg;</span>
            </div>
          )}

          <div style={{
            background: COLORS.panelBg,
            border: `1px solid ${COLORS.borderSoft}`,
            borderRadius: '10px',
            padding: '8px',
          }}>
            <div style={{ maxWidth: `${svgMaxWidth}px`, margin: '0 auto' }}>
              <BisectedApexCore
                theta={theta}
                showRadii={!!activeState.showRadii}
                showApex={!!activeState.showApex}
                showTriFill={!!activeState.showTriFill}
                showBisector={!!activeState.showBisector}
                showSubAngles={!!activeState.showSubAngles}
                showSinLabels={!!activeState.showSinLabels}
                showLegend={currentStep > 0}
              />
            </div>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '8px', marginTop: '12px', padding: '10px 12px',
            background: COLORS.panelBg,
            border: `1px solid ${COLORS.borderSoft}`,
            borderRadius: '10px',
          }}>
            <ControlButton onClick={handleReset} disabled={isAtStart && !isPlaying} title="Reset">Reset</ControlButton>
            <ControlButton onClick={handlePrev} disabled={isAtStart} title="Previous">&lsaquo; Prev</ControlButton>
            <ControlButton onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'} primary>{playLabel}</ControlButton>
            <ControlButton onClick={handleNext} disabled={isAtEnd} title="Next">Next &rsaquo;</ControlButton>
            <select
              value={speed}
              onChange={e => setSpeed(+e.target.value)}
              title="Animation speed"
              style={{
                border: `1px solid ${COLORS.borderSoft}`,
                background: COLORS.white,
                color: COLORS.text,
                padding: '6px 8px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 500,
                fontFamily: 'inherit',
                cursor: 'pointer',
                marginLeft: '6px',
              }}
            >
              <option value={0.5}>0.5×</option>
              <option value={1}>1×</option>
              <option value={1.5}>1.5×</option>
              <option value={2}>2×</option>
            </select>
            <span style={{
              marginLeft: '10px', fontSize: '0.78rem',
              color: COLORS.textFaint, fontVariantNumeric: 'tabular-nums',
            }}>Step {currentStep} of {totalSteps}</span>
          </div>

          {mergedScenario.metricPairs && mergedScenario.metricPairs.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${mergedScenario.metricPairs.length}, 1fr)`,
              gap: '12px', marginTop: '12px',
            }}>
              {mergedScenario.metricPairs.map((m, i) => (
                <MetricCard
                  key={i}
                  label={m.label}
                  value={m.compute(th).toFixed(3)}
                  visible={!!activeState.showMetrics}
                />
              ))}
            </div>
          )}
        </div>

        {/* ===== RIGHT (sidebar) ===== */}
        <div style={{
          flex: '1 1 0', minWidth: 0,
          background: COLORS.panelBg,
          border: `1px solid ${COLORS.borderSoft}`,
          borderRadius: '10px',
          padding: '16px',
          minHeight: '480px',
        }}>
          <MiniSolutionPanel
            steps={visibleSteps}
            tabs={extraTabs}
            stepsTitle="Derivation"
            placeholder="Press Play to step through the proof."
          />
        </div>
      </div>
    </div>
  );
}