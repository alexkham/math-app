import React, { useMemo } from 'react';

/* =====================================================
   MATH GRAPH COMPONENT v1
   
   SVG-based graph renderer for math solver tools.
   Receives graphData from solver, handles all visualization internally.
   
   Props:
     graphData: {
       type: 'exponential' | 'logarithmic' | 'radical',
       base: number,           // for exp/log (default: Math.E for 'e')
       solution: { x, y },     // solution point to mark
       inequality?: {          // optional, for shading regions
         operator: '>' | '<' | '≥' | '≤'
       }
     }
     darkMode: boolean         // optional, default false
     
   Exports:
     MathGraphComponent (default)
   ===================================================== */

const MathGraphComponent = ({ graphData, darkMode = false }) => {
  
  // Theme colors
  const colors = darkMode ? {
    bg: '#1e1e1e',
    grid: '#333',
    axis: '#888',
    axisLabel: '#aaa',
    curve: '#60a5fa',
    curveDashed: '#f59e0b',
    point: '#f59e0b',
    pointStroke: '#fff',
    asymptote: '#ef4444',
    region: 'rgba(96, 165, 250, 0.15)',
    regionStroke: 'rgba(96, 165, 250, 0.4)',
    label: '#e4e4e4',
  } : {
    bg: '#fff',
    grid: '#e5e7eb',
    axis: '#374151',
    axisLabel: '#6b7280',
    curve: '#3b82f6',
    curveDashed: '#f59e0b',
    point: '#f59e0b',
    pointStroke: '#fff',
    asymptote: '#ef4444',
    region: 'rgba(59, 130, 246, 0.12)',
    regionStroke: 'rgba(59, 130, 246, 0.3)',
    label: '#1f2937',
  };
  
  // SVG dimensions
  const width = 400;
  const height = 280;
  const padding = { top: 20, right: 30, bottom: 35, left: 45 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  
  // Build function based on type
  const buildFunction = (type, base) => {
    switch (type) {
      case 'exponential':
        return (x) => Math.pow(base, x);
      case 'logarithmic':
        if (base === Math.E) {
          return (x) => (x > 0 ? Math.log(x) : NaN);
        }
        return (x) => (x > 0 ? Math.log(x) / Math.log(base) : NaN);
      case 'radical':
        return (x) => (x >= 0 ? Math.sqrt(x) : NaN);
      default:
        return (x) => x;
    }
  };
  
  // Get asymptotes based on type
  const getAsymptotes = (type) => {
    switch (type) {
      case 'exponential':
        return [{ type: 'horizontal', value: 0 }];
      case 'logarithmic':
        return [{ type: 'vertical', value: 0 }];
      case 'radical':
        return []; // No asymptotes, but domain starts at 0
      default:
        return [];
    }
  };
  
  // Calculate view window based on solution
  const calculateWindow = (type, solution) => {
    const { x: solX, y: solY } = solution;
    
    // Padding around solution point
    const padX = Math.max(Math.abs(solX) * 0.5, 3);
    const padY = Math.max(Math.abs(solY) * 0.5, 3);
    
    let xMin, xMax, yMin, yMax;
    
    switch (type) {
      case 'exponential':
        xMin = Math.min(-2, solX - padX);
        xMax = Math.max(solX + padX, 5);
        yMin = Math.min(-1, solY - padY);
        yMax = Math.max(solY + padY, solY * 1.3);
        break;
      case 'logarithmic':
        xMin = -1;
        xMax = Math.max(solX + padX, solX * 1.5, 5);
        yMin = Math.min(-2, solY - padY);
        yMax = Math.max(solY + padY, 4);
        break;
      case 'radical':
        xMin = -1;
        xMax = Math.max(solX + padX, solX * 1.5, 5);
        yMin = -1;
        yMax = Math.max(solY + padY, 5);
        break;
      default:
        xMin = solX - 5;
        xMax = solX + 5;
        yMin = solY - 5;
        yMax = solY + 5;
    }
    
    return { xMin, xMax, yMin, yMax };
  };
  
  // Coordinate transforms
  const createTransforms = (xMin, xMax, yMin, yMax) => {
    const toSvgX = (x) => padding.left + ((x - xMin) / (xMax - xMin)) * plotWidth;
    const toSvgY = (y) => padding.top + ((yMax - y) / (yMax - yMin)) * plotHeight;
    const fromSvgX = (sx) => xMin + ((sx - padding.left) / plotWidth) * (xMax - xMin);
    return { toSvgX, toSvgY, fromSvgX };
  };
  
  // Generate curve path
  const generateCurvePath = (fn, xMin, xMax, toSvgX, toSvgY, samples = 200) => {
    const points = [];
    const step = (xMax - xMin) / samples;
    
    for (let i = 0; i <= samples; i++) {
      const x = xMin + i * step;
      const y = fn(x);
      
      if (isFinite(y) && !isNaN(y)) {
        points.push({ x: toSvgX(x), y: toSvgY(y) });
      } else {
        // Break in the curve
        if (points.length > 0) {
          points.push(null);
        }
      }
    }
    
    // Build path string with breaks
    let path = '';
    let inPath = false;
    
    for (const pt of points) {
      if (pt === null) {
        inPath = false;
      } else {
        // Clamp to visible area with some overflow
        const clampedY = Math.max(-50, Math.min(height + 50, pt.y));
        if (!inPath) {
          path += `M ${pt.x} ${clampedY} `;
          inPath = true;
        } else {
          path += `L ${pt.x} ${clampedY} `;
        }
      }
    }
    
    return path;
  };
  
  // Generate region path for inequalities
  const generateRegionPath = (fn, operator, solX, xMin, xMax, yMin, yMax, toSvgX, toSvgY) => {
    const isGreater = operator === '>' || operator === '≥';
    
    // Determine x range for shading
    let regionXMin, regionXMax;
    if (isGreater) {
      regionXMin = solX;
      regionXMax = xMax;
    } else {
      regionXMin = xMin;
      regionXMax = solX;
    }
    
    // Build path along curve then close
    const samples = 100;
    const step = (regionXMax - regionXMin) / samples;
    let path = '';
    
    // Start at bottom of region
    const startX = toSvgX(regionXMin);
    const endX = toSvgX(regionXMax);
    const bottomY = toSvgY(yMin);
    const topY = toSvgY(yMax);
    
    path += `M ${startX} ${bottomY} `;
    
    // Go up along the curve
    for (let i = 0; i <= samples; i++) {
      const x = regionXMin + i * step;
      const y = fn(x);
      if (isFinite(y) && !isNaN(y)) {
        const svgY = Math.max(topY, Math.min(bottomY, toSvgY(y)));
        path += `L ${toSvgX(x)} ${svgY} `;
      }
    }
    
    // Close the path
    path += `L ${endX} ${bottomY} Z`;
    
    return path;
  };
  
  // Memoize calculations
  const computed = useMemo(() => {
    if (!graphData || !graphData.solution) {
      return null;
    }
    
    const { type = 'exponential', base = Math.E, solution, inequality } = graphData;
    const fn = buildFunction(type, base);
    const asymptotes = getAsymptotes(type);
    const { xMin, xMax, yMin, yMax } = calculateWindow(type, solution);
    const { toSvgX, toSvgY } = createTransforms(xMin, xMax, yMin, yMax);
    
    // Curve path
    const curvePath = generateCurvePath(fn, xMin, xMax, toSvgX, toSvgY);
    
    // Horizontal line at y = solution.y
    const horizontalY = toSvgY(solution.y);
    
    // Solution point
    const pointSvgX = toSvgX(solution.x);
    const pointSvgY = toSvgY(solution.y);
    
    // Region path for inequality
    let regionPath = null;
    if (inequality && inequality.operator) {
      regionPath = generateRegionPath(
        fn, inequality.operator, solution.x,
        xMin, xMax, yMin, yMax, toSvgX, toSvgY
      );
    }
    
    // Grid lines
    const gridLinesX = [];
    const gridLinesY = [];
    
    const xStep = niceStep(xMax - xMin);
    const yStep = niceStep(yMax - yMin);
    
    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
      if (Math.abs(x) > 0.0001) { // Skip axis
        gridLinesX.push({ x: toSvgX(x), label: formatAxisLabel(x) });
      }
    }
    
    for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
      if (Math.abs(y) > 0.0001) { // Skip axis
        gridLinesY.push({ y: toSvgY(y), label: formatAxisLabel(y) });
      }
    }
    
    // Axis positions
    const axisX = toSvgX(0);
    const axisY = toSvgY(0);
    const showYAxis = xMin <= 0 && xMax >= 0;
    const showXAxis = yMin <= 0 && yMax >= 0;
    
    // Asymptote positions
    const asymptoteLines = asymptotes.map(a => {
      if (a.type === 'horizontal') {
        return { type: 'h', y: toSvgY(a.value), value: a.value };
      } else {
        return { type: 'v', x: toSvgX(a.value), value: a.value };
      }
    }).filter(a => {
      // Only show if in view
      if (a.type === 'h') return a.y >= padding.top && a.y <= padding.top + plotHeight;
      return a.x >= padding.left && a.x <= padding.left + plotWidth;
    });
    
    // Build label
    let curveLabel = '';
    switch (type) {
      case 'exponential':
        curveLabel = base === Math.E ? 'y = eˣ' : `y = ${formatBase(base)}ˣ`;
        break;
      case 'logarithmic':
        curveLabel = base === Math.E ? 'y = ln(x)' : `y = log${formatBaseSub(base)}(x)`;
        break;
      case 'radical':
        curveLabel = 'y = √x';
        break;
    }
    
    return {
      curvePath,
      horizontalY,
      pointSvgX,
      pointSvgY,
      regionPath,
      gridLinesX,
      gridLinesY,
      axisX,
      axisY,
      showXAxis,
      showYAxis,
      asymptoteLines,
      curveLabel,
      solution,
      xMin, xMax, yMin, yMax,
    };
  }, [graphData, darkMode]);
  
  // Empty state
  if (!computed) {
    return (
      <div style={styles.container}>
        <svg width={width} height={height} style={{ background: colors.bg, borderRadius: 8 }}>
          <text x={width / 2} y={height / 2} textAnchor="middle" fill={colors.axisLabel} fontSize={14}>
            No graph data
          </text>
        </svg>
      </div>
    );
  }
  
  const {
    curvePath, horizontalY, pointSvgX, pointSvgY, regionPath,
    gridLinesX, gridLinesY, axisX, axisY, showXAxis, showYAxis,
    asymptoteLines, curveLabel, solution
  } = computed;
  
  return (
    <div style={styles.container}>
      <svg 
        width="100%" 
        height={height} 
        viewBox={`0 0 ${width} ${height}`}
        style={{ background: colors.bg, borderRadius: 8 }}
      >
        {/* Grid lines */}
        <g>
          {gridLinesX.map((g, i) => (
            <line
              key={`gx-${i}`}
              x1={g.x}
              y1={padding.top}
              x2={g.x}
              y2={padding.top + plotHeight}
              stroke={colors.grid}
              strokeWidth={1}
            />
          ))}
          {gridLinesY.map((g, i) => (
            <line
              key={`gy-${i}`}
              x1={padding.left}
              y1={g.y}
              x2={padding.left + plotWidth}
              y2={g.y}
              stroke={colors.grid}
              strokeWidth={1}
            />
          ))}
        </g>
        
        {/* Axes */}
        {showYAxis && (
          <line
            x1={axisX}
            y1={padding.top}
            x2={axisX}
            y2={padding.top + plotHeight}
            stroke={colors.axis}
            strokeWidth={1.5}
          />
        )}
        {showXAxis && (
          <line
            x1={padding.left}
            y1={axisY}
            x2={padding.left + plotWidth}
            y2={axisY}
            stroke={colors.axis}
            strokeWidth={1.5}
          />
        )}
        
        {/* Axis labels */}
        <g fontSize={10} fill={colors.axisLabel}>
          {gridLinesX.map((g, i) => (
            <text key={`lx-${i}`} x={g.x} y={padding.top + plotHeight + 15} textAnchor="middle">
              {g.label}
            </text>
          ))}
          {gridLinesY.map((g, i) => (
            <text key={`ly-${i}`} x={padding.left - 8} y={g.y + 4} textAnchor="end">
              {g.label}
            </text>
          ))}
        </g>
        
        {/* Asymptotes */}
        {asymptoteLines.map((a, i) => (
          a.type === 'h' ? (
            <line
              key={`asym-${i}`}
              x1={padding.left}
              y1={a.y}
              x2={padding.left + plotWidth}
              y2={a.y}
              stroke={colors.asymptote}
              strokeWidth={1}
              strokeDasharray="6 4"
            />
          ) : (
            <line
              key={`asym-${i}`}
              x1={a.x}
              y1={padding.top}
              x2={a.x}
              y2={padding.top + plotHeight}
              stroke={colors.asymptote}
              strokeWidth={1}
              strokeDasharray="6 4"
            />
          )
        ))}
        
        {/* Shaded region for inequality */}
        {regionPath && (
          <path
            d={regionPath}
            fill={colors.region}
            stroke={colors.regionStroke}
            strokeWidth={1}
          />
        )}
        
        {/* Horizontal line at solution y */}
        <line
          x1={padding.left}
          y1={horizontalY}
          x2={padding.left + plotWidth}
          y2={horizontalY}
          stroke={colors.curveDashed}
          strokeWidth={1.5}
          strokeDasharray="8 4"
        />
        
        {/* Main curve */}
        <path
          d={curvePath}
          fill="none"
          stroke={colors.curve}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Solution point */}
        <circle
          cx={pointSvgX}
          cy={pointSvgY}
          r={7}
          fill={colors.point}
          stroke={colors.pointStroke}
          strokeWidth={2}
        />
        
        {/* Labels */}
        <text
          x={padding.left + 8}
          y={padding.top + 18}
          fill={colors.curve}
          fontSize={13}
          fontWeight={600}
        >
          {curveLabel}
        </text>
        
        <text
          x={pointSvgX + 12}
          y={pointSvgY - 10}
          fill={colors.label}
          fontSize={12}
          fontWeight={500}
        >
          ({formatNumber(solution.x)}, {formatNumber(solution.y)})
        </text>
      </svg>
    </div>
  );
};

/* =====================================================
   HELPERS
   ===================================================== */

function niceStep(range) {
  const rough = range / 5;
  const pow = Math.pow(10, Math.floor(Math.log10(rough)));
  const norm = rough / pow;
  
  if (norm < 1.5) return pow;
  if (norm < 3) return 2 * pow;
  if (norm < 7) return 5 * pow;
  return 10 * pow;
}

function formatAxisLabel(n) {
  if (Math.abs(n) < 0.0001) return '0';
  if (Number.isInteger(n)) return String(n);
  return n.toFixed(1);
}

function formatNumber(n) {
  if (Number.isInteger(n)) return String(n);
  return n.toFixed(2).replace(/\.?0+$/, '');
}

function formatBase(b) {
  if (b === Math.E) return 'e';
  if (Number.isInteger(b)) return String(b);
  return b.toFixed(2);
}

function formatBaseSub(b) {
  if (b === Math.E) return '';
  if (b === 10) return '';
  return String(b);
}

/* =====================================================
   STYLES
   ===================================================== */

const styles = {
  container: {
    width: '100%',
    maxWidth: 400,
  },
};

export default MathGraphComponent;