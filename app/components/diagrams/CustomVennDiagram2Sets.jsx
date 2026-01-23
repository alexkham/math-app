'use client'
import React from 'react';

const CustomVennDiagram2Sets = ({ scenario }) => {
  // Default scenario if none provided
  const defaultScenario = {
    viewBox: { width: 600, height: 400 },
    circles: {
      A: { 
        radius: 80, 
        center: { x: 220, y: 200 }, 
        color: '#ff6b6b', 
        label: 'A', 
        labelPosition: 'inside',
        strokeWidth: 2,
        strokeColor: '#c92a2a'
      },
      B: { 
        radius: 80, 
        center: { x: 380, y: 200 }, 
        color: '#4ecdc4', 
        label: 'B', 
        labelPosition: 'inside',
        strokeWidth: 2,
        strokeColor: '#0b7285'
      }
    },
    regions: {
      'outside': { 
        fillColor: '#f8f9fa', 
        opacity: 1, 
        pattern: 'solid', 
        label: '',
        labelPosition: 'auto'
      },
      'A-only': { 
        fillColor: '#ff6b6b', 
        opacity: 0.5, 
        pattern: 'solid', 
        label: '',
        labelPosition: 'auto'
      },
      'B-only': { 
        fillColor: '#4ecdc4', 
        opacity: 0.5, 
        pattern: 'solid', 
        label: '',
        labelPosition: 'auto'
      },
      'A∩B': { 
        fillColor: '#95e1d3', 
        opacity: 0.7, 
        pattern: 'solid', 
        label: 'A ∩ B',
        labelPosition: 'auto'
      }
    },
    title: 'Venn Diagram: Two Sets'
  };

  const config = { ...defaultScenario, ...scenario };
  const { viewBox, circles, regions, title } = config;

  // Calculate intersection points between two circles
  const getCircleIntersection = (c1, r1, c2, r2) => {
    const dx = c2.x - c1.x;
    const dy = c2.y - c1.y;
    const d = Math.sqrt(dx * dx + dy * dy);

    // No intersection cases
    if (d > r1 + r2 || d < Math.abs(r1 - r2) || d === 0) {
      return null;
    }

    const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
    const h = Math.sqrt(r1 * r1 - a * a);

    const px = c1.x + (dx * a) / d;
    const py = c1.y + (dy * a) / d;

    const p1 = {
      x: px + (h * dy) / d,
      y: py - (h * dx) / d
    };

    const p2 = {
      x: px - (h * dy) / d,
      y: py + (h * dx) / d
    };

    return { p1, p2, d, a };
  };

  // Generate pattern for a region
  const getPattern = (patternType, id, color) => {
    switch (patternType) {
      case 'horizontal':
        return (
          <pattern id={`pattern-${id}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill={color} opacity="0.3" />
            <line x1="0" y1="2" x2="8" y2="2" stroke={color} strokeWidth="1" />
            <line x1="0" y1="6" x2="8" y2="6" stroke={color} strokeWidth="1" />
          </pattern>
        );
      case 'vertical':
        return (
          <pattern id={`pattern-${id}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill={color} opacity="0.3" />
            <line x1="2" y1="0" x2="2" y2="8" stroke={color} strokeWidth="1" />
            <line x1="6" y1="0" x2="6" y2="8" stroke={color} strokeWidth="1" />
          </pattern>
        );
      case 'diagonal':
        return (
          <pattern id={`pattern-${id}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill={color} opacity="0.3" />
            <line x1="0" y1="0" x2="8" y2="8" stroke={color} strokeWidth="1" />
            <line x1="0" y1="8" x2="8" y2="0" stroke={color} strokeWidth="1" />
          </pattern>
        );
      case 'dots':
        return (
          <pattern id={`pattern-${id}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect width="10" height="10" fill={color} opacity="0.2" />
            <circle cx="5" cy="5" r="1.5" fill={color} />
          </pattern>
        );
      case 'crosshatch':
        return (
          <pattern id={`pattern-${id}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill={color} opacity="0.2" />
            <line x1="0" y1="0" x2="8" y2="8" stroke={color} strokeWidth="0.5" />
            <line x1="8" y1="0" x2="0" y2="8" stroke={color} strokeWidth="0.5" />
          </pattern>
        );
      default: // solid
        return null;
    }
  };

  // Create SVG path for intersection region
  const createIntersectionPath = () => {
    const intersection = getCircleIntersection(
      circles.A.center, 
      circles.A.radius, 
      circles.B.center, 
      circles.B.radius
    );

    if (!intersection) return null;

    const { p1, p2 } = intersection;
    const cA = circles.A.center;
    const cB = circles.B.center;
    const rA = circles.A.radius;
    const rB = circles.B.radius;

    // Determine which point is "top" and which is "bottom"
    const topPoint = p1.y < p2.y ? p1 : p2;
    const bottomPoint = p1.y < p2.y ? p2 : p1;

    // Create path for intersection
    const path = `
      M ${topPoint.x},${topPoint.y}
      A ${rA},${rA} 0 0,1 ${bottomPoint.x},${bottomPoint.y}
      A ${rB},${rB} 0 0,1 ${topPoint.x},${topPoint.y}
      Z
    `;

    return path;
  };

  // Create SVG path for A-only region (A minus intersection)
  const createAOnlyPath = () => {
    const intersection = getCircleIntersection(
      circles.A.center, 
      circles.A.radius, 
      circles.B.center, 
      circles.B.radius
    );

    if (!intersection) {
      // No intersection, return full circle A
      const c = circles.A.center;
      const r = circles.A.radius;
      return `M ${c.x - r},${c.y} A ${r},${r} 0 1,1 ${c.x + r},${c.y} A ${r},${r} 0 1,1 ${c.x - r},${c.y} Z`;
    }

    const { p1, p2 } = intersection;
    const c = circles.A.center;
    const r = circles.A.radius;
    const rB = circles.B.radius;

    const topPoint = p1.y < p2.y ? p1 : p2;
    const bottomPoint = p1.y < p2.y ? p2 : p1;

    // Create path for A-only (circle A with intersection cut out)
    const path = `
      M ${topPoint.x},${topPoint.y}
      A ${r},${r} 0 1,1 ${bottomPoint.x},${bottomPoint.y}
      A ${rB},${rB} 0 0,0 ${topPoint.x},${topPoint.y}
      Z
    `;

    return path;
  };

  // Create SVG path for B-only region (B minus intersection)
  const createBOnlyPath = () => {
    const intersection = getCircleIntersection(
      circles.A.center, 
      circles.A.radius, 
      circles.B.center, 
      circles.B.radius
    );

    if (!intersection) {
      // No intersection, return full circle B
      const c = circles.B.center;
      const r = circles.B.radius;
      return `M ${c.x - r},${c.y} A ${r},${r} 0 1,1 ${c.x + r},${c.y} A ${r},${r} 0 1,1 ${c.x - r},${c.y} Z`;
    }

    const { p1, p2 } = intersection;
    const c = circles.B.center;
    const r = circles.B.radius;
    const rA = circles.A.radius;

    const topPoint = p1.y < p2.y ? p1 : p2;
    const bottomPoint = p1.y < p2.y ? p2 : p1;

    // Create path for B-only (circle B with intersection cut out)
    const path = `
      M ${topPoint.x},${topPoint.y}
      A ${r},${r} 0 1,0 ${bottomPoint.x},${bottomPoint.y}
      A ${rA},${rA} 0 0,1 ${topPoint.x},${topPoint.y}
      Z
    `;

    return path;
  };

  // Calculate label position
  const getLabelPosition = (regionType, labelPosConfig) => {
    if (typeof labelPosConfig === 'object' && labelPosConfig.x && labelPosConfig.y) {
      return labelPosConfig;
    }

    const cA = circles.A.center;
    const cB = circles.B.center;
    const rA = circles.A.radius;
    const rB = circles.B.radius;

    switch (regionType) {
      case 'A-only':
        return { x: cA.x - rA / 2, y: cA.y };
      case 'B-only':
        return { x: cB.x + rB / 2, y: cB.y };
      case 'A∩B':
        return { x: (cA.x + cB.x) / 2, y: (cA.y + cB.y) / 2 };
      case 'outside':
        return { x: viewBox.width / 2, y: 30 };
      default:
        return { x: 0, y: 0 };
    }
  };

  // Calculate circle label position
  const getCircleLabelPosition = (circleKey, labelPosConfig) => {
    const circle = circles[circleKey];
    
    if (typeof labelPosConfig === 'object' && labelPosConfig.x && labelPosConfig.y) {
      return { x: circle.center.x + labelPosConfig.x, y: circle.center.y + labelPosConfig.y };
    }

    if (labelPosConfig === 'outside') {
      if (circleKey === 'A') {
        return { x: circle.center.x - circle.radius - 30, y: circle.center.y };
      } else {
        return { x: circle.center.x + circle.radius + 30, y: circle.center.y };
      }
    }

    // Inside by default
    return { x: circle.center.x, y: circle.center.y - circle.radius + 30 };
  };

  const intersectionPath = createIntersectionPath();
  const aOnlyPath = createAOnlyPath();
  const bOnlyPath = createBOnlyPath();

  return (
    <div style={{ width: '100%', maxWidth: `${viewBox.width}px`, margin: 'auto' }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
        style={{ border: '1px solid #ddd', background: 'white' }}
      >
        <defs>
          {regions['outside']?.pattern !== 'solid' && 
            getPattern(regions['outside'].pattern, 'outside', regions['outside'].fillColor)}
          {regions['A-only']?.pattern !== 'solid' && 
            getPattern(regions['A-only'].pattern, 'A-only', regions['A-only'].fillColor)}
          {regions['B-only']?.pattern !== 'solid' && 
            getPattern(regions['B-only'].pattern, 'B-only', regions['B-only'].fillColor)}
          {regions['A∩B']?.pattern !== 'solid' && 
            getPattern(regions['A∩B'].pattern, 'intersection', regions['A∩B'].fillColor)}
        </defs>

        {/* Title */}
        {title && (
          <text x={viewBox.width / 2} y={25} textAnchor="middle" fontSize="20" fontWeight="bold" fill="#333">
            {title}
          </text>
        )}

        {/* Outside/Background region */}
        {regions['outside'] && (
          <rect 
            x="0" 
            y="0" 
            width={viewBox.width} 
            height={viewBox.height}
            fill={regions['outside'].pattern === 'solid' 
              ? regions['outside'].fillColor 
              : `url(#pattern-outside)`}
            opacity={regions['outside'].opacity}
          />
        )}

        {/* A-only region */}
        {regions['A-only'] && aOnlyPath && (
          <path
            d={aOnlyPath}
            fill={regions['A-only'].pattern === 'solid' 
              ? regions['A-only'].fillColor 
              : `url(#pattern-A-only)`}
            opacity={regions['A-only'].opacity}
          />
        )}

        {/* B-only region */}
        {regions['B-only'] && bOnlyPath && (
          <path
            d={bOnlyPath}
            fill={regions['B-only'].pattern === 'solid' 
              ? regions['B-only'].fillColor 
              : `url(#pattern-B-only)`}
            opacity={regions['B-only'].opacity}
          />
        )}

        {/* Intersection region */}
        {regions['A∩B'] && intersectionPath && (
          <path
            d={intersectionPath}
            fill={regions['A∩B'].pattern === 'solid' 
              ? regions['A∩B'].fillColor 
              : `url(#pattern-intersection)`}
            opacity={regions['A∩B'].opacity}
          />
        )}

        {/* Circle A outline */}
        <circle
          cx={circles.A.center.x}
          cy={circles.A.center.y}
          r={circles.A.radius}
          fill="none"
          stroke={circles.A.strokeColor}
          strokeWidth={circles.A.strokeWidth}
        />

        {/* Circle B outline */}
        <circle
          cx={circles.B.center.x}
          cy={circles.B.center.y}
          r={circles.B.radius}
          fill="none"
          stroke={circles.B.strokeColor}
          strokeWidth={circles.B.strokeWidth}
        />

        {/* Circle A label */}
        {circles.A.label && (
          <text
            x={getCircleLabelPosition('A', circles.A.labelPosition).x}
            y={getCircleLabelPosition('A', circles.A.labelPosition).y}
            textAnchor="middle"
            fontSize="24"
            fontWeight="bold"
            fill={circles.A.strokeColor}
          >
            {circles.A.label}
          </text>
        )}

        {/* Circle B label */}
        {circles.B.label && (
          <text
            x={getCircleLabelPosition('B', circles.B.labelPosition).x}
            y={getCircleLabelPosition('B', circles.B.labelPosition).y}
            textAnchor="middle"
            fontSize="24"
            fontWeight="bold"
            fill={circles.B.strokeColor}
          >
            {circles.B.label}
          </text>
        )}

        {/* Region labels */}
        {regions['A-only']?.label && (
          <text
            x={getLabelPosition('A-only', regions['A-only'].labelPosition).x}
            y={getLabelPosition('A-only', regions['A-only'].labelPosition).y}
            textAnchor="middle"
            fontSize="16"
            fill="#333"
          >
            {regions['A-only'].label}
          </text>
        )}

        {regions['B-only']?.label && (
          <text
            x={getLabelPosition('B-only', regions['B-only'].labelPosition).x}
            y={getLabelPosition('B-only', regions['B-only'].labelPosition).y}
            textAnchor="middle"
            fontSize="16"
            fill="#333"
          >
            {regions['B-only'].label}
          </text>
        )}

        {regions['A∩B']?.label && (
          <text
            x={getLabelPosition('A∩B', regions['A∩B'].labelPosition).x}
            y={getLabelPosition('A∩B', regions['A∩B'].labelPosition).y}
            textAnchor="middle"
            fontSize="16"
            fill="#333"
          >
            {regions['A∩B'].label}
          </text>
        )}

        {regions['outside']?.label && (
          <text
            x={getLabelPosition('outside', regions['outside'].labelPosition).x}
            y={getLabelPosition('outside', regions['outside'].labelPosition).y}
            textAnchor="middle"
            fontSize="16"
            fill="#666"
          >
            {regions['outside'].label}
          </text>
        )}
      </svg>
    </div>
  );
};

export default CustomVennDiagram2Sets;