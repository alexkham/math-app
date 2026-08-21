// Static SVG diagrams for the Powers of i Calculator page sections (Line 1
// v5). Each diagram freezes the tool's CycleDiagram in one of the four
// remainder states, replicating the component's rendering exactly: 440×300
// canvas, dashed cycle track #c8dce8 with blue #4098d8 arc arrows, four nodes
// (i¹=i top, i²=−1 right, i³=−i bottom, i⁴=1 left; orange #B85C2A for odd
// remainders, navy #304090 for even), the active node glowing at full opacity
// with its ring, the Shortcut box with the active remainder row highlighted,
// and the example bar showing the frozen exponent's k mod 4 computation.
// Consumed by getStaticProps of the page via demoUnitFrame.

const NAVY = '#304090';
const ORANGE = '#B85C2A';
const BLUE = '#4098d8';
const TRACK = '#c8dce8';
const TEXT = '#102050';
const MUTED = '#6080a0';
const MUTED2 = '#5a6480';

const SANS = "'DM Sans', 'Segoe UI', sans-serif";

const CX = 170, CY = 150, R = 80, NODE_R = 28;

const NODES = [
  { r: 1, x: CX, y: CY - R, powerLabel: '1', valueLabel: 'i' },
  { r: 2, x: CX + R, y: CY, powerLabel: '2', valueLabel: '−1' },
  { r: 3, x: CX, y: CY + R, powerLabel: '3', valueLabel: '−i' },
  { r: 0, x: CX - R, y: CY, powerLabel: '4', valueLabel: '1' },
];

const ARCS = [
  `M ${CX + 30},${CY - R + 18} A ${R},${R} 0 0,1 ${CX + R - 18},${CY - 30}`,
  `M ${CX + R - 18},${CY + 30} A ${R},${R} 0 0,1 ${CX + 30},${CY + R - 18}`,
  `M ${CX - 30},${CY + R - 18} A ${R},${R} 0 0,1 ${CX - R + 18},${CY + 30}`,
  `M ${CX - R + 18},${CY - 30} A ${R},${R} 0 0,1 ${CX - 30},${CY - R + 18}`,
];

const RESULTS = { 0: '1', 1: 'i', 2: '−1', 3: '−i' };

const SHORTCUT_ROWS = [
  { rem: 1, val: 'i', color: ORANGE },
  { rem: 2, val: '−1', color: NAVY },
  { rem: 3, val: '−i', color: ORANGE },
  { rem: 0, val: '1', color: NAVY },
];

function diagram(k) {
  const activeR = ((k % 4) + 4) % 4;
  const mid = `r${activeR}`;
  let out = '';

  out += `<defs>` +
    `<marker id="cyArrow-${mid}" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">` +
    `<path d="M0,0 L7,2.5 L0,5" fill="${BLUE}"/></marker>` +
    `<filter id="glow-${mid}"><feGaussianBlur stdDeviation="4" result="blur"/>` +
    `<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>` +
    `</defs>`;

  out += `<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${TRACK}" stroke-width="1.5" stroke-dasharray="5,3"/>`;
  out += `<text x="${CX}" y="${CY - 4}" text-anchor="middle" font-size="11" font-weight="600" fill="${MUTED}">cycle of</text>`;
  out += `<text x="${CX}" y="${CY + 12}" text-anchor="middle" font-size="13" font-weight="700" fill="${MUTED}">4</text>`;

  for (const d of ARCS) {
    out += `<path d="${d}" fill="none" stroke="${BLUE}" stroke-width="1.5" marker-end="url(#cyArrow-${mid})"/>`;
  }

  for (const node of NODES) {
    const active = node.r === activeR;
    const fillColor = (node.r === 1 || node.r === 3) ? ORANGE : NAVY;
    out += `<g${active ? ` filter="url(#glow-${mid})"` : ''}>`;
    if (active) {
      out += `<circle cx="${node.x}" cy="${node.y}" r="${NODE_R + 5}" fill="none" stroke="${fillColor}" stroke-width="2.5" opacity="0.5"/>`;
    }
    out += `<circle cx="${node.x}" cy="${node.y}" r="${NODE_R}" fill="${fillColor}" opacity="${active ? 1 : 0.4}"/>`;
    out += `<text x="${node.x}" y="${node.y - 5}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" opacity="${active ? 1 : 0.8}">i<tspan font-size="7" baseline-shift="super">${node.powerLabel}</tspan></text>`;
    out += `<line x1="${node.x - 15}" y1="${node.y + 2}" x2="${node.x + 15}" y2="${node.y + 2}" stroke="#fff" stroke-width="0.7" opacity="0.35"/>`;
    out += `<text x="${node.x}" y="${node.y + 16}" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" opacity="${active ? 1 : 0.8}">${node.valueLabel}</text>`;
    out += `</g>`;
  }

  out += `<rect x="280" y="30" width="150" height="195" rx="10" fill="#fff" stroke="${TRACK}" stroke-width="1"/>`;
  out += `<text x="355" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="${TEXT}">Shortcut</text>`;
  out += `<line x1="300" y1="62" x2="410" y2="62" stroke="${TRACK}" stroke-width="0.8"/>`;
  out += `<text x="355" y="80" text-anchor="middle" font-size="10" fill="${MUTED}">Divide exponent by 4</text>`;
  out += `<text x="355" y="94" text-anchor="middle" font-size="10" fill="${MUTED}">and use the remainder:</text>`;

  SHORTCUT_ROWS.forEach((item, i) => {
    const rowActive = item.rem === activeR;
    const yPos = 118 + i * 24;
    if (rowActive) {
      out += `<rect x="294" y="${yPos - 12}" width="122" height="20" rx="4" fill="#e0ecff"/>`;
    }
    out += `<text x="310" y="${yPos}" font-size="11" font-weight="${rowActive ? '700' : '500'}" fill="${rowActive ? TEXT : MUTED2}">r = ${item.rem}</text>`;
    out += `<text x="380" y="${yPos}" font-size="12" font-weight="700" fill="${item.color}">&#8594; ${item.val}</text>`;
  });

  out += `<line x1="300" y1="206" x2="410" y2="206" stroke="${TRACK}" stroke-width="0.8"/>`;
  out += `<text x="355" y="222" text-anchor="middle" font-size="10" font-style="italic" fill="${MUTED}">r = n mod 4</text>`;

  out += `<rect x="50" y="265" width="340" height="26" rx="6" fill="#fff" stroke="${TRACK}" stroke-width="0.8"/>`;
  out += `<text x="220" y="282" text-anchor="middle" font-size="11" fill="${MUTED}">` +
    `<tspan font-weight="600" fill="${TEXT}">i</tspan>` +
    `<tspan font-size="8" baseline-shift="super" font-weight="600" fill="${TEXT}">${k}</tspan>` +
    `<tspan>  &#8594;  ${k} mod 4 = </tspan>` +
    `<tspan font-weight="700" fill="${TEXT}">${activeR}</tspan>` +
    `<tspan>  &#8594;  </tspan>` +
    `<tspan font-weight="700" fill="${(activeR === 1 || activeR === 3) ? ORANGE : NAVY}">${RESULTS[activeR]}</tspan>` +
    `</text>`;

  return (
    `<svg viewBox="0 0 440 300" width="440" height="300" xmlns="http://www.w3.org/2000/svg" ` +
    `font-family="${SANS}" style="display:block;max-width:100%;height:auto">` + out + `</svg>`
  );
}

// Frozen states — one exponent per remainder class, taken from the tool's
// own example buttons (323 is the opening value).
const iPowersDiagrams = {
  r0: diagram(100),
  r1: diagram(17),
  r2: diagram(82),
  r3: diagram(323),
};

export default iPowersDiagrams;
