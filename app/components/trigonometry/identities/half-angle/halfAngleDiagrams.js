// Static SVG diagrams for the half-angle-identities page sections.
// Geometric diagrams freeze BisectedApexDemo's isosceles-triangle proof at each
// stage with the half-angle labeling (apex α, halves α/2, legs sin(α/2) and
// cos(α/2)); derived diagrams reproduce the DerivedIdentityCard equation chains.
// Consumed by getStaticProps of the page via processContent's inline-SVG pass.

const W = 420;
const H = 300;
const OX = 70;
const OY = 150;
const R = 210;
const TH = 35; // half angle α/2 in degrees (apex α = 70°)

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

const radii = () =>
  `<line x1="${OX}" y1="${OY}" x2="${AX}" y2="${AY}" stroke="${TEXT}" stroke-width="2"/>` +
  `<line x1="${OX}" y1="${OY}" x2="${AX}" y2="${BY}" stroke="${TEXT}" stroke-width="2"/>` +
  txt('O', OX - 14, OY, TEXT, 14) + txt('A', AX + 14, AY, TEXT, 14) + txt('B', AX + 14, BY, TEXT, 14) +
  txt('1', (OX + AX) / 2 - 8, (OY + AY) / 2 - 12, MUTED, 12, 'middle', 'font-style="italic"') +
  txt('1', (OX + AX) / 2 - 8, (OY + BY) / 2 + 12, MUTED, 12, 'middle', 'font-style="italic"');

const apexArc = () =>
  `<path d="M ${OX + 34 * Math.cos(rad(TH))} ${OY - 34 * Math.sin(rad(TH))} A 34 34 0 0 1 ${OX + 34 * Math.cos(rad(TH))} ${OY + 34 * Math.sin(rad(TH))}" fill="none" stroke="${RED}" stroke-width="2.5"/>` +
  txt('α', OX + 50, OY, RED, 14, 'middle', 'font-style="italic"');

const chord = (emph = false) =>
  `<line x1="${AX}" y1="${AY}" x2="${AX}" y2="${BY}" stroke="${MID}" stroke-width="${emph ? 3 : 2}"/>`;

const triFill = () =>
  `<polygon points="${OX},${OY} ${AX},${AY} ${AX},${BY}" fill="rgba(79,70,229,0.08)" stroke="none"/>`;

const bisector = () =>
  `<line x1="${OX}" y1="${OY}" x2="${MX}" y2="${MY}" stroke="${DEEP}" stroke-width="2.5"/>` +
  `<path d="M ${MX - 12} ${MY} L ${MX - 12} ${MY - 12} L ${MX} ${MY - 12}" fill="none" stroke="${DEEP}" stroke-width="1.5"/>` +
  txt('M', MX + 14, MY + 2, DEEP, 13) +
  txt('α/2', OX + 56, OY - 14, RED, 12, 'middle', 'font-style="italic"') +
  txt('α/2', OX + 56, OY + 15, RED, 12, 'middle', 'font-style="italic"');

const legLabels = () =>
  txt('sin(α/2)', MX + 44, (AY + MY) / 2, MID, 12, 'middle', 'font-style="italic"') +
  txt('sin(α/2)', MX + 44, (BY + MY) / 2, MID, 12, 'middle', 'font-style="italic"') +
  txt('cos(α/2)', (OX + MX) / 2, MY + 16, DEEP, 12, 'middle', 'font-style="italic"');

const banner = (t) =>
  `<rect x="20" y="${H - 40}" width="${W - 40}" height="30" rx="8" fill="#f8fafc" stroke="${SOFT}"/>` +
  txt(t, W / 2, H - 25, TEXT, 13.5, 'middle', 'font-style="italic"');

const SIN_STEPS = [
  wrap(radii() + apexArc() + chord()),
  wrap(triFill() + radii() + apexArc() + chord(true) + banner('|AB|² = 1 + 1 − 2cos α = 2 − 2cos α')),
  wrap(triFill() + radii() + apexArc() + chord() + bisector()),
  wrap(triFill() + radii() + apexArc() + chord() + bisector() + legLabels() + banner('MA = sin(α/2),  AB = 2 sin(α/2)')),
  wrap(triFill() + radii() + apexArc() + chord(true) + bisector() + legLabels() + banner('|AB|² = (2 sin(α/2))² = 4 sin²(α/2)')),
  wrap(triFill() + radii() + apexArc() + chord() + bisector() + legLabels() + banner('sin(α/2) = √((1 − cos α) / 2)')),
];

const COS_STEPS = [
  wrap(radii() + apexArc() + chord()),
  wrap(triFill() + radii() + apexArc() + chord() + bisector()),
  wrap(triFill() + radii() + apexArc() + chord() + bisector() + legLabels()),
  wrap(triFill() + radii() + apexArc() + chord() + bisector() + legLabels() + banner('sin²(α/2) + cos²(α/2) = 1')),
  wrap(triFill() + radii() + apexArc() + chord() + bisector() + legLabels() + banner('cos²(α/2) = 1 − (1 − cos α)/2 = (1 + cos α)/2')),
  wrap(triFill() + radii() + apexArc() + chord() + bisector() + legLabels() + banner('cos(α/2) = √((1 + cos α) / 2)')),
];

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

const halfAngleDiagrams = {
  sin: { overview: SIN_STEPS[5], steps: SIN_STEPS },
  cos: { overview: COS_STEPS[5], steps: COS_STEPS },
  tan: derivedCard('tan(α/2) = √((1 − cos α)/(1 + cos α))', [
    ['tan(α/2)', 'sin(α/2) / cos(α/2)', 'definition'],
    ['', '√((1 − cos α)/2) / √((1 + cos α)/2)', 'substitute the two half-angle identities'],
    ['', '√( (1 − cos α) / (1 + cos α) )', 'combine under a single root'],
  ]),
  csc: derivedCard('csc(α/2) = √(2/(1 − cos α))', [
    ['csc(α/2)', '1 / sin(α/2)', 'definition'],
    ['', '1 / √((1 − cos α)/2)', 'substitute the sin half-angle identity'],
    ['', '√( 2 / (1 − cos α) )', 'invert under the root'],
  ]),
  sec: derivedCard('sec(α/2) = √(2/(1 + cos α))', [
    ['sec(α/2)', '1 / cos(α/2)', 'definition'],
    ['', '1 / √((1 + cos α)/2)', 'substitute the cos half-angle identity'],
    ['', '√( 2 / (1 + cos α) )', 'invert under the root'],
  ]),
  cot: derivedCard('cot(α/2) = √((1 + cos α)/(1 − cos α))', [
    ['cot(α/2)', '1 / tan(α/2)', 'definition'],
    ['', '1 / √((1 − cos α)/(1 + cos α))', 'substitute the tan half-angle identity'],
    ['', '√( (1 + cos α) / (1 − cos α) )', 'invert under the root'],
  ]),
};

export default halfAngleDiagrams;
