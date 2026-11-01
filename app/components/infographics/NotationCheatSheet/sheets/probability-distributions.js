// Notation cheat sheet for distributions (/probability/distributions and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'probability-distributions-notation-cheat-sheet',
  source: '/probability/distributions',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Distribution Notation at a Glance',
  lead: 'The marks from the notation cards across the distribution pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Distributions', href: '/probability/distributions#notation',
      rows: [
        { tex: '$(\\Omega, \\mathcal{F}, \\mathbb{P})$', read: 'a probability space', means: 'Outcomes, events, and the probability measure.' },
        { tex: '$\\mathbb{P}_X(A)$', read: 'the distribution of X', means: 'Equals $\\mathbb{P}(X \\in A)$.' },
        { tex: '$X \\overset{d}{=} Y$', read: 'equal in distribution', means: 'Same law, not necessarily the same values.' },
      ],
    },
    {
      page: 'Binomial', href: '/probability/distributions/discrete/binomial#15',
      rows: [
        { tex: '$X \\sim \\operatorname{Bin}(n, p)$', read: 'binomial, n trials, p', means: 'The number of successes in $n$ independent trials.' },
        { tex: '$q = 1 - p$', read: 'q, the failure probability', means: 'An abbreviation, not a new parameter.' },
      ],
    },
    {
      page: 'Geometric', href: '/probability/distributions/discrete/geometric#15',
      rows: [
        { tex: '$\\operatorname{Geom}(p)$', read: 'geometric with p', means: 'Two conventions: count trials, or count failures.' },
        { tex: '$q^{k-1}p$ vs $q^k p$', read: 'the two pmfs', means: 'The exponent shows which convention is in use.' },
      ],
    },
    {
      page: 'Negative binomial', href: '/probability/distributions/discrete/negative-binomial#15',
      rows: [
        { tex: '$\\operatorname{NB}(r, p)$', read: 'negative binomial', means: 'Trials until the $r$-th success.' },
        { tex: '$k = r, r{+}1, \\ldots$', read: 'the support starts at r', means: 'Fewer trials cannot hold $r$ successes.' },
      ],
    },
    {
      page: 'Hypergeometric', href: '/probability/distributions/discrete/hypergeometric#15',
      rows: [
        { tex: '$\\operatorname{Hyp}(N, K, n)$', read: 'hypergeometric', means: 'Population $N$ with $K$ successes; $n$ draws without replacement.' },
        { tex: '$\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$', read: 'the pmf', means: 'Successes chosen, failures chosen, over all samples.' },
      ],
    },
    {
      page: 'Poisson', href: '/probability/distributions/discrete/poisson#15',
      rows: [
        { tex: '$\\operatorname{Pois}(\\lambda)$', read: 'Poisson with rate lambda', means: 'Counts of events in a window.' },
        { tex: '$\\lambda$', read: 'lambda', means: 'The expected count per window; it depends on the window size.' },
      ],
    },
    {
      page: 'Discrete uniform', href: '/probability/distributions/discrete/uniform#15',
      rows: [
        { tex: '$\\operatorname{DU}(a, b)$', read: 'discrete uniform', means: 'Each integer from $a$ to $b$ equally likely.' },
        { tex: '$\\frac{1}{b - a + 1}$', read: 'one over the count', means: 'The $+1$ counts both endpoints.' },
      ],
    },
    {
      page: 'Continuous uniform', href: '/probability/distributions/continuous/uniform#2',
      rows: [
        { tex: '$X \\sim U(a, b)$', read: 'uniform from a to b', means: 'The slots are the endpoints, not a centre and a spread.' },
        { tex: '$\\frac{1}{b - a}$', read: 'one over the width', means: 'A flat density; no $+1$ here.' },
      ],
    },
    {
      page: 'Exponential', href: '/probability/distributions/continuous/exponential#2',
      rows: [
        { tex: '$\\operatorname{Exp}(\\lambda)$', read: 'exponential with rate lambda', means: 'Some books put the scale $\\beta = \\frac{1}{\\lambda}$ in the slot.' },
        { tex: '$P(X > x) = e^{-\\lambda x}$', read: 'the survival tail', means: 'The chance of waiting longer than $x$.' },
      ],
    },
    {
      page: 'Normal', href: '/probability/distributions/continuous/normal#2',
      rows: [
        { tex: '$N(\\mu, \\sigma^2)$', read: 'normal, mean mu', means: 'Second slot: usually the variance; some texts use $\\sigma$.' },
        { tex: '$Z \\sim N(0, 1)$', read: 'capital Z, standard normal', means: 'A score $z = \\frac{x - \\mu}{\\sigma}$ counts standard deviations.' },
        { tex: '$\\varphi(z), \\; \\Phi(z)$', read: 'phi; capital Phi', means: 'The standard normal density and its CDF.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$N(\\mu, \\sigma^2)$', text: 'Check whether the second slot is the variance or the standard deviation.' },
      { tex: '$\\operatorname{Exp}(\\lambda)$', text: 'Rate or scale: the two readings give means $\\frac{1}{\\lambda}$ and $\\lambda$.' },
      { tex: '$U(a, b)$ vs $\\operatorname{DU}(a, b)$', text: 'Width $b - a$ against a count of $b - a + 1$ values.' },
      { tex: '$\\Phi$ vs $\\varphi$', text: 'Capital is the CDF, lowercase the density.' },
    ],
  },
  symbolsHref: '/math-symbols/probability#common_distributions,random_variables_and_distributions',
  symbolsLabel: 'Distribution symbols table',
  parentHref: '/probability/distributions',
  parentLabel: 'Distributions',
};

export default sheet;
