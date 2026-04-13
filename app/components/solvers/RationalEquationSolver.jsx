import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import SolutionPanel from './SolutionPanel';
import THEME_CSS from './MathSolverThemes';

/* =====================================================
   RATIONAL EQUATION SOLVER

   Two exports:
   - RationalSolverEngine: Standalone solver component
   - RationalEquationSolver: Full educational wrapper (default)

   Features:
   - Variables in denominators
   - LCD identification and clearing fractions
   - Extraneous solution checking
   - Handles: a/x=b, a/(bx+c)=d, cross-multiplication,
     sum of fractions, proportion
   - Reduces to polynomial after clearing, solves deg 1-4
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
};

const SUPERSCRIPT_MAP = { '\u00B2': 2, '\u00B3': 3, '\u2074': 4 };

function tokenize(input) {
  const tokens = [];
  let i = 0;

  while (i < input.length) {
    const char = input[i];

    if (/\s/.test(char)) { i++; continue; }

    if (SUPERSCRIPT_MAP[char] !== undefined) {
      tokens.push({ type: TokenType.POWER });
      tokens.push({ type: TokenType.NUMBER, value: SUPERSCRIPT_MAP[char] });
      i++;
      continue;
    }

    if (/[0-9]/.test(char) || (char === '.' && /[0-9]/.test(input[i + 1]))) {
      let num = '';
      while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) { num += input[i]; i++; }
      tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) });
      continue;
    }

    if (/[a-zA-Z]/.test(char)) {
      tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
      i++;
      continue;
    }

    const charMap = {
      '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY,
      '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE,
      '^': TokenType.POWER,
      '(': TokenType.LPAREN, ')': TokenType.RPAREN,
      '+': TokenType.PLUS, '-': TokenType.MINUS,
      '=': TokenType.EQUALS,
    };

    if (charMap[char]) { tokens.push({ type: charMap[char] }); i++; continue; }
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
  const consume = (expectedType) => {
    const token = tokens[pos];
    if (expectedType && token?.type !== expectedType) throw new Error(`Expected ${expectedType} but got ${token?.type}`);
    pos++;
    return token;
  };

  const parseEquation = () => {
    const left = parseExpression();
    if (peek()?.type === TokenType.EQUALS) { consume(); return { type: 'EQUATION', left, right: parseExpression() }; }
    return left;
  };

  const parseExpression = () => parseAdditive();

  const parseAdditive = () => {
    let left = parseMultiplicative();
    while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) {
      const op = consume().type;
      left = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left, right: parseMultiplicative() };
    }
    return left;
  };

  const parseMultiplicative = () => {
    let left = parsePower();
    while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) {
      const op = consume().type;
      left = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left, right: parsePower() };
    }
    return left;
  };

  const parsePower = () => {
    let base = parseUnary();
    if (peek()?.type === TokenType.POWER) { consume(); return { type: 'POWER', base, exponent: parsePower() }; }
    return base;
  };

  const parseUnary = () => {
    if (peek()?.type === TokenType.MINUS) { consume(); return { type: 'NEGATE', operand: parseUnary() }; }
    return parsePrimary();
  };

  const parsePrimary = () => {
    const token = peek();
    if (token?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: token.value }; }
    if (token?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: token.value }; }
    if (token?.type === TokenType.LPAREN) { consume(); const expr = parseExpression(); consume(TokenType.RPAREN); return expr; }
    throw new Error(`Unexpected token: ${token?.type}`);
  };

  const ast = parseEquation();
  if (pos < tokens.length) throw new Error('Unexpected tokens at end');
  return ast;
}

/* =====================================================
   HELPERS
   ===================================================== */

function formatNumber(num) {
  if (Number.isInteger(num)) return String(num);
  return (Math.round(num * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, '');
}

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

/* ---- Polynomial coefficient helpers ---- */

function addCoeffs(a, b) { const len = Math.max(a.length, b.length); const r = new Array(len).fill(0); for (let i = 0; i < a.length; i++) r[i] += a[i]; for (let i = 0; i < b.length; i++) r[i] += b[i]; return r; }
function multiplyCoeffs(a, b) { const r = new Array(a.length + b.length - 1).fill(0); for (let i = 0; i < a.length; i++) for (let j = 0; j < b.length; j++) r[i + j] += a[i] * b[j]; return r; }
function scaleCoeffs(a, s) { return a.map(c => c * s); }
function getDegree(c) { for (let i = c.length - 1; i >= 0; i--) { if (Math.abs(c[i]) > 1e-10) return i; } return 0; }
function trimCoeffs(c) { return c.slice(0, getDegree(c) + 1); }
function evalPoly(c, x) { let v = 0; for (let i = 0; i < c.length; i++) v += c[i] * Math.pow(x, i); return v; }
function coeffsEqual(a, b) { const la = trimCoeffs(a); const lb = trimCoeffs(b); if (la.length !== lb.length) return false; return la.every((v, i) => Math.abs(v - lb[i]) < 1e-8); }

/* Convert AST node to polynomial coefficients. */
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
    case 'DIVIDE': {
      const d = evaluateConstant(node.right);
      if (d !== null && d !== 0) { const l = toCoeffs(node.left, varName); return l ? l.map(v => v / d) : null; }
      return null;
    }
    case 'POWER': {
      if (node.base.type === 'VARIABLE' && node.base.name === varName) {
        const exp = evaluateConstant(node.exponent);
        if (exp !== null && Number.isInteger(exp) && exp >= 0 && exp <= 4) { const c = new Array(exp + 1).fill(0); c[exp] = 1; return c; }
      }
      const exp = evaluateConstant(node.exponent);
      if (exp !== null && Number.isInteger(exp) && exp >= 0 && exp <= 4) {
        const base = toCoeffs(node.base, varName);
        if (base) { let r = [1]; for (let i = 0; i < exp; i++) { r = multiplyCoeffs(r, base); if (r.length > 5) return null; } return r; }
      }
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
    const numCoeffs = toCoeffs(node.left, varName);
    const denCoeffs = toCoeffs(node.right, varName);
    if (numCoeffs && denCoeffs) return [{ num: scaleCoeffs(numCoeffs, sign), den: denCoeffs }];
    if (denCoeffs) {
      const innerFracs = extractFractions(node.left, varName, sign);
      if (innerFracs.length > 0) return innerFracs.map(f => ({ num: f.num, den: multiplyCoeffs(f.den, denCoeffs) }));
    }
    return [];
  }

  if (node.type === 'MULTIPLY') {
    const lConst = evaluateConstant(node.left);
    const rConst = evaluateConstant(node.right);
    if (lConst !== null) { const rF = extractFractions(node.right, varName, sign); return rF.map(f => ({ num: scaleCoeffs(f.num, lConst), den: f.den })); }
    if (rConst !== null) { const lF = extractFractions(node.left, varName, sign); return lF.map(f => ({ num: scaleCoeffs(f.num, rConst), den: f.den })); }
  }

  const coeffs = toCoeffs(node, varName);
  if (coeffs) return [{ num: scaleCoeffs(coeffs, sign), den: [1] }];
  return [];
}

function getUniqueDenominators(fractions) {
  const unique = [];
  for (const f of fractions) {
    const den = trimCoeffs(f.den);
    if (den.length === 1 && Math.abs(den[0] - 1) < 1e-10) continue;
    if (!unique.some(u => coeffsEqual(u, den))) unique.push(den);
  }
  return unique;
}

function computeLCD(uniqueDens) {
  if (uniqueDens.length === 0) return [1];
  let lcd = uniqueDens[0];
  for (let i = 1; i < uniqueDens.length; i++) lcd = multiplyCoeffs(lcd, uniqueDens[i]);
  return lcd;
}

function findRestrictedValues(uniqueDens) {
  const restricted = [];
  for (const den of uniqueDens) {
    const deg = getDegree(den);
    if (deg === 1) { const val = -den[0] / den[1]; if (!restricted.some(r => Math.abs(r - val) < 1e-8)) restricted.push(val); }
    else if (deg === 2) {
      const a = den[2]; const b = den[1]; const c = den[0]; const disc = b * b - 4 * a * c;
      if (disc >= 0) {
        const s = Math.sqrt(disc);
        const v1 = (-b + s) / (2 * a); const v2 = (-b - s) / (2 * a);
        if (!restricted.some(r => Math.abs(r - v1) < 1e-8)) restricted.push(v1);
        if (Math.abs(v1 - v2) > 1e-8 && !restricted.some(r => Math.abs(r - v2) < 1e-8)) restricted.push(v2);
      }
    }
  }
  return restricted;
}

function polyDivide(dividend, divisor) {
  let rem = [...dividend];
  const divDeg = getDegree(divisor);
  const divLead = divisor[divDeg];
  const quotient = new Array(rem.length).fill(0);
  for (let i = rem.length - 1; i >= divDeg; i--) {
    if (Math.abs(rem[i]) < 1e-10) continue;
    const factor = rem[i] / divLead;
    quotient[i - divDeg] = factor;
    for (let j = 0; j <= divDeg; j++) rem[i - divDeg + j] -= factor * divisor[j];
  }
  if (!rem.every(r => Math.abs(r) < 1e-6)) return null;
  return trimCoeffs(quotient);
}

function clearDenominator(frac, lcd) {
  const den = trimCoeffs(frac.den);
  const cofactor = polyDivide(lcd, den);
  if (!cofactor) return multiplyCoeffs(frac.num, lcd);
  return multiplyCoeffs(frac.num, cofactor);
}

function polyToString(coeffs, varName) {
  const deg = getDegree(coeffs);
  if (deg === 0) return formatNumber(coeffs[0]);
  const parts = [];
  for (let i = deg; i >= 0; i--) {
    const c = coeffs[i]; if (Math.abs(c) < 1e-10) continue;
    let sign = c >= 0 ? '+' : '\u2212'; let absC = Math.abs(c);
    if (parts.length === 0) sign = c < 0 ? '\u2212' : '';
    let term = '';
    if (i === 0) { term = formatNumber(absC); }
    else if (i === 1) { term = Math.abs(absC - 1) < 1e-10 ? varName : `${formatNumber(absC)}${varName}`; }
    else { const sup = i === 2 ? '\u00B2' : i === 3 ? '\u00B3' : '\u2074'; term = Math.abs(absC - 1) < 1e-10 ? `${varName}${sup}` : `${formatNumber(absC)}${varName}${sup}`; }
    parts.push(parts.length > 0 ? ` ${sign} ${term}` : `${sign}${term}`);
  }
  return parts.join('') || '0';
}

function polyToAST(coeffs, varName) {
  const deg = getDegree(coeffs);
  if (deg === 0) return { type: 'NUMBER', value: coeffs[0] };
  const terms = [];
  for (let i = deg; i >= 0; i--) {
    const c = coeffs[i]; if (Math.abs(c) < 1e-10) continue;
    let termNode;
    if (i === 0) { termNode = { type: 'NUMBER', value: Math.abs(c) }; }
    else {
      const varNode = i === 1 ? { type: 'VARIABLE', name: varName } : { type: 'POWER', base: { type: 'VARIABLE', name: varName }, exponent: { type: 'NUMBER', value: i } };
      termNode = Math.abs(Math.abs(c) - 1) < 1e-10 ? varNode : { type: 'MULTIPLY', left: { type: 'NUMBER', value: Math.abs(c) }, right: varNode };
    }
    if (c < 0) termNode = { type: 'NEGATE', operand: termNode };
    terms.push({ node: termNode, coeff: c });
  }
  if (terms.length === 0) return { type: 'NUMBER', value: 0 };
  if (terms.length === 1) return terms[0].node;
  let result = terms[0].node;
  for (let i = 1; i < terms.length; i++) {
    if (terms[i].coeff < 0) { const inner = terms[i].node.type === 'NEGATE' ? terms[i].node.operand : terms[i].node; result = { type: 'SUBTRACT', left: result, right: inner }; }
    else { result = { type: 'ADD', left: result, right: terms[i].node }; }
  }
  return result;
}

/* ---- Polynomial solving (inline) ---- */

function evalPolyDeriv(c, x) { let v = 0; for (let i = 1; i < c.length; i++) v += i * c[i] * Math.pow(x, i - 1); return v; }
function newtonRoot(coeffs, sx, maxIter = 50) { let x = sx; for (let i = 0; i < maxIter; i++) { const fx = evalPoly(coeffs, x); if (Math.abs(fx) < 1e-10) return x; const fp = evalPolyDeriv(coeffs, x); if (Math.abs(fp) < 1e-14) { x += 0.1; continue; } const nx = x - fx / fp; if (Math.abs(nx - x) < 1e-12) return nx; x = nx; } return Math.abs(evalPoly(coeffs, x)) < 1e-6 ? x : null; }
function findNumericRoot(coeffs) { for (const s of [-10, -5, -3, -2, -1, -0.5, 0, 0.5, 1, 2, 3, 5, 10]) { const r = newtonRoot(coeffs, s); if (r !== null) return r; } return null; }
function syntheticDivide(coeffs, r) { const h = [...coeffs].reverse(); const res = [h[0]]; for (let i = 1; i < h.length; i++) res.push(res[i - 1] * r + h[i]); return res.slice(0, -1).reverse(); }
function hasIntegerCoeffs(c) { return c.every(v => Math.abs(v - Math.round(v)) < 1e-8); }
function getFactors(n) { if (n === 0) return [0]; n = Math.abs(n); const f = []; for (let i = 1; i <= n; i++) if (n % i === 0) f.push(i); return f; }
function getCandidateRoots(coeffs) { const d = getDegree(coeffs); const l = Math.abs(Math.round(coeffs[d])); const c = Math.abs(Math.round(coeffs[0])); if (l === 0) return []; const pF = getFactors(c === 0 ? 1 : c); const qF = getFactors(l); const s = new Set(); s.add(0); for (const p of pF) for (const q of qF) { s.add(p / q); s.add(-p / q); } return Array.from(s).sort((a, b) => Math.abs(a) - Math.abs(b)); }

function solvePolyRoots(coeffs) {
  coeffs = trimCoeffs(coeffs);
  const deg = getDegree(coeffs);
  if (deg === 0) return Math.abs(coeffs[0]) < 1e-10 ? null : [];
  if (deg === 1) return [-coeffs[0] / coeffs[1]];
  if (deg === 2) {
    const a = coeffs[2]; const b = coeffs[1]; const c = coeffs[0]; const d = b * b - 4 * a * c;
    if (d < -1e-10) return [];
    if (Math.abs(d) < 1e-10) return [-b / (2 * a)];
    const s = Math.sqrt(d); return [(-b + s) / (2 * a), (-b - s) / (2 * a)].sort((x, y) => x - y);
  }
  const solutions = [];
  let rem = [...coeffs];
  while (Math.abs(rem[0]) < 1e-10 && rem.length > 1) { if (!solutions.includes(0)) solutions.push(0); rem = rem.slice(1); }
  if (hasIntegerCoeffs(rem)) {
    let found = true;
    while (found && getDegree(rem) > 2) {
      found = false; const cands = getCandidateRoots(rem);
      for (const c of cands) { if (Math.abs(evalPoly(rem, c)) < 1e-8) { solutions.push(c); found = true; rem = trimCoeffs(syntheticDivide(rem, c)); break; } }
    }
  }
  const rd = getDegree(rem);
  if (rd <= 2) { const sub = solvePolyRoots(rem); if (sub) solutions.push(...sub); }
  else { let temp = [...rem]; for (let a = 0; a < rd && getDegree(temp) >= 1; a++) { const nr = findNumericRoot(temp); if (!nr) break; solutions.push(nr); temp = trimCoeffs(syntheticDivide(temp, nr)); if (getDegree(temp) <= 2) { const sub = solvePolyRoots(temp); if (sub) solutions.push(...sub); break; } } }
  const unique = []; for (const s of solutions.sort((a, b) => a - b)) { if (!unique.some(u => Math.abs(u - s) < 1e-8)) unique.push(s); }
  return unique;
}

/* =====================================================
   AST TO MATH DISPLAY
   ===================================================== */

function astToMathDisplay(node, key = 'root', darkMode = false) {
  if (!node) return null;
  const s = getMathStyles(darkMode);
  const wrap = (n, k) => {
    if (n.type === 'ADD' || n.type === 'SUBTRACT') return <span key={k}>({astToMathDisplay(n, k, darkMode)})</span>;
    return astToMathDisplay(n, k, darkMode);
  };
  switch (node.type) {
    case 'NUMBER': return <span key={key} style={s.number}>{formatNumber(node.value)}</span>;
    case 'VARIABLE': return <span key={key} style={s.variable}>{node.name}</span>;
    case 'NEGATE': return <span key={key}>{'\u2212'}{astToMathDisplay(node.operand, `${key}-neg`, darkMode)}</span>;
    case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> + </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
    case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> {'\u2212'} </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
    case 'MULTIPLY': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> {'\u00B7'} </span>{wrap(node.right, `${key}-r`)}</span>;
    case 'DIVIDE': return (
      <span key={key} style={s.fraction}>
        <span style={s.fracNum}>{astToMathDisplay(node.left, `${key}-num`, darkMode)}</span>
        <span style={s.fracDen}>{astToMathDisplay(node.right, `${key}-den`, darkMode)}</span>
      </span>
    );
    case 'POWER': return <span key={key} style={s.power}>{wrap(node.base, `${key}-base`)}<sup style={s.sup}>{astToMathDisplay(node.exponent, `${key}-exp`, darkMode)}</sup></span>;
    case 'EQUATION': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.equals}> = </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
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

function solveRationalEquation(ast) {
  const steps = [];

  if (ast.type !== 'EQUATION') throw new Error('Input must be an equation (use = sign)');

  const varName = getVariable(ast.left) !== 'x' ? getVariable(ast.left) : getVariable(ast.right);

  const hasDenVar = (node) => {
    if (!node) return false;
    if (node.type === 'DIVIDE' && containsVariable(node.right)) return true;
    return hasDenVar(node.left) || hasDenVar(node.right) || hasDenVar(node.operand);
  };

  if (!hasDenVar(ast.left) && !hasDenVar(ast.right)) throw new Error('No variable found in a denominator. This is not a rational equation.');

  const leftFracs = extractFractions(ast.left, varName, 1);
  const rightFracs = extractFractions(ast.right, varName, 1);

  if (leftFracs.length === 0 || rightFracs.length === 0) throw new Error('Could not decompose the equation into rational terms.');

  const allFracs = [...leftFracs, ...rightFracs.map(f => ({ num: scaleCoeffs(f.num, -1), den: f.den }))];
  const uniqueDens = getUniqueDenominators(allFracs);

  if (uniqueDens.length === 0) throw new Error('No variable denominators found.');

  const restricted = findRestrictedValues(uniqueDens);

  if (restricted.length > 0) {
    steps.push({ rule: 'Identify Restrictions', description: `The variable cannot equal ${restricted.map(r => formatNumber(r)).join(' or ')} (denominator would be zero).`, before: ast, after: null });
  }

  const lcd = computeLCD(uniqueDens);
  steps.push({ rule: 'Find LCD', description: `LCD = ${polyToString(lcd, varName)}`, before: null, after: null });

  let resultCoeffs = [0];
  for (const frac of allFracs) resultCoeffs = addCoeffs(resultCoeffs, clearDenominator(frac, lcd));
  resultCoeffs = trimCoeffs(resultCoeffs);

  steps.push({ rule: 'Multiply Both Sides by LCD', description: 'Clear all fractions by multiplying every term by the LCD.', before: null, after: { type: 'EQUATION', left: polyToAST(resultCoeffs, varName), right: { type: 'NUMBER', value: 0 } } });

  const degree = getDegree(resultCoeffs);

  if (degree === 0) {
    if (Math.abs(resultCoeffs[0]) < 1e-10) { steps.push({ rule: 'Identity', description: 'Equation is always true (for non-restricted values).', before: null, after: null }); return { steps, solution: { variable: varName, value: null, identity: true }, graphData: null }; }
    steps.push({ rule: 'Contradiction', description: 'No solution.', before: null, after: null });
    return { steps, solution: { variable: varName, value: null, noSolution: true }, graphData: null };
  }

  if (degree > 4) throw new Error('Resulting polynomial is degree ' + degree + '. Only up to degree 4 supported.');

  steps.push({ rule: 'Solve Polynomial', description: `Solve ${polyToString(resultCoeffs, varName)} = 0`, before: null, after: null });

  const rawSolutions = solvePolyRoots(resultCoeffs);
  if (rawSolutions === null) { steps.push({ rule: 'Identity', description: 'All non-restricted values are solutions.', before: null, after: null }); return { steps, solution: { variable: varName, value: null, identity: true }, graphData: null }; }
  if (rawSolutions.length === 0) { steps.push({ rule: 'No Real Solutions', description: 'The polynomial has no real roots.', before: null, after: null }); return { steps, solution: { variable: varName, value: null, noSolution: true }, graphData: null }; }

  steps.push({ rule: 'Candidate Solutions', description: rawSolutions.map(s => `${varName} = ${formatNumber(s)}`).join(', '), before: null, after: null });

  const validSolutions = [];
  const extraneousSolutions = [];
  for (const sol of rawSolutions) { if (restricted.some(r => Math.abs(r - sol) < 1e-8)) extraneousSolutions.push(sol); else validSolutions.push(sol); }

  if (extraneousSolutions.length > 0) {
    steps.push({ rule: 'Check for Extraneous Solutions', description: `${extraneousSolutions.map(s => `${varName} = ${formatNumber(s)}`).join(', ')} ${extraneousSolutions.length === 1 ? 'makes' : 'make'} a denominator zero \u2014 extraneous!`, before: null, after: null });
  } else if (restricted.length > 0) {
    steps.push({ rule: 'Check for Extraneous Solutions', description: 'All solutions are valid (none make a denominator zero). \u2713', before: null, after: null });
  }

  if (validSolutions.length === 0) {
    steps.push({ rule: 'No Valid Solutions', description: 'All candidate solutions are extraneous.', before: null, after: null });
    return { steps, solution: { variable: varName, value: null, noSolution: true }, graphData: null };
  }

  const exact = validSolutions.every(s => Number.isInteger(s) || Math.abs(s * 10 - Math.round(s * 10)) < 1e-8);

  if (validSolutions.length === 1) {
    steps.push({ rule: 'Solution', description: `${varName} = ${formatNumber(validSolutions[0])}`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: validSolutions[0] } } });
    return { steps, solution: { variable: varName, value: validSolutions[0], exact }, graphData: null };
  }
  if (validSolutions.length === 2) return { steps, solution: { variable: varName, value: validSolutions[0], value2: validSolutions[1], multiple: true, allSolutions: validSolutions, exact }, graphData: null };
  return { steps, solution: { variable: varName, value: validSolutions[0], allSolutions: validSolutions, multiple: true, exact }, graphData: null };
}

/* =====================================================
   CURSOR STYLES
   ===================================================== */

const CURSOR_CSS = `
  @keyframes ra-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  .ra-caret { display: inline-block; width: 2px; height: 1.2em; background: #fbbf24; animation: ra-blink 1s step-end infinite; vertical-align: text-bottom; margin: 0 -1px; border-radius: 1px; }
  .ra-display:focus { outline: none; }
  .ra-display:focus .ra-caret { animation: ra-blink 1s step-end infinite; }
  .ra-display:not(:focus) .ra-caret { opacity: 0.4; animation: none; }
  .ra-char { cursor: text; position: relative; }
  .ra-char:hover { background: rgba(255,255,255,0.08); border-radius: 2px; }
  .ra-sup-group { display: inline; cursor: text; }
  .ra-form-card, .ra-form-card:visited, .ra-form-card:active, .ra-form-card:focus, .ra-form-card:focus-visible, .ra-form-card:focus-within { outline: none !important; box-shadow: none; border-color: var(--ra-border-color) !important; }
`;

/* =====================================================
   ENGINE COMPONENT
   ===================================================== */

export const RationalSolverEngine = forwardRef(({
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
  const operators = ['\u00D7', '\u00F7', '+', '-', '='];

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
    try { const exprString = expression.join(''); const tokens = tokenize(exprString); const ast = parse(tokens); const solveResult = solveRationalEquation(ast); setResult(solveResult); setError(null); if (onResultChange) onResultChange(solveResult); }
    catch (e) { setError(e.message); setResult(null); if (onResultChange) onResultChange(null); }
  }, [expression, onResultChange]);

  const TYPEABLE = new Set('0123456789.xynXYN+-=*/()^\u00D7\u00F7\u00B2\u00B3\u2074');
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
    if (expr.length === 0) { if (focused) return <span className="ra-caret" />; return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>; }
    const elements = []; const eStyles = getEngineStyles(darkMode);
    const renderCaret = (pos) => (cursorPos === pos && focused) ? <span key={`caret-${pos}`} className="ra-caret" /> : null;
    const supGroups = new Set();
    for (let i = 0; i < expr.length; i++) { if (expr[i] === '^' && i + 1 < expr.length) { supGroups.add(i); supGroups.add(i + 1); } }
    const charStyle = (ch, idx) => {
      if (ch === '\u00D7' || ch === '+' || ch === '-') return eStyles.displayOp;
      if (ch === '\u00F7' || ch === '/') return eStyles.displayDiv;
      if (ch === '=') return eStyles.displayEquals;
      if (ch === '\u00B2' || ch === '\u00B3' || ch === '\u2074') return eStyles.displaySup;
      if (supGroups.has(idx)) return eStyles.displaySup;
      return undefined;
    };
    const displayChar = (ch) => {
      if (ch === '\u00D7') return ' \u00B7 ';
      if (ch === '\u00F7' || ch === '/') return ' / ';
      if (ch === '+') return ' + ';
      if (ch === '-') return ' \u2212 ';
      if (ch === '=') return ' = ';
      return ch;
    };
    let i = 0;
    while (i < expr.length) {
      elements.push(renderCaret(i));
      if (expr[i] === '^' && i + 1 < expr.length) {
        elements.push(<span key={`sup-${i}`} className="ra-sup-group"><span className="ra-char" data-idx={i} style={eStyles.displaySup}>{'^'}</span><sup style={eStyles.displaySupText}>{renderCaret(i + 1)}<span className="ra-char" data-idx={i + 1} style={eStyles.displaySupText}>{expr[i + 1]}</span></sup></span>);
        i += 2; continue;
      }
      const isSup = expr[i] === '\u00B2' || expr[i] === '\u00B3' || expr[i] === '\u2074';
      if (isSup) { elements.push(<sup key={`ch-${i}`} className="ra-char" data-idx={i} style={eStyles.displaySupText}>{expr[i]}</sup>); }
      else { elements.push(<span key={`ch-${i}`} className="ra-char" data-idx={i} style={charStyle(expr[i], i)}>{displayChar(expr[i])}</span>); }
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
      <div ref={displayRef} className="ra-display" tabIndex={0} style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px`, cursor: 'text' }} onClick={handleDisplayClick} onKeyDown={handleKeyDown} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>{buildDisplayElements()}</div>
      {error && <div style={styles.error}>{error}</div>}
      <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
        <div style={styles.row}><span style={styles.label}>Var</span><div style={styles.btnGroup}>{variables.map((v) => (<button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => insertAt(v)}>{v}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}>Num</span><div style={styles.btnGroup}>{numbers.map((n) => (<button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => insertAt(n)}>{n}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}>Op</span><div style={styles.btnGroup}>{operators.map((op) => (<button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>{op}</button>))}</div></div>
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
  if (sol.noSolution) return <span>No solution</span>;
  if (sol.identity) return <span>Identity (all valid values)</span>;
  if (sol.allSolutions && sol.allSolutions.length > 2) return (<span>{sol.allSolutions.map((v, i) => (<span key={i}>{i > 0 && <span style={s.solEq}>,{' '}</span>}<span style={s.solVar}>{sol.variable}</span><span style={s.solEq}> = </span><span style={s.solNum}>{formatNumber(v)}</span></span>))}</span>);
  if (sol.multiple) return (<span><span style={s.solVar}>{sol.variable}</span><span style={s.solEq}> = </span><span style={s.solNum}>{formatNumber(sol.value)}</span><span style={s.solEq}> or </span><span style={s.solNum}>{formatNumber(sol.value2)}</span></span>);
  return (<span><span style={s.solVar}>{sol.variable}</span><span style={s.solEq}> = </span><span style={s.solNum}>{formatNumber(sol.value)}</span></span>);
}

RationalSolverEngine.displayName = 'RationalSolverEngine';

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
   EQUATION FORM GENERATORS
   ===================================================== */

const equationForms = [
  { id: 'simple-reciprocal', name: 'Simple Reciprocal', formula: 'a/x = b',
    generate: (nice) => { if (nice) { const x = [1, 2, 3, 4, 5, -1, -2, -3][Math.floor(Math.random() * 8)]; const b = [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)]; return `${b * x}/x=${b}`; } const a = Math.floor(Math.random() * 15) + 1; const b = Math.floor(Math.random() * 8) + 1; return `${a}/x=${b}`; } },
  { id: 'linear-denom', name: 'Linear Denominator', formula: 'a/(bx + c) = d',
    generate: (nice) => { if (nice) { const x = Math.floor(Math.random() * 7) - 3; const b = [1, 2][Math.floor(Math.random() * 2)]; const c = Math.floor(Math.random() * 8) - 4; const dv = b * x + c; if (dv === 0) return `3/(x+1)=1`; const a = dv * (Math.floor(Math.random() * 4) + 1); return `${a}/(${b === 1 ? '' : b + '\u00D7'}x${c >= 0 ? '+' + c : c})=${a / dv}`; } const a = Math.floor(Math.random() * 12) + 1; const b = [1, 2, 3][Math.floor(Math.random() * 3)]; const c = Math.floor(Math.random() * 10) - 5; const d = Math.floor(Math.random() * 5) + 1; return `${a}/(${b === 1 ? '' : b + '\u00D7'}x${c >= 0 ? '+' + c : c})=${d}`; } },
  { id: 'proportion', name: 'Proportion', formula: 'a/(x+b) = c/(x+d)',
    generate: (nice) => { if (nice) { const x = Math.floor(Math.random() * 9) - 4; const b = Math.floor(Math.random() * 6) - 3; const d = Math.floor(Math.random() * 6) - 3; const lv = x + b; const rv = x + d; if (lv === 0 || rv === 0) return `2/(x+1)=4/(x+3)`; const k = [2, 3][Math.floor(Math.random() * 2)]; return `${k * rv}/(x${b >= 0 ? '+' + b : b})=${k * lv}/(x${d >= 0 ? '+' + d : d})`; } const a = Math.floor(Math.random() * 8) + 1; const b = Math.floor(Math.random() * 10) - 5; const c = Math.floor(Math.random() * 8) + 1; const d = Math.floor(Math.random() * 10) - 5; return `${a}/(x${b >= 0 ? '+' + b : b})=${c}/(x${d >= 0 ? '+' + d : d})`; } },
  { id: 'sum-fractions', name: 'Sum of Fractions', formula: '1/x + 1/(x+a) = b',
    generate: (nice) => { if (nice) { const x = [1, 2, 3, 4][Math.floor(Math.random() * 4)]; const a = [1, 2, 3][Math.floor(Math.random() * 3)]; const val = 1 / x + 1 / (x + a); if (!Number.isInteger(val * x * (x + a))) return `1/x+1/(x+2)=3/4`; return `1/x+1/(x+${a})=${formatNumber(val)}`; } const a = Math.floor(Math.random() * 5) + 1; const b = Math.floor(Math.random() * 4) + 1; return `1/x+1/(x+${a})=${b}`; } },
  { id: 'extraneous', name: 'Has Extraneous Root', formula: 'x/(x\u2212a) = a/(x\u2212a)+b',
    generate: () => { const a = [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)]; const b = Math.floor(Math.random() * 4) + 1; return `x/(x-${a})=${a}/(x-${a})+${b}`; } },
  { id: 'quadratic-result', name: 'Quadratic After Clearing', formula: 'x + a/x = b',
    generate: (nice) => { if (nice) { const r1 = [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)]; const r2 = [1, 2, 3][Math.floor(Math.random() * 3)]; const b = r1 + r2; const a = r1 * r2; return `x+${a}/x=${b}`; } const a = Math.floor(Math.random() * 12) + 1; const b = Math.floor(Math.random() * 10) + 2; return `x+${a}/x=${b}`; } },
  { id: 'variable-numerator', name: 'Variable Numerator', formula: '(ax+b)/(cx+d) = e',
    generate: (nice) => { if (nice) { const x = Math.floor(Math.random() * 7) - 3; const c = [1, 2][Math.floor(Math.random() * 2)]; const d = Math.floor(Math.random() * 6) - 3; const a = [1, 2, 3][Math.floor(Math.random() * 3)]; const den = c * x + d; if (den === 0) return `(2\u00D7x+1)/(x+2)=3`; const e = Math.floor(Math.random() * 4) + 1; const b = e * den - a * x; return `(${a === 1 ? '' : a + '\u00D7'}x${b >= 0 ? '+' + b : b})/(${c === 1 ? '' : c + '\u00D7'}x${d >= 0 ? '+' + d : d})=${e}`; } const a = Math.floor(Math.random() * 4) + 1; const b = Math.floor(Math.random() * 10) - 5; const c = [1, 2][Math.floor(Math.random() * 2)]; const d = Math.floor(Math.random() * 8) - 4; const e = Math.floor(Math.random() * 5) + 1; return `(${a === 1 ? '' : a + '\u00D7'}x${b >= 0 ? '+' + b : b})/(${c === 1 ? '' : c + '\u00D7'}x${d >= 0 ? '+' + d : d})=${e}`; } },
  { id: 'no-solution', name: 'No Solution', formula: '1/(x\u2212a) = 1/(x\u2212a)+b',
    generate: () => { const a = Math.floor(Math.random() * 8) + 1; const b = Math.floor(Math.random() * 4) + 1; return `1/(x-${a})=1/(x-${a})+${b}`; } },
];

/* =====================================================
   WRAPPER COMPONENT (accepts tabs prop)
   ===================================================== */

const RationalEquationSolver = ({ tabs = [] }) => {
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
    if (sol.noSolution) return (<div style={wStyles.finalAnswer}><div style={wStyles.answerLabel}>Answer</div><div style={wStyles.answerValue}>No solution</div><div style={wStyles.answerNote}>{'\u2717'} All candidates are extraneous or no real roots exist</div></div>);
    if (sol.identity) return (<div style={wStyles.finalAnswer}><div style={wStyles.answerLabel}>Answer</div><div style={wStyles.answerValue}>Identity</div><div style={wStyles.answerNote}>{'\u2713'} True for all non-restricted values</div></div>);
    if (sol.allSolutions && sol.allSolutions.length > 2) return (<div style={wStyles.finalAnswer}><div style={wStyles.answerLabel}>Answer</div><div style={wStyles.answerValue}>{sol.allSolutions.map((v, i) => (<span key={i}>{i > 0 && <span style={wStyles.answerEq}>,{' '}</span>}<span style={wStyles.answerVar}>{sol.variable}</span><span style={wStyles.answerEq}> = </span><span style={wStyles.answerNum}>{formatNumber(v)}</span></span>))}</div><div style={wStyles.answerNote}>{sol.exact ? '\u2713 Exact solutions' : '\u2248 Approximate values'}</div></div>);
    if (sol.multiple) return (<div style={wStyles.finalAnswer}><div style={wStyles.answerLabel}>Answer</div><div style={wStyles.answerValue}><span style={wStyles.answerVar}>{sol.variable}</span><span style={wStyles.answerEq}> = </span><span style={wStyles.answerNum}>{formatNumber(sol.value)}</span><span style={wStyles.answerOr}> or </span><span style={wStyles.answerVar}>{sol.variable}</span><span style={wStyles.answerEq}> = </span><span style={wStyles.answerNum}>{formatNumber(sol.value2)}</span></div><div style={wStyles.answerNote}>{sol.exact ? '\u2713 Exact solutions' : '\u2248 Approximate values'}</div></div>);
    return (<div style={wStyles.finalAnswer}><div style={wStyles.answerLabel}>Answer</div><div style={wStyles.answerValue}><span style={wStyles.answerVar}>{sol.variable}</span><span style={wStyles.answerEq}> = </span><span style={wStyles.answerNum}>{formatNumber(sol.value)}</span></div><div style={wStyles.answerNote}>{sol.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}</div></div>);
  };

  return (
    <div style={wStyles.container}>
      <style>{THEME_CSS}</style>
      <div style={wStyles.inner}>
        <header style={wStyles.header}>
          <button style={wStyles.themeToggle} onClick={() => setDarkMode(!darkMode)}>{darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}</button>
          <div style={wStyles.iconWrap}><span style={wStyles.icon}>{'\u00B9'}/{'\u2093'}</span></div>
          <h1 style={wStyles.title}>Rational Equation Solver</h1>
          <p style={wStyles.subtitle}>Solve equations with variables in denominators, step by step</p>
        </header>
        <div style={wStyles.main}>
          <div style={wStyles.leftCol}>
            <RationalSolverEngine ref={engineRef} onResultChange={handleResultChange} onClear={handleClear} darkMode={darkMode} compact={true} />
            <div style={wStyles.formsSection}>
              <button style={wStyles.accordionHeader} onClick={() => setExamplesOpen(!examplesOpen)}>
                <span style={wStyles.sectionTitle}>Try an Example</span>
                <span style={wStyles.chevron}>{examplesOpen ? '\u25B2' : '\u25BC'}</span>
              </button>
              {examplesOpen && (
                <div style={wStyles.accordionContent}>
                  <p style={wStyles.formsHint}>Click any type to generate a random equation. Click again for a new one!</p>
                  <div style={wStyles.formsGrid}>
                    {equationForms.map((form) => (
                      <button key={form.id} className="ra-form-card" style={{ ...wStyles.formCard, ...(selectedForm === form.id ? wStyles.formCardSelected : {}) }} onClick={() => handleFormClick(form)}>
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
              placeholder="Select an equation type or enter your own rational equation, then click Solve to see the step-by-step solution."
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
  formCard: { '--ra-border-color': darkMode ? '#475569' : '#e2e8f0', background: darkMode ? '#334155' : '#f8fafc', border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0', borderRadius: '10px', padding: '10px 12px', cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'left', fontFamily: 'inherit' },
  formCardSelected: { '--ra-border-color': '#3b82f6', borderColor: '#3b82f6', background: darkMode ? '#1e3a5f' : '#eff6ff', boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)' },
  formName: { fontSize: '0.8rem', fontWeight: '600', color: darkMode ? '#e2e8f0' : '#1e3a5f', marginBottom: '2px' },
  formFormula: { fontSize: '0.9rem', color: darkMode ? '#60a5fa' : '#3b82f6', fontFamily: 'ui-monospace, monospace' },
  stepMath: { fontSize: '1.05rem', color: darkMode ? '#e2e8f0' : '#1e3a5f', background: darkMode ? '#334155' : '#fff', padding: '10px 14px', borderRadius: '8px', display: 'inline-block', border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0' },
  stepTransform: { display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' },
  arrow: { color: '#3b82f6', fontSize: '1.1rem' },
  finalAnswer: { background: darkMode ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '12px', padding: '18px 20px', color: '#fff', textAlign: 'center', marginTop: '16px' },
  answerLabel: { fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8, marginBottom: '6px', fontWeight: '600' },
  answerValue: { fontSize: '1.5rem', fontWeight: '700' },
  answerVar: { fontStyle: 'italic' },
  answerEq: { opacity: 0.8, margin: '0 6px' },
  answerNum: { color: '#fbbf24' },
  answerOr: { opacity: 0.7, margin: '0 8px', fontSize: '1rem' },
  answerNote: { fontSize: '0.8rem', opacity: 0.75, marginTop: '6px' },
});

export default RationalEquationSolver;