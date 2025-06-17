export const latexMathKeyboardLayout = [
    [
      { display: '<span style="font-style: italic;">x</span>', type: 'key', action: 'insert', value: 'x' },
      { display: '<span style="font-style: italic;">y</span>', type: 'key', action: 'insert', value: 'y' },
      { display: '<span style="font-style: italic;">a</span><sup>2</sup>', type: 'key', action: 'insert', value: '^2' },
      { display: '<span style="font-style: italic;">a</span><sup><span style="font-style: italic;">b</span></sup>', type: 'key', action: 'insert', value: '^' },
      { display: '7', type: 'number', action: 'insert', value: '7' },
      { display: '8', type: 'number', action: 'insert', value: '8' },
      { display: '9', type: 'number', action: 'insert', value: '9' },
      { display: '÷', type: 'operator', action: 'insert', value: '\\div' },
      { display: 'functions', type: 'functions', action: 'functions' }
    ],
    [
      { display: '(', type: 'key', action: 'insert', value: '(' },
      { display: ')', type: 'key', action: 'insert', value: ')' },
      { display: '&lt;', type: 'key', action: 'insert', value: '<' },
      { display: '&gt;', type: 'key', action: 'insert', value: '>' },
      { display: '4', type: 'number', action: 'insert', value: '4' },
      { display: '5', type: 'number', action: 'insert', value: '5' },
      { display: '6', type: 'number', action: 'insert', value: '6' },
      { display: '×', type: 'operator', action: 'insert', value: '\\times' },
      { display: '←', type: 'nav', action: 'navigate', value: '-1' },
      { display: '→', type: 'nav', action: 'navigate', value: '1' }
    ],
    [
      { display: '|<span style="font-style: italic;">a</span>|', type: 'key', action: 'function', value: '\\left|' },
      { display: ';', type: 'key', action: 'insert', value: ';' },
      { display: '≤', type: 'key', action: 'insert', value: '\\leq' },
      { display: '≥', type: 'key', action: 'insert', value: '\\geq' },
      { display: '1', type: 'number', action: 'insert', value: '1' },
      { display: '2', type: 'number', action: 'insert', value: '2' },
      { display: '3', type: 'number', action: 'insert', value: '3' },
      { display: '−', type: 'operator', action: 'insert', value: '-' },
      { display: '⌫', type: 'clear', action: 'backspace' }
    ],
    [
      { display: 'ABC', type: 'key', action: 'toggleCase' },
      { display: '🔊', type: 'key', action: 'sound' },
      { display: '√', type: 'key', action: 'function', value: '\\sqrt{' },
      { display: 'π', type: 'key', action: 'insert', value: '\\pi' },
      { display: '0', type: 'number', action: 'insert', value: '0' },
      { display: '.', type: 'number', action: 'insert', value: '.' },
      { display: '=', type: 'number', action: 'insert', value: '=' },
      { display: '+', type: 'operator', action: 'insert', value: '+' },
      { display: '⏎', type: 'action', action: 'calculate' }
    ]
  ];