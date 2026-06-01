import { useState, useEffect, useMemo, useRef } from 'react';

// ============================================================================
// Constants
// ============================================================================

const GEO = {
  MIN_SVG: 360,
  MAX_SVG: 720,
  INNER_R_RATIO: 0.075,
  INNER_R_MIN: 30,
  OUTER_MARGIN: 20,
  LABEL_MARGIN: 26,
  TARGET_CELL_H: 18,
  MIN_CELL_H: 14,
};

const SLICE_COLORS = [
  '#1e40af', '#2563eb', '#3b82f6', '#60a5fa',
  '#7aa9f7', '#93c5fd', '#a5b9e5', '#6b8fd6', '#4170c2',
];

const PALETTE = {
  bg: '#f5f8ff',
  surface: '#ffffff',
  border: '#d4dcef',
  borderStrong: '#b6c2e0',
  text: '#1e2a44',
  textDim: '#6b7794',
  blue1: '#3b82f6',
  blue2: '#2563eb',
  blue3: '#1e40af',
  blue4: '#1e3a8a',
  blueLight: '#dbeafe',
  accentWarm: '#fbbf24',
  accentWarmDeep: '#d97706',
  err: '#dc2626',
  errBg: '#fef2f2',
};

const MONO = 'ui-monospace, "SF Mono", Menlo, monospace';
const SANS = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

// ============================================================================
// Geometry helpers
// ============================================================================

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const a = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function describeArc(cx, cy, outerR, innerR, startAngle, endAngle) {
  const oS = polarToCartesian(cx, cy, outerR, startAngle);
  const oE = polarToCartesian(cx, cy, outerR, endAngle);
  const iS = polarToCartesian(cx, cy, innerR, endAngle);
  const iE = polarToCartesian(cx, cy, innerR, startAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return [
    'M', oS.x, oS.y,
    'A', outerR, outerR, 0, large, 1, oE.x, oE.y,
    'L', iS.x, iS.y,
    'A', innerR, innerR, 0, large, 0, iE.x, iE.y,
    'Z'
  ].join(' ');
}

function describeOuterArc(cx, cy, r, startAngle, endAngle) {
  const s = polarToCartesian(cx, cy, r, startAngle);
  const e = polarToCartesian(cx, cy, r, endAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return ['M', s.x, s.y, 'A', r, r, 0, large, 1, e.x, e.y].join(' ');
}

function classExamples(remainder, divisor, count = 6) {
  const out = [];
  const start = remainder === 0 ? divisor : remainder;
  for (let i = 0; i < count; i++) out.push(start + i * divisor);
  return out;
}

function computeGeometry(physicalWidth, divisor, maxNumber) {
  const svgSize = clamp(physicalWidth, GEO.MIN_SVG, GEO.MAX_SVG);
  const innerR = Math.max(GEO.INNER_R_MIN, svgSize * GEO.INNER_R_RATIO);
  const outerR = svgSize / 2 - GEO.LABEL_MARGIN;
  const radial = outerR - innerR - GEO.OUTER_MARGIN;
  const rowsNeeded = Math.ceil(maxNumber / divisor);
  const cellH = rowsNeeded > 0 ? radial / rowsNeeded : radial;
  const maxRowsAtFloor = Math.floor(radial / GEO.MIN_CELL_H);
  const maxAllowed = maxRowsAtFloor * divisor;
  return { svgSize, innerR, outerR, radial, rowsNeeded, cellH, maxAllowed };
}

// ============================================================================
// Component
// ============================================================================

export default function ModPieWheel() {
  // --- state ---
  const [divisor, setDivisor] = useState(6);
  const [inputValue, setInputValue] = useState('36');
  const [committedNumber, setCommittedNumber] = useState(36);
  const [speed, setSpeed] = useState(6);

  const [isRunning, setIsRunning] = useState(false);
  const [placed, setPlaced] = useState([]);

  const [pinnedRemainder, setPinnedRemainder] = useState(null);
  const [hoveredRemainder, setHoveredRemainder] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const [containerWidth, setContainerWidth] = useState(720);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1280
  );

  // --- refs ---
  const wheelAreaRef = useRef(null);
  const runningRef = useRef(false);

  // --- effects ---

  // window width tracking
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // wheel container size tracking
  useEffect(() => {
    if (!wheelAreaRef.current) return;
    const el = wheelAreaRef.current;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    ro.observe(el);
    setContainerWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  // --- derived ---

  const isWide = windowWidth >= 1180;

  const parsedNumber = useMemo(() => {
    const v = parseInt(inputValue, 10);
    return isNaN(v) ? null : v;
  }, [inputValue]);

  const probeGeometry = useMemo(
    () => computeGeometry(containerWidth, divisor, 1),
    [containerWidth, divisor]
  );

  const maxAllowed = probeGeometry.maxAllowed;

  const validationError = useMemo(() => {
    if (inputValue.trim() === '') return 'Please enter a number';
    if (parsedNumber === null) return 'Not a valid number';
    if (parsedNumber < 1) return 'Must be at least 1';
    if (parsedNumber > maxAllowed) {
      return `Max is ${maxAllowed} for divisor ${divisor} at this size. Larger values would make labels unreadable.`;
    }
    return null;
  }, [inputValue, parsedNumber, maxAllowed, divisor]);

  // sync committedNumber when input is valid
  useEffect(() => {
    if (
      parsedNumber !== null &&
      parsedNumber >= 1 &&
      parsedNumber <= maxAllowed
    ) {
      setCommittedNumber(parsedNumber);
    }
  }, [parsedNumber, maxAllowed]);

  // clamp committedNumber when maxAllowed shrinks
  useEffect(() => {
    if (committedNumber > maxAllowed) {
      setCommittedNumber(maxAllowed);
      setInputValue(String(maxAllowed));
    }
  }, [maxAllowed]);

  const geometry = useMemo(
    () => computeGeometry(containerWidth, divisor, committedNumber),
    [containerWidth, divisor, committedNumber]
  );

  // --- handlers ---

  function handleDivisorChange(d) {
    if (isRunning) stopRun();
    setDivisor(d);
    setPlaced([]);
    setPinnedRemainder(null);
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    // any committed change resets the run
    setPlaced([]);
    setPinnedRemainder(null);
  }

  function startRun() {
    if (isRunning) return;
    if (validationError) return;
    if (parsedNumber === null) return;

    setPinnedRemainder(null);
    setHoveredRemainder(null);
    setPlaced([]);
    runningRef.current = true;
    setIsRunning(true);
    runLoop(parsedNumber, divisor, speed);
  }

  function stopRun() {
    runningRef.current = false;
    setIsRunning(false);
  }

  async function runLoop(N, d, sp) {
    const slotCounters = new Array(d).fill(0);
    for (let num = 1; num <= N; num++) {
      const delay = Math.max(20, 400 - sp * 35);
      await new Promise((r) => setTimeout(r, delay));
      if (!runningRef.current) return;
      const remainder = num % d;
      const row = slotCounters[remainder]++;
      setPlaced((prev) => [...prev, { n: num, sliceIdx: remainder, row }]);
    }
    runningRef.current = false;
    setIsRunning(false);
  }

  function handleReset() {
    stopRun();
    setPlaced([]);
    setPinnedRemainder(null);
    setHoveredRemainder(null);
  }

  function handleSliceClick(i, e) {
    e.stopPropagation();
    if (pinnedRemainder === i) {
      setPinnedRemainder(null);
    } else {
      setPinnedRemainder(i);
      setTooltipPos({ x: e.clientX, y: e.clientY });
    }
  }

  function handleSliceEnter(i, e) {
    setHoveredRemainder(i);
    setTooltipPos({ x: e.clientX, y: e.clientY });
  }

  function handleSliceMove(i, e) {
    if (pinnedRemainder === null) {
      setTooltipPos({ x: e.clientX, y: e.clientY });
    }
  }

  function handleSliceLeave() {
    setHoveredRemainder(null);
  }

  // click outside any slice → unpin
  useEffect(() => {
    if (pinnedRemainder === null) return;
    const onDocClick = () => setPinnedRemainder(null);
    const t = setTimeout(() => {
      document.addEventListener('click', onDocClick);
    }, 0);
    return () => {
      clearTimeout(t);
      document.removeEventListener('click', onDocClick);
    };
  }, [pinnedRemainder]);

  // --- derived UI state ---

  const activeRemainder =
    pinnedRemainder !== null ? pinnedRemainder : hoveredRemainder;
  const isPinnedTooltip = pinnedRemainder !== null;

  const panelMode = isRunning
    ? 'running'
    : activeRemainder !== null
    ? 'class'
    : placed.length > 0 && parsedNumber !== null && placed.length === parsedNumber
    ? 'summary'
    : 'idle';

  // ============================================================================
  // Render
  // ============================================================================

  const angleOffset = -360 / divisor / 2;
  const sliceAngle = 360 / divisor;

  return (
    <div
      style={{
        background: PALETTE.bg,
        color: PALETTE.text,
        fontFamily: SANS,
        minHeight: '100vh',
        padding: '2rem 1rem',
      }}
    >
      {/* ---------- Header ---------- */}
      <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: PALETTE.blue3,
            marginBottom: '0.3rem',
          }}
        >
          Modular Arithmetic Pie Wheel
        </h1>
        <p style={{ color: PALETTE.textDim, fontSize: '0.9rem' }}>
          Numbers grouped by their remainder when divided.
        </p>
      </header>

      {/* ---------- Main grid ---------- */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isWide ? '280px minmax(0, 1fr) 360px' : '1fr',
          gap: '1.5rem',
          maxWidth: 1500,
          margin: '0 auto',
          alignItems: 'start',
        }}
      >
        {/* ---------- Controls (left, sticky on wide) ---------- */}
        <aside
          style={{
            position: isWide ? 'sticky' : 'static',
            top: '1rem',
            maxHeight: isWide ? 'calc(100vh - 2rem)' : 'none',
            overflowY: isWide ? 'auto' : 'visible',
            background: PALETTE.surface,
            border: `1px solid ${PALETTE.border}`,
            borderRadius: 10,
            padding: '1.25rem',
            boxShadow: '0 1px 3px rgba(30, 58, 138, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.1rem',
          }}
        >
          {renderControls({
            inputValue,
            handleInputChange,
            validationError,
            maxAllowed,
            divisor,
            handleDivisorChange,
            speed,
            setSpeed,
            isRunning,
            startRun,
            stopRun,
            handleReset,
            placed,
            committedNumber,
            geometry,
          })}
        </aside>

        {/* ---------- Wheel (middle, fills) ---------- */}
        <main
          ref={wheelAreaRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            minWidth: 0,
          }}
        >
          <HoverHint />
          {renderWheel({
            geometry,
            divisor,
            sliceAngle,
            angleOffset,
            placed,
            pinnedRemainder,
            hoveredRemainder,
            handleSliceClick,
            handleSliceEnter,
            handleSliceMove,
            handleSliceLeave,
          })}
          {renderLegend(divisor)}
        </main>

        {/* ---------- Explanation panel (right, sticky on wide) ---------- */}
        <aside
          style={{
            position: isWide ? 'sticky' : 'static',
            top: '1rem',
            maxHeight: isWide ? 'calc(100vh - 2rem)' : 'none',
            overflowY: isWide ? 'auto' : 'visible',
            background: PALETTE.surface,
            border: `1px solid ${PALETTE.border}`,
            borderRadius: 10,
            padding: '1.25rem',
            boxShadow: '0 1px 3px rgba(30, 58, 138, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {renderContextBox({
            panelMode,
            activeRemainder,
            divisor,
            placed,
            committedNumber,
          })}
          {renderDeepDive()}
        </aside>
      </div>

      {/* ---------- Floating tooltip ---------- */}
      {activeRemainder !== null &&
        renderTooltip({
          remainder: activeRemainder,
          divisor,
          pinned: isPinnedTooltip,
          pos: tooltipPos,
        })}
    </div>
  );
}

// ============================================================================
// Sub-renderers (kept inline for self-containment)
// ============================================================================

function HoverHint() {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        background: PALETTE.blueLight,
        color: PALETTE.blue3,
        border: `1px solid ${PALETTE.blue1}`,
        borderRadius: 999,
        padding: '0.35rem 0.85rem',
        fontSize: '0.78rem',
        fontWeight: 600,
      }}
    >
      <span>👆</span>
      <span>Tap or hover any slice for details</span>
    </div>
  );
}

function renderControls({
  inputValue,
  handleInputChange,
  validationError,
  maxAllowed,
  divisor,
  handleDivisorChange,
  speed,
  setSpeed,
  isRunning,
  startRun,
  stopRun,
  handleReset,
  placed,
  committedNumber,
  geometry,
}) {
  const inputInvalid = !!validationError;

  return (
    <>
      <div style={controlGroupStyle}>
        <label style={labelStyle}>Count up to</label>
        <input
          type="number"
          value={inputValue}
          min={1}
          max={maxAllowed}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !validationError && !isRunning) startRun();
          }}
          style={{
            background: inputInvalid ? PALETTE.errBg : PALETTE.bg,
            border: `1px solid ${inputInvalid ? PALETTE.err : PALETTE.border}`,
            borderRadius: 6,
            padding: '0.6rem 0.9rem',
            color: PALETTE.text,
            fontFamily: MONO,
            fontSize: '1rem',
            textAlign: 'center',
            outline: 'none',
            width: '100%',
          }}
        />
        <div
          style={{
            fontSize: '0.72rem',
            color: PALETTE.textDim,
            marginTop: '0.25rem',
            fontFamily: MONO,
          }}
        >
          max for divisor {divisor}: {maxAllowed}
        </div>
        {validationError && (
          <div
            style={{
              fontSize: '0.75rem',
              color: PALETTE.err,
              marginTop: '0.3rem',
              fontWeight: 600,
            }}
          >
            {validationError}
          </div>
        )}
      </div>

      <div style={controlGroupStyle}>
        <label style={labelStyle}>Divisor (number of slices)</label>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.35rem',
          }}
        >
          {[2, 3, 4, 5, 6, 7, 8, 9].map((d) => {
            const selected = d === divisor;
            return (
              <button
                key={d}
                onClick={() => handleDivisorChange(d)}
                style={{
                  background: selected ? PALETTE.blue2 : PALETTE.bg,
                  border: `1px solid ${selected ? PALETTE.blue2 : PALETTE.border}`,
                  borderRadius: 6,
                  padding: '0.5rem',
                  color: selected ? 'white' : PALETTE.text,
                  fontFamily: MONO,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>

      <div style={controlGroupStyle}>
        <label style={labelStyle}>Speed</label>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <span>🐢</span>
          <input
            type="range"
            min={1}
            max={10}
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value, 10))}
            style={{ flex: 1, accentColor: PALETTE.blue2 }}
          />
          <span>🐇</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          onClick={isRunning ? stopRun : startRun}
          disabled={!isRunning && !!validationError}
          style={{
            flex: 1,
            background: isRunning ? PALETTE.accentWarmDeep : PALETTE.blue2,
            border: 'none',
            borderRadius: 6,
            padding: '0.7rem 1.1rem',
            color: 'white',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor:
              !isRunning && !!validationError ? 'not-allowed' : 'pointer',
            opacity: !isRunning && !!validationError ? 0.5 : 1,
            fontFamily: SANS,
          }}
        >
          {isRunning ? '⏹ Stop' : '▶ Run'}
        </button>
        <button
          onClick={handleReset}
          style={{
            flex: 1,
            background: 'transparent',
            border: `1px solid ${PALETTE.border}`,
            borderRadius: 6,
            padding: '0.6rem 1rem',
            color: PALETTE.text,
            fontSize: '0.85rem',
            cursor: 'pointer',
            fontFamily: SANS,
          }}
        >
          Reset
        </button>
      </div>

      <div
        style={{
          background: PALETTE.bg,
          border: `1px solid ${PALETTE.border}`,
          borderRadius: 8,
          padding: '0.9rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: '0.9rem',
            fontWeight: 600,
            color: PALETTE.blue3,
          }}
        >
          {placed.length === 0
            ? 'Numbers fill grid cells in order'
            : placed.length === committedNumber
            ? `Done · ${placed.filter((p) => p.sliceIdx === 0).length} divisible by ${committedNumber === 0 ? 0 : '' + (placed[0]?.n ? '' : '')}`
            : `${placed[placed.length - 1].n} → class ${placed[placed.length - 1].sliceIdx}, row ${placed[placed.length - 1].row + 1}`}
        </div>
      </div>

      <p
        style={{
          fontSize: '0.78rem',
          color: PALETTE.textDim,
          textAlign: 'center',
          lineHeight: 1.5,
        }}
      >
        <span style={{ color: PALETTE.accentWarmDeep, fontWeight: 700 }}>
          ★ Slice 0
        </span>{' '}
        = the <strong style={{ color: PALETTE.blue3 }}>zero class</strong>{' '}
        (divisible numbers)
        <br />
        Row 1: first occurrence, Row 2: second, etc.
      </p>

      <div
        style={{
          fontSize: '0.7rem',
          color: PALETTE.textDim,
          textAlign: 'center',
          fontFamily: MONO,
          paddingTop: '0.4rem',
          borderTop: `1px dashed ${PALETTE.border}`,
        }}
      >
        svg {geometry.svgSize.toFixed(0)} · inner {geometry.innerR.toFixed(0)} ·
        rows {geometry.rowsNeeded} · cell {geometry.cellH.toFixed(1)}px
      </div>
    </>
  );
}

function renderWheel({
  geometry,
  divisor,
  sliceAngle,
  angleOffset,
  placed,
  pinnedRemainder,
  hoveredRemainder,
  handleSliceClick,
  handleSliceEnter,
  handleSliceMove,
  handleSliceLeave,
}) {
  const { svgSize, innerR, outerR, cellH, rowsNeeded } = geometry;
  const cx = svgSize / 2;
  const cy = svgSize / 2;

  const numberFontSize = Math.max(9, Math.min(14, Math.floor(cellH * 0.55)));
  const labelFontSize = Math.max(11, Math.min(16, Math.floor(svgSize * 0.028)));
  const centerFontSize = Math.max(12, Math.min(18, Math.floor(svgSize * 0.032)));

  // map placed → quick lookup
  const placedMap = {};
  for (const p of placed) {
    placedMap[`${p.sliceIdx}-${p.row}`] = p.n;
  }

  const slicePaths = [];
  const dividerLines = [];
  const sliceLabels = [];
  const rowArcs = [];
  const cells = [];

  // slice backgrounds
  for (let i = 0; i < divisor; i++) {
    const s = i * sliceAngle + angleOffset;
    const e = (i + 1) * sliceAngle + angleOffset;
    const isZero = i === 0;
    const isPinned = pinnedRemainder === i;
    const isHovered = hoveredRemainder === i;
    const baseOpacity = isZero ? 0.32 : 0.14;
    const opacity = isPinned ? 0.55 : isHovered ? 0.5 : baseOpacity;

    slicePaths.push(
      <path
        key={`slice-${i}`}
        d={describeArc(cx, cy, outerR, innerR, s, e)}
        fill={SLICE_COLORS[i % SLICE_COLORS.length]}
        opacity={opacity}
        stroke={PALETTE.surface}
        strokeWidth={2}
        style={{ cursor: 'pointer', transition: 'opacity 0.15s' }}
        onMouseEnter={(ev) => handleSliceEnter(i, ev)}
        onMouseMove={(ev) => handleSliceMove(i, ev)}
        onMouseLeave={handleSliceLeave}
        onClick={(ev) => handleSliceClick(i, ev)}
      >
        <title>
          {isZero
            ? `Zero class (principal) — multiples of ${divisor}`
            : `Class ${i} — remainder ${i} mod ${divisor}`}
        </title>
      </path>
    );

    // dividers between slices (drawn once per boundary)
    const dividerAngle = i * sliceAngle + angleOffset;
    const ip = polarToCartesian(cx, cy, innerR, dividerAngle);
    const op = polarToCartesian(cx, cy, outerR, dividerAngle);
    dividerLines.push(
      <line
        key={`div-${i}`}
        x1={ip.x}
        y1={ip.y}
        x2={op.x}
        y2={op.y}
        stroke="rgba(30, 58, 138, 0.18)"
        strokeWidth={1}
        pointerEvents="none"
      />
    );

    // slice label
    const labelAngle = i * sliceAngle + angleOffset + sliceAngle / 2;
    const lp = polarToCartesian(cx, cy, outerR + 14, labelAngle);
    sliceLabels.push(
      <text
        key={`lbl-${i}`}
        x={lp.x}
        y={lp.y}
        fontSize={isZero ? labelFontSize + 3 : labelFontSize}
        fill={isZero ? PALETTE.accentWarmDeep : PALETTE.blue4}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily={MONO}
        fontWeight={700}
        pointerEvents="none"
      >
        {isZero ? '★ 0' : i}
      </text>
    );
  }

  // row arcs
  for (let row = 1; row < rowsNeeded; row++) {
    const r = innerR + GEO.OUTER_MARGIN / 2 + row * cellH;
    rowArcs.push(
      <circle
        key={`arc-${row}`}
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="rgba(30, 58, 138, 0.08)"
        strokeWidth={0.5}
        pointerEvents="none"
      />
    );
  }

  // cells
  for (let sliceIdx = 0; sliceIdx < divisor; sliceIdx++) {
    const sliceMid = sliceIdx * sliceAngle + angleOffset + sliceAngle / 2;
    for (let row = 0; row < rowsNeeded; row++) {
      const rMid = innerR + GEO.OUTER_MARGIN / 2 + row * cellH + cellH / 2;
      const pos = polarToCartesian(cx, cy, rMid, sliceMid);
      const arcWidth = (sliceAngle * Math.PI / 180) * rMid;
      const cellW = Math.min(arcWidth * 0.82, 56);

      const num = placedMap[`${sliceIdx}-${row}`];
      const visible = num !== undefined;
      const isZero = sliceIdx === 0;

      cells.push(
        <g
          key={`cell-${sliceIdx}-${row}`}
          transform={`translate(${pos.x}, ${pos.y}) rotate(${sliceMid})`}
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
          pointerEvents="none"
        >
          <rect
            x={-cellW / 2}
            y={-cellH / 2 + 2}
            width={cellW}
            height={cellH - 4}
            rx={3}
            ry={3}
            fill={SLICE_COLORS[sliceIdx % SLICE_COLORS.length]}
            opacity={visible ? 1 : 0}
            stroke={isZero ? 'rgba(217, 119, 6, 0.6)' : 'none'}
            strokeWidth={isZero ? 1 : 0}
          />
          {visible && (
            <text
              x={0}
              y={0}
              transform={`rotate(${-sliceMid})`}
              fontSize={numberFontSize}
              fill="#ffffff"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily={MONO}
              fontWeight={600}
            >
              {num}
            </text>
          )}
        </g>
      );
    }
  }

  // zero accent arc (outer edge of slice 0)
  const zeroAccentStart = angleOffset;
  const zeroAccentEnd = sliceAngle + angleOffset;
  const zeroAccent = (
    <path
      key="zero-accent"
      d={describeOuterArc(cx, cy, outerR + 1, zeroAccentStart, zeroAccentEnd)}
      fill="none"
      stroke={PALETTE.accentWarm}
      strokeWidth={3}
      pointerEvents="none"
    />
  );

  return (
    <div
      style={{
        width: '100%',
        maxWidth: GEO.MAX_SVG,
        position: 'relative',
      }}
    >
      <svg
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        {slicePaths}
        {zeroAccent}
        {rowArcs}
        {dividerLines}
        {cells}
        {sliceLabels}
        <circle
          cx={cx}
          cy={cy}
          r={innerR - 4}
          fill={PALETTE.surface}
          stroke={PALETTE.borderStrong}
          strokeWidth={2}
          pointerEvents="none"
        />
        <text
          x={cx}
          y={cy}
          fontSize={centerFontSize}
          fill={PALETTE.blue3}
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily={MONO}
          fontWeight={700}
          pointerEvents="none"
        >
          mod {divisor}
        </text>
      </svg>
    </div>
  );
}

function renderLegend(divisor) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.4rem',
        justifyContent: 'center',
        maxWidth: 600,
      }}
    >
      {Array.from({ length: divisor }).map((_, i) => {
        const isZero = i === 0;
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.72rem',
              color: isZero ? PALETTE.accentWarmDeep : PALETTE.textDim,
              fontFamily: MONO,
              fontWeight: isZero ? 700 : 400,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 3,
                background: SLICE_COLORS[i % SLICE_COLORS.length],
                boxShadow: isZero ? `0 0 0 2px ${PALETTE.accentWarm}` : 'none',
              }}
            />
            <span>{isZero ? '★ 0 (zero class)' : `r=${i}`}</span>
          </div>
        );
      })}
    </div>
  );
}

function renderTooltip({ remainder, divisor, pinned, pos }) {
  const isZero = remainder === 0;
  const examples = classExamples(remainder, divisor).join(', ');
  const formula = isZero
    ? `n = ${divisor}k`
    : `n = ${divisor}k + ${remainder}`;
  const title = isZero
    ? '★ Zero class — principal class'
    : `Class ${remainder} — remainder ${remainder} mod ${divisor}`;
  const description = isZero
    ? `The multiples of ${divisor}. The identity element of ℤ/${divisor}ℤ — every other class is just this one shifted.`
    : `Numbers that leave remainder ${remainder} when divided by ${divisor}.`;

  // viewport-safe positioning
  const pad = 14;
  const w = 280;
  const h = 160;
  let left = pos.x + pad;
  let top = pos.y + pad;
  if (typeof window !== 'undefined') {
    if (left + w > window.innerWidth) left = pos.x - w - pad;
    if (top + h > window.innerHeight) top = pos.y - h - pad;
  }
  if (left < 4) left = 4;
  if (top < 4) top = 4;

  return (
    <div
      style={{
        position: 'fixed',
        left,
        top,
        background: isZero
          ? `linear-gradient(135deg, ${PALETTE.blue4}, ${PALETTE.accentWarmDeep})`
          : PALETTE.blue4,
        color: 'white',
        padding: '0.55rem 0.8rem',
        borderRadius: 6,
        fontSize: '0.78rem',
        lineHeight: 1.45,
        maxWidth: 260,
        pointerEvents: 'none',
        boxShadow: '0 4px 14px rgba(30, 58, 138, 0.25)',
        zIndex: 1000,
        fontFamily: SANS,
      }}
    >
      <div
        style={{
          fontWeight: 700,
          marginBottom: '0.25rem',
          fontFamily: MONO,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: MONO,
          color: isZero ? '#fff4c9' : '#c9d8ff',
          margin: '0.15rem 0',
        }}
      >
        {formula}
      </div>
      <div>{description}</div>
      <div>e.g. {examples}, …</div>
      <div
        style={{
          marginTop: '0.4rem',
          paddingTop: '0.35rem',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          fontSize: '0.7rem',
          opacity: 0.85,
          fontStyle: 'italic',
        }}
      >
        {pinned
          ? '📌 Pinned · tap again or elsewhere to dismiss'
          : 'Tap to pin'}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// Right panel: reactive context box + static deep dive
// ----------------------------------------------------------------------------

function renderContextBox({ panelMode, activeRemainder, divisor, placed, committedNumber }) {
  return (
    <div
      style={{
        background: PALETTE.bg,
        border: `1px solid ${PALETTE.border}`,
        borderLeft: `4px solid ${PALETTE.blue2}`,
        borderRadius: 8,
        padding: '0.9rem 1rem',
      }}
    >
      <div
        style={{
          fontSize: '0.68rem',
          color: PALETTE.textDim,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          fontWeight: 700,
          marginBottom: '0.5rem',
        }}
      >
        {panelMode === 'running' && 'Now placing'}
        {panelMode === 'class' && 'Class details'}
        {panelMode === 'summary' && 'Run complete'}
        {panelMode === 'idle' && 'Overview'}
      </div>

      {panelMode === 'running' && <RunningContext placed={placed} divisor={divisor} />}
      {panelMode === 'class' && (
        <ClassDetail remainder={activeRemainder} divisor={divisor} placed={placed} />
      )}
      {panelMode === 'summary' && (
        <RunSummary placed={placed} divisor={divisor} maxNumber={committedNumber} />
      )}
      {panelMode === 'idle' && <IdleIntro divisor={divisor} />}
    </div>
  );
}

function IdleIntro({ divisor }) {
  return (
    <div style={{ fontSize: '0.85rem', lineHeight: 1.55, color: PALETTE.text }}>
      <p style={{ marginBottom: '0.5rem' }}>
        You&apos;re looking at the integers 1, 2, 3, … sorted by their remainder when
        divided by{' '}
        <strong style={{ color: PALETTE.blue3 }}>{divisor}</strong>.
      </p>
      <p style={{ color: PALETTE.textDim }}>
        Press <strong style={{ color: PALETTE.blue3 }}>▶ Run</strong> to watch
        each number find its slice. Tap a slice anytime to see what it
        represents.
      </p>
    </div>
  );
}

function RunningContext({ placed, divisor }) {
  if (placed.length === 0) {
    return (
      <div style={{ fontSize: '0.85rem', color: PALETTE.textDim }}>
        Starting…
      </div>
    );
  }
  const last = placed[placed.length - 1];
  const q = Math.floor(last.n / divisor);
  const r = last.sliceIdx;
  const isZero = r === 0;

  return (
    <div style={{ fontSize: '0.85rem', lineHeight: 1.55 }}>
      <div
        style={{
          fontFamily: MONO,
          fontSize: '1.1rem',
          color: PALETTE.blue3,
          fontWeight: 700,
          marginBottom: '0.4rem',
        }}
      >
        n = {last.n}
      </div>
      <div style={{ fontFamily: MONO, color: PALETTE.text, marginBottom: '0.4rem' }}>
        {last.n} ÷ {divisor} = {q} remainder{' '}
        <span style={{ color: isZero ? PALETTE.accentWarmDeep : PALETTE.blue2, fontWeight: 700 }}>
          {r}
        </span>
      </div>
      <div style={{ color: PALETTE.textDim }}>
        Lands in{' '}
        <strong style={{ color: isZero ? PALETTE.accentWarmDeep : PALETTE.blue3 }}>
          {isZero ? 'the zero class' : `class ${r}`}
        </strong>
        , row {last.row + 1}.
        {isZero && (
          <span style={{ color: PALETTE.accentWarmDeep, fontWeight: 600 }}>
            {' '}
            {last.n} is divisible by {divisor}.
          </span>
        )}
      </div>
    </div>
  );
}

function ClassDetail({ remainder, divisor, placed }) {
  const isZero = remainder === 0;
  const formula = isZero ? `n = ${divisor}k` : `n = ${divisor}k + ${remainder}`;
  const examples = classExamples(remainder, divisor, 8);
  const placedInThisClass = placed.filter((p) => p.sliceIdx === remainder).map((p) => p.n);

  return (
    <div style={{ fontSize: '0.85rem', lineHeight: 1.55 }}>
      <div
        style={{
          fontFamily: MONO,
          fontSize: '1rem',
          color: isZero ? PALETTE.accentWarmDeep : PALETTE.blue3,
          fontWeight: 700,
          marginBottom: '0.4rem',
        }}
      >
        {isZero ? '★ Zero class' : `Class ${remainder}`}
      </div>

      <div style={{ marginBottom: '0.5rem' }}>
        {isZero ? (
          <>
            The multiples of <strong>{divisor}</strong>. This is the{' '}
            <strong style={{ color: PALETTE.accentWarmDeep }}>principal class</strong> — the
            identity element of ℤ/{divisor}ℤ. Every other class is just this one shifted by
            1, 2, …, or {divisor - 1}.
          </>
        ) : (
          <>
            Numbers that leave remainder <strong>{remainder}</strong> when divided by{' '}
            <strong>{divisor}</strong>.
          </>
        )}
      </div>

      <div
        style={{
          background: PALETTE.surface,
          border: `1px solid ${PALETTE.border}`,
          borderRadius: 6,
          padding: '0.5rem 0.7rem',
          fontFamily: MONO,
          fontSize: '0.85rem',
          marginBottom: '0.5rem',
          color: PALETTE.blue3,
        }}
      >
        {formula}
      </div>

      <div style={{ fontFamily: MONO, fontSize: '0.78rem', color: PALETTE.textDim, marginBottom: '0.5rem' }}>
        First few: {examples.join(', ')}, …
      </div>

      {placedInThisClass.length > 0 && (
        <div
          style={{
            background: isZero ? '#fff7e6' : PALETTE.blueLight,
            border: `1px solid ${isZero ? PALETTE.accentWarm : PALETTE.blue1}`,
            borderRadius: 6,
            padding: '0.5rem 0.7rem',
            fontSize: '0.78rem',
          }}
        >
          <div style={{ fontWeight: 700, color: PALETTE.blue3, marginBottom: '0.25rem' }}>
            Placed so far ({placedInThisClass.length})
          </div>
          <div style={{ fontFamily: MONO, color: PALETTE.text }}>
            {placedInThisClass.join(', ')}
          </div>
        </div>
      )}
    </div>
  );
}

function RunSummary({ placed, divisor, maxNumber }) {
  const perClass = new Array(divisor).fill(0);
  for (const p of placed) perClass[p.sliceIdx]++;
  const divisibleNumbers = placed.filter((p) => p.sliceIdx === 0).map((p) => p.n);

  return (
    <div style={{ fontSize: '0.85rem', lineHeight: 1.55 }}>
      <div style={{ marginBottom: '0.5rem' }}>
        Counted <strong>1</strong> to <strong>{maxNumber}</strong> and sorted each number
        into its class mod <strong>{divisor}</strong>.
      </div>

      <div
        style={{
          background: '#fff7e6',
          border: `1px solid ${PALETTE.accentWarm}`,
          borderRadius: 6,
          padding: '0.5rem 0.7rem',
          marginBottom: '0.5rem',
          fontSize: '0.8rem',
        }}
      >
        <div style={{ color: PALETTE.accentWarmDeep, fontWeight: 700, marginBottom: '0.25rem' }}>
          ★ Divisible by {divisor} ({divisibleNumbers.length})
        </div>
        <div style={{ fontFamily: MONO, color: PALETTE.text, wordBreak: 'break-word' }}>
          {divisibleNumbers.length > 0 ? divisibleNumbers.join(', ') : 'none'}
        </div>
      </div>

      <div style={{ fontSize: '0.78rem', color: PALETTE.textDim }}>
        Numbers per class:
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
          gap: '0.3rem',
          marginTop: '0.3rem',
        }}
      >
        {perClass.map((count, i) => (
          <div
            key={i}
            style={{
              background: PALETTE.surface,
              border: `1px solid ${i === 0 ? PALETTE.accentWarm : PALETTE.border}`,
              borderRadius: 5,
              padding: '0.35rem',
              textAlign: 'center',
              fontFamily: MONO,
              fontSize: '0.75rem',
            }}
          >
            <div style={{ color: PALETTE.textDim, fontSize: '0.65rem' }}>
              {i === 0 ? '★ 0' : `r=${i}`}
            </div>
            <div style={{ fontWeight: 700, color: PALETTE.blue3 }}>{count}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderDeepDive() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Section title="What is modular arithmetic?">
        <p>
          Modular arithmetic asks one question about a whole number: what&apos;s the
          remainder when you divide by <em>n</em>? The answer is always between 0 and{' '}
          <em>n</em>−1.
        </p>
        <p>
          We say &quot;<em>a</em> is congruent to <em>b</em> modulo <em>n</em>&quot; — written{' '}
          <code style={codeStyle}>a ≡ b (mod n)</code> — when <em>a</em> and <em>b</em> leave
          the same remainder. It&apos;s the math behind clocks (mod 12), days of the week
          (mod 7), and most of modern cryptography.
        </p>
      </Section>

      <Section title="Equivalence classes">
        <p>
          For a fixed divisor <em>n</em>, the integers split into exactly <em>n</em>{' '}
          groups by remainder. Class 0 collects the multiples of <em>n</em>. Class 1
          collects 1, <em>n</em>+1, 2<em>n</em>+1, …. And so on, up to class <em>n</em>−1.
        </p>
        <p>
          Every integer belongs to exactly one class. Two numbers in the same class are
          always <em>n</em> apart on the number line — that periodicity is the whole
          point. The wheel makes it visible: each slice is one class, and rows fill from
          the center outward as the count progresses.
        </p>
      </Section>

      <Section title="★ The zero class — why it&apos;s special" accent>
        <p>
          Class 0 — the multiples of <em>n</em> — sits at the top of the wheel and gets a
          gold outline. It&apos;s the <strong style={{ color: PALETTE.accentWarmDeep }}>
          principal class</strong>: the identity element of the structure ℤ/<em>n</em>ℤ.
        </p>
        <p style={{ marginTop: '0.4rem' }}>Why it stands out:</p>
        <ul style={listStyle}>
          <li>It&apos;s the only class containing 0.</li>
          <li>It&apos;s the only class where &quot;divisible by <em>n</em>&quot; is true.</li>
          <li>
            Every other class is just this one shifted by 1, 2, …, or <em>n</em>−1.
          </li>
          <li>In ring theory, it corresponds to the principal ideal <em>n</em>ℤ.</li>
        </ul>
      </Section>

      <Section title="How to read this wheel">
        <ul style={listStyle}>
          <li>
            Each slice is one remainder class. The label outside (0, 1, 2, …) tells you
            which remainder.
          </li>
          <li>
            Inside each slice, numbers stack outward — row 1 (closest to center) holds the
            first occurrence, row 2 the second, and so on.
          </li>
          <li>
            Tap or hover any slice for its formula and example numbers.
          </li>
          <li>
            Slice 0 is centered at 12 o&apos;clock to emphasize it as the principal class.
          </li>
        </ul>
      </Section>

      <Section title="Try this">
        <ul style={listStyle}>
          <li>
            Run with divisor 2 — even and odd numbers split into two halves of the wheel.
          </li>
          <li>
            Run with divisor 10 — the last digit of any number is its remainder.
          </li>
          <li>
            Switch divisors after running — the same numbers exist, but the class
            structure changes completely.
          </li>
          <li>
            Pick a small max with a large divisor (e.g. 12 with divisor 7) — most classes
            get one or two numbers; that&apos;s enough to see the pattern.
          </li>
        </ul>
      </Section>
    </div>
  );
}

function Section({ title, accent, children }) {
  return (
    <section>
      <h3
        style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: accent ? PALETTE.accentWarmDeep : PALETTE.blue3,
          marginBottom: '0.45rem',
          paddingBottom: '0.3rem',
          borderBottom: `1px solid ${PALETTE.border}`,
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontSize: '0.82rem',
          lineHeight: 1.55,
          color: PALETTE.text,
        }}
      >
        {children}
      </div>
    </section>
  );
}

// ============================================================================
// Shared style snippets
// ============================================================================

const controlGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
};

const labelStyle = {
  fontSize: '0.75rem',
  color: PALETTE.textDim,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontWeight: 600,
};

const codeStyle = {
  fontFamily: MONO,
  background: PALETTE.bg,
  padding: '0.05rem 0.3rem',
  borderRadius: 3,
  fontSize: '0.85em',
  color: PALETTE.blue3,
};

const listStyle = {
  margin: '0.3rem 0 0 0',
  paddingLeft: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
};