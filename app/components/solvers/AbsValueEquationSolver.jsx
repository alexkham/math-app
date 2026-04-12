import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import SolutionPanel from './SolutionPanel';
import THEME_CSS from './MathSolverThemes';

/* =====================================================
   ABSOLUTE VALUE EQUATION SOLVER
   
   Two exports:
   - AbsValueSolverEngine: Standalone solver component
   - AbsValueEquationSolver: Full educational wrapper (default)
   
   Features:
   - |expr| = c splitting into two cases
   - |expr| = |expr| handling
   - No solution when |expr| = negative
   - Nested absolute values
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
  ABS_BAR: 'ABS_BAR',
};

function tokenize(input) {
  const tokens = [];
  let i = 0;

  while (i < input.length) {
    const char = input[i];

    if (/\s/.test(char)) { i++; continue; }

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

    if (char === '|') { tokens.push({ type: TokenType.ABS_BAR }); i++; continue; }

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
    if (token?.type === TokenType.ABS_BAR) {
      consume(); // opening |
      const expr = parseExpression();
      consume(TokenType.ABS_BAR); // closing |
      return { type: 'ABS', argument: expr };
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
  if (node.type === 'ABS') return containsVariable(node.argument);
  if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
  return containsVariable(node.left) || containsVariable(node.right);
}

function evaluateConstant(node) {
  if (!node) return null;
  switch (node.type) {
    case 'NUMBER': return node.value;
    case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
    case 'ABS': { const v = evaluateConstant(node.argument); return v !== null ? Math.abs(v) : null; }
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
  if (node.type === 'ABS') return getVariable(node.argument);
  if (node.left) { const v = getVariable(node.left); if (v !== 'x' || !node.right) return v; }
  if (node.right) return getVariable(node.right);
  if (node.operand) return getVariable(node.operand);
  if (node.base) return getVariable(node.base);
  return 'x';
}

function containsAbs(node) {
  if (!node) return false;
  if (node.type === 'ABS') return true;
  if (node.type === 'NEGATE') return containsAbs(node.operand);
  return containsAbs(node.left) || containsAbs(node.right) || containsAbs(node.operand) || containsAbs(node.base) || containsAbs(node.argument);
}

// Collect linear terms: { coeff, constant } for ax + b
function collectLinearTerms(node, varName) {
  if (!node) return { coeff: 0, constant: 0 };
  switch (node.type) {
    case 'NUMBER': return { coeff: 0, constant: node.value };
    case 'VARIABLE': return node.name === varName ? { coeff: 1, constant: 0 } : { coeff: 0, constant: 0 };
    case 'NEGATE': { const inner = collectLinearTerms(node.operand, varName); if (!inner) return null; return { coeff: -inner.coeff, constant: -inner.constant }; }
    case 'ADD': { const l = collectLinearTerms(node.left, varName); const r = collectLinearTerms(node.right, varName); if (!l || !r) return null; return { coeff: l.coeff + r.coeff, constant: l.constant + r.constant }; }
    case 'SUBTRACT': { const l = collectLinearTerms(node.left, varName); const r = collectLinearTerms(node.right, varName); if (!l || !r) return null; return { coeff: l.coeff - r.coeff, constant: l.constant - r.constant }; }
    case 'MULTIPLY': {
      const lConst = evaluateConstant(node.left); const rConst = evaluateConstant(node.right);
      if (lConst !== null && containsVariable(node.right)) { const r = collectLinearTerms(node.right, varName); if (!r) return null; return { coeff: lConst * r.coeff, constant: lConst * r.constant }; }
      if (rConst !== null && containsVariable(node.left)) { const l = collectLinearTerms(node.left, varName); if (!l) return null; return { coeff: rConst * l.coeff, constant: rConst * l.constant }; }
      if (lConst !== null && rConst !== null) return { coeff: 0, constant: lConst * rConst };
      return null;
    }
    case 'DIVIDE': {
      const divisor = evaluateConstant(node.right);
      if (divisor !== null && divisor !== 0) { const l = collectLinearTerms(node.left, varName); if (l) return { coeff: l.coeff / divisor, constant: l.constant / divisor }; }
      return null;
    }
    default: return null;
  }
}

function solveLinear(coeff, constant, rhs) {
  // coeff * x + constant = rhs → x = (rhs - constant) / coeff
  if (Math.abs(coeff) < 1e-10) return null;
  return (rhs - constant) / coeff;
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
    case 'ABS': return <span key={key} style={s.abs}><span style={s.absBar}>|</span>{astToMathDisplay(node.argument, `${key}-arg`, darkMode)}<span style={s.absBar}>|</span></span>;
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
  abs: { display: 'inline' },
  absBar: { color: '#f59e0b', fontWeight: '700', margin: '0 1px' },
});

/* =====================================================
   SOLVER
   ===================================================== */

function solveAbsoluteValueEquation(ast) {
  const steps = [];

  if (ast.type !== 'EQUATION') {
    throw new Error('Input must be an equation (use = sign)');
  }

  let { left, right } = ast;

  // Determine which side has the absolute value
  const leftHasAbs = containsAbs(left);
  const rightHasAbs = containsAbs(right);

  if (!leftHasAbs && !rightHasAbs) {
    throw new Error('No absolute value found. Use | symbols around the expression.');
  }

  const varName = getVariable(left) !== 'x' ? getVariable(left) : getVariable(right);

  // Case: |expr| = |expr| — both sides have abs
  if (leftHasAbs && rightHasAbs && left.type === 'ABS' && right.type === 'ABS') {
    steps.push({
      rule: 'Absolute Value on Both Sides',
      description: 'If |A| = |B|, then A = B or A = \u2212B.',
      before: ast,
      after: null
    });

    const innerLeft = left.argument;
    const innerRight = right.argument;
    const solutions = [];

    // Case 1: A = B
    const leftTerms1 = collectLinearTerms(innerLeft, varName);
    const rightTerms1 = collectLinearTerms(innerRight, varName);

    if (leftTerms1 && rightTerms1) {
      const netCoeff = leftTerms1.coeff - rightTerms1.coeff;
      const netConst = rightTerms1.constant - leftTerms1.constant;
      const sol1 = Math.abs(netCoeff) > 1e-10 ? netConst / netCoeff : null;

      steps.push({
        rule: 'Case 1: A = B',
        description: sol1 !== null ? `Solving gives ${varName} = ${formatNumber(sol1)}.` : 'This case yields no solution (or identity).',
        before: { type: 'EQUATION', left: innerLeft, right: innerRight },
        after: sol1 !== null ? { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: sol1 } } : null
      });

      if (sol1 !== null) solutions.push(sol1);
    }

    // Case 2: A = -B
    const negRight = { type: 'NEGATE', operand: innerRight };
    const rightTerms2 = collectLinearTerms(innerRight, varName);
    if (leftTerms1 && rightTerms2) {
      const netCoeff2 = leftTerms1.coeff + rightTerms2.coeff;
      const netConst2 = -rightTerms2.constant - leftTerms1.constant;
      const sol2 = Math.abs(netCoeff2) > 1e-10 ? netConst2 / netCoeff2 : null;

      steps.push({
        rule: 'Case 2: A = \u2212B',
        description: sol2 !== null ? `Solving gives ${varName} = ${formatNumber(sol2)}.` : 'This case yields no solution (or identity).',
        before: { type: 'EQUATION', left: innerLeft, right: negRight },
        after: sol2 !== null ? { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: sol2 } } : null
      });

      if (sol2 !== null && !solutions.some(s => Math.abs(s - sol2) < 1e-10)) solutions.push(sol2);
    }

    if (solutions.length === 0) {
      return { steps, solution: { variable: varName, value: null, noSolution: true }, graphData: null };
    }
    if (solutions.length === 1) {
      return {
        steps,
        solution: { variable: varName, value: solutions[0], exact: Number.isInteger(solutions[0]) },
        graphData: null
      };
    }
    return {
      steps,
      solution: { variable: varName, value: solutions[0], value2: solutions[1], multiple: true, exact: solutions.every(s => Number.isInteger(s)) },
      graphData: null
    };
  }

  // Ensure abs side is on left
  let absSide = left;
  let otherSide = right;

  if (!leftHasAbs && rightHasAbs) {
    absSide = right;
    otherSide = left;
    steps.push({
      rule: 'Rearrange',
      description: 'Move the absolute value expression to the left side.',
      before: ast,
      after: { type: 'EQUATION', left: absSide, right: otherSide }
    });
  }

  // Handle coefficient or additive outside abs: a|expr| + b = c → |expr| = (c - b) / a
  let absNode = null;
  let absCoeff = 1;
  let absAdditive = 0;

  if (absSide.type === 'ABS') {
    absNode = absSide;
  } else if (absSide.type === 'MULTIPLY') {
    const lConst = evaluateConstant(absSide.left);
    const rConst = evaluateConstant(absSide.right);
    if (lConst !== null && absSide.right.type === 'ABS') { absCoeff = lConst; absNode = absSide.right; }
    else if (rConst !== null && absSide.left.type === 'ABS') { absCoeff = rConst; absNode = absSide.left; }
  } else if (absSide.type === 'ADD' || absSide.type === 'SUBTRACT') {
    // Check for abs + constant or constant + abs
    if (absSide.left.type === 'ABS' || (absSide.left.type === 'MULTIPLY' && containsAbs(absSide.left))) {
      const addVal = evaluateConstant(absSide.right);
      if (addVal !== null) {
        absAdditive = absSide.type === 'ADD' ? addVal : -addVal;
        const innerAbs = absSide.left;
        if (innerAbs.type === 'ABS') { absNode = innerAbs; }
        else if (innerAbs.type === 'MULTIPLY') {
          const lc = evaluateConstant(innerAbs.left);
          const rc = evaluateConstant(innerAbs.right);
          if (lc !== null && innerAbs.right.type === 'ABS') { absCoeff = lc; absNode = innerAbs.right; }
          else if (rc !== null && innerAbs.left.type === 'ABS') { absCoeff = rc; absNode = innerAbs.left; }
        }
      }
    } else if (absSide.right.type === 'ABS' || (absSide.right.type === 'MULTIPLY' && containsAbs(absSide.right))) {
      const addVal = evaluateConstant(absSide.left);
      if (addVal !== null) {
        absAdditive = addVal; // left + |...| form, always addition
        const innerAbs = absSide.right;
        if (innerAbs.type === 'ABS') { absNode = innerAbs; }
      }
    }
  }

  if (!absNode) {
    throw new Error('Could not isolate the absolute value expression. Ensure the equation has the form |expr| = c or a|expr| + b = c.');
  }

  // Compute the RHS value for |expr| = rhs
  const otherVal = evaluateConstant(otherSide);
  if (otherVal === null && !containsVariable(otherSide)) {
    throw new Error('The right side must be a constant or simplifiable expression.');
  }

  let rhsVal = null;
  if (otherVal !== null) {
    rhsVal = (otherVal - absAdditive) / absCoeff;
  }

  // Show isolation steps if needed
  if (absAdditive !== 0) {
    steps.push({
      rule: 'Isolate Absolute Value',
      description: `Subtract ${formatNumber(absAdditive)} from both sides.`,
      before: null,
      after: absCoeff !== 1
        ? { type: 'EQUATION', left: { type: 'MULTIPLY', left: { type: 'NUMBER', value: absCoeff }, right: absNode }, right: { type: 'NUMBER', value: (otherVal - absAdditive) } }
        : { type: 'EQUATION', left: absNode, right: { type: 'NUMBER', value: rhsVal } }
    });
  }

  if (absCoeff !== 1 && absAdditive === 0) {
    steps.push({
      rule: 'Isolate Absolute Value',
      description: `Divide both sides by ${formatNumber(absCoeff)}.`,
      before: null,
      after: { type: 'EQUATION', left: absNode, right: { type: 'NUMBER', value: rhsVal } }
    });
  } else if (absCoeff !== 1 && absAdditive !== 0) {
    steps.push({
      rule: 'Divide by Coefficient',
      description: `Divide both sides by ${formatNumber(absCoeff)}.`,
      before: null,
      after: { type: 'EQUATION', left: absNode, right: { type: 'NUMBER', value: rhsVal } }
    });
  }

  // Check if RHS is negative
  if (rhsVal !== null && rhsVal < 0) {
    steps.push({
      rule: 'No Solution',
      description: `|expression| = ${formatNumber(rhsVal)} has no solution because absolute value cannot be negative.`,
      before: null,
      after: null
    });
    return { steps, solution: { variable: varName, value: null, noSolution: true }, graphData: null };
  }

  // Check if RHS is zero
  if (rhsVal !== null && Math.abs(rhsVal) < 1e-10) {
    steps.push({
      rule: 'Zero Case',
      description: '|expression| = 0 means the expression inside equals zero.',
      before: null,
      after: { type: 'EQUATION', left: absNode.argument, right: { type: 'NUMBER', value: 0 } }
    });

    const innerTerms = collectLinearTerms(absNode.argument, varName);
    if (innerTerms && Math.abs(innerTerms.coeff) > 1e-10) {
      const sol = -innerTerms.constant / innerTerms.coeff;
      steps.push({
        rule: 'Solve',
        description: `${varName} = ${formatNumber(sol)}`,
        before: null,
        after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: sol } }
      });
      return { steps, solution: { variable: varName, value: sol, exact: Number.isInteger(sol) }, graphData: null };
    }
    throw new Error('Could not solve the inner expression.');
  }

  // Standard two-case split: |A| = c → A = c or A = -c
  if (rhsVal === null) {
    throw new Error('The right side must simplify to a number.');
  }

  steps.push({
    rule: 'Split into Two Cases',
    description: `If |A| = ${formatNumber(rhsVal)}, then A = ${formatNumber(rhsVal)} or A = ${formatNumber(-rhsVal)}.`,
    before: { type: 'EQUATION', left: absNode, right: { type: 'NUMBER', value: rhsVal } },
    after: null
  });

  const innerTerms = collectLinearTerms(absNode.argument, varName);
  if (!innerTerms) {
    throw new Error('The expression inside the absolute value must be linear.');
  }

  const solutions = [];

  // Case 1: inner = rhsVal
  const sol1 = solveLinear(innerTerms.coeff, innerTerms.constant, rhsVal);
  if (sol1 !== null) {
    solutions.push(sol1);
    steps.push({
      rule: 'Case 1: Positive',
      description: `Set the expression equal to ${formatNumber(rhsVal)} and solve: ${varName} = ${formatNumber(sol1)}.`,
      before: { type: 'EQUATION', left: absNode.argument, right: { type: 'NUMBER', value: rhsVal } },
      after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: sol1 } }
    });
  }

  // Case 2: inner = -rhsVal
  const sol2 = solveLinear(innerTerms.coeff, innerTerms.constant, -rhsVal);
  if (sol2 !== null) {
    solutions.push(sol2);
    steps.push({
      rule: 'Case 2: Negative',
      description: `Set the expression equal to ${formatNumber(-rhsVal)} and solve: ${varName} = ${formatNumber(sol2)}.`,
      before: { type: 'EQUATION', left: absNode.argument, right: { type: 'NUMBER', value: -rhsVal } },
      after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: sol2 } }
    });
  }

  // Verification step
  if (solutions.length === 2) {
    steps.push({
      rule: 'Verify Both Solutions',
      description: `Check: |${formatNumber(innerTerms.coeff)}(${formatNumber(sol1)}) + ${formatNumber(innerTerms.constant)}| = |${formatNumber(innerTerms.coeff * sol1 + innerTerms.constant)}| = ${formatNumber(Math.abs(innerTerms.coeff * sol1 + innerTerms.constant))} \u2713. |${formatNumber(innerTerms.coeff)}(${formatNumber(sol2)}) + ${formatNumber(innerTerms.constant)}| = |${formatNumber(innerTerms.coeff * sol2 + innerTerms.constant)}| = ${formatNumber(Math.abs(innerTerms.coeff * sol2 + innerTerms.constant))} \u2713.`,
      before: null,
      after: null
    });
  }

  if (solutions.length === 0) {
    return { steps, solution: { variable: varName, value: null, noSolution: true }, graphData: null };
  }

  if (solutions.length === 1 || (solutions.length === 2 && Math.abs(solutions[0] - solutions[1]) < 1e-10)) {
    return {
      steps,
      solution: { variable: varName, value: solutions[0], exact: Number.isInteger(solutions[0]) },
      graphData: null
    };
  }

  return {
    steps,
    solution: {
      variable: varName,
      value: solutions[0],
      value2: solutions[1],
      multiple: true,
      exact: solutions.every(s => Number.isInteger(s))
    },
    graphData: null
  };
}

/* =====================================================
   CURSOR STYLES
   ===================================================== */

const CURSOR_CSS = `
  @keyframes av-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  .av-caret { display: inline-block; width: 2px; height: 1.2em; background: #fbbf24; animation: av-blink 1s step-end infinite; vertical-align: text-bottom; margin: 0 -1px; border-radius: 1px; }
  .av-display:focus { outline: none; }
  .av-display:focus .av-caret { animation: av-blink 1s step-end infinite; }
  .av-display:not(:focus) .av-caret { opacity: 0.4; animation: none; }
  .av-char { cursor: text; position: relative; }
  .av-char:hover { background: rgba(255,255,255,0.08); border-radius: 2px; }
  .av-sup-group { display: inline; cursor: text; }
  .av-form-card, .av-form-card:visited, .av-form-card:active, .av-form-card:focus, .av-form-card:focus-visible, .av-form-card:focus-within { outline: none !important; box-shadow: none; border-color: var(--av-border-color) !important; }
`;

/* =====================================================
   ENGINE COMPONENT
   ===================================================== */

export const AbsValueSolverEngine = forwardRef(({
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
    setExpression(prev => { const next = [...prev]; next.splice(cursorPos, 0, item); return next; });
    setCursorPos(prev => prev + 1); setResult(null); setError(null);
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
      const solveResult = solveAbsoluteValueEquation(ast);
      setResult(solveResult); setError(null);
      if (onResultChange) onResultChange(solveResult);
    } catch (e) {
      setError(e.message); setResult(null);
      if (onResultChange) onResultChange(null);
    }
  }, [expression, onResultChange]);

  const TYPEABLE = new Set('0123456789.xynXYN+-=*/()|\u00D7\u00F7');
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
      if (focused) return <span className="av-caret" />;
      return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
    }
    const elements = [];
    const eStyles = getEngineStyles(darkMode);

    const renderCaret = (pos) => (cursorPos === pos && focused) ? <span key={`caret-${pos}`} className="av-caret" /> : null;

    const charStyle = (ch) => {
      if (ch === '\u00D7' || ch === '\u00F7' || ch === '+' || ch === '-') return eStyles.displayOp;
      if (ch === '=') return eStyles.displayEquals;
      if (ch === '|') return eStyles.displayAbs;
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

    for (let i = 0; i < expr.length; i++) {
      elements.push(renderCaret(i));
      elements.push(<span key={`ch-${i}`} className="av-char" data-idx={i} style={charStyle(expr[i])}>{displayChar(expr[i])}</span>);
    }
    elements.push(renderCaret(expression.length));
    return elements;
  };

  const p = compact ? 0.85 : 1;
  const styles = getEngineStyles(darkMode);

  return (
    <div style={{ ...styles.container, ...style }}>
      <style>{CURSOR_CSS}</style>
      <div ref={displayRef} className="av-display" tabIndex={0}
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
          <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('|')}>| |</button>
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
          {result.solution.noSolution ? (
            <span>No solution</span>
          ) : result.solution.multiple ? (
            <span>
              <span style={styles.solVar}>{result.solution.variable}</span>
              <span style={styles.solEq}> = </span>
              <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
              <span style={styles.solEq}> or </span>
              <span style={styles.solNum}>{formatNumber(result.solution.value2)}</span>
            </span>
          ) : (
            <span>
              <span style={styles.solVar}>{result.solution.variable}</span>
              <span style={styles.solEq}> = </span>
              <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
});

AbsValueSolverEngine.displayName = 'AbsValueSolverEngine';

const getEngineStyles = (darkMode) => ({
  container: { background: darkMode ? '#1e293b' : '#fff', borderRadius: '16px', padding: '20px', boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)' },
  display: { background: darkMode ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '12px', padding: '18px 22px', minHeight: '54px', marginBottom: '16px', display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', fontSize: '1.4rem', color: '#fff', fontWeight: '500' },
  placeholder: { color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontSize: '0.95rem' },
  displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
  displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
  displayAbs: { color: '#fbbf24', fontWeight: '700', margin: '0 2px' },
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
  solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
});

/* =====================================================
   EQUATION FORM GENERATORS
   ===================================================== */

const equationForms = [
  {
    id: 'simple',
    name: 'Simple',
    formula: '|x + a| = b',
    generate: (nice) => {
      const a = Math.floor(Math.random() * 17) - 8;
      const b = Math.floor(Math.random() * 12) + 1;
      return `|x${a >= 0 ? '+' + a : a}|=${b}`;
    }
  },
  {
    id: 'with-coeff',
    name: 'With Coefficient',
    formula: '|ax + b| = c',
    generate: (nice) => {
      if (nice) {
        const a = [2, 3, 4, 5][Math.floor(Math.random() * 4)];
        const x1 = Math.floor(Math.random() * 8) - 4;
        const b = Math.floor(Math.random() * 10) - 5;
        const c = Math.abs(a * x1 + b);
        return `|${a}\u00D7x${b >= 0 ? '+' + b : b}|=${c}`;
      }
      const a = Math.floor(Math.random() * 7) + 2;
      const b = Math.floor(Math.random() * 15) - 7;
      const c = Math.floor(Math.random() * 20) + 1;
      return `|${a}\u00D7x${b >= 0 ? '+' + b : b}|=${c}`;
    }
  },
  {
    id: 'equals-zero',
    name: 'Equals Zero',
    formula: '|ax + b| = 0',
    generate: () => {
      const a = [1, 2, 3][Math.floor(Math.random() * 3)];
      const b = Math.floor(Math.random() * 11) - 5;
      return a === 1 ? `|x${b >= 0 ? '+' + b : b}|=0` : `|${a}\u00D7x${b >= 0 ? '+' + b : b}|=0`;
    }
  },
  {
    id: 'no-solution',
    name: 'No Solution',
    formula: '|expr| = negative',
    generate: () => {
      const a = Math.floor(Math.random() * 5) + 1;
      const b = Math.floor(Math.random() * 10) - 5;
      const c = -(Math.floor(Math.random() * 8) + 1);
      return `|${a === 1 ? '' : a + '\u00D7'}x${b >= 0 ? '+' + b : b}|=${c}`;
    }
  },
  {
    id: 'with-additive',
    name: 'Isolate First',
    formula: '|x + a| + b = c',
    generate: (nice) => {
      if (nice) {
        const a = Math.floor(Math.random() * 10) - 5;
        const rhs = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 8) + 1;
        return `|x${a >= 0 ? '+' + a : a}|+${b}=${rhs + b}`;
      }
      const a = Math.floor(Math.random() * 10) - 5;
      const b = Math.floor(Math.random() * 10) + 1;
      const c = Math.floor(Math.random() * 15) + 1;
      return `|x${a >= 0 ? '+' + a : a}|+${b}=${c}`;
    }
  },
  {
    id: 'coeff-outside',
    name: 'Coefficient Outside',
    formula: 'a|x + b| = c',
    generate: (nice) => {
      if (nice) {
        const a = [2, 3, 4][Math.floor(Math.random() * 3)];
        const b = Math.floor(Math.random() * 8) - 4;
        const inner = Math.floor(Math.random() * 6) + 1;
        return `${a}\u00D7|x${b >= 0 ? '+' + b : b}|=${a * inner}`;
      }
      const a = Math.floor(Math.random() * 5) + 2;
      const b = Math.floor(Math.random() * 10) - 5;
      const c = Math.floor(Math.random() * 20) + 1;
      return `${a}\u00D7|x${b >= 0 ? '+' + b : b}|=${c}`;
    }
  },
  {
    id: 'abs-both-sides',
    name: 'Abs Both Sides',
    formula: '|ax + b| = |cx + d|',
    generate: (nice) => {
      if (nice) {
        const x = Math.floor(Math.random() * 9) - 4;
        const a = [1, 2, 3][Math.floor(Math.random() * 3)];
        const c = [1, 2][Math.floor(Math.random() * 2)];
        const b = Math.floor(Math.random() * 8) - 4;
        const d = Math.abs(a * x + b) - c * x;
        return `|${a === 1 ? '' : a + '\u00D7'}x${b >= 0 ? '+' + b : b}|=|${c === 1 ? '' : c + '\u00D7'}x${d >= 0 ? '+' + d : d}|`;
      }
      const a = Math.floor(Math.random() * 4) + 1;
      const c = Math.floor(Math.random() * 3) + 1;
      const b = Math.floor(Math.random() * 10) - 5;
      const d = Math.floor(Math.random() * 10) - 5;
      return `|${a === 1 ? '' : a + '\u00D7'}x${b >= 0 ? '+' + b : b}|=|${c === 1 ? '' : c + '\u00D7'}x${d >= 0 ? '+' + d : d}|`;
    }
  },
  {
    id: 'fraction',
    name: 'Fraction Inside',
    formula: '|x/a + b| = c',
    generate: (nice) => {
      if (nice) {
        const a = [2, 3, 4][Math.floor(Math.random() * 3)];
        const x = a * (Math.floor(Math.random() * 5) - 2);
        const b = Math.floor(Math.random() * 6) - 3;
        const c = Math.abs(x / a + b);
        return `|x\u00F7${a}${b >= 0 ? '+' + b : b}|=${c}`;
      }
      const a = Math.floor(Math.random() * 4) + 2;
      const b = Math.floor(Math.random() * 8) - 4;
      const c = Math.floor(Math.random() * 8) + 1;
      return `|x\u00F7${a}${b >= 0 ? '+' + b : b}|=${c}`;
    }
  },
];

/* =====================================================
   WRAPPER COMPONENT
   ===================================================== */

const AbsValueEquationSolver = () => {
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
          <div style={wStyles.answerValue}>No solution</div>
          <div style={wStyles.answerNote}>{'\u2717'} Absolute value cannot equal a negative number</div>
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
          <div style={wStyles.iconWrap}><span style={wStyles.icon}>|x|</span></div>
          <h1 style={wStyles.title}>Absolute Value Equation Solver</h1>
          <p style={wStyles.subtitle}>Solve absolute value equations step by step</p>
        </header>
        <div style={wStyles.main}>
          <div style={wStyles.leftCol}>
            <AbsValueSolverEngine ref={engineRef} onResultChange={handleResultChange} onClear={handleClear} darkMode={darkMode} compact={true} />
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
                      <button key={form.id} className="av-form-card"
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
              placeholder="Select an equation type or enter your own absolute value equation, then click Solve to see the step-by-step solution."
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
  formCard: { '--av-border-color': darkMode ? '#475569' : '#e2e8f0', background: darkMode ? '#334155' : '#f8fafc', border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0', borderRadius: '10px', padding: '10px 12px', cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'left', fontFamily: 'inherit' },
  formCardSelected: { '--av-border-color': '#3b82f6', borderColor: '#3b82f6', background: darkMode ? '#1e3a5f' : '#eff6ff', boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)' },
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

export default AbsValueEquationSolver;