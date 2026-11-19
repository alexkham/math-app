// Graph Studio — shell part: the math editor
//
// A box where math is typed the way it is written: a fraction is built
// as a fraction, a power sits above the line, sqrt becomes a root sign.
// It has an on-screen math keyboard (the keyboard button inside the
// box; on a phone or tablet it opens by itself).
//
//   <MathInput value={row.text} onChange={text => …} names={names}
//              onEnter={…} autoFocus placeholder="type an expression" />
//
// `value` and what `onChange` hands back are the plain row syntax of
// the engine (x^2, sqrt(x), a sin(bx)), not LaTeX: the scene document
// stays plain text. The editor (MathLive) works in LaTeX inside; the
// engine translates both ways (rowToTex and texToText).
//
// MathLive needs the browser, so it is loaded after the page appears.
// Until then, and if it cannot load, an ordinary text box is shown and
// works the same.

import React, { useRef, useEffect, useState } from 'react';
import 'katex/dist/katex.min.css';   // MathLive draws with the same fonts
import { rowToTex, texToText } from '../../engine/index.js';

const SERIF = '"Cambria Math", Cambria, "Times New Roman", serif';

// Words that turn into a symbol while typing. A short, deliberate list:
// MathLive's own list also changes "in", "and", "to"… which here are
// just letters multiplied.
const SHORTCUTS = {
  sin: '\\sin', cos: '\\cos', tan: '\\tan', sec: '\\sec', csc: '\\csc', cot: '\\cot',
  arcsin: '\\arcsin', arccos: '\\arccos', arctan: '\\arctan',
  sinh: '\\sinh', cosh: '\\cosh', tanh: '\\tanh',
  ln: '\\ln', log: '\\log', exp: '\\exp', min: '\\min', max: '\\max',
  sqrt: '\\sqrt{#?}', cbrt: '\\sqrt[3]{#?}', abs: '\\left|#?\\right|',
  floor: '\\left\\lfloor #?\\right\\rfloor', ceil: '\\left\\lceil #?\\right\\rceil',
  sign: '\\operatorname{sign}',
  pi: '\\pi', theta: '\\theta', tau: '\\tau',
  '<=': '\\le', '>=': '\\ge', '*': '\\cdot'
};

// The on-screen keyboard: only keys the grapher can read.
const NAV_ROW = ['[left]', '[right]', { label: '[backspace]', width: 1.5 }, { label: '[return]', width: 1.5 }, '[hide-keyboard]'];
const KEYBOARD = [
  {
    label: '123',
    tooltip: 'Numbers and signs',
    rows: [
      ['x', 'y', { latex: '#@^{2}', label: 'x²' }, { latex: '#@^{#?}', label: 'xⁿ' }, '[separator]', '[7]', '[8]', '[9]', { latex: '\frac{#@}{#?}', label: '÷' }],
      ['(', ')', { latex: '\sqrt{#0}', label: '√' }, { latex: '\left|#0\right|', label: '|x|' }, '[separator]', '[4]', '[5]', '[6]', { latex: '\cdot', label: '×' }],
      ['<', '>', { latex: '\le', label: '≤' }, { latex: '\ge', label: '≥' }, '[separator]', '[1]', '[2]', '[3]', '[-]'],
      [{ latex: '\pi', label: 'π' }, 'e', '=', ',', '[separator]', '[0]', '[.]', { latex: '\sqrt[3]{#0}', label: '∛' }, '[+]'],
      NAV_ROW
    ]
  },
  {
    label: 'f(x)',
    tooltip: 'Functions and letters',
    rows: [
      [{ latex: '\sin', label: 'sin' }, { latex: '\cos', label: 'cos' }, { latex: '\tan', label: 'tan' }, '[separator]', { latex: '\theta', label: 'θ' }, 't', 'r'],
      [{ latex: '\arcsin', label: 'arcsin' }, { latex: '\arccos', label: 'arccos' }, { latex: '\arctan', label: 'arctan' }, '[separator]', 'a', 'b', 'c'],
      [{ latex: '\ln', label: 'ln' }, { latex: '\log', label: 'log' }, { latex: 'e^{#?}', label: 'eˣ' }, '[separator]', 'k', 'm', 'n'],
      [{ latex: '\left\lfloor #0\right\rfloor', label: '⌊x⌋' }, { latex: '\left\lceil #0\right\rceil', label: '⌈x⌉' }, { latex: '\operatorname{sign}', label: 'sign' }, '[separator]', 'f', { latex: '\{', label: '{' }, { latex: '\}', label: '}' }],
      NAV_ROW
    ]
  },
  'alphabetic'
];

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected || typeof document === 'undefined') return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    math-field.gs-math-input { display: block; width: 100%; border: none; outline: none; background: transparent; }
    math-field.gs-math-input:focus, math-field.gs-math-input:focus-within { outline: none; }
    math-field.gs-math-input::part(menu-toggle) { display: none; }
    math-field.gs-math-input::part(container) { padding: 0; }
    math-field.gs-math-input::part(virtual-keyboard-toggle) { opacity: 0.55; margin-right: 0; }
    math-field.gs-math-input:not(:focus-within)::part(virtual-keyboard-toggle) { display: none; }
  `;
  document.head.appendChild(style);
}

let mathlivePromise = null;
function loadMathLive() {
  if (!mathlivePromise) {
    mathlivePromise = import('mathlive').then(mod => {
      const M = mod.MathfieldElement;
      // The fonts are KaTeX's, already on the page; there are no sound files to fetch.
      try { M.fontsDirectory = null; } catch { /* older versions */ }
      try { M.soundsDirectory = null; } catch { /* older versions */ }
      return M;
    });
  }
  return mathlivePromise;
}

// What the field should show for a row text.
function toFieldValue(text, names) {
  if (!text) return '';
  const tex = rowToTex(text, names);
  return tex === null ? text : tex;
}

export default function MathInput(props) {
  const {
    value = '', onChange, names, onEnter, onEscape, onFocus, onBlur,
    autoFocus = false, readOnly = false, placeholder = '', ariaLabel,
    fontSize = 16, color = '#0f172a', accent = '#2d70b3', style
  } = props;

  const holderRef = useRef(null);
  const fieldRef = useRef(null);
  const lastText = useRef(null);       // the text the field currently stands for
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  // the newest handlers, without re-creating the field
  const live = useRef({});
  live.current = { onChange, onEnter, onEscape, onFocus, onBlur, names, value };

  useEffect(() => {
    let cancelled = false;
    let field = null;
    injectStyles();
    loadMathLive().then(MathfieldElement => {
      if (cancelled || !holderRef.current) return;
      field = new MathfieldElement();
      field.className = 'gs-math-input';
      field.smartFence = true;
      field.smartMode = false;
      field.popoverPolicy = 'off';
      field.mathVirtualKeyboardPolicy = 'auto';
      field.removeExtraneousParentheses = false;
      field.scriptDepth = 3;

      const first = live.current.value || '';
      field.setValue(toFieldValue(first, live.current.names), { silenceNotifications: true });
      lastText.current = first;

      field.addEventListener('input', () => {
        const text = texToText(field.getValue('latex'));
        lastText.current = text;
        if (live.current.onChange) live.current.onChange(text);
      });
      field.addEventListener('keydown', ev => {
        if (ev.key === 'Enter' && live.current.onEnter) { ev.preventDefault(); live.current.onEnter(); }
        else if (ev.key === 'Escape' && live.current.onEscape) { live.current.onEscape(); }
      }, { capture: true });
      field.addEventListener('focusin', () => {
        // inside a full-screen shell the keyboard has to live there too
        try {
          const kb = window.mathVirtualKeyboard;
          if (kb) {
            kb.container = document.fullscreenElement || document.body;
            if (kb.__gsLayouts !== KEYBOARD) { kb.layouts = KEYBOARD; kb.__gsLayouts = KEYBOARD; }
          }
        } catch { /* keyboard not available */ }
        if (live.current.onFocus) live.current.onFocus();
      });
      // leaving the box for good, not moving between its inner parts or to its keyboard
      field.addEventListener('focusout', () => {
        setTimeout(() => {
          if (document.activeElement === field) return;
          if (live.current.onBlur) live.current.onBlur();
        }, 0);
      });

      holderRef.current.appendChild(field);
      // this one can only be set once the field is on the page
      try { field.inlineShortcuts = SHORTCUTS; } catch { /* keeps MathLive's own list */ }
      fieldRef.current = field;
      setReady(true);
    }).catch(() => { if (!cancelled) setFailed(true); });

    return () => {
      cancelled = true;
      if (field && field.parentElement) field.parentElement.removeChild(field);
      fieldRef.current = null;
    };
  }, []);

  // things that can change after the field exists
  useEffect(() => {
    const f = fieldRef.current;
    if (!f) return;
    f.readOnly = !!readOnly;
    f.placeholder = placeholder ? `\\text{${placeholder}}` : '';
    if (ariaLabel) f.setAttribute('aria-label', ariaLabel);
    f.style.fontSize = `${fontSize}px`;
    f.style.color = color;
    f.style.setProperty('--caret-color', accent);
    f.style.setProperty('--selection-background-color', 'rgba(45, 112, 179, 0.22)');
    f.style.setProperty('--contains-highlight-background-color', 'transparent');
    f.style.setProperty('--placeholder-color', '#94a3b8');
  }, [ready, readOnly, placeholder, ariaLabel, fontSize, color, accent]);

  // a value that arrives from outside (undo, a slider, another scene)
  useEffect(() => {
    const f = fieldRef.current;
    if (!f || value === lastText.current) return;
    f.setValue(toFieldValue(value, names), { silenceNotifications: true });
    lastText.current = value;
  }, [ready, value, names]);

  useEffect(() => {
    if (ready && autoFocus && fieldRef.current) {
      const f = fieldRef.current;
      // focus once the element has taken its place
      const t = setTimeout(() => { try { f.focus(); f.executeCommand('moveToMathfieldEnd'); } catch { /* gone */ } }, 0);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [ready, autoFocus]);

  const showText = !ready || failed;
  return (
    <div ref={holderRef} style={{ flex: 1, minWidth: 0, ...(style || {}) }}>
      {showText && (
        <input
          type="text" value={value} readOnly={readOnly} spellCheck={false} autoComplete="off" autoCapitalize="off"
          aria-label={ariaLabel} placeholder={placeholder}
          autoFocus={failed && autoFocus}
          onChange={ev => onChange && onChange(ev.target.value)}
          onFocus={onFocus} onBlur={failed ? onBlur : undefined}
          onKeyDown={ev => { if (ev.key === 'Enter' && onEnter) { ev.preventDefault(); onEnter(); } else if (ev.key === 'Escape' && onEscape) onEscape(); }}
          style={{ width: '100%', boxSizing: 'border-box', border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent', fontSize: Math.max(13, fontSize - 1), fontFamily: SERIF, color, padding: '4px 0', margin: 0 }}
        />
      )}
    </div>
  );
}
