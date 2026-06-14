/* ============================================================================
   polynomialCalculatorData.js
   Default operation definitions for PolynomialCalculator. Import and use
   as-is, or pass `operations={...}` as a prop to override individual
   fields. Override merge is two levels deep: per-operation fields win,
   and nested `result`/`about` objects are also field-merged.

   Each operation supports these fields:
     - label        : button label in the operations strip                (required)
     - title        : page H1                                              (required)
     - sub          : tooltip body text                                    (required)
     - learnMoreHref: tooltip Learn-more link target — render conditional  (optional)
     - mode         : 'single' | 'dual' | 'multi'                         (required)
     - symbol       : LaTeX operator symbol between rows                   (when multi/dual)
     - inputHeader  : input card header text                               (required)
     - inputLabels  : [topLabel, bottomLabel] for dual mode                (dual only)
     - actionLabel  : primary calculate-button label                       (required)
     - hasGraph     : whether to render the graph icon button              (optional)
     - demoInputs   : starter values per slot                              (required)
     - result       : { primaryLabel, primaryMath, extras?, identity?, meta? }
     - steps        : [{ title, math, note? }]                             (optional)
     - about        : { text, formula? }                                   (optional)
     - pitfalls     : [string]                                             (optional)
     - related      : [{ label, href? }]                                   (optional)
============================================================================ */

export const DEFAULT_OPERATION_ORDER = [
  'add', 'subtract', 'multiply',
  'long_div', 'synth_div',
  'factor', 'zeros', 'simplify',
];

export const DEFAULT_OPERATIONS = {
  add: {
    label: 'Add',
    title: 'Adding polynomials',
    sub: 'Sum two or more polynomials, combining like terms across matching degrees.',
    learnMoreHref: '/algebra/learn/adding-polynomials',
    mode: 'multi',
    symbol: '+',
    inputHeader: 'Polynomials to add',
    actionLabel: 'Add',
    hasGraph: false,
    demoInputs: ['2x^2 + 3x - 1', 'x^2 - 5x + 4'],
    result: {
      primaryLabel: 'Sum',
      primaryMath: '3x^2 - 2x + 3',
      meta: [
        { label: 'Degree', value: '2' },
        { label: 'Leading', value: '3' },
        { label: 'Constant', value: '3' },
      ],
    },
    steps: [
      { title: 'Line up by degree', math: '$2x^2 + 3x - 1$ + $x^2 - 5x + 4$', note: 'Group every term with the same power of $x$ together.' },
      { title: 'Sum coefficients of $x^2$', math: '$(2 + 1)x^2 = 3x^2$', note: 'Two and one — straightforward.' },
      { title: 'Sum coefficients of $x$', math: '$(3 + (-5))x = -2x$', note: 'The negative sign comes through with the term.' },
      { title: 'Sum the constants', math: '$(-1) + 4 = 3$' },
      { title: 'Write in standard form', math: '$3x^2 - 2x + 3$', note: 'Highest degree first, descending.' },
    ],
    about: {
      text: 'Addition of polynomials is term-by-term. Match exponents, sum coefficients, drop any zero terms. The result&apos;s degree is at most the max of the inputs&apos; degrees.',
      formula: '\\deg(P_1 + P_2) \\le \\max(\\deg P_1, \\deg P_2)',
    },
    pitfalls: [
      'Adding unlike terms (e.g. treating $x^2$ and $x$ as the same)',
      'Dropping a sign when one term is negative',
      'Forgetting placeholder zeros when one polynomial skips a degree',
    ],
    // related: [
    //   { label: 'Subtract polynomials', href: '/algebra/calculators/polynomial-subtract' },
    //   { label: 'Simplify polynomial',  href: '/algebra/calculators/polynomial-simplify' },
    //   { label: 'Find degree' },
    // ],
  },

  subtract: {
    label: 'Subtract',
    title: 'Subtracting polynomials',
    sub: 'Subtract polynomials in order, distributing the minus sign across every term.',
    learnMoreHref: '/algebra/learn/subtracting-polynomials',
    mode: 'multi',
    symbol: '-',
    inputHeader: 'Polynomials to subtract',
    actionLabel: 'Subtract',
    hasGraph: false,
    demoInputs: ['3x^2 + 2x - 5', 'x^2 - 4x + 1'],
    result: {
      primaryLabel: 'Difference',
      primaryMath: '2x^2 + 6x - 6',
      meta: [
        { label: 'Degree', value: '2' },
        { label: 'Leading', value: '2' },
        { label: 'Constant', value: '−6' },
      ],
    },
    steps: [
      { title: 'Distribute the minus over $P_2$', math: '$3x^2 + 2x - 5 - (x^2 - 4x + 1)$', note: 'Every sign in $P_2$ flips.' },
      { title: 'Rewrite without the parentheses', math: '$3x^2 + 2x - 5 - x^2 + 4x - 1$', note: 'Now it&apos;s pure addition.' },
      { title: 'Group like terms', math: '$(3 - 1)x^2 + (2 + 4)x + (-5 - 1)$' },
      { title: 'Simplify each coefficient', math: '$2x^2 + 6x - 6$', note: 'Final answer in standard form.' },
    ],
    about: {
      text: 'Subtraction is addition of the additive inverse. Flip every sign in the subtrahend, then add. Skipping the parenthesis-distribution step is the source of most sign errors.',
      formula: 'P_1 - P_2 = P_1 + (-P_2)',
    },
    pitfalls: [
      'Only negating the leading term of $P_2$ instead of every term',
      'Forgetting that subtraction is not commutative',
      'Combining $x^2$ and $-x^2$ as $-x^4$ (powers don&apos;t subtract)',
    ],
    // related: [
    //   { label: 'Add polynomials',      href: '/algebra/calculators/polynomial-add' },
    //   { label: 'Simplify polynomial',  href: '/algebra/calculators/polynomial-simplify' },
    //   { label: 'Multiply polynomials', href: '/algebra/calculators/polynomial-multiply' },
    // ],
  },

  multiply: {
    label: 'Multiply',
    title: 'Multiplying polynomials',
    sub: 'Multiply two or more polynomials and see each pairwise expansion, term-by-term, until the final product is fully simplified.',
    learnMoreHref: '/algebra/learn/multiplying-polynomials',
    mode: 'multi',
    symbol: '\\times',
    inputHeader: 'Polynomials to multiply',
    actionLabel: 'Multiply',
    hasGraph: true,
    demoInputs: ['x + 2', 'x - 3', '2x + 1'],
    result: {
      primaryLabel: 'Product',
      primaryMath: '2x^3 - 3x^2 - 13x - 6',
      meta: [
        { label: 'Degree', value: '3' },
        { label: 'Leading', value: '2' },
        { label: 'Constant', value: '−6' },
      ],
    },
    steps: [
      { title: 'Set up the first pair', math: '$(x + 2)(x - 3)$', note: 'Start with the leftmost two polynomials.' },
      { title: 'Apply FOIL', math: '$x \\cdot x + x \\cdot (-3) + 2 \\cdot x + 2 \\cdot (-3)$', note: 'First, Outer, Inner, Last — each term of the first across each term of the second.' },
      { title: 'Simplify the first product', math: '$x^2 - x - 6$', note: 'Combine like terms: $-3x + 2x = -x$.' },
      { title: 'Bring in $P_3$', math: '$(x^2 - x - 6)(2x + 1)$', note: 'Distribute every trinomial term across every binomial term.' },
      { title: 'Distribute term by term', math: '$2x^3 + x^2 - 2x^2 - x - 12x - 6$', note: 'Six products total — three from each term of the trinomial.' },
      { title: 'Group by degree', math: '$2x^3 + (1 - 2)x^2 + (-1 - 12)x - 6$', note: 'Collect coefficients of matching powers.' },
      { title: 'Combine like terms', math: '$2x^3 - 3x^2 - 13x - 6$', note: 'Now we have the final simplified cubic.' },
    ],
    about: {
      text: 'When multiplying three or more polynomials, expand them pairwise from the left. Multiplication is associative, so any grouping works — but left-to-right keeps intermediate degrees small.',
      formula: 'P_1 \\cdot P_2 \\cdot P_3 = ((P_1 \\cdot P_2) \\cdot P_3)',
    },
    pitfalls: [
      'Forgetting to distribute the sign with a negative term',
      'Mismatching exponents when adding like terms ($x^2$ and $x$ are not alike)',
      'Dropping the constant term — every term in $P_1$ multiplies <em>every</em> term in $P_2$',
    ],
    // related: [
    //   { label: 'Factor result',         href: '/algebra/calculators/polynomial-factor' },
    //   { label: 'Find zeros of result',  href: '/algebra/calculators/polynomial-zeros' },
    //   { label: 'FOIL method' },
    // ],
  },

  long_div: {
    label: 'Long division',
    title: 'Polynomial long division',
    sub: 'Divide one polynomial by another and see every line of the work — leading-term division, multiply-and-subtract, bring-down — until the remainder degree is less than the divisor&apos;s.',
    learnMoreHref: '/algebra/learn/polynomial-long-division',
    mode: 'dual',
    symbol: '\\div',
    inputHeader: 'Divide polynomial',
    inputLabels: ['Dividend', 'Divisor'],
    actionLabel: 'Divide',
    hasGraph: true,
    demoInputs: ['x^3 - 2x^2 + 4', 'x - 1'],
    result: {
      primaryLabel: 'Quotient',
      primaryMath: 'x^2 - x - 1',
      extras: [{ label: 'Remainder', math: '3' }],
      identity: '\\dfrac{x^3 - 2x^2 + 4}{x - 1} = x^2 - x - 1 + \\dfrac{3}{x - 1}',
      meta: [
        { label: 'Quotient degree', value: '2' },
        { label: 'Remainder degree', value: '0' },
      ],
    },
    steps: [
      { title: 'Insert placeholder zeros', math: '$x^3 - 2x^2 + 0x + 4$', note: 'Make sure every degree from the top down has a coefficient. Missing terms break the line-up.' },
      { title: 'Divide leading terms', math: '$\\dfrac{x^3}{x} = x^2$', note: 'First term of the quotient.' },
      { title: 'Multiply and subtract', math: '$x^2(x - 1) = x^3 - x^2$, so $(x^3 - 2x^2) - (x^3 - x^2) = -x^2$', note: 'Bring down the next term.' },
      { title: 'Divide leading terms again', math: '$\\dfrac{-x^2}{x} = -x$', note: 'Second term of the quotient.' },
      { title: 'Multiply and subtract', math: '$-x(x - 1) = -x^2 + x$, so result is $-x$', note: 'Bring down the next term.' },
      { title: 'Final leading-term division', math: '$\\dfrac{-x}{x} = -1$', note: 'Third term of the quotient.' },
      { title: 'Multiply, subtract, stop', math: '$-1(x - 1) = -x + 1$, remainder $3$', note: 'Remainder degree (0) is less than divisor degree (1), so we stop.' },
    ],
    about: {
      text: 'Long division of polynomials mirrors long division of integers. The quotient&apos;s degree is $\\deg P_1 - \\deg P_2$ when the leading coefficients divide cleanly; otherwise you carry a remainder.',
      formula: 'P_1 = P_2 \\cdot Q + R, \\quad \\deg R < \\deg P_2',
    },
    pitfalls: [
      'Forgetting placeholder zeros for missing degrees',
      'Subtracting instead of adding when you bring down terms',
      'Stopping early — continue until the remainder degree drops below the divisor&apos;s',
    ],
    // related: [
    //   { label: 'Synthetic division',  href: '/algebra/calculators/polynomial-synthetic-division' },
    //   { label: 'Factor polynomial',   href: '/algebra/calculators/polynomial-factor' },
    //   { label: 'Remainder theorem' },
    // ],
  },

  synth_div: {
    label: 'Synthetic',
    title: 'Synthetic division',
    sub: 'A faster division algorithm when the divisor is linear, $(x - c)$. Works only when the divisor has degree 1 and leading coefficient 1.',
    learnMoreHref: '/algebra/learn/synthetic-division',
    mode: 'dual',
    symbol: '\\div',
    inputHeader: 'Synthetic division',
    inputLabels: ['Dividend', 'Divisor (x − c)'],
    actionLabel: 'Divide',
    hasGraph: true,
    demoInputs: ['x^3 - 2x^2 + 4', 'x - 1'],
    result: {
      primaryLabel: 'Quotient',
      primaryMath: 'x^2 - x - 1',
      extras: [{ label: 'Remainder', math: '3' }],
      meta: [
        { label: 'Quotient degree', value: '2' },
      ],
    },
    steps: [
      { title: 'Identify $c$', math: 'Divisor is $x - 1$, so $c = 1$', note: 'Sign flips: $(x - c)$ pattern.' },
      { title: 'Write the coefficients', math: '$1, -2, 0, 4$', note: 'Including placeholder zero for the missing $x$ term.' },
      { title: 'Bring down the first', math: '$1$' },
      { title: 'Multiply by $c$, add to next', math: '$1 \\cdot 1 = 1$, then $-2 + 1 = -1$' },
      { title: 'Repeat for the next column', math: '$-1 \\cdot 1 = -1$, then $0 + (-1) = -1$' },
      { title: 'Last column gives the remainder', math: '$-1 \\cdot 1 = -1$, then $4 + (-1) = 3$', note: 'Final value is the remainder.' },
      { title: 'Read off the quotient', math: 'Coefficients $1, -1, -1$ → $x^2 - x - 1$', note: 'Degree drops by one from the dividend.' },
    ],
    about: {
      text: 'Synthetic division is a shortcut for dividing by a linear factor. It only works when the divisor is monic and linear; for higher-degree or non-monic divisors, fall back to long division.',
      formula: 'P(x) \\div (x - c): \\text{ remainder } = P(c)',
    },
    pitfalls: [
      'Using synthetic division with a non-linear divisor — it doesn&apos;t work',
      'Sign of $c$: divisor $x + 2$ means $c = -2$, not $+2$',
      'Missing placeholder zeros in the coefficient list',
    ],
    // related: [
    //   { label: 'Long division',     href: '/algebra/calculators/polynomial-long-division' },
    //   { label: 'Remainder theorem' },
    //   { label: 'Factor polynomial', href: '/algebra/calculators/polynomial-factor' },
    // ],
  },

  factor: {
    label: 'Factor',
    title: 'Factoring polynomials',
    sub: 'Factor a polynomial into its irreducible components, trying GCF, grouping, special forms, and rational roots in sequence.',
    learnMoreHref: '/algebra/learn/factoring-polynomials',
    mode: 'single',
    symbol: null,
    inputHeader: 'Polynomial to factor',
    actionLabel: 'Factor',
    hasGraph: true,
    demoInputs: ['x^3 - 2x^2 - x + 2'],
    result: {
      primaryLabel: 'Factored form',
      primaryMath: '(x - 1)(x + 1)(x - 2)',
      meta: [
        { label: 'Roots', value: '1, −1, 2' },
        { label: 'Degree', value: '3' },
      ],
    },
    steps: [
      { title: 'Check for a GCF', math: '$x^3 - 2x^2 - x + 2$', note: 'No common factor across all terms — move on.' },
      { title: 'Try grouping', math: '$x^2(x - 2) - 1(x - 2)$', note: 'Group first two and last two, factor each pair.' },
      { title: 'Factor out the common binomial', math: '$(x - 2)(x^2 - 1)$', note: 'Both pairs share $(x - 2)$.' },
      { title: 'Apply difference of squares', math: '$x^2 - 1 = (x - 1)(x + 1)$', note: 'A standard special form.' },
      { title: 'Final factored form', math: '$(x - 1)(x + 1)(x - 2)$', note: 'Three linear factors — the polynomial has three real roots.' },
    ],
    about: {
      text: 'Factoring strategies, in order of preference: greatest common factor, grouping, special forms (difference of squares, sum/difference of cubes, perfect square trinomial), then rational root theorem for higher degrees.',
      formula: '\\text{GCF} \\to \\text{Grouping} \\to \\text{Special forms} \\to \\text{Rational roots}',
    },
    pitfalls: [
      'Stopping after one factoring step when further factoring is possible',
      'Forgetting to factor out a GCF before applying other methods',
      'Confusing sum of squares ($x^2 + 1$, irreducible over reals) with difference of squares',
    ],
    // related: [
    //   { label: 'Find zeros',           href: '/algebra/calculators/polynomial-zeros' },
    //   { label: 'Polynomial long division', href: '/algebra/calculators/polynomial-long-division' },
    //   { label: 'Rational root theorem' },
    // ],
  },

  zeros: {
    label: 'Find zeros',
    title: 'Find polynomial zeros',
    sub: 'Find every real and complex root of a polynomial, including multiplicities.',
    learnMoreHref: '/algebra/learn/polynomial-zeros',
    mode: 'single',
    symbol: null,
    inputHeader: 'Polynomial',
    actionLabel: 'Find zeros',
    hasGraph: true,
    demoInputs: ['x^3 - 2x^2 - x + 2'],
    result: {
      primaryLabel: 'Zeros',
      primaryMath: 'x = 1, \\; x = -1, \\; x = 2',
      meta: [
        { label: 'Real roots', value: '3' },
        { label: 'Complex roots', value: '0' },
      ],
    },
    steps: [
      { title: 'List rational root candidates', math: 'Candidates: $\\pm 1, \\pm 2$', note: 'Rational roots are $\\pm \\frac{p}{q}$ where $p$ divides the constant and $q$ divides the leading coefficient.' },
      { title: 'Test $x = 1$', math: '$P(1) = 1 - 2 - 1 + 2 = 0$', note: '$x = 1$ is a root.' },
      { title: 'Divide out $(x - 1)$', math: '$P(x) / (x - 1) = x^2 - x - 2$', note: 'Synthetic division by the found root.' },
      { title: 'Factor the quotient', math: '$x^2 - x - 2 = (x - 2)(x + 1)$' },
      { title: 'Read off all zeros', math: '$x = 1, x = 2, x = -1$', note: 'Three distinct real roots, each with multiplicity 1.' },
    ],
    about: {
      text: 'Every polynomial of degree $n$ has exactly $n$ roots over the complex numbers, counted with multiplicity. Real polynomials with odd degree always have at least one real root.',
      formula: '\\text{deg}(P) = n \\Rightarrow n \\text{ complex roots (with multiplicity)}',
    },
    pitfalls: [
      'Forgetting that some roots may be complex even when the polynomial has real coefficients',
      'Counting a repeated root only once',
      'Stopping at the first root without dividing it out and continuing',
    ],
    // related: [
    //   { label: 'Factor polynomial',    href: '/algebra/calculators/polynomial-factor' },
    //   { label: 'Rational root theorem' },
    //   { label: 'Synthetic division',   href: '/algebra/calculators/polynomial-synthetic-division' },
    // ],
  },

  simplify: {
    label: 'Simplify',
    title: 'Simplify polynomial',
    sub: 'Combine like terms and rewrite the polynomial in standard form, descending by degree.',
    learnMoreHref: '/algebra/learn/simplifying-polynomials',
    mode: 'single',
    symbol: null,
    inputHeader: 'Polynomial to simplify',
    actionLabel: 'Simplify',
    hasGraph: false,
    demoInputs: ['3x + 2x^2 - 5 + x - 2x^2 + 4'],
    result: {
      primaryLabel: 'Simplified',
      primaryMath: '4x - 1',
      meta: [
        { label: 'Degree', value: '1' },
        { label: 'Leading', value: '4' },
        { label: 'Constant', value: '−1' },
      ],
    },
    steps: [
      { title: 'List every term', math: '$3x, \\; 2x^2, \\; -5, \\; x, \\; -2x^2, \\; 4$', note: 'Pull them apart so each can be sorted by degree.' },
      { title: 'Group like terms', math: '$x^2$: $2 - 2$; $x$: $3 + 1$; constants: $-5 + 4$' },
      { title: 'Combine each group', math: '$0x^2 + 4x - 1$', note: 'The $x^2$ terms cancel completely.' },
      { title: 'Drop zero terms, write in standard form', math: '$4x - 1$', note: 'No $x^2$ term remains, so the result is degree 1.' },
    ],
    about: {
      text: 'A polynomial is in standard form when its terms appear in descending degree order, with no like terms left to combine and no zero terms written out.',
      formula: 'a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0',
    },
    pitfalls: [
      'Leaving like terms uncombined in the final answer',
      'Writing terms in ascending instead of descending degree',
      'Including a $0x^k$ term in the simplified form',
    ],
    // related: [
    //   { label: 'Add polynomials', href: '/algebra/calculators/polynomial-add' },
    //   { label: 'Find degree' },
    //   { label: 'Standard form' },
    // ],
  },
};