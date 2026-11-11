// functions.methods.js (functions)
// Single data source for /functions/methods (hub) and
// /functions/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/functions/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/functions/methods';

const functionsMethods = {
  hubPath: HUB,
  hubLabel: 'functions methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'evaluate-function',
      name: 'How to evaluate a function',
      subtitle: 'Substitution',
      glyph: 'f(a)',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A function is given by a formula and you need its output at a number or an expression: $f(5)$, $f(-x)$, $f(a + 2)$, or $f(g(x))$.',
      formula: 'f(x) = x^2 + 1 \\;\\Rightarrow\\; f(a + 2) = (a + 2)^2 + 1',
      fields: {
        steps: [
          '1. Replace every $x$ in the formula with the input, written in brackets.',
          '2. Simplify with the usual order of operations.',
        ],
        worked_example: '$f(x) = 2x^2 - 3x + 1:\\quad f(5) = 2(5)^2 - 3(5) + 1 = 50 - 15 + 1 = 36$',
      },
      links: [
        { url: ruleUrl('lesson.fn.basics.6'), label: 'Evaluating functions (lesson)' },
        { url: ruleUrl('lesson.fn.basics.5'), label: 'Function notation (lesson)' },
      ],
    },
    {
      id: 'function-arithmetic',
      name: 'How to add, subtract, multiply or divide two functions',
      subtitle: 'Operations on functions',
      glyph: 'f ± g',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'Two functions are combined with an operation sign: $(f + g)(x)$, $(f - g)(4)$, $(fg)(x)$, $\\left(\\frac{f}{g}\\right)(x)$.',
      formula: '(f \\pm g)(x) = f(x) \\pm g(x), \\quad (fg)(x) = f(x)\\,g(x), \\quad \\left(\\tfrac{f}{g}\\right)(x) = \\tfrac{f(x)}{g(x)},\\ g(x) \\neq 0',
      fields: {
        steps: [
          '1. Combine the outputs: put each formula in brackets and apply the operation.',
          '2. Simplify; the domain is the overlap of both domains, minus the zeros of the denominator for a quotient.',
        ],
        worked_example: '$f(x) = x^2,\\ g(x) = 2x + 1:\\quad (f - g)(x) = x^2 - (2x + 1) = x^2 - 2x - 1, \\quad (f - g)(4) = 7$',
      },
      links: [
        { url: ruleUrl('fn.sum-of-functions'), label: 'Sum of functions' },
        { url: ruleUrl('fn.quotient-of-functions'), label: 'Quotient of functions' },
        { url: ruleUrl('lesson.fn.arithmetic.6'), label: 'Evaluation at a point (lesson)' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'find-domain',
      slug: 'find-domain',
      name: 'How to find the domain of a function',
      description: 'List every operation that can fail (denominators, even roots, logs), solve each condition, and intersect the results.',
      uses: ['nonzero denominator', 'even-root rule', 'log argument rule', 'intersection'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Domain of a Function | Learn Math Class',
        description: 'Find the domain of a function: list denominators, even roots and logs, solve each condition, intersect the results. Worked examples and common mistakes.',
        keywords: ['how to find the domain of a function', 'domain of a function', 'domain in interval notation', 'domain of rational functions', 'domain of square root functions'],
      },
      page: {
        h1: 'How to Find the Domain of a Function',
        lead:
          'The domain is the set of inputs the formula accepts. Start from all real numbers, remove what each operation forbids, and keep only the inputs that pass every test at once.',
        recognize:
          'The question asks "for which $x$ is $f$ defined?", "state the domain", or needs the domain before graphing, composing or inverting. The formula contains an operation that can fail: a fraction such as $\\frac{1}{x - 2}$, an even root such as $\\sqrt{6 - 2x}$, a logarithm such as $\\ln(x^2 - 4)$, or a tangent. Test: scan the formula for denominators, even roots and logs. If there are none, the domain is $\\mathbb{R}$.',
        recognizeNote: `Domain and its notation are defined in the ${link('lesson.fn.domain', 'domain lesson')}.`,
        methods: [
          {
            name: 'From the formula',
            tag: 'usual',
            preferred: true,
            formula: '\\text{Dom}(f) = \\{x \\in \\mathbb{R} : \\text{every operation in } f \\text{ is defined}\\}',
            body: `Write one condition per risky operation and intersect them (${link('lesson.fn.domain.8', 'combined functions')}).`,
          },
          {
            name: 'From the graph',
            tag: 'graph',
            formula: '\\text{Dom}(f) = \\text{shadow of the graph on the } x\\text{-axis}',
            body: `Read how far the graph reaches left and right, with open and solid endpoints (${link('lesson.fn.domain.9', 'domain from a graph')}).`,
          },
          {
            name: 'From the context',
            tag: 'word problem',
            formula: '0 \\leq t \\leq 10',
            body: `Keep only inputs that make sense: no negative lengths, whole numbers for counts (${link('lesson.fn.domain.10', 'domain from context')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = \\dfrac{\\sqrt{x + 1}}{x - 3}$',
          items: [
            {
              title: 'List the operations that can fail.',
              body: 'Mark every denominator, even root and logarithm. Polynomials, odd roots, sine and cosine accept every real number.',
              state: 'root $\\sqrt{x + 1}$, denominator $x - 3$',
            },
            {
              title: 'Write one condition for each.',
              body: `Denominator $\\neq 0$ (${link('lesson.fn.domain.4', 'rational functions')}), radicand $\\geq 0$ (${link('lesson.fn.domain.5', 'radical functions')}), log argument $> 0$ (${link('lesson.fn.domain.6', 'logarithms')}).`,
              state: '$x + 1 \\geq 0$ and $x - 3 \\neq 0$',
            },
            {
              title: 'Solve each condition.',
              body: 'Linear conditions take one line. A quadratic condition needs a sign chart, as in [solving quadratic inequalities](!/algebra/inequalities/methods/quadratic-inequalities).',
              state: '$x \\geq -1$ and $x \\neq 3$',
            },
            {
              title: 'Intersect the conditions.',
              body: 'Every condition must hold at the same time, so keep only the overlap and write it in interval notation.',
              state: '$[-1, 3) \\cup (3, \\infty)$',
            },
            {
              title: 'Check a boundary and a point outside.',
              body: 'An included endpoint must give a real output; a value just outside must fail.',
              state: '$f(-1) = \\frac{0}{-4} = 0$ ✓, $f(-2)$ needs $\\sqrt{-1}$ ✗',
            },
          ],
        },
        examples: [
          {
            title: 'a rational function',
            badge: 'denominator',
            lines: [
              { math: '$g(x) = \\dfrac{5}{x^2 - 9}$: set $x^2 - 9 = 0$', why: 'denominator must not be zero' },
              { math: '$(x - 3)(x + 3) = 0 \\Rightarrow x = \\pm 3$', why: 'factor and solve' },
              { math: '$(-\\infty, -3) \\cup (-3, 3) \\cup (3, \\infty)$', why: 'remove both values', answer: true },
            ],
          },
          {
            title: 'a square root with a negative coefficient',
            badge: 'radical',
            lines: [
              { math: '$f(x) = \\sqrt{6 - 2x}$: need $6 - 2x \\geq 0$', why: 'radicand not negative' },
              { math: '$-2x \\geq -6 \\Rightarrow x \\leq 3$', why: 'divide by $-2$, flip the sign' },
              { math: '$(-\\infty, 3]$', why: '$\\sqrt{0} = 0$ is allowed', answer: true },
            ],
          },
          {
            title: 'a log plus a root',
            badge: 'combined',
            lines: [
              { math: '$g(x) = \\ln(x - 1) + \\sqrt{5 - x}$', why: 'two restrictions' },
              { math: '$x - 1 > 0 \\Rightarrow x > 1$', why: 'log argument positive' },
              { math: '$5 - x \\geq 0 \\Rightarrow x \\leq 5$', why: 'radicand not negative' },
              { math: '$(1, 5]$', why: 'both conditions at once', answer: true },
            ],
          },
        ],
        examplesAfter: 'Watch the excluded inputs drop out of the graph in the [domain visualizer](!/functions/visual-tools/domain).',
        visual: {
          caption:
            'Think of each risky operation as a gate on the number line. A denominator closes single points, an even root closes everything on one side of a boundary, and a logarithm does the same but also closes the boundary itself. The domain is what is left open after every gate has acted, which is why the conditions are joined with "and", never "or". On the graph, the domain is the shadow the curve casts on the $x$-axis.',
        },
        pitfalls: [
          {
            title: 'Cancelling before finding the domain',
            wrong: '$\\frac{x^2 - 4}{x - 2} = x + 2$, so the domain is $\\mathbb{R}$',
            right: 'read the original denominator: $x \\neq 2$, domain $(-\\infty, 2) \\cup (2, \\infty)$',
          },
          {
            title: 'Not flipping the inequality',
            wrong: '$-2x \\geq -6 \\Rightarrow x \\geq 3$',
            right: '$-2x \\geq -6 \\Rightarrow x \\leq 3$; at $x = 4$ the radicand is $-2$',
          },
          {
            title: 'Joining the conditions with "or"',
            wrong: '$x > 1$ or $x \\leq 5$: every real number',
            right: '$x > 1$ and $x \\leq 5$: $(1, 5]$',
          },
          {
            title: 'Excluding the zeros of the numerator',
            wrong: '$\\frac{x}{x - 1}$: remove $x = 0$ and $x = 1$',
            right: 'remove only $x = 1$; $f(0) = 0$ is a valid output',
          },
        ],
        related: ['find-range', 'compose-functions', 'find-asymptotes'],
        builtOn: [
          { label: 'Domain of rational functions (lesson)', url: ruleUrl('lesson.fn.domain.4') },
          { label: 'Domain of radical functions (lesson)', url: ruleUrl('lesson.fn.domain.5') },
          { label: 'Domain of logarithmic functions (lesson)', url: ruleUrl('lesson.fn.domain.6') },
          { label: 'Domain of combined functions (lesson)', url: ruleUrl('lesson.fn.domain.8') },
        ],
      },
    },
    {
      id: 'find-range',
      slug: 'find-range',
      name: 'How to find the range of a function',
      description: 'Find the lowest and highest outputs from the vertex, the endpoints and the end behavior, or solve $y = f(x)$ for $x$.',
      uses: ['vertex', 'end behavior', 'solve for x', 'domain'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Range of a Function | Learn Math Class',
        description: 'Find the range of a function: track the lowest and highest outputs, use the vertex and end behavior, or solve y = f(x) for x. Worked examples and mistakes.',
        keywords: ['how to find the range of a function', 'range of a function', 'range in interval notation', 'range of a quadratic', 'range of a rational function'],
      },
      page: {
        h1: 'How to Find the Range of a Function',
        lead:
          'The range is the set of outputs the function actually produces. Find where the outputs bottom out or top out, check whether those values are reached, and see how far the outputs run in each direction.',
        recognize:
          'The question asks "what values can $f(x)$ take?", "state the range", or needs the range to give the domain of an inverse. Typical inputs: a quadratic $x^2 - 4x + 1$, a shifted root $\\sqrt{x - 1} + 2$, a reciprocal $\\frac{1}{x - 3}$, a function on a closed interval. Test: find the domain first, then ask where the outputs are smallest and largest on it.',
        recognizeNote: `Range and its notation are defined in the ${link('lesson.fn.range', 'range lesson')}.`,
        methods: [
          {
            name: 'Track the lowest and highest outputs',
            tag: 'usual',
            preferred: true,
            formula: 'm \\leq f(x) \\leq M \\;\\Rightarrow\\; \\text{range} \\subseteq [m, M]',
            body: `Use the vertex, the endpoints and the end behavior (${link('lesson.fn.range.5', 'range by behavior')}).`,
          },
          {
            name: 'Solve for x',
            tag: 'algebraic',
            formula: 'y = f(x) \\;\\Rightarrow\\; x = \\ldots(y)',
            body: `Keep every $y$ for which a real $x$ in the domain exists (${link('lesson.fn.range.4', 'range algebraically')}).`,
          },
          {
            name: 'From the graph',
            tag: 'graph',
            formula: '\\text{range} = \\text{shadow of the graph on the } y\\text{-axis}',
            body: `Read the lowest and highest heights the curve reaches (${link('lesson.fn.range.6', 'range from a graph')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = x^2 - 4x + 1$',
          items: [
            {
              title: 'Find the domain.',
              body: 'The range depends on which inputs are allowed; a restricted domain can cut the range.',
              state: '$\\mathbb{R}$',
            },
            {
              title: 'Find where the function turns or starts.',
              body: `For a quadratic, use the ${link('fn.vertex-from-coefficients', 'vertex formula')} $x = -\\frac{b}{2a}$. For a root, use the starting point; on an interval, use the endpoints too.`,
              state: '$x = -\\frac{-4}{2} = 2$',
            },
            {
              title: 'Evaluate the function there.',
              body: 'This output is a candidate for the lowest or highest value.',
              state: '$f(2) = 4 - 8 + 1 = -3$',
              atomic: 'evaluate-function',
            },
            {
              title: 'Read the end behavior.',
              body: 'Ask where the outputs go as $x$ moves to the ends of the domain or toward an excluded value.',
              state: '$a = 1 > 0$: $f(x) \\to \\infty$ at both ends',
            },
            {
              title: 'Write the range.',
              body: 'Use a bracket for a value that is reached and a parenthesis for one that is only approached.',
              state: '$[-3, \\infty)$',
            },
          ],
        },
        examples: [
          {
            title: 'a shifted square root',
            badge: 'starting point',
            lines: [
              { math: '$f(x) = \\sqrt{x - 1} + 2$ on $[1, \\infty)$', why: 'domain first' },
              { math: '$\\sqrt{x - 1}$ takes every value $\\geq 0$', why: 'starts at $0$, grows forever' },
              { math: '$[2, \\infty)$', why: 'add $2$ to every output', answer: true },
            ],
          },
          {
            title: 'a reciprocal',
            badge: 'solve for x',
            lines: [
              { math: '$y = \\dfrac{1}{x - 3} \\Rightarrow x = 3 + \\dfrac{1}{y}$', why: 'solve for $x$' },
              { math: 'a real $x$ exists for every $y \\neq 0$', why: '$\\frac{1}{y}$ needs $y \\neq 0$' },
              { math: '$(-\\infty, 0) \\cup (0, \\infty)$', why: '$0$ is never an output', answer: true },
            ],
          },
          {
            title: 'a quadratic on a closed interval',
            badge: 'restricted domain',
            lines: [
              { math: '$f(x) = x^2$ on $[-1, 3]$', why: '' },
              { math: '$f(-1) = 1$, $f(3) = 9$', why: 'endpoint outputs' },
              { math: '$f(0) = 0$ at the vertex inside', why: 'the curve turns inside' },
              { math: '$[0, 9]$', why: 'lowest $0$, highest $9$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Move a parabola or a root and watch the output interval change in the [range visualizer](!/functions/visual-tools/range).',
        visual: {
          caption:
            'The range is the shadow the graph casts on the $y$-axis. Shine a light from the side: the lowest point of the curve sets the bottom of the shadow and the highest point sets the top. If the curve keeps climbing, the shadow runs to infinity. If it only creeps toward a level, like $2^x$ toward $0$, the shadow stops just short of it, which is why that end gets a parenthesis.',
        },
        pitfalls: [
          {
            title: 'Taking the y-intercept as the vertex height',
            wrong: '$f(x) = x^2 - 4x + 1$ has range $[1, \\infty)$ because $f(0) = 1$',
            right: 'the vertex is at $x = 2$: $f(2) = -3$, range $[-3, \\infty)$',
          },
          {
            title: 'Using only the endpoint outputs',
            wrong: '$x^2$ on $[-1, 3]$: range $[f(-1), f(3)] = [1, 9]$',
            right: 'the vertex lies inside: $f(0) = 0$, range $[0, 9]$',
          },
          {
            title: 'Forgetting that a square root is never negative',
            wrong: '$y = \\sqrt{x} \\Rightarrow x = y^2$, so the range is $\\mathbb{R}$',
            right: '$\\sqrt{x} \\geq 0$ always: range $[0, \\infty)$',
          },
          {
            title: 'Closing an end that is only approached',
            wrong: 'the range of $2^x$ is $[0, \\infty)$',
            right: '$2^x > 0$ for every $x$: range $(0, \\infty)$',
            note: `The ranges of the common families are collected in ${link('lesson.fn.range.7', 'range of common function types')}.`,
          },
        ],
        related: ['find-domain', 'find-inverse', 'analyze-function'],
        builtOn: [
          { label: 'Range by analyzing behavior (lesson)', url: ruleUrl('lesson.fn.range.5') },
          { label: 'Range algebraically (lesson)', url: ruleUrl('lesson.fn.range.4') },
          { label: 'Vertex from coefficients', url: ruleUrl('fn.vertex-from-coefficients') },
        ],
      },
    },
    {
      id: 'compose-functions',
      slug: 'compose-functions',
      name: 'How to compose two functions',
      description: 'Feed the inner function into the outer one: substitute the whole formula, simplify, then check the domain.',
      uses: ['substitution', 'domain of a composition', 'order matters'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Compose Two Functions | Learn Math Class',
        description: 'Compose two functions step by step: find the inner function, substitute it into the outer one, simplify and find the domain. Examples and common mistakes.',
        keywords: ['how to compose functions', 'composition of functions', 'f of g of x', 'composite function examples', 'domain of a composite function'],
      },
      page: {
        h1: 'How to Compose Two Functions',
        lead:
          'Composing means using the output of one function as the input of another. In $(f \\circ g)(x) = f(g(x))$ the inner function $g$ acts first, and its whole formula goes in wherever $f$ has an $x$.',
        recognize:
          'The question shows a small circle or nested brackets: $(f \\circ g)(x)$, $(g \\circ f)(4)$, $f(g(x))$, $f(f(x))$. Typical tasks: a formula for the composite, its value at one number, or its domain. Test: read the expression from the right. The function written last (closest to $x$) acts first.',
        recognizeNote: `Composition is defined in the ${link('lesson.fn.composition', 'function composition lesson')}.`,
        methods: [
          {
            name: 'Formula first',
            tag: 'usual',
            preferred: true,
            formula: '(f \\circ g)(x) = f(g(x))',
            body: `Substitute the whole inner formula into the outer one (${link('fn.composition-of-functions', 'composition of functions')}), then simplify.`,
          },
          {
            name: 'Inside out at a point',
            tag: 'one value',
            formula: '(f \\circ g)(a) = f\\big(g(a)\\big)',
            body: `For one input, compute $g(a)$ first and then evaluate $f$ at that number (${link('lesson.fn.composition.3', 'evaluating at a point')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = x^2 - 4$, $g(x) = 2x + 1$, find $(f \\circ g)(x)$',
          items: [
            {
              title: 'Identify the inner function.',
              body: 'In $f \\circ g$ the function on the right acts first.',
              state: 'inner $g(x) = 2x + 1$, outer $f$',
            },
            {
              title: 'Substitute the whole inner formula into the outer one.',
              body: 'Replace every $x$ in $f$ with $(2x + 1)$, keeping the brackets.',
              state: '$f(g(x)) = (2x + 1)^2 - 4$',
              atomic: 'evaluate-function',
            },
            {
              title: 'Expand and simplify.',
              body: 'Expand the brackets only after the substitution.',
              state: '$4x^2 + 4x + 1 - 4 = 4x^2 + 4x - 3$',
            },
            {
              title: 'Find the domain.',
              body: `Use the ${link('fn.domain-of-a-composition', 'domain of a composition')}: $x$ must be in the domain of $g$, and $g(x)$ in the domain of $f$.`,
              state: 'both are polynomials: $\\mathbb{R}$',
            },
            {
              title: 'Check at one point.',
              body: 'Compare the formula with the inside-out value at an easy input.',
              state: '$g(1) = 3$, $f(3) = 5$; $4 + 4 - 3 = 5$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a value at one point',
            badge: 'inside out',
            lines: [
              { math: '$f(x) = x^2 + 1$, $g(x) = 3x - 2$; find $(f \\circ g)(4)$', why: '' },
              { math: '$g(4) = 3(4) - 2 = 10$', why: 'inner function first' },
              { math: '$(f \\circ g)(4) = f(10) = 101$', why: 'then the outer one', answer: true },
            ],
          },
          {
            title: 'the other order',
            badge: 'formula',
            lines: [
              { math: '$f(x) = x^2 - 4$, $g(x) = 2x + 1$; find $(g \\circ f)(x)$', why: '$f$ acts first now' },
              { math: '$g(f(x)) = 2(x^2 - 4) + 1$', why: 'substitute all of $f(x)$' },
              { math: '$(g \\circ f)(x) = 2x^2 - 7$', why: 'differs from $f \\circ g$', answer: true },
            ],
          },
          {
            title: 'a composite with a restricted domain',
            badge: 'domain',
            lines: [
              { math: '$f(x) = \\sqrt{x}$, $g(x) = x - 3$', why: '' },
              { math: '$(f \\circ g)(x) = \\sqrt{x - 3}$', why: 'substitute' },
              { math: '$g(x) \\geq 0 \\Rightarrow x \\geq 3$', why: '$f$ needs a non-negative input' },
              { math: 'domain $[3, \\infty)$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Follow an input through both machines in the [composition visualizer](!/functions/visual-tools/composition).',
        visual: {
          caption:
            'Picture two machines in a row. The input enters $g$, and whatever comes out is fed straight into $f$. Swapping the machines changes what each one receives, which is why $f \\circ g$ and $g \\circ f$ are usually different. An input can be lost at either machine: if $g$ rejects it, or if $g$ produces something $f$ cannot accept. That is where the two domain conditions come from.',
        },
        pitfalls: [
          {
            title: 'Multiplying instead of composing',
            wrong: '$(f \\circ g)(4) = f(4) \\cdot g(4) = 17 \\cdot 10 = 170$',
            right: '$(f \\circ g)(4) = f(g(4)) = f(10) = 101$',
          },
          {
            title: 'Distributing to the first term only',
            wrong: '$2(x^2 - 4) + 1 = 2x^2 - 4 + 1 = 2x^2 - 3$',
            right: '$2(x^2 - 4) + 1 = 2x^2 - 8 + 1 = 2x^2 - 7$',
          },
          {
            title: 'Reading the domain from the simplified formula',
            wrong: '$f(x) = x^2$, $g(x) = \\sqrt{x}$: $f(g(x)) = x$, domain $\\mathbb{R}$',
            right: '$g(-4)$ does not exist, so the domain is $[0, \\infty)$',
          },
          {
            title: 'Composing in the wrong order',
            wrong: '$(f \\circ g)(x) = g(f(x))$',
            right: '$(f \\circ g)(x) = f(g(x))$: the right-hand function acts first',
            note: `See ${link('lesson.fn.composition.6', 'non-commutativity')} in the lesson.`,
          },
        ],
        related: ['decompose-functions', 'verify-inverse', 'find-domain'],
        builtOn: [
          { label: 'Composition of functions', url: ruleUrl('fn.composition-of-functions') },
          { label: 'Domain of a composition', url: ruleUrl('fn.domain-of-a-composition') },
          { label: 'Finding composite functions (lesson)', url: ruleUrl('lesson.fn.composition.4') },
        ],
      },
    },
    {
      id: 'decompose-functions',
      slug: 'decompose-functions',
      name: 'How to decompose a function into two functions',
      description: 'Read the order of operations on $x$: the last operation is the outer function, everything before it the inner one.',
      uses: ['order of operations', 'composition', 'check by composing'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Decompose a Function into Two Functions | Learn Math Class',
        description: 'Decompose a function as f(g(x)): read the order of operations on x, take the last one as the outer function, then compose back to check. Worked examples.',
        keywords: ['how to decompose a function', 'decomposition of functions', 'find f and g such that h = f(g(x))', 'inner and outer function', 'decomposing composite functions'],
      },
      page: {
        h1: 'How to Decompose a Function into Two Functions',
        lead:
          'Decomposing reverses composition: you write a given $h$ as $f(g(x))$ with simpler $f$ and $g$. Follow what the formula does to $x$; the last operation becomes the outer function.',
        recognize:
          'The question asks "find $f$ and $g$ such that $h = f \\circ g$", or you need the inner part for the chain rule or for a substitution. Typical forms: a power of a bracket $(3x - 7)^5$, a root of an expression $\\sqrt{x^2 + 1}$, a constant over a power $\\frac{4}{(x + 2)^3}$. Test: is there a block of $x$-terms that is then treated as one unit?',
        recognizeNote: `Decomposition is covered in the lesson section ${link('lesson.fn.composition.9', 'Decomposing Functions')}.`,
        steps: {
          traceLabel: 'On $h(x) = \\sqrt{x^2 + 1}$',
          items: [
            {
              title: 'Read the order of operations on x.',
              body: 'Say what happens to the input first, second and last, as if you were computing $h(2)$.',
              state: 'square, add $1$, take the root',
            },
            {
              title: 'Make the last operation the outer function.',
              body: 'Write it with a plain $x$ as its input.',
              state: '$f(x) = \\sqrt{x}$',
            },
            {
              title: 'Make everything before it the inner function.',
              body: 'The inner function is the block the outer one acts on.',
              state: '$g(x) = x^2 + 1$',
            },
            {
              title: 'Compose back to check.',
              body: 'Substitute $g$ into $f$ and compare with $h$.',
              state: '$f(g(x)) = \\sqrt{x^2 + 1} = h(x)$ ✓',
              atomic: 'evaluate-function',
            },
          ],
        },
        examples: [
          {
            title: 'a power of a bracket',
            badge: '2 layers',
            lines: [
              { math: '$h(x) = (3x - 7)^5$', why: 'form $3x - 7$, then fifth power' },
              { math: '$g(x) = 3x - 7$, $f(x) = x^5$', why: 'last step is outside' },
              { math: '$f(g(x)) = (3x - 7)^5 = h(x)$ ✓', why: 'compose back', answer: true },
            ],
          },
          {
            title: 'a constant over a power',
            badge: 'keep the constant',
            lines: [
              { math: '$h(x) = \\dfrac{4}{(x + 2)^3}$', why: 'add $2$, cube, divide into $4$' },
              { math: '$g(x) = x + 2$, $f(x) = \\dfrac{4}{x^3}$', why: 'the $4$ stays in $f$' },
              { math: '$f(g(x)) = \\dfrac{4}{(x + 2)^3} = h(x)$ ✓', why: 'compose back', answer: true },
            ],
          },
          {
            title: 'three layers',
            badge: '$f \\circ g \\circ k$',
            lines: [
              { math: '$h(x) = \\sqrt{(x - 1)^2 + 4}$', why: 'subtract, square and add, root' },
              { math: '$k(x) = x - 1$, $g(x) = x^2 + 4$, $f(x) = \\sqrt{x}$', why: 'innermost to outermost' },
              { math: '$h = f \\circ g \\circ k$', why: 'brackets can be grouped either way', answer: true },
            ],
          },
        ],
        examplesAfter: `To build composites in the other direction, see [composing two functions](!${HUB}/compose-functions).`,
        visual: {
          caption:
            'A formula is a recipe read from the inside out. Evaluating $\\sqrt{x^2 + 1}$ at $x = 2$, you first compute $2^2 + 1 = 5$ and only then take $\\sqrt{5}$. The part you finish first is the inner function; the final step is the outer one. Split the recipe at a different place and you get a different, equally valid decomposition. Trace one input through both stages in the [composition visualizer](!/functions/visual-tools/composition).',
        },
        pitfalls: [
          {
            title: 'Swapping inner and outer',
            wrong: '$h(x) = (3x - 7)^5$ with $f(x) = 3x - 7$, $g(x) = x^5$',
            right: 'that gives $f(g(x)) = 3x^5 - 7$; the power acts last, so $f(x) = x^5$',
          },
          {
            title: 'Losing a constant',
            wrong: '$\\frac{4}{(x + 2)^3}$ with $f(x) = \\frac{1}{x^3}$, $g(x) = x + 2$',
            right: '$f(x) = \\frac{4}{x^3}$; check by composing back',
          },
          {
            title: 'Giving a decomposition that does nothing',
            wrong: '$(x + 1)^2$ with $f(x) = (x + 1)^2$ and $g(x) = x$',
            right: '$f(x) = x^2$, $g(x) = x + 1$: each part does real work',
            note: 'The first one is correct but useless; questions expect neither part to be $x$ itself.',
          },
        ],
        related: ['compose-functions', 'graph-transformations'],
        builtOn: [
          { label: 'Decomposing functions (lesson)', url: ruleUrl('lesson.fn.composition.9') },
          { label: 'Composition of functions', url: ruleUrl('fn.composition-of-functions') },
          { label: 'Composition associativity', url: ruleUrl('fn.composition-associativity') },
        ],
      },
    },
    {
      id: 'find-inverse',
      slug: 'find-inverse',
      name: 'How to find the inverse of a function',
      description: 'Check that the function is one-to-one, write $y = f(x)$, swap $x$ and $y$, and solve for $y$.',
      uses: ['one-to-one', 'swap x and y', 'domain-range swap'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Inverse of a Function | Learn Math Class',
        description: 'Find the inverse of a function: check it is one-to-one, swap x and y, solve for y, restrict the domain when needed. Linear, cubic and quadratic examples.',
        keywords: ['how to find the inverse of a function', 'inverse function steps', 'swap x and y', 'inverse of a rational function', 'inverse function examples'],
      },
      page: {
        h1: 'How to Find the Inverse of a Function',
        lead:
          'The inverse $f^{-1}$ undoes $f$: it sends each output back to the input that produced it. Algebraically you swap the roles of $x$ and $y$ and solve for the new $y$.',
        recognize:
          'The question asks for $f^{-1}(x)$, "the inverse", or the input that gives a certain output. Typical forms: linear $3x - 7$, a power plus a constant $x^3 + 2$, a rational $\\frac{2x + 1}{x - 3}$, a quadratic on half its domain. Test: does every horizontal line cross the graph at most once? If not, restrict the domain first.',
        recognizeNote: `Inverses are defined in the ${link('lesson.fn.inverse', 'inverse functions lesson')}.`,
        methods: [
          {
            name: 'Swap and solve',
            tag: 'usual',
            preferred: true,
            formula: 'y = f(x) \\;\\to\\; x = f(y) \\;\\to\\; y = f^{-1}(x)',
            body: `Works for any one-to-one formula (${link('lesson.fn.inverse.4', 'finding the inverse algebraically')}).`,
          },
          {
            name: 'Undo in reverse order',
            tag: 'one x',
            formula: 'f: \\times 3,\\ -7 \\quad\\Rightarrow\\quad f^{-1}: +7,\\ \\div 3',
            body: 'When $x$ appears once, list the operations on it and undo them from last to first.',
          },
          {
            name: 'Reflect the graph',
            tag: 'graph',
            formula: '(a, b) \\in f \\iff (b, a) \\in f^{-1}',
            body: `Mirror the graph in the line $y = x$ (${link('lesson.fn.inverse.3', 'inverse as reflection')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = \\dfrac{2x + 1}{x - 3}$',
          items: [
            {
              title: 'Check that f is one-to-one.',
              body: `Use the ${link('lesson.fn.inverse.7', 'horizontal line test')}, or rewrite the formula so $x$ appears once.`,
              state: '$f(x) = 2 + \\frac{7}{x - 3}$ ✓',
            },
            {
              title: 'Write y = f(x) and swap x and y.',
              body: 'The swap records that the inverse exchanges inputs and outputs.',
              state: '$x = \\dfrac{2y + 1}{y - 3}$',
            },
            {
              title: 'Solve for y.',
              body: 'Clear the fraction, collect the $y$-terms on one side, and factor $y$ out.',
              state: '$xy - 3x = 2y + 1 \\Rightarrow y(x - 2) = 3x + 1$',
            },
            {
              title: 'Write the inverse with its domain.',
              body: `The ${link('fn.domain-range-swap-of-inverse', 'domain of the inverse')} is the range of $f$.`,
              state: '$f^{-1}(x) = \\dfrac{3x + 1}{x - 2}$, $x \\neq 2$',
            },
            {
              title: 'Check one point.',
              body: 'Send a number through $f$ and back through $f^{-1}$.',
              state: '$f(4) = 9$, $f^{-1}(9) = \\frac{28}{7} = 4$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a linear function',
            badge: 'swap and solve',
            lines: [
              { math: '$y = 3x - 7 \\to x = 3y - 7$', why: 'swap $x$ and $y$' },
              { math: '$x + 7 = 3y$', why: 'add $7$' },
              { math: '$f^{-1}(x) = \\dfrac{x + 7}{3}$', why: 'divide by $3$', answer: true },
            ],
          },
          {
            title: 'a cube plus a constant',
            badge: 'odd power',
            lines: [
              { math: '$y = x^3 + 2 \\to x = y^3 + 2$', why: 'cubes pass the line test' },
              { math: '$y^3 = x - 2$', why: 'isolate the power' },
              { math: '$f^{-1}(x) = \\sqrt[3]{x - 2}$', why: 'cube root, any real $x$', answer: true },
            ],
          },
          {
            title: 'a quadratic on half its domain',
            badge: 'restricted',
            lines: [
              { math: '$f(x) = (x - 1)^2$, $x \\geq 1$', why: 'right half is one-to-one' },
              { math: '$x = (y - 1)^2 \\Rightarrow y - 1 = \\pm\\sqrt{x}$', why: 'swap, take roots' },
              { math: '$y \\geq 1$, so take the $+$ sign', why: 'outputs of $f^{-1}$ are inputs of $f$' },
              { math: '$f^{-1}(x) = 1 + \\sqrt{x}$, $x \\geq 0$', why: 'check: $f(3) = 4$, $f^{-1}(4) = 3$', answer: true },
            ],
          },
        ],
        examplesAfter: 'See a function and its mirror image side by side in the [inverse function visualizer](!/functions/visual-tools/inverse-function).',
        visual: {
          caption:
            'Swapping $x$ and $y$ swaps the coordinates of every point, and swapping coordinates is the same as reflecting in the line $y = x$. That is why the graph of $f^{-1}$ is the mirror image of the graph of $f$. A horizontal line crossing $f$ twice would become a vertical line crossing the mirror image twice, so the mirror image would fail to be a function. Hence the one-to-one check comes first.',
        },
        pitfalls: [
          {
            title: 'Undoing the steps in the original order',
            wrong: '$f(x) = 3x - 7 \\Rightarrow f^{-1}(x) = \\frac{x}{3} + 7$',
            right: 'undo the last step first: $f^{-1}(x) = \\frac{x + 7}{3}$',
          },
          {
            title: 'Reading the inverse as a reciprocal',
            wrong: '$f^{-1}(x) = \\dfrac{1}{3x - 7}$',
            right: '$f^{-1}(x) = \\frac{x + 7}{3}$; the $-1$ is not an exponent here',
          },
          {
            title: 'Inverting a function that is not one-to-one',
            wrong: '$f(x) = x^2 \\Rightarrow f^{-1}(x) = \\pm\\sqrt{x}$',
            right: 'restrict to $[0, \\infty)$ first: $f^{-1}(x) = \\sqrt{x}$',
          },
          {
            title: 'Taking the positive root on the left branch',
            wrong: '$f(x) = x^2$ on $(-\\infty, 0]$: $f^{-1}(x) = \\sqrt{x}$',
            right: '$f^{-1}(x) = -\\sqrt{x}$, since $f(-2) = 4$ must return $-2$',
            note: `See ${link('lesson.fn.inverse.9', 'restricting the domain')} in the lesson.`,
          },
        ],
        related: ['verify-inverse', 'find-range', 'find-domain'],
        builtOn: [
          { label: 'Inverse function definition', url: ruleUrl('fn.inverse-function-definition') },
          { label: 'Finding the inverse algebraically (lesson)', url: ruleUrl('lesson.fn.inverse.4') },
          { label: 'Domain and range swap', url: ruleUrl('fn.domain-range-swap-of-inverse') },
          { label: 'Restricting the domain (lesson)', url: ruleUrl('lesson.fn.inverse.9') },
        ],
      },
    },
    {
      id: 'verify-inverse',
      slug: 'verify-inverse',
      name: 'How to verify that two functions are inverses',
      description: 'Compose them in both orders; they are inverses exactly when both compositions simplify to $x$.',
      uses: ['composition', 'identity function', 'domains'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Verify That Two Functions Are Inverses | Learn Math Class',
        description: 'Verify that two functions are inverses: compute f(g(x)) and g(f(x)), simplify both to x, and check the domains. Examples that pass and fail, and mistakes.',
        keywords: ['how to verify inverse functions', 'verify inverses by composition', 'f(g(x)) = x', 'are these functions inverses', 'inverse composition property'],
      },
      page: {
        h1: 'How to Verify That Two Functions Are Inverses',
        lead:
          'Two functions are inverses when each one undoes the other. You prove it by composing them in both orders: if both $f(g(x))$ and $g(f(x))$ simplify to $x$, then $g = f^{-1}$.',
        recognize:
          'The question gives two formulas and asks "are these inverses?", "verify that $g = f^{-1}$", or you want to check an inverse you just found. Typical pairs: $5x - 2$ and $\\frac{x + 2}{5}$, $x^3$ and $\\sqrt[3]{x}$, $x^2$ on $[0, \\infty)$ and $\\sqrt{x}$. Test: you have both formulas; no solving is needed, only substitution.',
        recognizeNote: `The test is explained in the lesson section ${link('lesson.fn.inverse.6', 'Verifying Inverses via Composition')}.`,
        methods: [
          {
            name: 'Compose both ways',
            tag: 'proof',
            preferred: true,
            formula: 'f(g(x)) = x \\quad \\text{and} \\quad g(f(x)) = x',
            body: `Both identities must hold on the right domains (${link('fn.inverse-composition-property', 'inverse composition property')}).`,
          },
          {
            name: 'Swap test points',
            tag: 'quick check',
            formula: 'f(a) = b \\;\\Rightarrow\\; g(b) = a',
            body: `A failure proves they are not inverses; a success at a few points only suggests it (${link('lesson.fn.inverse.11', 'inverse tables')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = 5x - 2$ and $g(x) = \\dfrac{x + 2}{5}$',
          items: [
            {
              title: 'Compute f(g(x)) and simplify.',
              body: 'Put the whole formula of $g$ in place of $x$ in $f$.',
              state: '$5 \\cdot \\frac{x + 2}{5} - 2 = (x + 2) - 2 = x$ ✓',
              atomic: 'evaluate-function',
            },
            {
              title: 'Compute g(f(x)) and simplify.',
              body: 'Now the other order: $f$ goes inside $g$.',
              state: '$\\frac{(5x - 2) + 2}{5} = \\frac{5x}{5} = x$ ✓',
              atomic: 'evaluate-function',
            },
            {
              title: 'Check the domains.',
              body: 'Each identity must hold on the whole domain of the inner function; the domain of $g$ must be the range of $f$.',
              state: 'both domains are $\\mathbb{R}$ ✓',
            },
            {
              title: 'State the conclusion.',
              body: 'Both compositions give $x$, so the functions are inverses. If either one fails, they are not.',
              state: '$g = f^{-1}$',
            },
          ],
        },
        examples: [
          {
            title: 'a linear pair',
            badge: 'passes',
            lines: [
              { math: '$f(x) = 2x + 6$, $g(x) = \\frac{x}{2} - 3$', why: '' },
              { math: '$f(g(x)) = 2\\left(\\frac{x}{2} - 3\\right) + 6 = x$', why: 'first order' },
              { math: '$g(f(x)) = \\frac{2x + 6}{2} - 3 = x$', why: 'second order' },
              { math: '$g = f^{-1}$', why: 'both give $x$', answer: true },
            ],
          },
          {
            title: 'a pair that fails',
            badge: 'fails',
            lines: [
              { math: '$f(x) = 3x + 1$, $g(x) = \\frac{x}{3} - 1$', why: '' },
              { math: '$f(g(x)) = 3\\left(\\frac{x}{3} - 1\\right) + 1 = x - 2$', why: 'not $x$' },
              { math: 'not inverses; $f^{-1}(x) = \\frac{x - 1}{3}$', why: 'one failure is enough', answer: true },
            ],
          },
          {
            title: 'a pair that needs a domain',
            badge: 'restricted',
            lines: [
              { math: '$f(x) = x^2$ on $[0, \\infty)$, $g(x) = \\sqrt{x}$', why: '' },
              { math: '$f(g(x)) = (\\sqrt{x})^2 = x$ for $x \\geq 0$', why: 'first order' },
              { math: '$g(f(x)) = \\sqrt{x^2} = |x| = x$ for $x \\geq 0$', why: '$|x| = x$ on this domain' },
              { math: 'inverses on $[0, \\infty)$', why: 'the restriction is essential', answer: true },
            ],
          },
        ],
        examplesAfter: `If the check fails, redo the algebra on the [finding the inverse](!${HUB}/find-inverse) page.`,
        visual: {
          caption:
            'Composing a function with its inverse is a round trip: $g$ moves the input somewhere and $f$ brings it straight back, so the composite is the identity $x \\mapsto x$. Both round trips must work, starting from either side. On a graph, inverse pairs are mirror images in the line $y = x$; compare a pair in the [inverse function visualizer](!/functions/visual-tools/inverse-function).',
        },
        pitfalls: [
          {
            title: 'Checking only one composition',
            wrong: '$f(x) = x^2$, $g(x) = \\sqrt{x}$: $f(g(x)) = x$, so they are inverses on $\\mathbb{R}$',
            right: '$g(f(x)) = |x|$, and $g(f(-2)) = 2$; they are inverses only on $[0, \\infty)$',
          },
          {
            title: 'Testing a single point',
            wrong: '$f(x) = 2x + 1$, $g(x) = x - 2$: $f(1) = 3$ and $g(3) = 1$, so $g = f^{-1}$',
            right: '$f(g(x)) = 2x - 3 \\neq x$: not inverses',
          },
          {
            title: 'Using the reciprocal as the inverse',
            wrong: '$g(x) = \\frac{1}{5x - 2}$ is the inverse of $5x - 2$',
            right: '$f(g(1)) = \\frac{5}{3} - 2 = -\\frac{1}{3} \\neq 1$: not inverses',
          },
        ],
        related: ['find-inverse', 'compose-functions'],
        builtOn: [
          { label: 'Inverse composition property', url: ruleUrl('fn.inverse-composition-property') },
          { label: 'Composition of functions', url: ruleUrl('fn.composition-of-functions') },
          { label: 'Verifying inverses (lesson)', url: ruleUrl('lesson.fn.inverse.6') },
        ],
      },
    },
    {
      id: 'graph-transformations',
      slug: 'graph-transformations',
      name: 'How to graph a transformed function',
      description: 'Start from the parent graph, read $a$, $b$, $h$, $k$ from $a f(b(x - h)) + k$, and move key points.',
      uses: ['parent function', 'shifts', 'stretches', 'reflections'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Graph a Transformed Function | Learn Math Class',
        description: 'Graph a transformed function: name the parent, read a, b, h, k from a f(b(x - h)) + k, apply inside changes first, then move key points. Examples, mistakes.',
        keywords: ['how to graph transformations', 'function transformations steps', 'shifts stretches reflections', 'graphing a f(b(x-h)) + k', 'transformations of parent functions'],
      },
      page: {
        h1: 'How to Graph a Transformed Function',
        lead:
          'A transformed function is a parent graph that has been shifted, stretched or reflected. Read the four numbers in $a\\,f(b(x - h)) + k$, apply the changes inside the brackets first, and move a few key points.',
        recognize:
          'The formula is a familiar parent with extra numbers: $-2(x + 3)^2 + 5$, $\\sqrt{x - 2} + 1$, $-|x + 1| + 4$, $(2x - 6)^2$. Typical tasks: sketch the graph, give the new vertex or starting point, or the new domain and range. Test: cover the extra numbers. If a parent such as $x^2$, $|x|$, $\\sqrt{x}$ or $x^3$ is left, this method applies.',
        recognizeNote: `Parent functions and the four transformations are defined in the ${link('lesson.fn.transformations', 'transformations lesson')}.`,
        methods: [
          {
            name: 'Move key points',
            tag: 'usual',
            preferred: true,
            formula: '(x, y) \\;\\to\\; \\left(\\frac{x}{b} + h,\\ a y + k\\right)',
            body: `Map the vertex and one or two more points of the parent with the ${link('fn.general-transformation', 'general transformation')}, then draw the shape through them.`,
          },
          {
            name: 'One transformation at a time',
            tag: 'step by step',
            formula: 'f(x) \\to f(bx) \\to f(b(x - h)) \\to a f(b(x - h)) \\to a f(b(x - h)) + k',
            body: `Apply the changes in this order and redraw after each (${link('lesson.fn.transformations.10', 'order of transformations')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $g(x) = -2(x + 3)^2 + 5$',
          items: [
            {
              title: 'Name the parent function and its key points.',
              body: 'Pick the vertex or starting point and one more point.',
              state: '$f(x) = x^2$: $(0, 0)$ and $(1, 1)$',
            },
            {
              title: 'Read a, b, h and k.',
              body: 'Write the inside as $b(x - h)$; a plus sign inside means $h$ is negative.',
              state: '$a = -2$, $b = 1$, $h = -3$, $k = 5$',
            },
            {
              title: 'Apply the inside changes: horizontal.',
              body: `Divide $x$-coordinates by $b$, then add $h$ (${link('fn.horizontal-translation', 'horizontal translation')}).`,
              state: 'shift left $3$: $(-3, 0)$, $(-2, 1)$',
            },
            {
              title: 'Apply the outside changes: vertical.',
              body: `Multiply $y$-coordinates by $a$ (${link('fn.vertical-dilation', 'vertical stretch')}, a reflection if $a < 0$), then add $k$.`,
              state: '$(-3, 5)$, $(-2, 3)$; opens downward',
            },
            {
              title: 'Check one point in the formula.',
              body: 'Substitute a mapped $x$ and compare with its mapped $y$.',
              state: '$g(-2) = -2(1)^2 + 5 = 3$ ✓',
              atomic: 'evaluate-function',
            },
          ],
        },
        examples: [
          {
            title: 'a shifted square root',
            badge: 'shifts',
            lines: [
              { math: '$g(x) = \\sqrt{x - 2} + 1$', why: 'parent $\\sqrt{x}$, start $(0, 0)$' },
              { math: '$(0, 0) \\to (2, 1)$, $(4, 2) \\to (6, 3)$', why: 'right $2$, up $1$' },
              { math: 'domain $[2, \\infty)$, range $[1, \\infty)$', why: 'starting point moved', answer: true },
            ],
          },
          {
            title: 'a reflected absolute value',
            badge: 'reflection',
            lines: [
              { math: '$g(x) = -|x + 1| + 4$', why: '$a = -1$, $h = -1$, $k = 4$' },
              { math: '$(0, 0) \\to (-1, 4)$, $(1, 1) \\to (0, 3)$', why: 'left $1$, flip, up $4$' },
              { math: 'V opening down, vertex $(-1, 4)$, range $(-\\infty, 4]$', why: '', answer: true },
            ],
          },
          {
            title: 'a horizontal compression',
            badge: 'factor first',
            lines: [
              { math: '$g(x) = (2x - 6)^2 = \\big(2(x - 3)\\big)^2$', why: 'factor out $b = 2$' },
              { math: '$(0, 0) \\to (3, 0)$, $(1, 1) \\to (3.5, 1)$', why: '$x \\to \\frac{x}{2} + 3$' },
              { math: 'vertex $(3, 0)$; check $g(3.5) = 1^2 = 1$', why: 'narrower parabola', answer: true },
            ],
          },
        ],
        examplesAfter: 'Drag $a$, $b$, $h$ and $k$ and watch the parent graph move in the [transformations visualizer](!/functions/visual-tools/transformations).',
        visual: {
          caption:
            'Numbers outside the parent act on outputs, so they move the graph up and down and stretch it vertically, in the direction you expect. Numbers inside act on inputs before the parent sees them, so they work backwards: $f(x - 3)$ needs an input $3$ larger to produce the same output, which shifts the graph right, and $f(2x)$ reaches each output at half the input, which squeezes the graph toward the $y$-axis.',
        },
        pitfalls: [
          {
            title: 'Shifting the wrong way',
            wrong: '$(x - 3)^2$ is $x^2$ moved left $3$',
            right: '$(x - 3)^2$ is $x^2$ moved right $3$; $x - h$ with $h = 3$',
          },
          {
            title: 'Reading the shift before factoring',
            wrong: '$(2x - 6)^2$ is shifted right $6$, vertex $(6, 0)$',
            right: '$2x - 6 = 2(x - 3)$: shift right $3$, vertex $(3, 0)$; $g(6) = 36$, not $0$',
          },
          {
            title: 'Copying the vertex sign into the bracket',
            wrong: 'vertex $(3, -2)$: $y = -2(x + 3)^2 - 2$',
            right: '$y = -2(x - 3)^2 - 2$; the bracket holds $x - h$',
          },
          {
            title: 'Stretching instead of compressing',
            wrong: '$f(2x)$ stretches the graph horizontally by $2$',
            right: '$f(2x)$ compresses it by $2$: $x$-coordinates are halved',
            note: `See ${link('fn.horizontal-dilation', 'horizontal dilation')}.`,
          },
        ],
        related: ['find-range', 'even-odd-test', 'identify-function-family'],
        builtOn: [
          { label: 'General transformation', url: ruleUrl('fn.general-transformation') },
          { label: 'Horizontal translation', url: ruleUrl('fn.horizontal-translation') },
          { label: 'Vertical dilation', url: ruleUrl('fn.vertical-dilation') },
          { label: 'Order of transformations (lesson)', url: ruleUrl('lesson.fn.transformations.10') },
        ],
      },
    },
    {
      id: 'piecewise-functions',
      slug: 'piecewise-functions',
      name: 'How to evaluate and graph a piecewise function',
      description: 'Let the input pick the piece, find both values at each boundary, and draw each piece only on its interval.',
      uses: ['conditions', 'open and solid dots', 'continuity'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Evaluate and Graph a Piecewise Function | Learn Math Class',
        description: 'Evaluate and graph a piecewise function: pick the piece from the condition, find both values at each boundary, use open and solid dots. Examples and mistakes.',
        keywords: ['how to graph a piecewise function', 'evaluate piecewise function', 'piecewise function examples', 'open and closed dots', 'continuity of a piecewise function'],
      },
      page: {
        h1: 'How to Evaluate and Graph a Piecewise Function',
        lead:
          'A piecewise function uses different formulas on different intervals. The input decides which formula applies; the graph is each formula drawn only on its own interval, with open or solid dots at the boundaries.',
        recognize:
          'The function is written with a brace and conditions: $\\begin{cases} x + 3 & x < 1 \\\\ 2x - 1 & x \\geq 1 \\end{cases}$. Also absolute values such as $|2x - 4|$ and step functions such as tax brackets or postage rates. Typical tasks: values at given inputs, the graph, continuity at a boundary, the range. Test: does the rule change at a certain value of $x$?',
        recognizeNote: `Piecewise functions are defined in the ${link('lesson.fn.piecewise', 'piecewise functions lesson')}.`,
        steps: {
          traceLabel: 'On $f(x) = x + 3$ for $x < 1$, $f(x) = 2x - 1$ for $x \\geq 1$',
          items: [
            {
              title: 'List each piece with its interval.',
              body: 'Write the intervals in interval notation and check that they do not overlap.',
              state: '$x + 3$ on $(-\\infty, 1)$; $2x - 1$ on $[1, \\infty)$',
            },
            {
              title: 'Evaluate: let the input pick the piece.',
              body: 'Find the condition the input satisfies, then use only that formula.',
              state: '$f(-2) = 1$, $f(1) = 1$, $f(3) = 5$',
              atomic: 'evaluate-function',
            },
            {
              title: 'Find both values at each boundary.',
              body: 'Put the boundary into each neighboring formula. The piece whose condition includes it gets a solid dot; the other gets an open dot.',
              state: 'left: $1 + 3 = 4$ (open); right: $2(1) - 1 = 1$ (solid)',
            },
            {
              title: 'Draw each piece only on its interval.',
              body: 'Graph each formula as usual and erase everything outside its interval.',
              state: 'slope $1$ up to $(1, 4)$; slope $2$ from $(1, 1)$',
            },
            {
              title: 'Read off continuity, domain and range.',
              body: `Equal boundary values mean the pieces join (${link('lesson.fn.piecewise.7', 'continuity')}); the range is the union of the pieces' ranges.`,
              state: 'jump at $x = 1$; domain $\\mathbb{R}$; range $(-\\infty, 4) \\cup [1, \\infty) = \\mathbb{R}$',
            },
          ],
        },
        examples: [
          {
            title: 'evaluating at three inputs',
            badge: 'lookup first',
            lines: [
              { math: '$f(x) = 3x + 2$ for $x < 1$, $x^2 - 1$ for $x \\geq 1$', why: '' },
              { math: '$f(-2) = 3(-2) + 2 = -4$', why: '$-2 < 1$: first piece' },
              { math: '$f(1) = 1 - 1 = 0$, $f(4) = 16 - 1 = 15$', why: '$x \\geq 1$: second piece', answer: true },
            ],
          },
          {
            title: 'an absolute value as two pieces',
            badge: 'rewrite',
            lines: [
              { math: '$|2x - 4|$: $2x - 4 \\geq 0 \\iff x \\geq 2$', why: 'where the inside changes sign' },
              { math: '$2x - 4$ for $x \\geq 2$, $4 - 2x$ for $x < 2$', why: 'negate the inside when negative' },
              { math: 'check: $x = 0$ gives $4$, $x = 5$ gives $6$ ✓', why: 'matches $|{-4}|$ and $|6|$', answer: true },
            ],
          },
          {
            title: 'choosing a constant for continuity',
            badge: 'continuity',
            lines: [
              { math: '$f(x) = x^2$ for $x < 2$, $kx - 2$ for $x \\geq 2$', why: '' },
              { math: '$2^2 = 2k - 2$', why: 'both pieces meet at $x = 2$' },
              { math: '$k = 3$', why: 'solve the linear equation', answer: true },
            ],
          },
        ],
        examplesAfter: 'Build pieces and move the boundaries in the [piecewise function visualizer](!/functions/visual-tools/piecewise).',
        visual: {
          caption:
            'A piecewise graph is a set of ordinary graphs cut with scissors along vertical lines at the boundaries. Each formula keeps only the strip of the plane that its condition allows. At a cut, exactly one piece owns the boundary point, which gets the solid dot, so every vertical line still meets the graph once. If the two cut edges land at the same height, the pieces join and the function is continuous there.',
        },
        pitfalls: [
          {
            title: 'Using the wrong piece at the boundary',
            wrong: '$f(1) = 3(1) + 2 = 5$ for the pieces $x < 1$ and $x \\geq 1$',
            right: '$1 \\geq 1$ picks the second piece: $f(1) = 1^2 - 1 = 0$',
          },
          {
            title: 'Forgetting the endpoint markers',
            wrong: 'both lines drawn up to $x = 1$ with no dots',
            right: 'open dot at $(1, 4)$, solid dot at $(1, 1)$, so $f(1) = 1$',
          },
          {
            title: 'Overlapping conditions',
            wrong: '$x + 3$ for $x \\leq 1$, $2x - 1$ for $x \\geq 1$',
            right: 'use $x < 1$ and $x \\geq 1$; otherwise $f(1)$ has two values',
          },
          {
            title: 'Dropping the sign on the negative piece',
            wrong: '$|2x - 4| = 2x + 4$ for $x < 2$',
            right: '$|2x - 4| = -(2x - 4) = 4 - 2x$ for $x < 2$',
            note: `See ${link('lesson.fn.piecewise.8', 'absolute value as piecewise')}.`,
          },
        ],
        related: ['find-range', 'find-domain', 'identify-function-family'],
        builtOn: [
          { label: 'Evaluating piecewise functions (lesson)', url: ruleUrl('lesson.fn.piecewise.3') },
          { label: 'Graphing piecewise functions (lesson)', url: ruleUrl('lesson.fn.piecewise.4') },
          { label: 'Continuity of piecewise functions (lesson)', url: ruleUrl('lesson.fn.piecewise.7') },
        ],
      },
    },
    {
      id: 'even-odd-test',
      slug: 'even-odd-test',
      name: 'How to tell if a function is even, odd or neither',
      description: 'Check that the domain is symmetric, simplify $f(-x)$, and compare it with $f(x)$ and $-f(x)$.',
      uses: ['f(-x)', 'symmetry', 'domain'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Tell if a Function Is Even, Odd or Neither | Learn Math Class',
        description: 'Tell if a function is even, odd or neither: check the domain is symmetric, simplify f(-x), compare with f(x) and -f(x). Polynomial and rational examples.',
        keywords: ['even or odd function', 'how to tell if a function is even or odd', 'f(-x) test', 'even odd neither examples', 'symmetry of a function'],
      },
      page: {
        h1: 'How to Tell if a Function Is Even, Odd or Neither',
        lead:
          'An even function gives the same output at $x$ and $-x$; an odd function gives opposite outputs. You decide by replacing $x$ with $-x$ and comparing the result with $f(x)$ and $-f(x)$.',
        recognize:
          'The question asks "even, odd or neither?", "symmetric about the $y$-axis or the origin?", or you want to halve the work of graphing. Typical forms: polynomials $x^4 - 3x^2 + 2$, $x^3 - 4x$, $x^2 + x$, and quotients such as $\\frac{x}{x^2 + 1}$. Test: is the domain symmetric about $0$? If not, the answer is neither.',
        recognizeNote: `Even and odd functions are defined in the ${link('lesson.fn.properties.1', 'properties of functions lesson')}.`,
        methods: [
          {
            name: 'Algebraic test',
            tag: 'proof',
            preferred: true,
            formula: 'f(-x) = f(x) \\;\\text{(even)}, \\qquad f(-x) = -f(x) \\;\\text{(odd)}',
            body: `Simplify $f(-x)$ and compare (${link('fn.even-function-test', 'even test')}, ${link('fn.odd-function-test', 'odd test')}).`,
          },
          {
            name: 'Graph symmetry',
            tag: 'graph',
            formula: '(x, y) \\in f \\Rightarrow (-x, y) \\text{ or } (-x, -y) \\in f',
            body: `A mirror in the $y$-axis means even; a half turn about the origin means odd (${link('lesson.fn.properties.2', 'symmetry')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = x^3 - 4x$',
          items: [
            {
              title: 'Check that the domain is symmetric.',
              body: 'Whenever $x$ is in the domain, $-x$ must be too.',
              state: '$\\mathbb{R}$: symmetric ✓',
            },
            {
              title: 'Substitute -x for x.',
              body: 'Put $(-x)$ in brackets everywhere $x$ appears.',
              state: '$f(-x) = (-x)^3 - 4(-x)$',
              atomic: 'evaluate-function',
            },
            {
              title: 'Simplify.',
              body: 'Even powers of $-x$ lose the sign; odd powers keep it.',
              state: '$f(-x) = -x^3 + 4x$',
            },
            {
              title: 'Compare with f(x) and -f(x).',
              body: 'Write out $-f(x)$ in full before comparing.',
              state: '$-f(x) = -x^3 + 4x = f(-x)$',
            },
            {
              title: 'State the symmetry.',
              body: 'Even: mirror image in the $y$-axis. Odd: symmetric about the origin. Neither: no such symmetry.',
              state: 'odd: symmetric about the origin',
            },
          ],
        },
        examples: [
          {
            title: 'only even powers',
            badge: 'even',
            lines: [
              { math: '$f(x) = x^4 - 3x^2 + 2$', why: '' },
              { math: '$f(-x) = (-x)^4 - 3(-x)^2 + 2 = x^4 - 3x^2 + 2$', why: 'even powers lose the sign' },
              { math: '$f(-x) = f(x)$: even', why: 'mirror in the $y$-axis', answer: true },
            ],
          },
          {
            title: 'mixed powers',
            badge: 'neither',
            lines: [
              { math: '$f(x) = x^2 + x$, $f(-x) = x^2 - x$', why: 'simplify' },
              { math: '$f(x) = x^2 + x$, $-f(x) = -x^2 - x$', why: 'both candidates' },
              { math: 'neither: $f(2) = 6$, $f(-2) = 2$', why: 'matches neither one', answer: true },
            ],
          },
          {
            title: 'a quotient',
            badge: 'odd',
            lines: [
              { math: '$f(x) = \\dfrac{x}{x^2 + 1}$, domain $\\mathbb{R}$', why: 'symmetric domain' },
              { math: '$f(-x) = \\dfrac{-x}{(-x)^2 + 1} = -\\dfrac{x}{x^2 + 1}$', why: 'odd top, even bottom' },
              { math: '$f(-x) = -f(x)$: odd', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Compare a curve with its two mirror images in the [symmetry visualizer](!/functions/visual-tools/symmetry).',
        visual: {
          caption:
            'Replacing $x$ by $-x$ reflects the graph in the $y$-axis. If the reflected graph lands on itself, the function is even. If it lands on the graph flipped upside down, which is the same as $-f(x)$, the function is odd. For polynomials this comes down to the powers: $(-x)^n$ equals $x^n$ for even $n$ and $-x^n$ for odd $n$, and a constant behaves like an even power.',
        },
        pitfalls: [
          {
            title: 'Judging by the exponents alone',
            wrong: '$f(x) = x^3 + 1$ is odd because $3$ is odd',
            right: '$f(-x) = -x^3 + 1$, $-f(x) = -x^3 - 1$: neither',
            note: 'The constant counts as an even power.',
          },
          {
            title: 'Ignoring the domain',
            wrong: '$f(x) = x^2$ on $[-1, 3]$ is even',
            right: '$f(3)$ exists but $f(-3)$ does not: neither',
          },
          {
            title: 'Testing a single point',
            wrong: '$f(x) = x^3 - x$: $f(-1) = f(1) = 0$, so $f$ is even',
            right: '$f(-2) = -6$ and $f(2) = 6$: the function is odd',
          },
        ],
        related: ['analyze-function', 'graph-transformations'],
        builtOn: [
          { label: 'Even function test', url: ruleUrl('fn.even-function-test') },
          { label: 'Odd function test', url: ruleUrl('fn.odd-function-test') },
          { label: 'Even and odd functions (lesson)', url: ruleUrl('lesson.fn.properties.1') },
        ],
      },
    },
    {
      id: 'find-intercepts',
      slug: 'find-intercepts',
      name: 'How to find the intercepts of a function',
      description: 'Evaluate $f(0)$ for the $y$-intercept; solve $f(x) = 0$ for the $x$-intercepts and keep the solutions in the domain.',
      uses: ['f(0)', 'zeros', 'factoring', 'domain check'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Intercepts of a Function | Learn Math Class',
        description: 'Find the x- and y-intercepts of a function: evaluate f(0), solve f(x) = 0, keep only solutions in the domain. Linear, radical and rational examples, mistakes.',
        keywords: ['how to find intercepts', 'x-intercept and y-intercept', 'zeros of a function', 'find x intercepts', 'y intercept f(0)'],
      },
      page: {
        h1: 'How to Find the Intercepts of a Function',
        lead:
          'Intercepts are the points where the graph meets the axes. The $y$-intercept comes from one evaluation, $f(0)$; the $x$-intercepts come from solving $f(x) = 0$.',
        recognize:
          'The question asks for intercepts, zeros, roots, or where the graph crosses an axis. Typical forms: a line $2x - 6$, a quadratic $x^2 - 2x - 8$, a shifted root $\\sqrt{x + 4} - 1$, a rational $\\frac{x^2 - 4}{x - 2}$. Test: you need points on an axis, so one coordinate is $0$. Decide which one.',
        recognizeNote: `Intercepts are defined in the lesson section ${link('lesson.fn.graphs.6', 'Intercepts')}.`,
        steps: {
          traceLabel: 'On $f(x) = x^2 - 2x - 8$',
          items: [
            {
              title: 'Find the y-intercept: evaluate f(0).',
              body: 'If $0$ is not in the domain, there is no $y$-intercept.',
              state: '$f(0) = -8$: point $(0, -8)$',
              atomic: 'evaluate-function',
            },
            {
              title: 'Set f(x) = 0 for the x-intercepts.',
              body: `The $x$-intercepts are the ${link('lesson.fn.properties.16', 'zeros')} of the function.`,
              state: '$x^2 - 2x - 8 = 0$',
            },
            {
              title: 'Solve the equation.',
              body: `Factor when you can (${link('lesson.equations.quadratic.factoring', 'quadratics by factoring')}); otherwise use the [quadratic formula](!/algebra/equations/methods/quadratic-formula) or isolate the root or log.`,
              state: '$(x - 4)(x + 2) = 0 \\Rightarrow x = 4,\\ x = -2$',
            },
            {
              title: 'Keep the solutions in the domain and write points.',
              body: 'Reject any solution the original formula does not accept.',
              state: '$(4, 0)$ and $(-2, 0)$',
            },
          ],
        },
        examples: [
          {
            title: 'a line',
            badge: 'linear',
            lines: [
              { math: '$f(x) = 2x - 6$: $f(0) = -6$', why: '$y$-intercept $(0, -6)$' },
              { math: '$2x - 6 = 0 \\Rightarrow x = 3$', why: 'set the output to zero' },
              { math: '$(0, -6)$ and $(3, 0)$', why: '', answer: true },
            ],
          },
          {
            title: 'a shifted square root',
            badge: 'radical',
            lines: [
              { math: '$f(x) = \\sqrt{x + 4} - 1$: $f(0) = 2 - 1 = 1$', why: '$y$-intercept $(0, 1)$' },
              { math: '$\\sqrt{x + 4} = 1 \\Rightarrow x + 4 = 1$', why: 'isolate the root, square' },
              { math: '$x = -3$, in $[-4, \\infty)$ ✓', why: 'check the domain' },
              { math: '$(0, 1)$ and $(-3, 0)$', why: '', answer: true },
            ],
          },
          {
            title: 'a rational function with a hole',
            badge: 'domain check',
            lines: [
              { math: '$f(x) = \\dfrac{x^2 - 4}{x - 2}$: $f(0) = \\frac{-4}{-2} = 2$', why: '$y$-intercept $(0, 2)$' },
              { math: '$x^2 - 4 = 0 \\Rightarrow x = \\pm 2$', why: 'numerator zero' },
              { math: '$x = 2$ is not in the domain', why: 'denominator zero there' },
              { math: '$(0, 2)$ and $(-2, 0)$ only', why: 'a hole sits at $x = 2$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Every point on the $y$-axis has $x = 0$, and every point on the $x$-axis has $y = 0$. So an intercept question always fixes one coordinate at zero and asks for the other. Fixing $x = 0$ gives a single evaluation, so there is at most one $y$-intercept. Fixing $y = 0$ gives an equation, which can have no solution, one, or many, so a graph can cross the $x$-axis any number of times.',
        },
        pitfalls: [
          {
            title: 'Setting the wrong variable to zero',
            wrong: '$f(x) = 2x - 6$: put $x = 0$ to get the $x$-intercept $-6$',
            right: '$x = 0$ gives the $y$-intercept $(0, -6)$; solve $2x - 6 = 0$ for $(3, 0)$',
          },
          {
            title: 'Dividing by x and losing a zero',
            wrong: '$x^2 - 3x = 0 \\Rightarrow x = 3$',
            right: '$x(x - 3) = 0 \\Rightarrow x = 0$ or $x = 3$',
          },
          {
            title: 'Keeping a zero outside the domain',
            wrong: '$\\frac{x^2 - 4}{x - 2}$ has $x$-intercepts $(2, 0)$ and $(-2, 0)$',
            right: '$x = 2$ is excluded; only $(-2, 0)$',
          },
        ],
        related: ['analyze-function', 'find-domain', 'identify-function-family'],
        builtOn: [
          { label: 'Intercepts (lesson)', url: ruleUrl('lesson.fn.graphs.6') },
          { label: 'Zeros and roots (lesson)', url: ruleUrl('lesson.fn.properties.16') },
          { label: 'Quadratics by factoring (lesson)', url: ruleUrl('lesson.equations.quadratic.factoring') },
        ],
      },
    },
    {
      id: 'find-asymptotes',
      slug: 'find-asymptotes',
      name: 'How to find the asymptotes of a function',
      description: 'Factor and cancel to find holes, set the remaining denominator to zero, and compare degrees for the horizontal or slant asymptote.',
      uses: ['factoring', 'holes', 'degree comparison', 'long division'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Asymptotes of a Function | Learn Math Class',
        description: 'Find vertical, horizontal and slant asymptotes: factor, cancel to find holes, set the denominator to zero, compare degrees. Rational examples and mistakes.',
        keywords: ['how to find asymptotes', 'vertical and horizontal asymptotes', 'slant asymptote', 'asymptotes of rational functions', 'holes vs vertical asymptotes'],
      },
      page: {
        h1: 'How to Find the Asymptotes of a Function',
        lead:
          'An asymptote is a line the graph approaches without settling on it. For a rational function, vertical asymptotes come from the zeros of the reduced denominator and the horizontal or slant one from comparing degrees.',
        recognize:
          'The question asks for asymptotes, holes, behavior near an excluded value, or behavior as $x \\to \\pm\\infty$. Typical forms: rational functions $\\frac{3x}{x + 4}$, $\\frac{x + 1}{x^2 - 9}$, $\\frac{x^2 + 3x + 1}{x + 1}$, and also exponentials $2^x - 3$ and logarithms $\\ln(x - 2)$. Test: is there an $x$ in a denominator, an exponent or a log?',
        recognizeNote: `Asymptotes are defined in the lesson section ${link('lesson.fn.properties.13', 'Asymptotes')}.`,
        methods: [
          {
            name: 'Rational function: factor and compare degrees',
            tag: 'usual',
            preferred: true,
            formula: 'f(x) = \\frac{P(x)}{Q(x)}: \\quad x = a \\text{ where } Q(a) = 0,\\ P(a) \\neq 0',
            body: `Vertical from the ${link('fn.vertical-asymptote-rational', 'denominator zeros')}, horizontal or slant from the degrees (${link('lesson.fn.families.8', 'rational functions')}).`,
          },
          {
            name: 'Exponential: read the shift',
            tag: 'exponential',
            formula: 'y = a\\,b^{x - h} + k \\;\\Rightarrow\\; y = k',
            body: 'The horizontal asymptote is the vertical shift; there is no vertical asymptote.',
          },
          {
            name: 'Logarithm: argument equal to zero',
            tag: 'logarithm',
            formula: 'y = \\log_b(x - h) + k \\;\\Rightarrow\\; x = h',
            body: 'The vertical asymptote is where the argument reaches $0$; there is no horizontal asymptote.',
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = \\dfrac{x^2 - 1}{x^2 - 3x + 2}$',
          items: [
            {
              title: 'Factor the numerator and the denominator.',
              body: `Use the ${link('lesson.polynomials.factoring', 'factoring')} techniques for each polynomial.`,
              state: '$\\dfrac{(x - 1)(x + 1)}{(x - 1)(x - 2)}$',
            },
            {
              title: 'Cancel common factors and mark the holes.',
              body: 'A factor that cancels completely leaves a hole; find its height from the reduced formula.',
              state: 'hole at $x = 1$: $\\frac{1 + 1}{1 - 2} = -2$, point $(1, -2)$',
            },
            {
              title: 'Set the remaining denominator to zero.',
              body: 'Each zero of the reduced denominator is a vertical asymptote.',
              state: 'vertical asymptote $x = 2$',
            },
            {
              title: 'Compare the degrees.',
              body: `Equal degrees: ${link('fn.horizontal-asymptote-equal-degree', 'ratio of leading coefficients')}. Numerator lower: ${link('fn.horizontal-asymptote-numerator-lower', 'the x-axis')}.`,
              state: 'degree $2$ over degree $2$: $y = \\frac{1}{1} = 1$',
            },
            {
              title: 'Check for a slant asymptote.',
              body: 'Only when the numerator degree is exactly one more: divide and keep the linear quotient.',
              state: 'degrees are equal: no slant asymptote',
            },
          ],
        },
        examples: [
          {
            title: 'equal degrees',
            badge: 'horizontal',
            lines: [
              { math: '$f(x) = \\dfrac{3x}{x + 4}$', why: 'nothing cancels' },
              { math: '$x + 4 = 0 \\Rightarrow x = -4$', why: 'vertical asymptote' },
              { math: '$x = -4$ and $y = \\frac{3}{1} = 3$', why: 'leading coefficients', answer: true },
            ],
          },
          {
            title: 'numerator of lower degree',
            badge: 'x-axis',
            lines: [
              { math: '$f(x) = \\dfrac{x + 1}{(x - 3)(x + 3)}$', why: 'nothing cancels' },
              { math: 'vertical asymptotes $x = 3$, $x = -3$', why: 'denominator zeros' },
              { math: 'horizontal asymptote $y = 0$', why: 'degree $1 <$ degree $2$', answer: true },
            ],
          },
          {
            title: 'numerator one degree higher',
            badge: 'slant',
            lines: [
              { math: '$f(x) = \\dfrac{x^2 + 3x + 1}{x + 1}$', why: 'degree $2$ over degree $1$' },
              { math: '$f(x) = x + 2 - \\dfrac{1}{x + 1}$', why: 'long division' },
              { math: 'vertical $x = -1$, slant $y = x + 2$', why: 'the remainder term dies out', answer: true },
            ],
          },
        ],
        examplesAfter: 'For the division step, see [polynomial long division](!/algebra/polynomials/methods/polynomial-long-division). Explore the curves near their asymptotes in the [asymptotes visualizer](!/functions/visual-tools/asymptotes).',
        visual: {
          caption:
            'Near a zero of the denominator, the fraction divides by a tiny number, so the outputs blow up: that is a vertical asymptote. If the numerator is zero at the same place, the two small factors cancel and only a hole is left. Far from the origin, only the leading terms matter: $\\frac{3x}{x + 4}$ behaves like $\\frac{3x}{x} = 3$, which is why comparing degrees gives the horizontal asymptote.',
        },
        pitfalls: [
          {
            title: 'Calling a hole a vertical asymptote',
            wrong: '$\\frac{x^2 - 1}{x^2 - 3x + 2}$ has vertical asymptotes $x = 1$ and $x = 2$',
            right: '$(x - 1)$ cancels: hole at $(1, -2)$, asymptote only $x = 2$',
          },
          {
            title: 'Using leading coefficients when degrees differ',
            wrong: '$\\frac{x + 1}{x^2 - 9}$ has horizontal asymptote $y = 1$',
            right: 'numerator degree is lower: $y = 0$',
          },
          {
            title: 'Believing the graph never crosses a horizontal asymptote',
            wrong: '$\\frac{x + 1}{x^2 - 9}$ is never $0$ because $y = 0$ is its asymptote',
            right: '$f(-1) = 0$: the graph crosses $y = 0$ at $x = -1$',
          },
          {
            title: 'Forgetting the shift of an exponential',
            wrong: '$2^x - 3$ has asymptote $y = 0$',
            right: 'the graph is moved down $3$: asymptote $y = -3$',
          },
        ],
        related: ['find-domain', 'analyze-function', 'identify-function-family'],
        builtOn: [
          { label: 'Vertical asymptote of a rational function', url: ruleUrl('fn.vertical-asymptote-rational') },
          { label: 'Horizontal asymptote, equal degree', url: ruleUrl('fn.horizontal-asymptote-equal-degree') },
          { label: 'Horizontal asymptote, numerator lower', url: ruleUrl('fn.horizontal-asymptote-numerator-lower') },
          { label: 'Asymptotes (lesson)', url: ruleUrl('lesson.fn.properties.13') },
        ],
      },
    },
    {
      id: 'analyze-function',
      slug: 'analyze-function',
      name: 'How to analyze a function',
      description: 'Work through domain, intercepts, symmetry, rise and fall, turning points, end behavior and range in a fixed order.',
      uses: ['domain', 'intercepts', 'symmetry', 'extrema', 'end behavior'],
      level: 'composite',
      tag: 'Composite',
      meta: '6 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Analyze a Function | Learn Math Class',
        description: 'Analyze a function in order: domain, intercepts, symmetry, where it rises and falls, turning points, end behavior and range. Three full examples and mistakes.',
        keywords: ['how to analyze a function', 'function analysis steps', 'intervals of increase and decrease', 'end behavior of a function', 'key features of a function'],
      },
      page: {
        h1: 'How to Analyze a Function',
        lead:
          'Analyzing a function means describing its whole behavior, not one isolated fact. Go through the same checklist every time, so the features support each other and nothing is missed.',
        recognize:
          'The question asks to "describe", "analyze", "sketch" or "list the key features" of a function, or gives several questions about one graph. Typical forms: a cubic $x^3 - 3x$, a quadratic $-x^2 + 4x$, a root $\\sqrt{x + 4}$, a rational $\\frac{1}{x - 2}$. Test: more than one feature is wanted. For a single feature, use its own method page.',
        recognizeNote: `The checklist follows the lesson section ${link('lesson.fn.analyzing.1', 'Systematic Function Analysis')}.`,
        steps: {
          traceLabel: 'On $f(x) = x^3 - 3x$',
          items: [
            {
              title: 'Find the domain.',
              body: `Look for denominators, even roots and logs, as in [finding the domain](!${HUB}/find-domain).`,
              state: '$\\mathbb{R}$',
            },
            {
              title: 'Find the intercepts.',
              body: `Evaluate $f(0)$ and solve $f(x) = 0$ ([finding intercepts](!${HUB}/find-intercepts)).`,
              state: '$x(x^2 - 3) = 0$: $(0, 0)$, $(\\pm\\sqrt{3}, 0)$',
            },
            {
              title: 'Test for symmetry.',
              body: `Compare $f(-x)$ with $f(x)$ and $-f(x)$ ([even or odd](!${HUB}/even-odd-test)).`,
              state: '$f(-x) = -f(x)$: odd, symmetric about the origin',
            },
            {
              title: 'Find the turning points.',
              body: 'Read them from the graph or a table of values; with calculus, solve $f\'(x) = 0$.',
              state: '$f(-1) = 2$ local max, $f(1) = -2$ local min',
            },
            {
              title: 'Mark where it rises and falls.',
              body: `Write the intervals with $x$-values, between turning points and breaks in the domain (${link('lesson.fn.analyzing.3', 'intervals of increase and decrease')}).`,
              state: 'up on $(-\\infty, -1)$ and $(1, \\infty)$, down on $(-1, 1)$',
            },
            {
              title: 'Describe the end behavior and the range.',
              body: `Ask where $f(x)$ goes as $x \\to \\pm\\infty$ (${link('lesson.fn.analyzing.8', 'end behavior')}); the range follows.`,
              state: '$f \\to -\\infty$ on the left, $\\infty$ on the right; range $\\mathbb{R}$',
            },
          ],
        },
        examples: [
          {
            title: 'a downward parabola',
            badge: 'quadratic',
            lines: [
              { math: '$f(x) = -x^2 + 4x$, domain $\\mathbb{R}$', why: 'polynomial' },
              { math: 'intercepts $(0, 0)$ and $(4, 0)$', why: '$-x(x - 4) = 0$' },
              { math: 'vertex $(2, 4)$: maximum $4$ at $x = 2$', why: '$x = -\\frac{4}{2(-1)}$' },
              { math: 'up on $(-\\infty, 2)$, down on $(2, \\infty)$, range $(-\\infty, 4]$', why: '', answer: true },
            ],
          },
          {
            title: 'a square root',
            badge: 'radical',
            lines: [
              { math: '$f(x) = \\sqrt{x + 4}$, domain $[-4, \\infty)$', why: 'radicand $\\geq 0$' },
              { math: 'intercepts $(-4, 0)$ and $(0, 2)$', why: 'start point and $f(0)$' },
              { math: 'increasing on $[-4, \\infty)$, minimum $0$ at $x = -4$', why: 'no turning point' },
              { math: 'range $[0, \\infty)$, neither even nor odd', why: 'domain not symmetric', answer: true },
            ],
          },
          {
            title: 'a reciprocal',
            badge: 'rational',
            lines: [
              { math: '$f(x) = \\dfrac{1}{x - 2}$, domain $x \\neq 2$', why: 'denominator' },
              { math: 'no $x$-intercept; $y$-intercept $(0, -\\frac{1}{2})$', why: 'numerator never $0$' },
              { math: 'asymptotes $x = 2$, $y = 0$', why: 'denominator zero, lower degree' },
              { math: 'decreasing on $(-\\infty, 2)$ and on $(2, \\infty)$; range $y \\neq 0$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: `For the asymptote step, see [finding asymptotes](!${HUB}/find-asymptotes).`,
        visual: {
          caption:
            'Each feature narrows down what the graph can look like. The domain says where the curve exists, the intercepts pin it to the axes, symmetry lets you draw half and mirror the rest, the turning points and the rising and falling intervals give its shape, and the end behavior tells you where the arms point. Put together, these facts leave only one reasonable sketch.',
        },
        pitfalls: [
          {
            title: 'Writing intervals with y-values',
            wrong: '$x^3 - 3x$ decreases on $(-2, 2)$, between the heights of its turning points',
            right: 'intervals use $x$-values: decreasing on $(-1, 1)$',
          },
          {
            title: 'Joining intervals across a break',
            wrong: '$\\frac{1}{x - 2}$ is decreasing on $(-\\infty, 2) \\cup (2, \\infty)$',
            right: 'decreasing on each interval separately: $f(1) = -1 < f(3) = 1$',
          },
          {
            title: 'Giving the location instead of the value',
            wrong: 'the local maximum of $x^3 - 3x$ is $-1$',
            right: 'the local maximum value is $2$, reached at $x = -1$',
          },
          {
            title: 'Confusing positive with increasing',
            wrong: '$-x^2 + 4x$ is increasing on $(0, 4)$, where it is positive',
            right: 'it is positive on $(0, 4)$ but increasing only on $(-\\infty, 2)$',
            note: `See ${link('lesson.fn.analyzing.4', 'where a function is positive or negative')}.`,
          },
        ],
        related: ['find-intercepts', 'even-odd-test', 'identify-function-family'],
        builtOn: [
          { label: 'Systematic function analysis (lesson)', url: ruleUrl('lesson.fn.analyzing.1') },
          { label: 'Intervals of increase and decrease (lesson)', url: ruleUrl('lesson.fn.analyzing.3') },
          { label: 'Locating extrema (lesson)', url: ruleUrl('lesson.fn.analyzing.5') },
          { label: 'End behavior (lesson)', url: ruleUrl('lesson.fn.analyzing.8') },
        ],
      },
    },

    // ═══ III. Strategy ═════════════════════════════════════════════════
    {
      id: 'identify-function-family',
      slug: 'identify-function-family',
      name: 'How to identify the family of a function',
      description: 'A decision tree from what you see in the formula to the family and the method that handles it.',
      uses: 'leads to 7 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'How to Identify the Family of a Function (Decision Tree) | Learn Math Class',
        description: 'Identify the family of a function from its formula: pieces, x in a denominator, exponent or log, a root, a trig function, or powers only. With a decision tree.',
        keywords: ['how to identify function families', 'types of functions', 'function family decision tree', 'parent functions', 'which type of function is it'],
      },
      page: {
        h1: 'How to Identify the Family of a Function',
        lead:
          'The family of a function decides which features matter and which method to reach for. Look at where $x$ sits in the formula: in pieces, in a denominator, in an exponent, under a root, inside a trig function, or only in powers.',
        recognize:
          'You have a formula and need to know what kind of function it is before sketching, finding a range, or choosing a method. Examples: $\\frac{x + 1}{x^2 - 9}$, $3 \\cdot 2^x$, $\\sqrt{x - 2} + 1$, $\\sin 2x$, $x^3 - 3x$. Test: ignore the constants and look only at what is done to $x$.',
        recognizeNote: `The families are described in the ${link('lesson.fn.families', 'function families lesson')}.`,
        tree: {
          rootId: 'pieces',
          svgW: 1100,
          nodes: {
            pieces: {
              type: 'q',
              text: 'Is the rule given in pieces?',
              children: [
                { label: 'yes', to: 'piecewiseLeaf' },
                { label: 'no', to: 'where' },
              ],
            },
            where: {
              type: 'q',
              text: 'Where does x appear?',
              children: [
                { label: 'denominator, exponent or log', to: 'asymptoteLeaf' },
                { label: 'under a root or in bars', to: 'parentLeaf' },
                { label: 'inside sin, cos or tan', to: 'trigLeaf' },
                { label: 'only in whole powers', to: 'degree' },
              ],
            },
            degree: {
              type: 'q',
              text: 'What is the highest power?',
              children: [
                { label: '0 or 1', to: 'linearLeaf' },
                { label: '2', to: 'quadraticLeaf' },
                { label: '3 or more', to: 'polynomialLeaf' },
              ],
            },
            piecewiseLeaf: { type: 'leaf', to: 'piecewise-functions', short: 'Piecewise or step' },
            asymptoteLeaf: { type: 'leaf', to: 'find-asymptotes', short: 'Rational, exp or log' },
            parentLeaf: { type: 'leaf', to: 'graph-transformations', short: 'Root or absolute value' },
            trigLeaf: { type: 'leaf', to: 'graph-transformations', short: 'Trigonometric' },
            linearLeaf: { type: 'leaf', to: 'find-intercepts', short: 'Constant or linear' },
            quadraticLeaf: { type: 'leaf', to: 'find-range', short: 'Quadratic' },
            polynomialLeaf: { type: 'leaf', to: 'analyze-function', short: 'Higher polynomial' },
          },
          branches: [
            {
              condition: 'The rule changes at certain values of $x$, written with a brace, or it rounds to whole steps.',
              answer: `It is a piecewise function, often a ${link('lesson.fn.families.13', 'step function')}. Use [evaluating and graphing piecewise functions](!${HUB}/piecewise-functions).`,
            },
            {
              condition: '$x$ appears in a denominator, in an exponent, or inside a logarithm.',
              answer: `It is a ${link('lesson.fn.families.8', 'rational')}, ${link('lesson.fn.families.14', 'exponential')} or ${link('lesson.fn.families.15', 'logarithmic')} function. Its key features are asymptotes: use [finding asymptotes](!${HUB}/find-asymptotes).`,
            },
            {
              condition: '$x$ appears under a root or inside absolute value bars.',
              answer: `It is a ${link('lesson.fn.families.9', 'square root')}, ${link('lesson.fn.families.10', 'cube root')} or ${link('lesson.fn.families.12', 'absolute value')} function, usually a parent graph moved or stretched. Use [graphing transformations](!${HUB}/graph-transformations).`,
            },
            {
              condition: '$x$ appears inside sine, cosine or tangent.',
              answer: `It is a ${link('lesson.fn.families.16', 'trigonometric')} function: periodic, and its graph is a sine, cosine or tangent curve moved and stretched. Use [graphing sine and cosine](!/trigonometry/methods/graph-sine-cosine) or [graphing tangent](!/trigonometry/methods/graph-tangent).`,
            },
            {
              condition: '$x$ appears only in whole-number powers and the highest power is $0$ or $1$.',
              answer: `It is a ${link('lesson.fn.families.3', 'constant')} or ${link('lesson.fn.families.4', 'linear')} function; a line is fixed by its intercepts. Use [finding intercepts](!${HUB}/find-intercepts).`,
            },
            {
              condition: '$x$ appears only in whole-number powers and the highest power is $2$.',
              answer: `It is a ${link('lesson.fn.families.5', 'quadratic')} function; its vertex gives the lowest or highest output. Use [finding the range](!${HUB}/find-range).`,
            },
            {
              condition: '$x$ appears only in whole-number powers and the highest power is $3$ or more, or the formula mixes several families.',
              answer: `It is a ${link('lesson.fn.families.6', 'cubic')} or ${link('lesson.fn.families.7', 'higher-degree polynomial')}, or a combination. Run the full checklist in [analyzing a function](!${HUB}/analyze-function).`,
            },
          ],
        },
        examplesAfter: 'Browse every family side by side in the [function families gallery](!/functions/visual-tools/types).',
        related: ['graph-transformations', 'analyze-function', 'find-asymptotes'],
        builtOn: [
          { label: 'Identifying function families (lesson)', url: ruleUrl('lesson.fn.families.2') },
          { label: 'Comparing function families (lesson)', url: ruleUrl('lesson.fn.families.17') },
          { label: 'Families at a glance (lesson)', url: ruleUrl('lesson.fn.families.18') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Domain, range, composition, inverses and graphs', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a method', blurb: 'Strategy' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'atomic', label: 'Atomic' },
        { value: 'composite', label: 'Composite' },
        { value: 'strategy', label: 'Strategy' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other methods',
    links: [
      { url: '/algebra/methods', label: 'Algebra methods' },
      { url: '/calculus/methods', label: 'Calculus methods' },
      { url: '/trigonometry/methods', label: 'Trigonometry methods' },
    ],
  },
};

export default functionsMethods;
