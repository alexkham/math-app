import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import SolutionPanel from './SolutionPanel';
import THEME_CSS from './MathSolverThemes';

/* =====================================================
   POLYNOMIAL EQUATION SOLVER

   Two exports:
   - PolynomialSolverEngine: Standalone solver component
   - PolynomialEquationSolver: Full educational wrapper (default)

   Features:
   - Degree 1: linear solve
   - Degree 2: discriminant + quadratic formula, factoring
   - Degree 3: rational root theorem → factor → quadratic
   - Degree 4: rational root theorem → factor down
   - Numeric fallback (Newton&apos;s method) when no rational roots
   - Full cursor system, dark mode, SolutionPanel
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

function gcd(a, b) {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) { [a, b] = [b, a % b]; }
  return a;
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

/* Collect polynomial terms from AST into coefficients array.
   Returns [c0, c1, c2, ...] where coeffs[i] is coefficient of x^i.
   Returns null if expression is not polynomial. */
function collectPolynomialTerms(node, varName) {
  if (!node) return null;

  switch (node.type) {
    case 'NUMBER':
      return [node.value];
    case 'VARIABLE':
      if (node.name === varName) return [0, 1];
      return null;
    case 'NEGATE': {
      const inner = collectPolynomialTerms(node.operand, varName);
      if (!inner) return null;
      return inner.map(c => -c);
    }
    case 'ADD': {
      const l = collectPolynomialTerms(node.left, varName);
      const r = collectPolynomialTerms(node.right, varName);
      if (!l || !r) return null;
      return addCoeffs(l, r);
    }
    case 'SUBTRACT': {
      const l = collectPolynomialTerms(node.left, varName);
      const r = collectPolynomialTerms(node.right, varName);
      if (!l || !r) return null;
      return addCoeffs(l, r.map(c => -c));
    }
    case 'MULTIPLY': {
      const lConst = evaluateConstant(node.left);
      const rConst = evaluateConstant(node.right);
      if (lConst !== null) {
        const r = collectPolynomialTerms(node.right, varName);
        if (r) return r.map(c => c * lConst);
      }
      if (rConst !== null) {
        const l = collectPolynomialTerms(node.left, varName);
        if (l) return l.map(c => c * rConst);
      }
      const l = collectPolynomialTerms(node.left, varName);
      const r = collectPolynomialTerms(node.right, varName);
      if (l && r) return multiplyCoeffs(l, r);
      return null;
    }
    case 'DIVIDE': {
      const divisor = evaluateConstant(node.right);
      if (divisor !== null && divisor !== 0) {
        const l = collectPolynomialTerms(node.left, varName);
        if (l) return l.map(c => c / divisor);
      }
      return null;
    }
    case 'POWER': {
      if (node.base.type === 'VARIABLE' && node.base.name === varName) {
        const exp = evaluateConstant(node.exponent);
        if (exp !== null && Number.isInteger(exp) && exp >= 0 && exp <= 4) {
          const coeffs = new Array(exp + 1).fill(0);
          coeffs[exp] = 1;
          return coeffs;
        }
      }
      const exp = evaluateConstant(node.exponent);
      if (exp !== null && Number.isInteger(exp) && exp >= 0 && exp <= 4) {
        const base = collectPolynomialTerms(node.base, varName);
        if (base) {
          let result = [1];
          for (let i = 0; i < exp; i++) {
            result = multiplyCoeffs(result, base);
            if (result.length > 5) return null;
          }
          return result;
        }
      }
      return null;
    }
    default:
      return null;
  }
}

function addCoeffs(a, b) {
  const len = Math.max(a.length, b.length);
  const result = new Array(len).fill(0);
  for (let i = 0; i < a.length; i++) result[i] += a[i];
  for (let i = 0; i < b.length; i++) result[i] += b[i];
  return result;
}

function multiplyCoeffs(a, b) {
  const result = new Array(a.length + b.length - 1).fill(0);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      result[i + j] += a[i] * b[j];
    }
  }
  return result;
}

function getDegree(coeffs) {
  for (let i = coeffs.length - 1; i >= 0; i--) {
    if (Math.abs(coeffs[i]) > 1e-10) return i;
  }
  return 0;
}

function trimCoeffs(coeffs) {
  const deg = getDegree(coeffs);
  return coeffs.slice(0, deg + 1);
}

function evalPoly(coeffs, x) {
  let val = 0;
  for (let i = 0; i < coeffs.length; i++) {
    val += coeffs[i] * Math.pow(x, i);
  }
  return val;
}

function evalPolyDerivative(coeffs, x) {
  let val = 0;
  for (let i = 1; i < coeffs.length; i++) {
    val += i * coeffs[i] * Math.pow(x, i - 1);
  }
  return val;
}

/* Synthetic division: divide polynomial by (x - r).
   Returns quotient coefficients (low-to-high). */
function syntheticDivide(coeffs, r) {
  const highToLow = [...coeffs].reverse();
  const result = [highToLow[0]];
  for (let i = 1; i < highToLow.length; i++) {
    result.push(result[i - 1] * r + highToLow[i]);
  }
  const quotientHTL = result.slice(0, -1);
  return quotientHTL.reverse();
}

/* Get candidate rational roots via rational root theorem. */
function getCandidateRoots(coeffs) {
  const deg = getDegree(coeffs);
  const leading = Math.abs(Math.round(coeffs[deg]));
  const constant = Math.abs(Math.round(coeffs[0]));

  if (leading === 0) return [];

  const pFactors = getFactors(constant === 0 ? 1 : constant);
  const qFactors = getFactors(leading);

  const candidates = new Set();
  candidates.add(0);

  for (const p of pFactors) {
    for (const q of qFactors) {
      const val = p / q;
      candidates.add(val);
      candidates.add(-val);
    }
  }

  return Array.from(candidates).sort((a, b) => Math.abs(a) - Math.abs(b));
}

function getFactors(n) {
  if (n === 0) return [0];
  n = Math.abs(n);
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return factors;
}

function hasIntegerCoeffs(coeffs) {
  return coeffs.every(c => Math.abs(c - Math.round(c)) < 1e-8);
}

/* Newton&apos;s method to find a real root. */
function newtonRoot(coeffs, startX, maxIter = 50) {
  let x = startX;
  for (let i = 0; i < maxIter; i++) {
    const fx = evalPoly(coeffs, x);
    if (Math.abs(fx) < 1e-10) return x;
    const fpx = evalPolyDerivative(coeffs, x);
    if (Math.abs(fpx) < 1e-14) { x += 0.1; continue; }
    const nextX = x - fx / fpx;
    if (Math.abs(nextX - x) < 1e-12) return nextX;
    x = nextX;
  }
  return Math.abs(evalPoly(coeffs, x)) < 1e-6 ? x : null;
}

function findNumericRoot(coeffs) {
  const starts = [-10, -5, -3, -2, -1, -0.5, 0, 0.5, 1, 2, 3, 5, 10];
  for (const s of starts) {
    const r = newtonRoot(coeffs, s);
    if (r !== null) return r;
  }
  return null;
}

/* Format polynomial string from coefficients for display. */
function polyToString(coeffs, varName) {
  const deg = getDegree(coeffs);
  if (deg === 0) return formatNumber(coeffs[0]);

  const parts = [];
  for (let i = deg; i >= 0; i--) {
    const c = coeffs[i];
    if (Math.abs(c) < 1e-10) continue;

    let sign = c >= 0 ? '+' : '\u2212';
    let absC = Math.abs(c);

    if (parts.length === 0) {
      sign = c < 0 ? '\u2212' : '';
    }

    let term = '';
    if (i === 0) {
      term = formatNumber(absC);
    } else if (i === 1) {
      term = Math.abs(absC - 1) < 1e-10 ? varName : `${formatNumber(absC)}${varName}`;
    } else {
      const sup = i === 2 ? '\u00B2' : i === 3 ? '\u00B3' : '\u2074';
      term = Math.abs(absC - 1) < 1e-10 ? `${varName}${sup}` : `${formatNumber(absC)}${varName}${sup}`;
    }

    if (parts.length > 0) {
      parts.push(` ${sign} ${term}`);
    } else {
      parts.push(`${sign}${term}`);
    }
  }

  return parts.join('') || '0';
}

/* Build an AST node for a polynomial from coefficients. */
function polyToAST(coeffs, varName) {
  const deg = getDegree(coeffs);
  if (deg === 0) return { type: 'NUMBER', value: coeffs[0] };

  const terms = [];
  for (let i = deg; i >= 0; i--) {
    const c = coeffs[i];
    if (Math.abs(c) < 1e-10) continue;

    let termNode;
    if (i === 0) {
      termNode = { type: 'NUMBER', value: Math.abs(c) };
    } else {
      const varNode = i === 1
        ? { type: 'VARIABLE', name: varName }
        : { type: 'POWER', base: { type: 'VARIABLE', name: varName }, exponent: { type: 'NUMBER', value: i } };

      if (Math.abs(Math.abs(c) - 1) < 1e-10) {
        termNode = varNode;
      } else {
        termNode = { type: 'MULTIPLY', left: { type: 'NUMBER', value: Math.abs(c) }, right: varNode };
      }
    }

    if (c < 0) {
      termNode = { type: 'NEGATE', operand: termNode };
    }

    terms.push({ node: termNode, coeff: c });
  }

  if (terms.length === 0) return { type: 'NUMBER', value: 0 };
  if (terms.length === 1) return terms[0].node;

  let result = terms[0].node;
  for (let i = 1; i < terms.length; i++) {
    if (terms[i].coeff < 0) {
      const inner = terms[i].node.type === 'NEGATE' ? terms[i].node.operand : terms[i].node;
      result = { type: 'SUBTRACT', left: result, right: inner };
    } else {
      result = { type: 'ADD', left: result, right: terms[i].node };
    }
  }

  return result;
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
    case 'DIVIDE': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> / </span>{wrap(node.right, `${key}-r`)}</span>;
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
});

/* =====================================================
   SOLVER
   ===================================================== */

function solvePolynomialEquation(ast) {
  const steps = [];

  if (ast.type !== 'EQUATION') {
    throw new Error('Input must be an equation (use = sign)');
  }

  const varName = getVariable(ast.left) !== 'x' ? getVariable(ast.left) : getVariable(ast.right);

  const leftCoeffs = collectPolynomialTerms(ast.left, varName);
  const rightCoeffs = collectPolynomialTerms(ast.right, varName);

  if (!leftCoeffs || !rightCoeffs) {
    throw new Error('Could not parse as a polynomial equation. Only integer powers of the variable are supported (up to degree 4).');
  }

  let coeffs = addCoeffs(leftCoeffs, rightCoeffs.map(c => -c));
  coeffs = trimCoeffs(coeffs);
  const degree = getDegree(coeffs);

  if (degree === 0) {
    if (Math.abs(coeffs[0]) < 1e-10) {
      steps.push({ rule: 'Identity', description: 'This equation is always true (0 = 0).', before: ast, after: null });
      return { steps, solution: { variable: varName, value: null, identity: true }, graphData: null };
    } else {
      steps.push({ rule: 'Contradiction', description: `${formatNumber(coeffs[0])} = 0 is never true. No solution.`, before: ast, after: null });
      return { steps, solution: { variable: varName, value: null, noSolution: true }, graphData: null };
    }
  }

  if (degree > 4) {
    throw new Error('Only polynomials up to degree 4 are supported.');
  }

  steps.push({
    rule: 'Standard Form',
    description: `Rewrite as ${polyToString(coeffs, varName)} = 0.`,
    before: ast,
    after: { type: 'EQUATION', left: polyToAST(coeffs, varName), right: { type: 'NUMBER', value: 0 } }
  });

  if (degree === 1) return solveLinearPoly(coeffs, varName, steps);
  if (degree === 2) return solveQuadraticPoly(coeffs, varName, steps);
  if (degree === 3) return solveCubicPoly(coeffs, varName, steps);
  return solveQuarticPoly(coeffs, varName, steps);
}

/* ---- Degree 1 ---- */
function solveLinearPoly(coeffs, varName, steps) {
  const a = coeffs[1];
  const b = coeffs[0];

  steps.push({
    rule: 'Linear Equation',
    description: `${formatNumber(a)}${varName} + ${formatNumber(b)} = 0`,
    before: null,
    after: null
  });

  const sol = -b / a;

  steps.push({
    rule: 'Isolate Variable',
    description: `${varName} = ${formatNumber(-b)} / ${formatNumber(a)} = ${formatNumber(sol)}`,
    before: null,
    after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: sol } }
  });

  return {
    steps,
    solution: { variable: varName, value: sol, exact: isExact(sol) },
    graphData: null
  };
}

/* ---- Degree 2 ---- */
function solveQuadraticPoly(coeffs, varName, steps) {
  const a = coeffs[2];
  const b = coeffs[1];
  const c = coeffs[0];

  steps.push({
    rule: 'Identify Coefficients',
    description: `a = ${formatNumber(a)}, b = ${formatNumber(b)}, c = ${formatNumber(c)}`,
    before: null,
    after: null
  });

  const discriminant = b * b - 4 * a * c;

  steps.push({
    rule: 'Compute Discriminant',
    description: `\u0394 = b\u00B2 \u2212 4ac = ${formatNumber(b)}\u00B2 \u2212 4(${formatNumber(a)})(${formatNumber(c)}) = ${formatNumber(discriminant)}`,
    before: null,
    after: null
  });

  if (discriminant < -1e-10) {
    steps.push({ rule: 'No Real Solutions', description: '\u0394 < 0, so there are no real solutions.', before: null, after: null });
    return { steps, solution: { variable: varName, value: null, noSolution: true }, graphData: null };
  }

  if (Math.abs(discriminant) < 1e-10) {
    const sol = -b / (2 * a);
    steps.push({
      rule: 'Repeated Root',
      description: `\u0394 = 0, one repeated root: ${varName} = ${formatNumber(sol)}`,
      before: null,
      after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: sol } }
    });
    return { steps, solution: { variable: varName, value: sol, exact: isExact(sol) }, graphData: null };
  }

  const sqrtDisc = Math.sqrt(discriminant);
  const isPerfectSquare = Math.abs(sqrtDisc - Math.round(sqrtDisc)) < 1e-8;

  if (isPerfectSquare && hasIntegerCoeffs([a, b, c])) {
    const sqrtD = Math.round(sqrtDisc);
    steps.push({ rule: 'Perfect Square Discriminant', description: `\u221A\u0394 = ${sqrtD}, so the polynomial factors nicely.`, before: null, after: null });
  }

  const sol1 = (-b + sqrtDisc) / (2 * a);
  const sol2 = (-b - sqrtDisc) / (2 * a);

  steps.push({ rule: 'Quadratic Formula', description: `${varName} = (\u2212b \u00B1 \u221A\u0394) / 2a`, before: null, after: null });

  const solutions = [sol1, sol2].sort((x, y) => x - y);

  steps.push({
    rule: 'Two Solutions',
    description: `${varName}\u2081 = ${formatNumber(solutions[0])}, ${varName}\u2082 = ${formatNumber(solutions[1])}`,
    before: null,
    after: null
  });

  const exact = solutions.every(s => isExact(s));

  return {
    steps,
    solution: { variable: varName, value: solutions[0], value2: solutions[1], multiple: true, allSolutions: solutions, exact },
    graphData: null
  };
}

/* ---- Degree 3 & 4 ---- */
function solveCubicPoly(coeffs, varName, steps) {
  return solveHighDegree(coeffs, varName, steps);
}

function solveQuarticPoly(coeffs, varName, steps) {
  return solveHighDegree(coeffs, varName, steps);
}

function solveHighDegree(coeffs, varName, steps) {
  const solutions = [];
  let remaining = [...coeffs];

  // Factor out x if constant term is 0
  while (Math.abs(remaining[0]) < 1e-10 && remaining.length > 1) {
    solutions.push(0);
    remaining = remaining.slice(1);
    steps.push({
      rule: 'Factor Out Variable',
      description: `${varName} = 0 is a solution. Factor out ${varName}.`,
      before: null,
      after: { type: 'EQUATION', left: polyToAST(remaining, varName), right: { type: 'NUMBER', value: 0 } }
    });
    // Only count x=0 once
    break;
  }

  const remDeg = getDegree(remaining);
  if (remDeg <= 2) {
    const subResult = remDeg === 1 ? solveLinearPoly(remaining, varName, steps) : solveQuadraticPoly(remaining, varName, steps);
    const subSolutions = extractSolutions(subResult.solution);
    const allSols = deduplicateSolutions([...solutions, ...subSolutions].sort((a, b) => a - b));
    return buildFinalResult(steps, varName, allSols);
  }

  // Rational root theorem
  if (hasIntegerCoeffs(remaining)) {
    const candidates = getCandidateRoots(remaining);
    const constTerm = Math.abs(Math.round(remaining[0]));
    const leadTerm = Math.abs(Math.round(remaining[getDegree(remaining)]));

    steps.push({
      rule: 'Rational Root Theorem',
      description: `Possible rational roots: \u00B1{factors of ${constTerm === 0 ? 1 : constTerm}} / {factors of ${leadTerm}}`,
      before: null,
      after: null
    });

    let foundRational = true;
    while (foundRational && getDegree(remaining) > 2) {
      foundRational = false;
      const cands = getCandidateRoots(remaining);
      for (const candidate of cands) {
        if (Math.abs(evalPoly(remaining, candidate)) < 1e-8) {
          solutions.push(candidate);
          foundRational = true;

          steps.push({
            rule: 'Rational Root Found',
            description: `${varName} = ${formatNumber(candidate)} is a root.`,
            before: null,
            after: null
          });

          remaining = syntheticDivide(remaining, candidate);
          remaining = trimCoeffs(remaining);

          steps.push({
            rule: 'After Division',
            description: `Quotient: ${polyToString(remaining, varName)} = 0`,
            before: null,
            after: { type: 'EQUATION', left: polyToAST(remaining, varName), right: { type: 'NUMBER', value: 0 } }
          });

          break;
        }
      }
    }
  }

  // Solve remaining
  const finalDeg = getDegree(remaining);
  if (finalDeg === 1) {
    const subResult = solveLinearPoly(remaining, varName, steps);
    const subSolutions = extractSolutions(subResult.solution);
    const allSols = deduplicateSolutions([...solutions, ...subSolutions].sort((a, b) => a - b));
    return buildFinalResult(steps, varName, allSols);
  }
  if (finalDeg === 2) {
    const subResult = solveQuadraticPoly(remaining, varName, steps);
    const subSolutions = extractSolutions(subResult.solution);
    const allSols = deduplicateSolutions([...solutions, ...subSolutions].sort((a, b) => a - b));
    return buildFinalResult(steps, varName, allSols);
  }

  // Numeric fallback
  if (finalDeg >= 3) {
    steps.push({
      rule: 'Numeric Method',
      description: 'No further rational roots found. Using Newton\u2019s method to approximate remaining roots.',
      before: null,
      after: null
    });

    let tempCoeffs = [...remaining];
    for (let attempt = 0; attempt < finalDeg && getDegree(tempCoeffs) >= 1; attempt++) {
      const numRoot = findNumericRoot(tempCoeffs);
      if (numRoot === null) break;
      solutions.push(numRoot);
      steps.push({
        rule: 'Numeric Root',
        description: `${varName} \u2248 ${formatNumber(numRoot)}`,
        before: null,
        after: null
      });
      tempCoeffs = syntheticDivide(tempCoeffs, numRoot);
      tempCoeffs = trimCoeffs(tempCoeffs);

      if (getDegree(tempCoeffs) === 2) {
        const subResult = solveQuadraticPoly(tempCoeffs, varName, steps);
        const subSolutions = extractSolutions(subResult.solution);
        solutions.push(...subSolutions);
        break;
      }
      if (getDegree(tempCoeffs) === 1) {
        const sol = -tempCoeffs[0] / tempCoeffs[1];
        solutions.push(sol);
        break;
      }
    }
  }

  const allSols = deduplicateSolutions(solutions.sort((a, b) => a - b));
  return buildFinalResult(steps, varName, allSols);
}

function extractSolutions(sol) {
  if (!sol) return [];
  if (sol.noSolution || sol.identity) return [];
  if (sol.allSolutions) return sol.allSolutions;
  if (sol.multiple) return [sol.value, sol.value2];
  if (sol.value !== null && sol.value !== undefined) return [sol.value];
  return [];
}

function deduplicateSolutions(sols) {
  const unique = [];
  for (const s of sols) {
    if (!unique.some(u => Math.abs(u - s) < 1e-8)) unique.push(s);
  }
  return unique;
}

function buildFinalResult(steps, varName, solutions) {
  if (solutions.length === 0) {
    return { steps, solution: { variable: varName, value: null, noSolution: true }, graphData: null };
  }

  const exact = solutions.every(s => isExact(s));

  if (solutions.length === 1) {
    return { steps, solution: { variable: varName, value: solutions[0], exact }, graphData: null };
  }

  if (solutions.length === 2) {
    return { steps, solution: { variable: varName, value: solutions[0], value2: solutions[1], multiple: true, allSolutions: solutions, exact }, graphData: null };
  }

  return { steps, solution: { variable: varName, value: solutions[0], allSolutions: solutions, multiple: true, exact }, graphData: null };
}

function isExact(n) {
  if (Number.isInteger(n)) return true;
  // Check if it's a "nice" decimal like 0.5, 1.5 etc
  return Math.abs(n * 10 - Math.round(n * 10)) < 1e-8;
}

/* =====================================================
   CURSOR STYLES
   ===================================================== */

const CURSOR_CSS = `
  @keyframes pe-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  .pe-caret { display: inline-block; width: 2px; height: 1.2em; background: #fbbf24; animation: pe-blink 1s step-end infinite; vertical-align: text-bottom; margin: 0 -1px; border-radius: 1px; }
  .pe-display:focus { outline: none; }
  .pe-display:focus .pe-caret { animation: pe-blink 1s step-end infinite; }
  .pe-display:not(:focus) .pe-caret { opacity: 0.4; animation: none; }
  .pe-char { cursor: text; position: relative; }
  .pe-char:hover { background: rgba(255,255,255,0.08); border-radius: 2px; }
  .pe-sup-group { display: inline; cursor: text; }
  .pe-form-card, .pe-form-card:visited, .pe-form-card:active, .pe-form-card:focus, .pe-form-card:focus-visible, .pe-form-card:focus-within { outline: none !important; box-shadow: none; border-color: var(--pe-border-color) !important; }
`;

/* =====================================================
   ENGINE COMPONENT
   ===================================================== */

export const PolynomialSolverEngine = forwardRef(({
  compact = false,
  style = {},
  darkMode = false,
  onResultChange = null,
  onClear = null
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

  const undo = useCallback(() => {
    if (undoStack.length === 0) return;
    const prev = undoStack[undoStack.length - 1];
    setUndoStack(stack => stack.slice(0, -1));
    setExpression(prev.expr); setCursorPos(prev.pos); setResult(null); setError(null);
  }, [undoStack]);

  useImperativeHandle(ref, () => ({
    loadEquation: (eqString) => {
      pushUndo(expression, cursorPos);
      const chars = eqString.split('');
      setExpression(chars); setCursorPos(chars.length); setResult(null); setError(null);
      if (onResultChange) onResultChange(null);
    },
    clear: () => {
      pushUndo(expression, cursorPos);
      setExpression([]); setCursorPos(0); setResult(null); setError(null);
      if (onResultChange) onResultChange(null);
    },
    getExpression: () => expression.join(''),
    getResult: () => result
  }));

  const insertAt = useCallback((item) => {
    pushUndo(expression, cursorPos);
    if (typeof item === 'string' && item.length > 1) {
      const chars = item.split('');
      setExpression(prev => { const next = [...prev]; next.splice(cursorPos, 0, ...chars); return next; });
      setCursorPos(prev => prev + chars.length);
    } else {
      setExpression(prev => { const next = [...prev]; next.splice(cursorPos, 0, item); return next; });
      setCursorPos(prev => prev + 1);
    }
    setResult(null); setError(null);
  }, [cursorPos, expression, pushUndo]);

  const deleteAt = useCallback((pos) => {
    if (pos < 0 || pos >= expression.length) return;
    pushUndo(expression, cursorPos);
    setExpression(prev => { const next = [...prev]; next.splice(pos, 1); return next; });
    setCursorPos(pos); setResult(null); setError(null);
  }, [expression, cursorPos, pushUndo]);

  const clearAll = useCallback(() => {
    if (expression.length === 0) return;
    pushUndo(expression, cursorPos);
    setExpression([]); setCursorPos(0); setResult(null); setError(null);
    if (onClear) onClear();
  }, [expression, cursorPos, pushUndo, onClear]);

  const solve = useCallback(() => {
    try {
      const exprString = expression.join('');
      const tokens = tokenize(exprString);
      const ast = parse(tokens);
      const solveResult = solvePolynomialEquation(ast);
      setResult(solveResult); setError(null);
      if (onResultChange) onResultChange(solveResult);
    } catch (e) {
      setError(e.message); setResult(null);
      if (onResultChange) onResultChange(null);
    }
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
    if (charEl) {
      const idx = parseInt(charEl.getAttribute('data-idx'), 10);
      const rect = charEl.getBoundingClientRect();
      setCursorPos(e.clientX - rect.left < rect.width / 2 ? idx : idx + 1);
    } else { setCursorPos(expression.length); }
  }, [expression.length]);

  const buildDisplayElements = () => {
    const expr = expression;
    if (expr.length === 0) {
      if (focused) return <span className="pe-caret" />;
      return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
    }
    const elements = [];
    const eStyles = getEngineStyles(darkMode);

    const renderCaret = (pos) => (cursorPos === pos && focused) ? <span key={`caret-${pos}`} className="pe-caret" /> : null;

    const supGroups = new Set();
    for (let i = 0; i < expr.length; i++) {
      if (expr[i] === '^' && i + 1 < expr.length) {
        supGroups.add(i);
        supGroups.add(i + 1);
      }
    }

    const charStyle = (ch, idx) => {
      if (ch === '\u00D7' || ch === '\u00F7' || ch === '+' || ch === '-') return eStyles.displayOp;
      if (ch === '=') return eStyles.displayEquals;
      if (ch === '\u00B2' || ch === '\u00B3' || ch === '\u2074') return eStyles.displaySup;
      if (supGroups.has(idx)) return eStyles.displaySup;
      return undefined;
    };

    const displayChar = (ch) => {
      if (ch === '\u00D7') return ' \u00B7 ';
      if (ch === '\u00F7') return ' / ';
      if (ch === '+') return ' + ';
      if (ch === '-') return ' \u2212 ';
      if (ch === '=') return ' = ';
      return ch;
    };

    let i = 0;
    while (i < expr.length) {
      elements.push(renderCaret(i));

      if (expr[i] === '^' && i + 1 < expr.length) {
        elements.push(
          <span key={`sup-${i}`} className="pe-sup-group">
            <span className="pe-char" data-idx={i} style={eStyles.displaySup}>{'^'}</span>
            <sup style={eStyles.displaySupText}>
              {renderCaret(i + 1)}
              <span className="pe-char" data-idx={i + 1} style={eStyles.displaySupText}>{expr[i + 1]}</span>
            </sup>
          </span>
        );
        i += 2;
        continue;
      }

      const isSup = expr[i] === '\u00B2' || expr[i] === '\u00B3' || expr[i] === '\u2074';
      if (isSup) {
        elements.push(<sup key={`ch-${i}`} className="pe-char" data-idx={i} style={eStyles.displaySupText}>{expr[i]}</sup>);
      } else {
        elements.push(<span key={`ch-${i}`} className="pe-char" data-idx={i} style={charStyle(expr[i], i)}>{displayChar(expr[i])}</span>);
      }
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
      <div ref={displayRef} className="pe-display" tabIndex={0}
        style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px`, cursor: 'text' }}
        onClick={handleDisplayClick} onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
        {buildDisplayElements()}
      </div>
      {error && <div style={styles.error}>{error}</div>}
      <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
        <div style={styles.row}><span style={styles.label}>Var</span><div style={styles.btnGroup}>{variables.map((v) => (<button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => insertAt(v)}>{v}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}>Num</span><div style={styles.btnGroup}>{numbers.map((n) => (<button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => insertAt(n)}>{n}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}>Op</span><div style={styles.btnGroup}>{operators.map((op) => (<button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>{op}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}></span><div style={styles.btnGroup}>
          <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('x\u00B2')}>x{'\u00B2'}</button>
          <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('x\u00B3')}>x{'\u00B3'}</button>
          <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('x\u2074')}>x{'\u2074'}</button>
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
      {result && result.solution && (
        <div style={styles.solution}>
          {renderEngineSolution(result.solution, styles)}
        </div>
      )}
    </div>
  );
});

function renderEngineSolution(sol, s) {
  if (sol.noSolution) return <span>No real solutions</span>;
  if (sol.identity) return <span>Identity (all values)</span>;

  if (sol.allSolutions && sol.allSolutions.length > 2) {
    return (
      <span>
        {sol.allSolutions.map((v, i) => (
          <span key={i}>
            {i > 0 && <span style={s.solEq}>,{' '}</span>}
            <span style={s.solVar}>{sol.variable}</span>
            <span style={s.solEq}> = </span>
            <span style={s.solNum}>{formatNumber(v)}</span>
          </span>
        ))}
      </span>
    );
  }

  if (sol.multiple) {
    return (
      <span>
        <span style={s.solVar}>{sol.variable}</span>
        <span style={s.solEq}> = </span>
        <span style={s.solNum}>{formatNumber(sol.value)}</span>
        <span style={s.solEq}> or </span>
        <span style={s.solNum}>{formatNumber(sol.value2)}</span>
      </span>
    );
  }

  return (
    <span>
      <span style={s.solVar}>{sol.variable}</span>
      <span style={s.solEq}> = </span>
      <span style={s.solNum}>{formatNumber(sol.value)}</span>
    </span>
  );
}

PolynomialSolverEngine.displayName = 'PolynomialSolverEngine';

const getEngineStyles = (darkMode) => ({
  container: { background: darkMode ? '#1e293b' : '#fff', borderRadius: '16px', padding: '20px', boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)' },
  display: { background: darkMode ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '12px', padding: '18px 22px', minHeight: '54px', marginBottom: '16px', display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', fontSize: '1.4rem', color: '#fff', fontWeight: '500' },
  placeholder: { color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontSize: '0.95rem' },
  displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
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
  {
    id: 'linear',
    name: 'Linear',
    formula: 'ax + b = 0',
    generate: (nice) => {
      const a = [1, 2, 3, 4, 5, -1, -2, -3][Math.floor(Math.random() * 8)];
      const sol = nice ? Math.floor(Math.random() * 17) - 8 : Math.floor(Math.random() * 21) - 10;
      const b = -a * sol;
      return `${a === 1 ? '' : a === -1 ? '-' : a + '\u00D7'}x${b >= 0 ? '+' + b : b}=0`;
    }
  },
  {
    id: 'quadratic-nice',
    name: 'Quadratic (factorable)',
    formula: 'ax\u00B2 + bx + c = 0',
    generate: () => {
      const r1 = Math.floor(Math.random() * 11) - 5;
      const r2 = Math.floor(Math.random() * 11) - 5;
      const b = -(r1 + r2);
      const c = r1 * r2;
      return `x\u00B2${b >= 0 ? '+' + b : b}\u00D7x${c >= 0 ? '+' + c : c}=0`;
    }
  },
  {
    id: 'quadratic-general',
    name: 'Quadratic (general)',
    formula: 'ax\u00B2 + bx + c = 0',
    generate: () => {
      const a = [1, 2, 3][Math.floor(Math.random() * 3)];
      const b = Math.floor(Math.random() * 13) - 6;
      const c = Math.floor(Math.random() * 13) - 6;
      const aStr = a === 1 ? '' : a + '\u00D7';
      return `${aStr}x\u00B2${b >= 0 ? '+' + b : b}\u00D7x${c >= 0 ? '+' + c : c}=0`;
    }
  },
  {
    id: 'cubic-nice',
    name: 'Cubic (rational roots)',
    formula: 'x\u00B3 + bx\u00B2 + cx + d = 0',
    generate: () => {
      const r1 = Math.floor(Math.random() * 7) - 3;
      const r2 = Math.floor(Math.random() * 7) - 3;
      const r3 = Math.floor(Math.random() * 7) - 3;
      const b = -(r1 + r2 + r3);
      const c = r1 * r2 + r1 * r3 + r2 * r3;
      const d = -(r1 * r2 * r3);
      return `x\u00B3${b >= 0 ? '+' + b : b}\u00D7x\u00B2${c >= 0 ? '+' + c : c}\u00D7x${d >= 0 ? '+' + d : d}=0`;
    }
  },
  {
    id: 'cubic-leading',
    name: 'Cubic (leading coeff)',
    formula: 'ax\u00B3 + bx\u00B2 + cx + d = 0',
    generate: () => {
      const a = [2, 3][Math.floor(Math.random() * 2)];
      const r1 = Math.floor(Math.random() * 5) - 2;
      const r2 = Math.floor(Math.random() * 5) - 2;
      const r3 = Math.floor(Math.random() * 5) - 2;
      const coeffs = multiplyCoeffs(multiplyCoeffs([-r1, 1], [-r2, 1]), [-r3, 1]).map(c => c * a);
      return buildPolyString(coeffs) + '=0';
    }
  },
  {
    id: 'quartic-nice',
    name: 'Quartic (rational roots)',
    formula: 'x\u2074 + ... = 0',
    generate: () => {
      const r1 = Math.floor(Math.random() * 5) - 2;
      const r2 = Math.floor(Math.random() * 5) - 2;
      const r3 = Math.floor(Math.random() * 5) - 2;
      const r4 = Math.floor(Math.random() * 5) - 2;
      const coeffs = multiplyCoeffs(multiplyCoeffs([-r1, 1], [-r2, 1]), multiplyCoeffs([-r3, 1], [-r4, 1]));
      return buildPolyString(coeffs) + '=0';
    }
  },
  {
    id: 'no-real-roots',
    name: 'No Real Roots',
    formula: 'x\u00B2 + c = 0 (c > 0)',
    generate: () => {
      const c = Math.floor(Math.random() * 15) + 1;
      return `x\u00B2+${c}=0`;
    }
  },
  {
    id: 'perfect-square',
    name: 'Perfect Square',
    formula: '(x + a)\u00B2 = 0',
    generate: () => {
      const a = Math.floor(Math.random() * 11) - 5;
      const b = 2 * a;
      const c = a * a;
      return `x\u00B2${b >= 0 ? '+' + b : b}\u00D7x+${c}=0`;
    }
  },
];

/* Helper for form generators to build polynomial string from coefficients */
function buildPolyString(coeffs) {
  const parts = [];
  for (let i = coeffs.length - 1; i >= 0; i--) {
    const c = coeffs[i];
    if (Math.abs(c) < 1e-10) continue;
    const sup = i === 0 ? '' : i === 1 ? '\u00D7x' : i === 2 ? '\u00D7x\u00B2' : i === 3 ? '\u00D7x\u00B3' : '\u00D7x\u2074';
    if (i === coeffs.length - 1 && c === 1 && i > 0) {
      const varSup = i === 1 ? 'x' : i === 2 ? 'x\u00B2' : i === 3 ? 'x\u00B3' : 'x\u2074';
      parts.push(varSup);
      continue;
    }
    if (i === coeffs.length - 1 && c === -1 && i > 0) {
      const varSup = i === 1 ? 'x' : i === 2 ? 'x\u00B2' : i === 3 ? 'x\u00B3' : 'x\u2074';
      parts.push(`-${varSup}`);
      continue;
    }
    if (parts.length > 0) {
      parts.push(c >= 0 ? `+${c}${sup}` : `${c}${sup}`);
    } else {
      parts.push(`${c}${sup}`);
    }
  }
  return parts.join('') || '0';
}

/* =====================================================
   WRAPPER COMPONENT
   ===================================================== */

const PolynomialEquationSolver = () => {
  const engineRef = React.useRef(null);
  const [solveResult, setSolveResult] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [examplesOpen, setExamplesOpen] = useState(false);

  const handleFormClick = (form) => {
    const isNice = Math.random() < 0.8;
    const equation = form.generate(isNice);
    setSelectedForm(form.id);
    setSolveResult(null);
    if (engineRef.current) engineRef.current.loadEquation(equation);
  };

  const handleResultChange = (result) => { setSolveResult(result); };
  const handleClear = () => { setSelectedForm(null); setSolveResult(null); };

  const wStyles = getWrapperStyles(darkMode);

  const renderStepContent = (step, index) => {
    if (!step.before && !step.after) return null;
    return (
      <div>
        {step.before && <div style={wStyles.stepMath}>{astToMathDisplay(step.before, `before-${index}`, darkMode)}</div>}
        {step.after && <div style={wStyles.stepTransform}><span style={wStyles.arrow}>{'\u27F9'}</span><div style={wStyles.stepMath}>{astToMathDisplay(step.after, `after-${index}`, darkMode)}</div></div>}
      </div>
    );
  };

  const renderFinalAnswer = () => {
    if (!solveResult || !solveResult.solution) return null;
    const sol = solveResult.solution;

    if (sol.noSolution) {
      return (
        <div style={wStyles.finalAnswer}>
          <div style={wStyles.answerLabel}>Answer</div>
          <div style={wStyles.answerValue}>No real solutions</div>
          <div style={wStyles.answerNote}>{'\u2717'} The discriminant is negative</div>
        </div>
      );
    }

    if (sol.identity) {
      return (
        <div style={wStyles.finalAnswer}>
          <div style={wStyles.answerLabel}>Answer</div>
          <div style={wStyles.answerValue}>Identity</div>
          <div style={wStyles.answerNote}>{'\u2713'} True for all values</div>
        </div>
      );
    }

    if (sol.allSolutions && sol.allSolutions.length > 2) {
      return (
        <div style={wStyles.finalAnswer}>
          <div style={wStyles.answerLabel}>Answer</div>
          <div style={wStyles.answerValue}>
            {sol.allSolutions.map((v, i) => (
              <span key={i}>
                {i > 0 && <span style={wStyles.answerEq}>,{' '}</span>}
                <span style={wStyles.answerVar}>{sol.variable}</span>
                <span style={wStyles.answerEq}> = </span>
                <span style={wStyles.answerNum}>{formatNumber(v)}</span>
              </span>
            ))}
          </div>
          <div style={wStyles.answerNote}>{sol.exact ? '\u2713 Exact solutions' : '\u2248 Approximate values'}</div>
        </div>
      );
    }

    if (sol.multiple) {
      return (
        <div style={wStyles.finalAnswer}>
          <div style={wStyles.answerLabel}>Answer</div>
          <div style={wStyles.answerValue}>
            <span style={wStyles.answerVar}>{sol.variable}</span>
            <span style={wStyles.answerEq}> = </span>
            <span style={wStyles.answerNum}>{formatNumber(sol.value)}</span>
            <span style={wStyles.answerOr}> or </span>
            <span style={wStyles.answerVar}>{sol.variable}</span>
            <span style={wStyles.answerEq}> = </span>
            <span style={wStyles.answerNum}>{formatNumber(sol.value2)}</span>
          </div>
          <div style={wStyles.answerNote}>{sol.exact ? '\u2713 Exact solutions' : '\u2248 Approximate values'}</div>
        </div>
      );
    }

    return (
      <div style={wStyles.finalAnswer}>
        <div style={wStyles.answerLabel}>Answer</div>
        <div style={wStyles.answerValue}>
          <span style={wStyles.answerVar}>{sol.variable}</span>
          <span style={wStyles.answerEq}> = </span>
          <span style={wStyles.answerNum}>{formatNumber(sol.value)}</span>
        </div>
        <div style={wStyles.answerNote}>{sol.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}</div>
      </div>
    );
  };

  return (
    <div style={wStyles.container}>
      <style>{THEME_CSS}</style>
      <div style={wStyles.inner}>
        <header style={wStyles.header}>
          <button style={wStyles.themeToggle} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
          </button>
          <div style={wStyles.iconWrap}><span style={wStyles.icon}>x{'\u207F'}</span></div>
          <h1 style={wStyles.title}>Polynomial Equation Solver</h1>
          <p style={wStyles.subtitle}>Solve polynomial equations up to degree 4, step by step</p>
        </header>
        <div style={wStyles.main}>
          <div style={wStyles.leftCol}>
            <PolynomialSolverEngine ref={engineRef} onResultChange={handleResultChange} onClear={handleClear} darkMode={darkMode} compact={true} />
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
                      <button key={form.id} className="pe-form-card"
                        style={{ ...wStyles.formCard, ...(selectedForm === form.id ? wStyles.formCardSelected : {}) }}
                        onClick={() => handleFormClick(form)}>
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
            <SolutionPanel steps={solveResult?.steps || []} graphData={solveResult?.graphData || null} darkMode={darkMode}
              placeholder="Select an equation type or enter your own polynomial equation, then click Solve to see the step-by-step solution."
              stepsTitle="Solution Steps" renderStepContent={renderStepContent} stepCardClass={() => ''} />
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
  icon: { color: '#fff', fontSize: '16px', fontWeight: '700', fontStyle: 'italic' },
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
  formCard: { '--pe-border-color': darkMode ? '#475569' : '#e2e8f0', background: darkMode ? '#334155' : '#f8fafc', border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0', borderRadius: '10px', padding: '10px 12px', cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'left', fontFamily: 'inherit' },
  formCardSelected: { '--pe-border-color': '#3b82f6', borderColor: '#3b82f6', background: darkMode ? '#1e3a5f' : '#eff6ff', boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)' },
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

export default PolynomialEquationSolver;