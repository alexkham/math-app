import React, { useState, forwardRef, useImperativeHandle } from 'react';

/* =====================================================
   EXPONENTIAL INEQUALITY SOLVER v1
   
   Two exports:
   - ExponentialInequalitySolverEngine: Standalone solver component
   - ExponentialInequalitySolverWithExamples: Full educational wrapper (default)
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
  LT: 'LT',       // <
  GT: 'GT',       // >
  LTE: 'LTE',     // ≤
  GTE: 'GTE',     // ≥
  E: 'E',
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
    
    // Inequality operators
    if (char === '≤' || (char === '<' && input[i + 1] === '=')) {
      tokens.push({ type: TokenType.LTE });
      i += char === '≤' ? 1 : 2;
      continue;
    }
    
    if (char === '≥' || (char === '>' && input[i + 1] === '=')) {
      tokens.push({ type: TokenType.GTE });
      i += char === '≥' ? 1 : 2;
      continue;
    }
    
    if (char === '<') {
      tokens.push({ type: TokenType.LT });
      i++;
      continue;
    }
    
    if (char === '>') {
      tokens.push({ type: TokenType.GT });
      i++;
      continue;
    }
    
    const charMap = {
      '×': TokenType.MULTIPLY, '*': TokenType.MULTIPLY,
      '÷': TokenType.DIVIDE, '/': TokenType.DIVIDE,
      '^': TokenType.POWER,
      '(': TokenType.LPAREN, ')': TokenType.RPAREN,
      '+': TokenType.PLUS, '-': TokenType.MINUS,
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
      const right = parseExpression();
      return { 
        type: 'INEQUALITY', 
        operator: opToken.type,
        left, 
        right 
      };
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
  return (Math.round(num * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, '');
}

const opSymbols = {
  [TokenType.LT]: '<',
  [TokenType.GT]: '>',
  [TokenType.LTE]: '≤',
  [TokenType.GTE]: '≥',
};

const opNames = {
  [TokenType.LT]: 'less than',
  [TokenType.GT]: 'greater than',
  [TokenType.LTE]: 'less than or equal to',
  [TokenType.GTE]: 'greater than or equal to',
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

function hasVariableInExponent(node) {
  if (!node) return false;
  if (node.type === 'POWER') return containsVariable(node.exponent);
  if (['MULTIPLY', 'DIVIDE', 'ADD', 'SUBTRACT'].includes(node.type)) {
    return hasVariableInExponent(node.left) || hasVariableInExponent(node.right);
  }
  return false;
}

function containsVariable(node) {
  if (!node) return false;
  if (node.type === 'VARIABLE') return true;
  if (node.type === 'NUMBER' || node.type === 'E') return false;
  if (node.type === 'NEGATE') return containsVariable(node.operand);
  if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
  return containsVariable(node.left) || containsVariable(node.right);
}

function evaluateConstant(node) {
  if (!node) return null;
  switch (node.type) {
    case 'NUMBER': return node.value;
    case 'E': return Math.E;
    case 'NEGATE': const v = evaluateConstant(node.operand); return v !== null ? -v : null;
    case 'ADD': case 'SUBTRACT': case 'MULTIPLY': case 'DIVIDE': case 'POWER':
      const l = evaluateConstant(node.left || node.base);
      const r = evaluateConstant(node.right || node.exponent);
      if (l === null || r === null) return null;
      if (node.type === 'ADD') return l + r;
      if (node.type === 'SUBTRACT') return l - r;
      if (node.type === 'MULTIPLY') return l * r;
      if (node.type === 'DIVIDE') return r !== 0 ? l / r : null;
      if (node.type === 'POWER') return Math.pow(l, r);
    default: return null;
  }
}

function extractCoefficient(node) {
  if (node.type !== 'MULTIPLY') return { coefficient: null, exponential: null };
  if (node.left.type === 'POWER' && hasVariableInExponent(node.left)) {
    return { coefficient: node.right, exponential: node.left };
  }
  if (node.right.type === 'POWER' && hasVariableInExponent(node.right)) {
    return { coefficient: node.left, exponential: node.right };
  }
  return { coefficient: null, exponential: null };
}

function extractAdditiveConstant(node) {
  if (node.type !== 'ADD' && node.type !== 'SUBTRACT') {
    return { exponential: null, constant: null, isAdd: false };
  }
  const isAdd = node.type === 'ADD';
  if (hasVariableInExponent(node.left) && !containsVariable(node.right)) {
    const constVal = evaluateConstant(node.right);
    if (node.left.type === 'POWER') {
      return { exponential: node.left, constant: constVal, isAdd };
    }
  }
  if (hasVariableInExponent(node.right) && !containsVariable(node.left) && isAdd) {
    const constVal = evaluateConstant(node.left);
    if (node.right.type === 'POWER') {
      return { exponential: node.right, constant: constVal, isAdd };
    }
  }
  return { exponential: null, constant: null, isAdd: false };
}

function findPerfectPower(base, result) {
  if (result === 1) return 0;
  if (result === base) return 1;
  let power = 0, current = 1;
  while (current < result && power < 100) {
    current *= base;
    power++;
    if (current === result) return power;
  }
  power = -1;
  current = 1 / base;
  while (power > -20) {
    if (Math.abs(current - result) < 1e-10) return power;
    current /= base;
    power--;
  }
  return null;
}

function parseLinearExponent(node) {
  if (node.type === 'VARIABLE') {
    return { variable: node.name, coefficient: 1, constant: 0 };
  }
  if (node.type === 'MULTIPLY') {
    const lv = evaluateConstant(node.left), rv = evaluateConstant(node.right);
    if (lv !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: lv, constant: 0 };
    if (rv !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rv, constant: 0 };
  }
  if (node.type === 'ADD' || node.type === 'SUBTRACT') {
    const leftLinear = parseLinearExponent(node.left);
    const rightConst = evaluateConstant(node.right);
    if (leftLinear && rightConst !== null) {
      return {
        variable: leftLinear.variable,
        coefficient: leftLinear.coefficient,
        constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst)
      };
    }
    const rightLinear = parseLinearExponent(node.right);
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

/* =====================================================
   AST TO MATH DISPLAY
   ===================================================== */

function astToMathDisplay(node, key = 'root') {
  if (!node) return null;
  
  const wrap = (n, k) => {
    if (n.type === 'ADD' || n.type === 'SUBTRACT') {
      return <span key={k}>({astToMathDisplay(n, k)})</span>;
    }
    return astToMathDisplay(n, k);
  };
  
  switch (node.type) {
    case 'NUMBER': return <span key={key} style={mathStyles.number}>{formatNumber(node.value)}</span>;
    case 'VARIABLE': return <span key={key} style={mathStyles.variable}>{node.name}</span>;
    case 'E': return <span key={key} style={mathStyles.euler}>e</span>;
    case 'NEGATE': return <span key={key}>−{astToMathDisplay(node.operand, `${key}-neg`)}</span>;
    case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`)}<span style={mathStyles.op}> + </span>{astToMathDisplay(node.right, `${key}-r`)}</span>;
    case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`)}<span style={mathStyles.op}> − </span>{astToMathDisplay(node.right, `${key}-r`)}</span>;
    case 'MULTIPLY': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={mathStyles.op}> · </span>{wrap(node.right, `${key}-r`)}</span>;
    case 'DIVIDE': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={mathStyles.op}> / </span>{wrap(node.right, `${key}-r`)}</span>;
    case 'POWER': return <span key={key} style={mathStyles.power}>{wrap(node.base, `${key}-base`)}<sup style={mathStyles.sup}>{astToMathDisplay(node.exponent, `${key}-exp`)}</sup></span>;
    case 'INEQUALITY': return (
      <span key={key}>
        {astToMathDisplay(node.left, `${key}-l`)}
        <span style={mathStyles.ineqOp}> {opSymbols[node.operator]} </span>
        {astToMathDisplay(node.right, `${key}-r`)}
      </span>
    );
    default: return null;
  }
}

const mathStyles = {
  number: { color: '#1e3a5f' },
  variable: { fontStyle: 'italic', color: '#3b82f6', fontWeight: '500' },
  euler: { fontStyle: 'italic', color: '#0891b2' },
  op: { color: '#64748b', margin: '0 2px' },
  ineqOp: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
  power: { display: 'inline-flex', alignItems: 'baseline' },
  sup: { fontSize: '0.7em', color: '#3b82f6', marginLeft: '1px' },
};

/* =====================================================
   SOLVER
   ===================================================== */

function solveExponentialInequality(ast) {
  const steps = [];
  
  if (ast.type !== 'INEQUALITY') {
    throw new Error('Input must be an inequality (use <, >, ≤, or ≥)');
  }
  
  let { left, right, operator } = ast;
  const leftHasVar = hasVariableInExponent(left);
  const rightHasVar = hasVariableInExponent(right);
  
  let expSide, constSide;
  
  if (leftHasVar && !rightHasVar) {
    expSide = left;
    constSide = right;
  } else if (rightHasVar && !leftHasVar) {
    expSide = right;
    constSide = left;
    operator = flipOperator(operator);
    steps.push({
      rule: 'Rearrange Inequality',
      description: 'Move the exponential term to the left side (flip the inequality sign).',
      before: ast,
      after: { type: 'INEQUALITY', operator, left: expSide, right: constSide }
    });
  } else if (leftHasVar && rightHasVar) {
    throw new Error('Inequalities with exponentials on both sides are not yet supported.');
  } else {
    throw new Error('No variable found in any exponent');
  }
  
  // Evaluate constant side
  const constValue = evaluateConstant(constSide);
  if (constValue !== null && constSide.type !== 'NUMBER') {
    const newConstSide = { type: 'NUMBER', value: constValue };
    steps.push({
      rule: 'Evaluate Constant',
      description: 'Simplify the right side to a single number.',
      before: { type: 'INEQUALITY', operator, left: expSide, right: constSide },
      after: { type: 'INEQUALITY', operator, left: expSide, right: newConstSide }
    });
    constSide = newConstSide;
  }
  
  // Handle coefficient: a × b^x > c
  if (expSide.type === 'MULTIPLY') {
    const { coefficient, exponential } = extractCoefficient(expSide);
    if (coefficient && exponential) {
      const coeffValue = evaluateConstant(coefficient);
      const constVal = evaluateConstant(constSide);
      if (coeffValue !== null && constVal !== null) {
        const newConst = { type: 'NUMBER', value: constVal / coeffValue };
        const flipped = coeffValue < 0;
        if (flipped) {
          operator = flipOperator(operator);
        }
        steps.push({
          rule: 'Isolate Exponential Term',
          description: `Divide both sides by ${formatNumber(coeffValue)}.${flipped ? ' Since we divided by a negative number, flip the inequality sign.' : ''}`,
          before: { type: 'INEQUALITY', operator: flipped ? flipOperator(operator) : operator, left: expSide, right: constSide },
          after: { type: 'INEQUALITY', operator, left: exponential, right: newConst }
        });
        expSide = exponential;
        constSide = newConst;
      }
    }
  }
  
  // Handle additive constant: b^x + c > d
  if (expSide.type === 'ADD' || expSide.type === 'SUBTRACT') {
    const { exponential, constant, isAdd } = extractAdditiveConstant(expSide);
    if (exponential && constant !== null) {
      const constVal = evaluateConstant(constSide);
      if (constVal !== null) {
        const newConstVal = isAdd ? constVal - constant : constVal + constant;
        const newConst = { type: 'NUMBER', value: newConstVal };
        const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
        steps.push({
          rule: 'Isolate Exponential Term',
          description: `${action} both sides.`,
          before: { type: 'INEQUALITY', operator, left: expSide, right: constSide },
          after: { type: 'INEQUALITY', operator, left: exponential, right: newConst }
        });
        expSide = exponential;
        constSide = newConst;
      }
    }
  }
  
  if (expSide.type !== 'POWER') {
    throw new Error('Could not isolate exponential term');
  }
  
  const base = expSide.base;
  const exponent = expSide.exponent;
  let resultValue = evaluateConstant(constSide);
  
  if (resultValue === null) throw new Error('Right side must evaluate to a number');
  
  const isNaturalBase = base.type === 'E';
  const baseValue = isNaturalBase ? Math.E : evaluateConstant(base);
  
  if (baseValue === null) throw new Error('Base must be a constant');
  if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');
  
  // Check if right side is ≤ 0
  if (resultValue <= 0) {
    // Exponentials are always positive
    const isStrict = operator === TokenType.LT || operator === TokenType.GT;
    const isGreater = operator === TokenType.GT || operator === TokenType.GTE;
    
    if (isGreater) {
      // b^x > 0 or b^x ≥ negative → always true
      steps.push({
        rule: 'Exponential Properties',
        description: `Since exponential functions are always positive (bˣ > 0 for all x), and ${formatNumber(resultValue)} ≤ 0, this inequality is always true.`,
        before: { type: 'INEQUALITY', operator, left: expSide, right: constSide },
        after: null
      });
      return { steps, solution: { type: 'all', variable: getVariable(exponent) } };
    } else {
      // b^x < 0 or b^x ≤ negative → never true
      steps.push({
        rule: 'Exponential Properties',
        description: `Since exponential functions are always positive (bˣ > 0 for all x), and we need bˣ ${opSymbols[operator]} ${formatNumber(resultValue)}, this inequality has no solution.`,
        before: { type: 'INEQUALITY', operator, left: expSide, right: constSide },
        after: null
      });
      return { steps, solution: { type: 'none', variable: getVariable(exponent) } };
    }
  }
  
  // Determine if inequality flips when taking logarithm
  const baseIsSmall = baseValue < 1;
  let finalOperator = operator;
  
  if (baseIsSmall) {
    finalOperator = flipOperator(operator);
    steps.push({
      rule: 'Apply Logarithm (Base < 1)',
      description: `Take logarithm of both sides. Since the base ${formatNumber(baseValue)} is less than 1, the logarithm is a decreasing function, so the inequality sign flips.`,
      before: { type: 'INEQUALITY', operator, left: expSide, right: constSide },
      after: null
    });
  } else {
    steps.push({
      rule: 'Apply Logarithm',
      description: `Take logarithm of both sides. Since the base ${isNaturalBase ? 'e' : formatNumber(baseValue)} is greater than 1, the logarithm is an increasing function, so the inequality sign stays the same.`,
      before: { type: 'INEQUALITY', operator, left: expSide, right: constSide },
      after: null
    });
  }
  
  // Calculate the logarithm result
  const logResult = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
  
  // Check for perfect power
  let perfectPower = null;
  if (!isNaturalBase && Number.isInteger(baseValue) && Number.isInteger(resultValue)) {
    perfectPower = findPerfectPower(baseValue, resultValue);
  }
  
  const displayValue = perfectPower !== null ? perfectPower : logResult;
  
  // Simple variable exponent
  if (exponent.type === 'VARIABLE') {
    const varName = exponent.name;
    
    if (perfectPower !== null) {
      steps.push({
        rule: 'Simplify',
        description: `${formatNumber(resultValue)} = ${formatNumber(baseValue)}^${perfectPower}, so the logarithm equals ${perfectPower}.`,
        before: null,
        after: { type: 'INEQUALITY', operator: finalOperator, left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: perfectPower } }
      });
    } else {
      steps.push({
        rule: 'Simplify',
        description: isNaturalBase 
          ? `ln(${formatNumber(resultValue)}) ≈ ${formatNumber(logResult)}`
          : `log base ${formatNumber(baseValue)} of ${formatNumber(resultValue)} ≈ ${formatNumber(logResult)}`,
        before: null,
        after: { type: 'INEQUALITY', operator: finalOperator, left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: logResult } }
      });
    }
    
    return { 
      steps, 
      solution: { 
        type: 'range',
        variable: varName, 
        operator: finalOperator,
        value: displayValue, 
        exact: perfectPower !== null 
      } 
    };
  }
  
  // Linear exponent
  const linearInfo = parseLinearExponent(exponent);
  if (linearInfo) {
    const { variable, coefficient, constant } = linearInfo;
    
    steps.push({
      rule: 'Simplify Logarithm',
      description: `The exponent becomes: ${coefficient === 1 ? '' : coefficient}${variable}${constant >= 0 ? ' + ' + constant : ' − ' + Math.abs(constant)} ${opSymbols[finalOperator]} ${formatNumber(logResult)}`,
      before: null,
      after: null
    });
    
    // Solve linear inequality
    const subtracted = logResult - constant;
    let solution = subtracted / coefficient;
    
    // Check if coefficient is negative (flips inequality)
    if (coefficient < 0) {
      finalOperator = flipOperator(finalOperator);
      steps.push({
        rule: 'Solve Linear Inequality',
        description: `Subtract ${formatNumber(constant)}, then divide by ${formatNumber(coefficient)}. Dividing by negative flips the sign.`,
        before: null,
        after: { type: 'INEQUALITY', operator: finalOperator, left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
      });
    } else {
      steps.push({
        rule: 'Solve Linear Inequality',
        description: `Subtract ${formatNumber(constant)}, then divide by ${formatNumber(coefficient)}.`,
        before: null,
        after: { type: 'INEQUALITY', operator: finalOperator, left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
      });
    }
    
    return { 
      steps, 
      solution: { 
        type: 'range',
        variable, 
        operator: finalOperator,
        value: solution, 
        exact: false 
      } 
    };
  }
  
  throw new Error('Exponent form not supported');
}

function getVariable(node) {
  if (node.type === 'VARIABLE') return node.name;
  if (node.left) return getVariable(node.left);
  if (node.right) return getVariable(node.right);
  if (node.operand) return getVariable(node.operand);
  return 'x';
}

/* =====================================================
   ENGINE COMPONENT (Standalone Solver)
   ===================================================== */

export const ExponentialInequalitySolverEngine = forwardRef(({ 
  compact = false,
  style = {},
  onResultChange = null  // Optional: wrapper can observe result changes
}, ref) => {
  const [expression, setExpression] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const variables = ['x', 'y', 'n'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const operators = ['^', '×', '÷', '+', '-'];
  const inequalities = ['<', '>', '≤', '≥'];

  useImperativeHandle(ref, () => ({
    loadEquation: (eqString) => {
      setExpression(eqString.split(''));
      setResult(null);
      setError(null);
      if (onResultChange) onResultChange(null);
    },
    clear: () => {
      setExpression([]);
      setResult(null);
      setError(null);
      if (onResultChange) onResultChange(null);
    },
    getExpression: () => expression.join(''),
    getResult: () => result
  }));

  const addToExpression = (item) => {
    setExpression([...expression, item]);
    setResult(null);
    setError(null);
  };

  const backspace = () => {
    setExpression(expression.slice(0, -1));
    setResult(null);
    setError(null);
  };

  const clearAll = () => {
    setExpression([]);
    setResult(null);
    setError(null);
  };

  const renderExpressionDisplay = (expr) => {
    if (!expr || expr.length === 0) {
      return <span style={engineStyles.placeholder}>Enter inequality...</span>;
    }
    
    const elements = [];
    let i = 0;
    
    while (i < expr.length) {
      const current = expr[i];
      const next = expr[i + 1];
      
      if (next === '^') {
        let expChars = [];
        let j = i + 2;
        
        if (expr[j] === '(') {
          let depth = 1;
          expChars.push('(');
          j++;
          while (j < expr.length && depth > 0) {
            if (expr[j] === '(') depth++;
            if (expr[j] === ')') depth--;
            expChars.push(expr[j]);
            j++;
          }
        } else {
          while (j < expr.length && /[0-9a-zA-Z.+\-×]/.test(expr[j]) && !['<', '>', '≤', '≥'].includes(expr[j])) {
            expChars.push(expr[j]);
            j++;
          }
        }
        
        if (expChars.length > 0) {
          elements.push(
            <span key={i} style={engineStyles.displayTerm}>
              <span style={current === 'e' ? engineStyles.displayEuler : undefined}>{current}</span>
              <sup style={engineStyles.displaySup}>{expChars.join('')}</sup>
            </span>
          );
          i = j;
          continue;
        }
      }
      
      const charMap = {
        '×': { style: engineStyles.displayOp, text: ' · ' },
        '÷': { style: engineStyles.displayOp, text: ' / ' },
        '+': { style: engineStyles.displayOp, text: ' + ' },
        '-': { style: engineStyles.displayOp, text: ' − ' },
        '<': { style: engineStyles.displayIneq, text: ' < ' },
        '>': { style: engineStyles.displayIneq, text: ' > ' },
        '≤': { style: engineStyles.displayIneq, text: ' ≤ ' },
        '≥': { style: engineStyles.displayIneq, text: ' ≥ ' },
        '^': { style: engineStyles.displayOp, text: '^' },
        'e': { style: engineStyles.displayEuler, text: 'e' },
      };
      
      if (charMap[current]) {
        elements.push(<span key={i} style={charMap[current].style}>{charMap[current].text}</span>);
      } else {
        elements.push(<span key={i}>{current}</span>);
      }
      i++;
    }
    
    return elements;
  };

  const solve = () => {
    try {
      const exprString = expression.join('');
      const tokens = tokenize(exprString);
      const ast = parse(tokens);
      const solveResult = solveExponentialInequality(ast);
      
      setResult(solveResult);
      setError(null);
      if (onResultChange) onResultChange(solveResult);
    } catch (e) {
      setError(e.message);
      setResult(null);
      if (onResultChange) onResultChange(null);
    }
  };

  const formatSolution = (sol) => {
    if (!sol) return null;
    
    if (sol.type === 'all') {
      return <span>All real numbers</span>;
    }
    if (sol.type === 'none') {
      return <span>No solution</span>;
    }
    
    const op = opSymbols[sol.operator];
    return (
      <span>
        <span style={engineStyles.solVar}>{sol.variable}</span>
        <span style={engineStyles.solOp}> {op} </span>
        <span style={engineStyles.solNum}>{formatNumber(sol.value)}</span>
      </span>
    );
  };

  return (
    <div style={{ ...engineStyles.container, ...style }}>
      <div style={engineStyles.display}>
        {renderExpressionDisplay(expression)}
      </div>
      
      {error && (
        <div style={engineStyles.error}>{error}</div>
      )}
      
      <div style={engineStyles.builder}>
        <div style={engineStyles.row}>
          <span style={engineStyles.label}>Var</span>
          <div style={engineStyles.btnGroup}>
            {variables.map((v) => (
              <button key={v} style={{ ...engineStyles.btn, ...engineStyles.btnVar }} onClick={() => addToExpression(v)}>{v}</button>
            ))}
          </div>
        </div>
        
        <div style={engineStyles.row}>
          <span style={engineStyles.label}>Num</span>
          <div style={engineStyles.btnGroup}>
            {numbers.map((n) => (
              <button key={n} style={{ ...engineStyles.btn, ...engineStyles.btnNum }} onClick={() => addToExpression(n)}>{n}</button>
            ))}
          </div>
        </div>
        
        <div style={engineStyles.row}>
          <span style={engineStyles.label}>Op</span>
          <div style={engineStyles.btnGroup}>
            {operators.map((op) => (
              <button key={op} style={{ ...engineStyles.btn, ...engineStyles.btnOp }} onClick={() => addToExpression(op)}>
                {op === '^' ? 'xⁿ' : op}
              </button>
            ))}
          </div>
        </div>
        
        <div style={engineStyles.row}>
          <span style={engineStyles.label}>Ineq</span>
          <div style={engineStyles.btnGroup}>
            {inequalities.map((ineq) => (
              <button key={ineq} style={{ ...engineStyles.btn, ...engineStyles.btnIneq }} onClick={() => addToExpression(ineq)}>{ineq}</button>
            ))}
          </div>
        </div>
        
        <div style={engineStyles.row}>
          <span style={engineStyles.label}></span>
          <div style={engineStyles.btnGroup}>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnSpecial }} onClick={() => addToExpression('e')}>e</button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnBracket }} onClick={() => addToExpression('(')}>(</button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnBracket }} onClick={() => addToExpression(')')}>)</button>
          </div>
        </div>
        
        <div style={engineStyles.actions}>
          <button style={{ ...engineStyles.btnAction, ...engineStyles.btnClear }} onClick={clearAll}>Clear</button>
          <button style={{ ...engineStyles.btnAction, ...engineStyles.btnBack }} onClick={backspace}>←</button>
          <button 
            style={{ ...engineStyles.btnAction, ...engineStyles.btnSolve, ...(expression.length === 0 ? engineStyles.btnDisabled : {}) }} 
            onClick={solve}
            disabled={expression.length === 0}
          >
            Solve
          </button>
        </div>
      </div>
      
      {result && result.solution && (
        <div style={engineStyles.solution}>
          {formatSolution(result.solution)}
          {result.solution.type === 'range' && !result.solution.exact && <span style={engineStyles.solApprox}> ≈</span>}
        </div>
      )}
    </div>
  );
});

ExponentialInequalitySolverEngine.displayName = 'ExponentialInequalitySolverEngine';

const engineStyles = {
  container: {
    background: '#fff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  },
  display: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '12px',
    padding: '18px 22px',
    minHeight: '54px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
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
  displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
  displayIneq: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
  displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
  error: {
    background: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '8px',
    padding: '10px 14px',
    marginBottom: '12px',
    color: '#dc2626',
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
    color: '#94a3b8',
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
    border: '1px solid #e2e8f0',
    background: '#f8fafc',
    color: '#334155',
    cursor: 'pointer',
    borderRadius: '8px',
    minWidth: '36px',
    fontFamily: 'inherit',
    fontWeight: '500',
    transition: 'all 0.15s',
  },
  btnVar: { fontStyle: 'italic', color: '#3b82f6', fontWeight: '600' },
  btnNum: { color: '#1e293b' },
  btnOp: { color: '#64748b', fontWeight: '600' },
  btnIneq: { color: '#3b82f6', fontWeight: '700' },
  btnSpecial: { color: '#0891b2', fontWeight: '600', fontStyle: 'italic' },
  btnBracket: { fontSize: '1.1rem', color: '#64748b' },
  actions: {
    display: 'flex',
    gap: '8px',
    marginTop: '6px',
    paddingTop: '14px',
    borderTop: '1px solid #e2e8f0',
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
  btnClear: { background: '#f1f5f9', color: '#64748b' },
  btnBack: { background: '#f1f5f9', color: '#64748b' },
  btnSolve: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    color: '#fff',
    marginLeft: 'auto',
    padding: '12px 24px',
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
  },
  btnDisabled: { background: '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
  solution: {
    marginTop: '16px',
    padding: '14px 18px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
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
};

/* =====================================================
   INEQUALITY FORM GENERATORS
   ===================================================== */

const inequalityForms = [
  {
    id: 'simple-gt',
    name: 'Simple (>)',
    formula: 'bˣ > c',
    generate: (nice) => {
      const ops = ['>', '<', '≥', '≤'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      if (nice) {
        const bases = [2, 3, 5, 10];
        const base = bases[Math.floor(Math.random() * bases.length)];
        const exp = Math.floor(Math.random() * 5) + 1;
        return `${base}^x${op}${Math.pow(base, exp)}`;
      }
      return `${Math.floor(Math.random() * 8) + 2}^x${op}${Math.floor(Math.random() * 900) + 10}`;
    }
  },
  {
    id: 'coefficient',
    name: 'With Coefficient',
    formula: 'a · bˣ > c',
    generate: (nice) => {
      const ops = ['>', '<', '≥', '≤'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      if (nice) {
        const bases = [2, 3, 5];
        const base = bases[Math.floor(Math.random() * bases.length)];
        const exp = Math.floor(Math.random() * 4) + 1;
        const coeff = Math.floor(Math.random() * 5) + 2;
        return `${coeff}×${base}^x${op}${coeff * Math.pow(base, exp)}`;
      }
      const base = Math.floor(Math.random() * 7) + 2;
      const coeff = Math.floor(Math.random() * 9) + 2;
      return `${coeff}×${base}^x${op}${Math.floor(Math.random() * 500) + 20}`;
    }
  },
  {
    id: 'linear-exp',
    name: 'Linear Exponent',
    formula: 'b⁽ᵐˣ⁺ⁿ⁾ > c',
    generate: (nice) => {
      const ops = ['>', '<', '≥', '≤'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const bases = [2, 3, 5];
      const base = bases[Math.floor(Math.random() * bases.length)];
      const m = Math.floor(Math.random() * 3) + 1;
      const n = Math.floor(Math.random() * 5) - 2;
      const nStr = n >= 0 ? `+${n}` : `${n}`;
      const mStr = m === 1 ? 'x' : `${m}×x`;
      if (nice) {
        const x = Math.floor(Math.random() * 4) + 1;
        return `${base}^(${mStr}${nStr})${op}${Math.pow(base, m * x + n)}`;
      }
      return `${base}^(${mStr}${nStr})${op}${Math.floor(Math.random() * 200) + 5}`;
    }
  },
  {
    id: 'base-less-one',
    name: 'Base < 1 (Flips!)',
    formula: '(½)ˣ > c',
    generate: (nice) => {
      const ops = ['>', '<', '≥', '≤'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const bases = ['0.5', '0.25', '0.1'];
      const base = bases[Math.floor(Math.random() * bases.length)];
      if (nice) {
        const vals = [0.125, 0.25, 0.5, 1, 2, 4, 8];
        const val = vals[Math.floor(Math.random() * vals.length)];
        return `${base}^x${op}${val}`;
      }
      return `${base}^x${op}${(Math.random() * 10 + 0.1).toFixed(2)}`;
    }
  },
  {
    id: 'with-constant',
    name: 'With Constant',
    formula: 'bˣ + c > d',
    generate: (nice) => {
      const ops = ['>', '<', '≥', '≤'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      if (nice) {
        const bases = [2, 3, 5];
        const base = bases[Math.floor(Math.random() * bases.length)];
        const exp = Math.floor(Math.random() * 4) + 1;
        const c = Math.floor(Math.random() * 10) + 1;
        return `${base}^x+${c}${op}${Math.pow(base, exp) + c}`;
      }
      const base = Math.floor(Math.random() * 7) + 2;
      const c = Math.floor(Math.random() * 20) + 1;
      return `${base}^x+${c}${op}${Math.floor(Math.random() * 200) + c + 1}`;
    }
  },
  {
    id: 'natural',
    name: 'Natural Base',
    formula: 'eˣ > c',
    generate: (nice) => {
      const ops = ['>', '<', '≥', '≤'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      if (nice) {
        const vals = [1, 2, 3, 5, 7, 10, 20, 50, 100];
        return `e^x${op}${vals[Math.floor(Math.random() * vals.length)]}`;
      }
      return `e^x${op}${(Math.random() * 100 + 1).toFixed(2)}`;
    }
  },
  {
    id: 'compare-zero',
    name: 'Compare to Zero',
    formula: 'bˣ > 0',
    generate: () => {
      const ops = ['>', '<', '≥', '≤'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const bases = [2, 3, 5, 10];
      const base = bases[Math.floor(Math.random() * bases.length)];
      const vals = [0, -1, -5];
      const val = vals[Math.floor(Math.random() * vals.length)];
      return `${base}^x${op}${val}`;
    }
  },
  {
    id: 'natural-linear',
    name: 'Natural Linear',
    formula: 'e⁽ᵐˣ⁺ⁿ⁾ > c',
    generate: (nice) => {
      const ops = ['>', '<', '≥', '≤'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const m = Math.floor(Math.random() * 3) + 1;
      const n = Math.floor(Math.random() * 5) - 2;
      const nStr = n >= 0 ? `+${n}` : `${n}`;
      const mStr = m === 1 ? 'x' : `${m}×x`;
      if (nice) {
        const vals = [1, 2, 5, 10, 20, 50];
        return `e^(${mStr}${nStr})${op}${vals[Math.floor(Math.random() * vals.length)]}`;
      }
      return `e^(${mStr}${nStr})${op}${(Math.random() * 50 + 1).toFixed(2)}`;
    }
  }
];

/* =====================================================
   WRAPPER COMPONENT (Full Educational Version)
   ===================================================== */

const ExponentialInequalitySolver = () => {
  const engineRef = React.useRef(null);
  const [selectedForm, setSelectedForm] = useState(null);
  const [solveResult, setSolveResult] = useState(null);

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

  const formatFinalAnswer = (sol) => {
    if (!sol) return null;
    
    if (sol.type === 'all') {
      return (
        <div>
          <div style={wrapperStyles.answerValue}>All real numbers</div>
          <div style={wrapperStyles.answerInterval}>(-∞, +∞)</div>
        </div>
      );
    }
    if (sol.type === 'none') {
      return (
        <div>
          <div style={wrapperStyles.answerValue}>No solution</div>
          <div style={wrapperStyles.answerInterval}>∅</div>
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
        <div style={wrapperStyles.answerValue}>
          <span style={wrapperStyles.answerVar}>{sol.variable}</span>
          <span style={wrapperStyles.answerOp}> {op} </span>
          <span style={wrapperStyles.answerNum}>{val}</span>
        </div>
        <div style={wrapperStyles.answerInterval}>{interval}</div>
      </div>
    );
  };

  return (
    <div style={wrapperStyles.container}>
      <div style={wrapperStyles.inner}>
        
        {/* Header */}
        <header style={wrapperStyles.header}>
          <div style={wrapperStyles.iconWrap}>
            <span style={wrapperStyles.icon}>{'>'}</span>
          </div>
          <h1 style={wrapperStyles.title}>Exponential Inequality Solver</h1>
          <p style={wrapperStyles.subtitle}>Solve inequalities with variables in exponents</p>
        </header>

        {/* Main Content - Side by Side */}
        <div style={wrapperStyles.main}>
          
          {/* Left Column - Engine + Forms */}
          <div style={wrapperStyles.leftCol}>
            
            {/* Engine */}
            <ExponentialInequalitySolverEngine 
              ref={engineRef} 
              onResultChange={handleResultChange}
              compact={true}
            />
            
            {/* Inequality Forms */}
            <div style={wrapperStyles.formsSection}>
              <h2 style={wrapperStyles.sectionTitle}>Try an Example</h2>
              <p style={wrapperStyles.formsHint}>Click any type to generate a random inequality. Click again for a new one!</p>
              <div style={wrapperStyles.formsGrid}>
                {inequalityForms.map((form) => (
                  <button
                    key={form.id}
                    style={{
                      ...wrapperStyles.formCard,
                      ...(selectedForm === form.id ? wrapperStyles.formCardSelected : {})
                    }}
                    onClick={() => handleFormClick(form)}
                  >
                    <div style={wrapperStyles.formName}>{form.name}</div>
                    <div style={wrapperStyles.formFormula}>{form.formula}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Steps & Explanation */}
          <div style={wrapperStyles.rightCol}>
            <h2 style={wrapperStyles.sectionTitle}>Solution Steps</h2>
            
            {!solveResult && (
              <div style={wrapperStyles.emptyState}>
                <div style={wrapperStyles.emptyIcon}>?</div>
                <p>Select an inequality type or enter your own, then click Solve to see the step-by-step solution.</p>
              </div>
            )}
            
            {solveResult && solveResult.steps && (
              <div style={wrapperStyles.stepsContainer}>
                {solveResult.steps.map((step, index) => (
                  <div key={index} style={wrapperStyles.stepCard}>
                    <div style={wrapperStyles.stepHeader}>
                      <div style={wrapperStyles.stepNum}>{index + 1}</div>
                      <div style={wrapperStyles.stepRule}>{step.rule}</div>
                    </div>
                    <p style={wrapperStyles.stepDesc}>{step.description}</p>
                    {step.before && (
                      <div style={wrapperStyles.stepMath}>
                        {astToMathDisplay(step.before)}
                      </div>
                    )}
                    {step.after && (
                      <div style={wrapperStyles.stepTransform}>
                        <span style={wrapperStyles.arrow}>⟹</span>
                        <div style={wrapperStyles.stepMath}>
                          {astToMathDisplay(step.after)}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {solveResult.solution && (
                  <div style={wrapperStyles.finalAnswer}>
                    <div style={wrapperStyles.answerLabel}>Solution</div>
                    {formatFinalAnswer(solveResult.solution)}
                    {solveResult.solution.type === 'range' && (
                      <div style={wrapperStyles.answerNote}>
                        {solveResult.solution.exact ? '✓ Exact value' : '≈ Approximate value'}
                      </div>
                    )}
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

const wrapperStyles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1e3a5f',
    padding: '30px 20px',
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  iconWrap: {
    width: '50px',
    height: '50px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
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
    color: '#1e3a5f',
    margin: '0 0 6px 0',
  },
  subtitle: {
    fontSize: '0.95rem',
    color: '#64748b',
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
    background: '#fff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    minHeight: '500px',
  },
  sectionTitle: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#64748b',
    marginBottom: '12px',
    fontWeight: '600',
  },
  formsSection: {
    background: '#fff',
    borderRadius: '16px',
    padding: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  },
  formsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px',
  },
  formsHint: {
    fontSize: '0.8rem',
    color: '#94a3b8',
    margin: '0 0 10px 0',
    fontStyle: 'italic',
  },
  formCard: {
    background: '#f8fafc',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    padding: '10px 12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'left',
    fontFamily: 'inherit',
  },
  formCardSelected: {
    borderColor: '#3b82f6',
    background: '#eff6ff',
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)',
  },
  formName: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#1e3a5f',
    marginBottom: '2px',
  },
  formFormula: {
    fontSize: '0.9rem',
    color: '#3b82f6',
    fontFamily: 'ui-monospace, monospace',
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '300px',
    color: '#94a3b8',
    textAlign: 'center',
    padding: '20px',
  },
  emptyIcon: {
    width: '60px',
    height: '60px',
    background: '#f1f5f9',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: '700',
    color: '#cbd5e1',
    marginBottom: '16px',
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  stepCard: {
    background: '#f8fafc',
    borderRadius: '10px',
    padding: '14px 16px',
    borderLeft: '3px solid #3b82f6',
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
  },
  stepNum: {
    width: '24px',
    height: '24px',
    background: '#3b82f6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '0.75rem',
    fontWeight: '700',
    flexShrink: 0,
  },
  stepRule: {
    fontWeight: '600',
    fontSize: '0.95rem',
    color: '#1e3a5f',
  },
  stepDesc: {
    fontSize: '0.85rem',
    color: '#64748b',
    margin: '0 0 10px 0',
    lineHeight: '1.5',
    paddingLeft: '34px',
  },
  stepMath: {
    fontSize: '1.05rem',
    color: '#1e3a5f',
    background: '#fff',
    padding: '10px 14px',
    borderRadius: '8px',
    display: 'inline-block',
    marginLeft: '34px',
    border: '1px solid #e2e8f0',
  },
  stepTransform: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '8px',
    paddingLeft: '34px',
  },
  arrow: {
    color: '#3b82f6',
    fontSize: '1.1rem',
  },
  finalAnswer: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '12px',
    padding: '18px 20px',
    color: '#fff',
    textAlign: 'center',
    marginTop: '8px',
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
};

export default ExponentialInequalitySolver;