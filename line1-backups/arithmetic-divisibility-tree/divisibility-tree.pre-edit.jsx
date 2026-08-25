import React, { useState, useMemo } from 'react';

const DivisibilityTreeSVG = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [hoveredNode, setHoveredNode] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const analysis = useMemo(() => {
    const n = parseInt(inputNumber);
    if (!inputNumber || isNaN(n) || n < 0) return null;

    const isEven = n % 2 === 0;
    const lastDigit = n % 10;
    const last2 = n % 100;
    const last3 = n % 1000;
    const digitSum = String(n).split('').reduce((s, d) => s + parseInt(d), 0);
    const digits = String(n).split('').map(Number);
    const altSum = digits.reduce((sum, d, i) => sum + (i % 2 === 0 ? d : -d), 0);

    const div2 = isEven;
    const div4 = isEven && last2 % 4 === 0;
    const div8 = div4 && last3 % 8 === 0;
    const div3 = digitSum % 3 === 0;
    const div9 = div3 && digitSum % 9 === 0;
    const div5 = lastDigit === 0 || lastDigit === 5;
    const div7 = n % 7 === 0;
    const div11 = n % 11 === 0;
    const div6 = div2 && div3;
    const div10 = div2 && div5;
    const div12 = div3 && div4;

    return {
      n,
      isEven,
      lastDigit,
      last2,
      last3,
      digitSum,
      altSum,
      results: {
        1: true, 2: div2, 3: div3, 4: div4, 5: div5, 6: div6,
        7: div7, 8: div8, 9: div9, 10: div10, 11: div11, 12: div12
      }
    };
  }, [inputNumber]);

  const a = analysis;
  const hasInput = a !== null;

  const getExplanation = (nodeId) => {
    if (!a) return null;
    
    const explanations = {
      'input': { title: `Checking ${a.n}`, text: `Let's trace ${a.n} through the divisibility rules.` },
      'evenodd': { 
        title: a.isEven ? 'Even Number' : 'Odd Number',
        text: a.isEven 
          ? `${a.n} ends in ${a.lastDigit}, which is even (0,2,4,6,8).`
          : `${a.n} ends in ${a.lastDigit}, which is odd (1,3,5,7,9).`
      },
      'div2-pass': { title: '÷2 Passes', text: `${a.n} is even, so it's divisible by 2.` },
      'div4': {
        title: a.results[4] ? '÷4 Passes' : '÷4 Fails',
        text: a.results[4]
          ? `Last two digits ${a.last2} ÷ 4 = ${a.last2 / 4} (whole number).`
          : `Last two digits ${a.last2} ÷ 4 = ${(a.last2 / 4).toFixed(2)} (not whole).`
      },
      'div8-pass': { title: '÷8 Passes', text: `Last three digits ${a.last3} ÷ 8 = ${a.last3 / 8} (whole number).` },
      'div8-fail-from4': { title: '÷8 Fails', text: `${a.last3} ÷ 8 = ${(a.last3 / 8).toFixed(2)} (not whole).` },
      'div8-fail-needs4': { title: '÷8 Fails', text: `Can't be divisible by 8 without first being divisible by 4.` },
      'odd-eliminated': { title: 'Even Divisors Eliminated', text: `${a.n} is odd, so it can't be divided by any even number (2,4,6,8,10,12).` },
      'div3': {
        title: a.results[3] ? '÷3 Passes' : '÷3 Fails',
        text: a.results[3]
          ? `Digit sum: ${String(a.n).split('').join('+')} = ${a.digitSum}. Since ${a.digitSum} ÷ 3 = ${a.digitSum / 3}, it's divisible.`
          : `Digit sum: ${String(a.n).split('').join('+')} = ${a.digitSum}. Since ${a.digitSum} ÷ 3 = ${(a.digitSum / 3).toFixed(2)}, it's not divisible.`
      },
      'div9-pass': { title: '÷9 Passes', text: `Digit sum ${a.digitSum} ÷ 9 = ${a.digitSum / 9} (whole number).` },
      'div9-fail-from3': { title: '÷9 Fails', text: `Digit sum ${a.digitSum} ÷ 9 = ${(a.digitSum / 9).toFixed(2)} (not whole).` },
      'div9-fail-needs3': { title: '÷9 Fails', text: `Can't be divisible by 9 without first being divisible by 3.` },
      'div5': {
        title: a.results[5] ? '÷5 Passes' : '÷5 Fails',
        text: a.results[5]
          ? `${a.n} ends in ${a.lastDigit}, which is 0 or 5.`
          : `${a.n} ends in ${a.lastDigit}, which is not 0 or 5.`
      },
      'div7': {
        title: a.results[7] ? '÷7 Passes' : '÷7 Fails',
        text: a.results[7]
          ? `${a.n} ÷ 7 = ${a.n / 7} (whole number).`
          : `${a.n} ÷ 7 = ${(a.n / 7).toFixed(2)} (not whole).`
      },
      'div11': {
        title: a.results[11] ? '÷11 Passes' : '÷11 Fails',
        text: a.results[11]
          ? `Alternating sum = ${a.altSum}. Since ${a.altSum} ÷ 11 = ${a.altSum / 11}, it's divisible.`
          : `Alternating sum = ${a.altSum}. Not divisible by 11.`
      },
      'div6': {
        title: a.results[6] ? '÷6 Passes' : '÷6 Fails',
        text: a.results[6]
          ? `Divisible by both 2 and 3, so divisible by 6.`
          : `Needs both ÷2 AND ÷3. ${!a.results[2] ? 'Fails ÷2.' : 'Fails ÷3.'}`
      },
      'div10': {
        title: a.results[10] ? '÷10 Passes' : '÷10 Fails',
        text: a.results[10]
          ? `Divisible by both 2 and 5, so divisible by 10.`
          : `Needs both ÷2 AND ÷5. ${!a.results[2] ? 'Fails ÷2.' : 'Fails ÷5.'}`
      },
      'div12': {
        title: a.results[12] ? '÷12 Passes' : '÷12 Fails',
        text: a.results[12]
          ? `Divisible by both 3 and 4, so divisible by 12.`
          : `Needs both ÷3 AND ÷4. ${!a.results[3] ? 'Fails ÷3.' : 'Fails ÷4.'}`
      }
    };
    
    return explanations[nodeId] || null;
  };

  const handleMouseEnter = (nodeId, e) => {
    if (!hasInput) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredNode(nodeId);
    setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top });
  };

  const handleMouseLeave = () => setHoveredNode(null);

  // SVG Node component
  const Node = ({ id, x, y, label, sublabel, highlighted, result, width = 100, height = 32 }) => {
    const isActive = highlighted;
    const rx = 6;
    
    return (
      <g 
        transform={`translate(${x - width/2}, ${y - height/2})`}
        onMouseEnter={(e) => isActive && handleMouseEnter(id, e)}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isActive ? 'pointer' : 'default' }}
      >
        <defs>
          <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isActive ? '#3b82f6' : '#e2e8f0'} />
            <stop offset="100%" stopColor={isActive ? '#2563eb' : '#e2e8f0'} />
          </linearGradient>
          <filter id={`shadow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#3b82f6" floodOpacity={isActive ? 0.3 : 0} />
          </filter>
        </defs>
        
        <rect
          width={width}
          height={height}
          rx={rx}
          fill={`url(#grad-${id})`}
          stroke={isActive ? 'none' : '#cbd5e1'}
          strokeWidth={isActive ? 0 : 1}
          filter={`url(#shadow-${id})`}
        />
        
        <text
          x={width / 2}
          y={sublabel ? height / 2 - 5 : height / 2 + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={isActive ? '#fff' : '#475569'}
          fontSize="13"
          fontWeight="600"
          fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
        >
          {label}
        </text>
        
        {sublabel && (
          <text
            x={width / 2}
            y={height / 2 + 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={isActive ? 'rgba(255,255,255,0.8)' : '#64748b'}
            fontSize="11"
            fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
          >
            {sublabel}
          </text>
        )}
        
        {result !== undefined && (
          <g transform={`translate(${width - 10}, -5)`}>
            <circle cx="0" cy="0" r="10" fill={result ? '#22c55e' : '#ef4444'} />
            <text
              x="0"
              y="1"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="700"
              fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
            >
              {result ? '✓' : '✗'}
            </text>
          </g>
        )}
      </g>
    );
  };

  // SVG Line component
  const Line = ({ x1, y1, x2, y2, highlighted }) => (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={highlighted ? '#3b82f6' : '#cbd5e1'}
      strokeWidth="2"
    />
  );

  // SVG Branch Box
  const BranchBox = ({ x, y, width, height, label, highlighted, children }) => (
    <g transform={`translate(${x}, ${y})`} opacity={highlighted ? 1 : 0.5}>
      <rect
        x={0} y={0}
        width={width} height={height}
        rx={8}
        fill="#f8fafc"
        stroke="#e2e8f0"
        strokeWidth={1}
      />
      <text
        x={width / 2}
        y={17}
        textAnchor="middle"
        fill="#64748b"
        fontSize="11"
        fontWeight="700"
        fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
      >
        {label}
      </text>
      {children}
    </g>
  );

  // Derived box
  const DerivedBox = ({ x, y, label, formula, pass, id }) => {
    const width = 84;
    const height = 34;
    const bgColor = hasInput ? (pass ? '#dcfce7' : '#fef2f2') : '#e2e8f0';
    const textColor = hasInput ? (pass ? '#166534' : '#991b1b') : '#64748b';
    
    return (
      <g 
        transform={`translate(${x - width/2}, ${y - height/2})`}
        onMouseEnter={(e) => hasInput && handleMouseEnter(id, e)}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: hasInput ? 'pointer' : 'default' }}
      >
        <rect
          width={width}
          height={height}
          rx={6}
          fill={bgColor}
        />
        <text
          x={width / 2}
          y={height / 2 - 3}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={textColor}
          fontSize="13"
          fontWeight="600"
          fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
        >
          {label}
        </text>
        <text
          x={width / 2}
          y={height / 2 + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={textColor}
          fontSize="10"
          opacity={0.7}
          fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
        >
          {formula}
        </text>
      </g>
    );
  };

  const tooltip = hoveredNode ? getExplanation(hoveredNode) : null;

  // Layout constants
  const svgWidth = 576;
  const svgHeight = 816;
  const centerX = svgWidth / 2;

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        {/* <h1 style={styles.title}>Divisibility Decision Tree</h1> */}
        <p style={styles.subtitle}>Hover any highlighted node for detailed explanation</p>
      </header>

      {/* Input */}
      <div style={styles.inputRow}>
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="Enter number (1–9999)"
          style={styles.input}
          min="1"
          max="9999"
        />
        {hasInput && (
          <>
            <div style={styles.resultBadge}>
              Divisible by: {[1,2,3,4,5,6,7,8,9,10,11,12].filter(d => a.results[d]).join(', ')}
            </div>
            <button onClick={() => setInputNumber('')} style={styles.resetBtn}>Reset</button>
          </>
        )}
      </div>

      {/* Main Layout */}
      <div style={styles.mainLayout}>
        {/* SVG Tree */}
        <div style={styles.svgContainer}>
          <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
            {/* Background */}
            <rect x="0" y="0" width={svgWidth} height={svgHeight} fill="#fff" rx="12" />
            
            {/* Input Node */}
            <Node id="input" x={centerX} y={36} label={hasInput ? String(a.n) : 'N'} highlighted={hasInput} width={72} />
            <Line x1={centerX} y1={55} x2={centerX} y2={72} highlighted={hasInput} />
            
            {/* Even/Odd Node */}
            <Node id="evenodd" x={centerX} y={91} label="Even or Odd?" sublabel={hasInput ? (a.isEven ? 'EVEN' : 'ODD') : ''} highlighted={hasInput} width={120} height={43} />
            <Line x1={centerX} y1={113} x2={centerX} y2={130} highlighted={hasInput} />
            
            {/* Split lines to EVEN/ODD branches */}
            <Line x1={centerX} y1={130} x2={centerX - 96} y2={144} highlighted={hasInput && a?.isEven} />
            <Line x1={centerX} y1={130} x2={centerX + 96} y2={144} highlighted={hasInput && !a?.isEven} />
            
            {/* EVEN Branch */}
            <BranchBox x={centerX - 204} y={144} width={216} height={240} label="EVEN" highlighted={hasInput && a?.isEven}>
              <Node id="div2-pass" x={108} y={54} label="÷2 ✓" result={hasInput && a?.isEven ? true : undefined} highlighted={hasInput && a?.isEven} width={72} height={31} />
              <Line x1={108} y1={70} x2={108} y2={84} highlighted={hasInput && a?.isEven} />
              <Node id="div4" x={108} y={103} label="÷4?" sublabel={hasInput && a?.isEven ? `${a.last2}` : ''} result={hasInput && a?.isEven ? a.results[4] : undefined} highlighted={hasInput && a?.isEven} width={84} height={36} />
              <Line x1={108} y1={121} x2={108} y2={138} highlighted={hasInput && a?.isEven} />
              
              {/* ÷4 split */}
              <Line x1={108} y1={138} x2={60} y2={150} highlighted={hasInput && a?.results?.[4]} />
              <Line x1={108} y1={138} x2={156} y2={150} highlighted={hasInput && a?.isEven && !a?.results?.[4]} />
              
              {/* ÷4 pass -> ÷8 */}
              <g transform="translate(12, 150)" opacity={hasInput && a?.results?.[4] ? 1 : 0.5}>
                <rect x={0} y={0} width={96} height={72} rx={6} fill="#f0f4f8" stroke="#e2e8f0" />
                <text x={48} y={14} textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="700">✓</text>
                <Node 
                  id={hasInput && a?.results?.[4] ? (a.results[8] ? 'div8-pass' : 'div8-fail-from4') : 'div8-pass'} 
                  x={48} y={46} 
                  label="÷8?" 
                  result={hasInput && a?.results?.[4] ? a.results[8] : undefined} 
                  highlighted={hasInput && a?.results?.[4]} 
                  width={72} height={31} 
                />
              </g>
              
              {/* ÷4 fail -> ÷8 blocked */}
              <g transform="translate(108, 150)" opacity={hasInput && a?.isEven && !a?.results?.[4] ? 1 : 0.5}>
                <rect x={0} y={0} width={96} height={72} rx={6} fill="#f0f4f8" stroke="#e2e8f0" />
                <text x={48} y={14} textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="700">✗</text>
                <Node id="div8-fail-needs4" x={48} y={46} label="÷8 ✗" result={hasInput && a?.isEven && !a?.results?.[4] ? false : undefined} highlighted={hasInput && a?.isEven && !a?.results?.[4]} width={72} height={31} />
              </g>
            </BranchBox>
            
            {/* ODD Branch */}
            <BranchBox x={centerX + 12} y={144} width={168} height={72} label="ODD" highlighted={hasInput && !a?.isEven}>
              <Node id="odd-eliminated" x={84} y={46} label="÷2,4,6,8,10,12 ✗" result={hasInput && !a?.isEven ? false : undefined} highlighted={hasInput && !a?.isEven} width={144} height={31} />
            </BranchBox>
            
            {/* Merge point */}
            <Line x1={centerX - 96} y1={384} x2={centerX} y2={402} highlighted={hasInput} />
            <Line x1={centerX + 96} y1={216} x2={centerX} y2={402} highlighted={hasInput} />
            <text x={centerX + 36} y={408} fill="#94a3b8" fontSize="11" fontFamily="-apple-system, sans-serif">↓ merge</text>
            
            {/* ÷3 Node */}
            <Node id="div3" x={centerX} y={432} label="÷3?" sublabel={hasInput ? `sum=${a.digitSum}` : 'digit sum'} result={hasInput ? a.results[3] : undefined} highlighted={hasInput} width={108} height={43} />
            <Line x1={centerX} y1={454} x2={centerX} y2={470} highlighted={hasInput} />
            
            {/* ÷3 split */}
            <Line x1={centerX} y1={470} x2={centerX - 72} y2={482} highlighted={hasInput && a?.results?.[3]} />
            <Line x1={centerX} y1={470} x2={centerX + 72} y2={482} highlighted={hasInput && !a?.results?.[3]} />
            
            {/* ÷9 branches */}
            <BranchBox x={centerX - 144} y={482} width={120} height={60} label="÷3 ✓" highlighted={hasInput && a?.results?.[3]}>
              <Node 
                id={hasInput && a?.results?.[3] ? (a.results[9] ? 'div9-pass' : 'div9-fail-from3') : 'div9-pass'} 
                x={60} y={38} 
                label="÷9?" 
                result={hasInput && a?.results?.[3] ? a.results[9] : undefined} 
                highlighted={hasInput && a?.results?.[3]} 
                width={84} height={31} 
              />
            </BranchBox>
            
            <BranchBox x={centerX + 24} y={482} width={120} height={60} label="÷3 ✗" highlighted={hasInput && !a?.results?.[3]}>
              <Node id="div9-fail-needs3" x={60} y={38} label="÷9 ✗" result={hasInput && !a?.results?.[3] ? false : undefined} highlighted={hasInput && !a?.results?.[3]} width={84} height={31} />
            </BranchBox>
            
            {/* Merge and continue */}
            <Line x1={centerX - 84} y1={542} x2={centerX} y2={558} highlighted={hasInput} />
            <Line x1={centerX + 84} y1={542} x2={centerX} y2={558} highlighted={hasInput} />
            
            {/* ÷5 Node */}
            <Node id="div5" x={centerX} y={582} label="÷5?" sublabel={hasInput ? `ends ${a.lastDigit}` : 'ends 0/5'} result={hasInput ? a.results[5] : undefined} highlighted={hasInput} width={108} height={43} />
            <Line x1={centerX} y1={604} x2={centerX} y2={618} highlighted={hasInput} />
            
            {/* ÷7 Node */}
            <Node id="div7" x={centerX} y={642} label="÷7?" result={hasInput ? a.results[7] : undefined} highlighted={hasInput} width={84} height={36} />
            <Line x1={centerX} y1={660} x2={centerX} y2={674} highlighted={hasInput} />
            
            {/* ÷11 Node */}
            <Node id="div11" x={centerX} y={698} label="÷11?" sublabel={hasInput ? `alt=${a.altSum}` : 'alt sum'} result={hasInput ? a.results[11] : undefined} highlighted={hasInput} width={96} height={38} />
            <Line x1={centerX} y1={718} x2={centerX} y2={734} highlighted={hasInput} />
            
            {/* Derived Results */}
            <text x={centerX} y={756} textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600" fontFamily="-apple-system, sans-serif">DERIVED</text>
            <DerivedBox x={centerX - 96} y={786} label="÷6" formula="(2∧3)" pass={a?.results?.[6]} id="div6" />
            <DerivedBox x={centerX} y={786} label="÷10" formula="(2∧5)" pass={a?.results?.[10]} id="div10" />
            <DerivedBox x={centerX + 96} y={786} label="÷12" formula="(3∧4)" pass={a?.results?.[12]} id="div12" />
          </svg>
        </div>

        {/* Summary Box */}
        <div style={styles.summaryBox}>
          {!hasInput ? (
            <div style={styles.summaryEmpty}>
              <div style={styles.summaryEmptyIcon}>?</div>
              <div style={styles.summaryEmptyText}>Enter a number to see its divisibility analysis</div>
            </div>
          ) : (
            <>
              <div style={styles.summaryHeader}>
                <span style={styles.summaryNumber}>{a.n}</span>
                <span style={styles.summaryLabel}>Summary</span>
              </div>
              
              <div style={styles.summarySection}>
                <div style={styles.summarySectionTitle}>✓ Divisible by</div>
                <div style={styles.summaryDivisors}>
                  {[1,2,3,4,5,6,7,8,9,10,11,12].filter(d => a.results[d]).map(d => (
                    <span key={d} style={styles.summaryDivisorPass}>{d}</span>
                  ))}
                </div>
              </div>

              <div style={styles.summarySection}>
                <div style={styles.summarySectionTitle}>✗ Not divisible by</div>
                <div style={styles.summaryDivisors}>
                  {[2,3,4,5,6,7,8,9,10,11,12].filter(d => !a.results[d]).map(d => (
                    <span key={d} style={styles.summaryDivisorFail}>{d}</span>
                  ))}
                </div>
              </div>

              <div style={styles.summaryHint}>
                <span style={styles.summaryHintIcon}>💡</span>
                <span>Hover over any highlighted box in the tree to learn why each rule passes or fails.</span>
              </div>

              {[1,2,3,4,5,6,7,8,9,10,11,12].filter(d => a.results[d]).length === 1 && (
                <div style={styles.summaryNote}>
                  Only divisible by 1 — this might be a prime number, or divisible by something larger than 12.
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div style={{ ...styles.tooltip, left: tooltipPos.x, top: tooltipPos.y }}>
          <div style={styles.tooltipContent}>
            <div style={styles.tooltipTitle}>{tooltip.title}</div>
            <div style={styles.tooltipText}>{tooltip.text}</div>
          </div>
          <div style={styles.tooltipArrow} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1e3a5f',
    padding: '16px',
    position: 'relative',
  },
  header: {
    textAlign: 'center',
    marginBottom: '12px',
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#1e3a5f',
    margin: '0 0 2px 0',
  },
  subtitle: {
    fontSize: '0.8rem',
    color: '#64748b',
    margin: 0,
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '16px',
    flexWrap: 'wrap',
  },
  input: {
    width: '220px',
    padding: '8px 12px',
    fontSize: '1rem',
    fontWeight: '600',
    textAlign: 'center',
    border: '2px solid #3b82f6',
    borderRadius: '8px',
    outline: 'none',
    color: '#1e3a5f',
  },
  resetBtn: {
    padding: '8px 16px',
    fontSize: '0.85rem',
    fontWeight: '600',
    background: '#fee2e2',
    border: '2px solid #fecaca',
    borderRadius: '8px',
    color: '#dc2626',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  resultBadge: {
    padding: '6px 14px',
    background: '#3b82f6',
    color: '#fff',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  mainLayout: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  svgContainer: {
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    overflow: 'hidden',
  },
  summaryBox: {
    width: '220px',
    flexShrink: 0,
    background: '#fff',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  },
  summaryEmpty: {
    textAlign: 'center',
    padding: '20px 10px',
  },
  summaryEmptyIcon: {
    fontSize: '2rem',
    color: '#cbd5e1',
    marginBottom: '8px',
  },
  summaryEmptyText: {
    fontSize: '0.8rem',
    color: '#94a3b8',
    lineHeight: '1.4',
  },
  summaryHeader: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    marginBottom: '14px',
    paddingBottom: '10px',
    borderBottom: '1px solid #e2e8f0',
  },
  summaryNumber: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#3b82f6',
  },
  summaryLabel: {
    fontSize: '0.75rem',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  summarySection: {
    marginBottom: '12px',
  },
  summarySectionTitle: {
    fontSize: '0.7rem',
    fontWeight: '600',
    color: '#64748b',
    marginBottom: '6px',
  },
  summaryDivisors: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
  },
  summaryDivisorPass: {
    padding: '4px 10px',
    background: '#dcfce7',
    color: '#166534',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  summaryDivisorFail: {
    padding: '4px 10px',
    background: '#fef2f2',
    color: '#991b1b',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  summaryHint: {
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-start',
    padding: '10px',
    background: '#f0f9ff',
    borderRadius: '8px',
    fontSize: '0.7rem',
    color: '#0369a1',
    lineHeight: '1.4',
    marginTop: '12px',
  },
  summaryHintIcon: {
    flexShrink: 0,
  },
  summaryNote: {
    marginTop: '10px',
    padding: '10px',
    background: '#fefce8',
    borderRadius: '8px',
    fontSize: '0.7rem',
    color: '#854d0e',
    lineHeight: '1.4',
  },
  tooltip: {
    position: 'fixed',
    transform: 'translate(-50%, -100%) translateY(-12px)',
    zIndex: 1000,
    pointerEvents: 'none',
  },
  tooltipContent: {
    background: '#1a1a2e',
    borderRadius: '8px',
    padding: '10px 14px',
    minWidth: '200px',
    maxWidth: '280px',
  },
  tooltipTitle: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#60a5fa',
    marginBottom: '4px',
  },
  tooltipText: {
    fontSize: '0.75rem',
    color: '#e2e8f0',
    lineHeight: '1.4',
  },
  tooltipArrow: {
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid #1a1a2e',
  },
};

export default DivisibilityTreeSVG;