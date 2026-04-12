import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import SolutionPanel from './SolutionPanel';
import THEME_CSS from './MathSolverThemes';

/* =====================================================
   QUADRATIC EQUATION SOLVER
   
   Two exports:
   - QuadraticSolverEngine: Standalone solver component
   - QuadraticEquationSolver: Full educational wrapper (default)
   
   Features:
   - Integrated SolutionPanel with graph support
   - Theme support via CSS variables
   - Dark mode toggle
   - Full cursor: click-to-place, arrow keys, blinking caret
   - Discriminant analysis
   - Quadratic formula with step-by-step
   - Factoring when applicable
   - Two roots, repeated root, no real roots
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

function tokenize(input) {
  const tokens = [];
  let i = 0;

  while (i < input.length) {
    const char = input[i];

    if (/\s/.test(char)) {
      i++;
      continue;
    }

    if (/[0-9]/.test(char) || (char === '.' && /[0-9]/.test(input[i + 1]))) {
      let num = '';
      while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) {
        num += input[i];
        i++;
      }
      tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) });
      continue;
    }

    if (/[a-zA-Z]/.test(char)) {
      tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
      i++;
      continue;
    }

    // Handle superscript digits as POWER + NUMBER
    if (char === '\u00B2') {
      tokens.push({ type: TokenType.POWER });
      tokens.push({ type: TokenType.NUMBER, value: 2 });
      i++;
      continue;
    }
    if (char === '\u00B3') {
      tokens.push({ type: TokenType.POWER });
      tokens.push({ type: TokenType.NUMBER, value: 3 });
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

    if (charMap[char]) {
      tokens.push({ type: charMap[char] });
      i++;
      continue;
    }

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
    if (expectedType && token?.type !== expectedType) {
      throw new Error(`Expected ${expectedType} but got ${token?.type}`);
    }
    pos++;
    return token;
  };

  const parseEquation = () => {
    const left = parseExpression();
    if (peek()?.type === TokenType.EQUALS) {
      consume();
      return { type: 'EQUATION', left, right: parseExpression() };
    }
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
    if (peek()?.type === TokenType.POWER) {
      consume();
      return { type: 'POWER', base, exponent: parsePower() };
    }
    return base;
  };

  const parseUnary = () => {
    if (peek()?.type === TokenType.MINUS) {
      consume();
      return { type: 'NEGATE', operand: parseUnary() };
    }
    return parsePrimary();
  };

  const parsePrimary = () => {
    const token = peek();
    if (token?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: token.value }; }
    if (token?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: token.value }; }
    if (token?.type === TokenType.LPAREN) {
      consume();
      const expr = parseExpression();
      consume(TokenType.RPAREN);
      return expr;
    }
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
    case 'ADD': case 'SUBTRACT': case 'MULTIPLY': case 'DIVIDE': case 'POWER': {
      const l = evaluateConstant(node.left || node.base);
      const r = evaluateConstant(node.right || node.exponent);
      if (l === null || r === null) return null;
      if (node.type === 'ADD') return l + r;
      if (node.type === 'SUBTRACT') return l - r;
      if (node.type === 'MULTIPLY') return l * r;
      if (node.type === 'DIVIDE') return r !== 0 ? l / r : null;
      if (node.type === 'POWER') return Math.pow(l, r);
      return null;
    }
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

// Collect quadratic terms: returns { a, b, c } for ax^2 + bx + c
function collectQuadraticTerms(node, varName) {
  if (!node) return { a: 0, b: 0, c: 0 };

  switch (node.type) {
    case 'NUMBER':
      return { a: 0, b: 0, c: node.value };
    case 'VARIABLE':
      return node.name === varName ? { a: 0, b: 1, c: 0 } : { a: 0, b: 0, c: 0 };
    case 'NEGATE': {
      const inner = collectQuadraticTerms(node.operand, varName);
      if (!inner) return null;
      return { a: -inner.a, b: -inner.b, c: -inner.c };
    }
    case 'ADD': {
      const l = collectQuadraticTerms(node.left, varName);
      const r = collectQuadraticTerms(node.right, varName);
      if (!l || !r) return null;
      return { a: l.a + r.a, b: l.b + r.b, c: l.c + r.c };
    }
    case 'SUBTRACT': {
      const l = collectQuadraticTerms(node.left, varName);
      const r = collectQuadraticTerms(node.right, varName);
      if (!l || !r) return null;
      return { a: l.a - r.a, b: l.b - r.b, c: l.c - r.c };
    }
    case 'POWER': {
      if (node.base?.type === 'VARIABLE' && node.base.name === varName) {
        const exp = evaluateConstant(node.exponent);
        if (exp === 2) return { a: 1, b: 0, c: 0 };
        if (exp === 1) return { a: 0, b: 1, c: 0 };
        if (exp === 0) return { a: 0, b: 0, c: 1 };
        return null; // degree > 2
      }
      const val = evaluateConstant(node);
      if (val !== null) return { a: 0, b: 0, c: val };
      return null;
    }
    case 'MULTIPLY': {
      const lConst = evaluateConstant(node.left);
      const rConst = evaluateConstant(node.right);
      if (lConst !== null && containsVariable(node.right)) {
        const r = collectQuadraticTerms(node.right, varName);
        if (!r) return null;
        return { a: lConst * r.a, b: lConst * r.b, c: lConst * r.c };
      }
      if (rConst !== null && containsVariable(node.left)) {
        const l = collectQuadraticTerms(node.left, varName);
        if (!l) return null;
        return { a: rConst * l.a, b: rConst * l.b, c: rConst * l.c };
      }
      if (lConst !== null && rConst !== null) {
        return { a: 0, b: 0, c: lConst * rConst };
      }
      // var * var = var^2 case
      if (node.left?.type === 'VARIABLE' && node.left.name === varName &&
          node.right?.type === 'VARIABLE' && node.right.name === varName) {
        return { a: 1, b: 0, c: 0 };
      }
      return null;
    }
    case 'DIVIDE': {
      const divisor = evaluateConstant(node.right);
      if (divisor !== null && divisor !== 0) {
        const l = collectQuadraticTerms(node.left, varName);
        if (l) return { a: l.a / divisor, b: l.b / divisor, c: l.c / divisor };
      }
      return null;
    }
    default:
      return null;
  }
}

function isPerfectSquare(n) {
  if (n < 0) return false;
  const s = Math.sqrt(n);
  return Math.abs(s - Math.round(s)) < 1e-10;
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

function simplifyFraction(num, den) {
  if (den === 0) return { num, den };
  const g = gcd(Math.abs(num), Math.abs(den));
  let sn = num / g;
  let sd = den / g;
  if (sd < 0) { sn = -sn; sd = -sd; }
  return { num: sn, den: sd };
}

/* =====================================================
   AST TO MATH DISPLAY
   ===================================================== */

function astToMathDisplay(node, key = 'root', darkMode = false) {
  if (!node) return null;

  const s = getMathStyles(darkMode);

  const wrap = (n, k) => {
    if (n.type === 'ADD' || n.type === 'SUBTRACT') {
      return <span key={k}>({astToMathDisplay(n, k, darkMode)})</span>;
    }
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
    case 'SQRT': return (
      <span key={key} style={s.radical}>
        {'\u221A'}
        <span style={s.radicand}>
          {astToMathDisplay(node.operand, `${key}-rad`, darkMode)}
        </span>
      </span>
    );
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
  radical: { display: 'inline', fontWeight: '400' },
  radicand: { borderTop: darkMode ? '1.5px solid #e2e8f0' : '1.5px solid #1e3a5f', paddingTop: '1px', display: 'inline', marginLeft: '1px' },
});

/* =====================================================
   SOLVER
   ===================================================== */

function solveQuadraticEquation(ast) {
  const steps = [];

  if (ast.type !== 'EQUATION') {
    throw new Error('Input must be an equation (use = sign)');
  }

  const { left, right } = ast;
  const varName = getVariable(left) !== 'x' ? getVariable(left) : getVariable(right);

  const leftTerms = collectQuadraticTerms(left, varName);
  const rightTerms = collectQuadraticTerms(right, varName);

  if (!leftTerms || !rightTerms) {
    throw new Error('Could not parse as a quadratic equation. Ensure the highest power is 2.');
  }

  // Move everything to left: (leftTerms - rightTerms) = 0
  const a = leftTerms.a - rightTerms.a;
  const b = leftTerms.b - rightTerms.b;
  const c = leftTerms.c - rightTerms.c;

  if (Math.abs(a) < 1e-10) {
    throw new Error('This is not a quadratic equation (the coefficient of ' + varName + '\u00B2 is 0). Try the linear solver.');
  }

  // Build standard form AST: ax^2 + bx + c = 0
  const buildStandardAST = (aa, bb, cc) => {
    const parts = [];
    // ax^2 term
    if (aa === 1) {
      parts.push({ type: 'POWER', base: { type: 'VARIABLE', name: varName }, exponent: { type: 'NUMBER', value: 2 } });
    } else if (aa === -1) {
      parts.push({ type: 'NEGATE', operand: { type: 'POWER', base: { type: 'VARIABLE', name: varName }, exponent: { type: 'NUMBER', value: 2 } } });
    } else {
      parts.push({ type: 'MULTIPLY', left: { type: 'NUMBER', value: aa }, right: { type: 'POWER', base: { type: 'VARIABLE', name: varName }, exponent: { type: 'NUMBER', value: 2 } } });
    }
    // bx term
    if (bb !== 0) parts.push({ coeff: bb, node: bb === 1 ? { type: 'VARIABLE', name: varName } : bb === -1 ? { type: 'NEGATE', operand: { type: 'VARIABLE', name: varName } } : { type: 'MULTIPLY', left: { type: 'NUMBER', value: Math.abs(bb) }, right: { type: 'VARIABLE', name: varName } } });
    // c term
    if (cc !== 0) parts.push({ coeff: cc, node: { type: 'NUMBER', value: Math.abs(cc) } });

    let result = parts[0].node || parts[0];
    for (let i = 1; i < parts.length; i++) {
      const p = parts[i];
      if (p.coeff >= 0) {
        result = { type: 'ADD', left: result, right: p.node };
      } else {
        result = { type: 'SUBTRACT', left: result, right: p.node };
      }
    }
    return { type: 'EQUATION', left: result, right: { type: 'NUMBER', value: 0 } };
  };

  // Step 1: Write in standard form
  const standardAST = buildStandardAST(a, b, c);
  steps.push({
    rule: 'Standard Form',
    description: `Rewrite the equation in standard form: a${varName}\u00B2 + b${varName} + c = 0, where a = ${formatNumber(a)}, b = ${formatNumber(b)}, c = ${formatNumber(c)}.`,
    before: ast,
    after: standardAST
  });

  // Step 2: Discriminant
  const discriminant = b * b - 4 * a * c;

  steps.push({
    rule: 'Calculate Discriminant',
    description: `\u0394 = b\u00B2 \u2212 4ac = (${formatNumber(b)})\u00B2 \u2212 4(${formatNumber(a)})(${formatNumber(c)}) = ${formatNumber(b * b)} \u2212 ${formatNumber(4 * a * c)} = ${formatNumber(discriminant)}.`,
    before: null,
    after: null
  });

  // No real solutions
  if (discriminant < 0) {
    steps.push({
      rule: 'No Real Solutions',
      description: `Since \u0394 = ${formatNumber(discriminant)} < 0, the equation has no real solutions. The parabola does not cross the x-axis.`,
      before: null,
      after: null
    });

    return {
      steps,
      solution: { variable: varName, value: null, noSolution: true, discriminant },
      graphData: {
        type: 'quadratic',
        a, b, c,
        variable: varName,
        roots: [],
        vertex: { x: -b / (2 * a), y: c - (b * b) / (4 * a) }
      }
    };
  }

  const sqrtDisc = Math.sqrt(discriminant);

  // One repeated root
  if (Math.abs(discriminant) < 1e-10) {
    const root = -b / (2 * a);
    const isExact = Number.isInteger(root) || (Number.isInteger(b) && Number.isInteger(2 * a) && b % (2 * a) === 0);

    steps.push({
      rule: 'Repeated Root',
      description: `Since \u0394 = 0, there is exactly one repeated root.`,
      before: null,
      after: null
    });

    // Show formula
    const frac = simplifyFraction(-b, 2 * a);
    if (frac.den === 1) {
      steps.push({
        rule: 'Apply Quadratic Formula',
        description: `${varName} = \u2212b / (2a) = \u2212(${formatNumber(b)}) / (2 \u00B7 ${formatNumber(a)}) = ${formatNumber(root)}.`,
        before: null,
        after: {
          type: 'EQUATION',
          left: { type: 'VARIABLE', name: varName },
          right: { type: 'NUMBER', value: root }
        }
      });
    } else {
      steps.push({
        rule: 'Apply Quadratic Formula',
        description: `${varName} = \u2212b / (2a) = \u2212(${formatNumber(b)}) / (2 \u00B7 ${formatNumber(a)}) = ${frac.num}/${frac.den}${!isExact ? ' \u2248 ' + formatNumber(root) : ''}.`,
        before: null,
        after: {
          type: 'EQUATION',
          left: { type: 'VARIABLE', name: varName },
          right: { type: 'NUMBER', value: root }
        }
      });
    }

    return {
      steps,
      solution: { variable: varName, value: root, exact: isExact, repeated: true },
      graphData: {
        type: 'quadratic',
        a, b, c,
        variable: varName,
        roots: [root],
        vertex: { x: root, y: 0 }
      }
    };
  }

  // Two distinct roots
  const root1 = (-b + sqrtDisc) / (2 * a);
  const root2 = (-b - sqrtDisc) / (2 * a);

  const isExactDisc = isPerfectSquare(discriminant);

  steps.push({
    rule: 'Two Distinct Roots',
    description: `Since \u0394 = ${formatNumber(discriminant)} > 0, the equation has two distinct real roots.`,
    before: null,
    after: null
  });

  // Try factoring if discriminant is a perfect square and a is integer
  if (isExactDisc && Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
    const sr = Math.round(sqrtDisc);
    // roots are (-b + sr) / (2a) and (-b - sr) / (2a)
    const n1 = -b + sr;
    const n2 = -b - sr;
    const d = 2 * a;
    const f1 = simplifyFraction(n1, d);
    const f2 = simplifyFraction(n2, d);

    // Check if we can express as (px + q)(rx + s) = 0
    // For integer factoring: a*x^2 + b*x + c = a*(x - r1)*(x - r2)
    // Show factored form if roots are rational
    if (f1.den !== 0 && f2.den !== 0) {
      // Build factored form description
      const r1Str = f1.den === 1 ? formatNumber(f1.num) : `${f1.num}/${f1.den}`;
      const r2Str = f2.den === 1 ? formatNumber(f2.num) : `${f2.num}/${f2.den}`;

      // Build factor strings: (den*x - num) for each root
      const buildFactor = (frac) => {
        const d = frac.den;
        const n = frac.num;
        if (d === 1) {
          if (n === 0) return `${varName}`;
          return n > 0 ? `(${varName} \u2212 ${n})` : `(${varName} + ${-n})`;
        }
        if (n === 0) return `(${d}${varName})`;
        return n > 0 ? `(${d}${varName} \u2212 ${n})` : `(${d}${varName} + ${-n})`;
      };

      const leadCoeff = a / (f1.den * f2.den);
      const leadStr = leadCoeff === 1 ? '' : leadCoeff === -1 ? '\u2212' : formatNumber(leadCoeff);

      steps.push({
        rule: 'Factor',
        description: `The equation factors as ${leadStr}${buildFactor(f1)}${buildFactor(f2)} = 0.`,
        before: null,
        after: null
      });
    }
  }

  // Show quadratic formula application
  steps.push({
    rule: 'Apply Quadratic Formula',
    description: `${varName} = (\u2212b \u00B1 \u221A\u0394) / (2a) = (\u2212(${formatNumber(b)}) \u00B1 \u221A${formatNumber(discriminant)}) / (2 \u00B7 ${formatNumber(a)}) = (${formatNumber(-b)} \u00B1 ${formatNumber(sqrtDisc)}) / ${formatNumber(2 * a)}.`,
    before: null,
    after: null
  });

  // Show each root
  const r1Exact = isExactDisc && Number.isInteger((-b + Math.round(sqrtDisc)) / (2 * a));
  const r2Exact = isExactDisc && Number.isInteger((-b - Math.round(sqrtDisc)) / (2 * a));

  steps.push({
    rule: 'First Root',
    description: `${varName}\u2081 = (${formatNumber(-b)} + ${formatNumber(sqrtDisc)}) / ${formatNumber(2 * a)} = ${formatNumber(root1)}`,
    before: null,
    after: {
      type: 'EQUATION',
      left: { type: 'VARIABLE', name: varName + '\u2081' },
      right: { type: 'NUMBER', value: root1 }
    }
  });

  steps.push({
    rule: 'Second Root',
    description: `${varName}\u2082 = (${formatNumber(-b)} \u2212 ${formatNumber(sqrtDisc)}) / ${formatNumber(2 * a)} = ${formatNumber(root2)}`,
    before: null,
    after: {
      type: 'EQUATION',
      left: { type: 'VARIABLE', name: varName + '\u2082' },
      right: { type: 'NUMBER', value: root2 }
    }
  });

  const vertexX = -b / (2 * a);
  const vertexY = c - (b * b) / (4 * a);

  return {
    steps,
    solution: {
      variable: varName,
      value: root1,
      value2: root2,
      multiple: true,
      exact: isExactDisc,
      discriminant
    },
    graphData: {
      type: 'quadratic',
      a, b, c,
      variable: varName,
      roots: [root1, root2],
      vertex: { x: vertexX, y: vertexY }
    }
  };
}

/* =====================================================
   CURSOR STYLES (injected once)
   ===================================================== */

const CURSOR_CSS = `
  @keyframes qe-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .qe-caret {
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background: #fbbf24;
    animation: qe-blink 1s step-end infinite;
    vertical-align: text-bottom;
    margin: 0 -1px;
    border-radius: 1px;
  }
  .qe-display:focus {
    outline: none;
  }
  .qe-display:focus .qe-caret {
    animation: qe-blink 1s step-end infinite;
  }
  .qe-display:not(:focus) .qe-caret {
    opacity: 0.4;
    animation: none;
  }
  .qe-char {
    cursor: text;
    position: relative;
  }
  .qe-char:hover {
    background: rgba(255,255,255,0.08);
    border-radius: 2px;
  }
  .qe-sup-group {
    display: inline;
    cursor: text;
  }
  .qe-form-card,
  .qe-form-card:visited,
  .qe-form-card:active,
  .qe-form-card:focus,
  .qe-form-card:focus-visible,
  .qe-form-card:focus-within {
    outline: none !important;
    box-shadow: none;
    border-color: var(--qe-border-color) !important;
  }
`;

/* =====================================================
   ENGINE COMPONENT (Standalone Solver)
   ===================================================== */

export const QuadraticSolverEngine = forwardRef(({
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

  const pushUndo = useCallback((expr, pos) => {
    setUndoStack(stack => [...stack.slice(-50), { expr, pos }]);
  }, []);

  const undo = useCallback(() => {
    if (undoStack.length === 0) return;
    const prev = undoStack[undoStack.length - 1];
    setUndoStack(stack => stack.slice(0, -1));
    setExpression(prev.expr);
    setCursorPos(prev.pos);
    setResult(null);
    setError(null);
  }, [undoStack]);

  useImperativeHandle(ref, () => ({
    loadEquation: (eqString) => {
      pushUndo(expression, cursorPos);
      const chars = eqString.split('');
      setExpression(chars);
      setCursorPos(chars.length);
      setResult(null);
      setError(null);
      if (onResultChange) onResultChange(null);
    },
    clear: () => {
      pushUndo(expression, cursorPos);
      setExpression([]);
      setCursorPos(0);
      setResult(null);
      setError(null);
      if (onResultChange) onResultChange(null);
    },
    getExpression: () => expression.join(''),
    getResult: () => result
  }));

  const insertAt = useCallback((item) => {
    pushUndo(expression, cursorPos);
    setExpression(prev => {
      const next = [...prev];
      next.splice(cursorPos, 0, item);
      return next;
    });
    setCursorPos(prev => prev + 1);
    setResult(null);
    setError(null);
  }, [cursorPos, expression, pushUndo]);

  const deleteAt = useCallback((pos) => {
    if (pos < 0 || pos >= expression.length) return;
    pushUndo(expression, cursorPos);
    setExpression(prev => {
      const next = [...prev];
      next.splice(pos, 1);
      return next;
    });
    setCursorPos(pos);
    setResult(null);
    setError(null);
  }, [expression, cursorPos, pushUndo]);

  const clearAll = useCallback(() => {
    if (expression.length === 0) return;
    pushUndo(expression, cursorPos);
    setExpression([]);
    setCursorPos(0);
    setResult(null);
    setError(null);
    if (onClear) onClear();
  }, [expression, cursorPos, pushUndo, onClear]);

  const solve = useCallback(() => {
    try {
      const exprString = expression.join('');
      const tokens = tokenize(exprString);
      const ast = parse(tokens);
      const solveResult = solveQuadraticEquation(ast);

      setResult(solveResult);
      setError(null);
      if (onResultChange) onResultChange(solveResult);
    } catch (e) {
      setError(e.message);
      setResult(null);
      if (onResultChange) onResultChange(null);
    }
  }, [expression, onResultChange]);

  const TYPEABLE = new Set('0123456789.xynXYN+-=*/()^×÷²³');
  const KEY_MAP = { '*': '\u00D7', '/': '\u00F7' };

  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'z' || e.key === 'Z') { e.preventDefault(); undo(); }
      return;
    }
    if (e.altKey) return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        setCursorPos(prev => Math.max(0, prev - 1));
        return;
      case 'ArrowRight':
        e.preventDefault();
        setCursorPos(prev => Math.min(expression.length, prev + 1));
        return;
      case 'Home':
        e.preventDefault();
        setCursorPos(0);
        return;
      case 'End':
        e.preventDefault();
        setCursorPos(expression.length);
        return;
      case 'Backspace':
        e.preventDefault();
        if (cursorPos > 0) deleteAt(cursorPos - 1);
        return;
      case 'Delete':
        e.preventDefault();
        if (cursorPos < expression.length) deleteAt(cursorPos);
        return;
      case 'Enter':
        e.preventDefault();
        if (expression.length > 0) solve();
        return;
      default:
        break;
    }

    const ch = KEY_MAP[e.key] || e.key;
    if (ch.length === 1 && TYPEABLE.has(ch)) {
      e.preventDefault();
      insertAt(/[A-Z]/.test(ch) ? ch.toLowerCase() : ch);
    }
  }, [expression.length, cursorPos, deleteAt, insertAt, solve, undo]);

  const handleDisplayClick = useCallback((e) => {
    if (displayRef.current) displayRef.current.focus();
    const charEl = e.target.closest('[data-idx]');
    if (charEl) {
      const idx = parseInt(charEl.getAttribute('data-idx'), 10);
      const rect = charEl.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const midpoint = rect.width / 2;
      setCursorPos(clickX < midpoint ? idx : idx + 1);
    } else {
      setCursorPos(expression.length);
    }
  }, [expression.length]);

  const buildDisplayElements = () => {
    const expr = expression;
    if (expr.length === 0) {
      if (focused) {
        return <span className="qe-caret" />;
      }
      return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
    }

    const elements = [];
    const eStyles = getEngineStyles(darkMode);

    // Pre-compute superscript groups
    const supStarts = new Set();
    for (let i = 0; i < expr.length; i++) {
      if (expr[i] === '^' && i + 1 < expr.length) {
        supStarts.add(i);
      }
    }

    const renderCaret = (pos) => {
      if (cursorPos === pos && focused) {
        return <span key={`caret-${pos}`} className="qe-caret" />;
      }
      return null;
    };

    const charStyle = (ch) => {
      if (ch === '\u00D7' || ch === '\u00F7' || ch === '+' || ch === '-') return eStyles.displayOp;
      if (ch === '=') return eStyles.displayEquals;
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
      if (supStarts.has(i)) {
        // Render ^ and next char(s) as superscript group
        elements.push(renderCaret(i));
        // Skip the ^ itself but make it clickable
        elements.push(
          <span key={`ch-${i}`} className="qe-char" data-idx={i} style={{ fontSize: '0' }}>{expr[i]}</span>
        );
        i++; // move past ^
        // Collect superscript chars (digits, parens, variables)
        const supChars = [];
        while (i < expr.length && /[0-9a-zA-Z.()]/.test(expr[i]) && !supStarts.has(i)) {
          supChars.push({ ch: expr[i], idx: i });
          i++;
          // Only take single token for simple case
          if (supChars.length === 1 && !/[()]/.test(supChars[0].ch)) break;
          if (supChars[supChars.length - 1]?.ch === ')') break;
        }

        elements.push(
          <span key={`sup-${supChars[0]?.idx}`} className="qe-sup-group">
            <sup style={eStyles.displaySup}>
              {supChars.map(sc => (
                <React.Fragment key={`sc-${sc.idx}`}>
                  {renderCaret(sc.idx)}
                  <span className="qe-char" data-idx={sc.idx}>{sc.ch}</span>
                </React.Fragment>
              ))}
              {supChars.length > 0 && renderCaret(supChars[supChars.length - 1].idx + 1)}
            </sup>
          </span>
        );
        continue;
      }

      elements.push(renderCaret(i));
      elements.push(
        <span
          key={`ch-${i}`}
          className="qe-char"
          data-idx={i}
          style={charStyle(expr[i])}
        >
          {displayChar(expr[i])}
        </span>
      );
      i++;
    }

    // Final caret only if not already rendered by sup group
    if (!supStarts.has(expr.length - 1) || expr[expr.length - 1] === '^') {
      elements.push(renderCaret(expression.length));
    }

    return elements;
  };

  const p = compact ? 0.85 : 1;
  const styles = getEngineStyles(darkMode);

  return (
    <div style={{ ...styles.container, ...style }}>
      <style>{CURSOR_CSS}</style>

      <div
        ref={displayRef}
        className="qe-display"
        tabIndex={0}
        style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px`, cursor: 'text' }}
        onClick={handleDisplayClick}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {buildDisplayElements()}
      </div>

      {error && (
        <div style={styles.error}>{error}</div>
      )}

      <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
        <div style={styles.row}>
          <span style={styles.label}>Var</span>
          <div style={styles.btnGroup}>
            {variables.map((v) => (
              <button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => insertAt(v)}>{v}</button>
            ))}
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Num</span>
          <div style={styles.btnGroup}>
            {numbers.map((n) => (
              <button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => insertAt(n)}>{n}</button>
            ))}
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Op</span>
          <div style={styles.btnGroup}>
            {operators.map((op) => (
              <button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>{op}</button>
            ))}
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.label}></span>
          <div style={styles.btnGroup}>
            <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('^')}>^</button>
            <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => { insertAt('^'); insertAt('2'); }}>x{'\u00B2'}</button>
            <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt('(')}>{'('}</button>
            <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt(')')}>{')'}</button>
          </div>
        </div>

        <div style={styles.actions}>
          <button style={{ ...styles.btnAction, ...styles.btnClear }} onClick={clearAll}>Clear</button>
          <button
            style={{ ...styles.btnAction, ...styles.btnUndo, ...(undoStack.length === 0 ? styles.btnUndoDisabled : {}) }}
            onClick={undo}
            disabled={undoStack.length === 0}
            title="Undo (Ctrl+Z)"
          >{'\u21B6'}</button>
          <button style={{ ...styles.btnAction, ...styles.btnBack }} onClick={() => { if (cursorPos > 0) deleteAt(cursorPos - 1); }}>{'\u232B'}</button>
          <button
            style={{ ...styles.btnAction, ...styles.btnSolve, ...(expression.length === 0 ? styles.btnDisabled : {}) }}
            onClick={solve}
            disabled={expression.length === 0}
          >
            Solve
          </button>
        </div>
      </div>

      {result && result.solution && (
        <div style={styles.solution}>
          {result.solution.noSolution ? (
            <span>No real solutions (\u0394 &lt; 0)</span>
          ) : result.solution.repeated ? (
            <span>
              <span style={styles.solVar}>{result.solution.variable}</span>
              <span style={styles.solEq}> = </span>
              <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
              <span style={styles.solApprox}> (repeated)</span>
            </span>
          ) : result.solution.multiple ? (
            <span>
              <span style={styles.solVar}>{result.solution.variable}</span>
              <span style={styles.solEq}> = </span>
              <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
              <span style={styles.solEq}> or </span>
              <span style={styles.solNum}>{formatNumber(result.solution.value2)}</span>
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
});

QuadraticSolverEngine.displayName = 'QuadraticSolverEngine';

const getEngineStyles = (darkMode) => ({
  container: {
    background: darkMode ? '#1e293b' : '#fff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
  },
  display: {
    background: darkMode
      ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
      : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '12px',
    padding: '18px 22px',
    minHeight: '54px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    fontSize: '1.4rem',
    color: '#fff',
    fontWeight: '500',
  },
  placeholder: {
    color: 'rgba(255,255,255,0.5)',
    fontStyle: 'italic',
    fontSize: '0.95rem',
  },
  displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
  displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
  displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px', verticalAlign: 'super', position: 'relative', top: '-0.4em' },
  error: {
    background: darkMode ? '#451a1a' : '#fef2f2',
    border: darkMode ? '1px solid #7f1d1d' : '1px solid #fecaca',
    borderRadius: '8px',
    padding: '10px 14px',
    marginBottom: '12px',
    color: darkMode ? '#fca5a5' : '#dc2626',
    fontSize: '0.85rem',
  },
  builder: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  label: {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: darkMode ? '#64748b' : '#94a3b8',
    width: '28px',
    flexShrink: 0,
    fontWeight: '600',
  },
  btnGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  btn: {
    fontSize: '0.95rem',
    padding: '8px 12px',
    border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
    background: darkMode ? '#334155' : '#f8fafc',
    color: darkMode ? '#e2e8f0' : '#334155',
    cursor: 'pointer',
    borderRadius: '8px',
    minWidth: '36px',
    fontFamily: 'inherit',
    fontWeight: '500',
    transition: 'all 0.15s',
  },
  btnVar: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600' },
  btnNum: { color: darkMode ? '#f1f5f9' : '#1e293b' },
  btnOp: { color: darkMode ? '#cbd5e1' : '#64748b', fontWeight: '600' },
  btnSpecial: { color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600' },
  btnBracket: { fontSize: '1.1rem', color: darkMode ? '#94a3b8' : '#64748b' },
  actions: {
    display: 'flex',
    gap: '8px',
    marginTop: '6px',
    paddingTop: '14px',
    borderTop: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
  },
  btnAction: {
    fontSize: '0.85rem',
    fontWeight: '600',
    padding: '12px 18px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '8px',
    fontFamily: 'inherit',
    transition: 'all 0.15s',
  },
  btnClear: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
  btnUndo: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b', fontSize: '1.1rem', padding: '12px 14px' },
  btnUndoDisabled: { opacity: 0.4, cursor: 'not-allowed' },
  btnBack: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
  btnSolve: {
    background: darkMode
      ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
      : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    color: '#fff',
    marginLeft: 'auto',
    padding: '12px 24px',
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
  },
  btnDisabled: { background: darkMode ? '#475569' : '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
  solution: {
    marginTop: '16px',
    padding: '14px 18px',
    background: darkMode
      ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
      : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#fff',
  },
  solVar: { fontStyle: 'italic' },
  solEq: { opacity: 0.8, margin: '0 6px' },
  solNum: { color: '#fbbf24' },
  solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
});

/* =====================================================
   EQUATION FORM GENERATORS
   ===================================================== */

const equationForms = [
  {
    id: 'standard',
    name: 'Standard Form',
    formula: 'ax\u00B2 + bx + c = 0',
    generate: (nice) => {
      if (nice) {
        const r1 = Math.floor(Math.random() * 11) - 5;
        const r2 = Math.floor(Math.random() * 11) - 5;
        const a = 1;
        const b = -(r1 + r2);
        const c = r1 * r2;
        return `x^2${b >= 0 ? '+' + b : b}\u00D7x${c >= 0 ? '+' + c : c}=0`;
      }
      const a = [1, 2, 3][Math.floor(Math.random() * 3)];
      const b = Math.floor(Math.random() * 21) - 10;
      const c = Math.floor(Math.random() * 21) - 10;
      return `${a === 1 ? '' : a}\u00D7x^2${b >= 0 ? '+' + b : b}\u00D7x${c >= 0 ? '+' + c : c}=0`;
    }
  },
  {
    id: 'missing-b',
    name: 'Missing b Term',
    formula: 'ax\u00B2 + c = 0',
    generate: (nice) => {
      if (nice) {
        const r = Math.floor(Math.random() * 7) + 1;
        return `x^2-${r * r}=0`;
      }
      const a = [1, 2, 3][Math.floor(Math.random() * 3)];
      const c = -(Math.floor(Math.random() * 20) + 1);
      return `${a === 1 ? '' : a + '\u00D7'}x^2${c >= 0 ? '+' + c : c}=0`;
    }
  },
  {
    id: 'missing-c',
    name: 'Missing c Term',
    formula: 'ax\u00B2 + bx = 0',
    generate: (nice) => {
      const a = [1, 2][Math.floor(Math.random() * 2)];
      const b = Math.floor(Math.random() * 12) - 6;
      if (b === 0) return `x^2=0`;
      return `${a === 1 ? '' : a + '\u00D7'}x^2${b >= 0 ? '+' + b : b}\u00D7x=0`;
    }
  },
  {
    id: 'perfect-square',
    name: 'Perfect Square',
    formula: 'x\u00B2 + 2ax + a\u00B2 = 0',
    generate: (nice) => {
      const r = Math.floor(Math.random() * 9) - 4;
      const b = -2 * r;
      const c = r * r;
      return `x^2${b >= 0 ? '+' + b : b}\u00D7x+${c}=0`;
    }
  },
  {
    id: 'difference-squares',
    name: 'Difference of Squares',
    formula: 'x\u00B2 \u2212 a\u00B2 = 0',
    generate: () => {
      const a = Math.floor(Math.random() * 10) + 1;
      return `x^2-${a * a}=0`;
    }
  },
  {
    id: 'leading-coeff',
    name: 'Leading Coeff \u2260 1',
    formula: 'ax\u00B2 + bx + c = 0',
    generate: (nice) => {
      if (nice) {
        const a = [2, 3, 4][Math.floor(Math.random() * 3)];
        const r1 = Math.floor(Math.random() * 7) - 3;
        const r2 = Math.floor(Math.random() * 7) - 3;
        const b = -a * (r1 + r2);
        const c = a * r1 * r2;
        return `${a}\u00D7x^2${b >= 0 ? '+' + b : b}\u00D7x${c >= 0 ? '+' + c : c}=0`;
      }
      const a = [2, 3, 5][Math.floor(Math.random() * 3)];
      const b = Math.floor(Math.random() * 21) - 10;
      const c = Math.floor(Math.random() * 21) - 10;
      return `${a}\u00D7x^2${b >= 0 ? '+' + b : b}\u00D7x${c >= 0 ? '+' + c : c}=0`;
    }
  },
  {
    id: 'no-real-roots',
    name: 'No Real Roots',
    formula: 'x\u00B2 + c = 0 (c > 0)',
    generate: () => {
      const c = Math.floor(Math.random() * 15) + 1;
      const b = Math.floor(Math.random() * 5);
      if (b === 0) return `x^2+${c}=0`;
      return `x^2+${b}\u00D7x+${Math.ceil((b * b) / 4) + 1 + Math.floor(Math.random() * 5)}=0`;
    }
  },
  {
    id: 'non-zero-rhs',
    name: 'Non-Zero RHS',
    formula: 'x\u00B2 + bx = c',
    generate: (nice) => {
      if (nice) {
        const r1 = Math.floor(Math.random() * 9) - 4;
        const r2 = Math.floor(Math.random() * 9) - 4;
        const b = -(r1 + r2);
        const c = r1 * r2;
        return `x^2${b >= 0 ? '+' + b : b}\u00D7x=${-c}`;
      }
      const b = Math.floor(Math.random() * 13) - 6;
      const c = Math.floor(Math.random() * 20) + 1;
      return `x^2${b >= 0 ? '+' + b : b}\u00D7x=${c}`;
    }
  },
];

/* =====================================================
   WRAPPER COMPONENT (Full Educational Version)
   ===================================================== */

const QuadraticEquationSolver = () => {
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
    if (engineRef.current) {
      engineRef.current.loadEquation(equation);
    }
  };

  const handleResultChange = (result) => {
    setSolveResult(result);
  };

  const handleClear = () => {
    setSelectedForm(null);
    setSolveResult(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const wStyles = getWrapperStyles(darkMode);

  const renderStepContent = (step, index) => {
    if (!step.before && !step.after) return null;
    return (
      <div>
        {step.before && (
          <div style={wStyles.stepMath}>
            {astToMathDisplay(step.before, `before-${index}`, darkMode)}
          </div>
        )}
        {step.after && (
          <div style={wStyles.stepTransform}>
            <span style={wStyles.arrow}>{'\u27F9'}</span>
            <div style={wStyles.stepMath}>
              {astToMathDisplay(step.after, `after-${index}`, darkMode)}
            </div>
          </div>
        )}
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
          <div style={wStyles.answerNote}>{'\u0394'} = {formatNumber(sol.discriminant)} &lt; 0 &mdash; the parabola does not cross the x-axis</div>
        </div>
      );
    }

    if (sol.repeated) {
      return (
        <div style={wStyles.finalAnswer}>
          <div style={wStyles.answerLabel}>Answer</div>
          <div style={wStyles.answerValue}>
            <span style={wStyles.answerVar}>{sol.variable}</span>
            <span style={wStyles.answerEq}> = </span>
            <span style={wStyles.answerNum}>{formatNumber(sol.value)}</span>
          </div>
          <div style={wStyles.answerNote}>
            {sol.exact ? '\u2713 Exact' : '\u2248 Approximate'} &mdash; repeated root (\u0394 = 0)
          </div>
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
          <div style={wStyles.answerNote}>
            {sol.exact ? '\u2713 Exact solutions' : '\u2248 Approximate values'} &mdash; \u0394 = {formatNumber(sol.discriminant)}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div style={wStyles.container}>
      <style>{THEME_CSS}</style>
      <div style={wStyles.inner}>

        <header style={wStyles.header}>
          <button style={wStyles.themeToggle} onClick={toggleDarkMode}>
            {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
          </button>
          <div style={wStyles.iconWrap}>
            <span style={wStyles.icon}>x{'\u00B2'}</span>
          </div>
          <h1 style={wStyles.title}>Quadratic Equation Solver</h1>
          <p style={wStyles.subtitle}>Solve quadratic equations step by step</p>
        </header>

        <div style={wStyles.main}>

          <div style={wStyles.leftCol}>

            <QuadraticSolverEngine
              ref={engineRef}
              onResultChange={handleResultChange}
              onClear={handleClear}
              darkMode={darkMode}
              compact={true}
            />

            <div style={wStyles.formsSection}>
              <button
                style={wStyles.accordionHeader}
                onClick={() => setExamplesOpen(!examplesOpen)}
              >
                <span style={wStyles.sectionTitle}>Try an Example</span>
                <span style={wStyles.chevron}>{examplesOpen ? '\u25B2' : '\u25BC'}</span>
              </button>

              {examplesOpen && (
                <div style={wStyles.accordionContent}>
                  <p style={wStyles.formsHint}>Click any type to generate a random equation. Click again for a new one!</p>
                  <div style={wStyles.formsGrid}>
                    {equationForms.map((form) => (
                      <button
                        key={form.id}
                        className="qe-form-card"
                        style={{
                          ...wStyles.formCard,
                          ...(selectedForm === form.id ? wStyles.formCardSelected : {})
                        }}
                        onClick={() => handleFormClick(form)}
                      >
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
              placeholder="Select an equation type or enter your own quadratic equation, then click Solve to see the step-by-step solution."
              stepsTitle="Solution Steps"
              renderStepContent={renderStepContent}
              stepCardClass={() => ''}
            />

            {renderFinalAnswer()}
          </div>
        </div>
      </div>
    </div>
  );
};

const getWrapperStyles = (darkMode) => ({
  container: {
    minHeight: '100vh',
    background: darkMode
      ? '#0f172a'
      : 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: darkMode ? '#e2e8f0' : '#1e3a5f',
    padding: '30px 20px',
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '24px',
    position: 'relative',
  },
  iconWrap: {
    width: '50px',
    height: '50px',
    background: darkMode
      ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
      : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '14px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '12px',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
  },
  icon: {
    color: '#fff',
    fontSize: '20px',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  title: {
    fontSize: '1.7rem',
    fontWeight: '700',
    color: darkMode ? '#e2e8f0' : '#1e3a5f',
    margin: '0 0 6px 0',
  },
  subtitle: {
    fontSize: '0.95rem',
    color: darkMode ? '#94a3b8' : '#64748b',
    margin: 0,
  },
  themeToggle: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    border: 'none',
    background: darkMode ? '#334155' : '#fff',
    cursor: 'pointer',
    fontSize: '1.3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: darkMode ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'all 0.2s',
  },
  main: {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
  },
  leftCol: {
    flex: '1 1 50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  rightCol: {
    flex: '1 1 50%',
    background: darkMode ? '#1e293b' : '#fff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
    minHeight: '500px',
  },
  formsSection: {
    background: darkMode ? '#1e293b' : '#fff',
    borderRadius: '16px',
    boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
  },
  accordionHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  sectionTitle: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: darkMode ? '#94a3b8' : '#64748b',
    fontWeight: '600',
  },
  chevron: {
    fontSize: '0.75rem',
    color: darkMode ? '#64748b' : '#94a3b8',
  },
  accordionContent: {
    padding: '0 16px 16px',
  },
  formsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px',
  },
  formsHint: {
    fontSize: '0.8rem',
    color: darkMode ? '#64748b' : '#94a3b8',
    margin: '0 0 10px 0',
    fontStyle: 'italic',
  },
  formCard: {
    '--qe-border-color': darkMode ? '#475569' : '#e2e8f0',
    background: darkMode ? '#334155' : '#f8fafc',
    border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0',
    borderRadius: '10px',
    padding: '10px 12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'left',
    fontFamily: 'inherit',
  },
  formCardSelected: {
    '--qe-border-color': '#3b82f6',
    borderColor: '#3b82f6',
    background: darkMode ? '#1e3a5f' : '#eff6ff',
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)',
  },
  formName: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: darkMode ? '#e2e8f0' : '#1e3a5f',
    marginBottom: '2px',
  },
  formFormula: {
    fontSize: '0.9rem',
    color: darkMode ? '#60a5fa' : '#3b82f6',
    fontFamily: 'ui-monospace, monospace',
  },
  stepMath: {
    fontSize: '1.05rem',
    color: darkMode ? '#e2e8f0' : '#1e3a5f',
    background: darkMode ? '#334155' : '#fff',
    padding: '10px 14px',
    borderRadius: '8px',
    display: 'inline-block',
    border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
  },
  stepTransform: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '8px',
  },
  arrow: {
    color: '#3b82f6',
    fontSize: '1.1rem',
  },
  finalAnswer: {
    background: darkMode
      ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
      : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '12px',
    padding: '18px 20px',
    color: '#fff',
    textAlign: 'center',
    marginTop: '16px',
  },
  answerLabel: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    opacity: 0.8,
    marginBottom: '6px',
    fontWeight: '600',
  },
  answerValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  answerVar: { fontStyle: 'italic' },
  answerEq: { opacity: 0.8, margin: '0 6px' },
  answerNum: { color: '#fbbf24' },
  answerOr: { opacity: 0.7, margin: '0 8px', fontSize: '1rem' },
  answerNote: {
    fontSize: '0.8rem',
    opacity: 0.75,
    marginTop: '6px',
  },
});

export default QuadraticEquationSolver;