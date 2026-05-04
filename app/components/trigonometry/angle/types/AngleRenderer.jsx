// AngleRenderer.jsx
// Pure SVG renderer for angle visualization
// No state, no controls — props only
// Follows wrapper/renderer architecture

// ─── Math helpers ────────────────────────────────────────────────────────────

const toRad = (deg) => (deg * Math.PI) / 180;

/**
 * Convert a math-convention angle (CCW from east) into SVG coordinates.
 * SVG has y-axis pointing down, so we negate sin.
 */
const polarToSVG = (cx, cy, r, angleDeg) => {
  const rad = toRad(angleDeg);
  return {
    x: cx + r * Math.cos(rad),
    y: cy - r * Math.sin(rad),
  };
};

/**
 * Return the CCW delta (0–360) from fromAngle to toAngle.
 */
const ccwDelta = (fromAngle, toAngle) =>
  ((toAngle - fromAngle) % 360 + 360) % 360;

/**
 * SVG arc path from fromAngle to toAngle sweeping CCW (math convention).
 * sweepFlag=0 in SVG = CCW on screen, which matches math CCW after y-flip.
 */
const buildArcPath = (cx, cy, r, fromAngle, toAngle) => {
  const delta = ccwDelta(fromAngle, toAngle);
  const start = polarToSVG(cx, cy, r, fromAngle);
  const end   = polarToSVG(cx, cy, r, toAngle);
  const largeArc = delta > 180 ? 1 : 0;
  const f = (n) => n.toFixed(3);
  return `M ${f(start.x)} ${f(start.y)} A ${r} ${r} 0 ${largeArc} 0 ${f(end.x)} ${f(end.y)}`;
};

/**
 * Filled sector (pie slice) between two angles.
 */
const buildSectorPath = (cx, cy, r, fromAngle, toAngle) => {
  const arc = buildArcPath(cx, cy, r, fromAngle, toAngle);
  return `${arc} L ${cx} ${cy} Z`;
};

/**
 * Small square marker for right angles.
 * Placed at `size` distance along each arm, forming the classic ⌐ mark.
 */
const buildRightAngleBox = (cx, cy, angle1, angle2, size = 14) => {
  const p1     = polarToSVG(cx, cy, size, angle1);
  const p2     = polarToSVG(cx, cy, size, angle2);
  const corner = { x: p1.x + p2.x - cx, y: p1.y + p2.y - cy };
  const f = (n) => n.toFixed(2);
  return `M ${f(p1.x)} ${f(p1.y)} L ${f(corner.x)} ${f(corner.y)} L ${f(p2.x)} ${f(p2.y)}`;
};

// ─── Arrowhead marker definition ─────────────────────────────────────────────

function ArrowMarker({ id, color, size = 8 }) {
  return (
    <defs>
      <marker
        id={id}
        markerWidth={size}
        markerHeight={size}
        refX={size - 1}
        refY={size / 2}
        orient="auto"
        markerUnits="userSpaceOnUse"
      >
        <path
          d={`M 0 0 L ${size} ${size / 2} L 0 ${size} Z`}
          fill={color}
        />
      </marker>
    </defs>
  );
}

// ─── Single arm renderer ──────────────────────────────────────────────────────

function Arm({
  cx, cy,
  angle,
  armLength,
  color,
  strokeWidth,
  bidirectional,
  showEndpoint,
  dashed,
  markerId,
}) {
  const end  = polarToSVG(cx, cy, armLength, angle);
  const back = polarToSVG(cx, cy, armLength, angle + 180);

  const dashArr = dashed ? '7 5' : undefined;
  const markerEnd = markerId ? `url(#${markerId})` : undefined;

  return (
    <g>
      {bidirectional && (
        <line
          x1={cx} y1={cy}
          x2={back.x} y2={back.y}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={dashArr}
          opacity={0.45}
        />
      )}
      <line
        x1={cx} y1={cy}
        x2={end.x} y2={end.y}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={dashArr}
        markerEnd={markerEnd}
      />
      {showEndpoint && (
        <circle cx={end.x} cy={end.y} r={3.5} fill={color} opacity={0.55} />
      )}
    </g>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

/**
 * AngleRenderer
 *
 * Pure SVG renderer for a single angle at a vertex.
 * All state and interactivity must live in the parent wrapper.
 *
 * Props:
 *   Geometry:
 *     width, height          — SVG canvas dimensions (default 400×400)
 *     cx, cy                 — vertex position (default center)
 *     angle1                 — reference arm, degrees CCW from east (default 0)
 *     angle2                 — second arm, degrees CCW from east (default 60)
 *     armLength              — arm length in px (default 130)
 *     arm1Bidirectional      — extend arm1 backwards (default false)
 *     arm2Bidirectional      — extend arm2 backwards (default false)
 *
 *   Arc:
 *     arcRadius              — arc indicator radius (default 54)
 *     showArc                — draw the arc (default true)
 *     showSector             — fill the pie slice (default false)
 *     showRightAngleBox      — auto square marker when angle ≈ 90° (default false)
 *     rightAngleBoxSize      — size of right angle square (default 14)
 *
 *   Styling:
 *     arm1Color              — color for arm 1 (default #2563eb)
 *     arm2Color              — color for arm 2 (default #2563eb)
 *     arcColor               — arc and label color (default #f59e0b)
 *     sectorColor            — sector fill (default rgba(245,158,11,0.12))
 *     strokeWidth            — arm stroke width (default 2.5)
 *     arm1Arrow, arm2Arrow   — show arrowhead on arm (default false)
 *
 *   Label:
 *     label                  — string override; null = auto degree value (default null)
 *     showLabel              — render label (default true)
 *     labelRadius            — label distance from vertex (default 88)
 *     labelFontSize          — (default 14)
 *
 *   Ghost arms:
 *     ghostArms              — array of:
 *       { angle, color, dashed, bidirectional, label, labelRadius }
 *
 *   Extra arcs:
 *     extraArcs              — array of:
 *       { angle1, angle2, radius, color, strokeWidth, label, labelRadius }
 *
 *   Theme:
 *     dark                   — dark mode (default false)
 *
 *   Escape hatch:
 *     children               — raw SVG elements rendered on top
 */
export default function AngleRenderer({
  // Canvas
  width  = 400,
  height = 400,
  cx,
  cy,

  // Arms
  angle1             = 0,
  angle2             = 60,
  armLength          = 130,
  arm1Bidirectional  = false,
  arm2Bidirectional  = false,
  arm1Arrow          = false,
  arm2Arrow          = false,

  // Arc
  arcRadius         = 54,
  showArc           = true,
  showSector        = false,
  showRightAngleBox = false,
  rightAngleBoxSize = 14,

  // Styling
  arm1Color    = '#2563eb',
  arm2Color    = '#2563eb',
  arcColor     = '#f59e0b',
  sectorColor  = 'rgba(245,158,11,0.12)',
  strokeWidth  = 2.5,

  // Label
  label         = null,
  showLabel     = true,
  labelRadius   = 88,
  labelFontSize = 14,

  // Ghost arms
  ghostArms = [],

  // Extra arcs
  extraArcs = [],

  // Theme
  dark = false,

  // Escape hatch
  children = null,
}) {
  // Resolved vertex defaults to center if not provided
  const vx = cx ?? width  / 2;
  const vy = cy ?? height / 2;

  const delta    = ccwDelta(angle1, angle2);
  const midAngle = angle1 + delta / 2;

  const isRight      = Math.abs(delta - 90) < 0.5;
  const useBox       = showRightAngleBox && isRight;
  const displayLabel = label !== null ? label : `${Math.round(delta)}\u00b0`;

  const labelPos = polarToSVG(vx, vy, labelRadius, midAngle);

  const subColor  = dark ? '#94a3b8' : '#64748b';
  const fontStyle = {
    fontFamily : 'system-ui, -apple-system, sans-serif',
    userSelect : 'none',
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Arrow marker definitions */}
      {arm1Arrow && (
        <ArrowMarker id="arr-arm1" color={arm1Color} size={strokeWidth * 3.5} />
      )}
      {arm2Arrow && (
        <ArrowMarker id="arr-arm2" color={arm2Color} size={strokeWidth * 3.5} />
      )}

      {/* ── Sector fill ── */}
      {showSector && (
        <path
          d={buildSectorPath(vx, vy, arcRadius, angle1, angle2)}
          fill={sectorColor}
          stroke="none"
        />
      )}

      {/* ── Ghost arms ── */}
      {ghostArms.map((g, i) => (
        <Arm
          key={`ghost-${i}`}
          cx={vx} cy={vy}
          angle={g.angle}
          armLength={armLength}
          color={g.color || subColor}
          strokeWidth={strokeWidth * 0.85}
          bidirectional={g.bidirectional ?? false}
          showEndpoint={false}
          dashed={g.dashed ?? true}
        />
      ))}

      {/* ── Ghost arm labels ── */}
      {ghostArms.map((g, i) => {
        if (!g.label) return null;
        const lr  = g.labelRadius ?? armLength + 18;
        const pos = polarToSVG(vx, vy, lr, g.angle);
        return (
          <text
            key={`ghost-label-${i}`}
            x={pos.x} y={pos.y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={12}
            fill={g.color || subColor}
            opacity={0.75}
            style={fontStyle}
          >
            {g.label}
          </text>
        );
      })}

      {/* ── Extra arcs ── */}
      {extraArcs.map((ea, i) => {
        const r   = ea.radius ?? arcRadius;
        const mid = ea.angle1 + ccwDelta(ea.angle1, ea.angle2) / 2;
        const lp  = polarToSVG(vx, vy, (ea.labelRadius ?? r + 18), mid);
        return (
          <g key={`extra-arc-${i}`}>
            <path
              d={buildArcPath(vx, vy, r, ea.angle1, ea.angle2)}
              fill="none"
              stroke={ea.color || arcColor}
              strokeWidth={ea.strokeWidth || strokeWidth}
              strokeLinecap="round"
            />
            {ea.label && (
              <text
                x={lp.x} y={lp.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fontWeight="600"
                fill={ea.color || arcColor}
                style={fontStyle}
              >
                {ea.label}
              </text>
            )}
          </g>
        );
      })}

      {/* ── Main arc OR right-angle box ── */}
      {showArc && !useBox && (
        <path
          d={buildArcPath(vx, vy, arcRadius, angle1, angle2)}
          fill="none"
          stroke={arcColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      )}
      {useBox && (
        <path
          d={buildRightAngleBox(vx, vy, angle1, angle2, rightAngleBoxSize)}
          fill="none"
          stroke={arcColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="miter"
        />
      )}

      {/* ── Arms ── */}
      <Arm
        cx={vx} cy={vy}
        angle={angle1}
        armLength={armLength}
        color={arm1Color}
        strokeWidth={strokeWidth}
        bidirectional={arm1Bidirectional}
        showEndpoint
        dashed={false}
        markerId={arm1Arrow ? 'arr-arm1' : undefined}
      />
      <Arm
        cx={vx} cy={vy}
        angle={angle2}
        armLength={armLength}
        color={arm2Color}
        strokeWidth={strokeWidth}
        bidirectional={arm2Bidirectional}
        showEndpoint
        dashed={false}
        markerId={arm2Arrow ? 'arr-arm2' : undefined}
      />

      {/* ── Vertex dot ── */}
      <circle cx={vx} cy={vy} r={4.5} fill={arm1Color} />

      {/* ── Angle label ── */}
      {showLabel && (
        <text
          x={labelPos.x}
          y={labelPos.y}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={labelFontSize}
          fontWeight="700"
          fill={arcColor}
          style={fontStyle}
        >
          {displayLabel}
        </text>
      )}

      {/* ── Escape hatch: wrapper-supplied SVG elements ── */}
      {children}
    </svg>
  );
}