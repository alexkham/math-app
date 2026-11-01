// Notation cheat sheet for probability inequalities and limit theorems
// (Markov, Chebyshev, law of large numbers, central limit theorem).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'probability-inequalities-limits-notation-cheat-sheet',
  source: '/probability/large-numbers-law',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Inequalities and Limit Theorems: Notation at a Glance',
  lead: 'The marks from the notation cards across the pages on probability inequalities and limit theorems: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: "Markov's inequality", href: '/probability/inequalities/markov#notation',
      rows: [
        { tex: '$P(X \\ge a)$', read: 'a right-tail probability', means: 'The chance that $X$ reaches the threshold $a$.' },
        { tex: '$\\le \\dfrac{E[X]}{a}$', read: 'at most the mean over a', means: 'The bound, for $X \\ge 0$ and any distribution.' },
        { tex: '$\\le \\dfrac{1}{k}$', read: 'k times the mean', means: 'The same bound for the threshold $a = kE[X]$.' },
      ],
    },
    {
      page: "Chebyshev's inequality", href: '/probability/inequalities/chebyshev#notation',
      rows: [
        { tex: '$|X - \\mu| \\ge k\\sigma$', read: 'k standard deviations away', means: 'Both tails at once.' },
        { tex: '$\\le \\dfrac{1}{k^2}$', read: 'at most one over k squared', means: 'Or $\\frac{\\sigma^2}{\\varepsilon^2}$, with $\\varepsilon = k\\sigma$.' },
        { tex: '$\\ge 1 - \\dfrac{1}{k^2}$', read: 'within k standard deviations', means: 'The same fact through the complement.' },
      ],
    },
    {
      page: 'Law of large numbers', href: '/probability/large-numbers-law#notation',
      rows: [
        { tex: '$\\xrightarrow{P}, \\; \\xrightarrow{\\text{a.s.}}$', read: 'in probability; almost surely', means: 'The label on the arrow names the kind of convergence.' },
        { tex: '$P(|\\bar{X}_n - \\mu| > \\varepsilon)$', read: 'chance of missing by epsilon', means: 'Goes to $0$: the weak law.' },
        { tex: '$P(\\lim \\bar{X}_n = \\mu) = 1$', read: 'with probability one', means: 'The strong law: the limit sits inside $P$.' },
      ],
    },
    {
      page: 'Central limit theorem', href: '/probability/central-limit-theorem#notation',
      rows: [
        { tex: '$\\bar{X}_n, \\; S_n$', read: 'the sample mean; the sum', means: 'Of $n$ observations; capital, because both are random.' },
        { tex: '$\\xrightarrow{d}$', read: 'converges in distribution', means: 'The shape converges, not the values.' },
        { tex: '$Z_n \\xrightarrow{d} \\mathcal{N}(0,1)$', read: 'the standardized mean', means: '$Z_n = \\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}}$ approaches the standard normal.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$\\to$ with a label', text: '$P$, $\\text{a.s.}$ and $d$ are three different kinds of convergence.' },
      { tex: '$S_n$', text: 'A sum of random variables here; a partial sum on the sequence pages.' },
      { tex: '$\\bar{X}_n$ vs $\\bar{x}$', text: 'The sample mean as a random variable against one observed value.' },
    ],
  },
  symbolsHref: '/math-symbols/probability#probability_inequalities',
  symbolsLabel: 'Probability inequality symbols table',
  parentHref: '/probability',
  parentLabel: 'Probability',
};

export default sheet;
