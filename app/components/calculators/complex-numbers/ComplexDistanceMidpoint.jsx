
'use client';

import { useState, useRef, useCallback } from 'react';

export default function ComplexDistanceMidpoint() {
  const [z1, setZ1] = useState({ re: -2, im: 1 });
  const [z2, setZ2] = useState({ re: 3, im: 3 });
  const [showCircle, setShowCircle] = useState(true);
  const [dragging, setDragging] = useState(null);
  const [warning, setWarning] = useState(false);
  const warningTimer = useRef(null);
  const svgRef = useRef(null);

  const W = 720, H = 720;
  const margin = 52;
  const range = 5;
  const maxVal = 5;
  const scale = (W - 2 * margin) / (2 * range);
  const ox = W / 2;
  const oy = H / 2;

  const clamp = (val) => Math.max(-maxVal, Math.min(maxVal, Math.round(val * 10) / 10));

  const safeSet = (setter, newRe, newIm) => {
    const needsClamp = Math.abs(newRe) > maxVal || Math.abs(newIm) > maxVal;
    if (needsClamp) {
      setWarning(true);
      if (warningTimer.current) clearTimeout(warningTimer.current);
      warningTimer.current = setTimeout(() => setWarning(false), 2500);
    }
    setter({ re: clamp(newRe), im: clamp(newIm) });
  };

  const toSvg = (r, i) => ({ x: ox + r * scale, y: oy - i * scale });
  const fromSvg = (sx, sy) => ({ re: (sx - ox) / scale, im: (oy - sy) / scale });
  const originSvg = toSvg(0, 0);

  const diff = { re: z1.re - z2.re, im: z1.im - z2.im };
  const distance = Math.sqrt(diff.re * diff.re + diff.im * diff.im);
  const midpoint = { re: (z1.re + z2.re) / 2, im: (z1.im + z2.im) / 2 };

  const z1Svg = toSvg(z1.re, z1.im);
  const z2Svg = toSvg(z2.re, z2.im);
  const midSvg = toSvg(midpoint.re, midpoint.im);

  const handlePointerDown = useCallback((which) => (e) => {
    setDragging(which);
    e.target.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!dragging || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const sx = (e.clientX - rect.left) * (W / rect.width);
    const sy = (e.clientY - rect.top) * (H / rect.height);
    const pt = fromSvg(sx, sy);
    const setter = dragging === 'z1' ? setZ1 : setZ2;
    setter({ re: clamp(pt.re), im: clamp(pt.im) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(null);
  }, []);

  const fmtNum = (v) => {
    if (Math.abs(v) < 0.005) return '0';
    if (Math.abs(v - Math.round(v)) < 0.005) return String(Math.round(v));
    return v.toFixed(2);
  };

  const fmtComplex = (re, im) => {
    const rs = fmtNum(re);
    const ai = Math.abs(im);
    const is_ = fmtNum(ai);
    if (Math.abs(im) < 0.005) return rs;
    if (Math.abs(re) < 0.005) {
      if (is_ === '1') return im > 0 ? 'i' : '\u2212i';
      return im > 0 ? `${is_}i` : `\u2212${is_}i`;
    }
    const sign = im > 0 ? ' + ' : ' \u2212 ';
    const iPart = is_ === '1' ? 'i' : `${is_}i`;
    return `${rs}${sign}${iPart}`;
  };

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
    ticks.push({ x: py.x - 10, y: py.y + 4, label: i > 0 ? `${i}i` : `\u2212${Math.abs(i)}i`, anchor: 'end' });
  }

  const presets = [
    { z1: { re: -2, im: 1 }, z2: { re: 3, im: 3 }, label: '(\u22122+i) & (3+3i)' },
    { z1: { re: 0, im: 0 }, z2: { re: 3, im: 4 }, label: '0 & (3+4i)' },
    { z1: { re: -3, im: -2 }, z2: { re: 3, im: 2 }, label: 'Symmetric' },
    { z1: { re: 1, im: 4 }, z2: { re: 1, im: -2 }, label: 'Vertical' },
    { z1: { re: -4, im: 0 }, z2: { re: 4, im: 0 }, label: 'Horizontal' },
  ];

  const labelAngle = Math.atan2(z1.im - z2.im, z1.re - z2.re) + Math.PI / 2;
  const labelOffset = 16;

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .drag-point { cursor: grab; }
        .drag-point:active { cursor: grabbing; }
        .preset-btn:hover { background: #e0ecff !important; border-color: #304090 !important; }
        input[type=number]:focus { border-color: #304090 !important; outline: none; }
      ` }} />

      <div style={styles.header}>
        <h1 style={styles.title}>Complex Distance &amp; Midpoint</h1>
        <span style={styles.subtitle}>|z&#x2081; &minus; z&#x2082;| is the distance, (z&#x2081; + z&#x2082;)/2 is the midpoint</span>
      </div>

      <div style={styles.mainLayout}>
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
              <rect width={W} height={H} rx="12" fill="#ECEEF0" />

              {gridLinesFixed.map((l, i) => (
                <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#d8e4ec" strokeWidth="0.7" />
              ))}

              <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#8098b0" strokeWidth="1.5" />
              <line x1={ox} y1={margin} x2={ox} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />
              <text x={W - margin + 8} y={oy + 5} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
              <text x={ox + 8} y={margin - 8} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

              {ticks.map((t, i) => (
                <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="12" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
              ))}

              {/* Circle centered at z1 through z2 */}
              {showCircle && distance > 0.1 && (
                <circle
                  cx={z1Svg.x} cy={z1Svg.y}
                  r={distance * scale}
                  fill="none"
                  stroke="#4098d8"
                  strokeWidth="1.5"
                  strokeDasharray="6,4"
                  opacity="0.3"
                />
              )}

              {/* Right triangle legs */}
              {Math.abs(diff.re) > 0.15 && Math.abs(diff.im) > 0.15 && (
                <g>
                  <line x1={z2Svg.x} y1={z2Svg.y} x2={z1Svg.x} y2={z2Svg.y}
                    stroke="#2A7A8C" strokeWidth="2" opacity="0.5" />
                  <line x1={z1Svg.x} y1={z2Svg.y} x2={z1Svg.x} y2={z1Svg.y}
                    stroke="#c04040" strokeWidth="2" opacity="0.5" />

                  {(() => {
                    const sz = 9;
                    const dirX = diff.re > 0 ? -1 : 1;
                    const dirY = diff.im > 0 ? -1 : 1;
                    const cornerX = z1Svg.x;
                    const cornerY = z2Svg.y;
                    return (
                      <polyline
                        points={`${cornerX},${cornerY + dirY * sz} ${cornerX + dirX * sz},${cornerY + dirY * sz} ${cornerX + dirX * sz},${cornerY}`}
                        fill="none" stroke="#8098b0" strokeWidth="1.2"
                      />
                    );
                  })()}

                  <text
                    x={(z2Svg.x + z1Svg.x) / 2}
                    y={z2Svg.y + (diff.im > 0 ? 18 : -10)}
                    textAnchor="middle" fontSize="12" fontWeight="600" fill="#2A7A8C"
                    fontFamily="'JetBrains Mono', monospace"
                  >
                    &Delta;a = {fmtNum(Math.abs(diff.re))}
                  </text>

                  <text
                    x={z1Svg.x + (diff.re > 0 ? 16 : -16)}
                    y={(z2Svg.y + z1Svg.y) / 2 + 4}
                    textAnchor={diff.re > 0 ? 'start' : 'end'}
                    fontSize="12" fontWeight="600" fill="#c04040"
                    fontFamily="'JetBrains Mono', monospace"
                  >
                    &Delta;b = {fmtNum(Math.abs(diff.im))}
                  </text>
                </g>
              )}

              {/* Distance segment */}
              <line x1={z1Svg.x} y1={z1Svg.y} x2={z2Svg.x} y2={z2Svg.y}
                stroke="#B85C2A" strokeWidth="3" />

              {distance > 0.2 && (
                <text
                  x={(z1Svg.x + z2Svg.x) / 2 + labelOffset * Math.cos(labelAngle)}
                  y={(z1Svg.y + z2Svg.y) / 2 + labelOffset * Math.sin(labelAngle)}
                  textAnchor="middle"
                  fontSize="14" fontWeight="700" fill="#B85C2A"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  d = {fmtNum(distance)}
                </text>
              )}

              {/* Midpoint */}
              <circle cx={midSvg.x} cy={midSvg.y} r="7" fill="#6A4E7A" stroke="#fff" strokeWidth="2" />
              <text
                x={midSvg.x + 12} y={midSvg.y - 10}
                fontSize="13" fontWeight="700" fill="#6A4E7A"
                fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}
              >
                M
              </text>

              {/* Vectors from origin */}
              <line x1={originSvg.x} y1={originSvg.y} x2={z1Svg.x} y2={z1Svg.y}
                stroke="#304090" strokeWidth="1.5" opacity="0.35" />
              <line x1={originSvg.x} y1={originSvg.y} x2={z2Svg.x} y2={z2Svg.y}
                stroke="#B85C2A" strokeWidth="1.5" opacity="0.35" />

              <circle className="drag-point" cx={z1Svg.x} cy={z1Svg.y} r="11"
                fill="#304090" stroke="#fff" strokeWidth="2.5"
                onPointerDown={handlePointerDown('z1')} />
              <text x={z1Svg.x + 14} y={z1Svg.y - 12} fontSize="15" fontWeight="700"
                fill="#304090" fontFamily="'DM Sans', sans-serif"
                style={{ pointerEvents: 'none' }}>z&#x2081;</text>

              <circle className="drag-point" cx={z2Svg.x} cy={z2Svg.y} r="11"
                fill="#B85C2A" stroke="#fff" strokeWidth="2.5"
                onPointerDown={handlePointerDown('z2')} />
              <text x={z2Svg.x + 14} y={z2Svg.y - 12} fontSize="15" fontWeight="700"
                fill="#B85C2A" fontFamily="'DM Sans', sans-serif"
                style={{ pointerEvents: 'none' }}>z&#x2082;</text>

              <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />
            </svg>
          </div>

          <div style={styles.controlsBox}>
            <div style={styles.presetRow}>
              {presets.map((p) => (
                <button key={p.label} className="preset-btn" style={styles.presetBtn}
                  onClick={() => { setZ1(p.z1); setZ2(p.z2); }}>
                  {p.label}
                </button>
              ))}
              <button className="preset-btn" style={{ ...styles.presetBtn, ...styles.randBtn }}
                onClick={() => {
                  setZ1({ re: clamp(Math.random() * 8 - 4), im: clamp(Math.random() * 8 - 4) });
                  setZ2({ re: clamp(Math.random() * 8 - 4), im: clamp(Math.random() * 8 - 4) });
                }}>
                Random
              </button>
              <label style={styles.circleToggle}>
                <input type="checkbox" checked={showCircle} onChange={(e) => setShowCircle(e.target.checked)} />
                <span>Show circle</span>
              </label>
            </div>
          </div>
        </div>

        <div style={styles.panel}>
          <div style={styles.inputBox}>
            <div style={{ ...styles.sectionTitle, color: palette.navy }}>z&#x2081;</div>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>Re:</label>
              <input type="number" step="0.1" min="-5" max="5" value={z1.re}
                onChange={(e) => safeSet(setZ1, parseFloat(e.target.value) || 0, z1.im)} style={styles.numInput} />
              <label style={styles.inputLabel}>Im:</label>
              <input type="number" step="0.1" min="-5" max="5" value={z1.im}
                onChange={(e) => safeSet(setZ1, z1.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
              <span style={styles.miniVal}><strong style={{ color: palette.navy }}>{fmtComplex(z1.re, z1.im)}</strong></span>
            </div>
          </div>

          <div style={styles.inputBox}>
            <div style={{ ...styles.sectionTitle, color: palette.orange }}>z&#x2082;</div>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>Re:</label>
              <input type="number" step="0.1" min="-5" max="5" value={z2.re}
                onChange={(e) => safeSet(setZ2, parseFloat(e.target.value) || 0, z2.im)} style={styles.numInput} />
              <label style={styles.inputLabel}>Im:</label>
              <input type="number" step="0.1" min="-5" max="5" value={z2.im}
                onChange={(e) => safeSet(setZ2, z2.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
              <span style={styles.miniVal}><strong style={{ color: palette.orange }}>{fmtComplex(z2.re, z2.im)}</strong></span>
            </div>
          </div>

          {warning && (
            <div style={styles.warningMsg}>Values are limited to &plusmn;5. Input was clamped.</div>
          )}

          <div style={styles.resultBox}>
            <div style={{ ...styles.sectionTitle, color: palette.orange }}>Distance |z&#x2081; &minus; z&#x2082;|</div>
            <div style={styles.resultVal}>{fmtNum(distance)}</div>
          </div>

          <div style={{ ...styles.resultBox, backgroundColor: '#6A4E7A08', borderColor: '#6A4E7A40' }}>
            <div style={{ ...styles.sectionTitle, color: '#6A4E7A' }}>Midpoint (z&#x2081; + z&#x2082;) / 2</div>
            <div style={{ ...styles.resultVal, color: '#6A4E7A' }}>{fmtComplex(midpoint.re, midpoint.im)}</div>
          </div>

          <div style={styles.stepsBox}>
            <div style={styles.sectionTitle}>Distance Step-by-Step</div>
            <div style={styles.stepMath}>
              z&#x2081; &minus; z&#x2082; = ({fmtComplex(z1.re, z1.im)}) &minus; ({fmtComplex(z2.re, z2.im)}) = {fmtComplex(diff.re, diff.im)}
            </div>
            <div style={styles.stepMath}>
              |z&#x2081; &minus; z&#x2082;| = &radic;(&Delta;a&sup2; + &Delta;b&sup2;)
            </div>
            <div style={styles.stepMath}>
              = &radic;({fmtNum(Math.abs(diff.re))}&sup2; + {fmtNum(Math.abs(diff.im))}&sup2;)
            </div>
            <div style={styles.stepMath}>
              = &radic;({fmtNum(diff.re * diff.re)} + {fmtNum(diff.im * diff.im)})
            </div>
            <div style={styles.stepMath}>
              = &radic;({fmtNum(diff.re * diff.re + diff.im * diff.im)})
            </div>
            <div style={{ ...styles.stepMath, fontWeight: '700', color: palette.orange }}>
              = {fmtNum(distance)}
            </div>
          </div>

          <div style={styles.stepsBox}>
            <div style={styles.sectionTitle}>Midpoint Step-by-Step</div>
            <div style={styles.stepMath}>
              M = (z&#x2081; + z&#x2082;) / 2
            </div>
            <div style={styles.stepMath}>
              = (({fmtComplex(z1.re, z1.im)}) + ({fmtComplex(z2.re, z2.im)})) / 2
            </div>
            <div style={styles.stepMath}>
              = ({fmtComplex(z1.re + z2.re, z1.im + z2.im)}) / 2
            </div>
            <div style={{ ...styles.stepMath, fontWeight: '700', color: '#6A4E7A' }}>
              = {fmtComplex(midpoint.re, midpoint.im)}
            </div>
          </div>

          <div style={styles.explainBox}>
            <div style={styles.sectionTitle}>Key Ideas</div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.orange }}></span>
              <span>
                <strong>The distance between two complex numbers</strong> is |z&#x2081; &minus; z&#x2082;| = &radic;((a&#x2081;&minus;a&#x2082;)&sup2; + (b&#x2081;&minus;b&#x2082;)&sup2;). It is the same Euclidean distance formula from coordinate geometry &mdash; the Argand plane is just the xy-plane relabeled.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.teal }}></span>
              <span>
                <strong>The right triangle</strong> shows the horizontal difference &Delta;a = |a&#x2081;&minus;a&#x2082;| and vertical difference &Delta;b = |b&#x2081;&minus;b&#x2082;|. The distance is the hypotenuse. Pythagoras at work.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#6A4E7A' }}></span>
              <span>
                <strong>The midpoint</strong> is (z&#x2081;+z&#x2082;)/2 &mdash; average the real parts, average the imaginary parts. It is the point equidistant from both z&#x2081; and z&#x2082; along the segment connecting them.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
              <span>
                <strong>The dashed circle</strong> is centered at z&#x2081; with radius |z&#x2081;&minus;z&#x2082;|. Every point on this circle is the same distance from z&#x2081; as z&#x2082; is. The equation |z &minus; z&#x2081;| = r describes a circle of radius r centered at z&#x2081;.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
              <span>
                <strong>When z&#x2082; = 0 (the origin),</strong> the distance |z&#x2081; &minus; 0| = |z&#x2081;| is just the modulus. Distance generalizes modulus to any two points, not just from the origin.
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
  orange: '#B85C2A',
  bg: '#F5F4F1',
  white: '#ffffff',
  text: '#1a2440',
  muted: '#5a6480',
  border: '#c8d0e0',
  teal: '#2A7A8C',
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
    fontSize: '1.02rem',
    color: palette.muted,
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
  controlsBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '10px 14px',
  },
  presetRow: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  presetBtn: {
    padding: '4px 10px',
    border: `1px solid ${palette.border}`,
    borderRadius: '5px',
    backgroundColor: palette.white,
    fontFamily: mono,
    fontSize: '0.82rem',
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
  circleToggle: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.88rem',
    fontWeight: '600',
    color: palette.muted,
    cursor: 'pointer',
    marginLeft: '4px',
  },
  inputBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '10px 14px',
  },
  sectionTitle: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: palette.navy,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  inputLabel: {
    fontSize: '0.96rem',
    fontWeight: '600',
    color: palette.muted,
    fontFamily: mono,
  },
  numInput: {
    width: '72px',
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
  miniVal: {
    fontFamily: mono,
    fontSize: '0.96rem',
    marginLeft: '4px',
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
  resultBox: {
    backgroundColor: `${palette.orange}08`,
    border: `2px solid ${palette.orange}40`,
    borderRadius: '8px',
    padding: '10px 14px',
  },
  resultVal: {
    fontFamily: mono,
    fontSize: '1.35rem',
    fontWeight: '700',
    color: palette.orange,
  },
  stepsBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  stepMath: {
    fontFamily: mono,
    fontSize: '0.93rem',
    fontWeight: '600',
    color: palette.text,
    lineHeight: 1.7,
    paddingLeft: '4px',
  },
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