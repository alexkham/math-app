// /components/visual-tools/scenes/PartitionIntoGroups.jsx
// Scenario #7 — Partition into Groups, n!/(n₁!·n₂!·…·nₖ!).
// Distinct items split into k labeled boxes of fixed sizes.
// Groups in info pane = which box contains item #1; per-group ROW_H.

import React, {
  useState, useEffect, useRef, useCallback, useMemo,
} from "react";
import {
  ROW_H_MIN, SVG_W_DEFAULT, COLORS,
  combinations, factorial, getItems, nameOf, tint,
  ThemeStyles, VTRoot, PageWrap, HelpBanner, HelpMark,
  SceneGrid, SceneSvgWrap,
  Ball, ItemDefs,
  Chip, ChipAndName,
  ControlBar, Divider, ModeSwitch,
  TransportButtons, SpeedSlider,
  RightPanel, InfoPanelHeader, StepRow,
} from "../shared.jsx";

// ── Curated partition presets ───────────────────────────────────────
// "label" is what the user sees; sizes sum to n.
const PARTITIONS = [
  { id: "2+2",     sizes: [2, 2],       n: 4, total: 6  },
  { id: "3+1",     sizes: [3, 1],       n: 4, total: 4  },
  { id: "2+1+1",   sizes: [2, 1, 1],    n: 4, total: 12 },
  { id: "4+1",     sizes: [4, 1],       n: 5, total: 5  },
  { id: "3+2",     sizes: [3, 2],       n: 5, total: 10 },
  { id: "3+1+1",   sizes: [3, 1, 1],    n: 5, total: 20 },
  { id: "2+2+1",   sizes: [2, 2, 1],    n: 5, total: 30 },
];

const BOX_LABELS = ["A", "B", "C", "D"];

// Card layout — keyed by preset id. Cards are wider than single-row
// scenarios because they contain k box groupings side-by-side.
const CARD_CFG = {
  "2+2":   { MINI_R: 16, cols: null },
  "3+1":   { MINI_R: 16, cols: null },
  "2+1+1": { MINI_R: 14, cols: null },
  "4+1":   { MINI_R: 14, cols: null },
  "3+2":   { MINI_R: 14, cols: null },
  "3+1+1": { MINI_R: 12, cols: null },
  "2+2+1": { MINI_R: 11, cols: 3 },
};

// ── Helpers ─────────────────────────────────────────────────────────

// Generate all distinct partitions of items into boxes of given sizes.
// Returns array of arrays of arrays:
//   [ [box0items, box1items, ...], ... ]
// Canonical: within each box, members ascending; box 0 contents enumerated
// via combinations(remaining, size), so outer order is lex by box 0.
function generatePartitions(items, sizes) {
  if (sizes.length === 0) return items.length === 0 ? [[]] : [];
  if (sizes.length === 1) {
    return items.length === sizes[0] ? [[items.slice()]] : [];
  }
  const [first, ...restSizes] = sizes;
  const out = [];
  for (const box0 of combinations(items, first)) {
    const box0Set = new Set(box0);
    const remaining = items.filter((x) => !box0Set.has(x));
    for (const restPart of generatePartitions(remaining, restSizes)) {
      out.push([box0, ...restPart]);
    }
  }
  return out;
}

// Which box contains item #0?
function whichBoxHasZero(part) {
  for (let i = 0; i < part.length; i++) {
    if (part[i].includes(0)) return i;
  }
  return -1;
}

// Sort partitions so all outcomes with item 0 in box 0 come first,
// then box 1, then box 2 — gives clean group reveal animation.
function sortByItemZeroBox(parts) {
  return parts.slice().sort((a, b) => {
    const ba = whichBoxHasZero(a);
    const bb = whichBoxHasZero(b);
    if (ba !== bb) return ba - bb;
    // Tiebreak: lex by flattened sequence
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < Math.max(a[i].length, b[i].length); j++) {
        const ai = a[i][j] ?? -1;
        const bj = b[i][j] ?? -1;
        if (ai !== bj) return ai - bj;
      }
    }
    return 0;
  });
}

// Number of partitions where item 0 is fixed in box i.
// = (n-1)! / (n₁! · … · (nᵢ−1)! · … · nₖ!)
function groupSizeFor(boxIdx, sizes) {
  const n = sizes.reduce((a, b) => a + b, 0);
  let r = factorial(n - 1);
  for (let j = 0; j < sizes.length; j++) {
    const reduced = j === boxIdx ? sizes[j] - 1 : sizes[j];
    r /= factorial(reduced);
  }
  return Math.round(r);
}

// ── Partition stepper control ───────────────────────────────────────
function PartitionStepper({ value, onChange, options, tip }) {
  const idx = options.findIndex((o) => o.id === value.id);
  const prev = () => onChange(options[(idx - 1 + options.length) % options.length]);
  const next = () => onChange(options[(idx + 1) % options.length]);
  return (
    <div className="vt-stepper">
      <span className="vt-stepper-label">partition =</span>
      <button className="vt-stepper-btn" onClick={prev}>◀</button>
      <span
        className="vt-stepper-value"
        style={{ minWidth: 60, fontSize: 14, letterSpacing: 1 }}
      >
        {value.id}
      </span>
      <button className="vt-stepper-btn" onClick={next}>▶</button>
      {tip ? <HelpMark tip={tip} /> : null}
    </div>
  );
}

// ── SVG geometry ────────────────────────────────────────────────────
const SVG_W = SVG_W_DEFAULT;
const PAD = 30;
const SRC_R = 26;
const SRC_Y = 56;
const SRC_SP = 80;
const BUILD_BALL_R = 20;
const BUILD_BALL_SP = 48;
const BOX_PAD_X = 10;
const BOX_PAD_Y = 8;
const BOX_GAP = 22;
const BOX_LABEL_OFFSET = 14;
const BUILD_Y_OFFSET = 110;
const RESULTS_TOP_OFFSET = 70;

export default function PartitionIntoGroups() {
  // ── State ─────────────────────────────────────────────
  const [preset, setPreset] = useState(PARTITIONS[0]);
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

  // ── Derived ───────────────────────────────────────────
  const sizes = preset.sizes;
  const k = sizes.length;
  const n = preset.n;
  const items = useMemo(() => getItems(n), [n]);
  const itemIds = useMemo(() => items.map((i) => i.id), [items]);
  const itemsPerOutcome = n;

  const outcomes = useMemo(() => {
    const raw = generatePartitions(itemIds, sizes);
    return sortByItemZeroBox(raw);
  }, [itemIds, sizes]);
  const totalCount = outcomes.length;

  // distinctFirsts = box indices that actually contain item 0 somewhere
  const distinctFirsts = useMemo(
    () => Array.from({ length: k }, (_, i) => i),
    [k]
  );
  const groupSizes = useMemo(
    () => distinctFirsts.map((bi) => groupSizeFor(bi, sizes)),
    [distinctFirsts, sizes]
  );

  // Flat sequence (slot 0..n-1) → { boxIdx, posInBox, itemId } for the
  // currently-building outcome.
  const slotPlan = useMemo(() => {
    const o = outcomes[outcomeIdx];
    if (!o) return [];
    const out = [];
    for (let bi = 0; bi < o.length; bi++) {
      for (let pj = 0; pj < o[bi].length; pj++) {
        out.push({ boxIdx: bi, posInBox: pj, itemId: o[bi][pj] });
      }
    }
    return out;
  }, [outcomes, outcomeIdx]);

  // Reset on preset change
  useEffect(() => {
    clearTimers();
    setOutcomeIdx(0);
    setSlotsFilled(0);
    setAnimState("idle");
    setCompleted([]);
    setPlaying(false);
  }, [preset.id, clearTimers]);

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

  // ── Box positions in build area ──────────────────────
  const buildLayout = useMemo(() => {
    const boxWidths = sizes.map(
      (s) => s * BUILD_BALL_SP + 2 * BOX_PAD_X
    );
    const totalW = boxWidths.reduce((a, b) => a + b, 0) + (k - 1) * BOX_GAP;
    const startX = (SVG_W - totalW) / 2;
    const boxX = [];
    let xacc = startX;
    for (const w of boxWidths) {
      boxX.push(xacc);
      xacc += w + BOX_GAP;
    }
    const boxH = 2 * BUILD_BALL_R + 2 * BOX_PAD_Y;
    const buildY = SRC_Y + SRC_R + BUILD_Y_OFFSET;
    const ballY = buildY + boxH / 2;
    // Slot positions per box, per index
    const slotPosByBoxIdx = sizes.map((s, bi) => {
      return Array.from({ length: s }, (_, j) => ({
        x: boxX[bi] + BOX_PAD_X + (j + 0.5) * BUILD_BALL_SP,
        y: ballY,
      }));
    });
    return {
      boxWidths, boxX, boxH, buildY, ballY, totalW, startX,
      slotPosByBoxIdx,
    };
  }, [sizes, k]);

  // ── Card layout ──────────────────────────────────────
  const cardLayout = useMemo(() => {
    const cfg = CARD_CFG[preset.id] || { MINI_R: 12, cols: null };
    const MINI_R = cfg.MINI_R;
    const MINI_SP = MINI_R * 2 + 3;
    const CARD_PAD_X = 8;
    const BOX_SEP_W = 10;
    // Card width: total ball spans across all boxes + separators
    const CARD_W =
      CARD_PAD_X * 2 +
      n * MINI_SP +
      (k - 1) * BOX_SEP_W;
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

    return {
      MINI_R, MINI_SP, CARD_PAD_X, BOX_SEP_W, CARD_W, CARD_H,
      CARD_GAP_X, CARD_GAP_Y, GRP_LBL_W, ACCENT_W, GRP_LEFT_M,
      cols, TOP_PAD, groupBlocks,
    };
  }, [preset.id, n, k, groupSizes]);

  const resultsTop = buildLayout.buildY + buildLayout.boxH + RESULTS_TOP_OFFSET;

  // ── Source positions ─────────────────────────────────
  const srcStartX = (SVG_W - (n - 1) * SRC_SP) / 2;
  const srcPos = items.map((_, i) => ({ x: srcStartX + i * SRC_SP, y: SRC_Y }));

  // ── Step status per group ────────────────────────────
  const stepStatuses = useMemo(() => {
    return distinctFirsts.map((boxIdx, gi) => {
      const k_done = completed.filter((o) => whichBoxHasZero(o) === boxIdx).length;
      const size = groupSizes[gi];
      if (k_done === size) return "done";
      if (animState === "done") return "done";
      if (k_done > 0) return "current";
      if (animState !== "idle") {
        const building = outcomes[outcomeIdx];
        return building && whichBoxHasZero(building) === boxIdx ? "current" : "pending";
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
      acc += cardLayout.groupBlocks[gi].rowH + 8;
    }
    return { offsets: offs, total: Math.max(0, acc - 8) };
  }, [visibleSteps, cardLayout.groupBlocks]);

  const svgH = resultsTop + visibleOffsets.total + 24;

  // ── Build animation state ────────────────────────────
  const currentPlan = slotPlan;
  const flyingSlotIdx =
    animState === "spawn" || animState === "fly" ? slotsFilled : -1;
  const isFlying = animState === "fly";
  const atSource = animState === "spawn";

  // Dim source items already placed (or in flight)
  const dimmed = new Set();
  for (let i = 0; i < slotsFilled; i++) {
    if (currentPlan[i]) dimmed.add(currentPlan[i].itemId);
  }
  if (flyingSlotIdx >= 0 && isFlying && currentPlan[flyingSlotIdx]) {
    dimmed.add(currentPlan[flyingSlotIdx].itemId);
  }

  // ── Header texts ──────────────────────────────────────
  const denomTerms = sizes.map((s) => `${s}!`).join(" · ");
  const formulaShort = `${n}!/(${denomTerms}) = ${totalCount}`;
  const formulaText = (
    <>
      {n}! / ({denomTerms}) = {totalCount}
    </>
  );

  let statusText;
  if (animState === "done") {
    statusText = `Complete · ${totalCount} / ${totalCount}`;
  } else if (animState === "idle" && completed.length === 0) {
    statusText = "Press Play or Step to begin";
  } else {
    const building = outcomes[outcomeIdx];
    const bi = building ? whichBoxHasZero(building) : -1;
    const sz = bi >= 0 ? groupSizes[bi] : 0;
    const k_done = completed.filter((o) => whichBoxHasZero(o) === bi).length +
                   (animState === "complete" ? 1 : 0);
    statusText = bi >= 0
      ? `Item 1 in Box ${BOX_LABELS[bi]}: ${k_done} / ${sz}`
      : "";
  }

  // ── Narration per group ──────────────────────────────
  const narrationFor = (gi) => {
    const boxIdx = distinctFirsts[gi];
    const firstItem = items[0];
    const sz = groupSizes[gi];
    const reducedSizes = sizes.map((s, j) => j === boxIdx ? s - 1 : s);
    const reducedDenom = reducedSizes.map((s) => `${s}!`).join(" · ");

    return (
      <>
        <ChipAndName item={firstItem} mode={mode} /> is placed in{" "}
        <b>Box {BOX_LABELS[boxIdx]}</b> (size <b>{sizes[boxIdx]}</b>).
        {" "}The remaining <b>{n - 1}</b> items partition into the other
        {" "}{k - 1 === 1 ? "box" : "boxes"} of sizes{" "}
        {reducedSizes.map((s, i) => (
          <React.Fragment key={i}>
            {i > 0 ? ", " : ""}<b>{s}</b>
          </React.Fragment>
        ))}
        {" "}(Box {BOX_LABELS[boxIdx]} needs <b>{sizes[boxIdx] - 1}</b> more), giving{" "}
        <b>{n - 1}! / ({reducedDenom}) = {sz}</b> partition{sz === 1 ? "" : "s"}.
      </>
    );
  };

  // ── Render mini box-card ─────────────────────────────
  function renderPartCard(part, cx, cy) {
    const { MINI_R, MINI_SP, CARD_PAD_X, BOX_SEP_W, CARD_W, CARD_H } = cardLayout;
    let cursor = cx + CARD_PAD_X;
    const elems = [
      <rect
        key="bg"
        x={cx} y={cy}
        width={CARD_W} height={CARD_H} rx="6"
        fill="#ffffff"
        stroke={COLORS.border} strokeWidth="1"
      />,
    ];
    part.forEach((box, bi) => {
      box.forEach((itmId, j) => {
        const bx = cursor + MINI_R + j * MINI_SP;
        const by = cy + CARD_H / 2;
        elems.push(
          <Ball
            key={`${bi}-${j}`}
            item={items[itmId]}
            cx={bx} cy={by} r={MINI_R} mode={mode}
          />
        );
      });
      cursor += box.length * MINI_SP;
      if (bi < part.length - 1) {
        // Render thin divider
        const sepX = cursor + BOX_SEP_W / 2;
        elems.push(
          <line
            key={`sep-${bi}`}
            x1={sepX} y1={cy + 6}
            x2={sepX} y2={cy + CARD_H - 6}
            stroke={COLORS.borderStrong}
            strokeWidth="1"
          />
        );
        cursor += BOX_SEP_W;
      }
    });
    return elems;
  }

  // ── Render ────────────────────────────────────────────
  return (
    <VTRoot>
      <ThemeStyles />
      <PageWrap>
        <HelpBanner>
          Press <b>▶ Play</b> to build all{" "}
          <b>n! / (n₁!·n₂!·…·nₖ!)</b> partitions of <b>n</b> distinct items
          into <b>k</b> labeled boxes of fixed sizes, or <b>Step ▶</b> to
          advance one ball at a time. Cycle the <b>partition</b> to try
          different shapes.
        </HelpBanner>

        <ControlBar>
          <ModeSwitch value={mode} onChange={setMode} />
          <Divider />
          <PartitionStepper
            value={preset}
            onChange={setPreset}
            options={PARTITIONS}
            tip="Partition shape: sizes of each labeled box. Sum equals n."
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
                    cx={srcPos[i].x} cy={srcPos[i].y}
                    r={SRC_R} mode={mode}
                  />
                </g>
              ))}

              {/* BUILD label */}
              <text
                x={PAD} y={buildLayout.buildY - 14}
                fill={COLORS.textDim} fontSize="10" fontWeight="600"
                fontFamily="'JetBrains Mono',monospace" letterSpacing="2"
              >
                BUILD BOXES ({preset.id})
              </text>

              {/* Boxes */}
              {sizes.map((s, bi) => (
                <g key={bi}>
                  <rect
                    x={buildLayout.boxX[bi]} y={buildLayout.buildY}
                    width={buildLayout.boxWidths[bi]} height={buildLayout.boxH}
                    rx="10"
                    fill={COLORS.surface}
                    stroke={COLORS.borderStrong}
                    strokeWidth="1.5"
                  />
                  <text
                    x={buildLayout.boxX[bi] + buildLayout.boxWidths[bi] / 2}
                    y={buildLayout.buildY - BOX_LABEL_OFFSET}
                    textAnchor="middle"
                    fill={COLORS.textDim}
                    fontSize="11" fontWeight="700"
                    fontFamily="'JetBrains Mono',monospace"
                    letterSpacing="1"
                  >
                    BOX {BOX_LABELS[bi]} ({s})
                  </text>
                  {/* Slot outlines */}
                  {buildLayout.slotPosByBoxIdx[bi].map((p, j) => (
                    <circle
                      key={j}
                      cx={p.x} cy={p.y} r={BUILD_BALL_R + 2}
                      fill="none"
                      stroke={COLORS.borderStrong}
                      strokeWidth="1" strokeDasharray="4 3"
                      opacity="0.5"
                    />
                  ))}
                </g>
              ))}

              {/* Dotted guide line during spawn/fly */}
              {flyingSlotIdx >= 0 && currentPlan[flyingSlotIdx] && (() => {
                const plan = currentPlan[flyingSlotIdx];
                const s = srcPos[plan.itemId];
                const t = buildLayout.slotPosByBoxIdx[plan.boxIdx][plan.posInBox];
                return (
                  <line
                    x1={s.x} y1={s.y + SRC_R + 2}
                    x2={t.x} y2={t.y - BUILD_BALL_R - 2}
                    stroke={items[plan.itemId].color}
                    strokeWidth="2" strokeDasharray="5 4" opacity="0.7"
                  />
                );
              })()}

              {/* Landed balls */}
              {Array.from({ length: slotsFilled }).map((_, i) => {
                const plan = currentPlan[i];
                if (!plan) return null;
                const it = items[plan.itemId];
                const t = buildLayout.slotPosByBoxIdx[plan.boxIdx][plan.posInBox];
                return (
                  <Ball
                    key={`landed-${outcomeIdx}-${i}`}
                    item={it} cx={t.x} cy={t.y}
                    r={BUILD_BALL_R} mode={mode}
                  />
                );
              })}

              {/* Flying ball */}
              {flyingSlotIdx >= 0 && currentPlan[flyingSlotIdx] && (() => {
                const plan = currentPlan[flyingSlotIdx];
                const it = items[plan.itemId];
                const s = srcPos[plan.itemId];
                const t = buildLayout.slotPosByBoxIdx[plan.boxIdx][plan.posInBox];
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

              {/* Complete flash — pulsing ring around all boxes */}
              {animState === "complete" && (
                <rect
                  x={buildLayout.startX - 10}
                  y={buildLayout.buildY - 6}
                  width={buildLayout.totalW + 20}
                  height={buildLayout.boxH + 12}
                  rx="14" fill="none"
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
                const boxIdx = distinctFirsts[gi];
                // Use items[0] (Red) consistently as group avatar — group
                // is "where item 1 went". Box-letter shown in label.
                const block = cardLayout.groupBlocks[gi];
                const rowY = resultsTop + visibleOffsets.offsets[vi];
                const cards = completed.filter((o) => whichBoxHasZero(o) === boxIdx);
                const cardsStartY = rowY + (block.rowH - block.blockH) / 2;
                const avX = PAD + cardLayout.GRP_LBL_W / 2;
                const avY = cardsStartY + block.blockH / 2;
                const tintColor = items[0].color;

                return (
                  <g key={gi}>
                    <rect
                      x={cardLayout.GRP_LEFT_M - 8} y={rowY}
                      width={SVG_W - cardLayout.GRP_LEFT_M - PAD + 16}
                      height={block.rowH} rx="10"
                      fill={tint(tintColor, 0.06)}
                    />
                    <rect
                      x={PAD + cardLayout.GRP_LBL_W + 2} y={rowY + 8}
                      width={cardLayout.ACCENT_W} height={block.rowH - 16}
                      rx="1.5" fill={tintColor} opacity="0.9"
                    />
                    {/* Avatar: small "→ Box X" indicator */}
                    <text
                      x={avX} y={avY - 6}
                      textAnchor="middle" dominantBaseline="central"
                      fill={COLORS.textDim} fontSize="9" fontWeight="600"
                      fontFamily="'JetBrains Mono',monospace"
                    >
                      → Box
                    </text>
                    <text
                      x={avX} y={avY + 10}
                      textAnchor="middle" dominantBaseline="central"
                      fill={COLORS.accentDeep} fontSize="16" fontWeight="700"
                      fontFamily="'JetBrains Mono',monospace"
                    >
                      {BOX_LABELS[boxIdx]}
                    </text>
                    {/* Cards */}
                    {cards.map((part, ci) => {
                      const col = ci % cardLayout.cols;
                      const row = Math.floor(ci / cardLayout.cols);
                      const cx = cardLayout.GRP_LEFT_M + col * (cardLayout.CARD_W + cardLayout.CARD_GAP_X);
                      const cy = cardsStartY + row * (cardLayout.CARD_H + cardLayout.CARD_GAP_Y);
                      return (
                        <g key={ci}>{renderPartCard(part, cx, cy)}</g>
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
              title="Partitions into labeled groups"
              formula={formulaText}
              intro={
                <>
                  Split <b>n</b> distinct items into <b>k</b> labeled boxes
                  with fixed sizes <b>(n₁, n₂, …, nₖ)</b>. The boxes are
                  distinguishable; only which items are together in a box
                  matters — internal order within a box doesn&apos;t.
                  Equivalent to the multinomial coefficient.
                </>
              }
            />
            <div className="vt-right-rows">
              {visibleSteps.map((gi) => {
                const boxIdx = distinctFirsts[gi];
                const status = stepStatuses[gi];
                const sz = groupSizes[gi];
                const k_done = completed.filter((o) => whichBoxHasZero(o) === boxIdx).length;
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
                        <Chip item={items[0]} mode={mode} />
                        <b>{nameOf(items[0], mode)}</b>
                        {" → Box "}
                        <b>{BOX_LABELS[boxIdx]}</b>
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