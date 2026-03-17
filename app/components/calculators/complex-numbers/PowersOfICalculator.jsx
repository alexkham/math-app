'use client';

import { useState } from 'react';

export default function PowersOfICalculator() {
  const [power, setPower] = useState(323);
  const [refOpen, setRefOpen] = useState(false);

  const k = Math.floor(power);
  const q = Math.floor(Math.abs(k) / 4) * (k < 0 ? -1 : 1);
  const r = ((k % 4) + 4) % 4;
  const hasInput = power !== '';

  const results = {
    0: { value: '1', label: 'i⁰ = 1', note: 'Any number to power 0 equals 1' },
    1: { value: 'i', label: 'i¹ = i', note: 'i to the first power is i' },
    2: { value: '−1', label: 'i² = −1', note: 'By definition: i² = −1' },
    3: { value: '−i', label: 'i³ = −i', note: 'i³ = i² · i = −1 · i = −i' },
  };

  const examples = [17, 100, 323, 1000, 45, 82];

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { opacity: 1; }
        input:focus { border-color: #4068c8 !important; outline: none; }
        .ex-btn:hover { background: #e8edf6 !important; border-color: #8898c4 !important; }
        .case-cell:hover { background: #eef1f8; }
        .ref-toggle:hover { color: #304090 !important; }
      ` }} />

      {/* Header row */}
      <div style={styles.header}>
        <h1 style={styles.title}>Powers of <span style={styles.titleI}>i</span></h1>
        <span style={styles.subtitle}>i⁴ = 1, so powers cycle every 4. Just find k mod 4.</span>
      </div>

      {/* Input strip */}
      <div style={styles.inputStrip}>
        <span style={styles.iGlyph}>i</span>
        <input
          type="number"
          value={power}
          onChange={(e) => setPower(e.target.value === '' ? '' : parseInt(e.target.value) || 0)}
          style={styles.input}
        />
        <div style={styles.exGroup}>
          {examples.map((ex) => (
            <button key={ex} className="ex-btn" style={styles.exBtn} onClick={() => setPower(ex)}>
              {ex}
            </button>
          ))}
          <button
            className="ex-btn"
            style={{ ...styles.exBtn, ...styles.randBtn }}
            onClick={() => setPower(Math.floor(Math.random() * 1001))}
          >
            Random
          </button>
          <button
            className="ex-btn"
            style={{ ...styles.exBtn, ...styles.clearBtn }}
            onClick={() => setPower('')}
          >
            Clear
          </button>
        </div>
      </div>

      {/* 4 Cases — always visible, horizontal strip */}
      <div style={styles.casesStrip}>
        {[0, 1, 2, 3].map((rem) => {
          const active = hasInput && r === rem;
          return (
            <div
              key={rem}
              className="case-cell"
              style={{
                ...styles.caseCell,
                ...(active ? styles.caseCellActive : {}),
              }}
            >
              <div style={styles.caseRem}>r = {rem}</div>
              <div style={{ ...styles.caseValue, ...(active ? styles.caseValueActive : {}) }}>
                {results[rem].value}
              </div>
              <div style={styles.caseLabel}>{results[rem].label}</div>
            </div>
          );
        })}
      </div>

      {/* Cycle Diagram — between cases and calc steps */}
      {hasInput && <CycleDiagram activeR={r} k={k} results={results} />}

      {/* Calculation steps + explanation */}
      {hasInput && (
        <div style={styles.calcRow}>
          {/* Left: steps + answer */}
          <div style={styles.calcBox}>
            <div style={styles.stepsGrid}>
              <Step n="1" label="Divide by 4">
                {k} ÷ 4 = {q} remainder{' '}
                <span style={styles.rChip}>{r}</span>
                <span style={styles.checkMark}> (4×{q}+{r}={4 * q + r} ✓)</span>
              </Step>
              <Step n="2" label="Rewrite">
                i<sup>{k}</sup> = i<sup>4×{q}+{r}</sup> = i<sup>4×{q}</sup> · i<sup>{r}</sup>
              </Step>
              <Step n="3" label="Apply i⁴=1">
                (i⁴)<sup>{q}</sup> · i<sup>{r}</sup> = 1 · i<sup>{r}</sup> = i<sup>{r}</sup>
              </Step>
              <Step n="4" label={`Lookup r=${r}`}>
                i<sup>{r}</sup> ={' '}
                <strong style={styles.stepResult}>{results[r].value}</strong>
              </Step>
            </div>

            {/* Answer bar */}
            <div style={styles.answerBar}>
              <span style={styles.answerText}>
                i<sup>{k}</sup> ={' '}
                <strong style={styles.answerValue}>{results[r].value}</strong>
              </span>
              <span style={styles.formulaInline}>
                iᵏ = i<sup>r</sup> where r = k mod 4
              </span>
            </div>
          </div>

          {/* Right: explanation */}
          <div style={styles.explainBox}>
            <div style={styles.explainTitle}>Explanation</div>
            {[0, 1, 2, 3].map((rem) => (
              <div
                key={rem}
                style={{
                  ...styles.explainItem,
                  ...(r === rem ? styles.explainItemActive : {}),
                }}
              >
                <span style={{
                  ...styles.explainLabel,
                  ...(r === rem ? styles.explainLabelActive : {}),
                }}>
                  {results[rem].label}
                </span>
                <span style={styles.explainNote}>{results[rem].note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Reference accordion */}
      <div style={styles.refSection}>
        <button
          className="ref-toggle"
          style={styles.refToggle}
          onClick={() => setRefOpen(!refOpen)}
        >
          Quick Reference (i⁰ – i¹⁰⁰) {refOpen ? '▲' : '▼'}
        </button>
        {refOpen && (
          <div style={styles.refTableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Power</th>
                  <th style={styles.th}>k mod 4</th>
                  <th style={styles.th}>Result</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 101 }, (_, p) => (
                  <tr key={p} style={p % 4 === 0 && p > 0 ? styles.cycleRow : {}}>
                    <td style={styles.td}>i<sup>{p}</sup></td>
                    <td style={styles.td}>{p % 4}</td>
                    <td style={{ ...styles.td, ...styles.tdResult }}>{results[p % 4].value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================
   Cycle Diagram — inline SVG, dynamic highlight
   ============================================ */
function CycleDiagram({ activeR, k, results }) {
  // Node positions: top(r=1), right(r=2), bottom(r=3), left(r=0)
  // Mapping remainder to clock positions to match the original SVG layout
  const cx = 170, cy = 150, radius = 80;
  const nodes = [
    { r: 1, x: cx, y: cy - radius, powerLabel: '1', valueLabel: 'i' },
    { r: 2, x: cx + radius, y: cy, powerLabel: '2', valueLabel: '−1' },
    { r: 3, x: cx, y: cy + radius, powerLabel: '3', valueLabel: '−i' },
    { r: 0, x: cx - radius, y: cy, powerLabel: '4', valueLabel: '1' },
  ];

  const nodeR = 28;

  // Arc arrows between adjacent nodes (clockwise)
  const arcs = [
    // top → right
    `M ${cx + 30},${cy - radius + 18} A ${radius},${radius} 0 0,1 ${cx + radius - 18},${cy - 30}`,
    // right → bottom
    `M ${cx + radius - 18},${cy + 30} A ${radius},${radius} 0 0,1 ${cx + 30},${cy + radius - 18}`,
    // bottom → left
    `M ${cx - 30},${cy + radius - 18} A ${radius},${radius} 0 0,1 ${cx - radius + 18},${cy + 30}`,
    // left → top
    `M ${cx - radius + 18},${cy - 30} A ${radius},${radius} 0 0,1 ${cx - 30},${cy - radius + 18}`,
  ];

  return (
    <div style={styles.diagramWrap}>
      <svg
        viewBox="0 0 440 300"
        style={{ width: '100%', maxWidth: '440px', height: 'auto', display: 'block', margin: '0 auto' }}
        xmlns="http://www.w3.org/2000/svg"
        fontFamily="'DM Sans', 'Segoe UI', sans-serif"
      >
        <defs>
          <marker id="cyArrow" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
            <path d="M0,0 L7,2.5 L0,5" fill="#4098d8" />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dashed track */}
        <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#c8dce8" strokeWidth="1.5" strokeDasharray="5,3" />

        {/* Center label */}
        <text x={cx} y={cy - 4} textAnchor="middle" fontSize="11" fontWeight="600" fill="#6080a0">cycle of</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fontSize="13" fontWeight="700" fill="#6080a0">4</text>

        {/* Arc arrows */}
        {arcs.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#4098d8" strokeWidth="1.5" markerEnd="url(#cyArrow)" />
        ))}

        {/* Nodes */}
        {nodes.map((node) => {
          const active = node.r === activeR;
          const fillColor = (node.r === 1 || node.r === 3) ? '#f89838' : '#304090';
          return (
            <g key={node.r} filter={active ? 'url(#glow)' : undefined}>
              {/* Active ring */}
              {active && (
                <circle cx={node.x} cy={node.y} r={nodeR + 5} fill="none" stroke={fillColor} strokeWidth="2.5" opacity="0.5" />
              )}
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeR}
                fill={fillColor}
                opacity={active ? 1 : 0.4}
              />
              {/* Power label */}
              <text x={node.x} y={node.y - 5} textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" opacity={active ? 1 : 0.8}>
                i
                <tspan fontSize="7" baselineShift="super">{node.powerLabel}</tspan>
              </text>
              {/* Divider */}
              <line x1={node.x - 15} y1={node.y + 2} x2={node.x + 15} y2={node.y + 2} stroke="#fff" strokeWidth="0.7" opacity="0.35" />
              {/* Value */}
              <text x={node.x} y={node.y + 16} textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" opacity={active ? 1 : 0.8}>
                {node.valueLabel}
              </text>
            </g>
          );
        })}

        {/* Right side: shortcut box */}
        <rect x="280" y="30" width="150" height="195" rx="10" fill="#fff" stroke="#c8dce8" strokeWidth="1" />
        <text x="355" y="54" textAnchor="middle" fontSize="12" fontWeight="700" fill="#102050">Shortcut</text>
        <line x1="300" y1="62" x2="410" y2="62" stroke="#c8dce8" strokeWidth="0.8" />
        <text x="355" y="80" textAnchor="middle" fontSize="10" fill="#6080a0">Divide exponent by 4</text>
        <text x="355" y="94" textAnchor="middle" fontSize="10" fill="#6080a0">and use the remainder:</text>

        {/* Remainder rows */}
        {[
          { rem: 1, val: 'i', color: '#f89838' },
          { rem: 2, val: '−1', color: '#304090' },
          { rem: 3, val: '−i', color: '#f89838' },
          { rem: 0, val: '1', color: '#304090' },
        ].map((item, i) => {
          const rowActive = item.rem === activeR;
          const yPos = 118 + i * 24;
          return (
            <g key={item.rem}>
              {rowActive && (
                <rect x="294" y={yPos - 12} width="122" height="20" rx="4" fill="#e0ecff" />
              )}
              <text x="310" y={yPos} fontSize="11" fontWeight={rowActive ? '700' : '500'} fill={rowActive ? '#102050' : '#5a6480'}>
                r = {item.rem}
              </text>
              <text x="380" y={yPos} fontSize="12" fontWeight="700" fill={item.color}>
                → {item.val}
              </text>
            </g>
          );
        })}

        <line x1="300" y1="206" x2="410" y2="206" stroke="#c8dce8" strokeWidth="0.8" />
        <text x="355" y="222" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#6080a0">r = n mod 4</text>

        {/* Example bar at bottom */}
        <rect x="50" y="265" width="340" height="26" rx="6" fill="#fff" stroke="#c8dce8" strokeWidth="0.8" />
        <text x="220" y="282" textAnchor="middle" fontSize="11" fill="#6080a0">
          <tspan fontWeight="600" fill="#102050">i</tspan>
          <tspan fontSize="8" baselineShift="super" fontWeight="600" fill="#102050">{k}</tspan>
          <tspan>  →  {k} mod 4 = </tspan>
          <tspan fontWeight="700" fill="#102050">{activeR}</tspan>
          <tspan>  →  </tspan>
          <tspan fontWeight="700" fill={(activeR === 1 || activeR === 3) ? '#f89838' : '#304090'}>{results[activeR].value}</tspan>
        </text>
      </svg>
    </div>
  );
}

function Step({ n, label, children }) {
  return (
    <div style={styles.step}>
      <span style={styles.stepDot}>{n}</span>
      <span style={styles.stepLabel}>{label}:</span>
      <span style={styles.stepFormula}>{children}</span>
    </div>
  );
}

const palette = {
  navy: '#304090',
  blue: '#4098d8',
  orange: '#f89838',
  bg: '#f0f8f8',
  white: '#ffffff',
  text: '#1a2440',
  muted: '#5a6480',
  border: '#c8d0e0',
  lightBg: '#e8edf6',
  green: '#1a8060',
};

const mono = "'JetBrains Mono', monospace";
const sans = "'DM Sans', sans-serif";

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: palette.bg,
    color: palette.text,
    fontFamily: sans,
    padding: '20px 28px',
    maxWidth: '840px',
    margin: '0 auto',
  },

  /* Header */
  header: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '14px',
    marginBottom: '16px',
    borderBottom: `2px solid ${palette.navy}`,
    paddingBottom: '10px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: 0,
    color: palette.navy,
    fontFamily: sans,
  },
  titleI: {
    fontStyle: 'italic',
    color: palette.blue,
  },
  subtitle: {
    fontSize: '0.9rem',
    color: palette.muted,
  },

  /* Input strip */
  inputStrip: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    padding: '10px 14px',
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    marginBottom: '12px',
  },
  iGlyph: {
    fontSize: '1.6rem',
    fontFamily: mono,
    fontWeight: '700',
    fontStyle: 'italic',
    color: palette.navy,
  },
  input: {
    width: '90px',
    fontSize: '1.2rem',
    fontFamily: mono,
    fontWeight: '600',
    padding: '6px 10px',
    border: `2px solid ${palette.border}`,
    borderRadius: '5px',
    color: palette.navy,
    backgroundColor: palette.bg,
  },
  exGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    flexWrap: 'wrap',
    marginLeft: '6px',
  },
  exBtn: {
    padding: '4px 10px',
    border: `1px solid ${palette.border}`,
    borderRadius: '4px',
    backgroundColor: palette.white,
    fontFamily: mono,
    fontSize: '0.82rem',
    cursor: 'pointer',
    color: palette.text,
    transition: 'all 0.12s',
  },
  randBtn: {
    color: palette.navy,
    borderColor: palette.navy,
    fontFamily: sans,
    fontWeight: '600',
  },
  clearBtn: {
    color: '#b03030',
    borderColor: '#d08080',
    fontFamily: sans,
    fontWeight: '600',
  },

  /* Cases strip */
  casesStrip: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
    marginBottom: '12px',
  },
  caseCell: {
    textAlign: 'center',
    padding: '8px 6px',
    borderRadius: '8px',
    border: `1px solid ${palette.border}`,
    backgroundColor: palette.white,
    transition: 'all 0.15s',
  },
  caseCellActive: {
    backgroundColor: '#e0ecff',
    borderColor: palette.navy,
    boxShadow: `0 0 0 2px ${palette.navy}30`,
  },
  caseRem: {
    fontSize: '0.72rem',
    color: palette.muted,
    fontFamily: mono,
    marginBottom: '2px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  caseValue: {
    fontSize: '1.4rem',
    fontWeight: '700',
    fontFamily: mono,
    color: palette.text,
    lineHeight: 1.2,
  },
  caseValueActive: {
    color: palette.navy,
  },
  caseLabel: {
    fontSize: '0.72rem',
    color: palette.muted,
    fontFamily: mono,
    marginTop: '2px',
  },

  /* Diagram wrapper */
  diagramWrap: {
    marginBottom: '12px',
    padding: '8px',
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
  },

  /* Calc row: steps left, explanation right */
  calcRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 220px',
    gap: '10px',
    marginBottom: '12px',
    alignItems: 'start',
  },
  calcBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 16px',
  },
  stepsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  step: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    fontSize: '0.92rem',
    lineHeight: 1.5,
  },
  stepDot: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: palette.navy,
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.72rem',
    fontWeight: '700',
    flexShrink: 0,
  },
  stepLabel: {
    color: palette.muted,
    minWidth: '90px',
    fontSize: '0.85rem',
  },
  stepFormula: {
    fontFamily: mono,
    fontSize: '0.92rem',
  },
  rChip: {
    display: 'inline-block',
    backgroundColor: '#dce6ff',
    color: palette.navy,
    padding: '1px 8px',
    borderRadius: '3px',
    fontWeight: '700',
  },
  checkMark: {
    fontSize: '0.78rem',
    color: palette.green,
  },
  stepResult: {
    color: palette.navy,
    fontSize: '1rem',
  },

  /* Answer bar */
  answerBar: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginTop: '10px',
    paddingTop: '10px',
    borderTop: `2px solid ${palette.navy}20`,
  },
  answerText: {
    fontFamily: mono,
    fontSize: '1.1rem',
  },
  answerValue: {
    fontSize: '1.5rem',
    color: palette.green,
  },
  formulaInline: {
    fontFamily: mono,
    fontSize: '0.78rem',
    color: palette.muted,
    backgroundColor: `${palette.orange}18`,
    padding: '3px 10px',
    borderRadius: '4px',
    border: `1px solid ${palette.orange}40`,
  },

  /* Explanation box */
  explainBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '10px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  explainTitle: {
    fontSize: '0.78rem',
    fontWeight: '700',
    color: palette.navy,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '2px',
  },
  explainItem: {
    padding: '5px 8px',
    borderRadius: '5px',
    borderLeft: '3px solid transparent',
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
  },
  explainItemActive: {
    backgroundColor: '#e0ecff',
    borderLeftColor: palette.navy,
  },
  explainLabel: {
    fontFamily: mono,
    fontSize: '0.82rem',
    fontWeight: '600',
    color: palette.muted,
  },
  explainLabelActive: {
    color: palette.navy,
  },
  explainNote: {
    fontSize: '0.78rem',
    color: palette.muted,
    lineHeight: 1.3,
  },

  /* Reference section */
  refSection: {
    marginTop: '4px',
  },
  refToggle: {
    background: 'none',
    border: 'none',
    fontFamily: sans,
    fontSize: '0.85rem',
    fontWeight: '600',
    color: palette.muted,
    cursor: 'pointer',
    padding: '6px 0',
    transition: 'color 0.12s',
  },
  refTableWrap: {
    maxHeight: '320px',
    overflowY: 'auto',
    marginTop: '6px',
    border: `1px solid ${palette.border}`,
    borderRadius: '6px',
    backgroundColor: palette.white,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: mono,
    fontSize: '0.8rem',
  },
  th: {
    textAlign: 'left',
    padding: '6px 10px',
    borderBottom: `2px solid ${palette.border}`,
    fontSize: '0.72rem',
    color: palette.muted,
    fontWeight: '600',
    backgroundColor: palette.bg,
    position: 'sticky',
    top: 0,
  },
  td: {
    padding: '4px 10px',
    borderBottom: `1px solid ${palette.bg}`,
  },
  cycleRow: {
    borderTop: `2px solid ${palette.navy}30`,
  },
  tdResult: {
    fontWeight: '700',
    color: palette.navy,
  },
};