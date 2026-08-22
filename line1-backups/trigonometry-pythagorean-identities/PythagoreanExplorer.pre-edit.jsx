import React, { useState, useEffect } from 'react';
import BisectedApexDemo from '../BisectedApexDemo';

/* ============================================================
   PythagoreanExplorer v4
   Only change from v3: PS states gain `showTriFill: true` so
   the triangle interior gets its faint indigo wash.
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

const PS = {
  setup:    { showRadii: true, showTriFill: true },
  bisected: { showRadii: true, showTriFill: true, showBisector: true, showSubAngles: true },
  labeled:  { showRadii: true, showTriFill: true, showBisector: true, showSubAngles: true, showSinLabels: true },
  finalize: { showRadii: true, showTriFill: true, showBisector: true, showSubAngles: true, showSinLabels: true, showMetrics: true },
};

const SIN_SCENARIO = {
  identity: {
    fnName: 'sin', lhs: 'θ', lhsColor: 'red', lhsFormat: 'plain',
    rhsParts: [
      { text: '√(1 − ', color: 'text' },
      { text: 'cos²θ',  color: 'deepBlue' },
      { text: ')',      color: 'text' },
    ],
  },
  steps: [
    { rule: 'Setup',
      description: 'Two radii OA and OB of length 1 from center O of the unit circle, with chord AB between them.',
      state: PS.setup },
    { rule: 'Bisect',
      description: 'Drop OM perpendicular to AB. This forms right triangle OMA, with the right angle at M.',
      state: PS.bisected },
    { rule: 'Identify the legs',
      description: 'In right triangle OMA: hypotenuse OA = 1, angle at O is θ. So leg MA = sin θ and leg OM = cos θ.',
      state: PS.labeled },
    { rule: 'Pythagoras',
      description: 'leg² + leg² = hypotenuse² gives sin²θ + cos²θ = 1.',
      state: PS.labeled },
    { rule: 'Solve for sin²θ',
      description: 'Subtract cos²θ from both sides: sin²θ = 1 − cos²θ.',
      state: PS.labeled },
    { rule: 'Take the positive root',
      description: 'For θ in the first quadrant, sin θ > 0, so: sin θ = √(1 − cos²θ).',
      state: PS.finalize },
  ],
  metricPairs: [
    { label: 'sin θ',        compute: (th) => Math.sin(th) },
    { label: '√(1 − cos²θ)', compute: (th) => Math.sqrt(1 - Math.cos(th) ** 2) },
  ],
};

const COS_SCENARIO = {
  identity: {
    fnName: 'cos', lhs: 'θ', lhsColor: 'red', lhsFormat: 'plain',
    rhsParts: [
      { text: '√(1 − ', color: 'text' },
      { text: 'sin²θ',  color: 'midBlue' },
      { text: ')',      color: 'text' },
    ],
  },
  steps: [
    { rule: 'Setup',
      description: 'Two radii OA and OB of length 1 from center O of the unit circle, with chord AB between them.',
      state: PS.setup },
    { rule: 'Bisect',
      description: 'Drop OM perpendicular to AB. This forms right triangle OMA, with the right angle at M.',
      state: PS.bisected },
    { rule: 'Identify the legs',
      description: 'In right triangle OMA: hypotenuse OA = 1, angle at O is θ. So leg MA = sin θ and leg OM = cos θ.',
      state: PS.labeled },
    { rule: 'Pythagoras',
      description: 'leg² + leg² = hypotenuse² gives sin²θ + cos²θ = 1.',
      state: PS.labeled },
    { rule: 'Solve for cos²θ',
      description: 'Subtract sin²θ from both sides: cos²θ = 1 − sin²θ.',
      state: PS.labeled },
    { rule: 'Take the positive root',
      description: 'For θ in the first quadrant, cos θ > 0, so: cos θ = √(1 − sin²θ).',
      state: PS.finalize },
  ],
  metricPairs: [
    { label: 'cos θ',        compute: (th) => Math.cos(th) },
    { label: '√(1 − sin²θ)', compute: (th) => Math.sqrt(1 - Math.sin(th) ** 2) },
  ],
};

const TAN_DERIVED = {
  identity: {
    fnName: 'tan', lhs: 'θ', lhsColor: 'red', lhsFormat: 'plain',
    rhsParts: [
      { text: '√(',    color: 'text' },
      { text: 'sec²θ', color: 'deepBlue' },
      { text: ' − 1)', color: 'text' },
    ],
  },
  intro: 'Start from the base identity sin²θ + cos²θ = 1, divide by cos²θ to bring tan and sec into play, then solve and take the root.',
  derivation: [
    { lhs: 'sin²θ + cos²θ',           rhs: '1',           note: 'base identity (geometric)' },
    { lhs: '(sin²θ + cos²θ) / cos²θ', rhs: '1 / cos²θ',   note: 'divide both sides by cos²θ' },
    { lhs: 'tan²θ + 1',               rhs: 'sec²θ',       note: 'sin/cos = tan, 1/cos = sec' },
    { lhs: 'tan²θ',                   rhs: 'sec²θ − 1',   note: 'solve for tan²θ' },
    { lhs: 'tan θ',                   rhs: '√(sec²θ − 1)', note: 'positive root (first quadrant)' },
  ],
  metricPairs: [
    { label: 'tan θ',        compute: (th) => Math.tan(th) },
    { label: '√(sec²θ − 1)', compute: (th) => Math.sqrt(1 / Math.cos(th) ** 2 - 1) },
  ],
};

const SEC_DERIVED = {
  identity: {
    fnName: 'sec', lhs: 'θ', lhsColor: 'red', lhsFormat: 'plain',
    rhsParts: [
      { text: '√(1 + ', color: 'text' },
      { text: 'tan²θ',  color: 'midBlue' },
      { text: ')',      color: 'text' },
    ],
  },
  intro: 'Same divide-by-cos²θ derivation as tan — just solved for sec instead.',
  derivation: [
    { lhs: 'sin²θ + cos²θ',           rhs: '1',           note: 'base identity (geometric)' },
    { lhs: '(sin²θ + cos²θ) / cos²θ', rhs: '1 / cos²θ',   note: 'divide both sides by cos²θ' },
    { lhs: 'tan²θ + 1',               rhs: 'sec²θ',       note: 'sin/cos = tan, 1/cos = sec' },
    { lhs: 'sec²θ',                   rhs: '1 + tan²θ',   note: 'solve for sec²θ' },
    { lhs: 'sec θ',                   rhs: '√(1 + tan²θ)', note: 'positive root (first quadrant)' },
  ],
  metricPairs: [
    { label: 'sec θ',        compute: (th) => 1 / Math.cos(th) },
    { label: '√(1 + tan²θ)', compute: (th) => Math.sqrt(1 + Math.tan(th) ** 2) },
  ],
};

const COT_DERIVED = {
  identity: {
    fnName: 'cot', lhs: 'θ', lhsColor: 'red', lhsFormat: 'plain',
    rhsParts: [
      { text: '√(',    color: 'text' },
      { text: 'csc²θ', color: 'deepBlue' },
      { text: ' − 1)', color: 'text' },
    ],
  },
  intro: 'Start from sin²θ + cos²θ = 1, divide by sin²θ to bring cot and csc into play, then solve and take the root.',
  derivation: [
    { lhs: 'sin²θ + cos²θ',           rhs: '1',           note: 'base identity (geometric)' },
    { lhs: '(sin²θ + cos²θ) / sin²θ', rhs: '1 / sin²θ',   note: 'divide both sides by sin²θ' },
    { lhs: '1 + cot²θ',               rhs: 'csc²θ',       note: 'cos/sin = cot, 1/sin = csc' },
    { lhs: 'cot²θ',                   rhs: 'csc²θ − 1',   note: 'solve for cot²θ' },
    { lhs: 'cot θ',                   rhs: '√(csc²θ − 1)', note: 'positive root (first quadrant)' },
  ],
  metricPairs: [
    { label: 'cot θ',        compute: (th) => 1 / Math.tan(th) },
    { label: '√(csc²θ − 1)', compute: (th) => Math.sqrt(1 / Math.sin(th) ** 2 - 1) },
  ],
};

const CSC_DERIVED = {
  identity: {
    fnName: 'csc', lhs: 'θ', lhsColor: 'red', lhsFormat: 'plain',
    rhsParts: [
      { text: '√(1 + ', color: 'text' },
      { text: 'cot²θ',  color: 'midBlue' },
      { text: ')',      color: 'text' },
    ],
  },
  intro: 'Same divide-by-sin²θ derivation as cot — just solved for csc instead.',
  derivation: [
    { lhs: 'sin²θ + cos²θ',           rhs: '1',           note: 'base identity (geometric)' },
    { lhs: '(sin²θ + cos²θ) / sin²θ', rhs: '1 / sin²θ',   note: 'divide both sides by sin²θ' },
    { lhs: '1 + cot²θ',               rhs: 'csc²θ',       note: 'cos/sin = cot, 1/sin = csc' },
    { lhs: 'csc²θ',                   rhs: '1 + cot²θ',   note: 'solve for csc²θ' },
    { lhs: 'csc θ',                   rhs: '√(1 + cot²θ)', note: 'positive root (first quadrant)' },
  ],
  metricPairs: [
    { label: 'csc θ',        compute: (th) => 1 / Math.sin(th) },
    { label: '√(1 + cot²θ)', compute: (th) => Math.sqrt(1 + 1 / Math.tan(th) ** 2) },
  ],
};

const REGISTRY = {
  sin: { label: 'sin θ', identity: 'sin θ = √(1 − cos²θ)',  derivedFrom: null,           scenario: SIN_SCENARIO, derived: null,        compute: (th) => Math.sin(th) },
  cos: { label: 'cos θ', identity: 'cos θ = √(1 − sin²θ)',  derivedFrom: null,           scenario: COS_SCENARIO, derived: null,        compute: (th) => Math.cos(th) },
  tan: { label: 'tan θ', identity: 'tan θ = √(sec²θ − 1)',  derivedFrom: ['sin', 'cos'], scenario: null,         derived: TAN_DERIVED, compute: (th) => Math.tan(th) },
  csc: { label: 'csc θ', identity: 'csc θ = √(1 + cot²θ)',  derivedFrom: ['sin', 'cos'], scenario: null,         derived: CSC_DERIVED, compute: (th) => 1 / Math.sin(th) },
  sec: { label: 'sec θ', identity: 'sec θ = √(1 + tan²θ)',  derivedFrom: ['sin', 'cos'], scenario: null,         derived: SEC_DERIVED, compute: (th) => 1 / Math.cos(th) },
  cot: { label: 'cot θ', identity: 'cot θ = √(csc²θ − 1)',  derivedFrom: ['sin', 'cos'], scenario: null,         derived: COT_DERIVED, compute: (th) => 1 / Math.tan(th) },
};

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

function IdentityBar({ identity }) {
  if (!identity) return null;
  const { fnName = 'sin', lhs, lhsColor = 'red', lhsFormat = 'paren', rhsParts = [] } = identity;
  return (
    <div style={{
      fontSize: '1.05rem', padding: '12px 16px',
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px', textAlign: 'center', marginBottom: '14px',
      fontFamily: 'Georgia, serif', color: COLORS.text,
    }}>
      {lhsFormat === 'exponent' && (
        <>
          <em>{fnName}</em>
          <sup style={{ fontSize: '0.7em' }}>2</sup>
          <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
        </>
      )}
      {lhsFormat === 'plain' && (
        <>
          <em>{fnName}</em>
          {' '}
          <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
        </>
      )}
      {lhsFormat === 'paren' && (
        <>
          <em>{fnName}</em>(
          <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>)
        </>
      )}
      {' '}={' '}
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
          See <em style={{ color: COLORS.deepBlue }}>{src}</em>
          <span style={{ color: COLORS.deepBlue }}> &theta;</span>
          {' '}proof &rarr;
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
          gridTemplateColumns: '230px 24px 1fr auto',
          alignItems: 'baseline',
          gap: '8px',
          padding: '6px 0',
        }}>
          <div style={{
            textAlign: 'right',
            fontSize: '0.98rem',
            color: COLORS.text,
            fontStyle: 'italic',
          }}>
            {ln.lhs}
          </div>
          <div style={{ fontSize: '1rem', color: COLORS.textMuted, textAlign: 'center' }}>=</div>
          <div style={{ fontSize: '0.98rem', fontStyle: 'italic' }}>{ln.rhs}</div>
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
            <span style={{ fontStyle: 'normal', opacity: 0.85, fontSize: '0.85em', marginLeft: '2px' }}>&theta;</span>
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
        gridTemplateColumns: '90px 1fr 100px 120px',
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
              gridTemplateColumns: '90px 1fr 100px 120px',
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
              <span style={{ fontStyle: 'normal', color: COLORS.textMuted, marginLeft: '2px' }}>&theta;</span>
            </div>
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.9rem',
              color: COLORS.text,
              fontStyle: 'italic',
            }}>{r.identity}</div>
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

export default function PythagoreanExplorer({
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