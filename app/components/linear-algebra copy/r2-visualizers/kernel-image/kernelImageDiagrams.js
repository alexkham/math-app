// Frozen-state SVGs for the Kernel & Image (R²) tool (Line 1 anchor mesh).
//
// This tool draws TWO canvases side by side — the domain, carrying the kernel
// and the probe vector v, and the codomain, carrying the image and Av. A still
// that showed only one of them would miss the point of the tool, so each frozen
// state composes both into a single SVG: the domain group at x = 0 and the
// codomain group translated right, with a divider and a caption for each.
//
// Both groups are built from the component's own SVGRender string builders in
// its own composition order, so the frozen output is the tool's output. The
// arrow markers of both canvases are reproduced.
//
// CSS is handled as in the eigenvectors module: the component ships one large
// COMPONENT_CSS for its whole UI, so svgCssFor keeps only the rules whose
// selectors mention a class the generated markup actually contains, plus the
// .ki-root block that declares the custom properties those rules use.
//
// Every state is frozen at the canvases' own default probe vector v = [1.5, 1]
// with the component's DEFAULT_LAYERS (grid, kernel, image, trail, labels).

import { SVGRender, SCENARIOS, DEFAULT_GEOM, COMPONENT_CSS } from './KernelImage';

const G = DEFAULT_GEOM;                 // { size: 460, scale: 40, gridR: 6 }
const SIZE = G.size;
const GAP = 26;
const CAPTION_H = 22;
const V = [1.5, 1];
const LAYERS = { grid: true, kernel: true, image: true, trail: false, swarm: false, labels: true };

const MARK = (id, fill) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" ` +
  `orient="auto" markerUnits="strokeWidth"><path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="${fill}"/></marker>`;

const MARKERS = '<defs>' + MARK('ki-arr-v', '#ea580c') + MARK('ki-arr-av', '#0891b2') + '</defs>';

function svgCssFor(markup) {
  const used = new Set();
  for (const m of markup.matchAll(/class="([^"]+)"/g)) {
    m[1].split(/\s+/).forEach((c) => c && used.add(c));
  }
  const out = [];
  const rootBlock = /\.ki-root\s*\{[^}]*\}/.exec(COMPONENT_CSS);
  if (rootBlock) out.push(rootBlock[0]);
  for (const rule of COMPONENT_CSS.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const sel = rule[1].replace(/\/\*[\s\S]*?\*\//g, '').trim();
    if (!sel || sel.startsWith('@')) continue;
    if ([...used].some((c) => sel.includes('.' + c))) out.push(sel + '{' + rule[2].trim() + '}');
  }
  return out.join('');
}

// DomainCanvas's own composition order
function domainInner(A) {
  let s = '';
  if (LAYERS.grid) s += SVGRender.grid(G);
  if (LAYERS.kernel) s += SVGRender.kerLayer(A, LAYERS.labels, G);
  s += SVGRender.origin(G);
  s += SVGRender.vArrow(V, LAYERS.labels, G);
  return s;
}

// CodomainCanvas's own composition order
function codomainInner(A) {
  let s = '';
  if (LAYERS.grid) s += SVGRender.grid(G);
  if (LAYERS.image) s += SVGRender.imgLayer(A, LAYERS.labels, G);
  s += SVGRender.origin(G);
  s += SVGRender.avArrow(A, V, LAYERS.labels, G);
  return s;
}

const caption = (x, text) =>
  `<text x="${x + SIZE / 2}" y="${CAPTION_H - 7}" text-anchor="middle" font-size="12.5" ` +
  `font-weight="600" fill="#4a5673" font-family="Arial, sans-serif">${text}</text>`;

function freeze(key) {
  const sc = SCENARIOS[key];
  // SCENARIOS entries carry A as a builder, not a matrix — the component calls
  // sc.A(arg) too. Angular scenarios (rotate) fall back to their own default.
  const A = sc.A();

  const dom = domainInner(A);
  const cod = codomainInner(A);
  const totalW = SIZE * 2 + GAP;
  const totalH = SIZE + CAPTION_H;

  const body =
    caption(0, 'domain &#8212; kernel in red') +
    caption(SIZE + GAP, 'codomain &#8212; image in green') +
    `<g class="ki-canvas ki-canvas-domain" transform="translate(0 ${CAPTION_H})">${dom}</g>` +
    `<g class="ki-canvas ki-canvas-codomain" transform="translate(${SIZE + GAP} ${CAPTION_H})">${cod}</g>` +
    `<line x1="${SIZE + GAP / 2}" y1="${CAPTION_H}" x2="${SIZE + GAP / 2}" y2="${totalH}" ` +
    `stroke="#dde3ec" stroke-width="1"/>`;

  return (
    `<svg class="ki-root" viewBox="0 0 ${totalW} ${totalH}" width="520" ` +
    `xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Domain and codomain for the ${sc.label || key} matrix, showing kernel and image">` +
    `<style>${svgCssFor(dom + cod)}</style>` +
    MARKERS +
    `<rect width="${totalW}" height="${totalH}" fill="#ffffff"/>` +
    body +
    `</svg>`
  );
}

// which scenario represents each rank category on the page
export const representative = {
  full: 'rotate',
  rankOne: 'projectX',
  zero: 'zero',
};

export const groupOf = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, v]) => [k, v.group])
);

export const meta = {
  size: SIZE,
  v: V,
  scenarioCount: Object.keys(SCENARIOS).length,
  groups: Object.entries(SCENARIOS).reduce((acc, [k, v]) => {
    (acc[v.group] = acc[v.group] || []).push(k);
    return acc;
  }, {}),
};

const kernelImageDiagrams = {
  full: freeze(representative.full),
  rankOne: freeze(representative.rankOne),
  zero: freeze(representative.zero),
};

export default kernelImageDiagrams;
