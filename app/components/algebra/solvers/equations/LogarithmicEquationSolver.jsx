import React, { useState, useEffect, useCallback, forwardRef, useImperativeHandle, useRef } from 'react';
import SolutionPanel from '../SolutionPanel';
import THEME_CSS from '../MathSolverThemes';

/* =====================================================
   LOGARITHMIC EQUATION SOLVER

   Two exports:
   - LogarithmicSolverEngine: Standalone solver component
   - LogarithmicEquationSolver: Full educational wrapper (default)

   Features:
   - Integrated SolutionPanel with graph support
   - Theme support via CSS variables
   - Dark mode toggle
   - Full cursor: click-to-place, arrow keys, blinking caret
   - Insert/delete at cursor position
   - Undo/redo support
   ===================================================== */


/* =====================================================
   CURSOR STYLES (injected once)
   ===================================================== */

const CURSOR_CSS = `
  @keyframes le-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .le-caret {
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background: #fbbf24;
    animation: le-blink 1s step-end infinite;
    vertical-align: text-bottom;
    margin: 0 -1px;
    border-radius: 1px;
  }
  .le-display:focus {
    outline: none;
  }
  .le-display:focus .le-caret {
    animation: le-blink 1s step-end infinite;
  }
  .le-display:not(:focus) .le-caret {
    opacity: 0.4;
    animation: none;
  }
  .le-char {
    cursor: text;
    position: relative;
  }
  .le-char:hover {
    background: rgba(255,255,255,0.08);
    border-radius: 2px;
  }
  .le-form-card,
  .le-form-card:visited,
  .le-form-card:active,
  .le-form-card:focus,
  .le-form-card:focus-visible,
  .le-form-card:focus-within {
    outline: none !important;
    box-shadow: none;
    border-color: var(--le-border-color) !important;
  }
`;


/* =====================================================
   MATH RENDERER (inlined from shared MathRenderer)
   ===================================================== */

const MATH_STYLES = `
  .mr {
    display: inline-flex;
    align-items: center;
    font-family: 'Cambria Math', 'STIX Two Math', 'Latin Modern Math', 'Times New Roman', serif;
    vertical-align: middle;
  }
  .mr-frac {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    padding: 0 3px;
  }
  .mr-frac-num {
    border-bottom: 1.5px solid currentColor;
    padding: 1px 6px 3px;
    line-height: 1.2;
  }
  .mr-frac-den {
    padding: 3px 6px 1px;
    line-height: 1.2;
  }
  .mr-sup {
    font-size: 0.65em;
    vertical-align: super;
    line-height: 1;
    margin-left: 1px;
  }
  .mr-sub {
    font-size: 0.65em;
    vertical-align: sub;
    line-height: 1;
    margin-left: 1px;
  }
  .mr-radical {
    display: inline-flex;
    align-items: stretch;
    vertical-align: middle;
  }
  .mr-radical-symbol {
    font-size: 1.15em;
    line-height: 1;
    margin-right: -1px;
    display: flex;
    align-items: flex-end;
  }
  .mr-radical-body {
    border-top: 1.5px solid currentColor;
    padding: 2px 4px 0;
    display: inline-flex;
    align-items: center;
  }
  .mr-paren {
    font-weight: 300;
    font-size: 1.1em;
  }
  .mr-paren-tall {
    font-size: 1.3em;
  }
  .mr-op {
    margin: 0 4px;
  }
  .mr-var {
    font-style: italic;
  }
  .mr-log {
    font-style: normal;
    margin-right: 2px;
  }
  .mr-abs {
    font-weight: 300;
    font-size: 1.1em;
  }
`;

function renderNode(node, parentType = null) {
  if (!node) return null;

  switch (node.type) {
    case 'NUMBER':
      return <span>{formatNumber(node.value)}</span>;
    case 'VARIABLE':
      return <span className="mr-var">{node.name}</span>;
    case 'E':
      return <span className="mr-var">e</span>;
    case 'NEGATE': {
      const inner = renderNode(node.operand, 'NEGATE');
      const needsParens = node.operand.type === 'ADD' || node.operand.type === 'SUBTRACT';
      return <span>{'\u2212'}{needsParens && <span className="mr-paren">(</span>}{inner}{needsParens && <span className="mr-paren">)</span>}</span>;
    }
    case 'ADD':
      return (
        <span>
          {renderNode(node.left, 'ADD')}
          <span className="mr-op">+</span>
          {renderNode(node.right, 'ADD')}
        </span>
      );
    case 'SUBTRACT':
      return (
        <span>
          {renderNode(node.left, 'SUBTRACT')}
          <span className="mr-op">{'\u2212'}</span>
          {renderNode(node.right, 'SUBTRACT')}
        </span>
      );
    case 'MULTIPLY': {
      const left = node.left;
      const right = node.right;
      const useJuxt = (left.type === 'NUMBER' && (right.type === 'VARIABLE' || right.type === 'POWER' || right.type === 'SQRT' || right.type === 'LOG' || right.type === 'LN'))
        || (left.type === 'VARIABLE' && right.type === 'VARIABLE');
      const wrapL = (left.type === 'ADD' || left.type === 'SUBTRACT')
        ? <span><span className="mr-paren">(</span>{renderNode(left, 'MULTIPLY')}<span className="mr-paren">)</span></span>
        : renderNode(left, 'MULTIPLY');
      const wrapR = (right.type === 'ADD' || right.type === 'SUBTRACT')
        ? <span><span className="mr-paren">(</span>{renderNode(right, 'MULTIPLY')}<span className="mr-paren">)</span></span>
        : renderNode(right, 'MULTIPLY');
      if (useJuxt) return <span>{wrapL}{wrapR}</span>;
      return <span>{wrapL}<span className="mr-op">{'\u00B7'}</span>{wrapR}</span>;
    }
    case 'DIVIDE':
      return (
        <span className="mr-frac">
          <span className="mr-frac-num">{renderNode(node.left, 'FRAC')}</span>
          <span className="mr-frac-den">{renderNode(node.right, 'FRAC')}</span>
        </span>
      );
    case 'POWER': {
      const base = node.base;
      const needsBaseParens = base.type === 'ADD' || base.type === 'SUBTRACT'
        || base.type === 'MULTIPLY' || base.type === 'NEGATE'
        || (base.type === 'NUMBER' && base.value < 0);
      const baseR = needsBaseParens
        ? <span><span className="mr-paren">(</span>{renderNode(base, 'POWER')}<span className="mr-paren">)</span></span>
        : renderNode(base, 'POWER');
      return <span>{baseR}<span className="mr-sup">{renderNode(node.exponent, 'SUP')}</span></span>;
    }
    case 'SQRT':
      return (
        <span className="mr-radical">
          <span className="mr-radical-symbol">{'\u221A'}</span>
          <span className="mr-radical-body">{renderNode(node.operand, 'SQRT')}</span>
        </span>
      );
    case 'LOG': {
      const isNat = node.base && node.base.type === 'E';
      const logName = isNat ? 'ln' : 'log';
      const showBase = !isNat && node.base && !(node.base.type === 'NUMBER' && node.base.value === 10);
      return (
        <span>
          <span className="mr-log">{logName}</span>
          {showBase && <span className="mr-sub">{renderNode(node.base, 'SUB')}</span>}
          <span className="mr-paren">(</span>
          {renderNode(node.argument, 'LOG')}
          <span className="mr-paren">)</span>
        </span>
      );
    }
    case 'LN':
      return (
        <span>
          <span className="mr-log">ln</span>
          <span className="mr-paren">(</span>
          {renderNode(node.argument, 'LN')}
          <span className="mr-paren">)</span>
        </span>
      );
    case 'ABS':
      return <span><span className="mr-abs">|</span>{renderNode(node.operand, 'ABS')}<span className="mr-abs">|</span></span>;
    case 'EQUATION':
      return (
        <span>
          {renderNode(node.left, 'EQUATION')}
          <span className="mr-op">=</span>
          {renderNode(node.right, 'EQUATION')}
        </span>
      );
    default:
      return null;
  }
}

function MathRenderer({ node, fontSize, className = '' }) {
  if (!node) return null;
  return (
    <span className={`mr ${className}`} style={fontSize ? { fontSize } : undefined}>
      <style>{MATH_STYLES}</style>
      {renderNode(node)}
    </span>
  );
}


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

    const charMap = {
      '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY, '\u00B7': TokenType.MULTIPLY,
      '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE,
      '^': TokenType.POWER,
      '(': TokenType.LPAREN, ')': TokenType.RPAREN,
      '+': TokenType.PLUS, '-': TokenType.MINUS,
      '=': TokenType.EQUALS, '_': TokenType.UNDERSCORE,
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

    if (token?.type === TokenType.NUMBER) {
      consume();
      return { type: 'NUMBER', value: token.value };
    }

    if (token?.type === TokenType.VARIABLE) {
      consume();
      return { type: 'VARIABLE', name: token.value };
    }

    if (token?.type === TokenType.E) {
      consume();
      return { type: 'E' };
    }

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
        if (peek()?.type === TokenType.NUMBER) {
          base = { type: 'NUMBER', value: consume().value };
        } else if (peek()?.type === TokenType.VARIABLE) {
          base = { type: 'VARIABLE', name: consume().value };
        } else if (peek()?.type === TokenType.E) {
          consume();
          base = { type: 'E' };
        } else if (peek()?.type === TokenType.LPAREN) {
          consume();
          base = parseExpression();
          consume(TokenType.RPAREN);
        }
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

  const ast = parseEquation();
  if (pos < tokens.length) {
    throw new Error('Unexpected tokens at end');
  }
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

function solveLogarithmicEquation(ast) {
  const steps = [];
  let graphData = null;

  if (ast.type !== 'EQUATION') throw new Error('Input must be an equation (use = sign)');

  let { left, right } = ast;

  const leftHasLogVar = containsLog(left) && containsVariable(left);
  const rightHasLogVar = containsLog(right) && containsVariable(right);
  const leftHasVar = containsVariable(left);
  const rightHasVar = containsVariable(right);

  if (leftHasLogVar && rightHasLogVar) {
    if (left.type === 'LOG' && right.type === 'LOG' && basesEqual(left.base, right.base)) {
      steps.push({ rule: 'Equal Logarithms Property', description: 'If log_b(A) = log_b(B), then A = B (same base logs are equal when arguments are equal).', before: ast, after: { type: 'EQUATION', left: left.argument, right: right.argument } });
      const argLeft = left.argument;
      const argRight = right.argument;
      const leftVal = evaluateConstant(argLeft);
      const rightVal = evaluateConstant(argRight);
      if (leftVal !== null && containsVariable(argRight)) return solveLinearEquation(argRight, argLeft, steps);
      else if (rightVal !== null && containsVariable(argLeft)) return solveLinearEquation(argLeft, argRight, steps);
      else return solveLinearEquation(argLeft, argRight, steps);
    }
    throw new Error('Equations with different log bases on both sides require change of base. Coming soon!');
  }

  let logSide, constSide;
  if (leftHasLogVar && !rightHasLogVar) { logSide = left; constSide = right; }
  else if (rightHasLogVar && !leftHasLogVar) {
    logSide = right; constSide = left;
    steps.push({ rule: 'Rearrange Equation', description: 'Move the logarithmic term to the left side for clarity.', before: ast, after: { type: 'EQUATION', left: logSide, right: constSide } });
  } else if (!leftHasLogVar && !rightHasLogVar && (leftHasVar || rightHasVar)) { throw new Error('No logarithm found in equation'); }
  else { throw new Error('Could not determine equation structure'); }

  const constValue = evaluateConstant(constSide);
  if (constValue !== null && constSide.type !== 'NUMBER') {
    const newConstSide = { type: 'NUMBER', value: constValue };
    steps.push({ rule: 'Evaluate Constant', description: 'Simplify the right side to a single number.', before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: logSide, right: newConstSide } });
    constSide = newConstSide;
  }

  if (logSide.type === 'MULTIPLY') {
    const { coefficient, log } = extractLogCoefficient(logSide);
    if (coefficient !== null && log !== null) {
      const constVal = evaluateConstant(constSide);
      if (constVal !== null) {
        const newConst = { type: 'NUMBER', value: constVal / coefficient };
        steps.push({ rule: 'Isolate Logarithm', description: `Divide both sides by ${formatNumber(coefficient)} to isolate the logarithm.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: log, right: newConst } });
        logSide = log; constSide = newConst;
      }
    }
  }

  if (logSide.type === 'ADD' || logSide.type === 'SUBTRACT') {
    const { log, constant, isAdd } = extractLogAdditive(logSide);
    if (log !== null && constant !== null) {
      const constVal = evaluateConstant(constSide);
      if (constVal !== null) {
        const newConstVal = isAdd ? constVal - constant : constVal + constant;
        const newConst = { type: 'NUMBER', value: newConstVal };
        const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
        steps.push({ rule: 'Isolate Logarithm', description: `${action} both sides.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: log, right: newConst } });
        logSide = log; constSide = newConst;
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
  const exponentialValue = Math.pow(baseValue, resultValue);
  const baseDisplay = isNatural ? { type: 'E' } : base;
  const expNode = { type: 'POWER', base: baseDisplay, exponent: { type: 'NUMBER', value: resultValue } };

  steps.push({ rule: 'Convert to Exponential Form', description: isNatural ? 'If ln(A) = c, then A = e^c. This is the inverse relationship.' : `If log_${formatNumber(baseValue)}(A) = c, then A = ${formatNumber(baseValue)}^c. This is the inverse relationship.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: argument, right: expNode } });
  steps.push({ rule: 'Evaluate Exponential', description: isNatural ? `Calculate e^${formatNumber(resultValue)} \u2248 ${formatNumber(exponentialValue)}` : `Calculate ${formatNumber(baseValue)}^${formatNumber(resultValue)} = ${formatNumber(exponentialValue)}`, before: { type: 'EQUATION', left: argument, right: expNode }, after: { type: 'EQUATION', left: argument, right: { type: 'NUMBER', value: exponentialValue } } });

  if (argument.type === 'VARIABLE') {
    if (exponentialValue <= 0) throw new Error(`No solution: logarithm argument must be positive, but we got ${formatNumber(exponentialValue)}`);
    graphData = { type: 'logarithmic', base: baseValue, solution: { x: exponentialValue, y: resultValue } };
    return { steps, solution: { variable: argument.name, value: exponentialValue, exact: Number.isInteger(exponentialValue) }, graphData };
  }

  const linearInfo = parseLinearArgument(argument);
  if (linearInfo) {
    const { variable, coefficient, constant } = linearInfo;
    steps.push({ rule: 'Solve Linear Equation', description: `Now solve: ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))} = ${formatNumber(exponentialValue)}`, before: null, after: null });
    const subtracted = exponentialValue - constant;
    const solution = subtracted / coefficient;
    if (exponentialValue <= 0) throw new Error('No solution: logarithm argument must be positive');
    steps.push({ rule: 'Isolate Variable', description: coefficient !== 1 ? `Subtract ${formatNumber(constant)}, then divide by ${formatNumber(coefficient)}.` : `Subtract ${formatNumber(constant)} from both sides.`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
    const argValue = coefficient * solution + constant;
    if (argValue <= 0) throw new Error(`No valid solution: x = ${formatNumber(solution)} makes the logarithm argument non-positive`);
    graphData = { type: 'logarithmic', base: baseValue, solution: { x: argValue, y: resultValue } };
    return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) }, graphData };
  }

  throw new Error('Argument form not supported');
}

function solveLinearEquation(leftExpr, rightExpr, steps) {
  const leftLinear = parseLinearArgument(leftExpr);
  const rightLinear = parseLinearArgument(rightExpr);
  const rightConst = evaluateConstant(rightExpr);
  const leftConst = evaluateConstant(leftExpr);

  if (leftLinear && rightConst !== null) {
    const { variable, coefficient, constant } = leftLinear;
    const solution = (rightConst - constant) / coefficient;
    steps.push({ rule: 'Solve Linear Equation', description: `Solve: ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))} = ${formatNumber(rightConst)}`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
    return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) } };
  }

  if (rightLinear && leftConst !== null) {
    const { variable, coefficient, constant } = rightLinear;
    const solution = (leftConst - constant) / coefficient;
    steps.push({ rule: 'Solve Linear Equation', description: `Solve: ${formatNumber(leftConst)} = ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))}`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
    return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) } };
  }

  if (leftLinear && rightLinear && leftLinear.variable === rightLinear.variable) {
    const { variable } = leftLinear;
    const netCoeff = leftLinear.coefficient - rightLinear.coefficient;
    const netConst = rightLinear.constant - leftLinear.constant;
    if (Math.abs(netCoeff) < 1e-10) throw new Error(netConst === 0 ? 'Infinite solutions' : 'No solution');
    const solution = netConst / netCoeff;
    steps.push({ rule: 'Solve Linear Equation', description: `Combine like terms and solve for ${variable}.`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
    return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) } };
  }

  throw new Error('Could not solve the resulting equation');
}


/* =====================================================
   ENGINE COMPONENT (Standalone Solver)
   ===================================================== */

const VALID_KEYS = new Set([
  '0','1','2','3','4','5','6','7','8','9','.',
  '+','-','*','/','^','=','(',')',
  'x','y','n','e',
  'X','Y','N','E',
]);

export const LogarithmicSolverEngine = forwardRef(({
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
  const operators = ['+', '-', '\u00D7', '\u00F7', '^', '='];

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

  const insertAtCursor = useCallback((items) => {
    pushUndo(expression, cursorPos);
    const arr = Array.isArray(items) ? items : [items];
    const newExpr = [...expression.slice(0, cursorPos), ...arr, ...expression.slice(cursorPos)];
    setExpression(newExpr);
    setCursorPos(cursorPos + arr.length);
    setResult(null);
    setError(null);
  }, [expression, cursorPos, pushUndo]);

  const addToExpression = (item) => {
    insertAtCursor(item);
  };

  const addLogToExpression = (base) => {
    if (base === 'e') {
      insertAtCursor(['l', 'n', '(']);
    } else if (base === '10') {
      insertAtCursor(['l', 'o', 'g', '(']);
    } else {
      insertAtCursor(['l', 'o', 'g', '_', base, '(']);
    }
  };

  const backspace = useCallback(() => {
    if (cursorPos === 0) return;
    pushUndo(expression, cursorPos);
    const newExpr = [...expression.slice(0, cursorPos - 1), ...expression.slice(cursorPos)];
    setExpression(newExpr);
    setCursorPos(cursorPos - 1);
    setResult(null);
    setError(null);
  }, [expression, cursorPos, pushUndo]);

  const deleteForward = useCallback(() => {
    if (cursorPos >= expression.length) return;
    pushUndo(expression, cursorPos);
    const newExpr = [...expression.slice(0, cursorPos), ...expression.slice(cursorPos + 1)];
    setExpression(newExpr);
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
      const solveResult = solveLogarithmicEquation(ast);
      setResult(solveResult);
      setError(null);
      if (onResultChange) onResultChange(solveResult);
    } catch (e) {
      setError(e.message);
      setResult(null);
      if (onResultChange) onResultChange(null);
    }
  }, [expression, onResultChange]);

  // Keyboard input handler
  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'z' || e.key === 'Z') { e.preventDefault(); undo(); return; }
      return;
    }

    if (e.key === 'ArrowLeft') { e.preventDefault(); setCursorPos(p => Math.max(0, p - 1)); return; }
    if (e.key === 'ArrowRight') { e.preventDefault(); setCursorPos(p => Math.min(expression.length, p + 1)); return; }
    if (e.key === 'Home') { e.preventDefault(); setCursorPos(0); return; }
    if (e.key === 'End') { e.preventDefault(); setCursorPos(expression.length); return; }

    if (e.key === 'Backspace') { e.preventDefault(); backspace(); return; }
    if (e.key === 'Delete') { e.preventDefault(); deleteForward(); return; }

    if (e.key === 'Enter') { e.preventDefault(); if (expression.length > 0) solve(); return; }
    if (e.key === 'Escape') { e.preventDefault(); clearAll(); return; }

    if (VALID_KEYS.has(e.key)) {
      e.preventDefault();
      let mapped = e.key.toLowerCase();
      if (e.key === '*') mapped = '\u00D7';
      if (e.key === '/') mapped = '\u00F7';
      insertAtCursor(mapped);
    }
  }, [expression, cursorPos, undo, backspace, deleteForward, solve, clearAll, insertAtCursor]);

  /* -------------------------------------------------
     DISPLAY RENDERER with clickable cursor placement
     ------------------------------------------------- */

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

  const renderExpressionDisplay = () => {
    const expr = expression;
    const eStyles = getEngineStyles(darkMode);

    if (!expr || expr.length === 0) {
      if (focused) {
        return <span className="le-caret" />;
      }
      return <span style={eStyles.placeholder}>Enter equation...</span>;
    }

    const renderCaret = (pos) => {
      if (cursorPos === pos && focused) {
        return <span key={`caret-${pos}`} className="le-caret" />;
      }
      return null;
    };

    // Build segments
    const segments = [];
    let i = 0;

    while (i < expr.length) {
      // ln
      if (expr[i] === 'l' && expr[i + 1] === 'n') {
        segments.push({ startIdx: i, endIdx: i + 1, el: (
          <span key={`g${i}`} style={eStyles.displayLogExpr}>
            <span data-idx={i} className="le-char" style={eStyles.displayLog}>l</span>
            <span data-idx={i + 1} className="le-char" style={eStyles.displayLog}>n</span>
          </span>
        )});
        i += 2;
        continue;
      }

      // log (with optional _base)
      if (expr[i] === 'l' && expr[i + 1] === 'o' && expr[i + 2] === 'g') {
        let j = i + 3;
        let baseChars = [];
        let baseIndices = [];
        if (expr[j] === '_') {
          j++; // skip underscore
          while (j < expr.length && /[0-9a-zA-Z]/.test(expr[j]) && expr[j] !== '(') {
            baseChars.push(expr[j]);
            baseIndices.push(j);
            j++;
          }
        }
        segments.push({ startIdx: i, endIdx: j - 1, el: (
          <span key={`g${i}`} style={eStyles.displayLogExpr}>
            <span data-idx={i} className="le-char" style={eStyles.displayLog}>l</span>
            <span data-idx={i + 1} className="le-char" style={eStyles.displayLog}>o</span>
            <span data-idx={i + 2} className="le-char" style={eStyles.displayLog}>g</span>
            {expr[i + 3] === '_' && <span data-idx={i + 3} className="le-char" style={eStyles.displayOp}></span>}
            {baseChars.length > 0 && (
              <sub style={eStyles.displaySub}>
                {baseChars.map((bc, bi) => (
                  <span key={baseIndices[bi]} data-idx={baseIndices[bi]} className="le-char">{bc}</span>
                ))}
              </sub>
            )}
          </span>
        )});
        i = j;
        continue;
      }

      // Power: char^...
      const current = expr[i];
      const next = expr[i + 1];

      if (next === '^') {
        let expChars = [];
        let expIndices = [];
        let j = i + 2;
        if (expr[j] === '(') {
          let depth = 1;
          expChars.push('('); expIndices.push(j);
          j++;
          while (j < expr.length && depth > 0) {
            if (expr[j] === '(') depth++;
            if (expr[j] === ')') depth--;
            expChars.push(expr[j]); expIndices.push(j);
            j++;
          }
        } else {
          while (j < expr.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expr[j]) && expr[j] !== '=') {
            expChars.push(expr[j]); expIndices.push(j);
            j++;
          }
        }
        if (expChars.length > 0) {
          segments.push({ startIdx: i, endIdx: j - 1, el: (
            <span key={`g${i}`} style={eStyles.displayTerm}>
              <span data-idx={i} className="le-char" style={current === 'e' ? eStyles.displayEuler : undefined}>{current}</span>
              <span data-idx={i + 1} className="le-char" style={eStyles.displayOp}></span>
              <sup style={eStyles.displaySup}>
                {expChars.map((ec, ei) => (
                  <span key={expIndices[ei]} data-idx={expIndices[ei]} className="le-char">{ec}</span>
                ))}
              </sup>
            </span>
          )});
          i = j;
          continue;
        }
      }

      // Single characters
      const charMap = {
        '\u00D7': { style: eStyles.displayOp, text: ' \u00B7 ' },
        '\u00F7': { style: eStyles.displayOp, text: ' / ' },
        '+': { style: eStyles.displayOp, text: ' + ' },
        '-': { style: eStyles.displayOp, text: ' \u2212 ' },
        '=': { style: eStyles.displayEquals, text: ' = ' },
        '^': { style: eStyles.displayOp, text: '^' },
        'e': { style: eStyles.displayEuler, text: 'e' },
        '_': { style: eStyles.displayOp, text: '' },
      };

      if (charMap[current]) {
        if (charMap[current].text) {
          segments.push({ startIdx: i, endIdx: i, el: (
            <span key={`c${i}`} data-idx={i} className="le-char" style={charMap[current].style}>{charMap[current].text}</span>
          )});
        }
      } else {
        segments.push({ startIdx: i, endIdx: i, el: (
          <span key={`c${i}`} data-idx={i} className="le-char">{current}</span>
        )});
      }
      i++;
    }

    // Build output with cursor inserted
    const output = [];
    let cursorInserted = false;

    for (const seg of segments) {
      if (!cursorInserted && cursorPos <= seg.startIdx) {
        output.push(renderCaret(cursorPos));
        cursorInserted = true;
      }
      output.push(seg.el);
      if (!cursorInserted && cursorPos <= seg.endIdx + 1) {
        output.push(renderCaret(cursorPos));
        cursorInserted = true;
      }
    }

    if (!cursorInserted) {
      output.push(renderCaret(cursorPos));
    }

    return output;
  };

  const p = compact ? 0.85 : 1;
  const styles = getEngineStyles(darkMode);

  return (
    <div style={{ ...styles.container, ...style }}>
      <style>{CURSOR_CSS}</style>

      <div
        ref={displayRef}
        className="le-display"
        tabIndex={0}
        style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px`, cursor: 'text' }}
        onClick={handleDisplayClick}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {renderExpressionDisplay()}
      </div>

      {error && (
        <div style={styles.error}>{error}</div>
      )}

      <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
        <div style={styles.row}>
          <span style={styles.label}>Log</span>
          <div style={styles.btnGroup}>
            <button style={{ ...styles.btn, ...styles.btnLog }} onClick={() => addLogToExpression('e')}>ln</button>
            <button style={{ ...styles.btn, ...styles.btnLog }} onClick={() => addLogToExpression('10')}>log</button>
            <button style={{ ...styles.btn, ...styles.btnLog }} onClick={() => addLogToExpression('2')}>log<sub>2</sub></button>
            <button style={{ ...styles.btn, ...styles.btnLog }} onClick={() => addLogToExpression('3')}>log<sub>3</sub></button>
            <button style={{ ...styles.btn, ...styles.btnLog }} onClick={() => addLogToExpression('5')}>log<sub>5</sub></button>
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Var</span>
          <div style={styles.btnGroup}>
            {variables.map((v) => (
              <button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => addToExpression(v)}>{v}</button>
            ))}
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Num</span>
          <div style={styles.btnGroup}>
            {numbers.map((n) => (
              <button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => addToExpression(n)}>{n}</button>
            ))}
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Op</span>
          <div style={styles.btnGroup}>
            {operators.map((op) => (
              <button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => addToExpression(op)}>
                {op === '^' ? 'x\u207F' : op}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.label}></span>
          <div style={styles.btnGroup}>
            <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => addToExpression('e')}>e</button>
            <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => addToExpression('(')}>{'('}</button>
            <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => addToExpression(')')}>{')'}</button>
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
          <button style={{ ...styles.btnAction, ...styles.btnBack }} onClick={backspace}>{'\u232B'}</button>
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
          <div style={styles.solLabel}>Answer</div>
          <div style={styles.solValue}>
            <span style={styles.solVar}>{result.solution.variable}</span>
            <span style={styles.solEq}> = </span>
            <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
          </div>
          <div style={styles.solNote}>
            {result.solution.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}
          </div>
        </div>
      )}
    </div>
  );
});

LogarithmicSolverEngine.displayName = 'LogarithmicSolverEngine';

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
  displayTerm: { display: 'inline-flex', alignItems: 'baseline' },
  displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px' },
  displaySub: { fontSize: '0.65em', color: '#bfdbfe', marginLeft: '1px' },
  displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
  displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
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
  btnBack: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b', fontSize: '1.1rem' },
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
    padding: '16px 20px',
    background: darkMode
      ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
      : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '12px',
    textAlign: 'center',
    color: '#fff',
  },
  solLabel: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    opacity: 0.8,
    marginBottom: '6px',
    fontWeight: '600',
  },
  solValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  solVar: { fontStyle: 'italic' },
  solEq: { opacity: 0.8, margin: '0 6px' },
  solNum: { color: '#fbbf24' },
  solNote: {
    fontSize: '0.8rem',
    opacity: 0.75,
    marginTop: '6px',
  },
});


/* =====================================================
   EQUATION FORM GENERATORS
   ===================================================== */

const equationForms = [
  { id: 'simple', name: 'Simple', formula: <span>log<sub>b</sub>(x) = c</span>,
    generate: (nice) => { const bases = [2, 3, 5, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; if (nice) { const exp = Math.floor(Math.random() * 4) + 1; return `log_${base}(x)=${exp}`; } return `log_${base}(x)=${Math.floor(Math.random() * 8) + 1}`; } },
  { id: 'natural', name: 'Natural Log', formula: <span>ln(x) = c</span>,
    generate: (nice) => { if (nice) { const vals = [1, 2, 3, 4, 5]; return `ln(x)=${vals[Math.floor(Math.random() * vals.length)]}`; } return `ln(x)=${(Math.random() * 5 + 0.5).toFixed(2)}`; } },
  { id: 'coefficient', name: 'With Coefficient', formula: <span>a &middot; log<sub>b</sub>(x) = c</span>,
    generate: (nice) => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const coeff = Math.floor(Math.random() * 4) + 2; if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `${coeff}\u00D7log_${base}(x)=${coeff * exp}`; } return `${coeff}\u00D7log_${base}(x)=${Math.floor(Math.random() * 12) + 2}`; } },
  { id: 'linear-arg', name: 'Linear Argument', formula: <span>log<sub>b</sub>(mx + n) = c</span>,
    generate: (nice) => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const m = Math.floor(Math.random() * 3) + 1; const n = Math.floor(Math.random() * 10) - 5; const nStr = n >= 0 ? `+${n}` : `${n}`; const mStr = m === 1 ? 'x' : `${m}\u00D7x`; if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `log_${base}(${mStr}${nStr})=${exp}`; } return `log_${base}(${mStr}${nStr})=${Math.floor(Math.random() * 5) + 1}`; } },
  { id: 'with-constant', name: 'With Constant', formula: <span>log<sub>b</sub>(x) + c = d</span>,
    generate: (nice) => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const c = Math.floor(Math.random() * 5) + 1; if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `log_${base}(x)+${c}=${exp + c}`; } return `log_${base}(x)+${c}=${Math.floor(Math.random() * 8) + c}`; } },
  { id: 'natural-linear', name: 'Natural Linear', formula: <span>ln(mx + n) = c</span>,
    generate: (nice) => { const m = Math.floor(Math.random() * 3) + 1; const n = Math.floor(Math.random() * 10) - 3; const nStr = n >= 0 ? `+${n}` : `${n}`; const mStr = m === 1 ? 'x' : `${m}\u00D7x`; if (nice) { const vals = [1, 2, 3]; return `ln(${mStr}${nStr})=${vals[Math.floor(Math.random() * vals.length)]}`; } return `ln(${mStr}${nStr})=${(Math.random() * 4 + 0.5).toFixed(2)}`; } },
  { id: 'same-base', name: 'Same Base Both Sides', formula: <span>log<sub>b</sub>(f(x)) = log<sub>b</sub>(c)</span>,
    generate: () => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const m = Math.floor(Math.random() * 3) + 1; const n = Math.floor(Math.random() * 10) - 5; const c = Math.floor(Math.random() * 50) + 10; const nStr = n >= 0 ? `+${n}` : `${n}`; const mStr = m === 1 ? 'x' : `${m}\u00D7x`; return `log_${base}(${mStr}${nStr})=log_${base}(${c})`; } },
  { id: 'base-e-coeff', name: 'Natural with Coefficient', formula: <span>a &middot; ln(x) = c</span>,
    generate: (nice) => { const coeff = Math.floor(Math.random() * 4) + 2; if (nice) { const vals = [2, 4, 6, 8]; return `${coeff}\u00D7ln(x)=${vals[Math.floor(Math.random() * vals.length)]}`; } return `${coeff}\u00D7ln(x)=${(Math.random() * 10 + 1).toFixed(2)}`; } }
];


/* =====================================================
   WRAPPER COMPONENT (Full Educational Version)
   ===================================================== */

const LogarithmicEquationSolver = () => {
  const engineRef = useRef(null);
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

  const renderStepMath = (step, index) => {
    if (!step.before && !step.after) return null;
    return (
      <div>
        {step.before && (
          <div style={wStyles.stepMathBox}>
            <MathRenderer node={step.before} fontSize="1.05rem" />
          </div>
        )}
        {step.after && (
          <div style={wStyles.stepTransform}>
            <span style={wStyles.arrow}>{'\u27F9'}</span>
            <div style={wStyles.stepMathBox}>
              <MathRenderer node={step.after} fontSize="1.05rem" />
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
            <span style={wStyles.icon}>log</span>
          </div>
          {/* <h1 style={wStyles.title}>Logarithmic Equation Solver</h1> */}
          <p style={wStyles.subtitle}>Solve equations with logarithms step by step</p>
        </header>

        {/* Main Content - Side by Side */}
        <div style={wStyles.main}>

          {/* Left Column - Engine + Forms */}
          <div style={wStyles.leftCol}>

            <LogarithmicSolverEngine
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
                        className="le-form-card"
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
              renderStepContent={renderStepMath}
              stepCardClass={() => ''}
            />

            {solveResult && solveResult.solution && (
              <div style={wStyles.finalAnswer}>
                <div style={wStyles.answerLabel}>Answer</div>
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
    fontSize: '14px',
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
    '--le-border-color': darkMode ? '#475569' : '#e2e8f0',
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
    '--le-border-color': '#3b82f6',
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
  stepMathBox: {
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
  answerNote: {
    fontSize: '0.8rem',
    opacity: 0.75,
    marginTop: '6px',
  },
});

export default LogarithmicEquationSolver;

