// equations.methods.js (trigonometry)
// Single data source for /trigonometry/equations/methods (hub) and
// /trigonometry/equations/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/trigonometry/equations/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/trigonometry/equations/methods';

const trigEquationsMethods = {
  hubPath: HUB,
  hubLabel: 'trig equation methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    {
      id: 'basic-trig-equations',
      slug: 'basic-trig-equations',
      name: 'How to solve a basic trig equation',
      description: '$\\sin x = a$, $\\cos x = a$, $\\tan x = a$ on one turn: reference angle, then the two quadrants.',
      uses: ['reference angle', 'quadrant signs'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Basic Trig Equations (sin x = a, cos x = a) | Learn Math Class',
        description: 'Solve sin x = a, cos x = a and tan x = a on [0, 2π): find the reference angle, pick the two quadrants with the right sign, write both solutions. Examples.',
        keywords: ['solve trig equations', 'sin x = a', 'basic trigonometric equations', 'solve cos x = 1/2', 'trig equation examples'],
      },
      page: {
        h1: 'How to Solve a Basic Trig Equation',
        lead:
          'A sine or cosine takes each value twice per turn, a tangent once per half-turn. Find the reference angle from the absolute value, then place it in the two quadrants where the function has the right sign.',
        recognize:
          'One trig function of $x$ alone equal to a number: $\\sin x = \\frac{\\sqrt{3}}{2}$, $\\cos x = -\\frac{1}{2}$, $\\tan x = -1$, $\\sin x = 0.3$, usually on $[0, 2\\pi)$ or $[0^\\circ, 360^\\circ)$.',
        recognizeNote: `The lesson treats each function in turn: ${link('lesson.trig.equations.sine', 'sine')}, ${link('lesson.trig.equations.cosine', 'cosine')} and ${link('lesson.trig.equations.tangent', 'tangent')} equations.`,
        steps: {
          traceLabel: 'On $\\cos x = -\\frac{1}{2}$ on $[0, 2\\pi)$',
          items: [
            {
              title: 'Check the value is possible.',
              body: 'Sine and cosine need $-1 \\le a \\le 1$; tangent takes every value.',
              state: '$-\\frac{1}{2}$ is fine',
            },
            {
              title: 'Find the reference angle from |a|.',
              body: `Exact for standard values (${link('lesson.trig.unit-circle.exact-values', 'exact values')}), otherwise the inverse function of $|a|$.`,
              state: '$\\cos\\frac{\\pi}{3} = \\frac{1}{2}$: reference $\\frac{\\pi}{3}$',
            },
            {
              title: 'Pick the quadrants with the right sign.',
              body: 'Sine positive in I, II; cosine positive in I, IV; tangent positive in I, III.',
              state: 'cosine negative: quadrants II and III',
            },
            {
              title: 'Write the angle in each quadrant.',
              body: 'II: $\\pi - r$; III: $\\pi + r$; IV: $2\\pi - r$.',
              state: '$x = \\frac{2\\pi}{3}$, $\\frac{4\\pi}{3}$',
            },
          ],
        },
        examples: [
          {
            title: 'sine, positive value',
            badge: 'quadrants I and II',
            lines: [
              { math: '$\\sin x = \\frac{\\sqrt{3}}{2}$: reference $\\frac{\\pi}{3}$', why: '' },
              { math: '$x = \\frac{\\pi}{3}$, $\\frac{2\\pi}{3}$', why: '', answer: true },
            ],
          },
          {
            title: 'tangent',
            badge: 'quadrants II and IV',
            lines: [
              { math: '$\\tan x = -1$: reference $\\frac{\\pi}{4}$', why: 'tangent negative in II and IV' },
              { math: '$x = \\frac{3\\pi}{4}$, $\\frac{7\\pi}{4}$', why: '', answer: true },
            ],
          },
          {
            title: 'not a standard value',
            badge: 'calculator',
            lines: [
              { math: '$\\sin x = 0.3$: $\\arcsin 0.3 \\approx 0.305$', why: 'quadrant I' },
              { math: '$x \\approx 0.305$, $\\pi - 0.305 \\approx 2.837$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Draw the horizontal line $y = \\frac{\\sqrt{3}}{2}$ across the unit circle: it cuts the circle at two points, mirror images in the $y$-axis. Those two points are the two solutions; a cosine equation uses a vertical line and mirrors in the $x$-axis instead.',
        },
        pitfalls: [
          {
            title: 'Only the calculator answer',
            wrong: '$\\sin x = 0.3 \\Rightarrow x \\approx 0.305$ only',
            right: 'also $\\pi - 0.305$',
          },
          {
            title: 'Negative reference angle',
            wrong: '$\\cos x = -\\frac{1}{2} \\Rightarrow$ reference $-\\frac{\\pi}{3}$',
            right: 'take the reference from $|a|$, then use the quadrants',
          },
          {
            title: 'Solving an impossible equation',
            wrong: '$\\sin x = 2 \\Rightarrow x = \\arcsin 2$',
            right: 'no solution: sine never exceeds $1$',
          },
        ],
        related: ['general-solution', 'equations-on-interval', 'which-trig-equation-method'],
        builtOn: [
          { label: 'Sine equations (lesson)', url: ruleUrl('lesson.trig.equations.sine') },
          { label: 'Reference angles (lesson)', url: ruleUrl('lesson.trig.unit-circle.reference-angles') },
          { label: 'Quadrant signs (lesson)', url: ruleUrl('lesson.trig.unit-circle.quadrant-signs') },
        ],
      },
    },
    {
      id: 'general-solution',
      slug: 'general-solution',
      name: 'How to write the general solution of a trig equation',
      description: 'Every solution at once: add $2k\\pi$ to the sine and cosine solutions, $k\\pi$ to the tangent ones.',
      uses: ['general solution formulas', 'periodicity'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Write the General Solution of a Trig Equation | Learn Math Class',
        description: 'Write every solution of sin x = a, cos x = a or tan x = a: find the solutions in one period, then add 2kπ (sine, cosine) or kπ (tangent), k any integer.',
        keywords: ['general solution trig equation', 'all solutions of sin x = a', '2kπ solutions', 'general solution formulas', 'periodic solutions'],
      },
      page: {
        h1: 'How to Write the General Solution of a Trig Equation',
        lead:
          'Trig functions repeat, so an equation with one solution has infinitely many. Find the solutions in one period and add every multiple of the period: $2\\pi$ for sine and cosine, $\\pi$ for tangent.',
        recognize:
          '"Find all solutions", "find the general solution", "solve for all real $x$", or an answer to be given with $k \\in \\mathbb{Z}$. Test: no interval is given.',
        recognizeNote: `The difference between ${link('lesson.trig.equations.general-vs-restricted', 'general and restricted solutions')} is explained in the lesson; the formulas are the general solutions of ${link('trig.general-solution-sine', 'sine')}, ${link('trig.general-solution-cosine', 'cosine')} and ${link('trig.general-solution-tangent', 'tangent')} equations.`,
        methods: [
          {
            name: 'One period plus multiples',
            tag: 'usual choice',
            preferred: true,
            formula: 'x = x_1 + 2k\\pi \\ \\text{ or } \\ x = x_2 + 2k\\pi, \\quad k \\in \\mathbb{Z}',
            body: `Solve on $[0, 2\\pi)$ as a [basic equation](!${HUB}/basic-trig-equations), then add the period to each.`,
          },
          {
            name: 'Compact formulas',
            tag: 'one line',
            formula: '\\sin x = a:\\ x = (-1)^k\\arcsin a + k\\pi \\qquad \\cos x = a:\\ x = \\pm\\arccos a + 2k\\pi \\qquad \\tan x = a:\\ x = \\arctan a + k\\pi',
            body: 'The same solution sets, written with one parameter.',
          },
        ],
        steps: {
          traceLabel: 'On $\\sin x = \\frac{1}{2}$',
          items: [
            {
              title: 'Solve on one period.',
              body: `[Basic trig equation](!${HUB}/basic-trig-equations).`,
              state: '$x = \\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$',
            },
            {
              title: 'Choose the period.',
              body: `$2\\pi$ for sine and cosine, $\\pi$ for tangent (${link('trig.periodicity', 'periodicity')}). In degrees: $360^\\circ$ and $180^\\circ$.`,
              state: 'period $2\\pi$',
            },
            {
              title: 'Add k times the period to each solution.',
              body: 'State that $k$ is an integer.',
              state: '$x = \\frac{\\pi}{6} + 2k\\pi$ or $x = \\frac{5\\pi}{6} + 2k\\pi$, $k \\in \\mathbb{Z}$',
            },
            {
              title: 'Check one value of k.',
              body: '$k = 1$ should give another true solution.',
              state: '$\\frac{13\\pi}{6}$: $\\sin\\frac{13\\pi}{6} = \\frac{1}{2}$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'cosine',
            badge: '±',
            lines: [
              { math: '$\\cos x = \\frac{\\sqrt{2}}{2}$: one period gives $\\pm\\frac{\\pi}{4}$', why: '' },
              { math: '$x = \\pm\\frac{\\pi}{4} + 2k\\pi$', why: '', answer: true },
            ],
          },
          {
            title: 'tangent',
            badge: 'period π',
            lines: [
              { math: '$\\tan x = \\sqrt{3}$: $x = \\frac{\\pi}{3}$', why: 'one solution per half-turn' },
              { math: '$x = \\frac{\\pi}{3} + k\\pi$', why: '', answer: true },
            ],
          },
          {
            title: 'in degrees',
            badge: 'one solution per turn',
            lines: [
              { math: '$\\sin x = -1$: $x = 270^\\circ$', why: 'the only point at the bottom' },
              { math: '$x = 270^\\circ + 360^\\circ k$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The graph of $\\sin x$ crosses the line $y = \\frac{1}{2}$ twice in every window of width $2\\pi$, and each window is a copy of the last. The general solution lists the two crossings in one window and says "and every copy of them".',
        },
        pitfalls: [
          {
            title: 'Adding 2kπ to tangent',
            wrong: '$\\tan x = \\sqrt{3}: x = \\frac{\\pi}{3} + 2k\\pi$',
            right: 'that misses $\\frac{4\\pi}{3}$; add $k\\pi$',
          },
          {
            title: 'Only one family for sine',
            wrong: '$\\sin x = \\frac{1}{2}: x = \\frac{\\pi}{6} + 2k\\pi$',
            right: 'also $\\frac{5\\pi}{6} + 2k\\pi$',
          },
          {
            title: 'k left undefined',
            wrong: '$x = \\frac{\\pi}{6} + 2k\\pi$',
            right: 'add "$k \\in \\mathbb{Z}$": $k$ runs over all integers',
          },
        ],
        related: ['basic-trig-equations', 'equations-on-interval', 'multiple-angle-equations'],
        builtOn: [
          { label: 'General solution of a sine equation', url: ruleUrl('trig.general-solution-sine') },
          { label: 'General solution of a cosine equation', url: ruleUrl('trig.general-solution-cosine') },
          { label: 'General solution of a tangent equation', url: ruleUrl('trig.general-solution-tangent') },
        ],
      },
    },
    {
      id: 'equations-on-interval',
      slug: 'equations-on-interval',
      name: 'How to find the solutions of a trig equation in an interval',
      description: 'Write the general solution, then substitute integers k until you leave the interval.',
      uses: ['general solution', 'periodicity'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Trig Equation Solutions in a Given Interval | Learn Math Class',
        description: 'List the solutions of a trig equation in an interval such as [0°, 720°) or [−π, π]: write the general solution, try integer values of k, keep the ones inside.',
        keywords: ['trig equation solutions in an interval', 'solve on [0, 2π)', 'solutions between 0 and 720 degrees', 'restricted solutions trig'],
      },
      page: {
        h1: 'How to Find the Solutions of a Trig Equation in an Interval',
        lead:
          'When the interval is not just one turn, write the general solution and substitute $k = 0, \\pm 1, \\pm 2, \\ldots$ into each family, keeping every value that lands inside the interval.',
        recognize:
          'A trig equation with an interval other than $[0, 2\\pi)$: "solve for $0^\\circ \\le x < 720^\\circ$", "on $[-\\pi, \\pi]$", "on $[0, 3\\pi]$". Test: the interval is longer than one period, or does not start at $0$.',
        recognizeNote: `The lesson calls these ${link('lesson.trig.equations.general-vs-restricted', 'restricted solutions')}; they come from the [general solution](!${HUB}/general-solution).`,
        steps: {
          traceLabel: 'On $\\cos x = \\frac{1}{2}$ for $0^\\circ \\le x < 720^\\circ$',
          items: [
            {
              title: 'Write the general solution.',
              body: '',
              state: '$x = 60^\\circ + 360^\\circ k$ or $x = 300^\\circ + 360^\\circ k$',
            },
            {
              title: 'Try k = 0, 1, 2, … in each family.',
              body: 'And $k = -1, -2, \\ldots$ if the interval reaches below $0$.',
              state: 'first family: $60^\\circ$, $420^\\circ$; second: $300^\\circ$, $660^\\circ$',
            },
            {
              title: 'Stop when the values leave the interval.',
              body: 'Mind whether the endpoints are included.',
              state: '$780^\\circ$ and $1020^\\circ$ are outside',
            },
            {
              title: 'List the solutions in order.',
              body: 'Two per turn for sine and cosine (usually), one per half-turn for tangent.',
              state: '$60^\\circ, 300^\\circ, 420^\\circ, 660^\\circ$',
            },
          ],
        },
        examples: [
          {
            title: 'a symmetric interval',
            badge: 'negative k',
            lines: [
              { math: '$\\sin x = -\\frac{\\sqrt{2}}{2}$ on $[-\\pi, \\pi]$: $x = -\\frac{\\pi}{4} + 2k\\pi$ or $-\\frac{3\\pi}{4} + 2k\\pi$', why: '' },
              { math: '$x = -\\frac{3\\pi}{4}$, $-\\frac{\\pi}{4}$', why: '$k = 0$ only', answer: true },
            ],
          },
          {
            title: 'tangent over one and a half turns',
            badge: 'period π',
            lines: [
              { math: '$\\tan x = 1$ on $[0, 3\\pi]$: $x = \\frac{\\pi}{4} + k\\pi$', why: '' },
              { math: '$\\frac{\\pi}{4}$, $\\frac{5\\pi}{4}$, $\\frac{9\\pi}{4}$', why: '$k = 0, 1, 2$', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'two turns',
            lines: [
              { math: '$\\cos x = \\frac{1}{2}$, $0^\\circ \\le x < 720^\\circ$', why: '' },
              { math: '$60^\\circ, 300^\\circ, 420^\\circ, 660^\\circ$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Lay the interval on the $x$-axis under the graph and count the crossings: two per full turn for $\\cos x = \\frac{1}{2}$. Substituting $k$ walks along the axis one period at a time, and the interval tells you where to start and stop.',
        },
        pitfalls: [
          {
            title: 'Stopping after one turn',
            wrong: '$60^\\circ$ and $300^\\circ$ only for $[0^\\circ, 720^\\circ)$',
            right: 'add $360^\\circ$: $420^\\circ$ and $660^\\circ$ too',
          },
          {
            title: 'Forgetting negative k',
            wrong: 'no solutions in $[-\\pi, 0]$',
            right: 'negative intervals need $k = -1, -2, \\ldots$ or negative base angles',
          },
          {
            title: 'Including an excluded endpoint',
            wrong: '$720^\\circ$ listed for $x < 720^\\circ$',
            right: 'respect $<$ versus $\\le$',
          },
        ],
        related: ['general-solution', 'multiple-angle-equations', 'basic-trig-equations'],
        builtOn: [
          { label: 'General versus restricted solutions (lesson)', url: ruleUrl('lesson.trig.equations.general-vs-restricted') },
          { label: 'Periodicity identities', url: ruleUrl('trig.periodicity') },
        ],
      },
    },
    {
      id: 'quadratic-trig-equations',
      slug: 'quadratic-trig-equations',
      name: 'How to solve a quadratic trig equation',
      description: 'Substitute $u = \\sin x$ (or $\\cos x$), solve the quadratic, then solve each basic equation.',
      uses: ['substitution', 'quadratic equations', 'basic trig equations'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Quadratic Trig Equations (2sin²x − sin x − 1 = 0) | Learn Math Class',
        description: 'Solve quadratic-type trig equations: let u = sin x, factor or use the formula, discard values outside [−1, 1], then solve each basic equation. Examples.',
        keywords: ['quadratic trig equations', 'solve 2sin^2 x - sin x - 1 = 0', 'trig equations quadratic form', 'substitution trig equation'],
      },
      page: {
        h1: 'How to Solve a Quadratic Trig Equation',
        lead:
          'When one trig function appears squared and to the first power, the equation is a quadratic in disguise. Call the function $u$, solve the quadratic, then turn each value of $u$ back into angles.',
        recognize:
          'One trig function, squared and plain: $2\\sin^2 x - \\sin x - 1 = 0$, $\\cos^2 x - 3\\cos x + 2 = 0$, $\\tan^2 x = 3$. Test: replace the function by $u$; is it a quadratic in $u$?',
        recognizeNote: `The lesson section is ${link('lesson.trig.equations.quadratic-type', 'Quadratic-Type Trigonometric Equations')}; the quadratic is solved by [factoring](!/algebra/equations/methods/quadratic-factoring) or the [formula](!/algebra/equations/methods/quadratic-formula).`,
        steps: {
          traceLabel: 'On $2\\sin^2 x - \\sin x - 1 = 0$ on $[0, 2\\pi)$',
          items: [
            {
              title: 'Substitute u for the function.',
              body: 'All terms must be in the same function; if not, see [equations with identities](!/trigonometry/equations/methods/equations-with-identities).',
              state: '$2u^2 - u - 1 = 0$',
            },
            {
              title: 'Solve the quadratic.',
              body: '',
              state: '$(2u + 1)(u - 1) = 0$: $u = -\\frac{1}{2}$ or $u = 1$',
            },
            {
              title: 'Discard impossible values.',
              body: 'For sine and cosine, $u$ must be in $[-1, 1]$.',
              state: 'both allowed',
            },
            {
              title: 'Solve each basic equation and combine.',
              body: `[Basic trig equations](!${HUB}/basic-trig-equations).`,
              state: '$\\sin x = 1$: $\\frac{\\pi}{2}$; $\\sin x = -\\frac{1}{2}$: $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$',
            },
          ],
        },
        examples: [
          {
            title: 'an impossible root',
            badge: 'discard',
            lines: [
              { math: '$\\cos^2 x - 3\\cos x + 2 = 0 \\Rightarrow (\\cos x - 1)(\\cos x - 2) = 0$', why: '' },
              { math: '$\\cos x = 1$: $x = 0$ ($\\cos x = 2$ is impossible)', why: '', answer: true },
            ],
          },
          {
            title: 'no linear term',
            badge: '±',
            lines: [
              { math: '$\\tan^2 x = 3 \\Rightarrow \\tan x = \\pm\\sqrt{3}$', why: '' },
              { math: '$x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'three solutions',
            lines: [
              { math: '$2\\sin^2 x - \\sin x - 1 = 0$', why: '' },
              { math: '$x = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The quadratic gives heights on the unit circle, not angles: $\\sin x = 1$ is the single top point, $\\sin x = -\\frac{1}{2}$ two points below the centre. Each height becomes as many angles as the horizontal line has crossings.',
        },
        pitfalls: [
          {
            title: 'Dividing by the function',
            wrong: '$\\sin^2 x = \\sin x \\Rightarrow \\sin x = 1$',
            right: 'factor: $\\sin x(\\sin x - 1) = 0$ also gives $\\sin x = 0$',
          },
          {
            title: 'Keeping an impossible value',
            wrong: '$\\cos x = 2 \\Rightarrow x = \\arccos 2$',
            right: 'discard it: cosine stays in $[-1, 1]$',
          },
          {
            title: 'Forgetting ± with a square root',
            wrong: '$\\tan^2 x = 3 \\Rightarrow \\tan x = \\sqrt{3}$',
            right: '$\\tan x = \\pm\\sqrt{3}$',
          },
        ],
        related: ['factoring-trig-equations', 'equations-with-identities', 'which-trig-equation-method'],
        builtOn: [
          { label: 'Quadratic-type equations (lesson)', url: ruleUrl('lesson.trig.equations.quadratic-type') },
          { label: 'Sine equations (lesson)', url: ruleUrl('lesson.trig.equations.sine') },
        ],
      },
    },
    {
      id: 'factoring-trig-equations',
      slug: 'factoring-trig-equations',
      name: 'How to solve a trig equation by factoring',
      description: 'Bring everything to one side, factor out the common function, set each factor to zero.',
      uses: ['zero product property', 'basic trig equations'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Trig Equations by Factoring | Learn Math Class',
        description: 'Solve trig equations by factoring: move every term to one side, factor out the common trig factor (never divide by it), solve each factor, reject undefined x.',
        keywords: ['solve trig equations by factoring', 'trig equation zero product', 'sin x cos x equation', 'do not divide by sin x'],
      },
      page: {
        h1: 'How to Solve a Trig Equation by Factoring',
        lead:
          'When a trig function appears in every term, factor it out instead of dividing by it. Dividing throws away the solutions where that function is zero; factoring keeps them.',
        recognize:
          'A common trig factor on both sides or in every term: $2\\sin x\\cos x = \\sin x$, $\\tan x\\sin x = \\tan x$, $\\sin^2 x = \\sin x$. Test: could you "cancel" something? Factor it instead.',
        recognizeNote: `The lesson section is ${link('lesson.trig.equations.algebraic', 'Equations Requiring Algebraic Manipulation')}; checking for ${link('lesson.trig.equations.extraneous', 'extraneous solutions')} is part of the method.`,
        steps: {
          traceLabel: 'On $2\\sin x\\cos x = \\sin x$ on $[0, 2\\pi)$',
          items: [
            {
              title: 'Move every term to one side.',
              body: 'Zero on the other side.',
              state: '$2\\sin x\\cos x - \\sin x = 0$',
            },
            {
              title: 'Factor out the common factor.',
              body: '',
              state: '$\\sin x(2\\cos x - 1) = 0$',
            },
            {
              title: 'Solve each factor.',
              body: `[Basic trig equations](!${HUB}/basic-trig-equations).`,
              state: '$\\sin x = 0$: $0, \\pi$; $\\cos x = \\frac{1}{2}$: $\\frac{\\pi}{3}, \\frac{5\\pi}{3}$',
            },
            {
              title: 'Reject values where the original is undefined.',
              body: 'Tangents, secants and fractions can be undefined at some solutions of a factor.',
              state: 'all defined: $0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$',
            },
          ],
        },
        examples: [
          {
            title: 'a tangent factor',
            badge: 'reject an undefined value',
            lines: [
              { math: '$\\tan x\\sin x = \\tan x \\Rightarrow \\tan x(\\sin x - 1) = 0$', why: '' },
              { math: '$\\tan x = 0$: $0, \\pi$; $\\sin x = 1$: $\\frac{\\pi}{2}$, but $\\tan\\frac{\\pi}{2}$ is undefined', why: '' },
              { math: '$x = 0, \\pi$', why: '', answer: true },
            ],
          },
          {
            title: 'a square',
            badge: 'do not divide',
            lines: [
              { math: '$\\sin^2 x = \\sin x \\Rightarrow \\sin x(\\sin x - 1) = 0$', why: '' },
              { math: '$x = 0, \\frac{\\pi}{2}, \\pi$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'four solutions',
            lines: [
              { math: '$2\\sin x\\cos x = \\sin x$', why: '' },
              { math: '$x = 0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A product is zero when either factor is. Graph $\\sin x$ and $2\\cos x - 1$ together: the product\'s zeros are all the places where either curve crosses the axis. Dividing by $\\sin x$ would erase the first curve\'s crossings.',
        },
        pitfalls: [
          {
            title: 'Dividing by the common factor',
            wrong: '$2\\sin x\\cos x = \\sin x \\Rightarrow \\cos x = \\frac{1}{2}$',
            right: 'that loses $x = 0$ and $x = \\pi$',
          },
          {
            title: 'Keeping an undefined solution',
            wrong: '$x = \\frac{\\pi}{2}$ in $\\tan x\\sin x = \\tan x$',
            right: '$\\tan\\frac{\\pi}{2}$ does not exist; reject it',
          },
          {
            title: 'Factoring without a zero side',
            wrong: '$\\sin x(2\\cos x) = \\sin x \\Rightarrow \\sin x = \\sin x$ or $2\\cos x = 1$',
            right: 'bring everything to one side first',
          },
        ],
        related: ['quadratic-trig-equations', 'equations-with-identities', 'which-trig-equation-method'],
        builtOn: [
          { label: 'Algebraic manipulation (lesson)', url: ruleUrl('lesson.trig.equations.algebraic') },
          { label: 'Extraneous solutions (lesson)', url: ruleUrl('lesson.trig.equations.extraneous') },
        ],
      },
    },
    {
      id: 'equations-with-identities',
      slug: 'equations-with-identities',
      name: 'How to solve a trig equation using identities',
      description: 'Rewrite everything in one function of one angle with an identity, then solve.',
      uses: ['Pythagorean identity', 'double-angle identities'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Trig Equations Using Identities | Learn Math Class',
        description: 'Solve trig equations with mixed functions or angles: use the Pythagorean or double-angle identity to get one function of one angle, solve, check.',
        keywords: ['trig equations with identities', 'solve 2cos^2 x + sin x - 1 = 0', 'cos 2x = cos x', 'identity substitution trig equation'],
      },
      page: {
        h1: 'How to Solve a Trig Equation Using Identities',
        lead:
          'An equation with two different functions, or two different angles, cannot be solved as it stands. An identity rewrites it in a single function of a single angle, and then it is a quadratic or a factorable equation.',
        recognize:
          'Mixed functions or angles: $2\\cos^2 x + \\sin x - 1 = 0$ (cosine squared, sine), $\\cos 2x = \\cos x$ (two angles), $\\sin 2x = \\cos x$, $\\sin x + \\cos x = 1$.',
        recognizeNote: `The lesson section is ${link('lesson.trig.equations.identity-substitution', 'Equations Requiring Identity Substitution')}; the identities are in the [identities methods](!/trigonometry/identities/methods).`,
        steps: {
          traceLabel: 'On $2\\cos^2 x + \\sin x - 1 = 0$ on $[0, 2\\pi)$',
          items: [
            {
              title: 'Choose the target function and angle.',
              body: 'The one that appears to the first power, usually.',
              state: 'target: $\\sin x$',
            },
            {
              title: 'Rewrite with an identity.',
              body: `$\\cos^2 x = 1 - \\sin^2 x$ (${link('trig.pythagorean-identity', 'Pythagorean identity')}); $\\cos 2x = 2\\cos^2 x - 1$ or $1 - 2\\sin^2 x$ (${link('trig.cosine-double-angle', 'double angle')}).`,
              state: '$2(1 - \\sin^2 x) + \\sin x - 1 = 0 \\Rightarrow 2\\sin^2 x - \\sin x - 1 = 0$',
            },
            {
              title: 'Solve the single-function equation.',
              body: `Usually a [quadratic](!${HUB}/quadratic-trig-equations) or a [factoring](!${HUB}/factoring-trig-equations) problem.`,
              state: '$\\sin x = 1$ or $\\sin x = -\\frac{1}{2}$',
            },
            {
              title: 'Solve for x and check any squared step.',
              body: `Squaring both sides can add ${link('lesson.trig.equations.extraneous', 'extraneous solutions')}.`,
              state: '$x = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$',
            },
          ],
        },
        examples: [
          {
            title: 'two angles',
            badge: 'double angle',
            lines: [
              { math: '$\\cos 2x = \\cos x \\Rightarrow 2\\cos^2 x - \\cos x - 1 = 0$', why: '$\\cos 2x = 2\\cos^2 x - 1$' },
              { math: '$(2\\cos x + 1)(\\cos x - 1) = 0$: $x = 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$', why: '', answer: true },
            ],
          },
          {
            title: 'sine of a double angle',
            badge: 'then factor',
            lines: [
              { math: '$\\sin 2x = \\cos x \\Rightarrow \\cos x(2\\sin x - 1) = 0$', why: '$\\sin 2x = 2\\sin x\\cos x$' },
              { math: '$x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'squaring both sides',
            badge: 'extraneous roots',
            lines: [
              { math: '$\\sin x + \\cos x = 1 \\Rightarrow 1 + 2\\sin x\\cos x = 1 \\Rightarrow \\sin 2x = 0$', why: 'square both sides' },
              { math: 'candidates $0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$; $\\pi$ and $\\frac{3\\pi}{2}$ give $-1$', why: 'check each' },
              { math: '$x = 0, \\frac{\\pi}{2}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'An identity changes how the equation is written, not what it says: both sides describe the same curve. Choosing the version with one function turns a picture with two different waves into one wave cut by horizontal lines.',
        },
        pitfalls: [
          {
            title: 'Wrong version of cos 2x',
            wrong: 'using $\\cos^2 x - \\sin^2 x$ when the rest is in $\\cos x$',
            right: 'pick $2\\cos^2 x - 1$ so only cosine remains',
          },
          {
            title: 'Not checking after squaring',
            wrong: 'reporting $\\pi$ for $\\sin x + \\cos x = 1$',
            right: '$\\sin\\pi + \\cos\\pi = -1$; reject it',
          },
          {
            title: 'Losing the double angle in the answer',
            wrong: '$\\sin 2x = 0 \\Rightarrow x = 0, \\pi$ only',
            right: '$2x = 0, \\pi, 2\\pi, 3\\pi$ gives four candidates in $[0, 2\\pi)$',
          },
        ],
        related: ['quadratic-trig-equations', 'multiple-angle-equations', 'which-trig-equation-method'],
        builtOn: [
          { label: 'Identity substitution (lesson)', url: ruleUrl('lesson.trig.equations.identity-substitution') },
          { label: 'Pythagorean identity', url: ruleUrl('trig.pythagorean-identity') },
          { label: 'Cosine double angle', url: ruleUrl('trig.cosine-double-angle') },
        ],
      },
    },
    {
      id: 'multiple-angle-equations',
      slug: 'multiple-angle-equations',
      name: 'How to solve a trig equation with a multiple angle',
      description: 'Solve for $kx$ over the stretched interval, then divide every solution by $k$.',
      uses: ['general solution', 'interval scaling'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Trig Equations with Multiple Angles (sin 2x, cos 3x) | Learn Math Class',
        description: 'Solve sin 2x = a or cos 3x = a: stretch the interval by the multiplier, solve for the inner angle over it, then divide every solution by the multiplier.',
        keywords: ['multiple angle trig equations', 'solve sin 2x = a', 'solve cos 3x = 0', 'trig equations with 2x', 'how many solutions sin 2x'],
      },
      page: {
        h1: 'How to Solve a Trig Equation with a Multiple Angle',
        lead:
          'In $\\sin 2x = a$ the angle that the sine sees is $2x$, and $2x$ runs over twice the interval of $x$. Solve for $2x$ over the stretched interval, then halve every answer. A multiplier $k$ gives $k$ times as many solutions.',
        recognize:
          'A trig function of $kx$ or $\\frac{x}{k}$ equal to a number: $\\sin 2x = \\frac{\\sqrt{3}}{2}$, $\\cos 3x = 0$, $\\tan\\frac{x}{2} = 1$. Test: the angle is not plain $x$, and only one angle appears.',
        recognizeNote: `The lesson section is ${link('lesson.trig.equations.multiple-angles', 'Equations with Multiple Angles')}.`,
        steps: {
          traceLabel: 'On $\\sin 2x = \\frac{\\sqrt{3}}{2}$ on $[0, 2\\pi)$',
          items: [
            {
              title: 'Name the inner angle and stretch the interval.',
              body: 'If $0 \\le x < 2\\pi$, then $0 \\le 2x < 4\\pi$.',
              state: '$u = 2x$, $u \\in [0, 4\\pi)$',
            },
            {
              title: 'Solve for u on one turn.',
              body: `[Basic trig equation](!${HUB}/basic-trig-equations).`,
              state: '$u = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$',
            },
            {
              title: 'Add periods until u leaves its interval.',
              body: `As for [solutions in an interval](!${HUB}/equations-on-interval).`,
              state: '$u = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{7\\pi}{3}, \\frac{8\\pi}{3}$',
            },
            {
              title: 'Divide every u by the multiplier.',
              body: '',
              state: '$x = \\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{7\\pi}{6}, \\frac{4\\pi}{3}$',
            },
          ],
        },
        examples: [
          {
            title: 'triple angle',
            badge: 'six solutions',
            lines: [
              { math: '$\\cos 3x = 0$ on $[0, 2\\pi)$: $3x = \\frac{\\pi}{2} + k\\pi$, $3x \\in [0, 6\\pi)$', why: '' },
              { math: '$x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}$', why: '', answer: true },
            ],
          },
          {
            title: 'half angle',
            badge: 'interval shrinks',
            lines: [
              { math: '$\\tan\\frac{x}{2} = 1$ on $[0, 2\\pi)$: $\\frac{x}{2} \\in [0, \\pi)$', why: '' },
              { math: '$\\frac{x}{2} = \\frac{\\pi}{4} \\Rightarrow x = \\frac{\\pi}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'double angle',
            lines: [
              { math: '$\\sin 2x = \\frac{\\sqrt{3}}{2}$', why: '' },
              { math: '$x = \\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{7\\pi}{6}, \\frac{4\\pi}{3}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            '$\\sin 2x$ squeezes two full sine waves into one turn, so the line $y = \\frac{\\sqrt{3}}{2}$ crosses it four times instead of two. Stretching the interval for $u = 2x$ is how the method counts those extra crossings.',
        },
        pitfalls: [
          {
            title: 'Interval not stretched',
            wrong: '$\\sin 2x = \\frac{\\sqrt{3}}{2}$: $2x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$ only',
            right: '$2x$ runs to $4\\pi$: four values',
          },
          {
            title: 'Dividing before solving',
            wrong: '$\\sin 2x = \\frac{\\sqrt{3}}{2} \\Rightarrow \\sin x = \\frac{\\sqrt{3}}{4}$',
            right: '$\\sin 2x$ is not $2\\sin x$; solve for $2x$',
          },
          {
            title: 'Dividing only the first solution',
            wrong: '$x = \\frac{\\pi}{6}, \\frac{2\\pi}{3}, \\ldots$',
            right: 'divide every $u$ by $2$',
          },
        ],
        related: ['equations-on-interval', 'general-solution', 'auxiliary-angle'],
        builtOn: [
          { label: 'Multiple angles (lesson)', url: ruleUrl('lesson.trig.equations.multiple-angles') },
          { label: 'General solution of a sine equation', url: ruleUrl('trig.general-solution-sine') },
        ],
      },
    },
    {
      id: 'auxiliary-angle',
      slug: 'auxiliary-angle',
      name: 'How to use the auxiliary angle method',
      description: 'Combine $a\\sin x + b\\cos x$ into a single $R\\sin(x + \\alpha)$, then solve or find its maximum.',
      uses: ['sum formula', 'Pythagoras'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use the Auxiliary Angle Method (a sin x + b cos x) | Learn Math Class',
        description: 'Rewrite a sin x + b cos x as R sin(x + α) with R = √(a² + b²): find R and α, solve the single sine equation, or read off the maximum R. Worked examples.',
        keywords: ['auxiliary angle method', 'a sin x + b cos x', 'R sin(x + alpha)', 'harmonic form', 'solve sin x + sqrt3 cos x = 1'],
      },
      page: {
        h1: 'How to Use the Auxiliary Angle Method',
        lead:
          'A sum $a\\sin x + b\\cos x$ is a single sine wave in disguise: $R\\sin(x + \\alpha)$ with $R = \\sqrt{a^2 + b^2}$. Find $R$ and $\\alpha$, and an equation with two functions becomes a basic one.',
        recognize:
          'A sine and a cosine of the same angle added, each to the first power: $\\sin x + \\sqrt{3}\\cos x = 1$, $\\sqrt{3}\\sin x - \\cos x = \\sqrt{2}$, "find the maximum of $3\\sin x + 4\\cos x$".',
        recognizeNote: `The method expands the ${link('trig.sine-sum-difference', 'sine sum formula')} backwards; the site has no separate lesson on it, the nearest is ${link('lesson.trig.identities.sum', 'sum identities')}.`,
        steps: {
          traceLabel: 'On $\\sin x + \\sqrt{3}\\cos x = 1$ on $[0, 2\\pi)$',
          items: [
            {
              title: 'Compute R.',
              body: '$R = \\sqrt{a^2 + b^2}$.',
              state: '$R = \\sqrt{1 + 3} = 2$',
            },
            {
              title: 'Find α from cos α = a / R and sin α = b / R.',
              body: 'Then $a\\sin x + b\\cos x = R\\sin(x + \\alpha)$.',
              state: '$\\cos\\alpha = \\frac{1}{2}$, $\\sin\\alpha = \\frac{\\sqrt{3}}{2}$: $\\alpha = \\frac{\\pi}{3}$',
            },
            {
              title: 'Solve the single sine equation.',
              body: `Over the shifted interval $x + \\alpha \\in [\\alpha, 2\\pi + \\alpha)$ ([basic equations](!${HUB}/basic-trig-equations)).`,
              state: '$\\sin(x + \\frac{\\pi}{3}) = \\frac{1}{2}$: $x + \\frac{\\pi}{3} = \\frac{5\\pi}{6}, \\frac{13\\pi}{6}$',
            },
            {
              title: 'Subtract α and check.',
              body: '',
              state: '$x = \\frac{\\pi}{2}, \\frac{11\\pi}{6}$; both give $1$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'maximum value',
            badge: 'read off R',
            lines: [
              { math: '$3\\sin x + 4\\cos x = 5\\sin(x + \\alpha)$', why: '$R = \\sqrt{9 + 16}$' },
              { math: 'maximum $5$, minimum $-5$', why: '', answer: true },
            ],
          },
          {
            title: 'a difference',
            badge: 'R sin(x − α)',
            lines: [
              { math: '$\\sqrt{3}\\sin x - \\cos x = 2\\sin(x - \\frac{\\pi}{6})$', why: '$\\cos\\alpha = \\frac{\\sqrt{3}}{2}$, $\\sin\\alpha = \\frac{1}{2}$' },
              { math: '$= \\sqrt{2} \\Rightarrow x - \\frac{\\pi}{6} = \\frac{\\pi}{4}, \\frac{3\\pi}{4} \\Rightarrow x = \\frac{5\\pi}{12}, \\frac{11\\pi}{12}$', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'shifted interval',
            lines: [
              { math: '$\\sin x + \\sqrt{3}\\cos x = 1 \\Rightarrow 2\\sin(x + \\frac{\\pi}{3}) = 1$', why: '' },
              { math: '$x = \\frac{\\pi}{2}, \\frac{11\\pi}{6}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Add a sine wave of height $1$ and a cosine wave of height $\\sqrt{3}$, a quarter-period apart: the sum is one wave of height $2$, shifted by $\\frac{\\pi}{3}$. $R$ is that height and $\\alpha$ that shift; they are the length and angle of the vector $(a, b)$.',
        },
        pitfalls: [
          {
            title: 'α from the wrong ratio',
            wrong: '$\\tan\\alpha = \\frac{a}{b}$',
            right: '$\\tan\\alpha = \\frac{b}{a}$, and check the quadrant with the signs of $a$ and $b$',
          },
          {
            title: 'Forgetting R in the equation',
            wrong: '$\\sin(x + \\frac{\\pi}{3}) = 1$',
            right: 'divide by $R = 2$: $= \\frac{1}{2}$',
          },
          {
            title: 'Interval not shifted',
            wrong: 'solving $x + \\frac{\\pi}{3}$ on $[0, 2\\pi)$ and missing $\\frac{13\\pi}{6}$',
            right: '$x + \\frac{\\pi}{3}$ runs over $[\\frac{\\pi}{3}, \\frac{7\\pi}{3})$',
          },
        ],
        related: ['equations-with-identities', 'multiple-angle-equations', 'which-trig-equation-method'],
        builtOn: [
          { label: 'Sine sum and difference', url: ruleUrl('trig.sine-sum-difference') },
          { label: 'Sum identities (lesson)', url: ruleUrl('lesson.trig.identities.sum') },
        ],
      },
    },
    {
      id: 'which-trig-equation-method',
      slug: 'which-trig-equation-method',
      name: 'Which method should I use for a trig equation?',
      description: 'A decision tree from the shape of the equation to the method that solves it.',
      uses: 'leads to 6 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Method to Solve a Trig Equation? Decision Tree | Learn Math Class',
        description: 'Choose a method for a trig equation from its shape: a sin x + b cos x, mixed functions or angles, a square, a product, a multiple angle, or a plain sin x = a.',
        keywords: ['how to solve any trig equation', 'trig equation strategy', 'trig equation decision tree', 'which method trig equation'],
      },
      page: {
        h1: 'Which Method Should I Use for a Trig Equation?',
        lead:
          'The goal is always the same: one trig function of one angle equal to a number. The shape of the equation tells you which move gets you there.',
        tree: {
          rootId: 'aux',
          svgW: 1050,
          nodes: {
            aux: {
              type: 'q',
              text: 'Is it a sin x + b cos x = c?',
              children: [
                { label: 'yes', to: 'auxLeaf' },
                { label: 'no', to: 'mixed' },
              ],
            },
            mixed: {
              type: 'q',
              text: 'Different functions or angles?',
              children: [
                { label: 'yes', to: 'identities' },
                { label: 'no', to: 'shape' },
              ],
            },
            shape: {
              type: 'q',
              text: 'What shape is it?',
              children: [
                { label: 'f(x) = a', to: 'basic' },
                { label: 'squared', to: 'quadratic' },
                { label: 'product = 0', to: 'factoring' },
                { label: 'f(kx) = a', to: 'multiple' },
              ],
            },
            auxLeaf: { type: 'leaf', to: 'auxiliary-angle', short: 'Auxiliary angle' },
            identities: { type: 'leaf', to: 'equations-with-identities', short: 'Use an identity' },
            basic: { type: 'leaf', to: 'basic-trig-equations', short: 'Basic equation' },
            quadratic: { type: 'leaf', to: 'quadratic-trig-equations', short: 'Quadratic in sin or cos' },
            factoring: { type: 'leaf', to: 'factoring-trig-equations', short: 'Factor' },
            multiple: { type: 'leaf', to: 'multiple-angle-equations', short: 'Multiple angle' },
          },
          branches: [
            {
              condition: 'A sine and a cosine of the same angle are added: $a\\sin x + b\\cos x = c$.',
              answer: `Combine them with the [auxiliary angle method](!${HUB}/auxiliary-angle) into $R\\sin(x + \\alpha)$.`,
            },
            {
              condition: 'Different trig functions, or different angles such as $x$ and $2x$, appear.',
              answer: `Rewrite with an identity to get one function of one angle: [equations with identities](!${HUB}/equations-with-identities).`,
            },
            {
              condition: 'One function of $x$ alone equals a number.',
              answer: `Solve the [basic equation](!${HUB}/basic-trig-equations), then give the [general solution](!${HUB}/general-solution) or the [solutions in the interval](!${HUB}/equations-on-interval).`,
            },
            {
              condition: 'One function appears squared and to the first power.',
              answer: `Substitute $u$ and solve the [quadratic](!${HUB}/quadratic-trig-equations).`,
            },
            {
              condition: 'A trig factor appears in every term.',
              answer: `[Factor it out](!${HUB}/factoring-trig-equations); never divide by it.`,
            },
            {
              condition: 'One function of $kx$ equals a number.',
              answer: `Solve for $kx$ over the stretched interval: [multiple angles](!${HUB}/multiple-angle-equations).`,
            },
          ],
        },
        related: ['basic-trig-equations', 'equations-with-identities', 'quadratic-trig-equations'],
        builtOn: [
          { label: 'Approach by equation form (lesson)', url: ruleUrl('lesson.trig.equations.summary') },
          { label: 'Trigonometric equations (lesson)', url: ruleUrl('lesson.trig.equations') },
        ],
      },
    },
  ],

  categories: [
    { id: 'composite', label: 'Solving methods', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a method', blurb: 'Strategy' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'composite', label: 'Composite' },
        { value: 'strategy', label: 'Strategy' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other trigonometry methods',
    links: [
      { url: '/trigonometry/methods', label: 'Trigonometry methods' },
      { url: '/trigonometry/identities/methods', label: 'Identities' },
    ],
  },
};

export default trigEquationsMethods;
