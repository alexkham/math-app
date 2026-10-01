// Static SVG diagrams for the Base Conversion Visualizer page
// (/arithmetic/visual-tools/base-converter). Each diagram freezes BaseVisualizer2
// in one state: the number 100 written in one base, exactly as the worked
// example on the page does it. The layout mirrors the component: on the left the
// 12 x 12 grid of 144 cubes with the first N filled and numbered (blue #3498db on
// grey #e0e0e0, border #ccc); on the right the result structure, one row per
// power of the base, descending: label "b^k(size)", the groups of that size drawn
// as blocks of cubes, and "x count"; below, the result line
// "100 in base b is: ..." on the #e8f0fe background.
//
// Consumed by getStaticProps of the base-converter page through demoUnitFrame.
// Line 1 pass, 2026-09-23. New file; the component is untouched by it.

const N = 100;
const GRID = 12;
const CELL = 11;            // grid cube size in the frozen picture
const GX = 12, GY = 40;     // grid origin
const RX = GX + GRID * CELL + 24;   // result column origin x  (=168)
const RW = 420 - RX - 12;           // result column width      (=240)
const BLUE = '#3498db', GREY = '#e0e0e0', BORDER = '#ccc', INK = '#333';

const digitChar = (d) => (d < 10 ? String(d) : String.fromCharCode(55 + d)); // 10 -> A

function digits(n, b) {
  // least significant first, like the component's `visualization`
  const out = [];
  let q = n;
  do { out.push(q % b); q = Math.floor(q / b); } while (q > 0);
  return out;
}

function grid(filled) {
  let g = '';
  for (let i = 0; i < GRID * GRID; i++) {
    const x = GX + (i % GRID) * CELL, y = GY + Math.floor(i / GRID) * CELL;
    const on = i < filled;
    g += `<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" fill="${on ? BLUE : GREY}" stroke="${BORDER}" stroke-width="0.5"/>`;
    if (on) g += `<text x="${x + CELL / 2}" y="${y + CELL / 2 + 2}" font-size="5" fill="${GREY}" font-weight="bold" text-anchor="middle">${i + 1}</text>`;
  }
  return g;
}

// A block of `size` cubes as a compact square-ish mini-grid of 3px cells.
function block(x, y, size) {
  const cols = Math.min(size, Math.ceil(Math.sqrt(size)) > 8 ? 10 : Math.ceil(Math.sqrt(size)));
  const rows = Math.ceil(size / cols);
  let g = `<rect x="${x - 1}" y="${y - 1}" width="${cols * 3 + 2}" height="${rows * 3 + 2}" fill="${GREY}"/>`;
  for (let i = 0; i < size; i++) {
    g += `<rect x="${x + (i % cols) * 3}" y="${y + Math.floor(i / cols) * 3}" width="2.6" height="2.6" fill="${BLUE}"/>`;
  }
  return { svg: g, w: cols * 3 + 2, h: rows * 3 + 2 };
}

function resultStructure(b) {
  const ds = digits(N, b);
  let y = GY;
  let g = '';
  for (let k = ds.length - 1; k >= 0; k--) {
    const count = ds[k], size = Math.pow(b, k);
    const label = `${b}<tspan font-size="7" baseline-shift="super">${k}</tspan>(${size})`;
    g += `<text x="${RX}" y="${y + 10}" font-size="10" font-weight="bold" fill="${INK}">${label}</text>`;
    // blocks, wrapped inside the column
    let bx = RX + 62, by = y + 2, rowH = 0, maxY = y + 14;
    for (let c = 0; c < count; c++) {
      const bl = block(bx, by, size);
      if (bx + bl.w > RX + RW - 34) { bx = RX + 62; by += rowH + 3; rowH = 0; }
      g += block(bx, by, size).svg;
      bx += bl.w + 3; rowH = Math.max(rowH, bl.h); maxY = Math.max(maxY, by + bl.h);
    }
    g += `<text x="${RX + RW}" y="${y + 10}" font-size="10" font-weight="bold" fill="${INK}" text-anchor="end">×${count}</text>`;
    y = Math.max(maxY, y + 14) + 8;
  }
  return { svg: g, bottom: y };
}

function scene(b) {
  const ds = digits(N, b);
  const str = ds.slice().reverse().map(digitChar).join('');
  const res = resultStructure(b);
  const bottom = Math.max(GY + GRID * CELL, res.bottom) + 12;
  const H = bottom + 34;
  return (
    `<svg width="360" viewBox="0 0 420 ${H}" xmlns="http://www.w3.org/2000/svg" role="img" style="border:1px solid #ccc;background:#f0f0f0;border-radius:5px;max-width:100%;display:block;margin:12px auto">` +
    `<text x="${GX}" y="16" font-size="11" fill="${INK}"><tspan font-weight="bold">Number:</tspan> ${N}</text>` +
    `<text x="${GX + 110}" y="16" font-size="11" fill="${INK}"><tspan font-weight="bold">Base:</tspan> ${b}</text>` +
    `<rect x="${GX - 4}" y="${GY - 4}" width="${GRID * CELL + 8}" height="${GRID * CELL + 8}" fill="#fff" rx="3"/>` +
    grid(N) +
    `<rect x="${RX - 6}" y="${GY - 4}" width="${RW + 12}" height="${Math.max(GRID * CELL + 8, res.bottom - GY + 8)}" fill="#fff" rx="3"/>` +
    res.svg +
    `<rect x="${GX}" y="${bottom}" width="${420 - 2 * GX}" height="22" fill="#e8f0fe" rx="3"/>` +
    `<text x="210" y="${bottom + 15}" font-size="11" fill="${INK}" text-anchor="middle">${N} in base ${b} is: ${str}</text>` +
    `</svg>`
  );
}

const bases = {};
[2, 8, 10, 16, 36].forEach((b) => { bases[b] = scene(b); });

const baseConverterDiagrams = { bases, digits, digitChar };

export default baseConverterDiagrams;
