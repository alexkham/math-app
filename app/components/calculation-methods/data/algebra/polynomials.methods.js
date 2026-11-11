// polynomials.methods.js
// Single data source for /algebra/polynomials/methods (hub) and
// /algebra/polynomials/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/algebra/polynomials/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/algebra/polynomials/methods';

const polynomialsMethods = {
  hubPath: HUB,
  hubLabel: 'polynomial methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'add-subtract-polynomials',
      name: 'How to add or subtract polynomials',
      subtitle: 'Combine like terms',
      glyph: '±',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'Two polynomials joined by $+$ or $-$: $(3x^2 - 2x + 5) + (x^2 + 4x - 1)$, $(3x^2 - 2x + 5) - (x^2 + 4x - 1)$.',
      formula: '(a x^n + \\cdots) \\pm (b x^n + \\cdots) = (a \\pm b)x^n + \\cdots',
      fields: {
        steps: [
          '1. For subtraction, change the sign of **every** term of the second polynomial.',
          '2. Add the coefficients of like terms (same variable, same power).',
        ],
        worked_example: '$(3x^2 - 2x + 5) - (x^2 + 4x - 1) = 2x^2 - 6x + 6$',
      },
      links: [
        { url: ruleUrl('lesson.polynomials.operations.adding'), label: 'Adding polynomials' },
        { url: ruleUrl('lesson.polynomials.operations.subtracting'), label: 'Subtracting polynomials' },
      ],
    },
    {
      id: 'multiply-polynomials',
      name: 'How to multiply polynomials',
      subtitle: 'Distribute every term',
      glyph: '×',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'Two polynomials multiplied: $(x + 2)(x^2 - 3x + 1)$, $(2x - 1)(x + 4)$.',
      formula: '(a + b)(c + d + e) = ac + ad + ae + bc + bd + be',
      fields: {
        steps: [
          '1. Multiply each term of the first polynomial by each term of the second.',
          '2. Combine like terms. The number of products before combining is (terms in first) × (terms in second).',
        ],
        worked_example: '$(x + 2)(x^2 - 3x + 1) = x^3 - x^2 - 5x + 2$',
      },
      links: [
        { url: ruleUrl('lesson.polynomials.operations.multiplying'), label: 'Multiplying polynomials' },
        { url: ruleUrl('lesson.polynomials.operations.foil'), label: 'FOIL method' },
      ],
    },
    {
      id: 'special-products',
      name: 'How to expand a special product',
      subtitle: 'Square of a binomial, sum times difference',
      glyph: '(a±b)²',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A binomial squared, or a sum times the matching difference: $(2x + 3)^2$, $(x - 5)^2$, $(3x + 2)(3x - 2)$.',
      formula: '(a + b)^2 = a^2 + 2ab + b^2 \\qquad (a - b)^2 = a^2 - 2ab + b^2 \\qquad (a + b)(a - b) = a^2 - b^2',
      fields: {
        steps: ['1. Match the expression to one of the three patterns and identify $a$ and $b$.', '2. Substitute; do not forget the middle term $2ab$.'],
        worked_example: '$(2x + 3)^2 = 4x^2 + 12x + 9$',
      },
      links: [
        { url: ruleUrl('lesson.polynomials.operations.special-products'), label: 'Special products' },
        { url: ruleUrl('identities.square-of-a-sum'), label: 'Square of a sum' },
        { url: ruleUrl('identities.difference-of-squares'), label: 'Difference of squares' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'factor-gcf',
      slug: 'factor-gcf',
      name: 'How to factor out the greatest common factor',
      description: 'Pull the largest common number and the lowest common powers out of every term.',
      uses: ['greatest common factor', 'distributive law'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Factor Out the Greatest Common Factor (GCF) | Learn Math Class',
        description: 'Factor out the GCF: find the greatest common number and the lowest power of each shared variable, divide every term by it, check by expanding. Examples.',
        keywords: ['factor out the gcf', 'greatest common factor polynomial', 'factoring gcf examples', 'how to factor gcf'],
      },
      page: {
        h1: 'How to Factor Out the Greatest Common Factor',
        lead:
          'The first step of every factoring problem: find what all the terms share, the largest common number and the lowest power of each common variable, and write it once in front of a bracket.',
        recognize:
          'Every term has a factor in common: $12x^3 + 18x^2 - 6x$, $8a^2b - 12ab^2$, $x(x + 2) + 5(x + 2)$. Test: does one number, letter or bracket divide every term?',
        recognizeNote: `The lesson section is ${link('lesson.polynomials.factoring.gcf', 'Greatest Common Factor')}; it is the reverse of the distributive law.`,
        steps: {
          traceLabel: 'On $12x^3 + 18x^2 - 6x$',
          items: [
            {
              title: 'Find the GCF of the coefficients.',
              body: 'The largest number dividing all of them.',
              state: '$\\gcd(12, 18, 6) = 6$',
            },
            {
              title: 'Find the lowest power of each shared variable.',
              body: 'A variable missing from one term is not shared.',
              state: '$x^1$',
            },
            {
              title: 'Divide every term by the GCF.',
              body: 'The quotients go inside the bracket; a term equal to the GCF leaves $1$, not $0$.',
              state: '$6x(2x^2 + 3x - 1)$',
            },
            {
              title: 'Check by expanding, then factor the bracket further if possible.',
              body: `Continue with [trinomials](!${HUB}/factor-trinomials) or other patterns.`,
              state: '$6x\\cdot 2x^2 + 6x\\cdot 3x - 6x = 12x^3 + 18x^2 - 6x$ ✓; $2x^2 + 3x - 1$ does not factor',
              atomic: 'multiply-polynomials',
            },
          ],
        },
        examples: [
          {
            title: 'two variables',
            badge: 'basic',
            lines: [
              { math: '$8a^2b - 12ab^2$: GCF $4ab$', why: '' },
              { math: '$4ab(2a - 3b)$', why: '', answer: true },
            ],
          },
          {
            title: 'a bracket as the common factor',
            badge: 'binomial GCF',
            lines: [
              { math: '$x(x + 2) + 5(x + 2)$', why: '$(x + 2)$ is in both terms' },
              { math: '$(x + 2)(x + 5)$', why: '', answer: true },
            ],
          },
          {
            title: 'negative leading term',
            badge: 'factor out −',
            lines: [
              { math: '$-3x^2 + 9x$: take out $-3x$', why: 'leaves a positive leading term inside' },
              { math: '$-3x(x - 3)$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Each term is a rectangle of area $12x^3$, $18x^2$ and $6x$. Factoring out $6x$ lines them up along a common side of length $6x$; the other sides, $2x^2$, $3x$ and $1$, are what goes in the bracket.',
        },
        pitfalls: [
          {
            title: 'Leaving 0 for a term equal to the GCF',
            wrong: '$12x^3 + 18x^2 - 6x = 6x(2x^2 + 3x)$',
            right: '$6x(2x^2 + 3x - 1)$',
          },
          {
            title: 'Not the greatest factor',
            wrong: '$12x^3 + 18x^2 = 2x(6x^2 + 9x)$',
            right: '$6x^2(2x + 3)$',
          },
          {
            title: 'Sign errors after factoring out a negative',
            wrong: '$-3x^2 + 9x = -3x(x + 3)$',
            right: '$-3x(x - 3)$',
          },
        ],
        related: ['factor-by-grouping', 'factor-trinomials', 'which-factoring-method'],
        builtOn: [
          { label: 'Greatest Common Factor (lesson)', url: ruleUrl('lesson.polynomials.factoring.gcf') },
          { label: 'Factoring polynomials (lesson)', url: ruleUrl('lesson.polynomials.factoring') },
        ],
      },
    },
    {
      id: 'factor-by-grouping',
      slug: 'factor-by-grouping',
      name: 'How to factor by grouping',
      description: 'Four terms: pair them, factor each pair, then factor out the common bracket.',
      uses: ['GCF', 'binomial factor'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Factor by Grouping (Four-Term Polynomials) | Learn Math Class',
        description: 'Factor by grouping: split four terms into two pairs, factor the GCF out of each pair, factor out the common bracket; regroup if the brackets differ.',
        keywords: ['factor by grouping', 'factoring four terms', 'grouping method', 'factor by grouping examples'],
      },
      page: {
        h1: 'How to Factor by Grouping',
        lead:
          'Split four terms into two pairs and factor each pair. If the two brackets that appear are the same, that bracket is a common factor of the whole expression.',
        recognize:
          'Four terms with no common factor overall: $x^3 + 3x^2 + 2x + 6$, $2ax - 6a + bx - 3b$, $x^3 - 5x^2 - 4x + 20$. Also the middle step of the ac method for trinomials.',
        recognizeNote: `The lesson section is ${link('lesson.polynomials.factoring.grouping', 'Factoring by Grouping')}; each pair is factored by its [greatest common factor](!${HUB}/factor-gcf).`,
        steps: {
          traceLabel: 'On $x^3 + 3x^2 + 2x + 6$',
          items: [
            {
              title: 'Group the terms in two pairs.',
              body: 'Usually the first two and the last two.',
              state: '$(x^3 + 3x^2) + (2x + 6)$',
            },
            {
              title: 'Factor the GCF out of each pair.',
              body: 'If the second pair starts with a minus, factor out a negative so the brackets match.',
              state: '$x^2(x + 3) + 2(x + 3)$',
            },
            {
              title: 'Factor out the common bracket.',
              body: 'If the brackets differ, regroup the four terms in another order.',
              state: '$(x + 3)(x^2 + 2)$',
            },
            {
              title: 'Factor further and check by expanding.',
              body: 'A leftover difference of squares, for instance, still factors.',
              state: '$x^2 + 2$ does not factor; expanding gives back the original ✓',
              atomic: 'multiply-polynomials',
            },
          ],
        },
        examples: [
          {
            title: 'two letters',
            badge: 'basic',
            lines: [
              { math: '$2ax - 6a + bx - 3b = 2a(x - 3) + b(x - 3)$', why: '' },
              { math: '$(x - 3)(2a + b)$', why: '', answer: true },
            ],
          },
          {
            title: 'a negative second pair',
            badge: 'factor out −4',
            lines: [
              { math: '$x^3 - 5x^2 - 4x + 20 = x^2(x - 5) - 4(x - 5)$', why: 'take $-4$ out of the second pair' },
              { math: '$(x - 5)(x^2 - 4) = (x - 5)(x - 2)(x + 2)$', why: 'difference of squares left', answer: true },
            ],
          },
          {
            title: 'regroup first',
            badge: 'brackets did not match',
            lines: [
              { math: '$ax + by + bx + ay$: pairs $(ax + by)$, $(bx + ay)$ share nothing', why: '' },
              { math: '$(ax + ay) + (bx + by) = a(x + y) + b(x + y) = (a + b)(x + y)$', why: 'swap the middle terms', answer: true },
            ],
          },
        ],
        visual: {
          component: 'PolynomialMultiplicationVisualizer',
          caption:
            'Multiplying $(x + 3)(x^2 + 2)$ in a grid gives four cells, $x^3$, $2x$, $3x^2$ and $6$, one per pair of terms. Grouping reads that grid backwards: two cells share the row $x^2$, two share the row $2$, and the common column is $(x + 3)$.',
        },
        pitfalls: [
          {
            title: 'Losing the sign in the second pair',
            wrong: '$x^3 - 5x^2 - 4x + 20 = x^2(x - 5) - 4(x + 5)$',
            right: '$-4x + 20 = -4(x - 5)$',
          },
          {
            title: 'Stopping when the brackets differ',
            wrong: '"it does not factor"',
            right: 'try another grouping of the four terms',
          },
          {
            title: 'Writing the common bracket twice',
            wrong: '$(x + 3)(x^2 + 2)(x + 3)$',
            right: 'factor it out once: $(x + 3)(x^2 + 2)$',
          },
        ],
        related: ['factor-gcf', 'factor-trinomials', 'which-factoring-method'],
        builtOn: [
          { label: 'Factoring by grouping (lesson)', url: ruleUrl('lesson.polynomials.factoring.grouping') },
          { label: 'Greatest Common Factor (lesson)', url: ruleUrl('lesson.polynomials.factoring.gcf') },
        ],
      },
    },
    {
      id: 'factor-trinomials',
      slug: 'factor-trinomials',
      name: 'How to factor a trinomial',
      description: 'Find two numbers by product and sum; the ac method when the leading coefficient is not 1.',
      uses: ['product–sum search', 'grouping'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Factor a Trinomial (Including the ac Method) | Learn Math Class',
        description: 'Factor ax² + bx + c: take out the GCF, find two numbers with product ac and sum b, split the middle term, group. Simple and general case, with examples.',
        keywords: ['how to factor trinomials', 'ac method', 'factoring quadratics', 'factor ax^2 + bx + c', 'factoring trinomials examples'],
      },
      page: {
        h1: 'How to Factor a Trinomial',
        lead:
          'For $x^2 + bx + c$, look for two numbers that multiply to $c$ and add to $b$. When the leading coefficient $a$ is not $1$, the same search on $ac$ tells you how to split the middle term, and grouping finishes the job.',
        recognize:
          'Three terms of the form $ax^2 + bx + c$: $x^2 + 7x + 12$, $x^2 - x - 20$, $6x^2 + 11x - 10$, $3x^2 - 3x - 18$. Test: can you find two integers with product $ac$ and sum $b$?',
        recognizeNote: `The lesson splits the ${link('lesson.polynomials.factoring.trinomials-simple', 'simple case')} ($a = 1$) from the ${link('lesson.polynomials.factoring.trinomials-general', 'general case')}; the pattern is the ${link('identities.trinomial-factoring-pattern', 'trinomial factoring pattern')}.`,
        methods: [
          {
            name: 'a = 1: product and sum',
            tag: 'simple case',
            preferred: true,
            formula: 'x^2 + bx + c = (x + p)(x + q), \\quad pq = c,\\ p + q = b',
            body: 'List the factor pairs of $c$ and pick the one with the right sum.',
          },
          {
            name: 'a ≠ 1: the ac method',
            tag: 'general case',
            formula: 'ax^2 + bx + c = ax^2 + px + qx + c, \\quad pq = ac,\\ p + q = b',
            body: `Split the middle term with $p$ and $q$, then [factor by grouping](!${HUB}/factor-by-grouping).`,
          },
        ],
        steps: {
          traceLabel: 'On $6x^2 + 11x - 10$',
          items: [
            {
              title: 'Take out a GCF first.',
              body: `[GCF](!${HUB}/factor-gcf) makes the numbers smaller.`,
              state: 'none here',
            },
            {
              title: 'Compute ac and list its factor pairs.',
              body: 'Mind the signs: a negative $ac$ means the two numbers have opposite signs.',
              state: '$ac = -60$: try $15$ and $-4$',
            },
            {
              title: 'Pick the pair whose sum is b.',
              body: '',
              state: '$15 + (-4) = 11$ ✓',
            },
            {
              title: 'Split the middle term and group.',
              body: 'For $a = 1$ you can skip this and write $(x + p)(x + q)$ directly.',
              state: '$6x^2 + 15x - 4x - 10 = 3x(2x + 5) - 2(2x + 5)$',
            },
            {
              title: 'Factor out the bracket and check.',
              body: 'Expand the answer back.',
              state: '$(3x - 2)(2x + 5)$; check: $6x^2 + 15x - 4x - 10$ ✓',
              atomic: 'multiply-polynomials',
            },
          ],
        },
        examples: [
          {
            title: 'leading coefficient 1',
            badge: 'simple case',
            lines: [
              { math: '$x^2 - x - 20$: product $-20$, sum $-1$: $-5$ and $4$', why: '' },
              { math: '$(x - 5)(x + 4)$', why: '', answer: true },
            ],
          },
          {
            title: 'both numbers negative',
            badge: 'ac method',
            lines: [
              { math: '$2x^2 - 7x + 3$: $ac = 6$, sum $-7$: $-6$ and $-1$', why: '' },
              { math: '$2x^2 - 6x - x + 3 = 2x(x - 3) - 1(x - 3) = (2x - 1)(x - 3)$', why: '', answer: true },
            ],
          },
          {
            title: 'GCF first',
            badge: 'smaller numbers',
            lines: [
              { math: '$3x^2 - 3x - 18 = 3(x^2 - x - 6)$', why: '' },
              { math: '$3(x - 3)(x + 2)$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check any factorization in the [factoring calculator](!/algebra/calculators/factoring).',
        visual: {
          component: 'PolynomialMultiplicationVisualizer',
          caption:
            'Multiplying two binomials fills a two-by-two grid: the corners are $ax^2$ and $c$, and the two middle cells add up to $bx$. Factoring a trinomial is filling that grid backwards, which is exactly what splitting the middle term does.',
        },
        pitfalls: [
          {
            title: 'Using c instead of ac when a ≠ 1',
            wrong: '$6x^2 + 11x - 10$: factor pairs of $-10$ only',
            right: 'search the pairs of $ac = -60$',
          },
          {
            title: 'Right numbers, wrong signs',
            wrong: '$x^2 - x - 20 = (x + 5)(x - 4)$',
            right: 'that has middle term $+x$; it is $(x - 5)(x + 4)$',
          },
          {
            title: 'Forgetting the GCF in the answer',
            wrong: '$3x^2 - 3x - 18 = (x - 3)(x + 2)$',
            right: '$3(x - 3)(x + 2)$',
          },
        ],
        related: ['factor-by-grouping', 'difference-of-squares', 'which-factoring-method'],
        builtOn: [
          { label: 'Trinomial factoring pattern', url: ruleUrl('identities.trinomial-factoring-pattern') },
          { label: 'Factoring trinomials (lesson)', url: ruleUrl('lesson.polynomials.factoring.trinomials-general') },
          { label: 'Factoring by grouping (lesson)', url: ruleUrl('lesson.polynomials.factoring.grouping') },
        ],
      },
    },
    {
      id: 'difference-of-squares',
      slug: 'difference-of-squares',
      name: 'How to factor a difference of squares',
      description: 'Spot $a^2 - b^2$ and write $(a - b)(a + b)$; repeat while squares remain.',
      uses: ['difference of squares identity'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Factor a Difference of Squares | Learn Math Class',
        description: 'Factor a² − b² as (a − b)(a + b): spot two perfect squares with a minus between them, take out a GCF first, keep factoring while squares remain.',
        keywords: ['difference of squares', 'factor difference of squares', 'a^2 - b^2', 'difference of squares examples'],
      },
      page: {
        h1: 'How to Factor a Difference of Squares',
        lead:
          'Two perfect squares with a minus sign between them always factor: $a^2 - b^2 = (a - b)(a + b)$. Find $a$ and $b$ by taking square roots of the two terms.',
        recognize:
          'Exactly two terms, both perfect squares, subtracted: $49x^2 - 25$, $x^4 - 16$, $2x^3 - 50x$ (after a GCF). Test: is each term a square, and is the sign between them a minus?',
        recognizeNote: `The identity is the ${link('identities.difference-of-squares', 'difference of squares')}; the lesson section is ${link('lesson.polynomials.factoring.difference-of-squares', 'Difference of Squares')}.`,
        steps: {
          traceLabel: 'On $49x^2 - 25$',
          items: [
            {
              title: 'Take out a GCF if there is one.',
              body: `It may be what turns the terms into squares ([GCF](!${HUB}/factor-gcf)).`,
              state: 'none',
            },
            {
              title: 'Write each term as a square.',
              body: 'Coefficient and variable separately: $49x^2 = (7x)^2$.',
              state: '$(7x)^2 - 5^2$',
            },
            {
              title: 'Apply the identity.',
              body: '$a^2 - b^2 = (a - b)(a + b)$.',
              state: '$(7x - 5)(7x + 5)$',
              atomic: 'special-products',
            },
            {
              title: 'Check each factor for another difference of squares.',
              body: 'Higher even powers often factor more than once.',
              state: 'both factors are linear; done',
            },
          ],
        },
        examples: [
          {
            title: 'factor twice',
            badge: 'fourth powers',
            lines: [
              { math: '$x^4 - 16 = (x^2 - 4)(x^2 + 4)$', why: '$a = x^2$, $b = 4$' },
              { math: '$= (x - 2)(x + 2)(x^2 + 4)$', why: '$x^2 - 4$ is again a difference of squares', answer: true },
            ],
          },
          {
            title: 'GCF first',
            badge: 'hidden squares',
            lines: [
              { math: '$2x^3 - 50x = 2x(x^2 - 25)$', why: '' },
              { math: '$2x(x - 5)(x + 5)$', why: '', answer: true },
            ],
          },
          {
            title: 'a sum of squares',
            badge: 'does not factor',
            lines: [
              { math: '$x^2 + 9$', why: 'a plus sign between the squares' },
              { math: 'prime over the real numbers', why: 'no real roots', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Cut a $b$-by-$b$ square out of the corner of an $a$-by-$a$ square. The L-shaped rest can be cut and rearranged into a rectangle with sides $a - b$ and $a + b$, which is the factorization drawn.',
        },
        pitfalls: [
          {
            title: 'Factoring a sum of squares',
            wrong: '$x^2 + 9 = (x + 3)(x + 3)$',
            right: '$(x + 3)^2 = x^2 + 6x + 9$; a sum of squares does not factor over the reals',
          },
          {
            title: 'Stopping too early',
            wrong: '$x^4 - 16 = (x^2 - 4)(x^2 + 4)$',
            right: '$x^2 - 4$ factors again',
          },
          {
            title: 'Square root of the coefficient forgotten',
            wrong: '$49x^2 - 25 = (49x - 5)(49x + 5)$',
            right: '$\\sqrt{49x^2} = 7x$',
          },
        ],
        related: ['sum-difference-of-cubes', 'factor-trinomials', 'which-factoring-method'],
        builtOn: [
          { label: 'Difference of squares', url: ruleUrl('identities.difference-of-squares') },
          { label: 'Difference of squares (lesson)', url: ruleUrl('lesson.polynomials.factoring.difference-of-squares') },
        ],
      },
    },
    {
      id: 'sum-difference-of-cubes',
      slug: 'sum-difference-of-cubes',
      name: 'How to factor a sum or difference of cubes',
      description: 'Spot $a^3 \\pm b^3$ and use the matching formula; the quadratic factor never factors further.',
      uses: ['sum and difference of cubes identities'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Factor a Sum or Difference of Cubes | Learn Math Class',
        description: 'Factor a³ + b³ and a³ − b³: write both terms as cubes, apply (a ± b)(a² ∓ ab + b²) with the SOAP sign rule, take out a GCF first. Examples including x⁶ − 1.',
        keywords: ['sum of cubes', 'difference of cubes', 'factor a^3 + b^3', 'sum and difference of cubes formula', 'SOAP factoring'],
      },
      page: {
        h1: 'How to Factor a Sum or Difference of Cubes',
        lead:
          'Two perfect cubes added or subtracted always factor into a binomial times a trinomial: $a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$. Unlike squares, a **sum** of cubes factors too.',
        recognize:
          'Two terms, both perfect cubes, with $+$ or $-$ between them: $8x^3 - 27$, $x^3 + 64$, $54y^3 + 2$ (after a GCF), $x^6 - 1$. Test: is each term a cube ($1, 8, 27, 64, 125, \\ldots$; $x^3, x^6, \\ldots$)?',
        recognizeNote: `The identities are the ${link('identities.sum-of-cubes', 'sum of cubes')} and ${link('identities.difference-of-cubes', 'difference of cubes')}; the lesson section is ${link('lesson.polynomials.factoring.cubes', 'Sum and Difference of Cubes')}.`,
        steps: {
          traceLabel: 'On $8x^3 - 27$',
          items: [
            {
              title: 'Take out a GCF if there is one.',
              body: `[GCF](!${HUB}/factor-gcf) first: $54y^3 + 2 = 2(27y^3 + 1)$.`,
              state: 'none',
            },
            {
              title: 'Write each term as a cube.',
              body: 'Identify $a$ and $b$.',
              state: '$(2x)^3 - 3^3$: $a = 2x$, $b = 3$',
            },
            {
              title: 'Apply the formula with the right signs.',
              body: 'Signs: Same, Opposite, Always Positive. The binomial copies the sign, the middle term of the trinomial takes the opposite sign, the last term is always $+$.',
              state: '$(2x - 3)(4x^2 + 6x + 9)$',
            },
            {
              title: 'Check, and leave the trinomial alone.',
              body: 'The trinomial $a^2 \\mp ab + b^2$ never factors over the reals.',
              state: 'expand: $8x^3 + 12x^2 + 18x - 12x^2 - 18x - 27 = 8x^3 - 27$ ✓',
              atomic: 'multiply-polynomials',
            },
          ],
        },
        examples: [
          {
            title: 'a sum of cubes',
            badge: 'basic',
            lines: [
              { math: '$x^3 + 64 = x^3 + 4^3$', why: '$a = x$, $b = 4$' },
              { math: '$(x + 4)(x^2 - 4x + 16)$', why: '', answer: true },
            ],
          },
          {
            title: 'GCF first',
            badge: 'hidden cubes',
            lines: [
              { math: '$54y^3 + 2 = 2(27y^3 + 1)$', why: '$27y^3 = (3y)^3$' },
              { math: '$2(3y + 1)(9y^2 - 3y + 1)$', why: '', answer: true },
            ],
          },
          {
            title: 'sixth powers',
            badge: 'squares first',
            lines: [
              { math: '$x^6 - 1 = (x^3 - 1)(x^3 + 1)$', why: 'difference of squares first' },
              { math: '$= (x - 1)(x^2 + x + 1)(x + 1)(x^2 - x + 1)$', why: 'then both cube formulas', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A $2x$-cube with a $3$-cube cut out of its corner can be sliced into three slabs. Their volumes add to $(2x - 3)(4x^2 + 6x + 9)$: one dimension is the difference of the edges, the rest collects the three faces.',
        },
        pitfalls: [
          {
            title: 'Wrong middle sign',
            wrong: '$x^3 + 64 = (x + 4)(x^2 + 4x + 16)$',
            right: 'opposite sign in the middle: $x^2 - 4x + 16$',
          },
          {
            title: 'Squaring the middle term',
            wrong: '$(2x - 3)(4x^2 + 12x + 9)$',
            right: 'the middle term is $ab = 6x$, not $2ab$',
          },
          {
            title: 'Trying to factor the trinomial',
            wrong: '$x^2 - 4x + 16 = (x - 4)^2$',
            right: '$(x - 4)^2 = x^2 - 8x + 16$; the trinomial is prime',
          },
        ],
        related: ['difference-of-squares', 'factor-gcf', 'which-factoring-method'],
        builtOn: [
          { label: 'Sum of cubes', url: ruleUrl('identities.sum-of-cubes') },
          { label: 'Difference of cubes', url: ruleUrl('identities.difference-of-cubes') },
          { label: 'Sum and difference of cubes (lesson)', url: ruleUrl('lesson.polynomials.factoring.cubes') },
        ],
      },
    },
    {
      id: 'polynomial-long-division',
      slug: 'polynomial-long-division',
      name: 'How to do polynomial long division',
      description: 'Divide leading terms, multiply back, subtract, bring down; repeat until the degree drops.',
      uses: ['division algorithm'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Do Polynomial Long Division (Step by Step) | Learn Math Class',
        description: 'Divide polynomials by long division: descending order with zero placeholders, divide leading terms, multiply, subtract, repeat; read the remainder.',
        keywords: ['polynomial long division', 'how to divide polynomials', 'long division of polynomials examples', 'quotient and remainder polynomial'],
      },
      page: {
        h1: 'How to Do Polynomial Long Division',
        lead:
          'Polynomial long division runs exactly like long division of numbers: divide the leading terms, multiply the whole divisor by that result, subtract, bring down, and repeat until what is left has a smaller degree than the divisor.',
        recognize:
          '"Divide $2x^3 + 3x^2 - 5x + 6$ by $x + 2$", a rational expression to simplify where the top degree is at least the bottom degree, or a division by a quadratic (where synthetic division cannot be used).',
        recognizeNote: `The lesson section is ${link('polynomials.long-division', 'Polynomial Long Division')}; for divisors $x - r$ the faster route is [synthetic division](!${HUB}/synthetic-division).`,
        steps: {
          traceLabel: 'On $(2x^3 + 3x^2 - 5x + 6) \\div (x + 2)$',
          items: [
            {
              title: 'Write both in descending powers, with 0 for missing terms.',
              body: 'Placeholders keep the columns aligned.',
              state: 'dividend $2x^3 + 3x^2 - 5x + 6$, divisor $x + 2$',
            },
            {
              title: 'Divide the leading term by the divisor’s leading term.',
              body: 'That is the next term of the quotient.',
              state: '$\\frac{2x^3}{x} = 2x^2$',
            },
            {
              title: 'Multiply the whole divisor by it and subtract.',
              body: 'Subtract every term: change all signs, then add.',
              state: '$2x^2(x + 2) = 2x^3 + 4x^2$; remainder so far $-x^2 - 5x$',
              atomic: 'multiply-polynomials',
            },
            {
              title: 'Bring down the next term and repeat.',
              body: 'Stop when the degree of what is left is below the degree of the divisor.',
              state: '$-x$: leaves $-3x + 6$; $\\;-3$: leaves $12$',
            },
            {
              title: 'Write quotient + remainder / divisor, and check.',
              body: `Check: divisor × quotient + remainder = dividend. The ${link('polynomials.remainder-theorem', 'remainder theorem')} gives a quick check of the remainder.`,
              state: '$2x^2 - x - 3 + \\frac{12}{x + 2}$; $f(-2) = 12$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'missing terms',
            badge: 'placeholders',
            lines: [
              { math: '$(x^3 - 8) \\div (x - 2)$: write $x^3 + 0x^2 + 0x - 8$', why: '' },
              { math: '$x^2 + 2x + 4$, remainder $0$', why: 'a difference of cubes', answer: true },
            ],
          },
          {
            title: 'a quadratic divisor',
            badge: 'synthetic division cannot do this',
            lines: [
              { math: '$(x^4 + x^3 + 2x^2 + x + 1) \\div (x^2 + 1)$', why: '$x^2$, then $x$, then $1$' },
              { math: '$x^2 + x + 1$, remainder $0$', why: 'check: $(x^2 + 1)(x^2 + x + 1)$ expands back', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'nonzero remainder',
            lines: [
              { math: '$(2x^3 + 3x^2 - 5x + 6) \\div (x + 2)$', why: '' },
              { math: '$2x^2 - x - 3 + \\frac{12}{x + 2}$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your division in the [polynomial calculator](!/algebra/calculators/polynomial).',
        visual: {
          caption:
            'Each step of the division peels off one term of the quotient and makes the leftover one degree smaller, like taking off layers. When the leftover is smaller than the divisor, nothing more fits, and that leftover is the remainder.',
        },
        pitfalls: [
          {
            title: 'Subtracting only the first term',
            wrong: '$3x^2 - 4x^2 = -x^2$, then bringing down $+5x$',
            right: 'subtract the whole product; the next term is $-5x$ unchanged',
          },
          {
            title: 'No placeholder for a missing power',
            wrong: 'writing $x^3 - 8$ in two columns',
            right: '$x^3 + 0x^2 + 0x - 8$',
          },
          {
            title: 'Remainder written without the divisor',
            wrong: '$2x^2 - x - 3 + 12$',
            right: '$2x^2 - x - 3 + \\frac{12}{x + 2}$',
          },
        ],
        related: ['synthetic-division', 'remainder-theorem', 'find-all-roots'],
        builtOn: [
          { label: 'Polynomial long division (lesson)', url: ruleUrl('polynomials.long-division') },
          { label: 'Remainder theorem', url: ruleUrl('polynomials.remainder-theorem') },
        ],
      },
    },
    {
      id: 'synthetic-division',
      slug: 'synthetic-division',
      name: 'How to use synthetic division',
      description: 'Divide by $x - r$ with coefficients only: bring down, multiply by $r$, add, repeat.',
      uses: ['division by x − r'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Synthetic Division (Step by Step) | Learn Math Class',
        description: 'Divide by x − r with synthetic division: list the coefficients with zeros, bring down, multiply by r, add, repeat; the last number is the remainder.',
        keywords: ['synthetic division', 'how to do synthetic division', 'synthetic division examples', 'divide by x - r'],
      },
      page: {
        h1: 'How to Use Synthetic Division',
        lead:
          'Synthetic division is long division by $x - r$ with the variables left out. Work with the coefficients only: bring down, multiply by $r$, add, and repeat. The last number is the remainder.',
        recognize:
          'Division by a linear factor $x - r$: $(2x^3 + 3x^2 - 5x + 6) \\div (x + 2)$, testing a possible root, evaluating $f(r)$ quickly. For $x + 2$ use $r = -2$. Not for quadratic divisors.',
        recognizeNote: `The lesson section is ${link('polynomials.synthetic-division', 'Synthetic Division')}; it is also how [rational roots](!${HUB}/rational-root-test) are tested.`,
        steps: {
          traceLabel: 'On $(2x^3 + 3x^2 - 5x + 6) \\div (x + 2)$',
          items: [
            {
              title: 'Find r from the divisor.',
              body: '$x - r = 0$: for $x + 2$, $r = -2$.',
              state: '$r = -2$',
            },
            {
              title: 'Write the coefficients in descending order, with 0 for gaps.',
              body: '',
              state: '$2,\\ 3,\\ -5,\\ 6$',
            },
            {
              title: 'Bring down the first coefficient.',
              body: '',
              state: '$2$',
            },
            {
              title: 'Multiply by r, add to the next column; repeat to the end.',
              body: '',
              state: '$2\\cdot(-2) = -4$, $3 - 4 = -1$; $\\;-1\\cdot(-2) = 2$, $-5 + 2 = -3$; $\\;-3\\cdot(-2) = 6$, $6 + 6 = 12$',
            },
            {
              title: 'Read off quotient and remainder.',
              body: `The bottom row minus its last number gives the quotient, one degree lower; the last number is the remainder, equal to $f(r)$ (${link('polynomials.remainder-theorem', 'remainder theorem')}).`,
              state: 'quotient $2x^2 - x - 3$, remainder $12$',
            },
          ],
        },
        examples: [
          {
            title: 'remainder 0',
            badge: 'a factor',
            lines: [
              { math: '$(x^3 - 7x + 6) \\div (x - 1)$: coefficients $1, 0, -7, 6$', why: 'zero for $x^2$' },
              { math: 'bottom row $1, 1, -6, 0$: quotient $x^2 + x - 6$, remainder $0$', why: '$x - 1$ is a factor', answer: true },
            ],
          },
          {
            title: 'many gaps',
            badge: 'placeholders',
            lines: [
              { math: '$(x^4 - 1) \\div (x - 1)$: coefficients $1, 0, 0, 0, -1$', why: '' },
              { math: '$x^3 + x^2 + x + 1$, remainder $0$', why: '', answer: true },
            ],
          },
          {
            title: 'divisor 2x − 1',
            badge: 'divide by the leading coefficient after',
            lines: [
              { math: '$(2x^2 + 3x - 2) \\div (2x - 1)$: use $r = \\tfrac{1}{2}$', why: 'bottom row $2, 4, 0$' },
              { math: 'quotient $\\frac{2x + 4}{2} = x + 2$', why: '$2x - 1 = 2(x - \\tfrac{1}{2})$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Write long division of $2x^3 + 3x^2 - 5x + 6$ by $x + 2$ in columns and cross out everything that repeats: the powers of $x$, the copied leading terms, the minus signs. What survives is the short row of numbers that synthetic division keeps.',
        },
        pitfalls: [
          {
            title: 'Wrong sign of r',
            wrong: '$r = 2$ for the divisor $x + 2$',
            right: '$x + 2 = x - (-2)$, so $r = -2$',
          },
          {
            title: 'Missing a zero placeholder',
            wrong: '$1, -7, 6$ for $x^3 - 7x + 6$',
            right: '$1, 0, -7, 6$',
          },
          {
            title: 'Using it for a quadratic divisor',
            wrong: 'synthetic division by $x^2 + 1$',
            right: `only for $x - r$; use [long division](!${HUB}/polynomial-long-division)`,
          },
        ],
        related: ['polynomial-long-division', 'remainder-theorem', 'rational-root-test'],
        builtOn: [
          { label: 'Synthetic division (lesson)', url: ruleUrl('polynomials.synthetic-division') },
          { label: 'Remainder theorem', url: ruleUrl('polynomials.remainder-theorem') },
          { label: 'Factor theorem', url: ruleUrl('polynomials.factor-theorem') },
        ],
      },
    },
    {
      id: 'remainder-theorem',
      slug: 'remainder-theorem',
      name: 'How to use the remainder and factor theorems',
      description: 'The remainder of $f(x) \\div (x - r)$ is $f(r)$; remainder 0 means $(x - r)$ is a factor.',
      uses: ['remainder theorem', 'factor theorem'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use the Remainder Theorem and the Factor Theorem | Learn Math Class',
        description: 'Use the remainder theorem: the remainder of f(x) ÷ (x − r) is f(r), so evaluate instead of dividing; f(r) = 0 means (x − r) is a factor. Find an unknown k too.',
        keywords: ['remainder theorem', 'factor theorem', 'find remainder without dividing', 'is x - r a factor', 'remainder theorem examples'],
      },
      page: {
        h1: 'How to Use the Remainder and Factor Theorems',
        lead:
          'Dividing $f(x)$ by $x - r$ leaves the remainder $f(r)$. So a remainder can be found by substituting instead of dividing, and $f(r) = 0$ says that $x - r$ divides $f$ exactly, which is the factor theorem.',
        recognize:
          '"Find the remainder when $f(x)$ is divided by $x - 3$", "is $x + 1$ a factor of …?", "find $k$ so that the remainder is $5$", "show that $x = 2$ is a root". Test: a division by a linear term where only the remainder or a yes/no is asked.',
        recognizeNote: `The theorems are the ${link('polynomials.remainder-theorem', 'remainder theorem')} and the ${link('polynomials.factor-theorem', 'factor theorem')}; the lesson explains ${link('lesson.polynomials.rules.remainder', 'why the remainder theorem works')}.`,
        steps: {
          traceLabel: 'On $f(x) = x^3 - 2x^2 + 4$ divided by $x - 3$',
          items: [
            {
              title: 'Read r from the divisor.',
              body: '$x - r$: for $x + 1$, $r = -1$.',
              state: '$r = 3$',
            },
            {
              title: 'Evaluate f(r).',
              body: 'Substitute carefully, with brackets around negative values.',
              state: '$f(3) = 27 - 18 + 4 = 13$',
            },
            {
              title: 'Read the result.',
              body: 'The value is the remainder. If it is $0$, $x - r$ is a factor and $r$ is a root.',
              state: 'remainder $13$; not a factor',
            },
            {
              title: 'To find a parameter, set f(r) equal to the required remainder.',
              body: 'Solve the resulting equation for the unknown coefficient.',
              state: 'not needed here',
            },
          ],
        },
        examples: [
          {
            title: 'is it a factor?',
            badge: 'factor theorem',
            lines: [
              { math: '$f(x) = x^3 + 2x^2 - x - 2$, test $x + 1$: $f(-1) = -1 + 2 + 1 - 2 = 0$', why: '' },
              { math: 'yes: $x + 1$ is a factor', why: '', answer: true },
            ],
          },
          {
            title: 'a high power',
            badge: 'no long division',
            lines: [
              { math: 'remainder of $(2x^4 - x + 1) \\div (x + 2)$: $f(-2) = 32 + 2 + 1$', why: '' },
              { math: '$35$', why: '', answer: true },
            ],
          },
          {
            title: 'find k',
            badge: 'solve for a coefficient',
            lines: [
              { math: '$x^3 + kx^2 - 4$ leaves remainder $5$ on division by $x - 1$: $1 + k - 4 = 5$', why: '' },
              { math: '$k = 8$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Write $f(x) = (x - r)\\,q(x) + R$ and put $x = r$: the first term vanishes, and $f(r) = R$. The remainder is the height of the graph above $x = r$; a factor is a place where that height is zero, a crossing of the axis.',
        },
        pitfalls: [
          {
            title: 'Wrong sign of r',
            wrong: 'dividing by $x + 2$, evaluating $f(2)$',
            right: '$f(-2)$',
          },
          {
            title: 'Brackets around negatives',
            wrong: '$f(-2) = 2\\cdot -2^4 \\ldots = -32$',
            right: '$2(-2)^4 = 32$',
          },
          {
            title: 'Treating the remainder as the quotient',
            wrong: '"$f(3) = 13$, so the quotient is $13$"',
            right: '$13$ is the remainder; the quotient needs division',
          },
        ],
        related: ['synthetic-division', 'rational-root-test', 'find-all-roots'],
        builtOn: [
          { label: 'Remainder theorem', url: ruleUrl('polynomials.remainder-theorem') },
          { label: 'Factor theorem', url: ruleUrl('polynomials.factor-theorem') },
          { label: 'Using the factor theorem (lesson)', url: ruleUrl('lesson.polynomials.rules.factor') },
        ],
      },
    },
    {
      id: 'rational-root-test',
      slug: 'rational-root-test',
      name: 'How to use the rational root test',
      description: 'List ±(factors of the constant)/(factors of the leading coefficient), then test them.',
      uses: ['rational root theorem', 'synthetic division'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use the Rational Root Test (Rational Zero Theorem) | Learn Math Class',
        description: 'Find rational roots: list p/q with p dividing the constant and q the leading coefficient, test candidates by synthetic division, divide out each root.',
        keywords: ['rational root test', 'rational root theorem', 'rational zero theorem', 'possible rational roots', 'rational root theorem examples'],
      },
      page: {
        h1: 'How to Use the Rational Root Test',
        lead:
          'If a polynomial with integer coefficients has a rational root $\\frac{p}{q}$ in lowest terms, then $p$ divides the constant term and $q$ divides the leading coefficient. That turns an infinite search into a short list to test.',
        recognize:
          '"List the possible rational roots", "find all rational zeros of …", or a cubic or higher with integer coefficients that does not factor by sight: $2x^3 - 3x^2 - 11x + 6$, $x^3 - 2x - 4$.',
        recognizeNote: `The theorem is the ${link('polynomials.rational-root-theorem', 'rational root theorem')}, with ${link('lesson.polynomials.rules.applying-rational-root', 'worked applications')} and ${link('lesson.polynomials.rules.descartes', 'Descartes’ rule of signs')} to shorten the list.`,
        steps: {
          traceLabel: 'On $2x^3 - 3x^2 - 11x + 6$',
          items: [
            {
              title: 'List p: the factors of the constant term.',
              body: 'Both signs.',
              state: '$p = \\pm 1, \\pm 2, \\pm 3, \\pm 6$',
            },
            {
              title: 'List q: the factors of the leading coefficient, and form p/q.',
              body: 'Remove duplicates.',
              state: '$q = 1, 2$: candidates $\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm\\tfrac{1}{2}, \\pm\\tfrac{3}{2}$',
            },
            {
              title: 'Test candidates.',
              body: `Substitute, or use [synthetic division](!${HUB}/synthetic-division); a remainder of $0$ means a root.`,
              state: '$f(1) = -6$, $f(-1) = 12$, $f(3) = 54 - 27 - 33 + 6 = 0$ ✓',
            },
            {
              title: 'Divide out the root and continue on the quotient.',
              body: 'Each root found lowers the degree by one.',
              state: '$(x - 3)(2x^2 + 3x - 2) = (x - 3)(2x - 1)(x + 2)$: roots $3, \\tfrac{1}{2}, -2$',
            },
          ],
        },
        examples: [
          {
            title: 'one rational root',
            badge: 'quotient has no real roots',
            lines: [
              { math: '$x^3 - 2x - 4$: candidates $\\pm 1, \\pm 2, \\pm 4$; $f(2) = 0$', why: '' },
              { math: '$(x - 2)(x^2 + 2x + 2)$: the only real root is $2$', why: '$\\Delta = 4 - 8 < 0$', answer: true },
            ],
          },
          {
            title: 'no rational roots',
            badge: 'the test can come up empty',
            lines: [
              { math: '$x^3 - 3x + 1$: candidates $\\pm 1$; $f(1) = -1$, $f(-1) = 3$', why: '' },
              { math: 'no rational roots (its three real roots are irrational)', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'fractional root',
            lines: [
              { math: '$2x^3 - 3x^2 - 11x + 6$: $x = 3$ works', why: 'divide: $2x^2 + 3x - 2$' },
              { math: 'roots $3, \\tfrac{1}{2}, -2$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Substitute $x = \\frac{p}{q}$ and clear denominators: every term but the last contains $p$, and every term but the first contains $q$. For the sum to be zero, $p$ must divide the constant and $q$ the leading coefficient. That divisibility is the whole theorem.',
        },
        pitfalls: [
          {
            title: 'Swapping p and q',
            wrong: 'candidates factors of $2$ over factors of $6$',
            right: '$p$ from the constant term, $q$ from the leading coefficient',
          },
          {
            title: 'Forgetting negative candidates',
            wrong: 'testing only $1, 2, 3, 6$',
            right: 'test $\\pm$ each',
          },
          {
            title: 'Concluding "no roots" from no rational roots',
            wrong: '$x^3 - 3x + 1$ has no roots',
            right: 'it has three irrational roots; the test only finds rational ones',
          },
        ],
        related: ['find-all-roots', 'synthetic-division', 'remainder-theorem'],
        builtOn: [
          { label: 'Rational root theorem', url: ruleUrl('polynomials.rational-root-theorem') },
          { label: 'Applying the theorem (lesson)', url: ruleUrl('lesson.polynomials.rules.applying-rational-root') },
          { label: 'Synthetic division', url: ruleUrl('polynomials.synthetic-division') },
        ],
      },
    },
    {
      id: 'find-all-roots',
      slug: 'find-all-roots',
      name: 'How to find all roots of a polynomial',
      description: 'Rational roots first, divide them out, finish with the quadratic formula; count multiplicities.',
      uses: ['rational root test', 'synthetic division', 'quadratic formula'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find All Roots of a Polynomial (Real and Complex) | Learn Math Class',
        description: 'Find every root of a polynomial: count them by degree, find rational roots, divide each out, solve the last quadratic (complex roots too), note multiplicity.',
        keywords: ['find all roots of a polynomial', 'find all zeros', 'complex roots of a polynomial', 'multiplicity of roots', 'fundamental theorem of algebra'],
      },
      page: {
        h1: 'How to Find All Roots of a Polynomial',
        lead:
          'A polynomial of degree $n$ has exactly $n$ roots, counted with multiplicity and including complex ones. Peel off rational roots one by one with the rational root test and synthetic division, and solve whatever quadratic is left with the formula.',
        recognize:
          '"Find all zeros", "find all real and complex roots", "factor completely over the complex numbers", "state each root with its multiplicity": $x^4 - x^3 - 7x^2 + x + 6$, $x^3 - 1$, $x^3 - 3x + 2$.',
        recognizeNote: `The count comes from the ${link('lesson.polynomials.rules.fta', 'Fundamental Theorem of Algebra')}; multiplicity and real versus complex roots are in the ${link('lesson.polynomials.roots', 'roots lesson')}.`,
        steps: {
          traceLabel: 'On $x^4 - x^3 - 7x^2 + x + 6$',
          items: [
            {
              title: 'Count the roots.',
              body: `Degree $n$ gives $n$ roots with multiplicity (${link('lesson.polynomials.roots.number-of-roots', 'number of roots')}).`,
              state: 'degree $4$: four roots',
            },
            {
              title: 'Find a rational root.',
              body: `[Rational root test](!${HUB}/rational-root-test).`,
              state: '$f(1) = 1 - 1 - 7 + 1 + 6 = 0$',
            },
            {
              title: 'Divide it out and repeat on the quotient.',
              body: `[Synthetic division](!${HUB}/synthetic-division); the same root may work again (multiplicity).`,
              state: '$x^3 - 7x - 6$; $\\;x = -1$ works: $x^2 - x - 6$',
            },
            {
              title: 'Solve the final quadratic.',
              body: `Factor, or the [quadratic formula](!/algebra/equations/methods/quadratic-formula) for irrational or complex roots.`,
              state: '$(x - 3)(x + 2)$',
            },
            {
              title: 'List every root with its multiplicity and check the count.',
              body: 'Complex roots of real polynomials come in conjugate pairs.',
              state: '$1, -1, 3, -2$: four roots ✓',
            },
          ],
        },
        examples: [
          {
            title: 'complex roots',
            badge: 'conjugate pair',
            lines: [
              { math: '$x^3 - 1 = (x - 1)(x^2 + x + 1)$', why: 'difference of cubes' },
              { math: '$x = 1,\\ \\frac{-1 \\pm i\\sqrt{3}}{2}$', why: 'quadratic formula, $\\Delta = -3$', answer: true },
            ],
          },
          {
            title: 'a repeated root',
            badge: 'multiplicity 2',
            lines: [
              { math: '$x^3 - 3x + 2$: $f(1) = 0$, quotient $x^2 + x - 2 = (x + 2)(x - 1)$', why: '$1$ appears again' },
              { math: '$x = 1$ (multiplicity $2$), $x = -2$', why: 'three roots counted', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'four real roots',
            lines: [
              { math: '$x^4 - x^3 - 7x^2 + x + 6 = (x - 1)(x + 1)(x - 3)(x + 2)$', why: '' },
              { math: '$x = 1, -1, 3, -2$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Real roots are where the graph meets the $x$-axis: crossing at a simple root, touching and turning back at a double one. Complex roots leave no mark on the real graph at all, which is why counting by degree is the only way to know when you are done.',
        },
        pitfalls: [
          {
            title: 'Stopping at the real roots',
            wrong: '$x^3 - 1$ has one root, $1$',
            right: 'three roots: $1$ and two complex ones',
          },
          {
            title: 'Missing a repeated root',
            wrong: '$x^3 - 3x + 2$: roots $1$ and $-2$, "only two"',
            right: '$1$ is a double root; test a found root again on the quotient',
          },
          {
            title: 'Dividing the original instead of the quotient',
            wrong: 'testing the second root on the degree-4 polynomial again',
            right: 'continue on the quotient; it is one degree lower',
          },
        ],
        related: ['rational-root-test', 'synthetic-division', 'graph-polynomials'],
        builtOn: [
          { label: 'Fundamental Theorem of Algebra (lesson)', url: ruleUrl('lesson.polynomials.rules.fta') },
          { label: 'Rational root theorem', url: ruleUrl('polynomials.rational-root-theorem') },
          { label: 'Real vs complex roots (lesson)', url: ruleUrl('lesson.polynomials.roots.real-complex') },
        ],
      },
    },
    {
      id: 'graph-polynomials',
      slug: 'graph-polynomials',
      name: 'How to graph a polynomial',
      description: 'End behaviour from the leading term, intercepts, cross or touch at each root, then sketch.',
      uses: ['end behaviour', 'roots and multiplicity'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Graph a Polynomial (End Behaviour, Roots, Multiplicity) | Learn Math Class',
        description: 'Sketch a polynomial: read the end behaviour from the leading term, find the intercepts, cross at odd and touch at even multiplicity, join the points.',
        keywords: ['how to graph polynomials', 'end behavior of polynomials', 'multiplicity cross or touch', 'sketch a polynomial', 'graphing polynomials examples'],
      },
      page: {
        h1: 'How to Graph a Polynomial',
        lead:
          'A polynomial sketch needs four facts: where the ends point (from the leading term), where it crosses the axes, how it behaves at each root (cross or bounce), and at most $n - 1$ turning points in between.',
        recognize:
          '"Sketch the graph of $f(x) = (x + 2)(x - 1)^2$", "describe the end behaviour", "which graph matches this polynomial?". Test: a polynomial, preferably factored, and a picture is wanted.',
        recognizeNote: `The lesson sections are ${link('lesson.polynomials.graphing.end-behavior', 'end behavior')}, ${link('lesson.polynomials.graphing.intercepts', 'intercepts')}, ${link('lesson.polynomials.graphing.behavior-at-roots', 'behavior at roots')} and the ${link('lesson.polynomials.graphing.strategy', 'sketching strategy')}.`,
        steps: {
          traceLabel: 'On $f(x) = (x + 2)(x - 1)^2$',
          items: [
            {
              title: 'End behaviour from the leading term.',
              body: 'Odd degree: ends point opposite ways. Even degree: same way. A positive leading coefficient makes the right end point up.',
              state: 'leading term $x^3$: down on the left, up on the right',
            },
            {
              title: 'x-intercepts and their multiplicities.',
              body: `[Factor completely](!${HUB}/find-all-roots).`,
              state: '$x = -2$ (multiplicity $1$), $x = 1$ (multiplicity $2$)',
            },
            {
              title: 'Cross or touch at each root.',
              body: 'Odd multiplicity: the graph crosses. Even: it touches and turns back.',
              state: 'crosses at $-2$, touches at $1$',
            },
            {
              title: 'y-intercept.',
              body: 'Evaluate $f(0)$.',
              state: '$f(0) = 2\\cdot 1 = 2$',
            },
            {
              title: 'Sketch, using at most n − 1 turning points.',
              body: 'Come up from the left, cross at $-2$, rise through $(0, 2)$, turn, come down to touch $1$, then rise.',
              state: 'two turning points, the most a cubic can have',
            },
          ],
        },
        examples: [
          {
            title: 'negative leading coefficient',
            badge: 'odd degree',
            lines: [
              { math: '$f(x) = -x^3 + 4x = -x(x - 2)(x + 2)$', why: 'up on the left, down on the right' },
              { math: 'crosses at $-2, 0, 2$; $y$-intercept $0$', why: '', answer: true },
            ],
          },
          {
            title: 'even degree with a double root',
            badge: 'touch at 0',
            lines: [
              { math: '$f(x) = x^4 - 4x^2 = x^2(x - 2)(x + 2)$', why: 'both ends up' },
              { math: 'crosses at $\\pm 2$, touches at $0$; a W shape', why: '', answer: true },
            ],
          },
          {
            title: 'the trace',
            badge: 'cubic',
            lines: [
              { math: '$f(x) = (x + 2)(x - 1)^2$', why: '' },
              { math: 'up from $-\\infty$, cross $-2$, peak, touch $1$, rise', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Far from the origin, the leading term outweighs everything else, so $(x + 2)(x - 1)^2$ looks like $x^3$ at both ends. Near a root, the factor $(x - r)^k$ takes over: an odd power changes sign there and the graph crosses, an even power does not and the graph bounces.',
        },
        pitfalls: [
          {
            title: 'Crossing at an even root',
            wrong: 'the graph passes through $(1, 0)$ to the other side',
            right: 'multiplicity $2$: it touches and turns back',
          },
          {
            title: 'End behaviour from the first written term',
            wrong: '$4x - x^3$: "positive, so up on the right"',
            right: 'the leading term is $-x^3$: down on the right',
          },
          {
            title: 'Too many turning points',
            wrong: 'a cubic drawn with three bumps',
            right: 'degree $n$ allows at most $n - 1$ turning points',
          },
        ],
        related: ['find-all-roots', 'rational-root-test', 'which-factoring-method'],
        builtOn: [
          { label: 'End behavior (lesson)', url: ruleUrl('lesson.polynomials.graphing.end-behavior') },
          { label: 'Behavior at roots (lesson)', url: ruleUrl('lesson.polynomials.graphing.behavior-at-roots') },
          { label: 'Turning points (lesson)', url: ruleUrl('lesson.polynomials.graphing.turning-points') },
        ],
      },
    },

    // ═══ III. Strategy ══════════════════════════════════════════════════
    {
      id: 'which-factoring-method',
      slug: 'which-factoring-method',
      name: 'Which factoring method should I use?',
      description: 'A decision tree: GCF first, then count the terms and look for the pattern.',
      uses: 'leads to 6 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Factoring Method to Use? Decision Tree | Learn Math Class',
        description: 'Choose a factoring method: take out the GCF, then count the terms: two (squares or cubes), three (trinomial), four (grouping), higher degree (rational roots).',
        keywords: ['which factoring method', 'factoring strategy', 'how to factor any polynomial', 'factoring decision tree'],
      },
      page: {
        h1: 'Which Factoring Method Should I Use?',
        lead:
          'Always start with the greatest common factor, then let the number of terms choose the method. After each step, look at every factor again: factoring is finished only when nothing factors further.',
        tree: {
          rootId: 'gcf',
          svgW: 1000,
          nodes: {
            gcf: {
              type: 'q',
              text: 'Do all terms share a factor?',
              children: [
                { label: 'yes', to: 'gcfLeaf' },
                { label: 'no', to: 'terms' },
              ],
            },
            terms: {
              type: 'q',
              text: 'How many terms?',
              children: [
                { label: '2', to: 'two' },
                { label: '3', to: 'trinomial' },
                { label: '4', to: 'grouping' },
                { label: 'degree 3+, no pattern', to: 'rational' },
              ],
            },
            two: {
              type: 'q',
              text: 'Squares or cubes?',
              children: [
                { label: 'a² − b²', to: 'squares' },
                { label: 'a³ ± b³', to: 'cubes' },
              ],
            },
            gcfLeaf: { type: 'leaf', to: 'factor-gcf', short: 'Factor out the GCF' },
            squares: { type: 'leaf', to: 'difference-of-squares', short: 'Difference of squares' },
            cubes: { type: 'leaf', to: 'sum-difference-of-cubes', short: 'Sum or difference of cubes' },
            trinomial: { type: 'leaf', to: 'factor-trinomials', short: 'Factor the trinomial' },
            grouping: { type: 'leaf', to: 'factor-by-grouping', short: 'Factor by grouping' },
            rational: { type: 'leaf', to: 'rational-root-test', short: 'Rational root test' },
          },
          branches: [
            {
              condition: 'Every term shares a number, a variable or a bracket.',
              answer: `[Factor out the GCF](!${HUB}/factor-gcf), then come back to the top with what is left in the bracket.`,
            },
            {
              condition: 'Two terms, both perfect squares, with a minus between them.',
              answer: `[Difference of squares](!${HUB}/difference-of-squares): $(a - b)(a + b)$ (${link('identities.difference-of-squares', 'identity')}). A sum of squares does not factor.`,
            },
            {
              condition: 'Two terms, both perfect cubes.',
              answer: `[Sum or difference of cubes](!${HUB}/sum-difference-of-cubes) (${link('identities.sum-of-cubes', 'sum')}, ${link('identities.difference-of-cubes', 'difference')}).`,
            },
            {
              condition: 'Three terms of the form $ax^2 + bx + c$.',
              answer: `[Factor the trinomial](!${HUB}/factor-trinomials): product and sum, or the ac method.`,
            },
            {
              condition: 'Four terms.',
              answer: `[Factor by grouping](!${HUB}/factor-by-grouping) in pairs.`,
            },
            {
              condition: 'Degree $3$ or more with no visible pattern.',
              answer: `Find a root with the [rational root test](!${HUB}/rational-root-test) and divide it out (${link('polynomials.factor-theorem', 'factor theorem')}).`,
            },
          ],
        },
        related: ['factor-gcf', 'factor-trinomials', 'rational-root-test'],
        builtOn: [
          { label: 'Factoring strategy (lesson)', url: ruleUrl('polynomials.factoring-strategy') },
          { label: 'Factoring polynomials (lesson)', url: ruleUrl('lesson.polynomials.factoring') },
          { label: 'Factor theorem', url: ruleUrl('polynomials.factor-theorem') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Factoring, dividing, roots, graphs', blurb: 'Composite · each opens its own page' },
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
      { url: '/algebra/inequalities/methods', label: 'Inequalities' },
    ],
  },
};

export default polynomialsMethods;
