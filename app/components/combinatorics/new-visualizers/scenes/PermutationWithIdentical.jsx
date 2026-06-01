// /components/visual-tools/scenes/PermutationWithIdenticalItems.jsx
// Scenario #5 — Permutations of a multiset: n! / (k₁! · k₂! · …)
// Replaces the n-stepper with a Multiset stepper cycling a curated set
// of presets. Source row shows duplicates explicitly; dimming is by
// source position (not by item id) so the right A and the left A
// don't dim together. Groups are by distinct first item; per-group
// counts vary, so ROW_H is computed per group.

import React, {
  useState, useEffect, useRef, useCallback, useMemo,
} from "react";
import {
  ROW_H_MIN, SVG_W_DEFAULT, COLORS,
  factorial, getItems, nameOf, tint,
  ThemeStyles, VTRoot, PageWrap, HelpBanner, HelpMark,
  SceneGrid, SceneSvgWrap,
  Ball, ItemDefs,
  Chip, ChipAndName,
  ControlBar, Divider, ModeSwitch,
  TransportButtons, SpeedSlider,
  RightPanel, InfoPanelHeader, StepRow,
} from "../shared.jsx";

// ── Curated multisets, ordered by complexity ────────────────────────
const MULTISETS = [
  { id: "AAB",   ids: [0, 0, 1] },
  { id: "AAAB",  ids: [0, 0, 0, 1] },
  { id: "AABB",  ids: [0, 0, 1, 1] },
  { id: "AABC",  ids: [0, 0, 1, 2] },
  { id: "AAABB", ids: [0, 0, 0, 1, 1] },
  { id: "AABBC", ids: [0, 0, 1, 1, 2] },
];

// Card layout per multiset id
const CARD_CFG = {
  "AAB":   { MINI_R: 22, cols: null },
  "AAAB":  { MINI_R: 18, cols: null },
  "AABB":  { MINI_R: 18, cols: null },
  "AABC":  { MINI_R: 18, cols: 3 },
  "AAABB": { MINI_R: 14, cols: null },
  "AABBC": { MINI_R: 14, cols: 3 },
};

// ── Combinatorics helpers (local) ───────────────────────────────────

// All DISTINCT permutations of a multiset, ordered so all permutations
// starting with the smallest distinct id come first.
function distinctPerms(arr) {
  if (arr.length <= 1) return [arr.slice()];
  const out = [];
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) continue;
    seen.add(arr[i]);
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (const p of distinctPerms(rest)) out.push([arr[i], ...p]);
  }
  return out;
}

function countItems(arr) {
  const c = {};
  for (const x of arr) c[x] = (c[x] || 0) + 1;
  return c;
}

function multinomial(arr) {
  const c = countItems(arr);
  let r = factorial(arr.length);
  for (const k of Object.values(c)) r /= factorial(k);
  return r;
}

function removeOne(arr, x) {
  const i = arr.indexOf(x);
  if (i < 0) return arr.slice();
  return [...arr.slice(0, i), ...arr.slice(i + 1)];
}

// Map each outcome position → source positional index (leftmost unused
// instance of the required color).
function assignSourceIndices(outcome, source) {
  const used = new Array(source.length).fill(false);
  const out = [];
  for (const itemId of outcome) {
    let found = -1;
    for (let i = 0; i < source.length; i++) {
      if (!used[i] && source[i] === itemId) { found = i; break; }
    }
    if (found >= 0) { used[found] = true; out.push(found); }
    else out.push(-1);
  }
  return out;
}

// ── Inline control: Multiset stepper ────────────────────────────────
function MultisetStepper({ value, onChange, options, tip }) {
  const idx = options.findIndex((o) => o.id === value.id);
  const prev = () => onChange(options[(idx - 1 + options.length) % options.length]);
  const next = () => onChange(options[(idx + 1) % options.length]);
  return (
    <div className="vt-stepper">
      <span className="vt-stepper-label">multiset =</span>
      <button className="vt-stepper-btn" onClick={prev}>◀</button>
      <span
        className="vt-stepper-value"
        style={{ minWidth: 64, fontSize: 14, letterSpacing: 1 }}
      >
        {value.id}
      </span>
      <button className="vt-stepper-btn" onClick={next}>▶</button>
      {tip ? <HelpMark tip={tip} /> : null}
    </div>
  );
}

// ── Inline list components for narration ────────────────────────────
function pluralName(item, mode, count) {
  const base = nameOf(item, mode);
  return count === 1 ? base : `${base}s`;
}

function CountChip({ item, count, mode }) {
  return (
    <>
      <b>{count}</b>{" "}
      <Chip item={item} mode={mode} />
      <b>{pluralName(item, mode, count)}</b>
    </>
  );
}

function CountsList({ counts, items, mode }) {
  const entries = Object.entries(counts)
    .filter(([, c]) => c > 0)
    .map(([id, c]) => ({ item: items[+id], count: c }));
  if (entries.length === 0) return null;
  if (entries.length === 1) {
    return <CountChip item={entries[0].item} count={entries[0].count} mode={mode} />;
  }
  if (entries.length === 2) {
    return (
      <>
        <CountChip item={entries[0].item} count={entries[0].count} mode={mode} />
        {" and "}
        <CountChip item={entries[1].item} count={entries[1].count} mode={mode} />
      </>
    );
  }
  const init = entries.slice(0, -1);
  const last = entries[entries.length - 1];
  return (
    <>
      {init.map((e, i) => (
        <React.Fragment key={i}>
          <CountChip item={e.item} count={e.count} mode={mode} />
          {", "}
        </React.Fragment>
      ))}
      {"and "}
      <CountChip item={last.item} count={last.count} mode={mode} />
    </>
  );
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

export default function PermutationWithIdenticalItems() {
  // ── State ─────────────────────────────────────────────
  const [multiset, setMultiset] = useState(MULTISETS[0]);
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
  const multisetIds = multiset.ids;
  const nTotal = multisetIds.length;
  const numDistinct = Math.max(...multisetIds) + 1;
  const items = useMemo(() => getItems(numDistinct), [numDistinct]);

  const outcomes = useMemo(() => distinctPerms(multisetIds), [multisetIds]);
  const itemsPerOutcome = nTotal;
  const totalCount = outcomes.length;

  const distinctFirsts = useMemo(() => {
    const seen = new Set();
    const out = [];
    for (const id of multisetIds) {
      if (!seen.has(id)) { seen.add(id); out.push(id); }
    }
    return out;
  }, [multisetIds]);

  const groupSizes = useMemo(
    () => distinctFirsts.map((id) => multinomial(removeOne(multisetIds, id))),
    [distinctFirsts, multisetIds]
  );

  const remainingCounts = useMemo(
    () => distinctFirsts.map((id) => countItems(removeOne(multisetIds, id))),
    [distinctFirsts, multisetIds]
  );

  const overallCounts = useMemo(() => countItems(multisetIds), [multisetIds]);

  // Reset on multiset change
  useEffect(() => {
    clearTimers();
    setOutcomeIdx(0);
    setSlotsFilled(0);
    setAnimState("idle");
    setCompleted([]);
    setPlaying(false);
  }, [multiset.id, clearTimers]);

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
    const cfg = CARD_CFG[multiset.id] || { MINI_R: 14, cols: null };
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

    // Per-group block sizes
    const groupBlocks = groupSizes.map((sz) => {
      const rows = Math.ceil(sz / cols);
      const blockH = rows * (CARD_H + CARD_GAP_Y) - CARD_GAP_Y;
      const rowH = Math.max(ROW_H_MIN, blockH + 2 * TOP_PAD);
      return { rows, blockH, rowH };
    });

    const srcStartX = (SVG_W - (nTotal - 1) * SRC_SP) / 2;
    const srcPos = multisetIds.map((_, i) => ({ x: srcStartX + i * SRC_SP, y: SRC_Y }));
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
  }, [multiset.id, groupSizes, itemsPerOutcome, nTotal, multisetIds]);

  // ── Step status (per group, by distinctFirsts index) ─
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

  // Y offset of each visible step block (cumulative)
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

  // Per-positional source dimming
  const sourceAssignment = useMemo(
    () => assignSourceIndices(currentOutcome, multisetIds),
    [currentOutcome, multisetIds]
  );

  const dimmedSrcIdx = new Set();
  for (let i = 0; i < slotsFilled; i++) {
    if (sourceAssignment[i] >= 0) dimmedSrcIdx.add(sourceAssignment[i]);
  }
  if (flyingSlotIdx >= 0 && isFlying && sourceAssignment[flyingSlotIdx] >= 0) {
    dimmedSrcIdx.add(sourceAssignment[flyingSlotIdx]);
  }

  // ── Header texts ──────────────────────────────────────
  const denomCounts = Object.values(overallCounts);
  const denomTermsAll = denomCounts.map((c) => `${c}!`).join(" · ");
  const formulaShort = `${nTotal}!/(${denomTermsAll}) = ${totalCount}`;
  const formulaText = (
    <>
      {nTotal}! / ({denomTermsAll}) = {totalCount}
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
    const counts = remainingCounts[gi];
    const remN = nTotal - 1;
    const sz = groupSizes[gi];
    const denomTerms = Object.values(counts)
      .filter((c) => c > 0)
      .map((c) => `${c}!`)
      .join(" · ");
    return (
      <>
        Position 1 is locked to <ChipAndName item={item} mode={mode} />.
        {" "}The remaining <b>{remN}</b> position{remN === 1 ? "" : "s"} hold{" "}
        <CountsList counts={counts} items={items} mode={mode} />, arranged
        in <b>{remN}! / ({denomTerms}) = {sz}</b> distinct way{sz === 1 ? "" : "s"}.
      </>
    );
  };

  // ── Render ────────────────────────────────────────────
  return (
    <VTRoot>
      <ThemeStyles />
      <PageWrap>
        <HelpBanner>
          Press <b>▶ Play</b> to build all <b>n! / (k₁!·k₂!·…)</b> distinct
          arrangements of the chosen multiset, or <b>Step ▶</b> to advance one
          ball at a time. Cycle the <b>multiset</b> to try different duplicate
          patterns.
        </HelpBanner>

        <ControlBar>
          <ModeSwitch value={mode} onChange={setMode} />
          <Divider />
          <MultisetStepper
            value={multiset}
            onChange={setMultiset}
            options={MULTISETS}
            tip="Composition of duplicate items. Each letter = one item; repeats indicate identical copies."
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
                SOURCE — MULTISET {multiset.id} (n = {nTotal})
              </text>

              {/* Source balls — positional rendering with positional dimming */}
              {multisetIds.map((id, i) => (
                <g
                  key={i}
                  opacity={dimmedSrcIdx.has(i) ? 0.22 : 1}
                  style={{ transition: "opacity 0.25s" }}
                >
                  <Ball
                    item={items[id]}
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
                BUILD AREA
              </text>

              {/* Build slot outlines */}
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
                const srcIdx = sourceAssignment[flyingSlotIdx];
                if (srcIdx < 0) return null;
                const s = layout.srcPos[srcIdx];
                const t = layout.buildPos[flyingSlotIdx];
                const colorId = multisetIds[srcIdx];
                return (
                  <line
                    x1={s.x} y1={s.y + SRC_R + 2}
                    x2={t.x} y2={t.y - BUILD_R - 2}
                    stroke={items[colorId].color}
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

              {/* Flying / spawning ball — origin uses sourceAssignment */}
              {flyingSlotIdx >= 0 && flyingSlotIdx < currentOutcome.length && (() => {
                const srcIdx = sourceAssignment[flyingSlotIdx];
                if (srcIdx < 0) return null;
                const it = items[currentOutcome[flyingSlotIdx]];
                const s = layout.srcPos[srcIdx];
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
              title="Permutations with identical items"
              formula={formulaText}
              intro={
                <>
                  Arrange a multiset of <b>n</b> items where some are identical.
                  Swapping two copies of the same item doesn&apos;t produce a
                  new arrangement, so we divide the total <b>n!</b> by{" "}
                  <b>k!</b> for each group of identical copies.
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
                        First item: <Chip item={item} mode={mode} />
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