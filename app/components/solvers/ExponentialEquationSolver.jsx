import React, { useState, forwardRef, useImperativeHandle } from 'react';

/* =====================================================
   EXPONENTIAL EQUATION SOLVER v3
   
   Two exports:
   - ExponentialSolverEngine: Standalone solver component
   - ExponentialSolverWithExamples: Full educational wrapper (default)
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
    
    const charMap = {
      '×': TokenType.MULTIPLY, '*': TokenType.MULTIPLY,
      '÷': TokenType.DIVIDE, '/': TokenType.DIVIDE,
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
    if (token?.type === TokenType.E) { consume(); return { type: 'E' }; }
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
    case 'EQUATION': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`)}<span style={mathStyles.equals}> = </span>{astToMathDisplay(node.right, `${key}-r`)}</span>;
    default: return null;
  }
}

const mathStyles = {
  number: { color: '#1e3a5f' },
  variable: { fontStyle: 'italic', color: '#3b82f6', fontWeight: '500' },
  euler: { fontStyle: 'italic', color: '#0891b2' },
  op: { color: '#64748b', margin: '0 2px' },
  equals: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
  power: { display: 'inline-flex', alignItems: 'baseline' },
  sup: { fontSize: '0.7em', color: '#3b82f6', marginLeft: '1px' },
};

/* =====================================================
   SOLVER
   ===================================================== */

function solveExponentialEquation(ast) {
  const steps = [];
  
  if (ast.type !== 'EQUATION') {
    throw new Error('Input must be an equation (use = sign)');
  }
  
  let { left, right } = ast;
  const leftHasVar = hasVariableInExponent(left);
  const rightHasVar = hasVariableInExponent(right);
  
  let expSide, constSide;
  
  if (leftHasVar && !rightHasVar) {
    expSide = left;
    constSide = right;
  } else if (rightHasVar && !leftHasVar) {
    expSide = right;
    constSide = left;
    steps.push({
      rule: 'Rearrange Equation',
      description: 'Move the exponential term to the left side for clarity.',
      before: ast,
      after: { type: 'EQUATION', left: expSide, right: constSide }
    });
  } else if (leftHasVar && rightHasVar) {
    throw new Error('Equations with exponentials on both sides require logarithms on both sides. Coming soon!');
  } else {
    throw new Error('No variable found in any exponent');
  }
  
  const constValue = evaluateConstant(constSide);
  if (constValue !== null && constSide.type !== 'NUMBER') {
    const newConstSide = { type: 'NUMBER', value: constValue };
    steps.push({
      rule: 'Evaluate Constant',
      description: 'Simplify the right side to a single number.',
      before: { type: 'EQUATION', left: expSide, right: constSide },
      after: { type: 'EQUATION', left: expSide, right: newConstSide }
    });
    constSide = newConstSide;
  }
  
  // Handle coefficient
  if (expSide.type === 'MULTIPLY') {
    const { coefficient, exponential } = extractCoefficient(expSide);
    if (coefficient && exponential) {
      const coeffValue = evaluateConstant(coefficient);
      const constVal = evaluateConstant(constSide);
      if (coeffValue !== null && constVal !== null) {
        const newConst = { type: 'NUMBER', value: constVal / coeffValue };
        steps.push({
          rule: 'Isolate Exponential Term',
          description: `Divide both sides by ${formatNumber(coeffValue)} to isolate the exponential.`,
          before: { type: 'EQUATION', left: expSide, right: constSide },
          after: { type: 'EQUATION', left: exponential, right: newConst }
        });
        expSide = exponential;
        constSide = newConst;
      }
    }
  }
  
  // Handle additive constant
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
          before: { type: 'EQUATION', left: expSide, right: constSide },
          after: { type: 'EQUATION', left: exponential, right: newConst }
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
  const resultValue = evaluateConstant(constSide);
  
  if (resultValue === null) throw new Error('Right side must evaluate to a number');
  if (resultValue <= 0) throw new Error('Exponential equations cannot equal zero or negative numbers');
  
  const isNaturalBase = base.type === 'E';
  const baseValue = isNaturalBase ? Math.E : evaluateConstant(base);
  
  if (baseValue === null) throw new Error('Base must be a constant');
  if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');
  
  let perfectPower = null;
  if (!isNaturalBase && Number.isInteger(baseValue) && Number.isInteger(resultValue)) {
    perfectPower = findPerfectPower(baseValue, resultValue);
  }
  
  // Simple variable exponent
  if (exponent.type === 'VARIABLE') {
    const varName = exponent.name;
    
    if (perfectPower !== null) {
      steps.push({
        rule: 'Recognize Perfect Power',
        description: `${formatNumber(resultValue)} = ${formatNumber(baseValue)} raised to power ${perfectPower}.`,
        before: { type: 'EQUATION', left: expSide, right: constSide },
        after: { type: 'EQUATION', left: expSide, right: { type: 'POWER', base: { type: 'NUMBER', value: baseValue }, exponent: { type: 'NUMBER', value: perfectPower } } }
      });
      steps.push({
        rule: 'Match Bases',
        description: `Same base (${formatNumber(baseValue)}) means exponents are equal.`,
        before: null,
        after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: perfectPower } }
      });
      return { steps, solution: { variable: varName, value: perfectPower, exact: true } };
    }
    
    // Use logarithms
    const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
    steps.push({
      rule: 'Apply Logarithm',
      description: `Take ${logName} of both sides.`,
      before: { type: 'EQUATION', left: expSide, right: constSide },
      after: null
    });
    
    steps.push({
      rule: 'Simplify',
      description: isNaturalBase ? 'ln(eˣ) = x' : `log base b of bˣ = x`,
      before: null,
      after: null
    });
    
    const solution = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
    
    steps.push({
      rule: 'Calculate',
      description: isNaturalBase 
        ? `ln(${formatNumber(resultValue)}) ≈ ${formatNumber(solution)}`
        : `log(${formatNumber(resultValue)}) ÷ log(${formatNumber(baseValue)}) ≈ ${formatNumber(solution)}`,
      before: null,
      after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: solution } }
    });
    
    return { steps, solution: { variable: varName, value: solution, exact: false } };
  }
  
  // Linear exponent
  const linearInfo = parseLinearExponent(exponent);
  if (linearInfo) {
    const { variable, coefficient, constant } = linearInfo;
    const logResult = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
    const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
    
    steps.push({
      rule: 'Apply Logarithm',
      description: `Take ${logName} of both sides to bring down the exponent.`,
      before: { type: 'EQUATION', left: expSide, right: constSide },
      after: null
    });
    
    const expStr = `${coefficient === 1 ? '' : coefficient}${variable}${constant >= 0 ? ' + ' + constant : ' − ' + Math.abs(constant)}`;
    steps.push({
      rule: 'Linear Equation',
      description: `Now solve: ${expStr} = ${formatNumber(logResult)}`,
      before: null,
      after: null
    });
    
    const subtracted = logResult - constant;
    const solution = subtracted / coefficient;
    
    steps.push({
      rule: 'Solve for Variable',
      description: coefficient !== 1 
        ? `Subtract ${formatNumber(constant)}, then divide by ${coefficient}.`
        : `Subtract ${formatNumber(constant)} from both sides.`,
      before: null,
      after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
    });
    
    return { steps, solution: { variable, value: solution, exact: false } };
  }
  
  throw new Error('Exponent form not supported');
}

/* =====================================================
   ENGINE COMPONENT (Standalone Solver)
   ===================================================== */

export const ExponentialSolverEngine = forwardRef(({ 
  compact = false,
  style = {},
  onResultChange = null  // Optional: wrapper can observe result changes
}, ref) => {
  const [expression, setExpression] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const variables = ['x', 'y', 'n'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const operators = ['^', '×', '÷', '+', '-', '='];

  // Expose methods to parent
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
      return <span style={engineStyles.placeholder}>Enter equation...</span>;
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
          while (j < expr.length && /[0-9a-zA-Z.+\-×]/.test(expr[j]) && expr[j] !== '=') {
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
        '=': { style: engineStyles.displayEquals, text: ' = ' },
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
      const solveResult = solveExponentialEquation(ast);
      
      setResult(solveResult);
      setError(null);
      if (onResultChange) onResultChange(solveResult);
    } catch (e) {
      setError(e.message);
      setResult(null);
      if (onResultChange) onResultChange(null);
    }
  };

  const p = compact ? 0.85 : 1; // padding multiplier

  return (
    <div style={{ ...engineStyles.container, ...style }}>
      <div style={{ ...engineStyles.display, padding: `${18 * p}px ${22 * p}px` }}>
        {renderExpressionDisplay(expression)}
      </div>
      
      {error && (
        <div style={engineStyles.error}>{error}</div>
      )}
      
      <div style={{ ...engineStyles.builder, gap: `${12 * p}px` }}>
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
          <span style={engineStyles.solVar}>{result.solution.variable}</span>
          <span style={engineStyles.solEq}> = </span>
          <span style={engineStyles.solNum}>{formatNumber(result.solution.value)}</span>
          {!result.solution.exact && <span style={engineStyles.solApprox}> ≈</span>}
        </div>
      )}
    </div>
  );
});

ExponentialSolverEngine.displayName = 'ExponentialSolverEngine';

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
  displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
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
  solEq: { opacity: 0.8, margin: '0 6px' },
  solNum: { color: '#fbbf24' },
  solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
};

/* =====================================================
   EQUATION FORM GENERATORS
   ===================================================== */

const equationForms = [
  {
    id: 'simple',
    name: 'Simple',
    formula: 'bˣ = c',
    generate: (nice) => {
      if (nice) {
        const bases = [2, 3, 5, 10];
        const base = bases[Math.floor(Math.random() * bases.length)];
        const exp = Math.floor(Math.random() * 5) + 1;
        return `${base}^x=${Math.pow(base, exp)}`;
      }
      return `${Math.floor(Math.random() * 8) + 2}^x=${Math.floor(Math.random() * 900) + 10}`;
    }
  },
  {
    id: 'coefficient',
    name: 'With Coefficient',
    formula: 'a · bˣ = c',
    generate: (nice) => {
      if (nice) {
        const bases = [2, 3, 5];
        const base = bases[Math.floor(Math.random() * bases.length)];
        const exp = Math.floor(Math.random() * 4) + 1;
        const coeff = Math.floor(Math.random() * 5) + 2;
        return `${coeff}×${base}^x=${coeff * Math.pow(base, exp)}`;
      }
      const base = Math.floor(Math.random() * 7) + 2;
      const coeff = Math.floor(Math.random() * 9) + 2;
      return `${coeff}×${base}^x=${Math.floor(Math.random() * 500) + 20}`;
    }
  },
  {
    id: 'linear-exp',
    name: 'Linear Exponent',
    formula: 'b⁽ᵐˣ⁺ⁿ⁾ = c',
    generate: (nice) => {
      const bases = [2, 3, 5];
      const base = bases[Math.floor(Math.random() * bases.length)];
      const m = Math.floor(Math.random() * 3) + 1;
      const n = Math.floor(Math.random() * 5) - 2;
      const nStr = n >= 0 ? `+${n}` : `${n}`;
      const mStr = m === 1 ? 'x' : `${m}×x`;
      if (nice) {
        const x = Math.floor(Math.random() * 4) + 1;
        return `${base}^(${mStr}${nStr})=${Math.pow(base, m * x + n)}`;
      }
      return `${base}^(${mStr}${nStr})=${Math.floor(Math.random() * 200) + 5}`;
    }
  },
  {
    id: 'same-base',
    name: 'Same Base',
    formula: 'bᶠ⁽ˣ⁾ = bⁿ',
    generate: () => {
      const bases = [2, 3, 5];
      const base = bases[Math.floor(Math.random() * bases.length)];
      const a = Math.floor(Math.random() * 3) + 1;
      const b = Math.floor(Math.random() * 5);
      const c = Math.floor(Math.random() * 6) + 1;
      const aStr = a === 1 ? 'x' : `${a}×x`;
      const bStr = b > 0 ? `+${b}` : '';
      return `${base}^(${aStr}${bStr})=${base}^${c}`;
    }
  },
  {
    id: 'convertible',
    name: 'Convertible',
    formula: 'aˣ = b',
    generate: () => {
      const families = [
        { bases: [2, 4, 8, 16, 32], root: 2 },
        { bases: [3, 9, 27, 81], root: 3 },
        { bases: [5, 25, 125], root: 5 }
      ];
      const family = families[Math.floor(Math.random() * families.length)];
      const base = family.bases[Math.floor(Math.random() * (family.bases.length - 1))];
      const result = family.bases[Math.floor(Math.random() * family.bases.length)];
      return `${base}^x=${result}`;
    }
  },
  {
    id: 'with-constant',
    name: 'With Constant',
    formula: 'bˣ + c = d',
    generate: (nice) => {
      if (nice) {
        const bases = [2, 3, 5];
        const base = bases[Math.floor(Math.random() * bases.length)];
        const exp = Math.floor(Math.random() * 4) + 1;
        const c = Math.floor(Math.random() * 10) + 1;
        return `${base}^x+${c}=${Math.pow(base, exp) + c}`;
      }
      const base = Math.floor(Math.random() * 7) + 2;
      const c = Math.floor(Math.random() * 20) + 1;
      return `${base}^x+${c}=${Math.floor(Math.random() * 200) + c + 1}`;
    }
  },
  {
    id: 'natural',
    name: 'Natural Base',
    formula: 'eˣ = c',
    generate: (nice) => {
      if (nice) {
        const vals = [1, 2, 3, 5, 7, 10, 20, 50, 100];
        return `e^x=${vals[Math.floor(Math.random() * vals.length)]}`;
      }
      return `e^x=${(Math.random() * 100 + 1).toFixed(2)}`;
    }
  },
  {
    id: 'natural-linear',
    name: 'Natural Linear',
    formula: 'e⁽ᵐˣ⁺ⁿ⁾ = c',
    generate: (nice) => {
      const m = Math.floor(Math.random() * 3) + 1;
      const n = Math.floor(Math.random() * 5) - 2;
      const nStr = n >= 0 ? `+${n}` : `${n}`;
      const mStr = m === 1 ? 'x' : `${m}×x`;
      if (nice) {
        const vals = [1, 2, 5, 10, 20, 50];
        return `e^(${mStr}${nStr})=${vals[Math.floor(Math.random() * vals.length)]}`;
      }
      return `e^(${mStr}${nStr})=${(Math.random() * 50 + 1).toFixed(2)}`;
    }
  }
];

/* =====================================================
   WRAPPER COMPONENT (Full Educational Version)
   ===================================================== */

const ExponentialEquationSolver = () => {
  const engineRef = React.useRef(null);
  const [solveResult, setSolveResult] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);

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

  return (
    <div style={wrapperStyles.container}>
      <div style={wrapperStyles.inner}>
        
        {/* Header */}
        <header style={wrapperStyles.header}>
          <div style={wrapperStyles.iconWrap}>
            <span style={wrapperStyles.icon}>x</span>
          </div>
          <h1 style={wrapperStyles.title}>Exponential Equation Solver</h1>
          <p style={wrapperStyles.subtitle}>Solve equations with variables in exponents</p>
        </header>

        {/* Main Content - Side by Side */}
        <div style={wrapperStyles.main}>
          
          {/* Left Column - Engine + Forms */}
          <div style={wrapperStyles.leftCol}>
            
            {/* Engine */}
            <ExponentialSolverEngine 
              ref={engineRef} 
              onResultChange={handleResultChange}
              compact={true}
            />
            
            {/* Equation Forms */}
            <div style={wrapperStyles.formsSection}>
              <h2 style={wrapperStyles.sectionTitle}>Try an Example</h2>
              <p style={wrapperStyles.formsHint}>Click any type to generate a random equation. Click again for a new one!</p>
              <div style={wrapperStyles.formsGrid}>
                {equationForms.map((form) => (
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
                <p>Select an equation type or enter your own equation, then click Solve to see the step-by-step solution.</p>
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
                    <div style={wrapperStyles.answerLabel}>Answer</div>
                    <div style={wrapperStyles.answerValue}>
                      <span style={wrapperStyles.answerVar}>{solveResult.solution.variable}</span>
                      <span style={wrapperStyles.answerEq}> = </span>
                      <span style={wrapperStyles.answerNum}>{formatNumber(solveResult.solution.value)}</span>
                    </div>
                    <div style={wrapperStyles.answerNote}>
                      {solveResult.solution.exact ? '✓ Exact solution' : '≈ Approximate value'}
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
    fontStyle: 'italic',
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
};

export default ExponentialEquationSolver;