// Static SVG diagrams for the supplementary-angle-identities page sections.
// Geometric diagrams freeze ReflectionDemo's ReflectionScene with mirror='y'
// at each of the six stages, using the same visibility ladder the live scene
// uses (showOrig >= 1, showMirror >= 2, showGap1 >= 3, showRefl/showGap2 >= 4,
// showNewAng >= 5) and the same colour vocabulary: deep blue cos leg, brown
// sin leg, teal reflected cos leg, violet reflected sin leg, red mirror and
// theta arc, amber gap arcs, green new-angle arc.
//
// The legend panel and the callout boxes of the live scene are chrome and are
// dropped here; the numbers they carry (theta, the gap, the new angle) are
// printed next to their arcs instead. Stage 6 adds no new geometry in the live
// tool, so it carries the concluding banner.
//
// Both the sin and the cos tab render this same scene — the explorer overrides
// only the identity bar and the metric cards for cos — so the six stages are
// shared, and only the two overview frames differ by banner.
//
// Frozen at theta = 35deg, the explorer's initialTheta; values to three
// decimals as formatVal prints them.
// Consumed by getStaticProps of the page through demoUnitFrame.

const W = 440;
const H = 330;
const CX = 220;
const CY = 170;
const R = 115;
const TH = 35;

const DEEP = '#4F46E5';   // cos leg
const BROWN = '#B45309';  // sin leg
const TEAL = '#0D9488';   // reflected cos leg
const VIOLET = '#7C3AED'; // reflected sin leg
const RED = '#DC2626';    // mirror + theta arc
const AMBER = '#D97706';  // gap arcs
const GREEN = '#16A34A';  // new-angle arc
const TEXT = '#1e3a5f';
const MUTED = '#64748b';
const FAINT = '#94a3b8';
const SOFT = '#cbd5e1';

const rad = (d) => (d * Math.PI) / 180;
const TH_R = rad(TH);
const C = Math.cos(TH_R);
const S = Math.sin(TH_R);

const PX = +(CX + R * C).toFixed(2);
const PY = +(CY - R * S).toFixed(2);
const PPX = +(2 * CX - PX).toFixed(2);   // mirror 'y': x negates, y unchanged
const PPY = PY;
const REF = Math.PI - TH_R;              // thetaToReflectedAngle for mirror 'y'

// Arc radii scaled from the live scene (R 215 -> 115).
const A_TH = 19;
const A_GAP = 49;
const A_NEW = 32;
const A_MIRROR = 35;

const txt = (t, x, y, color = TEXT, size = 12, anchor = 'middle', style = '') =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="central" font-size="${size}" fill="${color}" font-family="Georgia,serif"${style ? ` ${style}` : ''}>${t}</text>`;

const wrap = (inner) =>
  `<svg width="352" height="264" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">${inner}</svg>`;

const polar = (r, a) => `${(CX + r * Math.cos(a)).toFixed(2)} ${(CY - r * Math.sin(a)).toFixed(2)}`;

const circle = () =>
  `<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="rgba(0,0,0,0.30)" stroke-width="1"/>` +
  `<circle cx="${CX}" cy="${CY}" r="3.2" fill="${TEXT}"/>` +
  txt('O', CX - 9, CY + 15, MUTED, 12, 'end', 'font-style="italic"');

// Stage 1: the x-axis, the original triangle, P, and the theta arc.
const original = () =>
  `<line x1="${CX - R - 12}" y1="${CY}" x2="${CX + R + 12}" y2="${CY}" stroke="${RED}" stroke-width="1.4" stroke-dasharray="6 4" stroke-opacity="0.55"/>` +
  txt('x-axis', CX + R - 16, CY - 10, RED, 11, 'middle', 'font-style="italic"') +
  `<polygon points="${CX},${CY} ${PX},${CY} ${PX},${PY}" fill="${DEEP}" fill-opacity="0.06" stroke="none"/>` +
  `<line x1="${CX}" y1="${CY}" x2="${PX}" y2="${PY}" stroke="${MUTED}" stroke-width="1" stroke-opacity="0.7"/>` +
  `<line x1="${CX}" y1="${CY}" x2="${PX}" y2="${CY}" stroke="${DEEP}" stroke-width="3.2" stroke-linecap="round"/>` +
  `<line x1="${PX}" y1="${CY}" x2="${PX}" y2="${PY}" stroke="${BROWN}" stroke-width="3.2" stroke-linecap="round"/>` +
  `<polyline points="${PX - 8},${CY} ${PX - 8},${CY - 8} ${PX},${CY - 8}" fill="none" stroke="${MUTED}" stroke-width="0.9"/>` +
  `<circle cx="${PX}" cy="${PY}" r="4.5" fill="${TEXT}"/>` +
  txt('P', PX + 10, PY - 8, TEXT, 13, 'start', 'font-weight="600"') +
  `<path d="M ${CX + A_TH} ${CY} A ${A_TH} ${A_TH} 0 0 0 ${polar(A_TH, TH_R)}" fill="none" stroke="${RED}" stroke-width="1.5"/>` +
  txt('θ = 35°', CX + 46, CY + 16, RED, 10.5, 'start', 'font-style="italic"');

// Stage 2: the mirror line with its 90deg badge arc.
const mirrorLine = () =>
  `<line x1="${CX}" y1="${CY - R}" x2="${CX}" y2="${CY + R}" stroke="${RED}" stroke-width="1.7" stroke-dasharray="6 4" stroke-opacity="0.75"/>` +
  txt('y-axis', CX + 10, CY - R + 12, RED, 11, 'start', 'font-style="italic"') +
  `<path d="M ${CX + A_MIRROR} ${CY} A ${A_MIRROR} ${A_MIRROR} 0 0 0 ${polar(A_MIRROR, Math.PI / 2)}" fill="none" stroke="${RED}" stroke-width="1" stroke-opacity="0.6"/>` +
  txt('90°', CX + 40 * Math.cos(Math.PI / 4), CY - 40 * Math.sin(Math.PI / 4), RED, 10, 'middle', 'font-style="italic"');

// Gap arcs: theta up to the mirror, and the mirrored copy on the far side.
const gapArc = (fromA, toA) =>
  `<path d="M ${polar(A_GAP, fromA)} A ${A_GAP} ${A_GAP} 0 0 ${toA > fromA ? 0 : 1} ${polar(A_GAP, toA)}" fill="none" stroke="${AMBER}" stroke-width="1.5" stroke-dasharray="3 2"/>`;

const gap1 = () => gapArc(TH_R, Math.PI / 2) + txt('55°', CX + (A_GAP + 12) * Math.cos((TH_R + Math.PI / 2) / 2), CY - (A_GAP + 12) * Math.sin((TH_R + Math.PI / 2) / 2), AMBER, 10, 'middle', 'font-style="italic"');
const gap2 = () => gapArc(Math.PI / 2, REF) + txt('55°', CX + (A_GAP + 12) * Math.cos((Math.PI / 2 + REF) / 2), CY - (A_GAP + 12) * Math.sin((Math.PI / 2 + REF) / 2), AMBER, 10, 'middle', 'font-style="italic"');

// Stage 4: the reflected triangle and P'.
const reflected = () =>
  `<polygon points="${CX},${CY} ${PPX},${CY} ${PPX},${PPY}" fill="${TEAL}" fill-opacity="0.06" stroke="none"/>` +
  `<line x1="${CX}" y1="${CY}" x2="${PPX}" y2="${PPY}" stroke="${MUTED}" stroke-width="1" stroke-opacity="0.7"/>` +
  `<line x1="${CX}" y1="${CY}" x2="${PPX}" y2="${CY}" stroke="${TEAL}" stroke-width="3.2" stroke-linecap="round"/>` +
  `<line x1="${PPX}" y1="${CY}" x2="${PPX}" y2="${PPY}" stroke="${VIOLET}" stroke-width="3.2" stroke-linecap="round"/>` +
  `<polyline points="${PPX + 8},${CY} ${PPX + 8},${CY - 8} ${PPX},${CY - 8}" fill="none" stroke="${MUTED}" stroke-width="0.9"/>` +
  `<circle cx="${PPX}" cy="${PPY}" r="4.5" fill="${TEXT}"/>` +
  txt('P&#8242;', PPX - 10, PPY - 8, TEXT, 13, 'end', 'font-weight="600"') +
  `<line x1="${PX}" y1="${PY}" x2="${PPX}" y2="${PPY}" stroke="${RED}" stroke-width="1" stroke-opacity="0.45" stroke-dasharray="2 3"/>`;

// Stage 5: the full angle from the positive x-axis round to OP'.
const newAngle = () =>
  `<path d="M ${CX + A_NEW} ${CY} A ${A_NEW} ${A_NEW} 0 0 0 ${polar(A_NEW, REF)}" fill="none" stroke="${GREEN}" stroke-width="1.6"/>` +
  txt('180° − 35° = 145°', CX, CY - A_NEW - 14, GREEN, 10.5, 'middle', 'font-style="italic"');

const banner = (t) =>
  `<rect x="18" y="${H - 38}" width="${W - 36}" height="28" rx="8" fill="#f8fafc" stroke="${SOFT}"/>` +
  txt(t, W / 2, H - 24, TEXT, 12.5, 'middle', 'font-style="italic"');

function proofStep(step, bannerText) {
  let s = circle();
  if (step >= 1) s += original();
  if (step >= 2) s += mirrorLine();
  if (step >= 3) s += gap1();
  if (step >= 4) s += reflected() + gap2();
  if (step >= 5) s += newAngle();
  if (bannerText) s += banner(bannerText);
  return wrap(s);
}

// Derived-identity card frozen as its three-line equation chain.
function derivedCard(title, lines, check) {
  let y = 96;
  let body =
    `<rect x="26" y="26" width="${W - 52}" height="${H - 52}" rx="14" fill="#fff" stroke="${SOFT}"/>` +
    `<rect x="44" y="46" width="${W - 88}" height="34" rx="8" fill="#f1f5f9" stroke="${SOFT}"/>` +
    txt(title, W / 2, 63, TEXT, 14.5, 'middle', 'font-style="italic"');
  for (const [lhs, rhs, note] of lines) {
    y += 40;
    body += txt(lhs, 190, y, TEXT, 12.5, 'end', 'font-style="italic"');
    body += txt('=', 202, y, MUTED, 12.5);
    body += txt(rhs, 214, y, TEXT, 12.5, 'start', 'font-style="italic"');
    body += txt(note, W - 44, y + 14, FAINT, 9, 'end');
  }
  body += txt(check, W / 2, H - 42, DEEP, 12.5, 'middle', 'font-style="italic"');
  return wrap(body);
}

const supplementaryAngleDiagrams = {
  // The six stages are shared by the sin and the cos tab.
  steps: [
    proofStep(1, null),
    proofStep(2, null),
    proofStep(3, null),
    proofStep(4, null),
    proofStep(5, null),
    proofStep(6, 'P′ = (−cos θ, sin θ) = (cos(π − θ), sin(π − θ))'),
  ],
  sinOverview: proofStep(6, 'sin(π − θ) = sin θ   ·   0.574 = 0.574'),
  cosOverview: proofStep(6, 'cos(π − θ) = −cos θ   ·   −0.819 = −0.819'),
  tan: derivedCard('tan(π − θ) = −tan θ', [
    ['tan(π − θ)', 'sin(π − θ) / cos(π − θ)', 'definition'],
    ['', 'sin θ / (−cos θ)', 'sin(π − θ) = sin θ, cos(π − θ) = −cos θ'],
    ['', '−tan θ', 'simplify'],
  ], 'at θ = 35° :  tan(π − θ) = −0.700 = −tan θ'),
  csc: derivedCard('csc(π − θ) = csc θ', [
    ['csc(π − θ)', '1 / sin(π − θ)', 'definition'],
    ['', '1 / sin θ', 'sin(π − θ) = sin θ'],
    ['', 'csc θ', 'simplify'],
  ], 'at θ = 35° :  csc(π − θ) = 1.743 = csc θ'),
  sec: derivedCard('sec(π − θ) = −sec θ', [
    ['sec(π − θ)', '1 / cos(π − θ)', 'definition'],
    ['', '1 / (−cos θ)', 'cos(π − θ) = −cos θ'],
    ['', '−sec θ', 'simplify'],
  ], 'at θ = 35° :  sec(π − θ) = −1.221 = −sec θ'),
  cot: derivedCard('cot(π − θ) = −cot θ', [
    ['cot(π − θ)', 'cos(π − θ) / sin(π − θ)', 'definition'],
    ['', '(−cos θ) / sin θ', 'cos(π − θ) = −cos θ, sin(π − θ) = sin θ'],
    ['', '−cot θ', 'simplify'],
  ], 'at θ = 35° :  cot(π − θ) = −1.428 = −cot θ'),
};

export default supplementaryAngleDiagrams;
