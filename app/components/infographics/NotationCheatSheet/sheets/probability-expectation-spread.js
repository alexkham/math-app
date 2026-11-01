// Notation cheat sheet for expectation and spread (expected value, variance, covariance, median, mode).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'probability-expectation-spread-notation-cheat-sheet',
  source: '/probability/expected-value',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Expectation and Spread: Notation at a Glance',
  lead: 'The marks from the notation cards across the pages on expected value, variance, covariance, median and mode: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Expected value', href: '/probability/expected-value#notation',
      rows: [
        { tex: '$E[X], \\; \\mathbb{E}[X]$', read: 'the expected value of X', means: 'Takes a whole random variable, returns one number.' },
        { tex: '$\\mu$', read: 'mu, the mean', means: 'The same number as a constant: $\\mu = E[X]$.' },
        { tex: '$E[g(X)]$', read: 'expected value of g of X', means: 'Weights $g(x)$, not $x$; in general not $g(E[X])$.' },
      ],
    },
    {
      page: 'Variance', href: '/probability/variance#notation',
      rows: [
        { tex: '$\\operatorname{Var}(X)$', read: 'the variance of X', means: 'The expected squared distance from the mean.' },
        { tex: '$\\sigma^2$', read: 'sigma squared', means: 'The variance as a constant; never negative.' },
        { tex: '$\\sigma, \\; \\operatorname{SD}(X)$', read: 'the standard deviation', means: 'The square root of the variance, in the units of $X$.' },
      ],
    },
    {
      page: 'Covariance', href: '/probability/covariance#7',
      rows: [
        { tex: '$\\operatorname{Cov}(X, Y)$', read: 'the covariance of X and Y', means: 'How two variables move together.' },
        { tex: '$\\sigma_{XY}$', read: 'sigma X Y', means: 'The covariance as a constant; $\\sigma_{XX} = \\sigma_X^2$.' },
        { tex: '$\\rho_{XY}$', read: 'rho, the correlation', means: 'Covariance over $\\sigma_X\\sigma_Y$: always in $[-1, 1]$.' },
      ],
    },
    {
      page: 'Median', href: '/probability/median#12',
      rows: [
        { tex: '$\\operatorname{median}(X), \\; m$', read: 'the median of X', means: 'The middle value: half the probability on each side.' },
        { tex: '$\\tilde{x}$', read: 'x tilde', means: 'The sample median, as $\\bar{x}$ is the sample mean.' },
        { tex: '$Q_2 = F^{-1}(0.5)$', read: 'the second quartile', means: 'The median as the $0.5$ quantile.' },
      ],
    },
    {
      page: 'Mode', href: '/probability/mode#11',
      rows: [
        { tex: '$\\operatorname{mode}(X)$', read: 'the mode of X', means: 'The most likely value.' },
        { tex: '$\\arg\\max_x f(x)$', read: 'where f is largest', means: 'The location of the peak, not its height.' },
        { tex: '$\\{k_1, \\ldots, k_m\\}$', read: 'several modes', means: 'Braces when values tie: the mode need not be unique.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$\\bar{x}$ vs $\\tilde{x}$', text: 'The bar marks the sample mean, the tilde the sample median.' },
      { tex: '$\\sigma^2$ vs $\\sigma$', text: 'Variance in squared units against standard deviation in the units of $X$.' },
      { tex: '$\\max$ vs $\\arg\\max$', text: 'The height of the peak against where it stands.' },
      { tex: '$F^{-1}$', text: 'The quantile function, not $\\frac{1}{F}$.' },
    ],
  },
  symbolsHref: '/math-symbols/probability#statistical_measures,probability_and_statistics',
  symbolsLabel: 'Statistical measure symbols table',
  parentHref: '/probability',
  parentLabel: 'Probability',
};

export default sheet;
