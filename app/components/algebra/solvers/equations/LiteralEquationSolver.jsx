import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import SolutionPanel from '../SolutionPanel';
import THEME_CSS from '../MathSolverThemes';

/* =====================================================
   LITERAL EQUATION SOLVER

   Two exports:
   - LiteralSolverEngine: Standalone solver component
   - LiteralEquationSolver: Full educational wrapper (default)

   Features:
   - Multi-variable formulas (A=l×w, y=mx+b, etc.)
   - Auto-detect variables, user picks solve target
   - Symbolic rearrangement steps
   - Handles linear dependence on target variable
   - Fraction display for division results
   - No graph (solution is symbolic)
   - tabs prop on wrapper, passed through to SolutionPanel
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
  PI: 'PI',
};

const SUPERSCRIPT_MAP = { '\u00B2': 2, '\u00B3': 3, '\u2074': 4 };

function tokenize(input) {
  const tokens = [];
  let i = 0;
  while (i < input.length) {
    const ch = input[i];
    if (/\s/.test(ch)) { i++; continue; }
    if (SUPERSCRIPT_MAP[ch] !== undefined) { tokens.push({ type: TokenType.POWER }); tokens.push({ type: TokenType.NUMBER, value: SUPERSCRIPT_MAP[ch] }); i++; continue; }
    if (/[0-9]/.test(ch) || (ch === '.' && /[0-9]/.test(input[i + 1]))) {
      let num = ''; while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) { num += input[i]; i++; }
      tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) }); continue;
    }
    if (ch === '\u03C0') { tokens.push({ type: TokenType.PI }); i++; continue; }
    if (/[a-zA-Z]/.test(ch)) { tokens.push({ type: TokenType.VARIABLE, value: ch }); i++; continue; }
    const charMap = { '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY, '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE, '^': TokenType.POWER, '(': TokenType.LPAREN, ')': TokenType.RPAREN, '+': TokenType.PLUS, '-': TokenType.MINUS, '=': TokenType.EQUALS };
    if (charMap[ch]) { tokens.push({ type: charMap[ch] }); i++; continue; }
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
  const consume = (et) => { const t = tokens[pos]; if (et && t?.type !== et) throw new Error(`Expected ${et} but got ${t?.type}`); pos++; return t; };

  const parseEq = () => {
    const left = parseExpr();
    if (peek()?.type === TokenType.EQUALS) { consume(); return { type: 'EQUATION', left, right: parseExpr() }; }
    return left;
  };
  const parseExpr = () => parseAdd();
  const parseAdd = () => { let l = parseMul(); while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) { const op = consume().type; l = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left: l, right: parseMul() }; } return l; };
  const parseMul = () => { let l = parsePow(); while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) { const op = consume().type; l = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left: l, right: parsePow() }; } return l; };
  const parsePow = () => { let b = parseUnary(); if (peek()?.type === TokenType.POWER) { consume(); return { type: 'POWER', base: b, exponent: parsePow() }; } return b; };
  const parseUnary = () => { if (peek()?.type === TokenType.MINUS) { consume(); return { type: 'NEGATE', operand: parseUnary() }; } return parsePrimary(); };
  const parsePrimary = () => {
    const t = peek();
    if (t?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: t.value }; }
    if (t?.type === TokenType.PI) { consume(); return { type: 'PI' }; }
    if (t?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: t.value }; }
    if (t?.type === TokenType.LPAREN) { consume(); const e = parseExpr(); consume(TokenType.RPAREN); return e; }
    throw new Error(`Unexpected token: ${t?.type}`);
  };
  const ast = parseEq();
  if (pos < tokens.length) throw new Error('Unexpected tokens at end');
  return ast;
}

/* =====================================================
   HELPERS
   ===================================================== */

function formatNumber(n) { if (Number.isInteger(n)) return String(n); return (Math.round(n * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, ''); }

function collectVariables(node) {
  const vars = new Set();
  const walk = (n) => {
    if (!n) return;
    if (n.type === 'VARIABLE') { vars.add(n.name); return; }
    if (n.type === 'NEGATE') { walk(n.operand); return; }
    if (n.type === 'POWER') { walk(n.base); walk(n.exponent); return; }
    walk(n.left); walk(n.right); walk(n.operand); walk(n.argument); walk(n.base); walk(n.exponent);
  };
  walk(node);
  return Array.from(vars);
}

function containsVar(node, varName) {
  if (!node) return false;
  if (node.type === 'VARIABLE') return node.name === varName;
  if (node.type === 'NUMBER' || node.type === 'PI') return false;
  if (node.type === 'NEGATE') return containsVar(node.operand, varName);
  if (node.type === 'POWER') return containsVar(node.base, varName) || containsVar(node.exponent, varName);
  return containsVar(node.left, varName) || containsVar(node.right, varName) || containsVar(node.operand, varName);
}

/* Collect terms linear in targetVar.
   Returns { coeff: AST, constant: AST } where node = coeff * targetVar + constant.
   coeff and constant are AST nodes not containing targetVar.
   Returns null if not linear in targetVar. */
function collectLinearInVar(node, targetVar) {
  if (!node) return null;

  if (node.type === 'NUMBER' || node.type === 'PI') return { coeff: { type: 'NUMBER', value: 0 }, constant: node };

  if (node.type === 'VARIABLE') {
    if (node.name === targetVar) return { coeff: { type: 'NUMBER', value: 1 }, constant: { type: 'NUMBER', value: 0 } };
    return { coeff: { type: 'NUMBER', value: 0 }, constant: node };
  }

  if (node.type === 'NEGATE') {
    const inner = collectLinearInVar(node.operand, targetVar);
    if (!inner) return null;
    return { coeff: negate(inner.coeff), constant: negate(inner.constant) };
  }

  if (node.type === 'ADD') {
    const l = collectLinearInVar(node.left, targetVar);
    const r = collectLinearInVar(node.right, targetVar);
    if (!l || !r) return null;
    return { coeff: addNodes(l.coeff, r.coeff), constant: addNodes(l.constant, r.constant) };
  }

  if (node.type === 'SUBTRACT') {
    const l = collectLinearInVar(node.left, targetVar);
    const r = collectLinearInVar(node.right, targetVar);
    if (!l || !r) return null;
    return { coeff: subtractNodes(l.coeff, r.coeff), constant: subtractNodes(l.constant, r.constant) };
  }

  if (node.type === 'MULTIPLY') {
    const lHas = containsVar(node.left, targetVar);
    const rHas = containsVar(node.right, targetVar);
    if (!lHas && !rHas) return { coeff: { type: 'NUMBER', value: 0 }, constant: node };
    if (lHas && rHas) return null; // quadratic or worse
    if (lHas) {
      const l = collectLinearInVar(node.left, targetVar);
      if (!l) return null;
      // (l.coeff * target + l.constant) * right
      return { coeff: multiplyNodes(l.coeff, node.right), constant: multiplyNodes(l.constant, node.right) };
    }
    const r = collectLinearInVar(node.right, targetVar);
    if (!r) return null;
    return { coeff: multiplyNodes(node.left, r.coeff), constant: multiplyNodes(node.left, r.constant) };
  }

  if (node.type === 'DIVIDE') {
    const numHas = containsVar(node.left, targetVar);
    const denHas = containsVar(node.right, targetVar);
    if (denHas) return null; // target in denominator — not linear
    if (!numHas) return { coeff: { type: 'NUMBER', value: 0 }, constant: node };
    const l = collectLinearInVar(node.left, targetVar);
    if (!l) return null;
    return { coeff: divideNodes(l.coeff, node.right), constant: divideNodes(l.constant, node.right) };
  }

  if (node.type === 'POWER') {
    if (containsVar(node, targetVar)) return null; // target in power — not linear
    return { coeff: { type: 'NUMBER', value: 0 }, constant: node };
  }

  return null;
}

/* AST node constructors — simplify trivial cases */
function negate(node) {
  if (node.type === 'NUMBER') return { type: 'NUMBER', value: -node.value };
  if (node.type === 'NEGATE') return node.operand;
  return { type: 'NEGATE', operand: node };
}

function addNodes(a, b) {
  if (a.type === 'NUMBER' && a.value === 0) return b;
  if (b.type === 'NUMBER' && b.value === 0) return a;
  if (a.type === 'NUMBER' && b.type === 'NUMBER') return { type: 'NUMBER', value: a.value + b.value };
  return { type: 'ADD', left: a, right: b };
}

function subtractNodes(a, b) {
  if (b.type === 'NUMBER' && b.value === 0) return a;
  if (a.type === 'NUMBER' && a.value === 0) return negate(b);
  if (a.type === 'NUMBER' && b.type === 'NUMBER') return { type: 'NUMBER', value: a.value - b.value };
  return { type: 'SUBTRACT', left: a, right: b };
}

function multiplyNodes(a, b) {
  if (a.type === 'NUMBER' && a.value === 0) return { type: 'NUMBER', value: 0 };
  if (b.type === 'NUMBER' && b.value === 0) return { type: 'NUMBER', value: 0 };
  if (a.type === 'NUMBER' && a.value === 1) return b;
  if (b.type === 'NUMBER' && b.value === 1) return a;
  if (a.type === 'NUMBER' && b.type === 'NUMBER') return { type: 'NUMBER', value: a.value * b.value };
  return { type: 'MULTIPLY', left: a, right: b };
}

function divideNodes(a, b) {
  if (a.type === 'NUMBER' && a.value === 0) return { type: 'NUMBER', value: 0 };
  if (b.type === 'NUMBER' && b.value === 1) return a;
  if (a.type === 'NUMBER' && b.type === 'NUMBER' && b.value !== 0) return { type: 'NUMBER', value: a.value / b.value };
  return { type: 'DIVIDE', left: a, right: b };
}

function isZeroNode(node) {
  return node.type === 'NUMBER' && Math.abs(node.value) < 1e-10;
}

function isOneNode(node) {
  return node.type === 'NUMBER' && Math.abs(node.value - 1) < 1e-10;
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
    case 'PI': return <span key={key} style={s.special}>{'\u03C0'}</span>;
    case 'VARIABLE': return <span key={key} style={s.variable}>{node.name}</span>;
    case 'NEGATE': {
      const inner = node.operand;
      if (inner.type === 'NUMBER') return <span key={key} style={s.number}>{formatNumber(-inner.value)}</span>;
      return <span key={key}><span style={s.op}>{'\u2212'}</span>{astToMathDisplay(inner, `${key}-neg`, darkMode)}</span>;
    }
    case 'ADD': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> + </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
    case 'SUBTRACT': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.op}> {'\u2212'} </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
    case 'MULTIPLY': {
      // Clean display: skip "1 ·" and show implicit multiplication for var*var
      const lIsNum = node.left.type === 'NUMBER' || node.left.type === 'PI';
      const rIsVar = node.right.type === 'VARIABLE' || node.right.type === 'PI' || node.right.type === 'POWER';
      if (lIsNum && rIsVar) {
        if (node.left.type === 'NUMBER' && Math.abs(node.left.value - 1) < 1e-10) return astToMathDisplay(node.right, `${key}-r`, darkMode);
        if (node.left.type === 'NUMBER' && Math.abs(node.left.value + 1) < 1e-10) return <span key={key}><span style={s.op}>{'\u2212'}</span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
      }
      return <span key={key}>{wrap(node.left, `${key}-l`)}<span style={s.op}> {'\u00B7'} </span>{wrap(node.right, `${key}-r`)}</span>;
    }
    case 'DIVIDE': return (
      <span key={key} style={s.fraction}>
        <span style={s.fracNum}>{astToMathDisplay(node.left, `${key}-num`, darkMode)}</span>
        <span style={s.fracDen}>{astToMathDisplay(node.right, `${key}-den`, darkMode)}</span>
      </span>
    );
    case 'POWER': return <span key={key} style={s.power}>{wrap(node.base, `${key}-base`)}<sup style={s.sup}>{astToMathDisplay(node.exponent, `${key}-exp`, darkMode)}</sup></span>;
    case 'EQUATION': return <span key={key}>{astToMathDisplay(node.left, `${key}-l`, darkMode)}<span style={s.equals}> = </span>{astToMathDisplay(node.right, `${key}-r`, darkMode)}</span>;
    default: return null;
  }
}

const getMathStyles = (darkMode) => ({
  number: { color: darkMode ? '#e2e8f0' : '#1e3a5f' },
  variable: { fontStyle: 'italic', color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '500' },
  special: { color: darkMode ? '#60a5fa' : '#3b82f6', fontWeight: '500' },
  op: { color: darkMode ? '#94a3b8' : '#64748b', margin: '0 2px' },
  equals: { color: '#f59e0b', fontWeight: '600', margin: '0 4px' },
  power: { display: 'inline' },
  sup: { fontSize: '0.7em', color: darkMode ? '#60a5fa' : '#3b82f6', marginLeft: '1px', verticalAlign: 'super', position: 'relative', top: '-0.4em' },
  fraction: { display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', margin: '0 4px', position: 'relative', top: '-2px' },
  fracNum: { borderBottom: `1.5px solid ${darkMode ? '#94a3b8' : '#64748b'}`, paddingBottom: '2px', lineHeight: '1.2' },
  fracDen: { paddingTop: '2px', lineHeight: '1.2' },
});

/* =====================================================
   SOLVER
   ===================================================== */

function solveLiteralEquation(ast, targetVar) {
  const steps = [];

  if (ast.type !== 'EQUATION') throw new Error('Input must be an equation (use = sign)');
  if (!targetVar) throw new Error('Please select a variable to solve for.');

  const allVars = collectVariables(ast);
  if (!allVars.includes(targetVar)) throw new Error(`Variable "${targetVar}" not found in the equation.`);

  steps.push({ rule: 'Original Equation', description: 'Start with the given formula.', before: ast, after: null });

  // Move everything to one side: left - right = 0
  // But work symbolically: collect terms linear in targetVar
  // Combined: left - right in terms of targetVar
  const combined = { type: 'SUBTRACT', left: ast.left, right: ast.right };
  const linear = collectLinearInVar(combined, targetVar);

  if (!linear) {
    throw new Error(`Cannot solve for ${targetVar}: the equation is not linear in ${targetVar}. The variable may appear in a power, product with itself, or denominator.`);
  }

  // We have: coeff * targetVar + constant = 0
  // So: targetVar = -constant / coeff
  const { coeff, constant } = linear;

  if (isZeroNode(coeff)) {
    if (isZeroNode(constant)) {
      steps.push({ rule: 'Identity', description: `The variable ${targetVar} cancels out. The equation is always true.`, before: null, after: null });
      return { steps, solution: { variable: targetVar, identity: true }, graphData: null };
    }
    steps.push({ rule: 'No Solution', description: `The variable ${targetVar} cancels out, leaving a contradiction.`, before: null, after: null });
    return { steps, solution: { variable: targetVar, noSolution: true }, graphData: null };
  }

  // Build the solution AST: targetVar = -constant / coeff
  const negConstant = negate(constant);
  let solutionAST;

  if (isOneNode(coeff)) {
    solutionAST = negConstant;
    // Show steps based on what we did
    if (!isZeroNode(constant)) {
      steps.push({
        rule: 'Isolate the Variable',
        description: `Move all non-${targetVar} terms to the other side.`,
        before: null,
        after: { type: 'EQUATION', left: { type: 'VARIABLE', name: targetVar }, right: negConstant }
      });
    }
  } else if (coeff.type === 'NUMBER' && Math.abs(coeff.value + 1) < 1e-10) {
    // coeff is -1
    solutionAST = constant; // -(-constant) / (-1) = constant... wait: -constant / -1 = constant
    // Actually: targetVar = -constant / coeff = -constant / (-1) = constant
    solutionAST = negConstant;
    // Hmm: coeff = -1, so equation is -targetVar + constant = 0 → targetVar = constant
    // negConstant = -constant. -constant / -1 = constant
    solutionAST = constant;

    if (!isZeroNode(constant)) {
      steps.push({
        rule: 'Isolate the Variable',
        description: `Move terms and change signs to isolate ${targetVar}.`,
        before: null,
        after: { type: 'EQUATION', left: { type: 'VARIABLE', name: targetVar }, right: constant }
      });
    }
  } else {
    // General case: need to divide
    if (!isZeroNode(constant)) {
      // First show subtraction step
      steps.push({
        rule: 'Isolate the Term',
        description: `Move all non-${targetVar} terms to the other side.`,
        before: null,
        after: { type: 'EQUATION', left: multiplyNodes(coeff, { type: 'VARIABLE', name: targetVar }), right: negConstant }
      });
    }

    solutionAST = divideNodes(negConstant, coeff);

    steps.push({
      rule: 'Divide Both Sides',
      description: `Divide both sides by the coefficient of ${targetVar}.`,
      before: null,
      after: { type: 'EQUATION', left: { type: 'VARIABLE', name: targetVar }, right: solutionAST }
    });
  }

  steps.push({
    rule: 'Solution',
    description: `Solved for ${targetVar}.`,
    before: null,
    after: { type: 'EQUATION', left: { type: 'VARIABLE', name: targetVar }, right: solutionAST }
  });

  return {
    steps,
    solution: { variable: targetVar, expression: solutionAST },
    graphData: null
  };
}

/* =====================================================
   CURSOR STYLES
   ===================================================== */

const CURSOR_CSS = `
  @keyframes lt-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  .lt-caret { display: inline-block; width: 2px; height: 1.2em; background: #fbbf24; animation: lt-blink 1s step-end infinite; vertical-align: text-bottom; margin: 0 -1px; border-radius: 1px; }
  .lt-display:focus { outline: none; }
  .lt-display:focus .lt-caret { animation: lt-blink 1s step-end infinite; }
  .lt-display:not(:focus) .lt-caret { opacity: 0.4; animation: none; }
  .lt-char { cursor: text; position: relative; }
  .lt-char:hover { background: rgba(255,255,255,0.08); border-radius: 2px; }
  .lt-sup-group { display: inline; cursor: text; }
  .lt-form-card, .lt-form-card:visited, .lt-form-card:active, .lt-form-card:focus, .lt-form-card:focus-visible, .lt-form-card:focus-within { outline: none !important; box-shadow: none; border-color: var(--lt-border-color) !important; }
`;

/* =====================================================
   ENGINE COMPONENT
   ===================================================== */

export const LiteralSolverEngine = forwardRef(({
  compact = false, style = {}, darkMode = false, onResultChange = null, onClear = null
}, ref) => {
  const [expression, setExpression] = useState([]);
  const [cursorPos, setCursorPos] = useState(0);
  const [undoStack, setUndoStack] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [focused, setFocused] = useState(false);
  const [targetVar, setTargetVar] = useState(null);
  const [detectedVars, setDetectedVars] = useState([]);
  const displayRef = useRef(null);

  const varButtons = ['x', 'y', 'A', 'P', 'V', 'r', 'h', 'l', 'w', 'm', 'b', 'd', 't', 'C', 'F', 'n', 'a', 'c', 'R', 'S'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const operators = ['\u00D7', '\u00F7', '+', '-', '='];

  const pushUndo = useCallback((expr, pos) => { setUndoStack(stack => [...stack.slice(-50), { expr, pos }]); }, []);
  const undo = useCallback(() => { if (undoStack.length === 0) return; const prev = undoStack[undoStack.length - 1]; setUndoStack(stack => stack.slice(0, -1)); setExpression(prev.expr); setCursorPos(prev.pos); setResult(null); setError(null); }, [undoStack]);

  const updateDetectedVars = useCallback((expr) => {
    const varSet = new Set();
    for (const ch of expr) {
      if (/[a-zA-Z]/.test(ch) && ch !== '\u03C0') varSet.add(ch);
    }
    const sorted = Array.from(varSet).sort();
    setDetectedVars(sorted);
    if (targetVar && !varSet.has(targetVar)) setTargetVar(null);
  }, [targetVar]);

  useImperativeHandle(ref, () => ({
    loadEquation: (eqString) => {
      pushUndo(expression, cursorPos);
      const chars = eqString.split('');
      setExpression(chars); setCursorPos(chars.length); setResult(null); setError(null);
      updateDetectedVars(chars);
      if (onResultChange) onResultChange(null);
    },
    clear: () => {
      pushUndo(expression, cursorPos);
      setExpression([]); setCursorPos(0); setResult(null); setError(null);
      setDetectedVars([]); setTargetVar(null);
      if (onResultChange) onResultChange(null);
    },
    getExpression: () => expression.join(''),
    getResult: () => result,
    setTarget: (v) => setTargetVar(v)
  }));

  const insertAt = useCallback((item) => {
    pushUndo(expression, cursorPos);
    let newExpr;
    if (typeof item === 'string' && item.length > 1) {
      const chars = item.split('');
      newExpr = [...expression]; newExpr.splice(cursorPos, 0, ...chars);
      setExpression(newExpr); setCursorPos(cursorPos + chars.length);
    } else {
      newExpr = [...expression]; newExpr.splice(cursorPos, 0, item);
      setExpression(newExpr); setCursorPos(cursorPos + 1);
    }
    setResult(null); setError(null);
    updateDetectedVars(newExpr);
  }, [cursorPos, expression, pushUndo, updateDetectedVars]);

  const deleteAt = useCallback((pos) => {
    if (pos < 0 || pos >= expression.length) return;
    pushUndo(expression, cursorPos);
    const newExpr = [...expression]; newExpr.splice(pos, 1);
    setExpression(newExpr); setCursorPos(pos); setResult(null); setError(null);
    updateDetectedVars(newExpr);
  }, [expression, cursorPos, pushUndo, updateDetectedVars]);

  const clearAll = useCallback(() => {
    if (expression.length === 0) return;
    pushUndo(expression, cursorPos);
    setExpression([]); setCursorPos(0); setResult(null); setError(null);
    setDetectedVars([]); setTargetVar(null);
    if (onClear) onClear();
  }, [expression, cursorPos, pushUndo, onClear]);

  const solve = useCallback(() => {
    try {
      if (!targetVar) { setError('Select a variable to solve for.'); return; }
      const exprString = expression.join('');
      const tokens = tokenize(exprString);
      const ast = parse(tokens);
      const solveResult = solveLiteralEquation(ast, targetVar);
      setResult(solveResult); setError(null);
      if (onResultChange) onResultChange(solveResult);
    } catch (e) { setError(e.message); setResult(null); if (onResultChange) onResultChange(null); }
  }, [expression, targetVar, onResultChange]);

  const TYPEABLE = new Set('0123456789.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+-=*/()^\u00D7\u00F7\u00B2\u00B3\u2074\u03C0');
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
    if (ch.length === 1 && TYPEABLE.has(ch)) { e.preventDefault(); insertAt(ch); }
  }, [expression.length, cursorPos, deleteAt, insertAt, solve, undo]);

  const handleDisplayClick = useCallback((e) => {
    if (displayRef.current) displayRef.current.focus();
    const charEl = e.target.closest('[data-idx]');
    if (charEl) { const idx = parseInt(charEl.getAttribute('data-idx'), 10); const rect = charEl.getBoundingClientRect(); setCursorPos(e.clientX - rect.left < rect.width / 2 ? idx : idx + 1); }
    else { setCursorPos(expression.length); }
  }, [expression.length]);

  const buildDisplayElements = () => {
    const expr = expression;
    if (expr.length === 0) { if (focused) return <span className="lt-caret" />; return <span style={getEngineStyles(darkMode).placeholder}>Enter formula...</span>; }
    const elements = []; const eStyles = getEngineStyles(darkMode);
    const renderCaret = (pos) => (cursorPos === pos && focused) ? <span key={`caret-${pos}`} className="lt-caret" /> : null;
    const supGroups = new Set();
    for (let i = 0; i < expr.length; i++) { if (expr[i] === '^' && i + 1 < expr.length) { supGroups.add(i); supGroups.add(i + 1); } }
    const charStyle = (ch, idx) => {
      if (ch === '\u00D7' || ch === '+' || ch === '-') return eStyles.displayOp;
      if (ch === '\u00F7' || ch === '/') return eStyles.displayDiv;
      if (ch === '=') return eStyles.displayEquals;
      if (ch === '\u00B2' || ch === '\u00B3' || ch === '\u2074') return eStyles.displaySup;
      if (ch === '\u03C0') return eStyles.displaySpecial;
      if (supGroups.has(idx)) return eStyles.displaySup;
      if (/[a-zA-Z]/.test(ch)) return ch === targetVar ? eStyles.displayTarget : eStyles.displayVar;
      return undefined;
    };
    const displayChar = (ch) => {
      if (ch === '\u00D7') return ' \u00B7 '; if (ch === '\u00F7' || ch === '/') return ' / ';
      if (ch === '+') return ' + '; if (ch === '-') return ' \u2212 ';
      if (ch === '=') return ' = '; return ch;
    };
    let i = 0;
    while (i < expr.length) {
      elements.push(renderCaret(i));
      if (expr[i] === '^' && i + 1 < expr.length) {
        elements.push(<span key={`sup-${i}`} className="lt-sup-group"><span className="lt-char" data-idx={i} style={eStyles.displaySup}>{'^'}</span><sup style={eStyles.displaySupText}>{renderCaret(i + 1)}<span className="lt-char" data-idx={i + 1} style={eStyles.displaySupText}>{expr[i + 1]}</span></sup></span>);
        i += 2; continue;
      }
      const isSup = expr[i] === '\u00B2' || expr[i] === '\u00B3' || expr[i] === '\u2074';
      if (isSup) { elements.push(<sup key={`ch-${i}`} className="lt-char" data-idx={i} style={eStyles.displaySupText}>{expr[i]}</sup>); }
      else { elements.push(<span key={`ch-${i}`} className="lt-char" data-idx={i} style={charStyle(expr[i], i)}>{displayChar(expr[i])}</span>); }
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
      <div ref={displayRef} className="lt-display" tabIndex={0} style={{ ...styles.display, padding: `${18 * p}px ${22 * p}px`, cursor: 'text' }} onClick={handleDisplayClick} onKeyDown={handleKeyDown} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>{buildDisplayElements()}</div>

      {detectedVars.length > 0 && (
        <div style={styles.targetSection}>
          <div style={styles.targetLabel}>Solve for</div>
          <div style={styles.targetRow}>
            {detectedVars.map((v) => (
              <button key={v} style={{ ...styles.targetBtn, ...(targetVar === v ? styles.targetBtnActive : {}) }} onClick={() => { setTargetVar(v); setResult(null); setError(null); }}>{v}</button>
            ))}
          </div>
        </div>
      )}

      {error && <div style={styles.error}>{error}</div>}
      <div style={{ ...styles.builder, gap: `${12 * p}px` }}>
        <div style={styles.row}><span style={styles.label}>Var</span><div style={styles.btnGroup}>{varButtons.slice(0, 10).map((v) => (<button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => insertAt(v)}>{v}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}></span><div style={styles.btnGroup}>{varButtons.slice(10).map((v) => (<button key={v} style={{ ...styles.btn, ...styles.btnVar }} onClick={() => insertAt(v)}>{v}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}>Num</span><div style={styles.btnGroup}>{numbers.map((n) => (<button key={n} style={{ ...styles.btn, ...styles.btnNum }} onClick={() => insertAt(n)}>{n}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}>Op</span><div style={styles.btnGroup}>{operators.map((op) => (<button key={op} style={{ ...styles.btn, ...styles.btnOp }} onClick={() => insertAt(op)}>{op}</button>))}</div></div>
        <div style={styles.row}><span style={styles.label}></span><div style={styles.btnGroup}>
          <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('\u03C0')}>{'\u03C0'}</button>
          <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('^')}>^</button>
          <button style={{ ...styles.btn, ...styles.btnSpecial }} onClick={() => insertAt('\u00B2')}>{'\u00B2'}</button>
          <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt('(')}>{'('}</button>
          <button style={{ ...styles.btn, ...styles.btnBracket }} onClick={() => insertAt(')')}>{')'}</button>
        </div></div>
        <div style={styles.actions}>
          <button style={{ ...styles.btnAction, ...styles.btnClear }} onClick={clearAll}>Clear</button>
          <button style={{ ...styles.btnAction, ...styles.btnUndo, ...(undoStack.length === 0 ? styles.btnUndoDisabled : {}) }} onClick={undo} disabled={undoStack.length === 0} title="Undo (Ctrl+Z)">{'\u21B6'}</button>
          <button style={{ ...styles.btnAction, ...styles.btnBack }} onClick={() => { if (cursorPos > 0) deleteAt(cursorPos - 1); }}>{'\u232B'}</button>
          <button style={{ ...styles.btnAction, ...styles.btnSolve, ...(expression.length === 0 || !targetVar ? styles.btnDisabled : {}) }} onClick={solve} disabled={expression.length === 0 || !targetVar}>Solve</button>
        </div>
      </div>
      {result && result.solution && result.solution.expression && (
        <div style={styles.solution}>
          <span style={styles.solVar}>{result.solution.variable}</span>
          <span style={styles.solEq}> = </span>
          <span>{astToMathDisplay(result.solution.expression, 'eng-sol', darkMode)}</span>
        </div>
      )}
      {result && result.solution && result.solution.identity && (
        <div style={styles.solution}><span>Identity (always true)</span></div>
      )}
      {result && result.solution && result.solution.noSolution && (
        <div style={styles.solution}><span>No solution</span></div>
      )}
    </div>
  );
});

LiteralSolverEngine.displayName = 'LiteralSolverEngine';

const getEngineStyles = (darkMode) => ({
  container: { background: darkMode ? '#1e293b' : '#fff', borderRadius: '16px', padding: '20px', boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.06)' },
  display: { background: darkMode ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '12px', padding: '18px 22px', minHeight: '54px', marginBottom: '12px', display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', fontSize: '1.4rem', color: '#fff', fontWeight: '500' },
  placeholder: { color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontSize: '0.95rem' },
  displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
  displayDiv: { color: '#fbbf24', fontWeight: '600', margin: '0 2px' },
  displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
  displaySup: { color: '#bfdbfe', fontSize: '0.85em' },
  displaySupText: { fontSize: '0.7em', color: '#bfdbfe', verticalAlign: 'super', position: 'relative', top: '-0.4em' },
  displayVar: { fontStyle: 'italic' },
  displayTarget: { fontStyle: 'italic', color: '#fbbf24', fontWeight: '700', textDecoration: 'underline', textDecorationColor: 'rgba(251,191,36,0.5)', textUnderlineOffset: '3px' },
  displaySpecial: { color: '#a5f3fc', fontWeight: '500' },
  targetSection: { marginBottom: '12px', padding: '10px 14px', background: darkMode ? '#334155' : '#f8fafc', borderRadius: '10px', border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0' },
  targetLabel: { fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: darkMode ? '#94a3b8' : '#64748b', fontWeight: '600', marginBottom: '6px' },
  targetRow: { display: 'flex', gap: '6px', flexWrap: 'wrap' },
  targetBtn: { fontSize: '0.95rem', padding: '6px 14px', border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0', background: darkMode ? '#1e293b' : '#fff', color: darkMode ? '#60a5fa' : '#3b82f6', cursor: 'pointer', borderRadius: '8px', fontFamily: 'inherit', fontStyle: 'italic', fontWeight: '600', transition: 'all 0.15s' },
  targetBtnActive: { background: darkMode ? '#1e40af' : '#3b82f6', color: '#fff', borderColor: darkMode ? '#2563eb' : '#2563eb', boxShadow: '0 2px 6px rgba(59, 130, 246, 0.3)' },
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
});

/* =====================================================
   EQUATION FORM GENERATORS
   ===================================================== */

const equationForms = [
  { id: 'slope-intercept', name: 'Slope-Intercept', formula: 'y = mx + b', generate: () => 'y=m\u00D7x+b' },
  { id: 'area-rect', name: 'Area of Rectangle', formula: 'A = l \u00B7 w', generate: () => 'A=l\u00D7w' },
  { id: 'perimeter', name: 'Perimeter', formula: 'P = 2l + 2w', generate: () => 'P=2\u00D7l+2\u00D7w' },
  { id: 'distance', name: 'Distance', formula: 'd = r \u00B7 t', generate: () => 'd=r\u00D7t' },
  { id: 'cylinder-volume', name: 'Cylinder Volume', formula: 'V = \u03C0r\u00B2h', generate: () => 'V=\u03C0\u00D7r\u00B2\u00D7h' },
  { id: 'temperature', name: 'Temperature', formula: 'F = 9/5\u00B7C + 32', generate: () => 'F=9\u00F75\u00D7C+32' },
  { id: 'standard-line', name: 'Standard Form Line', formula: 'a\u00B7x + b\u00B7y = c', generate: () => 'a\u00D7x+b\u00D7y=c' },
  { id: 'kinematic', name: 'Kinematic', formula: 'd = v\u00B7t + \u00BD a\u00B7t\u00B2', generate: () => 'd=V\u00D7t+a\u00D7t\u00B2\u00F72' },
  { id: 'simple-interest', name: 'Simple Interest', formula: 'A = P(1 + rt)', generate: () => 'A=P\u00D7(1+r\u00D7t)' },
  { id: 'ohms-law', name: 'Ohm&apos;s Law', formula: 'V = I \u00B7 R', generate: () => 'V=I\u00D7R' },
];

/* =====================================================
   WRAPPER COMPONENT (accepts tabs prop)
   ===================================================== */

const LiteralEquationSolver = ({ tabs = [] }) => {
  const engineRef = React.useRef(null);
  const [solveResult, setSolveResult] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [examplesOpen, setExamplesOpen] = useState(false);

  const handleFormClick = (form) => {
    const equation = form.generate();
    setSelectedForm(form.id);
    setSolveResult(null);
    if (engineRef.current) engineRef.current.loadEquation(equation);
  };

  const handleResultChange = (result) => { setSolveResult(result); };
  const handleClear = () => { setSelectedForm(null); setSolveResult(null); };

  const wStyles = getWrapperStyles(darkMode);

  const renderStepContent = (step, index) => {
    if (!step.before && !step.after) return null;
    return (<div>{step.before && <div style={wStyles.stepMath}>{astToMathDisplay(step.before, `before-${index}`, darkMode)}</div>}{step.after && <div style={wStyles.stepTransform}><span style={wStyles.arrow}>{'\u27F9'}</span><div style={wStyles.stepMath}>{astToMathDisplay(step.after, `after-${index}`, darkMode)}</div></div>}</div>);
  };

  const renderFinalAnswer = () => {
    if (!solveResult || !solveResult.solution) return null;
    const sol = solveResult.solution;
    if (sol.noSolution) return (<div style={wStyles.finalAnswer}><div style={wStyles.answerLabel}>Answer</div><div style={wStyles.answerValue}>No solution</div><div style={wStyles.answerNote}>{'\u2717'} The variable cancels out leaving a contradiction</div></div>);
    if (sol.identity) return (<div style={wStyles.finalAnswer}><div style={wStyles.answerLabel}>Answer</div><div style={wStyles.answerValue}>Identity</div><div style={wStyles.answerNote}>{'\u2713'} True for all values</div></div>);
    if (sol.expression) return (
      <div style={wStyles.finalAnswer}>
        <div style={wStyles.answerLabel}>Answer</div>
        <div style={wStyles.answerValue}>
          <span style={wStyles.answerVar}>{sol.variable}</span>
          <span style={wStyles.answerEq}> = </span>
          <span style={wStyles.answerExpr}>{astToMathDisplay(sol.expression, 'final-ans', true)}</span>
        </div>
        <div style={wStyles.answerNote}>{'\u2713'} Solved for {sol.variable}</div>
      </div>
    );
    return null;
  };

  return (
    <div style={wStyles.container}>
      <style>{THEME_CSS}</style>
      <div style={wStyles.inner}>
        <header style={wStyles.header}>
          <button style={wStyles.themeToggle} onClick={() => setDarkMode(!darkMode)}>{darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}</button>
          <div style={wStyles.iconWrap}><span style={wStyles.icon}>f(x)</span></div>
          {/* <h1 style={wStyles.title}>Literal Equation Solver</h1> */}
          <p style={wStyles.subtitle}>Rearrange any formula to isolate a chosen variable</p>
        </header>
        <div style={wStyles.main}>
          <div style={wStyles.leftCol}>
            <LiteralSolverEngine ref={engineRef} onResultChange={handleResultChange} onClear={handleClear} darkMode={darkMode} compact={true} />
            <div style={wStyles.formsSection}>
              <button style={wStyles.accordionHeader} onClick={() => setExamplesOpen(!examplesOpen)}>
                <span style={wStyles.sectionTitle}>Try an Example</span>
                <span style={wStyles.chevron}>{examplesOpen ? '\u25B2' : '\u25BC'}</span>
              </button>
              {examplesOpen && (
                <div style={wStyles.accordionContent}>
                  <p style={wStyles.formsHint}>Click a formula to load it. Then pick which variable to solve for.</p>
                  <div style={wStyles.formsGrid}>
                    {equationForms.map((form) => (
                      <button key={form.id} className="lt-form-card" style={{ ...wStyles.formCard, ...(selectedForm === form.id ? wStyles.formCardSelected : {}) }} onClick={() => handleFormClick(form)}>
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
              graphData={null}
              darkMode={darkMode}
              placeholder="Enter a formula and choose which variable to solve for, then click Solve to see the step-by-step rearrangement."
              stepsTitle="Solution Steps"
              renderStepContent={renderStepContent}
              stepCardClass={() => ''}
              tabs={tabs}
            />
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
  icon: { color: '#fff', fontSize: '14px', fontWeight: '700', fontStyle: 'italic' },
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
  formCard: { '--lt-border-color': darkMode ? '#475569' : '#e2e8f0', background: darkMode ? '#334155' : '#f8fafc', border: darkMode ? '2px solid #475569' : '2px solid #e2e8f0', borderRadius: '10px', padding: '10px 12px', cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'left', fontFamily: 'inherit' },
  formCardSelected: { '--lt-border-color': '#3b82f6', borderColor: '#3b82f6', background: darkMode ? '#1e3a5f' : '#eff6ff', boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)' },
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
  answerExpr: {},
  answerNote: { fontSize: '0.8rem', opacity: 0.75, marginTop: '6px' },
});

export default LiteralEquationSolver;