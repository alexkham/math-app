import React, { useState, useEffect } from 'react';
import ReflectionDemo from '../ReflectionDemo'; // v3 — MiniSolutionPanel, bigger scene, distinct colors

/* ============================================================
   SupplementaryAngleExplorer v1

   All 6 trig functions at (π − θ):
     sin(π − θ) =  sin θ     (no sign change)
     cos(π − θ) = −cos θ
     tan(π − θ) = −tan θ
     csc(π − θ) =  csc θ
     sec(π − θ) = −sec θ
     cot(π − θ) = −cot θ

   sin & cos: ReflectionDemo with mirror='y' (reflection across
              y-axis). cos tab overrides identity + metricPairs;
              sin tab uses defaults entirely.
   tan/csc/sec/cot: derived cards.
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

/* ============================================================
   Geometric scenario overrides
   sin: use ReflectionDemo defaults (identity matches already)
   cos: override identity + metricPairs (steps already cover cos)
   ============================================================ */
const COS_SUP_SCENARIO = {
  identity: {
    pieces: [
      { text: 'cos', italic: true },
      { text: '(' },
      { text: 'π − θ', color: 'red', bold: true },
      { text: ') = −' },
      { text: 'cos θ', color: 'deepBlue', italic: true },
    ],
  },
  metricPairs: [
    { label: 'cos(π − θ)', compute: (th) => Math.cos(Math.PI - th) },
    { label: '−cos θ',     compute: (th) => -Math.cos(th) },
  ],
};

/* ============================================================
   Derived scenarios
   ============================================================ */

const TAN_SUP_DERIVED = {
  identity: {
    fnName: 'tan', lhs: 'π − θ', lhsColor: 'red',
    rhsParts: [
      { text: '−',     color: 'text' },
      { text: 'tan θ', color: 'midBlue' },
    ],
  },
  intro: 'Tangent is sine over cosine. Sine is unchanged at π − θ; cosine flips sign.',
  derivation: [
    { lhs: 'tan(π − θ)', rhs: 'sin(π − θ) / cos(π − θ)', note: 'definition' },
    {                    rhs: 'sin θ / (−cos θ)',         note: 'sin(π − θ) = sin θ, cos(π − θ) = −cos θ' },
    {                    rhs: '−tan θ',                    note: 'simplify' },
  ],
  metricPairs: [
    { label: 'tan θ',       compute: (th) => Math.tan(th) },
    { label: 'tan(π − θ)',  compute: (th) => Math.tan(Math.PI - th) },
  ],
};

const CSC_SUP_DERIVED = {
  identity: {
    fnName: 'csc', lhs: 'π − θ', lhsColor: 'red',
    rhsParts: [
      { text: 'csc θ', color: 'midBlue' },
    ],
  },
  intro: 'Cosecant is the reciprocal of sine. Since sin(π − θ) = sin θ, so does csc.',
  derivation: [
    { lhs: 'csc(π − θ)', rhs: '1 / sin(π − θ)',  note: 'definition' },
    {                    rhs: '1 / sin θ',         note: 'sin(π − θ) = sin θ' },
    {                    rhs: 'csc θ',              note: 'simplify' },
  ],
  metricPairs: [
    { label: 'csc θ',       compute: (th) => 1 / Math.sin(th) },
    { label: 'csc(π − θ)',  compute: (th) => 1 / Math.sin(Math.PI - th) },
  ],
};

const SEC_SUP_DERIVED = {
  identity: {
    fnName: 'sec', lhs: 'π − θ', lhsColor: 'red',
    rhsParts: [
      { text: '−',     color: 'text' },
      { text: 'sec θ', color: 'deepBlue' },
    ],
  },
  intro: 'Secant is the reciprocal of cosine. Since cos(π − θ) = −cos θ, sec flips sign too.',
  derivation: [
    { lhs: 'sec(π − θ)', rhs: '1 / cos(π − θ)',  note: 'definition' },
    {                    rhs: '1 / (−cos θ)',     note: 'cos(π − θ) = −cos θ' },
    {                    rhs: '−sec θ',            note: 'simplify' },
  ],
  metricPairs: [
    { label: 'sec θ',       compute: (th) => 1 / Math.cos(th) },
    { label: 'sec(π − θ)',  compute: (th) => 1 / Math.cos(Math.PI - th) },
  ],
};

const COT_SUP_DERIVED = {
  identity: {
    fnName: 'cot', lhs: 'π − θ', lhsColor: 'red',
    rhsParts: [
      { text: '−',     color: 'text' },
      { text: 'cot θ', color: 'midBlue' },
    ],
  },
  intro: 'Cotangent is cosine over sine.',
  derivation: [
    { lhs: 'cot(π − θ)', rhs: 'cos(π − θ) / sin(π − θ)', note: 'definition' },
    {                    rhs: '(−cos θ) / sin θ',          note: 'cos(π − θ) = −cos θ, sin(π − θ) = sin θ' },
    {                    rhs: '−cot θ',                     note: 'simplify' },
  ],
  metricPairs: [
    { label: 'cot θ',       compute: (th) => 1 / Math.tan(th) },
    { label: 'cot(π − θ)',  compute: (th) => 1 / Math.tan(Math.PI - th) },
  ],
};

const REGISTRY = {
  sin: { label: 'sin(π − θ)', formula: 'sin θ',  signChange: false, derivedFrom: null,           scenario: undefined,        derived: null,            compute: (th) => Math.sin(Math.PI - th) },
  cos: { label: 'cos(π − θ)', formula: '−cos θ', signChange: true,  derivedFrom: null,           scenario: COS_SUP_SCENARIO, derived: null,            compute: (th) => Math.cos(Math.PI - th) },
  tan: { label: 'tan(π − θ)', formula: '−tan θ', signChange: true,  derivedFrom: ['sin', 'cos'], scenario: null,             derived: TAN_SUP_DERIVED, compute: (th) => Math.tan(Math.PI - th) },
  csc: { label: 'csc(π − θ)', formula: 'csc θ',  signChange: false, derivedFrom: ['sin'],        scenario: null,             derived: CSC_SUP_DERIVED, compute: (th) => 1 / Math.sin(Math.PI - th) },
  sec: { label: 'sec(π − θ)', formula: '−sec θ', signChange: true,  derivedFrom: ['cos'],        scenario: null,             derived: SEC_SUP_DERIVED, compute: (th) => 1 / Math.cos(Math.PI - th) },
  cot: { label: 'cot(π − θ)', formula: '−cot θ', signChange: true,  derivedFrom: ['sin', 'cos'], scenario: null,             derived: COT_SUP_DERIVED, compute: (th) => 1 / Math.tan(Math.PI - th) },
};

function colorOf(name) { return COLORS[name] || COLORS.text; }

function readFnFromQuery() {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const fn = params.get('supFn');
  return fn && REGISTRY[fn] ? fn : null;
}
function writeFnToQuery(fn) {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  if (params.get('supFn') === fn) return;
  params.set('supFn', fn);
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
          See <em style={{ color: COLORS.deepBlue }}>{src}</em>(π − θ) proof &rarr;
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

function ThetaSlider({ theta, onChange, min = 15, max = 75 }) {
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
        <SectionLabel>Verify at &theta; = {theta}&deg;</SectionLabel>
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
            <span style={{ fontStyle: 'normal', opacity: 0.85, fontSize: '0.85em', marginLeft: '2px' }}>(π − θ)</span>
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
        gridTemplateColumns: '110px 1fr 90px 100px 120px',
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
        <div>Sign</div>
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
              gridTemplateColumns: '110px 1fr 90px 100px 120px',
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
              <span style={{ fontStyle: 'normal', color: COLORS.textMuted, marginLeft: '2px' }}>(π − θ)</span>
            </div>
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.9rem',
              color: COLORS.text,
              fontStyle: 'italic',
            }}>= {r.formula}</div>
            <div style={{
              fontSize: '0.78rem',
              color: r.signChange ? COLORS.red : COLORS.deepBlue,
              fontStyle: 'italic',
            }}>{r.signChange ? 'flips' : 'unchanged'}</div>
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

export default function SupplementaryAngleExplorer({
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
  const isGeometric = entry.derived === null;

  return (
    <div>
      <TabStrip active={activeFn} onChange={setActiveFn} />

      {isGeometric ? (
        <ReflectionDemo
          key={activeFn}
          mirror="y"
          scenario={entry.scenario || {}}
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