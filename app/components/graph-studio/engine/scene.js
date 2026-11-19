// Graph Studio — engine / scene
//
// The scene document is the one contract of the whole product: a plain
// JSON object (no functions) that any shell can save, load and pass on.
//
//   {
//     version: 1,
//     expressions: [
//       { id: 'e1', text: 'a = 2', slider: { min: -5, max: 5, step: 0 } },
//       { id: 'e2', text: 'f(x) = a sin(x)', color: '#2563EB' },
//       { id: 'e3', text: '(p, f(p))' },
//       { id: 'e4', text: '(3cos(t), 2sin(t))', param: { min: 0, max: 6.2832 } },
//       { id: 'e5', text: 'y > x^2 - 4', hidden: true, lock: 'readonly' }
//     ],
//     view: { cx: 0, cy: 0, ux: 0.035, uy: 0.035 },
//     settings: { grid: true, axes: true, theme: 'default', lockViewport: false },
//     authoring: { title: '', steps: [], explanations: {} }
//   }
//
// This file: the document's defaults and helpers, and compileScene(),
// which turns a document into things that can be drawn. No React, no DOM.

import {
  classify, scanDefinitions, compileNode, freeSymbols, calledFunctions,
  isNumericLiteral, CONSTANTS, RESERVED_VARS
} from './language.js';

export const SCENE_VERSION = 1;

// view: centre of the picture and world units per pixel on each axis,
// so resizing the canvas never distorts the picture.
export const DEFAULT_VIEW = { cx: 0, cy: 0, ux: 0.035, uy: 0.035 };

export const DEFAULT_SETTINGS = { grid: true, axes: true, theme: 'default', lockViewport: false };

const DEFAULT_SLIDER = { min: -10, max: 10, step: 0 };
const TWO_PI = 2 * Math.PI;
const RESERVED = new Set(RESERVED_VARS);

// ------------------------------------------------------------
// Document helpers
// ------------------------------------------------------------

// Fills in everything a partial document leaves out. Rows may be given
// as plain strings. Ids that are missing are numbered e1, e2, …
export function createScene(partial = {}) {
  const used = new Set((partial.expressions || []).map(e => (typeof e === 'object' && e ? e.id : null)).filter(Boolean));
  let n = 0;
  const nextId = () => { let id; do { n += 1; id = 'e' + n; } while (used.has(id)); used.add(id); return id; };
  const expressions = (partial.expressions || []).map(e => {
    const row = typeof e === 'string' ? { text: e } : { ...e };
    if (!row.id) row.id = nextId();
    if (typeof row.text !== 'string') row.text = '';
    return row;
  });
  return {
    version: SCENE_VERSION,
    expressions,
    view: { ...DEFAULT_VIEW, ...(partial.view || {}) },
    settings: { ...DEFAULT_SETTINGS, ...(partial.settings || {}) },
    authoring: { title: '', steps: [], explanations: {}, ...(partial.authoring || {}) }
  };
}

// Returns the document itself when it is already complete, so that
// unchanged parts keep their identity from one render to the next.
export function ensureScene(scene) {
  if (
    scene && scene.version === SCENE_VERSION && Array.isArray(scene.expressions) &&
    scene.view && scene.settings && scene.authoring &&
    scene.expressions.every(e => e && typeof e === 'object' && e.id && typeof e.text === 'string')
  ) return scene;
  return createScene(scene || {});
}

export function newRowId(scene) {
  const used = new Set(scene.expressions.map(e => e.id));
  let n = scene.expressions.length;
  let id;
  do { n += 1; id = 'e' + n; } while (used.has(id));
  return id;
}

// World rectangle shown by a view on a canvas of W × H pixels.
export function viewBounds(view, W, H) {
  return {
    xMin: view.cx - (view.ux * W) / 2, xMax: view.cx + (view.ux * W) / 2,
    yMin: view.cy - (view.uy * H) / 2, yMax: view.cy + (view.uy * H) / 2
  };
}

// View that shows a given world rectangle on a canvas of W × H pixels.
export function viewFromBounds(b, W, H) {
  return { cx: (b.xMin + b.xMax) / 2, cy: (b.yMin + b.yMax) / 2, ux: (b.xMax - b.xMin) / W, uy: (b.yMax - b.yMin) / H };
}

export function sliderRange(row) {
  return { ...DEFAULT_SLIDER, ...(row.slider || {}) };
}

function roundTo(v, decimals) {
  const s = v.toFixed(Math.max(0, Math.min(10, decimals)));
  return s.includes('.') ? s.replace(/\.?0+$/, '') : s;
}

function sliderDecimals(min, max) {
  return Math.max(0, 2 - Math.floor(Math.log10(Math.max(max - min, 1e-9))));
}

// Writes new values into slider rows ("a = 2" → "a = 2.35") and returns
// a new document. Used by sliders, by dragging a point and by animation.
// `updates` is { name: value }; names that are not sliders are ignored.
export function setVariables(scene, compiled, updates) {
  let changed = false;
  const expressions = scene.expressions.map(e => {
    const info = compiled.rows[e.id];
    if (!info || info.kind !== 'slider' || !(info.name in updates)) return e;
    const v = updates[info.name];
    if (!Number.isFinite(v)) return e;
    const cur = sliderRange(e);
    const min = Math.min(cur.min, v), max = Math.max(cur.max, v);
    const text = `${info.name} = ${roundTo(v, sliderDecimals(min, max))}`;
    if (text === e.text && min === cur.min && max === cur.max) return e;
    changed = true;
    return { ...e, text, slider: { ...cur, min, max } };
  });
  return changed ? { ...scene, expressions } : scene;
}

// ------------------------------------------------------------
// compileScene: document → rows status + drawable items
// ------------------------------------------------------------
//
// Returns { rows, items, S, F }.
//   rows[id]  status of each row, one of
//             { kind: 'empty' }
//             { kind: 'error', error, missing: [names] }
//             { kind: 'slider', name, value }
//             { kind: 'constant', name, value }
//             { kind: 'function', name }
//             { kind: 'value', value }
//             { kind: 'curve' } | { kind: 'implicit' } | { kind: 'region' }
//             { kind: 'parametric', t0, t1 } | { kind: 'polar', t0, t1 }
//             { kind: 'point', x, y, draggable }
//   items     what to draw, in row order; each has { type, id, index, color }
//             type: 'curveX' | 'curveY' | 'param' | 'implicit' | 'region' | 'point'
//   S, F      values of user variables and the user functions
//
// An error in one row never stops the other rows.

function safe1(f) { return a => { try { const v = f(a); return typeof v === 'number' ? v : NaN; } catch { return NaN; } }; }
function safe2(f) { return (a, b) => { try { const v = f(a, b); return typeof v === 'number' ? v : NaN; } catch { return NaN; } }; }
function safeBool(f) { return (...args) => { try { return !!f(...args); } catch { return false; } }; }

export function compileScene(scene) {
  const exprs = scene.expressions || [];
  const names = scanDefinitions(exprs.map(e => e.text));
  const S = {}, F = {};
  const env = { S, F, userVars: names.vars, userFuncs: names.funcs };
  const rows = {};
  const items = [];

  const entries = exprs.map((e, index) => ({ e, index, c: classify(e.text, names) }));
  entries.forEach(({ e }) => { rows[e.id] = { kind: 'empty' }; });

  // ---------- who defines what (a name defined twice is an error) ----------
  const owner = {};
  const dupe = new Set();
  for (const { e, c } of entries) {
    let n = null;
    if (c.kind === 'funcdef') n = c.name;
    else if (c.kind === 'equation' && names.vars.has(c.lhsText)) n = c.lhsText;
    if (!n) continue;
    if (owner[n]) { dupe.add(owner[n]); dupe.add(e.id); }
    else owner[n] = e.id;
  }

  const check = (nodes, allowed) => {
    const missing = new Set(), illegal = new Set();
    for (const node of nodes) {
      for (const s of freeSymbols(node)) {
        if (allowed.includes(s) || names.vars.has(s) || s in CONSTANTS) continue;
        if (RESERVED.has(s)) illegal.add(s); else missing.add(s);
      }
    }
    return { missing: [...missing], illegal: [...illegal] };
  };

  const fail = (id, error, missing = []) => { rows[id] = { kind: 'error', error, missing }; };

  const compileRestriction = (id, condNodes) => {
    if (!condNodes.length) return { rc: null };
    const chk = check(condNodes, ['x', 'y', 't', 'theta']);
    if (chk.missing.length) { fail(id, 'Undefined: ' + chk.missing.join(', '), chk.missing); return { failed: true }; }
    const fns = condNodes.map(n => safeBool(compileNode(n, ['x', 'y', 't', 'theta'], env)));
    return { rc: (x, y, t, th) => fns.every(f => f(x, y, t, th)) };
  };

  // ---------- 1. user functions ----------
  for (const { e, c } of entries) {
    if (c.kind !== 'funcdef') continue;
    if (dupe.has(e.id)) { fail(e.id, `${c.name} is defined more than once`); continue; }
    const chk = check([c.node], [c.param]);
    if (chk.illegal.length) { fail(e.id, `${chk.illegal.join(', ')} not allowed in ${c.name}(${c.param})`); continue; }
    if (chk.missing.length) { fail(e.id, 'Undefined: ' + chk.missing.join(', '), chk.missing); continue; }
    try {
      F[c.name] = safe1(compileNode(c.node, [c.param], env));
      rows[e.id] = { kind: 'function', name: c.name };
    } catch (err) { fail(e.id, err.message); }
  }

  // ---------- 2. variables, evaluated in dependency order ----------
  const consts = entries.filter(({ c }) => c.kind === 'equation' && names.vars.has(c.lhsText));
  const constNodes = {};
  for (const { e, c } of consts) {
    if (dupe.has(e.id)) { fail(e.id, `${c.lhsText} is defined more than once`); continue; }
    const chk = check([c.rhs], []);
    if (chk.illegal.length) { fail(e.id, `Use ${c.lhsText}(${chk.illegal[0]}) = … to define a function`); continue; }
    if (chk.missing.length) { fail(e.id, 'Undefined: ' + chk.missing.join(', '), chk.missing); continue; }
    constNodes[c.lhsText] = { id: e.id, node: c.rhs, slider: isNumericLiteral(c.rhs) };
  }

  const fnDeps = {};
  for (const { c } of entries) {
    if (c.kind === 'funcdef') fnDeps[c.name] = [...freeSymbols(c.node)].filter(s => names.vars.has(s));
  }
  const depsOf = name => {
    const node = constNodes[name].node;
    const d = new Set([...freeSymbols(node)].filter(s => names.vars.has(s)));
    for (const fn of calledFunctions(node)) (fnDeps[fn] || []).forEach(s => d.add(s));
    return [...d];
  };

  // Depth-first walk; every name on a loop is reported as circular.
  const state = {}, order = [], circular = new Set();
  const visit = (name, stack) => {
    if (state[name] === 2) return;
    if (state[name] === 1) {
      const from = stack.indexOf(name);
      for (const n of stack.slice(from)) circular.add(n);
      return;
    }
    state[name] = 1;
    stack.push(name);
    for (const d of depsOf(name)) if (constNodes[d]) visit(d, stack);
    stack.pop();
    state[name] = 2;
    order.push(name);
  };
  for (const name of Object.keys(constNodes)) visit(name, []);
  // A name that depends on a circular one cannot be evaluated either.
  const onLoop = new Set(circular);
  let grew = true;
  while (grew) {
    grew = false;
    for (const name of Object.keys(constNodes)) {
      if (circular.has(name)) continue;
      if (depsOf(name).some(d => circular.has(d))) { circular.add(name); grew = true; }
    }
  }
  for (const name of circular) {
    fail(constNodes[name].id, onLoop.has(name) ? `Circular definition: ${name}` : `${name} depends on a circular definition`);
    delete constNodes[name];
  }
  for (const name of order) {
    const cn = constNodes[name];
    if (!cn) continue;
    try {
      const v = compileNode(cn.node, [], env)();
      S[name] = typeof v === 'number' ? v : NaN;
      rows[cn.id] = cn.slider ? { kind: 'slider', name, value: S[name] } : { kind: 'constant', name, value: S[name] };
    } catch (err) { fail(cn.id, err.message); }
  }

  // ---------- 3. things to draw ----------
  for (const { e, index, c } of entries) {
    const id = e.id;
    // a row may also say how its line is drawn: width in px, dashed: true
    const base = { id, index, color: e.color || null, width: e.width, dashed: e.dashed };
    const shown = !e.hidden;
    if (c.kind === 'empty') continue;
    if (c.kind === 'error') { fail(id, c.error); continue; }

    if (c.kind === 'funcdef' || (c.kind === 'equation' && names.vars.has(c.lhsText))) {
      if (c.kind === 'funcdef' && c.param === 'x' && F[c.name] && shown && rows[id].kind === 'function') {
        const r = compileRestriction(id, c.condNodes);
        if (r.failed) continue;
        items.push(makeCurveX(base, F[c.name], r.rc));
      }
      continue;
    }

    const r = compileRestriction(id, c.condNodes);
    if (r.failed) continue;

    const pushX = node => {
      const f = safe1(compileNode(node, ['x'], env));
      rows[id] = { kind: 'curve' };
      if (shown) items.push(makeCurveX(base, f, r.rc));
    };
    const pushY = node => {
      const g = safe1(compileNode(node, ['y'], env));
      rows[id] = { kind: 'curve' };
      if (shown) items.push({ ...base, type: 'curveY', g: r.rc ? y => { const x = g(y); return r.rc(x, y, 0, 0) ? x : NaN; } : g });
    };

    try {
      if (c.kind === 'bare') {
        const chk = check([c.node], ['x']);
        if (chk.missing.length) { fail(id, 'Undefined: ' + chk.missing.join(', '), chk.missing); continue; }
        if (chk.illegal.length) { fail(id, `Use an equation for ${chk.illegal.join(', ')}`); continue; }
        if (freeSymbols(c.node).has('x')) pushX(c.node);
        else rows[id] = { kind: 'value', value: compileNode(c.node, [], env)() };
        continue;
      }

      if (c.kind === 'tuple') {
        const chk = check(c.nodes, ['t']);
        if (chk.missing.length) { fail(id, 'Undefined: ' + chk.missing.join(', '), chk.missing); continue; }
        if (chk.illegal.length) { fail(id, 'Points use constants; parametric curves use t'); continue; }
        const usesT = c.nodes.some(n => freeSymbols(n).has('t'));
        if (usesT) {
          const fx = safe1(compileNode(c.nodes[0], ['t'], env)), fy = safe1(compileNode(c.nodes[1], ['t'], env));
          const t0 = e.param?.min ?? 0, t1 = e.param?.max ?? TWO_PI;
          rows[id] = { kind: 'parametric', t0, t1 };
          if (shown) {
            items.push({
              ...base, type: 'param', t0, t1,
              xy: t => { const x = fx(t), y = fy(t); return r.rc && !r.rc(x, y, t, 0) ? null : [x, y]; }
            });
          }
        } else {
          const px = compileNode(c.nodes[0], [], env)(), py = compileNode(c.nodes[1], [], env)();
          const dragVar = n => (n.type === 'SymbolNode' && constNodes[n.name]?.slider ? n.name : null);
          const drag = { xVar: dragVar(c.nodes[0]), yVar: dragVar(c.nodes[1]) };
          rows[id] = { kind: 'point', x: px, y: py, draggable: !!(drag.xVar || drag.yVar) };
          if (shown) items.push({ ...base, type: 'point', x: px, y: py, drag, label: e.showLabel ? (e.label || '') : null });
        }
        continue;
      }

      if (c.kind === 'equation') {
        const fl = freeSymbols(c.lhs), fr = freeSymbols(c.rhs);
        if (c.lhsText === 'r' || c.rhsText === 'r') {
          const other = c.lhsText === 'r' ? c.rhs : c.lhs;
          const chk = check([other], ['theta']);
          if (chk.missing.length) { fail(id, 'Undefined: ' + chk.missing.join(', '), chk.missing); continue; }
          if (chk.illegal.length) { fail(id, 'Polar curves use θ (theta)'); continue; }
          const rf = safe1(compileNode(other, ['theta'], env));
          const t0 = e.param?.min ?? 0, t1 = e.param?.max ?? TWO_PI;
          rows[id] = { kind: 'polar', t0, t1 };
          if (shown) {
            items.push({
              ...base, type: 'param', t0, t1,
              xy: th => { const rr = rf(th), x = rr * Math.cos(th), y = rr * Math.sin(th); return r.rc && !r.rc(x, y, 0, th) ? null : [x, y]; }
            });
          }
          continue;
        }
        const chk = check([c.lhs, c.rhs], ['x', 'y']);
        if (chk.missing.length) { fail(id, 'Undefined: ' + chk.missing.join(', '), chk.missing); continue; }
        if (chk.illegal.length) { fail(id, `${chk.illegal.join(', ')} not allowed here`); continue; }

        if (c.lhsText === 'y' && !fr.has('y')) { pushX(c.rhs); continue; }
        if (c.rhsText === 'y' && !fl.has('y')) { pushX(c.lhs); continue; }
        if (c.lhsText === 'x' && !fr.has('x')) { pushY(c.rhs); continue; }
        if (c.rhsText === 'x' && !fl.has('x')) { pushY(c.lhs); continue; }

        if (!fl.has('x') && !fl.has('y') && !fr.has('x') && !fr.has('y')) {
          fail(id, c.lhsText in CONSTANTS ? `${c.lhsText} is a built-in constant` : 'Nothing to plot: the equation has no x or y');
          continue;
        }
        const L = compileNode(c.lhs, ['x', 'y'], env), Rr = compileNode(c.rhs, ['x', 'y'], env);
        const Fxy = safe2((x, y) => L(x, y) - Rr(x, y));
        rows[id] = { kind: 'implicit' };
        if (shown) items.push({ ...base, type: 'implicit', F: r.rc ? (x, y) => (r.rc(x, y, 0, 0) ? Fxy(x, y) : NaN) : Fxy });
        continue;
      }

      if (c.kind === 'inequality') {
        const chk = check(c.nodes, ['x', 'y']);
        if (chk.missing.length) { fail(id, 'Undefined: ' + chk.missing.join(', '), chk.missing); continue; }
        if (chk.illegal.length) { fail(id, `${chk.illegal.join(', ')} not allowed here`); continue; }
        const fns = c.nodes.map(n => compileNode(n, ['x', 'y'], env));
        // each part is written as g(x, y) > 0 (strict) or g(x, y) >= 0
        const parts = c.ops.map((op, k) => {
          const a = fns[k], b = fns[k + 1];
          const g = op[0] === '<' ? safe2((x, y) => b(x, y) - a(x, y)) : safe2((x, y) => a(x, y) - b(x, y));
          return { g, strict: op.length === 1 };
        });
        const holds = (x, y, skip) => parts.every((p, k) => k === skip || (p.strict ? p.g(x, y) > 0 : p.g(x, y) >= 0));
        const inRc = (x, y) => !r.rc || r.rc(x, y, 0, 0);
        rows[id] = { kind: 'region' };
        if (shown) {
          items.push({
            ...base, type: 'region',
            cond: (x, y) => inRc(x, y) && holds(x, y, -1),
            boundaries: parts.map((p, k) => ({ strict: p.strict, F: (x, y) => (inRc(x, y) && holds(x, y, k) ? p.g(x, y) : NaN) }))
          });
        }
        continue;
      }
    } catch (err) {
      fail(id, err.message);
    }
  }

  return { rows, items, S, F };
}

function makeCurveX(base, f, rc) {
  return { ...base, type: 'curveX', f: rc ? x => { const y = f(x); return rc(x, y, 0, 0) ? y : NaN; } : f };
}
