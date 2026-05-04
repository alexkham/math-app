
import React, { useState, useEffect, useRef } from "react";

export default function DifferenceOfSquares() {
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

  // Intro animation: empty scene → outline+fill → label → dims
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

  const clamp01 = (x) => Math.max(0, Math.min(1, x));

  useEffect(() => { stageRef.current = stage; }, [stage]);
  useEffect(() => { subTRef.current = subT; }, [subT]);
  useEffect(() => { playingRef.current = playing; }, [playing]);
  useEffect(() => { speedRef.current = speed; }, [speed]);

  const PX = 50;
  const a = 7;
  const b = 3;
  const W = 760;
  const H = 560;
  const aPx = a * PX;
  const bPx = b * PX;

  const useShiftedLayout = stage >= 3 || (stage === 2 && subT > 0);
  const sqX = useShiftedLayout ? (W - aPx) / 2 - bPx/2 - 10 : (W - aPx) / 2;
  const sqY = (H - aPx) / 2 - 10;
  const b2X = sqX + (a - b) * PX;
  const b2Y = sqY;

  const BG = "#fafaf7";
  const A_FILL = "#dde9f7";
  const A_STROKE = "#2c5d99";
  const A_TEXT = "#143a66";
  const B_FILL = "#fdecd0";
  const B_STROKE = "#d4881a";
  const B_TEXT = "#7a4a08";
  const DIM = "#444";
  const BTN_PRIMARY = "#2c5d99";
  const BTN_SECONDARY = "#6b7a8f";
  const BTN_NEUTRAL = "#888";

  const topX0 = sqX, topY0 = sqY, topW = (a-b)*PX, topH = bPx;
  const botX = sqX, botY = sqY + bPx, botW = aPx, botH = (a-b)*PX;
  const targetX = botX + botW, targetY = botY, targetW = bPx, targetH = (a-b)*PX;
  const liftDy = -100;

  const baseDuration = (fromStage) => {
    switch (fromStage) {
      case 0: return 500;
      case 1: return 500;
      case 2: return 2700;
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
    if (stageRef.current >= 3 && subTRef.current < 0.001) {
      // at end → restart
    } else if (stageRef.current >= 3) {
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
    setStage(0); stageRef.current = 0;
    setSubT(0); subTRef.current = 0;
    setPlaying(false); playingRef.current = false;
    playIntro();
  };

  useEffect(() => {
    playIntro();
    return () => {
      stopAll();
      if (introRafRef.current) cancelAnimationFrame(introRafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const atStart = stage === 0 && subT < 0.001;
  const atEndOfAll = stage === 3 && subT < 0.001;

  const Dim = ({ x1, y1, x2, y2, label, offset = 28, side = -1, color = DIM, fontSize = 20, opacity = 1 }) => {
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

  const renderStages0_1_2 = () => {
    const inS0 = stage === 0;
    const inS1 = stage === 1;
    const inS2 = stage === 2;

    // Mount-time intro masks (only in stage 0): outline+fill → label → dims
    const introOutline = inS0 ? clamp01(introT / 0.4)        : 1;
    const introLabel   = inS0 ? clamp01((introT - 0.4) / 0.3) : 1;
    const introDims    = inS0 ? clamp01((introT - 0.7) / 0.3) : 1;

    const b2Opacity = inS0 ? subT : (inS1 ? 1 - subT : 0);
    const removeProgress = inS2 ? 1 : (inS1 ? subT : 0);
    const lShapeLabelOpacity = inS1 ? subT : (inS2 ? 1 : 0);

    const w = inS0 ? subT : (inS1 ? 1 - subT : 0);
    const aLabelCx = sqX + aPx/2 + (sqX + (a-b)*PX/2 - (sqX + aPx/2)) * w;
    const aLabelCy = sqY + aPx/2 + 18 + (sqY + aPx*0.7 - (sqY + aPx/2 + 18)) * w;
    const aLabelSize = 64 - 16 * w;

    const tx = sqX, ty = sqY, tw = (a-b)*PX, th = bPx;
    const bx = sqX, by = sqY + bPx, bw = aPx, bh = (a-b)*PX;

    return (
      <g>
        <rect x={sqX} y={sqY} width={aPx} height={aPx} fill={A_FILL} stroke="none" opacity={introOutline}/>

        {removeProgress > 0 && (
          <rect x={b2X} y={b2Y} width={bPx} height={bPx}
            fill={BG} stroke="none" opacity={removeProgress}/>
        )}

        <line x1={sqX} y1={sqY} x2={sqX} y2={sqY+aPx} stroke={A_STROKE} strokeWidth={2.5} opacity={introOutline}/>
        <line x1={sqX} y1={sqY+aPx} x2={sqX+aPx} y2={sqY+aPx} stroke={A_STROKE} strokeWidth={2.5} opacity={introOutline}/>
        <line x1={sqX} y1={sqY} x2={b2X} y2={sqY} stroke={A_STROKE} strokeWidth={2.5} opacity={introOutline}/>
        <line x1={sqX+aPx} y1={b2Y+bPx} x2={sqX+aPx} y2={sqY+aPx} stroke={A_STROKE} strokeWidth={2.5} opacity={introOutline}/>
        <line x1={b2X} y1={sqY} x2={sqX+aPx} y2={sqY} stroke={A_STROKE} strokeWidth={2.5} opacity={(1 - removeProgress) * introOutline}/>
        <line x1={sqX+aPx} y1={sqY} x2={sqX+aPx} y2={b2Y+bPx} stroke={A_STROKE} strokeWidth={2.5} opacity={(1 - removeProgress) * introOutline}/>

        <line x1={b2X} y1={sqY} x2={b2X} y2={b2Y+bPx} stroke={A_STROKE} strokeWidth={2.5} opacity={removeProgress}/>
        <line x1={b2X} y1={b2Y+bPx} x2={sqX+aPx} y2={b2Y+bPx} stroke={A_STROKE} strokeWidth={2.5} opacity={removeProgress}/>

        {(inS1 || inS2) && (
          <line x1={tx} y1={ty+th} x2={tx+tw} y2={ty+th}
            stroke={A_STROKE} strokeWidth={1} strokeDasharray="4 4" opacity={(inS2 ? 1 : subT) * 0.5}/>
        )}

        {b2Opacity > 0.01 && (
          <rect x={b2X} y={b2Y} width={bPx} height={bPx}
            fill={B_FILL} stroke={B_STROKE} strokeWidth={2.5} opacity={b2Opacity}/>
        )}

        <text x={aLabelCx} y={aLabelCy} textAnchor="middle" fill={A_TEXT}
          fontSize={aLabelSize} fontWeight={500} fontStyle="italic" fontFamily="Georgia, serif"
          opacity={introLabel}>
          a²
        </text>

        {b2Opacity > 0.01 && (
          <text x={b2X + bPx/2} y={b2Y + bPx/2 + 12} textAnchor="middle" fill={B_TEXT}
            fontSize={32} fontWeight={500} fontStyle="italic" fontFamily="Georgia, serif" opacity={b2Opacity}>
            b²
          </text>
        )}

        {(inS1 || inS2) && (
          <g opacity={inS2 ? 1 : subT}>
            <text x={b2X + bPx/2} y={b2Y + bPx/2 - 4} textAnchor="middle"
              fill={B_TEXT} fontSize={22} fontStyle="italic" fontFamily="Georgia, serif" opacity={0.55}>b²</text>
            <text x={b2X + bPx/2} y={b2Y + bPx/2 + 18} textAnchor="middle"
              fill={B_TEXT} fontSize={13} fontStyle="italic" opacity={0.7}>(removed)</text>
          </g>
        )}

        {lShapeLabelOpacity > 0.01 && (
          <g opacity={lShapeLabelOpacity}>
            <text x={tx + tw/2} y={ty + th/2 + 7} textAnchor="middle"
              fill={A_TEXT} fontSize={20} fontStyle="italic" fontFamily="Georgia, serif">(a − b) · b</text>
            <text x={bx + bw/2} y={by + bh/2 + 8} textAnchor="middle"
              fill={A_TEXT} fontSize={24} fontStyle="italic" fontFamily="Georgia, serif">a · (a − b)</text>
          </g>
        )}

        <Dim x1={sqX} y1={sqY} x2={sqX} y2={sqY+aPx} label="a" offset={32} side={-1} opacity={introDims}/>

        {inS0 && b2Opacity < 0.5 && (
          <Dim x1={sqX} y1={sqY} x2={sqX+aPx} y2={sqY} label="a" offset={32} side={-1} opacity={(1 - b2Opacity) * introDims}/>
        )}
        {(b2Opacity > 0.3 || inS2) && (
          <>
            <Dim x1={sqX} y1={sqY} x2={b2X} y2={sqY} label="a − b" offset={32} side={-1}
              opacity={inS2 ? 1 : b2Opacity}/>
            <Dim x1={b2X} y1={sqY} x2={sqX+aPx} y2={sqY} label="b" offset={32} side={-1} color={B_STROKE}
              opacity={inS2 ? 1 : b2Opacity}/>
            <Dim x1={b2X+bPx} y1={b2Y} x2={b2X+bPx} y2={b2Y+bPx} label="b" offset={32} side={1} color={B_STROKE}
              opacity={inS2 ? 1 : b2Opacity}/>
            <Dim x1={sqX+aPx} y1={sqY+bPx} x2={sqX+aPx} y2={sqY+aPx} label="a − b" offset={32} side={1}
              opacity={inS2 ? 1 : b2Opacity}/>
          </>
        )}
      </g>
    );
  };

  const renderStage2to3 = () => {
    const startCx = topX0 + topW/2;
    const startCy = topY0 + topH/2;
    const liftedCy = startCy + liftDy;
    const endCx = targetX + targetW/2;
    const endCy = targetY + targetH/2;

    const subProgress = stage === 3 ? 1 : subT;

    let cx, cy, angle;
    if (subProgress <= 0.33) {
      const u = subProgress / 0.33;
      cx = startCx;
      cy = startCy + (liftedCy - startCy) * u;
      angle = 0;
    } else if (subProgress <= 0.62) {
      const u = (subProgress - 0.33) / 0.29;
      cx = startCx;
      cy = liftedCy;
      angle = -90 * u;
    } else {
      const u = (subProgress - 0.62) / 0.38;
      cx = startCx + (endCx - startCx) * u;
      cy = liftedCy + (endCy - liftedCy) * u;
      angle = -90;
    }

    const settled = subProgress >= 0.999;

    return (
      <g>
        <rect x={botX} y={botY} width={botW} height={botH}
          fill={A_FILL} stroke={A_STROKE} strokeWidth={2.5}/>
        <text x={botX + botW/2} y={botY + botH/2 + 8} textAnchor="middle"
          fill={A_TEXT} fontSize={24} fontStyle="italic" fontFamily="Georgia, serif">a · (a − b)</text>

        {!settled && (
          <rect x={topX0} y={topY0} width={aPx} height={aPx}
            fill="none" stroke="#bbb" strokeWidth={1} strokeDasharray="2 4"/>
        )}

        {!settled && subProgress > 0.3 && (
          <rect x={targetX} y={targetY} width={targetW} height={targetH}
            fill="none" stroke={A_STROKE} strokeWidth={1} strokeDasharray="4 3" opacity={0.4}/>
        )}

        {settled && (
          <rect x={botX} y={botY} width={botW + targetW} height={botH}
            fill="none" stroke="#222" strokeWidth={2.5}/>
        )}

        <g transform={`translate(${cx},${cy}) rotate(${angle}) translate(${-topW/2},${-topH/2})`}>
          <rect x={0} y={0} width={topW} height={topH}
            fill={A_FILL} stroke={A_STROKE} strokeWidth={2.5}/>
          <text x={topW/2} y={topH/2 + 7} textAnchor="middle"
            fill={A_TEXT} fontSize={18} fontStyle="italic" fontFamily="Georgia, serif">(a − b) · b</text>
        </g>

        {!settled && (
          <>
            <Dim x1={botX} y1={botY} x2={botX} y2={botY+botH} label="a − b" offset={32} side={-1}/>
            <Dim x1={botX} y1={botY+botH} x2={botX+botW} y2={botY+botH} label="a" offset={32} side={1}/>
          </>
        )}
        {settled && (
          <>
            <Dim x1={botX} y1={botY+botH} x2={targetX+targetW} y2={botY+botH} label="a + b" offset={32} side={1}/>
            <Dim x1={targetX+targetW} y1={targetY} x2={targetX+targetW} y2={targetY+targetH} label="a − b" offset={32} side={1}/>
            <Dim x1={botX} y1={botY} x2={botX+botW} y2={botY} label="a" offset={32} side={-1}/>
            <Dim x1={targetX} y1={targetY} x2={targetX+targetW} y2={targetY} label="b" offset={32} side={-1} color={B_STROKE}/>
          </>
        )}
      </g>
    );
  };

  const stepNumber = stage === 0 ? 1 : stage === 1 ? 2 : stage === 2 ? 3 : 4;
  const titles = {
    1: <>
      We start with a square of side <i>a</i>, so its area is <i>a</i>². This is the
      first half of the expression <i>a</i>² − <i>b</i>² that we want to factor —
      our goal is to show geometrically why it equals (<i>a</i>−<i>b</i>)(<i>a</i>+<i>b</i>).
    </>,
    2: <>
      In one corner we mark off a smaller square of side <i>b</i>, with area <i>b</i>².
      We&apos;re not changing anything yet, just identifying the piece we&apos;re about to
      remove. Whatever remains after we take it out will be exactly the
      <i>a</i>² − <i>b</i>² we want to understand.
    </>,
    3: <>
      Remove the small <i>b</i>² square. The L-shape that&apos;s left has area
      <i>a</i>² − <i>b</i>² — the quantity we&apos;re factoring. The L splits naturally
      along a horizontal line into two rectangles: a top strip of size
      (<i>a</i>−<i>b</i>)·<i>b</i>, and a bottom rectangle of size <i>a</i>·(<i>a</i>−<i>b</i>).
      Same total area, just broken into pieces we can move.
    </>,
    4: <>
      Lift the top strip, rotate it 90°, and place it next to the bottom rectangle.
      The two pieces fit together into a single rectangle of size
      (<i>a</i>+<i>b</i>) × (<i>a</i>−<i>b</i>). Cutting and rearranging didn&apos;t change
      the area, so <i>a</i>² − <i>b</i>² = (<i>a</i>+<i>b</i>)(<i>a</i>−<i>b</i>).
    </>,
  };

  const btnStyle = (bg, disabled) => ({
    background: bg, color: "white", border: "none",
    padding: "8px 14px", fontSize: 14, fontFamily: "inherit", borderRadius: 4,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1, minWidth: 44,
  });

  const showCentered = (stage === 0) || (stage === 1) || (stage === 2 && subT < 0.001);
  const showShifted = !showCentered;

  return (
    <div style={{
      background: BG, color: "#222",
      fontFamily: "Georgia, 'Times New Roman', serif",
      padding: 20, minHeight: "100vh", boxSizing: "border-box",
    }}>
      <div style={{maxWidth: 1320, margin: "0 auto"}}>
        <div style={{display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap"}}>

          {/* LEFT: scene + controls (kept together so step panel growth doesn&apos;t push controls) */}
          <div style={{flex: "1 1 560px", minWidth: 320}}>
            <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{display: "block", background: BG}}>
              {showCentered && renderStages0_1_2()}
              {showShifted && renderStage2to3()}
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

          {/* RIGHT: explanations stack */}
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