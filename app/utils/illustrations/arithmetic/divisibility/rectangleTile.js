// app/utils/illustrations/arithmetic/divisibility/rectangleTile.js
//
// String-based SVG renderer for the "rectangle-tile" illustration component.
// v1.
//
// Scene type: 'tiled-rectangle'
//   spec.width, spec.height — positive integers (rectangle dimensions, math units)
//   spec.reading            — 'tiles' | 'ratio'
//   spec.info               — info panel { lines: [...] }
//   spec.style              — optional palette overrides (merges over defaults in `C`)
//
// The renderer computes everything geometric:
//   side = gcd(width, height)        largest square tile
//   cols = width / side              tiles across
//   rows = height / side             tiles down
// Spec authors NEVER supply tile counts, the gcd, or pixel sizes.
//
// Two readings off one geometry:
//   'tiles' — primary-role tiles, one amber anchor tile, "cols × rows = N tiles"
//   'ratio' — secondary-role tiles, amber row/col count bands, "w : h = cols : rows"

// ---------- Default palette ----------
//
// Every key is overridable via spec.style. The author can pass any subset;
// un-passed keys fall through to these defaults. Self-contained — no shared
// palette file across renderers.
const C = {
  background: '#ffffff',   // page-side surface (unused fill; reserved)
  border: '#5A52C9',       // outer rectangle stroke (tiles reading)
  borderRatio: '#2E8C81',  // outer rectangle stroke (ratio reading)
  stroke: '#7F77DD',       // inner grid lines (tiles reading)
  strokeRatio: '#3FB6A8',  // inner grid lines (ratio reading)
  text: '#34495e',         // dimension labels
  textMuted: '#7a7a75',    // italic gloss
  primary: '#7F77DD',      // tiles-reading tile role (purple)
  secondary: '#3FB6A8',    // ratio-reading tile role (teal)
  result: '#EF9F27',       // amber emphasis (anchor tile / bands / result text)
  resultStroke: '#C25E3A', // coral for result formulas + count labels
  infoFormula: '#5A52C9',  // info-panel formula default (primary-ish)
  separator: '#dddddd',    // info-panel hairline
};

// ---------- Layout constants ----------
const VIEWBOX_W = 680;
const PLANE_X0 = 60;       // rectangle top-left x
const PLANE_Y0 = 40;       // rectangle top-left y
const INFO_X = 250;        // info panel left edge
const INFO_RIGHT = 470;    // info panel separator right edge
const MAX_PLANE_W = 170;   // cap on rendered rectangle width (px)
const MAX_PLANE_H = 250;   // cap on rendered rectangle height (px)
const MIN_TILE = 26;       // smallest comfortable tile (px)
const MAX_TILE = 56;       // largest tile (px)

// ---------- Math helpers ----------
function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

// Pick a tile pixel size so the rectangle fits the plane box, clamped to a
// readable range. Deterministic: depends only on cols/rows.
function tilePx(cols, rows) {
  const fitW = MAX_PLANE_W / cols;
  const fitH = MAX_PLANE_H / rows;
  let t = Math.floor(Math.min(fitW, fitH));
  if (t > MAX_TILE) t = MAX_TILE;
  if (t < MIN_TILE) t = MIN_TILE;
  return t;
}

// ---------- SVG fragment builders ----------
function escapeText(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function tileGrid(cols, rows, t, fill) {
  let out = '';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = PLANE_X0 + c * t;
      const y = PLANE_Y0 + r * t;
      out += `<rect x="${x}" y="${y}" width="${t}" height="${t}" fill="${fill}" fill-opacity="0.16"/>`;
    }
  }
  return out;
}

function innerLines(cols, rows, t, stroke, opacity) {
  const w = cols * t;
  const h = rows * t;
  let out = `<g stroke="${stroke}" stroke-width="1" stroke-opacity="${opacity}">`;
  for (let c = 1; c < cols; c++) {
    const x = PLANE_X0 + c * t;
    out += `<line x1="${x}" y1="${PLANE_Y0}" x2="${x}" y2="${PLANE_Y0 + h}"/>`;
  }
  for (let r = 1; r < rows; r++) {
    const y = PLANE_Y0 + r * t;
    out += `<line x1="${PLANE_X0}" y1="${y}" x2="${PLANE_X0 + w}" y2="${y}"/>`;
  }
  out += `</g>`;
  return out;
}

function dimensionLabels(width, height, cols, rows, t, palette) {
  const w = cols * t;
  const h = rows * t;
  const cx = PLANE_X0 + w / 2;
  const cy = PLANE_Y0 + h / 2;
  // width label above the rectangle, height label left of it (rotated)
  return (
    `<text x="${cx}" y="${PLANE_Y0 - 12}" text-anchor="middle" font-size="13" fill="${palette.text}">${width}</text>` +
    `<text x="${PLANE_X0 - 16}" y="${cy}" text-anchor="middle" font-size="13" fill="${palette.text}" transform="rotate(-90 ${PLANE_X0 - 16} ${cy})">${height}</text>`
  );
}

function infoPanel(info, palette) {
  if (!info || !Array.isArray(info.lines)) return '';
  let y = 60;
  let out = '';
  for (const line of info.lines) {
    if (line.kind === 'separator') {
      out += `<line x1="${INFO_X}" y1="${y - 12}" x2="${INFO_RIGHT}" y2="${y - 12}" stroke="${palette.separator}" stroke-width="1"/>`;
      y += 14;
      continue;
    }
    if (line.kind === 'formula') {
      const color =
        line.role === 'result' ? palette.resultStroke :
        line.role === 'secondary' ? palette.secondary :
        line.role === 'primary' ? palette.infoFormula :
        palette.infoFormula;
      out += `<text x="${INFO_X}" y="${y}" font-size="14" font-weight="bold" fill="${color}">${escapeText(line.text)}</text>`;
      y += 26;
      continue;
    }
    // note
    const style = line.italic ? ` font-style="italic"` : '';
    const fill = line.italic ? palette.textMuted : palette.text;
    out += `<text x="${INFO_X}" y="${y}" font-size="${line.italic ? 12 : 13}"${style} fill="${fill}">${escapeText(line.text)}</text>`;
    y += line.italic ? 22 : 24;
  }
  return { svg: out, endY: y };
}

// ---------- Scene renderer ----------
function renderTiledRectangle(spec) {
  const palette = { ...C, ...(spec.style || {}) };

  const width = spec.width;
  const height = spec.height;
  const side = gcd(width, height);
  const cols = width / side;
  const rows = height / side;
  const ratio = spec.reading === 'ratio';

  const t = tilePx(cols, rows);
  const w = cols * t;
  const h = rows * t;

  const tileFill = ratio ? palette.secondary : palette.primary;
  const gridStroke = ratio ? palette.strokeRatio : palette.stroke;
  const outerStroke = ratio ? palette.borderRatio : palette.border;

  let body = '';

  // tile fills
  body += tileGrid(cols, rows, t, tileFill);

  if (ratio) {
    // count bands: top row (cols wide) + left col (rows tall), amber
    body += `<rect x="${PLANE_X0}" y="${PLANE_Y0}" width="${w}" height="${t}" fill="${palette.result}" fill-opacity="0.30"/>`;
    body += `<rect x="${PLANE_X0}" y="${PLANE_Y0}" width="${t}" height="${h}" fill="${palette.result}" fill-opacity="0.30"/>`;
    // corner overlap re-tint so it doesn't read double
    body += `<rect x="${PLANE_X0}" y="${PLANE_Y0}" width="${t}" height="${t}" fill="${palette.result}" fill-opacity="0.18"/>`;
  } else {
    // tiles reading: amber anchor tile (top-left)
    body += `<rect x="${PLANE_X0}" y="${PLANE_Y0}" width="${t}" height="${t}" fill="${palette.result}" fill-opacity="0.55"/>`;
  }

  // inner grid lines
  body += innerLines(cols, rows, t, gridStroke, ratio ? 0.6 : 0.55);

  // outer border
  body += `<rect x="${PLANE_X0}" y="${PLANE_Y0}" width="${w}" height="${h}" fill="none" stroke="${outerStroke}" stroke-width="2"/>`;

  if (ratio) {
    // count labels: cols across (above), rows down (left), coral
    const cxTop = PLANE_X0 + w / 2;
    const cyLeft = PLANE_Y0 + h / 2;
    body += `<text x="${cxTop}" y="${PLANE_Y0 - 28}" text-anchor="middle" font-size="12" font-weight="bold" fill="${palette.resultStroke}">${cols}</text>`;
    body += `<text x="${PLANE_X0 - 32}" y="${cyLeft}" text-anchor="middle" font-size="12" font-weight="bold" fill="${palette.resultStroke}" transform="rotate(-90 ${PLANE_X0 - 32} ${cyLeft})">${rows}</text>`;
  } else {
    // anchor tile side label = the gcd
    body += `<text x="${PLANE_X0 + t / 2}" y="${PLANE_Y0 + t / 2 + 4}" text-anchor="middle" font-size="12" font-weight="bold" fill="${outerStroke}">${side}</text>`;
  }

  // dimension labels
  body += dimensionLabels(width, height, cols, rows, t, palette);

  // info panel
  const info = infoPanel(spec.info, palette);
  const infoSvg = info.svg || '';
  const infoEndY = info.endY || 0;

  // auto-size viewBox height from the taller of plane and info column
  const planeBottom = PLANE_Y0 + h + 20;
  const vbH = Math.max(planeBottom, infoEndY + 10, 120);

  const titleW = `${width} × ${height} rectangle`;
  const titleDesc = ratio
    ? `Aspect ratio ${width}:${height} reduced by gcd(${width},${height})=${side} to ${cols}:${rows}.`
    : `Largest square tile of side gcd(${width},${height})=${side}; ${cols} × ${rows} = ${cols * rows} tiles cover the rectangle exactly.`;

  return (
    `<svg viewBox="0 0 ${VIEWBOX_W} ${vbH}" xmlns="http://www.w3.org/2000/svg" width="100%" font-family="Arial, sans-serif">` +
    `<title>${escapeText(titleW)}</title>` +
    `<desc>${escapeText(titleDesc)}</desc>` +
    body +
    infoSvg +
    `</svg>`
  );
}

// ---------- Public API ----------
export function renderRectangleTile(spec) {
  if (!spec || spec.kind !== 'tiled-rectangle') {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 120"></svg>';
  }
  return renderTiledRectangle(spec);
}