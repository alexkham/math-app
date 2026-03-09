import React, { useState } from 'react';

const DivisibilityTiles = () => {
  const [number, setNumber] = useState(23);
  const [divisor, setDivisor] = useState(5);
  const [grouped, setGrouped] = useState(false);

  const groupCount = Math.floor(number / divisor);
  const remainder = number % divisor;
  const isDivisible = remainder === 0;

  const handleNumberChange = (e) => {
    const val = parseInt(e.target.value) || 1;
    setNumber(Math.min(100, Math.max(1, val)));
    setGrouped(false);
  };

  const handleDivisorChange = (d) => {
    setDivisor(d);
    setGrouped(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.iconWrap}>
            <span style={styles.icon}>÷</span>
          </div>
          {/* <h1 style={styles.title}>Divisibility Tiles</h1> */}
          <p style={styles.subtitle}>See how numbers group — and what's left over</p>
        </header>

        {/* Main Content */}
        <div style={styles.main}>
          {/* Left Column - Controls & Tiles */}
          <div style={styles.leftCol}>
            {/* Controls Card */}
            <div style={styles.card}>
              <div style={styles.controlsRow}>
                {/* Number Input */}
                <div style={styles.controlGroup}>
                  <label style={styles.label}>Number</label>
                  <input
                    type="number"
                    value={number}
                    onChange={handleNumberChange}
                    min="1"
                    max="100"
                    style={styles.input}
                  />
                </div>

                {/* Divisor Buttons */}
                <div style={styles.controlGroup}>
                  <label style={styles.label}>Divisor</label>
                  <div style={styles.divisorBtns}>
                    {[2, 3, 4, 5, 6, 7, 8, 9].map(d => (
                      <button
                        key={d}
                        onClick={() => handleDivisorChange(d)}
                        style={{
                          ...styles.divisorBtn,
                          ...(divisor === d ? styles.divisorBtnActive : {})
                        }}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setGrouped(!grouped)}
                  style={styles.actionBtn}
                >
                  {grouped ? 'Reset' : 'Group'}
                </button>
              </div>
            </div>

            {/* Result Banner */}
            <div style={styles.resultBanner}>
              {grouped ? (
                <>
                  <span style={styles.resultNum}>{groupCount}</span>
                  <span style={styles.resultText}> group{groupCount !== 1 ? 's' : ''} of </span>
                  <span style={styles.resultNum}>{divisor}</span>
                  {remainder > 0 && (
                    <>
                      <span style={styles.resultText}> + </span>
                      <span style={styles.resultLeftover}>{remainder}</span>
                      <span style={styles.resultText}> leftover</span>
                    </>
                  )}
                  {isDivisible && (
                    <span style={styles.resultSuccess}> — Divisible ✓</span>
                  )}
                </>
              ) : (
                <>
                  <span style={styles.resultNum}>{number}</span>
                  <span style={styles.resultText}> tile{number !== 1 ? 's' : ''}</span>
                </>
              )}
            </div>

            {/* Tiles Area */}
            <div style={styles.tilesCard}>
              {!grouped ? (
                <div style={styles.tilesGrid}>
                  {Array.from({ length: number }).map((_, i) => (
                    <div key={i} style={styles.tile} />
                  ))}
                </div>
              ) : (
                <div style={styles.groupsContainer}>
                  {Array.from({ length: groupCount }).map((_, groupIdx) => (
                    <div key={groupIdx} style={styles.groupWrapper}>
                      <div style={styles.group}>
                        {Array.from({ length: divisor }).map((_, tileIdx) => (
                          <div key={tileIdx} style={styles.groupedTile} />
                        ))}
                      </div>
                      <span style={styles.groupLabel}>{divisor}</span>
                    </div>
                  ))}

                  {remainder > 0 && (
                    <div style={styles.groupWrapper}>
                      <div style={styles.leftoverGroup}>
                        {Array.from({ length: remainder }).map((_, i) => (
                          <div key={i} style={styles.leftoverTile} />
                        ))}
                      </div>
                      <span style={styles.leftoverLabel}>+{remainder}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Explanation */}
          <div style={styles.rightCol}>
            <h2 style={styles.sectionTitle}>Explanation</h2>

            {!grouped ? (
              <div style={styles.explanationContent}>
                <div style={styles.stepCard}>
                  <div style={styles.stepHeader}>
                    <div style={styles.stepNum}>1</div>
                    <div style={styles.stepRule}>Starting Point</div>
                  </div>
                  <p style={styles.stepDesc}>
                    You have <strong>{number}</strong> tiles arranged in a grid.
                  </p>
                </div>

                <div style={styles.stepCard}>
                  <div style={styles.stepHeader}>
                    <div style={styles.stepNum}>2</div>
                    <div style={styles.stepRule}>The Question</div>
                  </div>
                  <p style={styles.stepDesc}>
                    Can we divide {number} tiles into equal groups of <strong>{divisor}</strong>?
                  </p>
                </div>

                <div style={styles.promptCard}>
                  <p>Press <strong>Group</strong> to find out!</p>
                </div>
              </div>
            ) : (
              <div style={styles.explanationContent}>
                <div style={styles.stepCard}>
                  <div style={styles.stepHeader}>
                    <div style={styles.stepNum}>1</div>
                    <div style={styles.stepRule}>Division</div>
                  </div>
                  <p style={styles.stepDesc}>
                    We divide <strong>{number}</strong> by <strong>{divisor}</strong>:
                  </p>
                  <div style={styles.mathBox}>
                    {number} ÷ {divisor} = {groupCount}{remainder > 0 ? ` remainder ${remainder}` : ''}
                  </div>
                </div>

                <div style={styles.stepCard}>
                  <div style={styles.stepHeader}>
                    <div style={styles.stepNum}>2</div>
                    <div style={styles.stepRule}>Grouping Result</div>
                  </div>
                  <p style={styles.stepDesc}>
                    We can make <strong>{groupCount}</strong> complete group{groupCount !== 1 ? 's' : ''}, 
                    each containing <strong>{divisor}</strong> tiles.
                  </p>
                  <div style={styles.mathBox}>
                    {groupCount} × {divisor} = {groupCount * divisor}
                  </div>
                </div>

                {remainder > 0 && (
                  <div style={styles.stepCard}>
                    <div style={styles.stepHeader}>
                      <div style={styles.stepNumYellow}>{3}</div>
                      <div style={styles.stepRuleYellow}>Leftover</div>
                    </div>
                    <p style={styles.stepDesc}>
                      After making {groupCount} groups, we have <strong style={{ color: '#f59e0b' }}>{remainder}</strong> tile{remainder !== 1 ? 's' : ''} left over.
                    </p>
                    <div style={styles.mathBox}>
                      {number} − {groupCount * divisor} = {remainder}
                    </div>
                  </div>
                )}

                <div style={isDivisible ? styles.conclusionSuccess : styles.conclusionFail}>
                  <div style={styles.conclusionIcon}>
                    {isDivisible ? '✓' : '✗'}
                  </div>
                  <div>
                    <div style={styles.conclusionTitle}>
                      {isDivisible ? 'Divisible!' : 'Not Divisible'}
                    </div>
                    <div style={styles.conclusionText}>
                      {isDivisible 
                        ? `${number} divides evenly into ${groupCount} groups of ${divisor}.`
                        : `${number} cannot be divided evenly by ${divisor}. There ${remainder === 1 ? 'is' : 'are'} always ${remainder} left over.`
                      }
                    </div>
                  </div>
                </div>

                {!isDivisible && (
                  <div style={styles.hintCard}>
                    <div style={styles.hintTitle}>💡 What would work?</div>
                    <p style={styles.hintText}>
                      To be divisible by {divisor}, try <strong>{number - remainder}</strong> (subtract {remainder}) 
                      or <strong>{number + (divisor - remainder)}</strong> (add {divisor - remainder}).
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1e3a5f',
    padding: '30px 20px',
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  iconWrap: {
    width: '50px',
    height: '50px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '14px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '12px',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
  },
  icon: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: '700',
  },
  title: {
    fontSize: '1.7rem',
    fontWeight: '700',
    color: '#1e3a5f',
    margin: '0 0 6px 0',
  },
  subtitle: {
    fontSize: '0.95rem',
    color: '#64748b',
    margin: 0,
  },
  main: {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
  },
  leftCol: {
    flex: '1 1 55%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  rightCol: {
    flex: '1 1 45%',
    background: '#fff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    minHeight: '400px',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  },
  controlsRow: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '20px',
    flexWrap: 'wrap',
  },
  controlGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#64748b',
    fontWeight: '600',
  },
  input: {
    width: '80px',
    background: '#f8fafc',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    padding: '10px 14px',
    color: '#1e3a5f',
    fontSize: '1.1rem',
    fontWeight: '600',
    textAlign: 'center',
    outline: 'none',
  },
  divisorBtns: {
    display: 'flex',
    gap: '4px',
  },
  divisorBtn: {
    width: '36px',
    height: '40px',
    background: '#f8fafc',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    color: '#64748b',
    fontSize: '0.95rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.15s',
    fontFamily: 'inherit',
  },
  divisorBtnActive: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderColor: '#3b82f6',
    color: '#fff',
    fontWeight: '700',
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
  },
  actionBtn: {
    marginLeft: 'auto',
    padding: '12px 28px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
    fontFamily: 'inherit',
  },
  resultBanner: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '12px',
    padding: '14px 20px',
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#fff',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.25)',
  },
  resultNum: {
    fontWeight: '700',
    fontSize: '1.2rem',
  },
  resultText: {
    opacity: 0.9,
  },
  resultLeftover: {
    fontWeight: '700',
    fontSize: '1.2rem',
    color: '#fbbf24',
  },
  resultSuccess: {
    color: '#4ade80',
    fontWeight: '600',
  },
  tilesCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    minHeight: '200px',
    maxHeight: '350px',
    overflowY: 'auto',
  },
  tilesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '8px',
    justifyItems: 'center',
  },
  tile: {
    width: '32px',
    height: '32px',
    background: 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  groupsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
  },
  groupWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
  },
  group: {
    display: 'flex',
    gap: '4px',
    padding: '8px',
    background: '#eff6ff',
    border: '2px solid #bfdbfe',
    borderRadius: '10px',
  },
  groupedTile: {
    width: '24px',
    height: '24px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '4px',
  },
  groupLabel: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#3b82f6',
  },
  leftoverGroup: {
    display: 'flex',
    gap: '4px',
    padding: '8px',
    background: '#fef9c3',
    border: '2px solid #fbbf24',
    borderRadius: '10px',
  },
  leftoverTile: {
    width: '24px',
    height: '24px',
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    borderRadius: '4px',
    boxShadow: '0 0 8px rgba(251, 191, 36, 0.5)',
  },
  leftoverLabel: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#f59e0b',
  },
  sectionTitle: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#64748b',
    marginBottom: '16px',
    fontWeight: '600',
  },
  explanationContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  stepCard: {
    background: '#f8fafc',
    borderRadius: '10px',
    padding: '14px 16px',
    borderLeft: '3px solid #3b82f6',
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
  },
  stepNum: {
    width: '24px',
    height: '24px',
    background: '#3b82f6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '0.75rem',
    fontWeight: '700',
  },
  stepNumYellow: {
    width: '24px',
    height: '24px',
    background: '#f59e0b',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '0.75rem',
    fontWeight: '700',
  },
  stepRule: {
    fontWeight: '600',
    fontSize: '0.95rem',
    color: '#1e3a5f',
  },
  stepRuleYellow: {
    fontWeight: '600',
    fontSize: '0.95rem',
    color: '#b45309',
  },
  stepDesc: {
    fontSize: '0.9rem',
    color: '#475569',
    margin: 0,
    lineHeight: '1.5',
  },
  mathBox: {
    marginTop: '10px',
    padding: '10px 14px',
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontFamily: 'ui-monospace, monospace',
    fontSize: '1rem',
    color: '#1e3a5f',
    fontWeight: '500',
  },
  promptCard: {
    background: '#eff6ff',
    border: '2px dashed #bfdbfe',
    borderRadius: '10px',
    padding: '16px',
    textAlign: 'center',
    color: '#3b82f6',
    fontSize: '0.95rem',
  },
  conclusionSuccess: {
    display: 'flex',
    gap: '14px',
    padding: '16px',
    background: 'linear-gradient(135deg, #dcfce7 0%, #d1fae5 100%)',
    border: '2px solid #86efac',
    borderRadius: '12px',
    alignItems: 'center',
  },
  conclusionFail: {
    display: 'flex',
    gap: '14px',
    padding: '16px',
    background: 'linear-gradient(135deg, #fef9c3 0%, #fef3c7 100%)',
    border: '2px solid #fcd34d',
    borderRadius: '12px',
    alignItems: 'center',
  },
  conclusionIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    fontWeight: '700',
    flexShrink: 0,
  },
  conclusionTitle: {
    fontWeight: '700',
    fontSize: '1rem',
    color: '#1e3a5f',
    marginBottom: '4px',
  },
  conclusionText: {
    fontSize: '0.85rem',
    color: '#475569',
    lineHeight: '1.4',
  },
  hintCard: {
    background: '#f0f9ff',
    border: '1px solid #bae6fd',
    borderRadius: '10px',
    padding: '14px 16px',
  },
  hintTitle: {
    fontWeight: '600',
    fontSize: '0.9rem',
    color: '#0369a1',
    marginBottom: '6px',
  },
  hintText: {
    fontSize: '0.85rem',
    color: '#475569',
    margin: 0,
    lineHeight: '1.5',
  },
};

export default DivisibilityTiles;