import React, { useState, useEffect } from 'react';
import CircleGraphDemo from '../CircleGraphDemo';

/* ============================================================
   BasicTrigIdentitiesExplorer v4

   Changes from v3:
   - All wrapper maxWidths 1100 → 1200 to match CircleGraphDemo v6
   - 5th step added to every scenario: "Periodicity"
     so the engine's new spiral / multi-cycle / coterminal feature
     has a corresponding derivation step
   - Instruction text mentions the multi-turn slider
   ============================================================ */

const COLORS = {
  deepBlue:   '#4F46E5',
  midBlue:    '#B45309',
  red:        '#DC2626',
  text:       '#1e3a5f',
  textMuted:  '#64748b',
  textFaint:  '#94a3b8',
  borderSoft: '#cbd5e1',
  panelBg:    '#f1f5f9',
  white:      '#ffffff',
};

const FN_ORDER = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'];

const S = {
  setup:     { showRay: true, showP: true, showGraph: true },
  withLeg:   { showRay: true, showP: true, showLeg: true, showGraph: true },
  withTrace: { showRay: true, showP: true, showLeg: true, showGraph: true, showGraphDot: true, showMetrics: true },
  full:      { showRay: true, showP: true, showLeg: true, showGraph: true, showGraphDot: true, showMetrics: true, showRefAngle: true },
};

const SIN_SCENARIO = {
  identity: { fnName: 'sin', lhs: 'θ', lhsColor: 'red', rhsParts: [] },
  scene: {
    leg: 'sin',
    curve: { compute: (th) => Math.sin(th), asymptotes: [], yMin: -1.1, yMax: 1.1, label: 'y = sin θ' },
  },
  steps: [
    { rule: 'Place the angle',
      description: 'Rotate the ray from the positive x-axis through θ counterclockwise. The terminal point P sits on the unit circle.',
      state: S.setup },
    { rule: 'Drop the vertical leg',
      description: 'From P, drop a perpendicular to the x-axis. The signed length of that leg is sin θ — positive above the x-axis, negative below.',
      state: S.withLeg },
    { rule: 'Trace on the graph',
      description: "Plot θ horizontally, sin θ vertically. The dot on the curve sits at the same height as P's y-coordinate on the circle.",
      state: S.withTrace },
    { rule: 'Reference angle',
      description: 'The acute angle from the ray to the nearest x-axis. Its sine matches sin θ in magnitude; the quadrant fixes the sign.',
      state: S.full },
    { rule: 'Periodicity',
      description: 'Drag past 360° — the ray keeps rotating and the arc spirals outward, but P returns to the same circle position. So sin(θ + 360°) = sin θ. The graph shows this: the curve repeats every full turn, and ghost dots mark coterminal angles at the same height.',
      state: S.full },
  ],
  metricPairs: [
    { label: 'sin θ', compute: (th) => Math.sin(th) },
  ],
};

const COS_SCENARIO = {
  identity: { fnName: 'cos', lhs: 'θ', lhsColor: 'red', rhsParts: [] },
  scene: {
    leg: 'cos',
    curve: { compute: (th) => Math.cos(th), asymptotes: [], yMin: -1.1, yMax: 1.1, label: 'y = cos θ' },
  },
  steps: [
    { rule: 'Place the angle',
      description: 'Rotate the ray through θ. P is the terminal point on the unit circle.',
      state: S.setup },
    { rule: 'Project onto the x-axis',
      description: 'The signed horizontal distance from O to the foot of P is cos θ — positive to the right, negative to the left.',
      state: S.withLeg },
    { rule: 'Trace on the graph',
      description: 'Plot θ horizontally, cos θ vertically. The dot sits at the foot of the perpendicular from P.',
      state: S.withTrace },
    { rule: 'Reference angle',
      description: 'The acute angle from the ray to the nearest x-axis. Its cosine matches cos θ in magnitude; the quadrant fixes the sign.',
      state: S.full },
    { rule: 'Periodicity',
      description: 'Drag past 360° — the spiral arc grows but P comes back to the same place. cos(θ + 360°) = cos θ. The curve repeats every full turn; ghost dots on the graph show coterminals at the same height.',
      state: S.full },
  ],
  metricPairs: [
    { label: 'cos θ', compute: (th) => Math.cos(th) },
  ],
};

const TAN_SCENARIO = {
  identity: { fnName: 'tan', lhs: 'θ', lhsColor: 'red', rhsParts: [] },
  scene: {
    leg: 'both',
    curve: { compute: (th) => Math.tan(th), asymptotes: [Math.PI/2, 3*Math.PI/2], yMin: -3, yMax: 3, label: 'y = tan θ' },
  },
  steps: [
    { rule: 'Place the angle',
      description: 'Rotate the ray through θ. P sits on the unit circle.',
      state: S.setup },
    { rule: 'Read both legs',
      description: 'The vertical leg is sin θ, the horizontal leg is cos θ. Tangent uses both.',
      state: S.withLeg },
    { rule: 'Form the ratio',
      description: 'tan θ = sin θ / cos θ. The graph plots that ratio. It diverges where cos θ = 0 — at 90° and 270°.',
      state: S.withTrace },
    { rule: 'Sign by quadrant',
      description: 'tan θ is positive when both legs have the same sign (Q1, Q3) and negative when they differ (Q2, Q4).',
      state: S.full },
    { rule: 'Periodicity',
      description: 'Tangent actually repeats every 180° — twice as fast as sine and cosine. Past 360° the spiral arc grows, but tan(θ + 180°) = tan θ. The graph shows three full periods.',
      state: S.full },
  ],
  metricPairs: [
    { label: 'tan θ', compute: (th) => Math.tan(th) },
  ],
};

const CSC_SCENARIO = {
  identity: { fnName: 'csc', lhs: 'θ', lhsColor: 'red', rhsParts: [] },
  scene: {
    leg: 'sin',
    curve: { compute: (th) => 1 / Math.sin(th), asymptotes: [0, Math.PI, 2*Math.PI], yMin: -4, yMax: 4, label: 'y = csc θ' },
  },
  steps: [
    { rule: 'Place the angle',
      description: 'Rotate the ray through θ. P sits on the unit circle.',
      state: S.setup },
    { rule: 'Identify the vertical leg',
      description: 'The signed vertical leg is sin θ.',
      state: S.withLeg },
    { rule: 'Take the reciprocal',
      description: 'csc θ = 1 / sin θ. It blows up where sin θ = 0 — at 0°, 180°, and 360°.',
      state: S.withTrace },
    { rule: 'Range and sign',
      description: '|csc θ| ≥ 1 wherever it is defined; the sign matches sin θ.',
      state: S.full },
    { rule: 'Periodicity',
      description: 'csc inherits its period from sin: csc(θ + 360°) = csc θ. Drag past 360° — the spiral grows but the function value cycles. Ghost dots on the graph mark coterminals.',
      state: S.full },
  ],
  metricPairs: [
    { label: 'csc θ', compute: (th) => 1 / Math.sin(th) },
  ],
};

const SEC_SCENARIO = {
  identity: { fnName: 'sec', lhs: 'θ', lhsColor: 'red', rhsParts: [] },
  scene: {
    leg: 'cos',
    curve: { compute: (th) => 1 / Math.cos(th), asymptotes: [Math.PI/2, 3*Math.PI/2], yMin: -4, yMax: 4, label: 'y = sec θ' },
  },
  steps: [
    { rule: 'Place the angle',
      description: 'Rotate the ray through θ. P sits on the unit circle.',
      state: S.setup },
    { rule: 'Identify the horizontal leg',
      description: 'The signed horizontal leg is cos θ.',
      state: S.withLeg },
    { rule: 'Take the reciprocal',
      description: 'sec θ = 1 / cos θ. It blows up where cos θ = 0 — at 90° and 270°.',
      state: S.withTrace },
    { rule: 'Range and sign',
      description: '|sec θ| ≥ 1 wherever it is defined; the sign matches cos θ.',
      state: S.full },
    { rule: 'Periodicity',
      description: 'sec inherits its period from cos: sec(θ + 360°) = sec θ. Drag past 360° — the function value cycles even as the spiral keeps growing.',
      state: S.full },
  ],
  metricPairs: [
    { label: 'sec θ', compute: (th) => 1 / Math.cos(th) },
  ],
};

const COT_SCENARIO = {
  identity: { fnName: 'cot', lhs: 'θ', lhsColor: 'red', rhsParts: [] },
  scene: {
    leg: 'both',
    curve: { compute: (th) => 1 / Math.tan(th), asymptotes: [0, Math.PI, 2*Math.PI], yMin: -3, yMax: 3, label: 'y = cot θ' },
  },
  steps: [
    { rule: 'Place the angle',
      description: 'Rotate the ray through θ. P sits on the unit circle.',
      state: S.setup },
    { rule: 'Read both legs',
      description: 'The vertical leg is sin θ, the horizontal leg is cos θ.',
      state: S.withLeg },
    { rule: 'Form the ratio',
      description: 'cot θ = cos θ / sin θ = 1 / tan θ. It diverges where sin θ = 0 — at 0°, 180°, and 360°.',
      state: S.withTrace },
    { rule: 'Sign by quadrant',
      description: 'cot θ is positive in Q1 and Q3 and negative in Q2 and Q4 — the same sign pattern as tan θ.',
      state: S.full },
    { rule: 'Periodicity',
      description: 'Like tangent, cotangent repeats every 180°: cot(θ + 180°) = cot θ. The graph shows three full periods.',
      state: S.full },
  ],
  metricPairs: [
    { label: 'cot θ', compute: (th) => 1 / Math.tan(th) },
  ],
};

const REGISTRY = {
  sin: { reading: 'vertical leg',   scenario: SIN_SCENARIO, compute: (th) => Math.sin(th) },
  cos: { reading: 'horizontal leg', scenario: COS_SCENARIO, compute: (th) => Math.cos(th) },
  tan: { reading: 'sin θ / cos θ',  scenario: TAN_SCENARIO, compute: (th) => Math.tan(th) },
  csc: { reading: '1 / sin θ',      scenario: CSC_SCENARIO, compute: (th) => 1 / Math.sin(th) },
  sec: { reading: '1 / cos θ',      scenario: SEC_SCENARIO, compute: (th) => 1 / Math.cos(th) },
  cot: { reading: 'cos θ / sin θ',  scenario: COT_SCENARIO, compute: (th) => 1 / Math.tan(th) },
};

function readFnFromQuery() {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const fn = params.get('fn');
  return fn && REGISTRY[fn] ? fn : null;
}
function writeFnToQuery(fn) {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  if (params.get('fn') === fn) return;
  params.set('fn', fn);
  const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
  window.history.replaceState(null, '', newUrl);
}
function formatVal(v) {
  if (!Number.isFinite(v)) return '∞';
  if (Math.abs(v) > 999)   return v > 0 ? '∞' : '−∞';
  return v.toFixed(3);
}

function Instructions() {
  return (
    <div style={{
      maxWidth: '1200px', margin: '0 auto 12px',
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px',
      padding: '14px 18px',
      fontSize: '0.96rem',
      lineHeight: 1.55,
      color: COLORS.text,
    }}>
      <strong style={{ color: COLORS.deepBlue }}>How to use.</strong>{' '}
      Drag the blue dot on the circle (or use the slider) to change <em>θ</em>.
      The slider sweeps through multiple turns — past 360° the arc spirals outward
      and the graph shows ghost dots at coterminal angles.
      Toggle <strong>deg</strong>/<strong>rad</strong> for units, use the <strong>tabs</strong> below
      to pick a function, and the <strong>Prev / Play / Next</strong> controls to step through.
    </div>
  );
}

function TabStrip({ active, onChange }) {
  return (
    <div style={{
      display: 'flex', gap: '4px',
      maxWidth: '1200px', margin: '0 auto 12px',
      padding: '4px',
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '12px',
    }}>
      {FN_ORDER.map(fn => {
        const isActive = fn === active;
        return (
          <button key={fn} onClick={() => onChange(fn)} title={`${fn}(θ)`}
            style={{
              flex: 1, padding: '10px 12px',
              border: 'none', borderRadius: '8px',
              background: isActive ? COLORS.deepBlue : 'transparent',
              color:      isActive ? COLORS.white    : COLORS.text,
              fontFamily: 'inherit', fontSize: '0.92rem', fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.15s, color 0.15s',
            }}>
            <span style={{ fontStyle: 'italic' }}>{fn}</span>
            <span style={{ fontStyle: 'normal', opacity: 0.85, fontSize: '0.85em', marginLeft: '2px' }}>(θ)</span>
          </button>
        );
      })}
    </div>
  );
}

function FormulaTable({ theta, active, onSelect }) {
  const th = (theta * Math.PI) / 180;
  return (
    <div style={{
      maxWidth: '1200px', margin: '8px auto 0',
      background: COLORS.white,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '12px',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: COLORS.text,
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '100px 1fr 120px',
        padding: '8px 16px',
        background: COLORS.panelBg,
        borderBottom: `1px solid ${COLORS.borderSoft}`,
        fontSize: '0.62rem', textTransform: 'uppercase',
        letterSpacing: '1.4px', color: COLORS.textMuted, fontWeight: 600,
      }}>
        <div>Function</div>
        <div>Reading</div>
        <div style={{ textAlign: 'right' }}>Value at θ</div>
      </div>
      {FN_ORDER.map((fn, i) => {
        const r = REGISTRY[fn];
        const isActive = fn === active;
        const val = formatVal(r.compute(th));
        return (
          <button key={fn} onClick={() => onSelect(fn)}
            style={{
              display: 'grid', gridTemplateColumns: '100px 1fr 120px',
              alignItems: 'center', width: '100%',
              padding: '9px 16px', border: 'none',
              borderTop: i === 0 ? 'none' : `1px solid ${COLORS.borderSoft}`,
              borderLeft: `3px solid ${isActive ? COLORS.deepBlue : 'transparent'}`,
              background: isActive ? COLORS.panelBg : COLORS.white,
              cursor: 'pointer', fontFamily: 'inherit', color: 'inherit',
              textAlign: 'left', transition: 'background 0.12s',
            }}>
            <div style={{
              fontFamily: 'Georgia, serif', fontSize: '0.95rem',
              color: isActive ? COLORS.deepBlue : COLORS.text,
              fontWeight: isActive ? 600 : 500,
            }}>
              <em>{fn}</em>
              <span style={{ fontStyle: 'normal', color: COLORS.textMuted, marginLeft: '2px' }}>(θ)</span>
            </div>
            <div style={{
              fontFamily: 'Georgia, serif', fontSize: '0.9rem',
              color: COLORS.textMuted, fontStyle: 'italic',
            }}>{r.reading}</div>
            <div style={{
              textAlign: 'right', fontVariantNumeric: 'tabular-nums',
              fontSize: '0.95rem', fontWeight: 500, color: COLORS.deepBlue,
            }}>{val}</div>
          </button>
        );
      })}
    </div>
  );
}

export default function BasicTrigIdentitiesExplorer({
  initialFn    = 'sin',
  initialTheta = 30,
}) {
  const [activeFn, setActiveFn] = useState(initialFn);
  const [theta, setTheta]       = useState(initialTheta);

  useEffect(() => {
    const fromQuery = readFnFromQuery();
    if (fromQuery) setActiveFn(fromQuery);
  }, []);

  useEffect(() => {
    writeFnToQuery(activeFn);
  }, [activeFn]);

  const entry = REGISTRY[activeFn];

  return (
    <div>
      <Instructions />
      <TabStrip active={activeFn} onChange={setActiveFn} />
      <CircleGraphDemo
        key={activeFn}
        scenario={entry.scenario}
        theta={theta}
        onThetaChange={setTheta}
      />
      <FormulaTable theta={theta} active={activeFn} onSelect={setActiveFn} />
    </div>
  );
}