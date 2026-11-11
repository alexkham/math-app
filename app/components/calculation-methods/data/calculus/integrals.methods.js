// integrals.methods.js
// Single data source for /calculus/integrals/techniques (hub) and
// /calculus/integrals/techniques/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/calculus/integrals/techniques/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/calculus/integrals/techniques';

const integralsMethods = {
  hubPath: HUB,
  hubLabel: 'integration techniques',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic — one rule applied once (cards on the hub) ═══════════
    {
      id: 'power-rule-integration',
      name: 'How to integrate a power of x',
      subtitle: 'Power rule for integrals',
      glyph: 'xⁿ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A single term $x^n$ with $n \\neq -1$, including roots and reciprocals once rewritten: $\\sqrt{x} = x^{1/2}$, $\\frac{1}{x^3} = x^{-3}$.',
      formula: '\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\qquad (n \\neq -1)',
      fields: {
        steps: ['1. Rewrite the term as $x^n$.', '2. Raise the exponent by one and divide by the new exponent.', '3. Add $+C$.'],
        worked_example: '$$\\int \\sqrt{x}\\,dx = \\frac{x^{3/2}}{3/2} + C = \\tfrac{2}{3}x^{3/2} + C$$',
      },
      links: [
        { url: ruleUrl('integrals.power-rule'), label: 'Power rule (integrals)' },
        { url: ruleUrl('integrals.reciprocal'), label: 'The case n = −1' },
      ],
    },
    {
      id: 'constant-multiple-integration',
      name: 'How to integrate a constant times a function',
      subtitle: 'Constant multiple rule',
      glyph: 'k·',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A number multiplies the integrand: $6x^2$, $-3\\cos x$, $\\frac{5}{x}$.',
      formula: '\\int k\\,f(x)\\,dx = k\\int f(x)\\,dx',
      fields: {
        steps: ['1. Move the constant in front of the integral sign.', '2. Integrate the function.', '3. Multiply back.'],
        worked_example: '$\\int 6x^2\\,dx = 6\\cdot\\frac{x^3}{3} + C = 2x^3 + C$',
      },
      links: [{ url: ruleUrl('integrals.constant-multiple-rule'), label: 'Constant multiple rule' }],
    },
    {
      id: 'sum-rule-integration',
      name: 'How to integrate a sum or difference',
      subtitle: 'Sum and difference rule',
      glyph: '±',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'Terms joined by $+$ or $-$, such as a polynomial or $e^x - \\sin x$.',
      formula: '\\int \\big(f(x) \\pm g(x)\\big)\\,dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx',
      fields: {
        steps: ['1. Split the integral term by term.', '2. Integrate each term and keep the signs.', '3. One $+C$ at the end is enough.'],
        worked_example: '$\\int (3x^2 - 2x + 1)\\,dx = x^3 - x^2 + x + C$',
      },
      links: [{ url: ruleUrl('integrals.sum-difference-rule'), label: 'Sum and difference rule' }],
    },
    {
      id: 'exp-log-integrals',
      name: 'How to integrate exponentials and 1/x',
      subtitle: 'Exponential and reciprocal antiderivatives',
      glyph: 'eˣ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A plain $e^x$, a constant base $a^x$, or $\\frac{1}{x}$ (the power rule\'s missing case).',
      formula: '\\int e^x\\,dx = e^x + C \\qquad \\int a^x\\,dx = \\frac{a^x}{\\ln a} + C \\qquad \\int \\frac{dx}{x} = \\ln|x| + C',
      fields: {
        steps: ['1. Match the term to one of the three forms.', '2. Write the antiderivative; keep the absolute value in $\\ln|x|$.'],
        worked_example: '$\\int 2^x\\,dx = \\frac{2^x}{\\ln 2} + C$',
      },
      links: [
        { url: ruleUrl('integrals.exponential'), label: 'Exponential antiderivative' },
        { url: ruleUrl('integrals.general-exponential'), label: 'General exponential' },
        { url: ruleUrl('integrals.reciprocal'), label: 'Reciprocal antiderivative' },
      ],
    },
    {
      id: 'trig-integrals',
      name: 'How to integrate the basic trig functions',
      subtitle: 'Standard trig antiderivatives',
      glyph: 'sin',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A plain $\\sin x$, $\\cos x$, $\\sec^2 x$, $\\sec x\\tan x$, $\\csc^2 x$ or $\\csc x\\cot x$, or $\\tan x$ and $\\sec x$ via their logarithmic antiderivatives.',
      formula: '\\int \\sin x\\,dx = -\\cos x + C \\qquad \\int \\cos x\\,dx = \\sin x + C \\qquad \\int \\sec^2 x\\,dx = \\tan x + C',
      fields: {
        steps: ['1. Recognize the integrand as the derivative of a trig function.', '2. Write that function, minding the sign for sine, cosecant and cotangent.'],
        worked_example: '$\\int \\sec x\\tan x\\,dx = \\sec x + C$',
      },
      links: [
        { url: ruleUrl('integrals.sine'), label: 'Antiderivative of sine' },
        { url: ruleUrl('integrals.cosine'), label: 'Antiderivative of cosine' },
        { url: ruleUrl('integrals.secant-squared'), label: 'Antiderivative of secant squared' },
        { url: ruleUrl('integrals.tangent'), label: 'Antiderivative of tangent' },
        { url: ruleUrl('lesson.integrals.special.trig'), label: 'All trig antiderivatives' },
      ],
    },
    {
      id: 'inverse-trig-integrals',
      name: 'How to integrate to an inverse trig function',
      subtitle: 'Arcsine, arctangent and arcsecant forms',
      glyph: 'sin⁻¹',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A constant over $\\sqrt{a^2 - x^2}$, over $a^2 + x^2$, or over $x\\sqrt{x^2 - a^2}$.',
      formula: '\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\frac{x}{a} + C \\qquad \\int \\frac{dx}{a^2 + x^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C',
      fields: {
        steps: ['1. Write the constant as $a^2$ and read off $a$.', '2. Match the form; the arctangent form carries a factor $\\frac{1}{a}$, the arcsine form does not.'],
        worked_example: '$\\int \\frac{dx}{4 + x^2} = \\tfrac{1}{2}\\arctan\\frac{x}{2} + C$',
      },
      links: [
        { url: ruleUrl('integrals.arcsine-form'), label: 'Arcsine form' },
        { url: ruleUrl('integrals.arctangent-form'), label: 'Arctangent form' },
        { url: ruleUrl('integrals.arcsecant-form'), label: 'Arcsecant form' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'u-substitution',
      slug: 'u-substitution',
      name: 'How to integrate by u-substitution',
      description: 'Undo the chain rule: an inner function whose derivative is also in the integrand.',
      uses: ['substitution rule', 'chain rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Integrate by u-Substitution (Step by Step) | Learn Math Class',
        description:
          'Integrate by substitution: pick the inside function as u, write du, rewrite the integral in u, integrate, substitute back. Examples and mistakes.',
        keywords: ['u-substitution', 'how to integrate by substitution', 'u substitution steps', 'integration by substitution examples'],
      },
      page: {
        h1: 'How to Integrate by u-Substitution',
        lead:
          'Substitution reverses the chain rule. Find an inner function whose derivative is also in the integrand, call it $u$, and the integral turns into a simpler one in $u$.',
        recognize:
          'The integrand contains a function **and a multiple of its derivative**: $2x\\cos(x^2)$, $\\frac{\\ln x}{x}$, $x\\sqrt{x^2+1}$, $e^{3x}$, $\\frac{1}{2x+5}$. The signal is something inside brackets, a root or a power, with the derivative of that inside sitting outside. Test: call the inside $u$; if $du$ absorbs everything else except a constant, substitution works.',
        recognizeNote: `The rule itself is the ${link('integrals.substitution-rule', 'substitution rule')}; it is the ${link('derivatives.chain-rule', 'chain rule')} read backwards. The lesson introduces it under ${link('lesson.integrals.techniques', 'Integration Techniques')}.`,
        methods: [
          {
            name: 'Substitute u = g(x)',
            tag: 'usual choice',
            preferred: true,
            formula: "\\int f(g(x))\\,g'(x)\\,dx = \\int f(u)\\,du",
            body: `The ${link('integrals.substitution-rule', 'substitution rule')}: the whole integrand and the $dx$ are rewritten in terms of $u$.`,
          },
          {
            name: 'Adjust by a constant',
            tag: 'when du is off by a factor',
            formula: '\\int e^{3x}\\,dx = \\tfrac{1}{3}\\int e^{u}\\,du',
            body: 'When $du$ differs from what is in the integrand by a constant factor, multiply inside and divide outside. Only constants may move through the integral sign.',
          },
        ],
        steps: {
          traceLabel: 'On $\\int 2x\\cos(x^2)\\,dx$',
          items: [
            {
              title: 'Choose u: the inside function.',
              body: 'The expression inside a bracket, a power, a root, an exponent or a denominator.',
              state: '$u = x^2$',
            },
            {
              title: 'Differentiate u and solve for the leftover piece.',
              body: '$du = u\'(x)\\,dx$. Compare with what is in the integrand; if a constant is missing, adjust for it.',
              state: '$du = 2x\\,dx$',
            },
            {
              title: 'Rewrite the integral entirely in u.',
              body: 'No $x$ and no $dx$ may remain. If an $x$ cannot be converted, the substitution is wrong.',
              state: '$\\int \\cos u\\,du$',
            },
            {
              title: 'Integrate in u.',
              body: `Here a ${link('integrals.cosine', 'standard trig antiderivative')}.`,
              state: '$\\sin u + C$',
              atomic: 'trig-integrals',
            },
            {
              title: 'Substitute back and check.',
              body: 'Replace $u$ by its expression in $x$. Differentiate the result; the chain rule should reproduce the integrand.',
              state: '$\\sin(x^2) + C$',
            },
          ],
        },
        examples: [
          {
            title: 'derivative sitting right there',
            badge: 'basic',
            lines: [
              { math: '$\\int 2x\\cos(x^2)\\,dx$', why: '$u = x^2$, $du = 2x\\,dx$' },
              { math: '$= \\int \\cos u\\,du = \\sin u + C$', why: 'integrate in $u$' },
              { math: '$= \\sin(x^2) + C$', why: 'back to $x$', answer: true },
            ],
          },
          {
            title: 'adjusting a constant',
            badge: 'du off by 2',
            lines: [
              { math: '$\\int x\\sqrt{x^2 + 1}\\,dx$', why: '$u = x^2 + 1$, $du = 2x\\,dx$, so $x\\,dx = \\tfrac{1}{2}du$' },
              { math: '$= \\tfrac{1}{2}\\int u^{1/2}\\,du = \\tfrac{1}{2}\\cdot\\tfrac{2}{3}u^{3/2} + C$', why: 'power rule in $u$' },
              { math: '$= \\tfrac{1}{3}(x^2 + 1)^{3/2} + C$', why: 'back to $x$', answer: true },
            ],
          },
          {
            title: 'logarithm over x',
            badge: 'u = ln x',
            lines: [
              { math: '$\\int \\frac{\\ln x}{x}\\,dx$', why: '$u = \\ln x$, $du = \\frac{dx}{x}$' },
              { math: '$= \\int u\\,du = \\frac{u^2}{2} + C$', why: 'the $\\frac{1}{x}$ was the derivative of $\\ln x$' },
              { math: '$= \\frac{(\\ln x)^2}{2} + C$', why: 'back to $x$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Substitution is the chain rule read backwards. Differentiating $\\sin(x^2)$ produces the factor $2x$; integrating $2x\\cos(x^2)$ has to absorb that same factor into $du$. If the factor is not there and cannot be fixed with a constant, substitution is the wrong tool.',
        },
        pitfalls: [
          {
            title: 'Leaving an x behind',
            wrong: '$\\int \\cos u\\,dx$',
            right: 'convert $dx$ too; an integral with two variables is meaningless',
          },
          {
            title: 'Pulling a variable outside',
            wrong: '$\\int x\\cos(x^2)\\,dx = x\\int \\cos(x^2)\\,dx$',
            right: 'only constants move through the integral sign',
          },
          {
            title: 'Forgetting the constant adjustment',
            wrong: '$\\int e^{3x}\\,dx = e^{3x} + C$',
            right: '$\\int e^{3x}\\,dx = \\tfrac{1}{3}e^{3x} + C$',
          },
          {
            title: 'Stopping in u',
            wrong: '$\\sin u + C$ as the final answer',
            right: '$\\sin(x^2) + C$; the answer must be in the original variable',
          },
        ],
        related: ['definite-substitution', 'integration-by-parts', 'which-integration-technique'],
        builtOn: [
          { label: 'Substitution rule', url: ruleUrl('integrals.substitution-rule') },
          { label: 'Chain rule', url: ruleUrl('derivatives.chain-rule') },
          { label: 'Basic antiderivative formulas', url: ruleUrl('lesson.integrals.indefinite.formulas') },
        ],
      },
    },
    {
      id: 'definite-substitution',
      slug: 'definite-substitution',
      name: 'How to use substitution in a definite integral',
      description: 'Convert the limits to $u$-values, or substitute back before evaluating; never mix the two.',
      uses: ['substitution rule', 'FTC part 2'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'Substitution in Definite Integrals: Converting the Limits | Learn Math Class',
        description:
          'u-substitution in a definite integral: convert the limits to u-values and finish in u, or substitute back before using the x-limits. Examples and mistakes.',
        keywords: ['definite integral substitution', 'u-substitution change limits', 'substitution with bounds', 'definite integral u substitution examples'],
      },
      page: {
        h1: 'How to Use Substitution in a Definite Integral',
        lead:
          'Same substitution, one extra move: the limits of integration are values of $x$, so convert them to values of $u$ and never go back to $x$. Or keep the $x$-limits and substitute back before evaluating. The two routes must not be mixed.',
        recognize:
          'A definite integral $\\int_a^b$ whose integrand needs substitution: $\\int_0^2 2x\\cos(x^2)\\,dx$, $\\int_1^e \\frac{\\ln x}{x}\\,dx$, $\\int_0^{\\pi/2}\\sin^2 x\\cos x\\,dx$.',
        recognizeNote: `The substitution itself is the method for [u-substitution](!${HUB}/u-substitution); the evaluation is the ${link('integrals.ftc-2', 'Fundamental Theorem, Part 2')}.`,
        methods: [
          {
            name: 'Convert the limits',
            tag: 'usual choice',
            preferred: true,
            formula: "\\int_a^b f(g(x))\\,g'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du",
            body: 'Plug each $x$-limit into $u = g(x)$, then finish entirely in $u$. No back-substitution needed.',
          },
          {
            name: 'Keep the x-limits',
            tag: 'alternative',
            formula: '\\Big[F(g(x))\\Big]_{x=a}^{x=b}',
            body: 'Find the antiderivative in $u$, write it back in $x$, then use the original limits. Mark the limits with $x =$ so they are not mistaken for $u$-values.',
          },
        ],
        steps: {
          traceLabel: 'On $\\int_0^2 2x\\cos(x^2)\\,dx$',
          items: [
            {
              title: 'Choose u and find du.',
              body: 'Exactly as for an indefinite integral.',
              state: '$u = x^2,\\quad du = 2x\\,dx$',
            },
            {
              title: 'Convert both limits with the same u.',
              body: 'Lower limit $x = a$ becomes $u = g(a)$, upper $x = b$ becomes $u = g(b)$. Keep them in that order even if $g(a) > g(b)$.',
              state: '$x = 0 \\to u = 0,\\qquad x = 2 \\to u = 4$',
            },
            {
              title: 'Rewrite the integral in u with the new limits.',
              body: 'Nothing in $x$ may remain, including the limits.',
              state: '$\\int_0^4 \\cos u\\,du$',
            },
            {
              title: 'Integrate and evaluate in u.',
              body: `${link('integrals.ftc-2', 'Fundamental Theorem, Part 2')}: antiderivative at the upper limit minus at the lower.`,
              state: '$\\big[\\sin u\\big]_0^4 = \\sin 4 - 0 \\approx -0.757$',
              atomic: 'trig-integrals',
            },
          ],
        },
        examples: [
          {
            title: 'converted limits',
            badge: 'basic',
            lines: [
              { math: '$\\int_0^2 2x\\cos(x^2)\\,dx$', why: '$u = x^2$: limits $0 \\to 0$, $2 \\to 4$' },
              { math: '$= \\int_0^4 \\cos u\\,du = \\big[\\sin u\\big]_0^4$', why: 'all in $u$' },
              { math: '$= \\sin 4 \\approx -0.757$', why: 'not $\\sin 2$', answer: true },
            ],
          },
          {
            title: 'logarithm limits',
            badge: 'u = ln x',
            lines: [
              { math: '$\\int_1^e \\frac{\\ln x}{x}\\,dx$', why: '$u = \\ln x$: limits $\\ln 1 = 0$, $\\ln e = 1$' },
              { math: '$= \\int_0^1 u\\,du = \\Big[\\frac{u^2}{2}\\Big]_0^1$', why: 'power rule' },
              { math: '$= \\tfrac{1}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'saved trig factor',
            badge: 'u = sin x',
            lines: [
              { math: '$\\int_0^{\\pi/2} \\sin^2 x\\cos x\\,dx$', why: '$u = \\sin x$, $du = \\cos x\\,dx$: limits $0 \\to 0$, $\\frac{\\pi}{2} \\to 1$' },
              { math: '$= \\int_0^1 u^2\\,du = \\Big[\\frac{u^3}{3}\\Big]_0^1$', why: 'power rule' },
              { math: '$= \\tfrac{1}{3}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A substitution stretches and relabels the $x$-axis into a $u$-axis. The area does not change, but its endpoints now carry $u$-names. Evaluating $\\sin u$ between the old $x$-endpoints $0$ and $2$ measures the wrong stretch of the new axis.',
        },
        pitfalls: [
          {
            title: 'Keeping the x-limits after switching to u',
            wrong: '$\\big[\\sin u\\big]_0^2 = \\sin 2$',
            right: '$\\big[\\sin u\\big]_0^4 = \\sin 4$, or substitute back to $x$ first',
          },
          {
            title: 'Reordering limits that came out decreasing',
            wrong: '$u = \\cos x$ on $[0, \\frac{\\pi}{2}]$ gives limits $1 \\to 0$, "so write $\\int_0^1$"',
            right: `keep $\\int_1^0$; swapping the limits changes the sign (${link('integrals.reversing-limits', 'reversing limits')})`,
          },
          {
            title: 'Converting the limits with a different u',
            wrong: 'limits from $u = 2x$ while the integrand used $u = x^2$',
            right: 'the same $u = g(x)$ converts the integrand, $dx$ and both limits',
          },
        ],
        related: ['u-substitution', 'definite-integrals-ftc', 'trig-powers-integrals'],
        builtOn: [
          { label: 'Substitution rule', url: ruleUrl('integrals.substitution-rule') },
          { label: 'Fundamental Theorem, Part 2', url: ruleUrl('integrals.ftc-2') },
          { label: 'Reversing limits of integration', url: ruleUrl('integrals.reversing-limits') },
        ],
      },
    },
    {
      id: 'integration-by-parts',
      slug: 'integration-by-parts',
      name: 'How to integrate by parts',
      description: 'Undo the product rule: products like $x e^x$, $x\\sin x$, $\\ln x$, $e^x\\cos x$.',
      uses: ['integration by parts', 'product rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Integrate by Parts (u dv Method, Step by Step) | Learn Math Class',
        description:
          'Integrate by parts: choose u and dv, fill in du and v, apply uv − ∫v du, finish the new integral. Examples with x e^x, ln x and e^x cos x, plus mistakes.',
        keywords: ['integration by parts', 'how to integrate by parts', 'u dv formula', 'integration by parts examples', 'LIATE'],
      },
      page: {
        h1: 'How to Integrate by Parts',
        lead:
          'Integration by parts reverses the product rule. Split the integrand into a piece $u$ to differentiate and a piece $dv$ to integrate; the formula trades the integral for a new one that should be simpler.',
        recognize:
          'A **product of two different kinds** of function: $x e^x$, $x\\sin x$, $x^2\\ln x$, $e^x\\cos x$. Or a single function whose derivative is simpler than itself: $\\ln x$, $\\arctan x$ (take $dv = dx$). Test: can you pick a factor that gets simpler when differentiated, while the other factor stays integrable?',
        recognizeNote: `The formula is ${link('integrals.integration-by-parts', 'integration by parts')}; it comes from integrating the ${link('derivatives.product-rule', 'product rule')}.`,
        methods: [
          {
            name: 'Parts once (or twice)',
            tag: 'usual choice',
            preferred: true,
            formula: '\\int u\\,dv = uv - \\int v\\,du',
            body: `Choose $u$ by LIATE: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. Earlier in the list makes the better $u$. ${link('integrals.integration-by-parts', 'Formula')}.`,
          },
          {
            name: 'Tabular (repeated parts)',
            tag: 'polynomial times exp or trig',
            formula: "u,\\; u',\\; u'',\\;\\ldots \\quad\\big|\\quad v,\\; \\textstyle\\int v,\\; \\iint v,\\;\\ldots",
            body: `When $u$ is a polynomial, the repeated steps collapse into a table; see [tabular integration](!${HUB}/tabular-integration).`,
          },
        ],
        steps: {
          traceLabel: 'On $\\int x e^x\\,dx$',
          items: [
            {
              title: 'Choose u and dv.',
              body: '$u$ is the factor that gets simpler when differentiated (LIATE); $dv$ is everything else, **including** $dx$.',
              state: '$u = x,\\qquad dv = e^x\\,dx$',
            },
            {
              title: 'Fill in the ledger: du and v.',
              body: `Differentiate $u$ to get $du$; integrate $dv$ to get $v$ (no $+C$ here, it cancels). The ${link('integrals.exponential', 'exponential antiderivative')} gives $v$.`,
              state: '$du = dx,\\qquad v = e^x$',
              atomic: 'exp-log-integrals',
            },
            {
              title: 'Apply uv − ∫v du.',
              body: 'Copy the four entries into the formula. Mind the minus sign.',
              state: '$x e^x - \\int e^x\\,dx$',
            },
            {
              title: 'Finish the new integral.',
              body: 'If it is still a product, apply parts again. If it comes back to the original integral, solve the equation for it.',
              state: '$x e^x - e^x + C = e^x(x - 1) + C$',
            },
            {
              title: 'Check by differentiating.',
              body: 'The product rule should give the integrand back.',
              state: "$(x e^x - e^x)' = e^x + x e^x - e^x = x e^x$",
            },
          ],
        },
        examples: [
          {
            title: 'polynomial times exponential',
            badge: 'basic',
            lines: [
              { math: '$\\int x e^x\\,dx$', why: '$u = x$, $dv = e^x dx$; $du = dx$, $v = e^x$' },
              { math: '$= x e^x - \\int e^x\\,dx$', why: '$uv - \\int v\\,du$' },
              { math: '$= x e^x - e^x + C$', why: '', answer: true },
            ],
          },
          {
            title: 'a logarithm alone',
            badge: 'dv = dx',
            lines: [
              { math: '$\\int \\ln x\\,dx$', why: '$u = \\ln x$, $dv = dx$; $du = \\frac{dx}{x}$, $v = x$' },
              { math: '$= x\\ln x - \\int x\\cdot\\frac{1}{x}\\,dx = x\\ln x - \\int 1\\,dx$', why: 'the $x$ cancels' },
              { math: '$= x\\ln x - x + C$', why: '', answer: true },
            ],
          },
          {
            title: 'the cyclic case',
            badge: 'parts twice, then solve',
            lines: [
              { math: '$I = \\int e^x\\cos x\\,dx$', why: '$u = \\cos x$, $dv = e^x dx$' },
              { math: '$I = e^x\\cos x + \\int e^x\\sin x\\,dx$', why: '$du = -\\sin x\\,dx$ flips the sign' },
              { math: '$I = e^x\\cos x + e^x\\sin x - \\int e^x\\cos x\\,dx$', why: 'parts again with $u = \\sin x$' },
              { math: '$2I = e^x(\\cos x + \\sin x)$', why: 'the last integral is $I$ itself; add it to both sides' },
              { math: '$I = \\tfrac{1}{2}e^x(\\sin x + \\cos x) + C$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            "Integrate the product rule $(uv)' = u'v + uv'$ and rearrange: $\\int u v'\\,dx = uv - \\int u' v\\,dx$. Parts moves the derivative from one factor onto the other. The move pays off when the factor you differentiate gets simpler and the one you integrate does not get worse.",
        },
        pitfalls: [
          {
            title: 'Dropping the minus sign',
            wrong: '$\\int x e^x\\,dx = x e^x + e^x + C$',
            right: '$x e^x - e^x + C$; differentiate to check',
          },
          {
            title: 'Choosing u and dv the wrong way round',
            wrong: '$u = e^x$, $dv = x\\,dx$ gives $\\tfrac{x^2}{2}e^x - \\int \\tfrac{x^2}{2}e^x\\,dx$, harder than before',
            right: 'differentiate the polynomial; it gets simpler',
          },
          {
            title: 'Forgetting dx in dv',
            wrong: '$dv = e^x$',
            right: '$dv = e^x\\,dx$; $dv$ must be something you can integrate',
          },
          {
            title: 'Giving up on the cyclic case',
            wrong: '"parts loops forever on $e^x\\cos x$"',
            right: 'after two rounds the original integral reappears; solve the equation for it',
          },
        ],
        related: ['tabular-integration', 'u-substitution', 'which-integration-technique'],
        builtOn: [
          { label: 'Integration by parts', url: ruleUrl('integrals.integration-by-parts') },
          { label: 'Product rule', url: ruleUrl('derivatives.product-rule') },
          { label: 'Exponential antiderivative', url: ruleUrl('integrals.exponential') },
        ],
      },
    },
    {
      id: 'tabular-integration',
      slug: 'tabular-integration',
      name: 'How to use tabular integration',
      description: 'Repeated parts in a table: a polynomial times $e^{kx}$, $\\sin kx$ or $\\cos kx$.',
      uses: ['integration by parts'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Tabular Integration (Repeated Parts) | Learn Math Class',
        description:
          'Tabular integration for a polynomial times e^x or sin x: differentiate down one column, integrate down the other, multiply diagonally with alternating signs.',
        keywords: ['tabular integration', 'tabular method integration by parts', 'repeated integration by parts', 'DI method'],
      },
      page: {
        h1: 'How to Use Tabular Integration',
        lead:
          'When integration by parts has to be repeated, a polynomial times an exponential or a trig function, lay the repeated steps out in a table: differentiate down one column, integrate down the other, multiply diagonally with alternating signs.',
        recognize:
          'A **polynomial times** $e^{kx}$, $\\sin kx$ or $\\cos kx$: $x^3 e^{2x}$, $x^2\\sin x$, $(x^2 + 1)\\cos 3x$. Parts would be needed as many times as the degree of the polynomial. Test: does one factor differentiate down to zero while the other can be integrated again and again?',
        recognizeNote: `Each row of the table is one use of ${link('integrals.integration-by-parts', 'integration by parts')}; the single-step method is [integration by parts](!${HUB}/integration-by-parts).`,
        steps: {
          traceLabel: 'On $\\int x^2 e^x\\,dx$',
          items: [
            {
              title: 'Set up two columns: D (differentiate) and I (integrate).',
              body: 'The polynomial goes in D, the exponential or trig factor in I.',
              state: 'D: $x^2$ \\quad I: $e^x$',
            },
            {
              title: 'Differentiate down D until you reach 0; integrate down I the same number of times.',
              body: `The I column uses the ${link('integrals.exponential', 'exponential')} or ${link('integrals.sine', 'trig')} antiderivatives repeatedly.`,
              state: 'D: $x^2,\\ 2x,\\ 2,\\ 0$ \\quad I: $e^x,\\ e^x,\\ e^x,\\ e^x$',
              atomic: 'exp-log-integrals',
            },
            {
              title: 'Attach alternating signs to the D column.',
              body: '$+,\\ -,\\ +,\\ -,\\ \\ldots$ starting with $+$.',
              state: '$+x^2,\\ -2x,\\ +2$',
            },
            {
              title: 'Multiply each D entry by the I entry one row lower, and add.',
              body: 'The row with $0$ contributes nothing, which is why the table ends there.',
              state: '$x^2 e^x - 2x e^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$',
            },
          ],
        },
        examples: [
          {
            title: 'quadratic times exponential',
            badge: 'basic',
            lines: [
              { math: '$\\int x^2 e^x\\,dx$', why: 'D: $x^2, 2x, 2, 0$; I: $e^x, e^x, e^x, e^x$' },
              { math: '$= x^2 e^x - 2x e^x + 2 e^x + C$', why: 'diagonals with signs $+, -, +$' },
              { math: '$= e^x(x^2 - 2x + 2) + C$', why: 'factor', answer: true },
            ],
          },
          {
            title: 'cubic times sine',
            badge: 'four rows',
            lines: [
              { math: '$\\int x^3\\sin x\\,dx$', why: 'D: $x^3, 3x^2, 6x, 6, 0$' },
              { math: 'I: $\\sin x,\\ -\\cos x,\\ -\\sin x,\\ \\cos x,\\ \\sin x$', why: 'integrate sine four times' },
              { math: '$= -x^3\\cos x + 3x^2\\sin x + 6x\\cos x - 6\\sin x + C$', why: 'signs $+, -, +, -$ on the D column', answer: true },
            ],
          },
          {
            title: 'linear times e to the 2x',
            badge: 'constants in I',
            lines: [
              { math: '$\\int x e^{2x}\\,dx$', why: 'D: $x, 1, 0$; I: $e^{2x}, \\tfrac{1}{2}e^{2x}, \\tfrac{1}{4}e^{2x}$' },
              { math: '$= \\tfrac{x}{2}e^{2x} - \\tfrac{1}{4}e^{2x} + C$', why: 'each integration brings a factor $\\frac{1}{2}$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Each row of the table is one application of parts: the diagonal product is the $uv$ term and the next row is the leftover integral. Writing them all at once saves rewriting the same integral three times, and the alternating signs are the minus sign of the formula applied over and over.',
        },
        pitfalls: [
          {
            title: 'Signs not alternating',
            wrong: '$x^2 e^x + 2x e^x + 2 e^x$',
            right: '$x^2 e^x - 2x e^x + 2 e^x$',
          },
          {
            title: 'Stopping one row early',
            wrong: '$x^2 e^x - 2x e^x + C$',
            right: 'continue until the D column reaches $0$; the $+2e^x$ term is missing',
          },
          {
            title: 'Differentiating the wrong column',
            wrong: 'differentiating $e^x$ and integrating $x^2$',
            right: 'the polynomial is differentiated so that it dies out',
          },
          {
            title: 'Using the table when nothing dies out',
            wrong: '$\\int e^x\\cos x\\,dx$ by table',
            right: `no column reaches $0$; use [parts twice and solve](!${HUB}/integration-by-parts)`,
          },
        ],
        related: ['integration-by-parts', 'u-substitution', 'which-integration-technique'],
        builtOn: [
          { label: 'Integration by parts', url: ruleUrl('integrals.integration-by-parts') },
          { label: 'Exponential antiderivative', url: ruleUrl('integrals.exponential') },
          { label: 'Trig antiderivatives', url: ruleUrl('integrals.sine') },
        ],
      },
    },
    {
      id: 'trig-powers-integrals',
      slug: 'trig-powers-integrals',
      name: 'How to integrate powers of sine and cosine',
      description: 'Odd power: save one factor and substitute. Even powers: reduce the power with half angles.',
      uses: ['Pythagorean identity', 'power-reducing formulas', 'substitution'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Integrate Powers of Sine and Cosine | Learn Math Class',
        description:
          'Integrate sin^m x cos^n x: with an odd power save one factor and substitute; with even powers use the power-reducing formulas. Examples and mistakes.',
        keywords: ['integrate powers of sine and cosine', 'trigonometric integrals', 'integral of sin^3 x', 'integral of cos^2 x', 'trig integrals examples'],
      },
      page: {
        h1: 'How to Integrate Powers of Sine and Cosine',
        lead:
          'Products like $\\sin^m x\\cos^n x$ are handled by saving one factor for $du$ and converting the rest with $\\sin^2 x + \\cos^2 x = 1$, or, when both powers are even, by halving the angle with the power-reducing formulas.',
        recognize:
          'Powers and products of $\\sin x$ and $\\cos x$: $\\sin^3 x$, $\\sin^2 x\\cos^3 x$, $\\cos^4 x$, $\\sin^2 x$. The same idea handles $\\tan^m x\\sec^n x$ with $\\sec^2 x = 1 + \\tan^2 x$. Test: is at least one power odd? Save one factor. Both even? Reduce the power.',
        recognizeNote: `The two identities are the ${link('trig.pythagorean-identity', 'Pythagorean identity')} and the ${link('trig.power-reducing', 'power-reducing formulas')}; the results are listed under ${link('lesson.integrals.special.trig', 'trigonometric functions')} in the special integrals lesson.`,
        methods: [
          {
            name: 'Odd power: save one factor',
            tag: 'usual choice',
            preferred: true,
            formula: '\\sin^3 x = (1 - \\cos^2 x)\\sin x, \\qquad u = \\cos x',
            body: `Split one factor off the odd power, convert the rest with the ${link('trig.pythagorean-identity', 'Pythagorean identity')}, substitute $u$ = the other function.`,
          },
          {
            name: 'Even powers: reduce the power',
            tag: 'when both powers are even',
            formula: '\\sin^2 x = \\frac{1 - \\cos 2x}{2}, \\qquad \\cos^2 x = \\frac{1 + \\cos 2x}{2}',
            body: `The ${link('trig.power-reducing', 'power-reducing formulas')} trade a square for a double angle; repeat until every power is $1$.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\int \\sin^3 x\\,dx$',
          items: [
            {
              title: 'Find an odd power and split one factor off it.',
              body: 'That factor will become $du$.',
              state: '$\\sin^3 x = \\sin^2 x\\cdot\\sin x$',
            },
            {
              title: 'Convert the remaining even power to the other function.',
              body: `${link('trig.pythagorean-identity', 'Pythagorean identity')}: $\\sin^2 x = 1 - \\cos^2 x$.`,
              state: '$(1 - \\cos^2 x)\\sin x$',
            },
            {
              title: 'Substitute u = the other function; the saved factor is du.',
              body: 'Mind the sign: $u = \\cos x$ gives $du = -\\sin x\\,dx$.',
              state: '$u = \\cos x$: $\\;-\\int (1 - u^2)\\,du$',
            },
            {
              title: 'Integrate the polynomial in u and substitute back.',
              body: `Power rule in $u$, then $u = \\cos x$.`,
              state: '$-u + \\frac{u^3}{3} + C = -\\cos x + \\frac{\\cos^3 x}{3} + C$',
              atomic: 'power-rule-integration',
            },
          ],
        },
        examples: [
          {
            title: 'odd power of sine',
            badge: 'save one factor',
            lines: [
              { math: '$\\int \\sin^3 x\\,dx = \\int (1 - \\cos^2 x)\\sin x\\,dx$', why: 'save $\\sin x$' },
              { math: '$= -\\int (1 - u^2)\\,du$', why: '$u = \\cos x$, $du = -\\sin x\\,dx$' },
              { math: '$= -\\cos x + \\tfrac{1}{3}\\cos^3 x + C$', why: '', answer: true },
            ],
          },
          {
            title: 'even sine, odd cosine',
            badge: 'save the odd one',
            lines: [
              { math: '$\\int \\sin^2 x\\cos^3 x\\,dx = \\int \\sin^2 x\\,(1 - \\sin^2 x)\\cos x\\,dx$', why: 'save $\\cos x$, convert $\\cos^2 x$' },
              { math: '$= \\int (u^2 - u^4)\\,du$', why: '$u = \\sin x$, $du = \\cos x\\,dx$' },
              { math: '$= \\tfrac{1}{3}\\sin^3 x - \\tfrac{1}{5}\\sin^5 x + C$', why: '', answer: true },
            ],
          },
          {
            title: 'even power of cosine',
            badge: 'reduce the power',
            lines: [
              { math: '$\\int \\cos^2 x\\,dx = \\int \\frac{1 + \\cos 2x}{2}\\,dx$', why: 'power-reducing formula' },
              { math: '$= \\frac{x}{2} + \\frac{\\sin 2x}{4} + C$', why: '$\\int \\cos 2x\\,dx = \\tfrac{1}{2}\\sin 2x$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The saved factor is what makes the substitution legal: $\\sin x\\,dx$ is exactly $-du$ for $u = \\cos x$. Everything else must be written in $u$, and the Pythagorean identity is the translator between the two functions. With no odd power there is nothing to save, so the angle is halved instead.',
        },
        pitfalls: [
          {
            title: 'Losing the sign of du',
            wrong: '$du = \\sin x\\,dx$ for $u = \\cos x$',
            right: '$du = -\\sin x\\,dx$',
          },
          {
            title: 'Converting the saved factor too',
            wrong: '$\\sin^3 x = (1 - \\cos^2 x)^{3/2}$',
            right: 'keep one $\\sin x$ as it is; convert only the even part',
          },
          {
            title: 'Trying the odd-power trick on even powers',
            wrong: '$\\int \\cos^2 x\\,dx$ with $u = \\sin x$ leaves a $\\cos x$ unmatched',
            right: 'use the power-reducing formula',
          },
          {
            title: 'Forgetting to halve',
            wrong: '$\\cos^2 x = 1 + \\cos 2x$',
            right: '$\\cos^2 x = \\frac{1 + \\cos 2x}{2}$',
          },
        ],
        related: ['trig-substitution', 'u-substitution', 'which-integration-technique'],
        builtOn: [
          { label: 'Pythagorean identity', url: ruleUrl('trig.pythagorean-identity') },
          { label: 'Power-reducing formulas', url: ruleUrl('trig.power-reducing') },
          { label: 'Trig antiderivatives', url: ruleUrl('integrals.sine') },
        ],
      },
    },
    {
      id: 'trig-substitution',
      slug: 'trig-substitution',
      name: 'How to use trigonometric substitution',
      description: 'Remove $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$ or $\\sqrt{x^2 - a^2}$ with $x = a\\sin\\theta$, $a\\tan\\theta$ or $a\\sec\\theta$.',
      uses: ['Pythagorean identity', 'inverse trig functions'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Trigonometric Substitution (Step by Step) | Learn Math Class',
        description:
          'Remove a root of a quadratic with x = a sin θ, a tan θ or a sec θ: substitute, simplify with an identity, integrate, return to x with a triangle.',
        keywords: ['trigonometric substitution', 'trig substitution steps', 'integral of sqrt(a^2 - x^2)', 'trig substitution examples', 'reference triangle'],
      },
      page: {
        h1: 'How to Use Trigonometric Substitution',
        lead:
          'A square root of a quadratic, $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$ or $\\sqrt{x^2 - a^2}$, disappears when $x$ is replaced by $a\\sin\\theta$, $a\\tan\\theta$ or $a\\sec\\theta$, because a Pythagorean identity turns the root into a single trig function.',
        recognize:
          'The integrand has $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$ or $\\sqrt{x^2 - a^2}$ (or these quadratics to a power) and **no** factor $x\\,dx$ that an ordinary substitution could use: $\\int \\sqrt{4 - x^2}\\,dx$, $\\int \\frac{dx}{x^2\\sqrt{x^2 + 9}}$, $\\int \\frac{dx}{\\sqrt{x^2 - 1}}$. Test: if $u =$ the quadratic fails because its derivative is missing, substitute trig.',
        recognizeNote: `The roots collapse through the ${link('trig.pythagorean-identity', 'Pythagorean identities')}; returning to $x$ uses the ${link('lesson.trig.inverse-functions', 'inverse trigonometric functions')}.`,
        methods: [
          {
            name: 'For a² − x²: x = a sin θ',
            tag: 'root becomes a cos θ',
            preferred: true,
            formula: '\\sqrt{a^2 - x^2} = a\\cos\\theta, \\qquad dx = a\\cos\\theta\\,d\\theta',
            body: 'Uses $1 - \\sin^2\\theta = \\cos^2\\theta$. Take $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ so that $\\cos\\theta \\ge 0$.',
          },
          {
            name: 'For a² + x²: x = a tan θ',
            tag: 'root becomes a sec θ',
            formula: '\\sqrt{a^2 + x^2} = a\\sec\\theta, \\qquad dx = a\\sec^2\\theta\\,d\\theta',
            body: `Uses $1 + \\tan^2\\theta = \\sec^2\\theta$ (${link('trig.pythagorean-tan-sec', 'tangent-secant identity')}).`,
          },
          {
            name: 'For x² − a²: x = a sec θ',
            tag: 'root becomes a tan θ',
            formula: '\\sqrt{x^2 - a^2} = a\\tan\\theta, \\qquad dx = a\\sec\\theta\\tan\\theta\\,d\\theta',
            body: 'Uses $\\sec^2\\theta - 1 = \\tan^2\\theta$.',
          },
        ],
        titles: { methods: 'The three substitutions' },
        steps: {
          traceLabel: 'On $\\int \\sqrt{4 - x^2}\\,dx$',
          items: [
            {
              title: 'Match the radical to its pattern and choose the substitution.',
              body: 'Read off $a$ from the constant: $4 = 2^2$.',
              state: '$x = 2\\sin\\theta, \\qquad dx = 2\\cos\\theta\\,d\\theta$',
            },
            {
              title: 'Replace x, dx and the radical; simplify with the identity.',
              body: 'All three must be replaced. The radical becomes a single trig function.',
              state: '$\\sqrt{4 - 4\\sin^2\\theta} = 2\\cos\\theta$: $\\quad\\int 2\\cos\\theta\\cdot 2\\cos\\theta\\,d\\theta = 4\\int \\cos^2\\theta\\,d\\theta$',
            },
            {
              title: 'Integrate in θ.',
              body: `Often a [power of sine or cosine](!${HUB}/trig-powers-integrals).`,
              state: '$4\\left(\\frac{\\theta}{2} + \\frac{\\sin 2\\theta}{4}\\right) = 2\\theta + 2\\sin\\theta\\cos\\theta$',
              atomic: 'trig-integrals',
            },
            {
              title: 'Return to x with a reference triangle.',
              body: 'From $\\sin\\theta = \\frac{x}{2}$: opposite $x$, hypotenuse $2$, adjacent $\\sqrt{4 - x^2}$. So $\\cos\\theta = \\frac{\\sqrt{4 - x^2}}{2}$ and $\\theta = \\arcsin\\frac{x}{2}$.',
              state: '$2\\arcsin\\frac{x}{2} + \\frac{x\\sqrt{4 - x^2}}{2} + C$',
            },
          ],
        },
        examples: [
          {
            title: 'a² − x² under the root',
            badge: 'x = a sin θ',
            lines: [
              { math: '$\\int \\sqrt{4 - x^2}\\,dx$', why: '$x = 2\\sin\\theta$, $dx = 2\\cos\\theta\\,d\\theta$' },
              { math: '$= 4\\int \\cos^2\\theta\\,d\\theta = 2\\theta + \\sin 2\\theta + C$', why: 'power-reducing formula' },
              { math: '$= 2\\arcsin\\frac{x}{2} + \\frac{x\\sqrt{4 - x^2}}{2} + C$', why: '$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, triangle', answer: true },
            ],
          },
          {
            title: 'a² + x² under the root',
            badge: 'x = a tan θ',
            lines: [
              { math: '$\\int \\frac{dx}{x^2\\sqrt{x^2 + 9}}$', why: '$x = 3\\tan\\theta$, $dx = 3\\sec^2\\theta\\,d\\theta$, root $= 3\\sec\\theta$' },
              { math: '$= \\int \\frac{3\\sec^2\\theta\\,d\\theta}{9\\tan^2\\theta\\cdot 3\\sec\\theta} = \\frac{1}{9}\\int \\frac{\\cos\\theta}{\\sin^2\\theta}\\,d\\theta$', why: '$\\frac{\\sec\\theta}{\\tan^2\\theta} = \\frac{\\cos\\theta}{\\sin^2\\theta}$' },
              { math: '$= -\\frac{1}{9\\sin\\theta} + C = -\\frac{\\sqrt{x^2 + 9}}{9x} + C$', why: 'triangle: $\\sin\\theta = \\frac{x}{\\sqrt{x^2 + 9}}$', answer: true },
            ],
          },
          {
            title: 'x² − a² under the root',
            badge: 'x = a sec θ',
            lines: [
              { math: '$\\int \\frac{dx}{\\sqrt{x^2 - 1}}$', why: '$x = \\sec\\theta$, $dx = \\sec\\theta\\tan\\theta\\,d\\theta$, root $= \\tan\\theta$' },
              { math: '$= \\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C$', why: 'standard antiderivative of secant' },
              { math: '$= \\ln\\left|x + \\sqrt{x^2 - 1}\\right| + C$', why: 'triangle: $\\tan\\theta = \\sqrt{x^2 - 1}$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Draw the right triangle behind the substitution. For $x = 2\\sin\\theta$ the side opposite $\\theta$ is $x$, the hypotenuse is $2$, and the third side is $\\sqrt{4 - x^2}$. Every trig function of $\\theta$ in your answer is a ratio of those three sides, which is how the answer returns to $x$.',
        },
        pitfalls: [
          {
            title: 'Replacing dx by dθ',
            wrong: '$dx \\to d\\theta$',
            right: '$dx = 2\\cos\\theta\\,d\\theta$; the differential changes too',
          },
          {
            title: 'Pairing the wrong substitution with the root',
            wrong: '$x = a\\sin\\theta$ for $\\sqrt{x^2 - a^2}$ gives $\\sqrt{-a^2\\cos^2\\theta}$',
            right: '$x = a\\sec\\theta$ for $x^2 - a^2$',
          },
          {
            title: 'Leaving the answer in θ',
            wrong: '$2\\theta + \\sin 2\\theta + C$',
            right: 'expand $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, then use the triangle to return to $x$',
          },
          {
            title: 'Using trig substitution when u works',
            wrong: '$x = 2\\sin\\theta$ for $\\int x\\sqrt{4 - x^2}\\,dx$',
            right: 'the factor $x\\,dx$ is there: $u = 4 - x^2$ is faster',
          },
        ],
        related: ['trig-powers-integrals', 'partial-fractions', 'which-integration-technique'],
        builtOn: [
          { label: 'Pythagorean identity', url: ruleUrl('trig.pythagorean-identity') },
          { label: 'Arcsine form', url: ruleUrl('integrals.arcsine-form') },
          { label: 'Inverse trig functions', url: ruleUrl('lesson.trig.inverse-functions') },
        ],
      },
    },
    {
      id: 'partial-fractions',
      slug: 'partial-fractions',
      name: 'How to integrate by partial fractions',
      description: 'Split a rational function into simple fractions, each a logarithm, a power or an arctangent.',
      uses: ['factoring', 'long division', 'ln and arctan forms'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 4 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Integrate by Partial Fractions (Step by Step) | Learn Math Class',
        description:
          'Integrate a rational function: divide if needed, factor the denominator, one term per factor, find the constants, integrate each piece. Examples, mistakes.',
        keywords: ['partial fractions integration', 'how to integrate by partial fractions', 'partial fraction decomposition steps', 'partial fractions examples', 'repeated linear factor'],
      },
      page: {
        h1: 'How to Integrate by Partial Fractions',
        lead:
          'A rational function with a factorable denominator splits into a sum of simple fractions, and each of those integrates to a logarithm, a power or an arctangent.',
        recognize:
          'A fraction of polynomials whose bottom factors: $\\frac{x + 5}{x^2 + x - 6}$, $\\frac{3x}{(x - 1)^2}$, $\\frac{1}{x(x^2 + 1)}$. Test: can the denominator be factored into linear and irreducible quadratic factors? If the top has degree at least that of the bottom, divide first.',
        recognizeNote: `Factoring the denominator follows the ${link('polynomials.factoring-strategy', 'factoring strategy')}; dividing first is ${link('polynomials.long-division', 'polynomial long division')}. The site has no separate lesson on the decomposition itself; this page is where it lives.`,
        methods: [
          {
            name: 'Plug in the roots',
            tag: 'distinct linear factors',
            preferred: true,
            formula: 'x + 5 = A(x - 2) + B(x + 3) \\;\\Rightarrow\\; x = 2:\\ 7 = 5B',
            body: 'After clearing denominators, substitute each root of the denominator; every term but one vanishes and that constant is read off at once.',
          },
          {
            name: 'Compare coefficients',
            tag: 'repeated or quadratic factors',
            formula: '1 = A(x^2 + 1) + (Bx + C)\\,x \\;\\Rightarrow\\; x^2:\\ 0 = A + B',
            body: 'Expand and match the coefficients of each power of $x$. Needed when plugging in roots does not reach every constant.',
          },
        ],
        steps: {
          traceLabel: 'On $\\int \\frac{x + 5}{x^2 + x - 6}\\,dx$',
          items: [
            {
              title: 'Compare degrees; divide if the top is not smaller.',
              body: `Partial fractions needs a proper fraction. Otherwise ${link('polynomials.long-division', 'divide')} and decompose only the remainder.`,
              state: 'degree $1 < 2$: proper, no division',
            },
            {
              title: 'Factor the denominator completely.',
              body: 'Into linear factors $(x - r)$ and irreducible quadratics.',
              state: '$x^2 + x - 6 = (x + 3)(x - 2)$',
            },
            {
              title: 'Write the template, one term per factor.',
              body: 'Linear factor: $\\frac{A}{x - r}$. Repeated factor $(x - r)^2$: $\\frac{A}{x - r} + \\frac{B}{(x - r)^2}$. Irreducible quadratic: $\\frac{Bx + C}{x^2 + px + q}$.',
              state: '$\\frac{x + 5}{(x + 3)(x - 2)} = \\frac{A}{x + 3} + \\frac{B}{x - 2}$',
            },
            {
              title: 'Clear the denominators and find the constants.',
              body: 'Multiply through by the full denominator, then plug in the roots or compare coefficients.',
              state: '$x + 5 = A(x - 2) + B(x + 3)$: $\\;x = 2 \\Rightarrow B = \\tfrac{7}{5}$, $\\;x = -3 \\Rightarrow A = -\\tfrac{2}{5}$',
            },
            {
              title: 'Integrate each piece.',
              body: `$\\frac{A}{x - r}$ gives $A\\ln|x - r|$ (${link('integrals.reciprocal', 'reciprocal antiderivative')}); powers give powers; a constant over $x^2 + a^2$ gives an ${link('integrals.arctangent-form', 'arctangent')}.`,
              state: '$-\\tfrac{2}{5}\\ln|x + 3| + \\tfrac{7}{5}\\ln|x - 2| + C$',
              atomic: 'exp-log-integrals',
            },
          ],
        },
        examples: [
          {
            title: 'two distinct linear factors',
            badge: 'basic',
            lines: [
              { math: '$\\int \\frac{x + 5}{(x + 3)(x - 2)}\\,dx$', why: '$\\frac{A}{x + 3} + \\frac{B}{x - 2}$' },
              { math: '$A = -\\tfrac{2}{5},\\quad B = \\tfrac{7}{5}$', why: 'plug in $x = -3$ and $x = 2$' },
              { math: '$= -\\tfrac{2}{5}\\ln|x + 3| + \\tfrac{7}{5}\\ln|x - 2| + C$', why: '', answer: true },
            ],
          },
          {
            title: 'repeated linear factor',
            badge: 'two terms for one factor',
            lines: [
              { math: '$\\int \\frac{3x}{(x - 1)^2}\\,dx$', why: '$\\frac{A}{x - 1} + \\frac{B}{(x - 1)^2}$' },
              { math: '$3x = A(x - 1) + B$', why: '$x = 1$: $B = 3$; coefficient of $x$: $A = 3$' },
              { math: '$= 3\\ln|x - 1| - \\frac{3}{x - 1} + C$', why: '$\\int \\frac{3}{(x-1)^2}dx = -\\frac{3}{x - 1}$', answer: true },
            ],
          },
          {
            title: 'an irreducible quadratic factor',
            badge: 'Bx + C on top',
            lines: [
              { math: '$\\int \\frac{dx}{x(x^2 + 1)}$', why: '$\\frac{A}{x} + \\frac{Bx + C}{x^2 + 1}$' },
              { math: '$1 = A(x^2 + 1) + (Bx + C)x$', why: '$x = 0$: $A = 1$; $x^2$: $B = -1$; $x$: $C = 0$' },
              { math: '$= \\ln|x| - \\tfrac{1}{2}\\ln(x^2 + 1) + C$', why: '$\\int \\frac{-x}{x^2 + 1}dx$ by $u = x^2 + 1$', answer: true },
            ],
          },
          {
            title: 'improper fraction: divide first',
            badge: 'degree 2 over degree 1',
            lines: [
              { math: '$\\int \\frac{x^2}{x - 1}\\,dx$', why: 'top degree $\\ge$ bottom degree' },
              { math: '$\\frac{x^2}{x - 1} = x + 1 + \\frac{1}{x - 1}$', why: 'long division' },
              { math: '$= \\frac{x^2}{2} + x + \\ln|x - 1| + C$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Adding fractions with different denominators produces one fraction over the product; partial fractions runs that addition backwards. The template has exactly as many unknown constants as the denominator has degree, so there is always one solution and never a leftover.',
        },
        pitfalls: [
          {
            title: 'Taking the log of the whole denominator',
            wrong: '$\\int \\frac{dx}{x^2 - 1} = \\ln|x^2 - 1| + C$',
            right: 'decompose first: $\\tfrac{1}{2}\\ln|x - 1| - \\tfrac{1}{2}\\ln|x + 1| + C$',
          },
          {
            title: 'Skipping the division',
            wrong: '$\\frac{x^2}{x - 1} = \\frac{A}{x - 1}$',
            right: 'divide first; the fraction is improper',
          },
          {
            title: 'One term for a repeated factor',
            wrong: '$\\frac{3x}{(x - 1)^2} = \\frac{A}{(x - 1)^2}$',
            right: '$\\frac{A}{x - 1} + \\frac{B}{(x - 1)^2}$',
          },
          {
            title: 'A bare constant over a quadratic',
            wrong: '$\\frac{B}{x^2 + 1}$',
            right: '$\\frac{Bx + C}{x^2 + 1}$',
          },
        ],
        related: ['u-substitution', 'trig-substitution', 'which-integration-technique'],
        builtOn: [
          { label: 'Reciprocal antiderivative', url: ruleUrl('integrals.reciprocal') },
          { label: 'Arctangent form', url: ruleUrl('integrals.arctangent-form') },
          { label: 'Factoring strategy', url: ruleUrl('polynomials.factoring-strategy') },
          { label: 'Polynomial long division', url: ruleUrl('polynomials.long-division') },
        ],
      },
    },
    {
      id: 'improper-integrals',
      slug: 'improper-integrals',
      name: 'How to evaluate improper integrals',
      description: 'An infinite limit or a blow-up inside the interval: replace it by $t$, integrate, take the limit.',
      uses: ['limits', 'FTC part 2', 'p-test'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 4 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Evaluate Improper Integrals (Step by Step) | Learn Math Class',
        description:
          'Evaluate improper integrals: replace the infinite limit or blow-up point by t, integrate, take the limit; decide convergence. Four examples and mistakes.',
        keywords: ['improper integrals', 'how to evaluate improper integrals', 'convergent or divergent integral', 'improper integral examples', 'p-test'],
      },
      page: {
        h1: 'How to Evaluate Improper Integrals',
        lead:
          'An integral is improper when a limit of integration is infinite or the integrand blows up on the interval. Replace the bad endpoint by a variable, integrate, then take the limit. A finite limit means the integral converges; otherwise it diverges.',
        recognize:
          'An $\\infty$ or $-\\infty$ as a limit: $\\int_1^\\infty \\frac{dx}{x^2}$, $\\int_{-\\infty}^0 e^x\\,dx$. Or a vertical asymptote at an endpoint or inside: $\\int_0^1 \\frac{dx}{\\sqrt{x}}$, $\\int_{-1}^1 \\frac{dx}{x^2}$. Test: is the integrand undefined or unbounded anywhere on the closed interval, or is an endpoint infinite?',
        recognizeNote: `The two kinds are defined under ${link('lesson.integrals.improper.infinite', 'infinite limits of integration')} and ${link('lesson.integrals.improper.discontinuous', 'discontinuous integrands')}; convergence tests follow in the same lesson.`,
        methods: [
          {
            name: 'Infinite interval',
            tag: 'limit at infinity',
            preferred: true,
            formula: '\\int_a^\\infty f(x)\\,dx = \\lim_{t\\to\\infty}\\int_a^t f(x)\\,dx',
            body: `${link('integrals.improper-infinite', 'Improper integral with infinite limits')}. Two infinite ends: split at any point and take two separate limits.`,
          },
          {
            name: 'Unbounded integrand',
            tag: 'one-sided limit at the blow-up',
            formula: '\\int_a^b f(x)\\,dx = \\lim_{t\\to b^-}\\int_a^t f(x)\\,dx \\quad (\\text{blow-up at } b)',
            body: `${link('integrals.improper-discontinuous', 'Improper integral with a discontinuous integrand')}. A blow-up inside the interval: split there and treat each half.`,
          },
          {
            name: 'Compare instead of compute',
            tag: 'convergence only',
            formula: '0 \\le f \\le g,\\ \\int g \\text{ converges} \\;\\Rightarrow\\; \\int f \\text{ converges}',
            body: `When only convergence is asked, the ${link('integrals.p-test', 'p-test')} ($\\int_1^\\infty x^{-p}dx$ converges exactly when $p > 1$) and the ${link('lesson.integrals.improper.comparison', 'comparison test')} avoid the integration.`,
          },
        ],
        titles: { methods: 'Two kinds, one idea' },
        steps: {
          traceLabel: 'On $\\int_1^\\infty \\frac{dx}{x^2}$',
          items: [
            {
              title: 'Locate the problem.',
              body: 'An infinite endpoint, or a point where $f$ is unbounded. Check the inside of the interval too, not just the ends.',
              state: 'upper limit $\\infty$; $f$ is fine on $[1, \\infty)$',
            },
            {
              title: 'Replace it by t and write the limit.',
              body: 'The limit sign stays in front of everything until the last step.',
              state: '$\\lim_{t\\to\\infty}\\int_1^t x^{-2}\\,dx$',
            },
            {
              title: 'Integrate with t in the limits.',
              body: `An ordinary definite integral by the ${link('integrals.ftc-2', 'Fundamental Theorem')}.`,
              state: '$\\lim_{t\\to\\infty}\\Big[-\\frac{1}{x}\\Big]_1^t = \\lim_{t\\to\\infty}\\Big(1 - \\frac{1}{t}\\Big)$',
              atomic: 'power-rule-integration',
            },
            {
              title: 'Take the limit and state the verdict.',
              body: 'Finite: the integral converges to that value. Infinite or nonexistent: it diverges.',
              state: '$= 1$; the integral converges',
            },
          ],
        },
        examples: [
          {
            title: 'infinite interval, convergent',
            badge: 'p = 2',
            lines: [
              { math: '$\\int_1^\\infty \\frac{dx}{x^2} = \\lim_{t\\to\\infty}\\Big[-\\frac{1}{x}\\Big]_1^t$', why: 'replace $\\infty$ by $t$' },
              { math: '$= \\lim_{t\\to\\infty}\\Big(1 - \\frac{1}{t}\\Big) = 1$', why: 'converges', answer: true },
            ],
          },
          {
            title: 'blow-up at an endpoint, convergent',
            badge: 'one-sided limit',
            lines: [
              { math: '$\\int_0^1 \\frac{dx}{\\sqrt{x}} = \\lim_{t\\to 0^+}\\int_t^1 x^{-1/2}\\,dx$', why: 'the integrand is unbounded at $0$' },
              { math: '$= \\lim_{t\\to 0^+}\\big[2\\sqrt{x}\\big]_t^1 = 2 - 0 = 2$', why: 'converges', answer: true },
            ],
          },
          {
            title: 'infinite interval, divergent',
            badge: 'p = 1',
            lines: [
              { math: '$\\int_1^\\infty \\frac{dx}{x} = \\lim_{t\\to\\infty}\\big[\\ln x\\big]_1^t$', why: 'same setup' },
              { math: '$= \\lim_{t\\to\\infty}\\ln t = \\infty$', why: 'diverges, although $\\frac{1}{x} \\to 0$', answer: true },
            ],
          },
          {
            title: 'blow-up inside the interval',
            badge: 'split first',
            lines: [
              { math: '$\\int_{-1}^1 \\frac{dx}{x^2}$', why: 'unbounded at $x = 0$, inside the interval' },
              { math: '$\\int_0^1 \\frac{dx}{x^2} = \\lim_{t\\to 0^+}\\Big[-\\frac{1}{x}\\Big]_t^1 = \\lim_{t\\to 0^+}\\Big(-1 + \\frac{1}{t}\\Big) = \\infty$', why: 'one half already diverges' },
              { math: 'the integral diverges', why: 'the "answer" $\\big[-\\frac{1}{x}\\big]_{-1}^1 = -2$ is wrong', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The region under $\\frac{1}{x^2}$ to the right of $1$ stretches forever but has area exactly $1$: each doubling of the interval adds less than half the previous area. Under $\\frac{1}{x}$ the strips shrink too slowly and the area grows without bound. The p-test draws the line at $p = 1$.',
        },
        pitfalls: [
          {
            title: 'Integrating straight across a blow-up',
            wrong: '$\\int_{-1}^1 \\frac{dx}{x^2} = \\Big[-\\frac{1}{x}\\Big]_{-1}^1 = -2$',
            right: 'a positive function cannot have a negative integral; split at $0$, each half diverges',
          },
          {
            title: 'Plugging in infinity',
            wrong: '$-\\frac{1}{\\infty} = 0$ written as arithmetic',
            right: 'write the limit as $t \\to \\infty$ and evaluate it',
          },
          {
            title: '"The integrand goes to 0, so it converges"',
            wrong: '$\\int_1^\\infty \\frac{dx}{x}$ converges because $\\frac{1}{x} \\to 0$',
            right: 'how fast it goes to $0$ decides; $\\frac{1}{x}$ is too slow (p-test, $p = 1$)',
          },
          {
            title: 'Missing an interior asymptote',
            wrong: '$\\int_0^2 \\frac{dx}{x - 1}$ treated as an ordinary integral',
            right: 'split at $x = 1$ and test both halves',
          },
        ],
        related: ['definite-integrals-ftc', 'u-substitution', 'which-integration-technique'],
        builtOn: [
          { label: 'Improper integral (infinite limits)', url: ruleUrl('integrals.improper-infinite') },
          { label: 'Improper integral (discontinuous integrand)', url: ruleUrl('integrals.improper-discontinuous') },
          { label: 'p-test', url: ruleUrl('integrals.p-test') },
        ],
      },
    },
    {
      id: 'definite-integrals-ftc',
      slug: 'definite-integrals-ftc',
      name: 'How to evaluate a definite integral with the Fundamental Theorem',
      description: 'Find an antiderivative $F$ and compute $F(b) - F(a)$; Part 1 for accumulation functions.',
      uses: ['FTC part 2', 'FTC part 1'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 4 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Evaluate Definite Integrals with the Fundamental Theorem | Learn Math Class',
        description:
          'Evaluate a definite integral: check continuity, find an antiderivative, compute F(b) − F(a), read the sign. Part 1 for accumulation functions. Examples.',
        keywords: ['fundamental theorem of calculus', 'how to evaluate a definite integral', 'F(b) - F(a)', 'definite integral examples', 'accumulation function derivative'],
      },
      page: {
        h1: 'How to Evaluate a Definite Integral with the Fundamental Theorem',
        lead:
          'Find an antiderivative $F$, then compute $F(b) - F(a)$. That is the Fundamental Theorem of Calculus, Part 2, and it turns an area problem into two substitutions. Part 1 runs the other way: the derivative of an accumulation function is the integrand.',
        recognize:
          'A definite integral $\\int_a^b f(x)\\,dx$ of a function you can antidifferentiate: $\\int_0^3 (x^2 + 1)\\,dx$, $\\int_0^\\pi \\sin x\\,dx$, $\\int_1^e \\frac{dx}{x}$. Or a derivative of an integral with a variable limit: $\\frac{d}{dx}\\int_0^{x^2}\\cos t\\,dt$. Test: a number is wanted, not a function, and the integrand is continuous on $[a, b]$.',
        recognizeNote: `Both parts are stated in the integration rules lesson: ${link('lesson.integrals.rules.ftc1', 'Part 1')} and ${link('lesson.integrals.rules.ftc2', 'Part 2')}; the meaning of the number as ${link('lesson.integrals.definite.signed-area', 'signed area')} is in the definite integrals lesson.`,
        methods: [
          {
            name: 'Part 2: evaluate F(b) − F(a)',
            tag: 'usual choice',
            preferred: true,
            formula: "\\int_a^b f(x)\\,dx = F(b) - F(a), \\qquad F' = f",
            body: `${link('integrals.ftc-2', 'Fundamental Theorem, Part 2')}. Any antiderivative works; the constant cancels in the subtraction.`,
          },
          {
            name: 'Part 1: differentiate an accumulation function',
            tag: 'no integration needed',
            formula: '\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x), \\qquad \\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x))\\,g\'(x)',
            body: `${link('integrals.ftc-1', 'Fundamental Theorem, Part 1')}. Replace $t$ by the upper limit and, if that limit is a function of $x$, multiply by its derivative.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\int_0^3 (x^2 + 1)\\,dx$',
          items: [
            {
              title: 'Check that the integrand is continuous on [a, b].',
              body: `If it blows up anywhere on the interval, this is an [improper integral](!${HUB}/improper-integrals) and the theorem does not apply directly.`,
              state: 'a polynomial: continuous everywhere',
            },
            {
              title: 'Find an antiderivative F.',
              body: `Term by term with the ${link('integrals.power-rule', 'power rule')}; no $+C$ is needed.`,
              state: '$F(x) = \\frac{x^3}{3} + x$',
              atomic: 'power-rule-integration',
            },
            {
              title: 'Evaluate at the upper limit, then at the lower, and subtract.',
              body: 'Write $\\big[F(x)\\big]_a^b = F(b) - F(a)$. Put the lower value in parentheses so its sign survives.',
              state: '$F(3) - F(0) = (9 + 3) - (0) = 12$',
            },
            {
              title: 'Interpret the sign.',
              body: 'Area above the axis counts positive, area below counts negative. For the total geometric area, split where $f$ changes sign.',
              state: '$12$; the graph is above the axis on $[0, 3]$',
            },
          ],
        },
        examples: [
          {
            title: 'polynomial',
            badge: 'basic',
            lines: [
              { math: '$\\int_0^3 (x^2 + 1)\\,dx = \\Big[\\frac{x^3}{3} + x\\Big]_0^3$', why: 'antiderivative' },
              { math: '$= (9 + 3) - 0 = 12$', why: '', answer: true },
            ],
          },
          {
            title: 'sine over a half period',
            badge: 'watch the signs',
            lines: [
              { math: '$\\int_0^\\pi \\sin x\\,dx = \\big[-\\cos x\\big]_0^\\pi$', why: 'antiderivative of sine' },
              { math: '$= (-\\cos\\pi) - (-\\cos 0) = 1 + 1 = 2$', why: 'two minus signs', answer: true },
            ],
          },
          {
            title: 'signed area',
            badge: 'part below the axis',
            lines: [
              { math: '$\\int_{-1}^2 x^3\\,dx = \\Big[\\frac{x^4}{4}\\Big]_{-1}^2$', why: '' },
              { math: '$= 4 - \\frac{1}{4} = \\frac{15}{4}$', why: 'the area below the axis on $[-1, 0]$ was subtracted', answer: true },
            ],
          },
          {
            title: 'Part 1 with a variable upper limit',
            badge: 'chain rule',
            lines: [
              { math: '$\\frac{d}{dx}\\int_0^{x^2}\\cos t\\,dt$', why: 'upper limit $g(x) = x^2$' },
              { math: '$= \\cos(x^2)\\cdot 2x$', why: '$f(g(x))\\,g\'(x)$', answer: true },
            ],
          },
        ],
        visual: {
          component: 'FunctionFTC',
          caption:
            'Move the upper limit and watch the accumulated area grow. Its rate of growth is the height of the integrand at that point: that is Part 1. Reading the accumulation at $b$ and at $a$ and subtracting is Part 2.',
        },
        pitfalls: [
          {
            title: 'Sign slip in the subtraction',
            wrong: '$\\big[-\\cos x\\big]_0^\\pi = -\\cos\\pi - \\cos 0 = 0$',
            right: '$F(b) - F(a) = -\\cos\\pi - (-\\cos 0) = 2$',
          },
          {
            title: 'Applying the theorem across a discontinuity',
            wrong: '$\\int_{-1}^1 \\frac{dx}{x^2} = \\Big[-\\frac{1}{x}\\Big]_{-1}^1 = -2$',
            right: 'the integrand is not continuous on $[-1, 1]$; the integral is improper and diverges',
          },
          {
            title: 'Forgetting the chain rule in Part 1',
            wrong: '$\\frac{d}{dx}\\int_0^{x^2}\\cos t\\,dt = \\cos(x^2)$',
            right: '$\\cos(x^2)\\cdot 2x$',
          },
          {
            title: 'Reading a signed integral as an area',
            wrong: '$\\int_{-1}^2 x^3\\,dx = \\frac{15}{4}$ "is the area between the curve and the axis"',
            right: 'the area is $\\int_{-1}^0 |x^3|\\,dx + \\int_0^2 x^3\\,dx = \\frac{1}{4} + 4 = \\frac{17}{4}$',
          },
        ],
        related: ['riemann-sums', 'definite-substitution', 'area-between-curves'],
        builtOn: [
          { label: 'Fundamental Theorem, Part 1', url: ruleUrl('integrals.ftc-1') },
          { label: 'Fundamental Theorem, Part 2', url: ruleUrl('integrals.ftc-2') },
          { label: 'Signed area', url: ruleUrl('lesson.integrals.definite.signed-area') },
        ],
      },
    },
    {
      id: 'riemann-sums',
      slug: 'riemann-sums',
      name: 'How to compute a Riemann sum',
      description: 'Left, right and midpoint rectangle sums, and how a limit of sums becomes an integral.',
      uses: ['Riemann sums', 'definite integral definition'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 4 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Compute a Riemann Sum (Left, Right, Midpoint) | Learn Math Class',
        description:
          'Compute left, right and midpoint Riemann sums: find Δx, list the sample points, evaluate f, add and multiply by Δx; turn a limit of sums into an integral.',
        keywords: ['riemann sum', 'how to compute a riemann sum', 'left right midpoint sum', 'riemann sum examples', 'limit of riemann sum to integral'],
      },
      page: {
        h1: 'How to Compute a Riemann Sum',
        lead:
          'A Riemann sum approximates the area under a curve with rectangles: cut $[a, b]$ into $n$ strips of width $\\Delta x$, pick a height in each strip, add the areas. Letting $n$ grow without bound gives the definite integral.',
        recognize:
          '"Approximate the integral with $n$ rectangles", "left / right / midpoint sum", "$L_4$, $R_6$, $M_n$", a table of function values, or a limit $\\lim_{n\\to\\infty}\\sum f(x_i)\\,\\Delta x$ to be written as an integral. Test: rectangles, a table, or a sum with $\\Delta x$.',
        recognizeNote: `The construction is explained under ${link('lesson.integrals.definite.riemann', 'The Riemann Sum Construction')} in the definite integrals lesson.`,
        methods: [
          {
            name: 'Left, right or midpoint sum',
            tag: 'usual choice',
            preferred: true,
            formula: 'R_n = \\sum_{i=1}^n f(x_i)\\,\\Delta x, \\qquad \\Delta x = \\frac{b - a}{n}',
            body: 'Left sums use the left edge of each strip, right sums the right edge, midpoint sums the middle. Same $\\Delta x$, different heights.',
          },
          {
            name: 'Limit of the sum',
            tag: 'sum to integral',
            formula: '\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\,\\Delta x',
            body: 'To turn a given sum into an integral, read $\\Delta x = \\frac{b - a}{n}$ for the interval length and the sample point $x_i = a + i\\,\\Delta x$ for $a$.',
          },
        ],
        steps: {
          traceLabel: 'On $\\int_0^2 x^2\\,dx$ with $n = 4$ right endpoints',
          items: [
            {
              title: 'Compute Δx.',
              body: '$\\Delta x = \\frac{b - a}{n}$, the width of every strip.',
              state: '$\\Delta x = \\frac{2 - 0}{4} = 0.5$',
            },
            {
              title: 'List the n sample points.',
              body: 'Right: $x_1, \\ldots, x_n$ (the right edges). Left: $x_0, \\ldots, x_{n-1}$. Midpoint: the centre of each strip. Exactly $n$ points.',
              state: 'right endpoints: $0.5,\\ 1,\\ 1.5,\\ 2$',
            },
            {
              title: 'Evaluate f at each sample point.',
              body: 'These are the rectangle heights.',
              state: '$0.25,\\ 1,\\ 2.25,\\ 4$',
            },
            {
              title: 'Add the heights and multiply by Δx.',
              body: 'The common width comes out as a factor.',
              state: '$R_4 = 0.5\\,(0.25 + 1 + 2.25 + 4) = 3.75$',
            },
            {
              title: 'Compare with the exact value if it is known.',
              body: `For an increasing function the right sum overestimates and the left sum underestimates; the exact value is ${link('integrals.ftc-2', 'F(b) − F(a)')}.`,
              state: 'exact $\\frac{8}{3} \\approx 2.667$; $R_4$ overestimates',
            },
          ],
        },
        examples: [
          {
            title: 'right sum',
            badge: 'R₄',
            lines: [
              { math: '$\\int_0^2 x^2\\,dx \\approx R_4$', why: '$\\Delta x = 0.5$, points $0.5, 1, 1.5, 2$' },
              { math: '$R_4 = 0.5\\,(0.25 + 1 + 2.25 + 4) = 3.75$', why: 'overestimate', answer: true },
            ],
          },
          {
            title: 'left sum',
            badge: 'L₄',
            lines: [
              { math: 'points $0,\\ 0.5,\\ 1,\\ 1.5$', why: 'left edges' },
              { math: '$L_4 = 0.5\\,(0 + 0.25 + 1 + 2.25) = 1.75$', why: 'underestimate', answer: true },
            ],
          },
          {
            title: 'midpoint sum',
            badge: 'M₄',
            lines: [
              { math: 'points $0.25,\\ 0.75,\\ 1.25,\\ 1.75$', why: 'centres of the strips' },
              { math: '$M_4 = 0.5\\,(0.0625 + 0.5625 + 1.5625 + 3.0625) = 2.625$', why: 'closest to $\\frac{8}{3}$', answer: true },
            ],
          },
          {
            title: 'a limit of sums as an integral',
            badge: 'read off a, b, f',
            lines: [
              { math: '$\\lim_{n\\to\\infty}\\sum_{i=1}^n \\frac{3}{n}\\sqrt{1 + \\frac{3i}{n}}$', why: '$\\Delta x = \\frac{3}{n}$, so $b - a = 3$' },
              { math: '$x_i = 1 + \\frac{3i}{n} = a + i\\,\\Delta x$', why: 'so $a = 1$, $b = 4$, $f(x) = \\sqrt{x}$' },
              { math: '$= \\int_1^4 \\sqrt{x}\\,dx = \\frac{14}{3}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          component: 'FunctionRiemann',
          caption:
            'Increase $n$ and watch the staircase hug the curve. Left and right sums bracket the true area when the function is monotone; the midpoint sum usually lands closer than either, because its overshoot on one side of each strip cancels the undershoot on the other.',
        },
        pitfalls: [
          {
            title: 'Wrong number of heights',
            wrong: 'five heights for four rectangles',
            right: '$n$ rectangles, $n$ heights: left uses $x_0, \\ldots, x_{n-1}$, right uses $x_1, \\ldots, x_n$',
          },
          {
            title: 'Forgetting Δx',
            wrong: '$0.25 + 1 + 2.25 + 4 = 7.5$',
            right: 'multiply by $\\Delta x = 0.5$: $3.75$',
          },
          {
            title: '"Right sums always overestimate"',
            wrong: 'assumed for every function',
            right: 'only for increasing functions; for decreasing ones the right sum underestimates',
          },
          {
            title: 'Δx upside down',
            wrong: '$\\Delta x = \\frac{n}{b - a}$',
            right: '$\\Delta x = \\frac{b - a}{n}$',
          },
        ],
        related: ['definite-integrals-ftc', 'numerical-integration', 'area-between-curves'],
        builtOn: [
          { label: 'Riemann sum construction', url: ruleUrl('lesson.integrals.definite.riemann') },
          { label: 'Properties of definite integrals', url: ruleUrl('lesson.integrals.definite.properties') },
          { label: 'Fundamental Theorem, Part 2', url: ruleUrl('integrals.ftc-2') },
        ],
      },
    },
    {
      id: 'numerical-integration',
      slug: 'numerical-integration',
      name: 'How to approximate an integral numerically',
      description: "Trapezoidal rule and Simpson's rule for integrands with no elementary antiderivative or given as a table.",
      uses: ['trapezoidal rule', "Simpson's rule"],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: "How to Approximate an Integral: Trapezoidal and Simpson's Rule | Learn Math Class",
        description:
          "Estimate an integral with the trapezoidal rule (weights 1, 2, …, 2, 1) or Simpson's rule (1, 4, 2, …, 4, 1): find Δx, evaluate f, apply the weights.",
        keywords: ['trapezoidal rule', "simpson's rule", 'numerical integration', 'how to use the trapezoidal rule', 'approximate a definite integral'],
      },
      page: {
        h1: 'How to Approximate an Integral Numerically',
        lead:
          "When no antiderivative is available, the trapezoidal rule and Simpson's rule estimate a definite integral from a handful of function values, far more accurately than rectangles for the same $n$.",
        recognize:
          'The integrand has no elementary antiderivative ($e^{-x^2}$, $\\sin(x^2)$, $\\sqrt{1 + x^3}$), or only a table of values is given, and the question says "trapezoidal rule", "Simpson\'s rule" or "estimate with $n = 4$". Test: you need a number and cannot integrate exactly.',
        recognizeNote: `The rules refine the ${link('lesson.integrals.definite.riemann', 'Riemann sum construction')}: straight tops instead of flat ones, then parabolic tops. The site has no separate lesson on them; this page is where they live.`,
        methods: [
          {
            name: 'Trapezoidal rule',
            tag: 'any n',
            formula: 'T_n = \\frac{\\Delta x}{2}\\Big[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)\\Big]',
            body: 'Joins the sample points with straight lines. Error shrinks like $\\frac{1}{n^2}$. Exact for linear functions.',
          },
          {
            name: "Simpson's rule",
            tag: 'n even, more accurate',
            preferred: true,
            formula: 'S_n = \\frac{\\Delta x}{3}\\Big[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \\cdots + 4f(x_{n-1}) + f(x_n)\\Big]',
            body: 'Fits a parabola through each pair of strips, so $n$ must be even. Error shrinks like $\\frac{1}{n^4}$. Exact for cubics.',
          },
        ],
        steps: {
          traceLabel: 'On $\\int_0^1 e^{-x^2}\\,dx$ with $n = 4$',
          items: [
            {
              title: 'Compute Δx and the n + 1 points.',
              body: '$\\Delta x = \\frac{b - a}{n}$; the points run from $a$ to $b$ inclusive, so there is one more point than strips.',
              state: '$\\Delta x = 0.25$; $x = 0,\\ 0.25,\\ 0.5,\\ 0.75,\\ 1$',
            },
            {
              title: 'Evaluate f at every point.',
              body: 'Keep four decimals; round only at the end.',
              state: '$1,\\ 0.9394,\\ 0.7788,\\ 0.5698,\\ 0.3679$',
            },
            {
              title: 'Apply the weights.',
              body: 'Trapezoid: $1, 2, 2, \\ldots, 2, 1$. Simpson: $1, 4, 2, 4, \\ldots, 4, 1$ (ends $1$, then alternating $4, 2$, finishing with $4$ before the last $1$).',
              state: '$T_4 = \\frac{0.25}{2}\\big[1 + 2(0.9394 + 0.7788 + 0.5698) + 0.3679\\big]$',
            },
            {
              title: 'Multiply by the factor and round sensibly.',
              body: '$\\frac{\\Delta x}{2}$ for the trapezoidal rule, $\\frac{\\Delta x}{3}$ for Simpson.',
              state: '$T_4 \\approx 0.7430$; $\\;S_4 = \\frac{0.25}{3}\\big[1 + 4(0.9394) + 2(0.7788) + 4(0.5698) + 0.3679\\big] \\approx 0.7469$',
            },
          ],
        },
        examples: [
          {
            title: 'the Gaussian bump',
            badge: 'both rules',
            lines: [
              { math: '$\\int_0^1 e^{-x^2}\\,dx$, $n = 4$', why: 'no elementary antiderivative' },
              { math: '$T_4 \\approx 0.7430$', why: 'weights $1, 2, 2, 2, 1$' },
              { math: '$S_4 \\approx 0.7469$', why: 'weights $1, 4, 2, 4, 1$; true value $0.7468$', answer: true },
            ],
          },
          {
            title: 'distance from a speed table',
            badge: 'trapezoid on data',
            lines: [
              { math: '$v = 0,\\ 8,\\ 14,\\ 18,\\ 20$ m/s every $10$ s', why: '$\\Delta x = 10$, $n = 4$' },
              { math: '$T_4 = \\frac{10}{2}\\big[0 + 2(8 + 14 + 18) + 20\\big]$', why: 'distance $= \\int v\\,dt$' },
              { math: '$= 5 \\cdot 100 = 500$ m', why: '', answer: true },
            ],
          },
          {
            title: 'Simpson with only two strips',
            badge: 'n = 2',
            lines: [
              { math: '$\\int_0^\\pi \\sin x\\,dx$, $n = 2$', why: '$\\Delta x = \\frac{\\pi}{2}$; values $0, 1, 0$' },
              { math: '$S_2 = \\frac{\\pi/2}{3}\\big[0 + 4(1) + 0\\big] = \\frac{2\\pi}{3} \\approx 2.094$', why: 'exact value $2$; a parabola is already close to the arch', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            "The trapezoidal rule joins the sample points with straight lines; Simpson's rule fits a parabola through each pair of strips. A parabola follows a smooth curve far better than a line does, which is why Simpson's error shrinks like $\\frac{1}{n^4}$ instead of $\\frac{1}{n^2}$.",
        },
        pitfalls: [
          {
            title: 'Odd n with Simpson',
            wrong: '$S_3$',
            right: '$n$ must be even; the rule works on pairs of strips',
          },
          {
            title: 'Wrong weight pattern',
            wrong: '$1, 2, 4, 2, 1$',
            right: '$1, 4, 2, 4, 1$: ends $1$, then $4$ first',
          },
          {
            title: 'Dropping the ½ or ⅓',
            wrong: '$T_n = \\Delta x\\,[\\ldots]$',
            right: '$T_n = \\frac{\\Delta x}{2}[\\ldots]$, $S_n = \\frac{\\Delta x}{3}[\\ldots]$',
          },
          {
            title: 'Rounding too early',
            wrong: 'each value rounded to one decimal',
            right: 'carry four decimals, round at the end',
          },
        ],
        related: ['riemann-sums', 'definite-integrals-ftc', 'arc-length'],
        builtOn: [
          { label: 'Riemann sum construction', url: ruleUrl('lesson.integrals.definite.riemann') },
          { label: 'Properties of definite integrals', url: ruleUrl('lesson.integrals.definite.properties') },
        ],
      },
    },
    {
      id: 'area-between-curves',
      slug: 'area-between-curves',
      name: 'How to find the area between two curves',
      description: 'Integrate top minus bottom between the intersections; split where the curves cross.',
      uses: ['FTC part 2', 'intersections'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Area Between Two Curves (Step by Step) | Learn Math Class',
        description:
          'Area between curves: find the intersections, decide which graph is on top, integrate top minus bottom on each piece, or use horizontal strips. Examples.',
        keywords: ['area between two curves', 'how to find the area between curves', 'area between curves examples', 'top minus bottom integral', 'horizontal strips area'],
      },
      page: {
        h1: 'How to Find the Area Between Two Curves',
        lead:
          'The area between two graphs is the integral of top minus bottom over the interval where they enclose a region. Find where the curves cross, decide which is on top on each piece, and integrate the difference.',
        recognize:
          '"Find the area enclosed by $y = x^2$ and $y = x + 2$", "the region bounded by …", two or more curves, sometimes with vertical lines $x = a$, $x = b$. Test: the answer is an area, and two functions bound it.',
        recognizeNote: `This is ${link('lesson.integrals.definite.signed-area', 'signed area')} applied to a difference of functions; the site has no separate lesson on applications of integration, so this page is where the method lives.`,
        methods: [
          {
            name: 'Vertical strips (integrate in x)',
            tag: 'usual choice',
            preferred: true,
            formula: 'A = \\int_a^b \\big[f_{\\text{top}}(x) - g_{\\text{bottom}}(x)\\big]\\,dx',
            body: 'When both curves are given as $y$ in terms of $x$ and the same curve is on top across the interval.',
          },
          {
            name: 'Horizontal strips (integrate in y)',
            tag: 'curves given as x(y)',
            formula: 'A = \\int_c^d \\big[x_{\\text{right}}(y) - x_{\\text{left}}(y)\\big]\\,dy',
            body: 'When the curves are easier to write as $x$ in terms of $y$, or when the top function changes along the way.',
          },
        ],
        steps: {
          traceLabel: 'On $y = x + 2$ and $y = x^2$',
          items: [
            {
              title: 'Sketch the curves and find the intersections.',
              body: 'Set the two formulas equal and solve. The solutions are the limits of integration.',
              state: '$x^2 = x + 2 \\;\\Rightarrow\\; x = -1,\\ 2$',
            },
            {
              title: 'Decide which curve is on top on each interval.',
              body: 'Test one point inside the interval. If the curves cross between the limits, split there.',
              state: 'at $x = 0$: line $2$, parabola $0$: the line is on top',
            },
            {
              title: 'Set up the integral of top minus bottom.',
              body: 'One integral per interval on which the same curve is on top.',
              state: '$A = \\int_{-1}^2 \\big[(x + 2) - x^2\\big]\\,dx$',
            },
            {
              title: 'Integrate and evaluate.',
              body: `${link('integrals.ftc-2', 'Fundamental Theorem, Part 2')}. The result must be positive; a negative number means top and bottom were swapped.`,
              state: '$\\Big[\\frac{x^2}{2} + 2x - \\frac{x^3}{3}\\Big]_{-1}^2 = \\frac{10}{3} - \\Big(-\\frac{7}{6}\\Big) = \\frac{9}{2}$',
              atomic: 'sum-rule-integration',
            },
          ],
        },
        examples: [
          {
            title: 'line over a parabola',
            badge: 'basic',
            lines: [
              { math: '$y = x + 2$ and $y = x^2$ meet at $x = -1, 2$', why: 'solve $x^2 = x + 2$' },
              { math: '$A = \\int_{-1}^2 (x + 2 - x^2)\\,dx$', why: 'line on top' },
              { math: '$= \\frac{9}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'curves that cross',
            badge: 'split at the crossing',
            lines: [
              { math: '$y = \\sin x$, $y = \\cos x$ on $[0, \\frac{\\pi}{2}]$', why: 'cross at $x = \\frac{\\pi}{4}$' },
              { math: '$A = \\int_0^{\\pi/4}(\\cos x - \\sin x)\\,dx + \\int_{\\pi/4}^{\\pi/2}(\\sin x - \\cos x)\\,dx$', why: 'cosine on top first, then sine' },
              { math: '$= (\\sqrt{2} - 1) + (\\sqrt{2} - 1) = 2\\sqrt{2} - 2$', why: '', answer: true },
            ],
          },
          {
            title: 'horizontal strips',
            badge: 'integrate in y',
            lines: [
              { math: '$x = y^2$ and $x = y + 2$', why: 'meet at $y = -1, 2$' },
              { math: '$A = \\int_{-1}^2 \\big[(y + 2) - y^2\\big]\\,dy$', why: 'line on the right' },
              { math: '$= \\frac{9}{2}$', why: 'the first example reflected in $y = x$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Each thin vertical strip has height top minus bottom and width $dx$; the integral adds the strips up. Where the curves cross, top and bottom swap roles, and a single integral of $f - g$ across the crossing would subtract area instead of adding it.',
        },
        pitfalls: [
          {
            title: 'Integrating f − g across a crossing',
            wrong: '$\\int_0^{\\pi/2}(\\cos x - \\sin x)\\,dx = 0$',
            right: 'split at the crossing and keep each piece positive',
          },
          {
            title: 'Wrong curve on top',
            wrong: '$\\int_{-1}^2 (x^2 - x - 2)\\,dx = -\\frac{9}{2}$',
            right: 'a negative area means the order is reversed; test a point first',
          },
          {
            title: 'x-limits on a y-integral',
            wrong: '$\\int_{-1}^2 \\ldots\\,dy$ with the $x$-values of the intersections',
            right: 'the limits of a $dy$ integral are $y$-values',
          },
          {
            title: 'Guessing the limits',
            wrong: 'integrating from $0$ to $2$ "because the picture looks like that"',
            right: 'solve $f(x) = g(x)$ for the exact intersections',
          },
        ],
        related: ['definite-integrals-ftc', 'volume-disk-washer', 'area-volume-problems'],
        builtOn: [
          { label: 'Fundamental Theorem, Part 2', url: ruleUrl('integrals.ftc-2') },
          { label: 'Signed area', url: ruleUrl('lesson.integrals.definite.signed-area') },
          { label: 'Total unsigned area', url: ruleUrl('integrals.total-unsigned-area') },
        ],
      },
    },
    {
      id: 'volume-disk-washer',
      slug: 'volume-disk-washer',
      name: 'How to find a volume with the disk and washer methods',
      description: 'Slice a solid of revolution perpendicular to its axis: $\\pi r^2$ disks, or $\\pi(R^2 - r^2)$ washers.',
      uses: ['FTC part 2', 'area of a circle'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Volume by the Disk and Washer Methods | Learn Math Class',
        description:
          'Volume of a solid of revolution: slice perpendicular to the axis, write the radius as a distance to the axis, integrate πr² or π(R² − r²). Examples.',
        keywords: ['disk method', 'washer method', 'volume of revolution', 'how to find volume with the disk method', 'washer method examples'],
      },
      page: {
        h1: 'How to Find a Volume with the Disk and Washer Methods',
        lead:
          'Revolve a region around an axis and slice the solid perpendicular to that axis: each slice is a disk of area $\\pi r^2$, or a washer of area $\\pi(R^2 - r^2)$ when there is a hole. Integrate the slice area along the axis.',
        recognize:
          '"The region bounded by … is rotated about the $x$-axis (or $y = 1$, or the $y$-axis); find the volume." Test: a solid of revolution, and the slices perpendicular to the axis of rotation are circles or rings.',
        recognizeNote: `The integral is a ${link('lesson.integrals.definite.signed-area', 'definite integral')} of the cross-section area; the site has no separate lesson on volumes, so this page is where the method lives. The other slicing is the [shell method](!${HUB}/volume-shells).`,
        methods: [
          {
            name: 'Disks',
            tag: 'region touches the axis',
            preferred: true,
            formula: 'V = \\int_a^b \\pi\\,[r(x)]^2\\,dx',
            body: 'Each slice is a full circle. The radius is the distance from the curve to the axis of rotation.',
          },
          {
            name: 'Washers',
            tag: 'region does not touch the axis',
            formula: 'V = \\int_a^b \\pi\\big([R(x)]^2 - [r(x)]^2\\big)\\,dx',
            body: 'Each slice is a ring: outer radius $R$ from the far curve, inner radius $r$ from the near curve, both measured to the axis.',
          },
        ],
        steps: {
          traceLabel: 'On $y = \\sqrt{x}$, $0 \\le x \\le 4$, about the x-axis',
          items: [
            {
              title: 'Sketch the region and the axis; draw one slice perpendicular to the axis.',
              body: 'The slice is a disk if the region reaches the axis, a washer if there is a gap.',
              state: 'slice at $x$: a disk, since the region sits on the axis',
            },
            {
              title: 'Write the radius (or both radii) as a distance to the axis.',
              body: 'For the $x$-axis the radius is $y$ itself; for the axis $y = k$ it is $|y - k|$.',
              state: '$r(x) = \\sqrt{x} - 0 = \\sqrt{x}$',
            },
            {
              title: 'Set up the integral along the axis.',
              body: 'Limits run along the axis of rotation, from where the region starts to where it ends.',
              state: '$V = \\int_0^4 \\pi(\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx$',
            },
            {
              title: 'Integrate.',
              body: `${link('integrals.power-rule', 'Power rule')} and ${link('integrals.ftc-2', 'Fundamental Theorem')}. Keep the $\\pi$.`,
              state: '$V = \\pi\\Big[\\frac{x^2}{2}\\Big]_0^4 = 8\\pi$',
              atomic: 'power-rule-integration',
            },
          ],
        },
        examples: [
          {
            title: 'disks about the x-axis',
            badge: 'basic',
            lines: [
              { math: '$y = \\sqrt{x}$, $0 \\le x \\le 4$, about the $x$-axis', why: '$r = \\sqrt{x}$' },
              { math: '$V = \\pi\\int_0^4 x\\,dx = 8\\pi$', why: '', answer: true },
            ],
          },
          {
            title: 'washers between two curves',
            badge: 'R and r',
            lines: [
              { math: 'between $y = x$ and $y = x^2$, about the $x$-axis', why: 'cross at $0$ and $1$; $R = x$, $r = x^2$' },
              { math: '$V = \\pi\\int_0^1 (x^2 - x^4)\\,dx$', why: '$R^2 - r^2$' },
              { math: '$= \\pi\\Big(\\frac{1}{3} - \\frac{1}{5}\\Big) = \\frac{2\\pi}{15}$', why: '', answer: true },
            ],
          },
          {
            title: 'about a shifted axis',
            badge: 'axis y = 1',
            lines: [
              { math: 'under $y = x^2$, $0 \\le x \\le 1$, about $y = 1$', why: 'outer radius $1 - 0 = 1$, inner radius $1 - x^2$' },
              { math: '$V = \\pi\\int_0^1 \\big[1 - (1 - x^2)^2\\big]\\,dx = \\pi\\int_0^1 (2x^2 - x^4)\\,dx$', why: 'expand' },
              { math: '$= \\pi\\Big(\\frac{2}{3} - \\frac{1}{5}\\Big) = \\frac{7\\pi}{15}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A slice perpendicular to the axis is a circle because every point of the region sweeps out a circle around the axis. The radius is a distance to the axis, so an axis at $y = 1$ changes every radius to $1 - y$, not $y$.',
        },
        pitfalls: [
          {
            title: 'Radius measured to the wrong line',
            wrong: '$r = x^2$ for rotation about $y = 1$',
            right: '$r = 1 - x^2$: distance from the curve to the axis',
          },
          {
            title: 'Squaring the difference',
            wrong: '$\\pi\\int (R - r)^2\\,dx$',
            right: '$\\pi\\int (R^2 - r^2)\\,dx$',
          },
          {
            title: 'Slicing parallel to the axis',
            wrong: 'disks in $x$ for a rotation about the $y$-axis with $y = f(x)$',
            right: `slice perpendicular to the axis (solve for $x(y)$), or use [shells](!${HUB}/volume-shells)`,
          },
          {
            title: 'Dropping π',
            wrong: '$\\int_0^4 x\\,dx = 8$',
            right: '$8\\pi$',
          },
        ],
        related: ['volume-shells', 'area-between-curves', 'area-volume-problems'],
        builtOn: [
          { label: 'Fundamental Theorem, Part 2', url: ruleUrl('integrals.ftc-2') },
          { label: 'Power rule (integrals)', url: ruleUrl('integrals.power-rule') },
          { label: 'Properties of definite integrals', url: ruleUrl('lesson.integrals.definite.properties') },
        ],
      },
    },
    {
      id: 'volume-shells',
      slug: 'volume-shells',
      name: 'How to find a volume with cylindrical shells',
      description: 'Slice parallel to the axis: each strip sweeps a shell of volume $2\\pi r h\\,dx$.',
      uses: ['FTC part 2', 'shell volume'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Volume with Cylindrical Shells (Step by Step) | Learn Math Class',
        description:
          'Volume by shells: draw a strip parallel to the axis, write its radius and height, integrate 2πrh across the region. Examples including a shifted axis.',
        keywords: ['shell method', 'cylindrical shells', 'how to find volume with shells', 'shell method examples', 'volume about the y-axis'],
      },
      page: {
        h1: 'How to Find a Volume with Cylindrical Shells',
        lead:
          'Slice the region parallel to the axis of rotation instead: each strip sweeps out a thin cylindrical shell of volume $2\\pi \\cdot \\text{radius} \\cdot \\text{height} \\cdot \\text{thickness}$. Shells avoid solving for $x$ when the region is given as $y = f(x)$ and the axis is vertical.',
        recognize:
          'Rotation about the **$y$-axis** (or another vertical line) of a region given by $y = f(x)$; or the washer method would need two different outer or inner functions. Test: is the strip parallel to the axis easier to describe than the slice perpendicular to it?',
        recognizeNote: `The alternative slicing is the [disk and washer method](!${HUB}/volume-disk-washer); both give the same volume. The integral is evaluated with the ${link('integrals.ftc-2', 'Fundamental Theorem')}.`,
        methods: [
          {
            name: 'Shells about a vertical axis',
            tag: 'usual choice',
            preferred: true,
            formula: 'V = \\int_a^b 2\\pi\\,x\\,f(x)\\,dx',
            body: 'Vertical strip at $x$: radius $x$ (distance to the $y$-axis), height $f(x)$. About $x = k$ the radius becomes $|x - k|$.',
          },
          {
            name: 'Shells about a horizontal axis',
            tag: 'region given as x(y)',
            formula: 'V = \\int_c^d 2\\pi\\,y\\,g(y)\\,dy',
            body: 'Horizontal strip at $y$: radius $y$, height $g(y)$ (the width of the region at that $y$).',
          },
        ],
        steps: {
          traceLabel: 'On $y = x - x^2$, $0 \\le x \\le 1$, about the y-axis',
          items: [
            {
              title: 'Draw a strip parallel to the axis of rotation.',
              body: 'For a vertical axis, a vertical strip at position $x$ with thickness $dx$.',
              state: 'vertical strip at $x$, from $y = 0$ up to $y = x - x^2$',
            },
            {
              title: 'Write the radius and the height.',
              body: 'Radius: distance from the strip to the axis. Height: length of the strip (top curve minus bottom curve).',
              state: '$r = x,\\qquad h = x - x^2$',
            },
            {
              title: 'Set up ∫ 2π r h across the region.',
              body: 'The limits run across the region in the strip variable, from the first strip to the last.',
              state: '$V = 2\\pi\\int_0^1 x\\,(x - x^2)\\,dx$',
            },
            {
              title: 'Integrate.',
              body: `Expand, ${link('integrals.power-rule', 'power rule')}, evaluate.`,
              state: '$V = 2\\pi\\Big[\\frac{x^3}{3} - \\frac{x^4}{4}\\Big]_0^1 = 2\\pi\\cdot\\frac{1}{12} = \\frac{\\pi}{6}$',
              atomic: 'power-rule-integration',
            },
          ],
        },
        examples: [
          {
            title: 'about the y-axis',
            badge: 'basic',
            lines: [
              { math: '$y = x - x^2$, $0 \\le x \\le 1$, about the $y$-axis', why: '$r = x$, $h = x - x^2$' },
              { math: '$V = 2\\pi\\int_0^1 (x^2 - x^3)\\,dx = \\frac{\\pi}{6}$', why: '', answer: true },
            ],
          },
          {
            title: 'a region a washer would struggle with',
            badge: 'no solving for x',
            lines: [
              { math: 'under $y = \\sqrt{x}$, $0 \\le x \\le 4$, about the $y$-axis', why: '$r = x$, $h = \\sqrt{x}$' },
              { math: '$V = 2\\pi\\int_0^4 x^{3/2}\\,dx = 2\\pi\\cdot\\frac{2}{5}\\big[x^{5/2}\\big]_0^4$', why: 'power rule' },
              { math: '$= \\frac{4\\pi}{5}\\cdot 32 = \\frac{128\\pi}{5}$', why: '', answer: true },
            ],
          },
          {
            title: 'about a shifted vertical axis',
            badge: 'axis x = 2',
            lines: [
              { math: '$y = x - x^2$, $0 \\le x \\le 1$, about $x = 2$', why: 'radius $2 - x$, same height' },
              { math: '$V = 2\\pi\\int_0^1 (2 - x)(x - x^2)\\,dx = 2\\pi\\int_0^1 (2x - 3x^2 + x^3)\\,dx$', why: 'expand' },
              { math: '$= 2\\pi\\Big(1 - 1 + \\frac{1}{4}\\Big) = \\frac{\\pi}{2}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Unroll one shell: it becomes a rectangular slab of length $2\\pi r$ (the circumference), height $h$ and thickness $dx$. That is where $2\\pi r h\\,dx$ comes from. Shells and washers always give the same volume; they differ only in how the solid is cut.',
        },
        pitfalls: [
          {
            title: 'Using the height as the radius',
            wrong: '$2\\pi\\int f(x)\\cdot f(x)\\,dx$',
            right: 'the radius is the distance from the strip to the axis, here $x$',
          },
          {
            title: 'Wrong radius for a shifted axis',
            wrong: '$r = x$ for rotation about $x = 2$',
            right: '$r = 2 - x$',
          },
          {
            title: 'Limits in the wrong variable',
            wrong: '$y$-limits with a $dx$ integral',
            right: 'the limits run across the region in the strip variable $x$',
          },
          {
            title: 'Dropping 2π',
            wrong: '$\\int_0^1 x(x - x^2)\\,dx = \\frac{1}{12}$',
            right: '$2\\pi\\cdot\\frac{1}{12} = \\frac{\\pi}{6}$',
          },
        ],
        related: ['volume-disk-washer', 'area-between-curves', 'area-volume-problems'],
        builtOn: [
          { label: 'Fundamental Theorem, Part 2', url: ruleUrl('integrals.ftc-2') },
          { label: 'Power rule (integrals)', url: ruleUrl('integrals.power-rule') },
        ],
      },
    },
    {
      id: 'arc-length',
      slug: 'arc-length',
      name: 'How to find the arc length of a curve',
      description: 'Integrate $\\sqrt{1 + [f\'(x)]^2}$ along the curve; parametric curves use $\\sqrt{x\'^2 + y\'^2}$.',
      uses: ['derivative', 'FTC part 2', 'substitution'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Arc Length of a Curve (Step by Step) | Learn Math Class',
        description:
          "Arc length of y = f(x): differentiate, form √(1 + f'²), integrate between the limits; parametric version √(x'² + y'²). Worked examples and the common mistakes.",
        keywords: ['arc length', 'how to find arc length of a curve', 'arc length formula calculus', 'arc length examples', 'parametric arc length'],
      },
      page: {
        h1: 'How to Find the Arc Length of a Curve',
        lead:
          "The length of a curve $y = f(x)$ from $a$ to $b$ is $\\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$: each tiny piece of the curve is the hypotenuse of a triangle with legs $dx$ and $f'(x)\\,dx$.",
        recognize:
          '"Find the length of the curve $y = \\ldots$ from $x = a$ to $x = b$", "arc length", or a parametric curve $x(t)$, $y(t)$. Test: a length along a curve is wanted, not an area.',
        recognizeNote: `The derivative inside the root comes from the [derivative techniques](!/calculus/derivatives/techniques); the integral is evaluated with the ${link('integrals.ftc-2', 'Fundamental Theorem')}. The site has no separate lesson on arc length.`,
        methods: [
          {
            name: 'y = f(x)',
            tag: 'usual choice',
            preferred: true,
            formula: "L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx",
            body: 'For a curve given as a function of $x$. If the curve is given as $x = g(y)$, swap the roles: $\\int_c^d \\sqrt{1 + [g\'(y)]^2}\\,dy$.',
          },
          {
            name: 'Parametric',
            tag: 'x(t), y(t)',
            formula: "L = \\int_\\alpha^\\beta \\sqrt{[x'(t)]^2 + [y'(t)]^2}\\,dt",
            body: 'Speed integrated over time. The $y = f(x)$ formula is the special case $x = t$.',
          },
        ],
        steps: {
          traceLabel: 'On $y = \\tfrac{2}{3}x^{3/2}$, $0 \\le x \\le 3$',
          items: [
            {
              title: "Differentiate f and square the result.",
              body: 'Simplify the square before going on.',
              state: "$f'(x) = x^{1/2},\\qquad [f'(x)]^2 = x$",
            },
            {
              title: "Form 1 + [f']² under the root and simplify.",
              body: 'Look for a perfect square: many textbook curves are chosen so that the root disappears.',
              state: '$\\sqrt{1 + x}$',
            },
            {
              title: 'Set up the integral with the given limits.',
              body: 'The limits are the $x$-values (or $t$-values) at the ends of the curve.',
              state: '$L = \\int_0^3 \\sqrt{1 + x}\\,dx$',
            },
            {
              title: 'Integrate.',
              body: `Usually a [substitution](!${HUB}/u-substitution) and the power rule. Most arc-length integrals have no closed form; then use [numerical integration](!${HUB}/numerical-integration).`,
              state: '$L = \\Big[\\tfrac{2}{3}(1 + x)^{3/2}\\Big]_0^3 = \\tfrac{2}{3}(8 - 1) = \\frac{14}{3}$',
              atomic: 'power-rule-integration',
            },
          ],
        },
        examples: [
          {
            title: 'a root that integrates cleanly',
            badge: 'basic',
            lines: [
              { math: "$y = \\tfrac{2}{3}x^{3/2}$, $0 \\le x \\le 3$: $f' = \\sqrt{x}$", why: '$1 + f\'^2 = 1 + x$' },
              { math: '$L = \\int_0^3 \\sqrt{1 + x}\\,dx = \\frac{14}{3}$', why: '', answer: true },
            ],
          },
          {
            title: 'a hidden perfect square',
            badge: 'classic',
            lines: [
              { math: "$y = \\frac{x^3}{6} + \\frac{1}{2x}$, $1 \\le x \\le 2$: $f' = \\frac{x^2}{2} - \\frac{1}{2x^2}$", why: '' },
              { math: "$1 + f'^2 = \\Big(\\frac{x^2}{2} + \\frac{1}{2x^2}\\Big)^2$", why: 'the cross term flips sign' },
              { math: '$L = \\int_1^2 \\Big(\\frac{x^2}{2} + \\frac{1}{2x^2}\\Big)\\,dx = \\Big[\\frac{x^3}{6} - \\frac{1}{2x}\\Big]_1^2 = \\frac{17}{12}$', why: '', answer: true },
            ],
          },
          {
            title: 'a parametric circle',
            badge: 'check against 2πr',
            lines: [
              { math: '$x = 3\\cos t$, $y = 3\\sin t$, $0 \\le t \\le 2\\pi$', why: "$x' = -3\\sin t$, $y' = 3\\cos t$" },
              { math: "$\\sqrt{x'^2 + y'^2} = \\sqrt{9\\sin^2 t + 9\\cos^2 t} = 3$", why: 'constant speed' },
              { math: '$L = \\int_0^{2\\pi} 3\\,dt = 6\\pi$', why: 'the circumference of a circle of radius $3$', answer: true },
            ],
          },
        ],
        examplesAfter: `Most arc-length integrals have no elementary antiderivative: $y = x^2$ on $[0, 1]$ gives $\\int_0^1 \\sqrt{1 + 4x^2}\\,dx \\approx 1.479$, best done with [numerical integration](!${HUB}/numerical-integration).`,
        visual: {
          caption:
            "Zoom in on the curve: a short piece is nearly straight, with run $dx$ and rise $f'(x)\\,dx$. Pythagoras gives its length $\\sqrt{1 + [f'(x)]^2}\\,dx$, and the integral adds those pieces up along the curve.",
        },
        pitfalls: [
          {
            title: 'Forgetting the 1',
            wrong: "$\\int \\sqrt{[f'(x)]^2}\\,dx$",
            right: "$\\int \\sqrt{1 + [f'(x)]^2}\\,dx$",
          },
          {
            title: 'Squaring f instead of its derivative',
            wrong: '$\\sqrt{1 + [f(x)]^2}$',
            right: "$\\sqrt{1 + [f'(x)]^2}$",
          },
          {
            title: 'Splitting the root',
            wrong: '$\\sqrt{1 + x} = 1 + \\sqrt{x}$',
            right: 'there is no such rule; substitute $u = 1 + x$',
          },
          {
            title: 'Missing the perfect square',
            wrong: "giving up on $\\sqrt{1 + \\big(\\frac{x^2}{2} - \\frac{1}{2x^2}\\big)^2}$",
            right: 'it equals $\\frac{x^2}{2} + \\frac{1}{2x^2}$; check by expanding',
          },
        ],
        related: ['numerical-integration', 'u-substitution', 'area-between-curves'],
        builtOn: [
          { label: 'Fundamental Theorem, Part 2', url: ruleUrl('integrals.ftc-2') },
          { label: 'Substitution rule', url: ruleUrl('integrals.substitution-rule') },
          { label: 'Power rule (integrals)', url: ruleUrl('integrals.power-rule') },
        ],
      },
    },
    {
      id: 'average-value',
      slug: 'average-value',
      name: 'How to find the average value of a function',
      description: 'Integrate over $[a, b]$ and divide by $b - a$; then find where $f$ equals its average.',
      uses: ['average value formula', 'FTC part 2'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Average Value of a Function on an Interval | Learn Math Class',
        description:
          'Average value of a function: integrate over [a, b] and divide by b − a, then find the point c where f equals its average. Examples with x², sin x, velocity.',
        keywords: ['average value of a function', 'how to find the average value of a function', 'mean value theorem for integrals', 'average value examples'],
      },
      page: {
        h1: 'How to Find the Average Value of a Function',
        lead:
          'The average of $f$ on $[a, b]$ is the integral divided by the length of the interval: $\\frac{1}{b - a}\\int_a^b f(x)\\,dx$. It is the height of the rectangle on $[a, b]$ with the same area as the region under the curve.',
        recognize:
          '"Find the average value of $f$ on $[a, b]$", "mean temperature over the day", "average velocity from the velocity function", "find $c$ with $f(c)$ equal to the average". Test: an average of a continuously varying quantity over an interval, not of a list of numbers.',
        recognizeNote: `Defined in ${link('lesson.integrals.definite.average-value', 'Average Value of a Function')} in the definite integrals lesson; the formula is ${link('integrals.average-value', 'here')}.`,
        methods: [
          {
            name: 'Average value',
            tag: 'usual choice',
            preferred: true,
            formula: 'f_{\\text{avg}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx',
            body: `${link('integrals.average-value', 'Average value of a function')}: total divided by length.`,
          },
          {
            name: 'Where the average is attained',
            tag: 'Mean Value Theorem for integrals',
            formula: 'f(c) = f_{\\text{avg}} \\quad \\text{for some } c \\in [a, b]',
            body: `Solve $f(c) = f_{\\text{avg}}$ for $c$. For a continuous $f$ a solution always exists, the integral version of the ${link('derivatives.mean-value-theorem', 'Mean Value Theorem')}.`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = x^2$ over $[0, 3]$',
          items: [
            {
              title: 'Write the formula with the endpoints.',
              body: 'The factor in front is $\\frac{1}{b - a}$, one over the length of the interval.',
              state: '$f_{\\text{avg}} = \\frac{1}{3 - 0}\\int_0^3 x^2\\,dx$',
            },
            {
              title: 'Evaluate the integral.',
              body: `${link('integrals.ftc-2', 'Fundamental Theorem, Part 2')}.`,
              state: '$\\int_0^3 x^2\\,dx = \\Big[\\frac{x^3}{3}\\Big]_0^3 = 9$',
              atomic: 'power-rule-integration',
            },
            {
              title: 'Divide by the length of the interval.',
              body: 'The average has the same units as $f$.',
              state: '$f_{\\text{avg}} = \\frac{9}{3} = 3$',
            },
            {
              title: 'If asked, find c with f(c) equal to the average.',
              body: 'Solve the equation and keep only solutions inside $[a, b]$.',
              state: '$c^2 = 3 \\;\\Rightarrow\\; c = \\sqrt{3} \\approx 1.73$',
            },
          ],
        },
        examples: [
          {
            title: 'a parabola',
            badge: 'basic',
            lines: [
              { math: '$f(x) = x^2$ on $[0, 3]$', why: '' },
              { math: '$f_{\\text{avg}} = \\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{9}{3} = 3$', why: 'attained at $c = \\sqrt{3}$', answer: true },
            ],
          },
          {
            title: 'a sine arch',
            badge: 'not the midpoint value',
            lines: [
              { math: '$f(x) = \\sin x$ on $[0, \\pi]$', why: '' },
              { math: '$f_{\\text{avg}} = \\frac{1}{\\pi}\\int_0^\\pi \\sin x\\,dx = \\frac{2}{\\pi} \\approx 0.64$', why: 'the peak is $1$, the average is lower', answer: true },
            ],
          },
          {
            title: 'average velocity from a velocity function',
            badge: 'checks against distance / time',
            lines: [
              { math: '$v(t) = 3t^2$ m/s on $[0, 2]$', why: '' },
              { math: '$v_{\\text{avg}} = \\frac{1}{2}\\int_0^2 3t^2\\,dt = \\frac{8}{2} = 4$ m/s', why: 'displacement $8$ m over $2$ s', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Pour the area under the curve into a rectangle on the same base: its height is the average value. Where the curve crosses that height is the point $c$ of the Mean Value Theorem for integrals.',
        },
        pitfalls: [
          {
            title: 'Forgetting to divide',
            wrong: 'average $= 9$',
            right: '$\\frac{9}{3} = 3$',
          },
          {
            title: 'Averaging the endpoint values',
            wrong: '$\\frac{f(0) + f(3)}{2} = 4.5$',
            right: 'integrate; that shortcut works only for linear functions',
          },
          {
            title: 'Dividing by b instead of b − a',
            wrong: 'on $[1, 4]$, dividing by $4$',
            right: 'divide by $4 - 1 = 3$',
          },
          {
            title: 'Taking c to be the midpoint',
            wrong: '$c = 1.5$ on $[0, 3]$',
            right: 'solve $f(c) = f_{\\text{avg}}$: $c = \\sqrt{3}$',
          },
        ],
        related: ['definite-integrals-ftc', 'riemann-sums', 'accumulation-problems'],
        builtOn: [
          { label: 'Average value of a function', url: ruleUrl('integrals.average-value') },
          { label: 'Fundamental Theorem, Part 2', url: ruleUrl('integrals.ftc-2') },
          { label: 'Mean Value Theorem', url: ruleUrl('derivatives.mean-value-theorem') },
        ],
      },
    },

    // ═══ III. Strategy ══════════════════════════════════════════════════
    {
      id: 'which-integration-technique',
      slug: 'which-integration-technique',
      name: 'Which integration technique should I use?',
      description: 'A decision tree from the shape of the integrand to the right technique.',
      uses: 'leads to 7 techniques',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Integration Technique to Use? Decision Tree | Learn Math Class',
        description:
          'Choose an integration technique from the shape of the integrand: substitution, parts, trig powers, trig substitution, partial fractions or improper integrals.',
        keywords: ['which integration technique', 'how to choose an integration method', 'integration decision tree', 'integration strategy'],
      },
      page: {
        h1: 'Which Integration Technique Should I Use?',
        lead:
          'Integration is pattern recognition. Ask what shape the integrand has, in this order, and you land on the technique. Try the cheapest test first: can you see a function standing next to its derivative?',
        tree: {
          rootId: 'derivInside',
          svgW: 1100,
          nodes: {
            derivInside: {
              type: 'q',
              text: 'Is there a function with its derivative alongside?',
              children: [
                { label: 'yes', to: 'sub' },
                { label: 'no', to: 'kind' },
              ],
            },
            kind: {
              type: 'q',
              text: 'What shape is the integrand?',
              children: [
                { label: 'a standard form', to: 'standard' },
                { label: 'product of two kinds', to: 'parts' },
                { label: 'powers of sin and cos', to: 'trigPowers' },
                { label: 'root of a quadratic', to: 'trigSub' },
                { label: 'polynomial over polynomial', to: 'partial' },
                { label: 'infinite limit or blow-up', to: 'improper' },
              ],
            },
            sub: { type: 'leaf', to: 'u-substitution', short: 'u-substitution' },
            standard: { type: 'leaf', to: 'power-rule-integration', short: 'Standard antiderivative' },
            parts: { type: 'leaf', to: 'integration-by-parts', short: 'Integration by parts' },
            trigPowers: { type: 'leaf', to: 'trig-powers-integrals', short: 'Powers of sin and cos' },
            trigSub: { type: 'leaf', to: 'trig-substitution', short: 'Trig substitution' },
            partial: { type: 'leaf', to: 'partial-fractions', short: 'Partial fractions' },
            improper: { type: 'leaf', to: 'improper-integrals', short: 'Improper integral' },
          },
          branches: [
            {
              condition: 'A function appears together with (a constant multiple of) its derivative, e.g. $2x\\cos(x^2)$, $\\frac{\\ln x}{x}$, $e^{3x}$.',
              answer: `Use [u-substitution](!${HUB}/u-substitution) with $u$ = the inner function (${link('integrals.substitution-rule', 'substitution rule')}).`,
            },
            {
              condition: 'The integrand is a single standard form: a power of $x$, $e^x$, $a^x$, $\\frac{1}{x}$, a basic trig function, or an inverse-trig pattern.',
              answer: `Write the antiderivative directly from the single-rule cards on the hub (${link('lesson.integrals.indefinite.formulas', 'basic antiderivative formulas')}).`,
            },
            {
              condition: 'Two different kinds of function are multiplied ($x e^x$, $x\\sin x$, $x^2\\ln x$), or a lone $\\ln x$ or $\\arctan x$.',
              answer: `Use [integration by parts](!${HUB}/integration-by-parts) (${link('integrals.integration-by-parts', 'formula')}); for a polynomial times $e^{kx}$ or a trig function, the [tabular method](!${HUB}/tabular-integration).`,
            },
            {
              condition: 'Powers and products of $\\sin x$ and $\\cos x$ (or $\\tan x$ and $\\sec x$).',
              answer: `Use the method for [powers of sine and cosine](!${HUB}/trig-powers-integrals): save one factor if a power is odd, reduce the power if both are even.`,
            },
            {
              condition: 'A square root of $a^2 - x^2$, $a^2 + x^2$ or $x^2 - a^2$ with no matching $x\\,dx$ factor.',
              answer: `Use [trigonometric substitution](!${HUB}/trig-substitution).`,
            },
            {
              condition: 'A polynomial divided by a polynomial whose denominator factors.',
              answer: `Use [partial fractions](!${HUB}/partial-fractions), after dividing if the top degree is not smaller.`,
            },
            {
              condition: 'A limit of integration is infinite, or the integrand blows up on the interval.',
              answer: `Treat it as an [improper integral](!${HUB}/improper-integrals): replace the bad endpoint by $t$ and take the limit, then use whichever technique above fits the integrand.`,
            },
          ],
        },
        related: ['u-substitution', 'integration-by-parts', 'partial-fractions'],
        builtOn: [
          { label: 'Substitution rule', url: ruleUrl('integrals.substitution-rule') },
          { label: 'Integration by parts', url: ruleUrl('integrals.integration-by-parts') },
          { label: 'Integration techniques (lesson)', url: ruleUrl('lesson.integrals.techniques') },
        ],
      },
    },

    // ═══ IV. Applied ════════════════════════════════════════════════════
    {
      id: 'accumulation-problems',
      slug: 'accumulation-problems',
      name: 'How to solve accumulation problems',
      description: 'A rate integrated over time gives the total change: water in a tank, distance from velocity.',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Accumulation Problems with Integrals | Learn Math Class',
        description:
          'Turn a rate into a total: identify the rate and interval, add the initial amount, mind the sign, integrate. Water-tank, velocity and population examples.',
        keywords: ['accumulation problems', 'net change theorem', 'integral of a rate of change', 'total distance from velocity', 'accumulation function word problems'],
      },
      page: {
        h1: 'How to Solve Accumulation Problems',
        lead:
          "A rate of change integrated over time gives the total change. Water flowing in, a car's velocity, a population's growth rate: the integral of the rate from $a$ to $b$ is how much accumulated between $a$ and $b$.",
        recognize:
          'The problem gives a **rate**: litres per minute, metres per second, people per year, as a formula $r(t)$, a table or a graph, and asks for a **total**: how much water, how far, how many, or the amount at time $b$ given the amount at time $a$.',
        setup: [
          { label: 'Rate', body: 'Identify $r(t)$ and its units: an amount per unit of time. If the problem gives the amount itself, you do not need an integral.' },
          { label: 'Interval', body: 'Read off $[a, b]$ in the same time unit as the rate. Convert hours to minutes if the rate is per minute.' },
          { label: 'Initial amount', body: 'If the question asks for the amount at time $b$, you need the amount at time $a$: $\\text{amount}(b) = \\text{amount}(a) + \\int_a^b r(t)\\,dt$.' },
          { label: 'Sign', body: 'A rate that is sometimes negative: the net change integrates the signed rate; total distance or total flow integrates $|r(t)|$, so split where $r(t) = 0$.' },
          { label: 'Integral', body: 'Write the definite integral with the limits and the integrand, units included.' },
        ],
        handoff: {
          to: 'definite-integrals-ftc',
          body: `Evaluate the definite integral with the Fundamental Theorem, or with a [Riemann sum](!${HUB}/riemann-sums) when only a table or a graph is given.`,
        },
        interpretation:
          'The answer has the units of the amount (litres, metres, people), not of the rate. Check the sign: a negative net change means the quantity decreased. For total distance or total output make sure every piece was counted positive.',
        examples: [
          {
            title: 'water in a tank',
            badge: 'initial amount',
            lines: [
              { math: 'water enters at $r(t) = 20 - 2t$ L/min; the tank holds $50$ L at $t = 0$; amount at $t = 5$?', why: 'rate, interval, initial amount' },
              { math: '$50 + \\int_0^5 (20 - 2t)\\,dt = 50 + \\big[20t - t^2\\big]_0^5$', why: 'amount $=$ initial $+$ accumulated' },
              { math: '$= 50 + 75 = 125$ L', why: '', answer: true },
            ],
          },
          {
            title: 'displacement versus distance',
            badge: 'sign matters',
            lines: [
              { math: '$v(t) = t^2 - 4$ m/s on $[0, 3]$', why: '$v < 0$ on $[0, 2)$, $v > 0$ on $(2, 3]$' },
              { math: 'displacement $= \\int_0^3 (t^2 - 4)\\,dt = \\Big[\\frac{t^3}{3} - 4t\\Big]_0^3 = -3$ m', why: 'net change: $3$ m behind the start' },
              { math: 'distance $= \\int_0^2 (4 - t^2)\\,dt + \\int_2^3 (t^2 - 4)\\,dt = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3} \\approx 7.67$ m', why: 'both pieces counted positive', answer: true },
            ],
          },
          {
            title: 'population growth',
            badge: 'rate per year',
            lines: [
              { math: 'a town grows at $1000 + 50t$ people per year for $10$ years; how many people are added?', why: 'rate and interval' },
              { math: '$\\int_0^{10} (1000 + 50t)\\,dt = \\big[1000t + 25t^2\\big]_0^{10} = 12{,}500$ people', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The area under the rate curve between $a$ and $b$ is the amount accumulated. Where the rate dips below the axis, the area counts negative: the quantity is draining away. The accumulated amount at time $b$ is the starting amount plus that signed area.',
        },
        pitfalls: [
          {
            title: 'Integrating the amount instead of the rate',
            wrong: '$\\int_a^b A(t)\\,dt$ for the total',
            right: "integrate the rate $r(t) = A'(t)$",
          },
          {
            title: 'Forgetting the initial amount',
            wrong: 'amount at $t = 5$ is $75$ L',
            right: '$50 + 75 = 125$ L',
          },
          {
            title: 'Reporting displacement as distance',
            wrong: 'distance travelled $= -3$ m',
            right: 'distance integrates $|v|$: $\\frac{23}{3}$ m',
          },
          {
            title: 'Mixed time units',
            wrong: 'a rate per minute integrated over hours',
            right: 'convert the interval to minutes first',
          },
        ],
        related: ['definite-integrals-ftc', 'average-value', 'riemann-sums'],
        builtOn: [
          { label: 'Fundamental Theorem, Part 2', url: ruleUrl('integrals.ftc-2') },
          { label: 'Fundamental Theorem, Part 1', url: ruleUrl('integrals.ftc-1') },
          { label: 'Total unsigned area', url: ruleUrl('integrals.total-unsigned-area') },
        ],
      },
    },
    {
      id: 'area-volume-problems',
      slug: 'area-volume-problems',
      name: 'How to solve area and volume word problems',
      description: 'A plate, a window, a bowl or a tank described in words: draw it, choose the slice, integrate.',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 2 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Area and Volume Word Problems with Integrals | Learn Math Class',
        description:
          'Set up area and volume word problems: draw the region, choose axes, pick the slice, find the limits, keep the units, integrate. A window and a bowl worked out.',
        keywords: ['area word problems calculus', 'volume word problems integrals', 'solid of revolution word problem', 'applications of integration word problems'],
      },
      page: {
        h1: 'How to Solve Area and Volume Word Problems',
        lead:
          'A word problem about a region or a solid hides a definite integral. The work is drawing the region, choosing the slice, and translating the words into the limits and the integrand. The integration itself is handed to the area or volume method.',
        recognize:
          '"A plate / window / lake has the shape bounded by …", "a bowl / tank / nose cone is formed by rotating …", "how much paint, water, material". A shape is described in words or by curves, and a measurement (area, volume, capacity) is asked for.',
        setup: [
          { label: 'Picture', body: 'Draw the region. Label every curve with its equation and mark the axis of rotation if there is one.' },
          { label: 'Coordinates', body: 'Place the axes so the equations are simple: a symmetric shape centred on the $y$-axis, a tank with its bottom at the origin. Write every boundary as an equation.' },
          { label: 'Slice', body: 'Area: a vertical or horizontal strip. Volume: a disk, a washer or a shell. Pick the one whose radius or height is easiest to write.' },
          { label: 'Limits', body: 'Where the slices start and end. Solve for the intersections of the curves if they are not given.' },
          { label: 'Units', body: 'Keep one unit throughout. A capacity in litres needs the volume in cm$^3$ first ($1000$ cm$^3 = 1$ L).' },
        ],
        handoff: {
          to: 'area-between-curves',
          body: `Set up the integral as in the area-between-curves method, or for a solid of revolution as in the [disk and washer](!${HUB}/volume-disk-washer) or [shell](!${HUB}/volume-shells) method, and evaluate it.`,
        },
        interpretation:
          'Give the answer with units squared or cubed, converted if the question asks for litres or gallons. Sanity-check against a bounding rectangle or cylinder: the answer must be smaller than that.',
        examples: [
          {
            title: 'an arched window',
            badge: 'area',
            lines: [
              { math: 'the window is bounded by $y = 4 - x^2$ and the sill $y = 0$ (metres); area?', why: 'region between a parabola and a line' },
              { math: '$A = \\int_{-2}^2 (4 - x^2)\\,dx = \\Big[4x - \\frac{x^3}{3}\\Big]_{-2}^2$', why: 'limits where $4 - x^2 = 0$' },
              { math: '$= 2\\Big(8 - \\frac{8}{3}\\Big) = \\frac{32}{3} \\approx 10.7$ m$^2$', why: 'less than the $4 \\times 4 = 16$ m$^2$ bounding box', answer: true },
            ],
          },
          {
            title: 'a bowl',
            badge: 'volume, capacity in litres',
            lines: [
              { math: 'the bowl is the solid formed by rotating $y = x^2$, $0 \\le y \\le 4$ (cm), about the $y$-axis; capacity?', why: 'solid of revolution about a vertical axis' },
              { math: 'disks perpendicular to the $y$-axis: $r^2 = x^2 = y$', why: 'slice at height $y$' },
              { math: '$V = \\pi\\int_0^4 y\\,dy = 8\\pi \\approx 25.1$ cm$^3 \\approx 0.025$ L', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The same solid can be sliced two ways: disks perpendicular to the axis or shells parallel to it. Draw the slice first; the slice tells you the variable of integration, and the variable tells you which equations you need to solve for.',
        },
        pitfalls: [
          {
            title: 'Wrong variable of integration',
            wrong: '$\\pi\\int x^4\\,dx$ for rotation about the $y$-axis',
            right: 'slice perpendicular to the axis ($dy$) or use shells',
          },
          {
            title: 'Missing half the region',
            wrong: '$\\int_0^2 (4 - x^2)\\,dx$ for the whole window',
            right: 'from $-2$ to $2$, or double the half',
          },
          {
            title: 'Unit slip',
            wrong: '$25.1$ cm$^3$ reported as $25.1$ L',
            right: '$1000$ cm$^3 = 1$ L, so $0.025$ L',
          },
          {
            title: 'Limits from the wrong curve',
            wrong: '$y$-values used as limits of a $dx$ integral',
            right: 'the limits belong to the slice variable',
          },
        ],
        related: ['area-between-curves', 'volume-disk-washer', 'volume-shells'],
        builtOn: [
          { label: 'Fundamental Theorem, Part 2', url: ruleUrl('integrals.ftc-2') },
          { label: 'Properties of definite integrals', url: ruleUrl('lesson.integrals.definite.properties') },
        ],
      },
    },
    {
      id: 'work-problems',
      slug: 'work-problems',
      name: 'How to solve work problems with integrals',
      description: 'A changing force (a spring) or parts moving different distances (pumping a tank).',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 2 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Work Problems with Integrals (Springs and Pumping) | Learn Math Class',
        description:
          "Work integrals: choose the variable, write the force (spring kx) or a slice's weight times its lift distance, set the limits, integrate. Spring and tank.",
        keywords: ['work problems calculus', 'work integral', 'spring work problem', 'pumping water out of a tank work', 'work done by a variable force'],
      },
      page: {
        h1: 'How to Solve Work Problems with Integrals',
        lead:
          'Work is force times distance, but when the force changes (a stretching spring) or different parts move different distances (pumping water out of a tank), you add up small pieces: $W = \\int F\\,dx$, or $W = \\int (\\text{weight of a slice}) \\times (\\text{distance it moves})$.',
        recognize:
          '"How much work is done stretching a spring from … to …", "pumping the water out of a tank", "lifting a leaky bucket or a hanging chain". Trigger words: **work**, joules, foot-pounds, spring constant, pump, lift.',
        setup: [
          { label: 'Type', body: 'A variable force along a line: $W = \\int_a^b F(x)\\,dx$. A body whose parts move different distances: slice it and write the work on one slice.' },
          { label: 'Variable', body: "Put $x$ along the direction of motion with the origin at a natural point: the spring's natural length, or the bottom (or top) of the tank." },
          { label: 'Force', body: 'Spring: $F = kx$; find $k$ from the given force and stretch. Pumping: weight of a slice $=$ weight density $\\times$ volume of the slice (water: $9800$ N/m$^3$).' },
          { label: 'Distance', body: 'For a slice at position $x$, how far it is lifted, e.g. to the top of the tank: $h - x$.' },
          { label: 'Limits', body: 'From where the material or the motion starts to where it ends.' },
        ],
        handoff: {
          to: 'definite-integrals-ftc',
          body: 'Evaluate the resulting definite integral with the Fundamental Theorem.',
        },
        interpretation:
          'Report work in joules (N·m) or foot-pounds, matching the units of force and distance. For pumping, a sanity check: the work must lie between the total weight times the shortest lift and the total weight times the longest lift.',
        examples: [
          {
            title: 'stretching a spring',
            badge: 'F = kx',
            lines: [
              { math: 'a force of $40$ N stretches a spring $0.1$ m beyond natural length; work to stretch it from $0.1$ m to $0.3$ m?', why: 'find $k$ first' },
              { math: '$k = \\frac{40}{0.1} = 400$ N/m, so $F(x) = 400x$', why: "$x = 0$ at natural length" },
              { math: '$W = \\int_{0.1}^{0.3} 400x\\,dx = 200\\big[x^2\\big]_{0.1}^{0.3} = 200(0.09 - 0.01) = 16$ J', why: '', answer: true },
            ],
          },
          {
            title: 'pumping a tank dry',
            badge: 'slices lifted different distances',
            lines: [
              { math: 'a cylindrical tank, radius $2$ m, height $5$ m, full of water, is emptied over the top', why: 'slice at height $x$ from the bottom, thickness $dx$' },
              { math: 'weight of a slice: $9800\\cdot\\pi(2)^2\\,dx = 39200\\pi\\,dx$ N; lifted $5 - x$ m', why: 'weight density $\\times$ volume; distance to the top' },
              { math: '$W = \\int_0^5 39200\\pi(5 - x)\\,dx = 39200\\pi\\Big[5x - \\frac{x^2}{2}\\Big]_0^5 = 490{,}000\\pi \\approx 1.54 \\times 10^6$ J', why: 'between weight $\\times 0$ and weight $\\times 5$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'For a spring, the work is the area under the force line $F = kx$ between the two stretches. For a tank, each horizontal slice is a small weight lifted its own distance; the slices near the bottom travel farthest and cost the most, which is why the integrand is weight times $(h - x)$.',
        },
        pitfalls: [
          {
            title: 'Using the given force as k',
            wrong: '$k = 40$',
            right: '$k = \\frac{F}{x} = \\frac{40}{0.1} = 400$ N/m',
          },
          {
            title: 'Spring limits from the wrong origin',
            wrong: 'limits measured from the wall or from the compressed position',
            right: '$x = 0$ at the natural length',
          },
          {
            title: 'Lifting every slice the full height',
            wrong: '$W = \\text{total weight} \\times 5$',
            right: 'a slice at height $x$ rises $5 - x$; integrate',
          },
          {
            title: 'Mass instead of weight',
            wrong: 'density $1000$ kg/m$^3$ used as a force',
            right: 'multiply by $g = 9.8$ m/s$^2$: $9800$ N/m$^3$',
          },
        ],
        related: ['accumulation-problems', 'area-volume-problems', 'definite-integrals-ftc'],
        builtOn: [
          { label: 'Fundamental Theorem, Part 2', url: ruleUrl('integrals.ftc-2') },
          { label: 'Power rule (integrals)', url: ruleUrl('integrals.power-rule') },
        ],
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
      { url: '/calculus/derivatives/techniques', label: 'Derivatives' },
    ],
  },
};

export default integralsMethods;
