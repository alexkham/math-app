// Graph Studio — the lab's list of hard cases
//
// Every case is a small scene plus one sentence saying what a correct
// picture looks like. The list is the quality bar of the engine: a bug
// that is reported becomes a new case here and is never removed.
//
//   { group, name, expected, scene: { expressions, view? }, select? }
//
// `name` and `expected` are prose; math inside them goes between dollar
// signs as LaTeX ($x^{1/3}$) and is typeset by the lab. Never write a
// formula as keyboard text there.
//
// `select` is the index of the row to select when the case opens (its
// roots, extrema and intersections are then shown).

const TWO_PI = 2 * Math.PI;

export const LAB_CASES = [
  // ------------------------------------------------ explicit curves
  { group: 'Explicit curves', name: '$\\tan(x)$', expected: 'Separate branches. No vertical lines at the asymptotes.',
    scene: { expressions: ['y = tan(x)'] } },
  { group: 'Explicit curves', name: '$\\lfloor x \\rfloor$ and $\\operatorname{sign}(x)$', expected: 'Flat steps with gaps between them. No connecting lines.',
    scene: { expressions: ['y = floor(x)', 'y = sign(x) + 5'] } },
  { group: 'Explicit curves', name: '$\\sin\\left(\\frac{1}{x}\\right)$', expected: 'Dense but honest oscillation near 0. Clean curve away from 0. Zoom in on 0 to check.',
    scene: { expressions: ['y = sin(1/x)'], view: { cx: 0, cy: 0, ux: 0.004, uy: 0.004 } } },
  { group: 'Explicit curves', name: '$\\dfrac{1}{(x-0.3)^2}$', expected: 'Both sides rise to the top edge. Nothing joins them.',
    scene: { expressions: ['y = 1/(x-0.3)^2'] } },
  { group: 'Explicit curves', name: '$\\sqrt{x}$ and $\\ln(x)$', expected: '$\\sqrt{x}$ starts exactly at the origin. $\\ln(x)$ runs down along the $y$-axis and off the bottom.',
    scene: { expressions: ['y = sqrt(x)', 'y = ln(x)'], view: { cx: 3, cy: 0, ux: 0.012, uy: 0.012 } } },
  { group: 'Explicit curves', name: '$x^{1/3}$', expected: 'Drawn for negative $x$ too (real cube root), vertical tangent at $0$.',
    scene: { expressions: ['y = x^(1/3)'], view: { cx: 0, cy: 0, ux: 0.012, uy: 0.012 } } },
  { group: 'Explicit curves', name: '$\\sin(50x)$', expected: 'A clean fast wave. Zoom out: it must fill a band evenly, with no wave-like false pattern.',
    scene: { expressions: ['y = sin(50x)'], view: { cx: 0, cy: 0, ux: 0.004, uy: 0.004 } } },
  { group: 'Explicit curves', name: '$\\arctan(1000x)$', expected: 'Steep in the middle but one joined curve.',
    scene: { expressions: ['y = atan(1000x)'], view: { cx: 0, cy: 0, ux: 0.01, uy: 0.01 } } },
  { group: 'Explicit curves', name: '$0.001x^3$ at wide zoom', expected: 'One curve. Grid and numbers stay readable.',
    scene: { expressions: ['y = 0.001x^3'], view: { cx: 0, cy: 0, ux: 0.6, uy: 20 } } },
  { group: 'Explicit curves', name: '$x^x$', expected: 'Drawn for $x > 0$ only. No stray dots on the left.',
    scene: { expressions: ['y = x^x'], view: { cx: 1, cy: 2, ux: 0.01, uy: 0.01 } } },

  // ------------------------------------------------ other types
  { group: 'Other curve types', name: 'Circle', expected: 'A smooth closed circle of radius $5$.',
    scene: { expressions: ['x^2 + y^2 = 25'] } },
  { group: 'Other curve types', name: 'Folium', expected: 'A loop in the first quadrant and two branches running off along one slanted line.',
    scene: { expressions: ['x^3 + y^3 = 6xy'] } },
  { group: 'Other curve types', name: 'Elliptic curve', expected: 'One connected curve, open to the right.',
    scene: { expressions: ['y^2 = x^3 - 3x + 3'] } },
  { group: 'Other curve types', name: '$\\tan$ written implicitly', expected: 'Same picture as $y = \\tan(x)$. No false vertical lines.',
    scene: { expressions: ['y - tan(x) = 0'] } },
  { group: 'Other curve types', name: 'Touching zero: $(x^2+y^2-1)^2=0$', expected: 'KNOWN GAP: a circle of radius $1$ should appear; the present method cannot see it (nothing is drawn).',
    scene: { expressions: ['(x^2+y^2-1)^2 = 0'], view: { cx: 0, cy: 0, ux: 0.006, uy: 0.006 } } },
  { group: 'Other curve types', name: 'Rose', expected: 'Three petals, the longest reaching $4$.',
    scene: { expressions: ['r = 4sin(3θ)'] } },
  { group: 'Other curve types', name: 'Figure-eight', expected: 'A closed figure-eight, $12$ wide and $6$ tall.',
    scene: { expressions: ['(6cos(t), 3sin(2t))'] } },
  { group: 'Other curve types', name: '$x$ as a function of $y$', expected: 'A parabola opening to the right.',
    scene: { expressions: ['x = y^2 - 4'] } },
  { group: 'Other curve types', name: 'Region above a parabola', expected: 'Shaded above the parabola, dashed boundary.',
    scene: { expressions: ['y > x^2 - 4'] } },
  { group: 'Other curve types', name: 'Filled disc', expected: 'Shaded disc of radius $3$, solid boundary.',
    scene: { expressions: ['x^2 + y^2 <= 9'] } },
  { group: 'Other curve types', name: 'Band with a restriction', expected: 'Band between $y = -1$ and the sine curve, right half only, both boundaries dashed.',
    scene: { expressions: ['-1 < y < sin(x) {x > 0}'] } },
  { group: 'Other curve types', name: 'Curve on an interval', expected: 'The cubic drawn only from $x = -2$ to $x = 1.5$.',
    scene: { expressions: ['y = x^3 {-2 < x < 1.5}'] } },

  // ------------------------------------------------ language and model
  { group: 'Language', name: 'How text is read', expected: 'Every row draws or shows a value. No errors.',
    scene: { expressions: [{ text: 'a = 2', slider: { min: -5, max: 5 } }, 'a_1 = 3', 'xy = 1', 'y = 2x', 'y = sin2x', 'y = sin x + 3', 'y = |x-1| - 4', 'y = a(x+1)', 'y = a_1 - x', '2^10 + sqrt(144)'] } },
  { group: 'Language', name: 'Functions of functions', expected: 'Moving $a$ or $b$ changes both curves together.',
    scene: { expressions: [{ text: 'a = 2', slider: { min: -5, max: 5 } }, { text: 'b = 1', slider: { min: 0.1, max: 4 } }, 'f(x) = a sin(bx)', 'g(x) = f(x-1)'] } },
  { group: 'Language', name: 'Errors stay in their row', expected: 'Rows 1, 2 and 5: circular definition. Row 4: undefined $k$ with an add-slider button. Row 3 still draws.',
    scene: { expressions: ['a = b + 1', 'b = a', 'y = x/2', 'y = kx', 'c = a + 1'] } },
  { group: 'Language', name: 'Point bound to a slider', expected: 'Drag the point: it stays on the curve and the slider $p$ follows.',
    scene: { expressions: ['f(x) = x^2/4 - 2', { text: 'p = 2', slider: { min: -10, max: 10 } }, '(p, f(p))'] } },

  // ------------------------------------------------ analysis
  { group: 'Analysis', name: 'Special points', expected: 'For the cubic: 3 roots, 2 turning points, the $y$-intercept and every crossing with the cosine curve. Click a grey dot for its coordinates.',
    select: 0,
    scene: { expressions: ['f(x) = x^3/4 - 3x', 'y = 2cos(x) + 1'] } },
  { group: 'Analysis', name: 'No false points on steps', expected: '$\\lfloor x \\rfloor$ selected: no dots along the flat steps (only the $y$-intercept).',
    select: 0,
    scene: { expressions: ['y = floor(x)'] } },

  // ------------------------------------------------ whole scenes
  { group: 'Scenes', name: 'Overview', expected: 'Sliders with animation, a function built on another, a point riding the curve, a plain calculation.',
    scene: { expressions: [{ text: 'a = 2', slider: { min: -5, max: 5 } }, { text: 'b = 1', slider: { min: 0.1, max: 4 } }, 'f(x) = a sin(bx)', 'g(x) = f(x - 1) + 0.5', { text: 'p = 1.5', slider: { min: -10, max: 10 } }, '(p, f(p))', '2^10 + sqrt(144)'] } },
  { group: 'Scenes', name: 'Implicit curves', expected: 'Circle, folium and elliptic curve together; two more rows are hidden (click their dots).',
    scene: { expressions: ['x^2 + y^2 = 25', 'x^3 + y^3 = 6xy', 'y^2 = x^3 - 3x + 3', { text: 'sin(x) sin(y) = 0.3', hidden: true }, { text: '|x| + |y| = 7', hidden: true }] } },
  { group: 'Scenes', name: 'Parametric and polar', expected: 'A rose whose petal count follows $k$, a figure-eight, and a hidden spiral.',
    scene: { expressions: [{ text: 'k = 3', slider: { min: 1, max: 8, step: 1 } }, 'r = 4 sin(kθ)', '(6cos(t), 3sin(2t))', { text: 'r = θ/2', param: { min: 0, max: 3 * TWO_PI }, hidden: true }] } },
  { group: 'Scenes', name: 'Inequalities and restrictions', expected: 'Two regions, a curve on an interval, and a band on the right half.',
    scene: { expressions: ['y > x^2 - 4', 'x^2 + y^2 <= 9', 'y = x^3 {-2 < x < 1.5}', '-1 < y < sin(x) {x > 0}'] } },
  { group: 'Scenes', name: 'Everything depends on something', expected: 'Drag the point: $p$ and $q$ change and the perpendicular line follows. Change $m$: the lines and the distance $d$ update.',
    scene: { expressions: [{ text: 'm = 0.5', slider: { min: -3, max: 3 } }, { text: 'k = 1', slider: { min: -5, max: 5 } }, 'y = mx + k', { text: 'p = 2', slider: { min: -10, max: 10 } }, { text: 'q = -3', slider: { min: -10, max: 10 } }, '(p, q)', 'y - q = -(x - p)/m', 'd = |m p - q + k| / sqrt(m^2 + 1)'] } }
];

export function labGroups(cases = LAB_CASES) {
  const groups = [];
  cases.forEach((c, index) => {
    let g = groups.find(x => x.name === c.group);
    if (!g) { g = { name: c.group, items: [] }; groups.push(g); }
    g.items.push({ ...c, index });
  });
  return groups;
}
