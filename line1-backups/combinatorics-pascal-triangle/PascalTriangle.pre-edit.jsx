// /components/visual-tools/scenes/PascalsTriangle.jsx
// Scenario #11 — Pascal's Triangle visualizer.
// Interactive exploration of binomial coefficients C(n, r) and the
// identities that connect them. Unlike the 10 counting-principle scenes
// (#1–#10) there is no temporal animation — instead, the user clicks a
// cell to focus on it and switches between four "lenses":
//
//   • Pascal's identity — focus + its two parents
//   • Hockey stick      — focus as the puck, diagonal stick summing to it
//   • Row sum           — focus's whole row, summing to 2ⁿ
//   • Symmetry          — focus and its mirror across the row's center
//
// A polynomial banner below the triangle always shows the focused row's
// expansion of (a + b)ⁿ (the row coefficients ARE the polynomial coefficients).
// The right panel shows the factorial breakdown C(n,r) = n!/(r!·(n−r)!)
// for the focused cell.

import React, { useState, useMemo, useCallback } from "react";
import {
  COLORS,
  factorial,
  SVG_W_DEFAULT,
  ThemeStyles, VTRoot, PageWrap, HelpBanner,
  SceneGrid, SceneSvgWrap,
  ControlBar, Divider,
  NStepper,
  RightPanel,
} from "../shared.jsx";

// ── Constants ───────────────────────────────────────────────────────
const N_MIN = 4;
const N_MAX = 9;

const MODES = [
  { id: "identity",  label: "Pascal's identity" },
  { id: "hockey",    label: "Hockey stick" },
  { id: "rowsum",    label: "Row sum" },
  { id: "symmetry",  label: "Symmetry" },
];

const SVG_W = SVG_W_DEFAULT;
const PAD = 30;
const TOP_Y = 40;
const ROW_H = 56;
const CELL_W = 52;
const CELL_H = 44;
const CELL_SP = 60;

// Symmetry green isn't in shared COLORS, define locally.
const COLOR_SYMMETRY = "#10b981";
const COLOR_SYMMETRY_SOFT = "rgba(16,185,129,0.18)";
const COLOR_HIGHLIGHT_SOFT = "rgba(245,158,11,0.18)";

// ── Math helpers ────────────────────────────────────────────────────
function binomial(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}
function pow2(n) { return 1 << n; }

// Unicode superscripts for small exponents
function sup(n) {
  const map = ["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];
  return String(n).split("").map((d) => map[+d]).join("");
}

// One term of (a + b)ⁿ: coeff · a^(n−r) · b^r.
function formatTerm(n, r, coeff) {
  const aPow = n - r;
  const bPow = r;
  const aPart = aPow === 0 ? "" : aPow === 1 ? "a" : "a" + sup(aPow);
  const bPart = bPow === 0 ? "" : bPow === 1 ? "b" : "b" + sup(bPow);
  const letters = aPart + bPart;
  if (letters === "") return String(coeff);          // n=0
  return (coeff === 1 ? "" : String(coeff)) + letters;
}
function buildPolynomial(n) {
  const terms = [];
  for (let r = 0; r <= n; r++) {
    terms.push(formatTerm(n, r, binomial(n, r)));
  }
  return terms.join(" + ");
}

// ── Geometry ────────────────────────────────────────────────────────
function cellCenterX(n, r) {
  return SVG_W / 2 + (r - n / 2) * CELL_SP;
}
function cellCenterY(n) {
  return TOP_Y + n * ROW_H + CELL_H / 2;
}
function cellLeftX(n, r) { return cellCenterX(n, r) - CELL_W / 2; }
function cellTopY(n) { return TOP_Y + n * ROW_H; }

// ── Highlight computation ───────────────────────────────────────────
// Returns Sets of cell keys ("n,r") classified by role.
function computeHighlights(mode, focusN, focusR) {
  const focus = new Set();
  const related = new Set();
  const secondary = new Set();
  if (focusN === null || focusR === null) {
    return { focus, related, secondary };
  }
  const key = (n, r) => n + "," + r;
  focus.add(key(focusN, focusR));

  if (mode === "identity") {
    if (focusN >= 1) {
      if (focusR - 1 >= 0) related.add(key(focusN - 1, focusR - 1));
      if (focusR <= focusN - 1) related.add(key(focusN - 1, focusR));
    }
  } else if (mode === "hockey") {
    if (focusR >= 1) {
      for (let i = focusR - 1; i <= focusN - 1; i++) {
        related.add(key(i, focusR - 1));
      }
    }
  } else if (mode === "rowsum") {
    for (let c = 0; c <= focusN; c++) {
      if (c !== focusR) related.add(key(focusN, c));
    }
  } else if (mode === "symmetry") {
    if (focusN - focusR !== focusR) {
      secondary.add(key(focusN, focusN - focusR));
    }
  }
  return { focus, related, secondary };
}

// ── Local components ────────────────────────────────────────────────

function ModeGroup({ value, options, onChange }) {
  return (
    <div className="pt-mode-group">
      {options.map((opt) => (
        <button
          key={opt.id}
          className={"pt-mode-btn" + (value === opt.id ? " active" : "")}
          onClick={() => onChange(opt.id)}
          type="button"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

// Local styles (Pascal-specific classes not present in shared ThemeStyles).
function PascalStyles() {
  const css = `
    .pt-mode-group {
      display: inline-flex;
      background: ${COLORS.bg};
      border: 1.5px solid ${COLORS.border};
      border-radius: 8px;
      overflow: hidden;
    }
    .pt-mode-btn {
      padding: 6px 12px; border: none; background: transparent;
      color: ${COLORS.textDim}; font-size: 13px; font-weight: 500; cursor: pointer;
      border-right: 1.5px solid ${COLORS.border};
      font-family: inherit;
    }
    .pt-mode-btn:last-child { border-right: none; }
    .pt-mode-btn.active { background: ${COLORS.accent}; color: white; }
    .pt-mode-btn:hover:not(.active) { background: ${COLORS.accentSoft}; }

    .pt-clear-btn {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 6px 10px;
      border: 1.5px solid ${COLORS.borderStrong};
      background: ${COLORS.surface}; color: ${COLORS.text};
      border-radius: 6px; cursor: pointer;
      font-size: 13px; font-weight: 500; font-family: inherit;
    }
    .pt-clear-btn:hover:not(:disabled) {
      background: ${COLORS.accentSoft}; border-color: ${COLORS.accent};
    }
    .pt-clear-btn:disabled { opacity: 0.35; cursor: not-allowed; }

    .pt-info-section { color: ${COLORS.textDim}; font-size: 13px; margin-bottom: 12px; }
    .pt-info-section b { color: ${COLORS.text}; }
    .pt-info-arith {
      background: ${COLORS.bg};
      border: 1.5px solid ${COLORS.border};
      border-radius: 6px;
      padding: 8px 10px;
      margin: 6px 0;
      font-family: "JetBrains Mono", monospace;
      font-size: 13px;
      color: ${COLORS.text};
      line-height: 1.6;
    }
    .pt-info-arith .accent { color: ${COLORS.accentDeep}; font-weight: 700; }
    .pt-info-arith .highlight { color: ${COLORS.highlight}; font-weight: 700; }
    .pt-info-arith .symmetry { color: ${COLOR_SYMMETRY}; font-weight: 700; }
    .pt-info-hint { color: ${COLORS.textFaint}; font-size: 12px; font-style: italic; }
  `;
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

// ── Cell renderer ───────────────────────────────────────────────────
function PascalCell({ n, r, role, onClick }) {
  const x = cellLeftX(n, r);
  const y = cellTopY(n);
  const value = binomial(n, r);

  let fill, stroke, strokeWidth, textFill, strokeDash;
  if (role === "focus") {
    fill = COLORS.accent; stroke = COLORS.accentDeep; strokeWidth = 2;
    textFill = "white"; strokeDash = null;
  } else if (role === "related") {
    fill = COLOR_HIGHLIGHT_SOFT; stroke = COLORS.highlight; strokeWidth = 1.8;
    textFill = COLORS.text; strokeDash = null;
  } else if (role === "secondary") {
    fill = COLOR_SYMMETRY_SOFT; stroke = COLOR_SYMMETRY; strokeWidth = 1.8;
    textFill = COLORS.text; strokeDash = null;
  } else {
    fill = COLORS.surface; stroke = COLORS.border; strokeWidth = 1;
    textFill = COLORS.text; strokeDash = "3 3";
  }

  return (
    <g style={{ cursor: "pointer" }} onClick={() => onClick(n, r)}>
      <rect
        x={x} y={y} width={CELL_W} height={CELL_H} rx="6"
        fill={fill}
        stroke={stroke} strokeWidth={strokeWidth}
        strokeDasharray={strokeDash || undefined}
      />
      <text
        x={x + CELL_W / 2} y={y + CELL_H / 2 + 1}
        textAnchor="middle" dominantBaseline="central"
        fill={textFill}
        fontSize={value >= 100 ? 14 : 16}
        fontWeight="700"
        fontFamily="'JetBrains Mono',monospace"
      >
        {value}
      </text>
      {role === "focus" && (
        <text
          x={x + CELL_W / 2} y={y + CELL_H + 12}
          textAnchor="middle"
          fill={COLORS.accentDeep} fontSize="10" fontWeight="600"
          fontFamily="'JetBrains Mono',monospace"
        >
          C({n}, {r})
        </text>
      )}
    </g>
  );
}

export default function PascalsTriangle() {
  // ── State ─────────────────────────────────────────────
  const [N, setN] = useState(6);
  const [mode, setMode] = useState("identity");
  const [focusN, setFocusN] = useState(4);
  const [focusR, setFocusR] = useState(2);

  const selectCell = useCallback((n, r) => {
    setFocusN(n);
    setFocusR(r);
  }, []);
  const clearFocus = useCallback(() => {
    setFocusN(null);
    setFocusR(null);
  }, []);
  const changeN = useCallback((v) => {
    setN(v);
    if (focusN !== null && focusN > v) {
      setFocusN(null);
      setFocusR(null);
    }
  }, [focusN]);

  // ── Derived ───────────────────────────────────────────
  const highlights = useMemo(
    () => computeHighlights(mode, focusN, focusR),
    [mode, focusN, focusR]
  );

  const triangleBottom = TOP_Y + (N + 1) * ROW_H;
  const BANNER_GAP = 18;
  const BANNER_H = 60;
  const bannerY = triangleBottom + BANNER_GAP;
  const svgH = bannerY + BANNER_H + 16;

  const bannerRow = focusN !== null ? focusN : 0;
  const polyString = buildPolynomial(bannerRow);

  // ── Render: control bar ──────────────────────────────
  // ── Render: SVG (cells + connectors + polynomial banner) ────────
  const cells = [];
  const { focus, related, secondary } = highlights;
  const cellKey = (n, r) => n + "," + r;

  // Build rows of cells
  for (let n = 0; n <= N; n++) {
    for (let r = 0; r <= n; r++) {
      const k = cellKey(n, r);
      let role = "default";
      if (focus.has(k)) role = "focus";
      else if (related.has(k)) role = "related";
      else if (secondary.has(k)) role = "secondary";
      cells.push(
        <PascalCell
          key={k}
          n={n} r={r}
          role={role}
          onClick={selectCell}
        />
      );
    }
  }

  // Connectors per mode
  const connectors = [];

  if (mode === "identity" && focusN !== null && focusN >= 1) {
    const n = focusN, r = focusR;
    const tx = cellCenterX(n, r), ty = cellTopY(n);
    if (r - 1 >= 0) {
      connectors.push(
        <line
          key="id-left"
          x1={cellCenterX(n - 1, r - 1)} y1={cellTopY(n - 1) + CELL_H}
          x2={tx} y2={ty}
          stroke={COLORS.accent} strokeWidth="2"
          opacity="0.5" strokeDasharray="4 3"
        />
      );
    }
    if (r <= n - 1) {
      connectors.push(
        <line
          key="id-right"
          x1={cellCenterX(n - 1, r)} y1={cellTopY(n - 1) + CELL_H}
          x2={tx} y2={ty}
          stroke={COLORS.accent} strokeWidth="2"
          opacity="0.5" strokeDasharray="4 3"
        />
      );
    }
  }

  if (mode === "hockey" && focusN !== null && focusR >= 1) {
    const P = focusN, Q = focusR;
    const stickCells = [];
    for (let i = Q - 1; i <= P - 1; i++) stickCells.push([i, Q - 1]);
    if (stickCells.length > 0) {
      let d = "";
      for (let idx = 0; idx < stickCells.length; idx++) {
        const [sn, sr] = stickCells[idx];
        d += (idx === 0 ? "M" : "L") + cellCenterX(sn, sr) + " " + cellCenterY(sn) + " ";
      }
      d += "L" + cellCenterX(P, Q) + " " + cellCenterY(P);
      connectors.push(
        <path
          key="hockey-stick"
          d={d}
          fill="none"
          stroke={COLORS.highlight} strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          opacity="0.55"
        />
      );
    }
  }

  if (mode === "symmetry" && focusN !== null) {
    const n = focusN, r = focusR;
    if (n - r !== r) {
      const x1 = cellCenterX(n, r), y1 = cellCenterY(n);
      const x2 = cellCenterX(n, n - r), y2 = cellCenterY(n);
      const midX = (x1 + x2) / 2;
      const midY = y1 - 22;
      connectors.push(
        <path
          key="sym-arc"
          d={`M${x1} ${y1} Q${midX} ${midY} ${x2} ${y2}`}
          fill="none"
          stroke={COLOR_SYMMETRY} strokeWidth="2"
          opacity="0.5" strokeDasharray="4 3"
        />
      );
    }
  }

  // Row labels and row-sum label on right edge
  const rowLabels = [];
  for (let n = 0; n <= N; n++) {
    const y = cellCenterY(n);
    rowLabels.push(
      <text
        key={`rl-${n}`}
        x={PAD + 6} y={y}
        textAnchor="start" dominantBaseline="central"
        fill={COLORS.textFaint} fontSize="11" fontWeight="600"
        fontFamily="'JetBrains Mono',monospace"
      >
        n = {n}
      </text>
    );
    if (mode === "rowsum" && focusN === n) {
      const sum = pow2(n);
      rowLabels.push(
        <text
          key={`rs-${n}`}
          x={SVG_W - PAD - 6} y={y}
          textAnchor="end" dominantBaseline="central"
          fill={COLORS.highlight} fontSize="13" fontWeight="700"
          fontFamily="'JetBrains Mono',monospace"
        >
          sum = {sum} = 2{sup(n)}
        </text>
      );
    }
  }

  // ── Render: right panel content ──────────────────────
  const modeLabel = MODES.find((m) => m.id === mode).label;

  let cellInfoSection = null;
  let factorialBlock = null;
  let interpretationSection = null;

  if (focusN !== null && focusR !== null) {
    const value = binomial(focusN, focusR);
    cellInfoSection = (
      <div className="pt-info-section">
        Selected: <b>C({focusN}, {focusR}) = {value}</b>
      </div>
    );

    const fNum = factorial(focusN);
    const fR = factorial(focusR);
    const fNR = factorial(focusN - focusR);
    factorialBlock = (
      <div className="pt-info-arith">
        <span className="accent">C({focusN}, {focusR})</span>
        {" "}= {focusN}! / ({focusR}! · {focusN - focusR}!)
        <br />
        = {fNum} / ({fR} · {fNR}) = <span className="accent">{value}</span>
      </div>
    );

    interpretationSection = (
      <div className="pt-info-section">
        <b>C(n, r)</b> counts the number of ways to choose <b>r</b> items
        from a set of <b>n</b> distinct items (order doesn&apos;t matter).
      </div>
    );
  }

  // Mode-specific content
  let modeContent = null;
  if (focusN === null) {
    modeContent = (
      <div className="pt-info-hint">
        Click any cell in the triangle to start.
      </div>
    );
  } else if (mode === "identity") {
    modeContent = renderIdentityContent(focusN, focusR);
  } else if (mode === "hockey") {
    modeContent = renderHockeyContent(focusN, focusR);
  } else if (mode === "rowsum") {
    modeContent = renderRowsumContent(focusN);
  } else if (mode === "symmetry") {
    modeContent = renderSymmetryContent(focusN, focusR);
  }

  return (
    <VTRoot>
      <ThemeStyles />
      <PascalStyles />
      <PageWrap>
        <HelpBanner>
          <b>Pascal&apos;s triangle</b> displays the binomial coefficients
          <b> C(n, r)</b>. Click any cell to focus on it, then switch{" "}
          <b>modes</b> to see different identities the triangle encodes:
          Pascal&apos;s rule, hockey-stick sums, row sums (= 2<sup>n</sup>),
          and symmetry.
        </HelpBanner>

        <ControlBar>
          <ModeGroup value={mode} options={MODES} onChange={setMode} />
          <Divider />
          <NStepper
            value={N}
            onChange={changeN}
            min={N_MIN}
            max={N_MAX}
            tip="Number of rows to display (rows 0 through N)."
          />
          <Divider />
          <button
            className="pt-clear-btn"
            disabled={focusN === null}
            onClick={clearFocus}
            type="button"
          >
            Clear selection
          </button>
        </ControlBar>

        <SceneGrid>
          {/* ───── Left: SVG ───── */}
          <SceneSvgWrap>
            <svg
              className="vt-scene-svg"
              width={SVG_W}
              height={svgH}
              viewBox={`0 0 ${SVG_W} ${svgH}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={SVG_W} height={svgH} fill="#ffffff" />

              {/* Row labels and right-edge sum label */}
              {rowLabels}

              {/* Connectors (under cells) */}
              {connectors}

              {/* Cells (on top) */}
              {cells}

              {/* Polynomial banner */}
              <rect
                x={PAD} y={bannerY}
                width={SVG_W - 2 * PAD} height={BANNER_H} rx="8"
                fill={COLORS.surfaceTint}
                stroke={COLORS.accentLight} strokeWidth="1.5"
              />
              <text
                x={SVG_W / 2} y={bannerY + 18} textAnchor="middle"
                fill={COLORS.textDim} fontSize="11" fontWeight="600"
                fontFamily="'JetBrains Mono',monospace" letterSpacing="1"
              >
                ROW {bannerRow} = COEFFICIENTS OF (a + b){sup(bannerRow)}
              </text>
              <text
                x={SVG_W / 2} y={bannerY + 44} textAnchor="middle"
                fontSize={bannerRow >= 8 ? 12 : 14} fontWeight="700"
                fontFamily="'JetBrains Mono',monospace"
              >
                <tspan fill={COLORS.accentDeep}>(a + b){sup(bannerRow)}</tspan>
                <tspan fill={COLORS.textDim}>{" = "}</tspan>
                <tspan fill={COLORS.text}>{polyString}</tspan>
              </text>
            </svg>
          </SceneSvgWrap>

          {/* ───── Right: info panel ───── */}
          <RightPanel>
            <div className="vt-info-title">{modeLabel}</div>
            {cellInfoSection}
            {factorialBlock}
            {interpretationSection}
            {modeContent}
          </RightPanel>
        </SceneGrid>
      </PageWrap>
    </VTRoot>
  );
}

// ── Mode-specific right-panel content ───────────────────────────────

function renderIdentityContent(n, r) {
  const intro = (
    <div className="pt-info-section">
      <b>Pascal&apos;s identity.</b> Every interior cell equals the sum of
      the two cells immediately above it:{" "}
      <b>C(n, r) = C(n−1, r−1) + C(n−1, r)</b>.
    </div>
  );

  if (n === 0) {
    return (
      <>
        {intro}
        <div className="pt-info-hint">
          The apex has no parents — by convention C(0, 0) = 1.
        </div>
      </>
    );
  }

  const left = r - 1 >= 0 ? binomial(n - 1, r - 1) : null;
  const right = r <= n - 1 ? binomial(n - 1, r) : null;
  const value = binomial(n, r);

  let arith;
  if (left !== null && right !== null) {
    arith = (
      <div className="pt-info-arith">
        <span className="accent">C({n}, {r})</span>
        {" "}= C({n - 1}, {r - 1}) + C({n - 1}, {r})
        <br />
        = <span className="highlight">{left}</span>
        {" + "}<span className="highlight">{right}</span>
        {" = "}<span className="accent">{value}</span>
      </div>
    );
  } else if (left === null) {
    arith = (
      <div className="pt-info-arith">
        <span className="accent">C({n}, 0)</span> sits on the left edge —
        only one parent: C({n - 1}, 0) = {right}.
        <br />By Pascal&apos;s rule, edges are always <b>1</b>.
      </div>
    );
  } else {
    arith = (
      <div className="pt-info-arith">
        <span className="accent">C({n}, {n})</span> sits on the right edge —
        only one parent: C({n - 1}, {n - 1}) = {left}.
        <br />By Pascal&apos;s rule, edges are always <b>1</b>.
      </div>
    );
  }

  return <>{intro}{arith}</>;
}

function renderHockeyContent(n, r) {
  const intro = (
    <div className="pt-info-section">
      <b>Hockey-stick identity.</b> A diagonal of cells (the &ldquo;stick&rdquo;)
      sums to the cell below-and-across (the &ldquo;puck&rdquo;):{" "}
      <b>Σ<sub>i=r</sub><sup>n</sup> C(i, r) = C(n+1, r+1)</b>. Treat the
      selected cell as the puck.
    </div>
  );

  if (r < 1) {
    return (
      <>
        {intro}
        <div className="pt-info-hint">
          This cell can&apos;t be a puck (its column is 0). Pick a cell
          whose column ≥ 1.
        </div>
      </>
    );
  }

  const P = n, Q = r;
  const stickValues = [];
  const stickLabels = [];
  for (let i = Q - 1; i <= P - 1; i++) {
    stickValues.push(binomial(i, Q - 1));
    stickLabels.push(`C(${i}, ${Q - 1})`);
  }
  const puckValue = binomial(P, Q);

  return (
    <>
      {intro}
      <div className="pt-info-arith">
        {stickLabels.join(" + ")}
        {" = "}<span className="accent">C({P}, {Q})</span>
        <br />
        <span className="highlight">{stickValues.join(" + ")}</span>
        {" = "}<span className="accent">{puckValue}</span>
      </div>
    </>
  );
}

function renderRowsumContent(n) {
  const intro = (
    <div className="pt-info-section">
      <b>Row sum.</b> The cells in row <b>n</b> add up to <b>2<sup>n</sup></b>.
      Each row counts all subsets of an n-element set, grouped by size —
      and there are <b>2<sup>n</sup></b> subsets total.
    </div>
  );

  const values = [];
  const labels = [];
  for (let c = 0; c <= n; c++) {
    values.push(binomial(n, c));
    labels.push(`C(${n}, ${c})`);
  }
  const sum = values.reduce((a, b) => a + b, 0);

  return (
    <>
      {intro}
      <div className="pt-info-arith">
        {labels.join(" + ")} = <span className="accent">2{sup(n)}</span>
        <br />
        <span className="highlight">{values.join(" + ")}</span>
        {" = "}<span className="accent">{sum}</span>
      </div>
    </>
  );
}

function renderSymmetryContent(n, r) {
  const intro = (
    <div className="pt-info-section">
      <b>Symmetry.</b> The triangle is symmetric across its vertical axis:{" "}
      <b>C(n, r) = C(n, n − r)</b>. Choosing <b>r</b> items to include is
      the same as choosing <b>n − r</b> items to leave out.
    </div>
  );

  const mirror = n - r;
  const v1 = binomial(n, r);

  let arith;
  if (mirror === r) {
    arith = (
      <div className="pt-info-arith">
        <span className="accent">C({n}, {r})</span> is its own mirror (the
        center of an even-length row): the symmetry maps it to itself.
        <br />C({n}, {r}) = <span className="accent">{v1}</span>.
      </div>
    );
  } else {
    arith = (
      <div className="pt-info-arith">
        <span className="accent">C({n}, {r})</span>
        {" = "}<span className="symmetry">C({n}, {mirror})</span>
        {" = "}<span className="accent">{v1}</span>
      </div>
    );
  }

  return <>{intro}{arith}</>;
}