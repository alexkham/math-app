import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import SolutionPanel from './SolutionPanel';
import THEME_CSS from './MathSolverThemes';

/* =====================================================
   RADICAL EQUATION SOLVER
   
   Two exports:
   - RadicalSolverEngine: Standalone solver component
   - RadicalEquationSolver: Full educational wrapper (default)
   
   Features:
   - Integrated SolutionPanel with graph support
   - Theme support via CSS variables
   - Dark mode toggle
   - Full cursor: click-to-place, arrow keys, blinking caret
   - Insert/delete at cursor position
   - Extraneous solution checking
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
  SQRT: 'SQRT',       // √
  CBRT: 'CBRT',       // ∛
  FOURTHRT: 'FOURTHRT', // ∜
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

    // Radical symbols
    if (char === '\u221A') {
      tokens.push({ type: TokenType.SQRT });
      i++;
      continue;
    }
    if (char === '\u221B') {
      tokens.push({ type: TokenType.CBRT });
      i++;
      continue;
    }
    if (char === '\u221C') {
      tokens.push({ type: TokenType.FOURTHRT });
      i++;
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

  const isRadical = (type) => [TokenType.SQRT, TokenType.CBRT, TokenType.FOURTHRT].includes(type);

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

    if (token && isRadical(token.type)) {
      const radType = consume().type;
      const index = radType === TokenType.SQRT ? 2 : radType === TokenType.CBRT ? 3 : 4;
      let radicand;
      if (peek()?.type === TokenType.LPAREN) {
        consume();
        radicand = parseExpression();
        consume(TokenType.RPAREN);
      } else {
        radicand = parsePrimary();
      }
      return { type: 'RADICAL', index, radicand };
    }

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
  if (node.type === 'RADICAL') return containsVariable(node.radicand);
  if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
  return containsVariable(node.left) || containsVariable(node.right);
}

function containsRadical(node) {
  if (!node) return false;
  if (node.type === 'RADICAL') return true;
  if (node.type === 'NEGATE') return containsRadical(node.operand);
  if (node.type === 'POWER') return containsRadical(node.base) || containsRadical(node.exponent);
  if (['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'].includes(node.type)) {
    return containsRadical(node.left) || containsRadical(node.right);
  }
  return false;
}

function evaluateConstant(node) {
  if (!node) return null;
  switch (node.type) {
    case 'NUMBER': return node.value;
    case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
    case 'RADICAL': {
      const r = evaluateConstant(node.radicand);
      if (r === null) return null;
      if (node.index === 2) return r >= 0 ? Math.sqrt(r) : null;
      if (node.index === 3) return Math.cbrt(r);
      if (node.index === 4) return r >= 0 ? Math.pow(r, 0.25) : null;
      return null;
    }
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

function evaluateAtX(node, varName, xVal) {
  if (!node) return null;
  switch (node.type) {
    case 'NUMBER': return node.value;
    case 'VARIABLE': return node.name === varName ? xVal : null;
    case 'NEGATE': { const v = evaluateAtX(node.operand, varName, xVal); return v !== null ? -v : null; }
    case 'RADICAL': {
      const r = evaluateAtX(node.radicand, varName, xVal);
      if (r === null) return null;
      if (node.index === 2) return r >= 0 ? Math.sqrt(r) : null;
      if (node.index === 3) return Math.cbrt(r);
      if (node.index === 4) return r >= 0 ? Math.pow(r, 0.25) : null;
      return null;
    }
    case 'ADD': case 'SUBTRACT': case 'MULTIPLY': case 'DIVIDE': case 'POWER': {
      const l = evaluateAtX(node.left || node.base, varName, xVal);
      const r = evaluateAtX(node.right || node.exponent, varName, xVal);
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

function extractLinearFromRadicand(node) {
  // Matches ax + b inside radical
  if (node.type === 'VARIABLE') {
    return { variable: node.name, coefficient: 1, constant: 0 };
  }
  if (node.type === 'MULTIPLY') {
    const lv = evaluateConstant(node.left), rv = evaluateConstant(node.right);
    if (lv !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: lv, constant: 0 };
    if (rv !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rv, constant: 0 };
  }
  if (node.type === 'ADD' || node.type === 'SUBTRACT') {
    const leftLinear = extractLinearFromRadicand(node.left);
    const rightConst = evaluateConstant(node.right);
    if (leftLinear && rightConst !== null) {
      return {
        variable: leftLinear.variable,
        coefficient: leftLinear.coefficient,
        constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst)
      };
    }
    const rightLinear = extractLinearFromRadicand(node.right);
    const leftConst = evaluateConstant(node.left);
    if (rightLinear && leftConst !== null && node.type === 'ADD') {
      return {
        variable: rightLinear.variable,
        coefficient: rightLinear.coefficient,
        constant: rightLinear.constant + leftConst
      };
    }
  }
  return null;
}

function extractQuadraticFromRadicand(node) {
  // Matches x^2 + bx + c or ax^2 + bx + c
  // Simple: just x^2 or x^2 + c or x^2 + bx + c
  if (node.type === 'POWER' && node.base.type === 'VARIABLE') {
    const expVal = evaluateConstant(node.exponent);
    if (expVal === 2) return { variable: node.base.name, a: 1, b: 0, c: 0 };
  }
  if (node.type === 'ADD' || node.type === 'SUBTRACT') {
    // Try left = quadratic part, right = constant
    const rightConst = evaluateConstant(node.right);
    if (rightConst !== null) {
      const leftQuad = extractQuadraticFromRadicand(node.left);
      if (leftQuad) {
        return {
          ...leftQuad,
          c: leftQuad.c + (node.type === 'ADD' ? rightConst : -rightConst)
        };
      }
    }
  }
  if (node.type === 'MULTIPLY') {
    const lv = evaluateConstant(node.left);
    if (lv !== null && node.right.type === 'POWER' && node.right.base.type === 'VARIABLE') {
      const expVal = evaluateConstant(node.right.exponent);
      if (expVal === 2) return { variable: node.right.base.name, a: lv, b: 0, c: 0 };
    }
  }
  return null;
}

function extractAdditiveAroundRadical(node) {
  // Matches √(expr) + c  or  c + √(expr)  or  √(expr) - c
  if (node.type !== 'ADD' && node.type !== 'SUBTRACT') {
    return { radical: null, constant: null, isAdd: false };
  }
  const isAdd = node.type === 'ADD';
  if (containsRadical(node.left) && !containsVariable(node.right)) {
    const constVal = evaluateConstant(node.right);
    if (node.left.type === 'RADICAL') {
      return { radical: node.left, constant: constVal, isAdd };
    }
  }
  if (containsRadical(node.right) && !containsVariable(node.left) && isAdd) {
    const constVal = evaluateConstant(node.left);
    if (node.right.type === 'RADICAL') {
      return { radical: node.right, constant: constVal, isAdd };
    }
  }
  return { radical: null, constant: null, isAdd: false };
}

function extractCoefficientOfRadical(node) {
  if (node.type !== 'MULTIPLY') return { coefficient: null, radical: null };
  if (node.left.type === 'RADICAL' && !containsVariable(node.right)) {
    return { coefficient: evaluateConstant(node.right), radical: node.left };
  }
  if (node.right.type === 'RADICAL' && !containsVariable(node.left)) {
    return { coefficient: evaluateConstant(node.left), radical: node.right };
  }
  return { coefficient: null, radical: null };
}

function getVariable(node) {
  if (!node) return 'x';
  if (node.type === 'VARIABLE') return node.name;
  if (node.type === 'RADICAL') return getVariable(node.radicand);
  if (node.left) { const v = getVariable(node.left); if (v !== 'x' || !node.right) return v; }
  if (node.right) return getVariable(node.right);
  if (node.operand) return getVariable(node.operand);
  if (node.base) return getVariable(node.base);
  return 'x';
}

function isPerfectSquare(n) {
  if (n < 0) return false;
  const s = Math.sqrt(n);
  return Math.abs(s - Math.round(s)) < 1e-10;
}

function isPerfectNthPower(n, index) {
  if (n < 0 && index % 2 === 0) return false;
  const root = Math.pow(Math.abs(n), 1 / index);
  const rounded = Math.round(root);
  return Math.abs(Math.pow(n < 0 ? -rounded : rounded, index) - n) < 1e-10;
}

function radicalSymbol(index) {
  if (index === 2) return '\u221A';
  if (index === 3) return '\u221B';
  if (index === 4) return '\u221C';
  return `${index}\u221A`;
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
    case 'RADICAL': return (
      <span key={key} style={s.radical}>
        <span style={s.radicalSign}>{radicalSymbol(node.index)}</span>
        <span style={s.radicand}>
          ({astToMathDisplay(node.radicand, `${key}-rad`, darkMode)})
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
  radical: { display: 'inline' },
  radicalSign: { color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600', fontSize: '1.1em' },
  radicand: { borderTop: darkMode ? '1.5px solid #60a5fa' : '1.5px solid #3b82f6', paddingTop: '1px' },
});

/* =====================================================
   SOLVER
   ===================================================== */

function solveRadicalEquation(ast) {
  const steps = [];
  let graphData = null;

  if (ast.type !== 'EQUATION') {
    throw new Error('Input must be an equation (use = sign)');
  }

  let { left, right } = ast;
  const leftHasRad = containsRadical(left);
  const rightHasRad = containsRadical(right);

  let radSide, constSide;

  if (leftHasRad && !rightHasRad) {
    radSide = left;
    constSide = right;
  } else if (rightHasRad && !leftHasRad) {
    radSide = right;
    constSide = left;
    steps.push({
      rule: 'Rearrange Equation',
      description: 'Move the radical term to the left side for clarity.',
      before: ast,
      after: { type: 'EQUATION', left: radSide, right: constSide }
    });
  } else if (leftHasRad && rightHasRad) {
    // √(A) = √(B) → square both sides
    if (left.type === 'RADICAL' && right.type === 'RADICAL' && left.index === right.index) {
      const idx = left.index;
      steps.push({
        rule: `Raise Both Sides to Power ${idx}`,
        description: `Both sides have ${radicalSymbol(idx)}, so raise both sides to the ${idx === 2 ? 'second' : idx === 3 ? 'third' : 'fourth'} power to eliminate the radicals.`,
        before: ast,
        after: { type: 'EQUATION', left: left.radicand, right: right.radicand }
      });

      // Now solve the inner equation (linear)
      const innerLeft = left.radicand;
      const innerRight = right.radicand;

      const leftLinear = extractLinearFromRadicand(innerLeft);
      const rightLinear = extractLinearFromRadicand(innerRight);
      const leftConst = evaluateConstant(innerLeft);
      const rightConst = evaluateConstant(innerRight);

      if (leftLinear && rightConst !== null) {
        const { variable, coefficient, constant } = leftLinear;
        const solution = (rightConst - constant) / coefficient;

        steps.push({
          rule: 'Solve Linear Equation',
          description: `Isolate ${variable}.`,
          before: { type: 'EQUATION', left: innerLeft, right: innerRight },
          after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
        });

        // Check extraneous
        const varName = variable;
        const lhsCheck = evaluateAtX(ast.left, varName, solution);
        const rhsCheck = evaluateAtX(ast.right, varName, solution);
        const isValid = lhsCheck !== null && rhsCheck !== null && Math.abs(lhsCheck - rhsCheck) < 1e-8;

        steps.push({
          rule: 'Check for Extraneous Solutions',
          description: isValid
            ? `Substituting ${variable} = ${formatNumber(solution)} into the original equation confirms it is valid.`
            : `Substituting ${variable} = ${formatNumber(solution)} into the original equation shows it is extraneous (does not satisfy the original).`,
          before: null,
          after: isValid
            ? { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
            : null
        });

        if (!isValid) {
          return { steps, solution: { variable, value: null, noSolution: true }, graphData: null };
        }

        graphData = {
          type: 'radical',
          index: idx,
          solution: { x: solution, y: lhsCheck }
        };

        return { steps, solution: { variable, value: solution, exact: true }, graphData };
      }

      if (leftLinear && rightLinear) {
        const { variable: v1, coefficient: c1, constant: k1 } = leftLinear;
        const { variable: v2, coefficient: c2, constant: k2 } = rightLinear;
        if (v1 === v2) {
          const solution = (k2 - k1) / (c1 - c2);
          steps.push({
            rule: 'Solve Linear Equation',
            description: `Collect ${v1} terms and solve.`,
            before: { type: 'EQUATION', left: innerLeft, right: innerRight },
            after: { type: 'EQUATION', left: { type: 'VARIABLE', name: v1 }, right: { type: 'NUMBER', value: solution } }
          });

          const lhsCheck = evaluateAtX(ast.left, v1, solution);
          const rhsCheck = evaluateAtX(ast.right, v1, solution);
          const isValid = lhsCheck !== null && rhsCheck !== null && Math.abs(lhsCheck - rhsCheck) < 1e-8;

          steps.push({
            rule: 'Check for Extraneous Solutions',
            description: isValid
              ? `Substituting ${v1} = ${formatNumber(solution)} confirms it is valid.`
              : `Substituting ${v1} = ${formatNumber(solution)} shows it is extraneous.`,
            before: null,
            after: isValid
              ? { type: 'EQUATION', left: { type: 'VARIABLE', name: v1 }, right: { type: 'NUMBER', value: solution } }
              : null
          });

          if (!isValid) {
            return { steps, solution: { variable: v1, value: null, noSolution: true }, graphData: null };
          }

          graphData = { type: 'radical', index: idx, solution: { x: solution, y: lhsCheck } };
          return { steps, solution: { variable: v1, value: solution, exact: true }, graphData };
        }
      }

      throw new Error('Could not solve the inner equation after removing radicals');
    }
    throw new Error('Equations with different radical indices on both sides are not yet supported.');
  } else {
    throw new Error('No radical found in the equation');
  }

  // Evaluate constant side
  const constValue = evaluateConstant(constSide);
  if (constValue !== null && constSide.type !== 'NUMBER') {
    const newConstSide = { type: 'NUMBER', value: constValue };
    steps.push({
      rule: 'Evaluate Constant',
      description: 'Simplify the right side to a single number.',
      before: { type: 'EQUATION', left: radSide, right: constSide },
      after: { type: 'EQUATION', left: radSide, right: newConstSide }
    });
    constSide = newConstSide;
  }

  // Handle coefficient: a × √(expr) = c
  if (radSide.type === 'MULTIPLY') {
    const { coefficient, radical } = extractCoefficientOfRadical(radSide);
    if (coefficient !== null && radical) {
      const constVal = evaluateConstant(constSide);
      if (constVal !== null) {
        const newConst = { type: 'NUMBER', value: constVal / coefficient };
        steps.push({
          rule: 'Isolate Radical Term',
          description: `Divide both sides by ${formatNumber(coefficient)} to isolate the radical.`,
          before: { type: 'EQUATION', left: radSide, right: constSide },
          after: { type: 'EQUATION', left: radical, right: newConst }
        });
        radSide = radical;
        constSide = newConst;
      }
    }
  }

  // Handle additive constant: √(expr) + c = d
  if (radSide.type === 'ADD' || radSide.type === 'SUBTRACT') {
    const { radical, constant, isAdd } = extractAdditiveAroundRadical(radSide);
    if (radical && constant !== null) {
      const constVal = evaluateConstant(constSide);
      if (constVal !== null) {
        const newConstVal = isAdd ? constVal - constant : constVal + constant;
        const newConst = { type: 'NUMBER', value: newConstVal };
        const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
        steps.push({
          rule: 'Isolate Radical Term',
          description: `${action} both sides.`,
          before: { type: 'EQUATION', left: radSide, right: constSide },
          after: { type: 'EQUATION', left: radical, right: newConst }
        });
        radSide = radical;
        constSide = newConst;
      }
    }
  }

  if (radSide.type !== 'RADICAL') {
    throw new Error('Could not isolate radical term');
  }

  const radIndex = radSide.index;
  const radicand = radSide.radicand;
  const resultValue = evaluateConstant(constSide);

  if (resultValue === null) throw new Error('Right side must evaluate to a number');

  // For even roots, right side must be non-negative
  if (radIndex % 2 === 0 && resultValue < 0) {
    steps.push({
      rule: 'No Real Solution',
      description: `A ${radIndex === 2 ? 'square' : 'fourth'} root cannot equal a negative number (${formatNumber(resultValue)}).`,
      before: { type: 'EQUATION', left: radSide, right: constSide },
      after: null
    });
    return { steps, solution: { variable: getVariable(radicand), value: null, noSolution: true }, graphData: null };
  }

  // Raise both sides to power
  const raisedValue = Math.pow(resultValue, radIndex);
  const powerName = radIndex === 2 ? 'square' : radIndex === 3 ? 'cube' : `raise to the ${radIndex}th power`;

  steps.push({
    rule: `${radIndex === 2 ? 'Square' : radIndex === 3 ? 'Cube' : 'Raise'} Both Sides`,
    description: `${radIndex === 2 ? 'Square' : radIndex === 3 ? 'Cube' : 'Raise'} both sides to eliminate the radical. (${radicalSymbol(radIndex)}(expr))${radIndex === 2 ? '\u00B2' : radIndex === 3 ? '\u00B3' : '\u2074'} = expr, and ${formatNumber(resultValue)}${radIndex === 2 ? '\u00B2' : radIndex === 3 ? '\u00B3' : '\u2074'} = ${formatNumber(raisedValue)}.`,
    before: { type: 'EQUATION', left: radSide, right: constSide },
    after: { type: 'EQUATION', left: radicand, right: { type: 'NUMBER', value: raisedValue } }
  });

  // Now solve the inner equation
  const linearInfo = extractLinearFromRadicand(radicand);

  if (linearInfo) {
    const { variable, coefficient, constant } = linearInfo;
    const solution = (raisedValue - constant) / coefficient;

    if (coefficient !== 1 || constant !== 0) {
      steps.push({
        rule: 'Solve Linear Equation',
        description: coefficient !== 1
          ? `Subtract ${formatNumber(constant)}, then divide by ${formatNumber(coefficient)}.`
          : `Subtract ${formatNumber(constant)} from both sides.`,
        before: null,
        after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
      });
    }

    // Extraneous check
    const lhsCheck = evaluateAtX(ast.left, variable, solution);
    const rhsCheck = evaluateAtX(ast.right, variable, solution);
    const isValid = lhsCheck !== null && rhsCheck !== null && Math.abs(lhsCheck - rhsCheck) < 1e-8;

    steps.push({
      rule: 'Check for Extraneous Solutions',
      description: isValid
        ? `Substituting ${variable} = ${formatNumber(solution)} into the original equation: LHS = ${formatNumber(lhsCheck)}, RHS = ${formatNumber(rhsCheck)}. \u2713 Valid.`
        : `Substituting ${variable} = ${formatNumber(solution)} into the original equation: LHS = ${lhsCheck !== null ? formatNumber(lhsCheck) : 'undefined'}, RHS = ${rhsCheck !== null ? formatNumber(rhsCheck) : 'undefined'}. \u2717 Extraneous solution.`,
      before: null,
      after: isValid
        ? { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
        : null
    });

    if (!isValid) {
      return { steps, solution: { variable, value: null, noSolution: true }, graphData: null };
    }

    const isExact = Number.isInteger(raisedValue) && Number.isInteger(solution);

    graphData = {
      type: 'radical',
      index: radIndex,
      solution: { x: solution, y: resultValue }
    };

    return { steps, solution: { variable, value: solution, exact: isExact }, graphData };
  }

  // Quadratic radicand: √(x² + bx + c) = d
  const quadInfo = extractQuadraticFromRadicand(radicand);
  if (quadInfo) {
    const { variable, a, b, c } = quadInfo;
    // ax² + bx + c = raisedValue → ax² + bx + (c - raisedValue) = 0
    const newC = c - raisedValue;
    const discriminant = b * b - 4 * a * newC;

    if (discriminant < 0) {
      steps.push({
        rule: 'Solve Quadratic',
        description: `The discriminant is negative (${formatNumber(discriminant)}), so there are no real solutions.`,
        before: null,
        after: null
      });
      return { steps, solution: { variable, value: null, noSolution: true }, graphData: null };
    }

    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    steps.push({
      rule: 'Solve Quadratic',
      description: discriminant === 0
        ? `One solution: ${variable} = ${formatNumber(x1)}`
        : `Two candidates: ${variable} = ${formatNumber(x1)} or ${variable} = ${formatNumber(x2)}`,
      before: null,
      after: null
    });

    // Check both for extraneous
    const validSolutions = [];
    for (const sol of (discriminant === 0 ? [x1] : [x1, x2])) {
      const lhs = evaluateAtX(ast.left, variable, sol);
      const rhs = evaluateAtX(ast.right, variable, sol);
      const valid = lhs !== null && rhs !== null && Math.abs(lhs - rhs) < 1e-8;
      if (valid) validSolutions.push(sol);

      steps.push({
        rule: 'Check for Extraneous Solutions',
        description: valid
          ? `${variable} = ${formatNumber(sol)}: LHS = ${formatNumber(lhs)}, RHS = ${formatNumber(rhs)}. \u2713 Valid.`
          : `${variable} = ${formatNumber(sol)}: LHS = ${lhs !== null ? formatNumber(lhs) : 'undefined'}, RHS = ${rhs !== null ? formatNumber(rhs) : 'undefined'}. \u2717 Extraneous.`,
        before: null,
        after: valid
          ? { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: sol } }
          : null
      });
    }

    if (validSolutions.length === 0) {
      return { steps, solution: { variable, value: null, noSolution: true }, graphData: null };
    }

    graphData = {
      type: 'radical',
      index: radIndex,
      solution: { x: validSolutions[0], y: resultValue }
    };

    if (validSolutions.length === 1) {
      return { steps, solution: { variable, value: validSolutions[0], exact: Number.isInteger(validSolutions[0]) }, graphData };
    }

    return {
      steps,
      solution: {
        variable,
        value: validSolutions[0],
        value2: validSolutions[1],
        exact: validSolutions.every(v => Number.isInteger(v)),
        multiple: true
      },
      graphData
    };
  }

  // Simple variable radicand: √(x) = c
  if (radicand.type === 'VARIABLE') {
    const variable = radicand.name;
    const solution = raisedValue;

    const lhsCheck = evaluateAtX(ast.left, variable, solution);
    const rhsCheck = evaluateAtX(ast.right, variable, solution);
    const isValid = lhsCheck !== null && rhsCheck !== null && Math.abs(lhsCheck - rhsCheck) < 1e-8;

    steps.push({
      rule: 'Check for Extraneous Solutions',
      description: isValid
        ? `Substituting ${variable} = ${formatNumber(solution)}: \u2713 Valid.`
        : `Substituting ${variable} = ${formatNumber(solution)}: \u2717 Extraneous.`,
      before: null,
      after: isValid
        ? { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
        : null
    });

    if (!isValid) {
      return { steps, solution: { variable, value: null, noSolution: true }, graphData: null };
    }

    graphData = {
      type: 'radical',
      index: radIndex,
      solution: { x: solution, y: resultValue }
    };

    return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) }, graphData };
  }

  throw new Error('Radicand form not supported. Try a linear or quadratic expression inside the radical.');
}

/* =====================================================
   CURSOR STYLES (injected once)
   ===================================================== */

const CURSOR_CSS = `
  @keyframes re-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .re-caret {
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background: #fbbf24;
    animation: re-blink 1s step-end infinite;
    vertical-align: text-bottom;
    margin: 0 -1px;
    border-radius: 1px;
  }
  .re-display:focus {
    outline: none;
  }
  .re-display:focus .re-caret {
    animation: re-blink 1s step-end infinite;
  }
  .re-display:not(:focus) .re-caret {
    opacity: 0.4;
    animation: none;
  }
  .re-char {
    cursor: text;
    position: relative;
  }
  .re-char:hover {
    background: rgba(255,255,255,0.08);
    border-radius: 2px;
  }
  .re-sup-group {
    display: inline;
    cursor: text;
  }
  .re-form-card,
  .re-form-card:visited,
  .re-form-card:active,
  .re-form-card:focus,
  .re-form-card:focus-visible,
  .re-form-card:focus-within {
    outline: none !important;
    box-shadow: none;
    border-color: var(--re-border-color) !important;
  }
`;

/* =====================================================
   ENGINE COMPONENT (Standalone Solver)
   ===================================================== */

export const RadicalSolverEngine = forwardRef(({
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
  const operators = ['^', '\u00D7', '\u00F7', '+', '-', '='];

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
      const solveResult = solveRadicalEquation(ast);

      setResult(solveResult);
      setError(null);
      if (onResultChange) onResultChange(solveResult);
    } catch (e) {
      setError(e.message);
      setResult(null);
      if (onResultChange) onResultChange(null);
    }
  }, [expression, onResultChange]);

  const TYPEABLE = new Set('0123456789.xynXYN^+-=*/()×÷√∛∜');
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

  /* ---- Build display elements with cursor ---- */
  const buildDisplayElements = () => {
    const expr = expression;
    if (expr.length === 0) {
      if (focused) {
        return <span className="re-caret" />;
      }
      return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
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
          while (j < expr.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expr[j]) && expr[j] !== '=') {
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

    const renderCaret = (pos) => {
      if (cursorPos === pos && focused) {
        return <span key={`caret-${pos}`} className="re-caret" />;
      }
      return null;
    };

    const charStyle = (ch) => {
      if (ch === '\u00D7' || ch === '\u00F7' || ch === '+' || ch === '-') return eStyles.displayOp;
      if (ch === '=') return eStyles.displayEquals;
      if (ch === '\u221A' || ch === '\u221B' || ch === '\u221C') return eStyles.displayRadical;
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

    i = 0;
    while (i < expr.length) {
      if (skip.has(i)) { i++; continue; }

      if (supGroups[i]) {
        const group = supGroups[i];
        const baseChar = expr[i];
        const expIndices = group.expIndices;

        elements.push(renderCaret(i));

        elements.push(
          <span key={`sup-${i}`} className="re-sup-group">
            <span
              className="re-char"
              data-idx={i}
              style={charStyle(baseChar)}
            >
              {baseChar}
            </span>
            <sup style={eStyles.displaySup}>
              {renderCaret(group.caretIdx + 1)}
              {expIndices.map((idx) => (
                <React.Fragment key={idx}>
                  <span className="re-char" data-idx={idx}>
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

      elements.push(renderCaret(i));
      elements.push(
        <span
          key={`ch-${i}`}
          className="re-char"
          data-idx={i}
          style={charStyle(expr[i])}
        >
          {displayChar(expr[i])}
        </span>
      );
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

      <div
        ref={displayRef}
        className="re-display"
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
              <button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>
                {op === '^' ? 'x\u207F' : op}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Rad</span>
          <div style={styles.btnGroup}>
            <button style={{ ...styles.btn, ...styles.btnRadical }} onClick={() => insertAt('\u221A')}>{'\u221A'}</button>
            <button style={{ ...styles.btn, ...styles.btnRadical }} onClick={() => insertAt('\u221B')}>{'\u221B'}</button>
            <button style={{ ...styles.btn, ...styles.btnRadical }} onClick={() => insertAt('\u221C')}>{'\u221C'}</button>
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.label}></span>
          <div style={styles.btnGroup}>
            <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt('(')}>(</button>
            <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt(')')}>)</button>
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
            <span>No real solution</span>
          ) : result.solution.multiple ? (
            <span>
              <span style={styles.solVar}>{result.solution.variable}</span>
              <span style={styles.solEq}> = </span>
              <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
              <span style={styles.solOr}> or </span>
              <span style={styles.solVar}>{result.solution.variable}</span>
              <span style={styles.solEq}> = </span>
              <span style={styles.solNum}>{formatNumber(result.solution.value2)}</span>
            </span>
          ) : (
            <span>
              <span style={styles.solVar}>{result.solution.variable}</span>
              <span style={styles.solEq}> = </span>
              <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
              {!result.solution.exact && <span style={styles.solApprox}> {'\u2248'}</span>}
            </span>
          )}
        </div>
      )}
    </div>
  );
});

RadicalSolverEngine.displayName = 'RadicalSolverEngine';

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
  displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
  displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
  displayRadical: { color: '#bfdbfe', fontWeight: '700', fontSize: '1.2em' },
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
  btnRadical: { color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '700', fontSize: '1.15rem' },
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
  solOr: { opacity: 0.7, margin: '0 10px', fontSize: '0.9rem' },
  solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
});

/* =====================================================
   EQUATION FORM GENERATORS
   ===================================================== */

const equationForms = [
  {
    id: 'simple',
    name: 'Simple',
    formula: '\u221Ax = c',
    generate: (nice) => {
      if (nice) {
        const vals = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
        const val = vals[Math.floor(Math.random() * vals.length)];
        return `\u221A(x)=${Math.sqrt(val)}`;
      }
      return `\u221A(x)=${Math.floor(Math.random() * 20) + 1}`;
    }
  },
  {
    id: 'linear-radicand',
    name: 'Linear Radicand',
    formula: '\u221A(ax+b) = c',
    generate: (nice) => {
      if (nice) {
        const c = Math.floor(Math.random() * 8) + 1;
        const cSq = c * c;
        const a = [1, 2, 3][Math.floor(Math.random() * 3)];
        const b = Math.floor(Math.random() * 10) - 5;
        return `\u221A(${a === 1 ? '' : a}x${b >= 0 ? '+' + b : b})=${c}`;
      }
      const a = Math.floor(Math.random() * 5) + 1;
      const b = Math.floor(Math.random() * 20) - 10;
      const c = Math.floor(Math.random() * 10) + 1;
      return `\u221A(${a === 1 ? '' : a}x${b >= 0 ? '+' + b : b})=${c}`;
    }
  },
  {
    id: 'with-constant',
    name: 'With Constant',
    formula: '\u221A(x) + c = d',
    generate: (nice) => {
      if (nice) {
        const root = Math.floor(Math.random() * 8) + 1;
        const c = Math.floor(Math.random() * 10) + 1;
        return `\u221A(x)+${c}=${root + c}`;
      }
      const c = Math.floor(Math.random() * 15) + 1;
      const d = Math.floor(Math.random() * 15) + c + 1;
      return `\u221A(x)+${c}=${d}`;
    }
  },
  {
    id: 'coefficient',
    name: 'With Coefficient',
    formula: 'a\u00B7\u221A(x) = c',
    generate: (nice) => {
      if (nice) {
        const coeff = Math.floor(Math.random() * 4) + 2;
        const root = Math.floor(Math.random() * 6) + 1;
        return `${coeff}\u00D7\u221A(x)=${coeff * root}`;
      }
      const coeff = Math.floor(Math.random() * 8) + 2;
      return `${coeff}\u00D7\u221A(x)=${Math.floor(Math.random() * 30) + 2}`;
    }
  },
  {
    id: 'cube-root',
    name: 'Cube Root',
    formula: '\u221Bx = c',
    generate: (nice) => {
      if (nice) {
        const vals = [1, 8, 27, 64, 125, -1, -8, -27];
        const val = vals[Math.floor(Math.random() * vals.length)];
        return `\u221B(x)=${Math.cbrt(val)}`;
      }
      return `\u221B(x)=${Math.floor(Math.random() * 10) + 1}`;
    }
  },
  {
    id: 'cube-root-linear',
    name: 'Cube Root Linear',
    formula: '\u221B(ax+b) = c',
    generate: (nice) => {
      if (nice) {
        const c = Math.floor(Math.random() * 5) + 1;
        const a = [1, 2][Math.floor(Math.random() * 2)];
        const b = Math.floor(Math.random() * 10) - 5;
        return `\u221B(${a === 1 ? '' : a}x${b >= 0 ? '+' + b : b})=${c}`;
      }
      const a = Math.floor(Math.random() * 3) + 1;
      const b = Math.floor(Math.random() * 20) - 10;
      return `\u221B(${a === 1 ? '' : a}x${b >= 0 ? '+' + b : b})=${Math.floor(Math.random() * 8) + 1}`;
    }
  },
  {
    id: 'radical-equals-radical',
    name: 'Radical = Radical',
    formula: '\u221A(ax+b) = \u221A(cx+d)',
    generate: (nice) => {
      if (nice) {
        const x = Math.floor(Math.random() * 8) + 1;
        const a = [1, 2][Math.floor(Math.random() * 2)];
        const c = a === 1 ? 2 : 1;
        const b = Math.floor(Math.random() * 10);
        const d = a * x + b - c * x;
        return `\u221A(${a === 1 ? '' : a}x+${b})=\u221A(${c === 1 ? '' : c}x+${d})`;
      }
      const a = Math.floor(Math.random() * 3) + 1;
      const b = Math.floor(Math.random() * 10);
      const c = Math.floor(Math.random() * 3) + 1;
      const d = Math.floor(Math.random() * 10);
      return `\u221A(${a === 1 ? '' : a}x+${b})=\u221A(${c === 1 ? '' : c}x+${d})`;
    }
  },
  {
    id: 'extraneous-trap',
    name: 'Extraneous Trap',
    formula: '\u221A(x) = negative',
    generate: () => {
      const neg = -(Math.floor(Math.random() * 5) + 1);
      return `\u221A(x)=${neg}`;
    }
  },
];

/* =====================================================
   WRAPPER COMPONENT (Full Educational Version)
   ===================================================== */

const RadicalEquationSolver = () => {
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
            <span style={wStyles.icon}>{'\u221A'}</span>
          </div>
          <h1 style={wStyles.title}>Radical Equation Solver</h1>
          <p style={wStyles.subtitle}>Solve equations with square roots, cube roots, and fourth roots</p>
        </header>

        {/* Main Content - Side by Side */}
        <div style={wStyles.main}>

          {/* Left Column - Engine + Forms */}
          <div style={wStyles.leftCol}>

            <RadicalSolverEngine
              ref={engineRef}
              onResultChange={handleResultChange}
              onClear={handleClear}
              darkMode={darkMode}
              compact={true}
            />

            {/* Equation Forms - Collapsible */}
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
                        className="re-form-card"
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
              placeholder="Select an equation type or enter your own equation, then click Solve to see the step-by-step solution."
              stepsTitle="Solution Steps"
              renderStepContent={renderStepContent}
              stepCardClass={() => ''}
            />

            {solveResult && solveResult.solution && (
              <div style={wStyles.finalAnswer}>
                <div style={wStyles.answerLabel}>Answer</div>
                {solveResult.solution.noSolution ? (
                  <div>
                    <div style={wStyles.answerValue}>No real solution</div>
                    <div style={wStyles.answerNote}>{'\u2717'} All candidates were extraneous or no real roots exist</div>
                  </div>
                ) : solveResult.solution.multiple ? (
                  <div>
                    <div style={wStyles.answerValue}>
                      <span style={wStyles.answerVar}>{solveResult.solution.variable}</span>
                      <span style={wStyles.answerEq}> = </span>
                      <span style={wStyles.answerNum}>{formatNumber(solveResult.solution.value)}</span>
                      <span style={wStyles.answerOr}> or </span>
                      <span style={wStyles.answerNum}>{formatNumber(solveResult.solution.value2)}</span>
                    </div>
                    <div style={wStyles.answerNote}>
                      {solveResult.solution.exact ? '\u2713 Exact solutions' : '\u2248 Approximate values'}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div style={wStyles.answerValue}>
                      <span style={wStyles.answerVar}>{solveResult.solution.variable}</span>
                      <span style={wStyles.answerEq}> = </span>
                      <span style={wStyles.answerNum}>{formatNumber(solveResult.solution.value)}</span>
                    </div>
                    <div style={wStyles.answerNote}>
                      {solveResult.solution.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}
                    </div>
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
    fontSize: '26px',
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
    '--re-border-color': darkMode ? '#475569' : '#e2e8f0',
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
    '--re-border-color': '#3b82f6',
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
  answerOr: { opacity: 0.7, margin: '0 10px', fontSize: '0.9rem' },
  answerNote: {
    fontSize: '0.8rem',
    opacity: 0.75,
    marginTop: '6px',
  },
});

export default RadicalEquationSolver;