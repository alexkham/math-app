// Static SVG diagrams for the double-angle-identities page sections.
// Geometric diagrams freeze BisectedApexDemo's isosceles-triangle proof at each
// stage (two unit radii, red apex arc, indigo chord, blue bisector); derived
// diagrams reproduce the DerivedIdentityCard's equation chain. Consumed by
// getStaticProps of the page via processContent's inline-SVG pass.

const W = 420;
const H = 300;
const OX = 70;
const OY = 150;
const R = 210;
const TH = 35; // frozen base angle in degrees

const DEEP = '#4F46E5';
const MID = '#818CF8';
const RED = '#DC2626';
const TEXT = '#1e3a5f';
const MUTED = '#64748b';
const SOFT = '#e2e8f0';

const rad = (d) => (d * Math.PI) / 180;
const AX = +(OX + R * Math.cos(rad(TH))).toFixed(2);
const AY = +(OY - R * Math.sin(rad(TH))).toFixed(2);
const BY = +(OY + R * Math.sin(rad(TH))).toFixed(2);
const MX = AX;
const MY = OY;

const txt = (t, x, y, color = TEXT, size = 13, anchor = 'middle', style = '') =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="central" font-size="${size}" fill="${color}" font-family="Georgia,serif"${style ? ` ${style}` : ''}>${t}</text>`;

const wrap = (inner) =>
  `<svg width="336" height="240" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #e2e8f0;background:#fff;border-radius:12px;max-width:100%;display:block;margin:12px auto">${inner}</svg>`;

// Building blocks of the bisected-apex scene
const radii = () =>
  `<line x1="${OX}" y1="${OY}" x2="${AX}" y2="${AY}" stroke="${TEXT}" stroke-width="2"/>` +
  `<line x1="${OX}" y1="${OY}" x2="${AX}" y2="${BY}" stroke="${TEXT}" stroke-width="2"/>` +
  txt('O', OX - 14, OY, TEXT, 14) + txt('A', AX + 14, AY, TEXT, 14) + txt('B', AX + 14, BY, TEXT, 14) +
  txt('1', (OX + AX) / 2 - 8, (OY + AY) / 2 - 12, MUTED, 12, 'middle', 'font-style="italic"') +
  txt('1', (OX + AX) / 2 - 8, (OY + BY) / 2 + 12, MUTED, 12, 'middle', 'font-style="italic"');

const apexArc = () =>
  `<path d="M ${OX + 34 * Math.cos(rad(TH))} ${OY - 34 * Math.sin(rad(TH))} A 34 34 0 0 1 ${OX + 34 * Math.cos(rad(TH))} ${OY + 34 * Math.sin(rad(TH))}" fill="none" stroke="${RED}" stroke-width="2.5"/>` +
  txt('2θ', OX + 52, OY, RED, 14, 'middle', 'font-style="italic"');

const chord = (emph = false) =>
  `<line x1="${AX}" y1="${AY}" x2="${AX}" y2="${BY}" stroke="${MID}" stroke-width="${emph ? 3 : 2}"/>`;

const triFill = () =>
  `<polygon points="${OX},${OY} ${AX},${AY} ${AX},${BY}" fill="rgba(79,70,229,0.08)" stroke="none"/>`;

const twoFills = () =>
  `<polygon points="${OX},${OY} ${AX},${AY} ${MX},${MY}" fill="rgba(79,70,229,0.12)" stroke="none"/>` +
  `<polygon points="${OX},${OY} ${AX},${BY} ${MX},${MY}" fill="rgba(129,140,248,0.16)" stroke="none"/>`;

const bisector = () =>
  `<line x1="${OX}" y1="${OY}" x2="${MX}" y2="${MY}" stroke="${DEEP}" stroke-width="2.5"/>` +
  `<path d="M ${MX - 12} ${MY} L ${MX - 12} ${MY - 12} L ${MX} ${MY - 12}" fill="none" stroke="${DEEP}" stroke-width="1.5"/>` +
  txt('M', MX + 12, MY + 2, DEEP, 13) +
  txt('θ', OX + 44, OY - 12, RED, 12, 'middle', 'font-style="italic"') +
  txt('θ', OX + 44, OY + 13, RED, 12, 'middle', 'font-style="italic"');

const legLabels = () =>
  txt('sin θ', MX + 34, (AY + MY) / 2, MID, 13, 'middle', 'font-style="italic"') +
  txt('sin θ', MX + 34, (BY + MY) / 2, MID, 13, 'middle', 'font-style="italic"') +
  txt('cos θ', (OX + MX) / 2, MY + 16, DEEP, 13, 'middle', 'font-style="italic"');

const banner = (t) =>
  `<rect x="20" y="${H - 40}" width="${W - 40}" height="30" rx="8" fill="#f8fafc" stroke="${SOFT}"/>` +
  txt(t, W / 2, H - 25, TEXT, 14, 'middle', 'font-style="italic"');

// Six proof stages; captions differ between the sin and cos scenarios.
function proofStep(fn, step) {
  const base = radii() + apexArc();
  if (step === 1) return wrap(base + chord());
  if (step === 2) {
    return fn === 'sin'
      ? wrap(triFill() + base + chord() + banner('area = ½ · 1 · 1 · sin 2θ = ½ sin 2θ'))
      : wrap(triFill() + base + chord(true) + banner('|AB|² = 1 + 1 − 2cos 2θ = 2 − 2cos 2θ'));
  }
  if (step === 3) return wrap(triFill() + base + chord() + bisector());
  if (step === 4) {
    return fn === 'sin'
      ? wrap(triFill() + base + chord() + bisector() + legLabels())
      : wrap(triFill() + base + chord() + bisector() + legLabels() + banner('AB = 2 sin θ'));
  }
  if (step === 5) {
    return fn === 'sin'
      ? wrap(twoFills() + base + chord() + bisector() + legLabels() + banner('each half: ½ sin θ cos θ — together: sin θ cos θ'))
      : wrap(triFill() + base + chord(true) + bisector() + legLabels() + banner('|AB|² = (2 sin θ)² = 4 sin²θ'));
  }
  return fn === 'sin'
    ? wrap(twoFills() + base + chord() + bisector() + legLabels() + banner('sin 2θ = 2 sin θ cos θ'))
    : wrap(triFill() + base + chord() + bisector() + legLabels() + banner('cos 2θ = 1 − 2 sin²θ'));
}

// Derived-identity card frozen as an equation chain.
function derivedCard(title, lines) {
  let y = 92;
  let body =
    `<rect x="26" y="26" width="${W - 52}" height="${H - 52}" rx="14" fill="#fff" stroke="${SOFT}"/>` +
    `<rect x="44" y="44" width="${W - 88}" height="34" rx="8" fill="#f8fafc" stroke="${SOFT}"/>` +
    txt(title, W / 2, 61, TEXT, 15, 'middle', 'font-style="italic"');
  for (const [lhs, rhs, note] of lines) {
    y += 34;
    body += txt(lhs ? lhs + ' =' : '=', 128, y, TEXT, 14, 'end', 'font-style="italic"');
    body += txt(rhs, 140, y, TEXT, 14, 'start', 'font-style="italic"');
    body += txt(note, W - 48, y + 15, '#94a3b8', 10, 'end');
  }
  return wrap(body);
}

const doubleAngleDiagrams = {
  sin: { overview: proofStep('sin', 6), steps: [1, 2, 3, 4, 5, 6].map((s) => proofStep('sin', s)) },
  cos: { overview: proofStep('cos', 6), steps: [1, 2, 3, 4, 5, 6].map((s) => proofStep('cos', s)) },
  tan: derivedCard('tan(2θ) = 2 tan θ / (1 − tan²θ)', [
    ['tan(2θ)', 'sin(2θ) / cos(2θ)', 'definition'],
    ['', '(2 sin θ · cos θ) / (cos²θ − sin²θ)', 'substitute the two identities'],
    ['', '2 tan θ / (1 − tan²θ)', 'divide top and bottom by cos²θ'],
  ]),
  csc: derivedCard('csc(2θ) = 1 / (2 sin θ · cos θ)', [
    ['csc(2θ)', '1 / sin(2θ)', 'definition'],
    ['', '1 / (2 sin θ · cos θ)', 'substitute sin(2θ)'],
  ]),
  sec: derivedCard('sec(2θ) = 1 / (1 − 2 sin²θ)', [
    ['sec(2θ)', '1 / cos(2θ)', 'definition'],
    ['', '1 / (1 − 2 sin²θ)', 'substitute cos(2θ)'],
  ]),
  cot: derivedCard('cot(2θ) = (1 − tan²θ) / (2 tan θ)', [
    ['cot(2θ)', '1 / tan(2θ)', 'definition'],
    ['', '(1 − tan²θ) / (2 tan θ)', 'substitute tan(2θ)'],
  ]),
};

export default doubleAngleDiagrams;
