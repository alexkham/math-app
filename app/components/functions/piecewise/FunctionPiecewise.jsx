/**
 * FunctionPiecewise — v1
 *
 * Interactive piecewise builder. Each piece is a function from a small
 * catalog restricted to an interval [from, to] with open or closed
 * endpoints on each side. The core handles drawing and endpoint
 * markers via its per-function `domain` prop — no custom rendering.
 *
 * Pedagogical axis: a piecewise function is well-defined exactly when
 * its pieces tile the intended domain — every x covered by exactly one
 * piece. The tool surfaces overlaps and gaps as red boundary rows, and
 * at internal seams classifies the join as continuous / removable /
 * jump.
 *
 * Built on FunctionVisualizerCorePro. Uses:
 *   - functions[] one entry per piece, each with its own `domain`
 *   - per-piece open/closed endpoints rendered by the core
 *   - `labelMode="none"` — legend in HTML below the graph
 *
 * PROPS (all optional)
 *   initialPreset         : string        — default 'absvalue'
 *   visualizerProps       : object
 *   infoPanelProps        : object
 *   darkMode              : boolean
 *   showPicker            : boolean       — show the pieces editor
 *   showInfoPanel         : boolean
 *   showColorPicker       : boolean       — default true
 *   defaultHighlightColor : string        — default '#3b82f6'
 *   maxWidth              : string|number — default '80vw'
 *
 * RULES OBSERVED:
 *   - Never put $...$ inside **...**.
 *   - Escape &apos; and &quot; with HTML entities in JSX text.
 *   - Modest canvas height; chip strips stay above the fold.
 */

import React, { useState, useMemo } from 'react';
import { VisualizerWithControls } from '../FunctionVisualizerCorePro';
import InfoPanel from '../InfoPanel';


/* ================================================================
   COLORS  (all blue variants)
   ================================================================ */

const COL = {
  f:    '#3b82f6',  // main blue — all pieces
  fp:   '#1e3a8a',  // deep blue — accents
  fpp:  '#60a5fa',  // light blue — secondary
  link: '#94a3b8',  // gray
};


/* ================================================================
   FORMATTING
   ================================================================ */

function fmt(v, d = 3) {
  if (!Number.isFinite(v)) return '\u2014';
  const r = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  return Math.abs(r - Math.round(r)) < 1e-9 ? String(Math.round(r)) : String(r);
}


/* ================================================================
   FUNCTION CATALOG
   ----------------------------------------------------------------
   Each entry is a pre-baked shape; no per-piece parameters in v1.
   Editable coefficients can be added later by extending this map.
   ================================================================ */

export const CATALOG = {
  c0:    { fn: () => 0,            label: '0' },
  c1:    { fn: () => 1,            label: '1' },
  cm1:   { fn: () => -1,           label: '-1' },
  c2:    { fn: () => 2,            label: '2' },
  x:     { fn: x => x,             label: 'x' },
  mx:    { fn: x => -x,            label: '-x' },
  '2x':  { fn: x => 2 * x,         label: '2x' },
  xp1:   { fn: x => x + 1,         label: 'x + 1' },
  xm1:   { fn: x => x - 1,         label: 'x - 1' },
  xp2:   { fn: x => x + 2,         label: 'x + 2' },
  xm2:   { fn: x => x - 2,         label: 'x - 2' },
  x2:    { fn: x => x * x,         label: 'x\u00b2' },
  x3:    { fn: x => x * x * x,     label: 'x\u00b3' },
  sqrt:  { fn: x => (x >= 0 ? Math.sqrt(x) : NaN), label: '\u221ax' },
  abs:   { fn: x => Math.abs(x),   label: '|x|' },
  recip: { fn: x => (x !== 0 ? 1 / x : NaN), label: '1/x' },
  sin:   { fn: x => Math.sin(x),   label: 'sin(x)' },
  cos:   { fn: x => Math.cos(x),   label: 'cos(x)' },
  exp:   { fn: x => Math.exp(x),   label: 'e\u02e3' },
};


/* ================================================================
   PRESETS
   ================================================================ */

export const PRESETS = {
  absvalue: {
    label: 'Absolute value',
    pieces: [
      { expr: 'mx', from: -5, to: 0, fromKind: 'closed', toKind: 'open' },
      { expr: 'x',  from: 0,  to: 5, fromKind: 'closed', toKind: 'closed' },
    ],
  },
  heaviside: {
    label: 'Heaviside step',
    pieces: [
      { expr: 'cm1', from: -5, to: 0, fromKind: 'closed', toKind: 'open' },
      { expr: 'c1',  from: 0,  to: 5, fromKind: 'closed', toKind: 'closed' },
    ],
  },
  sign: {
    label: 'Sign function',
    pieces: [
      { expr: 'cm1', from: -5, to: 0, fromKind: 'closed', toKind: 'open' },
      { expr: 'c0',  from: 0,  to: 0, fromKind: 'closed', toKind: 'closed' },
      { expr: 'c1',  from: 0,  to: 5, fromKind: 'open',   toKind: 'closed' },
    ],
  },
  sawtooth: {
    label: 'Sawtooth (3 pieces)',
    pieces: [
      { expr: 'xp2', from: -5, to: -3, fromKind: 'closed', toKind: 'open' },
      { expr: 'x',   from: -3, to: 1,  fromKind: 'closed', toKind: 'open' },
      { expr: 'xm2', from: 1,  to: 5,  fromKind: 'closed', toKind: 'closed' },
    ],
  },
  hole: {
    label: 'Removable hole',
    pieces: [
      { expr: 'x', from: -5, to: 1, fromKind: 'closed', toKind: 'open' },
      { expr: 'x', from: 1,  to: 5, fromKind: 'open',   toKind: 'closed' },
    ],
  },
  jump: {
    label: 'Jump discontinuity',
    pieces: [
      { expr: 'xp1', from: -5, to: 0, fromKind: 'closed', toKind: 'open' },
      { expr: 'xm1', from: 0,  to: 5, fromKind: 'closed', toKind: 'closed' },
    ],
  },
  empty: { label: 'Empty (start over)', pieces: [] },
};


/* ================================================================
   ANALYSIS
   ================================================================ */

function pieceContains(p, x) {
  if (Math.abs(x - p.from) < 1e-12) return p.fromKind === 'closed';
  if (Math.abs(x - p.to)   < 1e-12) return p.toKind === 'closed';
  return x > p.from && x < p.to;
}

function evalAt(pieces, x) {
  let found = -1;
  for (let i = 0; i < pieces.length; i++) {
    if (pieceContains(pieces[i], x)) {
      if (found >= 0) return { value: null, pieceIndex: -2 };
      found = i;
    }
  }
  if (found < 0) return { value: null, pieceIndex: -1 };
  const cat = CATALOG[pieces[found].expr];
  if (!cat) return { value: NaN, pieceIndex: found };
  try { return { value: cat.fn(x), pieceIndex: found }; }
  catch { return { value: NaN, pieceIndex: found }; }
}

function analyze(pieces) {
  if (pieces.length === 0) {
    return { ok: false, kind: 'empty', title: 'No pieces', tag: 'empty', boundaries: [] };
  }

  // Per-piece validity
  for (let i = 0; i < pieces.length; i++) {
    const p = pieces[i];
    const degenerate = p.to === p.from && p.fromKind === 'closed' && p.toKind === 'closed';
    if (!(p.to > p.from) && !degenerate) {
      return {
        ok: false, kind: 'invalid', title: 'Invalid piece',
        tag: 'invalid', boundaries: [],
        detail: `piece ${i + 1} has invalid domain (from \u2265 to)`,
      };
    }
  }

  // Endpoints grouped by x
  const endpoints = [];
  pieces.forEach((p, i) => {
    endpoints.push({ x: p.from, side: 'from', kind: p.fromKind, pieceIdx: i });
    if (p.to !== p.from) {
      endpoints.push({ x: p.to, side: 'to', kind: p.toKind, pieceIdx: i });
    }
  });
  const grouped = {};
  endpoints.forEach(e => {
    const key = e.x.toFixed(6);
    if (!grouped[key]) grouped[key] = { x: e.x, items: [] };
    grouped[key].items.push(e);
  });

  const boundaries = [];
  Object.values(grouped).sort((a, b) => a.x - b.x).forEach(g => {
    const x = g.x;
    const owners = pieces.map((p, i) => pieceContains(p, x) ? i : -1).filter(i => i >= 0);

    if (owners.length > 1) {
      boundaries.push({
        x, kind: 'overlap',
        detail: `pieces ${owners.map(i => i + 1).join(' & ')} both claim x = ${fmt(x)}`,
      });
      return;
    }
    if (owners.length === 0 && g.items.length >= 2) {
      boundaries.push({
        x, kind: 'gap',
        detail: `pieces ${g.items.map(it => it.pieceIdx + 1).join(' & ')} meet at x = ${fmt(x)} but both are open here`,
      });
      return;
    }
    if (owners.length === 1 && g.items.length >= 2) {
      // Internal boundary — classify continuity
      let leftLim = null, rightLim = null;
      pieces.forEach((p) => {
        const cat = CATALOG[p.expr];
        if (!cat) return;
        if (Math.abs(p.to - x) < 1e-9) {
          try { leftLim = cat.fn(x); } catch {}
        }
        if (Math.abs(p.from - x) < 1e-9) {
          try { rightLim = cat.fn(x); } catch {}
        }
      });
      const ev = evalAt(pieces, x);
      if (leftLim !== null && rightLim !== null) {
        if (Math.abs(leftLim - rightLim) < 1e-9) {
          if (Math.abs(ev.value - leftLim) < 1e-9) {
            boundaries.push({
              x, kind: 'ok',
              detail: `left = right = f(x) = ${fmt(leftLim)}`,
            });
          } else {
            boundaries.push({
              x, kind: 'removable',
              detail: `left = right = ${fmt(leftLim)}, but f(x) = ${fmt(ev.value)}`,
            });
          }
        } else {
          boundaries.push({
            x, kind: 'jump',
            detail: `left = ${fmt(leftLim)}, right = ${fmt(rightLim)}`,
          });
        }
      }
    }
  });

  // Uncovered interior regions in viewport
  const xs = pieces.flatMap(p => [p.from, p.to]).filter(x => x >= -5 && x <= 5);
  xs.push(-5, 5);
  xs.sort((a, b) => a - b);
  for (let i = 0; i < xs.length - 1; i++) {
    const a = xs[i], b = xs[i + 1];
    if (b - a < 1e-9) continue;
    const mid = (a + b) / 2;
    const ev = evalAt(pieces, mid);
    if (ev.pieceIndex === -1) {
      boundaries.push({
        x: (a + b) / 2, kind: 'gap',
        detail: `no piece covers (${fmt(a)}, ${fmt(b)})`,
      });
    }
  }

  const hasOverlap = boundaries.some(b => b.kind === 'overlap');
  const hasGap = boundaries.some(b => b.kind === 'gap');
  const hasJump = boundaries.some(b => b.kind === 'jump');
  const hasRemovable = boundaries.some(b => b.kind === 'removable');

  let ok = !hasOverlap && !hasGap;
  let kind, title, tag;
  if (hasOverlap)       { kind = 'overlap';    title = 'Not well-defined';                tag = 'overlap'; }
  else if (hasGap)      { kind = 'gap';        title = 'Not fully defined';                tag = 'has gaps'; }
  else if (hasJump)     { kind = 'jump';       title = 'Well-defined, with jumps';         tag = 'has jumps'; ok = true; }
  else if (hasRemovable){ kind = 'removable';  title = 'Well-defined, with removable points'; tag = 'has removable'; ok = true; }
  else                  { kind = 'continuous'; title = 'Continuous on viewport';           tag = 'continuous'; ok = true; }

  return { ok, kind, title, tag, boundaries };
}


/* ================================================================
   AUTO Y-BOUNDS
   ================================================================ */

function autoYBounds(pieces, xMin = -5, xMax = 5) {
  let lo = Infinity, hi = -Infinity;
  const N = 400;
  for (let i = 0; i <= N; i++) {
    const x = xMin + (i / N) * (xMax - xMin);
    const ev = evalAt(pieces, x);
    if (ev.pieceIndex >= 0 && Number.isFinite(ev.value)) {
      if (ev.value < lo) lo = ev.value;
      if (ev.value > hi) hi = ev.value;
    }
  }
  if (!Number.isFinite(lo) || !Number.isFinite(hi) || lo === hi) {
    lo = -3; hi = 3;
  }
  lo = Math.max(lo, -10); hi = Math.min(hi, 10);
  lo = Math.min(lo, 0); hi = Math.max(hi, 0);
  const pad = (hi - lo) * 0.18 + 0.5;
  return { yMin: lo - pad, yMax: hi + pad };
}


/* ================================================================
   ID gen
   ================================================================ */

let _nextId = 0;
function makeId() { return 'p' + (++_nextId); }
function clonePreset(key) {
  const src = PRESETS[key] || PRESETS.empty;
  return src.pieces.map(p => ({ ...p, id: makeId() }));
}


/* ================================================================
   MAIN
   ================================================================ */

export default function FunctionPiecewise({
  initialPreset = 'absvalue',
  visualizerProps = {},
  infoPanelProps = {},
  darkMode = false,
  showPicker = true,
  showInfoPanel = true,
  showColorPicker = true,
  defaultHighlightColor = '#3b82f6',
  maxWidth = '80vw',
}) {
  const [pieces, setPieces] = useState(() => clonePreset(initialPreset));
  const [highlightColor, setHighlightColor] = useState(defaultHighlightColor);

  const panelTones = useMemo(() => {
    const hex = (highlightColor || '#3b82f6').replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16) || 0;
    const g = parseInt(hex.slice(2, 4), 16) || 0;
    const b = parseInt(hex.slice(4, 6), 16) || 0;
    const rgba = (al) => `rgba(${r}, ${g}, ${b}, ${al})`;
    const hx = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
    const darken = (f) => `#${hx(r * f)}${hx(g * f)}${hx(b * f)}`;
    return {
      soft:   darkMode ? rgba(0.22) : rgba(0.14),
      border: darkMode ? rgba(0.55) : rgba(0.45),
      text:   darkMode ? rgba(0.95) : darken(0.4),
      main:   highlightColor,
    };
  }, [highlightColor, darkMode]);

  /* Map pieces to core functions[]. */
  const functions = useMemo(() => {
    return pieces.map((p, i) => {
      const cat = CATALOG[p.expr];
      return {
        fn: cat ? cat.fn : (() => NaN),
        color: COL.f,
        label: cat ? `piece ${i + 1}: ${cat.label}` : `piece ${i + 1}`,
        formula: cat ? cat.label : '?',
        visible: true,
        stroke: 2.25,
        domain: { from: p.from, to: p.to, fromKind: p.fromKind, toKind: p.toKind },
      };
    });
  }, [pieces]);

  const verdict = useMemo(() => analyze(pieces), [pieces]);

  const viewport = useMemo(() => {
    const xMin = -5, xMax = 5;
    return { xMin, xMax, ...autoYBounds(pieces, xMin, xMax) };
  }, [pieces]);

  /* ---- Piece editing ---- */
  const updatePiece = (id, patch) => {
    setPieces(prev => prev.map(p => p.id === id ? { ...p, ...patch } : p));
  };
  const removePiece = (id) => {
    setPieces(prev => prev.filter(p => p.id !== id));
  };
  const addPiece = (expr) => {
    setPieces(prev => {
      const last = prev[prev.length - 1];
      const from = last ? last.to : -5;
      const to = Math.min(from + 2, 5);
      return [...prev, {
        id: makeId(), expr,
        from, to,
        fromKind: last && last.toKind === 'closed' ? 'open' : 'closed',
        toKind: 'closed',
      }];
    });
  };
  const loadPreset = (key) => {
    setPieces(clonePreset(key));
  };

  const [addExpr, setAddExpr] = useState('x');

  /* ---- InfoPanel content ---- */
  const explanationContent = useMemo(() => {
    const defText = pieces.length === 0
      ? 'f(x) = (no pieces)'
      : pieces.map(p => {
          const cat = CATALOG[p.expr];
          const lb = p.fromKind === 'closed' ? '[' : '(';
          const rb = p.toKind === 'closed' ? ']' : ')';
          return `${cat ? cat.label : '?'}   for x \u2208 ${lb}${p.from}, ${p.to}${rb}`;
        }).join('  \n');

    const counts = { ok: 0, jump: 0, removable: 0, overlap: 0, gap: 0 };
    verdict.boundaries.forEach(bd => { counts[bd.kind] = (counts[bd.kind] || 0) + 1; });
    const parts = [];
    if (counts.ok) parts.push(`${counts.ok} continuous boundar${counts.ok === 1 ? 'y' : 'ies'}`);
    if (counts.jump) parts.push(`${counts.jump} jump${counts.jump === 1 ? '' : 's'}`);
    if (counts.removable) parts.push(`${counts.removable} removable`);
    if (counts.overlap) parts.push(`${counts.overlap} overlap${counts.overlap === 1 ? '' : 's'}`);
    if (counts.gap) parts.push(`${counts.gap} gap${counts.gap === 1 ? '' : 's'}`);
    const numbers = `${pieces.length} piece${pieces.length === 1 ? '' : 's'}. ` +
      (parts.length ? parts.join(', ') + '.' : 'No internal boundaries.');

    return (
      `## Build a piecewise function\n\n` +
      `Each row in the editor is a piece: a function shape plus the domain on which it applies. The plot draws every piece on its claimed interval, with open or closed endpoint markers honoring your choices.\n\n` +
      `### Current definition\n\n\`\`\`\n${defText}\n\`\`\`\n\n` +
      `### Right now\n\n${numbers}\n\n` +
      `### What to try\n\n` +
      `- Load a preset to see a known shape, then tweak it.\n` +
      `- Open both endpoints of two adjacent pieces at the same x — you&apos;ll get a gap warning.\n` +
      `- Close both endpoints at the same x — overlap warning.\n` +
      `- Use two pieces that don&apos;t agree at a boundary — jump discontinuity.`
    );
  }, [pieces, verdict]);

  const conceptsContent =
    '## What makes a piecewise function well-defined\n\n' +
    'A piecewise function is a single function defined by gluing together several formulas, each on its own interval. Two things have to hold for it to be a function at all:\n\n' +
    '1. **No overlaps.** No $x$ can be claimed by two different pieces — otherwise $f(x)$ wouldn&apos;t have a single value there.\n' +
    '2. **No gaps on the intended domain.** Every $x$ in the function&apos;s domain must be covered by exactly one piece.\n\n' +
    'Open vs closed endpoints are the bookkeeping. At a boundary $x = k$ between piece A (ending) and piece B (starting), exactly one of them should "own" the point $k$. That&apos;s why one side closes (filled circle) and the other opens (empty circle).\n\n' +
    '### Continuity at a boundary\n\n' +
    'Even when the pieces tile cleanly, the function might jump at the seam. At $x = k$:\n\n' +
    '- If $f(k^-) = f(k^+) = f(k)$: **continuous**. The pieces glue smoothly.\n' +
    '- If $f(k^-) = f(k^+) \\ne f(k)$: **removable**. The limit exists; only the assigned value is off.\n' +
    '- If $f(k^-) \\ne f(k^+)$: **jump**. The limit doesn&apos;t exist.\n\n' +
    '### How this tool builds them\n\n' +
    'Each piece is a function (from a small catalog) restricted to an interval $[\\text{from}, \\text{to}]$ with open or closed endpoints. The visualizer&apos;s core supports per-function domains natively, including the open/closed endpoint markers — so the picture is technically faithful, not just suggestive.';

  const infoTabs = useMemo(() => ([
    { key: 'explanation', label: 'Explanation', order: 0, content: explanationContent },
    { key: 'concepts',    label: 'Concepts',    order: 10, content: conceptsContent },
  ]), [explanationContent]);

  /* ---- Styling ---- */
  const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  const monoStack = 'ui-monospace, "SF Mono", Menlo, monospace';
  const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
  const card = {
    background: darkMode ? '#0f172a' : '#fff',
    border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
    borderRadius: 12,
    boxShadow: panelShadow,
  };
  const ctok = {
    ink: darkMode ? '#e2e8f0' : '#0f172a',
    inkSoft: darkMode ? '#cbd5e1' : '#334155',
    muted: darkMode ? '#64748b' : '#94a3b8',
    soft: darkMode ? '#1e293b' : '#f8fafc',
    softer: darkMode ? '#0f172a' : '#f1f5f9',
    border: darkMode ? '#334155' : '#e2e8f0',
    borderSoft: darkMode ? '#1e293b' : '#f1f5f9',
    accentSoft: darkMode ? '#1e293b' : '#eff6ff',
    accentBorder: darkMode ? '#334155' : '#dbeafe',
    accentText: darkMode ? '#dbeafe' : '#1e3a8a',
    okSoft: darkMode ? '#1e3a8a' : '#dfebfe',
    okText: darkMode ? '#dbeafe' : '#1e3a8a',
    badSoft: darkMode ? '#7f1d1d' : '#fee2e2',
    badText: darkMode ? '#fca5a5' : '#991b1b',
    badBorder: darkMode ? '#7f1d1d' : '#fecaca',
  };

  const sectionTitle = {
    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
    color: ctok.muted, fontWeight: 600, margin: '10px 8px 4px',
  };

  const mergedVisualizerProps = {
    defaultWidth: 880,
    defaultHeight: 460,
    ...visualizerProps,
  };

  /* ---- Piece row renderer ---- */
  const renderPieceRow = (p, i) => {
    const cat = CATALOG[p.expr];
    const degenerate = p.to === p.from && p.fromKind === 'closed' && p.toKind === 'closed';
    const invalid = !(p.to > p.from) && !degenerate;
    return (
      <div key={p.id} style={{
        background: invalid ? ctok.badSoft : ctok.accentSoft,
        border: `1px solid ${invalid ? ctok.badBorder : ctok.accentBorder}`,
        borderRadius: 6,
        padding: '8px 10px',
        display: 'flex', flexDirection: 'column', gap: 6,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            width: 22, height: 22, borderRadius: '50%',
            background: COL.f, color: '#fff',
            fontFamily: monoStack, fontSize: 11, fontWeight: 700,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>{i + 1}</span>
          <select
            value={p.expr}
            onChange={e => updatePiece(p.id, { expr: e.target.value })}
            style={{
              flex: 1, padding: '4px 6px',
              border: `1px solid ${ctok.accentBorder}`, borderRadius: 4,
              background: darkMode ? '#0f172a' : '#fff', color: ctok.accentText,
              fontFamily: monoStack, fontSize: 12, cursor: 'pointer',
            }}
          >
            {Object.entries(CATALOG).map(([k, c]) => (
              <option key={k} value={k}>{c.label}</option>
            ))}
          </select>
          <button
            onClick={() => removePiece(p.id)}
            title="Remove"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: ctok.muted, fontSize: 16, padding: '0 4px', lineHeight: 1,
            }}
          >&#x2715;</button>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          fontFamily: monoStack, fontSize: 11, color: ctok.inkSoft,
        }}>
          <button
            onClick={() => updatePiece(p.id, { fromKind: p.fromKind === 'closed' ? 'open' : 'closed' })}
            style={{
              width: 22, height: 22,
              border: `1px solid ${ctok.accentBorder}`,
              background: darkMode ? '#0f172a' : '#fff',
              borderRadius: 4, cursor: 'pointer',
              fontFamily: monoStack, fontSize: 13, fontWeight: 700,
              color: ctok.accentText,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: 0,
            }}
          >{p.fromKind === 'closed' ? '[' : '('}</button>
          <input
            type="number" step={0.5} value={p.from}
            onChange={e => {
              const v = parseFloat(e.target.value);
              if (Number.isFinite(v)) updatePiece(p.id, { from: v });
            }}
            style={{
              width: 50, padding: '3px 5px',
              border: `1px solid ${ctok.accentBorder}`, borderRadius: 4,
              background: darkMode ? '#0f172a' : '#fff', color: ctok.ink,
              fontFamily: monoStack, fontSize: 11,
              fontVariantNumeric: 'tabular-nums', textAlign: 'center',
            }}
          />
          <span style={{ color: ctok.muted }}>,</span>
          <input
            type="number" step={0.5} value={p.to}
            onChange={e => {
              const v = parseFloat(e.target.value);
              if (Number.isFinite(v)) updatePiece(p.id, { to: v });
            }}
            style={{
              width: 50, padding: '3px 5px',
              border: `1px solid ${ctok.accentBorder}`, borderRadius: 4,
              background: darkMode ? '#0f172a' : '#fff', color: ctok.ink,
              fontFamily: monoStack, fontSize: 11,
              fontVariantNumeric: 'tabular-nums', textAlign: 'center',
            }}
          />
          <button
            onClick={() => updatePiece(p.id, { toKind: p.toKind === 'closed' ? 'open' : 'closed' })}
            style={{
              width: 22, height: 22,
              border: `1px solid ${ctok.accentBorder}`,
              background: darkMode ? '#0f172a' : '#fff',
              borderRadius: 4, cursor: 'pointer',
              fontFamily: monoStack, fontSize: 13, fontWeight: 700,
              color: ctok.accentText,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: 0,
            }}
          >{p.toKind === 'closed' ? ']' : ')'}</button>
        </div>
      </div>
    );
  };

  /* ---- Legend ---- */
  const renderLegend = () => (
    <div style={{
      display: 'flex', gap: 14, flexWrap: 'wrap',
      marginTop: 10, paddingTop: 10,
      borderTop: `1px solid ${ctok.borderSoft}`,
      width: '100%', justifyContent: 'center',
    }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: monoStack, fontSize: 12, color: ctok.inkSoft,
      }}>
        <span style={{
          display: 'inline-block', width: 22, height: 0, flexShrink: 0,
          borderTop: `2.5px solid ${COL.f}`,
        }} />
        piece (numbered at left endpoint)
      </span>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: monoStack, fontSize: 12, color: ctok.inkSoft,
      }}>
        <span style={{
          display: 'inline-block', width: 12, height: 12, borderRadius: '50%',
          background: COL.f, border: `2px solid ${COL.f}`, flexShrink: 0,
        }} />
        closed endpoint
      </span>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: monoStack, fontSize: 12, color: ctok.inkSoft,
      }}>
        <span style={{
          display: 'inline-block', width: 12, height: 12, borderRadius: '50%',
          background: darkMode ? '#0f172a' : '#fff', border: `2px solid ${COL.f}`, flexShrink: 0,
        }} />
        open endpoint
      </span>
    </div>
  );

  /* ---- Boundary row ---- */
  const boundaryTagColor = (kind) => {
    if (kind === 'ok')        return { bg: COL.f,    fg: '#fff' };
    if (kind === 'removable') return { bg: COL.fp,   fg: '#fff' };
    if (kind === 'jump')      return { bg: '#ef4444', fg: '#fff' };
    if (kind === 'overlap')   return { bg: '#ef4444', fg: '#fff' };
    return { bg: '#ef4444', fg: '#fff' }; // gap
  };
  const boundaryLabel = (kind) => {
    if (kind === 'ok')        return 'continuous';
    if (kind === 'removable') return 'removable';
    if (kind === 'jump')      return 'jump';
    if (kind === 'overlap')   return 'overlap';
    return 'gap';
  };

  return (
    <div style={{
      width: '100%',
      background: darkMode ? '#020617' : '#f6f7f9',
      minHeight: '100vh',
      fontFamily: fontStack,
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%', maxWidth,
        display: 'flex', gap: 16, padding: '0 16px',
        alignItems: 'flex-start', boxSizing: 'border-box',
      }}>

        {showPicker && (
          <nav style={{ ...card, width: 320, padding: 10, flexShrink: 0 }}>
            <div style={{ ...sectionTitle, margin: '6px 8px 10px' }}>Presets</div>
            <div style={{ padding: '0 4px' }}>
              <select
                onChange={e => { if (e.target.value) { loadPreset(e.target.value); e.target.value = ''; } }}
                defaultValue=""
                style={{
                  width: '100%', padding: '6px 8px',
                  border: `1px solid ${ctok.border}`, borderRadius: 6,
                  background: darkMode ? '#0f172a' : '#fff', color: ctok.ink,
                  fontFamily: 'inherit', fontSize: 12, cursor: 'pointer',
                }}
              >
                <option value="">&mdash; Load preset &mdash;</option>
                {Object.entries(PRESETS).map(([k, p]) => (
                  <option key={k} value={k}>{p.label}</option>
                ))}
              </select>
            </div>

            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${ctok.borderSoft}` }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                margin: '0 4px 8px',
              }}>
                <div style={{
                  fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
                  color: ctok.muted, fontWeight: 600,
                }}>Pieces</div>
                <button
                  onClick={() => loadPreset(initialPreset)}
                  style={{
                    background: darkMode ? '#0f172a' : '#fff',
                    border: `1px solid ${ctok.border}`, color: ctok.inkSoft,
                    padding: '3px 8px', borderRadius: 5,
                    fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                  }}
                >Reset</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 4px' }}>
                {pieces.length === 0 ? (
                  <div style={{
                    padding: 16, textAlign: 'center',
                    color: ctok.muted, fontSize: 12, fontStyle: 'italic',
                  }}>No pieces yet. Use &quot;Add piece&quot; below.</div>
                ) : (
                  pieces.map((p, i) => renderPieceRow(p, i))
                )}
              </div>
            </div>

            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${ctok.borderSoft}` }}>
              <div style={{ ...sectionTitle, margin: '0 4px 4px' }}>Add piece</div>
              <div style={{ display: 'flex', gap: 6, padding: '0 4px' }}>
                <select
                  value={addExpr}
                  onChange={e => setAddExpr(e.target.value)}
                  style={{
                    flex: 1, padding: '6px 8px',
                    border: `1px solid ${ctok.border}`, borderRadius: 6,
                    background: darkMode ? '#0f172a' : '#fff', color: ctok.ink,
                    fontFamily: 'inherit', fontSize: 12, cursor: 'pointer',
                  }}
                >
                  {Object.entries(CATALOG).map(([k, c]) => (
                    <option key={k} value={k}>f(x) = {c.label}</option>
                  ))}
                </select>
                <button
                  onClick={() => addPiece(addExpr)}
                  style={{
                    padding: '4px 10px',
                    background: COL.f, color: '#fff', border: 'none',
                    borderRadius: 6, cursor: 'pointer',
                    fontFamily: 'inherit', fontSize: 12, fontWeight: 600,
                  }}
                >+ Add</button>
              </div>
            </div>

            {showColorPicker && (
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${ctok.borderSoft}` }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  margin: '0 4px 8px',
                }}>
                  <div style={{
                    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: ctok.muted, fontWeight: 600,
                  }}>Appearance</div>
                  <button onClick={() => setHighlightColor(defaultHighlightColor)} style={{
                    background: darkMode ? '#0f172a' : '#fff',
                    border: `1px solid ${ctok.border}`, color: ctok.inkSoft,
                    padding: '3px 8px', borderRadius: 5,
                    fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                  }}>Reset</button>
                </div>
                <label style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 10, padding: '0 4px',
                  fontSize: 12, color: ctok.inkSoft,
                }}>
                  <span>Accent color</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <span style={{
                      fontFamily: monoStack, fontSize: 11,
                      color: ctok.inkSoft,
                      fontVariantNumeric: 'tabular-nums',
                    }}>{highlightColor}</span>
                    <input
                      type="color"
                      value={highlightColor}
                      onChange={e => setHighlightColor(e.target.value)}
                      style={{
                        width: 28, height: 24,
                        border: `1px solid ${ctok.border}`,
                        borderRadius: 4, background: 'none',
                        cursor: 'pointer', padding: 0,
                      }}
                    />
                  </span>
                </label>
              </div>
            )}
          </nav>
        )}

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ ...card, padding: 16 }}>

            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 12, flexWrap: 'wrap', gap: 8,
            }}>
              <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: ctok.ink }}>
                Piecewise builder
              </span>
              <span style={{
                fontFamily: monoStack, fontSize: 11.5,
                padding: '3px 8px', borderRadius: 5,
                color: COL.f, background: ctok.softer,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
                f(x) = piecewise ({pieces.length} piece{pieces.length === 1 ? '' : 's'})
              </span>
            </div>

            <VisualizerWithControls
              functions={functions}
              xMin={viewport.xMin}
              xMax={viewport.xMax}
              yMin={viewport.yMin}
              yMax={viewport.yMax}
              showAxisLabels
              showCrosshair
              showCurveTooltip
              labelMode="none"
              {...mergedVisualizerProps}
            />

            {renderLegend()}

            {/* ---- CENTERPIECE ---- */}
            <div style={{
              marginTop: 12,
              background: panelTones.soft,
              border: `1px solid ${panelTones.border}`,
              borderLeft: `4px solid ${highlightColor}`,
              borderRadius: 8,
              padding: '14px 16px',
            }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                gap: 12, marginBottom: 12, flexWrap: 'wrap',
              }}>
                <span style={{
                  fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: panelTones.text, fontWeight: 700,
                }}>Well-definedness + boundary report</span>
                <span style={{
                  fontFamily: monoStack, fontSize: 13, color: ctok.inkSoft,
                }}>on viewport [-5, 5]</span>
              </div>

              {/* Final verdict */}
              <div style={{
                padding: '12px 14px',
                borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: 12,
                fontSize: 13,
                marginBottom: verdict.boundaries.length ? 10 : 0,
                background: verdict.ok ? ctok.okSoft : ctok.badSoft,
                border: `1px solid ${verdict.ok ? panelTones.border : ctok.badBorder}`,
                color: verdict.ok ? ctok.okText : ctok.badText,
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: '#fff',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 16,
                  color: verdict.ok ? ctok.okText : ctok.badText,
                  flexShrink: 0,
                }}>{verdict.ok ? '\u2713' : '\u2715'}</span>
                <span style={{ flex: 1 }}>
                  <strong style={{ fontSize: 14 }}>{verdict.title}</strong>
                  {verdict.kind === 'overlap'      && ' — two pieces claim the same x; not a function.'}
                  {verdict.kind === 'gap'          && ' — some x has no piece assigned.'}
                  {verdict.kind === 'jump'         && ' — limit at some boundary doesn\u2019t exist.'}
                  {verdict.kind === 'removable'    && ' — limit exists at some boundary but f(c) doesn\u2019t match.'}
                  {verdict.kind === 'continuous'   && ' — pieces tile cleanly and agree at every boundary.'}
                  {verdict.kind === 'empty'        && ' — add at least one piece to define a function.'}
                  {verdict.kind === 'invalid'      && verdict.detail && ` — ${verdict.detail}.`}
                </span>
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  padding: '3px 8px', borderRadius: 4,
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  background: '#fff',
                  color: verdict.ok ? ctok.okText : ctok.badText,
                }}>{verdict.tag}</span>
              </div>

              {/* Boundary rows */}
              {verdict.boundaries.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {verdict.boundaries.map((bd, i) => {
                    const tc = boundaryTagColor(bd.kind);
                    const isBad = bd.kind !== 'ok';
                    return (
                      <div key={i} style={{
                        background: isBad ? ctok.badSoft : (darkMode ? '#0f172a' : '#fff'),
                        border: `1px solid ${isBad ? ctok.badBorder : panelTones.border}`,
                        borderRadius: 6,
                        padding: '8px 12px',
                        display: 'flex', alignItems: 'center', gap: 10,
                        fontFamily: monoStack, fontSize: 12, color: ctok.ink,
                        flexWrap: 'wrap',
                      }}>
                        <span style={{
                          fontSize: 9.5, fontWeight: 700,
                          padding: '2px 7px', borderRadius: 3,
                          textTransform: 'uppercase', letterSpacing: '0.05em',
                          color: tc.fg, background: tc.bg,
                        }}>{boundaryLabel(bd.kind)}</span>
                        <span>at x = {fmt(bd.x, 3)}</span>
                        <span style={{ color: ctok.muted, fontSize: 11 }}>— {bd.detail}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ---- APPLIED CHIPS ---- */}
            <div style={{
              display: 'flex', gap: 6, flexWrap: 'wrap',
              marginTop: 12, padding: '8px 10px',
              background: ctok.soft, border: `1px solid ${ctok.borderSoft}`,
              borderRadius: 8, alignItems: 'center',
            }}>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                color: ctok.muted, fontWeight: 600, marginRight: 4,
              }}>Applied</span>
              <span style={{
                fontFamily: monoStack, fontSize: 11,
                padding: '3px 9px', borderRadius: 5,
                display: 'inline-flex', alignItems: 'center', gap: 5,
                color: ctok.accentText, background: ctok.accentSoft,
                border: `1px solid ${ctok.accentBorder}`, fontWeight: 600,
              }}>
                <span style={{ fontWeight: 600, color: highlightColor }}>pieces</span>
                <span>=</span>
                <span>{pieces.length}</span>
              </span>
              <span style={{ width: 1, height: 16, background: ctok.border, margin: '0 2px' }} />
              <span style={{
                fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.05em',
                color: panelTones.text, fontWeight: 700,
                background: panelTones.soft, padding: '2px 6px', borderRadius: 3,
              }}>domains tile &rArr; well-defined</span>
            </div>
          </div>
        </div>

        {showInfoPanel && (
          <aside style={{ ...card, width: 340, padding: 16, flexShrink: 0 }}>
            <InfoPanel
              tabs={infoTabs}
              darkMode={darkMode}
              {...infoPanelProps}
            />
          </aside>
        )}
      </div>
    </div>
  );
}