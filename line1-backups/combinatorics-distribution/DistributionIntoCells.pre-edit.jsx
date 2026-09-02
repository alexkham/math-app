// /components/visual-tools/scenes/DistributionIntoCells.jsx
// Scenario #10 — Distribution into Cells, kⁿ.
// Distribute n distinct items into k distinct (labeled) cells, no constraints.
// Each item independently picks one of k cells, so total = k^n.
//
// Visual: row of n distinct items at top, k labeled cells below. Each item
// flies one-at-a-time into its chosen cell and stacks bottom-up. Items keep
// their identity (color/letter). Groups by c₁ (cell that item 1 picks) —
// k uniform groups of size k^(n-1) each.
//
// Mathematically identical to PermutationWithRepetition, but framed from the
// items' point of view (items pick cells) rather than positions getting filled.

import React, {
  useState, useEffect, useRef, useCallback, useMemo,
} from "react";
import {
  ROW_H_MIN, SVG_W_DEFAULT, COLORS, tint,
  getItems,
  ThemeStyles, VTRoot, PageWrap, HelpBanner, HelpMark,
  SceneGrid, SceneSvgWrap,
  Ball, ItemDefs,
  ControlBar, Divider, ModeSwitch,
  NStepper,
  TransportButtons, SpeedSlider,
  RightPanel, InfoPanelHeader, StepRow,
} from "../shared.jsx";

// ── Constants ───────────────────────────────────────────────────────
const N_MIN_DC = 2;
const N_MAX_DC = 4;
const K_MIN = 2;
const K_MAX = 4;

// Cap to keep totals manageable; max = 81 (n=4, k=3).
const K_MAX_BY_N = { 2: 4, 3: 4, 4: 3 };

const SUPS = ["⁰", "¹", "²", "³", "⁴", "⁵"];

// ── Combinatorics helpers (local) ───────────────────────────────────

function pow(base, exp) {
  let r = 1;
  for (let i = 0; i < exp; i++) r *= base;
  return r;
}

// All k^n distributions as 1-indexed cell tuples [c₁, …, cₙ].
// Ordered lex (c₁ ascending), so naturally grouped by c₁.
function distributions(n, k) {
  if (n === 0) return [[]];
  const out = [];
  for (let c = 1; c <= k; c++) {
    for (const rest of distributions(n - 1, k)) {
      out.push([c, ...rest]);
    }
  }
  return out;
}

// Number of items already placed in cell `cell` (1-indexed) before item itemIdx.
function countItemsInCellBefore(comp, itemIdx, cell) {
  let count = 0;
  for (let j = 0; j < itemIdx; j++) {
    if (comp[j] === cell) count++;
  }
  return count;
}

// ── KStepper (local) ────────────────────────────────────────────────
function KStepper({ value, onChange, min = K_MIN, max = K_MAX, tip }) {
  return (
    <div className="vt-stepper">
      <span className="vt-stepper-label">k =</span>
      <button
        className="vt-stepper-btn"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >−</button>
      <span className="vt-stepper-value">{value}</span>
      <button
        className="vt-stepper-btn"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >+</button>
      {tip ? <HelpMark tip={tip} /> : null}
    </div>
  );
}

// ── SVG geometry ────────────────────────────────────────────────────
const SVG_W = SVG_W_DEFAULT;
const PAD = 30;

// Source row at top
const SOURCE_Y = 64;
const SOURCE_ITEM_SP = 56;

// Cells
const CELL_TOP = 152;
const CELL_W = 76;
const CELL_H = 160;
const CELL_GAP_X = 20;
const CELL_PAD_BOT = 12;
const CELL_LABEL_OFFSET = 14;

const BALL_R = 16;
const STACK_GAP = 4;

// Offsets below cellBottom
const READOUT_Y_OFFSET = 36;
const LEGEND_OFFSET = 56;
const FORMULA_CARD_OFFSET = 78;
const FORMULA_CARD_H = 54;
const RESULTS_TOP_OFFSET = 158;

// Stack y-coord (center) for an item at position p (0 = bottom).
function stackedItemY(p) {
  return CELL_TOP + CELL_H - CELL_PAD_BOT - BALL_R - p * (BALL_R * 2 + STACK_GAP);
}

export default function DistributionIntoCells() {
  // ── State ─────────────────────────────────────────────
  const [n, setN] = useState(3);
  const [k, setK] = useState(3);
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

  // Clamp k whenever n changes its max.
  useEffect(() => {
    const maxK = K_MAX_BY_N[n] || K_MAX;
    if (k > maxK) setK(maxK);
  }, [n, k]);

  // ── Derived ───────────────────────────────────────────
  // Items are DISTINCT — use the first n items from the standard palette.
  const items = useMemo(() => getItems(n), [n]);
  // For gradient registration we always include all possible items so that
  // mini cards (which may include any item id) render correctly.
  const allItems = useMemo(() => getItems(N_MAX_DC), []);

  const itemsPerOutcome = n;

  const outcomes = useMemo(() => distributions(n, k), [n, k]);
  const totalCount = outcomes.length;

  const distinctFirsts = useMemo(
    () => Array.from({ length: k }, (_, i) => i + 1),
    [k]
  );
  const groupSizes = useMemo(() => {
    const sz = pow(k, n - 1);
    return distinctFirsts.map(() => sz);
  }, [distinctFirsts, k, n]);

  const currentComp = outcomes[outcomeIdx] || [];

  // ── Reset on n/k change ───────────────────────────────
  useEffect(() => {
    clearTimers();
    setOutcomeIdx(0);
    setSlotsFilled(0);
    setAnimState("idle");
    setCompleted([]);
    setPlaying(false);
  }, [n, k, clearTimers]);

  // ── Timing ────────────────────────────────────────────
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
      setAnimState(slotsFilled > 0 ? "landed" : "idle");
      return;
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
  const cellBottom = CELL_TOP + CELL_H;
  const sourceStartX = (SVG_W - (n - 1) * SOURCE_ITEM_SP) / 2;
  const sourceX = (i) => sourceStartX + i * SOURCE_ITEM_SP;

  const cellsW = k * CELL_W + (k - 1) * CELL_GAP_X;
  const cellsX0 = (SVG_W - cellsW) / 2;
  const cellLeftX = (c) => cellsX0 + c * (CELL_W + CELL_GAP_X);   // 0-indexed
  const cellCenterX = (c) => cellLeftX(c) + CELL_W / 2;           // 0-indexed

  const compReadoutY = cellBottom + READOUT_Y_OFFSET;
  const legendY = cellBottom + LEGEND_OFFSET;
  const formulaCardTop = cellBottom + FORMULA_CARD_OFFSET;
  const resultsTop = cellBottom + RESULTS_TOP_OFFSET;

  // ── Card layout (adaptive) ────────────────────────────
  const cardLayout = useMemo(() => {
    const MINI_BALL_R = 4;
    const MINI_STACK_GAP = 1;
    const MINI_CELL_W = MINI_BALL_R * 2 + 4;             // 12
    const MINI_CELL_H = n * (MINI_BALL_R * 2)
                        + (n - 1) * MINI_STACK_GAP + 6;
    const MINI_CELL_GAP = 2;
    const MINI_PAD_TOP = 4;
    const MINI_PAD_BOT = 3;
    const CARD_PAD_X = 6;
    const READOUT_H = 12;
    const CARD_W = CARD_PAD_X * 2 + k * MINI_CELL_W + (k - 1) * MINI_CELL_GAP;
    const CARD_H = MINI_PAD_TOP + MINI_CELL_H + MINI_PAD_BOT + READOUT_H;
    const CARD_GAP_X = 6;
    const CARD_GAP_Y = 6;
    const GRP_LBL_W = 36;
    const ACCENT_W = 3;
    const GRP_LEFT_M = PAD + GRP_LBL_W + ACCENT_W + 8;
    const availW = SVG_W - GRP_LEFT_M - PAD;
    const cols = Math.max(
      1,
      Math.floor((availW + CARD_GAP_X) / (CARD_W + CARD_GAP_X))
    );
    const TOP_PAD = 14;

    const groupBlocks = groupSizes.map((sz) => {
      const rows = Math.max(1, Math.ceil(sz / cols));
      const blockH = rows * (CARD_H + CARD_GAP_Y) - CARD_GAP_Y;
      const rowH = Math.max(ROW_H_MIN, blockH + 2 * TOP_PAD);
      return { rows, blockH, rowH };
    });

    return {
      MINI_BALL_R, MINI_STACK_GAP,
      MINI_CELL_W, MINI_CELL_H, MINI_CELL_GAP,
      MINI_PAD_TOP, MINI_PAD_BOT,
      CARD_PAD_X, READOUT_H,
      CARD_W, CARD_H, CARD_GAP_X, CARD_GAP_Y,
      GRP_LBL_W, ACCENT_W, GRP_LEFT_M,
      cols, TOP_PAD, groupBlocks,
    };
  }, [n, k, groupSizes]);

  // ── Step status per group ────────────────────────────
  const stepStatuses = useMemo(() => {
    return distinctFirsts.map((firstVal, gi) => {
      const k_done = completed.filter((o) => o[0] === firstVal).length;
      const size = groupSizes[gi];
      if (k_done === size) return "done";
      if (animState === "done") return "done";
      if (k_done > 0) return "current";
      if (animState !== "idle") {
        const building = outcomes[outcomeIdx];
        return building && building[0] === firstVal ? "current" : "pending";
      }
      return "pending";
    });
  }, [distinctFirsts, groupSizes, completed, animState, outcomes, outcomeIdx]);

  const visibleSteps = useMemo(
    () => stepStatuses.map((s, i) => (s !== "pending" ? i : -1))
      .filter((i) => i >= 0),
    [stepStatuses]
  );

  const visibleOffsets = useMemo(() => {
    const offs = [];
    let acc = 0;
    for (const gi of visibleSteps) {
      offs.push(acc);
      acc += cardLayout.groupBlocks[gi].rowH + 8;
    }
    return { offsets: offs, total: Math.max(0, acc - 8) };
  }, [visibleSteps, cardLayout.groupBlocks]);

  const svgH = resultsTop + visibleOffsets.total + 24;

  // ── Animation state ──────────────────────────────────
  const flyingItemIdx =
    animState === "spawn" || animState === "fly" ? slotsFilled : -1;
  const isFlying = animState === "fly";
  const atSource = animState === "spawn";

  // ── Header texts ──────────────────────────────────────
  const formulaShort = `${k}${SUPS[n]} = ${totalCount}`;
  const factors = Array(n).fill(String(k)).join(" × ");
  const formulaFull = `${k}${SUPS[n]} = ${factors} = ${totalCount}`;

  const formulaText = (
    <>
      k<sup>n</sup>
      <br />= {k}{SUPS[n]}
      <br />= {factors}
      <br />= <span style={{ color: COLORS.highlight }}>{totalCount}</span>
    </>
  );

  let statusText;
  if (animState === "done") {
    statusText = `Complete · ${totalCount} / ${totalCount}`;
  } else if (animState === "idle" && completed.length === 0) {
    statusText = "Press Play or Step to begin";
  } else {
    const building = outcomes[outcomeIdx];
    const firstVal = building ? building[0] : -1;
    const gi = distinctFirsts.indexOf(firstVal);
    const sz = gi >= 0 ? groupSizes[gi] : 0;
    const k_done = completed.filter((o) => o[0] === firstVal).length +
                   (animState === "complete" ? 1 : 0);
    statusText = firstVal > 0
      ? `Cell ${firstVal}: ${k_done} / ${sz}`
      : "";
  }

  // ── Narration per group ──────────────────────────────
  const narrationFor = (gi) => {
    const c = distinctFirsts[gi];
    const sz = groupSizes[gi];
    const nRem = n - 1;
    return (
      <>
        When item <b>1</b> goes to <b>Cell {c}</b>, the remaining{" "}
        <b>n − 1 = {nRem}</b> items each still independently pick one of{" "}
        <b>k = {k}</b> cells. That gives{" "}
        <b>k<sup>n−1</sup> = {k}{SUPS[nRem]} = {sz}</b>{" "}
        outcome{sz === 1 ? "" : "s"} in this group.
      </>
    );
  };

  // ── Render a mini outcome card ───────────────────────
  function renderOutcomeCard(comp, cx, cy) {
    const {
      MINI_BALL_R, MINI_STACK_GAP,
      MINI_CELL_W, MINI_CELL_H, MINI_CELL_GAP,
      MINI_PAD_TOP, MINI_PAD_BOT,
      CARD_PAD_X, CARD_W, CARD_H,
    } = cardLayout;
    const elems = [
      <rect
        key="bg"
        x={cx} y={cy}
        width={CARD_W} height={CARD_H} rx="5"
        fill="#ffffff"
        stroke={COLORS.border} strokeWidth="1"
      />,
    ];
    for (let c = 0; c < k; c++) {
      const mcx_left = cx + CARD_PAD_X + c * (MINI_CELL_W + MINI_CELL_GAP);
      const mcx_center = mcx_left + MINI_CELL_W / 2;
      const mcy_top = cy + MINI_PAD_TOP;
      elems.push(
        <rect
          key={`mc-${c}`}
          x={mcx_left} y={mcy_top}
          width={MINI_CELL_W} height={MINI_CELL_H} rx="2"
          fill={COLORS.surface}
          stroke={COLORS.border} strokeWidth="1"
        />
      );
      const itemsInCell = [];
      for (let i = 0; i < n; i++) {
        if (comp[i] === c + 1) itemsInCell.push(i);
      }
      itemsInCell.forEach((itemIdx, p) => {
        const ity = mcy_top + MINI_CELL_H - 3 - MINI_BALL_R
                    - p * (MINI_BALL_R * 2 + MINI_STACK_GAP);
        elems.push(
          <Ball
            key={`mi-${c}-${p}`}
            item={items[itemIdx]}
            cx={mcx_center} cy={ity} r={MINI_BALL_R} mode={mode}
          />
        );
      });
    }
    elems.push(
      <text
        key="readout"
        x={cx + CARD_W / 2}
        y={cy + CARD_H - 4}
        textAnchor="middle"
        fontSize="9" fontWeight="600"
        fontFamily="'JetBrains Mono',monospace"
        fill={COLORS.textDim}
      >
        ({comp.join(",")})
      </text>
    );
    return elems;
  }

  const kMaxForN = K_MAX_BY_N[n] || K_MAX;

  // ── Render ────────────────────────────────────────────
  return (
    <VTRoot>
      <ThemeStyles />
      <PageWrap>
        <HelpBanner>
          Press <b>▶ Play</b> to build all <b>k<sup>n</sup></b> ways to
          distribute <b>n</b> distinct items into <b>k</b> labeled cells, or{" "}
          <b>Step ▶</b> to send one item at a time. Each item independently
          picks <i>one</i> of the <b>k</b> cells (no capacity limit, cells may
          be empty) — so there are <b>k</b> choices for each of the <b>n</b>{" "}
          items, giving <b>k × k × … × k = k<sup>n</sup></b>. Same math as
          permutations with repetition, just framed from the items&apos; point
          of view.
        </HelpBanner>

        <ControlBar>
          <ModeSwitch value={mode} onChange={setMode} />
          <Divider />
          <NStepper
            value={n}
            onChange={setN}
            min={N_MIN_DC}
            max={N_MAX_DC}
            tip="Number of distinct items."
          />
          <Divider />
          <KStepper
            value={k}
            onChange={setK}
            min={K_MIN}
            max={kMaxForN}
            tip="Number of distinct cells."
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
              <ItemDefs items={allItems} />
              <rect width={SVG_W} height={svgH} fill="#ffffff" />

              {/* Top-right header */}
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

              {/* Source row label */}
              <text
                x={PAD} y={SOURCE_Y - BALL_R - 14}
                fill={COLORS.textDim} fontSize="10" fontWeight="600"
                fontFamily="'JetBrains Mono',monospace" letterSpacing="2"
              >
                ITEMS TO PLACE (n = {n})
              </text>

              {/* Source items */}
              {Array.from({ length: n }, (_, i) => {
                const isPlaced = i < slotsFilled;
                const isFlyingThis = i === flyingItemIdx && (isFlying || atSource);
                const dim = isPlaced || isFlyingThis;
                return (
                  <Ball
                    key={`src-${i}`}
                    item={items[i]}
                    cx={sourceX(i)} cy={SOURCE_Y}
                    r={BALL_R} mode={mode}
                    opacity={dim ? 0.22 : 1}
                  />
                );
              })}

              {/* Cells label */}
              <text
                x={PAD} y={CELL_TOP - CELL_LABEL_OFFSET - 14}
                fill={COLORS.textDim} fontSize="10" fontWeight="600"
                fontFamily="'JetBrains Mono',monospace" letterSpacing="2"
              >
                CELLS (k = {k})
              </text>

              {/* Cell labels + boxes */}
              {Array.from({ length: k }, (_, c) => (
                <g key={`cell-${c}`}>
                  <text
                    x={cellCenterX(c)} y={CELL_TOP - CELL_LABEL_OFFSET + 4}
                    textAnchor="middle"
                    fontSize="12" fontWeight="700"
                    fontFamily="'JetBrains Mono',monospace"
                    fill={COLORS.accentDeep}
                  >
                    Cell {c + 1}
                  </text>
                  <rect
                    x={cellLeftX(c)} y={CELL_TOP}
                    width={CELL_W} height={CELL_H} rx="8"
                    fill={COLORS.surface}
                    stroke={COLORS.borderStrong} strokeWidth="1.5"
                  />
                </g>
              ))}

              {/* Placed items inside cells */}
              {Array.from({ length: slotsFilled }, (_, i) => {
                const c = currentComp[i] - 1;
                const p = countItemsInCellBefore(currentComp, i, c + 1);
                return (
                  <Ball
                    key={`placed-${outcomeIdx}-${i}`}
                    item={items[i]}
                    cx={cellCenterX(c)} cy={stackedItemY(p)}
                    r={BALL_R} mode={mode}
                  />
                );
              })}

              {/* Dotted guide line for flying item */}
              {flyingItemIdx >= 0 &&
               currentComp[flyingItemIdx] !== undefined && (() => {
                const c = currentComp[flyingItemIdx] - 1;
                const p = countItemsInCellBefore(currentComp, flyingItemIdx, c + 1);
                const sx = sourceX(flyingItemIdx);
                const sy = SOURCE_Y;
                const tx = cellCenterX(c);
                const ty = stackedItemY(p);
                return (
                  <line
                    x1={sx} y1={sy + BALL_R + 4}
                    x2={tx} y2={ty - BALL_R - 4}
                    stroke={items[flyingItemIdx].color}
                    strokeWidth="2" strokeDasharray="5 4" opacity="0.55"
                  />
                );
              })()}

              {/* Flying item */}
              {flyingItemIdx >= 0 &&
               currentComp[flyingItemIdx] !== undefined && (() => {
                const c = currentComp[flyingItemIdx] - 1;
                const p = countItemsInCellBefore(currentComp, flyingItemIdx, c + 1);
                const tx = cellCenterX(c);
                const ty = stackedItemY(p);
                const sx = sourceX(flyingItemIdx);
                const sy = SOURCE_Y;
                const fx = atSource ? sx : tx;
                const fy = atSource ? sy : ty;
                const transform = `translate(${fx - tx}px, ${fy - ty}px)`;
                const transition = isFlying
                  ? `transform ${flyMs}ms cubic-bezier(0.34,1.4,0.64,1)`
                  : "none";
                return (
                  <Ball
                    key={`fly-${outcomeIdx}-${flyingItemIdx}-${animState}`}
                    item={items[flyingItemIdx]}
                    cx={tx} cy={ty}
                    r={BALL_R} mode={mode}
                    transform={transform}
                    transition={transition}
                  />
                );
              })()}

              {/* Complete flash — pulsing ring around all cells */}
              {animState === "complete" && (
                <rect
                  x={cellsX0 - 6} y={CELL_TOP - 6}
                  width={cellsW + 12} height={CELL_H + 12}
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

              {/* Assignment readout (progressive) */}
              <text
                x={SVG_W / 2} y={compReadoutY} textAnchor="middle"
                fontSize="14" fontWeight="700"
                fontFamily="'JetBrains Mono',monospace"
                fill={COLORS.text}
              >
                <tspan fill={COLORS.textDim}>assignment: (</tspan>
                {Array.from({ length: n }, (_, i) => {
                  const known = i < slotsFilled;
                  return (
                    <React.Fragment key={i}>
                      {i > 0 && <tspan fill={COLORS.textDim}>, </tspan>}
                      <tspan fill={known ? COLORS.accentDeep : COLORS.textFaint}>
                        {known ? currentComp[i] : "?"}
                      </tspan>
                    </React.Fragment>
                  );
                })}
                <tspan fill={COLORS.textDim}>)</tspan>
              </text>

              {/* Legend */}
              <text
                x={SVG_W / 2} y={legendY} textAnchor="middle"
                fontSize="10" fontWeight="500" fill={COLORS.textDim}
                fontFamily="'JetBrains Mono',monospace"
              >
                (item 1 → cell c₁, item 2 → cell c₂, …)
              </text>

              {/* Formula card */}
              <rect
                x={PAD + 30} y={formulaCardTop}
                width={SVG_W - 2 * (PAD + 30)} height={FORMULA_CARD_H} rx="8"
                fill={COLORS.surfaceTint}
                stroke={COLORS.accentLight} strokeWidth="1.5"
              />
              <text
                x={SVG_W / 2} y={formulaCardTop + 18} textAnchor="middle"
                fontSize="11" fontWeight="600" fill={COLORS.textDim}
                fontFamily="'JetBrains Mono',monospace"
              >
                Each of n = {n} items independently picks 1 of k = {k} cells:
              </text>
              <text
                x={SVG_W / 2} y={formulaCardTop + 40} textAnchor="middle"
                fontSize="14" fontWeight="700" fill={COLORS.accentDeep}
                fontFamily="'JetBrains Mono',monospace"
              >
                {formulaFull}
              </text>

              {/* COMPLETED label + count */}
              {(visibleSteps.length > 0 ||
                animState !== "idle" ||
                completed.length > 0) && (
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

              {/* Group rows */}
              {visibleSteps.map((gi, vi) => {
                const firstVal = distinctFirsts[gi];
                const block = cardLayout.groupBlocks[gi];
                const rowY = resultsTop + visibleOffsets.offsets[vi];
                const cards = completed.filter((o) => o[0] === firstVal);
                const cardsStartY = rowY + (block.rowH - block.blockH) / 2;
                const avX = PAD + cardLayout.GRP_LBL_W / 2;
                const avY = cardsStartY + block.blockH / 2;
                const tintColor = COLORS.accent;

                return (
                  <g key={gi}>
                    <rect
                      x={cardLayout.GRP_LEFT_M - 8} y={rowY}
                      width={SVG_W - cardLayout.GRP_LEFT_M - PAD + 16}
                      height={block.rowH} rx="10"
                      fill={tint(tintColor, 0.05)}
                    />
                    <rect
                      x={PAD + cardLayout.GRP_LBL_W + 2} y={rowY + 8}
                      width={cardLayout.ACCENT_W} height={block.rowH - 16}
                      rx="1.5" fill={tintColor} opacity="0.9"
                    />
                    <text
                      x={avX} y={avY - 6}
                      textAnchor="middle" dominantBaseline="central"
                      fill={COLORS.textDim} fontSize="8" fontWeight="600"
                      fontFamily="'JetBrains Mono',monospace"
                    >
                      item 1 →
                    </text>
                    <text
                      x={avX} y={avY + 8}
                      textAnchor="middle" dominantBaseline="central"
                      fill={COLORS.accentDeep} fontSize="14" fontWeight="700"
                      fontFamily="'JetBrains Mono',monospace"
                    >
                      Cell {firstVal}
                    </text>
                    {cards.map((comp, ci) => {
                      const col = ci % cardLayout.cols;
                      const row = Math.floor(ci / cardLayout.cols);
                      const cx = cardLayout.GRP_LEFT_M +
                                 col * (cardLayout.CARD_W + cardLayout.CARD_GAP_X);
                      const cy = cardsStartY +
                                 row * (cardLayout.CARD_H + cardLayout.CARD_GAP_Y);
                      return (
                        <g key={ci}>{renderOutcomeCard(comp, cx, cy)}</g>
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
              minHeight={resultsTop}
              title="Distribution into cells (kⁿ)"
              formula={formulaText}
              intro={
                <>
                  Distribute <b>n</b> distinct items into <b>k</b> distinct
                  cells. Each item independently picks one cell, with no
                  capacity limit (cells may be empty). Since each of the{" "}
                  <b>n</b> items has <b>k</b> independent choices, the total
                  is <b>k × k × ⋯ × k = k<sup>n</sup></b>. Same math as
                  permutations with repetition — different framing.
                </>
              }
            />
            <div className="vt-right-rows">
              {visibleSteps.map((gi) => {
                const firstVal = distinctFirsts[gi];
                const status = stepStatuses[gi];
                const sz = groupSizes[gi];
                const k_done = completed.filter((o) => o[0] === firstVal).length;
                const progressText = status === "done"
                  ? `${sz} / ${sz} ✓`
                  : `${k_done} / ${sz}`;
                return (
                  <StepRow
                    key={gi}
                    status={status}
                    stepNum={gi + 1}
                    headerLabel={
                      <>
                        Item 1 → <b>Cell {firstVal}</b>
                      </>
                    }
                    progressText={progressText}
                    narration={narrationFor(gi)}
                    rowH={cardLayout.groupBlocks[gi].rowH}
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