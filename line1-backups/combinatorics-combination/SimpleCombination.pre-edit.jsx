// /components/visual-tools/scenes/SimpleCombination.jsx
// Scenario #6 — Simple Combination, C(n, r) = n! / (r! · (n−r)!).
// Same animation shell as PartialPermutation, but outcomes are
// unordered subsets (canonically sorted) from shared.combinations().
// Groups are indexed by the smallest element of the subset; group
// sizes vary as C(n−1−i, r−1), so ROW_H is computed per group.

import React, {
  useState, useEffect, useRef, useCallback, useMemo,
} from "react";
import {
  N_MIN, N_MAX, ROW_H_MIN, SVG_W_DEFAULT, COLORS,
  combinations, factorial, getItems, nameOf, tint,
  ThemeStyles, VTRoot, PageWrap, HelpBanner, SceneGrid, SceneSvgWrap,
  Ball, ItemDefs,
  Chip, ChipAndName, ListWithChips,
  ControlBar, Divider, ModeSwitch, NStepper, RStepper,
  TransportButtons, SpeedSlider,
  RightPanel, InfoPanelHeader, StepRow,
} from "../shared.jsx";

// Binomial coefficient (local helper; used for per-group sizes).
function binomial(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}

// Card layout keyed by r (items per card).
const CARD_CFG_BY_R = {
  1: { MINI_R: 22 },
  2: { MINI_R: 18 },
  3: { MINI_R: 16 },
  4: { MINI_R: 11 },
  5: { MINI_R: 10 },
};
const COLS_OVERRIDE = {
  "4_3": 3,
  "5_3": 3,
};
function getCardCfg(n, r) {
  const base = CARD_CFG_BY_R[r] || { MINI_R: 10 };
  const forced = COLS_OVERRIDE[`${n}_${r}`];
  return { MINI_R: base.MINI_R, cols: forced != null ? forced : null };
}

const SVG_W = SVG_W_DEFAULT;
const PAD = 30;
const SRC_R = 26;
const SRC_Y = 56;
const SRC_SP = 80;
const BUILD_R = 26;
const BUILD_SP = 70;
const BUILD_Y_OFFSET = 130;
const RESULTS_TOP_OFFSET = 64;

export default function SimpleCombination() {
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

  const setN = useCallback((newN) => {
    if (r > newN) setR(newN);
    setNRaw(newN);
  }, [r]);

  // ── Derived ───────────────────────────────────────────
  const items = useMemo(() => getItems(n), [n]);
  const itemIds = useMemo(() => items.map((i) => i.id), [items]);
  const outcomes = useMemo(() => combinations(itemIds, r), [itemIds, r]);
  const itemsPerOutcome = r;
  const totalCount = outcomes.length;

  // Valid first items: 0..n−r (any greater would leave too few above it)
  const distinctFirsts = useMemo(
    () => Array.from({ length: Math.max(0, n - r + 1) }, (_, i) => i),
    [n, r]
  );
  const groupSizes = useMemo(
    () => distinctFirsts.map((i) => binomial(n - 1 - i, r - 1)),
    [distinctFirsts, n, r]
  );

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

  // ── Manual step forward / back ───────────────────────
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

    if (animState === "idle") { setSlotsFilled(0); triggerFly(); return; }
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
      } else setAnimState("done");
      return;
    }
    if (animState === "spawn" || animState === "fly") {
      setSlotsFilled((s) => s + 1);
      setAnimState("landed");
    }
  }, [animState, slotsFilled, outcomeIdx, outcomes, itemsPerOutcome, flyMs, clearTimers]);

  const stepBack = useCallback(() => {
    clearTimers();
    setPlaying(false);
    if (animState === "spawn" || animState === "fly") {
      setAnimState(slotsFilled > 0 ? "landed" : "idle"); return;
    }
    if (animState === "complete") { setAnimState("landed"); return; }
    if (animState === "landed") {
      if (slotsFilled > 1) setSlotsFilled((s) => s - 1);
      else { setSlotsFilled(0); setAnimState("idle"); }
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
    if (playing) { setPlaying(false); clearTimers(); }
    else if (animState !== "done") setPlaying(true);
  }, [playing, animState, clearTimers]);

  const reset = useCallback(() => {
    clearTimers();
    setOutcomeIdx(0); setSlotsFilled(0);
    setAnimState("idle"); setCompleted([]); setPlaying(false);
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
    const TOP_PAD = 14;

    const groupBlocks = groupSizes.map((sz) => {
      const rows = Math.max(1, Math.ceil(sz / cols));
      const blockH = rows * (CARD_H + CARD_GAP_Y) - CARD_GAP_Y;
      const rowH = Math.max(ROW_H_MIN, blockH + 2 * TOP_PAD);
      return { rows, blockH, rowH };
    });

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
      GRP_LBL_W, ACCENT_W, GRP_LEFT_M, cols, TOP_PAD,
      groupBlocks, srcPos, buildPos, buildY, resultsTop,
    };
  }, [n, r, items, itemsPerOutcome, groupSizes]);

  // ── Step status per group ────────────────────────────
  const stepStatuses = useMemo(() => {
    return distinctFirsts.map((firstId, gi) => {
      const k = completed.filter((o) => o[0] === firstId).length;
      const size = groupSizes[gi];
      if (k === size) return "done";
      if (animState === "done") return "done";
      if (k > 0) return "current";
      if (animState !== "idle") {
        const building = outcomes[outcomeIdx];
        return building && building[0] === firstId ? "current" : "pending";
      }
      return "pending";
    });
  }, [distinctFirsts, groupSizes, completed, animState, outcomes, outcomeIdx]);

  const visibleSteps = useMemo(
    () => stepStatuses.map((s, i) => (s !== "pending" ? i : -1)).filter((i) => i >= 0),
    [stepStatuses]
  );

  const visibleOffsets = useMemo(() => {
    const offs = [];
    let acc = 0;
    for (const gi of visibleSteps) {
      offs.push(acc);
      acc += layout.groupBlocks[gi].rowH + 8;
    }
    return { offsets: offs, total: Math.max(0, acc - 8) };
  }, [visibleSteps, layout.groupBlocks]);

  const svgH = layout.resultsTop + visibleOffsets.total + 24;

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
  const formulaShort = `C(${n}, ${r}) = ${totalCount}`;
  const formulaText = (
    <>
      C({n}, {r}) = {n}! / ({r}! · ({n}−{r})!) = {totalCount}
    </>
  );

  let statusText;
  if (animState === "done") {
    statusText = `Complete · ${totalCount} / ${totalCount}`;
  } else if (animState === "idle" && completed.length === 0) {
    statusText = "Press Play or Step to begin";
  } else {
    const firstId = currentOutcome[0];
    const gi = distinctFirsts.indexOf(firstId);
    const sz = gi >= 0 ? groupSizes[gi] : 0;
    const item = items[firstId];
    const k = completed.filter((o) => o[0] === firstId).length +
              (animState === "complete" ? 1 : 0);
    statusText = `Group ${nameOf(item, mode)}: ${k} / ${sz}`;
  }

  // Narration per group
  const narrationFor = (gi) => {
    const firstId = distinctFirsts[gi];
    const item = items[firstId];
    const larger = items.slice(firstId + 1);
    const M = groupSizes[gi];
    const remN = r - 1;

    if (r === 1) {
      return (
        <>
          The subset is just <ChipAndName item={item} mode={mode} /> alone —
          {" "}<b>1</b> subset here.
        </>
      );
    }

    if (larger.length === 0) {
      return (
        <>
          Smallest item is <ChipAndName item={item} mode={mode} /> — the
          subset is fully determined.
        </>
      );
    }

    return (
      <>
        Smallest item is <ChipAndName item={item} mode={mode} />.
        {" "}Pick the remaining <b>{remN}</b> from{" "}
        <ListWithChips items={larger} mode={mode} conjunction="and" />:
        {" "}<b>C({n - 1 - firstId}, {remN}) = {M}</b> subset{M === 1 ? "" : "s"}.
      </>
    );
  };

  // ── Render ────────────────────────────────────────────
  return (
    <VTRoot>
      <ThemeStyles />
      <PageWrap>
        <HelpBanner>
          Press <b>▶ Play</b> to build all <b>C(n, r)</b> subsets, or{" "}
          <b>Step ▶</b> to advance one ball at a time. Subsets are unordered —
          balls are shown in canonical order, smallest first.
        </HelpBanner>

        <ControlBar>
          <ModeSwitch value={mode} onChange={setMode} />
          <Divider />
          <NStepper value={n} onChange={setN} />
          <RStepper
            value={r}
            onChange={setR}
            min={1}
            max={n}
            tip="Number of items to choose (order doesn't matter, no repetition)"
          />
          <Divider />
          <TransportButtons
            onBack={stepBack} onStep={stepForward}
            onPlay={togglePlay} onReset={reset}
            playing={playing} done={animState === "done"}
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
                BUILD SET (size r = {r})
              </text>

              {/* Build slot outlines — no index labels (order doesn't matter) */}
              {layout.buildPos.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x} cy={p.y} r={BUILD_R + 3}
                  fill="none" stroke={COLORS.borderStrong}
                  strokeWidth="1.5" strokeDasharray="5 3" opacity="0.45"
                />
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
              {(visibleSteps.length > 0 || animState !== "idle" || completed.length > 0) && (
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
              {visibleSteps.map((gi, vi) => {
                const firstId = distinctFirsts[gi];
                const stepItem = items[firstId];
                const block = layout.groupBlocks[gi];
                const rowY = layout.resultsTop + visibleOffsets.offsets[vi];
                const cards = completed.filter((o) => o[0] === firstId);
                const cardsStartY = rowY + (block.rowH - block.blockH) / 2;
                const avX = PAD + layout.GRP_LBL_W / 2;
                const avY = cardsStartY + block.blockH / 2;

                return (
                  <g key={gi}>
                    <rect
                      x={layout.GRP_LEFT_M - 8} y={rowY}
                      width={SVG_W - layout.GRP_LEFT_M - PAD + 16}
                      height={block.rowH} rx="10"
                      fill={tint(stepItem.color, 0.08)}
                    />
                    <rect
                      x={PAD + layout.GRP_LBL_W + 2} y={rowY + 8}
                      width={layout.ACCENT_W} height={block.rowH - 16}
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
                      const cx = layout.GRP_LEFT_M + col * (layout.CARD_W + layout.CARD_GAP_X);
                      const cy = cardsStartY + row * (layout.CARD_H + layout.CARD_GAP_Y);
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
                            const bx = cx + layout.CARD_PAD_X + layout.MINI_R + j * layout.MINI_SP;
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
              title="Simple combinations"
              formula={formulaText}
              intro={
                <>
                  Choose <b>r</b> items from <b>n</b> distinct items — order does
                  not matter, no repetition. Each subset is counted <b>r!</b>{" "}
                  times among the partial permutations, so{" "}
                  <b>C(n, r) = P(n, r) / r! = n! / (r! · (n−r)!)</b>.
                </>
              }
            />
            <div className="vt-right-rows">
              {visibleSteps.map((gi) => {
                const firstId = distinctFirsts[gi];
                const item = items[firstId];
                const status = stepStatuses[gi];
                const sz = groupSizes[gi];
                const k = completed.filter((o) => o[0] === firstId).length;
                const progressText = status === "done"
                  ? `${sz} / ${sz} ✓`
                  : `${k} / ${sz}`;
                return (
                  <StepRow
                    key={gi}
                    status={status}
                    stepNum={gi + 1}
                    headerLabel={
                      <>
                        Smallest item: <Chip item={item} mode={mode} />
                        <b>{nameOf(item, mode)}</b>
                      </>
                    }
                    progressText={progressText}
                    narration={narrationFor(gi)}
                    rowH={layout.groupBlocks[gi].rowH}
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