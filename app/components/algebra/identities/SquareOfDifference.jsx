import React, { useState, useEffect, useRef } from "react";

export default function SquareOfDifference() {
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

  const [oscT, setOscT] = useState(0);
  const oscRafRef = useRef(null);
  const startOscillation = () => {
    if (oscRafRef.current) cancelAnimationFrame(oscRafRef.current);
    const start = performance.now();
    const period = 2800;
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

  const PX = 50;
  const a = 7;
  const b = 3;
  const W = 760;
  const H = 560;
  const aPx = a * PX;
  const bPx = b * PX;
  const ambPx = (a - b) * PX;

  const sqX = (W - aPx) / 2;
  const sqY = (H - aPx) / 2 + 10;

  const ambX = sqX,            ambY = sqY + bPx;
  const topX = sqX,            topY = sqY;
  const rightX = sqX + ambPx,  rightY = sqY;
  const cornerX = sqX + ambPx, cornerY = sqY;

  const BG = "#fafaf7";
  const A_FILL = "#dde9f7";
  const A_STROKE = "#2c5d99";
  const A_TEXT = "#143a66";
  const AB_FILL = "#fdecd0";
  const AB_STROKE = "#d4881a";
  const AB_TEXT = "#7a4a08";
  const B_FILL = "#f7dde9";
  const B_STROKE = "#992c5d";
  const B_TEXT = "#66143a";
  const DIM = "#444";
  const DISCARD = "#c0392b";
  const BTN_PRIMARY = "#2c5d99";
  const BTN_SECONDARY = "#6b7a8f";
  const BTN_NEUTRAL = "#888";

  const baseDuration = (fromStage) => {
    switch (fromStage) {
      case 0: return 900;
      case 1: return 900;
      case 2: return 1700;
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

    const b2MarkOpacity = inS0 ? subT : (inS1 || inS2) ? 1 : 0;
    const splitLabelOpacity = b2MarkOpacity;
    const aFullOpacity = inS0 ? (1 - subT) * introDims : 0;

    const stripsOpacity = inS1 ? subT : (inS2 || inS3) ? 1 : 0;
    const ambOutlineOp = stripsOpacity;

    const detachP = inS2 ? clamp01(subT / 0.40) : (inS3 ? 1 : 0);
    const xMarkP  = inS2 ? clamp01((subT - 0.40) / 0.30) : (inS3 ? 1 : 0);
    const discardP = inS2 ? clamp01((subT - 0.70) / 0.30) : (inS3 ? 1 : 0);

    const liftDy  = -120;
    const shiftDx = 130;

    let topDy   = detachP * liftDy;
    let rightDx = detachP * shiftDx;
    if (inS3) {
      topDy   = liftDy  * (1 - oscT);
      rightDx = shiftDx * (1 - oscT);
    }

    return (
      <g>
        {(inS0 || inS1) && (
          <rect x={sqX} y={sqY} width={aPx} height={aPx}
            fill={A_FILL} opacity={introOutline}/>
        )}

        {(inS2 || inS3) && (
          <rect x={ambX} y={ambY} width={ambPx} height={ambPx}
            fill={A_FILL} stroke={A_STROKE} strokeWidth={2.5}/>
        )}

        {(inS0 || inS1) && (
          <rect x={sqX} y={sqY} width={aPx} height={aPx}
            fill="none" stroke={A_STROKE} strokeWidth={2.5} opacity={introOutline}/>
        )}

        {(inS0 || inS1) && (
          <text x={sqX + aPx/2} y={sqY + aPx/2 + 18} textAnchor="middle"
            fill={A_TEXT} fontSize={56} fontWeight={500} fontStyle="italic"
            fontFamily="Georgia, serif" opacity={introLabel * (inS0 ? 1 : (1 - subT*0.5))}>
            a²
          </text>
        )}

        {(inS2 || inS3) && (
          <text x={ambX + ambPx/2} y={ambY + ambPx/2 + 12} textAnchor="middle"
            fill={A_TEXT} fontSize={32} fontWeight={500} fontStyle="italic"
            fontFamily="Georgia, serif">
            (a−b)²
          </text>
        )}

        {b2MarkOpacity > 0.001 && !inS3 && stripsOpacity < 0.999 && (
          <g opacity={b2MarkOpacity}>
            <rect x={cornerX} y={cornerY} width={bPx} height={bPx}
              fill={B_FILL} stroke={B_STROKE} strokeWidth={2}/>
            <text x={cornerX + bPx/2} y={cornerY + bPx/2 + 10} textAnchor="middle"
              fill={B_TEXT} fontSize={28} fontStyle="italic" fontFamily="Georgia, serif"
              opacity={1 - stripsOpacity}>
              b²
            </text>
          </g>
        )}

        {stripsOpacity > 0.001 && (
          <g transform={`translate(0, ${topDy})`} opacity={stripsOpacity}>
            <rect x={topX} y={topY} width={ambPx} height={bPx}
              fill={AB_FILL} stroke={AB_STROKE} strokeWidth={2}/>
            <text x={topX + ambPx/2} y={topY + bPx/2 + 8} textAnchor="middle"
              fill={AB_TEXT} fontSize={22} fontStyle="italic" fontFamily="Georgia, serif">ab</text>
            <rect x={cornerX} y={cornerY} width={bPx} height={bPx}
              fill={B_FILL} stroke={B_STROKE} strokeWidth={2}/>
            <text x={cornerX + bPx/2} y={cornerY + bPx/2 + 8} textAnchor="middle"
              fill={B_TEXT} fontSize={22} fontStyle="italic" fontFamily="Georgia, serif">b²</text>
          </g>
        )}

        {stripsOpacity > 0.001 && (
          <g transform={`translate(${rightDx}, 0)`} opacity={stripsOpacity}>
            <rect x={rightX} y={rightY + bPx} width={bPx} height={ambPx}
              fill={AB_FILL} stroke={AB_STROKE} strokeWidth={2}/>
            <text x={rightX + bPx/2} y={rightY + bPx + ambPx/2 + 8} textAnchor="middle"
              fill={AB_TEXT} fontSize={22} fontStyle="italic" fontFamily="Georgia, serif">ab</text>

            {(1 - discardP) > 0.001 && (
              <g opacity={1 - discardP}>
                <rect x={cornerX} y={cornerY} width={bPx} height={bPx}
                  fill={B_FILL} stroke={B_STROKE} strokeWidth={2}/>
                <text x={cornerX + bPx/2} y={cornerY + bPx/2 + 8} textAnchor="middle"
                  fill={B_TEXT} fontSize={22} fontStyle="italic" fontFamily="Georgia, serif">b²</text>
              </g>
            )}

            {xMarkP > 0.001 && (
              <g opacity={xMarkP * (1 - discardP)} stroke={DISCARD} strokeWidth={4} strokeLinecap="round">
                <line x1={cornerX + 14} y1={cornerY + 14} x2={cornerX + bPx - 14} y2={cornerY + bPx - 14}/>
                <line x1={cornerX + bPx - 14} y1={cornerY + 14} x2={cornerX + 14} y2={cornerY + bPx - 14}/>
              </g>
            )}

            {xMarkP > 0.001 && (
              <text x={cornerX + bPx/2} y={cornerY - 14} textAnchor="middle"
                fill={DISCARD} fontSize={16} fontStyle="italic" fontFamily="Georgia, serif"
                opacity={xMarkP * (1 - discardP)}>
                discard
              </text>
            )}
          </g>
        )}

        {ambOutlineOp > 0.001 && inS2 && stripsOpacity > 0.5 && detachP < 0.05 && (
          <rect x={ambX} y={ambY} width={ambPx} height={ambPx}
            fill="none" stroke={A_STROKE} strokeWidth={2.5} strokeDasharray="6 4"
            opacity={ambOutlineOp}/>
        )}

        {inS0 && (
          <Dim x1={sqX} y1={sqY} x2={sqX} y2={sqY+aPx}
            label="a" offset={32} side={-1} opacity={aFullOpacity}/>
        )}
        {(inS0 || inS1 || inS2 || inS3) && (
          <>
            <Dim x1={sqX} y1={sqY} x2={sqX} y2={sqY+bPx}
              label="b" offset={32} side={-1} color={B_STROKE} opacity={splitLabelOpacity * introDims}/>
            <Dim x1={sqX} y1={sqY+bPx} x2={sqX} y2={sqY+aPx}
              label="a − b" offset={32} side={-1} opacity={splitLabelOpacity * introDims}/>
            <Dim x1={sqX} y1={sqY} x2={sqX} y2={sqY+aPx}
              label="a" offset={70} side={-1} opacity={splitLabelOpacity * introDims}/>
          </>
        )}

        {inS0 && (
          <Dim x1={sqX} y1={sqY} x2={sqX+aPx} y2={sqY}
            label="a" offset={32} side={-1} opacity={aFullOpacity}/>
        )}
        {(inS0 || inS1 || inS2 || inS3) && (
          <>
            <Dim x1={sqX} y1={sqY} x2={sqX+ambPx} y2={sqY}
              label="a − b" offset={32} side={-1} opacity={splitLabelOpacity * introDims}/>
            <Dim x1={sqX+ambPx} y1={sqY} x2={sqX+aPx} y2={sqY}
              label="b" offset={32} side={-1} color={B_STROKE} opacity={splitLabelOpacity * introDims}/>
            <Dim x1={sqX} y1={sqY} x2={sqX+aPx} y2={sqY}
              label="a" offset={70} side={-1} opacity={splitLabelOpacity * introDims}/>
          </>
        )}
      </g>
    );
  };

  const stepNumber = stage === 0 ? 1 : stage === 1 ? 2 : stage === 2 ? 3 : 4;
  const titles = {
    1: <>
      Square of side <i>a</i>. Area = <i>a</i>².
    </>,
    2: <>
      Mark <i>b</i>² in the corner. The side splits into (<i>a</i>−<i>b</i>) and <i>b</i>.
    </>,
    3: <>
      Two <i>ab</i> strips cover the rest, overlapping on <i>b</i>².
      What remains in the opposite corner is the (<i>a</i>−<i>b</i>)² square — that&apos;s what we want.
    </>,
    4: <>
      Sum of the pieces:<br/><br/>
      <i>a</i>² = <i>ab</i> + <i>ab</i> − <i>b</i>² + (<i>a</i>−<i>b</i>)²<br/><br/>
      ⇒ (<i>a</i>−<i>b</i>)² = <i>a</i>² − 2<i>ab</i> + <i>b</i>²
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