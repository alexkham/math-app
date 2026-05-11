import React, { useState, useEffect } from 'react';
import BisectedApexDemo from '../BisectedApexDemo';

/* ============================================================
   DoubleAngleExplorer v4
   - Geometric fns (sin, cos) → BisectedApexDemo
   - Derived fns (tan, csc, sec, cot) → DerivedIdentityCard
     (no triangle; just derivation + jump buttons to sources)
   - Table tightened and pulled closer to the scene
   ============================================================ */

const COLORS = {
  deepBlue:   '#4F46E5',
  midBlue:    '#818CF8',
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

/* ===== sin(2θ) — geometric scenario ===== */
const SIN_SCENARIO = {
  identity: {
    fnName: 'sin', lhs: '2θ', lhsColor: 'red',
    rhsParts: [
      { text: '2',     color: 'text' },
      { text: 'sin θ', color: 'midBlue' },
      { text: ' · ',   color: 'text' },
      { text: 'cos θ', color: 'deepBlue' },
    ],
  },
  steps: [
    { rule: 'Setup',
      description: 'Two radii OA and OB of length 1, meeting at center O with angle 2θ between them. With chord AB they form an isosceles triangle.',
      state: S.setup },
    { rule: 'Area, first way',
      description: 'Area = ½ · side · side · sin(included angle). With OA = OB = 1 meeting at 2θ: area = ½ sin(2θ).',
      state: S.triFill },
    { rule: 'Bisect',
      description: 'Drop OM perpendicular to AB. It splits 2θ into two halves of θ and the triangle into two congruent right triangles.',
      state: S.bisected },
    { rule: 'Read off the legs',
      description: 'In right triangle OMA: hypotenuse OA = 1, angle at O is θ. So MA = sin θ and OM = cos θ.',
      state: S.full },
    { rule: 'Area, second way',
      description: 'Each right triangle has area ½ · sin θ · cos θ. Two of them sum to sin θ · cos θ.',
      state: S.full },
    { rule: 'Equate',
      description: '½ sin(2θ) = sin θ · cos θ, so sin(2θ) = 2 sin θ · cos θ.',
      state: S.finalize },
  ],
  metricPairs: [
    { label: 'sin(2θ)',       compute: (th) => Math.sin(2 * th) },
    { label: '2 sin θ cos θ', compute: (th) => 2 * Math.sin(th) * Math.cos(th) },
  ],
};

/* ===== cos(2θ) — geometric scenario ===== */
const COS_SCENARIO = {
  identity: {
    fnName: 'cos', lhs: '2θ', lhsColor: 'red',
    rhsParts: [
      { text: '1 − 2 ', color: 'text' },
      { text: 'sin²θ',  color: 'midBlue' },
    ],
  },
  steps: [
    { rule: 'Setup',
      description: 'Two radii OA and OB of length 1, meeting at center O with angle 2θ between them.',
      state: S.setup },
    { rule: 'Law of cosines on △OAB',
      description: '|AB|² = 1 + 1 − 2cos(2θ) = 2 − 2cos(2θ).',
      state: S.triFill },
    { rule: 'Bisect',
      description: 'Drop OM perpendicular to AB. M is the midpoint of AB.',
      state: S.bisected },
    { rule: 'Read off the half-chord',
      description: 'In right triangle OMA: hypotenuse = 1, angle at O = θ. So MA = sin θ and AB = 2 sin θ.',
      state: S.full },
    { rule: 'Square the chord',
      description: '|AB|² = (2 sin θ)² = 4 sin²θ.',
      state: S.full },
    { rule: 'Equate',
      description: '2 − 2cos(2θ) = 4 sin²θ  ⟹  cos(2θ) = 1 − 2 sin²θ.',
      state: S.finalize },
  ],
  metricPairs: [
    { label: 'cos(2θ)',     compute: (th) => Math.cos(2 * th) },
    { label: '1 − 2 sin²θ', compute: (th) => 1 - 2 * Math.sin(th) ** 2 },
  ],
};

/* ===== derived: each has identity, derivation lines, sources, metricPairs ===== */

const TAN_DERIVED = {
  identity: {
    fnName: 'tan', lhs: '2θ', lhsColor: 'red',
    rhsParts: [
      { text: '2 ',       color: 'text' },
      { text: 'tan θ',    color: 'midBlue' },
      { text: ' / (1 − ', color: 'text' },
      { text: 'tan²θ',    color: 'midBlue' },
      { text: ')',        color: 'text' },
    ],
  },
  intro: 'Tangent is sine over cosine. So once we have sin(2θ) and cos(2θ), tan(2θ) follows directly.',
  derivation: [
    { lhs: 'tan(2θ)', rhs: 'sin(2θ) / cos(2θ)',                          note: 'definition' },
    {                 rhs: '(2 sin θ · cos θ) / (cos²θ − sin²θ)',         note: 'substitute the two identities' },
    {                 rhs: '2 tan θ / (1 − tan²θ)',                       note: 'divide top and bottom by cos²θ' },
  ],
  metricPairs: [
    { label: 'tan(2θ)',               compute: (th) => Math.tan(2 * th) },
    { label: '2 tan θ / (1 − tan²θ)', compute: (th) => {
        const t = Math.tan(th);
        return (2 * t) / (1 - t * t);
      } },
  ],
};

const CSC_DERIVED = {
  identity: {
    fnName: 'csc', lhs: '2θ', lhsColor: 'red',
    rhsParts: [
      { text: '1 / (2 ', color: 'text' },
      { text: 'sin θ',   color: 'midBlue' },
      { text: ' · ',     color: 'text' },
      { text: 'cos θ',   color: 'deepBlue' },
      { text: ')',       color: 'text' },
    ],
  },
  intro: 'Cosecant is the reciprocal of sine. So csc(2θ) = 1 / sin(2θ).',
  derivation: [
    { lhs: 'csc(2θ)', rhs: '1 / sin(2θ)',           note: 'definition' },
    {                 rhs: '1 / (2 sin θ · cos θ)', note: 'substitute sin(2θ)' },
  ],
  metricPairs: [
    { label: 'csc(2θ)',           compute: (th) => 1 / Math.sin(2 * th) },
    { label: '1/(2 sin θ cos θ)', compute: (th) => 1 / (2 * Math.sin(th) * Math.cos(th)) },
  ],
};

const SEC_DERIVED = {
  identity: {
    fnName: 'sec', lhs: '2θ', lhsColor: 'red',
    rhsParts: [
      { text: '1 / (1 − 2 ', color: 'text' },
      { text: 'sin²θ',       color: 'midBlue' },
      { text: ')',           color: 'text' },
    ],
  },
  intro: 'Secant is the reciprocal of cosine. So sec(2θ) = 1 / cos(2θ).',
  derivation: [
    { lhs: 'sec(2θ)', rhs: '1 / cos(2θ)',         note: 'definition' },
    {                 rhs: '1 / (1 − 2 sin²θ)',   note: 'substitute cos(2θ)' },
  ],
  metricPairs: [
    { label: 'sec(2θ)',         compute: (th) => 1 / Math.cos(2 * th) },
    { label: '1/(1 − 2 sin²θ)', compute: (th) => 1 / (1 - 2 * Math.sin(th) ** 2) },
  ],
};

const COT_DERIVED = {
  identity: {
    fnName: 'cot', lhs: '2θ', lhsColor: 'red',
    rhsParts: [
      { text: '(1 − ',   color: 'text' },
      { text: 'tan²θ',   color: 'midBlue' },
      { text: ') / (2 ', color: 'text' },
      { text: 'tan θ',   color: 'midBlue' },
      { text: ')',       color: 'text' },
    ],
  },
  intro: 'Cotangent is the reciprocal of tangent. So cot(2θ) = 1 / tan(2θ).',
  derivation: [
    { lhs: 'cot(2θ)', rhs: '1 / tan(2θ)',             note: 'definition' },
    {                 rhs: '(1 − tan²θ) / (2 tan θ)', note: 'substitute tan(2θ)' },
  ],
  metricPairs: [
    { label: 'cot(2θ)',               compute: (th) => 1 / Math.tan(2 * th) },
    { label: '(1 − tan²θ)/(2 tan θ)', compute: (th) => {
        const t = Math.tan(th);
        return (1 - t * t) / (2 * t);
      } },
  ],
};

/* ----- registry ----- */
const REGISTRY = {
  sin: { label: 'sin(2θ)', formula: '2 sin θ · cos θ',         derivedFrom: null,           scenario: SIN_SCENARIO, derived: null,         compute: (th) => Math.sin(2 * th) },
  cos: { label: 'cos(2θ)', formula: '1 − 2 sin²θ',             derivedFrom: null,           scenario: COS_SCENARIO, derived: null,         compute: (th) => Math.cos(2 * th) },
  tan: { label: 'tan(2θ)', formula: '2 tan θ / (1 − tan²θ)',   derivedFrom: ['sin','cos'],  scenario: null,         derived: TAN_DERIVED,  compute: (th) => Math.tan(2 * th) },
  csc: { label: 'csc(2θ)', formula: '1 / (2 sin θ · cos θ)',   derivedFrom: ['sin'],        scenario: null,         derived: CSC_DERIVED,  compute: (th) => 1 / Math.sin(2 * th) },
  sec: { label: 'sec(2θ)', formula: '1 / (1 − 2 sin²θ)',       derivedFrom: ['cos'],        scenario: null,         derived: SEC_DERIVED,  compute: (th) => 1 / Math.cos(2 * th) },
  cot: { label: 'cot(2θ)', formula: '(1 − tan²θ) / (2 tan θ)', derivedFrom: ['tan'],        scenario: null,         derived: COT_DERIVED,  compute: (th) => 1 / Math.tan(2 * th) },
};

/* ----- helpers ----- */
function colorOf(name) {
  return COLORS[name] || COLORS.text;
}
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
  if (Math.abs(v) > 999) return v > 0 ? '∞' : '−∞';
  return v.toFixed(3);
}

/* ----- IdentityBar (shared) ----- */
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

/* ----- SectionLabel ----- */
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

/* ----- Source jump buttons ----- */
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
          See <em style={{ color: COLORS.deepBlue }}>{src}</em>(2&theta;) proof &rarr;
        </button>
      ))}
    </div>
  );
}

/* ----- Derivation display ----- */
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

/* ----- Metric verification row ----- */
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

/* ----- Slider (compact, same as demo) ----- */
function ThetaSlider({ theta, onChange, min = 10, max = 80 }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      padding: '0 4px', marginBottom: '14px',
    }}>
      <span style={{
        fontSize: '0.9rem', color: COLORS.textMuted,
        fontStyle: 'italic', minWidth: '14px',
      }}>θ</span>
      <input
        type="range"
        min={min} max={max} step={1}
        value={theta}
        onChange={e => onChange(+e.target.value)}
        style={{ flex: 1, accentColor: COLORS.deepBlue }}
      />
      <span style={{
        fontSize: '0.9rem', fontWeight: 500, color: COLORS.deepBlue,
        minWidth: '44px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
      }}>{theta}&deg;</span>
    </div>
  );
}

/* ----- DerivedIdentityCard ----- */
function DerivedIdentityCard({ fn, theta, onThetaChange, onJumpTo }) {
  const r = REGISTRY[fn];
  const d = r.derived;
  const th = (theta * Math.PI) / 180;

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
      <ThetaSlider theta={theta} onChange={onThetaChange} />

      {/* Intro + jump-to sources */}
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

      {/* Derivation */}
      <div style={{ marginBottom: '18px' }}>
        <SectionLabel>Derivation</SectionLabel>
        <DerivationDisplay lines={d.derivation} />
      </div>

      {/* Verify */}
      <div>
        <SectionLabel>Verify at θ = {theta}&deg;</SectionLabel>
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

/* ----- Tab strip ----- */
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
            <span style={{ fontStyle: 'normal', opacity: 0.85, fontSize: '0.85em', marginLeft: '2px' }}>(2&theta;)</span>
          </button>
        );
      })}
    </div>
  );
}

/* ----- Formula table (tighter, lifted) ----- */
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
              <span style={{ fontStyle: 'normal', color: COLORS.textMuted, marginLeft: '2px' }}>(2&theta;)</span>
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

/* ----- main export ----- */
export default function DoubleAngleExplorer({
  initialFn    = 'sin',
  initialTheta = 35,
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