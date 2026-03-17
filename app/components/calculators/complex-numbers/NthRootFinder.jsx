'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export default function NthRootFinder() {
  const [re, setRe] = useState(4);
  const [im, setIm] = useState(0);
  const [n, setN] = useState(3);
  const [animKey, setAnimKey] = useState(0);
  const [visibleCount, setVisibleCount] = useState(20);
  const [highlightK, setHighlightK] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [warning, setWarning] = useState(false);
  const warningTimer = useRef(null);
  const animRef = useRef(null);
  const svgRef = useRef(null);

  const W = 720, H = 720;
  const margin = 52;
  const range = 5;
  const maxVal = 5;

  const clamp = (val) => Math.max(-maxVal, Math.min(maxVal, Math.round(val * 10) / 10));
  const clampN = (val) => Math.max(2, Math.min(20, Math.round(val)));

  // z in polar
  const mod = Math.sqrt(re * re + im * im);
  const arg = Math.atan2(im, re);
  const rootMod = Math.pow(mod, 1 / n);

  const scale = (W - 2 * margin) / (2 * range);
  const ox = W / 2;
  const oy = H / 2;

  const safeSet = (newRe, newIm) => {
    const needsClamp = Math.abs(newRe) > maxVal || Math.abs(newIm) > maxVal;
    if (needsClamp) {
      setWarning(true);
      if (warningTimer.current) clearTimeout(warningTimer.current);
      warningTimer.current = setTimeout(() => setWarning(false), 2500);
    }
    setRe(clamp(newRe));
    setIm(clamp(newIm));
  };

  const toSvg = (r, i) => ({ x: ox + r * scale, y: oy - i * scale });
  const fromSvg = (sx, sy) => ({ re: (sx - ox) / scale, im: (oy - sy) / scale });
  const originSvg = toSvg(0, 0);

  // All n roots
  const roots = [];
  for (let k = 0; k < n; k++) {
    const angle = (arg + 2 * Math.PI * k) / n;
    roots.push({
      k,
      angle,
      re: rootMod * Math.cos(angle),
      im: rootMod * Math.sin(angle),
    });
  }

  // Animation
  useEffect(() => {
    setVisibleCount(0);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setVisibleCount(count);
      if (count >= n) clearInterval(interval);
    }, 200);
    animRef.current = interval;
    return () => clearInterval(interval);
  }, [n, re, im, animKey]);

  // Drag z
  const handlePointerDown = useCallback((e) => {
    setDragging(true);
    e.target.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!dragging || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const sx = (e.clientX - rect.left) * (W / rect.width);
    const sy = (e.clientY - rect.top) * (H / rect.height);
    const pt = fromSvg(sx, sy);
    setRe(clamp(pt.re));
    setIm(clamp(pt.im));
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  // Formatting
  const fmtNum = (v) => {
    if (Math.abs(v) < 0.0005) return '0';
    if (Math.abs(v - Math.round(v)) < 0.0005) return String(Math.round(v));
    return v.toFixed(3);
  };

  const fmtShort = (v) => {
    if (Math.abs(v) < 0.005) return '0';
    if (Math.abs(v - 1) < 0.005) return '1';
    if (Math.abs(v + 1) < 0.005) return '−1';
    if (Math.abs(v - Math.round(v)) < 0.005) return String(Math.round(v));
    return v.toFixed(3);
  };

  const fmtComplex = (r, i) => {
    const rs = fmtShort(r);
    const ai = Math.abs(i);
    const is_ = fmtShort(ai);
    if (Math.abs(i) < 0.005) return rs;
    if (Math.abs(r) < 0.005) {
      if (is_ === '1') return i > 0 ? 'i' : '−i';
      return i > 0 ? `${is_}i` : `−${is_}i`;
    }
    const sign = i > 0 ? ' + ' : ' − ';
    const iPart = is_ === '1' ? 'i' : `${is_}i`;
    return `${rs}${sign}${iPart}`;
  };

  const fmtDeg = (rad) => `${fmtNum(rad * 180 / Math.PI)}°`;

  const fmtAngleRad = (rad) => {
    const norm = ((rad % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    if (norm > Math.PI) {
      const neg = norm - 2 * Math.PI;
      return `${fmtNum(neg / Math.PI)}π`;
    }
    return `${fmtNum(norm / Math.PI)}π`;
  };

  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; };

  const fmtAngleFrac = (k) => {
    // angle = (arg + 2πk) / n
    // We'll just show degrees and decimal π for general case
    const angle = (arg + 2 * Math.PI * k) / n;
    return fmtDeg(angle);
  };

  // Color for each root
  const rootColor = (k) => {
    if (n <= 1) return '#1a8060';
    const hue = (k / n) * 300 + 120;
    return `hsl(${hue}, 60%, 42%)`;
  };

  // Grid
  const gridLinesFixed = [];
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    const v1 = toSvg(i, -range), v2 = toSvg(i, range);
    gridLinesFixed.push({ x1: v1.x, y1: v1.y, x2: v2.x, y2: v2.y });
    const h1 = toSvg(-range, i), h2 = toSvg(range, i);
    gridLinesFixed.push({ x1: h1.x, y1: h1.y, x2: h2.x, y2: h2.y });
  }

  const ticks = [];
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    const px = toSvg(i, 0);
    ticks.push({ x: px.x, y: px.y + 16, label: String(i), anchor: 'middle' });
    const py = toSvg(0, i);
    ticks.push({ x: py.x - 10, y: py.y + 4, label: i > 0 ? `${i}i` : `−${Math.abs(i)}i`, anchor: 'end' });
  }

  // z SVG point
  const zSvg = toSvg(re, im);

  // Are all roots within view?
  const allRootsVisible = roots.every(r => Math.abs(r.re) <= range && Math.abs(r.im) <= range);

  // Presets
  const presets = [
    { re: 4, im: 0, n: 3, label: '³√4' },
    { re: -1, im: 0, n: 2, label: '√(−1)' },
    { re: 0, im: 4, n: 3, label: '³√(4i)' },
    { re: 1, im: 0, n: 5, label: '⁵√1' },
    { re: -4, im: 0, n: 3, label: '³√(−4)' },
    { re: 3, im: 4, n: 4, label: '⁴√(3+4i)' },
    { re: 1, im: 1, n: 6, label: '⁶√(1+i)' },
  ];

  const supDigits = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
  const toSup = (num) => String(num).split('').map(c => supDigits[c] || c).join('');

  // Angle arc
  const makeArc = (startAngle, endAngle, r) => {
    const diff = endAngle - startAngle;
    if (Math.abs(diff) < 0.01) return '';
    const sx = ox + r * Math.cos(startAngle);
    const sy = oy - r * Math.sin(startAngle);
    const ex = ox + r * Math.cos(endAngle);
    const ey = oy - r * Math.sin(endAngle);
    const largeArc = Math.abs(diff) > Math.PI ? 1 : 0;
    const sweepFlag = diff > 0 ? 0 : 1;
    return `M ${sx},${sy} A ${r},${r} 0 ${largeArc},${sweepFlag} ${ex},${ey}`;
  };

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .drag-point { cursor: grab; }
        .drag-point:active { cursor: grabbing; }
        .root-row:hover { background: #e8edf6; }
        .preset-btn:hover { background: #e0ecff !important; border-color: #304090 !important; }
        input[type=number]:focus { border-color: #304090 !important; outline: none; }
        input[type=range] { accent-color: #304090; }
      ` }} />

      <div style={styles.header}>
        <h1 style={styles.title}>N-th Root Finder</h1>
        <span style={styles.subtitle}>All n solutions to w<sup>n</sup> = z</span>
      </div>

      <div style={styles.mainLayout}>
        {/* Left column */}
        <div style={styles.leftCol}>
          <div style={styles.planeWrap}>
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              <rect width={W} height={H} rx="12" fill="#f0f8f8" />

              {gridLinesFixed.map((l, i) => (
                <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#d8e4ec" strokeWidth="0.7" />
              ))}

              <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#8098b0" strokeWidth="1.5" />
              <line x1={ox} y1={margin} x2={ox} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />
              <text x={W - margin + 8} y={oy + 5} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
              <text x={ox + 8} y={margin - 8} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

              {ticks.map((t, i) => (
                <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="11" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
              ))}

              {/* Root circle: radius = |z|^(1/n) */}
              {rootMod > 0.15 && rootMod <= range && (
                <circle cx={ox} cy={oy} r={rootMod * scale} fill="none" stroke="#1a8060" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.4" />
              )}

              {/* Modulus circle for z */}
              {mod > 0.3 && mod <= range && (
                <circle cx={ox} cy={oy} r={mod * scale} fill="none" stroke="#304090" strokeWidth="1" strokeDasharray="4,3" opacity="0.2" />
              )}

              {/* Polygon connecting roots */}
              {visibleCount >= n && n >= 3 && allRootsVisible && (
                <polygon
                  points={roots.map(r => { const s = toSvg(r.re, r.im); return `${s.x},${s.y}`; }).join(' ')}
                  fill="#1a8060"
                  fillOpacity="0.04"
                  stroke="#1a8060"
                  strokeWidth="1.5"
                  strokeOpacity="0.3"
                />
              )}

              {/* Angle arc between first two roots */}
              {n >= 2 && visibleCount >= 2 && rootMod > 0.2 && rootMod <= range && (
                <path
                  d={makeArc(roots[0].angle, roots[1].angle, rootMod * scale * 0.45)}
                  fill="none"
                  stroke="#f89838"
                  strokeWidth="2.5"
                />
              )}
              {n >= 2 && visibleCount >= 2 && rootMod > 0.3 && (() => {
                const midAngle = (roots[0].angle + roots[1].angle) / 2;
                const labelR = rootMod * scale * 0.58;
                return (
                  <text
                    x={ox + labelR * Math.cos(midAngle)}
                    y={oy - labelR * Math.sin(midAngle)}
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#f89838"
                    fontFamily="'JetBrains Mono', monospace"
                  >
                    2π/{n}
                  </text>
                );
              })()}

              {/* z vector */}
              {mod > 0.1 && (
                <line x1={originSvg.x} y1={originSvg.y} x2={zSvg.x} y2={zSvg.y} stroke="#304090" strokeWidth="2.5" />
              )}

              {/* Root vectors and points */}
              {roots.map((root, i) => {
                if (i >= visibleCount) return null;
                const s = toSvg(root.re, root.im);
                if (Math.abs(root.re) > range || Math.abs(root.im) > range) return null;
                const isHi = highlightK === root.k;
                const color = rootColor(root.k);
                return (
                  <g key={root.k}>
                    <line x1={originSvg.x} y1={originSvg.y} x2={s.x} y2={s.y}
                      stroke={color} strokeWidth={isHi ? 2.5 : 1.5} opacity={isHi ? 1 : 0.5} />
                    <circle cx={s.x} cy={s.y} r={isHi ? 10 : 7} fill={color} stroke="#fff" strokeWidth="2" />
                    <text
                      x={s.x + 14 * Math.cos(root.angle)}
                      y={s.y - 14 * Math.sin(root.angle)}
                      textAnchor="middle"
                      fontSize={isHi ? 13 : 11}
                      fontWeight="700"
                      fill={color}
                      fontFamily="'JetBrains Mono', monospace"
                    >
                      w{toSup(root.k)}
                    </text>
                  </g>
                );
              })}

              {/* z point (draggable) */}
              <circle className="drag-point" cx={zSvg.x} cy={zSvg.y} r="11" fill="#304090" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown} />
              <text x={zSvg.x + 16} y={zSvg.y - 12} fontSize="15" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z</text>

              <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />

              {/* Radius labels */}
              {rootMod > 0.3 && rootMod <= range && (
                <text
                  x={ox + rootMod * scale / 2 + 4}
                  y={oy + 16}
                  fontSize="11"
                  fontWeight="600"
                  fill="#1a8060"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  |z|^(1/{n}) = {fmtShort(rootMod)}
                </text>
              )}
            </svg>
          </div>

          {/* Controls */}
          <div style={styles.controlsBox}>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>z: Re =</label>
              <input type="number" step="0.1" min="-5" max="5" value={re}
                onChange={(e) => safeSet(parseFloat(e.target.value) || 0, im)} style={styles.numInput} />
              <label style={styles.inputLabel}>Im =</label>
              <input type="number" step="0.1" min="-5" max="5" value={im}
                onChange={(e) => safeSet(re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
              <label style={styles.inputLabel}>n =</label>
              <input type="number" min="2" max="20" value={n}
                onChange={(e) => setN(clampN(parseInt(e.target.value) || 2))} style={{ ...styles.numInput, width: '56px' }} />
            </div>
            <div style={styles.sliderRow}>
              <label style={styles.sliderLabel}>n</label>
              <input type="range" min="2" max="12" step="1" value={n}
                onChange={(e) => setN(parseInt(e.target.value))} style={styles.slider} />
              <span style={styles.sliderVal}>{n}</span>
              <button className="preset-btn" style={styles.replayBtn}
                onClick={() => setAnimKey(k => k + 1)}>
                Replay
              </button>
            </div>
            {warning && (
              <div style={styles.warningMsg}>Values are limited to ±5. Input was clamped.</div>
            )}
          </div>

          {/* Presets */}
          <div style={styles.presetBox}>
            <div style={styles.presetTitle}>Try these</div>
            <div style={styles.presetRow}>
              {presets.map((p) => (
                <button key={p.label} className="preset-btn" style={styles.presetBtn}
                  onClick={() => { setRe(p.re); setIm(p.im); setN(p.n); }}>
                  {p.label}
                </button>
              ))}
              <button className="preset-btn" style={{ ...styles.presetBtn, ...styles.randBtn }}
                onClick={() => {
                  setRe(clamp(Math.random() * 8 - 4));
                  setIm(clamp(Math.random() * 8 - 4));
                  setN(Math.floor(Math.random() * 6) + 2);
                }}>
                Random
              </button>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={styles.panel}>
          {/* Problem statement */}
          <div style={styles.problemBox}>
            <div style={styles.sectionTitle}>Problem</div>
            <div style={styles.problemMain}>
              Find all w such that w<sup>{n}</sup> = <strong style={{ color: palette.navy }}>{fmtComplex(re, im)}</strong>
            </div>
            <div style={styles.problemSub}>
              z = {fmtComplex(re, im)}, |z| = {fmtShort(mod)}, arg(z) = {fmtDeg(arg)}
            </div>
          </div>

          {/* Step-by-step */}
          <div style={styles.stepsBox}>
            <div style={styles.sectionTitle}>Step-by-Step (De Moivre's)</div>
            <div style={styles.stepLine}>
              <span style={styles.stepNum}>1</span>
              <span>Write z in polar form:</span>
            </div>
            <div style={styles.stepMath}>
              z = {fmtShort(mod)} · e<sup>i·{fmtAngleRad(arg)}</sup>
            </div>
            <div style={styles.stepLine}>
              <span style={styles.stepNum}>2</span>
              <span>The n-th root modulus is |z|<sup>1/n</sup>:</span>
            </div>
            <div style={styles.stepMath}>
              {fmtShort(mod)}<sup>1/{n}</sup> = <strong style={{ color: palette.green }}>{fmtShort(rootMod)}</strong>
            </div>
            <div style={styles.stepLine}>
              <span style={styles.stepNum}>3</span>
              <span>The k-th root has angle (arg(z) + 2πk) / n:</span>
            </div>
            <div style={styles.stepMath}>
              θ<sub>k</sub> = ({fmtDeg(arg)} + 360°·k) / {n},  k = 0, 1, …, {n - 1}
            </div>
            <div style={styles.stepLine}>
              <span style={styles.stepNum}>4</span>
              <span>This gives {n} roots spaced <strong style={{ color: '#f89838' }}>{fmtShort(360 / n)}°</strong> apart on a circle of radius <strong style={{ color: palette.green }}>{fmtShort(rootMod)}</strong>:</span>
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
                    <th style={styles.th}>Rectangular</th>
                    <th style={styles.th}>Verify</th>
                  </tr>
                </thead>
                <tbody>
                  {roots.map((root) => {
                    const isVis = root.k < visibleCount;
                    const isHi = highlightK === root.k;
                    // Verify: w^n
                    const vRe = Math.pow(rootMod, n) * Math.cos(root.angle * n);
                    const vIm = Math.pow(rootMod, n) * Math.sin(root.angle * n);
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
                          <span style={{ ...styles.kBadge, backgroundColor: rootColor(root.k) }}>{root.k}</span>
                        </td>
                        <td style={styles.td}>{fmtAngleFrac(root.k)}</td>
                        <td style={{ ...styles.td, fontWeight: '600' }}>{fmtComplex(root.re, root.im)}</td>
                        <td style={{ ...styles.td, color: palette.green, fontSize: '0.82rem' }}>
                          w{toSup(n)} = {fmtComplex(vRe, vIm)} ✓
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Ideas */}
          <div style={styles.explainBox}>
            <div style={styles.sectionTitle}>Key Ideas</div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.green }}></span>
              <span>
                <strong>Every nonzero complex number has exactly n distinct n-th roots.</strong> They all share the same modulus |z|<sup>1/n</sup> and lie on a circle of that radius.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#f89838' }}></span>
              <span>
                <strong>The roots form a regular n-gon</strong> because consecutive roots differ by exactly 2π/n = {fmtShort(360 / n)}° in angle. The first root's angle is arg(z)/n; the rest are evenly spaced from there.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
              <span>
                <strong>De Moivre's theorem is the engine:</strong> w<sup>n</sup> = z means w = |z|<sup>1/n</sup> · e<sup>i(arg(z) + 2πk)/n</sup>. Each value of k = 0, 1, …, n−1 gives a different root. After that, the angles repeat.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#9060c0' }}></span>
              <span>
                <strong>Special case: roots of unity.</strong> When z = 1, the roots are just the n-th roots of unity — evenly spaced on the unit circle starting at angle 0. For general z, the circle's radius changes and the whole polygon rotates.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
              <span>
                <strong>Try √(−1):</strong> the two square roots of −1 are i and −i. The polygon is a line segment through the origin on the imaginary axis — the simplest possible "2-gon."
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
    maxWidth: '1280px',
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
    gridTemplateColumns: '720px 1fr',
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
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  inputLabel: {
    fontSize: '0.96rem',
    fontWeight: '600',
    color: palette.muted,
    fontFamily: mono,
  },
  numInput: {
    width: '80px',
    fontSize: '1.08rem',
    fontFamily: mono,
    fontWeight: '600',
    padding: '4px 8px',
    border: `2px solid ${palette.border}`,
    borderRadius: '5px',
    color: palette.navy,
    backgroundColor: palette.bg,
    outline: 'none',
  },
  sliderRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  sliderLabel: {
    fontSize: '1.1rem',
    fontWeight: '700',
    fontFamily: mono,
    color: palette.navy,
    fontStyle: 'italic',
    minWidth: '20px',
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
  replayBtn: {
    padding: '4px 12px',
    border: `1px solid ${palette.navy}`,
    borderRadius: '5px',
    backgroundColor: palette.white,
    fontFamily: sans,
    fontSize: '0.88rem',
    fontWeight: '700',
    cursor: 'pointer',
    color: palette.navy,
    transition: 'all 0.12s',
    marginLeft: '6px',
  },
  warningMsg: {
    padding: '6px 10px',
    fontSize: '0.88rem',
    fontWeight: '600',
    color: '#b03030',
    backgroundColor: '#fef2f2',
    border: '1px solid #f0c0c0',
    borderRadius: '5px',
  },

  /* Presets */
  presetBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '10px 14px',
  },
  presetTitle: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: palette.navy,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  presetRow: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
  },
  presetBtn: {
    padding: '5px 10px',
    border: `1px solid ${palette.border}`,
    borderRadius: '5px',
    backgroundColor: palette.white,
    fontFamily: mono,
    fontSize: '0.88rem',
    fontWeight: '600',
    cursor: 'pointer',
    color: palette.text,
    transition: 'all 0.12s',
  },
  randBtn: {
    color: palette.navy,
    borderColor: palette.navy,
    fontFamily: sans,
    fontWeight: '700',
  },

  /* Problem */
  problemBox: {
    backgroundColor: `${palette.navy}08`,
    border: `2px solid ${palette.navy}30`,
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
  problemMain: {
    fontFamily: mono,
    fontSize: '1.12rem',
    color: palette.text,
    marginBottom: '4px',
  },
  problemSub: {
    fontFamily: mono,
    fontSize: '0.9rem',
    color: palette.muted,
  },

  /* Steps */
  stepsBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  stepLine: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '0.93rem',
    color: palette.text,
    lineHeight: 1.5,
    marginBottom: '2px',
  },
  stepNum: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: palette.navy,
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.72rem',
    fontWeight: '700',
    flexShrink: 0,
  },
  stepMath: {
    fontFamily: mono,
    fontSize: '0.93rem',
    fontWeight: '600',
    color: palette.text,
    padding: '2px 0 8px 28px',
    lineHeight: 1.5,
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
    fontSize: '0.85rem',
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