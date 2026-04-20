const probabilityTermsList = [

  //New Take 

{
    id: 'negative_binomial_distribution',
    name: 'Negative Binomial Distribution',
    category: 'Discrete Distributions',
    formula: `A discrete distribution counting the number of trials needed to achieve a fixed number $r$ of successes in a sequence of independent Bernoulli trials with success probability $p$.`,
    link: { url: '/probability/distributions/discrete/negative-binomial', text: 'Negative Binomial Distribution' },
    fields: {
      intuition: `The negative binomial distribution answers "how many trials until $r$ successes?" It generalizes the geometric distribution, which is the special case $r = 1$.`,
      notation: `$X \\sim \\text{NegBin}(r, p)$`,
      'related concepts': `- [Geometric Distribution](!/probability/distributions/discrete/geometric)
- [Binomial Distribution](!/probability/distributions/discrete/binomial)
- [Sequence of Bernoulli Trials](!/probability/distributions/discrete#bernoulli)`
    }
  },
  // ============================================================
  // CATEGORY: Foundations
  // ============================================================
 
  {
    id: 'probability',
    name: 'Probability',
    category: 'Foundations',
    formula: `A function $P$ that assigns to each event $A$ in a sample space a real number $P(A) \\in [0, 1]$ satisfying the probability axioms.`,
    link: { url: '/probability/axioms', text: 'Probability Axioms' },
    fields: {
      intuition: `Probability quantifies how likely an event is to occur. A value of 0 means impossible, 1 means certain, and values in between reflect degrees of likelihood.`,
      notation: `$P(A)$ — probability of event $A$
$P(\\Omega) = 1$ — certainty
$P(\\emptyset) = 0$ — impossibility`,
      'related concepts': `- [Sample Space](!/probability/sample-space)
- [Event](!/probability/events)
- [Probability Measure](!/probability/axioms#axioms)
- [Conditional Probability](!/probability/conditional-probability)`
    }
  },
 
  {
    id: 'random_experiment',
    name: 'Random Experiment',
    category: 'Foundations',
    formula: `A process or action whose outcome cannot be predicted with certainty before it is performed.`,
    link: { url: '/probability/sample-space', text: 'Sample Space' },
    fields: {
      intuition: `A random experiment is any procedure that produces an unpredictable result. Rolling a die, drawing a card, or measuring a physical quantity are all random experiments.`,
      'examples': `
• Rolling a six-sided die
• Tossing a coin three times
• Measuring the time until a device fails`,
      'related concepts': `- [Sample Space](!/probability/sample-space)
- [Outcome](!/probability/sample-space#definition)
- [Event](!/probability/events)

`
    }
  },
 
  {
    id: 'sample_space',
    name: 'Sample Space',
    category: 'Foundations',
    formula: `$\\Omega = \\{\\omega_1, \\omega_2, \\ldots\\}$ — the set of all possible outcomes of a random experiment.`,
    link: { url: '/probability/sample-space', text: 'Sample Space' },
    fields: {
      intuition: `The sample space is the complete list of everything that can happen. Every probability question begins by identifying this set, because events and probabilities are defined relative to it.`,
      notation: `$\\Omega$ or $S$ — the sample space
$\\omega$ — a single outcome (element of $\\Omega$)`,
      'related concepts': `- [Event](!/probability/events)
- [Probability Measure](!/probability/axioms#axioms)
- [Random Variable](!/probability/random-variables)`
    }
  },
 
  {
    id: 'event',
    name: 'Event',
    category: 'Foundations',
    formula: `$A \\subseteq \\Omega$ — a subset of the sample space.`,
    link: { url: '/probability/events', text: 'Events' },
    fields: {
      intuition: `An event is a collection of outcomes we are interested in. It can contain one outcome, several outcomes, or even all outcomes. Probabilities are assigned to events, not to individual outcomes directly.`,
      examples: `- Rolling an even number: $A = \\{2, 4, 6\\}$
- Getting at least one head in two coin tosses: $A = \\{HH, HT, TH\\}$`,
      'related concepts': `- [Sample Space](!/probability/sample-space)
- [Complement](!/probability/sets#operations)
- [Mutually Exclusive Events](!/probability/events#relations)
- [Independence](!/probability/independence)`
    }
  },
 
  {
    id: 'elementary_event',
    name: 'Elementary Event',
    category: 'Foundations',
    formula: `An event consisting of exactly one outcome: $\\{\\omega\\}$ where $\\omega \\in \\Omega$.`,
    link: { url: '/probability/events', text: 'Events' },
    fields: {
      intuition: `An elementary event is the simplest possible event — a single outcome from the sample space that cannot be broken down further.`,
      'related concepts': `- [Event](!/probability/events)
- [Sample Space](!/probability/sample-space)
- [Probability Mass Function](!/probability/probability-function#pmf)`
    }
  },
 
  {
    id: 'relative_frequency',
    name: 'Relative Frequency',
    category: 'Foundations',
    formula: `$f_n(A) = \\frac{\\text{number of times } A \\text{ occurs}}{n}$ where $n$ is the total number of trials.`,
    link: { url: '/probability/axioms', text: 'Probability Axioms' },
    fields: {
      intuition: `Relative frequency is the proportion of times an event occurs in repeated experiments. As the number of trials grows, relative frequency tends to stabilize near the true probability of the event.`,
      'related concepts': `- [Probability](!/probability/axioms)
- [Law of Large Numbers](!/probability/large-numbers-law)`
    }
  },
 
  {
    id: 'probability_measure',
    name: 'Probability Measure',
    category: 'Foundations',
    formula: `A function $P: \\mathcal{F} \\to [0,1]$ defined on a collection of events, satisfying non-negativity, normalization ($P(\\Omega) = 1$), and countable additivity for disjoint events.`,
    link: { url: '/probability/axioms', text: 'Probability Axioms' },
    fields: {
      intuition: `A probability measure is the formal rule that assigns a number between 0 and 1 to every event in a way that is internally consistent. It is the mathematical object that makes probability rigorous.`,
      properties: `- $P(A) \\geq 0$ for all events $A$
- $P(\\Omega) = 1$
- For disjoint $A_1, A_2, \\ldots$: $P(\\bigcup A_i) = \\sum P(A_i)$`,
      'related concepts': `- [Probability Axioms](!/probability/axioms)
- [Sample Space](!/probability/sample-space)
- [Event](!/probability/events)`
    }
  },
 
  {
    id: 'equally_likely_events',
    name: 'Equally Likely Events',
    category: 'Foundations',
    formula: `Events $A_1, A_2, \\ldots, A_n$ are equally likely when $P(A_1) = P(A_2) = \\cdots = P(A_n)$.`,
    link: { url: '/probability/events', text: 'Events' },
    fields: {
      intuition: `When all outcomes in a finite sample space have the same probability, they are equally likely. In this case probability reduces to counting: $P(A) = |A| / |\\Omega|$.`,
      examples: `- A fair die: each face has probability $1/6$
- A fair coin: heads and tails each have probability $1/2$`,
      'related concepts': `- [Sample Space](!/probability/sample-space)
- [Combinatorics](!/probability/combinatorics)
- [Discrete Uniform Distribution](!/probability/distributions/discrete/uniform)`
    }
  },
 
  // ============================================================
  // CATEGORY: Conditional Probability & Independence
  // ============================================================
 
  {
    id: 'conditional_probability',
    name: 'Conditional Probability',
    category: 'Conditional Probability & Independence',
    formula: `$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$, defined when $P(B) > 0$.`,
    link: { url: '/probability/conditional-probability', text: 'Conditional Probability' },
    fields: {
      intuition: `Conditional probability measures the likelihood of an event given that another event has already occurred. It restricts attention to a smaller part of the sample space.`,
      notation: `$P(A \\mid B)$ — probability of $A$ given $B$`,
      'related concepts': `- [Independence](!/probability/independence)
- [Bayes' Theorem](!/probability/bayes-theorem)
- [Total Probability](!/probability/total-probability)
- [Joint Probability](!/probability/joint-probability)`
    }
  },
 
  {
    id: 'independent_events',
    name: 'Independent Events',
    category: 'Conditional Probability & Independence',
    formula: `Events $A$ and $B$ are independent if and only if $P(A \\cap B) = P(A) \\cdot P(B)$.`,
    link: { url: '/probability/independence', text: 'Independence' },
    fields: {
      intuition: `Two events are independent when the occurrence of one provides no information about the other. Knowing that $B$ happened does not change the probability of $A$.`,
      'common errors': `Confusing independence with mutual exclusiveness. Disjoint events with positive probability are never independent — if one occurs, the other cannot.`,
      'related concepts': `- [Conditional Probability](!/probability/conditional-probability)
- [Mutual Exclusiveness](!/probability/events#relations)
- [Independent Random Variables](!/probability/independence#definition)`
    }
  },
 
  {
    id: 'mutual_exclusiveness',
    name: 'Mutual Exclusiveness',
    category: 'Conditional Probability & Independence',
    formula: `Events $A$ and $B$ are mutually exclusive if $A \\cap B = \\emptyset$.`,
    link: { url: '/probability/events', text: 'Events' },
    fields: {
      intuition: `Mutually exclusive events cannot happen at the same time. If one occurs, the other is automatically ruled out.`,
      properties: `- $P(A \\cap B) = 0$
- $P(A \\cup B) = P(A) + P(B)$`,
      'related concepts': `- [Event](!/probability/events)
- [Addition Rule](!/probability/rules#additive)
- [Independence](!/probability/independence)`
    }
  },
 
  // ============================================================
  // CATEGORY: Random Variables
  // ============================================================
 
  {
    id: 'bernoulli_experiment',
    name: 'Bernoulli Experiment',
    category: 'Random Variables',
    formula: `A random experiment with exactly two possible outcomes, conventionally called success ($S$) and failure ($F$).`,
    link: { url: '/probability/distributions/discrete', text: 'Discrete Distributions' },
    fields: {
      intuition: `A Bernoulli experiment is the simplest random experiment: something either happens or it does not. It is the building block for more complex models like the binomial distribution.`,
      examples: `- A coin toss (heads or tails)
- A quality inspection (pass or fail)
- A medical test (positive or negative)`,
      'related concepts': `- [Bernoulli Distribution](!/probability/distributions/discrete#bernoulli)
- [Binomial Distribution](!/probability/distributions/discrete/binomial)
- [Sequence of Bernoulli Trials](!/probability/distributions/discrete#bernoulli)`
    }
  },
 
  {
    id: 'sequence_of_bernoulli_trials',
    name: 'Sequence of Bernoulli Trials',
    category: 'Random Variables',
    formula: `A sequence of independent Bernoulli experiments, each with the same success probability $p$.`,
    link: { url: '/probability/distributions/discrete', text: 'Discrete Distributions' },
    fields: {
      intuition: `Repeating the same yes/no experiment independently under identical conditions. The number of successes, the trial of first success, and similar quantities each give rise to a named distribution.`,
      'related concepts': `- [Bernoulli Experiment](!/probability/distributions/discrete#bernoulli)
- [Binomial Distribution](!/probability/distributions/discrete/binomial)
- [Geometric Distribution](!/probability/distributions/discrete/geometric)
- [Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)`
    }
  },
 
  {
    id: 'random_variable',
    name: 'Random Variable',
    category: 'Random Variables',
    formula: `$X: \\Omega \\to \\mathbb{R}$ — a function that assigns a real number to each outcome in the sample space.`,
    link: { url: '/probability/random-variables', text: 'Random Variables' },
    fields: {
      intuition: `A random variable translates outcomes of a random experiment into numbers. This numerical representation makes it possible to compute averages, measure spread, and define distributions.`,
      notation: `$X, Y, Z$ — random variables (capital letters)
$x, y, z$ — specific values they take (lowercase)`,
      'related concepts': `- [Sample Space](!/probability/sample-space)
- [Probability Function](!/probability/probability-function)
- [Expected Value](!/probability/expected-value)
- [CDF](!/probability/cdf)`
    }
  },
 
  {
    id: 'discrete_random_variable',
    name: 'Discrete Random Variable',
    category: 'Random Variables',
    formula: `A random variable whose set of possible values is finite or countably infinite.`,
    link: { url: '/probability/random-variables', text: 'Random Variables' },
    fields: {
      intuition: `A discrete random variable takes on isolated, separated values that can be listed — even if the list is infinite. Its probability distribution is described by a probability mass function.`,
      examples: `- Number of heads in 10 coin tosses
- Number of customers arriving per hour
- Number of defective items in a batch`,
      'related concepts': `- [PMF](!/probability/probability-function#pmf)
- [Discrete Distributions](!/probability/distributions/discrete)
- [Continuous Random Variable](!/probability/random-variables#types)`
    }
  },
 
  {
    id: 'continuous_random_variable',
    name: 'Continuous Random Variable',
    category: 'Random Variables',
    formula: `A random variable whose set of possible values forms an interval or union of intervals on the real line.`,
    link: { url: '/probability/random-variables', text: 'Random Variables' },
    fields: {
      intuition: `A continuous random variable can take any value within a range. Probability is spread smoothly rather than concentrated at individual points, and is described by a probability density function.`,
      examples: `       - Time until a lightbulb burns out
- Height of a randomly selected person
- Temperature at a given location`,
      'related concepts': `- [PDF](!/probability/probability-function#pdf)
- [Continuous Distributions](!/probability/distributions/continuous)
- [Discrete Random Variable](!/probability/random-variables#types)`
    }
  },
 
  // ============================================================
  // CATEGORY: Distribution Functions
  // ============================================================
 
  {
    id: 'cumulative_distribution_function',
    name: 'Cumulative Distribution Function',
    category: 'Distribution Functions',
    formula: `$F_X(x) = P(X \\le x)$ for all $x \\in \\mathbb{R}$.`,
    link: { url: '/probability/cdf', text: 'Cumulative Distribution Function' },
    fields: {
      intuition: `The CDF tracks how much probability has accumulated up to each value. It answers "how likely is the random variable to be at most $x$?" and works for any type of distribution.`,
      properties: `- $0 \\le F_X(x) \\le 1$
- Non-decreasing
- Right-continuous
- $\\lim_{x \\to -\\infty} F_X(x) = 0$, $\\lim_{x \\to +\\infty} F_X(x) = 1$`,
      'related concepts': `- [PMF](!/probability/probability-function#pmf)
- [PDF](!/probability/probability-function#pdf)
- [Random Variable](!/probability/random-variables)`
    }
  },
 
  {
    id: 'probability_mass_function',
    name: 'Probability Mass Function',
    category: 'Distribution Functions',
    formula: `$p_X(x) = P(X = x)$ — the probability that a discrete random variable $X$ takes the value $x$.`,
    link: { url: '/probability/probability-function', text: 'Probability Function' },
    fields: {
      intuition: `The PMF assigns a probability to each individual value a discrete random variable can take. All values are non-negative and their sum equals 1.`,
      properties: `- $p_X(x) \\ge 0$ for all $x$
- $\\sum_x p_X(x) = 1$`,
      'related concepts': `- [Discrete Random Variable](!/probability/random-variables#types)
- [CDF](!/probability/cdf)
- [PDF](!/probability/probability-function#pdf)`
    }
  },
 
  {
    id: 'probability_density_function',
    name: 'Probability Density Function',
    category: 'Distribution Functions',
    formula: `A function $f_X(x) \\ge 0$ such that $P(a \\le X \\le b) = \\int_a^b f_X(x)\\,dx$ and $\\int_{-\\infty}^{\\infty} f_X(x)\\,dx = 1$.`,
    link: { url: '/probability/probability-function', text: 'Probability Function' },
    fields: {
      intuition: `The PDF describes how densely probability is spread across values of a continuous random variable. Its value at a point is not a probability — probabilities come from integrating the PDF over intervals.`,
      'common errors': `Interpreting $f_X(x)$ as a probability. The PDF can exceed 1 at individual points; only its integral over an interval gives a probability.`,
      'related concepts': `- [Continuous Random Variable](!/probability/random-variables#types)
- [CDF](!/probability/cdf)
- [PMF](!/probability/probability-function#pmf)`
    }
  },
 
  // ============================================================
  // CATEGORY: Measures of a Distribution
  // ============================================================
 
  {
    id: 'expected_value',
    name: 'Expected Value',
    category: 'Measures',
    formula: `$E[X] = \\sum_x x \\cdot p_X(x)$ (discrete) or $E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f_X(x)\\,dx$ (continuous).`,
    link: { url: '/probability/expected-value', text: 'Expected Value' },
    fields: {
      intuition: `The expected value is the long-run average of a random variable over many repetitions. It represents the center of mass of the distribution.`,
      properties: `- Linearity: $E[aX + bY] = aE[X] + bE[Y]$
- $E[c] = c$ for any constant $c$`,
      'related concepts': `- [Variance](!/probability/variance)
- [Random Variable](!/probability/random-variables)
- [Indicator Random Variables](!/probability/indicators)`
    }
  },
 
  {
    id: 'variance',
    name: 'Variance',
    category: 'Measures',
    formula: `$\\operatorname{Var}(X) = E[(X - \\mu)^2]$ where $\\mu = E[X]$.`,
    link: { url: '/probability/variance', text: 'Variance' },
    fields: {
      intuition: `Variance measures how spread out a random variable's values are around its expected value. A larger variance means outcomes are more dispersed.`,
      properties: `- $\\operatorname{Var}(X) \\ge 0$
- $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$
- $\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X)$`,
      'related concepts': `- [Expected Value](!/probability/expected-value)
- [Standard Deviation](!/probability/variance#sd)
- [Covariance](!/probability/covariance)`
    }
  },
 
  {
    id: 'standard_deviation',
    name: 'Standard Deviation',
    category: 'Measures',
    formula: `$\\sigma_X = \\sqrt{\\operatorname{Var}(X)}$`,
    link: { url: '/probability/variance', text: 'Variance' },
    fields: {
      intuition: `Standard deviation is the square root of variance. It measures spread in the same units as the random variable, making it easier to interpret than variance.`,
      'related concepts': `- [Variance](!/probability/variance)
- [Expected Value](!/probability/expected-value)
- [Chebyshev's Inequality](!/probability/inequalities/chebyshev)`
    }
  },
 
  {
    id: 'covariance',
    name: 'Covariance',
    category: 'Measures',
    formula: `$\\operatorname{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])]$`,
    link: { url: '/probability/covariance', text: 'Covariance' },
    fields: {
      intuition: `Covariance measures how two random variables move together. Positive covariance means they tend to increase together; negative means one tends to increase when the other decreases.`,
      properties: `- $\\operatorname{Cov}(X, Y) = E[XY] - E[X]E[Y]$
- $\\operatorname{Cov}(X, X) = \\operatorname{Var}(X)$
- If $X, Y$ are independent, $\\operatorname{Cov}(X, Y) = 0$`,
      'related concepts': `- [Variance](!/probability/variance)
- [Correlation Coefficient](!/probability/covariance#8)
- [Independence](!/probability/independence)`
    }
  },
 
  {
    id: 'correlation_coefficient',
    name: 'Correlation Coefficient',
    category: 'Measures',
    formula: `$\\rho_{XY} = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X \\cdot \\sigma_Y}$, where $\\sigma_X, \\sigma_Y > 0$.`,
    link: { url: '/probability/covariance', text: 'Covariance' },
    fields: {
      intuition: `The correlation coefficient normalizes covariance to a scale between $-1$ and $1$. It measures the strength and direction of the linear relationship between two random variables.`,
      properties: `- $-1 \\le \\rho_{XY} \\le 1$
- $|\\rho_{XY}| = 1$ iff $Y = aX + b$ for constants $a \\ne 0$, $b$
- $\\rho_{XY} = 0$ means no linear relationship`,
      'related concepts': `- [Covariance](!/probability/covariance)
- [Independence](!/probability/independence)
- [Uncorrelated Random Variables](!/probability/covariance#4)`
    }
  },
 
  {
    id: 'conditional_expectation',
    name: 'Conditional Expectation',
    category: 'Measures',
    formula: `$E[X \\mid Y = y] = \\sum_x x \\cdot P(X = x \\mid Y = y)$ (discrete) or $E[X \\mid Y = y] = \\int x \\cdot f_{X|Y}(x \\mid y)\\,dx$ (continuous).`,
    link: { url: '/probability/expected-value', text: 'Expected Value' },
    fields: {
      intuition: `Conditional expectation is the expected value of one random variable given that another takes a specific value. It adjusts the average to account for known information.`,
      'related concepts': `- [Expected Value](!/probability/expected-value)
- [Conditional Probability](!/probability/conditional-probability)
- [Conditional Variance](!/probability/variance#properties)`
    }
  },
 
  {
    id: 'conditional_variance',
    name: 'Conditional Variance',
    category: 'Measures',
    formula: `$\\operatorname{Var}(X \\mid Y = y) = E[(X - E[X \\mid Y = y])^2 \\mid Y = y]$`,
    link: { url: '/probability/variance', text: 'Variance' },
    fields: {
      intuition: `Conditional variance measures the spread of one random variable around its conditional mean, given a specific value of another variable.`,
      'related concepts': `- [Variance](!/probability/variance)
- [Conditional Expectation](!/probability/expected-value#function)
- [Conditional Probability](!/probability/conditional-probability)`
    }
  },
 
  {
    id: 'moment',
    name: 'Moment of a Random Variable',
    category: 'Measures',
    formula: `The $k$-th moment of $X$ about the origin is $E[X^k]$. The $k$-th central moment is $E[(X - \\mu)^k]$.`,
    link: { url: '/probability/expected-value', text: 'Expected Value' },
    fields: {
      intuition: `Moments are numerical summaries of a distribution's shape. The first moment is the mean, the second central moment is the variance, and higher moments capture skewness and tail behavior.`,
      'related concepts': `- [Expected Value](!/probability/expected-value)
- [Variance](!/probability/variance)
- [Moment Generating Function](!/probability/distributions/discrete/binomial#9)`
    }
  },
 
  // ============================================================
  // CATEGORY: Discrete Distributions
  // ============================================================
 
  {
    id: 'bernoulli_distribution',
    name: 'Bernoulli Distribution',
    category: 'Discrete Distributions',
    formula: `A discrete distribution for a single trial with two outcomes: $P(X = 1) = p$ and $P(X = 0) = 1 - p$.`,
    link: { url: '/probability/distributions/discrete', text: 'Discrete Distributions' },
    fields: {
      intuition: `The Bernoulli distribution models a single yes/no trial. It is the simplest discrete distribution and the building block for the binomial, geometric, and negative binomial distributions.`,
      properties: `- $E[X] = p$
- $\\operatorname{Var}(X) = p(1 - p)$`,
      'related concepts': `- [Bernoulli Experiment](!/probability/distributions/discrete#bernoulli)
- [Binomial Distribution](!/probability/distributions/discrete/binomial)
- [Geometric Distribution](!/probability/distributions/discrete/geometric)`
    }
  },
 
  {
    id: 'binomial_distribution',
    name: 'Binomial Distribution',
    category: 'Discrete Distributions',
    formula: `A discrete distribution counting the number of successes in $n$ independent Bernoulli trials, each with success probability $p$.`,
    link: { url: '/probability/distributions/discrete/binomial', text: 'Binomial Distribution' },
    fields: {
      intuition: `The binomial distribution answers "how many successes?" in a fixed number of independent trials. It requires a fixed number of trials, constant probability, and independence.`,
      notation: `$X \\sim \\text{Bin}(n, p)$`,
      'related concepts': `- [Bernoulli Distribution](!/probability/distributions/discrete#bernoulli)
- [Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)
- [Poisson Distribution](!/probability/distributions/discrete/poisson)`
    }
  },
 
  {
    id: 'poisson_distribution',
    name: 'Poisson Distribution',
    category: 'Discrete Distributions',
    formula: `A discrete distribution modelling the number of events occurring in a fixed interval, where events happen independently at a constant average rate $\\lambda$.`,
    link: { url: '/probability/distributions/discrete/poisson', text: 'Poisson Distribution' },
    fields: {
      intuition: `The Poisson distribution counts rare events in a fixed window of time or space. It applies when events occur independently and the average rate is known.`,
      notation: `$X \\sim \\text{Poisson}(\\lambda)$`,
      'related concepts': `- [Binomial Distribution](!/probability/distributions/discrete/binomial)
- [Exponential Distribution](!/probability/distributions/continuous/exponential)
- [Expected Value](!/probability/expected-value)`
    }
  },
 
  {
    id: 'uniform_distribution_discrete',
    name: 'Discrete Uniform Distribution',
    category: 'Discrete Distributions',
    formula: `A discrete distribution where each of $n$ possible values has equal probability $1/n$.`,
    link: { url: '/probability/distributions/discrete/uniform', text: 'Discrete Uniform Distribution' },
    fields: {
      intuition: `The discrete uniform distribution applies when every outcome is equally likely — the probability counterpart of "fair." A fair die is the classic example.`,
      notation: `$X \\sim \\text{Uniform}\\{a, a+1, \\ldots, b\\}$`,
      'related concepts': `- [Equally Likely Events](!/probability/events#types)
- [Sample Space](!/probability/sample-space)
- [Continuous Uniform Distribution](!/probability/distributions/continuous/uniform)`
    }
  },
 
  {
    id: 'exponential_distribution',
    name: 'Exponential Distribution',
    category: 'Continuous Distributions',
    formula: `A continuous distribution describing the time between events in a process where events occur independently at a constant rate $\\lambda$.`,
    link: { url: '/probability/distributions/continuous/exponential', text: 'Exponential Distribution' },
    fields: {
      intuition: `The exponential distribution models waiting time — how long until the next event. Its defining feature is the memoryless property: the probability of waiting longer does not depend on how long you have already waited.`,
      notation: `$X \\sim \\text{Exp}(\\lambda)$`,
      'related concepts': `- [Poisson Distribution](!/probability/distributions/discrete/poisson)
- [Normal Distribution](!/probability/distributions/continuous/normal)
- [Continuous Uniform Distribution](!/probability/distributions/continuous/uniform)`
    }
  },
 
  {
    id: 'normal_distribution',
    name: 'Normal Distribution',
    category: 'Continuous Distributions',
    formula: `A continuous distribution characterized by a symmetric, bell-shaped curve, fully determined by its mean $\\mu$ and variance $\\sigma^2$.`,
    link: { url: '/probability/distributions/continuous/normal', text: 'Normal Distribution' },
    fields: {
      intuition: `The normal distribution appears when many small independent effects combine. Its bell curve is symmetric about the mean, with probability decreasing smoothly in both directions.`,
      notation: `$X \\sim N(\\mu, \\sigma^2)$
Standard normal: $Z \\sim N(0, 1)$`,
      'related concepts': `- [Central Limit Theorem](!/probability/central-limit-theorem)
- [Standard Deviation](!/probability/variance#sd)
- [Exponential Distribution](!/probability/distributions/continuous/exponential)`
    }
  },
 
  {
    id: 'geometric_distribution',
    name: 'Geometric Distribution',
    category: 'Discrete Distributions',
    formula: `A discrete distribution counting the number of trials needed to obtain the first success in a sequence of independent Bernoulli trials with success probability $p$.`,
    link: { url: '/probability/distributions/discrete/geometric', text: 'Geometric Distribution' },
    fields: {
      intuition: `The geometric distribution answers "how long until the first success?" It is the discrete analogue of the exponential distribution and shares its memoryless property.`,
      notation: `$X \\sim \\text{Geom}(p)$`,
      'related concepts': `- [Bernoulli Experiment](!/probability/distributions/discrete#bernoulli)
- [Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)
- [Exponential Distribution](!/probability/distributions/continuous/exponential)`
    }
  },
 
  {
    id: 'hypergeometric_distribution',
    name: 'Hypergeometric Distribution',
    category: 'Discrete Distributions',
    formula: `A discrete distribution describing the number of successes in $n$ draws without replacement from a finite population containing $K$ successes and $N - K$ failures.`,
    link: { url: '/probability/distributions/discrete/hypergeometric', text: 'Hypergeometric Distribution' },
    fields: {
      intuition: `The hypergeometric distribution is used when sampling without replacement. Unlike the binomial, the probability of success changes from draw to draw because the population is finite.`,
      notation: `$X \\sim \\text{Hypergeometric}(N, K, n)$`,
      'related concepts': `- [Binomial Distribution](!/probability/distributions/discrete/binomial)
- [Combinatorics](!/probability/combinatorics)
- [Discrete Distributions](!/probability/distributions/discrete)`
    }
  },
 
  // ============================================================
  // MISSING: Rayleigh, Gamma, Multinomial, Bivariate Normal,
  //          N-Variate Normal — no content pages exist
  // ============================================================
 
  // {
  //   id: 'rayleigh_distribution',
  //   name: 'Rayleigh Distribution',
  //   category: 'Continuous Distributions',
  //   formula: `A continuous distribution describing the magnitude of a two-dimensional vector whose components are independent, identically distributed normal random variables with zero mean.`,
  //   link: { url: '', text: '' },
  //   fields: {
  //     intuition: `The Rayleigh distribution models the distance from the origin when two perpendicular components each follow a normal distribution. It appears in signal processing and wind speed modelling.`,
  //     notation: `$X \\sim \\text{Rayleigh}(\\sigma)$`,
  //     'related concepts': `- Normal Distribution
  //     - Exponential Distribution
  //     - Chi-Squared Distribution`
  //   }
  // },
 
  // {
  //   id: 'gamma_distribution',
  //   name: 'Gamma Distribution',
  //   category: 'Continuous Distributions',
  //   formula: `A continuous distribution generalizing the exponential distribution, describing the waiting time until $k$ events occur in a Poisson process.`,
  //   link: { url: '', text: '' },
  //   fields: {
  //     intuition: `The gamma distribution extends the exponential from waiting for one event to waiting for several. With shape parameter $k$ and rate $\\lambda$, it models cumulative waiting times.`,
  //     notation: `$X \\sim \\text{Gamma}(k, \\lambda)$`,
  //     'related concepts': `- Exponential Distribution
  //     - Poisson Distribution
  //     - Chi-Squared Distribution`
  //   }
  // },
 
  // {
  //   id: 'multinomial_distribution',
  //   name: 'Multinomial Distribution',
  //   category: 'Discrete Distributions',
  //   formula: `A discrete distribution generalizing the binomial to experiments with more than two possible outcomes per trial.`,
  //   link: { url: '', text: '' },
  //   fields: {
  //     intuition: `The multinomial distribution counts how many times each of $k$ categories appears in $n$ independent trials. The binomial is the special case where $k = 2$.`,
  //     notation: `$(X_1, \\ldots, X_k) \\sim \\text{Multinomial}(n, p_1, \\ldots, p_k)$`,
  //     'related concepts': `- Binomial Distribution
  //     - Categorical Distribution`
  //   }
  // },
 
  // {
  //   id: 'bivariate_normal_distribution',
  //   name: 'Bivariate Normal Distribution',
  //   category: 'Continuous Distributions',
  //   formula: `A joint distribution of two continuous random variables where both marginals are normal and the dependence structure is fully captured by the correlation coefficient.`,
  //   link: { url: '', text: '' },
  //   fields: {
  //     intuition: `The bivariate normal describes two variables that are jointly normally distributed. The shape of the joint density is an ellipse whose orientation and eccentricity are determined by the correlation.`,
  //     'related concepts': `- Normal Distribution
  //     - Correlation Coefficient
  //     - Joint PDF`
  //   }
  // },
 
  // {
  //   id: 'n_variate_normal_distribution',
  //   name: 'N-Variate Normal Distribution',
  //   category: 'Continuous Distributions',
  //   formula: `A joint distribution of $n$ random variables fully characterized by a mean vector $\\boldsymbol{\\mu}$ and a covariance matrix $\\boldsymbol{\\Sigma}$.`,
  //   link: { url: '', text: '' },
  //   fields: {
  //     intuition: `The multivariate normal extends the normal distribution to any number of dimensions. All marginals and conditionals are also normal, and the covariance matrix encodes all pairwise relationships.`,
  //     'related concepts': `- Bivariate Normal Distribution
  //     - Covariance
  //     - Normal Distribution`
  //   }
  // },
 
  // ============================================================
  // CATEGORY: Multivariate Probability
  // ============================================================
 
  {
    id: 'bivariate_random_variable',
    name: 'Bivariate Random Variable',
    category: 'Multivariate Probability',
    formula: `A pair of random variables $(X, Y)$ defined on the same sample space, considered jointly.`,
    link: { url: '/probability/joint-probability', text: 'Joint Probability' },
    fields: {
      intuition: `A bivariate random variable treats two measurements taken from the same experiment as a single object. Their joint behavior — how they relate, co-occur, or depend on each other — is captured by a joint distribution.`,
      'related concepts': `- [Joint Probability](!/probability/joint-probability)
- [Marginal Distribution](!/probability/joint-probability#marginal)
- [Covariance](!/probability/covariance)`
    }
  },
 
  {
    id: 'n_variate_random_variables',
    name: 'N-Variate Random Variables',
    category: 'Multivariate Probability',
    formula: `A vector $(X_1, X_2, \\ldots, X_n)$ of $n$ random variables defined on the same sample space.`,
    link: { url: '/probability/joint-probability', text: 'Joint Probability' },
    fields: {
      intuition: `An extension of bivariate random variables to any number of components. The joint distribution describes how all $n$ variables behave together.`,
      'related concepts': `- [Bivariate Random Variable](!/probability/joint-probability#distributions)
- [Joint Probability](!/probability/joint-probability)
- [Covariance](!/probability/covariance)`
    }
  },
 
  {
    id: 'independent_random_variables',
    name: 'Independent Random Variables',
    category: 'Multivariate Probability',
    formula: `Random variables $X$ and $Y$ are independent if $P(X \\le x, Y \\le y) = P(X \\le x) \\cdot P(Y \\le y)$ for all $x, y$.`,
    link: { url: '/probability/independence', text: 'Independence' },
    fields: {
      intuition: `Independent random variables carry no information about each other. Knowing the value of one does not change the distribution of the other.`,
      properties: `- $f_{X,Y}(x,y) = f_X(x) \\cdot f_Y(y)$
- $E[XY] = E[X] \\cdot E[Y]$
- $\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$`,
      'related concepts': `- [Independence](!/probability/independence)
- [Covariance](!/probability/covariance)
- [Joint Probability](!/probability/joint-probability)`
    }
  },
 
  {
    id: 'orthogonal_random_variables',
    name: 'Orthogonal Random Variables',
    category: 'Multivariate Probability',
    formula: `Random variables $X$ and $Y$ are orthogonal if $E[XY] = 0$.`,
    link: { url: '/probability/covariance', text: 'Covariance' },
    fields: {
      intuition: `Orthogonality is an algebraic condition on the product of two random variables. It is weaker than independence and does not imply zero covariance unless the means are zero.`,
      'related concepts': `- [Uncorrelated Random Variables](!/probability/covariance#4)
- [Covariance](!/probability/covariance)
- [Independent Random Variables](!/probability/independence)`
    }
  },
 
  {
    id: 'uncorrelated_random_variables',
    name: 'Uncorrelated Random Variables',
    category: 'Multivariate Probability',
    formula: `Random variables $X$ and $Y$ are uncorrelated if $\\operatorname{Cov}(X, Y) = 0$, equivalently $E[XY] = E[X]E[Y]$.`,
    link: { url: '/probability/covariance', text: 'Covariance' },
    fields: {
      intuition: `Uncorrelated means no linear relationship between two variables. Independent random variables are always uncorrelated, but uncorrelated variables can still be dependent through nonlinear relationships.`,
      'common errors': `Assuming uncorrelated implies independent. This is true only for jointly normal random variables, not in general.`,
      'related concepts': `- [Covariance](!/probability/covariance)
- [Correlation Coefficient](!/probability/covariance#8)
- [Independence](!/probability/independence)`
    }
  },
 
  {
    id: 'marginal_distribution',
    name: 'Marginal Distribution',
    category: 'Multivariate Probability',
    formula: `The distribution of one random variable obtained from a joint distribution by summing (discrete) or integrating (continuous) over all values of the other variable(s).`,
    link: { url: '/probability/joint-probability', text: 'Joint Probability' },
    fields: {
      intuition: `A marginal distribution extracts the standalone behavior of one variable from a joint distribution, ignoring the other variables. In a contingency table, marginals appear as row or column totals.`,
      'related concepts': `- [Joint Probability](!/probability/joint-probability)
- [Conditional Probability](!/probability/conditional-probability)
- [Bivariate Random Variable](!/probability/joint-probability#distributions)`
    }
  },
 
  {
    id: 'joint_cdf',
    name: 'Joint Cumulative Distribution Function',
    category: 'Multivariate Probability',
    formula: `$F_{X,Y}(x, y) = P(X \\le x, Y \\le y)$ for all $x, y \\in \\mathbb{R}$.`,
    link: { url: '/probability/joint-probability', text: 'Joint Probability' },
    fields: {
      intuition: `The joint CDF extends the cumulative distribution function to multiple random variables. It gives the probability that all variables simultaneously fall below their respective thresholds.`,
      'related concepts': `- [CDF](!/probability/cdf)
- [Joint PMF](!/probability/joint-probability#distributions)
- [Joint PDF](!/probability/joint-probability#distributions)`
    }
  },
 
  {
    id: 'joint_pmf',
    name: 'Joint Probability Mass Function',
    category: 'Multivariate Probability',
    formula: `$p_{X,Y}(x, y) = P(X = x, Y = y)$ for discrete random variables $X$ and $Y$.`,
    link: { url: '/probability/joint-probability', text: 'Joint Probability' },
    fields: {
      intuition: `The joint PMF assigns a probability to each specific combination of values two discrete random variables can take simultaneously.`,
      properties: `- $p_{X,Y}(x,y) \\ge 0$
- $\\sum_x \\sum_y p_{X,Y}(x,y) = 1$`,
      'related concepts': `- [PMF](!/probability/probability-function#pmf)
- [Joint Probability](!/probability/joint-probability)
- [Marginal Distribution](!/probability/joint-probability#marginal)`
    }
  },
 
  {
    id: 'joint_pdf',
    name: 'Joint Probability Density Function',
    category: 'Multivariate Probability',
    formula: `A function $f_{X,Y}(x,y) \\ge 0$ such that $P((X,Y) \\in A) = \\iint_A f_{X,Y}(x,y)\\,dx\\,dy$ for any region $A$.`,
    link: { url: '/probability/joint-probability', text: 'Joint Probability' },
    fields: {
      intuition: `The joint PDF describes how probability density is spread over the plane for two continuous random variables. Probabilities are obtained by integrating over regions, not by evaluating at points.`,
      'related concepts': `- [PDF](!/probability/probability-function#pdf)
- [Joint Probability](!/probability/joint-probability)
- [Marginal Distribution](!/probability/joint-probability#marginal)`
    }
  },
 
  {
    id: 'conditional_pmf',
    name: 'Conditional Probability Mass Function',
    category: 'Multivariate Probability',
    formula: `$p_{X|Y}(x \\mid y) = \\frac{p_{X,Y}(x, y)}{p_Y(y)}$, defined when $p_Y(y) > 0$.`,
    link: { url: '/probability/conditional-probability', text: 'Conditional Probability' },
    fields: {
      intuition: `The conditional PMF gives the probability distribution of one discrete random variable when another discrete random variable is known to take a specific value.`,
      'related concepts': `- [Conditional Probability](!/probability/conditional-probability)
- [Joint PMF](!/probability/joint-probability#distributions)
- [Conditional PDF](!/probability/conditional-probability#formula)`
    }
  },
 
  {
    id: 'conditional_pdf',
    name: 'Conditional Probability Density Function',
    category: 'Multivariate Probability',
    formula: `$f_{X|Y}(x \\mid y) = \\frac{f_{X,Y}(x, y)}{f_Y(y)}$, defined when $f_Y(y) > 0$.`,
    link: { url: '/probability/conditional-probability', text: 'Conditional Probability' },
    fields: {
      intuition: `The conditional PDF describes the density of one continuous random variable when another continuous random variable is known to take a specific value.`,
      'related concepts': `- [Conditional Probability](!/probability/conditional-probability)
- [Joint PDF](!/probability/joint-probability#distributions)
- [Conditional PMF](!/probability/conditional-probability#formula)`
    }
  },
 
  // ============================================================
  // MISSING: Markov Property — no content page exists
  // ============================================================
 
  // {
  //   id: 'markov_property',
  //   name: 'Markov Property',
  //   category: 'Advanced Concepts',
  //   formula: `The memoryless property: the conditional distribution of a future state depends only on the present state, not on the sequence of states that preceded it.`,
  //   link: { url: '', text: '' },
  //   fields: {
  //     intuition: `A process has the Markov property when its future behavior depends only on where it is now, not on how it got there. The past is irrelevant once the present is known.`,
  //     'related concepts': `- Geometric Distribution
  //     - Exponential Distribution
  //     - Conditional Probability`
  //   }
  // },
 
  // ============================================================
  // CATEGORY: Transformations & Generating Functions
  // ============================================================
 
  {
    id: 'function_of_random_variable',
    name: 'Function of a Random Variable',
    category: 'Transformations',
    formula: `Given a random variable $X$ and a function $g$, $Y = g(X)$ defines a new random variable whose distribution is determined by the distribution of $X$ and the function $g$.`,
    link: { url: '/probability/random-variables', text: 'Random Variables' },
    fields: {
      intuition: `Applying a function to a random variable produces a new random variable. The challenge is determining the distribution of the result from the distribution of the original.`,
      'related concepts': `- [Random Variable](!/probability/random-variables)
- [PDF of Transformed Variable](!/probability/probability-function/pdf#11)
- [Expected Value](!/probability/expected-value#function)`
    }
  },
 
  {
    id: 'pdf_of_transformed_variable',
    name: 'PDF of a Transformed Variable',
    category: 'Transformations',
    formula: `If $Y = g(X)$ where $g$ is monotone and differentiable, then $f_Y(y) = f_X(g^{-1}(y)) \\cdot |\\frac{d}{dy} g^{-1}(y)|$.`,
    link: { url: '/probability/probability-function/pdf', text: 'PDF' },
    fields: {
      intuition: `When a continuous random variable is transformed, its density changes. The change-of-variables formula accounts for both the mapping of values and the stretching or compression of the density.`,
      'related concepts': `- [PDF](!/probability/probability-function#pdf)
- [Function of a Random Variable](!/probability/random-variables#probability)
- [CDF](!/probability/cdf)`
    }
  },
 
  {
    id: 'moment_generating_function',
    name: 'Moment Generating Function',
    category: 'Transformations',
    formula: `$M_X(t) = E[e^{tX}]$, defined for real values of $t$ where the expectation exists.`,
    link: { url: '/probability/distributions/discrete/binomial', text: 'Binomial Distribution' },
    fields: {
      intuition: `The moment generating function encodes all moments of a random variable in a single function. The $k$-th moment is obtained by differentiating $k$ times and evaluating at $t = 0$.`,
      properties: `- $M_X^{(k)}(0) = E[X^k]$
- If two random variables have the same MGF, they have the same distribution
- $M_{X+Y}(t) = M_X(t) \\cdot M_Y(t)$ when $X, Y$ are independent`,
      'related concepts': `- [Moment of a Random Variable](!/probability/expected-value#function)
- [Expected Value](!/probability/expected-value)
- [Variance](!/probability/variance)`
    }
  },
 
  // ============================================================
  // MISSING: Characteristic Function — no content page exists
  // ============================================================
 
  // {
  //   id: 'characteristic_function',
  //   name: 'Characteristic Function',
  //   category: 'Transformations',
  //   formula: `$\\varphi_X(t) = E[e^{itX}]$ where $i = \\sqrt{-1}$, defined for all real $t$.`,
  //   link: { url: '', text: '' },
  //   fields: {
  //     intuition: `The characteristic function is the Fourier transform of the probability distribution. Unlike the MGF, it always exists and uniquely determines the distribution.`,
  //     'related concepts': `- Moment Generating Function
  //     - Expected Value
  //     - Normal Distribution`
  //   }
  // },
 
  // ============================================================
  // CATEGORY: Set Operations (in probability context)
  // ============================================================
 
  {
    id: 'venn_diagram',
    name: 'Venn Diagram',
    category: 'Set Operations',
    formula: `A graphical representation using overlapping circles to depict sets (events) and their relationships within a sample space.`,
    link: { url: '/probability/sets', text: 'Sets in Probability' },
    fields: {
      intuition: `Venn diagrams visualize how events overlap, combine, or exclude each other. They make set operations like union, intersection, and complement immediately visible.`,
      'related concepts': `- [Union](!/probability/sets#operations)
- [Intersection](!/probability/sets#operations)
- [Complement](!/probability/sets#operations)
- [Event](!/probability/events)`
    }
  },
 
  {
    id: 'null_set',
    name: 'Null Set',
    category: 'Set Operations',
    formula: `$\\emptyset$ — the set containing no elements, representing an impossible event in probability.`,
    link: { url: '/probability/sets', text: 'Sets in Probability' },
    fields: {
      intuition: `The null set is the event that can never occur. Its probability is always zero: $P(\\emptyset) = 0$.`,
      'related concepts': `- [Sample Space](!/probability/sample-space)
- [Complement](!/probability/sets#operations)
- [Mutually Exclusive Events](!/probability/events#relations)`
    }
  },
 
  {
    id: 'union_of_sets',
    name: 'Union of Sets',
    category: 'Set Operations',
    formula: `$A \\cup B = \\{\\omega : \\omega \\in A \\text{ or } \\omega \\in B\\}$ — the event that at least one of $A$ or $B$ occurs.`,
    link: { url: '/probability/sets', text: 'Sets in Probability' },
    fields: {
      intuition: `The union combines two events into one that occurs whenever either event (or both) occurs.`,
      'related concepts': `- [Intersection](!/probability/sets#operations)
- [Complement](!/probability/sets#operations)
- [Addition Rule](!/probability/rules#additive)`
    }
  },
 
  {
    id: 'intersection_of_sets',
    name: 'Intersection of Sets',
    category: 'Set Operations',
    formula: `$A \\cap B = \\{\\omega : \\omega \\in A \\text{ and } \\omega \\in B\\}$ — the event that both $A$ and $B$ occur simultaneously.`,
    link: { url: '/probability/sets', text: 'Sets in Probability' },
    fields: {
      intuition: `The intersection is the event where both conditions are met at the same time.`,
      'related concepts': `- [Union](!/probability/sets#operations)
- [Joint Probability](!/probability/joint-probability)
- [Conditional Probability](!/probability/conditional-probability)`
    }
  },
 
  {
    id: 'disjoint_sets',
    name: 'Disjoint Sets',
    category: 'Set Operations',
    formula: `Sets $A$ and $B$ are disjoint if $A \\cap B = \\emptyset$ — they share no common elements.`,
    link: { url: '/probability/sets', text: 'Sets in Probability' },
    fields: {
      intuition: `Disjoint sets have no overlap. In probability, disjoint events are mutually exclusive — they cannot both occur in the same trial.`,
      'related concepts': `- [Mutual Exclusiveness](!/probability/events#relations)
- [Null Set](!/probability/sets#types)
- [Partition](!/probability/total-probability#cases)`
    }
  },
 
  {
    id: 'complement_of_set',
    name: 'Complement of a Set',
    category: 'Set Operations',
    formula: `$A^c = \\{\\omega \\in \\Omega : \\omega \\notin A\\}$ — all outcomes in the sample space that are not in $A$.`,
    link: { url: '/probability/sets', text: 'Sets in Probability' },
    fields: {
      intuition: `The complement of an event is everything that can happen except that event. $P(A^c) = 1 - P(A)$.`,
      'related concepts': `- [Event](!/probability/events)
- [Sample Space](!/probability/sample-space)
- [Probability Rules](!/probability/rules)`
    }
  },
 
  // ============================================================
  // CATEGORY: Visual & Structural Tools
  // ============================================================
 
  {
    id: 'probability_tree',
    name: 'Probability Tree',
    category: 'Visual Tools',
    formula: `A branching diagram where each node represents a stage of a sequential random process, branches represent possible outcomes, and branch labels show conditional probabilities.`,
    link: { url: '/probability/tree-diagrams', text: 'Tree Diagrams' },
    fields: {
      intuition: `A probability tree lays out a multi-stage experiment visually. Multiplying along a path gives joint probabilities; summing across paths reaching the same outcome gives marginal probabilities.`,
      'related concepts': `- [Conditional Probability](!/probability/conditional-probability)
- [Total Probability](!/probability/total-probability)
- [Bayes' Theorem](!/probability/bayes-theorem)`
    }
  },

  //Last Take

  // {
  //   id: 'sample_space',
  //   name: 'Sample Space',
  //   category: 'Foundations',
  //   formula: `$$\\Omega = \\{\\omega_1,\\, \\omega_2,\\, \\ldots\\}$$`,
  //   link: { url: '/probability/sample-space#definition', text: 'Sample Space' },
  //   fields: {
  //     intuition: `The complete collection of every possible outcome a random experiment can produce. Before any probabilities are assigned, the sample space defines what can happen at all.`,
  //     notation: `- $\\Omega$ (or $S$) — the sample space\n- $\\omega$ — a single outcome (an element of $\\Omega$)\n- $|\\Omega|$ — the number of outcomes, for finite spaces`,
  //     properties: `- Every outcome either belongs to $\\Omega$ or it does not — nothing outside $\\Omega$ can occur\n- Outcomes are mutually exclusive: exactly one occurs per trial\n- Outcomes are collectively exhaustive: at least one always occurs`,
  //   }
  // },
 
  // {
  //   id: 'outcome',
  //   name: 'Outcome',
  //   category: 'Foundations',
  //   formula: `$$\\omega \\in \\Omega$$`,
  //   link: { url: '/probability/sample-space#definition', text: 'Sample Space' },
  //   fields: {
  //     intuition: `A single, indivisible result of one run of a random experiment. An outcome cannot be broken into simpler pieces within the model. Also called an elementary outcome or sample point.`,
  //     notation: `- $\\omega$ — a single outcome\n- $\\Omega$ — the set to which every outcome belongs`,
  //     examples: `- Die roll: outcomes are $1, 2, 3, 4, 5, 6$\n- Coin toss: outcomes are $H$ and $T$\n- Measured height: each exact real value in an interval is an outcome`,
  //   }
  // },
 
  // {
  //   id: 'event',
  //   name: 'Event',
  //   category: 'Foundations',
  //   formula: `$$A \\subseteq \\Omega$$`,
  //   link: { url: '/probability/events#sample', text: 'Events in Probability' },
  //   fields: {
  //     intuition: `A meaningful collection of outcomes — the things we actually assign probabilities to. An event occurs when the experiment's result is one of the outcomes inside it.`,
  //     notation: `- $A, B, C$ — events\n- $A \\subseteq \\Omega$ — every element of $A$ is an outcome\n- $P(A)$ — the probability assigned to event $A$`,
  //     special_cases: `- $\\Omega$ itself — the certain event, $P(\\Omega) = 1$\n- $\\emptyset$ — the impossible event, $P(\\emptyset) = 0$\n- $\\{\\omega\\}$ — an elementary event containing a single outcome`,
  //   }
  // },
 
  // {
  //   id: 'complement',
  //   name: 'Complement (of an Event)',
  //   category: 'Foundations',
  //   formula: `$$A^c = \\Omega \\setminus A \\qquad P(A^c) = 1 - P(A)$$`,
  //   link: { url: '/probability/events#types', text: 'Event Types' },
  //   fields: {
  //     intuition: `Everything that does not belong to $A$. If $A$ is "the value is even," then $A^c$ is "the value is odd." The event and its complement together cover all possibilities exactly once.`,
  //     notation: `- $A^c$, $A'$, or $\\bar{A}$ — complement of $A$\n- $P(A^c) = 1 - P(A)$ — the complement rule`,
  //     properties: `- $A \\cup A^c = \\Omega$ and $A \\cap A^c = \\emptyset$\n- $(A^c)^c = A$\n- $A$ and $A^c$ are always mutually exclusive and exhaustive`,
  //   }
  // },
 
  // {
  //   id: 'mutually_exclusive',
  //   name: 'Mutually Exclusive Events',
  //   category: 'Foundations',
  //   formula: `$$A \\cap B = \\emptyset \\implies P(A \\cup B) = P(A) + P(B)$$`,
  //   link: { url: '/probability/events#types', text: 'Event Types' },
  //   fields: {
  //     intuition: `Two events that cannot both occur in the same trial. Knowing one happened rules the other out completely. Also called disjoint events.`,
  //     notation: `- $A \\cap B = \\emptyset$ — the intersection is empty\n- Extended: $A_1, \\ldots, A_n$ are mutually exclusive if $A_i \\cap A_j = \\emptyset$ for all $i \\neq j$`,
  //     common_errors: `Mutually exclusive is not the same as independent. Mutually exclusive events with positive probability are never independent — knowing one occurred tells you the other did not.`,
  //   }
  // },
 
  // {
  //   id: 'probability_measure',
  //   name: 'Probability Measure',
  //   category: 'Foundations',
  //   formula: `$$P: \\mathcal{F} \\to [0,1] \\quad\\text{satisfying the Kolmogorov axioms}$$`,
  //   link: { url: '/probability/axioms', text: 'Axioms of Probability' },
  //   fields: {
  //     intuition: `A function that assigns a number between 0 and 1 to each event, measuring how likely that event is. Three axioms ensure the assignment is consistent: non-negativity, normalization, and countable additivity.`,
  //     properties: `- $P(A) \\geq 0$ for all events $A$\n- $P(\\Omega) = 1$\n- If $A_1, A_2, \\ldots$ are pairwise disjoint: $P\\bigl(\\bigcup_i A_i\\bigr) = \\sum_i P(A_i)`,
  //     notation: `- $P$ — the probability measure\n- $\\mathcal{F}$ — the collection of events (a $\\sigma$-algebra on $\\Omega$)\n- $(\\Omega, \\mathcal{F}, P)$ — a probability space`,
  //   }
  // },
 
  // // ─── RULES & THEOREMS ────────────────────────────────────────────────────
 
  // {
  //   id: 'addition_rule',
  //   name: 'Addition Rule',
  //   category: 'Rules & Theorems',
  //   formula: `$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$`,
  //   link: { url: '/probability/rules#additive', text: 'Additive Rules' },
  //   fields: {
  //     intuition: `The probability that at least one of two events occurs. Adding $P(A)$ and $P(B)$ counts any outcome in $A \\cap B$ twice, so we subtract it once.`,
  //     special_cases: `- If $A$ and $B$ are mutually exclusive: $P(A \\cup B) = P(A) + P(B)$\n- For $n$ mutually exclusive events: $P\\bigl(\\bigcup_i A_i\\bigr) = \\sum_i P(A_i)$`,
  //     common_errors: `Forgetting to subtract $P(A \\cap B)$ when events overlap. The formula $P(A) + P(B)$ alone is only correct when $A \\cap B = \\emptyset$.`,
  //   }
  // },
 
  // {
  //   id: 'multiplication_rule',
  //   name: 'Multiplication Rule',
  //   category: 'Rules & Theorems',
  //   formula: `$$P(A \\cap B) = P(A) \\cdot P(B \\mid A) = P(B) \\cdot P(A \\mid B)$$`,
  //   link: { url: '/probability/rules#multy', text: 'Multiplicative Rules' },
  //   fields: {
  //     intuition: `The probability that both events occur together. Multiply the probability of the first by the conditional probability of the second given the first. Extends via the chain rule to $n$ events.`,
  //     special_cases: `- If $A$ and $B$ are independent: $P(A \\cap B) = P(A) \\cdot P(B)$\n- Chain rule for $n$ events: $P(A_1 \\cap \\cdots \\cap A_n) = P(A_1)\\,P(A_2|A_1)\\,P(A_3|A_1 \\cap A_2)\\cdots$`,
  //   }
  // },
 
  // {
  //   id: 'total_probability',
  //   name: 'Law of Total Probability',
  //   category: 'Rules & Theorems',
  //   formula: `$$P(A) = \\sum_{i=1}^{n} P(A \\mid B_i)\\, P(B_i)$$`,
  //   link: { url: '/probability/total-probability', text: 'Law of Total Probability' },
  //   fields: {
  //     intuition: `Breaks the probability of an event $A$ into pieces by conditioning on a partition $B_1, \\ldots, B_n$ of the sample space. Each piece is the probability of $A$ given one partition element, weighted by that element's probability.`,
  //     notation: `- $B_1, \\ldots, B_n$ — a partition of $\\Omega$ (mutually exclusive and exhaustive)\n- $P(A \\mid B_i)$ — the conditional probability of $A$ within partition element $B_i$`,
  //     properties: `- Requires a valid partition: $B_i \\cap B_j = \\emptyset$ for $i \\neq j$ and $\\bigcup_i B_i = \\Omega$\n- Works for any number of partition elements $n \\geq 2$\n- Used as the denominator in Bayes' theorem`,
  //   }
  // },
 
  // {
  //   id: 'bayes_theorem',
  //   name: "Bayes' Theorem",
  //   category: 'Rules & Theorems',
  //   formula: `$$P(B_j \\mid A) = \\frac{P(A \\mid B_j)\\, P(B_j)}{\\displaystyle\\sum_{i} P(A \\mid B_i)\\, P(B_i)}$$`,
  //   link: { url: '/probability/bayes-theorem', text: "Bayes' Theorem" },
  //   fields: {
  //     intuition: `Inverts a conditional probability: given $P(A \\mid B)$, it recovers $P(B \\mid A)$. The denominator uses the law of total probability. Widely used in Bayesian inference to update beliefs after observing evidence.`,
  //     notation: `- $P(B_j)$ — prior probability of $B_j$ (before observing $A$)\n- $P(A \\mid B_j)$ — likelihood of $A$ given $B_j$\n- $P(B_j \\mid A)$ — posterior probability of $B_j$ after observing $A$`,
  //     special_cases: `Two-event form: $$P(B \\mid A) = \\frac{P(A \\mid B)\\,P(B)}{P(A)}$$`,
  //   }
  // },
 
  // // ─── CONDITIONAL PROBABILITY & INDEPENDENCE ──────────────────────────────
 
  // {
  //   id: 'conditional_probability',
  //   name: 'Conditional Probability',
  //   category: 'Conditional Probability & Independence',
  //   formula: `$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0$$`,
  //   link: { url: '/probability/conditional-probability#formula', text: 'Conditional Probability Formula' },
  //   fields: {
  //     intuition: `The probability of $A$ once we know $B$ has occurred. Restricts the sample space to outcomes consistent with $B$ and re-normalizes probabilities within that restricted space.`,
  //     notation: `- $P(A \\mid B)$ — "probability of $A$ given $B$"\n- $P(A \\cap B)$ — the numerator: both events occur\n- $P(B)$ — the denominator: normalizes to the restricted space`,
  //     common_errors: `$P(A \\mid B) \\neq P(B \\mid A)$ in general. Swapping the condition is a common error (prosecutor's fallacy). Use Bayes' theorem to reverse the conditioning direction.`,
  //   }
  // },
 
  // {
  //   id: 'independence',
  //   name: 'Independence',
  //   category: 'Conditional Probability & Independence',
  //   formula: `$$P(A \\cap B) = P(A)\\cdot P(B)$$`,
  //   link: { url: '/probability/independence#formula', text: 'Independence Formula' },
  //   fields: {
  //     intuition: `Two events are independent when knowing one has occurred gives no information about the other. The probability of each is unaffected by whether the other happens.`,
  //     notation: `- Equivalent conditions: $P(A \\mid B) = P(A)$ and $P(B \\mid A) = P(B)$\n- Pairwise independence of $n$ events does not imply mutual independence`,
  //     common_errors: `Independence is not the same as mutual exclusivity. Two events with positive probability that are mutually exclusive are never independent — knowing one occurred tells you the other did not.`,
  //   }
  // },
 
  // {
  //   id: 'joint_probability',
  //   name: 'Joint Probability',
  //   category: 'Conditional Probability & Independence',
  //   formula: `$$P(X = x,\\; Y = y) \\quad\\text{or}\\quad P(A \\cap B)$$`,
  //   link: { url: '/probability/joint-probability#definition', text: 'Joint Probability' },
  //   fields: {
  //     intuition: `The probability that two or more events occur simultaneously, or that multiple random variables take specific values at the same time. Captures how outcomes co-occur rather than how they behave in isolation.`,
  //     notation: `- Discrete: $p_{X,Y}(x,y) = P(X=x, Y=y)$\n- Continuous: $f_{X,Y}(x,y)$ — joint density function\n- $P(A \\cap B)$ — joint probability for events`,
  //     properties: `- Marginals are recovered by summing (discrete) or integrating (continuous) over the other variable\n- If independent: $P(X=x, Y=y) = P(X=x)\\cdot P(Y=y)$`,
  //   }
  // },
 
  // {
  //   id: 'partition',
  //   name: 'Partition',
  //   category: 'Conditional Probability & Independence',
  //   formula: `$$B_i \\cap B_j = \\emptyset \\;(i \\neq j), \\quad \\bigcup_{i=1}^{n} B_i = \\Omega$$`,
  //   link: { url: '/probability/total-probability', text: 'Law of Total Probability' },
  //   fields: {
  //     intuition: `A collection of events that divides the sample space into non-overlapping pieces that cover everything. Every outcome falls into exactly one partition element. Partitions are the setting in which the law of total probability and Bayes' theorem apply.`,
  //     properties: `- Mutually exclusive: no two partition elements overlap\n- Collectively exhaustive: every outcome is in some element\n- All elements must have positive probability for the law of total probability to apply`,
  //   }
  // },
 
  // // ─── RANDOM VARIABLES & FUNCTIONS ────────────────────────────────────────
 
  // {
  //   id: 'random_variable',
  //   name: 'Random Variable',
  //   category: 'Random Variables & Functions',
  //   formula: `$$X: \\Omega \\to \\mathbb{R}$$`,
  //   link: { url: '/probability/random-variables#definition', text: 'Random Variables' },
  //   fields: {
  //     intuition: `A function that assigns a real number to each outcome of a random experiment. Translates the abstract language of events into numbers so that probability can be used to analyze counts, measurements, and quantities.`,
  //     notation: `- $X$, $Y$, $Z$ — random variables (capital letters)\n- $x$, $y$, $z$ — realized values (lowercase)\n- $P(X = x)$ or $P(X \\leq x)$ — probability statements about the variable`,
  //   }
  // },
 
  // {
  //   id: 'discrete_rv',
  //   name: 'Discrete Random Variable',
  //   category: 'Random Variables & Functions',
  //   formula: `$$X \\text{ takes values in a countable set } \\{x_1, x_2, \\ldots\\}$$`,
  //   link: { url: '/probability/random-variables#types', text: 'Types of Random Variables' },
  //   fields: {
  //     intuition: `A random variable whose possible values can be listed one by one, even if the list is infinite. Described by a probability mass function (PMF) that assigns a positive probability to each possible value.`,
  //     examples: `- Number of heads in 10 coin flips: values in $\\{0,1,\\ldots,10\\}$\n- Number of calls arriving per hour: values in $\\{0,1,2,\\ldots\\}$\n- Outcome of a die roll: values in $\\{1,2,3,4,5,6\\}$`,
  //   }
  // },
 
  // {
  //   id: 'continuous_rv',
  //   name: 'Continuous Random Variable',
  //   category: 'Random Variables & Functions',
  //   formula: `$$X \\text{ takes values in an interval of } \\mathbb{R}$$`,
  //   link: { url: '/probability/random-variables#types', text: 'Types of Random Variables' },
  //   fields: {
  //     intuition: `A random variable whose possible values fill an interval rather than a list of distinct points. No single value has positive probability — probability is assigned to intervals and described by a probability density function (PDF).`,
  //     examples: `- Waiting time for an event: $X \\in [0, \\infty)$\n- A uniformly random point in $[0,1]$\n- Height or temperature measurement: any real value in a range`,
  //   }
  // },
 
  // {
  //   id: 'pmf',
  //   name: 'Probability Mass Function (PMF)',
  //   category: 'Random Variables & Functions',
  //   formula: `$$p_X(x) = P(X = x), \\quad \\sum_{x} p_X(x) = 1$$`,
  //   link: { url: '/probability/probability-function/pmf#1', text: 'PMF — Definition' },
  //   fields: {
  //     intuition: `The rule that assigns a probability to each possible value of a discrete random variable. Analogous to placing weights on a number line — heavier weights at more likely values, all weights summing to 1.`,
  //     notation: `- $p_X(x)$ or $P(X=x)$ — probability that $X$ equals $x$\n- Support: $\\{x : p_X(x) > 0\\}$ — the set of values with positive probability`,
  //     properties: `- $p_X(x) \\geq 0$ for all $x$\n- $\\sum_x p_X(x) = 1$\n- $P(X \\in A) = \\sum_{x \\in A} p_X(x)$ for any event $A$`,
  //   }
  // },
 
  // {
  //   id: 'pdf',
  //   name: 'Probability Density Function (PDF)',
  //   category: 'Random Variables & Functions',
  //   formula: `$$f_X(x) \\geq 0, \\quad \\int_{-\\infty}^{\\infty} f_X(x)\\,dx = 1, \\quad P(a \\leq X \\leq b) = \\int_a^b f_X(x)\\,dx$$`,
  //   link: { url: '/probability/probability-function/pdf', text: 'PDF' },
  //   fields: {
  //     intuition: `The continuous analog of the PMF. The PDF itself is not a probability — it is a density. Probability comes from integrating over an interval. The height of $f_X$ at a point reflects relative likelihood, not the probability of that exact value.`,
  //     notation: `- $f_X(x)$ — the density function\n- $f_X(x)$ can exceed 1 (it is a density, not a probability)\n- $P(X = x) = 0$ for any single point`,
  //     common_errors: `$f_X(x)$ is not $P(X=x)$. The probability of any single exact value is always 0 for a continuous random variable. Only integrals over intervals yield probabilities.`,
  //   }
  // },
 
  // {
  //   id: 'cdf',
  //   name: 'Cumulative Distribution Function (CDF)',
  //   category: 'Random Variables & Functions',
  //   formula: `$$F_X(x) = P(X \\leq x)$$`,
  //   link: { url: '/probability/cdf#definition', text: 'CDF — Definition' },
  //   fields: {
  //     intuition: `Tracks how probability accumulates as values increase. For any threshold $x$, $F_X(x)$ gives the probability that the random variable falls at or below that value. Defined for all random variables — discrete, continuous, or mixed.`,
  //     properties: `- $F_X$ is non-decreasing\n- $F_X(-\\infty) = 0$ and $F_X(\\infty) = 1$\n- Right-continuous: $\\lim_{t \\downarrow x} F_X(t) = F_X(x)$\n- $P(a < X \\leq b) = F_X(b) - F_X(a)$`,
  //   }
  // },
 
  // {
  //   id: 'indicator',
  //   name: 'Indicator Random Variable',
  //   category: 'Random Variables & Functions',
  //   formula: `$$\\mathbf{1}_A(\\omega) = \\begin{cases} 1 & \\omega \\in A \\\\ 0 & \\omega \\notin A \\end{cases}$$`,
  //   link: { url: '/probability/indicators', text: 'Indicator Variables' },
  //   fields: {
  //     intuition: `A binary random variable that equals 1 when a given event $A$ occurs and 0 otherwise. Converts events into numbers. Its expected value equals the probability of the event: $E[\\mathbf{1}_A] = P(A)$.`,
  //     notation: `- $\\mathbf{1}_A$ or $I_A$ — indicator of event $A$\n- $E[\\mathbf{1}_A] = P(A)$`,
  //     properties: `- $(\\mathbf{1}_A)^2 = \\mathbf{1}_A$ (idempotent)\n- $\\mathbf{1}_{A^c} = 1 - \\mathbf{1}_A$\n- $\\mathbf{1}_{A \\cap B} = \\mathbf{1}_A \\cdot \\mathbf{1}_B$\n- Sums of indicators count how many events in a collection occur`,
  //   }
  // },
 
  // // ─── MEASURES ────────────────────────────────────────────────────────────
 
  // {
  //   id: 'expected_value',
  //   name: 'Expected Value',
  //   category: 'Measures',
  //   formula: `$$E[X] = \\sum_x x\\,p_X(x) \\quad\\text{or}\\quad E[X] = \\int_{-\\infty}^{\\infty} x\\,f_X(x)\\,dx$$`,
  //   link: { url: '/probability/expected-value#intuition', text: 'Expected Value — Intuition' },
  //   fields: {
  //     intuition: `The long-run average value of a random variable over many independent repetitions of the experiment. Each possible value is weighted by its probability. Also called the mean or expectation, denoted $\\mu$.`,
  //     notation: `- $E[X]$, $\\mathbb{E}[X]$, or $\\mu$ — expected value of $X$\n- Linearity: $E[aX + b] = aE[X] + b$\n- Additivity: $E[X + Y] = E[X] + E[Y]$ (always, no independence needed)`,
  //     properties: `- $E[c] = c$ for any constant $c$\n- $E[\\mathbf{1}_A] = P(A)$\n- If $X \\geq 0$ then $E[X] \\geq 0$`,
  //   }
  // },
 
  // {
  //   id: 'variance',
  //   name: 'Variance',
  //   category: 'Measures',
  //   formula: `$$\\operatorname{Var}(X) = E[(X - \\mu)^2] = E[X^2] - (E[X])^2$$`,
  //   link: { url: '/probability/variance#definition', text: 'Variance' },
  //   fields: {
  //     intuition: `Measures how far a random variable's values typically spread from its mean. Averages the squared distances from the mean — squaring ensures all deviations contribute positively and emphasizes large departures.`,
  //     notation: `- $\\operatorname{Var}(X)$, $\\sigma^2$, or $\\sigma_X^2$ — variance of $X$\n- $\\operatorname{Var}(aX + b) = a^2\\operatorname{Var}(X)$\n- $\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X,Y)$`,
  //     common_errors: `Variance cannot be negative. A negative result signals an arithmetic error. Also: $\\operatorname{Var}(X + Y) \\neq \\operatorname{Var}(X) + \\operatorname{Var}(Y)$ unless $X$ and $Y$ are uncorrelated.`,
  //   }
  // },
 
  // {
  //   id: 'standard_deviation',
  //   name: 'Standard Deviation',
  //   category: 'Measures',
  //   formula: `$$\\sigma = \\sqrt{\\operatorname{Var}(X)}$$`,
  //   link: { url: '/probability/variance#sd', text: 'Variance vs Standard Deviation' },
  //   fields: {
  //     intuition: `The square root of the variance. Returns spread to the same units as the original random variable, making it directly interpretable alongside the mean. $\\sigma$ measures the typical size of a deviation from $E[X]$.`,
  //     notation: `- $\\sigma$ or $\\sigma_X$ — standard deviation\n- $\\sigma^2$ — variance\n- $\\operatorname{SD}(aX + b) = |a|\\,\\sigma_X$`,
  //   }
  // },
 
  // {
  //   id: 'covariance',
  //   name: 'Covariance',
  //   category: 'Measures',
  //   formula: `$$\\operatorname{Cov}(X,Y) = E[(X - \\mu_X)(Y - \\mu_Y)] = E[XY] - E[X]E[Y]$$`,
  //   link: { url: '/probability/covariance', text: 'Covariance' },
  //   fields: {
  //     intuition: `Measures the direction and rough magnitude of the linear relationship between two random variables. Positive covariance means they tend to deviate from their means in the same direction; negative means opposite directions.`,
  //     notation: `- $\\operatorname{Cov}(X,Y)$ or $\\sigma_{XY}$\n- $\\operatorname{Cov}(X,X) = \\operatorname{Var}(X)$\n- Correlation: $\\rho_{XY} = \\frac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\,\\sigma_Y} \\in [-1,1]$`,
  //     properties: `- Symmetric: $\\operatorname{Cov}(X,Y) = \\operatorname{Cov}(Y,X)$\n- Bilinear in both arguments\n- If $X \\perp Y$: $\\operatorname{Cov}(X,Y) = 0$, but the converse is not generally true`,
  //   }
  // },
 
  // {
  //   id: 'median',
  //   name: 'Median',
  //   category: 'Measures',
  //   formula: `$$F_X(m) \\geq 0.5 \\quad\\text{and}\\quad P(X \\geq m) \\geq 0.5$$`,
  //   link: { url: '/probability/median', text: 'Median' },
  //   fields: {
  //     intuition: `The middle value of a distribution — the point where half the probability lies below and half above. Unlike the mean, the median is not pulled by extreme values, making it robust to heavy tails or skew.`,
  //     notation: `- $m$ or $\\tilde{\\mu}$ — the median\n- Continuous equivalent: $\\int_{-\\infty}^{m} f(x)\\,dx = 0.5$`,
  //     examples: `- Continuous uniform $U(a,b)$: median $= \\frac{a+b}{2}$\n- Exponential $\\operatorname{Exp}(\\lambda)$: median $= \\frac{\\ln 2}{\\lambda}$\n- Standard normal: median $= 0$`,
  //   }
  // },
 
  // {
  //   id: 'mode',
  //   name: 'Mode',
  //   category: 'Measures',
  //   formula: `$$\\text{mode} = \\arg\\max_x\\, p_X(x) \\quad\\text{or}\\quad \\arg\\max_x\\, f_X(x)$$`,
  //   link: { url: '/probability/mode', text: 'Mode' },
  //   fields: {
  //     intuition: `The most probable value (discrete) or the peak of the density (continuous). A distribution may have one mode (unimodal), two (bimodal), or more (multimodal). It is the value where probability mass is most concentrated.`,
  //     examples: `- Binomial $B(n,p)$: mode $\\approx \\lfloor(n+1)p\\rfloor$\n- Normal $N(\\mu,\\sigma^2)$: mode $= \\mu$\n- Geometric: mode $= 1$`,
  //   }
  // },
 
  // // ─── DISCRETE DISTRIBUTIONS ──────────────────────────────────────────────
 
  // {
  //   id: 'bernoulli_trial',
  //   name: 'Bernoulli Trial',
  //   category: 'Discrete Distributions',
  //   formula: `$$P(X=1) = p, \\quad P(X=0) = 1-p, \\quad 0 < p < 1$$`,
  //   link: { url: '/probability/distributions/discrete#bernoulli', text: 'Bernoulli Trial' },
  //   fields: {
  //     intuition: `A single experiment with exactly two outcomes — success (1) or failure (0) — where the probability of success is $p$. The simplest building block for more complex discrete models. A sequence of independent Bernoulli trials with the same $p$ underlies the binomial distribution.`,
  //     notation: `- $X \\sim \\operatorname{Bernoulli}(p)$\n- $E[X] = p$, $\\operatorname{Var}(X) = p(1-p)$`,
  //   }
  // },
 
  // {
  //   id: 'binomial',
  //   name: 'Binomial Distribution',
  //   category: 'Discrete Distributions',
  //   formula: `$$P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}, \\quad k = 0,1,\\ldots,n$$`,
  //   link: { url: '/probability/distributions/discrete/binomial', text: 'Binomial Distribution' },
  //   fields: {
  //     intuition: `Counts the number of successes in $n$ independent Bernoulli trials, each with success probability $p$. The go-to model for repeated yes/no experiments with a fixed number of trials.`,
  //     notation: `- $X \\sim B(n,p)$ or $\\operatorname{Binomial}(n,p)$\n- $n$ — number of trials, $p$ — success probability per trial\n- $E[X] = np$, $\\operatorname{Var}(X) = np(1-p)$`,
  //   }
  // },
 
  // {
  //   id: 'geometric',
  //   name: 'Geometric Distribution',
  //   category: 'Discrete Distributions',
  //   formula: `$$P(X = k) = (1-p)^{k-1}p, \\quad k = 1, 2, 3, \\ldots$$`,
  //   link: { url: '/probability/distributions/discrete/geometric', text: 'Geometric Distribution' },
  //   fields: {
  //     intuition: `The number of independent Bernoulli trials until the first success. Has the memoryless property: the distribution of remaining trials does not depend on how many have already failed.`,
  //     notation: `- $X \\sim \\operatorname{Geometric}(p)$\n- $E[X] = 1/p$, $\\operatorname{Var}(X) = (1-p)/p^2$\n- Memoryless: $P(X > m+n \\mid X > m) = P(X > n)$`,
  //   }
  // },
 
  // {
  //   id: 'poisson',
  //   name: 'Poisson Distribution',
  //   category: 'Discrete Distributions',
  //   formula: `$$P(X = k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}, \\quad k = 0,1,2,\\ldots$$`,
  //   link: { url: '/probability/distributions/discrete/poisson', text: 'Poisson Distribution' },
  //   fields: {
  //     intuition: `Models the number of events occurring in a fixed interval of time or space when events happen independently at a constant average rate $\\lambda$. Arises as the limit of $B(n,p)$ when $n \\to \\infty$ and $np \\to \\lambda$.`,
  //     notation: `- $X \\sim \\operatorname{Poisson}(\\lambda)$\n- $\\lambda$ — the rate parameter (mean number of events)\n- $E[X] = \\lambda$, $\\operatorname{Var}(X) = \\lambda$ (mean equals variance)`,
  //   }
  // },
 
  // {
  //   id: 'hypergeometric',
  //   name: 'Hypergeometric Distribution',
  //   category: 'Discrete Distributions',
  //   formula: `$$P(X = k) = \\frac{\\dbinom{K}{k}\\dbinom{N-K}{n-k}}{\\dbinom{N}{n}}$$`,
  //   link: { url: '/probability/distributions/discrete/hypergeometric', text: 'Hypergeometric Distribution' },
  //   fields: {
  //     intuition: `Models draws without replacement from a finite population of $N$ items containing $K$ successes. Unlike the binomial, each draw changes the composition of what remains, so draws are not independent.`,
  //     notation: `- $X \\sim \\operatorname{Hypergeometric}(N, K, n)$\n- $N$ — population size, $K$ — number of successes in population, $n$ — sample size\n- $E[X] = nK/N$`,
  //   }
  // },
 
  // {
  //   id: 'negative_binomial',
  //   name: 'Negative Binomial Distribution',
  //   category: 'Discrete Distributions',
  //   formula: `$$P(X = k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}, \\quad k = r, r+1, \\ldots$$`,
  //   link: { url: '/probability/distributions/discrete/negative-binomial', text: 'Negative Binomial Distribution' },
  //   fields: {
  //     intuition: `The number of independent Bernoulli trials needed to achieve the $r$-th success. Generalizes the geometric distribution ($r=1$). Models scenarios where a fixed number of successes must accumulate.`,
  //     notation: `- $X \\sim \\operatorname{NegBin}(r,p)$\n- $r$ — target number of successes, $p$ — success probability per trial\n- $E[X] = r/p$, $\\operatorname{Var}(X) = r(1-p)/p^2$`,
  //   }
  // },
 
  // {
  //   id: 'discrete_uniform',
  //   name: 'Discrete Uniform Distribution',
  //   category: 'Discrete Distributions',
  //   formula: `$$P(X = k) = \\frac{1}{b - a + 1}, \\quad k \\in \\{a, a+1, \\ldots, b\\}$$`,
  //   link: { url: '/probability/distributions/discrete/uniform#1', text: 'Discrete Uniform Distribution' },
  //   fields: {
  //     intuition: `Every value in the range $\\{a, a+1, \\ldots, b\\}$ is equally probable. The discrete model of complete uncertainty within a finite range. The die roll is the canonical example.`,
  //     notation: `- $X \\sim \\operatorname{DUnif}(a,b)$\n- $n = b - a + 1$ — number of values\n- $E[X] = (a+b)/2$, $\\operatorname{Var}(X) = (n^2-1)/12$`,
  //   }
  // },
 
  // // ─── CONTINUOUS DISTRIBUTIONS ────────────────────────────────────────────
 
  // {
  //   id: 'normal',
  //   name: 'Normal Distribution',
  //   category: 'Continuous Distributions',
  //   formula: `$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,\\exp\\!\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)$$`,
  //   link: { url: '/probability/distributions/continuous/normal', text: 'Normal Distribution' },
  //   fields: {
  //     intuition: `A symmetric bell-shaped distribution centered at $\\mu$, with spread controlled by $\\sigma$. Central to probability through the Central Limit Theorem: sums of many independent random variables converge to a normal distribution.`,
  //     notation: `- $X \\sim N(\\mu, \\sigma^2)$\n- $\\mu$ — mean (center), $\\sigma^2$ — variance (spread)\n- Standard normal: $Z \\sim N(0,1)$, obtained via $Z = (X-\\mu)/\\sigma$`,
  //     properties: `- Mean = median = mode = $\\mu$\n- Symmetric about $\\mu$\n- $68\\%$ of mass within $1\\sigma$; $95\\%$ within $2\\sigma$; $99.7\\%$ within $3\\sigma$`,
  //   }
  // },
 
  // {
  //   id: 'exponential',
  //   name: 'Exponential Distribution',
  //   category: 'Continuous Distributions',
  //   formula: `$$f(x) = \\lambda e^{-\\lambda x}, \\quad x \\geq 0$$`,
  //   link: { url: '/probability/distributions/continuous/exponential', text: 'Exponential Distribution' },
  //   fields: {
  //     intuition: `Models the waiting time between independent events occurring at a constant average rate $\\lambda$. Has the memoryless property: $P(X > s + t \\mid X > s) = P(X > t)$.`,
  //     notation: `- $X \\sim \\operatorname{Exp}(\\lambda)$\n- $\\lambda$ — rate parameter; $1/\\lambda$ — mean waiting time\n- $E[X] = 1/\\lambda$, $\\operatorname{Var}(X) = 1/\\lambda^2$`,
  //     properties: `- The only continuous memoryless distribution\n- CDF: $F(x) = 1 - e^{-\\lambda x}$\n- Continuous analog of the geometric distribution`,
  //   }
  // },
 
  // {
  //   id: 'continuous_uniform',
  //   name: 'Continuous Uniform Distribution',
  //   category: 'Continuous Distributions',
  //   formula: `$$f(x) = \\frac{1}{b-a}, \\quad x \\in [a,b]$$`,
  //   link: { url: '/probability/distributions/continuous/uniform', text: 'Continuous Uniform Distribution' },
  //   fields: {
  //     intuition: `All points in $[a,b]$ are equally likely in the sense of equal density. Probability is proportional to interval length: $P(c \\leq X \\leq d) = (d-c)/(b-a)$. The continuous model of complete uncertainty over an interval.`,
  //     notation: `- $X \\sim U(a,b)$ or $\\operatorname{Unif}(a,b)$\n- $E[X] = (a+b)/2$, $\\operatorname{Var}(X) = (b-a)^2/12$`,
  //   }
  // },
 
  // // ─── INEQUALITIES & LIMIT THEOREMS ───────────────────────────────────────
 
  // {
  //   id: 'markov',
  //   name: "Markov's Inequality",
  //   category: 'Inequalities & Limit Theorems',
  //   formula: `$$P(X \\geq a) \\leq \\frac{E[X]}{a}, \\quad X \\geq 0,\\; a > 0$$`,
  //   link: { url: '/probability/inequalities/markov#2', text: "Markov's Inequality — Statement" },
  //   fields: {
  //     intuition: `An upper bound on the probability that a non-negative random variable exceeds a threshold, using only its expected value. Extremely general — requires no knowledge of the distribution's shape — but typically a loose bound.`,
  //     properties: `- Requires: $X \\geq 0$ and $E[X]$ finite\n- The bound $E[X]/a$ is tight: it is achieved by a two-point distribution\n- Used to derive Chebyshev's inequality and many limit theorems`,
  //   }
  // },
 
  // {
  //   id: 'chebyshev',
  //   name: "Chebyshev's Inequality",
  //   category: 'Inequalities & Limit Theorems',
  //   formula: `$$P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$`,
  //   link: { url: '/probability/inequalities/chebyshev#2', text: "Chebyshev's Inequality — Statement" },
  //   fields: {
  //     intuition: `Bounds the probability of deviating from the mean by more than $k$ standard deviations, using only the mean and variance. Tighter than Markov's inequality because it uses more information. Applies to any distribution with finite variance.`,
  //     notation: `- Equivalently: $P(|X-\\mu| \\geq \\varepsilon) \\leq \\sigma^2/\\varepsilon^2$\n- $k=2$: at most $25\\%$ of mass outside $2\\sigma$\n- $k=3$: at most $11\\%$ outside $3\\sigma$`,
  //     properties: `- Requires: finite mean $\\mu$ and finite variance $\\sigma^2$\n- Distribution-free — no assumption on the shape of $X$\n- Derived from Markov's inequality applied to $(X-\\mu)^2$`,
  //   }
  // },
 
  // {
  //   id: 'central_limit_theorem',
  //   name: 'Central Limit Theorem',
  //   category: 'Inequalities & Limit Theorems',
  //   formula: `$$\\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} \\xrightarrow{\\,d\\,} N(0,1) \\quad\\text{as } n \\to \\infty$$`,
  //   link: { url: '/probability/central-limit-theorem', text: 'Central Limit Theorem' },
  //   fields: {
  //     intuition: `The normalized sum (or average) of a large number of independent, identically distributed random variables with finite mean and variance converges in distribution to the standard normal — regardless of the original distribution. Explains why the normal distribution appears so widely in practice.`,
  //     notation: `- $\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i$ — sample mean\n- $\\mu = E[X_i]$, $\\sigma^2 = \\operatorname{Var}(X_i)$\n- $\\xrightarrow{d}$ — convergence in distribution`,
  //     properties: `- Requires: i.i.d. sequence with $\\mu$ and $\\sigma^2$ both finite\n- Does not require the $X_i$ to be normally distributed\n- Approximation improves as $n$ grows; commonly considered adequate at $n \\geq 30$`,
  //   }
  // },
 
  // {
  //   id: 'law_of_large_numbers',
  //   name: 'Law of Large Numbers',
  //   category: 'Inequalities & Limit Theorems',
  //   formula: `$$\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i \\xrightarrow{\\,p\\,} \\mu \\quad\\text{as } n \\to \\infty$$`,
  //   link: { url: '/probability/large-numbers-law', text: 'Law of Large Numbers' },
  //   fields: {
  //     intuition: `As the number of independent trials grows, the sample mean converges to the true mean. Formalizes the intuition that long-run frequencies stabilize. The expected value can be understood as the long-run average.`,
  //     notation: `- $\\xrightarrow{p}$ — convergence in probability (weak LLN)\n- $\\xrightarrow{a.s.}$ — almost sure convergence (strong LLN)\n- Both require i.i.d. variables with finite mean $\\mu$`,
  //     properties: `- Weak LLN: $P(|\\bar{X}_n - \\mu| > \\varepsilon) \\to 0$ for any $\\varepsilon > 0$\n- Strong LLN: $\\bar{X}_n \\to \\mu$ with probability 1\n- Does not describe the rate of convergence (that is the CLT's role)`,
  //   }
  // },



  //Old Version
  //   {
  //     name: "Probability",
  //     formula: "A measure of the likelihood that a specific event will occur, expressed as a value between 0 and 1.",
  //     fields: [],
  //     category: "Basic Definitions"
  //   },
  //   {
  //     name: "Random Experiment",
  //     formula: "A process or action that produces uncertain outcomes, such as rolling a die or tossing a coin.",
  //     fields: [],
  //     category: "Basic Definitions"
  //   },
  //   {
  //     name: "Sample Space",
  //     formula: "The set of all possible outcomes of a random experiment.",
  //     fields: [],
  //     category: "Basic Definitions"
  //   },
  //   {
  //     name: "Event",
  //     formula: "A subset of the sample space, representing one or more outcomes of interest in a random experiment.",
  //     fields: [],
  //     category: "Basic Definitions"
  //   },
  //   {
  //     name: "Elementary Event",
  //     formula: "A single outcome from the sample space that cannot be decomposed further.",
  //     fields: [],
  //     category: "Basic Definitions"
  //   },
  //   {
  //     name: "Set Operations",
  //     formula: "Mathematical operations (like union, intersection, and complement) used to combine or relate sets.",
  //     fields: [],
  //     category: "Set Operations"
  //   },
  //   {
  //     name: "Null Set",
  //     formula: "A set with no elements, representing an impossible event in probability.",
  //     fields: [],
  //     category: "Set Operations"
  //   },
  //   {
  //     name: "Union of Sets",
  //     formula: "A set that contains all elements from either or both of the sets being combined.",
  //     fields: [],
  //     category: "Set Operations"
  //   },
  //   {
  //     name: "Intersection of Sets",
  //     formula: "A set containing only the elements that are common to all sets being compared.",
  //     fields: [],
  //     category: "Set Operations"
  //   },
  //   {
  //     name: "Disjoint Sets",
  //     formula: "Sets that have no elements in common.",
  //     fields: [],
  //     category: "Set Operations"
  //   },
  //   {
  //     name: "Venn Diagram",
  //     formula: "A graphical representation of sets and their relationships using overlapping circles.",
  //     fields: [],
  //     category: "Set Operations"
  //   },
  //   {
  //     name: "Complement of a Set",
  //     formula: "The set of elements in the sample space that are not in the given set.",
  //     fields: [],
  //     category: "Set Operations"
  //   },
  //   {
  //     name: "De Morgan's Laws",
  //     formula: "Mathematical rules relating the complement of a union or intersection of sets to the intersection or union of their complements.",
  //     fields: [],
  //     category: "Set Operations"
  //   },
  //   {
  //     name: "Relative Frequency",
  //     formula: "The ratio of the number of times an event occurs to the total number of trials or observations.",
  //     fields: [],
  //     category: "Basic Probability"
  //   },
  //   {
  //     name: "Probability Measure",
  //     formula: "A function assigning a probability value to events within a sample space while satisfying certain axioms.",
  //     fields: [],
  //     category: "Basic Probability"
  //   },
  //   {
  //     name: "Axiomatic Probability",
  //     formula: "A formal framework defining probability using a set of axioms ensuring logical consistency.",
  //     fields: [],
  //     category: "Basic Probability"
  //   },
  //   {
  //     name: "Elementary Properties of Probability",
  //     formula: "Basic rules of probability, including values between 0 and 1, and relationships between events like union and intersection.",
  //     fields: [],
  //     category: "Basic Probability"
  //   },
  //   {
  //     name: "Equally Likely Events",
  //     formula: "Events with the same probability of occurrence in an experiment.",
  //     fields: [],
  //     category: "Basic Probability"
  //   },
  //   {
  //     name: "Conditional Probability",
  //     formula: "The probability of one event occurring given that another event has occurred.",
  //     fields: [],
  //     category: "Conditional Probability"
  //   },
  //   {
  //     name: "Bayes' Rule",
  //     formula: "A formula to update the probability of an event based on new information about related events.",
  //     fields: [],
  //     category: "Conditional Probability"
  //   },
  //   {
  //     name: "Total Probability",
  //     formula: "A theorem that expresses the probability of an event as the sum of probabilities of it occurring under different conditions.",
  //     fields: [],
  //     category: "Conditional Probability"
  //   },
  //   {
  //     name: "Independent Events",
  //     formula: "Events whose occurrences are not influenced by each other.",
  //     fields: [],
  //     category: "Basic Probability"
  //   },
  //   {
  //     name: "Mutual Exclusiveness",
  //     formula: "A condition where two or more events cannot occur simultaneously.",
  //     fields: [],
  //     category: "Basic Probability"
  //   },
  //   {
  //     name: "Bonferroni's Inequality",
  //     formula: "A relationship providing bounds for the probability of the union of events.",
  //     fields: [],
  //     category: "Inequalities"
  //   },
  //   {
  //     name: "Boole's Inequality",
  //     formula: "An upper bound on the probability of the union of several events.",
  //     fields: [],
  //     category: "Inequalities"
  //   },
  //   {
  //     name: "Bernoulli Experiment",
  //     formula: "A random experiment with exactly two possible outcomes, typically labeled as success and failure.",
  //     fields: [],
  //     category: "Random Variables"
  //   },
  //   {
  //     name: "Sequence of Bernoulli Trials",
  //     formula: "Repeated independent Bernoulli experiments where the probability of success remains constant across trials.",
  //     fields: [],
  //     category: "Random Variables"
  //   },
  //   {
  //     name: "Random Variable",
  //     formula: "A function that assigns numerical values to outcomes in a sample space, enabling the study of probabilities of events.",
  //     fields: [],
  //     category: "Random Variables"
  //   },
  //   {
  //     name: "Cumulative Distribution Function",
  //     formula: "A function that gives the probability that a random variable is less than or equal to a given value.",
  //     fields: [],
  //     category: "Distribution Functions"
  //   },
  //   {
  //     name: "Probability Mass Function",
  //     formula: "A function that specifies the probability of each possible value for a discrete random variable.",
  //     fields: [],
  //     category: "Distribution Functions"
  //   },
  //   {
  //     name: "Probability Density Function",
  //     formula: "A function describing the likelihood of a continuous random variable taking on a specific value within an interval.",
  //     fields: [],
  //     category: "Distribution Functions"
  //   },
  //   {
  //     name: "Discrete Random Variable",
  //     formula: "A random variable with a countable set of possible values.",
  //     fields: [],
  //     category: "Random Variables"
  //   },
  //   {
  //     name: "Continuous Random Variable",
  //     formula: "A random variable with an uncountable set of values, typically forming an interval on the real number line.",
  //     fields: [],
  //     category: "Random Variables"
  //   },
  //   {
  //     name: "Expected Value",
  //     formula: "The weighted average of all possible values of a random variable, reflecting its long-term average.",
  //     fields: [],
  //     category: "Statistical Measures"
  //   },
  //   {
  //     name: "Variance",
  //     formula: "A measure of the spread or dispersion of a random variable, calculated as the average squared deviation from the mean.",
  //     fields: [],
  //     category: "Statistical Measures"
  //   },
  //   {
  //     name: "Standard Deviation",
  //     formula: "The square root of the variance, providing a measure of spread in the same units as the random variable.",
  //     fields: [],
  //     category: "Statistical Measures"
  //   },
  //   {
  //     name: "Bernoulli Distribution",
  //     formula: "A discrete distribution describing the outcome of a single trial with two possible outcomes, success and failure.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Binomial Distribution",
  //     formula: "A discrete distribution of the number of successes in a fixed number of independent Bernoulli trials.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Poisson Distribution",
  //     formula: "A discrete distribution modeling the number of events occurring in a fixed interval, assuming events occur independently.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Uniform Distribution",
  //     formula: "A distribution where all outcomes in a specified range are equally likely.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Exponential Distribution",
  //     formula: "A continuous distribution describing the time between events in a Poisson process, with the memoryless property.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Normal Distribution",
  //     formula: "A continuous distribution characterized by its bell-shaped curve, symmetric about the mean.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Rayleigh Distribution",
  //     formula: "A continuous distribution often used in signal processing, describing the magnitude of a vector in two dimensions.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Gamma Distribution",
  //     formula: "A continuous distribution that generalizes the exponential distribution, used in reliability and queuing models.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Markov Property",
  //     formula: "The memoryless property where the future state depends only on the current state and not on past states.",
  //     fields: [],
  //     category: "Advanced Concepts"
  //   },
  //   {
  //     name: "Central Limit Theorem",
  //     formula: "A theorem stating that the sum of many independent random variables tends toward a normal distribution, regardless of the original distributions.",
  //     fields: [],
  //     category: "Advanced Concepts"
  //   },
  //   {
  //     name: "Hypergeometric Distribution",
  //     formula: "A discrete distribution describing probabilities in draws without replacement from a finite population.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Geometric Distribution",
  //     formula: "A discrete distribution representing the number of trials needed to get the first success in repeated Bernoulli trials.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Chebyshev's Inequality",
  //     formula: "A statistical inequality providing a bound on the probability that a random variable deviates from its mean.",
  //     fields: [],
  //     category: "Inequalities"
  //   },
  //   {
  //     name: "Markov Inequality",
  //     formula: "An inequality bounding the probability of a non-negative random variable exceeding a given value.",
  //     fields: [],
  //     category: "Inequalities"
  //   },
  //   {
  //     name: "Bivariate Random Variable",
  //     formula: "A pair of random variables considered together, forming a two-dimensional vector defined on the same sample space.",
  //     fields: [],
  //     category: "Multivariate Probability"
  //   },
  //   {
  //     name: "Joint Cumulative Distribution Function",
  //     formula: "A function that gives the probability that two random variables simultaneously take on values less than or equal to specific values.",
  //     fields: [],
  //     category: "Multivariate Probability"
  //   },
  //   {
  //     name: "Marginal Distribution",
  //     formula: "The probability distribution of one random variable obtained by summing or integrating out the other variable in a joint distribution.",
  //     fields: [],
  //     category: "Multivariate Probability"
  //   },
  //   {
  //     name: "Joint Probability Mass Function",
  //     formula: "A function giving the probability that two discrete random variables simultaneously take on specific values.",
  //     fields: [],
  //     category: "Multivariate Probability"
  //   },
  //   {
  //     name: "Joint Probability Density Function",
  //     formula: "A function representing the probability density of two continuous random variables taking on specific values.",
  //     fields: [],
  //     category: "Multivariate Probability"
  //   },
  //   {
  //     name: "Covariance",
  //     formula: "A measure of how two random variables change together, indicating the direction of their relationship.",
  //     fields: [],
  //     category: "Statistical Measures"
  //   },
  //   {
  //     name: "Correlation Coefficient",
  //     formula: "A normalized measure of the linear relationship between two variables, ranging from -1 to 1.",
  //     fields: [],
  //     category: "Statistical Measures"
  //   },
  //   {
  //     name: "Conditional Probability Mass Function",
  //     formula: "The probability distribution of a discrete random variable given that another discrete random variable takes a specific value.",
  //     fields: [],
  //     category: "Conditional Probability"
  //   },
  //   {
  //     name: "Conditional Probability Density Function",
  //     formula: "The probability density of a continuous random variable given that another continuous random variable takes a specific value.",
  //     fields: [],
  //     category: "Conditional Probability"
  //   },
  //   {
  //     name: "Conditional Expectation",
  //     formula: "The expected value of one random variable given the value of another random variable.",
  //     fields: [],
  //     category: "Statistical Measures"
  //   },
  //   {
  //     name: "Conditional Variance",
  //     formula: "The variance of a random variable given that another random variable takes on a specific value.",
  //     fields: [],
  //     category: "Statistical Measures"
  //   },
  //   {
  //     name: "N-Variate Random Variables",
  //     formula: "A set of multiple random variables considered as a vector, defining a multi-dimensional space.",
  //     fields: [],
  //     category: "Multivariate Probability"
  //   },
  //   {
  //     name: "Multinomial Distribution",
  //     formula: "A generalization of the binomial distribution for more than two possible outcomes in each trial.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Bivariate Normal Distribution",
  //     formula: "A distribution where two continuous random variables are jointly normally distributed.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "N-Variate Normal Distribution",
  //     formula: "A generalization of the bivariate normal distribution to more than two dimensions.",
  //     fields: [],
  //     category: "Probability Distributions"
  //   },
  //   {
  //     name: "Independent Random Variables",
  //     formula: "Random variables whose outcomes do not influence each other's probabilities.",
  //     fields: [],
  //     category: "Random Variables"
  //   },
  //   {
  //     name: "Orthogonal Random Variables",
  //     formula: "Random variables with zero covariance, indicating no linear relationship.",
  //     fields: [],
  //     category: "Random Variables"
  //   },
  //   {
  //     name: "Uncorrelated Random Variables",
  //     formula: "Random variables with zero correlation coefficient, implying no linear relationship.",
  //     fields: [],
  //     category: "Random Variables"
  //   },
  //   {
  //     name: "Moment of a Random Variable",
  //     formula: "A quantitative measure of the shape of the variable's probability distribution, derived as the expected value of its powers.",
  //     fields: [],
  //     category: "Statistical Measures"
  //   },
  //   {
  //     name: "Central Limit Theorem for N-Variate",
  //     formula: "A theorem stating that the sum of multiple independent random variables approximates a multivariate normal distribution under certain conditions.",
  //     fields: [],
  //     category: "Advanced Concepts"
  //   },
  //   {
  //     name: "Function of a Random Variable",
  //     formula: "A rule that assigns a new random variable based on a transformation of an existing one, typically denoted as Y=g(X).",
  //     fields: [],
  //     category: "Advanced Concepts"
  //   },
  //   {
  //     name: "Probability Density Function of a Transformed Variable",
  //     formula: "The function that describes the distribution of probabilities for a random variable obtained through transformation.",
  //     fields: [],
  //     category: "Distribution Functions"
  //   },
  //   {
  //     name: "Moment Generating Function",
  //     formula: "A function used to describe all moments of a random variable, defined as the expected value of e^(tX) for a real parameter t.",
  //     fields: [],
  //     category: "Advanced Concepts"
  //   },
  //   {
  //     name: "Characteristic Function",
  //     formula: "The Fourier transform of a probability distribution, useful for studying the properties and behaviors of random variables.",
  //     fields: [],
  //     category: "Advanced Concepts"
  // },
  // {
  //   name: "Weak Law of Large Numbers",
  //   formula: "A theorem stating that the sample mean of independent, identically distributed random variables converges in probability to their true mean as the sample size increases.",
  //   fields: [],
  //   category: "Advanced Concepts"
  // },
  // {
  //   name: "Strong Law of Large Numbers",
  //   formula: "A theorem that states the sample mean almost surely converges to the true mean as the sample size grows infinitely large.",
  //   fields: [],
  //   category: "Advanced Concepts"
  // },
  // {
  //   name: "Central Limit Theorem",
  //   formula: "A fundamental result in probability theory stating that the sum of a large number of independent, identically distributed random variables will be approximately normally distributed.",
  //   fields: [],
  //   category: "Advanced Concepts"
  // }
];

export default probabilityTermsList;