// /components/visual-tools/DecisionTree.jsx
// Generic, reusable decision-tree component.
//
// Props:
//   tree              — object map: id → node
//                       node = { type: "q", text, children: [{ label, to }] }
//                            | { type: "leaf", name, short, ...customFields }
//   rootId            — id of the root node
//   svgW              — SVG viewBox width  (default 1100)
//   svgH              — SVG viewBox height (default 460)
//   positions         — optional { id → {x, y} } override; auto-layout otherwise
//   helpBanner        — optional string rendered above the control bar
//   questionHelp      — optional { id → string }; rendered under the question text
//   rootTip           — optional string; rendered as a callout when on the root question

import React, { useState, useCallback, useMemo } from "react";
import {
  COLORS,
  ThemeStyles, VTRoot, PageWrap, HelpBanner,
  ControlBar, Divider,
} from "../shared.jsx";

// ── Auto-layout ─────────────────────────────────────────────────────
// DFS collects leaves in visit order. Leaves are spread on the bottom row.
// Internal nodes get x = midpoint of their children's x (computed
// recursively bottom-up). Y is assigned by depth.
function computeLayout(tree, rootId, svgW, svgH) {
  const positions = {};
  const depth = {};
  const leaves = [];

  function visit(id, d) {
    depth[id] = d;
    const node = tree[id];
    if (node.type === "leaf") {
      leaves.push(id);
    } else {
      for (const ch of node.children) visit(ch.to, d + 1);
    }
  }
  visit(rootId, 0);

  // Leaves on the bottom row, evenly spaced
  const PAD_X = 60;
  const leafY = svgH - 60;
  const usableW = svgW - 2 * PAD_X;
  leaves.forEach((id, i) => {
    const t = leaves.length > 1 ? i / (leaves.length - 1) : 0.5;
    positions[id] = { x: PAD_X + t * usableW, y: leafY };
  });

  // Internal node x = midpoint of children's x (bottom-up)
  function childMidX(id) {
    if (positions[id]) return positions[id].x;
    const node = tree[id];
    const childXs = node.children.map((ch) => childMidX(ch.to));
    const x = (Math.min(...childXs) + Math.max(...childXs)) / 2;
    positions[id] = { x, y: 0 }; // y filled below
    return x;
  }
  childMidX(rootId);

  // Y by depth
  const maxDepth = Math.max(...Object.values(depth));
  const topY = 50;
  const yPerLevel = maxDepth > 0 ? (leafY - topY - 80) / maxDepth : 0;
  for (const id of Object.keys(tree)) {
    if (tree[id].type === "leaf") continue;
    positions[id].y = topY + depth[id] * yPerLevel;
  }
  return positions;
}

// ── Sizes ───────────────────────────────────────────────────────────
const LEAF_W = 96, LEAF_H = 46;
const Q_W = 170, Q_H = 50;
function nodeSize(node) {
  return node.type === "leaf" ? { w: LEAF_W, h: LEAF_H } : { w: Q_W, h: Q_H };
}

// ── Helpers ─────────────────────────────────────────────────────────
function wrapText(s, maxChars) {
  const words = s.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length <= maxChars) {
      cur = (cur + " " + w).trim();
    } else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

// Distribute edge-label t along edges of a multi-child parent so labels
// land at different y positions and don't pile up at midpoint.
function edgeT(numChildren, childIdx) {
  if (numChildren <= 2) return 0.5;
  return 0.3 + (childIdx / (numChildren - 1)) * 0.4;
}

// Build parent lookup (for breadcrumb labels)
function buildParentMap(tree) {
  const out = {};
  for (const [id, node] of Object.entries(tree)) {
    if (node.type === "q") {
      for (const ch of node.children) {
        out[ch.to] = { parent: id, label: ch.label };
      }
    }
  }
  return out;
}

// ── Local styles ────────────────────────────────────────────────────
function DTStyles() {
  const css = `
    .dt-stack { display: flex; flex-direction: column; gap: 16px; }
    .dt-scene-wrap {
      background: ${COLORS.bg};
      border: 1.5px solid ${COLORS.border};
      border-radius: 10px; padding: 8px; overflow: hidden;
    }
    .dt-scene-svg { display: block; width: 100%; height: auto; }
    .dt-bottom-panel {
      background: ${COLORS.surface};
      border: 1.5px solid ${COLORS.border};
      border-radius: 10px; padding: 16px;
    }
    .dt-breadcrumb {
      background: ${COLORS.bg};
      border: 1.5px solid ${COLORS.border};
      border-radius: 6px; padding: 8px 10px; margin-bottom: 12px;
      font-size: 12px; color: ${COLORS.textDim}; line-height: 1.7;
    }
    .dt-breadcrumb b { color: ${COLORS.text}; }
    .dt-breadcrumb .sep { color: ${COLORS.textFaint}; margin: 0 4px; }
    .dt-title { font-weight: 700; font-size: 16px; margin-bottom: 8px; }
    .dt-help { color: ${COLORS.textDim}; font-size: 13px; margin-bottom: 12px; }
    .dt-help b { color: ${COLORS.text}; }
    .dt-choice-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 8px 0; }
    .dt-choice-btn {
      flex: 1 1 calc(33% - 6px); min-width: 140px;
      padding: 10px 12px;
      border: 1.5px solid ${COLORS.borderStrong};
      background: ${COLORS.bg}; color: ${COLORS.text};
      border-radius: 6px; cursor: pointer;
      font-size: 13px; font-weight: 600; text-align: center;
      font-family: "JetBrains Mono", monospace;
      transition: background 0.15s, border-color 0.15s;
    }
    .dt-choice-btn:hover {
      background: ${COLORS.accentSoft}; border-color: ${COLORS.accent};
      color: ${COLORS.accentDeep};
    }
    .dt-back-row {
      margin-top: 10px; padding-top: 10px;
      border-top: 1.5px dashed ${COLORS.border};
      display: flex; gap: 8px;
    }
    .dt-back-btn, .dt-restart-btn {
      flex: 1;
      padding: 8px 12px;
      border: 1.5px solid ${COLORS.borderStrong};
      background: ${COLORS.surface}; color: ${COLORS.text};
      border-radius: 6px; cursor: pointer;
      font-size: 13px; font-weight: 500;
      font-family: inherit;
    }
    .dt-back-btn:hover:not(:disabled), .dt-restart-btn:hover:not(:disabled) {
      background: ${COLORS.accentSoft}; border-color: ${COLORS.accent};
    }
    .dt-back-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .dt-restart-btn {
      background: ${COLORS.accent}; color: white; border-color: ${COLORS.accentDeep};
    }
    .dt-restart-btn:hover:not(:disabled) { background: ${COLORS.accentDeep}; }
    .dt-formula {
      background: ${COLORS.bg};
      border: 1.5px solid ${COLORS.accentLight};
      border-radius: 6px; padding: 12px 14px; margin: 10px 0;
      font-family: "JetBrains Mono", monospace;
      font-size: 13px; font-weight: 700;
      color: ${COLORS.accentDeep};
      text-align: center; line-height: 1.55;
    }
    .dt-example {
      background: ${COLORS.surfaceTint};
      border: 1.5px solid ${COLORS.accentLight};
      border-radius: 6px; padding: 10px 12px; margin: 8px 0;
      font-family: "JetBrains Mono", monospace;
      font-size: 12px; color: ${COLORS.text}; line-height: 1.6;
    }
    .dt-example .label {
      color: ${COLORS.accentDeep}; font-weight: 700; margin-right: 6px;
    }
    .dt-step-pill {
      font-family: "JetBrains Mono", monospace;
      font-size: 13px; color: ${COLORS.textDim};
      margin-left: auto;
    }
    .dt-tip {
      background: rgba(245,158,11,0.10);
      border-left: 3px solid ${COLORS.highlight};
      border-radius: 4px;
      padding: 8px 10px; margin: 10px 0;
      font-size: 12px; color: ${COLORS.text};
    }
    .dt-tip b { color: #d97706; }
  `;
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

// ── SVG sub-components ──────────────────────────────────────────────
function TreeEdge({
  parentPos, childPos, parentSize, childSize, label,
  childIdx, numChildren, onPath, visible,
}) {
  const x1 = parentPos.x, y1 = parentPos.y + parentSize.h / 2;
  const x2 = childPos.x,  y2 = childPos.y  - childSize.h / 2;
  const t = edgeT(numChildren, childIdx);
  const mx = x1 + (x2 - x1) * t;
  const my = y1 + (y2 - y1) * t;
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ox = (-dy / len) * 8;
  const oy = (dx / len) * 8;
  const lblW = label.length * 6 + 8;
  return (
    <g>
      <line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={onPath ? COLORS.accent : COLORS.border}
        strokeWidth={onPath ? 2.5 : 1.5}
        opacity={visible ? 1 : 0.4}
      />
      <rect
        x={mx + ox - lblW / 2} y={my + oy - 9}
        width={lblW} height="18" rx="9"
        fill={COLORS.bg}
        stroke={onPath ? COLORS.accent : COLORS.border}
        strokeWidth={onPath ? 1.5 : 1}
        opacity={visible ? 1 : 0.5}
      />
      <text
        x={mx + ox} y={my + oy + 1}
        textAnchor="middle" dominantBaseline="central"
        fill={onPath ? COLORS.accentDeep : COLORS.textDim}
        fontSize="10" fontWeight="700"
        fontFamily="'JetBrains Mono',monospace"
        opacity={visible ? 1 : 0.6}
      >
        {label}
      </text>
    </g>
  );
}

function TreeNode({ pos, size, node, isCurrent, isInPath, clickable, onClick }) {
  const isLeaf = node.type === "leaf";
  let fill, stroke, strokeW, textFill;
  if (isCurrent && isLeaf) {
    fill = COLORS.highlight; stroke = "#b45309"; strokeW = 2.5; textFill = "white";
  } else if (isCurrent) {
    fill = COLORS.accent; stroke = COLORS.accentDeep; strokeW = 2.5; textFill = "white";
  } else if (isInPath) {
    fill = COLORS.accentSoft; stroke = COLORS.accent; strokeW = 1.8; textFill = COLORS.text;
  } else if (isLeaf) {
    fill = COLORS.bg; stroke = COLORS.borderStrong; strokeW = 1.5; textFill = COLORS.text;
  } else {
    fill = COLORS.surface; stroke = COLORS.border; strokeW = 1.5; textFill = COLORS.text;
  }
  const opacity = clickable || isInPath ? 1 : 0.4;
  const text = isLeaf ? (node.short || node.name) : node.text;
  const maxChars = isLeaf ? 16 : 26;
  const lines = wrapText(text, maxChars);
  const lineH = isLeaf ? 12 : 14;
  const totalH = lines.length * lineH;

  return (
    <g
      style={clickable ? { cursor: "pointer" } : undefined}
      opacity={opacity}
      onClick={clickable ? onClick : undefined}
    >
      <rect
        x={pos.x - size.w / 2} y={pos.y - size.h / 2}
        width={size.w} height={size.h} rx="8"
        fill={fill} stroke={stroke} strokeWidth={strokeW}
      />
      {lines.map((line, i) => (
        <text
          key={i}
          x={pos.x}
          y={pos.y - totalH / 2 + i * lineH + (isLeaf ? 9 : 10)}
          textAnchor="middle"
          fill={textFill}
          fontSize={isLeaf ? 10 : 12}
          fontWeight={isLeaf ? 700 : 600}
          fontFamily={isLeaf ? "'JetBrains Mono',monospace" : "inherit"}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

// ── Bottom-panel sub-components ─────────────────────────────────────
function Breadcrumb({ path, tree, parentMap }) {
  const parts = [];
  for (let i = 0; i < path.length; i++) {
    const id = path[i];
    const node = tree[id];
    if (i === 0) {
      parts.push(
        <span key={i} style={{ color: COLORS.text }}>
          {node.text || node.name}
        </span>
      );
    } else {
      const par = parentMap[id];
      parts.push(
        <React.Fragment key={i}>
          <span className="sep">→</span>
          <span style={{ color: COLORS.accentDeep, fontWeight: 600 }}>{par.label}</span>
          <span className="sep">→</span>
          <span style={{ color: COLORS.text }}>{node.text || node.name}</span>
        </React.Fragment>
      );
    }
  }
  return <div className="dt-breadcrumb"><b>Path:</b> {parts}</div>;
}

function QuestionPanel({
  node, currentId, onChoose, onStepBack, onReset, canStepBack,
  questionHelp, rootTip, isRoot,
}) {
  const help = questionHelp?.[currentId];
  return (
    <>
      {isRoot && rootTip ? <div className="dt-tip">{rootTip}</div> : null}
      <div className="dt-title">{node.text}</div>
      {help ? <div className="dt-help">{help}</div> : null}
      <div className="dt-choice-row">
        {node.children.map((ch) => (
          <button
            key={ch.to}
            className="dt-choice-btn"
            onClick={() => onChoose(ch.to)}
            type="button"
          >
            {ch.label}
          </button>
        ))}
      </div>
      <div className="dt-back-row">
        <button
          className="dt-back-btn"
          onClick={onStepBack}
          disabled={!canStepBack}
          type="button"
        >◀ Step back</button>
        <button
          className="dt-restart-btn"
          onClick={onReset}
          disabled={!canStepBack}
          type="button"
        >↻ Restart</button>
      </div>
    </>
  );
}

function DefaultLeafPanel({ node, onStepBack, onReset }) {
  return (
    <>
      <div className="dt-title">{node.name}</div>
      {node.desc ? (
        <div className="dt-help">{node.desc}</div>
      ) : null}
      {node.formula ? (
        <div className="dt-formula">{node.formula}</div>
      ) : null}
      {node.example ? (
        <div className="dt-example">
          <span className="label">Example:</span>{node.example}
        </div>
      ) : null}
      <div className="dt-back-row">
        <button className="dt-back-btn" onClick={onStepBack} type="button">
          ◀ Step back
        </button>
        <button className="dt-restart-btn" onClick={onReset} type="button">
          ↻ Try again
        </button>
      </div>
    </>
  );
}

// ── Main component ──────────────────────────────────────────────────
export default function DecisionTree({
  tree,
  rootId,
  svgW = 1100,
  svgH = 460,
  positions: customPositions,
  helpBanner,
  questionHelp,
  rootTip,
}) {
  const [path, setPath] = useState([rootId]);
  const currentId = path[path.length - 1];
  const currentNode = tree[currentId];

  // Layout: compute once per tree+dimensions. Override with customPositions if provided.
  const positions = useMemo(() => {
    const auto = computeLayout(tree, rootId, svgW, svgH);
    return customPositions ? { ...auto, ...customPositions } : auto;
  }, [tree, rootId, svgW, svgH, customPositions]);

  const parentMap = useMemo(() => buildParentMap(tree), [tree]);

  const pathSet = useMemo(() => new Set(path), [path]);
  const pathEdges = useMemo(() => {
    const e = new Set();
    for (let i = 0; i < path.length - 1; i++) {
      e.add(`${path[i]}-${path[i + 1]}`);
    }
    return e;
  }, [path]);

  const isClickable = useCallback((id) => {
    if (pathSet.has(id)) return true;
    const cn = tree[currentId];
    if (cn.type !== "q") return false;
    return cn.children.some((c) => c.to === id);
  }, [pathSet, tree, currentId]);

  const navigateTo = useCallback((id) => {
    if (path.includes(id)) {
      setPath(path.slice(0, path.indexOf(id) + 1));
    } else {
      const cn = tree[path[path.length - 1]];
      if (cn.type !== "q") return;
      if (!cn.children.some((c) => c.to === id)) return;
      setPath([...path, id]);
    }
  }, [path, tree]);

  const stepBack = useCallback(() => {
    if (path.length > 1) setPath(path.slice(0, -1));
  }, [path]);
  const reset = useCallback(() => setPath([rootId]), [rootId]);

  return (
    <VTRoot>
      <ThemeStyles />
      <DTStyles />
      <PageWrap>
        {helpBanner ? <HelpBanner>{helpBanner}</HelpBanner> : null}

        <ControlBar>
          <button
            className="dt-restart-btn"
            style={{ flex: "0 0 auto" }}
            onClick={reset}
            disabled={path.length === 1}
            type="button"
          >↻ Restart</button>
          <button
            className="dt-back-btn"
            style={{ flex: "0 0 auto" }}
            onClick={stepBack}
            disabled={path.length <= 1}
            type="button"
          >◀ Step back</button>
          <Divider />
          <span className="dt-step-pill">
            Step {path.length} · {currentId}
          </span>
        </ControlBar>

        <div className="dt-stack">
          {/* Diagram on top, full width */}
          <div className="dt-scene-wrap">
            <svg
              className="dt-scene-svg"
              viewBox={`0 0 ${svgW} ${svgH}`}
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={svgW} height={svgH} fill="#ffffff" />

              {/* Edges */}
              {Object.entries(tree).flatMap(([id, node]) => {
                if (node.type !== "q") return [];
                return node.children.map((ch, idx) => {
                  const key = `${id}-${ch.to}`;
                  const onPath = pathEdges.has(key);
                  const visible = onPath ||
                    (pathSet.has(id) && pathSet.has(ch.to));
                  return (
                    <TreeEdge
                      key={key}
                      parentPos={positions[id]}
                      childPos={positions[ch.to]}
                      parentSize={nodeSize(tree[id])}
                      childSize={nodeSize(tree[ch.to])}
                      label={ch.label}
                      childIdx={idx}
                      numChildren={node.children.length}
                      onPath={onPath}
                      visible={visible}
                    />
                  );
                });
              })}

              {/* Nodes */}
              {Object.entries(tree).map(([id, node]) => (
                <TreeNode
                  key={id}
                  pos={positions[id]}
                  size={nodeSize(node)}
                  node={node}
                  isCurrent={id === currentId}
                  isInPath={pathSet.has(id)}
                  clickable={isClickable(id)}
                  onClick={() => navigateTo(id)}
                />
              ))}
            </svg>
          </div>

          {/* Bottom panel: question or leaf */}
          <div className="dt-bottom-panel">
            <Breadcrumb path={path} tree={tree} parentMap={parentMap} />
            {currentNode.type === "q" ? (
              <QuestionPanel
                node={currentNode}
                currentId={currentId}
                onChoose={navigateTo}
                onStepBack={stepBack}
                onReset={reset}
                canStepBack={path.length > 1}
                questionHelp={questionHelp}
                rootTip={rootTip}
                isRoot={currentId === rootId}
              />
            ) : (
              <DefaultLeafPanel
                node={currentNode}
                onStepBack={stepBack}
                onReset={reset}
              />
            )}
          </div>
        </div>
      </PageWrap>
    </VTRoot>
  );
}