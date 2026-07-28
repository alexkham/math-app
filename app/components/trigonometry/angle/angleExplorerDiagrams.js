// Static SVG diagrams for the Angle Explorer page sections.
// Each diagram freezes the AngleExplorer visual tool in one concrete state,
// replicating the component's geometry: center (200,200), radius 120,
// reference grid, initial ray along +x, terminal ray, blue angle arc (r=40).
// Consumed by getStaticProps of the angle-explorer page; the SVG strings are
// interpolated into section content and rendered by processContent's SVG pass.

const CX = 200;
const CY = 200;
const R = 120;

const toRad = (deg) => (deg * Math.PI) / 180;
const px = (deg, r) => +(CX + r * Math.cos(toRad(deg))).toFixed(2);
const py = (deg, r) => +(CY - r * Math.sin(toRad(deg))).toFixed(2);

const grid = () =>
  `<g opacity="0.3">` +
  `<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="#ddd" stroke-width="1"/>` +
  `<line x1="${CX - R - 20}" y1="${CY}" x2="${CX + R + 20}" y2="${CY}" stroke="#ddd"/>` +
  `<line x1="${CX}" y1="${CY - R - 20}" x2="${CX}" y2="${CY + R + 20}" stroke="#ddd"/>` +
  `<text x="${CX + 60}" y="${CY - 60}" fill="#999" font-size="12">I</text>` +
  `<text x="${CX - 70}" y="${CY - 60}" fill="#999" font-size="12">II</text>` +
  `<text x="${CX - 70}" y="${CY + 70}" fill="#999" font-size="12">III</text>` +
  `<text x="${CX + 60}" y="${CY + 70}" fill="#999" font-size="12">IV</text>` +
  `</g>`;

const initialRay = () =>
  `<line x1="${CX}" y1="${CY}" x2="${CX + R + 20}" y2="${CY}" stroke="#000" stroke-width="2"/>`;

const ray = (deg, color = '#000', dash = '', r = R) =>
  `<line x1="${CX}" y1="${CY}" x2="${px(deg, r)}" y2="${py(deg, r)}" stroke="${color}" stroke-width="2"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// Angle arc from 0 up to deg, sweeping counterclockwise (matches the component).
const angleArc = (deg, r = 40, color = '#0066cc', width = 3) => {
  if (deg <= 0) return '';
  if (deg >= 360) {
    return `<circle cx="${CX}" cy="${CY}" r="${r}" fill="none" stroke="${color}" stroke-width="${width}"/>`;
  }
  return `<path d="M ${CX + r} ${CY} A ${r} ${r} 0 ${deg > 180 ? 1 : 0} 0 ${px(deg, r)} ${py(deg, r)}" fill="none" stroke="${color}" stroke-width="${width}"/>`;
};

// Dashed arc between two angles (a < b), counterclockwise.
const arcBetween = (a, b, r, color, dash = '5,5', width = 2) =>
  `<path d="M ${px(a, r)} ${py(a, r)} A ${r} ${r} 0 ${b - a > 180 ? 1 : 0} 0 ${px(b, r)} ${py(b, r)}" fill="none" stroke="${color}" stroke-width="${width}" stroke-dasharray="${dash}"/>`;

const label = (text, x, y, color = '#0066cc', size = 16) =>
  `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="bold">${text}</text>`;

const vertex = () => `<circle cx="${CX}" cy="${CY}" r="4" fill="#000"/>`;

const wrap = (inner) =>
  `<svg width="300" height="300" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #ccc;background:#fff;border-radius:5px;max-width:100%;display:block;margin:12px auto">${inner}</svg>`;

// Base frozen state: grid + rays + arc + angle label + vertex.
const base = (deg, extras = '') =>
  wrap(
    grid() +
      initialRay() +
      ray(deg) +
      angleArc(deg) +
      label(`${deg}°`, 250, 190) +
      extras +
      vertex()
  );

// Quarter-disc shading for a quadrant (1-4).
const quadrantFill = (q) => {
  const start = { 1: 0, 2: 90, 3: 180, 4: 270 }[q];
  return `<path d="M ${CX} ${CY} L ${px(start, R)} ${py(start, R)} A ${R} ${R} 0 0 0 ${px(start + 90, R)} ${py(start + 90, R)} Z" fill="#0066cc" opacity="0.08"/>`;
};

// ---- Angle types (representative non-special angles where possible) ----

const rightAngleMark = `<path d="M ${CX + 22} ${CY} L ${CX + 22} ${CY - 22} L ${CX} ${CY - 22}" fill="none" stroke="#0066cc" stroke-width="2"/>`;

const types = {
  acute: base(35),
  right: wrap(grid() + initialRay() + ray(90) + angleArc(90) + rightAngleMark + label('90°', 250, 190) + vertex()),
  obtuse: base(110),
  straight: base(180),
  reflex: base(250),
};

// ---- Quadrants (shaded region + representative angle + reference-angle arc) ----

const quadrants = {
  1: wrap(grid() + quadrantFill(1) + initialRay() + ray(50) + angleArc(50) + label('50°', 250, 190) + vertex()),
  2: wrap(grid() + quadrantFill(2) + initialRay() + ray(140) + angleArc(140) + arcBetween(140, 180, 55, '#e67e22') + label('140°', 250, 190) + label('ref 40°', 108, 178, '#e67e22', 13) + vertex()),
  3: wrap(grid() + quadrantFill(3) + initialRay() + ray(230) + angleArc(230) + arcBetween(180, 230, 55, '#e67e22') + label('230°', 250, 190) + label('ref 50°', 108, 238, '#e67e22', 13) + vertex()),
  4: wrap(grid() + quadrantFill(4) + initialRay() + ray(320) + angleArc(320) + arcBetween(320, 360, 55, '#e67e22') + label('320°', 250, 190) + label('ref 40°', 262, 238, '#e67e22', 13) + vertex()),
};

// ---- Special angles (frozen exactly as the tool renders each preset) ----

const SPECIAL_DEGREES = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360];

const specials = {};
SPECIAL_DEGREES.forEach((deg) => {
  specials[deg] = deg === 90
    ? wrap(grid() + initialRay() + ray(90) + angleArc(90) + rightAngleMark + label('90°', 250, 190) + vertex())
    : base(deg);
});

// ---- Concepts (frozen states with the tool's overlay rendering) ----

const concepts = {
  // 35° with the green complementary overlay, as the "Show Complementary Angle" toggle renders it.
  complementary: wrap(
    grid() + initialRay() + ray(35) + angleArc(35) +
    ray(90, '#28a745', '8,4') +
    arcBetween(35, 90, 50, '#28a745') +
    label('35°', 250, 190) + label('55°', 230, 120, '#28a745', 14) +
    vertex()
  ),
  // 110° with the red supplementary overlay, as the "Show Supplementary Angle" toggle renders it.
  supplementary: wrap(
    grid() + initialRay() + ray(110) + angleArc(110) +
    ray(180, '#dc3545', '8,4') +
    arcBetween(110, 180, 70, '#dc3545') +
    label('110°', 250, 190) + label('70°', 90, 190, '#dc3545', 14) +
    vertex()
  ),
  // 140° with its reference angle marked against the negative x-axis.
  reference: wrap(
    grid() + initialRay() + ray(140) + angleArc(140) +
    arcBetween(140, 180, 55, '#e67e22') +
    label('140°', 250, 190) + label('ref 40°', 100, 175, '#e67e22', 14) +
    vertex()
  ),
  // 45° and its coterminal partner −315°: same terminal ray, opposite sweeps.
  coterminal: wrap(
    grid() + initialRay() + ray(45) + angleArc(45) +
    `<path d="M ${CX + 60} ${CY} A 60 60 0 1 1 ${px(45, 60)} ${py(45, 60)}" fill="none" stroke="#7b1fa2" stroke-width="2" stroke-dasharray="6,4"/>` +
    label('45°', 250, 190) + label('−315°', 150, 290, '#7b1fa2', 14) +
    vertex()
  ),
  // 50° with the sine and cosine of the terminal point marked on the unit circle.
  trigonometric: wrap(
    grid() + initialRay() + ray(50) + angleArc(50) +
    `<line x1="${px(50, R)}" y1="${py(50, R)}" x2="${px(50, R)}" y2="${CY}" stroke="#dc3545" stroke-width="3" stroke-dasharray="5,3"/>` +
    `<line x1="${CX}" y1="${CY}" x2="${px(50, R)}" y2="${CY}" stroke="#28a745" stroke-width="3"/>` +
    `<circle cx="${px(50, R)}" cy="${py(50, R)}" r="5" fill="#0066cc"/>` +
    label('50°', 250, 185) + label('sin θ', px(50, R) + 8, (py(50, R) + CY) / 2, '#dc3545', 13) + label('cos θ', CX + 25, CY + 18, '#28a745', 13) +
    vertex()
  ),
};

const angleExplorerDiagrams = { types, quadrants, specials, concepts };

export default angleExplorerDiagrams;
