// derivatives.methods.js
// Single data source for /calculus/derivatives/techniques (hub) and
// /calculus/derivatives/techniques/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/calculus/derivatives/techniques/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/calculus/derivatives/techniques';

const derivativesMethods = {
  hubPath: HUB,
  hubLabel: 'derivative techniques',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic — one rule applied once (cards on the hub) ═══════════
    {
      id: 'constant-rule',
      name: 'How to differentiate a constant',
      subtitle: 'Constant rule',
      glyph: 'c',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: 'polynomial',
      when: 'A term with no $x$ in it: $7$, $\\pi$, $e^2$, $\\ln 5$.',
      formula: '\\frac{d}{dx}\\,c = 0',
      fields: {
        steps: ['1. Check the term does not depend on $x$.', '2. Its derivative is $0$.'],
        worked_example: '$\\frac{d}{dx}\\,\\pi^2 = 0$',
      },
      links: [{ url: ruleUrl('derivatives.constant-rule'), label: 'Constant rule' }],
    },
    {
      id: 'power-rule',
      name: 'How to differentiate a power of x',
      subtitle: 'Power rule',
      glyph: 'xⁿ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: 'polynomial',
      when: 'A single term $x^n$ with a constant exponent, including roots and reciprocals once rewritten, like $\\sqrt{x} = x^{1/2}$.',
      formula: '\\frac{d}{dx}\\,x^n = n\\,x^{n-1}',
      fields: {
        steps: ['1. Rewrite the term as $x^n$.', '2. Bring the exponent down and lower it by one.'],
        worked_example: '$$\\frac{d}{dx}\\frac{1}{x^3} = \\frac{d}{dx}x^{-3} = -3x^{-4}$$',
      },
      links: [
        { url: ruleUrl('derivatives.power-rule'), label: 'Power rule' },
        { url: ruleUrl('derivatives.power-functions'), label: 'Derivatives of power functions' },
      ],
    },
    {
      id: 'constant-multiple-rule',
      name: 'How to differentiate a constant times a function',
      subtitle: 'Constant multiple rule',
      glyph: 'k·',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: ['polynomial', 'trig', 'explog'],
      when: 'A number multiplies a function: $5x^3$, $-2\\sin x$.',
      formula: "\\frac{d}{dx}\\,[k\\,f(x)] = k\\,f'(x)",
      fields: {
        steps: ['1. Keep the constant in front.', '2. Differentiate the function.'],
        worked_example: '$\\frac{d}{dx}\\,5x^3 = 5 \\cdot 3x^2 = 15x^2$',
      },
      links: [{ url: ruleUrl('derivatives.constant-multiple-rule'), label: 'Constant multiple rule' }],
    },
    {
      id: 'sum-difference-rule',
      name: 'How to differentiate a sum or difference',
      subtitle: 'Sum and difference rules',
      glyph: '±',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: ['polynomial', 'trig', 'explog'],
      when: 'Terms joined by $+$ or $-$, such as a polynomial.',
      formula: "(f \\pm g)' = f' \\pm g'",
      fields: {
        steps: ['1. Split the expression into its terms.', '2. Differentiate each term and keep the signs.'],
        worked_example: '$\\frac{d}{dx}(x^4 - 3x + 2) = 4x^3 - 3$',
      },
      links: [{ url: ruleUrl('derivatives.sum-difference-rule'), label: 'Sum and difference rules' }],
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
      when: 'Two functions of $x$ multiplied together: $x^2 e^x$, $x\\sin x$.',
      formula: "(uv)' = u'v + uv'",
      fields: {
        steps: [
          '1. Name the factors $u$ and $v$.',
          "2. Find $u'$ and $v'$.",
          "3. Combine: $u'v + uv'$.",
        ],
        worked_example: "$(x^2 e^x)' = 2x\\,e^x + x^2 e^x$",
      },
      links: [{ url: ruleUrl('derivatives.product-rule'), label: 'Product rule' }],
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
      when: 'One function of $x$ divided by another: $\\frac{x}{x^2+1}$.',
      formula: "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
      fields: {
        steps: [
          '1. Name the numerator $u$ and the denominator $v$.',
          "2. Find $u'$ and $v'$.",
          "3. Combine: $\\frac{u'v - uv'}{v^2}$ (order matters).",
        ],
        worked_example: "$$\\left(\\frac{x}{x^2+1}\\right)' = \\frac{(x^2+1) - x\\cdot 2x}{(x^2+1)^2} = \\frac{1 - x^2}{(x^2+1)^2}$$",
      },
      links: [{ url: ruleUrl('derivatives.quotient-rule'), label: 'Quotient rule' }],
    },
    {
      id: 'chain-rule',
      name: 'How to differentiate f(g(x)) once',
      subtitle: 'Chain rule',
      glyph: '∘',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: ['polynomial', 'trig', 'explog'],
      when: 'One function applied to a simple inner expression: $\\sin(3x)$, $(2x+1)^4$.',
      formula: "(f\\circ g)'(x) = f'(g(x))\\,g'(x)",
      fields: {
        steps: [
          '1. Differentiate the outer function, leaving the inside unchanged.',
          '2. Multiply by the derivative of the inside.',
        ],
        worked_example: "$(\\sin 3x)' = 3\\cos 3x$",
      },
      links: [{ url: ruleUrl('derivatives.chain-rule'), label: 'Chain rule' }],
    },
    {
      id: 'exp-log-derivatives',
      name: 'How to differentiate exponentials and logarithms',
      subtitle: 'Exponential and log rules',
      glyph: 'eˣ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: 'explog',
      when: 'A plain $e^x$, $a^x$, $\\ln x$ or $\\log_a x$.',
      formula: "(e^x)' = e^x \\quad (a^x)' = a^x\\ln a \\quad (\\ln x)' = \\frac{1}{x}",
      fields: {
        worked_example: "$(2^x)' = 2^x \\ln 2$",
      },
      links: [
        { url: ruleUrl('derivatives.exponential'), label: 'Exponential functions' },
        { url: ruleUrl('derivatives.logarithmic'), label: 'Logarithmic functions' },
      ],
    },
    {
      id: 'trig-derivatives',
      name: 'How to differentiate trig functions',
      subtitle: 'Trig derivative rules',
      glyph: 'sin',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: 'trig',
      when: 'A plain $\\sin x$, $\\cos x$, $\\tan x$, $\\cot x$, $\\sec x$ or $\\csc x$.',
      formula: "(\\sin x)' = \\cos x \\quad (\\cos x)' = -\\sin x \\quad (\\tan x)' = \\sec^2 x",
      fields: {
        worked_example: "$(\\sec x)' = \\sec x \\tan x$",
      },
      links: [
        { url: ruleUrl('derivatives.sin-cos'), label: 'Sine and cosine' },
        { url: ruleUrl('derivatives.tan-cot-sec-csc'), label: 'Tangent, cotangent, secant, cosecant' },
      ],
    },

    {
      id: 'inverse-trig-derivatives',
      name: 'How to differentiate inverse trig functions',
      subtitle: 'Inverse trig derivative rules',
      glyph: 'sin\u207b\u00b9',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      fnType: 'trig',
      when: 'A plain $\\arcsin x$, $\\arccos x$, $\\arctan x$ (or their reciprocals).',
      formula: "(\\arcsin x)' = \\frac{1}{\\sqrt{1-x^2}} \\quad (\\arccos x)' = -\\frac{1}{\\sqrt{1-x^2}} \\quad (\\arctan x)' = \\frac{1}{1+x^2}",
      fields: {
        worked_example: "$(\\arctan x)' \\big|_{x=1} = \\frac{1}{2}$",
      },
      links: [
        { url: ruleUrl('derivatives.arcsin-arccos'), label: 'Arcsine and arccosine' },
        { url: ruleUrl('derivatives.arctan-arccot'), label: 'Arctangent and arccotangent' },
        { url: ruleUrl('derivatives.arcsec-arccsc'), label: 'Arcsecant and arccosecant' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'composite-functions',
      slug: 'composite-functions',
      name: 'How to differentiate composite functions',
      description: 'Nested functions such as $\\sin(x^2)$ or $e^{3x+1}$, peeled layer by layer.',
      uses: ['chain rule', 'power rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      fnType: ['polynomial', 'trig', 'explog'],
      indexed: false,
      seo: {
        title: 'How to Differentiate Composite Functions (Chain Rule Steps) | Learn Math Class',
        description:
          'Differentiate composite functions step by step: split the layers, differentiate outside-in, multiply. Examples with two and three layers, and common mistakes.',
        keywords: ['differentiate composite functions', 'chain rule steps', 'derivative of nested functions', 'chain rule examples'],
      },
      page: {
        h1: 'How to Differentiate Composite Functions',
        lead:
          'A composite function is one function fed into another. You differentiate it from the outside in: the outer function’s derivative, evaluated at the inside, times the inside’s derivative.',
        recognize:
          'There is an expression **inside** another function: a power of a bracket $(3x+1)^5$, a function of a non-trivial argument $\\sin(x^2)$, $e^{-x^2}$, $\\ln(\\cos x)$. If you would have to evaluate the inside first to get a number, it is composite.',
        recognizeNote: `Compositions are defined in the ${link('lesson.function-composition', 'function composition lesson')}.`,
        methods: [
          {
            name: 'Outside-in (Lagrange)',
            tag: 'usual choice',
            preferred: true,
            formula: "(f\\circ g)'(x) = f'(g(x))\\cdot g'(x)",
            body: `Fastest once you can see the layers. It is the ${link('derivatives.chain-rule', 'chain rule')} applied directly.`,
          },
          {
            name: 'Substitution (Leibniz)',
            tag: 'for deep nesting',
            formula: '\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}',
            body: `Name the inside $u$ and differentiate each layer separately. Same ${link('derivatives.chain-rule', 'chain rule')}, one layer at a time.`,
          },
        ],
        steps: {
          traceLabel: 'On $y = \\sin(x^2)$',
          items: [
            {
              title: 'Split into layers.',
              body: 'Name the outer function and the inner expression.',
              state: 'outer $\\sin u$, inner $u = x^2$',
            },
            {
              title: 'Differentiate the outer layer,',
              body: `keeping the inside untouched. Here that is the ${link('derivatives.sin-cos', 'derivative of sine')}.`,
              state: '$\\cos(x^2)$',
              atomic: 'trig-derivatives',
            },
            {
              title: 'Differentiate the inner layer',
              body: `with the ${link('derivatives.power-rule', 'power rule')}.`,
              state: '$2x$',
              atomic: 'power-rule',
            },
            {
              title: 'Multiply',
              body: `the two results, as the ${link('derivatives.chain-rule', 'chain rule')} requires. If the inner layer is itself composite, repeat from step 1 on it.`,
              state: '$2x\\cos(x^2)$',
              atomic: 'chain-rule',
            },
          ],
        },
        examples: [
          {
            title: 'power of a bracket',
            badge: '2 layers',
            lines: [
              { math: '$y = (3x+1)^5$', why: 'outer $u^5$, inner $3x+1$' },
              { math: "$y' = 5(3x+1)^4 \\cdot 3$", why: 'outer derivative × inner derivative' },
              { math: "$y' = 15(3x+1)^4$", why: 'simplify', answer: true },
            ],
          },
          {
            title: 'three layers',
            badge: '3 layers',
            lines: [
              { math: '$y = e^{\\sin 2x}$', why: '$\\exp \\to \\sin \\to 2x$' },
              { math: "$y' = e^{\\sin 2x}\\cdot \\cos 2x \\cdot 2$", why: 'one factor per layer, outside in' },
              { math: "$y' = 2\\cos(2x)\\,e^{\\sin 2x}$", why: 'reorder', answer: true },
            ],
          },
          {
            title: 'logarithm of a trig function',
            badge: '2 layers',
            lines: [
              { math: '$y = \\ln(\\cos x)$', why: 'outer $\\ln u$, inner $\\cos x$' },
              { math: "$y' = \\frac{1}{\\cos x}\\cdot(-\\sin x)$", why: "$(\\ln u)' = 1/u$, times $(\\cos x)'$" },
              { math: "$y' = -\\tan x$", why: 'simplify', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A small change in $x$ is stretched by $2x$ on the way into the inner function, then by $\\cos u$ on the way out. The total stretch is the product: that is why the chain rule multiplies.',
        },
        pitfalls: [
          {
            title: 'Forgetting the inner derivative',
            wrong: "$(\\sin x^2)' = \\cos x^2$",
            right: "$(\\sin x^2)' = 2x\\cos x^2$",
          },
          {
            title: 'Changing the inside of the outer derivative',
            wrong: "$(e^{3x})' = e^{3}\\cdot 3$",
            right: "$(e^{3x})' = 3e^{3x}$",
          },
          {
            title: 'Using the product rule instead',
            wrong: '$\\sin(x^2)$ treated as $\\sin \\cdot x^2$',
            right: 'composition is not multiplication',
          },
          {
            title: 'Stopping one layer early',
            wrong: "$(e^{\\sin 2x})' = e^{\\sin 2x}\\cos 2x$",
            right: 'one factor per layer: the $\\cdot 2$ is missing',
          },
        ],
        related: ['implicit-differentiation', 'products-quotients-of-composites', 'which-technique'],
        builtOn: [
          { label: 'Chain rule', url: ruleUrl('derivatives.chain-rule') },
          { label: 'Power rule', url: ruleUrl('derivatives.power-rule') },
          { label: 'Trig derivatives', url: ruleUrl('derivatives.sin-cos') },
        ],
      },
    },
    {
      id: 'products-quotients-of-composites',
      slug: 'products-quotients-of-composites',
      name: 'How to differentiate products and quotients of composites',
      description: 'When the product or quotient rule has nested pieces inside it.',
      uses: ['product rule', 'quotient rule', 'chain rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Differentiate Products and Quotients of Composite Functions | Learn Math Class',
        description:
          'Product or quotient rule outside, chain rule inside: name the factors, differentiate each separately, assemble, factor. Worked examples and common mistakes.',
        keywords: ['product rule with chain rule', 'quotient rule chain rule', 'differentiate product of composite functions', 'product rule examples'],
      },
      page: {
        h1: 'How to Differentiate Products and Quotients of Composites',
        lead:
          'Use the product or quotient rule for the outer structure and the chain rule inside each nested factor. Keep the two jobs apart: name the factors first, differentiate each one on its own line, and only then assemble.',
        recognize:
          'Two factors are **multiplied or divided**, and at least one of them is itself composite: $x^2 e^{3x}$, $\\sin(2x)\\cos(3x)$, $(x^2+1)^3\\sqrt{x}$, $\\frac{e^{-x}}{x^2+1}$. Test: cover one factor with your hand. If what is left needs the chain rule on its own, you are here.',
        recognizeNote: `The inner job is the method for [composite functions](!${HUB}/composite-functions); the outer job is the ${link('derivatives.product-rule', 'product rule')} or the ${link('derivatives.quotient-rule', 'quotient rule')}.`,
        methods: [
          {
            name: 'Product or quotient rule outside, chain rule inside',
            tag: 'usual choice',
            preferred: true,
            formula: "(uv)' = u'v + uv', \\qquad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
            body: `Each of $u'$ and $v'$ is computed separately, with the ${link('derivatives.chain-rule', 'chain rule')} where a factor is nested.`,
          },
          {
            name: 'Quotient as a product',
            tag: 'one less formula',
            formula: "\\frac{u}{v} = u\\,v^{-1} \\;\\Rightarrow\\; u'v^{-1} - u\\,v^{-2}\\,v'",
            body: `Rewrite the quotient with a negative power and use only the ${link('derivatives.product-rule', 'product rule')}. The answer needs rearranging into one fraction at the end.`,
          },
        ],
        steps: {
          traceLabel: 'On $y = x^2 e^{3x}$',
          items: [
            {
              title: 'Name the factors.',
              body: 'Write $u$ and $v$ on separate lines. For a quotient, $u$ is the top and $v$ the bottom.',
              state: '$u = x^2,\\quad v = e^{3x}$',
            },
            {
              title: 'Differentiate u on its own line.',
              body: `Here a plain ${link('derivatives.power-rule', 'power rule')}.`,
              state: "$u' = 2x$",
              atomic: 'power-rule',
            },
            {
              title: 'Differentiate v on its own line,',
              body: `with the ${link('derivatives.chain-rule', 'chain rule')} if it is composite. The exponential ${link('derivatives.exponential', 'keeps its form')} and gains the inner derivative $3$.`,
              state: "$v' = 3e^{3x}$",
              atomic: 'chain-rule',
            },
            {
              title: 'Assemble with the product (or quotient) rule.',
              body: `Copy $u$, $v$, $u'$, $v'$ into the ${link('derivatives.product-rule', 'product rule')} pattern. Do not simplify while copying.`,
              state: "$y' = 2x\\,e^{3x} + x^2\\cdot 3e^{3x}$",
              atomic: 'product-rule',
            },
            {
              title: 'Factor out the common pieces.',
              body: 'A factored answer shows at once where the derivative is zero, which the next question usually asks.',
              state: "$y' = x\\,e^{3x}(2 + 3x)$",
            },
          ],
        },
        examples: [
          {
            title: 'product of two trig composites',
            badge: 'product rule',
            lines: [
              { math: '$y = \\sin(2x)\\cos(3x)$', why: '$u = \\sin 2x$, $v = \\cos 3x$' },
              { math: "$u' = 2\\cos 2x,\\quad v' = -3\\sin 3x$", why: 'chain rule in each factor' },
              { math: "$y' = 2\\cos 2x\\cos 3x - 3\\sin 2x\\sin 3x$", why: '$u\'v + uv\'$', answer: true },
            ],
          },
          {
            title: 'quotient with an exponential on top',
            badge: 'quotient rule',
            lines: [
              { math: '$y = \\frac{e^{-x}}{x^2+1}$', why: '$u = e^{-x}$, $v = x^2 + 1$' },
              { math: "$u' = -e^{-x},\\quad v' = 2x$", why: 'chain rule on $e^{-x}$' },
              { math: "$y' = \\frac{-e^{-x}(x^2+1) - e^{-x}\\cdot 2x}{(x^2+1)^2}$", why: '$\\frac{u\'v - uv\'}{v^2}$' },
              { math: "$y' = -\\frac{e^{-x}(x+1)^2}{(x^2+1)^2}$", why: 'factor $-e^{-x}$; $x^2 + 2x + 1 = (x+1)^2$', answer: true },
            ],
          },
          {
            title: 'power of a bracket times a root',
            badge: 'factoring at the end',
            lines: [
              { math: '$y = (x^2+1)^3\\sqrt{x}$', why: '$u = (x^2+1)^3$, $v = x^{1/2}$' },
              { math: "$u' = 6x(x^2+1)^2,\\quad v' = \\frac{1}{2\\sqrt{x}}$", why: 'chain rule; power rule' },
              { math: "$y' = 6x(x^2+1)^2\\sqrt{x} + \\frac{(x^2+1)^3}{2\\sqrt{x}}$", why: '$u\'v + uv\'$' },
              { math: "$y' = \\frac{(x^2+1)^2\\,(13x^2 + 1)}{2\\sqrt{x}}$", why: 'common factor $\\frac{(x^2+1)^2}{2\\sqrt{x}}$; $12x^2 + x^2 + 1$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The product rule says: change one factor at a time and add the effects. The chain rule says: inside a factor, change one layer at a time and multiply the effects. The two rules never compete, because they act at different depths of the expression.',
        },
        pitfalls: [
          {
            title: 'Multiplying the derivatives of the factors',
            wrong: "$(x^2 e^{3x})' = 2x\\cdot 3e^{3x}$",
            right: "$(x^2 e^{3x})' = 2x\\,e^{3x} + x^2\\cdot 3e^{3x}$",
          },
          {
            title: 'Forgetting the chain rule inside a factor',
            wrong: "$v' = e^{3x}$",
            right: "$v' = 3e^{3x}$",
          },
          {
            title: 'Swapping the order in the quotient rule',
            wrong: "$\\frac{uv' - u'v}{v^2}$",
            right: "$\\frac{u'v - uv'}{v^2}$, the derivative of the top comes first",
          },
          {
            title: 'Stopping before factoring',
            wrong: "$y' = 2x\\,e^{3x} + 3x^2 e^{3x}$ when asked where $y' = 0$",
            right: "$y' = x\\,e^{3x}(2 + 3x)$ shows the zeros $x = 0$ and $x = -\\tfrac{2}{3}$ at once",
          },
        ],
        related: ['composite-functions', 'logarithmic-differentiation', 'which-technique'],
        builtOn: [
          { label: 'Product rule', url: ruleUrl('derivatives.product-rule') },
          { label: 'Quotient rule', url: ruleUrl('derivatives.quotient-rule') },
          { label: 'Chain rule', url: ruleUrl('derivatives.chain-rule') },
        ],
      },
    },
    {
      id: 'implicit-differentiation',
      slug: 'implicit-differentiation',
      name: 'How to use implicit differentiation',
      description: 'Find $dy/dx$ when $y$ is not isolated, e.g. $x^2 + y^2 = 25$.',
      uses: ['chain rule', 'product rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Implicit Differentiation (Step by Step) | Learn Math Class',
        description:
          'Find dy/dx when y is not isolated: differentiate both sides, attach dy/dx to every y-term, collect and solve. Three worked examples and common mistakes.',
        keywords: ['implicit differentiation', 'implicit differentiation steps', 'how to find dy/dx implicitly', 'implicit differentiation examples'],
      },
      page: {
        h1: 'How to Use Implicit Differentiation',
        lead:
          'When an equation ties $x$ and $y$ together and you cannot, or do not want to, solve for $y$, differentiate the whole equation. Every $y$-term picks up a factor $\\frac{dy}{dx}$ through the chain rule; then solve for $\\frac{dy}{dx}$.',
        recognize:
          '$y$ is **not isolated**: $x^2 + y^2 = 25$, $x^3 + y^3 = 6xy$, $\\sin(xy) = x$, $e^y = x + y$. Test: can you write the equation as $y = $ (an expression in $x$ only) in one easy step? If not, differentiate implicitly. The question often asks for the slope at a point $(a, b)$ with both coordinates given.',
        recognizeNote: `The rule behind every $y$-term is the ${link('derivatives.chain-rule', 'chain rule')}; the lesson introduces the technique under ${link('lesson.derivatives.techniques', 'Differentiation Techniques')}.`,
        methods: [
          {
            name: 'Differentiate both sides',
            tag: 'usual choice',
            preferred: true,
            formula: "\\frac{d}{dx}\\,g(y) = g'(y)\\,\\frac{dy}{dx}",
            body: `Works on any equation. The answer comes out in terms of both $x$ and $y$, which is normal: it is the slope at any point $(x, y)$ of the curve.`,
          },
          {
            name: 'Solve for y first',
            tag: 'when y isolates easily',
            formula: 'x^2 + y^2 = 25 \\;\\Rightarrow\\; y = \\pm\\sqrt{25 - x^2}',
            body: `Only when $y$ comes free cleanly, and you must pick the branch that passes through your point. At that point both methods give the same slope.`,
          },
        ],
        steps: {
          traceLabel: 'On $x^2 + y^2 = 25$',
          items: [
            {
              title: 'Differentiate both sides with respect to x,',
              body: `term by term, using the ${link('derivatives.sum-difference-rule', 'sum rule')}. Write $\\frac{d}{dx}$ in front of every term so nothing is skipped.`,
              state: '$\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(25)$',
              atomic: 'sum-difference-rule',
            },
            {
              title: 'Differentiate the x-only terms normally.',
              body: `Powers of $x$ with the ${link('derivatives.power-rule', 'power rule')}, constants to $0$.`,
              state: '$2x + \\frac{d}{dx}(y^2) = 0$',
              atomic: 'power-rule',
            },
            {
              title: 'Differentiate the y-terms as composites.',
              body: `$y$ is a function of $x$, so $y^2$ is a composite: its derivative is $2y$ times $\\frac{dy}{dx}$ by the ${link('derivatives.chain-rule', 'chain rule')}. A term like $xy$ is a product of two changing quantities and needs the ${link('derivatives.product-rule', 'product rule')} as well.`,
              state: '$2x + 2y\\,\\frac{dy}{dx} = 0$',
              atomic: 'chain-rule',
            },
            {
              title: 'Collect every dy/dx term on one side',
              body: 'and move everything else to the other side. Factor out $\\frac{dy}{dx}$ if it appears more than once.',
              state: '$2y\\,\\frac{dy}{dx} = -2x$',
            },
            {
              title: 'Solve for dy/dx,',
              body: 'then substitute the point if one is given. Substitute last, never before differentiating.',
              state: '$\\frac{dy}{dx} = -\\frac{x}{y}$; at $(3, 4)$: $-\\frac{3}{4}$',
            },
          ],
        },
        examples: [
          {
            title: 'circle',
            badge: 'basic',
            lines: [
              { math: '$x^2 + y^2 = 25$', why: 'find the slope at $(3, 4)$' },
              { math: "$2x + 2y\\,y' = 0$", why: 'differentiate; $y^2$ gets a $y\'$' },
              { math: "$y' = -\\frac{x}{y}$", why: 'solve for $y\'$' },
              { math: "$y'\\big|_{(3,4)} = -\\frac{3}{4}$", why: 'substitute the point', answer: true },
            ],
          },
          {
            title: 'folium of Descartes',
            badge: 'product rule inside',
            lines: [
              { math: '$x^3 + y^3 = 6xy$', why: 'find the slope at $(3, 3)$' },
              { math: "$3x^2 + 3y^2\\,y' = 6y + 6x\\,y'$", why: '$6xy$ is a product: $6y + 6x\\,y\'$' },
              { math: "$3y^2\\,y' - 6x\\,y' = 6y - 3x^2$", why: 'collect the $y\'$ terms' },
              { math: "$y' = \\frac{6y - 3x^2}{3y^2 - 6x} = \\frac{2y - x^2}{y^2 - 2x}$", why: 'factor out $y\'$ and divide' },
              { math: "$y'\\big|_{(3,3)} = \\frac{6 - 9}{9 - 6} = -1$", why: 'substitute', answer: true },
            ],
            note: 'The folium is symmetric about $y = x$, so at the point $(3, 3)$ on that line the slope had to be $\\pm 1$. A quick symmetry check like this catches most slips.',
          },
          {
            title: 'trig of a product',
            badge: 'chain and product rule',
            lines: [
              { math: '$\\sin(xy) = x$', why: 'the inside $xy$ is a product' },
              { math: "$\\cos(xy)\\,(y + x\\,y') = 1$", why: 'chain rule, then product rule on $xy$' },
              { math: "$x\\cos(xy)\\,y' = 1 - y\\cos(xy)$", why: 'isolate the $y\'$ term' },
              { math: "$y' = \\frac{1 - y\\cos(xy)}{x\\cos(xy)}$", why: 'divide', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Near any point where the curve is not vertical, a small piece of it is the graph of some function $y(x)$, even when nobody can write that function down. Differentiating the equation differentiates that hidden function, and that is where the factor $\\frac{dy}{dx}$ comes from.',
        },
        pitfalls: [
          {
            title: 'Dropping the dy/dx factor',
            wrong: '$2x + 2y = 0$',
            right: "$2x + 2y\\,y' = 0$",
            note: 'Without the factor there is nothing to solve for, and the equation is false at $(3, 4)$: $6 + 8 \\neq 0$.',
          },
          {
            title: 'Forgetting the product rule on xy',
            wrong: "$\\frac{d}{dx}(6xy) = 6x\\,y'$",
            right: "$\\frac{d}{dx}(6xy) = 6y + 6x\\,y'$",
          },
          {
            title: 'Substituting the point before differentiating',
            wrong: '$9 + 16 = 25$, then differentiate',
            right: 'differentiate with letters first, substitute $(3, 4)$ last',
          },
          {
            title: "Stopping with y' on both sides",
            wrong: "$y' = \\frac{6y - 3x^2 + 6x\\,y'}{3y^2}$",
            right: "collect all $y'$ terms, factor, then divide",
          },
        ],
        related: ['related-rates-problems', 'logarithmic-differentiation', 'which-technique'],
        builtOn: [
          { label: 'Chain rule', url: ruleUrl('derivatives.chain-rule') },
          { label: 'Product rule', url: ruleUrl('derivatives.product-rule') },
          { label: 'Power rule', url: ruleUrl('derivatives.power-rule') },
        ],
      },
    },
    {
      id: 'logarithmic-differentiation',
      slug: 'logarithmic-differentiation',
      name: 'How to use logarithmic differentiation',
      description: 'Variable exponents like $x^x$, or long products and quotients.',
      uses: ['log rules', 'chain rule', 'product rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Logarithmic Differentiation (x^x and Long Products) | Learn Math Class',
        description:
          'Differentiate x^x and long products: take ln of both sides, expand with the log rules, differentiate implicitly, multiply by y. Worked examples and mistakes.',
        keywords: ['logarithmic differentiation', 'derivative of x^x', 'logarithmic differentiation steps', 'logarithmic differentiation examples'],
      },
      page: {
        h1: 'How to Use Logarithmic Differentiation',
        lead:
          'Take the natural logarithm of both sides, let the log rules turn products, quotients and powers into sums, differentiate implicitly, then multiply back by $y$. It is the only route when the variable sits in both the base and the exponent.',
        recognize:
          'The variable is in the **exponent and in the base**: $x^x$, $(\\sin x)^{\\cos x}$, $x^{\\ln x}$. Or the function is a **long product or quotient of powers**: $\\frac{x^2\\sqrt{x+1}}{(x-3)^4}$. Test: is there no rule for the exponent, or would you need the product and quotient rules three times over? Then take logs. You do not need it for $a^x$ (constant base) or $x^n$ (constant exponent): those have their own rules.',
        recognizeNote: `The log rules used in step 2 are collected under ${link('logarithms.expanding', 'expanding logarithmic expressions')} in the algebra lesson.`,
        methods: [
          {
            name: 'Take logs of both sides',
            tag: 'usual choice',
            preferred: true,
            formula: "y' = y\\,\\frac{d}{dx}\\big[\\ln f(x)\\big]",
            body: `Works in every case. The ${link('derivatives.logarithmic-differentiation', 'logarithmic differentiation formula')} is exactly this: differentiate the log, multiply back by $y$.`,
          },
          {
            name: 'Rewrite as an exponential',
            tag: 'for f(x) to the power g(x)',
            formula: 'f(x)^{g(x)} = e^{\\,g(x)\\ln f(x)}',
            body: `Then differentiate with the ${link('derivatives.chain-rule', 'chain rule')} and the ${link('derivatives.product-rule', 'product rule')}. Same answer, no implicit step, but it only covers the variable-exponent case.`,
          },
        ],
        steps: {
          traceLabel: 'On $y = x^x$',
          items: [
            {
              title: 'Take ln of both sides.',
              body: 'This needs $y > 0$; for a function that changes sign, use $\\ln|y|$, the steps are identical.',
              state: '$\\ln y = \\ln(x^x)$',
            },
            {
              title: 'Expand the right side with the log rules.',
              body: `Powers come down as factors by the ${link('logarithms.power-rule', 'power rule for logarithms')}, products become sums (${link('logarithms.product-rule', 'product rule')}), quotients become differences (${link('logarithms.quotient-rule', 'quotient rule')}).`,
              state: '$\\ln y = x\\ln x$',
            },
            {
              title: 'Differentiate both sides.',
              body: `The left side is implicit: $\\frac{d}{dx}\\ln y = \\frac{1}{y}\\,y'$ by the ${link('derivatives.chain-rule', 'chain rule')}. The right side is now a sum of simple terms; here it needs one ${link('derivatives.product-rule', 'product rule')}.`,
              state: "$\\frac{1}{y}\\,y' = \\ln x + x\\cdot\\frac{1}{x} = \\ln x + 1$",
              atomic: 'product-rule',
            },
            {
              title: 'Multiply by y and substitute y back',
              body: 'in terms of $x$. The answer is not finished while a $y$ is still in it.',
              state: "$y' = x^x(\\ln x + 1)$",
            },
          ],
        },
        examples: [
          {
            title: 'variable base and exponent',
            badge: 'the classic',
            lines: [
              { math: '$y = x^x$', why: 'no rule fits directly' },
              { math: '$\\ln y = x\\ln x$', why: 'take logs; exponent comes down' },
              { math: "$\\frac{y'}{y} = \\ln x + 1$", why: 'product rule on $x\\ln x$' },
              { math: "$y' = x^x(\\ln x + 1)$", why: 'multiply by $y = x^x$', answer: true },
            ],
          },
          {
            title: 'long quotient of powers',
            badge: 'saves three rules',
            lines: [
              { math: '$y = \\frac{x^2\\sqrt{x+1}}{(x-3)^4}$', why: 'product, root and quotient at once' },
              { math: '$\\ln y = 2\\ln x + \\tfrac{1}{2}\\ln(x+1) - 4\\ln(x-3)$', why: 'log rules: a plain sum' },
              { math: "$\\frac{y'}{y} = \\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{4}{x-3}$", why: 'each term is $\\frac{1}{u}\\cdot u\'$' },
              { math: "$y' = \\frac{x^2\\sqrt{x+1}}{(x-3)^4}\\left(\\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{4}{x-3}\\right)$", why: 'multiply by $y$', answer: true },
            ],
          },
          {
            title: 'trig base and exponent',
            badge: 'variable exponent',
            lines: [
              { math: '$y = (\\sin x)^{\\cos x}$', why: 'both vary; take logs' },
              { math: '$\\ln y = \\cos x\\,\\ln(\\sin x)$', why: 'exponent comes down' },
              { math: "$\\frac{y'}{y} = -\\sin x\\,\\ln(\\sin x) + \\cos x\\cdot\\frac{\\cos x}{\\sin x}$", why: 'product rule, chain rule on $\\ln(\\sin x)$' },
              { math: "$y' = (\\sin x)^{\\cos x}\\left(\\frac{\\cos^2 x}{\\sin x} - \\sin x\\,\\ln(\\sin x)\\right)$", why: 'multiply by $y$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Two wrong rules add up to the right one. Treating $x^x$ as a power gives $x\\cdot x^{x-1} = x^x$; treating it as an exponential gives $x^x\\ln x$. Neither is the derivative, but their sum $x^x(\\ln x + 1)$ is: when base and exponent both vary, each contributes its own change, and logarithmic differentiation adds the two automatically.',
        },
        pitfalls: [
          {
            title: 'Forgetting to multiply by y',
            wrong: "$y' = \\ln x + 1$",
            right: "$y' = x^x(\\ln x + 1)$",
            note: 'At $x = 2$ the wrong answer is about $1.69$, the right one about $6.77$. The left side was $\\frac{y\'}{y}$, not $y\'$.',
          },
          {
            title: 'Differentiating ln y as 1/y',
            wrong: '$\\frac{d}{dx}\\ln y = \\frac{1}{y}$',
            right: "$\\frac{d}{dx}\\ln y = \\frac{1}{y}\\,y'$",
          },
          {
            title: 'Using the power rule on a variable exponent',
            wrong: "$(x^x)' = x\\cdot x^{x-1}$",
            right: 'the exponent is not constant; take logs',
          },
          {
            title: 'Taking the log of a sum',
            wrong: '$\\ln(x^2 + 1) = 2\\ln x + \\ln 1$',
            right: 'log rules split products and quotients only; $\\ln(x^2+1)$ stays as it is',
          },
        ],
        related: ['implicit-differentiation', 'composite-functions', 'which-technique'],
        builtOn: [
          { label: 'Logarithmic differentiation', url: ruleUrl('derivatives.logarithmic-differentiation') },
          { label: 'Chain rule', url: ruleUrl('derivatives.chain-rule') },
          { label: 'Product rule', url: ruleUrl('derivatives.product-rule') },
          { label: 'Logarithm rules', url: ruleUrl('logarithms.expanding') },
        ],
      },
    },
    {
      id: 'inverse-functions',
      slug: 'inverse-functions',
      name: 'How to differentiate an inverse function',
      description: "Get $(f^{-1})'$ from $f'$ without finding $f^{-1}$ explicitly.",
      uses: ['inverse function rule', 'chain rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Differentiate an Inverse Function (Without Finding It) | Learn Math Class',
        description:
          'Differentiate an inverse function from f alone: solve f(a) = b, differentiate f, evaluate at a, take the reciprocal. Examples including arcsin, and mistakes.',
        keywords: ['derivative of inverse function', 'inverse function derivative formula', 'how to differentiate an inverse function', 'inverse function theorem examples'],
      },
      page: {
        h1: 'How to Differentiate an Inverse Function',
        lead:
          'The slope of $f^{-1}$ at $b$ is the reciprocal of the slope of $f$ at the matching point $a = f^{-1}(b)$. You never need a formula for $f^{-1}$ itself, only for $f$ and $f\'$.',
        recognize:
          'You are asked for $(f^{-1})\'(b)$, or for the derivative of an inverse such as $\\arcsin x$, $\\ln x$ or $\\sqrt[3]{x}$, when $f$ and $f\'$ are easy but $f^{-1}$ is awkward or unknown. Typical wording: "Let $g$ be the inverse of $f(x) = x^3 + x$. Find $g\'(2)$." Test: you know $f$, and you need the inverse\'s slope at one number.',
        recognizeNote: `What an inverse function is, and how its graph mirrors $f$ in the line $y = x$, is in the ${link('lesson.inverse-functions', 'inverse functions lesson')} (see ${link('lesson.inverse-functions.reflection', 'inverse as reflection')}).`,
        methods: [
          {
            name: 'Reciprocal formula',
            tag: 'usual choice',
            preferred: true,
            formula: "(f^{-1})'(b) = \\frac{1}{f'(a)}, \\qquad a = f^{-1}(b)",
            body: `The ${link('derivatives.inverse-function-rule', 'inverse function derivative')}. It needs $f'(a) \\neq 0$; where $f$ has a horizontal tangent, $f^{-1}$ has a vertical one and no derivative.`,
          },
          {
            name: 'Implicit differentiation',
            tag: 'how the formula is derived',
            formula: "f(y) = x \\;\\Rightarrow\\; f'(y)\\,y' = 1",
            body: `Write $y = f^{-1}(x)$ as $f(y) = x$ and differentiate both sides with the ${link('derivatives.chain-rule', 'chain rule')}. This is also how the inverse trig derivatives are found.`,
          },
        ],
        steps: {
          traceLabel: "On $f(x) = x^3 + x$, find $(f^{-1})'(2)$",
          items: [
            {
              title: 'Find the matching point a',
              body: 'by solving $f(a) = b$. Often one small integer works; the equation has only one solution because $f$ is one-to-one.',
              state: '$a^3 + a = 2 \\;\\Rightarrow\\; a = 1$',
            },
            {
              title: 'Differentiate f.',
              body: `Here the ${link('derivatives.power-rule', 'power rule')} term by term.`,
              state: "$f'(x) = 3x^2 + 1$",
              atomic: 'power-rule',
            },
            {
              title: "Evaluate f' at a, not at b.",
              body: 'This is the step that goes wrong most often. The derivative of $f$ is taken at the input of $f$, which is $a$.',
              state: "$f'(1) = 4$",
            },
            {
              title: 'Take the reciprocal.',
              body: `Check first that $f'(a) \\neq 0$. Then apply the ${link('derivatives.inverse-function-rule', 'inverse function derivative')}.`,
              state: "$(f^{-1})'(2) = \\frac{1}{4}$",
            },
          ],
        },
        examples: [
          {
            title: 'cubic with no explicit inverse',
            badge: 'formula',
            lines: [
              { math: "$f(x) = x^3 + x,\\quad (f^{-1})'(2) = ?$", why: 'no formula for $f^{-1}$ exists in closed form' },
              { math: '$f(1) = 2 \\;\\Rightarrow\\; a = 1$', why: 'matching point' },
              { math: "$f'(x) = 3x^2 + 1,\\quad f'(1) = 4$", why: 'derivative at $a$' },
              { math: "$(f^{-1})'(2) = \\frac{1}{4}$", why: 'reciprocal', answer: true },
            ],
          },
          {
            title: 'exponential, checked against ln',
            badge: 'check',
            lines: [
              { math: "$f(x) = e^x,\\quad (f^{-1})'(2) = ?$", why: 'here $f^{-1} = \\ln x$ is known' },
              { math: '$e^a = 2 \\;\\Rightarrow\\; a = \\ln 2$', why: 'matching point' },
              { math: "$f'(a) = e^{\\ln 2} = 2$", why: 'derivative at $a$' },
              { math: "$(f^{-1})'(2) = \\frac{1}{2}$", why: 'reciprocal; and $(\\ln x)\' = \\frac{1}{x}$ gives $\\frac{1}{2}$ too', answer: true },
            ],
          },
          {
            title: 'deriving the derivative of arcsin',
            badge: 'implicit route',
            lines: [
              { math: '$y = \\arcsin x \\;\\Rightarrow\\; \\sin y = x$', why: 'rewrite through $f$' },
              { math: "$\\cos y\\,y' = 1$", why: 'differentiate implicitly' },
              { math: "$y' = \\frac{1}{\\cos y} = \\frac{1}{\\sqrt{1 - \\sin^2 y}}$", why: '$\\cos y > 0$ on $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$' },
              { math: "$(\\arcsin x)' = \\frac{1}{\\sqrt{1 - x^2}}$", why: '$\\sin y = x$', answer: true },
            ],
            note: `The same two lines give every inverse trig derivative; the results are listed under ${link('derivatives.arcsin-arccos', 'arcsine and arccosine')} and ${link('derivatives.arctan-arccot', 'arctangent and arccotangent')}.`,
          },
        ],
        visual: {
          caption:
            'Reflect the graph of $f$ in the line $y = x$ and you get the graph of $f^{-1}$. A tangent of slope $m$ reflects to a tangent of slope $\\frac{1}{m}$ at the mirrored point. A horizontal tangent on $f$ becomes a vertical one on $f^{-1}$: that is the case $f\'(a) = 0$ that the formula excludes.',
        },
        pitfalls: [
          {
            title: "Evaluating f' at b instead of a",
            wrong: "$(f^{-1})'(2) = \\frac{1}{f'(2)} = \\frac{1}{e^2}$ for $f = e^x$",
            right: "$(f^{-1})'(2) = \\frac{1}{f'(\\ln 2)} = \\frac{1}{2}$",
          },
          {
            title: 'Confusing the inverse with the reciprocal',
            wrong: "$(f^{-1})' = -\\frac{f'}{f^2}$",
            right: '$f^{-1}$ is the inverse function, not $\\frac{1}{f}$',
          },
          {
            title: "Ignoring f'(a) = 0",
            wrong: "$(f^{-1})'(0) = \\frac{1}{0}$ for $f(x) = x^3$, 'so it is infinite'",
            right: 'the inverse $\\sqrt[3]{x}$ has a vertical tangent at $0$; the derivative does not exist there',
          },
        ],
        related: ['implicit-differentiation', 'composite-functions', 'which-technique'],
        builtOn: [
          { label: 'Inverse function derivative', url: ruleUrl('derivatives.inverse-function-rule') },
          { label: 'Chain rule', url: ruleUrl('derivatives.chain-rule') },
          { label: 'Inverse trig derivatives', url: ruleUrl('derivatives.arcsin-arccos') },
        ],
      },
    },
    {
      id: 'parametric-differentiation',
      slug: 'parametric-differentiation',
      name: 'How to differentiate parametric curves',
      description: '$dy/dx$ for $x = x(t)$, $y = y(t)$.',
      uses: ['chain rule', 'trig derivatives'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Differentiate Parametric Curves (dy/dx and the Second Derivative) | Learn Math Class',
        description:
          'Slope of a parametric curve: differentiate x(t) and y(t), divide dy/dt by dx/dt, substitute t. Second derivative, tangent line and cycloid examples, mistakes.',
        keywords: ['parametric differentiation', 'derivative of parametric equations', 'dy/dx parametric', 'second derivative parametric'],
      },
      page: {
        h1: 'How to Differentiate Parametric Curves',
        lead:
          'When $x$ and $y$ are both given through a parameter $t$, the slope $\\frac{dy}{dx}$ is the ratio of the two rates, $\\frac{dy}{dt}$ over $\\frac{dx}{dt}$. The second derivative needs one more division by $\\frac{dx}{dt}$, not a ratio of second derivatives.',
        recognize:
          'The curve is given as $x = x(t)$, $y = y(t)$: a circle $x = \\cos t$, $y = \\sin t$; a cusp $x = t^2$, $y = t^3$; a cycloid $x = t - \\sin t$, $y = 1 - \\cos t$. The question asks for the slope, the tangent line or the concavity at a value of $t$. Test: no equation links $x$ and $y$ directly; both depend on a third letter.',
        recognizeNote: `The lesson introduces these curves under ${link('lesson.derivatives.techniques', 'Differentiation Techniques')}; the formula is the ${link('derivatives.chain-rule', 'chain rule')} written in Leibniz form.`,
        methods: [
          {
            name: 'Ratio of the two rates',
            tag: 'usual choice',
            preferred: true,
            formula: '\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}, \\qquad \\frac{dx}{dt} \\neq 0',
            body: `The ${link('derivatives.parametric-first', 'parametric first derivative')}. Works for every parametric curve, including ones that loop or cross themselves.`,
          },
          {
            name: 'Eliminate the parameter',
            tag: 'when t cancels easily',
            formula: 'x = t^2,\\; y = t^3 \\;\\Rightarrow\\; y = x^{3/2}\\ (t \\ge 0)',
            body: 'Only when $t$ can be removed. Signs and branches need care: the eliminated form often covers only part of the curve.',
          },
        ],
        steps: {
          traceLabel: 'On $x = \\cos t$, $y = \\sin t$ at $t = \\frac{\\pi}{6}$',
          items: [
            {
              title: 'Differentiate x with respect to t.',
              body: `Here a ${link('derivatives.sin-cos', 'trig derivative')}.`,
              state: '$\\frac{dx}{dt} = -\\sin t$',
              atomic: 'trig-derivatives',
            },
            {
              title: 'Differentiate y with respect to t.',
              body: 'Keep the two derivatives on separate lines so they do not get swapped.',
              state: '$\\frac{dy}{dt} = \\cos t$',
              atomic: 'trig-derivatives',
            },
            {
              title: 'Divide: dy/dt on top, dx/dt below.',
              body: `This is the ${link('derivatives.parametric-first', 'parametric first derivative')}. Note where $\\frac{dx}{dt} = 0$: there the tangent is vertical (if $\\frac{dy}{dt} \\neq 0$).`,
              state: '$\\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t$',
            },
            {
              title: 'Substitute the value of t.',
              body: 'For a tangent line you also need the point: compute $x(t)$ and $y(t)$ at the same $t$.',
              state: '$\\frac{dy}{dx}\\big|_{t=\\pi/6} = -\\sqrt{3}$ at the point $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$',
            },
            {
              title: 'For the second derivative, differentiate dy/dx with respect to t and divide by dx/dt again.',
              body: `$\\frac{dy}{dx}$ is a function of $t$, so the ${link('derivatives.parametric-second', 'parametric second derivative')} is $\\frac{d}{dt}\\left[\\frac{dy}{dx}\\right] \\div \\frac{dx}{dt}$.`,
              state: '$\\frac{d^2y}{dx^2} = \\frac{\\csc^2 t}{-\\sin t} = -\\frac{1}{\\sin^3 t}$',
            },
          ],
        },
        examples: [
          {
            title: 'slope on the unit circle',
            badge: 'first derivative',
            lines: [
              { math: '$x = \\cos t,\\quad y = \\sin t$', why: 'slope at $t = \\frac{\\pi}{6}$' },
              { math: '$\\frac{dx}{dt} = -\\sin t,\\quad \\frac{dy}{dt} = \\cos t$', why: 'differentiate each coordinate' },
              { math: '$\\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t$', why: '$y$-rate over $x$-rate' },
              { math: '$\\frac{dy}{dx}\\big|_{\\pi/6} = -\\sqrt{3}$', why: 'perpendicular to the radius of slope $\\frac{1}{\\sqrt{3}}$', answer: true },
            ],
          },
          {
            title: 'tangent line to a cusp curve',
            badge: 'tangent line',
            lines: [
              { math: '$x = t^2,\\quad y = t^3$', why: 'tangent at $t = 2$' },
              { math: '$\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2} = 3$', why: 'ratio, then $t = 2$' },
              { math: '$(x, y) = (4, 8)$', why: 'the point at $t = 2$' },
              { math: '$y - 8 = 3(x - 4) \\;\\Rightarrow\\; y = 3x - 4$', why: 'point-slope form', answer: true },
            ],
          },
          {
            title: 'concavity of a cycloid',
            badge: 'second derivative',
            lines: [
              { math: '$x = t - \\sin t,\\quad y = 1 - \\cos t$', why: 'concavity at $t = \\frac{\\pi}{2}$' },
              { math: '$\\frac{dy}{dx} = \\frac{\\sin t}{1 - \\cos t}$', why: 'first derivative' },
              { math: '$\\frac{d}{dt}\\left[\\frac{dy}{dx}\\right] = \\frac{\\cos t - 1}{(1 - \\cos t)^2} = -\\frac{1}{1 - \\cos t}$', why: 'quotient rule; $\\cos^2 t + \\sin^2 t = 1$' },
              { math: '$\\frac{d^2y}{dx^2} = -\\frac{1}{(1 - \\cos t)^2}$', why: 'divide by $\\frac{dx}{dt} = 1 - \\cos t$' },
              { math: '$\\frac{d^2y}{dx^2}\\big|_{\\pi/2} = -1 < 0$', why: 'concave down, as an arch should be', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Think of $t$ as time and of the point as moving along the curve. $\\frac{dx}{dt}$ is its sideways speed and $\\frac{dy}{dt}$ its upward speed, so the slope of the path is rise per run, and the $dt$ cancels. It does not cancel a second time: $\\frac{d^2y}{dx^2}$ is how fast the **slope** changes per unit of $x$, so you divide by $\\frac{dx}{dt}$ once more.',
        },
        pitfalls: [
          {
            title: 'Flipping the ratio',
            wrong: '$\\frac{dy}{dx} = \\frac{dx/dt}{dy/dt}$',
            right: '$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$',
            note: 'At $t = \\frac{\\pi}{4}$ on the circle both orders give $-1$, so a check there catches nothing. Test at $t = \\frac{\\pi}{6}$ instead.',
          },
          {
            title: 'Dividing the second derivatives',
            wrong: '$\\frac{d^2y}{dx^2} = \\frac{d^2y/dt^2}{d^2x/dt^2}$',
            right: '$\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left[\\frac{dy}{dx}\\right]}{dx/dt}$',
          },
          {
            title: 'Using t as the x-coordinate of the point',
            wrong: 'tangent at $t = 2$ passes through $(2, \\,\\cdot\\,)$',
            right: 'the point is $(x(2), y(2)) = (4, 8)$',
          },
          {
            title: 'Reading dx/dt = 0 as "no tangent"',
            wrong: 'at $t = 0$ on the circle the slope is undefined, so there is no tangent',
            right: 'the tangent is vertical there, since $\\frac{dy}{dt} \\neq 0$',
          },
        ],
        related: ['implicit-differentiation', 'tangent-normal-lines', 'concavity-inflection-points'],
        builtOn: [
          { label: 'Parametric first derivative', url: ruleUrl('derivatives.parametric-first') },
          { label: 'Parametric second derivative', url: ruleUrl('derivatives.parametric-second') },
          { label: 'Chain rule', url: ruleUrl('derivatives.chain-rule') },
          { label: 'Trig derivatives', url: ruleUrl('derivatives.sin-cos') },
        ],
      },
    },

    {
      id: 'higher-order-derivatives',
      slug: 'higher-order-derivatives',
      name: 'How to find higher-order derivatives',
      description: 'Second, third and $n$th derivatives, and the patterns that give $f^{(n)}$ directly.',
      uses: ['power rule', 'exponential rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Higher-Order Derivatives (Second, Third and nth) | Learn Math Class',
        description:
          'Find second, third and nth derivatives: simplify, differentiate repeatedly, then spot the pattern for the general term. Polynomial, e^(3x) and 1/x examples.',
        keywords: ['higher order derivatives', 'how to find the second derivative', 'nth derivative formula', 'nth derivative examples', 'third derivative'],
      },
      page: {
        h1: 'How to Find Higher-Order Derivatives',
        lead:
          'Differentiate again, and again: the second derivative is the derivative of the first, the $n$th is the derivative of the $(n-1)$th. For polynomials, exponentials and sine or cosine a pattern appears after two or three steps, and the pattern gives the $n$th derivative without doing $n$ steps.',
        recognize:
          'The question asks for $f\'\'$, $f\'\'\'$, $f^{(4)}$, $\\frac{d^2y}{dx^2}$, "the $n$th derivative", the acceleration from a position function, or the concavity of a graph. Test: a derivative of a derivative.',
        recognizeNote: `Definition and notation are in the ${link('lesson.higher-order.definition', 'higher-order derivatives lesson')}; the ${link('lesson.higher-order.second-derivative', 'second derivative')} has its own section there.`,
        methods: [
          {
            name: 'Differentiate repeatedly',
            tag: 'usual choice',
            preferred: true,
            formula: "f^{(n)}(x) = \\frac{d}{dx}\\,f^{(n-1)}(x)",
            body: 'One derivative per line, each result simplified before the next step. Fine for orders up to three or four.',
          },
          {
            name: 'Find the pattern',
            tag: 'for the nth derivative',
            formula: '\\frac{d^n}{dx^n}e^{kx} = k^n e^{kx}, \\qquad \\frac{d^n}{dx^n}\\sin x = \\sin\\!\\left(x + \\tfrac{n\\pi}{2}\\right)',
            body: `Compute the first three or four derivatives, write the general term, and check it for $n = 1$. The standard patterns are collected under ${link('lesson.higher-order.polynomials', 'patterns in repeated differentiation')}.`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = x^4 - 2x^3 + 5x$',
          items: [
            {
              title: 'Simplify before you start.',
              body: 'Expand brackets, write roots and fractions as powers. Each later step is then a plain sum of powers.',
              state: '$f(x) = x^4 - 2x^3 + 5x$, already a sum of powers',
            },
            {
              title: 'Differentiate once and simplify fully.',
              body: `The ${link('derivatives.power-rule', 'power rule')} term by term. Collect like terms before going on.`,
              state: "$f'(x) = 4x^3 - 6x^2 + 5$",
              atomic: 'power-rule',
            },
            {
              title: 'Differentiate the result; repeat to the order required.',
              body: 'Each line is the derivative of the line above. Label them $f\'\'$, $f\'\'\'$, $f^{(4)}$ so the order is never lost.',
              state: "$f''(x) = 12x^2 - 12x,\\quad f'''(x) = 24x - 12,\\quad f^{(4)}(x) = 24,\\quad f^{(5)}(x) = 0$",
            },
            {
              title: 'For the nth derivative, write the general term from the pattern',
              body: 'and test it for $n = 1$ and $n = 2$. A polynomial of degree $d$ has $f^{(n)} = 0$ for every $n > d$.',
              state: 'degree drops by one each step; $f^{(n)}(x) = 0$ for $n \\ge 5$',
            },
          ],
        },
        examples: [
          {
            title: 'polynomial to the fourth derivative',
            badge: 'repeated',
            lines: [
              { math: '$f(x) = x^4 - 2x^3 + 5x$', why: 'find $f^{(4)}$' },
              { math: "$f' = 4x^3 - 6x^2 + 5,\\quad f'' = 12x^2 - 12x$", why: 'power rule twice' },
              { math: "$f''' = 24x - 12,\\quad f^{(4)} = 24$", why: 'twice more', answer: true },
            ],
          },
          {
            title: 'nth derivative of an exponential',
            badge: 'pattern',
            lines: [
              { math: '$f(x) = e^{3x}$', why: 'find $f^{(n)}$' },
              { math: "$f' = 3e^{3x},\\quad f'' = 9e^{3x},\\quad f''' = 27e^{3x}$", why: 'each step multiplies by $3$' },
              { math: '$f^{(n)}(x) = 3^n e^{3x}$', why: 'check: $n = 1$ gives $3e^{3x}$', answer: true },
            ],
          },
          {
            title: 'nth derivative of 1/x',
            badge: 'alternating pattern',
            lines: [
              { math: '$f(x) = x^{-1}$', why: 'rewrite as a power first' },
              { math: "$f' = -x^{-2},\\quad f'' = 2x^{-3},\\quad f''' = -6x^{-4}$", why: 'signs alternate; $1, 2, 6$ are factorials' },
              { math: '$f^{(n)}(x) = (-1)^n\\, n!\\, x^{-(n+1)}$', why: 'check: $n = 1$ gives $-x^{-2}$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Each differentiation lowers the degree of a polynomial by one, so a degree-4 polynomial is flattened to a constant after four steps and to zero after five. An exponential never flattens: each step only multiplies it by $k$. Sine and cosine cycle with period four: $\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin$.',
        },
        pitfalls: [
          {
            title: 'Not simplifying before the next step',
            wrong: "differentiating $y' = 2x(x + 1) - x^2$ with the product rule again",
            right: "simplify to $y' = x^2 + 2x$ first, then $y'' = 2x + 2$",
          },
          {
            title: 'Reading the superscript as a power',
            wrong: '$f^{(4)}(x) = (f(x))^4$',
            right: 'parentheses in the superscript mean the fourth derivative',
          },
          {
            title: 'Losing the alternating sign',
            wrong: '$\\frac{d^n}{dx^n}\\frac{1}{x} = n!\\,x^{-(n+1)}$',
            right: '$(-1)^n\\, n!\\, x^{-(n+1)}$; the check at $n = 1$ shows the minus sign',
          },
        ],
        related: ['concavity-inflection-points', 'critical-points', 'composite-functions'],
        builtOn: [
          { label: 'Higher-order derivatives', url: ruleUrl('lesson.higher-order.definition') },
          { label: 'Power rule', url: ruleUrl('derivatives.power-rule') },
          { label: 'Exponential derivative', url: ruleUrl('derivatives.exponential') },
        ],
      },
    },
    {
      id: 'tangent-normal-lines',
      slug: 'tangent-normal-lines',
      name: 'How to find tangent and normal lines',
      description: 'The line through a point of the curve with slope $f\'(a)$, and the perpendicular line.',
      uses: ['derivative at a point', 'point-slope form'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Tangent and Normal Lines to a Curve | Learn Math Class',
        description:
          "Find the tangent line at a point: compute f(a), evaluate f'(a), use point-slope form; the normal has slope -1/f'(a). Worked examples and common mistakes.",
        keywords: ['how to find the tangent line', 'equation of tangent line', 'normal line equation', 'tangent line at a point examples', 'tangent parallel to a line'],
      },
      page: {
        h1: 'How to Find Tangent and Normal Lines',
        lead:
          'The derivative at a point is the slope of the tangent there. With the point and the slope, point-slope form gives the tangent line. The normal line goes through the same point at a right angle, so its slope is the negative reciprocal.',
        recognize:
          '"Find the equation of the tangent (or normal) to $y = f(x)$ at $x = a$", "at the point $(a, b)$", "parallel to the line ...", "where is the tangent horizontal". Test: the answer is a line, and you need the slope of the curve at one point.',
        recognizeNote: `Tangent lines are introduced in ${link('lesson.graph-analysis.tangent-lines', 'Tangent Lines')} of the graph analysis lesson; the formula is the ${link('derivatives.tangent-line-equation', 'tangent line equation')}.`,
        steps: {
          traceLabel: 'On $f(x) = \\sqrt{x}$ at $x = 4$',
          items: [
            {
              title: 'Find the point.',
              body: 'If only $x = a$ is given, compute $f(a)$. The tangent and the normal both pass through $(a, f(a))$.',
              state: '$f(4) = 2$, point $(4, 2)$',
            },
            {
              title: "Differentiate f and evaluate at a.",
              body: `Here the ${link('derivatives.power-rule', 'power rule')} on $x^{1/2}$. The slope must come out as a number, not an expression in $x$.`,
              state: "$f'(x) = \\frac{1}{2\\sqrt{x}},\\quad f'(4) = \\frac{1}{4}$",
              atomic: 'power-rule',
            },
            {
              title: 'Write the tangent in point-slope form and simplify.',
              body: `$y - f(a) = f'(a)(x - a)$, the ${link('derivatives.tangent-line-equation', 'tangent line equation')}.`,
              state: '$y - 2 = \\tfrac{1}{4}(x - 4) \\;\\Rightarrow\\; y = \\tfrac{1}{4}x + 1$',
            },
            {
              title: 'For the normal, use the negative reciprocal slope.',
              body: "$m_\\perp = -\\frac{1}{f'(a)}$ through the same point. If $f'(a) = 0$ the normal is the vertical line $x = a$.",
              state: '$m_\\perp = -4$: $y - 2 = -4(x - 4) \\;\\Rightarrow\\; y = -4x + 18$',
            },
          ],
        },
        examples: [
          {
            title: 'tangent and normal to a root',
            badge: 'basic',
            lines: [
              { math: '$f(x) = \\sqrt{x}$ at $x = 4$', why: 'point $(4, 2)$' },
              { math: "$f'(4) = \\frac{1}{2\\sqrt{4}} = \\frac{1}{4}$", why: 'slope of the tangent' },
              { math: '$y = \\tfrac{1}{4}x + 1$', why: 'tangent' },
              { math: '$y = -4x + 18$', why: 'normal: slope $-4$ through $(4, 2)$', answer: true },
            ],
          },
          {
            title: 'tangents parallel to a given line',
            badge: 'solve for the point',
            lines: [
              { math: '$y = x^3 - 3x$, tangent parallel to $y = 9x + 1$', why: 'need $f\'(x) = 9$' },
              { math: '$3x^2 - 3 = 9 \\;\\Rightarrow\\; x = \\pm 2$', why: 'solve for $x$' },
              { math: '$(2, 2)$ and $(-2, -2)$', why: 'the two points of tangency' },
              { math: '$y = 9x - 16$ and $y = 9x + 16$', why: 'point-slope form at each', answer: true },
            ],
          },
          {
            title: 'tangent to an implicit curve',
            badge: 'with implicit differentiation',
            lines: [
              { math: '$x^2 + y^2 = 25$ at $(3, 4)$', why: 'slope from implicit differentiation' },
              { math: "$y' = -\\frac{x}{y} = -\\frac{3}{4}$", why: 'see the implicit differentiation method' },
              { math: '$y - 4 = -\\tfrac{3}{4}(x - 3) \\;\\Rightarrow\\; y = -\\tfrac{3}{4}x + \\tfrac{25}{4}$', why: 'tangent' },
              { math: '$y = \\tfrac{4}{3}x$', why: 'normal: slope $\\frac{4}{3}$; it passes through the centre', answer: true },
            ],
          },
        ],
        visual: {
          component: 'FunctionTangentLine',
          caption:
            'Move the point along the curve. The tangent follows the derivative: its slope is $f\'$ at that point, and nowhere else. The normal is the line through the same point at a right angle, slope $-1/f\'(a)$; where the tangent is horizontal the normal is vertical.',
        },
        pitfalls: [
          {
            title: 'Using f(a) as the slope',
            wrong: 'tangent to $\\sqrt{x}$ at $4$ has slope $2$',
            right: "the slope is $f'(4) = \\frac{1}{4}$; $2$ is the $y$-coordinate",
          },
          {
            title: 'Leaving x in the slope',
            wrong: '$y - 2 = \\frac{1}{2\\sqrt{x}}(x - 4)$',
            right: "evaluate $f'$ at $a$ first; the slope of a line is a number",
          },
          {
            title: 'Normal slope as the negative of the tangent slope',
            wrong: '$m_\\perp = -\\tfrac{1}{4}$',
            right: '$m_\\perp = -\\frac{1}{m} = -4$',
          },
          {
            title: 'Giving up at a vertical tangent',
            wrong: "$y = \\sqrt[3]{x}$ has no tangent at $0$ because $f'$ is undefined",
            right: 'the tangent is the vertical line $x = 0$ and the normal is $y = 0$',
          },
        ],
        related: ['linear-approximation', 'implicit-differentiation', 'parametric-differentiation'],
        builtOn: [
          { label: 'Tangent line equation', url: ruleUrl('derivatives.tangent-line-equation') },
          { label: 'Power rule', url: ruleUrl('derivatives.power-rule') },
          { label: 'Tangent lines (lesson)', url: ruleUrl('lesson.graph-analysis.tangent-lines') },
        ],
      },
    },
    {
      id: 'linear-approximation',
      slug: 'linear-approximation',
      name: 'How to use linear approximation',
      description: 'Estimate $f(x)$ near $a$ with the tangent line, and small changes with differentials.',
      uses: ['tangent line', 'differential'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Linear Approximation and Differentials | Learn Math Class',
        description:
          "Estimate values and changes with the tangent line: pick a nearby easy point, find f(a) and f'(a), evaluate L(x) = f(a) + f'(a)(x - a). Examples and mistakes.",
        keywords: ['linear approximation', 'how to use linear approximation', 'linearization examples', 'differentials to estimate error', 'tangent line approximation'],
      },
      page: {
        h1: 'How to Use Linear Approximation',
        lead:
          'Near a point $a$, a differentiable function is almost its tangent line. Replace $f(x)$ by $L(x) = f(a) + f\'(a)(x - a)$ to estimate values, and use the differential $dy = f\'(a)\\,dx$ to estimate small changes and errors.',
        recognize:
          '"Estimate $\\sqrt{4.1}$ without a calculator", "approximate $\\sin 0.1$", "use differentials to estimate the change in volume if the radius changes by $0.02$", "estimate the error in ...". Test: a hard value sits next to an easy one, or a small change $dx$ is given and the resulting change in $f$ is asked.',
        recognizeNote: `The idea is developed under ${link('lesson.differentials.linear-approximation', 'Linear Approximation')} in the differentials lesson; the differential $dy$ itself is defined in ${link('lesson.differentials.dy', 'The Differential dy')}.`,
        methods: [
          {
            name: 'Tangent line L(x)',
            tag: 'for estimating a value',
            preferred: true,
            formula: "L(x) = f(a) + f'(a)(x - a)",
            body: `The ${link('derivatives.linear-approximation', 'linear approximation formula')}: read the height of the tangent line instead of the curve.`,
          },
          {
            name: 'Differentials dy',
            tag: 'for changes and errors',
            formula: "dy = f'(a)\\,dx \\approx \\Delta y",
            body: `The same line written as a change: the ${link('derivatives.differential', 'differential')} $dy$ estimates the true change $\\Delta y$ for a small $dx$. Relative error: $\\frac{dy}{y}$.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\sqrt{4.1}$',
          items: [
            {
              title: 'Choose the function and a nearby easy point a.',
              body: 'Pick $a$ where $f(a)$ and $f\'(a)$ are exact and as close to $x$ as possible.',
              state: '$f(x) = \\sqrt{x},\\quad a = 4,\\quad x = 4.1$',
            },
            {
              title: "Compute f(a) and f'(a).",
              body: `Here the ${link('derivatives.power-rule', 'power rule')} on $x^{1/2}$.`,
              state: "$f(4) = 2,\\quad f'(x) = \\frac{1}{2\\sqrt{x}},\\quad f'(4) = \\frac{1}{4}$",
              atomic: 'power-rule',
            },
            {
              title: 'Write the tangent line L(x).',
              body: `The ${link('derivatives.linear-approximation', 'linear approximation')} $L(x) = f(a) + f'(a)(x - a)$.`,
              state: '$L(x) = 2 + \\tfrac{1}{4}(x - 4)$',
            },
            {
              title: 'Evaluate L at the hard x.',
              body: 'Only arithmetic is left.',
              state: '$L(4.1) = 2 + \\tfrac{1}{4}(0.1) = 2.025$',
            },
            {
              title: 'Judge the error.',
              body: 'Where $f$ is concave down the tangent lies above the curve, so the estimate is too large; concave up, too small. The error grows with $|x - a|$ and with $|f\'\'|$.',
              state: "$f'' < 0$, so $2.025$ is slightly high; the true value is $2.0248\\ldots$",
            },
          ],
        },
        examples: [
          {
            title: 'a square root',
            badge: 'value',
            lines: [
              { math: '$\\sqrt{4.1} \\approx ?$', why: 'nearest perfect square: $a = 4$' },
              { math: '$L(x) = 2 + \\tfrac{1}{4}(x - 4)$', why: '$f(4) = 2$, $f\'(4) = \\frac{1}{4}$' },
              { math: '$\\sqrt{4.1} \\approx 2.025$', why: 'true value $2.0248$', answer: true },
            ],
          },
          {
            title: 'sine of a small angle',
            badge: 'value at a = 0',
            lines: [
              { math: '$\\sin 0.1 \\approx ?$', why: '$a = 0$, radians' },
              { math: '$f(0) = 0,\\quad f\'(0) = \\cos 0 = 1$', why: 'tangent at the origin' },
              { math: '$L(x) = x \\;\\Rightarrow\\; \\sin 0.1 \\approx 0.1$', why: 'true value $0.0998$', answer: true },
            ],
          },
          {
            title: 'error in a volume from an error in the radius',
            badge: 'differentials',
            lines: [
              { math: 'sphere, $r = 10$ cm measured to $\\pm 0.1$ cm; error in $V$?', why: 'small change $dr = 0.1$' },
              { math: '$V = \\tfrac{4}{3}\\pi r^3 \\;\\Rightarrow\\; dV = 4\\pi r^2\\,dr$', why: 'differential' },
              { math: '$dV = 4\\pi(100)(0.1) = 40\\pi \\approx 126$ cm$^3$', why: 'substitute' },
              { math: '$\\frac{dV}{V} = 3\\,\\frac{dr}{r} = 3\\%$', why: 'relative error: three times that of $r$', answer: true },
            ],
          },
        ],
        visual: {
          component: 'FunctionTangentLine',
          caption:
            'Zoom in at the point of tangency and the curve and its tangent become indistinguishable. Linear approximation is reading the tangent line\'s height instead of the curve\'s. The further you move from $a$ the larger the gap, and the gap grows with the curvature $|f\'\'|$.',
        },
        pitfalls: [
          {
            title: 'Choosing a far point',
            wrong: '$\\sqrt{4.1}$ from $a = 9$',
            right: 'the nearest value with an exact root, $a = 4$',
          },
          {
            title: 'Forgetting f(a)',
            wrong: "$L(x) = f'(a)(x - a)$",
            right: "$L(x) = f(a) + f'(a)(x - a)$",
          },
          {
            title: 'Degrees in a trig approximation',
            wrong: '$\\sin 5^\\circ \\approx 5$',
            right: 'convert first: $5^\\circ = 0.0873$ rad, so $\\sin 5^\\circ \\approx 0.0873$',
          },
          {
            title: 'Taking dy for the exact change',
            wrong: '$dy$ is the exact change in $y$',
            right: '$dy$ is the tangent-line estimate of $\\Delta y$; they agree only for small $dx$',
          },
        ],
        related: ['tangent-normal-lines', 'concavity-inflection-points', 'critical-points'],
        builtOn: [
          { label: 'Linear approximation', url: ruleUrl('derivatives.linear-approximation') },
          { label: 'Differential', url: ruleUrl('derivatives.differential') },
          { label: 'Tangent line equation', url: ruleUrl('derivatives.tangent-line-equation') },
        ],
      },
    },
    {
      id: 'critical-points',
      slug: 'critical-points',
      name: 'How to find critical points and extrema',
      description: "Solve $f'(x) = 0$, then classify each point as a maximum, minimum or neither.",
      uses: ['first derivative test', 'second derivative test'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Critical Points and Extrema (Step by Step) | Learn Math Class',
        description:
          "Find critical points: solve f'(x) = 0, check where f' is undefined, then classify each with the first or second derivative test. Worked examples and mistakes.",
        keywords: ['how to find critical points', 'critical points and extrema', 'first derivative test steps', 'second derivative test examples', 'local maximum and minimum'],
      },
      page: {
        h1: 'How to Find Critical Points and Extrema',
        lead:
          'Critical points are the places where $f\'(x) = 0$ or $f\'$ does not exist. Find them, then decide for each one whether it is a maximum, a minimum or neither, with the first or the second derivative test.',
        recognize:
          'The question says **maximum**, **minimum**, **local extrema**, **critical points**, **turning points**, or "where is $f$ largest on $[a, b]$". You have an explicit formula for $f$. Test: the question is about the highest or lowest points of the graph, not about its slope at a given point.',
        recognizeNote: `Critical points are defined in ${link('lesson.graph-analysis.critical-points', 'Critical Points')} of the graph analysis lesson, and the two tests in ${link('lesson.graph-analysis.first-derivative-test', 'The First Derivative Test')} and ${link('lesson.graph-analysis.second-derivative-test', 'The Second Derivative Test')}.`,
        methods: [
          {
            name: 'First derivative test',
            tag: 'always works',
            preferred: true,
            formula: "f' : {+}\\to{-} \\text{ max}, \\qquad f' : {-}\\to{+} \\text{ min}",
            body: `Check the sign of $f'$ on each side of the critical point. The ${link('derivatives.first-derivative-test', 'first derivative test')} works at every critical point, including those where $f'$ is undefined.`,
          },
          {
            name: 'Second derivative test',
            tag: "faster when f'' is easy",
            formula: "f''(c) < 0 \\Rightarrow \\text{max}, \\qquad f''(c) > 0 \\Rightarrow \\text{min}",
            body: `Evaluate $f''$ at the critical point. The ${link('derivatives.second-derivative-test', 'second derivative test')} says nothing when $f''(c) = 0$ or does not exist; fall back on the first derivative test then.`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = x^3 - 3x^2 + 1$',
          items: [
            {
              title: 'Differentiate f and factor the result.',
              body: `Here the ${link('derivatives.power-rule', 'power rule')}; factoring makes the zeros visible.`,
              state: "$f'(x) = 3x^2 - 6x = 3x(x - 2)$",
              atomic: 'power-rule',
            },
            {
              title: "Solve f'(x) = 0 and list where f' does not exist",
              body: `inside the domain of $f$. Both kinds are critical points by the ${link('derivatives.critical-point-condition', 'critical point condition')}.`,
              state: '$x = 0$ and $x = 2$; $f\' $ exists everywhere',
            },
            {
              title: 'Classify each point with a test.',
              body: `Either a sign chart of $f'$ (${link('derivatives.first-derivative-test', 'first derivative test')}) or the sign of $f''$ at the point (${link('derivatives.second-derivative-test', 'second derivative test')}).`,
              state: "$f''(x) = 6x - 6$: $f''(0) = -6 < 0$ max, $f''(2) = 6 > 0$ min",
            },
            {
              title: 'Find the function values,',
              body: 'and on a closed interval compare them with the values at the endpoints. The largest of all is the absolute maximum.',
              state: 'local max $(0, 1)$, local min $(2, -3)$',
            },
          ],
        },
        examples: [
          {
            title: 'cubic polynomial',
            badge: 'second derivative test',
            lines: [
              { math: '$f(x) = x^3 - 3x^2 + 1$', why: 'find and classify the extrema' },
              { math: "$f'(x) = 3x(x - 2) = 0 \\;\\Rightarrow\\; x = 0, 2$", why: 'critical points' },
              { math: "$f''(0) = -6 < 0,\\quad f''(2) = 6 > 0$", why: 'second derivative test' },
              { math: 'local max $(0, 1)$, local min $(2, -3)$', why: 'function values', answer: true },
            ],
          },
          {
            title: 'absolute extrema on a closed interval',
            badge: 'endpoints count',
            lines: [
              { math: '$f(x) = x^2 e^{-x}$ on $[0, 3]$', why: 'largest and smallest value' },
              { math: "$f'(x) = e^{-x}(2x - x^2) = x\\,e^{-x}(2 - x)$", why: 'product rule, factored' },
              { math: '$x = 0,\\; x = 2$', why: 'critical points, both in $[0, 3]$' },
              { math: '$f(0) = 0,\\quad f(2) = \\frac{4}{e^2} \\approx 0.54,\\quad f(3) = \\frac{9}{e^3} \\approx 0.45$', why: 'critical points and endpoints' },
              { math: 'absolute max $\\frac{4}{e^2}$ at $x = 2$, absolute min $0$ at $x = 0$', why: 'compare all candidates', answer: true },
            ],
          },
          {
            title: 'critical point where the derivative is undefined',
            badge: 'first derivative test',
            lines: [
              { math: '$f(x) = x^{2/3}$', why: 'a cusp at the origin' },
              { math: "$f'(x) = \\tfrac{2}{3}x^{-1/3}$", why: 'never $0$, undefined at $x = 0$' },
              { math: "$f' < 0$ for $x < 0,\\quad f' > 0$ for $x > 0$", why: 'sign change $-$ to $+$' },
              { math: 'local (and absolute) min $(0, 0)$', why: 'first derivative test; $f\'\'$ is no help here', answer: true },
            ],
          },
        ],
        visual: {
          component: 'FunctionOptimization',
          caption:
            'Change the function and the interval and watch $f$ and $f\'$ together: a maximum sits where $f\'$ crosses the axis from positive to negative, a minimum where it crosses from negative to positive. On a closed interval an endpoint can beat every interior critical point.',
        },
        pitfalls: [
          {
            title: "Treating every zero of f' as an extremum",
            wrong: '$f(x) = x^3$ has an extremum at $0$',
            right: "$f'$ does not change sign at $0$: neither max nor min",
          },
          {
            title: "Forgetting where f' is undefined",
            wrong: "$x^{2/3}$ has no critical points because $f' \\neq 0$",
            right: "$f'$ is undefined at $0$, which is a critical point and a minimum",
          },
          {
            title: 'Skipping the endpoints',
            wrong: 'on $[0, 3]$ the maximum is the critical point, no check needed',
            right: 'compare $f(0)$ and $f(3)$ too; here the critical point wins, but it had to be checked',
          },
          {
            title: "Reading f''(c) = 0 as \"neither\"",
            wrong: "$f(x) = x^4$: $f''(0) = 0$, so no extremum",
            right: 'the test is inconclusive; the first derivative test shows a minimum at $0$',
          },
        ],
        related: ['increasing-decreasing-intervals', 'concavity-inflection-points', 'optimization-problems'],
        builtOn: [
          { label: 'Critical point condition', url: ruleUrl('derivatives.critical-point-condition') },
          { label: 'First derivative test', url: ruleUrl('derivatives.first-derivative-test') },
          { label: 'Second derivative test', url: ruleUrl('derivatives.second-derivative-test') },
        ],
      },
    },

    {
      id: 'increasing-decreasing-intervals',
      slug: 'increasing-decreasing-intervals',
      name: 'How to find where a function is increasing or decreasing',
      description: 'Sign chart of $f\'$: the intervals where the graph rises and where it falls.',
      uses: ['sign of the derivative', 'critical points'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Where a Function Is Increasing or Decreasing | Learn Math Class',
        description:
          "Find increasing and decreasing intervals: differentiate, factor f', mark its zeros and domain breaks, test the sign on each interval. Examples and mistakes.",
        keywords: ['increasing and decreasing intervals', 'how to find where a function is increasing', 'sign chart of the derivative', 'increasing decreasing test examples'],
      },
      page: {
        h1: 'How to Find Where a Function Is Increasing or Decreasing',
        lead:
          'A function increases where its derivative is positive and decreases where it is negative. Find the points where $f\'$ is zero or undefined, test the sign of $f\'$ between them, and read off the intervals.',
        recognize:
          '"On what intervals is $f$ increasing?", "where is the function decreasing?", "make a sign chart of $f\'$", or as the first step of the first derivative test and of curve sketching. Test: the answer is a list of intervals of $x$.',
        recognizeNote: `The connection between the sign of $f'$ and the direction of the graph is explained in ${link('lesson.graph-analysis.increasing-decreasing', 'Increasing and Decreasing Functions')}.`,
        steps: {
          traceLabel: 'On $f(x) = x^3 - 3x^2 - 9x + 5$',
          items: [
            {
              title: "Differentiate and factor f' completely.",
              body: `The ${link('derivatives.power-rule', 'power rule')}, then take out common factors and factor the rest. The sign of a product is easy to read; the sign of a sum is not.`,
              state: "$f'(x) = 3x^2 - 6x - 9 = 3(x + 1)(x - 3)$",
              atomic: 'power-rule',
            },
            {
              title: 'Mark the partition points:',
              body: `the zeros of $f'$ (${link('derivatives.critical-point-condition', 'critical points')}) and every $x$ where $f'$ or $f$ itself is undefined. These cut the number line into intervals.`,
              state: '$x = -1$ and $x = 3$; no breaks in the domain',
            },
            {
              title: "Test the sign of f' on each interval.",
              body: 'Pick one convenient value inside each interval; the sign of each factor is enough, you do not need the value.',
              state: "$f'(-2) = 3(-)(-) > 0,\\quad f'(0) = 3(+)(-) < 0,\\quad f'(4) = 3(+)(+) > 0$",
            },
            {
              title: 'Read off the intervals.',
              body: `Increasing where $f' > 0$, decreasing where $f' < 0$ (${link('lesson.graph-analysis.increasing-decreasing', 'increasing and decreasing functions')}). Write open intervals and keep intervals separated by a domain break apart.`,
              state: 'increasing on $(-\\infty, -1) \\cup (3, \\infty)$, decreasing on $(-1, 3)$',
            },
          ],
        },
        examples: [
          {
            title: 'cubic polynomial',
            badge: 'basic',
            lines: [
              { math: '$f(x) = x^3 - 3x^2 - 9x + 5$', why: 'intervals of increase and decrease' },
              { math: "$f'(x) = 3(x + 1)(x - 3)$", why: 'factored derivative' },
              { math: '$+ \\;\\big|_{-1}\\; - \\;\\big|_{3}\\; +$', why: 'sign chart from test points $-2, 0, 4$' },
              { math: 'increasing on $(-\\infty, -1) \\cup (3, \\infty)$, decreasing on $(-1, 3)$', why: 'read off', answer: true },
            ],
          },
          {
            title: 'rational function with a domain break',
            badge: 'break at x = 1',
            lines: [
              { math: '$f(x) = \\frac{x^2}{x - 1}$', why: 'undefined at $x = 1$' },
              { math: "$f'(x) = \\frac{2x(x - 1) - x^2}{(x - 1)^2} = \\frac{x(x - 2)}{(x - 1)^2}$", why: 'quotient rule, factored' },
              { math: 'partition points $0,\\; 1,\\; 2$', why: 'zeros of $f\'$ and the break' },
              { math: '$+ \\;\\big|_{0}\\; - \\;\\big|_{1}\\; - \\;\\big|_{2}\\; +$', why: 'the denominator is always positive' },
              { math: 'increasing on $(-\\infty, 0) \\cup (2, \\infty)$, decreasing on $(0, 1) \\cup (1, 2)$', why: 'not $(0, 2)$: $f$ is undefined at $1$', answer: true },
            ],
          },
          {
            title: 'with an exponential factor',
            badge: 'one critical point',
            lines: [
              { math: '$f(x) = x\\,e^{-x}$', why: 'product rule' },
              { math: "$f'(x) = e^{-x}(1 - x)$", why: '$e^{-x} > 0$ always, so only $1 - x$ matters' },
              { math: 'increasing on $(-\\infty, 1)$, decreasing on $(1, \\infty)$', why: 'maximum at $x = 1$', answer: true },
            ],
          },
        ],
        visual: {
          component: 'FunctionOptimization',
          caption:
            'Watch $f$ and $f\'$ together: wherever the graph of $f\'$ is above the axis, $f$ climbs; wherever it is below, $f$ falls. The crossings of $f\'$ with the axis are exactly the turning points of $f$.',
        },
        pitfalls: [
          {
            title: "Testing the sign of f instead of f'",
            wrong: '$f(0) = 5 > 0$, so $f$ is increasing at $0$',
            right: "$f'(0) = -9 < 0$ decides: $f$ is decreasing there",
          },
          {
            title: 'Joining intervals across a hole',
            wrong: 'decreasing on $(0, 2)$',
            right: 'decreasing on $(0, 1) \\cup (1, 2)$, since $f$ is not defined at $1$',
          },
          {
            title: 'Assuming the sign flips at every partition point',
            wrong: "$f' = (x - 1)^2$ changes sign at $1$",
            right: 'a squared factor keeps its sign; always test both sides',
          },
        ],
        related: ['critical-points', 'concavity-inflection-points', 'curve-sketching'],
        builtOn: [
          { label: 'Increasing and decreasing (lesson)', url: ruleUrl('lesson.graph-analysis.increasing-decreasing') },
          { label: 'Critical point condition', url: ruleUrl('derivatives.critical-point-condition') },
          { label: 'First derivative test', url: ruleUrl('derivatives.first-derivative-test') },
        ],
      },
    },
    {
      id: 'concavity-inflection-points',
      slug: 'concavity-inflection-points',
      name: 'How to find concavity and inflection points',
      description: 'Sign chart of $f\'\'$: which way the graph bends, and where the bending switches.',
      uses: ['second derivative', 'sign chart'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Concavity and Inflection Points | Learn Math Class',
        description:
          "Concavity and inflection points: differentiate twice, factor f'', find where it is zero or undefined, test its sign on each interval. Examples and mistakes.",
        keywords: ['how to find inflection points', 'concavity and inflection points', 'concave up concave down test', 'second derivative sign chart', 'inflection point examples'],
      },
      page: {
        h1: 'How to Find Concavity and Inflection Points',
        lead:
          'The second derivative tells you which way the graph bends: concave up where $f\'\' > 0$, concave down where $f\'\' < 0$. An inflection point is where the bending switches, so $f\'\'$ changes sign there.',
        recognize:
          '"Determine the concavity", "find the inflection points", "where is the graph concave up", or as a step in curve sketching and in the second derivative test. Test: the question is about bending, not about rising and falling.',
        recognizeNote: `Both ideas are developed in ${link('lesson.graph-analysis.concavity', 'Concavity')} and ${link('lesson.graph-analysis.inflection-points', 'Inflection Points')} of the graph analysis lesson.`,
        steps: {
          traceLabel: 'On $f(x) = x^4 - 6x^2 + 1$',
          items: [
            {
              title: "Differentiate twice and factor f''.",
              body: `Two rounds of the ${link('derivatives.power-rule', 'power rule')}. Factor so the sign can be read off.`,
              state: "$f'(x) = 4x^3 - 12x,\\quad f''(x) = 12x^2 - 12 = 12(x - 1)(x + 1)$",
              atomic: 'power-rule',
            },
            {
              title: "Find where f'' = 0 or is undefined.",
              body: `These are the only candidates for inflection points (${link('derivatives.inflection-point-condition', 'inflection point condition')}).`,
              state: '$x = -1$ and $x = 1$',
            },
            {
              title: "Test the sign of f'' on each interval.",
              body: `One test value per interval. Positive means concave up, negative concave down (${link('derivatives.concavity-test', 'concavity from the second derivative')}).`,
              state: "$f''(-2) > 0,\\quad f''(0) < 0,\\quad f''(2) > 0$",
            },
            {
              title: 'Read off the concavity and keep only true sign changes as inflection points.',
              body: 'Give each inflection point as a point $(x, f(x))$, not just an $x$-value.',
              state: 'concave up on $(-\\infty, -1) \\cup (1, \\infty)$, down on $(-1, 1)$; inflection points $(\\pm 1, -4)$',
            },
          ],
        },
        examples: [
          {
            title: 'quartic with two inflection points',
            badge: 'basic',
            lines: [
              { math: '$f(x) = x^4 - 6x^2 + 1$', why: 'concavity and inflection points' },
              { math: "$f''(x) = 12(x - 1)(x + 1)$", why: 'second derivative, factored' },
              { math: '$+ \\;\\big|_{-1}\\; - \\;\\big|_{1}\\; +$', why: 'sign chart of $f\'\'$' },
              { math: 'up on $(-\\infty, -1) \\cup (1, \\infty)$, down on $(-1, 1)$; inflection points $(\\pm 1, -4)$', why: '$f(\\pm 1) = 1 - 6 + 1$', answer: true },
            ],
          },
          {
            title: "a zero of f'' that is not an inflection point",
            badge: 'no sign change',
            lines: [
              { math: '$f(x) = x^4$', why: 'inflection points?' },
              { math: "$f''(x) = 12x^2 = 0 \\;\\Rightarrow\\; x = 0$", why: 'the only candidate' },
              { math: "$f'' \\ge 0$ on both sides of $0$", why: 'no sign change' },
              { math: 'no inflection point; concave up everywhere', why: 'a candidate is not a result', answer: true },
            ],
          },
          {
            title: "inflection where f'' is undefined",
            badge: 'vertical tangent',
            lines: [
              { math: '$f(x) = x^{1/3}$', why: 'cube root' },
              { math: "$f''(x) = -\\tfrac{2}{9}x^{-5/3}$", why: 'undefined at $0$' },
              { math: "$f'' > 0$ for $x < 0,\\quad f'' < 0$ for $x > 0$", why: 'sign change at $0$' },
              { math: 'inflection point $(0, 0)$, with a vertical tangent', why: 'up to the left, down to the right', answer: true },
            ],
          },
        ],
        visual: {
          component: 'FunctionConcavity',
          caption:
            'Slide along the curve: where $f\'\'$ is positive the tangent lies below the graph and turns counterclockwise as you move right; where $f\'\'$ is negative it lies above and turns clockwise. At an inflection point the tangent crosses the curve.',
        },
        pitfalls: [
          {
            title: "Calling every zero of f'' an inflection point",
            wrong: '$x^4$ has an inflection point at $0$',
            right: "$f''$ does not change sign there; no inflection point",
          },
          {
            title: 'Giving only the x-value',
            wrong: 'inflection point $x = 1$',
            right: 'inflection point $(1, -4)$',
          },
          {
            title: 'Mixing up concavity and increase',
            wrong: 'concave up means increasing',
            right: '$e^{-x}$ is concave up and decreasing; the two are independent',
          },
          {
            title: "Ignoring points where f'' is undefined",
            wrong: "$x^{1/3}$ has no inflection point since $f'' \\neq 0$",
            right: "$f''$ is undefined at $0$ and changes sign there",
          },
        ],
        related: ['critical-points', 'increasing-decreasing-intervals', 'curve-sketching'],
        builtOn: [
          { label: 'Concavity from the second derivative', url: ruleUrl('derivatives.concavity-test') },
          { label: 'Inflection point condition', url: ruleUrl('derivatives.inflection-point-condition') },
          { label: 'Second derivative test', url: ruleUrl('derivatives.second-derivative-test') },
        ],
      },
    },
    {
      id: 'curve-sketching',
      slug: 'curve-sketching',
      name: 'How to sketch a curve using derivatives',
      description: 'Domain, asymptotes, rise and fall, bending and key points, put together into one graph.',
      uses: ['first derivative', 'second derivative', 'limits'],
      level: 'composite',
      tag: 'Composite',
      meta: '6 steps · 2 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Sketch a Curve Using Derivatives (Step by Step) | Learn Math Class',
        description:
          "Sketch a graph from its derivatives: domain, intercepts, asymptotes, increase and decrease from f', concavity from f'', key points. Examples and mistakes.",
        keywords: ['curve sketching', 'how to sketch a curve using derivatives', 'curve sketching steps', 'graph a function with first and second derivative', 'curve sketching examples'],
      },
      page: {
        h1: 'How to Sketch a Curve Using Derivatives',
        lead:
          'Curve sketching puts the earlier methods together: domain and intercepts, asymptotes, where the function rises and falls, where it bends, and the key points. Each item is one line of work; the sketch is the summary of the table.',
        recognize:
          '"Sketch the graph of $f$", "analyze the function", "use the first and second derivatives to graph", or a question that lists several items at once: intervals of increase, extrema, concavity, inflection points, asymptotes.',
        recognizeNote: `The full procedure is described in ${link('lesson.graph-analysis.curve-sketching', 'Curve Sketching')} of the graph analysis lesson.`,
        steps: {
          traceLabel: 'On $f(x) = \\frac{x^2}{x^2 - 1}$',
          items: [
            {
              title: 'Domain, symmetry, intercepts.',
              body: 'Where is $f$ undefined? Is it even or odd? Where does it cross the axes?',
              state: '$x \\neq \\pm 1$; even; passes through $(0, 0)$',
            },
            {
              title: 'Asymptotes.',
              body: 'Vertical where the denominator is $0$ (and the numerator is not); horizontal or oblique from the behaviour as $x \\to \\pm\\infty$.',
              state: 'vertical $x = \\pm 1$; horizontal $y = 1$',
            },
            {
              title: 'First derivative: critical points, rise and fall, extrema.',
              body: `Follow the method for [increasing and decreasing intervals](!${HUB}/increasing-decreasing-intervals) and classify with the ${link('derivatives.first-derivative-test', 'first derivative test')}.`,
              state: "$f'(x) = \\frac{-2x}{(x^2 - 1)^2}$: up on $(-\\infty, -1) \\cup (-1, 0)$, down on $(0, 1) \\cup (1, \\infty)$; local max $(0, 0)$",
            },
            {
              title: 'Second derivative: concavity and inflection points.',
              body: `Follow the method for [concavity and inflection points](!${HUB}/concavity-inflection-points). A sign change of $f''$ outside the domain is not an inflection point.`,
              state: "$f''(x) = \\frac{6x^2 + 2}{(x^2 - 1)^3}$: up for $|x| > 1$, down for $|x| < 1$; no inflection points",
            },
            {
              title: 'Plot the skeleton, then draw each piece.',
              body: 'Draw the asymptotes and the key points first. Then draw one piece per interval of the domain, rising or falling and bending as the table says, approaching the asymptotes at the ends.',
              state: 'three pieces: left branch down to $y = 1$ from above, a cap through $(0, 0)$ below the axis, right branch mirroring the left',
            },
            {
              title: 'Check the sketch against every row of the table.',
              body: 'A maximum must sit where $f\'$ changes from $+$ to $-$ and the curve there must be concave down; a branch must never cross a vertical asymptote.',
              state: 'all rows agree',
            },
          ],
        },
        examples: [
          {
            title: 'rational function with three pieces',
            badge: 'full analysis',
            lines: [
              { math: '$f(x) = \\frac{x^2}{x^2 - 1}$', why: 'domain $x \\neq \\pm 1$, even, through $(0, 0)$' },
              { math: '$x = \\pm 1$ vertical, $y = 1$ horizontal', why: 'asymptotes' },
              { math: "$f'(x) = \\frac{-2x}{(x^2 - 1)^2}$", why: 'sign of $-2x$: up for $x < 0$, down for $x > 0$; max $(0, 0)$' },
              { math: "$f''(x) = \\frac{6x^2 + 2}{(x^2 - 1)^3}$", why: 'sign of $(x^2 - 1)^3$: up outside, down between' },
              { math: 'middle piece: a cap from $-\\infty$ up to $(0, 0)$ and back down; outer pieces: above $y = 1$, falling toward it on the right', why: 'the sketch', answer: true },
            ],
          },
          {
            title: 'cubic polynomial',
            badge: 'no asymptotes',
            lines: [
              { math: '$f(x) = x^3 - 3x$', why: 'odd; zeros at $0, \\pm\\sqrt{3}$' },
              { math: "$f'(x) = 3(x - 1)(x + 1)$", why: 'local max $(-1, 2)$, local min $(1, -2)$' },
              { math: "$f''(x) = 6x$", why: 'inflection point $(0, 0)$; down on the left, up on the right' },
              { math: 'an S-shape through the three zeros, turning at $(-1, 2)$ and $(1, -2)$', why: 'the sketch', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A sketch is a table turned into a picture. Each row (domain, asymptotes, sign of $f\'$, sign of $f\'\'$) fixes one feature. Draw the asymptotes first, place the extrema and inflection points, then join them with pieces that rise or fall and bend the way the table says.',
        },
        pitfalls: [
          {
            title: 'Crossing a vertical asymptote',
            wrong: 'one continuous curve through $x = 1$',
            right: 'each side of a vertical asymptote is a separate piece',
          },
          {
            title: 'Marking an inflection point outside the domain',
            wrong: "$\\frac{x^2}{x^2 - 1}$ has inflection points at $x = \\pm 1$",
            right: '$f$ is not defined there; the concavity changes across the asymptote, not at a point of the graph',
          },
          {
            title: 'Assuming the graph never meets a horizontal asymptote',
            wrong: '$y = 1$ is never reached, so stay clear of it everywhere',
            right: 'a graph may cross a horizontal asymptote at finite $x$; it only has to approach it as $x \\to \\pm\\infty$',
          },
          {
            title: 'Drawing a maximum that bends the wrong way',
            wrong: 'a hump that is concave up',
            right: "at a local maximum $f'$ changes from $+$ to $-$ and the curve is concave down",
          },
        ],
        related: ['increasing-decreasing-intervals', 'concavity-inflection-points', 'critical-points'],
        builtOn: [
          { label: 'Curve sketching (lesson)', url: ruleUrl('lesson.graph-analysis.curve-sketching') },
          { label: 'First derivative test', url: ruleUrl('derivatives.first-derivative-test') },
          { label: 'Concavity from the second derivative', url: ruleUrl('derivatives.concavity-test') },
        ],
      },
    },

    // ═══ III. Strategy ══════════════════════════════════════════════════
    {
      id: 'which-technique',
      slug: 'which-technique',
      name: 'Which differentiation technique should I use?',
      description: 'A decision tree from the shape of the function to the right technique.',
      uses: 'leads to 5 techniques',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Differentiation Technique to Use? Decision Tree | Learn Math Class',
        description:
          'Pick the right differentiation technique from the shape of the function: implicit, logarithmic, parametric, chain rule or product/quotient rule.',
        keywords: ['which differentiation technique', 'how to choose derivative rule', 'differentiation decision tree'],
      },
      page: {
        h1: 'Which Differentiation Technique Should I Use?',
        lead:
          'Look at the shape of the function, answer at most three questions, and you land on the technique that fits. Each end point opens its full method.',
        tree: {
          rootId: 'explicit',
          svgW: 900,
          nodes: {
            explicit: {
              type: 'q',
              text: 'How is y given?',
              children: [
                { label: 'inside an equation', to: 'implicit' },
                { label: 'y = f(x)', to: 'exponent' },
                { label: 'through a parameter t', to: 'parametric' },
              ],
            },
            exponent: {
              type: 'q',
              text: 'Is x in an exponent, or is it a long product?',
              children: [
                { label: 'yes', to: 'logarithmic' },
                { label: 'no', to: 'nested' },
              ],
            },
            nested: {
              type: 'q',
              text: 'Is one function inside another?',
              children: [
                { label: 'yes', to: 'composite' },
                { label: 'no', to: 'productQuotient' },
              ],
            },
            implicit: { type: 'leaf', to: 'implicit-differentiation', short: 'Implicit differentiation' },
            logarithmic: { type: 'leaf', to: 'logarithmic-differentiation', short: 'Logarithmic differentiation' },
            composite: { type: 'leaf', to: 'composite-functions', short: 'Composite functions' },
            productQuotient: { type: 'leaf', to: 'product-rule', short: 'Product / quotient rule' },
            parametric: { type: 'leaf', to: 'parametric-differentiation', short: 'Parametric differentiation' },
          },
          branches: [
            {
              condition: 'y is not isolated (e.g. $x^2 + xy + y^2 = 7$).',
              answer: `Use implicit differentiation: differentiate both sides, treating $y$ as a function of $x$ through the ${link('derivatives.chain-rule', 'chain rule')}.`,
            },
            {
              condition: '$x$ appears in an exponent, or the function is a long product or quotient.',
              answer: 'Use logarithmic differentiation.',
            },
            {
              condition: 'One function sits inside another.',
              answer: `Use the method for [differentiating composite functions](!${HUB}/composite-functions).`,
            },
            {
              condition: 'Two or more factors multiplied or divided, none nested.',
              answer: `Use the ${link('derivatives.product-rule', 'product rule')} or the ${link('derivatives.quotient-rule', 'quotient rule')} directly.`,
            },
            {
              condition: '$x$ and $y$ are both given in terms of $t$.',
              answer: 'Use parametric differentiation.',
            },
          ],
        },
        related: ['composite-functions', 'implicit-differentiation', 'logarithmic-differentiation'],
        builtOn: [
          { label: 'Chain rule', url: ruleUrl('derivatives.chain-rule') },
          { label: 'Product rule', url: ruleUrl('derivatives.product-rule') },
          { label: 'Quotient rule', url: ruleUrl('derivatives.quotient-rule') },
        ],
      },
    },

    // ═══ IV. Applied ════════════════════════════════════════════════════
    {
      id: 'related-rates-problems',
      slug: 'related-rates-problems',
      name: 'How to solve related rates problems',
      description: 'Rates of change of connected quantities.',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Related Rates Problems (Step by Step) | Learn Math Class',
        description:
          'Solve related rates problems: name the quantities, write the equation, differentiate with respect to t, substitute the instant. Ladder and cone examples.',
        keywords: ['related rates problems', 'how to solve related rates', 'related rates steps', 'related rates ladder problem', 'related rates cone problem'],
      },
      page: {
        h1: 'How to Solve Related Rates Problems',
        lead:
          'Several quantities change with time and are linked by one equation. Differentiate that equation with respect to $t$, substitute the rates and values you know, and solve for the one rate you want.',
        recognize:
          'Trigger words: **how fast**, **at what rate**, **is increasing at**, **is decreasing at**, with units per second or per minute. Two or more quantities are tied together by geometry (a sliding ladder, an inflating balloon, a filling cone, a lengthening shadow). One rate is given, another is asked **at a particular instant**.',
        setup: [
          { label: 'Picture', body: 'Draw the situation. Name every quantity that changes with a letter; write the ones that stay fixed as numbers.' },
          {
            label: 'Rates',
            body: 'Write each given rate as a derivative with respect to $t$, with its sign: $\\frac{dr}{dt} = 2$ cm/s, or $\\frac{dx}{dt} = -1$ m/s if the quantity is shrinking. Write the wanted rate with a question mark.',
          },
          {
            label: 'Equation',
            body: 'Write one equation linking the letters that holds at **every** instant: Pythagoras, an area or volume formula, similar triangles, a trig ratio.',
          },
          {
            label: 'Reduce',
            body: 'If the equation has a letter whose rate you neither know nor want, eliminate it first with a fixed relationship (similar triangles, a constant ratio).',
          },
          {
            label: 'Instant',
            body: 'Write down the values of all variables at the moment in question. Sometimes one must be computed from the others (the ladder height from the base distance).',
          },
        ],
        handoff: {
          to: 'implicit-differentiation',
          body: 'Differentiate the equation with respect to $t$. Every changing letter picks up its own rate, exactly as $y$ picks up $\\frac{dy}{dx}$ in implicit differentiation, and a product of two changing quantities needs the product rule. Only then substitute the values of the instant and solve for the unknown rate.',
        },
        interpretation:
          'Report the rate with units (m/s, cm$^2$/min) and with a sign: negative means the quantity is decreasing. Check that the sign makes physical sense (the top of a sliding ladder moves down, so $\\frac{dy}{dt} < 0$), and that no number for a changing quantity was substituted before the differentiation.',
        examples: [
          {
            title: 'sliding ladder',
            badge: 'Pythagoras',
            lines: [
              { math: '$5$ m ladder; base slides out at $1$ m/s; how fast does the top fall when the base is $3$ m out?', why: 'read the problem' },
              { math: "$x^2 + y^2 = 25,\\quad x' = 1,\\quad y' = ?$ at $x = 3$", why: 'equation, rates, instant' },
              { math: "$2x\\,x' + 2y\\,y' = 0$", why: 'differentiate with respect to $t$' },
              { math: '$y = 4$ at the instant', why: '$9 + y^2 = 25$' },
              { math: "$2(3)(1) + 2(4)\\,y' = 0 \\;\\Rightarrow\\; y' = -\\tfrac{3}{4}$ m/s", why: 'the top slides down at $0.75$ m/s', answer: true },
            ],
          },
          {
            title: 'filling cone',
            badge: 'reduce first',
            lines: [
              { math: 'inverted cone, height $12$ cm, radius $4$ cm; water in at $2$ cm$^3$/s; how fast does the level rise at $h = 6$?', why: 'read the problem' },
              { math: '$V = \\tfrac{1}{3}\\pi r^2 h,\\quad r = \\tfrac{h}{3}$', why: 'volume; similar triangles $\\frac{r}{h} = \\frac{4}{12}$' },
              { math: '$V = \\tfrac{\\pi}{27}h^3$', why: 'eliminate $r$ before differentiating' },
              { math: "$V' = \\tfrac{\\pi}{9}h^2\\,h'$", why: 'differentiate with respect to $t$' },
              { math: "$2 = \\tfrac{\\pi}{9}(36)\\,h' \\;\\Rightarrow\\; h' = \\tfrac{1}{2\\pi} \\approx 0.16$ cm/s", why: 'substitute $V\' = 2$, $h = 6$', answer: true },
            ],
          },
          {
            title: 'expanding ripple',
            badge: 'one line',
            lines: [
              { math: 'a circular ripple grows at $r\' = 2$ cm/s; how fast is the area growing when $r = 5$?', why: 'read the problem' },
              { math: "$A = \\pi r^2 \\;\\Rightarrow\\; A' = 2\\pi r\\,r'$", why: 'differentiate' },
              { math: "$A' = 2\\pi(5)(2) = 20\\pi \\approx 63$ cm$^2$/s", why: 'substitute', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A related-rates equation is a curve in the plane of two of its variables, and the moving situation is a point travelling along that curve. The two rates are the components of the point\'s velocity. Differentiating the equation is implicit differentiation with time as the hidden variable, which is why every letter gets its own rate.',
        },
        pitfalls: [
          {
            title: 'Substituting the instant before differentiating',
            wrong: '$9 + 16 = 25$, then differentiate',
            right: "differentiate $x^2 + y^2 = 25$ with letters, then put in $x = 3$, $y = 4$",
          },
          {
            title: 'Forgetting the rate on a variable',
            wrong: '$\\frac{d}{dt}(y^2) = 2y$',
            right: "$\\frac{d}{dt}(y^2) = 2y\\,\\frac{dy}{dt}$",
          },
          {
            title: 'Wrong sign on a shrinking quantity',
            wrong: "$x' = +1$ for a distance that is decreasing",
            right: 'decreasing quantities have negative rates',
          },
          {
            title: 'Differentiating with an extra variable',
            wrong: "$V' = \\tfrac{1}{3}\\pi(2r\\,r'\\,h + r^2 h')$ with $r'$ unknown",
            right: 'eliminate $r$ with $r = \\frac{h}{3}$ first, then differentiate',
          },
        ],
        related: ['implicit-differentiation', 'optimization-problems'],
        builtOn: [
          { label: 'Related rates (lesson)', url: ruleUrl('lesson.graph-analysis.related-rates') },
          { label: 'Chain rule', url: ruleUrl('derivatives.chain-rule') },
          { label: 'Product rule', url: ruleUrl('derivatives.product-rule') },
        ],
      },
    },
    {
      id: 'optimization-problems',
      slug: 'optimization-problems',
      name: 'How to solve optimization problems',
      description: 'Maximize or minimize a quantity under a constraint.',
      level: 'applied',
      tag: 'Applied',
      meta: '6 steps · 1 example',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Optimization Problems in Calculus (Step by Step) | Learn Math Class',
        description:
          'Turn an optimization word problem into a function, find its critical points and check the endpoints. Step-by-step setup with a worked fence example.',
        keywords: ['optimization problems calculus', 'how to solve optimization problems', 'max min word problems'],
      },
      page: {
        h1: 'How to Solve Optimization Problems',
        lead:
          'An optimization problem asks for the largest or smallest value of a quantity under a condition. The calculus is short; most of the work is turning the words into one function of one variable.',
        recognize:
          'The question asks for the **largest**, **smallest**, **most**, **least**, **maximum** or **minimum** of something, and gives a fixed amount or a condition: a length of fence, a volume, a cost.',
        setup: [
          { label: 'Unknowns', body: 'Draw the situation. Name every changing quantity with a letter.' },
          { label: 'Objective', body: 'Write the quantity to maximize or minimize in terms of those letters.' },
          { label: 'Constraint', body: 'Write the fixed condition as an equation and solve it for one letter.' },
          { label: 'One variable', body: 'Substitute into the objective so it depends on a single variable.' },
          { label: 'Domain', body: 'Find the values that make physical sense (lengths positive, and so on).' },
        ],
        handoff: {
          to: 'critical-points',
          body: "Differentiate the objective, solve $f'(x) = 0$, and compare the critical points with the endpoints of the domain.",
        },
        interpretation:
          'Answer the question that was asked, with units: the dimensions, the maximum value, or both. Check the answer is inside the domain.',
        examples: [
          {
            title: 'largest rectangle from 100 m of fence',
            badge: 'setup + calculus',
            lines: [
              { math: 'sides $x$, $y$; perimeter $2x + 2y = 100$', why: 'unknowns and constraint' },
              { math: '$y = 50 - x$', why: 'solve the constraint for $y$' },
              { math: '$A(x) = x(50 - x)$, $0 < x < 50$', why: 'objective in one variable, domain' },
              { math: "$A'(x) = 50 - 2x = 0 \\Rightarrow x = 25$", why: 'critical point' },
              { math: '$x = y = 25$ m, $A = 625$ m$^2$', why: 'a square; the endpoints give $A = 0$', answer: true },
            ],
          },
        ],
        pitfalls: [
          {
            title: 'Two variables left in the objective',
            wrong: 'differentiating $A = xy$ directly',
            right: 'use the constraint first, so $A$ depends on $x$ only',
          },
          {
            title: 'Ignoring the endpoints',
            wrong: 'taking the critical point as the answer without checking',
            right: 'compare the critical points with the ends of the domain',
          },
        ],
        related: ['critical-points', 'related-rates-problems'],
        builtOn: [{ label: 'Derivatives lesson', url: ruleUrl('lesson.derivatives') }],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Multi-step techniques', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a technique', blurb: 'Strategy' },
    { id: 'applied', label: 'Word problems', blurb: 'Applied' },
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
  },

  sidebarLinks: {
    title: 'Other Calculus methods',
    links: [
      { url: '/calculus/limits/methods', label: 'Limits' },
      { url: '/calculus/integrals/techniques', label: 'Integrals' },
    ],
  },
};

export default derivativesMethods;
