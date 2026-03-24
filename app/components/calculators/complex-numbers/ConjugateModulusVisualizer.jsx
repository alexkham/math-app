

'use client';

import { useState, useRef, useCallback } from 'react';

export default function ConjugateModulusVisualizer() {
  const [z, setZ] = useState({ re: 3, im: 2 });
  const [dragging, setDragging] = useState(false);
  const [warning, setWarning] = useState(false);
  const warningTimer = useRef(null);
  const svgRef = useRef(null);

  const W = 520, H = 520;
  const margin = 40;
  const range = 10;
  const maxVal = 10;
  const scale = (W - 2 * margin) / (2 * range);
  const ox = W / 2;
  const oy = H / 2;

  const clamp = (val) => Math.max(-maxVal, Math.min(maxVal, Math.round(val * 10) / 10));

  const safeSetZ = (newZ) => {
    const needsClamp = Math.abs(newZ.re) > maxVal || Math.abs(newZ.im) > maxVal;
    if (needsClamp) {
      setWarning(true);
      if (warningTimer.current) clearTimeout(warningTimer.current);
      warningTimer.current = setTimeout(() => setWarning(false), 2500);
    }
    setZ({ re: clamp(newZ.re), im: clamp(newZ.im) });
  };

  const toSvg = (re, im) => ({ x: ox + re * scale, y: oy - im * scale });
  const fromSvg = (sx, sy) => ({
    re: Math.round(((sx - ox) / scale) * 10) / 10,
    im: Math.round(((oy - sy) / scale) * 10) / 10,
  });

  const modulus = Math.sqrt(z.re * z.re + z.im * z.im);
  const modulusSq = z.re * z.re + z.im * z.im;
  const conj = { re: z.re, im: -z.im };

  const zSvg = toSvg(z.re, z.im);
  const conjSvg = toSvg(conj.re, conj.im);
  const originSvg = toSvg(0, 0);
  const reSvg = toSvg(z.re, 0);

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
    setZ({ re: clamp(pt.re), im: clamp(pt.im) });
 // eslint-disable-next-line react-hooks/exhaustive-deps
}, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  const fmtNum = (n) => {
    if (n === 0) return '0';
    if (Number.isInteger(n)) return String(n);
    return n.toFixed(1);
  };

  const fmtComplex = (re, im) => {
    if (im === 0) return fmtNum(re);
    if (re === 0) return im === 1 ? 'i' : im === -1 ? '\u2212i' : `${fmtNum(im)}i`;
    const sign = im > 0 ? ' + ' : ' \u2212 ';
    const absIm = Math.abs(im);
    const imPart = absIm === 1 ? 'i' : `${fmtNum(absIm)}i`;
    return `${fmtNum(re)}${sign}${imPart}`;
  };

  const gridLines = [];
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    const p1v = toSvg(i, -range), p2v = toSvg(i, range);
    gridLines.push({ x1: p1v.x, y1: p1v.y, x2: p2v.x, y2: p2v.y });
    const p1h = toSvg(-range, i), p2h = toSvg(range, i);
    gridLines.push({ x1: p1h.x, y1: p1h.y, x2: p2h.x, y2: p2h.y });
  }

  const ticks = [];
  for (let i = -range; i <= range; i++) {
    if (i === 0 || i % 2 !== 0) continue;
    const px = toSvg(i, 0);
    ticks.push({ x: px.x, y: px.y + 16, label: String(i), anchor: 'middle' });
    const py = toSvg(0, i);
    ticks.push({ x: py.x - 10, y: py.y + 4, label: i > 0 ? `${i}i` : `\u2212${Math.abs(i)}i`, anchor: 'end' });
  }

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .drag-point { cursor: grab; }
        .drag-point:active { cursor: grabbing; }
        .info-row:hover { background: #e8edf6; }
      ` }} />

      <div style={styles.header}>
        <h1 style={styles.title}>Complex Conjugate &amp; Modulus</h1>
        <span style={styles.subtitle}>Drag the point to explore z, z&#x305;, and |z|</span>
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

              {gridLines.map((l, i) => (
                <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#d8e4ec" strokeWidth="0.7" />
              ))}

              <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#8098b0" strokeWidth="1.5" />
              <line x1={ox} y1={margin} x2={ox} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />

              <text x={W - margin + 8} y={oy + 5} fontSize="13" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
              <text x={ox + 8} y={margin - 8} fontSize="13" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

              {ticks.map((t, i) => (
                <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="10" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
              ))}

              {/* Modulus circle */}
              <circle
                cx={originSvg.x} cy={originSvg.y}
                r={modulus * scale}
                fill="none" stroke="#4098d8" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.5"
              />

              {/* Real axis highlight */}
              <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#304090" strokeWidth="2" opacity="0.15" />

              {/* Right triangle legs */}
              <line x1={originSvg.x} y1={originSvg.y} x2={reSvg.x} y2={reSvg.y} stroke="#304090" strokeWidth="1.5" opacity="0.4" />
              <line x1={reSvg.x} y1={reSvg.y} x2={zSvg.x} y2={zSvg.y} stroke="#304090" strokeWidth="1.5" opacity="0.4" />
              <line x1={reSvg.x} y1={reSvg.y} x2={conjSvg.x} y2={conjSvg.y} stroke="#B85C2A" strokeWidth="1.5" opacity="0.4" />

              {/* Vectors */}
              <line x1={originSvg.x} y1={originSvg.y} x2={zSvg.x} y2={zSvg.y} stroke="#304090" strokeWidth="2.5" />
              <line x1={originSvg.x} y1={originSvg.y} x2={conjSvg.x} y2={conjSvg.y} stroke="#B85C2A" strokeWidth="2.5" strokeDasharray="7,4" />

              {/* Symmetry line between z and z̄ */}
              <line x1={zSvg.x} y1={zSvg.y} x2={conjSvg.x} y2={conjSvg.y} stroke="#6A4E7A" strokeWidth="1" strokeDasharray="4,3" opacity="0.6" />

              {/* Modulus label */}
              {modulus > 0.5 && (
                <text
                  x={(originSvg.x + zSvg.x) / 2 - 12}
                  y={(originSvg.y + zSvg.y) / 2 - 8}
                  fontSize="12" fontWeight="600" fill="#304090"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  |z| = {fmtNum(Math.round(modulus * 100) / 100)}
                </text>
              )}

              {/* z point (draggable) */}
              <circle className="drag-point" cx={zSvg.x} cy={zSvg.y} r="10"
                fill="#304090" stroke="#fff" strokeWidth="2.5"
                onPointerDown={handlePointerDown} />
              <text x={zSvg.x + 14} y={zSvg.y - 10} fontSize="14" fontWeight="700"
                fill="#304090" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
                z
              </text>

              {/* z̄ point */}
              <circle cx={conjSvg.x} cy={conjSvg.y} r="8" fill="#B85C2A" stroke="#fff" strokeWidth="2" />
              <text x={conjSvg.x + 14} y={conjSvg.y + 14} fontSize="14" fontWeight="700"
                fill="#B85C2A" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
                z&#x305;
              </text>

              <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />
            </svg>
          </div>

          <div style={styles.presetSection}>
            <div style={styles.presetTitle}>Try these</div>
            <div style={styles.presetRow}>
              {[
                { re: 3, im: 2, label: '3+2i' },
                { re: -1, im: 4, label: '\u22121+4i' },
                { re: 0, im: 3, label: '3i' },
                { re: 4, im: 0, label: '4' },
                { re: -2, im: -3, label: '\u22122\u22123i' },
              ].map((preset) => (
                <button
                  key={preset.label}
                  style={styles.presetBtn}
                  onClick={() => setZ({ re: preset.re, im: preset.im })}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = '#e0ecff'; e.target.style.borderColor = palette.navy; }}
                  onMouseLeave={(e) => { e.target.style.backgroundColor = palette.white; e.target.style.borderColor = palette.border; }}
                >
                  {preset.label}
                </button>
              ))}
              <button
                style={{ ...styles.presetBtn, ...styles.randBtn }}
                onClick={() => {
                  setZ({ re: clamp(Math.random() * 20 - 10), im: clamp(Math.random() * 20 - 10) });
                }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#e0ecff'; e.target.style.borderColor = palette.navy; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = palette.white; e.target.style.borderColor = palette.border; }}
              >
                Random
              </button>
            </div>
          </div>
        </div>

        <div style={styles.panel}>
          <div style={styles.inputSection}>
            <div style={styles.inputTitle}>Set z manually</div>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>Re:</label>
              <input type="number" step="0.1" min="-10" max="10" value={z.re}
                onChange={(e) => safeSetZ({ ...z, re: parseFloat(e.target.value) || 0 })}
                style={styles.numInput} />
              <label style={styles.inputLabel}>Im:</label>
              <input type="number" step="0.1" min="-10" max="10" value={z.im}
                onChange={(e) => safeSetZ({ ...z, im: parseFloat(e.target.value) || 0 })}
                style={styles.numInput} />
              <span style={styles.limitHint}>limit: &plusmn;10</span>
            </div>
            {warning && (
              <div style={styles.warningMsg}>Values greater than 10 (or less than &minus;10) are not allowed. Input was clamped to &plusmn;10.</div>
            )}
          </div>

          <div style={styles.valuesSection}>
            <div style={styles.valuesTitle}>Values</div>

            <div className="info-row" style={styles.infoRow}>
              <span style={styles.infoKey}>z</span>
              <span style={{ ...styles.infoVal, color: palette.navy }}>{fmtComplex(z.re, z.im)}</span>
            </div>
            <div className="info-row" style={styles.infoRow}>
              <span style={styles.infoKey}>z&#x305;</span>
              <span style={{ ...styles.infoVal, color: palette.orange }}>{fmtComplex(conj.re, conj.im)}</span>
            </div>
            <div className="info-row" style={styles.infoRow}>
              <span style={styles.infoKey}>|z|</span>
              <span style={{ ...styles.infoVal, color: palette.blue }}>{fmtNum(Math.round(modulus * 1000) / 1000)}</span>
            </div>
            <div className="info-row" style={styles.infoRow}>
              <span style={styles.infoKey}>|z|&sup2;</span>
              <span style={{ ...styles.infoVal, color: palette.blue }}>{fmtNum(Math.round(modulusSq * 100) / 100)}</span>
            </div>
            <div className="info-row" style={styles.infoRow}>
              <span style={styles.infoKey}>z &middot; z&#x305;</span>
              <span style={{ ...styles.infoVal, color: palette.teal }}>
                ({fmtComplex(z.re, z.im)})({fmtComplex(conj.re, conj.im)})
              </span>
            </div>

            <div style={styles.proofBox}>
              <div style={styles.proofLine}>
                z &middot; z&#x305; = {fmtNum(z.re)}&sup2; + {fmtNum(Math.abs(z.im))}&sup2; = {fmtNum(Math.round((z.re * z.re) * 100) / 100)} + {fmtNum(Math.round((z.im * z.im) * 100) / 100)} = <strong style={{ color: palette.teal }}>{fmtNum(Math.round(modulusSq * 100) / 100)}</strong>
              </div>
              <div style={styles.proofLine}>
                |z|&sup2; = ({fmtNum(Math.round(modulus * 1000) / 1000)})&sup2; = <strong style={{ color: palette.teal }}>{fmtNum(Math.round(modulusSq * 100) / 100)}</strong>
              </div>
              <div style={styles.proofConclusion}>
                z &middot; z&#x305; = |z|&sup2; &#x2713;
              </div>
            </div>
          </div>

          <div style={styles.explainSection}>
            <div style={styles.explainTitle}>Key Ideas</div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
              <span>The <strong>conjugate</strong> z&#x305; reflects z across the real axis &mdash; same real part, negated imaginary part.</span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
              <span>The <strong>modulus</strong> |z| is the distance from the origin. Both z and z&#x305; share the same modulus.</span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.teal }}></span>
              <span>Multiplying z &middot; z&#x305; always gives a <strong>real number</strong> equal to |z|&sup2;. This is why we multiply by the conjugate to rationalize complex denominators.</span>
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
    maxWidth: '1060px',
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
    gridTemplateColumns: '520px 1fr',
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
  inputSection: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  inputTitle: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: palette.navy,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
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
    width: '80px',
    fontSize: '1.12rem',
    fontFamily: mono,
    fontWeight: '600',
    padding: '5px 8px',
    border: `2px solid ${palette.border}`,
    borderRadius: '5px',
    color: palette.navy,
    backgroundColor: palette.bg,
    outline: 'none',
  },
  limitHint: {
    fontSize: '0.82rem',
    color: palette.muted,
    fontFamily: mono,
    marginLeft: '4px',
  },
  warningMsg: {
    marginTop: '6px',
    padding: '6px 10px',
    fontSize: '0.88rem',
    fontWeight: '600',
    color: '#b03030',
    backgroundColor: '#fef2f2',
    border: '1px solid #f0c0c0',
    borderRadius: '5px',
  },
  valuesSection: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  valuesTitle: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: palette.navy,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: '5px 8px',
    borderRadius: '4px',
    transition: 'background 0.12s',
  },
  infoKey: {
    fontSize: '0.96rem',
    fontWeight: '600',
    color: palette.muted,
    fontFamily: mono,
    minWidth: '50px',
  },
  infoVal: {
    fontSize: '1.04rem',
    fontWeight: '700',
    fontFamily: mono,
    textAlign: 'right',
  },
  proofBox: {
    marginTop: '10px',
    padding: '10px 12px',
    backgroundColor: `${palette.teal}08`,
    border: `1px solid ${palette.teal}30`,
    borderRadius: '6px',
  },
  proofLine: {
    fontSize: '0.9rem',
    fontFamily: mono,
    color: palette.text,
    lineHeight: 1.6,
  },
  proofConclusion: {
    fontSize: '1.04rem',
    fontFamily: mono,
    fontWeight: '700',
    color: palette.teal,
    marginTop: '4px',
    paddingTop: '6px',
    borderTop: `1px solid ${palette.teal}30`,
  },
  explainSection: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  explainTitle: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: palette.navy,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  explainItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '0.93rem',
    color: palette.text,
    lineHeight: 1.5,
    marginBottom: '8px',
  },
  dot: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    marginTop: '6px',
    flexShrink: 0,
  },
  presetSection: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
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
  randBtn: {
    color: palette.navy,
    borderColor: palette.navy,
    fontFamily: sans,
    fontWeight: '700',
  },
};