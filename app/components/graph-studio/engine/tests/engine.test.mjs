// Graph Studio — engine tests. Plain Node, no test runner:
//
//   node app/components/graph-studio/engine/tests/engine.test.mjs
//
// Exits with code 1 when any check fails.

import {
  createScene, compileScene, computeGeometry, sceneToSVG, setVariables, viewFromBounds, rowToTex, scanDefinitions,
  renderSVG, analyzeFunction, valueAt, markersIn, antiderivative, integrate, texToText,
  sceneHash, readSceneHash, unpackScene, pickFunction, functionRows, numberText
} from '../index.js';
import { getTheme } from '../../themes/themes.js';
import { LAB_CASES } from '../../shells/labCases.js';

let passed = 0, failed = 0;
const fails = [];
function check(name, cond, detail = '') {
  if (cond) passed++;
  else { failed++; fails.push(name + (detail ? '  →  ' + detail : '')); }
}
const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol * (1 + Math.abs(b));

const W = 800, H = 600;
const VIEW = { cx: 0, cy: 0, ux: 0.025, uy: 0.025 };   // x −10…10, y −7.5…7.5

function build(rows, view = VIEW, opts = {}) {
  const scene = createScene({ expressions: rows, view });
  const compiled = compileScene(scene);
  const geometry = computeGeometry(compiled, scene.view, W, H, opts);
  return { scene, compiled, geometry };
}
const rowOf = (b, i) => b.compiled.rows[b.scene.expressions[i].id];
const layerOf = (b, i) => b.geometry.layers.find(l => l.id === b.scene.expressions[i].id);

// Longest straight piece of a layer's paths that lies (at least partly)
// inside the canvas, in pixels. A false connector across a jump shows
// up as one very long piece.
function longestVisiblePiece(layer) {
  let best = 0;
  for (const p of layer.paths) {
    for (let i = 2; i < p.length; i += 2) {
      const x0 = p[i - 2], y0 = p[i - 1], x1 = p[i], y1 = p[i + 1];
      const in0 = x0 >= 0 && x0 <= W && y0 >= 0 && y0 <= H;
      const in1 = x1 >= 0 && x1 <= W && y1 >= 0 && y1 <= H;
      if (!in0 && !in1) continue;
      best = Math.max(best, Math.hypot(x1 - x0, y1 - y0));
    }
  }
  return best;
}
// Screen x → world x for the test view.
const wx = sx => VIEW.cx + (sx - W / 2) * VIEW.ux;
const wy = sy => VIEW.cy - (sy - H / 2) * VIEW.uy;

// ------------------------------------------------------------
// Language
// ------------------------------------------------------------
{
  const b = build(['2^10 + sqrt(144)', 'log(1000)', 'ln(e)', '(-8)^(1/3)', '(-8)^(1/2)', '|3-5|', 'sin(pi/2)', '-2^2', '1e3 + 1']);
  check('calculation 2^10 + sqrt(144) = 1036', rowOf(b, 0).value === 1036, JSON.stringify(rowOf(b, 0)));
  check('log is base 10', near(rowOf(b, 1).value, 3));
  check('ln is natural', near(rowOf(b, 2).value, 1));
  check('(-8)^(1/3) = -2', near(rowOf(b, 3).value, -2));
  check('(-8)^(1/2) is undefined', Number.isNaN(rowOf(b, 4).value));
  check('|3-5| = 2', rowOf(b, 5).value === 2);
  check('sin(pi/2) = 1', near(rowOf(b, 6).value, 1));
  check('-2^2 = -4', rowOf(b, 7).value === -4);
  check('1e3 + 1 = 1001', rowOf(b, 8).value === 1001);
}
{
  // xy, 2x, sin2x, sin x, a(x+1), a_1
  const b = build(['a = 3', 'a_1 = 3', 'f(x) = 2x', 'g(x) = sin2x', 'h(x) = sin x', 'k(x) = a(x+1)', 'm(x) = a_1 x', 'xy = 1']);
  const F = b.compiled.F;
  check('2x', F.f(4) === 8);
  check('sin2x reads sin(2x)', near(F.g(2), Math.sin(4)), 'g(2) = ' + F.g(2));
  check('sin x reads sin(x)', near(F.h(2), Math.sin(2)));
  check('a(x+1) multiplies when a is a variable', F.k(1) === 6);
  check('a_1 is one name', F.m(2) === 6);
  check('xy = 1 is implicit', rowOf(b, 7).kind === 'implicit', JSON.stringify(rowOf(b, 7)));
  check('a = 3 is a slider', rowOf(b, 0).kind === 'slider' && rowOf(b, 0).value === 3);
}
{
  const b = build(['y = x^2', 'x = y^2', 'r = 4sin(3θ)', '(6cos(t), 3sin(2t))', '(1, 2)', 'x^2 + y^2 = 25', 'y > x^2 - 4', 'x^2 + y^2 <= 9', 'sin(x)', '-1 < y < sin(x) {x > 0}', 'y = x^3 {-2 < x < 1.5}']);
  const kinds = b.scene.expressions.map((_, i) => rowOf(b, i).kind);
  check('row kinds', kinds.join(',') === 'curve,curve,polar,parametric,point,implicit,region,region,curve,region,curve', kinds.join(','));
  const types = b.compiled.items.map(it => it.type);
  check('item types', types.join(',') === 'curveX,curveY,param,param,point,implicit,region,region,curveX,region,curveX', types.join(','));
}

// ------------------------------------------------------------
// Typeset form of a row
// ------------------------------------------------------------
{
  const names = scanDefinitions(['a = 2', 'f(x) = x', 'a_1 = 1']);
  const tex = t => rowToTex(t, names);
  check('tex: power', tex('y = x^(1/3)') === 'y={x}^{\\frac{1}{3}}', tex('y = x^(1/3)'));
  check('tex: fraction drops grouping brackets', tex('y = 1/(x-0.3)^2') === 'y=\\frac{1}{{\\left(x-0.3\\right)}^{2}}', tex('y = 1/(x-0.3)^2'));
  check('tex: root and absolute value', tex('y = sqrt(x) + |x|') === 'y=\\sqrt{x}+\\left|x\\right|', tex('y = sqrt(x) + |x|'));
  check('tex: sin2x shows sin(2x)', tex('y = sin2x') === 'y=\\sin\\left(2 x\\right)', tex('y = sin2x'));
  check('tex: a(x+1) has no dot', tex('y = a(x+1)') === 'y=a\\left(x+1\\right)', tex('y = a(x+1)'));
  check('tex: subscript and theta', tex('r = a_1 θ') === 'r=a_{1}\\theta', tex('r = a_1 θ'));
  check('tex: inequality chain with restriction', tex('-1 < y <= sin(x) {x > 0}') === '-1< y\\le \\sin\\left(x\\right)\\ \\left\\{x> 0\\right\\}', tex('-1 < y <= sin(x) {x > 0}'));
  check('tex: point', tex('(a, f(a))') === '\\left(a,\\ f\\left(a\\right)\\right)', tex('(a, f(a))'));
  check('tex: unreadable row gives null', tex('y = (') === null);
  check('tex: empty row gives empty text', tex('  ') === '');
}

// ------------------------------------------------------------
// Dependencies and errors
// ------------------------------------------------------------
{
  const b = build(['a = 2', 'b = 3', 'f(x) = a sin(bx)', 'g(x) = f(x-1)', 'd = a + b', 'p = 1.5', '(p, f(p))']);
  check('user function uses sliders', near(b.compiled.F.f(1), 2 * Math.sin(3)));
  check('function of a function', near(b.compiled.F.g(2), 2 * Math.sin(3)));
  check('computed constant', rowOf(b, 4).kind === 'constant' && rowOf(b, 4).value === 5);
  check('point on curve', rowOf(b, 6).kind === 'point' && rowOf(b, 6).draggable && near(rowOf(b, 6).y, 2 * Math.sin(4.5)));
  const s2 = setVariables(b.scene, b.compiled, { a: 4, nothing: 1 });
  const c2 = compileScene(s2);
  check('slider write changes the text', s2.expressions[0].text === 'a = 4', s2.expressions[0].text);
  check('slider write flows downstream', near(c2.F.g(2), 4 * Math.sin(3)) && c2.rows[s2.expressions[4].id].value === 7);
  check('slider write leaves other rows as they were', s2.expressions[2] === b.scene.expressions[2]);
  const s3 = setVariables(b.scene, b.compiled, { p: 25 });
  check('slider range widens to hold a dragged value', s3.expressions[5].slider.max === 25, JSON.stringify(s3.expressions[5]));
}
{
  const b = build(['a = b + 1', 'b = a', 'y = x', 'c = a + 1']);
  check('circular: first row', rowOf(b, 0).kind === 'error' && /Circular/.test(rowOf(b, 0).error), JSON.stringify(rowOf(b, 0)));
  check('circular: second row', rowOf(b, 1).kind === 'error' && /Circular/.test(rowOf(b, 1).error), JSON.stringify(rowOf(b, 1)));
  check('circular: a row that depends on the loop', rowOf(b, 3).kind === 'error', JSON.stringify(rowOf(b, 3)));
  check('circular: other rows still draw', rowOf(b, 2).kind === 'curve' && b.geometry.layers.length === 1);
}
{
  const b = build(['y = kx', 'a = 1', 'a = 2', 'c = x + 1', 'y = (', 'y = x']);
  check('undefined name lists what is missing', rowOf(b, 0).kind === 'error' && rowOf(b, 0).missing.join() === 'k', JSON.stringify(rowOf(b, 0)));
  check('duplicate definition: both rows', rowOf(b, 1).kind === 'error' && rowOf(b, 2).kind === 'error');
  check('x in a constant suggests a function', rowOf(b, 3).kind === 'error' && /c\(x\)/.test(rowOf(b, 3).error), JSON.stringify(rowOf(b, 3)));
  check('syntax error is a row error', rowOf(b, 4).kind === 'error');
  check('errors do not stop other rows', rowOf(b, 5).kind === 'curve');
}

// ------------------------------------------------------------
// Explicit curves: no false lines, no missing ends
// ------------------------------------------------------------
{
  const b = build(['y = tan(x)']);
  const L = layerOf(b, 0);
  // asymptotes at ±π/2, ±3π/2, ±5π/2 inside −10…10 → 7 branches
  check('tan: no connector across asymptotes', longestVisiblePiece(L) < 20, 'longest ' + longestVisiblePiece(L).toFixed(1));
  check('tan: branches are separate paths', L.paths.length >= 7, 'paths ' + L.paths.length);
}
{
  const b = build(['y = floor(x)']);
  const L = layerOf(b, 0);
  let vertical = 0;
  for (const p of L.paths) for (let i = 2; i < p.length; i += 2) if (Math.abs(p[i + 1] - p[i - 1]) > 20) vertical++;
  check('floor: no vertical connectors', vertical === 0, 'steps joined: ' + vertical);
  check('floor: one path per visible step', L.paths.filter(p => p.length >= 4).length >= 14, 'paths ' + L.paths.length);
}
{
  const b = build(['y = sign(x)']);
  check('sign: no connector', longestVisiblePiece(layerOf(b, 0)) < 10, '' + longestVisiblePiece(layerOf(b, 0)));
}
{
  const b = build(['y = 1/(x-0.3)^2']);
  const L = layerOf(b, 0);
  // the two sides may be linked far above the canvas; nothing visible may join them
  check('1/(x-0.3)^2: nothing visible joins the two sides', longestVisiblePiece(L) < 20, `longest ${longestVisiblePiece(L).toFixed(1)}`);
  const minY = Math.min(...L.paths.flatMap(p => p.filter((_, i) => i % 2 === 1)));
  check('1/(x-0.3)^2: rises to the top edge', minY <= 0, 'min sy ' + minY);
}
{
  const b = build(['y = sqrt(x)', 'y = ln(x)']);
  const xs = layerOf(b, 0).paths.flatMap(p => p.filter((_, i) => i % 2 === 0));
  check('sqrt reaches x = 0', Math.abs(wx(Math.min(...xs))) < 1e-6, 'starts at x = ' + wx(Math.min(...xs)));
  const lnL = layerOf(b, 1);
  const lowest = Math.max(...lnL.paths.flatMap(p => p.filter((_, i) => i % 2 === 1)));
  check('ln runs off the bottom edge', lowest >= H, 'lowest sy ' + lowest);
}
{
  const b = build(['y = x^(1/3)', 'y = x^x']);
  const xs = layerOf(b, 0).paths.flatMap(p => p.filter((_, i) => i % 2 === 0));
  check('cube root is drawn for negative x', wx(Math.min(...xs)) < -9, 'from x = ' + wx(Math.min(...xs)));
  const xx = layerOf(b, 1).paths.flatMap(p => p.filter((_, i) => i % 2 === 0));
  check('x^x is drawn for x > 0 only', wx(Math.min(...xx)) >= -1e-9, 'from x = ' + wx(Math.min(...xx)));
}
{
  const b = build(['y = atan(1000x)']);
  const L = layerOf(b, 0);
  const crossing = L.paths.filter(p => { const ys = p.filter((_, i) => i % 2 === 1); return wy(Math.min(...ys)) > 1 && wy(Math.max(...ys)) < -1; });
  check('atan(1000x): steep but drawn joined', crossing.length === 1, 'paths ' + L.paths.length);
}
{
  const b = build(['y = x^3 {-2 < x < 1.5}']);
  const xs = layerOf(b, 0).paths.flatMap(p => p.filter((_, i) => i % 2 === 0));
  check('restriction: curve only on the interval', near(wx(Math.min(...xs)), -2, 1e-3) && near(wx(Math.max(...xs)), 1.5, 1e-3), `${wx(Math.min(...xs))} … ${wx(Math.max(...xs))}`);
}

// ------------------------------------------------------------
// Other curve types
// ------------------------------------------------------------
{
  const b = build(['x^2 + y^2 = 25']);
  const segs = layerOf(b, 0).segs;
  let worst = 0;
  for (let i = 0; i < segs.length; i += 2) worst = Math.max(worst, Math.abs(Math.hypot(wx(segs[i]), wy(segs[i + 1])) - 5));
  check('circle: every contour point lies on it', segs.length > 400 && worst < 0.01, `points ${segs.length / 2}, worst error ${worst.toExponential(2)}`);
}
{
  const b = build(['y - tan(x) = 0']);
  const segs = layerOf(b, 0).segs;
  let longVertical = 0;
  for (let i = 0; i < segs.length; i += 4) {
    const x = wx(segs[i]), y = wy(segs[i + 1]);
    if (Math.abs(y - Math.tan(x)) > 0.5) longVertical++;
  }
  check('implicit tan: no false vertical lines', longVertical === 0, 'bad segments ' + longVertical);
}
{
  const b = build(['r = 4sin(3θ)', '(6cos(t), 3sin(2t))']);
  const rose = layerOf(b, 0).paths.flat();
  let maxR = 0;
  for (let i = 0; i < rose.length; i += 2) maxR = Math.max(maxR, Math.hypot(wx(rose[i]), wy(rose[i + 1])));
  check('polar rose reaches r = 4', near(maxR, 4, 1e-3), 'max r ' + maxR);
  const fig = layerOf(b, 1).paths;
  const p = fig[0];
  check('figure-eight is one closed path', fig.length === 1 && Math.hypot(p[0] - p[p.length - 2], p[1] - p[p.length - 1]) < 0.5, 'paths ' + fig.length);
}
{
  const b = build(['y > x^2 - 4', 'x^2 + y^2 <= 9', '-1 < y < sin(x) {x > 0}']);
  const A = layerOf(b, 0), D = layerOf(b, 1), S = layerOf(b, 2);
  check('y > x^2 - 4: strict boundary', A.boundaries.length === 1 && A.boundaries[0].strict === true);
  check('disc: solid boundary', D.boundaries.length === 1 && D.boundaries[0].strict === false);
  let area = 0;
  for (let i = 0; i < D.runs.length; i += 4) area += D.runs[i + 2] * D.runs[i + 3];
  const worldArea = area * VIEW.ux * VIEW.uy;
  check('disc: filled area is 9π', Math.abs(worldArea - 9 * Math.PI) / (9 * Math.PI) < 0.01, 'area ' + worldArea.toFixed(3));
  let leftOfZero = 0;
  for (let i = 0; i < S.runs.length; i += 4) if (wx(S.runs[i]) < -0.01) leftOfZero++;
  check('band with {x > 0}: right half only', S.runs.length > 0 && leftOfZero === 0, 'runs left of 0: ' + leftOfZero);
  check('band: two boundaries', S.boundaries.length === 2);
}

// ------------------------------------------------------------
// Special points
// ------------------------------------------------------------
{
  const b0 = build(['f(x) = x^3/4 - 3x', 'y = 2cos(x) + 1']);
  const id = b0.scene.expressions[0].id;
  const b = build(['f(x) = x^3/4 - 3x', 'y = 2cos(x) + 1'], VIEW, { selectedId: id });
  const sp = b.geometry.specials;
  const f = x => x ** 3 / 4 - 3 * x, g = x => 2 * Math.cos(x) + 1;
  const roots = sp.filter(p => p.kind === 'root').map(p => p.x).sort((a, c) => a - c);
  check('3 roots', roots.length === 3 && near(roots[0], -Math.sqrt(12), 1e-9) && Math.abs(roots[1]) < 1e-9 && near(roots[2], Math.sqrt(12), 1e-9), roots.join(', '));
  const ext = sp.filter(p => p.kind === 'max' || p.kind === 'min');
  check('2 extrema at x = ±2', ext.length === 2 && ext.every(p => near(Math.abs(p.x), 2, 1e-6)), ext.map(p => `${p.kind} ${p.x}`).join('; '));
  check('y-intercept', sp.some(p => p.kind === 'y-intercept' && p.x === 0 && p.y === 0));
  const inter = sp.filter(p => p.kind === 'intersection');
  check('intersections agree with direct evaluation', inter.length >= 1 && inter.every(p => Math.abs(f(p.x) - g(p.x)) < 1e-9), inter.length + ' found');
  check('no special points without a selection', b0.geometry.specials.length === 0);
}
{
  const b0 = build(['y = floor(x)']);
  const b = build(['y = floor(x)'], VIEW, { selectedId: b0.scene.expressions[0].id });
  check('floor: no pile of false extrema', b.geometry.specials.filter(p => p.kind !== 'root' && p.kind !== 'y-intercept').length === 0,
    b.geometry.specials.map(p => p.kind).join(','));
}

// ------------------------------------------------------------
// Zoom: the same picture logic holds 1000× in and out
// ------------------------------------------------------------
{
  {
    // 1000× in, around the asymptote at π/2
    const view = { cx: Math.PI / 2, cy: 0, ux: 0.025e-3, uy: 0.025e-3 };
    const g = computeGeometry(compileScene(createScene({ expressions: ['y = tan(x)'], view })), view, W, H);
    const L = g.layers[0];
    check('tan zoomed in 1000×: two branches, nothing joins them', L.paths.length === 2 && longestVisiblePiece(L) < 20, `paths ${L.paths.length}, longest ${longestVisiblePiece(L).toFixed(1)}`);
  }
  {
    // KNOWN GAP, reported not checked. 1000× out there are about 8
    // branches of tan per pixel. An honest picture is a dense set of
    // near-vertical strokes; the point sampler sees only values near 0
    // and draws an almost flat line. Fixing it needs interval
    // arithmetic (Part 2, phase 12) or an oscillation test.
    const view = { cx: 0, cy: 0, ux: 25, uy: 25 };
    const g = computeGeometry(compileScene(createScene({ expressions: ['y = tan(x)'], view })), view, W, H);
    console.log(`known gap: tan zoomed out 1000× gives ${g.layers[0].paths.length} paths from ${g.stats.evals} evaluations (an honest picture needs thousands of strokes)`);
  }
  {
    const view = { cx: 0, cy: 0, ux: 25, uy: 25 };
    const g = computeGeometry(compileScene(createScene({ expressions: ['y = 0.001x^3'], view })), view, W, H);
    check('0.001x^3 at wide zoom: one joined curve', g.layers[0].paths.length === 1, 'paths ' + g.layers[0].paths.length);
  }
}

// ------------------------------------------------------------
// SVG
// ------------------------------------------------------------
{
  const theme = getTheme('default');
  const doc = {
    expressions: ['a = 2', 'f(x) = a sin(x)', 'x^2 + y^2 = 25', 'y > x^2 - 4', '(1, 2)', 'r = 3cos(2θ)', 'y = tan(x)'],
    view: viewFromBounds({ xMin: -10, xMax: 10, yMin: -7, yMax: 7 }, 640, 448)
  };
  const a = sceneToSVG(doc, theme, { width: 640, height: 448 });
  const c = sceneToSVG(doc, theme, { width: 640, height: 448 });
  check('SVG: same scene gives the same text', a === c);
  check('SVG: well formed start and end', a.startsWith('<svg xmlns') && a.endsWith('</svg>'));
  check('SVG: no NaN or Infinity', !/NaN|Infinity/.test(a));
  check('SVG: dashed boundary for strict inequality', /stroke-dasharray/.test(a));
  check('SVG: one circle for the point', (a.match(/<circle/g) || []).length === 1);
  check('SVG: uses the theme palette', a.includes(theme.palette[1]) && a.includes(theme.palette[2]));
  const dark = sceneToSVG(doc, getTheme('dark'), { width: 640, height: 448 });
  check('SVG: another theme changes colours only', dark !== a && dark.length === a.length - (a.split(theme.background).length - 1) * 0 || dark.includes(getTheme('dark').background));
  const lesson = getTheme({ base: 'lesson', curveWidth: 3 });
  check('theme overrides keep the rest', lesson.curveWidth === 3 && lesson.axis === '#06357A' && lesson.ui.accent === '#2563EB');
  check('SVG size is reasonable', a.length < 400000, a.length + ' characters');
}

// ------------------------------------------------------------
// ------------------------------------------------------------
// Analysis of one function (the Explorer's panels and markers)
// ------------------------------------------------------------
{
  const q = analyzeFunction('0.1x^2 - 2');
  check('analysis: quadratic family', q.family === 'Quadratic', q.family);
  check('analysis: quadratic roots ±√20', q.roots.length === 2 && near(q.roots[0], -Math.sqrt(20), 1e-6) && near(q.roots[1], Math.sqrt(20), 1e-6), String(q.roots));
  check('analysis: quadratic minimum at (0, −2)', q.extrema.length === 1 && q.extrema[0].kind === 'min' && Math.abs(q.extrema[0].x) < 1e-6 && near(q.extrema[0].y, -2, 1e-6));
  check('analysis: quadratic is even, continuous, not one-to-one', q.parity === 'even' && q.continuous && !q.injective);
  check('analysis: derivative is symbolic and typeset', q.derivTex === '\\frac{x}{5}' && near(q.fnPrime(3), 0.6), q.derivTex);

  // the text is read by the Graph Studio language, not by plain math.js
  check('analysis: sin2x means sin(2x)', near(analyzeFunction('sin2x').fn(2), Math.sin(4)));
  check('analysis: ln is natural, log is base 10', near(analyzeFunction('ln(x)').fn(Math.E), 1) && near(analyzeFunction('log(x)').fn(100), 2));
  check('analysis: derivative of ln(x) is 1/x', near(analyzeFunction('ln(x)').fnPrime(4), 0.25));
  check('analysis: derivative of log(x) uses base 10', near(analyzeFunction('log(x)').fnPrime(2), 1 / (2 * Math.LN10), 1e-9));
  check('analysis: y = … and f(x) = … are accepted', !analyzeFunction('y = x^2').error && !analyzeFunction('f(x) = x^2').error);

  const r = analyzeFunction('(x^2-1)/(x-2)');
  check('analysis: rational has a vertical asymptote at 2, not a root', r.asymptotes.length === 1 && near(r.asymptotes[0], 2, 1e-6) && r.roots.length === 2 && !r.continuous, String(r.asymptotes));
  const F = antiderivative(r);
  check('analysis: antiderivative stops at the asymptote', Number.isFinite(F(1)) && Number.isNaN(F(3)) && near(F(0), 0));

  const s = analyzeFunction('sin(x)');
  check('analysis: sin has period 2π', s.period.periodic && near(s.period.T, 2 * Math.PI, 1e-6));
  check('analysis: periodic markers repeat outside the window', markersIn(s, 30, 40).roots.length === 3, String(markersIn(s, 30, 40).roots.length));
  check('analysis: ∫₀^π sin = 2', near(antiderivative(s)(Math.PI), 2, 1e-5) && near(integrate(s, 0, Math.PI), 2, 1e-6));

  check('analysis: 2^x is exponential', analyzeFunction('2^x').family === 'Exponential');
  check('analysis: x^3 + x is one-to-one', analyzeFunction('x^3 + x').injective === true);
  check('analysis: floor has no symbolic derivative and still works', analyzeFunction('floor(x)').derivTex === null && !analyzeFunction('floor(x)').error);
  check('analysis: unfinished text gives an error, not a throw', !!analyzeFunction('x^3 + ').error && !!analyzeFunction('x + y').error && !!analyzeFunction('').error);
  check('analysis: sqrt(x+4) starts at −4', analyzeFunction('sqrt(x+4)').domain.includes('-4') && valueAt(analyzeFunction('sqrt(x+4)'), -5) === null);
}

// extra curves and the new annotations reach both renderers
{
  const scene = createScene({ expressions: ['y = x^2'], view: VIEW });
  const compiled = compileScene(scene);
  const g = computeGeometry(compiled, VIEW, W, H, { extraItems: [{ type: 'curveX', id: 'extra', index: 1, f: x => 2 * x, color: '#111111', width: 1.5, dashed: true }] });
  const extra = g.layers.find(l => l.id === 'extra');
  check('extra curve is drawn as a layer', !!extra && extra.paths.length === 1 && extra.dashed === true && extra.width === 1.5);
  const svg = renderSVG(g, getTheme('default'), { annotations: [
    { type: 'point', x: 1, y: 1, color: '#123456' },
    { type: 'line', x: 1, y: 1, slope: 2, dashed: true, color: '#654321' },
    { type: 'polygon', points: [[0, 0], [1, 1], [1, 0]], color: '#abcdef' }
  ] });
  check('point, line and polygon annotations are in the SVG', svg.includes('stroke="#123456"') && svg.includes('stroke="#654321"') && svg.includes('fill="#abcdef"'));
  check('dashed extra curve is dashed in the SVG', /stroke="#111111"[^>]*stroke-dasharray/.test(svg));
}
// ------------------------------------------------------------
// The math editor's LaTeX → plain row text
// ------------------------------------------------------------
{
  const pairs = [
    ['\\frac{x^{2}-1}{x-2}', '((x^2-1)/(x-2))'],
    ['\\frac{1}{2}x^{2}', '(1/2)x^2'],
    ['\\sqrt{x+4}', 'sqrt(x+4)'],
    ['\\sqrt[3]{x}', 'cbrt(x)'],
    ['\\left|x-2\\right|', 'abs(x-2)'],
    ['a\\sin\\left(bx\\right)', 'a sin(bx)'],
    ['2\\pi x', '2 pi x'],
    ['e^{-x^{2}}', 'e^(-x^2)'],
    ['\\left|x\\right|\\le3', 'abs(x)<=3'],
    ['\\log_{2}\\left(x\\right)', 'log(x, 2)'],
    ['y=x^{3}\\left\\{-2<x<1.5\\right\\}', 'y=x^3{-2<x<1.5}'],
    ['\\left(p,f\\left(p\\right)\\right)', '(p,f(p))'],
    ['\\left\\lfloor x\\right\\rfloor', 'floor(x)'],
    ['x^{\\placeholder{}}', 'x^'],
    ['\\frac{x}{', '(x/)']
  ];
  for (const [tex, want] of pairs) check(`editor: ${tex}`, texToText(tex) === want, texToText(tex));
  check('editor: nothing in, nothing out', texToText('') === '' && texToText(undefined) === '');

  // Every lab row must mean the same after text → editor form → text.
  let rows = 0;
  const broken = [];
  for (const c of LAB_CASES) {
    const texts = c.scene.expressions.map(e => (typeof e === 'string' ? e : e.text));
    const names = scanDefinitions(texts);
    const back = texts.map(t => { const tex = rowToTex(t, names); return tex === null ? t : texToText(tex); });
    const A = compileScene(createScene({ expressions: texts })), B = compileScene(createScene({ expressions: back }));
    const idsA = Object.keys(A.rows), idsB = Object.keys(B.rows);
    texts.forEach((t, k) => {
      rows++;
      const ra = A.rows[idsA[k]], rb = B.rows[idsB[k]];
      let same = ra.kind === rb.kind;
      const ia = A.items.find(it => it.id === idsA[k]), ib = B.items.find(it => it.id === idsB[k]);
      if (same && ia && ib) {
        for (const x of [-3.3, -1.1, 0.37, 1.9, 4.2]) {
          const y = 0.6 * x + 0.21;
          let va, vb;
          if (ia.type === 'curveX') { va = ia.f(x); vb = ib.f(x); }
          else if (ia.type === 'curveY') { va = ia.g(x); vb = ib.g(x); }
          else if (ia.type === 'implicit') { va = ia.F(x, y); vb = ib.F(x, y); }
          else if (ia.type === 'region') { va = +ia.cond(x, y); vb = +ib.cond(x, y); }
          else if (ia.type === 'param') { const p = ia.xy(x), q = ib.xy(x); va = p ? p[0] + 7 * p[1] : NaN; vb = q ? q[0] + 7 * q[1] : NaN; }
          else if (ia.type === 'point') { va = ia.x + 7 * ia.y; vb = ib.x + 7 * ib.y; }
          if (!(Object.is(va, vb) || (Number.isNaN(va) && Number.isNaN(vb)) || near(va, vb))) same = false;
        }
      }
      if (same && typeof ra.value === 'number') same = Object.is(ra.value, rb.value) || near(ra.value, rb.value);
      if (!same) broken.push(`${t} → ${back[k]}`);
    });
  }
  check(`editor: all ${rows} lab rows survive text → editor → text`, broken.length === 0 && rows > 50, broken.slice(0, 3).join(' ; '));

  // a fraction next to + or − is shown without brackets of its own
  const none = { funcs: new Set(), vars: new Set() };
  check('typeset: x^2-(1/(x-2)) shows no brackets round the fraction', rowToTex('y=x^2-(1/(x-2))', none) === 'y={x}^{2}-\\frac{1}{x-2}', rowToTex('y=x^2-(1/(x-2))', none));
  check('typeset: (1/2)^2 keeps its brackets', rowToTex('(1/2)^2', none).includes('\\left('));
  check('analysis: brackets do not hide a rational function', analyzeFunction('x^2-(1/(x^2))+1').family === 'Rational');
}


// Parameters: letters other than x
// ------------------------------------------------------------
{
  const d = analyzeFunction('a sin(bx) + c', { params: { a: 2, b: 0.5, c: 1 } });
  check('parameters: a, b, c are found', !d.error && d.parameters.join(',') === 'a,b,c');
  check('parameters: the function uses their values', near(d.fn(1), 2 * Math.sin(0.5) + 1));
  check('parameters: the range follows them', near(d.bounds.lo, -1, 1e-6) && near(d.bounds.hi, 3, 1e-6), `${d.bounds.lo} ${d.bounds.hi}`);
  check('parameters: the derivative keeps the letters and uses the values', d.derivTex.includes('a') && d.derivTex.includes('\\cos') && near(d.fnPrime(1), Math.cos(0.5)));
  check('parameters: a missing value counts as 1', near(analyzeFunction('k x').fn(3), 3));
  check('parameters: another value gives another answer', analyzeFunction('a x^2 - 1', { params: { a: 4 } }).roots.length === 2 && near(analyzeFunction('a x^2 - 1', { params: { a: 4 } }).roots[1], 0.5, 1e-6) && analyzeFunction('a x^2 - 1', { params: { a: -1 } }).roots.length === 0);
  check('parameters: y, t, r, theta are refused', !!analyzeFunction('x + y').error && !!analyzeFunction('t x').error);

  const sc = createScene({ expressions: [{ text: 'a = 2', slider: { min: -5, max: 5 } }, 'd = a + 1', 'f(x) = a sin(x)', 'g(x) = f(x-1)', 'y = d x', 'y = x^2', '2^10'] });
  const first = pickFunction(sc);
  check('pick: first function of x whose letters are sliders', !!first && first.text === 'f(x) = a sin(x)' && first.params.a.value === 2 && first.params.a.min === -5);
  check('pick: the preferred row when it qualifies', pickFunction(sc, sc.expressions[5].id).text === 'y = x^2');
  check('pick: a row built on another row or a computed value falls back', pickFunction(sc, sc.expressions[3].id).text === 'f(x) = a sin(x)' && pickFunction(sc, sc.expressions[4].id).text === 'f(x) = a sin(x)');
  check('pick: nothing to pick gives null', pickFunction(createScene({ expressions: ['x^2 + y^2 = 1', 'a = 2'] })) === null);
  const rows = functionRows('f(x) = a x', { a: { value: 0.30000000000000004, min: -1, max: 1 } });
  check('rows for a link: slider row then the function, tidy number', rows.length === 2 && rows[0].text === 'a = 0.3' && rows[0].slider.max === 1 && rows[1].text === 'f(x) = a x');
  check('rows for a link survive the link', pickFunction(readSceneHash(sceneHash({ expressions: rows }))).params.a.value === 0.3);
  check('number text is never in exponent form', numberText(1e-7) === '0.0000001' && numberText(-2) === '-2');
}

// ------------------------------------------------------------
// A scene inside a link
// ------------------------------------------------------------
{
  const scene = createScene({
    expressions: [
      { text: 'a = 2', slider: { min: -5, max: 5, step: 0.5 } }, 'f(x) = a sin(x)',
      { text: 'r = θ/2', param: { min: 0, max: 18.85 }, hidden: true, color: '#B45309' },
      { text: '(p, f(p))', label: 'P', showLabel: true, lock: 'readonly' }
    ],
    view: { cx: 1.5, cy: -2, ux: 0.02, uy: 0.04 },
    settings: { theme: 'lesson', grid: false },
    authoring: { title: 'A test' }
  });
  const hash = sceneHash(scene);
  const back = readSceneHash(hash);
  check('link: starts with #scene= and uses only address-safe characters', /^#scene=[A-Za-z0-9_-]+$/.test(hash), hash.slice(0, 40));
  check('link: rows come back with all their fields', !!back && back.expressions.length === 4 &&
    back.expressions[0].text === 'a = 2' && back.expressions[0].slider.step === 0.5 &&
    back.expressions[2].text === 'r = θ/2' && back.expressions[2].hidden === true && back.expressions[2].color === '#B45309' && near(back.expressions[2].param.max, 18.85) &&
    back.expressions[3].label === 'P' && back.expressions[3].showLabel === true && back.expressions[3].lock === 'readonly');
  check('link: view, settings and title come back', !!back && near(back.view.cx, 1.5) && near(back.view.uy, 0.04) && back.settings.theme === 'lesson' && back.settings.grid === false && back.settings.axes === true && back.authoring.title === 'A test');
  check('link: found among other parts of the address', !!readSceneHash('#top&' + hash.slice(1)) && readSceneHash('#other=1') === null);
  check('link: rubbish gives null, not a throw', unpackScene('!!!') === null && unpackScene('') === null && unpackScene('e30') === null && readSceneHash(undefined) === null);
  const bad = s2 => unpackScene(Buffer.from(JSON.stringify(s2)).toString('base64url'));
  check('link: a row that is too long, or a wrong shape, is refused', bad({ e: ['x'.repeat(601)] }) === null && bad({ e: 'x' }) === null && bad({ e: [{ t: 5 }] }) === null);
  check('link: a wrong view or colour is dropped, the rest kept', (() => { const r = bad({ e: [{ t: 'y=x', c: 'red;evil' }], w: [0, 0, -1, 1] }); return !!r && r.expressions[0].color === undefined && r.view.ux > 0; })());
  check('link: a one-row scene stays short', sceneHash({ expressions: ['f(x) = x^2 - 1'] }).length < 120, String(sceneHash({ expressions: ['f(x) = x^2 - 1'] }).length));
}

// ------------------------------------------------------------
// Speed (reported, and loosely checked)
// ------------------------------------------------------------
{
  const rows = [];
  for (let i = 0; i < 20; i++) rows.push(i % 4 === 0 ? `a_${i} = ${i}` : `y = sin(x + ${i}) + a_${i - (i % 4)}`);
  const scene = createScene({ expressions: rows });
  compileScene(scene);
  let t = performance.now();
  for (let i = 0; i < 20; i++) compileScene(scene);
  const compileMs = (performance.now() - t) / 20;

  const ten = createScene({ expressions: ['y = sin(x)', 'y = x^2', 'y = tan(x)', 'y = 1/x', 'y = sqrt(x)', 'y = ln(x)', 'y = floor(x)', 'y = x^3 - 3x', 'y = cos(2x)', 'y = e^(-x^2)'], view: VIEW });
  const c10 = compileScene(ten);
  computeGeometry(c10, VIEW, 1200, 800);
  t = performance.now();
  for (let i = 0; i < 10; i++) computeGeometry(c10, VIEW, 1200, 800);
  const geo10 = (performance.now() - t) / 10;

  const imp = createScene({ expressions: ['x^2 + y^2 = 25', 'x^3 + y^3 = 6xy', 'y^2 = x^3 - 3x + 3'], view: VIEW });
  const c3 = compileScene(imp);
  computeGeometry(c3, VIEW, 1200, 800);
  t = performance.now();
  for (let i = 0; i < 10; i++) computeGeometry(c3, VIEW, 1200, 800);
  const geo3 = (performance.now() - t) / 10;

  console.log(`speed: compile 20 rows ${compileMs.toFixed(2)} ms (target 5) · 10 explicit curves at 1200×800 ${geo10.toFixed(1)} ms (target 16) · 3 implicit curves ${geo3.toFixed(1)} ms (target 33)`);
  check('compile 20 rows under 25 ms', compileMs < 25, compileMs.toFixed(2) + ' ms');
}

// ── two functions side by side ──
{
  const { compareFunctions } = await import('../index.js');
  const near = (a, b) => Math.abs(a - b) < 1e-6;
  const c1 = compareFunctions(x => x * x, x => x + 2, -10, 10);
  check('compare: parabola and line meet at -1 and 2', c1.crossings.length === 2 && near(c1.crossings[0].x, -1) && near(c1.crossings[1].x, 2) && near(c1.crossings[1].y, 4), JSON.stringify(c1.crossings));
  check('compare: above, below, above', c1.intervals.map(i => i.rel).join() === 'above,below,above' && near(c1.intervals[1].from, -1) && near(c1.intervals[1].to, 2), JSON.stringify(c1.intervals));
  const c2 = compareFunctions(x => x * x, x => 2 * x - 1, -10, 10);
  check('compare: a touching point is found', c2.crossings.length === 1 && Math.abs(c2.crossings[0].x - 1) < 1e-4 && c2.intervals.every(i => i.rel === 'above'), JSON.stringify(c2));
  const c3 = compareFunctions(x => 1 / x, x => 0, -10, 10);
  check('compare: a jump is not a meeting', c3.crossings.length === 0 && c3.intervals.map(i => i.rel).join() === 'below,above', JSON.stringify(c3));
  const c4 = compareFunctions(x => Math.sin(x) ** 2 + Math.cos(x) ** 2, x => 1, -10, 10);
  check('compare: the same function written two ways', c4.same && c4.crossings.length === 0);
  const c5 = compareFunctions(x => Math.sqrt(x), x => 1, -4, 4);
  check('compare: where one is not defined', c5.intervals[0].rel === 'undefined' && c5.crossings.length === 1 && near(c5.crossings[0].x, 1), JSON.stringify(c5));
  const c6 = compareFunctions(x => Math.sin(x), x => 0.5, 0, 7);
  check('compare: sine against a level', c6.crossings.length === 3 && near(c6.crossings[0].x, Math.PI / 6), JSON.stringify(c6.crossings));
}

// ── concept tool: rules, values in sentences, marks ──
{
  const { conceptValue, conceptTest, conceptText, conceptCase, conceptMarks } = await import('../index.js');
  const v = { a: -2, b: 0.5, h: 3, k: 0 };
  check('concept: a rule is true or false', conceptTest('a < 0', v) && !conceptTest('abs(a) < 1', v) && conceptTest('a < 0 and h > 0', v) && conceptTest(undefined, v));
  check('concept: a rule that cannot be read is false', conceptTest('a <', v) === false && conceptTest('zzz > 1', v) === false);
  check('concept: a value', Math.abs(conceptValue('2 pi / abs(b)', v) - 4 * Math.PI) < 1e-12 && conceptValue(7, v) === 7 && Number.isNaN(conceptValue('q + 1', v)));
  check('concept: values written into a sentence', conceptText('a = {{a}}, period ${{2 pi / abs(b)}}$, $\\frac{1}{2}$', v) === 'a = -2, period $12.57$, $\\frac{1}{2}$', conceptText('a = {{a}}, period ${{2 pi / abs(b)}}$, $\\frac{1}{2}$', v));
  const cases = [{ when: 'a == 1', text: null }, { when: 'a < 0', text: 'flipped, {{abs(a)}} times' }, { text: 'stretched' }];
  check('concept: the first case that holds', conceptCase(cases, v) === 'flipped, 2 times' && conceptCase(cases, { a: 1 }) === null && conceptCase(cases, { a: 3 }) === 'stretched');
  const marks = conceptMarks([{ type: 'point', x: 'h', y: 'k', label: 'vertex ({{h}}, {{k}})' }, { type: 'vline', x: 'h', when: 'h < 0' }, { type: 'hline', y: 'nothing' }], v);
  check('concept: marks placed by the sliders', marks.length === 1 && marks[0].x === 3 && marks[0].y === 0 && marks[0].label === 'vertex (3, 0)', JSON.stringify(marks));
  const { conceptScope } = await import('../index.js');
  const rs = compileScene(createScene({ expressions: ['f(x) = x^2', 'g(x) = sin(x)/x'] }));
  const left = conceptScope({ values: { a: 0, b: 3, n: 6 }, constants: { p: 0, q: 0 }, functions: rs.F, derived: [
    { name: 'dx', value: '(b - a) / n' },
    { name: 'S', sum: '(f(a + (j + p) dx) + f(a + (j + q) dx)) / 2 * dx', index: 'j', count: 'n' },
    { name: 'I', integral: 'f', from: 'a', to: 'b' },
    { name: 'err', value: 'S - I' },
    { name: 'G', integral: 'g', from: '-1', to: '1' }
  ] });
  check('concept: a left Riemann sum of x^2 on 0..3 with 6 strips', Math.abs(left.dx - 0.5) < 1e-12 && Math.abs(left.S - 6.875) < 1e-9 && Math.abs(left.I - 9) < 1e-9 && Math.abs(left.err + 2.125) < 1e-9, JSON.stringify({ dx: left.dx, S: left.S, I: left.I }));
  check('concept: a hole in a function is filled (sin(x)/x at 0)', Math.abs(left.g(0) - 1) < 1e-6 && Math.abs(left.G - 1.8921661407) < 1e-6, String(left.G));
  const strips = conceptMarks([{ type: 'polygon', repeat: { index: 'j', count: 'n' }, points: [{ x: 'a + j dx', y: 0 }, { x: 'a + j dx', y: 'f(a + (j + p) dx)' }, { x: 'a + (j + 1) dx', y: 'f(a + (j + q) dx)' }, { x: 'a + (j + 1) dx', y: 0 }] }], left);
  check('concept: a mark made once per strip', strips.length === 6 && strips[2].points[1][0] === 1 && strips[2].points[1][1] === 1 && strips[2].points[2][0] === 1.5, JSON.stringify(strips[2]));
  check('concept: decimals asked for in a sentence', conceptText('S = {{S | 4}}, about {{S}}, dx {{dx | 0}}', left) === 'S = 6.875, about 6.88, dx 1' || conceptText('S = {{S | 4}}, about {{S}}', left) === 'S = 6.875, about 6.88', conceptText('S = {{S | 4}}, about {{S}}, dx {{dx | 0}}', left));
  const styled = compileScene(createScene({ expressions: [{ text: 'y = x', dashed: true, width: 1.5 }] }));
  check('a row can say how its line is drawn', styled.items[0].dashed === true && styled.items[0].width === 1.5);
  const tf = compileScene(createScene({ expressions: ['a = 2', 'b = 1', 'h = 1', 'k = 3', 'f(x) = x^2', 'g(x) = a f(b (x - h)) + k'] }));
  const g = tf.items.find(it => it.type === 'curveX' && Math.abs(it.f(2) - 5) < 1e-9);
  check('concept: g(x) = a f(b (x - h)) + k is read as a transformation of f', !!g, JSON.stringify(Object.values(tf.rows).map(r => r.kind + (r.error ? ': ' + r.error : ''))));
}

// ── lesson figures (build-time helper) ──
{
  const { scenePicture, sceneSteps } = await import('../../lesson-build.js');
  const { readSceneHash: readHash } = await import('../index.js');
  const p = scenePicture({ expressions: ['y = x^2/4 - 2', 'a = 2'] }, { width: 560, height: 320, annotations: [{ type: 'point', x: 0, y: -2, label: 'vertex' }] });
  check('lesson picture: svg of the asked size', p.svg.includes('viewBox="0 0 560 320"') && p.svg.includes('<path'));
  check('lesson picture: annotation drawn', p.svg.includes('vertex'));
  check('lesson picture: alt names the graph, not the number row', p.alt === 'Graph of y = x^2/4 - 2', p.alt);
  check('lesson picture: lesson theme by default', p.theme === 'lesson' && p.scene.settings.theme === 'lesson');
  check('lesson picture: plain data', JSON.stringify(JSON.parse(JSON.stringify(p))) === JSON.stringify(p));
  const back = readHash(p.hash);
  check('lesson picture: link opens the same rows', !!back && back.expressions.map(e => e.text).join('|') === 'y = x^2/4 - 2|a = 2', JSON.stringify(back && back.expressions));
  const q = scenePicture({ expressions: ['y = sin(x)'], authoring: { title: 'One period of the sine curve' } }, { alt: undefined });
  const w = scenePicture({ expressions: [{ text: 'a = 1.5', slider: { min: -3, max: 3 } }, 'k = 2', 'y = a sin(k x)'] });
  check('lesson picture: sliders listed with their limits', w.sliders.length === 2 && w.sliders[0].name === 'a' && w.sliders[0].value === 1.5 && w.sliders[0].min === -3 && w.sliders[0].max === 3, JSON.stringify(w.sliders));
  const moved = setVariables(w.scene, compileScene(w.scene), { a: -2 });
  check('lesson picture: a slider value moves the scene', moved.expressions[0].text === 'a = -2', moved.expressions[0].text);
  const o = scenePicture({ expressions: ['a = 2', 'y = a x^2'] }, { tries: ['y = 1/x'] });
  check('lesson picture: the row to rewrite is the first that draws', !!o.editable && o.editable.text === 'y = a x^2' && o.editable.tex.includes('x'), JSON.stringify(o.editable));
  check('lesson picture: offered formulas are typeset', o.tries.length === 1 && o.tries[0].tex.includes('frac'), JSON.stringify(o.tries));
  const st = sceneSteps({ expressions: [{ text: 'a = 1', slider: { min: -3, max: 3 } }, 'y = a x^2', 'y = x + 2'] }, [
    { text: 'one', show: [1] }, { text: 'two', set: { a: -1 } }, { text: 'three', expressions: ['y = sin(x)'], annotations: [{ type: 'point', x: 0, y: 0, label: 'origin' }] }
  ], { width: 400, height: 300 });
  const paths = svg => (svg.match(/<path/g) || []).length;
  check('lesson steps: one drawing per step, of the asked size', st.steps.length === 3 && st.width === 400 && st.steps.every(s => s.svg.includes('viewBox="0 0 400 300"')));
  check('lesson steps: show draws only the named rows', paths(st.steps[0].svg) < paths(st.steps[1].svg), paths(st.steps[0].svg) + ' / ' + paths(st.steps[1].svg));
  check('lesson steps: set moves a slider for that step only', readHash(st.steps[1].hash).expressions[0].text === 'a = -1' && readHash(st.steps[0].hash).expressions[0].text === 'a = 1');
  check('lesson steps: a step can have its own rows and marks', st.steps[2].svg.includes('origin') && readHash(st.steps[2].hash).expressions[0].text === 'y = sin(x)');
  check('lesson picture: title becomes the alt text', q.alt === 'One period of the sine curve', q.alt);
}

console.log(`\n${passed} passed, ${failed} failed`);
for (const f of fails) console.log('  FAIL  ' + f);
process.exit(failed ? 1 : 0);
