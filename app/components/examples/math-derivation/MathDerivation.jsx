import { useState, useMemo, useCallback } from "react";
import { processContent } from "../../../utils/contentProcessor";

/* ─── reference badge colors ─── */
const REF_COLORS = {
  theorem:    { bg: "#EEEDFE", color: "#3C3489" },
  axiom:      { bg: "#F1EFE8", color: "#444441" },
  lemma:      { bg: "#FBEAF0", color: "#72243E" },
  identity:   { bg: "#E1F5EE", color: "#085041" },
  property:   { bg: "#E6F1FB", color: "#0C447C" },
  definition: { bg: "#FAEEDA", color: "#633806" },
  step:       { bg: "#F1F5F9", color: "#334155" },
  cite:       { bg: "#F1F5F9", color: "#64748B" },
};

/* ─── tag colors ─── */
const TAG_COLORS = {
  given:      { bg: "#F1F5F9", color: "#475569" },
  goal:       { bg: "#DBEAFE", color: "#1E40AF" },
  key:        { bg: "#FEF3C7", color: "#92400E" },
  routine:    { bg: "transparent", color: "#94A3B8", border: "1px solid #CBD5E1" },
  assumption: { bg: "#FBEAF0", color: "#72243E" },
  conclusion: { bg: "#D1FAE5", color: "#065F46" },
};

/* ─── passage bar colors ─── */
const PASSAGE_BAR = {
  recall:      "#AFA9EC",
  motivation:  "#85B7EB",
  remark:      "#B4B2A9",
  warning:     "#F09595",
  intuition:   "#5DCAA5",
  alternative: "#FCD34D",
  transition:  "#ED93B1",
};

const PASSAGE_BADGE = {
  recall:      { bg: "#EEEDFE", color: "#3C3489" },
  motivation:  { bg: "#E6F1FB", color: "#0C447C" },
  remark:      { bg: "#F1EFE8", color: "#444441" },
  warning:     { bg: "#FCEBEB", color: "#791F1F" },
  intuition:   { bg: "#E1F5EE", color: "#085041" },
  alternative: { bg: "#FAEEDA", color: "#633806" },
  transition:  { bg: "#FBEAF0", color: "#72243E" },
};

/* ─── styles ─── */
const S = {
  wrap: {
    maxWidth: 640,
    fontFamily: "'DM Sans', sans-serif",
  },
  wrapCompact: {
    maxWidth: 640,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
  },

  /* prerequisites */
  prereq: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    alignItems: "center",
    padding: "8px 12px",
    marginBottom: 8,
    background: "#F8FAFC",
    borderRadius: 8,
  },
  prereqLabel: {
    fontSize: 11,
    color: "#94A3B8",
    marginRight: 4,
  },

  /* step card */
  step: {
    padding: "10px 14px",
    background: "#FFFFFF",
    border: "0.5px solid #E2E8F0",
    borderRadius: 8,
    margin: "4px 0",
  },
  stepTop: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    gap: "6px 12px",
  },
  stepNum: {
    fontSize: 11,
    fontWeight: 500,
    color: "#94A3B8",
    minWidth: 20,
    textAlign: "right",
    flexShrink: 0,
  },
  expr: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 15,
    color: "#1E293B",
    lineHeight: 1.6,
    padding: "2px 0",
  },
  operation: {
    fontSize: 12,
    color: "#64748B",
    fontStyle: "italic",
  },

  /* tag */
  tag: (type) => {
    const c = TAG_COLORS[type] || TAG_COLORS.routine;
    return {
      fontSize: 10,
      fontWeight: 500,
      padding: "2px 8px",
      borderRadius: 4,
      background: c.bg,
      color: c.color,
      border: c.border || "none",
      whiteSpace: "nowrap",
    };
  },

  /* note */
  note: {
    fontSize: 11,
    color: "#92400E",
    background: "#FEF3C7",
    padding: "2px 8px",
    borderRadius: 4,
    marginLeft: "auto",
  },

  /* basedOn badge */
  refBadge: (type, hasLink) => {
    const c = REF_COLORS[type] || REF_COLORS.cite;
    return {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: 11,
      padding: "3px 10px",
      borderRadius: 99,
      background: c.bg,
      color: c.color,
      textDecoration: hasLink ? "underline" : "none",
      textDecorationStyle: "dotted",
      textUnderlineOffset: 2,
      cursor: hasLink ? "pointer" : "default",
      whiteSpace: "nowrap",
    };
  },

  /* basedOn row */
  basedOnRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 4,
    width: "100%",
    marginTop: 4,
  },

  /* back-reference */
  backRef: {
    fontSize: 11,
    color: "#94A3B8",
  },

  /* cite */
  citeStyle: {
    fontSize: 11,
    color: "#64748B",
    fontStyle: "italic",
    background: "#F8FAFC",
    padding: "3px 10px",
    borderRadius: 4,
  },

  /* highlight */
  highlight: {
    color: "#185FA5",
    fontWeight: 500,
    background: "#E6F1FB",
    padding: "0 3px",
    borderRadius: 2,
  },

  /* accordion toggle */
  accToggle: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 0",
    cursor: "pointer",
    background: "none",
    border: "none",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    color: "#3B82F6",
    marginTop: 4,
  },

  /* accordion content */
  accContent: (open) => ({
    overflow: "hidden",
    maxHeight: open ? 400 : 0,
    transition: "max-height 0.3s ease",
  }),

  /* detail inner */
  detailInner: {
    padding: "6px 0 4px",
    fontSize: 13,
    color: "#64748B",
    lineHeight: 1.6,
  },

  /* substeps */
  subLine: {
    display: "flex",
    gap: 8,
    padding: "3px 0",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    color: "#64748B",
  },
  subLabel: {
    fontSize: 11,
    color: "#94A3B8",
    fontStyle: "italic",
    fontFamily: "'DM Sans', sans-serif",
    minWidth: 36,
  },

  /* group wrapper */
  group: {
    margin: "6px 0",
    padding: "8px 12px",
    borderLeft: "3px solid #93C5FD",
    background: "#EFF6FF",
    borderRadius: 0,
  },
  groupLabel: {
    fontSize: 11,
    fontWeight: 500,
    color: "#3B82F6",
    letterSpacing: "0.03em",
    marginBottom: 6,
  },

  /* passage */
  passageBar: (type) => ({
    margin: "2px 0",
    padding: "8px 14px",
    display: "flex",
    gap: 8,
    alignItems: "flex-start",
    borderLeft: `3px solid ${PASSAGE_BAR[type] || "#B4B2A9"}`,
    borderRadius: 0,
  }),
  passageIndent: {
    margin: "2px 0 2px 34px",
    padding: "8px 12px",
    background: "#F8FAFC",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  passageBand: {
    margin: 0,
    padding: "8px 14px 8px 42px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    background: "#F8FAFC",
    borderTop: "0.5px solid #E2E8F0",
    borderBottom: "0.5px solid #E2E8F0",
  },
  passageBubble: {
    margin: "4px 0 4px 42px",
    padding: "8px 12px",
    background: "#F8FAFC",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    maxWidth: "85%",
  },
  passageInline: {
    margin: "2px 0",
    padding: "4px 14px 4px 42px",
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  passageDashed: {
    margin: "4px 14px",
    padding: "8px 12px",
    border: "0.5px dashed #CBD5E1",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  passageBadge: (type) => {
    const c = PASSAGE_BADGE[type] || PASSAGE_BADGE.remark;
    return {
      fontSize: 10,
      fontWeight: 500,
      padding: "2px 8px",
      borderRadius: 4,
      background: c.bg,
      color: c.color,
      whiteSpace: "nowrap",
      flexShrink: 0,
      marginTop: 1,
    };
  },
  passageText: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 1.5,
    fontStyle: "italic",
  },

  /* result row */
  result: {
    background: "#EFF6FF",
    border: "0.5px solid #93C5FD",
    borderRadius: 8,
    padding: "12px 14px",
    margin: "4px 0",
  },
  resultExpr: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 16,
    fontWeight: 500,
    color: "#1E293B",
  },
  qed: {
    fontSize: 12,
    fontWeight: 500,
    color: "#3B82F6",
    marginLeft: "auto",
  },

  /* conclusion */
  conclusion: {
    padding: "10px 14px",
    border: "0.5px solid #93C5FD",
    borderRadius: 8,
    fontSize: 13,
    color: "#64748B",
    lineHeight: 1.5,
    marginTop: 6,
  },

  /* rail variant dot connector */
  conn: {
    display: "flex",
    justifyContent: "center",
    height: 16,
    position: "relative",
  },
  connRail: {
    position: "absolute",
    left: 23,
    top: 0,
    bottom: 0,
    width: 2,
    background: "#E2E8F0",
  },
  connDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#CBD5E1",
    alignSelf: "center",
    position: "relative",
    zIndex: 1,
  },

  /* rail step */
  railStep: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    minHeight: 44,
    position: "relative",
  },
  railDot: (isStart, isEnd) => ({
    width: isStart || isEnd ? 12 : 10,
    height: isStart || isEnd ? 12 : 10,
    borderRadius: "50%",
    background: isEnd ? "#3B82F6" : isStart ? "#94A3B8" : "#CBD5E1",
    flexShrink: 0,
    position: "relative",
    zIndex: 1,
    margin: "0 18px",
  }),
  railExpr: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 15,
    color: "#1E293B",
    padding: "8px 0",
  },
  railRule: {
    fontSize: 12,
    // color: "#0F766E",
    padding: "4px 12px",
    // background: "#CCFBF1",
    borderRadius: 99,
    whiteSpace: "nowrap",
    marginLeft: 12,
    color: "#1E40AF",
background: "#DBEAFE",
  },
};

/* ─── sub-components ─── */

function RefBadge({ item }) {
  if (!item) return null;

  if (item.type === "step") {
    return <span style={S.backRef}>{processContent(`\u2190 step ${item.step}`)}</span>;
  }

  if (item.type === "cite") {
    return <span style={S.citeStyle}>{processContent(item.text || "")}</span>;
  }

  const label = `${item.type}: ${item.name || ""}`;

  if (item.link) {
    return (
      <a href={item.link} style={S.refBadge(item.type, true)}>
        {processContent(label)} &#8599;
      </a>
    );
  }

  return <span style={S.refBadge(item.type, false)}>{processContent(label)}</span>;
}

function BasedOnRow({ basedOn }) {
  if (!basedOn?.length) return null;
  return (
    <div style={S.basedOnRow}>
      {basedOn.map((b, i) => <RefBadge key={i} item={b} />)}
    </div>
  );
}

function HighlightedExpr({ expr, highlights }) {
  if (!highlights?.length) {
    return <span style={S.expr}>{processContent(expr)}</span>;
  }

  let result = expr;
  const parts = [];
  let remaining = result;

  for (const hl of highlights) {
    const idx = remaining.indexOf(hl);
    if (idx === -1) continue;
    if (idx > 0) {
      parts.push({ text: remaining.slice(0, idx), highlight: false });
    }
    parts.push({ text: hl, highlight: true });
    remaining = remaining.slice(idx + hl.length);
  }
  if (remaining) {
    parts.push({ text: remaining, highlight: false });
  }

  if (parts.length === 0) {
    return <span style={S.expr}>{processContent(expr)}</span>;
  }

  return (
    <span style={S.expr}>
      {parts.map((p, i) =>
        p.highlight
          ? <span key={i} style={S.highlight}>{processContent(p.text)}</span>
          : <span key={i}>{processContent(p.text)}</span>
      )}
    </span>
  );
}

function Accordion({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        style={S.accToggle}
        onClick={() => setOpen(!open)}
      >
        <span style={{
          fontSize: 10,
          transition: "transform 0.2s",
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
          display: "inline-block",
        }}>&#9654;</span>
        {label}
      </button>
      <div style={S.accContent(open)}>
        {children}
      </div>
    </div>
  );
}

function StepDetail({ detail }) {
  if (!detail) return null;
  return (
    <Accordion label="why?">
      <div style={S.detailInner}>{processContent(detail)}</div>
    </Accordion>
  );
}

function SubSteps({ substeps }) {
  if (!substeps?.length) return null;
  return (
    <Accordion label="substeps">
      <div style={{ padding: "4px 0" }}>
        {substeps.map((ss, i) => (
          <div key={i} style={S.subLine}>
            {ss.label && <span style={S.subLabel}>{processContent(ss.label)}:</span>}
            <span>{processContent(ss.expr)}</span>
          </div>
        ))}
      </div>
    </Accordion>
  );
}

/* ─── step renderer (proof variant) ─── */
function StepCard({ item, stepNum, showNum, isLast }) {
  const baseStyle = isLast ? S.result : S.step;

  return (
    <div style={baseStyle}>
      <div style={S.stepTop}>
        {showNum && <span style={isLast ? { ...S.stepNum, color: "#3B82F6" } : S.stepNum}>{stepNum}</span>}
        <HighlightedExpr expr={item.expr} highlights={item.highlights} />
        {item.operation && <span style={S.operation}>{processContent(item.operation)}</span>}
        {item.tag && <span style={S.tag(item.tag)}>{processContent(item.tag === "key" ? "key step" : item.tag)}</span>}
        {item.note && <span style={S.note}>{processContent(item.note)}</span>}
        {isLast && <span style={S.qed}>Q.E.D.</span>}
      </div>
      <BasedOnRow basedOn={item.basedOn} />
      <StepDetail detail={item.detail} />
      <SubSteps substeps={item.substeps} />
    </div>
  );
}

/* ─── passage renderer ─── */
function PassageBlock({ item, passageStyle }) {
  const type = item.passage || "remark";
  const style = passageStyle || "bar";

  let wrapStyle;
  switch (style) {
    case "indent":  wrapStyle = S.passageIndent; break;
    case "band":    wrapStyle = S.passageBand; break;
    case "bubble":  wrapStyle = S.passageBubble; break;
    case "inline":  wrapStyle = S.passageInline; break;
    case "dashed":  wrapStyle = S.passageDashed; break;
    default:        wrapStyle = S.passageBar(type); break;
  }

  const isBarStyle = style === "bar";

  return (
    <div style={wrapStyle}>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <span style={S.passageBadge(type)}>{processContent(type)}</span>
        {isBarStyle && <span style={S.passageText}>{processContent(item.content || "")}</span>}
      </div>
      {!isBarStyle && <span style={S.passageText}>{processContent(item.content || "")}</span>}
      <BasedOnRow basedOn={item.basedOn} />
      {item.detail && (
        <Accordion label="more">
          <div style={S.detailInner}>{processContent(item.detail)}</div>
        </Accordion>
      )}
      {item.note && <span style={S.note}>{processContent(item.note)}</span>}
    </div>
  );
}

/* ─── rail variant step ─── */
function RailStep({ item, stepNum, isFirst, isLast }) {
  return (
    <div style={S.railStep}>
      <span style={S.railDot(isFirst, isLast)} />
      <span style={{ ...S.railExpr, ...(isLast ? { fontWeight: 500 } : {}) }}>
        {processContent(item.expr)}
      </span>
      {item.operation && <span style={S.railRule}>{processContent(item.operation)}</span>}
    </div>
  );
}

/* ─── group items by consecutive group key ─── */
function groupItems(items) {
  if (!items?.length) return [];

  const result = [];
  let currentGroup = null;
  let groupBuffer = [];

  const flushGroup = () => {
    if (currentGroup && groupBuffer.length) {
      result.push({ __group: currentGroup, items: [...groupBuffer] });
      groupBuffer = [];
    }
    currentGroup = null;
  };

  for (const item of items) {
    const gKey = item.group;
    if (gKey) {
      if (gKey !== currentGroup) {
        flushGroup();
        currentGroup = gKey;
      }
      groupBuffer.push(item);
    } else {
      flushGroup();
      result.push(item);
    }
  }
  flushGroup();

  return result;
}

/* ─── prerequisites ─── */
function Prerequisites({ prerequisites }) {
  if (!prerequisites?.length) return null;
  return (
    <div style={S.prereq}>
      <span style={S.prereqLabel}>{processContent("requires:")}</span>
      {prerequisites.map((p, i) => <RefBadge key={i} item={p} />)}
    </div>
  );
}

/* ─── default data ─── */
const DEFAULT_ITEMS = [
  { expr: "2x + 3 = 11", tag: "given" },
  { expr: "2x = 8", operation: "subtract 3" },
  { expr: "x = 4", operation: "divide by 2" },
];

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function MathDerivation(derivationConfig) {
  const {
    items = DEFAULT_ITEMS,
    title = "",
    variant = "proof",
    passageStyle = "bar",
    prerequisites,
    conclusion,
    showStepNumbers = true,
    compact = false,
  } = derivationConfig || {};

  const grouped = useMemo(() => groupItems(items), [items]);

  let stepCounter = 0;

  const isStep = (item) => !!item?.expr;
  const isPassage = (item) => !!item?.passage;

  const renderItem = (item, idx, arr) => {
    if (item.__group) {
      return (
        <div key={`g-${idx}`} style={S.group}>
          <div style={S.groupLabel}>{processContent(item.__group)}</div>
          {item.items.map((gi, gi2) => renderItem(gi, `${idx}-${gi2}`, item.items))}
        </div>
      );
    }

    if (isPassage(item)) {
      if (variant === "rail") {
        return (
          <div key={`p-${idx}`}>
            <div style={S.conn}><span style={S.connRail} /><span style={S.connDot} /></div>
            <PassageBlock item={item} passageStyle={passageStyle} />
          </div>
        );
      }
      return <PassageBlock key={`p-${idx}`} item={item} passageStyle={passageStyle} />;
    }

    if (isStep(item)) {
      stepCounter++;
      const num = stepCounter;
      const isLast = (() => {
        for (let j = (typeof idx === "string" ? arr.length : grouped.length) - 1; j >= 0; j--) {
          const candidate = typeof idx === "string" ? arr[j] : grouped[j];
          if (candidate?.__group) {
            const lastInGroup = candidate.items[candidate.items.length - 1];
            if (isStep(lastInGroup)) return lastInGroup === item;
          }
          if (isStep(candidate)) return candidate === item;
        }
        return false;
      })();

      if (variant === "rail") {
        const isFirst = num === 1;
        return (
          <div key={`s-${idx}`}>
            {num > 1 && <div style={S.conn}><span style={S.connRail} /><span style={S.connDot} /></div>}
            <RailStep item={item} stepNum={num} isFirst={isFirst} isLast={isLast} />
          </div>
        );
      }

      return (
        <StepCard
          key={`s-${idx}`}
          item={item}
          stepNum={num}
          showNum={showStepNumbers}
          isLast={isLast}
        />
      );
    }

    return null;
  };

  stepCounter = 0;

  return (
    <div style={compact ? S.wrapCompact : S.wrap}>
      {title && (
        <div style={{ fontSize: 14, fontWeight: 500, color: "#1E293B", marginBottom: 8 }}>
          {processContent(title)}
        </div>
      )}
      <Prerequisites prerequisites={prerequisites} />
      {variant === "rail" && (
        <div style={{ position: "relative", padding: "8px 0" }}>
          <div style={{ position: "absolute", left: 23, top: 22, bottom: 22, width: 2, background: "#E2E8F0" }} />
          {grouped.map((item, i) => renderItem(item, i, grouped))}
        </div>
      )}
      {variant !== "rail" && grouped.map((item, i) => renderItem(item, i, grouped))}
      {conclusion && <div style={S.conclusion}>{processContent(conclusion)}</div>}
    </div>
  );
}