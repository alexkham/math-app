import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import SolutionPanel from '../SolutionPanel';
import THEME_CSS from '../MathSolverThemes';

/* =====================================================
   LOGARITHMIC INEQUALITY SOLVER

   Two exports:
   - LogarithmicInequalitySolverEngine: Standalone solver component
   - LogarithmicInequalitySolver: Full educational wrapper (default)

   Features:
   - Shared SolutionPanel with graph support
   - Theme support via CSS variables
   - Dark mode toggle
   - Full cursor: click-to-place, arrow keys, blinking caret
   - Insert/delete at cursor position
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
  LT: 'LT',
  GT: 'GT',
  LTE: 'LTE',
  GTE: 'GTE',
  E: 'E',
  LOG: 'LOG',
  LN: 'LN',
  UNDERSCORE: 'UNDERSCORE',
};

function tokenize(input) {
  const tokens = [];
  let i = 0;

  while (i < input.length) {
    const char = input[i];

    if (/\s/.test(char)) { i++; continue; }

    if (input.slice(i, i + 2).toLowerCase() === 'ln') {
      tokens.push({ type: TokenType.LN });
      i += 2;
      continue;
    }

    if (input.slice(i, i + 3).toLowerCase() === 'log') {
      tokens.push({ type: TokenType.LOG });
      i += 3;
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

    if (char === 'e' && (i + 1 >= input.length || !/[a-zA-Z]/.test(input[i + 1]))) {
      tokens.push({ type: TokenType.E });
      i++;
      continue;
    }

    if (/[a-zA-Z]/.test(char)) {
      tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
      i++;
      continue;
    }

    if (char === '\u2264' || (char === '<' && input[i + 1] === '=')) {
      tokens.push({ type: TokenType.LTE });
      i += char === '\u2264' ? 1 : 2;
      continue;
    }

    if (char === '\u2265' || (char === '>' && input[i + 1] === '=')) {
      tokens.push({ type: TokenType.GTE });
      i += char === '\u2265' ? 1 : 2;
      continue;
    }

    if (char === '<') { tokens.push({ type: TokenType.LT }); i++; continue; }
    if (char === '>') { tokens.push({ type: TokenType.GT }); i++; continue; }

    const charMap = {
      '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY, '\u00B7': TokenType.MULTIPLY,
      '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE,
      '^': TokenType.POWER,
      '(': TokenType.LPAREN, ')': TokenType.RPAREN,
      '+': TokenType.PLUS, '-': TokenType.MINUS,
      '_': TokenType.UNDERSCORE,
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

  const isInequalityOp = (type) => [TokenType.LT, TokenType.GT, TokenType.LTE, TokenType.GTE].includes(type);

  const parseInequality = () => {
    const left = parseExpression();
    const opToken = peek();
    if (opToken && isInequalityOp(opToken.type)) {
      consume();
      return { type: 'INEQUALITY', operator: opToken.type, left, right: parseExpression() };
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
    if (token?.type === TokenType.E) { consume(); return { type: 'E' }; }

    if (token?.type === TokenType.LN) {
      consume();
      consume(TokenType.LPAREN);
      const argument = parseExpression();
      consume(TokenType.RPAREN);
      return { type: 'LOG', base: { type: 'E' }, argument };
    }

    if (token?.type === TokenType.LOG) {
      consume();
      let base = { type: 'NUMBER', value: 10 };
      if (peek()?.type === TokenType.UNDERSCORE) {
        consume();
        if (peek()?.type === TokenType.NUMBER) { base = { type: 'NUMBER', value: consume().value }; }
        else if (peek()?.type === TokenType.VARIABLE) { base = { type: 'VARIABLE', name: consume().value }; }
        else if (peek()?.type === TokenType.E) { consume(); base = { type: 'E' }; }
        else if (peek()?.type === TokenType.LPAREN) { consume(); base = parseExpression(); consume(TokenType.RPAREN); }
      }
      consume(TokenType.LPAREN);
      const argument = parseExpression();
      consume(TokenType.RPAREN);
      return { type: 'LOG', base, argument };
    }

    if (token?.type === TokenType.LPAREN) {
      consume();
      const expr = parseExpression();
      consume(TokenType.RPAREN);
      return expr;
    }

    throw new Error(`Unexpected token: ${token?.type}`);
  };

  const ast = parseInequality();
  if (pos < tokens.length) throw new Error('Unexpected tokens at end');
  return ast;
}


/* =====================================================
   HELPERS
   ===================================================== */

function formatNumber(num) {
  if (Number.isInteger(num)) return String(num);
  const rounded = Math.round(num * 1000000) / 1000000;
  return rounded.toFixed(6).replace(/\.?0+$/, '');
}

const opSymbols = {
  [TokenType.LT]: '<',
  [TokenType.GT]: '>',
  [TokenType.LTE]: '\u2264',
  [TokenType.GTE]: '\u2265',
};

function flipOperator(op) {
  const flips = {
    [TokenType.LT]: TokenType.GT,
    [TokenType.GT]: TokenType.LT,
    [TokenType.LTE]: TokenType.GTE,
    [TokenType.GTE]: TokenType.LTE,
  };
  return flips[op];
}

function containsVariable(node) {
  if (!node) return false;
  if (node.type === 'VARIABLE') return true;
  if (node.type === 'NUMBER' || node.type === 'E') return false;
  if (node.type === 'NEGATE') return containsVariable(node.operand);
  if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
  if (node.type === 'LOG') return containsVariable(node.base) || containsVariable(node.argument);
  return containsVariable(node.left) || containsVariable(node.right);
}

function containsLog(node) {
  if (!node) return false;
  if (node.type === 'LOG') return true;
  if (node.type === 'NEGATE') return containsLog(node.operand);
  if (node.type === 'POWER') return containsLog(node.base) || containsLog(node.exponent);
  if (['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'].includes(node.type)) {
    return containsLog(node.left) || containsLog(node.right);
  }
  return false;
}

function evaluateConstant(node) {
  if (!node) return null;
  switch (node.type) {
    case 'NUMBER': return node.value;
    case 'E': return Math.E;
    case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
    case 'ADD': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null) ? l + r : null; }
    case 'SUBTRACT': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null) ? l - r : null; }
    case 'MULTIPLY': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null) ? l * r : null; }
    case 'DIVIDE': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null && r !== 0) ? l / r : null; }
    case 'POWER': { const b = evaluateConstant(node.base); const e = evaluateConstant(node.exponent); return (b !== null && e !== null) ? Math.pow(b, e) : null; }
    case 'LOG': {
      const b = evaluateConstant(node.base);
      const a = evaluateConstant(node.argument);
      if (b !== null && a !== null && b > 0 && b !== 1 && a > 0) return Math.log(a) / Math.log(b);
      return null;
    }
    default: return null;
  }
}

function getBaseValue(node) {
  if (node.type === 'E') return Math.E;
  if (node.type === 'NUMBER') return node.value;
  return evaluateConstant(node);
}

function basesEqual(base1, base2) {
  if (base1.type === 'E' && base2.type === 'E') return true;
  const v1 = getBaseValue(base1);
  const v2 = getBaseValue(base2);
  if (v1 !== null && v2 !== null) return Math.abs(v1 - v2) < 1e-10;
  return false;
}

function isNaturalBase(node) {
  return node.type === 'E';
}

function parseLinearArgument(node) {
  if (node.type === 'VARIABLE') return { variable: node.name, coefficient: 1, constant: 0 };
  if (node.type === 'MULTIPLY') {
    const leftVal = evaluateConstant(node.left);
    const rightVal = evaluateConstant(node.right);
    if (leftVal !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: leftVal, constant: 0 };
    if (rightVal !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rightVal, constant: 0 };
  }
  if (node.type === 'ADD' || node.type === 'SUBTRACT') {
    const leftLinear = parseLinearArgument(node.left);
    const rightConst = evaluateConstant(node.right);
    if (leftLinear && rightConst !== null) {
      return { variable: leftLinear.variable, coefficient: leftLinear.coefficient, constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst) };
    }
    const rightLinear = parseLinearArgument(node.right);
    const leftConst = evaluateConstant(node.left);
    if (rightLinear && leftConst !== null && node.type === 'ADD') {
      return { variable: rightLinear.variable, coefficient: rightLinear.coefficient, constant: rightLinear.constant + leftConst };
    }
  }
  return null;
}

function extractLogCoefficient(node) {
  if (node.type !== 'MULTIPLY') return { coefficient: null, log: null };
  if (node.left.type === 'LOG' && !containsVariable(node.right)) return { coefficient: evaluateConstant(node.right), log: node.left };
  if (node.right.type === 'LOG' && !containsVariable(node.left)) return { coefficient: evaluateConstant(node.left), log: node.right };
  return { coefficient: null, log: null };
}

function extractLogAdditive(node) {
  if (node.type !== 'ADD' && node.type !== 'SUBTRACT') return { log: null, constant: null, isAdd: false };
  const isAdd = node.type === 'ADD';
  if (node.left.type === 'LOG' && containsVariable(node.left) && !containsVariable(node.right)) return { log: node.left, constant: evaluateConstant(node.right), isAdd };
  if (node.right.type === 'LOG' && containsVariable(node.right) && !containsVariable(node.left) && isAdd) return { log: node.right, constant: evaluateConstant(node.left), isAdd };
  return { log: null, constant: null, isAdd: false };
}


/* =====================================================
   SOLVER
   ===================================================== */

function solveLogarithmicInequality(ast) {
  const steps = [];

  if (ast.type !== 'INEQUALITY') throw new Error('Input must be an inequality (use <, >, \u2264, or \u2265)');

  let { left, right, operator } = ast;

  const leftHasLogVar = containsLog(left) && containsVariable(left);
  const rightHasLogVar = containsLog(right) && containsVariable(right);

  // log on both sides with same base
  if (leftHasLogVar && rightHasLogVar) {
    if (left.type === 'LOG' && right.type === 'LOG' && basesEqual(left.base, right.base)) {
      const baseValue = getBaseValue(left.base);
      const baseIsSmall = baseValue < 1;

      let newOperator = operator;
      if (baseIsSmall) {
        newOperator = flipOperator(operator);
        steps.push({
          rule: 'Compare Logarithms (Base < 1)',
          description: `Since the base is less than 1, the logarithm is decreasing. When comparing log_b(A) ${opSymbols[operator]} log_b(B), we flip the inequality for the arguments.`,
          before: ast,
          after: { type: 'INEQUALITY', operator: newOperator, left: left.argument, right: right.argument }
        });
      } else {
        steps.push({
          rule: 'Compare Logarithms (Base > 1)',
          description: `Since the base is greater than 1, the logarithm is increasing. If log_b(A) ${opSymbols[operator]} log_b(B), then A ${opSymbols[operator]} B.`,
          before: ast,
          after: { type: 'INEQUALITY', operator: newOperator, left: left.argument, right: right.argument }
        });
      }

      steps.push({
        rule: 'Domain Constraint',
        description: 'Both arguments must be positive for the logarithm to be defined.',
        before: null,
        after: null
      });

      const linearResult = solveLinearInequality(left.argument, right.argument, newOperator, steps);
      // No graph for same-base comparisons
      return linearResult;
    }
    throw new Error('Inequalities with different log bases on both sides are not yet supported.');
  }

  // Ensure log side is on left
  let logSide, constSide;
  if (leftHasLogVar && !rightHasLogVar) {
    logSide = left;
    constSide = right;
  } else if (rightHasLogVar && !leftHasLogVar) {
    logSide = right;
    constSide = left;
    operator = flipOperator(operator);
    steps.push({
      rule: 'Rearrange Inequality',
      description: 'Move the logarithmic term to the left side (flip the inequality sign).',
      before: ast,
      after: { type: 'INEQUALITY', operator, left: logSide, right: constSide }
    });
  } else {
    throw new Error('No logarithm with variable found in inequality');
  }

  // Evaluate constant side
  const constValue = evaluateConstant(constSide);
  if (constValue !== null && constSide.type !== 'NUMBER') {
    const newConstSide = { type: 'NUMBER', value: constValue };
    steps.push({
      rule: 'Evaluate Constant',
      description: 'Simplify the right side to a single number.',
      before: { type: 'INEQUALITY', operator, left: logSide, right: constSide },
      after: { type: 'INEQUALITY', operator, left: logSide, right: newConstSide }
    });
    constSide = newConstSide;
  }

  // Handle coefficient
  if (logSide.type === 'MULTIPLY') {
    const { coefficient, log } = extractLogCoefficient(logSide);
    if (coefficient !== null && log !== null) {
      const constVal = evaluateConstant(constSide);
      if (constVal !== null) {
        const newConst = { type: 'NUMBER', value: constVal / coefficient };
        const flipped = coefficient < 0;
        if (flipped) operator = flipOperator(operator);
        steps.push({
          rule: 'Isolate Logarithm',
          description: `Divide both sides by ${formatNumber(coefficient)}.${flipped ? ' Since we divided by a negative number, flip the inequality sign.' : ''}`,
          before: { type: 'INEQUALITY', operator: flipped ? flipOperator(operator) : operator, left: logSide, right: constSide },
          after: { type: 'INEQUALITY', operator, left: log, right: newConst }
        });
        logSide = log;
        constSide = newConst;
      }
    }
  }

  // Handle additive constant
  if (logSide.type === 'ADD' || logSide.type === 'SUBTRACT') {
    const { log, constant, isAdd } = extractLogAdditive(logSide);
    if (log !== null && constant !== null) {
      const constVal = evaluateConstant(constSide);
      if (constVal !== null) {
        const newConstVal = isAdd ? constVal - constant : constVal + constant;
        const newConst = { type: 'NUMBER', value: newConstVal };
        const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
        steps.push({
          rule: 'Isolate Logarithm',
          description: `${action} both sides.`,
          before: { type: 'INEQUALITY', operator, left: logSide, right: constSide },
          after: { type: 'INEQUALITY', operator, left: log, right: newConst }
        });
        logSide = log;
        constSide = newConst;
      }
    }
  }

  if (logSide.type !== 'LOG') throw new Error('Could not isolate logarithm');

  const base = logSide.base;
  const argument = logSide.argument;
  const resultValue = evaluateConstant(constSide);

  if (resultValue === null) throw new Error('Right side must evaluate to a number');

  const baseValue = getBaseValue(base);
  if (baseValue === null) throw new Error('Base must be a constant');
  if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');

  const isNatural = isNaturalBase(base);
  const baseIsSmall = baseValue < 1;

  const exponentialValue = Math.pow(baseValue, resultValue);

  // Graph data for SolutionPanel
  let graphData = {
    type: 'logarithmic',
    base: baseValue,
    solution: { x: exponentialValue, y: resultValue },
    inequality: { operator: opSymbols[operator] }
  };

  const baseDisplay = isNatural ? { type: 'E' } : base;
  const expNode = { type: 'POWER', base: baseDisplay, exponent: { type: 'NUMBER', value: resultValue } };

  let newOperator = operator;
  if (baseIsSmall) {
    newOperator = flipOperator(operator);
    steps.push({
      rule: 'Convert to Exponential Form (Base < 1)',
      description: `Since the base ${formatNumber(baseValue)} is less than 1, the logarithm is a decreasing function. When converting log_b(A) ${opSymbols[operator]} c to A ${opSymbols[newOperator]} b^c, the inequality flips.`,
      before: { type: 'INEQUALITY', operator, left: logSide, right: constSide },
      after: { type: 'INEQUALITY', operator: newOperator, left: argument, right: expNode }
    });
  } else {
    steps.push({
      rule: 'Convert to Exponential Form',
      description: isNatural
        ? `If ln(A) ${opSymbols[operator]} c, then A ${opSymbols[operator]} e^c (same direction since base e > 1).`
        : `If log_${formatNumber(baseValue)}(A) ${opSymbols[operator]} c, then A ${opSymbols[operator]} ${formatNumber(baseValue)}^c.`,
      before: { type: 'INEQUALITY', operator, left: logSide, right: constSide },
      after: { type: 'INEQUALITY', operator: newOperator, left: argument, right: expNode }
    });
  }

  operator = newOperator;

  steps.push({
    rule: 'Evaluate Exponential',
    description: isNatural
      ? `Calculate e^${formatNumber(resultValue)} \u2248 ${formatNumber(exponentialValue)}`
      : `Calculate ${formatNumber(baseValue)}^${formatNumber(resultValue)} = ${formatNumber(exponentialValue)}`,
    before: { type: 'INEQUALITY', operator, left: argument, right: expNode },
    after: { type: 'INEQUALITY', operator, left: argument, right: { type: 'NUMBER', value: exponentialValue } }
  });

  steps.push({
    rule: 'Domain Constraint',
    description: 'The argument of the logarithm must be positive.',
    before: null,
    after: null
  });

  // Solve for variable in argument
  if (argument.type === 'VARIABLE') {
    const varName = argument.name;

    let finalSolution;
    if (operator === TokenType.GT || operator === TokenType.GTE) {
      if (exponentialValue >= 0) {
        finalSolution = { type: 'range', variable: varName, operator, value: exponentialValue, exact: Number.isInteger(exponentialValue) };
      } else {
        finalSolution = { type: 'range', variable: varName, operator: TokenType.GT, value: 0, exact: true };
        steps.push({
          rule: 'Apply Domain',
          description: `Since ${formatNumber(exponentialValue)} < 0 and x must be positive, the solution is x > 0.`,
          before: null,
          after: { type: 'INEQUALITY', operator: TokenType.GT, left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: 0 } }
        });
      }
    } else {
      if (exponentialValue > 0) {
        finalSolution = { type: 'compound', variable: varName, lower: 0, lowerStrict: true, upper: exponentialValue, upperStrict: operator === TokenType.LT, exact: Number.isInteger(exponentialValue) };
        steps.push({
          rule: 'Combine with Domain',
          description: `Combining x ${opSymbols[operator]} ${formatNumber(exponentialValue)} with x > 0 gives: 0 < x ${opSymbols[operator]} ${formatNumber(exponentialValue)}.`,
          before: null,
          after: null
        });
      } else {
        finalSolution = { type: 'none', variable: varName };
        steps.push({
          rule: 'No Solution',
          description: `x ${opSymbols[operator]} ${formatNumber(exponentialValue)} and x > 0 cannot both be satisfied.`,
          before: null,
          after: null
        });
      }
    }

    graphData.solution = { x: exponentialValue, y: resultValue };
    return { steps, solution: finalSolution, graphData };
  }

  // Linear argument
  const linearInfo = parseLinearArgument(argument);
  if (linearInfo) {
    const { variable, coefficient, constant } = linearInfo;

    steps.push({
      rule: 'Solve Linear Inequality',
      description: `Now solve: ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))} ${opSymbols[operator]} ${formatNumber(exponentialValue)}`,
      before: null,
      after: null
    });

    const subtracted = exponentialValue - constant;
    let solution = subtracted / coefficient;

    let finalOperator = operator;
    if (coefficient < 0) {
      finalOperator = flipOperator(operator);
      steps.push({
        rule: 'Divide by Negative',
        description: `Dividing by ${formatNumber(coefficient)} flips the inequality sign.`,
        before: null,
        after: { type: 'INEQUALITY', operator: finalOperator, left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
      });
    } else {
      steps.push({
        rule: 'Solve for Variable',
        description: `Subtract ${formatNumber(constant)}, then divide by ${formatNumber(coefficient)}.`,
        before: null,
        after: { type: 'INEQUALITY', operator: finalOperator, left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
      });
    }

    const domainBound = -constant / coefficient;
    const domainOp = coefficient > 0 ? TokenType.GT : TokenType.LT;

    steps.push({
      rule: 'Apply Domain Constraint',
      description: `For log argument to be positive: ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))} > 0, so ${variable} ${opSymbols[domainOp]} ${formatNumber(domainBound)}.`,
      before: null,
      after: null
    });

    const finalSolution = intersectWithDomain(variable, finalOperator, solution, domainOp, domainBound);

    graphData.solution = { x: solution, y: Math.log(solution * coefficient + constant) / Math.log(baseValue) };
    return { steps, solution: finalSolution, graphData };
  }

  throw new Error('Argument form not supported');
}

function solveLinearInequality(leftExpr, rightExpr, operator, steps) {
  const leftLinear = parseLinearArgument(leftExpr);
  const rightConst = evaluateConstant(rightExpr);

  if (leftLinear && rightConst !== null) {
    const { variable, coefficient, constant } = leftLinear;
    const rhs = rightConst - constant;
    let solution = rhs / coefficient;
    let finalOp = operator;
    if (coefficient < 0) finalOp = flipOperator(operator);

    steps.push({
      rule: 'Solve Linear Inequality',
      description: `Solving ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))} ${opSymbols[operator]} ${formatNumber(rightConst)}`,
      before: null,
      after: { type: 'INEQUALITY', operator: finalOp, left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
    });

    steps.push({
      rule: 'Domain Check',
      description: 'Verify that the solution keeps both logarithm arguments positive.',
      before: null,
      after: null
    });

    return { steps, solution: { type: 'range', variable, operator: finalOp, value: solution, exact: Number.isInteger(solution) } };
  }

  throw new Error('Could not solve the linear inequality');
}

function intersectWithDomain(variable, ineqOp, ineqVal, domainOp, domainBound) {
  const isIneqUpper = ineqOp === TokenType.LT || ineqOp === TokenType.LTE;
  const isDomainUpper = domainOp === TokenType.LT || domainOp === TokenType.LTE;

  if (!isIneqUpper && !isDomainUpper) {
    const bound = Math.max(ineqVal, domainBound);
    const op = (bound === ineqVal) ? ineqOp : domainOp;
    return { type: 'range', variable, operator: op, value: bound, exact: Number.isInteger(bound) };
  }

  if (isIneqUpper && isDomainUpper) {
    const bound = Math.min(ineqVal, domainBound);
    const op = (bound === ineqVal) ? ineqOp : domainOp;
    return { type: 'range', variable, operator: op, value: bound, exact: Number.isInteger(bound) };
  }

  let lower, upper, lowerStrict, upperStrict;
  if (isIneqUpper) {
    lower = domainBound;
    lowerStrict = domainOp === TokenType.GT;
    upper = ineqVal;
    upperStrict = ineqOp === TokenType.LT;
  } else {
    lower = ineqVal;
    lowerStrict = ineqOp === TokenType.GT;
    upper = domainBound;
    upperStrict = domainOp === TokenType.LT;
  }

  if (lower >= upper) return { type: 'none', variable };

  return { type: 'compound', variable, lower, lowerStrict, upper, upperStrict, exact: Number.isInteger(lower) && Number.isInteger(upper) };
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
    case 'E': return <span key={key} style={s.euler}>e</span>;
    case 'NEGATE': return <span key={key}>{'\u2212'}{astToMathDisplay(node.operand, `${key}-neg`, darkMode)}</span>;
    case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> + </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
    case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> {'\u2212'} </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
    case 'MULTIPLY': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> · </span>{wrap(node.right, `${key}-r`)}</span>;
    case 'DIVIDE': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> / </span>{wrap(node.right, `${key}-r`)}</span>;
    case 'POWER': return <span key={key} style={s.power}>{wrap(node.base, `${key}-base`)}<sup style={s.sup}>{astToMathDisplay(node.exponent, `${key}-exp`, darkMode)}</sup></span>;
    case 'LOG': {
      const isNat = node.base && node.base.type === 'E';
      const logName = isNat ? 'ln' : 'log';
      const showBase = !isNat && node.base && !(node.base.type === 'NUMBER' && node.base.value === 10);
      return (
        <span key={key}>
          <span style={s.logName}>{logName}</span>
          {showBase && <sub style={s.logSub}>{astToMathDisplay(node.base, `${key}-base`, darkMode)}</sub>}
          <span style={s.op}>(</span>
          {astToMathDisplay(node.argument, `${key}-arg`, darkMode)}
          <span style={s.op}>)</span>
        </span>
      );
    }
    case 'INEQUALITY': return (
      <span key={key}>
        {astToMathDisplay(node.left, `${key}-l`, darkMode)}
        <span style={s.ineqOp}> {opSymbols[node.operator]} </span>
        {astToMathDisplay(node.right, `${key}-r`, darkMode)}
      </span>
    );
    default: return null;
  }
}

const getMathStyles = (darkMode) => ({
  number: { color: darkMode ? '#e2e8f0' : '#1e3a5f' },
  variable: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '500' },
  euler: { fontStyle: 'italic', color: darkMode ? '#22d3ee' : '#0891b2' },
  op: { color: darkMode ? '#94a3b8' : '#64748b', margin: '0 2px' },
  ineqOp: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
  power: { display: 'inline', position: 'relative' },
  sup: { fontSize: '0.7em', color: darkMode ? '#60a5fa' : '#3b82f6', marginLeft: '1px', verticalAlign: 'super' },
  logName: { fontWeight: '600', color: darkMode ? '#60a5fa' : '#3b82f6', fontStyle: 'normal', marginRight: '1px' },
  logSub: { fontSize: '0.7em', color: darkMode ? '#94a3b8' : '#64748b', marginLeft: '1px' },
});


/* =====================================================
   CURSOR STYLES (injected once)
   ===================================================== */

const CURSOR_CSS = `
  @keyframes li-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .li-caret {
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background: #fbbf24;
    animation: li-blink 1s step-end infinite;
    vertical-align: text-bottom;
    margin: 0 -1px;
    border-radius: 1px;
  }
  .li-display:focus {
    outline: none;
  }
  .li-display:focus .li-caret {
    animation: li-blink 1s step-end infinite;
  }
  .li-display:not(:focus) .li-caret {
    opacity: 0.4;
    animation: none;
  }
  .li-char {
    cursor: text;
    position: relative;
  }
  .li-char:hover {
    background: rgba(255,255,255,0.08);
    border-radius: 2px;
  }
  .li-sup-group {
    display: inline;
    cursor: text;
  }
  .li-log-group {
    display: inline;
    cursor: text;
  }
  .li-form-card,
  .li-form-card:visited,
  .li-form-card:active,
  .li-form-card:focus,
  .li-form-card:focus-visible,
  .li-form-card:focus-within {
    outline: none !important;
    box-shadow: none;
    border-color: var(--li-border-color) !important;
  }
`;

/* =====================================================
   ENGINE COMPONENT (Standalone Solver)
   ===================================================== */

export const LogarithmicInequalitySolverEngine = forwardRef(({
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
  const operators = ['+', '-', '\u00D7', '\u00F7', '^'];
  const inequalities = ['<', '>', '\u2264', '\u2265'];

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

  const insertLogAt = useCallback((base) => {
    let chars;
    if (base === 'e') {
      chars = ['l', 'n', '('];
    } else if (base === '10') {
      chars = ['l', 'o', 'g', '('];
    } else {
      chars = ['l', 'o', 'g', '_', base, '('];
    }
    pushUndo(expression, cursorPos);
    setExpression(prev => {
      const next = [...prev];
      next.splice(cursorPos, 0, ...chars);
      return next;
    });
    setCursorPos(prev => prev + chars.length);
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
      const solveResult = solveLogarithmicInequality(ast);

      setResult(solveResult);
      setError(null);
      if (onResultChange) onResultChange(solveResult);
    } catch (e) {
      setError(e.message);
      setResult(null);
      if (onResultChange) onResultChange(null);
    }
  }, [expression, onResultChange]);

  const TYPEABLE = new Set('0123456789.xynXYNeE^+-<>\u2264\u2265*/()×÷_');
  const KEY_MAP = { '*': '×', '/': '÷' };

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

  /* ---- Build display elements with cursor ---- */
  const buildDisplayElements = () => {
    const expr = expression;
    if (expr.length === 0) {
      if (focused) {
        return <span className="li-caret" />;
      }
      return <span style={getEngineStyles(darkMode).placeholder}>Enter inequality...</span>;
    }

    const elements = [];
    const eStyles = getEngineStyles(darkMode);

    // Pre-compute superscript groups
    const supGroups = {};
    let skip = new Set();

    let i = 0;
    while (i < expr.length) {
      if (i + 1 < expr.length && expr[i + 1] === '^') {
        const baseIdx = i;
        const caretIdx = i + 1;
        let j = i + 2;
        let expIndices = [];

        if (j < expr.length && expr[j] === '(') {
          let depth = 1;
          expIndices.push(j);
          j++;
          while (j < expr.length && depth > 0) {
            if (expr[j] === '(') depth++;
            if (expr[j] === ')') depth--;
            expIndices.push(j);
            j++;
          }
        } else {
          while (j < expr.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expr[j]) && !['<', '>', '\u2264', '\u2265'].includes(expr[j])) {
            expIndices.push(j);
            j++;
          }
        }

        if (expIndices.length > 0) {
          supGroups[baseIdx] = { caretIdx, expIndices };
          skip.add(caretIdx);
          expIndices.forEach(idx => skip.add(idx));
          i = j;
          continue;
        }
      }
      i++;
    }

    // Pre-compute log groups
    const logGroups = {};

    i = 0;
    while (i < expr.length) {
      if (skip.has(i)) { i++; continue; }

      // Detect "ln" sequence
      if (expr[i] === 'l' && expr[i + 1] === 'n' && !skip.has(i) && !skip.has(i + 1)) {
        logGroups[i] = { type: 'ln', indices: [i, i + 1] };
        skip.add(i);
        skip.add(i + 1);
        i += 2;
        continue;
      }

      // Detect "log" sequence (with optional _base)
      if (expr[i] === 'l' && expr[i + 1] === 'o' && expr[i + 2] === 'g' && !skip.has(i) && !skip.has(i + 1) && !skip.has(i + 2)) {
        let logIndices = [i, i + 1, i + 2];
        let j = i + 3;
        let baseIndices = [];
        if (j < expr.length && expr[j] === '_') {
          logIndices.push(j);
          j++;
          while (j < expr.length && /[0-9a-zA-Z]/.test(expr[j]) && expr[j] !== '(') {
            baseIndices.push(j);
            logIndices.push(j);
            j++;
          }
        }
        logGroups[i] = { type: 'log', indices: logIndices, baseIndices };
        logIndices.forEach(idx => skip.add(idx));
        i = j;
        continue;
      }

      i++;
    }

    const renderCaret = (pos) => {
      if (cursorPos === pos && focused) {
        return <span key={`caret-${pos}`} className="li-caret" />;
      }
      return null;
    };

    const charStyle = (ch) => {
      if (ch === '\u00D7' || ch === '\u00F7' || ch === '+' || ch === '-') return eStyles.displayOp;
      if (ch === '<' || ch === '>' || ch === '\u2264' || ch === '\u2265') return eStyles.displayIneq;
      if (ch === 'e') return eStyles.displayEuler;
      return undefined;
    };

    const displayChar = (ch) => {
      if (ch === '\u00D7') return ' \u00B7 ';
      if (ch === '\u00F7') return ' / ';
      if (ch === '+') return ' + ';
      if (ch === '-') return ' \u2212 ';
      if (ch === '<') return ' < ';
      if (ch === '>') return ' > ';
      if (ch === '\u2264') return ' \u2264 ';
      if (ch === '\u2265') return ' \u2265 ';
      return ch;
    };

    i = 0;
    while (i < expr.length) {
      if (skip.has(i) && !supGroups[i] && !logGroups[i]) { i++; continue; }

      // Render log group
      if (logGroups[i]) {
        const lg = logGroups[i];
        elements.push(renderCaret(i));

        if (lg.type === 'ln') {
          elements.push(
            <span key={`log-${i}`} className="li-log-group">
              <span className="li-char" data-idx={i} style={eStyles.displayLog}>ln</span>
              {renderCaret(i + 2)}
            </span>
          );
        } else {
          // log with optional base
          elements.push(
            <span key={`log-${i}`} className="li-log-group">
              <span className="li-char" data-idx={i} style={eStyles.displayLogExpr}>
                <span style={eStyles.displayLog}>log</span>
                {lg.baseIndices.length > 0 && (
                  <sub style={eStyles.displaySub}>{lg.baseIndices.map(bi => expr[bi]).join('')}</sub>
                )}
              </span>
              {renderCaret(lg.indices[lg.indices.length - 1] + 1)}
            </span>
          );
        }

        i = lg.indices[lg.indices.length - 1] + 1;
        continue;
      }

      // Render superscript group
      if (supGroups[i]) {
        const group = supGroups[i];
        const baseChar = expr[i];
        const expIndices = group.expIndices;

        elements.push(renderCaret(i));

        elements.push(
          <span key={`sup-${i}`} className="li-sup-group">
            <span
              className="li-char"
              data-idx={i}
              style={baseChar === 'e' ? eStyles.displayEuler : undefined}
            >
              {baseChar}
            </span>
            <sup style={eStyles.displaySup}>
              {renderCaret(group.caretIdx + 1)}
              {expIndices.map((idx) => (
                <React.Fragment key={idx}>
                  <span className="li-char" data-idx={idx}>
                    {displayChar(expr[idx])}
                  </span>
                  {renderCaret(idx + 1)}
                </React.Fragment>
              ))}
            </sup>
          </span>
        );

        i = expIndices[expIndices.length - 1] + 1;
        continue;
      }

      // Regular character
      elements.push(renderCaret(i));
      elements.push(
        <span
          key={`ch-${i}`}
          className="li-char"
          data-idx={i}
          style={charStyle(expr[i])}
        >
          {displayChar(expr[i])}
        </span>
      );
      i++;
    }

    // Caret at the very end
    elements.push(renderCaret(expression.length));

    return elements;
  };

  const p = compact ? 0.85 : 1;
  const styles = getEngineStyles(darkMode);

  const formatSolution = (sol) => {
    if (!sol) return null;

    if (sol.type === 'all') {
      return <span>All real numbers</span>;
    }
    if (sol.type === 'none') {
      return <span>No solution</span>;
    }
    if (sol.type === 'compound') {
      return (
        <span>
          <span style={styles.solNum}>{formatNumber(sol.lower)}</span>
          <span style={styles.solOp}> {'<'} </span>
          <span style={styles.solVar}>{sol.variable}</span>
          <span style={styles.solOp}> {sol.upperStrict ? '<' : '\u2264'} </span>
          <span style={styles.solNum}>{formatNumber(sol.upper)}</span>
        </span>
      );
    }

    const op = opSymbols[sol.operator];
    return (
      <span>
        <span style={styles.solVar}>{sol.variable}</span>
        <span style={styles.solOp}> {op} </span>
        <span style={styles.solNum}>{formatNumber(sol.value)}</span>
      </span>
    );
  };

  return (
    <div style={{ ...styles.container, ...style }}>
      <style>{CURSOR_CSS}</style>

      <div
        ref={displayRef}
        className="li-display"
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
        {/* Log buttons */}
        <div style={styles.row}>
          <span style={styles.label}>Log</span>
          <div style={styles.btnGroup}>
            <button style={{ ...styles.btn, ...styles.btnLog }} onClick={() => insertLogAt('e')}>ln</button>
            <button style={{ ...styles.btn, ...styles.btnLog }} onClick={() => insertLogAt('10')}>log</button>
            <button style={{ ...styles.btn, ...styles.btnLog }} onClick={() => insertLogAt('2')}>log<sub>2</sub></button>
            <button style={{ ...styles.btn, ...styles.btnLog }} onClick={() => insertLogAt('3')}>log<sub>3</sub></button>
            <button style={{ ...styles.btn, ...styles.btnLog }} onClick={() => insertLogAt('5')}>log<sub>5</sub></button>
          </div>
        </div>

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
              <button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>
                {op === '^' ? 'x\u207F' : op}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Ineq</span>
          <div style={styles.btnGroup}>
            {inequalities.map((ineq) => (
              <button key={ineq} style={{ ...styles.btn, ...styles.btnIneq }} onClick={() => insertAt(ineq)}>{ineq}</button>
            ))}
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.label}></span>
          <div style={styles.btnGroup}>
            <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('e')}>e</button>
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
          {formatSolution(result.solution)}
          {result.solution.type === 'range' && !result.solution.exact && <span style={styles.solApprox}> ≈</span>}
        </div>
      )}
    </div>
  );
});

LogarithmicInequalitySolverEngine.displayName = 'LogarithmicInequalitySolverEngine';

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
  displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px', verticalAlign: 'super', position: 'relative', top: '-0.4em' },
  displaySub: { fontSize: '0.65em', color: '#bfdbfe', marginLeft: '1px' },
  displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
  displayIneq: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
  displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
  displayLog: { color: '#fde68a', fontWeight: '600' },
  displayLogExpr: { display: 'inline-flex', alignItems: 'baseline' },
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
  btnIneq: { color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '700' },
  btnLog: { color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600', minWidth: '44px' },
  btnSpecial: { color: darkMode ? '#22d3ee' : '#0891b2', fontWeight: '600', fontStyle: 'italic' },
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
  solOp: { opacity: 0.8, margin: '0 6px' },
  solNum: { color: '#fbbf24' },
  solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
});

/* =====================================================
   INEQUALITY FORM GENERATORS
   ===================================================== */

const inequalityForms = [
  {
    id: 'simple',
    name: 'Simple',
    formula: 'log\u2082(x) > c',
    generate: (nice) => {
      const ops = ['>', '<', '\u2265', '\u2264'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const bases = [2, 3, 5, 10];
      const base = bases[Math.floor(Math.random() * bases.length)];
      if (nice) { const exp = Math.floor(Math.random() * 4) + 1; return `log_${base}(x)${op}${exp}`; }
      return `log_${base}(x)${op}${Math.floor(Math.random() * 6) + 1}`;
    }
  },
  {
    id: 'natural',
    name: 'Natural Log',
    formula: 'ln(x) > c',
    generate: (nice) => {
      const ops = ['>', '<', '\u2265', '\u2264'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      if (nice) { const vals = [1, 2, 3, 4]; return `ln(x)${op}${vals[Math.floor(Math.random() * vals.length)]}`; }
      return `ln(x)${op}${(Math.random() * 4 + 0.5).toFixed(2)}`;
    }
  },
  {
    id: 'coefficient',
    name: 'With Coefficient',
    formula: 'a · log\u2082(x) > c',
    generate: (nice) => {
      const ops = ['>', '<', '\u2265', '\u2264'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const bases = [2, 3, 10];
      const base = bases[Math.floor(Math.random() * bases.length)];
      const coeff = Math.floor(Math.random() * 4) + 2;
      if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `${coeff}\u00D7log_${base}(x)${op}${coeff * exp}`; }
      return `${coeff}\u00D7log_${base}(x)${op}${Math.floor(Math.random() * 10) + 2}`;
    }
  },
  {
    id: 'linear-arg',
    name: 'Linear Argument',
    formula: 'log\u2082(mx + n) > c',
    generate: (nice) => {
      const ops = ['>', '<', '\u2265', '\u2264'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const bases = [2, 3, 10];
      const base = bases[Math.floor(Math.random() * bases.length)];
      const m = Math.floor(Math.random() * 3) + 1;
      const n = Math.floor(Math.random() * 10) - 3;
      const nStr = n >= 0 ? `+${n}` : `${n}`;
      const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
      if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `log_${base}(${mStr}${nStr})${op}${exp}`; }
      return `log_${base}(${mStr}${nStr})${op}${Math.floor(Math.random() * 4) + 1}`;
    }
  },
  {
    id: 'with-constant',
    name: 'With Constant',
    formula: 'log\u2082(x) + c > d',
    generate: (nice) => {
      const ops = ['>', '<', '\u2265', '\u2264'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const bases = [2, 3, 10];
      const base = bases[Math.floor(Math.random() * bases.length)];
      const c = Math.floor(Math.random() * 5) + 1;
      if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `log_${base}(x)+${c}${op}${exp + c}`; }
      return `log_${base}(x)+${c}${op}${Math.floor(Math.random() * 6) + c}`;
    }
  },
  {
    id: 'natural-linear',
    name: 'Natural Linear',
    formula: 'ln(mx + n) > c',
    generate: (nice) => {
      const ops = ['>', '<', '\u2265', '\u2264'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const m = Math.floor(Math.random() * 3) + 1;
      const n = Math.floor(Math.random() * 8) - 2;
      const nStr = n >= 0 ? `+${n}` : `${n}`;
      const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
      if (nice) { const vals = [1, 2, 3]; return `ln(${mStr}${nStr})${op}${vals[Math.floor(Math.random() * vals.length)]}`; }
      return `ln(${mStr}${nStr})${op}${(Math.random() * 3 + 0.5).toFixed(2)}`;
    }
  },
  {
    id: 'same-base',
    name: 'Same Base Both Sides',
    formula: 'log\u2082(f(x)) > log\u2082(c)',
    generate: () => {
      const ops = ['>', '<', '\u2265', '\u2264'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const bases = [2, 3, 10];
      const base = bases[Math.floor(Math.random() * bases.length)];
      const m = Math.floor(Math.random() * 3) + 1;
      const n = Math.floor(Math.random() * 10) - 3;
      const c = Math.floor(Math.random() * 30) + 5;
      const nStr = n >= 0 ? `+${n}` : `${n}`;
      const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
      return `log_${base}(${mStr}${nStr})${op}log_${base}(${c})`;
    }
  },
  {
    id: 'negative-result',
    name: 'Negative Right Side',
    formula: 'log\u2082(x) > \u2212c',
    generate: () => {
      const ops = ['>', '<', '\u2265', '\u2264'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const bases = [2, 3, 10];
      const base = bases[Math.floor(Math.random() * bases.length)];
      const c = Math.floor(Math.random() * 3) + 1;
      return `log_${base}(x)${op}-${c}`;
    }
  }
];

/* =====================================================
   WRAPPER COMPONENT (Full Educational Version)
   ===================================================== */

const LogarithmicInequalitySolver = () => {
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

  const formatFinalAnswer = (sol) => {
    if (!sol) return null;

    if (sol.type === 'all') {
      return (
        <div>
          <div style={wStyles.answerValue}>All real numbers</div>
          <div style={wStyles.answerInterval}>(-∞, +∞)</div>
        </div>
      );
    }
    if (sol.type === 'none') {
      return (
        <div>
          <div style={wStyles.answerValue}>No solution</div>
          <div style={wStyles.answerInterval}>∅</div>
        </div>
      );
    }
    if (sol.type === 'compound') {
      const lowerBracket = sol.lowerStrict ? '(' : '[';
      const upperBracket = sol.upperStrict ? ')' : ']';
      return (
        <div>
          <div style={wStyles.answerValue}>
            <span style={wStyles.answerNum}>{formatNumber(sol.lower)}</span>
            <span style={wStyles.answerOp}> {'<'} </span>
            <span style={wStyles.answerVar}>{sol.variable}</span>
            <span style={wStyles.answerOp}> {sol.upperStrict ? '<' : '\u2264'} </span>
            <span style={wStyles.answerNum}>{formatNumber(sol.upper)}</span>
          </div>
          <div style={wStyles.answerInterval}>{lowerBracket}{formatNumber(sol.lower)}, {formatNumber(sol.upper)}{upperBracket}</div>
        </div>
      );
    }

    const op = opSymbols[sol.operator];
    const val = formatNumber(sol.value);

    // Generate interval notation
    let interval;
    if (sol.operator === TokenType.LT) {
      interval = `(-∞, ${val})`;
    } else if (sol.operator === TokenType.LTE) {
      interval = `(-∞, ${val}]`;
    } else if (sol.operator === TokenType.GT) {
      interval = `(${val}, +∞)`;
    } else if (sol.operator === TokenType.GTE) {
      interval = `[${val}, +∞)`;
    }

    return (
      <div>
        <div style={wStyles.answerValue}>
          <span style={wStyles.answerVar}>{sol.variable}</span>
          <span style={wStyles.answerOp}> {op} </span>
          <span style={wStyles.answerNum}>{val}</span>
        </div>
        <div style={wStyles.answerInterval}>{interval}</div>
      </div>
    );
  };

  return (
    <div style={wStyles.container}>
      <style>{THEME_CSS}</style>
      <div style={wStyles.inner}>

        {/* Header - Centered */}
        <header style={wStyles.header}>
          <button style={wStyles.themeToggle} onClick={toggleDarkMode}>
            {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
          </button>
          <div style={wStyles.iconWrap}>
            <span style={wStyles.icon}>{'>'}</span>
          </div>
          {/* <h1 style={wStyles.title}>Logarithmic Inequality Solver</h1> */}
          <p style={wStyles.subtitle}>Solve inequalities with logarithms step by step</p>
        </header>

        {/* Main Content - Side by Side */}
        <div style={wStyles.main}>

          {/* Left Column - Engine + Forms */}
          <div style={wStyles.leftCol}>

            <LogarithmicInequalitySolverEngine
              ref={engineRef}
              onResultChange={handleResultChange}
              onClear={handleClear}
              darkMode={darkMode}
              compact={true}
            />

            {/* Inequality Forms - Collapsible */}
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
                  <p style={wStyles.formsHint}>Click any type to generate a random inequality. Click again for a new one!</p>
                  <div style={wStyles.formsGrid}>
                    {inequalityForms.map((form) => (
                      <button
                        key={form.id}
                        className="li-form-card"
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

          {/* Right Column - SolutionPanel */}
          <div style={wStyles.rightCol}>
            <SolutionPanel
              steps={solveResult?.steps || []}
              graphData={solveResult?.graphData || null}
              darkMode={darkMode}
              placeholder="Select an inequality type or enter your own, then click Solve to see the step-by-step solution."
              stepsTitle="Solution Steps"
              renderStepContent={renderStepContent}
              stepCardClass={() => ''}
            />

            {solveResult && solveResult.solution && (
              <div style={wStyles.finalAnswer}>
                <div style={wStyles.answerLabel}>Solution</div>
                {formatFinalAnswer(solveResult.solution)}
                {(solveResult.solution.type === 'range' || solveResult.solution.type === 'compound') && (
                  <div style={wStyles.answerNote}>
                    {solveResult.solution.exact ? '\u2713 Exact value' : '\u2248 Approximate value'}
                  </div>
                )}
              </div>
            )}
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
    fontSize: '24px',
    fontWeight: '700',
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
    '--li-border-color': darkMode ? '#475569' : '#e2e8f0',
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
    '--li-border-color': '#3b82f6',
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
    marginBottom: '8px',
    fontWeight: '600',
  },
  answerValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  answerVar: { fontStyle: 'italic' },
  answerOp: { opacity: 0.8, margin: '0 6px' },
  answerNum: { color: '#fbbf24' },
  answerInterval: {
    fontSize: '1.1rem',
    opacity: 0.9,
    marginTop: '6px',
    fontFamily: 'ui-monospace, monospace',
  },
  answerNote: {
    fontSize: '0.8rem',
    opacity: 0.75,
    marginTop: '8px',
  },
});

export default LogarithmicInequalitySolver;