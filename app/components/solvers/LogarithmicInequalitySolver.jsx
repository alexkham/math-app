import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';

/* =====================================================
   LOGARITHMIC INEQUALITY SOLVER v2

   Changes from v1:
   - Integrated MathRenderer (inlined)
   - Integrated SolutionPanel (inlined)
   - Back button: ← → ⌫
   - Result: removed right-panel final answer, enriched
     left-panel engine result with interval notation
   - Examples: collapsible panel grouped with keyboard

   Two exports:
   - LogarithmicInequalitySolverEngine: Standalone solver component
   - LogarithmicInequalitySolverWithExamples: Full educational wrapper (default)
   ===================================================== */


/* =====================================================
   GLOBAL STYLES
   ===================================================== */

const INEQ_GLOBAL_STYLES = `
  .ineq-right-col::-webkit-scrollbar {
    display: none;
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
    case 'INEQUALITY':
      return (
        <span>
          {renderNode(node.left, 'INEQUALITY')}
          <span className="mr-op">{opSymbols[node.operator]}</span>
          {renderNode(node.right, 'INEQUALITY')}
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
   SOLUTION PANEL (inlined from shared SolutionPanel)
   ===================================================== */

const SP_STYLES = `
  .sp-tab-bar {
    display: flex;
    gap: 2px;
    background: #e2e8f0;
    border-radius: 8px;
    padding: 3px;
    margin-bottom: 16px;
  }
  .sp-tab-btn {
    flex: 1;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.82rem;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    color: #64748b;
    transition: all 0.15s;
    text-align: center;
  }
  .sp-tab-btn.active {
    background: #fff;
    color: #1e3a5f;
    box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  }
  .sp-tab-btn:not(.active):hover {
    color: #334155;
  }
  .sp-steps-title {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 1.8px;
    color: #94a3b8;
    margin-bottom: 14px;
    font-weight: 600;
  }
  .sp-step-card {
    background: #f8fafc;
    border: none;
    border-left: 3px solid #3b82f6;
    border-radius: 0 8px 8px 0;
    padding: 16px 18px;
    margin-bottom: 10px;
  }
  .sp-step-header {
    margin-bottom: 6px;
  }
  .sp-step-number {
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #3b82f6;
    font-weight: 600;
  }
  .sp-step-rule {
    font-weight: 600;
    font-size: 0.95rem;
    color: #1e3a5f;
    margin-bottom: 2px;
  }
  .sp-step-description {
    font-size: 0.82rem;
    color: #64748b;
    line-height: 1.4;
    margin-bottom: 4px;
  }
  .sp-step-content {
    margin-top: 8px;
  }
  .sp-graph-container {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
  }
  .sp-graph-label {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #94a3b8;
    margin-bottom: 12px;
    font-weight: 500;
  }
  .sp-graph-legend {
    display: flex;
    gap: 16px;
    margin-top: 10px;
    font-size: 0.75rem;
    color: #64748b;
  }
  .sp-graph-legend-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 4px;
    vertical-align: middle;
  }
  .sp-placeholder {
    background: #f1f5f9;
    border: 1px dashed #cbd5e1;
    border-radius: 8px;
    padding: 40px 24px;
    text-align: center;
    font-size: 0.85rem;
    color: #94a3b8;
    font-style: italic;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sp-no-steps {
    color: #94a3b8;
    font-style: italic;
    text-align: center;
    padding: 20px;
    font-size: 0.85rem;
  }
`;

function SolutionPanel({
  steps = [],
  graphData = null,
  showGraphs = true,
  GraphComponent = null,
  graphLabel = '',
  graphLegend = [],
  stepCardClass = null,
  renderStepContent = null,
  placeholder = 'Steps will appear here once you solve',
  stepsTitle = 'Solution Steps',
}) {
  const [activeTab, setActiveTab] = useState('steps');

  const hasGraph = showGraphs && graphData && GraphComponent;
  const hasSolved = steps.length > 0;

  const prevStepsRef = useRef(steps);
  if (steps !== prevStepsRef.current && steps.length > 0) {
    prevStepsRef.current = steps;
    if (activeTab !== 'steps') setActiveTab('steps');
  }

  if (!hasSolved) {
    return (
      <div>
        <style>{SP_STYLES}</style>
        <div className="sp-placeholder">
          <p>{placeholder}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <style>{SP_STYLES}</style>

      {hasGraph && (
        <div className="sp-tab-bar">
          <button className={`sp-tab-btn${activeTab === 'steps' ? ' active' : ''}`} onClick={() => setActiveTab('steps')}>Steps</button>
          <button className={`sp-tab-btn${activeTab === 'graph' ? ' active' : ''}`} onClick={() => setActiveTab('graph')}>Graph</button>
        </div>
      )}

      {activeTab === 'steps' && (
        <div>
          {!hasGraph && <div className="sp-steps-title">{stepsTitle}</div>}
          {steps.length === 0 ? (
            <p className="sp-no-steps">Expression is already in simplest form</p>
          ) : (
            steps.map((step, index) => {
              const extraClass = stepCardClass ? stepCardClass(step) : '';
              return (
                <div key={index} className={`sp-step-card ${extraClass}`}>
                  <div className="sp-step-header">
                    <span className="sp-step-number">Step {index + 1}</span>
                  </div>
                  <div className="sp-step-rule">{step.rule}</div>
                  <p className="sp-step-description">{step.description}</p>
                  {renderStepContent && (
                    <div className="sp-step-content">
                      {renderStepContent(step, index)}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {activeTab === 'graph' && hasGraph && (
        <div className="sp-graph-container">
          {graphLabel && <div className="sp-graph-label">{graphLabel}</div>}
          <GraphComponent graphData={graphData} />
          {graphLegend.length > 0 && (
            <div className="sp-graph-legend">
              {graphLegend.map((item, i) => (
                <span key={i}>
                  <span className="sp-graph-legend-dot" style={{ background: item.color }} />
                  {item.label}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
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

      return solveLinearInequality(left.argument, right.argument, newOperator, steps);
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

    return { steps, solution: finalSolution };
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

    return { steps, solution: finalSolution };
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
   ENGINE COMPONENT (Standalone Solver)
   ===================================================== */

export const LogarithmicInequalitySolverEngine = forwardRef(({
  compact = false,
  style = {}
}, ref) => {
  const [expression, setExpression] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const variables = ['x', 'y', 'n'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const operators = ['+', '-', '\u00D7', '\u00F7', '^'];
  const inequalities = ['<', '>', '\u2264', '\u2265'];

  useImperativeHandle(ref, () => ({
    loadEquation: (eqString) => {
      setExpression(eqString.split(''));
      setResult(null);
      setError(null);
    },
    clear: () => {
      setExpression([]);
      setResult(null);
      setError(null);
    },
    getExpression: () => expression.join(''),
    getResult: () => result
  }));

  const addToExpression = (item) => {
    setExpression([...expression, item]);
    setResult(null);
    setError(null);
  };

  const addLogToExpression = (base) => {
    if (base === 'e') {
      setExpression([...expression, 'l', 'n', '(']);
    } else if (base === '10') {
      setExpression([...expression, 'l', 'o', 'g', '(']);
    } else {
      setExpression([...expression, 'l', 'o', 'g', '_', base, '(']);
    }
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
      if (expr[i] === 'l' && expr[i + 1] === 'n') {
        elements.push(<span key={i} style={engineStyles.displayLog}>ln</span>);
        i += 2;
        continue;
      }

      if (expr[i] === 'l' && expr[i + 1] === 'o' && expr[i + 2] === 'g') {
        let j = i + 3;
        let baseChars = [];
        if (expr[j] === '_') {
          j++;
          while (j < expr.length && /[0-9a-zA-Z]/.test(expr[j]) && expr[j] !== '(') {
            baseChars.push(expr[j]);
            j++;
          }
        }
        elements.push(
          <span key={i} style={engineStyles.displayLogExpr}>
            <span style={engineStyles.displayLog}>log</span>
            {baseChars.length > 0 && <sub style={engineStyles.displaySub}>{baseChars.join('')}</sub>}
          </span>
        );
        i = j;
        continue;
      }

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
          while (j < expr.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expr[j]) && !['<', '>', '\u2264', '\u2265'].includes(expr[j])) {
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
        '\u00D7': { style: engineStyles.displayOp, text: ' \u00B7 ' },
        '\u00F7': { style: engineStyles.displayOp, text: ' / ' },
        '+': { style: engineStyles.displayOp, text: ' + ' },
        '-': { style: engineStyles.displayOp, text: ' \u2212 ' },
        '<': { style: engineStyles.displayIneq, text: ' < ' },
        '>': { style: engineStyles.displayIneq, text: ' > ' },
        '\u2264': { style: engineStyles.displayIneq, text: ' \u2264 ' },
        '\u2265': { style: engineStyles.displayIneq, text: ' \u2265 ' },
        '^': { style: engineStyles.displayOp, text: '^' },
        'e': { style: engineStyles.displayEuler, text: 'e' },
        '_': { style: engineStyles.displayOp, text: '' },
      };

      if (charMap[current]) {
        if (charMap[current].text) {
          elements.push(<span key={i} style={charMap[current].style}>{charMap[current].text}</span>);
        }
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
      const solveResult = solveLogarithmicInequality(ast);
      setResult(solveResult);
      setError(null);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  const formatSolution = (sol) => {
    if (!sol) return null;

    if (sol.type === 'all') {
      return (
        <div>
          <div style={engineStyles.solValue}>All real numbers</div>
          <div style={engineStyles.solInterval}>(-\u221E, +\u221E)</div>
        </div>
      );
    }
    if (sol.type === 'none') {
      return (
        <div>
          <div style={engineStyles.solValue}>No solution</div>
          <div style={engineStyles.solInterval}>{'\u2205'}</div>
        </div>
      );
    }
    if (sol.type === 'compound') {
      const lowerBracket = sol.lowerStrict ? '(' : '[';
      const upperBracket = sol.upperStrict ? ')' : ']';
      return (
        <div>
          <div style={engineStyles.solValue}>
            <span style={engineStyles.solNum}>{formatNumber(sol.lower)}</span>
            <span style={engineStyles.solOp}> {'<'} </span>
            <span style={engineStyles.solVar}>{sol.variable}</span>
            <span style={engineStyles.solOp}> {sol.upperStrict ? '<' : '\u2264'} </span>
            <span style={engineStyles.solNum}>{formatNumber(sol.upper)}</span>
          </div>
          <div style={engineStyles.solInterval}>{lowerBracket}{formatNumber(sol.lower)}, {formatNumber(sol.upper)}{upperBracket}</div>
        </div>
      );
    }

    const op = opSymbols[sol.operator];
    const val = formatNumber(sol.value);
    let interval;
    if (sol.operator === TokenType.LT) interval = `(-\u221E, ${val})`;
    else if (sol.operator === TokenType.LTE) interval = `(-\u221E, ${val}]`;
    else if (sol.operator === TokenType.GT) interval = `(${val}, +\u221E)`;
    else if (sol.operator === TokenType.GTE) interval = `[${val}, +\u221E)`;

    return (
      <div>
        <div style={engineStyles.solValue}>
          <span style={engineStyles.solVar}>{sol.variable}</span>
          <span style={engineStyles.solOp}> {op} </span>
          <span style={engineStyles.solNum}>{val}</span>
        </div>
        <div style={engineStyles.solInterval}>{interval}</div>
      </div>
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
        {/* Log buttons */}
        <div style={engineStyles.row}>
          <span style={engineStyles.label}>Log</span>
          <div style={engineStyles.btnGroup}>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('e')}>ln</button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('10')}>log</button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('2')}>log<sub>2</sub></button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('3')}>log<sub>3</sub></button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('5')}>log<sub>5</sub></button>
          </div>
        </div>

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
                {op === '^' ? 'x\u207F' : op}
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
          <button style={{ ...engineStyles.btnAction, ...engineStyles.btnBack }} onClick={backspace}>{'\u232B'}</button>
          <button
            style={{ ...engineStyles.btnAction, ...engineStyles.btnSolve, ...(expression.length === 0 ? engineStyles.btnDisabled : {}) }}
            onClick={solve}
            disabled={expression.length === 0}
          >
            Solve
          </button>
        </div>
      </div>

      {/* Enriched result with interval notation */}
      {result && result.solution && (
        <div style={engineStyles.solution}>
          <div style={engineStyles.solLabel}>Solution</div>
          {formatSolution(result.solution)}
          {(result.solution.type === 'range' || result.solution.type === 'compound') && (
            <div style={engineStyles.solNote}>
              {result.solution.exact ? '\u2713 Exact value' : '\u2248 Approximate value'}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

LogarithmicInequalitySolverEngine.displayName = 'LogarithmicInequalitySolverEngine';

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
  displaySub: { fontSize: '0.65em', color: '#bfdbfe', marginLeft: '1px' },
  displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
  displayIneq: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
  displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
  displayLog: { color: '#fde68a', fontWeight: '600' },
  displayLogExpr: { display: 'inline-flex', alignItems: 'baseline' },
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
  btnLog: { color: '#3b82f6', fontWeight: '600', minWidth: '44px' },
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
  btnBack: { background: '#f1f5f9', color: '#64748b', fontSize: '1.1rem' },
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
    padding: '16px 20px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '12px',
    textAlign: 'center',
    color: '#fff',
  },
  solLabel: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    opacity: 0.8,
    marginBottom: '8px',
    fontWeight: '600',
  },
  solValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  solVar: { fontStyle: 'italic' },
  solOp: { opacity: 0.8, margin: '0 6px' },
  solNum: { color: '#fbbf24' },
  solInterval: {
    fontSize: '1.1rem',
    opacity: 0.9,
    marginTop: '6px',
    fontFamily: 'ui-monospace, monospace',
  },
  solNote: {
    fontSize: '0.8rem',
    opacity: 0.75,
    marginTop: '8px',
  },
};


/* =====================================================
   INEQUALITY FORM GENERATORS
   ===================================================== */

const inequalityForms = [
  {
    id: 'simple',
    name: 'Simple',
    formula: <span>log<sub>b</sub>(x) {'>'} c</span>,
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
    formula: <span>ln(x) {'>'} c</span>,
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
    formula: <span>a &middot; log<sub>b</sub>(x) {'>'} c</span>,
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
    formula: <span>log<sub>b</sub>(mx + n) {'>'} c</span>,
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
    formula: <span>log<sub>b</sub>(x) + c {'>'} d</span>,
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
    formula: <span>ln(mx + n) {'>'} c</span>,
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
    formula: <span>log<sub>b</sub>(f(x)) {'>'} log<sub>b</sub>(c)</span>,
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
    formula: <span>log<sub>b</sub>(x) {'>'} &minus;c</span>,
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
  const engineRef = useRef(null);
  const [selectedForm, setSelectedForm] = useState(null);
  const [solveResult, setSolveResult] = useState(null);
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

  const handleSolveClick = () => {
    setTimeout(() => {
      if (engineRef.current) {
        const result = engineRef.current.getResult();
        setSolveResult(result);
      }
    }, 50);
  };

  const renderStepMath = (step, index) => {
    if (!step.before && !step.after) return null;
    return (
      <div>
        {step.before && (
          <div style={wrapperStyles.stepMathBox}>
            <MathRenderer node={step.before} fontSize="1.05rem" />
          </div>
        )}
        {step.after && (
          <div style={wrapperStyles.stepTransform}>
            <span style={wrapperStyles.arrow}>{'\u27F9'}</span>
            <div style={wrapperStyles.stepMathBox}>
              <MathRenderer node={step.after} fontSize="1.05rem" />
            </div>
          </div>
        )}
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
          <h1 style={wrapperStyles.title}>Logarithmic Inequality Solver</h1>
          <p style={wrapperStyles.subtitle}>Solve inequalities with logarithms step by step</p>
        </header>

        {/* Main Content - Side by Side */}
        <div style={wrapperStyles.main}>

          {/* Left Column - Engine + Collapsible Examples */}
          <div style={wrapperStyles.leftCol}>

            {/* Engine */}
            <div onClick={handleSolveClick}>
              <LogarithmicInequalitySolverEngine
                ref={engineRef}
                compact={true}
              />
            </div>

            {/* Collapsible Examples Panel */}
            <div style={wrapperStyles.examplesPanel}>
              <button
                style={wrapperStyles.examplesToggle}
                onClick={() => setExamplesOpen(!examplesOpen)}
              >
                <span style={wrapperStyles.examplesToggleText}>Try an Example</span>
                <span style={{
                  ...wrapperStyles.examplesChevron,
                  transform: examplesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>{'\u25BC'}</span>
              </button>

              {examplesOpen && (
                <div style={wrapperStyles.examplesBody}>
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
              )}
            </div>
          </div>

          {/* Right Column - SolutionPanel */}
          <div className="ineq-right-col" style={wrapperStyles.rightCol}>
            <style>{INEQ_GLOBAL_STYLES}</style>
            <SolutionPanel
              steps={solveResult ? solveResult.steps : []}
              placeholder="Select an inequality type or enter your own, then click Solve to see the step-by-step solution."
              stepsTitle="Solution Steps"
              renderStepContent={renderStepMath}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const wrapperStyles = {
  container: {
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
  },
  /* Collapsible examples panel */
  examplesPanel: {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
  },
  examplesToggle: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 18px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  examplesToggleText: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#64748b',
    fontWeight: '600',
  },
  examplesChevron: {
    fontSize: '0.6rem',
    color: '#94a3b8',
    transition: 'transform 0.2s ease',
  },
  examplesBody: {
    padding: '0 16px 16px',
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
  /* Step math rendering */
  stepMathBox: {
    fontSize: '1.05rem',
    color: '#1e3a5f',
    background: '#fff',
    padding: '10px 14px',
    borderRadius: '8px',
    display: 'inline-block',
    border: '1px solid #e2e8f0',
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
};

export default LogarithmicInequalitySolver;