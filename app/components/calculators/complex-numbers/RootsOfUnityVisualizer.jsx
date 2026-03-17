'use client';

import { useState, useEffect, useRef } from 'react';

export default function RootsOfUnityVisualizer() {
  const [n, setN] = useState(5);
  const [animKey, setAnimKey] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [highlightK, setHighlightK] = useState(null);
  const animRef = useRef(null);

  const W = 624, H = 624;
  const margin = 48;
  const cx = W / 2, cy = H / 2;
  const unitR = (W - 2 * margin) / 2 * 0.72; // unit circle radius in px

  const toSvg = (re, im) => ({ x: cx + re * unitR, y: cy - im * unitR });
  const originSvg = toSvg(0, 0);

  // Roots
  const roots = [];
  for (let k = 0; k < n; k++) {
    const angle = (2 * Math.PI * k) / n;
    roots.push({
      k,
      angle,
      re: Math.cos(angle),
      im: Math.sin(angle),
    });
  }

  // Animation: reveal roots one by one
  useEffect(() => {
    setVisibleCount(0);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setVisibleCount(count);
      if (count >= n) clearInterval(interval);
    }, 180);
    animRef.current = interval;
    return () => clearInterval(interval);
  }, [n, animKey]);

  const clampN = (val) => Math.max(2, Math.min(20, Math.round(val)));

  // Formatting
  const fmtNum = (v) => {
    if (Math.abs(v) < 0.0005) return '0';
    if (Math.abs(v - Math.round(v)) < 0.0005) return String(Math.round(v));
    return v.toFixed(4);
  };

  const fmtShort = (v) => {
    if (Math.abs(v) < 0.005) return '0';
    if (Math.abs(v - 1) < 0.005) return '1';
    if (Math.abs(v + 1) < 0.005) return '−1';
    if (Math.abs(v - Math.round(v)) < 0.005) return String(Math.round(v));
    return v.toFixed(3);
  };

  const fmtComplex = (re, im) => {
    const rs = fmtShort(re);
    const ai = Math.abs(im);
    const is_ = fmtShort(ai);
    if (Math.abs(im) < 0.005) return rs;
    if (Math.abs(re) < 0.005) {
      if (is_ === '1') return im > 0 ? 'i' : '−i';
      return im > 0 ? `${is_}i` : `−${is_}i`;
    }
    const sign = im > 0 ? ' + ' : ' − ';
    const iPart = is_ === '1' ? 'i' : `${is_}i`;
    return `${rs}${sign}${iPart}`;
  };

  const fmtAngle = (k) => {
    if (k === 0) return '0';
    const g = gcd(2 * k, n);
    const num = (2 * k) / g;
    const den = n / g;
    if (den === 1) return num === 1 ? 'π' : num === 2 ? '2π' : `${num}π`;
    if (num === 1) return `π/${den}`;
    return `${num}π/${den}`;
  };

  const gcd = (a, b) => {
    a = Math.abs(a); b = Math.abs(b);
    while (b) { [a, b] = [b, a % b]; }
    return a;
  };

  // Color for each root
  const rootColor = (k) => {
    if (k === 0) return '#304090';
    const hue = (k / n) * 300 + 30;
    return `hsl(${hue}, 65%, 45%)`;
  };

  // Angle arc between adjacent roots
  const makeArc = (startAngle, endAngle, r) => {
    const rPx = r;
    const sx = cx + rPx * Math.cos(startAngle);
    const sy = cy - rPx * Math.sin(startAngle);
    const ex = cx + rPx * Math.cos(endAngle);
    const ey = cy - rPx * Math.sin(endAngle);
    const diff = endAngle - startAngle;
    const largeArc = Math.abs(diff) > Math.PI ? 1 : 0;
    return `M ${sx},${sy} A ${rPx},${rPx} 0 ${largeArc},0 ${ex},${ey}`;
  };

  // Grid ticks on axes
  const axisTicks = [-1, 1];

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .root-row:hover { background: #e8edf6; }
        input[type=range] { accent-color: #304090; }
        input[type=number]:focus { border-color: #304090 !important; outline: none; }
        .n-btn:hover { background: #e0ecff !important; border-color: #304090 !important; }
      ` }} />

      <div style={styles.header}>
        <h1 style={styles.title}>Roots of Unity</h1>
        <span style={styles.subtitle}>The n solutions to z<sup>n</sup> = 1</span>
      </div>

      <div style={styles.mainLayout}>
        {/* Left column */}
        <div style={styles.leftCol}>
          <div style={styles.planeWrap}>
            <svg
              viewBox={`0 0 ${W} ${H}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              <rect width={W} height={H} rx="12" fill="#f0f8f8" />

              {/* Axes */}
              <line x1={margin} y1={cy} x2={W - margin} y2={cy} stroke="#8098b0" strokeWidth="1.5" />
              <line x1={cx} y1={margin} x2={cx} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />
              <text x={W - margin + 8} y={cy + 5} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
              <text x={cx + 8} y={margin - 8} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

              {/* Axis tick marks and labels */}
              {axisTicks.map((v) => {
                const px = toSvg(v, 0);
                const py = toSvg(0, v);
                return (
                  <g key={v}>
                    <line x1={px.x} y1={px.y - 4} x2={px.x} y2={px.y + 4} stroke="#8098b0" strokeWidth="1.5" />
                    <text x={px.x} y={px.y + 18} textAnchor="middle" fontSize="12" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{v}</text>
                    <line x1={py.x - 4} y1={py.y} x2={py.x + 4} y2={py.y} stroke="#8098b0" strokeWidth="1.5" />
                    <text x={py.x - 12} y={py.y + 4} textAnchor="end" fontSize="12" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{v > 0 ? `${v}i` : `−${Math.abs(v)}i`}</text>
                  </g>
                );
              })}

              {/* Unit circle */}
              <circle cx={cx} cy={cy} r={unitR} fill="none" stroke="#4098d8" strokeWidth="2" opacity="0.35" />

              {/* Polygon connecting roots */}
              {visibleCount >= n && n >= 3 && (
                <polygon
                  points={roots.map(r => { const s = toSvg(r.re, r.im); return `${s.x},${s.y}`; }).join(' ')}
                  fill="#304090"
                  fillOpacity="0.04"
                  stroke="#304090"
                  strokeWidth="1.5"
                  strokeOpacity="0.3"
                />
              )}

              {/* Angle arc between first two roots */}
              {n >= 2 && visibleCount >= 2 && (
                <path
                  d={makeArc(0, (2 * Math.PI) / n, unitR * 0.35)}
                  fill="none"
                  stroke="#f89838"
                  strokeWidth="2.5"
                />
              )}
              {/* Angle label */}
              {n >= 2 && visibleCount >= 2 && (() => {
                const midAngle = Math.PI / n;
                const labelR = unitR * 0.48;
                return (
                  <text
                    x={cx + labelR * Math.cos(midAngle)}
                    y={cy - labelR * Math.sin(midAngle)}
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#f89838"
                    fontFamily="'JetBrains Mono', monospace"
                  >
                    2π/{n}
                  </text>
                );
              })()}

              {/* Root vectors and points */}
              {roots.map((root, i) => {
                if (i >= visibleCount) return null;
                const s = toSvg(root.re, root.im);
                const isHighlighted = highlightK === root.k;
                const color = rootColor(root.k);
                return (
                  <g key={root.k}>
                    {/* Vector */}
                    <line
                      x1={originSvg.x} y1={originSvg.y}
                      x2={s.x} y2={s.y}
                      stroke={color}
                      strokeWidth={isHighlighted ? 3 : 1.5}
                      opacity={isHighlighted ? 1 : 0.5}
                    />
                    {/* Point */}
                    <circle
                      cx={s.x} cy={s.y}
                      r={isHighlighted ? 10 : 7}
                      fill={color}
                      stroke="#fff"
                      strokeWidth="2"
                      style={{ transition: 'r 0.15s' }}
                    />
                    {/* Label */}
                    <text
                      x={s.x + 14 * Math.cos(root.angle)}
                      y={s.y - 14 * Math.sin(root.angle)}
                      textAnchor="middle"
                      fontSize={isHighlighted ? 14 : 11}
                      fontWeight="700"
                      fill={color}
                      fontFamily="'JetBrains Mono', monospace"
                    >
                      ω{root.k > 0 ? superscript(root.k) : ''}
                    </text>
                  </g>
                );
              })}

              {/* Origin */}
              <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />
            </svg>
          </div>

          {/* Controls */}
          <div style={styles.controlsBox}>
            <div style={styles.controlRow}>
              <label style={styles.controlLabel}>n =</label>
              <input
                type="number"
                min="2"
                max="20"
                value={n}
                onChange={(e) => setN(clampN(parseInt(e.target.value) || 2))}
                style={styles.numInput}
              />
              <input
                type="range"
                min="2"
                max="20"
                value={n}
                onChange={(e) => setN(parseInt(e.target.value))}
                style={styles.slider}
              />
              <span style={styles.sliderVal}>{n}</span>
            </div>
            <div style={styles.quickRow}>
              {[2, 3, 4, 5, 6, 8, 10, 12].map((v) => (
                <button
                  key={v}
                  className="n-btn"
                  style={{
                    ...styles.quickBtn,
                    ...(v === n ? styles.quickBtnActive : {}),
                  }}
                  onClick={() => setN(v)}
                >
                  {v}
                </button>
              ))}
              <button
                className="n-btn"
                style={styles.replayBtn}
                onClick={() => setAnimKey(k => k + 1)}
              >
                Replay
              </button>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={styles.panel}>
          {/* Summary */}
          <div style={styles.summaryBox}>
            <div style={styles.sectionTitle}>Summary</div>
            <div style={styles.summaryFormula}>
              z<sup>{n}</sup> = 1 has <strong>{n}</strong> solutions
            </div>
            <div style={styles.summaryLine}>
              Spaced evenly at <strong style={{ color: '#f89838' }}>2π/{n} = {fmtNum((360 / n))}°</strong> apart
            </div>
            <div style={styles.summaryLine}>
              Primitive root: ω = e<sup>i·2π/{n}</sup> = {fmtComplex(roots[1]?.re ?? 0, roots[1]?.im ?? 0)}
            </div>
            <div style={styles.summaryLine}>
              All roots: ω<sup>k</sup> for k = 0, 1, …, {n - 1}
            </div>
          </div>

          {/* Roots table */}
          <div style={styles.tableBox}>
            <div style={styles.sectionTitle}>All {n} Roots</div>
            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>k</th>
                    <th style={styles.th}>Angle</th>
                    <th style={styles.th}>Degrees</th>
                    <th style={styles.th}>Rectangular</th>
                  </tr>
                </thead>
                <tbody>
                  {roots.map((root) => {
                    const isVis = root.k < visibleCount;
                    const isHi = highlightK === root.k;
                    return (
                      <tr
                        key={root.k}
                        className="root-row"
                        style={{
                          ...styles.tr,
                          opacity: isVis ? 1 : 0.3,
                          backgroundColor: isHi ? '#e0ecff' : 'transparent',
                        }}
                        onMouseEnter={() => setHighlightK(root.k)}
                        onMouseLeave={() => setHighlightK(null)}
                      >
                        <td style={styles.td}>
                          <span style={{ ...styles.kBadge, backgroundColor: rootColor(root.k) }}>
                            {root.k}
                          </span>
                        </td>
                        <td style={styles.td}>{fmtAngle(root.k)}</td>
                        <td style={styles.td}>{fmtNum((root.angle * 180) / Math.PI)}°</td>
                        <td style={{ ...styles.td, fontWeight: '600' }}>{fmtComplex(root.re, root.im)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verification */}
          <div style={styles.verifyBox}>
            <div style={styles.sectionTitle}>Verify: (ω<sup>k</sup>)<sup>{n}</sup> = 1</div>
            <div style={styles.verifyText}>
              Each root ω<sup>k</sup> = e<sup>i·2πk/{n}</sup>. Raising to the n-th power:
            </div>
            <div style={styles.verifyMath}>
              (e<sup>i·2πk/{n}</sup>)<sup>{n}</sup> = e<sup>i·2πk</sup> = cos(2πk) + i sin(2πk) = <strong style={{ color: palette.green }}>1</strong>
            </div>
            <div style={styles.verifyText}>
              Since k is an integer, 2πk is a full rotation (or multiple) — always landing back at 1.
            </div>
          </div>

          {/* Properties */}
          <div style={styles.explainBox}>
            <div style={styles.sectionTitle}>Key Properties</div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
              <span>
                <strong>All n-th roots of unity lie on the unit circle</strong> (|z| = 1) because |z<sup>n</sup>| = |z|<sup>n</sup> = 1 requires |z| = 1.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#f89838' }}></span>
              <span>
                <strong>They form a regular n-gon</strong> inscribed in the unit circle. The angle between consecutive roots is always 2π/n = {fmtNum(360 / n)}°.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.green }}></span>
              <span>
                <strong>The sum of all n-th roots is zero:</strong> ω⁰ + ω¹ + ω² + … + ω<sup>{n - 1}</sup> = 0. Geometrically, the vectors cancel out — they're perfectly balanced around the origin.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#9060c0' }}></span>
              <span>
                <strong>ω = e<sup>i·2π/n</sup> is the primitive root</strong> — every other root is a power of ω. This is why we call it a "generator" of the group of n-th roots.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
              <span>
                <strong>Connection to De Moivre's:</strong> finding the n-th roots of unity is the same as solving z<sup>n</sup> = 1, which De Moivre's theorem handles by splitting the angle 0 into 0 + 2πk/n for each k.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function superscript(num) {
  const map = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
  return String(num).split('').map(c => map[c] || c).join('');
}

const palette = {
  navy: '#304090',
  blue: '#4098d8',
  orange: '#f89838',
  bg: '#f0f8f8',
  white: '#ffffff',
  text: '#1a2440',
  muted: '#5a6480',
  border: '#c8d0e0',
  green: '#1a8060',
};

const mono = "'JetBrains Mono', monospace";
const sans = "'DM Sans', sans-serif";

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: palette.bg,
    color: palette.text,
    fontFamily: sans,
    padding: '20px 28px',
    maxWidth: '1180px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '14px',
    marginBottom: '16px',
    borderBottom: `2px solid ${palette.navy}`,
    paddingBottom: '10px',
  },
  title: {
    fontSize: '1.7rem',
    fontWeight: '700',
    margin: 0,
    color: palette.navy,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: palette.muted,
    fontFamily: mono,
  },
  mainLayout: {
    display: 'grid',
    gridTemplateColumns: '624px 1fr',
    gap: '20px',
    alignItems: 'start',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  planeWrap: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '10px',
    padding: '6px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },

  /* Controls */
  controlsBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  controlRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  controlLabel: {
    fontSize: '1.1rem',
    fontWeight: '700',
    fontFamily: mono,
    color: palette.navy,
  },
  numInput: {
    width: '60px',
    fontSize: '1.12rem',
    fontFamily: mono,
    fontWeight: '600',
    padding: '4px 8px',
    border: `2px solid ${palette.border}`,
    borderRadius: '5px',
    color: palette.navy,
    backgroundColor: palette.bg,
    outline: 'none',
  },
  slider: {
    flex: 1,
    height: '6px',
    cursor: 'pointer',
  },
  sliderVal: {
    fontSize: '1.1rem',
    fontFamily: mono,
    fontWeight: '700',
    color: palette.navy,
    minWidth: '30px',
    textAlign: 'right',
  },
  quickRow: {
    display: 'flex',
    gap: '5px',
    flexWrap: 'wrap',
  },
  quickBtn: {
    padding: '5px 12px',
    border: `1px solid ${palette.border}`,
    borderRadius: '5px',
    backgroundColor: palette.white,
    fontFamily: mono,
    fontSize: '0.93rem',
    fontWeight: '600',
    cursor: 'pointer',
    color: palette.text,
    transition: 'all 0.12s',
  },
  quickBtnActive: {
    backgroundColor: '#e0ecff',
    borderColor: palette.navy,
    color: palette.navy,
  },
  replayBtn: {
    padding: '5px 12px',
    border: `1px solid ${palette.navy}`,
    borderRadius: '5px',
    backgroundColor: palette.white,
    fontFamily: sans,
    fontSize: '0.93rem',
    fontWeight: '700',
    cursor: 'pointer',
    color: palette.navy,
    transition: 'all 0.12s',
  },

  /* Summary */
  summaryBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  sectionTitle: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: palette.navy,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  summaryFormula: {
    fontFamily: mono,
    fontSize: '1.08rem',
    color: palette.text,
    marginBottom: '6px',
  },
  summaryLine: {
    fontSize: '0.93rem',
    color: palette.text,
    lineHeight: 1.5,
    fontFamily: mono,
  },

  /* Table */
  tableBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  tableWrap: {
    maxHeight: '300px',
    overflowY: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: mono,
    fontSize: '0.88rem',
  },
  th: {
    textAlign: 'left',
    padding: '6px 8px',
    borderBottom: `2px solid ${palette.border}`,
    fontSize: '0.78rem',
    color: palette.muted,
    fontWeight: '600',
    backgroundColor: palette.bg,
    position: 'sticky',
    top: 0,
  },
  tr: {
    transition: 'background 0.1s, opacity 0.3s',
    borderRadius: '4px',
  },
  td: {
    padding: '5px 8px',
    borderBottom: `1px solid ${palette.bg}`,
  },
  kBadge: {
    display: 'inline-block',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '0.75rem',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: '22px',
  },

  /* Verify */
  verifyBox: {
    backgroundColor: `${palette.green}08`,
    border: `1px solid ${palette.green}30`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  verifyText: {
    fontSize: '0.93rem',
    color: palette.text,
    lineHeight: 1.5,
    marginBottom: '4px',
  },
  verifyMath: {
    fontFamily: mono,
    fontSize: '0.96rem',
    fontWeight: '600',
    color: palette.text,
    padding: '4px 0 6px 8px',
    lineHeight: 1.5,
  },

  /* Explanation */
  explainBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  explainItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '0.93rem',
    color: palette.text,
    lineHeight: 1.5,
    marginBottom: '10px',
  },
  dot: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    marginTop: '6px',
    flexShrink: 0,
  },
};