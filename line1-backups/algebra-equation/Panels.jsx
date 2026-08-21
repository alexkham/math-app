// equation-panels.jsx
// Four panel components (Hero, Controls, SignChart, Explanation) plus the
// small primitives they share (Tooltip, ValueChip, Segmented, ParamControl,
// Ticks). Everything consumes a single `iq` prop returned by useEquation.

import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  G, X, Xinv, Y_at, Y_clip,
  fmt, formatTick, niceTickStep, signSymOf, signClassOf, sel,
} from './logic.js';

// ============================================================
// PRIMITIVES
// ============================================================

export function Tooltip({ content, children, side = 'top' }) {
  const [visible, setVisible] = useState(false);
  const timer = useRef(null);
  if (!content) return children;
  const show = () => { timer.current = setTimeout(() => setVisible(true), 380); };
  const hide = () => { if (timer.current) clearTimeout(timer.current); setVisible(false); };
  return (
    <span className="tt-wrap" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {visible && <span className={`tt tt-${side}`}>{content}</span>}
    </span>
  );
}

export function ValueChip({ value }) {
  const v = value;
  const cls = v > 0 ? 'pos' : v < 0 ? 'neg' : 'zero';
  const sign = v > 0 ? '+' : v < 0 ? '\u2212' : '';
  const display = v === 0 ? '0' : (sign + Math.abs(v));
  return <span className={`val-chip ${cls}`}>{display}</span>;
}

export function Segmented({ active, label, tooltip, onClick, children }) {
  return (
    <div className={'mgroup' + (active ? ' on' : '')}>
      <Tooltip content={tooltip}>
        <button className="mbtn" onClick={onClick}>{label}</button>
      </Tooltip>
      {children && <div className="mdetail">{children}</div>}
    </div>
  );
}

function validateDraft(raw, pr) {
  const t = String(raw).trim();
  if (t === '') return { ok: false, err: 'required', n: null };
  if (t === '-' || t === '.' || t === '-.') return { ok: false, err: 'incomplete', n: null };
  if (!/^-?\d*\.?\d*$/.test(t)) return { ok: false, err: 'not a number', n: null };
  const n = Number(t);
  if (!Number.isFinite(n)) return { ok: false, err: 'not a number', n: null };
  if (n < pr.min) return { ok: false, err: `< ${pr.min}`, n };
  if (n > pr.max) return { ok: false, err: `> ${pr.max}`, n };
  if (Number.isInteger(pr.step) && pr.step >= 1 && !Number.isInteger(n)) {
    return { ok: false, err: 'must be integer', n };
  }
  return { ok: true, err: null, n };
}

function ParamControl({ pr, value, mode, dispatch }) {
  const [draft, setDraft] = useState(String(value));
  const focusedRef = useRef(false);

  useEffect(() => {
    if (!focusedRef.current) setDraft(String(value));
  }, [value]);

  const v = validateDraft(draft, pr);
  const showError = mode === 'input' && !v.ok && draft !== String(value);

  const onSlide = (val) =>
    dispatch({ type: 'SET_PARAM', key: pr.key, value: val, min: pr.min, max: pr.max });

  const onInputChange = (e) => setDraft(e.target.value);
  const onInputBlur = (e) => {
    focusedRef.current = false;
    const res = validateDraft(e.target.value, pr);
    if (res.ok) {
      dispatch({ type: 'SET_PARAM', key: pr.key, value: res.n, min: pr.min, max: pr.max });
      setDraft(String(res.n));
    } else {
      setDraft(String(value));
    }
  };
  const onInputFocus = () => { focusedRef.current = true; };
  const onInputKey = (e) => {
    if (e.key === 'Enter') {
      const res = validateDraft(e.currentTarget.value, pr);
      if (res.ok) {
        dispatch({ type: 'SET_PARAM', key: pr.key, value: res.n, min: pr.min, max: pr.max });
        setDraft(String(res.n));
        e.currentTarget.blur();
      }
    } else if (e.key === 'Escape') {
      setDraft(String(value));
      e.currentTarget.blur();
    }
  };

  const toggleMode = () => dispatch({
    type: 'SET_PARAM_MODE', key: pr.key,
    mode: mode === 'input' ? 'slider' : 'input',
  });

  return (
    <div className={'ctrl' + (showError ? ' ctrl-error' : '')}>
      <Tooltip content={pr.tooltip}>
        <span className="ctrl-label">{pr.label}</span>
      </Tooltip>
      <div className="ctrl-mid">
        {mode === 'input'
          ? <input className={'ctrl-num' + (showError ? ' invalid' : '')}
                   type="text" inputMode="numeric"
                   aria-invalid={showError ? 'true' : 'false'}
                   value={draft}
                   onChange={onInputChange}
                   onBlur={onInputBlur}
                   onFocus={onInputFocus}
                   onKeyDown={onInputKey} />
          : <input className="ctrl-range" type="range" min={pr.min} max={pr.max} step={pr.step}
                   value={value} onChange={e => onSlide(e.target.value)} />
        }
      </div>
      <ValueChip value={value} />
      <Tooltip content={mode === 'slider' ? 'switch to manual input' : 'switch to slider'}>
        <button className={'mode-toggle' + (mode === 'input' ? ' on' : '')} onClick={toggleMode}>
          {mode === 'slider' ? '\u2328' : '\u2225'}
        </button>
      </Tooltip>
      {mode === 'slider' && <Ticks pr={pr} value={value} onChange={onSlide} />}
      {mode === 'input' && (
        showError
          ? <span className="ctrl-err">{v.err} \u00B7 allowed [{pr.min}, {pr.max}]</span>
          : <span className="ctrl-hint">[{pr.min}, {pr.max}]</span>
      )}
    </div>
  );
}

function Ticks({ pr, value, onChange }) {
  const range = pr.max - pr.min;
  const ticks = [];
  for (let t = pr.min; t <= pr.max; t += pr.step) {
    const pct = ((t - pr.min) / range) * 100;
    const isZero = t === 0;
    const isCur = t === value;
    const showLabel = isZero || isCur || Math.abs(t) === pr.max;
    ticks.push(
      <span key={t}
            className={'tick' + (isZero ? ' zero' : '') + (isCur ? ' current' : '')}
            style={{ left: `${pct}%` }}
            onClick={() => onChange(t)}>
        <span className="mark"></span>
        {showLabel ? t : ''}
      </span>
    );
  }
  return <div className="ctrl-ticks">{ticks}</div>;
}

// ============================================================
// HERO (equation line + number line + probe + solutions pill)
// ============================================================
export function Hero({ iq }) {
  const { state, type, computed, N } = iq;

  return (
    <div className="card pad hero">
      <div className="ineq">
        <span className="lhs">{type.expr(state.p)}</span>
        <Tooltip content="Equation: solve for x where f(x) equals n.">
          <span className="op">=</span>
        </Tooltip>
        <span className="n-val">{N}</span>
      </div>

      <div className="diagram-wrap">
        <NumberLine iq={iq} />
        <Legend />
      </div>

      <ProbeReadout iq={iq} />

      <div className="probe-row">
        <ProbeRow iq={iq} />
        <ResultPills iq={iq} />
      </div>
    </div>
  );
}

// ----- Legend -----
function Legend() {
  return (
    <div className="legend">
      <Tooltip content="The function being analyzed."><span className="item"><span className="bar" style={{background:'var(--blue2)'}}></span>f(x)</span></Tooltip>
      <Tooltip content="The right-hand side of the equation, drawn as a small tick on the y-axis."><span className="item"><span className="bar" style={{background:'var(--blue2)', borderRadius:0, width:6}}></span>level n</span></Tooltip>
      <Tooltip content="x-values where the curve crosses level n. These are the solutions."><span className="item"><span className="swatch" style={{background:'var(--blue2)'}}></span>solution</span></Tooltip>
      <Tooltip content="Where the probe marble has been. Blue = at/near a solution; amber = away from one."><span className="item"><span className="bar" style={{background:'var(--blue)', opacity:.4}}></span>/<span className="bar" style={{background:'var(--amber)', opacity:.4}}></span>trail</span></Tooltip>
    </div>
  );
}

// ----- Probe readout under SVG -----
function ProbeReadout({ iq }) {
  const { state, computed, F, N, holds } = iq;
  const x = state.marble;
  const yf = F(x);
  const d = yf - N;
  const hit = Math.abs(d) < 0.5;

  let stopLabel = null;
  if (state.mode === 'step') {
    const cur = computed.stepStops[state.stepIdx];
    if (cur) stopLabel = <span className="stop-label">{cur.label}</span>;
  }

  return (
    <div className="tp">
      {stopLabel}
      f(<code>{fmt(x)}</code>) = <code>{fmt(yf)}</code>, n = <code>{fmt(N)}</code>{' \u2192 '}
      {hit
        ? <b className="yes">solution</b>
        : <><b className="no">not a solution</b> <span style={{color:'var(--muted)'}}>(off by {fmt(Math.abs(d))})</span></>}
    </div>
  );
}

// ----- Probe row (drag / step / auto) -----
function ProbeRow({ iq }) {
  const { state, dispatch, computed } = iq;
  const stepPrev = () => {
    const idx = Math.max(0, state.stepIdx - 1);
    dispatch({ type: 'SET_STEP_IDX', idx });
    dispatch({ type: 'SET_MARBLE', x: computed.stepStops[idx].x, noTrail: true });
  };
  const stepNext = () => {
    const idx = Math.min(computed.stepStops.length - 1, state.stepIdx + 1);
    dispatch({ type: 'SET_STEP_IDX', idx });
    dispatch({ type: 'SET_MARBLE', x: computed.stepStops[idx].x, noTrail: true });
  };
  const stepAtEnd = state.stepIdx >= computed.stepStops.length - 1;

  return (
    <div className="probe">
      <Segmented active={state.mode === 'drag'} label={<>{'\u270B'} drag</>}
                 tooltip="Drag the marble freely along the axis (shift-drag snaps to integers)."
                 onClick={() => dispatch({ type: 'SET_MODE', mode: 'drag' })} />
      <Segmented active={state.mode === 'step'} label={<>{'\u27AD'} step</>}
                 tooltip="Step between test points: roots and midpoints of intervals."
                 onClick={() => dispatch({ type: 'SET_MODE', mode: 'step' })}>
        <Tooltip content="Previous stop">
          <button className="stepbtn" disabled={state.mode !== 'step' || state.stepIdx === 0} onClick={stepPrev}>{'\u25C0 prev'}</button>
        </Tooltip>
        <Tooltip content="Next stop">
          <button className="stepbtn" disabled={state.mode !== 'step' || stepAtEnd} onClick={stepNext}>{'next \u25B6'}</button>
        </Tooltip>
      </Segmented>
      <Segmented active={state.mode === 'auto'} label={<>{'\u25B6'} auto</>}
                 tooltip="Sweep the marble back and forth automatically."
                 onClick={() => dispatch({ type: 'SET_MODE', mode: 'auto' })}>
        <Tooltip content="Play or pause the sweep">
          <button className="playbtn" onClick={() => dispatch({ type: 'TOGGLE_PLAY' })}>
            {state.autoPlaying ? 'pause' : 'play'}
          </button>
        </Tooltip>
        <Tooltip content="How fast the marble sweeps">
          <div className="speedwrap">
            <span>speed</span>
            <input type="range" min="0.1" max="2.5" step="0.1" value={state.autoSpeed}
                   onChange={e => dispatch({ type: 'SET_SPEED', speed: e.target.value })} />
            <span className="speedval">{state.autoSpeed.toFixed(1)}&times;</span>
          </div>
        </Tooltip>
      </Segmented>
      <Tooltip content="Erase the trail of past probe positions.">
        <button className="clearbtn" onClick={() => dispatch({ type: 'CLEAR_TRAIL' })}>
          {'\u21BA clear trail'}
        </button>
      </Tooltip>
    </div>
  );
}

// ----- Result pills (solutions list) -----
function ResultPills({ iq }) {
  const { computed, dispatch } = iq;
  const sols = computed.solutions;
  const text = sols.length === 0
    ? 'no real solutions'
    : sols.map(s => fmt(s)).join(', ');
  return (
    <div className="pills">
      <Tooltip content="x-values where f(x) = n. Click in the list below to jump.">
        <div className="pill compact">
          <span className="k">solutions</span>
          <span className="v">{text}</span>
        </div>
      </Tooltip>
    </div>
  );
}

// ============================================================
// NUMBER LINE SVG
// ============================================================
function NumberLine({ iq }) {
  const { state, dispatch, type, computed, F, N, holds } = iq;
  const { viewRange: vr, curveYRange: yR, curveSegments, solutions } = computed;
  const svgRef = useRef(null);

  const [dragging, setDragging] = useState(false);

  const clientToVal = useCallback((e) => {
    const svg = svgRef.current;
    if (!svg) return 0;
    const r = svg.getBoundingClientRect();
    const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
    return Xinv(cx / r.width * G.W, vr);
  }, [vr]);

  useEffect(() => {
    if (!dragging) return;
    const move = (e) => {
      e.preventDefault();
      let x = clientToVal(e);
      if (e.shiftKey) x = Math.round(x);
      x = Math.max(vr.lo, Math.min(vr.hi, x));
      dispatch({ type: 'SET_MARBLE', x });
    };
    const up = () => setDragging(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
  }, [dragging, clientToVal, vr, dispatch]);

  const y0 = (G.curveTop + G.curveBottom) / 2;

  // y ticks
  const yStep = niceTickStep(yR.max - yR.min, 4);
  const yTicks = [];
  for (let v = Math.ceil(yR.min / yStep) * yStep; v <= yR.max + 1e-9; v += yStep) {
    if (Math.abs(v) < yStep * 0.01) v = 0;
    const py = Y_at(v, yR);
    if (py === null) continue;
    const isZero = Math.abs(v) < 1e-9;
    yTicks.push(
      <g key={`yt-${v.toFixed(4)}`}>
        <line x1={G.padX - 3} y1={py} x2={G.padX + 3} y2={py}
              stroke="#94a3b8" strokeWidth={isZero ? 1.5 : 1} />
        <text x={G.padX - 6} y={py + 3} fontSize="9.5"
              fill={isZero ? '#475569' : '#94a3b8'} textAnchor="end"
              fontWeight={isZero ? 600 : 400}>{formatTick(v)}</text>
      </g>
    );
  }

  // level n marker on y-axis
  const pyN = Y_at(N, yR);
  const nMark = pyN !== null ? (
    <g>
      <line x1={G.padX - 6} y1={pyN} x2={G.padX + 6} y2={pyN}
            stroke="#2563eb" strokeWidth={2} />
      <text x={G.padX - 10} y={pyN + 3} fontSize="10" fill="#2563eb"
            textAnchor="end" fontWeight={700}>n = {fmt(N)}</text>
    </g>
  ) : null;

  // curve path
  const curvePaths = curveSegments.segs.map((seg, i) => {
    const d = seg.map((p, j) =>
      `${j === 0 ? 'M' : 'L'}${X(p.x, vr).toFixed(1)} ${Y_clip(p.y, yR).toFixed(1)}`
    ).join(' ');
    return <path key={`c-${i}`} d={d} fill="none" stroke="#2563eb"
                 strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />;
  });

  // trail (colored blue when at/near a solution, amber otherwise)
  const trailLines = state.trail.map((seg, i) => {
    if (seg.x1 < vr.lo || seg.x0 > vr.hi) return null;
    const ok = holds((seg.x0 + seg.x1) / 2);
    return (
      <line key={`tr-${i}`}
            x1={X(Math.max(seg.x0, vr.lo), vr)} y1={G.trailY}
            x2={X(Math.min(seg.x1, vr.hi), vr)} y2={G.trailY}
            stroke={ok ? '#3b82f6' : '#f59e0b'} strokeWidth={3} opacity={0.4}
            strokeLinecap="round" />
    );
  });

  // x ticks
  const xTicks = [];
  for (let v = Math.ceil(vr.lo); v <= Math.floor(vr.hi); v++) {
    xTicks.push(
      <g key={`xt-${v}`}>
        <line x1={X(v, vr)} y1={G.axisY - 4} x2={X(v, vr)} y2={G.axisY + 4} stroke="#94a3b8" />
        <text x={X(v, vr)} y={G.tickLabelY} fontSize="10" fill="#94a3b8" textAnchor="middle">{v}</text>
      </g>
    );
  }

  // solution markers
  const solMarks = solutions.map(x => {
    if (x < vr.lo || x > vr.hi) return null;
    const cx = X(x, vr);
    const py = Y_at(N, yR);
    return (
      <g key={`sol-${x}`}>
        {py !== null && (
          <>
            <line x1={cx} y1={py} x2={cx} y2={G.axisY}
                  stroke="#2563eb" strokeWidth={1} strokeDasharray="2 2" opacity={0.5} />
            <circle cx={cx} cy={py} r={4.5} fill="#3b82f6" stroke="#fff" strokeWidth={2} />
          </>
        )}
        <circle cx={cx} cy={G.axisY} r={6}
                fill="#2563eb"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  dispatch({ type: 'SET_MODE', mode: 'step' });
                  dispatch({ type: 'SET_MARBLE', x, noTrail: true });
                }} />
        <text x={cx} y={G.axisY - 9} fontSize="11" fill="#2563eb"
              textAnchor="middle" fontWeight={700}>{fmt(x)}</text>
      </g>
    );
  });

  // marble + projection to curve + |f-n| bar
  const mx = X(state.marble, vr);
  const ok = holds(state.marble);
  const mc = ok ? '#3b82f6' : '#f59e0b';
  const md = ok ? '#2563eb' : '#b45309';
  const fv = F(state.marble);
  let marbleExtras = null;
  if (Number.isFinite(fv)) {
    const cy = Y_clip(fv, yR);
    marbleExtras = (
      <>
        <line x1={mx} y1={cy} x2={mx} y2={G.marbleY - 9}
              stroke={md} strokeWidth={1} strokeDasharray="3 3" opacity={0.55} />
        <circle cx={mx} cy={cy} r={3.5} fill={mc} stroke={md} strokeWidth={1.5} />
        {pyN !== null && (
          <line x1={mx} y1={Math.min(cy, pyN)} x2={mx} y2={Math.max(cy, pyN)}
                stroke="#f59e0b" strokeWidth={3} opacity={0.45} />
        )}
      </>
    );
  }

  return (
    <div className="nl">
      <svg ref={svgRef} viewBox={`0 0 ${G.W} ${G.totalH}`} style={{ touchAction: 'none' }}>
        {/* y-axis */}
        <line x1={G.padX} y1={G.curveTop - 2} x2={G.padX} y2={G.curveBottom + 2}
              stroke="#94a3b8" strokeWidth={1} />
        <text x={G.padX - 4} y={G.curveTop - 2} fontSize="10"
              fill="#475569" textAnchor="end" fontStyle="italic" fontWeight={600}>y</text>
        <line x1={G.padX} y1={y0} x2={G.W - G.padX} y2={y0}
              stroke="#94a3b8" strokeWidth={1} strokeDasharray="3 3" />
        {yTicks}
        {nMark}

        {curvePaths}
        {trailLines}

        {/* x-axis */}
        <line x1={G.padX} y1={G.axisY} x2={G.W - G.padX} y2={G.axisY} stroke="#475569" strokeWidth={1.5} />
        <polygon points={`${G.W - G.padX},${G.axisY} ${G.W - G.padX - 9},${G.axisY - 5} ${G.W - G.padX - 9},${G.axisY + 5}`} fill="#475569" />
        <polygon points={`${G.padX},${G.axisY} ${G.padX + 9},${G.axisY - 5} ${G.padX + 9},${G.axisY + 5}`} fill="#475569" />
        <text x={G.W - G.padX + 6} y={G.axisY + 4} fontSize="11" fill="#475569"
              fontStyle="italic" fontWeight={600}>x</text>
        {xTicks}

        {solMarks}

        {marbleExtras}
        <circle cx={mx} cy={G.marbleY} r={8} fill={mc} stroke={md} strokeWidth={2}
                style={{ cursor: 'grab' }}
                onMouseDown={(e) => { e.preventDefault(); setDragging(true); if (state.mode !== 'drag') dispatch({ type: 'SET_MODE', mode: 'drag' }); }}
                onTouchStart={(e) => { e.preventDefault(); setDragging(true); if (state.mode !== 'drag') dispatch({ type: 'SET_MODE', mode: 'drag' }); }} />
      </svg>
    </div>
  );
}

// ============================================================
// CONTROLS (templates, generic form, parameters)
// ============================================================
export function Controls({ iq }) {
  const { state, dispatch, type } = iq;

  const copyShareUrl = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="card pad">
      <div className="ct">
        <span>Templates &amp; parameters</span>
        <Tooltip content="Copy a link that restores this configuration.">
          <button className="ct-action" onClick={copyShareUrl}>copy link</button>
        </Tooltip>
      </div>

      <div className="templates">
        {type.templates.map((t, i) => (
          <Tooltip key={i} content={`Load preset: ${t.name}`}>
            <button className={i === state.tpl ? 'on' : ''}
                    onClick={() => dispatch({ type: 'SET_TEMPLATE', tpl: i })}>{t.name}</button>
          </Tooltip>
        ))}
      </div>

      <Tooltip content={type.description} side="bottom">
        <div className="generic-form">{type.genericForm}</div>
      </Tooltip>

      <div className="params-grid">
        {type.params.map(pr => (
          <ParamControl key={pr.key} pr={pr}
                        value={state.p[pr.key]}
                        mode={state.paramMode[pr.key] || 'slider'}
                        dispatch={dispatch} />
        ))}
      </div>

      <Tooltip content="Restore the current template's defaults.">
        <button className="reset-btn" onClick={() => dispatch({ type: 'RESET' })}>
          {'\u21BA reset'}
        </button>
      </Tooltip>
    </div>
  );
}

// ============================================================
// SIGN CHART of f(x) - n across intervals separated by solutions
// ============================================================
export function SignChart({ iq }) {
  const { state, dispatch, type, computed, F, N } = iq;
  const sols = computed.solutions;
  const vr = computed.viewRange;
  const h = x => F(x) - N;

  const jumpMarble = (x) => {
    dispatch({ type: 'SET_MARBLE', x, noTrail: true });
  };

  if (sols.length === 0) {
    const sign = Math.sign(h(0)) || 1;
    return (
      <table className="sc">
        <tbody>
          <tr><th></th><th>all real x</th></tr>
          <tr className="prod">
            <td className="rl">{type.rowLabel}</td>
            <td className={sign > 0 ? 'sp' : 'sn'}>{sign > 0 ? '+' : '\u2212'}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  // build header cells: interval, root, interval, root, ..., interval
  const headerCells = [];
  // first interval header
  headerCells.push(
    <th key="ih-0" className="interval-cell" onClick={() => jumpMarble(sel.sampleAt(0, sols, vr))}>
      <Tooltip content={`Test point: x = ${fmt(sel.sampleAt(0, sols, vr))}`}>
        <span>x &lt; {fmt(sols[0])}</span>
      </Tooltip>
    </th>
  );
  for (let i = 0; i < sols.length; i++) {
    headerCells.push(
      <th key={`bh-${i}`} className="critc" onClick={() => jumpMarble(sols[i])}>
        <Tooltip content={`Solution. Click to jump to x = ${fmt(sols[i])}.`}>
          <span>{fmt(sols[i])}</span>
        </Tooltip>
      </th>
    );
    const label = i + 1 < sols.length
      ? `${fmt(sols[i])} \u2013 ${fmt(sols[i + 1])}`
      : `x > ${fmt(sols[i])}`;
    headerCells.push(
      <th key={`ih-${i+1}`} className="interval-cell"
          onClick={() => jumpMarble(sel.sampleAt(i + 1, sols, vr))}>
        <Tooltip content={`Test point: x = ${fmt(sel.sampleAt(i + 1, sols, vr))}`}>
          <span>{label}</span>
        </Tooltip>
      </th>
    );
  }

  // row cells matching the same alternation
  const rowCells = [];
  rowCells.push(renderSignCell(h(sel.sampleAt(0, sols, vr)), 0, () => jumpMarble(sel.sampleAt(0, sols, vr))));
  for (let i = 0; i < sols.length; i++) {
    rowCells.push(<td key={`rt-${i}`} className="sz" onClick={() => jumpMarble(sols[i])} style={{cursor:'pointer'}}>0</td>);
    rowCells.push(renderSignCell(h(sel.sampleAt(i + 1, sols, vr)), i + 1, () => jumpMarble(sel.sampleAt(i + 1, sols, vr))));
  }

  return (
    <table className="sc">
      <tbody>
        <tr><th></th>{headerCells}</tr>
        <tr className="prod">
          <td className="rl">{type.rowLabel}</td>
          {rowCells}
        </tr>
      </tbody>
    </table>
  );
}

function renderSignCell(v, key, onClick) {
  if (!Number.isFinite(v)) {
    return <td key={`c-${key}`} className="undef">{'\u00D7'}</td>;
  }
  const cls = v > 0 ? 'sp' : v < 0 ? 'sn' : 'sz';
  return (
    <td key={`c-${key}`} className={`interval-cell ${cls}`} onClick={onClick}>
      {v > 0 ? '+' : v < 0 ? '\u2212' : '0'}
    </td>
  );
}

// ============================================================
// EXPLANATION (tabs: live / strategy)
// ============================================================
export function Explanation({ iq }) {
  const { state, dispatch } = iq;
  const x = state.marble;
  const liveLabel = `at x = ${fmt(x)}`;
  return (
    <>
      <div className="ct">
        <span>Explanation</span>
        <span className="explain-tabs">
          <Tooltip content="What's happening at the marble's current position.">
            <button className={'etab' + (state.explainTab === 'live' ? ' on' : '')}
                    onClick={() => dispatch({ type: 'SET_EXPLAIN_TAB', tab: 'live' })}>{liveLabel}</button>
          </Tooltip>
          <Tooltip content="The general procedure for solving equations of this type.">
            <button className={'etab' + (state.explainTab === 'strategy' ? ' on' : '')}
                    onClick={() => dispatch({ type: 'SET_EXPLAIN_TAB', tab: 'strategy' })}>strategy</button>
          </Tooltip>
        </span>
      </div>
      {state.explainTab === 'live' ? <LiveTab iq={iq} /> : <StrategyTab iq={iq} />}
    </>
  );
}

function LiveTab({ iq }) {
  const { state, F, N, holds, computed } = iq;
  const x = state.marble;
  const yf = F(x);
  const d = yf - N;
  const hit = Math.abs(d) < 0.5;

  let onSolutionTag = null;
  if (computed.solutions.some(s => Math.abs(s - x) < 0.05)) {
    onSolutionTag = <span style={{color:'var(--blue2)', fontWeight:700}}> \u00B7 on a solution</span>;
  }

  return (
    <>
      <div className="live-head">at x = <b>{fmt(x)}</b>{onSolutionTag}</div>
      <table className="live-tbl"><tbody>
        <tr><td className="live-lbl">f({fmt(x)})</td><td className="live-val">= <b>{fmt(yf)}</b></td><td className={signClassOf(yf)}>{signSymOf(yf)}</td></tr>
        <tr><td className="live-lbl">n</td><td className="live-val">= <b>{fmt(N)}</b></td><td className={signClassOf(N)}>{signSymOf(N)}</td></tr>
        <tr><td className="live-lbl">f(x) \u2212 n</td><td className="live-val">= <b>{fmt(d)}</b></td><td className={signClassOf(d)}>{signSymOf(d)}</td></tr>
      </tbody></table>
      <div className="live-conclude">
        {hit
          ? <>f(x) \u2212 n \u2248 0 \u2192 <b className="yes">x = {fmt(x)} solves the equation</b></>
          : <>f(x) \u2212 n = <b>{fmt(d)}</b> \u2260 0 \u2192 <b className="no">not a solution</b></>}
      </div>
      <VerbalSummary iq={iq} />
    </>
  );
}

function VerbalSummary({ iq }) {
  const { state, F, N, computed } = iq;
  const x = state.marble;
  const yf = F(x);
  const d = yf - N;
  const hit = Math.abs(d) < 0.5;
  const sols = computed.solutions;

  let text;
  if (hit) {
    text = `At x = ${fmt(x)} the curve reaches level n = ${fmt(N)}. The equation f(x) = n holds here.`;
  } else {
    const direction = d > 0 ? 'above' : 'below';
    const solHint = sols.length === 0
      ? ' There are no real solutions in this view \u2014 the curve never reaches level n.'
      : ` Solutions are at ${sols.map(fmt).join(', ')}; click any to jump.`;
    text = `Here f is ${direction} level n = ${fmt(N)} by ${fmt(Math.abs(d))}.${solHint}`;
  }
  return <div className="verbal">{text}</div>;
}

function StrategyTab({ iq }) {
  const { state, type, computed, N } = iq;
  const sols = computed.solutions;
  const li = [];

  li.push(<>Rewrite as <code>f(x) \u2212 n = 0</code>, i.e. <b>find zeros of an auxiliary function</b>.</>);
  if (state.typeId === 'linear') {
    li.push(<>Linear: solve algebraically \u2192 <code>x = (n \u2212 b) / a</code> (when a \u2260 0).</>);
  } else if (state.typeId === 'quadratic') {
    const a = state.p.a, b = state.p.b, c = state.p.c;
    const disc = b * b - 4 * a * (c - N);
    if (disc < 0) li.push(<>Discriminant <code>{disc}</code> &lt; 0 \u2192 <b>no real solutions</b>.</>);
    else if (disc === 0) li.push(<>Discriminant = 0 \u2192 <b>one solution</b> (double root).</>);
    else li.push(<>Discriminant <code>{disc}</code> &gt; 0 \u2192 <b>two real solutions</b>.</>);
    li.push(<>Quadratic formula: <code>x = (\u2212b \u00B1 \u221A({disc})) / (2a)</code>.</>);
  } else if (state.typeId === 'cubic') {
    li.push(<>Cubic equations have 1, 2, or 3 real solutions. Numerically: scan for sign changes of <code>f(x) \u2212 n</code> and bisect.</>);
  } else if (state.typeId === 'abs') {
    li.push(<>If n &lt; k, no solutions (curve never reaches level n).</>);
    li.push(<>Else split: <code>x \u2212 h = \u00B1(n \u2212 k)</code>, giving up to two solutions.</>);
  }
  li.push(<>Geometrically: solutions are x where the curve hits the horizontal level <code>y = n</code>.</>);
  li.push(<>Found: <b>{sols.length === 0 ? 'none' : sols.map(fmt).join(', ')}</b>.</>);

  return <ol className="steps">{li.map((t, i) => <li key={i}>{t}</li>)}</ol>;
}