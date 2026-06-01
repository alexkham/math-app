// /components/visual-tools/scenes/PartialPermutation.jsx
// Scenario #2 — Partial Permutation, P(n,r) = n! / (n−r)!
// Same scaffolding as FullPermutation; r positions instead of n.

import React, {
  useState, useEffect, useRef, useCallback, useMemo,
} from "react";
import {
  // data / constants
  N_MIN, N_MAX, ROW_H_MIN, SVG_W_DEFAULT, COLORS,
  // helpers
  permsR, factorial, getItems, nameOf, tint,
  // theme + shells
  ThemeStyles, VTRoot, PageWrap, HelpBanner, SceneGrid, SceneSvgWrap,
  // svg primitives
  Ball, ItemDefs,
  // html primitives
  Chip, ChipAndName, ListWithChips,
  // control atoms
  ControlBar, Divider, ModeSwitch, NStepper, RStepper,
  TransportButtons, SpeedSlider,
  // info pane
  RightPanel, InfoPanelHeader, StepRow,
} from "../shared.jsx";

// ── Card layout: MINI_R chosen by r (items per outcome) ─────────────
// Fewer items per card → bigger balls. Cols auto unless overridden.
const CARD_CFG_BY_R = {
  1: { MINI_R: 22 },
  2: { MINI_R: 18 },
  3: { MINI_R: 16 },
  4: { MINI_R: 11 },
  5: { MINI_R: 10 },
};

// (n_r) → forced cols for nicer symmetric grids in known-tight cases.
const COLS_OVERRIDE = {
  "3_2": 2,
  "3_3": 2,
  "4_3": 3,
  "4_4": 3,
};

function getCardCfg(n, r) {
  const base = CARD_CFG_BY_R[r] || { MINI_R: 10 };
  const forced = COLS_OVERRIDE[`${n}_${r}`];
  return { MINI_R: base.MINI_R, cols: forced != null ? forced : null };
}

// ── SVG geometry constants ──────────────────────────────────────────
const SVG_W = SVG_W_DEFAULT;
const PAD = 30;
const SRC_R = 26;
const SRC_Y = 56;
const SRC_SP = 80;
const BUILD_R = 26;
const BUILD_SP = 70;
const BUILD_Y_OFFSET = 130;
const RESULTS_TOP_OFFSET = 64;

export default function PartialPermutation() {
  // ── State ─────────────────────────────────────────────
  const [n, setNRaw] = useState(3);
  const [r, setR] = useState(2);
  const [mode, setMode] = useState("balls");
  const [outcomeIdx, setOutcomeIdx] = useState(0);
  const [slotsFilled, setSlotsFilled] = useState(0);
  const [animState, setAnimState] = useState("idle");
  const [completed, setCompleted] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);
  const rafsRef = useRef([]);

  const clearTimers = useCallback(() => {
    clearTimeout(timerRef.current);
    rafsRef.current.forEach((rid) => cancelAnimationFrame(rid));
    rafsRef.current = [];
  }, []);

  // Clamp r when n decreases below r
  const setN = useCallback((newN) => {
    if (r > newN) setR(newN);
    setNRaw(newN);
  }, [r]);

  // ── Derived ───────────────────────────────────────────
  const items = useMemo(() => getItems(n), [n]);
  const itemIds = useMemo(() => items.map((i) => i.id), [items]);
  const outcomes = useMemo(() => permsR(itemIds, r), [itemIds, r]);
  const itemsPerOutcome = r;
  const outcomesPerGroup = factorial(n - 1) / factorial(n - r);

  // Reset when n or r changes
  useEffect(() => {
    clearTimers();
    setOutcomeIdx(0);
    setSlotsFilled(0);
    setAnimState("idle");
    setCompleted([]);
    setPlaying(false);
  }, [n, r, clearTimers]);

  const flyMs = Math.round(420 / speed);
  const landMs = Math.round(200 / speed);
  const completeMs = Math.round(700 / speed);

  // ── Play loop ─────────────────────────────────────────
  useEffect(() => {
    if (!playing) return;
    clearTimers();

    if (animState === "idle") {
      setSlotsFilled(0);
      setAnimState("spawn");
    } else if (animState === "spawn") {
      rafsRef.current.push(
        requestAnimationFrame(() => {
          rafsRef.current.push(
            requestAnimationFrame(() => setAnimState("fly"))
          );
        })
      );
    } else if (animState === "fly") {
      timerRef.current = setTimeout(() => {
        setSlotsFilled((s) => s + 1);
        setAnimState("landed");
      }, flyMs);
    } else if (animState === "landed") {
      timerRef.current = setTimeout(() => {
        if (slotsFilled < itemsPerOutcome) setAnimState("spawn");
        else setAnimState("complete");
      }, landMs);
    } else if (animState === "complete") {
      timerRef.current = setTimeout(() => {
        setCompleted((prev) => [...prev, outcomes[outcomeIdx]]);
        if (outcomeIdx + 1 < outcomes.length) {
          setOutcomeIdx((i) => i + 1);
          setSlotsFilled(0);
          setAnimState("idle");
        } else {
          setAnimState("done");
          setPlaying(false);
        }
      }, completeMs);
    }

    return () => clearTimers();
  }, [
    playing, animState, slotsFilled, outcomeIdx, outcomes,
    itemsPerOutcome, flyMs, landMs, completeMs, clearTimers,
  ]);

  // ── Manual step forward ──────────────────────────────
  const stepForward = useCallback(() => {
    clearTimers();
    setPlaying(false);
    if (animState === "done") return;

    const triggerFly = () => {
      setAnimState("spawn");
      rafsRef.current.push(
        requestAnimationFrame(() => {
          rafsRef.current.push(
            requestAnimationFrame(() => {
              setAnimState("fly");
              timerRef.current = setTimeout(() => {
                setSlotsFilled((s) => s + 1);
                setAnimState("landed");
              }, flyMs);
            })
          );
        })
      );
    };

    if (animState === "idle") {
      setSlotsFilled(0);
      triggerFly();
      return;
    }
    if (animState === "landed") {
      if (slotsFilled < itemsPerOutcome) triggerFly();
      else setAnimState("complete");
      return;
    }
    if (animState === "complete") {
      setCompleted((prev) => [...prev, outcomes[outcomeIdx]]);
      if (outcomeIdx + 1 < outcomes.length) {
        setOutcomeIdx((i) => i + 1);
        setSlotsFilled(0);
        setAnimState("idle");
      } else {
        setAnimState("done");
      }
      return;
    }
    if (animState === "spawn" || animState === "fly") {
      setSlotsFilled((s) => s + 1);
      setAnimState("landed");
    }
  }, [
    animState, slotsFilled, outcomeIdx, outcomes,
    itemsPerOutcome, flyMs, clearTimers,
  ]);

  const stepBack = useCallback(() => {
    clearTimers();
    setPlaying(false);

    if (animState === "spawn" || animState === "fly") {
      setAnimState(slotsFilled > 0 ? "landed" : "idle");
      return;
    }
    if (animState === "complete") {
      setAnimState("landed");
      return;
    }
    if (animState === "landed") {
      if (slotsFilled > 1) setSlotsFilled((s) => s - 1);
      else {
        setSlotsFilled(0);
        setAnimState("idle");
      }
      return;
    }
    if (animState === "idle" || animState === "done") {
      if (outcomeIdx > 0 || completed.length > 0) {
        if (completed.length > 0) setCompleted((prev) => prev.slice(0, -1));
        if (outcomeIdx > 0) setOutcomeIdx((i) => i - 1);
        setSlotsFilled(itemsPerOutcome);
        setAnimState("complete");
      }
    }
  }, [animState, slotsFilled, outcomeIdx, completed, itemsPerOutcome, clearTimers]);

  const togglePlay = useCallback(() => {
    if (playing) {
      setPlaying(false);
      clearTimers();
    } else if (animState !== "done") {
      setPlaying(true);
    }
  }, [playing, animState, clearTimers]);

  const reset = useCallback(() => {
    clearTimers();
    setOutcomeIdx(0);
    setSlotsFilled(0);
    setAnimState("idle");
    setCompleted([]);
    setPlaying(false);
  }, [clearTimers]);

  // ── Layout ────────────────────────────────────────────
  const layout = useMemo(() => {
    const cfg = getCardCfg(n, r);
    const MINI_R = cfg.MINI_R;
    const MINI_SP = MINI_R * 2 + 3;
    const CARD_PAD_X = 8;
    const CARD_W = CARD_PAD_X * 2 + itemsPerOutcome * MINI_SP;
    const CARD_H = 12 + MINI_R * 2;
    const CARD_GAP_X = 6;
    const CARD_GAP_Y = 6;
    const GRP_LBL_W = 36;
    const ACCENT_W = 3;
    const GRP_LEFT_M = PAD + GRP_LBL_W + ACCENT_W + 8;
    const availW = SVG_W - GRP_LEFT_M - PAD;
    const cols = cfg.cols != null
      ? cfg.cols
      : Math.max(1, Math.floor((availW + CARD_GAP_X) / (CARD_W + CARD_GAP_X)));
    const rowsPerGroup = Math.ceil(outcomesPerGroup / cols);
    const TOP_PAD = 14;
    const fullCardsBlockH = rowsPerGroup * (CARD_H + CARD_GAP_Y) - CARD_GAP_Y;
    const fullTintH = fullCardsBlockH + 2 * TOP_PAD;
    const ROW_H = Math.max(ROW_H_MIN, fullTintH);

    const srcStartX = (SVG_W - (items.length - 1) * SRC_SP) / 2;
    const srcPos = items.map((_, i) => ({ x: srcStartX + i * SRC_SP, y: SRC_Y }));
    const buildY = SRC_Y + BUILD_Y_OFFSET;
    const buildStartX = (SVG_W - (itemsPerOutcome - 1) * BUILD_SP) / 2;
    const buildPos = Array.from({ length: itemsPerOutcome }, (_, i) => ({
      x: buildStartX + i * BUILD_SP, y: buildY,
    }));
    const resultsTop = buildY + BUILD_R + RESULTS_TOP_OFFSET;

    return {
      MINI_R, MINI_SP, CARD_PAD_X, CARD_W, CARD_H, CARD_GAP_X, CARD_GAP_Y,
      GRP_LBL_W, ACCENT_W, GRP_LEFT_M, cols, rowsPerGroup,
      TOP_PAD, fullCardsBlockH, fullTintH, ROW_H,
      srcPos, buildPos, buildY, resultsTop,
    };
  }, [n, r, items, itemsPerOutcome, outcomesPerGroup]);

  // ── Step status ───────────────────────────────────────
  const stepStatuses = useMemo(() => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      const k = completed.filter((o) => o[0] === i).length;
      let status;
      if (k === outcomesPerGroup) status = "done";
      else if (animState === "done") status = "done";
      else if (k > 0) status = "current";
      else if (animState !== "idle") {
        const building = outcomes[outcomeIdx];
        status = building && building[0] === i ? "current" : "pending";
      } else status = "pending";
      arr.push(status);
    }
    return arr;
  }, [completed, outcomes, outcomeIdx, animState, n, outcomesPerGroup]);

  const visibleSteps = useMemo(
    () => stepStatuses
      .map((s, i) => (s !== "pending" ? i : -1))
      .filter((i) => i >= 0),
    [stepStatuses]
  );

  const svgH =
    layout.resultsTop +
    Math.max(0, visibleSteps.length) * (layout.ROW_H + 8) -
    (visibleSteps.length > 0 ? 8 : 0) +
    24;

  // ── Build-area state ──────────────────────────────────
  const currentOutcome = outcomes[outcomeIdx] || [];
  const flyingSlotIdx =
    animState === "spawn" || animState === "fly" ? slotsFilled : -1;
  const isFlying = animState === "fly";
  const atSource = animState === "spawn";

  const dimmed = new Set();
  for (let i = 0; i < slotsFilled; i++) dimmed.add(currentOutcome[i]);
  if (flyingSlotIdx >= 0 && isFlying) dimmed.add(currentOutcome[flyingSlotIdx]);

  // ── Header texts ──────────────────────────────────────
  const totalCount = outcomes.length;
  const formulaShort = `P(${n}, ${r}) = ${totalCount}`;
  const longSeq = Array.from({ length: r }, (_, i) => n - i).join(" × ");
  const formulaText = `P(${n}, ${r}) = ${n}! / (${n}−${r})! = ${longSeq} = ${totalCount}`;

  let statusText;
  if (animState === "done") {
    statusText = `Complete · ${totalCount} / ${totalCount}`;
  } else if (animState === "idle" && completed.length === 0) {
    statusText = "Press Play or Step to begin";
  } else {
    const stepIdx = currentOutcome[0];
    const item = items[stepIdx];
    const k =
      completed.filter((o) => o[0] === stepIdx).length +
      (animState === "complete" ? 1 : 0);
    statusText = `Step ${stepIdx + 1} (${nameOf(item, mode)}): ${k} / ${outcomesPerGroup}`;
  }

  // ── Narration builder ─────────────────────────────────
  const narrationFor = (stepIdx) => {
    const item = items[stepIdx];
    const remaining = items.filter((_, idx) => idx !== stepIdx);
    const M = outcomesPerGroup;
    const seq = r > 1
      ? Array.from({ length: r - 1 }, (_, i) => n - 1 - i).join(" × ")
      : "1";

    if (r === 1) {
      return (
        <>
          Position 1 is locked to <ChipAndName item={item} mode={mode} />.
          {" "}With only one position to fill, the outcome is just{" "}
          <ChipAndName item={item} mode={mode} /> alone — <b>1</b> permutation here.
        </>
      );
    }

    const remainCount = r - 1;
    const verb = remainCount === 1 ? "is" : "are";
    const noun = remainCount === 1 ? "position" : "positions";
    const wayWord = M === 1 ? "way" : "ways";

    return (
      <>
        Position 1 is locked to <ChipAndName item={item} mode={mode} />.
        {" "}The next <b>{remainCount}</b> {noun} {verb} filled from{" "}
        <ListWithChips items={remaining} mode={mode} conjunction="or" />
        {" "}in <b>{seq} = {M}</b> {wayWord}.
      </>
    );
  };

  // ── Render ────────────────────────────────────────────
  return (
    <VTRoot>
      <ThemeStyles />
      <PageWrap>
        <HelpBanner>
          Press <b>▶ Play</b> to build all <b>P(n, r)</b> arrangements, or{" "}
          <b>Step ▶</b> to advance one ball at a time. Switch{" "}
          <b>balls / letters</b> and adjust <b>n</b> and <b>r</b>.
        </HelpBanner>

        <ControlBar>
          <ModeSwitch value={mode} onChange={setMode} />
          <Divider />
          <NStepper value={n} onChange={setN} />
          <RStepper value={r} onChange={setR} min={1} max={n} />
          <Divider />
          <TransportButtons
            onBack={stepBack}
            onStep={stepForward}
            onPlay={togglePlay}
            onReset={reset}
            playing={playing}
            done={animState === "done"}
          />
          <Divider />
          <SpeedSlider value={speed} onChange={setSpeed} />
        </ControlBar>

        <SceneGrid>
          {/* ───── Left: SVG scene ───── */}
          <SceneSvgWrap>
            <svg
              className="vt-scene-svg"
              width={SVG_W}
              height={svgH}
              viewBox={`0 0 ${SVG_W} ${svgH}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <ItemDefs items={items} />
              <rect width={SVG_W} height={svgH} fill="#ffffff" />

              {/* Top-right: formula + status */}
              <text
                x={SVG_W - PAD} y={26} textAnchor="end"
                fill={COLORS.accentDeep} fontSize="12" fontWeight="600"
                fontFamily="'JetBrains Mono',monospace"
              >
                {formulaShort}
              </text>
              <text
                x={SVG_W - PAD} y={44} textAnchor="end"
                fill={COLORS.highlight} fontSize="11" fontWeight="600"
                fontFamily="'JetBrains Mono',monospace"
              >
                {statusText}
              </text>

              {/* SOURCE label */}
              <text
                x={PAD} y={SRC_Y - SRC_R - 14}
                fill={COLORS.textDim} fontSize="10" fontWeight="600"
                fontFamily="'JetBrains Mono',monospace" letterSpacing="2"
              >
                SOURCE (n = {n})
              </text>

              {/* Source balls */}
              {items.map((it, i) => (
                <g
                  key={it.id}
                  opacity={dimmed.has(it.id) ? 0.22 : 1}
                  style={{ transition: "opacity 0.25s" }}
                >
                  <Ball
                    item={it}
                    cx={layout.srcPos[i].x}
                    cy={layout.srcPos[i].y}
                    r={SRC_R}
                    mode={mode}
                  />
                </g>
              ))}

              {/* BUILD label */}
              <text
                x={PAD} y={layout.buildY - BUILD_R - 14}
                fill={COLORS.textDim} fontSize="10" fontWeight="600"
                fontFamily="'JetBrains Mono',monospace" letterSpacing="2"
              >
                BUILD AREA (r = {r})
              </text>

              {/* Build slot outlines (r slots) */}
              {layout.buildPos.map((p, i) => (
                <g key={i}>
                  <circle
                    cx={p.x} cy={p.y} r={BUILD_R + 3}
                    fill="none" stroke={COLORS.borderStrong}
                    strokeWidth="1.5" strokeDasharray="5 3" opacity="0.45"
                  />
                  <text
                    x={p.x} y={p.y + BUILD_R + 18} textAnchor="middle"
                    fill={COLORS.textFaint} fontSize="9"
                    fontFamily="'JetBrains Mono',monospace"
                  >
                    #{i + 1}
                  </text>
                </g>
              ))}

              {/* Dotted guide line during spawn/fly */}
              {flyingSlotIdx >= 0 && flyingSlotIdx < currentOutcome.length && (() => {
                const srcId = currentOutcome[flyingSlotIdx];
                const s = layout.srcPos[srcId];
                const t = layout.buildPos[flyingSlotIdx];
                return (
                  <line
                    x1={s.x} y1={s.y + SRC_R + 2}
                    x2={t.x} y2={t.y - BUILD_R - 2}
                    stroke={items[srcId].color}
                    strokeWidth="2" strokeDasharray="5 4" opacity="0.7"
                  />
                );
              })()}

              {/* Landed balls */}
              {Array.from({ length: slotsFilled }).map((_, i) => {
                if (i >= currentOutcome.length) return null;
                const it = items[currentOutcome[i]];
                const t = layout.buildPos[i];
                return (
                  <Ball
                    key={`landed-${outcomeIdx}-${i}`}
                    item={it} cx={t.x} cy={t.y} r={BUILD_R} mode={mode}
                  />
                );
              })}

              {/* Flying / spawning ball */}
              {flyingSlotIdx >= 0 && flyingSlotIdx < currentOutcome.length && (() => {
                const it = items[currentOutcome[flyingSlotIdx]];
                const s = layout.srcPos[currentOutcome[flyingSlotIdx]];
                const t = layout.buildPos[flyingSlotIdx];
                const cx = atSource ? s.x : t.x;
                const cy = atSource ? s.y : t.y;
                const transform = `translate(${cx - t.x}px, ${cy - t.y}px)`;
                const transition = isFlying
                  ? `transform ${flyMs}ms cubic-bezier(0.34,1.4,0.64,1)`
                  : "none";
                return (
                  <Ball
                    key={`fly-${outcomeIdx}-${flyingSlotIdx}-${animState}`}
                    item={it} cx={t.x} cy={t.y} r={BUILD_R} mode={mode}
                    transform={transform} transition={transition}
                  />
                );
              })()}

              {/* Complete flash */}
              {animState === "complete" && itemsPerOutcome > 0 && (
                <rect
                  x={layout.buildPos[0].x - BUILD_R - 10}
                  y={layout.buildY - BUILD_R - 8}
                  width={(itemsPerOutcome - 1) * BUILD_SP + BUILD_R * 2 + 20}
                  height={BUILD_R * 2 + 16}
                  rx="12" fill="none"
                  stroke={COLORS.highlight} strokeWidth="2.2" opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.7;0.25;0.7"
                    dur="0.8s"
                    repeatCount="indefinite"
                  />
                </rect>
              )}

              {/* COMPLETED label + count */}
              {(visibleSteps.length > 0 ||
                animState !== "idle" ||
                completed.length > 0) && (
                <>
                  <text
                    x={PAD} y={layout.resultsTop - 14}
                    fill={COLORS.textDim} fontSize="10" fontWeight="600"
                    fontFamily="'JetBrains Mono',monospace" letterSpacing="2"
                  >
                    COMPLETED
                  </text>
                  <text
                    x={SVG_W - PAD} y={layout.resultsTop - 14}
                    textAnchor="end" fill={COLORS.accent}
                    fontSize="11" fontWeight="600"
                    fontFamily="'JetBrains Mono',monospace"
                  >
                    {completed.length} / {totalCount}
                  </text>
                </>
              )}

              {/* Group rows */}
              {visibleSteps.map((stepIdx, vi) => {
                const stepItem = items[stepIdx];
                const rowY = layout.resultsTop + vi * (layout.ROW_H + 8);
                const cards = completed.filter((o) => o[0] === stepIdx);
                const cardsStartY =
                  rowY + (layout.ROW_H - layout.fullCardsBlockH) / 2;
                const avX = PAD + layout.GRP_LBL_W / 2;
                const avY = cardsStartY + layout.fullCardsBlockH / 2;

                return (
                  <g key={stepIdx}>
                    <rect
                      x={layout.GRP_LEFT_M - 8} y={rowY}
                      width={SVG_W - layout.GRP_LEFT_M - PAD + 16}
                      height={layout.ROW_H} rx="10"
                      fill={tint(stepItem.color, 0.08)}
                    />
                    <rect
                      x={PAD + layout.GRP_LBL_W + 2} y={rowY + 8}
                      width={layout.ACCENT_W} height={layout.ROW_H - 16}
                      rx="1.5" fill={stepItem.color} opacity="0.9"
                    />
                    {mode === "balls" ? (
                      <>
                        <circle cx={avX} cy={avY} r="13" fill={`url(#bg-${stepItem.id})`} />
                        <text
                          x={avX} y={avY + 1}
                          textAnchor="middle" dominantBaseline="central"
                          fill="#fff" fontSize="10" fontWeight="700"
                          fontFamily="'JetBrains Mono',monospace"
                        >
                          {stepItem.id + 1}
                        </text>
                      </>
                    ) : (
                      <text
                        x={avX} y={avY + 1}
                        textAnchor="middle" dominantBaseline="central"
                        fill={stepItem.color} fontSize="18" fontWeight="700"
                        fontFamily="'JetBrains Mono',monospace"
                      >
                        {stepItem.letter}
                      </text>
                    )}
                    {cards.map((out, ci) => {
                      const col = ci % layout.cols;
                      const row = Math.floor(ci / layout.cols);
                      const cx =
                        layout.GRP_LEFT_M +
                        col * (layout.CARD_W + layout.CARD_GAP_X);
                      const cy =
                        cardsStartY + row * (layout.CARD_H + layout.CARD_GAP_Y);
                      return (
                        <g key={ci}>
                          <rect
                            x={cx} y={cy}
                            width={layout.CARD_W} height={layout.CARD_H}
                            rx="6" fill="#ffffff"
                            stroke={COLORS.border} strokeWidth="1"
                          />
                          {out.map((itmId, j) => {
                            const ball = items[itmId];
                            const bx =
                              cx +
                              layout.CARD_PAD_X +
                              layout.MINI_R +
                              j * layout.MINI_SP;
                            const by = cy + layout.CARD_H / 2;
                            return (
                              <Ball
                                key={j}
                                item={ball}
                                cx={bx} cy={by}
                                r={layout.MINI_R} mode={mode}
                              />
                            );
                          })}
                        </g>
                      );
                    })}
                  </g>
                );
              })}
            </svg>
          </SceneSvgWrap>

          {/* ───── Right: info panel ───── */}
          <RightPanel>
            <InfoPanelHeader
              minHeight={layout.resultsTop}
              title="Building partial permutations"
              formula={formulaText}
              intro={
                <>
                  Choose and arrange <b>r</b> items out of <b>n</b> — order matters,
                  no repetition. Each step builds the family of arrangements starting
                  with one fixed first item; there are <b>n</b> such families, each
                  containing <b>(n−1)! / (n−r)!</b> arrangements.
                </>
              }
            />
            <div className="vt-right-rows">
              {visibleSteps.map((i) => {
                const item = items[i];
                const status = stepStatuses[i];
                const k = completed.filter((o) => o[0] === i).length;
                const progressText =
                  status === "done"
                    ? `${outcomesPerGroup} / ${outcomesPerGroup} ✓`
                    : `${k} / ${outcomesPerGroup}`;

                return (
                  <StepRow
                    key={i}
                    status={status}
                    stepNum={i + 1}
                    headerLabel={
                      <>
                        First item: <Chip item={item} mode={mode} />
                        <b>{nameOf(item, mode)}</b>
                      </>
                    }
                    progressText={progressText}
                    narration={narrationFor(i)}
                    rowH={layout.ROW_H}
                  />
                );
              })}
            </div>
          </RightPanel>
        </SceneGrid>
      </PageWrap>
    </VTRoot>
  );
}