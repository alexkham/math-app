import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import SolutionPanel from './SolutionPanel';
import THEME_CSS from './MathSolverThemes';

/* =====================================================
   RATIONAL INEQUALITY SOLVER

   Two exports:
   - RationalInequalitySolverEngine: Standalone solver component
   - RationalInequalitySolver: Full educational wrapper (default)

   Features:
   - Variables in denominators with inequality signs
   - Sign chart method: find critical points (numerator
     zeros + denominator zeros), test intervals
   - Excluded values from denominators
   - Handles: a/x < b, (ax+b)/(cx+d) > e, sums of fractions
   - Interval notation in final answer
   - tabs prop on wrapper, passed through to SolutionPanel
   ===================================================== */


/* =====================================================
   TOKENIZER
   ===================================================== */

const TokenType = {
  NUMBER: 'NUMBER',
  VARIABLE: 'VARIABLE',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
  POWER: 'POWER',
  LPAREN: 'LPAREN',
  RPAREN: 'RPAREN',
  PLUS: 'PLUS',
  MINUS: 'MINUS',
  EQUALS: 'EQUALS',
  LESS: 'LESS',
  GREATER: 'GREATER',
  LEQ: 'LEQ',
  GEQ: 'GEQ',
};

const SUPERSCRIPT_MAP = { '\u00B2': 2, '\u00B3': 3, '\u2074': 4 };

function tokenize(input) {
  const tokens = [];
  let i = 0;
  while (i < input.length) {
    const ch = input[i];
    if (/\s/.test(ch)) { i++; continue; }
    if (SUPERSCRIPT_MAP[ch] !== undefined) { tokens.push({ type: TokenType.POWER }); tokens.push({ type: TokenType.NUMBER, value: SUPERSCRIPT_MAP[ch] }); i++; continue; }
    if (/[0-9]/.test(ch) || (ch === '.' && /[0-9]/.test(input[i + 1]))) {
      let num = ''; while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) { num += input[i]; i++; }
      tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) }); continue;
    }
    if (/[a-zA-Z]/.test(ch)) { tokens.push({ type: TokenType.VARIABLE, value: ch.toLowerCase() }); i++; continue; }
    if (ch === '\u2264' || (ch === '<' && input[i + 1] === '=')) { tokens.push({ type: TokenType.LEQ }); i += ch === '\u2264' ? 1 : 2; continue; }
    if (ch === '\u2265' || (ch === '>' && input[i + 1] === '=')) { tokens.push({ type: TokenType.GEQ }); i += ch === '\u2265' ? 1 : 2; continue; }
    if (ch === '<') { tokens.push({ type: TokenType.LESS }); i++; continue; }
    if (ch === '>') { tokens.push({ type: TokenType.GREATER }); i++; continue; }
    const charMap = { '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY, '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE, '^': TokenType.POWER, '(': TokenType.LPAREN, ')': TokenType.RPAREN, '+': TokenType.PLUS, '-': TokenType.MINUS, '=': TokenType.EQUALS };
    if (charMap[ch]) { tokens.push({ type: charMap[ch] }); i++; continue; }
    i++;
  }
  return tokens;
}

/* =====================================================
   PARSER
   ===================================================== */

function parse(tokens) {
  let pos = 0;
  const peek = () => tokens[pos];
  const consume = (et) => { const t = tokens[pos]; if (et && t?.type !== et) throw new Error(`Expected ${et} but got ${t?.type}`); pos++; return t; };
  const INEQ = new Set([TokenType.LESS, TokenType.GREATER, TokenType.LEQ, TokenType.GEQ]);
  const ineqOp = (t) => { if (t === TokenType.LESS) return '<'; if (t === TokenType.GREATER) return '>'; if (t === TokenType.LEQ) return '\u2264'; if (t === TokenType.GEQ) return '\u2265'; return '='; };

  const parseTop = () => {
    const left = parseExpr();
    const p = peek();
    if (p && INEQ.has(p.type)) { const op = ineqOp(consume().type); return { type: 'INEQUALITY', operator: op, left, right: parseExpr() }; }
    if (p?.type === TokenType.EQUALS) { consume(); return { type: 'EQUATION', left, right: parseExpr() }; }
    return left;
  };
  const parseExpr = () => parseAdd();
  const parseAdd = () => { let l = parseMul(); while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) { const op = consume().type; l = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left: l, right: parseMul() }; } return l; };
  const parseMul = () => { let l = parsePow(); while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) { const op = consume().type; l = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left: l, right: parsePow() }; } return l; };
  const parsePow = () => { let b = parseUnary(); if (peek()?.type === TokenType.POWER) { consume(); return { type: 'POWER', base: b, exponent: parsePow() }; } return b; };
  const parseUnary = () => { if (peek()?.type === TokenType.MINUS) { consume(); return { type: 'NEGATE', operand: parseUnary() }; } return parsePrimary(); };
  const parsePrimary = () => {
    const t = peek();
    if (t?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: t.value }; }
    if (t?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: t.value }; }
    if (t?.type === TokenType.LPAREN) { consume(); const e = parseExpr(); consume(TokenType.RPAREN); return e; }
    throw new Error(`Unexpected token: ${t?.type}`);
  };
  const ast = parseTop();
  if (pos < tokens.length) throw new Error('Unexpected tokens at end');
  return ast;
}

/* =====================================================
   HELPERS
   ===================================================== */

function formatNumber(n) { if (Number.isInteger(n)) return String(n); return (Math.round(n * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, ''); }

function containsVariable(node) {
  if (!node) return false;
  if (node.type === 'VARIABLE') return true;
  if (node.type === 'NUMBER') return false;
  if (node.type === 'NEGATE') return containsVariable(node.operand);
  if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
  return containsVariable(node.left) || containsVariable(node.right);
}

function evaluateConstant(node) {
  if (!node) return null;
  switch (node.type) {
    case 'NUMBER': return node.value;
    case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
    case 'ADD': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return l !== null && r !== null ? l + r : null; }
    case 'SUBTRACT': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return l !== null && r !== null ? l - r : null; }
    case 'MULTIPLY': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return l !== null && r !== null ? l * r : null; }
    case 'DIVIDE': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return l !== null && r !== null && r !== 0 ? l / r : null; }
    case 'POWER': { const l = evaluateConstant(node.base); const r = evaluateConstant(node.exponent); return l !== null && r !== null ? Math.pow(l, r) : null; }
    default: return null;
  }
}

function getVariable(node) {
  if (!node) return 'x';
  if (node.type === 'VARIABLE') return node.name;
  if (node.type === 'NEGATE') return getVariable(node.operand);
  if (node.left) { const v = getVariable(node.left); if (v !== 'x' || !node.right) return v; }
  if (node.right) return getVariable(node.right);
  if (node.operand) return getVariable(node.operand);
  if (node.base) return getVariable(node.base);
  return 'x';
}

function flipOperator(op) { if (op === '<') return '>'; if (op === '>') return '<'; if (op === '\u2264') return '\u2265'; if (op === '\u2265') return '\u2264'; return op; }
function isStrict(op) { return op === '<' || op === '>'; }
function isLessThan(op) { return op === '<' || op === '\u2264'; }

/* ---- Polynomial helpers ---- */
function addCoeffs(a, b) { const len = Math.max(a.length, b.length); const r = new Array(len).fill(0); for (let i = 0; i < a.length; i++) r[i] += a[i]; for (let i = 0; i < b.length; i++) r[i] += b[i]; return r; }
function multiplyCoeffs(a, b) { const r = new Array(a.length + b.length - 1).fill(0); for (let i = 0; i < a.length; i++) for (let j = 0; j < b.length; j++) r[i + j] += a[i] * b[j]; return r; }
function scaleCoeffs(a, s) { return a.map(c => c * s); }
function getDegree(c) { for (let i = c.length - 1; i >= 0; i--) { if (Math.abs(c[i]) > 1e-10) return i; } return 0; }
function trimCoeffs(c) { return c.slice(0, getDegree(c) + 1); }
function evalPoly(c, x) { let v = 0; for (let i = 0; i < c.length; i++) v += c[i] * Math.pow(x, i); return v; }
function coeffsEqual(a, b) { const la = trimCoeffs(a); const lb = trimCoeffs(b); if (la.length !== lb.length) return false; return la.every((v, i) => Math.abs(v - lb[i]) < 1e-8); }

function toCoeffs(node, varName) {
  if (!node) return null;
  switch (node.type) {
    case 'NUMBER': return [node.value];
    case 'VARIABLE': return node.name === varName ? [0, 1] : null;
    case 'NEGATE': { const c = toCoeffs(node.operand, varName); return c ? c.map(v => -v) : null; }
    case 'ADD': { const l = toCoeffs(node.left, varName); const r = toCoeffs(node.right, varName); return l && r ? addCoeffs(l, r) : null; }
    case 'SUBTRACT': { const l = toCoeffs(node.left, varName); const r = toCoeffs(node.right, varName); return l && r ? addCoeffs(l, r.map(v => -v)) : null; }
    case 'MULTIPLY': {
      const lc = evaluateConstant(node.left); const rc = evaluateConstant(node.right);
      if (lc !== null) { const r = toCoeffs(node.right, varName); return r ? r.map(v => v * lc) : null; }
      if (rc !== null) { const l = toCoeffs(node.left, varName); return l ? l.map(v => v * rc) : null; }
      const l = toCoeffs(node.left, varName); const r = toCoeffs(node.right, varName);
      return l && r ? multiplyCoeffs(l, r) : null;
    }
    case 'DIVIDE': { const d = evaluateConstant(node.right); if (d !== null && d !== 0) { const l = toCoeffs(node.left, varName); return l ? l.map(v => v / d) : null; } return null; }
    case 'POWER': {
      if (node.base.type === 'VARIABLE' && node.base.name === varName) { const exp = evaluateConstant(node.exponent); if (exp !== null && Number.isInteger(exp) && exp >= 0 && exp <= 4) { const c = new Array(exp + 1).fill(0); c[exp] = 1; return c; } }
      const exp = evaluateConstant(node.exponent);
      if (exp !== null && Number.isInteger(exp) && exp >= 0 && exp <= 4) { const base = toCoeffs(node.base, varName); if (base) { let r = [1]; for (let i = 0; i < exp; i++) { r = multiplyCoeffs(r, base); if (r.length > 5) return null; } return r; } }
      return null;
    }
    default: return null;
  }
}

/* ---- Fraction extraction ---- */
function extractFractions(node, varName, sign = 1) {
  if (!node) return [];
  if (node.type === 'ADD') return [...extractFractions(node.left, varName, sign), ...extractFractions(node.right, varName, sign)];
  if (node.type === 'SUBTRACT') return [...extractFractions(node.left, varName, sign), ...extractFractions(node.right, varName, -sign)];
  if (node.type === 'NEGATE') return extractFractions(node.operand, varName, -sign);
  if (node.type === 'DIVIDE') {
    const nc = toCoeffs(node.left, varName); const dc = toCoeffs(node.right, varName);
    if (nc && dc) return [{ num: scaleCoeffs(nc, sign), den: dc }];
    if (dc) { const inner = extractFractions(node.left, varName, sign); if (inner.length > 0) return inner.map(f => ({ num: f.num, den: multiplyCoeffs(f.den, dc) })); }
    return [];
  }
  if (node.type === 'MULTIPLY') {
    const lc = evaluateConstant(node.left); const rc = evaluateConstant(node.right);
    if (lc !== null) { return extractFractions(node.right, varName, sign).map(f => ({ num: scaleCoeffs(f.num, lc), den: f.den })); }
    if (rc !== null) { return extractFractions(node.left, varName, sign).map(f => ({ num: scaleCoeffs(f.num, rc), den: f.den })); }
  }
  const coeffs = toCoeffs(node, varName);
  if (coeffs) return [{ num: scaleCoeffs(coeffs, sign), den: [1] }];
  return [];
}

function getUniqueDenominators(fractions) {
  const unique = [];
  for (const f of fractions) { const den = trimCoeffs(f.den); if (den.length === 1 && Math.abs(den[0] - 1) < 1e-10) continue; if (!unique.some(u => coeffsEqual(u, den))) unique.push(den); }
  return unique;
}

/* ---- Root finding ---- */
function evalPolyDeriv(c, x) { let v = 0; for (let i = 1; i < c.length; i++) v += i * c[i] * Math.pow(x, i - 1); return v; }
function newtonRoot(coeffs, sx) { let x = sx; for (let i = 0; i < 50; i++) { const fx = evalPoly(coeffs, x); if (Math.abs(fx) < 1e-10) return x; const fp = evalPolyDeriv(coeffs, x); if (Math.abs(fp) < 1e-14) { x += 0.1; continue; } const nx = x - fx / fp; if (Math.abs(nx - x) < 1e-12) return nx; x = nx; } return Math.abs(evalPoly(coeffs, x)) < 1e-6 ? x : null; }
function findAllRealRoots(coeffs) {
  coeffs = trimCoeffs(coeffs);
  const deg = getDegree(coeffs);
  if (deg === 0) return [];
  if (deg === 1) return [-coeffs[0] / coeffs[1]];
  if (deg === 2) { const a = coeffs[2]; const b = coeffs[1]; const c = coeffs[0]; const d = b * b - 4 * a * c; if (d < -1e-10) return []; if (Math.abs(d) < 1e-10) return [-b / (2 * a)]; const s = Math.sqrt(d); return [(-b + s) / (2 * a), (-b - s) / (2 * a)].sort((x, y) => x - y); }
  // Degree 3+: try rational roots + numeric
  const solutions = [];
  let rem = [...coeffs];
  while (Math.abs(rem[0]) < 1e-10 && rem.length > 1) { if (!solutions.includes(0)) solutions.push(0); rem = rem.slice(1); }
  if (rem.every(c => Math.abs(c - Math.round(c)) < 1e-8)) {
    let found = true;
    while (found && getDegree(rem) > 2) {
      found = false;
      const d2 = getDegree(rem); const lead = Math.abs(Math.round(rem[d2])); const con = Math.abs(Math.round(rem[0]));
      const pF = getFactorsOf(con === 0 ? 1 : con); const qF = getFactorsOf(lead);
      const cands = new Set(); cands.add(0); for (const p of pF) for (const q of qF) { cands.add(p / q); cands.add(-p / q); }
      for (const c of Array.from(cands).sort((a, b) => Math.abs(a) - Math.abs(b))) {
        if (Math.abs(evalPoly(rem, c)) < 1e-8) { solutions.push(c); found = true; const htl = [...rem].reverse(); const r2 = [htl[0]]; for (let i = 1; i < htl.length; i++) r2.push(r2[i - 1] * c + htl[i]); rem = trimCoeffs(r2.slice(0, -1).reverse()); break; }
      }
    }
  }
  if (getDegree(rem) <= 2) { solutions.push(...findAllRealRoots(rem)); }
  else { let temp = [...rem]; for (let a = 0; a < getDegree(temp); a++) { const starts = [-10, -5, -3, -2, -1, -0.5, 0, 0.5, 1, 2, 3, 5, 10]; let nr = null; for (const s of starts) { nr = newtonRoot(temp, s); if (nr !== null) break; } if (!nr) break; solutions.push(nr); const htl = [...temp].reverse(); const r2 = [htl[0]]; for (let i = 1; i < htl.length; i++) r2.push(r2[i - 1] * nr + htl[i]); temp = trimCoeffs(r2.slice(0, -1).reverse()); if (getDegree(temp) <= 2) { solutions.push(...findAllRealRoots(temp)); break; } } }
  const unique = []; for (const s of solutions.sort((a, b) => a - b)) { if (!unique.some(u => Math.abs(u - s) < 1e-8)) unique.push(s); }
  return unique;
}

function getFactorsOf(n) { if (n === 0) return [0]; n = Math.abs(n); const f = []; for (let i = 1; i <= n; i++) if (n % i === 0) f.push(i); return f; }

function polyToString(coeffs, varName) {
  const deg = getDegree(coeffs); if (deg === 0) return formatNumber(coeffs[0]);
  const parts = [];
  for (let i = deg; i >= 0; i--) { const c = coeffs[i]; if (Math.abs(c) < 1e-10) continue; let sign = c >= 0 ? '+' : '\u2212'; let absC = Math.abs(c); if (parts.length === 0) sign = c < 0 ? '\u2212' : ''; let term = ''; if (i === 0) { term = formatNumber(absC); } else if (i === 1) { term = Math.abs(absC - 1) < 1e-10 ? varName : `${formatNumber(absC)}${varName}`; } else { const sup = i === 2 ? '\u00B2' : i === 3 ? '\u00B3' : '\u2074'; term = Math.abs(absC - 1) < 1e-10 ? `${varName}${sup}` : `${formatNumber(absC)}${varName}${sup}`; } parts.push(parts.length > 0 ? ` ${sign} ${term}` : `${sign}${term}`); }
  return parts.join('') || '0';
}

function polyToAST(coeffs, varName) {
  const deg = getDegree(coeffs); if (deg === 0) return { type: 'NUMBER', value: coeffs[0] };
  const terms = [];
  for (let i = deg; i >= 0; i--) { const c = coeffs[i]; if (Math.abs(c) < 1e-10) continue; let tn; if (i === 0) { tn = { type: 'NUMBER', value: Math.abs(c) }; } else { const vn = i === 1 ? { type: 'VARIABLE', name: varName } : { type: 'POWER', base: { type: 'VARIABLE', name: varName }, exponent: { type: 'NUMBER', value: i } }; tn = Math.abs(Math.abs(c) - 1) < 1e-10 ? vn : { type: 'MULTIPLY', left: { type: 'NUMBER', value: Math.abs(c) }, right: vn }; } if (c < 0) tn = { type: 'NEGATE', operand: tn }; terms.push({ node: tn, coeff: c }); }
  if (terms.length === 0) return { type: 'NUMBER', value: 0 };
  if (terms.length === 1) return terms[0].node;
  let result = terms[0].node;
  for (let i = 1; i < terms.length; i++) { if (terms[i].coeff < 0) { const inner = terms[i].node.type === 'NEGATE' ? terms[i].node.operand : terms[i].node; result = { type: 'SUBTRACT', left: result, right: inner }; } else { result = { type: 'ADD', left: result, right: terms[i].node }; } }
  return result;
}

/* =====================================================
   AST TO MATH DISPLAY
   ===================================================== */

function astToMathDisplay(node, key = 'root', darkMode = false) {
  if (!node) return null;
  const s = getMathStyles(darkMode);
  const wrap = (n, k) => { if (n.type === 'ADD' || n.type === 'SUBTRACT') return <span key={k}>({astToMathDisplay(n, k, darkMode)})</span>; return astToMathDisplay(n, k, darkMode); };
  switch (node.type) {
    case 'NUMBER': return <span key={key} style={s.number}>{formatNumber(node.value)}</span>;
    case 'VARIABLE': return <span key={key} style={s.variable}>{node.name}</span>;
    case 'NEGATE': return <span key={key}>{'\u2212'}{astToMathDisplay(node.operand, `${key}-neg`, darkMode)}</span>;
    case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> + </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
    case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> {'\u2212'} </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
    case 'MULTIPLY': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> {'\u00B7'} </span>{wrap(node.right, `${key}-r`)}</span>;
    case 'DIVIDE': return (<span key={key} style={s.fraction}><span style={s.fracNum}>{astToMathDisplay(node.left, `${key}-num`, darkMode)}</span><span style={s.fracDen}>{astToMathDisplay(node.right, `${key}-den`, darkMode)}</span></span>);
    case 'POWER': return <span key={key} style={s.power}>{wrap(node.base, `${key}-base`)}<sup style={s.sup}>{astToMathDisplay(node.exponent, `${key}-exp`, darkMode)}</sup></span>;
    case 'EQUATION': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.equals}> = </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
    case 'INEQUALITY': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.equals}> {node.operator} </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
    default: return null;
  }
}

const getMathStyles = (darkMode) => ({
  number: { color: darkMode ? '#e2e8f0' : '#1e3a5f' },
  variable: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '500' },
  op: { color: darkMode ? '#94a3b8' : '#64748b', margin: '0 2px' },
  equals: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
  power: { display: 'inline' },
  sup: { fontSize: '0.7em', color: darkMode ? '#60a5fa' : '#3b82f6', marginLeft: '1px', verticalAlign: 'super', position: 'relative', top: '-0.4em' },
  fraction: { display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', margin: '0 4px', position: 'relative', top: '-2px' },
  fracNum: { borderBottom: `1.5px solid ${darkMode ? '#94a3b8' : '#64748b'}`, paddingBottom: '2px', lineHeight: '1.2' },
  fracDen: { paddingTop: '2px', lineHeight: '1.2' },
});

/* =====================================================
   SOLVER
   ===================================================== */

function solveRationalInequality(ast) {
  const steps = [];

  if (ast.type !== 'INEQUALITY') throw new Error('Input must be an inequality (use <, >, \u2264, or \u2265)');

  const { left, right, operator } = ast;
  const varName = getVariable(left) !== 'x' ? getVariable(left) : getVariable(right);

  const hasDenVar = (node) => { if (!node) return false; if (node.type === 'DIVIDE' && containsVariable(node.right)) return true; return hasDenVar(node.left) || hasDenVar(node.right) || hasDenVar(node.operand); };
  if (!hasDenVar(left) && !hasDenVar(right)) throw new Error('No variable found in a denominator. This is not a rational inequality.');

  steps.push({ rule: 'Original Inequality', description: 'Identify the rational inequality.', before: ast, after: null });

  // Move everything to one side: LHS - RHS ⋈ 0
  // Extract fractions from both sides
  const leftFracs = extractFractions(left, varName, 1);
  const rightFracs = extractFractions(right, varName, 1);

  if (leftFracs.length === 0 || rightFracs.length === 0) throw new Error('Could not decompose the inequality into rational terms.');

  // Combine: LHS - RHS as single fraction
  const allFracs = [...leftFracs, ...rightFracs.map(f => ({ num: scaleCoeffs(f.num, -1), den: f.den }))];

  // Find unique denominators
  const uniqueDens = getUniqueDenominators(allFracs);

  // Find excluded values (denominator zeros)
  const excluded = [];
  for (const den of uniqueDens) {
    const roots = findAllRealRoots(den);
    for (const r of roots) { if (!excluded.some(e => Math.abs(e - r) < 1e-8)) excluded.push(r); }
  }
  excluded.sort((a, b) => a - b);

  if (excluded.length > 0) {
    steps.push({ rule: 'Excluded Values', description: `${varName} cannot equal ${excluded.map(e => formatNumber(e)).join(', ')} (denominator would be zero).`, before: null, after: null });
  }

  // Build combined numerator and denominator
  // Combined = sum of (num_i * product of all dens except den_i) / LCD
  const lcd = uniqueDens.length > 0 ? uniqueDens.reduce((a, b) => multiplyCoeffs(a, b)) : [1];

  let combinedNum = [0];
  for (const frac of allFracs) {
    const den = trimCoeffs(frac.den);
    let cofactor;
    if (den.length === 1 && Math.abs(den[0] - 1) < 1e-10) {
      cofactor = lcd;
    } else {
      cofactor = polyDivideExact(lcd, den);
      if (!cofactor) cofactor = lcd; // fallback
    }
    combinedNum = addCoeffs(combinedNum, multiplyCoeffs(frac.num, cofactor));
  }
  combinedNum = trimCoeffs(combinedNum);

  steps.push({
    rule: 'Combine into Single Fraction',
    description: `Rewrite as a single fraction ${operator} 0.`,
    before: null,
    after: null
  });

  const numStr = polyToString(combinedNum, varName);
  const denStr = polyToString(lcd, varName);

  steps.push({
    rule: 'Combined Form',
    description: `(${numStr}) / (${denStr}) ${operator} 0`,
    before: null,
    after: null
  });

  // Find critical points: zeros of numerator AND denominator
  const numRoots = findAllRealRoots(combinedNum);
  const denRoots = [...excluded];
  const allCritical = [];
  for (const r of numRoots) { if (!allCritical.some(c => Math.abs(c.val - r) < 1e-8)) allCritical.push({ val: r, type: 'num' }); }
  for (const r of denRoots) {
    const existing = allCritical.find(c => Math.abs(c.val - r) < 1e-8);
    if (existing) { existing.type = 'both'; }
    else { allCritical.push({ val: r, type: 'den' }); }
  }
  allCritical.sort((a, b) => a.val - b.val);

  if (allCritical.length === 0) {
    // No critical points: expression is always positive or always negative
    const testVal = evalPoly(combinedNum, 0) / evalPoly(lcd, 0);
    if (isNaN(testVal) || !isFinite(testVal)) {
      return { steps, solution: { type: 'none', variable: varName }, graphData: null };
    }
    const satisfies = checkOperator(testVal, operator);
    if (satisfies) {
      steps.push({ rule: 'Always True', description: 'The expression is always the same sign. The inequality holds for all real numbers.', before: null, after: null });
      return { steps, solution: { type: 'all', variable: varName }, graphData: null };
    } else {
      steps.push({ rule: 'Never True', description: 'The expression is always the wrong sign. No solution.', before: null, after: null });
      return { steps, solution: { type: 'none', variable: varName }, graphData: null };
    }
  }

  steps.push({
    rule: 'Find Critical Points',
    description: `Numerator zeros: ${numRoots.length > 0 ? numRoots.map(r => formatNumber(r)).join(', ') : 'none'}. Denominator zeros: ${denRoots.length > 0 ? denRoots.map(r => formatNumber(r)).join(', ') : 'none'}.`,
    before: null,
    after: null
  });

  // Build sign chart
  // Test points in each interval
  const intervals = [];
  const critVals = allCritical.map(c => c.val);

  // Interval: (-∞, first)
  const testPoints = [];
  testPoints.push(critVals[0] - 1);
  for (let i = 0; i < critVals.length - 1; i++) {
    testPoints.push((critVals[i] + critVals[i + 1]) / 2);
  }
  testPoints.push(critVals[critVals.length - 1] + 1);

  const signs = [];
  for (const tp of testPoints) {
    const numVal = evalPoly(combinedNum, tp);
    const denVal = evalPoly(lcd, tp);
    if (Math.abs(denVal) < 1e-10) { signs.push('undef'); continue; }
    const ratio = numVal / denVal;
    signs.push(ratio > 1e-10 ? '+' : ratio < -1e-10 ? '\u2212' : '0');
  }

  // Build sign chart description
  let chartDesc = 'Sign chart: ';
  const chartParts = [];
  for (let i = 0; i < testPoints.length; i++) {
    if (i === 0) chartParts.push(`(\u2212\u221E, ${formatNumber(critVals[0])}): ${signs[i]}`);
    else if (i === testPoints.length - 1) chartParts.push(`(${formatNumber(critVals[critVals.length - 1])}, \u221E): ${signs[i]}`);
    else chartParts.push(`(${formatNumber(critVals[i - 1])}, ${formatNumber(critVals[i])}): ${signs[i]}`);
  }
  chartDesc += chartParts.join(', ');

  steps.push({ rule: 'Sign Chart', description: chartDesc, before: null, after: null });

  // Determine which intervals satisfy the inequality
  const wantPositive = !isLessThan(operator); // > or ≥ means we want positive
  const wantZero = !isStrict(operator); // ≤ or ≥ means zero is ok
  const targetSign = wantPositive ? '+' : '\u2212';

  const solutionIntervals = [];

  for (let i = 0; i < testPoints.length; i++) {
    const satisfies = signs[i] === targetSign || (wantZero && signs[i] === '0');
    if (!satisfies) continue;

    let lo, hi, loInc, hiInc;

    if (i === 0) {
      lo = null; // -∞
      hi = critVals[0];
      loInc = false;
      const cp = allCritical[0];
      hiInc = wantZero && cp.type === 'num';
    } else if (i === testPoints.length - 1) {
      lo = critVals[critVals.length - 1];
      hi = null; // +∞
      const cp = allCritical[allCritical.length - 1];
      loInc = wantZero && cp.type === 'num';
      hiInc = false;
    } else {
      lo = critVals[i - 1];
      hi = critVals[i];
      const cpLo = allCritical[i - 1];
      const cpHi = allCritical[i];
      loInc = wantZero && cpLo.type === 'num';
      hiInc = wantZero && cpHi.type === 'num';
    }

    solutionIntervals.push({ lo, hi, loInc, hiInc });
  }

  // Also check critical points themselves for ≤ or ≥
  if (wantZero) {
    for (const cp of allCritical) {
      if (cp.type === 'num') {
        // This point makes numerator zero (and denominator nonzero)
        // Check it's not already covered
        const alreadyCovered = solutionIntervals.some(iv => {
          if (iv.lo !== null && Math.abs(iv.lo - cp.val) < 1e-8 && iv.loInc) return true;
          if (iv.hi !== null && Math.abs(iv.hi - cp.val) < 1e-8 && iv.hiInc) return true;
          if ((iv.lo === null || cp.val > iv.lo) && (iv.hi === null || cp.val < iv.hi)) return true;
          return false;
        });
        if (!alreadyCovered) {
          solutionIntervals.push({ lo: cp.val, hi: cp.val, loInc: true, hiInc: true });
        }
      }
    }
  }

  // Sort and merge intervals
  solutionIntervals.sort((a, b) => (a.lo === null ? -Infinity : a.lo) - (b.lo === null ? -Infinity : b.lo));

  if (solutionIntervals.length === 0) {
    steps.push({ rule: 'No Solution', description: 'No interval satisfies the inequality.', before: null, after: null });
    return { steps, solution: { type: 'none', variable: varName }, graphData: null };
  }

  // Build interval notation
  const intervalStrs = solutionIntervals.map(iv => {
    const lBr = iv.loInc ? '[' : '(';
    const rBr = iv.hiInc ? ']' : ')';
    const lVal = iv.lo === null ? '\u2212\u221E' : formatNumber(iv.lo);
    const rVal = iv.hi === null ? '\u221E' : formatNumber(iv.hi);
    if (iv.lo !== null && iv.hi !== null && Math.abs(iv.lo - iv.hi) < 1e-8) {
      return `{${lVal}}`;
    }
    return `${lBr}${lVal}, ${rVal}${rBr}`;
  });

  const intervalNotation = intervalStrs.join(' \u222A ');

  steps.push({
    rule: 'Solution',
    description: intervalNotation,
    before: null,
    after: null
  });

  return {
    steps,
    solution: {
      type: 'intervals',
      variable: varName,
      intervals: solutionIntervals,
      intervalNotation,
      exact: allCritical.every(c => Number.isInteger(c.val) || Math.abs(c.val * 10 - Math.round(c.val * 10)) < 1e-8)
    },
    graphData: null
  };
}

function checkOperator(value, op) {
  if (op === '<') return value < -1e-10;
  if (op === '>') return value > 1e-10;
  if (op === '\u2264') return value < 1e-10;
  if (op === '\u2265') return value > -1e-10;
  return false;
}

function polyDivideExact(dividend, divisor) {
  let rem = [...dividend];
  const divDeg = getDegree(divisor); const divLead = divisor[divDeg];
  const quotient = new Array(rem.length).fill(0);
  for (let i = rem.length - 1; i >= divDeg; i--) { if (Math.abs(rem[i]) < 1e-10) continue; const f = rem[i] / divLead; quotient[i - divDeg] = f; for (let j = 0; j <= divDeg; j++) rem[i - divDeg + j] -= f * divisor[j]; }
  if (!rem.every(r => Math.abs(r) < 1e-6)) return null;
  return trimCoeffs(quotient);
}

/* =====================================================
   CURSOR STYLES
   ===================================================== */

const CURSOR_CSS = `
  @keyframes rn-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  .rn-caret { display: inline-block; width: 2px; height: 1.2em; background: #fbbf24; animation: rn-blink 1s step-end infinite; vertical-align: text-bottom; margin: 0 -1px; border-radius: 1px; }
  .rn-display:focus { outline: none; }
  .rn-display:focus .rn-caret { animation: rn-blink 1s step-end infinite; }
  .rn-display:not(:focus) .rn-caret { opacity: 0.4; animation: none; }
  .rn-char { cursor: text; position: relative; }
  .rn-char:hover { background: rgba(255,255,255,0.08); border-radius: 2px; }
  .rn-sup-group { display: inline; cursor: text; }
  .rn-form-card, .rn-form-card:visited, .rn-form-card:active, .rn-form-card:focus, .rn-form-card:focus-visible, .rn-form-card:focus-within { outline: none !important; box-shadow: none; border-color: var(--rn-border-color) !important; }
`;

/* =====================================================
   ENGINE COMPONENT
   ===================================================== */

export const RationalInequalitySolverEngine = forwardRef(({
  compact = false, style = {}, darkMode = false, onResultChange = null, onClear = null
}, ref) => {
  const [expression, setExpression] = useState([]);
  const [cursorPos, setCursorPos] = useState(0);
  const [undoStack, setUndoStack] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [focused, setFocused] = useState(false);
  const displayRef = useRef(null);

  const variables = ['x', 'y', 'n'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const operators = ['\u00D7', '\u00F7', '+', '-'];
  const ineqOps = ['<', '>', '\u2264', '\u2265'];

  const pushUndo = useCallback((expr, pos) => { setUndoStack(stack => [...stack.slice(-50), { expr, pos }]); }, []);
  const undo = useCallback(() => { if (undoStack.length === 0) return; const prev = undoStack[undoStack.length - 1]; setUndoStack(stack => stack.slice(0, -1)); setExpression(prev.expr); setCursorPos(prev.pos); setResult(null); setError(null); }, [undoStack]);

  useImperativeHandle(ref, () => ({
    loadEquation: (eqString) => { pushUndo(expression, cursorPos); const chars = eqString.split(''); setExpression(chars); setCursorPos(chars.length); setResult(null); setError(null); if (onResultChange) onResultChange(null); },
    clear: () => { pushUndo(expression, cursorPos); setExpression([]); setCursorPos(0); setResult(null); setError(null); if (onResultChange) onResultChange(null); },
    getExpression: () => expression.join(''),
    getResult: () => result
  }));

  const insertAt = useCallback((item) => {
    pushUndo(expression, cursorPos);
    if (typeof item === 'string' && item.length > 1) { const chars = item.split(''); setExpression(prev => { const next = [...prev]; next.splice(cursorPos, 0, ...chars); return next; }); setCursorPos(prev => prev + chars.length); }
    else { setExpression(prev => { const next = [...prev]; next.splice(cursorPos, 0, item); return next; }); setCursorPos(prev => prev + 1); }
    setResult(null); setError(null);
  }, [cursorPos, expression, pushUndo]);

  const deleteAt = useCallback((pos) => { if (pos < 0 || pos >= expression.length) return; pushUndo(expression, cursorPos); setExpression(prev => { const next = [...prev]; next.splice(pos, 1); return next; }); setCursorPos(pos); setResult(null); setError(null); }, [expression, cursorPos, pushUndo]);
  const clearAll = useCallback(() => { if (expression.length === 0) return; pushUndo(expression, cursorPos); setExpression([]); setCursorPos(0); setResult(null); setError(null); if (onClear) onClear(); }, [expression, cursorPos, pushUndo, onClear]);

  const solve = useCallback(() => {
    try { const exprString = expression.join(''); const tokens = tokenize(exprString); const ast = parse(tokens); const solveResult = solveRationalInequality(ast); setResult(solveResult); setError(null); if (onResultChange) onResultChange(solveResult); }
    catch (e) { setError(e.message); setResult(null); if (onResultChange) onResultChange(null); }
  }, [expression, onResultChange]);

  const TYPEABLE = new Set('0123456789.xynXYN+-=*/()<>\u2264\u2265\u00D7\u00F7^\u00B2\u00B3\u2074');
  const KEY_MAP = { '*': '\u00D7', '/': '\u00F7' };

  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey || e.metaKey) { if (e.key === 'z' || e.key === 'Z') { e.preventDefault(); undo(); } return; }
    if (e.altKey) return;
    switch (e.key) {
      case 'ArrowLeft': e.preventDefault(); setCursorPos(prev => Math.max(0, prev - 1)); return;
      case 'ArrowRight': e.preventDefault(); setCursorPos(prev => Math.min(expression.length, prev + 1)); return;
      case 'Home': e.preventDefault(); setCursorPos(0); return;
      case 'End': e.preventDefault(); setCursorPos(expression.length); return;
      case 'Backspace': e.preventDefault(); if (cursorPos > 0) deleteAt(cursorPos - 1); return;
      case 'Delete': e.preventDefault(); if (cursorPos < expression.length) deleteAt(cursorPos); return;
      case 'Enter': e.preventDefault(); if (expression.length > 0) solve(); return;
      default: break;
    }
    const ch = KEY_MAP[e.key] || e.key;
    if (ch.length === 1 && TYPEABLE.has(ch)) { e.preventDefault(); insertAt(/[A-Z]/.test(ch) ? ch.toLowerCase() : ch); }
  }, [expression.length, cursorPos, deleteAt, insertAt, solve, undo]);

  const handleDisplayClick = useCallback((e) => {
    if (displayRef.current) displayRef.current.focus();
    const charEl = e.target.closest('[data-idx]');
    if (charEl) { const idx = parseInt(charEl.getAttribute('data-idx'), 10); const rect = charEl.getBoundingClientRect(); setCursorPos(e.clientX - rect.left < rect.width / 2 ? idx : idx + 1); }
    else { setCursorPos(expression.length); }
  }, [expression.length]);

  const buildDisplayElements = () => {
    const expr = expression;
    if (expr.length === 0) { if (focused) return <span className="rn-caret" />; return <span style={getEngineStyles(darkMode).placeholder}>Enter inequality...</span>; }
    const elements = []; const eStyles = getEngineStyles(darkMode);
    const renderCaret = (pos) => (cursorPos === pos && focused) ? <span key={`caret-${pos}`} className="rn-caret" /> : null;
    const supGroups = new Set();
    for (let i = 0; i < expr.length; i++) { if (expr[i] === '^' && i + 1 < expr.length) { supGroups.add(i); supGroups.add(i + 1); } }
    const charStyle = (ch, idx) => {
      if (ch === '\u00D7' || ch === '+' || ch === '-') return eStyles.displayOp;
      if (ch === '\u00F7' || ch === '/') return eStyles.displayDiv;
      if (ch === '=' || ch === '<' || ch === '>' || ch === '\u2264' || ch === '\u2265') return eStyles.displayEquals;
      if (ch === '\u00B2' || ch === '\u00B3' || ch === '\u2074') return eStyles.displaySup;
      if (supGroups.has(idx)) return eStyles.displaySup;
      return undefined;
    };
    const displayChar = (ch) => {
      if (ch === '\u00D7') return ' \u00B7 '; if (ch === '\u00F7' || ch === '/') return ' / ';
      if (ch === '+') return ' + '; if (ch === '-') return ' \u2212 ';
      if (ch === '<') return ' < '; if (ch === '>') return ' > ';
      if (ch === '\u2264') return ' \u2264 '; if (ch === '\u2265') return ' \u2265 ';
      return ch;
    };
    let i = 0;
    while (i < expr.length) {
      elements.push(renderCaret(i));
      if (expr[i] === '^' && i + 1 < expr.length) { elements.push(<span key={`sup-${i}`} className="rn-sup-group"><span className="rn-char" data-idx={i} style={eStyles.displaySup}>{'^'}</span><sup style={eStyles.displaySupText}>{renderCaret(i + 1)}<span className="rn-char" data-idx={i + 1} style={eStyles.displaySupText}>{expr[i + 1]}</span></sup></span>); i += 2; continue; }
      const isSup = expr[i] === '\u00B2' || expr[i] === '\u00B3' || expr[i] === '\u2074';
      if (isSup) { elements.push(<sup key={`ch-${i}`} className="rn-char" data-idx={i} style={eStyles.displaySupText}>{expr[i]}</sup>); }
      else { elements.push(<span key={`ch-${i}`} className="rn-char" data-idx={i} style={charStyle(expr[i], i)}>{displayChar(expr[i])}</span>); }
      i++;
    }
    elements.push(renderCaret(expression.length));
    return elements;
  };

  const p = compact ? 0.85 : 1;
  const styles = getEngineStyles(darkMode);

  return (
    <div style={{ ...styles.container, ...style }}>
      <style>{CURSOR_CSS}</style>
      <div ref={displayRef} className="rn-display" tabIndex={0} style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px`, cursor: 'text' }} onClick={handleDisplayClick} onKeyDown={handleKeyDown} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>{buildDisplayElements()}</div>
      {error && <div style={styles.error}>{error}</div>}
      <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
        <div style={styles.row}><span style={styles.label}>Var</span><div style={styles.btnGroup}>{variables.map((v) => (<button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => insertAt(v)}>{v}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}>Num</span><div style={styles.btnGroup}>{numbers.map((n) => (<button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => insertAt(n)}>{n}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}>Op</span><div style={styles.btnGroup}>{operators.map((op) => (<button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>{op}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}>Ineq</span><div style={styles.btnGroup}>{ineqOps.map((op) => (<button key={op} style={{ ...styles.btn, ...styles.btnOp, fontWeight: '700' }} onClick={() => insertAt(op)}>{op}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}></span><div style={styles.btnGroup}>
          <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('x\u00B2')}>x{'\u00B2'}</button>
          <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('^')}>^</button>
          <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt('(')}>{'('}</button>
          <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt(')')}>{')'}</button>
        </div></div>
        <div style={styles.actions}>
          <button style={{ ...styles.btnAction, ...styles.btnClear }} onClick={clearAll}>Clear</button>
          <button style={{ ...styles.btnAction, ...styles.btnUndo, ...(undoStack.length === 0 ? styles.btnUndoDisabled : {}) }} onClick={undo} disabled={undoStack.length === 0} title="Undo (Ctrl+Z)">{'\u21B6'}</button>
          <button style={{ ...styles.btnAction, ...styles.btnBack }} onClick={() => { if (cursorPos > 0) deleteAt(cursorPos - 1); }}>{'\u232B'}</button>
          <button style={{ ...styles.btnAction, ...styles.btnSolve, ...(expression.length === 0 ? styles.btnDisabled : {}) }} onClick={solve} disabled={expression.length === 0}>Solve</button>
        </div>
      </div>
      {result && result.solution && (<div style={styles.solution}>{renderEngineSolution(result.solution, styles)}</div>)}
    </div>
  );
});

function renderEngineSolution(sol, s) {
  if (sol.type === 'none') return <span>No solution</span>;
  if (sol.type === 'all') return <span>All real numbers (except excluded)</span>;
  if (sol.type === 'intervals' && sol.intervalNotation) return <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: '0.95em' }}>{sol.intervalNotation}</span>;
  return null;
}

RationalInequalitySolverEngine.displayName = 'RationalInequalitySolverEngine';

const getEngineStyles = (darkMode) => ({
  container: { background: darkMode ? '#1e293b' : '#fff', borderRadius: '16px', padding: '20px', boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)' },
  display: { background: darkMode ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '12px', padding: '18px 22px', minHeight: '54px', marginBottom: '16px', display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', fontSize: '1.4rem', color: '#fff', fontWeight: '500' },
  placeholder: { color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontSize: '0.95rem' },
  displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
  displayDiv: { color: '#fbbf24', fontWeight: '600', margin: '0 2px' },
  displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
  displaySup: { color: '#bfdbfe', fontSize: '0.85em' },
  displaySupText: { fontSize: '0.7em', color: '#bfdbfe', verticalAlign: 'super', position: 'relative', top: '-0.4em' },
  error: { background: darkMode ? '#451a1a' : '#fef2f2', border: darkMode ? '1px solid #7f1d1d' : '1px solid #fecaca', borderRadius: '8px', padding: '10px 14px', marginBottom: '12px', color: darkMode ? '#fca5a5' : '#dc2626', fontSize: '0.85rem' },
  builder: { display: 'flex', flexDirection: 'column', gap: '10px' },
  row: { display: 'flex', alignItems: 'center', gap: '10px' },
  label: { fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: darkMode ? '#64748b' : '#94a3b8', width: '28px', flexShrink: 0, fontWeight: '600' },
  btnGroup: { display: 'flex', flexWrap: 'wrap', gap: '6px' },
  btn: { fontSize: '0.95rem', padding: '8px 12px', border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0', background: darkMode ? '#334155' : '#f8fafc', color: darkMode ? '#e2e8f0' : '#334155', cursor: 'pointer', borderRadius: '8px', minWidth: '36px', fontFamily: 'inherit', fontWeight: '500', transition: 'all 0.15s' },
  btnVar: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600' },
  btnNum: { color: darkMode ? '#f1f5f9' : '#1e293b' },
  btnOp: { color: darkMode ? '#cbd5e1' : '#64748b', fontWeight: '600' },
  btnSpecial: { color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600' },
  btnBracket: { fontSize: '1.1rem', color: darkMode ? '#94a3b8' : '#64748b' },
  actions: { display: 'flex', gap: '8px', marginTop: '6px', paddingTop: '14px', borderTop: darkMode ? '1px solid #334155' : '1px solid #e2e8f0' },
  btnAction: { fontSize: '0.85rem', fontWeight: '600', padding: '12px 18px', border: 'none', cursor: 'pointer', borderRadius: '8px', fontFamily: 'inherit', transition: 'all 0.15s' },
  btnClear: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
  btnUndo: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b', fontSize: '1.1rem', padding: '12px 14px' },
  btnUndoDisabled: { opacity: 0.4, cursor: 'not-allowed' },
  btnBack: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
  btnSolve: { background: darkMode ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', color: '#fff', marginLeft: 'auto', padding: '12px 24px', boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)' },
  btnDisabled: { background: darkMode ? '#475569' : '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
  solution: { marginTop: '16px', padding: '14px 18px', background: darkMode ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '10px', textAlign: 'center', fontSize: '1.3rem', fontWeight: '600', color: '#fff' },
  solVar: { fontStyle: 'italic' },
  solEq: { opacity: 0.8, margin: '0 6px' },
  solNum: { color: '#fbbf24' },
});

/* =====================================================
   INEQUALITY FORM GENERATORS
   ===================================================== */

const inequalityForms = [
  { id: 'simple-recip', name: 'Simple Reciprocal', formula: '1/x > a',
    generate: () => { const a = Math.floor(Math.random() * 5) + 1; const ops = ['<', '>', '\u2264', '\u2265']; return `1/x${ops[Math.floor(Math.random() * 4)]}${a}`; } },
  { id: 'linear-denom', name: 'Linear Denominator', formula: 'a/(x + b) < c',
    generate: (nice) => { const a = Math.floor(Math.random() * 8) + 1; const b = Math.floor(Math.random() * 10) - 5; const c = Math.floor(Math.random() * 5) + 1; const ops = ['<', '>']; return `${a}/(x${b >= 0 ? '+' + b : b})${ops[Math.floor(Math.random() * 2)]}${c}`; } },
  { id: 'fraction-ineq', name: 'Fraction \u2264 0', formula: '(x + a)/(x + b) \u2264 0',
    generate: () => { const a = Math.floor(Math.random() * 10) - 5; const b = Math.floor(Math.random() * 10) - 5; const ops = ['\u2264', '\u2265']; return `(x${a >= 0 ? '+' + a : a})/(x${b >= 0 ? '+' + b : b})${ops[Math.floor(Math.random() * 2)]}0`; } },
  { id: 'quadratic-num', name: 'Quadratic Numerator', formula: '(x\u00B2+a)/(x+b) > 0',
    generate: () => { const r1 = Math.floor(Math.random() * 7) - 3; const r2 = Math.floor(Math.random() * 7) - 3; const bv = -(r1 + r2); const cv = r1 * r2; const d = Math.floor(Math.random() * 8) - 4; return `(x\u00B2${bv >= 0 ? '+' + bv : bv}\u00D7x${cv >= 0 ? '+' + cv : cv})/(x${d >= 0 ? '+' + d : d})>0`; } },
  { id: 'sum-fracs', name: 'Sum of Fractions', formula: '1/x + 1/(x+a) < b',
    generate: () => { const a = Math.floor(Math.random() * 5) + 1; const b = Math.floor(Math.random() * 3) + 1; return `1/x+1/(x+${a})<${b}`; } },
  { id: 'proportion', name: 'Proportion Inequality', formula: 'a/(x+b) > c/(x+d)',
    generate: () => { const a = Math.floor(Math.random() * 6) + 1; const b = Math.floor(Math.random() * 8) - 4; const c = Math.floor(Math.random() * 6) + 1; const d = Math.floor(Math.random() * 8) - 4; return `${a}/(x${b >= 0 ? '+' + b : b})>${c}/(x${d >= 0 ? '+' + d : d})`; } },
  { id: 'always-pos', name: 'Always Positive', formula: '1/x\u00B2 > 0',
    generate: () => { const a = Math.floor(Math.random() * 5) + 1; return `${a}/x\u00B2>0`; } },
  { id: 'complex', name: 'Complex Rational', formula: '(ax+b)/((x+c)(x+d)) \u2265 0',
    generate: () => { const a = [1, 2][Math.floor(Math.random() * 2)]; const b = Math.floor(Math.random() * 6) - 3; const c = Math.floor(Math.random() * 6) - 3; const d = Math.floor(Math.random() * 6) - 3; return `(${a === 1 ? '' : a + '\u00D7'}x${b >= 0 ? '+' + b : b})/((x${c >= 0 ? '+' + c : c})\u00D7(x${d >= 0 ? '+' + d : d}))\u22650`; } },
];

/* =====================================================
   WRAPPER COMPONENT (accepts tabs prop)
   ===================================================== */

const RationalInequalitySolver = ({ tabs = [] }) => {
  const engineRef = React.useRef(null);
  const [solveResult, setSolveResult] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [examplesOpen, setExamplesOpen] = useState(false);

  const handleFormClick = (form) => { const isNice = Math.random() < 0.8; const equation = form.generate(isNice); setSelectedForm(form.id); setSolveResult(null); if (engineRef.current) engineRef.current.loadEquation(equation); };
  const handleResultChange = (result) => { setSolveResult(result); };
  const handleClear = () => { setSelectedForm(null); setSolveResult(null); };

  const wStyles = getWrapperStyles(darkMode);

  const renderStepContent = (step, index) => {
    if (!step.before && !step.after) return null;
    return (<div>{step.before && <div style={wStyles.stepMath}>{astToMathDisplay(step.before, `before-${index}`, darkMode)}</div>}{step.after && <div style={wStyles.stepTransform}><span style={wStyles.arrow}>{'\u27F9'}</span><div style={wStyles.stepMath}>{astToMathDisplay(step.after, `after-${index}`, darkMode)}</div></div>}</div>);
  };

  const renderFinalAnswer = () => {
    if (!solveResult || !solveResult.solution) return null;
    const sol = solveResult.solution;
    if (sol.type === 'none') return (<div style={wStyles.finalAnswer}><div style={wStyles.answerLabel}>Answer</div><div style={wStyles.answerValue}>No solution</div><div style={wStyles.answerNote}>{'\u2717'} No values satisfy this inequality</div></div>);
    if (sol.type === 'all') return (<div style={wStyles.finalAnswer}><div style={wStyles.answerLabel}>Answer</div><div style={wStyles.answerValue}>All real numbers (except excluded)</div><div style={wStyles.answerNote}>{'\u2713'} Inequality holds everywhere</div></div>);
    if (sol.type === 'intervals') return (<div style={wStyles.finalAnswer}><div style={wStyles.answerLabel}>Answer</div><div style={wStyles.answerInterval}>{sol.intervalNotation}</div><div style={wStyles.answerNote}>{sol.exact ? '\u2713 Exact bounds' : '\u2248 Approximate bounds'}</div></div>);
    return null;
  };

  return (
    <div style={wStyles.container}>
      <style>{THEME_CSS}</style>
      <div style={wStyles.inner}>
        <header style={wStyles.header}>
          <button style={wStyles.themeToggle} onClick={() => setDarkMode(!darkMode)}>{darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}</button>
          <div style={wStyles.iconWrap}><span style={wStyles.icon}>{'\u00B9'}/{'\u2093'}</span></div>
          <h1 style={wStyles.title}>Rational Inequality Solver</h1>
          <p style={wStyles.subtitle}>Solve rational inequalities with sign charts, step by step</p>
        </header>
        <div style={wStyles.main}>
          <div style={wStyles.leftCol}>
            <RationalInequalitySolverEngine ref={engineRef} onResultChange={handleResultChange} onClear={handleClear} darkMode={darkMode} compact={true} />
            <div style={wStyles.formsSection}>
              <button style={wStyles.accordionHeader} onClick={() => setExamplesOpen(!examplesOpen)}>
                <span style={wStyles.sectionTitle}>Try an Example</span>
                <span style={wStyles.chevron}>{examplesOpen ? '\u25B2' : '\u25BC'}</span>
              </button>
              {examplesOpen && (
                <div style={wStyles.accordionContent}>
                  <p style={wStyles.formsHint}>Click any type to generate a random inequality. Click again for a new one!</p>
                  <div style={wStyles.formsGrid}>
                    {inequalityForms.map((form) => (
                      <button key={form.id} className="rn-form-card" style={{ ...wStyles.formCard, ...(selectedForm === form.id ? wStyles.formCardSelected : {}) }} onClick={() => handleFormClick(form)}>
                        <div style={wStyles.formName}>{form.name}</div>
                        <div style={wStyles.formFormula}>{form.formula}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div style={wStyles.rightCol}>
            <SolutionPanel
              steps={solveResult?.steps || []}
              graphData={solveResult?.graphData || null}
              darkMode={darkMode}
              placeholder="Select an inequality type or enter your own rational inequality, then click Solve to see the step-by-step solution."
              stepsTitle="Solution Steps"
              renderStepContent={renderStepContent}
              stepCardClass={() => ''}
              tabs={tabs}
            />
            {renderFinalAnswer()}
          </div>
        </div>
      </div>
    </div>
  );
};

const getWrapperStyles = (darkMode) => ({
  container: { minHeight: '100vh', background: darkMode ? '#0f172a' : 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: darkMode ? '#e2e8f0' : '#1e3a5f', padding: '30px 20px' },
  inner: { maxWidth: '1100px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '24px', position: 'relative' },
  iconWrap: { width: '50px', height: '50px', background: darkMode ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)' },
  icon: { color: '#fff', fontSize: '16px', fontWeight: '700' },
  title: { fontSize: '1.7rem', fontWeight: '700', color: darkMode ? '#e2e8f0' : '#1e3a5f', margin: '0 0 6px 0' },
  subtitle: { fontSize: '0.95rem', color: darkMode ? '#94a3b8' : '#64748b', margin: 0 },
  themeToggle: { position: 'absolute', top: '0', right: '0', width: '44px', height: '44px', borderRadius: '12px', border: 'none', background: darkMode ? '#334155' : '#fff', cursor: 'pointer', fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: darkMode ? 'none' : '0 2px 8px rgba(0,0,0,0.08)', transition: 'all 0.2s' },
  main: { display: 'flex', gap: '24px', alignItems: 'flex-start' },
  leftCol: { flex: '1 1 50%', display: 'flex', flexDirection: 'column', gap: '16px' },
  rightCol: { flex: '1 1 50%', background: darkMode ? '#1e293b' : '#fff', borderRadius: '16px', padding: '20px', boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)', minHeight: '500px' },
  formsSection: { background: darkMode ? '#1e293b' : '#fff', borderRadius: '16px', boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)', overflow: 'hidden' },
  accordionHeader: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit' },
  sectionTitle: { fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: darkMode ? '#94a3b8' : '#64748b', fontWeight: '600' },
  chevron: { fontSize: '0.75rem', color: darkMode ? '#64748b' : '#94a3b8' },
  accordionContent: { padding: '0 16px 16px' },
  formsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' },
  formsHint: { fontSize: '0.8rem', color: darkMode ? '#64748b' : '#94a3b8', margin: '0 0 10px 0', fontStyle: 'italic' },
  formCard: { '--rn-border-color': darkMode ? '#475569' : '#e2e8f0', background: darkMode ? '#334155' : '#f8fafc', border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0', borderRadius: '10px', padding: '10px 12px', cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'left', fontFamily: 'inherit' },
  formCardSelected: { '--rn-border-color': '#3b82f6', borderColor: '#3b82f6', background: darkMode ? '#1e3a5f' : '#eff6ff', boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)' },
  formName: { fontSize: '0.8rem', fontWeight: '600', color: darkMode ? '#e2e8f0' : '#1e3a5f', marginBottom: '2px' },
  formFormula: { fontSize: '0.9rem', color: darkMode ? '#60a5fa' : '#3b82f6', fontFamily: 'ui-monospace, monospace' },
  stepMath: { fontSize: '1.05rem', color: darkMode ? '#e2e8f0' : '#1e3a5f', background: darkMode ? '#334155' : '#fff', padding: '10px 14px', borderRadius: '8px', display: 'inline-block', border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0' },
  stepTransform: { display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' },
  arrow: { color: '#3b82f6', fontSize: '1.1rem' },
  finalAnswer: { background: darkMode ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '12px', padding: '18px 20px', color: '#fff', textAlign: 'center', marginTop: '16px' },
  answerLabel: { fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8, marginBottom: '6px', fontWeight: '600' },
  answerValue: { fontSize: '1.5rem', fontWeight: '700' },
  answerInterval: { fontSize: '1.15rem', fontWeight: '600', fontFamily: 'ui-monospace, monospace', marginTop: '4px' },
  answerNote: { fontSize: '0.8rem', opacity: 0.75, marginTop: '6px' },
});

export default RationalInequalitySolver;