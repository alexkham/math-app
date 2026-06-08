// const probabilityTermsList = [

//   //New Take 

// {
//     id: 'negative_binomial_distribution',
//     name: 'Negative Binomial Distribution',
//     category: 'Discrete Distributions',
//     formula: `A discrete distribution counting the number of trials needed to achieve a fixed number $r$ of successes in a sequence of independent Bernoulli trials with success probability $p$.`,
//     link: { url: '/probability/distributions/discrete/negative-binomial', text: 'Negative Binomial Distribution' },
//     fields: {
//       intuition: `The negative binomial distribution answers "how many trials until $r$ successes?" It generalizes the geometric distribution, which is the special case $r = 1$.`,
//       notation: `$X \\sim \\text{NegBin}(r, p)$`,
//       'related concepts': `- [Geometric Distribution](!/probability/distributions/discrete/geometric)
// - [Binomial Distribution](!/probability/distributions/discrete/binomial)
// - [Sequence of Bernoulli Trials](!/probability/distributions/discrete#bernoulli)`
//     }
//   },
//   // ============================================================
//   // CATEGORY: Foundations
//   // ============================================================
 
//   {
//     id: 'probability',
//     name: 'Probability',
//     category: 'Foundations',
//     formula: `A function $P$ that assigns to each event $A$ in a sample space a real number $P(A) \\in [0, 1]$ satisfying the probability axioms.`,
//     link: { url: '/probability/axioms', text: 'Probability Axioms' },
//     fields: {
//       intuition: `Probability quantifies how likely an event is to occur. A value of 0 means impossible, 1 means certain, and values in between reflect degrees of likelihood.`,
//       notation: `$P(A)$ — probability of event $A$
// $P(\\Omega) = 1$ — certainty
// $P(\\emptyset) = 0$ — impossibility`,
//       'related concepts': `- [Sample Space](!/probability/sample-space)
// - [Event](!/probability/events)
// - [Probability Measure](!/probability/axioms#axioms)
// - [Conditional Probability](!/probability/conditional-probability)`
//     }
//   },
 
//   {
//     id: 'random_experiment',
//     name: 'Random Experiment',
//     category: 'Foundations',
//     formula: `A process or action whose outcome cannot be predicted with certainty before it is performed.`,
//     link: { url: '/probability/sample-space', text: 'Sample Space' },
//     fields: {
//       intuition: `A random experiment is any procedure that produces an unpredictable result. Rolling a die, drawing a card, or measuring a physical quantity are all random experiments.`,
//       'examples': `
// • Rolling a six-sided die
// • Tossing a coin three times
// • Measuring the time until a device fails`,
//       'related concepts': `- [Sample Space](!/probability/sample-space)
// - [Outcome](!/probability/sample-space#definition)
// - [Event](!/probability/events)

// `
//     }
//   },
 
//   {
//     id: 'sample_space',
//     name: 'Sample Space',
//     category: 'Foundations',
//     formula: `$\\Omega = \\{\\omega_1, \\omega_2, \\ldots\\}$ — the set of all possible outcomes of a random experiment.`,
//     link: { url: '/probability/sample-space', text: 'Sample Space' },
//     fields: {
//       intuition: `The sample space is the complete list of everything that can happen. Every probability question begins by identifying this set, because events and probabilities are defined relative to it.`,
//       notation: `$\\Omega$ or $S$ — the sample space
// $\\omega$ — a single outcome (element of $\\Omega$)`,
//       'related concepts': `- [Event](!/probability/events)
// - [Probability Measure](!/probability/axioms#axioms)
// - [Random Variable](!/probability/random-variables)`
//     }
//   },
 
//   {
//     id: 'event',
//     name: 'Event',
//     category: 'Foundations',
//     formula: `$A \\subseteq \\Omega$ — a subset of the sample space.`,
//     link: { url: '/probability/events', text: 'Events' },
//     fields: {
//       intuition: `An event is a collection of outcomes we are interested in. It can contain one outcome, several outcomes, or even all outcomes. Probabilities are assigned to events, not to individual outcomes directly.`,
//       examples: `- Rolling an even number: $A = \\{2, 4, 6\\}$
// - Getting at least one head in two coin tosses: $A = \\{HH, HT, TH\\}$`,
//       'related concepts': `- [Sample Space](!/probability/sample-space)
// - [Complement](!/probability/sets#operations)
// - [Mutually Exclusive Events](!/probability/events#relations)
// - [Independence](!/probability/independence)`
//     }
//   },
 
//   {
//     id: 'elementary_event',
//     name: 'Elementary Event',
//     category: 'Foundations',
//     formula: `An event consisting of exactly one outcome: $\\{\\omega\\}$ where $\\omega \\in \\Omega$.`,
//     link: { url: '/probability/events', text: 'Events' },
//     fields: {
//       intuition: `An elementary event is the simplest possible event — a single outcome from the sample space that cannot be broken down further.`,
//       'related concepts': `- [Event](!/probability/events)
// - [Sample Space](!/probability/sample-space)
// - [Probability Mass Function](!/probability/probability-function#pmf)`
//     }
//   },
 
//   {
//     id: 'relative_frequency',
//     name: 'Relative Frequency',
//     category: 'Foundations',
//     formula: `$f_n(A) = \\frac{\\text{number of times } A \\text{ occurs}}{n}$ where $n$ is the total number of trials.`,
//     link: { url: '/probability/axioms', text: 'Probability Axioms' },
//     fields: {
//       intuition: `Relative frequency is the proportion of times an event occurs in repeated experiments. As the number of trials grows, relative frequency tends to stabilize near the true probability of the event.`,
//       'related concepts': `- [Probability](!/probability/axioms)
// - [Law of Large Numbers](!/probability/large-numbers-law)`
//     }
//   },
 
//   {
//     id: 'probability_measure',
//     name: 'Probability Measure',
//     category: 'Foundations',
//     formula: `A function $P: \\mathcal{F} \\to [0,1]$ defined on a collection of events, satisfying non-negativity, normalization ($P(\\Omega) = 1$), and countable additivity for disjoint events.`,
//     link: { url: '/probability/axioms', text: 'Probability Axioms' },
//     fields: {
//       intuition: `A probability measure is the formal rule that assigns a number between 0 and 1 to every event in a way that is internally consistent. It is the mathematical object that makes probability rigorous.`,
//       properties: `- $P(A) \\geq 0$ for all events $A$
// - $P(\\Omega) = 1$
// - For disjoint $A_1, A_2, \\ldots$: $P(\\bigcup A_i) = \\sum P(A_i)$`,
//       'related concepts': `- [Probability Axioms](!/probability/axioms)
// - [Sample Space](!/probability/sample-space)
// - [Event](!/probability/events)`
//     }
//   },
 
//   {
//     id: 'equally_likely_events',
//     name: 'Equally Likely Events',
//     category: 'Foundations',
//     formula: `Events $A_1, A_2, \\ldots, A_n$ are equally likely when $P(A_1) = P(A_2) = \\cdots = P(A_n)$.`,
//     link: { url: '/probability/events', text: 'Events' },
//     fields: {
//       intuition: `When all outcomes in a finite sample space have the same probability, they are equally likely. In this case probability reduces to counting: $P(A) = |A| / |\\Omega|$.`,
//       examples: `- A fair die: each face has probability $1/6$
// - A fair coin: heads and tails each have probability $1/2$`,
//       'related concepts': `- [Sample Space](!/probability/sample-space)
// - [Combinatorics](!/probability/combinatorics)
// - [Discrete Uniform Distribution](!/probability/distributions/discrete/uniform)`
//     }
//   },
 
//   // ============================================================
//   // CATEGORY: Conditional Probability & Independence
//   // ============================================================
 
//   {
//     id: 'conditional_probability',
//     name: 'Conditional Probability',
//     category: 'Conditional Probability & Independence',
//     formula: `$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$, defined when $P(B) > 0$.`,
//     link: { url: '/probability/conditional-probability', text: 'Conditional Probability' },
//     fields: {
//       intuition: `Conditional probability measures the likelihood of an event given that another event has already occurred. It restricts attention to a smaller part of the sample space.`,
//       notation: `$P(A \\mid B)$ — probability of $A$ given $B$`,
//       'related concepts': `- [Independence](!/probability/independence)
// - [Bayes' Theorem](!/probability/bayes-theorem)
// - [Total Probability](!/probability/total-probability)
// - [Joint Probability](!/probability/joint-probability)`
//     }
//   },
 
//   {
//     id: 'independent_events',
//     name: 'Independent Events',
//     category: 'Conditional Probability & Independence',
//     formula: `Events $A$ and $B$ are independent if and only if $P(A \\cap B) = P(A) \\cdot P(B)$.`,
//     link: { url: '/probability/independence', text: 'Independence' },
//     fields: {
//       intuition: `Two events are independent when the occurrence of one provides no information about the other. Knowing that $B$ happened does not change the probability of $A$.`,
//       'common errors': `Confusing independence with mutual exclusiveness. Disjoint events with positive probability are never independent — if one occurs, the other cannot.`,
//       'related concepts': `- [Conditional Probability](!/probability/conditional-probability)
// - [Mutual Exclusiveness](!/probability/events#relations)
// - [Independent Random Variables](!/probability/independence#definition)`
//     }
//   },
 
//   {
//     id: 'mutual_exclusiveness',
//     name: 'Mutual Exclusiveness',
//     category: 'Conditional Probability & Independence',
//     formula: `Events $A$ and $B$ are mutually exclusive if $A \\cap B = \\emptyset$.`,
//     link: { url: '/probability/events', text: 'Events' },
//     fields: {
//       intuition: `Mutually exclusive events cannot happen at the same time. If one occurs, the other is automatically ruled out.`,
//       properties: `- $P(A \\cap B) = 0$
// - $P(A \\cup B) = P(A) + P(B)$`,
//       'related concepts': `- [Event](!/probability/events)
// - [Addition Rule](!/probability/rules#additive)
// - [Independence](!/probability/independence)`
//     }
//   },
 
//   // ============================================================
//   // CATEGORY: Random Variables
//   // ============================================================
 
//   {
//     id: 'bernoulli_experiment',
//     name: 'Bernoulli Experiment',
//     category: 'Random Variables',
//     formula: `A random experiment with exactly two possible outcomes, conventionally called success ($S$) and failure ($F$).`,
//     link: { url: '/probability/distributions/discrete', text: 'Discrete Distributions' },
//     fields: {
//       intuition: `A Bernoulli experiment is the simplest random experiment: something either happens or it does not. It is the building block for more complex models like the binomial distribution.`,
//       examples: `- A coin toss (heads or tails)
// - A quality inspection (pass or fail)
// - A medical test (positive or negative)`,
//       'related concepts': `- [Bernoulli Distribution](!/probability/distributions/discrete#bernoulli)
// - [Binomial Distribution](!/probability/distributions/discrete/binomial)
// - [Sequence of Bernoulli Trials](!/probability/distributions/discrete#bernoulli)`
//     }
//   },
 
//   {
//     id: 'sequence_of_bernoulli_trials',
//     name: 'Sequence of Bernoulli Trials',
//     category: 'Random Variables',
//     formula: `A sequence of independent Bernoulli experiments, each with the same success probability $p$.`,
//     link: { url: '/probability/distributions/discrete', text: 'Discrete Distributions' },
//     fields: {
//       intuition: `Repeating the same yes/no experiment independently under identical conditions. The number of successes, the trial of first success, and similar quantities each give rise to a named distribution.`,
//       'related concepts': `- [Bernoulli Experiment](!/probability/distributions/discrete#bernoulli)
// - [Binomial Distribution](!/probability/distributions/discrete/binomial)
// - [Geometric Distribution](!/probability/distributions/discrete/geometric)
// - [Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)`
//     }
//   },
 
//   {
//     id: 'random_variable',
//     name: 'Random Variable',
//     category: 'Random Variables',
//     formula: `$X: \\Omega \\to \\mathbb{R}$ — a function that assigns a real number to each outcome in the sample space.`,
//     link: { url: '/probability/random-variables', text: 'Random Variables' },
//     fields: {
//       intuition: `A random variable translates outcomes of a random experiment into numbers. This numerical representation makes it possible to compute averages, measure spread, and define distributions.`,
//       notation: `$X, Y, Z$ — random variables (capital letters)
// $x, y, z$ — specific values they take (lowercase)`,
//       'related concepts': `- [Sample Space](!/probability/sample-space)
// - [Probability Function](!/probability/probability-function)
// - [Expected Value](!/probability/expected-value)
// - [CDF](!/probability/cdf)`
//     }
//   },
 
//   {
//     id: 'discrete_random_variable',
//     name: 'Discrete Random Variable',
//     category: 'Random Variables',
//     formula: `A random variable whose set of possible values is finite or countably infinite.`,
//     link: { url: '/probability/random-variables', text: 'Random Variables' },
//     fields: {
//       intuition: `A discrete random variable takes on isolated, separated values that can be listed — even if the list is infinite. Its probability distribution is described by a probability mass function.`,
//       examples: `- Number of heads in 10 coin tosses
// - Number of customers arriving per hour
// - Number of defective items in a batch`,
//       'related concepts': `- [PMF](!/probability/probability-function#pmf)
// - [Discrete Distributions](!/probability/distributions/discrete)
// - [Continuous Random Variable](!/probability/random-variables#types)`
//     }
//   },
 
//   {
//     id: 'continuous_random_variable',
//     name: 'Continuous Random Variable',
//     category: 'Random Variables',
//     formula: `A random variable whose set of possible values forms an interval or union of intervals on the real line.`,
//     link: { url: '/probability/random-variables', text: 'Random Variables' },
//     fields: {
//       intuition: `A continuous random variable can take any value within a range. Probability is spread smoothly rather than concentrated at individual points, and is described by a probability density function.`,
//       examples: `       - Time until a lightbulb burns out
// - Height of a randomly selected person
// - Temperature at a given location`,
//       'related concepts': `- [PDF](!/probability/probability-function#pdf)
// - [Continuous Distributions](!/probability/distributions/continuous)
// - [Discrete Random Variable](!/probability/random-variables#types)`
//     }
//   },
 
//   // ============================================================
//   // CATEGORY: Distribution Functions
//   // ============================================================
 
//   {
//     id: 'cumulative_distribution_function',
//     name: 'Cumulative Distribution Function',
//     category: 'Distribution Functions',
//     formula: `$F_X(x) = P(X \\le x)$ for all $x \\in \\mathbb{R}$.`,
//     link: { url: '/probability/cdf', text: 'Cumulative Distribution Function' },
//     fields: {
//       intuition: `The CDF tracks how much probability has accumulated up to each value. It answers "how likely is the random variable to be at most $x$?" and works for any type of distribution.`,
//       properties: `- $0 \\le F_X(x) \\le 1$
// - Non-decreasing
// - Right-continuous
// - $\\lim_{x \\to -\\infty} F_X(x) = 0$, $\\lim_{x \\to +\\infty} F_X(x) = 1$`,
//       'related concepts': `- [PMF](!/probability/probability-function#pmf)
// - [PDF](!/probability/probability-function#pdf)
// - [Random Variable](!/probability/random-variables)`
//     }
//   },
 
//   {
//     id: 'probability_mass_function',
//     name: 'Probability Mass Function',
//     category: 'Distribution Functions',
//     formula: `$p_X(x) = P(X = x)$ — the probability that a discrete random variable $X$ takes the value $x$.`,
//     link: { url: '/probability/probability-function', text: 'Probability Function' },
//     fields: {
//       intuition: `The PMF assigns a probability to each individual value a discrete random variable can take. All values are non-negative and their sum equals 1.`,
//       properties: `- $p_X(x) \\ge 0$ for all $x$
// - $\\sum_x p_X(x) = 1$`,
//       'related concepts': `- [Discrete Random Variable](!/probability/random-variables#types)
// - [CDF](!/probability/cdf)
// - [PDF](!/probability/probability-function#pdf)`
//     }
//   },
 
//   {
//     id: 'probability_density_function',
//     name: 'Probability Density Function',
//     category: 'Distribution Functions',
//     formula: `A function $f_X(x) \\ge 0$ such that $P(a \\le X \\le b) = \\int_a^b f_X(x)\\,dx$ and $\\int_{-\\infty}^{\\infty} f_X(x)\\,dx = 1$.`,
//     link: { url: '/probability/probability-function', text: 'Probability Function' },
//     fields: {
//       intuition: `The PDF describes how densely probability is spread across values of a continuous random variable. Its value at a point is not a probability — probabilities come from integrating the PDF over intervals.`,
//       'common errors': `Interpreting $f_X(x)$ as a probability. The PDF can exceed 1 at individual points; only its integral over an interval gives a probability.`,
//       'related concepts': `- [Continuous Random Variable](!/probability/random-variables#types)
// - [CDF](!/probability/cdf)
// - [PMF](!/probability/probability-function#pmf)`
//     }
//   },
 
//   // ============================================================
//   // CATEGORY: Measures of a Distribution
//   // ============================================================
 
//   {
//     id: 'expected_value',
//     name: 'Expected Value',
//     category: 'Measures',
//     formula: `$E[X] = \\sum_x x \\cdot p_X(x)$ (discrete) or $E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f_X(x)\\,dx$ (continuous).`,
//     link: { url: '/probability/expected-value', text: 'Expected Value' },
//     fields: {
//       intuition: `The expected value is the long-run average of a random variable over many repetitions. It represents the center of mass of the distribution.`,
//       properties: `- Linearity: $E[aX + bY] = aE[X] + bE[Y]$
// - $E[c] = c$ for any constant $c$`,
//       'related concepts': `- [Variance](!/probability/variance)
// - [Random Variable](!/probability/random-variables)
// - [Indicator Random Variables](!/probability/indicators)`
//     }
//   },
 
//   {
//     id: 'variance',
//     name: 'Variance',
//     category: 'Measures',
//     formula: `$\\operatorname{Var}(X) = E[(X - \\mu)^2]$ where $\\mu = E[X]$.`,
//     link: { url: '/probability/variance', text: 'Variance' },
//     fields: {
//       intuition: `Variance measures how spread out a random variable's values are around its expected value. A larger variance means outcomes are more dispersed.`,
//       properties: `- $\\operatorname{Var}(X) \\ge 0$
// - $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$
// - $\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X)$`,
//       'related concepts': `- [Expected Value](!/probability/expected-value)
// - [Standard Deviation](!/probability/variance#sd)
// - [Covariance](!/probability/covariance)`
//     }
//   },
 
//   {
//     id: 'standard_deviation',
//     name: 'Standard Deviation',
//     category: 'Measures',
//     formula: `$\\sigma_X = \\sqrt{\\operatorname{Var}(X)}$`,
//     link: { url: '/probability/variance', text: 'Variance' },
//     fields: {
//       intuition: `Standard deviation is the square root of variance. It measures spread in the same units as the random variable, making it easier to interpret than variance.`,
//       'related concepts': `- [Variance](!/probability/variance)
// - [Expected Value](!/probability/expected-value)
// - [Chebyshev's Inequality](!/probability/inequalities/chebyshev)`
//     }
//   },
 
//   {
//     id: 'covariance',
//     name: 'Covariance',
//     category: 'Measures',
//     formula: `$\\operatorname{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])]$`,
//     link: { url: '/probability/covariance', text: 'Covariance' },
//     fields: {
//       intuition: `Covariance measures how two random variables move together. Positive covariance means they tend to increase together; negative means one tends to increase when the other decreases.`,
//       properties: `- $\\operatorname{Cov}(X, Y) = E[XY] - E[X]E[Y]$
// - $\\operatorname{Cov}(X, X) = \\operatorname{Var}(X)$
// - If $X, Y$ are independent, $\\operatorname{Cov}(X, Y) = 0$`,
//       'related concepts': `- [Variance](!/probability/variance)
// - [Correlation Coefficient](!/probability/covariance#8)
// - [Independence](!/probability/independence)`
//     }
//   },
 
//   {
//     id: 'correlation_coefficient',
//     name: 'Correlation Coefficient',
//     category: 'Measures',
//     formula: `$\\rho_{XY} = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X \\cdot \\sigma_Y}$, where $\\sigma_X, \\sigma_Y > 0$.`,
//     link: { url: '/probability/covariance', text: 'Covariance' },
//     fields: {
//       intuition: `The correlation coefficient normalizes covariance to a scale between $-1$ and $1$. It measures the strength and direction of the linear relationship between two random variables.`,
//       properties: `- $-1 \\le \\rho_{XY} \\le 1$
// - $|\\rho_{XY}| = 1$ iff $Y = aX + b$ for constants $a \\ne 0$, $b$
// - $\\rho_{XY} = 0$ means no linear relationship`,
//       'related concepts': `- [Covariance](!/probability/covariance)
// - [Independence](!/probability/independence)
// - [Uncorrelated Random Variables](!/probability/covariance#4)`
//     }
//   },
 
//   {
//     id: 'conditional_expectation',
//     name: 'Conditional Expectation',
//     category: 'Measures',
//     formula: `$E[X \\mid Y = y] = \\sum_x x \\cdot P(X = x \\mid Y = y)$ (discrete) or $E[X \\mid Y = y] = \\int x \\cdot f_{X|Y}(x \\mid y)\\,dx$ (continuous).`,
//     link: { url: '/probability/expected-value', text: 'Expected Value' },
//     fields: {
//       intuition: `Conditional expectation is the expected value of one random variable given that another takes a specific value. It adjusts the average to account for known information.`,
//       'related concepts': `- [Expected Value](!/probability/expected-value)
// - [Conditional Probability](!/probability/conditional-probability)
// - [Conditional Variance](!/probability/variance#properties)`
//     }
//   },
 
//   {
//     id: 'conditional_variance',
//     name: 'Conditional Variance',
//     category: 'Measures',
//     formula: `$\\operatorname{Var}(X \\mid Y = y) = E[(X - E[X \\mid Y = y])^2 \\mid Y = y]$`,
//     link: { url: '/probability/variance', text: 'Variance' },
//     fields: {
//       intuition: `Conditional variance measures the spread of one random variable around its conditional mean, given a specific value of another variable.`,
//       'related concepts': `- [Variance](!/probability/variance)
// - [Conditional Expectation](!/probability/expected-value#function)
// - [Conditional Probability](!/probability/conditional-probability)`
//     }
//   },
 
//   {
//     id: 'moment',
//     name: 'Moment of a Random Variable',
//     category: 'Measures',
//     formula: `The $k$-th moment of $X$ about the origin is $E[X^k]$. The $k$-th central moment is $E[(X - \\mu)^k]$.`,
//     link: { url: '/probability/expected-value', text: 'Expected Value' },
//     fields: {
//       intuition: `Moments are numerical summaries of a distribution's shape. The first moment is the mean, the second central moment is the variance, and higher moments capture skewness and tail behavior.`,
//       'related concepts': `- [Expected Value](!/probability/expected-value)
// - [Variance](!/probability/variance)
// - [Moment Generating Function](!/probability/distributions/discrete/binomial#9)`
//     }
//   },
 
//   // ============================================================
//   // CATEGORY: Discrete Distributions
//   // ============================================================
 
//   {
//     id: 'bernoulli_distribution',
//     name: 'Bernoulli Distribution',
//     category: 'Discrete Distributions',
//     formula: `A discrete distribution for a single trial with two outcomes: $P(X = 1) = p$ and $P(X = 0) = 1 - p$.`,
//     link: { url: '/probability/distributions/discrete', text: 'Discrete Distributions' },
//     fields: {
//       intuition: `The Bernoulli distribution models a single yes/no trial. It is the simplest discrete distribution and the building block for the binomial, geometric, and negative binomial distributions.`,
//       properties: `- $E[X] = p$
// - $\\operatorname{Var}(X) = p(1 - p)$`,
//       'related concepts': `- [Bernoulli Experiment](!/probability/distributions/discrete#bernoulli)
// - [Binomial Distribution](!/probability/distributions/discrete/binomial)
// - [Geometric Distribution](!/probability/distributions/discrete/geometric)`
//     }
//   },
 
//   {
//     id: 'binomial_distribution',
//     name: 'Binomial Distribution',
//     category: 'Discrete Distributions',
//     formula: `A discrete distribution counting the number of successes in $n$ independent Bernoulli trials, each with success probability $p$.`,
//     link: { url: '/probability/distributions/discrete/binomial', text: 'Binomial Distribution' },
//     fields: {
//       intuition: `The binomial distribution answers "how many successes?" in a fixed number of independent trials. It requires a fixed number of trials, constant probability, and independence.`,
//       notation: `$X \\sim \\text{Bin}(n, p)$`,
//       'related concepts': `- [Bernoulli Distribution](!/probability/distributions/discrete#bernoulli)
// - [Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)
// - [Poisson Distribution](!/probability/distributions/discrete/poisson)`
//     }
//   },
 
//   {
//     id: 'poisson_distribution',
//     name: 'Poisson Distribution',
//     category: 'Discrete Distributions',
//     formula: `A discrete distribution modelling the number of events occurring in a fixed interval, where events happen independently at a constant average rate $\\lambda$.`,
//     link: { url: '/probability/distributions/discrete/poisson', text: 'Poisson Distribution' },
//     fields: {
//       intuition: `The Poisson distribution counts rare events in a fixed window of time or space. It applies when events occur independently and the average rate is known.`,
//       notation: `$X \\sim \\text{Poisson}(\\lambda)$`,
//       'related concepts': `- [Binomial Distribution](!/probability/distributions/discrete/binomial)
// - [Exponential Distribution](!/probability/distributions/continuous/exponential)
// - [Expected Value](!/probability/expected-value)`
//     }
//   },
 
//   {
//     id: 'uniform_distribution_discrete',
//     name: 'Discrete Uniform Distribution',
//     category: 'Discrete Distributions',
//     formula: `A discrete distribution where each of $n$ possible values has equal probability $1/n$.`,
//     link: { url: '/probability/distributions/discrete/uniform', text: 'Discrete Uniform Distribution' },
//     fields: {
//       intuition: `The discrete uniform distribution applies when every outcome is equally likely — the probability counterpart of "fair." A fair die is the classic example.`,
//       notation: `$X \\sim \\text{Uniform}\\{a, a+1, \\ldots, b\\}$`,
//       'related concepts': `- [Equally Likely Events](!/probability/events#types)
// - [Sample Space](!/probability/sample-space)
// - [Continuous Uniform Distribution](!/probability/distributions/continuous/uniform)`
//     }
//   },
 
//   {
//     id: 'exponential_distribution',
//     name: 'Exponential Distribution',
//     category: 'Continuous Distributions',
//     formula: `A continuous distribution describing the time between events in a process where events occur independently at a constant rate $\\lambda$.`,
//     link: { url: '/probability/distributions/continuous/exponential', text: 'Exponential Distribution' },
//     fields: {
//       intuition: `The exponential distribution models waiting time — how long until the next event. Its defining feature is the memoryless property: the probability of waiting longer does not depend on how long you have already waited.`,
//       notation: `$X \\sim \\text{Exp}(\\lambda)$`,
//       'related concepts': `- [Poisson Distribution](!/probability/distributions/discrete/poisson)
// - [Normal Distribution](!/probability/distributions/continuous/normal)
// - [Continuous Uniform Distribution](!/probability/distributions/continuous/uniform)`
//     }
//   },
 
//   {
//     id: 'normal_distribution',
//     name: 'Normal Distribution',
//     category: 'Continuous Distributions',
//     formula: `A continuous distribution characterized by a symmetric, bell-shaped curve, fully determined by its mean $\\mu$ and variance $\\sigma^2$.`,
//     link: { url: '/probability/distributions/continuous/normal', text: 'Normal Distribution' },
//     fields: {
//       intuition: `The normal distribution appears when many small independent effects combine. Its bell curve is symmetric about the mean, with probability decreasing smoothly in both directions.`,
//       notation: `$X \\sim N(\\mu, \\sigma^2)$
// Standard normal: $Z \\sim N(0, 1)$`,
//       'related concepts': `- [Central Limit Theorem](!/probability/central-limit-theorem)
// - [Standard Deviation](!/probability/variance#sd)
// - [Exponential Distribution](!/probability/distributions/continuous/exponential)`
//     }
//   },
 
//   {
//     id: 'geometric_distribution',
//     name: 'Geometric Distribution',
//     category: 'Discrete Distributions',
//     formula: `A discrete distribution counting the number of trials needed to obtain the first success in a sequence of independent Bernoulli trials with success probability $p$.`,
//     link: { url: '/probability/distributions/discrete/geometric', text: 'Geometric Distribution' },
//     fields: {
//       intuition: `The geometric distribution answers "how long until the first success?" It is the discrete analogue of the exponential distribution and shares its memoryless property.`,
//       notation: `$X \\sim \\text{Geom}(p)$`,
//       'related concepts': `- [Bernoulli Experiment](!/probability/distributions/discrete#bernoulli)
// - [Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)
// - [Exponential Distribution](!/probability/distributions/continuous/exponential)`
//     }
//   },
 
//   {
//     id: 'hypergeometric_distribution',
//     name: 'Hypergeometric Distribution',
//     category: 'Discrete Distributions',
//     formula: `A discrete distribution describing the number of successes in $n$ draws without replacement from a finite population containing $K$ successes and $N - K$ failures.`,
//     link: { url: '/probability/distributions/discrete/hypergeometric', text: 'Hypergeometric Distribution' },
//     fields: {
//       intuition: `The hypergeometric distribution is used when sampling without replacement. Unlike the binomial, the probability of success changes from draw to draw because the population is finite.`,
//       notation: `$X \\sim \\text{Hypergeometric}(N, K, n)$`,
//       'related concepts': `- [Binomial Distribution](!/probability/distributions/discrete/binomial)
// - [Combinatorics](!/probability/combinatorics)
// - [Discrete Distributions](!/probability/distributions/discrete)`
//     }
//   },
 
//   // ============================================================
//   // MISSING: Rayleigh, Gamma, Multinomial, Bivariate Normal,
//   //          N-Variate Normal — no content pages exist
//   // ============================================================
 
//   // {
//   //   id: 'rayleigh_distribution',
//   //   name: 'Rayleigh Distribution',
//   //   category: 'Continuous Distributions',
//   //   formula: `A continuous distribution describing the magnitude of a two-dimensional vector whose components are independent, identically distributed normal random variables with zero mean.`,
//   //   link: { url: '', text: '' },
//   //   fields: {
//   //     intuition: `The Rayleigh distribution models the distance from the origin when two perpendicular components each follow a normal distribution. It appears in signal processing and wind speed modelling.`,
//   //     notation: `$X \\sim \\text{Rayleigh}(\\sigma)$`,
//   //     'related concepts': `- Normal Distribution
//   //     - Exponential Distribution
//   //     - Chi-Squared Distribution`
//   //   }
//   // },
 
//   // {
//   //   id: 'gamma_distribution',
//   //   name: 'Gamma Distribution',
//   //   category: 'Continuous Distributions',
//   //   formula: `A continuous distribution generalizing the exponential distribution, describing the waiting time until $k$ events occur in a Poisson process.`,
//   //   link: { url: '', text: '' },
//   //   fields: {
//   //     intuition: `The gamma distribution extends the exponential from waiting for one event to waiting for several. With shape parameter $k$ and rate $\\lambda$, it models cumulative waiting times.`,
//   //     notation: `$X \\sim \\text{Gamma}(k, \\lambda)$`,
//   //     'related concepts': `- Exponential Distribution
//   //     - Poisson Distribution
//   //     - Chi-Squared Distribution`
//   //   }
//   // },
 
//   // {
//   //   id: 'multinomial_distribution',
//   //   name: 'Multinomial Distribution',
//   //   category: 'Discrete Distributions',
//   //   formula: `A discrete distribution generalizing the binomial to experiments with more than two possible outcomes per trial.`,
//   //   link: { url: '', text: '' },
//   //   fields: {
//   //     intuition: `The multinomial distribution counts how many times each of $k$ categories appears in $n$ independent trials. The binomial is the special case where $k = 2$.`,
//   //     notation: `$(X_1, \\ldots, X_k) \\sim \\text{Multinomial}(n, p_1, \\ldots, p_k)$`,
//   //     'related concepts': `- Binomial Distribution
//   //     - Categorical Distribution`
//   //   }
//   // },
 
//   // {
//   //   id: 'bivariate_normal_distribution',
//   //   name: 'Bivariate Normal Distribution',
//   //   category: 'Continuous Distributions',
//   //   formula: `A joint distribution of two continuous random variables where both marginals are normal and the dependence structure is fully captured by the correlation coefficient.`,
//   //   link: { url: '', text: '' },
//   //   fields: {
//   //     intuition: `The bivariate normal describes two variables that are jointly normally distributed. The shape of the joint density is an ellipse whose orientation and eccentricity are determined by the correlation.`,
//   //     'related concepts': `- Normal Distribution
//   //     - Correlation Coefficient
//   //     - Joint PDF`
//   //   }
//   // },
 
//   // {
//   //   id: 'n_variate_normal_distribution',
//   //   name: 'N-Variate Normal Distribution',
//   //   category: 'Continuous Distributions',
//   //   formula: `A joint distribution of $n$ random variables fully characterized by a mean vector $\\boldsymbol{\\mu}$ and a covariance matrix $\\boldsymbol{\\Sigma}$.`,
//   //   link: { url: '', text: '' },
//   //   fields: {
//   //     intuition: `The multivariate normal extends the normal distribution to any number of dimensions. All marginals and conditionals are also normal, and the covariance matrix encodes all pairwise relationships.`,
//   //     'related concepts': `- Bivariate Normal Distribution
//   //     - Covariance
//   //     - Normal Distribution`
//   //   }
//   // },
 
//   // ============================================================
//   // CATEGORY: Multivariate Probability
//   // ============================================================
 
//   {
//     id: 'bivariate_random_variable',
//     name: 'Bivariate Random Variable',
//     category: 'Multivariate Probability',
//     formula: `A pair of random variables $(X, Y)$ defined on the same sample space, considered jointly.`,
//     link: { url: '/probability/joint-probability', text: 'Joint Probability' },
//     fields: {
//       intuition: `A bivariate random variable treats two measurements taken from the same experiment as a single object. Their joint behavior — how they relate, co-occur, or depend on each other — is captured by a joint distribution.`,
//       'related concepts': `- [Joint Probability](!/probability/joint-probability)
// - [Marginal Distribution](!/probability/joint-probability#marginal)
// - [Covariance](!/probability/covariance)`
//     }
//   },
 
//   {
//     id: 'n_variate_random_variables',
//     name: 'N-Variate Random Variables',
//     category: 'Multivariate Probability',
//     formula: `A vector $(X_1, X_2, \\ldots, X_n)$ of $n$ random variables defined on the same sample space.`,
//     link: { url: '/probability/joint-probability', text: 'Joint Probability' },
//     fields: {
//       intuition: `An extension of bivariate random variables to any number of components. The joint distribution describes how all $n$ variables behave together.`,
//       'related concepts': `- [Bivariate Random Variable](!/probability/joint-probability#distributions)
// - [Joint Probability](!/probability/joint-probability)
// - [Covariance](!/probability/covariance)`
//     }
//   },
 
//   {
//     id: 'independent_random_variables',
//     name: 'Independent Random Variables',
//     category: 'Multivariate Probability',
//     formula: `Random variables $X$ and $Y$ are independent if $P(X \\le x, Y \\le y) = P(X \\le x) \\cdot P(Y \\le y)$ for all $x, y$.`,
//     link: { url: '/probability/independence', text: 'Independence' },
//     fields: {
//       intuition: `Independent random variables carry no information about each other. Knowing the value of one does not change the distribution of the other.`,
//       properties: `- $f_{X,Y}(x,y) = f_X(x) \\cdot f_Y(y)$
// - $E[XY] = E[X] \\cdot E[Y]$
// - $\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$`,
//       'related concepts': `- [Independence](!/probability/independence)
// - [Covariance](!/probability/covariance)
// - [Joint Probability](!/probability/joint-probability)`
//     }
//   },
 
//   {
//     id: 'orthogonal_random_variables',
//     name: 'Orthogonal Random Variables',
//     category: 'Multivariate Probability',
//     formula: `Random variables $X$ and $Y$ are orthogonal if $E[XY] = 0$.`,
//     link: { url: '/probability/covariance', text: 'Covariance' },
//     fields: {
//       intuition: `Orthogonality is an algebraic condition on the product of two random variables. It is weaker than independence and does not imply zero covariance unless the means are zero.`,
//       'related concepts': `- [Uncorrelated Random Variables](!/probability/covariance#4)
// - [Covariance](!/probability/covariance)
// - [Independent Random Variables](!/probability/independence)`
//     }
//   },
 
//   {
//     id: 'uncorrelated_random_variables',
//     name: 'Uncorrelated Random Variables',
//     category: 'Multivariate Probability',
//     formula: `Random variables $X$ and $Y$ are uncorrelated if $\\operatorname{Cov}(X, Y) = 0$, equivalently $E[XY] = E[X]E[Y]$.`,
//     link: { url: '/probability/covariance', text: 'Covariance' },
//     fields: {
//       intuition: `Uncorrelated means no linear relationship between two variables. Independent random variables are always uncorrelated, but uncorrelated variables can still be dependent through nonlinear relationships.`,
//       'common errors': `Assuming uncorrelated implies independent. This is true only for jointly normal random variables, not in general.`,
//       'related concepts': `- [Covariance](!/probability/covariance)
// - [Correlation Coefficient](!/probability/covariance#8)
// - [Independence](!/probability/independence)`
//     }
//   },
 
//   {
//     id: 'marginal_distribution',
//     name: 'Marginal Distribution',
//     category: 'Multivariate Probability',
//     formula: `The distribution of one random variable obtained from a joint distribution by summing (discrete) or integrating (continuous) over all values of the other variable(s).`,
//     link: { url: '/probability/joint-probability', text: 'Joint Probability' },
//     fields: {
//       intuition: `A marginal distribution extracts the standalone behavior of one variable from a joint distribution, ignoring the other variables. In a contingency table, marginals appear as row or column totals.`,
//       'related concepts': `- [Joint Probability](!/probability/joint-probability)
// - [Conditional Probability](!/probability/conditional-probability)
// - [Bivariate Random Variable](!/probability/joint-probability#distributions)`
//     }
//   },
 
//   {
//     id: 'joint_cdf',
//     name: 'Joint Cumulative Distribution Function',
//     category: 'Multivariate Probability',
//     formula: `$F_{X,Y}(x, y) = P(X \\le x, Y \\le y)$ for all $x, y \\in \\mathbb{R}$.`,
//     link: { url: '/probability/joint-probability', text: 'Joint Probability' },
//     fields: {
//       intuition: `The joint CDF extends the cumulative distribution function to multiple random variables. It gives the probability that all variables simultaneously fall below their respective thresholds.`,
//       'related concepts': `- [CDF](!/probability/cdf)
// - [Joint PMF](!/probability/joint-probability#distributions)
// - [Joint PDF](!/probability/joint-probability#distributions)`
//     }
//   },
 
//   {
//     id: 'joint_pmf',
//     name: 'Joint Probability Mass Function',
//     category: 'Multivariate Probability',
//     formula: `$p_{X,Y}(x, y) = P(X = x, Y = y)$ for discrete random variables $X$ and $Y$.`,
//     link: { url: '/probability/joint-probability', text: 'Joint Probability' },
//     fields: {
//       intuition: `The joint PMF assigns a probability to each specific combination of values two discrete random variables can take simultaneously.`,
//       properties: `- $p_{X,Y}(x,y) \\ge 0$
// - $\\sum_x \\sum_y p_{X,Y}(x,y) = 1$`,
//       'related concepts': `- [PMF](!/probability/probability-function#pmf)
// - [Joint Probability](!/probability/joint-probability)
// - [Marginal Distribution](!/probability/joint-probability#marginal)`
//     }
//   },
 
//   {
//     id: 'joint_pdf',
//     name: 'Joint Probability Density Function',
//     category: 'Multivariate Probability',
//     formula: `A function $f_{X,Y}(x,y) \\ge 0$ such that $P((X,Y) \\in A) = \\iint_A f_{X,Y}(x,y)\\,dx\\,dy$ for any region $A$.`,
//     link: { url: '/probability/joint-probability', text: 'Joint Probability' },
//     fields: {
//       intuition: `The joint PDF describes how probability density is spread over the plane for two continuous random variables. Probabilities are obtained by integrating over regions, not by evaluating at points.`,
//       'related concepts': `- [PDF](!/probability/probability-function#pdf)
// - [Joint Probability](!/probability/joint-probability)
// - [Marginal Distribution](!/probability/joint-probability#marginal)`
//     }
//   },
 
//   {
//     id: 'conditional_pmf',
//     name: 'Conditional Probability Mass Function',
//     category: 'Multivariate Probability',
//     formula: `$p_{X|Y}(x \\mid y) = \\frac{p_{X,Y}(x, y)}{p_Y(y)}$, defined when $p_Y(y) > 0$.`,
//     link: { url: '/probability/conditional-probability', text: 'Conditional Probability' },
//     fields: {
//       intuition: `The conditional PMF gives the probability distribution of one discrete random variable when another discrete random variable is known to take a specific value.`,
//       'related concepts': `- [Conditional Probability](!/probability/conditional-probability)
// - [Joint PMF](!/probability/joint-probability#distributions)
// - [Conditional PDF](!/probability/conditional-probability#formula)`
//     }
//   },
 
//   {
//     id: 'conditional_pdf',
//     name: 'Conditional Probability Density Function',
//     category: 'Multivariate Probability',
//     formula: `$f_{X|Y}(x \\mid y) = \\frac{f_{X,Y}(x, y)}{f_Y(y)}$, defined when $f_Y(y) > 0$.`,
//     link: { url: '/probability/conditional-probability', text: 'Conditional Probability' },
//     fields: {
//       intuition: `The conditional PDF describes the density of one continuous random variable when another continuous random variable is known to take a specific value.`,
//       'related concepts': `- [Conditional Probability](!/probability/conditional-probability)
// - [Joint PDF](!/probability/joint-probability#distributions)
// - [Conditional PMF](!/probability/conditional-probability#formula)`
//     }
//   },
 
//   // ============================================================
//   // MISSING: Markov Property — no content page exists
//   // ============================================================
 
//   // {
//   //   id: 'markov_property',
//   //   name: 'Markov Property',
//   //   category: 'Advanced Concepts',
//   //   formula: `The memoryless property: the conditional distribution of a future state depends only on the present state, not on the sequence of states that preceded it.`,
//   //   link: { url: '', text: '' },
//   //   fields: {
//   //     intuition: `A process has the Markov property when its future behavior depends only on where it is now, not on how it got there. The past is irrelevant once the present is known.`,
//   //     'related concepts': `- Geometric Distribution
//   //     - Exponential Distribution
//   //     - Conditional Probability`
//   //   }
//   // },
 
//   // ============================================================
//   // CATEGORY: Transformations & Generating Functions
//   // ============================================================
 
//   {
//     id: 'function_of_random_variable',
//     name: 'Function of a Random Variable',
//     category: 'Transformations',
//     formula: `Given a random variable $X$ and a function $g$, $Y = g(X)$ defines a new random variable whose distribution is determined by the distribution of $X$ and the function $g$.`,
//     link: { url: '/probability/random-variables', text: 'Random Variables' },
//     fields: {
//       intuition: `Applying a function to a random variable produces a new random variable. The challenge is determining the distribution of the result from the distribution of the original.`,
//       'related concepts': `- [Random Variable](!/probability/random-variables)
// - [PDF of Transformed Variable](!/probability/probability-function/pdf#11)
// - [Expected Value](!/probability/expected-value#function)`
//     }
//   },
 
//   {
//     id: 'pdf_of_transformed_variable',
//     name: 'PDF of a Transformed Variable',
//     category: 'Transformations',
//     formula: `If $Y = g(X)$ where $g$ is monotone and differentiable, then $f_Y(y) = f_X(g^{-1}(y)) \\cdot |\\frac{d}{dy} g^{-1}(y)|$.`,
//     link: { url: '/probability/probability-function/pdf', text: 'PDF' },
//     fields: {
//       intuition: `When a continuous random variable is transformed, its density changes. The change-of-variables formula accounts for both the mapping of values and the stretching or compression of the density.`,
//       'related concepts': `- [PDF](!/probability/probability-function#pdf)
// - [Function of a Random Variable](!/probability/random-variables#probability)
// - [CDF](!/probability/cdf)`
//     }
//   },
 
//   {
//     id: 'moment_generating_function',
//     name: 'Moment Generating Function',
//     category: 'Transformations',
//     formula: `$M_X(t) = E[e^{tX}]$, defined for real values of $t$ where the expectation exists.`,
//     link: { url: '/probability/distributions/discrete/binomial', text: 'Binomial Distribution' },
//     fields: {
//       intuition: `The moment generating function encodes all moments of a random variable in a single function. The $k$-th moment is obtained by differentiating $k$ times and evaluating at $t = 0$.`,
//       properties: `- $M_X^{(k)}(0) = E[X^k]$
// - If two random variables have the same MGF, they have the same distribution
// - $M_{X+Y}(t) = M_X(t) \\cdot M_Y(t)$ when $X, Y$ are independent`,
//       'related concepts': `- [Moment of a Random Variable](!/probability/expected-value#function)
// - [Expected Value](!/probability/expected-value)
// - [Variance](!/probability/variance)`
//     }
//   },
 
//   // ============================================================
//   // MISSING: Characteristic Function — no content page exists
//   // ============================================================
 
//   // {
//   //   id: 'characteristic_function',
//   //   name: 'Characteristic Function',
//   //   category: 'Transformations',
//   //   formula: `$\\varphi_X(t) = E[e^{itX}]$ where $i = \\sqrt{-1}$, defined for all real $t$.`,
//   //   link: { url: '', text: '' },
//   //   fields: {
//   //     intuition: `The characteristic function is the Fourier transform of the probability distribution. Unlike the MGF, it always exists and uniquely determines the distribution.`,
//   //     'related concepts': `- Moment Generating Function
//   //     - Expected Value
//   //     - Normal Distribution`
//   //   }
//   // },
 
//   // ============================================================
//   // CATEGORY: Set Operations (in probability context)
//   // ============================================================
 
//   {
//     id: 'venn_diagram',
//     name: 'Venn Diagram',
//     category: 'Set Operations',
//     formula: `A graphical representation using overlapping circles to depict sets (events) and their relationships within a sample space.`,
//     link: { url: '/probability/sets', text: 'Sets in Probability' },
//     fields: {
//       intuition: `Venn diagrams visualize how events overlap, combine, or exclude each other. They make set operations like union, intersection, and complement immediately visible.`,
//       'related concepts': `- [Union](!/probability/sets#operations)
// - [Intersection](!/probability/sets#operations)
// - [Complement](!/probability/sets#operations)
// - [Event](!/probability/events)`
//     }
//   },
 
//   {
//     id: 'null_set',
//     name: 'Null Set',
//     category: 'Set Operations',
//     formula: `$\\emptyset$ — the set containing no elements, representing an impossible event in probability.`,
//     link: { url: '/probability/sets', text: 'Sets in Probability' },
//     fields: {
//       intuition: `The null set is the event that can never occur. Its probability is always zero: $P(\\emptyset) = 0$.`,
//       'related concepts': `- [Sample Space](!/probability/sample-space)
// - [Complement](!/probability/sets#operations)
// - [Mutually Exclusive Events](!/probability/events#relations)`
//     }
//   },
 
//   {
//     id: 'union_of_sets',
//     name: 'Union of Sets',
//     category: 'Set Operations',
//     formula: `$A \\cup B = \\{\\omega : \\omega \\in A \\text{ or } \\omega \\in B\\}$ — the event that at least one of $A$ or $B$ occurs.`,
//     link: { url: '/probability/sets', text: 'Sets in Probability' },
//     fields: {
//       intuition: `The union combines two events into one that occurs whenever either event (or both) occurs.`,
//       'related concepts': `- [Intersection](!/probability/sets#operations)
// - [Complement](!/probability/sets#operations)
// - [Addition Rule](!/probability/rules#additive)`
//     }
//   },
 
//   {
//     id: 'intersection_of_sets',
//     name: 'Intersection of Sets',
//     category: 'Set Operations',
//     formula: `$A \\cap B = \\{\\omega : \\omega \\in A \\text{ and } \\omega \\in B\\}$ — the event that both $A$ and $B$ occur simultaneously.`,
//     link: { url: '/probability/sets', text: 'Sets in Probability' },
//     fields: {
//       intuition: `The intersection is the event where both conditions are met at the same time.`,
//       'related concepts': `- [Union](!/probability/sets#operations)
// - [Joint Probability](!/probability/joint-probability)
// - [Conditional Probability](!/probability/conditional-probability)`
//     }
//   },
 
//   {
//     id: 'disjoint_sets',
//     name: 'Disjoint Sets',
//     category: 'Set Operations',
//     formula: `Sets $A$ and $B$ are disjoint if $A \\cap B = \\emptyset$ — they share no common elements.`,
//     link: { url: '/probability/sets', text: 'Sets in Probability' },
//     fields: {
//       intuition: `Disjoint sets have no overlap. In probability, disjoint events are mutually exclusive — they cannot both occur in the same trial.`,
//       'related concepts': `- [Mutual Exclusiveness](!/probability/events#relations)
// - [Null Set](!/probability/sets#types)
// - [Partition](!/probability/total-probability#cases)`
//     }
//   },
 
//   {
//     id: 'complement_of_set',
//     name: 'Complement of a Set',
//     category: 'Set Operations',
//     formula: `$A^c = \\{\\omega \\in \\Omega : \\omega \\notin A\\}$ — all outcomes in the sample space that are not in $A$.`,
//     link: { url: '/probability/sets', text: 'Sets in Probability' },
//     fields: {
//       intuition: `The complement of an event is everything that can happen except that event. $P(A^c) = 1 - P(A)$.`,
//       'related concepts': `- [Event](!/probability/events)
// - [Sample Space](!/probability/sample-space)
// - [Probability Rules](!/probability/rules)`
//     }
//   },
 
//   // ============================================================
//   // CATEGORY: Visual & Structural Tools
//   // ============================================================
 
//   {
//     id: 'probability_tree',
//     name: 'Probability Tree',
//     category: 'Visual Tools',
//     formula: `A branching diagram where each node represents a stage of a sequential random process, branches represent possible outcomes, and branch labels show conditional probabilities.`,
//     link: { url: '/probability/tree-diagrams', text: 'Tree Diagrams' },
//     fields: {
//       intuition: `A probability tree lays out a multi-stage experiment visually. Multiplying along a path gives joint probabilities; summing across paths reaching the same outcome gives marginal probabilities.`,
//       'related concepts': `- [Conditional Probability](!/probability/conditional-probability)
// - [Total Probability](!/probability/total-probability)
// - [Bayes' Theorem](!/probability/bayes-theorem)`
//     }
//   },


// ];

// export default probabilityTermsList;






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
- [Sequence of Bernoulli Trials](!/probability/distributions/discrete#bernoulli)`,
      'related formulas': `- [Negative Binomial PMF](!/probability/formulas#negative_binomial_distribution)`
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
- [Conditional Probability](!/probability/conditional-probability)`,
      'related formulas': `- [Non-negativity Axiom](!/probability/formulas#probability_measure)`
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
- [Random Variable](!/probability/random-variables)`,
      'related formulas': `- [Classical Probability Formula](!/probability/formulas#equally_likely_events)
- [Normalization Axiom](!/probability/formulas#probability_measure)`
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
- [Independence](!/probability/independence)`,
      'related formulas': `- [Classical Probability Formula](!/probability/formulas#equally_likely_events)
- [Conditional Probability Definition](!/probability/formulas#conditional_probability)
- [Indicator Random Variable Definition](!/probability/formulas#indicator_random_variable)
- [Law of Total Probability](!/probability/formulas#total_probability)
- [Non-negativity Axiom](!/probability/formulas#probability_measure)
- [PDF Normalization](!/probability/formulas#probability_density_function)
- [PMF Normalization](!/probability/formulas#probability_mass_function)`
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
- [Discrete Uniform Distribution](!/probability/distributions/discrete/uniform)`,
      'related formulas': `- [Classical Probability Formula](!/probability/formulas#equally_likely_events)
- [Discrete Uniform PMF](!/probability/formulas#uniform_distribution_discrete)`
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
- [Joint Probability](!/probability/joint-probability)`,
      'related formulas': `- [Bayes Theorem](!/probability/formulas#bayes_theorem)
- [Conditional Expectation Definition](!/probability/formulas#conditional_expectation)
- [Conditional Variance Definition](!/probability/formulas#conditional_variance)
- [Exponential Memoryless](!/probability/formulas#exponential_distribution)
- [Geometric Memoryless](!/probability/formulas#geometric_distribution)
- [Law of Total Probability](!/probability/formulas#total_probability)`
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
- [Independent Random Variables](!/probability/independence#definition)`,
      'related formulas': `- [Bayes Theorem](!/probability/formulas#bayes_theorem)
- [Conditional Independence](!/probability/formulas#conditional_independence)`
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
- [Independence](!/probability/independence)`,
      'related formulas': `- [Addition Rule](!/probability/formulas#event)
- [Countable Additivity Axiom](!/probability/formulas#probability_measure)
- [Independence Formula](!/probability/formulas#independent_events)`
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
- [Sequence of Bernoulli Trials](!/probability/distributions/discrete#bernoulli)`,
      'related formulas': `- [Bernoulli PMF](!/probability/formulas#bernoulli_distribution)`
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
- [Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)`,
      'related formulas': `- [Binomial PMF](!/probability/formulas#binomial_distribution)`
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
- [CDF](!/probability/cdf)`,
      'related formulas': `- [CDF Definition](!/probability/formulas#cumulative_distribution_function)
- [Indicator Random Variable Definition](!/probability/formulas#indicator_random_variable)
- [Linearity of Expectation](!/probability/formulas#expected_value)`
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
- [Continuous Random Variable](!/probability/random-variables#types)`,
      'related formulas': `- [CDF from PMF](!/probability/formulas#cumulative_distribution_function)
- [Expected Value (Discrete)](!/probability/formulas#expected_value)
- [PMF Non-negativity](!/probability/formulas#probability_mass_function)`
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
- [Discrete Random Variable](!/probability/random-variables#types)`,
      'related formulas': `- [CDF from PDF](!/probability/formulas#cumulative_distribution_function)
- [Expected Value (Continuous)](!/probability/formulas#expected_value)
- [PDF Non-negativity](!/probability/formulas#probability_density_function)`
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
- [PDF](!/probability/probability-function#pdf)`,
      'related formulas': `- [CDF from PMF](!/probability/formulas#cumulative_distribution_function)
- [Expected Value (Discrete)](!/probability/formulas#expected_value)`
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
- [PMF](!/probability/probability-function#pmf)`,
      'related formulas': `- [CDF from PDF](!/probability/formulas#cumulative_distribution_function)
- [Expected Value (Continuous)](!/probability/formulas#expected_value)`
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
- [Indicator Random Variables](!/probability/indicators)`,
      'related formulas': `- [Bernoulli Mean](!/probability/formulas#bernoulli_distribution)
- [Covariance Definition](!/probability/formulas#covariance)
- [Expectation of Indicator](!/probability/formulas#indicator_random_variable)
- [kth Moment](!/probability/formulas#moment)
- [Law of Iterated Expectation](!/probability/formulas#conditional_expectation)
- [Law of Total Variance](!/probability/formulas#conditional_variance)
- [Variance Definition](!/probability/formulas#variance)`
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
- [Covariance](!/probability/covariance)`,
      'related formulas': `- [Bernoulli Variance](!/probability/formulas#bernoulli_distribution)
- [Covariance Self-Identity](!/probability/formulas#covariance)
- [kth Central Moment](!/probability/formulas#moment)
- [Law of Total Variance](!/probability/formulas#conditional_variance)
- [Standard Deviation Definition](!/probability/formulas#standard_deviation)
- [Variance of Indicator](!/probability/formulas#indicator_random_variable)`
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
- [Chebyshev's Inequality](!/probability/inequalities/chebyshev)`,
      'related formulas': `- [Correlation Coefficient Definition](!/probability/formulas#correlation_coefficient)`
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
- [Independence](!/probability/independence)`,
      'related formulas': `- [Correlation Coefficient Definition](!/probability/formulas#correlation_coefficient)`
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
- [Poisson Distribution](!/probability/distributions/discrete/poisson)`,
      'related formulas': `- [Binomial PMF](!/probability/formulas#binomial_distribution)`
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
- [Expected Value](!/probability/expected-value)`,
      'related formulas': `- [Poisson PMF](!/probability/formulas#poisson_distribution)`
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
- [Continuous Uniform Distribution](!/probability/distributions/continuous/uniform)`,
      'related formulas': `- [Discrete Uniform PMF](!/probability/formulas#uniform_distribution_discrete)`
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
- [Continuous Uniform Distribution](!/probability/distributions/continuous/uniform)`,
      'related formulas': `- [Exponential PDF](!/probability/formulas#exponential_distribution)`
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
- [Exponential Distribution](!/probability/distributions/continuous/exponential)`,
      'related formulas': `- [Normal PDF](!/probability/formulas#normal_distribution)`
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
- [Exponential Distribution](!/probability/distributions/continuous/exponential)`,
      'related formulas': `- [Geometric PMF](!/probability/formulas#geometric_distribution)`
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
- [Discrete Distributions](!/probability/distributions/discrete)`,
      'related formulas': `- [Hypergeometric PMF](!/probability/formulas#hypergeometric_distribution)`
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
- [Joint Probability](!/probability/joint-probability)`,
      'related formulas': `- [Covariance Definition](!/probability/formulas#covariance)
- [MGF of Sum (Independent)](!/probability/formulas#moment_generating_function)
- [Poisson Sum (Independent)](!/probability/formulas#poisson_distribution)
- [Sum of Independent Normals](!/probability/formulas#normal_distribution)
- [Variance of Sum (Independent)](!/probability/formulas#variance)`
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
- [Expected Value](!/probability/expected-value#function)`,
      'related formulas': `- [CDF Method for Transformations](!/probability/formulas#function_of_random_variable)
- [PDF of Monotone Transformation](!/probability/formulas#pdf_of_transformed_variable)`
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
- [Variance](!/probability/variance)`,
      'related formulas': `- [MGF Definition](!/probability/formulas#moment_generating_function)`
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
- [Mutually Exclusive Events](!/probability/events#relations)`,
      'related formulas': `- [Probability of Empty Event](!/probability/formulas#event)`
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
- [Addition Rule](!/probability/rules#additive)`,
      'related formulas': `- [Addition Rule](!/probability/formulas#event)`
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
- [Conditional Probability](!/probability/conditional-probability)`,
      'related formulas': `- [Difference Rule](!/probability/formulas#event)
- [Indicator of Intersection](!/probability/formulas#indicator_random_variable)`
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
- [Partition](!/probability/total-probability#cases)`,
      'related formulas': `- [Countable Additivity Axiom](!/probability/formulas#probability_measure)`
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
- [Probability Rules](!/probability/rules)`,
      'related formulas': `- [Complement Rule](!/probability/formulas#event)
- [Indicator of Complement](!/probability/formulas#indicator_random_variable)`
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


];

export default probabilityTermsList;