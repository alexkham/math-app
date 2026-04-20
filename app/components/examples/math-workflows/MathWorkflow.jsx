import { useState, useMemo } from "react";

/* ─── palette ─── */
const P = {
  start:  { fill: "#F1F5F9", stroke: "#94A3B8", text: "#334155" },
  step:   { fill: "#F3E8FF", stroke: "#A78BFA", text: "#1E293B" },
  result: { fill: "#DBEAFE", stroke: "#3B82F6", text: "#1E40AF" },
  op:     { fill: "#CCFBF1", stroke: "#99F6E4", text: "#0F766E" },
  dec:    { fill: "#D1FAE5", stroke: "#6EE7B7", text: "#065F46" },
  purple: { fill: "#F3E8FF", stroke: "#A78BFA", text: "#6D28D9" },
  coral:  { fill: "#FFE4E6", stroke: "#FDA4AF", text: "#9F1239" },
  amber:  { fill: "#FEF3C7", stroke: "#FCD34D", text: "#92400E" },
  teal:   { fill: "#CCFBF1", stroke: "#5EEAD4", text: "#0F766E" },
  blue:   { fill: "#DBEAFE", stroke: "#93C5FD", text: "#1E40AF" },
  gray:   { fill: "#F1F5F9", stroke: "#CBD5E1", text: "#475569" },
  arrow:  "#94A3B8",
  text1:  "#1E293B",
  text2:  "#64748B",
};

const GROUP_COLORS = ["purple", "coral", "amber", "teal", "blue"];

/* ─── helpers ─── */
function tw(text, size = 14, mono = false) {
  const cw = mono ? size * 0.62 : size * 0.55;
  return text.length * cw;
}
function nw(expr, pad = 52) {
  return Math.max(tw(expr, 14, true) + pad, 90);
}

/* ─── svg primitives ─── */
function Defs() {
  return (
    <defs>
      <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5"
        markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </marker>
    </defs>
  );
}

function Arr({ x1, y1, x2, y2, dashed, color }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color || P.arrow} strokeWidth={1.5}
      strokeDasharray={dashed ? "5 3" : undefined}
      markerEnd="url(#ah)" />
  );
}

function CurveArr({ d, dashed, color }) {
  return (
    <path d={d} fill="none"
      stroke={color || P.arrow} strokeWidth={1.5}
      strokeDasharray={dashed ? "5 3" : undefined}
      markerEnd="url(#ah)" />
  );
}

function Box({ cx, y, w, h = 42, expr, variant = "step", subtitle, rx = 8 }) {
  const c = P[variant] || P.step;
  const x = cx - w / 2;
  const hasSubtitle = !!subtitle;
  const finalH = hasSubtitle ? 56 : h;
  return (
    <g>
      <rect x={x} y={y} width={w} height={finalH} rx={rx}
        fill={c.fill} stroke={c.stroke} strokeWidth={0.5} />
      <text x={cx} y={hasSubtitle ? y + 20 : y + finalH / 2}
        textAnchor="middle" dominantBaseline="central"
        fontFamily="'JetBrains Mono', monospace" fontSize={14}
        fontWeight={500} fill={c.text || P.text1}>
        {expr}
      </text>
      {hasSubtitle && (
        <text x={cx} y={y + 40}
          textAnchor="middle" dominantBaseline="central"
          fontFamily="'DM Sans', sans-serif" fontSize={12}
          fill={P.text2}>
          {subtitle}
        </text>
      )}
    </g>
  );
}

function Pill({ cx, y, text, variant = "op" }) {
  const c = P[variant] || P.op;
  const w = tw(text, 12) + 28;
  return (
    <g>
      <rect x={cx - w / 2} y={y - 12} width={w} height={24} rx={12}
        fill={c.fill} stroke={c.stroke} strokeWidth={0.5} />
      <text x={cx} y={y}
        textAnchor="middle" dominantBaseline="central"
        fontFamily="'DM Sans', sans-serif" fontSize={12}
        fill={c.text}>
        {text}
      </text>
    </g>
  );
}

function Label({ x, y, text, anchor = "middle" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} dominantBaseline="central"
      fontFamily="'DM Sans', sans-serif" fontSize={12} fill={P.text2}>
      {text}
    </text>
  );
}

function Equals({ x, y }) {
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central"
      fontFamily="'JetBrains Mono', monospace" fontSize={20}
      fontWeight={500} fill={P.text2}>
      =
    </text>
  );
}

/* ═══════════════════════════════════════════
   PATTERN RENDERERS
   each returns { els: JSX[], height: number }
   ═══════════════════════════════════════════ */

/* 1. LINEAR CHAIN */
function renderLinear(data) {
  const W = 680, cx = 300;
  const nodeH = 42, gap = 70;
  const els = [];
  let y = 40;

  data.steps.forEach((step, i) => {
    const isFirst = i === 0;
    const isLast = i === data.steps.length - 1;
    const variant = isFirst ? "start" : isLast ? "result" : "step";
    const w = nw(step.expr);

    if (i > 0) {
      els.push(<Arr key={`a${i}`} x1={cx} y1={y - gap + nodeH} x2={cx} y2={y} />);
      if (step.operation) {
        els.push(<Pill key={`p${i}`} cx={cx + w / 2 + 10 + tw(step.operation, 12) / 2 + 14} y={y - gap / 2 + nodeH / 2} text={step.operation} />);
      }
    }

    els.push(<Box key={`n${i}`} cx={cx} y={y} w={w} expr={step.expr} variant={variant} />);
    y += nodeH + gap;
  });

  return { els, height: y - gap + 30 };
}

/* 2. TREE / SPLIT-MERGE */
function renderTree(data) {
  const cx = 340;
  const els = [];
  let y = 40;
  const rootW = nw(data.root);

  els.push(<Box key="root" cx={cx} y={y} w={rootW} expr={data.root} variant="start" />);
  const rootBot = y + 42;
  y = rootBot + 50;

  const branchCount = data.branches.length;
  const spacing = Math.min(200, 520 / branchCount);
  const totalW = spacing * (branchCount - 1);
  const startX = cx - totalW / 2;

  data.branches.forEach((b, i) => {
    const bx = startX + i * spacing;
    const bw = nw(b.expr);
    const color = GROUP_COLORS[i % GROUP_COLORS.length];

    els.push(<Arr key={`ba${i}`} x1={cx} y1={rootBot} x2={bx} y2={y} />);
    els.push(<Box key={`bb${i}`} cx={bx} y={y} w={bw} expr={b.expr} variant={color} />);

    els.push(<Arr key={`bra${i}`} x1={bx} y1={y + 42} x2={bx} y2={y + 80} />);
    const rw = nw(b.result);
    els.push(<Box key={`br${i}`} cx={bx} y={y + 80} w={rw} expr={b.result} variant={color} />);
  });

  const branchBot = y + 80 + 42;
  const mergeY = branchBot + 50;

  data.branches.forEach((b, i) => {
    const bx = startX + i * spacing;
    els.push(<Arr key={`ma${i}`} x1={bx} y1={branchBot} x2={cx} y2={mergeY} />);
  });

  if (data.merge.operation) {
    els.push(<Pill key="mop" cx={cx} y={mergeY - 14} text={data.merge.operation} />);
  }

  const mw = nw(data.merge.expr);
  els.push(<Box key="merge" cx={cx} y={mergeY} w={mw} expr={data.merge.expr} variant="start" />);
  els.push(<Arr key="fa" x1={cx} y1={mergeY + 42} x2={cx} y2={mergeY + 80} />);

  const rw = nw(data.merge.result);
  els.push(<Box key="res" cx={cx} y={mergeY + 80} w={rw} expr={data.merge.result} variant="result" />);

  return { els, height: mergeY + 80 + 42 + 30 };
}

/* 3. TWO-COLUMN PARALLEL */
function renderParallel(data) {
  const lx = 180, rx = 500, mx = 340;
  const els = [];
  let y = 40;
  const nodeH = 42, gap = 70;

  data.steps.forEach((step, i) => {
    const isLast = i === data.steps.length - 1;
    const variant = isLast ? "result" : i === 0 ? "start" : "step";
    const lw = nw(step.left);
    const rw = nw(step.right);

    if (i > 0) {
      els.push(<Arr key={`la${i}`} x1={lx} y1={y - gap + nodeH} x2={lx} y2={y} />);
      els.push(<Arr key={`ra${i}`} x1={rx} y1={y - gap + nodeH} x2={rx} y2={y} />);
      if (step.operation) {
        els.push(<Pill key={`op${i}`} cx={mx} y={y - gap / 2 + nodeH / 2} text={step.operation} />);
      }
    }

    els.push(<Box key={`l${i}`} cx={lx} y={y} w={lw} expr={step.left} variant={variant} />);
    els.push(<Equals key={`eq${i}`} x={mx} y={y + nodeH / 2} />);
    els.push(<Box key={`r${i}`} cx={rx} y={y} w={rw} expr={step.right} variant={variant} />);

    y += nodeH + gap;
  });

  return { els, height: y - gap + 30 };
}

/* 4. SUBSTITUTION */
function renderSubstitution(data) {
  const els = [];
  const lx = 160, rx = 520;
  let y = 40;

  data.equations.forEach((eq, i) => {
    const ecx = i === 0 ? lx : rx;
    const ew = nw(eq.expr);
    const color = i === 0 ? "purple" : "coral";
    els.push(<Box key={`eq${i}`} cx={ecx} y={y} w={ew} expr={eq.expr} variant={color} />);
  });

  const eqBot = y + 42;
  y = eqBot + 16;

  data.substitutions.forEach((sub, i) => {
    const pillW = tw(sub.label, 12) + 28;
    els.push(
      <CurveArr key={`sa${i}`}
        d={`M${lx + nw(data.equations[0].expr) / 2} ${eqBot - 21} C${340} ${eqBot - 21}, ${340} ${y + 30}, ${rx - nw(sub.result) / 2} ${y + 52}`}
        dashed color="#0F766E" />
    );
    els.push(<Pill key={`sp${i}`} cx={340} y={y + 14} text={sub.label} />);

    y += 40;
    const rw = nw(sub.result);
    els.push(<Box key={`sr${i}`} cx={rx} y={y} w={rw} expr={sub.result} variant="coral" />);
    y += 42;
  });

  data.solveSteps.forEach((step, i) => {
    els.push(<Arr key={`ssa${i}`} x1={rx} y1={y} x2={rx} y2={y + 30} />);
    if (step.operation) {
      els.push(<Pill key={`ssp${i}`} cx={rx - nw(step.expr) / 2 - tw(step.operation, 12) / 2 - 20} y={y + 15} text={step.operation} />);
    }
    y += 30;
    const sw = nw(step.expr);
    const isLast = i === data.solveSteps.length - 1;
    els.push(<Box key={`ss${i}`} cx={rx} y={y} w={sw} expr={step.expr} variant={isLast ? "blue" : "coral"} />);
    y += 42;
  });

  if (data.backSubstitute) {
    const bs = data.backSubstitute;
    els.push(
      <CurveArr key="bsa"
        d={`M${rx - 60} ${y} C${340} ${y + 10}, ${300} ${y + 20}, ${lx + 60} ${y + 20}`}
        dashed color="#0F766E" />
    );
    els.push(<Pill key="bsp" cx={340} y={y + 6} text="back-substitute" />);
    y += 20;
    const bw1 = nw(bs.expr);
    els.push(<Box key="bse" cx={lx} y={y} w={bw1} expr={bs.expr} variant="purple" />);
    els.push(<Arr key="bsaa" x1={lx} y1={y + 42} x2={lx} y2={y + 72} />);
    y += 72;
    const bw2 = nw(bs.result);
    els.push(<Box key="bsr" cx={lx} y={y} w={bw2} expr={bs.result} variant="result" />);
    y += 42;
  }

  return { els, height: y + 30 };
}

/* 5. ITERATIVE LOOP */
function renderIterative(data) {
  const els = [];
  const cx = 260, loopX = 500;
  let y = 40;

  const iw = nw(data.initial);
  els.push(<Box key="init" cx={cx} y={y} w={iw} expr={data.initial} variant="start" rx={22} />);
  y += 72;

  els.push(<Arr key="a1" x1={cx} y1={y - 30} x2={cx} y2={y} />);

  const dw = nw(data.condition, 60);
  els.push(<Box key="dec" cx={cx} y={y} w={dw} expr={data.condition} variant="dec" />);
  const decBot = y + 42;

  els.push(<Arr key="a2" x1={cx + dw / 2} y1={y + 21} x2={loopX - 70} y2={y + 21} />);
  els.push(<Label key="ln" x={cx + dw / 2 + 16} y={y + 10} text="no" anchor="start" />);

  const opW = nw(data.operation);
  els.push(<Box key="op" cx={loopX} y={y} w={opW} expr={data.operation} variant="step" />);

  const loopBackY = y + 42 + 30;
  els.push(
    <CurveArr key="loop"
      d={`M${loopX} ${y + 42} L${loopX} ${loopBackY} L${cx - dw / 2 - 20} ${loopBackY} L${cx - dw / 2 - 20} ${y + 21} L${cx - dw / 2} ${y + 21}`}
      color={P.arrow} />
  );
  els.push(<Label key="lr" x={340} y={loopBackY + 14} text="repeat" />);

  y = loopBackY + 40;
  els.push(<Arr key="a3" x1={cx} y1={decBot} x2={cx} y2={y} />);
  els.push(<Label key="ly" x={cx + 12} y={decBot + 14} text="yes" anchor="start" />);

  if (data.iterations && data.iterations.length > 0) {
    const traceH = data.iterations.length * 20 + 20;
    els.push(
      <rect key="trbg" x={100} y={y} width={460} height={traceH} rx={8}
        fill="none" stroke={P.gray.stroke} strokeWidth={0.5} strokeDasharray="4 3" />
    );
    data.iterations.forEach((it, i) => {
      els.push(
        <text key={`tr${i}`} x={330} y={y + 18 + i * 20}
          textAnchor="middle" dominantBaseline="central"
          fontFamily="'JetBrains Mono', monospace" fontSize={12} fill={P.text2}>
          {it}
        </text>
      );
    });
    y += traceH + 16;
  }

  const rw = nw(data.result);
  els.push(<Box key="res" cx={cx} y={y} w={rw} expr={data.result} variant="result" />);

  return { els, height: y + 42 + 30 };
}

/* 6. ACCUMULATOR */
function renderAccumulator(data) {
  const els = [];
  const cx = 340;
  let y = 40;

  const sw = nw(data.source);
  els.push(<Box key="src" cx={cx} y={y} w={sw} expr={data.source} variant="start" />);
  const srcBot = y + 42;
  y = srcBot + 50;

  const partCount = data.parts.length;
  const spacing = Math.min(220, 560 / partCount);
  const totalW = spacing * (partCount - 1);
  const startX = cx - totalW / 2;

  data.parts.forEach((p, i) => {
    const px = startX + i * spacing;
    const color = GROUP_COLORS[i % GROUP_COLORS.length];
    const pw = Math.max(nw(p.result), tw(p.label, 12) + 30);

    els.push(<Arr key={`pa${i}`} x1={cx} y1={srcBot} x2={px} y2={y} />);
    els.push(<Box key={`pb${i}`} cx={px} y={y} w={pw} expr={p.result}
      variant={color} subtitle={p.label} />);
  });

  const partBot = y + 56;
  const mergeY = partBot + 50;

  data.parts.forEach((p, i) => {
    const px = startX + i * spacing;
    els.push(<Arr key={`ma${i}`} x1={px} y1={partBot} x2={cx} y2={mergeY} />);
  });

  if (data.combine.operation) {
    els.push(<Pill key="cop" cx={cx} y={mergeY - 14} text={data.combine.operation} />);
  }

  const cw = nw(data.combine.expr);
  els.push(<Box key="comb" cx={cx} y={mergeY} w={cw} expr={data.combine.expr} variant="start" />);
  els.push(<Arr key="fa" x1={cx} y1={mergeY + 42} x2={cx} y2={mergeY + 76} />);

  const rw = nw(data.combine.result);
  els.push(<Box key="res" cx={cx} y={mergeY + 76} w={rw} expr={data.combine.result} variant="result" />);

  return { els, height: mergeY + 76 + 42 + 30 };
}

/* 7. CONDITIONAL BRANCH */
function renderConditional(data) {
  const els = [];
  const cx = 340;
  let y = 40;

  if (data.setup) {
    data.setup.forEach((step, i) => {
      const sw = nw(step.expr);
      if (i > 0) {
        els.push(<Arr key={`sa${i}`} x1={cx} y1={y - 28} x2={cx} y2={y} />);
        if (step.operation) {
          els.push(<Pill key={`sp${i}`} cx={cx + sw / 2 + tw(step.operation, 12) / 2 + 24} y={y - 14} text={step.operation} />);
        }
      }
      els.push(<Box key={`s${i}`} cx={cx} y={y} w={sw} expr={step.expr} variant={i === 0 ? "start" : "step"} />);
      y += 70;
    });
  }

  const cond = data.condition;
  const dw = nw(cond.expr, 60);
  els.push(<Arr key="da" x1={cx} y1={y - 28} x2={cx} y2={y} />);
  els.push(<Box key="dec" cx={cx} y={y} w={dw} expr={cond.expr} variant="dec" />);
  const decBot = y + 42;
  y = decBot + 50;

  const bCount = cond.branches.length;
  const bSpacing = Math.min(200, 580 / bCount);
  const bTotalW = bSpacing * (bCount - 1);
  const bStartX = cx - bTotalW / 2;

  cond.branches.forEach((b, i) => {
    const bx = bStartX + i * bSpacing;
    const bw = Math.max(nw(b.expr), tw(b.result, 12) + 30, 120);
    const variant = b.active ? "result" : "gray";

    els.push(<Arr key={`ba${i}`} x1={cx} y1={decBot} x2={bx} y2={y} />);
    els.push(<Label key={`bl${i}`} x={(cx + bx) / 2 + 10} y={(decBot + y) / 2 - 4} text={b.label} />);
    els.push(<Box key={`bb${i}`} cx={bx} y={y} w={bw} expr={b.expr} variant={variant} subtitle={b.result} />);

    if (b.active) {
      els.push(
        <rect key={`bh${i}`} x={bx - bw / 2 - 4} y={y - 4} width={bw + 8} height={64} rx={12}
          fill="none" stroke={P.result.stroke} strokeWidth={1.5} strokeDasharray="4 3" />
      );
    }
  });

  return { els, height: y + 56 + 30 };
}

/* 8. GRID FILL */
function renderGrid(data) {
  const els = [];
  const cx = 340;
  const r = 22, gapX = 52, gapY = 52;

  const maxCols = Math.max(...data.rows.map(row => row.length));
  let y = 50;

  const cellPositions = [];

  data.rows.forEach((row, ri) => {
    const rowW = (row.length - 1) * gapX;
    const startX = cx - rowW / 2;
    const rowPositions = [];

    row.forEach((val, ci) => {
      const cellX = startX + ci * gapX;
      const isHighlight = data.highlight && data.highlight.row === ri && data.highlight.col === ci;
      const isSource = data.highlight && data.highlight.sources &&
        data.highlight.sources.some(s => s[0] === ri && s[1] === ci);
      const variant = isHighlight ? "teal" : isSource ? "purple" : "gray";
      const c = P[variant];

      els.push(
        <g key={`c${ri}_${ci}`}>
          <circle cx={cellX} cy={y} r={r} fill={c.fill} stroke={c.stroke} strokeWidth={0.5} />
          <text x={cellX} y={y} textAnchor="middle" dominantBaseline="central"
            fontFamily="'JetBrains Mono', monospace" fontSize={14}
            fontWeight={500} fill={c.text}>
            {val}
          </text>
        </g>
      );

      rowPositions.push({ x: cellX, y });
    });

    cellPositions.push(rowPositions);
    y += gapY;
  });

  if (data.highlight && data.highlight.sources) {
    const tgt = cellPositions[data.highlight.row][data.highlight.col];
    data.highlight.sources.forEach((s, i) => {
      const src = cellPositions[s[0]][s[1]];
      els.push(
        <Arr key={`ha${i}`} x1={src.x} y1={src.y + r + 2} x2={tgt.x} y2={tgt.y - r - 4} color="#0F766E" />
      );
    });

    if (data.highlight.annotation) {
      els.push(<Label key="ann" x={cx} y={y + 6} text={data.highlight.annotation} />);
      y += 24;
    }
  }

  return { els, height: y + 20 };
}

/* 9. REDUCTION / COLLAPSE */
function renderReduction(data) {
  const els = [];
  const cx = 340;
  let y = 40;

  const termCount = data.terms.length;
  const tSpacing = Math.min(120, 580 / termCount);
  const tTotalW = tSpacing * (termCount - 1);
  const tStartX = cx - tTotalW / 2;

  const termPositions = {};

  data.terms.forEach((t, i) => {
    const tx = tStartX + i * tSpacing;
    const tw_ = nw(t.expr, 24);
    const groupIdx = data.groups.findIndex(g => g.name === t.group);
    const color = GROUP_COLORS[groupIdx % GROUP_COLORS.length];

    els.push(<Box key={`t${i}`} cx={tx} y={y} w={tw_} expr={t.expr} variant={color} h={36} />);

    if (!termPositions[t.group]) termPositions[t.group] = [];
    termPositions[t.group].push({ x: tx, w: tw_ });
  });

  const termBot = y + 36;
  y = termBot + 60;

  const gCount = data.groups.length;
  const gSpacing = Math.min(180, 560 / gCount);
  const gTotalW = gSpacing * (gCount - 1);
  const gStartX = cx - gTotalW / 2;

  data.groups.forEach((g, i) => {
    const gx = gStartX + i * gSpacing;
    const color = GROUP_COLORS[i % GROUP_COLORS.length];
    const gw = Math.max(nw(g.result), tw(g.operation || "", 12) + 30, 90);

    const positions = termPositions[g.name] || [];
    positions.forEach((tp, j) => {
      els.push(<Arr key={`ga${i}_${j}`} x1={tp.x} y1={termBot} x2={gx} y2={y} />);
    });

    els.push(<Box key={`g${i}`} cx={gx} y={y} w={gw} expr={g.result} variant={color}
      subtitle={g.operation} />);
  });

  const gBot = y + 56;
  const mergeY = gBot + 40;

  data.groups.forEach((g, i) => {
    const gx = gStartX + i * gSpacing;
    els.push(<Arr key={`mr${i}`} x1={gx} y1={gBot} x2={cx} y2={mergeY} />);
  });

  const rw = nw(data.result);
  els.push(<Box key="res" cx={cx} y={mergeY} w={rw} expr={data.result} variant="result" />);

  return { els, height: mergeY + 42 + 30 };
}

/* 10. EXPANSION / FAN-OUT */
function renderExpansion(data) {
  const els = [];
  const cx = 340;
  let y = 40;

  const sw = nw(data.source);
  els.push(<Box key="src" cx={cx} y={y} w={sw} expr={data.source} variant="start" />);
  const srcBot = y + 42;
  y = srcBot + 50;

  const pCount = data.products.length;
  const pSpacing = Math.min(160, 600 / pCount);
  const pTotalW = pSpacing * (pCount - 1);
  const pStartX = cx - pTotalW / 2;

  data.products.forEach((p, i) => {
    const px = pStartX + i * pSpacing;
    const color = GROUP_COLORS[i % GROUP_COLORS.length];
    const pw = Math.max(nw(p.result), tw(p.label, 12) + 24, 100);

    els.push(<Arr key={`pa${i}`} x1={cx} y1={srcBot} x2={px} y2={y} />);
    els.push(<Box key={`pb${i}`} cx={px} y={y} w={pw} expr={p.result} variant={color}
      subtitle={p.label} />);
  });

  const pBot = y + 56;
  const combY = pBot + 50;

  data.products.forEach((p, i) => {
    const px = pStartX + i * pSpacing;
    els.push(<Arr key={`ca${i}`} x1={px} y1={pBot} x2={cx} y2={combY} />);
  });

  const cw = nw(data.combined);
  els.push(<Box key="comb" cx={cx} y={combY} w={cw} expr={data.combined} variant="start" />);

  els.push(<Arr key="fa" x1={cx} y1={combY + 42} x2={cx} y2={combY + 72} />);
  els.push(<Pill key="cop" cx={cx + cw / 2 + 70} y={combY + 57} text="combine like" />);

  const rw = nw(data.result);
  els.push(<Box key="res" cx={cx} y={combY + 72} w={rw} expr={data.result} variant="result" />);

  return { els, height: combY + 72 + 42 + 30 };
}

/* ═══════════════════════════════════════════
   RENDERER MAP
   ═══════════════════════════════════════════ */
const RENDERERS = {
  linear: renderLinear,
  tree: renderTree,
  parallel: renderParallel,
  substitution: renderSubstitution,
  iterative: renderIterative,
  accumulator: renderAccumulator,
  conditional: renderConditional,
  grid: renderGrid,
  reduction: renderReduction,
  expansion: renderExpansion,
};

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
function MathWorkflow({ type, title, data }) {
  const render = useMemo(() => {
    const fn = RENDERERS[type];
    if (!fn) return { els: [], height: 100 };
    return fn(data);
  }, [type, data]);

  const titleH = title ? 30 : 0;
  const totalH = render.height + titleH;

  return (
    <svg width="100%" viewBox={`0 0 680 ${totalH}`}
      style={{ display: "block", maxWidth: 680 }}>
      <Defs />
      {title && (
        <text x={340} y={18} textAnchor="middle" dominantBaseline="central"
          fontFamily="'DM Sans', sans-serif" fontSize={13} fill={P.text2}>
          {title}
        </text>
      )}
      <g transform={title ? "translate(0, 24)" : undefined}>
        {render.els}
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   MOCK DATA
   ═══════════════════════════════════════════ */
const MOCKS = [
  {
    type: "linear",
    title: "Linear chain — solve 2x + 3 = 11",
    data: {
      steps: [
        { expr: "2x + 3 = 11" },
        { expr: "2x = 8", operation: "subtract 3" },
        { expr: "x = 4", operation: "divide by 2" },
      ],
    },
  },
  {
    type: "tree",
    title: "Split-and-merge — evaluate (3+5)(2+4)",
    data: {
      root: "(3 + 5)(2 + 4)",
      branches: [
        { expr: "3 + 5", result: "8" },
        { expr: "2 + 4", result: "6" },
      ],
      merge: { operation: "multiply", expr: "8 \u00d7 6", result: "= 48" },
    },
  },
  {
    type: "parallel",
    title: "Two-column — solve 3x + 5 = 2x + 9",
    data: {
      steps: [
        { left: "3x + 5", right: "2x + 9" },
        { left: "x + 5", right: "9", operation: "subtract 2x" },
        { left: "x", right: "4", operation: "subtract 5" },
      ],
    },
  },
  {
    type: "substitution",
    title: "Substitution — system: y = 2x and x + y = 9",
    data: {
      equations: [
        { label: "eq1", expr: "y = 2x" },
        { label: "eq2", expr: "x + y = 9" },
      ],
      substitutions: [
        { from: "eq1", into: "eq2", label: "substitute y = 2x", result: "x + 2x = 9" },
      ],
      solveSteps: [
        { expr: "3x = 9", operation: "combine" },
        { expr: "x = 3", operation: "divide by 3" },
      ],
      backSubstitute: { expr: "y = 2(3)", result: "y = 6" },
    },
  },
  {
    type: "iterative",
    title: "Iterative loop — GCD(48, 18)",
    data: {
      initial: "a = 48, b = 18",
      condition: "b = 0 ?",
      operation: "r = a mod b; a\u2190b, b\u2190r",
      iterations: [
        "48 mod 18 = 12 \u2192 a=18, b=12",
        "18 mod 12 = 6  \u2192 a=12, b=6",
        "12 mod 6  = 0  \u2192 a=6,  b=0 \u2192 stop",
      ],
      result: "GCD = 6",
    },
  },
  {
    type: "accumulator",
    title: "Accumulator — long multiplication 23 \u00d7 45",
    data: {
      source: "23 \u00d7 45",
      parts: [
        { label: "ones: 23 \u00d7 5", result: "115" },
        { label: "tens: 23 \u00d7 40", result: "920" },
      ],
      combine: { operation: "add", expr: "115 + 920", result: "1035" },
    },
  },
  {
    type: "conditional",
    title: "Conditional — quadratic x\u00b2 \u2212 5x + 6 = 0",
    data: {
      setup: [
        { expr: "x\u00b2 \u2212 5x + 6 = 0" },
        { expr: "D = 25 \u2212 24 = 1", operation: "discriminant" },
      ],
      condition: {
        expr: "D \u2265 0 ?",
        branches: [
          { label: "D > 0", result: "two real roots", expr: "x = 2, x = 3", active: true },
          { label: "D = 0", result: "one root", expr: "x = \u2212b/2a" },
          { label: "D < 0", result: "complex roots", expr: "a \u00b1 bi" },
        ],
      },
    },
  },
  {
    type: "grid",
    title: "Grid fill — Pascal\u2019s triangle",
    data: {
      rows: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
      highlight: {
        row: 4,
        col: 2,
        sources: [[3, 1], [3, 2]],
        annotation: "3 + 3 = 6",
      },
    },
  },
  {
    type: "reduction",
    title: "Reduction — combine like terms",
    data: {
      terms: [
        { expr: "3x\u00b2", group: "x\u00b2" },
        { expr: "2x", group: "x" },
        { expr: "5x\u00b2", group: "x\u00b2" },
        { expr: "\u2212x", group: "x" },
        { expr: "4", group: "const" },
      ],
      groups: [
        { name: "x\u00b2", operation: "3 + 5 = 8", result: "8x\u00b2" },
        { name: "x", operation: "2 \u2212 1 = 1", result: "x" },
        { name: "const", operation: "constant", result: "4" },
      ],
      result: "8x\u00b2 + x + 4",
    },
  },
  {
    type: "expansion",
    title: "Expansion — FOIL (x + 3)(x + 5)",
    data: {
      source: "(x + 3)(x + 5)",
      products: [
        { label: "First", expr: "x \u00b7 x", result: "x\u00b2" },
        { label: "Outer", expr: "x \u00b7 5", result: "5x" },
        { label: "Inner", expr: "3 \u00b7 x", result: "3x" },
        { label: "Last", expr: "3 \u00b7 5", result: "15" },
      ],
      combined: "x\u00b2 + 5x + 3x + 15",
      result: "x\u00b2 + 8x + 15",
    },
  },
];

const TYPE_LABELS = [
  "Linear", "Tree", "Parallel", "Substitution", "Iterative",
  "Accumulator", "Conditional", "Grid", "Reduction", "Expansion",
];

/* ═══════════════════════════════════════════
   DEMO WRAPPER (default export)
   ═══════════════════════════════════════════ */
export default function MathWorkflowDemo() {
  const [idx, setIdx] = useState(0);
  const mock = MOCKS[idx];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: 720, margin: "0 auto" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 6,
        marginBottom: 20, justifyContent: "center",
      }}>
        {TYPE_LABELS.map((label, i) => (
          <button key={i} onClick={() => setIdx(i)}
            style={{
              padding: "6px 14px",
              borderRadius: 99,
              border: i === idx ? "1.5px solid #3B82F6" : "1px solid #CBD5E1",
              background: i === idx ? "#DBEAFE" : "#F8FAFC",
              color: i === idx ? "#1E40AF" : "#475569",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
            }}>
            {label}
          </button>
        ))}
      </div>
      <MathWorkflow type={mock.type} title={mock.title} data={mock.data} />
    </div>
  );
}