import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import SolutionPanel from './SolutionPanel';
import THEME_CSS from './MathSolverThemes';

/* =====================================================
   LINEAR EQUATION SOLVER
   
   Two exports:
   - LinearSolverEngine: Standalone solver component
   - LinearEquationSolver: Full educational wrapper (default)
   
   Features:
   - Integrated SolutionPanel with graph support
   - Theme support via CSS variables
   - Dark mode toggle
   - Full cursor: click-to-place, arrow keys, blinking caret
   - Insert/delete at cursor position
   - Multi-step solving with combine-like-terms
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

// Collect terms: returns { varCoeff, constant } for expression ax + b
function collectTerms(node, varName) {
  if (!node) return { varCoeff: 0, constant: 0 };

  switch (node.type) {
    case 'NUMBER':
      return { varCoeff: 0, constant: node.value };
    case 'VARIABLE':
      return node.name === varName ? { varCoeff: 1, constant: 0 } : { varCoeff: 0, constant: 0 };
    case 'NEGATE': {
      const inner = collectTerms(node.operand, varName);
      return { varCoeff: -inner.varCoeff, constant: -inner.constant };
    }
    case 'ADD': {
      const l = collectTerms(node.left, varName);
      const r = collectTerms(node.right, varName);
      return { varCoeff: l.varCoeff + r.varCoeff, constant: l.constant + r.constant };
    }
    case 'SUBTRACT': {
      const l = collectTerms(node.left, varName);
      const r = collectTerms(node.right, varName);
      return { varCoeff: l.varCoeff - r.varCoeff, constant: l.constant - r.constant };
    }
    case 'MULTIPLY': {
      const lConst = evaluateConstant(node.left);
      const rConst = evaluateConstant(node.right);
      if (lConst !== null && containsVariable(node.right)) {
        const r = collectTerms(node.right, varName);
        return { varCoeff: lConst * r.varCoeff, constant: lConst * r.constant };
      }
      if (rConst !== null && containsVariable(node.left)) {
        const l = collectTerms(node.left, varName);
        return { varCoeff: rConst * l.varCoeff, constant: rConst * l.constant };
      }
      if (lConst !== null && rConst !== null) {
        return { varCoeff: 0, constant: lConst * rConst };
      }
      return null;
    }
    case 'DIVIDE': {
      const divisor = evaluateConstant(node.right);
      if (divisor !== null && divisor !== 0) {
        const l = collectTerms(node.left, varName);
        if (l) return { varCoeff: l.varCoeff / divisor, constant: l.constant / divisor };
      }
      return null;
    }
    default:
      return null;
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

function solveLinearEquation(ast) {
  const steps = [];
  let graphData = null;

  if (ast.type !== 'EQUATION') {
    throw new Error('Input must be an equation (use = sign)');
  }

  const { left, right } = ast;

  // Find the variable
  const varName = getVariable(left) !== 'x' ? getVariable(left) : getVariable(right);

  // Collect terms on both sides
  const leftTerms = collectTerms(left, varName);
  const rightTerms = collectTerms(right, varName);

  if (!leftTerms || !rightTerms) {
    throw new Error('This equation is not linear. Only linear equations (degree 1) are supported.');
  }

  // Check for non-linear: if variable appears in power, multiply, etc in a non-linear way
  // collectTerms returns null for non-linear, so if we got here, it's linear

  steps.push({
    rule: 'Identify Terms',
    description: `Left side: ${formatNumber(leftTerms.varCoeff)}${varName} + ${formatNumber(leftTerms.constant)}. Right side: ${formatNumber(rightTerms.varCoeff)}${varName} + ${formatNumber(rightTerms.constant)}.`,
    before: ast,
    after: null
  });

  // Move variable terms to left, constants to right
  // ax + b = cx + d → (a-c)x = (d-b)
  const totalVarCoeff = leftTerms.varCoeff - rightTerms.varCoeff;
  const totalConst = rightTerms.constant - leftTerms.constant;

  if (leftTerms.varCoeff !== 0 && rightTerms.varCoeff !== 0) {
    steps.push({
      rule: 'Move Variable Terms to Left',
      description: `Subtract ${formatNumber(rightTerms.varCoeff)}${varName} from both sides.`,
      before: null,
      after: {
        type: 'EQUATION',
        left: totalVarCoeff === 1
          ? { type: 'ADD', left: { type: 'VARIABLE', name: varName }, right: { type: 'NUMBER', value: leftTerms.constant } }
          : { type: 'ADD', left: { type: 'MULTIPLY', left: { type: 'NUMBER', value: totalVarCoeff }, right: { type: 'VARIABLE', name: varName } }, right: { type: 'NUMBER', value: leftTerms.constant } },
        right: { type: 'NUMBER', value: rightTerms.constant }
      }
    });
  }

  if (leftTerms.constant !== 0) {
    steps.push({
      rule: 'Move Constants to Right',
      description: `${leftTerms.constant > 0 ? 'Subtract' : 'Add'} ${formatNumber(Math.abs(leftTerms.constant))} ${leftTerms.constant > 0 ? 'from' : 'to'} both sides.`,
      before: null,
      after: {
        type: 'EQUATION',
        left: totalVarCoeff === 1
          ? { type: 'VARIABLE', name: varName }
          : { type: 'MULTIPLY', left: { type: 'NUMBER', value: totalVarCoeff }, right: { type: 'VARIABLE', name: varName } },
        right: { type: 'NUMBER', value: totalConst }
      }
    });
  }

  // Check special cases
  if (totalVarCoeff === 0) {
    if (Math.abs(totalConst) < 1e-10) {
      // 0 = 0 → identity
      steps.push({
        rule: 'Identity',
        description: 'The variable cancels out and both sides are equal. The equation is true for all values.',
        before: null,
        after: null
      });
      return { steps, solution: { variable: varName, value: null, identity: true }, graphData: null };
    } else {
      // 0 = nonzero → contradiction
      steps.push({
        rule: 'Contradiction',
        description: `The variable cancels out, leaving 0 = ${formatNumber(totalConst)}. This is false \u2014 no solution exists.`,
        before: null,
        after: null
      });
      return { steps, solution: { variable: varName, value: null, noSolution: true }, graphData: null };
    }
  }

  // Divide by coefficient
  const solution = totalConst / totalVarCoeff;

  if (totalVarCoeff !== 1) {
    steps.push({
      rule: 'Divide by Coefficient',
      description: `Divide both sides by ${formatNumber(totalVarCoeff)}.`,
      before: {
        type: 'EQUATION',
        left: { type: 'MULTIPLY', left: { type: 'NUMBER', value: totalVarCoeff }, right: { type: 'VARIABLE', name: varName } },
        right: { type: 'NUMBER', value: totalConst }
      },
      after: {
        type: 'EQUATION',
        left: { type: 'VARIABLE', name: varName },
        right: { type: 'NUMBER', value: solution }
      }
    });
  }

  const isExact = Number.isInteger(solution) || (Number.isInteger(totalConst) && Number.isInteger(totalVarCoeff) && totalConst % totalVarCoeff === 0);

  graphData = {
    type: 'linear',
    slope: leftTerms.varCoeff,
    intercept: leftTerms.constant,
    solution: { x: solution, y: 0 }
  };

  return { steps, solution: { variable: varName, value: solution, exact: isExact }, graphData };
}

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
  .le-sup-group {
    display: inline;
    cursor: text;
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
   ENGINE COMPONENT (Standalone Solver)
   ===================================================== */

export const LinearSolverEngine = forwardRef(({
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
      const solveResult = solveLinearEquation(ast);

      setResult(solveResult);
      setError(null);
      if (onResultChange) onResultChange(solveResult);
    } catch (e) {
      setError(e.message);
      setResult(null);
      if (onResultChange) onResultChange(null);
    }
  }, [expression, onResultChange]);

  const TYPEABLE = new Set('0123456789.xynXYN+-=*/()×÷');
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
        return <span className="le-caret" />;
      }
      return <span style={getEngineStyles(darkMode).placeholder}>Enter equation...</span>;
    }

    const elements = [];
    const eStyles = getEngineStyles(darkMode);

    const renderCaret = (pos) => {
      if (cursorPos === pos && focused) {
        return <span key={`caret-${pos}`} className="le-caret" />;
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

    for (let i = 0; i < expr.length; i++) {
      elements.push(renderCaret(i));
      elements.push(
        <span
          key={`ch-${i}`}
          className="le-char"
          data-idx={i}
          style={charStyle(expr[i])}
        >
          {displayChar(expr[i])}
        </span>
      );
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
        className="le-display"
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
          {result.solution.identity ? (
            <span>All real numbers (identity)</span>
          ) : result.solution.noSolution ? (
            <span>No solution (contradiction)</span>
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

LinearSolverEngine.displayName = 'LinearSolverEngine';

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
    id: 'one-step',
    name: 'One Step',
    formula: 'x + a = b',
    generate: (nice) => {
      const a = Math.floor(Math.random() * 20) - 10;
      const b = Math.floor(Math.random() * 20) - 10;
      return `x${a >= 0 ? '+' + a : a}=${b}`;
    }
  },
  {
    id: 'two-step',
    name: 'Two Step',
    formula: 'ax + b = c',
    generate: (nice) => {
      if (nice) {
        const a = [2, 3, 4, 5, -2, -3][Math.floor(Math.random() * 6)];
        const x = Math.floor(Math.random() * 10) - 5;
        const b = Math.floor(Math.random() * 15) - 7;
        return `${a}\u00D7x${b >= 0 ? '+' + b : b}=${a * x + b}`;
      }
      const a = Math.floor(Math.random() * 9) + 2;
      const b = Math.floor(Math.random() * 20) - 10;
      const c = Math.floor(Math.random() * 50) - 25;
      return `${a}\u00D7x${b >= 0 ? '+' + b : b}=${c}`;
    }
  },
  {
    id: 'var-both-sides',
    name: 'Variables Both Sides',
    formula: 'ax + b = cx + d',
    generate: (nice) => {
      if (nice) {
        const x = Math.floor(Math.random() * 10) - 5;
        const a = Math.floor(Math.random() * 6) + 2;
        const c = Math.floor(Math.random() * 4) + 1;
        const b = Math.floor(Math.random() * 10) - 5;
        const d = a * x + b - c * x;
        return `${a}\u00D7x${b >= 0 ? '+' + b : b}=${c}\u00D7x${d >= 0 ? '+' + d : d}`;
      }
      const a = Math.floor(Math.random() * 8) + 2;
      const c = Math.floor(Math.random() * 6) + 1;
      const b = Math.floor(Math.random() * 20) - 10;
      const d = Math.floor(Math.random() * 20) - 10;
      return `${a}\u00D7x${b >= 0 ? '+' + b : b}=${c}\u00D7x${d >= 0 ? '+' + d : d}`;
    }
  },
  {
    id: 'distributive',
    name: 'Distributive',
    formula: 'a(x + b) = c',
    generate: (nice) => {
      if (nice) {
        const a = [2, 3, 4, 5][Math.floor(Math.random() * 4)];
        const x = Math.floor(Math.random() * 8) - 4;
        const b = Math.floor(Math.random() * 8) - 4;
        return `${a}\u00D7(x${b >= 0 ? '+' + b : b})=${a * (x + b)}`;
      }
      const a = Math.floor(Math.random() * 7) + 2;
      const b = Math.floor(Math.random() * 12) - 6;
      const c = Math.floor(Math.random() * 50) - 25;
      return `${a}\u00D7(x${b >= 0 ? '+' + b : b})=${c}`;
    }
  },
  {
    id: 'fraction-coeff',
    name: 'Fraction Coefficient',
    formula: 'x/a + b = c',
    generate: (nice) => {
      if (nice) {
        const a = [2, 3, 4, 5][Math.floor(Math.random() * 4)];
        const x = a * (Math.floor(Math.random() * 6) - 3);
        const b = Math.floor(Math.random() * 10) - 5;
        return `x\u00F7${a}${b >= 0 ? '+' + b : b}=${x / a + b}`;
      }
      const a = Math.floor(Math.random() * 6) + 2;
      const b = Math.floor(Math.random() * 10) - 5;
      const c = Math.floor(Math.random() * 15) - 7;
      return `x\u00F7${a}${b >= 0 ? '+' + b : b}=${c}`;
    }
  },
  {
    id: 'identity',
    name: 'Identity (All x)',
    formula: 'ax + b = ax + b',
    generate: () => {
      const a = Math.floor(Math.random() * 5) + 1;
      const b = Math.floor(Math.random() * 10) - 5;
      return `${a}\u00D7x${b >= 0 ? '+' + b : b}=${a}\u00D7x${b >= 0 ? '+' + b : b}`;
    }
  },
  {
    id: 'contradiction',
    name: 'Contradiction (No x)',
    formula: 'ax + b = ax + c',
    generate: () => {
      const a = Math.floor(Math.random() * 5) + 1;
      const b = Math.floor(Math.random() * 10) + 1;
      const c = b + Math.floor(Math.random() * 5) + 1;
      return `${a}\u00D7x+${b}=${a}\u00D7x+${c}`;
    }
  },
  {
    id: 'multi-step',
    name: 'Multi-Step',
    formula: 'a(bx + c) + d = e',
    generate: (nice) => {
      if (nice) {
        const a = [2, 3][Math.floor(Math.random() * 2)];
        const b = [2, 3][Math.floor(Math.random() * 2)];
        const x = Math.floor(Math.random() * 5) + 1;
        const c = Math.floor(Math.random() * 5) - 2;
        const d = Math.floor(Math.random() * 8) - 4;
        return `${a}\u00D7(${b}\u00D7x${c >= 0 ? '+' + c : c})+${d}=${a * (b * x + c) + d}`;
      }
      const a = Math.floor(Math.random() * 4) + 2;
      const b = Math.floor(Math.random() * 4) + 1;
      const c = Math.floor(Math.random() * 10) - 5;
      const d = Math.floor(Math.random() * 10) - 5;
      const e = Math.floor(Math.random() * 60) - 30;
      return `${a}\u00D7(${b}\u00D7x${c >= 0 ? '+' + c : c})${d >= 0 ? '+' + d : d}=${e}`;
    }
  },
];

/* =====================================================
   WRAPPER COMPONENT (Full Educational Version)
   ===================================================== */

const LinearEquationSolver = () => {
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

        <header style={wStyles.header}>
          <button style={wStyles.themeToggle} onClick={toggleDarkMode}>
            {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
          </button>
          <div style={wStyles.iconWrap}>
            <span style={wStyles.icon}>x</span>
          </div>
          <h1 style={wStyles.title}>Linear Equation Solver</h1>
          <p style={wStyles.subtitle}>Solve linear equations step by step</p>
        </header>

        <div style={wStyles.main}>

          <div style={wStyles.leftCol}>

            <LinearSolverEngine
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
                {solveResult.solution.identity ? (
                  <div>
                    <div style={wStyles.answerValue}>All real numbers</div>
                    <div style={wStyles.answerNote}>{'\u2713'} Identity equation (true for every value)</div>
                  </div>
                ) : solveResult.solution.noSolution ? (
                  <div>
                    <div style={wStyles.answerValue}>No solution</div>
                    <div style={wStyles.answerNote}>{'\u2717'} Contradiction (no value satisfies this)</div>
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

export default LinearEquationSolver;