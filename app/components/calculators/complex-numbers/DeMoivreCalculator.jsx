'use client';

import { useState, useRef, useCallback } from 'react';

export default function DeMoivreCalculator() {
  const [re, setRe] = useState(1);
  const [im, setIm] = useState(1);
  const [n, setN] = useState(3);
  const [dragging, setDragging] = useState(false);
  const [warning, setWarning] = useState(false);
  const warningTimer = useRef(null);
  const svgRef = useRef(null);

  const W = 624, H = 624;
  const margin = 48;
  const range = 10;
  const maxVal = 10;
  const scale = (W - 2 * margin) / (2 * range);
  const ox = W / 2;
  const oy = H / 2;

  const clamp = (val) => Math.max(-maxVal, Math.min(maxVal, Math.round(val * 10) / 10));
  const clampN = (val) => Math.max(-20, Math.min(20, Math.round(val)));

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

  // Polar of z
  const mod = Math.sqrt(re * re + im * im);
  const arg = Math.atan2(im, re);

  // Result: z^n in polar
  const modResult = Math.pow(mod, n);
  const argResult = arg * n;
  // Normalize argResult to [-π, π] for display
  const normalizeAngle = (a) => {
    let r = a % (2 * Math.PI);
    if (r > Math.PI) r -= 2 * Math.PI;
    if (r < -Math.PI) r += 2 * Math.PI;
    return r;
  };
  const argResultNorm = normalizeAngle(argResult);

  // Rectangular result
  const resultRe = modResult * Math.cos(argResult);
  const resultIm = modResult * Math.sin(argResult);

  const resultVisible = Math.abs(resultRe) <= range && Math.abs(resultIm) <= range;

  // SVG points
  const zSvg = toSvg(re, im);
  const rSvg = toSvg(resultRe, resultIm);
  const originSvg = toSvg(0, 0);

  // Drag
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
    if (Math.abs(v) < 0.005) return '0';
    if (Math.abs(v - Math.round(v)) < 0.005) return String(Math.round(v));
    return v.toFixed(2);
  };

  const fmtComplex = (r, i) => {
    const rs = fmtNum(r);
    const ai = Math.abs(i);
    const is_ = fmtNum(ai);
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
    const fracs = [
      { val: 0, label: '0' }, { val: Math.PI / 6, label: 'π/6' },
      { val: Math.PI / 4, label: 'π/4' }, { val: Math.PI / 3, label: 'π/3' },
      { val: Math.PI / 2, label: 'π/2' }, { val: 2 * Math.PI / 3, label: '2π/3' },
      { val: 3 * Math.PI / 4, label: '3π/4' }, { val: 5 * Math.PI / 6, label: '5π/6' },
      { val: Math.PI, label: 'π' }, { val: -Math.PI, label: '−π' },
      { val: -5 * Math.PI / 6, label: '−5π/6' }, { val: -3 * Math.PI / 4, label: '−3π/4' },
      { val: -2 * Math.PI / 3, label: '−2π/3' }, { val: -Math.PI / 2, label: '−π/2' },
      { val: -Math.PI / 3, label: '−π/3' }, { val: -Math.PI / 4, label: '−π/4' },
      { val: -Math.PI / 6, label: '−π/6' },
    ];
    for (const f of fracs) {
      if (Math.abs(rad - f.val) < 0.02) return f.label;
    }
    return `${fmtNum(rad / Math.PI)}π`;
  };

  // Arc path
  const makeArc = (arcRadius, startAngle, endAngle) => {
    const diff = endAngle - startAngle;
    if (Math.abs(diff) < 0.01) return '';
    // For angles > 2π, clamp visual arc to full circle
    const clampedEnd = Math.abs(diff) >= 2 * Math.PI
      ? startAngle + Math.sign(diff) * (2 * Math.PI - 0.01)
      : endAngle;
    const rPx = arcRadius * scale;
    const sx = originSvg.x + rPx * Math.cos(startAngle);
    const sy = originSvg.y - rPx * Math.sin(startAngle);
    const ex = originSvg.x + rPx * Math.cos(clampedEnd);
    const ey = originSvg.y - rPx * Math.sin(clampedEnd);
    const absDiff = Math.abs(clampedEnd - startAngle);
    const largeArc = absDiff > Math.PI ? 1 : 0;
    const sweepFlag = (clampedEnd - startAngle) > 0 ? 0 : 1;
    return `M ${sx},${sy} A ${rPx},${rPx} 0 ${largeArc},${sweepFlag} ${ex},${ey}`;
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
    if (i === 0 || i % 2 !== 0) continue;
    const px = toSvg(i, 0);
    ticks.push({ x: px.x, y: px.y + 16, label: String(i), anchor: 'middle' });
    const py = toSvg(0, i);
    ticks.push({ x: py.x - 10, y: py.y + 4, label: i > 0 ? `${i}i` : `−${Math.abs(i)}i`, anchor: 'end' });
  }

  // Intermediate powers for spiral trail
  const trail = [];
  if (mod > 0.01 && Math.abs(n) >= 2) {
    const steps = n > 0 ? n : -n;
    for (let k = 1; k < steps; k++) {
      const kActual = n > 0 ? k : -k;
      const trailMod = Math.pow(mod, kActual);
      const trailArg = arg * kActual;
      const trailRe = trailMod * Math.cos(trailArg);
      const trailIm = trailMod * Math.sin(trailArg);
      if (Math.abs(trailRe) <= range && Math.abs(trailIm) <= range) {
        trail.push({ re: trailRe, im: trailIm, k: kActual });
      }
    }
  }

  // Presets
  const presets = [
    { re: 1, im: 1, n: 2, label: '(1+i)²' },
    { re: 1, im: 1, n: 4, label: '(1+i)⁴' },
    { re: 0, im: 1, n: 3, label: 'i³' },
    { re: 1, im: 1, n: 8, label: '(1+i)⁸' },
    { re: 3, im: 4, n: -1, label: '(3+4i)⁻¹' },
    { re: 2, im: 0, n: 10, label: '2¹⁰' },
    { re: 0.5, im: 0.5, n: 6, label: '(0.5+0.5i)⁶' },
  ];

  // Superscript helper for power display
  const supDigits = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
  const toSup = (num) => String(num).split('').map(c => supDigits[c] || c).join('');

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .drag-point { cursor: grab; }
        .drag-point:active { cursor: grabbing; }
        .preset-btn:hover { background: #e0ecff !important; border-color: #304090 !important; }
        input[type=number]:focus { border-color: #304090 !important; outline: none; }
        input[type=range] { accent-color: #304090; }
      ` }} />

      <div style={styles.header}>
        <h1 style={styles.title}>De Moivre's Theorem</h1>
        <span style={styles.subtitle}>(r · e<sup>iθ</sup>)<sup>n</sup> = r<sup>n</sup> · e<sup>inθ</sup></span>
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

              {/* Modulus circles for z and result */}
              {mod > 0.2 && (
                <circle cx={originSvg.x} cy={originSvg.y} r={mod * scale} fill="none" stroke="#304090" strokeWidth="1" strokeDasharray="4,3" opacity="0.3" />
              )}
              {modResult > 0.2 && modResult <= range && (
                <circle cx={originSvg.x} cy={originSvg.y} r={modResult * scale} fill="none" stroke="#1a8060" strokeWidth="1" strokeDasharray="4,3" opacity="0.3" />
              )}

              {/* Angle arc for z */}
              {mod > 0.3 && Math.abs(arg) > 0.05 && (
                <path d={makeArc(0.7, 0, arg)} fill="none" stroke="#304090" strokeWidth="2" opacity="0.5" />
              )}
              {/* Angle arc for result */}
              {modResult > 0.1 && Math.abs(argResult) > 0.05 && (
                <path d={makeArc(1.2, 0, argResultNorm)} fill="none" stroke="#1a8060" strokeWidth="2.5" opacity="0.6" />
              )}

              {/* Arc labels */}
              {mod > 0.5 && Math.abs(arg) > 0.15 && (() => {
                const mid = arg / 2;
                const lp = toSvg(0.9 * Math.cos(mid), 0.9 * Math.sin(mid));
                return <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="12" fontWeight="600" fill="#304090" fontFamily="'JetBrains Mono', monospace">θ</text>;
              })()}
              {modResult > 0.1 && Math.abs(argResultNorm) > 0.15 && (() => {
                const mid = argResultNorm / 2;
                const lp = toSvg(1.5 * Math.cos(mid), 1.5 * Math.sin(mid));
                return <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a8060" fontFamily="'JetBrains Mono', monospace">nθ</text>;
              })()}

              {/* Trail: intermediate powers as dots */}
              {trail.map((t, i) => {
                const tp = toSvg(t.re, t.im);
                return (
                  <g key={i}>
                    <circle cx={tp.x} cy={tp.y} r="4" fill="#9060c0" opacity="0.5" />
                    <text x={tp.x + 8} y={tp.y - 6} fontSize="10" fontWeight="600" fill="#9060c0" opacity="0.7" fontFamily="'JetBrains Mono', monospace">
                      z{toSup(t.k)}
                    </text>
                  </g>
                );
              })}

              {/* Dashed line connecting trail */}
              {trail.length > 0 && (() => {
                const allPts = [{ re, im }, ...trail, ...(resultVisible ? [{ re: resultRe, im: resultIm }] : [])];
                const pts = allPts.map(p => { const s = toSvg(p.re, p.im); return `${s.x},${s.y}`; }).join(' ');
                return <polyline points={pts} fill="none" stroke="#9060c0" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />;
              })()}

              {/* z vector */}
              <line x1={originSvg.x} y1={originSvg.y} x2={zSvg.x} y2={zSvg.y} stroke="#304090" strokeWidth="2.5" />

              {/* Result vector */}
              {modResult > 0.1 && (() => {
                if (resultVisible) {
                  return <line x1={originSvg.x} y1={originSvg.y} x2={rSvg.x} y2={rSvg.y} stroke="#1a8060" strokeWidth="3" />;
                } else {
                  // Ray to edge
                  const edgeDist = range - 0.3;
                  const cosA = Math.cos(argResultNorm);
                  const sinA = Math.sin(argResultNorm);
                  let t = edgeDist * 100;
                  if (Math.abs(cosA) > 0.001) t = Math.min(t, edgeDist / Math.abs(cosA));
                  if (Math.abs(sinA) > 0.001) t = Math.min(t, edgeDist / Math.abs(sinA));
                  const edgeSvg = toSvg(t * cosA, t * sinA);
                  const aLen = 12, aAngle = 0.35;
                  const bDx = originSvg.x - edgeSvg.x, bDy = originSvg.y - edgeSvg.y;
                  const bMag = Math.sqrt(bDx * bDx + bDy * bDy);
                  const ux = bDx / bMag, uy = bDy / bMag;
                  const lx = edgeSvg.x + aLen * (ux * Math.cos(aAngle) - uy * Math.sin(aAngle));
                  const ly = edgeSvg.y + aLen * (uy * Math.cos(aAngle) + ux * Math.sin(aAngle));
                  const rx = edgeSvg.x + aLen * (ux * Math.cos(-aAngle) - uy * Math.sin(-aAngle));
                  const ry = edgeSvg.y + aLen * (uy * Math.cos(-aAngle) + ux * Math.sin(-aAngle));
                  return (
                    <g>
                      <line x1={originSvg.x} y1={originSvg.y} x2={edgeSvg.x} y2={edgeSvg.y} stroke="#1a8060" strokeWidth="3" strokeDasharray="8,4" />
                      <polygon points={`${edgeSvg.x},${edgeSvg.y} ${lx},${ly} ${rx},${ry}`} fill="#1a8060" />
                      <text x={edgeSvg.x + (cosA >= 0 ? -46 : 8)} y={edgeSvg.y + (sinA >= 0 ? -10 : 18)} fontSize="12" fontWeight="700" fill="#1a8060" fontFamily="'JetBrains Mono', monospace">
                        z{toSup(n)} →
                      </text>
                    </g>
                  );
                }
              })()}

              {/* Result point */}
              {resultVisible && modResult > 0.1 && (
                <>
                  <circle cx={rSvg.x} cy={rSvg.y} r="9" fill="#1a8060" stroke="#fff" strokeWidth="2" />
                  <text x={rSvg.x + 14} y={rSvg.y - 12} fontSize="14" fontWeight="700" fill="#1a8060" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
                    z{toSup(n)}
                  </text>
                </>
              )}

              {/* z point (draggable) */}
              <circle className="drag-point" cx={zSvg.x} cy={zSvg.y} r="11" fill="#304090" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown} />
              <text x={zSvg.x + 14} y={zSvg.y - 12} fontSize="15" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z</text>

              <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />

              {/* Zoom inset for tiny results */}
              {modResult > 0.01 && modResult < 1.0 && resultVisible && (() => {
                const insetSize = 160;
                const insetX = W - margin - insetSize - 4;
                const insetY = margin + 4;
                const insetRange = Math.max(modResult * 1.8, 0.15);
                const insetScale_ = (insetSize - 20) / (2 * insetRange);
                const insetCx = insetX + insetSize / 2;
                const insetCy = insetY + insetSize / 2;
                const iqx = insetCx + resultRe * insetScale_;
                const iqy = insetCy - resultIm * insetScale_;
                return (
                  <g>
                    <rect x={insetX} y={insetY} width={insetSize} height={insetSize} rx="8" fill="#fff" stroke="#304090" strokeWidth="2" opacity="0.95" />
                    <text x={insetX + 8} y={insetY + 16} fontSize="11" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif">Zoom</text>
                    <clipPath id="insetClipDM">
                      <rect x={insetX + 1} y={insetY + 1} width={insetSize - 2} height={insetSize - 2} rx="7" />
                    </clipPath>
                    <g clipPath="url(#insetClipDM)">
                      <line x1={insetX} y1={insetCy} x2={insetX + insetSize} y2={insetCy} stroke="#8098b0" strokeWidth="1" />
                      <line x1={insetCx} y1={insetY} x2={insetCx} y2={insetY + insetSize} stroke="#8098b0" strokeWidth="1" />
                      <line x1={insetCx} y1={insetCy} x2={iqx} y2={iqy} stroke="#1a8060" strokeWidth="2.5" />
                      <circle cx={iqx} cy={iqy} r="6" fill="#1a8060" stroke="#fff" strokeWidth="1.5" />
                      <text x={iqx + 10} y={iqy - 8} fontSize="12" fontWeight="700" fill="#1a8060" fontFamily="'DM Sans', sans-serif">z{toSup(n)}</text>
                      <circle cx={insetCx} cy={insetCy} r="2.5" fill="#8098b0" />
                      <text x={insetX + insetSize / 2} y={insetY + insetSize - 8} textAnchor="middle" fontSize="10" fontWeight="600" fill="#5a6480" fontFamily="'JetBrains Mono', monospace">
                        {fmtComplex(resultRe, resultIm)}
                      </text>
                    </g>
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Controls */}
          <div style={styles.controlsBox}>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>Re:</label>
              <input type="number" step="0.1" min="-10" max="10" value={re}
                onChange={(e) => safeSet(parseFloat(e.target.value) || 0, im)} style={styles.numInput} />
              <label style={styles.inputLabel}>Im:</label>
              <input type="number" step="0.1" min="-10" max="10" value={im}
                onChange={(e) => safeSet(re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
              <label style={styles.inputLabel}>n =</label>
              <input type="number" step="1" min="-20" max="20" value={n}
                onChange={(e) => setN(clampN(parseInt(e.target.value) || 0))} style={{ ...styles.numInput, width: '60px' }} />
            </div>
            <div style={styles.sliderRow}>
              <label style={styles.sliderLabel}>n</label>
              <input type="range" min="-10" max="10" step="1" value={n}
                onChange={(e) => setN(parseInt(e.target.value))} style={styles.slider} />
              <span style={styles.sliderVal}>{n}</span>
            </div>
            {warning && (
              <div style={styles.warningMsg}>Values are limited to ±10. Input was clamped.</div>
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
                  setRe(clamp(Math.random() * 6 - 3));
                  setIm(clamp(Math.random() * 6 - 3));
                  setN(Math.floor(Math.random() * 9) + 2);
                }}>
                Random
              </button>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={styles.panel}>
          {/* Input summary */}
          <div style={styles.summaryBox}>
            <div style={styles.sectionTitle}>Input</div>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>z</span>
              <span style={styles.summaryVal}><strong style={{ color: palette.navy }}>{fmtComplex(re, im)}</strong></span>
            </div>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>|z|</span>
              <span style={styles.summaryVal}>{fmtNum(mod)}</span>
            </div>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>θ</span>
              <span style={styles.summaryVal}>{fmtDeg(arg)} = {fmtAngleRad(arg)} rad</span>
            </div>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>n</span>
              <span style={styles.summaryVal}><strong>{n}</strong></span>
            </div>
          </div>

          {/* Result */}
          <div style={styles.resultBox}>
            <div style={{ ...styles.sectionTitle, color: palette.green }}>z{toSup(n)} — Result</div>
            <div style={styles.resultMain}>
              <span style={styles.resultVal}>{fmtComplex(resultRe, resultIm)}</span>
            </div>
            <div style={styles.resultPolar}>
              |z{toSup(n)}| = {fmtNum(modResult)}, θ = {fmtDeg(argResultNorm)} = {fmtAngleRad(argResultNorm)} rad
            </div>
            {!resultVisible && modResult > 0.1 && (
              <div style={styles.offscreen}>Result extends beyond ±10 — shown as a ray on the diagram</div>
            )}
          </div>

          {/* Step-by-step */}
          <div style={styles.stepsBox}>
            <div style={styles.sectionTitle}>Step-by-Step (De Moivre's Theorem)</div>
            <div style={styles.stepLine}>
              <span style={styles.stepNum}>1</span>
              <span>Convert to polar form:</span>
            </div>
            <div style={styles.stepMath}>
              z = {fmtNum(mod)} · e<sup>i·{fmtAngleRad(arg)}</sup>
            </div>
            <div style={styles.stepLine}>
              <span style={styles.stepNum}>2</span>
              <span>Apply De Moivre's Theorem: (r · e<sup>iθ</sup>)<sup>n</sup> = r<sup>n</sup> · e<sup>inθ</sup></span>
            </div>
            <div style={styles.stepLine}>
              <span style={styles.stepNum}>3</span>
              <span>Raise the modulus to the n-th power:</span>
            </div>
            <div style={styles.stepMath}>
              |z|{toSup(n)} = {fmtNum(mod)}{toSup(n)} = <strong style={{ color: palette.green }}>{fmtNum(modResult)}</strong>
            </div>
            <div style={styles.stepLine}>
              <span style={styles.stepNum}>4</span>
              <span>Multiply the angle by n:</span>
            </div>
            <div style={styles.stepMath}>
              nθ = {n} × {fmtDeg(arg)} = <strong style={{ color: palette.green }}>{fmtDeg(argResult)}</strong>
              {Math.abs(argResult) > Math.PI && (
                <span style={{ color: palette.muted, fontSize: '0.85rem' }}> (normalized: {fmtDeg(argResultNorm)})</span>
              )}
            </div>
            <div style={styles.stepLine}>
              <span style={styles.stepNum}>5</span>
              <span>Convert back to rectangular:</span>
            </div>
            <div style={styles.stepMath}>
              z{toSup(n)} = {fmtNum(modResult)}(cos({fmtDeg(argResultNorm)}) + i sin({fmtDeg(argResultNorm)}))
            </div>
            <div style={styles.stepMath}>
              = {fmtNum(modResult)}({fmtNum(Math.cos(argResult))} + {fmtNum(Math.sin(argResult))}i)
            </div>
            <div style={{ ...styles.stepMath, fontWeight: '700', color: palette.green }}>
              = {fmtComplex(resultRe, resultIm)}
            </div>
          </div>

          {/* Key Ideas */}
          <div style={styles.explainBox}>
            <div style={styles.sectionTitle}>Key Ideas</div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
              <span>
                <strong>De Moivre's Theorem</strong> says (cos θ + i sin θ)<sup>n</sup> = cos(nθ) + i sin(nθ). In exponential form: (r·e<sup>iθ</sup>)<sup>n</sup> = r<sup>n</sup>·e<sup>inθ</sup>. Raising to a power means raising the modulus and multiplying the angle.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#9060c0' }}></span>
              <span>
                <strong>The purple trail</strong> shows intermediate powers z¹, z², z³, … Each step multiplies the modulus by |z| and adds θ to the angle. If |z| &gt; 1 the points spiral outward; if |z| &lt; 1 they spiral inward toward zero.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.green }}></span>
              <span>
                <strong>Negative exponents</strong> give reciprocals: z⁻ⁿ = 1/zⁿ. The modulus shrinks (r⁻ⁿ) and the angle reverses (−nθ). Try "(3+4i)⁻¹" to see how the result is a tiny vector in the opposite angular direction.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.orange }}></span>
              <span>
                <strong>On the unit circle (|z|=1),</strong> powers only rotate — the point stays on the circle. This is why powers of i cycle: i¹, i², i³, i⁴ = i, −1, −i, 1 are four 90° rotations.
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
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: '3px 4px',
    fontFamily: mono,
    fontSize: '0.96rem',
  },
  summaryLabel: {
    fontWeight: '600',
    color: palette.muted,
    minWidth: '40px',
  },
  summaryVal: {
    color: palette.text,
  },

  /* Result */
  resultBox: {
    backgroundColor: `${palette.green}08`,
    border: `2px solid ${palette.green}40`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  resultMain: {
    marginBottom: '4px',
  },
  resultVal: {
    fontFamily: mono,
    fontSize: '1.35rem',
    fontWeight: '700',
    color: palette.green,
  },
  resultPolar: {
    fontFamily: mono,
    fontSize: '0.88rem',
    color: palette.muted,
  },
  offscreen: {
    marginTop: '4px',
    fontSize: '0.85rem',
    color: '#b03030',
    fontWeight: '600',
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
    padding: '2px 0 6px 28px',
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