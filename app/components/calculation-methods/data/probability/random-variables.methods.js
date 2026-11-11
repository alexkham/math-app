// random-variables.methods.js (probability)
// Single data source for /probability/random-variables/methods (hub) and
// /probability/random-variables/methods/[view] (leaf pages). Section hub: /probability/methods.
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/probability/random-variables/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/probability/random-variables/methods';

const randomVariablesMethods = {
  hubPath: HUB,
  hubLabel: 'random variable methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'linearity-of-expectation',
      name: 'How to find the expected value of a sum',
      subtitle: 'Linearity of expectation',
      glyph: 'E[X+Y]',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The variable is a sum or a linear combination of variables whose means you know: $X + Y$, $3X - 2Y + 5$, the total of $n$ dice. It holds whether or not the variables are independent.',
      formula: 'E[aX + bY + c] = a\\,E[X] + b\\,E[Y] + c',
      fields: {
        steps: [
          '1. Write the variable as a sum of simpler pieces, each multiplied by a constant.',
          '2. Replace each piece by its mean, keep the constants, and add.',
        ],
        worked_example: '$E[X] = 4,\\ E[Y] = 1:\\quad E[3X - 2Y + 5] = 3 \\cdot 4 - 2 \\cdot 1 + 5 = 15$',
      },
      links: [
        { url: ruleUrl('prob.linearity-of-expectation'), label: 'Linearity of expectation' },
        { url: ruleUrl('lesson.prob.expected-value.sum'), label: 'Expected value of a sum (lesson)' },
        { url: ruleUrl('prob.expected-value-of-constant'), label: 'Expected value of a constant' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'expected-value',
      slug: 'expected-value',
      name: 'How to find the expected value of a random variable',
      description: 'Weight every value by its probability and add; for a density, integrate $x f(x)$ instead.',
      uses: ['pmf', 'pdf', 'weighted average'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Expected Value of a Random Variable | Learn Math Class',
        description: 'Find the expected value of a random variable: list values and probabilities, multiply, add; integrate x f(x) for a density. Examples and common mistakes.',
        keywords: ['how to find expected value', 'expected value of a random variable', 'expected value formula', 'expected value examples', 'mean of a probability distribution'],
      },
      page: {
        h1: 'How to Find the Expected Value of a Random Variable',
        lead:
          'The expected value is the long-run average of a random variable. You get it by weighting each possible value by its probability and adding the results; for a continuous variable the sum becomes an integral.',
        recognize:
          'The question asks for a mean, an average outcome, a fair price, or a long-run gain: "how much do you expect to win?", "average number of defects", $E[X]$ or $\\mu$. Typical inputs: a table of values and probabilities, a formula $p(x)$, a density $f(x)$ on an interval. Test: can you list (or integrate over) every value with its probability? Then compute the weighted average.',
        recognizeNote: `Expected value is defined in the ${link('lesson.prob.expected-value', 'expected value lesson')}.`,
        methods: [
          {
            name: 'Weighted sum over a pmf',
            tag: 'discrete',
            preferred: true,
            formula: 'E[X] = \\sum_x x \\, p(x)',
            body: `For a table or a ${link('prob.expected-value-discrete', 'discrete formula')}: multiply each value by its probability and add.`,
          },
          {
            name: 'Integral over a pdf',
            tag: 'continuous',
            formula: 'E[X] = \\int_{-\\infty}^{\\infty} x \\, f(x) \\, dx',
            body: `For a density, ${link('prob.expected-value-continuous', 'integrate x times the density')} over the support.`,
          },
          {
            name: 'Formula of a named distribution',
            tag: 'shortcut',
            formula: 'X \\sim \\text{Bin}(n, p) \\;\\Rightarrow\\; E[X] = np',
            body: `When $X$ follows a known distribution, use its ${link('lesson.prob.expected-value.individualdist', 'mean formula')} directly.`,
          },
        ],
        steps: {
          traceLabel: 'On $X \\in \\{0, 1, 2, 3\\}$ with probabilities $0.1,\\ 0.3,\\ 0.4,\\ 0.2$',
          items: [
            {
              title: 'List every value with its probability.',
              body: 'Use a table, the pmf formula, or the density and its support.',
              state: '$x$: $0, 1, 2, 3$; $p(x)$: $0.1, 0.3, 0.4, 0.2$',
            },
            {
              title: 'Check that the probabilities add to 1.',
              body: `A missing value or a typo shows up here (${link('prob.pmf-normalization', 'normalization')}). For a density, check that it integrates to $1$.`,
              state: '$0.1 + 0.3 + 0.4 + 0.2 = 1$ ✓',
            },
            {
              title: 'Multiply each value by its probability and add.',
              body: 'For a density, integrate $x f(x)$ over the support instead.',
              state: '$0 + 0.3 + 0.8 + 0.6 = 1.7$',
            },
            {
              title: 'Check that the answer is plausible.',
              body: 'The mean lies between the smallest and largest value, closer to the values with more weight. It need not be a possible value.',
              state: '$E[X] = 1.7$, between $0$ and $3$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a fair die',
            badge: 'equally likely',
            lines: [
              { math: '$p(x) = \\frac{1}{6}$ for $x = 1, \\dots, 6$', why: 'six equal weights' },
              { math: '$E[X] = \\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = \\frac{21}{6}$', why: 'weighted sum' },
              { math: '$E[X] = 3.5$', why: 'not a face, still the mean', answer: true },
            ],
          },
          {
            title: 'a game with a gain and a loss',
            badge: 'fair price',
            lines: [
              { math: '$X = 10$ with $P = \\frac{1}{4}$, $X = -2$ with $P = \\frac{3}{4}$', why: 'win 10 dollars or lose 2' },
              { math: '$E[X] = 10 \\cdot \\frac{1}{4} + (-2) \\cdot \\frac{3}{4} = \\frac{10}{4} - \\frac{6}{4}$', why: 'losses enter with a minus sign' },
              { math: '$E[X] = 1$', why: 'average gain of 1 dollar per play', answer: true },
            ],
          },
          {
            title: 'a density on an interval',
            badge: 'continuous',
            lines: [
              { math: '$f(x) = 2x$ on $[0, 1]$', why: '$\\int_0^1 2x \\, dx = 1$ ✓' },
              { math: '$E[X] = \\int_0^1 x \\cdot 2x \\, dx = \\int_0^1 2x^2 \\, dx$', why: 'integrate $x f(x)$' },
              { math: '$E[X] = \\left[\\frac{2x^3}{3}\\right]_0^1 = \\frac{2}{3}$', why: 'power rule, then evaluate', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check a table of your own in the [expected value calculator](!/probability/calculators/expected-value).',
        visual: {
          caption:
            'Put a weight $p(x)$ at each position $x$ on a number line: the expected value is the point where the line balances. Heavy weights pull the balance point toward them, which is why the mean of $0, 1, 2, 3$ with weights $0.1, 0.3, 0.4, 0.2$ sits at $1.7$, right of the middle. Drag the weights yourself in the [discrete expected value visualizer](!/probability/visual-tools/expected-value/discrete).',
        },
        pitfalls: [
          {
            title: 'Averaging the values without their weights',
            wrong: '$E[X] = \\frac{0 + 1 + 2 + 3}{4} = 1.5$',
            right: 'weight by probability: $0.3 + 0.8 + 0.6 = 1.7$',
            note: 'The plain average is correct only when all values are equally likely.',
          },
          {
            title: 'Probabilities that do not add to 1',
            wrong: 'using $0.1, 0.3, 0.4$ and forgetting $P(X = 3) = 0.2$',
            right: 'list the full support first, then check the sum is $1$',
          },
          {
            title: 'Integrating the density instead of x times the density',
            wrong: '$E[X] = \\int_0^1 2x \\, dx = 1$',
            right: '$E[X] = \\int_0^1 x \\cdot 2x \\, dx = \\frac{2}{3}$',
          },
          {
            title: 'Pushing the expectation inside a square',
            wrong: '$E[X^2] = (E[X])^2 = 2.89$',
            right: '$E[X^2] = \\sum x^2 p(x) = 0.3 + 1.6 + 1.8 = 3.7$',
            note: `Average the squared values (${link('prob.lotus-discrete', 'expectation of a function')}).`,
          },
        ],
        related: ['linearity-of-expectation', 'variance', 'indicator-variables'],
        builtOn: [
          { label: 'Expected value, discrete', url: ruleUrl('prob.expected-value-discrete') },
          { label: 'Expected value, continuous', url: ruleUrl('prob.expected-value-continuous') },
          { label: 'PMF normalization', url: ruleUrl('prob.pmf-normalization') },
        ],
      },
    },
    {
      id: 'variance',
      slug: 'variance',
      name: 'How to find the variance of a random variable',
      description: 'Find the mean, then the mean of the square, and subtract: $E[X^2] - (E[X])^2$.',
      uses: ['expected value', 'computational formula', 'linear transform'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Variance of a Random Variable | Learn Math Class',
        description: 'Find the variance of a random variable: compute the mean, the mean of the square, subtract, check the sign. Discrete and continuous examples, common mistakes.',
        keywords: ['how to find variance', 'variance of a random variable', 'variance formula probability', 'variance examples', 'e x squared minus mean squared'],
      },
      page: {
        h1: 'How to Find the Variance of a Random Variable',
        lead:
          'Variance measures how far a random variable typically lands from its mean, in squared units. The quickest route is the shortcut: the mean of the square minus the square of the mean.',
        recognize:
          'The question asks for spread, risk, variability, $\\operatorname{Var}(X)$ or $\\sigma^2$. Typical inputs: a pmf table, a density on an interval, a linear change $aX + b$ of a variable with known variance. Test: do you know (or can you compute) $E[X]$? Then you are one more weighted sum away from the variance.',
        recognizeNote: `Variance is defined in the ${link('lesson.prob.variance', 'variance lesson')}.`,
        methods: [
          {
            name: 'Shortcut formula',
            tag: 'usual',
            preferred: true,
            formula: '\\operatorname{Var}(X) = E[X^2] - (E[X])^2',
            body: `Two weighted sums and one subtraction (${link('prob.variance-computational-formula', 'computational formula')}). Best for tables and densities.`,
          },
          {
            name: 'Definition with deviations',
            tag: 'by definition',
            formula: '\\operatorname{Var}(X) = E\\big[(X - \\mu)^2\\big]',
            body: `Square each distance from the mean and average (${link('prob.variance-definition', 'definition of variance')}). Good when the mean is a round number.`,
          },
        ],
        steps: {
          traceLabel: 'On $X \\in \\{0, 1, 2, 3\\}$ with probabilities $0.1,\\ 0.3,\\ 0.4,\\ 0.2$',
          items: [
            {
              title: 'Find the mean.',
              body: `Compute $\\mu = E[X]$ as on the [expected value](!${HUB}/expected-value) page.`,
              state: '$\\mu = 1.7$',
            },
            {
              title: 'Find the mean of the square.',
              body: 'Square each value, keep the same probabilities, and add. For a density, integrate $x^2 f(x)$.',
              state: '$E[X^2] = 0 + 0.3 + 1.6 + 1.8 = 3.7$',
            },
            {
              title: 'Subtract the square of the mean.',
              body: 'Use the shortcut formula.',
              state: '$\\operatorname{Var}(X) = 3.7 - 1.7^2 = 3.7 - 2.89 = 0.81$',
            },
            {
              title: 'Check the sign.',
              body: 'A variance is never negative. A negative result means an arithmetic slip, usually in $E[X^2]$.',
              state: '$0.81 \\geq 0$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a fair die',
            badge: 'shortcut',
            lines: [
              { math: '$E[X] = 3.5$, $E[X^2] = \\frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\frac{91}{6}$', why: 'two weighted sums' },
              { math: '$\\operatorname{Var}(X) = \\frac{91}{6} - \\frac{49}{4} = \\frac{182 - 147}{12}$', why: 'common denominator 12' },
              { math: '$\\operatorname{Var}(X) = \\frac{35}{12}$', why: 'about $2.9167$', answer: true },
            ],
          },
          {
            title: 'a linear change of variable',
            badge: '$aX + b$',
            lines: [
              { math: '$\\operatorname{Var}(X) = 4$, find $\\operatorname{Var}(3X + 2)$', why: '' },
              { math: '$\\operatorname{Var}(3X + 2) = 3^2 \\operatorname{Var}(X)$', why: 'shift drops out, scale squares' },
              { math: '$= 9 \\cdot 4 = 36$', why: 'multiply', answer: true },
            ],
          },
          {
            title: 'a density on an interval',
            badge: 'continuous',
            lines: [
              { math: '$f(x) = 2x$ on $[0, 1]$, $E[X] = \\frac{2}{3}$', why: 'mean from before' },
              { math: '$E[X^2] = \\int_0^1 x^2 \\cdot 2x \\, dx = \\frac{1}{2}$', why: 'integrate $x^2 f(x)$' },
              { math: '$\\operatorname{Var}(X) = \\frac{1}{2} - \\frac{4}{9} = \\frac{1}{18}$', why: 'shortcut formula', answer: true },
            ],
          },
        ],
        examplesAfter: 'See how the spread changes with the shape of the distribution in the [variance visualizer](!/probability/visual-tools/variance).',
        visual: {
          caption:
            'Variance is the average squared distance from the balance point. Values far from the mean count much more than values close to it, because the distance is squared. The shortcut works because expanding $(X - \\mu)^2$ and averaging gives $E[X^2] - 2\\mu^2 + \\mu^2$, which is $E[X^2] - \\mu^2$.',
        },
        pitfalls: [
          {
            title: 'Subtracting the mean instead of its square',
            wrong: '$\\operatorname{Var}(X) = E[X^2] - E[X] = 3.7 - 1.7 = 2$',
            right: '$\\operatorname{Var}(X) = 3.7 - 1.7^2 = 0.81$',
          },
          {
            title: 'Keeping the shift and not squaring the scale',
            wrong: '$\\operatorname{Var}(3X + 2) = 3 \\cdot 4 + 2 = 14$',
            right: `$\\operatorname{Var}(3X + 2) = 9 \\cdot 4 = 36$`,
            note: `The ${link('prob.variance-of-linear-transform', 'linear transform rule')} is $\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X)$.`,
          },
          {
            title: 'Subtracting variances for a difference',
            wrong: '$\\operatorname{Var}(X - Y) = 4 - 9 = -5$ for independent $X, Y$',
            right: '$\\operatorname{Var}(X - Y) = 4 + 9 = 13$: spreads always add',
          },
        ],
        related: ['expected-value', 'standard-deviation', 'covariance-correlation'],
        builtOn: [
          { label: 'Variance definition', url: ruleUrl('prob.variance-definition') },
          { label: 'Computational formula', url: ruleUrl('prob.variance-computational-formula') },
          { label: 'Variance of a linear transform', url: ruleUrl('prob.variance-of-linear-transform') },
          { label: 'Variance of a sum of independent variables', url: ruleUrl('prob.variance-of-sum-independent') },
        ],
      },
    },
    {
      id: 'standard-deviation',
      slug: 'standard-deviation',
      name: 'How to find the standard deviation of a random variable',
      description: 'Find the variance first, then take its square root; the result is in the units of $X$.',
      uses: ['variance', 'square root', 'linear transform'],
      level: 'composite',
      tag: 'Composite',
      meta: '3 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Standard Deviation of a Random Variable | Learn Math Class',
        description: 'Find the standard deviation of a random variable: compute the variance, take the square root, keep the units. Examples with dice, binomial counts and sums.',
        keywords: ['standard deviation of a random variable', 'how to find standard deviation probability', 'standard deviation formula', 'standard deviation examples', 'sigma from variance'],
      },
      page: {
        h1: 'How to Find the Standard Deviation of a Random Variable',
        lead:
          'The standard deviation is the square root of the variance. It measures typical distance from the mean in the same units as the variable itself, which makes it the number you report.',
        recognize:
          'The question asks for $\\sigma$, "typical deviation", spread in the original units, or needs a value to standardize with ($z = \\frac{x - \\mu}{\\sigma}$). Typical inputs: a pmf table, a variance already found, a named distribution such as a binomial count. Test: do you have, or can you get, the variance? Then the standard deviation is one square root away.',
        recognizeNote: `The relation between the two spreads is explained in the lesson section ${link('lesson.prob.variance.sd', 'Variance vs Standard Deviation')}.`,
        methods: [
          {
            name: 'Square root of the variance',
            tag: 'usual',
            preferred: true,
            formula: '\\sigma = \\sqrt{\\operatorname{Var}(X)}',
            body: `Find the [variance](!${HUB}/variance) first, then take the ${link('prob.standard-deviation-definition', 'square root')}.`,
          },
          {
            name: 'Formula of a named distribution',
            tag: 'shortcut',
            formula: 'X \\sim \\text{Bin}(n, p) \\;\\Rightarrow\\; \\sigma = \\sqrt{np(1 - p)}',
            body: `Take the square root of the ${link('prob.binomial-variance', 'distribution variance')}.`,
          },
        ],
        steps: {
          traceLabel: 'On $X \\in \\{0, 1, 2, 3\\}$ with probabilities $0.1,\\ 0.3,\\ 0.4,\\ 0.2$',
          items: [
            {
              title: 'Find the variance.',
              body: 'Mean, mean of the square, subtract.',
              state: '$\\operatorname{Var}(X) = 3.7 - 1.7^2 = 0.81$',
            },
            {
              title: 'Take the positive square root.',
              body: 'Round only at the end; keep exact fractions or radicals as long as you can.',
              state: '$\\sigma = \\sqrt{0.81} = 0.9$',
            },
            {
              title: 'Attach the units and compare with the range.',
              body: 'The standard deviation has the units of $X$ and is at most half the range of the values.',
              state: '$\\sigma = 0.9$, less than half of $3 - 0$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a fair die',
            badge: 'exact first',
            lines: [
              { math: '$\\operatorname{Var}(X) = \\frac{35}{12}$', why: 'from the variance page' },
              { math: '$\\sigma = \\sqrt{\\frac{35}{12}}$', why: 'square root' },
              { math: '$\\sigma \\approx 1.7078$', why: 'rounded to 4 places', answer: true },
            ],
          },
          {
            title: 'heads in 100 fair coin flips',
            badge: 'binomial',
            lines: [
              { math: '$X \\sim \\text{Bin}(100, 0.5)$', why: 'fixed trials, fixed $p$' },
              { math: '$\\operatorname{Var}(X) = 100 \\cdot 0.5 \\cdot 0.5 = 25$', why: '$np(1 - p)$' },
              { math: '$\\sigma = 5$ heads', why: 'square root', answer: true },
            ],
          },
          {
            title: 'the sum of two independent variables',
            badge: 'add variances',
            lines: [
              { math: '$\\sigma_X = 3,\\ \\sigma_Y = 4$, independent', why: '' },
              { math: '$\\operatorname{Var}(X + Y) = 9 + 16 = 25$', why: 'variances add, not deviations' },
              { math: '$\\sigma_{X+Y} = 5$', why: 'square root of the sum', answer: true },
            ],
          },
        ],
        examplesAfter: `For counts from a named distribution, see [binomial probability](!/probability/distributions/methods/binomial-probability).`,
        visual: {
          caption:
            'The variance is in squared units (dollars squared, minutes squared), which is hard to picture. The square root brings the spread back to the scale of the variable, so you can mark $\\mu \\pm \\sigma$ on the same axis as the values. For bell-shaped distributions most of the probability sits within two standard deviations of the mean. Compare spreads in the [variance visualizer](!/probability/visual-tools/variance).',
        },
        pitfalls: [
          {
            title: 'Adding standard deviations',
            wrong: '$\\sigma_{X+Y} = 3 + 4 = 7$',
            right: '$\\sigma_{X+Y} = \\sqrt{9 + 16} = 5$ for independent $X, Y$',
            note: `Only variances add (${link('prob.variance-of-sum-independent', 'variance of a sum')}).`,
          },
          {
            title: 'A negative standard deviation',
            wrong: '$\\sigma_{-3X + 1} = -3 \\cdot 2 = -6$ when $\\sigma_X = 2$',
            right: '$\\sigma_{-3X + 1} = |{-3}| \\cdot 2 = 6$',
          },
          {
            title: 'Averaging absolute distances',
            wrong: '$\\sigma = E\\,|X - 1.7| = 0.76$',
            right: '$\\sigma = \\sqrt{E[(X - 1.7)^2]} = 0.9$',
            note: 'The mean absolute deviation is a different, smaller measure.',
          },
        ],
        related: ['variance', 'chebyshev-inequality', 'clt-approximation'],
        builtOn: [
          { label: 'Standard deviation definition', url: ruleUrl('prob.standard-deviation-definition') },
          { label: 'Computational formula for variance', url: ruleUrl('prob.variance-computational-formula') },
          { label: 'Variance of a sum of independent variables', url: ruleUrl('prob.variance-of-sum-independent') },
        ],
      },
    },
    {
      id: 'covariance-correlation',
      slug: 'covariance-correlation',
      name: 'How to find the covariance and correlation of two random variables',
      description: 'Compute $E[XY] - E[X]E[Y]$ from the joint table, then divide by $\\sigma_X \\sigma_Y$ for the correlation.',
      uses: ['joint distribution', 'expected value', 'standard deviation'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Covariance and Correlation | Learn Math Class',
        description: 'Find the covariance and correlation of two random variables: means, E[XY] from the joint table, subtract, divide by both deviations. Examples and pitfalls.',
        keywords: ['how to find covariance', 'covariance and correlation', 'covariance formula', 'correlation coefficient random variables', 'covariance from joint table'],
      },
      page: {
        h1: 'How to Find Covariance and Correlation',
        lead:
          'Covariance measures whether two random variables move together. Find the mean of the product and subtract the product of the means; divide by both standard deviations to get the correlation, a unit-free number between $-1$ and $1$.',
        recognize:
          'Two random variables on the same experiment: a joint probability table, $E[XY]$ with the two means, or a question about $\\operatorname{Var}(X + Y)$ when $X$ and $Y$ are not independent. Words: "move together", "linear relationship", $\\operatorname{Cov}(X, Y)$, $\\rho$. Test: is there a joint distribution, or at least $E[XY]$? Then use the shortcut formula.',
        recognizeNote: `Covariance is introduced in the ${link('lesson.prob.covariance', 'covariance lesson')}.`,
        methods: [
          {
            name: 'Mean of the product minus product of the means',
            tag: 'usual',
            preferred: true,
            formula: '\\operatorname{Cov}(X, Y) = E[XY] - E[X]\\,E[Y]',
            body: `The ${link('prob.covariance-computational-formula', 'computational formula')}: one extra weighted sum over the joint table.`,
          },
          {
            name: 'Average product of deviations',
            tag: 'by definition',
            formula: '\\operatorname{Cov}(X, Y) = E\\big[(X - \\mu_X)(Y - \\mu_Y)\\big]',
            body: `The ${link('prob.covariance-definition', 'definition')}; shows the sign directly, but needs more arithmetic.`,
          },
        ],
        steps: {
          traceLabel: 'On $X, Y \\in \\{0, 1\\}$ with $p(0,0) = 0.4,\\ p(0,1) = 0.1,\\ p(1,0) = 0.1,\\ p(1,1) = 0.4$',
          items: [
            {
              title: 'Find both means from the margins.',
              body: 'Add across rows and down columns to get the marginal pmfs, then take each weighted sum.',
              state: '$E[X] = 0.5,\\ E[Y] = 0.5$',
            },
            {
              title: 'Find the mean of the product.',
              body: 'Multiply $x \\cdot y$ in every cell by that cell\'s probability and add.',
              state: '$E[XY] = 1 \\cdot 1 \\cdot 0.4 = 0.4$',
            },
            {
              title: 'Subtract the product of the means.',
              body: 'Positive: the variables tend to be large together. Negative: one large, the other small.',
              state: '$\\operatorname{Cov}(X, Y) = 0.4 - 0.25 = 0.15$',
            },
            {
              title: 'Find both standard deviations.',
              body: `Use each margin as on the [standard deviation](!${HUB}/standard-deviation) page.`,
              state: '$\\operatorname{Var}(X) = \\operatorname{Var}(Y) = 0.5 - 0.25 = 0.25$, so $\\sigma_X = \\sigma_Y = 0.5$',
            },
            {
              title: 'Divide to get the correlation and check its range.',
              body: `The ${link('prob.correlation-bounds', 'correlation')} always lies in $[-1, 1]$; outside means an error.`,
              state: '$\\rho = \\frac{0.15}{0.5 \\cdot 0.5} = 0.6$',
            },
          ],
        },
        examples: [
          {
            title: 'from summary numbers',
            badge: 'shortcut',
            lines: [
              { math: '$E[XY] = 10,\\ E[X] = 2,\\ E[Y] = 3$', why: '' },
              { math: '$\\operatorname{Cov}(X, Y) = 10 - 2 \\cdot 3$', why: 'mean of product minus product of means' },
              { math: '$\\operatorname{Cov}(X, Y) = 4$', why: 'positive: they move together', answer: true },
            ],
          },
          {
            title: 'from a joint table',
            badge: '2 × 2',
            lines: [
              { math: '$p(0,0) = 0.4,\\ p(0,1) = 0.1,\\ p(1,0) = 0.1,\\ p(1,1) = 0.4$', why: 'mass on the diagonal' },
              { math: '$\\operatorname{Cov} = 0.4 - 0.5 \\cdot 0.5 = 0.15$', why: 'only cell $(1,1)$ adds to $E[XY]$' },
              { math: '$\\rho = \\frac{0.15}{0.5 \\cdot 0.5} = 0.6$', why: 'divide by both deviations', answer: true },
            ],
          },
          {
            title: 'variance of a sum with covariance',
            badge: 'dependent',
            lines: [
              { math: '$\\operatorname{Var}(X) = 4,\\ \\operatorname{Var}(Y) = 9,\\ \\operatorname{Cov}(X, Y) = -2$', why: '' },
              { math: '$\\operatorname{Var}(X + Y) = 4 + 9 + 2(-2) = 9$', why: 'add twice the covariance' },
              { math: '$\\rho = \\frac{-2}{2 \\cdot 3} = -\\frac{1}{3}$', why: '$\\sigma_X = 2,\\ \\sigma_Y = 3$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Build and read joint tables in the [contingency table tool](!/probability/visual-tools/contingency-tables).',
        visual: {
          caption:
            'Think of each cell of the joint table as a point $(x, y)$ with a weight. Draw a cross through the point of means $(\\mu_X, \\mu_Y)$. Points to the upper right and lower left give positive products of deviations; the other two corners give negative ones. Covariance is the weighted average of those products, so it is positive when most weight lies on the rising diagonal. Dividing by $\\sigma_X \\sigma_Y$ removes the units and scales the answer to $[-1, 1]$.',
        },
        pitfalls: [
          {
            title: 'Reading zero covariance as independence',
            wrong: '$X$ uniform on $\\{-1, 0, 1\\}$, $Y = X^2$: $\\operatorname{Cov} = 0$, so independent',
            right: '$Y$ is a function of $X$; zero covariance only rules out a linear trend',
            note: `Independence implies zero covariance, not the other way round (${link('lesson.prob.covariance.4', 'covariance and independence')}).`,
          },
          {
            title: 'Dropping the covariance term in a sum',
            wrong: '$\\operatorname{Var}(X + Y) = 4 + 9 = 13$ when $\\operatorname{Cov} = -2$',
            right: '$\\operatorname{Var}(X + Y) = 4 + 9 + 2(-2) = 9$',
          },
          {
            title: 'Not scaling covariance with the variables',
            wrong: '$\\operatorname{Cov}(2X, 3Y) = \\operatorname{Cov}(X, Y) = 4$',
            right: `$\\operatorname{Cov}(2X, 3Y) = 2 \\cdot 3 \\cdot 4 = 24$`,
            note: `Constants come out of each slot (${link('prob.covariance-bilinearity', 'bilinearity')}); the correlation stays the same.`,
          },
          {
            title: 'A correlation outside the range',
            wrong: '$\\rho = \\frac{0.15}{0.25 \\cdot 0.25} = 2.4$',
            right: 'divide by standard deviations, not variances: $\\rho = \\frac{0.15}{0.5 \\cdot 0.5} = 0.6$',
          },
        ],
        related: ['variance', 'standard-deviation', 'linearity-of-expectation'],
        builtOn: [
          { label: 'Covariance, computational formula', url: ruleUrl('prob.covariance-computational-formula') },
          { label: 'Correlation coefficient', url: ruleUrl('prob.correlation-coefficient-definition') },
          { label: 'Bounds on correlation', url: ruleUrl('prob.correlation-bounds') },
        ],
      },
    },
    {
      id: 'pmf-to-cdf',
      slug: 'pmf-to-cdf',
      name: 'How to find the CDF from a PMF',
      description: 'Sort the values, keep a running total of the probabilities, and write the step function.',
      uses: ['pmf', 'running sum', 'step function'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the CDF from a PMF (Discrete) | Learn Math Class',
        description: 'Find the CDF of a discrete random variable from its PMF: sort the values, add probabilities cumulatively, write the step function. Examples and mistakes.',
        keywords: ['cdf from pmf', 'how to find cdf discrete', 'cumulative distribution function discrete', 'discrete cdf examples', 'pmf to cdf'],
      },
      page: {
        h1: 'How to Find the CDF from a PMF',
        lead:
          'The cumulative distribution function $F(x) = P(X \\leq x)$ of a discrete variable is a running total of its pmf. It climbs in steps at each possible value and stays flat in between.',
        recognize:
          'You have a pmf (a table or a formula $p(k)$) and need $P(X \\leq x)$, a "at most" or "no more than" probability, an interval probability, or the graph of $F$. Typical forms: a table of values and probabilities, $p(k) = \\frac{1}{6}$ for a die, $p(k) = (1 - p)^{k-1}p$. Test: is the variable discrete, with probabilities on separate points? Then the CDF is a cumulative sum.',
        recognizeNote: `The discrete CDF is defined in the lesson section ${link('lesson.prob.cdf.discrete', 'Discrete Random Variables')}.`,
        steps: {
          traceLabel: 'On $X \\in \\{0, 1, 2, 3\\}$ with probabilities $0.1,\\ 0.3,\\ 0.4,\\ 0.2$',
          items: [
            {
              title: 'Sort the possible values from smallest to largest.',
              body: 'The CDF accumulates from the left, so order matters.',
              state: '$0 < 1 < 2 < 3$',
            },
            {
              title: 'Add the probabilities cumulatively.',
              body: `At each value, $F(x)$ is the sum of $p$ at that value and every value below it (${link('prob.cdf-from-pmf', 'CDF from PMF')}).`,
              state: '$F(0) = 0.1,\\ F(1) = 0.4,\\ F(2) = 0.8,\\ F(3) = 1$',
            },
            {
              title: 'Write the step function, including the outer pieces.',
              body: '$F(x) = 0$ to the left of the smallest value and $F(x) = 1$ from the largest value on. Between two values $F$ stays constant.',
              state: '$F(x) = 0,\\ 0.1,\\ 0.4,\\ 0.8,\\ 1$ on $x < 0$, $[0,1)$, $[1,2)$, $[2,3)$, $x \\geq 3$',
            },
            {
              title: 'Read the probabilities you need.',
              body: `Use $P(a < X \\leq b) = F(b) - F(a)$ (${link('prob.probability-of-interval-via-cdf', 'interval via the CDF')}). For a strict inequality, step back one value.`,
              state: '$P(1 < X \\leq 3) = 1 - 0.4 = 0.6$',
            },
          ],
        },
        examples: [
          {
            title: 'a fair die',
            badge: 'equal steps',
            lines: [
              { math: '$p(k) = \\frac{1}{6}$, $k = 1, \\dots, 6$', why: '' },
              { math: '$F(4) = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6}$', why: 'add up to and including 4' },
              { math: '$P(X \\leq 4) = \\frac{4}{6} = \\frac{2}{3}$', why: 'simplify', answer: true },
            ],
          },
          {
            title: 'an interval with a strict end',
            badge: 'table',
            lines: [
              { math: '$F(0) = 0.1,\\ F(1) = 0.4,\\ F(2) = 0.8,\\ F(3) = 1$', why: 'running totals' },
              { math: '$P(X < 3) = P(X \\leq 2) = F(2)$', why: 'strict: step back one value' },
              { math: '$P(X < 3) = 0.8$', why: 'read the table', answer: true },
            ],
          },
          {
            title: 'rolls until the first six',
            badge: 'closed form',
            lines: [
              { math: '$p(k) = \\left(\\frac{5}{6}\\right)^{k-1} \\frac{1}{6}$, $k = 1, 2, \\dots$', why: 'geometric pmf' },
              { math: '$F(3) = \\frac{1}{6} + \\frac{5}{36} + \\frac{25}{216} = \\frac{91}{216}$', why: 'add the first three terms' },
              { math: '$F(3) = 1 - \\left(\\frac{5}{6}\\right)^3 = \\frac{91}{216} \\approx 0.4213$', why: 'same as no six in three rolls', answer: true },
            ],
          },
        ],
        examplesAfter: 'More on this distribution in [geometric probability](!/probability/distributions/methods/geometric-probability).',
        visual: {
          caption:
            'Picture the pmf as bars on a number line. Walk from left to right and keep a running total: each time you pass a bar, the total jumps by its height, and between bars it does not move. That running total is the CDF, a staircase from $0$ to $1$ whose step heights are the pmf values. Watch the staircase form in the [discrete CDF visualizer](!/probability/visual-tools/cdf/discrete).',
        },
        pitfalls: [
          {
            title: 'Treating the CDF as the probability of one value',
            wrong: '$P(X = 2) = F(2) = 0.8$',
            right: '$P(X = 2) = F(2) - F(1) = 0.8 - 0.4 = 0.4$',
          },
          {
            title: 'Ignoring a strict inequality',
            wrong: '$P(X < 3) = F(3) = 1$',
            right: '$P(X < 3) = F(2) = 0.8$: for a discrete variable $<$ and $\\leq$ differ',
          },
          {
            title: 'Leaving out the outer pieces',
            wrong: '$F(x)$ given only at $x = 0, 1, 2, 3$',
            right: '$F$ is defined for every real $x$: $0$ for $x < 0$, constant between values, $1$ for $x \\geq 3$',
            note: `A CDF never decreases and ends at $1$ (${link('prob.cdf-monotonicity', 'monotonicity')}).`,
          },
        ],
        related: ['pdf-to-cdf', 'median-mode', 'expected-value'],
        builtOn: [
          { label: 'CDF definition', url: ruleUrl('prob.cdf-definition') },
          { label: 'CDF from PMF', url: ruleUrl('prob.cdf-from-pmf') },
          { label: 'Interval probability via the CDF', url: ruleUrl('prob.probability-of-interval-via-cdf') },
        ],
      },
    },
    {
      id: 'pdf-to-cdf',
      slug: 'pdf-to-cdf',
      name: 'How to find the CDF from a PDF',
      description: 'Integrate the density from the left end of the support up to $x$, and add the flat pieces outside.',
      uses: ['pdf', 'definite integral', 'piecewise function'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the CDF from a PDF (Continuous) | Learn Math Class',
        description: 'Find the CDF of a continuous random variable from its PDF: integrate from the left end to x, add the pieces outside, check F = 1. Examples and mistakes.',
        keywords: ['cdf from pdf', 'how to find cdf continuous', 'integrate pdf to get cdf', 'continuous cdf examples', 'pdf to cdf'],
      },
      page: {
        h1: 'How to Find the CDF from a PDF',
        lead:
          'For a continuous variable, $F(x) = P(X \\leq x)$ is the area under the density to the left of $x$. You find it by integrating the pdf from the left end of the support up to $x$.',
        recognize:
          'You have a density $f(x)$ and need $P(X \\leq x)$, an interval probability, a median or percentile, or the CDF itself. Typical forms: $f(x) = 2x$ on $[0, 1]$, $f(x) = \\frac{1}{b - a}$ on $[a, b]$, $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$. Test: is the variable continuous, given by a formula you can integrate? Then the CDF is an integral with variable upper limit.',
        recognizeNote: `The continuous CDF is defined in the lesson section ${link('lesson.prob.cdf.continuous', 'Continuous Random Variables')}.`,
        methods: [
          {
            name: 'Integrate from the left end',
            tag: 'usual',
            preferred: true,
            formula: 'F(x) = \\int_{a}^{x} f(t) \\, dt \\quad (a = \\text{left end of the support})',
            body: `A [definite integral](!/calculus/integrals/techniques/definite-integrals-ftc) with $x$ as the upper limit (${link('prob.cdf-from-pdf', 'CDF from PDF')}).`,
          },
          {
            name: 'Antiderivative plus a constant',
            tag: 'check',
            formula: 'F(x) = G(x) + C, \\quad F(a) = 0',
            body: `Any antiderivative $G$ of $f$ works; fix $C$ so that $F$ starts at $0$. Differentiating back gives $f$ (${link('prob.pdf-as-cdf-derivative', 'PDF as the CDF derivative')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $f(x) = 2x$ on $[0, 1]$',
          items: [
            {
              title: 'Write down the support.',
              body: 'Find where $f(x) > 0$. Outside it the density is $0$.',
              state: 'support $[0, 1]$',
            },
            {
              title: 'Integrate from the left end up to x.',
              body: `Rename the integration variable $t$ so it does not clash with the limit $x$. Evaluate with the ${link('integrals.ftc-2', 'Fundamental Theorem of Calculus')}.`,
              state: '$F(x) = \\int_0^x 2t \\, dt = x^2$ for $0 \\leq x \\leq 1$',
            },
            {
              title: 'Add the pieces outside the support.',
              body: '$F(x) = 0$ left of the support and $F(x) = 1$ right of it. Check that the middle piece reaches $1$ at the right end.',
              state: '$F(x) = 0$ for $x < 0$, $x^2$ on $[0, 1]$, $1$ for $x > 1$; $F(1) = 1$ ✓',
            },
            {
              title: 'Use the CDF for probabilities.',
              body: 'Subtract two values: $P(a < X \\leq b) = F(b) - F(a)$. For a continuous variable $<$ and $\\leq$ give the same answer.',
              state: '$P(0.5 < X \\leq 1) = 1 - 0.25 = 0.75$',
            },
          ],
        },
        examples: [
          {
            title: 'uniform on an interval',
            badge: 'linear CDF',
            lines: [
              { math: '$f(x) = \\frac{1}{4}$ on $[2, 6]$', why: 'flat density, width 4' },
              { math: '$F(x) = \\int_2^x \\frac{1}{4} \\, dt = \\frac{x - 2}{4}$', why: 'integrate from the left end' },
              { math: '$P(X \\leq 5) = F(5) = \\frac{3}{4}$', why: 'substitute', answer: true },
            ],
          },
          {
            title: 'a polynomial density',
            badge: 'power rule',
            lines: [
              { math: '$f(x) = 3x^2$ on $[0, 1]$', why: '' },
              { math: '$F(x) = \\int_0^x 3t^2 \\, dt = x^3$', why: `antiderivative $t^3$` },
              { math: '$P(0.5 < X \\leq 1) = 1 - 0.125 = 0.875$', why: '$F(1) - F(0.5)$', answer: true },
            ],
          },
          {
            title: 'an exponential waiting time',
            badge: 'unbounded',
            lines: [
              { math: '$f(x) = 0.5 e^{-0.5x}$ for $x \\geq 0$', why: 'rate $\\lambda = 0.5$' },
              { math: '$F(x) = \\int_0^x 0.5 e^{-0.5t} \\, dt = 1 - e^{-0.5x}$', why: 'antiderivative $-e^{-0.5t}$' },
              { math: '$P(X \\leq 2) = 1 - e^{-1} \\approx 0.6321$', why: 'rounded to 4 places', answer: true },
            ],
          },
        ],
        examplesAfter: `Named densities have ready-made CDFs; see [exponential probability](!/probability/distributions/methods/exponential-probability) and the [continuous distributions calculator](!/probability/calculators/continuous-distributions).`,
        visual: {
          caption:
            'Slide a vertical line across the graph of the density from left to right. The shaded area to its left is $F(x)$. It starts at $0$, grows fastest where the density is tallest, and stops at $1$ once the whole area is covered. That is why the slope of the CDF is the density. Slide the line yourself in the [continuous CDF visualizer](!/probability/visual-tools/cdf/continuous).',
        },
        pitfalls: [
          {
            title: 'Using x as both the limit and the variable',
            wrong: '$F(x) = \\int_0^x 2x \\, dx = 2x^2$',
            right: '$F(x) = \\int_0^x 2t \\, dt = x^2$',
          },
          {
            title: 'An antiderivative that does not start at 0',
            wrong: '$f(x) = \\frac{1}{4}$ on $[2, 6]$, so $F(x) = \\frac{x}{4}$',
            right: '$F(2)$ must be $0$: $F(x) = \\frac{x - 2}{4}$',
          },
          {
            title: 'Reading the density as a probability',
            wrong: '$f(x) = 3x^2$, so $P(X = 1) = f(1) = 3$',
            right: '$P(X = 1) = 0$; probabilities are areas, $F(b) - F(a)$',
            note: 'A density can exceed $1$; a probability cannot.',
          },
        ],
        related: ['pmf-to-cdf', 'median-mode', 'expected-value'],
        builtOn: [
          { label: 'CDF from PDF', url: ruleUrl('prob.cdf-from-pdf') },
          { label: 'PDF as derivative of the CDF', url: ruleUrl('prob.pdf-as-cdf-derivative') },
          { label: 'Interval probability via the CDF', url: ruleUrl('prob.probability-of-interval-via-cdf') },
          { label: 'Fundamental Theorem of Calculus', url: ruleUrl('integrals.ftc-2') },
        ],
      },
    },
    {
      id: 'median-mode',
      slug: 'median-mode',
      name: 'How to find the median and mode of a distribution',
      description: 'The median is where the CDF reaches one half; the mode is the peak of the pmf or pdf.',
      uses: ['cdf', 'pmf', 'pdf', 'maximum'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Median and Mode of a Distribution | Learn Math Class',
        description: 'Find the median and mode of a probability distribution: build the CDF, find where it reaches 1/2, locate the peak of the pmf or pdf. Examples and mistakes.',
        keywords: ['median of a distribution', 'mode of a distribution', 'how to find median from cdf', 'median and mode probability', 'median of continuous random variable'],
      },
      page: {
        h1: 'How to Find the Median and Mode of a Distribution',
        lead:
          'The median splits the probability in half: it is where the CDF reaches $\\frac{1}{2}$. The mode is the most likely value, the highest point of the pmf or pdf. Both describe the center, alongside the mean.',
        recognize:
          'The question asks for the "middle" value, the 50th percentile, the most likely or most common value, or how the mean, median and mode compare (skew). Typical inputs: a pmf table, a density on an interval, an exponential waiting time. Test: for the median, can you get the CDF? For the mode, can you see or compute where the pmf or pdf is largest?',
        recognizeNote: `The two measures are defined in the ${link('lesson.prob.median', 'median lesson')} and the ${link('lesson.prob.mode', 'mode lesson')}.`,
        steps: {
          traceLabel: 'On $f(x) = 2x$ on $[0, 1]$',
          items: [
            {
              title: 'Build the CDF.',
              body: `Running total of the pmf ([CDF from a PMF](!${HUB}/pmf-to-cdf)) or integral of the density ([CDF from a PDF](!${HUB}/pdf-to-cdf)).`,
              state: '$F(x) = x^2$ on $[0, 1]$',
            },
            {
              title: 'Find where the CDF reaches one half.',
              body: 'Continuous: solve $F(m) = \\frac{1}{2}$. Discrete: take the smallest value with $F(x) \\geq \\frac{1}{2}$; if $F$ equals $\\frac{1}{2}$ exactly on a flat stretch, every point of that stretch is a median.',
              state: '$m^2 = \\frac{1}{2}$, so $m = \\frac{1}{\\sqrt{2}} \\approx 0.7071$',
            },
            {
              title: 'Find the peak of the pmf or pdf.',
              body: 'Discrete: the value with the largest probability. Continuous: set $f\'(x) = 0$ and also check the endpoints of the support.',
              state: '$f(x) = 2x$ rises on $[0, 1]$: mode $= 1$ (endpoint)',
            },
            {
              title: 'Compare with the mean.',
              body: 'Mean below median below mode suggests a left skew; the reverse order suggests a right skew.',
              state: 'mean $\\frac{2}{3} <$ median $0.7071 <$ mode $1$: left-skewed',
            },
          ],
        },
        examples: [
          {
            title: 'a pmf table',
            badge: 'discrete',
            lines: [
              { math: '$p = 0.1, 0.3, 0.4, 0.2$ on $0, 1, 2, 3$', why: '' },
              { math: '$F(1) = 0.4 < 0.5,\\ F(2) = 0.8 \\geq 0.5$', why: 'first value past one half' },
              { math: 'median $= 2$, mode $= 2$', why: '$p(2) = 0.4$ is largest', answer: true },
            ],
          },
          {
            title: 'an exponential waiting time',
            badge: 'solve F = 1/2',
            lines: [
              { math: '$F(x) = 1 - e^{-0.5x}$, $x \\geq 0$', why: 'rate $\\lambda = 0.5$' },
              { math: '$e^{-0.5m} = \\frac{1}{2} \\Rightarrow m = 2\\ln 2$', why: 'take logs' },
              { math: 'median $\\approx 1.3863$, mode $= 0$', why: 'density largest at $x = 0$', answer: true },
            ],
          },
          {
            title: 'a fair die',
            badge: 'ties',
            lines: [
              { math: '$F(3) = \\frac{1}{2}$ exactly', why: 'CDF flat at one half on $[3, 4)$' },
              { math: '$3 \\leq m \\leq 4$: $P(X \\leq m) \\geq \\frac{1}{2}$ and $P(X \\geq m) \\geq \\frac{1}{2}$', why: 'both median conditions hold' },
              { math: 'every $m \\in [3, 4]$ is a median; all six faces are modes', why: 'often reported as $3.5$; no single mode', answer: true },
            ],
          },
        ],
        examplesAfter: 'See where the CDF crosses one half in the [CDF visualizer](!/probability/visual-tools/cdf).',
        visual: {
          caption:
            'The median is a balance of area, not of weight: half the probability lies on each side. The mode is simply the highest point of the graph. The mean is a balance of moments, so a long tail drags it out while the median barely moves. For $f(x) = 2x$ most of the area is near $1$, so the median ($0.7071$) sits right of the mean ($\\frac{2}{3}$) and the peak is at the right end.',
        },
        pitfalls: [
          {
            title: 'Looking for an exact half on a discrete CDF',
            wrong: '$F(1) = 0.4$, $F(2) = 0.8$, so the median is $1.5$',
            right: 'take the first value with $F(x) \\geq \\frac{1}{2}$: median $= 2$',
          },
          {
            title: 'Taking the mode as the value of the pdf',
            wrong: '$f(x) = 2x$ peaks at height $2$, so the mode is $2$',
            right: 'the mode is the location of the peak: $x = 1$',
          },
          {
            title: 'Missing an endpoint maximum',
            wrong: '$f\'(x) = 2 \\neq 0$, so $f(x) = 2x$ has no mode',
            right: 'check the ends of the support: the maximum is at $x = 1$',
          },
        ],
        related: ['pmf-to-cdf', 'pdf-to-cdf', 'expected-value'],
        builtOn: [
          { label: 'How to find the median (lesson)', url: ruleUrl('lesson.prob.median.7') },
          { label: 'How to find the mode (lesson)', url: ruleUrl('lesson.prob.mode.7') },
          { label: 'CDF definition', url: ruleUrl('prob.cdf-definition') },
        ],
      },
    },
    {
      id: 'indicator-variables',
      slug: 'indicator-variables',
      name: 'How to find an expected count with indicator variables',
      description: 'Write the count as a sum of 0-1 indicators, use $E[I] = P(A)$, and add by linearity.',
      uses: ['indicator variables', 'linearity of expectation'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find an Expected Count with Indicator Variables | Learn Math Class',
        description: 'Find an expected count with indicator variables: one 0-1 variable per event, its mean is the event probability, add them by linearity. Examples, mistakes.',
        keywords: ['indicator random variables', 'expected value with indicators', 'linearity of expectation counting', 'indicator variable method', 'expected number of matches'],
      },
      page: {
        h1: 'How to Find an Expected Count with Indicator Variables',
        lead:
          'Many random variables are counts: how many sixes, how many matches, how many distinct values. Split the count into one 0-1 variable per possible event. Each indicator has mean equal to its probability, and the means add even when the events are dependent.',
        recognize:
          'The question asks for the expected number of something: matches, fixed points, empty boxes, distinct values, successes in dependent trials. The full distribution of the count is messy, but each single event has an easy probability. Test: can you write $X = I_1 + I_2 + \\dots + I_n$ with each $I_k$ equal to $1$ or $0$? Then you do not need the pmf of $X$.',
        recognizeNote: `Indicators are defined in the ${link('lesson.prob.indicators', 'indicator random variables lesson')}.`,
        steps: {
          traceLabel: 'On the expected number of people who get their own hat back, 5 hats returned at random',
          items: [
            {
              title: 'Define one indicator per event you are counting.',
              body: `Let $I_k = 1$ if event $A_k$ happens and $0$ otherwise (${link('prob.indicator-random-variable-definition', 'indicator definition')}).`,
              state: '$I_k = 1$ if person $k$ gets their own hat, $k = 1, \\dots, 5$',
            },
            {
              title: 'Write the count as their sum.',
              body: 'Each occurrence adds exactly $1$ to the total.',
              state: '$X = I_1 + I_2 + I_3 + I_4 + I_5$',
            },
            {
              title: 'Find the mean of one indicator.',
              body: `$E[I_k] = 1 \\cdot P(A_k) + 0 = P(A_k)$ (${link('prob.expectation-of-indicator', 'expectation of an indicator')}).`,
              state: '$E[I_k] = P(\\text{own hat}) = \\frac{1}{5}$',
            },
            {
              title: 'Add the means.',
              body: 'Linearity holds without independence, so the dependence between the hats does not matter.',
              state: '$E[X] = 5 \\cdot \\frac{1}{5} = 1$',
              atomic: 'linearity-of-expectation',
            },
          ],
        },
        examples: [
          {
            title: 'sixes in 12 rolls',
            badge: 'independent',
            lines: [
              { math: '$I_k = 1$ if roll $k$ is a six', why: 'one indicator per roll' },
              { math: '$E[I_k] = \\frac{1}{6}$', why: 'probability of a six' },
              { math: '$E[X] = 12 \\cdot \\frac{1}{6} = 2$', why: 'add 12 equal means', answer: true },
            ],
          },
          {
            title: 'hats returned at random',
            badge: 'dependent',
            lines: [
              { math: '$n$ people, $I_k = 1$ if person $k$ gets their own hat', why: '' },
              { math: '$E[I_k] = \\frac{1}{n}$', why: 'any hat equally likely' },
              { math: '$E[X] = n \\cdot \\frac{1}{n} = 1$', why: 'same answer for every $n$', answer: true },
            ],
          },
          {
            title: 'distinct faces in 6 rolls',
            badge: 'complement inside',
            lines: [
              { math: '$I_f = 1$ if face $f$ appears at least once, $f = 1, \\dots, 6$', why: 'count faces, not rolls' },
              { math: '$E[I_f] = 1 - \\left(\\frac{5}{6}\\right)^6$', why: 'complement of never appearing' },
              { math: '$E[X] = 6\\left(1 - \\left(\\frac{5}{6}\\right)^6\\right) = \\frac{31031}{7776} \\approx 3.9906$', why: 'add six equal means', answer: true },
            ],
          },
        ],
        examplesAfter: 'Simulate the dice counts in the [dice roll tool](!/probability/visual-tools/dice-roll).',
        visual: {
          caption:
            'Think of each indicator as a light that is on ($1$) or off ($0$). The count is the number of lights on. On average, light $k$ is on a fraction $P(A_k)$ of the time, so the average number of lights on is the sum of those fractions. Whether the lights are wired together does not change any single light\'s average, which is why dependence never enters the expected count.',
        },
        pitfalls: [
          {
            title: 'Thinking dependence breaks the method',
            wrong: 'hats are dependent, so $E[X] \\neq \\sum E[I_k]$',
            right: `linearity needs no independence: $E[X] = 5 \\cdot \\frac{1}{5} = 1$ (${link('lesson.prob.indicators.5', 'linearity and indicators')})`,
          },
          {
            title: 'Using the same shortcut for the variance',
            wrong: '$\\operatorname{Var}(X) = \\sum \\operatorname{Var}(I_k)$ for the hats',
            right: 'dependent indicators need covariance terms: $\\operatorname{Var}(X) = \\sum \\operatorname{Var}(I_k) + 2\\sum_{j<k} \\operatorname{Cov}(I_j, I_k)$',
            note: `Each single indicator has $\\operatorname{Var}(I) = p(1 - p)$ (${link('prob.variance-of-indicator', 'variance of an indicator')}).`,
          },
          {
            title: 'Indicators for the wrong events',
            wrong: 'distinct faces: one indicator per roll, $E[X] = 6$',
            right: 'one indicator per face, "face appears": $E[X] \\approx 3.9906$',
          },
        ],
        related: ['linearity-of-expectation', 'expected-value', 'covariance-correlation'],
        builtOn: [
          { label: 'Indicator random variable', url: ruleUrl('prob.indicator-random-variable-definition') },
          { label: 'Expectation of an indicator', url: ruleUrl('prob.expectation-of-indicator') },
          { label: 'Linearity of expectation', url: ruleUrl('prob.linearity-of-expectation') },
        ],
      },
    },
    {
      id: 'markov-inequality',
      slug: 'markov-inequality',
      name: "How to bound a probability with Markov's inequality",
      description: 'For a nonnegative variable, bound the upper tail by the mean: $P(X \\geq a) \\leq E[X]/a$.',
      uses: ['expected value', 'tail bound'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: "How to Use Markov's Inequality | Learn Math Class",
        description: "Bound a tail probability with Markov's inequality: check X is nonnegative, find the mean, divide by the threshold, judge the bound. Examples and mistakes.",
        keywords: ["markov's inequality", "how to use markov's inequality", 'markov inequality examples', 'tail probability bound', 'markov bound expected value'],
      },
      page: {
        h1: "How to Use Markov's Inequality",
        lead:
          'When all you know about a nonnegative random variable is its mean, Markov\'s inequality still caps the chance of a large value: the probability of reaching $a$ is at most the mean divided by $a$.',
        recognize:
          'A nonnegative quantity (waiting time, income, count, file size) with a known mean and no distribution, and a question like "at most how likely is it to exceed $a$?" or "show that $P(X \\geq a)$ is small". Test: is $X \\geq 0$ always, and is $a$ larger than the mean? Then Markov gives a useful bound.',
        recognizeNote: `The inequality is stated in the ${link('lesson.prob.inequalities.markov', "Markov's inequality lesson")}.`,
        steps: {
          traceLabel: 'On a waiting time with mean 10 minutes, $P(X \\geq 30)$',
          items: [
            {
              title: 'Check that the variable is nonnegative.',
              body: 'Markov fails for variables that can be negative. Shift or use another bound in that case.',
              state: 'a waiting time is $\\geq 0$ ✓',
            },
            {
              title: 'Find the mean.',
              body: `From the problem, or as on the [expected value](!${HUB}/expected-value) page.`,
              state: '$E[X] = 10$',
            },
            {
              title: 'Divide the mean by the threshold.',
              body: `${link('lesson.prob.inequalities.markov.2', "Markov's inequality")}: $P(X \\geq a) \\leq \\frac{E[X]}{a}$ for every $a > 0$.`,
              state: '$P(X \\geq 30) \\leq \\frac{10}{30} = \\frac{1}{3}$',
            },
            {
              title: 'Judge the bound.',
              body: 'It is an upper limit, not the probability. If $a \\leq E[X]$ the bound is $1$ or more and says nothing.',
              state: 'at most a one-in-three chance',
            },
          ],
        },
        examples: [
          {
            title: 'a direct bound',
            badge: 'mean only',
            lines: [
              { math: '$X \\geq 0$, $E[X] = 50$', why: '' },
              { math: '$P(X \\geq 200) \\leq \\frac{50}{200}$', why: 'mean over threshold' },
              { math: '$P(X \\geq 200) \\leq \\frac{1}{4}$', why: 'at most 25%', answer: true },
            ],
          },
          {
            title: 'a lower bound for the complement',
            badge: 'flip it',
            lines: [
              { math: '$X \\geq 0$, $E[X] = 20$, find a bound on $P(X < 50)$', why: '' },
              { math: '$P(X \\geq 50) \\leq \\frac{20}{50} = \\frac{2}{5}$', why: 'Markov on the upper tail' },
              { math: '$P(X < 50) \\geq 1 - \\frac{2}{5} = \\frac{3}{5}$', why: 'complement rule', answer: true },
            ],
          },
          {
            title: 'how loose the bound can be',
            badge: 'compare',
            lines: [
              { math: 'exponential wait, mean 10: $P(X \\geq 30) \\leq \\frac{1}{3}$', why: 'Markov' },
              { math: 'exact: $P(X \\geq 30) = e^{-30/10} = e^{-3}$', why: 'exponential tail' },
              { math: '$e^{-3} \\approx 0.0498$, far below $0.3333$', why: 'true, but crude', answer: true },
            ],
          },
        ],
        examplesAfter: 'See the bound against real distributions in the [Markov inequality visualizer](!/probability/visual-tools/inequalities/markov).',
        visual: {
          caption:
            'If more than a fraction $\\frac{E[X]}{a}$ of the probability sat at $a$ or above, those values alone would push the mean above $E[X]$, because $X$ can never be negative to pull it back down. So the tail is capped by the mean. The bound is exact only for a variable that sits at $0$ and $a$ and nowhere else, which is why it is usually loose.',
        },
        pitfalls: [
          {
            title: 'Applying it to a variable that can be negative',
            wrong: 'temperature change with $E[X] = 1$: $P(X \\geq 5) \\leq \\frac{1}{5}$',
            right: 'Markov needs $X \\geq 0$; with negative values the bound can fail',
          },
          {
            title: 'Reading the bound as the probability',
            wrong: '$P(X \\geq 30) = \\frac{1}{3}$',
            right: '$P(X \\geq 30) \\leq \\frac{1}{3}$; the true value may be much smaller',
          },
          {
            title: 'A threshold at or below the mean',
            wrong: '$E[X] = 10$: $P(X \\geq 5) \\leq 2$, so the method failed',
            right: 'the bound is true but useless; Markov helps only for $a > E[X]$',
          },
        ],
        related: ['chebyshev-inequality', 'expected-value', 'clt-approximation'],
        builtOn: [
          { label: "Markov's inequality (lesson)", url: ruleUrl('lesson.prob.inequalities.markov.2') },
          { label: 'Where Markov applies (lesson)', url: ruleUrl('lesson.prob.inequalities.markov.1') },
          { label: 'Expected value, discrete', url: ruleUrl('prob.expected-value-discrete') },
        ],
      },
    },
    {
      id: 'chebyshev-inequality',
      slug: 'chebyshev-inequality',
      name: "How to bound a probability with Chebyshev's inequality",
      description: 'Measure the distance from the mean in standard deviations, then bound: $P(|X - \\mu| \\geq k\\sigma) \\leq 1/k^2$.',
      uses: ['mean', 'standard deviation', 'tail bound'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: "How to Use Chebyshev's Inequality | Learn Math Class",
        description: "Bound a probability with Chebyshev's inequality: find the mean and standard deviation, count k deviations, use 1/k squared or its complement. Worked examples.",
        keywords: ["chebyshev's inequality", "how to use chebyshev's inequality", 'chebyshev inequality examples', 'within k standard deviations', 'chebyshev bound'],
      },
      page: {
        h1: "How to Use Chebyshev's Inequality",
        lead:
          'Chebyshev\'s inequality bounds how much probability can sit far from the mean, using only the mean and the standard deviation. At least $1 - \\frac{1}{k^2}$ of the probability lies within $k$ standard deviations of the mean, for any distribution.',
        recognize:
          'A question about staying near the mean or straying far from it, with only $\\mu$ and $\\sigma$ known: "at least what fraction lies between 60 and 80?", "bound $P(|X - \\mu| \\geq c)$", "how many samples make the average reliable?". Test: is the interval centered at the mean, or can you shrink it to one that is? Then count standard deviations.',
        recognizeNote: `The inequality is stated in the ${link('lesson.prob.inequalities.chebyshev', "Chebyshev's inequality lesson")}.`,
        steps: {
          traceLabel: 'On scores with $\\mu = 70$, $\\sigma = 5$, $P(60 < X < 80)$',
          items: [
            {
              title: 'Find the mean and the standard deviation.',
              body: `From the problem or from the [standard deviation](!${HUB}/standard-deviation) page.`,
              state: '$\\mu = 70,\\ \\sigma = 5$',
            },
            {
              title: 'Write the interval as mean plus or minus a distance.',
              body: 'If the interval is not symmetric, use the largest symmetric interval inside it; the bound still holds for the bigger one.',
              state: '$(60, 80) = 70 \\pm 10$',
            },
            {
              title: 'Express the distance in standard deviations.',
              body: '$k = \\frac{\\text{distance}}{\\sigma}$. The bound needs $k > 1$ to say anything.',
              state: '$k = \\frac{10}{5} = 2$',
            },
            {
              title: 'Apply the bound or its complement.',
              body: `${link('lesson.prob.inequalities.chebyshev.2', "Chebyshev's inequality")}: $P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$, so the probability of staying inside is at least $1 - \\frac{1}{k^2}$.`,
              state: '$P(60 < X < 80) \\geq 1 - \\frac{1}{4} = \\frac{3}{4}$',
            },
          ],
        },
        examples: [
          {
            title: 'a fair die, bound versus exact',
            badge: 'variance form',
            lines: [
              { math: '$\\mu = 3.5$, $\\sigma^2 = \\frac{35}{12}$, bound $P(|X - 3.5| \\geq 2.5)$', why: '' },
              { math: '$P \\leq \\frac{\\sigma^2}{c^2} = \\frac{35/12}{6.25} = \\frac{7}{15} \\approx 0.4667$', why: 'distance $c = 2.5$' },
              { math: 'exact: $P(X \\in \\{1, 6\\}) = \\frac{1}{3}$, below the bound', why: 'bound holds, not tight', answer: true },
            ],
          },
          {
            title: 'an interval that is not centered',
            badge: 'shrink first',
            lines: [
              { math: '$\\mu = 50,\\ \\sigma = 4$, bound $P(42 < X < 62)$', why: '$42$ is 8 below, $62$ is 12 above' },
              { math: '$(42, 58) = 50 \\pm 8 \\subset (42, 62)$, $k = 2$', why: 'largest centered interval inside' },
              { math: '$P(42 < X < 62) \\geq 1 - \\frac{1}{4} = \\frac{3}{4}$', why: 'bigger interval, at least as likely', answer: true },
            ],
          },
          {
            title: 'how reliable an average is',
            badge: 'sample mean',
            lines: [
              { math: '$\\bar{X}$ = share of heads in 100 flips, $\\mu = 0.5$', why: '' },
              { math: '$\\operatorname{Var}(\\bar{X}) = \\frac{0.25}{100} = 0.0025$', why: 'variance of one flip over $n$' },
              { math: '$P(|\\bar{X} - 0.5| \\geq 0.1) \\leq \\frac{0.0025}{0.01} = 0.25$', why: 'variance form, $c = 0.1$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Compare the bound with real distributions in the [Chebyshev inequality visualizer](!/probability/visual-tools/inequalities/chebyshev).',
        visual: {
          caption:
            'Apply Markov\'s reasoning to the squared distance $(X - \\mu)^2$, which is never negative and has mean $\\sigma^2$. Far values have huge squared distances, so only a little probability can sit there before the average squared distance would exceed $\\sigma^2$. That leaves at most $\\frac{1}{k^2}$ of the probability beyond $k$ standard deviations: at most $25\\%$ beyond $2\\sigma$, at most about $11\\%$ beyond $3\\sigma$.',
        },
        pitfalls: [
          {
            title: 'Using k of 1 or less',
            wrong: '$k = 1$: at least $1 - 1 = 0$ within one standard deviation, so the method failed',
            right: 'the bound is true but empty; Chebyshev helps only for $k > 1$',
          },
          {
            title: 'Dividing by the standard deviation squared the wrong way',
            wrong: '$P(|X - \\mu| \\geq c) \\leq \\frac{\\sigma}{c^2}$',
            right: '$P(|X - \\mu| \\geq c) \\leq \\frac{\\sigma^2}{c^2}$, or $\\frac{1}{k^2}$ with $k = \\frac{c}{\\sigma}$',
          },
          {
            title: 'Using an uncentered interval as it is',
            wrong: '$(42, 62)$ with $\\mu = 50$: $k = \\frac{20}{2 \\cdot 4} = 2.5$',
            right: 'shrink to the centered $(42, 58)$: $k = 2$',
          },
          {
            title: 'Confusing the bound with the normal rule',
            wrong: 'within $2\\sigma$: exactly $95\\%$ for any distribution',
            right: 'Chebyshev guarantees only $75\\%$; about $95\\%$ holds for the normal',
          },
        ],
        related: ['markov-inequality', 'standard-deviation', 'clt-approximation'],
        builtOn: [
          { label: "Chebyshev's inequality (lesson)", url: ruleUrl('lesson.prob.inequalities.chebyshev.2') },
          { label: 'Variance definition', url: ruleUrl('prob.variance-definition') },
          { label: 'Standard deviation', url: ruleUrl('prob.standard-deviation-definition') },
        ],
      },
    },
    {
      id: 'clt-approximation',
      slug: 'clt-approximation',
      name: 'How to approximate a probability with the central limit theorem',
      description: 'Scale the mean and SD to the sum or the average of $n$ terms, standardize, and read $\\Phi(z)$.',
      uses: ['mean', 'standard deviation', 'normal distribution', 'z-score'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use the Central Limit Theorem (CLT) | Learn Math Class',
        description: 'Approximate a probability for a sum or a sample mean with the central limit theorem: scale the mean and SD, standardize, read the normal CDF. Worked examples.',
        keywords: ['central limit theorem', 'how to use the central limit theorem', 'clt approximation', 'central limit theorem examples', 'probability of sample mean'],
      },
      page: {
        h1: 'How to Use the Central Limit Theorem',
        lead:
          'The sum or the average of many independent, identically distributed values is approximately normal, whatever the shape of one value. Scale the mean and standard deviation to the sum or the average, standardize, and read the normal CDF.',
        recognize:
          'A question about a total or an average of many independent repeats: the mean lifetime of 36 bulbs, the total weight of 50 packages, the share of heads in 400 flips. You know the mean $\\mu$ and standard deviation $\\sigma$ of one term, but not the exact distribution of the total. Test: is $n$ large (often $n \\geq 30$, less for symmetric data) and are the terms independent? Then use a normal with the scaled parameters.',
        recognizeNote: `The theorem is stated in the lesson section ${link('lesson.prob.central-limit-theorem.1', 'Formal Statement of the Central Limit Theorem')}.`,
        methods: [
          {
            name: 'For a sample mean',
            tag: 'average',
            preferred: true,
            formula: '\\bar{X} \\approx N\\!\\left(\\mu,\\ \\frac{\\sigma^2}{n}\\right)',
            body: 'The average keeps the mean $\\mu$ and its standard deviation shrinks to $\\frac{\\sigma}{\\sqrt{n}}$.',
          },
          {
            name: 'For a sum',
            tag: 'total',
            formula: 'S_n \\approx N\\!\\left(n\\mu,\\ n\\sigma^2\\right)',
            body: `The total has mean $n\\mu$ and standard deviation $\\sigma\\sqrt{n}$ (${link('prob.variance-of-sum-independent', 'variances of independent terms add')}).`,
          },
        ],
        steps: {
          traceLabel: 'On the mean lifetime of 36 bulbs, $\\mu = 1000$ h, $\\sigma = 120$ h, $P(\\bar{X} < 970)$',
          items: [
            {
              title: 'Identify one term, the number of terms, and sum or mean.',
              body: 'The terms must be independent with the same distribution.',
              state: 'one lifetime; $n = 36$; sample mean',
            },
            {
              title: 'Write the mean and standard deviation of one term.',
              body: `From the problem, or from the [expected value](!${HUB}/expected-value) and [standard deviation](!${HUB}/standard-deviation) pages.`,
              state: '$\\mu = 1000,\\ \\sigma = 120$',
            },
            {
              title: 'Scale them to the sum or the mean.',
              body: 'Mean: $\\mu$ and $\\frac{\\sigma}{\\sqrt{n}}$. Sum: $n\\mu$ and $\\sigma\\sqrt{n}$.',
              state: '$\\sigma_{\\bar{X}} = \\frac{120}{\\sqrt{36}} = 20$',
            },
            {
              title: 'Standardize.',
              body: `Subtract the scaled mean and divide by the scaled standard deviation (${link('prob.normal-standardization', 'standardization')}).`,
              state: '$z = \\frac{970 - 1000}{20} = -1.5$',
            },
            {
              title: 'Read the normal CDF.',
              body: `Use $\\Phi(z)$ for "below" and $1 - \\Phi(z)$ for "above", as in [normal probability](!/probability/distributions/methods/normal-probability).`,
              state: '$P(\\bar{X} < 970) \\approx \\Phi(-1.5) \\approx 0.0668$',
            },
          ],
        },
        examples: [
          {
            title: 'a sample mean',
            badge: 'average',
            lines: [
              { math: '$n = 36$, $\\mu = 1000$, $\\sigma = 120$: $\\sigma_{\\bar{X}} = 20$', why: 'divide by $\\sqrt{36} = 6$' },
              { math: '$z = \\frac{970 - 1000}{20} = -1.5$', why: 'standardize' },
              { math: '$P(\\bar{X} < 970) \\approx \\Phi(-1.5) \\approx 0.0668$', why: 'rounded to 4 places', answer: true },
            ],
          },
          {
            title: 'a total weight',
            badge: 'sum',
            lines: [
              { math: '50 packages, $\\mu = 2$ kg, $\\sigma = 0.5$ kg', why: '' },
              { math: '$E[S] = 100$, $\\sigma_S = 0.5\\sqrt{50} \\approx 3.5355$', why: 'scale for a sum' },
              { math: '$z = \\frac{105 - 100}{3.5355} \\approx 1.4142$', why: 'standardize' },
              { math: '$P(S > 105) \\approx 1 - \\Phi(1.4142) \\approx 0.0786$', why: 'upper tail, 4 places', answer: true },
            ],
          },
          {
            title: 'a share of heads',
            badge: 'proportion',
            lines: [
              { math: '400 flips, one flip: $\\mu = 0.5$, $\\sigma = 0.5$', why: '0-1 variable, $\\sqrt{p(1 - p)}$' },
              { math: '$\\sigma_{\\hat{p}} = \\frac{0.5}{\\sqrt{400}} = 0.025$', why: 'share is a mean' },
              { math: '$z = \\frac{0.55 - 0.5}{0.025} = 2$', why: 'standardize' },
              { math: '$P(\\hat{p} > 0.55) \\approx 1 - \\Phi(2) \\approx 0.0228$', why: 'upper tail, 4 places', answer: true },
            ],
          },
        ],
        examplesAfter: `Get $\\Phi(z)$ in the [continuous distributions calculator](!/probability/calculators/continuous-distributions). For counts, see [normal approximation](!/probability/distributions/methods/normal-approximation), which adds a continuity correction.`,
        visual: {
          caption:
            'Adding independent values smooths out their individual shapes: the peaks and gaps of one value fill in, and the total piles up around $n\\mu$ in a bell shape. The spread of the total grows only like $\\sqrt{n}$, because highs and lows partly cancel, so the average gets tighter as $n$ grows. Overlay the matching bell curve in the [normal distribution visualizer](!/probability/visual-tools/distributions/normal).',
        },
        pitfalls: [
          {
            title: 'Using the standard deviation of one term',
            wrong: '$z = \\frac{970 - 1000}{120} = -0.25$',
            right: 'use $\\frac{\\sigma}{\\sqrt{n}} = 20$: $z = -1.5$',
          },
          {
            title: 'Scaling a sum by n instead of the square root of n',
            wrong: '$\\sigma_S = 50 \\cdot 0.5 = 25$',
            right: '$\\sigma_S = 0.5\\sqrt{50} \\approx 3.5355$',
          },
          {
            title: 'Applying it to one observation',
            wrong: 'one bulb is normal by the CLT: $P(X < 970) \\approx \\Phi(-0.25)$',
            right: 'the CLT is about sums and averages; one lifetime keeps its own distribution',
            note: `See when it applies in the ${link('lesson.prob.central-limit-theorem.6', 'CLT conditions')}.`,
          },
        ],
        related: ['standard-deviation', 'chebyshev-inequality', 'linearity-of-expectation'],
        builtOn: [
          { label: 'Central limit theorem (lesson)', url: ruleUrl('lesson.prob.central-limit-theorem.1') },
          { label: 'Normal standardization', url: ruleUrl('prob.normal-standardization') },
          { label: 'Variance of a sum of independent variables', url: ruleUrl('prob.variance-of-sum-independent') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Means, spreads, CDFs and bounds', blurb: 'Composite · each opens its own page' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'atomic', label: 'Atomic' },
        { value: 'composite', label: 'Composite' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other probability methods',
    links: [
      { url: '/probability/methods', label: 'Probability methods' },
      { url: '/probability/distributions/methods', label: 'Distribution methods' },
    ],
  },
};

export default randomVariablesMethods;
