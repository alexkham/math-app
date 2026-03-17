'use client';

import { useState, useRef, useCallback } from 'react';

export default function EulerFormulaExplorer() {
  const [theta, setTheta] = useState(Math.PI / 4);
  const [radius, setRadius] = useState(1);
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef(null);

  const W = 624, H = 624;
  const margin = 48;
  const range = 2.5;
  const scale = (W - 2 * margin) / (2 * range);
  const ox = W / 2;
  const oy = H / 2;

  const maxR = 2.4;

  const toSvg = (re, im) => ({ x: ox + re * scale, y: oy - im * scale });

  const cosT = Math.cos(theta);
  const sinT = Math.sin(theta);
  const zRe = radius * cosT;
  const zIm = radius * sinT;

  const zSvg = toSvg(zRe, zIm);
  const originSvg = toSvg(0, 0);
  const projReSvg = toSvg(zRe, 0);
  const projImSvg = toSvg(0, zIm);

  // Drag handler — compute angle from pointer position
  const handlePointerDown = useCallback((e) => {
    setDragging(true);
    e.target.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!dragging || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const sx = (e.clientX - rect.left) * (W / rect.width);
    const sy = (e.clientY - rect.top) * (H / rect.height);
    const dx = sx - ox;
    const dy = -(sy - oy);
    const angle = Math.atan2(dy, dx);
    setTheta(angle < 0 ? angle + 2 * Math.PI : angle);
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  // Arc path for the angle indicator
  const arcPath = (r, startAngle, endAngle) => {
    const sweep = endAngle - startAngle;
    if (Math.abs(sweep) < 0.001) return '';
    const largeArc = Math.abs(sweep) > Math.PI ? 1 : 0;
    const s = toSvg(r * Math.cos(startAngle), r * Math.sin(startAngle));
    const e = toSvg(r * Math.cos(endAngle), r * Math.sin(endAngle));
    const rPx = r * scale;
    return `M ${s.x},${s.y} A ${rPx},${rPx} 0 ${largeArc},0 ${e.x},${e.y}`;
  };

  const fmtAngle = (rad) => {
    const deg = (rad * 180 / Math.PI);
    return `${deg.toFixed(1)}°`;
  };

  const fmtRad = (rad) => {
    const fracs = [
      { num: 0, den: 1, label: '0' },
      { num: 1, den: 6, label: 'π/6' },
      { num: 1, den: 4, label: 'π/4' },
      { num: 1, den: 3, label: 'π/3' },
      { num: 1, den: 2, label: 'π/2' },
      { num: 2, den: 3, label: '2π/3' },
      { num: 3, den: 4, label: '3π/4' },
      { num: 5, den: 6, label: '5π/6' },
      { num: 1, den: 1, label: 'π' },
      { num: 7, den: 6, label: '7π/6' },
      { num: 5, den: 4, label: '5π/4' },
      { num: 4, den: 3, label: '4π/3' },
      { num: 3, den: 2, label: '3π/2' },
      { num: 5, den: 3, label: '5π/3' },
      { num: 7, den: 4, label: '7π/4' },
      { num: 11, den: 6, label: '11π/6' },
      { num: 2, den: 1, label: '2π' },
    ];
    for (const f of fracs) {
      if (Math.abs(rad - (f.num / f.den) * Math.PI) < 0.02) return f.label;
    }
    return `${(rad / Math.PI).toFixed(2)}π`;
  };

  const fmtNum = (n) => {
    if (Math.abs(n) < 0.005) return '0';
    if (Math.abs(n - Math.round(n)) < 0.005) return String(Math.round(n));
    return n.toFixed(3);
  };

  const fmtComplex = (re, im) => {
    const r = fmtNum(re);
    const i = fmtNum(Math.abs(im));
    if (Math.abs(im) < 0.005) return r;
    if (Math.abs(re) < 0.005) {
      if (i === '1') return im > 0 ? 'i' : '−i';
      return im > 0 ? `${i}i` : `−${i}i`;
    }
    const sign = im > 0 ? ' + ' : ' − ';
    const iPart = i === '1' ? 'i' : `${i}i`;
    return `${r}${sign}${iPart}`;
  };

  // Grid
  const gridLines = [];
  for (let i = -Math.floor(range); i <= Math.floor(range); i++) {
    if (i === 0) continue;
    const p1v = toSvg(i, -range);
    const p2v = toSvg(i, range);
    gridLines.push({ x1: p1v.x, y1: p1v.y, x2: p2v.x, y2: p2v.y });
    const p1h = toSvg(-range, i);
    const p2h = toSvg(range, i);
    gridLines.push({ x1: p1h.x, y1: p1h.y, x2: p2h.x, y2: p2h.y });
  }

  const ticks = [];
  for (let i = -2; i <= 2; i++) {
    if (i === 0) continue;
    const px = toSvg(i, 0);
    ticks.push({ x: px.x, y: px.y + 16, label: String(i), anchor: 'middle' });
    const py = toSvg(0, i);
    ticks.push({ x: py.x - 10, y: py.y + 4, label: `${i}i`, anchor: 'end' });
  }

  // Landmark angles
  const landmarks = [
    { angle: 0, label: '0', display: 'e⁰ = 1', note: 'Starting point on the real axis' },
    { angle: Math.PI / 6, label: 'π/6', display: 'e^(iπ/6)', note: '30° — cos π/6 = √3/2, sin π/6 = 1/2' },
    { angle: Math.PI / 4, label: 'π/4', display: 'e^(iπ/4)', note: '45° — cos = sin = √2/2 ≈ 0.707' },
    { angle: Math.PI / 3, label: 'π/3', display: 'e^(iπ/3)', note: '60° — cos π/3 = 1/2, sin π/3 = √3/2' },
    { angle: Math.PI / 2, label: 'π/2', display: 'e^(iπ/2) = i', note: '90° — pure imaginary, on the Im axis' },
    { angle: Math.PI, label: 'π', display: 'e^(iπ) = −1', note: "Euler's identity! The most famous equation in math." },
    { angle: 3 * Math.PI / 2, label: '3π/2', display: 'e^(i3π/2) = −i', note: '270° — negative imaginary axis' },
  ];

  // Which landmark is closest?
  const closestLandmark = landmarks.find(l => Math.abs(theta - l.angle) < 0.05);

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .drag-point { cursor: grab; }
        .drag-point:active { cursor: grabbing; }
        .landmark-btn:hover { background: #e0ecff !important; border-color: #304090 !important; }
        input[type=range] { accent-color: #304090; }
      ` }} />

      <div style={styles.header}>
        {/* <h1 style={styles.title}>Euler's Formula Explorer</h1> */}
        <span style={styles.subtitle}>e<sup>iθ</sup> = cos θ + i sin θ</span>
      </div>

      <div style={styles.mainLayout}>
        {/* Left column: plane + controls */}
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

              {/* Grid */}
              {gridLines.map((l, i) => (
                <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#d8e4ec" strokeWidth="0.7" />
              ))}

              {/* Axes */}
              <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#8098b0" strokeWidth="1.5" />
              <line x1={ox} y1={margin} x2={ox} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />
              <text x={W - margin + 8} y={oy + 5} fontSize="13" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
              <text x={ox + 8} y={margin - 8} fontSize="13" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

              {/* Ticks */}
              {ticks.map((t, i) => (
                <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="11" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
              ))}

              {/* Unit circle */}
              <circle cx={originSvg.x} cy={originSvg.y} r={1 * scale} fill="none" stroke="#4098d8" strokeWidth="1.5" opacity="0.4" />

              {/* Radius circle (if r > 1) */}
              {radius !== 1 && (
                <circle cx={originSvg.x} cy={originSvg.y} r={radius * scale} fill="none" stroke="#4098d8" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.3" />
              )}

              {/* Angle arc */}
              {theta > 0.01 && (
                <path d={arcPath(0.35 * radius, 0, theta)} fill="none" stroke="#f89838" strokeWidth="2" />
              )}

              {/* θ label near arc */}
              {theta > 0.15 && (() => {
                const midA = theta / 2;
                const labelR = 0.5 * radius;
                const lp = toSvg(labelR * Math.cos(midA), labelR * Math.sin(midA));
                return (
                  <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="14" fontWeight="700" fill="#f89838" fontFamily="'DM Sans', sans-serif">θ</text>
                );
              })()}

              {/* Projection lines (dashed) */}
              {/* Horizontal: z to Im axis */}
              <line x1={zSvg.x} y1={zSvg.y} x2={projImSvg.x} y2={projImSvg.y} stroke="#304090" strokeWidth="1" strokeDasharray="4,3" opacity="0.4" />
              {/* Vertical: z to Re axis */}
              <line x1={zSvg.x} y1={zSvg.y} x2={projReSvg.x} y2={projReSvg.y} stroke="#304090" strokeWidth="1" strokeDasharray="4,3" opacity="0.4" />

              {/* Right triangle fill */}
              <polygon
                points={`${originSvg.x},${originSvg.y} ${projReSvg.x},${projReSvg.y} ${zSvg.x},${zSvg.y}`}
                fill="#304090"
                opacity="0.06"
              />

              {/* Triangle sides */}
              {/* Hypotenuse: origin → z */}
              <line x1={originSvg.x} y1={originSvg.y} x2={zSvg.x} y2={zSvg.y} stroke="#304090" strokeWidth="2.5" />
              {/* Adjacent: origin → projection on Re */}
              <line x1={originSvg.x} y1={originSvg.y} x2={projReSvg.x} y2={projReSvg.y} stroke="#1a8060" strokeWidth="2" />
              {/* Opposite: projection on Re → z */}
              <line x1={projReSvg.x} y1={projReSvg.y} x2={zSvg.x} y2={zSvg.y} stroke="#c04040" strokeWidth="2" />

              {/* Right angle marker */}
              {Math.abs(zRe) > 0.15 && Math.abs(zIm) > 0.15 && (() => {
                const sz = 8;
                const dirX = zRe > 0 ? -1 : 1;
                const dirY = zIm > 0 ? -1 : 1;
                return (
                  <polyline
                    points={`${projReSvg.x},${projReSvg.y + dirY * sz} ${projReSvg.x + dirX * sz},${projReSvg.y + dirY * sz} ${projReSvg.x + dirX * sz},${projReSvg.y}`}
                    fill="none"
                    stroke="#8098b0"
                    strokeWidth="1"
                  />
                );
              })()}

              {/* Side labels */}
              {/* cos θ label on Re axis */}
              {Math.abs(zRe) > 0.2 && (
                <text
                  x={(originSvg.x + projReSvg.x) / 2}
                  y={originSvg.y + (zIm >= 0 ? 18 : -10)}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="600"
                  fill="#1a8060"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  {radius === 1 ? 'cos θ' : `r cos θ`}
                </text>
              )}

              {/* sin θ label on vertical side */}
              {Math.abs(zIm) > 0.2 && (
                <text
                  x={projReSvg.x + (zRe >= 0 ? 14 : -14)}
                  y={(projReSvg.y + zSvg.y) / 2 + 4}
                  textAnchor={zRe >= 0 ? 'start' : 'end'}
                  fontSize="12"
                  fontWeight="600"
                  fill="#c04040"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  {radius === 1 ? 'sin θ' : `r sin θ`}
                </text>
              )}

              {/* Modulus label */}
              {radius > 0.3 && (
                <text
                  x={(originSvg.x + zSvg.x) / 2 - (zIm >= 0 ? 12 : -12)}
                  y={(originSvg.y + zSvg.y) / 2 + (zIm >= 0 ? -8 : 16)}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill="#304090"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  r = {fmtNum(radius)}
                </text>
              )}

              {/* Projection dots on axes */}
              <circle cx={projReSvg.x} cy={projReSvg.y} r="4" fill="#1a8060" />
              <circle cx={projImSvg.x} cy={projImSvg.y} r="4" fill="#c04040" />

              {/* Landmark dots on unit circle */}
              {landmarks.map((lm, i) => {
                const lp = toSvg(Math.cos(lm.angle), Math.sin(lm.angle));
                const isActive = Math.abs(theta - lm.angle) < 0.05 && radius === 1;
                return (
                  <circle
                    key={i}
                    cx={lp.x}
                    cy={lp.y}
                    r={isActive ? 5 : 3}
                    fill={isActive ? '#f89838' : '#4098d8'}
                    opacity={isActive ? 1 : 0.5}
                  />
                );
              })}

              {/* The z point (draggable) */}
              <circle
                className="drag-point"
                cx={zSvg.x}
                cy={zSvg.y}
                r="11"
                fill="#304090"
                stroke="#fff"
                strokeWidth="2.5"
                onPointerDown={handlePointerDown}
              />

              {/* z label */}
              <text
                x={zSvg.x + 16}
                y={zSvg.y - 10}
                fontSize="14"
                fontWeight="700"
                fill="#304090"
                fontFamily="'DM Sans', sans-serif"
                style={{ pointerEvents: 'none' }}
              >
                e<tspan fontSize="10" baselineShift="super">iθ</tspan>
              </text>

              {/* Origin */}
              <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />
            </svg>
          </div>

          {/* Controls under the plane */}
          <div style={styles.controlsBox}>
            <div style={styles.sliderRow}>
              <label style={styles.sliderLabel}>θ</label>
              <input
                type="range"
                min="0"
                max={2 * Math.PI}
                step="0.01"
                value={theta}
                onChange={(e) => setTheta(parseFloat(e.target.value))}
                style={styles.slider}
              />
              <span style={styles.sliderVal}>{fmtAngle(theta)} = {fmtRad(theta)}</span>
            </div>
            <div style={styles.sliderRow}>
              <label style={styles.sliderLabel}>r</label>
              <input
                type="range"
                min="0.1"
                max={maxR}
                step="0.1"
                value={radius}
                onChange={(e) => setRadius(parseFloat(e.target.value))}
                style={styles.slider}
              />
              <span style={styles.sliderVal}>{fmtNum(radius)}</span>
            </div>
            <div style={styles.landmarkRow}>
              {landmarks.map((lm) => (
                <button
                  key={lm.label}
                  className="landmark-btn"
                  style={{
                    ...styles.landmarkBtn,
                    ...(Math.abs(theta - lm.angle) < 0.05 ? styles.landmarkBtnActive : {}),
                  }}
                  onClick={() => { setTheta(lm.angle); setRadius(1); }}
                >
                  {lm.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={styles.panel}>
          {/* Live values */}
          <div style={styles.valuesBox}>
            <div style={styles.sectionTitle}>Live Values</div>

            <div style={styles.formulaRow}>
              <span style={styles.formulaLabel}>
                {radius === 1 ? '' : `${fmtNum(radius)} · `}e<sup>iθ</sup>
              </span>
              <span style={styles.formulaEquals}>=</span>
              <span style={styles.formulaResult}>{fmtComplex(zRe, zIm)}</span>
            </div>

            <div style={styles.valGrid}>
              <span style={styles.valKey}>θ</span>
              <span style={styles.valVal}>{fmtRad(theta)} = {fmtAngle(theta)}</span>

              <span style={styles.valKey}>cos θ</span>
              <span style={{ ...styles.valVal, color: '#1a8060' }}>{fmtNum(cosT)}</span>

              <span style={styles.valKey}>sin θ</span>
              <span style={{ ...styles.valVal, color: '#c04040' }}>{fmtNum(sinT)}</span>

              <span style={styles.valKey}>Re(z)</span>
              <span style={{ ...styles.valVal, color: '#1a8060' }}>{fmtNum(zRe)}</span>

              <span style={styles.valKey}>Im(z)</span>
              <span style={{ ...styles.valVal, color: '#c04040' }}>{fmtNum(zIm)}</span>

              <span style={styles.valKey}>|z|</span>
              <span style={{ ...styles.valVal, color: '#304090' }}>{fmtNum(radius)}</span>
            </div>
          </div>

          {/* Landmark callout */}
          {closestLandmark && radius === 1 && (
            <div style={styles.landmarkCallout}>
              <div style={styles.landmarkDisplay}>{closestLandmark.display}</div>
              <div style={styles.landmarkNote}>{closestLandmark.note}</div>
            </div>
          )}

          {/* Formula breakdown */}
          <div style={styles.breakdownBox}>
            <div style={styles.sectionTitle}>Formula Breakdown</div>
            <div style={styles.breakdownLine}>
              <span style={styles.breakdownStep}>1</span>
              <span>Start with Euler's formula: <strong>e<sup>iθ</sup> = cos θ + i sin θ</strong></span>
            </div>
            {radius !== 1 && (
              <div style={styles.breakdownLine}>
                <span style={styles.breakdownStep}>•</span>
                <span>Multiply by r: <strong>r · e<sup>iθ</sup> = r cos θ + i · r sin θ</strong></span>
              </div>
            )}
            <div style={styles.breakdownLine}>
              <span style={styles.breakdownStep}>2</span>
              <span>Substitute θ = {fmtRad(theta)}:</span>
            </div>
            <div style={styles.breakdownMath}>
              {radius === 1 ? '' : `${fmtNum(radius)} · `}e<sup>i·{fmtRad(theta)}</sup> = {radius === 1 ? '' : `${fmtNum(radius)}(`}cos({fmtRad(theta)}) + i sin({fmtRad(theta)}){radius === 1 ? '' : ')'}
            </div>
            <div style={styles.breakdownLine}>
              <span style={styles.breakdownStep}>3</span>
              <span>Evaluate:</span>
            </div>
            <div style={styles.breakdownMath}>
              = {radius === 1 ? '' : `${fmtNum(radius)}(`}<span style={{ color: '#1a8060' }}>{fmtNum(cosT)}</span> + i · <span style={{ color: '#c04040' }}>{fmtNum(sinT)}</span>{radius === 1 ? '' : ')'}
              {' '}= <strong>{fmtComplex(zRe, zIm)}</strong>
            </div>
          </div>

          {/* Explanations */}
          <div style={styles.explainBox}>
            <div style={styles.sectionTitle}>Key Ideas</div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#4098d8' }}></span>
              <span>
                <strong>e<sup>iθ</sup> traces the unit circle.</strong> As θ goes from 0 to 2π, the point completes one full revolution. The real part is cos θ, the imaginary part is sin θ.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#f89838' }}></span>
              <span>
                <strong>θ is the angle from the positive real axis,</strong> measured counterclockwise in radians. One full turn = 2π radians = 360°.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#1a8060' }}></span>
              <span>
                <strong>The right triangle connects trig to complex numbers.</strong> The hypotenuse is r (the modulus), the horizontal leg is r cos θ (real part), and the vertical leg is r sin θ (imaginary part).
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#c04040' }}></span>
              <span>
                <strong>Why use e<sup>iθ</sup> instead of cos θ + i sin θ?</strong> Because multiplication becomes simple: e<sup>iα</sup> · e<sup>iβ</sup> = e<sup>i(α+β)</sup>. Multiplying complex numbers = adding angles. The exponential form makes rotation algebra trivial.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#304090' }}></span>
              <span>
                <strong>r · e<sup>iθ</sup> is the polar form</strong> of any complex number. r is the distance from the origin (modulus), θ is the angle (argument). Every complex number can be written this way.
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
  red: '#c04040',
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
    gap: '14px',
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
    minWidth: '20px',
    fontStyle: 'italic',
  },
  slider: {
    flex: 1,
    height: '6px',
    cursor: 'pointer',
  },
  sliderVal: {
    fontSize: '0.9rem',
    fontFamily: mono,
    fontWeight: '600',
    color: palette.text,
    minWidth: '140px',
    textAlign: 'right',
  },
  landmarkRow: {
    display: 'flex',
    gap: '5px',
    flexWrap: 'wrap',
    marginTop: '2px',
  },
  landmarkBtn: {
    padding: '4px 10px',
    border: `1px solid ${palette.border}`,
    borderRadius: '4px',
    backgroundColor: palette.white,
    fontFamily: mono,
    fontSize: '0.88rem',
    fontWeight: '600',
    cursor: 'pointer',
    color: palette.text,
    transition: 'all 0.12s',
  },
  landmarkBtnActive: {
    backgroundColor: '#e0ecff',
    borderColor: palette.navy,
    color: palette.navy,
  },

  /* Values */
  valuesBox: {
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
    marginBottom: '10px',
  },
  formulaRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    padding: '8px 10px',
    backgroundColor: `${palette.navy}08`,
    borderRadius: '6px',
    marginBottom: '10px',
  },
  formulaLabel: {
    fontFamily: mono,
    fontSize: '1.04rem',
    fontWeight: '600',
    color: palette.navy,
  },
  formulaEquals: {
    fontSize: '1.1rem',
    color: palette.muted,
  },
  formulaResult: {
    fontFamily: mono,
    fontSize: '1.2rem',
    fontWeight: '700',
    color: palette.navy,
  },
  valGrid: {
    display: 'grid',
    gridTemplateColumns: '70px 1fr',
    gap: '4px 12px',
  },
  valKey: {
    fontFamily: mono,
    fontSize: '0.9rem',
    fontWeight: '600',
    color: palette.muted,
  },
  valVal: {
    fontFamily: mono,
    fontSize: '0.96rem',
    fontWeight: '700',
    color: palette.text,
  },

  /* Landmark callout */
  landmarkCallout: {
    padding: '10px 14px',
    backgroundColor: `${palette.orange}12`,
    border: `2px solid ${palette.orange}50`,
    borderRadius: '8px',
  },
  landmarkDisplay: {
    fontFamily: mono,
    fontSize: '1.1rem',
    fontWeight: '700',
    color: palette.orange,
    marginBottom: '4px',
  },
  landmarkNote: {
    fontSize: '0.93rem',
    color: palette.text,
    lineHeight: 1.4,
  },

  /* Breakdown */
  breakdownBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  breakdownLine: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '0.93rem',
    color: palette.text,
    lineHeight: 1.5,
    marginBottom: '4px',
  },
  breakdownStep: {
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
  breakdownMath: {
    fontFamily: mono,
    fontSize: '0.96rem',
    fontWeight: '600',
    color: palette.text,
    padding: '4px 0 8px 28px',
  },

  /* Explanations */
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