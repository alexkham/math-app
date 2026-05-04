import React, { useState, useEffect, useRef } from "react";

export default function SquareOfTrinomialAnimated() {
  const [stage, setStage] = useState(0);
  const [subT, setSubT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const stageRef = useRef(stage);
  const subTRef = useRef(subT);
  const playingRef = useRef(false);
  const speedRef = useRef(1);
  const animRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => { stageRef.current = stage; }, [stage]);
  useEffect(() => { subTRef.current = subT; }, [subT]);
  useEffect(() => { playingRef.current = playing; }, [playing]);
  useEffect(() => { speedRef.current = speed; }, [speed]);

  // Intro fade
  const [introT, setIntroT] = useState(0);
  const introRafRef = useRef(null);
  const playIntro = () => {
    if (introRafRef.current) cancelAnimationFrame(introRafRef.current);
    setIntroT(0);
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      setIntroT(p);
      if (p < 1) introRafRef.current = requestAnimationFrame(tick);
      else introRafRef.current = null;
    };
    introRafRef.current = requestAnimationFrame(tick);
  };

  // Stage-3 explode/reform oscillation. 0 = together, 1 = exploded apart.
  const [oscT, setOscT] = useState(0);
  const oscRafRef = useRef(null);
  const startOscillation = () => {
    if (oscRafRef.current) cancelAnimationFrame(oscRafRef.current);
    const start = performance.now();
    const period = 3200;
    const tick = (now) => {
      const t = ((now - start) % period) / period;
      const v = 0.5 - 0.5 * Math.cos(2 * Math.PI * t);
      setOscT(v);
      oscRafRef.current = requestAnimationFrame(tick);
    };
    oscRafRef.current = requestAnimationFrame(tick);
  };
  const stopOscillation = () => {
    if (oscRafRef.current) cancelAnimationFrame(oscRafRef.current);
    oscRafRef.current = null;
  };

  const clamp01 = (x) => Math.max(0, Math.min(1, x));

  // Geometry — side lengths a=4, b=2, c=3 (units), pixel scale 50
  const PX = 50;
  const a = 4;
  const b = 2;
  const c = 3;
  const W = 840;
  const H = 660;
  const aPx = a * PX;
  const bPx = b * PX;
  const cPx = c * PX;
  const sidePx = aPx + bPx + cPx;

  const sqX = (W - sidePx) / 2;
  const sqY = (H - sidePx) / 2 + 40;

  // Cell positions: rows 0=a, 1=b, 2=c (top to bottom); cols 0=a, 1=b, 2=c (left to right)
  const colX = [sqX, sqX + aPx, sqX + aPx + bPx];
  const colW = [aPx, bPx, cPx];
  const rowY = [sqY, sqY + aPx, sqY + aPx + bPx];
  const rowH = [aPx, bPx, cPx];
  const dimNames = ["a", "b", "c"];

  // Colors
  const BG = "#fafaf7";
  const A_TEXT = "#143a66";
  const A_STROKE = "#2c5d99";
  const DIM = "#444";
  const BTN_PRIMARY = "#2c5d99";
  const BTN_SECONDARY = "#6b7a8f";
  const BTN_NEUTRAL = "#888";

  // Per-cell color palettes — same pair {i,j} == {j,i} share a hue
  const palettes = {
    aa: { fill: "#cfdef5", stroke: "#2c5d99", text: "#143a66" },
    bb: { fill: "#f4cdd9", stroke: "#992c5d", text: "#66143a" },
    cc: { fill: "#d8ebc6", stroke: "#5a8a3a", text: "#2f4d1a" },
    ab: { fill: "#fce4b8", stroke: "#d4881a", text: "#7a4a08" },
    ac: { fill: "#dcd4ee", stroke: "#6a4caf", text: "#3a2870" },
    bc: { fill: "#f7d9c2", stroke: "#c25e1e", text: "#6e2f08" },
  };

  const cellPalette = (i, j) => {
    const key = [dimNames[i], dimNames[j]].sort().join("");
    return palettes[key] || palettes.aa;
  };

  const cellLabel = (i, j) => {
    if (i === j) return `${dimNames[i]}²`;
    const pair = [dimNames[i], dimNames[j]].sort().join("");
    return pair;
  };

  const baseDuration = (fromStage) => {
    switch (fromStage) {
      case 0: return 1000;
      case 1: return 1200;
      case 2: return 1500;
      default: return 0;
    }
  };
  const transitionDuration = (fromStage) => baseDuration(fromStage) * speedRef.current;
  const restDwell = () => 700 * speedRef.current;

  const stopAll = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    animRef.current = null;
    timerRef.current = null;
  };

  const animateInCurrentTransition = (targetSubT, onDone) => {
    stopAll();
    const from = subTRef.current;
    const to = targetSubT;
    if (Math.abs(to - from) < 0.001) { onDone && onDone(); return; }
    const fromStage = stageRef.current;
    if (fromStage >= 3) { onDone && onDone(); return; }
    const fullDur = transitionDuration(fromStage);
    if (fullDur === 0) {
      setSubT(to); subTRef.current = to;
      onDone && onDone();
      return;
    }
    const duration = Math.max(80, fullDur * Math.abs(to - from));
    const startTime = performance.now();
    const startVal = from;
    const stepFn = (now) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2)/2;
      const cur = startVal + (to - startVal) * eased;
      setSubT(cur); subTRef.current = cur;
      if (p < 1) animRef.current = requestAnimationFrame(stepFn);
      else { animRef.current = null; onDone && onDone(); }
    };
    animRef.current = requestAnimationFrame(stepFn);
  };

  const stepForwardOnce = (onDone) => {
    const curStage = stageRef.current;
    const curSub = subTRef.current;
    if (curStage >= 3) { onDone && onDone(false); return; }
    if (curSub >= 0.999) {
      setSubT(0); subTRef.current = 0;
      setStage(curStage + 1); stageRef.current = curStage + 1;
      requestAnimationFrame(() => stepForwardOnce(onDone));
      return;
    }
    animateInCurrentTransition(1, () => {
      const ns = stageRef.current + 1;
      setStage(ns); stageRef.current = ns;
      setSubT(0); subTRef.current = 0;
      onDone && onDone(true);
    });
  };

  const stepBackwardOnce = (onDone) => {
    const curStage = stageRef.current;
    const curSub = subTRef.current;
    if (curStage <= 0 && curSub <= 0.001) { onDone && onDone(false); return; }
    if (curSub <= 0.001) {
      const ps = curStage - 1;
      setStage(ps); stageRef.current = ps;
      setSubT(1); subTRef.current = 1;
      requestAnimationFrame(() => stepBackwardOnce(onDone));
      return;
    }
    animateInCurrentTransition(0, () => onDone && onDone(true));
  };

  const playLoop = () => {
    if (!playingRef.current) return;
    const curStage = stageRef.current;
    const curSub = subTRef.current;
    if (curStage >= 3 && curSub >= 0.999) { setPlaying(false); playingRef.current = false; return; }
    if (curSub < 0.999) {
      animateInCurrentTransition(1, () => {
        if (!playingRef.current) return;
        const ns = stageRef.current + 1;
        if (ns > 3) { setPlaying(false); playingRef.current = false; return; }
        setStage(ns); stageRef.current = ns;
        setSubT(0); subTRef.current = 0;
        timerRef.current = setTimeout(() => {
          if (playingRef.current) playLoop();
        }, restDwell());
      });
    } else {
      const ns = stageRef.current + 1;
      if (ns > 3) { setPlaying(false); playingRef.current = false; return; }
      setStage(ns); stageRef.current = ns;
      setSubT(0); subTRef.current = 0;
      timerRef.current = setTimeout(() => {
        if (playingRef.current) playLoop();
      }, restDwell());
    }
  };

  const onPlay = () => {
    if (stageRef.current >= 3) {
      stopAll();
      setStage(0); stageRef.current = 0;
      setSubT(0); subTRef.current = 0;
    }
    setPlaying(true); playingRef.current = true;
    playLoop();
  };
  const onPause = () => {
    stopAll();
    setPlaying(false); playingRef.current = false;
  };
  const onStepForward = () => {
    stopAll();
    setPlaying(false); playingRef.current = false;
    stepForwardOnce(() => {});
  };
  const onStepBack = () => {
    stopAll();
    setPlaying(false); playingRef.current = false;
    stepBackwardOnce(() => {});
  };
  const onReset = () => {
    stopAll();
    stopOscillation();
    setStage(0); stageRef.current = 0;
    setSubT(0); subTRef.current = 0;
    setPlaying(false); playingRef.current = false;
    playIntro();
  };

  useEffect(() => {
    if (stage === 3) startOscillation();
    else { stopOscillation(); setOscT(0); }
  }, [stage]);

  useEffect(() => {
    playIntro();
    return () => {
      stopAll();
      stopOscillation();
      if (introRafRef.current) cancelAnimationFrame(introRafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const atStart = stage === 0 && subT < 0.001;
  const atEndOfAll = stage === 3;

  const Dim = ({ x1, y1, x2, y2, label, offset = 28, side = -1, color = DIM, fontSize = 20, opacity = 1 }) => {
    if (opacity <= 0.001) return null;
    const horiz = y1 === y2;
    let lx1=x1, ly1=y1, lx2=x2, ly2=y2, tx, ty, anchor="middle";
    if (horiz) {
      const off = offset * side;
      ly1 = ly2 = y1 + off;
      tx = (x1+x2)/2;
      ty = ly1 + (off > 0 ? 18 : -8);
    } else {
      const off = offset * side;
      lx1 = lx2 = x1 + off;
      tx = lx1 + (off > 0 ? 8 : -8);
      ty = (y1+y2)/2 + 6;
      anchor = off > 0 ? "start" : "end";
    }
    return (
      <g opacity={opacity}>
        <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke={color} strokeWidth={1.2}/>
        {horiz ? (<>
          <line x1={x1} y1={ly1-5} x2={x1} y2={ly1+5} stroke={color} strokeWidth={1.2}/>
          <line x1={x2} y1={ly2-5} x2={x2} y2={ly2+5} stroke={color} strokeWidth={1.2}/>
        </>) : (<>
          <line x1={lx1-5} y1={y1} x2={lx1+5} y2={y1} stroke={color} strokeWidth={1.2}/>
          <line x1={lx2-5} y1={y2} x2={lx2+5} y2={y2} stroke={color} strokeWidth={1.2}/>
        </>)}
        <text x={tx} y={ty} textAnchor={anchor} fill={color} fontSize={fontSize} fontStyle="italic"
          fontFamily="Georgia, serif">{label}</text>
      </g>
    );
  };

  const renderScene = () => {
    const inS0 = stage === 0;
    const inS1 = stage === 1;
    const inS2 = stage === 2;
    const inS3 = stage === 3;

    const introOutline = inS0 ? clamp01(introT / 0.4)        : 1;
    const introLabel   = inS0 ? clamp01((introT - 0.4) / 0.3) : 1;
    const introDims    = inS0 ? clamp01((introT - 0.7) / 0.3) : 1;

    // Stage 0→1: side splits into a, b, c (split labels fade in, full label fades out)
    const splitOpacity = inS0 ? subT : (inS1 || inS2 || inS3) ? 1 : 0;
    const fullSideOpacity = inS0 ? (1 - subT) * introDims : 0;

    // Stage 1→2: grid lines + cell fills/labels fade in
    const gridOpacity = inS1 ? subT : (inS2 || inS3) ? 1 : 0;

    // Stage 2→3: pieces explode outward from center
    const explodeP_s2 = inS2 ? subT : 0;
    const explodeP = inS3 ? oscT : explodeP_s2;
    const explodeMag = 70;

    const cx = sqX + sidePx / 2;
    const cy = sqY + sidePx / 2;

    return (
      <g>
        {/* Outer outline of (a+b+c) square — fades during stage 0/1 only; in 2/3, individual cells own their strokes */}
        {(inS0 || inS1) && (
          <rect x={sqX} y={sqY} width={sidePx} height={sidePx}
            fill="none" stroke={A_STROKE} strokeWidth={2.5} opacity={introOutline * (1 - gridOpacity * 0.5)}/>
        )}

        {/* (a+b+c)² label — only in stage 0 */}
        {inS0 && (
          <text x={cx} y={cy + 22} textAnchor="middle"
            fill={A_TEXT} fontSize={56} fontWeight={500} fontStyle="italic"
            fontFamily="Georgia, serif" opacity={introLabel * (1 - gridOpacity)}>
            (a+b+c)²
          </text>
        )}

        {/* 9 cells */}
        {gridOpacity > 0.001 && [0, 1, 2].map((i) =>
          [0, 1, 2].map((j) => {
            const x = colX[j];
            const y = rowY[i];
            const w = colW[j];
            const h = rowH[i];
            const ccx = x + w / 2;
            const ccy = y + h / 2;
            const dx = ccx - cx;
            const dy = ccy - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const ux = dist > 0.001 ? dx / dist : 0;
            const uy = dist > 0.001 ? dy / dist : 0;
            const ox = ux * explodeP * explodeMag;
            const oy = uy * explodeP * explodeMag;
            const palette = cellPalette(i, j);
            const label = cellLabel(i, j);
            const fontSize = Math.min(w, h) * 0.32;
            return (
              <g key={`${i}-${j}`} transform={`translate(${ox}, ${oy})`}
                opacity={gridOpacity}>
                <rect x={x} y={y} width={w} height={h}
                  fill={palette.fill} stroke={palette.stroke} strokeWidth={2}/>
                <text x={ccx} y={ccy + fontSize * 0.34} textAnchor="middle"
                  fill={palette.text} fontSize={fontSize} fontStyle="italic"
                  fontFamily="Georgia, serif">
                  {label}
                </text>
              </g>
            );
          })
        )}

        {/* === Side dimension labels === */}

        {/* Top edge: full "a+b+c" (stage 0 only), then split a / b / c */}
        {inS0 && (
          <Dim x1={sqX} y1={sqY} x2={sqX+sidePx} y2={sqY}
            label="a+b+c" offset={32} side={-1} opacity={fullSideOpacity}/>
        )}
        {(inS0 || inS1 || inS2 || inS3) && (
          <>
            <Dim x1={colX[0]} y1={sqY} x2={colX[0]+colW[0]} y2={sqY}
              label="a" offset={32} side={-1} opacity={splitOpacity * introDims}/>
            <Dim x1={colX[1]} y1={sqY} x2={colX[1]+colW[1]} y2={sqY}
              label="b" offset={32} side={-1} opacity={splitOpacity * introDims}/>
            <Dim x1={colX[2]} y1={sqY} x2={colX[2]+colW[2]} y2={sqY}
              label="c" offset={32} side={-1} opacity={splitOpacity * introDims}/>
            <Dim x1={sqX} y1={sqY} x2={sqX+sidePx} y2={sqY}
              label="a+b+c" offset={70} side={-1} opacity={splitOpacity * introDims * (1 - explodeP)}/>
          </>
        )}

        {/* Left edge */}
        {inS0 && (
          <Dim x1={sqX} y1={sqY} x2={sqX} y2={sqY+sidePx}
            label="a+b+c" offset={32} side={-1} opacity={fullSideOpacity}/>
        )}
        {(inS0 || inS1 || inS2 || inS3) && (
          <>
            <Dim x1={sqX} y1={rowY[0]} x2={sqX} y2={rowY[0]+rowH[0]}
              label="a" offset={32} side={-1} opacity={splitOpacity * introDims}/>
            <Dim x1={sqX} y1={rowY[1]} x2={sqX} y2={rowY[1]+rowH[1]}
              label="b" offset={32} side={-1} opacity={splitOpacity * introDims}/>
            <Dim x1={sqX} y1={rowY[2]} x2={sqX} y2={rowY[2]+rowH[2]}
              label="c" offset={32} side={-1} opacity={splitOpacity * introDims}/>
            <Dim x1={sqX} y1={sqY} x2={sqX} y2={sqY+sidePx}
              label="a+b+c" offset={78} side={-1} opacity={splitOpacity * introDims * (1 - explodeP)}/>
          </>
        )}
      </g>
    );
  };

  const stepNumber = stage === 0 ? 1 : stage === 1 ? 2 : stage === 2 ? 3 : 4;
  const titles = {
    1: <>
      Square of side <i>a</i>+<i>b</i>+<i>c</i>. Area = (<i>a</i>+<i>b</i>+<i>c</i>)².
    </>,
    2: <>
      Split each side into segments <i>a</i>, <i>b</i>, <i>c</i>.
    </>,
    3: <>
      The grid divides the square into 9 rectangles.
      Diagonal cells are <i>a</i>², <i>b</i>², <i>c</i>²; off-diagonal pairs match (<i>ab</i>=<i>ba</i> etc.).
    </>,
    4: <>
      Sum of the 9 pieces:<br/><br/>
      (<i>a</i>+<i>b</i>+<i>c</i>)² = <i>a</i>² + <i>b</i>² + <i>c</i>² + 2<i>ab</i> + 2<i>ac</i> + 2<i>bc</i>
    </>,
  };

  const btnStyle = (bg, disabled) => ({
    background: bg, color: "white", border: "none",
    padding: "8px 14px", fontSize: 14, fontFamily: "inherit", borderRadius: 4,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1, minWidth: 44,
  });

  return (
    <div style={{
      background: BG, color: "#222",
      fontFamily: "Georgia, 'Times New Roman', serif",
      padding: 20, minHeight: "100vh", boxSizing: "border-box",
    }}>
      <div style={{maxWidth: 1320, margin: "0 auto"}}>
        <div style={{display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap"}}>

          <div style={{flex: "1 1 560px", minWidth: 320}}>
            <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{display: "block", background: BG}}>
              {renderScene()}
            </svg>

            <div style={{display: "flex", gap: 8, justifyContent: "center", marginTop: 16, flexWrap: "wrap", alignItems: "center"}}>
              <button onClick={onStepBack} title="Step back"
                style={btnStyle(BTN_SECONDARY, atStart)} disabled={atStart}>
                ◀◀ Back
              </button>
              {playing ? (
                <button onClick={onPause} title="Pause" style={btnStyle(BTN_PRIMARY, false)}>
                  ⏸ Pause
                </button>
              ) : (
                <button onClick={onPlay} title="Play" style={btnStyle(BTN_PRIMARY, false)}>
                  ▶ Play
                </button>
              )}
              <button onClick={onStepForward} title="Step forward"
                style={btnStyle(BTN_SECONDARY, atEndOfAll)} disabled={atEndOfAll}>
                Forward ▶▶
              </button>
              <button onClick={onReset} title="Reset"
                style={btnStyle(BTN_NEUTRAL, atStart)} disabled={atStart}>
                ↺ Reset
              </button>

              <div style={{display: "flex", alignItems: "center", gap: 6, marginLeft: 10}}>
                <span style={{fontSize: 13, color: "#666"}}>Speed</span>
                <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))}
                  style={{
                    fontFamily: "inherit", fontSize: 14, padding: "6px 8px",
                    border: "1px solid #bbb", borderRadius: 4, background: "white", color: "#222",
                  }}>
                  <option value={2}>0.5×</option>
                  <option value={1.33}>0.75×</option>
                  <option value={1}>1×</option>
                  <option value={0.66}>1.5×</option>
                  <option value={0.5}>2×</option>
                </select>
              </div>
            </div>
          </div>

          <aside style={{
            flex: "1 1 460px", minWidth: 360, maxWidth: 560,
            paddingTop: 8,
          }}>
            <div style={{
              fontSize: 14, color: "#888", textTransform: "uppercase",
              letterSpacing: 1.2, marginBottom: 14, fontFamily: "system-ui, sans-serif",
            }}>
              Steps
            </div>
            <ol style={{listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16}}>
              {[1, 2, 3, 4].map((n) => {
                const reached = stepNumber >= n;
                const isCurrent = stepNumber === n;
                if (!reached) return null;
                return (
                  <li key={n}
                    style={{
                      padding: "18px 22px",
                      borderRadius: 8,
                      background: isCurrent ? "#eaf1fb" : "#f1f1ee",
                      borderLeft: `5px solid ${isCurrent ? BTN_PRIMARY : "#cdcdc8"}`,
                      color: isCurrent ? "#143a66" : "#888",
                      filter: isCurrent ? "none" : "blur(0.5px)",
                      opacity: isCurrent ? 1 : 0.55,
                      transition: "all 0.4s ease",
                    }}>
                    <div style={{
                      fontSize: 13, letterSpacing: 0.6, marginBottom: 6,
                      fontFamily: "system-ui, sans-serif", fontWeight: 600,
                      color: isCurrent ? BTN_PRIMARY : "#999",
                    }}>
                      Step {n}
                    </div>
                    <div style={{fontSize: 19, lineHeight: 1.5}}>
                      {titles[n]}
                    </div>
                  </li>
                );
              })}
            </ol>
          </aside>
        </div>
      </div>
    </div>
  );
}