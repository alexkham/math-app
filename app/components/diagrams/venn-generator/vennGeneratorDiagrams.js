// Frozen-state SVGs for the Venn Generator (Line 1 anchor mesh).
//
// This tool already carries the machinery a frozen still needs, so almost
// nothing here is a port. The component exports its expression parser and
// evaluator (parseExpression / evalNode), its region enumerator
// (buildRegionTable / highlightFromExpression), its layout maker
// (defaultLayout / RELATION_LAYOUTS) and its path builders (shapePath /
// rectPath / twoSetPaths), and this module simply calls them - so every shaded
// region below is decided by the same code that decides it on screen.
//
// Composition follows the component's own render order:
//
//   white canvas -> region fills -> universe rectangle -> set outlines ->
//   set name labels
//
// At TWO sets the component fills each region with an explicit path from
// twoSetPaths, so the stills do the same. At THREE or more it stacks clipPaths
// (in/out of each curve) over a full-size rectangle, which is reproduced here
// with the same clip ids per still. Region sampling, element chips, counts and
// drag grips are omitted: they depend on interaction or on the Elements tab,
// and a still has neither.
//
// Every state is frozen at the component's own defaults - 600x460 canvas,
// margin 14, size 112, DEFAULT_THEME colours - with only the set count, the
// expression and (for the relation states) the layout varied.

import {
  SET_NAMES, buildRegionTable, parseExpression, evalNode,
  defaultLayout, RELATION_LAYOUTS,
  shapePath, rectPath, twoSetPaths, DEFAULT_THEME, MATH_FONT,
} from './VennGenerator';

const WIDTH = 600, HEIGHT = 460, MARGIN = 14, SIZE = 112;
const U_RECT = { x: MARGIN, y: MARGIN, width: WIDTH - MARGIN * 2, height: HEIGHT - MARGIN * 2 };

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function build(setCount, expression, layoutKey) {
  const sets = SET_NAMES.slice(0, setCount);
  const shapes = layoutKey && RELATION_LAYOUTS[layoutKey]
    ? RELATION_LAYOUTS[layoutKey](setCount, SIZE, WIDTH, HEIGHT)
    : defaultLayout(setCount, SIZE, WIDTH, HEIGHT);
  const regionTable = buildRegionTable(sets);
  // the component's own `evaluation` memo: parse once, then ask evalNode about
  // each region's membership vars. highlightFromExpression is the same walk but
  // returns keys rather than the mask Set the renderer needs.
  const tree = parseExpression(expression);
  const selected = new Set();
  regionTable.forEach((r) => { if (evalNode(tree, r.vars)) selected.add(r.mask); });
  return { sets, shapes, regionTable, evaluation: { selected } };
}

function freeze(key, { setCount, expression, layout, label }) {
  const { sets, shapes, regionTable, evaluation } = build(setCount, expression, layout);
  const t = DEFAULT_THEME;
  const uid = 'vg-' + key;

  let s = `<rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="#ffffff"/>`;

  if (setCount === 2) {
    // the component's explicit two-set region paths
    const two = twoSetPaths(shapes.A, shapes.B, U_RECT);
    regionTable.forEach((r) => {
      const d = two.paths[r.mask];
      if (!d) return;
      const on = evaluation.selected.has(r.mask);
      s += `<path d="${d}" fill-rule="evenodd" fill="${on ? t.color : t.neutralFill}"` +
        `${on ? ` opacity="${t.opacity}"` : ''}/>`;
    });
  } else {
    // the component's clipPath stack: one in/out clip per curve
    s += '<defs>';
    sets.forEach((n) => {
      s += `<clipPath id="in${n}${uid}" clipPathUnits="userSpaceOnUse">` +
        `<path d="${shapePath(shapes[n])}"/></clipPath>`;
      s += `<clipPath id="out${n}${uid}" clipPathUnits="userSpaceOnUse">` +
        `<path d="${rectPath(U_RECT)} ${shapePath(shapes[n])}" clip-rule="evenodd"/></clipPath>`;
    });
    s += '</defs>';
    regionTable.forEach((r) => {
      if (!evaluation.selected.has(r.mask)) return;
      let node = `<rect x="${U_RECT.x}" y="${U_RECT.y}" width="${U_RECT.width}" ` +
        `height="${U_RECT.height}" fill="${t.color}" opacity="${t.opacity}"/>`;
      for (let i = sets.length - 1; i >= 0; i--) {
        const clip = ((r.mask & (1 << i)) ? 'in' : 'out') + sets[i] + uid;
        node = `<g clip-path="url(#${clip})">${node}</g>`;
      }
      s += node;
    });
  }

  // universe rectangle
  s += `<rect x="${U_RECT.x}" y="${U_RECT.y}" width="${U_RECT.width}" height="${U_RECT.height}" ` +
    `fill="none" stroke="${t.universeStroke}" stroke-width="1"/>`;
  s += `<text x="${U_RECT.x + 15}" y="${U_RECT.y + 26}" font-family="${MATH_FONT}" ` +
    `font-size="17" fill="#8794a5">U</text>`;

  // set outlines
  sets.forEach((n) => {
    s += `<path d="${shapePath(shapes[n])}" fill="none" stroke="${t.stroke}" ` +
      `stroke-width="${t.strokeWidth}"/>`;
  });

  // set name labels, placed by the component's own rule: push each label
  // outward from the group centre along the line through that curve's centre
  const centre = {
    x: sets.reduce((a, n) => a + shapes[n].cx, 0) / sets.length,
    y: sets.reduce((a, n) => a + shapes[n].cy, 0) / sets.length,
  };
  sets.forEach((n) => {
    const sh = shapes[n];
    let dx = sh.cx - centre.x, dy = sh.cy - centre.y;
    if (Math.hypot(dx, dy) < 1) { dx = 0; dy = -1; }
    const d = Math.hypot(dx, dy);
    const reach = Math.max(sh.rx, sh.ry) + 18;
    const tx = Math.max(26, Math.min(WIDTH - 26, sh.cx + (dx / d) * reach));
    const ty = Math.max(36, Math.min(HEIGHT - 12, sh.cy + (dy / d) * reach + 6));
    s += `<text x="${Math.round(tx * 100) / 100}" y="${Math.round(ty * 100) / 100}" ` +
      `text-anchor="middle" font-family="${MATH_FONT}" font-size="20" font-style="italic" ` +
      `fill="${t.stroke}">${n}</text>`;
  });

  return `<svg viewBox="0 0 ${WIDTH} ${HEIGHT}" width="480" xmlns="http://www.w3.org/2000/svg" ` +
    `role="img" aria-label="${esc(label)}">` + s + `</svg>`;
}

/* ---- the frozen states ---- */
export const STATES = {
  intersection: { setCount: 2, expression: 'A ∩ B',
    label: 'Two sets with A intersect B shaded' },
  union: { setCount: 2, expression: 'A ∪ B',
    label: 'Two sets with A union B shaded' },
  symmetricDifference: { setCount: 2, expression: 'A ⊕ B',
    label: 'Two sets with the symmetric difference shaded' },
  complement: { setCount: 2, expression: 'Aᶜ',
    label: 'Two sets with the complement of A shaded' },
  subset: { setCount: 2, expression: 'A ∩ B', layout: 'A ⊆ B',
    label: 'The A inside B layout, with A intersect B shaded' },
  disjoint: { setCount: 2, expression: 'A ∩ B', layout: 'Disjoint',
    label: 'The disjoint layout, where A intersect B shades nothing' },
  threeSet: { setCount: 3, expression: 'A ∩ B ∩ C',
    label: 'Three sets with the triple intersection shaded' },
  deMorgan: { setCount: 3, expression: '(A ∪ B)ᶜ',
    label: 'Three sets with the complement of A union B shaded' },
  fourSet: { setCount: 4, expression: 'A ∩ B',
    label: 'The fixed four-set ellipse layout with A intersect B shaded' },
  fiveSet: { setCount: 5, expression: 'A ∩ B ∩ C',
    label: 'The fixed five-set layout with a triple intersection shaded' },
};

/* ---- what each state selects, so the page prose quotes the tool ---- */
export const readings = Object.fromEntries(
  Object.entries(STATES).map(([k, cfg]) => {
    const { shapes, regionTable, evaluation } = build(cfg.setCount, cfg.expression, cfg.layout);
    // At two sets the layout decides which regions have any AREA. The region
    // table is combinatorial - always 2^n rows - so a region can be selected by
    // the expression and still have nothing to shade, which is exactly what the
    // Disjoint layout does to A intersect B. Record both counts so the page can
    // state the difference rather than gloss it.
    let drawn = null;
    if (cfg.setCount === 2) {
      const two = twoSetPaths(shapes.A, shapes.B, U_RECT);
      drawn = regionTable
        .filter((r) => two.paths[r.mask] && evaluation.selected.has(r.mask))
        .map((r) => r.label);
    }
    return [k, {
      setCount: cfg.setCount,
      expression: cfg.expression,
      layout: cfg.layout || 'default',
      totalRegions: regionTable.length,
      shadedRegions: evaluation.selected.size,
      labels: regionTable.filter((r) => evaluation.selected.has(r.mask)).map((r) => r.label),
      drawnRegions: drawn === null ? null : drawn.length,
      drawnLabels: drawn,
    }];
  })
);

const vennGeneratorDiagrams = Object.fromEntries(
  Object.entries(STATES).map(([k, cfg]) => [k, freeze(k, cfg)])
);

export default vennGeneratorDiagrams;
