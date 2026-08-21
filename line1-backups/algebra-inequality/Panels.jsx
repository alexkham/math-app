
import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  G, X, Xinv, Y_at,
  fmt, formatTick, niceTickStep, subText, signSymOf, signClassOf,
  sel,
} from './logic.js';
export function Tooltip({ content, children, side = 'top' }) {
  const [visible, setVisible] = useState(false);
  const timer = useRef(null);
  if (!content) return children;
  const show = () => {
    timer.current = setTimeout(() => setVisible(true), 380);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    setVisible(false);
  };
  return (
    <span className="tt-wrap" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {visible && <span className={`tt tt-${side}`}>{content}</span>}
    </span>
  );
}
export function FactorSpan({ factor, focus, hoveredFactor, onClick, onHover }) {
  let cls = 'fac';
  if (focus.kind === 'critical' && focus.factorId === factor.id) {
    cls += ' ' + (focus.factorKind === 'pole' ? 'focus-pole' :
                  focus.factorKind === 'domain' ? 'focus-domain' : 'focus');
  } else if (hoveredFactor === factor.id) {
    cls += ' hover';
  }
  return (
    <span
      className={cls}
      data-fid={factor.id}
      onClick={() => onClick && onClick(factor)}
      onMouseEnter={() => onHover && onHover(factor.id)}
      onMouseLeave={() => onHover && onHover(null)}
    >
      {factor.display}
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
  // allow only digits, single optional leading minus, single optional dot
  if (!/^-?\d*\.?\d*$/.test(t)) return { ok: false, err: 'not a number', n: null };
  const n = Number(t);
  if (!Number.isFinite(n)) return { ok: false, err: 'not a number', n: null };
  if (n < pr.min) return { ok: false, err: `< ${pr.min}`, n };
  if (n > pr.max) return { ok: false, err: `> ${pr.max}`, n };
  if (pr.step && pr.step !== 0) {
    // optional: enforce step granularity if integer step
    if (Number.isInteger(pr.step) && pr.step >= 1 && !Number.isInteger(n)) {
      return { ok: false, err: 'must be integer', n };
    }
  }
  return { ok: true, err: null, n };
}

function ParamControl({ pr, value, mode, dispatch }) {
  const [draft, setDraft] = useState(String(value));
  const focusedRef = useRef(false);

  // Sync draft from external value changes (slider, template switch),
  // never while the user is actively editing.
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
      // invalid on blur → revert silently to last committed value
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
      } // if invalid: keep focus + error visible
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
          ? <span className="ctrl-err">{v.err} · allowed [{pr.min}, {pr.max}]</span>
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
export function Hero({ iq }) {
  const { state, dispatch, type, computed, focus, F, inDomain, holds, hoveredFactor, setHoveredFactor } = iq;
  const onFactorClick = (factor) => {
    if (!factor.criticalXs.length) return;
    dispatch({ type: 'SET_MODE', mode: 'step' });
    dispatch({ type: 'SET_MARBLE', x: factor.criticalXs[0], noTrail: true });
  };
  const spans = computed.factors.map(f => (
    <FactorSpan key={f.id} factor={f} focus={focus}
                hoveredFactor={hoveredFactor}
                onClick={onFactorClick}
                onHover={setHoveredFactor} />
  ));
  let ineqBody;
  if (state.typeId === 'rational') {
    ineqBody = <>{spans[0]}{' / '}{spans[1]}</>;
  } else {
    ineqBody = spans;
  }
  return (
    <div className="card pad hero">
      <div className="ineq">
        {ineqBody}
        {' '}
        <Tooltip content={state.strict ? 'strict inequality \u2014 zeros are excluded' : 'non-strict \u2014 zeros are included'}>
          <span className="op">{computed.opSym}</span>
        </Tooltip>
        {' '}
        <span className="zero">0</span>
      </div>
      <div className="diagram-wrap">
        <NumberLine iq={iq} />
        <Legend />
      </div>
      <ProbeReadout iq={iq} />
      <div className="probe-row">
        <ProbeRow iq={iq} />
        <ResultPills intervalNotation={computed.intervalNotation}
                     setBuilder={computed.setBuilder} />
      </div>
      <TogglesRow iq={iq} />
    </div>
  );
}
function TogglesRow({ iq }) {
  const { state, dispatch, computed } = iq;
  return (
    <div className="toggles-row">
      <Tooltip content={state.strict ? 'Currently strict (zeros excluded). Click to allow zeros in the solution.' : 'Currently non-strict (zeros included). Click to exclude zeros.'}>
        <button className={state.strict ? 'on' : ''}
                onClick={() => dispatch({ type: 'TOGGLE_STRICT' })}>
          {state.strict ? `strict ( ${state.dir === 'lt' ? '<' : '>'} )` : `non-strict ( ${state.dir === 'lt' ? '\u2264' : '\u2265'} )`}
        </button>
      </Tooltip>
      <Tooltip content="Flip the inequality direction (look for where f(x) is negative vs. positive).">
        <button className="on" onClick={() => dispatch({ type: 'TOGGLE_DIR' })}>
          f(x) {state.dir === 'lt' ? '< 0' : '> 0'}
        </button>
      </Tooltip>
      <Tooltip content="Restore the current template's defaults and reset strict/direction.">
        <button className="reset" onClick={() => dispatch({ type: 'RESET' })}>{'\u21BA reset'}</button>
      </Tooltip>
    </div>
  );
}
function Legend() {
  return (
    <div className="legend">
      <Tooltip content="Open circle: this x is not in the solution set."><span className="item"><span className="swatch" style={{background:'#fff', border:'2px solid var(--blue2)'}}></span>excluded</span></Tooltip>
      <Tooltip content="Filled circle: this x is in the solution set (non-strict inequality)."><span className="item"><span className="swatch" style={{background:'var(--blue2)'}}></span>included / zero</span></Tooltip>
      <Tooltip content="Vertical asymptote: the function is undefined here."><span className="item"><span className="swatch" style={{background:'var(--red)'}}></span>pole</span></Tooltip>
      <Tooltip content="Boundary of the function's domain."><span className="item"><span className="swatch" style={{background:'var(--amber-d)'}}></span>domain edge</span></Tooltip>
      <Tooltip content="The set of all x satisfying the inequality."><span className="item"><span className="bar" style={{background:'var(--blue)'}}></span>solution</span></Tooltip>
      <Tooltip content="Where the probe marble has been. Blue = inequality held; amber = failed."><span className="item"><span className="bar" style={{background:'var(--blue)', opacity:.4}}></span>/<span className="bar" style={{background:'var(--amber)', opacity:.4}}></span>trail</span></Tooltip>
    </div>
  );
}
function ProbeReadout({ iq }) {
  const { state, computed, focus, F, inDomain, holds } = iq;
  const x = state.marble;
  const isIn = inDomain(x);
  let stopLabel = null;
  if (state.mode === 'step') {
    const stops = computed.stepStops;
    const cur = stops[state.stepIdx];
    if (cur) stopLabel = <span className="stop-label">{cur.label}</span>;
  }
  if (!isIn) {
    return (
      <div className="tp">
        {stopLabel}
        <code>x = {fmt(x)}</code>{' \u00B7 outside domain \u2192 '}<b className="no">not allowed</b>
      </div>
    );
  }
  const v = F(x);
  return (
    <div className="tp">
      {stopLabel}
      f({fmt(x)}) = <code>{fmt(v)}</code>{' \u2192 '}
      {holds(x)
        ? <b className="yes">satisfies</b>
        : <b className="no">fails</b>}
    </div>
  );
}
function ProbeRow({ iq }) {
  const { state, dispatch, computed } = iq;
  const stepPrev = () => {
    const idx = Math.max(0, state.stepIdx - 1);
    dispatch({ type: 'SET_STEP_IDX', idx });
    dispatch({ type: 'SET_MARBLE', x: computed.stepStops[idx].x });
  };
  const stepNext = () => {
    const idx = Math.min(computed.stepStops.length - 1, state.stepIdx + 1);
    dispatch({ type: 'SET_STEP_IDX', idx });
    dispatch({ type: 'SET_MARBLE', x: computed.stepStops[idx].x });
  };
  const stepAtEnd = state.stepIdx >= computed.stepStops.length - 1;
  return (
    <div className="probe">
      <Segmented active={state.mode === 'drag'} label={<>{'\u270B'} drag</>}
                 tooltip="Drag the marble freely along the axis (shift-drag snaps to integers)."
                 onClick={() => dispatch({ type: 'SET_MODE', mode: 'drag' })} />
      <Segmented active={state.mode === 'step'} label={<>{'\u27AD'} step</>}
                 tooltip="Step between meaningful x-values: test points, critical points, domain edges."
                 onClick={() => dispatch({ type: 'SET_MODE', mode: 'step' })}>
        <Tooltip content="Previous stop">
          <button className="stepbtn" disabled={state.mode !== 'step' || state.stepIdx === 0} onClick={stepPrev}>{'\u25C0 prev'}</button>
        </Tooltip>
        <Tooltip content="Next stop">
          <button className="stepbtn" disabled={state.mode !== 'step' || stepAtEnd} onClick={stepNext}>{'next \u25B6'}</button>
        </Tooltip>
        <Tooltip content="Auto-advance through every stop, narrating as it goes.">
          <button className={'tourbtn' + (state.tour ? ' on' : '')} onClick={() => dispatch({ type: 'TOGGLE_TOUR' })}>
            {state.tour ? 'stop' : 'tour'}
          </button>
        </Tooltip>
      </Segmented>
      <Segmented active={state.mode === 'auto'} label={<>{'\u25B6'} auto</>}
                 tooltip="Sweep the marble back and forth automatically. Adjust speed or pause as needed."
                 onClick={() => dispatch({ type: 'SET_MODE', mode: 'auto' })}>
        <Tooltip content="Play or pause the sweep">
          <button className="playbtn" onClick={() => dispatch({ type: 'TOGGLE_PLAY' })}>
            {state.autoPlaying ? 'pause' : 'play'}
          </button>
        </Tooltip>
        <Tooltip content="How fast the marble sweeps (lower = easier to follow)">
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
function ResultPills({ intervalNotation, setBuilder }) {
  return (
    <div className="pills">
      <Tooltip content="The solution written as a union of intervals: parentheses for excluded endpoints, brackets for included.">
        <div className="pill compact"><span className="k">interval</span><span className="v">{intervalNotation}</span></div>
      </Tooltip>
      <Tooltip content="The solution written in set-builder notation \u2014 the set of all real x for which f(x) satisfies the inequality.">
        <div className="pill compact"><span className="k">set-builder</span><span className="v">{setBuilder}</span></div>
      </Tooltip>
    </div>
  );
}
function NumberLine({ iq }) {
  const { state, dispatch, type, computed, focus, F, inDomain, holds } = iq;
  const { viewRange: vr, curveYRange: yR, curveSegments, criticalInfo, solution, allCrit } = computed;
  const svgRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [draggingEp, setDraggingEp] = useState(null);
  const clientToVal = useCallback((e) => {
    const svg = svgRef.current;
    if (!svg) return 0;
    const r = svg.getBoundingClientRect();
    const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
    return Xinv(cx / r.width * G.W, vr);
  }, [vr]);
  useEffect(() => {
    if (!dragging && draggingEp === null) return;
    const move = (e) => {
      if (draggingEp !== null) {
        e.preventDefault();
        const newX = Math.round(clientToVal(e));
        const up = type.invert ? type.invert(draggingEp, newX, state.p) : {};
        Object.entries(up).forEach(([k, v]) => {
          const pr = type.params.find(pp => pp.key === k);
          const cl = pr ? Math.max(pr.min, Math.min(pr.max, v)) : v;
          if (state.p[k] !== cl) {
            dispatch({ type: 'SET_PARAM', key: k, value: cl });
          }
        });
        return;
      }
      if (dragging) {
        e.preventDefault();
        let x = clientToVal(e);
        if (e.shiftKey) x = Math.round(x);
        x = Math.max(vr.lo, Math.min(vr.hi, x));
        dispatch({ type: 'SET_MARBLE', x });
      }
    };
    const up = () => { setDragging(false); setDraggingEp(null); };
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
  }, [dragging, draggingEp, clientToVal, type, state.p, vr, dispatch]);
  const y0 = (G.curveTop + G.curveBottom) / 2;
  const dom = type.domain(state.p);
  const domShading = [];
  if (dom.lo !== undefined) {
    const w = Math.max(0, X(dom.lo, vr) - G.padX);
    domShading.push(
      <rect key="dom-lo" x={G.padX} y={G.curveTop - 2} width={w}
            height={G.axisY - G.curveTop + 12} fill="#fee2e2" opacity={0.45} />
    );
  }
  if (dom.excluded) dom.excluded.forEach((e, i) => {
    if (e < vr.lo || e > vr.hi) return;
    domShading.push(
      <rect key={`dom-ex-${i}`} x={X(e, vr) - 6} y={G.curveTop - 2}
            width={12} height={G.axisY - G.curveTop + 12} fill="#fee2e2" opacity={0.55} />
    );
  });
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
              fontVariantNumeric="tabular-nums"
              fontWeight={isZero ? 600 : 400}>{formatTick(v)}</text>
      </g>
    );
  }
  const curvePaths = curveSegments.segs.map((seg, i) => {
    const d = seg.map((p, j) =>
      `${j === 0 ? 'M' : 'L'}${X(p.x, vr).toFixed(1)} ${Y_at(p.y, yR).toFixed(1)}`
    ).join(' ');
    return <path key={`c-${i}`} d={d} fill="none" stroke="#2563eb"
                 strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />;
  });
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
  const solutionBars = solution.map((seg, i) => {
    const x1 = isFinite(seg.lo) ? X(seg.lo, vr) : G.padX;
    const x2 = isFinite(seg.hi) ? X(seg.hi, vr) : G.W - G.padX;
    return <rect key={`sol-${i}`} x={x1} y={G.axisY - 5} width={x2 - x1}
                 height={10} fill="#3b82f6" rx={2} opacity={0.88} />;
  });
  const xTicks = [];
  for (let v = Math.ceil(vr.lo); v <= Math.floor(vr.hi); v++) {
    xTicks.push(
      <g key={`xt-${v}`}>
        <line x1={X(v, vr)} y1={G.axisY - 4} x2={X(v, vr)} y2={G.axisY + 4} stroke="#94a3b8" />
        <text x={X(v, vr)} y={G.tickLabelY} fontSize="10" fill="#94a3b8" textAnchor="middle">{v}</text>
      </g>
    );
  }
  const critRender = criticalInfo.map(c => {
    if (!isFinite(c.x)) return null;
    const onEdge = solution.find(g =>
      (isFinite(g.lo) && Math.abs(g.lo - c.x) < 1e-9) ||
      (isFinite(g.hi) && Math.abs(g.hi - c.x) < 1e-9));
    let open = true;
    if (onEdge) {
      if (isFinite(onEdge.lo) && Math.abs(onEdge.lo - c.x) < 1e-9) open = onEdge.openLo;
      if (isFinite(onEdge.hi) && Math.abs(onEdge.hi - c.x) < 1e-9) open = onEdge.openHi;
    }
    const color = c.kind === 'pole' ? '#ef4444' : c.kind === 'domain' ? '#b45309' : '#2563eb';
    const fill = open ? '#fff' : color;
    const ttl = c.kind === 'pole' ? 'pole (undefined)' :
                c.kind === 'domain' ? 'domain edge' :
                (c.mult > 1 ? `zero, multiplicity ${c.mult}` : 'zero');
    return (
      <g key={`cr-${c.x}-${c.factorId}`}>
        <line x1={X(c.x, vr)} y1={y0} x2={X(c.x, vr)} y2={G.axisY}
              stroke={color} strokeWidth={1} strokeDasharray="2 2" opacity={0.4} />
        <circle cx={X(c.x, vr)} cy={G.axisY} r={6.5} fill={fill}
                stroke={color} strokeWidth={2.25} style={{ cursor: 'grab' }}
                onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); setDraggingEp(c.x); }}
                onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); setDraggingEp(c.x); }}>
          <title>{`${ttl} \u2014 drag to change`}</title>
        </circle>
        <text x={X(c.x, vr)} y={G.axisY - 9} fontSize="11" fill={color}
              textAnchor="middle" fontWeight={700}>{fmt(c.x)}</text>
      </g>
    );
  });
  const mx = X(state.marble, vr);
  const isIn = inDomain(state.marble);
  const ok = holds(state.marble);
  const mc = !isIn ? '#ef4444' : ok ? '#3b82f6' : '#f59e0b';
  const md = !isIn ? '#b91c1c' : ok ? '#2563eb' : '#b45309';
  let marbleExtras = null;
  if (isIn) {
    const fv = F(state.marble);
    if (Number.isFinite(fv)) {
      const cy = Y_at(Math.max(yR.min, Math.min(yR.max, fv)), yR);
      const barTop = Math.min(y0, cy), barBot = Math.max(y0, cy);
      marbleExtras = (
        <>
          <line x1={mx} y1={cy} x2={mx} y2={G.marbleY - 9}
                stroke={md} strokeWidth={1} strokeDasharray="3 3" opacity={0.55} />
          <circle cx={mx} cy={cy} r={3.5} fill={mc} stroke={md} strokeWidth={1.5} />
          <rect x={mx - 4} y={barTop} width={8} height={barBot - barTop}
                fill={mc} opacity={0.18} />
        </>
      );
    }
  } else {
    marbleExtras = (
      <line x1={mx} y1={G.curveTop} x2={mx} y2={G.marbleY - 9}
            stroke={md} strokeWidth={1} strokeDasharray="3 3" opacity={0.55} />
    );
  }
  return (
    <div className="nl">
      <svg ref={svgRef} viewBox={`0 0 ${G.W} ${G.totalH}`} style={{touchAction:'none'}}>
        {domShading}
        {/* curve y-axis */}
        <line x1={G.padX} y1={G.curveTop - 2} x2={G.padX} y2={G.curveBottom + 2}
              stroke="#94a3b8" strokeWidth={1} />
        <text x={G.padX - 4} y={G.curveTop - 2} fontSize="10"
              fill="#475569" textAnchor="end" fontStyle="italic" fontWeight={600}>f(x)</text>
        <line x1={G.padX} y1={y0} x2={G.W - G.padX} y2={y0}
              stroke="#94a3b8" strokeWidth={1} strokeDasharray="3 3" />
        {yTicks}
        {curvePaths}
        {trailLines}
        {state.trail.length > 0 &&
          <text x={G.padX - 6} y={G.trailY + 3} fontSize="9" fill="#94a3b8" textAnchor="end">trail</text>}
        {solutionBars}
        {/* x-axis */}
        <line x1={G.padX} y1={G.axisY} x2={G.W - G.padX} y2={G.axisY} stroke="#475569" strokeWidth={1.5} />
        <polygon points={`${G.W - G.padX},${G.axisY} ${G.W - G.padX - 9},${G.axisY - 5} ${G.W - G.padX - 9},${G.axisY + 5}`} fill="#475569" />
        <polygon points={`${G.padX},${G.axisY} ${G.padX + 9},${G.axisY - 5} ${G.padX + 9},${G.axisY + 5}`} fill="#475569" />
        <text x={G.W - G.padX + 6} y={G.axisY + 4} fontSize="11" fill="#475569"
              fontStyle="italic" fontWeight={600}>x</text>
        {xTicks}
        {critRender}
        {marbleExtras}
        <circle cx={mx} cy={G.marbleY} r={8} fill={mc} stroke={md} strokeWidth={2}
                style={{ cursor: 'grab' }}
                onMouseDown={(e) => { e.preventDefault(); setDragging(true); if (state.mode !== 'drag') dispatch({ type: 'SET_MODE', mode: 'drag' }); }}
                onTouchStart={(e) => { e.preventDefault(); setDragging(true); if (state.mode !== 'drag') dispatch({ type: 'SET_MODE', mode: 'drag' }); }} />
      </svg>
    </div>
  );
}
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
        <Tooltip content="Copy a link that restores this exact configuration when opened.">
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
    </div>
  );
}
export function SignChart({ iq }) {
  const { state, dispatch, type, computed, focus, F, hoveredFactor, setHoveredFactor } = iq;
  const crit = computed.allCrit;
  const facs = computed.factors;
  const jumpMarble = (x) => dispatch({ type: 'SET_MARBLE', x, noTrail: true });
  if (crit.length === 0) {
    const sign = Math.sign(F(0)) || 1;
    return (
      <table className="sc">
        <tbody>
          <tr><th></th><th>all real x</th></tr>
          <tr className="prod">
            <td className="rl">f(x)</td>
            <td className={sign > 0 ? 'sp' : 'sn'}>{sign > 0 ? '+' : '\u2212'}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  const intervalHeaders = (() => {
    if (crit.length === 1) return [`x < ${fmt(crit[0])}`, `x > ${fmt(crit[0])}`];
    const h = [`x < ${fmt(crit[0])}`];
    for (let i = 0; i < crit.length - 1; i++) h.push(`${fmt(crit[i])} \u2013 ${fmt(crit[i + 1])}`);
    h.push(`x > ${fmt(crit[crit.length - 1])}`);
    return h;
  })();
  const colFocus = (col) => focus.kind === 'interval' && focus.intervalIdx === col;
  const sampleAt = (i) => sel.sampleAt(i, crit);
  const headerCells = [];
  intervalHeaders.forEach((label, i) => {
    if (i > 0) {
      const cx = crit[i - 1];
      headerCells.push(
        <th key={`bh-${i}`} className="critc" onClick={() => jumpMarble(cx)}>
          <Tooltip content={`Critical point. Click to jump the marble to x = ${fmt(cx)}.`}>
            <span>{fmt(cx)}</span>
          </Tooltip>
        </th>
      );
    }
    headerCells.push(
      <th key={`ih-${i}`} data-col={i}
          className={'interval-cell' + (colFocus(i) ? ' col-focus' : '')}
          onClick={() => jumpMarble(sampleAt(i))}>
        <Tooltip content={`Interval: ${label}. Click to jump to a test point inside.`}>
          <span>{label}</span>
        </Tooltip>
      </th>
    );
  });
  const factorRows = facs.map(f => (
    <tr key={f.id} data-fid={f.id}
        className={hoveredFactor === f.id ? 'row-hover' : ''}
        onMouseEnter={() => setHoveredFactor(f.id)}
        onMouseLeave={() => setHoveredFactor(null)}>
      <td className="rl"
          onClick={() => f.criticalXs[0] !== undefined && jumpMarble(f.criticalXs[0])}>
        <Tooltip content={`Click to jump to this factor's critical point.`}>
          <span>{f.label}</span>
        </Tooltip>
      </td>
      {Array.from({ length: crit.length + 1 }).map((_, i) => {
        const cells = [];
        if (i > 0) cells.push(<td key={`sp-${i}`} style={{border:'none', padding:0, width:6}}></td>);
        const sg = f.sign(sampleAt(i));
        if (Number.isNaN(sg)) {
          cells.push(<td key={i} data-col={i} className={'undef' + (colFocus(i) ? ' col-focus' : '')}>{'\u00D7'}</td>);
        } else {
          const cls = sg > 0 ? 'sp' : sg < 0 ? 'sn' : 'sz';
          cells.push(
            <td key={i} data-col={i}
                className={`interval-cell ${cls}` + (colFocus(i) ? ' col-focus' : '')}
                onClick={() => jumpMarble(sampleAt(i))}>
              {sg > 0 ? '+' : sg < 0 ? '\u2212' : '0'}
            </td>
          );
        }
        return cells;
      })}
    </tr>
  ));
  const prodRow = (
    <tr className="prod">
      <td className="rl">f(x)</td>
      {Array.from({ length: crit.length + 1 }).map((_, i) => {
        const cells = [];
        if (i > 0) cells.push(<td key={`sp-${i}`} style={{border:'none', padding:0, width:6}}></td>);
        const v = F(sampleAt(i));
        if (Number.isNaN(v)) {
          cells.push(<td key={i} data-col={i} className={'undef' + (colFocus(i) ? ' col-focus' : '')}>{'\u00D7'}</td>);
        } else {
          const cls = v > 0 ? 'sp' : v < 0 ? 'sn' : 'sz';
          cells.push(
            <td key={i} data-col={i}
                className={`interval-cell ${cls}` + (colFocus(i) ? ' col-focus' : '')}
                onClick={() => jumpMarble(sampleAt(i))}>
              {v > 0 ? '+' : v < 0 ? '\u2212' : '0'}
            </td>
          );
        }
        return cells;
      })}
    </tr>
  );
  return (
    <table className="sc">
      <tbody>
        <tr><th></th>{headerCells}</tr>
        {factorRows}
        {prodRow}
      </tbody>
    </table>
  );
}
export function Explanation({ iq }) {
  const { state, dispatch, focus, inDomain } = iq;
  const x = state.marble;
  const inDom = inDomain(x);
  const liveLabel = inDom ? `at x = ${fmt(x)}` : `at x = ${fmt(x)} (out)`;
  return (
    <>
      <div className="ct">
        <span>Explanation</span>
        <span className="explain-tabs">
          <Tooltip content="Live breakdown of what f(x) is doing at the marble's current position.">
            <button className={'etab' + (state.explainTab === 'live' ? ' on' : '')}
                    onClick={() => dispatch({ type: 'SET_EXPLAIN_TAB', tab: 'live' })}>{liveLabel}</button>
          </Tooltip>
          <Tooltip content="The general procedure for solving inequalities of this type.">
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
  const { state, type, computed, focus, F, inDomain, holds, hoveredFactor, setHoveredFactor, dispatch } = iq;
  const x = state.marble;
  const isIn = inDomain(x);
  if (!isIn) {
    const dom = type.domain(state.p);
    let why = 'outside the domain of f';
    if (dom.lo !== undefined && x < dom.lo) why = (
      <><code>{fmt(x)} &lt; {fmt(dom.lo)}</code>, but the expression requires <code>x ≥ {fmt(dom.lo)}</code></>
    );
    if (dom.excluded?.some(e => Math.abs(e - x) < 1e-9)) why = (
      <><code>x = {fmt(x)}</code> makes the denominator zero (division by zero)</>
    );
    return (
      <>
        <div className="live-head">at x = <b>{fmt(x)}</b></div>
        <div className="live-out">{why} → <b className="no">not allowed; not in solution set</b></div>
        <VerbalSummary iq={iq} />
      </>
    );
  }
  const facs = computed.factors;
  const fval = F(x);
  let tag = null;
  if (focus.kind === 'critical') {
    const k = focus.factorKind;
    tag = k === 'pole' ? <span style={{color:'var(--red)', fontWeight:700}}> · on a pole</span>
        : k === 'domain' ? <span style={{color:'var(--amber-d)', fontWeight:700}}> · on the domain edge</span>
        : <span style={{color:'var(--blue2)', fontWeight:700}}> · on a critical point</span>;
  }
  const rows = facs.map(f => {
    const v = f.eval(x);
    const sub = subText(f.label, x);
    const sym = signSymOf(v);
    const cls = signClassOf(v);
    return (
      <tr key={f.id} data-fid={f.id}
          onMouseEnter={() => setHoveredFactor(f.id)}
          onMouseLeave={() => setHoveredFactor(null)}
          onClick={() => f.criticalXs[0] !== undefined && dispatch({ type: 'SET_MARBLE', x: f.criticalXs[0], noTrail: true })}>
        <td className="live-lbl">{f.label}</td>
        <td className="live-sub">= {sub}</td>
        <td className="live-val">= <b>{Number.isNaN(v) ? 'undefined' : fmt(v)}</b></td>
        <td className={cls}>{sym}</td>
      </tr>
    );
  });
  let combineLine = null;
  if (facs.length > 1) {
    const op = state.typeId === 'rational' ? 'quotient' : 'product';
    const sep = state.typeId === 'rational' ? ' / ' : ' \u00B7 ';
    const syms = facs.map(f => {
      const v = f.eval(x);
      return <span key={f.id} className={signClassOf(v)}>{signSymOf(v)}</span>;
    });
    const totalSym = signSymOf(fval);
    const totalCls = signClassOf(fval);
    const joined = [];
    syms.forEach((el, i) => {
      if (i > 0) joined.push(<span key={`sep-${i}`}>{sep}</span>);
      joined.push(el);
    });
    combineLine = (
      <div className="live-combine">
        {op} of signs: {joined} &nbsp;=&nbsp; <b className={totalCls}>{totalSym}</b>
      </div>
    );
  }
  const ok = holds(x);
  const onZero = Math.abs(fval) < 1e-9;
  let conclusion;
  if (onZero) {
    if (state.strict) {
      conclusion = <>f({fmt(x)}) = <b>0</b>, but the inequality is <b>strict</b> ({computed.opSym}) → <b className="no">fails</b> (zeros excluded)</>;
    } else {
      conclusion = <>f({fmt(x)}) = <b>0</b>, and the inequality is <b>non-strict</b> ({computed.opSym}) → <b className="yes">satisfies</b> (zeros included)</>;
    }
  } else {
    const cmp = fval < 0 ? '< 0' : '> 0';
    conclusion = (
      <>
        f({fmt(x)}) = <b>{fmt(fval)}</b> {cmp} →{' '}
        {ok ? <b className="yes">satisfies</b> : <b className="no">fails</b>}{' '}
        <code>f(x) {computed.opSym} 0</code>
      </>
    );
  }
  return (
    <>
      <div className="live-head">at x = <b>{fmt(x)}</b>{tag}</div>
      <table className="live-tbl"><tbody>{rows}</tbody></table>
      {combineLine}
      <div className="live-conclude">{conclusion}</div>
      <VerbalSummary iq={iq} />
    </>
  );
}
function VerbalSummary({ iq }) {
  const { state, type, computed, focus, F, inDomain, holds } = iq;
  const x = state.marble;
  const opS = computed.opSym;
  const goal = state.dir === 'lt' ? 'negative' : 'positive';
  let text = '';
  if (!inDomain(x)) {
    text = `Here the function isn't defined, so x = ${fmt(x)} can't be part of any solution. The marble has to be inside the function's domain for the inequality question to even apply.`;
  } else if (focus.kind === 'critical') {
    const k = focus.factorKind;
    if (k === 'pole') {
      text = `The marble is sitting on a pole — the denominator is zero here, so f(x) is undefined. Poles are always excluded, regardless of whether the inequality is strict or non-strict.`;
    } else if (k === 'domain') {
      text = `The marble is at the edge of the domain. To the left of this point the function isn't defined at all.`;
    } else {
      const inSol = computed.solution.some(s =>
        (isFinite(s.lo) && Math.abs(s.lo - x) < 1e-9 && !s.openLo) ||
        (isFinite(s.hi) && Math.abs(s.hi - x) < 1e-9 && !s.openHi));
      text = `The marble is exactly on a critical point (a zero of f). Around this x, the factor producing it is changing sign. Because the inequality is ${state.strict ? 'strict' : 'non-strict'}, this exact x is ${inSol ? 'included in' : 'excluded from'} the solution.`;
    }
  } else {
    const ok = holds(x);
    const facs = computed.factors;
    const signsText = facs.length > 1
      ? `Each factor's sign at x = ${fmt(x)}: ${facs.map(f => `${f.label} is ${signSymOf(f.eval(x)) === '+' ? 'positive' : signSymOf(f.eval(x)) === '\u2212' ? 'negative' : 'zero'}`).join('; ')}. Combining them gives f(${fmt(x)}) = ${fmt(F(x))}, which is ${goal === 'negative' ? (F(x) < 0 ? 'indeed negative' : 'not negative') : (F(x) > 0 ? 'indeed positive' : 'not positive')}.`
      : `Here f(${fmt(x)}) = ${fmt(F(x))}, which is ${F(x) < 0 ? 'negative' : F(x) > 0 ? 'positive' : 'zero'}.`;
    text = `${signsText} ${ok ? `Since the inequality asks for f(x) ${opS} 0, this x is in the solution set.` : `Since the inequality asks for f(x) ${opS} 0, this x is not in the solution set.`}`;
  }
  return <div className="verbal">{text}</div>;
}
function StrategyTab({ iq }) {
  const { state, type, computed } = iq;
  const crit = computed.allCrit;
  const dom = type.domain(state.p);
  const li = [];
  if (state.typeId === 'rational') {
    li.push(<><b>Domain</b>: {dom.note}. <code>x = {fmt(state.p.b)}</code> is excluded.</>);
    li.push(<>Critical points: numerator zero <code>{fmt(state.p.a)}</code> and pole <code>{fmt(state.p.b)}</code>.</>);
  } else if (state.typeId === 'radical') {
    li.push(<><b>Domain</b>: {dom.note}.</>);
    li.push(state.p.k > 0
      ? <>Solve {'\u221A'}(x{'\u2212'}{state.p.a}) = {state.p.k} {'\u2192'} <code>x = {fmt(state.p.a + state.p.k * state.p.k)}</code>.</>
      : <>With k = 0, expression is {'\u2265'} 0 across the domain.</>);
  } else if (state.typeId === 'abs') {
    if (state.p.k === 0) {
      li.push(<>Level k = 0: touches zero at <code>x = {state.p.h}</code>.</>);
    } else {
      li.push(<>Split: |x {'\u2212'} {state.p.h}| = {state.p.k} at <code>{fmt(state.p.h - state.p.k)}</code> and <code>{fmt(state.p.h + state.p.k)}</code>.</>);
    }
  } else if (state.typeId === 'quad') {
    const disc = state.p.b * state.p.b - 4 * state.p.a * state.p.c;
    if (disc < 0) li.push(<>Discriminant <code>{disc}</code> &lt; 0 {'\u2192'} <b>no real roots</b>.</>);
    else if (disc === 0) li.push(<>Discriminant = 0 {'\u2192'} <b>double root</b>.</>);
    else li.push(<>Discriminant <code>{disc}</code> &gt; 0 {'\u2192'} <b>two real roots</b>.</>);
  } else {
    li.push(<><b>Critical points</b>: <code>x = {crit.map(fmt).join(', ') || 'none'}</code>.</>);
  }
  if (crit.length > 0 || dom.lo !== undefined) {
    li.push(<>Critical points split the line into intervals. Probe each to test the sign.</>);
    li.push(<>Keep where <code>f(x) {computed.opSym} 0</code> — the <b>{state.dir === 'lt' ? 'negative' : 'positive'}</b> parts.</>);
  }
  const hasPole = computed.criticalInfo.some(c => c.kind === 'pole' || c.kind === 'domain');
  if (state.strict) {
    li.push(<>Strict {'\u2192'} zeros <b>excluded</b>{hasPole ? '; poles always excluded.' : '.'}</>);
  } else {
    li.push(<>Non-strict {'\u2192'} zeros <b>included</b>{hasPole ? ', poles still open.' : '.'}</>);
  }
  li.push(<>Solution: <b>{computed.intervalNotation}</b>.</>);
  return <ol className="steps">{li.map((t, i) => <li key={i}>{t}</li>)}</ol>;
}