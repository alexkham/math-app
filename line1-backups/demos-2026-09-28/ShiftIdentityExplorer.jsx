import React, { useState, useEffect } from 'react';

/* ============================================================
   ShiftIdentityExplorer v1

   The six shift identities of the page table:
     sin(θ + π)   = −sin θ      sin(θ + π/2) =  cos θ
     cos(θ + π)   = −cos θ      cos(θ + π/2) = −sin θ
     tan(θ + π)   =  tan θ      tan(θ + π/2) = −cot θ

   + π/2 rotates P = (cos θ, sin θ) to P′ = (−sin θ, cos θ):
         the coordinates swap — P′'s legs are coloured by
         where they came from.
   + π   rotates P to P′ = (−cos θ, −sin θ): both flip sign.

   Mirrors SupplementaryAngleExplorer / ReflectionDemo
   (scene constants from supplementaryAngleDiagrams).
   Self-contained.

   Named exports: ShiftScene (pure, props → SVG), REGISTRY.
   Default export: the explorer.
   ============================================================ */

/* ---------------- colours ---------------- */

const COLORS = {
  deepBlue:   '#4F46E5',
  sinBrown:   '#B45309',
  teal:       '#0D9488',
  green:      '#16A34A',
  red:        '#DC2626',
  panelBg:    '#F1F5F9',
  panelLight: '#F8FAFC',
  text:       '#1e3a5f',
  textMuted:  '#64748b',
  textFaint:  '#94a3b8',
  borderSoft: '#cbd5e1',
  borderTab:  '#e2e8f0',
  white:      '#ffffff',
};

// scene
const W = 440;
const H = 330;
const CX = 220;
const CY = 170;
const R = 115;
const DEEP = '#4F46E5';
const BROWN = '#B45309';
const TEAL = '#0D9488';
const RED = '#DC2626';
const GREEN = '#16A34A';
const TEXT = '#1e3a5f';
const MUTED = '#64748b';
const SOFT = '#cbd5e1';

const rad = (d) => (d * Math.PI) / 180;
const f2 = (v) => +v.toFixed(2);

/* ---------------- shifts and identities ---------------- */

const SHIFTS = {
  pi:     { label: '+ π',   text: 'π',   turn: 180, name: 'Half turn' },
  halfPi: { label: '+ π/2', text: 'π/2', turn: 90,  name: 'Quarter turn' },
};
const SHIFT_ORDER = ['pi', 'halfPi'];
const FN_ORDER = ['sin', 'cos', 'tan'];

export const REGISTRY = {
  'sin:pi':     { fn: 'sin', shift: 'pi',     rhs: '−sin θ', rhsColor: 'sinBrown', effect: 'sign flips',
                  lhsF: (t) => Math.sin(t + Math.PI),     rhsF: (t) => -Math.sin(t) },
  'cos:pi':     { fn: 'cos', shift: 'pi',     rhs: '−cos θ', rhsColor: 'deepBlue', effect: 'sign flips',
                  lhsF: (t) => Math.cos(t + Math.PI),     rhsF: (t) => -Math.cos(t) },
  'tan:pi':     { fn: 'tan', shift: 'pi',     rhs: 'tan θ',  rhsColor: 'text',     effect: 'unchanged',
                  lhsF: (t) => Math.tan(t + Math.PI),     rhsF: (t) => Math.tan(t) },
  'sin:halfPi': { fn: 'sin', shift: 'halfPi', rhs: 'cos θ',  rhsColor: 'deepBlue', effect: 'sin → cos',
                  lhsF: (t) => Math.sin(t + Math.PI / 2), rhsF: (t) => Math.cos(t) },
  'cos:halfPi': { fn: 'cos', shift: 'halfPi', rhs: '−sin θ', rhsColor: 'sinBrown', effect: 'cos → −sin',
                  lhsF: (t) => Math.cos(t + Math.PI / 2), rhsF: (t) => -Math.sin(t) },
  'tan:halfPi': { fn: 'tan', shift: 'halfPi', rhs: '−cot θ', rhsColor: 'text',     effect: 'tan → −cot',
                  lhsF: (t) => Math.tan(t + Math.PI / 2), rhsF: (t) => -1 / Math.tan(t) },
};
const TABLE_ORDER = ['sin:pi', 'cos:pi', 'tan:pi', 'sin:halfPi', 'cos:halfPi', 'tan:halfPi'];

const lhsText = (fn, shift) => `${fn}(θ + ${SHIFTS[shift].text})`;

function formatVal(v) {
  if (!Number.isFinite(v)) return '∞';
  if (Math.abs(v) > 999) return v > 0 ? '∞' : '−∞';
  return v.toFixed(3);
}

function colorOf(name) {
  return COLORS[name] || COLORS.text;
}

/* ---------------- query ---------------- */

function readQuery() {
  if (typeof window === 'undefined') return { fn: null, shift: null };
  const p = new URLSearchParams(window.location.search);
  const fn = p.get('shiftFn');
  const sh = p.get('shift');
  return { fn: FN_ORDER.includes(fn) ? fn : null, shift: SHIFTS[sh] ? sh : null };
}

function writeQuery(fn, shift) {
  if (typeof window === 'undefined') return;
  try {
    const p = new URLSearchParams(window.location.search);
    if (p.get('shiftFn') === fn && p.get('shift') === shift) return;
    p.set('shiftFn', fn);
    p.set('shift', shift);
    window.history.replaceState(null, '', `${window.location.pathname}?${p.toString()}${window.location.hash}`);
  } catch (_) { /* sandboxed viewer */ }
}

/* ============================================================
   ShiftScene — pure: props → SVG
   ============================================================ */

const polar = (r, a) => [f2(CX + r * Math.cos(a)), f2(CY - r * Math.sin(a))];

function arcPath(r, a0, a1) {
  const [x0, y0] = polar(r, a0);
  const [x1, y1] = polar(r, a1);
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M ${x0} ${y0} A ${r} ${r} 0 ${large} 0 ${x1} ${y1}`;
}

function Txt({ x, y, color = TEXT, size = 12, anchor = 'middle', italic = false, weight, children }) {
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
      fontWeight={weight}
    >
      {children}
    </text>
  );
}

// right triangle O – foot – point, coloured legs, labels on the triangle side
function LegTriangle({ px, py, xCol, yCol, fill, name, xLabel, yLabel }) {
  const xLen = Math.abs(px - CX);
  const yLen = Math.abs(py - CY);
  const showMark = xLen > 12 && yLen > 12;
  const sx = px > CX ? -8 : 8;
  const sy = py < CY ? -8 : 8;

  return (
    <>
      <polygon points={`${CX},${CY} ${px},${CY} ${px},${py}`} fill={fill} fillOpacity="0.06" stroke="none" />
      <line x1={CX} y1={CY} x2={px} y2={py} stroke={MUTED} strokeWidth="1" strokeOpacity="0.7" />
      {xLen > 0.5 && <line x1={CX} y1={CY} x2={px} y2={CY} stroke={xCol} strokeWidth="3.2" strokeLinecap="round" />}
      {yLen > 0.5 && <line x1={px} y1={CY} x2={px} y2={py} stroke={yCol} strokeWidth="3.2" strokeLinecap="round" />}
      {showMark && (
        <polyline
          points={`${f2(px + sx)},${CY} ${f2(px + sx)},${f2(CY + sy)} ${px},${f2(CY + sy)}`}
          fill="none"
          stroke={MUTED}
          strokeWidth="0.9"
        />
      )}
      {xLen > 40 && (
        <Txt x={f2((CX + px) / 2)} y={py < CY ? CY - 10 : CY + 12} color={xCol} size={11} italic>{xLabel}</Txt>
      )}
      {yLen > 24 && (
        <Txt x={px > CX ? px + 8 : px - 8} y={f2((CY + py) / 2)} color={yCol} size={11} anchor={px > CX ? 'start' : 'end'} italic>
          {yLabel}
        </Txt>
      )}
      <circle cx={px} cy={py} r="4.5" fill={TEXT} />
      <Txt
        x={px >= CX ? px + 10 : px - 10}
        y={py <= CY ? py - 8 : py + 10}
        color={TEXT}
        size={13}
        anchor={px >= CX ? 'start' : 'end'}
        weight="600"
      >
        {name}
      </Txt>
    </>
  );
}

export function ShiftScene({ fn = 'sin', shift = 'halfPi', theta = 35, framed = false }) {
  const id = REGISTRY[`${fn}:${shift}`];
  if (!id) return null;

  const t = rad(theta);
  const dt = rad(SHIFTS[shift].turn);
  const t2 = t + dt;
  const [px, py] = polar(R, t);
  const [qx, qy] = polar(R, t2);
  const quarter = shift === 'halfPi';

  // rotation arc P → P′ with arrowhead
  const AR = 62;
  const [ex, ey] = polar(AR, t2);
  const dx = -Math.sin(t2);
  const dy = -Math.cos(t2);
  const bx = ex - dx * 9;
  const by = ey - dy * 9;
  const nx = -dy * 4.5;
  const ny = dx * 4.5;
  let [lx, ly] = polar(R + 20, t + dt / 2);
  if (ly > 280) [lx, ly] = polar(AR + 14, t + dt / 2);

  const bannerText = `${lhsText(fn, shift)} = ${id.rhs}   ·   ${formatVal(id.lhsF(t))} = ${formatVal(id.rhsF(t))}`;

  const style = framed
    ? { border: '1px solid #cbd5e1', background: '#fff', borderRadius: '12px', maxWidth: '100%', display: 'block', margin: '12px auto' }
    : { display: 'block', width: '100%', background: '#fff', borderRadius: '8px' };

  return (
    <svg
      width={framed ? 352 : undefined}
      height={framed ? 264 : undefined}
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      style={style}
    >
      {/* axes */}
      <line x1={CX - R - 12} y1={CY} x2={CX + R + 12} y2={CY} stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1={CX} y1={CY - R - 12} x2={CX} y2={CY + R + 12} stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(0,0,0,0.30)" strokeWidth="1" />

      {/* P′ behind P */}
      <LegTriangle
        px={qx}
        py={qy}
        xCol={quarter ? BROWN : DEEP}
        yCol={quarter ? DEEP : BROWN}
        fill={TEAL}
        name="P′"
        xLabel={quarter ? '−sin θ' : '−cos θ'}
        yLabel={quarter ? 'cos θ' : '−sin θ'}
      />
      <LegTriangle px={px} py={py} xCol={DEEP} yCol={BROWN} fill={DEEP} name="P" xLabel="cos θ" yLabel="sin θ" />

      {/* θ arc */}
      {theta > 0.5 && <path d={arcPath(19, 0, t)} fill="none" stroke={RED} strokeWidth="1.5" />}

      {/* rotation */}
      <path d={arcPath(AR, t, t2 - 0.06)} fill="none" stroke={GREEN} strokeWidth="1.8" />
      <polygon points={`${f2(ex)},${f2(ey)} ${f2(bx + nx)},${f2(by + ny)} ${f2(bx - nx)},${f2(by - ny)}`} fill={GREEN} />
      <Txt x={lx} y={ly} color={GREEN} size={12} italic weight="600">{SHIFTS[shift].label}</Txt>

      {/* centre */}
      <circle cx={CX} cy={CY} r="3.2" fill={TEXT} />
      <Txt x={CX - 9} y={CY + 15} color={MUTED} size={12} anchor="end" italic>O</Txt>
      <Txt x={24} y={26} color={RED} size={12} anchor="start" italic>{`θ = ${theta}°`}</Txt>

      {/* banner */}
      <rect x="18" y={H - 38} width={W - 36} height="28" rx="8" fill="#f8fafc" stroke={SOFT} />
      <Txt x={W / 2} y={H - 24} color={TEXT} size={12.5} italic>{bannerText}</Txt>
    </svg>
  );
}

/* ============================================================
   UI pieces
   ============================================================ */

function TabStrip({ active, shift, onChange }) {
  return (
    <div style={{
      display: 'flex', gap: '4px',
      maxWidth: '1100px', margin: '0 auto 12px',
      padding: '4px',
      background: '#f8fafc',
      border: `1px solid ${COLORS.borderTab}`,
      borderRadius: '12px',
    }}>
      {FN_ORDER.map((fn) => {
        const isActive = fn === active;
        return (
          <button
            key={fn}
            type="button"
            onClick={() => onChange(fn)}
            title={lhsText(fn, shift)}
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
            <span style={{ fontStyle: 'normal', opacity: 0.85, fontSize: '0.85em', marginLeft: '2px' }}>
              {`(θ + ${SHIFTS[shift].text})`}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function IdentityBar({ fn, shift }) {
  const id = REGISTRY[`${fn}:${shift}`];
  const neg = id.rhs.startsWith('−');
  const body = neg ? id.rhs.slice(1) : id.rhs;
  return (
    <div style={{
      fontSize: '1.05rem', padding: '12px 16px',
      background: '#f8fafc',
      border: `1px solid ${COLORS.borderTab}`,
      borderRadius: '10px', textAlign: 'center', marginBottom: '14px',
      fontFamily: 'Georgia, serif', color: COLORS.text,
    }}>
      <em>{fn}</em>(θ + <span style={{ color: COLORS.red, fontWeight: 500 }}>{SHIFTS[shift].text}</span>) ={' '}
      {neg ? '−' : ''}
      <span style={{ color: colorOf(id.rhsColor), fontStyle: 'italic' }}>{body}</span>
    </div>
  );
}

function ShiftAndSlider({ shift, onShift, theta, onTheta }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px', padding: '0 4px', flexWrap: 'wrap' }}>
      <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1.4px', color: COLORS.textMuted, fontWeight: 600 }}>
        Shift
      </span>
      <div style={{ display: 'flex', gap: '6px' }}>
        {SHIFT_ORDER.map((k) => {
          const on = k === shift;
          return (
            <button
              key={k}
              type="button"
              onClick={() => onShift(k)}
              style={{
                border: `1px solid ${on ? COLORS.deepBlue : COLORS.borderSoft}`,
                background: on ? COLORS.deepBlue : COLORS.white,
                color: on ? COLORS.white : COLORS.text,
                padding: '6px 14px', borderRadius: '6px', fontSize: '0.95rem', fontWeight: 500,
                cursor: 'pointer', fontFamily: 'Georgia, serif', fontStyle: 'italic', minWidth: '64px',
                margin: 0, lineHeight: 'normal',
              }}
            >
              {SHIFTS[k].label}
            </button>
          );
        })}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '240px' }}>
        <span style={{ fontSize: '1rem', color: COLORS.textMuted, fontStyle: 'italic', minWidth: '14px' }}>θ</span>
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          value={theta}
          onChange={(e) => onTheta(+e.target.value)}
          style={{ flex: 1, accentColor: COLORS.deepBlue, margin: '2px' }}
        />
        <span style={{
          fontSize: '1rem', fontWeight: 500, color: COLORS.deepBlue,
          minWidth: '50px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
        }}>{`${theta}°`}</span>
      </div>
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div style={{
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px', padding: '0.75rem 1rem',
      minWidth: 0,
    }}>
      <p style={{ fontSize: '0.85rem', color: COLORS.textMuted, margin: '0 0 4px', fontStyle: 'italic' }}>{label}</p>
      <p style={{
        fontSize: '1.4rem', fontWeight: 500, fontVariantNumeric: 'tabular-nums',
        margin: 0, color: COLORS.deepBlue,
      }}>{value}</p>
    </div>
  );
}

function CoordLine({ label, xs, ys, xc, yc, xv, yv }) {
  return (
    <div style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', marginBottom: '6px', color: COLORS.text }}>
      <b>{label}</b> = (<span style={{ color: xc, fontStyle: 'italic' }}>{xs}</span>,{' '}
      <span style={{ color: yc, fontStyle: 'italic' }}>{ys}</span>)
      <span style={{ color: COLORS.textMuted, fontVariantNumeric: 'tabular-nums' }}>
        {` = (${formatVal(xv)}, ${formatVal(yv)})`}
      </span>
    </div>
  );
}

function ConsequenceRow({ on, children }) {
  return (
    <div style={{
      padding: '8px 10px', borderRadius: '8px', marginBottom: '6px',
      border: `2px solid ${on ? COLORS.deepBlue : 'transparent'}`,
      background: on ? COLORS.white : 'transparent',
      fontSize: '0.95rem', lineHeight: 1.5,
      color: on ? COLORS.text : COLORS.textMuted,
    }}>{children}</div>
  );
}

function RotationPanel({ fn, shift, theta, extra, renderText }) {
  const th = rad(theta);
  const c = Math.cos(th);
  const s = Math.sin(th);
  const quarter = shift === 'halfPi';

  return (
    <div style={{
      flex: '1 1 0', minWidth: 0,
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px',
      padding: '14px',
    }}>
      <div style={{
        fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '1.6px',
        color: COLORS.textMuted, marginBottom: '14px', fontWeight: 600,
      }}>{SHIFTS[shift].name}</div>

      <div style={{
        background: COLORS.white, border: `1px solid ${COLORS.borderSoft}`,
        borderRadius: '8px', padding: '10px 12px', marginBottom: '12px',
      }}>
        <CoordLine label="P" xs="cos θ" ys="sin θ" xc={DEEP} yc={BROWN} xv={c} yv={s} />
        {quarter
          ? <CoordLine label="P′" xs="−sin θ" ys="cos θ" xc={BROWN} yc={DEEP} xv={-s} yv={c} />
          : <CoordLine label="P′" xs="−cos θ" ys="−sin θ" xc={DEEP} yc={BROWN} xv={-c} yv={-s} />}
      </div>

      <p style={{ fontSize: '0.95rem', lineHeight: 1.55, color: COLORS.text, margin: '0 0 12px' }}>
        {quarter ? (
          <>
            A quarter turn moves P to P′. The coordinates <b>swap</b>, and the new x picks up a minus sign:
            {' P′’s x-leg has the length of P’s y-leg, and P′’s y-leg the length of P’s x-leg.'}
          </>
        ) : (
          <>
            A half turn moves P to the opposite point. Both coordinates <b>flip sign</b>; the legs keep their lengths and point the other way.
          </>
        )}
      </p>

      {quarter ? (
        <>
          <ConsequenceRow on={fn === 'sin'}>sin(θ + π/2) is the y of P′, so it equals <em>cos θ</em>.</ConsequenceRow>
          <ConsequenceRow on={fn === 'cos'}>cos(θ + π/2) is the x of P′, so it equals <em>−sin θ</em>.</ConsequenceRow>
          <ConsequenceRow on={fn === 'tan'}>tan(θ + π/2) = y / x = cos θ / (−sin θ) = <em>−cot θ</em>.</ConsequenceRow>
        </>
      ) : (
        <>
          <ConsequenceRow on={fn === 'sin'}>sin(θ + π) is the y of P′, so it equals <em>−sin θ</em>.</ConsequenceRow>
          <ConsequenceRow on={fn === 'cos'}>cos(θ + π) is the x of P′, so it equals <em>−cos θ</em>.</ConsequenceRow>
          <ConsequenceRow on={fn === 'tan'}>tan(θ + π) = (−sin θ) / (−cos θ): the two signs cancel, so it equals <em>tan θ</em>.</ConsequenceRow>
        </>
      )}

      <p style={{ fontSize: '0.85rem', color: COLORS.textFaint, margin: '12px 0 0' }}>
        {`Drag θ through the full turn: P′ stays ${quarter ? 'a quarter turn' : 'half a turn'} ahead of P.`}
      </p>

      {extra ? (
        <div style={{ fontSize: '0.95rem', lineHeight: 1.55, color: COLORS.text, marginTop: '12px' }}>{renderText(extra)}</div>
      ) : null}
    </div>
  );
}

function IdentityTable({ fn, shift, theta, onSelect }) {
  const th = rad(theta);
  return (
    <div style={{
      maxWidth: '1100px', margin: '8px auto 0',
      background: COLORS.white,
      border: `1px solid ${COLORS.borderTab}`,
      borderRadius: '12px',
      overflow: 'hidden',
      color: COLORS.text,
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '130px 1fr 130px 100px',
        padding: '8px 16px',
        background: '#f8fafc',
        borderBottom: `1px solid ${COLORS.borderTab}`,
        fontSize: '0.62rem',
        textTransform: 'uppercase',
        letterSpacing: '1.4px',
        color: COLORS.textMuted,
        fontWeight: 600,
      }}>
        <div>Function</div>
        <div>Identity</div>
        <div>Effect</div>
        <div style={{ textAlign: 'right' }}>Value</div>
      </div>
      {TABLE_ORDER.map((k, i) => {
        const id = REGISTRY[k];
        const on = id.fn === fn && id.shift === shift;
        return (
          <button
            key={k}
            type="button"
            onClick={() => onSelect(id.fn, id.shift)}
            style={{
              display: 'grid',
              gridTemplateColumns: '130px 1fr 130px 100px',
              alignItems: 'center',
              width: '100%',
              padding: '9px 16px',
              border: 'none',
              borderTop: i === 0 ? 'none' : `1px solid ${COLORS.borderTab}`,
              borderLeft: `3px solid ${on ? COLORS.deepBlue : 'transparent'}`,
              background: on ? '#f8fafc' : COLORS.white,
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
              fontFamily: 'Georgia, serif', fontSize: '0.95rem',
              color: on ? COLORS.deepBlue : COLORS.text, fontWeight: on ? 600 : 500,
            }}>
              <em>{id.fn}</em>
              <span style={{ fontStyle: 'normal', color: COLORS.textMuted, marginLeft: '2px' }}>
                {`(θ + ${SHIFTS[id.shift].text})`}
              </span>
            </div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '0.9rem', color: COLORS.text, fontStyle: 'italic' }}>
              {`= ${id.rhs}`}
            </div>
            <div style={{
              fontSize: '0.78rem',
              color: id.effect === 'unchanged' ? COLORS.deepBlue : COLORS.red,
              fontStyle: 'italic',
            }}>{id.effect}</div>
            <div style={{
              textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontSize: '0.95rem',
              fontWeight: 500, color: COLORS.deepBlue,
            }}>{formatVal(id.lhsF(th))}</div>
          </button>
        );
      })}
    </div>
  );
}

function FrozenRow({ fn, frozen, onPick }) {
  return (
    <div style={{
      maxWidth: '1100px', margin: '14px auto 0', padding: '10px 14px',
      background: '#f8fafc', border: `1px solid ${COLORS.borderTab}`, borderRadius: '12px',
      fontSize: '0.8rem', color: COLORS.textMuted,
    }}>
      <span style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', fontSize: '0.65rem', marginRight: '8px' }}>
        {`Frozen states (shiftIdentityDiagrams, ${fn})`}
      </span>
      {SHIFT_ORDER.map((k) => (
        <button
          key={k}
          type="button"
          onClick={() => onPick(k)}
          style={{
            border: `1px solid ${COLORS.borderTab}`, background: COLORS.white, color: COLORS.text,
            padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer', margin: '2px',
            fontFamily: 'inherit', lineHeight: 'normal',
          }}
        >{k}</button>
      ))}
      <div>{frozen ? <ShiftScene fn={fn} shift={frozen} theta={35} framed /> : null}</div>
    </div>
  );
}

/* ============================================================
   ShiftIdentityExplorer — default export
   ============================================================ */

export default function ShiftIdentityExplorer({
  initialFn    = 'sin',
  initialShift = 'halfPi',
  initialTheta = 35,
  explanations = null,
  renderText   = (s) => s,
  showFrozen   = true,
}) {
  const [fn, setFn] = useState(FN_ORDER.includes(initialFn) ? initialFn : 'sin');
  const [shift, setShift] = useState(SHIFTS[initialShift] ? initialShift : 'halfPi');
  const [theta, setTheta] = useState(initialTheta);
  const [frozen, setFrozen] = useState(null);

  useEffect(() => {
    const q = readQuery();
    if (q.fn) setFn(q.fn);
    if (q.shift) setShift(q.shift);
  }, []);

  useEffect(() => {
    writeQuery(fn, shift);
  }, [fn, shift]);

  const id = REGISTRY[`${fn}:${shift}`];
  const th = rad(theta);
  const extra = explanations ? explanations[`${fn}:${shift}`] : null;

  const pickFn = (f) => { setFn(f); setFrozen(null); };
  const pickShift = (s) => { setShift(s); setFrozen(null); };
  const pickRow = (f, s) => { setFn(f); setShift(s); setFrozen(null); };

  return (
    <div className="sie-root" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: COLORS.text, lineHeight: 'normal' }}>
      <style>{`
        .sie-root, .sie-root *, .sie-root *::before, .sie-root *::after { box-sizing: border-box; }
      `}</style>

      <TabStrip active={fn} shift={shift} onChange={pickFn} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        background: COLORS.white,
        border: `1px solid ${COLORS.borderSoft}`,
        borderRadius: '14px',
        boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05), 0 10px 28px rgba(15, 23, 42, 0.07)',
        padding: '20px',
        color: COLORS.text,
      }}>
        <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
          <div style={{ flex: '2.4 1 0', minWidth: 0 }}>
            <IdentityBar fn={fn} shift={shift} />
            <ShiftAndSlider shift={shift} onShift={pickShift} theta={theta} onTheta={setTheta} />

            <div style={{
              background: COLORS.panelBg,
              border: `1px solid ${COLORS.borderSoft}`,
              borderRadius: '10px',
              padding: '10px',
            }}>
              <div style={{ maxWidth: '620px', margin: '0 auto' }}>
                <ShiftScene fn={fn} shift={shift} theta={theta} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px', marginTop: '12px' }}>
              <MetricCard label={lhsText(fn, shift)} value={formatVal(id.lhsF(th))} />
              <MetricCard label={id.rhs} value={formatVal(id.rhsF(th))} />
            </div>
          </div>

          <RotationPanel fn={fn} shift={shift} theta={theta} extra={extra} renderText={renderText} />
        </div>
      </div>

      <IdentityTable fn={fn} shift={shift} theta={theta} onSelect={pickRow} />

      {showFrozen && <FrozenRow fn={fn} frozen={frozen} onPick={setFrozen} />}
    </div>
  );
}