// Static SVG diagrams for the pythagorean-identities page sections.
// Geometric diagrams freeze BisectedApexDemo's scene at each stage of the
// PythagoreanExplorer scenarios (PS.setup -> PS.bisected -> PS.labeled ->
// PS.finalize). Unlike the double-angle scenarios, PS never sets showApex, so
// the red apex arc and the "C = 2theta" label are absent here — exactly as the
// live tool renders them. Colors follow BisectedApexDemo v8: amber #B45309 for
// the chord and half-chord labels, indigo #4F46E5 for the bisector, faint
// indigo wash for the triangle interior.
//
// Steps 3-6 share one scene (PS.labeled / PS.finalize differ only by the metric
// cards, which live outside the SVG), so each of those stages carries a banner
// with the algebra the live step log states at that point.
//
// Derived diagrams reproduce the DerivedIdentityCard's five-line equation
// chain. Numeric values are frozen at theta = 35deg, the tool's initial angle,
// and formatted with three decimals like formatVal in the component.
// Consumed by getStaticProps of the page through demoUnitFrame.

const W = 420;
const H = 300;
const OX = 70;
const OY = 140;
const R = 190;
const TH = 35; // frozen angle in degrees — PythagoreanExplorer's initialTheta

const DEEP = '#4F46E5';
const AMBER = '#B45309';
const TEXT = '#1e3a5f';
const MUTED = '#64748b';
const FAINT = '#94a3b8';
const SOFT = '#cbd5e1';
const FILL = '#818CF8';

const rad = (d) => (d * Math.PI) / 180;
const S = Math.sin(rad(TH));
const C = Math.cos(rad(TH));

const AX = +(OX + R * C).toFixed(2);
const AY = +(OY - R * S).toFixed(2);
const BY = +(OY + R * S).toFixed(2);
const MX = AX;
const MY = OY;

// Arc radii copied from BisectedApexCore: arcR = min(32, R*cos(theta)*0.6).
const ARC = Math.min(32, R * C * 0.6);
const SUB = ARC * 0.55;
const SUB_LBL = SUB + 14;

const txt = (t, x, y, color = TEXT, size = 13, anchor = 'middle', style = '') =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="central" font-size="${size}" fill="${color}" font-family="Georgia,serif"${style ? ` ${style}` : ''}>${t}</text>`;

const wrap = (inner) =>
  `<svg width="336" height="240" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #cbd5e1;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">${inner}</svg>`;

// --- building blocks of the bisected-apex scene ---

// The chord's own circular arc, standing in for the unit circle (the full
// circle of radius R around O runs off this compact frame).
const circleArc = () =>
  `<path d="M ${AX} ${AY} A ${R} ${R} 0 0 1 ${AX} ${BY}" fill="none" stroke="rgba(0,0,0,0.30)" stroke-width="1"/>`;

const triFill = () =>
  `<polygon points="${OX},${OY} ${AX},${AY} ${AX},${BY}" fill="${FILL}" fill-opacity="0.12" stroke="none"/>`;

const radii = () =>
  `<line x1="${OX}" y1="${OY}" x2="${AX}" y2="${AY}" stroke="${MUTED}" stroke-width="1.4" stroke-opacity="0.55"/>` +
  `<line x1="${OX}" y1="${OY}" x2="${AX}" y2="${BY}" stroke="${MUTED}" stroke-width="1.4" stroke-opacity="0.55"/>` +
  `<line x1="${AX}" y1="${AY}" x2="${AX}" y2="${BY}" stroke="${AMBER}" stroke-width="2.5" stroke-linecap="round"/>` +
  `<circle cx="${OX}" cy="${OY}" r="3" fill="${TEXT}"/>` +
  `<circle cx="${AX}" cy="${AY}" r="3" fill="${TEXT}"/>` +
  `<circle cx="${AX}" cy="${BY}" r="3" fill="${TEXT}"/>` +
  txt('O', OX - 12, OY + 4, MUTED, 13, 'end', 'font-style="italic"') +
  txt('A', AX + 12, AY - 4, MUTED, 13, 'start', 'font-style="italic"') +
  txt('B', AX + 12, BY + 8, MUTED, 13, 'start', 'font-style="italic"') +
  txt('a = 1', (OX + AX) / 2 - S * 18, (OY + AY) / 2 - C * 18, TEXT, 13) +
  txt('b = 1', (OX + AX) / 2 - S * 18, (OY + BY) / 2 + C * 18, TEXT, 13);

const bisector = () =>
  `<line x1="${OX}" y1="${OY}" x2="${MX}" y2="${MY}" stroke="${DEEP}" stroke-width="2.5" stroke-linecap="round"/>` +
  `<polyline points="${MX - 11},${MY} ${MX - 11},${MY - 11} ${MX},${MY - 11}" fill="none" stroke="${DEEP}" stroke-width="1"/>` +
  `<circle cx="${MX}" cy="${MY}" r="2.5" fill="${DEEP}"/>` +
  txt('M', MX + 12, MY + 20, MUTED, 13, 'start', 'font-style="italic"');

// Sub-angle arcs are drawn only above theta >= 22deg in the live scene; the
// frozen angle is 35deg, so both halves show.
const subAngles = () =>
  `<path d="M ${(OX + SUB).toFixed(2)} ${OY} A ${SUB.toFixed(2)} ${SUB.toFixed(2)} 0 0 0 ${(OX + SUB * C).toFixed(2)} ${(OY - SUB * S).toFixed(2)}" fill="none" stroke="${MUTED}" stroke-width="0.9" stroke-opacity="0.7"/>` +
  `<path d="M ${(OX + SUB).toFixed(2)} ${OY} A ${SUB.toFixed(2)} ${SUB.toFixed(2)} 0 0 1 ${(OX + SUB * C).toFixed(2)} ${(OY + SUB * S).toFixed(2)}" fill="none" stroke="${MUTED}" stroke-width="0.9" stroke-opacity="0.7"/>` +
  txt('θ', OX + SUB_LBL * Math.cos(rad(TH / 2)) - 2, OY - SUB_LBL * Math.sin(rad(TH / 2)), MUTED, 12, 'middle', 'font-style="italic"') +
  txt('θ', OX + SUB_LBL * Math.cos(rad(TH / 2)) - 2, OY + SUB_LBL * Math.sin(rad(TH / 2)), MUTED, 12, 'middle', 'font-style="italic"');

const legLabels = () =>
  txt('sin θ', MX + 26, (AY + MY) / 2, AMBER, 13, 'start', 'font-style="italic"') +
  txt('sin θ', MX + 26, (BY + MY) / 2, AMBER, 13, 'start', 'font-style="italic"') +
  txt('cos θ', (OX + MX) / 2, MY - 14, DEEP, 13, 'middle', 'font-style="italic"');

const banner = (t) =>
  `<rect x="20" y="${H - 40}" width="${W - 40}" height="30" rx="8" fill="#f8fafc" stroke="${SOFT}"/>` +
  txt(t, W / 2, H - 25, TEXT, 13.5, 'middle', 'font-style="italic"');

// Six proof stages. Steps 1-4 are identical in both scenarios (the explorer
// defines them with the same state and the same wording); only steps 5 and 6
// diverge, solving for sin or for cos.
function proofStep(fn, step) {
  const scene = triFill() + circleArc() + radii();
  if (step === 1) return wrap(scene);
  if (step === 2) return wrap(scene + bisector() + subAngles());
  const labeled = scene + bisector() + subAngles() + legLabels();
  if (step === 3) return wrap(labeled + banner('OA = 1,  MA = sin θ,  OM = cos θ'));
  if (step === 4) return wrap(labeled + banner('sin²θ + cos²θ = 1'));
  if (step === 5) {
    return fn === 'sin'
      ? wrap(labeled + banner('sin²θ = 1 − cos²θ'))
      : wrap(labeled + banner('cos²θ = 1 − sin²θ'));
  }
  return fn === 'sin'
    ? wrap(labeled + banner('sin θ = √(1 − cos²θ) = 0.574'))
    : wrap(labeled + banner('cos θ = √(1 − sin²θ) = 0.819'));
}

// Derived-identity card frozen as the five-line equation chain.
function derivedCard(title, lines, check) {
  let y = 78;
  let body =
    `<rect x="26" y="26" width="${W - 52}" height="${H - 52}" rx="14" fill="#fff" stroke="${SOFT}"/>` +
    `<rect x="44" y="42" width="${W - 88}" height="32" rx="8" fill="#f1f5f9" stroke="${SOFT}"/>` +
    txt(title, W / 2, 58, TEXT, 14, 'middle', 'font-style="italic"');
  for (const [lhs, rhs, note] of lines) {
    y += 30;
    body += txt(lhs, 214, y, TEXT, 12.5, 'end', 'font-style="italic"');
    body += txt('=', 226, y, MUTED, 12.5);
    body += txt(rhs, 238, y, TEXT, 12.5, 'start', 'font-style="italic"');
    body += txt(note, W - 44, y + 13, FAINT, 9, 'end');
  }
  body += txt(check, W / 2, H - 34, DEEP, 12.5, 'middle', 'font-style="italic"');
  return wrap(body);
}

const BASE = ['sin²θ + cos²θ', '1', 'base identity (geometric)'];
const BY_COS = ['(sin²θ + cos²θ) / cos²θ', '1 / cos²θ', 'divide both sides by cos²θ'];
const TAN_SEC = ['tan²θ + 1', 'sec²θ', 'sin/cos = tan, 1/cos = sec'];
const BY_SIN = ['(sin²θ + cos²θ) / sin²θ', '1 / sin²θ', 'divide both sides by sin²θ'];
const COT_CSC = ['1 + cot²θ', 'csc²θ', 'cos/sin = cot, 1/sin = csc'];
const ROOT = 'positive root (first quadrant)';

const pythagoreanDiagrams = {
  sin: {
    overview: proofStep('sin', 6),
    steps: [1, 2, 3, 4, 5, 6].map((s) => proofStep('sin', s)),
  },
  cos: {
    overview: proofStep('cos', 6),
    steps: [1, 2, 3, 4, 5, 6].map((s) => proofStep('cos', s)),
  },
  tan: derivedCard('tan θ = √(sec²θ − 1)', [
    BASE,
    BY_COS,
    TAN_SEC,
    ['tan²θ', 'sec²θ − 1', 'solve for tan²θ'],
    ['tan θ', '√(sec²θ − 1)', ROOT],
  ], 'at θ = 35° :  tan θ = 0.700 = √(sec²θ − 1)'),
  sec: derivedCard('sec θ = √(1 + tan²θ)', [
    BASE,
    BY_COS,
    TAN_SEC,
    ['sec²θ', '1 + tan²θ', 'solve for sec²θ'],
    ['sec θ', '√(1 + tan²θ)', ROOT],
  ], 'at θ = 35° :  sec θ = 1.221 = √(1 + tan²θ)'),
  cot: derivedCard('cot θ = √(csc²θ − 1)', [
    BASE,
    BY_SIN,
    COT_CSC,
    ['cot²θ', 'csc²θ − 1', 'solve for cot²θ'],
    ['cot θ', '√(csc²θ − 1)', ROOT],
  ], 'at θ = 35° :  cot θ = 1.428 = √(csc²θ − 1)'),
  csc: derivedCard('csc θ = √(1 + cot²θ)', [
    BASE,
    BY_SIN,
    COT_CSC,
    ['csc²θ', '1 + cot²θ', 'solve for csc²θ'],
    ['csc θ', '√(1 + cot²θ)', ROOT],
  ], 'at θ = 35° :  csc θ = 1.743 = √(1 + cot²θ)'),
};

export default pythagoreanDiagrams;
