// derivativesTechniques.mock.js
// Mock data for CalculationsExplorer (works with both variants).
// Items without `href` are atomic cards; items with `href` or `planned` are link cards.

const derivativesTechniquesMock = {
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ─── I. Atomic ────────────────────────────────────────────
    {
      id: 'power-rule',
      name: 'How to differentiate a power of x',
      subtitle: 'Power rule',
      glyph: 'xⁿ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: 'polynomial',
      defaultExpanded: true,
      when: 'A single term $x^n$ with a constant exponent, including roots and reciprocals once rewritten, like $\\sqrt{x} = x^{1/2}$.',
      formula: '\\frac{d}{dx}\\,x^n = n\\,x^{n-1}',
      fields: {
        steps: [
          '1. Rewrite the term as $x^n$.',
          '2. Bring the exponent down and lower it by one.',
        ],
        worked_example: '$$\\frac{d}{dx}\\frac{1}{x^3} = \\frac{d}{dx}x^{-3} = -3x^{-4}$$',
      },
      links: [
        { url: '/calculus/derivatives/rules#power-rule', label: 'Power rule' },
        { url: '/calculus/derivatives', label: 'Lesson' },
        { url: '/calculus/calculators/derivative', label: 'Derivative calculator' },
      ],
    },
    {
      id: 'chain-rule-once',
      name: 'How to differentiate f(g(x)) once',
      subtitle: 'Chain rule',
      glyph: '∘',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: ['polynomial', 'trig', 'explog'],
      when: 'One function applied to a simple inner expression, like $\\sin(3x)$.',
      formula: "(f\\circ g)'(x) = f'(g(x))\\,g'(x)",
      fields: {
        steps: ['1. Differentiate the outer function, inside unchanged.', '2. Multiply by the derivative of the inside.'],
        worked_example: "$(\\sin 3x)' = 3\\cos 3x$",
      },
    },
    {
      id: 'product-rule',
      name: 'How to differentiate a product',
      subtitle: 'Product rule',
      glyph: '·',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: ['polynomial', 'trig', 'explog'],
      formula: "(uv)' = u'v + uv'",
      fields: { worked_example: "$(x^2 e^x)' = 2x e^x + x^2 e^x$" },
    },
    {
      id: 'quotient-rule',
      name: 'How to differentiate a quotient',
      subtitle: 'Quotient rule',
      glyph: '÷',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: ['polynomial', 'trig', 'explog'],
      formula: "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
    },

    // ─── II. Composite ────────────────────────────────────────
    {
      id: 'composite-functions',
      name: 'How to differentiate composite functions',
      description: 'Nested functions such as $\\sin(x^2)$ or $e^{3x+1}$, peeled layer by layer.',
      uses: ['chain rule', 'power rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      href: '/calculus/derivatives/techniques/composite-functions',
      category: 'composite',
      fnType: ['polynomial', 'trig', 'explog'],
    },
    {
      id: 'implicit-differentiation',
      name: 'How to use implicit differentiation',
      description: 'Find $dy/dx$ when $y$ is not isolated, e.g. $x^2 + y^2 = 25$.',
      uses: ['chain rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      href: '/calculus/derivatives/techniques/implicit-differentiation',
      category: 'composite',
      fnType: 'polynomial',
    },
    {
      id: 'logarithmic-differentiation',
      name: 'How to use logarithmic differentiation',
      description: 'Variable exponents like $x^x$, or long products and quotients.',
      uses: ['log rules', 'chain rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 2 examples',
      href: '/calculus/derivatives/techniques/logarithmic-differentiation',
      category: 'composite',
      fnType: 'explog',
    },
    {
      id: 'parametric-differentiation',
      name: 'How to differentiate parametric curves',
      description: '$dy/dx$ for $x = x(t)$, $y = y(t)$.',
      uses: ['chain rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '3 steps · 2 examples',
      href: '/calculus/derivatives/techniques/parametric-differentiation',
      category: 'composite',
      fnType: ['polynomial', 'trig'],
    },

    // ─── III. Strategy ────────────────────────────────────────
    {
      id: 'which-technique',
      name: 'Which differentiation technique should I use?',
      description: 'A decision tree from the shape of the function to the right technique.',
      uses: 'leads to 6 techniques',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      href: '/calculus/derivatives/techniques/which-technique',
      category: 'strategy',
    },

    // ─── IV. Applied (planned) ────────────────────────────────
    {
      id: 'related-rates',
      name: 'How to solve related rates problems',
      description: 'Rates of change of connected quantities.',
      level: 'applied',
      tag: 'Applied',
      planned: true,
      category: 'applied',
    },
    {
      id: 'optimization',
      name: 'How to solve optimization problems',
      description: 'Maximize or minimize a quantity under a constraint.',
      level: 'applied',
      tag: 'Applied',
      planned: true,
      category: 'applied',
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Multi-step techniques', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a technique', blurb: 'Strategy' },
    { id: 'applied', label: 'Word problems', blurb: 'Applied · planned' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'atomic', label: 'Atomic' },
        { value: 'composite', label: 'Composite' },
        { value: 'strategy', label: 'Strategy' },
        { value: 'applied', label: 'Applied' },
      ],
    },
    fnType: {
      label: 'Function type',
      options: [
        { value: 'polynomial', label: 'Polynomial' },
        { value: 'trig', label: 'Trig' },
        { value: 'explog', label: 'Exp / Log' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other Calculus methods',
    links: [
      { url: '/calculus/limits/methods', label: 'Limits' },
      { url: '/calculus/integrals/techniques', label: 'Integrals' },
    ],
  },
};

export default derivativesTechniquesMock;
