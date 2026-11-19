// Graph Studio — engine / language
//
// Text typed by a person  →  classified row  →  native JavaScript function.
//
// No React, no DOM. math.js is used only as a parser; its tree is turned
// into plain JavaScript through a fixed list of allowed node types, so
// typed text can never inject code and evaluation is fast enough for
// implicit curves and regions.
//
// Conventions follow Desmos: ln is the natural log, log is base 10.

import { parse } from 'mathjs';

// ------------------------------------------------------------
// 1. Runtime library the compiled expressions call into
// ------------------------------------------------------------

// Real-number power: (-8)^(1/3) = -2. A negative base with a fractional
// exponent has a real value only when the exponent is a fraction with
// an odd denominator; otherwise the result is undefined (NaN).
function pow(a, b) {
  if (a >= 0 || Number.isInteger(b)) return Math.pow(a, b);
  for (let q = 3; q <= 15; q += 2) {
    const p = b * q;
    const pr = Math.round(p);
    if (Math.abs(p - pr) < 1e-9) {
      const r = Math.pow(-a, b);
      return pr % 2 === 0 ? r : -r;
    }
  }
  return NaN;
}

function log(x, base) {
  if (base === undefined) return Math.log10(x);
  return Math.log(x) / Math.log(base);
}

export const RUNTIME = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  sec: x => 1 / Math.cos(x),
  csc: x => 1 / Math.sin(x),
  cot: x => 1 / Math.tan(x),
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  arcsin: Math.asin,
  arccos: Math.acos,
  arctan: (y, x) => (x === undefined ? Math.atan(y) : Math.atan2(y, x)),
  sinh: Math.sinh,
  cosh: Math.cosh,
  tanh: Math.tanh,
  sqrt: Math.sqrt,
  cbrt: Math.cbrt,
  abs: Math.abs,
  floor: Math.floor,
  ceil: Math.ceil,
  round: Math.round,
  sign: Math.sign,
  exp: Math.exp,
  ln: Math.log,
  log,
  min: Math.min,
  max: Math.max,
  pow
};

export const CONSTANTS = {
  pi: Math.PI,
  tau: 2 * Math.PI,
  e: Math.E
};

export const FUNCTION_NAMES = Object.keys(RUNTIME);

// Letters with a fixed meaning inside a row.
export const RESERVED_VARS = ['x', 'y', 't', 'theta', 'r'];

// ------------------------------------------------------------
// 2. Finding the names a scene defines
//    (needed before "xy" can be split into "x y")
// ------------------------------------------------------------
export function scanDefinitions(texts) {
  const funcs = new Set();
  const vars = new Set();
  for (const raw of texts) {
    const s = normalizeChars(raw || '');
    // A name is one letter with an optional subscript: a, k, a_1, x_0.
    // So "xy = 1" is x times y, not a variable called xy.
    const fm = s.match(/^\s*([A-Za-z](?:_[A-Za-z0-9]+)?)\s*\(\s*(?:[A-Za-z](?:_[A-Za-z0-9]+)?|theta)\s*\)\s*=/);
    if (fm) { if (!(fm[1] in CONSTANTS)) funcs.add(fm[1]); continue; }
    const vm = s.match(/^\s*([A-Za-z](?:_[A-Za-z0-9]+)?)\s*=(?!=)/);
    if (vm && !RESERVED_VARS.includes(vm[1]) && !(vm[1] in CONSTANTS)) vars.add(vm[1]);
  }
  return { funcs, vars };
}

// ------------------------------------------------------------
// 3. Normalisation
// ------------------------------------------------------------
export function normalizeChars(s) {
  return s
    .replace(/θ/g, 'theta')
    .replace(/π/g, 'pi')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/[·×]/g, '*')
    .replace(/[−–]/g, '-')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3');
}

// |x| → abs(x). Bars are paired left to right, so nested bars are not
// supported yet (known limitation).
function absBars(s) {
  let out = '', open = false;
  for (const ch of s) {
    if (ch === '|') { out += open ? ')' : 'abs('; open = !open; }
    else out += ch;
  }
  return open ? out + ')' : out;
}

// A run of letters that is not a known name is split into known names,
// then single letters: "xy" → "x y", "xsin" → "x sin".
function splitLetters(letters, known) {
  const pieces = [];
  let i = 0;
  while (i < letters.length) {
    let match = null;
    for (let len = letters.length - i; len >= 2; len--) {
      const cand = letters.slice(i, i + len);
      if (known.has(cand)) { match = cand; break; }
    }
    if (match) { pieces.push(match); i += match.length; }
    else { pieces.push(letters[i]); i += 1; }
  }
  return pieces;
}

// "2x" → "2 x", "a(x+1)" → "a*(x+1)" when a is not a function,
// "sin2x" → "sin(2x)", "sin x" → "sin(x)".
function splitIdentifiers(src, known, funcSet) {
  let out = '';
  const re = /[A-Za-z]+(?:_[A-Za-z0-9]+)?/g;
  let last = 0, m;
  while ((m = re.exec(src)) !== null) {
    const tok = m[0];
    const start = m.index;
    out += src.slice(last, start);
    last = start + tok.length;

    const prevIsDigit = start > 0 && /[0-9.]/.test(src[start - 1]);
    // Leave exponent notation alone: 1e5, 2.5e-3
    if (tok === 'e' && prevIsDigit && /[0-9]/.test(src[last] || '')) {
      out += tok;
      continue;
    }
    if (prevIsDigit) out += ' ';

    let pieces;
    if (known.has(tok)) pieces = [tok];
    else {
      const us = tok.indexOf('_');
      const letters = us >= 0 ? tok.slice(0, us) : tok;
      const sub = us >= 0 ? tok.slice(us) : '';
      pieces = splitLetters(letters, known);
      if (sub) pieces[pieces.length - 1] += sub;
    }

    const rest = src.slice(last);
    const nextIsParen = /^\s*\(/.test(rest);
    const lastPiece = pieces[pieces.length - 1];
    let joined = pieces.join(' ');
    if (nextIsParen && !funcSet.has(lastPiece)) joined += '*';
    out += joined;
  }
  out += src.slice(last);

  const fnAlt = [...funcSet].filter(n => n.length > 1).sort((a, b) => b.length - a.length).join('|');
  if (fnAlt) {
    const reFn = new RegExp(`(?<![A-Za-z_])(${fnAlt})(?![A-Za-z_(])\\s*(?!\\()([0-9.]+(?:\\s*[A-Za-z](?:_[A-Za-z0-9]+)?)?|[A-Za-z](?:_[A-Za-z0-9]+)?)`, 'g');
    out = out.replace(reFn, '$1($2)');
  }
  return out;
}

// ------------------------------------------------------------
// 4. Top-level structure of a row
// ------------------------------------------------------------
function scanTop(s) {
  const commas = [], rels = [];
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(' || c === '[' || c === '{') depth++;
    else if (c === ')' || c === ']' || c === '}') depth--;
    else if (depth === 0) {
      if (c === ',') commas.push(i);
      else if (c === '<' || c === '>') {
        if (s[i + 1] === '=') { rels.push({ idx: i, op: c + '=', len: 2 }); i++; }
        else rels.push({ idx: i, op: c, len: 1 });
      } else if (c === '=') {
        rels.push({ idx: i, op: '=', len: 1 });
      }
    }
  }
  return { commas, rels, balanced: depth === 0 };
}

// Trailing {x > 0} or {0 < x < 2} blocks are restrictions on the row.
function extractRestrictions(s) {
  const conds = [];
  let body = s.trim();
  while (body.endsWith('}')) {
    let depth = 0, open = -1;
    for (let i = body.length - 1; i >= 0; i--) {
      if (body[i] === '}') depth++;
      else if (body[i] === '{') { depth--; if (depth === 0) { open = i; break; } }
    }
    if (open < 0) break;
    const inner = body.slice(open + 1, -1);
    const { commas } = scanTop(inner);
    let prev = 0;
    for (const c of [...commas, inner.length]) {
      const part = inner.slice(prev, c).trim();
      if (part) conds.push(part);
      prev = c + 1;
    }
    body = body.slice(0, open).trim();
  }
  return { body, conds };
}

function splitTuple(s) {
  const t = s.trim();
  if (!t.startsWith('(') || !t.endsWith(')')) return null;
  let depth = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === '(') depth++;
    else if (t[i] === ')') { depth--; if (depth === 0 && i !== t.length - 1) return null; }
  }
  const inner = t.slice(1, -1);
  const { commas } = scanTop(inner);
  if (commas.length !== 1) return null;
  return [inner.slice(0, commas[0]), inner.slice(commas[0] + 1)];
}

// ------------------------------------------------------------
// 5. Tree helpers
// ------------------------------------------------------------
export function freeSymbols(node) {
  const out = new Set();
  node.traverse((n, path, parent) => {
    if (n.type === 'SymbolNode') {
      if (parent && parent.type === 'FunctionNode' && path === 'fn') return;
      out.add(n.name);
    }
  });
  return out;
}

export function calledFunctions(node) {
  const out = new Set();
  node.traverse(n => { if (n.type === 'FunctionNode') out.add(n.fn.name); });
  return out;
}

export function isNumericLiteral(node) {
  if (node.type === 'ConstantNode' && typeof node.value === 'number') return true;
  if (node.type === 'OperatorNode' && node.fn === 'unaryMinus' && node.args[0].type === 'ConstantNode') return true;
  return false;
}

// ------------------------------------------------------------
// 6. Compiler: tree → JavaScript source → function
// ------------------------------------------------------------
const OPS = {
  add: (a, b) => `(${a}+${b})`,
  subtract: (a, b) => `(${a}-${b})`,
  multiply: (a, b) => `(${a}*${b})`,
  divide: (a, b) => `(${a}/${b})`,
  pow: (a, b) => `R.pow(${a},${b})`,
  unaryMinus: a => `(-${a})`,
  unaryPlus: a => `(+${a})`,
  smaller: (a, b) => `(${a}<${b})`,
  larger: (a, b) => `(${a}>${b})`,
  smallerEq: (a, b) => `(${a}<=${b})`,
  largerEq: (a, b) => `(${a}>=${b})`,
  equal: (a, b) => `(${a}===${b})`,
  unequal: (a, b) => `(${a}!==${b})`,
  and: (a, b) => `(${a}&&${b})`,
  or: (a, b) => `(${a}||${b})`,
  not: a => `(!${a})`
};

function codegen(node, ctx) {
  switch (node.type) {
    case 'ConstantNode':
      if (typeof node.value !== 'number') throw new Error('Unsupported constant');
      return `(${node.value})`;
    case 'ParenthesisNode':
      return codegen(node.content, ctx);
    case 'SymbolNode': {
      const n = node.name;
      if (ctx.params.includes(n)) return 'v_' + n;
      if (ctx.userVars.has(n)) return `S[${JSON.stringify(n)}]`;
      if (n in CONSTANTS) return `(${CONSTANTS[n]})`;
      throw new Error(`Undefined: ${n}`);
    }
    case 'OperatorNode': {
      const g = OPS[node.fn];
      if (!g) throw new Error(`Unsupported operator: ${node.op}`);
      const args = node.args.map(a => codegen(a, ctx));
      return g(...args);
    }
    case 'RelationalNode': {
      const parts = [];
      for (let i = 0; i < node.conditionals.length; i++) {
        const a = codegen(node.params[i], ctx), b = codegen(node.params[i + 1], ctx);
        parts.push(OPS[node.conditionals[i]](a, b));
      }
      return '(' + parts.join('&&') + ')';
    }
    case 'ConditionalNode':
      return `(${codegen(node.condition, ctx)}?${codegen(node.trueExpr, ctx)}:${codegen(node.falseExpr, ctx)})`;
    case 'FunctionNode': {
      const name = node.fn.name;
      const args = node.args.map(a => codegen(a, ctx)).join(',');
      if (ctx.userFuncs.has(name)) return `F[${JSON.stringify(name)}](${args})`;
      if (name in RUNTIME) return `R.${name}(${args})`;
      throw new Error(`Unknown function: ${name}`);
    }
    default:
      throw new Error(`Unsupported syntax (${node.type})`);
  }
}

// params: bound variable names, in call order.
// env:    { S: values of user variables, F: user functions,
//           userVars: Set of names, userFuncs: Set of names }
export function compileNode(node, params, env) {
  const ctx = { params, userVars: env.userVars, userFuncs: env.userFuncs };
  const body = codegen(node, ctx);
  const argList = params.map(p => 'v_' + p).join(',');
  // The source is built only from the allowed node types above.
  // eslint-disable-next-line no-new-func
  const factory = new Function('R', 'S', 'F', `return function(${argList}){return ${body};};`);
  return factory(RUNTIME, env.S, env.F);
}

function parseSafe(src) {
  try { return { node: parse(src) }; }
  catch (e) { return { error: 'Syntax: ' + e.message.replace(/\(char \d+\)/, '').trim() }; }
}

// ------------------------------------------------------------
// 7. Classifying one row
// ------------------------------------------------------------
// Returns one of:
//   { kind: 'empty' }
//   { kind: 'error', error }
//   { kind: 'tuple', nodes: [a, b], condNodes }
//   { kind: 'bare', node, condNodes }
//   { kind: 'funcdef', name, param, node, condNodes }
//   { kind: 'equation', lhs, rhs, lhsText, rhsText, condNodes }
//   { kind: 'inequality', nodes, ops, condNodes }
export function classify(raw, names) {
  const known = new Set([...FUNCTION_NAMES, ...Object.keys(CONSTANTS), 'theta', ...names.funcs, ...names.vars]);
  const funcSet = new Set([...FUNCTION_NAMES, ...names.funcs]);

  let s = normalizeChars(raw || '').trim();
  if (!s) return { kind: 'empty' };
  s = absBars(s);

  const { body: rawBody, conds: rawConds } = extractRestrictions(s);
  const body = splitIdentifiers(rawBody, known, funcSet);
  const condSrcs = rawConds.map(c => splitIdentifiers(c, known, funcSet));

  const condNodes = [];
  for (const c of condSrcs) {
    const p = parseSafe(c);
    if (p.error) return { kind: 'error', error: 'Restriction ' + p.error };
    condNodes.push(p.node);
  }

  const top = scanTop(body);
  if (!top.balanced) return { kind: 'error', error: 'Unbalanced brackets' };

  const tuple = splitTuple(body);
  if (tuple) {
    const a = parseSafe(tuple[0]), b = parseSafe(tuple[1]);
    if (a.error || b.error) return { kind: 'error', error: a.error || b.error };
    return { kind: 'tuple', nodes: [a.node, b.node], condNodes };
  }

  const rels = top.rels;

  if (rels.length === 0) {
    const p = parseSafe(body);
    if (p.error) return { kind: 'error', error: p.error };
    return { kind: 'bare', node: p.node, condNodes };
  }

  const parts = [];
  let prev = 0;
  for (const r of rels) { parts.push(body.slice(prev, r.idx)); prev = r.idx + r.len; }
  parts.push(body.slice(prev));
  if (parts.some(p => !p.trim())) return { kind: 'error', error: 'Something is missing next to the sign' };
  const parsed = parts.map(parseSafe);
  const bad = parsed.find(p => p.error);
  if (bad) return { kind: 'error', error: bad.error };
  const nodes = parsed.map(p => p.node);
  const ops = rels.map(r => r.op);

  if (ops.length === 1 && ops[0] === '=') {
    const lhs = parts[0].trim();
    const fdef = lhs.match(/^([A-Za-z](?:_[A-Za-z0-9]+)?)\s*\(\s*([A-Za-z](?:_[A-Za-z0-9]+)?|theta)\s*\)$/);
    if (fdef && names.funcs.has(fdef[1])) {
      return { kind: 'funcdef', name: fdef[1], param: fdef[2], node: nodes[1], condNodes };
    }
    return { kind: 'equation', lhs: nodes[0], rhs: nodes[1], lhsText: lhs, rhsText: parts[1].trim(), condNodes };
  }

  if (ops.includes('=')) return { kind: 'error', error: 'Mixed = and inequality' };
  return { kind: 'inequality', nodes, ops, condNodes };
}

// ------------------------------------------------------------
// 8. Typeset form: row text → LaTeX
// ------------------------------------------------------------
// Used wherever a row is shown to a reader rather than edited, so that
// x^(1/3) appears as a real power, sqrt(x) as a root, and so on. The
// LaTeX is built from the same tree the compiler uses, so what is shown
// is what is drawn. Pure string work: no DOM.

const TEX_FUNCTIONS = {
  sin: '\\sin', cos: '\\cos', tan: '\\tan', sec: '\\sec', csc: '\\csc', cot: '\\cot',
  asin: '\\arcsin', acos: '\\arccos', atan: '\\arctan',
  arcsin: '\\arcsin', arccos: '\\arccos', arctan: '\\arctan',
  sinh: '\\sinh', cosh: '\\cosh', tanh: '\\tanh',
  exp: '\\exp', ln: '\\ln', log: '\\log', min: '\\min', max: '\\max',
  sign: '\\operatorname{sign}', round: '\\operatorname{round}'
};
const TEX_SYMBOLS = { theta: '\\theta', pi: '\\pi', tau: '\\tau' };
const TEX_RELATIONS = {
  smaller: '<', larger: '>', smallerEq: '\\le', largerEq: '\\ge', equal: '=', unequal: '\\ne',
  '<': '<', '>': '>', '<=': '\\le', '>=': '\\ge', '=': '='
};

function texNumber(v) {
  const s = String(v);
  const m = s.match(/^(-?[\d.]+)e([+-]?\d+)$/);
  if (!m) return s;
  return `${m[1]}\\times 10^{${+m[2]}}`;
}

function texSymbol(name) {
  if (TEX_SYMBOLS[name]) return TEX_SYMBOLS[name];
  const us = name.indexOf('_');
  return us > 0 ? `${name.slice(0, us)}_{${name.slice(us + 1)}}` : name;
}

// Brackets that only group (a numerator, an exponent, an argument) are
// not needed once the layout itself does the grouping.
const unwrap = node => (node.type === 'ParenthesisNode' ? unwrap(node.content) : node);

// A fraction needs no brackets of its own where it stands alone or next
// to + and −: the fraction bar already groups it. (1/2) + x shows as ½ + x.
function bare(node) {
  if (node.type === 'ParenthesisNode') {
    const inner = unwrap(node);
    if (inner.type === 'OperatorNode' && inner.fn === 'divide') return nodeToTex(inner);
  }
  return nodeToTex(node);
}

export function nodeToTex(node) {
  switch (node.type) {
    case 'ConstantNode':
      if (typeof node.value !== 'number') throw new Error('Unsupported constant');
      return texNumber(node.value);
    case 'SymbolNode':
      return texSymbol(node.name);
    case 'ParenthesisNode':
      return `\\left(${nodeToTex(node.content)}\\right)`;
    case 'OperatorNode': {
      const a = node.args;
      switch (node.fn) {
        case 'add': return `${bare(a[0])}+${bare(a[1])}`;
        case 'subtract': return `${bare(a[0])}-${bare(a[1])}`;
        case 'multiply': {
          const l = bare(a[0]), r = nodeToTex(a[1]);
          if (a[1].type === 'ParenthesisNode') return `${l}${r}`;   // a(x+1)
          if (!node.implicit || /^[\d.]/.test(r)) return `${l}\\cdot ${r}`;
          // written side by side, as typed: 2x, xy, a sin(bx)
          return /^\\(?!left|theta|pi|tau|frac|sqrt)/.test(r) ? `${l}\\,${r}` : `${l}${r.startsWith('\\') ? '' : ' '}${r}`;
        }
        case 'divide': return `\\frac{${nodeToTex(unwrap(a[0]))}}{${nodeToTex(unwrap(a[1]))}}`;
        case 'pow': {
          const base = a[0];
          const needs = base.type === 'OperatorNode' || (base.type === 'ConstantNode' && base.value < 0);
          const b = needs ? `\\left(${nodeToTex(base)}\\right)` : nodeToTex(base);
          return `{${b}}^{${nodeToTex(unwrap(a[1]))}}`;
        }
        case 'unaryMinus': return `-${bare(a[0])}`;
        case 'unaryPlus': return `+${nodeToTex(a[0])}`;
        case 'and': return `${nodeToTex(a[0])}\\text{ and }${nodeToTex(a[1])}`;
        case 'or': return `${nodeToTex(a[0])}\\text{ or }${nodeToTex(a[1])}`;
        case 'not': return `\\neg ${nodeToTex(a[0])}`;
        default:
          if (TEX_RELATIONS[node.fn]) return `${nodeToTex(a[0])}${TEX_RELATIONS[node.fn]} ${nodeToTex(a[1])}`;
          throw new Error(`Unsupported operator: ${node.op}`);
      }
    }
    case 'RelationalNode': {
      let out = nodeToTex(node.params[0]);
      node.conditionals.forEach((c, i) => { out += `${TEX_RELATIONS[c]} ${nodeToTex(node.params[i + 1])}`; });
      return out;
    }
    case 'FunctionNode': {
      const name = node.fn.name;
      const args = node.args.map(x => nodeToTex(unwrap(x)));
      if (name === 'sqrt' && args.length === 1) return `\\sqrt{${args[0]}}`;
      if (name === 'cbrt' && args.length === 1) return `\\sqrt[3]{${args[0]}}`;
      if (name === 'abs' && args.length === 1) return `\\left|${args[0]}\\right|`;
      if (name === 'floor' && args.length === 1) return `\\left\\lfloor ${args[0]}\\right\\rfloor`;
      if (name === 'ceil' && args.length === 1) return `\\left\\lceil ${args[0]}\\right\\rceil`;
      if (name === 'log' && args.length === 2) return `\\log_{${args[1]}}\\left(${args[0]}\\right)`;
      const head = TEX_FUNCTIONS[name] || texSymbol(name);
      return `${head}\\left(${args.join(',\\,')}\\right)`;
    }
    default:
      throw new Error(`Unsupported syntax (${node.type})`);
  }
}

// LaTeX for one row of a scene, or null when the row cannot be read
// (the caller then shows the text as typed). `names` comes from
// scanDefinitions over all rows of the scene.
export function rowToTex(raw, names = { funcs: new Set(), vars: new Set() }) {
  const c = classify(raw, names);
  if (c.kind === 'empty') return '';
  if (c.kind === 'error') return null;
  try {
    let tex;
    if (c.kind === 'tuple') tex = `\\left(${nodeToTex(unwrap(c.nodes[0]))},\\ ${nodeToTex(unwrap(c.nodes[1]))}\\right)`;
    else if (c.kind === 'bare') tex = bare(c.node);
    else if (c.kind === 'funcdef') tex = `${texSymbol(c.name)}\\left(${texSymbol(c.param)}\\right)=${bare(c.node)}`;
    else if (c.kind === 'equation') tex = `${bare(c.lhs)}=${bare(c.rhs)}`;
    else {
      tex = bare(c.nodes[0]);
      c.ops.forEach((op, i) => { tex += `${TEX_RELATIONS[op]} ${bare(c.nodes[i + 1])}`; });
    }
    if (c.condNodes.length) tex += `\\ \\left\\{${c.condNodes.map(nodeToTex).join(',\\ ')}\\right\\}`;
    return tex;
  } catch {
    return null;
  }
}
