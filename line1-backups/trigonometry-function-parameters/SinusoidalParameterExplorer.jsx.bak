import React, { useState, useMemo } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================
   SinusoidalParameterExplorer v1
   y = A f(Bx - C) + D, one slider per parameter, on one live curve.
   Each parameter owns a colour, used on its slider, its value in the
   equation bar, and the feature it controls on the graph.
   Serves /trigonometry/graphs sections 5-9.
   ============================================================ */

const FUNCTIONS = ['sin', 'cos', 'tan', 'cot'];

const FN_DEF = {
  sin: { f: Math.sin, period: 2 * Math.PI, bounded: true },
  cos: { f: Math.cos, period: 2 * Math.PI, bounded: true },
  tan: { f: Math.tan, period: Math.PI, bounded: false },
  cot: { f: (t) => 1 / Math.tan(t), period: Math.PI, bounded: false },
};

const COLORS = {
  A: '#dc2626',
  B: '#b45309',
  C: '#7c3aed',
  D: '#475569',
  curve: '#1d6bd8',
  asymptote: '#ff6b6b',
  grid: '#f0f0f0',
  reference: '#94a3b8',
  accent: '#1e40af',
  accentLight: '#bfdbfe',
  panel: '#f3f4f6',
  panelBorder: '#d1d5db',
  ink: '#0f172a',
  muted: '#475569',
  alert: '#b91c1c',
  white: '#ffffff',
};

const PARAMS = [
  { key: 'A', name: 'amplitude', unit: '|A| tall', side: 'outside', min: -3, max: 3, step: 0.1 },
  { key: 'D', name: 'vertical shift', unit: 'midline', side: 'outside', min: -3, max: 3, step: 0.1 },
  { key: 'B', name: 'period', unit: '2π/|B|', side: 'inside', min: 0.25, max: 4, step: 0.25 },
  { key: 'C', name: 'phase shift', unit: 'shift C/B', side: 'inside', min: -24, max: 24, step: 1 },
];

const LEGEND = [
  ['A', 'amplitude', 'half the height, from midline to peak'],
  ['B', 'period', 'how many cycles fit the window'],
  ['C', 'phase shift', 'how far sideways, by C/B'],
  ['D', 'vertical shift', 'where the midline sits'],
];

const defaultExplanations = {
  form: `**y = A f(Bx - C) + D.** Four letters, four separate jobs. Move one slider and exactly one feature of the curve responds; each is drawn on the graph in its own colour. **Outside** the function, A and D act on the value it returns, so they work vertically. **Inside**, B and C act on the input x, so they work horizontally.`,
  A: `**A - amplitude.** A stretches the curve away from its midline. Midline to peak is **|A|**, so A = 3 and A = -3 are equally tall. A negative A reflects the curve across the midline; the dashed grey curve is the positive wave it came from, and the amplitude readout stays |A|. Maximum = **D + |A|**, minimum = **D - |A|**, both marked on the curve.`,
  B: `**B - period.** B multiplies x, squeezing the horizontal axis. The period is $\\frac{2\\pi}{|B|}$ for sine and cosine, $\\frac{\\pi}{|B|}$ for tangent and cotangent. Larger B fits more cycles in the same window. B acts on the input, so it never changes how tall the curve is.`,
  C: `**C - phase shift.** The curve moves by **C/B**, not by C. This is the usual error: with C = $\\pi$ and B = 2 the shift is $\\frac{\\pi}{2}$, not $\\pi$. Compare the violet bar on the graph with the value of C in the equation; they agree only when B = 1.`,
  D: `**D - vertical shift.** D lifts the whole curve. The midline moves to **y = D**, the maximum to D + |A|, the minimum to D - |A|. The amplitude bracket keeps exactly the same length, because D acts outside the function and leaves A alone.`,
  unbounded: `**Amplitude has no meaning here.** Tangent and cotangent are unbounded: no peak, so no distance from midline to maximum to measure. A still scales the curve and D still lifts it, but |A| is not an amplitude. The period is $\\frac{\\pi}{|B|}$, half the sine and cosine case.`,
};

const WALK = [
  { label: 'form', focus: 'form', state: { fn: 'sin', A: 1, B: 1, Cn: 0, D: 0 } },
  { label: 'A = 3', focus: 'A', state: { fn: 'sin', A: 3, B: 1, Cn: 0, D: 0 } },
  { label: 'A < 0', focus: 'A', state: { fn: 'sin', A: -2, B: 1, Cn: 0, D: 0 } },
  { label: 'B = 2', focus: 'B', state: { fn: 'sin', A: 1, B: 2, Cn: 0, D: 0 } },
  { label: 'C/B', focus: 'C', state: { fn: 'sin', A: 1, B: 2, Cn: 12, D: 0 } },
  { label: 'D = 2', focus: 'D', state: { fn: 'sin', A: 1, B: 1, Cn: 0, D: 2 } },
  { label: 'all four', focus: 'form', state: { fn: 'sin', A: 2, B: 2, Cn: 12, D: 1 } },
  { label: 'tan', focus: 'unbounded', state: { fn: 'tan', A: 1, B: 1, Cn: 0, D: 0 } },
];

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const piFraction = (n, d) => {
  if (n === 0) return '0';
  const sign = n < 0 ? '-' : '';
  let a = Math.abs(n);
  const k = gcd(a, d);
  a /= k;
  const dd = d / k;
  const num = a === 1 ? '' : a;
  return dd === 1 ? `${sign}${num}π` : `${sign}${num}π/${dd}`;
};

const piMultiple = (v) => {
  const r = Math.round((v / Math.PI) * 100) / 100;
  if (r === 0) return '0';
  if (r === 1) return 'π';
  if (r === -1) return '-π';
  return `${r}π`;
};

const SinusoidalParameterExplorer = ({
  initialFunction = 'sin',
  initialA = 1,
  initialB = 1,
  initialCTwelfths = 0,
  initialD = 0,
  explanations: explanationsProp,
  explanationsTitle = 'Explanations',
  graphHeight = 356,
  maxWidth = 1252,
}) => {
  const safeInitial = FUNCTIONS.includes(initialFunction) ? initialFunction : 'sin';

  const [fn, setFn] = useState(safeInitial);
  const [A, setA] = useState(initialA);
  const [B, setB] = useState(initialB);
  const [Cn, setCn] = useState(initialCTwelfths);
  const [D, setD] = useState(initialD);
  const [focus, setFocus] = useState('form');
  const [walk, setWalk] = useState(0);

  const explanations = useMemo(
    () => ({ ...defaultExplanations, ...(explanationsProp || {}) }),
    [explanationsProp]
  );

  const spec = FN_DEF[fn];
  const bounded = spec.bounded;
  const C = (Cn * Math.PI) / 12;
  const period = spec.period / B;
  const shift = C / B;
  const cLabel = piFraction(Cn, 12);
  const top = D + Math.abs(A);
  const bottom = D - Math.abs(A);

  const X0 = -2 * Math.PI;
  const X1 = 2 * Math.PI;
  const L = 46;
  const R = 856;
  const T = 22;
  const BT = 330;
  const YM = bounded ? Math.max(2.2, Math.abs(D) + Math.abs(A) + 0.9) : 3.2;

  const px = (x) => L + ((x - X0) / (X1 - X0)) * (R - L);
  const py = (y) => (T + BT) / 2 - (y / YM) * ((BT - T) / 2);

  const paths = useMemo(() => {
    const build = (amp) => {
      const out = [];
      let cur = '';
      let prev = null;
      const n = 1000;
      for (let i = 0; i <= n; i++) {
        const x = X0 + ((X1 - X0) * i) / n;
        const y = amp * spec.f(B * x - C) + D;
        if (!isFinite(y) || (!bounded && Math.abs(y) > YM)) {
          if (cur) out.push(cur);
          cur = '';
          prev = null;
          continue;
        }
        if (!bounded && prev !== null && Math.abs(y - prev) > 3) {
          out.push(cur);
          cur = '';
        }
        cur += `${cur ? ' L ' : 'M '}${px(x).toFixed(1)} ${py(y).toFixed(1)}`;
        prev = y;
      }
      if (cur) out.push(cur);
      return out;
    };
    return { main: build(A), ghost: A < 0 && bounded ? build(-A) : [] };
  }, [fn, A, B, Cn, D, YM]);

  const asymptotes = useMemo(() => {
    if (bounded) return [];
    const base = fn === 'tan' ? Math.PI / 2 : 0;
    const out = [];
    for (let m = -8; m <= 8; m++) {
      const xa = (base + m * Math.PI + C) / B;
      if (xa >= X0 && xa <= X1) out.push(xa);
    }
    return out;
  }, [fn, B, Cn, bounded]);

  let peakX = shift + (fn === 'sin' ? (A >= 0 ? Math.PI / 2 : (3 * Math.PI) / 2) : (A >= 0 ? 0 : Math.PI)) / B;
  while (peakX > X1 - 0.5) peakX -= period;
  while (peakX < X0 + 0.5) peakX += period;

  let maxX = shift + (fn === 'cos' ? 0 : Math.PI / 2) / B;
  let minX = maxX + period / 2;
  if (A < 0) {
    const swap = maxX;
    maxX = minX;
    minX = swap;
  }
  while (maxX > X1) maxX -= period;
  while (maxX < X0) maxX += period;
  while (minX > X1) minX -= period;
  while (minX < X0) minX += period;

  let cycleStart = shift;
  while (cycleStart < X0 + 0.001) cycleStart += period;
  while (cycleStart - period >= X0) cycleStart -= period;
  const cycleEnd = cycleStart + period;

  const applyWalk = (i) => {
    const w = WALK[i];
    setWalk(i);
    setFocus(w.focus);
    setFn(w.state.fn);
    setA(w.state.A);
    setB(w.state.B);
    setCn(w.state.Cn);
    setD(w.state.D);
  };

  const setParam = (key, value) => {
    if (key === 'A') setA(value);
    else if (key === 'B') setB(value);
    else if (key === 'C') setCn(value);
    else setD(value);
    setFocus(key);
    setWalk(-1);
  };

  const paramValue = (key) => (key === 'A' ? A : key === 'B' ? B : key === 'C' ? Cn : D);
  const paramDisplay = (key) =>
    key === 'C' ? cLabel : key === 'B' ? B : paramValue(key).toFixed(1);

  const explanationKey = bounded ? focus : 'unbounded';

  const styles = {
    container: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '10px',
      maxWidth: `${maxWidth}px`,
      margin: '0 auto',
    },
    grid: { display: 'grid', gridTemplateColumns: '5fr 2fr', gap: '12px', alignItems: 'start' },
    graphCard: {
      background: COLORS.white,
      border: `1px solid ${COLORS.accentLight}`,
      borderRadius: '8px',
      padding: '8px',
    },
    equationBar: {
      fontFamily: 'monospace',
      fontSize: '15px',
      textAlign: 'center',
      color: COLORS.ink,
      padding: '6px 0 8px',
      borderBottom: '1px solid #eff6ff',
      marginBottom: '4px',
    },
    controlsCard: {
      background: COLORS.panel,
      border: `1px solid ${COLORS.panelBorder}`,
      borderRadius: '8px',
      padding: '10px',
      marginTop: '10px',
    },
    explanationsCard: {
      background: COLORS.panel,
      border: `1px solid ${COLORS.panelBorder}`,
      borderRadius: '8px',
      padding: '12px',
    },
    explanationsTitle: {
      fontSize: '12px',
      fontWeight: 500,
      color: COLORS.accent,
      marginBottom: '8px',
      paddingBottom: '6px',
      borderBottom: `1px solid ${COLORS.panelBorder}`,
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
    },
    explanationsBody: { fontSize: '13px', lineHeight: 1.65, color: COLORS.ink },
    legend: {
      borderBottom: `1px solid ${COLORS.panelBorder}`,
      paddingBottom: '8px',
      marginBottom: '8px',
    },
    legendRow: {
      display: 'grid',
      gridTemplateColumns: '18px 1fr',
      gap: '6px',
      alignItems: 'baseline',
      fontSize: '12px',
      marginBottom: '4px',
    },
    sectionLabel: {
      fontSize: '11px',
      color: COLORS.accent,
      fontWeight: 500,
      marginBottom: '4px',
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
    },
    topRow: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 2fr',
      gap: '10px',
      alignItems: 'end',
      marginBottom: '6px',
    },
    funcGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3px' },
    funcButton: (active) => ({
      padding: '5px 4px',
      fontSize: '12px',
      fontFamily: 'monospace',
      border: `1px solid ${active ? COLORS.accent : COLORS.accentLight}`,
      borderRadius: '4px',
      cursor: 'pointer',
      background: active ? COLORS.accent : COLORS.white,
      color: active ? COLORS.white : COLORS.accent,
    }),
    groupLabel: {
      fontSize: '11px',
      color: COLORS.muted,
      fontWeight: 500,
      margin: '8px 0 2px',
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
    },
    paramRow: {
      display: 'grid',
      gridTemplateColumns: '20px 118px 1fr 64px 62px',
      gap: '8px',
      alignItems: 'center',
      marginTop: '6px',
    },
    paramKey: (key) => ({
      fontFamily: 'monospace',
      fontSize: '14px',
      fontWeight: 700,
      textAlign: 'center',
      color: COLORS[key],
    }),
    paramName: (key) => ({
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
      fontWeight: 500,
      color: COLORS[key],
    }),
    rangeInput: (key) => ({ width: '100%', accentColor: COLORS[key] }),
    numberInput: (key) => ({
      width: '100%',
      padding: '3px 6px',
      fontSize: '12px',
      border: `1px solid ${COLORS.accentLight}`,
      borderRadius: '4px',
      fontFamily: 'monospace',
      textAlign: 'right',
      color: COLORS[key],
    }),
    unitLabel: { fontSize: '11px', color: COLORS.muted, fontFamily: 'monospace' },
    walkRow: {
      display: 'grid',
      gridTemplateColumns: '138px 1fr',
      gap: '8px',
      alignItems: 'center',
      marginTop: '10px',
      borderTop: `1px solid ${COLORS.panelBorder}`,
      paddingTop: '8px',
    },
    walkGrid: { display: 'grid', gridTemplateColumns: `repeat(${WALK.length}, 1fr)`, gap: '3px' },
    walkButton: (active) => ({
      padding: '4px 2px',
      fontSize: '11px',
      border: `1px solid ${active ? COLORS.accent : COLORS.accentLight}`,
      borderRadius: '4px',
      cursor: 'pointer',
      background: active ? COLORS.accent : COLORS.white,
      color: active ? COLORS.white : COLORS.accent,
    }),
    readRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '8px',
      marginTop: '10px',
      borderTop: `1px solid ${COLORS.panelBorder}`,
      paddingTop: '8px',
    },
    readValue: { fontFamily: 'monospace', fontSize: '13px', fontWeight: 500, color: COLORS.ink },
    alert: { fontSize: '12px', lineHeight: 1.55, color: COLORS.alert, margin: '6px 0 0' },
  };

  const tick = (k) => {
    const xv = (k * Math.PI) / 2;
    return (
      <g key={`t${k}`}>
        <line x1={px(xv)} y1={T} x2={px(xv)} y2={BT} stroke={COLORS.grid} strokeWidth="1" />
        <text x={px(xv)} y={BT + 16} textAnchor="middle" fontSize="11" fill={COLORS.muted}>
          {piFraction(k, 2)}
        </text>
      </g>
    );
  };

  const reads = [
    ['Amplitude |A|', bounded ? Math.abs(A).toFixed(1) : 'none', COLORS.A],
    ['Period', piMultiple(period), COLORS.B],
    ['C itself', cLabel, COLORS.C],
    ['Shift C/B', piMultiple(shift), COLORS.C],
    ['Midline D', D.toFixed(1), COLORS.D],
    [
      'Max / min',
      bounded ? `${top.toFixed(1)} / ${bottom.toFixed(1)}` : 'unbounded',
      COLORS.A,
    ],
  ];

  return (
    <div style={styles.container}>
      <div style={styles.grid}>

        <div>
          <div style={styles.graphCard}>
            <div style={styles.equationBar}>
              {'y = '}
              <b style={{ color: COLORS.A }}>{A.toFixed(1)}</b>
              {` ${fn}(`}
              <b style={{ color: COLORS.B }}>{B.toFixed(2)}</b>
              {'x − '}
              <b style={{ color: COLORS.C }}>{cLabel}</b>
              {') + '}
              <b style={{ color: COLORS.D }}>{D.toFixed(1)}</b>
            </div>

            <svg
              viewBox={`0 0 880 ${graphHeight}`}
              width="880"
              height={graphHeight}
              role="img"
              style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
              fontFamily="system-ui, sans-serif"
            >
              <title>{`y = ${A.toFixed(1)} ${fn}(${B.toFixed(2)}x - ${cLabel}) + ${D.toFixed(1)}`}</title>

              {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map(tick)}

              <line x1={L} y1={py(0)} x2={R} y2={py(0)} stroke={COLORS.reference} strokeWidth="1" />
              <line x1={px(0)} y1={T} x2={px(0)} y2={BT} stroke={COLORS.reference} strokeWidth="1" />

              {asymptotes.map((xa, i) => (
                <line key={`a${i}`} x1={px(xa)} y1={T} x2={px(xa)} y2={BT}
                  stroke={COLORS.asymptote} strokeWidth="1" strokeDasharray="4 4" />
              ))}

              <line x1={L} y1={py(D)} x2={R} y2={py(D)} stroke={COLORS.D} strokeWidth="1.4" strokeDasharray="6 4" />
              <text x={R - 4} y={py(D) - 6} textAnchor="end" fontSize="11" fontWeight="600" fill={COLORS.D}>
                {`D — midline y = ${D.toFixed(1)}`}
              </text>

              {paths.ghost.map((d, i) => (
                <path key={`g${i}`} d={d} fill="none" stroke={COLORS.reference} strokeWidth="1.5" strokeDasharray="5 4" />
              ))}
              {paths.main.map((d, i) => (
                <path key={`m${i}`} d={d} fill="none" stroke={COLORS.curve} strokeWidth="3" strokeLinejoin="round" />
              ))}

              {bounded && (
                <g>
                  <line x1={px(peakX)} y1={py(D)} x2={px(peakX)} y2={py(top)} stroke={COLORS.A} strokeWidth="1.8" />
                  <line x1={px(peakX) - 6} y1={py(top)} x2={px(peakX) + 6} y2={py(top)} stroke={COLORS.A} strokeWidth="1.8" />
                  <text x={px(peakX) + 9} y={(py(D) + py(top)) / 2 + 4} fontSize="11" fontWeight="600" fill={COLORS.A}>
                    {`A — |A| = ${Math.abs(A).toFixed(1)}`}
                  </text>
                  <circle cx={px(maxX)} cy={py(top)} r="4" fill={COLORS.A} />
                  <text x={px(maxX)} y={py(top) - 9} textAnchor="middle" fontSize="11" fill={COLORS.A}>
                    {`max = D + |A| = ${top.toFixed(1)}`}
                  </text>
                  <circle cx={px(minX)} cy={py(bottom)} r="4" fill={COLORS.A} />
                  <text x={px(minX)} y={py(bottom) + 17} textAnchor="middle" fontSize="11" fill={COLORS.A}>
                    {`min = D - |A| = ${bottom.toFixed(1)}`}
                  </text>
                </g>
              )}

              {cycleEnd <= X1 && (
                <g>
                  <line x1={px(cycleStart)} y1={py(D)} x2={px(cycleStart)} y2={BT - 8}
                    stroke={COLORS.B} strokeWidth="1" strokeDasharray="3 3" />
                  <line x1={px(cycleEnd)} y1={py(D)} x2={px(cycleEnd)} y2={BT - 8}
                    stroke={COLORS.B} strokeWidth="1" strokeDasharray="3 3" />
                  <line x1={px(cycleStart)} y1={BT - 8} x2={px(cycleEnd)} y2={BT - 8}
                    stroke={COLORS.B} strokeWidth="1.8" />
                  <text x={(px(cycleStart) + px(cycleEnd)) / 2} y={BT - 14} textAnchor="middle"
                    fontSize="11" fontWeight="600" fill={COLORS.B}>
                    {`B — period = ${piMultiple(period)}`}
                  </text>
                </g>
              )}

              {Math.abs(shift) > 1e-9 && (
                <g>
                  <line x1={px(0)} y1={T - 6} x2={px(shift)} y2={T - 6} stroke={COLORS.C} strokeWidth="1.8" />
                  <line x1={px(0)} y1={T - 11} x2={px(0)} y2={T - 1} stroke={COLORS.C} strokeWidth="1.8" />
                  <line x1={px(shift)} y1={T - 11} x2={px(shift)} y2={T - 1} stroke={COLORS.C} strokeWidth="1.8" />
                  <text x={(px(0) + px(shift)) / 2} y={T - 13} textAnchor="middle"
                    fontSize="11" fontWeight="600" fill={COLORS.C}>
                    {`C — shift C/B = ${piMultiple(shift)}`}
                  </text>
                </g>
              )}
            </svg>
          </div>

          <div style={styles.controlsCard}>
            <div style={styles.topRow}>
              <div>
                <div style={styles.sectionLabel}>Function</div>
                <div style={styles.funcGrid}>
                  {FUNCTIONS.map((f) => (
                    <button
                      key={f}
                      onClick={() => {
                        setFn(f);
                        setFocus(FN_DEF[f].bounded ? (focus === 'unbounded' ? 'form' : focus) : 'unbounded');
                        setWalk(-1);
                      }}
                      style={styles.funcButton(fn === f)}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={styles.sectionLabel}>Reset</div>
                <button onClick={() => applyWalk(0)} style={{ ...styles.funcButton(false), width: '100%' }}>
                  y = sin x
                </button>
              </div>

              <div>
                <div style={styles.sectionLabel}>Reads as</div>
                <div style={styles.readValue}>
                  {bounded
                    ? `amplitude ${Math.abs(A).toFixed(1)}, period ${piMultiple(period)}, shift ${piMultiple(shift)}, midline ${D.toFixed(1)}`
                    : `no amplitude, period ${piMultiple(period)}, shift ${piMultiple(shift)}, midline ${D.toFixed(1)}`}
                </div>
              </div>
            </div>

            {['outside', 'inside'].map((side) => (
              <div key={side}>
                <div style={styles.groupLabel}>
                  {side === 'outside'
                    ? 'Outside the function — acts on the output, moves the curve vertically'
                    : 'Inside the function — acts on the input x, moves the curve horizontally'}
                </div>
                {PARAMS.filter((p) => p.side === side).map((p) => (
                  <div key={p.key} style={styles.paramRow}>
                    <span style={styles.paramKey(p.key)}>{p.key}</span>
                    <span style={styles.paramName(p.key)}>{p.name}</span>
                    <input
                      type="range"
                      min={p.min}
                      max={p.max}
                      step={p.step}
                      value={paramValue(p.key)}
                      onChange={(e) => setParam(p.key, parseFloat(e.target.value))}
                      style={styles.rangeInput(p.key)}
                    />
                    <input
                      type={p.key === 'C' ? 'text' : 'number'}
                      readOnly={p.key === 'C'}
                      min={p.min}
                      max={p.max}
                      step={p.step}
                      value={paramDisplay(p.key)}
                      onChange={(e) => {
                        if (p.key === 'C') return;
                        const v = parseFloat(e.target.value);
                        if (isNaN(v)) return;
                        setParam(p.key, Math.max(p.min, Math.min(p.max, v)));
                      }}
                      style={styles.numberInput(p.key)}
                    />
                    <span style={styles.unitLabel}>{p.unit}</span>
                  </div>
                ))}
              </div>
            ))}

            <div style={styles.walkRow}>
              <span style={{ ...styles.sectionLabel, marginBottom: 0 }}>Guided walk</span>
              <div style={styles.walkGrid}>
                {WALK.map((w, i) => (
                  <button key={w.label} onClick={() => applyWalk(i)} style={styles.walkButton(walk === i)}>
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={styles.readRow}>
              {reads.map((r) => (
                <div key={r[0]}>
                  <div style={{ ...styles.sectionLabel, color: r[2] }}>{r[0]}</div>
                  <div style={styles.readValue}>{r[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.explanationsCard}>
          <div style={styles.explanationsTitle}>{explanationsTitle}</div>

          <div style={styles.legend}>
            {LEGEND.map(([key, name, gloss]) => (
              <div key={key} style={styles.legendRow}>
                <span style={{ fontFamily: 'monospace', fontWeight: 700, textAlign: 'center', color: COLORS[key] }}>
                  {key}
                </span>
                <span style={{ color: COLORS.ink, fontWeight: focus === key ? 600 : 400 }}>
                  <span style={{ color: COLORS[key] }}>{name}</span>
                  {` — ${gloss}`}
                </span>
              </div>
            ))}
          </div>

          <div style={styles.explanationsBody}>
            {processContent(explanations[explanationKey] || '')}
          </div>

          {bounded && A < 0 && focus !== 'A' && (
            <p style={styles.alert}>A is negative: the curve is the dashed one reflected across the midline.</p>
          )}
          {bounded && Math.abs(shift) > 1e-9 && focus !== 'C' && (
            <p style={styles.alert}>{`C = ${cLabel}, but the curve moved by C/B = ${piMultiple(shift)}.`}</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default SinusoidalParameterExplorer;
