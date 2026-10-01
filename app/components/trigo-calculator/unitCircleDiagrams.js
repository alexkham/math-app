// Static SVG diagrams for the legacy Unit Circle page (/visual-tools/unit-circle).
// Each diagram freezes the UnitCircle component in one concrete state and
// replicates its geometry exactly: size 336, center 168, radius 134.4,
// leftShift 50, extraPadding 40, viewBox "-90 -40 426 416"; grid at
// +/-0.5 and +/-1, quadrant numerals, arrowed axes, faint circle, blue sine
// leg, red cosine leg, green angle arc (r = 40) with its theta label, the 16
// special points with their degree/radian labels, the blue radius and point,
// the sin(theta)/cos(theta) leg labels and, for the hover states, the white
// info box the component shows on hover.
//
// Function and rotation states carry an extra band under the circle that
// reproduces the component's angle display and six-value table row, so the
// frozen picture shows what the tool shows.
//
// Consumed by getStaticProps of the unit-circle page through demoUnitFrame.
// Line 1 pass, 2026-09-23. New file; the component is untouched by it.

const SIZE = 336;
const CENTER = SIZE / 2;
const RADIUS = SIZE * 0.4;
const PAD = 17;
const SHIFT = 50;
const EXTRA = 40;
const CX = CENTER - SHIFT; // 118
const CY = CENTER;         // 168

const toRad = (deg) => (deg * Math.PI) / 180;
const f2 = (v) => +v.toFixed(2);
const px = (deg, r = RADIUS) => f2(CX + r * Math.cos(toRad(deg)));
const py = (deg, r = RADIUS) => f2(CY - r * Math.sin(toRad(deg)));

const SPECIAL = [
  [0, '0', [1, 0], '(cos 0° = 1, sin 0° = 0)'],
  [30, 'π/6', [Math.sqrt(3) / 2, 1 / 2], '(cos 30° = √3/2, sin 30° = 1/2)'],
  [45, 'π/4', [Math.SQRT1_2, Math.SQRT1_2], '(cos 45° = √2/2, sin 45° = √2/2)'],
  [60, 'π/3', [1 / 2, Math.sqrt(3) / 2], '(cos 60° = 1/2, sin 60° = √3/2)'],
  [90, 'π/2', [0, 1], '(cos 90° = 0, sin 90° = 1)'],
  [120, '2π/3', [-1 / 2, Math.sqrt(3) / 2], '(cos 120° = -1/2, sin 120° = √3/2)'],
  [135, '3π/4', [-Math.SQRT1_2, Math.SQRT1_2], '(cos 135° = -√2/2, sin 135° = √2/2)'],
  [150, '5π/6', [-Math.sqrt(3) / 2, 1 / 2], '(cos 150° = -√3/2, sin 150° = 1/2)'],
  [180, 'π', [-1, 0], '(cos 180° = -1, sin 180° = 0)'],
  [210, '7π/6', [-Math.sqrt(3) / 2, -1 / 2], '(cos 210° = -√3/2, sin 210° = -1/2)'],
  [225, '5π/4', [-Math.SQRT1_2, -Math.SQRT1_2], '(cos 225° = -√2/2, sin 225° = -√2/2)'],
  [240, '4π/3', [-1 / 2, -Math.sqrt(3) / 2], '(cos 240° = -1/2, sin 240° = -√3/2)'],
  [270, '3π/2', [0, -1], '(cos 270° = 0, sin 270° = -1)'],
  [300, '5π/3', [1 / 2, -Math.sqrt(3) / 2], '(cos 300° = 1/2, sin 300° = -√3/2)'],
  [315, '7π/4', [Math.SQRT1_2, -Math.SQRT1_2], '(cos 315° = √2/2, sin 315° = -√2/2)'],
  [330, '11π/6', [Math.sqrt(3) / 2, -1 / 2], '(cos 330° = √3/2, sin 330° = -1/2)'],
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const grid = () => {
  let g = '<g stroke="gray" stroke-width="0.5" opacity="0.2">';
  [-1, -0.5, 0.5, 1].forEach((f) => {
    const vx = f2(CENTER + RADIUS * f - SHIFT);
    const hy = f2(CENTER + RADIUS * f);
    g += `<line x1="${vx}" y1="${PAD}" x2="${vx}" y2="${SIZE - PAD}"/>`;
    g += `<line x1="${PAD - SHIFT}" y1="${hy}" x2="${SIZE - PAD - SHIFT}" y2="${hy}"/>`;
  });
  return g + '</g>';
};

const numerals = () => {
  const a = f2(CX + RADIUS / 2 - 10), b = f2(CX - RADIUS / 2 + 10);
  const t = f2(CY - RADIUS / 2 + 10), u = f2(CY + RADIUS / 2 - 10);
  const T = (x, y, s) => `<text x="${x}" y="${y}" font-size="20" fill="black" text-anchor="middle">${s}</text>`;
  return T(a, t, 'I') + T(b, t, 'II') + T(b, u, 'III') + T(a, u, 'IV');
};

const axes = () =>
  '<defs><marker id="uc-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="black"/></marker></defs>' +
  `<line x1="${PAD - SHIFT}" y1="${CY}" x2="${SIZE - PAD - SHIFT}" y2="${CY}" stroke="black" stroke-width="1" marker-end="url(#uc-arrow)"/>` +
  `<line x1="${CX}" y1="${SIZE - PAD}" x2="${CX}" y2="${PAD}" stroke="black" stroke-width="1" marker-end="url(#uc-arrow)"/>` +
  `<circle cx="${CX}" cy="${CY}" r="${f2(RADIUS)}" fill="none" stroke="black" stroke-width="1" opacity="0.3"/>` +
  `<text x="${SIZE - PAD - SHIFT - 8}" y="${CY - 8}" font-size="16" fill="black">x</text>` +
  `<text x="${CX + 8}" y="${PAD + 8}" font-size="16" fill="black">y</text>`;

const specialPoints = () =>
  SPECIAL.map(([deg, rad, [cx, cy]]) => {
    const sx = f2(CX + RADIUS * cx), sy = f2(CY - RADIUS * cy);
    const d = 27, c = Math.cos(toRad(deg)), s = Math.sin(toRad(deg));
    const lx = f2(sx + c * d + (deg === 180 ? -10 : deg === 0 ? 10 : 0));
    const ly = f2(sy - s * d);
    return `<circle cx="${sx}" cy="${sy}" r="3" fill="blue" opacity="0.5"/>` +
      `<text x="${lx}" y="${ly}" font-size="11" fill="black" text-anchor="middle" dominant-baseline="middle">${deg}° (${rad})</text>`;
  }).join('');

// Arc from 0 to deg counterclockwise at r = 40, as describeArc() draws it.
const arc = (deg) => {
  if (deg <= 0) return '';
  const large = deg <= 180 ? 0 : 1;
  return `<path d="M ${f2(CX + 40)} ${CY} A 40 40 0 ${large} 0 ${px(deg, 40)} ${py(deg, 40)}" stroke="green" fill="none" stroke-width="1"/>`;
};

const angleParts = (deg) => {
  const x = px(deg), y = py(deg);
  return (
    `<line x1="${x}" y1="${y}" x2="${x}" y2="${CY}" stroke="blue" stroke-width="1"/>` +
    `<line x1="${CX}" y1="${CY}" x2="${x}" y2="${CY}" stroke="red" stroke-width="1"/>` +
    arc(deg) +
    `<text x="${px(deg / 2, 30)}" y="${py(deg / 2, 30)}" fill="green" font-size="12" dominant-baseline="middle" text-anchor="middle">θ</text>` +
    specialPoints() +
    `<line x1="${CX}" y1="${CY}" x2="${x}" y2="${y}" stroke="blue" stroke-width="2"/>` +
    `<circle cx="${x}" cy="${y}" r="5" fill="blue"/>` +
    `<text x="${f2(x + 5)}" y="${f2((y + CY) / 2)}" fill="blue" font-size="11" dominant-baseline="middle">sin(θ)</text>` +
    `<text x="${f2((x + CX) / 2)}" y="${CY + 15}" fill="red" font-size="11" text-anchor="middle">cos(θ)</text>`
  );
};

const hoverBox = (deg, rad, label) =>
  `<rect x="${8 - SHIFT}" y="8" width="168" height="70" fill="white" stroke="black" stroke-width="1" opacity="0.9"/>` +
  `<text x="${16 - SHIFT}" y="28" font-size="11" fill="black">Angle: ${deg}° = ${rad}</text>` +
  `<text x="${16 - SHIFT}" y="45" font-size="11" fill="black">Coordinates:</text>` +
  `<text x="${16 - SHIFT}" y="62" font-size="11" fill="black">${esc(label)}</text>`;

const values = (deg) => {
  const r = toRad(deg), s = Math.sin(r), c = Math.cos(r), t = Math.tan(r);
  const nz = (v) => Math.abs(v) >= 1e-10;
  const fmt = (v) => (v === null ? 'Undefined' : v.toFixed(5));
  return {
    sin: fmt(s), cos: fmt(c),
    tan: fmt(nz(c) ? t : null), csc: fmt(nz(s) ? 1 / s : null),
    sec: fmt(nz(c) ? 1 / c : null), cot: fmt(nz(s) ? 1 / t : null),
  };
};

const formatFullAngle = (deg) => {
  const rounds = Math.floor(deg / 360);
  const rem = ((deg % 360) + 360) % 360;
  return rounds === 0 ? `${rem.toFixed(1)}°` : `${rounds} rounds + ${rem.toFixed(1)}°`;
};

// Band under the circle: the angle display and the six-value table row.
const band = (inputDeg, highlight) => {
  const v = values(inputDeg);
  const top = SIZE + EXTRA - 6; // 370
  const x0 = PAD - SHIFT, w = (SIZE - 2 * PAD) / 6;
  let g = `<text x="${x0}" y="${top}" font-size="12" fill="#1e293b">Angle: ${formatFullAngle(inputDeg)}</text>`;
  ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'].forEach((fn, i) => {
    const x = f2(x0 + i * w);
    const hl = fn === highlight;
    g += `<rect x="${x}" y="${top + 10}" width="${f2(w)}" height="20" fill="${hl ? '#0b4fb3' : '#1d6bd8'}" stroke="#ddd"/>`;
    g += `<text x="${f2(x + w / 2)}" y="${top + 24}" font-size="11" fill="#eee" text-anchor="middle"${hl ? ' font-weight="bold"' : ''}>${fn}</text>`;
    g += `<rect x="${x}" y="${top + 30}" width="${f2(w)}" height="22" fill="${hl ? '#e0ecff' : 'white'}" stroke="#ddd"/>`;
    g += `<text x="${f2(x + w / 2)}" y="${top + 45}" font-size="10" fill="#1e293b" text-anchor="middle"${hl ? ' font-weight="bold"' : ''}>${v[fn]}</text>`;
  });
  return g;
};

const wrap = (inner, tall = false) => {
  const h = tall ? SIZE + EXTRA * 2 + 60 : SIZE + EXTRA * 2;
  const vb = `-${SHIFT + EXTRA} -${EXTRA} ${SIZE + SHIFT + EXTRA} ${h}`;
  return `<svg width="360" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #ccc;background:#fff;border-radius:5px;max-width:100%;display:block;margin:12px auto">${inner}</svg>`;
};

const scene = (deg) => grid() + numerals() + axes() + angleParts(deg);

// ---- Special angles: the tool parked on the point, hover box open ----
const specials = {};
SPECIAL.forEach(([deg, rad, , label]) => {
  specials[deg] = wrap(scene(deg) + hoverBox(deg, rad, label));
});

// ---- Quadrants: a representative non-special angle in each ----
const QUADRANT_DEG = { 1: 50, 2: 140, 3: 230, 4: 320 };
const quadrants = {};
Object.entries(QUADRANT_DEG).forEach(([q, deg]) => {
  quadrants[q] = wrap(scene(deg) + band(deg, null), true);
});

// ---- The six functions: table row shown with the function's column highlighted ----
const FUNCTION_DEG = { sin: 50, cos: 50, tan: 50, csc: 30, sec: 60, cot: 45 };
const functions = {};
Object.entries(FUNCTION_DEG).forEach(([fn, deg]) => {
  functions[fn] = wrap(scene(deg) + band(deg, fn), true);
});

// ---- Rotations beyond 360: the display reads "1 rounds + 30.0°" ----
const rotations = {
  beyond360: wrap(scene(30) + band(390, null), true),
};

const unitCircleDiagrams = { specials, quadrants, functions, rotations, SPECIAL, values };

export default unitCircleDiagrams;
