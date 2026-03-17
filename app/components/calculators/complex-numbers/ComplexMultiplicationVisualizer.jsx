'use client';

import { useState, useRef, useCallback } from 'react';

export default function ComplexMultiplicationVisualizer() {
  const [z1, setZ1] = useState({ re: 2, im: 1 });
  const [z2, setZ2] = useState({ re: -1, im: 2 });
  const [warning, setWarning] = useState(false);
  const warningTimer = useRef(null);
  const svgRef = useRef(null);
  const [dragging, setDragging] = useState(null); // 'z1' | 'z2' | null

  const W = 624, H = 624;
  const margin = 48;
  const range = 10;
  const maxVal = 10;
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

  // Product
  const product = {
    re: z1.re * z2.re - z1.im * z2.im,
    im: z1.re * z2.im + z1.im * z2.re,
  };

  // Polar values
  const mod1 = Math.sqrt(z1.re * z1.re + z1.im * z1.im);
  const mod2 = Math.sqrt(z2.re * z2.re + z2.im * z2.im);
  const modP = Math.sqrt(product.re * product.re + product.im * product.im);
  const arg1 = Math.atan2(z1.im, z1.re);
  const arg2 = Math.atan2(z2.im, z2.re);
  const argP = Math.atan2(product.im, product.re);

  // SVG points
  const z1Svg = toSvg(z1.re, z1.im);
  const z2Svg = toSvg(z2.re, z2.im);
  const pSvg = toSvg(product.re, product.im);
  const originSvg = toSvg(0, 0);

  // Check if product is within viewable range
  const productVisible = Math.abs(product.re) <= range && Math.abs(product.im) <= range;

  // Drag handlers
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
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(null);
  }, []);

  // Formatting
  const fmtNum = (n) => {
    if (Math.abs(n) < 0.005) return '0';
    if (Math.abs(n - Math.round(n)) < 0.005) return String(Math.round(n));
    return n.toFixed(2);
  };

  const fmtComplex = (re, im) => {
    const rs = fmtNum(re);
    const ai = Math.abs(im);
    const is_ = fmtNum(ai);
    if (Math.abs(im) < 0.005) return rs;
    if (Math.abs(re) < 0.005) {
      if (is_ === '1') return im > 0 ? 'i' : '−i';
      return im > 0 ? `${is_}i` : `−${is_}i`;
    }
    const sign = im > 0 ? ' + ' : ' − ';
    const iPart = is_ === '1' ? 'i' : `${is_}i`;
    return `${rs}${sign}${iPart}`;
  };

  const fmtDeg = (rad) => `${fmtNum(rad * 180 / Math.PI)}°`;

  // Arc path helper
  const makeArc = (arcRadius, startAngle, endAngle) => {
    if (Math.abs(endAngle - startAngle) < 0.01) return '';
    const rPx = arcRadius * scale;
    const sx = originSvg.x + rPx * Math.cos(startAngle);
    const sy = originSvg.y - rPx * Math.sin(startAngle);
    const ex = originSvg.x + rPx * Math.cos(endAngle);
    const ey = originSvg.y - rPx * Math.sin(endAngle);
    const diff = endAngle - startAngle;
    const largeArc = Math.abs(diff) > Math.PI ? 1 : 0;
    const sweepFlag = diff > 0 ? 0 : 1;
    return `M ${sx},${sy} A ${rPx},${rPx} 0 ${largeArc},${sweepFlag} ${ex},${ey}`;
  };

  // Grid
  const gridLines = [];
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    gridLines.push({ ...toSvg(i, -range), ...{ x2: toSvg(i, range).x, y2: toSvg(i, range).y } });
    gridLines.push({ ...toSvg(-range, i), ...{ x2: toSvg(range, i).x, y2: toSvg(range, i).y } });
  }
  // fix grid line format
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

  // Presets
  const presets = [
    { z1: { re: 2, im: 1 }, z2: { re: -1, im: 2 }, label: '(2+i)(−1+2i)' },
    { z1: { re: 1, im: 1 }, z2: { re: 1, im: -1 }, label: '(1+i)(1−i)' },
    { z1: { re: 3, im: 0 }, z2: { re: 0, im: 2 }, label: '3 × 2i' },
    { z1: { re: 0, im: 1 }, z2: { re: 0, im: 1 }, label: 'i × i' },
    { z1: { re: 2, im: 0 }, z2: { re: -3, im: 4 }, label: '2(−3+4i)' },
  ];

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
        <h1 style={styles.title}>Complex Multiplication</h1>
        <span style={styles.subtitle}>Multiply magnitudes, add angles</span>
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

              {/* Grid */}
              {gridLinesFixed.map((l, i) => (
                <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#d8e4ec" strokeWidth="0.7" />
              ))}

              {/* Axes */}
              <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#8098b0" strokeWidth="1.5" />
              <line x1={ox} y1={margin} x2={ox} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />
              <text x={W - margin + 8} y={oy + 5} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
              <text x={ox + 8} y={margin - 8} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

              {/* Ticks */}
              {ticks.map((t, i) => (
                <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="11" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
              ))}

              {/* Angle arcs */}
              {/* θ₁ arc */}
              {mod1 > 0.3 && Math.abs(arg1) > 0.05 && (
                <path d={makeArc(0.8, 0, arg1)} fill="none" stroke="#304090" strokeWidth="2" opacity="0.6" />
              )}
              {/* θ₂ arc */}
              {mod2 > 0.3 && Math.abs(arg2) > 0.05 && (
                <path d={makeArc(1.1, 0, arg2)} fill="none" stroke="#f89838" strokeWidth="2" opacity="0.6" />
              )}
              {/* θ₁+θ₂ arc (product angle) — always show if modP > 0 */}
              {modP > 0.3 && Math.abs(argP) > 0.05 && (
                <path d={makeArc(1.4, 0, argP)} fill="none" stroke="#1a8060" strokeWidth="2.5" opacity="0.7" />
              )}

              {/* Arc labels */}
              {mod1 > 0.5 && Math.abs(arg1) > 0.15 && (() => {
                const mid = arg1 / 2;
                const lp = toSvg(1.0 * Math.cos(mid), 1.0 * Math.sin(mid));
                return <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="12" fontWeight="600" fill="#304090" fontFamily="'JetBrains Mono', monospace">θ₁</text>;
              })()}
              {mod2 > 0.5 && Math.abs(arg2) > 0.15 && (() => {
                const mid = arg2 / 2;
                const lp = toSvg(1.35 * Math.cos(mid), 1.35 * Math.sin(mid));
                return <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="12" fontWeight="600" fill="#f89838" fontFamily="'JetBrains Mono', monospace">θ₂</text>;
              })()}
              {modP > 0.5 && Math.abs(argP) > 0.15 && (() => {
                const mid = argP / 2;
                const lp = toSvg(1.7 * Math.cos(mid), 1.7 * Math.sin(mid));
                return <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a8060" fontFamily="'JetBrains Mono', monospace">θ₁+θ₂</text>;
              })()}

              {/* Vectors */}
              {/* z1 vector */}
              <line x1={originSvg.x} y1={originSvg.y} x2={z1Svg.x} y2={z1Svg.y} stroke="#304090" strokeWidth="2.5" />
              {/* z2 vector */}
              <line x1={originSvg.x} y1={originSvg.y} x2={z2Svg.x} y2={z2Svg.y} stroke="#f89838" strokeWidth="2.5" />

              {/* Product vector — ray to edge if off-screen */}
              {modP > 0.1 && (() => {
                if (productVisible) {
                  // Normal: draw full vector + point
                  return (
                    <g>
                      <line x1={originSvg.x} y1={originSvg.y} x2={pSvg.x} y2={pSvg.y} stroke="#1a8060" strokeWidth="3" />
                      <circle cx={pSvg.x} cy={pSvg.y} r="9" fill="#1a8060" stroke="#fff" strokeWidth="2" />
                      <text x={pSvg.x + 14} y={pSvg.y - 12} fontSize="15" fontWeight="700" fill="#1a8060" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
                        z₁z₂
                      </text>
                    </g>
                  );
                } else {
                  // Off-screen: draw ray clamped to edge with arrow
                  const edgeDist = range - 0.3;
                  const cosA = Math.cos(argP);
                  const sinA = Math.sin(argP);
                  // Find how far we can go in the product direction before hitting ±edgeDist
                  let t = edgeDist * 100; // large default
                  if (Math.abs(cosA) > 0.001) t = Math.min(t, edgeDist / Math.abs(cosA));
                  if (Math.abs(sinA) > 0.001) t = Math.min(t, edgeDist / Math.abs(sinA));
                  const edgeRe = t * cosA;
                  const edgeIm = t * sinA;
                  const edgeSvg = toSvg(edgeRe, edgeIm);
                  // Arrow head points
                  const aLen = 12;
                  const aAngle = 0.35;
                  const baseDx = originSvg.x - edgeSvg.x;
                  const baseDy = originSvg.y - edgeSvg.y;
                  const baseMag = Math.sqrt(baseDx * baseDx + baseDy * baseDy);
                  const ux = baseDx / baseMag;
                  const uy = baseDy / baseMag;
                  const lx = edgeSvg.x + aLen * (ux * Math.cos(aAngle) - uy * Math.sin(aAngle));
                  const ly = edgeSvg.y + aLen * (uy * Math.cos(aAngle) + ux * Math.sin(aAngle));
                  const rx = edgeSvg.x + aLen * (ux * Math.cos(-aAngle) - uy * Math.sin(-aAngle));
                  const ry = edgeSvg.y + aLen * (uy * Math.cos(-aAngle) + ux * Math.sin(-aAngle));
                  return (
                    <g>
                      <line x1={originSvg.x} y1={originSvg.y} x2={edgeSvg.x} y2={edgeSvg.y} stroke="#1a8060" strokeWidth="3" strokeDasharray="8,4" />
                      <polygon points={`${edgeSvg.x},${edgeSvg.y} ${lx},${ly} ${rx},${ry}`} fill="#1a8060" />
                      <text x={edgeSvg.x + (cosA >= 0 ? -50 : 10)} y={edgeSvg.y + (sinA >= 0 ? -10 : 18)} fontSize="13" fontWeight="700" fill="#1a8060" fontFamily="'JetBrains Mono', monospace" style={{ pointerEvents: 'none' }}>
                        z₁z₂ →
                      </text>
                    </g>
                  );
                }
              })()}

              {/* z1 point (draggable) */}
              <circle
                className="drag-point"
                cx={z1Svg.x}
                cy={z1Svg.y}
                r="11"
                fill="#304090"
                stroke="#fff"
                strokeWidth="2.5"
                onPointerDown={handlePointerDown('z1')}
              />
              <text x={z1Svg.x + 14} y={z1Svg.y - 12} fontSize="15" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
                z₁
              </text>

              {/* z2 point (draggable) */}
              <circle
                className="drag-point"
                cx={z2Svg.x}
                cy={z2Svg.y}
                r="11"
                fill="#f89838"
                stroke="#fff"
                strokeWidth="2.5"
                onPointerDown={handlePointerDown('z2')}
              />
              <text x={z2Svg.x + 14} y={z2Svg.y - 12} fontSize="15" fontWeight="700" fill="#f89838" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
                z₂
              </text>

              {/* Origin */}
              <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />

              {/* Zoom inset when product is tiny */}
              {modP > 0.01 && modP < 1.0 && productVisible && (() => {
                const insetSize = 160;
                const insetX = W - margin - insetSize - 4;
                const insetY = margin + 4;
                const insetRange = Math.max(modP * 1.8, 0.15);
                const insetScale = (insetSize - 20) / (2 * insetRange);
                const insetCx = insetX + insetSize / 2;
                const insetCy = insetY + insetSize / 2;
                const ipx = insetCx + product.re * insetScale;
                const ipy = insetCy - product.im * insetScale;

                return (
                  <g>
                    <rect x={insetX} y={insetY} width={insetSize} height={insetSize} rx="8" fill="#fff" stroke="#304090" strokeWidth="2" opacity="0.95" />
                    <text x={insetX + 8} y={insetY + 16} fontSize="11" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif">
                      Zoom ({fmtNum(insetRange * 2)} × {fmtNum(insetRange * 2)})
                    </text>
                    <clipPath id="insetClipMul">
                      <rect x={insetX + 1} y={insetY + 1} width={insetSize - 2} height={insetSize - 2} rx="7" />
                    </clipPath>
                    <g clipPath="url(#insetClipMul)">
                      <line x1={insetX} y1={insetCy} x2={insetX + insetSize} y2={insetCy} stroke="#8098b0" strokeWidth="1" />
                      <line x1={insetCx} y1={insetY} x2={insetCx} y2={insetY + insetSize} stroke="#8098b0" strokeWidth="1" />
                      {[-0.5, 0.5].filter(v => Math.abs(v) < insetRange).map((v, i) => {
                        const gx = insetCx + v * insetScale;
                        const gy = insetCy - v * insetScale;
                        return (
                          <g key={i}>
                            <line x1={gx} y1={insetY} x2={gx} y2={insetY + insetSize} stroke="#d8e4ec" strokeWidth="0.5" />
                            <line x1={insetX} y1={gy} x2={insetX + insetSize} y2={gy} stroke="#d8e4ec" strokeWidth="0.5" />
                          </g>
                        );
                      })}
                      <line x1={insetCx} y1={insetCy} x2={ipx} y2={ipy} stroke="#1a8060" strokeWidth="2.5" />
                      <circle cx={ipx} cy={ipy} r="6" fill="#1a8060" stroke="#fff" strokeWidth="1.5" />
                      <text x={ipx + 10} y={ipy - 8} fontSize="12" fontWeight="700" fill="#1a8060" fontFamily="'DM Sans', sans-serif">z₁z₂</text>
                      <circle cx={insetCx} cy={insetCy} r="2.5" fill="#8098b0" />
                      <text x={insetX + insetSize / 2} y={insetY + insetSize - 8} textAnchor="middle" fontSize="10" fontWeight="600" fill="#5a6480" fontFamily="'JetBrains Mono', monospace">
                        {fmtComplex(product.re, product.im)}
                      </text>
                    </g>
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Presets */}
          <div style={styles.presetBox}>
            <div style={styles.presetTitle}>Try these</div>
            <div style={styles.presetRow}>
              {presets.map((p) => (
                <button
                  key={p.label}
                  className="preset-btn"
                  style={styles.presetBtn}
                  onClick={() => { setZ1(p.z1); setZ2(p.z2); }}
                >
                  {p.label}
                </button>
              ))}
              <button
                className="preset-btn"
                style={{ ...styles.presetBtn, ...styles.randBtn }}
                onClick={() => {
                  setZ1({ re: clamp(Math.random() * 12 - 6), im: clamp(Math.random() * 12 - 6) });
                  setZ2({ re: clamp(Math.random() * 12 - 6), im: clamp(Math.random() * 12 - 6) });
                }}
              >
                Random
              </button>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={styles.panel}>
          {/* Inputs for z1 */}
          <div style={styles.inputBox}>
            <div style={{ ...styles.sectionTitle, color: palette.navy }}>z₁ — First factor</div>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>Re:</label>
              <input type="number" step="0.1" min="-10" max="10" value={z1.re}
                onChange={(e) => safeSet(setZ1, parseFloat(e.target.value) || 0, z1.im)}
                style={styles.numInput} />
              <label style={styles.inputLabel}>Im:</label>
              <input type="number" step="0.1" min="-10" max="10" value={z1.im}
                onChange={(e) => safeSet(setZ1, z1.re, parseFloat(e.target.value) || 0)}
                style={styles.numInput} />
            </div>
            <div style={styles.miniVals}>
              <span><strong style={{ color: palette.navy }}>{fmtComplex(z1.re, z1.im)}</strong></span>
              <span style={styles.polarMini}>|z₁| = {fmtNum(mod1)}, θ₁ = {fmtDeg(arg1)}</span>
            </div>
          </div>

          {/* Inputs for z2 */}
          <div style={styles.inputBox}>
            <div style={{ ...styles.sectionTitle, color: palette.orange }}>z₂ — Second factor</div>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>Re:</label>
              <input type="number" step="0.1" min="-10" max="10" value={z2.re}
                onChange={(e) => safeSet(setZ2, parseFloat(e.target.value) || 0, z2.im)}
                style={styles.numInput} />
              <label style={styles.inputLabel}>Im:</label>
              <input type="number" step="0.1" min="-10" max="10" value={z2.im}
                onChange={(e) => safeSet(setZ2, z2.re, parseFloat(e.target.value) || 0)}
                style={styles.numInput} />
            </div>
            <div style={styles.miniVals}>
              <span><strong style={{ color: palette.orange }}>{fmtComplex(z2.re, z2.im)}</strong></span>
              <span style={styles.polarMini}>|z₂| = {fmtNum(mod2)}, θ₂ = {fmtDeg(arg2)}</span>
            </div>
          </div>

          {warning && (
            <div style={styles.warningMsg}>Values are limited to ±10. Input was clamped.</div>
          )}

          {/* Result */}
          <div style={styles.resultBox}>
            <div style={{ ...styles.sectionTitle, color: palette.green }}>z₁ · z₂ — Product</div>
            <div style={styles.resultMain}>
              <span style={styles.resultVal}>{fmtComplex(product.re, product.im)}</span>
            </div>
            <div style={styles.resultPolar}>
              |z₁z₂| = {fmtNum(modP)}, θ = {fmtDeg(argP)}
            </div>
            {!productVisible && (
              <div style={styles.offscreen}>Product extends beyond ±10 — shown as a ray with arrow on the diagram</div>
            )}
          </div>

          {/* Step by step: algebraic */}
          <div style={styles.stepsBox}>
            <div style={styles.sectionTitle}>Algebraic Method (FOIL)</div>
            <div style={styles.stepLine}>
              ({fmtComplex(z1.re, z1.im)})({fmtComplex(z2.re, z2.im)})
            </div>
            <div style={styles.stepLine}>
              = ({fmtNum(z1.re)})({fmtNum(z2.re)}) + ({fmtNum(z1.re)})({fmtNum(z2.im)}i) + ({fmtNum(z1.im)}i)({fmtNum(z2.re)}) + ({fmtNum(z1.im)}i)({fmtNum(z2.im)}i)
            </div>
            <div style={styles.stepLine}>
              = {fmtNum(z1.re * z2.re)} + {fmtNum(z1.re * z2.im)}i + {fmtNum(z1.im * z2.re)}i + {fmtNum(z1.im * z2.im)}i²
            </div>
            <div style={styles.stepLine}>
              = {fmtNum(z1.re * z2.re)} + {fmtNum(z1.re * z2.im + z1.im * z2.re)}i + ({fmtNum(z1.im * z2.im)})(−1)
            </div>
            <div style={styles.stepLine}>
              = {fmtNum(z1.re * z2.re)} − {fmtNum(z1.im * z2.im)} + {fmtNum(z1.re * z2.im + z1.im * z2.re)}i
            </div>
            <div style={{ ...styles.stepLine, fontWeight: '700', color: palette.green }}>
              = {fmtComplex(product.re, product.im)}
            </div>
          </div>

          {/* Step by step: geometric */}
          <div style={styles.stepsBox}>
            <div style={styles.sectionTitle}>Geometric Method (Polar)</div>
            <div style={styles.stepLine}>
              <strong style={{ color: palette.navy }}>|z₁|</strong> × <strong style={{ color: palette.orange }}>|z₂|</strong> = {fmtNum(mod1)} × {fmtNum(mod2)} = <strong style={{ color: palette.green }}>{fmtNum(modP)}</strong>
            </div>
            <div style={styles.stepLine}>
              <strong style={{ color: palette.navy }}>θ₁</strong> + <strong style={{ color: palette.orange }}>θ₂</strong> = {fmtDeg(arg1)} + {fmtDeg(arg2)} = <strong style={{ color: palette.green }}>{fmtDeg(argP)}</strong>
            </div>
            <div style={styles.geoSummary}>
              Multiply the lengths, add the angles. The product vector is <strong style={{ color: palette.green }}>{fmtNum(modP)}</strong> units long at <strong style={{ color: palette.green }}>{fmtDeg(argP)}</strong> from the real axis.
            </div>
          </div>

          {/* Key Ideas */}
          <div style={styles.explainBox}>
            <div style={styles.sectionTitle}>Key Ideas</div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
              <span>
                <strong>Algebraically,</strong> complex multiplication uses FOIL (distributive property) and the rule i² = −1. The real part of the product is ac − bd, the imaginary part is ad + bc.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.orange }}></span>
              <span>
                <strong>Geometrically,</strong> multiplying z₁ × z₂ scales z₁ by |z₂| and rotates it by θ₂ (or equivalently, scales z₂ by |z₁| and rotates by θ₁). The result: |z₁z₂| = |z₁|·|z₂| and arg(z₁z₂) = θ₁ + θ₂.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.green }}></span>
              <span>
                <strong>Multiplying by i rotates by 90°.</strong> Try the "i × i" preset — i has modulus 1 and angle 90°, so i² has angle 180° = −1. This is why i² = −1 makes geometric sense.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
              <span>
                <strong>Multiplying by a real number</strong> just scales (stretches or compresses) without rotating. Try "2(−3+4i)" — the angle stays the same, only the length doubles.
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
    fontSize: '1.02rem',
    color: palette.muted,
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
    padding: '5px 12px',
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

  /* Input boxes */
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
    marginBottom: '6px',
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
  miniVals: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    fontFamily: mono,
    fontSize: '0.96rem',
  },
  polarMini: {
    fontSize: '0.85rem',
    color: palette.muted,
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
    fontSize: '0.9rem',
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
    fontFamily: mono,
    fontSize: '0.9rem',
    color: palette.text,
    lineHeight: 1.7,
    paddingLeft: '4px',
  },
  geoSummary: {
    marginTop: '6px',
    fontSize: '0.93rem',
    color: palette.text,
    lineHeight: 1.5,
    padding: '6px 8px',
    backgroundColor: `${palette.green}08`,
    borderRadius: '4px',
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