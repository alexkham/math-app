import React, { useState, useEffect } from 'react';
import BisectedApexDemo from './BisectedApexDemo';

/* ============================================================
   HalfAngleExplorer v2
   - All 6 trig functions for the half angle α/2:
       sin, cos  → geometric (bisected-apex scenarios)
       tan       → derived from sin and cos
       csc       → derived from sin
       sec       → derived from cos
       cot       → derived from tan
   ============================================================ */

const COLORS = {
  deepBlue:   '#4F46E5',
  midBlue:    '#B45309',
  red:        '#DC2626',
  text:       '#1e3a5f',
  textMuted:  '#64748b',
  textFaint:  '#94a3b8',
  borderSoft: '#e2e8f0',
  panelBg:    '#f8fafc',
  white:      '#ffffff',
};

const FN_ORDER = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'];

const S = {
  setup:    { showRadii: true, showApex: true },
  triFill:  { showRadii: true, showApex: true, showTriFill: true },
  bisected: { showRadii: true, showApex: true, showTriFill: true, showBisector: true, showSubAngles: true },
  full:     { showRadii: true, showApex: true, showTriFill: true, showBisector: true, showSubAngles: true, showSinLabels: true },
  finalize: { showRadii: true, showApex: true, showTriFill: true, showBisector: true, showSubAngles: true, showSinLabels: true, showMetrics: true },
};

const HALF_LABELS = {
  apex:      'α',
  subAngle:  'α/2',
  halfChord: 'sin(α/2)',
  bisector:  'cos(α/2)',
};

const HALF_SLIDER = {
  label:       'α',
  toDisplay:   (t) => 2 * t,
  fromDisplay: (v) => v / 2,
  min:         20,
  max:         160,
  step:        1,
};

const SIN_HALF_SCENARIO = {
  identity: {
    fnName: 'sin', lhs: 'α/2', lhsColor: 'midBlue',
    rhsParts: [
      { text: '√( (1 − ', color: 'text' },
      { text: 'cos α',    color: 'red' },
      { text: ') / 2 )',  color: 'text' },
    ],
  },
  labels:       HALF_LABELS,
  sliderConfig: HALF_SLIDER,
  steps: [
    { rule: 'Setup',
      description: 'Two radii OA and OB of length 1, meeting at center O with angle α between them. We want to express sin(α/2) in terms of α.',
      state: S.setup },
    { rule: 'Law of cosines on △OAB',
      description: '|AB|² = 1 + 1 − 2·1·1·cos α = 2 − 2cos α.',
      state: S.triFill },
    { rule: 'Bisect',
      description: 'Drop OM perpendicular to AB. It splits the apex α into two halves of α/2, and M is the midpoint of chord AB.',
      state: S.bisected },
    { rule: 'Read off the half-chord',
      description: 'In right triangle OMA: hypotenuse OA = 1, angle at O is α/2. So MA = sin(α/2), and the full chord AB = 2 sin(α/2).',
      state: S.full },
    { rule: 'Square the chord',
      description: '|AB|² = (2 sin(α/2))² = 4 sin²(α/2).',
      state: S.full },
    { rule: 'Equate and solve',
      description: '2 − 2cos α = 4 sin²(α/2)  ⟹  sin²(α/2) = (1 − cos α) / 2  ⟹  sin(α/2) = √((1 − cos α) / 2).',
      state: S.finalize },
  ],
  metricPairs: [
    { label: 'sin(α/2)',         compute: (th) => Math.sin(th) },
    { label: '√((1 − cos α)/2)', compute: (th) => Math.sqrt((1 - Math.cos(2 * th)) / 2) },
  ],
};

const COS_HALF_SCENARIO = {
  identity: {
    fnName: 'cos', lhs: 'α/2', lhsColor: 'deepBlue',
    rhsParts: [
      { text: '√( (1 + ', color: 'text' },
      { text: 'cos α',    color: 'red' },
      { text: ') / 2 )',  color: 'text' },
    ],
  },
  labels:       HALF_LABELS,
  sliderConfig: HALF_SLIDER,
  steps: [
    { rule: 'Setup',
      description: 'Two radii OA and OB of length 1, meeting at center O with angle α. We want cos(α/2) in terms of α.',
      state: S.setup },
    { rule: 'Bisect',
      description: 'Drop OM perpendicular to AB. It splits α into α/2 + α/2 and creates right triangle OMA with the right angle at M.',
      state: S.bisected },
    { rule: 'Identify the legs',
      description: 'In right triangle OMA: hypotenuse OA = 1, angle at O is α/2. So MA = sin(α/2) and OM = cos(α/2).',
      state: S.full },
    { rule: 'Apply Pythagoras',
      description: 'In OMA: sin²(α/2) + cos²(α/2) = 1, so cos²(α/2) = 1 − sin²(α/2).',
      state: S.full },
    { rule: 'Substitute the sin half-angle',
      description: 'From the sin(α/2) identity: sin²(α/2) = (1 − cos α)/2. Substitute: cos²(α/2) = 1 − (1 − cos α)/2 = (1 + cos α)/2.',
      state: S.full },
    { rule: 'Take the root',
      description: 'cos(α/2) = √((1 + cos α) / 2).',
      state: S.finalize },
  ],
  metricPairs: [
    { label: 'cos(α/2)',         compute: (th) => Math.cos(th) },
    { label: '√((1 + cos α)/2)', compute: (th) => Math.sqrt((1 + Math.cos(2 * th)) / 2) },
  ],
};

const TAN_HALF_DERIVED = {
  identity: {
    fnName: 'tan', lhs: 'α/2', lhsColor: 'midBlue',
    rhsParts: [
      { text: '√( (1 − ',   color: 'text' },
      { text: 'cos α',      color: 'red' },
      { text: ') / (1 + ',  color: 'text' },
      { text: 'cos α',      color: 'red' },
      { text: ') )',        color: 'text' },
    ],
  },
  intro: 'Tangent is sine over cosine. Apply this to the half angle and substitute the two geometric identities.',
  derivation: [
    { lhs: 'tan(α/2)', rhs: 'sin(α/2) / cos(α/2)',                 note: 'definition' },
    {                  rhs: '√((1 − cos α)/2) / √((1 + cos α)/2)', note: 'substitute the two half-angle identities' },
    {                  rhs: '√( (1 − cos α) / (1 + cos α) )',      note: 'combine under a single root' },
  ],
  metricPairs: [
    { label: 'tan(α/2)',                   compute: (th) => Math.tan(th) },
    { label: '√((1 − cos α)/(1 + cos α))', compute: (th) => Math.sqrt((1 - Math.cos(2 * th)) / (1 + Math.cos(2 * th))) },
  ],
};

const CSC_HALF_DERIVED = {
  identity: {
    fnName: 'csc', lhs: 'α/2', lhsColor: 'midBlue',
    rhsParts: [
      { text: '√( 2 / (1 − ', color: 'text' },
      { text: 'cos α',        color: 'red' },
      { text: ') )',          color: 'text' },
    ],
  },
  intro: 'Cosecant is the reciprocal of sine.',
  derivation: [
    { lhs: 'csc(α/2)', rhs: '1 / sin(α/2)',             note: 'definition' },
    {                  rhs: '1 / √((1 − cos α)/2)',     note: 'substitute the sin half-angle identity' },
    {                  rhs: '√( 2 / (1 − cos α) )',     note: 'invert under the root' },
  ],
  metricPairs: [
    { label: 'csc(α/2)',         compute: (th) => 1 / Math.sin(th) },
    { label: '√(2/(1 − cos α))', compute: (th) => Math.sqrt(2 / (1 - Math.cos(2 * th))) },
  ],
};

const SEC_HALF_DERIVED = {
  identity: {
    fnName: 'sec', lhs: 'α/2', lhsColor: 'deepBlue',
    rhsParts: [
      { text: '√( 2 / (1 + ', color: 'text' },
      { text: 'cos α',        color: 'red' },
      { text: ') )',          color: 'text' },
    ],
  },
  intro: 'Secant is the reciprocal of cosine.',
  derivation: [
    { lhs: 'sec(α/2)', rhs: '1 / cos(α/2)',             note: 'definition' },
    {                  rhs: '1 / √((1 + cos α)/2)',     note: 'substitute the cos half-angle identity' },
    {                  rhs: '√( 2 / (1 + cos α) )',     note: 'invert under the root' },
  ],
  metricPairs: [
    { label: 'sec(α/2)',         compute: (th) => 1 / Math.cos(th) },
    { label: '√(2/(1 + cos α))', compute: (th) => Math.sqrt(2 / (1 + Math.cos(2 * th))) },
  ],
};

const COT_HALF_DERIVED = {
  identity: {
    fnName: 'cot', lhs: 'α/2', lhsColor: 'midBlue',
    rhsParts: [
      { text: '√( (1 + ',   color: 'text' },
      { text: 'cos α',      color: 'red' },
      { text: ') / (1 − ',  color: 'text' },
      { text: 'cos α',      color: 'red' },
      { text: ') )',        color: 'text' },
    ],
  },
  intro: 'Cotangent is the reciprocal of tangent — equivalently cos/sin of the half angle.',
  derivation: [
    { lhs: 'cot(α/2)', rhs: '1 / tan(α/2)',                       note: 'definition' },
    {                  rhs: '1 / √((1 − cos α)/(1 + cos α))',     note: 'substitute the tan half-angle identity' },
    {                  rhs: '√( (1 + cos α) / (1 − cos α) )',     note: 'invert under the root' },
  ],
  metricPairs: [
    { label: 'cot(α/2)',                   compute: (th) => 1 / Math.tan(th) },
    { label: '√((1 + cos α)/(1 − cos α))', compute: (th) => Math.sqrt((1 + Math.cos(2 * th)) / (1 - Math.cos(2 * th))) },
  ],
};

const REGISTRY = {
  sin: { label: 'sin(α/2)', formula: '√((1 − cos α) / 2)',           derivedFrom: null,            scenario: SIN_HALF_SCENARIO, derived: null,             compute: (th) => Math.sin(th) },
  cos: { label: 'cos(α/2)', formula: '√((1 + cos α) / 2)',           derivedFrom: ['sin'],         scenario: COS_HALF_SCENARIO, derived: null,             compute: (th) => Math.cos(th) },
  tan: { label: 'tan(α/2)', formula: '√((1 − cos α) / (1 + cos α))', derivedFrom: ['sin', 'cos'],  scenario: null,              derived: TAN_HALF_DERIVED, compute: (th) => Math.tan(th) },
  csc: { label: 'csc(α/2)', formula: '√(2 / (1 − cos α))',           derivedFrom: ['sin'],         scenario: null,              derived: CSC_HALF_DERIVED, compute: (th) => 1 / Math.sin(th) },
  sec: { label: 'sec(α/2)', formula: '√(2 / (1 + cos α))',           derivedFrom: ['cos'],         scenario: null,              derived: SEC_HALF_DERIVED, compute: (th) => 1 / Math.cos(th) },
  cot: { label: 'cot(α/2)', formula: '√((1 + cos α) / (1 − cos α))', derivedFrom: ['tan'],         scenario: null,              derived: COT_HALF_DERIVED, compute: (th) => 1 / Math.tan(th) },
};

function colorOf(name) {
  return COLORS[name] || COLORS.text;
}

function readFnFromQuery() {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const fn = params.get('halfFn');
  return fn && REGISTRY[fn] ? fn : null;
}

function writeFnToQuery(fn) {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  if (params.get('halfFn') === fn) return;
  params.set('halfFn', fn);
  const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
  window.history.replaceState(null, '', newUrl);
}

function formatVal(v) {
  if (!Number.isFinite(v)) return '∞';
  if (Math.abs(v) > 999)   return v > 0 ? '∞' : '−∞';
  return v.toFixed(3);
}

function IdentityBar({ identity }) {
  if (!identity) return null;
  const { fnName = 'sin', lhs, lhsColor = 'red', rhsParts = [] } = identity;
  return (
    <div style={{
      fontSize: '1.05rem', padding: '12px 16px',
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px', textAlign: 'center', marginBottom: '14px',
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

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: '0.65rem',
      textTransform: 'uppercase',
      letterSpacing: '1.6px',
      color: COLORS.textMuted,
      fontWeight: 600,
      marginBottom: '10px',
    }}>{children}</div>
  );
}

function SourceButtons({ sources, onJumpTo }) {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {sources.map(src => (
        <button
          key={src}
          onClick={() => onJumpTo(src)}
          style={{
            border: `1px solid ${COLORS.borderSoft}`,
            background: COLORS.white,
            color: COLORS.text,
            padding: '8px 14px',
            borderRadius: '8px',
            fontSize: '0.88rem',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'background 0.15s, border-color 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = COLORS.panelBg; }}
          onMouseLeave={e => { e.currentTarget.style.background = COLORS.white; }}
        >
          See <em style={{ color: COLORS.deepBlue }}>{src}</em>(&alpha;/2) proof &rarr;
        </button>
      ))}
    </div>
  );
}

function DerivationDisplay({ lines }) {
  return (
    <div style={{
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px',
      padding: '16px 20px',
      fontFamily: 'Georgia, serif',
      color: COLORS.text,
    }}>
      {lines.map((ln, i) => (
        <div key={i} style={{
          display: 'grid',
          gridTemplateColumns: '120px 24px 1fr auto',
          alignItems: 'baseline',
          gap: '8px',
          padding: '6px 0',
        }}>
          <div style={{
            textAlign: 'right',
            fontSize: '1rem',
            color: ln.lhs ? COLORS.text : 'transparent',
          }}>
            {ln.lhs || '—'}
          </div>
          <div style={{ fontSize: '1rem', color: COLORS.textMuted, textAlign: 'center' }}>=</div>
          <div style={{ fontSize: '1rem', fontStyle: 'italic' }}>{ln.rhs}</div>
          <div style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontStyle: 'normal',
            fontSize: '0.78rem',
            color: COLORS.textFaint,
            paddingLeft: '12px',
          }}>{ln.note}</div>
        </div>
      ))}
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div style={{
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px',
      padding: '12px 16px',
    }}>
      <p style={{
        fontSize: '0.8rem', color: COLORS.textMuted,
        margin: '0 0 4px', fontStyle: 'italic',
      }}>{label}</p>
      <p style={{
        fontSize: '1.35rem', fontWeight: 500,
        fontVariantNumeric: 'tabular-nums',
        margin: 0, color: COLORS.deepBlue,
      }}>{value}</p>
    </div>
  );
}

function AlphaSlider({ alpha, onChange, min = 20, max = 160 }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      padding: '0 4px', marginBottom: '14px',
    }}>
      <span style={{
        fontSize: '0.9rem', color: COLORS.textMuted,
        fontStyle: 'italic', minWidth: '14px',
      }}>&alpha;</span>
      <input
        type="range"
        min={min} max={max} step={1}
        value={alpha}
        onChange={e => onChange(+e.target.value)}
        style={{ flex: 1, accentColor: COLORS.deepBlue }}
      />
      <span style={{
        fontSize: '0.9rem', fontWeight: 500, color: COLORS.deepBlue,
        minWidth: '44px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
      }}>{alpha}&deg;</span>
    </div>
  );
}

function DerivedIdentityCard({ fn, theta, onThetaChange, onJumpTo }) {
  const r = REGISTRY[fn];
  const d = r.derived;
  const th = (theta * Math.PI) / 180;
  const alpha = 2 * theta;

  return (
    <div style={{
      maxWidth: '1100px',
      margin: '0 auto',
      background: COLORS.white,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '14px',
      boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.05)',
      padding: '22px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: COLORS.text,
    }}>
      <IdentityBar identity={d.identity} />
      <AlphaSlider
        alpha={alpha}
        onChange={(a) => onThetaChange(a / 2)}
      />

      <div style={{ marginBottom: '18px' }}>
        <SectionLabel>How this identity follows</SectionLabel>
        <p style={{
          fontSize: '0.92rem',
          lineHeight: 1.5,
          color: COLORS.textMuted,
          margin: '0 0 12px',
        }}>{d.intro}</p>
        <SourceButtons sources={r.derivedFrom || []} onJumpTo={onJumpTo} />
      </div>

      <div style={{ marginBottom: '18px' }}>
        <SectionLabel>Derivation</SectionLabel>
        <DerivationDisplay lines={d.derivation} />
      </div>

      <div>
        <SectionLabel>Verify at &alpha; = {alpha}&deg;</SectionLabel>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${d.metricPairs.length}, 1fr)`,
          gap: '12px',
        }}>
          {d.metricPairs.map((m, i) => (
            <MetricCard
              key={i}
              label={m.label}
              value={formatVal(m.compute(th))}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TabStrip({ active, onChange }) {
  return (
    <div style={{
      display: 'flex', gap: '4px',
      maxWidth: '1100px', margin: '0 auto 12px',
      padding: '4px',
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '12px',
    }}>
      {FN_ORDER.map(fn => {
        const isActive = fn === active;
        return (
          <button key={fn} onClick={() => onChange(fn)} title={REGISTRY[fn].label}
            style={{
              flex: 1, padding: '10px 12px',
              border: 'none', borderRadius: '8px',
              background: isActive ? COLORS.deepBlue : 'transparent',
              color: isActive ? COLORS.white : COLORS.text,
              fontFamily: 'inherit', fontSize: '0.92rem', fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.15s, color 0.15s',
            }}>
            <span style={{ fontStyle: 'italic' }}>{fn}</span>
            <span style={{ fontStyle: 'normal', opacity: 0.85, fontSize: '0.85em', marginLeft: '2px' }}>(&alpha;/2)</span>
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
      maxWidth: '1100px', margin: '8px auto 0',
      background: COLORS.white,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '12px',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: COLORS.text,
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '100px 1fr 100px 120px',
        padding: '8px 16px',
        background: COLORS.panelBg,
        borderBottom: `1px solid ${COLORS.borderSoft}`,
        fontSize: '0.62rem',
        textTransform: 'uppercase',
        letterSpacing: '1.4px',
        color: COLORS.textMuted,
        fontWeight: 600,
      }}>
        <div>Function</div>
        <div>Identity</div>
        <div style={{ textAlign: 'right' }}>Value</div>
        <div style={{ textAlign: 'right' }}>Source</div>
      </div>
      {FN_ORDER.map((fn, i) => {
        const r = REGISTRY[fn];
        const isActive = fn === active;
        const val = formatVal(r.compute(th));
        return (
          <button
            key={fn}
            onClick={() => onSelect(fn)}
            style={{
              display: 'grid',
              gridTemplateColumns: '100px 1fr 100px 120px',
              alignItems: 'center',
              width: '100%',
              padding: '9px 16px',
              border: 'none',
              borderTop: i === 0 ? 'none' : `1px solid ${COLORS.borderSoft}`,
              borderLeft: `3px solid ${isActive ? COLORS.deepBlue : 'transparent'}`,
              background: isActive ? COLORS.panelBg : COLORS.white,
              cursor: 'pointer',
              fontFamily: 'inherit',
              color: 'inherit',
              textAlign: 'left',
              transition: 'background 0.12s',
            }}
          >
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.95rem',
              color: isActive ? COLORS.deepBlue : COLORS.text,
              fontWeight: isActive ? 600 : 500,
            }}>
              <em>{fn}</em>
              <span style={{ fontStyle: 'normal', color: COLORS.textMuted, marginLeft: '2px' }}>(&alpha;/2)</span>
            </div>
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.9rem',
              color: COLORS.text,
              fontStyle: 'italic',
            }}>= {r.formula}</div>
            <div style={{
              textAlign: 'right',
              fontVariantNumeric: 'tabular-nums',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: COLORS.deepBlue,
            }}>{val}</div>
            <div style={{
              textAlign: 'right',
              fontSize: '0.72rem',
              color: COLORS.textFaint,
            }}>
              {r.derivedFrom
                ? <>via {r.derivedFrom.map((d, j) => (
                    <React.Fragment key={d}>
                      {j > 0 && ', '}
                      <em style={{ color: COLORS.textMuted }}>{d}</em>
                    </React.Fragment>
                  ))}</>
                : <span style={{ color: COLORS.textMuted }}>geometric</span>}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function HalfAngleExplorer({
  initialFn    = 'sin',
  initialTheta = 35,   // sub-angle in degrees → α = 70°
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
  const isGeometric = !!entry.scenario;

  return (
    <div>
      <TabStrip active={activeFn} onChange={setActiveFn} />

      {isGeometric ? (
        <BisectedApexDemo
          key={activeFn}
          scenario={entry.scenario}
          theta={theta}
          onThetaChange={setTheta}
        />
      ) : (
        <DerivedIdentityCard
          key={activeFn}
          fn={activeFn}
          theta={theta}
          onThetaChange={setTheta}
          onJumpTo={setActiveFn}
        />
      )}

      <FormulaTable theta={theta} active={activeFn} onSelect={setActiveFn} />
    </div>
  );
}