const probabilityTermsList = [

  {
    id: 'sample_space',
    name: 'Sample Space',
    category: 'Foundations',
    formula: `$$\\Omega = \\{\\omega_1,\\, \\omega_2,\\, \\ldots\\}$$`,
    link: { url: '/probability/sample-space#definition', text: 'Sample Space' },
    fields: {
      intuition: `The complete collection of every possible outcome a random experiment can produce. Before any probabilities are assigned, the sample space defines what can happen at all.`,
      notation: `- $\\Omega$ (or $S$) — the sample space\n- $\\omega$ — a single outcome (an element of $\\Omega$)\n- $|\\Omega|$ — the number of outcomes, for finite spaces`,
      properties: `- Every outcome either belongs to $\\Omega$ or it does not — nothing outside $\\Omega$ can occur\n- Outcomes are mutually exclusive: exactly one occurs per trial\n- Outcomes are collectively exhaustive: at least one always occurs`,
    }
  },
 
  {
    id: 'outcome',
    name: 'Outcome',
    category: 'Foundations',
    formula: `$$\\omega \\in \\Omega$$`,
    link: { url: '/probability/sample-space#definition', text: 'Sample Space' },
    fields: {
      intuition: `A single, indivisible result of one run of a random experiment. An outcome cannot be broken into simpler pieces within the model. Also called an elementary outcome or sample point.`,
      notation: `- $\\omega$ — a single outcome\n- $\\Omega$ — the set to which every outcome belongs`,
      examples: `- Die roll: outcomes are $1, 2, 3, 4, 5, 6$\n- Coin toss: outcomes are $H$ and $T$\n- Measured height: each exact real value in an interval is an outcome`,
    }
  },
 
  {
    id: 'event',
    name: 'Event',
    category: 'Foundations',
    formula: `$$A \\subseteq \\Omega$$`,
    link: { url: '/probability/events#sample', text: 'Events in Probability' },
    fields: {
      intuition: `A meaningful collection of outcomes — the things we actually assign probabilities to. An event occurs when the experiment's result is one of the outcomes inside it.`,
      notation: `- $A, B, C$ — events\n- $A \\subseteq \\Omega$ — every element of $A$ is an outcome\n- $P(A)$ — the probability assigned to event $A$`,
      special_cases: `- $\\Omega$ itself — the certain event, $P(\\Omega) = 1$\n- $\\emptyset$ — the impossible event, $P(\\emptyset) = 0$\n- $\\{\\omega\\}$ — an elementary event containing a single outcome`,
    }
  },
 
  {
    id: 'complement',
    name: 'Complement (of an Event)',
    category: 'Foundations',
    formula: `$$A^c = \\Omega \\setminus A \\qquad P(A^c) = 1 - P(A)$$`,
    link: { url: '/probability/events#types', text: 'Event Types' },
    fields: {
      intuition: `Everything that does not belong to $A$. If $A$ is "the value is even," then $A^c$ is "the value is odd." The event and its complement together cover all possibilities exactly once.`,
      notation: `- $A^c$, $A'$, or $\\bar{A}$ — complement of $A$\n- $P(A^c) = 1 - P(A)$ — the complement rule`,
      properties: `- $A \\cup A^c = \\Omega$ and $A \\cap A^c = \\emptyset$\n- $(A^c)^c = A$\n- $A$ and $A^c$ are always mutually exclusive and exhaustive`,
    }
  },
 
  {
    id: 'mutually_exclusive',
    name: 'Mutually Exclusive Events',
    category: 'Foundations',
    formula: `$$A \\cap B = \\emptyset \\implies P(A \\cup B) = P(A) + P(B)$$`,
    link: { url: '/probability/events#types', text: 'Event Types' },
    fields: {
      intuition: `Two events that cannot both occur in the same trial. Knowing one happened rules the other out completely. Also called disjoint events.`,
      notation: `- $A \\cap B = \\emptyset$ — the intersection is empty\n- Extended: $A_1, \\ldots, A_n$ are mutually exclusive if $A_i \\cap A_j = \\emptyset$ for all $i \\neq j$`,
      common_errors: `Mutually exclusive is not the same as independent. Mutually exclusive events with positive probability are never independent — knowing one occurred tells you the other did not.`,
    }
  },
 
  {
    id: 'probability_measure',
    name: 'Probability Measure',
    category: 'Foundations',
    formula: `$$P: \\mathcal{F} \\to [0,1] \\quad\\text{satisfying the Kolmogorov axioms}$$`,
    link: { url: '/probability/axioms', text: 'Axioms of Probability' },
    fields: {
      intuition: `A function that assigns a number between 0 and 1 to each event, measuring how likely that event is. Three axioms ensure the assignment is consistent: non-negativity, normalization, and countable additivity.`,
      properties: `- $P(A) \\geq 0$ for all events $A$\n- $P(\\Omega) = 1$\n- If $A_1, A_2, \\ldots$ are pairwise disjoint: $P\\bigl(\\bigcup_i A_i\\bigr) = \\sum_i P(A_i)`,
      notation: `- $P$ — the probability measure\n- $\\mathcal{F}$ — the collection of events (a $\\sigma$-algebra on $\\Omega$)\n- $(\\Omega, \\mathcal{F}, P)$ — a probability space`,
    }
  },
 
  // ─── RULES & THEOREMS ────────────────────────────────────────────────────
 
  {
    id: 'addition_rule',
    name: 'Addition Rule',
    category: 'Rules & Theorems',
    formula: `$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$`,
    link: { url: '/probability/rules#additive', text: 'Additive Rules' },
    fields: {
      intuition: `The probability that at least one of two events occurs. Adding $P(A)$ and $P(B)$ counts any outcome in $A \\cap B$ twice, so we subtract it once.`,
      special_cases: `- If $A$ and $B$ are mutually exclusive: $P(A \\cup B) = P(A) + P(B)$\n- For $n$ mutually exclusive events: $P\\bigl(\\bigcup_i A_i\\bigr) = \\sum_i P(A_i)$`,
      common_errors: `Forgetting to subtract $P(A \\cap B)$ when events overlap. The formula $P(A) + P(B)$ alone is only correct when $A \\cap B = \\emptyset$.`,
    }
  },
 
  {
    id: 'multiplication_rule',
    name: 'Multiplication Rule',
    category: 'Rules & Theorems',
    formula: `$$P(A \\cap B) = P(A) \\cdot P(B \\mid A) = P(B) \\cdot P(A \\mid B)$$`,
    link: { url: '/probability/rules#multy', text: 'Multiplicative Rules' },
    fields: {
      intuition: `The probability that both events occur together. Multiply the probability of the first by the conditional probability of the second given the first. Extends via the chain rule to $n$ events.`,
      special_cases: `- If $A$ and $B$ are independent: $P(A \\cap B) = P(A) \\cdot P(B)$\n- Chain rule for $n$ events: $P(A_1 \\cap \\cdots \\cap A_n) = P(A_1)\\,P(A_2|A_1)\\,P(A_3|A_1 \\cap A_2)\\cdots$`,
    }
  },
 
  {
    id: 'total_probability',
    name: 'Law of Total Probability',
    category: 'Rules & Theorems',
    formula: `$$P(A) = \\sum_{i=1}^{n} P(A \\mid B_i)\\, P(B_i)$$`,
    link: { url: '/probability/total-probability', text: 'Law of Total Probability' },
    fields: {
      intuition: `Breaks the probability of an event $A$ into pieces by conditioning on a partition $B_1, \\ldots, B_n$ of the sample space. Each piece is the probability of $A$ given one partition element, weighted by that element's probability.`,
      notation: `- $B_1, \\ldots, B_n$ — a partition of $\\Omega$ (mutually exclusive and exhaustive)\n- $P(A \\mid B_i)$ — the conditional probability of $A$ within partition element $B_i$`,
      properties: `- Requires a valid partition: $B_i \\cap B_j = \\emptyset$ for $i \\neq j$ and $\\bigcup_i B_i = \\Omega$\n- Works for any number of partition elements $n \\geq 2$\n- Used as the denominator in Bayes' theorem`,
    }
  },
 
  {
    id: 'bayes_theorem',
    name: "Bayes' Theorem",
    category: 'Rules & Theorems',
    formula: `$$P(B_j \\mid A) = \\frac{P(A \\mid B_j)\\, P(B_j)}{\\displaystyle\\sum_{i} P(A \\mid B_i)\\, P(B_i)}$$`,
    link: { url: '/probability/bayes-theorem', text: "Bayes' Theorem" },
    fields: {
      intuition: `Inverts a conditional probability: given $P(A \\mid B)$, it recovers $P(B \\mid A)$. The denominator uses the law of total probability. Widely used in Bayesian inference to update beliefs after observing evidence.`,
      notation: `- $P(B_j)$ — prior probability of $B_j$ (before observing $A$)\n- $P(A \\mid B_j)$ — likelihood of $A$ given $B_j$\n- $P(B_j \\mid A)$ — posterior probability of $B_j$ after observing $A$`,
      special_cases: `Two-event form: $$P(B \\mid A) = \\frac{P(A \\mid B)\\,P(B)}{P(A)}$$`,
    }
  },
 
  // ─── CONDITIONAL PROBABILITY & INDEPENDENCE ──────────────────────────────
 
  {
    id: 'conditional_probability',
    name: 'Conditional Probability',
    category: 'Conditional Probability & Independence',
    formula: `$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0$$`,
    link: { url: '/probability/conditional-probability#formula', text: 'Conditional Probability Formula' },
    fields: {
      intuition: `The probability of $A$ once we know $B$ has occurred. Restricts the sample space to outcomes consistent with $B$ and re-normalizes probabilities within that restricted space.`,
      notation: `- $P(A \\mid B)$ — "probability of $A$ given $B$"\n- $P(A \\cap B)$ — the numerator: both events occur\n- $P(B)$ — the denominator: normalizes to the restricted space`,
      common_errors: `$P(A \\mid B) \\neq P(B \\mid A)$ in general. Swapping the condition is a common error (prosecutor's fallacy). Use Bayes' theorem to reverse the conditioning direction.`,
    }
  },
 
  {
    id: 'independence',
    name: 'Independence',
    category: 'Conditional Probability & Independence',
    formula: `$$P(A \\cap B) = P(A)\\cdot P(B)$$`,
    link: { url: '/probability/independence#formula', text: 'Independence Formula' },
    fields: {
      intuition: `Two events are independent when knowing one has occurred gives no information about the other. The probability of each is unaffected by whether the other happens.`,
      notation: `- Equivalent conditions: $P(A \\mid B) = P(A)$ and $P(B \\mid A) = P(B)$\n- Pairwise independence of $n$ events does not imply mutual independence`,
      common_errors: `Independence is not the same as mutual exclusivity. Two events with positive probability that are mutually exclusive are never independent — knowing one occurred tells you the other did not.`,
    }
  },
 
  {
    id: 'joint_probability',
    name: 'Joint Probability',
    category: 'Conditional Probability & Independence',
    formula: `$$P(X = x,\\; Y = y) \\quad\\text{or}\\quad P(A \\cap B)$$`,
    link: { url: '/probability/joint-probability#definition', text: 'Joint Probability' },
    fields: {
      intuition: `The probability that two or more events occur simultaneously, or that multiple random variables take specific values at the same time. Captures how outcomes co-occur rather than how they behave in isolation.`,
      notation: `- Discrete: $p_{X,Y}(x,y) = P(X=x, Y=y)$\n- Continuous: $f_{X,Y}(x,y)$ — joint density function\n- $P(A \\cap B)$ — joint probability for events`,
      properties: `- Marginals are recovered by summing (discrete) or integrating (continuous) over the other variable\n- If independent: $P(X=x, Y=y) = P(X=x)\\cdot P(Y=y)$`,
    }
  },
 
  {
    id: 'partition',
    name: 'Partition',
    category: 'Conditional Probability & Independence',
    formula: `$$B_i \\cap B_j = \\emptyset \\;(i \\neq j), \\quad \\bigcup_{i=1}^{n} B_i = \\Omega$$`,
    link: { url: '/probability/total-probability', text: 'Law of Total Probability' },
    fields: {
      intuition: `A collection of events that divides the sample space into non-overlapping pieces that cover everything. Every outcome falls into exactly one partition element. Partitions are the setting in which the law of total probability and Bayes' theorem apply.`,
      properties: `- Mutually exclusive: no two partition elements overlap\n- Collectively exhaustive: every outcome is in some element\n- All elements must have positive probability for the law of total probability to apply`,
    }
  },
 
  // ─── RANDOM VARIABLES & FUNCTIONS ────────────────────────────────────────
 
  {
    id: 'random_variable',
    name: 'Random Variable',
    category: 'Random Variables & Functions',
    formula: `$$X: \\Omega \\to \\mathbb{R}$$`,
    link: { url: '/probability/random-variables#definition', text: 'Random Variables' },
    fields: {
      intuition: `A function that assigns a real number to each outcome of a random experiment. Translates the abstract language of events into numbers so that probability can be used to analyze counts, measurements, and quantities.`,
      notation: `- $X$, $Y$, $Z$ — random variables (capital letters)\n- $x$, $y$, $z$ — realized values (lowercase)\n- $P(X = x)$ or $P(X \\leq x)$ — probability statements about the variable`,
    }
  },
 
  {
    id: 'discrete_rv',
    name: 'Discrete Random Variable',
    category: 'Random Variables & Functions',
    formula: `$$X \\text{ takes values in a countable set } \\{x_1, x_2, \\ldots\\}$$`,
    link: { url: '/probability/random-variables#types', text: 'Types of Random Variables' },
    fields: {
      intuition: `A random variable whose possible values can be listed one by one, even if the list is infinite. Described by a probability mass function (PMF) that assigns a positive probability to each possible value.`,
      examples: `- Number of heads in 10 coin flips: values in $\\{0,1,\\ldots,10\\}$\n- Number of calls arriving per hour: values in $\\{0,1,2,\\ldots\\}$\n- Outcome of a die roll: values in $\\{1,2,3,4,5,6\\}$`,
    }
  },
 
  {
    id: 'continuous_rv',
    name: 'Continuous Random Variable',
    category: 'Random Variables & Functions',
    formula: `$$X \\text{ takes values in an interval of } \\mathbb{R}$$`,
    link: { url: '/probability/random-variables#types', text: 'Types of Random Variables' },
    fields: {
      intuition: `A random variable whose possible values fill an interval rather than a list of distinct points. No single value has positive probability — probability is assigned to intervals and described by a probability density function (PDF).`,
      examples: `- Waiting time for an event: $X \\in [0, \\infty)$\n- A uniformly random point in $[0,1]$\n- Height or temperature measurement: any real value in a range`,
    }
  },
 
  {
    id: 'pmf',
    name: 'Probability Mass Function (PMF)',
    category: 'Random Variables & Functions',
    formula: `$$p_X(x) = P(X = x), \\quad \\sum_{x} p_X(x) = 1$$`,
    link: { url: '/probability/probability-function/pmf#1', text: 'PMF — Definition' },
    fields: {
      intuition: `The rule that assigns a probability to each possible value of a discrete random variable. Analogous to placing weights on a number line — heavier weights at more likely values, all weights summing to 1.`,
      notation: `- $p_X(x)$ or $P(X=x)$ — probability that $X$ equals $x$\n- Support: $\\{x : p_X(x) > 0\\}$ — the set of values with positive probability`,
      properties: `- $p_X(x) \\geq 0$ for all $x$\n- $\\sum_x p_X(x) = 1$\n- $P(X \\in A) = \\sum_{x \\in A} p_X(x)$ for any event $A$`,
    }
  },
 
  {
    id: 'pdf',
    name: 'Probability Density Function (PDF)',
    category: 'Random Variables & Functions',
    formula: `$$f_X(x) \\geq 0, \\quad \\int_{-\\infty}^{\\infty} f_X(x)\\,dx = 1, \\quad P(a \\leq X \\leq b) = \\int_a^b f_X(x)\\,dx$$`,
    link: { url: '/probability/probability-function/pdf', text: 'PDF' },
    fields: {
      intuition: `The continuous analog of the PMF. The PDF itself is not a probability — it is a density. Probability comes from integrating over an interval. The height of $f_X$ at a point reflects relative likelihood, not the probability of that exact value.`,
      notation: `- $f_X(x)$ — the density function\n- $f_X(x)$ can exceed 1 (it is a density, not a probability)\n- $P(X = x) = 0$ for any single point`,
      common_errors: `$f_X(x)$ is not $P(X=x)$. The probability of any single exact value is always 0 for a continuous random variable. Only integrals over intervals yield probabilities.`,
    }
  },
 
  {
    id: 'cdf',
    name: 'Cumulative Distribution Function (CDF)',
    category: 'Random Variables & Functions',
    formula: `$$F_X(x) = P(X \\leq x)$$`,
    link: { url: '/probability/cdf#definition', text: 'CDF — Definition' },
    fields: {
      intuition: `Tracks how probability accumulates as values increase. For any threshold $x$, $F_X(x)$ gives the probability that the random variable falls at or below that value. Defined for all random variables — discrete, continuous, or mixed.`,
      properties: `- $F_X$ is non-decreasing\n- $F_X(-\\infty) = 0$ and $F_X(\\infty) = 1$\n- Right-continuous: $\\lim_{t \\downarrow x} F_X(t) = F_X(x)$\n- $P(a < X \\leq b) = F_X(b) - F_X(a)$`,
    }
  },
 
  {
    id: 'indicator',
    name: 'Indicator Random Variable',
    category: 'Random Variables & Functions',
    formula: `$$\\mathbf{1}_A(\\omega) = \\begin{cases} 1 & \\omega \\in A \\\\ 0 & \\omega \\notin A \\end{cases}$$`,
    link: { url: '/probability/indicators', text: 'Indicator Variables' },
    fields: {
      intuition: `A binary random variable that equals 1 when a given event $A$ occurs and 0 otherwise. Converts events into numbers. Its expected value equals the probability of the event: $E[\\mathbf{1}_A] = P(A)$.`,
      notation: `- $\\mathbf{1}_A$ or $I_A$ — indicator of event $A$\n- $E[\\mathbf{1}_A] = P(A)$`,
      properties: `- $(\\mathbf{1}_A)^2 = \\mathbf{1}_A$ (idempotent)\n- $\\mathbf{1}_{A^c} = 1 - \\mathbf{1}_A$\n- $\\mathbf{1}_{A \\cap B} = \\mathbf{1}_A \\cdot \\mathbf{1}_B$\n- Sums of indicators count how many events in a collection occur`,
    }
  },
 
  // ─── MEASURES ────────────────────────────────────────────────────────────
 
  {
    id: 'expected_value',
    name: 'Expected Value',
    category: 'Measures',
    formula: `$$E[X] = \\sum_x x\\,p_X(x) \\quad\\text{or}\\quad E[X] = \\int_{-\\infty}^{\\infty} x\\,f_X(x)\\,dx$$`,
    link: { url: '/probability/expected-value#intuition', text: 'Expected Value — Intuition' },
    fields: {
      intuition: `The long-run average value of a random variable over many independent repetitions of the experiment. Each possible value is weighted by its probability. Also called the mean or expectation, denoted $\\mu$.`,
      notation: `- $E[X]$, $\\mathbb{E}[X]$, or $\\mu$ — expected value of $X$\n- Linearity: $E[aX + b] = aE[X] + b$\n- Additivity: $E[X + Y] = E[X] + E[Y]$ (always, no independence needed)`,
      properties: `- $E[c] = c$ for any constant $c$\n- $E[\\mathbf{1}_A] = P(A)$\n- If $X \\geq 0$ then $E[X] \\geq 0$`,
    }
  },
 
  {
    id: 'variance',
    name: 'Variance',
    category: 'Measures',
    formula: `$$\\operatorname{Var}(X) = E[(X - \\mu)^2] = E[X^2] - (E[X])^2$$`,
    link: { url: '/probability/variance#definition', text: 'Variance' },
    fields: {
      intuition: `Measures how far a random variable's values typically spread from its mean. Averages the squared distances from the mean — squaring ensures all deviations contribute positively and emphasizes large departures.`,
      notation: `- $\\operatorname{Var}(X)$, $\\sigma^2$, or $\\sigma_X^2$ — variance of $X$\n- $\\operatorname{Var}(aX + b) = a^2\\operatorname{Var}(X)$\n- $\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X,Y)$`,
      common_errors: `Variance cannot be negative. A negative result signals an arithmetic error. Also: $\\operatorname{Var}(X + Y) \\neq \\operatorname{Var}(X) + \\operatorname{Var}(Y)$ unless $X$ and $Y$ are uncorrelated.`,
    }
  },
 
  {
    id: 'standard_deviation',
    name: 'Standard Deviation',
    category: 'Measures',
    formula: `$$\\sigma = \\sqrt{\\operatorname{Var}(X)}$$`,
    link: { url: '/probability/variance#sd', text: 'Variance vs Standard Deviation' },
    fields: {
      intuition: `The square root of the variance. Returns spread to the same units as the original random variable, making it directly interpretable alongside the mean. $\\sigma$ measures the typical size of a deviation from $E[X]$.`,
      notation: `- $\\sigma$ or $\\sigma_X$ — standard deviation\n- $\\sigma^2$ — variance\n- $\\operatorname{SD}(aX + b) = |a|\\,\\sigma_X$`,
    }
  },
 
  {
    id: 'covariance',
    name: 'Covariance',
    category: 'Measures',
    formula: `$$\\operatorname{Cov}(X,Y) = E[(X - \\mu_X)(Y - \\mu_Y)] = E[XY] - E[X]E[Y]$$`,
    link: { url: '/probability/covariance', text: 'Covariance' },
    fields: {
      intuition: `Measures the direction and rough magnitude of the linear relationship between two random variables. Positive covariance means they tend to deviate from their means in the same direction; negative means opposite directions.`,
      notation: `- $\\operatorname{Cov}(X,Y)$ or $\\sigma_{XY}$\n- $\\operatorname{Cov}(X,X) = \\operatorname{Var}(X)$\n- Correlation: $\\rho_{XY} = \\frac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\,\\sigma_Y} \\in [-1,1]$`,
      properties: `- Symmetric: $\\operatorname{Cov}(X,Y) = \\operatorname{Cov}(Y,X)$\n- Bilinear in both arguments\n- If $X \\perp Y$: $\\operatorname{Cov}(X,Y) = 0$, but the converse is not generally true`,
    }
  },
 
  {
    id: 'median',
    name: 'Median',
    category: 'Measures',
    formula: `$$F_X(m) \\geq 0.5 \\quad\\text{and}\\quad P(X \\geq m) \\geq 0.5$$`,
    link: { url: '/probability/median', text: 'Median' },
    fields: {
      intuition: `The middle value of a distribution — the point where half the probability lies below and half above. Unlike the mean, the median is not pulled by extreme values, making it robust to heavy tails or skew.`,
      notation: `- $m$ or $\\tilde{\\mu}$ — the median\n- Continuous equivalent: $\\int_{-\\infty}^{m} f(x)\\,dx = 0.5$`,
      examples: `- Continuous uniform $U(a,b)$: median $= \\frac{a+b}{2}$\n- Exponential $\\operatorname{Exp}(\\lambda)$: median $= \\frac{\\ln 2}{\\lambda}$\n- Standard normal: median $= 0$`,
    }
  },
 
  {
    id: 'mode',
    name: 'Mode',
    category: 'Measures',
    formula: `$$\\text{mode} = \\arg\\max_x\\, p_X(x) \\quad\\text{or}\\quad \\arg\\max_x\\, f_X(x)$$`,
    link: { url: '/probability/mode', text: 'Mode' },
    fields: {
      intuition: `The most probable value (discrete) or the peak of the density (continuous). A distribution may have one mode (unimodal), two (bimodal), or more (multimodal). It is the value where probability mass is most concentrated.`,
      examples: `- Binomial $B(n,p)$: mode $\\approx \\lfloor(n+1)p\\rfloor$\n- Normal $N(\\mu,\\sigma^2)$: mode $= \\mu$\n- Geometric: mode $= 1$`,
    }
  },
 
  // ─── DISCRETE DISTRIBUTIONS ──────────────────────────────────────────────
 
  {
    id: 'bernoulli_trial',
    name: 'Bernoulli Trial',
    category: 'Discrete Distributions',
    formula: `$$P(X=1) = p, \\quad P(X=0) = 1-p, \\quad 0 < p < 1$$`,
    link: { url: '/probability/distributions/discrete#bernoulli', text: 'Bernoulli Trial' },
    fields: {
      intuition: `A single experiment with exactly two outcomes — success (1) or failure (0) — where the probability of success is $p$. The simplest building block for more complex discrete models. A sequence of independent Bernoulli trials with the same $p$ underlies the binomial distribution.`,
      notation: `- $X \\sim \\operatorname{Bernoulli}(p)$\n- $E[X] = p$, $\\operatorname{Var}(X) = p(1-p)$`,
    }
  },
 
  {
    id: 'binomial',
    name: 'Binomial Distribution',
    category: 'Discrete Distributions',
    formula: `$$P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}, \\quad k = 0,1,\\ldots,n$$`,
    link: { url: '/probability/distributions/discrete/binomial', text: 'Binomial Distribution' },
    fields: {
      intuition: `Counts the number of successes in $n$ independent Bernoulli trials, each with success probability $p$. The go-to model for repeated yes/no experiments with a fixed number of trials.`,
      notation: `- $X \\sim B(n,p)$ or $\\operatorname{Binomial}(n,p)$\n- $n$ — number of trials, $p$ — success probability per trial\n- $E[X] = np$, $\\operatorname{Var}(X) = np(1-p)$`,
    }
  },
 
  {
    id: 'geometric',
    name: 'Geometric Distribution',
    category: 'Discrete Distributions',
    formula: `$$P(X = k) = (1-p)^{k-1}p, \\quad k = 1, 2, 3, \\ldots$$`,
    link: { url: '/probability/distributions/discrete/geometric', text: 'Geometric Distribution' },
    fields: {
      intuition: `The number of independent Bernoulli trials until the first success. Has the memoryless property: the distribution of remaining trials does not depend on how many have already failed.`,
      notation: `- $X \\sim \\operatorname{Geometric}(p)$\n- $E[X] = 1/p$, $\\operatorname{Var}(X) = (1-p)/p^2$\n- Memoryless: $P(X > m+n \\mid X > m) = P(X > n)$`,
    }
  },
 
  {
    id: 'poisson',
    name: 'Poisson Distribution',
    category: 'Discrete Distributions',
    formula: `$$P(X = k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}, \\quad k = 0,1,2,\\ldots$$`,
    link: { url: '/probability/distributions/discrete/poisson', text: 'Poisson Distribution' },
    fields: {
      intuition: `Models the number of events occurring in a fixed interval of time or space when events happen independently at a constant average rate $\\lambda$. Arises as the limit of $B(n,p)$ when $n \\to \\infty$ and $np \\to \\lambda$.`,
      notation: `- $X \\sim \\operatorname{Poisson}(\\lambda)$\n- $\\lambda$ — the rate parameter (mean number of events)\n- $E[X] = \\lambda$, $\\operatorname{Var}(X) = \\lambda$ (mean equals variance)`,
    }
  },
 
  {
    id: 'hypergeometric',
    name: 'Hypergeometric Distribution',
    category: 'Discrete Distributions',
    formula: `$$P(X = k) = \\frac{\\dbinom{K}{k}\\dbinom{N-K}{n-k}}{\\dbinom{N}{n}}$$`,
    link: { url: '/probability/distributions/discrete/hypergeometric', text: 'Hypergeometric Distribution' },
    fields: {
      intuition: `Models draws without replacement from a finite population of $N$ items containing $K$ successes. Unlike the binomial, each draw changes the composition of what remains, so draws are not independent.`,
      notation: `- $X \\sim \\operatorname{Hypergeometric}(N, K, n)$\n- $N$ — population size, $K$ — number of successes in population, $n$ — sample size\n- $E[X] = nK/N$`,
    }
  },
 
  {
    id: 'negative_binomial',
    name: 'Negative Binomial Distribution',
    category: 'Discrete Distributions',
    formula: `$$P(X = k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}, \\quad k = r, r+1, \\ldots$$`,
    link: { url: '/probability/distributions/discrete/negative-binomial', text: 'Negative Binomial Distribution' },
    fields: {
      intuition: `The number of independent Bernoulli trials needed to achieve the $r$-th success. Generalizes the geometric distribution ($r=1$). Models scenarios where a fixed number of successes must accumulate.`,
      notation: `- $X \\sim \\operatorname{NegBin}(r,p)$\n- $r$ — target number of successes, $p$ — success probability per trial\n- $E[X] = r/p$, $\\operatorname{Var}(X) = r(1-p)/p^2$`,
    }
  },
 
  {
    id: 'discrete_uniform',
    name: 'Discrete Uniform Distribution',
    category: 'Discrete Distributions',
    formula: `$$P(X = k) = \\frac{1}{b - a + 1}, \\quad k \\in \\{a, a+1, \\ldots, b\\}$$`,
    link: { url: '/probability/distributions/discrete/uniform#1', text: 'Discrete Uniform Distribution' },
    fields: {
      intuition: `Every value in the range $\\{a, a+1, \\ldots, b\\}$ is equally probable. The discrete model of complete uncertainty within a finite range. The die roll is the canonical example.`,
      notation: `- $X \\sim \\operatorname{DUnif}(a,b)$\n- $n = b - a + 1$ — number of values\n- $E[X] = (a+b)/2$, $\\operatorname{Var}(X) = (n^2-1)/12$`,
    }
  },
 
  // ─── CONTINUOUS DISTRIBUTIONS ────────────────────────────────────────────
 
  {
    id: 'normal',
    name: 'Normal Distribution',
    category: 'Continuous Distributions',
    formula: `$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,\\exp\\!\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)$$`,
    link: { url: '/probability/distributions/continuous/normal', text: 'Normal Distribution' },
    fields: {
      intuition: `A symmetric bell-shaped distribution centered at $\\mu$, with spread controlled by $\\sigma$. Central to probability through the Central Limit Theorem: sums of many independent random variables converge to a normal distribution.`,
      notation: `- $X \\sim N(\\mu, \\sigma^2)$\n- $\\mu$ — mean (center), $\\sigma^2$ — variance (spread)\n- Standard normal: $Z \\sim N(0,1)$, obtained via $Z = (X-\\mu)/\\sigma$`,
      properties: `- Mean = median = mode = $\\mu$\n- Symmetric about $\\mu$\n- $68\\%$ of mass within $1\\sigma$; $95\\%$ within $2\\sigma$; $99.7\\%$ within $3\\sigma$`,
    }
  },
 
  {
    id: 'exponential',
    name: 'Exponential Distribution',
    category: 'Continuous Distributions',
    formula: `$$f(x) = \\lambda e^{-\\lambda x}, \\quad x \\geq 0$$`,
    link: { url: '/probability/distributions/continuous/exponential', text: 'Exponential Distribution' },
    fields: {
      intuition: `Models the waiting time between independent events occurring at a constant average rate $\\lambda$. Has the memoryless property: $P(X > s + t \\mid X > s) = P(X > t)$.`,
      notation: `- $X \\sim \\operatorname{Exp}(\\lambda)$\n- $\\lambda$ — rate parameter; $1/\\lambda$ — mean waiting time\n- $E[X] = 1/\\lambda$, $\\operatorname{Var}(X) = 1/\\lambda^2$`,
      properties: `- The only continuous memoryless distribution\n- CDF: $F(x) = 1 - e^{-\\lambda x}$\n- Continuous analog of the geometric distribution`,
    }
  },
 
  {
    id: 'continuous_uniform',
    name: 'Continuous Uniform Distribution',
    category: 'Continuous Distributions',
    formula: `$$f(x) = \\frac{1}{b-a}, \\quad x \\in [a,b]$$`,
    link: { url: '/probability/distributions/continuous/uniform', text: 'Continuous Uniform Distribution' },
    fields: {
      intuition: `All points in $[a,b]$ are equally likely in the sense of equal density. Probability is proportional to interval length: $P(c \\leq X \\leq d) = (d-c)/(b-a)$. The continuous model of complete uncertainty over an interval.`,
      notation: `- $X \\sim U(a,b)$ or $\\operatorname{Unif}(a,b)$\n- $E[X] = (a+b)/2$, $\\operatorname{Var}(X) = (b-a)^2/12$`,
    }
  },
 
  // ─── INEQUALITIES & LIMIT THEOREMS ───────────────────────────────────────
 
  {
    id: 'markov',
    name: "Markov's Inequality",
    category: 'Inequalities & Limit Theorems',
    formula: `$$P(X \\geq a) \\leq \\frac{E[X]}{a}, \\quad X \\geq 0,\\; a > 0$$`,
    link: { url: '/probability/inequalities/markov#2', text: "Markov's Inequality — Statement" },
    fields: {
      intuition: `An upper bound on the probability that a non-negative random variable exceeds a threshold, using only its expected value. Extremely general — requires no knowledge of the distribution's shape — but typically a loose bound.`,
      properties: `- Requires: $X \\geq 0$ and $E[X]$ finite\n- The bound $E[X]/a$ is tight: it is achieved by a two-point distribution\n- Used to derive Chebyshev's inequality and many limit theorems`,
    }
  },
 
  {
    id: 'chebyshev',
    name: "Chebyshev's Inequality",
    category: 'Inequalities & Limit Theorems',
    formula: `$$P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$`,
    link: { url: '/probability/inequalities/chebyshev#2', text: "Chebyshev's Inequality — Statement" },
    fields: {
      intuition: `Bounds the probability of deviating from the mean by more than $k$ standard deviations, using only the mean and variance. Tighter than Markov's inequality because it uses more information. Applies to any distribution with finite variance.`,
      notation: `- Equivalently: $P(|X-\\mu| \\geq \\varepsilon) \\leq \\sigma^2/\\varepsilon^2$\n- $k=2$: at most $25\\%$ of mass outside $2\\sigma$\n- $k=3$: at most $11\\%$ outside $3\\sigma$`,
      properties: `- Requires: finite mean $\\mu$ and finite variance $\\sigma^2$\n- Distribution-free — no assumption on the shape of $X$\n- Derived from Markov's inequality applied to $(X-\\mu)^2$`,
    }
  },
 
  {
    id: 'central_limit_theorem',
    name: 'Central Limit Theorem',
    category: 'Inequalities & Limit Theorems',
    formula: `$$\\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} \\xrightarrow{\\,d\\,} N(0,1) \\quad\\text{as } n \\to \\infty$$`,
    link: { url: '/probability/central-limit-theorem', text: 'Central Limit Theorem' },
    fields: {
      intuition: `The normalized sum (or average) of a large number of independent, identically distributed random variables with finite mean and variance converges in distribution to the standard normal — regardless of the original distribution. Explains why the normal distribution appears so widely in practice.`,
      notation: `- $\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i$ — sample mean\n- $\\mu = E[X_i]$, $\\sigma^2 = \\operatorname{Var}(X_i)$\n- $\\xrightarrow{d}$ — convergence in distribution`,
      properties: `- Requires: i.i.d. sequence with $\\mu$ and $\\sigma^2$ both finite\n- Does not require the $X_i$ to be normally distributed\n- Approximation improves as $n$ grows; commonly considered adequate at $n \\geq 30$`,
    }
  },
 
  {
    id: 'law_of_large_numbers',
    name: 'Law of Large Numbers',
    category: 'Inequalities & Limit Theorems',
    formula: `$$\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i \\xrightarrow{\\,p\\,} \\mu \\quad\\text{as } n \\to \\infty$$`,
    link: { url: '/probability/large-numbers-law', text: 'Law of Large Numbers' },
    fields: {
      intuition: `As the number of independent trials grows, the sample mean converges to the true mean. Formalizes the intuition that long-run frequencies stabilize. The expected value can be understood as the long-run average.`,
      notation: `- $\\xrightarrow{p}$ — convergence in probability (weak LLN)\n- $\\xrightarrow{a.s.}$ — almost sure convergence (strong LLN)\n- Both require i.i.d. variables with finite mean $\\mu$`,
      properties: `- Weak LLN: $P(|\\bar{X}_n - \\mu| > \\varepsilon) \\to 0$ for any $\\varepsilon > 0$\n- Strong LLN: $\\bar{X}_n \\to \\mu$ with probability 1\n- Does not describe the rate of convergence (that is the CLT's role)`,
    }
  },
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