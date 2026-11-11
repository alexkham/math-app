// StrategyTree.jsx
// Strategy level: a decision tree drawn as SVG (server-rendered, no client-only
// layout) plus the same tree written out as a list for readers and crawlers.
//
// tree:   { [id]: { type: 'q', text, children: [{ label, to }] }
//                 | { type: 'leaf', name, short?, href?, desc? } }
// rootId: id of the root question
// branches (optional): [{ condition, answer }] hand-written list; when absent
//   the list is generated from the tree paths.
// svgW (default 900), rowGap (default 110)
//
// Clicking a leaf box follows its href. Hovering a leaf highlights its path.

import React, { useMemo, useState } from 'react';
import { processContent } from '../../utils/contentProcessor';
import { CLEAN } from '../calculation-methods/cleanTheme';

const NODE_H_PER_LINE = 17;
const NODE_PAD = 14;
const CHAR_W = 7.1;

function wrapText(text, maxChars) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';
  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);
  return lines;
}

function computeLayout(tree, rootId, svgW, rowGap) {
  const depth = {};
  const parent = {};
  const edgeLabel = {};
  const leaves = [];

  const visit = (id, level) => {
    const node = tree[id];
    if (!node) return;
    depth[id] = level;
    if (node.type === 'leaf') {
      leaves.push(id);
      return;
    }
    (node.children || []).forEach((child) => {
      parent[child.to] = id;
      edgeLabel[child.to] = child.label;
      visit(child.to, level + 1);
    });
  };
  visit(rootId, 0);

  const columnW = svgW / Math.max(leaves.length, 1);
  const x = {};
  leaves.forEach((id, index) => {
    x[id] = columnW * (index + 0.5);
  });
  const placeX = (id) => {
    if (x[id] != null) return x[id];
    const node = tree[id];
    const childXs = (node.children || []).map((child) => placeX(child.to));
    x[id] = childXs.reduce((sum, value) => sum + value, 0) / childXs.length;
    return x[id];
  };
  placeX(rootId);

  const boxW = Math.min(240, columnW - 16);
  const maxDepth = Math.max(...Object.values(depth));
  const nodes = Object.keys(depth).map((id) => {
    const node = tree[id];
    const label = node.type === 'leaf' ? node.short || node.name : node.text;
    const lines = wrapText(label, Math.floor((node.type === 'q' ? Math.min(boxW * 1.4, 300) : boxW) / CHAR_W) - 2);
    const width = node.type === 'q' ? Math.min(Math.max(boxW, 200) * 1.25, 320) : boxW;
    const height = lines.length * NODE_H_PER_LINE + NODE_PAD * 2 - 6;
    return { id, node, x: x[id], y: 30 + depth[id] * rowGap, width, height, lines };
  });

  const svgH = 30 + maxDepth * rowGap + Math.max(...nodes.map((item) => item.height)) + 30;
  return { nodes, parent, edgeLabel, leaves, svgH };
}

function pathTo(id, parent) {
  const path = [id];
  let current = id;
  while (parent[current]) {
    current = parent[current];
    path.unshift(current);
  }
  return path;
}

export default function StrategyTree(props) {
  const { tree = {}, rootId, branches, svgW = 900, rowGap = 110, ariaLabel = 'Decision tree' } = props;
  const [activeLeaf, setActiveLeaf] = useState(null);

  const layout = useMemo(() => computeLayout(tree, rootId, svgW, rowGap), [tree, rootId, svgW, rowGap]);
  const byId = useMemo(() => Object.fromEntries(layout.nodes.map((item) => [item.id, item])), [layout]);
  const activePath = useMemo(
    () => new Set(activeLeaf ? pathTo(activeLeaf, layout.parent) : []),
    [activeLeaf, layout]
  );

  const generatedBranches = useMemo(
    () =>
      layout.leaves.map((leafId) => {
        const path = pathTo(leafId, layout.parent);
        const conditions = path.slice(1).map((id) => {
          const question = tree[layout.parent[id]];
          return `${question.text} ${layout.edgeLabel[id]}.`;
        });
        const leaf = tree[leafId];
        return {
          condition: conditions.join(' '),
          answer: leaf.href ? `Use [${leaf.name}](!${leaf.href}).` : `Use ${leaf.name}.`,
        };
      }),
    [layout, tree]
  );
  const list = branches && branches.length ? branches : generatedBranches;

  if (!rootId || !tree[rootId]) return null;

  return (
    <div>
      <div style={{ border: `1px solid ${CLEAN.border}`, borderRadius: '10px', background: '#fbfcfe', padding: '8px' }}>
        <svg
          viewBox={`0 0 ${svgW} ${layout.svgH}`}
          role="img"
          aria-label={ariaLabel}
          style={{ display: 'block', width: '100%', height: 'auto', fontFamily: 'inherit' }}
        >
          <defs>
            <marker id="strategy-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0 0L10 5L0 10z" fill={CLEAN.faint} />
            </marker>
          </defs>

          {layout.nodes
            .filter((item) => layout.parent[item.id])
            .map((item) => {
              const from = byId[layout.parent[item.id]];
              const onPath = activePath.has(item.id) && activePath.has(from.id);
              const startY = from.y + from.height;
              const midY = startY + (item.y - startY) * 0.35;
              return (
                <g key={`edge-${item.id}`}>
                  <path
                    d={`M${from.x} ${startY} V${midY} H${item.x} V${item.y - 2}`}
                    fill="none"
                    stroke={onPath ? CLEAN.accent : CLEAN.faint}
                    strokeWidth={onPath ? 2 : 1.3}
                    markerEnd="url(#strategy-arrow)"
                  />
                  <text
                    x={item.x + (item.x > svgW * 0.66 ? -8 : 8)}
                    y={item.y - 10}
                    textAnchor={item.x > svgW * 0.66 ? 'end' : 'start'}
                    fontSize="12"
                    fill={onPath ? CLEAN.accent : CLEAN.muted}
                  >
                    {layout.edgeLabel[item.id]}
                  </text>
                </g>
              );
            })}

          {layout.nodes.map((item) => {
            const isLeaf = item.node.type === 'leaf';
            const isRoot = item.id === rootId;
            const onPath = activePath.has(item.id);
            const box = (
              <g
                key={item.id}
                onMouseEnter={isLeaf ? () => setActiveLeaf(item.id) : undefined}
                onMouseLeave={isLeaf ? () => setActiveLeaf(null) : undefined}
                style={{ cursor: isLeaf && item.node.href ? 'pointer' : 'default' }}
              >
                <rect
                  x={item.x - item.width / 2}
                  y={item.y}
                  width={item.width}
                  height={item.height}
                  rx="8"
                  fill={isLeaf || isRoot ? CLEAN.tint : '#ffffff'}
                  stroke={onPath || isRoot ? CLEAN.accent : isLeaf ? CLEAN.tintBorder : CLEAN.faint}
                  strokeWidth={onPath || isRoot ? 2 : 1.2}
                />
                {item.lines.map((line, lineIndex) => (
                  <text
                    key={lineIndex}
                    x={item.x}
                    y={item.y + NODE_PAD + 6 + lineIndex * NODE_H_PER_LINE}
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight={lineIndex === 0 || isLeaf ? 600 : 400}
                    fill={isLeaf ? CLEAN.primary : CLEAN.title}
                  >
                    {line}
                    {isLeaf && item.node.href && lineIndex === item.lines.length - 1 ? ' →' : ''}
                  </text>
                ))}
              </g>
            );
            return isLeaf && item.node.href ? (
              <a key={item.id} href={item.node.href}>
                {box}
              </a>
            ) : (
              box
            );
          })}
        </svg>
      </div>

      <h3 style={{ fontSize: '16px', color: CLEAN.title, margin: '18px 0 4px' }}>The same tree, written out</h3>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {list.map((branch, index) => (
          <li
            key={index}
            style={{
              display: 'grid',
              gridTemplateColumns: '30px minmax(0, 1fr)',
              gap: '10px',
              padding: '10px 0',
              borderBottom: `1px solid ${CLEAN.border}`,
              fontSize: '14.5px',
              lineHeight: 1.6,
              color: CLEAN.text,
            }}
          >
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                background: CLEAN.accent,
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              {index + 1}
            </span>
            <span>
              <b style={{ color: CLEAN.title }}>{processContent(branch.condition)}</b> {processContent(branch.answer)}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
