'use client';

// ============================================================================
// THREE-SETS LAWS & COMPLEX IDENTITIES — LHS = RHS visual proofs
// ============================================================================
// Imports VennCoreEnhanced (3-set capable).
// ============================================================================

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { VennCoreEnhanced, ExplanationsPanel } from './VennCoreEnhanced';

// All 8 Boolean cases on 3 variables — used to check that LHS and RHS produce
// the same truth table.
const THREE_SET_CASES = [
  { A: false, B: false, C: false },
  { A: true,  B: false, C: false },
  { A: false, B: true,  C: false },
  { A: false, B: false, C: true  },
  { A: true,  B: true,  C: false },
  { A: true,  B: false, C: true  },
  { A: false, B: true,  C: true  },
  { A: true,  B: true,  C: true  }
];
const predicatesMatch = (p1, p2) =>
  THREE_SET_CASES.every((v) => Boolean(p1(v)) === Boolean(p2(v)));

const CIRCLE_STROKE = '#1e293b';

// --- Mini 3-set layout for the side-by-side diagrams ---
const MINI_CX = 135, MINI_CY = 125, MINI_R = 50, MINI_OFF = 32;
const place3 = (a) => ({
  cx: MINI_CX + MINI_OFF * Math.cos(a),
  cy: MINI_CY - MINI_OFF * Math.sin(a)
});
const MINI_THREE_CIRCLES = {
  A: { ...place3(Math.PI / 2),                   r: MINI_R, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: 1,
       labelPosition: { x: MINI_CX,            y: MINI_CY - MINI_OFF - MINI_R - 8 } },
  B: { ...place3(Math.PI / 2 + 2 * Math.PI / 3), r: MINI_R, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: 1,
       labelPosition: { x: MINI_CX - MINI_OFF - MINI_R + 6,  y: MINI_CY + MINI_OFF + MINI_R - 2 } },
  C: { ...place3(Math.PI / 2 - 2 * Math.PI / 3), r: MINI_R, label: 'C', stroke: CIRCLE_STROKE, strokeWidth: 1,
       labelPosition: { x: MINI_CX + MINI_OFF + MINI_R - 6,  y: MINI_CY + MINI_OFF + MINI_R - 2 } }
};

export const threeSetsLawsData = {
  frame: {
    title: 'Three-Set Laws & Complex Identities',
    subtitle: 'Visual proofs — both diagrams should highlight the same regions'
  },
  defaults: {
    width: 270, height: 240, margin: 6,
    backgroundColor: '#ffffff',
    universe: { label: 'U', labelPosition: { x: 18, y: 20 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 12, labelColor: '#64748b' },
    circles: MINI_THREE_CIRCLES,
    tooltips: {
      'outside': 'Outside all three sets',
      'A':       'Only in A',
      'B':       'Only in B',
      'C':       'Only in C',
      'A∩B':     'In A and B, not in C',
      'A∩C':     'In A and C, not in B',
      'B∩C':     'In B and C, not in A',
      'A∩B∩C':   'In all three sets'
    }
  },
  theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
  identities: [
    // Associative
    { id: 'assoc-u', group: 'Associative', name: 'Associative (Union)', formula: '(A ∪ B) ∪ C = A ∪ (B ∪ C)',
      lhs: { symbol: '(A ∪ B) ∪ C', expr: ({A,B,C}) => (A || B) || C }, rhs: { symbol: 'A ∪ (B ∪ C)', expr: ({A,B,C}) => A || (B || C) },
      definition: 'Grouping does not matter in repeated union.' },
    { id: 'assoc-i', group: 'Associative', name: 'Associative (Intersection)', formula: '(A ∩ B) ∩ C = A ∩ (B ∩ C)',
      lhs: { symbol: '(A ∩ B) ∩ C', expr: ({A,B,C}) => (A && B) && C }, rhs: { symbol: 'A ∩ (B ∩ C)', expr: ({A,B,C}) => A && (B && C) },
      definition: 'Grouping does not matter in repeated intersection.' },
    { id: 'assoc-sd', group: 'Associative', name: 'Associative (Symmetric Difference)', formula: '(A △ B) △ C = A △ (B △ C)',
      lhs: { symbol: '(A △ B) △ C', expr: ({A,B,C}) => (A !== B) !== C }, rhs: { symbol: 'A △ (B △ C)', expr: ({A,B,C}) => A !== (B !== C) },
      definition: 'Symmetric difference is associative; both equal "in an odd number of A, B, C".' },

    // Distributive
    { id: 'dist-i-over-u', group: 'Distributive', name: 'Intersection over Union', formula: 'A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)',
      lhs: { symbol: 'A ∩ (B ∪ C)', expr: ({A,B,C}) => A && (B || C) }, rhs: { symbol: '(A ∩ B) ∪ (A ∩ C)', expr: ({A,B,C}) => (A && B) || (A && C) },
      definition: 'Intersection distributes over union.' },
    { id: 'dist-u-over-i', group: 'Distributive', name: 'Union over Intersection', formula: 'A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)',
      lhs: { symbol: 'A ∪ (B ∩ C)', expr: ({A,B,C}) => A || (B && C) }, rhs: { symbol: '(A ∪ B) ∩ (A ∪ C)', expr: ({A,B,C}) => (A || B) && (A || C) },
      definition: 'Union distributes over intersection.' },

    // De Morgan's (extended)
    { id: 'dm-u-3', group: "De Morgan's Laws", name: 'Complement of Triple Union', formula: "(A ∪ B ∪ C)' = A' ∩ B' ∩ C'",
      lhs: { symbol: "(A ∪ B ∪ C)'", expr: ({A,B,C}) => !(A || B || C) }, rhs: { symbol: "A' ∩ B' ∩ C'", expr: ({A,B,C}) => !A && !B && !C },
      definition: 'The complement of a union of three sets equals the intersection of their complements.' },
    { id: 'dm-i-3', group: "De Morgan's Laws", name: 'Complement of Triple Intersection', formula: "(A ∩ B ∩ C)' = A' ∪ B' ∪ C'",
      lhs: { symbol: "(A ∩ B ∩ C)'", expr: ({A,B,C}) => !(A && B && C) }, rhs: { symbol: "A' ∪ B' ∪ C'", expr: ({A,B,C}) => !A || !B || !C },
      definition: 'The complement of an intersection of three sets equals the union of their complements.' },

    // Difference over union / intersection
    { id: 'diff-over-u', group: 'Difference', name: 'Difference over Union', formula: 'A \\ (B ∪ C) = (A \\ B) ∩ (A \\ C)',
      lhs: { symbol: 'A \\ (B ∪ C)', expr: ({A,B,C}) => A && !(B || C) }, rhs: { symbol: '(A \\ B) ∩ (A \\ C)', expr: ({A,B,C}) => (A && !B) && (A && !C) },
      definition: 'Removing a union equals intersecting the individual differences.' },
    { id: 'diff-over-i', group: 'Difference', name: 'Difference over Intersection', formula: 'A \\ (B ∩ C) = (A \\ B) ∪ (A \\ C)',
      lhs: { symbol: 'A \\ (B ∩ C)', expr: ({A,B,C}) => A && !(B && C) }, rhs: { symbol: '(A \\ B) ∪ (A \\ C)', expr: ({A,B,C}) => (A && !B) || (A && !C) },
      definition: 'Removing an intersection equals unioning the individual differences.' },
    { id: 'union-minus-c', group: 'Difference', name: 'Union minus Set', formula: '(A ∪ B) \\ C = (A \\ C) ∪ (B \\ C)',
      lhs: { symbol: '(A ∪ B) \\ C', expr: ({A,B,C}) => (A || B) && !C }, rhs: { symbol: '(A \\ C) ∪ (B \\ C)', expr: ({A,B,C}) => (A && !C) || (B && !C) },
      definition: 'Difference distributes over union (on the left side).' },
    { id: 'inter-minus-c', group: 'Difference', name: 'Intersection minus Set', formula: '(A ∩ B) \\ C = A ∩ (B \\ C)',
      lhs: { symbol: '(A ∩ B) \\ C', expr: ({A,B,C}) => (A && B) && !C }, rhs: { symbol: 'A ∩ (B \\ C)', expr: ({A,B,C}) => A && (B && !C) },
      definition: 'Subtracting C from A ∩ B is the same as intersecting A with B \\ C.' },
    { id: 'nested-diff', group: 'Difference', name: 'Nested Difference', formula: '(A \\ B) \\ C = A \\ (B ∪ C)',
      lhs: { symbol: '(A \\ B) \\ C', expr: ({A,B,C}) => (A && !B) && !C }, rhs: { symbol: 'A \\ (B ∪ C)', expr: ({A,B,C}) => A && !(B || C) },
      definition: 'Subtracting two sets in sequence equals subtracting their union.' }
  ]
};

const GROUP_ORDER = ['Associative', 'Distributive', "De Morgan's Laws", 'Difference'];

const CSS_ID = 'three-sets-laws-explorer-css';
const CSS = `
.tsl3-tabs-strip {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.tsl3-tabs-strip::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

.tsl3-tab {
  padding: 7px 12px;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  outline: none;
}
.tsl3-tab:hover { color: #334155; }
.tsl3-tab:focus, .tsl3-tab:focus-visible { outline: none; }
.tsl3-tab.active,
.tsl3-tab.active:hover,
.tsl3-tab.active:focus,
.tsl3-tab.active:focus-visible {
  color: #245de1;
  border-bottom-color: #245de1;
}

.tsl3-btn {
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  background-color: #f1f5f9;
  border: 2px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Cambria Math', 'Times New Roman', serif;
  white-space: nowrap;
  outline: none;
}
.tsl3-btn:hover {
  color: #334155;
  background-color: #e2e8f0;
  border-color: transparent;
}
.tsl3-btn:focus, .tsl3-btn:focus-visible {
  outline: none;
  border-color: transparent;
}
.tsl3-btn.active,
.tsl3-btn.active:hover,
.tsl3-btn.active:focus,
.tsl3-btn.active:focus-visible {
  color: #245de1;
  background-color: #e8effd;
  border-color: #245de1;
}
`;

function useInjectCss() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (document.getElementById(CSS_ID)) return;
    const style = document.createElement('style');
    style.id = CSS_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }, []);
}

export const ThreeSetsLawsExplorer = ({ data = threeSetsLawsData, explanations = null }) => {
  useInjectCss();

  const { frame, defaults, theme: defaultTheme, identities } = data;
  const [currentId, setCurrentId] = useState(identities[0]?.id);
  const [themeColor, setThemeColor] = useState(defaultTheme.color);
  const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

  const grouped = useMemo(() => identities.reduce((acc, it) => {
    const g = it.group || 'Other';
    if (!acc[g]) acc[g] = [];
    acc[g].push(it);
    return acc;
  }, {}), [identities]);
  const groups = useMemo(() => {
    const known = GROUP_ORDER.filter((g) => grouped[g]);
    const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
    return [...known, ...extras];
  }, [grouped]);

  const current = identities.find((it) => it.id === currentId) || identities[0];
  const idx = identities.findIndex((it) => it.id === currentId);

  const [activeGroup, setActiveGroup] = useState(current?.group || groups[0]);
  const lastSyncedIdRef = useRef(currentId);
  useEffect(() => {
    if (lastSyncedIdRef.current !== currentId) {
      lastSyncedIdRef.current = currentId;
      if (current?.group && current.group !== activeGroup) setActiveGroup(current.group);
    }
  }, [currentId, current, activeGroup]);

  const { lhsProps, rhsProps, matches } = useMemo(() => {
    if (!current) return { lhsProps: null, rhsProps: null, matches: false };
    const theme = { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill };
    const common = {
      circles: defaults.circles, width: defaults.width, height: defaults.height,
      margin: defaults.margin, backgroundColor: defaults.backgroundColor, universe: defaults.universe,
      tooltips: current?.tooltips || defaults.tooltips || {},
      theme
    };
    return {
      lhsProps: { ...common, predicate: current.lhs.expr },
      rhsProps: { ...common, predicate: current.rhs.expr },
      matches: predicatesMatch(current.lhs.expr, current.rhs.expr)
    };
  }, [current, defaults, defaultTheme, themeColor, themeOpacity]);

  const goPrev = () => setCurrentId(identities[(idx - 1 + identities.length) % identities.length].id);
  const goNext = () => setCurrentId(identities[(idx + 1) % identities.length].id);
  const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

  const activeItems = grouped[activeGroup] || [];

  return (
    <div style={s.container}>
      <div style={s.header}>
        <p style={s.subtitle}>{frame.subtitle}</p>
      </div>

      <div style={s.controls}>
        <div className="tsl3-tabs-strip" style={s.tabsStrip}>
          {groups.map((g) => (
            <button
              key={g}
              className={`tsl3-tab${g === activeGroup ? ' active' : ''}`}
              onClick={() => setActiveGroup(g)}
              title={g}
            >{g}</button>
          ))}
        </div>

        <div style={s.tabBody}>
          <div style={s.formulaRow}>
            {activeItems.map((it) => (
              <button
                key={it.id}
                className={`tsl3-btn${currentId === it.id ? ' active' : ''}`}
                onClick={() => setCurrentId(it.id)}
                title={it.name}
              >{it.formula}</button>
            ))}
          </div>
          <div style={s.dropdownWrap}>
            <span style={s.groupLabel}>Jump to</span>
            <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
              {groups.map((g) => (
                <optgroup key={g} label={g}>
                  {grouped[g].map((it) => <option key={it.id} value={it.id}>{it.formula}</option>)}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div style={s.main}>
        <div style={s.col}>
          <div style={s.panel}>
            <div style={s.panelHead}>
              <span style={s.panelTitle}>Identity</span>
              <span style={s.badge}>{current?.formula}</span>
            </div>
            <div style={s.identityBox}>
              <div style={s.side}>
                <div style={s.sideLabel}>{current?.lhs.symbol}</div>
                {lhsProps && <VennCoreEnhanced {...lhsProps} />}
              </div>
              <div style={s.equals}>=</div>
              <div style={s.side}>
                <div style={s.sideLabel}>{current?.rhs.symbol}</div>
                {rhsProps && <VennCoreEnhanced {...rhsProps} />}
              </div>
            </div>
            <div style={s.matchRow}>
              <span style={{ ...s.matchBadge, ...(matches ? s.matchOk : s.matchFail) }}>
                {matches ? '✓ Regions match — identity holds' : '✗ Regions differ'}
              </span>
            </div>
          </div>

          <div style={s.panel}>
            <div style={s.panelHead}>
              <span style={s.panelTitle}>Theme</span>
              <button style={s.reset} onClick={resetTheme}>Reset</button>
            </div>
            <div style={s.themeBody}>
              <span style={s.tLabel}>Color</span>
              <input type="color" style={s.color} value={themeColor} onChange={(e) => setThemeColor(e.target.value)} />
              <span style={s.tLabel}>Opacity</span>
              <input type="range" min="0" max="1" step="0.05" style={s.range} value={themeOpacity} onChange={(e) => setThemeOpacity(parseFloat(e.target.value))} />
              <span style={s.opVal}>{themeOpacity.toFixed(2)}</span>
            </div>
          </div>

          <div style={s.nav}>
            <button style={s.navBtn} onClick={goPrev}>← Previous</button>
            <span style={s.counter}>{idx + 1} / {identities.length}</span>
            <button style={s.navBtn} onClick={goNext}>Next →</button>
          </div>
        </div>

        <ExplanationsPanel
          current={current}
          explanations={explanations}
          headTitle="Explanation"
          defaultTabLabel="Overview"
          style={s.explanationPanel}
        />
      </div>
    </div>
  );
};

const s = {
  container: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", maxWidth: '1440px', margin: '0 auto', padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' },
  header: { textAlign: 'center', marginBottom: '20px', padding: '16px 20px', backgroundColor: '#245de1', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 20px rgba(36,93,225,0.3)' },
  title: { margin: '0 0 4px 0', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' },
  subtitle: { margin: 0, fontSize: '14px', opacity: 0.9 },
  controls: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '10px 16px 12px 16px', marginBottom: '20px' },
  tabsStrip: { display: 'flex', gap: '2px', borderBottom: '2px solid #e2e8f0', marginBottom: '10px', overflowX: 'auto', overflowY: 'hidden', WebkitOverflowScrolling: 'touch' },
  tabBody: { display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' },
  formulaRow: { display: 'flex', gap: '4px', flexWrap: 'wrap', flex: 1, minWidth: 0 },
  groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
  dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '180px' },
  dropdown: { width: '100%', padding: '7px 10px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
  main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
  col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
  panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
  panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
  panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
  badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  identityBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
  side: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' },
  sideLabel: { fontSize: '14px', fontWeight: '600', color: '#1e293b', fontFamily: "'Cambria Math','Times New Roman',serif" },
  equals: { fontSize: '28px', fontWeight: '700', color: '#64748b' },
  matchRow: { padding: '0 16px 14px 16px', display: 'flex', justifyContent: 'center' },
  matchBadge: { padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  matchOk: { backgroundColor: '#dcfce7', color: '#166534' },
  matchFail: { backgroundColor: '#fee2e2', color: '#991b1b' },
  themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
  tLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
  color: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
  range: { flex: 1, cursor: 'pointer' },
  opVal: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
  reset: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer', outline: 'none' },
  nav: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
  navBtn: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
  counter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
  explanationPanel: { flex: '1 1 350px' }
};

export default ThreeSetsLawsExplorer;