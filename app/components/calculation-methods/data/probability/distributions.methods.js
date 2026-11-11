// distributions.methods.js (probability)
// Single data source for /probability/distributions/methods (hub) and
// /probability/distributions/methods/[view] (leaf pages). Section hub: /probability/methods.
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/probability/distributions/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.
//
// Decimals in worked examples are rounded to 4 places; every value was checked
// numerically (normal values from a numerical integral of the density).

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/probability/distributions/methods';

const distributionsMethods = {
  hubPath: HUB,
  hubLabel: 'distribution methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Composite — discrete distributions ══════════════════════════
    {
      id: 'binomial-probability',
      slug: 'binomial-probability',
      name: 'How to find a binomial probability',
      description: 'Count successes in $n$ independent trials: name $n$, $p$ and the values of $k$, then add PMF terms or use the complement.',
      uses: ['binomial PMF', 'complement rule', 'binomial CDF'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Binomial Probability | Learn Math Class',
        description: 'Find binomial probabilities step by step: check the conditions, name n and p, turn "at least" or "at most" into values of k, add PMF terms. Examples, mistakes.',
        keywords: ['how to find binomial probability', 'binomial probability steps', 'binomial probability examples', 'at least binomial probability', 'binomial pmf'],
      },
      page: {
        h1: 'How to Find a Binomial Probability',
        lead:
          'A binomial variable counts the successes in a fixed number of independent trials that all have the same success probability. Write the event as a list of counts $k$, find each one with the PMF, and add them; for "at least" questions, subtract the small side from $1$.',
        recognize:
          'The problem fixes the number of trials in advance and asks how many of them succeed: "$10$ free throws, $P(\\text{at least } 8 \\text{ made})$", "$6$ coin tosses, exactly $2$ heads", "$20$ parts, at most $1$ defective". Test the four conditions: a fixed $n$, two outcomes per trial, independent trials, the same $p$ on every trial. If all four hold, $X \\sim \\operatorname{Bin}(n, p)$.',
        recognizeNote: `The model and its conditions are set out in the ${link('lesson.prob.distributions.discrete.binomial.1', 'binomial distribution lesson')}.`,
        methods: [
          {
            name: 'Add the PMF terms',
            tag: 'standard',
            preferred: true,
            formula: 'P(a \\le X \\le b) = \\sum_{k=a}^{b} \\binom{n}{k} p^k (1-p)^{n-k}',
            body: `Evaluate the ${link('prob.binomial-pmf', 'binomial PMF')} at each count in the event and add. Best when the event holds only a few values.`,
          },
          {
            name: 'Use the complement',
            tag: 'at least',
            formula: 'P(X \\ge k) = 1 - P(X \\le k-1)',
            body: `When the event holds most of the counts, add the few counts outside it and subtract from $1$ (${link('prob.complement-rule', 'complement rule')}).`,
          },
          {
            name: 'Approximate a large binomial',
            tag: 'large n',
            formula: '\\operatorname{Bin}(n, p) \\approx \\operatorname{Poisson}(np) \\ \\text{or} \\ N\\big(np,\\, np(1-p)\\big)',
            body: `With many trials and a long sum, use the [Poisson approximation](!${HUB}/poisson-approximation) for small $p$ or the [normal approximation](!${HUB}/normal-approximation) otherwise.`,
          },
        ],
        steps: {
          traceLabel: 'On $5$ free throws, $p = 0.7$, $P(X \\ge 4)$',
          items: [
            {
              title: 'Check the binomial conditions.',
              body: 'Fixed number of trials, two outcomes, independent trials, the same success probability each time.',
              state: '$5$ shots, made or missed, independent, $p = 0.7$ ✓',
            },
            {
              title: 'Name $n$, $p$ and the success.',
              body: 'Define $X$ as the number of successes. The failure probability is $1 - p$.',
              state: '$X \\sim \\operatorname{Bin}(5,\\, 0.7)$, $1 - p = 0.3$',
            },
            {
              title: 'Turn the event into a list of counts.',
              body: '"At least $4$" is $\\{4, 5\\}$, "more than $4$" is $\\{5\\}$, "at most $1$" is $\\{0, 1\\}$. If the list is long, take the complement instead.',
              state: '$P(X \\ge 4) = P(X = 4) + P(X = 5)$',
            },
            {
              title: 'Evaluate the PMF at each count.',
              body: 'Use $\\binom{n}{k} p^k (1-p)^{n-k}$. The two exponents always add up to $n$.',
              state: '$\\binom{5}{4}(0.7)^4(0.3) = 0.36015$, $\\ (0.7)^5 = 0.16807$',
            },
            {
              title: 'Add, or subtract from $1$.',
              body: 'Add the terms of the event. With the complement, subtract their sum from $1$. Round at the end.',
              state: '$P(X \\ge 4) = 0.52822 \\approx 0.5282$',
            },
          ],
        },
        examples: [
          {
            title: 'exactly k successes',
            badge: 'one term',
            lines: [
              { math: '$6$ fair coin tosses, $P(\\text{exactly } 2 \\text{ heads})$', why: '$X \\sim \\operatorname{Bin}(6, \\frac{1}{2})$' },
              { math: '$\\binom{6}{2}\\left(\\frac{1}{2}\\right)^2\\left(\\frac{1}{2}\\right)^4 = \\frac{15}{64}$', why: '$\\binom{6}{2} = 15$, $2^6 = 64$' },
              { math: '$P(X = 2) = \\frac{15}{64} \\approx 0.2344$', why: '', answer: true },
            ],
          },
          {
            title: 'at most k successes',
            badge: 'short sum',
            lines: [
              { math: '$8$ quiz guesses, $p = \\frac{1}{4}$, $P(X \\le 2)$', why: 'counts $0, 1, 2$' },
              { math: '$\\left(\\frac{3}{4}\\right)^8 + 8 \\cdot \\frac{1}{4}\\left(\\frac{3}{4}\\right)^7 + 28 \\cdot \\frac{1}{16}\\left(\\frac{3}{4}\\right)^6$', why: 'one PMF term per count' },
              { math: '$= \\frac{6561 + 17496 + 20412}{65536} = \\frac{44469}{65536}$', why: 'common denominator $4^8$' },
              { math: '$P(X \\le 2) \\approx 0.6785$', why: '', answer: true },
            ],
          },
          {
            title: 'at least one success',
            badge: 'complement',
            lines: [
              { math: '$10$ parts, each defective with $p = 0.1$, $P(X \\ge 1)$', why: 'nine counts in the event' },
              { math: '$P(X \\ge 1) = 1 - P(X = 0)$', why: 'one count outside it' },
              { math: '$1 - (0.9)^{10} = 1 - 0.34868$', why: '$P(X = 0) = (1-p)^n$' },
              { math: '$P(X \\ge 1) \\approx 0.6513$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check any binomial probability in the [discrete distributions calculator](!/probability/calculators/discrete-distributions).',
        visual: {
          caption:
            'Each way to get exactly $k$ successes is one ordering of $k$ successes and $n - k$ failures, and every ordering has the same probability $p^k (1-p)^{n-k}$. The coefficient $\\binom{n}{k}$ counts the orderings. Adding over the counts in an event adds the heights of the bars at those counts. Move $n$ and $p$ and watch the bars shift in the [binomial distribution visualizer](!/probability/visual-tools/distributions/binomial).',
        },
        pitfalls: [
          {
            title: 'Dropping the binomial coefficient',
            wrong: '$P(X = 4) = (0.7)^4(0.3) = 0.07203$',
            right: 'there are $\\binom{5}{4} = 5$ orders: $5 \\cdot 0.07203 = 0.36015$',
          },
          {
            title: 'Reading "more than" as "at least"',
            wrong: '$P(X > 4) = P(X = 4) + P(X = 5)$',
            right: '$P(X > 4) = P(X = 5) = 0.16807$; only "at least" includes $4$',
          },
          {
            title: 'Wrong complement',
            wrong: '$P(X \\ge 3) = 1 - P(X \\le 3)$',
            right: '$P(X \\ge 3) = 1 - P(X \\le 2)$; the value $3$ belongs to the event',
          },
          {
            title: 'Binomial for draws without replacement',
            wrong: '$3$ people from $4$ women and $6$ men: $\\operatorname{Bin}(3, 0.4)$',
            right: 'the chance changes after each draw, so use the hypergeometric model',
            note: `See [hypergeometric probability](!${HUB}/hypergeometric-probability).`,
          },
        ],
        related: ['poisson-approximation', 'normal-approximation', 'which-distribution'],
        builtOn: [
          { label: 'Binomial PMF', url: ruleUrl('prob.binomial-pmf') },
          { label: 'Binomial PMF and support (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.binomial.4') },
          { label: 'Binomial CDF (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.binomial.5') },
          { label: 'Complement rule', url: ruleUrl('prob.complement-rule') },
        ],
      },
    },
    {
      id: 'geometric-probability',
      slug: 'geometric-probability',
      name: 'How to find a geometric probability',
      description: 'Repeat a trial until the first success: $k - 1$ failures then one success, and a short tail formula for "more than $k$ trials".',
      uses: ['geometric PMF', 'geometric CDF', 'memoryless property'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Geometric Probability | Learn Math Class',
        description: 'Find geometric probabilities: the trial of the first success, k - 1 failures then a success, the tail formula and the memoryless shortcut. Examples, mistakes.',
        keywords: ['how to find geometric probability', 'geometric distribution examples', 'first success probability', 'geometric probability formula', 'geometric cdf'],
      },
      page: {
        h1: 'How to Find a Geometric Probability',
        lead:
          'A geometric variable is the number of the trial on which the first success happens. The first success on trial $k$ means $k - 1$ failures in a row and then a success, so each probability is a single product; "more than $k$ trials" means the first $k$ all failed.',
        recognize:
          'Independent trials with the same success probability are repeated until something happens for the first time, and the question is about when: "roll a die until the first six", "keep calling until someone answers", "$P(\\text{first defective is the } 5\\text{th part})$". Test: there is no fixed number of trials and you stop at the first success. Then $X \\sim \\operatorname{Geom}(p)$ with values $k = 1, 2, 3, \\ldots$',
        recognizeNote: `The model is defined in the ${link('lesson.prob.distributions.discrete.geometric.1', 'geometric distribution lesson')}; this page counts trials, not failures.`,
        methods: [
          {
            name: 'PMF for an exact trial',
            tag: 'exact',
            preferred: true,
            formula: 'P(X = k) = (1-p)^{k-1}\\, p',
            body: `Use the ${link('prob.geometric-pmf', 'geometric PMF')}: $k - 1$ failures, then the success.`,
          },
          {
            name: 'Tail formula for ranges',
            tag: 'at most / more than',
            formula: 'P(X > k) = (1-p)^k, \\qquad P(X \\le k) = 1 - (1-p)^k',
            body: `The first $k$ trials all fail; the ${link('prob.geometric-cdf', 'geometric CDF')} is the complement. No sum needed.`,
          },
        ],
        steps: {
          traceLabel: 'On a fair die rolled until the first six, $P(X = 3)$',
          items: [
            {
              title: 'Check the setup and name $p$.',
              body: 'Independent trials, the same success probability, stop at the first success. $X$ is the trial number of that success.',
              state: '$p = \\frac{1}{6}$, $1 - p = \\frac{5}{6}$, $X \\sim \\operatorname{Geom}(\\frac{1}{6})$',
            },
            {
              title: 'Write the event in terms of $X$.',
              body: '"On the $k$th roll" is $X = k$. "Within $k$ rolls" is $X \\le k$. "Needs more than $k$ rolls" is $X > k$.',
              state: '"first six on the third roll": $X = 3$',
            },
            {
              title: 'Apply the PMF or the tail formula.',
              body: 'An exact trial uses $(1-p)^{k-1}p$. A range uses $(1-p)^k$ for the tail, or $1 - (1-p)^k$ for "within $k$".',
              state: '$\\left(\\frac{5}{6}\\right)^2 \\cdot \\frac{1}{6} = \\frac{25}{216}$',
            },
            {
              title: 'Simplify and round.',
              body: 'Keep fractions exact if you can, then round at the end.',
              state: '$P(X = 3) = \\frac{25}{216} \\approx 0.1157$',
            },
          ],
        },
        examples: [
          {
            title: 'an exact trial',
            badge: 'PMF',
            lines: [
              { math: '$p = 0.2$ per call, $P(\\text{first sale on call } 4)$', why: '$X \\sim \\operatorname{Geom}(0.2)$' },
              { math: '$P(X = 4) = (0.8)^3 \\cdot 0.2$', why: 'three failures, then a success' },
              { math: '$P(X = 4) = 0.1024$', why: '', answer: true },
            ],
          },
          {
            title: 'success within k trials',
            badge: 'CDF',
            lines: [
              { math: '$p = 0.2$, $P(\\text{a sale within } 4 \\text{ calls})$', why: 'the event is $X \\le 4$' },
              { math: '$P(X > 4) = (0.8)^4 = 0.4096$', why: 'the first four calls all fail' },
              { math: '$P(X \\le 4) = 1 - 0.4096 = 0.5904$', why: 'complement', answer: true },
            ],
          },
          {
            title: 'after a run of failures',
            badge: 'memoryless',
            lines: [
              { math: '$p = 0.2$, three calls failed; $P(X > 5 \\mid X > 3)$', why: '' },
              { math: '$\\frac{P(X > 5)}{P(X > 3)} = \\frac{(0.8)^5}{(0.8)^3}$', why: '$X > 5$ already implies $X > 3$' },
              { math: '$= (0.8)^2 = 0.64 = P(X > 2)$', why: 'past failures do not count', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your numbers in the [discrete distributions calculator](!/probability/calculators/discrete-distributions).',
        visual: {
          caption:
            'Every trial that fails multiplies the remaining probability by $1 - p$, so the bars of the PMF shrink by the same factor from one trial to the next: a geometric sequence, which gives the distribution its name. The tail $(1-p)^k$ is the probability that the first $k$ bars were all skipped. See the decay in the [geometric distribution visualizer](!/probability/visual-tools/distributions/geometric).',
        },
        pitfalls: [
          {
            title: 'One failure too many',
            wrong: '$P(X = 3) = \\left(\\frac{5}{6}\\right)^3 \\cdot \\frac{1}{6}$',
            right: 'trial $3$ is the success, so only $2$ failures: $\\left(\\frac{5}{6}\\right)^2 \\cdot \\frac{1}{6}$',
          },
          {
            title: 'Mixing the two conventions',
            wrong: 'counting failures before the success, then using $(1-p)^{k-1}p$',
            right: 'with $Y$ = failures, $P(Y = k) = (1-p)^k p$ and $Y = X - 1$; state which one you use',
          },
          {
            title: 'Wrong exponent in the tail',
            wrong: '$P(X > 4) = (0.8)^3$',
            right: 'more than $4$ trials means the first $4$ failed: $(0.8)^4 = 0.4096$',
          },
          {
            title: 'Thinking a success is "due"',
            wrong: 'after $3$ failures, $P(X = 4 \\mid X > 3)$ is larger than $p$',
            right: `it equals $p = 0.2$; the trials are independent (${link('prob.geometric-memoryless', 'memoryless property')})`,
          },
        ],
        related: ['negative-binomial-probability', 'exponential-probability', 'which-distribution'],
        builtOn: [
          { label: 'Geometric PMF', url: ruleUrl('prob.geometric-pmf') },
          { label: 'Geometric CDF', url: ruleUrl('prob.geometric-cdf') },
          { label: 'Memoryless property', url: ruleUrl('prob.geometric-memoryless') },
          { label: 'Geometric PMF and support (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.geometric.4') },
        ],
      },
    },
    {
      id: 'negative-binomial-probability',
      slug: 'negative-binomial-probability',
      name: 'How to find a negative binomial probability',
      description: 'The trial of the $r$th success: $r - 1$ successes somewhere in the first $k - 1$ trials, then a success on trial $k$.',
      uses: ['negative binomial PMF', 'binomial coefficient', 'binomial link'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Negative Binomial Probability | Learn Math Class',
        description: 'Find negative binomial probabilities: the trial of the r-th success, the coefficient C(k-1, r-1), ranges by sums or a binomial count. Examples, mistakes.',
        keywords: ['negative binomial probability', 'how to find negative binomial probability', 'negative binomial examples', 'rth success probability', 'negative binomial formula'],
      },
      page: {
        h1: 'How to Find a Negative Binomial Probability',
        lead:
          'A negative binomial variable is the number of the trial on which the $r$th success happens. That trial must be a success, and the other $r - 1$ successes can sit anywhere among the trials before it, so you count those placements with $\\binom{k-1}{r-1}$.',
        recognize:
          'Independent trials with the same success probability continue until a set number of successes is reached: "the third head", "a series won by the first team to $4$ wins", "the $5$th sale of the day". Test: the stopping rule is "$r$ successes" with $r > 1$. With $r = 1$ it is the geometric case. Then $X \\sim \\operatorname{NB}(r, p)$ with values $k = r, r + 1, \\ldots$',
        recognizeNote: `The model is defined in the ${link('lesson.prob.distributions.discrete.negative-binomial.1', 'negative binomial lesson')}; here $X$ counts trials, not failures.`,
        methods: [
          {
            name: 'PMF term by term',
            tag: 'exact trial',
            preferred: true,
            formula: 'P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}',
            body: `Use the ${link('prob.negative-binomial-pmf', 'negative binomial PMF')} for one value of $k$; add terms for a short range.`,
          },
          {
            name: 'Switch to a binomial count',
            tag: 'within k trials',
            formula: 'P(X \\le k) = P(Y \\ge r), \\quad Y \\sim \\operatorname{Bin}(k, p)',
            body: `"The $r$th success by trial $k$" is "at least $r$ successes in $k$ trials"; use [binomial probability](!${HUB}/binomial-probability).`,
          },
        ],
        steps: {
          traceLabel: 'On a fair coin, $P(\\text{third head on toss } 5)$',
          items: [
            {
              title: 'Name $r$, $p$ and $k$.',
              body: '$r$ is the number of successes you wait for, $k$ the trial on which the last of them happens. Check $k \\ge r$.',
              state: '$r = 3$, $p = \\frac{1}{2}$, $k = 5$',
            },
            {
              title: 'Fix the last trial as a success.',
              body: 'Trial $k$ is the $r$th success. Among the first $k - 1$ trials there are exactly $r - 1$ successes.',
              state: '$2$ heads among the first $4$ tosses, then a head',
            },
            {
              title: 'Count the placements and multiply.',
              body: 'There are $\\binom{k-1}{r-1}$ ways to place the earlier successes; each arrangement has probability $p^r (1-p)^{k-r}$.',
              state: '$\\binom{4}{2}\\left(\\frac{1}{2}\\right)^3\\left(\\frac{1}{2}\\right)^2 = \\frac{6}{32}$',
            },
            {
              title: 'Simplify, or add terms for a range.',
              body: 'For "within $k$ trials", add the terms from $r$ to $k$ or switch to the binomial count.',
              state: '$P(X = 5) = \\frac{3}{16} = 0.1875$',
            },
          ],
        },
        examples: [
          {
            title: 'one exact trial',
            badge: 'PMF',
            lines: [
              { math: '$p = 0.4$, $P(\\text{second success on trial } 4)$', why: '$r = 2$, $k = 4$' },
              { math: '$\\binom{3}{1}(0.4)^2(0.6)^2 = 3 \\cdot 0.16 \\cdot 0.36$', why: 'one earlier success in $3$ trials' },
              { math: '$P(X = 4) = 0.1728$', why: '', answer: true },
            ],
          },
          {
            title: 'within k trials',
            badge: 'two ways',
            lines: [
              { math: '$p = 0.4$, $r = 2$, $P(X \\le 4)$', why: 'trials $2, 3, 4$' },
              { math: '$0.16 + 0.192 + 0.1728 = 0.5248$', why: '$P(X = 2), P(X = 3), P(X = 4)$' },
              { math: '$1 - (0.6)^4 - 4(0.4)(0.6)^3 = 1 - 0.1296 - 0.3456$', why: 'check: at least $2$ in $4$' },
              { math: '$P(X \\le 4) = 0.5248$', why: 'both routes agree', answer: true },
            ],
          },
          {
            title: 'a best-of series',
            badge: 'r = 3',
            lines: [
              { math: 'first to $3$ wins, $p = 0.6$ per game, $P(\\text{done in game } 5)$', why: 'the winner wins game $5$' },
              { math: '$\\binom{4}{2}(0.6)^3(0.4)^2 = 6 \\cdot 0.216 \\cdot 0.16$', why: '$2$ wins in the first $4$' },
              { math: '$P(X = 5) = 0.20736 \\approx 0.2074$', why: 'for this team winning', answer: true },
            ],
            note: 'The series also ends in game $5$ when the other team wins it; add $\\binom{4}{2}(0.4)^3(0.6)^2$ for that case.',
          },
        ],
        examplesAfter: 'Check the terms in the [discrete distributions calculator](!/probability/calculators/discrete-distributions).',
        visual: {
          caption:
            'Picture the $k$ trials as a row of boxes. The last box must hold a success, and the other $r - 1$ successes are scattered over the $k - 1$ boxes before it. Every scattering has the same probability, and $\\binom{k-1}{r-1}$ counts them. That is why the coefficient is not $\\binom{k}{r}$: the last success is pinned. Watch the PMF move right as $r$ grows in the [negative binomial visualizer](!/probability/visual-tools/distributions/negative-binomial).',
        },
        pitfalls: [
          {
            title: 'Using the binomial coefficient of all trials',
            wrong: '$P(X = 5) = \\binom{5}{3}\\left(\\frac{1}{2}\\right)^5 = \\frac{10}{32}$',
            right: 'the last toss is fixed as a head: $\\binom{4}{2}\\left(\\frac{1}{2}\\right)^5 = \\frac{6}{32}$',
          },
          {
            title: 'Values below r',
            wrong: '$P(X = 2)$ for $r = 3$ computed with the formula',
            right: 'three successes need at least three trials, so $P(X = 2) = 0$',
          },
          {
            title: 'Trials versus failures',
            wrong: 'using $\\binom{k-1}{r-1}$ with $k$ = number of failures',
            right: 'with $Y$ failures before the $r$th success, $P(Y = y) = \\binom{y+r-1}{r-1} p^r (1-p)^y$ and $X = Y + r$',
          },
        ],
        related: ['geometric-probability', 'binomial-probability', 'which-distribution'],
        builtOn: [
          { label: 'Negative binomial PMF', url: ruleUrl('prob.negative-binomial-pmf') },
          { label: 'Negative binomial PMF and support (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.negative-binomial.4') },
          { label: 'Negative binomial CDF (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.negative-binomial.5') },
        ],
      },
    },
    {
      id: 'hypergeometric-probability',
      slug: 'hypergeometric-probability',
      name: 'How to find a hypergeometric probability',
      description: 'Draws without replacement from two groups: choose the successes and the failures separately, divide by all samples.',
      uses: ['hypergeometric PMF', 'combinations', 'complement rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Hypergeometric Probability | Learn Math Class',
        description: 'Find hypergeometric probabilities for draws without replacement: name N, K, n and k, count with combinations, divide by all samples. Cards and lot examples.',
        keywords: ['hypergeometric probability', 'how to find hypergeometric probability', 'hypergeometric distribution examples', 'sampling without replacement probability', 'hypergeometric formula'],
      },
      page: {
        h1: 'How to Find a Hypergeometric Probability',
        lead:
          'When you draw without replacement from a group that holds two kinds of items, every sample of the same size is equally likely. Count the samples with exactly $k$ successes by choosing the successes and the failures separately, then divide by the number of all samples.',
        recognize:
          'A finite group with two kinds of members is sampled without putting anything back, and the question counts one kind in the sample: "a $5$-card hand with exactly $2$ aces", "a committee of $3$ from $4$ women and $6$ men", "a sample of $4$ from a lot of $20$ with $3$ defective". Test: the population is small enough that each draw changes the odds for the next. Then $X \\sim \\operatorname{Hyp}(N, K, n)$.',
        recognizeNote: `The model is defined in the ${link('lesson.prob.distributions.discrete.hypergeometric.1', 'hypergeometric distribution lesson')}.`,
        methods: [
          {
            name: 'Count with combinations',
            tag: 'exact',
            preferred: true,
            formula: 'P(X = k) = \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}',
            body: `The ${link('prob.hypergeometric-pmf', 'hypergeometric PMF')} is a favorable-over-total count of equally likely samples.`,
          },
          {
            name: 'Binomial approximation',
            tag: 'large population',
            formula: '\\operatorname{Hyp}(N, K, n) \\approx \\operatorname{Bin}\\left(n, \\tfrac{K}{N}\\right) \\quad (n < 0.05N)',
            body: `When the sample is a small part of a large population, the odds barely change; use [binomial probability](!${HUB}/binomial-probability) with $p = K/N$.`,
          },
        ],
        steps: {
          traceLabel: 'On a committee of $3$ from $4$ women and $6$ men, $P(\\text{exactly } 2 \\text{ women})$',
          items: [
            {
              title: 'Name $N$, $K$, $n$ and $k$.',
              body: '$N$ is the population, $K$ the successes in it, $n$ the sample size, $k$ the successes wanted in the sample.',
              state: '$N = 10$, $K = 4$, $n = 3$, $k = 2$',
            },
            {
              title: 'Count the ways to choose the successes.',
              body: 'Choose $k$ of the $K$ successes.',
              state: '$\\binom{4}{2} = 6$',
            },
            {
              title: 'Count the ways to fill the rest with failures.',
              body: 'Choose $n - k$ of the $N - K$ failures. The bottom numbers add up to $n$, the top numbers to $N$.',
              state: '$\\binom{6}{1} = 6$',
            },
            {
              title: 'Divide by all samples of size $n$.',
              body: 'Multiply the two counts and divide by $\\binom{N}{n}$. For "at least" use the complement.',
              state: '$\\frac{6 \\cdot 6}{\\binom{10}{3}} = \\frac{36}{120} = \\frac{3}{10}$',
            },
          ],
        },
        examples: [
          {
            title: 'a small committee',
            badge: 'exact count',
            lines: [
              { math: '$4$ women, $6$ men, choose $3$; $P(X = 2)$', why: '$X$ = number of women' },
              { math: '$\\frac{\\binom{4}{2}\\binom{6}{1}}{\\binom{10}{3}} = \\frac{6 \\cdot 6}{120}$', why: 'women, men, all committees' },
              { math: '$P(X = 2) = \\frac{3}{10}$', why: '', answer: true },
            ],
          },
          {
            title: 'a poker hand',
            badge: 'cards',
            lines: [
              { math: '$5$ cards from $52$, $P(\\text{exactly } 2 \\text{ aces})$', why: '$N = 52$, $K = 4$, $n = 5$' },
              { math: '$\\frac{\\binom{4}{2}\\binom{48}{3}}{\\binom{52}{5}} = \\frac{6 \\cdot 17296}{2598960}$', why: '$2$ aces, $3$ non-aces' },
              { math: '$= \\frac{103776}{2598960} \\approx 0.0399$', why: '', answer: true },
            ],
          },
          {
            title: 'at least one defective',
            badge: 'complement',
            lines: [
              { math: 'lot of $20$ with $3$ defective, sample $4$; $P(X \\ge 1)$', why: '' },
              { math: '$P(X = 0) = \\frac{\\binom{3}{0}\\binom{17}{4}}{\\binom{20}{4}} = \\frac{2380}{4845}$', why: 'all four from the good parts' },
              { math: '$P(X \\ge 1) = 1 - \\frac{2380}{4845} = \\frac{493}{969} \\approx 0.5088$', why: 'complement', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your counts in the [discrete distributions calculator](!/probability/calculators/discrete-distributions).',
        visual: {
          caption:
            'Without replacement, every subset of $n$ items from the $N$ is equally likely, so the probability is a ratio of counts. Splitting the sample into the part drawn from the successes and the part drawn from the failures turns one hard count into two easy ones. As the population grows with the same share $K/N$, removing a few items hardly changes the odds and the bars approach the binomial ones. Compare them in the [hypergeometric distribution visualizer](!/probability/visual-tools/distributions/hypergeometric).',
        },
        pitfalls: [
          {
            title: 'Treating the draws as independent',
            wrong: '$P(X = 2) = \\binom{3}{2}(0.4)^2(0.6) = 0.288$',
            right: 'without replacement the odds change: $\\frac{36}{120} = 0.3$',
          },
          {
            title: 'Counts that do not add up',
            wrong: '$\\frac{\\binom{4}{2}\\binom{6}{3}}{\\binom{10}{3}}$',
            right: 'the bottom numbers must add to $n = 3$: $\\binom{4}{2}\\binom{6}{1}$',
          },
          {
            title: 'Impossible values of k',
            wrong: '$P(X = 4)$ for $K = 3$ defective in the lot',
            right: '$k$ runs from $\\max(0,\\, n - (N - K))$ to $\\min(n, K)$; here $k \\le 3$',
          },
          {
            title: 'Ordered counts on top, unordered below',
            wrong: 'favorable $= 4 \\cdot 3 \\cdot 6$ over $\\binom{10}{3}$',
            right: `count both as combinations (${link('prob.classical-probability-formula', 'equally likely outcomes')}), or both as ordered lists`,
          },
        ],
        related: ['binomial-probability', 'which-distribution'],
        builtOn: [
          { label: 'Hypergeometric PMF', url: ruleUrl('prob.hypergeometric-pmf') },
          { label: 'Hypergeometric PMF and support (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.hypergeometric.4') },
          { label: 'Classical probability', url: ruleUrl('prob.classical-probability-formula') },
          { label: 'Complement rule', url: ruleUrl('prob.complement-rule') },
        ],
      },
    },
    {
      id: 'poisson-probability',
      slug: 'poisson-probability',
      name: 'How to find a Poisson probability',
      description: 'Events at an average rate: scale $\\lambda$ to the interval asked about, then use $e^{-\\lambda}\\lambda^k / k!$ or its complement.',
      uses: ['Poisson PMF', 'rate scaling', 'complement rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Poisson Probability | Learn Math Class',
        description: 'Find Poisson probabilities step by step: scale the rate to the interval, evaluate the PMF, add terms or use the complement for "at least". Examples, mistakes.',
        keywords: ['how to find poisson probability', 'poisson probability examples', 'poisson distribution formula', 'poisson at least one', 'poisson rate per interval'],
      },
      page: {
        h1: 'How to Find a Poisson Probability',
        lead:
          'A Poisson variable counts events that occur independently at a steady average rate over an interval of time or space. Scale the rate to the interval in the question, then each count has probability $e^{-\\lambda}\\lambda^k / k!$.',
        recognize:
          'An average rate is given and the question asks about a count in some interval, with no fixed number of trials: "$3$ calls per hour on average", "$2$ typos per page", "$0.5$ accidents per week". Test: events happen one at a time, independently, at a constant average rate, and there is no upper limit on the count. Then $X \\sim \\operatorname{Poisson}(\\lambda)$ with $\\lambda$ = expected count in the interval.',
        recognizeNote: `The model is defined in the ${link('lesson.prob.distributions.discrete.poisson.1', 'Poisson distribution lesson')}.`,
        methods: [
          {
            name: 'Add PMF terms',
            tag: 'exact or at most',
            preferred: true,
            formula: 'P(X = k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}',
            body: `Evaluate the ${link('prob.poisson-pmf', 'Poisson PMF')} at each count; factor out $e^{-\\lambda}$ when you add several.`,
          },
          {
            name: 'Use the complement',
            tag: 'at least',
            formula: 'P(X \\ge k) = 1 - \\sum_{j=0}^{k-1} \\frac{e^{-\\lambda}\\lambda^j}{j!}',
            body: `The counts go on forever, so "at least" always needs the ${link('prob.complement-rule', 'complement rule')}.`,
          },
        ],
        steps: {
          traceLabel: 'On $3$ calls per hour, $P(\\text{exactly } 2 \\text{ calls in an hour})$',
          items: [
            {
              title: 'Scale the rate to the interval.',
              body: '$\\lambda$ is the expected count in the interval the question asks about: rate times length.',
              state: '$\\lambda = 3 \\cdot 1 = 3$',
            },
            {
              title: 'Write the event as counts.',
              body: '"Exactly $k$" is one term, "at most $k$" is $0, 1, \\ldots, k$, "at least $k$" is the complement of $0, \\ldots, k - 1$.',
              state: '$X = 2$',
            },
            {
              title: 'Evaluate the PMF at each count.',
              body: 'Use $e^{-\\lambda}\\lambda^k / k!$ and remember $0! = 1$.',
              state: '$e^{-3} \\cdot \\frac{3^2}{2!} = 4.5\\, e^{-3}$',
            },
            {
              title: 'Add, or subtract from $1$, and round.',
              body: 'Round only the final value.',
              state: '$P(X = 2) \\approx 0.2240$',
            },
          ],
        },
        examples: [
          {
            title: 'no events at all',
            badge: 'k = 0',
            lines: [
              { math: '$2$ typos per page on average; $P(\\text{a page with no typo})$', why: '$\\lambda = 2$' },
              { math: '$P(X = 0) = \\frac{e^{-2} \\cdot 2^0}{0!} = e^{-2}$', why: '$2^0 = 0! = 1$' },
              { math: '$P(X = 0) \\approx 0.1353$', why: '', answer: true },
            ],
          },
          {
            title: 'a different interval',
            badge: 'rescale',
            lines: [
              { math: '$3$ calls per hour; $P(\\text{at least one call in } 30 \\text{ min})$', why: '' },
              { math: '$\\lambda = 3 \\cdot \\frac{1}{2} = 1.5$', why: 'half an hour' },
              { math: '$P(X \\ge 1) = 1 - e^{-1.5} \\approx 0.7769$', why: 'complement of $X = 0$', answer: true },
            ],
          },
          {
            title: 'at most k events',
            badge: 'short sum',
            lines: [
              { math: '$\\lambda = 4$ arrivals per hour; $P(X \\le 2)$', why: 'counts $0, 1, 2$' },
              { math: '$e^{-4}\\left(1 + 4 + \\frac{4^2}{2}\\right) = 13\\, e^{-4}$', why: 'factor out $e^{-4}$' },
              { math: '$P(X \\le 2) \\approx 0.2381$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your answer in the [discrete distributions calculator](!/probability/calculators/discrete-distributions).',
        visual: {
          caption:
            'Split the interval into many tiny pieces, each with a tiny chance of holding one event. The count is then a binomial with huge $n$ and tiny $p$, and in the limit that binomial becomes the Poisson formula with $\\lambda = np$. Doubling the interval doubles the expected count, which is why $\\lambda$ must be rescaled. Watch the shape change with $\\lambda$ in the [Poisson distribution visualizer](!/probability/visual-tools/distributions/poisson).',
        },
        pitfalls: [
          {
            title: 'Not rescaling the rate',
            wrong: '$3$ per hour, $30$ min: $P(X \\ge 1) = 1 - e^{-3} \\approx 0.9502$',
            right: '$\\lambda = 1.5$ for half an hour: $1 - e^{-1.5} \\approx 0.7769$',
          },
          {
            title: 'Wrong complement of "at least one"',
            wrong: '$P(X \\ge 1) = 1 - P(X = 1)$',
            right: '$P(X \\ge 1) = 1 - P(X = 0)$',
          },
          {
            title: 'Forgetting $0!$ or $e^{-\\lambda}$ in a sum',
            wrong: '$P(X \\le 2) = e^{-4} + 4 + 8$',
            right: '$e^{-4}$ multiplies every term: $e^{-4}(1 + 4 + 8)$',
          },
          {
            title: 'Poisson with a fixed number of trials',
            wrong: '$10$ tosses, count the heads with $\\lambda = 5$',
            right: 'a fixed $n$ and a large $p$ make it binomial',
            note: `Poisson stands in for a binomial only when $n$ is large and $p$ small; see [Poisson approximation](!${HUB}/poisson-approximation).`,
          },
        ],
        related: ['poisson-approximation', 'exponential-probability', 'which-distribution'],
        builtOn: [
          { label: 'Poisson PMF', url: ruleUrl('prob.poisson-pmf') },
          { label: 'Poisson mean', url: ruleUrl('prob.poisson-mean') },
          { label: 'Poisson PMF and support (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.poisson.4') },
          { label: 'Poisson CDF (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.poisson.5') },
        ],
      },
    },
    {
      id: 'discrete-uniform-probability',
      slug: 'discrete-uniform-probability',
      name: 'How to find a discrete uniform probability',
      description: 'Equally likely whole numbers from $a$ to $b$: count the values in the event and divide by $b - a + 1$.',
      uses: ['discrete uniform PMF', 'counting integers', 'discrete uniform CDF'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Discrete Uniform Probability | Learn Math Class',
        description: 'Find discrete uniform probabilities: count the whole numbers in the event, divide by b - a + 1, handle strict inequalities. Dice and random integer examples.',
        keywords: ['discrete uniform probability', 'discrete uniform distribution examples', 'random integer probability', 'fair die probability', 'discrete uniform formula'],
      },
      page: {
        h1: 'How to Find a Discrete Uniform Probability',
        lead:
          'When every whole number from $a$ to $b$ is equally likely, a probability is a count: the number of values in the event divided by the number of values, $b - a + 1$.',
        recognize:
          'A value is picked at random from a list of consecutive whole numbers, each with the same chance: "a fair die", "a random integer from $1$ to $100$", "a ticket number from $10$ to $50$". Test: the outcomes are a finite list and nothing makes one value more likely than another. A sum of two dice fails the test. Then $X$ is discrete uniform on $\\{a, \\ldots, b\\}$.',
        recognizeNote: `The model is defined in the ${link('lesson.prob.distributions.discrete.uniform.1', 'discrete uniform lesson')}.`,
        steps: {
          traceLabel: 'On a fair die, $P(X \\ge 5)$',
          items: [
            {
              title: 'Name $a$ and $b$ and count the values.',
              body: 'The list $a, a + 1, \\ldots, b$ holds $b - a + 1$ values, not $b - a$.',
              state: '$a = 1$, $b = 6$: $6$ values',
            },
            {
              title: 'Write the event as a list of values.',
              body: 'Turn the inequality into the whole numbers it allows. A strict inequality drops its endpoint.',
              state: '$X \\ge 5$: $\\{5, 6\\}$',
            },
            {
              title: 'Count the values in the event.',
              body: 'For $c \\le X \\le d$ inside the range there are $d - c + 1$ values. For a condition such as "divisible by $7$", count the multiples.',
              state: '$2$ values',
            },
            {
              title: 'Divide.',
              body: 'Favorable count over total count, simplified.',
              state: '$P(X \\ge 5) = \\frac{2}{6} = \\frac{1}{3}$',
            },
          ],
        },
        examples: [
          {
            title: 'a range on a die',
            badge: 'inclusive',
            lines: [
              { math: 'fair die, $P(2 \\le X \\le 4)$', why: 'values $2, 3, 4$' },
              { math: '$\\frac{4 - 2 + 1}{6} = \\frac{3}{6}$', why: '$d - c + 1$ over $6$' },
              { math: '$P(2 \\le X \\le 4) = \\frac{1}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'a strict inequality',
            badge: 'endpoint out',
            lines: [
              { math: 'random integer from $10$ to $50$; $P(X > 42)$', why: '$50 - 10 + 1 = 41$ values' },
              { math: '$X > 42$: $\\{43, \\ldots, 50\\}$, $8$ values', why: '$42$ itself is excluded' },
              { math: '$P(X > 42) = \\frac{8}{41} \\approx 0.1951$', why: '', answer: true },
            ],
          },
          {
            title: 'a counting condition',
            badge: 'multiples',
            lines: [
              { math: 'random integer from $1$ to $100$; $P(7 \\text{ divides } X)$', why: '' },
              { math: '$7, 14, \\ldots, 98$: $\\lfloor 100/7 \\rfloor = 14$ values', why: 'largest multiple $7 \\cdot 14 = 98$' },
              { math: '$P = \\frac{14}{100} = \\frac{7}{50}$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check the counts in the [discrete distributions calculator](!/probability/calculators/discrete-distributions).',
        visual: {
          caption:
            'The PMF is a row of equal bars, one per value, each of height $\\frac{1}{b - a + 1}$. A probability is the number of bars in the event times that common height, so only counting is needed. Step through it in the [discrete uniform visualizer](!/probability/visual-tools/distributions/uniform-discrete).',
        },
        pitfalls: [
          {
            title: 'Counting b - a values',
            wrong: 'integers from $10$ to $50$: $40$ values',
            right: 'both ends count: $50 - 10 + 1 = 41$',
          },
          {
            title: 'Keeping the endpoint of a strict inequality',
            wrong: 'fair die, $P(X < 4) = \\frac{4}{6}$',
            right: '$X < 4$ is $\\{1, 2, 3\\}$: $\\frac{3}{6} = \\frac{1}{2}$',
          },
          {
            title: 'Calling any finite list uniform',
            wrong: 'sum of two dice: $P(\\text{sum} = 7) = \\frac{1}{11}$',
            right: 'the $11$ sums are not equally likely; count the $36$ ordered pairs: $\\frac{6}{36}$',
          },
        ],
        related: ['continuous-uniform-probability', 'which-distribution'],
        builtOn: [
          { label: 'Discrete uniform PMF', url: ruleUrl('prob.discrete-uniform-pmf') },
          { label: 'Discrete uniform CDF', url: ruleUrl('prob.discrete-uniform-cdf') },
          { label: 'Discrete uniform PMF and support (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.uniform.4') },
        ],
      },
    },

    // ═══ II. Composite — continuous distributions ═══════════════════════
    {
      id: 'continuous-uniform-probability',
      slug: 'continuous-uniform-probability',
      name: 'How to find a continuous uniform probability',
      description: 'Equally likely anywhere on $[a, b]$: the probability of an interval is its length over $b - a$, after clipping to the support.',
      uses: ['continuous uniform PDF', 'continuous uniform CDF', 'interval length'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Continuous Uniform Probability | Learn Math Class',
        description: 'Find continuous uniform probabilities: clip the interval to [a, b], divide its length by b - a, handle conditional questions. Waiting-time examples, mistakes.',
        keywords: ['continuous uniform probability', 'uniform distribution probability', 'how to find uniform probability', 'uniform distribution examples', 'uniform waiting time'],
      },
      page: {
        h1: 'How to Find a Continuous Uniform Probability',
        lead:
          'A continuous uniform variable is equally likely to fall anywhere in an interval $[a, b]$. Its density is a flat line of height $\\frac{1}{b - a}$, so the probability of a subinterval is its length divided by $b - a$.',
        recognize:
          'A measurement is equally likely to be anywhere in a range: "the bus comes at a random time in the next $20$ minutes", "a point chosen at random on a $10$ cm stick", "a rounding error between $-0.5$ and $0.5$". Test: the values form an interval and no part of it is favored. Then $X \\sim U(a, b)$.',
        recognizeNote: `The model is defined in the ${link('lesson.prob.distributions.continuous.uniform.1', 'continuous uniform lesson')}.`,
        steps: {
          traceLabel: 'On a bus arriving uniformly in the next $20$ minutes, $P(X > 15)$',
          items: [
            {
              title: 'Name $a$ and $b$.',
              body: 'The density is $\\frac{1}{b - a}$ on $[a, b]$ and $0$ outside it.',
              state: '$X \\sim U(0, 20)$, density $\\frac{1}{20}$',
            },
            {
              title: 'Write the event as an interval and clip it.',
              body: 'Keep only the part inside $[a, b]$. Strict and non-strict inequalities give the same answer, since $P(X = c) = 0$.',
              state: '$X > 15$: the interval $(15, 20]$',
            },
            {
              title: 'Divide its length by $b - a$.',
              body: `This is the area of a rectangle under the density (${link('prob.continuous-uniform-cdf', 'uniform CDF')}).`,
              state: '$\\frac{20 - 15}{20 - 0} = \\frac{5}{20}$',
            },
            {
              title: 'Simplify.',
              body: 'For a conditional question, divide two such lengths.',
              state: '$P(X > 15) = \\frac{1}{4}$',
            },
          ],
        },
        examples: [
          {
            title: 'an interval inside the support',
            badge: 'length ratio',
            lines: [
              { math: '$X \\sim U(2, 10)$, $P(3 < X < 7)$', why: '$b - a = 8$' },
              { math: '$\\frac{7 - 3}{8} = \\frac{4}{8}$', why: 'length of the interval' },
              { math: '$P(3 < X < 7) = \\frac{1}{2}$', why: '', answer: true },
            ],
          },
          {
            title: 'an interval that sticks out',
            badge: 'clip',
            lines: [
              { math: '$X \\sim U(0, 20)$, $P(12 \\le X \\le 25)$', why: '' },
              { math: 'clip to $[12, 20]$: length $8$', why: 'no probability beyond $20$' },
              { math: '$P = \\frac{8}{20} = \\frac{2}{5}$', why: '', answer: true },
            ],
          },
          {
            title: 'a conditional question',
            badge: 'given',
            lines: [
              { math: '$X \\sim U(0, 20)$, $P(X > 15 \\mid X > 10)$', why: 'already waited $10$ min' },
              { math: '$\\frac{P(X > 15)}{P(X > 10)} = \\frac{5/20}{10/20}$', why: 'conditional probability' },
              { math: '$= \\frac{5}{10} = \\frac{1}{2}$', why: 'still uniform on $(10, 20]$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check any interval in the [continuous distributions calculator](!/probability/calculators/continuous-distributions).',
        visual: {
          caption:
            `The density is a rectangle of width $b - a$ and height $\\frac{1}{b - a}$, so its total area is $1$. The probability of an interval is the area of the slice above it, which is just its width times the fixed height. Drag the interval in the [continuous uniform visualizer](!/probability/visual-tools/distributions/uniform-continuous). For equally likely whole numbers, use [discrete uniform probability](!${HUB}/discrete-uniform-probability) instead.`,
        },
        pitfalls: [
          {
            title: 'Reading the density as a probability',
            wrong: '$X \\sim U(0, 20)$: $P(X = 15) = \\frac{1}{20}$',
            right: 'single points have probability $0$; only intervals have area',
          },
          {
            title: 'Not clipping to the support',
            wrong: '$P(12 \\le X \\le 25) = \\frac{13}{20}$',
            right: 'only $[12, 20]$ lies in the support: $\\frac{8}{20}$',
          },
          {
            title: 'Adding one as in the discrete case',
            wrong: '$P(3 < X < 7) = \\frac{7 - 3 + 1}{10 - 2 + 1}$',
            right: 'lengths, not counts: $\\frac{4}{8}$',
          },
        ],
        related: ['discrete-uniform-probability', 'exponential-probability', 'which-distribution'],
        builtOn: [
          { label: 'Continuous uniform PDF', url: ruleUrl('prob.continuous-uniform-pdf') },
          { label: 'Continuous uniform CDF', url: ruleUrl('prob.continuous-uniform-cdf') },
          { label: 'Probability of an interval', url: ruleUrl('prob.probability-of-interval-continuous') },
          { label: 'Uniform PDF and support (lesson)', url: ruleUrl('lesson.prob.distributions.continuous.uniform.5') },
        ],
      },
    },
    {
      id: 'exponential-probability',
      slug: 'exponential-probability',
      name: 'How to find an exponential probability',
      description: 'Waiting times at a constant rate: get $\\lambda$ from the mean, then use $1 - e^{-\\lambda x}$ or the tail $e^{-\\lambda x}$.',
      uses: ['exponential CDF', 'exponential mean', 'memoryless property'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find an Exponential Probability | Learn Math Class',
        description: 'Find exponential probabilities for waiting times: get the rate from the mean, use the CDF or the tail, handle intervals and memorylessness. Examples, mistakes.',
        keywords: ['exponential probability', 'how to find exponential probability', 'exponential distribution examples', 'exponential waiting time', 'exponential cdf'],
      },
      page: {
        h1: 'How to Find an Exponential Probability',
        lead:
          'An exponential variable is the waiting time until the next event when events occur at a constant rate $\\lambda$. Its CDF has a closed form, so every probability is one or two values of $e^{-\\lambda x}$.',
        recognize:
          'A waiting time or lifetime is described by an average or a rate: "customers arrive on average every $10$ minutes", "a bulb lasts $1000$ hours on average", "$0.2$ failures per year". Test: the time is continuous, starts at $0$, and the chance of the event in the next moment does not depend on how long you have waited. Then $X \\sim \\operatorname{Exp}(\\lambda)$ with $\\lambda = 1/\\text{mean}$.',
        recognizeNote: `The model is defined in the ${link('lesson.prob.distributions.continuous.exponential.1', 'exponential distribution lesson')}.`,
        methods: [
          {
            name: 'Use the CDF and the tail',
            tag: 'standard',
            preferred: true,
            formula: 'P(X \\le x) = 1 - e^{-\\lambda x}, \\qquad P(X > x) = e^{-\\lambda x}',
            body: `The ${link('prob.exponential-cdf', 'exponential CDF')} answers any interval with two values.`,
          },
          {
            name: 'Integrate the density',
            tag: 'from scratch',
            formula: 'P(c < X < d) = \\int_c^d \\lambda e^{-\\lambda x}\\, dx = e^{-\\lambda c} - e^{-\\lambda d}',
            body: `The same result straight from the ${link('prob.exponential-pdf', 'exponential PDF')}; use it when the CDF is not given.`,
          },
        ],
        steps: {
          traceLabel: 'On arrivals every $10$ minutes on average, $P(\\text{wait} > 15 \\text{ min})$',
          items: [
            {
              title: 'Find the rate $\\lambda$.',
              body: `The mean is $1/\\lambda$ (${link('prob.exponential-mean', 'exponential mean')}), so $\\lambda = 1/\\text{mean}$. Keep the time unit.`,
              state: '$\\lambda = \\frac{1}{10}$ per minute',
            },
            {
              title: 'Write the event with the CDF or the tail.',
              body: '"Within $x$" uses $1 - e^{-\\lambda x}$, "longer than $x$" uses $e^{-\\lambda x}$, an interval uses $e^{-\\lambda c} - e^{-\\lambda d}$.',
              state: '$P(X > 15) = e^{-\\lambda \\cdot 15}$',
            },
            {
              title: 'Substitute in the same units.',
              body: 'Rate and time must use the same unit, so $\\lambda x$ has no unit.',
              state: '$e^{-0.1 \\cdot 15} = e^{-1.5}$',
            },
            {
              title: 'Evaluate and round.',
              body: 'For a conditional "already waited" question, the memoryless property removes the time already spent.',
              state: '$P(X > 15) \\approx 0.2231$',
            },
          ],
        },
        examples: [
          {
            title: 'within a time',
            badge: 'CDF',
            lines: [
              { math: 'mean $10$ min, $P(X \\le 5)$', why: '$\\lambda = 0.1$' },
              { math: '$1 - e^{-0.1 \\cdot 5} = 1 - e^{-0.5}$', why: '' },
              { math: '$P(X \\le 5) \\approx 0.3935$', why: '', answer: true },
            ],
          },
          {
            title: 'between two times',
            badge: 'interval',
            lines: [
              { math: 'mean $10$ min, $P(5 < X < 15)$', why: '' },
              { math: '$e^{-0.5} - e^{-1.5}$', why: 'tail at $5$ minus tail at $15$' },
              { math: '$\\approx 0.60653 - 0.22313 = 0.38340$', why: '' },
              { math: '$P(5 < X < 15) \\approx 0.3834$', why: '', answer: true },
            ],
          },
          {
            title: 'after waiting',
            badge: 'memoryless',
            lines: [
              { math: 'mean $10$ min, waited $10$; $P(X > 15 \\mid X > 10)$', why: '' },
              { math: '$\\frac{e^{-1.5}}{e^{-1}} = e^{-0.5}$', why: '$X > 15$ implies $X > 10$' },
              { math: '$= P(X > 5) \\approx 0.6065$', why: 'only the extra $5$ min matter', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your answer in the [continuous distributions calculator](!/probability/calculators/continuous-distributions).',
        visual: {
          caption:
            'The survival curve $e^{-\\lambda x}$ loses the same fraction of what is left in every unit of time, which is why waiting gives no credit: after any delay the remaining curve has the same shape as at the start. The area under the density between two times is the drop of that curve between them. Move $\\lambda$ in the [exponential distribution visualizer](!/probability/visual-tools/distributions/exponential).',
        },
        pitfalls: [
          {
            title: 'Using the mean as the rate',
            wrong: 'mean $10$ min, so $P(X > 15) = e^{-10 \\cdot 15}$',
            right: '$\\lambda = \\frac{1}{10}$: $P(X > 15) = e^{-1.5} \\approx 0.2231$',
          },
          {
            title: 'Swapping the CDF and the tail',
            wrong: '$P(X > 15) = 1 - e^{-1.5} \\approx 0.7769$',
            right: '$1 - e^{-\\lambda x}$ is "within $x$"; "longer than $x$" is $e^{-\\lambda x}$',
          },
          {
            title: 'Mixed time units',
            wrong: '$\\lambda = 6$ per hour with $x = 15$ minutes: $e^{-90}$',
            right: 'convert first: $15$ min $= 0.25$ h, $e^{-6 \\cdot 0.25} = e^{-1.5}$',
          },
          {
            title: 'Subtracting the time already waited from the wrong place',
            wrong: '$P(X > 15 \\mid X > 10) = P(X > 15)$',
            right: `$P(X > 15 \\mid X > 10) = P(X > 5)$ (${link('prob.exponential-memoryless', 'memoryless property')})`,
          },
        ],
        related: ['poisson-probability', 'geometric-probability', 'which-distribution'],
        builtOn: [
          { label: 'Exponential CDF', url: ruleUrl('prob.exponential-cdf') },
          { label: 'Exponential mean', url: ruleUrl('prob.exponential-mean') },
          { label: 'Memoryless property', url: ruleUrl('prob.exponential-memoryless') },
          { label: 'Exponential CDF (lesson)', url: ruleUrl('lesson.prob.distributions.continuous.exponential.6') },
        ],
      },
    },
    {
      id: 'normal-probability',
      slug: 'normal-probability',
      name: 'How to find a normal probability',
      description: 'Standardize with $z = (x - \\mu)/\\sigma$, then read the area from $\\Phi$: left tails, right tails and intervals.',
      uses: ['standardization', 'standard normal CDF', 'symmetry of the bell curve'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Normal Probability (Z-Scores) | Learn Math Class',
        description: 'Find normal probabilities with z-scores: standardize, read the left-tail area from the standard normal CDF, then take tails and intervals. Examples, mistakes.',
        keywords: ['how to find normal probability', 'normal distribution probability', 'z score probability', 'normal probability between two values', 'standard normal table'],
      },
      page: {
        h1: 'How to Find a Normal Probability',
        lead:
          'Every normal distribution is a shifted and stretched copy of the standard normal. Convert each boundary to a z-score, which says how many standard deviations it sits from the mean, then read the area from the standard normal CDF $\\Phi$.',
        recognize:
          'A measurement is said to be normally distributed with a given mean and standard deviation, and the question asks for the chance of a range: "heights with $\\mu = 175$ cm, $\\sigma = 7$ cm", "scores $N(70, 10^2)$, $P(\\text{score} > 85)$". Test: the model is stated, or the data are bell-shaped and symmetric about the mean. Then $X \\sim N(\\mu, \\sigma^2)$.',
        recognizeNote: `The model is defined in the ${link('lesson.prob.distributions.continuous.normal.1', 'normal distribution lesson')}.`,
        methods: [
          {
            name: 'Standardize and use Φ',
            tag: 'standard',
            preferred: true,
            formula: 'P(X \\le x) = \\Phi\\!\\left(\\frac{x - \\mu}{\\sigma}\\right)',
            body: `The ${link('prob.normal-standardization', 'standardization')} $Z = (X - \\mu)/\\sigma$ turns any normal into $N(0, 1)$; read $\\Phi(z)$ from a table or software.`,
          },
          {
            name: 'The 68-95-99.7 rule',
            tag: 'whole σ only',
            formula: 'P(|X - \\mu| < k\\sigma) \\approx 0.68,\\ 0.95,\\ 0.997 \\quad (k = 1, 2, 3)',
            body: 'A quick estimate when the boundaries sit exactly $1$, $2$ or $3$ standard deviations from the mean.',
          },
        ],
        steps: {
          traceLabel: 'On heights $N(175, 7^2)$, $P(X < 182)$',
          items: [
            {
              title: 'Name $\\mu$ and $\\sigma$.',
              body: 'If the variance $\\sigma^2$ is given, take its square root first.',
              state: '$\\mu = 175$, $\\sigma = 7$',
            },
            {
              title: 'Standardize each boundary.',
              body: '$z = (x - \\mu)/\\sigma$. A negative $z$ lies below the mean.',
              state: '$z = \\frac{182 - 175}{7} = 1$',
            },
            {
              title: 'Write the event as left-tail areas.',
              body: 'Left tail: $\\Phi(z)$. Right tail: $1 - \\Phi(z)$. Between: $\\Phi(z_2) - \\Phi(z_1)$. For negative $z$ use $\\Phi(-z) = 1 - \\Phi(z)$ if the table only lists positive values.',
              state: '$P(X < 182) = \\Phi(1)$',
            },
            {
              title: 'Look up $\\Phi$ and combine.',
              body: 'Use a table or software; round the final answer to $4$ places.',
              state: '$\\Phi(1) \\approx 0.8413$',
            },
          ],
        },
        examples: [
          {
            title: 'a right tail',
            badge: '1 − Φ',
            lines: [
              { math: 'scores $N(70, 10^2)$, $P(X > 85)$', why: '$\\sigma = 10$' },
              { math: '$z = \\frac{85 - 70}{10} = 1.5$', why: 'standardize' },
              { math: '$1 - \\Phi(1.5) \\approx 1 - 0.93319$', why: 'right tail' },
              { math: '$P(X > 85) \\approx 0.0668$', why: '', answer: true },
            ],
          },
          {
            title: 'between two values',
            badge: 'Φ − Φ',
            lines: [
              { math: 'heights $N(175, 7^2)$, $P(168 < X < 189)$', why: '' },
              { math: '$z_1 = \\frac{168 - 175}{7} = -1$, $z_2 = \\frac{189 - 175}{7} = 2$', why: 'two boundaries' },
              { math: '$\\Phi(2) - \\Phi(-1) \\approx 0.97725 - 0.15866$', why: '$\\Phi(-1) = 1 - \\Phi(1)$' },
              { math: '$P(168 < X < 189) \\approx 0.8186$', why: '', answer: true },
            ],
          },
          {
            title: 'variance given',
            badge: 'σ² → σ',
            lines: [
              { math: '$X \\sim N(50, 16)$, $P(X < 44)$', why: '$\\sigma^2 = 16$, so $\\sigma = 4$' },
              { math: '$z = \\frac{44 - 50}{4} = -1.5$', why: 'below the mean' },
              { math: '$\\Phi(-1.5) = 1 - \\Phi(1.5) \\approx 1 - 0.93319$', why: 'symmetry' },
              { math: '$P(X < 44) \\approx 0.0668$', why: 'mirror image of the first example', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your areas in the [continuous distributions calculator](!/probability/calculators/continuous-distributions).',
        visual: {
          caption:
            'Shifting a normal curve by $\\mu$ and stretching it by $\\sigma$ does not change the share of area that lies within a given number of standard deviations of the center. So one table of the standard normal, indexed by $z$, serves every normal distribution. Shade an interval and watch the area in the [normal distribution visualizer](!/probability/visual-tools/distributions/normal).',
        },
        pitfalls: [
          {
            title: 'Dividing by the variance',
            wrong: '$N(70, 100)$: $z = \\frac{85 - 70}{100} = 0.15$',
            right: '$\\sigma = \\sqrt{100} = 10$: $z = 1.5$',
          },
          {
            title: 'Using Φ for a right tail',
            wrong: '$P(X > 85) = \\Phi(1.5) \\approx 0.9332$',
            right: '$\\Phi$ is the area to the left: $1 - \\Phi(1.5) \\approx 0.0668$',
          },
          {
            title: 'Sign slip with negative z',
            wrong: '$\\Phi(-1) = -0.8413$',
            right: 'areas are never negative: $\\Phi(-1) = 1 - \\Phi(1) \\approx 0.1587$',
          },
          {
            title: 'Treating strict and non-strict ends differently',
            wrong: '$P(X \\le 182) = P(X < 182) + P(X = 182)$ with $P(X = 182) > 0$',
            right: 'for a continuous variable $P(X = 182) = 0$, so both are $\\Phi(1)$',
          },
        ],
        related: ['normal-percentiles', 'normal-approximation', 'which-distribution'],
        builtOn: [
          { label: 'Normal standardization', url: ruleUrl('prob.normal-standardization') },
          { label: 'Standard normal PDF', url: ruleUrl('prob.standard-normal-pdf') },
          { label: 'Normal CDF (lesson)', url: ruleUrl('lesson.prob.distributions.continuous.normal.6') },
          { label: 'Probability of an interval via the CDF', url: ruleUrl('prob.probability-of-interval-via-cdf') },
        ],
      },
    },
    {
      id: 'normal-percentiles',
      slug: 'normal-percentiles',
      name: 'How to find a normal percentile',
      description: 'Go backwards from an area to a value: find $z$ with $\\Phi(z) = p$, then $x = \\mu + z\\sigma$; also solve for $\\mu$ or $\\sigma$.',
      uses: ['inverse standard normal', 'standardization', 'quantiles'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Normal Percentile (Inverse Normal) | Learn Math Class',
        description: 'Find normal percentiles and cutoffs: turn the area into a left tail, find z with the inverse normal, then x = mu + z sigma. Top 10%, middle 95%, solving for mu.',
        keywords: ['normal percentile', 'inverse normal', 'how to find a percentile normal distribution', 'z score from percentile', 'normal cutoff value'],
      },
      page: {
        h1: 'How to Find a Normal Percentile',
        lead:
          'A percentile question gives an area and asks for the value that cuts it off. Turn the area into a left-tail probability $p$, find the z-score with $\\Phi(z) = p$, and undo the standardization: $x = \\mu + z\\sigma$.',
        recognize:
          'The question gives a percentage and asks for a value: "the score needed for the top $10\\%$", "the cutoff for the lowest $5\\%$", "the middle $95\\%$ of heights", "set the mean so that only $2\\%$ are underweight". Test: the unknown is $x$, $\\mu$ or $\\sigma$, not a probability.',
        recognizeNote: `Quantiles of the normal are explained in the ${link('lesson.prob.distributions.continuous.normal.10', 'normal quantiles lesson section')}.`,
        steps: {
          traceLabel: 'On scores $N(70, 10^2)$, the cutoff for the top $10\\%$',
          items: [
            {
              title: 'Turn the wording into a left-tail area $p$.',
              body: '"Top $10\\%$" leaves $90\\%$ to the left, so $p = 0.90$. "Bottom $5\\%$" is $p = 0.05$. "Middle $95\\%$" puts $2.5\\%$ in each tail: $p = 0.975$ for the upper end.',
              state: '$p = 0.90$',
            },
            {
              title: 'Find $z$ with $\\Phi(z) = p$.',
              body: 'Use the inverse normal in software, or find the closest area inside a table. Lower percentiles give negative $z$.',
              state: '$z_{0.90} \\approx 1.2816$',
            },
            {
              title: 'Undo the standardization.',
              body: `From $z = (x - \\mu)/\\sigma$ (${link('prob.normal-standardization', 'standardization')}): $x = \\mu + z\\sigma$.`,
              state: '$x = 70 + 1.2816 \\cdot 10$',
            },
            {
              title: 'Compute and answer in units.',
              body: 'If the unknown is $\\mu$ or $\\sigma$ instead, solve the same equation for it.',
              state: '$x \\approx 82.82$ points',
            },
          ],
        },
        examples: [
          {
            title: 'a top percentage',
            badge: 'upper cutoff',
            lines: [
              { math: 'scores $N(70, 10^2)$, top $10\\%$', why: 'left area $0.90$' },
              { math: '$z_{0.90} \\approx 1.2816$', why: 'inverse normal' },
              { math: '$x = 70 + 1.2816 \\cdot 10 \\approx 82.82$', why: '', answer: true },
            ],
          },
          {
            title: 'the middle 95%',
            badge: 'two cutoffs',
            lines: [
              { math: 'scores $N(70, 10^2)$, middle $95\\%$', why: '$2.5\\%$ in each tail' },
              { math: '$z_{0.975} \\approx 1.96$, $z_{0.025} \\approx -1.96$', why: 'symmetric about $0$' },
              { math: '$70 \\pm 1.96 \\cdot 10$', why: '' },
              { math: 'from $50.4$ to $89.6$ points', why: '', answer: true },
            ],
          },
          {
            title: 'solving for the mean',
            badge: 'unknown μ',
            lines: [
              { math: 'fill weight $N(\\mu, 4^2)$ g; only $2\\%$ below $500$ g', why: '$500$ is the $2$nd percentile' },
              { math: '$z_{0.02} \\approx -2.0537$', why: 'lower tail, negative $z$' },
              { math: '$500 = \\mu - 2.0537 \\cdot 4$', why: '$x = \\mu + z\\sigma$' },
              { math: '$\\mu \\approx 508.21$ g', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Find any quantile in the [continuous distributions calculator](!/probability/calculators/continuous-distributions).',
        visual: {
          caption:
            'A probability question fixes a point on the axis and asks for the shaded area; a percentile question fixes the area and slides the point until the shading matches. Because every normal is the standard one stretched by $\\sigma$ and shifted by $\\mu$, the point on the standard curve, $z$, maps to $\\mu + z\\sigma$ on any other. Slide the cutoff in the [normal distribution visualizer](!/probability/visual-tools/distributions/normal).',
        },
        pitfalls: [
          {
            title: 'Using the right-tail area',
            wrong: 'top $10\\%$: find $z$ with $\\Phi(z) = 0.10$, $z = -1.2816$',
            right: 'the area to the left is $0.90$: $z = 1.2816$',
          },
          {
            title: 'Middle 95% with p = 0.95',
            wrong: '$z_{0.95} \\approx 1.6449$, so $70 \\pm 16.45$',
            right: 'each tail holds $2.5\\%$: $z_{0.975} \\approx 1.96$, so $70 \\pm 19.6$',
          },
          {
            title: 'Dropping the sign of a lower z',
            wrong: 'bottom $2\\%$: $500 = \\mu + 2.0537 \\cdot 4$, $\\mu \\approx 491.79$',
            right: 'the lower cutoff is below the mean: $z = -2.0537$, $\\mu \\approx 508.21$',
          },
        ],
        related: ['normal-probability', 'which-distribution'],
        builtOn: [
          { label: 'Normal standardization', url: ruleUrl('prob.normal-standardization') },
          { label: 'Quantiles of the normal (lesson)', url: ruleUrl('lesson.prob.distributions.continuous.normal.10') },
          { label: 'Normal CDF (lesson)', url: ruleUrl('lesson.prob.distributions.continuous.normal.6') },
        ],
      },
    },

    // ═══ III. Composite — approximations ═══════════════════════════════
    {
      id: 'poisson-approximation',
      slug: 'poisson-approximation',
      name: 'How to approximate a binomial with a Poisson',
      description: 'Many trials, small $p$: replace $\\operatorname{Bin}(n, p)$ by $\\operatorname{Poisson}(np)$ and use the short Poisson formula.',
      uses: ['binomial PMF', 'Poisson PMF', 'law of rare events'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Approximate a Binomial with a Poisson | Learn Math Class',
        description: 'Approximate a binomial by a Poisson: check n > 20 and p < 0.05, set lambda = np, use the Poisson PMF and compare with the exact value. Examples and mistakes.',
        keywords: ['poisson approximation to binomial', 'how to use poisson approximation', 'poisson approximation examples', 'binomial to poisson', 'lambda np'],
      },
      page: {
        h1: 'How to Approximate a Binomial with a Poisson',
        lead:
          'When a binomial has many trials and a small success probability, its counts behave like a Poisson variable with the same mean $\\lambda = np$. The Poisson formula has no large binomial coefficient and no huge power, so sums stay short.',
        recognize:
          'A binomial count with a large $n$ and a small $p$, so successes are rare: "$1000$ items, each defective with probability $0.002$", "$500$ policies, claim rate $0.4\\%$". Test: $n > 20$ and $p < 0.05$ (the rule of thumb on the site). If $p$ is close to $1$, count the failures instead.',
        recognizeNote: `The link between the two models appears in the ${link('lesson.prob.distributions.discrete.poisson.1', 'Poisson distribution lesson')}.`,
        methods: [
          {
            name: 'Poisson with λ = np',
            tag: 'rare events',
            preferred: true,
            formula: '\\binom{n}{k} p^k (1-p)^{n-k} \\approx \\frac{e^{-np}(np)^k}{k!}',
            body: `Use the ${link('prob.poisson-pmf', 'Poisson PMF')} with $\\lambda = np$; then follow [Poisson probability](!${HUB}/poisson-probability).`,
          },
          {
            name: 'Exact binomial',
            tag: 'small n',
            formula: 'P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}',
            body: `With few trials, or with software at hand, compute the ${link('prob.binomial-pmf', 'binomial PMF')} directly.`,
          },
        ],
        steps: {
          traceLabel: 'On $n = 500$, $p = 0.004$, $P(X = 3)$',
          items: [
            {
              title: 'Check the conditions.',
              body: 'The count is binomial, $n$ is large and $p$ is small.',
              state: '$n = 500 > 20$, $p = 0.004 < 0.05$ ✓',
            },
            {
              title: 'Set $\\lambda = np$.',
              body: 'The Poisson keeps the binomial mean.',
              state: '$\\lambda = 500 \\cdot 0.004 = 2$',
            },
            {
              title: 'Compute with the Poisson PMF.',
              body: 'Add terms or use the complement exactly as for a Poisson variable.',
              state: '$e^{-2} \\cdot \\frac{2^3}{3!} = \\frac{4}{3} e^{-2} \\approx 0.1804$',
            },
            {
              title: 'Report it as an approximation.',
              body: 'Write $\\approx$. If software is available, compare with the exact binomial value.',
              state: 'exact $\\operatorname{Bin}(500, 0.004)$: $0.1808$',
            },
          ],
        },
        examples: [
          {
            title: 'no successes',
            badge: 'k = 0',
            lines: [
              { math: '$n = 1000$, $p = 0.002$, $P(X = 0)$', why: '$\\lambda = 2$' },
              { math: '$P(X = 0) \\approx e^{-2} \\approx 0.1353$', why: 'Poisson' },
              { math: 'exact: $(0.998)^{1000} \\approx 0.1351$', why: 'close agreement', answer: true },
            ],
          },
          {
            title: 'at most k successes',
            badge: 'short sum',
            lines: [
              { math: '$n = 200$, $p = 0.01$, $P(X \\le 2)$', why: '$\\lambda = 2$' },
              { math: '$e^{-2}\\left(1 + 2 + \\frac{2^2}{2}\\right) = 5\\, e^{-2}$', why: 'three Poisson terms' },
              { math: '$P(X \\le 2) \\approx 0.6767$', why: 'exact binomial: $0.6767$', answer: true },
            ],
          },
          {
            title: 'at least k successes',
            badge: 'complement',
            lines: [
              { math: '$n = 300$, $p = 0.01$, $P(X \\ge 2)$', why: '$\\lambda = 3$' },
              { math: '$1 - e^{-3}(1 + 3) = 1 - 4\\, e^{-3}$', why: 'remove $X = 0$ and $X = 1$' },
              { math: '$P(X \\ge 2) \\approx 0.8009$', why: 'exact binomial: $0.8024$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Compare both values in the [discrete distributions calculator](!/probability/calculators/discrete-distributions).',
        visual: {
          caption:
            'Keep the mean $np$ fixed and let $n$ grow: each trial gets rarer, the chance of two successes in one trial vanishes, and the binomial bars settle onto the Poisson bars with $\\lambda = np$. That limit is the law of rare events. Set $\\lambda$ in the [Poisson distribution visualizer](!/probability/visual-tools/distributions/poisson) and compare it with a large binomial in the [binomial distribution visualizer](!/probability/visual-tools/distributions/binomial).',
        },
        pitfalls: [
          {
            title: 'Using it when p is not small',
            wrong: '$n = 50$, $p = 0.3$: $\\operatorname{Poisson}(15)$',
            right: '$p$ is too large; the binomial variance $np(1-p) = 10.5$ is far below $15$. Use the exact binomial or the normal approximation',
          },
          {
            title: 'Wrong λ',
            wrong: '$\\lambda = n/p$ or $\\lambda = p$',
            right: '$\\lambda = np$, the expected number of successes',
          },
          {
            title: 'Writing an equals sign',
            wrong: '$P(X = 3) = 0.1804$ for $\\operatorname{Bin}(500, 0.004)$',
            right: '$P(X = 3) \\approx 0.1804$; the exact value is $0.1808$',
          },
        ],
        related: ['poisson-probability', 'binomial-probability', 'normal-approximation'],
        builtOn: [
          { label: 'Binomial PMF', url: ruleUrl('prob.binomial-pmf') },
          { label: 'Poisson PMF', url: ruleUrl('prob.poisson-pmf') },
          { label: 'Binomial mean', url: ruleUrl('prob.binomial-mean') },
          { label: 'Poisson applications (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.poisson.11') },
        ],
      },
    },
    {
      id: 'normal-approximation',
      slug: 'normal-approximation',
      name: 'How to approximate a binomial with a normal',
      description: 'Large $n$: use $N(np,\\, np(1-p))$, move each boundary by $0.5$ (continuity correction), then standardize.',
      uses: ['binomial mean and variance', 'continuity correction', 'standardization'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Approximate a Binomial with a Normal | Learn Math Class',
        description: 'Approximate a binomial by a normal: check np and n(1-p), find the mean and SD, apply the continuity correction, standardize and read Phi. Examples and mistakes.',
        keywords: ['normal approximation to binomial', 'continuity correction', 'how to use normal approximation', 'normal approximation examples', 'binomial to normal'],
      },
      page: {
        h1: 'How to Approximate a Binomial with a Normal',
        lead:
          'A binomial with many trials has a bell-shaped histogram, so a normal curve with the same mean and standard deviation gives its probabilities. Because the binomial lives on whole numbers, widen each boundary by half a unit first (the continuity correction), then standardize.',
        recognize:
          'A binomial count with a large $n$ and a long sum: "$100$ coin tosses, $P(\\text{at least } 60 \\text{ heads})$", "$200$ voters, $30\\%$ support, $P(55 \\le X \\le 70)$". Test: $np \\ge 10$ and $n(1-p) \\ge 10$. If $p$ is tiny instead, use the Poisson approximation.',
        recognizeNote: `Why sums of many trials become normal is explained in the ${link('lesson.prob.central-limit-theorem.6', 'central limit theorem lesson')}.`,
        methods: [
          {
            name: 'Normal with continuity correction',
            tag: 'standard',
            preferred: true,
            formula: 'P(X \\le k) \\approx \\Phi\\!\\left(\\frac{k + 0.5 - np}{\\sqrt{np(1-p)}}\\right)',
            body: `Match the ${link('prob.binomial-mean', 'binomial mean')} and ${link('prob.binomial-variance', 'variance')}, widen by $0.5$, then use [normal probability](!${HUB}/normal-probability).`,
          },
          {
            name: 'Exact binomial sum',
            tag: 'software',
            formula: 'P(X \\le k) = \\sum_{j=0}^{k} \\binom{n}{j} p^j (1-p)^{n-j}',
            body: `Exact, but long by hand; use the [binomial probability](!${HUB}/binomial-probability) steps or a calculator.`,
          },
        ],
        steps: {
          traceLabel: 'On $100$ fair coin tosses, $P(X \\ge 60)$',
          items: [
            {
              title: 'Check the conditions.',
              body: 'Both expected counts, successes and failures, must be at least $10$.',
              state: '$np = 50 \\ge 10$, $n(1-p) = 50 \\ge 10$ ✓',
            },
            {
              title: 'Find the mean and standard deviation.',
              body: '$\\mu = np$, $\\sigma = \\sqrt{np(1-p)}$.',
              state: '$\\mu = 50$, $\\sigma = \\sqrt{25} = 5$',
            },
            {
              title: 'Apply the continuity correction.',
              body: 'Each whole number $k$ is the bar from $k - 0.5$ to $k + 0.5$. Widen the event to cover its bars: $X \\ge 60 \\to Y \\ge 59.5$, $X \\le 45 \\to Y \\le 45.5$, $X < 60 \\to Y \\le 59.5$, $X = 50 \\to 49.5 \\le Y \\le 50.5$.',
              state: '$P(X \\ge 60) \\approx P(Y \\ge 59.5)$',
            },
            {
              title: 'Standardize.',
              body: '$z = (\\text{corrected boundary} - \\mu)/\\sigma$.',
              state: '$z = \\frac{59.5 - 50}{5} = 1.9$',
            },
            {
              title: 'Read Φ and report an approximation.',
              body: 'Take left tails, right tails or differences as for any normal.',
              state: '$1 - \\Phi(1.9) \\approx 1 - 0.97128 \\approx 0.0287$ (exact $0.0284$)',
            },
          ],
        },
        examples: [
          {
            title: 'at most k',
            badge: 'k + 0.5',
            lines: [
              { math: '$n = 100$, $p = 0.5$, $P(X \\le 45)$', why: '$\\mu = 50$, $\\sigma = 5$' },
              { math: '$P(Y \\le 45.5)$, $z = \\frac{45.5 - 50}{5} = -0.9$', why: 'include the bar at $45$' },
              { math: '$\\Phi(-0.9) \\approx 0.18406$', why: '' },
              { math: '$P(X \\le 45) \\approx 0.1841$', why: 'exact binomial: $0.1841$', answer: true },
            ],
          },
          {
            title: 'exactly k',
            badge: 'one bar',
            lines: [
              { math: '$n = 100$, $p = 0.5$, $P(X = 50)$', why: 'one bar, width $1$' },
              { math: '$P(49.5 \\le Y \\le 50.5)$: $z = \\pm 0.1$', why: '$\\pm 0.5 / 5$' },
              { math: '$\\Phi(0.1) - \\Phi(-0.1) \\approx 0.53983 - 0.46017$', why: '' },
              { math: '$P(X = 50) \\approx 0.0797$', why: 'exact binomial: $0.0796$', answer: true },
            ],
          },
          {
            title: 'a range with p ≠ 0.5',
            badge: 'two corrections',
            lines: [
              { math: '$n = 200$, $p = 0.3$, $P(55 \\le X \\le 70)$', why: '$\\mu = 60$, $\\sigma = \\sqrt{42} \\approx 6.4807$' },
              { math: '$P(54.5 \\le Y \\le 70.5)$: $z_1 \\approx -0.8487$, $z_2 \\approx 1.6202$', why: 'widen both ends' },
              { math: '$\\Phi(1.6202) - \\Phi(-0.8487) \\approx 0.94741 - 0.19802$', why: '' },
              { math: '$P(55 \\le X \\le 70) \\approx 0.7494$', why: 'exact binomial: $0.7469$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Compare with the exact value in the [discrete distributions calculator](!/probability/calculators/discrete-distributions).',
        visual: {
          caption:
            'Draw the binomial PMF as bars of width $1$ centered on the whole numbers. The normal curve with the same mean and spread runs through the tops of the bars, so the area of a group of bars is close to the area under the curve over the same stretch, and that stretch ends half a unit beyond the outer counts. Leaving out the half units cuts off half of each end bar. Compare the bars with the curve in the [binomial distribution visualizer](!/probability/visual-tools/distributions/binomial).',
        },
        pitfalls: [
          {
            title: 'No continuity correction',
            wrong: '$P(X \\le 45) \\approx \\Phi(-1) \\approx 0.1587$',
            right: 'use $45.5$: $\\Phi(-0.9) \\approx 0.1841$, which matches the exact value',
          },
          {
            title: 'Correcting in the wrong direction',
            wrong: '$P(X < 60) \\approx P(Y \\le 60.5)$',
            right: '$X < 60$ means $X \\le 59$, so $P(Y \\le 59.5)$',
          },
          {
            title: 'Using the variance as σ',
            wrong: '$n = 200$, $p = 0.3$: $\\sigma = 42$',
            right: '$\\sigma = \\sqrt{np(1-p)} = \\sqrt{42} \\approx 6.4807$',
          },
          {
            title: 'Ignoring the conditions',
            wrong: '$n = 20$, $p = 0.05$: normal with $\\mu = 1$',
            right: '$np = 1 < 10$; the histogram is skewed, so use the exact binomial or a Poisson',
          },
        ],
        related: ['normal-probability', 'poisson-approximation', 'binomial-probability'],
        builtOn: [
          { label: 'Binomial mean', url: ruleUrl('prob.binomial-mean') },
          { label: 'Binomial variance', url: ruleUrl('prob.binomial-variance') },
          { label: 'Normal standardization', url: ruleUrl('prob.normal-standardization') },
          { label: 'Central limit theorem (lesson)', url: ruleUrl('lesson.prob.central-limit-theorem.1') },
        ],
      },
    },

    // ═══ IV. Strategy ═══════════════════════════════════════════════════
    {
      id: 'which-distribution',
      slug: 'which-distribution',
      name: 'Which probability distribution should I use?',
      description: 'A decision tree: equally likely values, then counted or measured, then what produces the count or the measurement.',
      uses: 'leads to 9 distributions',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Probability Distribution to Use? Decision Tree | Learn Math Class',
        description: 'Choose the right distribution: uniform, binomial, hypergeometric, geometric, negative binomial, Poisson, exponential or normal, from what the problem describes.',
        keywords: ['which probability distribution to use', 'how to identify a distribution', 'binomial or poisson', 'choosing a probability distribution', 'distribution decision tree'],
      },
      page: {
        h1: 'Which Probability Distribution Should I Use?',
        lead: `Each standard distribution comes from one kind of random experiment, so you identify it from how the outcomes are produced, not from the numbers. The questions below follow the ${link('lesson.prob.distributions.discrete.decide', 'decision flowchart for discrete distributions')} and add the three common continuous models.`,
        recognize:
          'Look at three things in the problem: whether all possible values are equally likely, whether the quantity is counted (whole numbers) or measured (any value in a range), and what mechanism produces it: a fixed number of trials, draws without replacement, trials until a success, events at a rate, a waiting time, or a bell-shaped measurement.',
        tree: {
          rootId: 'equal',
          svgW: 1100,
          nodes: {
            equal: {
              type: 'q',
              text: 'Are all possible values equally likely?',
              children: [
                { label: 'yes', to: 'uniformLeaf' },
                { label: 'no', to: 'kind' },
              ],
            },
            kind: {
              type: 'q',
              text: 'Is the quantity counted or measured?',
              children: [
                { label: 'counted', to: 'count' },
                { label: 'measured', to: 'measure' },
              ],
            },
            count: {
              type: 'q',
              text: 'What produces the count?',
              children: [
                { label: 'n fixed trials', to: 'binomialLeaf' },
                { label: 'no replacement', to: 'hyperLeaf' },
                { label: 'until a success', to: 'geometricLeaf' },
                { label: 'rate λ', to: 'poissonLeaf' },
              ],
            },
            measure: {
              type: 'q',
              text: 'What is measured?',
              children: [
                { label: 'waiting time', to: 'exponentialLeaf' },
                { label: 'bell shape', to: 'normalLeaf' },
              ],
            },
            uniformLeaf: { type: 'leaf', to: 'continuous-uniform-probability', short: 'Uniform' },
            binomialLeaf: { type: 'leaf', to: 'binomial-probability', short: 'Binomial' },
            hyperLeaf: { type: 'leaf', to: 'hypergeometric-probability', short: 'Hypergeometric' },
            geometricLeaf: { type: 'leaf', to: 'geometric-probability', short: 'Geometric' },
            poissonLeaf: { type: 'leaf', to: 'poisson-probability', short: 'Poisson' },
            exponentialLeaf: { type: 'leaf', to: 'exponential-probability', short: 'Exponential' },
            normalLeaf: { type: 'leaf', to: 'normal-probability', short: 'Normal' },
          },
          branches: [
            {
              condition: 'Every possible value has the same chance: a fair die, a random integer in a range, or a time or point that is equally likely anywhere in an interval.',
              answer: `For an interval $[a, b]$, use [continuous uniform probability](!${HUB}/continuous-uniform-probability): length over $b - a$. For a list of whole numbers, use [discrete uniform probability](!${HUB}/discrete-uniform-probability): count over $b - a + 1$.`,
            },
            {
              condition: 'You count the successes in a fixed number $n$ of independent trials, each with the same success probability $p$.',
              answer: `Use [binomial probability](!${HUB}/binomial-probability). For large $n$, use the [Poisson approximation](!${HUB}/poisson-approximation) when $p$ is small or the [normal approximation](!${HUB}/normal-approximation) when $np$ and $n(1-p)$ are both at least $10$.`,
            },
            {
              condition: 'You draw a fixed number of items without replacement from a finite group with two kinds of items and count one kind.',
              answer: `Use [hypergeometric probability](!${HUB}/hypergeometric-probability). If the sample is under $5\\%$ of the population, the binomial with $p = K/N$ is a good approximation.`,
            },
            {
              condition: 'You repeat independent trials with the same success probability until a success happens and ask on which trial it comes.',
              answer: `For the first success, use [geometric probability](!${HUB}/geometric-probability). For the $r$th success with $r > 1$, use [negative binomial probability](!${HUB}/negative-binomial-probability).`,
            },
            {
              condition: 'You count events that occur independently at an average rate $\\lambda$ in an interval of time or space, with no fixed number of trials.',
              answer: `Use [Poisson probability](!${HUB}/poisson-probability), with $\\lambda$ scaled to the interval in the question.`,
            },
            {
              condition: 'You measure the waiting time until the next event when events occur at a constant rate, or a lifetime that does not wear out.',
              answer: `Use [exponential probability](!${HUB}/exponential-probability) with $\\lambda = 1/\\text{mean}$.`,
            },
            {
              condition: 'You measure a quantity whose values cluster symmetrically around a mean in a bell shape, or the problem states a normal model.',
              answer: `Use [normal probability](!${HUB}/normal-probability) with z-scores. When the question gives a percentage and asks for a value, use [normal percentiles](!${HUB}/normal-percentiles).`,
            },
          ],
        },
        related: ['binomial-probability', 'poisson-probability', 'normal-probability'],
        builtOn: [
          { label: 'Identifying the distribution type (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.decide') },
          { label: 'Choosing a continuous distribution (lesson)', url: ruleUrl('lesson.prob.distributions.continuous.decision') },
          { label: 'Types of discrete distributions (lesson)', url: ruleUrl('lesson.prob.distributions.discrete.types') },
        ],
      },
    },
  ],

  categories: [
    { id: 'composite', label: 'Finding distribution probabilities', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a distribution', blurb: 'Strategy' },
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
    title: 'Other probability methods',
    links: [
      { url: '/probability/methods', label: 'Probability methods' },
      { url: '/probability/random-variables/methods', label: 'Random variable methods' },
    ],
  },
};

export default distributionsMethods;
