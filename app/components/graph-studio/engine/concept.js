// Graph Studio — engine: what a concept tool needs worked out
//
// A concept tool is described by data (see shells/ConceptShell.jsx). Its
// texts and marks depend on the values of its sliders through small
// pieces of math written as text:
//
//   when: 'a < 0'                          a rule: is it true now?
//   text: 'Period is ${{2 pi / abs(b)}}$'  a value written into a sentence
//   x: 'h', y: 'k'                         where a mark is
//   { name: 'S', sum: 'f(a + j dx) dx', index: 'j', count: 'n' }   a worked-out quantity
//
// This file reads those pieces. The shell itself holds no math.

import { compile } from 'mathjs';

const compiled = new Map();
function read(text) {
  let c = compiled.get(text);
  if (c === undefined) {
    try { c = compile(text); } catch { c = null; }
    compiled.set(text, c);
  }
  return c;
}

// The value of a piece of math for the given slider values; NaN when it cannot be read.
export function conceptValue(text, values = {}) {
  if (typeof text === 'number') return text;
  if (typeof text !== 'string' || !text.trim()) return NaN;
  const c = read(text);
  if (!c) return NaN;
  try {
    const v = c.evaluate({ ...values });
    return typeof v === 'boolean' ? (v ? 1 : 0) : typeof v === 'number' ? v : NaN;
  } catch { return NaN; }
}

// Is the rule true now? No rule at all counts as true.
export function conceptTest(when, values = {}) {
  if (when === undefined || when === null || when === '') return true;
  if (typeof when === 'boolean') return when;
  const c = read(String(when));
  if (!c) return false;
  try { return c.evaluate({ ...values }) === true; } catch { return false; }
}

// A number as it is written in a sentence: at most two decimals, no trailing zeros.
export function conceptNumber(v, decimals = 2) {
  if (!Number.isFinite(v)) return '—';
  const r = Number(v.toFixed(decimals));
  return (Object.is(r, -0) ? 0 : r).toString();
}

// 'Slope becomes {{a}}' → 'Slope becomes 2.5'. Inside {{ }} is math over the slider values.
// {{S | 4}} asks for four decimals instead of two.
export function conceptText(text, values = {}) {
  if (typeof text !== 'string') return '';
  return text.replace(/\{\{([^{}]+)\}\}/g, (_, inner) => {
    const bar = inner.lastIndexOf('|');
    const decimals = bar > 0 && /^\s*\d+\s*$/.test(inner.slice(bar + 1)) ? +inner.slice(bar + 1) : null;
    return conceptNumber(conceptValue(decimals === null ? inner : inner.slice(0, bar), values), decimals === null ? 2 : decimals);
  });
}

// The first case whose rule is true: [{ when, text }] → its text with values written in, or null.
export function conceptCase(cases, values = {}) {
  if (!Array.isArray(cases)) return null;
  for (const c of cases) {
    if (conceptTest(c.when, values)) return c.text ? conceptText(c.text, values) : null;
  }
  return null;
}

// Everything the rules and sentences of a concept tool can use:
//   values     the sliders                         { a: 0, b: 3, n: 8 }
//   constants  fixed numbers of the tab on show    { p: 0, q: 1 }
//   functions  the functions of the scene          compileScene(scene).F
//   derived    quantities worked out in order, each may use the ones before:
//              { name, value: 'math' }
//              { name, sum: 'math in the index', index: 'j', count: 'n' }
//              { name, integral: 'f', from: 'a', to: 'b' }     (of a scene function)
// A scene function that has a hole at one point (sin(x)/x at 0) is given
// the value its neighbours agree on there.
const MAX_REPEAT = 400;
function healed(f) {
  return x => {
    const y = f(x);
    if (Number.isFinite(y) || !Number.isFinite(x)) return y;
    const h = 1e-6 * Math.max(1, Math.abs(x));
    const l = f(x - h), r = f(x + h);
    return Number.isFinite(l) && Number.isFinite(r) && Math.abs(l - r) < 1e-4 * Math.max(1, Math.abs(l)) ? (l + r) / 2 : y;
  };
}
function simpson(f, a, b, n = 2000) {
  if (!(typeof f === 'function') || !Number.isFinite(a) || !Number.isFinite(b)) return NaN;
  if (a === b) return 0;
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let k = 1; k < n; k++) s += f(a + k * h) * (k % 2 ? 4 : 2);
  return (s * h) / 3;
}
export function conceptScope({ values = {}, constants = {}, functions = {}, derived = [] } = {}) {
  const scope = { ...constants, ...values };
  for (const name of Object.keys(functions)) if (typeof functions[name] === 'function') scope[name] = healed(functions[name]);
  for (const d of derived) {
    if (!d || !d.name) continue;
    if (d.sum !== undefined) {
      const count = Math.min(100000, Math.max(0, Math.floor(conceptValue(d.count, scope)) || 0));
      const index = d.index || 'j';
      let total = 0;
      for (let j = 0; j < count; j++) total += conceptValue(d.sum, { ...scope, [index]: j });
      scope[d.name] = total;
    } else if (d.integral !== undefined) {
      scope[d.name] = simpson(scope[d.integral], conceptValue(d.from, scope), conceptValue(d.to, scope));
    } else scope[d.name] = conceptValue(d.value, scope);
  }
  return scope;
}

// Marks for the graph: those whose rule is true, with their places worked out.
const PLACES = ['x', 'y', 'slope', 'x1', 'x2', 'y1', 'y2', 'from', 'to'];
export function conceptMarks(list, values = {}) {
  const out = [];
  const all = [];
  // a mark with repeat: { index: 'j', count: 'n' } is made count times, j = 0, 1, …
  for (const m of list || []) {
    if (!m.repeat) { all.push([m, values]); continue; }
    const count = Math.min(MAX_REPEAT, Math.max(0, Math.floor(conceptValue(m.repeat.count, values)) || 0));
    for (let j = 0; j < count; j++) all.push([m, { ...values, [m.repeat.index || 'j']: j }]);
  }
  for (const [m, scope] of all) {
    const values = scope;       // eslint-disable-line no-shadow
    if (!conceptTest(m.when, values)) continue;
    const mark = { ...m };
    delete mark.when;
    delete mark.repeat;
    let ok = true;
    for (const k of PLACES) {
      if (typeof mark[k] === 'string') {
        mark[k] = conceptValue(mark[k], values);
        if (!Number.isFinite(mark[k])) ok = false;
      }
    }
    if (Array.isArray(mark.points)) {
      // corners may be written { x, y } or [x, y]; the graph takes pairs
      mark.points = mark.points.map(p => (Array.isArray(p) ? [conceptValue(p[0], values), conceptValue(p[1], values)] : [conceptValue(p.x, values), conceptValue(p.y, values)]));
      if (mark.points.some(p => !Number.isFinite(p[0]) || !Number.isFinite(p[1]))) ok = false;
    }
    if (typeof mark.label === 'string') mark.label = conceptText(mark.label, values);
    if (ok) out.push(mark);
  }
  return out;
}
