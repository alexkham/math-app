// inequalities.methods.js
// Single data source for /algebra/inequalities/methods (hub) and
// /algebra/inequalities/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/algebra/inequalities/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/algebra/inequalities/methods';

const inequalitiesMethods = {
  hubPath: HUB,
  hubLabel: 'inequality methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'interval-notation',
      name: 'How to write a solution in interval notation',
      subtitle: 'Interval notation',
      glyph: '[a, b)',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'An inequality solution to be written as a set: $x > 2$, $-1 \\le x < 4$, $x \\le 0$ or $x > 3$.',
      formula: 'a < x \\le b \\;\\leftrightarrow\\; (a, b] \\qquad x > a \\;\\leftrightarrow\\; (a, \\infty) \\qquad \\text{"or"} \\;\\leftrightarrow\\; \\cup',
      fields: {
        steps: [
          '1. Square bracket for $\\le$ or $\\ge$ (endpoint included), round bracket for $<$, $>$ and for $\\pm\\infty$.',
          '2. Write the smaller endpoint first; join separate pieces with $\\cup$.',
        ],
        worked_example: '$x \\le 0$ or $x > 3$: $\\;(-\\infty, 0] \\cup (3, \\infty)$',
      },
      links: [
        { url: ruleUrl('lesson.inequalities.interval-notation'), label: 'Interval notation (lesson)' },
        { url: ruleUrl('lesson.inequalities.number-line'), label: 'Number line representation' },
      ],
    },
    {
      id: 'flip-sign-rule',
      name: 'How to multiply or divide an inequality by a negative number',
      subtitle: 'Flip the inequality sign',
      glyph: '<⇄>',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The unknown has a negative coefficient that must be divided away: $-2x \\le 6$, $-\\frac{x}{3} > 1$.',
      formula: 'a < b,\\ c < 0 \\;\\Rightarrow\\; ac > bc \\quad \\text{and} \\quad \\frac{a}{c} > \\frac{b}{c}',
      fields: {
        steps: [
          '1. Adding or subtracting anything never changes the sign.',
          '2. Multiplying or dividing by a positive number keeps it; by a negative number, reverse it.',
        ],
        worked_example: '$-2x \\le 6 \\;\\Rightarrow\\; x \\ge -3$',
      },
      links: [{ url: ruleUrl('lesson.inequalities.properties'), label: 'Properties of inequalities' }],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'linear-inequalities',
      slug: 'linear-inequalities',
      name: 'How to solve a linear inequality',
      description: 'Solve like an equation, but flip the sign when multiplying or dividing by a negative.',
      uses: ['properties of inequalities', 'interval notation'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Linear Inequalities (Step by Step) | Learn Math Class',
        description: 'Solve linear inequalities: simplify, collect x on one side, divide by the coefficient and flip the sign if it is negative, write the interval. Examples.',
        keywords: ['how to solve linear inequalities', 'flip the inequality sign', 'linear inequality examples', 'inequalities with fractions'],
      },
      page: {
        h1: 'How to Solve a Linear Inequality',
        lead:
          'Every step of solving a linear equation works for an inequality, with one exception: multiplying or dividing by a negative number reverses the direction of the sign. The answer is a range of values, written in interval notation.',
        recognize:
          'A first-degree expression compared with $<$, $\\le$, $>$ or $\\ge$: $3x + 4 > 10$, $5 - 2x \\le 11$, $\\frac{x}{2} - 1 < \\frac{x}{3} + 1$. Test: the highest power of $x$ is $1$, and there is exactly one inequality sign.',
        recognizeNote: `The rules are the ${link('lesson.inequalities.properties', 'properties of inequalities')}; the lesson works through ${link('lesson.inequalities.linear.solving', 'solving')} and ${link('lesson.inequalities.linear.graphing', 'graphing')} linear inequalities.`,
        steps: {
          traceLabel: 'On $5 - 2x \\le 11$',
          items: [
            {
              title: 'Simplify each side.',
              body: 'Expand brackets, clear fractions by multiplying by the (positive) LCD, combine like terms.',
              state: 'already simple',
            },
            {
              title: 'Collect the x-terms on one side and the numbers on the other.',
              body: 'Adding and subtracting never changes the sign.',
              state: '$-2x \\le 6$',
            },
            {
              title: 'Divide by the coefficient; flip the sign if it is negative.',
              body: `The ${link('lesson.inequalities.properties', 'reversal rule')}.`,
              state: '$x \\ge -3$',
              atomic: 'flip-sign-rule',
            },
            {
              title: 'Write the answer in interval notation and test one point.',
              body: 'A value inside the interval must satisfy the original inequality.',
              state: '$[-3, \\infty)$; test $x = 0$: $5 \\le 11$ ✓',
              atomic: 'interval-notation',
            },
          ],
        },
        examples: [
          {
            title: 'positive coefficient',
            badge: 'no flip',
            lines: [
              { math: '$3x + 4 > 10 \\;\\Rightarrow\\; 3x > 6$', why: 'subtract $4$' },
              { math: '$x > 2$: $\\;(2, \\infty)$', why: '', answer: true },
            ],
          },
          {
            title: 'fractions',
            badge: 'multiply by the LCD',
            lines: [
              { math: '$\\frac{x}{2} - 1 < \\frac{x}{3} + 1 \\;\\Rightarrow\\; 3x - 6 < 2x + 6$', why: 'multiply by $6 > 0$' },
              { math: '$x < 12$: $\\;(-\\infty, 12)$', why: '', answer: true },
            ],
          },
          {
            title: 'the special cases',
            badge: 'all or nothing',
            lines: [
              { math: '$2(x + 1) > 2x + 1 \\;\\Rightarrow\\; 2 > 1$', why: 'always true' },
              { math: '$2x + 3 < 2x - 1 \\;\\Rightarrow\\; 3 < -1$', why: 'never true' },
              { math: 'first: all real numbers; second: no solution', why: '', answer: true },
            ],
            note: `Both are explained under ${link('lesson.inequalities.linear.special-cases', 'special cases')} in the lesson.`,
          },
        ],
        examplesAfter: 'Step through your own inequality in the [linear inequality calculator](!/algebra/calculators/inequalities/linear).',
        visual: {
          caption:
            '$2 < 5$, but multiply both by $-1$ and you get $-2$ and $-5$, where $-2$ is now the larger one. Multiplying by a negative mirrors the number line, and a mirror swaps left and right, so the sign must swap too.',
        },
        pitfalls: [
          {
            title: 'Forgetting to flip',
            wrong: '$-2x \\le 6 \\Rightarrow x \\le -3$',
            right: '$x \\ge -3$',
          },
          {
            title: 'Flipping when moving a term',
            wrong: '$x - 4 < 2 \\Rightarrow x > 6$',
            right: 'adding $4$ keeps the sign: $x < 6$',
          },
          {
            title: 'Wrong bracket',
            wrong: '$x \\ge -3$ written as $(-3, \\infty)$',
            right: 'the endpoint is included: $[-3, \\infty)$',
          },
        ],
        related: ['compound-inequalities', 'absolute-value-inequalities', 'which-inequality-method'],
        builtOn: [
          { label: 'Properties of inequalities', url: ruleUrl('lesson.inequalities.properties') },
          { label: 'Interval notation', url: ruleUrl('lesson.inequalities.interval-notation') },
          { label: 'Solving linear inequalities (lesson)', url: ruleUrl('lesson.inequalities.linear.solving') },
        ],
      },
    },
    {
      id: 'compound-inequalities',
      slug: 'compound-inequalities',
      name: 'How to solve a compound inequality',
      description: '"And" keeps the overlap, "or" keeps both pieces; a three-part inequality is solved all at once.',
      uses: ['linear inequalities', 'intersection and union'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Compound Inequalities (And / Or) | Learn Math Class',
        description: 'Solve compound inequalities: solve each part, intersect for and, unite for or; solve a three-part inequality at once, flipping both signs for a negative.',
        keywords: ['compound inequalities', 'and or inequalities', 'three part inequality', 'double inequality', 'compound inequality examples'],
      },
      page: {
        h1: 'How to Solve a Compound Inequality',
        lead:
          'A compound inequality joins two conditions. With **and**, a solution must satisfy both, so you keep the overlap. With **or**, either is enough, so you keep everything. A three-part inequality like $-3 < 2x + 1 \\le 7$ is an "and" written in one line, solved by doing the same thing to all three parts.',
        recognize:
          'Two inequality signs in one line ($-3 < 2x + 1 \\le 7$), or two inequalities joined by **and** or **or** ($x - 1 < -3$ or $2x \\ge 8$).',
        recognizeNote: `The lesson covers ${link('lesson.inequalities.compound', 'compound inequalities')} in general and ${link('lesson.inequalities.linear.compound', 'compound linear inequalities')} in particular.`,
        steps: {
          traceLabel: 'On $1 \\le 3 - 2x < 9$',
          items: [
            {
              title: 'Decide: and, or, or three-part.',
              body: 'A three-part inequality means "and".',
              state: 'three-part: $1 \\le 3 - 2x$ and $3 - 2x < 9$',
            },
            {
              title: 'Isolate the unknown, doing the same to every part.',
              body: 'For a three-part inequality, subtract from all three parts at once.',
              state: '$-2 \\le -2x < 6$',
            },
            {
              title: 'Divide; with a negative, flip both signs.',
              body: 'Then rewrite with the smaller number on the left.',
              state: '$1 \\ge x > -3 \\;\\Rightarrow\\; -3 < x \\le 1$',
              atomic: 'flip-sign-rule',
            },
            {
              title: 'Combine: intersection for and, union for or.',
              body: 'An "and" with no overlap has no solution; an "or" may cover every number.',
              state: '$(-3, 1]$',
              atomic: 'interval-notation',
            },
          ],
        },
        examples: [
          {
            title: 'a three-part inequality',
            badge: 'and',
            lines: [
              { math: '$-3 < 2x + 1 \\le 7 \\;\\Rightarrow\\; -4 < 2x \\le 6$', why: 'subtract $1$ throughout' },
              { math: '$-2 < x \\le 3$: $\\;(-2, 3]$', why: '', answer: true },
            ],
          },
          {
            title: 'or',
            badge: 'union',
            lines: [
              { math: '$x - 1 < -3$ or $2x \\ge 8 \\;\\Rightarrow\\; x < -2$ or $x \\ge 4$', why: 'solve each' },
              { math: '$(-\\infty, -2) \\cup [4, \\infty)$', why: '', answer: true },
            ],
          },
          {
            title: 'and with no overlap',
            badge: 'empty',
            lines: [
              { math: '$x > 5$ and $x < 2$', why: 'no number is both' },
              { math: 'no solution', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Shade each condition on its own number line, then stack the lines. "And" keeps only what is shaded on both, "or" keeps what is shaded on either. A three-part inequality is the picture of a single bounded segment.',
        },
        pitfalls: [
          {
            title: 'Flipping only one sign',
            wrong: '$-2 \\le -2x < 6 \\Rightarrow 1 \\ge x < -3$',
            right: 'flip both: $1 \\ge x > -3$, i.e. $-3 < x \\le 1$',
          },
          {
            title: 'Union for "and"',
            wrong: '$x > -2$ and $x \\le 3$ written as all real numbers',
            right: 'and means overlap: $(-2, 3]$',
          },
          {
            title: 'Writing an "or" as a three-part inequality',
            wrong: '$4 \\le x < -2$',
            right: 'two pieces need a union: $(-\\infty, -2) \\cup [4, \\infty)$',
          },
        ],
        related: ['linear-inequalities', 'absolute-value-inequalities', 'which-inequality-method'],
        builtOn: [
          { label: 'Compound inequalities (lesson)', url: ruleUrl('lesson.inequalities.compound') },
          { label: 'Properties of inequalities', url: ruleUrl('lesson.inequalities.properties') },
          { label: 'Interval notation', url: ruleUrl('lesson.inequalities.interval-notation') },
        ],
      },
    },
    {
      id: 'quadratic-inequalities',
      slug: 'quadratic-inequalities',
      name: 'How to solve a quadratic inequality',
      description: 'Find the roots, then read the sign from the parabola or a sign chart.',
      uses: ['roots of a quadratic', 'sign chart', 'discriminant'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Quadratic Inequalities (Sign Chart and Parabola) | Learn Math Class',
        description: 'Solve quadratic inequalities: zero on one side, find the roots, read the sign from the parabola or a sign chart, write the intervals. No-root case too.',
        keywords: ['how to solve quadratic inequalities', 'quadratic inequality sign chart', 'quadratic inequality examples', 'x^2 - x - 6 < 0'],
      },
      page: {
        h1: 'How to Solve a Quadratic Inequality',
        lead:
          'Compare the quadratic with zero, find where it equals zero, and use the shape of the parabola: one that opens upward is negative between its roots and positive outside them.',
        recognize:
          'An $x^2$ term with an inequality sign: $x^2 - x - 6 < 0$, $x^2 \\ge 4x$, $-x^2 + 4 > 0$, $x^2 + 2x + 5 > 0$. Test: highest power $2$, one inequality sign.',
        recognizeNote: `The lesson splits the cases by the ${link('lesson.inequalities.quadratic.discriminant', 'discriminant')} and reads the answer from the ${link('lesson.inequalities.quadratic.parabola', 'parabola')} or a ${link('lesson.inequalities.quadratic.sign-chart', 'sign chart')}.`,
        methods: [
          {
            name: 'Read it off the parabola',
            tag: 'usual choice',
            preferred: true,
            formula: 'a > 0:\\quad ax^2 + bx + c < 0 \\iff r_1 < x < r_2',
            body: 'Upward parabola: negative between the roots, positive outside. For $a < 0$, multiply by $-1$ first (and flip the sign).',
          },
          {
            name: 'Sign chart',
            tag: 'works for any factored form',
            formula: '(x - r_1)(x - r_2):\\ \\text{test one point per interval}',
            body: `The same method as for [polynomial inequalities](!${HUB}/polynomial-inequalities).`,
          },
        ],
        steps: {
          traceLabel: 'On $x^2 - x - 6 < 0$',
          items: [
            {
              title: 'Move everything to one side.',
              body: 'Zero on the right; make the leading coefficient positive (multiply by $-1$ and flip if needed).',
              state: 'already $< 0$ with $a = 1 > 0$',
            },
            {
              title: 'Find the roots.',
              body: `[Factor](!/algebra/equations/methods/quadratic-factoring) or use the [formula](!/algebra/equations/methods/quadratic-formula). No real roots: the quadratic never changes sign.`,
              state: '$(x - 3)(x + 2) = 0$: $x = -2, 3$',
            },
            {
              title: 'Decide where the quadratic has the required sign.',
              body: 'Upward parabola: below the axis between the roots.',
              state: 'negative on $-2 < x < 3$',
            },
            {
              title: 'Write the intervals; include roots only for ≤ or ≥.',
              body: 'Test one point to be sure.',
              state: '$(-2, 3)$; test $x = 0$: $-6 < 0$ ✓',
              atomic: 'interval-notation',
            },
          ],
        },
        examples: [
          {
            title: 'outside the roots',
            badge: '≥ 0',
            lines: [
              { math: '$x^2 \\ge 4x \\;\\Rightarrow\\; x(x - 4) \\ge 0$', why: 'do not divide by $x$' },
              { math: '$(-\\infty, 0] \\cup [4, \\infty)$', why: 'upward parabola is $\\ge 0$ outside', answer: true },
            ],
          },
          {
            title: 'negative leading coefficient',
            badge: 'flip first',
            lines: [
              { math: '$-x^2 + 4 > 0 \\;\\Rightarrow\\; x^2 - 4 < 0$', why: 'multiply by $-1$, flip' },
              { math: '$(-2, 2)$', why: '', answer: true },
            ],
          },
          {
            title: 'no real roots',
            badge: 'Δ < 0',
            lines: [
              { math: '$x^2 + 2x + 5$: $\\Delta = -16 < 0$, always positive', why: 'parabola above the axis' },
              { math: '$> 0$: all real numbers; $\\;< 0$: no solution', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check any answer in the [quadratic inequality calculator](!/algebra/calculators/inequalities/quadratic).',
        visual: {
          component: 'InequalityVisualizer',
          props: { syncUrl: false },
          caption:
            'The graph of $y = x^2 - x - 6$ dips below the $x$-axis exactly between its roots $-2$ and $3$. "$< 0$" asks where the graph is below the axis, "$> 0$" where it is above; the roots are the borders.',
        },
        pitfalls: [
          {
            title: 'Treating it like an equation',
            wrong: '$x^2 - x - 6 < 0 \\Rightarrow x < 3$ or $x < -2$',
            right: 'the sign changes at each root; read the intervals off the parabola',
          },
          {
            title: 'Dividing by x',
            wrong: '$x^2 \\ge 4x \\Rightarrow x \\ge 4$',
            right: '$x$ can be negative or zero; factor instead',
          },
          {
            title: 'Square root of both sides',
            wrong: '$x^2 < 4 \\Rightarrow x < 2$',
            right: '$x^2 < 4 \\iff -2 < x < 2$',
          },
        ],
        related: ['polynomial-inequalities', 'rational-inequalities', 'which-inequality-method'],
        builtOn: [
          { label: 'Connection to the parabola (lesson)', url: ruleUrl('lesson.inequalities.quadratic.parabola') },
          { label: 'Sign chart method (lesson)', url: ruleUrl('lesson.inequalities.quadratic.sign-chart') },
          { label: 'Discriminant', url: ruleUrl('equations.discriminant') },
        ],
      },
    },
    {
      id: 'polynomial-inequalities',
      slug: 'polynomial-inequalities',
      name: 'How to solve a polynomial inequality',
      description: 'Factor, mark the roots, use a sign chart; even multiplicities do not change the sign.',
      uses: ['factoring', 'sign chart', 'multiplicity'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Polynomial Inequalities with a Sign Chart | Learn Math Class',
        description: 'Solve polynomial inequalities: factor, mark the roots, fill a sign chart (an even multiplicity keeps the sign), read off the intervals. Three examples.',
        keywords: ['polynomial inequalities', 'sign chart method', 'cubic inequality', 'multiplicity sign change', 'polynomial inequality examples'],
      },
      page: {
        h1: 'How to Solve a Polynomial Inequality',
        lead:
          'A polynomial can only change sign at its roots. Factor it, mark the roots on a number line, find the sign on each interval, and keep the intervals with the sign you need.',
        recognize:
          'A polynomial of degree $3$ or more compared with zero (or with another polynomial): $(x + 2)(x - 1)(x - 4) \\ge 0$, $x^3 - 4x > 0$, $(x - 1)^2(x + 3) < 0$.',
        recognizeNote: `The lesson develops the ${link('lesson.inequalities.polynomial.sign-chart', 'sign chart method')} and the role of ${link('lesson.inequalities.polynomial.multiplicity', 'root multiplicity')}.`,
        steps: {
          traceLabel: 'On $(x + 2)(x - 1)(x - 4) \\ge 0$',
          items: [
            {
              title: 'Get zero on one side and factor completely.',
              body: `See [how to find all roots](!/algebra/polynomials/methods/find-all-roots) for hard cases.`,
              state: 'already factored',
            },
            {
              title: 'Mark the roots on a number line.',
              body: 'They split the line into intervals on which the sign is constant.',
              state: 'roots $-2,\\ 1,\\ 4$',
            },
            {
              title: 'Fill in the sign on each interval.',
              body: 'Start at the far right: the sign of the leading coefficient. Moving left, the sign flips at a root of odd multiplicity and stays at a root of even multiplicity.',
              state: '$-\\ \\big|_{-2}\\ +\\ \\big|_{1}\\ -\\ \\big|_{4}\\ +$',
            },
            {
              title: 'Keep the intervals with the right sign.',
              body: 'Include the roots for $\\le$ or $\\ge$.',
              state: '$[-2, 1] \\cup [4, \\infty)$',
              atomic: 'interval-notation',
            },
          ],
        },
        examples: [
          {
            title: 'factor first',
            badge: 'three roots',
            lines: [
              { math: '$x^3 - 4x > 0 \\;\\Rightarrow\\; x(x - 2)(x + 2) > 0$', why: 'roots $-2, 0, 2$' },
              { math: '$(-2, 0) \\cup (2, \\infty)$', why: 'signs $-, +, -, +$ from the left', answer: true },
            ],
          },
          {
            title: 'a double root',
            badge: 'even multiplicity',
            lines: [
              { math: '$(x - 1)^2(x + 3) < 0$', why: 'root $1$ is double: no sign change there' },
              { math: 'signs: $-$ left of $-3$, $+$ between, $+$ right of $1$', why: '' },
              { math: '$(-\\infty, -3)$', why: '$x = 1$ gives $0$, not $< 0$', answer: true },
            ],
          },
          {
            title: 'the original trace',
            badge: '≥ 0',
            lines: [
              { math: '$(x + 2)(x - 1)(x - 4) \\ge 0$', why: 'leading coefficient $+$, degree $3$' },
              { math: '$[-2, 1] \\cup [4, \\infty)$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          component: 'InequalityVisualizer',
          props: { syncUrl: false },
          caption:
            'The graph crosses the axis at a single root and bounces off it at a double root. Reading a sign chart is reading the graph from right to left: above, below, above, flipping only where it actually crosses.',
        },
        pitfalls: [
          {
            title: 'Flipping at every root',
            wrong: 'sign change at the double root $x = 1$',
            right: 'even multiplicity: the sign stays the same',
          },
          {
            title: 'Dividing by a factor',
            wrong: '$x^3 > 4x \\Rightarrow x^2 > 4$',
            right: '$x$ may be negative; bring everything to one side and factor',
          },
          {
            title: 'Wrong starting sign',
            wrong: 'assuming $+$ on the far left',
            right: 'the far right has the sign of the leading coefficient; work leftward from there',
          },
        ],
        related: ['quadratic-inequalities', 'rational-inequalities', 'which-inequality-method'],
        builtOn: [
          { label: 'Sign chart method (lesson)', url: ruleUrl('lesson.inequalities.polynomial.sign-chart') },
          { label: 'Root multiplicity (lesson)', url: ruleUrl('lesson.inequalities.polynomial.multiplicity') },
          { label: 'Sign analysis', url: ruleUrl('lesson.inequalities.sign-analysis') },
        ],
      },
    },
    {
      id: 'rational-inequalities',
      slug: 'rational-inequalities',
      name: 'How to solve a rational inequality',
      description: 'Compare with zero, combine into one fraction, sign-chart the zeros of top and bottom.',
      uses: ['sign chart', 'critical points', 'domain'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Rational Inequalities (Never Cross-Multiply) | Learn Math Class',
        description: 'Solve rational inequalities: zero on one side, one fraction, mark the zeros of top and bottom, sign chart, always exclude denominator zeros. Examples.',
        keywords: ['rational inequalities', 'how to solve rational inequalities', 'rational inequality sign chart', 'critical points rational inequality'],
      },
      page: {
        h1: 'How to Solve a Rational Inequality',
        lead:
          'Get zero on one side and a single fraction on the other. The fraction can only change sign where its numerator or its denominator is zero, so those critical points split the number line for a sign chart. Denominator zeros are never part of the answer.',
        recognize:
          'An inequality with $x$ in a denominator: $\\frac{x - 3}{x + 1} \\le 0$, $\\frac{x + 5}{x - 1} > 2$, $\\frac{x^2 - 4}{x} \\ge 0$.',
        recognizeNote: `The lesson defines the ${link('lesson.inequalities.rational.critical-points', 'critical points')}, the ${link('lesson.inequalities.rational.endpoints', 'endpoint rules')} and explains why ${link('lesson.inequalities.rational.cross-multiplication', 'cross-multiplication fails')}.`,
        steps: {
          traceLabel: 'On $\\frac{x + 5}{x - 1} > 2$',
          items: [
            {
              title: 'Move everything to one side.',
              body: `Zero on the right (${link('lesson.inequalities.rational.standard-form', 'standard form')}). Never multiply by the denominator: its sign is unknown.`,
              state: '$\\frac{x + 5}{x - 1} - 2 > 0$',
            },
            {
              title: 'Combine into a single fraction and factor.',
              body: 'Common denominator, then simplify the numerator.',
              state: '$\\frac{x + 5 - 2(x - 1)}{x - 1} = \\frac{7 - x}{x - 1} > 0$',
            },
            {
              title: 'Mark the critical points.',
              body: 'Zeros of the numerator and of the denominator.',
              state: '$x = 7$ (numerator), $x = 1$ (denominator)',
            },
            {
              title: 'Sign chart.',
              body: 'Test one point in each interval.',
              state: '$x = 0$: $\\frac{7}{-1} < 0$; $\\;x = 2$: $\\frac{5}{1} > 0$; $\\;x = 8$: $\\frac{-1}{7} < 0$',
            },
            {
              title: 'Write the answer; exclude denominator zeros always.',
              body: 'Numerator zeros are included for $\\le$ and $\\ge$ only.',
              state: '$(1, 7)$',
              atomic: 'interval-notation',
            },
          ],
        },
        examples: [
          {
            title: 'already in standard form',
            badge: '≤ 0',
            lines: [
              { math: '$\\frac{x - 3}{x + 1} \\le 0$: critical points $-1$, $3$', why: 'signs $+, -, +$' },
              { math: '$(-1, 3]$', why: '$-1$ excluded (denominator), $3$ included', answer: true },
            ],
          },
          {
            title: 'compare with a number',
            badge: 'subtract first',
            lines: [
              { math: '$\\frac{x + 5}{x - 1} > 2 \\;\\Rightarrow\\; \\frac{7 - x}{x - 1} > 0$', why: '' },
              { math: '$(1, 7)$', why: '', answer: true },
            ],
          },
          {
            title: 'three critical points',
            badge: 'factor the top',
            lines: [
              { math: '$\\frac{x^2 - 4}{x} = \\frac{(x - 2)(x + 2)}{x} \\ge 0$', why: 'critical $-2, 0, 2$' },
              { math: 'signs from the left: $-, +, -, +$', why: '' },
              { math: '$[-2, 0) \\cup [2, \\infty)$', why: '$0$ excluded', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your answer in the [rational inequality calculator](!/algebra/calculators/inequalities/rational).',
        visual: {
          caption:
            'At a denominator zero the graph of the fraction shoots off to infinity, and on the other side it may come back with the opposite sign. That vertical asymptote is a border just like a root, but the function never takes a value there, so it can never be included.',
        },
        pitfalls: [
          {
            title: 'Cross-multiplying',
            wrong: '$\\frac{x + 5}{x - 1} > 2 \\Rightarrow x + 5 > 2(x - 1)$',
            right: 'that assumes $x - 1 > 0$; subtract and combine instead',
          },
          {
            title: 'Including a denominator zero',
            wrong: '$[-1, 3]$ for $\\frac{x - 3}{x + 1} \\le 0$',
            right: '$x = -1$ makes the fraction undefined: $(-1, 3]$',
          },
          {
            title: 'Forgetting the denominator as a critical point',
            wrong: 'marking only $x = 7$',
            right: 'the sign can also change at $x = 1$',
          },
        ],
        related: ['polynomial-inequalities', 'quadratic-inequalities', 'which-inequality-method'],
        builtOn: [
          { label: 'Critical points (lesson)', url: ruleUrl('lesson.inequalities.rational.critical-points') },
          { label: 'Sign chart for rational inequalities', url: ruleUrl('lesson.inequalities.rational.sign-chart') },
          { label: 'Endpoint inclusion rules', url: ruleUrl('lesson.inequalities.rational.endpoints') },
        ],
      },
    },
    {
      id: 'absolute-value-inequalities',
      slug: 'absolute-value-inequalities',
      name: 'How to solve an absolute value inequality',
      description: 'Less than: one three-part inequality. Greater than: two pieces joined by or.',
      uses: ['absolute value', 'compound inequalities'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Absolute Value Inequalities (Less Than and Greater Than) | Learn Math Class',
        description: 'Solve absolute value inequalities: isolate the bars, turn |u| < k into −k < u < k and |u| > k into two pieces, solve, write intervals. Examples.',
        keywords: ['absolute value inequalities', 'absolute value less than', 'absolute value greater than', 'absolute value inequality examples'],
      },
      page: {
        h1: 'How to Solve an Absolute Value Inequality',
        lead:
          '$|u|$ is the distance of $u$ from zero. "Less than $k$" means within $k$ of zero, a single interval; "greater than $k$" means farther than $k$, two pieces pointing outward.',
        recognize:
          'Bars with an inequality sign: $|2x - 1| < 5$, $|x + 3| \\ge 2$, $2|x - 4| + 1 \\le 7$, $|x| > -1$.',
        recognizeNote: `The two forms are the ${link('equations.absolute-value-inequalities', 'absolute value inequalities')}; the lesson covers the ${link('lesson.inequalities.absolute-value.less-than', 'less-than')} and ${link('lesson.inequalities.absolute-value.greater-than', 'greater-than')} forms.`,
        methods: [
          {
            name: 'Less than: three-part inequality',
            tag: '|u| < k',
            preferred: true,
            formula: '|u| < k \\iff -k < u < k \\qquad (k > 0)',
            body: `Solve as a [compound inequality](!${HUB}/compound-inequalities) in one line.`,
          },
          {
            name: 'Greater than: two pieces',
            tag: '|u| > k',
            formula: '|u| > k \\iff u < -k \\ \\text{ or } \\ u > k',
            body: 'Solve each piece; the answer is the union.',
          },
        ],
        steps: {
          traceLabel: 'On $2|x - 4| + 1 \\le 7$',
          items: [
            {
              title: 'Isolate the absolute value.',
              body: 'Undo everything outside the bars.',
              state: '$|x - 4| \\le 3$',
            },
            {
              title: 'Check the sign of k.',
              body: '$|u| < $ negative: no solution. $|u| > $ negative: every $x$ in the domain.',
              state: '$3 > 0$ ✓',
            },
            {
              title: 'Rewrite without bars.',
              body: 'Less than: $-k \\le u \\le k$. Greater than: $u \\le -k$ or $u \\ge k$.',
              state: '$-3 \\le x - 4 \\le 3$',
            },
            {
              title: 'Solve and write intervals.',
              body: 'Add $4$ to all three parts.',
              state: '$1 \\le x \\le 7$: $\\;[1, 7]$',
              atomic: 'interval-notation',
            },
          ],
        },
        examples: [
          {
            title: 'less than',
            badge: 'one interval',
            lines: [
              { math: '$|2x - 1| < 5 \\;\\Rightarrow\\; -5 < 2x - 1 < 5$', why: '' },
              { math: '$-2 < x < 3$: $\\;(-2, 3)$', why: '', answer: true },
            ],
          },
          {
            title: 'greater than',
            badge: 'two pieces',
            lines: [
              { math: '$|x + 3| \\ge 2 \\;\\Rightarrow\\; x + 3 \\le -2$ or $x + 3 \\ge 2$', why: '' },
              { math: '$(-\\infty, -5] \\cup [-1, \\infty)$', why: '', answer: true },
            ],
          },
          {
            title: 'negative k',
            badge: 'all or nothing',
            lines: [
              { math: '$|x| < -1$: never; $\\;|x| > -1$: always', why: 'an absolute value is at least $0$' },
              { math: 'no solution; all real numbers', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Try more in the [absolute value inequality calculator](!/algebra/calculators/inequalities/absolute-value).',
        visual: {
          caption:
            'On the number line, $|x - 4| \\le 3$ is everything within $3$ of $4$: a segment from $1$ to $7$. $|x - 4| > 3$ is the rest of the line, two rays pointing away from $4$. "Less" stays together, "greater" breaks apart.',
        },
        pitfalls: [
          {
            title: 'Using "and" for greater-than',
            wrong: '$|x + 3| \\ge 2 \\Rightarrow -2 \\le x + 3 \\le 2$',
            right: 'that is the less-than form; greater-than gives two pieces',
          },
          {
            title: 'Not isolating first',
            wrong: '$2|x - 4| + 1 \\le 7 \\Rightarrow -7 \\le 2(x - 4) + 1 \\le 7$',
            right: 'isolate: $|x - 4| \\le 3$',
          },
          {
            title: 'Dropping the bars',
            wrong: '$|2x - 1| < 5 \\Rightarrow 2x - 1 < 5$ only',
            right: 'also $2x - 1 > -5$',
          },
        ],
        related: ['compound-inequalities', 'linear-inequalities', 'which-inequality-method'],
        builtOn: [
          { label: 'Absolute value inequalities', url: ruleUrl('equations.absolute-value-inequalities') },
          { label: 'Less-than form (lesson)', url: ruleUrl('lesson.inequalities.absolute-value.less-than') },
          { label: 'Greater-than form (lesson)', url: ruleUrl('lesson.inequalities.absolute-value.greater-than') },
        ],
      },
    },

    // ═══ III. Strategy ══════════════════════════════════════════════════
    {
      id: 'which-inequality-method',
      slug: 'which-inequality-method',
      name: 'Which method should I use for an inequality?',
      description: 'A decision tree from the shape of the inequality to the method that solves it.',
      uses: 'leads to 6 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Method to Solve an Inequality? Decision Tree | Learn Math Class',
        description: 'Pick the method for an inequality from its shape: absolute value bars, x in a denominator, or the highest power. Linear, compound, quadratic, rational.',
        keywords: ['which inequality method', 'how to solve any inequality', 'inequality decision tree', 'types of inequalities'],
      },
      page: {
        h1: 'Which Method Should I Use for an Inequality?',
        lead:
          'Three questions decide it: are there absolute value bars, is $x$ in a denominator, and what is the highest power of $x$? Every method below ends the same way, with intervals on a number line.',
        tree: {
          rootId: 'bars',
          svgW: 1000,
          nodes: {
            bars: {
              type: 'q',
              text: 'Are there absolute value bars?',
              children: [
                { label: 'yes', to: 'abs' },
                { label: 'no', to: 'fraction' },
              ],
            },
            fraction: {
              type: 'q',
              text: 'Is x in a denominator?',
              children: [
                { label: 'yes', to: 'rational' },
                { label: 'no', to: 'degree' },
              ],
            },
            degree: {
              type: 'q',
              text: 'Highest power of x?',
              children: [
                { label: '1, one sign', to: 'linear' },
                { label: '1, two signs or and/or', to: 'compound' },
                { label: '2', to: 'quadratic' },
                { label: '3 or more', to: 'polynomial' },
              ],
            },
            abs: { type: 'leaf', to: 'absolute-value-inequalities', short: 'Absolute value' },
            rational: { type: 'leaf', to: 'rational-inequalities', short: 'Rational' },
            linear: { type: 'leaf', to: 'linear-inequalities', short: 'Linear' },
            compound: { type: 'leaf', to: 'compound-inequalities', short: 'Compound' },
            quadratic: { type: 'leaf', to: 'quadratic-inequalities', short: 'Quadratic' },
            polynomial: { type: 'leaf', to: 'polynomial-inequalities', short: 'Polynomial' },
          },
          branches: [
            {
              condition: 'The unknown sits inside absolute value bars.',
              answer: `Use the method for [absolute value inequalities](!${HUB}/absolute-value-inequalities): less than gives one interval, greater than two pieces.`,
            },
            {
              condition: '$x$ appears in a denominator.',
              answer: `Use the method for [rational inequalities](!${HUB}/rational-inequalities): zero on one side, one fraction, sign chart.`,
            },
            {
              condition: 'The highest power is $1$ and there is one inequality sign.',
              answer: `Solve a [linear inequality](!${HUB}/linear-inequalities); flip the sign when dividing by a negative (${link('lesson.inequalities.properties', 'properties')}).`,
            },
            {
              condition: 'The highest power is $1$ and there are two signs, or the words and / or.',
              answer: `Solve a [compound inequality](!${HUB}/compound-inequalities): intersection for and, union for or.`,
            },
            {
              condition: 'The highest power is $2$.',
              answer: `Solve a [quadratic inequality](!${HUB}/quadratic-inequalities): find the roots, read the sign from the parabola.`,
            },
            {
              condition: 'The highest power is $3$ or more.',
              answer: `Solve a [polynomial inequality](!${HUB}/polynomial-inequalities): factor, sign chart, mind the multiplicities.`,
            },
          ],
        },
        related: ['linear-inequalities', 'quadratic-inequalities', 'rational-inequalities'],
        builtOn: [
          { label: 'Summary of inequality types (lesson)', url: ruleUrl('lesson.inequalities') },
          { label: 'Sign analysis', url: ruleUrl('lesson.inequalities.sign-analysis') },
          { label: 'Interval notation', url: ruleUrl('lesson.inequalities.interval-notation') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Solving methods', blurb: 'Composite · each opens its own page' },
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
    title: 'Other algebra methods',
    links: [
      { url: '/algebra/methods', label: 'Algebra methods' },
      { url: '/algebra/equations/methods', label: 'Equations' },
      { url: '/algebra/polynomials/methods', label: 'Polynomials' },
    ],
  },
};

export default inequalitiesMethods;
