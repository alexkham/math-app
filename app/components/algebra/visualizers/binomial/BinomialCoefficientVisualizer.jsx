'use client'
// BinomialCoefficientsVisualizer.jsx (single-file build)
//
// All four modules merged: types/constants, pure logic, panel components,
// styles, and the top-level visualizer.

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// ============================================================
//   1. CONSTANTS & "TYPES"
// ============================================================

/**
 * @typedef {Object} TreeNode
 * @property {number} level
 * @property {number} idx
 * @property {number} x
 * @property {number} y
 * @property {boolean} isLeaf
 * @property {string} path
 * @property {number} bC
 *
 * @typedef {Object} TreeEdge
 * @property {string} path
 * @property {string} branch
 * @property {number} x1
 * @property {number} y1
 * @property {number} x2
 * @property {number} y2
 * @property {number} lblX
 * @property {number} lblY
 *
 * @typedef {0|1} Bit
 * @typedef {Bit[]} Combo
 */

const VIEW = {
  TREE:    'tree',
  DISTRIB: 'distribution',
  PASCAL:  'pascal',
};

const VIEW_LIST = [
  { id: VIEW.TREE,    label: 'Decision Tree' },
  { id: VIEW.DISTRIB, label: 'Distribution'  },
  { id: VIEW.PASCAL,  label: 'Pascal Paths'  },
];

const N_MIN = 1;
const N_MAX = 5;

// Non-toxic palette: muted indigo, soft amber, teal, soft violet, sage,
// blue, warm sand, sky. Cycled by b-exponent.
const BEXP_PALETTE = [
  { bg: '#e0e7ff', border: '#6366f1', text: '#312e81' }, // 0 — indigo
  { bg: '#fef3c7', border: '#b45309', text: '#78350f' }, // 1 — muted amber
  { bg: '#ccfbf1', border: '#0d9488', text: '#134e4a' }, // 2 — teal
  { bg: '#ede9fe', border: '#7c3aed', text: '#4c1d95' }, // 3 — soft violet
  { bg: '#dcfce7', border: '#16a34a', text: '#14532d' }, // 4 — sage
  { bg: '#dbeafe', border: '#3b82f6', text: '#1e3a8a' }, // 5 — blue
  { bg: '#fef9c3', border: '#a16207', text: '#713f12' }, // 6 — warm sand
  { bg: '#e0f2fe', border: '#0284c7', text: '#0c4a6e' }, // 7 — sky
];

// ============================================================
//   2. PURE LOGIC
// ============================================================

function binom(n, k) {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
  return Math.round(r);
}

function pascalRow(n) {
  const out = [];
  for (let k = 0; k <= n; k++) out.push(binom(n, k));
  return out;
}

function allStrings(n) {
  const out = [];
  for (let i = 0; i < (1 << n); i++) {
    let s = '';
    for (let bit = n - 1; bit >= 0; bit--) {
      s += (i >> bit) & 1 ? 'b' : 'a';
    }
    out.push(s);
  }
  return out;
}

function allCombos(n) {
  const out = [];
  for (let i = 0; i < (1 << n); i++) {
    const arr = [];
    for (let bit = n - 1; bit >= 0; bit--) arr.push((i >> bit) & 1);
    out.push(arr);
  }
  return out;
}

function termOf(str) {
  let aC = 0, bC = 0;
  for (const ch of str) { if (ch === 'a') aC++; else bC++; }
  return { aC, bC };
}

function termOfCombo(combo) {
  let aC = 0, bC = 0;
  combo.forEach(v => v === 0 ? aC++ : bC++);
  return { aC, bC };
}

// ---------- Tree geometry ----------

function leafWidthFor(n) {
  if (n <= 2) return 90;
  if (n === 3) return 70;
  if (n === 4) return 46;
  return 32; // n = 5
}

function leafFontSizeFor(n) {
  if (n <= 3) return 13;
  if (n === 4) return 12;
  return 10;
}

function buildTree(n) {
  const leafW = leafWidthFor(n);
  const leaves = 1 << n;
  const width = leaves * leafW;
  const levelH = 65;
  const height = (n + 1) * levelH + 50;
  const padT = 30;

  const nodes = [];
  const edges = [];

  const nodePos = (level, idx) => {
    const count = 1 << level;
    const spacing = width / count;
    return { x: spacing * idx + spacing / 2, y: padT + level * levelH };
  };

  const stack = [{ level: 0, idx: 0, path: '' }];
  while (stack.length > 0) {
    const { level, idx, path } = stack.pop();
    const pos = nodePos(level, idx);
    const isLeaf = level === n;
    const { bC } = isLeaf ? termOf(path) : { bC: 0 };
    nodes.push({ level, idx, x: pos.x, y: pos.y, isLeaf, path, bC });

    if (!isLeaf) {
      const lp = nodePos(level + 1, idx * 2);
      const rp = nodePos(level + 1, idx * 2 + 1);
      const leftPath = path + 'a';
      const rightPath = path + 'b';
      edges.push({
        path: leftPath, branch: 'a',
        x1: pos.x, y1: pos.y, x2: lp.x, y2: lp.y,
        lblX: (pos.x + lp.x) / 2 - 8, lblY: (pos.y + lp.y) / 2,
      });
      edges.push({
        path: rightPath, branch: 'b',
        x1: pos.x, y1: pos.y, x2: rp.x, y2: rp.y,
        lblX: (pos.x + rp.x) / 2 + 8, lblY: (pos.y + rp.y) / 2,
      });
      stack.push({ level: level + 1, idx: idx * 2, path: leftPath });
      stack.push({ level: level + 1, idx: idx * 2 + 1, path: rightPath });
    }
  }

  return { nodes, edges, width, height, padT, leafW };
}

// ---------- Pascal geometry ----------

const PASCAL_CONST = {
  CELL_R: 22,
  ROW_H: 60,
  COL_W: 56,
  PAD_T: 30,
};

function pascalLayout(maxRow) {
  const triangleWidth = maxRow * PASCAL_CONST.COL_W;
  const W = triangleWidth + 100;
  const H = (maxRow + 1) * PASCAL_CONST.ROW_H + 30;
  return { W, H, centerX: W / 2 };
}

function pascalCellPos(n, k, centerX) {
  const rowWidth = n * PASCAL_CONST.COL_W;
  const startX = centerX - rowWidth / 2;
  return { x: startX + k * PASCAL_CONST.COL_W, y: PASCAL_CONST.PAD_T + n * PASCAL_CONST.ROW_H };
}

function enumeratePascalPaths(targetN, targetK) {
  const paths = [];
  const total = 1 << targetN;
  for (let i = 0; i < total; i++) {
    let rCount = 0;
    for (let bit = 0; bit < targetN; bit++) {
      if ((i >> bit) & 1) rCount++;
    }
    if (rCount === targetK) {
      const seq = [];
      for (let bit = targetN - 1; bit >= 0; bit--) {
        seq.push(((i >> bit) & 1) ? 'R' : 'L');
      }
      paths.push(seq);
    }
  }
  return paths;
}

function pathToCells(seq, centerX) {
  let row = 0, col = 0;
  const pts = [pascalCellPos(0, 0, centerX)];
  seq.forEach(m => {
    row++;
    if (m === 'R') col++;
    pts.push(pascalCellPos(row, col, centerX));
  });
  return pts;
}

function cellsTouchedBy(paths) {
  const out = new Set();
  paths.forEach(seq => {
    let row = 0, col = 0;
    out.add('0_0');
    seq.forEach(m => {
      row++;
      if (m === 'R') col++;
      out.add(row + '_' + col);
    });
  });
  return out;
}

// ---------- Color ----------

function colorForBExp(bC) {
  const safe = Math.max(0, bC);
  return BEXP_PALETTE[safe % BEXP_PALETTE.length];
}

// ---------- HTML formatters ----------

function fmtTermHtml(aC, bC) {
  let s = '';
  if (aC === 0 && bC === 0) return '1';
  if (aC > 0) s += 'a' + (aC > 1 ? '<sup>' + aC + '</sup>' : '');
  if (bC > 0) s += 'b' + (bC > 1 ? '<sup>' + bC + '</sup>' : '');
  return s;
}

function fmtSignedTermHtml(coeff, aC, bC, isFirst) {
  if (coeff === 0) return '';
  const absC = Math.abs(coeff);
  let sign;
  if (isFirst) sign = coeff < 0 ? '\u2212' : '';
  else sign = coeff < 0 ? ' \u2212 ' : ' + ';
  const coefStr = (absC === 1 && (aC > 0 || bC > 0)) ? '' : String(absC);
  return sign + coefStr + fmtTermHtml(aC, bC);
}

function fmtExpansionHtml(n) {
  const row = pascalRow(n);
  let s = '';
  row.forEach((c, k) => {
    const aC = n - k;
    const bC = k;
    s += fmtSignedTermHtml(c, aC, bC, s === '');
  });
  return s || '0';
}

// ============================================================
//   3. PANELS — switchers, n picker, three views
// ============================================================

function ViewSwitcher({ activeView, onSelect }) {
  return (
    <div className="bc-view-switcher" role="tablist">
      {VIEW_LIST.map(v => (
        <button
          key={v.id}
          type="button"
          role="tab"
          aria-selected={activeView === v.id}
          className={'bc-view-tab' + (activeView === v.id ? ' active' : '')}
          onClick={() => onSelect(v.id)}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}

function NPicker({ n, onChange }) {
  const options = [];
  for (let i = N_MIN; i <= N_MAX; i++) options.push(i);
  return (
    <div className="bc-n-row">
      <span className="bc-lbl">n =</span>
      <div className="bc-n-tabs">
        {options.map(i => (
          <button
            key={i}
            type="button"
            className={'bc-n-tab' + (n === i ? ' active' : '')}
            onClick={() => onChange(i)}
          >
            {i}
          </button>
        ))}
      </div>
      <div className="bc-formula">
        (a + b)<sup>{n}</sup>
      </div>
    </div>
  );
}

// ---------- TreeView ----------
function TreeView({ n }) {
  const [hot, setHot] = useState(null);
  useEffect(() => setHot(null), [n]);

  const tree = useMemo(() => buildTree(n), [n]);
  const strings = useMemo(() => allStrings(n), [n]);
  const groups = useMemo(() => {
    const byBC = {};
    strings.forEach(s => {
      const { bC } = termOf(s);
      if (!byBC[bC]) byBC[bC] = [];
      byBC[bC].push(s);
    });
    return byBC;
  }, [strings]);

  const hotEdgePaths = useMemo(() => {
    if (!hot) return new Set();
    const targets = hot.path
      ? [hot.path]
      : strings.filter(s => termOf(s).bC === hot.bC);
    const out = new Set();
    targets.forEach(p => {
      for (let i = 1; i <= p.length; i++) out.add(p.substring(0, i));
    });
    return out;
  }, [hot, strings]);

  const leafFont = leafFontSizeFor(n);

  return (
    <div className="bc-stage">
      <div className="bc-explain">
        (a + b)<sup>{n}</sup> means multiplying <b>{n} copies</b> of (a + b).
        Each factor contributes either an <b>a</b> or a <b>b</b> &mdash; a binary choice.
        The tree shows all 2<sup>{n}</sup> = <b>{1 << n}</b> ways to make those choices.
        Leaves group by how many <b>b</b>&apos;s they contain &mdash; group size = coefficient.
      </div>

      <div className="bc-tree-scroll">
        <svg
          className="bc-tree-svg"
          viewBox={`0 0 ${tree.width} ${tree.height}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: tree.width, maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
        >
          {tree.edges.map((e, i) => (
            <line
              key={'e' + i}
              x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
              className={'bc-edge' + (hotEdgePaths.has(e.path) ? ' hot' : '')}
            />
          ))}

          {tree.edges.map((e, i) => (
            <text
              key={'el' + i}
              x={e.lblX} y={e.lblY}
              textAnchor="middle"
              className={'bc-edge-label ' + e.branch}
            >
              {e.branch}
            </text>
          ))}

          {tree.nodes.filter(nd => !nd.isLeaf).map((nd, i) => (
            <circle
              key={'n' + i}
              cx={nd.x} cy={nd.y} r={6}
              className="bc-tree-node"
            />
          ))}

          <text
            x={tree.nodes[0] ? tree.nodes[0].x : 0}
            y={tree.padT - 12}
            textAnchor="middle"
            fontSize="12"
            fill="#94a3b8"
            fontWeight="600"
          >
            start
          </text>

          {tree.nodes.filter(nd => nd.isLeaf).map((nd, i) => {
            const col = colorForBExp(nd.bC);
            const dim = hot && hot.bC !== nd.bC && hot.path !== nd.path;
            const isHot = hot && (hot.path === nd.path || (!hot.path && hot.bC === nd.bC));
            const boxW = Math.min(tree.leafW - 6, 60);
            const boxH = 28;
            return (
              <g
                key={'l' + i}
                className={
                  'bc-leaf-box'
                  + (isHot ? ' hot' : '')
                  + (dim ? ' dim' : '')
                }
                onMouseEnter={() => setHot({ bC: nd.bC, path: nd.path })}
                onMouseLeave={() => setHot(null)}
              >
                <rect
                  x={nd.x - boxW / 2}
                  y={nd.y - 6}
                  width={boxW}
                  height={boxH}
                  rx={5}
                  fill={col.bg}
                  stroke={col.border}
                  strokeWidth={1.4}
                />
                <text
                  x={nd.x}
                  y={nd.y + 12}
                  textAnchor="middle"
                  className="bc-leaf-label"
                  fontSize={leafFont}
                  fill={col.text}
                >
                  {nd.path}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="bc-groups">
        {Array.from({ length: n + 1 }, (_, bC) => {
          const aC = n - bC;
          const list = groups[bC] || [];
          const col = colorForBExp(bC);
          const isHot = hot && hot.bC === bC;
          const dim = hot && hot.bC !== bC;
          return (
            <div
              key={bC}
              className={
                'bc-group'
                + (isHot ? ' hot' : '')
                + (dim ? ' dim' : '')
              }
              style={{ background: col.bg, borderColor: col.border }}
              onMouseEnter={() => setHot({ bC, path: null })}
              onMouseLeave={() => setHot(null)}
            >
              <div
                className="bc-group-term"
                style={{ color: col.text }}
                dangerouslySetInnerHTML={{ __html: fmtTermHtml(aC, bC) }}
              />
              <div className="bc-group-strings" style={{ color: col.text }}>
                {list.join(', ')}
              </div>
              <div className="bc-group-count" style={{ color: col.text }}>
                paths landing here: <b>{list.length}</b>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------- DistributionView ----------
function DistributionView({ n }) {
  const combos = useMemo(() => allCombos(n), [n]);
  const [idx, setIdx] = useState(0);
  const [collected, setCollected] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [flashedBExp, setFlashedBExp] = useState(null);
  const flashTimerRef = useRef(null);

  useEffect(() => {
    setIdx(0);
    setCollected([]);
    setPlaying(false);
    setFlashedBExp(null);
  }, [n]);

  const deliverOne = useCallback(() => {
    setIdx(prev => {
      if (prev >= combos.length) return prev;
      const combo = combos[prev];
      const { aC, bC } = termOfCombo(combo);
      setCollected(p => [...p, { combo, aC, bC }]);
      setFlashedBExp(bC);
      if (flashTimerRef.current) clearTimeout(flashTimerRef.current);
      flashTimerRef.current = setTimeout(() => setFlashedBExp(null), 400);
      return prev + 1;
    });
  }, [combos]);

  useEffect(() => {
    if (!playing) return undefined;
    if (idx >= combos.length) {
      setPlaying(false);
      return undefined;
    }
    const t = setTimeout(() => deliverOne(), 540);
    return () => clearTimeout(t);
  }, [playing, idx, combos, deliverOne]);

  useEffect(() => () => {
    if (flashTimerRef.current) clearTimeout(flashTimerRef.current);
  }, []);

  const handleStep = () => {
    setPlaying(false);
    deliverOne();
  };
  const handleAuto = () => {
    if (playing) { setPlaying(false); return; }
    if (idx >= combos.length) {
      setIdx(0);
      setCollected([]);
    }
    setPlaying(true);
  };
  const handleReset = () => {
    setPlaying(false);
    setIdx(0);
    setCollected([]);
    setFlashedBExp(null);
  };

  const currentCombo = idx > 0 ? combos[idx - 1] : null;
  const lockedPicks = currentCombo;

  return (
    <div className="bc-stage">
      <div className="bc-explain">
        Multiplying out (a + b)<sup>{n}</sup>: for each of the <b>{n}</b> factors, pick either
        an <b>a</b> or a <b>b</b>, then multiply the picks. There are <b>2<sup>{n}</sup> = {1 << n}</b> ways.
        Each way produces one product term. Products with the same exponents land in the same bucket.
        Bucket size = binomial coefficient.
      </div>

      <div className="bc-factors">
        {Array.from({ length: n }, (_, i) => {
          if (i > 0) {
            return (
              <React.Fragment key={'sep' + i}>
                <span className="bc-factor-dot">·</span>
                <FactorBox picks={lockedPicks} index={i} />
              </React.Fragment>
            );
          }
          return <FactorBox key={'f' + i} picks={lockedPicks} index={i} />;
        })}
      </div>

      <div className={'bc-product-row' + (currentCombo ? ' hot' : '')}>
        {currentCombo ? (
          <>
            {currentCombo.map(v => v === 0 ? 'a' : 'b').join(' · ')}
            &nbsp;=&nbsp;
            <span
              className="bc-product-result"
              dangerouslySetInnerHTML={{
                __html: fmtTermHtml(
                  currentCombo.filter(v => v === 0).length,
                  currentCombo.filter(v => v === 1).length,
                ),
              }}
            />
          </>
        ) : (
          <span className="bc-product-hint">
            click Step or Auto-expand to start
          </span>
        )}
      </div>

      <div className="bc-controls">
        <button
          type="button"
          className="bc-btn"
          onClick={handleStep}
          disabled={idx >= combos.length}
        >
          Step ▶
        </button>
        <button
          type="button"
          className={'bc-btn primary' + (playing ? ' playing' : '')}
          onClick={handleAuto}
        >
          {playing ? '⏸ Pause' : (idx >= combos.length ? 'Replay' : 'Auto-expand')}
        </button>
        <button type="button" className="bc-btn" onClick={handleReset}>
          ↺ Reset
        </button>
        <div className="bc-controls-spacer" />
        <div className="bc-status">{idx} / {combos.length}</div>
      </div>

      <div className="bc-buckets">
        {Array.from({ length: n + 1 }, (_, bC) => {
          const aC = n - bC;
          const col = colorForBExp(bC);
          const ofBC = collected.filter(c => c.bC === bC);
          const expected = binom(n, bC);
          const isFlashed = flashedBExp === bC;
          return (
            <div
              key={bC}
              className={'bc-bucket' + (isFlashed ? ' hot' : '')}
              style={{ background: col.bg, borderColor: col.border }}
            >
              <div
                className="bc-bucket-term"
                style={{ color: col.text }}
                dangerouslySetInnerHTML={{ __html: fmtTermHtml(aC, bC) }}
              />
              <div className="bc-bucket-pellets">
                {ofBC.map((c, i) => (
                  <div
                    key={i}
                    className="bc-pellet"
                    style={{ background: col.border, color: col.bg }}
                    title={c.combo.map(v => v === 0 ? 'a' : 'b').join('')}
                  >
                    {c.combo.map(v => v === 0 ? 'a' : 'b').join('')}
                  </div>
                ))}
              </div>
              <div className="bc-bucket-count" style={{ color: col.text }}>
                count: <b>{ofBC.length}</b>
                {idx < combos.length ? <> / {expected}</> : null}
              </div>
            </div>
          );
        })}
      </div>

      <div className={'bc-final' + (idx >= combos.length ? ' done' : '')}>
        <div className="bc-final-label">Expansion</div>
        <div
          className="bc-final-eq"
          dangerouslySetInnerHTML={{
            __html: '(a + b)<sup>' + n + '</sup> = ' + fmtExpansionHtml(n),
          }}
        />
      </div>
    </div>
  );
}

function FactorBox({ picks, index }) {
  const locked = picks && picks[index] !== undefined;
  const pickedA = locked && picks[index] === 0;
  const pickedB = locked && picks[index] === 1;
  return (
    <div className={'bc-factor' + (locked ? ' locked' : '')}>
      <span className={'bc-factor-pick' + (pickedA ? ' chosen' : '')}>a</span>
      <span className="bc-factor-plus">+</span>
      <span className={'bc-factor-pick' + (pickedB ? ' chosen' : '')}>b</span>
    </div>
  );
}

// ---------- PascalView ----------
function PascalView({ n }) {
  const [hover, setHover] = useState(null);
  useEffect(() => setHover(null), [n]);

  const layout = useMemo(() => pascalLayout(n), [n]);

  const structuralEdges = useMemo(() => {
    const out = [];
    for (let row = 0; row < n; row++) {
      for (let k = 0; k <= row; k++) {
        const p = pascalCellPos(row, k, layout.centerX);
        const lc = pascalCellPos(row + 1, k, layout.centerX);
        const rc = pascalCellPos(row + 1, k + 1, layout.centerX);
        out.push({ x1: p.x, y1: p.y, x2: lc.x, y2: lc.y });
        out.push({ x1: p.x, y1: p.y, x2: rc.x, y2: rc.y });
      }
    }
    return out;
  }, [n, layout.centerX]);

  const cells = useMemo(() => {
    const out = [];
    for (let row = 0; row <= n; row++) {
      for (let k = 0; k <= row; k++) {
        const pos = pascalCellPos(row, k, layout.centerX);
        out.push({ row, k, x: pos.x, y: pos.y, value: binom(row, k) });
      }
    }
    return out;
  }, [n, layout.centerX]);

  const hoverPaths = useMemo(() => {
    if (!hover) return [];
    return enumeratePascalPaths(hover.n, hover.k);
  }, [hover]);

  const touched = useMemo(() => cellsTouchedBy(hoverPaths), [hoverPaths]);

  return (
    <div className="bc-stage">
      <div className="bc-explain">
        Each cell in Pascal&apos;s triangle equals the number of paths from the top to that cell,
        moving diagonally <b>down-left</b> or <b>down-right</b> at each step. After <b>n</b> steps
        you reach row <b>n</b> at column <b>k</b> (k = number of right-moves). The number of such paths
        is exactly C(n, k) &mdash; the binomial coefficient.
      </div>

      <div className="bc-pascal-scroll">
        <svg
          className="bc-pascal-svg"
          viewBox={`0 0 ${layout.W} ${layout.H}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: layout.W, maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
        >
          {structuralEdges.map((e, i) => (
            <line key={'se' + i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} className="bc-pascal-edge" />
          ))}

          {hoverPaths.map((seq, i) => {
            const pts = pathToCells(seq, layout.centerX);
            const offset = (i - (hoverPaths.length - 1) / 2) * 1.5;
            const d = pts.map((p, j) => `${j === 0 ? 'M' : 'L'} ${p.x + offset} ${p.y}`).join(' ');
            return <path key={'pp' + i} d={d} className="bc-pascal-path" />;
          })}

          {cells.map(c => {
            const key = c.row + '_' + c.k;
            const isTarget = hover && hover.n === c.row && hover.k === c.k;
            const isOnPath = touched.has(key);
            return (
              <g
                key={key}
                onMouseEnter={() => setHover({ n: c.row, k: c.k })}
                onMouseLeave={() => setHover(null)}
              >
                <circle
                  cx={c.x} cy={c.y} r={PASCAL_CONST.CELL_R}
                  className={
                    'bc-pascal-cell'
                    + (isTarget ? ' hot' : '')
                    + (isOnPath && !isTarget ? ' on-path' : '')
                  }
                />
                <text
                  x={c.x} y={c.y + 5}
                  textAnchor="middle"
                  className={'bc-pascal-label' + (isTarget ? ' hot' : '')}
                >
                  {c.value}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="bc-info-grid">
        <div className="bc-info-card">
          <div className="bc-info-title">Selected Cell</div>
          {hover ? (
            <div className="bc-info-body">
              Row <b>n = {hover.n}</b>, column <b>k = {hover.k}</b>
              <div className="bc-info-formula">
                C({hover.n}, {hover.k}) = {binom(hover.n, hover.k)}
              </div>
              <div className="bc-info-small">paths from top: <b>{hoverPaths.length}</b></div>
            </div>
          ) : (
            <div className="bc-info-body">Hover any cell to see its paths.</div>
          )}
        </div>
        <div className="bc-info-card">
          <div className="bc-info-title">Why C(n, k)?</div>
          {hover ? (
            <div className="bc-info-body">
              Every path takes <b>{hover.n}</b> steps; landing at column {hover.k} requires
              exactly <b>{hover.k}</b> right-moves. The count of ways to choose which {hover.k}
              of {hover.n} steps go right is:
              <div className="bc-info-formula">
                C({hover.n}, {hover.k}) = {hover.n}! / ({hover.k}! &middot; {hover.n - hover.k}!)
                = {binom(hover.n, hover.k)}
              </div>
            </div>
          ) : (
            <div className="bc-info-body">
              C(n, k) counts the ways to choose k right-moves out of n total steps.
            </div>
          )}
        </div>
      </div>

      <div className="bc-pascal-hint">
        Notice that every cell&apos;s value equals the sum of the two cells above it &mdash; that&apos;s
        Pascal&apos;s rule, and it&apos;s exactly &quot;arrived from down-left&quot; + &quot;arrived from down-right.&quot;
      </div>
    </div>
  );
}

// ============================================================
//   4. STYLES
// ============================================================

const BC_STYLES = `
.bc-wrap {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #1e3a5f;
  max-width: 1100px;
  margin: 0 auto;
}
.bc-sub {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 16px;
  line-height: 1.5;
}
.bc-card {
  background: #fff;
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 16px;
}
.bc-card-title {
  font-size: 0.74rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 12px;
}

/* View switcher */
.bc-view-switcher {
  display: flex;
  gap: 6px;
  margin-bottom: 14px;
  padding: 4px;
  background: #f1f5f9;
  border-radius: 10px;
}
.bc-view-tab {
  flex: 1;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  transition: all 0.18s;
}
.bc-view-tab:hover:not(.active) {
  background: #fff;
  color: #1e3a5f;
}
.bc-view-tab.active {
  background: #2563eb;
  color: #fff;
  box-shadow: 0 2px 6px rgba(37,99,235,0.25);
}

/* N picker */
.bc-n-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  margin-bottom: 14px;
}
.bc-lbl {
  font-size: 0.74rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}
.bc-n-tabs { display: flex; gap: 4px; }
.bc-n-tab {
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  background: #fff;
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1rem;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
}
.bc-n-tab.active {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}
.bc-n-tab:hover:not(.active) {
  background: #eff6ff;
  border-color: #3b82f6;
}
.bc-formula {
  margin-left: auto;
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e3a5f;
}
.bc-formula sup { font-size: 0.7em; }

/* Stage / explain */
.bc-stage { display: flex; flex-direction: column; gap: 14px; }
.bc-explain {
  font-size: 0.92rem;
  color: #475569;
  line-height: 1.55;
  padding: 12px 14px;
  background: #f8fafc;
  border-left: 4px solid #3b82f6;
  border-radius: 6px;
}
.bc-explain b { color: #1e3a5f; }
.bc-explain sup { font-size: 0.7em; }

/* TREE */
.bc-tree-scroll { overflow-x: auto; padding: 6px 0; }
.bc-tree-svg .bc-edge {
  stroke: #cbd5e1;
  stroke-width: 1.8;
  fill: none;
  transition: stroke 0.2s, stroke-width 0.2s;
}
.bc-tree-svg .bc-edge.hot {
  stroke: #b45309;
  stroke-width: 3.2;
}
.bc-tree-svg .bc-edge-label {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 13px;
  font-weight: 700;
  pointer-events: none;
}
.bc-tree-svg .bc-edge-label.a { fill: #2563eb; }
.bc-tree-svg .bc-edge-label.b { fill: #b45309; }
.bc-tree-svg .bc-tree-node {
  fill: #fff;
  stroke: #cbd5e1;
  stroke-width: 1.4;
}
.bc-tree-svg .bc-leaf-box {
  cursor: pointer;
  transition: opacity 0.2s, filter 0.2s;
}
.bc-tree-svg .bc-leaf-box.hot {
  filter: drop-shadow(0 0 6px rgba(180, 83, 9, 0.45));
}
.bc-tree-svg .bc-leaf-box.dim { opacity: 0.22; }
.bc-tree-svg .bc-leaf-label {
  font-family: "Cambria Math", Georgia, serif;
  font-weight: 700;
  pointer-events: none;
}

.bc-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
}
.bc-group {
  border-radius: 10px;
  padding: 12px 14px;
  border: 2px solid #e2e8f0;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
}
.bc-group.hot {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.08);
}
.bc-group.dim { opacity: 0.35; }
.bc-group-term {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.bc-group-term sup { font-size: 0.7em; }
.bc-group-strings {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.85;
  word-break: break-all;
}
.bc-group-count {
  margin-top: 6px;
  font-size: 0.82rem;
  opacity: 0.85;
}
.bc-group-count b {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.05rem;
}

/* DISTRIBUTION */
.bc-factors {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 12px;
  background: #f8fafc;
  border-radius: 10px;
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.3rem;
  font-weight: 700;
}
.bc-factor {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 14px;
  border-radius: 8px;
  background: #eff6ff;
  border: 2px solid #bfdbfe;
  transition: all 0.3s;
}
.bc-factor.locked {
  background: #f1f5f9;
  border-color: #cbd5e1;
}
.bc-factor-pick {
  padding: 2px 8px;
  border-radius: 4px;
  transition: all 0.3s;
}
.bc-factor-pick.chosen {
  background: #2563eb;
  color: #fff;
  font-weight: 700;
}
.bc-factor-plus { color: #cbd5e1; }
.bc-factor-dot { color: #94a3b8; font-weight: 700; }

.bc-product-row {
  padding: 14px;
  border-radius: 10px;
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  text-align: center;
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e3a5f;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.bc-product-row.hot {
  background: #fef3c7;
  border-color: #b45309;
  border-style: solid;
}
.bc-product-row sup { font-size: 0.7em; }
.bc-product-result { color: #b45309; }
.bc-product-hint {
  color: #94a3b8;
  font-weight: 400;
  font-size: 0.95rem;
}

.bc-controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
.bc-controls-spacer { flex: 1; }
.bc-btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: #fff;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
}
.bc-btn:hover:not(:disabled) {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #1e3a5f;
}
.bc-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.bc-btn.primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  border-color: transparent;
}
.bc-btn.primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
}
.bc-btn.primary.playing {
  background: #fef3c7;
  color: #78350f;
  border: 1px solid #b45309;
}
.bc-status { font-size: 0.85rem; color: #64748b; }

.bc-buckets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 10px;
}
.bc-bucket {
  border-radius: 10px;
  padding: 12px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s;
  min-height: 110px;
}
.bc-bucket.hot {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}
.bc-bucket-term {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.bc-bucket-term sup { font-size: 0.7em; }
.bc-bucket-pellets {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  min-height: 32px;
  margin: 8px 0;
}
.bc-pellet {
  min-width: 26px;
  height: 22px;
  padding: 0 5px;
  border-radius: 4px;
  font-family: "Cambria Math", Georgia, serif;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bc-drop 0.4s ease;
}
@keyframes bc-drop {
  from { transform: translateY(-30px) scale(0.6); opacity: 0; }
  to   { transform: translateY(0) scale(1); opacity: 1; }
}
.bc-bucket-count {
  font-size: 0.82rem;
  opacity: 0.85;
}
.bc-bucket-count b {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.05rem;
}

.bc-final {
  padding: 14px 18px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  border-radius: 10px;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.3s;
}
.bc-final.done { opacity: 1; }
.bc-final-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.85;
  font-weight: 600;
  margin-bottom: 6px;
}
.bc-final-eq {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.15rem;
  font-weight: 700;
}
.bc-final-eq sup { font-size: 0.7em; }

/* PASCAL */
.bc-pascal-scroll { overflow-x: auto; padding: 6px 0; }
.bc-pascal-svg .bc-pascal-edge {
  stroke: #cbd5e1;
  stroke-width: 1;
  fill: none;
}
.bc-pascal-svg .bc-pascal-path {
  stroke: #b45309;
  stroke-width: 2.5;
  fill: none;
  opacity: 0.55;
  stroke-linecap: round;
}
.bc-pascal-svg .bc-pascal-cell {
  fill: #eff6ff;
  stroke: #bfdbfe;
  stroke-width: 1.8;
  cursor: pointer;
  transition: all 0.2s;
}
.bc-pascal-svg .bc-pascal-cell.on-path {
  fill: #fef3c7;
  stroke: #f59e0b;
}
.bc-pascal-svg .bc-pascal-cell.hot {
  fill: #fbbf24;
  stroke: #b45309;
}
.bc-pascal-svg .bc-pascal-label {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 14px;
  font-weight: 700;
  fill: #1e3a5f;
  pointer-events: none;
}
.bc-pascal-svg .bc-pascal-label.hot { fill: #78350f; }

.bc-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
@media (max-width: 640px) {
  .bc-info-grid { grid-template-columns: 1fr; }
}
.bc-info-card {
  padding: 12px 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
}
.bc-info-title {
  font-size: 0.7rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 6px;
}
.bc-info-body {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
}
.bc-info-body b { color: #1e3a5f; }
.bc-info-formula {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.05rem;
  color: #1e3a5f;
  font-weight: 700;
  margin-top: 6px;
}
.bc-info-small {
  margin-top: 4px;
  font-size: 0.85rem;
}
.bc-pascal-hint {
  font-size: 0.85rem;
  color: #64748b;
  font-style: italic;
  text-align: center;
}
`;

// ============================================================
//   5. MAIN COMPONENT
// ============================================================

export default function BinomialCoefficientsVisualizer() {
  const [n, setN] = useState(3);
  const [activeView, setActiveView] = useState(VIEW.TREE);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BC_STYLES }} />

      <div className="bc-wrap">
        <div className="bc-sub">
          Where do binomial coefficients come from? Three views of the same idea: a
          decision tree that counts choice paths, a distribution that watches products
          land in buckets, and Pascal&apos;s triangle as a path counter. Flip between
          them &mdash; they all answer the same question.
        </div>

        <div className="bc-card">
          <ViewSwitcher activeView={activeView} onSelect={setActiveView} />
          <NPicker n={n} onChange={setN} />

          {activeView === VIEW.TREE    && <TreeView n={n} />}
          {activeView === VIEW.DISTRIB && <DistributionView n={n} />}
          {activeView === VIEW.PASCAL  && <PascalView n={n} />}
        </div>
      </div>
    </>
  );
}