// /components/visual-tools/scenes/CircularPermutation.jsx
// Scenario #4 — Circular Permutation, (n−1)!.
// One item is anchored at the top of the build ring to factor out
// rotational symmetry; the remaining n−1 are permuted around it.

import React, {
  useState, useEffect, useRef, useCallback, useMemo,
} from "react";
import {
  N_MIN, N_MAX, ROW_H_MIN, SVG_W_DEFAULT, COLORS,
  permsAll, factorial, getItems, nameOf,
  ThemeStyles, VTRoot, PageWrap, HelpBanner, SceneGrid, SceneSvgWrap,
  Ball, ItemDefs,
  Chip, ChipAndName, ListWithChips,
  ControlBar, Divider, ModeSwitch, NStepper,
  TransportButtons, SpeedSlider,
  RightPanel, InfoPanelHeader, StepRow,
} from "../shared.jsx";

const SVG_W = SVG_W_DEFAULT;
const PAD = 30;
const SRC_R = 26;
const SRC_Y = 56;
const SRC_SP = 80;

// Build ring
const BUILD_RING_R = 78;
const BUILD_BALL_R = 22;
const BUILD_CX = SVG_W / 2;
const BUILD_CY = SRC_Y + 168;

// Results grid
const RESULTS_TOP_OFFSET = 60;
const CARD_GAP = 10;
const RESULTS_BOTTOM_PAD = 24;

const CARD_CFG = {
  3: { CARD_SIZE: 110, BALL_R: 14, cols: 2 },
  4: { CARD_SIZE: 90,  BALL_R: 12, cols: 3 },
  5: { CARD_SIZE: 72,  BALL_R: 9,  cols: 6 },
};

function ringPos(cx, cy, ringR, i, total) {
  // Position i (0-based), starting from top, going clockwise
  const angle = -Math.PI / 2 + (2 * Math.PI * i) / total;
  return {
    x: cx + ringR * Math.cos(angle),
    y: cy + ringR * Math.sin(angle),
  };
}

export default function CircularPermutation() {
  // ── State ─────────────────────────────────────────────
  const [n, setN] = useState(3);
  const [mode, setMode] = useState("balls");
  const [outcomeIdx, setOutcomeIdx] = useState(0);
  const [slotsFilled, setSlotsFilled] = useState(0); // 0..(n-1), counts slots 2..n
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

  // ── Derived ───────────────────────────────────────────
  const items = useMemo(() => getItems(n), [n]);
  const fixedItem = items[0]; // anchored at top of the ring
  const restItemIds = useMemo(() => items.slice(1).map((i) => i.id), [items]);
  const outcomes = useMemo(() => permsAll(restItemIds), [restItemIds]);
  // outcomes are length (n-1); the fixed item is rendered separately.
  const itemsPerOutcome = n - 1;
  const totalCount = factorial(n - 1);

  // Reset when n changes
  useEffect(() => {
    clearTimers();
    setOutcomeIdx(0);
    setSlotsFilled(0);
    setAnimState("idle");
    setCompleted([]);
    setPlaying(false);
  }, [n, clearTimers]);

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
  const cfg = CARD_CFG[n] || CARD_CFG[5];
  const { CARD_SIZE, BALL_R, cols } = cfg;
  const cardRingR = CARD_SIZE / 2 - BALL_R - 4;

  const srcStartX = (SVG_W - (items.length - 1) * SRC_SP) / 2;
  const srcPos = items.map((_, i) => ({ x: srcStartX + i * SRC_SP, y: SRC_Y }));

  // Build ring slot positions (n total; slot 0 = top, anchored to fixedItem)
  const slotPos = Array.from({ length: n }, (_, i) =>
    ringPos(BUILD_CX, BUILD_CY, BUILD_RING_R, i, n)
  );

  const resultsTop = BUILD_CY + BUILD_RING_R + RESULTS_TOP_OFFSET;
  const gridW = cols * CARD_SIZE + (cols - 1) * CARD_GAP;
  const gridStartX = (SVG_W - gridW) / 2;
  const rowsCompleted = Math.ceil(outcomes.length / cols);
  const gridH = rowsCompleted * CARD_SIZE + (rowsCompleted - 1) * CARD_GAP;
  const svgH = resultsTop + gridH + RESULTS_BOTTOM_PAD;

  // ── Build-area state ──────────────────────────────────
  const currentOutcome = outcomes[outcomeIdx] || [];
  const flyingSlotIdx =
    animState === "spawn" || animState === "fly" ? slotsFilled : -1;
  const isFlying = animState === "fly";
  const atSource = animState === "spawn";

  // Source dimming: Red (id 0) always dimmed (fixed at top); plus
  // anything already used in this outcome.
  const dimmed = new Set([0]);
  for (let i = 0; i < slotsFilled; i++) dimmed.add(currentOutcome[i]);
  if (flyingSlotIdx >= 0 && isFlying) dimmed.add(currentOutcome[flyingSlotIdx]);

  // ── Header texts ──────────────────────────────────────
  const formulaShort = `(${n}−1)! = ${totalCount}`;
  const longSeq = n <= 2 ? "1" : Array.from({ length: n - 1 }, (_, i) => n - 1 - i).join(" × ");
  const formulaText = (
    <>
      {n}! / {n} = ({n}−1)! = {longSeq} = {totalCount}
    </>
  );

  let statusText;
  if (animState === "done") {
    statusText = `Complete · ${totalCount} / ${totalCount}`;
  } else if (animState === "idle" && completed.length === 0) {
    statusText = "Press Play or Step to begin";
  } else {
    const k = completed.length + (animState === "complete" ? 1 : 0);
    statusText = `Arrangements: ${k} / ${totalCount}`;
  }

  const stepStatus = animState === "done" ? "done" : "current";

  // Narration
  const remaining = items.slice(1);
  const narration = (
    <>
      <ChipAndName item={fixedItem} mode={mode} /> is fixed at the top of the
      ring to anchor the arrangement against rotation. The remaining{" "}
      <b>{n - 1}</b> item{n - 1 === 1 ? "" : "s"}{" "}
      (<ListWithChips items={remaining} mode={mode} conjunction="and" />)
      {" "}can be arranged in the other <b>{n - 1}</b> position{n - 1 === 1 ? "" : "s"}{" "}
      in <b>({n}−1)! = {totalCount}</b> distinct way{totalCount === 1 ? "" : "s"}.
      {" "}If we did not fix one item, every arrangement would be counted{" "}
      <b>{n}</b> times — once per rotation — so we divide{" "}
      <b>{n}!</b> by <b>{n}</b>.
    </>
  );

  // Mini circular card renderer
  function renderMiniCard(outcome, x, y, key) {
    const cx = x + CARD_SIZE / 2;
    const cy = y + CARD_SIZE / 2;
    return (
      <g key={key}>
        <rect
          x={x} y={y}
          width={CARD_SIZE} height={CARD_SIZE} rx="8"
          fill="#ffffff" stroke={COLORS.border} strokeWidth="1"
        />
        <circle
          cx={cx} cy={cy} r={cardRingR}
          fill="none" stroke={COLORS.border} strokeWidth="1"
          opacity="0.5" strokeDasharray="2 3"
        />
        {Array.from({ length: n }).map((_, i) => {
          const p = ringPos(cx, cy, cardRingR, i, n);
          const itm = i === 0 ? fixedItem : items[outcome[i - 1]];
          return (
            <Ball key={i} item={itm} cx={p.x} cy={p.y} r={BALL_R} mode={mode} />
          );
        })}
      </g>
    );
  }

  // ── Render ────────────────────────────────────────────
  return (
    <VTRoot>
      <ThemeStyles />
      <PageWrap>
        <HelpBanner>
          Press <b>▶ Play</b> to build all <b>(n−1)!</b> circular arrangements,
          or <b>Step ▶</b> to advance one ball at a time. The first item is
          anchored at the top so rotations aren&apos;t counted twice.
        </HelpBanner>

        <ControlBar>
          <ModeSwitch value={mode} onChange={setMode} />
          <Divider />
          <NStepper value={n} onChange={setN} />
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
                    cx={srcPos[i].x}
                    cy={srcPos[i].y}
                    r={SRC_R}
                    mode={mode}
                  />
                </g>
              ))}

              {/* BUILD label */}
              <text
                x={PAD} y={BUILD_CY - BUILD_RING_R - BUILD_BALL_R - 4}
                fill={COLORS.textDim} fontSize="10" fontWeight="600"
                fontFamily="'JetBrains Mono',monospace" letterSpacing="2"
              >
                BUILD RING
              </text>

              {/* Build ring outline (subtle guide) */}
              <circle
                cx={BUILD_CX} cy={BUILD_CY} r={BUILD_RING_R}
                fill="none" stroke={COLORS.border} strokeWidth="1"
                opacity="0.5" strokeDasharray="3 4"
              />

              {/* Slot outlines + position labels */}
              {slotPos.map((p, i) => (
                <g key={i}>
                  <circle
                    cx={p.x} cy={p.y} r={BUILD_BALL_R + 3}
                    fill="none"
                    stroke={i === 0 ? COLORS.highlight : COLORS.borderStrong}
                    strokeWidth={i === 0 ? 2 : 1.5}
                    strokeDasharray={i === 0 ? "none" : "5 3"}
                    opacity={i === 0 ? 0.85 : 0.45}
                  />
                </g>
              ))}

              {/* "FIXED" badge near slot 0 */}
              <text
                x={slotPos[0].x}
                y={slotPos[0].y - BUILD_BALL_R - 12}
                textAnchor="middle"
                fill={COLORS.highlight}
                fontSize="9" fontWeight="700"
                fontFamily="'JetBrains Mono',monospace"
                letterSpacing="1.5"
              >
                FIXED
              </text>

              {/* Slot index labels (#2..#n) for the un-anchored positions */}
              {slotPos.slice(1).map((p, i) => {
                // Push label radially outward
                const dx = p.x - BUILD_CX;
                const dy = p.y - BUILD_CY;
                const norm = Math.sqrt(dx * dx + dy * dy) || 1;
                const lx = p.x + (dx / norm) * (BUILD_BALL_R + 14);
                const ly = p.y + (dy / norm) * (BUILD_BALL_R + 14) + 3;
                return (
                  <text
                    key={i}
                    x={lx} y={ly} textAnchor="middle"
                    fill={COLORS.textFaint} fontSize="9"
                    fontFamily="'JetBrains Mono',monospace"
                  >
                    #{i + 2}
                  </text>
                );
              })}

              {/* Fixed item at slot 0 (always rendered) */}
              <Ball
                item={fixedItem}
                cx={slotPos[0].x}
                cy={slotPos[0].y}
                r={BUILD_BALL_R}
                mode={mode}
              />

              {/* Dotted guide line during spawn/fly */}
              {flyingSlotIdx >= 0 && flyingSlotIdx < currentOutcome.length && (() => {
                const srcId = currentOutcome[flyingSlotIdx];
                const s = srcPos[srcId];
                const t = slotPos[flyingSlotIdx + 1];
                // Direction from source center to target
                const dx = t.x - s.x;
                const dy = t.y - s.y;
                const norm = Math.sqrt(dx * dx + dy * dy) || 1;
                const x1 = s.x + (dx / norm) * (SRC_R + 2);
                const y1 = s.y + (dy / norm) * (SRC_R + 2);
                const x2 = t.x - (dx / norm) * (BUILD_BALL_R + 2);
                const y2 = t.y - (dy / norm) * (BUILD_BALL_R + 2);
                return (
                  <line
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={items[srcId].color}
                    strokeWidth="2" strokeDasharray="5 4" opacity="0.7"
                  />
                );
              })()}

              {/* Landed balls (in slots 2..n) */}
              {Array.from({ length: slotsFilled }).map((_, i) => {
                if (i >= currentOutcome.length) return null;
                const it = items[currentOutcome[i]];
                const p = slotPos[i + 1];
                return (
                  <Ball
                    key={`landed-${outcomeIdx}-${i}`}
                    item={it} cx={p.x} cy={p.y}
                    r={BUILD_BALL_R} mode={mode}
                  />
                );
              })}

              {/* Flying / spawning ball */}
              {flyingSlotIdx >= 0 && flyingSlotIdx < currentOutcome.length && (() => {
                const it = items[currentOutcome[flyingSlotIdx]];
                const s = srcPos[currentOutcome[flyingSlotIdx]];
                const t = slotPos[flyingSlotIdx + 1];
                const cx = atSource ? s.x : t.x;
                const cy = atSource ? s.y : t.y;
                const transform = `translate(${cx - t.x}px, ${cy - t.y}px)`;
                const transition = isFlying
                  ? `transform ${flyMs}ms cubic-bezier(0.34,1.4,0.64,1)`
                  : "none";
                return (
                  <Ball
                    key={`fly-${outcomeIdx}-${flyingSlotIdx}-${animState}`}
                    item={it} cx={t.x} cy={t.y}
                    r={BUILD_BALL_R} mode={mode}
                    transform={transform} transition={transition}
                  />
                );
              })()}

              {/* Complete flash — ring around the build area */}
              {animState === "complete" && (
                <circle
                  cx={BUILD_CX} cy={BUILD_CY} r={BUILD_RING_R + BUILD_BALL_R + 8}
                  fill="none" stroke={COLORS.highlight}
                  strokeWidth="2.2" opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.7;0.25;0.7"
                    dur="0.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* COMPLETED label */}
              {(completed.length > 0 || animState !== "idle") && (
                <>
                  <text
                    x={PAD} y={resultsTop - 14}
                    fill={COLORS.textDim} fontSize="10" fontWeight="600"
                    fontFamily="'JetBrains Mono',monospace" letterSpacing="2"
                  >
                    COMPLETED
                  </text>
                  <text
                    x={SVG_W - PAD} y={resultsTop - 14}
                    textAnchor="end" fill={COLORS.accent}
                    fontSize="11" fontWeight="600"
                    fontFamily="'JetBrains Mono',monospace"
                  >
                    {completed.length} / {totalCount}
                  </text>
                </>
              )}

              {/* Results grid: each completed outcome as a mini circle card */}
              {completed.map((out, ci) => {
                const col = ci % cols;
                const row = Math.floor(ci / cols);
                const x = gridStartX + col * (CARD_SIZE + CARD_GAP);
                const y = resultsTop + row * (CARD_SIZE + CARD_GAP);
                return renderMiniCard(out, x, y, ci);
              })}
            </svg>
          </SceneSvgWrap>

          {/* ───── Right: info panel ───── */}
          <RightPanel>
            <InfoPanelHeader
              minHeight={resultsTop}
              title="Circular permutations"
              formula={formulaText}
              intro={
                <>
                  Arrange <b>n</b> items around a circle, where rotations of an
                  arrangement are considered the same. Anchoring one item at a
                  reference position breaks the rotational symmetry; the other{" "}
                  <b>n−1</b> can then be freely permuted.
                </>
              }
            />
            <div className="vt-right-rows">
              <StepRow
                status={stepStatus}
                stepNum={1}
                headerLabel={
                  <>
                    Anchor: <Chip item={fixedItem} mode={mode} />
                    <b>{nameOf(fixedItem, mode)}</b>
                  </>
                }
                progressText={
                  stepStatus === "done"
                    ? `${totalCount} / ${totalCount} ✓`
                    : `${completed.length} / ${totalCount}`
                }
                narration={narration}
                rowH={Math.max(ROW_H_MIN, svgH - resultsTop)}
              />
            </div>
          </RightPanel>
        </SceneGrid>
      </PageWrap>
    </VTRoot>
  );
}