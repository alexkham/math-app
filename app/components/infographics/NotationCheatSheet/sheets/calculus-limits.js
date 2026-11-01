// Notation cheat sheet for limits (/calculus/limits and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'limits-notation-cheat-sheet',
  source: '/calculus/limits/two-sided',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Limit Notation at a Glance',
  lead: 'The marks from the notation cards across the limit pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Two-sided limits', href: '/calculus/limits/two-sided#notation',
      rows: [
        { tex: '$x \\to a$', read: 'x approaches a', means: '$x$ gets close to $a$ without being $a$.' },
        { tex: '$\\lim_{x \\to a} f(x) = L$', read: 'the limit of f of x as x approaches a is L', means: 'Values of $f$ settle at $L$ near $a$; $f(a)$ itself plays no part.' },
        { tex: '$\\lim_{x \\to a} f(x)$ DNE', read: 'the limit does not exist', means: 'No single value is approached, for example when the two sides disagree.' },
      ],
    },
    {
      page: 'One-sided limits', href: '/calculus/limits/one-sided#4',
      rows: [
        { tex: '$\\lim_{x \\to a^{-}} f(x)$', read: 'limit from the left', means: 'Only $x < a$ counts; the minus is a direction, not a sign.' },
        { tex: '$\\lim_{x \\to a^{+}} f(x)$', read: 'limit from the right', means: 'Only $x > a$ counts.' },
        { tex: '$f(a^{-}), \\; f(a^{+})$', read: 'f of a minus, f of a plus', means: 'Short forms of the two one-sided limits.' },
      ],
    },
    {
      page: 'Limits at infinity', href: '/calculus/limits/infinity#notation',
      rows: [
        { tex: '$\\infty$', read: 'infinity', means: 'Not a number: a direction of unbounded growth.' },
        { tex: '$x \\to \\infty$', read: 'x approaches infinity', means: '$x$ grows without bound.' },
        { tex: '$\\lim_{x \\to a} f(x) = \\infty$', read: 'the limit is infinity', means: '$f$ grows without bound near $a$; strictly, the limit does not exist.' },
      ],
    },
    {
      page: 'Evaluating limits', href: '/calculus/limits/evaluating#notation',
      rows: [
        { tex: '$\\frac{0}{0}, \\; \\frac{\\infty}{\\infty}$', read: 'zero over zero; infinity over infinity', means: 'Indeterminate: the form alone does not give the limit.' },
        { tex: '$0 \\cdot \\infty, \\; 1^{\\infty}, \\; 0^0$', read: 'product and power forms', means: 'Also indeterminate, with $\\infty - \\infty$ and $\\infty^0$.' },
        { tex: '$\\frac{1}{0}, \\; \\frac{0}{\\infty}$', read: 'the determinate lookalikes', means: 'These do decide the answer: unbounded, and $0$.' },
        { tex: '$\\lim \\cdots = \\lim \\cdots = L$', read: 'the evaluation chain', means: 'Each equals sign carries the $\\lim$ until the last step.' },
      ],
    },
    {
      page: 'Continuity', href: '/calculus/limits/continuity#notation',
      rows: [
        { tex: '$\\lim_{x \\to a} f(x) = f(a)$', read: 'the limit at a equals f of a', means: 'The definition of continuity at $a$.' },
        { tex: '$f(a^{+}) = f(a)$', read: 'f is right-continuous at a', means: 'The right-hand limit equals the value: continuity from one side, as at an endpoint.' },
        { tex: '$f \\in C[a, b]$', read: 'f is in C of a, b', means: 'The set of functions continuous on $[a, b]$.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$a^{-}$ vs $-a$', text: 'A superscript minus is a direction (from the left), not a negative number.' },
      { tex: '$= \\infty$', text: 'Describes how the limit fails to exist; it is not a value.' },
      { tex: '$\\frac{1}{0}$ vs $\\frac{0}{0}$', text: 'The first is unbounded, the second tells nothing on its own.' },
    ],
  },
  symbolsHref: '/math-symbols/calculus#limits',
  symbolsLabel: 'Limit symbols table',
  parentHref: '/calculus/limits',
  parentLabel: 'Limits',
};

export default sheet;
