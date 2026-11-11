// equations.methods.js
// Single data source for /algebra/equations/methods (hub) and
// /algebra/equations/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/algebra/equations/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/algebra/equations/methods';

const equationsMethods = {
  hubPath: HUB,
  hubLabel: 'equation methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'addition-property',
      name: 'How to move a term to the other side',
      subtitle: 'Addition property of equality',
      glyph: '±',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A number or term is added to or subtracted from the unknown: $x - 7 = 12$, $x + 3 = -5$, $2x + 5 = x + 9$.',
      formula: 'a = b \\;\\Rightarrow\\; a + c = b + c',
      fields: {
        steps: ['1. Pick the term to remove from one side.', '2. Add its opposite to **both** sides.'],
        worked_example: '$x - 7 = 12 \\;\\Rightarrow\\; x - 7 + 7 = 12 + 7 \\;\\Rightarrow\\; x = 19$',
      },
      links: [
        { url: ruleUrl('lesson.equations.linear.properties-of-equality'), label: 'Properties of equality' },
        { url: ruleUrl('lesson.equations.equivalent'), label: 'Equivalent equations' },
      ],
    },
    {
      id: 'multiplication-property',
      name: 'How to remove a coefficient',
      subtitle: 'Multiplication property of equality',
      glyph: '×÷',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The unknown is multiplied or divided by a number: $-4x = 20$, $\\frac{x}{3} = 5$, $\\frac{2}{3}x = 8$.',
      formula: 'a = b \\;\\Rightarrow\\; ac = bc \\quad \\text{and} \\quad \\frac{a}{c} = \\frac{b}{c}\\ (c \\neq 0)',
      fields: {
        steps: ['1. Divide both sides by the coefficient, or multiply both sides by its reciprocal.', '2. Never divide by an expression that could be $0$.'],
        worked_example: '$\\tfrac{2}{3}x = 8 \\;\\Rightarrow\\; x = 8\\cdot\\tfrac{3}{2} = 12$',
      },
      links: [{ url: ruleUrl('lesson.equations.linear.properties-of-equality'), label: 'Properties of equality' }],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'linear-equations',
      slug: 'linear-equations',
      name: 'How to solve a linear equation',
      description: 'Simplify each side, collect the unknown on one side, then isolate it.',
      uses: ['distributive law', 'properties of equality'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve a Linear Equation (Step by Step) | Learn Math Class',
        description: 'Solve linear equations: expand brackets, combine like terms, collect x on one side, divide by the coefficient, check. Includes no-solution and every-x cases.',
        keywords: ['how to solve linear equations', 'solve equations with variables on both sides', 'multi-step equations', 'linear equation examples'],
      },
      page: {
        h1: 'How to Solve a Linear Equation',
        lead:
          'A linear equation has the unknown only to the first power. Clean up each side, gather the unknown on one side and the numbers on the other, then divide by the coefficient. Every move is done to both sides, so the equation stays balanced.',
        recognize:
          'The unknown appears only as $x$, never as $x^2$, $\\frac{1}{x}$ or $\\sqrt{x}$, possibly inside brackets and on both sides: $5x - 3 = 2x + 9$, $3(x - 2) + 5 = 2x + 7$, $4(2x + 1) = 3(x - 2) + 20$. Test: after expanding, is the highest power of $x$ equal to $1$?',
        recognizeNote: `The moves are the ${link('lesson.equations.linear.properties-of-equality', 'properties of equality')}; the lesson works through ${link('lesson.equations.linear.multi-step', 'multi-step equations')} and ${link('lesson.equations.linear.parentheses', 'equations with parentheses')}.`,
        steps: {
          traceLabel: 'On $3(x - 2) + 5 = 2x + 7$',
          items: [
            {
              title: 'Simplify each side separately.',
              body: 'Expand brackets with the distributive law and combine like terms. Do not move anything across the equals sign yet.',
              state: '$3x - 6 + 5 = 2x + 7 \\;\\Rightarrow\\; 3x - 1 = 2x + 7$',
            },
            {
              title: 'Collect the unknown on one side.',
              body: 'Subtract the smaller $x$-term from both sides, so the coefficient stays positive.',
              state: '$x - 1 = 7$',
              atomic: 'addition-property',
            },
            {
              title: 'Collect the numbers on the other side.',
              body: 'Add or subtract the constant from both sides.',
              state: '$x = 8$',
              atomic: 'addition-property',
            },
            {
              title: 'Divide by the coefficient, then check.',
              body: 'Here the coefficient is already $1$. Substitute the answer into the **original** equation.',
              state: '$3(6) + 5 = 23$ and $2(8) + 7 = 23$ ✓',
              atomic: 'multiplication-property',
            },
          ],
        },
        examples: [
          {
            title: 'variables on both sides',
            badge: 'basic',
            lines: [
              { math: '$5x - 3 = 2x + 9 \\;\\Rightarrow\\; 3x - 3 = 9$', why: 'subtract $2x$' },
              { math: '$3x = 12 \\;\\Rightarrow\\; x = 4$', why: 'add $3$, divide by $3$', answer: true },
            ],
          },
          {
            title: 'brackets on both sides',
            badge: 'expand first',
            lines: [
              { math: '$4(2x + 1) = 3(x - 2) + 20 \\;\\Rightarrow\\; 8x + 4 = 3x + 14$', why: 'expand, combine' },
              { math: '$5x = 10 \\;\\Rightarrow\\; x = 2$', why: 'check: $20 = 20$', answer: true },
            ],
          },
          {
            title: 'the special cases',
            badge: 'no solution, every x',
            lines: [
              { math: '$2(x + 3) = 2x + 5 \\;\\Rightarrow\\; 6 = 5$', why: 'the $x$ terms cancel to a false statement' },
              { math: '$2(x + 3) = 2x + 6 \\;\\Rightarrow\\; 6 = 6$', why: 'they cancel to a true statement' },
              { math: 'first: no solution; second: every real $x$', why: '', answer: true },
            ],
            note: `Both cases are explained under ${link('lesson.equations.linear.special-cases', 'special cases')} in the linear equations lesson.`,
          },
        ],
        examplesAfter: 'Check any answer step by step in the [linear equation calculator](!/algebra/calculators/equations/linear).',
        visual: {
          caption:
            'Picture a balance with $3x - 1$ on one pan and $2x + 7$ on the other. Taking $2x$ off both pans, then adding $1$ to both, keeps the balance level at every step, until one pan holds a single $x$ and the other its value.',
        },
        pitfalls: [
          {
            title: 'Distributing to the first term only',
            wrong: '$3(x - 2) = 3x - 2$',
            right: '$3(x - 2) = 3x - 6$',
          },
          {
            title: 'Changing sign without moving across',
            wrong: '$3x - 1 = 2x + 7 \\Rightarrow 3x = 2x + 7 - 1$',
            right: 'adding $1$ to both sides gives $3x = 2x + 8$',
          },
          {
            title: 'A minus sign before a bracket',
            wrong: '$5 - (x - 3) = 5 - x - 3$',
            right: '$5 - (x - 3) = 5 - x + 3$',
          },
          {
            title: 'Reading 0 = 0 as x = 0',
            wrong: '"$6 = 6$, so $x = 0$"',
            right: 'a true statement with no $x$ means every $x$ is a solution',
          },
        ],
        related: ['linear-equations-with-fractions', 'literal-equations', 'systems-substitution'],
        builtOn: [
          { label: 'Properties of equality', url: ruleUrl('lesson.equations.linear.properties-of-equality') },
          { label: 'Equations with parentheses', url: ruleUrl('lesson.equations.linear.parentheses') },
          { label: 'Special cases', url: ruleUrl('lesson.equations.linear.special-cases') },
        ],
      },
    },
    {
      id: 'linear-equations-with-fractions',
      slug: 'linear-equations-with-fractions',
      name: 'How to solve a linear equation with fractions',
      description: 'Multiply every term by the least common denominator, then solve the whole-number equation.',
      uses: ['least common denominator', 'linear equations'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Linear Equations with Fractions and Decimals | Learn Math Class',
        description: 'Solve linear equations with fractions: multiply every term by the least common denominator, keep numerators in brackets, solve, check. Decimal version too.',
        keywords: ['linear equations with fractions', 'clear fractions in an equation', 'equations with decimals', 'least common denominator equation'],
      },
      page: {
        h1: 'How to Solve a Linear Equation with Fractions',
        lead:
          'Fractions are cleared in one move: multiply every term on both sides by the least common denominator. What is left is an ordinary linear equation with whole numbers. Decimals are cleared the same way with a power of $10$.',
        recognize:
          'A linear equation with numerical denominators or decimals: $\\frac{x}{3} + \\frac{x}{4} = 7$, $\\frac{2x - 1}{5} - \\frac{x + 2}{3} = 1$, $0.4x + 1.2 = 0.1x + 3$. The unknown is never in a denominator; if it is, see [rational equations](!/algebra/equations/methods/rational-equations).',
        recognizeNote: `The lesson covers ${link('lesson.equations.linear.fractions', 'equations with fractions')}; what remains is the method for [linear equations](!${HUB}/linear-equations).`,
        steps: {
          traceLabel: 'On $\\frac{2x - 1}{5} - \\frac{x + 2}{3} = 1$',
          items: [
            {
              title: 'Find the least common denominator.',
              body: 'The smallest number every denominator divides. For decimals, the power of $10$ that clears the longest decimal.',
              state: 'LCD $= 15$',
            },
            {
              title: 'Put every numerator in brackets.',
              body: 'A fraction bar groups its numerator; the brackets keep that grouping when the bar disappears.',
              state: '$\\frac{(2x - 1)}{5} - \\frac{(x + 2)}{3} = 1$',
            },
            {
              title: 'Multiply every term on both sides by the LCD.',
              body: 'Every term, including terms without a fraction. Each denominator cancels into the LCD.',
              state: '$3(2x - 1) - 5(x + 2) = 15$',
              atomic: 'multiplication-property',
            },
            {
              title: 'Solve the linear equation and check.',
              body: `Expand, collect, isolate ([linear equations](!${HUB}/linear-equations)). Check in the **original** equation.`,
              state: '$6x - 3 - 5x - 10 = 15 \\;\\Rightarrow\\; x = 28$; check: $11 - 10 = 1$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'two simple fractions',
            badge: 'basic',
            lines: [
              { math: '$\\frac{x}{3} + \\frac{x}{4} = 7 \\;\\Rightarrow\\; 4x + 3x = 84$', why: 'multiply by $12$' },
              { math: '$x = 12$', why: 'check: $4 + 3 = 7$', answer: true },
            ],
          },
          {
            title: 'binomial numerators',
            badge: 'brackets matter',
            lines: [
              { math: '$\\frac{2x - 1}{5} - \\frac{x + 2}{3} = 1 \\;\\Rightarrow\\; 3(2x - 1) - 5(x + 2) = 15$', why: 'LCD $15$' },
              { math: '$x - 13 = 15 \\;\\Rightarrow\\; x = 28$', why: '', answer: true },
            ],
          },
          {
            title: 'decimals',
            badge: 'multiply by 10',
            lines: [
              { math: '$0.4x + 1.2 = 0.1x + 3 \\;\\Rightarrow\\; 4x + 12 = x + 30$', why: 'multiply every term by $10$' },
              { math: '$3x = 18 \\;\\Rightarrow\\; x = 6$', why: '', answer: true },
            ],
            note: `Decimals are treated in ${link('lesson.equations.linear.fractions', 'the same lesson')}; the power of $10$ matches the most decimal places.`,
          },
        ],
        visual: {
          caption:
            'Multiplying both sides by $15$ rescales the whole balance: both pans become fifteen times heavier, so it stays level, and every fraction becomes a whole number of fifteenths.',
        },
        pitfalls: [
          {
            title: 'Skipping a term without a fraction',
            wrong: '$\\frac{x}{3} + 2 = 5 \\Rightarrow x + 2 = 15$',
            right: 'multiply every term: $x + 6 = 15$',
          },
          {
            title: 'Losing the bracket on a numerator',
            wrong: '$-\\frac{x + 2}{3}\\cdot 15 = -5x + 10$',
            right: '$-5(x + 2) = -5x - 10$',
          },
          {
            title: 'Multiplying only the fractions on one side',
            wrong: 'clearing the left side, leaving $1$ on the right',
            right: 'both sides: the $1$ becomes $15$',
          },
        ],
        related: ['linear-equations', 'rational-equations', 'literal-equations'],
        builtOn: [
          { label: 'Equations with fractions (lesson)', url: ruleUrl('lesson.equations.linear.fractions') },
          { label: 'Properties of equality', url: ruleUrl('lesson.equations.linear.properties-of-equality') },
        ],
      },
    },
    {
      id: 'literal-equations',
      slug: 'literal-equations',
      name: 'How to solve a literal equation for a variable',
      description: 'Rearrange a formula for one letter, treating every other letter as a number.',
      uses: ['properties of equality', 'factoring out a variable'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve a Literal Equation (Rearranging Formulas) | Learn Math Class',
        description: 'Solve a formula for one variable: treat the other letters as numbers, undo operations in reverse order, factor if the target appears twice. Examples.',
        keywords: ['literal equations', 'solve for a variable', 'rearranging formulas', 'solve a formula for a variable', 'literal equation examples'],
      },
      page: {
        h1: 'How to Solve a Literal Equation for a Variable',
        lead:
          'A literal equation is a formula with several letters. To solve for one of them, treat every other letter as if it were a known number and use exactly the same moves as for a linear equation.',
        recognize:
          '"Solve $P = 2l + 2w$ for $w$", "make $C$ the subject of $F = \\frac{9}{5}C + 32$", "solve $A = \\frac{1}{2}h(b_1 + b_2)$ for $h$". Test: more than one letter, and one of them is named as the target.',
        recognizeNote: `The lesson calls these ${link('lesson.equations.linear.literal', 'literal equations and formulas')}; the moves are the ${link('lesson.equations.linear.properties-of-equality', 'properties of equality')}.`,
        steps: {
          traceLabel: 'On $P = 2l + 2w$, solve for $w$',
          items: [
            {
              title: 'Circle the target letter.',
              body: 'Every other letter is now a constant.',
              state: 'target $w$; $P$ and $l$ are constants',
            },
            {
              title: 'Undo additions and subtractions around the target.',
              body: 'Move the other terms to the other side.',
              state: '$P - 2l = 2w$',
              atomic: 'addition-property',
            },
            {
              title: 'Undo the multiplication or division on the target.',
              body: 'Divide both sides by its coefficient, which may be a letter or an expression.',
              state: '$w = \\frac{P - 2l}{2}$',
              atomic: 'multiplication-property',
            },
            {
              title: 'If the target appears in two terms, factor it out first.',
              body: 'Collect both terms on one side, factor out the target, then divide by the bracket.',
              state: 'not needed here',
            },
          ],
        },
        examples: [
          {
            title: 'temperature conversion',
            badge: 'basic',
            lines: [
              { math: '$F = \\tfrac{9}{5}C + 32 \\;\\Rightarrow\\; F - 32 = \\tfrac{9}{5}C$', why: 'subtract $32$' },
              { math: '$C = \\tfrac{5}{9}(F - 32)$', why: 'multiply by $\\frac{5}{9}$', answer: true },
            ],
          },
          {
            title: 'area of a trapezoid',
            badge: 'divide by a bracket',
            lines: [
              { math: '$A = \\tfrac{1}{2}h(b_1 + b_2) \\;\\Rightarrow\\; 2A = h(b_1 + b_2)$', why: 'multiply by $2$' },
              { math: '$h = \\frac{2A}{b_1 + b_2}$', why: '', answer: true },
            ],
          },
          {
            title: 'the target in two terms',
            badge: 'factor it out',
            lines: [
              { math: '$ax + b = cx + d \\;\\Rightarrow\\; ax - cx = d - b$', why: 'collect the $x$ terms' },
              { math: '$x(a - c) = d - b \\;\\Rightarrow\\; x = \\frac{d - b}{a - c}$ for $a \\neq c$', why: 'factor, divide', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Replace each other letter with a number, say $P = 20$, $l = 6$, and solve: $20 - 12 = 2w$, $w = 4$. The literal answer $\\frac{P - 2l}{2}$ is that same computation with the numbers left as letters, and plugging $20$ and $6$ into it gives $4$ again.',
        },
        pitfalls: [
          {
            title: 'Dividing only one term',
            wrong: '$w = \\frac{P}{2} - 2l$',
            right: '$w = \\frac{P - 2l}{2} = \\frac{P}{2} - l$',
          },
          {
            title: 'Target left on both sides',
            wrong: '$x = \\frac{d - b + cx}{a}$',
            right: 'collect and factor: $x = \\frac{d - b}{a - c}$',
          },
          {
            title: 'Dividing by an expression that can be zero',
            wrong: '$x = \\frac{d - b}{a - c}$ with no condition',
            right: 'state $a \\neq c$; when $a = c$ the equation has no or infinitely many solutions',
          },
        ],
        related: ['linear-equations', 'linear-equations-with-fractions', 'systems-substitution'],
        builtOn: [
          { label: 'Literal equations (lesson)', url: ruleUrl('lesson.equations.linear.literal') },
          { label: 'Properties of equality', url: ruleUrl('lesson.equations.linear.properties-of-equality') },
        ],
      },
    },
    {
      id: 'quadratic-factoring',
      slug: 'quadratic-factoring',
      name: 'How to solve a quadratic equation by factoring',
      description: 'Set it to zero, factor, set each factor to zero.',
      uses: ['factoring trinomials', 'zero product property'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Quadratic Equations by Factoring | Learn Math Class',
        description: 'Solve quadratics by factoring: move every term to one side, factor the trinomial (ac method when a ≠ 1), set each factor equal to zero. Examples.',
        keywords: ['solve quadratic by factoring', 'zero product property', 'factoring quadratic equations', 'ac method', 'quadratic equation examples'],
      },
      page: {
        h1: 'How to Solve a Quadratic Equation by Factoring',
        lead:
          'If a product is zero, one of its factors is zero. So bring the quadratic to the form "something $= 0$", factor the something, and solve each factor separately.',
        recognize:
          `A quadratic with small integer coefficients that factors over the integers: $x^2 - 5x + 6 = 0$, $x^2 + x = 12$, $2x^2 + 7x + 3 = 0$, $x^2 = 9x$. Test: can you find two integers whose product is $ac$ and whose sum is $b$ within a minute? If not, use the [quadratic formula](!${HUB}/quadratic-formula).`,
        recognizeNote: `The lesson section is ${link('lesson.equations.quadratic.factoring', 'solving by factoring')}; the factoring itself is in the ${link('lesson.polynomials.factoring', 'factoring polynomials lesson')}.`,
        steps: {
          traceLabel: 'On $x^2 + x = 12$',
          items: [
            {
              title: 'Move every term to one side.',
              body: 'The other side must be exactly $0$. Write the quadratic in standard form $ax^2 + bx + c = 0$.',
              state: '$x^2 + x - 12 = 0$',
              atomic: 'addition-property',
            },
            {
              title: 'Factor the quadratic.',
              body: `For $a = 1$: two numbers with product $c$ and sum $b$ (${link('lesson.polynomials.factoring.trinomials-simple', 'simple case')}). For $a \\neq 1$: the ac method (${link('lesson.polynomials.factoring.trinomials-general', 'general case')}).`,
              state: '$(x + 4)(x - 3) = 0$',
            },
            {
              title: 'Set each factor equal to zero.',
              body: 'The zero product property.',
              state: '$x + 4 = 0$ or $x - 3 = 0$',
            },
            {
              title: 'Solve each linear equation and check.',
              body: 'Two roots, or one repeated root if both factors are the same.',
              state: '$x = -4$ or $x = 3$; check: $16 - 4 = 12$, $9 + 3 = 12$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'leading coefficient not 1',
            badge: 'ac method',
            lines: [
              { math: '$2x^2 + 7x + 3 = 0$: $ac = 6 = 6\\cdot 1$, $6 + 1 = 7$', why: 'split the middle term' },
              { math: '$2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$', why: 'grouping' },
              { math: '$x = -\\tfrac{1}{2}$ or $x = -3$', why: '', answer: true },
            ],
          },
          {
            title: 'no constant term',
            badge: 'factor out x',
            lines: [
              { math: '$x^2 = 9x \\;\\Rightarrow\\; x^2 - 9x = 0 \\;\\Rightarrow\\; x(x - 9) = 0$', why: 'do not divide by $x$' },
              { math: '$x = 0$ or $x = 9$', why: '', answer: true },
            ],
          },
          {
            title: 'difference of squares',
            badge: 'no middle term',
            lines: [
              { math: '$x^2 - 16 = 0 \\;\\Rightarrow\\; (x - 4)(x + 4) = 0$', why: '' },
              { math: '$x = \\pm 4$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your factoring in the [factoring calculator](!/algebra/calculators/factoring).',
        visual: {
          caption:
            'The roots of $x^2 + x - 12$ are where the parabola $y = x^2 + x - 12$ crosses the $x$-axis: at $-4$ and $3$. Each factor $(x + 4)$, $(x - 3)$ is zero at exactly one of those crossings.',
        },
        pitfalls: [
          {
            title: 'Factoring without a zero on one side',
            wrong: '$x(x + 1) = 12 \\Rightarrow x = 12$ or $x + 1 = 12$',
            right: 'the zero product property needs $0$: rewrite as $x^2 + x - 12 = 0$',
          },
          {
            title: 'Dividing by x',
            wrong: '$x^2 = 9x \\Rightarrow x = 9$',
            right: 'that loses $x = 0$; factor instead',
          },
          {
            title: 'Sign of the root',
            wrong: '$(x + 4) = 0 \\Rightarrow x = 4$',
            right: '$x = -4$',
          },
        ],
        related: ['quadratic-formula', 'completing-the-square', 'which-quadratic-method'],
        builtOn: [
          { label: 'Solving by factoring (lesson)', url: ruleUrl('lesson.equations.quadratic.factoring') },
          { label: 'Factoring trinomials', url: ruleUrl('lesson.polynomials.factoring.trinomials-general') },
          { label: 'Difference of squares', url: ruleUrl('identities.difference-of-squares') },
        ],
      },
    },
    {
      id: 'quadratic-formula',
      slug: 'quadratic-formula',
      name: 'How to use the quadratic formula',
      description: 'Read off a, b, c and substitute; works for every quadratic, factorable or not.',
      uses: ['quadratic formula', 'discriminant'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use the Quadratic Formula (Step by Step) | Learn Math Class',
        description: 'Use the quadratic formula: write the equation in standard form, read a, b and c, compute the discriminant, then x = (−b ± √Δ)/2a. Examples and mistakes.',
        keywords: ['how to use the quadratic formula', 'quadratic formula examples', 'solve quadratic equations', 'quadratic formula steps'],
      },
      page: {
        h1: 'How to Use the Quadratic Formula',
        lead:
          'The quadratic formula solves every equation $ax^2 + bx + c = 0$. Put the equation in standard form, read off $a$, $b$ and $c$, compute the discriminant, and substitute. It is slower than factoring but never fails.',
        recognize:
          `Any quadratic equation, especially one that does not factor nicely: $2x^2 - 4x - 3 = 0$, $x^2 + 2x + 5 = 0$, $3x^2 = 2x + 1$. Test: the highest power is $2$. If it factors in under a minute, [factoring](!${HUB}/quadratic-factoring) is faster.`,
        recognizeNote: `The formula is the ${link('equations.quadratic-formula', 'quadratic formula')}, derived in the lesson by ${link('lesson.equations.quadratic.completing-square', 'completing the square')}.`,
        steps: {
          traceLabel: 'On $2x^2 - 4x - 3 = 0$',
          items: [
            {
              title: 'Write the equation in standard form.',
              body: 'Everything on one side, in the order $ax^2 + bx + c = 0$.',
              state: 'already in standard form',
              atomic: 'addition-property',
            },
            {
              title: 'Read off a, b and c with their signs.',
              body: 'A missing term has coefficient $0$.',
              state: '$a = 2$, $b = -4$, $c = -3$',
            },
            {
              title: 'Compute the discriminant.',
              body: `$\\Delta = b^2 - 4ac$ (${link('equations.discriminant', 'discriminant')}). Positive: two real roots; zero: one; negative: none real.`,
              state: '$\\Delta = 16 + 24 = 40$',
            },
            {
              title: 'Substitute into the formula and simplify.',
              body: `$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$. Simplify the root, then cancel a common factor from the whole numerator.`,
              state: '$x = \\frac{4 \\pm \\sqrt{40}}{4} = \\frac{4 \\pm 2\\sqrt{10}}{4} = \\frac{2 \\pm \\sqrt{10}}{2} \\approx 2.58, -0.58$',
            },
          ],
        },
        examples: [
          {
            title: 'two rational roots',
            badge: 'perfect-square discriminant',
            lines: [
              { math: '$x^2 + 6x + 5 = 0$: $\\Delta = 36 - 20 = 16$', why: '' },
              { math: '$x = \\frac{-6 \\pm 4}{2} = -1$ or $-5$', why: '', answer: true },
            ],
          },
          {
            title: 'not in standard form',
            badge: 'rearrange first',
            lines: [
              { math: '$3x^2 = 2x + 1 \\;\\Rightarrow\\; 3x^2 - 2x - 1 = 0$', why: '$a = 3$, $b = -2$, $c = -1$' },
              { math: '$\\Delta = 4 + 12 = 16$, $x = \\frac{2 \\pm 4}{6} = 1$ or $-\\tfrac{1}{3}$', why: '', answer: true },
            ],
          },
          {
            title: 'negative discriminant',
            badge: 'no real roots',
            lines: [
              { math: '$x^2 + 2x + 5 = 0$: $\\Delta = 4 - 20 = -16 < 0$', why: '' },
              { math: 'no real solutions; complex roots $x = -1 \\pm 2i$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'The [quadratic equation calculator](!/algebra/calculators/equations/quadratic) shows each step for your own equation.',
        visual: {
          component: 'EquationVisualizer',
          props: { initialType: 'quadratic' },
          caption:
            'The two roots sit symmetrically around the axis of the parabola, at $x = -\\frac{b}{2a}$. The formula reads exactly that way: start at the axis, $-\\frac{b}{2a}$, and step $\\frac{\\sqrt{\\Delta}}{2a}$ to each side.',
        },
        pitfalls: [
          {
            title: 'Losing the sign of b',
            wrong: '$-b = -4$ when $b = -4$',
            right: '$-b = 4$',
          },
          {
            title: 'Squaring a negative b wrongly',
            wrong: '$b^2 = -16$ for $b = -4$',
            right: '$(-4)^2 = 16$',
          },
          {
            title: 'Dividing only part of the numerator',
            wrong: '$x = -b \\pm \\frac{\\sqrt{\\Delta}}{2a}$',
            right: 'the whole numerator is over $2a$',
          },
          {
            title: 'Cancelling into the root only',
            wrong: '$\\frac{4 \\pm 2\\sqrt{10}}{4} = 4 \\pm \\frac{\\sqrt{10}}{2}$',
            right: 'divide every term: $1 \\pm \\frac{\\sqrt{10}}{2}$',
          },
        ],
        related: ['discriminant', 'completing-the-square', 'which-quadratic-method'],
        builtOn: [
          { label: 'Quadratic formula', url: ruleUrl('equations.quadratic-formula') },
          { label: 'Discriminant', url: ruleUrl('equations.discriminant') },
          { label: 'The quadratic formula (lesson)', url: ruleUrl('lesson.equations.quadratic.formula') },
        ],
      },
    },
    {
      id: 'completing-the-square',
      slug: 'completing-the-square',
      name: 'How to complete the square',
      description: 'Turn $x^2 + bx$ into a perfect square to solve a quadratic or find its vertex.',
      uses: ['perfect square trinomials', 'square root property'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Complete the Square (Solve Quadratics and Find the Vertex) | Learn Math Class',
        description: 'Complete the square: divide by a, move c, add (b/2)² to both sides, write the perfect square, take square roots. Also gives vertex form. Examples and mistakes.',
        keywords: ['completing the square', 'how to complete the square', 'solve by completing the square', 'vertex form', 'completing the square examples'],
      },
      page: {
        h1: 'How to Complete the Square',
        lead:
          'Add the one number that turns $x^2 + bx$ into a perfect square: half of $b$, squared. Then the equation reads $(x + \\frac{b}{2})^2 = k$, and a square root finishes it. The same move rewrites a parabola in vertex form.',
        recognize:
          'A quadratic that you are told to solve by completing the square, one with $a = 1$ and an even $b$ ($x^2 + 6x + 5 = 0$), a request for the **vertex form** $a(x - h)^2 + k$, or the equation of a circle to tidy up. Test: you need a perfect square, not just the roots.',
        recognizeNote: `The lesson section is ${link('lesson.equations.quadratic.completing-square', 'solving by completing the square')}; the target shape is a ${link('lesson.polynomials.factoring.perfect-square', 'perfect square trinomial')}.`,
        steps: {
          traceLabel: 'On $x^2 + 6x + 5 = 0$',
          items: [
            {
              title: 'Make the leading coefficient 1.',
              body: 'Divide every term by $a$ if $a \\neq 1$.',
              state: '$a = 1$ already',
              atomic: 'multiplication-property',
            },
            {
              title: 'Move the constant to the other side.',
              body: 'Leave only $x^2 + bx$ on the left.',
              state: '$x^2 + 6x = -5$',
              atomic: 'addition-property',
            },
            {
              title: 'Add (b/2)² to both sides.',
              body: `Half of $b$, squared (${link('equations.completing-the-square', 'completing the square')}). Both sides, or the equation changes.`,
              state: '$x^2 + 6x + 9 = -5 + 9$',
            },
            {
              title: 'Write the left side as a square.',
              body: '$x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2$.',
              state: '$(x + 3)^2 = 4$',
            },
            {
              title: 'Take square roots of both sides, with ±.',
              body: `${link('equations.square-root-property', 'Square root property')}; a negative right side means no real roots.`,
              state: '$x + 3 = \\pm 2 \\;\\Rightarrow\\; x = -1$ or $x = -5$',
            },
          ],
        },
        examples: [
          {
            title: 'odd b',
            badge: 'fractions',
            lines: [
              { math: '$x^2 + 3x - 1 = 0 \\;\\Rightarrow\\; x^2 + 3x + \\tfrac{9}{4} = 1 + \\tfrac{9}{4}$', why: '$\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$' },
              { math: '$\\left(x + \\tfrac{3}{2}\\right)^2 = \\tfrac{13}{4} \\;\\Rightarrow\\; x = \\frac{-3 \\pm \\sqrt{13}}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'leading coefficient 2',
            badge: 'divide first',
            lines: [
              { math: '$2x^2 - 8x + 3 = 0 \\;\\Rightarrow\\; x^2 - 4x = -\\tfrac{3}{2}$', why: 'divide by $2$, move the constant' },
              { math: '$(x - 2)^2 = 4 - \\tfrac{3}{2} = \\tfrac{5}{2}$', why: 'add $4$' },
              { math: '$x = 2 \\pm \\sqrt{\\tfrac{5}{2}} = 2 \\pm \\tfrac{\\sqrt{10}}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'vertex form',
            badge: 'no equation to solve',
            lines: [
              { math: '$y = x^2 + 4x + 1 = (x^2 + 4x + 4) - 4 + 1$', why: 'add and subtract $4$ on the same side' },
              { math: '$y = (x + 2)^2 - 3$, vertex $(-2, -3)$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          component: 'CompletingTheSquare',
          caption:
            '$x^2 + 6x$ is an $x$-by-$x$ square plus two $x$-by-$3$ strips laid along two sides. One $3$-by-$3$ corner is missing; adding $9$ fills it, and the whole shape becomes a square of side $x + 3$.',
        },
        pitfalls: [
          {
            title: 'Adding to one side only',
            wrong: '$x^2 + 6x + 9 = -5$',
            right: 'add $9$ to both sides: $= 4$',
          },
          {
            title: 'Adding b² instead of (b/2)²',
            wrong: '$x^2 + 6x + 36$',
            right: '$\\left(\\frac{6}{2}\\right)^2 = 9$',
          },
          {
            title: 'Completing before dividing by a',
            wrong: '$2x^2 - 8x$: add $16$',
            right: 'divide by $2$ first: $x^2 - 4x$, add $4$',
          },
          {
            title: 'Forgetting ±',
            wrong: '$(x + 3)^2 = 4 \\Rightarrow x = -1$',
            right: '$x + 3 = \\pm 2$: also $x = -5$',
          },
        ],
        related: ['quadratic-formula', 'quadratic-factoring', 'which-quadratic-method'],
        builtOn: [
          { label: 'Completing the square', url: ruleUrl('equations.completing-the-square') },
          { label: 'Square root property', url: ruleUrl('equations.square-root-property') },
          { label: 'Square of a sum', url: ruleUrl('identities.square-of-a-sum') },
        ],
      },
    },
    {
      id: 'discriminant',
      slug: 'discriminant',
      name: 'How to use the discriminant',
      description: 'Compute $b^2 - 4ac$ to count and classify the roots without solving.',
      uses: ['discriminant', 'quadratic formula'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use the Discriminant (Number and Type of Roots) | Learn Math Class',
        description: 'Use the discriminant b² − 4ac to tell how many real roots a quadratic has and whether they are rational, without solving, and to find k for a repeated root.',
        keywords: ['discriminant', 'how to use the discriminant', 'number of real roots', 'nature of roots', 'find k for equal roots'],
      },
      page: {
        h1: 'How to Use the Discriminant',
        lead:
          'The number under the square root in the quadratic formula, $\\Delta = b^2 - 4ac$, decides everything about the roots before you compute them: positive gives two real roots, zero gives one repeated root, negative gives none.',
        recognize:
          '"How many real solutions?", "describe the nature of the roots", "for which $k$ does the equation have equal roots / two real roots / no real roots", "does the parabola cross the $x$-axis?". Test: the question is about the roots, not for them.',
        recognizeNote: `The ${link('equations.discriminant', 'discriminant')} is explained in ${link('lesson.equations.quadratic.discriminant', 'the quadratic equations lesson')}.`,
        steps: {
          traceLabel: 'On $4x^2 - 12x + 9 = 0$',
          items: [
            {
              title: 'Write the equation in standard form and read a, b, c.',
              body: 'Signs included.',
              state: '$a = 4$, $b = -12$, $c = 9$',
              atomic: 'addition-property',
            },
            {
              title: 'Compute Δ = b² − 4ac.',
              body: 'Square $b$ including its sign; $b^2$ is never negative.',
              state: '$\\Delta = 144 - 144 = 0$',
            },
            {
              title: 'Read off the number of real roots.',
              body: '$\\Delta > 0$: two; $\\Delta = 0$: one repeated; $\\Delta < 0$: none (two complex).',
              state: 'one repeated root',
            },
            {
              title: 'For integer a, b, c: check whether Δ is a perfect square.',
              body: 'A perfect square means rational roots, so the quadratic factors over the integers.',
              state: 'the root is $x = -\\frac{b}{2a} = \\frac{3}{2}$; indeed $(2x - 3)^2 = 0$',
            },
          ],
        },
        examples: [
          {
            title: 'two rational roots',
            badge: 'Δ a perfect square',
            lines: [
              { math: '$x^2 - 3x - 4$: $\\Delta = 9 + 16 = 25$', why: '$25 = 5^2$' },
              { math: 'two rational roots (it factors: $(x - 4)(x + 1)$)', why: '', answer: true },
            ],
          },
          {
            title: 'no real roots',
            badge: 'Δ < 0',
            lines: [
              { math: '$x^2 + x + 1$: $\\Delta = 1 - 4 = -3$', why: '' },
              { math: 'no real roots; the parabola stays above the axis', why: '', answer: true },
            ],
          },
          {
            title: 'find k',
            badge: 'set Δ = 0',
            lines: [
              { math: '$x^2 + kx + 9 = 0$ has a repeated root: $k^2 - 36 = 0$', why: '' },
              { math: '$k = \\pm 6$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          component: 'EquationVisualizer',
          props: { initialType: 'quadratic' },
          caption:
            'Slide the parabola up and down: it crosses the $x$-axis twice ($\\Delta > 0$), touches it once at the vertex ($\\Delta = 0$), or floats free of it ($\\Delta < 0$). The discriminant measures which of the three you are in.',
        },
        pitfalls: [
          {
            title: 'Forgetting the minus sign of a negative b',
            wrong: '$b^2 = -144$ for $b = -12$',
            right: '$(-12)^2 = 144$',
          },
          {
            title: 'Reading Δ < 0 as "no solution at all"',
            wrong: '"$x^2 + x + 1 = 0$ is impossible"',
            right: 'no real solution; there are two complex ones',
          },
          {
            title: 'Using the discriminant before standard form',
            wrong: '$3x^2 = 2x + 1$: $a = 3$, $b = 2$, $c = 1$',
            right: 'rearrange: $3x^2 - 2x - 1 = 0$, so $b = -2$, $c = -1$',
          },
        ],
        related: ['quadratic-formula', 'quadratic-factoring', 'which-quadratic-method'],
        builtOn: [
          { label: 'Discriminant', url: ruleUrl('equations.discriminant') },
          { label: 'Quadratic formula', url: ruleUrl('equations.quadratic-formula') },
          { label: 'The discriminant (lesson)', url: ruleUrl('lesson.equations.quadratic.discriminant') },
        ],
      },
    },
    {
      id: 'polynomial-equations',
      slug: 'polynomial-equations',
      name: 'How to solve a polynomial equation',
      description: 'Factor out what you can, find a rational root, divide it out, repeat until quadratic.',
      uses: ['rational root theorem', 'synthetic division', 'factoring'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Polynomial Equations (Cubics and Higher) | Learn Math Class',
        description: 'Solve cubic and higher polynomial equations: factor out common terms, test rational roots, divide by synthetic division, finish with the quadratic. Examples.',
        keywords: ['how to solve polynomial equations', 'solve cubic equations', 'rational root theorem', 'synthetic division', 'quartic equations'],
      },
      page: {
        h1: 'How to Solve a Polynomial Equation',
        lead:
          'Reduce the degree one root at a time. Factor out anything common, find one root with the rational root theorem, divide the polynomial by the matching factor, and repeat until a quadratic is left.',
        recognize:
          'A polynomial equation of degree $3$ or more: $x^3 - 6x^2 + 11x - 6 = 0$, $x^3 - 4x = 0$, $x^4 - 5x^2 + 4 = 0$, $2x^3 + x^2 - 5x + 2 = 0$. Test: highest power at least $3$, and only whole-number powers of $x$.',
        recognizeNote: `The tools are in the polynomial equations lesson: the ${link('lesson.equations.polynomial.factor-remainder', 'factor and remainder theorems')} and the ${link('lesson.equations.polynomial.rational-root', 'rational root theorem')}.`,
        methods: [
          {
            name: 'Rational roots and division',
            tag: 'usual choice',
            preferred: true,
            formula: '\\frac{p}{q}: \\ p \\mid a_0,\\ q \\mid a_n',
            body: `The ${link('polynomials.rational-root-theorem', 'rational root theorem')} lists the candidates; each root $r$ gives a factor $(x - r)$ by the ${link('polynomials.factor-theorem', 'factor theorem')}.`,
          },
          {
            name: 'Substitution for even powers',
            tag: 'quadratic in disguise',
            formula: 'ax^4 + bx^2 + c = 0 \\;\\xrightarrow{u = x^2}\\; au^2 + bu + c = 0',
            body: `When only even powers appear, set $u = x^2$ and solve a quadratic (${link('lesson.equations.quadratic.reducible', 'reducible equations')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $x^3 - 6x^2 + 11x - 6 = 0$',
          items: [
            {
              title: 'Factor out a common factor if there is one.',
              body: 'A missing constant term means $x$ is a factor and $0$ is a root.',
              state: 'none here',
            },
            {
              title: 'List the rational root candidates.',
              body: `${link('polynomials.rational-root-theorem', 'Rational root theorem')}: factors of the constant over factors of the leading coefficient.`,
              state: '$\\pm 1, \\pm 2, \\pm 3, \\pm 6$',
            },
            {
              title: 'Test candidates until one gives 0.',
              body: 'Try the small ones first.',
              state: '$x = 1$: $1 - 6 + 11 - 6 = 0$ ✓',
            },
            {
              title: 'Divide by the factor (x − r).',
              body: `${link('polynomials.synthetic-division', 'Synthetic division')} with $r = 1$: coefficients $1, -6, 11, -6$ become $1, -5, 6$ with remainder $0$.`,
              state: '$(x - 1)(x^2 - 5x + 6) = 0$',
            },
            {
              title: 'Solve the quotient.',
              body: `A quadratic: [factor](!${HUB}/quadratic-factoring) or use the [formula](!${HUB}/quadratic-formula). If it is still cubic or higher, repeat from step 2.`,
              state: '$(x - 1)(x - 2)(x - 3) = 0$: $x = 1, 2, 3$',
            },
          ],
        },
        examples: [
          {
            title: 'no constant term',
            badge: 'factor out x',
            lines: [
              { math: '$x^3 - 4x = 0 \\;\\Rightarrow\\; x(x^2 - 4) = x(x - 2)(x + 2) = 0$', why: '' },
              { math: '$x = 0, \\pm 2$', why: '', answer: true },
            ],
          },
          {
            title: 'only even powers',
            badge: 'u = x²',
            lines: [
              { math: '$x^4 - 5x^2 + 4 = 0 \\;\\Rightarrow\\; u^2 - 5u + 4 = (u - 1)(u - 4) = 0$', why: '$u = x^2$' },
              { math: '$x^2 = 1$ or $x^2 = 4$: $x = \\pm 1, \\pm 2$', why: '', answer: true },
            ],
          },
          {
            title: 'leading coefficient not 1',
            badge: 'fractional candidates',
            lines: [
              { math: '$2x^3 + x^2 - 5x + 2 = 0$: candidates $\\pm 1, \\pm 2, \\pm\\tfrac{1}{2}$; $x = 1$ works', why: '$2 + 1 - 5 + 2 = 0$' },
              { math: '$(x - 1)(2x^2 + 3x - 2) = (x - 1)(2x - 1)(x + 2)$', why: 'synthetic division, then factor' },
              { math: '$x = 1, \\tfrac{1}{2}, -2$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'The [polynomial equation calculator](!/algebra/calculators/equations/polynomial) shows the division steps for your own equation.',
        visual: {
          caption:
            'Each root you find is a place where the graph crosses the $x$-axis, and dividing it out flattens the problem by one degree. A cubic crosses at most three times, which is why three roots end the search.',
        },
        pitfalls: [
          {
            title: 'Dividing by x and losing a root',
            wrong: '$x^3 = 4x \\Rightarrow x^2 = 4$',
            right: 'factor: $x(x^2 - 4) = 0$ also gives $x = 0$',
          },
          {
            title: 'Skipping a missing power in synthetic division',
            wrong: 'coefficients $1, -4$ for $x^3 - 4x$',
            right: 'write the zero: $1, 0, -4, 0$',
          },
          {
            title: 'Stopping at ±√ of u',
            wrong: '$x^4 - 5x^2 + 4 = 0 \\Rightarrow x = 1, 4$',
            right: 'those are values of $u = x^2$; take square roots',
          },
        ],
        related: ['quadratic-factoring', 'quadratic-formula', 'rational-equations'],
        builtOn: [
          { label: 'Rational root theorem', url: ruleUrl('polynomials.rational-root-theorem') },
          { label: 'Factor theorem', url: ruleUrl('polynomials.factor-theorem') },
          { label: 'Synthetic division', url: ruleUrl('polynomials.synthetic-division') },
        ],
      },
    },
    {
      id: 'rational-equations',
      slug: 'rational-equations',
      name: 'How to solve a rational equation',
      description: 'Note the excluded values, multiply by the LCD, solve, then reject excluded answers.',
      uses: ['LCD', 'factoring', 'domain'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Rational Equations (and Reject Extraneous Roots) | Learn Math Class',
        description: 'Solve rational equations: factor the denominators, list the excluded values, multiply by the LCD, solve, then reject any answer that makes a denominator zero.',
        keywords: ['how to solve rational equations', 'rational equations extraneous solutions', 'equations with variables in the denominator', 'clearing denominators'],
      },
      page: {
        h1: 'How to Solve a Rational Equation',
        lead:
          'A rational equation has the unknown in a denominator. Multiply every term by the least common denominator to clear the fractions, solve what is left, and throw away any answer that would make an original denominator zero.',
        recognize:
          'A fraction with $x$ in its denominator: $\\frac{2}{x} + \\frac{1}{3} = \\frac{5}{6}$, $\\frac{3}{x + 1} = \\frac{2}{x - 1}$, $\\frac{x}{x - 3} - \\frac{2}{x + 3} = \\frac{18}{x^2 - 9}$. Test: is there an $x$ below a fraction bar?',
        recognizeNote: `The lesson covers ${link('lesson.equations.rational.domain', 'domain restrictions')}, ${link('lesson.equations.rational.clearing', 'clearing denominators')} and ${link('lesson.equations.rational.extraneous', 'extraneous solutions')}.`,
        methods: [
          {
            name: 'Multiply by the LCD',
            tag: 'usual choice',
            preferred: true,
            formula: '\\frac{A}{D_1} + \\frac{B}{D_2} = \\frac{C}{D_3} \\;\\xrightarrow{\\times\\,\\mathrm{LCD}}\\; \\text{polynomial equation}',
            body: 'Works for any number of fractions. The LCD is built from the factored denominators.',
          },
          {
            name: 'Cross-multiply',
            tag: 'one fraction on each side',
            formula: '\\frac{a}{b} = \\frac{c}{d} \\;\\Rightarrow\\; ad = bc',
            body: `Only for a single fraction equal to a single fraction (${link('lesson.equations.rational.proportions', 'proportions')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $\\frac{x}{x - 3} - \\frac{2}{x + 3} = \\frac{18}{x^2 - 9}$',
          items: [
            {
              title: 'Factor every denominator.',
              body: 'Factoring reveals the LCD and the forbidden values.',
              state: '$x^2 - 9 = (x - 3)(x + 3)$',
            },
            {
              title: 'List the excluded values.',
              body: 'Every $x$ that makes some denominator zero. Write them down before solving.',
              state: '$x \\neq 3$, $x \\neq -3$',
            },
            {
              title: 'Multiply every term by the LCD.',
              body: 'Each denominator cancels; no fractions remain.',
              state: '$x(x + 3) - 2(x - 3) = 18$',
              atomic: 'multiplication-property',
            },
            {
              title: 'Solve the resulting equation.',
              body: `Often a [quadratic](!${HUB}/quadratic-factoring).`,
              state: '$x^2 + x - 12 = 0 \\;\\Rightarrow\\; (x + 4)(x - 3) = 0 \\;\\Rightarrow\\; x = -4, 3$',
            },
            {
              title: 'Reject the excluded values.',
              body: 'Compare with step 2. An excluded answer is extraneous: it solves the cleared equation but not the original.',
              state: '$x = 3$ rejected; solution $x = -4$ (check: $\\frac{4}{7} + 2 = \\frac{18}{7}$ ✓)',
            },
          ],
        },
        examples: [
          {
            title: 'monomial denominators',
            badge: 'basic',
            lines: [
              { math: '$\\frac{2}{x} + \\frac{1}{3} = \\frac{5}{6}$, $x \\neq 0$', why: 'LCD $6x$' },
              { math: '$12 + 2x = 5x \\;\\Rightarrow\\; x = 4$', why: 'check: $\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$', answer: true },
            ],
          },
          {
            title: 'a proportion',
            badge: 'cross-multiply',
            lines: [
              { math: '$\\frac{3}{x + 1} = \\frac{2}{x - 1} \\;\\Rightarrow\\; 3(x - 1) = 2(x + 1)$', why: '$x \\neq \\pm 1$' },
              { math: '$x = 5$', why: 'not excluded', answer: true },
            ],
          },
          {
            title: 'an extraneous root',
            badge: 'reject it',
            lines: [
              { math: '$\\frac{x}{x - 3} - \\frac{2}{x + 3} = \\frac{18}{x^2 - 9} \\;\\Rightarrow\\; x^2 + x - 12 = 0$', why: 'multiply by $(x - 3)(x + 3)$' },
              { math: '$x = -4$ (and $x = 3$ rejected)', why: '$x = 3$ makes a denominator zero', answer: true },
            ],
          },
        ],
        examplesAfter: 'Step through your own equation in the [rational equation calculator](!/algebra/calculators/equations/rational).',
        visual: {
          caption:
            'Multiplying by $(x - 3)(x + 3)$ is multiplying by something that is zero at $x = 3$. At that one point the cleared equation reads $0 = 0$, true for the wrong reason, which is how a root that the original equation forbids sneaks in.',
        },
        pitfalls: [
          {
            title: 'Keeping an excluded root',
            wrong: 'reporting $x = 3$ and $x = -4$',
            right: '$x = 3$ makes $\\frac{x}{x - 3}$ undefined; only $x = -4$',
          },
          {
            title: 'Cross-multiplying with several fractions',
            wrong: '$\\frac{1}{x} + \\frac{1}{2} = \\frac{3}{x}$: cross-multiplying pairs',
            right: 'cross-multiplication needs exactly one fraction per side; use the LCD',
          },
          {
            title: 'Missing a term when clearing',
            wrong: '$\\frac{2}{x} + 1 = \\frac{5}{x} \\Rightarrow 2 + 1 = 5$',
            right: 'multiply every term by $x$: $2 + x = 5$',
          },
        ],
        related: ['linear-equations-with-fractions', 'quadratic-factoring', 'work-rate-problems'],
        builtOn: [
          { label: 'Clearing denominators (lesson)', url: ruleUrl('lesson.equations.rational.clearing') },
          { label: 'Extraneous solutions (lesson)', url: ruleUrl('lesson.equations.rational.extraneous') },
          { label: 'Difference of squares', url: ruleUrl('identities.difference-of-squares') },
        ],
      },
    },
    {
      id: 'absolute-value-equations',
      slug: 'absolute-value-equations',
      name: 'How to solve an absolute value equation',
      description: 'Isolate the bars, split into two cases, solve each, check.',
      uses: ['definition of absolute value', 'linear equations'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Absolute Value Equations (Two Cases) | Learn Math Class',
        description: 'Solve absolute value equations: isolate the bars, check the right side is not negative, split into the positive and negative case, solve each, check. Examples.',
        keywords: ['how to solve absolute value equations', 'absolute value equations two cases', 'absolute value on both sides', 'absolute value equation no solution'],
      },
      page: {
        h1: 'How to Solve an Absolute Value Equation',
        lead:
          '$|u| = k$ with $k \\ge 0$ means $u$ is $k$ units from zero: $u = k$ or $u = -k$. Isolate the absolute value, split into those two cases, and solve each one.',
        recognize:
          'Vertical bars around an expression with the unknown: $|2x - 3| = 7$, $3|x + 1| - 4 = 8$, $|x - 1| = |2x + 3|$, $|x + 2| = 2x - 1$.',
        recognizeNote: `The ${link('lesson.equations.absolute-value.basic', 'basic equation')} and the ${link('lesson.equations.absolute-value.k-form', 'equation with a constant on the right')}, $|f(x)| = k$, are in the absolute value equations lesson; the rule is the ${link('equations.absolute-value-equation', 'absolute value equation')}.`,
        steps: {
          traceLabel: 'On $3|x + 1| - 4 = 8$',
          items: [
            {
              title: 'Isolate the absolute value.',
              body: 'Undo everything outside the bars first.',
              state: '$3|x + 1| = 12 \\;\\Rightarrow\\; |x + 1| = 4$',
              atomic: 'addition-property',
            },
            {
              title: 'Check the other side.',
              body: 'An absolute value is never negative: $|u| = $ a negative number has no solution.',
              state: '$4 \\ge 0$ ✓',
            },
            {
              title: 'Split into two cases.',
              body: '$u = k$ or $u = -k$.',
              state: '$x + 1 = 4$ or $x + 1 = -4$',
            },
            {
              title: 'Solve each case and check both.',
              body: 'Checking matters when the right side contains $x$.',
              state: '$x = 3$ or $x = -5$; both check',
            },
          ],
        },
        examples: [
          {
            title: 'negative right side',
            badge: 'no solution',
            lines: [
              { math: '$|x - 4| = -2$', why: 'an absolute value cannot be $-2$' },
              { math: 'no solution', why: '', answer: true },
            ],
          },
          {
            title: 'bars on both sides',
            badge: 'same or opposite',
            lines: [
              { math: '$|x - 1| = |2x + 3|$: $x - 1 = 2x + 3$ or $x - 1 = -(2x + 3)$', why: 'equal or opposite insides' },
              { math: '$x = -4$ or $x = -\\tfrac{2}{3}$', why: 'both check', answer: true },
            ],
          },
          {
            title: 'x on the right side',
            badge: 'extraneous case',
            lines: [
              { math: '$|x + 2| = 2x - 1$: $x + 2 = 2x - 1$ or $x + 2 = -(2x - 1)$', why: 'needs $2x - 1 \\ge 0$' },
              { math: '$x = 3$ ✓; $x = -\\tfrac{1}{3}$ gives a right side of $-\\tfrac{5}{3}$ ✗', why: 'check both' },
              { math: '$x = 3$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Try more in the [absolute value equation calculator](!/algebra/calculators/equations/absolute-value).',
        visual: {
          caption:
            'On the number line, $|x + 1| = 4$ asks for the points exactly $4$ units from $-1$. There are two: one on each side, at $3$ and $-5$. That is why the method always splits into two cases.',
        },
        pitfalls: [
          {
            title: 'Splitting before isolating',
            wrong: '$3|x + 1| - 4 = 8 \\Rightarrow 3(x + 1) - 4 = \\pm 8$',
            right: 'isolate first: $|x + 1| = 4$',
          },
          {
            title: 'Negating only part of the expression',
            wrong: '$x - 1 = -2x + 3$ for the opposite case',
            right: '$x - 1 = -(2x + 3) = -2x - 3$',
          },
          {
            title: 'Not checking when x is on the right',
            wrong: 'keeping $x = -\\tfrac{1}{3}$',
            right: 'the right side would be negative; reject it',
          },
        ],
        related: ['linear-equations', 'rational-equations', 'which-quadratic-method'],
        builtOn: [
          { label: 'Absolute value equation', url: ruleUrl('equations.absolute-value-equation') },
          { label: 'Equations of the form |f(x)| = k (lesson)', url: ruleUrl('lesson.equations.absolute-value.k-form') },
          { label: 'Absolute value on both sides (lesson)', url: ruleUrl('lesson.equations.absolute-value.both-sides') },
        ],
      },
    },
    {
      id: 'systems-substitution',
      slug: 'systems-substitution',
      name: 'How to solve a system of equations by substitution',
      description: 'Solve one equation for one variable and substitute it into the other.',
      uses: ['linear equations', 'substitution'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Systems of Equations by Substitution | Learn Math Class',
        description: 'Solve a system by substitution: isolate one variable, substitute into the other equation, solve, back-substitute. No-solution and nonlinear cases too.',
        keywords: ['solve systems by substitution', 'substitution method', 'system of equations examples', 'no solution system', 'nonlinear system substitution'],
      },
      page: {
        h1: 'How to Solve a System of Equations by Substitution',
        lead:
          'Solve one equation for one variable, put that expression into the other equation, and you have a single equation in a single unknown. Solve it, then substitute back for the other variable.',
        recognize:
          'Two equations in two unknowns where one variable is already isolated or has coefficient $\\pm 1$: $y = 2x - 1$ and $3x + y = 9$; $x + 2y = 7$ and $3x - y = 7$; or a line and a curve, $y = x^2$ and $y = x + 2$. Test: can you write one variable alone in one step?',
        recognizeNote: `Systems are treated in the linear algebra section: ${link('lesson.linear-systems', 'linear systems')}, with the ${link('lesson.linear-systems.outcomes', 'three possible outcomes')}.`,
        steps: {
          traceLabel: 'On $x + 2y = 7$ and $3x - y = 7$',
          items: [
            {
              title: 'Solve one equation for one variable.',
              body: 'Choose the variable with coefficient $1$ or $-1$ to avoid fractions.',
              state: '$x = 7 - 2y$',
              atomic: 'addition-property',
            },
            {
              title: 'Substitute into the other equation.',
              body: 'Replace the variable everywhere, in brackets.',
              state: '$3(7 - 2y) - y = 7$',
            },
            {
              title: 'Solve the one-variable equation.',
              body: `A [linear equation](!${HUB}/linear-equations). If the variable cancels: false statement = no solution, true statement = infinitely many.`,
              state: '$21 - 7y = 7 \\;\\Rightarrow\\; y = 2$',
            },
            {
              title: 'Back-substitute and check in both equations.',
              body: 'Use the isolated form from step 1.',
              state: '$x = 7 - 4 = 3$; check: $3 + 4 = 7$, $9 - 2 = 7$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a line and a parabola',
            badge: 'nonlinear',
            lines: [
              { math: '$y = x^2$, $y = x + 2$: $x^2 = x + 2$', why: 'substitute' },
              { math: '$(x - 2)(x + 1) = 0$: $(2, 4)$ and $(-1, 1)$', why: '', answer: true },
            ],
          },
          {
            title: 'parallel lines',
            badge: 'no solution',
            lines: [
              { math: '$y = 2x + 1$, $4x - 2y = 6$: $4x - 2(2x + 1) = 6 \\Rightarrow -2 = 6$', why: '' },
              { math: 'no solution', why: 'a false statement', answer: true },
            ],
          },
          {
            title: 'the same line twice',
            badge: 'infinitely many',
            lines: [
              { math: '$y = 3x - 2$, $6x - 2y = 4$: $6x - 6x + 4 = 4 \\Rightarrow 0 = 0$', why: '' },
              { math: 'infinitely many: every point of $y = 3x - 2$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Each linear equation is a line, and the solution is where the lines cross. Substitution walks along one line, describing its points with one variable, and asks which of those points also lies on the other line.',
        },
        pitfalls: [
          {
            title: 'Substituting back into the same equation',
            wrong: 'putting $x = 7 - 2y$ into $x + 2y = 7$',
            right: 'substitute into the other equation, or you get $7 = 7$',
          },
          {
            title: 'Dropping the bracket',
            wrong: '$3 \\cdot 7 - 2y - y = 7$',
            right: '$3(7 - 2y) = 21 - 6y$',
          },
          {
            title: 'Reporting only one coordinate',
            wrong: '"$y = 2$"',
            right: 'a solution is a pair: $(3, 2)$',
          },
        ],
        related: ['systems-elimination', 'linear-equations', 'mixture-problems'],
        builtOn: [
          { label: 'Linear systems (lesson)', url: ruleUrl('lesson.linear-systems') },
          { label: 'The three possible outcomes', url: ruleUrl('lesson.linear-systems.outcomes') },
          { label: 'Geometric interpretation', url: ruleUrl('lesson.linear-systems.geometric') },
        ],
      },
    },
    {
      id: 'systems-elimination',
      slug: 'systems-elimination',
      name: 'How to solve a system of equations by elimination',
      description: 'Scale the equations so one variable has opposite coefficients, then add.',
      uses: ['linear equations', 'linear combinations'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve Systems of Equations by Elimination | Learn Math Class',
        description: 'Solve a system by elimination: line up the variables, scale so one variable has opposite coefficients, add, solve, back-substitute. Examples and mistakes.',
        keywords: ['solve systems by elimination', 'elimination method', 'addition method systems', 'system of linear equations examples'],
      },
      page: {
        h1: 'How to Solve a System of Equations by Elimination',
        lead:
          'Multiply the equations by constants so that one variable has opposite coefficients, then add them: that variable cancels. Solve for the other, and substitute back.',
        recognize:
          'Two linear equations in standard form $ax + by = c$ where no variable is conveniently isolated: $2x + 3y = 12$ and $5x - 3y = 9$; $3x + 2y = 16$ and $2x - 5y = -2$. Test: are the coefficients integers that are easy to match?',
        recognizeNote: `Elimination is the hand version of ${link('lesson.linear-systems.elimination', 'Gaussian elimination')}, covered in the linear algebra section.`,
        steps: {
          traceLabel: 'On $3x + 2y = 16$ and $2x - 5y = -2$',
          items: [
            {
              title: 'Line up the variables.',
              body: 'Both equations in the form $ax + by = c$, $x$ under $x$, $y$ under $y$.',
              state: 'already aligned',
            },
            {
              title: 'Scale so one variable has equal or opposite coefficients.',
              body: 'Multiply each whole equation; choose the variable with the easier least common multiple.',
              state: '$\\times 2$: $6x + 4y = 32$; $\\times 3$: $6x - 15y = -6$',
              atomic: 'multiplication-property',
            },
            {
              title: 'Add or subtract the equations.',
              body: 'Opposite coefficients: add. Equal coefficients: subtract. The chosen variable must disappear.',
              state: 'subtract: $19y = 38 \\;\\Rightarrow\\; y = 2$',
            },
            {
              title: 'Back-substitute and check in both equations.',
              body: 'Use either original equation.',
              state: '$3x + 4 = 16 \\Rightarrow x = 4$; check: $8 - 10 = -2$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'already opposite',
            badge: 'just add',
            lines: [
              { math: '$2x + 3y = 12$, $5x - 3y = 9$: add', why: '$3y$ and $-3y$ cancel' },
              { math: '$7x = 21 \\Rightarrow x = 3$, $y = 2$', why: '', answer: true },
            ],
          },
          {
            title: 'scale both',
            badge: 'least common multiple',
            lines: [
              { math: '$3x + 2y = 16$, $2x - 5y = -2$: $\\times 2$ and $\\times 3$', why: 'make the $x$ coefficients $6$' },
              { math: '$19y = 38$: $(4, 2)$', why: '', answer: true },
            ],
          },
          {
            title: 'dependent equations',
            badge: 'infinitely many',
            lines: [
              { math: '$x + 2y = 4$, $2x + 4y = 8$: $2\\cdot(\\text{first}) - \\text{second} = 0$', why: 'everything cancels: $0 = 0$' },
              { math: 'infinitely many solutions', why: 'the second equation is the first doubled', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Adding two equations is adding two true statements: the result is still true at the crossing point of the two lines. Choosing the multipliers so one variable cancels produces a vertical or horizontal line through that same crossing, which reads off one coordinate directly.',
        },
        pitfalls: [
          {
            title: 'Scaling only one side',
            wrong: '$2(3x + 2y) = 16$',
            right: 'multiply both sides: $6x + 4y = 32$',
          },
          {
            title: 'Subtracting sign by sign',
            wrong: '$(6x - 15y) - (6x + 4y) = -11y$',
            right: '$-15y - 4y = -19y$; the right sides: $-6 - 32 = -38$',
          },
          {
            title: 'Stopping after one variable',
            wrong: '"$y = 2$"',
            right: 'back-substitute: the solution is $(4, 2)$',
          },
        ],
        related: ['systems-substitution', 'linear-equations', 'mixture-problems'],
        builtOn: [
          { label: 'Gaussian elimination (lesson)', url: ruleUrl('lesson.linear-systems.elimination') },
          { label: 'The three possible outcomes', url: ruleUrl('lesson.linear-systems.outcomes') },
          { label: 'Properties of equality', url: ruleUrl('lesson.equations.linear.properties-of-equality') },
        ],
      },
    },

    // ═══ III. Strategy ══════════════════════════════════════════════════
    {
      id: 'which-quadratic-method',
      slug: 'which-quadratic-method',
      name: 'Which method should I use to solve a quadratic?',
      description: 'A decision tree: factoring, completing the square, the formula, or just the discriminant.',
      uses: 'leads to 4 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Method to Solve a Quadratic Equation? Decision Tree | Learn Math Class',
        description: 'Choose how to solve a quadratic: factor when it factors fast, square roots with no x term, complete the square for vertex form, else the quadratic formula.',
        keywords: ['which method to solve a quadratic', 'factoring vs quadratic formula', 'best way to solve quadratic equations', 'quadratic decision tree'],
      },
      page: {
        h1: 'Which Method Should I Use to Solve a Quadratic?',
        lead:
          'Every quadratic can be solved with the formula, but faster routes exist. Ask what the question wants and what the equation looks like, and pick the shortest one.',
        tree: {
          rootId: 'goal',
          svgW: 900,
          nodes: {
            goal: {
              type: 'q',
              text: 'Do you need the roots, or only how many?',
              children: [
                { label: 'only how many', to: 'count' },
                { label: 'the roots', to: 'factors' },
              ],
            },
            factors: {
              type: 'q',
              text: 'Does it factor quickly over the integers?',
              children: [
                { label: 'yes', to: 'factor' },
                { label: 'no', to: 'vertex' },
              ],
            },
            vertex: {
              type: 'q',
              text: 'Do you also need the vertex form, or is a = 1 with even b?',
              children: [
                { label: 'yes', to: 'complete' },
                { label: 'no', to: 'formula' },
              ],
            },
            count: { type: 'leaf', to: 'discriminant', short: 'Discriminant' },
            factor: { type: 'leaf', to: 'quadratic-factoring', short: 'Factoring' },
            complete: { type: 'leaf', to: 'completing-the-square', short: 'Completing the square' },
            formula: { type: 'leaf', to: 'quadratic-formula', short: 'Quadratic formula' },
          },
          branches: [
            {
              condition: 'Only the number or kind of roots is asked.',
              answer: `Compute the [discriminant](!${HUB}/discriminant) $b^2 - 4ac$ (${link('equations.discriminant', 'formula')}); no solving needed.`,
            },
            {
              condition: 'The quadratic factors over the integers within a minute, or has no constant term.',
              answer: `[Factor](!${HUB}/quadratic-factoring) and set each factor to zero. With no $x$ term, $ax^2 = c$, take square roots directly (${link('equations.square-root-property', 'square root property')}).`,
            },
            {
              condition: 'The vertex form is also wanted, or $a = 1$ and $b$ is even.',
              answer: `[Complete the square](!${HUB}/completing-the-square) (${link('equations.completing-the-square', 'formula')}).`,
            },
            {
              condition: 'Anything else: awkward coefficients, irrational or complex roots.',
              answer: `Use the [quadratic formula](!${HUB}/quadratic-formula) (${link('equations.quadratic-formula', 'formula')}).`,
            },
          ],
        },
        related: ['quadratic-factoring', 'quadratic-formula', 'completing-the-square'],
        builtOn: [
          { label: 'Summary of solving methods (lesson)', url: ruleUrl('lesson.equations.quadratic.summary') },
          { label: 'Quadratic formula', url: ruleUrl('equations.quadratic-formula') },
          { label: 'Discriminant', url: ruleUrl('equations.discriminant') },
        ],
      },
    },

    // ═══ IV. Applied ════════════════════════════════════════════════════
    {
      id: 'mixture-problems',
      slug: 'mixture-problems',
      name: 'How to solve mixture problems',
      description: 'Solutions, blends and investments: one equation for the amount, one for the content.',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Mixture Problems (Solutions, Blends, Investments) | Learn Math Class',
        description: 'Set up mixture problems with a table of amount, rate and amount × rate: one equation for the totals, one for the content. Solutions, coffee and interest.',
        keywords: ['mixture problems', 'how to solve mixture problems', 'solution concentration word problems', 'investment mixture problem', 'mixture word problems algebra'],
      },
      page: {
        h1: 'How to Solve Mixture Problems',
        lead:
          'Two ingredients with different strengths (or prices, or interest rates) are combined. Every mixture problem is the same two facts: the amounts add up, and so do the amounts times their rates.',
        recognize:
          'Trigger words: **mix**, **blend**, **solution**, **percent acid**, **concentration**, **price per pound**, **invested at two rates**. Two parts with different rates combine into a whole with a known rate or total.',
        setup: [
          { label: 'Unknowns', body: 'Let $x$ and $y$ be the amounts of the two parts (litres, pounds, dollars).' },
          { label: 'Table', body: 'One row per part and one for the mixture; columns: amount, rate, amount × rate.' },
          { label: 'Amount equation', body: 'The amounts add up: $x + y = $ total.' },
          { label: 'Content equation', body: 'The amount × rate column adds up: $r_1 x + r_2 y = r\\cdot$ total. Write percents as decimals.' },
          { label: 'Reduce', body: 'Solve the amount equation for one variable if you prefer a single equation in one unknown.' },
        ],
        handoff: {
          to: 'systems-substitution',
          body: `Solve the two equations by substitution (or by [elimination](!${HUB}/systems-elimination)).`,
        },
        interpretation:
          'Answer with both amounts and their units. Check that the mixture rate lies between the two ingredient rates, and that the amounts are positive.',
        examples: [
          {
            title: 'acid solutions',
            badge: 'percentages',
            lines: [
              { math: 'mix $20\\%$ and $50\\%$ acid to get $30$ L of $40\\%$', why: '$x + y = 30$, $0.2x + 0.5y = 12$' },
              { math: '$0.2(30 - y) + 0.5y = 12 \\Rightarrow 0.3y = 6$', why: 'substitute $x = 30 - y$' },
              { math: '$y = 20$ L of $50\\%$, $x = 10$ L of $20\\%$', why: 'check: $2 + 10 = 12$', answer: true },
            ],
          },
          {
            title: 'a coffee blend',
            badge: 'prices',
            lines: [
              { math: '$\\text{\\textdollar}8$/lb and $\\text{\\textdollar}12$/lb into $20$ lb at $\\text{\\textdollar}9.50$/lb', why: '$x + y = 20$, $8x + 12y = 190$' },
              { math: '$8x + 12(20 - x) = 190 \\Rightarrow x = 12.5$', why: '' },
              { math: '$12.5$ lb at $\\text{\\textdollar}8$, $7.5$ lb at $\\text{\\textdollar}12$', why: '', answer: true },
            ],
          },
          {
            title: 'two investments',
            badge: 'interest rates',
            lines: [
              { math: '$\\text{\\textdollar}10{,}000$ split between $4\\%$ and $6\\%$ earns $\\text{\\textdollar}520$', why: '$0.04x + 0.06(10000 - x) = 520$' },
              { math: '$600 - 0.02x = 520 \\Rightarrow x = 4000$', why: '' },
              { math: '$\\text{\\textdollar}4{,}000$ at $4\\%$, $\\text{\\textdollar}6{,}000$ at $6\\%$', why: 'check: $160 + 360 = 520$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The mixture rate is a weighted average of the two rates, so it always lies between them, closer to the rate of whichever part there is more of. $40\\%$ sits twice as close to $50\\%$ as to $20\\%$, so there is twice as much $50\\%$ solution.',
        },
        pitfalls: [
          {
            title: 'Adding the percentages',
            wrong: '$20\\% + 50\\% = 70\\%$',
            right: 'percents do not add; the amounts of pure acid do',
          },
          {
            title: 'Percent left as a whole number',
            wrong: '$20x + 50y = 40\\cdot 30$ mixed with decimals elsewhere',
            right: 'use decimals throughout: $0.2x + 0.5y = 12$',
          },
          {
            title: 'A mixture rate outside the range',
            wrong: 'an answer that needs a negative amount',
            right: 'a target outside the two rates is impossible; recheck the setup',
          },
        ],
        related: ['systems-substitution', 'systems-elimination', 'distance-rate-time-problems'],
        builtOn: [
          { label: 'Linear systems (lesson)', url: ruleUrl('lesson.linear-systems') },
          { label: 'Equations with decimals (lesson)', url: ruleUrl('lesson.equations.linear.fractions') },
        ],
      },
    },
    {
      id: 'distance-rate-time-problems',
      slug: 'distance-rate-time-problems',
      name: 'How to solve distance, rate and time problems',
      description: 'Trains, cars, boats in a current: one d = rt line per traveller, linked by the story.',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Distance, Rate and Time Word Problems | Learn Math Class',
        description: 'Set up distance-rate-time problems: a d = rt row per traveller, linked by total distance, equal distance or equal time. Meeting and catch-up examples.',
        keywords: ['distance rate time problems', 'd = rt word problems', 'catch up problems', 'upstream downstream problems', 'motion word problems'],
      },
      page: {
        h1: 'How to Solve Distance, Rate and Time Problems',
        lead:
          'Every motion problem rests on $d = rt$, once for each traveller. The story supplies the link between them: the distances add up, or are equal, or the times are.',
        recognize:
          'Trigger words: **km/h**, **mph**, **leaves at**, **meets**, **catches up**, **upstream**, **downstream**, **round trip**. Two moving objects, or one object over two legs, with a speed or a time unknown.',
        setup: [
          { label: 'Table', body: 'One row per traveller (or leg); columns: rate, time, distance $= $ rate × time.' },
          { label: 'Unknown', body: 'Let $t$ (or $r$) be the unknown; write the other row in terms of it, e.g. a second car that left an hour later travels for $t - 1$.' },
          { label: 'Link', body: 'Towards each other: distances add to the gap. Catch-up: distances are equal. Round trip: distances equal, times add.' },
          { label: 'Current or wind', body: 'With the current: $b + c$; against it: $b - c$, where $b$ is the speed in still water.' },
          { label: 'Units', body: 'Make speeds and times agree: $30$ minutes is $0.5$ hour at a speed in km/h.' },
        ],
        handoff: {
          to: 'linear-equations',
          body: `Solve the linking equation (a [system](!${HUB}/systems-elimination) when there are two unknown speeds).`,
        },
        interpretation:
          'Answer the question asked: a time, a speed, a distance or a clock time. Check by recomputing each traveller\'s distance from the answer.',
        examples: [
          {
            title: 'towards each other',
            badge: 'distances add',
            lines: [
              { math: 'two cars $300$ km apart drive towards each other at $70$ and $80$ km/h', why: '$70t + 80t = 300$' },
              { math: '$t = 2$ hours', why: 'check: $140 + 160 = 300$', answer: true },
            ],
          },
          {
            title: 'catching up',
            badge: 'distances equal',
            lines: [
              { math: 'a car leaves at $60$ km/h; one hour later a second follows at $80$ km/h', why: '$80t = 60(t + 1)$' },
              { math: '$t = 3$ hours after the second car leaves, $240$ km from the start', why: '', answer: true },
            ],
          },
          {
            title: 'with a current',
            badge: 'two unknown speeds',
            lines: [
              { math: '$24$ km downstream in $2$ h, back in $3$ h', why: '$b + c = 12$, $b - c = 8$' },
              { math: '$b = 10$ km/h, $c = 2$ km/h', why: 'add the equations', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Draw a time-distance graph: each traveller is a straight line whose slope is its speed. Meeting or catching up is where two lines cross, so the equation you set up is the intersection of two lines.',
        },
        pitfalls: [
          {
            title: 'Same time for travellers who started apart',
            wrong: '$80t = 60t$ for a car that left an hour later',
            right: 'the first car drove one hour more: $60(t + 1)$',
          },
          {
            title: 'Mixed units',
            wrong: '$60$ km/h for $30$ minutes is $1800$ km',
            right: '$30$ minutes $= 0.5$ h: $30$ km',
          },
          {
            title: 'Averaging the speeds of a round trip',
            wrong: '$60$ there and $40$ back averages $50$',
            right: 'average speed is total distance over total time: $48$',
          },
        ],
        related: ['linear-equations', 'systems-elimination', 'work-rate-problems'],
        builtOn: [
          { label: 'Linear equations (lesson)', url: ruleUrl('lesson.equations.linear') },
          { label: 'Linear systems (lesson)', url: ruleUrl('lesson.linear-systems') },
        ],
      },
    },
    {
      id: 'work-rate-problems',
      slug: 'work-rate-problems',
      name: 'How to solve work-rate problems',
      description: 'Pipes, painters, printers: rates add, and a rate is one job per time.',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Work-Rate Problems (Working Together) | Learn Math Class',
        description: 'Solve work problems: write each rate as 1 job per its time, add the rates of those working together (subtract a drain), set equal to 1 over the combined time.',
        keywords: ['work rate problems', 'working together word problems', 'pipe filling problems', 'how long together', 'combined work rate'],
      },
      page: {
        h1: 'How to Solve Work-Rate Problems',
        lead:
          'Someone who finishes a job in $a$ hours works at a rate of $\\frac{1}{a}$ of the job per hour. Rates of people (or pipes) working together add, so $\\frac{1}{a} + \\frac{1}{b} = \\frac{1}{t}$, where $t$ is the time together.',
        recognize:
          'Trigger words: **working together**, **alone it takes**, **fills in … hours**, **drains**, **how long will it take both**. Two or more agents doing the same job at different speeds.',
        setup: [
          { label: 'Rates', body: 'Each agent\'s rate is $1$ job divided by its time alone: $\\frac{1}{a}$, $\\frac{1}{b}$.' },
          { label: 'Together', body: 'The combined rate is $\\frac{1}{t}$, where $t$ is the time working together.' },
          { label: 'Equation', body: 'Rates add: $\\frac{1}{a} + \\frac{1}{b} = \\frac{1}{t}$. Something undoing the work (a drain) is subtracted.' },
          { label: 'Unknown', body: 'Mark which of $a$, $b$, $t$ is unknown; the others are given.' },
          { label: 'Partial work', body: 'If someone works only part of the time, their share is rate × time worked, and the shares add up to $1$ job.' },
        ],
        handoff: {
          to: 'rational-equations',
          body: 'The equation has the unknown in a denominator: multiply by the LCD, solve, and keep only a positive time.',
        },
        interpretation:
          'Give the time in the problem\'s units, with a sensible rounding or as hours and minutes. Working together must be faster than the fastest agent alone, and a drain must make the fill slower.',
        examples: [
          {
            title: 'two pipes together',
            badge: 'unknown t',
            lines: [
              { math: 'pipe A fills a tank in $6$ h, pipe B in $3$ h', why: '$\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{t}$' },
              { math: '$\\frac{1}{2} = \\frac{1}{t} \\Rightarrow t = 2$ h', why: 'faster than either alone', answer: true },
            ],
          },
          {
            title: 'one time unknown',
            badge: 'solve for b',
            lines: [
              { math: 'one painter takes $5$ h; together they take $3$ h; the second alone?', why: '$\\frac{1}{5} + \\frac{1}{b} = \\frac{1}{3}$' },
              { math: '$\\frac{1}{b} = \\frac{2}{15} \\Rightarrow b = 7.5$ h', why: '', answer: true },
            ],
          },
          {
            title: 'a drain left open',
            badge: 'subtract',
            lines: [
              { math: 'a tap fills a tank in $4$ h, the drain empties it in $6$ h', why: '$\\frac{1}{4} - \\frac{1}{6} = \\frac{1}{t}$' },
              { math: '$\\frac{1}{12} = \\frac{1}{t} \\Rightarrow t = 12$ h', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Think in "jobs per hour". A $6$-hour pipe does $\\frac{1}{6}$ of the tank each hour and a $3$-hour pipe $\\frac{2}{6}$; together $\\frac{3}{6}$, half a tank per hour, so two hours. Times do not add, rates do.',
        },
        pitfalls: [
          {
            title: 'Adding the times',
            wrong: '$6 + 3 = 9$ h together',
            right: 'add the rates: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$, so $2$ h',
          },
          {
            title: 'Averaging the times',
            wrong: '$\\frac{6 + 3}{2} = 4.5$ h',
            right: 'together must be faster than the faster pipe: $2$ h',
          },
          {
            title: 'Adding the drain',
            wrong: '$\\frac{1}{4} + \\frac{1}{6}$',
            right: 'a drain works against the tap: subtract',
          },
        ],
        related: ['rational-equations', 'distance-rate-time-problems', 'mixture-problems'],
        builtOn: [
          { label: 'Clearing denominators (lesson)', url: ruleUrl('lesson.equations.rational.clearing') },
          { label: 'Rational equations (lesson)', url: ruleUrl('lesson.equations.rational') },
        ],
      },
    },
    {
      id: 'age-problems',
      slug: 'age-problems',
      name: 'How to solve age problems',
      description: 'Ages now, in the past and in the future: everyone gains the same number of years.',
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Age Word Problems (Step by Step) | Learn Math Class',
        description: 'Solve age problems: name the ages now, shift every age by the same number of years, translate the comparison, solve. Three examples with checks.',
        keywords: ['age word problems', 'how to solve age problems', 'age problems algebra', 'years ago years from now problems'],
      },
      page: {
        h1: 'How to Solve Age Problems',
        lead:
          'Ages move together: in $t$ years everyone is $t$ years older, and $t$ years ago everyone was $t$ years younger. Name the ages now, shift them all by the same amount, and translate the comparison into an equation.',
        recognize:
          'Trigger words: **years old**, **years ago**, **in … years**, **twice as old**, **sum of their ages**. Two or more people, a time shift, and a comparison of their ages.',
        setup: [
          { label: 'Ages now', body: 'Let one variable be a present age; write the others from the first sentence (three times as old: $3c$).' },
          { label: 'Shift', body: 'In $t$ years: add $t$ to **every** age. $t$ years ago: subtract $t$ from every age.' },
          { label: 'Comparison', body: '"Twice as old" at the shifted time: older shifted age $= 2\\times$ younger shifted age.' },
          { label: 'Second fact', body: 'A sum or difference of ages gives a second equation if there are two unknowns.' },
          { label: 'Table', body: 'Rows: people; columns: now, then. It prevents shifting one age and not the other.' },
        ],
        handoff: {
          to: 'linear-equations',
          body: `Solve the resulting linear equation, or the [system](!${HUB}/systems-substitution) if there are two unknown ages.`,
        },
        interpretation:
          'Report the ages asked for, usually the present ones. Check every sentence of the story with your numbers, including the shifted ones; ages must be positive and usually whole.',
        examples: [
          {
            title: 'three times as old',
            badge: 'future shift',
            lines: [
              { math: 'a parent is $3$ times as old as a child; in $12$ years, twice as old', why: '$p = 3c$, $p + 12 = 2(c + 12)$' },
              { math: '$3c + 12 = 2c + 24 \\Rightarrow c = 12$', why: '' },
              { math: 'child $12$, parent $36$', why: 'check: $48 = 2\\cdot 24$', answer: true },
            ],
          },
          {
            title: 'a sum and a past comparison',
            badge: 'two unknowns',
            lines: [
              { math: 'two siblings\' ages add to $55$; five years ago the older was twice the younger', why: '$x + y = 55$, $x - 5 = 2(y - 5)$' },
              { math: '$x = 2y - 5 \\Rightarrow 3y - 5 = 55 \\Rightarrow y = 20$', why: 'substitute' },
              { math: '$35$ and $20$', why: 'check: $30 = 2\\cdot 15$', answer: true },
            ],
          },
          {
            title: 'when will it happen?',
            badge: 'unknown shift',
            lines: [
              { math: 'someone is $40$, another $15$; in how many years will the first be twice the second?', why: '$40 + t = 2(15 + t)$' },
              { math: '$t = 10$ years', why: 'check: $50 = 2\\cdot 25$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The difference between two people\'s ages never changes: a parent $24$ years older stays $24$ years older forever. Only ratios like "twice as old" change with time, which is what makes them useful for setting up an equation.',
        },
        pitfalls: [
          {
            title: 'Shifting only one age',
            wrong: '$p + 12 = 2c$',
            right: 'both age: $p + 12 = 2(c + 12)$',
          },
          {
            title: 'Dropping the bracket',
            wrong: '$2c + 12$ for "twice the child\'s age in 12 years"',
            right: '$2(c + 12) = 2c + 24$',
          },
          {
            title: 'Answering with the shifted age',
            wrong: '"the child is $24$"',
            right: '$24$ is the age in $12$ years; the child is $12$ now',
          },
        ],
        related: ['linear-equations', 'systems-substitution', 'mixture-problems'],
        builtOn: [
          { label: 'Linear equations (lesson)', url: ruleUrl('lesson.equations.linear') },
          { label: 'Equations with parentheses (lesson)', url: ruleUrl('lesson.equations.linear.parentheses') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Solving methods', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a method', blurb: 'Strategy' },
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
    title: 'Other algebra methods',
    links: [
      { url: '/algebra/methods', label: 'Algebra methods' },
      { url: '/algebra/inequalities/methods', label: 'Inequalities' },
      { url: '/algebra/polynomials/methods', label: 'Polynomials' },
    ],
  },
};

export default equationsMethods;
