import { useMemo, useContext, createContext } from "react";
import { processContent } from "../../utils/contentProcessor";

/* ═══════════════════════════════════════════════════════════════
   THEMES
   ═══════════════════════════════════════════════════════════════ */

/* Palette shape (every theme must provide all keys):
     Semantic slots — start, step, result, op, dec
     Group slots    — purple, coral, amber, teal, blue, gray
                      (keys kept for backward compat; only the RGB
                      values differ per theme, not the key names)
     arrow          — default arrow color
     highlight      — emphasis/cross-flow arrows (was hardcoded teal-700)
     text1, text2   — main / secondary text
   Each color slot is { fill, stroke, text }. */

const THEMES = {
  /* v8 discipline: two blues + gray. Group slots cycle through
     restrained blue/gray shades instead of purple/coral/amber/teal. */
  default: {
    start:  { fill: "#F3F4F6", stroke: "#D1D5DB", text: "#374151" },
    step:   { fill: "#EFF6FF", stroke: "#BFDBFE", text: "#1E40AF" },
    result: { fill: "#DBEAFE", stroke: "#2563EB", text: "#1E40AF" },
    op:     { fill: "#EFF6FF", stroke: "#BFDBFE", text: "#1E40AF" },
    dec:    { fill: "#F3F4F6", stroke: "#9CA3AF", text: "#374151" },
    purple: { fill: "#DBEAFE", stroke: "#2563EB", text: "#1E40AF" },
    coral:  { fill: "#F3F4F6", stroke: "#D1D5DB", text: "#374151" },
    amber:  { fill: "#EFF6FF", stroke: "#BFDBFE", text: "#1E40AF" },
    teal:   { fill: "#E5E7EB", stroke: "#9CA3AF", text: "#374151" },
    blue:   { fill: "#DBEAFE", stroke: "#2563EB", text: "#1E40AF" },
    gray:   { fill: "#F3F4F6", stroke: "#D1D5DB", text: "#6B7280" },
    arrow:     "#9CA3AF",
    highlight: "#2563EB",
    text1:     "#0F172A",
    text2:     "#6B7280",
  },

  /* Original colorful palette, kept intact. */
  vivid: {
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
    arrow:     "#94A3B8",
    highlight: "#0F766E",
    text1:     "#1E293B",
    text2:     "#64748B",
  },
};

/* Extend/override a base theme. Missing keys inherit from default. */
export function createTheme(overrides = {}, base = "default") {
  const baseTheme = THEMES[base] || THEMES.default;
  return { ...baseTheme, ...overrides };
}

export { THEMES };

const GROUP_COLORS = ["purple", "coral", "amber", "teal", "blue"];

/* Context so primitives can read the resolved palette without prop-drilling. */
const PaletteContext = createContext(THEMES.default);

/* ─── helpers ─── */
function measureText(text, size = 14, mono = false) {
  const charWidth = mono ? size * 0.62 : size * 0.55;
  return text.length * charWidth;
}

function boxWidth(expr, pad = 52) {
  return Math.max(measureText(expr, 14, true) + pad, 90);
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
  const P = useContext(PaletteContext);
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color || P.arrow} strokeWidth={1.5}
      strokeDasharray={dashed ? "5 3" : undefined}
      markerEnd="url(#ah)" />
  );
}

function CurveArr({ d, dashed, color }) {
  const P = useContext(PaletteContext);
  return (
    <path d={d} fill="none"
      stroke={color || P.arrow} strokeWidth={1.5}
      strokeDasharray={dashed ? "5 3" : undefined}
      markerEnd="url(#ah)" />
  );
}

function FoText({ x, y, w, h, content, mono, bold, color, size = 14 }) {
  const P = useContext(PaletteContext);
  return (
    <foreignObject x={x} y={y} width={w} height={h}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          fontFamily: mono ? "'JetBrains Mono', monospace" : "'DM Sans', sans-serif",
          fontSize: size,
          fontWeight: bold ? 500 : 400,
          color: color || P.text1,
          textAlign: "center",
          lineHeight: 1,
          overflow: "hidden",
        }}
      >
        {processContent(content)}
      </div>
    </foreignObject>
  );
}

function Box({ cx, y, w, h = 42, expr, variant = "step", subtitle, rx = 8 }) {
  const P = useContext(PaletteContext);
  const c = P[variant] || P.step;
  const x = cx - w / 2;
  const hasSubtitle = !!subtitle;
  const finalH = hasSubtitle ? 56 : h;
  return (
    <g>
      <rect x={x} y={y} width={w} height={finalH} rx={rx}
        fill={c.fill} stroke={c.stroke} strokeWidth={0.5} />
      <FoText
        x={x} y={y}
        w={w} h={hasSubtitle ? finalH / 2 : finalH}
        content={expr} mono bold color={c.text || P.text1}
      />
      {hasSubtitle && (
        <FoText
          x={x} y={y + finalH / 2}
          w={w} h={finalH / 2}
          content={subtitle} size={12} color={P.text2}
        />
      )}
    </g>
  );
}

function Pill({ cx, y, text, variant = "op" }) {
  const P = useContext(PaletteContext);
  const c = P[variant] || P.op;
  const w = measureText(text, 12) + 28;
  return (
    <g>
      <rect x={cx - w / 2} y={y - 12} width={w} height={24} rx={12}
        fill={c.fill} stroke={c.stroke} strokeWidth={0.5} />
      <FoText
        x={cx - w / 2} y={y - 12}
        w={w} h={24}
        content={text} size={12} color={c.text}
      />
    </g>
  );
}

function SvgLabel({ x, y, text, anchor = "middle" }) {
  const P = useContext(PaletteContext);
  return (
    <text x={x} y={y} textAnchor={anchor} dominantBaseline="central"
      fontFamily="'DM Sans', sans-serif" fontSize={12} fill={P.text2}>
      {text}
    </text>
  );
}

function Equals({ x, y }) {
  const P = useContext(PaletteContext);
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
   Each renderer receives (data, P) so it can
   reference palette values for hardcoded needs
   like highlight arrows or trace backgrounds.
   ═══════════════════════════════════════════ */

function renderLinear(data, P) {
  if (!data?.steps?.length) return { els: [], height: 60 };
  const cx = 340;
  const nodeH = 42, gap = 60;
  const els = [];
  let y = 40;

  data.steps.forEach((step, i) => {
    const isFirst = i === 0;
    const isLast = i === data.steps.length - 1;
    const variant = isFirst ? "start" : isLast ? "result" : "step";
    const w = boxWidth(step.expr);

    if (i > 0) {
      els.push(<Arr key={`a${i}`} x1={cx} y1={y - gap} x2={cx} y2={y} />);
      if (step.operation) {
        els.push(
          <Pill key={`p${i}`}
            cx={cx + w / 2 + 10 + measureText(step.operation, 12) / 2 + 14}
            y={y - gap / 2}
            text={step.operation} />
        );
      }
    }

    els.push(
      <Box key={`n${i}`} cx={cx} y={y} w={w} expr={step.expr} variant={variant} />
    );
    y += nodeH + gap;
  });

  return { els, height: y - gap + 30 };
}

function renderTree(data, P) {
  if (!data?.branches?.length || !data?.merge) return { els: [], height: 60 };
  const cx = 340;
  const els = [];
  let y = 40;
  const nodeH = 42;
  const rootW = boxWidth(data.root || "");

  els.push(<Box key="root" cx={cx} y={y} w={rootW} expr={data.root || ""} variant="start" />);
  const rootBot = y + nodeH;
  y = rootBot + 50;

  const branchCount = data.branches.length;
  const spacing = Math.min(200, 520 / branchCount);
  const totalW = spacing * (branchCount - 1);
  const startX = cx - totalW / 2;

  data.branches.forEach((b, i) => {
    const bx = startX + i * spacing;
    const bw = boxWidth(b.expr);
    const color = GROUP_COLORS[i % GROUP_COLORS.length];

    els.push(<Arr key={`ba${i}`} x1={cx} y1={rootBot} x2={bx} y2={y} />);
    els.push(<Box key={`bb${i}`} cx={bx} y={y} w={bw} expr={b.expr} variant={color} />);
    els.push(<Arr key={`bra${i}`} x1={bx} y1={y + nodeH} x2={bx} y2={y + nodeH + 30} />);

    const rw = boxWidth(b.result);
    els.push(<Box key={`br${i}`} cx={bx} y={y + nodeH + 30} w={rw} expr={b.result} variant={color} />);
  });

  const branchBot = y + nodeH + 30 + nodeH;
  const mergeY = branchBot + 50;

  data.branches.forEach((b, i) => {
    const bx = startX + i * spacing;
    els.push(<Arr key={`ma${i}`} x1={bx} y1={branchBot} x2={cx} y2={mergeY} />);
  });

  if (data.merge.operation) {
    els.push(<Pill key="mop" cx={cx} y={mergeY - 14} text={data.merge.operation} />);
  }

  const mw = boxWidth(data.merge.expr || "");
  els.push(<Box key="merge" cx={cx} y={mergeY} w={mw} expr={data.merge.expr || ""} variant="start" />);
  els.push(<Arr key="fa" x1={cx} y1={mergeY + nodeH} x2={cx} y2={mergeY + nodeH + 30} />);

  const rw = boxWidth(data.merge.result || "");
  els.push(<Box key="res" cx={cx} y={mergeY + nodeH + 30} w={rw} expr={data.merge.result || ""} variant="result" />);

  return { els, height: mergeY + nodeH + 30 + nodeH + 30 };
}

function renderParallel(data, P) {
  if (!data?.steps?.length) return { els: [], height: 60 };
  const lx = 180, rx = 500, mx = 340;
  const els = [];
  let y = 40;
  const nodeH = 42, gap = 60;

  data.steps.forEach((step, i) => {
    const isLast = i === data.steps.length - 1;
    const variant = isLast ? "result" : i === 0 ? "start" : "step";
    const lw = boxWidth(step.left);
    const rw = boxWidth(step.right);

    if (i > 0) {
      els.push(<Arr key={`la${i}`} x1={lx} y1={y - gap} x2={lx} y2={y} />);
      els.push(<Arr key={`ra${i}`} x1={rx} y1={y - gap} x2={rx} y2={y} />);
      if (step.operation) {
        els.push(<Pill key={`op${i}`} cx={mx} y={y - gap / 2} text={step.operation} />);
      }
    }

    els.push(<Box key={`l${i}`} cx={lx} y={y} w={lw} expr={step.left} variant={variant} />);
    els.push(<Equals key={`eq${i}`} x={mx} y={y + nodeH / 2} />);
    els.push(<Box key={`r${i}`} cx={rx} y={y} w={rw} expr={step.right} variant={variant} />);

    y += nodeH + gap;
  });

  return { els, height: y - gap + 30 };
}

function renderSubstitution(data, P) {
  if (!data?.equations?.length || !data?.substitutions?.length || !data?.solveSteps?.length) return { els: [], height: 60 };
  const els = [];
  const lx = 160, rx = 520;
  const nodeH = 42;
  let y = 40;

  data.equations.forEach((eq, i) => {
    const ecx = i === 0 ? lx : rx;
    const ew = boxWidth(eq.expr);
    const color = i === 0 ? "purple" : "coral";
    els.push(<Box key={`eq${i}`} cx={ecx} y={y} w={ew} expr={eq.expr} variant={color} />);
  });

  const eqBot = y + nodeH;
  y = eqBot + 16;

  data.substitutions.forEach((sub, i) => {
    els.push(
      <CurveArr key={`sa${i}`}
        d={`M${lx + boxWidth(data.equations[0].expr) / 2} ${eqBot - 21} C${340} ${eqBot - 21}, ${340} ${y + 30}, ${rx - boxWidth(sub.result) / 2} ${y + 52}`}
        dashed color={P.highlight} />
    );
    els.push(<Pill key={`sp${i}`} cx={340} y={y + 14} text={sub.label} />);

    y += 40;
    const rw = boxWidth(sub.result);
    els.push(<Box key={`sr${i}`} cx={rx} y={y} w={rw} expr={sub.result} variant="coral" />);
    y += nodeH;
  });

  data.solveSteps.forEach((step, i) => {
    els.push(<Arr key={`ssa${i}`} x1={rx} y1={y} x2={rx} y2={y + 30} />);
    if (step.operation) {
      els.push(
        <Pill key={`ssp${i}`}
          cx={rx - boxWidth(step.expr) / 2 - measureText(step.operation, 12) / 2 - 20}
          y={y + 15}
          text={step.operation} />
      );
    }
    y += 30;
    const sw = boxWidth(step.expr);
    const isLast = i === data.solveSteps.length - 1;
    els.push(
      <Box key={`ss${i}`} cx={rx} y={y} w={sw} expr={step.expr} variant={isLast ? "blue" : "coral"} />
    );
    y += nodeH;
  });

  if (data.backSubstitute) {
    const bs = data.backSubstitute;
    els.push(
      <CurveArr key="bsa"
        d={`M${rx - 60} ${y} C${340} ${y + 10}, ${300} ${y + 20}, ${lx + 60} ${y + 20}`}
        dashed color={P.highlight} />
    );
    els.push(<Pill key="bsp" cx={340} y={y + 6} text="back-substitute" />);
    y += 20;
    const bw1 = boxWidth(bs.expr);
    els.push(<Box key="bse" cx={lx} y={y} w={bw1} expr={bs.expr} variant="purple" />);
    els.push(<Arr key="bsaa" x1={lx} y1={y + nodeH} x2={lx} y2={y + nodeH + 30} />);
    y += nodeH + 30;
    const bw2 = boxWidth(bs.result);
    els.push(<Box key="bsr" cx={lx} y={y} w={bw2} expr={bs.result} variant="result" />);
    y += nodeH;
  }

  return { els, height: y + 30 };
}

function renderIterative(data, P) {
  if (!data?.initial || !data?.condition || !data?.operation) return { els: [], height: 60 };
  const els = [];
  const cx = 260, loopX = 500;
  const nodeH = 42;
  let y = 40;

  const iw = boxWidth(data.initial);
  els.push(<Box key="init" cx={cx} y={y} w={iw} expr={data.initial} variant="start" rx={22} />);
  y += nodeH + 30;

  els.push(<Arr key="a1" x1={cx} y1={y - 30} x2={cx} y2={y} />);

  const dw = boxWidth(data.condition, 60);
  els.push(<Box key="dec" cx={cx} y={y} w={dw} expr={data.condition} variant="dec" />);
  const decBot = y + nodeH;

  els.push(<Arr key="a2" x1={cx + dw / 2} y1={y + 21} x2={loopX - 70} y2={y + 21} />);
  els.push(<SvgLabel key="ln" x={cx + dw / 2 + 16} y={y + 10} text="no" anchor="start" />);

  const opW = boxWidth(data.operation);
  els.push(<Box key="op" cx={loopX} y={y} w={opW} expr={data.operation} variant="step" />);

  const loopBackY = decBot + 30;
  els.push(
    <CurveArr key="loop"
      d={`M${loopX} ${decBot} L${loopX} ${loopBackY} L${cx - dw / 2 - 20} ${loopBackY} L${cx - dw / 2 - 20} ${y + 21} L${cx - dw / 2} ${y + 21}`}
      color={P.arrow} />
  );
  els.push(<SvgLabel key="lr" x={340} y={loopBackY + 14} text="repeat" />);

  y = loopBackY + 40;
  els.push(<Arr key="a3" x1={cx} y1={decBot} x2={cx} y2={y} />);
  els.push(<SvgLabel key="ly" x={cx + 12} y={decBot + 14} text="yes" anchor="start" />);

  if (data.iterations && data.iterations.length > 0) {
    const traceH = data.iterations.length * 20 + 20;
    els.push(
      <rect key="trbg" x={100} y={y} width={460} height={traceH} rx={8}
        fill="none" stroke={P.gray.stroke} strokeWidth={0.5} strokeDasharray="4 3" />
    );
    data.iterations.forEach((it, i) => {
      els.push(
        <FoText key={`tr${i}`}
          x={100} y={y + 4 + i * 20}
          w={460} h={20}
          content={it} mono size={12} color={P.text2}
        />
      );
    });
    y += traceH + 16;
  }

  const rw = boxWidth(data.result || "");
  els.push(<Box key="res" cx={cx} y={y} w={rw} expr={data.result || ""} variant="result" />);

  return { els, height: y + nodeH + 30 };
}

function renderAccumulator(data, P) {
  if (!data?.parts?.length || !data?.combine) return { els: [], height: 60 };
  const els = [];
  const cx = 340;
  const nodeH = 42;
  let y = 40;

  const sw = boxWidth(data.source || "");
  els.push(<Box key="src" cx={cx} y={y} w={sw} expr={data.source || ""} variant="start" />);
  const srcBot = y + nodeH;
  y = srcBot + 50;

  const partCount = data.parts.length;
  const spacing = Math.min(220, 560 / partCount);
  const totalW = spacing * (partCount - 1);
  const startX = cx - totalW / 2;

  data.parts.forEach((p, i) => {
    const px = startX + i * spacing;
    const color = GROUP_COLORS[i % GROUP_COLORS.length];
    const pw = Math.max(boxWidth(p.result), measureText(p.label, 12) + 30);

    els.push(<Arr key={`pa${i}`} x1={cx} y1={srcBot} x2={px} y2={y} />);
    els.push(
      <Box key={`pb${i}`} cx={px} y={y} w={pw} expr={p.result} variant={color} subtitle={p.label} />
    );
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

  const cw = boxWidth(data.combine.expr || "");
  els.push(<Box key="comb" cx={cx} y={mergeY} w={cw} expr={data.combine.expr || ""} variant="start" />);
  els.push(<Arr key="fa" x1={cx} y1={mergeY + nodeH} x2={cx} y2={mergeY + nodeH + 30} />);

  const rw = boxWidth(data.combine.result || "");
  els.push(<Box key="res" cx={cx} y={mergeY + nodeH + 30} w={rw} expr={data.combine.result || ""} variant="result" />);

  return { els, height: mergeY + nodeH + 30 + nodeH + 30 };
}

function renderConditional(data, P) {
  if (!data?.condition?.branches?.length) return { els: [], height: 60 };
  const els = [];
  const cx = 340;
  const nodeH = 42;
  let y = 40;

  if (data.setup) {
    data.setup.forEach((step, i) => {
      const sw = boxWidth(step.expr);
      if (i > 0) {
        els.push(<Arr key={`sa${i}`} x1={cx} y1={y - 28} x2={cx} y2={y} />);
        if (step.operation) {
          els.push(
            <Pill key={`sp${i}`}
              cx={cx + sw / 2 + measureText(step.operation, 12) / 2 + 24}
              y={y - 14}
              text={step.operation} />
          );
        }
      }
      els.push(
        <Box key={`s${i}`} cx={cx} y={y} w={sw} expr={step.expr} variant={i === 0 ? "start" : "step"} />
      );
      y += 70;
    });
  }

  const cond = data.condition;
  const dw = boxWidth(cond.expr, 60);
  els.push(<Arr key="da" x1={cx} y1={y - 28} x2={cx} y2={y} />);
  els.push(<Box key="dec" cx={cx} y={y} w={dw} expr={cond.expr} variant="dec" />);
  const decBot = y + nodeH;
  y = decBot + 50;

  const bCount = cond.branches.length;
  const bSpacing = Math.min(200, 580 / bCount);
  const bTotalW = bSpacing * (bCount - 1);
  const bStartX = cx - bTotalW / 2;

  cond.branches.forEach((b, i) => {
    const bx = bStartX + i * bSpacing;
    const bw = Math.max(boxWidth(b.expr), measureText(b.result, 12) + 30, 120);
    const variant = b.active ? "result" : "gray";

    els.push(<Arr key={`ba${i}`} x1={cx} y1={decBot} x2={bx} y2={y} />);
    els.push(<SvgLabel key={`bl${i}`} x={(cx + bx) / 2 + 10} y={(decBot + y) / 2 - 4} text={b.label} />);
    els.push(
      <Box key={`bb${i}`} cx={bx} y={y} w={bw} expr={b.expr} variant={variant} subtitle={b.result} />
    );

    if (b.active) {
      els.push(
        <rect key={`bh${i}`} x={bx - bw / 2 - 4} y={y - 4} width={bw + 8} height={64} rx={12}
          fill="none" stroke={P.result.stroke} strokeWidth={1.5} strokeDasharray="4 3" />
      );
    }
  });

  return { els, height: y + 56 + 30 };
}

function renderGrid(data, P) {
  if (!data?.rows?.length) return { els: [], height: 60 };
  const els = [];
  const cx = 340;
  const r = 22, gapX = 52, gapY = 52;
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
            {String(val)}
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
        <Arr key={`ha${i}`} x1={src.x} y1={src.y + r + 2} x2={tgt.x} y2={tgt.y - r - 4} color={P.highlight} />
      );
    });

    if (data.highlight.annotation) {
      els.push(<SvgLabel key="ann" x={cx} y={y + 6} text={data.highlight.annotation} />);
      y += 24;
    }
  }

  return { els, height: y + 20 };
}

function renderReduction(data, P) {
  if (!data?.terms?.length || !data?.groups?.length) return { els: [], height: 60 };
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
    const tw = boxWidth(t.expr, 24);
    const groupIdx = data.groups.findIndex(g => g.name === t.group);
    const color = GROUP_COLORS[groupIdx % GROUP_COLORS.length];

    els.push(<Box key={`t${i}`} cx={tx} y={y} w={tw} expr={t.expr} variant={color} h={36} />);

    if (!termPositions[t.group]) termPositions[t.group] = [];
    termPositions[t.group].push({ x: tx, w: tw });
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
    const gw = Math.max(boxWidth(g.result), measureText(g.operation || "", 12) + 30, 90);
    const positions = termPositions[g.name] || [];

    positions.forEach((tp, j) => {
      els.push(<Arr key={`ga${i}_${j}`} x1={tp.x} y1={termBot} x2={gx} y2={y} />);
    });

    els.push(
      <Box key={`g${i}`} cx={gx} y={y} w={gw} expr={g.result} variant={color} subtitle={g.operation} />
    );
  });

  const gBot = y + 56;
  const mergeY = gBot + 40;

  data.groups.forEach((g, i) => {
    const gx = gStartX + i * gSpacing;
    els.push(<Arr key={`mr${i}`} x1={gx} y1={gBot} x2={cx} y2={mergeY} />);
  });

  const rw = boxWidth(data.result || "");
  els.push(<Box key="res" cx={cx} y={mergeY} w={rw} expr={data.result || ""} variant="result" />);

  return { els, height: mergeY + 42 + 30 };
}

function renderExpansion(data, P) {
  if (!data?.products?.length) return { els: [], height: 60 };
  const els = [];
  const cx = 340;
  const nodeH = 42;
  let y = 40;

  const sw = boxWidth(data.source || "");
  els.push(<Box key="src" cx={cx} y={y} w={sw} expr={data.source || ""} variant="start" />);
  const srcBot = y + nodeH;
  y = srcBot + 50;

  const pCount = data.products.length;
  const pSpacing = Math.min(160, 600 / pCount);
  const pTotalW = pSpacing * (pCount - 1);
  const pStartX = cx - pTotalW / 2;

  data.products.forEach((p, i) => {
    const px = pStartX + i * pSpacing;
    const color = GROUP_COLORS[i % GROUP_COLORS.length];
    const pw = Math.max(boxWidth(p.result), measureText(p.label, 12) + 24, 100);

    els.push(<Arr key={`pa${i}`} x1={cx} y1={srcBot} x2={px} y2={y} />);
    els.push(
      <Box key={`pb${i}`} cx={px} y={y} w={pw} expr={p.result} variant={color} subtitle={p.label} />
    );
  });

  const pBot = y + 56;
  const combY = pBot + 50;

  data.products.forEach((p, i) => {
    const px = pStartX + i * pSpacing;
    els.push(<Arr key={`ca${i}`} x1={px} y1={pBot} x2={cx} y2={combY} />);
  });

  const cw = boxWidth(data.combined || "");
  els.push(<Box key="comb" cx={cx} y={combY} w={cw} expr={data.combined || ""} variant="start" />);
  els.push(<Arr key="fa" x1={cx} y1={combY + nodeH} x2={cx} y2={combY + nodeH + 30} />);
  els.push(<Pill key="cop" cx={cx + cw / 2 + 70} y={combY + nodeH + 15} text="combine like" />);

  const rw = boxWidth(data.result || "");
  els.push(<Box key="res" cx={cx} y={combY + nodeH + 30} w={rw} expr={data.result || ""} variant="result" />);

  return { els, height: combY + nodeH + 30 + nodeH + 30 };
}

/* ─── renderer map ─── */
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

/* ─── defaults ─── */
const DEFAULT_DATA = {
  linear: {
    steps: [
      { expr: "2x + 3 = 11" },
      { expr: "2x = 8", operation: "subtract 3" },
      { expr: "x = 4", operation: "divide by 2" },
    ],
  },
  tree: {
    root: "(3 + 5)(2 + 4)",
    branches: [
      { expr: "3 + 5", result: "8" },
      { expr: "2 + 4", result: "6" },
    ],
    merge: { operation: "multiply", expr: "8 \u00d7 6", result: "= 48" },
  },
  parallel: {
    steps: [
      { left: "3x + 5", right: "2x + 9" },
      { left: "x + 5", right: "9", operation: "subtract 2x" },
      { left: "x", right: "4", operation: "subtract 5" },
    ],
  },
  substitution: {
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
  iterative: {
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
  accumulator: {
    source: "23 \u00d7 45",
    parts: [
      { label: "ones: 23 \u00d7 5", result: "115" },
      { label: "tens: 23 \u00d7 40", result: "920" },
    ],
    combine: { operation: "add", expr: "115 + 920", result: "1035" },
  },
  conditional: {
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
  grid: {
    rows: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
    highlight: {
      row: 4,
      col: 2,
      sources: [[3, 1], [3, 2]],
      annotation: "3 + 3 = 6",
    },
  },
  reduction: {
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
  expansion: {
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
};

/* ═══════════════════════════════════════════
   MAIN COMPONENT

   Props:
     type   — pattern name ('linear' | 'tree' | ...)
     title  — optional title above the diagram
     data   — pattern-specific data
     theme  — 'default' | 'vivid' | palette object
   ═══════════════════════════════════════════ */
export default function MathWorkflow(workflowConfig) {
  const {
    type = "linear",
    title = "",
    data,
    theme = "default",
  } = workflowConfig || {};

  /* Resolve palette: string → named theme; object → merged over default */
  const palette = useMemo(() => {
    if (theme && typeof theme === "object") {
      return { ...THEMES.default, ...theme };
    }
    return THEMES[theme] || THEMES.default;
  }, [theme]);

  const safeData = data || DEFAULT_DATA[type] || DEFAULT_DATA.linear;

  const render = useMemo(() => {
    const fn = RENDERERS[type];
    if (!fn) return { els: [], height: 100 };
    return fn(safeData, palette);
  }, [type, safeData, palette]);

  const titleH = title ? 30 : 0;
  const totalH = render.height + titleH;

  return (
    <PaletteContext.Provider value={palette}>
      <svg
        width="100%"
        viewBox={`0 0 680 ${totalH}`}
        style={{ display: "block", maxWidth: 680 }}
      >
        <Defs />
        {title && (
          <foreignObject x={0} y={0} width={680} height={26}>
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: palette.text2,
              }}
            >
              {processContent(title)}
            </div>
          </foreignObject>
        )}
        <g transform={title ? "translate(0, 24)" : undefined}>
          {render.els}
        </g>
      </svg>
    </PaletteContext.Provider>
  );
}