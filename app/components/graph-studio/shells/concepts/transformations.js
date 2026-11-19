// Graph Studio — concept tool data: Function transformations
//
// g(x) = a · f(b(x − h)) + k, one slider at a time or all four together,
// on ten parent functions. The teaching text is that of the earlier
// Transformations tool (app/components/functions/transformations).
//
// This file is data for <ConceptShell concept={transformations} />.
// In the texts: $…$ is math, **…** is bold, a line starting with "- " is
// a list item, and {{…}} is a value worked out from the sliders.

const transformations = {
  id: 'function-transformations',
  title: 'Function transformations',

  scene: {
    expressions: [
      { id: 'a', text: 'a = 1', slider: { min: -3, max: 3, step: 0.05 }, lock: 'hidden-row' },
      { id: 'k', text: 'k = 0', slider: { min: -6, max: 6, step: 0.1 }, lock: 'hidden-row' },
      { id: 'b', text: 'b = 1', slider: { min: -3, max: 3, step: 0.05 }, lock: 'hidden-row' },
      { id: 'h', text: 'h = 0', slider: { min: -6, max: 6, step: 0.1 }, lock: 'hidden-row' },
      { id: 'f', text: 'f(x) = x^2', color: '#64748b', width: 1.5, dashed: true, lock: 'readonly' },
      { id: 'g', text: 'g(x) = a f(b (x - h)) + k', color: '#2563EB', width: 2.5, lock: 'readonly' }
    ],
    view: { cx: 0, cy: 0, ux: 0.03, uy: 0.03 }
  },

  // what the legend says for each drawn row
  legend: [
    { row: 'f', tex: null },                                   // null: the row as typed
    { row: 'g', tex: 'g(x) = a \\cdot f\\big(b(x - h)\\big) + k' }
  ],

  sliders: {
    a: { label: 'vertical scale', default: 1, seconds: 6 },
    k: { label: 'vertical shift', default: 0, seconds: 6 },
    b: { label: 'horizontal scale', default: 1, seconds: 6 },
    h: { label: 'horizontal shift', default: 0, seconds: 6 }
  },

  sections: [
    {
      id: 'a', label: 'V. scale', title: 'Vertical scale', formula: 'g(x) = a \\cdot f(x)', sliders: ['a'],
      hint: 'Multiplies the output by a: stretches, compresses or flips the curve vertically.',
      general: [
        'Multiplies every output by **$a$**.',
        '- $|a| > 1$ — stretches vertically',
        '- $0 < |a| < 1$ — compresses vertically',
        '- $a < 0$ — reflects across the x-axis',
        '- $a = 0$ — collapses to $y = 0$'
      ]
    },
    {
      id: 'k', label: 'V. shift', title: 'Vertical shift', formula: 'g(x) = f(x) + k', sliders: ['k'],
      hint: 'Adds k to the output: slides the whole curve up or down.',
      general: [
        'Adds a constant **$k$** to every output.',
        '- $k > 0$ — slides up',
        '- $k < 0$ — slides down',
        'The shape is unchanged.'
      ]
    },
    {
      id: 'b', label: 'H. scale', title: 'Horizontal scale', formula: 'g(x) = f(b \\cdot x)', sliders: ['b'],
      hint: 'Scales the input: squeezes, stretches or flips horizontally (the opposite of vertical scale).',
      general: [
        'Scales the input. Squeezes when $|b| > 1$, stretches when $|b| < 1$.',
        '- $|b| > 1$ — squeezes horizontally',
        '- $0 < |b| < 1$ — stretches horizontally',
        '- $b < 0$ — reflects across the y-axis'
      ]
    },
    {
      id: 'h', label: 'H. shift', title: 'Horizontal shift', formula: 'g(x) = f(x - h)', sliders: ['h'],
      hint: 'Subtracts h from the input: slides the curve left or right.',
      general: [
        'Slides along the x-axis.',
        '- $h > 0$ — moves **right** (note the minus sign)',
        '- $h < 0$ — moves left'
      ]
    },
    {
      id: 'custom', label: 'Custom', title: 'Custom', formula: 'g(x) = a \\cdot f\\big(b(x - h)\\big) + k', sliders: ['a', 'k', 'b', 'h'],
      hint: 'All four transformations combined.',
      general: []
    }
  ],

  // said when a slider is where it started
  idleText: 'Currently at the default value — move the slider to see how it affects **{choice}**.',
  idleTextAll: 'No transformations applied yet — adjust any slider to see effects on **{choice}**.',

  toggles: [
    { id: 'base', label: 'Original function f', rows: ['f'], on: true },
    { id: 'marks', label: 'Key points and lines', marks: true, on: true }
  ],

  choiceLabel: 'Parent function',
  choices: [
    {
      id: 'linear', label: 'Linear', rows: { f: 'f(x) = x' },
      notes: {
        a: [
          { when: 'a == 1' },
          { when: 'a == 0', text: '**$a = 0$** flattens the line to the x-axis.' },
          { when: 'a < 0', text: '**$a = {{a}}$** flips the line across the x-axis; slope becomes ${{a}}$.' },
          { text: 'Slope becomes ${{a}}$: the line rises by ${{a}}$ per unit of $x$.' }
        ],
        k: [{ when: 'k == 0' }, { when: 'k > 0', text: 'Slides the line vertically by **{{k}}** — same slope, shifted up.' }, { text: 'Slides the line vertically by **{{k}}** — same slope, shifted down.' }],
        b: [{ when: 'b == 1' }, { text: 'For a line, **$b$** just rescales the slope: equivalent to slope ${{b}}$.' }],
        h: [{ when: 'h == 0' }, { when: 'h > 0', text: 'Shifts the line right by **{{abs(h)}}** — indistinguishable from a vertical shift.' }, { text: 'Shifts the line left by **{{abs(h)}}** — indistinguishable from a vertical shift.' }]
      }
    },
    {
      id: 'quadratic', label: 'Quadratic', rows: { f: 'f(x) = x^2' },
      notes: {
        a: [
          { when: 'a == 1' },
          { when: 'a == 0', text: '**$a = 0$** collapses the parabola to the x-axis.' },
          { when: 'a < 0', text: '**$a = {{a}}$** flips the parabola to open **downward**.' },
          { when: 'a > 1', text: '**$a = {{a}}$** makes the parabola **narrower** — rises {{a}}× as fast.' },
          { text: '**$a = {{a}}$** makes the parabola **wider** — rises only {{a}}× as fast.' }
        ],
        k: [{ when: 'k == 0' }, { text: 'Moves the **vertex** from $(0, 0)$ to $(0, {{k}})$.' }],
        b: [
          { when: 'b == 1' },
          { when: 'b == 0', text: '**$b = 0$** makes the input zero — the curve collapses to $f(0) = 0$.' },
          { text: '**$b = {{b}}$** squeezes horizontally by {{abs(b)}}×.' }
        ],
        h: [{ when: 'h == 0' }, { text: 'Moves the **vertex** from $(0, 0)$ to $({{h}}, 0)$.' }]
      },
      marks: [{ type: 'point', x: 'h', y: 'k', label: 'vertex', when: 'a != 0 and b != 0' }]
    },
    {
      id: 'cubic', label: 'Cubic', rows: { f: 'f(x) = x^3' },
      notes: {
        a: [{ when: 'a == 1' }, { when: 'a < 0', text: '**$a = {{a}}$** flips the cubic — falls from upper-left to lower-right.' }, { text: '**$a = {{a}}$** stretches the cubic vertically by {{a}}×.' }],
        k: [{ when: 'k == 0' }, { text: 'Inflection point moves to $(0, {{k}})$.' }],
        b: [{ when: 'b == 1' }, { when: 'b < 0', text: '**$b = {{b}}$** flips horizontally.' }, { text: '**$b = {{b}}$** compresses horizontally by {{b}}×.' }],
        h: [{ when: 'h == 0' }, { text: 'Inflection point moves to $({{h}}, 0)$.' }]
      },
      marks: [{ type: 'point', x: 'h', y: 'k', label: 'inflection point', when: 'a != 0 and b != 0' }]
    },
    {
      id: 'reciprocal', label: 'Reciprocal', rows: { f: 'f(x) = 1/x' },
      notes: {
        a: [{ when: 'a == 1' }, { when: 'a < 0', text: '**$a = {{a}}$** flips the branches across the x-axis.' }, { text: 'Scales both branches vertically by {{a}}×.' }],
        k: [{ when: 'k == 0' }, { text: 'Horizontal asymptote moves from $y = 0$ to $y = {{k}}$.' }],
        b: [{ when: 'b == 1' }, { text: '**$b = {{b}}$** tightens the curve around $x = 0$.' }],
        h: [{ when: 'h == 0' }, { text: 'Vertical asymptote moves from $x = 0$ to $x = {{h}}$.' }]
      },
      marks: [{ type: 'vline', x: 'h', dashed: true }, { type: 'hline', y: 'k', dashed: true }]
    },
    {
      id: 'exponential', label: 'Exponential', rows: { f: 'f(x) = e^x' },
      notes: {
        a: [{ when: 'a == 1' }, { when: 'a < 0', text: '**$a = {{a}}$** flips below the x-axis.' }, { text: 'Scales vertically by {{a}}×. The y-intercept moves from 1 to ${{a}}$.' }],
        k: [{ when: 'k == 0' }, { text: 'Horizontal asymptote moves from $y = 0$ to $y = {{k}}$.' }],
        b: [
          { when: 'b == 1' },
          { when: 'b < 0', text: '**$b = {{b}}$** flips horizontally — exponential **decay** instead of growth.' },
          { when: 'b > 1', text: '**$b = {{b}}$** makes growth **steeper** — climbs {{b}}× faster.' },
          { text: '**$b = {{b}}$** slows growth — stretched horizontally.' }
        ],
        h: [{ when: 'h == 0' }, { when: 'h > 0', text: 'Shifts right by {{abs(h)}}.' }, { text: 'Shifts left by {{abs(h)}}.' }]
      },
      marks: [{ type: 'hline', y: 'k', dashed: true }]
    },
    {
      id: 'logarithmic', label: 'Logarithmic', rows: { f: 'f(x) = ln(x)' },
      notes: {
        a: [{ when: 'a == 1' }, { when: 'a < 0', text: '**$a = {{a}}$** flips the curve — it now falls toward the asymptote.' }, { text: 'Scales vertically by {{a}}×; still crosses $y = 0$ at $x = 1$.' }],
        k: [{ when: 'k == 0' }, { text: 'Lifts the curve by {{k}}.' }],
        b: [{ when: 'b == 1' }, { text: '**$b = {{b}}$** rescales horizontally. Note: $\\ln(bx) = \\ln(b) + \\ln(x)$.' }],
        h: [{ when: 'h == 0' }, { text: 'Vertical asymptote moves from $x = 0$ to $x = {{h}}$; domain: $x > {{h}}$.' }]
      },
      marks: [{ type: 'vline', x: 'h', dashed: true }]
    },
    {
      id: 'sine', label: 'Sine', group: 'Trigonometric', rows: { f: 'f(x) = sin(x)' },
      notes: {
        a: [
          { when: 'a == 1' },
          { when: 'a < 0', text: '**Amplitude = {{abs(a)}}** (flipped). Oscillates between ${{-abs(a)}}$ and ${{abs(a)}}$.' },
          { text: '**Amplitude = {{abs(a)}}**. Oscillates between ${{-abs(a)}}$ and ${{abs(a)}}$.' }
        ],
        k: [{ when: 'k == 0' }, { text: 'Midline moves from $y = 0$ to $y = {{k}}$.' }],
        b: [
          { when: 'b == 1' },
          { when: 'b == 0', text: '**$b = 0$** makes the input zero — the wave collapses to a level line.' },
          { when: 'b < 0', text: '**Period** $= \\dfrac{2\\pi}{{{abs(b)}}} \\approx {{2 pi / abs(b)}}$ (mirrored).' },
          { text: '**Period** $= \\dfrac{2\\pi}{{{abs(b)}}} \\approx {{2 pi / abs(b)}}$.' }
        ],
        h: [{ when: 'h == 0' }, { text: 'Phase shift of **{{h}}** — $\\sin(0)$ now happens at $x = {{h}}$.' }]
      },
      marks: [{ type: 'hline', y: 'k', dashed: true }]
    },
    {
      id: 'cosine', label: 'Cosine', group: 'Trigonometric', rows: { f: 'f(x) = cos(x)' },
      notes: {
        a: [{ when: 'a == 1' }, { when: 'a < 0', text: '**Amplitude = {{abs(a)}}** (flipped).' }, { text: '**Amplitude = {{abs(a)}}**.' }],
        k: [{ when: 'k == 0' }, { text: 'Midline moves to $y = {{k}}$; peak at $y = {{k + 1}}$.' }],
        b: [
          { when: 'b == 1' },
          { when: 'b == 0', text: '**$b = 0$** makes the input zero — the wave collapses to a level line.' },
          { when: 'b < 0', text: '**Period** $= \\dfrac{2\\pi}{{{abs(b)}}} \\approx {{2 pi / abs(b)}}$; cosine is even, so the flip is invisible.' },
          { text: '**Period** $= \\dfrac{2\\pi}{{{abs(b)}}} \\approx {{2 pi / abs(b)}}$.' }
        ],
        h: [{ when: 'h == 0' }, { text: 'Peak moves from $x = 0$ to $x = {{h}}$.' }]
      },
      marks: [{ type: 'hline', y: 'k', dashed: true }]
    },
    {
      id: 'absolute', label: 'Absolute value', rows: { f: 'f(x) = abs(x)' },
      notes: {
        a: [{ when: 'a == 1' }, { when: 'a < 0', text: '**$a = {{a}}$** flips the V to open downward.' }, { text: 'Slope of each side: $\\pm {{a}}$.' }],
        k: [{ when: 'k == 0' }, { text: 'Vertex moves to $(0, {{k}})$.' }],
        b: [{ when: 'b == 1' }, { when: 'b < 0', text: '**$b = {{b}}$** sharpens horizontally (even, so the flip is invisible).' }, { text: '**$b = {{b}}$** sharpens horizontally.' }],
        h: [{ when: 'h == 0' }, { text: 'Vertex moves to $({{h}}, 0)$.' }]
      },
      marks: [{ type: 'point', x: 'h', y: 'k', label: 'vertex', when: 'a != 0 and b != 0' }]
    },
    {
      id: 'sqrt', label: 'Square root', rows: { f: 'f(x) = sqrt(x)' },
      notes: {
        a: [{ when: 'a == 1' }, { when: 'a < 0', text: '**$a = {{a}}$** flips the curve below the x-axis.' }, { text: 'Scales vertically by {{a}}×.' }],
        k: [{ when: 'k == 0' }, { text: 'Starting point moves to $(0, {{k}})$.' }],
        b: [{ when: 'b == 1' }, { when: 'b < 0', text: 'Domain flips to $x \\le 0$.' }, { text: 'Domain compresses by {{b}}×.' }],
        h: [{ when: 'h == 0' }, { text: 'Domain shifts to $x \\ge {{h}}$; starting point: $({{h}}, 0)$.' }]
      },
      marks: [{ type: 'point', x: 'h', y: 'k', label: 'starting point', when: 'b != 0' }]
    }
  ],
  startChoice: 'quadratic'
};

export default transformations;
