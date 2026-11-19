// Graph Studio — engine: from an editor's LaTeX to the plain row syntax
//
// A math editor (MathLive in the shells) hands back LaTeX such as
//   \frac{x^{2}-1}{x-2}      \sqrt{x+4}      \left|x\right|      a\sin\left(bx\right)
// The scene document keeps rows as plain text, the one syntax the rest
// of the engine reads:
//   ((x^2-1)/(x-2))          sqrt(x+4)       abs(x)              a sin(bx)
// texToText does that translation. The way back, for showing a row in
// the editor, is rowToTex in language.js.
//
//   texToText('\\frac{1}{2}x^{2}')   →  '(1/2)x^2'
//
// It never throws: what it does not know is passed through, so the
// usual "cannot read this row" message appears rather than a crash.
//
// Pure JavaScript: no React, no DOM.

const FUNCTIONS = new Set([
  'sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'arcsin', 'arccos', 'arctan',
  'sinh', 'cosh', 'tanh', 'ln', 'log', 'exp', 'min', 'max'
]);
const NAMES = { theta: 'theta', pi: 'pi', tau: 'tau', exponentialE: 'e', imaginaryI: 'i', differentialD: 'd' };
const SIGNS = {
  cdot: '*', times: '*', ast: '*', div: '/',
  le: '<=', leq: '<=', leqslant: '<=', ge: '>=', geq: '>=', geqslant: '>=', lt: '<', gt: '>'
};
const SPACES = new Set([',', ';', ':', '!', ' ', 'quad', 'qquad', 'enspace', 'thinspace']);
const WRAPPERS = new Set(['operatorname', 'mathrm', 'mathit', 'text', 'mathbf', 'mathord', 'mathop']);
const OPENERS = { '(': '(', '[': '(', '\\{': '{', '\\lbrace': '{' };
const CLOSERS = { ')': ')', ']': ')', '\\}': '}', '\\rbrace': '}' };

const isAtom = s => /^[A-Za-z0-9.]+(_[A-Za-z0-9]+)?$/.test(s);
const wrap = s => (s === '' || isAtom(s) ? s : `(${s})`);

// Reads a command name at s[i] === '\\'. Returns [name, next].
function readCommand(s, i) {
  let j = i + 1;
  if (j < s.length && /[A-Za-z]/.test(s[j])) {
    while (j < s.length && /[A-Za-z]/.test(s[j])) j++;
    return [s.slice(i + 1, j), j];
  }
  return [s[j] || '', j + 1];   // a one-character command such as \, or \{
}

// Reads { … } at s[i] === '{'. Returns [inner, next].
function readBraces(s, i) {
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '\\') { j++; continue; }
    if (s[j] === '{') depth++;
    else if (s[j] === '}') { depth--; if (depth === 0) return [s.slice(i + 1, j), j + 1]; }
  }
  return [s.slice(i + 1), s.length];   // not closed yet (still being typed)
}

// One argument: a braced group, a command, or a single character.
// Returns [raw LaTeX of the argument, next].
function readArgument(s, i) {
  while (i < s.length && s[i] === ' ') i++;
  if (i >= s.length) return ['', i];
  if (s[i] === '{') return readBraces(s, i);
  if (s[i] === '\\') { const [, j] = readCommand(s, i); return [s.slice(i, j), j]; }
  return [s[i], i + 1];
}

// From just after an opening \left<delim> to its \right: returns
// [inner LaTeX, the closing delimiter, next].
function readLeftRight(s, i) {
  let depth = 1, j = i;
  while (j < s.length) {
    if (s.startsWith('\\left', j) && !/[A-Za-z]/.test(s[j + 5] || '')) { depth++; j += 5; continue; }
    if (s.startsWith('\\right', j) && !/[A-Za-z]/.test(s[j + 6] || '')) {
      depth--;
      if (depth === 0) {
        const [delim, next] = readDelimiter(s, j + 6);
        return [s.slice(i, j), delim, next];
      }
      j += 6; continue;
    }
    j++;
  }
  return [s.slice(i), '', s.length];
}

// The delimiter after \left or \right: ( ) [ ] | . \{ \} \lfloor …
function readDelimiter(s, i) {
  while (i < s.length && s[i] === ' ') i++;
  if (s[i] === '\\') { const [name, j] = readCommand(s, i); return ['\\' + name, j]; }
  return [s[i] || '', i + 1];
}

// Up to the matching closing command (\rfloor for \lfloor, …) when no \left is used.
function readUntilCommand(s, i, open, close) {
  let depth = 1, j = i;
  while (j < s.length) {
    if (s.startsWith('\\' + open, j)) { depth++; j += open.length + 1; continue; }
    if (s.startsWith('\\' + close, j)) {
      depth--;
      if (depth === 0) return [s.slice(i, j), j + close.length + 1];
      j += close.length + 1; continue;
    }
    j++;
  }
  return [s.slice(i), s.length];
}

function convert(s) {
  let out = '';
  let i = 0;
  const n = s.length;
  // a name must not run into the letters before or after it: 2\pi x → 2 pi x
  const word = w => { out += (/[A-Za-z0-9.]$/.test(out) ? ' ' : '') + w; };
  const spaceBeforeLetter = () => {
    if (/[A-Za-z\\]/.test(s[i] || '') && !s.startsWith('\\left', i) && !s.startsWith('\\right', i)) out += ' ';
  };

  while (i < n) {
    const c = s[i];

    if (c === ' ' || c === '\n' || c === '\t' || c === '~') { out += ' '; i++; continue; }

    if (c === '{') {
      const [inner, j] = readBraces(s, i);
      out += wrap(convert(inner));
      i = j; continue;
    }
    if (c === '}') { i++; continue; }

    if (c === '^' || c === '_') {
      const [arg, j] = readArgument(s, i + 1);
      const t = convert(arg);
      if (c === '^') out += t ? `^${wrap(t)}` : '^';
      else out += `_${t.replace(/\s+/g, '')}`;
      i = j; continue;
    }

    if (c !== '\\') { out += c; i++; continue; }

    // ---------- a command ----------
    const [name, j] = readCommand(s, i);
    i = j;

    if (name === 'frac' || name === 'dfrac' || name === 'tfrac' || name === 'cfrac') {
      const [a, j1] = readArgument(s, i);
      const [b, j2] = readArgument(s, j1);
      out += `(${wrap(convert(a))}/${wrap(convert(b))})`;
      i = j2; continue;
    }

    if (name === 'sqrt') {
      let index = null;
      if (s[i] === '[') {
        const close = s.indexOf(']', i);
        if (close > 0) { index = convert(s.slice(i + 1, close)); i = close + 1; }
      }
      const [a, j1] = readArgument(s, i);
      const inner = convert(a);
      if (index === null || index === '2') out += `sqrt(${inner})`;
      else if (index === '3') out += `cbrt(${inner})`;
      else out += `(${inner})^(1/${wrap(index)})`;
      i = j1; continue;
    }

    if (name === 'left') {
      const [open, j1] = readDelimiter(s, i);
      const [inner, close, j2] = readLeftRight(s, j1);
      const t = convert(inner);
      if (open === '|' || open === '\\vert' || open === '\\lvert') out += `abs(${t})`;
      else if (open === '\\lfloor') out += `floor(${t})`;
      else if (open === '\\lceil') out += `ceil(${t})`;
      else out += (OPENERS[open] ?? '') + t + (CLOSERS[close] ?? '');
      i = j2; continue;
    }
    if (name === 'right') { const [close, j1] = readDelimiter(s, i); out += CLOSERS[close] ?? ''; i = j1; continue; }

    if (name === 'lfloor') { const [inner, j1] = readUntilCommand(s, i, 'lfloor', 'rfloor'); out += `floor(${convert(inner)})`; i = j1; continue; }
    if (name === 'lceil') { const [inner, j1] = readUntilCommand(s, i, 'lceil', 'rceil'); out += `ceil(${convert(inner)})`; i = j1; continue; }
    if (name === 'lvert') { const [inner, j1] = readUntilCommand(s, i, 'lvert', 'rvert'); out += `abs(${convert(inner)})`; i = j1; continue; }
    if (name === 'vert') { out += '|'; continue; }

    if (name === '{' || name === 'lbrace') { out += '{'; continue; }
    if (name === '}' || name === 'rbrace') { out += '}'; continue; }

    if (WRAPPERS.has(name)) {
      const [a, j1] = readArgument(s, i);
      i = j1;
      word(convert(a).trim());
      spaceBeforeLetter();
      continue;
    }

    if (FUNCTIONS.has(name)) {
      // \log_{b}\left(x\right)  →  log(x, b)
      if (name === 'log' && s[i] === '_') {
        const [b, j1] = readArgument(s, i + 1);
        let k = j1;
        while (s[k] === ' ') k++;
        let arg = null;
        if (s.startsWith('\\left(', k)) { const [inner, , j2] = readLeftRight(s, k + 6); arg = convert(inner); k = j2; }
        else if (s[k] === '(') {
          let depth = 0, m = k;
          for (; m < n; m++) { if (s[m] === '(') depth++; else if (s[m] === ')') { depth--; if (depth === 0) break; } }
          arg = convert(s.slice(k + 1, m)); k = Math.min(n, m + 1);
        }
        if (arg !== null) { word(`log(${arg}, ${convert(b)})`); i = k; continue; }
        word(`log_${convert(b)}`); i = j1; continue;
      }
      word(name);
      spaceBeforeLetter();
      continue;
    }

    if (NAMES[name]) { word(NAMES[name]); spaceBeforeLetter(); if (/[0-9]/.test(s[i] || '')) out += ' '; continue; }
    if (SIGNS[name]) { out += SIGNS[name]; continue; }
    if (SPACES.has(name)) { out += ' '; continue; }
    if (name === 'placeholder') { if (s[i] === '[') { const c2 = s.indexOf(']', i); if (c2 > 0) i = c2 + 1; } if (s[i] === '{') i = readBraces(s, i)[1]; continue; }
    if (name === 'displaystyle' || name === 'textstyle' || name === 'limits' || name === 'nolimits') continue;

    // not known: keep the name so the row says what it could not read
    word(name);
    spaceBeforeLetter();
  }
  return out;
}

// ((x)) says no more than (x): one pair of a doubled pair is dropped.
function dropDoubledBrackets(s) {
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i + 1 < s.length; i++) {
      if (s[i] !== '(' || s[i + 1] !== '(') continue;
      let depth = 0, j = i + 1;
      for (; j < s.length; j++) {
        if (s[j] === '(') depth++;
        else if (s[j] === ')') { depth--; if (depth === 0) break; }
      }
      if (j + 1 < s.length && s[j + 1] === ')') {
        s = s.slice(0, i) + s.slice(i + 1, j + 1) + s.slice(j + 2);
        changed = true;
        break;
      }
    }
  }
  return s;
}

export function texToText(tex) {
  if (typeof tex !== 'string' || !tex) return '';
  let out;
  try { out = convert(tex); } catch { out = tex; }
  out = out.replace(/\s+/g, ' ').replace(/\(\s+/g, '(').replace(/\s+\)/g, ')').trim();
  return dropDoubledBrackets(out);
}
