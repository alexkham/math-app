// Static SVG diagrams for the Angle Types page sections.
// Each diagram freezes one scene of TrigoAngleTypesExplorer in a concrete state,
// replicating the component's geometry (viewBox 0 0 360 360, vertex/center at
// 180,180) and its color language: blue active, amber partner, green right/plus,
// red obtuse/minus, purple shared arm, gray guides. Consumed by getStaticProps
// of the angle-types page via processContent's inline-SVG pass.

const SZ = 360;
const VX = 180;
const VY = 180;
const ARM = 130;

const toRad = (d) => (d * Math.PI) / 180;
const px = (r, a) => +(VX + r * Math.cos(toRad(a))).toFixed(2);
const py = (r, a) => +(VY - r * Math.sin(toRad(a))).toFixed(2);

const BLUE = '#2563eb';
const AMBER = '#d97706';
const GREEN = '#16a34a';
const RED = '#dc2626';
const PURPLE = '#9333ea';
const GRAY = '#94a3b8';
const BBG = 'rgba(37,99,235,0.11)';
const ABG = 'rgba(217,119,6,0.11)';

const ccw = (f, t) => (((t - f) % 360) + 360) % 360;

const arcPath = (r, f, t) =>
  `M ${px(r, f)} ${py(r, f)} A ${r} ${r} 0 ${ccw(f, t) > 180 ? 1 : 0} 0 ${px(r, t)} ${py(r, t)}`;
const arcPathCW = (r, f, t) =>
  `M ${px(r, f)} ${py(r, f)} A ${r} ${r} 0 ${ccw(t, f) > 180 ? 1 : 0} 1 ${px(r, t)} ${py(r, t)}`;
const secPath = (r, f, t) => `${arcPath(r, f, t)} L ${VX} ${VY} Z`;
const secPathCW = (r, f, t) => `${arcPathCW(r, f, t)} L ${VX} ${VY} Z`;

const boxPath = (a1, a2, s = 13) => {
  const p1 = [px(s, a1), py(s, a1)];
  const p2 = [px(s, a2), py(s, a2)];
  return `M ${p1[0]} ${p1[1]} L ${+(p1[0] + p2[0] - VX).toFixed(2)} ${+(p1[1] + p2[1] - VY).toFixed(2)} L ${p2[0]} ${p2[1]}`;
};

const ray = (a, color, dash = '', r = ARM, w = 2.5) =>
  `<line x1="${VX}" y1="${VY}" x2="${px(r, a)}" y2="${py(r, a)}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

const label = (text, x, y, color, size = 14) =>
  `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="${size}" font-weight="700" fill="${color}" font-family="system-ui,sans-serif">${text}</text>`;

const labelAt = (text, r, a, color, size = 14) => label(text, px(r, a), py(r, a), color, size);

const vertexDot = (color = BLUE) => `<circle cx="${VX}" cy="${VY}" r="5" fill="${color}"/>`;

const wrap = (inner) =>
  `<svg width="300" height="300" viewBox="0 0 ${SZ} ${SZ}" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #e2e8f0;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">${inner}</svg>`;

// Coordinate axes with dashed unit circle, as in the Standard/Reference scenes.
const axes = () =>
  `<line x1="14" y1="${VY}" x2="${SZ - 14}" y2="${VY}" stroke="${GRAY}" stroke-width="1.5"/>` +
  `<line x1="${VX}" y1="${SZ - 14}" x2="${VX}" y2="14" stroke="${GRAY}" stroke-width="1.5"/>` +
  `<circle cx="${VX}" cy="${VY}" r="120" fill="none" stroke="${GRAY}" stroke-width="1" stroke-dasharray="3 4" opacity="0.45"/>`;

// ---- Basic angle types, frozen at the scene's own preset angles ----

const typeDiagram = (deg, color, bg) => {
  let arc;
  if (deg === 0) arc = '';
  else if (deg === 90) arc = `<path d="${boxPath(0, 90)}" fill="none" stroke="${color}" stroke-width="2.5"/>`;
  else if (deg >= 360) arc = `<circle cx="${VX}" cy="${VY}" r="50" fill="none" stroke="${color}" stroke-width="2.5"/>`;
  else arc = `<path d="${arcPath(50, 0, deg)}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>`;
  const sector = deg > 0 && deg < 360 ? `<path d="${secPath(84, 0, deg)}" fill="${bg}" stroke="none"/>` : '';
  return wrap(
    sector + arc +
    ray(0, GRAY) + ray(deg % 360, color) +
    labelAt(`${deg}°`, 105, deg === 0 ? 20 : Math.min(deg / 2, 180), color) +
    vertexDot(color)
  );
};

const types = {
  zero: typeDiagram(0, '#64748b', 'rgba(100,116,139,0.11)'),
  acute: typeDiagram(45, BLUE, BBG),
  right: typeDiagram(90, GREEN, 'rgba(22,163,74,0.15)'),
  obtuse: typeDiagram(130, AMBER, ABG),
  straight: typeDiagram(180, RED, 'rgba(220,38,38,0.11)'),
  reflex: typeDiagram(270, PURPLE, 'rgba(147,51,234,0.11)'),
  full: typeDiagram(360, '#0891b2', 'rgba(8,145,178,0.11)'),
};

// ---- Complementary / Supplementary, matching the two-sector scene ----

const pairDiagram = (alpha, limit) => {
  const beta = limit - alpha;
  return wrap(
    `<path d="${secPath(84, 0, alpha)}" fill="${BBG}" stroke="none"/>` +
    `<path d="${secPath(84, alpha, limit)}" fill="${ABG}" stroke="none"/>` +
    `<path d="${arcPath(60, 0, alpha)}" fill="none" stroke="${BLUE}" stroke-width="2.5" stroke-linecap="round"/>` +
    `<path d="${arcPath(84, alpha, limit)}" fill="none" stroke="${AMBER}" stroke-width="2.5" stroke-linecap="round"/>` +
    ray(0, GRAY) + ray(limit, GRAY) + ray(alpha, BLUE) +
    labelAt(`${alpha}°`, 80, alpha / 2, BLUE) +
    labelAt(`${beta}°`, 100, alpha + beta / 2, AMBER) +
    vertexDot(BLUE)
  );
};

// ---- Vertical / Adjacent ----

const verticalDiagram = (theta) => wrap(
  `<path d="${secPath(50, 0, theta)}" fill="${BBG}" stroke="none"/>` +
  `<path d="${secPath(50, 180, 180 + theta)}" fill="${BBG}" stroke="none"/>` +
  `<path d="${secPath(50, theta, 180)}" fill="${ABG}" stroke="none"/>` +
  `<path d="${secPath(50, 180 + theta, 360)}" fill="${ABG}" stroke="none"/>` +
  `<line x1="${px(ARM, 180)}" y1="${py(ARM, 180)}" x2="${px(ARM, 0)}" y2="${py(ARM, 0)}" stroke="${GRAY}" stroke-width="2.5" stroke-linecap="round"/>` +
  `<line x1="${px(ARM, 180 + theta)}" y1="${py(ARM, 180 + theta)}" x2="${px(ARM, theta)}" y2="${py(ARM, theta)}" stroke="${BLUE}" stroke-width="2.5" stroke-linecap="round"/>` +
  labelAt(`${theta}°`, 72, theta / 2, BLUE) +
  labelAt(`${180 - theta}°`, 72, theta + (180 - theta) / 2, AMBER) +
  labelAt(`${theta}°`, 72, 180 + theta / 2, BLUE) +
  labelAt(`${180 - theta}°`, 72, 180 + theta + (180 - theta) / 2, AMBER) +
  vertexDot(BLUE)
);

const adjacentDiagram = (alpha, beta) => wrap(
  `<path d="${secPath(79, 0, alpha)}" fill="${BBG}" stroke="none"/>` +
  `<path d="${secPath(79, alpha, alpha + beta)}" fill="${ABG}" stroke="none"/>` +
  `<path d="${arcPath(58, 0, alpha)}" fill="none" stroke="${BLUE}" stroke-width="2.5" stroke-linecap="round"/>` +
  `<path d="${arcPath(79, alpha, alpha + beta)}" fill="none" stroke="${AMBER}" stroke-width="2.5" stroke-linecap="round"/>` +
  ray(0, GRAY) + ray(alpha + beta, GRAY) +
  ray(alpha, PURPLE, '6 3') +
  labelAt(`${alpha}°`, 78, alpha / 2, BLUE) +
  labelAt(`${beta}°`, 95, alpha + beta / 2, AMBER) +
  vertexDot(PURPLE)
);

// ---- Standard position quadrants ----

const QCOL = { 1: BLUE, 2: GREEN, 3: AMBER, 4: RED };

const standardDiagram = (deg, q) => {
  const c = QCOL[q];
  const romans = ['I', 'II', 'III', 'IV'];
  const qa = [45, 135, 225, 315];
  return wrap(
    axes() +
    `<path d="${secPath(53, 0, deg)}" fill="${BBG}" stroke="none"/>` +
    `<path d="${arcPath(53, 0, deg)}" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>` +
    romans.map((rm, i) => labelAt(rm, 66, qa[i], rm === romans[q - 1] ? c : GRAY, 13)).join('') +
    ray(0, GRAY, '', 142, 2) + ray(deg, c, '', 142) +
    labelAt(`${deg}°`, 96, deg / 2, c, 13) +
    vertexDot(c)
  );
};

// ---- Reference angle quadrants ----

const referenceDiagram = (deg, q) => {
  const c = QCOL[q];
  const refSpan = { 1: [0, deg], 2: [deg, 180], 3: [180, deg], 4: [deg, 360] }[q];
  const refVal = { 1: deg, 2: 180 - deg, 3: deg - 180, 4: 360 - deg }[q];
  const mid = refSpan[0] + ccw(refSpan[0], refSpan[1]) / 2;
  return wrap(
    axes() +
    `<path d="${secPath(62, 0, deg)}" fill="${BBG}" stroke="none"/>` +
    `<path d="${arcPath(62, 0, deg)}" fill="none" stroke="${BLUE}" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>` +
    `<path d="${secPath(41, refSpan[0], refSpan[1])}" fill="${ABG}" stroke="none"/>` +
    `<path d="${arcPath(41, refSpan[0], refSpan[1])}" fill="none" stroke="${AMBER}" stroke-width="2.5" stroke-linecap="round"/>` +
    ray(0, GRAY, '', 142, 2) + ray(deg, c, '', 142) +
    labelAt(`${deg}°`, 80, deg / 2, BLUE, 12) +
    labelAt(`ref ${refVal}°`, 108, mid, AMBER, 13) +
    vertexDot(c)
  );
};

// ---- Special angles ring ----

const SPECIALS = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];

const specialDiagram = (deg) => wrap(
  axes() +
  SPECIALS.map((a) => `<circle cx="${px(120, a)}" cy="${py(120, a)}" r="${a === deg ? 8 : 4}" fill="${a === deg ? BLUE : GRAY}" opacity="${a === deg ? 1 : 0.55}"/>`).join('') +
  (deg > 0 ? `<path d="${arcPath(44, 0, deg)}" fill="none" stroke="${BLUE}" stroke-width="2.5" stroke-linecap="round"/>` : '') +
  ray(deg, BLUE, '', 120) +
  labelAt(`${deg}°`, deg === 0 ? 88 : 150, deg === 0 ? 16 : deg + 12, BLUE, 15) +
  vertexDot(BLUE)
);

// ---- Directed angles ----

const directedPositive = (deg) => wrap(
  axes() +
  `<path d="${secPath(53, 0, deg)}" fill="${BBG}" stroke="none"/>` +
  `<path d="${arcPath(53, 0, deg)}" fill="none" stroke="${BLUE}" stroke-width="2.5" stroke-linecap="round"/>` +
  ray(0, GRAY, '', 142, 2) + ray(deg, BLUE, '', 142) +
  labelAt(`+${deg}° (CCW)`, 100, deg / 2, BLUE, 13) +
  vertexDot(BLUE)
);

const directedNegative = (deg) => wrap(
  axes() +
  `<path d="${secPathCW(53, 0, 360 - deg)}" fill="${ABG}" stroke="none"/>` +
  `<path d="${arcPathCW(53, 0, 360 - deg)}" fill="none" stroke="${AMBER}" stroke-width="2.5" stroke-linecap="round"/>` +
  ray(0, GRAY, '', 142, 2) + ray(-deg, AMBER, '', 142) +
  labelAt(`−${deg}° (CW)`, 100, -(deg / 2), AMBER, 13) +
  vertexDot(AMBER)
);

// ---- Coterminal ----

const coterminalDiagram = (deg) => wrap(
  axes() +
  `<path d="${arcPath(44, 0, deg)}" fill="none" stroke="${BLUE}" stroke-width="2.5" stroke-linecap="round"/>` +
  `<circle cx="${VX}" cy="${VY}" r="62" fill="none" stroke="${PURPLE}" stroke-width="2" stroke-dasharray="6 4" opacity="0.8"/>` +
  `<path d="${arcPath(80, 0, deg)}" fill="none" stroke="${PURPLE}" stroke-width="2" stroke-dasharray="6 4"/>` +
  ray(0, GRAY, '', 142, 2) + ray(deg, BLUE, '', 142) +
  labelAt(`${deg}°`, 30, deg / 2, BLUE, 13) +
  labelAt(`${deg + 360}°`, 102, deg + 14, PURPLE, 13) +
  vertexDot(BLUE)
);

const trigoAngleTypesDiagrams = {
  types,
  compSupp: {
    overview: pairDiagram(35, 90),
    complementary: pairDiagram(35, 90),
    supplementary: pairDiagram(110, 180),
  },
  vertical: verticalDiagram(55),
  adjacent: adjacentDiagram(65, 80),
  standard: {
    overview: standardDiagram(55, 1),
    1: standardDiagram(50, 1),
    2: standardDiagram(140, 2),
    3: standardDiagram(230, 3),
    4: standardDiagram(320, 4),
  },
  reference: {
    overview: referenceDiagram(130, 2),
    1: referenceDiagram(50, 1),
    2: referenceDiagram(140, 2),
    3: referenceDiagram(230, 3),
    4: referenceDiagram(320, 4),
  },
  coterminal: coterminalDiagram(45),
  specials: SPECIALS.reduce((acc, d) => { acc[d] = specialDiagram(d); return acc; }, {}),
  specialOverview: specialDiagram(30),
  directed: {
    overview: directedPositive(45),
    positive: directedPositive(45),
    negative: directedNegative(45),
  },
};

export default trigoAngleTypesDiagrams;
