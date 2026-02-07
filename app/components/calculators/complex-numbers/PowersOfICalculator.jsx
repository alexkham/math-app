'use client';

import { useState } from 'react';

export default function PowersOfICalculator() {
  const [power, setPower] = useState(323);

  const k = Math.floor(power);
  const q = Math.floor(Math.abs(k) / 4) * (k < 0 ? -1 : 1);
  const r = ((k % 4) + 4) % 4;

  const results = {
    0: { value: '1', power: 'i⁰', explanation: 'Any number to power 0 equals 1' },
    1: { value: 'i', power: 'i¹', explanation: 'i to the first power is i' },
    2: { value: '−1', power: 'i²', explanation: 'By definition: i² = −1' },
    3: { value: '−i', power: 'i³', explanation: 'i³ = i² · i = −1 · i = −i' },
  };

  const examples = [17, 100, 323, 1000, 45, 82];

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        input:focus { border-color: #3b82f6 !important; }
        button:hover { background-color: #e5e7eb !important; border-color: #9ca3af !important; }
      `}</style>

      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Powers of i</h1>
        <span style={styles.headerNote}>Since i⁴ = 1, powers cycle every 4 — just find k mod 4</span>
      </div>

      <div style={styles.mainGrid}>
        
        {/* LEFT COLUMN: Input + Calculation + Formula */}
        <div style={styles.leftCol}>
          
          {/* Input */}
          <div style={styles.inputBox}>
            <div style={styles.inputLabel}>Enter power of i:</div>
            <div style={styles.inputRow}>
              <span style={styles.iSymbol}>i</span>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(e.target.value === '' ? '' : parseInt(e.target.value) || 0)}
                style={styles.input}
              />
              <button style={styles.resetBtn} onClick={() => setPower('')}>
                Reset
              </button>
            </div>
            <div style={styles.examplesRow}>
              <span style={styles.tryLabel}>Try:</span>
              {examples.map((ex) => (
                <button key={ex} style={styles.exBtn} onClick={() => setPower(ex)}>
                  {ex}
                </button>
              ))}
              <button style={styles.randomBtn} onClick={() => setPower(Math.floor(Math.random() * 1001))}>
                Generate random power
              </button>
            </div>
          </div>

          {/* Calculation Steps */}
          {power !== '' && (
          <div style={styles.calcBox}>
            <div style={styles.calcRow}>
              <span style={styles.stepNum}>1</span>
              <span style={styles.stepLabel}>Divide by 4:</span>
              <span style={styles.stepFormula}>
                {k} ÷ 4 = {q} remainder <span style={styles.rBox}>{r}</span>
                <span style={styles.check}> (4×{q}+{r}={4*q+r} ✓)</span>
              </span>
            </div>
            <div style={styles.calcRow}>
              <span style={styles.stepNum}>2</span>
              <span style={styles.stepLabel}>Rewrite:</span>
              <span style={styles.stepFormula}>
                i<sup>{k}</sup> = i<sup>4×{q}+{r}</sup> = i<sup>4×{q}</sup> · i<sup>{r}</sup>
              </span>
            </div>
            <div style={styles.calcRow}>
              <span style={styles.stepNum}>3</span>
              <span style={styles.stepLabel}>Apply i⁴=1:</span>
              <span style={styles.stepFormula}>
                (i<sup>4</sup>)<sup>{q}</sup> · i<sup>{r}</sup> = 1 · i<sup>{r}</sup> = i<sup>{r}</sup>
              </span>
            </div>
            <div style={styles.calcRow}>
              <span style={styles.stepNum}>4</span>
              <span style={styles.stepLabel}>Lookup r={r}:</span>
              <span style={styles.stepFormula}>
                i<sup>{r}</sup> = <strong style={styles.inlineResult}>{results[r].value}</strong>
              </span>
            </div>
            <div style={styles.answerRow}>
              <span style={styles.answerLabel}>Answer:</span>
              <span style={styles.answerFormula}>i<sup>{k}</sup> = <strong style={styles.finalVal}>{results[r].value}</strong></span>
            </div>
          </div>
          )}

          {/* Formula - moved here, right under answer, flattened (reduced padding) */}
          {power !== '' && (
          <div style={styles.formulaBox}>
            <div style={styles.formulaTitle}>Summary Formula</div>
            <div style={styles.formulaMain}>
              iᵏ = i<sup>4q+r</sup> = (i⁴)<sup>q</sup> · iʳ = 1<sup>q</sup> · iʳ = iʳ
            </div>
            <div style={styles.formulaNote}>
              where k = 4q + r and r ∈ {'{'}0, 1, 2, 3{'}'}
            </div>
            <div style={styles.formulaTip}>
              <strong>Quick tip:</strong> Just find k mod 4, then look up the result!
            </div>
          </div>
          )}

          {/* Lookup Table */}
          {power !== '' && (
          <div style={styles.lookupBox}>
            <div style={styles.lookupTitle}>Lookup Table</div>
            <div style={styles.lookupTable}>
              {[0, 1, 2, 3].map((remainder) => (
                <div
                  key={remainder}
                  style={{
                    ...styles.lookupItem,
                    ...(remainder === r ? styles.lookupItemActive : {}),
                  }}
                >
                  <span>r = {remainder}</span>
                  <span style={styles.lookupArrow}>→</span>
                  <span>{results[remainder].value}</span>
                </div>
              ))}
            </div>
          </div>
          )}
        </div>

        {/* RIGHT COLUMN: The 4 Cases */}
        <div style={styles.rightCol}>
          <div style={styles.casesBox}>
            <div style={styles.casesTitle}>The 4 Cases (mod 4)</div>
            {[0, 1, 2, 3].map((rem) => (
              <div key={rem} style={{...styles.caseSlot, ...(r === rem ? styles.caseSlotActive : {})}}>
                <div style={styles.caseMain}>
                  <span style={{...styles.caseR, ...(r === rem ? styles.caseRActive : {})}}>r={rem}</span>
                  <span style={styles.caseArrow}>→</span>
                  <span style={styles.casePower}>{results[rem].power}</span>
                  <span style={styles.caseEq}>=</span>
                  <span style={{...styles.caseVal, ...(r === rem ? styles.caseValActive : {})}}>{results[rem].value}</span>
                </div>
                <div style={{...styles.caseExp, ...(r === rem ? styles.caseExpActive : {})}}>{results[rem].explanation}</div>
              </div>
            ))}
          </div>

          {/* Quick Reference - Accordion */}
          <QuickReferenceAccordion results={results} />
        </div>
      </div>
    </div>
  );
}

function QuickReferenceAccordion({ results }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div style={styles.practiceBox}>
      <div 
        style={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={styles.practiceTitle}>Quick Reference</div>
        <span style={styles.accordionArrow}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
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
              <tr key={p} style={p % 4 === 0 && p > 0 ? styles.cycleBreak : {}}>
                <td style={styles.td}>i<sup>{p}</sup></td>
                <td style={styles.td}>{p} mod 4 = {p % 4}</td>
                <td style={{...styles.td, ...styles.resultCell}}>
                  {results[p % 4].value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#fafafa',
    color: '#1a1a1a',
    fontFamily: "'Inter', sans-serif",
    padding: '24px 32px',
  },
  header: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '20px',
    marginBottom: '24px',
    paddingBottom: '14px',
    borderBottom: '2px solid #e5e7eb',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '700',
    margin: 0,
    color: '#111',
  },
  headerNote: {
    fontSize: '1rem',
    color: '#555',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 320px',
    gap: '24px',
    alignItems: 'start',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  /* Input */
  inputBox: {
    padding: '16px 20px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  },
  inputLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '10px',
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
  },
  examplesRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  label: {
    fontSize: '1rem',
    color: '#444',
    fontWeight: '500',
  },
  iSymbol: {
    fontSize: '1.8rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#3b82f6',
  },
  input: {
    width: '100px',
    fontSize: '1.3rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '600',
    padding: '8px 12px',
    border: '2px solid #d1d5db',
    borderRadius: '6px',
    outline: 'none',
  },
  tryLabel: {
    fontSize: '0.9rem',
    color: '#666',
    marginLeft: '12px',
  },
  exBtn: {
    padding: '6px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '5px',
    backgroundColor: '#f9fafb',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  resetBtn: {
    padding: '8px 16px',
    border: '1px solid #ef4444',
    borderRadius: '5px',
    backgroundColor: '#fef2f2',
    color: '#dc2626',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  randomBtn: {
    padding: '6px 12px',
    border: '1px solid #3b82f6',
    borderRadius: '5px',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },

  /* Calculation */
  calcBox: {
    padding: '18px 20px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  calcRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '12px',
    fontSize: '1rem',
  },
  stepNum: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.85rem',
    fontWeight: '700',
    flexShrink: 0,
  },
  stepLabel: {
    color: '#555',
    minWidth: '110px',
  },
  stepFormula: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1.05rem',
  },
  rBox: {
    display: 'inline-block',
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    padding: '2px 10px',
    borderRadius: '4px',
    fontWeight: '700',
  },
  check: {
    fontSize: '0.85rem',
    color: '#10b981',
  },
  inlineResult: {
    color: '#3b82f6',
    fontSize: '1.1rem',
  },
  answerRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '14px',
    paddingTop: '14px',
    marginTop: '6px',
    borderTop: '2px solid #e5e7eb',
  },
  answerLabel: {
    fontWeight: '600',
    color: '#333',
    fontSize: '1.05rem',
  },
  answerFormula: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1.2rem',
  },
  finalVal: {
    fontSize: '1.6rem',
    color: '#10b981',
  },

  /* Formula Box - flattened (reduced padding), same content and border */
  formulaBox: {
    backgroundColor: '#fffbeb',
    borderRadius: '8px',
    padding: '10px 16px',
    border: '2px solid #f59e0b',
  },
  formulaTitle: {
    fontSize: '0.9rem',
    fontWeight: '700',
    marginBottom: '6px',
    color: '#92400e',
  },
  formulaMain: {
    fontSize: '1.05rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '4px',
  },
  formulaNote: {
    fontSize: '0.85rem',
    color: '#666',
    fontFamily: "'JetBrains Mono', monospace",
    marginBottom: '4px',
  },
  formulaTip: {
    fontSize: '0.85rem',
    color: '#92400e',
  },

  /* Lookup Table */
  lookupBox: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '16px',
    border: '1px solid #d1d5db',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  },
  lookupTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '12px',
  },
  lookupTable: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  lookupItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1rem',
    color: '#666',
  },
  lookupItemActive: {
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    fontWeight: '700',
    border: '2px solid #3b82f6',
  },
  lookupArrow: {
    color: '#999',
  },

  /* Cases */
  casesBox: {
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  },
  casesTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '12px',
  },
  caseSlot: {
    padding: '12px 14px',
    borderRadius: '6px',
    border: '2px solid #e5e7eb',
    marginBottom: '8px',
    backgroundColor: '#fafafa',
    transition: 'all 0.15s',
  },
  caseSlotActive: {
    backgroundColor: '#eff6ff',
    border: '2px solid #3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.15)',
  },
  caseMain: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1rem',
  },
  caseR: {
    color: '#666',
    width: '44px',
    fontWeight: '500',
  },
  caseRActive: {
    color: '#1d4ed8',
    fontWeight: '700',
  },
  caseArrow: {
    color: '#9ca3af',
  },
  casePower: {
    fontWeight: '500',
  },
  caseEq: {
    color: '#9ca3af',
  },
  caseVal: {
    fontWeight: '700',
    fontSize: '1.2rem',
    color: '#444',
  },
  caseValActive: {
    color: '#1d4ed8',
  },
  caseExp: {
    fontSize: '0.85rem',
    color: '#666',
    marginTop: '6px',
    marginLeft: '54px',
  },
  caseExpActive: {
    color: '#444',
  },

  /* Reference Table */
  practiceBox: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid #e5e5e5',
  },
  practiceTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  accordionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '0',
  },
  accordionArrow: {
    fontSize: '0.9rem',
    color: '#666',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
    marginTop: '16px',
  },
  th: {
    textAlign: 'left',
    padding: '10px 12px',
    borderBottom: '2px solid #e5e7eb',
    fontSize: '0.8rem',
    color: '#555',
    fontWeight: '600',
    backgroundColor: '#f9fafb',
  },
  td: {
    padding: '8px 12px',
    borderBottom: '1px solid #f0f0f0',
  },
  cycleBreak: {
    borderTop: '2px solid #3b82f6',
  },
  resultCell: {
    fontWeight: '700',
    color: '#3b82f6',
  },
};