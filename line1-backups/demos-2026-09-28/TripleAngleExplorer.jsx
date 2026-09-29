import React, { useState, useEffect, useRef } from 'react';

/* ============================================================
   TripleAngleExplorer v2

   sin(3θ), cos(3θ), tan(3θ), csc(3θ), sec(3θ), cot(3θ)
   derived from the angle-sum and double-angle identities.

   - sin, cos : 5-step scenario. Step 1 is geometric (3θ as
                2θ + θ on the unit circle); steps 2–5 are the
                equation chain, one line per step, each checked
                live against f(3θ).
   - tan, csc, sec, cot : derived equation chain.

   Mirrors DoubleAngleExplorer (tab strip, step shell of
   BisectedApexDemo v8, derived card, formula table, ?fn=).
   Self-contained: shared helpers are copied in.

   Named exports: TripleAngleScene (pure, props → SVG),
   REGISTRY. Default export: the explorer.
   ============================================================ */

/* ---------------- colours ---------------- */

// explorer shell (DoubleAngleExplorer)
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

// step shell (BisectedApexDemo v8)
const SHELL = {
  deepBlue:    '#4F46E5',
  midBlue:     '#B45309',
  red:         '#DC2626',
  panelBg:     '#f1f5f9',
  panelBgDeep: '#E2E8F0',
  borderSoft:  '#cbd5e1',
  text:        '#1e3a5f',
  textMuted:   '#64748b',
  textFaint:   '#94a3b8',
  white:       '#ffffff',
};

// scene (doubleAngleDiagrams)
const W = 420;
const H = 300;
const DEEP = '#4F46E5';
const MID = '#818CF8';
const RED = '#DC2626';
const TEXT = '#1e3a5f';
const MUTED = '#64748b';
const SOFT = '#e2e8f0';
const NOTE = '#94a3b8';

const rad = (d) => (d * Math.PI) / 180;
const FN_ORDER = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'];

/* ---------------- derivations (verified, do not reorder) ---------------- */

const SIN_LINES = [
  { lhs: 'sin 3θ', rhs: 'sin(2θ + θ)', rule: 'split the angle',
    f: (t) => Math.sin(2 * t + t) },
  { rhs: 'sin 2θ · cos θ + cos 2θ · sin θ', rule: 'angle-sum formula',
    f: (t) => Math.sin(2 * t) * Math.cos(t) + Math.cos(2 * t) * Math.sin(t) },
  { rhs: '2 sin θ cos²θ + (1 − 2 sin²θ) sin θ', rule: 'substitute both double-angle identities',
    f: (t) => 2 * Math.sin(t) * Math.cos(t) ** 2 + (1 - 2 * Math.sin(t) ** 2) * Math.sin(t) },
  { rhs: '2 sin θ (1 − sin²θ) + sin θ − 2 sin³θ', rule: 'cos²θ = 1 − sin²θ',
    f: (t) => 2 * Math.sin(t) * (1 - Math.sin(t) ** 2) + Math.sin(t) - 2 * Math.sin(t) ** 3 },
  { rhs: '3 sin θ − 4 sin³θ', rule: 'collect terms', final: true,
    f: (t) => 3 * Math.sin(t) - 4 * Math.sin(t) ** 3 },
];

const COS_LINES = [
  { lhs: 'cos 3θ', rhs: 'cos(2θ + θ)', rule: 'split the angle',
    f: (t) => Math.cos(2 * t + t) },
  { rhs: 'cos 2θ · cos θ − sin 2θ · sin θ', rule: 'angle-sum formula',
    f: (t) => Math.cos(2 * t) * Math.cos(t) - Math.sin(2 * t) * Math.sin(t) },
  { rhs: '(2 cos²θ − 1) cos θ − 2 sin²θ cos θ', rule: 'substitute both double-angle identities',
    f: (t) => (2 * Math.cos(t) ** 2 - 1) * Math.cos(t) - 2 * Math.sin(t) ** 2 * Math.cos(t) },
  { rhs: '2 cos³θ − cos θ − 2 (1 − cos²θ) cos θ', rule: 'sin²θ = 1 − cos²θ',
    f: (t) => 2 * Math.cos(t) ** 3 - Math.cos(t) - 2 * (1 - Math.cos(t) ** 2) * Math.cos(t) },
  { rhs: '4 cos³θ − 3 cos θ', rule: 'collect terms', final: true,
    f: (t) => 4 * Math.cos(t) ** 3 - 3 * Math.cos(t) },
];

const DESCRIPTIONS = {
  sin: [
    'Write 3θ as 2θ + θ. On the unit circle, turning through 3θ is the same as turning through 2θ and then one more θ.',
    'Apply sin(α + β) = sin α cos β + cos α sin β with α = 2θ and β = θ.',
    'Replace sin 2θ with 2 sin θ cos θ and cos 2θ with 1 − 2 sin²θ.',
    'Use the Pythagorean identity to write cos²θ as 1 − sin²θ, so every term is in sin θ.',
    'Expand and collect: 2 sin θ − 2 sin³θ + sin θ − 2 sin³θ = 3 sin θ − 4 sin³θ.',
  ],
  cos: [
    'Write 3θ as 2θ + θ. On the unit circle, turning through 3θ is the same as turning through 2θ and then one more θ.',
    'Apply cos(α + β) = cos α cos β − sin α sin β with α = 2θ and β = θ.',
    'Replace cos 2θ with 2 cos²θ − 1 and sin 2θ with 2 sin θ cos θ.',
    'Use the Pythagorean identity to write sin²θ as 1 − cos²θ, so every term is in cos θ.',
    'Expand and collect: 2 cos³θ − cos θ − 2 cos θ + 2 cos³θ = 4 cos³θ − 3 cos θ.',
  ],
};

function buildScenario(fn, lines, identity, title) {
  return {
    identity,
    title,
    lines,
    steps: lines.map((ln, i) => ({
      rule: ln.rule.charAt(0).toUpperCase() + ln.rule.slice(1),
      description: DESCRIPTIONS[fn][i],
      state: { step: i + 1, showMetrics: true },
    })),
    metricPairs: [
      { label: `${fn}(3θ)`, compute: (t) => (fn === 'sin' ? Math.sin(3 * t) : Math.cos(3 * t)) },
      { label: lines[lines.length - 1].rhs, compute: lines[lines.length - 1].f },
    ],
  };
}

const SIN_SCENARIO = buildScenario('sin', SIN_LINES, {
  fnName: 'sin', lhs: '3θ', lhsColor: 'red',
  rhsParts: [
    { text: '3 ',    color: 'text' },
    { text: 'sin θ', color: 'midBlue' },
    { text: ' − 4 ', color: 'text' },
    { text: 'sin³θ', color: 'midBlue' },
  ],
}, 'sin(3θ) = 3 sin θ − 4 sin³θ');

const COS_SCENARIO = buildScenario('cos', COS_LINES, {
  fnName: 'cos', lhs: '3θ', lhsColor: 'red',
  rhsParts: [
    { text: '4 ',    color: 'text' },
    { text: 'cos³θ', color: 'deepBlue' },
    { text: ' − 3 ', color: 'text' },
    { text: 'cos θ', color: 'deepBlue' },
  ],
}, 'cos(3θ) = 4 cos³θ − 3 cos θ');

const TAN_DERIVED = {
  identity: {
    fnName: 'tan', lhs: '3θ', lhsColor: 'red',
    rhsParts: [
      { text: '(3 ',         color: 'text' },
      { text: 'tan θ',       color: 'midBlue' },
      { text: ' − ',         color: 'text' },
      { text: 'tan³θ',       color: 'midBlue' },
      { text: ') / (1 − 3 ', color: 'text' },
      { text: 'tan²θ',       color: 'midBlue' },
      { text: ')',           color: 'text' },
    ],
  },
  intro: 'Tangent is sine over cosine. So once we have sin(3θ) and cos(3θ), tan(3θ) follows directly.',
  derivation: [
    { lhs: 'tan(3θ)', rhs: 'sin(3θ) / cos(3θ)',                           note: 'definition' },
    {                 rhs: '(3 sin θ − 4 sin³θ) / (4 cos³θ − 3 cos θ)',   note: 'substitute the two identities' },
    {                 rhs: '(3 tan θ − tan³θ) / (1 − 3 tan²θ)',           note: 'divide top and bottom by cos³θ' },
  ],
  metricPairs: [
    { label: 'tan(3θ)', compute: (t) => Math.tan(3 * t) },
    { label: '(3 tan θ − tan³θ) / (1 − 3 tan²θ)', compute: (t) => {
        const x = Math.tan(t);
        return (3 * x - x ** 3) / (1 - 3 * x * x);
      } },
  ],
};

const CSC_DERIVED = {
  identity: {
    fnName: 'csc', lhs: '3θ', lhsColor: 'red',
    rhsParts: [
      { text: '1 / (3 ', color: 'text' },
      { text: 'sin θ',   color: 'midBlue' },
      { text: ' − 4 ',   color: 'text' },
      { text: 'sin³θ',   color: 'midBlue' },
      { text: ')',       color: 'text' },
    ],
  },
  intro: 'Cosecant is the reciprocal of sine. So csc(3θ) = 1 / sin(3θ).',
  derivation: [
    { lhs: 'csc(3θ)', rhs: '1 / sin(3θ)',             note: 'definition' },
    {                 rhs: '1 / (3 sin θ − 4 sin³θ)', note: 'substitute sin(3θ)' },
  ],
  metricPairs: [
    { label: 'csc(3θ)',                 compute: (t) => 1 / Math.sin(3 * t) },
    { label: '1 / (3 sin θ − 4 sin³θ)', compute: (t) => 1 / (3 * Math.sin(t) - 4 * Math.sin(t) ** 3) },
  ],
};

const SEC_DERIVED = {
  identity: {
    fnName: 'sec', lhs: '3θ', lhsColor: 'red',
    rhsParts: [
      { text: '1 / (4 ', color: 'text' },
      { text: 'cos³θ',   color: 'deepBlue' },
      { text: ' − 3 ',   color: 'text' },
      { text: 'cos θ',   color: 'deepBlue' },
      { text: ')',       color: 'text' },
    ],
  },
  intro: 'Secant is the reciprocal of cosine. So sec(3θ) = 1 / cos(3θ).',
  derivation: [
    { lhs: 'sec(3θ)', rhs: '1 / cos(3θ)',             note: 'definition' },
    {                 rhs: '1 / (4 cos³θ − 3 cos θ)', note: 'substitute cos(3θ)' },
  ],
  metricPairs: [
    { label: 'sec(3θ)',                 compute: (t) => 1 / Math.cos(3 * t) },
    { label: '1 / (4 cos³θ − 3 cos θ)', compute: (t) => 1 / (4 * Math.cos(t) ** 3 - 3 * Math.cos(t)) },
  ],
};

const COT_DERIVED = {
  identity: {
    fnName: 'cot', lhs: '3θ', lhsColor: 'red',
    rhsParts: [
      { text: '(1 − 3 ', color: 'text' },
      { text: 'tan²θ',   color: 'midBlue' },
      { text: ') / (3 ', color: 'text' },
      { text: 'tan θ',   color: 'midBlue' },
      { text: ' − ',     color: 'text' },
      { text: 'tan³θ',   color: 'midBlue' },
      { text: ')',       color: 'text' },
    ],
  },
  intro: 'Cotangent is the reciprocal of tangent. So cot(3θ) = 1 / tan(3θ).',
  derivation: [
    { lhs: 'cot(3θ)', rhs: '1 / tan(3θ)',                       note: 'definition' },
    {                 rhs: '(1 − 3 tan²θ) / (3 tan θ − tan³θ)', note: 'substitute tan(3θ)' },
  ],
  metricPairs: [
    { label: 'cot(3θ)', compute: (t) => 1 / Math.tan(3 * t) },
    { label: '(1 − 3 tan²θ) / (3 tan θ − tan³θ)', compute: (t) => {
        const x = Math.tan(t);
        return (1 - 3 * x * x) / (3 * x - x ** 3);
      } },
  ],
};

/* ---------------- registry ---------------- */

export const REGISTRY = {
  sin: { label: 'sin(3θ)', formula: '3 sin θ − 4 sin³θ',                   derivedFrom: null,          scenario: SIN_SCENARIO, derived: null,        compute: (t) => Math.sin(3 * t) },
  cos: { label: 'cos(3θ)', formula: '4 cos³θ − 3 cos θ',                   derivedFrom: null,          scenario: COS_SCENARIO, derived: null,        compute: (t) => Math.cos(3 * t) },
  tan: { label: 'tan(3θ)', formula: '(3 tan θ − tan³θ) / (1 − 3 tan²θ)',   derivedFrom: ['sin', 'cos'], scenario: null,        derived: TAN_DERIVED, compute: (t) => Math.tan(3 * t) },
  csc: { label: 'csc(3θ)', formula: '1 / (3 sin θ − 4 sin³θ)',             derivedFrom: ['sin'],       scenario: null,         derived: CSC_DERIVED, compute: (t) => 1 / Math.sin(3 * t) },
  sec: { label: 'sec(3θ)', formula: '1 / (4 cos³θ − 3 cos θ)',             derivedFrom: ['cos'],       scenario: null,         derived: SEC_DERIVED, compute: (t) => 1 / Math.cos(3 * t) },
  cot: { label: 'cot(3θ)', formula: '(1 − 3 tan²θ) / (3 tan θ − tan³θ)',   derivedFrom: ['tan'],       scenario: null,         derived: COT_DERIVED, compute: (t) => 1 / Math.tan(3 * t) },
};

/* ---------------- helpers ---------------- */

function colorOf(palette, name) {
  return palette[name] || palette.text;
}

function readFnFromQuery() {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const fn = params.get('fn');
  return fn && REGISTRY[fn] ? fn : null;
}

function writeFnToQuery(fn) {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get('fn') === fn) return;
    params.set('fn', fn);
    const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
    window.history.replaceState(null, '', newUrl);
  } catch (_) { /* sandboxed viewer */ }
}

function formatVal(v) {
  if (!Number.isFinite(v)) return '∞';
  if (Math.abs(v) > 999) return v > 0 ? '∞' : '−∞';
  return v.toFixed(3);
}

/* ============================================================
   TripleAngleScene — pure: props → SVG
   step 0–1 : unit circle, 3θ = 2θ + θ
   step 2–5 : equation chain up to that line
   derived fns : equation card
   framed = true gives the 336 × 240 page-figure frame
   ============================================================ */

function Txt({ x, y, color = TEXT, size = 13, anchor = 'middle', italic = false, bold = false, children }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      dominantBaseline="central"
      fontSize={size}
      fill={color}
      fontFamily="Georgia,serif"
      fontStyle={italic ? 'italic' : undefined}
      fontWeight={bold ? 'bold' : undefined}
    >
      {children}
    </text>
  );
}

function SceneFrame({ framed, children }) {
  const style = framed
    ? { border: '1px solid #e2e8f0', background: '#fff', borderRadius: '12px', maxWidth: '100%', display: 'block', margin: '12px auto' }
    : { display: 'block', width: '100%', background: '#fff', borderRadius: '8px' };
  return (
    <svg
      width={framed ? 336 : undefined}
      height={framed ? 240 : undefined}
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      style={style}
    >
      {children}
    </svg>
  );
}

function Banner({ text }) {
  return (
    <>
      <rect x={20} y={H - 40} width={W - 40} height={30} rx={8} fill="#f8fafc" stroke={SOFT} />
      <Txt x={W / 2} y={H - 25} color={TEXT} size={14} italic>{text}</Txt>
    </>
  );
}

function arcPath(ox, oy, r, a0, a1) {
  const p = (a) => [+(ox + r * Math.cos(rad(a))).toFixed(2), +(oy - r * Math.sin(rad(a))).toFixed(2)];
  const [x0, y0] = p(a0);
  const [x1, y1] = p(a1);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M ${x0} ${y0} A ${r} ${r} 0 ${large} 0 ${x1} ${y1}`;
}

function CircleStep({ fn, theta }) {
  const OX = 210, OY = 140, R = 100;
  const pt = (a, r = R) => [+(OX + r * Math.cos(rad(a))).toFixed(2), +(OY - r * Math.sin(rad(a))).toFixed(2)];
  const [p0x, p0y] = pt(0);
  const [p2x, p2y] = pt(2 * theta);
  const [p3x, p3y] = pt(3 * theta);
  const [l2x, l2y] = pt(theta, 43);
  const [l1x, l1y] = pt(2.5 * theta, 43);
  const [l3x, l3y] = pt(1.5 * theta, 76);

  return (
    <>
      <line x1={OX - R - 14} y1={OY} x2={OX + R + 14} y2={OY} stroke={SOFT} strokeWidth="1" />
      <line x1={OX} y1={OY - R - 14} x2={OX} y2={OY + R + 14} stroke={SOFT} strokeWidth="1" />
      <circle cx={OX} cy={OY} r={R} fill="none" stroke="#cbd5e1" strokeWidth="1.2" />

      <line x1={OX} y1={OY} x2={p0x} y2={p0y} stroke={TEXT} strokeWidth="2" />
      <line x1={OX} y1={OY} x2={p2x} y2={p2y} stroke={MID} strokeWidth="2" strokeDasharray="5 4" />
      <line x1={OX} y1={OY} x2={p3x} y2={p3y} stroke={TEXT} strokeWidth="2" />

      <path d={arcPath(OX, OY, 28, 0, 2 * theta)} fill="none" stroke={MID} strokeWidth="3" />
      <path d={arcPath(OX, OY, 28, 2 * theta, 3 * theta)} fill="none" stroke={RED} strokeWidth="3" />
      <path d={arcPath(OX, OY, 62, 0, 3 * theta)} fill="none" stroke={DEEP} strokeWidth="1.5" />

      {theta >= 14 && <Txt x={l2x} y={l2y} color={MID} size={12} italic>2θ</Txt>}
      {theta >= 14 && <Txt x={l1x} y={l1y} color={RED} size={12} italic>θ</Txt>}
      <Txt x={l3x} y={l3y} color={DEEP} size={13} italic>3θ</Txt>

      <circle cx={OX} cy={OY} r="3" fill={TEXT} />
      <circle cx={p0x} cy={p0y} r="3" fill={TEXT} />
      <circle cx={p2x} cy={p2y} r="3" fill={TEXT} />
      <circle cx={p3x} cy={p3y} r="3" fill={TEXT} />
      <Txt x={OX - 12} y={OY + 12} color={TEXT} size={14}>O</Txt>
      <Txt x={(OX + p0x) / 2} y={OY + 12} color={MUTED} size={12} italic>1</Txt>

      <Banner text={`${fn} 3θ = ${fn}(2θ + θ)`} />
    </>
  );
}

function CardFrame({ title }) {
  return (
    <>
      <rect x={26} y={26} width={W - 52} height={H - 52} rx={14} fill="#fff" stroke={SOFT} />
      <rect x={44} y={44} width={W - 88} height={34} rx={8} fill="#f8fafc" stroke={SOFT} />
      <Txt x={W / 2} y={61} color={TEXT} size={15} italic>{title}</Txt>
    </>
  );
}

function ChainStep({ title, lines, upto }) {
  const rows = [];
  let y = 92;
  for (let i = 0; i < upto; i++) {
    const ln = lines[i];
    y += 32;
    rows.push(
      <React.Fragment key={i}>
        <Txt x={128} y={y} color={TEXT} size={13} anchor="end" italic>{ln.lhs ? `${ln.lhs} =` : '='}</Txt>
        <Txt x={140} y={y} color={TEXT} size={13} anchor="start" italic bold={!!ln.final}>{ln.rhs}</Txt>
        <Txt x={W - 48} y={y + 14} color={NOTE} size={10} anchor="end">{ln.rule}</Txt>
      </React.Fragment>
    );
  }
  return (
    <>
      <CardFrame title={title} />
      {rows}
    </>
  );
}

function DerivedCardStep({ fn }) {
  const r = REGISTRY[fn];
  const rows = [];
  let y = 92;
  r.derived.derivation.forEach((ln, i) => {
    y += 34;
    rows.push(
      <React.Fragment key={i}>
        <Txt x={128} y={y} color={TEXT} size={14} anchor="end" italic>{ln.lhs ? `${ln.lhs} =` : '='}</Txt>
        <Txt x={140} y={y} color={TEXT} size={14} anchor="start" italic>{ln.rhs}</Txt>
        <Txt x={W - 48} y={y + 15} color={NOTE} size={10} anchor="end">{ln.note}</Txt>
      </React.Fragment>
    );
  });
  return (
    <>
      <CardFrame title={`${r.label} = ${r.formula}`} />
      {rows}
    </>
  );
}

export function TripleAngleScene({ fn = 'sin', theta = 35, step = 0, framed = false }) {
  const entry = REGISTRY[fn];
  if (!entry) return null;
  if (!entry.scenario) {
    return <SceneFrame framed={framed}><DerivedCardStep fn={fn} /></SceneFrame>;
  }
  if (step <= 1) {
    return <SceneFrame framed={framed}><CircleStep fn={fn} theta={theta} /></SceneFrame>;
  }
  return (
    <SceneFrame framed={framed}>
      <ChainStep title={entry.scenario.title} lines={entry.scenario.lines} upto={step} />
    </SceneFrame>
  );
}

/* ============================================================
   Shared UI pieces
   ============================================================ */

function IdentityBar({ identity, palette, big }) {
  if (!identity) return null;
  const { fnName, lhs, lhsColor = 'red', rhsParts = [] } = identity;
  return (
    <div style={{
      fontSize: big ? '1.26rem' : '1.05rem',
      padding: big ? '14px 18px' : '12px 16px',
      background: palette.panelBg,
      border: `1px solid ${palette.borderSoft}`,
      borderRadius: '10px',
      textAlign: 'center',
      marginBottom: big ? '12px' : '14px',
      fontFamily: 'Georgia, serif',
      color: palette.text,
    }}>
      <em>{fnName}</em>(<span style={{ color: colorOf(palette, lhsColor), fontWeight: 500 }}>{lhs}</span>) ={' '}
      {rhsParts.map((part, i) => (
        <span key={i} style={{
          color: colorOf(palette, part.color),
          fontStyle: part.color !== 'text' ? 'italic' : 'normal',
        }}>{part.text}</span>
      ))}
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
      {FN_ORDER.map((fn) => {
        const isActive = fn === active;
        return (
          <button
            key={fn}
            type="button"
            onClick={() => onChange(fn)}
            title={REGISTRY[fn].label}
            style={{
              flex: 1, padding: '10px 12px',
              border: 'none', borderRadius: '8px',
              background: isActive ? COLORS.deepBlue : 'transparent',
              color: isActive ? COLORS.white : COLORS.text,
              fontFamily: 'inherit', fontSize: '0.92rem', fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.15s, color 0.15s',
              margin: 0,
              lineHeight: 'normal',
            }}
          >
            <span style={{ fontStyle: 'italic' }}>{fn}</span>
            <span style={{ fontStyle: 'normal', opacity: 0.85, fontSize: '0.85em', marginLeft: '2px' }}>(3θ)</span>
          </button>
        );
      })}
    </div>
  );
}

/* ============================================================
   Step shell (BisectedApexDemo v8 styling)
   ============================================================ */

function ControlButton({ onClick, disabled, children, title, primary }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={{
        border: `1px solid ${primary ? SHELL.deepBlue : SHELL.borderSoft}`,
        background: primary ? SHELL.deepBlue : SHELL.white,
        color: primary ? SHELL.white : SHELL.text,
        padding: '7px 16px', borderRadius: '6px', fontSize: '1.02rem', fontWeight: 500,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1, fontFamily: 'inherit', minWidth: '62px',
        transition: 'background 0.15s, opacity 0.15s',
        margin: 0,
        lineHeight: 'normal',
      }}
    >
      {children}
    </button>
  );
}

function StepMetricCard({ label, value, visible }) {
  return (
    <div style={{
      background: SHELL.panelBg,
      border: `1px solid ${SHELL.borderSoft}`,
      borderRadius: '10px', padding: '0.9rem 1.2rem',
      opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease',
      minWidth: 0,
    }}>
      <p style={{
        fontSize: '0.96rem', color: SHELL.textMuted, margin: '0 0 4px', fontStyle: 'italic',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>{label}</p>
      <p style={{
        fontSize: '1.62rem', fontWeight: 500, fontVariantNumeric: 'tabular-nums',
        margin: 0, color: SHELL.deepBlue,
      }}>{value}</p>
    </div>
  );
}

function StepLog({ steps, onStepClick, renderText }) {
  const listRef = useRef(null);
  const activeIndex = steps.length - 1;

  useEffect(() => {
    const el = listRef.current;
    if (!el || typeof el.scrollTo !== 'function') return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <div
      ref={listRef}
      className="tae-step-log"
      style={{
        maxHeight: '500px',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        paddingRight: '2px',
      }}
    >
      {steps.length === 0 && (
        <div style={{
          background: SHELL.white,
          border: `1px dashed ${SHELL.borderSoft}`,
          borderRadius: '8px', padding: '40px 24px', textAlign: 'center',
          fontSize: '1.02rem', color: SHELL.textFaint, fontStyle: 'italic',
          minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          Press Play to step through the proof.
        </div>
      )}
      {steps.map((step, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={i}
            role="button"
            tabIndex={0}
            onClick={() => onStepClick(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStepClick(i); }
            }}
            style={{
              background: isActive ? SHELL.white : 'transparent',
              border: `2px solid ${isActive ? SHELL.deepBlue : 'transparent'}`,
              borderRadius: '8px',
              padding: '12px 14px',
              marginBottom: '6px',
              cursor: 'pointer',
              transition: 'background 0.2s ease, border-color 0.2s ease',
              animation: 'tae-fade-in 0.35s ease',
              outline: 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{
                display: 'inline-block',
                fontSize: '0.864rem',
                fontWeight: 700,
                color: SHELL.white,
                background: isActive ? SHELL.deepBlue : SHELL.textFaint,
                padding: '3px 9px',
                borderRadius: '4px',
                flexShrink: 0,
                fontVariantNumeric: 'tabular-nums',
              }}>{i + 1}</span>
              <span style={{
                fontWeight: isActive ? 700 : 500,
                fontSize: '1.104rem',
                color: isActive ? SHELL.deepBlue : SHELL.textMuted,
              }}>{step.rule}</span>
            </div>
            <p style={{
              fontSize: '0.96rem',
              color: isActive ? SHELL.text : SHELL.textMuted,
              lineHeight: 1.5,
              margin: 0,
              paddingLeft: '42px',
            }}>{renderText(step.description)}</p>
          </div>
        );
      })}
    </div>
  );
}

function StepCard({
  fn, scenario, theta, onThetaChange, step, onStep, playing, onPlayingChange, speed, onSpeedChange, renderText,
}) {
  const totalSteps = scenario.steps.length;
  const isAtEnd = step >= totalSteps;
  const isAtStart = step === 0;
  const playLabel = playing ? 'Pause' : (isAtEnd ? 'Replay' : 'Play');
  const th = rad(theta);

  const handlePlayPause = () => {
    if (step >= totalSteps) { onStep(0); onPlayingChange(true); }
    else onPlayingChange(!playing);
  };
  const handleNext = () => { onPlayingChange(false); onStep(Math.min(step + 1, totalSteps)); };
  const handlePrev = () => { onPlayingChange(false); onStep(Math.max(step - 1, 0)); };
  const handleReset = () => { onPlayingChange(false); onStep(0); };
  const handleJumpTo = (i) => { onPlayingChange(false); onStep(i + 1); };

  const visibleSteps = scenario.steps.slice(0, step);
  const currentLine = scenario.lines[Math.max(0, step - 1)];
  const first = scenario.metricPairs[0];

  return (
    <div style={{
      maxWidth: '1100px',
      margin: '0 auto',
      background: SHELL.white,
      border: `1px solid ${SHELL.borderSoft}`,
      borderRadius: '14px',
      boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05), 0 10px 28px rgba(15, 23, 42, 0.07)',
      padding: '22px',
      color: SHELL.text,
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
        <div style={{ flex: '2 1 0', minWidth: 0 }}>
          <IdentityBar identity={scenario.identity} palette={SHELL} big />

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 4px', marginBottom: '12px' }}>
            <span style={{ fontSize: '1.08rem', color: SHELL.textMuted, fontStyle: 'italic', minWidth: '16px' }}>θ</span>
            <input
              type="range"
              min={10}
              max={80}
              step={1}
              value={theta}
              onChange={(e) => onThetaChange(+e.target.value)}
              style={{ flex: 1, accentColor: SHELL.deepBlue, margin: '2px' }}
            />
            <span style={{
              fontSize: '1.08rem', fontWeight: 500, color: SHELL.deepBlue,
              minWidth: '52px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
            }}>{`${theta}°`}</span>
          </div>

          <div style={{
            background: SHELL.panelBg,
            border: `1px solid ${SHELL.borderSoft}`,
            borderRadius: '10px',
            padding: '8px',
          }}>
            <div style={{ maxWidth: '560px', margin: '0 auto' }}>
              <TripleAngleScene fn={fn} theta={theta} step={step} />
            </div>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '8px', marginTop: '12px', padding: '12px 14px',
            background: SHELL.panelBg,
            border: `1px solid ${SHELL.borderSoft}`,
            borderRadius: '10px',
          }}>
            <ControlButton onClick={handleReset} disabled={isAtStart && !playing} title="Reset">Reset</ControlButton>
            <ControlButton onClick={handlePrev} disabled={isAtStart} title="Previous">‹ Prev</ControlButton>
            <ControlButton onClick={handlePlayPause} title={playing ? 'Pause' : 'Play'} primary>{playLabel}</ControlButton>
            <ControlButton onClick={handleNext} disabled={isAtEnd} title="Next">Next ›</ControlButton>
            <select
              value={speed}
              onChange={(e) => onSpeedChange(+e.target.value)}
              title="Animation speed"
              style={{
                border: `1px solid ${SHELL.borderSoft}`,
                background: SHELL.white,
                color: SHELL.text,
                padding: '7px 10px',
                borderRadius: '6px',
                fontSize: '0.96rem',
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
              marginLeft: '12px', fontSize: '0.936rem',
              color: SHELL.textFaint, fontVariantNumeric: 'tabular-nums',
            }}>{`Step ${step} of ${totalSteps}`}</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '12px', marginTop: '12px',
          }}>
            <StepMetricCard label={first.label} value={formatVal(first.compute(th))} visible={step > 0} />
            <StepMetricCard label={currentLine.rhs} value={formatVal(currentLine.f(th))} visible={step > 0} />
          </div>
        </div>

        <div style={{
          flex: '1 1 0', minWidth: 0,
          background: SHELL.panelBg,
          border: `1px solid ${SHELL.borderSoft}`,
          borderRadius: '10px',
          padding: '18px',
          minHeight: '520px',
        }}>
          <div style={{
            fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '1.6px',
            color: SHELL.textMuted, marginBottom: '16px', fontWeight: 600,
          }}>Derivation</div>
          <StepLog steps={visibleSteps} onStepClick={handleJumpTo} renderText={renderText} />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Derived identity card (DoubleAngleExplorer styling)
   ============================================================ */

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
      {sources.map((src) => (
        <button
          key={src}
          type="button"
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
            margin: 0,
            lineHeight: 'normal',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.panelBg; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = COLORS.white; }}
        >
          See <em style={{ color: COLORS.deepBlue }}>{src}</em>(3θ) proof →
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
          <div style={{ textAlign: 'right', fontSize: '1rem', color: ln.lhs ? COLORS.text : 'transparent' }}>
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

function DerivedMetricCard({ label, value }) {
  return (
    <div style={{
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px',
      padding: '12px 16px',
      minWidth: 0,
    }}>
      <p style={{ fontSize: '0.8rem', color: COLORS.textMuted, margin: '0 0 4px', fontStyle: 'italic' }}>{label}</p>
      <p style={{
        fontSize: '1.35rem', fontWeight: 500, fontVariantNumeric: 'tabular-nums',
        margin: 0, color: COLORS.deepBlue,
      }}>{value}</p>
    </div>
  );
}

function DerivedIdentityCard({ fn, theta, onThetaChange, onJumpTo, intro, renderText }) {
  const r = REGISTRY[fn];
  const d = r.derived;
  const th = rad(theta);

  return (
    <div style={{
      maxWidth: '1100px',
      margin: '0 auto',
      background: COLORS.white,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '14px',
      boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.05)',
      padding: '22px',
      color: COLORS.text,
      boxSizing: 'border-box',
    }}>
      <IdentityBar identity={d.identity} palette={COLORS} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 4px', marginBottom: '14px' }}>
        <span style={{ fontSize: '0.9rem', color: COLORS.textMuted, fontStyle: 'italic', minWidth: '14px' }}>θ</span>
        <input
          type="range"
          min={10}
          max={80}
          step={1}
          value={theta}
          onChange={(e) => onThetaChange(+e.target.value)}
          style={{ flex: 1, accentColor: COLORS.deepBlue, margin: '2px' }}
        />
        <span style={{
          fontSize: '0.9rem', fontWeight: 500, color: COLORS.deepBlue,
          minWidth: '44px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
        }}>{`${theta}°`}</span>
      </div>

      <div style={{ marginBottom: '18px' }}>
        <SectionLabel>How this identity follows</SectionLabel>
        <p style={{ fontSize: '0.92rem', lineHeight: 1.5, color: COLORS.textMuted, margin: '0 0 12px' }}>
          {intro ? renderText(intro) : d.intro}
        </p>
        <SourceButtons sources={r.derivedFrom || []} onJumpTo={onJumpTo} />
      </div>

      <div style={{ marginBottom: '18px' }}>
        <SectionLabel>Derivation</SectionLabel>
        <DerivationDisplay lines={d.derivation} />
      </div>

      <div>
        <SectionLabel>{`Verify at θ = ${theta}°`}</SectionLabel>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${d.metricPairs.length}, minmax(0, 1fr))`,
          gap: '12px',
        }}>
          {d.metricPairs.map((m, i) => (
            <DerivedMetricCard key={i} label={m.label} value={formatVal(m.compute(th))} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Formula table
   ============================================================ */

function FormulaTable({ theta, active, onSelect }) {
  const th = rad(theta);
  return (
    <div style={{
      maxWidth: '1100px', margin: '8px auto 0',
      background: COLORS.white,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '12px',
      overflow: 'hidden',
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
        return (
          <button
            key={fn}
            type="button"
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
              margin: 0,
              lineHeight: 'normal',
            }}
          >
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.95rem',
              color: isActive ? COLORS.deepBlue : COLORS.text,
              fontWeight: isActive ? 600 : 500,
            }}>
              <em>{fn}</em>
              <span style={{ fontStyle: 'normal', color: COLORS.textMuted, marginLeft: '2px' }}>(3θ)</span>
            </div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '0.9rem', color: COLORS.text, fontStyle: 'italic' }}>
              {`= ${r.formula}`}
            </div>
            <div style={{
              textAlign: 'right',
              fontVariantNumeric: 'tabular-nums',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: COLORS.deepBlue,
            }}>{formatVal(r.compute(th))}</div>
            <div style={{ textAlign: 'right', fontSize: '0.72rem', color: COLORS.textFaint }}>
              {r.derivedFrom
                ? <>via {r.derivedFrom.map((d, j) => (
                    <React.Fragment key={d}>
                      {j > 0 && ', '}
                      <em style={{ color: COLORS.textMuted }}>{d}</em>
                    </React.Fragment>
                  ))}</>
                : <span style={{ color: COLORS.textMuted }}>angle sum</span>}
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ============================================================
   Frozen-state preview row (review aid)
   ============================================================ */

function FrozenRow({ fn, frozenKey, onPick }) {
  const keys = REGISTRY[fn].scenario
    ? ['overview', 'step 1', 'step 2', 'step 3', 'step 4', 'step 5']
    : ['card'];

  let preview = null;
  if (frozenKey === 'card') preview = <TripleAngleScene fn={fn} framed />;
  else if (frozenKey === 'overview') preview = <TripleAngleScene fn={fn} theta={35} step={5} framed />;
  else if (frozenKey) preview = <TripleAngleScene fn={fn} theta={35} step={+frozenKey.split(' ')[1]} framed />;

  return (
    <div style={{
      maxWidth: '1100px', margin: '14px auto 0', padding: '10px 14px',
      background: COLORS.panelBg, border: `1px solid ${COLORS.borderSoft}`, borderRadius: '12px',
      fontSize: '0.8rem', color: COLORS.textMuted,
    }}>
      <span style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', fontSize: '0.65rem', marginRight: '8px' }}>
        {`Frozen states (tripleAngleDiagrams.${fn})`}
      </span>
      {keys.map((k) => (
        <button
          key={k}
          type="button"
          onClick={() => onPick(k)}
          style={{
            border: `1px solid ${COLORS.borderSoft}`, background: COLORS.white, color: COLORS.text,
            padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer', margin: '2px',
            fontFamily: 'inherit', lineHeight: 'normal',
          }}
        >{k}</button>
      ))}
      <div>{preview}</div>
    </div>
  );
}

/* ============================================================
   TripleAngleExplorer — default export
   ============================================================ */

export default function TripleAngleExplorer({
  initialFn      = 'sin',
  initialTheta   = 35,
  explanations   = null,
  renderText     = (s) => s,
  stepDurationMs = 2500,
  showFrozen     = true,
}) {
  const [activeFn, setActiveFn] = useState(REGISTRY[initialFn] ? initialFn : 'sin');
  const [theta, setTheta] = useState(initialTheta);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [frozenKey, setFrozenKey] = useState(null);

  useEffect(() => {
    const fromQuery = readFnFromQuery();
    if (fromQuery) setActiveFn(fromQuery);
  }, []);

  useEffect(() => {
    writeFnToQuery(activeFn);
  }, [activeFn]);

  const entry = REGISTRY[activeFn];
  const ex = explanations && explanations[activeFn];

  const scenario = entry.scenario && ex && Array.isArray(ex.steps)
    ? { ...entry.scenario, steps: entry.scenario.steps.map((s, i) => (ex.steps[i] ? { ...s, description: ex.steps[i] } : s)) }
    : entry.scenario;

  const totalSteps = scenario ? scenario.steps.length : 0;

  // autoplay
  useEffect(() => {
    if (!playing) return undefined;
    if (step >= totalSteps) { setPlaying(false); return undefined; }
    const id = setTimeout(() => setStep((s) => Math.min(s + 1, totalSteps)), stepDurationMs / speed);
    return () => clearTimeout(id);
  }, [playing, step, totalSteps, stepDurationMs, speed]);

  const selectFn = (fn) => {
    setActiveFn(fn);
    setStep(0);
    setPlaying(false);
    setFrozenKey(null);
  };

  const changeStep = (s) => {
    setStep(s);
    setFrozenKey(null);
  };

  return (
    <div className="tae-root" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: COLORS.text, lineHeight: 'normal' }}>
      <style>{`
        .tae-root, .tae-root *, .tae-root *::before, .tae-root *::after { box-sizing: border-box; }
        @keyframes tae-fade-in {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tae-step-log::-webkit-scrollbar { display: none; width: 0; height: 0; }
      `}</style>

      <TabStrip active={activeFn} onChange={selectFn} />

      {scenario ? (
        <StepCard
          key={activeFn}
          fn={activeFn}
          scenario={scenario}
          theta={theta}
          onThetaChange={setTheta}
          step={step}
          onStep={changeStep}
          playing={playing}
          onPlayingChange={setPlaying}
          speed={speed}
          onSpeedChange={setSpeed}
          renderText={renderText}
        />
      ) : (
        <DerivedIdentityCard
          key={activeFn}
          fn={activeFn}
          theta={theta}
          onThetaChange={setTheta}
          onJumpTo={selectFn}
          intro={ex ? ex.content : null}
          renderText={renderText}
        />
      )}

      <FormulaTable theta={theta} active={activeFn} onSelect={selectFn} />

      {showFrozen && <FrozenRow fn={activeFn} frozenKey={frozenKey} onPick={setFrozenKey} />}
    </div>
  );
}