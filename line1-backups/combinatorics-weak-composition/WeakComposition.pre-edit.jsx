// /components/visual-tools/scenes/WeakComposition.jsx  (v2)
// Scenario #8 — Weak Composition, C(n+k−1, k−1).
// Distribute n identical items into k distinct bins (empty bins allowed).
// Visual: stars-and-bars on a row of (n+k-1) cells. The n items (rendered
// as the canonical Item 0, all identical) sit in their final positions
// from the start; (k-1) bars animate in from a holding row to split them.
// Groups by x₁ (items before the first bar); per-group ROW_H since group
// sizes vary as C(n-j+k-2, k-2).
//
// v2 vs v1:
//   • Uses shared Ball + ItemDefs (with ModeSwitch) for items, not Star polygon
//   • Numbered position labels above each strip cell (1..n+k-1)
//   • Bin bands + frames behind cells (cell-only extents, alternating
//     accent/highlight) — visual "this is a bin"
//   • Underbrackets below strip with progressive `xᵢ = j` labels
//   • Second readout below strip: bar positions {…} alongside composition
//   • Formula card showing concrete factorial expansion
//   • HelpBanner defines "bin" explicitly

import React, {
  useState, useEffect, useRef, useCallback, useMemo,
} from "react";
import {
  ROW_H_MIN, SVG_W_DEFAULT, COLORS, tint,
  factorial, getItems,
  ThemeStyles, VTRoot, PageWrap, HelpBanner, HelpMark,
  SceneGrid, SceneSvgWrap,
  Ball, ItemDefs,
  ControlBar, Divider, ModeSwitch,
  NStepper,
  TransportButtons, SpeedSlider,
  RightPanel, InfoPanelHeader, StepRow,
} from "../shared.jsx";

// ── Constants ───────────────────────────────────────────────────────
const N_MIN_WC = 3;
const N_MAX_WC = 5;
const K_MIN = 2;
const K_MAX = 4;

// Cap k by n to keep total outcomes manageable.
// Worst case under the cap: n=5, k=4 → C(8,3) = 56.
const K_MAX_BY_N = { 3: 4, 4: 4, 5: 4 };

const SUBSCRIPTS = ["₁", "₂", "₃", "₄", "₅"];

// ── Combinatorics helpers (local) ───────────────────────────────────

function binomial(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}

// All weak compositions of n into k parts: x₁+…+xₖ = n, xᵢ ≥ 0.
// Ordered lex (x₁ ascending, then x₂, …), so the natural enumeration
// already groups by first part — what the scene wants.
function weakCompositions(n, k) {
  if (k === 1) return [[n]];
  const out = [];
  for (let j = 0; j <= n; j++) {
    for (const rest of weakCompositions(n - j, k - 1)) {
      out.push([j, ...rest]);
    }
  }
  return out;
}

// Bar positions (0-indexed cell indices in the strip of length n+k-1)
// for a given composition. Bar i sits at position (Σⱼ₌₁ⁱ xⱼ) + (i-1).
function barPositionsFromComp(comp) {
  const positions = [];
  let acc = 0;
  for (let i = 0; i < comp.length - 1; i++) {
    acc += comp[i];
    positions.push(acc + i);
  }
  return positions;
}

// ── KStepper (local — same shape as shared NStepper, label "k =") ───
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

// ── BarGlyph (local) ────────────────────────────────────────────────
function BarGlyph({
  cx, cy, h, w, fill, opacity = 1, transform, transition,
}) {
  return (
    <rect
      x={cx - w / 2} y={cy - h / 2}
      width={w} height={h} rx="2"
      fill={fill}
      opacity={opacity}
      transform={transform}
      style={transition ? { transition } : undefined}
    />
  );
}

// ── SVG geometry ────────────────────────────────────────────────────
const SVG_W = SVG_W_DEFAULT;
const PAD = 30;

// Holding row for bars
const HOLD_Y = 64;
const HOLD_BAR_H = 38;
const HOLD_BAR_W = 7;
const HOLD_BAR_SP = 50;

// Build strip
const STRIP_CY = 200;
const CELL_W = 48;
const CELL_H = 56;
const CELL_GAP = 4;

const BALL_R = 16;            // size of the Ball/letter inside each cell
const BAR_BUILD_H = 38;
const BAR_BUILD_W = 7;

const BAR_FILL = COLORS.accent;

// Vertical offsets below cellBottom:
//   brackets line  +14, brackets label  +36,
//   composition    +66, bar positions   +86,
//   formula card   +108 (height 54),    results +188
const BRACKET_LINE_OFF = 14;
const BRACKET_LABEL_OFF = 36;
const READOUT_Y_OFFSET = 66;
const READOUT2_Y_OFFSET = 86;
const FORMULA_CARD_OFFSET = 108;
const FORMULA_CARD_H = 54;
const RESULTS_TOP_OFFSET = 188;

// ── Per-bin render info (cell-only x extents) ──────────────────────
// Returns one entry per bin (k entries total). Non-empty bins have
// xLeft/xRight spanning ONLY the bin's cells (not extending into
// adjacent bar cells). Empty bins get a midX placed between adjacent
// bars (or at the strip edge for leading/trailing).
function getBinRenderInfo(bars, stripX0, numSymbols) {
  const info = [];
  const cellXOf = (c) => stripX0 + c * (CELL_W + CELL_GAP) + CELL_W / 2;
  let prevBar = -1;
  for (const b of bars) {
    const firstCell = prevBar + 1;
    const lastCell = b - 1;
    if (firstCell <= lastCell) {
      const xLeft = stripX0 + firstCell * (CELL_W + CELL_GAP);
      const xRight = stripX0 + lastCell * (CELL_W + CELL_GAP) + CELL_W;
      info.push({ isEmpty: false, xLeft, xRight, midX: (xLeft + xRight) / 2 });
    } else {
      const midX = prevBar === -1
        ? cellXOf(b) - 16
        : (cellXOf(prevBar) + cellXOf(b)) / 2;
      info.push({ isEmpty: true, xLeft: null, xRight: null, midX });
    }
    prevBar = b;
  }
  const firstCell = prevBar + 1;
  const lastCell = numSymbols - 1;
  if (firstCell <= lastCell) {
    const xLeft = stripX0 + firstCell * (CELL_W + CELL_GAP);
    const xRight = stripX0 + lastCell * (CELL_W + CELL_GAP) + CELL_W;
    info.push({ isEmpty: false, xLeft, xRight, midX: (xLeft + xRight) / 2 });
  } else {
    info.push({
      isEmpty: true, xLeft: null, xRight: null,
      midX: prevBar >= 0 ? cellXOf(prevBar) + 16 : 0,
    });
  }
  return info;
}

export default function WeakComposition() {
  // ── State ─────────────────────────────────────────────
  const [n, setN] = useState(4);
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

  // Clamp k whenever n drops below current k's max.
  useEffect(() => {
    const maxK = K_MAX_BY_N[n] || K_MAX;
    if (k > maxK) setK(maxK);
  }, [n, k]);

  // ── Derived ───────────────────────────────────────────
  // Stars are rendered as the canonical Item 0 (red): all identical.
  // We still need a single-item array for ItemDefs (gradient registration).
  const items = useMemo(() => getItems(1), []);
  const itemForStar = items[0];

  const numSymbols = n + k - 1;
  const numBars = k - 1;
  const itemsPerOutcome = numBars;

  const outcomes = useMemo(() => weakCompositions(n, k), [n, k]);
  const totalCount = outcomes.length;

  const distinctFirsts = useMemo(
    () => Array.from({ length: n + 1 }, (_, j) => j),
    [n]
  );
  const groupSizes = useMemo(
    () => distinctFirsts.map((j) => binomial(n - j + k - 2, k - 2)),
    [distinctFirsts, n, k]
  );

  const currentComp = outcomes[outcomeIdx] || [];
  const currentBarPositions = useMemo(
    () => barPositionsFromComp(currentComp),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [outcomes, outcomeIdx]
  );

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
  const stripW = numSymbols * (CELL_W + CELL_GAP) - CELL_GAP;
  const stripX0 = (SVG_W - stripW) / 2;
  const cellTop = STRIP_CY - CELL_H / 2;
  const cellBottom = STRIP_CY + CELL_H / 2;
  const cellX = (c) => stripX0 + c * (CELL_W + CELL_GAP) + CELL_W / 2;
  const bracketLineY = cellBottom + BRACKET_LINE_OFF;
  const bracketLabelY = cellBottom + BRACKET_LABEL_OFF;
  const compReadoutY = cellBottom + READOUT_Y_OFFSET;
  const barReadoutY = cellBottom + READOUT2_Y_OFFSET;
  const formulaCardTop = cellBottom + FORMULA_CARD_OFFSET;
  const resultsTop = cellBottom + RESULTS_TOP_OFFSET;

  // Holding-row positions for the (k-1) bars
  const holdStartX = (SVG_W - (numBars - 1) * HOLD_BAR_SP) / 2;
  const holdPos = Array.from({ length: numBars }, (_, i) => ({
    x: numBars > 1 ? holdStartX + i * HOLD_BAR_SP : SVG_W / 2,
    y: HOLD_Y,
  }));

  // Bin render info (used by bands, frames, and brackets)
  const binInfo = useMemo(
    () => getBinRenderInfo(currentBarPositions, stripX0, numSymbols),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentBarPositions, numSymbols]
  );

  // ── Card layout (adaptive by numSymbols) ──────────────
  const cardLayout = useMemo(() => {
    let MINI_CW;
    if (numSymbols <= 4) MINI_CW = 22;
    else if (numSymbols <= 5) MINI_CW = 19;
    else if (numSymbols <= 6) MINI_CW = 16;
    else if (numSymbols <= 7) MINI_CW = 14;
    else MINI_CW = 12;
    const MINI_CH = Math.round(MINI_CW * 1.1);
    const MINI_GAP = 2;
    const MINI_BALL_R = Math.max(4, Math.round(MINI_CW * 0.42));
    const MINI_BAR_H = Math.round(MINI_CH * 0.72);
    const MINI_BAR_W = Math.max(2, Math.round(MINI_CW * 0.20));

    const CARD_PAD_X = 6;
    const CARD_PAD_TOP = 5;
    const READOUT_H = 12;
    const CARD_W = CARD_PAD_X * 2 + numSymbols * (MINI_CW + MINI_GAP) - MINI_GAP;
    const CARD_H = CARD_PAD_TOP * 2 + MINI_CH + 2 + READOUT_H;
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
      MINI_CW, MINI_CH, MINI_GAP, MINI_BALL_R, MINI_BAR_H, MINI_BAR_W,
      CARD_PAD_X, CARD_PAD_TOP, READOUT_H,
      CARD_W, CARD_H, CARD_GAP_X, CARD_GAP_Y,
      GRP_LBL_W, ACCENT_W, GRP_LEFT_M,
      cols, TOP_PAD, groupBlocks,
    };
  }, [numSymbols, groupSizes]);

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

  // ── Build-area animation state ───────────────────────
  const flyingBarIdx =
    animState === "spawn" || animState === "fly" ? slotsFilled : -1;
  const isFlying = animState === "fly";
  const atSource = animState === "spawn";

  const placedCells = currentBarPositions.slice(0, slotsFilled);
  const placedSet = new Set(placedCells);

  // Star cells: every cell that isn't a bar in the current outcome.
  const starSet = useMemo(() => {
    const barSet = new Set(currentBarPositions);
    const out = [];
    for (let c = 0; c < numSymbols; c++) {
      if (!barSet.has(c)) out.push(c);
    }
    return out;
  }, [currentBarPositions, numSymbols]);

  // x_i known once bar min(i, k-2) has landed → slotsFilled >= min(i+1, k-1)
  const partKnown = (i) => slotsFilled >= Math.min(i + 1, k - 1);

  // ── Header texts ──────────────────────────────────────
  const formulaShort = `C(${n + k - 1}, ${k - 1}) = ${totalCount}`;
  const numerator = factorial(n + k - 1);
  const denomA = factorial(k - 1);
  const denomB = factorial(n);
  const formulaFull =
    `C(${n + k - 1}, ${k - 1}) = ${n + k - 1}!/(${k - 1}! · ${n}!)` +
    ` = ${numerator}/(${denomA}·${denomB}) = ${totalCount}`;

  const formulaText = (
    <>
      C(n+k−1, k−1) = C({n + k - 1}, {k - 1})
      <br />= {n + k - 1}! / ({k - 1}! · {n}!)
      <br />= {numerator} / ({denomA} · {denomB})
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
    const sz = firstVal >= 0 ? groupSizes[firstVal] : 0;
    const k_done = completed.filter((o) => o[0] === firstVal).length +
                   (animState === "complete" ? 1 : 0);
    statusText = firstVal >= 0
      ? `x₁ = ${firstVal}: ${k_done} / ${sz}`
      : "";
  }

  // ── Narration per group ──────────────────────────────
  const narrationFor = (gi) => {
    const j = distinctFirsts[gi];
    const sz = groupSizes[gi];
    const nRem = n - j;
    const kRem = k - 1;

    if (j === 0) {
      return (
        <>
          When the first bin is empty (<b>x₁ = 0</b>), all{" "}
          <b>n = {n}</b> items must be distributed among the remaining{" "}
          <b>k − 1 = {kRem}</b> bin{kRem === 1 ? "" : "s"}. That&apos;s a
          smaller weak composition:{" "}
          <b>C(n+k−2, k−2) = C({n + k - 2}, {k - 2}) = {sz}</b>{" "}
          outcome{sz === 1 ? "" : "s"}.
        </>
      );
    }
    if (j === n) {
      return (
        <>
          When all <b>n = {n}</b> items go to the first bin
          (<b>x₁ = n</b>), the remaining <b>k − 1 = {kRem}</b> bin{kRem === 1 ? "" : "s"}{" "}
          must be empty — just <b>1</b> outcome.
        </>
      );
    }
    return (
      <>
        When the first bin holds <b>{j}</b> item{j === 1 ? "" : "s"}{" "}
        (<b>x₁ = {j}</b>), the remaining <b>n − {j} = {nRem}</b> items are
        split among the other <b>k − 1 = {kRem}</b> bin{kRem === 1 ? "" : "s"},
        giving{" "}
        <b>C({nRem}+{kRem}−1, {kRem}−1) = C({nRem + kRem - 1}, {kRem - 1}) = {sz}</b>{" "}
        outcome{sz === 1 ? "" : "s"}.
      </>
    );
  };

  // ── Render a mini strip-card ─────────────────────────
  function renderStripCard(comp, cx, cy) {
    const {
      MINI_CW, MINI_CH, MINI_GAP, MINI_BALL_R, MINI_BAR_H, MINI_BAR_W,
      CARD_PAD_X, CARD_PAD_TOP, CARD_W, CARD_H,
    } = cardLayout;
    const compBars = barPositionsFromComp(comp);
    const compBarSet = new Set(compBars);
    const stripCY = cy + CARD_PAD_TOP + MINI_CH / 2;
    const elems = [
      <rect
        key="bg"
        x={cx} y={cy}
        width={CARD_W} height={CARD_H} rx="5"
        fill="#ffffff"
        stroke={COLORS.border} strokeWidth="1"
      />,
    ];
    for (let c = 0; c < numSymbols; c++) {
      const ccx = cx + CARD_PAD_X + c * (MINI_CW + MINI_GAP) + MINI_CW / 2;
      if (compBarSet.has(c)) {
        elems.push(
          <rect
            key={`b-${c}`}
            x={ccx - MINI_BAR_W / 2}
            y={stripCY - MINI_BAR_H / 2}
            width={MINI_BAR_W} height={MINI_BAR_H} rx="1"
            fill={BAR_FILL}
          />
        );
      } else {
        elems.push(
          <Ball
            key={`s-${c}`}
            item={itemForStar}
            cx={ccx} cy={stripCY} r={MINI_BALL_R} mode={mode}
          />
        );
      }
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
        ({comp.join(", ")})
      </text>
    );
    return elems;
  }

  const kMaxForN = K_MAX_BY_N[n] || K_MAX;

  // Bin band/frame colors (alternating accent/highlight, cell-only extent)
  const binBandColors = ["rgba(59,130,246,0.22)", "rgba(245,158,11,0.22)"];
  const binFrameColors = [COLORS.accent, COLORS.highlight];

  // ── Render ────────────────────────────────────────────
  return (
    <VTRoot>
      <ThemeStyles />
      <PageWrap>
        <HelpBanner>
          Press <b>▶ Play</b> to build all{" "}
          <b>C(n+k−1, k−1)</b> weak compositions of <b>n</b> identical items
          into <b>k</b> bins (empty bins allowed), or <b>Step ▶</b> to drop
          one bar at a time. A <b>bin</b> is the run of cells between two
          adjacent bars (or before the first / after the last); the count of
          items in bin <b>i</b> is <b>xᵢ</b>. Each outcome = a choice of{" "}
          <b>k − 1</b> bar positions among <b>n + k − 1</b> total cells.
        </HelpBanner>

        <ControlBar>
          <ModeSwitch value={mode} onChange={setMode} />
          <Divider />
          <NStepper
            value={n}
            onChange={setN}
            min={N_MIN_WC}
            max={N_MAX_WC}
            tip="Number of identical items to distribute."
          />
          <Divider />
          <KStepper
            value={k}
            onChange={setK}
            min={K_MIN}
            max={kMaxForN}
            tip="Number of bins."
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

              {/* HOLDING label */}
              <text
                x={PAD} y={HOLD_Y - HOLD_BAR_H / 2 - 14}
                fill={COLORS.textDim} fontSize="10" fontWeight="600"
                fontFamily="'JetBrains Mono',monospace" letterSpacing="2"
              >
                BARS TO PLACE (k − 1 = {numBars})
              </text>

              {/* Holding-row bars */}
              {holdPos.map((p, i) => {
                const isPlaced = i < slotsFilled;
                const isFlyingThis = i === flyingBarIdx && isFlying;
                const dim = isPlaced || isFlyingThis;
                return (
                  <g key={i} style={{ transition: "opacity 0.25s" }}>
                    <BarGlyph
                      cx={p.x} cy={p.y}
                      h={HOLD_BAR_H} w={HOLD_BAR_W}
                      fill={BAR_FILL}
                      opacity={dim ? 0.22 : 1}
                    />
                  </g>
                );
              })}

              {/* BUILD label */}
              <text
                x={PAD} y={cellTop - 22}
                fill={COLORS.textDim} fontSize="10" fontWeight="600"
                fontFamily="'JetBrains Mono',monospace" letterSpacing="2"
              >
                STRIP (n + k − 1 = {numSymbols} cells)
              </text>

              {/* Position numbers above cells (1-indexed; highlight when bar lands) */}
              {Array.from({ length: numSymbols }, (_, c) => {
                const isLanded = placedSet.has(c);
                return (
                  <text
                    key={`pos-${c}`}
                    x={cellX(c)} y={cellTop - 6}
                    textAnchor="middle"
                    fontSize={isLanded ? 12 : 11}
                    fontWeight={isLanded ? 700 : 500}
                    fontFamily="'JetBrains Mono',monospace"
                    fill={isLanded ? COLORS.accentDeep : COLORS.textFaint}
                    style={{ transition: "fill 0.2s" }}
                  >
                    {c + 1}
                  </text>
                );
              })}

              {/* Bin bands + frames (cell-only, alternating accent/highlight) */}
              {binInfo.map((b, i) => {
                if (b.isEmpty) return null;
                return (
                  <g key={`bin-${i}`}>
                    <rect
                      x={b.xLeft - 2} y={cellTop - 2}
                      width={(b.xRight - b.xLeft) + 4}
                      height={CELL_H + 4} rx="6"
                      fill={binBandColors[i % 2]}
                    />
                    <rect
                      x={b.xLeft - 2} y={cellTop - 2}
                      width={(b.xRight - b.xLeft) + 4}
                      height={CELL_H + 4} rx="6"
                      fill="none"
                      stroke={binFrameColors[i % 2]} strokeWidth="1.5"
                    />
                  </g>
                );
              })}

              {/* Strip cells (dashed slot outlines) */}
              {Array.from({ length: numSymbols }, (_, c) => {
                const x = stripX0 + c * (CELL_W + CELL_GAP);
                return (
                  <rect
                    key={`cell-${c}`}
                    x={x} y={cellTop}
                    width={CELL_W} height={CELL_H} rx="6"
                    fill="none"
                    stroke={COLORS.borderStrong}
                    strokeWidth="1" strokeDasharray="4 3"
                    opacity="0.5"
                  />
                );
              })}

              {/* Items in star positions (always visible, all Item 0) */}
              {starSet.map((c) => (
                <Ball
                  key={`star-${c}`}
                  item={itemForStar}
                  cx={cellX(c)} cy={STRIP_CY}
                  r={BALL_R} mode={mode}
                />
              ))}

              {/* Dotted guide line during spawn/fly */}
              {flyingBarIdx >= 0 &&
               currentBarPositions[flyingBarIdx] !== undefined && (() => {
                const targetC = currentBarPositions[flyingBarIdx];
                const s = holdPos[flyingBarIdx];
                const tx = cellX(targetC);
                return (
                  <line
                    x1={s.x} y1={s.y + HOLD_BAR_H / 2 + 4}
                    x2={tx} y2={STRIP_CY - BAR_BUILD_H / 2 - 4}
                    stroke={BAR_FILL}
                    strokeWidth="2" strokeDasharray="5 4" opacity="0.6"
                  />
                );
              })()}

              {/* Placed bars */}
              {placedCells.map((c, i) => (
                <BarGlyph
                  key={`placed-${outcomeIdx}-${i}`}
                  cx={cellX(c)} cy={STRIP_CY}
                  h={BAR_BUILD_H} w={BAR_BUILD_W}
                  fill={BAR_FILL}
                />
              ))}

              {/* Flying bar */}
              {flyingBarIdx >= 0 &&
               currentBarPositions[flyingBarIdx] !== undefined && (() => {
                const targetC = currentBarPositions[flyingBarIdx];
                const s = holdPos[flyingBarIdx];
                const tx = cellX(targetC);
                const ty = STRIP_CY;
                const fx = atSource ? s.x : tx;
                const fy = atSource ? s.y : ty;
                const transform = `translate(${fx - tx}px, ${fy - ty}px)`;
                const transition = isFlying
                  ? `transform ${flyMs}ms cubic-bezier(0.34,1.4,0.64,1)`
                  : "none";
                return (
                  <BarGlyph
                    key={`fly-${outcomeIdx}-${flyingBarIdx}-${animState}`}
                    cx={tx} cy={ty}
                    h={BAR_BUILD_H} w={BAR_BUILD_W}
                    fill={BAR_FILL}
                    transform={transform} transition={transition}
                  />
                );
              })()}

              {/* Complete flash — pulsing ring around the whole strip */}
              {animState === "complete" && (
                <rect
                  x={stripX0 - 6} y={cellTop - 6}
                  width={stripW + 12} height={CELL_H + 12}
                  rx="10" fill="none"
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

              {/* Bin brackets below strip (cell-only, progressive labels) */}
              {binInfo.map((b, i) => {
                const known = partKnown(i);
                const labelText = `x${SUBSCRIPTS[i]} = ${known ? currentComp[i] : "?"}`;
                const labelFill = known ? COLORS.accentDeep : COLORS.textFaint;
                return (
                  <g key={`bracket-${i}`}>
                    {!b.isEmpty ? (
                      <>
                        <line
                          x1={b.xLeft + 4} y1={bracketLineY}
                          x2={b.xRight - 4} y2={bracketLineY}
                          stroke={COLORS.borderStrong} strokeWidth="1.5"
                        />
                        <line
                          x1={b.xLeft + 4} y1={bracketLineY}
                          x2={b.xLeft + 4} y2={bracketLineY - 4}
                          stroke={COLORS.borderStrong} strokeWidth="1.5"
                        />
                        <line
                          x1={b.xRight - 4} y1={bracketLineY}
                          x2={b.xRight - 4} y2={bracketLineY - 4}
                          stroke={COLORS.borderStrong} strokeWidth="1.5"
                        />
                      </>
                    ) : (
                      <rect
                        x={b.midX - 7} y={bracketLineY - 6}
                        width="14" height="12" rx="3"
                        fill="none" stroke={COLORS.textFaint} strokeWidth="1"
                        strokeDasharray="2 2"
                      />
                    )}
                    <text
                      x={b.midX} y={bracketLabelY} textAnchor="middle"
                      fontSize="12" fontWeight="700"
                      fontFamily="'JetBrains Mono',monospace"
                      fill={labelFill}
                    >
                      {labelText}
                    </text>
                  </g>
                );
              })}

              {/* Composition readout (left) — progressive */}
              <text
                x={SVG_W / 2 - 110} y={compReadoutY} textAnchor="middle"
                fontSize="13" fontWeight="700"
                fontFamily="'JetBrains Mono',monospace"
                fill={COLORS.text}
              >
                <tspan fill={COLORS.textDim}>composition: (</tspan>
                {currentComp.map((v, i) => {
                  const known = partKnown(i);
                  return (
                    <React.Fragment key={i}>
                      {i > 0 && <tspan fill={COLORS.textDim}>, </tspan>}
                      <tspan fill={known ? COLORS.accentDeep : COLORS.textFaint}>
                        {known ? v : "?"}
                      </tspan>
                    </React.Fragment>
                  );
                })}
                <tspan fill={COLORS.textDim}>)</tspan>
              </text>

              {/* Connector ⇔ */}
              <text
                x={SVG_W / 2} y={compReadoutY} textAnchor="middle"
                fontSize="14" fontWeight="700" fill={COLORS.textFaint}
              >
                ⇔
              </text>

              {/* Bar-positions readout (right) — progressive */}
              <text
                x={SVG_W / 2 + 110} y={compReadoutY} textAnchor="middle"
                fontSize="13" fontWeight="700"
                fontFamily="'JetBrains Mono',monospace"
                fill={COLORS.text}
              >
                <tspan fill={COLORS.textDim}>bar positions: {"{"}</tspan>
                {Array.from({ length: numBars }, (_, i) => {
                  const known = slotsFilled > i;
                  return (
                    <React.Fragment key={i}>
                      {i > 0 && <tspan fill={COLORS.textDim}>, </tspan>}
                      <tspan fill={known ? COLORS.accentDeep : COLORS.textFaint}>
                        {known ? currentBarPositions[i] + 1 : "?"}
                      </tspan>
                    </React.Fragment>
                  );
                })}
                <tspan fill={COLORS.textDim}>{"}"}</tspan>
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
                Choose k − 1 = {k - 1} bar positions out of n + k − 1 = {n + k - 1} cells:
              </text>
              <text
                x={SVG_W / 2} y={formulaCardTop + 40} textAnchor="middle"
                fontSize="13" fontWeight="700" fill={COLORS.accentDeep}
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
                      fill={COLORS.textDim} fontSize="9" fontWeight="600"
                      fontFamily="'JetBrains Mono',monospace"
                    >
                      x₁ =
                    </text>
                    <text
                      x={avX} y={avY + 10}
                      textAnchor="middle" dominantBaseline="central"
                      fill={COLORS.accentDeep} fontSize="16" fontWeight="700"
                      fontFamily="'JetBrains Mono',monospace"
                    >
                      {firstVal}
                    </text>
                    {cards.map((comp, ci) => {
                      const col = ci % cardLayout.cols;
                      const row = Math.floor(ci / cardLayout.cols);
                      const cx = cardLayout.GRP_LEFT_M +
                                 col * (cardLayout.CARD_W + cardLayout.CARD_GAP_X);
                      const cy = cardsStartY +
                                 row * (cardLayout.CARD_H + cardLayout.CARD_GAP_Y);
                      return (
                        <g key={ci}>{renderStripCard(comp, cx, cy)}</g>
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
              title="Weak compositions (stars and bars)"
              formula={formulaText}
              intro={
                <>
                  Distribute <b>n</b> identical items into <b>k</b> distinct
                  bins, with empty bins allowed. Count the solutions to{" "}
                  <b>x₁ + x₂ + … + xₖ = n</b> in non-negative integers.
                  Equivalently: choose <b>k − 1</b> bar positions among{" "}
                  <b>n + k − 1</b> cells — the remaining cells hold the items.
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
                        First bin: <b>x₁ = {firstVal}</b>
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