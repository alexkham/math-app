// Graph Studio — concept tool data: Riemann sums
//
// The area under f between a and b, estimated with n strips by four
// rules: left, right, midpoint, trapezoid. The teaching text is that of
// the earlier Riemann tool (app/components/functions/riemann).
//
// This file is data for <ConceptShell concept={riemann} />.
// In the texts: $…$ is math, **…** is bold, a line starting with "- " is
// a list item, "### " a small heading, and {{…}} is a value worked out
// from the sliders ({{S | 4}} with four decimals).
//
// One strip, number j (from 0), runs from a + j·dx to a + (j + 1)·dx.
// Its left height is f at a + (j + p)·dx and its right height is f at
// a + (j + q)·dx; the four rules differ only in p and q:
//   left p = q = 0, right p = q = 1, midpoint p = q = ½, trapezoid p = 0, q = 1.

const STRIP = '(f(a + (j + p) dx) + f(a + (j + q) dx)) / 2 * dx';

// the three sentences about the result, for the endpoint rules and for the other two
const verdicts = lead => [
  { when: 'abs(err) < 0.0001', text: `${lead} **is essentially exact**: it differs from the true integral by less than $0.0001$.` },
  { when: 'err >= 0.0001', text: `${lead} **overshoots** the true integral by ${'$'}{{abs(err) | 4}}$.` },
  { when: 'err <= -0.0001', text: `${lead} **undershoots** the true integral by ${'$'}{{abs(err) | 4}}$.` }
];
const ENDPOINT = 'Endpoint rules sit entirely above or below the curve when the function is monotonic on a strip. On the current interval the sum';
const BALANCED = 'Midpoint and trapezoid sample the curve more representatively, so over- and under-shoots within each strip mostly cancel. With the current setup the sum';

const SETUP = {
  text: 'Integrating from ${{a}}$ to ${{b}}$ with $n = {{n | 0}}$ strips, so $\\Delta x = {{dx | 4}}$.\n' +
    '- $S_n = {{S | 4}}$\n' +
    '- True integral $= {{I | 4}}$\n' +
    '- Error $= S_n - I = {{err | 4}}$'
};

const rule = ({ id, label, where, formula, p, q, lead, order, doubling }) => ({
  id, label, title: `${label} Riemann sum`, formula, sliders: ['a', 'b', 'n'], constants: { p, q },
  hint: `Height of each strip: ${where}.`,
  general: [
    `The interval $[a, b]$ is split into $n$ equal strips of width $\\Delta x = (b - a)/n$. For each strip, the height comes from sampling $f$ at the **${where}**.`
  ],
  notes: [
    SETUP,
    { text: '### Why the sum lands where it does' },
    ...verdicts(lead),
    { text: '### Convergence order' },
    { text: `For smooth functions the ${label.toLowerCase()} rule converges as $${order}$. Push the $n$ slider higher and watch the error shrink — ${doubling}.` }
  ]
});

const riemann = {
  id: 'riemann-sums',
  title: 'Riemann sums',

  scene: {
    expressions: [
      { id: 'a', text: 'a = 0', slider: { min: -8, max: 8, step: 0.1 }, lock: 'hidden-row' },
      { id: 'b', text: 'b = 3', slider: { min: -8, max: 8, step: 0.1 }, lock: 'hidden-row' },
      { id: 'n', text: 'n = 8', slider: { min: 1, max: 80, step: 1 }, lock: 'hidden-row' },
      { id: 'f', text: 'f(x) = x^2', color: '#2563EB', width: 2.5, lock: 'readonly' }
    ],
    view: { cx: 1, cy: 3, ux: 0.02, uy: 0.02 }
  },
  legend: [{ row: 'f', tex: null }],

  sliders: {
    a: { label: 'lower bound', default: 0, seconds: 8 },
    b: { label: 'upper bound', default: 3, seconds: 8 },
    n: { label: 'number of strips', default: 8, seconds: 10 }
  },

  derived: [
    { name: 'dx', value: '(b - a) / n' },
    { name: 'S', sum: STRIP, index: 'j', count: 'n' },
    { name: 'I', integral: 'f', from: 'a', to: 'b' },
    { name: 'err', value: 'S - I' }
  ],
  readouts: [
    { tex: 'S_n', value: 'S', decimals: 4 },
    { tex: '\\int_a^b f', value: 'I', decimals: 4 },
    { tex: '\\text{error}', value: 'err', decimals: 4 }
  ],

  sections: [
    rule({ id: 'left', label: 'Left', where: 'left endpoint of each strip', p: 0, q: 0, lead: ENDPOINT, order: 'O(1/n)', doubling: 'doubling $n$ roughly halves the error',
      formula: 'S_n = \\Delta x \\sum_{i=0}^{n-1} f(a + i\\,\\Delta x)' }),
    rule({ id: 'right', label: 'Right', where: 'right endpoint of each strip', p: 1, q: 1, lead: ENDPOINT, order: 'O(1/n)', doubling: 'doubling $n$ roughly halves the error',
      formula: 'S_n = \\Delta x \\sum_{i=1}^{n} f(a + i\\,\\Delta x)' }),
    rule({ id: 'mid', label: 'Midpoint', where: 'midpoint of each strip', p: 0.5, q: 0.5, lead: BALANCED, order: 'O(1/n^2)', doubling: 'doubling $n$ shrinks the error by about a factor of four',
      formula: 'S_n = \\Delta x \\sum_{i=0}^{n-1} f\\big(a + (i + \\tfrac12)\\,\\Delta x\\big)' }),
    rule({ id: 'trap', label: 'Trapezoid', where: 'average of both endpoints', p: 0, q: 1, lead: BALANCED, order: 'O(1/n^2)', doubling: 'doubling $n$ shrinks the error by about a factor of four',
      formula: 'S_n = \\frac{\\Delta x}{2}\\Big[f(a) + 2\\sum_{i=1}^{n-1} f(a + i\\,\\Delta x) + f(b)\\Big]' })
  ],
  appliedHeading: 'For the current setup',

  marks: [
    {
      type: 'polygon', repeat: { index: 'j', count: 'n' }, color: '#B45309', opacity: 0.18, stroke: '#B45309',
      points: [
        { x: 'a + j dx', y: 0 },
        { x: 'a + j dx', y: 'f(a + (j + p) dx)' },
        { x: 'a + (j + 1) dx', y: 'f(a + (j + q) dx)' },
        { x: 'a + (j + 1) dx', y: 0 }
      ]
    },
    { type: 'vline', x: 'a', dashed: true, color: '#94a3b8', width: 1 },
    { type: 'vline', x: 'b', dashed: true, color: '#94a3b8', width: 1 }
  ],
  toggles: [{ id: 'strips', label: 'Strips and bounds', marks: true, on: true }],

  about: {
    label: 'Concepts',
    lines: [
      '### What is a Riemann sum?',
      'A **Riemann sum** estimates the area under a curve using simple shapes. Take the interval $[a, b]$, chop it into $n$ equal strips of width $\\Delta x = (b-a)/n$, and on each strip build a shape whose height is taken from the function. Sum the areas.',
      'As $n \\to \\infty$ the sum converges to the exact integral $\\int_a^b f(x)\\,dx$. The four classical rules differ in where on each strip the height is sampled.',
      '### The four rules',
      '- **Left** — sample at the left edge of each strip. On an increasing function every rectangle sits below the curve, so the sum undershoots. On a decreasing function it overshoots.',
      '- **Right** — sample at the right edge. The mirror image: overshoots on increasing, undershoots on decreasing.',
      '- **Midpoint** — sample at the center. The rectangle\'s flat top punches above the curve on one half of the strip and below on the other, so errors mostly cancel.',
      '- **Trapezoid** — connect the left and right endpoint heights with a straight line. Also has errors that mostly cancel, and tends to err the opposite way of midpoint.',
      '### Convergence order',
      'Not all rules converge equally fast. For smooth functions:',
      '- **Left and right**: error shrinks like $1/n$. Doubling $n$ halves the error.',
      '- **Midpoint and trapezoid**: error shrinks like $1/n^2$. Doubling $n$ shrinks the error by a factor of four.',
      'So a midpoint sum with $n = 20$ is typically more accurate than a left sum with $n = 200$. The picture on screen shows it directly — push the $n$ slider with each rule selected and watch how fast the error shrinks.',
      '### Signed areas',
      'When the curve dips below the x-axis, the strip heights become negative and the corresponding rectangles count as negative area. That matches the standard convention: $\\int_a^b f(x)\\,dx$ subtracts area below the axis. If you slide $b$ below $a$, $\\Delta x$ goes negative and the whole sum flips sign — also standard.',
      '### When there is no closed-form integral',
      'Some functions (the Gaussian bump $e^{-x^2/2}$, $\\sin(x)/x$, many others) have no elementary antiderivative. In those cases the "true" value comes from a very fine numerical method. That is exactly how numerical libraries do real-world integration: pick a high-order rule, crank $n$ up until further refinement stops changing the answer.'
    ]
  },

  choiceLabel: 'Function',
  choices: [
    { id: 'identity', label: 'Identity', group: 'Polynomial', rows: { f: 'f(x) = x' }, view: { cx: 1, cy: 1.5, ux: 0.02, uy: 0.02 } },
    { id: 'quadratic', label: 'Quadratic', group: 'Polynomial', rows: { f: 'f(x) = x^2' }, view: { cx: 1, cy: 3, ux: 0.02, uy: 0.02 } },
    { id: 'cubic', label: 'Cubic', group: 'Polynomial', rows: { f: 'f(x) = x^3' }, view: { cx: 1, cy: 8, ux: 0.02, uy: 0.06 } },
    { id: 'sine', label: 'Sine', group: 'Transcendental', rows: { f: 'f(x) = sin(x)' }, view: { cx: 1.5, cy: 0, ux: 0.02, uy: 0.008 } },
    { id: 'cosine', label: 'Cosine', group: 'Transcendental', rows: { f: 'f(x) = cos(x)' }, view: { cx: 1.5, cy: 0, ux: 0.02, uy: 0.008 } },
    { id: 'exponential', label: 'Exponential', group: 'Transcendental', rows: { f: 'f(x) = e^x' }, view: { cx: 1, cy: 8, ux: 0.02, uy: 0.06 } },
    { id: 'bump', label: 'Gaussian bump', group: 'Numerical only', rows: { f: 'f(x) = e^(-x^2/2)' }, view: { cx: 1, cy: 0.4, ux: 0.02, uy: 0.005 } },
    { id: 'sinc', label: 'Sinc (sin x / x)', group: 'Numerical only', rows: { f: 'f(x) = sin(x)/x' }, view: { cx: 1.5, cy: 0.3, ux: 0.02, uy: 0.006 } }
  ],
  startChoice: 'quadratic'
};

export default riemann;
