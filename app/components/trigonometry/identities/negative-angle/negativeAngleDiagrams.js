// Static SVG diagrams for the negative-angle-identities page sections.
// Geometric diagrams freeze NegativeAngleDemo's NegativeAngleCore at each of
// the three scenario steps, honouring its coordMode switch: the sine proof runs
// in 'sinOnly' (no cos leg, y-component coord labels), the cosine proof in
// 'cosOnly' (no vertical sin legs or right-angle marks, x-component labels plus
// the faint vertical connector showing P and P' share one x). Colors follow the
// live component: amber #B45309 for the sin legs, indigo #4F46E5 for the cos
// leg, red #DC2626 for the two angle arcs.
//
// Derived diagrams reproduce the DerivedIdentityCard's three-line chain.
// Numbers are frozen at theta = 40deg, the explorer's initialTheta, formatted
// to three decimals like formatVal in the component.
// Consumed by getStaticProps of the page through demoUnitFrame.

const W = 440;
const H = 320;
const CX = 150;
const CY = 160;
const R = 115;
const TH = 40; // frozen angle in degrees — NegativeAngleExplorer's initialTheta

const DEEP = '#4F46E5';
const AMBER = '#B45309';
const RED = '#DC2626';
const TEXT = '#1e3a5f';
const MUTED = '#64748b';
const FAINT = '#94a3b8';
const SOFT = '#cbd5e1';

const rad = (d) => (d * Math.PI) / 180;
const C = Math.cos(rad(TH));
const S = Math.sin(rad(TH));

const FOOT = +(CX + R * C).toFixed(2);
const PY = +(CY - R * S).toFixed(2);
const PPY = +(CY + R * S).toFixed(2);

const ARC = 28;               // component uses 40 against R = 170
const RA = 7;                 // right-angle marker arm
const COS_LABEL_X = Math.max((CX + FOOT) / 2, CX + ARC + 26);

const txt = (t, x, y, color = TEXT, size = 12, anchor = 'middle', style = '') =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="central" font-size="${size}" fill="${color}" font-family="Georgia,serif"${style ? ` ${style}` : ''}>${t}</text>`;

const wrap = (inner) =>
  `<svg width="352" height="256" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">${inner}</svg>`;

// --- shared frame: axes, unit circle, origin ---
const frame = () =>
  `<line x1="${CX - R - 26}" y1="${CY}" x2="${CX + R + 26}" y2="${CY}" stroke="${MUTED}" stroke-width="1" stroke-opacity="0.45"/>` +
  `<line x1="${CX}" y1="${CY - R - 26}" x2="${CX}" y2="${CY + R + 26}" stroke="${MUTED}" stroke-width="1" stroke-opacity="0.45"/>` +
  txt('x', CX + R + 34, CY, MUTED, 12, 'middle', 'font-style="italic"') +
  txt('y', CX + 8, CY - R - 34, MUTED, 12, 'start', 'font-style="italic"') +
  `<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="rgba(0,0,0,0.30)" stroke-width="1"/>` +
  `<circle cx="${CX}" cy="${CY}" r="3" fill="${TEXT}"/>` +
  txt('O', CX - 9, CY + 14, MUTED, 12, 'end', 'font-style="italic"');

const cosLeg = () =>
  `<line x1="${CX}" y1="${CY}" x2="${FOOT}" y2="${CY}" stroke="${DEEP}" stroke-width="2.8" stroke-linecap="round"/>` +
  txt('cos θ', COS_LABEL_X, CY + 16, DEEP, 12, 'middle', 'font-style="italic" font-weight="500"');

// Faint connector used only by the cosOnly scene, once both points are placed.
const connector = () =>
  `<line x1="${FOOT}" y1="${PY}" x2="${FOOT}" y2="${PPY}" stroke="${MUTED}" stroke-width="1" stroke-opacity="0.45"/>`;

const pointP = (withSinLeg) =>
  `<line x1="${CX}" y1="${CY}" x2="${FOOT}" y2="${PY}" stroke="${MUTED}" stroke-width="1" stroke-opacity="0.55"/>` +
  (withSinLeg
    ? `<line x1="${FOOT}" y1="${CY}" x2="${FOOT}" y2="${PY}" stroke="${AMBER}" stroke-width="2.8" stroke-linecap="round"/>` +
      txt('sin θ', FOOT + 8, (CY + PY) / 2, AMBER, 12, 'start', 'font-style="italic" font-weight="500"') +
      `<polyline points="${FOOT - RA},${CY} ${FOOT - RA},${CY - RA} ${FOOT},${CY - RA}" fill="none" stroke="${MUTED}" stroke-width="0.8"/>`
    : '') +
  `<circle cx="${FOOT}" cy="${PY}" r="4" fill="${TEXT}"/>` +
  txt('P', FOOT - 9, PY - 8, TEXT, 13, 'end', 'font-weight="600"') +
  `<path d="M ${CX + ARC} ${CY} A ${ARC} ${ARC} 0 0 0 ${(CX + ARC * C).toFixed(2)} ${(CY - ARC * S).toFixed(2)}" fill="none" stroke="${RED}" stroke-width="1.6"/>` +
  txt('θ', CX + ARC * 0.62 * Math.cos(rad(TH / 2)), CY - ARC * 0.62 * Math.sin(rad(TH / 2)), RED, 10.5, 'middle', 'font-style="italic"');

const pointPPrime = (withSinLeg) =>
  `<line x1="${CX}" y1="${CY}" x2="${FOOT}" y2="${PPY}" stroke="${MUTED}" stroke-width="1" stroke-opacity="0.55"/>` +
  (withSinLeg
    ? `<line x1="${FOOT}" y1="${CY}" x2="${FOOT}" y2="${PPY}" stroke="${AMBER}" stroke-width="2.8" stroke-linecap="round"/>` +
      txt('−sin θ', FOOT + 8, (CY + PPY) / 2, AMBER, 12, 'start', 'font-style="italic" font-weight="500"') +
      `<polyline points="${FOOT - RA},${CY} ${FOOT - RA},${CY + RA} ${FOOT},${CY + RA}" fill="none" stroke="${MUTED}" stroke-width="0.8"/>`
    : '') +
  `<circle cx="${FOOT}" cy="${PPY}" r="4" fill="${TEXT}"/>` +
  txt('P&#8242;', FOOT - 9, PPY + 12, TEXT, 13, 'end', 'font-weight="600"') +
  `<path d="M ${CX + ARC} ${CY} A ${ARC} ${ARC} 0 0 1 ${(CX + ARC * C).toFixed(2)} ${(CY + ARC * S).toFixed(2)}" fill="none" stroke="${RED}" stroke-width="1.6"/>` +
  txt('−θ', CX + ARC * 0.62 * Math.cos(rad(TH / 2)) + 2, CY + ARC * 0.62 * Math.sin(rad(TH / 2)), RED, 10.5, 'middle', 'font-style="italic"');

// Coordinate callouts, one line each, matching the component's per-mode text.
const coordP = (mode) =>
  mode === 'sinOnly'
    ? txt('P:  y = sin θ', FOOT + 12, PY - 16, TEXT, 11.5, 'start', 'font-style="italic"')
    : txt('P:  x = cos θ', FOOT + 12, PY - 16, TEXT, 11.5, 'start', 'font-style="italic"');

const coordPPrime = (mode) =>
  mode === 'sinOnly'
    ? txt('P&#8242;:  y = −sin θ', FOOT + 12, PPY + 14, TEXT, 11.5, 'start', 'font-style="italic"')
    : txt('P&#8242;:  x = cos θ', FOOT + 12, PPY + 14, TEXT, 11.5, 'start', 'font-style="italic"');

const compare = (mode) =>
  mode === 'sinOnly'
    ? txt('y = sin(−θ)', FOOT + 12, PPY + 32, MUTED, 10.5, 'start', 'font-style="italic"')
    : txt('x = cos(−θ)', FOOT + 12, PPY + 32, MUTED, 10.5, 'start', 'font-style="italic"');

const banner = (t) =>
  `<rect x="18" y="${H - 38}" width="${W - 36}" height="28" rx="8" fill="#f8fafc" stroke="${SOFT}"/>` +
  txt(t, W / 2, H - 24, TEXT, 12.5, 'middle', 'font-style="italic"');

// Three scenario stages. sinOnly hides the cos leg; cosOnly hides both vertical
// legs and their right-angle marks and adds the shared-x connector instead.
function proofStep(fn, step) {
  const mode = fn === 'sin' ? 'sinOnly' : 'cosOnly';
  const legs = mode === 'sinOnly';
  let s = frame();
  if (!legs) s += cosLeg();
  if (step >= 2 && !legs) s += connector();
  s += pointP(legs) + coordP(mode);
  if (step >= 2) s += pointPPrime(legs) + coordPPrime(mode);
  if (step >= 3) {
    s += compare(mode);
    s += fn === 'sin'
      ? banner('sin(−θ) = −sin θ   ·   −0.643 = −0.643')
      : banner('cos(−θ) = cos θ   ·   0.766 = 0.766');
  }
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
    body += txt(lhs, 196, y, TEXT, 13, 'end', 'font-style="italic"');
    body += txt('=', 208, y, MUTED, 13);
    body += txt(rhs, 220, y, TEXT, 13, 'start', 'font-style="italic"');
    body += txt(note, W - 44, y + 15, FAINT, 9.5, 'end');
  }
  body += txt(check, W / 2, H - 40, DEEP, 12.5, 'middle', 'font-style="italic"');
  return wrap(body);
}

const negativeAngleDiagrams = {
  sin: {
    overview: proofStep('sin', 3),
    steps: [1, 2, 3].map((s) => proofStep('sin', s)),
  },
  cos: {
    overview: proofStep('cos', 3),
    steps: [1, 2, 3].map((s) => proofStep('cos', s)),
  },
  tan: derivedCard('tan(−θ) = −tan θ', [
    ['tan(−θ)', 'sin(−θ) / cos(−θ)', 'definition'],
    ['', '(−sin θ) / (cos θ)', 'sin(−θ) = −sin θ, cos(−θ) = cos θ'],
    ['', '−tan θ', 'simplify'],
  ], 'at θ = 40° :  tan(−θ) = −0.839 = −tan θ'),
  csc: derivedCard('csc(−θ) = −csc θ', [
    ['csc(−θ)', '1 / sin(−θ)', 'definition'],
    ['', '1 / (−sin θ)', 'sin(−θ) = −sin θ'],
    ['', '−csc θ', 'simplify'],
  ], 'at θ = 40° :  csc(−θ) = −1.556 = −csc θ'),
  sec: derivedCard('sec(−θ) = sec θ', [
    ['sec(−θ)', '1 / cos(−θ)', 'definition'],
    ['', '1 / cos θ', 'cos(−θ) = cos θ'],
    ['', 'sec θ', 'simplify'],
  ], 'at θ = 40° :  sec(−θ) = 1.305 = sec θ'),
  cot: derivedCard('cot(−θ) = −cot θ', [
    ['cot(−θ)', '1 / tan(−θ)', 'definition'],
    ['', '1 / (−tan θ)', 'tan(−θ) = −tan θ'],
    ['', '−cot θ', 'simplify'],
  ], 'at θ = 40° :  cot(−θ) = −1.192 = −cot θ'),
};

export default negativeAngleDiagrams;
