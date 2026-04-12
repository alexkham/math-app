// // // // // // // import React, { useState, forwardRef, useImperativeHandle } from 'react';

// // // // // // // /* =====================================================
// // // // // // //    EXPONENTIAL EQUATION SOLVER v3
   
// // // // // // //    Two exports:
// // // // // // //    - ExponentialSolverEngine: Standalone solver component
// // // // // // //    - ExponentialSolverWithExamples: Full educational wrapper (default)
// // // // // // //    ===================================================== */


// // // // // // // /* =====================================================
// // // // // // //    TOKENIZER
// // // // // // //    ===================================================== */

// // // // // // // const TokenType = {
// // // // // // //   NUMBER: 'NUMBER',
// // // // // // //   VARIABLE: 'VARIABLE',
// // // // // // //   MULTIPLY: 'MULTIPLY',
// // // // // // //   DIVIDE: 'DIVIDE',
// // // // // // //   POWER: 'POWER',
// // // // // // //   LPAREN: 'LPAREN',
// // // // // // //   RPAREN: 'RPAREN',
// // // // // // //   PLUS: 'PLUS',
// // // // // // //   MINUS: 'MINUS',
// // // // // // //   EQUALS: 'EQUALS',
// // // // // // //   E: 'E',
// // // // // // // };

// // // // // // // function tokenize(input) {
// // // // // // //   const tokens = [];
// // // // // // //   let i = 0;
  
// // // // // // //   while (i < input.length) {
// // // // // // //     const char = input[i];
    
// // // // // // //     if (/\s/.test(char)) {
// // // // // // //       i++;
// // // // // // //       continue;
// // // // // // //     }
    
// // // // // // //     if (/[0-9]/.test(char) || (char === '.' && /[0-9]/.test(input[i + 1]))) {
// // // // // // //       let num = '';
// // // // // // //       while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) {
// // // // // // //         num += input[i];
// // // // // // //         i++;
// // // // // // //       }
// // // // // // //       tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) });
// // // // // // //       continue;
// // // // // // //     }
    
// // // // // // //     if (char === 'e' && (i + 1 >= input.length || !/[a-zA-Z]/.test(input[i + 1]))) {
// // // // // // //       tokens.push({ type: TokenType.E });
// // // // // // //       i++;
// // // // // // //       continue;
// // // // // // //     }
    
// // // // // // //     if (/[a-zA-Z]/.test(char)) {
// // // // // // //       tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
// // // // // // //       i++;
// // // // // // //       continue;
// // // // // // //     }
    
// // // // // // //     const charMap = {
// // // // // // //       '×': TokenType.MULTIPLY, '*': TokenType.MULTIPLY,
// // // // // // //       '÷': TokenType.DIVIDE, '/': TokenType.DIVIDE,
// // // // // // //       '^': TokenType.POWER,
// // // // // // //       '(': TokenType.LPAREN, ')': TokenType.RPAREN,
// // // // // // //       '+': TokenType.PLUS, '-': TokenType.MINUS,
// // // // // // //       '=': TokenType.EQUALS,
// // // // // // //     };
    
// // // // // // //     if (charMap[char]) {
// // // // // // //       tokens.push({ type: charMap[char] });
// // // // // // //       i++;
// // // // // // //       continue;
// // // // // // //     }
    
// // // // // // //     i++;
// // // // // // //   }
  
// // // // // // //   return tokens;
// // // // // // // }

// // // // // // // /* =====================================================
// // // // // // //    PARSER
// // // // // // //    ===================================================== */

// // // // // // // function parse(tokens) {
// // // // // // //   let pos = 0;
  
// // // // // // //   const peek = () => tokens[pos];
// // // // // // //   const consume = (expectedType) => {
// // // // // // //     const token = tokens[pos];
// // // // // // //     if (expectedType && token?.type !== expectedType) {
// // // // // // //       throw new Error(`Expected ${expectedType} but got ${token?.type}`);
// // // // // // //     }
// // // // // // //     pos++;
// // // // // // //     return token;
// // // // // // //   };
  
// // // // // // //   const parseEquation = () => {
// // // // // // //     const left = parseExpression();
// // // // // // //     if (peek()?.type === TokenType.EQUALS) {
// // // // // // //       consume();
// // // // // // //       return { type: 'EQUATION', left, right: parseExpression() };
// // // // // // //     }
// // // // // // //     return left;
// // // // // // //   };
  
// // // // // // //   const parseExpression = () => parseAdditive();
  
// // // // // // //   const parseAdditive = () => {
// // // // // // //     let left = parseMultiplicative();
// // // // // // //     while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) {
// // // // // // //       const op = consume().type;
// // // // // // //       left = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left, right: parseMultiplicative() };
// // // // // // //     }
// // // // // // //     return left;
// // // // // // //   };
  
// // // // // // //   const parseMultiplicative = () => {
// // // // // // //     let left = parsePower();
// // // // // // //     while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) {
// // // // // // //       const op = consume().type;
// // // // // // //       left = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left, right: parsePower() };
// // // // // // //     }
// // // // // // //     return left;
// // // // // // //   };
  
// // // // // // //   const parsePower = () => {
// // // // // // //     let base = parseUnary();
// // // // // // //     if (peek()?.type === TokenType.POWER) {
// // // // // // //       consume();
// // // // // // //       return { type: 'POWER', base, exponent: parsePower() };
// // // // // // //     }
// // // // // // //     return base;
// // // // // // //   };
  
// // // // // // //   const parseUnary = () => {
// // // // // // //     if (peek()?.type === TokenType.MINUS) {
// // // // // // //       consume();
// // // // // // //       return { type: 'NEGATE', operand: parseUnary() };
// // // // // // //     }
// // // // // // //     return parsePrimary();
// // // // // // //   };
  
// // // // // // //   const parsePrimary = () => {
// // // // // // //     const token = peek();
// // // // // // //     if (token?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: token.value }; }
// // // // // // //     if (token?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: token.value }; }
// // // // // // //     if (token?.type === TokenType.E) { consume(); return { type: 'E' }; }
// // // // // // //     if (token?.type === TokenType.LPAREN) {
// // // // // // //       consume();
// // // // // // //       const expr = parseExpression();
// // // // // // //       consume(TokenType.RPAREN);
// // // // // // //       return expr;
// // // // // // //     }
// // // // // // //     throw new Error(`Unexpected token: ${token?.type}`);
// // // // // // //   };
  
// // // // // // //   const ast = parseEquation();
// // // // // // //   if (pos < tokens.length) throw new Error('Unexpected tokens at end');
// // // // // // //   return ast;
// // // // // // // }

// // // // // // // /* =====================================================
// // // // // // //    HELPERS
// // // // // // //    ===================================================== */

// // // // // // // function formatNumber(num) {
// // // // // // //   if (Number.isInteger(num)) return String(num);
// // // // // // //   return (Math.round(num * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, '');
// // // // // // // }

// // // // // // // function hasVariableInExponent(node) {
// // // // // // //   if (!node) return false;
// // // // // // //   if (node.type === 'POWER') return containsVariable(node.exponent);
// // // // // // //   if (['MULTIPLY', 'DIVIDE', 'ADD', 'SUBTRACT'].includes(node.type)) {
// // // // // // //     return hasVariableInExponent(node.left) || hasVariableInExponent(node.right);
// // // // // // //   }
// // // // // // //   return false;
// // // // // // // }

// // // // // // // function containsVariable(node) {
// // // // // // //   if (!node) return false;
// // // // // // //   if (node.type === 'VARIABLE') return true;
// // // // // // //   if (node.type === 'NUMBER' || node.type === 'E') return false;
// // // // // // //   if (node.type === 'NEGATE') return containsVariable(node.operand);
// // // // // // //   if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
// // // // // // //   return containsVariable(node.left) || containsVariable(node.right);
// // // // // // // }

// // // // // // // function evaluateConstant(node) {
// // // // // // //   if (!node) return null;
// // // // // // //   switch (node.type) {
// // // // // // //     case 'NUMBER': return node.value;
// // // // // // //     case 'E': return Math.E;
// // // // // // //     case 'NEGATE': const v = evaluateConstant(node.operand); return v !== null ? -v : null;
// // // // // // //     case 'ADD': case 'SUBTRACT': case 'MULTIPLY': case 'DIVIDE': case 'POWER':
// // // // // // //       const l = evaluateConstant(node.left || node.base);
// // // // // // //       const r = evaluateConstant(node.right || node.exponent);
// // // // // // //       if (l === null || r === null) return null;
// // // // // // //       if (node.type === 'ADD') return l + r;
// // // // // // //       if (node.type === 'SUBTRACT') return l - r;
// // // // // // //       if (node.type === 'MULTIPLY') return l * r;
// // // // // // //       if (node.type === 'DIVIDE') return r !== 0 ? l / r : null;
// // // // // // //       if (node.type === 'POWER') return Math.pow(l, r);
// // // // // // //     default: return null;
// // // // // // //   }
// // // // // // // }

// // // // // // // function extractCoefficient(node) {
// // // // // // //   if (node.type !== 'MULTIPLY') return { coefficient: null, exponential: null };
// // // // // // //   if (node.left.type === 'POWER' && hasVariableInExponent(node.left)) {
// // // // // // //     return { coefficient: node.right, exponential: node.left };
// // // // // // //   }
// // // // // // //   if (node.right.type === 'POWER' && hasVariableInExponent(node.right)) {
// // // // // // //     return { coefficient: node.left, exponential: node.right };
// // // // // // //   }
// // // // // // //   return { coefficient: null, exponential: null };
// // // // // // // }

// // // // // // // function extractAdditiveConstant(node) {
// // // // // // //   if (node.type !== 'ADD' && node.type !== 'SUBTRACT') {
// // // // // // //     return { exponential: null, constant: null, isAdd: false };
// // // // // // //   }
// // // // // // //   const isAdd = node.type === 'ADD';
// // // // // // //   if (hasVariableInExponent(node.left) && !containsVariable(node.right)) {
// // // // // // //     const constVal = evaluateConstant(node.right);
// // // // // // //     if (node.left.type === 'POWER') {
// // // // // // //       return { exponential: node.left, constant: constVal, isAdd };
// // // // // // //     }
// // // // // // //   }
// // // // // // //   if (hasVariableInExponent(node.right) && !containsVariable(node.left) && isAdd) {
// // // // // // //     const constVal = evaluateConstant(node.left);
// // // // // // //     if (node.right.type === 'POWER') {
// // // // // // //       return { exponential: node.right, constant: constVal, isAdd };
// // // // // // //     }
// // // // // // //   }
// // // // // // //   return { exponential: null, constant: null, isAdd: false };
// // // // // // // }

// // // // // // // function findPerfectPower(base, result) {
// // // // // // //   if (result === 1) return 0;
// // // // // // //   if (result === base) return 1;
// // // // // // //   let power = 0, current = 1;
// // // // // // //   while (current < result && power < 100) {
// // // // // // //     current *= base;
// // // // // // //     power++;
// // // // // // //     if (current === result) return power;
// // // // // // //   }
// // // // // // //   power = -1;
// // // // // // //   current = 1 / base;
// // // // // // //   while (power > -20) {
// // // // // // //     if (Math.abs(current - result) < 1e-10) return power;
// // // // // // //     current /= base;
// // // // // // //     power--;
// // // // // // //   }
// // // // // // //   return null;
// // // // // // // }

// // // // // // // function parseLinearExponent(node) {
// // // // // // //   if (node.type === 'VARIABLE') {
// // // // // // //     return { variable: node.name, coefficient: 1, constant: 0 };
// // // // // // //   }
// // // // // // //   if (node.type === 'MULTIPLY') {
// // // // // // //     const lv = evaluateConstant(node.left), rv = evaluateConstant(node.right);
// // // // // // //     if (lv !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: lv, constant: 0 };
// // // // // // //     if (rv !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rv, constant: 0 };
// // // // // // //   }
// // // // // // //   if (node.type === 'ADD' || node.type === 'SUBTRACT') {
// // // // // // //     const leftLinear = parseLinearExponent(node.left);
// // // // // // //     const rightConst = evaluateConstant(node.right);
// // // // // // //     if (leftLinear && rightConst !== null) {
// // // // // // //       return {
// // // // // // //         variable: leftLinear.variable,
// // // // // // //         coefficient: leftLinear.coefficient,
// // // // // // //         constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst)
// // // // // // //       };
// // // // // // //     }
// // // // // // //     const rightLinear = parseLinearExponent(node.right);
// // // // // // //     const leftConst = evaluateConstant(node.left);
// // // // // // //     if (rightLinear && leftConst !== null && node.type === 'ADD') {
// // // // // // //       return {
// // // // // // //         variable: rightLinear.variable,
// // // // // // //         coefficient: rightLinear.coefficient,
// // // // // // //         constant: rightLinear.constant + leftConst
// // // // // // //       };
// // // // // // //     }
// // // // // // //   }
// // // // // // //   return null;
// // // // // // // }

// // // // // // // /* =====================================================
// // // // // // //    AST TO MATH DISPLAY
// // // // // // //    ===================================================== */

// // // // // // // function astToMathDisplay(node, key = 'root') {
// // // // // // //   if (!node) return null;
  
// // // // // // //   const wrap = (n, k) => {
// // // // // // //     if (n.type === 'ADD' || n.type === 'SUBTRACT') {
// // // // // // //       return <span key={k}>({astToMathDisplay(n, k)})</span>;
// // // // // // //     }
// // // // // // //     return astToMathDisplay(n, k);
// // // // // // //   };
  
// // // // // // //   switch (node.type) {
// // // // // // //     case 'NUMBER': return <span key={key} style={mathStyles.number}>{formatNumber(node.value)}</span>;
// // // // // // //     case 'VARIABLE': return <span key={key} style={mathStyles.variable}>{node.name}</span>;
// // // // // // //     case 'E': return <span key={key} style={mathStyles.euler}>e</span>;
// // // // // // //     case 'NEGATE': return <span key={key}>−{astToMathDisplay(node.operand, `${key}-neg`)}</span>;
// // // // // // //     case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`)}<span style={mathStyles.op}> + </span>{astToMathDisplay(node.right, `${key}-r`)}</span>;
// // // // // // //     case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`)}<span style={mathStyles.op}> − </span>{astToMathDisplay(node.right, `${key}-r`)}</span>;
// // // // // // //     case 'MULTIPLY': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={mathStyles.op}> · </span>{wrap(node.right, `${key}-r`)}</span>;
// // // // // // //     case 'DIVIDE': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={mathStyles.op}> / </span>{wrap(node.right, `${key}-r`)}</span>;
// // // // // // //     case 'POWER': return <span key={key} style={mathStyles.power}>{wrap(node.base, `${key}-base`)}<sup style={mathStyles.sup}>{astToMathDisplay(node.exponent, `${key}-exp`)}</sup></span>;
// // // // // // //     case 'EQUATION': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`)}<span style={mathStyles.equals}> = </span>{astToMathDisplay(node.right, `${key}-r`)}</span>;
// // // // // // //     default: return null;
// // // // // // //   }
// // // // // // // }

// // // // // // // const mathStyles = {
// // // // // // //   number: { color: '#1e3a5f' },
// // // // // // //   variable: { fontStyle: 'italic', color: '#3b82f6', fontWeight: '500' },
// // // // // // //   euler: { fontStyle: 'italic', color: '#0891b2' },
// // // // // // //   op: { color: '#64748b', margin: '0 2px' },
// // // // // // //   equals: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
// // // // // // //   power: { display: 'inline-flex', alignItems: 'baseline' },
// // // // // // //   sup: { fontSize: '0.7em', color: '#3b82f6', marginLeft: '1px' },
// // // // // // // };

// // // // // // // /* =====================================================
// // // // // // //    SOLVER
// // // // // // //    ===================================================== */

// // // // // // // function solveExponentialEquation(ast) {
// // // // // // //   const steps = [];
  
// // // // // // //   if (ast.type !== 'EQUATION') {
// // // // // // //     throw new Error('Input must be an equation (use = sign)');
// // // // // // //   }
  
// // // // // // //   let { left, right } = ast;
// // // // // // //   const leftHasVar = hasVariableInExponent(left);
// // // // // // //   const rightHasVar = hasVariableInExponent(right);
  
// // // // // // //   let expSide, constSide;
  
// // // // // // //   if (leftHasVar && !rightHasVar) {
// // // // // // //     expSide = left;
// // // // // // //     constSide = right;
// // // // // // //   } else if (rightHasVar && !leftHasVar) {
// // // // // // //     expSide = right;
// // // // // // //     constSide = left;
// // // // // // //     steps.push({
// // // // // // //       rule: 'Rearrange Equation',
// // // // // // //       description: 'Move the exponential term to the left side for clarity.',
// // // // // // //       before: ast,
// // // // // // //       after: { type: 'EQUATION', left: expSide, right: constSide }
// // // // // // //     });
// // // // // // //   } else if (leftHasVar && rightHasVar) {
// // // // // // //     throw new Error('Equations with exponentials on both sides require logarithms on both sides. Coming soon!');
// // // // // // //   } else {
// // // // // // //     throw new Error('No variable found in any exponent');
// // // // // // //   }
  
// // // // // // //   const constValue = evaluateConstant(constSide);
// // // // // // //   if (constValue !== null && constSide.type !== 'NUMBER') {
// // // // // // //     const newConstSide = { type: 'NUMBER', value: constValue };
// // // // // // //     steps.push({
// // // // // // //       rule: 'Evaluate Constant',
// // // // // // //       description: 'Simplify the right side to a single number.',
// // // // // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // // //       after: { type: 'EQUATION', left: expSide, right: newConstSide }
// // // // // // //     });
// // // // // // //     constSide = newConstSide;
// // // // // // //   }
  
// // // // // // //   // Handle coefficient
// // // // // // //   if (expSide.type === 'MULTIPLY') {
// // // // // // //     const { coefficient, exponential } = extractCoefficient(expSide);
// // // // // // //     if (coefficient && exponential) {
// // // // // // //       const coeffValue = evaluateConstant(coefficient);
// // // // // // //       const constVal = evaluateConstant(constSide);
// // // // // // //       if (coeffValue !== null && constVal !== null) {
// // // // // // //         const newConst = { type: 'NUMBER', value: constVal / coeffValue };
// // // // // // //         steps.push({
// // // // // // //           rule: 'Isolate Exponential Term',
// // // // // // //           description: `Divide both sides by ${formatNumber(coeffValue)} to isolate the exponential.`,
// // // // // // //           before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // // //           after: { type: 'EQUATION', left: exponential, right: newConst }
// // // // // // //         });
// // // // // // //         expSide = exponential;
// // // // // // //         constSide = newConst;
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }
  
// // // // // // //   // Handle additive constant
// // // // // // //   if (expSide.type === 'ADD' || expSide.type === 'SUBTRACT') {
// // // // // // //     const { exponential, constant, isAdd } = extractAdditiveConstant(expSide);
// // // // // // //     if (exponential && constant !== null) {
// // // // // // //       const constVal = evaluateConstant(constSide);
// // // // // // //       if (constVal !== null) {
// // // // // // //         const newConstVal = isAdd ? constVal - constant : constVal + constant;
// // // // // // //         const newConst = { type: 'NUMBER', value: newConstVal };
// // // // // // //         const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
// // // // // // //         steps.push({
// // // // // // //           rule: 'Isolate Exponential Term',
// // // // // // //           description: `${action} both sides.`,
// // // // // // //           before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // // //           after: { type: 'EQUATION', left: exponential, right: newConst }
// // // // // // //         });
// // // // // // //         expSide = exponential;
// // // // // // //         constSide = newConst;
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }
  
// // // // // // //   if (expSide.type !== 'POWER') {
// // // // // // //     throw new Error('Could not isolate exponential term');
// // // // // // //   }
  
// // // // // // //   const base = expSide.base;
// // // // // // //   const exponent = expSide.exponent;
// // // // // // //   const resultValue = evaluateConstant(constSide);
  
// // // // // // //   if (resultValue === null) throw new Error('Right side must evaluate to a number');
// // // // // // //   if (resultValue <= 0) throw new Error('Exponential equations cannot equal zero or negative numbers');
  
// // // // // // //   const isNaturalBase = base.type === 'E';
// // // // // // //   const baseValue = isNaturalBase ? Math.E : evaluateConstant(base);
  
// // // // // // //   if (baseValue === null) throw new Error('Base must be a constant');
// // // // // // //   if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');
  
// // // // // // //   let perfectPower = null;
// // // // // // //   if (!isNaturalBase && Number.isInteger(baseValue) && Number.isInteger(resultValue)) {
// // // // // // //     perfectPower = findPerfectPower(baseValue, resultValue);
// // // // // // //   }
  
// // // // // // //   // Simple variable exponent
// // // // // // //   if (exponent.type === 'VARIABLE') {
// // // // // // //     const varName = exponent.name;
    
// // // // // // //     if (perfectPower !== null) {
// // // // // // //       steps.push({
// // // // // // //         rule: 'Recognize Perfect Power',
// // // // // // //         description: `${formatNumber(resultValue)} = ${formatNumber(baseValue)} raised to power ${perfectPower}.`,
// // // // // // //         before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // // //         after: { type: 'EQUATION', left: expSide, right: { type: 'POWER', base: { type: 'NUMBER', value: baseValue }, exponent: { type: 'NUMBER', value: perfectPower } } }
// // // // // // //       });
// // // // // // //       steps.push({
// // // // // // //         rule: 'Match Bases',
// // // // // // //         description: `Same base (${formatNumber(baseValue)}) means exponents are equal.`,
// // // // // // //         before: null,
// // // // // // //         after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: perfectPower } }
// // // // // // //       });
// // // // // // //       return { steps, solution: { variable: varName, value: perfectPower, exact: true } };
// // // // // // //     }
    
// // // // // // //     // Use logarithms
// // // // // // //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
// // // // // // //     steps.push({
// // // // // // //       rule: 'Apply Logarithm',
// // // // // // //       description: `Take ${logName} of both sides.`,
// // // // // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // // //       after: null
// // // // // // //     });
    
// // // // // // //     steps.push({
// // // // // // //       rule: 'Simplify',
// // // // // // //       description: isNaturalBase ? 'ln(eˣ) = x' : `log base b of bˣ = x`,
// // // // // // //       before: null,
// // // // // // //       after: null
// // // // // // //     });
    
// // // // // // //     const solution = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
    
// // // // // // //     steps.push({
// // // // // // //       rule: 'Calculate',
// // // // // // //       description: isNaturalBase 
// // // // // // //         ? `ln(${formatNumber(resultValue)}) ≈ ${formatNumber(solution)}`
// // // // // // //         : `log(${formatNumber(resultValue)}) ÷ log(${formatNumber(baseValue)}) ≈ ${formatNumber(solution)}`,
// // // // // // //       before: null,
// // // // // // //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: solution } }
// // // // // // //     });
    
// // // // // // //     return { steps, solution: { variable: varName, value: solution, exact: false } };
// // // // // // //   }
  
// // // // // // //   // Linear exponent
// // // // // // //   const linearInfo = parseLinearExponent(exponent);
// // // // // // //   if (linearInfo) {
// // // // // // //     const { variable, coefficient, constant } = linearInfo;
// // // // // // //     const logResult = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
// // // // // // //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
    
// // // // // // //     steps.push({
// // // // // // //       rule: 'Apply Logarithm',
// // // // // // //       description: `Take ${logName} of both sides to bring down the exponent.`,
// // // // // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // // //       after: null
// // // // // // //     });
    
// // // // // // //     const expStr = `${coefficient === 1 ? '' : coefficient}${variable}${constant >= 0 ? ' + ' + constant : ' − ' + Math.abs(constant)}`;
// // // // // // //     steps.push({
// // // // // // //       rule: 'Linear Equation',
// // // // // // //       description: `Now solve: ${expStr} = ${formatNumber(logResult)}`,
// // // // // // //       before: null,
// // // // // // //       after: null
// // // // // // //     });
    
// // // // // // //     const subtracted = logResult - constant;
// // // // // // //     const solution = subtracted / coefficient;
    
// // // // // // //     steps.push({
// // // // // // //       rule: 'Solve for Variable',
// // // // // // //       description: coefficient !== 1 
// // // // // // //         ? `Subtract ${formatNumber(constant)}, then divide by ${coefficient}.`
// // // // // // //         : `Subtract ${formatNumber(constant)} from both sides.`,
// // // // // // //       before: null,
// // // // // // //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
// // // // // // //     });
    
// // // // // // //     return { steps, solution: { variable, value: solution, exact: false } };
// // // // // // //   }
  
// // // // // // //   throw new Error('Exponent form not supported');
// // // // // // // }

// // // // // // // /* =====================================================
// // // // // // //    ENGINE COMPONENT (Standalone Solver)
// // // // // // //    ===================================================== */

// // // // // // // export const ExponentialSolverEngine = forwardRef(({ 
// // // // // // //   compact = false,
// // // // // // //   style = {},
// // // // // // //   onResultChange = null  // Optional: wrapper can observe result changes
// // // // // // // }, ref) => {
// // // // // // //   const [expression, setExpression] = useState([]);
// // // // // // //   const [result, setResult] = useState(null);
// // // // // // //   const [error, setError] = useState(null);

// // // // // // //   const variables = ['x', 'y', 'n'];
// // // // // // //   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
// // // // // // //   const operators = ['^', '×', '÷', '+', '-', '='];

// // // // // // //   // Expose methods to parent
// // // // // // //   useImperativeHandle(ref, () => ({
// // // // // // //     loadEquation: (eqString) => {
// // // // // // //       setExpression(eqString.split(''));
// // // // // // //       setResult(null);
// // // // // // //       setError(null);
// // // // // // //       if (onResultChange) onResultChange(null);
// // // // // // //     },
// // // // // // //     clear: () => {
// // // // // // //       setExpression([]);
// // // // // // //       setResult(null);
// // // // // // //       setError(null);
// // // // // // //       if (onResultChange) onResultChange(null);
// // // // // // //     },
// // // // // // //     getExpression: () => expression.join(''),
// // // // // // //     getResult: () => result
// // // // // // //   }));

// // // // // // //   const addToExpression = (item) => {
// // // // // // //     setExpression([...expression, item]);
// // // // // // //     setResult(null);
// // // // // // //     setError(null);
// // // // // // //   };

// // // // // // //   const backspace = () => {
// // // // // // //     setExpression(expression.slice(0, -1));
// // // // // // //     setResult(null);
// // // // // // //     setError(null);
// // // // // // //   };

// // // // // // //   const clearAll = () => {
// // // // // // //     setExpression([]);
// // // // // // //     setResult(null);
// // // // // // //     setError(null);
// // // // // // //   };

// // // // // // //   const renderExpressionDisplay = (expr) => {
// // // // // // //     if (!expr || expr.length === 0) {
// // // // // // //       return <span style={engineStyles.placeholder}>Enter equation...</span>;
// // // // // // //     }
    
// // // // // // //     const elements = [];
// // // // // // //     let i = 0;
    
// // // // // // //     while (i < expr.length) {
// // // // // // //       const current = expr[i];
// // // // // // //       const next = expr[i + 1];
      
// // // // // // //       if (next === '^') {
// // // // // // //         let expChars = [];
// // // // // // //         let j = i + 2;
        
// // // // // // //         if (expr[j] === '(') {
// // // // // // //           let depth = 1;
// // // // // // //           expChars.push('(');
// // // // // // //           j++;
// // // // // // //           while (j < expr.length && depth > 0) {
// // // // // // //             if (expr[j] === '(') depth++;
// // // // // // //             if (expr[j] === ')') depth--;
// // // // // // //             expChars.push(expr[j]);
// // // // // // //             j++;
// // // // // // //           }
// // // // // // //         } else {
// // // // // // //           while (j < expr.length && /[0-9a-zA-Z.+\-×]/.test(expr[j]) && expr[j] !== '=') {
// // // // // // //             expChars.push(expr[j]);
// // // // // // //             j++;
// // // // // // //           }
// // // // // // //         }
        
// // // // // // //         if (expChars.length > 0) {
// // // // // // //           elements.push(
// // // // // // //             <span key={i} style={engineStyles.displayTerm}>
// // // // // // //               <span style={current === 'e' ? engineStyles.displayEuler : undefined}>{current}</span>
// // // // // // //               <sup style={engineStyles.displaySup}>{expChars.join('')}</sup>
// // // // // // //             </span>
// // // // // // //           );
// // // // // // //           i = j;
// // // // // // //           continue;
// // // // // // //         }
// // // // // // //       }
      
// // // // // // //       const charMap = {
// // // // // // //         '×': { style: engineStyles.displayOp, text: ' · ' },
// // // // // // //         '÷': { style: engineStyles.displayOp, text: ' / ' },
// // // // // // //         '+': { style: engineStyles.displayOp, text: ' + ' },
// // // // // // //         '-': { style: engineStyles.displayOp, text: ' − ' },
// // // // // // //         '=': { style: engineStyles.displayEquals, text: ' = ' },
// // // // // // //         '^': { style: engineStyles.displayOp, text: '^' },
// // // // // // //         'e': { style: engineStyles.displayEuler, text: 'e' },
// // // // // // //       };
      
// // // // // // //       if (charMap[current]) {
// // // // // // //         elements.push(<span key={i} style={charMap[current].style}>{charMap[current].text}</span>);
// // // // // // //       } else {
// // // // // // //         elements.push(<span key={i}>{current}</span>);
// // // // // // //       }
// // // // // // //       i++;
// // // // // // //     }
    
// // // // // // //     return elements;
// // // // // // //   };

// // // // // // //   const solve = () => {
// // // // // // //     try {
// // // // // // //       const exprString = expression.join('');
// // // // // // //       const tokens = tokenize(exprString);
// // // // // // //       const ast = parse(tokens);
// // // // // // //       const solveResult = solveExponentialEquation(ast);
      
// // // // // // //       setResult(solveResult);
// // // // // // //       setError(null);
// // // // // // //       if (onResultChange) onResultChange(solveResult);
// // // // // // //     } catch (e) {
// // // // // // //       setError(e.message);
// // // // // // //       setResult(null);
// // // // // // //       if (onResultChange) onResultChange(null);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const p = compact ? 0.85 : 1; // padding multiplier

// // // // // // //   return (
// // // // // // //     <div style={{ ...engineStyles.container, ...style }}>
// // // // // // //       <div style={{ ...engineStyles.display, padding: `${18 * p}px ${22 * p}px` }}>
// // // // // // //         {renderExpressionDisplay(expression)}
// // // // // // //       </div>
      
// // // // // // //       {error && (
// // // // // // //         <div style={engineStyles.error}>{error}</div>
// // // // // // //       )}
      
// // // // // // //       <div style={{ ...engineStyles.builder, gap: `${12 * p}px` }}>
// // // // // // //         <div style={engineStyles.row}>
// // // // // // //           <span style={engineStyles.label}>Var</span>
// // // // // // //           <div style={engineStyles.btnGroup}>
// // // // // // //             {variables.map((v) => (
// // // // // // //               <button key={v} style={{ ...engineStyles.btn, ...engineStyles.btnVar }} onClick={() => addToExpression(v)}>{v}</button>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div style={engineStyles.row}>
// // // // // // //           <span style={engineStyles.label}>Num</span>
// // // // // // //           <div style={engineStyles.btnGroup}>
// // // // // // //             {numbers.map((n) => (
// // // // // // //               <button key={n} style={{ ...engineStyles.btn, ...engineStyles.btnNum }} onClick={() => addToExpression(n)}>{n}</button>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div style={engineStyles.row}>
// // // // // // //           <span style={engineStyles.label}>Op</span>
// // // // // // //           <div style={engineStyles.btnGroup}>
// // // // // // //             {operators.map((op) => (
// // // // // // //               <button key={op} style={{ ...engineStyles.btn, ...engineStyles.btnOp }} onClick={() => addToExpression(op)}>
// // // // // // //                 {op === '^' ? 'xⁿ' : op}
// // // // // // //               </button>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div style={engineStyles.row}>
// // // // // // //           <span style={engineStyles.label}></span>
// // // // // // //           <div style={engineStyles.btnGroup}>
// // // // // // //             <button style={{ ...engineStyles.btn, ...engineStyles.btnSpecial }} onClick={() => addToExpression('e')}>e</button>
// // // // // // //             <button style={{ ...engineStyles.btn, ...engineStyles.btnBracket }} onClick={() => addToExpression('(')}>(</button>
// // // // // // //             <button style={{ ...engineStyles.btn, ...engineStyles.btnBracket }} onClick={() => addToExpression(')')}>)</button>
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div style={engineStyles.actions}>
// // // // // // //           <button style={{ ...engineStyles.btnAction, ...engineStyles.btnClear }} onClick={clearAll}>Clear</button>
// // // // // // //           <button style={{ ...engineStyles.btnAction, ...engineStyles.btnBack }} onClick={backspace}>←</button>
// // // // // // //           <button 
// // // // // // //             style={{ ...engineStyles.btnAction, ...engineStyles.btnSolve, ...(expression.length === 0 ? engineStyles.btnDisabled : {}) }} 
// // // // // // //             onClick={solve}
// // // // // // //             disabled={expression.length === 0}
// // // // // // //           >
// // // // // // //             Solve
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
      
// // // // // // //       {result && result.solution && (
// // // // // // //         <div style={engineStyles.solution}>
// // // // // // //           <span style={engineStyles.solVar}>{result.solution.variable}</span>
// // // // // // //           <span style={engineStyles.solEq}> = </span>
// // // // // // //           <span style={engineStyles.solNum}>{formatNumber(result.solution.value)}</span>
// // // // // // //           {!result.solution.exact && <span style={engineStyles.solApprox}> ≈</span>}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // });

// // // // // // // ExponentialSolverEngine.displayName = 'ExponentialSolverEngine';

// // // // // // // const engineStyles = {
// // // // // // //   container: {
// // // // // // //     background: '#fff',
// // // // // // //     borderRadius: '16px',
// // // // // // //     padding: '20px',
// // // // // // //     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // // // // //   },
// // // // // // //   display: {
// // // // // // //     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // // // //     borderRadius: '12px',
// // // // // // //     padding: '18px 22px',
// // // // // // //     minHeight: '54px',
// // // // // // //     marginBottom: '16px',
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     fontSize: '1.4rem',
// // // // // // //     color: '#fff',
// // // // // // //     fontWeight: '500',
// // // // // // //   },
// // // // // // //   placeholder: {
// // // // // // //     color: 'rgba(255,255,255,0.5)',
// // // // // // //     fontStyle: 'italic',
// // // // // // //     fontSize: '0.95rem',
// // // // // // //   },
// // // // // // //   displayTerm: { display: 'inline-flex', alignItems: 'baseline' },
// // // // // // //   displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px' },
// // // // // // //   displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
// // // // // // //   displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
// // // // // // //   displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
// // // // // // //   error: {
// // // // // // //     background: '#fef2f2',
// // // // // // //     border: '1px solid #fecaca',
// // // // // // //     borderRadius: '8px',
// // // // // // //     padding: '10px 14px',
// // // // // // //     marginBottom: '12px',
// // // // // // //     color: '#dc2626',
// // // // // // //     fontSize: '0.85rem',
// // // // // // //   },
// // // // // // //   builder: {
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     gap: '10px',
// // // // // // //   },
// // // // // // //   row: {
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     gap: '10px',
// // // // // // //   },
// // // // // // //   label: {
// // // // // // //     fontSize: '0.65rem',
// // // // // // //     textTransform: 'uppercase',
// // // // // // //     letterSpacing: '0.5px',
// // // // // // //     color: '#94a3b8',
// // // // // // //     width: '28px',
// // // // // // //     flexShrink: 0,
// // // // // // //     fontWeight: '600',
// // // // // // //   },
// // // // // // //   btnGroup: {
// // // // // // //     display: 'flex',
// // // // // // //     flexWrap: 'wrap',
// // // // // // //     gap: '6px',
// // // // // // //   },
// // // // // // //   btn: {
// // // // // // //     fontSize: '0.95rem',
// // // // // // //     padding: '8px 12px',
// // // // // // //     border: '1px solid #e2e8f0',
// // // // // // //     background: '#f8fafc',
// // // // // // //     color: '#334155',
// // // // // // //     cursor: 'pointer',
// // // // // // //     borderRadius: '8px',
// // // // // // //     minWidth: '36px',
// // // // // // //     fontFamily: 'inherit',
// // // // // // //     fontWeight: '500',
// // // // // // //     transition: 'all 0.15s',
// // // // // // //   },
// // // // // // //   btnVar: { fontStyle: 'italic', color: '#3b82f6', fontWeight: '600' },
// // // // // // //   btnNum: { color: '#1e293b' },
// // // // // // //   btnOp: { color: '#64748b', fontWeight: '600' },
// // // // // // //   btnSpecial: { color: '#0891b2', fontWeight: '600', fontStyle: 'italic' },
// // // // // // //   btnBracket: { fontSize: '1.1rem', color: '#64748b' },
// // // // // // //   actions: {
// // // // // // //     display: 'flex',
// // // // // // //     gap: '8px',
// // // // // // //     marginTop: '6px',
// // // // // // //     paddingTop: '14px',
// // // // // // //     borderTop: '1px solid #e2e8f0',
// // // // // // //   },
// // // // // // //   btnAction: {
// // // // // // //     fontSize: '0.85rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     padding: '12px 18px',
// // // // // // //     border: 'none',
// // // // // // //     cursor: 'pointer',
// // // // // // //     borderRadius: '8px',
// // // // // // //     fontFamily: 'inherit',
// // // // // // //     transition: 'all 0.15s',
// // // // // // //   },
// // // // // // //   btnClear: { background: '#f1f5f9', color: '#64748b' },
// // // // // // //   btnBack: { background: '#f1f5f9', color: '#64748b' },
// // // // // // //   btnSolve: {
// // // // // // //     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // // // //     color: '#fff',
// // // // // // //     marginLeft: 'auto',
// // // // // // //     padding: '12px 24px',
// // // // // // //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
// // // // // // //   },
// // // // // // //   btnDisabled: { background: '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
// // // // // // //   solution: {
// // // // // // //     marginTop: '16px',
// // // // // // //     padding: '14px 18px',
// // // // // // //     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // // // //     borderRadius: '10px',
// // // // // // //     textAlign: 'center',
// // // // // // //     fontSize: '1.3rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#fff',
// // // // // // //   },
// // // // // // //   solVar: { fontStyle: 'italic' },
// // // // // // //   solEq: { opacity: 0.8, margin: '0 6px' },
// // // // // // //   solNum: { color: '#fbbf24' },
// // // // // // //   solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
// // // // // // // };

// // // // // // // /* =====================================================
// // // // // // //    EQUATION FORM GENERATORS
// // // // // // //    ===================================================== */

// // // // // // // const equationForms = [
// // // // // // //   {
// // // // // // //     id: 'simple',
// // // // // // //     name: 'Simple',
// // // // // // //     formula: 'bˣ = c',
// // // // // // //     generate: (nice) => {
// // // // // // //       if (nice) {
// // // // // // //         const bases = [2, 3, 5, 10];
// // // // // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // // // // //         const exp = Math.floor(Math.random() * 5) + 1;
// // // // // // //         return `${base}^x=${Math.pow(base, exp)}`;
// // // // // // //       }
// // // // // // //       return `${Math.floor(Math.random() * 8) + 2}^x=${Math.floor(Math.random() * 900) + 10}`;
// // // // // // //     }
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 'coefficient',
// // // // // // //     name: 'With Coefficient',
// // // // // // //     formula: 'a · bˣ = c',
// // // // // // //     generate: (nice) => {
// // // // // // //       if (nice) {
// // // // // // //         const bases = [2, 3, 5];
// // // // // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // // // // //         const exp = Math.floor(Math.random() * 4) + 1;
// // // // // // //         const coeff = Math.floor(Math.random() * 5) + 2;
// // // // // // //         return `${coeff}×${base}^x=${coeff * Math.pow(base, exp)}`;
// // // // // // //       }
// // // // // // //       const base = Math.floor(Math.random() * 7) + 2;
// // // // // // //       const coeff = Math.floor(Math.random() * 9) + 2;
// // // // // // //       return `${coeff}×${base}^x=${Math.floor(Math.random() * 500) + 20}`;
// // // // // // //     }
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 'linear-exp',
// // // // // // //     name: 'Linear Exponent',
// // // // // // //     formula: 'b⁽ᵐˣ⁺ⁿ⁾ = c',
// // // // // // //     generate: (nice) => {
// // // // // // //       const bases = [2, 3, 5];
// // // // // // //       const base = bases[Math.floor(Math.random() * bases.length)];
// // // // // // //       const m = Math.floor(Math.random() * 3) + 1;
// // // // // // //       const n = Math.floor(Math.random() * 5) - 2;
// // // // // // //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// // // // // // //       const mStr = m === 1 ? 'x' : `${m}×x`;
// // // // // // //       if (nice) {
// // // // // // //         const x = Math.floor(Math.random() * 4) + 1;
// // // // // // //         return `${base}^(${mStr}${nStr})=${Math.pow(base, m * x + n)}`;
// // // // // // //       }
// // // // // // //       return `${base}^(${mStr}${nStr})=${Math.floor(Math.random() * 200) + 5}`;
// // // // // // //     }
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 'same-base',
// // // // // // //     name: 'Same Base',
// // // // // // //     formula: 'bᶠ⁽ˣ⁾ = bⁿ',
// // // // // // //     generate: () => {
// // // // // // //       const bases = [2, 3, 5];
// // // // // // //       const base = bases[Math.floor(Math.random() * bases.length)];
// // // // // // //       const a = Math.floor(Math.random() * 3) + 1;
// // // // // // //       const b = Math.floor(Math.random() * 5);
// // // // // // //       const c = Math.floor(Math.random() * 6) + 1;
// // // // // // //       const aStr = a === 1 ? 'x' : `${a}×x`;
// // // // // // //       const bStr = b > 0 ? `+${b}` : '';
// // // // // // //       return `${base}^(${aStr}${bStr})=${base}^${c}`;
// // // // // // //     }
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 'convertible',
// // // // // // //     name: 'Convertible',
// // // // // // //     formula: 'aˣ = b',
// // // // // // //     generate: () => {
// // // // // // //       const families = [
// // // // // // //         { bases: [2, 4, 8, 16, 32], root: 2 },
// // // // // // //         { bases: [3, 9, 27, 81], root: 3 },
// // // // // // //         { bases: [5, 25, 125], root: 5 }
// // // // // // //       ];
// // // // // // //       const family = families[Math.floor(Math.random() * families.length)];
// // // // // // //       const base = family.bases[Math.floor(Math.random() * (family.bases.length - 1))];
// // // // // // //       const result = family.bases[Math.floor(Math.random() * family.bases.length)];
// // // // // // //       return `${base}^x=${result}`;
// // // // // // //     }
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 'with-constant',
// // // // // // //     name: 'With Constant',
// // // // // // //     formula: 'bˣ + c = d',
// // // // // // //     generate: (nice) => {
// // // // // // //       if (nice) {
// // // // // // //         const bases = [2, 3, 5];
// // // // // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // // // // //         const exp = Math.floor(Math.random() * 4) + 1;
// // // // // // //         const c = Math.floor(Math.random() * 10) + 1;
// // // // // // //         return `${base}^x+${c}=${Math.pow(base, exp) + c}`;
// // // // // // //       }
// // // // // // //       const base = Math.floor(Math.random() * 7) + 2;
// // // // // // //       const c = Math.floor(Math.random() * 20) + 1;
// // // // // // //       return `${base}^x+${c}=${Math.floor(Math.random() * 200) + c + 1}`;
// // // // // // //     }
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 'natural',
// // // // // // //     name: 'Natural Base',
// // // // // // //     formula: 'eˣ = c',
// // // // // // //     generate: (nice) => {
// // // // // // //       if (nice) {
// // // // // // //         const vals = [1, 2, 3, 5, 7, 10, 20, 50, 100];
// // // // // // //         return `e^x=${vals[Math.floor(Math.random() * vals.length)]}`;
// // // // // // //       }
// // // // // // //       return `e^x=${(Math.random() * 100 + 1).toFixed(2)}`;
// // // // // // //     }
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 'natural-linear',
// // // // // // //     name: 'Natural Linear',
// // // // // // //     formula: 'e⁽ᵐˣ⁺ⁿ⁾ = c',
// // // // // // //     generate: (nice) => {
// // // // // // //       const m = Math.floor(Math.random() * 3) + 1;
// // // // // // //       const n = Math.floor(Math.random() * 5) - 2;
// // // // // // //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// // // // // // //       const mStr = m === 1 ? 'x' : `${m}×x`;
// // // // // // //       if (nice) {
// // // // // // //         const vals = [1, 2, 5, 10, 20, 50];
// // // // // // //         return `e^(${mStr}${nStr})=${vals[Math.floor(Math.random() * vals.length)]}`;
// // // // // // //       }
// // // // // // //       return `e^(${mStr}${nStr})=${(Math.random() * 50 + 1).toFixed(2)}`;
// // // // // // //     }
// // // // // // //   }
// // // // // // // ];

// // // // // // // /* =====================================================
// // // // // // //    WRAPPER COMPONENT (Full Educational Version)
// // // // // // //    ===================================================== */

// // // // // // // const ExponentialEquationSolver = () => {
// // // // // // //   const engineRef = React.useRef(null);
// // // // // // //   const [solveResult, setSolveResult] = useState(null);
// // // // // // //   const [selectedForm, setSelectedForm] = useState(null);

// // // // // // //   const handleFormClick = (form) => {
// // // // // // //     const isNice = Math.random() < 0.8;
// // // // // // //     const equation = form.generate(isNice);
// // // // // // //     setSelectedForm(form.id);
// // // // // // //     setSolveResult(null);
// // // // // // //     if (engineRef.current) {
// // // // // // //       engineRef.current.loadEquation(equation);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleResultChange = (result) => {
// // // // // // //     setSolveResult(result);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={wrapperStyles.container}>
// // // // // // //       <div style={wrapperStyles.inner}>
        
// // // // // // //         {/* Header */}
// // // // // // //         <header style={wrapperStyles.header}>
// // // // // // //           <div style={wrapperStyles.iconWrap}>
// // // // // // //             <span style={wrapperStyles.icon}>x</span>
// // // // // // //           </div>
// // // // // // //           <h1 style={wrapperStyles.title}>Exponential Equation Solver</h1>
// // // // // // //           <p style={wrapperStyles.subtitle}>Solve equations with variables in exponents</p>
// // // // // // //         </header>

// // // // // // //         {/* Main Content - Side by Side */}
// // // // // // //         <div style={wrapperStyles.main}>
          
// // // // // // //           {/* Left Column - Engine + Forms */}
// // // // // // //           <div style={wrapperStyles.leftCol}>
            
// // // // // // //             {/* Engine */}
// // // // // // //             <ExponentialSolverEngine 
// // // // // // //               ref={engineRef} 
// // // // // // //               onResultChange={handleResultChange}
// // // // // // //               compact={true}
// // // // // // //             />
            
// // // // // // //             {/* Equation Forms */}
// // // // // // //             <div style={wrapperStyles.formsSection}>
// // // // // // //               <h2 style={wrapperStyles.sectionTitle}>Try an Example</h2>
// // // // // // //               <p style={wrapperStyles.formsHint}>Click any type to generate a random equation. Click again for a new one!</p>
// // // // // // //               <div style={wrapperStyles.formsGrid}>
// // // // // // //                 {equationForms.map((form) => (
// // // // // // //                   <button
// // // // // // //                     key={form.id}
// // // // // // //                     style={{
// // // // // // //                       ...wrapperStyles.formCard,
// // // // // // //                       ...(selectedForm === form.id ? wrapperStyles.formCardSelected : {})
// // // // // // //                     }}
// // // // // // //                     onClick={() => handleFormClick(form)}
// // // // // // //                   >
// // // // // // //                     <div style={wrapperStyles.formName}>{form.name}</div>
// // // // // // //                     <div style={wrapperStyles.formFormula}>{form.formula}</div>
// // // // // // //                   </button>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           {/* Right Column - Steps & Explanation */}
// // // // // // //           <div style={wrapperStyles.rightCol}>
// // // // // // //             <h2 style={wrapperStyles.sectionTitle}>Solution Steps</h2>
            
// // // // // // //             {!solveResult && (
// // // // // // //               <div style={wrapperStyles.emptyState}>
// // // // // // //                 <div style={wrapperStyles.emptyIcon}>?</div>
// // // // // // //                 <p>Select an equation type or enter your own equation, then click Solve to see the step-by-step solution.</p>
// // // // // // //               </div>
// // // // // // //             )}
            
// // // // // // //             {solveResult && solveResult.steps && (
// // // // // // //               <div style={wrapperStyles.stepsContainer}>
// // // // // // //                 {solveResult.steps.map((step, index) => (
// // // // // // //                   <div key={index} style={wrapperStyles.stepCard}>
// // // // // // //                     <div style={wrapperStyles.stepHeader}>
// // // // // // //                       <div style={wrapperStyles.stepNum}>{index + 1}</div>
// // // // // // //                       <div style={wrapperStyles.stepRule}>{step.rule}</div>
// // // // // // //                     </div>
// // // // // // //                     <p style={wrapperStyles.stepDesc}>{step.description}</p>
// // // // // // //                     {step.before && (
// // // // // // //                       <div style={wrapperStyles.stepMath}>
// // // // // // //                         {astToMathDisplay(step.before)}
// // // // // // //                       </div>
// // // // // // //                     )}
// // // // // // //                     {step.after && (
// // // // // // //                       <div style={wrapperStyles.stepTransform}>
// // // // // // //                         <span style={wrapperStyles.arrow}>⟹</span>
// // // // // // //                         <div style={wrapperStyles.stepMath}>
// // // // // // //                           {astToMathDisplay(step.after)}
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     )}
// // // // // // //                   </div>
// // // // // // //                 ))}
                
// // // // // // //                 {solveResult.solution && (
// // // // // // //                   <div style={wrapperStyles.finalAnswer}>
// // // // // // //                     <div style={wrapperStyles.answerLabel}>Answer</div>
// // // // // // //                     <div style={wrapperStyles.answerValue}>
// // // // // // //                       <span style={wrapperStyles.answerVar}>{solveResult.solution.variable}</span>
// // // // // // //                       <span style={wrapperStyles.answerEq}> = </span>
// // // // // // //                       <span style={wrapperStyles.answerNum}>{formatNumber(solveResult.solution.value)}</span>
// // // // // // //                     </div>
// // // // // // //                     <div style={wrapperStyles.answerNote}>
// // // // // // //                       {solveResult.solution.exact ? '✓ Exact solution' : '≈ Approximate value'}
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const wrapperStyles = {
// // // // // // //   container: {
// // // // // // //     minHeight: '100vh',
// // // // // // //     background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
// // // // // // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // // // // //     color: '#1e3a5f',
// // // // // // //     padding: '30px 20px',
// // // // // // //   },
// // // // // // //   inner: {
// // // // // // //     maxWidth: '1100px',
// // // // // // //     margin: '0 auto',
// // // // // // //   },
// // // // // // //   header: {
// // // // // // //     textAlign: 'center',
// // // // // // //     marginBottom: '24px',
// // // // // // //   },
// // // // // // //   iconWrap: {
// // // // // // //     width: '50px',
// // // // // // //     height: '50px',
// // // // // // //     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // // // //     borderRadius: '14px',
// // // // // // //     display: 'inline-flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     justifyContent: 'center',
// // // // // // //     marginBottom: '12px',
// // // // // // //     boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
// // // // // // //   },
// // // // // // //   icon: {
// // // // // // //     color: '#fff',
// // // // // // //     fontSize: '24px',
// // // // // // //     fontStyle: 'italic',
// // // // // // //     fontWeight: '700',
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     fontSize: '1.7rem',
// // // // // // //     fontWeight: '700',
// // // // // // //     color: '#1e3a5f',
// // // // // // //     margin: '0 0 6px 0',
// // // // // // //   },
// // // // // // //   subtitle: {
// // // // // // //     fontSize: '0.95rem',
// // // // // // //     color: '#64748b',
// // // // // // //     margin: 0,
// // // // // // //   },
// // // // // // //   main: {
// // // // // // //     display: 'flex',
// // // // // // //     gap: '24px',
// // // // // // //     alignItems: 'flex-start',
// // // // // // //   },
// // // // // // //   leftCol: {
// // // // // // //     flex: '1 1 50%',
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     gap: '16px',
// // // // // // //   },
// // // // // // //   rightCol: {
// // // // // // //     flex: '1 1 50%',
// // // // // // //     background: '#fff',
// // // // // // //     borderRadius: '16px',
// // // // // // //     padding: '20px',
// // // // // // //     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // // // // //     minHeight: '500px',
// // // // // // //   },
// // // // // // //   sectionTitle: {
// // // // // // //     fontSize: '0.75rem',
// // // // // // //     textTransform: 'uppercase',
// // // // // // //     letterSpacing: '1.5px',
// // // // // // //     color: '#64748b',
// // // // // // //     marginBottom: '12px',
// // // // // // //     fontWeight: '600',
// // // // // // //   },
// // // // // // //   formsSection: {
// // // // // // //     background: '#fff',
// // // // // // //     borderRadius: '16px',
// // // // // // //     padding: '16px',
// // // // // // //     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // // // // //   },
// // // // // // //   formsGrid: {
// // // // // // //     display: 'grid',
// // // // // // //     gridTemplateColumns: 'repeat(2, 1fr)',
// // // // // // //     gap: '8px',
// // // // // // //   },
// // // // // // //   formsHint: {
// // // // // // //     fontSize: '0.8rem',
// // // // // // //     color: '#94a3b8',
// // // // // // //     margin: '0 0 10px 0',
// // // // // // //     fontStyle: 'italic',
// // // // // // //   },
// // // // // // //   formCard: {
// // // // // // //     background: '#f8fafc',
// // // // // // //     border: '2px solid #e2e8f0',
// // // // // // //     borderRadius: '10px',
// // // // // // //     padding: '10px 12px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     transition: 'all 0.2s ease',
// // // // // // //     textAlign: 'left',
// // // // // // //     fontFamily: 'inherit',
// // // // // // //   },
// // // // // // //   formCardSelected: {
// // // // // // //     borderColor: '#3b82f6',
// // // // // // //     background: '#eff6ff',
// // // // // // //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)',
// // // // // // //   },
// // // // // // //   formName: {
// // // // // // //     fontSize: '0.8rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#1e3a5f',
// // // // // // //     marginBottom: '2px',
// // // // // // //   },
// // // // // // //   formFormula: {
// // // // // // //     fontSize: '0.9rem',
// // // // // // //     color: '#3b82f6',
// // // // // // //     fontFamily: 'ui-monospace, monospace',
// // // // // // //   },
// // // // // // //   emptyState: {
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     alignItems: 'center',
// // // // // // //     justifyContent: 'center',
// // // // // // //     height: '300px',
// // // // // // //     color: '#94a3b8',
// // // // // // //     textAlign: 'center',
// // // // // // //     padding: '20px',
// // // // // // //   },
// // // // // // //   emptyIcon: {
// // // // // // //     width: '60px',
// // // // // // //     height: '60px',
// // // // // // //     background: '#f1f5f9',
// // // // // // //     borderRadius: '50%',
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     justifyContent: 'center',
// // // // // // //     fontSize: '28px',
// // // // // // //     fontWeight: '700',
// // // // // // //     color: '#cbd5e1',
// // // // // // //     marginBottom: '16px',
// // // // // // //   },
// // // // // // //   stepsContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     gap: '12px',
// // // // // // //   },
// // // // // // //   stepCard: {
// // // // // // //     background: '#f8fafc',
// // // // // // //     borderRadius: '10px',
// // // // // // //     padding: '14px 16px',
// // // // // // //     borderLeft: '3px solid #3b82f6',
// // // // // // //   },
// // // // // // //   stepHeader: {
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     gap: '10px',
// // // // // // //     marginBottom: '8px',
// // // // // // //   },
// // // // // // //   stepNum: {
// // // // // // //     width: '24px',
// // // // // // //     height: '24px',
// // // // // // //     background: '#3b82f6',
// // // // // // //     borderRadius: '50%',
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     justifyContent: 'center',
// // // // // // //     color: '#fff',
// // // // // // //     fontSize: '0.75rem',
// // // // // // //     fontWeight: '700',
// // // // // // //     flexShrink: 0,
// // // // // // //   },
// // // // // // //   stepRule: {
// // // // // // //     fontWeight: '600',
// // // // // // //     fontSize: '0.95rem',
// // // // // // //     color: '#1e3a5f',
// // // // // // //   },
// // // // // // //   stepDesc: {
// // // // // // //     fontSize: '0.85rem',
// // // // // // //     color: '#64748b',
// // // // // // //     margin: '0 0 10px 0',
// // // // // // //     lineHeight: '1.5',
// // // // // // //     paddingLeft: '34px',
// // // // // // //   },
// // // // // // //   stepMath: {
// // // // // // //     fontSize: '1.05rem',
// // // // // // //     color: '#1e3a5f',
// // // // // // //     background: '#fff',
// // // // // // //     padding: '10px 14px',
// // // // // // //     borderRadius: '8px',
// // // // // // //     display: 'inline-block',
// // // // // // //     marginLeft: '34px',
// // // // // // //     border: '1px solid #e2e8f0',
// // // // // // //   },
// // // // // // //   stepTransform: {
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     gap: '10px',
// // // // // // //     marginTop: '8px',
// // // // // // //     paddingLeft: '34px',
// // // // // // //   },
// // // // // // //   arrow: {
// // // // // // //     color: '#3b82f6',
// // // // // // //     fontSize: '1.1rem',
// // // // // // //   },
// // // // // // //   finalAnswer: {
// // // // // // //     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // // // //     borderRadius: '12px',
// // // // // // //     padding: '18px 20px',
// // // // // // //     color: '#fff',
// // // // // // //     textAlign: 'center',
// // // // // // //     marginTop: '8px',
// // // // // // //   },
// // // // // // //   answerLabel: {
// // // // // // //     fontSize: '0.7rem',
// // // // // // //     textTransform: 'uppercase',
// // // // // // //     letterSpacing: '2px',
// // // // // // //     opacity: 0.8,
// // // // // // //     marginBottom: '6px',
// // // // // // //     fontWeight: '600',
// // // // // // //   },
// // // // // // //   answerValue: {
// // // // // // //     fontSize: '1.5rem',
// // // // // // //     fontWeight: '700',
// // // // // // //   },
// // // // // // //   answerVar: { fontStyle: 'italic' },
// // // // // // //   answerEq: { opacity: 0.8, margin: '0 6px' },
// // // // // // //   answerNum: { color: '#fbbf24' },
// // // // // // //   answerNote: {
// // // // // // //     fontSize: '0.8rem',
// // // // // // //     opacity: 0.75,
// // // // // // //     marginTop: '6px',
// // // // // // //   },
// // // // // // // };

// // // // // // // export default ExponentialEquationSolver;


// // // // // // import React, { useState, forwardRef, useImperativeHandle } from 'react';
// // // // // // import SolutionPanel from './SolutionPanel';
// // // // // // import THEME_CSS from './MathSolverThemes';

// // // // // // /* =====================================================
// // // // // //    EXPONENTIAL EQUATION SOLVER v4
   
// // // // // //    Two exports:
// // // // // //    - ExponentialSolverEngine: Standalone solver component
// // // // // //    - ExponentialEquationSolver: Full educational wrapper (default)
   
// // // // // //    Changes from v3:
// // // // // //    - Integrated SolutionPanel v5 with graph support
// // // // // //    - Theme support via CSS variables
// // // // // //    - Dark mode toggle
// // // // // //    - Fixed accordion (open/close)
// // // // // //    - Back button: ← → ⌫
// // // // // //    ===================================================== */


// // // // // // /* =====================================================
// // // // // //    TOKENIZER
// // // // // //    ===================================================== */

// // // // // // const TokenType = {
// // // // // //   NUMBER: 'NUMBER',
// // // // // //   VARIABLE: 'VARIABLE',
// // // // // //   MULTIPLY: 'MULTIPLY',
// // // // // //   DIVIDE: 'DIVIDE',
// // // // // //   POWER: 'POWER',
// // // // // //   LPAREN: 'LPAREN',
// // // // // //   RPAREN: 'RPAREN',
// // // // // //   PLUS: 'PLUS',
// // // // // //   MINUS: 'MINUS',
// // // // // //   EQUALS: 'EQUALS',
// // // // // //   E: 'E',
// // // // // // };

// // // // // // function tokenize(input) {
// // // // // //   const tokens = [];
// // // // // //   let i = 0;
  
// // // // // //   while (i < input.length) {
// // // // // //     const char = input[i];
    
// // // // // //     if (/\s/.test(char)) {
// // // // // //       i++;
// // // // // //       continue;
// // // // // //     }
    
// // // // // //     if (/[0-9]/.test(char) || (char === '.' && /[0-9]/.test(input[i + 1]))) {
// // // // // //       let num = '';
// // // // // //       while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) {
// // // // // //         num += input[i];
// // // // // //         i++;
// // // // // //       }
// // // // // //       tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) });
// // // // // //       continue;
// // // // // //     }
    
// // // // // //     if (char === 'e' && (i + 1 >= input.length || !/[a-zA-Z]/.test(input[i + 1]))) {
// // // // // //       tokens.push({ type: TokenType.E });
// // // // // //       i++;
// // // // // //       continue;
// // // // // //     }
    
// // // // // //     if (/[a-zA-Z]/.test(char)) {
// // // // // //       tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
// // // // // //       i++;
// // // // // //       continue;
// // // // // //     }
    
// // // // // //     const charMap = {
// // // // // //       '×': TokenType.MULTIPLY, '*': TokenType.MULTIPLY,
// // // // // //       '÷': TokenType.DIVIDE, '/': TokenType.DIVIDE,
// // // // // //       '^': TokenType.POWER,
// // // // // //       '(': TokenType.LPAREN, ')': TokenType.RPAREN,
// // // // // //       '+': TokenType.PLUS, '-': TokenType.MINUS,
// // // // // //       '=': TokenType.EQUALS,
// // // // // //     };
    
// // // // // //     if (charMap[char]) {
// // // // // //       tokens.push({ type: charMap[char] });
// // // // // //       i++;
// // // // // //       continue;
// // // // // //     }
    
// // // // // //     i++;
// // // // // //   }
  
// // // // // //   return tokens;
// // // // // // }

// // // // // // /* =====================================================
// // // // // //    PARSER
// // // // // //    ===================================================== */

// // // // // // function parse(tokens) {
// // // // // //   let pos = 0;
  
// // // // // //   const peek = () => tokens[pos];
// // // // // //   const consume = (expectedType) => {
// // // // // //     const token = tokens[pos];
// // // // // //     if (expectedType && token?.type !== expectedType) {
// // // // // //       throw new Error(`Expected ${expectedType} but got ${token?.type}`);
// // // // // //     }
// // // // // //     pos++;
// // // // // //     return token;
// // // // // //   };
  
// // // // // //   const parseEquation = () => {
// // // // // //     const left = parseExpression();
// // // // // //     if (peek()?.type === TokenType.EQUALS) {
// // // // // //       consume();
// // // // // //       return { type: 'EQUATION', left, right: parseExpression() };
// // // // // //     }
// // // // // //     return left;
// // // // // //   };
  
// // // // // //   const parseExpression = () => parseAdditive();
  
// // // // // //   const parseAdditive = () => {
// // // // // //     let left = parseMultiplicative();
// // // // // //     while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) {
// // // // // //       const op = consume().type;
// // // // // //       left = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left, right: parseMultiplicative() };
// // // // // //     }
// // // // // //     return left;
// // // // // //   };
  
// // // // // //   const parseMultiplicative = () => {
// // // // // //     let left = parsePower();
// // // // // //     while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) {
// // // // // //       const op = consume().type;
// // // // // //       left = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left, right: parsePower() };
// // // // // //     }
// // // // // //     return left;
// // // // // //   };
  
// // // // // //   const parsePower = () => {
// // // // // //     let base = parseUnary();
// // // // // //     if (peek()?.type === TokenType.POWER) {
// // // // // //       consume();
// // // // // //       return { type: 'POWER', base, exponent: parsePower() };
// // // // // //     }
// // // // // //     return base;
// // // // // //   };
  
// // // // // //   const parseUnary = () => {
// // // // // //     if (peek()?.type === TokenType.MINUS) {
// // // // // //       consume();
// // // // // //       return { type: 'NEGATE', operand: parseUnary() };
// // // // // //     }
// // // // // //     return parsePrimary();
// // // // // //   };
  
// // // // // //   const parsePrimary = () => {
// // // // // //     const token = peek();
// // // // // //     if (token?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: token.value }; }
// // // // // //     if (token?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: token.value }; }
// // // // // //     if (token?.type === TokenType.E) { consume(); return { type: 'E' }; }
// // // // // //     if (token?.type === TokenType.LPAREN) {
// // // // // //       consume();
// // // // // //       const expr = parseExpression();
// // // // // //       consume(TokenType.RPAREN);
// // // // // //       return expr;
// // // // // //     }
// // // // // //     throw new Error(`Unexpected token: ${token?.type}`);
// // // // // //   };
  
// // // // // //   const ast = parseEquation();
// // // // // //   if (pos < tokens.length) throw new Error('Unexpected tokens at end');
// // // // // //   return ast;
// // // // // // }

// // // // // // /* =====================================================
// // // // // //    HELPERS
// // // // // //    ===================================================== */

// // // // // // function formatNumber(num) {
// // // // // //   if (Number.isInteger(num)) return String(num);
// // // // // //   return (Math.round(num * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, '');
// // // // // // }

// // // // // // function hasVariableInExponent(node) {
// // // // // //   if (!node) return false;
// // // // // //   if (node.type === 'POWER') return containsVariable(node.exponent);
// // // // // //   if (['MULTIPLY', 'DIVIDE', 'ADD', 'SUBTRACT'].includes(node.type)) {
// // // // // //     return hasVariableInExponent(node.left) || hasVariableInExponent(node.right);
// // // // // //   }
// // // // // //   return false;
// // // // // // }

// // // // // // function containsVariable(node) {
// // // // // //   if (!node) return false;
// // // // // //   if (node.type === 'VARIABLE') return true;
// // // // // //   if (node.type === 'NUMBER' || node.type === 'E') return false;
// // // // // //   if (node.type === 'NEGATE') return containsVariable(node.operand);
// // // // // //   if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
// // // // // //   return containsVariable(node.left) || containsVariable(node.right);
// // // // // // }

// // // // // // function evaluateConstant(node) {
// // // // // //   if (!node) return null;
// // // // // //   switch (node.type) {
// // // // // //     case 'NUMBER': return node.value;
// // // // // //     case 'E': return Math.E;
// // // // // //     case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
// // // // // //     case 'ADD': case 'SUBTRACT': case 'MULTIPLY': case 'DIVIDE': case 'POWER': {
// // // // // //       const l = evaluateConstant(node.left || node.base);
// // // // // //       const r = evaluateConstant(node.right || node.exponent);
// // // // // //       if (l === null || r === null) return null;
// // // // // //       if (node.type === 'ADD') return l + r;
// // // // // //       if (node.type === 'SUBTRACT') return l - r;
// // // // // //       if (node.type === 'MULTIPLY') return l * r;
// // // // // //       if (node.type === 'DIVIDE') return r !== 0 ? l / r : null;
// // // // // //       if (node.type === 'POWER') return Math.pow(l, r);
// // // // // //       return null;
// // // // // //     }
// // // // // //     default: return null;
// // // // // //   }
// // // // // // }

// // // // // // function extractCoefficient(node) {
// // // // // //   if (node.type !== 'MULTIPLY') return { coefficient: null, exponential: null };
// // // // // //   if (node.left.type === 'POWER' && hasVariableInExponent(node.left)) {
// // // // // //     return { coefficient: node.right, exponential: node.left };
// // // // // //   }
// // // // // //   if (node.right.type === 'POWER' && hasVariableInExponent(node.right)) {
// // // // // //     return { coefficient: node.left, exponential: node.right };
// // // // // //   }
// // // // // //   return { coefficient: null, exponential: null };
// // // // // // }

// // // // // // function extractAdditiveConstant(node) {
// // // // // //   if (node.type !== 'ADD' && node.type !== 'SUBTRACT') {
// // // // // //     return { exponential: null, constant: null, isAdd: false };
// // // // // //   }
// // // // // //   const isAdd = node.type === 'ADD';
// // // // // //   if (hasVariableInExponent(node.left) && !containsVariable(node.right)) {
// // // // // //     const constVal = evaluateConstant(node.right);
// // // // // //     if (node.left.type === 'POWER') {
// // // // // //       return { exponential: node.left, constant: constVal, isAdd };
// // // // // //     }
// // // // // //   }
// // // // // //   if (hasVariableInExponent(node.right) && !containsVariable(node.left) && isAdd) {
// // // // // //     const constVal = evaluateConstant(node.left);
// // // // // //     if (node.right.type === 'POWER') {
// // // // // //       return { exponential: node.right, constant: constVal, isAdd };
// // // // // //     }
// // // // // //   }
// // // // // //   return { exponential: null, constant: null, isAdd: false };
// // // // // // }

// // // // // // function findPerfectPower(base, result) {
// // // // // //   if (result === 1) return 0;
// // // // // //   if (result === base) return 1;
// // // // // //   let power = 0, current = 1;
// // // // // //   while (current < result && power < 100) {
// // // // // //     current *= base;
// // // // // //     power++;
// // // // // //     if (current === result) return power;
// // // // // //   }
// // // // // //   power = -1;
// // // // // //   current = 1 / base;
// // // // // //   while (power > -20) {
// // // // // //     if (Math.abs(current - result) < 1e-10) return power;
// // // // // //     current /= base;
// // // // // //     power--;
// // // // // //   }
// // // // // //   return null;
// // // // // // }

// // // // // // function parseLinearExponent(node) {
// // // // // //   if (node.type === 'VARIABLE') {
// // // // // //     return { variable: node.name, coefficient: 1, constant: 0 };
// // // // // //   }
// // // // // //   if (node.type === 'MULTIPLY') {
// // // // // //     const lv = evaluateConstant(node.left), rv = evaluateConstant(node.right);
// // // // // //     if (lv !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: lv, constant: 0 };
// // // // // //     if (rv !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rv, constant: 0 };
// // // // // //   }
// // // // // //   if (node.type === 'ADD' || node.type === 'SUBTRACT') {
// // // // // //     const leftLinear = parseLinearExponent(node.left);
// // // // // //     const rightConst = evaluateConstant(node.right);
// // // // // //     if (leftLinear && rightConst !== null) {
// // // // // //       return {
// // // // // //         variable: leftLinear.variable,
// // // // // //         coefficient: leftLinear.coefficient,
// // // // // //         constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst)
// // // // // //       };
// // // // // //     }
// // // // // //     const rightLinear = parseLinearExponent(node.right);
// // // // // //     const leftConst = evaluateConstant(node.left);
// // // // // //     if (rightLinear && leftConst !== null && node.type === 'ADD') {
// // // // // //       return {
// // // // // //         variable: rightLinear.variable,
// // // // // //         coefficient: rightLinear.coefficient,
// // // // // //         constant: rightLinear.constant + leftConst
// // // // // //       };
// // // // // //     }
// // // // // //   }
// // // // // //   return null;
// // // // // // }

// // // // // // /* =====================================================
// // // // // //    AST TO MATH DISPLAY
// // // // // //    ===================================================== */

// // // // // // function astToMathDisplay(node, key = 'root', darkMode = false) {
// // // // // //   if (!node) return null;
  
// // // // // //   const styles = getMathStyles(darkMode);
  
// // // // // //   const wrap = (n, k) => {
// // // // // //     if (n.type === 'ADD' || n.type === 'SUBTRACT') {
// // // // // //       return <span key={k}>({astToMathDisplay(n, k, darkMode)})</span>;
// // // // // //     }
// // // // // //     return astToMathDisplay(n, k, darkMode);
// // // // // //   };
  
// // // // // //   switch (node.type) {
// // // // // //     case 'NUMBER': return <span key={key} style={styles.number}>{formatNumber(node.value)}</span>;
// // // // // //     case 'VARIABLE': return <span key={key} style={styles.variable}>{node.name}</span>;
// // // // // //     case 'E': return <span key={key} style={styles.euler}>e</span>;
// // // // // //     case 'NEGATE': return <span key={key}>−{astToMathDisplay(node.operand, `${key}-neg`, darkMode)}</span>;
// // // // // //     case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={styles.op}> + </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // // // // //     case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={styles.op}> − </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // // // // //     case 'MULTIPLY': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={styles.op}> · </span>{wrap(node.right, `${key}-r`)}</span>;
// // // // // //     case 'DIVIDE': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={styles.op}> / </span>{wrap(node.right, `${key}-r`)}</span>;
// // // // // //     case 'POWER': return <span key={key} style={styles.power}>{wrap(node.base, `${key}-base`)}<sup style={styles.sup}>{astToMathDisplay(node.exponent, `${key}-exp`, darkMode)}</sup></span>;
// // // // // //     case 'EQUATION': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={styles.equals}> = </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // // // // //     default: return null;
// // // // // //   }
// // // // // // }

// // // // // // const getMathStyles = (darkMode) => ({
// // // // // //   number: { color: darkMode ? '#e2e8f0' : '#1e3a5f' },
// // // // // //   variable: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '500' },
// // // // // //   euler: { fontStyle: 'italic', color: darkMode ? '#22d3ee' : '#0891b2' },
// // // // // //   op: { color: darkMode ? '#94a3b8' : '#64748b', margin: '0 2px' },
// // // // // //   equals: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
// // // // // //   power: { display: 'inline-flex', alignItems: 'baseline' },
// // // // // //   sup: { fontSize: '0.7em', color: darkMode ? '#60a5fa' : '#3b82f6', marginLeft: '1px' },
// // // // // // });

// // // // // // /* =====================================================
// // // // // //    SOLVER
// // // // // //    ===================================================== */

// // // // // // function solveExponentialEquation(ast) {
// // // // // //   const steps = [];
// // // // // //   let graphData = null;
  
// // // // // //   if (ast.type !== 'EQUATION') {
// // // // // //     throw new Error('Input must be an equation (use = sign)');
// // // // // //   }
  
// // // // // //   let { left, right } = ast;
// // // // // //   const leftHasVar = hasVariableInExponent(left);
// // // // // //   const rightHasVar = hasVariableInExponent(right);
  
// // // // // //   let expSide, constSide;
  
// // // // // //   if (leftHasVar && !rightHasVar) {
// // // // // //     expSide = left;
// // // // // //     constSide = right;
// // // // // //   } else if (rightHasVar && !leftHasVar) {
// // // // // //     expSide = right;
// // // // // //     constSide = left;
// // // // // //     steps.push({
// // // // // //       rule: 'Rearrange Equation',
// // // // // //       description: 'Move the exponential term to the left side for clarity.',
// // // // // //       before: ast,
// // // // // //       after: { type: 'EQUATION', left: expSide, right: constSide }
// // // // // //     });
// // // // // //   } else if (leftHasVar && rightHasVar) {
// // // // // //     throw new Error('Equations with exponentials on both sides require logarithms on both sides. Coming soon!');
// // // // // //   } else {
// // // // // //     throw new Error('No variable found in any exponent');
// // // // // //   }
  
// // // // // //   const constValue = evaluateConstant(constSide);
// // // // // //   if (constValue !== null && constSide.type !== 'NUMBER') {
// // // // // //     const newConstSide = { type: 'NUMBER', value: constValue };
// // // // // //     steps.push({
// // // // // //       rule: 'Evaluate Constant',
// // // // // //       description: 'Simplify the right side to a single number.',
// // // // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // //       after: { type: 'EQUATION', left: expSide, right: newConstSide }
// // // // // //     });
// // // // // //     constSide = newConstSide;
// // // // // //   }
  
// // // // // //   // Handle coefficient
// // // // // //   if (expSide.type === 'MULTIPLY') {
// // // // // //     const { coefficient, exponential } = extractCoefficient(expSide);
// // // // // //     if (coefficient && exponential) {
// // // // // //       const coeffValue = evaluateConstant(coefficient);
// // // // // //       const constVal = evaluateConstant(constSide);
// // // // // //       if (coeffValue !== null && constVal !== null) {
// // // // // //         const newConst = { type: 'NUMBER', value: constVal / coeffValue };
// // // // // //         steps.push({
// // // // // //           rule: 'Isolate Exponential Term',
// // // // // //           description: `Divide both sides by ${formatNumber(coeffValue)} to isolate the exponential.`,
// // // // // //           before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // //           after: { type: 'EQUATION', left: exponential, right: newConst }
// // // // // //         });
// // // // // //         expSide = exponential;
// // // // // //         constSide = newConst;
// // // // // //       }
// // // // // //     }
// // // // // //   }
  
// // // // // //   // Handle additive constant
// // // // // //   if (expSide.type === 'ADD' || expSide.type === 'SUBTRACT') {
// // // // // //     const { exponential, constant, isAdd } = extractAdditiveConstant(expSide);
// // // // // //     if (exponential && constant !== null) {
// // // // // //       const constVal = evaluateConstant(constSide);
// // // // // //       if (constVal !== null) {
// // // // // //         const newConstVal = isAdd ? constVal - constant : constVal + constant;
// // // // // //         const newConst = { type: 'NUMBER', value: newConstVal };
// // // // // //         const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
// // // // // //         steps.push({
// // // // // //           rule: 'Isolate Exponential Term',
// // // // // //           description: `${action} both sides.`,
// // // // // //           before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // //           after: { type: 'EQUATION', left: exponential, right: newConst }
// // // // // //         });
// // // // // //         expSide = exponential;
// // // // // //         constSide = newConst;
// // // // // //       }
// // // // // //     }
// // // // // //   }
  
// // // // // //   if (expSide.type !== 'POWER') {
// // // // // //     throw new Error('Could not isolate exponential term');
// // // // // //   }
  
// // // // // //   const base = expSide.base;
// // // // // //   const exponent = expSide.exponent;
// // // // // //   const resultValue = evaluateConstant(constSide);
  
// // // // // //   if (resultValue === null) throw new Error('Right side must evaluate to a number');
// // // // // //   if (resultValue <= 0) throw new Error('Exponential equations cannot equal zero or negative numbers');
  
// // // // // //   const isNaturalBase = base.type === 'E';
// // // // // //   const baseValue = isNaturalBase ? Math.E : evaluateConstant(base);
  
// // // // // //   if (baseValue === null) throw new Error('Base must be a constant');
// // // // // //   if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');
  
// // // // // //   let perfectPower = null;
// // // // // //   if (!isNaturalBase && Number.isInteger(baseValue) && Number.isInteger(resultValue)) {
// // // // // //     perfectPower = findPerfectPower(baseValue, resultValue);
// // // // // //   }
  
// // // // // //   // Simple variable exponent
// // // // // //   if (exponent.type === 'VARIABLE') {
// // // // // //     const varName = exponent.name;
    
// // // // // //     if (perfectPower !== null) {
// // // // // //       steps.push({
// // // // // //         rule: 'Recognize Perfect Power',
// // // // // //         description: `${formatNumber(resultValue)} = ${formatNumber(baseValue)} raised to power ${perfectPower}.`,
// // // // // //         before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // //         after: { type: 'EQUATION', left: expSide, right: { type: 'POWER', base: { type: 'NUMBER', value: baseValue }, exponent: { type: 'NUMBER', value: perfectPower } } }
// // // // // //       });
// // // // // //       steps.push({
// // // // // //         rule: 'Match Bases',
// // // // // //         description: `Same base (${formatNumber(baseValue)}) means exponents are equal.`,
// // // // // //         before: null,
// // // // // //         after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: perfectPower } }
// // // // // //       });
      
// // // // // //       graphData = {
// // // // // //         type: 'exponential',
// // // // // //         base: baseValue,
// // // // // //         solution: { x: perfectPower, y: resultValue }
// // // // // //       };
      
// // // // // //       return { steps, solution: { variable: varName, value: perfectPower, exact: true }, graphData };
// // // // // //     }
    
// // // // // //     // Use logarithms
// // // // // //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
// // // // // //     steps.push({
// // // // // //       rule: 'Apply Logarithm',
// // // // // //       description: `Take ${logName} of both sides.`,
// // // // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // //       after: null
// // // // // //     });
    
// // // // // //     steps.push({
// // // // // //       rule: 'Simplify',
// // // // // //       description: isNaturalBase ? 'ln(e\u02E3) = x' : 'log base b of b\u02E3 = x',
// // // // // //       before: null,
// // // // // //       after: null
// // // // // //     });
    
// // // // // //     const solution = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
    
// // // // // //     steps.push({
// // // // // //       rule: 'Calculate',
// // // // // //       description: isNaturalBase 
// // // // // //         ? `ln(${formatNumber(resultValue)}) \u2248 ${formatNumber(solution)}`
// // // // // //         : `log(${formatNumber(resultValue)}) \u00F7 log(${formatNumber(baseValue)}) \u2248 ${formatNumber(solution)}`,
// // // // // //       before: null,
// // // // // //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: solution } }
// // // // // //     });
    
// // // // // //     graphData = {
// // // // // //       type: 'exponential',
// // // // // //       base: baseValue,
// // // // // //       solution: { x: solution, y: resultValue }
// // // // // //     };
    
// // // // // //     return { steps, solution: { variable: varName, value: solution, exact: false }, graphData };
// // // // // //   }
  
// // // // // //   // Linear exponent
// // // // // //   const linearInfo = parseLinearExponent(exponent);
// // // // // //   if (linearInfo) {
// // // // // //     const { variable, coefficient, constant } = linearInfo;
// // // // // //     const logResult = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
// // // // // //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
    
// // // // // //     steps.push({
// // // // // //       rule: 'Apply Logarithm',
// // // // // //       description: `Take ${logName} of both sides to bring down the exponent.`,
// // // // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // // //       after: null
// // // // // //     });
    
// // // // // //     const expStr = `${coefficient === 1 ? '' : coefficient}${variable}${constant >= 0 ? ' + ' + constant : ' \u2212 ' + Math.abs(constant)}`;
// // // // // //     steps.push({
// // // // // //       rule: 'Linear Equation',
// // // // // //       description: `Now solve: ${expStr} = ${formatNumber(logResult)}`,
// // // // // //       before: null,
// // // // // //       after: null
// // // // // //     });
    
// // // // // //     const subtracted = logResult - constant;
// // // // // //     const solution = subtracted / coefficient;
    
// // // // // //     steps.push({
// // // // // //       rule: 'Solve for Variable',
// // // // // //       description: coefficient !== 1 
// // // // // //         ? `Subtract ${formatNumber(constant)}, then divide by ${coefficient}.`
// // // // // //         : `Subtract ${formatNumber(constant)} from both sides.`,
// // // // // //       before: null,
// // // // // //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
// // // // // //     });
    
// // // // // //     graphData = {
// // // // // //       type: 'exponential',
// // // // // //       base: baseValue,
// // // // // //       solution: { x: solution, y: resultValue }
// // // // // //     };
    
// // // // // //     return { steps, solution: { variable, value: solution, exact: false }, graphData };
// // // // // //   }
  
// // // // // //   throw new Error('Exponent form not supported');
// // // // // // }

// // // // // // /* =====================================================
// // // // // //    ENGINE COMPONENT (Standalone Solver)
// // // // // //    ===================================================== */

// // // // // // export const ExponentialSolverEngine = forwardRef(({ 
// // // // // //   compact = false,
// // // // // //   style = {},
// // // // // //   darkMode = false,
// // // // // //   onResultChange = null
// // // // // // }, ref) => {
// // // // // //   const [expression, setExpression] = useState([]);
// // // // // //   const [result, setResult] = useState(null);
// // // // // //   const [error, setError] = useState(null);

// // // // // //   const variables = ['x', 'y', 'n'];
// // // // // //   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
// // // // // //   const operators = ['^', '×', '÷', '+', '-', '='];

// // // // // //   useImperativeHandle(ref, () => ({
// // // // // //     loadEquation: (eqString) => {
// // // // // //       setExpression(eqString.split(''));
// // // // // //       setResult(null);
// // // // // //       setError(null);
// // // // // //       if (onResultChange) onResultChange(null);
// // // // // //     },
// // // // // //     clear: () => {
// // // // // //       setExpression([]);
// // // // // //       setResult(null);
// // // // // //       setError(null);
// // // // // //       if (onResultChange) onResultChange(null);
// // // // // //     },
// // // // // //     getExpression: () => expression.join(''),
// // // // // //     getResult: () => result
// // // // // //   }));

// // // // // //   const addToExpression = (item) => {
// // // // // //     setExpression([...expression, item]);
// // // // // //     setResult(null);
// // // // // //     setError(null);
// // // // // //   };

// // // // // //   const backspace = () => {
// // // // // //     setExpression(expression.slice(0, -1));
// // // // // //     setResult(null);
// // // // // //     setError(null);
// // // // // //   };

// // // // // //   const clearAll = () => {
// // // // // //     setExpression([]);
// // // // // //     setResult(null);
// // // // // //     setError(null);
// // // // // //   };

// // // // // //   const renderExpressionDisplay = (expr) => {
// // // // // //     if (!expr || expr.length === 0) {
// // // // // //       return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
// // // // // //     }
    
// // // // // //     const elements = [];
// // // // // //     let i = 0;
// // // // // //     const styles = getEngineStyles(darkMode);
    
// // // // // //     while (i < expr.length) {
// // // // // //       const current = expr[i];
// // // // // //       const next = expr[i + 1];
      
// // // // // //       if (next === '^') {
// // // // // //         let expChars = [];
// // // // // //         let j = i + 2;
        
// // // // // //         if (expr[j] === '(') {
// // // // // //           let depth = 1;
// // // // // //           expChars.push('(');
// // // // // //           j++;
// // // // // //           while (j < expr.length && depth > 0) {
// // // // // //             if (expr[j] === '(') depth++;
// // // // // //             if (expr[j] === ')') depth--;
// // // // // //             expChars.push(expr[j]);
// // // // // //             j++;
// // // // // //           }
// // // // // //         } else {
// // // // // //           while (j < expr.length && /[0-9a-zA-Z.+\-×]/.test(expr[j]) && expr[j] !== '=') {
// // // // // //             expChars.push(expr[j]);
// // // // // //             j++;
// // // // // //           }
// // // // // //         }
        
// // // // // //         if (expChars.length > 0) {
// // // // // //           elements.push(
// // // // // //             <span key={i} style={styles.displayTerm}>
// // // // // //               <span style={current === 'e' ? styles.displayEuler : undefined}>{current}</span>
// // // // // //               <sup style={styles.displaySup}>{expChars.join('')}</sup>
// // // // // //             </span>
// // // // // //           );
// // // // // //           i = j;
// // // // // //           continue;
// // // // // //         }
// // // // // //       }
      
// // // // // //       const charMap = {
// // // // // //         '×': { style: styles.displayOp, text: ' \u00B7 ' },
// // // // // //         '÷': { style: styles.displayOp, text: ' / ' },
// // // // // //         '+': { style: styles.displayOp, text: ' + ' },
// // // // // //         '-': { style: styles.displayOp, text: ' \u2212 ' },
// // // // // //         '=': { style: styles.displayEquals, text: ' = ' },
// // // // // //         '^': { style: styles.displayOp, text: '^' },
// // // // // //         'e': { style: styles.displayEuler, text: 'e' },
// // // // // //       };
      
// // // // // //       if (charMap[current]) {
// // // // // //         elements.push(<span key={i} style={charMap[current].style}>{charMap[current].text}</span>);
// // // // // //       } else {
// // // // // //         elements.push(<span key={i}>{current}</span>);
// // // // // //       }
// // // // // //       i++;
// // // // // //     }
    
// // // // // //     return elements;
// // // // // //   };

// // // // // //   const solve = () => {
// // // // // //     try {
// // // // // //       const exprString = expression.join('');
// // // // // //       const tokens = tokenize(exprString);
// // // // // //       const ast = parse(tokens);
// // // // // //       const solveResult = solveExponentialEquation(ast);
      
// // // // // //       setResult(solveResult);
// // // // // //       setError(null);
// // // // // //       if (onResultChange) onResultChange(solveResult);
// // // // // //     } catch (e) {
// // // // // //       setError(e.message);
// // // // // //       setResult(null);
// // // // // //       if (onResultChange) onResultChange(null);
// // // // // //     }
// // // // // //   };

// // // // // //   const p = compact ? 0.85 : 1;
// // // // // //   const styles = getEngineStyles(darkMode);

// // // // // //   return (
// // // // // //     <div style={{ ...styles.container, ...style }}>
// // // // // //       <div style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px` }}>
// // // // // //         {renderExpressionDisplay(expression)}
// // // // // //       </div>
      
// // // // // //       {error && (
// // // // // //         <div style={styles.error}>{error}</div>
// // // // // //       )}
      
// // // // // //       <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
// // // // // //         <div style={styles.row}>
// // // // // //           <span style={styles.label}>Var</span>
// // // // // //           <div style={styles.btnGroup}>
// // // // // //             {variables.map((v) => (
// // // // // //               <button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => addToExpression(v)}>{v}</button>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div style={styles.row}>
// // // // // //           <span style={styles.label}>Num</span>
// // // // // //           <div style={styles.btnGroup}>
// // // // // //             {numbers.map((n) => (
// // // // // //               <button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => addToExpression(n)}>{n}</button>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div style={styles.row}>
// // // // // //           <span style={styles.label}>Op</span>
// // // // // //           <div style={styles.btnGroup}>
// // // // // //             {operators.map((op) => (
// // // // // //               <button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => addToExpression(op)}>
// // // // // //                 {op === '^' ? 'x\u207F' : op}
// // // // // //               </button>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div style={styles.row}>
// // // // // //           <span style={styles.label}></span>
// // // // // //           <div style={styles.btnGroup}>
// // // // // //             <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => addToExpression('e')}>e</button>
// // // // // //             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => addToExpression('(')}>(</button>
// // // // // //             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => addToExpression(')')}>)</button>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div style={styles.actions}>
// // // // // //           <button style={{ ...styles.btnAction, ...styles.btnClear }} onClick={clearAll}>Clear</button>
// // // // // //           <button style={{ ...styles.btnAction, ...styles.btnBack }} onClick={backspace}>{'\u232B'}</button>
// // // // // //           <button 
// // // // // //             style={{ ...styles.btnAction, ...styles.btnSolve, ...(expression.length === 0 ? styles.btnDisabled : {}) }} 
// // // // // //             onClick={solve}
// // // // // //             disabled={expression.length === 0}
// // // // // //           >
// // // // // //             Solve
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
      
// // // // // //       {result && result.solution && (
// // // // // //         <div style={styles.solution}>
// // // // // //           <span style={styles.solVar}>{result.solution.variable}</span>
// // // // // //           <span style={styles.solEq}> = </span>
// // // // // //           <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
// // // // // //           {!result.solution.exact && <span style={styles.solApprox}> {'\u2248'}</span>}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // });

// // // // // // ExponentialSolverEngine.displayName = 'ExponentialSolverEngine';

// // // // // // const getEngineStyles = (darkMode) => ({
// // // // // //   container: {
// // // // // //     background: darkMode ? '#1e293b' : '#fff',
// // // // // //     borderRadius: '16px',
// // // // // //     padding: '20px',
// // // // // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // // // //   },
// // // // // //   display: {
// // // // // //     background: darkMode 
// // // // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // // //     borderRadius: '12px',
// // // // // //     padding: '18px 22px',
// // // // // //     minHeight: '54px',
// // // // // //     marginBottom: '16px',
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     fontSize: '1.4rem',
// // // // // //     color: '#fff',
// // // // // //     fontWeight: '500',
// // // // // //   },
// // // // // //   placeholder: {
// // // // // //     color: 'rgba(255,255,255,0.5)',
// // // // // //     fontStyle: 'italic',
// // // // // //     fontSize: '0.95rem',
// // // // // //   },
// // // // // //   displayTerm: { display: 'inline-flex', alignItems: 'baseline' },
// // // // // //   displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px' },
// // // // // //   displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
// // // // // //   displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
// // // // // //   displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
// // // // // //   error: {
// // // // // //     background: darkMode ? '#451a1a' : '#fef2f2',
// // // // // //     border: darkMode ? '1px solid #7f1d1d' : '1px solid #fecaca',
// // // // // //     borderRadius: '8px',
// // // // // //     padding: '10px 14px',
// // // // // //     marginBottom: '12px',
// // // // // //     color: darkMode ? '#fca5a5' : '#dc2626',
// // // // // //     fontSize: '0.85rem',
// // // // // //   },
// // // // // //   builder: {
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     gap: '10px',
// // // // // //   },
// // // // // //   row: {
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     gap: '10px',
// // // // // //   },
// // // // // //   label: {
// // // // // //     fontSize: '0.65rem',
// // // // // //     textTransform: 'uppercase',
// // // // // //     letterSpacing: '0.5px',
// // // // // //     color: darkMode ? '#64748b' : '#94a3b8',
// // // // // //     width: '28px',
// // // // // //     flexShrink: 0,
// // // // // //     fontWeight: '600',
// // // // // //   },
// // // // // //   btnGroup: {
// // // // // //     display: 'flex',
// // // // // //     flexWrap: 'wrap',
// // // // // //     gap: '6px',
// // // // // //   },
// // // // // //   btn: {
// // // // // //     fontSize: '0.95rem',
// // // // // //     padding: '8px 12px',
// // // // // //     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
// // // // // //     background: darkMode ? '#334155' : '#f8fafc',
// // // // // //     color: darkMode ? '#e2e8f0' : '#334155',
// // // // // //     cursor: 'pointer',
// // // // // //     borderRadius: '8px',
// // // // // //     minWidth: '36px',
// // // // // //     fontFamily: 'inherit',
// // // // // //     fontWeight: '500',
// // // // // //     transition: 'all 0.15s',
// // // // // //   },
// // // // // //   btnVar: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600' },
// // // // // //   btnNum: { color: darkMode ? '#f1f5f9' : '#1e293b' },
// // // // // //   btnOp: { color: darkMode ? '#cbd5e1' : '#64748b', fontWeight: '600' },
// // // // // //   btnSpecial: { color: darkMode ? '#22d3ee' : '#0891b2', fontWeight: '600', fontStyle: 'italic' },
// // // // // //   btnBracket: { fontSize: '1.1rem', color: darkMode ? '#94a3b8' : '#64748b' },
// // // // // //   actions: {
// // // // // //     display: 'flex',
// // // // // //     gap: '8px',
// // // // // //     marginTop: '6px',
// // // // // //     paddingTop: '14px',
// // // // // //     borderTop: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
// // // // // //   },
// // // // // //   btnAction: {
// // // // // //     fontSize: '0.85rem',
// // // // // //     fontWeight: '600',
// // // // // //     padding: '12px 18px',
// // // // // //     border: 'none',
// // // // // //     cursor: 'pointer',
// // // // // //     borderRadius: '8px',
// // // // // //     fontFamily: 'inherit',
// // // // // //     transition: 'all 0.15s',
// // // // // //   },
// // // // // //   btnClear: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
// // // // // //   btnBack: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
// // // // // //   btnSolve: {
// // // // // //     background: darkMode 
// // // // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // // //     color: '#fff',
// // // // // //     marginLeft: 'auto',
// // // // // //     padding: '12px 24px',
// // // // // //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
// // // // // //   },
// // // // // //   btnDisabled: { background: darkMode ? '#475569' : '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
// // // // // //   solution: {
// // // // // //     marginTop: '16px',
// // // // // //     padding: '14px 18px',
// // // // // //     background: darkMode 
// // // // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // // //     borderRadius: '10px',
// // // // // //     textAlign: 'center',
// // // // // //     fontSize: '1.3rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#fff',
// // // // // //   },
// // // // // //   solVar: { fontStyle: 'italic' },
// // // // // //   solEq: { opacity: 0.8, margin: '0 6px' },
// // // // // //   solNum: { color: '#fbbf24' },
// // // // // //   solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
// // // // // // });

// // // // // // /* =====================================================
// // // // // //    EQUATION FORM GENERATORS
// // // // // //    ===================================================== */

// // // // // // const equationForms = [
// // // // // //   {
// // // // // //     id: 'simple',
// // // // // //     name: 'Simple',
// // // // // //     formula: 'b\u02E3 = c',
// // // // // //     generate: (nice) => {
// // // // // //       if (nice) {
// // // // // //         const bases = [2, 3, 5, 10];
// // // // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // // // //         const exp = Math.floor(Math.random() * 5) + 1;
// // // // // //         return `${base}^x=${Math.pow(base, exp)}`;
// // // // // //       }
// // // // // //       return `${Math.floor(Math.random() * 8) + 2}^x=${Math.floor(Math.random() * 900) + 10}`;
// // // // // //     }
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'coefficient',
// // // // // //     name: 'With Coefficient',
// // // // // //     formula: 'a \u00B7 b\u02E3 = c',
// // // // // //     generate: (nice) => {
// // // // // //       if (nice) {
// // // // // //         const bases = [2, 3, 5];
// // // // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // // // //         const exp = Math.floor(Math.random() * 4) + 1;
// // // // // //         const coeff = Math.floor(Math.random() * 5) + 2;
// // // // // //         return `${coeff}\u00D7${base}^x=${coeff * Math.pow(base, exp)}`;
// // // // // //       }
// // // // // //       const base = Math.floor(Math.random() * 7) + 2;
// // // // // //       const coeff = Math.floor(Math.random() * 9) + 2;
// // // // // //       return `${coeff}\u00D7${base}^x=${Math.floor(Math.random() * 500) + 20}`;
// // // // // //     }
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'linear-exp',
// // // // // //     name: 'Linear Exponent',
// // // // // //     formula: 'b\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
// // // // // //     generate: (nice) => {
// // // // // //       const bases = [2, 3, 5];
// // // // // //       const base = bases[Math.floor(Math.random() * bases.length)];
// // // // // //       const m = Math.floor(Math.random() * 3) + 1;
// // // // // //       const n = Math.floor(Math.random() * 5) - 2;
// // // // // //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// // // // // //       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
// // // // // //       if (nice) {
// // // // // //         const x = Math.floor(Math.random() * 4) + 1;
// // // // // //         return `${base}^(${mStr}${nStr})=${Math.pow(base, m * x + n)}`;
// // // // // //       }
// // // // // //       return `${base}^(${mStr}${nStr})=${Math.floor(Math.random() * 200) + 5}`;
// // // // // //     }
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'same-base',
// // // // // //     name: 'Same Base',
// // // // // //     formula: 'b\u1DA0\u207D\u02E3\u207E = b\u207F',
// // // // // //     generate: () => {
// // // // // //       const bases = [2, 3, 5];
// // // // // //       const base = bases[Math.floor(Math.random() * bases.length)];
// // // // // //       const a = Math.floor(Math.random() * 3) + 1;
// // // // // //       const b = Math.floor(Math.random() * 5);
// // // // // //       const c = Math.floor(Math.random() * 6) + 1;
// // // // // //       const aStr = a === 1 ? 'x' : `${a}\u00D7x`;
// // // // // //       const bStr = b > 0 ? `+${b}` : '';
// // // // // //       return `${base}^(${aStr}${bStr})=${base}^${c}`;
// // // // // //     }
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'convertible',
// // // // // //     name: 'Convertible',
// // // // // //     formula: 'a\u02E3 = b',
// // // // // //     generate: () => {
// // // // // //       const families = [
// // // // // //         { bases: [2, 4, 8, 16, 32], root: 2 },
// // // // // //         { bases: [3, 9, 27, 81], root: 3 },
// // // // // //         { bases: [5, 25, 125], root: 5 }
// // // // // //       ];
// // // // // //       const family = families[Math.floor(Math.random() * families.length)];
// // // // // //       const base = family.bases[Math.floor(Math.random() * (family.bases.length - 1))];
// // // // // //       const result = family.bases[Math.floor(Math.random() * family.bases.length)];
// // // // // //       return `${base}^x=${result}`;
// // // // // //     }
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'with-constant',
// // // // // //     name: 'With Constant',
// // // // // //     formula: 'b\u02E3 + c = d',
// // // // // //     generate: (nice) => {
// // // // // //       if (nice) {
// // // // // //         const bases = [2, 3, 5];
// // // // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // // // //         const exp = Math.floor(Math.random() * 4) + 1;
// // // // // //         const c = Math.floor(Math.random() * 10) + 1;
// // // // // //         return `${base}^x+${c}=${Math.pow(base, exp) + c}`;
// // // // // //       }
// // // // // //       const base = Math.floor(Math.random() * 7) + 2;
// // // // // //       const c = Math.floor(Math.random() * 20) + 1;
// // // // // //       return `${base}^x+${c}=${Math.floor(Math.random() * 200) + c + 1}`;
// // // // // //     }
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'natural',
// // // // // //     name: 'Natural Base',
// // // // // //     formula: 'e\u02E3 = c',
// // // // // //     generate: (nice) => {
// // // // // //       if (nice) {
// // // // // //         const vals = [1, 2, 3, 5, 7, 10, 20, 50, 100];
// // // // // //         return `e^x=${vals[Math.floor(Math.random() * vals.length)]}`;
// // // // // //       }
// // // // // //       return `e^x=${(Math.random() * 100 + 1).toFixed(2)}`;
// // // // // //     }
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'natural-linear',
// // // // // //     name: 'Natural Linear',
// // // // // //     formula: 'e\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
// // // // // //     generate: (nice) => {
// // // // // //       const m = Math.floor(Math.random() * 3) + 1;
// // // // // //       const n = Math.floor(Math.random() * 5) - 2;
// // // // // //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// // // // // //       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
// // // // // //       if (nice) {
// // // // // //         const vals = [1, 2, 5, 10, 20, 50];
// // // // // //         return `e^(${mStr}${nStr})=${vals[Math.floor(Math.random() * vals.length)]}`;
// // // // // //       }
// // // // // //       return `e^(${mStr}${nStr})=${(Math.random() * 50 + 1).toFixed(2)}`;
// // // // // //     }
// // // // // //   }
// // // // // // ];

// // // // // // /* =====================================================
// // // // // //    WRAPPER COMPONENT (Full Educational Version)
// // // // // //    ===================================================== */

// // // // // // const ExponentialEquationSolver = () => {
// // // // // //   const engineRef = React.useRef(null);
// // // // // //   const [solveResult, setSolveResult] = useState(null);
// // // // // //   const [selectedForm, setSelectedForm] = useState(null);
// // // // // //   const [darkMode, setDarkMode] = useState(false);
// // // // // //   const [examplesOpen, setExamplesOpen] = useState(false);

// // // // // //   const handleFormClick = (form) => {
// // // // // //     const isNice = Math.random() < 0.8;
// // // // // //     const equation = form.generate(isNice);
// // // // // //     setSelectedForm(form.id);
// // // // // //     setSolveResult(null);
// // // // // //     if (engineRef.current) {
// // // // // //       engineRef.current.loadEquation(equation);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleResultChange = (result) => {
// // // // // //     setSolveResult(result);
// // // // // //   };

// // // // // //   const toggleDarkMode = () => {
// // // // // //     setDarkMode(!darkMode);
// // // // // //   };

// // // // // //   const styles = getWrapperStyles(darkMode);

// // // // // //   const renderStepContent = (step, index) => {
// // // // // //     if (!step.before && !step.after) return null;
// // // // // //     return (
// // // // // //       <div>
// // // // // //         {step.before && (
// // // // // //           <div style={styles.stepMath}>
// // // // // //             {astToMathDisplay(step.before, `before-${index}`, darkMode)}
// // // // // //           </div>
// // // // // //         )}
// // // // // //         {step.after && (
// // // // // //           <div style={styles.stepTransform}>
// // // // // //             <span style={styles.arrow}>{'\u27F9'}</span>
// // // // // //             <div style={styles.stepMath}>
// // // // // //               {astToMathDisplay(step.after, `after-${index}`, darkMode)}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     );
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={styles.container}>
// // // // // //       <style>{THEME_CSS}</style>
// // // // // //       <div style={styles.inner}>
        
// // // // // //         {/* Header */}
// // // // // //         <header style={styles.header}>
// // // // // //           <div style={styles.headerTop}>
// // // // // //             <div style={styles.headerLeft}>
// // // // // //               <div style={styles.iconWrap}>
// // // // // //                 <span style={styles.icon}>x</span>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <h1 style={styles.title}>Exponential Equation Solver</h1>
// // // // // //                 <p style={styles.subtitle}>Solve equations with variables in exponents</p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <button style={styles.themeToggle} onClick={toggleDarkMode}>
// // // // // //               {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </header>

// // // // // //         {/* Main Content - Side by Side */}
// // // // // //         <div style={styles.main}>
          
// // // // // //           {/* Left Column - Engine + Forms */}
// // // // // //           <div style={styles.leftCol}>
            
// // // // // //             {/* Engine */}
// // // // // //             <ExponentialSolverEngine 
// // // // // //               ref={engineRef} 
// // // // // //               onResultChange={handleResultChange}
// // // // // //               darkMode={darkMode}
// // // // // //               compact={true}
// // // // // //             />
            
// // // // // //             {/* Equation Forms - Collapsible */}
// // // // // //             <div style={styles.formsSection}>
// // // // // //               <button 
// // // // // //                 style={styles.accordionHeader}
// // // // // //                 onClick={() => setExamplesOpen(!examplesOpen)}
// // // // // //               >
// // // // // //                 <span style={styles.sectionTitle}>Try an Example</span>
// // // // // //                 <span style={styles.chevron}>{examplesOpen ? '\u25B2' : '\u25BC'}</span>
// // // // // //               </button>
              
// // // // // //               {examplesOpen && (
// // // // // //                 <div style={styles.accordionContent}>
// // // // // //                   <p style={styles.formsHint}>Click any type to generate a random equation. Click again for a new one!</p>
// // // // // //                   <div style={styles.formsGrid}>
// // // // // //                     {equationForms.map((form) => (
// // // // // //                       <button
// // // // // //                         key={form.id}
// // // // // //                         style={{
// // // // // //                           ...styles.formCard,
// // // // // //                           ...(selectedForm === form.id ? styles.formCardSelected : {})
// // // // // //                         }}
// // // // // //                         onClick={() => handleFormClick(form)}
// // // // // //                       >
// // // // // //                         <div style={styles.formName}>{form.name}</div>
// // // // // //                         <div style={styles.formFormula}>{form.formula}</div>
// // // // // //                       </button>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           {/* Right Column - SolutionPanel */}
// // // // // //           <div style={styles.rightCol}>
// // // // // //             <SolutionPanel
// // // // // //               steps={solveResult?.steps || []}
// // // // // //               graphData={solveResult?.graphData || null}
// // // // // //               darkMode={darkMode}
// // // // // //               placeholder="Select an equation type or enter your own equation, then click Solve to see the step-by-step solution."
// // // // // //               stepsTitle="Solution Steps"
// // // // // //               renderStepContent={renderStepContent}
// // // // // //               stepCardClass={() => ''}
// // // // // //             />
            
// // // // // //             {/* Final Answer - shown after steps */}
// // // // // //             {solveResult && solveResult.solution && (
// // // // // //               <div style={styles.finalAnswer}>
// // // // // //                 <div style={styles.answerLabel}>Answer</div>
// // // // // //                 <div style={styles.answerValue}>
// // // // // //                   <span style={styles.answerVar}>{solveResult.solution.variable}</span>
// // // // // //                   <span style={styles.answerEq}> = </span>
// // // // // //                   <span style={styles.answerNum}>{formatNumber(solveResult.solution.value)}</span>
// // // // // //                 </div>
// // // // // //                 <div style={styles.answerNote}>
// // // // // //                   {solveResult.solution.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const getWrapperStyles = (darkMode) => ({
// // // // // //   container: {
// // // // // //     minHeight: '100vh',
// // // // // //     background: darkMode 
// // // // // //       ? '#0f172a'
// // // // // //       : 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
// // // // // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // // // //     padding: '30px 20px',
// // // // // //   },
// // // // // //   inner: {
// // // // // //     maxWidth: '1100px',
// // // // // //     margin: '0 auto',
// // // // // //   },
// // // // // //   header: {
// // // // // //     marginBottom: '24px',
// // // // // //   },
// // // // // //   headerTop: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   headerLeft: {
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     gap: '16px',
// // // // // //   },
// // // // // //   iconWrap: {
// // // // // //     width: '50px',
// // // // // //     height: '50px',
// // // // // //     background: darkMode 
// // // // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // // //     borderRadius: '14px',
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     justifyContent: 'center',
// // // // // //     boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
// // // // // //   },
// // // // // //   icon: {
// // // // // //     color: '#fff',
// // // // // //     fontSize: '24px',
// // // // // //     fontStyle: 'italic',
// // // // // //     fontWeight: '700',
// // // // // //   },
// // // // // //   title: {
// // // // // //     fontSize: '1.7rem',
// // // // // //     fontWeight: '700',
// // // // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // // // //     margin: '0 0 4px 0',
// // // // // //   },
// // // // // //   subtitle: {
// // // // // //     fontSize: '0.95rem',
// // // // // //     color: darkMode ? '#94a3b8' : '#64748b',
// // // // // //     margin: 0,
// // // // // //   },
// // // // // //   themeToggle: {
// // // // // //     width: '44px',
// // // // // //     height: '44px',
// // // // // //     borderRadius: '12px',
// // // // // //     border: 'none',
// // // // // //     background: darkMode ? '#334155' : '#fff',
// // // // // //     cursor: 'pointer',
// // // // // //     fontSize: '1.3rem',
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     justifyContent: 'center',
// // // // // //     boxShadow: darkMode ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
// // // // // //     transition: 'all 0.2s',
// // // // // //   },
// // // // // //   main: {
// // // // // //     display: 'flex',
// // // // // //     gap: '24px',
// // // // // //     alignItems: 'flex-start',
// // // // // //   },
// // // // // //   leftCol: {
// // // // // //     flex: '1 1 50%',
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     gap: '16px',
// // // // // //   },
// // // // // //   rightCol: {
// // // // // //     flex: '1 1 50%',
// // // // // //     background: darkMode ? '#1e293b' : '#fff',
// // // // // //     borderRadius: '16px',
// // // // // //     padding: '20px',
// // // // // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // // // //     minHeight: '500px',
// // // // // //   },
// // // // // //   formsSection: {
// // // // // //     background: darkMode ? '#1e293b' : '#fff',
// // // // // //     borderRadius: '16px',
// // // // // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // // // //     overflow: 'hidden',
// // // // // //   },
// // // // // //   accordionHeader: {
// // // // // //     width: '100%',
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'center',
// // // // // //     padding: '16px',
// // // // // //     background: 'transparent',
// // // // // //     border: 'none',
// // // // // //     cursor: 'pointer',
// // // // // //     fontFamily: 'inherit',
// // // // // //   },
// // // // // //   sectionTitle: {
// // // // // //     fontSize: '0.75rem',
// // // // // //     textTransform: 'uppercase',
// // // // // //     letterSpacing: '1.5px',
// // // // // //     color: darkMode ? '#94a3b8' : '#64748b',
// // // // // //     fontWeight: '600',
// // // // // //   },
// // // // // //   chevron: {
// // // // // //     fontSize: '0.75rem',
// // // // // //     color: darkMode ? '#64748b' : '#94a3b8',
// // // // // //   },
// // // // // //   accordionContent: {
// // // // // //     padding: '0 16px 16px',
// // // // // //   },
// // // // // //   formsGrid: {
// // // // // //     display: 'grid',
// // // // // //     gridTemplateColumns: 'repeat(2, 1fr)',
// // // // // //     gap: '8px',
// // // // // //   },
// // // // // //   formsHint: {
// // // // // //     fontSize: '0.8rem',
// // // // // //     color: darkMode ? '#64748b' : '#94a3b8',
// // // // // //     margin: '0 0 10px 0',
// // // // // //     fontStyle: 'italic',
// // // // // //   },
// // // // // //   formCard: {
// // // // // //     background: darkMode ? '#334155' : '#f8fafc',
// // // // // //     border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0',
// // // // // //     borderRadius: '10px',
// // // // // //     padding: '10px 12px',
// // // // // //     cursor: 'pointer',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //     textAlign: 'left',
// // // // // //     fontFamily: 'inherit',
// // // // // //   },
// // // // // //   formCardSelected: {
// // // // // //     borderColor: '#3b82f6',
// // // // // //     background: darkMode ? '#1e3a5f' : '#eff6ff',
// // // // // //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)',
// // // // // //   },
// // // // // //   formName: {
// // // // // //     fontSize: '0.8rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // // // //     marginBottom: '2px',
// // // // // //   },
// // // // // //   formFormula: {
// // // // // //     fontSize: '0.9rem',
// // // // // //     color: darkMode ? '#60a5fa' : '#3b82f6',
// // // // // //     fontFamily: 'ui-monospace, monospace',
// // // // // //   },
// // // // // //   stepMath: {
// // // // // //     fontSize: '1.05rem',
// // // // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // // // //     background: darkMode ? '#334155' : '#fff',
// // // // // //     padding: '10px 14px',
// // // // // //     borderRadius: '8px',
// // // // // //     display: 'inline-block',
// // // // // //     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
// // // // // //   },
// // // // // //   stepTransform: {
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     gap: '10px',
// // // // // //     marginTop: '8px',
// // // // // //   },
// // // // // //   arrow: {
// // // // // //     color: '#3b82f6',
// // // // // //     fontSize: '1.1rem',
// // // // // //   },
// // // // // //   finalAnswer: {
// // // // // //     background: darkMode 
// // // // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // // //     borderRadius: '12px',
// // // // // //     padding: '18px 20px',
// // // // // //     color: '#fff',
// // // // // //     textAlign: 'center',
// // // // // //     marginTop: '16px',
// // // // // //   },
// // // // // //   answerLabel: {
// // // // // //     fontSize: '0.7rem',
// // // // // //     textTransform: 'uppercase',
// // // // // //     letterSpacing: '2px',
// // // // // //     opacity: 0.8,
// // // // // //     marginBottom: '6px',
// // // // // //     fontWeight: '600',
// // // // // //   },
// // // // // //   answerValue: {
// // // // // //     fontSize: '1.5rem',
// // // // // //     fontWeight: '700',
// // // // // //   },
// // // // // //   answerVar: { fontStyle: 'italic' },
// // // // // //   answerEq: { opacity: 0.8, margin: '0 6px' },
// // // // // //   answerNum: { color: '#fbbf24' },
// // // // // //   answerNote: {
// // // // // //     fontSize: '0.8rem',
// // // // // //     opacity: 0.75,
// // // // // //     marginTop: '6px',
// // // // // //   },
// // // // // // });

// // // // // // export default ExponentialEquationSolver;


// // // // // import React, { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
// // // // // import SolutionPanel from './SolutionPanel';
// // // // // import THEME_CSS from './MathSolverThemes';

// // // // // /* =====================================================
// // // // //    EXPONENTIAL EQUATION SOLVER
   
// // // // //    Two exports:
// // // // //    - ExponentialSolverEngine: Standalone solver component
// // // // //    - ExponentialEquationSolver: Full educational wrapper (default)
   
// // // // //    Features:
// // // // //    - Integrated SolutionPanel with graph support
// // // // //    - Theme support via CSS variables
// // // // //    - Dark mode toggle
// // // // //    - Full cursor: click-to-place, arrow keys, blinking caret
// // // // //    - Insert/delete at cursor position
// // // // //    ===================================================== */


// // // // // /* =====================================================
// // // // //    TOKENIZER
// // // // //    ===================================================== */

// // // // // const TokenType = {
// // // // //   NUMBER: 'NUMBER',
// // // // //   VARIABLE: 'VARIABLE',
// // // // //   MULTIPLY: 'MULTIPLY',
// // // // //   DIVIDE: 'DIVIDE',
// // // // //   POWER: 'POWER',
// // // // //   LPAREN: 'LPAREN',
// // // // //   RPAREN: 'RPAREN',
// // // // //   PLUS: 'PLUS',
// // // // //   MINUS: 'MINUS',
// // // // //   EQUALS: 'EQUALS',
// // // // //   E: 'E',
// // // // // };

// // // // // function tokenize(input) {
// // // // //   const tokens = [];
// // // // //   let i = 0;
  
// // // // //   while (i < input.length) {
// // // // //     const char = input[i];
    
// // // // //     if (/\s/.test(char)) {
// // // // //       i++;
// // // // //       continue;
// // // // //     }
    
// // // // //     if (/[0-9]/.test(char) || (char === '.' && /[0-9]/.test(input[i + 1]))) {
// // // // //       let num = '';
// // // // //       while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) {
// // // // //         num += input[i];
// // // // //         i++;
// // // // //       }
// // // // //       tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) });
// // // // //       continue;
// // // // //     }
    
// // // // //     if (char === 'e' && (i + 1 >= input.length || !/[a-zA-Z]/.test(input[i + 1]))) {
// // // // //       tokens.push({ type: TokenType.E });
// // // // //       i++;
// // // // //       continue;
// // // // //     }
    
// // // // //     if (/[a-zA-Z]/.test(char)) {
// // // // //       tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
// // // // //       i++;
// // // // //       continue;
// // // // //     }
    
// // // // //     const charMap = {
// // // // //       '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY,
// // // // //       '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE,
// // // // //       '^': TokenType.POWER,
// // // // //       '(': TokenType.LPAREN, ')': TokenType.RPAREN,
// // // // //       '+': TokenType.PLUS, '-': TokenType.MINUS,
// // // // //       '=': TokenType.EQUALS,
// // // // //     };
    
// // // // //     if (charMap[char]) {
// // // // //       tokens.push({ type: charMap[char] });
// // // // //       i++;
// // // // //       continue;
// // // // //     }
    
// // // // //     i++;
// // // // //   }
  
// // // // //   return tokens;
// // // // // }

// // // // // /* =====================================================
// // // // //    PARSER
// // // // //    ===================================================== */

// // // // // function parse(tokens) {
// // // // //   let pos = 0;
  
// // // // //   const peek = () => tokens[pos];
// // // // //   const consume = (expectedType) => {
// // // // //     const token = tokens[pos];
// // // // //     if (expectedType && token?.type !== expectedType) {
// // // // //       throw new Error(`Expected ${expectedType} but got ${token?.type}`);
// // // // //     }
// // // // //     pos++;
// // // // //     return token;
// // // // //   };
  
// // // // //   const parseEquation = () => {
// // // // //     const left = parseExpression();
// // // // //     if (peek()?.type === TokenType.EQUALS) {
// // // // //       consume();
// // // // //       return { type: 'EQUATION', left, right: parseExpression() };
// // // // //     }
// // // // //     return left;
// // // // //   };
  
// // // // //   const parseExpression = () => parseAdditive();
  
// // // // //   const parseAdditive = () => {
// // // // //     let left = parseMultiplicative();
// // // // //     while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) {
// // // // //       const op = consume().type;
// // // // //       left = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left, right: parseMultiplicative() };
// // // // //     }
// // // // //     return left;
// // // // //   };
  
// // // // //   const parseMultiplicative = () => {
// // // // //     let left = parsePower();
// // // // //     while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) {
// // // // //       const op = consume().type;
// // // // //       left = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left, right: parsePower() };
// // // // //     }
// // // // //     return left;
// // // // //   };
  
// // // // //   const parsePower = () => {
// // // // //     let base = parseUnary();
// // // // //     if (peek()?.type === TokenType.POWER) {
// // // // //       consume();
// // // // //       return { type: 'POWER', base, exponent: parsePower() };
// // // // //     }
// // // // //     return base;
// // // // //   };
  
// // // // //   const parseUnary = () => {
// // // // //     if (peek()?.type === TokenType.MINUS) {
// // // // //       consume();
// // // // //       return { type: 'NEGATE', operand: parseUnary() };
// // // // //     }
// // // // //     return parsePrimary();
// // // // //   };
  
// // // // //   const parsePrimary = () => {
// // // // //     const token = peek();
// // // // //     if (token?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: token.value }; }
// // // // //     if (token?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: token.value }; }
// // // // //     if (token?.type === TokenType.E) { consume(); return { type: 'E' }; }
// // // // //     if (token?.type === TokenType.LPAREN) {
// // // // //       consume();
// // // // //       const expr = parseExpression();
// // // // //       consume(TokenType.RPAREN);
// // // // //       return expr;
// // // // //     }
// // // // //     throw new Error(`Unexpected token: ${token?.type}`);
// // // // //   };
  
// // // // //   const ast = parseEquation();
// // // // //   if (pos < tokens.length) throw new Error('Unexpected tokens at end');
// // // // //   return ast;
// // // // // }

// // // // // /* =====================================================
// // // // //    HELPERS
// // // // //    ===================================================== */

// // // // // function formatNumber(num) {
// // // // //   if (Number.isInteger(num)) return String(num);
// // // // //   return (Math.round(num * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, '');
// // // // // }

// // // // // function hasVariableInExponent(node) {
// // // // //   if (!node) return false;
// // // // //   if (node.type === 'POWER') return containsVariable(node.exponent);
// // // // //   if (['MULTIPLY', 'DIVIDE', 'ADD', 'SUBTRACT'].includes(node.type)) {
// // // // //     return hasVariableInExponent(node.left) || hasVariableInExponent(node.right);
// // // // //   }
// // // // //   return false;
// // // // // }

// // // // // function containsVariable(node) {
// // // // //   if (!node) return false;
// // // // //   if (node.type === 'VARIABLE') return true;
// // // // //   if (node.type === 'NUMBER' || node.type === 'E') return false;
// // // // //   if (node.type === 'NEGATE') return containsVariable(node.operand);
// // // // //   if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
// // // // //   return containsVariable(node.left) || containsVariable(node.right);
// // // // // }

// // // // // function evaluateConstant(node) {
// // // // //   if (!node) return null;
// // // // //   switch (node.type) {
// // // // //     case 'NUMBER': return node.value;
// // // // //     case 'E': return Math.E;
// // // // //     case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
// // // // //     case 'ADD': case 'SUBTRACT': case 'MULTIPLY': case 'DIVIDE': case 'POWER': {
// // // // //       const l = evaluateConstant(node.left || node.base);
// // // // //       const r = evaluateConstant(node.right || node.exponent);
// // // // //       if (l === null || r === null) return null;
// // // // //       if (node.type === 'ADD') return l + r;
// // // // //       if (node.type === 'SUBTRACT') return l - r;
// // // // //       if (node.type === 'MULTIPLY') return l * r;
// // // // //       if (node.type === 'DIVIDE') return r !== 0 ? l / r : null;
// // // // //       if (node.type === 'POWER') return Math.pow(l, r);
// // // // //       return null;
// // // // //     }
// // // // //     default: return null;
// // // // //   }
// // // // // }

// // // // // function extractCoefficient(node) {
// // // // //   if (node.type !== 'MULTIPLY') return { coefficient: null, exponential: null };
// // // // //   if (node.left.type === 'POWER' && hasVariableInExponent(node.left)) {
// // // // //     return { coefficient: node.right, exponential: node.left };
// // // // //   }
// // // // //   if (node.right.type === 'POWER' && hasVariableInExponent(node.right)) {
// // // // //     return { coefficient: node.left, exponential: node.right };
// // // // //   }
// // // // //   return { coefficient: null, exponential: null };
// // // // // }

// // // // // function extractAdditiveConstant(node) {
// // // // //   if (node.type !== 'ADD' && node.type !== 'SUBTRACT') {
// // // // //     return { exponential: null, constant: null, isAdd: false };
// // // // //   }
// // // // //   const isAdd = node.type === 'ADD';
// // // // //   if (hasVariableInExponent(node.left) && !containsVariable(node.right)) {
// // // // //     const constVal = evaluateConstant(node.right);
// // // // //     if (node.left.type === 'POWER') {
// // // // //       return { exponential: node.left, constant: constVal, isAdd };
// // // // //     }
// // // // //   }
// // // // //   if (hasVariableInExponent(node.right) && !containsVariable(node.left) && isAdd) {
// // // // //     const constVal = evaluateConstant(node.left);
// // // // //     if (node.right.type === 'POWER') {
// // // // //       return { exponential: node.right, constant: constVal, isAdd };
// // // // //     }
// // // // //   }
// // // // //   return { exponential: null, constant: null, isAdd: false };
// // // // // }

// // // // // function findPerfectPower(base, result) {
// // // // //   if (result === 1) return 0;
// // // // //   if (result === base) return 1;
// // // // //   let power = 0, current = 1;
// // // // //   while (current < result && power < 100) {
// // // // //     current *= base;
// // // // //     power++;
// // // // //     if (current === result) return power;
// // // // //   }
// // // // //   power = -1;
// // // // //   current = 1 / base;
// // // // //   while (power > -20) {
// // // // //     if (Math.abs(current - result) < 1e-10) return power;
// // // // //     current /= base;
// // // // //     power--;
// // // // //   }
// // // // //   return null;
// // // // // }

// // // // // function parseLinearExponent(node) {
// // // // //   if (node.type === 'VARIABLE') {
// // // // //     return { variable: node.name, coefficient: 1, constant: 0 };
// // // // //   }
// // // // //   if (node.type === 'MULTIPLY') {
// // // // //     const lv = evaluateConstant(node.left), rv = evaluateConstant(node.right);
// // // // //     if (lv !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: lv, constant: 0 };
// // // // //     if (rv !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rv, constant: 0 };
// // // // //   }
// // // // //   if (node.type === 'ADD' || node.type === 'SUBTRACT') {
// // // // //     const leftLinear = parseLinearExponent(node.left);
// // // // //     const rightConst = evaluateConstant(node.right);
// // // // //     if (leftLinear && rightConst !== null) {
// // // // //       return {
// // // // //         variable: leftLinear.variable,
// // // // //         coefficient: leftLinear.coefficient,
// // // // //         constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst)
// // // // //       };
// // // // //     }
// // // // //     const rightLinear = parseLinearExponent(node.right);
// // // // //     const leftConst = evaluateConstant(node.left);
// // // // //     if (rightLinear && leftConst !== null && node.type === 'ADD') {
// // // // //       return {
// // // // //         variable: rightLinear.variable,
// // // // //         coefficient: rightLinear.coefficient,
// // // // //         constant: rightLinear.constant + leftConst
// // // // //       };
// // // // //     }
// // // // //   }
// // // // //   return null;
// // // // // }

// // // // // /* =====================================================
// // // // //    AST TO MATH DISPLAY
// // // // //    ===================================================== */

// // // // // function astToMathDisplay(node, key = 'root', darkMode = false) {
// // // // //   if (!node) return null;
  
// // // // //   const s = getMathStyles(darkMode);
  
// // // // //   const wrap = (n, k) => {
// // // // //     if (n.type === 'ADD' || n.type === 'SUBTRACT') {
// // // // //       return <span key={k}>({astToMathDisplay(n, k, darkMode)})</span>;
// // // // //     }
// // // // //     return astToMathDisplay(n, k, darkMode);
// // // // //   };
  
// // // // //   switch (node.type) {
// // // // //     case 'NUMBER': return <span key={key} style={s.number}>{formatNumber(node.value)}</span>;
// // // // //     case 'VARIABLE': return <span key={key} style={s.variable}>{node.name}</span>;
// // // // //     case 'E': return <span key={key} style={s.euler}>e</span>;
// // // // //     case 'NEGATE': return <span key={key}>{'\u2212'}{astToMathDisplay(node.operand, `${key}-neg`, darkMode)}</span>;
// // // // //     case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> + </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // // // //     case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> {'\u2212'} </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // // // //     case 'MULTIPLY': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> {'\u00B7'} </span>{wrap(node.right, `${key}-r`)}</span>;
// // // // //     case 'DIVIDE': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> / </span>{wrap(node.right, `${key}-r`)}</span>;
// // // // //     case 'POWER': return <span key={key} style={s.power}>{wrap(node.base, `${key}-base`)}<sup style={s.sup}>{astToMathDisplay(node.exponent, `${key}-exp`, darkMode)}</sup></span>;
// // // // //     case 'EQUATION': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.equals}> = </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // // // //     default: return null;
// // // // //   }
// // // // // }

// // // // // const getMathStyles = (darkMode) => ({
// // // // //   number: { color: darkMode ? '#e2e8f0' : '#1e3a5f' },
// // // // //   variable: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '500' },
// // // // //   euler: { fontStyle: 'italic', color: darkMode ? '#22d3ee' : '#0891b2' },
// // // // //   op: { color: darkMode ? '#94a3b8' : '#64748b', margin: '0 2px' },
// // // // //   equals: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
// // // // //   power: { display: 'inline-flex', alignItems: 'baseline' },
// // // // //   sup: { fontSize: '0.7em', color: darkMode ? '#60a5fa' : '#3b82f6', marginLeft: '1px' },
// // // // // });

// // // // // /* =====================================================
// // // // //    SOLVER
// // // // //    ===================================================== */

// // // // // function solveExponentialEquation(ast) {
// // // // //   const steps = [];
// // // // //   let graphData = null;
  
// // // // //   if (ast.type !== 'EQUATION') {
// // // // //     throw new Error('Input must be an equation (use = sign)');
// // // // //   }
  
// // // // //   let { left, right } = ast;
// // // // //   const leftHasVar = hasVariableInExponent(left);
// // // // //   const rightHasVar = hasVariableInExponent(right);
  
// // // // //   let expSide, constSide;
  
// // // // //   if (leftHasVar && !rightHasVar) {
// // // // //     expSide = left;
// // // // //     constSide = right;
// // // // //   } else if (rightHasVar && !leftHasVar) {
// // // // //     expSide = right;
// // // // //     constSide = left;
// // // // //     steps.push({
// // // // //       rule: 'Rearrange Equation',
// // // // //       description: 'Move the exponential term to the left side for clarity.',
// // // // //       before: ast,
// // // // //       after: { type: 'EQUATION', left: expSide, right: constSide }
// // // // //     });
// // // // //   } else if (leftHasVar && rightHasVar) {
// // // // //     throw new Error('Equations with exponentials on both sides require logarithms on both sides. Coming soon!');
// // // // //   } else {
// // // // //     throw new Error('No variable found in any exponent');
// // // // //   }
  
// // // // //   const constValue = evaluateConstant(constSide);
// // // // //   if (constValue !== null && constSide.type !== 'NUMBER') {
// // // // //     const newConstSide = { type: 'NUMBER', value: constValue };
// // // // //     steps.push({
// // // // //       rule: 'Evaluate Constant',
// // // // //       description: 'Simplify the right side to a single number.',
// // // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // //       after: { type: 'EQUATION', left: expSide, right: newConstSide }
// // // // //     });
// // // // //     constSide = newConstSide;
// // // // //   }
  
// // // // //   if (expSide.type === 'MULTIPLY') {
// // // // //     const { coefficient, exponential } = extractCoefficient(expSide);
// // // // //     if (coefficient && exponential) {
// // // // //       const coeffValue = evaluateConstant(coefficient);
// // // // //       const constVal = evaluateConstant(constSide);
// // // // //       if (coeffValue !== null && constVal !== null) {
// // // // //         const newConst = { type: 'NUMBER', value: constVal / coeffValue };
// // // // //         steps.push({
// // // // //           rule: 'Isolate Exponential Term',
// // // // //           description: `Divide both sides by ${formatNumber(coeffValue)} to isolate the exponential.`,
// // // // //           before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // //           after: { type: 'EQUATION', left: exponential, right: newConst }
// // // // //         });
// // // // //         expSide = exponential;
// // // // //         constSide = newConst;
// // // // //       }
// // // // //     }
// // // // //   }
  
// // // // //   if (expSide.type === 'ADD' || expSide.type === 'SUBTRACT') {
// // // // //     const { exponential, constant, isAdd } = extractAdditiveConstant(expSide);
// // // // //     if (exponential && constant !== null) {
// // // // //       const constVal = evaluateConstant(constSide);
// // // // //       if (constVal !== null) {
// // // // //         const newConstVal = isAdd ? constVal - constant : constVal + constant;
// // // // //         const newConst = { type: 'NUMBER', value: newConstVal };
// // // // //         const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
// // // // //         steps.push({
// // // // //           rule: 'Isolate Exponential Term',
// // // // //           description: `${action} both sides.`,
// // // // //           before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // //           after: { type: 'EQUATION', left: exponential, right: newConst }
// // // // //         });
// // // // //         expSide = exponential;
// // // // //         constSide = newConst;
// // // // //       }
// // // // //     }
// // // // //   }
  
// // // // //   if (expSide.type !== 'POWER') {
// // // // //     throw new Error('Could not isolate exponential term');
// // // // //   }
  
// // // // //   const base = expSide.base;
// // // // //   const exponent = expSide.exponent;
// // // // //   const resultValue = evaluateConstant(constSide);
  
// // // // //   if (resultValue === null) throw new Error('Right side must evaluate to a number');
// // // // //   if (resultValue <= 0) throw new Error('Exponential equations cannot equal zero or negative numbers');
  
// // // // //   const isNaturalBase = base.type === 'E';
// // // // //   const baseValue = isNaturalBase ? Math.E : evaluateConstant(base);
  
// // // // //   if (baseValue === null) throw new Error('Base must be a constant');
// // // // //   if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');
  
// // // // //   let perfectPower = null;
// // // // //   if (!isNaturalBase && Number.isInteger(baseValue) && Number.isInteger(resultValue)) {
// // // // //     perfectPower = findPerfectPower(baseValue, resultValue);
// // // // //   }
  
// // // // //   if (exponent.type === 'VARIABLE') {
// // // // //     const varName = exponent.name;
    
// // // // //     if (perfectPower !== null) {
// // // // //       steps.push({
// // // // //         rule: 'Recognize Perfect Power',
// // // // //         description: `${formatNumber(resultValue)} = ${formatNumber(baseValue)} raised to power ${perfectPower}.`,
// // // // //         before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // //         after: { type: 'EQUATION', left: expSide, right: { type: 'POWER', base: { type: 'NUMBER', value: baseValue }, exponent: { type: 'NUMBER', value: perfectPower } } }
// // // // //       });
// // // // //       steps.push({
// // // // //         rule: 'Match Bases',
// // // // //         description: `Same base (${formatNumber(baseValue)}) means exponents are equal.`,
// // // // //         before: null,
// // // // //         after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: perfectPower } }
// // // // //       });
      
// // // // //       graphData = {
// // // // //         type: 'exponential',
// // // // //         base: baseValue,
// // // // //         solution: { x: perfectPower, y: resultValue }
// // // // //       };
      
// // // // //       return { steps, solution: { variable: varName, value: perfectPower, exact: true }, graphData };
// // // // //     }
    
// // // // //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
// // // // //     steps.push({
// // // // //       rule: 'Apply Logarithm',
// // // // //       description: `Take ${logName} of both sides.`,
// // // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // //       after: null
// // // // //     });
    
// // // // //     steps.push({
// // // // //       rule: 'Simplify',
// // // // //       description: isNaturalBase ? 'ln(e\u02E3) = x' : 'log base b of b\u02E3 = x',
// // // // //       before: null,
// // // // //       after: null
// // // // //     });
    
// // // // //     const solution = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
    
// // // // //     steps.push({
// // // // //       rule: 'Calculate',
// // // // //       description: isNaturalBase 
// // // // //         ? `ln(${formatNumber(resultValue)}) \u2248 ${formatNumber(solution)}`
// // // // //         : `log(${formatNumber(resultValue)}) \u00F7 log(${formatNumber(baseValue)}) \u2248 ${formatNumber(solution)}`,
// // // // //       before: null,
// // // // //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: solution } }
// // // // //     });
    
// // // // //     graphData = {
// // // // //       type: 'exponential',
// // // // //       base: baseValue,
// // // // //       solution: { x: solution, y: resultValue }
// // // // //     };
    
// // // // //     return { steps, solution: { variable: varName, value: solution, exact: false }, graphData };
// // // // //   }
  
// // // // //   const linearInfo = parseLinearExponent(exponent);
// // // // //   if (linearInfo) {
// // // // //     const { variable, coefficient, constant } = linearInfo;
// // // // //     const logResult = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
// // // // //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
    
// // // // //     steps.push({
// // // // //       rule: 'Apply Logarithm',
// // // // //       description: `Take ${logName} of both sides to bring down the exponent.`,
// // // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // // //       after: null
// // // // //     });
    
// // // // //     const expStr = `${coefficient === 1 ? '' : coefficient}${variable}${constant >= 0 ? ' + ' + constant : ' \u2212 ' + Math.abs(constant)}`;
// // // // //     steps.push({
// // // // //       rule: 'Linear Equation',
// // // // //       description: `Now solve: ${expStr} = ${formatNumber(logResult)}`,
// // // // //       before: null,
// // // // //       after: null
// // // // //     });
    
// // // // //     const subtracted = logResult - constant;
// // // // //     const solution = subtracted / coefficient;
    
// // // // //     steps.push({
// // // // //       rule: 'Solve for Variable',
// // // // //       description: coefficient !== 1 
// // // // //         ? `Subtract ${formatNumber(constant)}, then divide by ${coefficient}.`
// // // // //         : `Subtract ${formatNumber(constant)} from both sides.`,
// // // // //       before: null,
// // // // //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
// // // // //     });
    
// // // // //     graphData = {
// // // // //       type: 'exponential',
// // // // //       base: baseValue,
// // // // //       solution: { x: solution, y: resultValue }
// // // // //     };
    
// // // // //     return { steps, solution: { variable, value: solution, exact: false }, graphData };
// // // // //   }
  
// // // // //   throw new Error('Exponent form not supported');
// // // // // }

// // // // // /* =====================================================
// // // // //    CURSOR STYLES (injected once)
// // // // //    ===================================================== */

// // // // // const CURSOR_CSS = `
// // // // //   @keyframes sp-blink {
// // // // //     0%, 100% { opacity: 1; }
// // // // //     50% { opacity: 0; }
// // // // //   }
// // // // //   .ee-caret {
// // // // //     display: inline-block;
// // // // //     width: 2px;
// // // // //     height: 1.2em;
// // // // //     background: #fbbf24;
// // // // //     animation: sp-blink 1s step-end infinite;
// // // // //     vertical-align: text-bottom;
// // // // //     margin: 0 -1px;
// // // // //     border-radius: 1px;
// // // // //   }
// // // // //   .ee-display:focus {
// // // // //     outline: none;
// // // // //   }
// // // // //   .ee-display:focus .ee-caret {
// // // // //     animation: sp-blink 1s step-end infinite;
// // // // //   }
// // // // //   .ee-display:not(:focus) .ee-caret {
// // // // //     opacity: 0.4;
// // // // //     animation: none;
// // // // //   }
// // // // //   .ee-char {
// // // // //     cursor: text;
// // // // //     position: relative;
// // // // //   }
// // // // //   .ee-char:hover {
// // // // //     background: rgba(255,255,255,0.08);
// // // // //     border-radius: 2px;
// // // // //   }
// // // // //   .ee-sup-group {
// // // // //     display: inline-flex;
// // // // //     align-items: baseline;
// // // // //     cursor: text;
// // // // //   }
// // // // // `;

// // // // // /* =====================================================
// // // // //    ENGINE COMPONENT (Standalone Solver)
// // // // //    ===================================================== */

// // // // // export const ExponentialSolverEngine = forwardRef(({ 
// // // // //   compact = false,
// // // // //   style = {},
// // // // //   darkMode = false,
// // // // //   onResultChange = null
// // // // // }, ref) => {
// // // // //   const [expression, setExpression] = useState([]);
// // // // //   const [cursorPos, setCursorPos] = useState(0);
// // // // //   const [result, setResult] = useState(null);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [focused, setFocused] = useState(false);
// // // // //   const displayRef = useRef(null);

// // // // //   const variables = ['x', 'y', 'n'];
// // // // //   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
// // // // //   const operators = ['^', '\u00D7', '\u00F7', '+', '-', '='];

// // // // //   useImperativeHandle(ref, () => ({
// // // // //     loadEquation: (eqString) => {
// // // // //       const chars = eqString.split('');
// // // // //       setExpression(chars);
// // // // //       setCursorPos(chars.length);
// // // // //       setResult(null);
// // // // //       setError(null);
// // // // //       if (onResultChange) onResultChange(null);
// // // // //     },
// // // // //     clear: () => {
// // // // //       setExpression([]);
// // // // //       setCursorPos(0);
// // // // //       setResult(null);
// // // // //       setError(null);
// // // // //       if (onResultChange) onResultChange(null);
// // // // //     },
// // // // //     getExpression: () => expression.join(''),
// // // // //     getResult: () => result
// // // // //   }));

// // // // //   const insertAt = useCallback((item) => {
// // // // //     setExpression(prev => {
// // // // //       const next = [...prev];
// // // // //       next.splice(cursorPos, 0, item);
// // // // //       return next;
// // // // //     });
// // // // //     setCursorPos(prev => prev + 1);
// // // // //     setResult(null);
// // // // //     setError(null);
// // // // //   }, [cursorPos]);

// // // // //   const deleteAt = useCallback((pos) => {
// // // // //     if (pos < 0 || pos >= expression.length) return;
// // // // //     setExpression(prev => {
// // // // //       const next = [...prev];
// // // // //       next.splice(pos, 1);
// // // // //       return next;
// // // // //     });
// // // // //     setCursorPos(pos);
// // // // //     setResult(null);
// // // // //     setError(null);
// // // // //   }, [expression.length]);

// // // // //   const clearAll = useCallback(() => {
// // // // //     setExpression([]);
// // // // //     setCursorPos(0);
// // // // //     setResult(null);
// // // // //     setError(null);
// // // // //   }, []);

// // // // //   const handleKeyDown = useCallback((e) => {
// // // // //     switch (e.key) {
// // // // //       case 'ArrowLeft':
// // // // //         e.preventDefault();
// // // // //         setCursorPos(prev => Math.max(0, prev - 1));
// // // // //         break;
// // // // //       case 'ArrowRight':
// // // // //         e.preventDefault();
// // // // //         setCursorPos(prev => Math.min(expression.length, prev + 1));
// // // // //         break;
// // // // //       case 'Home':
// // // // //         e.preventDefault();
// // // // //         setCursorPos(0);
// // // // //         break;
// // // // //       case 'End':
// // // // //         e.preventDefault();
// // // // //         setCursorPos(expression.length);
// // // // //         break;
// // // // //       case 'Backspace':
// // // // //         e.preventDefault();
// // // // //         if (cursorPos > 0) deleteAt(cursorPos - 1);
// // // // //         break;
// // // // //       case 'Delete':
// // // // //         e.preventDefault();
// // // // //         if (cursorPos < expression.length) deleteAt(cursorPos);
// // // // //         break;
// // // // //       default:
// // // // //         break;
// // // // //     }
// // // // //   }, [expression.length, cursorPos, deleteAt]);

// // // // //   const handleDisplayClick = useCallback((e) => {
// // // // //     if (displayRef.current) displayRef.current.focus();
// // // // //     const charEl = e.target.closest('[data-idx]');
// // // // //     if (charEl) {
// // // // //       const idx = parseInt(charEl.getAttribute('data-idx'), 10);
// // // // //       const rect = charEl.getBoundingClientRect();
// // // // //       const clickX = e.clientX - rect.left;
// // // // //       const midpoint = rect.width / 2;
// // // // //       setCursorPos(clickX < midpoint ? idx : idx + 1);
// // // // //     } else {
// // // // //       setCursorPos(expression.length);
// // // // //     }
// // // // //   }, [expression.length]);

// // // // //   /* ---- Build display elements with cursor ---- */
// // // // //   const buildDisplayElements = () => {
// // // // //     const expr = expression;
// // // // //     if (expr.length === 0) {
// // // // //       if (focused) {
// // // // //         return <span className="ee-caret" />;
// // // // //       }
// // // // //       return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
// // // // //     }
    
// // // // //     const elements = [];
// // // // //     const eStyles = getEngineStyles(darkMode);
    
// // // // //     // Pre-compute superscript groups: maps base index -> { start, end } of exponent chars
// // // // //     // A group is: char at i, caret '^' at i+1, then exponent chars from i+2..j-1
// // // // //     const supGroups = {};
// // // // //     let skip = new Set();
    
// // // // //     let i = 0;
// // // // //     while (i < expr.length) {
// // // // //       if (i + 1 < expr.length && expr[i + 1] === '^') {
// // // // //         const baseIdx = i;
// // // // //         const caretIdx = i + 1;
// // // // //         let j = i + 2;
// // // // //         let expIndices = [];
        
// // // // //         if (j < expr.length && expr[j] === '(') {
// // // // //           let depth = 1;
// // // // //           expIndices.push(j);
// // // // //           j++;
// // // // //           while (j < expr.length && depth > 0) {
// // // // //             if (expr[j] === '(') depth++;
// // // // //             if (expr[j] === ')') depth--;
// // // // //             expIndices.push(j);
// // // // //             j++;
// // // // //           }
// // // // //         } else {
// // // // //           while (j < expr.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expr[j]) && expr[j] !== '=') {
// // // // //             expIndices.push(j);
// // // // //             j++;
// // // // //           }
// // // // //         }
        
// // // // //         if (expIndices.length > 0) {
// // // // //           supGroups[baseIdx] = { caretIdx, expIndices };
// // // // //           skip.add(caretIdx);
// // // // //           expIndices.forEach(idx => skip.add(idx));
// // // // //           i = j;
// // // // //           continue;
// // // // //         }
// // // // //       }
// // // // //       i++;
// // // // //     }
    
// // // // //     const renderCaret = (pos) => {
// // // // //       if (cursorPos === pos && focused) {
// // // // //         return <span key={`caret-${pos}`} className="ee-caret" />;
// // // // //       }
// // // // //       return null;
// // // // //     };
    
// // // // //     const charStyle = (ch) => {
// // // // //       if (ch === '\u00D7' || ch === '\u00F7' || ch === '+' || ch === '-') return eStyles.displayOp;
// // // // //       if (ch === '=') return eStyles.displayEquals;
// // // // //       if (ch === 'e') return eStyles.displayEuler;
// // // // //       return undefined;
// // // // //     };
    
// // // // //     const displayChar = (ch) => {
// // // // //       if (ch === '\u00D7') return ' \u00B7 ';
// // // // //       if (ch === '\u00F7') return ' / ';
// // // // //       if (ch === '+') return ' + ';
// // // // //       if (ch === '-') return ' \u2212 ';
// // // // //       if (ch === '=') return ' = ';
// // // // //       return ch;
// // // // //     };
    
// // // // //     i = 0;
// // // // //     while (i < expr.length) {
// // // // //       if (skip.has(i)) { i++; continue; }
      
// // // // //       if (supGroups[i]) {
// // // // //         const group = supGroups[i];
// // // // //         const baseChar = expr[i];
// // // // //         const expIndices = group.expIndices;
        
// // // // //         // Caret before the base char
// // // // //         elements.push(renderCaret(i));
        
// // // // //         elements.push(
// // // // //           <span key={`sup-${i}`} className="ee-sup-group">
// // // // //             <span 
// // // // //               className="ee-char" 
// // // // //               data-idx={i}
// // // // //               style={baseChar === 'e' ? eStyles.displayEuler : undefined}
// // // // //             >
// // // // //               {baseChar}
// // // // //             </span>
// // // // //             <sup style={eStyles.displaySup}>
// // // // //               {/* caret inside superscript, before first exp char */}
// // // // //               {renderCaret(group.caretIdx + 1)}
// // // // //               {expIndices.map((idx, ei) => (
// // // // //                 <React.Fragment key={idx}>
// // // // //                   <span className="ee-char" data-idx={idx}>
// // // // //                     {displayChar(expr[idx])}
// // // // //                   </span>
// // // // //                   {renderCaret(idx + 1)}
// // // // //                 </React.Fragment>
// // // // //               ))}
// // // // //             </sup>
// // // // //           </span>
// // // // //         );
        
// // // // //         i = expIndices[expIndices.length - 1] + 1;
// // // // //         continue;
// // // // //       }
      
// // // // //       elements.push(renderCaret(i));
// // // // //       elements.push(
// // // // //         <span 
// // // // //           key={`ch-${i}`} 
// // // // //           className="ee-char" 
// // // // //           data-idx={i}
// // // // //           style={charStyle(expr[i])}
// // // // //         >
// // // // //           {displayChar(expr[i])}
// // // // //         </span>
// // // // //       );
// // // // //       i++;
// // // // //     }
    
// // // // //     // Caret at the very end
// // // // //     elements.push(renderCaret(expression.length));
    
// // // // //     return elements;
// // // // //   };

// // // // //   const solve = () => {
// // // // //     try {
// // // // //       const exprString = expression.join('');
// // // // //       const tokens = tokenize(exprString);
// // // // //       const ast = parse(tokens);
// // // // //       const solveResult = solveExponentialEquation(ast);
      
// // // // //       setResult(solveResult);
// // // // //       setError(null);
// // // // //       if (onResultChange) onResultChange(solveResult);
// // // // //     } catch (e) {
// // // // //       setError(e.message);
// // // // //       setResult(null);
// // // // //       if (onResultChange) onResultChange(null);
// // // // //     }
// // // // //   };

// // // // //   const p = compact ? 0.85 : 1;
// // // // //   const styles = getEngineStyles(darkMode);

// // // // //   return (
// // // // //     <div style={{ ...styles.container, ...style }}>
// // // // //       <style>{CURSOR_CSS}</style>
      
// // // // //       <div 
// // // // //         ref={displayRef}
// // // // //         className="ee-display"
// // // // //         tabIndex={0}
// // // // //         style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px`, cursor: 'text' }}
// // // // //         onClick={handleDisplayClick}
// // // // //         onKeyDown={handleKeyDown}
// // // // //         onFocus={() => setFocused(true)}
// // // // //         onBlur={() => setFocused(false)}
// // // // //       >
// // // // //         {buildDisplayElements()}
// // // // //       </div>
      
// // // // //       {error && (
// // // // //         <div style={styles.error}>{error}</div>
// // // // //       )}
      
// // // // //       <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
// // // // //         <div style={styles.row}>
// // // // //           <span style={styles.label}>Var</span>
// // // // //           <div style={styles.btnGroup}>
// // // // //             {variables.map((v) => (
// // // // //               <button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => insertAt(v)}>{v}</button>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div style={styles.row}>
// // // // //           <span style={styles.label}>Num</span>
// // // // //           <div style={styles.btnGroup}>
// // // // //             {numbers.map((n) => (
// // // // //               <button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => insertAt(n)}>{n}</button>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div style={styles.row}>
// // // // //           <span style={styles.label}>Op</span>
// // // // //           <div style={styles.btnGroup}>
// // // // //             {operators.map((op) => (
// // // // //               <button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>
// // // // //                 {op === '^' ? 'x\u207F' : op}
// // // // //               </button>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div style={styles.row}>
// // // // //           <span style={styles.label}></span>
// // // // //           <div style={styles.btnGroup}>
// // // // //             <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('e')}>e</button>
// // // // //             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt('(')}>(</button>
// // // // //             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt(')')}>)</button>
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div style={styles.actions}>
// // // // //           <button style={{ ...styles.btnAction, ...styles.btnClear }} onClick={clearAll}>Clear</button>
// // // // //           <button style={{ ...styles.btnAction, ...styles.btnBack }} onClick={() => { if (cursorPos > 0) deleteAt(cursorPos - 1); }}>{'\u232B'}</button>
// // // // //           <button 
// // // // //             style={{ ...styles.btnAction, ...styles.btnSolve, ...(expression.length === 0 ? styles.btnDisabled : {}) }} 
// // // // //             onClick={solve}
// // // // //             disabled={expression.length === 0}
// // // // //           >
// // // // //             Solve
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {result && result.solution && (
// // // // //         <div style={styles.solution}>
// // // // //           <span style={styles.solVar}>{result.solution.variable}</span>
// // // // //           <span style={styles.solEq}> = </span>
// // // // //           <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
// // // // //           {!result.solution.exact && <span style={styles.solApprox}> {'\u2248'}</span>}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // });

// // // // // ExponentialSolverEngine.displayName = 'ExponentialSolverEngine';

// // // // // const getEngineStyles = (darkMode) => ({
// // // // //   container: {
// // // // //     background: darkMode ? '#1e293b' : '#fff',
// // // // //     borderRadius: '16px',
// // // // //     padding: '20px',
// // // // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // // //   },
// // // // //   display: {
// // // // //     background: darkMode 
// // // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // //     borderRadius: '12px',
// // // // //     padding: '18px 22px',
// // // // //     minHeight: '54px',
// // // // //     marginBottom: '16px',
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     flexWrap: 'wrap',
// // // // //     fontSize: '1.4rem',
// // // // //     color: '#fff',
// // // // //     fontWeight: '500',
// // // // //   },
// // // // //   placeholder: {
// // // // //     color: 'rgba(255,255,255,0.5)',
// // // // //     fontStyle: 'italic',
// // // // //     fontSize: '0.95rem',
// // // // //   },
// // // // //   displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px' },
// // // // //   displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
// // // // //   displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
// // // // //   displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
// // // // //   error: {
// // // // //     background: darkMode ? '#451a1a' : '#fef2f2',
// // // // //     border: darkMode ? '1px solid #7f1d1d' : '1px solid #fecaca',
// // // // //     borderRadius: '8px',
// // // // //     padding: '10px 14px',
// // // // //     marginBottom: '12px',
// // // // //     color: darkMode ? '#fca5a5' : '#dc2626',
// // // // //     fontSize: '0.85rem',
// // // // //   },
// // // // //   builder: {
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     gap: '10px',
// // // // //   },
// // // // //   row: {
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     gap: '10px',
// // // // //   },
// // // // //   label: {
// // // // //     fontSize: '0.65rem',
// // // // //     textTransform: 'uppercase',
// // // // //     letterSpacing: '0.5px',
// // // // //     color: darkMode ? '#64748b' : '#94a3b8',
// // // // //     width: '28px',
// // // // //     flexShrink: 0,
// // // // //     fontWeight: '600',
// // // // //   },
// // // // //   btnGroup: {
// // // // //     display: 'flex',
// // // // //     flexWrap: 'wrap',
// // // // //     gap: '6px',
// // // // //   },
// // // // //   btn: {
// // // // //     fontSize: '0.95rem',
// // // // //     padding: '8px 12px',
// // // // //     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
// // // // //     background: darkMode ? '#334155' : '#f8fafc',
// // // // //     color: darkMode ? '#e2e8f0' : '#334155',
// // // // //     cursor: 'pointer',
// // // // //     borderRadius: '8px',
// // // // //     minWidth: '36px',
// // // // //     fontFamily: 'inherit',
// // // // //     fontWeight: '500',
// // // // //     transition: 'all 0.15s',
// // // // //   },
// // // // //   btnVar: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600' },
// // // // //   btnNum: { color: darkMode ? '#f1f5f9' : '#1e293b' },
// // // // //   btnOp: { color: darkMode ? '#cbd5e1' : '#64748b', fontWeight: '600' },
// // // // //   btnSpecial: { color: darkMode ? '#22d3ee' : '#0891b2', fontWeight: '600', fontStyle: 'italic' },
// // // // //   btnBracket: { fontSize: '1.1rem', color: darkMode ? '#94a3b8' : '#64748b' },
// // // // //   actions: {
// // // // //     display: 'flex',
// // // // //     gap: '8px',
// // // // //     marginTop: '6px',
// // // // //     paddingTop: '14px',
// // // // //     borderTop: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
// // // // //   },
// // // // //   btnAction: {
// // // // //     fontSize: '0.85rem',
// // // // //     fontWeight: '600',
// // // // //     padding: '12px 18px',
// // // // //     border: 'none',
// // // // //     cursor: 'pointer',
// // // // //     borderRadius: '8px',
// // // // //     fontFamily: 'inherit',
// // // // //     transition: 'all 0.15s',
// // // // //   },
// // // // //   btnClear: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
// // // // //   btnBack: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
// // // // //   btnSolve: {
// // // // //     background: darkMode 
// // // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // //     color: '#fff',
// // // // //     marginLeft: 'auto',
// // // // //     padding: '12px 24px',
// // // // //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
// // // // //   },
// // // // //   btnDisabled: { background: darkMode ? '#475569' : '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
// // // // //   solution: {
// // // // //     marginTop: '16px',
// // // // //     padding: '14px 18px',
// // // // //     background: darkMode 
// // // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // //     borderRadius: '10px',
// // // // //     textAlign: 'center',
// // // // //     fontSize: '1.3rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#fff',
// // // // //   },
// // // // //   solVar: { fontStyle: 'italic' },
// // // // //   solEq: { opacity: 0.8, margin: '0 6px' },
// // // // //   solNum: { color: '#fbbf24' },
// // // // //   solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
// // // // // });

// // // // // /* =====================================================
// // // // //    EQUATION FORM GENERATORS
// // // // //    ===================================================== */

// // // // // const equationForms = [
// // // // //   {
// // // // //     id: 'simple',
// // // // //     name: 'Simple',
// // // // //     formula: 'b\u02E3 = c',
// // // // //     generate: (nice) => {
// // // // //       if (nice) {
// // // // //         const bases = [2, 3, 5, 10];
// // // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // // //         const exp = Math.floor(Math.random() * 5) + 1;
// // // // //         return `${base}^x=${Math.pow(base, exp)}`;
// // // // //       }
// // // // //       return `${Math.floor(Math.random() * 8) + 2}^x=${Math.floor(Math.random() * 900) + 10}`;
// // // // //     }
// // // // //   },
// // // // //   {
// // // // //     id: 'coefficient',
// // // // //     name: 'With Coefficient',
// // // // //     formula: 'a \u00B7 b\u02E3 = c',
// // // // //     generate: (nice) => {
// // // // //       if (nice) {
// // // // //         const bases = [2, 3, 5];
// // // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // // //         const exp = Math.floor(Math.random() * 4) + 1;
// // // // //         const coeff = Math.floor(Math.random() * 5) + 2;
// // // // //         return `${coeff}\u00D7${base}^x=${coeff * Math.pow(base, exp)}`;
// // // // //       }
// // // // //       const base = Math.floor(Math.random() * 7) + 2;
// // // // //       const coeff = Math.floor(Math.random() * 9) + 2;
// // // // //       return `${coeff}\u00D7${base}^x=${Math.floor(Math.random() * 500) + 20}`;
// // // // //     }
// // // // //   },
// // // // //   {
// // // // //     id: 'linear-exp',
// // // // //     name: 'Linear Exponent',
// // // // //     formula: 'b\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
// // // // //     generate: (nice) => {
// // // // //       const bases = [2, 3, 5];
// // // // //       const base = bases[Math.floor(Math.random() * bases.length)];
// // // // //       const m = Math.floor(Math.random() * 3) + 1;
// // // // //       const n = Math.floor(Math.random() * 5) - 2;
// // // // //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// // // // //       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
// // // // //       if (nice) {
// // // // //         const x = Math.floor(Math.random() * 4) + 1;
// // // // //         return `${base}^(${mStr}${nStr})=${Math.pow(base, m * x + n)}`;
// // // // //       }
// // // // //       return `${base}^(${mStr}${nStr})=${Math.floor(Math.random() * 200) + 5}`;
// // // // //     }
// // // // //   },
// // // // //   {
// // // // //     id: 'same-base',
// // // // //     name: 'Same Base',
// // // // //     formula: 'b\u1DA0\u207D\u02E3\u207E = b\u207F',
// // // // //     generate: () => {
// // // // //       const bases = [2, 3, 5];
// // // // //       const base = bases[Math.floor(Math.random() * bases.length)];
// // // // //       const a = Math.floor(Math.random() * 3) + 1;
// // // // //       const b = Math.floor(Math.random() * 5);
// // // // //       const c = Math.floor(Math.random() * 6) + 1;
// // // // //       const aStr = a === 1 ? 'x' : `${a}\u00D7x`;
// // // // //       const bStr = b > 0 ? `+${b}` : '';
// // // // //       return `${base}^(${aStr}${bStr})=${base}^${c}`;
// // // // //     }
// // // // //   },
// // // // //   {
// // // // //     id: 'convertible',
// // // // //     name: 'Convertible',
// // // // //     formula: 'a\u02E3 = b',
// // // // //     generate: () => {
// // // // //       const families = [
// // // // //         { bases: [2, 4, 8, 16, 32], root: 2 },
// // // // //         { bases: [3, 9, 27, 81], root: 3 },
// // // // //         { bases: [5, 25, 125], root: 5 }
// // // // //       ];
// // // // //       const family = families[Math.floor(Math.random() * families.length)];
// // // // //       const base = family.bases[Math.floor(Math.random() * (family.bases.length - 1))];
// // // // //       const result = family.bases[Math.floor(Math.random() * family.bases.length)];
// // // // //       return `${base}^x=${result}`;
// // // // //     }
// // // // //   },
// // // // //   {
// // // // //     id: 'with-constant',
// // // // //     name: 'With Constant',
// // // // //     formula: 'b\u02E3 + c = d',
// // // // //     generate: (nice) => {
// // // // //       if (nice) {
// // // // //         const bases = [2, 3, 5];
// // // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // // //         const exp = Math.floor(Math.random() * 4) + 1;
// // // // //         const c = Math.floor(Math.random() * 10) + 1;
// // // // //         return `${base}^x+${c}=${Math.pow(base, exp) + c}`;
// // // // //       }
// // // // //       const base = Math.floor(Math.random() * 7) + 2;
// // // // //       const c = Math.floor(Math.random() * 20) + 1;
// // // // //       return `${base}^x+${c}=${Math.floor(Math.random() * 200) + c + 1}`;
// // // // //     }
// // // // //   },
// // // // //   {
// // // // //     id: 'natural',
// // // // //     name: 'Natural Base',
// // // // //     formula: 'e\u02E3 = c',
// // // // //     generate: (nice) => {
// // // // //       if (nice) {
// // // // //         const vals = [1, 2, 3, 5, 7, 10, 20, 50, 100];
// // // // //         return `e^x=${vals[Math.floor(Math.random() * vals.length)]}`;
// // // // //       }
// // // // //       return `e^x=${(Math.random() * 100 + 1).toFixed(2)}`;
// // // // //     }
// // // // //   },
// // // // //   {
// // // // //     id: 'natural-linear',
// // // // //     name: 'Natural Linear',
// // // // //     formula: 'e\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
// // // // //     generate: (nice) => {
// // // // //       const m = Math.floor(Math.random() * 3) + 1;
// // // // //       const n = Math.floor(Math.random() * 5) - 2;
// // // // //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// // // // //       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
// // // // //       if (nice) {
// // // // //         const vals = [1, 2, 5, 10, 20, 50];
// // // // //         return `e^(${mStr}${nStr})=${vals[Math.floor(Math.random() * vals.length)]}`;
// // // // //       }
// // // // //       return `e^(${mStr}${nStr})=${(Math.random() * 50 + 1).toFixed(2)}`;
// // // // //     }
// // // // //   }
// // // // // ];

// // // // // /* =====================================================
// // // // //    WRAPPER COMPONENT (Full Educational Version)
// // // // //    ===================================================== */

// // // // // const ExponentialEquationSolver = () => {
// // // // //   const engineRef = React.useRef(null);
// // // // //   const [solveResult, setSolveResult] = useState(null);
// // // // //   const [selectedForm, setSelectedForm] = useState(null);
// // // // //   const [darkMode, setDarkMode] = useState(false);
// // // // //   const [examplesOpen, setExamplesOpen] = useState(false);

// // // // //   const handleFormClick = (form) => {
// // // // //     const isNice = Math.random() < 0.8;
// // // // //     const equation = form.generate(isNice);
// // // // //     setSelectedForm(form.id);
// // // // //     setSolveResult(null);
// // // // //     if (engineRef.current) {
// // // // //       engineRef.current.loadEquation(equation);
// // // // //     }
// // // // //   };

// // // // //   const handleResultChange = (result) => {
// // // // //     setSolveResult(result);
// // // // //   };

// // // // //   const toggleDarkMode = () => {
// // // // //     setDarkMode(!darkMode);
// // // // //   };

// // // // //   const wStyles = getWrapperStyles(darkMode);

// // // // //   const renderStepContent = (step, index) => {
// // // // //     if (!step.before && !step.after) return null;
// // // // //     return (
// // // // //       <div>
// // // // //         {step.before && (
// // // // //           <div style={wStyles.stepMath}>
// // // // //             {astToMathDisplay(step.before, `before-${index}`, darkMode)}
// // // // //           </div>
// // // // //         )}
// // // // //         {step.after && (
// // // // //           <div style={wStyles.stepTransform}>
// // // // //             <span style={wStyles.arrow}>{'\u27F9'}</span>
// // // // //             <div style={wStyles.stepMath}>
// // // // //               {astToMathDisplay(step.after, `after-${index}`, darkMode)}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <div style={wStyles.container}>
// // // // //       <style>{THEME_CSS}</style>
// // // // //       <div style={wStyles.inner}>
        
// // // // //         {/* Header */}
// // // // //         <header style={wStyles.header}>
// // // // //           <div style={wStyles.headerTop}>
// // // // //             <div style={wStyles.headerLeft}>
// // // // //               <div style={wStyles.iconWrap}>
// // // // //                 <span style={wStyles.icon}>x</span>
// // // // //               </div>
// // // // //               <div>
// // // // //                 <h1 style={wStyles.title}>Exponential Equation Solver</h1>
// // // // //                 <p style={wStyles.subtitle}>Solve equations with variables in exponents</p>
// // // // //               </div>
// // // // //             </div>
// // // // //             <button style={wStyles.themeToggle} onClick={toggleDarkMode}>
// // // // //               {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
// // // // //             </button>
// // // // //           </div>
// // // // //         </header>

// // // // //         {/* Main Content - Side by Side */}
// // // // //         <div style={wStyles.main}>
          
// // // // //           {/* Left Column - Engine + Forms */}
// // // // //           <div style={wStyles.leftCol}>
            
// // // // //             <ExponentialSolverEngine 
// // // // //               ref={engineRef} 
// // // // //               onResultChange={handleResultChange}
// // // // //               darkMode={darkMode}
// // // // //               compact={true}
// // // // //             />
            
// // // // //             {/* Equation Forms - Collapsible */}
// // // // //             <div style={wStyles.formsSection}>
// // // // //               <button 
// // // // //                 style={wStyles.accordionHeader}
// // // // //                 onClick={() => setExamplesOpen(!examplesOpen)}
// // // // //               >
// // // // //                 <span style={wStyles.sectionTitle}>Try an Example</span>
// // // // //                 <span style={wStyles.chevron}>{examplesOpen ? '\u25B2' : '\u25BC'}</span>
// // // // //               </button>
              
// // // // //               {examplesOpen && (
// // // // //                 <div style={wStyles.accordionContent}>
// // // // //                   <p style={wStyles.formsHint}>Click any type to generate a random equation. Click again for a new one!</p>
// // // // //                   <div style={wStyles.formsGrid}>
// // // // //                     {equationForms.map((form) => (
// // // // //                       <button
// // // // //                         key={form.id}
// // // // //                         style={{
// // // // //                           ...wStyles.formCard,
// // // // //                           ...(selectedForm === form.id ? wStyles.formCardSelected : {})
// // // // //                         }}
// // // // //                         onClick={() => handleFormClick(form)}
// // // // //                       >
// // // // //                         <div style={wStyles.formName}>{form.name}</div>
// // // // //                         <div style={wStyles.formFormula}>{form.formula}</div>
// // // // //                       </button>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
          
// // // // //           {/* Right Column - SolutionPanel */}
// // // // //           <div style={wStyles.rightCol}>
// // // // //             <SolutionPanel
// // // // //               steps={solveResult?.steps || []}
// // // // //               graphData={solveResult?.graphData || null}
// // // // //               darkMode={darkMode}
// // // // //               placeholder="Select an equation type or enter your own equation, then click Solve to see the step-by-step solution."
// // // // //               stepsTitle="Solution Steps"
// // // // //               renderStepContent={renderStepContent}
// // // // //               stepCardClass={() => ''}
// // // // //             />
            
// // // // //             {solveResult && solveResult.solution && (
// // // // //               <div style={wStyles.finalAnswer}>
// // // // //                 <div style={wStyles.answerLabel}>Answer</div>
// // // // //                 <div style={wStyles.answerValue}>
// // // // //                   <span style={wStyles.answerVar}>{solveResult.solution.variable}</span>
// // // // //                   <span style={wStyles.answerEq}> = </span>
// // // // //                   <span style={wStyles.answerNum}>{formatNumber(solveResult.solution.value)}</span>
// // // // //                 </div>
// // // // //                 <div style={wStyles.answerNote}>
// // // // //                   {solveResult.solution.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const getWrapperStyles = (darkMode) => ({
// // // // //   container: {
// // // // //     minHeight: '100vh',
// // // // //     background: darkMode 
// // // // //       ? '#0f172a'
// // // // //       : 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
// // // // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // // //     padding: '30px 20px',
// // // // //   },
// // // // //   inner: {
// // // // //     maxWidth: '1100px',
// // // // //     margin: '0 auto',
// // // // //   },
// // // // //   header: {
// // // // //     marginBottom: '24px',
// // // // //   },
// // // // //   headerTop: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   headerLeft: {
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     gap: '16px',
// // // // //   },
// // // // //   iconWrap: {
// // // // //     width: '50px',
// // // // //     height: '50px',
// // // // //     background: darkMode 
// // // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // //     borderRadius: '14px',
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //     boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
// // // // //   },
// // // // //   icon: {
// // // // //     color: '#fff',
// // // // //     fontSize: '24px',
// // // // //     fontStyle: 'italic',
// // // // //     fontWeight: '700',
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: '1.7rem',
// // // // //     fontWeight: '700',
// // // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // // //     margin: '0 0 4px 0',
// // // // //   },
// // // // //   subtitle: {
// // // // //     fontSize: '0.95rem',
// // // // //     color: darkMode ? '#94a3b8' : '#64748b',
// // // // //     margin: 0,
// // // // //   },
// // // // //   themeToggle: {
// // // // //     width: '44px',
// // // // //     height: '44px',
// // // // //     borderRadius: '12px',
// // // // //     border: 'none',
// // // // //     background: darkMode ? '#334155' : '#fff',
// // // // //     cursor: 'pointer',
// // // // //     fontSize: '1.3rem',
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //     boxShadow: darkMode ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
// // // // //     transition: 'all 0.2s',
// // // // //   },
// // // // //   main: {
// // // // //     display: 'flex',
// // // // //     gap: '24px',
// // // // //     alignItems: 'flex-start',
// // // // //   },
// // // // //   leftCol: {
// // // // //     flex: '1 1 50%',
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     gap: '16px',
// // // // //   },
// // // // //   rightCol: {
// // // // //     flex: '1 1 50%',
// // // // //     background: darkMode ? '#1e293b' : '#fff',
// // // // //     borderRadius: '16px',
// // // // //     padding: '20px',
// // // // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // // //     minHeight: '500px',
// // // // //   },
// // // // //   formsSection: {
// // // // //     background: darkMode ? '#1e293b' : '#fff',
// // // // //     borderRadius: '16px',
// // // // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // // //     overflow: 'hidden',
// // // // //   },
// // // // //   accordionHeader: {
// // // // //     width: '100%',
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //     padding: '16px',
// // // // //     background: 'transparent',
// // // // //     border: 'none',
// // // // //     cursor: 'pointer',
// // // // //     fontFamily: 'inherit',
// // // // //   },
// // // // //   sectionTitle: {
// // // // //     fontSize: '0.75rem',
// // // // //     textTransform: 'uppercase',
// // // // //     letterSpacing: '1.5px',
// // // // //     color: darkMode ? '#94a3b8' : '#64748b',
// // // // //     fontWeight: '600',
// // // // //   },
// // // // //   chevron: {
// // // // //     fontSize: '0.75rem',
// // // // //     color: darkMode ? '#64748b' : '#94a3b8',
// // // // //   },
// // // // //   accordionContent: {
// // // // //     padding: '0 16px 16px',
// // // // //   },
// // // // //   formsGrid: {
// // // // //     display: 'grid',
// // // // //     gridTemplateColumns: 'repeat(2, 1fr)',
// // // // //     gap: '8px',
// // // // //   },
// // // // //   formsHint: {
// // // // //     fontSize: '0.8rem',
// // // // //     color: darkMode ? '#64748b' : '#94a3b8',
// // // // //     margin: '0 0 10px 0',
// // // // //     fontStyle: 'italic',
// // // // //   },
// // // // //   formCard: {
// // // // //     background: darkMode ? '#334155' : '#f8fafc',
// // // // //     border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0',
// // // // //     borderRadius: '10px',
// // // // //     padding: '10px 12px',
// // // // //     cursor: 'pointer',
// // // // //     transition: 'all 0.2s ease',
// // // // //     textAlign: 'left',
// // // // //     fontFamily: 'inherit',
// // // // //   },
// // // // //   formCardSelected: {
// // // // //     borderColor: '#3b82f6',
// // // // //     background: darkMode ? '#1e3a5f' : '#eff6ff',
// // // // //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)',
// // // // //   },
// // // // //   formName: {
// // // // //     fontSize: '0.8rem',
// // // // //     fontWeight: '600',
// // // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // // //     marginBottom: '2px',
// // // // //   },
// // // // //   formFormula: {
// // // // //     fontSize: '0.9rem',
// // // // //     color: darkMode ? '#60a5fa' : '#3b82f6',
// // // // //     fontFamily: 'ui-monospace, monospace',
// // // // //   },
// // // // //   stepMath: {
// // // // //     fontSize: '1.05rem',
// // // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // // //     background: darkMode ? '#334155' : '#fff',
// // // // //     padding: '10px 14px',
// // // // //     borderRadius: '8px',
// // // // //     display: 'inline-block',
// // // // //     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
// // // // //   },
// // // // //   stepTransform: {
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     gap: '10px',
// // // // //     marginTop: '8px',
// // // // //   },
// // // // //   arrow: {
// // // // //     color: '#3b82f6',
// // // // //     fontSize: '1.1rem',
// // // // //   },
// // // // //   finalAnswer: {
// // // // //     background: darkMode 
// // // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // // //     borderRadius: '12px',
// // // // //     padding: '18px 20px',
// // // // //     color: '#fff',
// // // // //     textAlign: 'center',
// // // // //     marginTop: '16px',
// // // // //   },
// // // // //   answerLabel: {
// // // // //     fontSize: '0.7rem',
// // // // //     textTransform: 'uppercase',
// // // // //     letterSpacing: '2px',
// // // // //     opacity: 0.8,
// // // // //     marginBottom: '6px',
// // // // //     fontWeight: '600',
// // // // //   },
// // // // //   answerValue: {
// // // // //     fontSize: '1.5rem',
// // // // //     fontWeight: '700',
// // // // //   },
// // // // //   answerVar: { fontStyle: 'italic' },
// // // // //   answerEq: { opacity: 0.8, margin: '0 6px' },
// // // // //   answerNum: { color: '#fbbf24' },
// // // // //   answerNote: {
// // // // //     fontSize: '0.8rem',
// // // // //     opacity: 0.75,
// // // // //     marginTop: '6px',
// // // // //   },
// // // // // });

// // // // // export default ExponentialEquationSolver;


// // // // import React, { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
// // // // import SolutionPanel from './SolutionPanel';
// // // // import THEME_CSS from './MathSolverThemes';

// // // // /* =====================================================
// // // //    EXPONENTIAL EQUATION SOLVER
   
// // // //    Two exports:
// // // //    - ExponentialSolverEngine: Standalone solver component
// // // //    - ExponentialEquationSolver: Full educational wrapper (default)
   
// // // //    Features:
// // // //    - Integrated SolutionPanel with graph support
// // // //    - Theme support via CSS variables
// // // //    - Dark mode toggle
// // // //    - Full cursor: click-to-place, arrow keys, blinking caret
// // // //    - Insert/delete at cursor position
// // // //    ===================================================== */


// // // // /* =====================================================
// // // //    TOKENIZER
// // // //    ===================================================== */

// // // // const TokenType = {
// // // //   NUMBER: 'NUMBER',
// // // //   VARIABLE: 'VARIABLE',
// // // //   MULTIPLY: 'MULTIPLY',
// // // //   DIVIDE: 'DIVIDE',
// // // //   POWER: 'POWER',
// // // //   LPAREN: 'LPAREN',
// // // //   RPAREN: 'RPAREN',
// // // //   PLUS: 'PLUS',
// // // //   MINUS: 'MINUS',
// // // //   EQUALS: 'EQUALS',
// // // //   E: 'E',
// // // // };

// // // // function tokenize(input) {
// // // //   const tokens = [];
// // // //   let i = 0;
  
// // // //   while (i < input.length) {
// // // //     const char = input[i];
    
// // // //     if (/\s/.test(char)) {
// // // //       i++;
// // // //       continue;
// // // //     }
    
// // // //     if (/[0-9]/.test(char) || (char === '.' && /[0-9]/.test(input[i + 1]))) {
// // // //       let num = '';
// // // //       while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) {
// // // //         num += input[i];
// // // //         i++;
// // // //       }
// // // //       tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) });
// // // //       continue;
// // // //     }
    
// // // //     if (char === 'e' && (i + 1 >= input.length || !/[a-zA-Z]/.test(input[i + 1]))) {
// // // //       tokens.push({ type: TokenType.E });
// // // //       i++;
// // // //       continue;
// // // //     }
    
// // // //     if (/[a-zA-Z]/.test(char)) {
// // // //       tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
// // // //       i++;
// // // //       continue;
// // // //     }
    
// // // //     const charMap = {
// // // //       '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY,
// // // //       '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE,
// // // //       '^': TokenType.POWER,
// // // //       '(': TokenType.LPAREN, ')': TokenType.RPAREN,
// // // //       '+': TokenType.PLUS, '-': TokenType.MINUS,
// // // //       '=': TokenType.EQUALS,
// // // //     };
    
// // // //     if (charMap[char]) {
// // // //       tokens.push({ type: charMap[char] });
// // // //       i++;
// // // //       continue;
// // // //     }
    
// // // //     i++;
// // // //   }
  
// // // //   return tokens;
// // // // }

// // // // /* =====================================================
// // // //    PARSER
// // // //    ===================================================== */

// // // // function parse(tokens) {
// // // //   let pos = 0;
  
// // // //   const peek = () => tokens[pos];
// // // //   const consume = (expectedType) => {
// // // //     const token = tokens[pos];
// // // //     if (expectedType && token?.type !== expectedType) {
// // // //       throw new Error(`Expected ${expectedType} but got ${token?.type}`);
// // // //     }
// // // //     pos++;
// // // //     return token;
// // // //   };
  
// // // //   const parseEquation = () => {
// // // //     const left = parseExpression();
// // // //     if (peek()?.type === TokenType.EQUALS) {
// // // //       consume();
// // // //       return { type: 'EQUATION', left, right: parseExpression() };
// // // //     }
// // // //     return left;
// // // //   };
  
// // // //   const parseExpression = () => parseAdditive();
  
// // // //   const parseAdditive = () => {
// // // //     let left = parseMultiplicative();
// // // //     while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) {
// // // //       const op = consume().type;
// // // //       left = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left, right: parseMultiplicative() };
// // // //     }
// // // //     return left;
// // // //   };
  
// // // //   const parseMultiplicative = () => {
// // // //     let left = parsePower();
// // // //     while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) {
// // // //       const op = consume().type;
// // // //       left = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left, right: parsePower() };
// // // //     }
// // // //     return left;
// // // //   };
  
// // // //   const parsePower = () => {
// // // //     let base = parseUnary();
// // // //     if (peek()?.type === TokenType.POWER) {
// // // //       consume();
// // // //       return { type: 'POWER', base, exponent: parsePower() };
// // // //     }
// // // //     return base;
// // // //   };
  
// // // //   const parseUnary = () => {
// // // //     if (peek()?.type === TokenType.MINUS) {
// // // //       consume();
// // // //       return { type: 'NEGATE', operand: parseUnary() };
// // // //     }
// // // //     return parsePrimary();
// // // //   };
  
// // // //   const parsePrimary = () => {
// // // //     const token = peek();
// // // //     if (token?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: token.value }; }
// // // //     if (token?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: token.value }; }
// // // //     if (token?.type === TokenType.E) { consume(); return { type: 'E' }; }
// // // //     if (token?.type === TokenType.LPAREN) {
// // // //       consume();
// // // //       const expr = parseExpression();
// // // //       consume(TokenType.RPAREN);
// // // //       return expr;
// // // //     }
// // // //     throw new Error(`Unexpected token: ${token?.type}`);
// // // //   };
  
// // // //   const ast = parseEquation();
// // // //   if (pos < tokens.length) throw new Error('Unexpected tokens at end');
// // // //   return ast;
// // // // }

// // // // /* =====================================================
// // // //    HELPERS
// // // //    ===================================================== */

// // // // function formatNumber(num) {
// // // //   if (Number.isInteger(num)) return String(num);
// // // //   return (Math.round(num * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, '');
// // // // }

// // // // function hasVariableInExponent(node) {
// // // //   if (!node) return false;
// // // //   if (node.type === 'POWER') return containsVariable(node.exponent);
// // // //   if (['MULTIPLY', 'DIVIDE', 'ADD', 'SUBTRACT'].includes(node.type)) {
// // // //     return hasVariableInExponent(node.left) || hasVariableInExponent(node.right);
// // // //   }
// // // //   return false;
// // // // }

// // // // function containsVariable(node) {
// // // //   if (!node) return false;
// // // //   if (node.type === 'VARIABLE') return true;
// // // //   if (node.type === 'NUMBER' || node.type === 'E') return false;
// // // //   if (node.type === 'NEGATE') return containsVariable(node.operand);
// // // //   if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
// // // //   return containsVariable(node.left) || containsVariable(node.right);
// // // // }

// // // // function evaluateConstant(node) {
// // // //   if (!node) return null;
// // // //   switch (node.type) {
// // // //     case 'NUMBER': return node.value;
// // // //     case 'E': return Math.E;
// // // //     case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
// // // //     case 'ADD': case 'SUBTRACT': case 'MULTIPLY': case 'DIVIDE': case 'POWER': {
// // // //       const l = evaluateConstant(node.left || node.base);
// // // //       const r = evaluateConstant(node.right || node.exponent);
// // // //       if (l === null || r === null) return null;
// // // //       if (node.type === 'ADD') return l + r;
// // // //       if (node.type === 'SUBTRACT') return l - r;
// // // //       if (node.type === 'MULTIPLY') return l * r;
// // // //       if (node.type === 'DIVIDE') return r !== 0 ? l / r : null;
// // // //       if (node.type === 'POWER') return Math.pow(l, r);
// // // //       return null;
// // // //     }
// // // //     default: return null;
// // // //   }
// // // // }

// // // // function extractCoefficient(node) {
// // // //   if (node.type !== 'MULTIPLY') return { coefficient: null, exponential: null };
// // // //   if (node.left.type === 'POWER' && hasVariableInExponent(node.left)) {
// // // //     return { coefficient: node.right, exponential: node.left };
// // // //   }
// // // //   if (node.right.type === 'POWER' && hasVariableInExponent(node.right)) {
// // // //     return { coefficient: node.left, exponential: node.right };
// // // //   }
// // // //   return { coefficient: null, exponential: null };
// // // // }

// // // // function extractAdditiveConstant(node) {
// // // //   if (node.type !== 'ADD' && node.type !== 'SUBTRACT') {
// // // //     return { exponential: null, constant: null, isAdd: false };
// // // //   }
// // // //   const isAdd = node.type === 'ADD';
// // // //   if (hasVariableInExponent(node.left) && !containsVariable(node.right)) {
// // // //     const constVal = evaluateConstant(node.right);
// // // //     if (node.left.type === 'POWER') {
// // // //       return { exponential: node.left, constant: constVal, isAdd };
// // // //     }
// // // //   }
// // // //   if (hasVariableInExponent(node.right) && !containsVariable(node.left) && isAdd) {
// // // //     const constVal = evaluateConstant(node.left);
// // // //     if (node.right.type === 'POWER') {
// // // //       return { exponential: node.right, constant: constVal, isAdd };
// // // //     }
// // // //   }
// // // //   return { exponential: null, constant: null, isAdd: false };
// // // // }

// // // // function findPerfectPower(base, result) {
// // // //   if (result === 1) return 0;
// // // //   if (result === base) return 1;
// // // //   let power = 0, current = 1;
// // // //   while (current < result && power < 100) {
// // // //     current *= base;
// // // //     power++;
// // // //     if (current === result) return power;
// // // //   }
// // // //   power = -1;
// // // //   current = 1 / base;
// // // //   while (power > -20) {
// // // //     if (Math.abs(current - result) < 1e-10) return power;
// // // //     current /= base;
// // // //     power--;
// // // //   }
// // // //   return null;
// // // // }

// // // // function parseLinearExponent(node) {
// // // //   if (node.type === 'VARIABLE') {
// // // //     return { variable: node.name, coefficient: 1, constant: 0 };
// // // //   }
// // // //   if (node.type === 'MULTIPLY') {
// // // //     const lv = evaluateConstant(node.left), rv = evaluateConstant(node.right);
// // // //     if (lv !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: lv, constant: 0 };
// // // //     if (rv !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rv, constant: 0 };
// // // //   }
// // // //   if (node.type === 'ADD' || node.type === 'SUBTRACT') {
// // // //     const leftLinear = parseLinearExponent(node.left);
// // // //     const rightConst = evaluateConstant(node.right);
// // // //     if (leftLinear && rightConst !== null) {
// // // //       return {
// // // //         variable: leftLinear.variable,
// // // //         coefficient: leftLinear.coefficient,
// // // //         constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst)
// // // //       };
// // // //     }
// // // //     const rightLinear = parseLinearExponent(node.right);
// // // //     const leftConst = evaluateConstant(node.left);
// // // //     if (rightLinear && leftConst !== null && node.type === 'ADD') {
// // // //       return {
// // // //         variable: rightLinear.variable,
// // // //         coefficient: rightLinear.coefficient,
// // // //         constant: rightLinear.constant + leftConst
// // // //       };
// // // //     }
// // // //   }
// // // //   return null;
// // // // }

// // // // /* =====================================================
// // // //    AST TO MATH DISPLAY
// // // //    ===================================================== */

// // // // function astToMathDisplay(node, key = 'root', darkMode = false) {
// // // //   if (!node) return null;
  
// // // //   const s = getMathStyles(darkMode);
  
// // // //   const wrap = (n, k) => {
// // // //     if (n.type === 'ADD' || n.type === 'SUBTRACT') {
// // // //       return <span key={k}>({astToMathDisplay(n, k, darkMode)})</span>;
// // // //     }
// // // //     return astToMathDisplay(n, k, darkMode);
// // // //   };
  
// // // //   switch (node.type) {
// // // //     case 'NUMBER': return <span key={key} style={s.number}>{formatNumber(node.value)}</span>;
// // // //     case 'VARIABLE': return <span key={key} style={s.variable}>{node.name}</span>;
// // // //     case 'E': return <span key={key} style={s.euler}>e</span>;
// // // //     case 'NEGATE': return <span key={key}>{'\u2212'}{astToMathDisplay(node.operand, `${key}-neg`, darkMode)}</span>;
// // // //     case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> + </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // // //     case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> {'\u2212'} </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // // //     case 'MULTIPLY': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> {'\u00B7'} </span>{wrap(node.right, `${key}-r`)}</span>;
// // // //     case 'DIVIDE': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> / </span>{wrap(node.right, `${key}-r`)}</span>;
// // // //     case 'POWER': return <span key={key} style={s.power}>{wrap(node.base, `${key}-base`)}<sup style={s.sup}>{astToMathDisplay(node.exponent, `${key}-exp`, darkMode)}</sup></span>;
// // // //     case 'EQUATION': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.equals}> = </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // // //     default: return null;
// // // //   }
// // // // }

// // // // const getMathStyles = (darkMode) => ({
// // // //   number: { color: darkMode ? '#e2e8f0' : '#1e3a5f' },
// // // //   variable: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '500' },
// // // //   euler: { fontStyle: 'italic', color: darkMode ? '#22d3ee' : '#0891b2' },
// // // //   op: { color: darkMode ? '#94a3b8' : '#64748b', margin: '0 2px' },
// // // //   equals: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
// // // //   power: { display: 'inline-flex', alignItems: 'baseline' },
// // // //   sup: { fontSize: '0.7em', color: darkMode ? '#60a5fa' : '#3b82f6', marginLeft: '1px' },
// // // // });

// // // // /* =====================================================
// // // //    SOLVER
// // // //    ===================================================== */

// // // // function solveExponentialEquation(ast) {
// // // //   const steps = [];
// // // //   let graphData = null;
  
// // // //   if (ast.type !== 'EQUATION') {
// // // //     throw new Error('Input must be an equation (use = sign)');
// // // //   }
  
// // // //   let { left, right } = ast;
// // // //   const leftHasVar = hasVariableInExponent(left);
// // // //   const rightHasVar = hasVariableInExponent(right);
  
// // // //   let expSide, constSide;
  
// // // //   if (leftHasVar && !rightHasVar) {
// // // //     expSide = left;
// // // //     constSide = right;
// // // //   } else if (rightHasVar && !leftHasVar) {
// // // //     expSide = right;
// // // //     constSide = left;
// // // //     steps.push({
// // // //       rule: 'Rearrange Equation',
// // // //       description: 'Move the exponential term to the left side for clarity.',
// // // //       before: ast,
// // // //       after: { type: 'EQUATION', left: expSide, right: constSide }
// // // //     });
// // // //   } else if (leftHasVar && rightHasVar) {
// // // //     throw new Error('Equations with exponentials on both sides require logarithms on both sides. Coming soon!');
// // // //   } else {
// // // //     throw new Error('No variable found in any exponent');
// // // //   }
  
// // // //   const constValue = evaluateConstant(constSide);
// // // //   if (constValue !== null && constSide.type !== 'NUMBER') {
// // // //     const newConstSide = { type: 'NUMBER', value: constValue };
// // // //     steps.push({
// // // //       rule: 'Evaluate Constant',
// // // //       description: 'Simplify the right side to a single number.',
// // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // //       after: { type: 'EQUATION', left: expSide, right: newConstSide }
// // // //     });
// // // //     constSide = newConstSide;
// // // //   }
  
// // // //   if (expSide.type === 'MULTIPLY') {
// // // //     const { coefficient, exponential } = extractCoefficient(expSide);
// // // //     if (coefficient && exponential) {
// // // //       const coeffValue = evaluateConstant(coefficient);
// // // //       const constVal = evaluateConstant(constSide);
// // // //       if (coeffValue !== null && constVal !== null) {
// // // //         const newConst = { type: 'NUMBER', value: constVal / coeffValue };
// // // //         steps.push({
// // // //           rule: 'Isolate Exponential Term',
// // // //           description: `Divide both sides by ${formatNumber(coeffValue)} to isolate the exponential.`,
// // // //           before: { type: 'EQUATION', left: expSide, right: constSide },
// // // //           after: { type: 'EQUATION', left: exponential, right: newConst }
// // // //         });
// // // //         expSide = exponential;
// // // //         constSide = newConst;
// // // //       }
// // // //     }
// // // //   }
  
// // // //   if (expSide.type === 'ADD' || expSide.type === 'SUBTRACT') {
// // // //     const { exponential, constant, isAdd } = extractAdditiveConstant(expSide);
// // // //     if (exponential && constant !== null) {
// // // //       const constVal = evaluateConstant(constSide);
// // // //       if (constVal !== null) {
// // // //         const newConstVal = isAdd ? constVal - constant : constVal + constant;
// // // //         const newConst = { type: 'NUMBER', value: newConstVal };
// // // //         const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
// // // //         steps.push({
// // // //           rule: 'Isolate Exponential Term',
// // // //           description: `${action} both sides.`,
// // // //           before: { type: 'EQUATION', left: expSide, right: constSide },
// // // //           after: { type: 'EQUATION', left: exponential, right: newConst }
// // // //         });
// // // //         expSide = exponential;
// // // //         constSide = newConst;
// // // //       }
// // // //     }
// // // //   }
  
// // // //   if (expSide.type !== 'POWER') {
// // // //     throw new Error('Could not isolate exponential term');
// // // //   }
  
// // // //   const base = expSide.base;
// // // //   const exponent = expSide.exponent;
// // // //   const resultValue = evaluateConstant(constSide);
  
// // // //   if (resultValue === null) throw new Error('Right side must evaluate to a number');
// // // //   if (resultValue <= 0) throw new Error('Exponential equations cannot equal zero or negative numbers');
  
// // // //   const isNaturalBase = base.type === 'E';
// // // //   const baseValue = isNaturalBase ? Math.E : evaluateConstant(base);
  
// // // //   if (baseValue === null) throw new Error('Base must be a constant');
// // // //   if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');
  
// // // //   let perfectPower = null;
// // // //   if (!isNaturalBase && Number.isInteger(baseValue) && Number.isInteger(resultValue)) {
// // // //     perfectPower = findPerfectPower(baseValue, resultValue);
// // // //   }
  
// // // //   if (exponent.type === 'VARIABLE') {
// // // //     const varName = exponent.name;
    
// // // //     if (perfectPower !== null) {
// // // //       steps.push({
// // // //         rule: 'Recognize Perfect Power',
// // // //         description: `${formatNumber(resultValue)} = ${formatNumber(baseValue)} raised to power ${perfectPower}.`,
// // // //         before: { type: 'EQUATION', left: expSide, right: constSide },
// // // //         after: { type: 'EQUATION', left: expSide, right: { type: 'POWER', base: { type: 'NUMBER', value: baseValue }, exponent: { type: 'NUMBER', value: perfectPower } } }
// // // //       });
// // // //       steps.push({
// // // //         rule: 'Match Bases',
// // // //         description: `Same base (${formatNumber(baseValue)}) means exponents are equal.`,
// // // //         before: null,
// // // //         after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: perfectPower } }
// // // //       });
      
// // // //       graphData = {
// // // //         type: 'exponential',
// // // //         base: baseValue,
// // // //         solution: { x: perfectPower, y: resultValue }
// // // //       };
      
// // // //       return { steps, solution: { variable: varName, value: perfectPower, exact: true }, graphData };
// // // //     }
    
// // // //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
// // // //     steps.push({
// // // //       rule: 'Apply Logarithm',
// // // //       description: `Take ${logName} of both sides.`,
// // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // //       after: null
// // // //     });
    
// // // //     steps.push({
// // // //       rule: 'Simplify',
// // // //       description: isNaturalBase ? 'ln(e\u02E3) = x' : 'log base b of b\u02E3 = x',
// // // //       before: null,
// // // //       after: null
// // // //     });
    
// // // //     const solution = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
    
// // // //     steps.push({
// // // //       rule: 'Calculate',
// // // //       description: isNaturalBase 
// // // //         ? `ln(${formatNumber(resultValue)}) \u2248 ${formatNumber(solution)}`
// // // //         : `log(${formatNumber(resultValue)}) \u00F7 log(${formatNumber(baseValue)}) \u2248 ${formatNumber(solution)}`,
// // // //       before: null,
// // // //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: solution } }
// // // //     });
    
// // // //     graphData = {
// // // //       type: 'exponential',
// // // //       base: baseValue,
// // // //       solution: { x: solution, y: resultValue }
// // // //     };
    
// // // //     return { steps, solution: { variable: varName, value: solution, exact: false }, graphData };
// // // //   }
  
// // // //   const linearInfo = parseLinearExponent(exponent);
// // // //   if (linearInfo) {
// // // //     const { variable, coefficient, constant } = linearInfo;
// // // //     const logResult = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
// // // //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
    
// // // //     steps.push({
// // // //       rule: 'Apply Logarithm',
// // // //       description: `Take ${logName} of both sides to bring down the exponent.`,
// // // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // // //       after: null
// // // //     });
    
// // // //     const expStr = `${coefficient === 1 ? '' : coefficient}${variable}${constant >= 0 ? ' + ' + constant : ' \u2212 ' + Math.abs(constant)}`;
// // // //     steps.push({
// // // //       rule: 'Linear Equation',
// // // //       description: `Now solve: ${expStr} = ${formatNumber(logResult)}`,
// // // //       before: null,
// // // //       after: null
// // // //     });
    
// // // //     const subtracted = logResult - constant;
// // // //     const solution = subtracted / coefficient;
    
// // // //     steps.push({
// // // //       rule: 'Solve for Variable',
// // // //       description: coefficient !== 1 
// // // //         ? `Subtract ${formatNumber(constant)}, then divide by ${coefficient}.`
// // // //         : `Subtract ${formatNumber(constant)} from both sides.`,
// // // //       before: null,
// // // //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
// // // //     });
    
// // // //     graphData = {
// // // //       type: 'exponential',
// // // //       base: baseValue,
// // // //       solution: { x: solution, y: resultValue }
// // // //     };
    
// // // //     return { steps, solution: { variable, value: solution, exact: false }, graphData };
// // // //   }
  
// // // //   throw new Error('Exponent form not supported');
// // // // }

// // // // /* =====================================================
// // // //    CURSOR STYLES (injected once)
// // // //    ===================================================== */

// // // // const CURSOR_CSS = `
// // // //   @keyframes sp-blink {
// // // //     0%, 100% { opacity: 1; }
// // // //     50% { opacity: 0; }
// // // //   }
// // // //   .ee-caret {
// // // //     display: inline-block;
// // // //     width: 2px;
// // // //     height: 1.2em;
// // // //     background: #fbbf24;
// // // //     animation: sp-blink 1s step-end infinite;
// // // //     vertical-align: text-bottom;
// // // //     margin: 0 -1px;
// // // //     border-radius: 1px;
// // // //   }
// // // //   .ee-display:focus {
// // // //     outline: none;
// // // //   }
// // // //   .ee-display:focus .ee-caret {
// // // //     animation: sp-blink 1s step-end infinite;
// // // //   }
// // // //   .ee-display:not(:focus) .ee-caret {
// // // //     opacity: 0.4;
// // // //     animation: none;
// // // //   }
// // // //   .ee-char {
// // // //     cursor: text;
// // // //     position: relative;
// // // //   }
// // // //   .ee-char:hover {
// // // //     background: rgba(255,255,255,0.08);
// // // //     border-radius: 2px;
// // // //   }
// // // //   .ee-sup-group {
// // // //     display: inline-flex;
// // // //     align-items: baseline;
// // // //     cursor: text;
// // // //   }
// // // // `;

// // // // /* =====================================================
// // // //    ENGINE COMPONENT (Standalone Solver)
// // // //    ===================================================== */

// // // // export const ExponentialSolverEngine = forwardRef(({ 
// // // //   compact = false,
// // // //   style = {},
// // // //   darkMode = false,
// // // //   onResultChange = null,
// // // //   onClear = null
// // // // }, ref) => {
// // // //   const [expression, setExpression] = useState([]);
// // // //   const [cursorPos, setCursorPos] = useState(0);
// // // //   const [result, setResult] = useState(null);
// // // //   const [error, setError] = useState(null);
// // // //   const [focused, setFocused] = useState(false);
// // // //   const displayRef = useRef(null);

// // // //   const variables = ['x', 'y', 'n'];
// // // //   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
// // // //   const operators = ['^', '\u00D7', '\u00F7', '+', '-', '='];

// // // //   useImperativeHandle(ref, () => ({
// // // //     loadEquation: (eqString) => {
// // // //       const chars = eqString.split('');
// // // //       setExpression(chars);
// // // //       setCursorPos(chars.length);
// // // //       setResult(null);
// // // //       setError(null);
// // // //       if (onResultChange) onResultChange(null);
// // // //     },
// // // //     clear: () => {
// // // //       setExpression([]);
// // // //       setCursorPos(0);
// // // //       setResult(null);
// // // //       setError(null);
// // // //       if (onResultChange) onResultChange(null);
// // // //     },
// // // //     getExpression: () => expression.join(''),
// // // //     getResult: () => result
// // // //   }));

// // // //   const insertAt = useCallback((item) => {
// // // //     setExpression(prev => {
// // // //       const next = [...prev];
// // // //       next.splice(cursorPos, 0, item);
// // // //       return next;
// // // //     });
// // // //     setCursorPos(prev => prev + 1);
// // // //     setResult(null);
// // // //     setError(null);
// // // //   }, [cursorPos]);

// // // //   const deleteAt = useCallback((pos) => {
// // // //     if (pos < 0 || pos >= expression.length) return;
// // // //     setExpression(prev => {
// // // //       const next = [...prev];
// // // //       next.splice(pos, 1);
// // // //       return next;
// // // //     });
// // // //     setCursorPos(pos);
// // // //     setResult(null);
// // // //     setError(null);
// // // //   }, [expression.length]);

// // // //   const clearAll = useCallback(() => {
// // // //     setExpression([]);
// // // //     setCursorPos(0);
// // // //     setResult(null);
// // // //     setError(null);
// // // //     if (onClear) onClear();
// // // //   }, [onClear]);

// // // //   const solve = useCallback(() => {
// // // //     try {
// // // //       const exprString = expression.join('');
// // // //       const tokens = tokenize(exprString);
// // // //       const ast = parse(tokens);
// // // //       const solveResult = solveExponentialEquation(ast);
      
// // // //       setResult(solveResult);
// // // //       setError(null);
// // // //       if (onResultChange) onResultChange(solveResult);
// // // //     } catch (e) {
// // // //       setError(e.message);
// // // //       setResult(null);
// // // //       if (onResultChange) onResultChange(null);
// // // //     }
// // // //   }, [expression, onResultChange]);

// // // //   const TYPEABLE = new Set('0123456789.xynXYNeE^+-=*/()\u00D7\u00F7');
// // // //   const KEY_MAP = { '*': '\u00D7', '/': '\u00F7' };

// // // //   const handleKeyDown = useCallback((e) => {
// // // //     if (e.ctrlKey || e.metaKey || e.altKey) return;

// // // //     switch (e.key) {
// // // //       case 'ArrowLeft':
// // // //         e.preventDefault();
// // // //         setCursorPos(prev => Math.max(0, prev - 1));
// // // //         return;
// // // //       case 'ArrowRight':
// // // //         e.preventDefault();
// // // //         setCursorPos(prev => Math.min(expression.length, prev + 1));
// // // //         return;
// // // //       case 'Home':
// // // //         e.preventDefault();
// // // //         setCursorPos(0);
// // // //         return;
// // // //       case 'End':
// // // //         e.preventDefault();
// // // //         setCursorPos(expression.length);
// // // //         return;
// // // //       case 'Backspace':
// // // //         e.preventDefault();
// // // //         if (cursorPos > 0) deleteAt(cursorPos - 1);
// // // //         return;
// // // //       case 'Delete':
// // // //         e.preventDefault();
// // // //         if (cursorPos < expression.length) deleteAt(cursorPos);
// // // //         return;
// // // //       case 'Enter':
// // // //         e.preventDefault();
// // // //         if (expression.length > 0) solve();
// // // //         return;
// // // //       default:
// // // //         break;
// // // //     }

// // // //     const ch = KEY_MAP[e.key] || e.key;
// // // //     if (ch.length === 1 && TYPEABLE.has(ch)) {
// // // //       e.preventDefault();
// // // //       insertAt(/[A-Z]/.test(ch) ? ch.toLowerCase() : ch);
// // // //     }
// // // //   }, [expression.length, cursorPos, deleteAt, insertAt, solve]);

// // // //   const handleDisplayClick = useCallback((e) => {
// // // //     if (displayRef.current) displayRef.current.focus();
// // // //     const charEl = e.target.closest('[data-idx]');
// // // //     if (charEl) {
// // // //       const idx = parseInt(charEl.getAttribute('data-idx'), 10);
// // // //       const rect = charEl.getBoundingClientRect();
// // // //       const clickX = e.clientX - rect.left;
// // // //       const midpoint = rect.width / 2;
// // // //       setCursorPos(clickX < midpoint ? idx : idx + 1);
// // // //     } else {
// // // //       setCursorPos(expression.length);
// // // //     }
// // // //   }, [expression.length]);

// // // //   /* ---- Build display elements with cursor ---- */
// // // //   const buildDisplayElements = () => {
// // // //     const expr = expression;
// // // //     if (expr.length === 0) {
// // // //       if (focused) {
// // // //         return <span className="ee-caret" />;
// // // //       }
// // // //       return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
// // // //     }
    
// // // //     const elements = [];
// // // //     const eStyles = getEngineStyles(darkMode);
    
// // // //     // Pre-compute superscript groups: maps base index -> { start, end } of exponent chars
// // // //     // A group is: char at i, caret '^' at i+1, then exponent chars from i+2..j-1
// // // //     const supGroups = {};
// // // //     let skip = new Set();
    
// // // //     let i = 0;
// // // //     while (i < expr.length) {
// // // //       if (i + 1 < expr.length && expr[i + 1] === '^') {
// // // //         const baseIdx = i;
// // // //         const caretIdx = i + 1;
// // // //         let j = i + 2;
// // // //         let expIndices = [];
        
// // // //         if (j < expr.length && expr[j] === '(') {
// // // //           let depth = 1;
// // // //           expIndices.push(j);
// // // //           j++;
// // // //           while (j < expr.length && depth > 0) {
// // // //             if (expr[j] === '(') depth++;
// // // //             if (expr[j] === ')') depth--;
// // // //             expIndices.push(j);
// // // //             j++;
// // // //           }
// // // //         } else {
// // // //           while (j < expr.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expr[j]) && expr[j] !== '=') {
// // // //             expIndices.push(j);
// // // //             j++;
// // // //           }
// // // //         }
        
// // // //         if (expIndices.length > 0) {
// // // //           supGroups[baseIdx] = { caretIdx, expIndices };
// // // //           skip.add(caretIdx);
// // // //           expIndices.forEach(idx => skip.add(idx));
// // // //           i = j;
// // // //           continue;
// // // //         }
// // // //       }
// // // //       i++;
// // // //     }
    
// // // //     const renderCaret = (pos) => {
// // // //       if (cursorPos === pos && focused) {
// // // //         return <span key={`caret-${pos}`} className="ee-caret" />;
// // // //       }
// // // //       return null;
// // // //     };
    
// // // //     const charStyle = (ch) => {
// // // //       if (ch === '\u00D7' || ch === '\u00F7' || ch === '+' || ch === '-') return eStyles.displayOp;
// // // //       if (ch === '=') return eStyles.displayEquals;
// // // //       if (ch === 'e') return eStyles.displayEuler;
// // // //       return undefined;
// // // //     };
    
// // // //     const displayChar = (ch) => {
// // // //       if (ch === '\u00D7') return ' \u00B7 ';
// // // //       if (ch === '\u00F7') return ' / ';
// // // //       if (ch === '+') return ' + ';
// // // //       if (ch === '-') return ' \u2212 ';
// // // //       if (ch === '=') return ' = ';
// // // //       return ch;
// // // //     };
    
// // // //     i = 0;
// // // //     while (i < expr.length) {
// // // //       if (skip.has(i)) { i++; continue; }
      
// // // //       if (supGroups[i]) {
// // // //         const group = supGroups[i];
// // // //         const baseChar = expr[i];
// // // //         const expIndices = group.expIndices;
        
// // // //         // Caret before the base char
// // // //         elements.push(renderCaret(i));
        
// // // //         elements.push(
// // // //           <span key={`sup-${i}`} className="ee-sup-group">
// // // //             <span 
// // // //               className="ee-char" 
// // // //               data-idx={i}
// // // //               style={baseChar === 'e' ? eStyles.displayEuler : undefined}
// // // //             >
// // // //               {baseChar}
// // // //             </span>
// // // //             <sup style={eStyles.displaySup}>
// // // //               {/* caret inside superscript, before first exp char */}
// // // //               {renderCaret(group.caretIdx + 1)}
// // // //               {expIndices.map((idx, ei) => (
// // // //                 <React.Fragment key={idx}>
// // // //                   <span className="ee-char" data-idx={idx}>
// // // //                     {displayChar(expr[idx])}
// // // //                   </span>
// // // //                   {renderCaret(idx + 1)}
// // // //                 </React.Fragment>
// // // //               ))}
// // // //             </sup>
// // // //           </span>
// // // //         );
        
// // // //         i = expIndices[expIndices.length - 1] + 1;
// // // //         continue;
// // // //       }
      
// // // //       elements.push(renderCaret(i));
// // // //       elements.push(
// // // //         <span 
// // // //           key={`ch-${i}`} 
// // // //           className="ee-char" 
// // // //           data-idx={i}
// // // //           style={charStyle(expr[i])}
// // // //         >
// // // //           {displayChar(expr[i])}
// // // //         </span>
// // // //       );
// // // //       i++;
// // // //     }
    
// // // //     // Caret at the very end
// // // //     elements.push(renderCaret(expression.length));
    
// // // //     return elements;
// // // //   };

// // // //   const p = compact ? 0.85 : 1;
// // // //   const styles = getEngineStyles(darkMode);

// // // //   return (
// // // //     <div style={{ ...styles.container, ...style }}>
// // // //       <style>{CURSOR_CSS}</style>
      
// // // //       <div 
// // // //         ref={displayRef}
// // // //         className="ee-display"
// // // //         tabIndex={0}
// // // //         style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px`, cursor: 'text' }}
// // // //         onClick={handleDisplayClick}
// // // //         onKeyDown={handleKeyDown}
// // // //         onFocus={() => setFocused(true)}
// // // //         onBlur={() => setFocused(false)}
// // // //       >
// // // //         {buildDisplayElements()}
// // // //       </div>
      
// // // //       {error && (
// // // //         <div style={styles.error}>{error}</div>
// // // //       )}
      
// // // //       <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
// // // //         <div style={styles.row}>
// // // //           <span style={styles.label}>Var</span>
// // // //           <div style={styles.btnGroup}>
// // // //             {variables.map((v) => (
// // // //               <button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => insertAt(v)}>{v}</button>
// // // //             ))}
// // // //           </div>
// // // //         </div>
        
// // // //         <div style={styles.row}>
// // // //           <span style={styles.label}>Num</span>
// // // //           <div style={styles.btnGroup}>
// // // //             {numbers.map((n) => (
// // // //               <button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => insertAt(n)}>{n}</button>
// // // //             ))}
// // // //           </div>
// // // //         </div>
        
// // // //         <div style={styles.row}>
// // // //           <span style={styles.label}>Op</span>
// // // //           <div style={styles.btnGroup}>
// // // //             {operators.map((op) => (
// // // //               <button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>
// // // //                 {op === '^' ? 'x\u207F' : op}
// // // //               </button>
// // // //             ))}
// // // //           </div>
// // // //         </div>
        
// // // //         <div style={styles.row}>
// // // //           <span style={styles.label}></span>
// // // //           <div style={styles.btnGroup}>
// // // //             <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('e')}>e</button>
// // // //             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt('(')}>(</button>
// // // //             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt(')')}>)</button>
// // // //           </div>
// // // //         </div>
        
// // // //         <div style={styles.actions}>
// // // //           <button style={{ ...styles.btnAction, ...styles.btnClear }} onClick={clearAll}>Clear</button>
// // // //           <button style={{ ...styles.btnAction, ...styles.btnBack }} onClick={() => { if (cursorPos > 0) deleteAt(cursorPos - 1); }}>{'\u232B'}</button>
// // // //           <button 
// // // //             style={{ ...styles.btnAction, ...styles.btnSolve, ...(expression.length === 0 ? styles.btnDisabled : {}) }} 
// // // //             onClick={solve}
// // // //             disabled={expression.length === 0}
// // // //           >
// // // //             Solve
// // // //           </button>
// // // //         </div>
// // // //       </div>
      
// // // //       {result && result.solution && (
// // // //         <div style={styles.solution}>
// // // //           <span style={styles.solVar}>{result.solution.variable}</span>
// // // //           <span style={styles.solEq}> = </span>
// // // //           <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
// // // //           {!result.solution.exact && <span style={styles.solApprox}> {'\u2248'}</span>}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // });

// // // // ExponentialSolverEngine.displayName = 'ExponentialSolverEngine';

// // // // const getEngineStyles = (darkMode) => ({
// // // //   container: {
// // // //     background: darkMode ? '#1e293b' : '#fff',
// // // //     borderRadius: '16px',
// // // //     padding: '20px',
// // // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // //   },
// // // //   display: {
// // // //     background: darkMode 
// // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // //     borderRadius: '12px',
// // // //     padding: '18px 22px',
// // // //     minHeight: '54px',
// // // //     marginBottom: '16px',
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     flexWrap: 'wrap',
// // // //     fontSize: '1.4rem',
// // // //     color: '#fff',
// // // //     fontWeight: '500',
// // // //   },
// // // //   placeholder: {
// // // //     color: 'rgba(255,255,255,0.5)',
// // // //     fontStyle: 'italic',
// // // //     fontSize: '0.95rem',
// // // //   },
// // // //   displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px' },
// // // //   displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
// // // //   displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
// // // //   displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
// // // //   error: {
// // // //     background: darkMode ? '#451a1a' : '#fef2f2',
// // // //     border: darkMode ? '1px solid #7f1d1d' : '1px solid #fecaca',
// // // //     borderRadius: '8px',
// // // //     padding: '10px 14px',
// // // //     marginBottom: '12px',
// // // //     color: darkMode ? '#fca5a5' : '#dc2626',
// // // //     fontSize: '0.85rem',
// // // //   },
// // // //   builder: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     gap: '10px',
// // // //   },
// // // //   row: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '10px',
// // // //   },
// // // //   label: {
// // // //     fontSize: '0.65rem',
// // // //     textTransform: 'uppercase',
// // // //     letterSpacing: '0.5px',
// // // //     color: darkMode ? '#64748b' : '#94a3b8',
// // // //     width: '28px',
// // // //     flexShrink: 0,
// // // //     fontWeight: '600',
// // // //   },
// // // //   btnGroup: {
// // // //     display: 'flex',
// // // //     flexWrap: 'wrap',
// // // //     gap: '6px',
// // // //   },
// // // //   btn: {
// // // //     fontSize: '0.95rem',
// // // //     padding: '8px 12px',
// // // //     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
// // // //     background: darkMode ? '#334155' : '#f8fafc',
// // // //     color: darkMode ? '#e2e8f0' : '#334155',
// // // //     cursor: 'pointer',
// // // //     borderRadius: '8px',
// // // //     minWidth: '36px',
// // // //     fontFamily: 'inherit',
// // // //     fontWeight: '500',
// // // //     transition: 'all 0.15s',
// // // //   },
// // // //   btnVar: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600' },
// // // //   btnNum: { color: darkMode ? '#f1f5f9' : '#1e293b' },
// // // //   btnOp: { color: darkMode ? '#cbd5e1' : '#64748b', fontWeight: '600' },
// // // //   btnSpecial: { color: darkMode ? '#22d3ee' : '#0891b2', fontWeight: '600', fontStyle: 'italic' },
// // // //   btnBracket: { fontSize: '1.1rem', color: darkMode ? '#94a3b8' : '#64748b' },
// // // //   actions: {
// // // //     display: 'flex',
// // // //     gap: '8px',
// // // //     marginTop: '6px',
// // // //     paddingTop: '14px',
// // // //     borderTop: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
// // // //   },
// // // //   btnAction: {
// // // //     fontSize: '0.85rem',
// // // //     fontWeight: '600',
// // // //     padding: '12px 18px',
// // // //     border: 'none',
// // // //     cursor: 'pointer',
// // // //     borderRadius: '8px',
// // // //     fontFamily: 'inherit',
// // // //     transition: 'all 0.15s',
// // // //   },
// // // //   btnClear: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
// // // //   btnBack: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
// // // //   btnSolve: {
// // // //     background: darkMode 
// // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // //     color: '#fff',
// // // //     marginLeft: 'auto',
// // // //     padding: '12px 24px',
// // // //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
// // // //   },
// // // //   btnDisabled: { background: darkMode ? '#475569' : '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
// // // //   solution: {
// // // //     marginTop: '16px',
// // // //     padding: '14px 18px',
// // // //     background: darkMode 
// // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // //     borderRadius: '10px',
// // // //     textAlign: 'center',
// // // //     fontSize: '1.3rem',
// // // //     fontWeight: '600',
// // // //     color: '#fff',
// // // //   },
// // // //   solVar: { fontStyle: 'italic' },
// // // //   solEq: { opacity: 0.8, margin: '0 6px' },
// // // //   solNum: { color: '#fbbf24' },
// // // //   solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
// // // // });

// // // // /* =====================================================
// // // //    EQUATION FORM GENERATORS
// // // //    ===================================================== */

// // // // const equationForms = [
// // // //   {
// // // //     id: 'simple',
// // // //     name: 'Simple',
// // // //     formula: 'b\u02E3 = c',
// // // //     generate: (nice) => {
// // // //       if (nice) {
// // // //         const bases = [2, 3, 5, 10];
// // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // //         const exp = Math.floor(Math.random() * 5) + 1;
// // // //         return `${base}^x=${Math.pow(base, exp)}`;
// // // //       }
// // // //       return `${Math.floor(Math.random() * 8) + 2}^x=${Math.floor(Math.random() * 900) + 10}`;
// // // //     }
// // // //   },
// // // //   {
// // // //     id: 'coefficient',
// // // //     name: 'With Coefficient',
// // // //     formula: 'a \u00B7 b\u02E3 = c',
// // // //     generate: (nice) => {
// // // //       if (nice) {
// // // //         const bases = [2, 3, 5];
// // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // //         const exp = Math.floor(Math.random() * 4) + 1;
// // // //         const coeff = Math.floor(Math.random() * 5) + 2;
// // // //         return `${coeff}\u00D7${base}^x=${coeff * Math.pow(base, exp)}`;
// // // //       }
// // // //       const base = Math.floor(Math.random() * 7) + 2;
// // // //       const coeff = Math.floor(Math.random() * 9) + 2;
// // // //       return `${coeff}\u00D7${base}^x=${Math.floor(Math.random() * 500) + 20}`;
// // // //     }
// // // //   },
// // // //   {
// // // //     id: 'linear-exp',
// // // //     name: 'Linear Exponent',
// // // //     formula: 'b\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
// // // //     generate: (nice) => {
// // // //       const bases = [2, 3, 5];
// // // //       const base = bases[Math.floor(Math.random() * bases.length)];
// // // //       const m = Math.floor(Math.random() * 3) + 1;
// // // //       const n = Math.floor(Math.random() * 5) - 2;
// // // //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// // // //       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
// // // //       if (nice) {
// // // //         const x = Math.floor(Math.random() * 4) + 1;
// // // //         return `${base}^(${mStr}${nStr})=${Math.pow(base, m * x + n)}`;
// // // //       }
// // // //       return `${base}^(${mStr}${nStr})=${Math.floor(Math.random() * 200) + 5}`;
// // // //     }
// // // //   },
// // // //   {
// // // //     id: 'same-base',
// // // //     name: 'Same Base',
// // // //     formula: 'b\u1DA0\u207D\u02E3\u207E = b\u207F',
// // // //     generate: () => {
// // // //       const bases = [2, 3, 5];
// // // //       const base = bases[Math.floor(Math.random() * bases.length)];
// // // //       const a = Math.floor(Math.random() * 3) + 1;
// // // //       const b = Math.floor(Math.random() * 5);
// // // //       const c = Math.floor(Math.random() * 6) + 1;
// // // //       const aStr = a === 1 ? 'x' : `${a}\u00D7x`;
// // // //       const bStr = b > 0 ? `+${b}` : '';
// // // //       return `${base}^(${aStr}${bStr})=${base}^${c}`;
// // // //     }
// // // //   },
// // // //   {
// // // //     id: 'convertible',
// // // //     name: 'Convertible',
// // // //     formula: 'a\u02E3 = b',
// // // //     generate: () => {
// // // //       const families = [
// // // //         { bases: [2, 4, 8, 16, 32], root: 2 },
// // // //         { bases: [3, 9, 27, 81], root: 3 },
// // // //         { bases: [5, 25, 125], root: 5 }
// // // //       ];
// // // //       const family = families[Math.floor(Math.random() * families.length)];
// // // //       const base = family.bases[Math.floor(Math.random() * (family.bases.length - 1))];
// // // //       const result = family.bases[Math.floor(Math.random() * family.bases.length)];
// // // //       return `${base}^x=${result}`;
// // // //     }
// // // //   },
// // // //   {
// // // //     id: 'with-constant',
// // // //     name: 'With Constant',
// // // //     formula: 'b\u02E3 + c = d',
// // // //     generate: (nice) => {
// // // //       if (nice) {
// // // //         const bases = [2, 3, 5];
// // // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // // //         const exp = Math.floor(Math.random() * 4) + 1;
// // // //         const c = Math.floor(Math.random() * 10) + 1;
// // // //         return `${base}^x+${c}=${Math.pow(base, exp) + c}`;
// // // //       }
// // // //       const base = Math.floor(Math.random() * 7) + 2;
// // // //       const c = Math.floor(Math.random() * 20) + 1;
// // // //       return `${base}^x+${c}=${Math.floor(Math.random() * 200) + c + 1}`;
// // // //     }
// // // //   },
// // // //   {
// // // //     id: 'natural',
// // // //     name: 'Natural Base',
// // // //     formula: 'e\u02E3 = c',
// // // //     generate: (nice) => {
// // // //       if (nice) {
// // // //         const vals = [1, 2, 3, 5, 7, 10, 20, 50, 100];
// // // //         return `e^x=${vals[Math.floor(Math.random() * vals.length)]}`;
// // // //       }
// // // //       return `e^x=${(Math.random() * 100 + 1).toFixed(2)}`;
// // // //     }
// // // //   },
// // // //   {
// // // //     id: 'natural-linear',
// // // //     name: 'Natural Linear',
// // // //     formula: 'e\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
// // // //     generate: (nice) => {
// // // //       const m = Math.floor(Math.random() * 3) + 1;
// // // //       const n = Math.floor(Math.random() * 5) - 2;
// // // //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// // // //       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
// // // //       if (nice) {
// // // //         const vals = [1, 2, 5, 10, 20, 50];
// // // //         return `e^(${mStr}${nStr})=${vals[Math.floor(Math.random() * vals.length)]}`;
// // // //       }
// // // //       return `e^(${mStr}${nStr})=${(Math.random() * 50 + 1).toFixed(2)}`;
// // // //     }
// // // //   }
// // // // ];

// // // // /* =====================================================
// // // //    WRAPPER COMPONENT (Full Educational Version)
// // // //    ===================================================== */

// // // // const ExponentialEquationSolver = () => {
// // // //   const engineRef = React.useRef(null);
// // // //   const [solveResult, setSolveResult] = useState(null);
// // // //   const [selectedForm, setSelectedForm] = useState(null);
// // // //   const [darkMode, setDarkMode] = useState(false);
// // // //   const [examplesOpen, setExamplesOpen] = useState(false);

// // // //   const handleFormClick = (form) => {
// // // //     const isNice = Math.random() < 0.8;
// // // //     const equation = form.generate(isNice);
// // // //     setSelectedForm(form.id);
// // // //     setSolveResult(null);
// // // //     if (engineRef.current) {
// // // //       engineRef.current.loadEquation(equation);
// // // //     }
// // // //   };

// // // //   const handleResultChange = (result) => {
// // // //     setSolveResult(result);
// // // //   };

// // // //   const handleClear = () => {
// // // //     setSelectedForm(null);
// // // //     setSolveResult(null);
// // // //   };

// // // //   const toggleDarkMode = () => {
// // // //     setDarkMode(!darkMode);
// // // //   };

// // // //   const wStyles = getWrapperStyles(darkMode);

// // // //   const renderStepContent = (step, index) => {
// // // //     if (!step.before && !step.after) return null;
// // // //     return (
// // // //       <div>
// // // //         {step.before && (
// // // //           <div style={wStyles.stepMath}>
// // // //             {astToMathDisplay(step.before, `before-${index}`, darkMode)}
// // // //           </div>
// // // //         )}
// // // //         {step.after && (
// // // //           <div style={wStyles.stepTransform}>
// // // //             <span style={wStyles.arrow}>{'\u27F9'}</span>
// // // //             <div style={wStyles.stepMath}>
// // // //               {astToMathDisplay(step.after, `after-${index}`, darkMode)}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div style={wStyles.container}>
// // // //       <style>{THEME_CSS}</style>
// // // //       <div style={wStyles.inner}>
        
// // // //         {/* Header */}
// // // //         <header style={wStyles.header}>
// // // //           <div style={wStyles.headerTop}>
// // // //             <div style={wStyles.headerLeft}>
// // // //               <div style={wStyles.iconWrap}>
// // // //                 <span style={wStyles.icon}>x</span>
// // // //               </div>
// // // //               <div>
// // // //                 <h1 style={wStyles.title}>Exponential Equation Solver</h1>
// // // //                 <p style={wStyles.subtitle}>Solve equations with variables in exponents</p>
// // // //               </div>
// // // //             </div>
// // // //             <button style={wStyles.themeToggle} onClick={toggleDarkMode}>
// // // //               {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
// // // //             </button>
// // // //           </div>
// // // //         </header>

// // // //         {/* Main Content - Side by Side */}
// // // //         <div style={wStyles.main}>
          
// // // //           {/* Left Column - Engine + Forms */}
// // // //           <div style={wStyles.leftCol}>
            
// // // //             <ExponentialSolverEngine 
// // // //               ref={engineRef} 
// // // //               onResultChange={handleResultChange}
// // // //               onClear={handleClear}
// // // //               darkMode={darkMode}
// // // //               compact={true}
// // // //             />
            
// // // //             {/* Equation Forms - Collapsible */}
// // // //             <div style={wStyles.formsSection}>
// // // //               <button 
// // // //                 style={wStyles.accordionHeader}
// // // //                 onClick={() => setExamplesOpen(!examplesOpen)}
// // // //               >
// // // //                 <span style={wStyles.sectionTitle}>Try an Example</span>
// // // //                 <span style={wStyles.chevron}>{examplesOpen ? '\u25B2' : '\u25BC'}</span>
// // // //               </button>
              
// // // //               {examplesOpen && (
// // // //                 <div style={wStyles.accordionContent}>
// // // //                   <p style={wStyles.formsHint}>Click any type to generate a random equation. Click again for a new one!</p>
// // // //                   <div style={wStyles.formsGrid}>
// // // //                     {equationForms.map((form) => (
// // // //                       <button
// // // //                         key={form.id}
// // // //                         style={{
// // // //                           ...wStyles.formCard,
// // // //                           ...(selectedForm === form.id ? wStyles.formCardSelected : {})
// // // //                         }}
// // // //                         onClick={() => handleFormClick(form)}
// // // //                       >
// // // //                         <div style={wStyles.formName}>{form.name}</div>
// // // //                         <div style={wStyles.formFormula}>{form.formula}</div>
// // // //                       </button>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Right Column - SolutionPanel */}
// // // //           <div style={wStyles.rightCol}>
// // // //             <SolutionPanel
// // // //               steps={solveResult?.steps || []}
// // // //               graphData={solveResult?.graphData || null}
// // // //               darkMode={darkMode}
// // // //               placeholder="Select an equation type or enter your own equation, then click Solve to see the step-by-step solution."
// // // //               stepsTitle="Solution Steps"
// // // //               renderStepContent={renderStepContent}
// // // //               stepCardClass={() => ''}
// // // //             />
            
// // // //             {solveResult && solveResult.solution && (
// // // //               <div style={wStyles.finalAnswer}>
// // // //                 <div style={wStyles.answerLabel}>Answer</div>
// // // //                 <div style={wStyles.answerValue}>
// // // //                   <span style={wStyles.answerVar}>{solveResult.solution.variable}</span>
// // // //                   <span style={wStyles.answerEq}> = </span>
// // // //                   <span style={wStyles.answerNum}>{formatNumber(solveResult.solution.value)}</span>
// // // //                 </div>
// // // //                 <div style={wStyles.answerNote}>
// // // //                   {solveResult.solution.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const getWrapperStyles = (darkMode) => ({
// // // //   container: {
// // // //     minHeight: '100vh',
// // // //     background: darkMode 
// // // //       ? '#0f172a'
// // // //       : 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
// // // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // //     padding: '30px 20px',
// // // //   },
// // // //   inner: {
// // // //     maxWidth: '1100px',
// // // //     margin: '0 auto',
// // // //   },
// // // //   header: {
// // // //     marginBottom: '24px',
// // // //   },
// // // //   headerTop: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //   },
// // // //   headerLeft: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '16px',
// // // //   },
// // // //   iconWrap: {
// // // //     width: '50px',
// // // //     height: '50px',
// // // //     background: darkMode 
// // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // //     borderRadius: '14px',
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
// // // //   },
// // // //   icon: {
// // // //     color: '#fff',
// // // //     fontSize: '24px',
// // // //     fontStyle: 'italic',
// // // //     fontWeight: '700',
// // // //   },
// // // //   title: {
// // // //     fontSize: '1.7rem',
// // // //     fontWeight: '700',
// // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // //     margin: '0 0 4px 0',
// // // //   },
// // // //   subtitle: {
// // // //     fontSize: '0.95rem',
// // // //     color: darkMode ? '#94a3b8' : '#64748b',
// // // //     margin: 0,
// // // //   },
// // // //   themeToggle: {
// // // //     width: '44px',
// // // //     height: '44px',
// // // //     borderRadius: '12px',
// // // //     border: 'none',
// // // //     background: darkMode ? '#334155' : '#fff',
// // // //     cursor: 'pointer',
// // // //     fontSize: '1.3rem',
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     boxShadow: darkMode ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
// // // //     transition: 'all 0.2s',
// // // //   },
// // // //   main: {
// // // //     display: 'flex',
// // // //     gap: '24px',
// // // //     alignItems: 'flex-start',
// // // //   },
// // // //   leftCol: {
// // // //     flex: '1 1 50%',
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     gap: '16px',
// // // //   },
// // // //   rightCol: {
// // // //     flex: '1 1 50%',
// // // //     background: darkMode ? '#1e293b' : '#fff',
// // // //     borderRadius: '16px',
// // // //     padding: '20px',
// // // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // //     minHeight: '500px',
// // // //   },
// // // //   formsSection: {
// // // //     background: darkMode ? '#1e293b' : '#fff',
// // // //     borderRadius: '16px',
// // // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // // //     overflow: 'hidden',
// // // //   },
// // // //   accordionHeader: {
// // // //     width: '100%',
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     padding: '16px',
// // // //     background: 'transparent',
// // // //     border: 'none',
// // // //     cursor: 'pointer',
// // // //     fontFamily: 'inherit',
// // // //   },
// // // //   sectionTitle: {
// // // //     fontSize: '0.75rem',
// // // //     textTransform: 'uppercase',
// // // //     letterSpacing: '1.5px',
// // // //     color: darkMode ? '#94a3b8' : '#64748b',
// // // //     fontWeight: '600',
// // // //   },
// // // //   chevron: {
// // // //     fontSize: '0.75rem',
// // // //     color: darkMode ? '#64748b' : '#94a3b8',
// // // //   },
// // // //   accordionContent: {
// // // //     padding: '0 16px 16px',
// // // //   },
// // // //   formsGrid: {
// // // //     display: 'grid',
// // // //     gridTemplateColumns: 'repeat(2, 1fr)',
// // // //     gap: '8px',
// // // //   },
// // // //   formsHint: {
// // // //     fontSize: '0.8rem',
// // // //     color: darkMode ? '#64748b' : '#94a3b8',
// // // //     margin: '0 0 10px 0',
// // // //     fontStyle: 'italic',
// // // //   },
// // // //   formCard: {
// // // //     background: darkMode ? '#334155' : '#f8fafc',
// // // //     border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0',
// // // //     borderRadius: '10px',
// // // //     padding: '10px 12px',
// // // //     cursor: 'pointer',
// // // //     transition: 'all 0.2s ease',
// // // //     textAlign: 'left',
// // // //     fontFamily: 'inherit',
// // // //   },
// // // //   formCardSelected: {
// // // //     borderColor: '#3b82f6',
// // // //     background: darkMode ? '#1e3a5f' : '#eff6ff',
// // // //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)',
// // // //   },
// // // //   formName: {
// // // //     fontSize: '0.8rem',
// // // //     fontWeight: '600',
// // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // //     marginBottom: '2px',
// // // //   },
// // // //   formFormula: {
// // // //     fontSize: '0.9rem',
// // // //     color: darkMode ? '#60a5fa' : '#3b82f6',
// // // //     fontFamily: 'ui-monospace, monospace',
// // // //   },
// // // //   stepMath: {
// // // //     fontSize: '1.05rem',
// // // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // // //     background: darkMode ? '#334155' : '#fff',
// // // //     padding: '10px 14px',
// // // //     borderRadius: '8px',
// // // //     display: 'inline-block',
// // // //     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
// // // //   },
// // // //   stepTransform: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '10px',
// // // //     marginTop: '8px',
// // // //   },
// // // //   arrow: {
// // // //     color: '#3b82f6',
// // // //     fontSize: '1.1rem',
// // // //   },
// // // //   finalAnswer: {
// // // //     background: darkMode 
// // // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // // //     borderRadius: '12px',
// // // //     padding: '18px 20px',
// // // //     color: '#fff',
// // // //     textAlign: 'center',
// // // //     marginTop: '16px',
// // // //   },
// // // //   answerLabel: {
// // // //     fontSize: '0.7rem',
// // // //     textTransform: 'uppercase',
// // // //     letterSpacing: '2px',
// // // //     opacity: 0.8,
// // // //     marginBottom: '6px',
// // // //     fontWeight: '600',
// // // //   },
// // // //   answerValue: {
// // // //     fontSize: '1.5rem',
// // // //     fontWeight: '700',
// // // //   },
// // // //   answerVar: { fontStyle: 'italic' },
// // // //   answerEq: { opacity: 0.8, margin: '0 6px' },
// // // //   answerNum: { color: '#fbbf24' },
// // // //   answerNote: {
// // // //     fontSize: '0.8rem',
// // // //     opacity: 0.75,
// // // //     marginTop: '6px',
// // // //   },
// // // // });

// // // // export default ExponentialEquationSolver;


// // // import React, { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
// // // import SolutionPanel from './SolutionPanel';
// // // import THEME_CSS from './MathSolverThemes';

// // // /* =====================================================
// // //    EXPONENTIAL EQUATION SOLVER
   
// // //    Two exports:
// // //    - ExponentialSolverEngine: Standalone solver component
// // //    - ExponentialEquationSolver: Full educational wrapper (default)
   
// // //    Features:
// // //    - Integrated SolutionPanel with graph support
// // //    - Theme support via CSS variables
// // //    - Dark mode toggle
// // //    - Full cursor: click-to-place, arrow keys, blinking caret
// // //    - Insert/delete at cursor position
// // //    ===================================================== */


// // // /* =====================================================
// // //    TOKENIZER
// // //    ===================================================== */

// // // const TokenType = {
// // //   NUMBER: 'NUMBER',
// // //   VARIABLE: 'VARIABLE',
// // //   MULTIPLY: 'MULTIPLY',
// // //   DIVIDE: 'DIVIDE',
// // //   POWER: 'POWER',
// // //   LPAREN: 'LPAREN',
// // //   RPAREN: 'RPAREN',
// // //   PLUS: 'PLUS',
// // //   MINUS: 'MINUS',
// // //   EQUALS: 'EQUALS',
// // //   E: 'E',
// // // };

// // // function tokenize(input) {
// // //   const tokens = [];
// // //   let i = 0;
  
// // //   while (i < input.length) {
// // //     const char = input[i];
    
// // //     if (/\s/.test(char)) {
// // //       i++;
// // //       continue;
// // //     }
    
// // //     if (/[0-9]/.test(char) || (char === '.' && /[0-9]/.test(input[i + 1]))) {
// // //       let num = '';
// // //       while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) {
// // //         num += input[i];
// // //         i++;
// // //       }
// // //       tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) });
// // //       continue;
// // //     }
    
// // //     if (char === 'e' && (i + 1 >= input.length || !/[a-zA-Z]/.test(input[i + 1]))) {
// // //       tokens.push({ type: TokenType.E });
// // //       i++;
// // //       continue;
// // //     }
    
// // //     if (/[a-zA-Z]/.test(char)) {
// // //       tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
// // //       i++;
// // //       continue;
// // //     }
    
// // //     const charMap = {
// // //       '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY,
// // //       '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE,
// // //       '^': TokenType.POWER,
// // //       '(': TokenType.LPAREN, ')': TokenType.RPAREN,
// // //       '+': TokenType.PLUS, '-': TokenType.MINUS,
// // //       '=': TokenType.EQUALS,
// // //     };
    
// // //     if (charMap[char]) {
// // //       tokens.push({ type: charMap[char] });
// // //       i++;
// // //       continue;
// // //     }
    
// // //     i++;
// // //   }
  
// // //   return tokens;
// // // }

// // // /* =====================================================
// // //    PARSER
// // //    ===================================================== */

// // // function parse(tokens) {
// // //   let pos = 0;
  
// // //   const peek = () => tokens[pos];
// // //   const consume = (expectedType) => {
// // //     const token = tokens[pos];
// // //     if (expectedType && token?.type !== expectedType) {
// // //       throw new Error(`Expected ${expectedType} but got ${token?.type}`);
// // //     }
// // //     pos++;
// // //     return token;
// // //   };
  
// // //   const parseEquation = () => {
// // //     const left = parseExpression();
// // //     if (peek()?.type === TokenType.EQUALS) {
// // //       consume();
// // //       return { type: 'EQUATION', left, right: parseExpression() };
// // //     }
// // //     return left;
// // //   };
  
// // //   const parseExpression = () => parseAdditive();
  
// // //   const parseAdditive = () => {
// // //     let left = parseMultiplicative();
// // //     while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) {
// // //       const op = consume().type;
// // //       left = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left, right: parseMultiplicative() };
// // //     }
// // //     return left;
// // //   };
  
// // //   const parseMultiplicative = () => {
// // //     let left = parsePower();
// // //     while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) {
// // //       const op = consume().type;
// // //       left = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left, right: parsePower() };
// // //     }
// // //     return left;
// // //   };
  
// // //   const parsePower = () => {
// // //     let base = parseUnary();
// // //     if (peek()?.type === TokenType.POWER) {
// // //       consume();
// // //       return { type: 'POWER', base, exponent: parsePower() };
// // //     }
// // //     return base;
// // //   };
  
// // //   const parseUnary = () => {
// // //     if (peek()?.type === TokenType.MINUS) {
// // //       consume();
// // //       return { type: 'NEGATE', operand: parseUnary() };
// // //     }
// // //     return parsePrimary();
// // //   };
  
// // //   const parsePrimary = () => {
// // //     const token = peek();
// // //     if (token?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: token.value }; }
// // //     if (token?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: token.value }; }
// // //     if (token?.type === TokenType.E) { consume(); return { type: 'E' }; }
// // //     if (token?.type === TokenType.LPAREN) {
// // //       consume();
// // //       const expr = parseExpression();
// // //       consume(TokenType.RPAREN);
// // //       return expr;
// // //     }
// // //     throw new Error(`Unexpected token: ${token?.type}`);
// // //   };
  
// // //   const ast = parseEquation();
// // //   if (pos < tokens.length) throw new Error('Unexpected tokens at end');
// // //   return ast;
// // // }

// // // /* =====================================================
// // //    HELPERS
// // //    ===================================================== */

// // // function formatNumber(num) {
// // //   if (Number.isInteger(num)) return String(num);
// // //   return (Math.round(num * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, '');
// // // }

// // // function hasVariableInExponent(node) {
// // //   if (!node) return false;
// // //   if (node.type === 'POWER') return containsVariable(node.exponent);
// // //   if (['MULTIPLY', 'DIVIDE', 'ADD', 'SUBTRACT'].includes(node.type)) {
// // //     return hasVariableInExponent(node.left) || hasVariableInExponent(node.right);
// // //   }
// // //   return false;
// // // }

// // // function containsVariable(node) {
// // //   if (!node) return false;
// // //   if (node.type === 'VARIABLE') return true;
// // //   if (node.type === 'NUMBER' || node.type === 'E') return false;
// // //   if (node.type === 'NEGATE') return containsVariable(node.operand);
// // //   if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
// // //   return containsVariable(node.left) || containsVariable(node.right);
// // // }

// // // function evaluateConstant(node) {
// // //   if (!node) return null;
// // //   switch (node.type) {
// // //     case 'NUMBER': return node.value;
// // //     case 'E': return Math.E;
// // //     case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
// // //     case 'ADD': case 'SUBTRACT': case 'MULTIPLY': case 'DIVIDE': case 'POWER': {
// // //       const l = evaluateConstant(node.left || node.base);
// // //       const r = evaluateConstant(node.right || node.exponent);
// // //       if (l === null || r === null) return null;
// // //       if (node.type === 'ADD') return l + r;
// // //       if (node.type === 'SUBTRACT') return l - r;
// // //       if (node.type === 'MULTIPLY') return l * r;
// // //       if (node.type === 'DIVIDE') return r !== 0 ? l / r : null;
// // //       if (node.type === 'POWER') return Math.pow(l, r);
// // //       return null;
// // //     }
// // //     default: return null;
// // //   }
// // // }

// // // function extractCoefficient(node) {
// // //   if (node.type !== 'MULTIPLY') return { coefficient: null, exponential: null };
// // //   if (node.left.type === 'POWER' && hasVariableInExponent(node.left)) {
// // //     return { coefficient: node.right, exponential: node.left };
// // //   }
// // //   if (node.right.type === 'POWER' && hasVariableInExponent(node.right)) {
// // //     return { coefficient: node.left, exponential: node.right };
// // //   }
// // //   return { coefficient: null, exponential: null };
// // // }

// // // function extractAdditiveConstant(node) {
// // //   if (node.type !== 'ADD' && node.type !== 'SUBTRACT') {
// // //     return { exponential: null, constant: null, isAdd: false };
// // //   }
// // //   const isAdd = node.type === 'ADD';
// // //   if (hasVariableInExponent(node.left) && !containsVariable(node.right)) {
// // //     const constVal = evaluateConstant(node.right);
// // //     if (node.left.type === 'POWER') {
// // //       return { exponential: node.left, constant: constVal, isAdd };
// // //     }
// // //   }
// // //   if (hasVariableInExponent(node.right) && !containsVariable(node.left) && isAdd) {
// // //     const constVal = evaluateConstant(node.left);
// // //     if (node.right.type === 'POWER') {
// // //       return { exponential: node.right, constant: constVal, isAdd };
// // //     }
// // //   }
// // //   return { exponential: null, constant: null, isAdd: false };
// // // }

// // // function findPerfectPower(base, result) {
// // //   if (result === 1) return 0;
// // //   if (result === base) return 1;
// // //   let power = 0, current = 1;
// // //   while (current < result && power < 100) {
// // //     current *= base;
// // //     power++;
// // //     if (current === result) return power;
// // //   }
// // //   power = -1;
// // //   current = 1 / base;
// // //   while (power > -20) {
// // //     if (Math.abs(current - result) < 1e-10) return power;
// // //     current /= base;
// // //     power--;
// // //   }
// // //   return null;
// // // }

// // // function parseLinearExponent(node) {
// // //   if (node.type === 'VARIABLE') {
// // //     return { variable: node.name, coefficient: 1, constant: 0 };
// // //   }
// // //   if (node.type === 'MULTIPLY') {
// // //     const lv = evaluateConstant(node.left), rv = evaluateConstant(node.right);
// // //     if (lv !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: lv, constant: 0 };
// // //     if (rv !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rv, constant: 0 };
// // //   }
// // //   if (node.type === 'ADD' || node.type === 'SUBTRACT') {
// // //     const leftLinear = parseLinearExponent(node.left);
// // //     const rightConst = evaluateConstant(node.right);
// // //     if (leftLinear && rightConst !== null) {
// // //       return {
// // //         variable: leftLinear.variable,
// // //         coefficient: leftLinear.coefficient,
// // //         constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst)
// // //       };
// // //     }
// // //     const rightLinear = parseLinearExponent(node.right);
// // //     const leftConst = evaluateConstant(node.left);
// // //     if (rightLinear && leftConst !== null && node.type === 'ADD') {
// // //       return {
// // //         variable: rightLinear.variable,
// // //         coefficient: rightLinear.coefficient,
// // //         constant: rightLinear.constant + leftConst
// // //       };
// // //     }
// // //   }
// // //   return null;
// // // }

// // // /* =====================================================
// // //    AST TO MATH DISPLAY
// // //    ===================================================== */

// // // function astToMathDisplay(node, key = 'root', darkMode = false) {
// // //   if (!node) return null;
  
// // //   const s = getMathStyles(darkMode);
  
// // //   const wrap = (n, k) => {
// // //     if (n.type === 'ADD' || n.type === 'SUBTRACT') {
// // //       return <span key={k}>({astToMathDisplay(n, k, darkMode)})</span>;
// // //     }
// // //     return astToMathDisplay(n, k, darkMode);
// // //   };
  
// // //   switch (node.type) {
// // //     case 'NUMBER': return <span key={key} style={s.number}>{formatNumber(node.value)}</span>;
// // //     case 'VARIABLE': return <span key={key} style={s.variable}>{node.name}</span>;
// // //     case 'E': return <span key={key} style={s.euler}>e</span>;
// // //     case 'NEGATE': return <span key={key}>{'\u2212'}{astToMathDisplay(node.operand, `${key}-neg`, darkMode)}</span>;
// // //     case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> + </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // //     case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> {'\u2212'} </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // //     case 'MULTIPLY': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> {'\u00B7'} </span>{wrap(node.right, `${key}-r`)}</span>;
// // //     case 'DIVIDE': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> / </span>{wrap(node.right, `${key}-r`)}</span>;
// // //     case 'POWER': return <span key={key} style={s.power}>{wrap(node.base, `${key}-base`)}<sup style={s.sup}>{astToMathDisplay(node.exponent, `${key}-exp`, darkMode)}</sup></span>;
// // //     case 'EQUATION': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.equals}> = </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// // //     default: return null;
// // //   }
// // // }

// // // const getMathStyles = (darkMode) => ({
// // //   number: { color: darkMode ? '#e2e8f0' : '#1e3a5f' },
// // //   variable: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '500' },
// // //   euler: { fontStyle: 'italic', color: darkMode ? '#22d3ee' : '#0891b2' },
// // //   op: { color: darkMode ? '#94a3b8' : '#64748b', margin: '0 2px' },
// // //   equals: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
// // //   power: { display: 'inline-flex', alignItems: 'baseline' },
// // //   sup: { fontSize: '0.7em', color: darkMode ? '#60a5fa' : '#3b82f6', marginLeft: '1px' },
// // // });

// // // /* =====================================================
// // //    SOLVER
// // //    ===================================================== */

// // // function solveExponentialEquation(ast) {
// // //   const steps = [];
// // //   let graphData = null;
  
// // //   if (ast.type !== 'EQUATION') {
// // //     throw new Error('Input must be an equation (use = sign)');
// // //   }
  
// // //   let { left, right } = ast;
// // //   const leftHasVar = hasVariableInExponent(left);
// // //   const rightHasVar = hasVariableInExponent(right);
  
// // //   let expSide, constSide;
  
// // //   if (leftHasVar && !rightHasVar) {
// // //     expSide = left;
// // //     constSide = right;
// // //   } else if (rightHasVar && !leftHasVar) {
// // //     expSide = right;
// // //     constSide = left;
// // //     steps.push({
// // //       rule: 'Rearrange Equation',
// // //       description: 'Move the exponential term to the left side for clarity.',
// // //       before: ast,
// // //       after: { type: 'EQUATION', left: expSide, right: constSide }
// // //     });
// // //   } else if (leftHasVar && rightHasVar) {
// // //     throw new Error('Equations with exponentials on both sides require logarithms on both sides. Coming soon!');
// // //   } else {
// // //     throw new Error('No variable found in any exponent');
// // //   }
  
// // //   const constValue = evaluateConstant(constSide);
// // //   if (constValue !== null && constSide.type !== 'NUMBER') {
// // //     const newConstSide = { type: 'NUMBER', value: constValue };
// // //     steps.push({
// // //       rule: 'Evaluate Constant',
// // //       description: 'Simplify the right side to a single number.',
// // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // //       after: { type: 'EQUATION', left: expSide, right: newConstSide }
// // //     });
// // //     constSide = newConstSide;
// // //   }
  
// // //   if (expSide.type === 'MULTIPLY') {
// // //     const { coefficient, exponential } = extractCoefficient(expSide);
// // //     if (coefficient && exponential) {
// // //       const coeffValue = evaluateConstant(coefficient);
// // //       const constVal = evaluateConstant(constSide);
// // //       if (coeffValue !== null && constVal !== null) {
// // //         const newConst = { type: 'NUMBER', value: constVal / coeffValue };
// // //         steps.push({
// // //           rule: 'Isolate Exponential Term',
// // //           description: `Divide both sides by ${formatNumber(coeffValue)} to isolate the exponential.`,
// // //           before: { type: 'EQUATION', left: expSide, right: constSide },
// // //           after: { type: 'EQUATION', left: exponential, right: newConst }
// // //         });
// // //         expSide = exponential;
// // //         constSide = newConst;
// // //       }
// // //     }
// // //   }
  
// // //   if (expSide.type === 'ADD' || expSide.type === 'SUBTRACT') {
// // //     const { exponential, constant, isAdd } = extractAdditiveConstant(expSide);
// // //     if (exponential && constant !== null) {
// // //       const constVal = evaluateConstant(constSide);
// // //       if (constVal !== null) {
// // //         const newConstVal = isAdd ? constVal - constant : constVal + constant;
// // //         const newConst = { type: 'NUMBER', value: newConstVal };
// // //         const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
// // //         steps.push({
// // //           rule: 'Isolate Exponential Term',
// // //           description: `${action} both sides.`,
// // //           before: { type: 'EQUATION', left: expSide, right: constSide },
// // //           after: { type: 'EQUATION', left: exponential, right: newConst }
// // //         });
// // //         expSide = exponential;
// // //         constSide = newConst;
// // //       }
// // //     }
// // //   }
  
// // //   if (expSide.type !== 'POWER') {
// // //     throw new Error('Could not isolate exponential term');
// // //   }
  
// // //   const base = expSide.base;
// // //   const exponent = expSide.exponent;
// // //   const resultValue = evaluateConstant(constSide);
  
// // //   if (resultValue === null) throw new Error('Right side must evaluate to a number');
// // //   if (resultValue <= 0) throw new Error('Exponential equations cannot equal zero or negative numbers');
  
// // //   const isNaturalBase = base.type === 'E';
// // //   const baseValue = isNaturalBase ? Math.E : evaluateConstant(base);
  
// // //   if (baseValue === null) throw new Error('Base must be a constant');
// // //   if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');
  
// // //   let perfectPower = null;
// // //   if (!isNaturalBase && Number.isInteger(baseValue) && Number.isInteger(resultValue)) {
// // //     perfectPower = findPerfectPower(baseValue, resultValue);
// // //   }
  
// // //   if (exponent.type === 'VARIABLE') {
// // //     const varName = exponent.name;
    
// // //     if (perfectPower !== null) {
// // //       steps.push({
// // //         rule: 'Recognize Perfect Power',
// // //         description: `${formatNumber(resultValue)} = ${formatNumber(baseValue)} raised to power ${perfectPower}.`,
// // //         before: { type: 'EQUATION', left: expSide, right: constSide },
// // //         after: { type: 'EQUATION', left: expSide, right: { type: 'POWER', base: { type: 'NUMBER', value: baseValue }, exponent: { type: 'NUMBER', value: perfectPower } } }
// // //       });
// // //       steps.push({
// // //         rule: 'Match Bases',
// // //         description: `Same base (${formatNumber(baseValue)}) means exponents are equal.`,
// // //         before: null,
// // //         after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: perfectPower } }
// // //       });
      
// // //       graphData = {
// // //         type: 'exponential',
// // //         base: baseValue,
// // //         solution: { x: perfectPower, y: resultValue }
// // //       };
      
// // //       return { steps, solution: { variable: varName, value: perfectPower, exact: true }, graphData };
// // //     }
    
// // //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
// // //     steps.push({
// // //       rule: 'Apply Logarithm',
// // //       description: `Take ${logName} of both sides.`,
// // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // //       after: null
// // //     });
    
// // //     steps.push({
// // //       rule: 'Simplify',
// // //       description: isNaturalBase ? 'ln(e\u02E3) = x' : 'log base b of b\u02E3 = x',
// // //       before: null,
// // //       after: null
// // //     });
    
// // //     const solution = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
    
// // //     steps.push({
// // //       rule: 'Calculate',
// // //       description: isNaturalBase 
// // //         ? `ln(${formatNumber(resultValue)}) \u2248 ${formatNumber(solution)}`
// // //         : `log(${formatNumber(resultValue)}) \u00F7 log(${formatNumber(baseValue)}) \u2248 ${formatNumber(solution)}`,
// // //       before: null,
// // //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: solution } }
// // //     });
    
// // //     graphData = {
// // //       type: 'exponential',
// // //       base: baseValue,
// // //       solution: { x: solution, y: resultValue }
// // //     };
    
// // //     return { steps, solution: { variable: varName, value: solution, exact: false }, graphData };
// // //   }
  
// // //   const linearInfo = parseLinearExponent(exponent);
// // //   if (linearInfo) {
// // //     const { variable, coefficient, constant } = linearInfo;
// // //     const logResult = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
// // //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
    
// // //     steps.push({
// // //       rule: 'Apply Logarithm',
// // //       description: `Take ${logName} of both sides to bring down the exponent.`,
// // //       before: { type: 'EQUATION', left: expSide, right: constSide },
// // //       after: null
// // //     });
    
// // //     const expStr = `${coefficient === 1 ? '' : coefficient}${variable}${constant >= 0 ? ' + ' + constant : ' \u2212 ' + Math.abs(constant)}`;
// // //     steps.push({
// // //       rule: 'Linear Equation',
// // //       description: `Now solve: ${expStr} = ${formatNumber(logResult)}`,
// // //       before: null,
// // //       after: null
// // //     });
    
// // //     const subtracted = logResult - constant;
// // //     const solution = subtracted / coefficient;
    
// // //     steps.push({
// // //       rule: 'Solve for Variable',
// // //       description: coefficient !== 1 
// // //         ? `Subtract ${formatNumber(constant)}, then divide by ${coefficient}.`
// // //         : `Subtract ${formatNumber(constant)} from both sides.`,
// // //       before: null,
// // //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
// // //     });
    
// // //     graphData = {
// // //       type: 'exponential',
// // //       base: baseValue,
// // //       solution: { x: solution, y: resultValue }
// // //     };
    
// // //     return { steps, solution: { variable, value: solution, exact: false }, graphData };
// // //   }
  
// // //   throw new Error('Exponent form not supported');
// // // }

// // // /* =====================================================
// // //    CURSOR STYLES (injected once)
// // //    ===================================================== */

// // // const CURSOR_CSS = `
// // //   @keyframes sp-blink {
// // //     0%, 100% { opacity: 1; }
// // //     50% { opacity: 0; }
// // //   }
// // //   .ee-caret {
// // //     display: inline-block;
// // //     width: 2px;
// // //     height: 1.2em;
// // //     background: #fbbf24;
// // //     animation: sp-blink 1s step-end infinite;
// // //     vertical-align: text-bottom;
// // //     margin: 0 -1px;
// // //     border-radius: 1px;
// // //   }
// // //   .ee-display:focus {
// // //     outline: none;
// // //   }
// // //   .ee-display:focus .ee-caret {
// // //     animation: sp-blink 1s step-end infinite;
// // //   }
// // //   .ee-display:not(:focus) .ee-caret {
// // //     opacity: 0.4;
// // //     animation: none;
// // //   }
// // //   .ee-char {
// // //     cursor: text;
// // //     position: relative;
// // //   }
// // //   .ee-char:hover {
// // //     background: rgba(255,255,255,0.08);
// // //     border-radius: 2px;
// // //   }
// // //   .ee-sup-group {
// // //     display: inline-flex;
// // //     align-items: baseline;
// // //     cursor: text;
// // //   }
// // //   .ee-form-card,
// // //   .ee-form-card:visited,
// // //   .ee-form-card:active,
// // //   .ee-form-card:focus,
// // //   .ee-form-card:focus-visible,
// // //   .ee-form-card:focus-within {
// // //     outline: none !important;
// // //     box-shadow: none;
// // //   }
// // // `;

// // // /* =====================================================
// // //    ENGINE COMPONENT (Standalone Solver)
// // //    ===================================================== */

// // // export const ExponentialSolverEngine = forwardRef(({ 
// // //   compact = false,
// // //   style = {},
// // //   darkMode = false,
// // //   onResultChange = null,
// // //   onClear = null
// // // }, ref) => {
// // //   const [expression, setExpression] = useState([]);
// // //   const [cursorPos, setCursorPos] = useState(0);
// // //   const [result, setResult] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [focused, setFocused] = useState(false);
// // //   const displayRef = useRef(null);

// // //   const variables = ['x', 'y', 'n'];
// // //   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
// // //   const operators = ['^', '\u00D7', '\u00F7', '+', '-', '='];

// // //   useImperativeHandle(ref, () => ({
// // //     loadEquation: (eqString) => {
// // //       const chars = eqString.split('');
// // //       setExpression(chars);
// // //       setCursorPos(chars.length);
// // //       setResult(null);
// // //       setError(null);
// // //       if (onResultChange) onResultChange(null);
// // //     },
// // //     clear: () => {
// // //       setExpression([]);
// // //       setCursorPos(0);
// // //       setResult(null);
// // //       setError(null);
// // //       if (onResultChange) onResultChange(null);
// // //     },
// // //     getExpression: () => expression.join(''),
// // //     getResult: () => result
// // //   }));

// // //   const insertAt = useCallback((item) => {
// // //     setExpression(prev => {
// // //       const next = [...prev];
// // //       next.splice(cursorPos, 0, item);
// // //       return next;
// // //     });
// // //     setCursorPos(prev => prev + 1);
// // //     setResult(null);
// // //     setError(null);
// // //   }, [cursorPos]);

// // //   const deleteAt = useCallback((pos) => {
// // //     if (pos < 0 || pos >= expression.length) return;
// // //     setExpression(prev => {
// // //       const next = [...prev];
// // //       next.splice(pos, 1);
// // //       return next;
// // //     });
// // //     setCursorPos(pos);
// // //     setResult(null);
// // //     setError(null);
// // //   }, [expression.length]);

// // //   const clearAll = useCallback(() => {
// // //     setExpression([]);
// // //     setCursorPos(0);
// // //     setResult(null);
// // //     setError(null);
// // //     if (onClear) onClear();
// // //   }, [onClear]);

// // //   const solve = useCallback(() => {
// // //     try {
// // //       const exprString = expression.join('');
// // //       const tokens = tokenize(exprString);
// // //       const ast = parse(tokens);
// // //       const solveResult = solveExponentialEquation(ast);
      
// // //       setResult(solveResult);
// // //       setError(null);
// // //       if (onResultChange) onResultChange(solveResult);
// // //     } catch (e) {
// // //       setError(e.message);
// // //       setResult(null);
// // //       if (onResultChange) onResultChange(null);
// // //     }
// // //   }, [expression, onResultChange]);

// // //   const TYPEABLE = new Set('0123456789.xynXYNeE^+-=*/()\u00D7\u00F7');
// // //   const KEY_MAP = { '*': '\u00D7', '/': '\u00F7' };

// // //   const handleKeyDown = useCallback((e) => {
// // //     if (e.ctrlKey || e.metaKey || e.altKey) return;

// // //     switch (e.key) {
// // //       case 'ArrowLeft':
// // //         e.preventDefault();
// // //         setCursorPos(prev => Math.max(0, prev - 1));
// // //         return;
// // //       case 'ArrowRight':
// // //         e.preventDefault();
// // //         setCursorPos(prev => Math.min(expression.length, prev + 1));
// // //         return;
// // //       case 'Home':
// // //         e.preventDefault();
// // //         setCursorPos(0);
// // //         return;
// // //       case 'End':
// // //         e.preventDefault();
// // //         setCursorPos(expression.length);
// // //         return;
// // //       case 'Backspace':
// // //         e.preventDefault();
// // //         if (cursorPos > 0) deleteAt(cursorPos - 1);
// // //         return;
// // //       case 'Delete':
// // //         e.preventDefault();
// // //         if (cursorPos < expression.length) deleteAt(cursorPos);
// // //         return;
// // //       case 'Enter':
// // //         e.preventDefault();
// // //         if (expression.length > 0) solve();
// // //         return;
// // //       default:
// // //         break;
// // //     }

// // //     const ch = KEY_MAP[e.key] || e.key;
// // //     if (ch.length === 1 && TYPEABLE.has(ch)) {
// // //       e.preventDefault();
// // //       insertAt(/[A-Z]/.test(ch) ? ch.toLowerCase() : ch);
// // //     }
// // //   }, [expression.length, cursorPos, deleteAt, insertAt, solve]);

// // //   const handleDisplayClick = useCallback((e) => {
// // //     if (displayRef.current) displayRef.current.focus();
// // //     const charEl = e.target.closest('[data-idx]');
// // //     if (charEl) {
// // //       const idx = parseInt(charEl.getAttribute('data-idx'), 10);
// // //       const rect = charEl.getBoundingClientRect();
// // //       const clickX = e.clientX - rect.left;
// // //       const midpoint = rect.width / 2;
// // //       setCursorPos(clickX < midpoint ? idx : idx + 1);
// // //     } else {
// // //       setCursorPos(expression.length);
// // //     }
// // //   }, [expression.length]);

// // //   /* ---- Build display elements with cursor ---- */
// // //   const buildDisplayElements = () => {
// // //     const expr = expression;
// // //     if (expr.length === 0) {
// // //       if (focused) {
// // //         return <span className="ee-caret" />;
// // //       }
// // //       return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
// // //     }
    
// // //     const elements = [];
// // //     const eStyles = getEngineStyles(darkMode);
    
// // //     // Pre-compute superscript groups: maps base index -> { start, end } of exponent chars
// // //     // A group is: char at i, caret '^' at i+1, then exponent chars from i+2..j-1
// // //     const supGroups = {};
// // //     let skip = new Set();
    
// // //     let i = 0;
// // //     while (i < expr.length) {
// // //       if (i + 1 < expr.length && expr[i + 1] === '^') {
// // //         const baseIdx = i;
// // //         const caretIdx = i + 1;
// // //         let j = i + 2;
// // //         let expIndices = [];
        
// // //         if (j < expr.length && expr[j] === '(') {
// // //           let depth = 1;
// // //           expIndices.push(j);
// // //           j++;
// // //           while (j < expr.length && depth > 0) {
// // //             if (expr[j] === '(') depth++;
// // //             if (expr[j] === ')') depth--;
// // //             expIndices.push(j);
// // //             j++;
// // //           }
// // //         } else {
// // //           while (j < expr.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expr[j]) && expr[j] !== '=') {
// // //             expIndices.push(j);
// // //             j++;
// // //           }
// // //         }
        
// // //         if (expIndices.length > 0) {
// // //           supGroups[baseIdx] = { caretIdx, expIndices };
// // //           skip.add(caretIdx);
// // //           expIndices.forEach(idx => skip.add(idx));
// // //           i = j;
// // //           continue;
// // //         }
// // //       }
// // //       i++;
// // //     }
    
// // //     const renderCaret = (pos) => {
// // //       if (cursorPos === pos && focused) {
// // //         return <span key={`caret-${pos}`} className="ee-caret" />;
// // //       }
// // //       return null;
// // //     };
    
// // //     const charStyle = (ch) => {
// // //       if (ch === '\u00D7' || ch === '\u00F7' || ch === '+' || ch === '-') return eStyles.displayOp;
// // //       if (ch === '=') return eStyles.displayEquals;
// // //       if (ch === 'e') return eStyles.displayEuler;
// // //       return undefined;
// // //     };
    
// // //     const displayChar = (ch) => {
// // //       if (ch === '\u00D7') return ' \u00B7 ';
// // //       if (ch === '\u00F7') return ' / ';
// // //       if (ch === '+') return ' + ';
// // //       if (ch === '-') return ' \u2212 ';
// // //       if (ch === '=') return ' = ';
// // //       return ch;
// // //     };
    
// // //     i = 0;
// // //     while (i < expr.length) {
// // //       if (skip.has(i)) { i++; continue; }
      
// // //       if (supGroups[i]) {
// // //         const group = supGroups[i];
// // //         const baseChar = expr[i];
// // //         const expIndices = group.expIndices;
        
// // //         // Caret before the base char
// // //         elements.push(renderCaret(i));
        
// // //         elements.push(
// // //           <span key={`sup-${i}`} className="ee-sup-group">
// // //             <span 
// // //               className="ee-char" 
// // //               data-idx={i}
// // //               style={baseChar === 'e' ? eStyles.displayEuler : undefined}
// // //             >
// // //               {baseChar}
// // //             </span>
// // //             <sup style={eStyles.displaySup}>
// // //               {/* caret inside superscript, before first exp char */}
// // //               {renderCaret(group.caretIdx + 1)}
// // //               {expIndices.map((idx, ei) => (
// // //                 <React.Fragment key={idx}>
// // //                   <span className="ee-char" data-idx={idx}>
// // //                     {displayChar(expr[idx])}
// // //                   </span>
// // //                   {renderCaret(idx + 1)}
// // //                 </React.Fragment>
// // //               ))}
// // //             </sup>
// // //           </span>
// // //         );
        
// // //         i = expIndices[expIndices.length - 1] + 1;
// // //         continue;
// // //       }
      
// // //       elements.push(renderCaret(i));
// // //       elements.push(
// // //         <span 
// // //           key={`ch-${i}`} 
// // //           className="ee-char" 
// // //           data-idx={i}
// // //           style={charStyle(expr[i])}
// // //         >
// // //           {displayChar(expr[i])}
// // //         </span>
// // //       );
// // //       i++;
// // //     }
    
// // //     // Caret at the very end
// // //     elements.push(renderCaret(expression.length));
    
// // //     return elements;
// // //   };

// // //   const p = compact ? 0.85 : 1;
// // //   const styles = getEngineStyles(darkMode);

// // //   return (
// // //     <div style={{ ...styles.container, ...style }}>
// // //       <style>{CURSOR_CSS}</style>
      
// // //       <div 
// // //         ref={displayRef}
// // //         className="ee-display"
// // //         tabIndex={0}
// // //         style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px`, cursor: 'text' }}
// // //         onClick={handleDisplayClick}
// // //         onKeyDown={handleKeyDown}
// // //         onFocus={() => setFocused(true)}
// // //         onBlur={() => setFocused(false)}
// // //       >
// // //         {buildDisplayElements()}
// // //       </div>
      
// // //       {error && (
// // //         <div style={styles.error}>{error}</div>
// // //       )}
      
// // //       <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
// // //         <div style={styles.row}>
// // //           <span style={styles.label}>Var</span>
// // //           <div style={styles.btnGroup}>
// // //             {variables.map((v) => (
// // //               <button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => insertAt(v)}>{v}</button>
// // //             ))}
// // //           </div>
// // //         </div>
        
// // //         <div style={styles.row}>
// // //           <span style={styles.label}>Num</span>
// // //           <div style={styles.btnGroup}>
// // //             {numbers.map((n) => (
// // //               <button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => insertAt(n)}>{n}</button>
// // //             ))}
// // //           </div>
// // //         </div>
        
// // //         <div style={styles.row}>
// // //           <span style={styles.label}>Op</span>
// // //           <div style={styles.btnGroup}>
// // //             {operators.map((op) => (
// // //               <button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>
// // //                 {op === '^' ? 'x\u207F' : op}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
        
// // //         <div style={styles.row}>
// // //           <span style={styles.label}></span>
// // //           <div style={styles.btnGroup}>
// // //             <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('e')}>e</button>
// // //             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt('(')}>(</button>
// // //             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt(')')}>)</button>
// // //           </div>
// // //         </div>
        
// // //         <div style={styles.actions}>
// // //           <button style={{ ...styles.btnAction, ...styles.btnClear }} onClick={clearAll}>Clear</button>
// // //           <button style={{ ...styles.btnAction, ...styles.btnBack }} onClick={() => { if (cursorPos > 0) deleteAt(cursorPos - 1); }}>{'\u232B'}</button>
// // //           <button 
// // //             style={{ ...styles.btnAction, ...styles.btnSolve, ...(expression.length === 0 ? styles.btnDisabled : {}) }} 
// // //             onClick={solve}
// // //             disabled={expression.length === 0}
// // //           >
// // //             Solve
// // //           </button>
// // //         </div>
// // //       </div>
      
// // //       {result && result.solution && (
// // //         <div style={styles.solution}>
// // //           <span style={styles.solVar}>{result.solution.variable}</span>
// // //           <span style={styles.solEq}> = </span>
// // //           <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
// // //           {!result.solution.exact && <span style={styles.solApprox}> {'\u2248'}</span>}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // });

// // // ExponentialSolverEngine.displayName = 'ExponentialSolverEngine';

// // // const getEngineStyles = (darkMode) => ({
// // //   container: {
// // //     background: darkMode ? '#1e293b' : '#fff',
// // //     borderRadius: '16px',
// // //     padding: '20px',
// // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // //   },
// // //   display: {
// // //     background: darkMode 
// // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // //     borderRadius: '12px',
// // //     padding: '18px 22px',
// // //     minHeight: '54px',
// // //     marginBottom: '16px',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     flexWrap: 'wrap',
// // //     fontSize: '1.4rem',
// // //     color: '#fff',
// // //     fontWeight: '500',
// // //   },
// // //   placeholder: {
// // //     color: 'rgba(255,255,255,0.5)',
// // //     fontStyle: 'italic',
// // //     fontSize: '0.95rem',
// // //   },
// // //   displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px' },
// // //   displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
// // //   displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
// // //   displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
// // //   error: {
// // //     background: darkMode ? '#451a1a' : '#fef2f2',
// // //     border: darkMode ? '1px solid #7f1d1d' : '1px solid #fecaca',
// // //     borderRadius: '8px',
// // //     padding: '10px 14px',
// // //     marginBottom: '12px',
// // //     color: darkMode ? '#fca5a5' : '#dc2626',
// // //     fontSize: '0.85rem',
// // //   },
// // //   builder: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '10px',
// // //   },
// // //   row: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '10px',
// // //   },
// // //   label: {
// // //     fontSize: '0.65rem',
// // //     textTransform: 'uppercase',
// // //     letterSpacing: '0.5px',
// // //     color: darkMode ? '#64748b' : '#94a3b8',
// // //     width: '28px',
// // //     flexShrink: 0,
// // //     fontWeight: '600',
// // //   },
// // //   btnGroup: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '6px',
// // //   },
// // //   btn: {
// // //     fontSize: '0.95rem',
// // //     padding: '8px 12px',
// // //     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
// // //     background: darkMode ? '#334155' : '#f8fafc',
// // //     color: darkMode ? '#e2e8f0' : '#334155',
// // //     cursor: 'pointer',
// // //     borderRadius: '8px',
// // //     minWidth: '36px',
// // //     fontFamily: 'inherit',
// // //     fontWeight: '500',
// // //     transition: 'all 0.15s',
// // //   },
// // //   btnVar: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600' },
// // //   btnNum: { color: darkMode ? '#f1f5f9' : '#1e293b' },
// // //   btnOp: { color: darkMode ? '#cbd5e1' : '#64748b', fontWeight: '600' },
// // //   btnSpecial: { color: darkMode ? '#22d3ee' : '#0891b2', fontWeight: '600', fontStyle: 'italic' },
// // //   btnBracket: { fontSize: '1.1rem', color: darkMode ? '#94a3b8' : '#64748b' },
// // //   actions: {
// // //     display: 'flex',
// // //     gap: '8px',
// // //     marginTop: '6px',
// // //     paddingTop: '14px',
// // //     borderTop: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
// // //   },
// // //   btnAction: {
// // //     fontSize: '0.85rem',
// // //     fontWeight: '600',
// // //     padding: '12px 18px',
// // //     border: 'none',
// // //     cursor: 'pointer',
// // //     borderRadius: '8px',
// // //     fontFamily: 'inherit',
// // //     transition: 'all 0.15s',
// // //   },
// // //   btnClear: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
// // //   btnBack: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
// // //   btnSolve: {
// // //     background: darkMode 
// // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // //     color: '#fff',
// // //     marginLeft: 'auto',
// // //     padding: '12px 24px',
// // //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
// // //   },
// // //   btnDisabled: { background: darkMode ? '#475569' : '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
// // //   solution: {
// // //     marginTop: '16px',
// // //     padding: '14px 18px',
// // //     background: darkMode 
// // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // //     borderRadius: '10px',
// // //     textAlign: 'center',
// // //     fontSize: '1.3rem',
// // //     fontWeight: '600',
// // //     color: '#fff',
// // //   },
// // //   solVar: { fontStyle: 'italic' },
// // //   solEq: { opacity: 0.8, margin: '0 6px' },
// // //   solNum: { color: '#fbbf24' },
// // //   solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
// // // });

// // // /* =====================================================
// // //    EQUATION FORM GENERATORS
// // //    ===================================================== */

// // // const equationForms = [
// // //   {
// // //     id: 'simple',
// // //     name: 'Simple',
// // //     formula: 'b\u02E3 = c',
// // //     generate: (nice) => {
// // //       if (nice) {
// // //         const bases = [2, 3, 5, 10];
// // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // //         const exp = Math.floor(Math.random() * 5) + 1;
// // //         return `${base}^x=${Math.pow(base, exp)}`;
// // //       }
// // //       return `${Math.floor(Math.random() * 8) + 2}^x=${Math.floor(Math.random() * 900) + 10}`;
// // //     }
// // //   },
// // //   {
// // //     id: 'coefficient',
// // //     name: 'With Coefficient',
// // //     formula: 'a \u00B7 b\u02E3 = c',
// // //     generate: (nice) => {
// // //       if (nice) {
// // //         const bases = [2, 3, 5];
// // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // //         const exp = Math.floor(Math.random() * 4) + 1;
// // //         const coeff = Math.floor(Math.random() * 5) + 2;
// // //         return `${coeff}\u00D7${base}^x=${coeff * Math.pow(base, exp)}`;
// // //       }
// // //       const base = Math.floor(Math.random() * 7) + 2;
// // //       const coeff = Math.floor(Math.random() * 9) + 2;
// // //       return `${coeff}\u00D7${base}^x=${Math.floor(Math.random() * 500) + 20}`;
// // //     }
// // //   },
// // //   {
// // //     id: 'linear-exp',
// // //     name: 'Linear Exponent',
// // //     formula: 'b\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
// // //     generate: (nice) => {
// // //       const bases = [2, 3, 5];
// // //       const base = bases[Math.floor(Math.random() * bases.length)];
// // //       const m = Math.floor(Math.random() * 3) + 1;
// // //       const n = Math.floor(Math.random() * 5) - 2;
// // //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// // //       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
// // //       if (nice) {
// // //         const x = Math.floor(Math.random() * 4) + 1;
// // //         return `${base}^(${mStr}${nStr})=${Math.pow(base, m * x + n)}`;
// // //       }
// // //       return `${base}^(${mStr}${nStr})=${Math.floor(Math.random() * 200) + 5}`;
// // //     }
// // //   },
// // //   {
// // //     id: 'same-base',
// // //     name: 'Same Base',
// // //     formula: 'b\u1DA0\u207D\u02E3\u207E = b\u207F',
// // //     generate: () => {
// // //       const bases = [2, 3, 5];
// // //       const base = bases[Math.floor(Math.random() * bases.length)];
// // //       const a = Math.floor(Math.random() * 3) + 1;
// // //       const b = Math.floor(Math.random() * 5);
// // //       const c = Math.floor(Math.random() * 6) + 1;
// // //       const aStr = a === 1 ? 'x' : `${a}\u00D7x`;
// // //       const bStr = b > 0 ? `+${b}` : '';
// // //       return `${base}^(${aStr}${bStr})=${base}^${c}`;
// // //     }
// // //   },
// // //   {
// // //     id: 'convertible',
// // //     name: 'Convertible',
// // //     formula: 'a\u02E3 = b',
// // //     generate: () => {
// // //       const families = [
// // //         { bases: [2, 4, 8, 16, 32], root: 2 },
// // //         { bases: [3, 9, 27, 81], root: 3 },
// // //         { bases: [5, 25, 125], root: 5 }
// // //       ];
// // //       const family = families[Math.floor(Math.random() * families.length)];
// // //       const base = family.bases[Math.floor(Math.random() * (family.bases.length - 1))];
// // //       const result = family.bases[Math.floor(Math.random() * family.bases.length)];
// // //       return `${base}^x=${result}`;
// // //     }
// // //   },
// // //   {
// // //     id: 'with-constant',
// // //     name: 'With Constant',
// // //     formula: 'b\u02E3 + c = d',
// // //     generate: (nice) => {
// // //       if (nice) {
// // //         const bases = [2, 3, 5];
// // //         const base = bases[Math.floor(Math.random() * bases.length)];
// // //         const exp = Math.floor(Math.random() * 4) + 1;
// // //         const c = Math.floor(Math.random() * 10) + 1;
// // //         return `${base}^x+${c}=${Math.pow(base, exp) + c}`;
// // //       }
// // //       const base = Math.floor(Math.random() * 7) + 2;
// // //       const c = Math.floor(Math.random() * 20) + 1;
// // //       return `${base}^x+${c}=${Math.floor(Math.random() * 200) + c + 1}`;
// // //     }
// // //   },
// // //   {
// // //     id: 'natural',
// // //     name: 'Natural Base',
// // //     formula: 'e\u02E3 = c',
// // //     generate: (nice) => {
// // //       if (nice) {
// // //         const vals = [1, 2, 3, 5, 7, 10, 20, 50, 100];
// // //         return `e^x=${vals[Math.floor(Math.random() * vals.length)]}`;
// // //       }
// // //       return `e^x=${(Math.random() * 100 + 1).toFixed(2)}`;
// // //     }
// // //   },
// // //   {
// // //     id: 'natural-linear',
// // //     name: 'Natural Linear',
// // //     formula: 'e\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
// // //     generate: (nice) => {
// // //       const m = Math.floor(Math.random() * 3) + 1;
// // //       const n = Math.floor(Math.random() * 5) - 2;
// // //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// // //       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
// // //       if (nice) {
// // //         const vals = [1, 2, 5, 10, 20, 50];
// // //         return `e^(${mStr}${nStr})=${vals[Math.floor(Math.random() * vals.length)]}`;
// // //       }
// // //       return `e^(${mStr}${nStr})=${(Math.random() * 50 + 1).toFixed(2)}`;
// // //     }
// // //   }
// // // ];

// // // /* =====================================================
// // //    WRAPPER COMPONENT (Full Educational Version)
// // //    ===================================================== */

// // // const ExponentialEquationSolver = () => {
// // //   const engineRef = React.useRef(null);
// // //   const [solveResult, setSolveResult] = useState(null);
// // //   const [selectedForm, setSelectedForm] = useState(null);
// // //   const [darkMode, setDarkMode] = useState(false);
// // //   const [examplesOpen, setExamplesOpen] = useState(false);

// // //   const handleFormClick = (form) => {
// // //     const isNice = Math.random() < 0.8;
// // //     const equation = form.generate(isNice);
// // //     setSelectedForm(form.id);
// // //     setSolveResult(null);
// // //     if (engineRef.current) {
// // //       engineRef.current.loadEquation(equation);
// // //     }
// // //   };

// // //   const handleResultChange = (result) => {
// // //     setSolveResult(result);
// // //   };

// // //   const handleClear = () => {
// // //     setSelectedForm(null);
// // //     setSolveResult(null);
// // //   };

// // //   const toggleDarkMode = () => {
// // //     setDarkMode(!darkMode);
// // //   };

// // //   const wStyles = getWrapperStyles(darkMode);

// // //   const renderStepContent = (step, index) => {
// // //     if (!step.before && !step.after) return null;
// // //     return (
// // //       <div>
// // //         {step.before && (
// // //           <div style={wStyles.stepMath}>
// // //             {astToMathDisplay(step.before, `before-${index}`, darkMode)}
// // //           </div>
// // //         )}
// // //         {step.after && (
// // //           <div style={wStyles.stepTransform}>
// // //             <span style={wStyles.arrow}>{'\u27F9'}</span>
// // //             <div style={wStyles.stepMath}>
// // //               {astToMathDisplay(step.after, `after-${index}`, darkMode)}
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div style={wStyles.container}>
// // //       <style>{THEME_CSS}</style>
// // //       <div style={wStyles.inner}>
        
// // //         {/* Header */}
// // //         <header style={wStyles.header}>
// // //           <div style={wStyles.headerTop}>
// // //             <div style={wStyles.headerLeft}>
// // //               <div style={wStyles.iconWrap}>
// // //                 <span style={wStyles.icon}>x</span>
// // //               </div>
// // //               <div>
// // //                 <h1 style={wStyles.title}>Exponential Equation Solver</h1>
// // //                 <p style={wStyles.subtitle}>Solve equations with variables in exponents</p>
// // //               </div>
// // //             </div>
// // //             <button style={wStyles.themeToggle} onClick={toggleDarkMode}>
// // //               {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
// // //             </button>
// // //           </div>
// // //         </header>

// // //         {/* Main Content - Side by Side */}
// // //         <div style={wStyles.main}>
          
// // //           {/* Left Column - Engine + Forms */}
// // //           <div style={wStyles.leftCol}>
            
// // //             <ExponentialSolverEngine 
// // //               ref={engineRef} 
// // //               onResultChange={handleResultChange}
// // //               onClear={handleClear}
// // //               darkMode={darkMode}
// // //               compact={true}
// // //             />
            
// // //             {/* Equation Forms - Collapsible */}
// // //             <div style={wStyles.formsSection}>
// // //               <button 
// // //                 style={wStyles.accordionHeader}
// // //                 onClick={() => setExamplesOpen(!examplesOpen)}
// // //               >
// // //                 <span style={wStyles.sectionTitle}>Try an Example</span>
// // //                 <span style={wStyles.chevron}>{examplesOpen ? '\u25B2' : '\u25BC'}</span>
// // //               </button>
              
// // //               {examplesOpen && (
// // //                 <div style={wStyles.accordionContent}>
// // //                   <p style={wStyles.formsHint}>Click any type to generate a random equation. Click again for a new one!</p>
// // //                   <div style={wStyles.formsGrid}>
// // //                     {equationForms.map((form) => (
// // //                       <button
// // //                         key={form.id}
// // //                         className="ee-form-card"
// // //                         style={{
// // //                           ...wStyles.formCard,
// // //                           ...(selectedForm === form.id ? wStyles.formCardSelected : {})
// // //                         }}
// // //                         onClick={() => handleFormClick(form)}
// // //                       >
// // //                         <div style={wStyles.formName}>{form.name}</div>
// // //                         <div style={wStyles.formFormula}>{form.formula}</div>
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
          
// // //           {/* Right Column - SolutionPanel */}
// // //           <div style={wStyles.rightCol}>
// // //             <SolutionPanel
// // //               steps={solveResult?.steps || []}
// // //               graphData={solveResult?.graphData || null}
// // //               darkMode={darkMode}
// // //               placeholder="Select an equation type or enter your own equation, then click Solve to see the step-by-step solution."
// // //               stepsTitle="Solution Steps"
// // //               renderStepContent={renderStepContent}
// // //               stepCardClass={() => ''}
// // //             />
            
// // //             {solveResult && solveResult.solution && (
// // //               <div style={wStyles.finalAnswer}>
// // //                 <div style={wStyles.answerLabel}>Answer</div>
// // //                 <div style={wStyles.answerValue}>
// // //                   <span style={wStyles.answerVar}>{solveResult.solution.variable}</span>
// // //                   <span style={wStyles.answerEq}> = </span>
// // //                   <span style={wStyles.answerNum}>{formatNumber(solveResult.solution.value)}</span>
// // //                 </div>
// // //                 <div style={wStyles.answerNote}>
// // //                   {solveResult.solution.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const getWrapperStyles = (darkMode) => ({
// // //   container: {
// // //     minHeight: '100vh',
// // //     background: darkMode 
// // //       ? '#0f172a'
// // //       : 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
// // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // //     padding: '30px 20px',
// // //   },
// // //   inner: {
// // //     maxWidth: '1100px',
// // //     margin: '0 auto',
// // //   },
// // //   header: {
// // //     marginBottom: '24px',
// // //   },
// // //   headerTop: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //   },
// // //   headerLeft: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '16px',
// // //   },
// // //   iconWrap: {
// // //     width: '50px',
// // //     height: '50px',
// // //     background: darkMode 
// // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // //     borderRadius: '14px',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
// // //   },
// // //   icon: {
// // //     color: '#fff',
// // //     fontSize: '24px',
// // //     fontStyle: 'italic',
// // //     fontWeight: '700',
// // //   },
// // //   title: {
// // //     fontSize: '1.7rem',
// // //     fontWeight: '700',
// // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // //     margin: '0 0 4px 0',
// // //   },
// // //   subtitle: {
// // //     fontSize: '0.95rem',
// // //     color: darkMode ? '#94a3b8' : '#64748b',
// // //     margin: 0,
// // //   },
// // //   themeToggle: {
// // //     width: '44px',
// // //     height: '44px',
// // //     borderRadius: '12px',
// // //     border: 'none',
// // //     background: darkMode ? '#334155' : '#fff',
// // //     cursor: 'pointer',
// // //     fontSize: '1.3rem',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     boxShadow: darkMode ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
// // //     transition: 'all 0.2s',
// // //   },
// // //   main: {
// // //     display: 'flex',
// // //     gap: '24px',
// // //     alignItems: 'flex-start',
// // //   },
// // //   leftCol: {
// // //     flex: '1 1 50%',
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '16px',
// // //   },
// // //   rightCol: {
// // //     flex: '1 1 50%',
// // //     background: darkMode ? '#1e293b' : '#fff',
// // //     borderRadius: '16px',
// // //     padding: '20px',
// // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // //     minHeight: '500px',
// // //   },
// // //   formsSection: {
// // //     background: darkMode ? '#1e293b' : '#fff',
// // //     borderRadius: '16px',
// // //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// // //     overflow: 'hidden',
// // //   },
// // //   accordionHeader: {
// // //     width: '100%',
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'baseline',
// // //     padding: '16px',
// // //     background: 'transparent',
// // //     border: 'none',
// // //     cursor: 'pointer',
// // //     fontFamily: 'inherit',
// // //   },
// // //   sectionTitle: {
// // //     fontSize: '0.75rem',
// // //     textTransform: 'uppercase',
// // //     letterSpacing: '1.5px',
// // //     color: darkMode ? '#94a3b8' : '#64748b',
// // //     fontWeight: '600',
// // //   },
// // //   chevron: {
// // //     fontSize: '0.75rem',
// // //     color: darkMode ? '#64748b' : '#94a3b8',
// // //   },
// // //   accordionContent: {
// // //     padding: '0 16px 16px',
// // //   },
// // //   formsGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(2, 1fr)',
// // //     gap: '8px',
// // //   },
// // //   formsHint: {
// // //     fontSize: '0.8rem',
// // //     color: darkMode ? '#64748b' : '#94a3b8',
// // //     margin: '0 0 10px 0',
// // //     fontStyle: 'italic',
// // //   },
// // //   formCard: {
// // //     background: darkMode ? '#334155' : '#f8fafc',
// // //     border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0',
// // //     borderRadius: '10px',
// // //     padding: '10px 12px',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.2s ease',
// // //     textAlign: 'left',
// // //     fontFamily: 'inherit',
// // //     outline: 'none',
// // //   },
// // //   formCardSelected: {
// // //     borderColor: '#3b82f6',
// // //     background: darkMode ? '#1e3a5f' : '#eff6ff',
// // //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)',
// // //   },
// // //   formName: {
// // //     fontSize: '0.8rem',
// // //     fontWeight: '600',
// // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // //     marginBottom: '2px',
// // //   },
// // //   formFormula: {
// // //     fontSize: '0.9rem',
// // //     color: darkMode ? '#60a5fa' : '#3b82f6',
// // //     fontFamily: 'ui-monospace, monospace',
// // //   },
// // //   stepMath: {
// // //     fontSize: '1.05rem',
// // //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// // //     background: darkMode ? '#334155' : '#fff',
// // //     padding: '10px 14px',
// // //     borderRadius: '8px',
// // //     display: 'inline-block',
// // //     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
// // //   },
// // //   stepTransform: {
// // //     display: 'flex',
// // //     alignItems: 'baseline',
// // //     gap: '10px',
// // //     marginTop: '8px',
// // //   },
// // //   arrow: {
// // //     color: '#3b82f6',
// // //     fontSize: '1.1rem',
// // //   },
// // //   finalAnswer: {
// // //     background: darkMode 
// // //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// // //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// // //     borderRadius: '12px',
// // //     padding: '18px 20px',
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     marginTop: '16px',
// // //   },
// // //   answerLabel: {
// // //     fontSize: '0.7rem',
// // //     textTransform: 'uppercase',
// // //     letterSpacing: '2px',
// // //     opacity: 0.8,
// // //     marginBottom: '6px',
// // //     fontWeight: '600',
// // //   },
// // //   answerValue: {
// // //     fontSize: '1.5rem',
// // //     fontWeight: '700',
// // //   },
// // //   answerVar: { fontStyle: 'italic' },
// // //   answerEq: { opacity: 0.8, margin: '0 6px' },
// // //   answerNum: { color: '#fbbf24' },
// // //   answerNote: {
// // //     fontSize: '0.8rem',
// // //     opacity: 0.75,
// // //     marginTop: '6px',
// // //   },
// // // });

// // // export default ExponentialEquationSolver;

// // import React, { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
// // import SolutionPanel from './SolutionPanel';
// // import THEME_CSS from './MathSolverThemes';

// // /* =====================================================
// //    EXPONENTIAL EQUATION SOLVER
   
// //    Two exports:
// //    - ExponentialSolverEngine: Standalone solver component
// //    - ExponentialEquationSolver: Full educational wrapper (default)
   
// //    Features:
// //    - Integrated SolutionPanel with graph support
// //    - Theme support via CSS variables
// //    - Dark mode toggle
// //    - Full cursor: click-to-place, arrow keys, blinking caret
// //    - Insert/delete at cursor position
// //    ===================================================== */


// // /* =====================================================
// //    TOKENIZER
// //    ===================================================== */

// // const TokenType = {
// //   NUMBER: 'NUMBER',
// //   VARIABLE: 'VARIABLE',
// //   MULTIPLY: 'MULTIPLY',
// //   DIVIDE: 'DIVIDE',
// //   POWER: 'POWER',
// //   LPAREN: 'LPAREN',
// //   RPAREN: 'RPAREN',
// //   PLUS: 'PLUS',
// //   MINUS: 'MINUS',
// //   EQUALS: 'EQUALS',
// //   E: 'E',
// // };

// // function tokenize(input) {
// //   const tokens = [];
// //   let i = 0;
  
// //   while (i < input.length) {
// //     const char = input[i];
    
// //     if (/\s/.test(char)) {
// //       i++;
// //       continue;
// //     }
    
// //     if (/[0-9]/.test(char) || (char === '.' && /[0-9]/.test(input[i + 1]))) {
// //       let num = '';
// //       while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) {
// //         num += input[i];
// //         i++;
// //       }
// //       tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) });
// //       continue;
// //     }
    
// //     if (char === 'e' && (i + 1 >= input.length || !/[a-zA-Z]/.test(input[i + 1]))) {
// //       tokens.push({ type: TokenType.E });
// //       i++;
// //       continue;
// //     }
    
// //     if (/[a-zA-Z]/.test(char)) {
// //       tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
// //       i++;
// //       continue;
// //     }
    
// //     const charMap = {
// //       '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY,
// //       '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE,
// //       '^': TokenType.POWER,
// //       '(': TokenType.LPAREN, ')': TokenType.RPAREN,
// //       '+': TokenType.PLUS, '-': TokenType.MINUS,
// //       '=': TokenType.EQUALS,
// //     };
    
// //     if (charMap[char]) {
// //       tokens.push({ type: charMap[char] });
// //       i++;
// //       continue;
// //     }
    
// //     i++;
// //   }
  
// //   return tokens;
// // }

// // /* =====================================================
// //    PARSER
// //    ===================================================== */

// // function parse(tokens) {
// //   let pos = 0;
  
// //   const peek = () => tokens[pos];
// //   const consume = (expectedType) => {
// //     const token = tokens[pos];
// //     if (expectedType && token?.type !== expectedType) {
// //       throw new Error(`Expected ${expectedType} but got ${token?.type}`);
// //     }
// //     pos++;
// //     return token;
// //   };
  
// //   const parseEquation = () => {
// //     const left = parseExpression();
// //     if (peek()?.type === TokenType.EQUALS) {
// //       consume();
// //       return { type: 'EQUATION', left, right: parseExpression() };
// //     }
// //     return left;
// //   };
  
// //   const parseExpression = () => parseAdditive();
  
// //   const parseAdditive = () => {
// //     let left = parseMultiplicative();
// //     while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) {
// //       const op = consume().type;
// //       left = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left, right: parseMultiplicative() };
// //     }
// //     return left;
// //   };
  
// //   const parseMultiplicative = () => {
// //     let left = parsePower();
// //     while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) {
// //       const op = consume().type;
// //       left = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left, right: parsePower() };
// //     }
// //     return left;
// //   };
  
// //   const parsePower = () => {
// //     let base = parseUnary();
// //     if (peek()?.type === TokenType.POWER) {
// //       consume();
// //       return { type: 'POWER', base, exponent: parsePower() };
// //     }
// //     return base;
// //   };
  
// //   const parseUnary = () => {
// //     if (peek()?.type === TokenType.MINUS) {
// //       consume();
// //       return { type: 'NEGATE', operand: parseUnary() };
// //     }
// //     return parsePrimary();
// //   };
  
// //   const parsePrimary = () => {
// //     const token = peek();
// //     if (token?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: token.value }; }
// //     if (token?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: token.value }; }
// //     if (token?.type === TokenType.E) { consume(); return { type: 'E' }; }
// //     if (token?.type === TokenType.LPAREN) {
// //       consume();
// //       const expr = parseExpression();
// //       consume(TokenType.RPAREN);
// //       return expr;
// //     }
// //     throw new Error(`Unexpected token: ${token?.type}`);
// //   };
  
// //   const ast = parseEquation();
// //   if (pos < tokens.length) throw new Error('Unexpected tokens at end');
// //   return ast;
// // }

// // /* =====================================================
// //    HELPERS
// //    ===================================================== */

// // function formatNumber(num) {
// //   if (Number.isInteger(num)) return String(num);
// //   return (Math.round(num * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, '');
// // }

// // function hasVariableInExponent(node) {
// //   if (!node) return false;
// //   if (node.type === 'POWER') return containsVariable(node.exponent);
// //   if (['MULTIPLY', 'DIVIDE', 'ADD', 'SUBTRACT'].includes(node.type)) {
// //     return hasVariableInExponent(node.left) || hasVariableInExponent(node.right);
// //   }
// //   return false;
// // }

// // function containsVariable(node) {
// //   if (!node) return false;
// //   if (node.type === 'VARIABLE') return true;
// //   if (node.type === 'NUMBER' || node.type === 'E') return false;
// //   if (node.type === 'NEGATE') return containsVariable(node.operand);
// //   if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
// //   return containsVariable(node.left) || containsVariable(node.right);
// // }

// // function evaluateConstant(node) {
// //   if (!node) return null;
// //   switch (node.type) {
// //     case 'NUMBER': return node.value;
// //     case 'E': return Math.E;
// //     case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
// //     case 'ADD': case 'SUBTRACT': case 'MULTIPLY': case 'DIVIDE': case 'POWER': {
// //       const l = evaluateConstant(node.left || node.base);
// //       const r = evaluateConstant(node.right || node.exponent);
// //       if (l === null || r === null) return null;
// //       if (node.type === 'ADD') return l + r;
// //       if (node.type === 'SUBTRACT') return l - r;
// //       if (node.type === 'MULTIPLY') return l * r;
// //       if (node.type === 'DIVIDE') return r !== 0 ? l / r : null;
// //       if (node.type === 'POWER') return Math.pow(l, r);
// //       return null;
// //     }
// //     default: return null;
// //   }
// // }

// // function extractCoefficient(node) {
// //   if (node.type !== 'MULTIPLY') return { coefficient: null, exponential: null };
// //   if (node.left.type === 'POWER' && hasVariableInExponent(node.left)) {
// //     return { coefficient: node.right, exponential: node.left };
// //   }
// //   if (node.right.type === 'POWER' && hasVariableInExponent(node.right)) {
// //     return { coefficient: node.left, exponential: node.right };
// //   }
// //   return { coefficient: null, exponential: null };
// // }

// // function extractAdditiveConstant(node) {
// //   if (node.type !== 'ADD' && node.type !== 'SUBTRACT') {
// //     return { exponential: null, constant: null, isAdd: false };
// //   }
// //   const isAdd = node.type === 'ADD';
// //   if (hasVariableInExponent(node.left) && !containsVariable(node.right)) {
// //     const constVal = evaluateConstant(node.right);
// //     if (node.left.type === 'POWER') {
// //       return { exponential: node.left, constant: constVal, isAdd };
// //     }
// //   }
// //   if (hasVariableInExponent(node.right) && !containsVariable(node.left) && isAdd) {
// //     const constVal = evaluateConstant(node.left);
// //     if (node.right.type === 'POWER') {
// //       return { exponential: node.right, constant: constVal, isAdd };
// //     }
// //   }
// //   return { exponential: null, constant: null, isAdd: false };
// // }

// // function findPerfectPower(base, result) {
// //   if (result === 1) return 0;
// //   if (result === base) return 1;
// //   let power = 0, current = 1;
// //   while (current < result && power < 100) {
// //     current *= base;
// //     power++;
// //     if (current === result) return power;
// //   }
// //   power = -1;
// //   current = 1 / base;
// //   while (power > -20) {
// //     if (Math.abs(current - result) < 1e-10) return power;
// //     current /= base;
// //     power--;
// //   }
// //   return null;
// // }

// // function parseLinearExponent(node) {
// //   if (node.type === 'VARIABLE') {
// //     return { variable: node.name, coefficient: 1, constant: 0 };
// //   }
// //   if (node.type === 'MULTIPLY') {
// //     const lv = evaluateConstant(node.left), rv = evaluateConstant(node.right);
// //     if (lv !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: lv, constant: 0 };
// //     if (rv !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rv, constant: 0 };
// //   }
// //   if (node.type === 'ADD' || node.type === 'SUBTRACT') {
// //     const leftLinear = parseLinearExponent(node.left);
// //     const rightConst = evaluateConstant(node.right);
// //     if (leftLinear && rightConst !== null) {
// //       return {
// //         variable: leftLinear.variable,
// //         coefficient: leftLinear.coefficient,
// //         constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst)
// //       };
// //     }
// //     const rightLinear = parseLinearExponent(node.right);
// //     const leftConst = evaluateConstant(node.left);
// //     if (rightLinear && leftConst !== null && node.type === 'ADD') {
// //       return {
// //         variable: rightLinear.variable,
// //         coefficient: rightLinear.coefficient,
// //         constant: rightLinear.constant + leftConst
// //       };
// //     }
// //   }
// //   return null;
// // }

// // /* =====================================================
// //    AST TO MATH DISPLAY
// //    ===================================================== */

// // function astToMathDisplay(node, key = 'root', darkMode = false) {
// //   if (!node) return null;
  
// //   const s = getMathStyles(darkMode);
  
// //   const wrap = (n, k) => {
// //     if (n.type === 'ADD' || n.type === 'SUBTRACT') {
// //       return <span key={k}>({astToMathDisplay(n, k, darkMode)})</span>;
// //     }
// //     return astToMathDisplay(n, k, darkMode);
// //   };
  
// //   switch (node.type) {
// //     case 'NUMBER': return <span key={key} style={s.number}>{formatNumber(node.value)}</span>;
// //     case 'VARIABLE': return <span key={key} style={s.variable}>{node.name}</span>;
// //     case 'E': return <span key={key} style={s.euler}>e</span>;
// //     case 'NEGATE': return <span key={key}>{'\u2212'}{astToMathDisplay(node.operand, `${key}-neg`, darkMode)}</span>;
// //     case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> + </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// //     case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> {'\u2212'} </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// //     case 'MULTIPLY': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> {'\u00B7'} </span>{wrap(node.right, `${key}-r`)}</span>;
// //     case 'DIVIDE': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> / </span>{wrap(node.right, `${key}-r`)}</span>;
// //     case 'POWER': return <span key={key} style={s.power}>{wrap(node.base, `${key}-base`)}<sup style={s.sup}>{astToMathDisplay(node.exponent, `${key}-exp`, darkMode)}</sup></span>;
// //     case 'EQUATION': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.equals}> = </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
// //     default: return null;
// //   }
// // }

// // const getMathStyles = (darkMode) => ({
// //   number: { color: darkMode ? '#e2e8f0' : '#1e3a5f' },
// //   variable: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '500' },
// //   euler: { fontStyle: 'italic', color: darkMode ? '#22d3ee' : '#0891b2' },
// //   op: { color: darkMode ? '#94a3b8' : '#64748b', margin: '0 2px' },
// //   equals: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
// //   power: { display: 'inline-flex', alignItems: 'baseline' },
// //   sup: { fontSize: '0.7em', color: darkMode ? '#60a5fa' : '#3b82f6', marginLeft: '1px' },
// // });

// // /* =====================================================
// //    SOLVER
// //    ===================================================== */

// // function solveExponentialEquation(ast) {
// //   const steps = [];
// //   let graphData = null;
  
// //   if (ast.type !== 'EQUATION') {
// //     throw new Error('Input must be an equation (use = sign)');
// //   }
  
// //   let { left, right } = ast;
// //   const leftHasVar = hasVariableInExponent(left);
// //   const rightHasVar = hasVariableInExponent(right);
  
// //   let expSide, constSide;
  
// //   if (leftHasVar && !rightHasVar) {
// //     expSide = left;
// //     constSide = right;
// //   } else if (rightHasVar && !leftHasVar) {
// //     expSide = right;
// //     constSide = left;
// //     steps.push({
// //       rule: 'Rearrange Equation',
// //       description: 'Move the exponential term to the left side for clarity.',
// //       before: ast,
// //       after: { type: 'EQUATION', left: expSide, right: constSide }
// //     });
// //   } else if (leftHasVar && rightHasVar) {
// //     throw new Error('Equations with exponentials on both sides require logarithms on both sides. Coming soon!');
// //   } else {
// //     throw new Error('No variable found in any exponent');
// //   }
  
// //   const constValue = evaluateConstant(constSide);
// //   if (constValue !== null && constSide.type !== 'NUMBER') {
// //     const newConstSide = { type: 'NUMBER', value: constValue };
// //     steps.push({
// //       rule: 'Evaluate Constant',
// //       description: 'Simplify the right side to a single number.',
// //       before: { type: 'EQUATION', left: expSide, right: constSide },
// //       after: { type: 'EQUATION', left: expSide, right: newConstSide }
// //     });
// //     constSide = newConstSide;
// //   }
  
// //   if (expSide.type === 'MULTIPLY') {
// //     const { coefficient, exponential } = extractCoefficient(expSide);
// //     if (coefficient && exponential) {
// //       const coeffValue = evaluateConstant(coefficient);
// //       const constVal = evaluateConstant(constSide);
// //       if (coeffValue !== null && constVal !== null) {
// //         const newConst = { type: 'NUMBER', value: constVal / coeffValue };
// //         steps.push({
// //           rule: 'Isolate Exponential Term',
// //           description: `Divide both sides by ${formatNumber(coeffValue)} to isolate the exponential.`,
// //           before: { type: 'EQUATION', left: expSide, right: constSide },
// //           after: { type: 'EQUATION', left: exponential, right: newConst }
// //         });
// //         expSide = exponential;
// //         constSide = newConst;
// //       }
// //     }
// //   }
  
// //   if (expSide.type === 'ADD' || expSide.type === 'SUBTRACT') {
// //     const { exponential, constant, isAdd } = extractAdditiveConstant(expSide);
// //     if (exponential && constant !== null) {
// //       const constVal = evaluateConstant(constSide);
// //       if (constVal !== null) {
// //         const newConstVal = isAdd ? constVal - constant : constVal + constant;
// //         const newConst = { type: 'NUMBER', value: newConstVal };
// //         const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
// //         steps.push({
// //           rule: 'Isolate Exponential Term',
// //           description: `${action} both sides.`,
// //           before: { type: 'EQUATION', left: expSide, right: constSide },
// //           after: { type: 'EQUATION', left: exponential, right: newConst }
// //         });
// //         expSide = exponential;
// //         constSide = newConst;
// //       }
// //     }
// //   }
  
// //   if (expSide.type !== 'POWER') {
// //     throw new Error('Could not isolate exponential term');
// //   }
  
// //   const base = expSide.base;
// //   const exponent = expSide.exponent;
// //   const resultValue = evaluateConstant(constSide);
  
// //   if (resultValue === null) throw new Error('Right side must evaluate to a number');
// //   if (resultValue <= 0) throw new Error('Exponential equations cannot equal zero or negative numbers');
  
// //   const isNaturalBase = base.type === 'E';
// //   const baseValue = isNaturalBase ? Math.E : evaluateConstant(base);
  
// //   if (baseValue === null) throw new Error('Base must be a constant');
// //   if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');
  
// //   let perfectPower = null;
// //   if (!isNaturalBase && Number.isInteger(baseValue) && Number.isInteger(resultValue)) {
// //     perfectPower = findPerfectPower(baseValue, resultValue);
// //   }
  
// //   if (exponent.type === 'VARIABLE') {
// //     const varName = exponent.name;
    
// //     if (perfectPower !== null) {
// //       steps.push({
// //         rule: 'Recognize Perfect Power',
// //         description: `${formatNumber(resultValue)} = ${formatNumber(baseValue)} raised to power ${perfectPower}.`,
// //         before: { type: 'EQUATION', left: expSide, right: constSide },
// //         after: { type: 'EQUATION', left: expSide, right: { type: 'POWER', base: { type: 'NUMBER', value: baseValue }, exponent: { type: 'NUMBER', value: perfectPower } } }
// //       });
// //       steps.push({
// //         rule: 'Match Bases',
// //         description: `Same base (${formatNumber(baseValue)}) means exponents are equal.`,
// //         before: null,
// //         after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: perfectPower } }
// //       });
      
// //       graphData = {
// //         type: 'exponential',
// //         base: baseValue,
// //         solution: { x: perfectPower, y: resultValue }
// //       };
      
// //       return { steps, solution: { variable: varName, value: perfectPower, exact: true }, graphData };
// //     }
    
// //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
// //     steps.push({
// //       rule: 'Apply Logarithm',
// //       description: `Take ${logName} of both sides.`,
// //       before: { type: 'EQUATION', left: expSide, right: constSide },
// //       after: null
// //     });
    
// //     steps.push({
// //       rule: 'Simplify',
// //       description: isNaturalBase ? 'ln(e\u02E3) = x' : 'log base b of b\u02E3 = x',
// //       before: null,
// //       after: null
// //     });
    
// //     const solution = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
    
// //     steps.push({
// //       rule: 'Calculate',
// //       description: isNaturalBase 
// //         ? `ln(${formatNumber(resultValue)}) \u2248 ${formatNumber(solution)}`
// //         : `log(${formatNumber(resultValue)}) \u00F7 log(${formatNumber(baseValue)}) \u2248 ${formatNumber(solution)}`,
// //       before: null,
// //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: solution } }
// //     });
    
// //     graphData = {
// //       type: 'exponential',
// //       base: baseValue,
// //       solution: { x: solution, y: resultValue }
// //     };
    
// //     return { steps, solution: { variable: varName, value: solution, exact: false }, graphData };
// //   }
  
// //   const linearInfo = parseLinearExponent(exponent);
// //   if (linearInfo) {
// //     const { variable, coefficient, constant } = linearInfo;
// //     const logResult = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
// //     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
    
// //     steps.push({
// //       rule: 'Apply Logarithm',
// //       description: `Take ${logName} of both sides to bring down the exponent.`,
// //       before: { type: 'EQUATION', left: expSide, right: constSide },
// //       after: null
// //     });
    
// //     const expStr = `${coefficient === 1 ? '' : coefficient}${variable}${constant >= 0 ? ' + ' + constant : ' \u2212 ' + Math.abs(constant)}`;
// //     steps.push({
// //       rule: 'Linear Equation',
// //       description: `Now solve: ${expStr} = ${formatNumber(logResult)}`,
// //       before: null,
// //       after: null
// //     });
    
// //     const subtracted = logResult - constant;
// //     const solution = subtracted / coefficient;
    
// //     steps.push({
// //       rule: 'Solve for Variable',
// //       description: coefficient !== 1 
// //         ? `Subtract ${formatNumber(constant)}, then divide by ${coefficient}.`
// //         : `Subtract ${formatNumber(constant)} from both sides.`,
// //       before: null,
// //       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
// //     });
    
// //     graphData = {
// //       type: 'exponential',
// //       base: baseValue,
// //       solution: { x: solution, y: resultValue }
// //     };
    
// //     return { steps, solution: { variable, value: solution, exact: false }, graphData };
// //   }
  
// //   throw new Error('Exponent form not supported');
// // }

// // /* =====================================================
// //    CURSOR STYLES (injected once)
// //    ===================================================== */

// // const CURSOR_CSS = `
// //   @keyframes sp-blink {
// //     0%, 100% { opacity: 1; }
// //     50% { opacity: 0; }
// //   }
// //   .ee-caret {
// //     display: inline-block;
// //     width: 2px;
// //     height: 1.2em;
// //     background: #fbbf24;
// //     animation: sp-blink 1s step-end infinite;
// //     vertical-align: text-bottom;
// //     margin: 0 -1px;
// //     border-radius: 1px;
// //   }
// //   .ee-display:focus {
// //     outline: none;
// //   }
// //   .ee-display:focus .ee-caret {
// //     animation: sp-blink 1s step-end infinite;
// //   }
// //   .ee-display:not(:focus) .ee-caret {
// //     opacity: 0.4;
// //     animation: none;
// //   }
// //   .ee-char {
// //     cursor: text;
// //     position: relative;
// //   }
// //   .ee-char:hover {
// //     background: rgba(255,255,255,0.08);
// //     border-radius: 2px;
// //   }
// //   .ee-sup-group {
// //     display: inline;
// //     cursor: text;
// //   }
// //   .ee-form-card,
// //   .ee-form-card:visited,
// //   .ee-form-card:active,
// //   .ee-form-card:focus,
// //   .ee-form-card:focus-visible,
// //   .ee-form-card:focus-within {
// //     outline: none !important;
// //     box-shadow: none;
// //   }
// // `;

// // /* =====================================================
// //    ENGINE COMPONENT (Standalone Solver)
// //    ===================================================== */

// // export const ExponentialSolverEngine = forwardRef(({ 
// //   compact = false,
// //   style = {},
// //   darkMode = false,
// //   onResultChange = null,
// //   onClear = null
// // }, ref) => {
// //   const [expression, setExpression] = useState([]);
// //   const [cursorPos, setCursorPos] = useState(0);
// //   const [result, setResult] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [focused, setFocused] = useState(false);
// //   const displayRef = useRef(null);

// //   const variables = ['x', 'y', 'n'];
// //   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
// //   const operators = ['^', '\u00D7', '\u00F7', '+', '-', '='];

// //   useImperativeHandle(ref, () => ({
// //     loadEquation: (eqString) => {
// //       const chars = eqString.split('');
// //       setExpression(chars);
// //       setCursorPos(chars.length);
// //       setResult(null);
// //       setError(null);
// //       if (onResultChange) onResultChange(null);
// //     },
// //     clear: () => {
// //       setExpression([]);
// //       setCursorPos(0);
// //       setResult(null);
// //       setError(null);
// //       if (onResultChange) onResultChange(null);
// //     },
// //     getExpression: () => expression.join(''),
// //     getResult: () => result
// //   }));

// //   const insertAt = useCallback((item) => {
// //     setExpression(prev => {
// //       const next = [...prev];
// //       next.splice(cursorPos, 0, item);
// //       return next;
// //     });
// //     setCursorPos(prev => prev + 1);
// //     setResult(null);
// //     setError(null);
// //   }, [cursorPos]);

// //   const deleteAt = useCallback((pos) => {
// //     if (pos < 0 || pos >= expression.length) return;
// //     setExpression(prev => {
// //       const next = [...prev];
// //       next.splice(pos, 1);
// //       return next;
// //     });
// //     setCursorPos(pos);
// //     setResult(null);
// //     setError(null);
// //   }, [expression.length]);

// //   const clearAll = useCallback(() => {
// //     setExpression([]);
// //     setCursorPos(0);
// //     setResult(null);
// //     setError(null);
// //     if (onClear) onClear();
// //   }, [onClear]);

// //   const solve = useCallback(() => {
// //     try {
// //       const exprString = expression.join('');
// //       const tokens = tokenize(exprString);
// //       const ast = parse(tokens);
// //       const solveResult = solveExponentialEquation(ast);
      
// //       setResult(solveResult);
// //       setError(null);
// //       if (onResultChange) onResultChange(solveResult);
// //     } catch (e) {
// //       setError(e.message);
// //       setResult(null);
// //       if (onResultChange) onResultChange(null);
// //     }
// //   }, [expression, onResultChange]);

// //   const TYPEABLE = new Set('0123456789.xynXYNeE^+-=*/()\u00D7\u00F7');
// //   const KEY_MAP = { '*': '\u00D7', '/': '\u00F7' };

// //   const handleKeyDown = useCallback((e) => {
// //     if (e.ctrlKey || e.metaKey || e.altKey) return;

// //     switch (e.key) {
// //       case 'ArrowLeft':
// //         e.preventDefault();
// //         setCursorPos(prev => Math.max(0, prev - 1));
// //         return;
// //       case 'ArrowRight':
// //         e.preventDefault();
// //         setCursorPos(prev => Math.min(expression.length, prev + 1));
// //         return;
// //       case 'Home':
// //         e.preventDefault();
// //         setCursorPos(0);
// //         return;
// //       case 'End':
// //         e.preventDefault();
// //         setCursorPos(expression.length);
// //         return;
// //       case 'Backspace':
// //         e.preventDefault();
// //         if (cursorPos > 0) deleteAt(cursorPos - 1);
// //         return;
// //       case 'Delete':
// //         e.preventDefault();
// //         if (cursorPos < expression.length) deleteAt(cursorPos);
// //         return;
// //       case 'Enter':
// //         e.preventDefault();
// //         if (expression.length > 0) solve();
// //         return;
// //       default:
// //         break;
// //     }

// //     const ch = KEY_MAP[e.key] || e.key;
// //     if (ch.length === 1 && TYPEABLE.has(ch)) {
// //       e.preventDefault();
// //       insertAt(/[A-Z]/.test(ch) ? ch.toLowerCase() : ch);
// //     }
// //   }, [expression.length, cursorPos, deleteAt, insertAt, solve]);

// //   const handleDisplayClick = useCallback((e) => {
// //     if (displayRef.current) displayRef.current.focus();
// //     const charEl = e.target.closest('[data-idx]');
// //     if (charEl) {
// //       const idx = parseInt(charEl.getAttribute('data-idx'), 10);
// //       const rect = charEl.getBoundingClientRect();
// //       const clickX = e.clientX - rect.left;
// //       const midpoint = rect.width / 2;
// //       setCursorPos(clickX < midpoint ? idx : idx + 1);
// //     } else {
// //       setCursorPos(expression.length);
// //     }
// //   }, [expression.length]);

// //   /* ---- Build display elements with cursor ---- */
// //   const buildDisplayElements = () => {
// //     const expr = expression;
// //     if (expr.length === 0) {
// //       if (focused) {
// //         return <span className="ee-caret" />;
// //       }
// //       return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
// //     }
    
// //     const elements = [];
// //     const eStyles = getEngineStyles(darkMode);
    
// //     // Pre-compute superscript groups: maps base index -> { start, end } of exponent chars
// //     // A group is: char at i, caret '^' at i+1, then exponent chars from i+2..j-1
// //     const supGroups = {};
// //     let skip = new Set();
    
// //     let i = 0;
// //     while (i < expr.length) {
// //       if (i + 1 < expr.length && expr[i + 1] === '^') {
// //         const baseIdx = i;
// //         const caretIdx = i + 1;
// //         let j = i + 2;
// //         let expIndices = [];
        
// //         if (j < expr.length && expr[j] === '(') {
// //           let depth = 1;
// //           expIndices.push(j);
// //           j++;
// //           while (j < expr.length && depth > 0) {
// //             if (expr[j] === '(') depth++;
// //             if (expr[j] === ')') depth--;
// //             expIndices.push(j);
// //             j++;
// //           }
// //         } else {
// //           while (j < expr.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expr[j]) && expr[j] !== '=') {
// //             expIndices.push(j);
// //             j++;
// //           }
// //         }
        
// //         if (expIndices.length > 0) {
// //           supGroups[baseIdx] = { caretIdx, expIndices };
// //           skip.add(caretIdx);
// //           expIndices.forEach(idx => skip.add(idx));
// //           i = j;
// //           continue;
// //         }
// //       }
// //       i++;
// //     }
    
// //     const renderCaret = (pos) => {
// //       if (cursorPos === pos && focused) {
// //         return <span key={`caret-${pos}`} className="ee-caret" />;
// //       }
// //       return null;
// //     };
    
// //     const charStyle = (ch) => {
// //       if (ch === '\u00D7' || ch === '\u00F7' || ch === '+' || ch === '-') return eStyles.displayOp;
// //       if (ch === '=') return eStyles.displayEquals;
// //       if (ch === 'e') return eStyles.displayEuler;
// //       return undefined;
// //     };
    
// //     const displayChar = (ch) => {
// //       if (ch === '\u00D7') return ' \u00B7 ';
// //       if (ch === '\u00F7') return ' / ';
// //       if (ch === '+') return ' + ';
// //       if (ch === '-') return ' \u2212 ';
// //       if (ch === '=') return ' = ';
// //       return ch;
// //     };
    
// //     i = 0;
// //     while (i < expr.length) {
// //       if (skip.has(i)) { i++; continue; }
      
// //       if (supGroups[i]) {
// //         const group = supGroups[i];
// //         const baseChar = expr[i];
// //         const expIndices = group.expIndices;
        
// //         // Caret before the base char
// //         elements.push(renderCaret(i));
        
// //         elements.push(
// //           <span key={`sup-${i}`} className="ee-sup-group">
// //             <span 
// //               className="ee-char" 
// //               data-idx={i}
// //               style={baseChar === 'e' ? eStyles.displayEuler : undefined}
// //             >
// //               {baseChar}
// //             </span>
// //             <sup style={eStyles.displaySup}>
// //               {/* caret inside superscript, before first exp char */}
// //               {renderCaret(group.caretIdx + 1)}
// //               {expIndices.map((idx, ei) => (
// //                 <React.Fragment key={idx}>
// //                   <span className="ee-char" data-idx={idx}>
// //                     {displayChar(expr[idx])}
// //                   </span>
// //                   {renderCaret(idx + 1)}
// //                 </React.Fragment>
// //               ))}
// //             </sup>
// //           </span>
// //         );
        
// //         i = expIndices[expIndices.length - 1] + 1;
// //         continue;
// //       }
      
// //       elements.push(renderCaret(i));
// //       elements.push(
// //         <span 
// //           key={`ch-${i}`} 
// //           className="ee-char" 
// //           data-idx={i}
// //           style={charStyle(expr[i])}
// //         >
// //           {displayChar(expr[i])}
// //         </span>
// //       );
// //       i++;
// //     }
    
// //     // Caret at the very end
// //     elements.push(renderCaret(expression.length));
    
// //     return elements;
// //   };

// //   const p = compact ? 0.85 : 1;
// //   const styles = getEngineStyles(darkMode);

// //   return (
// //     <div style={{ ...styles.container, ...style }}>
// //       <style>{CURSOR_CSS}</style>
      
// //       <div 
// //         ref={displayRef}
// //         className="ee-display"
// //         tabIndex={0}
// //         style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px`, cursor: 'text' }}
// //         onClick={handleDisplayClick}
// //         onKeyDown={handleKeyDown}
// //         onFocus={() => setFocused(true)}
// //         onBlur={() => setFocused(false)}
// //       >
// //         {buildDisplayElements()}
// //       </div>
      
// //       {error && (
// //         <div style={styles.error}>{error}</div>
// //       )}
      
// //       <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
// //         <div style={styles.row}>
// //           <span style={styles.label}>Var</span>
// //           <div style={styles.btnGroup}>
// //             {variables.map((v) => (
// //               <button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => insertAt(v)}>{v}</button>
// //             ))}
// //           </div>
// //         </div>
        
// //         <div style={styles.row}>
// //           <span style={styles.label}>Num</span>
// //           <div style={styles.btnGroup}>
// //             {numbers.map((n) => (
// //               <button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => insertAt(n)}>{n}</button>
// //             ))}
// //           </div>
// //         </div>
        
// //         <div style={styles.row}>
// //           <span style={styles.label}>Op</span>
// //           <div style={styles.btnGroup}>
// //             {operators.map((op) => (
// //               <button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>
// //                 {op === '^' ? 'x\u207F' : op}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
        
// //         <div style={styles.row}>
// //           <span style={styles.label}></span>
// //           <div style={styles.btnGroup}>
// //             <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('e')}>e</button>
// //             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt('(')}>(</button>
// //             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt(')')}>)</button>
// //           </div>
// //         </div>
        
// //         <div style={styles.actions}>
// //           <button style={{ ...styles.btnAction, ...styles.btnClear }} onClick={clearAll}>Clear</button>
// //           <button style={{ ...styles.btnAction, ...styles.btnBack }} onClick={() => { if (cursorPos > 0) deleteAt(cursorPos - 1); }}>{'\u232B'}</button>
// //           <button 
// //             style={{ ...styles.btnAction, ...styles.btnSolve, ...(expression.length === 0 ? styles.btnDisabled : {}) }} 
// //             onClick={solve}
// //             disabled={expression.length === 0}
// //           >
// //             Solve
// //           </button>
// //         </div>
// //       </div>
      
// //       {result && result.solution && (
// //         <div style={styles.solution}>
// //           <span style={styles.solVar}>{result.solution.variable}</span>
// //           <span style={styles.solEq}> = </span>
// //           <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
// //           {!result.solution.exact && <span style={styles.solApprox}> {'\u2248'}</span>}
// //         </div>
// //       )}
// //     </div>
// //   );
// // });

// // ExponentialSolverEngine.displayName = 'ExponentialSolverEngine';

// // const getEngineStyles = (darkMode) => ({
// //   container: {
// //     background: darkMode ? '#1e293b' : '#fff',
// //     borderRadius: '16px',
// //     padding: '20px',
// //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// //   },
// //   display: {
// //     background: darkMode 
// //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //     borderRadius: '12px',
// //     padding: '18px 22px',
// //     minHeight: '54px',
// //     marginBottom: '16px',
// //     display: 'flex',
// //     alignItems: 'baseline',
// //     flexWrap: 'wrap',
// //     fontSize: '1.4rem',
// //     color: '#fff',
// //     fontWeight: '500',
// //   },
// //   placeholder: {
// //     color: 'rgba(255,255,255,0.5)',
// //     fontStyle: 'italic',
// //     fontSize: '0.95rem',
// //   },
// //   displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px' },
// //   displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
// //   displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
// //   displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
// //   error: {
// //     background: darkMode ? '#451a1a' : '#fef2f2',
// //     border: darkMode ? '1px solid #7f1d1d' : '1px solid #fecaca',
// //     borderRadius: '8px',
// //     padding: '10px 14px',
// //     marginBottom: '12px',
// //     color: darkMode ? '#fca5a5' : '#dc2626',
// //     fontSize: '0.85rem',
// //   },
// //   builder: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '10px',
// //   },
// //   row: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '10px',
// //   },
// //   label: {
// //     fontSize: '0.65rem',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.5px',
// //     color: darkMode ? '#64748b' : '#94a3b8',
// //     width: '28px',
// //     flexShrink: 0,
// //     fontWeight: '600',
// //   },
// //   btnGroup: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '6px',
// //   },
// //   btn: {
// //     fontSize: '0.95rem',
// //     padding: '8px 12px',
// //     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
// //     background: darkMode ? '#334155' : '#f8fafc',
// //     color: darkMode ? '#e2e8f0' : '#334155',
// //     cursor: 'pointer',
// //     borderRadius: '8px',
// //     minWidth: '36px',
// //     fontFamily: 'inherit',
// //     fontWeight: '500',
// //     transition: 'all 0.15s',
// //   },
// //   btnVar: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600' },
// //   btnNum: { color: darkMode ? '#f1f5f9' : '#1e293b' },
// //   btnOp: { color: darkMode ? '#cbd5e1' : '#64748b', fontWeight: '600' },
// //   btnSpecial: { color: darkMode ? '#22d3ee' : '#0891b2', fontWeight: '600', fontStyle: 'italic' },
// //   btnBracket: { fontSize: '1.1rem', color: darkMode ? '#94a3b8' : '#64748b' },
// //   actions: {
// //     display: 'flex',
// //     gap: '8px',
// //     marginTop: '6px',
// //     paddingTop: '14px',
// //     borderTop: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
// //   },
// //   btnAction: {
// //     fontSize: '0.85rem',
// //     fontWeight: '600',
// //     padding: '12px 18px',
// //     border: 'none',
// //     cursor: 'pointer',
// //     borderRadius: '8px',
// //     fontFamily: 'inherit',
// //     transition: 'all 0.15s',
// //   },
// //   btnClear: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
// //   btnBack: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
// //   btnSolve: {
// //     background: darkMode 
// //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //     color: '#fff',
// //     marginLeft: 'auto',
// //     padding: '12px 24px',
// //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
// //   },
// //   btnDisabled: { background: darkMode ? '#475569' : '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
// //   solution: {
// //     marginTop: '16px',
// //     padding: '14px 18px',
// //     background: darkMode 
// //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //     borderRadius: '10px',
// //     textAlign: 'center',
// //     fontSize: '1.3rem',
// //     fontWeight: '600',
// //     color: '#fff',
// //   },
// //   solVar: { fontStyle: 'italic' },
// //   solEq: { opacity: 0.8, margin: '0 6px' },
// //   solNum: { color: '#fbbf24' },
// //   solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
// // });

// // /* =====================================================
// //    EQUATION FORM GENERATORS
// //    ===================================================== */

// // const equationForms = [
// //   {
// //     id: 'simple',
// //     name: 'Simple',
// //     formula: 'b\u02E3 = c',
// //     generate: (nice) => {
// //       if (nice) {
// //         const bases = [2, 3, 5, 10];
// //         const base = bases[Math.floor(Math.random() * bases.length)];
// //         const exp = Math.floor(Math.random() * 5) + 1;
// //         return `${base}^x=${Math.pow(base, exp)}`;
// //       }
// //       return `${Math.floor(Math.random() * 8) + 2}^x=${Math.floor(Math.random() * 900) + 10}`;
// //     }
// //   },
// //   {
// //     id: 'coefficient',
// //     name: 'With Coefficient',
// //     formula: 'a \u00B7 b\u02E3 = c',
// //     generate: (nice) => {
// //       if (nice) {
// //         const bases = [2, 3, 5];
// //         const base = bases[Math.floor(Math.random() * bases.length)];
// //         const exp = Math.floor(Math.random() * 4) + 1;
// //         const coeff = Math.floor(Math.random() * 5) + 2;
// //         return `${coeff}\u00D7${base}^x=${coeff * Math.pow(base, exp)}`;
// //       }
// //       const base = Math.floor(Math.random() * 7) + 2;
// //       const coeff = Math.floor(Math.random() * 9) + 2;
// //       return `${coeff}\u00D7${base}^x=${Math.floor(Math.random() * 500) + 20}`;
// //     }
// //   },
// //   {
// //     id: 'linear-exp',
// //     name: 'Linear Exponent',
// //     formula: 'b\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
// //     generate: (nice) => {
// //       const bases = [2, 3, 5];
// //       const base = bases[Math.floor(Math.random() * bases.length)];
// //       const m = Math.floor(Math.random() * 3) + 1;
// //       const n = Math.floor(Math.random() * 5) - 2;
// //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// //       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
// //       if (nice) {
// //         const x = Math.floor(Math.random() * 4) + 1;
// //         return `${base}^(${mStr}${nStr})=${Math.pow(base, m * x + n)}`;
// //       }
// //       return `${base}^(${mStr}${nStr})=${Math.floor(Math.random() * 200) + 5}`;
// //     }
// //   },
// //   {
// //     id: 'same-base',
// //     name: 'Same Base',
// //     formula: 'b\u1DA0\u207D\u02E3\u207E = b\u207F',
// //     generate: () => {
// //       const bases = [2, 3, 5];
// //       const base = bases[Math.floor(Math.random() * bases.length)];
// //       const a = Math.floor(Math.random() * 3) + 1;
// //       const b = Math.floor(Math.random() * 5);
// //       const c = Math.floor(Math.random() * 6) + 1;
// //       const aStr = a === 1 ? 'x' : `${a}\u00D7x`;
// //       const bStr = b > 0 ? `+${b}` : '';
// //       return `${base}^(${aStr}${bStr})=${base}^${c}`;
// //     }
// //   },
// //   {
// //     id: 'convertible',
// //     name: 'Convertible',
// //     formula: 'a\u02E3 = b',
// //     generate: () => {
// //       const families = [
// //         { bases: [2, 4, 8, 16, 32], root: 2 },
// //         { bases: [3, 9, 27, 81], root: 3 },
// //         { bases: [5, 25, 125], root: 5 }
// //       ];
// //       const family = families[Math.floor(Math.random() * families.length)];
// //       const base = family.bases[Math.floor(Math.random() * (family.bases.length - 1))];
// //       const result = family.bases[Math.floor(Math.random() * family.bases.length)];
// //       return `${base}^x=${result}`;
// //     }
// //   },
// //   {
// //     id: 'with-constant',
// //     name: 'With Constant',
// //     formula: 'b\u02E3 + c = d',
// //     generate: (nice) => {
// //       if (nice) {
// //         const bases = [2, 3, 5];
// //         const base = bases[Math.floor(Math.random() * bases.length)];
// //         const exp = Math.floor(Math.random() * 4) + 1;
// //         const c = Math.floor(Math.random() * 10) + 1;
// //         return `${base}^x+${c}=${Math.pow(base, exp) + c}`;
// //       }
// //       const base = Math.floor(Math.random() * 7) + 2;
// //       const c = Math.floor(Math.random() * 20) + 1;
// //       return `${base}^x+${c}=${Math.floor(Math.random() * 200) + c + 1}`;
// //     }
// //   },
// //   {
// //     id: 'natural',
// //     name: 'Natural Base',
// //     formula: 'e\u02E3 = c',
// //     generate: (nice) => {
// //       if (nice) {
// //         const vals = [1, 2, 3, 5, 7, 10, 20, 50, 100];
// //         return `e^x=${vals[Math.floor(Math.random() * vals.length)]}`;
// //       }
// //       return `e^x=${(Math.random() * 100 + 1).toFixed(2)}`;
// //     }
// //   },
// //   {
// //     id: 'natural-linear',
// //     name: 'Natural Linear',
// //     formula: 'e\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
// //     generate: (nice) => {
// //       const m = Math.floor(Math.random() * 3) + 1;
// //       const n = Math.floor(Math.random() * 5) - 2;
// //       const nStr = n >= 0 ? `+${n}` : `${n}`;
// //       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
// //       if (nice) {
// //         const vals = [1, 2, 5, 10, 20, 50];
// //         return `e^(${mStr}${nStr})=${vals[Math.floor(Math.random() * vals.length)]}`;
// //       }
// //       return `e^(${mStr}${nStr})=${(Math.random() * 50 + 1).toFixed(2)}`;
// //     }
// //   }
// // ];

// // /* =====================================================
// //    WRAPPER COMPONENT (Full Educational Version)
// //    ===================================================== */

// // const ExponentialEquationSolver = () => {
// //   const engineRef = React.useRef(null);
// //   const [solveResult, setSolveResult] = useState(null);
// //   const [selectedForm, setSelectedForm] = useState(null);
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [examplesOpen, setExamplesOpen] = useState(false);

// //   const handleFormClick = (form) => {
// //     const isNice = Math.random() < 0.8;
// //     const equation = form.generate(isNice);
// //     setSelectedForm(form.id);
// //     setSolveResult(null);
// //     if (engineRef.current) {
// //       engineRef.current.loadEquation(equation);
// //     }
// //   };

// //   const handleResultChange = (result) => {
// //     setSolveResult(result);
// //   };

// //   const handleClear = () => {
// //     setSelectedForm(null);
// //     setSolveResult(null);
// //   };

// //   const toggleDarkMode = () => {
// //     setDarkMode(!darkMode);
// //   };

// //   const wStyles = getWrapperStyles(darkMode);

// //   const renderStepContent = (step, index) => {
// //     if (!step.before && !step.after) return null;
// //     return (
// //       <div>
// //         {step.before && (
// //           <div style={wStyles.stepMath}>
// //             {astToMathDisplay(step.before, `before-${index}`, darkMode)}
// //           </div>
// //         )}
// //         {step.after && (
// //           <div style={wStyles.stepTransform}>
// //             <span style={wStyles.arrow}>{'\u27F9'}</span>
// //             <div style={wStyles.stepMath}>
// //               {astToMathDisplay(step.after, `after-${index}`, darkMode)}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   };

// //   return (
// //     <div style={wStyles.container}>
// //       <style>{THEME_CSS}</style>
// //       <div style={wStyles.inner}>
        
// //         {/* Header */}
// //         <header style={wStyles.header}>
// //           <div style={wStyles.headerTop}>
// //             <div style={wStyles.headerLeft}>
// //               <div style={wStyles.iconWrap}>
// //                 <span style={wStyles.icon}>x</span>
// //               </div>
// //               <div>
// //                 <h1 style={wStyles.title}>Exponential Equation Solver</h1>
// //                 <p style={wStyles.subtitle}>Solve equations with variables in exponents</p>
// //               </div>
// //             </div>
// //             <button style={wStyles.themeToggle} onClick={toggleDarkMode}>
// //               {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
// //             </button>
// //           </div>
// //         </header>

// //         {/* Main Content - Side by Side */}
// //         <div style={wStyles.main}>
          
// //           {/* Left Column - Engine + Forms */}
// //           <div style={wStyles.leftCol}>
            
// //             <ExponentialSolverEngine 
// //               ref={engineRef} 
// //               onResultChange={handleResultChange}
// //               onClear={handleClear}
// //               darkMode={darkMode}
// //               compact={true}
// //             />
            
// //             {/* Equation Forms - Collapsible */}
// //             <div style={wStyles.formsSection}>
// //               <button 
// //                 style={wStyles.accordionHeader}
// //                 onClick={() => setExamplesOpen(!examplesOpen)}
// //               >
// //                 <span style={wStyles.sectionTitle}>Try an Example</span>
// //                 <span style={wStyles.chevron}>{examplesOpen ? '\u25B2' : '\u25BC'}</span>
// //               </button>
              
// //               {examplesOpen && (
// //                 <div style={wStyles.accordionContent}>
// //                   <p style={wStyles.formsHint}>Click any type to generate a random equation. Click again for a new one!</p>
// //                   <div style={wStyles.formsGrid}>
// //                     {equationForms.map((form) => (
// //                       <button
// //                         key={form.id}
// //                         className="ee-form-card"
// //                         style={{
// //                           ...wStyles.formCard,
// //                           ...(selectedForm === form.id ? wStyles.formCardSelected : {})
// //                         }}
// //                         onClick={() => handleFormClick(form)}
// //                       >
// //                         <div style={wStyles.formName}>{form.name}</div>
// //                         <div style={wStyles.formFormula}>{form.formula}</div>
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
          
// //           {/* Right Column - SolutionPanel */}
// //           <div style={wStyles.rightCol}>
// //             <SolutionPanel
// //               steps={solveResult?.steps || []}
// //               graphData={solveResult?.graphData || null}
// //               darkMode={darkMode}
// //               placeholder="Select an equation type or enter your own equation, then click Solve to see the step-by-step solution."
// //               stepsTitle="Solution Steps"
// //               renderStepContent={renderStepContent}
// //               stepCardClass={() => ''}
// //             />
            
// //             {solveResult && solveResult.solution && (
// //               <div style={wStyles.finalAnswer}>
// //                 <div style={wStyles.answerLabel}>Answer</div>
// //                 <div style={wStyles.answerValue}>
// //                   <span style={wStyles.answerVar}>{solveResult.solution.variable}</span>
// //                   <span style={wStyles.answerEq}> = </span>
// //                   <span style={wStyles.answerNum}>{formatNumber(solveResult.solution.value)}</span>
// //                 </div>
// //                 <div style={wStyles.answerNote}>
// //                   {solveResult.solution.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const getWrapperStyles = (darkMode) => ({
// //   container: {
// //     minHeight: '100vh',
// //     background: darkMode 
// //       ? '#0f172a'
// //       : 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
// //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// //     padding: '30px 20px',
// //   },
// //   inner: {
// //     maxWidth: '1100px',
// //     margin: '0 auto',
// //   },
// //   header: {
// //     marginBottom: '24px',
// //   },
// //   headerTop: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   headerLeft: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '16px',
// //   },
// //   iconWrap: {
// //     width: '50px',
// //     height: '50px',
// //     background: darkMode 
// //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //     borderRadius: '14px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
// //   },
// //   icon: {
// //     color: '#fff',
// //     fontSize: '24px',
// //     fontStyle: 'italic',
// //     fontWeight: '700',
// //   },
// //   title: {
// //     fontSize: '1.7rem',
// //     fontWeight: '700',
// //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// //     margin: '0 0 4px 0',
// //   },
// //   subtitle: {
// //     fontSize: '0.95rem',
// //     color: darkMode ? '#94a3b8' : '#64748b',
// //     margin: 0,
// //   },
// //   themeToggle: {
// //     width: '44px',
// //     height: '44px',
// //     borderRadius: '12px',
// //     border: 'none',
// //     background: darkMode ? '#334155' : '#fff',
// //     cursor: 'pointer',
// //     fontSize: '1.3rem',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     boxShadow: darkMode ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
// //     transition: 'all 0.2s',
// //   },
// //   main: {
// //     display: 'flex',
// //     gap: '24px',
// //     alignItems: 'flex-start',
// //   },
// //   leftCol: {
// //     flex: '1 1 50%',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '16px',
// //   },
// //   rightCol: {
// //     flex: '1 1 50%',
// //     background: darkMode ? '#1e293b' : '#fff',
// //     borderRadius: '16px',
// //     padding: '20px',
// //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// //     minHeight: '500px',
// //   },
// //   formsSection: {
// //     background: darkMode ? '#1e293b' : '#fff',
// //     borderRadius: '16px',
// //     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
// //     overflow: 'hidden',
// //   },
// //   accordionHeader: {
// //     width: '100%',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: '16px',
// //     background: 'transparent',
// //     border: 'none',
// //     cursor: 'pointer',
// //     fontFamily: 'inherit',
// //   },
// //   sectionTitle: {
// //     fontSize: '0.75rem',
// //     textTransform: 'uppercase',
// //     letterSpacing: '1.5px',
// //     color: darkMode ? '#94a3b8' : '#64748b',
// //     fontWeight: '600',
// //   },
// //   chevron: {
// //     fontSize: '0.75rem',
// //     color: darkMode ? '#64748b' : '#94a3b8',
// //   },
// //   accordionContent: {
// //     padding: '0 16px 16px',
// //   },
// //   formsGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(2, 1fr)',
// //     gap: '8px',
// //   },
// //   formsHint: {
// //     fontSize: '0.8rem',
// //     color: darkMode ? '#64748b' : '#94a3b8',
// //     margin: '0 0 10px 0',
// //     fontStyle: 'italic',
// //   },
// //   formCard: {
// //     background: darkMode ? '#334155' : '#f8fafc',
// //     border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0',
// //     borderRadius: '10px',
// //     padding: '10px 12px',
// //     cursor: 'pointer',
// //     transition: 'all 0.2s ease',
// //     textAlign: 'left',
// //     fontFamily: 'inherit',
// //     outline: 'none',
// //   },
// //   formCardSelected: {
// //     borderColor: '#3b82f6',
// //     background: darkMode ? '#1e3a5f' : '#eff6ff',
// //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)',
// //   },
// //   formName: {
// //     fontSize: '0.8rem',
// //     fontWeight: '600',
// //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// //     marginBottom: '2px',
// //   },
// //   formFormula: {
// //     fontSize: '0.9rem',
// //     color: darkMode ? '#60a5fa' : '#3b82f6',
// //     fontFamily: 'ui-monospace, monospace',
// //   },
// //   stepMath: {
// //     fontSize: '1.05rem',
// //     color: darkMode ? '#e2e8f0' : '#1e3a5f',
// //     background: darkMode ? '#334155' : '#fff',
// //     padding: '10px 14px',
// //     borderRadius: '8px',
// //     display: 'inline-block',
// //     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
// //   },
// //   stepTransform: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '10px',
// //     marginTop: '8px',
// //   },
// //   arrow: {
// //     color: '#3b82f6',
// //     fontSize: '1.1rem',
// //   },
// //   finalAnswer: {
// //     background: darkMode 
// //       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
// //       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //     borderRadius: '12px',
// //     padding: '18px 20px',
// //     color: '#fff',
// //     textAlign: 'center',
// //     marginTop: '16px',
// //   },
// //   answerLabel: {
// //     fontSize: '0.7rem',
// //     textTransform: 'uppercase',
// //     letterSpacing: '2px',
// //     opacity: 0.8,
// //     marginBottom: '6px',
// //     fontWeight: '600',
// //   },
// //   answerValue: {
// //     fontSize: '1.5rem',
// //     fontWeight: '700',
// //   },
// //   answerVar: { fontStyle: 'italic' },
// //   answerEq: { opacity: 0.8, margin: '0 6px' },
// //   answerNum: { color: '#fbbf24' },
// //   answerNote: {
// //     fontSize: '0.8rem',
// //     opacity: 0.75,
// //     marginTop: '6px',
// //   },
// // });

// // export default ExponentialEquationSolver;


// import React, { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
// import SolutionPanel from './SolutionPanel';
// import THEME_CSS from './MathSolverThemes';

// /* =====================================================
//    EXPONENTIAL EQUATION SOLVER
   
//    Two exports:
//    - ExponentialSolverEngine: Standalone solver component
//    - ExponentialEquationSolver: Full educational wrapper (default)
   
//    Features:
//    - Integrated SolutionPanel with graph support
//    - Theme support via CSS variables
//    - Dark mode toggle
//    - Full cursor: click-to-place, arrow keys, blinking caret
//    - Insert/delete at cursor position
//    ===================================================== */


// /* =====================================================
//    TOKENIZER
//    ===================================================== */

// const TokenType = {
//   NUMBER: 'NUMBER',
//   VARIABLE: 'VARIABLE',
//   MULTIPLY: 'MULTIPLY',
//   DIVIDE: 'DIVIDE',
//   POWER: 'POWER',
//   LPAREN: 'LPAREN',
//   RPAREN: 'RPAREN',
//   PLUS: 'PLUS',
//   MINUS: 'MINUS',
//   EQUALS: 'EQUALS',
//   E: 'E',
// };

// function tokenize(input) {
//   const tokens = [];
//   let i = 0;
  
//   while (i < input.length) {
//     const char = input[i];
    
//     if (/\s/.test(char)) {
//       i++;
//       continue;
//     }
    
//     if (/[0-9]/.test(char) || (char === '.' && /[0-9]/.test(input[i + 1]))) {
//       let num = '';
//       while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) {
//         num += input[i];
//         i++;
//       }
//       tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) });
//       continue;
//     }
    
//     if (char === 'e' && (i + 1 >= input.length || !/[a-zA-Z]/.test(input[i + 1]))) {
//       tokens.push({ type: TokenType.E });
//       i++;
//       continue;
//     }
    
//     if (/[a-zA-Z]/.test(char)) {
//       tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
//       i++;
//       continue;
//     }
    
//     const charMap = {
//       '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY,
//       '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE,
//       '^': TokenType.POWER,
//       '(': TokenType.LPAREN, ')': TokenType.RPAREN,
//       '+': TokenType.PLUS, '-': TokenType.MINUS,
//       '=': TokenType.EQUALS,
//     };
    
//     if (charMap[char]) {
//       tokens.push({ type: charMap[char] });
//       i++;
//       continue;
//     }
    
//     i++;
//   }
  
//   return tokens;
// }

// /* =====================================================
//    PARSER
//    ===================================================== */

// function parse(tokens) {
//   let pos = 0;
  
//   const peek = () => tokens[pos];
//   const consume = (expectedType) => {
//     const token = tokens[pos];
//     if (expectedType && token?.type !== expectedType) {
//       throw new Error(`Expected ${expectedType} but got ${token?.type}`);
//     }
//     pos++;
//     return token;
//   };
  
//   const parseEquation = () => {
//     const left = parseExpression();
//     if (peek()?.type === TokenType.EQUALS) {
//       consume();
//       return { type: 'EQUATION', left, right: parseExpression() };
//     }
//     return left;
//   };
  
//   const parseExpression = () => parseAdditive();
  
//   const parseAdditive = () => {
//     let left = parseMultiplicative();
//     while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) {
//       const op = consume().type;
//       left = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left, right: parseMultiplicative() };
//     }
//     return left;
//   };
  
//   const parseMultiplicative = () => {
//     let left = parsePower();
//     while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) {
//       const op = consume().type;
//       left = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left, right: parsePower() };
//     }
//     return left;
//   };
  
//   const parsePower = () => {
//     let base = parseUnary();
//     if (peek()?.type === TokenType.POWER) {
//       consume();
//       return { type: 'POWER', base, exponent: parsePower() };
//     }
//     return base;
//   };
  
//   const parseUnary = () => {
//     if (peek()?.type === TokenType.MINUS) {
//       consume();
//       return { type: 'NEGATE', operand: parseUnary() };
//     }
//     return parsePrimary();
//   };
  
//   const parsePrimary = () => {
//     const token = peek();
//     if (token?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: token.value }; }
//     if (token?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: token.value }; }
//     if (token?.type === TokenType.E) { consume(); return { type: 'E' }; }
//     if (token?.type === TokenType.LPAREN) {
//       consume();
//       const expr = parseExpression();
//       consume(TokenType.RPAREN);
//       return expr;
//     }
//     throw new Error(`Unexpected token: ${token?.type}`);
//   };
  
//   const ast = parseEquation();
//   if (pos < tokens.length) throw new Error('Unexpected tokens at end');
//   return ast;
// }

// /* =====================================================
//    HELPERS
//    ===================================================== */

// function formatNumber(num) {
//   if (Number.isInteger(num)) return String(num);
//   return (Math.round(num * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, '');
// }

// function hasVariableInExponent(node) {
//   if (!node) return false;
//   if (node.type === 'POWER') return containsVariable(node.exponent);
//   if (['MULTIPLY', 'DIVIDE', 'ADD', 'SUBTRACT'].includes(node.type)) {
//     return hasVariableInExponent(node.left) || hasVariableInExponent(node.right);
//   }
//   return false;
// }

// function containsVariable(node) {
//   if (!node) return false;
//   if (node.type === 'VARIABLE') return true;
//   if (node.type === 'NUMBER' || node.type === 'E') return false;
//   if (node.type === 'NEGATE') return containsVariable(node.operand);
//   if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
//   return containsVariable(node.left) || containsVariable(node.right);
// }

// function evaluateConstant(node) {
//   if (!node) return null;
//   switch (node.type) {
//     case 'NUMBER': return node.value;
//     case 'E': return Math.E;
//     case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
//     case 'ADD': case 'SUBTRACT': case 'MULTIPLY': case 'DIVIDE': case 'POWER': {
//       const l = evaluateConstant(node.left || node.base);
//       const r = evaluateConstant(node.right || node.exponent);
//       if (l === null || r === null) return null;
//       if (node.type === 'ADD') return l + r;
//       if (node.type === 'SUBTRACT') return l - r;
//       if (node.type === 'MULTIPLY') return l * r;
//       if (node.type === 'DIVIDE') return r !== 0 ? l / r : null;
//       if (node.type === 'POWER') return Math.pow(l, r);
//       return null;
//     }
//     default: return null;
//   }
// }

// function extractCoefficient(node) {
//   if (node.type !== 'MULTIPLY') return { coefficient: null, exponential: null };
//   if (node.left.type === 'POWER' && hasVariableInExponent(node.left)) {
//     return { coefficient: node.right, exponential: node.left };
//   }
//   if (node.right.type === 'POWER' && hasVariableInExponent(node.right)) {
//     return { coefficient: node.left, exponential: node.right };
//   }
//   return { coefficient: null, exponential: null };
// }

// function extractAdditiveConstant(node) {
//   if (node.type !== 'ADD' && node.type !== 'SUBTRACT') {
//     return { exponential: null, constant: null, isAdd: false };
//   }
//   const isAdd = node.type === 'ADD';
//   if (hasVariableInExponent(node.left) && !containsVariable(node.right)) {
//     const constVal = evaluateConstant(node.right);
//     if (node.left.type === 'POWER') {
//       return { exponential: node.left, constant: constVal, isAdd };
//     }
//   }
//   if (hasVariableInExponent(node.right) && !containsVariable(node.left) && isAdd) {
//     const constVal = evaluateConstant(node.left);
//     if (node.right.type === 'POWER') {
//       return { exponential: node.right, constant: constVal, isAdd };
//     }
//   }
//   return { exponential: null, constant: null, isAdd: false };
// }

// function findPerfectPower(base, result) {
//   if (result === 1) return 0;
//   if (result === base) return 1;
//   let power = 0, current = 1;
//   while (current < result && power < 100) {
//     current *= base;
//     power++;
//     if (current === result) return power;
//   }
//   power = -1;
//   current = 1 / base;
//   while (power > -20) {
//     if (Math.abs(current - result) < 1e-10) return power;
//     current /= base;
//     power--;
//   }
//   return null;
// }

// function parseLinearExponent(node) {
//   if (node.type === 'VARIABLE') {
//     return { variable: node.name, coefficient: 1, constant: 0 };
//   }
//   if (node.type === 'MULTIPLY') {
//     const lv = evaluateConstant(node.left), rv = evaluateConstant(node.right);
//     if (lv !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: lv, constant: 0 };
//     if (rv !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rv, constant: 0 };
//   }
//   if (node.type === 'ADD' || node.type === 'SUBTRACT') {
//     const leftLinear = parseLinearExponent(node.left);
//     const rightConst = evaluateConstant(node.right);
//     if (leftLinear && rightConst !== null) {
//       return {
//         variable: leftLinear.variable,
//         coefficient: leftLinear.coefficient,
//         constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst)
//       };
//     }
//     const rightLinear = parseLinearExponent(node.right);
//     const leftConst = evaluateConstant(node.left);
//     if (rightLinear && leftConst !== null && node.type === 'ADD') {
//       return {
//         variable: rightLinear.variable,
//         coefficient: rightLinear.coefficient,
//         constant: rightLinear.constant + leftConst
//       };
//     }
//   }
//   return null;
// }

// /* =====================================================
//    AST TO MATH DISPLAY
//    ===================================================== */

// function astToMathDisplay(node, key = 'root', darkMode = false) {
//   if (!node) return null;
  
//   const s = getMathStyles(darkMode);
  
//   const wrap = (n, k) => {
//     if (n.type === 'ADD' || n.type === 'SUBTRACT') {
//       return <span key={k}>({astToMathDisplay(n, k, darkMode)})</span>;
//     }
//     return astToMathDisplay(n, k, darkMode);
//   };
  
//   switch (node.type) {
//     case 'NUMBER': return <span key={key} style={s.number}>{formatNumber(node.value)}</span>;
//     case 'VARIABLE': return <span key={key} style={s.variable}>{node.name}</span>;
//     case 'E': return <span key={key} style={s.euler}>e</span>;
//     case 'NEGATE': return <span key={key}>{'\u2212'}{astToMathDisplay(node.operand, `${key}-neg`, darkMode)}</span>;
//     case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> + </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
//     case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> {'\u2212'} </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
//     case 'MULTIPLY': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> {'\u00B7'} </span>{wrap(node.right, `${key}-r`)}</span>;
//     case 'DIVIDE': return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> / </span>{wrap(node.right, `${key}-r`)}</span>;
//     case 'POWER': return <span key={key} style={s.power}>{wrap(node.base, `${key}-base`)}<sup style={s.sup}>{astToMathDisplay(node.exponent, `${key}-exp`, darkMode)}</sup></span>;
//     case 'EQUATION': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.equals}> = </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
//     default: return null;
//   }
// }

// const getMathStyles = (darkMode) => ({
//   number: { color: darkMode ? '#e2e8f0' : '#1e3a5f' },
//   variable: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '500' },
//   euler: { fontStyle: 'italic', color: darkMode ? '#22d3ee' : '#0891b2' },
//   op: { color: darkMode ? '#94a3b8' : '#64748b', margin: '0 2px' },
//   equals: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
//   power: { display: 'inline' },
//   sup: { fontSize: '0.7em', color: darkMode ? '#60a5fa' : '#3b82f6', marginLeft: '1px', verticalAlign: 'super', position: 'relative', top: '-0.4em' },
// });

// /* =====================================================
//    SOLVER
//    ===================================================== */

// function solveExponentialEquation(ast) {
//   const steps = [];
//   let graphData = null;
  
//   if (ast.type !== 'EQUATION') {
//     throw new Error('Input must be an equation (use = sign)');
//   }
  
//   let { left, right } = ast;
//   const leftHasVar = hasVariableInExponent(left);
//   const rightHasVar = hasVariableInExponent(right);
  
//   let expSide, constSide;
  
//   if (leftHasVar && !rightHasVar) {
//     expSide = left;
//     constSide = right;
//   } else if (rightHasVar && !leftHasVar) {
//     expSide = right;
//     constSide = left;
//     steps.push({
//       rule: 'Rearrange Equation',
//       description: 'Move the exponential term to the left side for clarity.',
//       before: ast,
//       after: { type: 'EQUATION', left: expSide, right: constSide }
//     });
//   } else if (leftHasVar && rightHasVar) {
//     throw new Error('Equations with exponentials on both sides require logarithms on both sides. Coming soon!');
//   } else {
//     throw new Error('No variable found in any exponent');
//   }
  
//   const constValue = evaluateConstant(constSide);
//   if (constValue !== null && constSide.type !== 'NUMBER') {
//     const newConstSide = { type: 'NUMBER', value: constValue };
//     steps.push({
//       rule: 'Evaluate Constant',
//       description: 'Simplify the right side to a single number.',
//       before: { type: 'EQUATION', left: expSide, right: constSide },
//       after: { type: 'EQUATION', left: expSide, right: newConstSide }
//     });
//     constSide = newConstSide;
//   }
  
//   if (expSide.type === 'MULTIPLY') {
//     const { coefficient, exponential } = extractCoefficient(expSide);
//     if (coefficient && exponential) {
//       const coeffValue = evaluateConstant(coefficient);
//       const constVal = evaluateConstant(constSide);
//       if (coeffValue !== null && constVal !== null) {
//         const newConst = { type: 'NUMBER', value: constVal / coeffValue };
//         steps.push({
//           rule: 'Isolate Exponential Term',
//           description: `Divide both sides by ${formatNumber(coeffValue)} to isolate the exponential.`,
//           before: { type: 'EQUATION', left: expSide, right: constSide },
//           after: { type: 'EQUATION', left: exponential, right: newConst }
//         });
//         expSide = exponential;
//         constSide = newConst;
//       }
//     }
//   }
  
//   if (expSide.type === 'ADD' || expSide.type === 'SUBTRACT') {
//     const { exponential, constant, isAdd } = extractAdditiveConstant(expSide);
//     if (exponential && constant !== null) {
//       const constVal = evaluateConstant(constSide);
//       if (constVal !== null) {
//         const newConstVal = isAdd ? constVal - constant : constVal + constant;
//         const newConst = { type: 'NUMBER', value: newConstVal };
//         const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
//         steps.push({
//           rule: 'Isolate Exponential Term',
//           description: `${action} both sides.`,
//           before: { type: 'EQUATION', left: expSide, right: constSide },
//           after: { type: 'EQUATION', left: exponential, right: newConst }
//         });
//         expSide = exponential;
//         constSide = newConst;
//       }
//     }
//   }
  
//   if (expSide.type !== 'POWER') {
//     throw new Error('Could not isolate exponential term');
//   }
  
//   const base = expSide.base;
//   const exponent = expSide.exponent;
//   const resultValue = evaluateConstant(constSide);
  
//   if (resultValue === null) throw new Error('Right side must evaluate to a number');
//   if (resultValue <= 0) throw new Error('Exponential equations cannot equal zero or negative numbers');
  
//   const isNaturalBase = base.type === 'E';
//   const baseValue = isNaturalBase ? Math.E : evaluateConstant(base);
  
//   if (baseValue === null) throw new Error('Base must be a constant');
//   if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');
  
//   let perfectPower = null;
//   if (!isNaturalBase && Number.isInteger(baseValue) && Number.isInteger(resultValue)) {
//     perfectPower = findPerfectPower(baseValue, resultValue);
//   }
  
//   if (exponent.type === 'VARIABLE') {
//     const varName = exponent.name;
    
//     if (perfectPower !== null) {
//       steps.push({
//         rule: 'Recognize Perfect Power',
//         description: `${formatNumber(resultValue)} = ${formatNumber(baseValue)} raised to power ${perfectPower}.`,
//         before: { type: 'EQUATION', left: expSide, right: constSide },
//         after: { type: 'EQUATION', left: expSide, right: { type: 'POWER', base: { type: 'NUMBER', value: baseValue }, exponent: { type: 'NUMBER', value: perfectPower } } }
//       });
//       steps.push({
//         rule: 'Match Bases',
//         description: `Same base (${formatNumber(baseValue)}) means exponents are equal.`,
//         before: null,
//         after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: perfectPower } }
//       });
      
//       graphData = {
//         type: 'exponential',
//         base: baseValue,
//         solution: { x: perfectPower, y: resultValue }
//       };
      
//       return { steps, solution: { variable: varName, value: perfectPower, exact: true }, graphData };
//     }
    
//     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
//     steps.push({
//       rule: 'Apply Logarithm',
//       description: `Take ${logName} of both sides.`,
//       before: { type: 'EQUATION', left: expSide, right: constSide },
//       after: null
//     });
    
//     steps.push({
//       rule: 'Simplify',
//       description: isNaturalBase ? 'ln(e\u02E3) = x' : 'log base b of b\u02E3 = x',
//       before: null,
//       after: null
//     });
    
//     const solution = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
    
//     steps.push({
//       rule: 'Calculate',
//       description: isNaturalBase 
//         ? `ln(${formatNumber(resultValue)}) \u2248 ${formatNumber(solution)}`
//         : `log(${formatNumber(resultValue)}) \u00F7 log(${formatNumber(baseValue)}) \u2248 ${formatNumber(solution)}`,
//       before: null,
//       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: solution } }
//     });
    
//     graphData = {
//       type: 'exponential',
//       base: baseValue,
//       solution: { x: solution, y: resultValue }
//     };
    
//     return { steps, solution: { variable: varName, value: solution, exact: false }, graphData };
//   }
  
//   const linearInfo = parseLinearExponent(exponent);
//   if (linearInfo) {
//     const { variable, coefficient, constant } = linearInfo;
//     const logResult = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);
//     const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
    
//     steps.push({
//       rule: 'Apply Logarithm',
//       description: `Take ${logName} of both sides to bring down the exponent.`,
//       before: { type: 'EQUATION', left: expSide, right: constSide },
//       after: null
//     });
    
//     const expStr = `${coefficient === 1 ? '' : coefficient}${variable}${constant >= 0 ? ' + ' + constant : ' \u2212 ' + Math.abs(constant)}`;
//     steps.push({
//       rule: 'Linear Equation',
//       description: `Now solve: ${expStr} = ${formatNumber(logResult)}`,
//       before: null,
//       after: null
//     });
    
//     const subtracted = logResult - constant;
//     const solution = subtracted / coefficient;
    
//     steps.push({
//       rule: 'Solve for Variable',
//       description: coefficient !== 1 
//         ? `Subtract ${formatNumber(constant)}, then divide by ${coefficient}.`
//         : `Subtract ${formatNumber(constant)} from both sides.`,
//       before: null,
//       after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } }
//     });
    
//     graphData = {
//       type: 'exponential',
//       base: baseValue,
//       solution: { x: solution, y: resultValue }
//     };
    
//     return { steps, solution: { variable, value: solution, exact: false }, graphData };
//   }
  
//   throw new Error('Exponent form not supported');
// }

// /* =====================================================
//    CURSOR STYLES (injected once)
//    ===================================================== */

// const CURSOR_CSS = `
//   @keyframes sp-blink {
//     0%, 100% { opacity: 1; }
//     50% { opacity: 0; }
//   }
//   .ee-caret {
//     display: inline-block;
//     width: 2px;
//     height: 1.2em;
//     background: #fbbf24;
//     animation: sp-blink 1s step-end infinite;
//     vertical-align: text-bottom;
//     margin: 0 -1px;
//     border-radius: 1px;
//   }
//   .ee-display:focus {
//     outline: none;
//   }
//   .ee-display:focus .ee-caret {
//     animation: sp-blink 1s step-end infinite;
//   }
//   .ee-display:not(:focus) .ee-caret {
//     opacity: 0.4;
//     animation: none;
//   }
//   .ee-char {
//     cursor: text;
//     position: relative;
//   }
//   .ee-char:hover {
//     background: rgba(255,255,255,0.08);
//     border-radius: 2px;
//   }
//   .ee-sup-group {
//     display: inline;
//     cursor: text;
//   }
//   .ee-form-card,
//   .ee-form-card:visited,
//   .ee-form-card:active,
//   .ee-form-card:focus,
//   .ee-form-card:focus-visible,
//   .ee-form-card:focus-within {
//     outline: none !important;
//     box-shadow: none;
//   }
// `;

// /* =====================================================
//    ENGINE COMPONENT (Standalone Solver)
//    ===================================================== */

// export const ExponentialSolverEngine = forwardRef(({ 
//   compact = false,
//   style = {},
//   darkMode = false,
//   onResultChange = null,
//   onClear = null
// }, ref) => {
//   const [expression, setExpression] = useState([]);
//   const [cursorPos, setCursorPos] = useState(0);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);
//   const [focused, setFocused] = useState(false);
//   const displayRef = useRef(null);

//   const variables = ['x', 'y', 'n'];
//   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
//   const operators = ['^', '\u00D7', '\u00F7', '+', '-', '='];

//   useImperativeHandle(ref, () => ({
//     loadEquation: (eqString) => {
//       const chars = eqString.split('');
//       setExpression(chars);
//       setCursorPos(chars.length);
//       setResult(null);
//       setError(null);
//       if (onResultChange) onResultChange(null);
//     },
//     clear: () => {
//       setExpression([]);
//       setCursorPos(0);
//       setResult(null);
//       setError(null);
//       if (onResultChange) onResultChange(null);
//     },
//     getExpression: () => expression.join(''),
//     getResult: () => result
//   }));

//   const insertAt = useCallback((item) => {
//     setExpression(prev => {
//       const next = [...prev];
//       next.splice(cursorPos, 0, item);
//       return next;
//     });
//     setCursorPos(prev => prev + 1);
//     setResult(null);
//     setError(null);
//   }, [cursorPos]);

//   const deleteAt = useCallback((pos) => {
//     if (pos < 0 || pos >= expression.length) return;
//     setExpression(prev => {
//       const next = [...prev];
//       next.splice(pos, 1);
//       return next;
//     });
//     setCursorPos(pos);
//     setResult(null);
//     setError(null);
//   }, [expression.length]);

//   const clearAll = useCallback(() => {
//     setExpression([]);
//     setCursorPos(0);
//     setResult(null);
//     setError(null);
//     if (onClear) onClear();
//   }, [onClear]);

//   const solve = useCallback(() => {
//     try {
//       const exprString = expression.join('');
//       const tokens = tokenize(exprString);
//       const ast = parse(tokens);
//       const solveResult = solveExponentialEquation(ast);
      
//       setResult(solveResult);
//       setError(null);
//       if (onResultChange) onResultChange(solveResult);
//     } catch (e) {
//       setError(e.message);
//       setResult(null);
//       if (onResultChange) onResultChange(null);
//     }
//   }, [expression, onResultChange]);

//   const TYPEABLE = new Set('0123456789.xynXYNeE^+-=*/()\u00D7\u00F7');
//   const KEY_MAP = { '*': '\u00D7', '/': '\u00F7' };

//   const handleKeyDown = useCallback((e) => {
//     if (e.ctrlKey || e.metaKey || e.altKey) return;

//     switch (e.key) {
//       case 'ArrowLeft':
//         e.preventDefault();
//         setCursorPos(prev => Math.max(0, prev - 1));
//         return;
//       case 'ArrowRight':
//         e.preventDefault();
//         setCursorPos(prev => Math.min(expression.length, prev + 1));
//         return;
//       case 'Home':
//         e.preventDefault();
//         setCursorPos(0);
//         return;
//       case 'End':
//         e.preventDefault();
//         setCursorPos(expression.length);
//         return;
//       case 'Backspace':
//         e.preventDefault();
//         if (cursorPos > 0) deleteAt(cursorPos - 1);
//         return;
//       case 'Delete':
//         e.preventDefault();
//         if (cursorPos < expression.length) deleteAt(cursorPos);
//         return;
//       case 'Enter':
//         e.preventDefault();
//         if (expression.length > 0) solve();
//         return;
//       default:
//         break;
//     }

//     const ch = KEY_MAP[e.key] || e.key;
//     if (ch.length === 1 && TYPEABLE.has(ch)) {
//       e.preventDefault();
//       insertAt(/[A-Z]/.test(ch) ? ch.toLowerCase() : ch);
//     }
//   }, [expression.length, cursorPos, deleteAt, insertAt, solve]);

//   const handleDisplayClick = useCallback((e) => {
//     if (displayRef.current) displayRef.current.focus();
//     const charEl = e.target.closest('[data-idx]');
//     if (charEl) {
//       const idx = parseInt(charEl.getAttribute('data-idx'), 10);
//       const rect = charEl.getBoundingClientRect();
//       const clickX = e.clientX - rect.left;
//       const midpoint = rect.width / 2;
//       setCursorPos(clickX < midpoint ? idx : idx + 1);
//     } else {
//       setCursorPos(expression.length);
//     }
//   }, [expression.length]);

//   /* ---- Build display elements with cursor ---- */
//   const buildDisplayElements = () => {
//     const expr = expression;
//     if (expr.length === 0) {
//       if (focused) {
//         return <span className="ee-caret" />;
//       }
//       return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
//     }
    
//     const elements = [];
//     const eStyles = getEngineStyles(darkMode);
    
//     // Pre-compute superscript groups: maps base index -> { start, end } of exponent chars
//     // A group is: char at i, caret '^' at i+1, then exponent chars from i+2..j-1
//     const supGroups = {};
//     let skip = new Set();
    
//     let i = 0;
//     while (i < expr.length) {
//       if (i + 1 < expr.length && expr[i + 1] === '^') {
//         const baseIdx = i;
//         const caretIdx = i + 1;
//         let j = i + 2;
//         let expIndices = [];
        
//         if (j < expr.length && expr[j] === '(') {
//           let depth = 1;
//           expIndices.push(j);
//           j++;
//           while (j < expr.length && depth > 0) {
//             if (expr[j] === '(') depth++;
//             if (expr[j] === ')') depth--;
//             expIndices.push(j);
//             j++;
//           }
//         } else {
//           while (j < expr.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expr[j]) && expr[j] !== '=') {
//             expIndices.push(j);
//             j++;
//           }
//         }
        
//         if (expIndices.length > 0) {
//           supGroups[baseIdx] = { caretIdx, expIndices };
//           skip.add(caretIdx);
//           expIndices.forEach(idx => skip.add(idx));
//           i = j;
//           continue;
//         }
//       }
//       i++;
//     }
    
//     const renderCaret = (pos) => {
//       if (cursorPos === pos && focused) {
//         return <span key={`caret-${pos}`} className="ee-caret" />;
//       }
//       return null;
//     };
    
//     const charStyle = (ch) => {
//       if (ch === '\u00D7' || ch === '\u00F7' || ch === '+' || ch === '-') return eStyles.displayOp;
//       if (ch === '=') return eStyles.displayEquals;
//       if (ch === 'e') return eStyles.displayEuler;
//       return undefined;
//     };
    
//     const displayChar = (ch) => {
//       if (ch === '\u00D7') return ' \u00B7 ';
//       if (ch === '\u00F7') return ' / ';
//       if (ch === '+') return ' + ';
//       if (ch === '-') return ' \u2212 ';
//       if (ch === '=') return ' = ';
//       return ch;
//     };
    
//     i = 0;
//     while (i < expr.length) {
//       if (skip.has(i)) { i++; continue; }
      
//       if (supGroups[i]) {
//         const group = supGroups[i];
//         const baseChar = expr[i];
//         const expIndices = group.expIndices;
        
//         // Caret before the base char
//         elements.push(renderCaret(i));
        
//         elements.push(
//           <span key={`sup-${i}`} className="ee-sup-group">
//             <span 
//               className="ee-char" 
//               data-idx={i}
//               style={baseChar === 'e' ? eStyles.displayEuler : undefined}
//             >
//               {baseChar}
//             </span>
//             <sup style={eStyles.displaySup}>
//               {/* caret inside superscript, before first exp char */}
//               {renderCaret(group.caretIdx + 1)}
//               {expIndices.map((idx, ei) => (
//                 <React.Fragment key={idx}>
//                   <span className="ee-char" data-idx={idx}>
//                     {displayChar(expr[idx])}
//                   </span>
//                   {renderCaret(idx + 1)}
//                 </React.Fragment>
//               ))}
//             </sup>
//           </span>
//         );
        
//         i = expIndices[expIndices.length - 1] + 1;
//         continue;
//       }
      
//       elements.push(renderCaret(i));
//       elements.push(
//         <span 
//           key={`ch-${i}`} 
//           className="ee-char" 
//           data-idx={i}
//           style={charStyle(expr[i])}
//         >
//           {displayChar(expr[i])}
//         </span>
//       );
//       i++;
//     }
    
//     // Caret at the very end
//     elements.push(renderCaret(expression.length));
    
//     return elements;
//   };

//   const p = compact ? 0.85 : 1;
//   const styles = getEngineStyles(darkMode);

//   return (
//     <div style={{ ...styles.container, ...style }}>
//       <style>{CURSOR_CSS}</style>
      
//       <div 
//         ref={displayRef}
//         className="ee-display"
//         tabIndex={0}
//         style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px`, cursor: 'text' }}
//         onClick={handleDisplayClick}
//         onKeyDown={handleKeyDown}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//       >
//         {buildDisplayElements()}
//       </div>
      
//       {error && (
//         <div style={styles.error}>{error}</div>
//       )}
      
//       <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
//         <div style={styles.row}>
//           <span style={styles.label}>Var</span>
//           <div style={styles.btnGroup}>
//             {variables.map((v) => (
//               <button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => insertAt(v)}>{v}</button>
//             ))}
//           </div>
//         </div>
        
//         <div style={styles.row}>
//           <span style={styles.label}>Num</span>
//           <div style={styles.btnGroup}>
//             {numbers.map((n) => (
//               <button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => insertAt(n)}>{n}</button>
//             ))}
//           </div>
//         </div>
        
//         <div style={styles.row}>
//           <span style={styles.label}>Op</span>
//           <div style={styles.btnGroup}>
//             {operators.map((op) => (
//               <button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>
//                 {op === '^' ? 'x\u207F' : op}
//               </button>
//             ))}
//           </div>
//         </div>
        
//         <div style={styles.row}>
//           <span style={styles.label}></span>
//           <div style={styles.btnGroup}>
//             <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('e')}>e</button>
//             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt('(')}>(</button>
//             <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt(')')}>)</button>
//           </div>
//         </div>
        
//         <div style={styles.actions}>
//           <button style={{ ...styles.btnAction, ...styles.btnClear }} onClick={clearAll}>Clear</button>
//           <button style={{ ...styles.btnAction, ...styles.btnBack }} onClick={() => { if (cursorPos > 0) deleteAt(cursorPos - 1); }}>{'\u232B'}</button>
//           <button 
//             style={{ ...styles.btnAction, ...styles.btnSolve, ...(expression.length === 0 ? styles.btnDisabled : {}) }} 
//             onClick={solve}
//             disabled={expression.length === 0}
//           >
//             Solve
//           </button>
//         </div>
//       </div>
      
//       {result && result.solution && (
//         <div style={styles.solution}>
//           <span style={styles.solVar}>{result.solution.variable}</span>
//           <span style={styles.solEq}> = </span>
//           <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
//           {!result.solution.exact && <span style={styles.solApprox}> {'\u2248'}</span>}
//         </div>
//       )}
//     </div>
//   );
// });

// ExponentialSolverEngine.displayName = 'ExponentialSolverEngine';

// const getEngineStyles = (darkMode) => ({
//   container: {
//     background: darkMode ? '#1e293b' : '#fff',
//     borderRadius: '16px',
//     padding: '20px',
//     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
//   },
//   display: {
//     background: darkMode 
//       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
//       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//     borderRadius: '12px',
//     padding: '18px 22px',
//     minHeight: '54px',
//     marginBottom: '16px',
//     display: 'flex',
//     alignItems: 'baseline',
//     flexWrap: 'wrap',
//     fontSize: '1.4rem',
//     color: '#fff',
//     fontWeight: '500',
//   },
//   placeholder: {
//     color: 'rgba(255,255,255,0.5)',
//     fontStyle: 'italic',
//     fontSize: '0.95rem',
//   },
//   displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px', verticalAlign: 'super', position: 'relative', top: '-0.4em' },
//   displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
//   displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
//   displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
//   error: {
//     background: darkMode ? '#451a1a' : '#fef2f2',
//     border: darkMode ? '1px solid #7f1d1d' : '1px solid #fecaca',
//     borderRadius: '8px',
//     padding: '10px 14px',
//     marginBottom: '12px',
//     color: darkMode ? '#fca5a5' : '#dc2626',
//     fontSize: '0.85rem',
//   },
//   builder: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   },
//   label: {
//     fontSize: '0.65rem',
//     textTransform: 'uppercase',
//     letterSpacing: '0.5px',
//     color: darkMode ? '#64748b' : '#94a3b8',
//     width: '28px',
//     flexShrink: 0,
//     fontWeight: '600',
//   },
//   btnGroup: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '6px',
//   },
//   btn: {
//     fontSize: '0.95rem',
//     padding: '8px 12px',
//     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
//     background: darkMode ? '#334155' : '#f8fafc',
//     color: darkMode ? '#e2e8f0' : '#334155',
//     cursor: 'pointer',
//     borderRadius: '8px',
//     minWidth: '36px',
//     fontFamily: 'inherit',
//     fontWeight: '500',
//     transition: 'all 0.15s',
//   },
//   btnVar: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '600' },
//   btnNum: { color: darkMode ? '#f1f5f9' : '#1e293b' },
//   btnOp: { color: darkMode ? '#cbd5e1' : '#64748b', fontWeight: '600' },
//   btnSpecial: { color: darkMode ? '#22d3ee' : '#0891b2', fontWeight: '600', fontStyle: 'italic' },
//   btnBracket: { fontSize: '1.1rem', color: darkMode ? '#94a3b8' : '#64748b' },
//   actions: {
//     display: 'flex',
//     gap: '8px',
//     marginTop: '6px',
//     paddingTop: '14px',
//     borderTop: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
//   },
//   btnAction: {
//     fontSize: '0.85rem',
//     fontWeight: '600',
//     padding: '12px 18px',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '8px',
//     fontFamily: 'inherit',
//     transition: 'all 0.15s',
//   },
//   btnClear: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
//   btnBack: { background: darkMode ? '#334155' : '#f1f5f9', color: darkMode ? '#94a3b8' : '#64748b' },
//   btnSolve: {
//     background: darkMode 
//       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
//       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//     color: '#fff',
//     marginLeft: 'auto',
//     padding: '12px 24px',
//     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
//   },
//   btnDisabled: { background: darkMode ? '#475569' : '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
//   solution: {
//     marginTop: '16px',
//     padding: '14px 18px',
//     background: darkMode 
//       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
//       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//     borderRadius: '10px',
//     textAlign: 'center',
//     fontSize: '1.3rem',
//     fontWeight: '600',
//     color: '#fff',
//   },
//   solVar: { fontStyle: 'italic' },
//   solEq: { opacity: 0.8, margin: '0 6px' },
//   solNum: { color: '#fbbf24' },
//   solApprox: { opacity: 0.6, fontSize: '0.9rem', marginLeft: '4px' },
// });

// /* =====================================================
//    EQUATION FORM GENERATORS
//    ===================================================== */

// const equationForms = [
//   {
//     id: 'simple',
//     name: 'Simple',
//     formula: 'b\u02E3 = c',
//     generate: (nice) => {
//       if (nice) {
//         const bases = [2, 3, 5, 10];
//         const base = bases[Math.floor(Math.random() * bases.length)];
//         const exp = Math.floor(Math.random() * 5) + 1;
//         return `${base}^x=${Math.pow(base, exp)}`;
//       }
//       return `${Math.floor(Math.random() * 8) + 2}^x=${Math.floor(Math.random() * 900) + 10}`;
//     }
//   },
//   {
//     id: 'coefficient',
//     name: 'With Coefficient',
//     formula: 'a \u00B7 b\u02E3 = c',
//     generate: (nice) => {
//       if (nice) {
//         const bases = [2, 3, 5];
//         const base = bases[Math.floor(Math.random() * bases.length)];
//         const exp = Math.floor(Math.random() * 4) + 1;
//         const coeff = Math.floor(Math.random() * 5) + 2;
//         return `${coeff}\u00D7${base}^x=${coeff * Math.pow(base, exp)}`;
//       }
//       const base = Math.floor(Math.random() * 7) + 2;
//       const coeff = Math.floor(Math.random() * 9) + 2;
//       return `${coeff}\u00D7${base}^x=${Math.floor(Math.random() * 500) + 20}`;
//     }
//   },
//   {
//     id: 'linear-exp',
//     name: 'Linear Exponent',
//     formula: 'b\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
//     generate: (nice) => {
//       const bases = [2, 3, 5];
//       const base = bases[Math.floor(Math.random() * bases.length)];
//       const m = Math.floor(Math.random() * 3) + 1;
//       const n = Math.floor(Math.random() * 5) - 2;
//       const nStr = n >= 0 ? `+${n}` : `${n}`;
//       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
//       if (nice) {
//         const x = Math.floor(Math.random() * 4) + 1;
//         return `${base}^(${mStr}${nStr})=${Math.pow(base, m * x + n)}`;
//       }
//       return `${base}^(${mStr}${nStr})=${Math.floor(Math.random() * 200) + 5}`;
//     }
//   },
//   {
//     id: 'same-base',
//     name: 'Same Base',
//     formula: 'b\u1DA0\u207D\u02E3\u207E = b\u207F',
//     generate: () => {
//       const bases = [2, 3, 5];
//       const base = bases[Math.floor(Math.random() * bases.length)];
//       const a = Math.floor(Math.random() * 3) + 1;
//       const b = Math.floor(Math.random() * 5);
//       const c = Math.floor(Math.random() * 6) + 1;
//       const aStr = a === 1 ? 'x' : `${a}\u00D7x`;
//       const bStr = b > 0 ? `+${b}` : '';
//       return `${base}^(${aStr}${bStr})=${base}^${c}`;
//     }
//   },
//   {
//     id: 'convertible',
//     name: 'Convertible',
//     formula: 'a\u02E3 = b',
//     generate: () => {
//       const families = [
//         { bases: [2, 4, 8, 16, 32], root: 2 },
//         { bases: [3, 9, 27, 81], root: 3 },
//         { bases: [5, 25, 125], root: 5 }
//       ];
//       const family = families[Math.floor(Math.random() * families.length)];
//       const base = family.bases[Math.floor(Math.random() * (family.bases.length - 1))];
//       const result = family.bases[Math.floor(Math.random() * family.bases.length)];
//       return `${base}^x=${result}`;
//     }
//   },
//   {
//     id: 'with-constant',
//     name: 'With Constant',
//     formula: 'b\u02E3 + c = d',
//     generate: (nice) => {
//       if (nice) {
//         const bases = [2, 3, 5];
//         const base = bases[Math.floor(Math.random() * bases.length)];
//         const exp = Math.floor(Math.random() * 4) + 1;
//         const c = Math.floor(Math.random() * 10) + 1;
//         return `${base}^x+${c}=${Math.pow(base, exp) + c}`;
//       }
//       const base = Math.floor(Math.random() * 7) + 2;
//       const c = Math.floor(Math.random() * 20) + 1;
//       return `${base}^x+${c}=${Math.floor(Math.random() * 200) + c + 1}`;
//     }
//   },
//   {
//     id: 'natural',
//     name: 'Natural Base',
//     formula: 'e\u02E3 = c',
//     generate: (nice) => {
//       if (nice) {
//         const vals = [1, 2, 3, 5, 7, 10, 20, 50, 100];
//         return `e^x=${vals[Math.floor(Math.random() * vals.length)]}`;
//       }
//       return `e^x=${(Math.random() * 100 + 1).toFixed(2)}`;
//     }
//   },
//   {
//     id: 'natural-linear',
//     name: 'Natural Linear',
//     formula: 'e\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
//     generate: (nice) => {
//       const m = Math.floor(Math.random() * 3) + 1;
//       const n = Math.floor(Math.random() * 5) - 2;
//       const nStr = n >= 0 ? `+${n}` : `${n}`;
//       const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
//       if (nice) {
//         const vals = [1, 2, 5, 10, 20, 50];
//         return `e^(${mStr}${nStr})=${vals[Math.floor(Math.random() * vals.length)]}`;
//       }
//       return `e^(${mStr}${nStr})=${(Math.random() * 50 + 1).toFixed(2)}`;
//     }
//   }
// ];

// /* =====================================================
//    WRAPPER COMPONENT (Full Educational Version)
//    ===================================================== */

// const ExponentialEquationSolver = () => {
//   const engineRef = React.useRef(null);
//   const [solveResult, setSolveResult] = useState(null);
//   const [selectedForm, setSelectedForm] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);
//   const [examplesOpen, setExamplesOpen] = useState(false);

//   const handleFormClick = (form) => {
//     const isNice = Math.random() < 0.8;
//     const equation = form.generate(isNice);
//     setSelectedForm(form.id);
//     setSolveResult(null);
//     if (engineRef.current) {
//       engineRef.current.loadEquation(equation);
//     }
//   };

//   const handleResultChange = (result) => {
//     setSolveResult(result);
//   };

//   const handleClear = () => {
//     setSelectedForm(null);
//     setSolveResult(null);
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const wStyles = getWrapperStyles(darkMode);

//   const renderStepContent = (step, index) => {
//     if (!step.before && !step.after) return null;
//     return (
//       <div>
//         {step.before && (
//           <div style={wStyles.stepMath}>
//             {astToMathDisplay(step.before, `before-${index}`, darkMode)}
//           </div>
//         )}
//         {step.after && (
//           <div style={wStyles.stepTransform}>
//             <span style={wStyles.arrow}>{'\u27F9'}</span>
//             <div style={wStyles.stepMath}>
//               {astToMathDisplay(step.after, `after-${index}`, darkMode)}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div style={wStyles.container}>
//       <style>{THEME_CSS}</style>
//       <div style={wStyles.inner}>
        
//         {/* Header */}
//         <header style={wStyles.header}>
//           <div style={wStyles.headerTop}>
//             <div style={wStyles.headerLeft}>
//               <div style={wStyles.iconWrap}>
//                 <span style={wStyles.icon}>x</span>
//               </div>
//               <div>
//                 <h1 style={wStyles.title}>Exponential Equation Solver</h1>
//                 <p style={wStyles.subtitle}>Solve equations with variables in exponents</p>
//               </div>
//             </div>
//             <button style={wStyles.themeToggle} onClick={toggleDarkMode}>
//               {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
//             </button>
//           </div>
//         </header>

//         {/* Main Content - Side by Side */}
//         <div style={wStyles.main}>
          
//           {/* Left Column - Engine + Forms */}
//           <div style={wStyles.leftCol}>
            
//             <ExponentialSolverEngine 
//               ref={engineRef} 
//               onResultChange={handleResultChange}
//               onClear={handleClear}
//               darkMode={darkMode}
//               compact={true}
//             />
            
//             {/* Equation Forms - Collapsible */}
//             <div style={wStyles.formsSection}>
//               <button 
//                 style={wStyles.accordionHeader}
//                 onClick={() => setExamplesOpen(!examplesOpen)}
//               >
//                 <span style={wStyles.sectionTitle}>Try an Example</span>
//                 <span style={wStyles.chevron}>{examplesOpen ? '\u25B2' : '\u25BC'}</span>
//               </button>
              
//               {examplesOpen && (
//                 <div style={wStyles.accordionContent}>
//                   <p style={wStyles.formsHint}>Click any type to generate a random equation. Click again for a new one!</p>
//                   <div style={wStyles.formsGrid}>
//                     {equationForms.map((form) => (
//                       <button
//                         key={form.id}
//                         className="ee-form-card"
//                         style={{
//                           ...wStyles.formCard,
//                           ...(selectedForm === form.id ? wStyles.formCardSelected : {})
//                         }}
//                         onClick={() => handleFormClick(form)}
//                       >
//                         <div style={wStyles.formName}>{form.name}</div>
//                         <div style={wStyles.formFormula}>{form.formula}</div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
          
//           {/* Right Column - SolutionPanel */}
//           <div style={wStyles.rightCol}>
//             <SolutionPanel
//               steps={solveResult?.steps || []}
//               graphData={solveResult?.graphData || null}
//               darkMode={darkMode}
//               placeholder="Select an equation type or enter your own equation, then click Solve to see the step-by-step solution."
//               stepsTitle="Solution Steps"
//               renderStepContent={renderStepContent}
//               stepCardClass={() => ''}
//             />
            
//             {solveResult && solveResult.solution && (
//               <div style={wStyles.finalAnswer}>
//                 <div style={wStyles.answerLabel}>Answer</div>
//                 <div style={wStyles.answerValue}>
//                   <span style={wStyles.answerVar}>{solveResult.solution.variable}</span>
//                   <span style={wStyles.answerEq}> = </span>
//                   <span style={wStyles.answerNum}>{formatNumber(solveResult.solution.value)}</span>
//                 </div>
//                 <div style={wStyles.answerNote}>
//                   {solveResult.solution.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const getWrapperStyles = (darkMode) => ({
//   container: {
//     minHeight: '100vh',
//     background: darkMode 
//       ? '#0f172a'
//       : 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     color: darkMode ? '#e2e8f0' : '#1e3a5f',
//     padding: '30px 20px',
//   },
//   inner: {
//     maxWidth: '1100px',
//     margin: '0 auto',
//   },
//   header: {
//     marginBottom: '24px',
//   },
//   headerTop: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerLeft: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px',
//   },
//   iconWrap: {
//     width: '50px',
//     height: '50px',
//     background: darkMode 
//       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
//       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//     borderRadius: '14px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
//   },
//   icon: {
//     color: '#fff',
//     fontSize: '24px',
//     fontStyle: 'italic',
//     fontWeight: '700',
//   },
//   title: {
//     fontSize: '1.7rem',
//     fontWeight: '700',
//     color: darkMode ? '#e2e8f0' : '#1e3a5f',
//     margin: '0 0 4px 0',
//   },
//   subtitle: {
//     fontSize: '0.95rem',
//     color: darkMode ? '#94a3b8' : '#64748b',
//     margin: 0,
//   },
//   themeToggle: {
//     width: '44px',
//     height: '44px',
//     borderRadius: '12px',
//     border: 'none',
//     background: darkMode ? '#334155' : '#fff',
//     cursor: 'pointer',
//     fontSize: '1.3rem',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     boxShadow: darkMode ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
//     transition: 'all 0.2s',
//   },
//   main: {
//     display: 'flex',
//     gap: '24px',
//     alignItems: 'flex-start',
//   },
//   leftCol: {
//     flex: '1 1 50%',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//   },
//   rightCol: {
//     flex: '1 1 50%',
//     background: darkMode ? '#1e293b' : '#fff',
//     borderRadius: '16px',
//     padding: '20px',
//     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
//     minHeight: '500px',
//   },
//   formsSection: {
//     background: darkMode ? '#1e293b' : '#fff',
//     borderRadius: '16px',
//     boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
//     overflow: 'hidden',
//   },
//   accordionHeader: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '16px',
//     background: 'transparent',
//     border: 'none',
//     cursor: 'pointer',
//     fontFamily: 'inherit',
//   },
//   sectionTitle: {
//     fontSize: '0.75rem',
//     textTransform: 'uppercase',
//     letterSpacing: '1.5px',
//     color: darkMode ? '#94a3b8' : '#64748b',
//     fontWeight: '600',
//   },
//   chevron: {
//     fontSize: '0.75rem',
//     color: darkMode ? '#64748b' : '#94a3b8',
//   },
//   accordionContent: {
//     padding: '0 16px 16px',
//   },
//   formsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: '8px',
//   },
//   formsHint: {
//     fontSize: '0.8rem',
//     color: darkMode ? '#64748b' : '#94a3b8',
//     margin: '0 0 10px 0',
//     fontStyle: 'italic',
//   },
//   formCard: {
//     background: darkMode ? '#334155' : '#f8fafc',
//     border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0',
//     borderRadius: '10px',
//     padding: '10px 12px',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     textAlign: 'left',
//     fontFamily: 'inherit',
//     outline: 'none',
//   },
//   formCardSelected: {
//     borderColor: '#3b82f6',
//     background: darkMode ? '#1e3a5f' : '#eff6ff',
//     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)',
//   },
//   formName: {
//     fontSize: '0.8rem',
//     fontWeight: '600',
//     color: darkMode ? '#e2e8f0' : '#1e3a5f',
//     marginBottom: '2px',
//   },
//   formFormula: {
//     fontSize: '0.9rem',
//     color: darkMode ? '#60a5fa' : '#3b82f6',
//     fontFamily: 'ui-monospace, monospace',
//   },
//   stepMath: {
//     fontSize: '1.05rem',
//     color: darkMode ? '#e2e8f0' : '#1e3a5f',
//     background: darkMode ? '#334155' : '#fff',
//     padding: '10px 14px',
//     borderRadius: '8px',
//     display: 'inline-block',
//     border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
//   },
//   stepTransform: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     marginTop: '8px',
//   },
//   arrow: {
//     color: '#3b82f6',
//     fontSize: '1.1rem',
//   },
//   finalAnswer: {
//     background: darkMode 
//       ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
//       : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//     borderRadius: '12px',
//     padding: '18px 20px',
//     color: '#fff',
//     textAlign: 'center',
//     marginTop: '16px',
//   },
//   answerLabel: {
//     fontSize: '0.7rem',
//     textTransform: 'uppercase',
//     letterSpacing: '2px',
//     opacity: 0.8,
//     marginBottom: '6px',
//     fontWeight: '600',
//   },
//   answerValue: {
//     fontSize: '1.5rem',
//     fontWeight: '700',
//   },
//   answerVar: { fontStyle: 'italic' },
//   answerEq: { opacity: 0.8, margin: '0 6px' },
//   answerNum: { color: '#fbbf24' },
//   answerNote: {
//     fontSize: '0.8rem',
//     opacity: 0.75,
//     marginTop: '6px',
//   },
// });

// export default ExponentialEquationSolver;


import React, { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import SolutionPanel from './SolutionPanel';
import THEME_CSS from './MathSolverThemes';

/* =====================================================
   EXPONENTIAL EQUATION SOLVER
   
   Two exports:
   - ExponentialSolverEngine: Standalone solver component
   - ExponentialEquationSolver: Full educational wrapper (default)
   
   Features:
   - Integrated SolutionPanel with graph support
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
  euler: { fontStyle: 'italic', color: darkMode ? '#22d3ee' : '#0891b2' },
  op: { color: darkMode ? '#94a3b8' : '#64748b', margin: '0 2px' },
  equals: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
  power: { display: 'inline' },
  sup: { fontSize: '0.7em', color: darkMode ? '#60a5fa' : '#3b82f6', marginLeft: '1px', verticalAlign: 'super', position: 'relative', top: '-0.4em' },
});

/* =====================================================
   SOLVER
   ===================================================== */

function solveExponentialEquation(ast) {
  const steps = [];
  let graphData = null;

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

      graphData = {
        type: 'exponential',
        base: baseValue,
        solution: { x: perfectPower, y: resultValue }
      };

      return { steps, solution: { variable: varName, value: perfectPower, exact: true }, graphData };
    }

    const logName = isNaturalBase ? 'ln' : `log base ${formatNumber(baseValue)}`;
    steps.push({
      rule: 'Apply Logarithm',
      description: `Take ${logName} of both sides.`,
      before: { type: 'EQUATION', left: expSide, right: constSide },
      after: null
    });

    steps.push({
      rule: 'Simplify',
      description: isNaturalBase ? 'ln(e\u02E3) = x' : 'log base b of b\u02E3 = x',
      before: null,
      after: null
    });

    const solution = isNaturalBase ? Math.log(resultValue) : Math.log(resultValue) / Math.log(baseValue);

    steps.push({
      rule: 'Calculate',
      description: isNaturalBase
        ? `ln(${formatNumber(resultValue)}) \u2248 ${formatNumber(solution)}`
        : `log(${formatNumber(resultValue)}) \u00F7 log(${formatNumber(baseValue)}) \u2248 ${formatNumber(solution)}`,
      before: null,
      after: { type: 'EQUATION', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: solution } }
    });

    graphData = {
      type: 'exponential',
      base: baseValue,
      solution: { x: solution, y: resultValue }
    };

    return { steps, solution: { variable: varName, value: solution, exact: false }, graphData };
  }

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

    const expStr = `${coefficient === 1 ? '' : coefficient}${variable}${constant >= 0 ? ' + ' + constant : ' \u2212 ' + Math.abs(constant)}`;
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

    graphData = {
      type: 'exponential',
      base: baseValue,
      solution: { x: solution, y: resultValue }
    };

    return { steps, solution: { variable, value: solution, exact: false }, graphData };
  }

  throw new Error('Exponent form not supported');
}

/* =====================================================
   CURSOR STYLES (injected once)
   ===================================================== */

const CURSOR_CSS = `
  @keyframes sp-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .ee-caret {
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background: #fbbf24;
    animation: sp-blink 1s step-end infinite;
    vertical-align: text-bottom;
    margin: 0 -1px;
    border-radius: 1px;
  }
  .ee-display:focus {
    outline: none;
  }
  .ee-display:focus .ee-caret {
    animation: sp-blink 1s step-end infinite;
  }
  .ee-display:not(:focus) .ee-caret {
    opacity: 0.4;
    animation: none;
  }
  .ee-char {
    cursor: text;
    position: relative;
  }
  .ee-char:hover {
    background: rgba(255,255,255,0.08);
    border-radius: 2px;
  }
  .ee-sup-group {
    display: inline;
    cursor: text;
  }
  .ee-form-card,
  .ee-form-card:visited,
  .ee-form-card:active,
  .ee-form-card:focus,
  .ee-form-card:focus-visible,
  .ee-form-card:focus-within {
    outline: none !important;
    box-shadow: none;
    border-color: var(--ee-border-color) !important;
  }
`;

/* =====================================================
   ENGINE COMPONENT (Standalone Solver)
   ===================================================== */

export const ExponentialSolverEngine = forwardRef(({
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
      const solveResult = solveExponentialEquation(ast);

      setResult(solveResult);
      setError(null);
      if (onResultChange) onResultChange(solveResult);
    } catch (e) {
      setError(e.message);
      setResult(null);
      if (onResultChange) onResultChange(null);
    }
  }, [expression, onResultChange]);

  const TYPEABLE = new Set('0123456789.xynXYNeE^+-=*/()\u00D7\u00F7');
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
        return <span className="ee-caret" />;
      }
      return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
    }

    const elements = [];
    const eStyles = getEngineStyles(darkMode);

    // Pre-compute superscript groups: maps base index -> { start, end } of exponent chars
    // A group is: char at i, caret '^' at i+1, then exponent chars from i+2..j-1
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
        return <span key={`caret-${pos}`} className="ee-caret" />;
      }
      return null;
    };

    const charStyle = (ch) => {
      if (ch === '\u00D7' || ch === '\u00F7' || ch === '+' || ch === '-') return eStyles.displayOp;
      if (ch === '=') return eStyles.displayEquals;
      if (ch === 'e') return eStyles.displayEuler;
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

        // Caret before the base char
        elements.push(renderCaret(i));

        elements.push(
          <span key={`sup-${i}`} className="ee-sup-group">
            <span
              className="ee-char"
              data-idx={i}
              style={baseChar === 'e' ? eStyles.displayEuler : undefined}
            >
              {baseChar}
            </span>
            <sup style={eStyles.displaySup}>
              {/* caret inside superscript, before first exp char */}
              {renderCaret(group.caretIdx + 1)}
              {expIndices.map((idx, ei) => (
                <React.Fragment key={idx}>
                  <span className="ee-char" data-idx={idx}>
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
          className="ee-char"
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

  return (
    <div style={{ ...styles.container, ...style }}>
      <style>{CURSOR_CSS}</style>

      <div
        ref={displayRef}
        className="ee-display"
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
          <span style={styles.label}></span>
          <div style={styles.btnGroup}>
            <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('e')}>e</button>
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
          <span style={styles.solVar}>{result.solution.variable}</span>
          <span style={styles.solEq}> = </span>
          <span style={styles.solNum}>{formatNumber(result.solution.value)}</span>
          {!result.solution.exact && <span style={styles.solApprox}> {'\u2248'}</span>}
        </div>
      )}
    </div>
  );
});

ExponentialSolverEngine.displayName = 'ExponentialSolverEngine';

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
  displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
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
    formula: 'b\u02E3 = c',
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
    formula: 'a \u00B7 b\u02E3 = c',
    generate: (nice) => {
      if (nice) {
        const bases = [2, 3, 5];
        const base = bases[Math.floor(Math.random() * bases.length)];
        const exp = Math.floor(Math.random() * 4) + 1;
        const coeff = Math.floor(Math.random() * 5) + 2;
        return `${coeff}\u00D7${base}^x=${coeff * Math.pow(base, exp)}`;
      }
      const base = Math.floor(Math.random() * 7) + 2;
      const coeff = Math.floor(Math.random() * 9) + 2;
      return `${coeff}\u00D7${base}^x=${Math.floor(Math.random() * 500) + 20}`;
    }
  },
  {
    id: 'linear-exp',
    name: 'Linear Exponent',
    formula: 'b\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
    generate: (nice) => {
      const bases = [2, 3, 5];
      const base = bases[Math.floor(Math.random() * bases.length)];
      const m = Math.floor(Math.random() * 3) + 1;
      const n = Math.floor(Math.random() * 5) - 2;
      const nStr = n >= 0 ? `+${n}` : `${n}`;
      const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
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
    formula: 'b\u1DA0\u207D\u02E3\u207E = b\u207F',
    generate: () => {
      const bases = [2, 3, 5];
      const base = bases[Math.floor(Math.random() * bases.length)];
      const a = Math.floor(Math.random() * 3) + 1;
      const b = Math.floor(Math.random() * 5);
      const c = Math.floor(Math.random() * 6) + 1;
      const aStr = a === 1 ? 'x' : `${a}\u00D7x`;
      const bStr = b > 0 ? `+${b}` : '';
      return `${base}^(${aStr}${bStr})=${base}^${c}`;
    }
  },
  {
    id: 'convertible',
    name: 'Convertible',
    formula: 'a\u02E3 = b',
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
    formula: 'b\u02E3 + c = d',
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
    formula: 'e\u02E3 = c',
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
    formula: 'e\u207D\u1D50\u02E3\u207A\u207F\u207E = c',
    generate: (nice) => {
      const m = Math.floor(Math.random() * 3) + 1;
      const n = Math.floor(Math.random() * 5) - 2;
      const nStr = n >= 0 ? `+${n}` : `${n}`;
      const mStr = m === 1 ? 'x' : `${m}\u00D7x`;
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
            <span style={wStyles.icon}>x</span>
          </div>
          <h1 style={wStyles.title}>Exponential Equation Solver</h1>
          <p style={wStyles.subtitle}>Solve equations with variables in exponents</p>
        </header>

        {/* Main Content - Side by Side */}
        <div style={wStyles.main}>

          {/* Left Column - Engine + Forms */}
          <div style={wStyles.leftCol}>

            <ExponentialSolverEngine
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
                        className="ee-form-card"
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
    fontStyle: 'italic',
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
    '--ee-border-color': darkMode ? '#475569' : '#e2e8f0',
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
    '--ee-border-color': '#3b82f6',
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
  answerNote: {
    fontSize: '0.8rem',
    opacity: 0.75,
    marginTop: '6px',
  },
});

export default ExponentialEquationSolver;