import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

const T = {
  paper: '#E9EDF2',
  card: '#F7F9FB',
  ink: '#111A24',
  muted: '#6B7A8C',
  line: '#C9D3DE',
  tile: '#3A7CA5',
  tileEdge: '#2A5C7C',
  prime: '#C1394B',
  square: '#B0862F',
};

const DISPLAY = "'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif";
const MONO = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace";
const BODY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const MIN_N = 1;
const MAX_N = 100;
const BOARD_H = 300;

function factorPairs(n) {
  const out = [];
  for (let a = 1; a * a <= n; a += 1) {
    if (n % a === 0) out.push([a, n / a]);
  }
  return out;
}

function divisorsOf(n) {
  const small = [];
  const large = [];
  for (let a = 1; a * a <= n; a += 1) {
    if (n % a !== 0) continue;
    small.push(a);
    if (a !== n / a) large.push(n / a);
  }
  large.reverse();
  return small.concat(large);
}

function gapFor(step) {
  if (step > 20) return 4;
  if (step > 12) return 3;
  if (step > 7) return 2;
  return 1;
}

export default function RectangleFactorizer() {
  const [n, setN] = useState(12);
  const [pairIndex, setPairIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [boardW, setBoardW] = useState(560);

  const boardRef = useRef(null);

  const pairs = useMemo(() => factorPairs(n), [n]);
  const divisors = useMemo(() => divisorsOf(n), [n]);

  const safeIndex = Math.min(pairIndex, pairs.length - 1);
  const [rows, cols] = pairs[safeIndex];

  const isPrime = n > 1 && pairs.length === 1;
  const isPerfectSquare = Number.isInteger(Math.sqrt(n));

  useLayoutEffect(() => {
    const el = boardRef.current;
    if (!el) return undefined;
    const measure = () => setBoardW(el.clientWidth);
    measure();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return undefined;
    const id = window.setInterval(() => {
      setPairIndex((i) => (i + 1) % pairs.length);
    }, 1200);
    return () => window.clearInterval(id);
  }, [playing, pairs.length]);

  const changeN = useCallback((next) => {
    const clamped = Math.max(MIN_N, Math.min(MAX_N, next));
    setN(clamped);
    setPairIndex(0);
  }, []);

  const onBoardKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setPairIndex((i) => (i + 1) % pairs.length);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setPairIndex((i) => (i - 1 + pairs.length) % pairs.length);
    }
  }, [pairs.length]);

  const innerW = Math.max(120, boardW - 32);
  const innerH = BOARD_H - 32;
  const step = Math.max(4, Math.min(48, Math.min(innerW / cols, innerH / rows)));
  const gap = gapFor(step);
  const size = Math.max(3, step - gap);
  const offsetX = (boardW - cols * step) / 2;
  const offsetY = (BOARD_H - rows * step) / 2;

  const cells = [];
  for (let k = 0; k < n; k += 1) {
    const r = Math.floor(k / cols);
    const c = k % cols;
    cells.push(
      <div
        key={k}
        className="rf-tile"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: size,
          height: size,
          transform: `translate(${offsetX + c * step}px, ${offsetY + r * step}px)`,
          transitionDelay: `${Math.min(k, 40) * 9}ms`,
          borderRadius: size > 14 ? 3 : 1,
          background: isPrime ? T.prime : T.tile,
          boxShadow: size > 10 ? `inset 0 -2px 0 ${isPrime ? '#9C2C3B' : T.tileEdge}` : 'none',
        }}
      />
    );
  }

  let verdict;
  if (n === 1) {
    verdict = '1 makes a single square and nothing else.';
  } else if (isPrime) {
    verdict = `${n} is prime — the long strip is the only rectangle.`;
  } else if (isPerfectSquare) {
    verdict = `${n} is composite, and one of its rectangles is a true square.`;
  } else {
    verdict = `${n} is composite — ${pairs.length} different rectangles.`;
  }

  return (
    <div style={styles.page}>
      <style>{css}</style>

      <header style={styles.header}>
        <p style={styles.eyebrow}>Visual tools · arithmetic</p>
        <h1 style={styles.title}>Rectangle factorizer</h1>
        <p style={styles.lede}>
          Take {n} unit squares and pack them into a full rectangle. Every rectangle that works
          is a factor pair, and a number that only makes one long strip is prime.
        </p>
      </header>

      <div style={styles.card}>
        <div
          ref={boardRef}
          tabIndex={0}
          role="group"
          aria-label={`${n} unit squares arranged as ${rows} by ${cols}`}
          onKeyDown={onBoardKeyDown}
          className="rf-board"
          style={styles.board}
        >
          {cells}
        </div>

        <div style={styles.readout}>
          <span style={styles.equation}>
            <b style={styles.factor}>{rows}</b>
            <span style={styles.times}>×</span>
            <b style={styles.factor}>{cols}</b>
            <span style={styles.equals}>=</span>
            <b style={styles.product}>{n}</b>
          </span>
          <span style={styles.dims}>
            {rows} {rows === 1 ? 'row' : 'rows'} of {cols}
          </span>
        </div>
      </div>

      <div style={styles.chips}>
        {pairs.map(([a, b], i) => {
          const active = i === safeIndex;
          return (
            <button
              key={`${a}x${b}`}
              type="button"
              className="rf-chip"
              onClick={() => { setPairIndex(i); setPlaying(false); }}
              style={{
                ...styles.chip,
                borderColor: active ? (isPrime ? T.prime : T.tile) : T.line,
                color: active ? '#FFFFFF' : T.ink,
                background: active ? (isPrime ? T.prime : T.tile) : T.card,
              }}
            >
              {a} × {b}
            </button>
          );
        })}
        <button
          type="button"
          className="rf-chip"
          onClick={() => setPlaying((p) => !p)}
          disabled={pairs.length < 2}
          style={{
            ...styles.chip,
            ...styles.playChip,
            opacity: pairs.length < 2 ? 0.4 : 1,
          }}
        >
          {playing ? 'Stop' : 'Cycle all'}
        </button>
      </div>

      <p style={{ ...styles.verdict, color: isPrime ? T.prime : isPerfectSquare ? T.square : T.muted }}>
        {verdict}
      </p>

      <div style={styles.controls}>
        <div style={styles.stepper}>
          <button type="button" className="rf-step" onClick={() => changeN(n - 1)} aria-label="Fewer squares">−</button>
          <input
            type="number"
            value={n}
            min={MIN_N}
            max={MAX_N}
            onChange={(e) => changeN(parseInt(e.target.value, 10) || MIN_N)}
            className="rf-num"
            style={styles.num}
            aria-label="Number of unit squares"
          />
          <button type="button" className="rf-step" onClick={() => changeN(n + 1)} aria-label="More squares">+</button>
        </div>

        <input
          type="range"
          min={MIN_N}
          max={MAX_N}
          value={n}
          onChange={(e) => changeN(parseInt(e.target.value, 10))}
          className="rf-range"
          style={styles.range}
          aria-label="Choose how many squares"
        />
      </div>

      <div style={styles.divisorRow}>
        <span style={styles.divisorLabel}>Divisors</span>
        <span style={styles.divisorList}>{divisors.join('  ·  ')}</span>
        <span style={styles.divisorCount}>{divisors.length} total</span>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: BODY,
    color: T.ink,
    background: T.paper,
    padding: '28px 20px 32px',
    maxWidth: 680,
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  header: { marginBottom: 20 },
  eyebrow: {
    fontFamily: MONO,
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: T.muted,
    margin: '0 0 8px',
  },
  title: {
    fontFamily: DISPLAY,
    fontSize: 34,
    fontWeight: 400,
    letterSpacing: '-0.01em',
    margin: '0 0 10px',
  },
  lede: { fontSize: 15, lineHeight: 1.55, color: T.muted, margin: 0, maxWidth: 520 },
  card: {
    background: T.card,
    border: `1px solid ${T.line}`,
    borderRadius: 8,
    overflow: 'hidden',
  },
  board: {
    position: 'relative',
    height: BOARD_H,
    backgroundImage:
      `repeating-linear-gradient(0deg, ${T.line}55 0 1px, transparent 1px 24px),
       repeating-linear-gradient(90deg, ${T.line}55 0 1px, transparent 1px 24px)`,
    outline: 'none',
  },
  readout: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 12,
    padding: '12px 16px',
    borderTop: `1px solid ${T.line}`,
    background: '#FFFFFF',
  },
  equation: { fontFamily: MONO, fontSize: 20, display: 'flex', alignItems: 'baseline', gap: 8 },
  factor: { fontWeight: 600 },
  times: { color: T.muted },
  equals: { color: T.muted },
  product: { fontWeight: 600 },
  dims: { fontSize: 13, color: T.muted, fontFamily: MONO },
  chips: { display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 },
  chip: {
    fontFamily: MONO,
    fontSize: 13,
    padding: '7px 12px',
    borderRadius: 999,
    border: `1px solid ${T.line}`,
    cursor: 'pointer',
    transition: 'background 160ms ease, color 160ms ease, border-color 160ms ease',
  },
  playChip: { marginLeft: 'auto', background: 'transparent', color: T.muted, borderStyle: 'dashed' },
  verdict: { fontFamily: DISPLAY, fontSize: 17, margin: '16px 0 0', minHeight: 24 },
  controls: { display: 'flex', alignItems: 'center', gap: 16, marginTop: 18, flexWrap: 'wrap' },
  stepper: {
    display: 'flex',
    alignItems: 'stretch',
    border: `1px solid ${T.line}`,
    borderRadius: 6,
    overflow: 'hidden',
    background: T.card,
  },
  num: {
    width: 62,
    border: 'none',
    borderLeft: `1px solid ${T.line}`,
    borderRight: `1px solid ${T.line}`,
    textAlign: 'center',
    fontFamily: MONO,
    fontSize: 16,
    background: '#FFFFFF',
    color: T.ink,
    padding: '8px 0',
  },
  range: { flex: 1, minWidth: 200, accentColor: T.tile },
  divisorRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 12,
    marginTop: 20,
    paddingTop: 14,
    borderTop: `1px solid ${T.line}`,
    flexWrap: 'wrap',
  },
  divisorLabel: {
    fontFamily: MONO,
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: T.muted,
  },
  divisorList: { fontFamily: MONO, fontSize: 14, flex: 1, minWidth: 180, wordBreak: 'break-word' },
  divisorCount: { fontFamily: MONO, fontSize: 12, color: T.muted },
};

const css = `
.rf-tile {
  transition: transform 480ms cubic-bezier(.22,.9,.28,1.05),
              width 480ms cubic-bezier(.22,.9,.28,1.05),
              height 480ms cubic-bezier(.22,.9,.28,1.05),
              background 240ms ease;
  will-change: transform;
}
.rf-board:focus-visible { box-shadow: inset 0 0 0 2px ${T.tile}; }
.rf-chip:focus-visible, .rf-step:focus-visible, .rf-num:focus-visible, .rf-range:focus-visible {
  outline: 2px solid ${T.tile};
  outline-offset: 2px;
}
.rf-step {
  width: 40px;
  border: none;
  background: transparent;
  color: ${T.ink};
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
}
.rf-step:hover { background: ${T.line}66; }
.rf-num::-webkit-outer-spin-button, .rf-num::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.rf-num { -moz-appearance: textfield; }
@media (prefers-reduced-motion: reduce) {
  .rf-tile { transition: none !important; transition-delay: 0ms !important; }
}
`;