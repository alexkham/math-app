const probabilityTermsList = [
    {
      name: "Probability",
      formula: "A measure of the likelihood that a specific event will occur, expressed as a value between 0 and 1.",
      fields: [],
      category: "Basic Definitions"
    },
    {
      name: "Random Experiment",
      formula: "A process or action that produces uncertain outcomes, such as rolling a die or tossing a coin.",
      fields: [],
      category: "Basic Definitions"
    },
    {
      name: "Sample Space",
      formula: "The set of all possible outcomes of a random experiment.",
      fields: [],
      category: "Basic Definitions"
    },
    {
      name: "Event",
      formula: "A subset of the sample space, representing one or more outcomes of interest in a random experiment.",
      fields: [],
      category: "Basic Definitions"
    },
    {
      name: "Elementary Event",
      formula: "A single outcome from the sample space that cannot be decomposed further.",
      fields: [],
      category: "Basic Definitions"
    },
    {
      name: "Set Operations",
      formula: "Mathematical operations (like union, intersection, and complement) used to combine or relate sets.",
      fields: [],
      category: "Set Operations"
    },
    {
      name: "Null Set",
      formula: "A set with no elements, representing an impossible event in probability.",
      fields: [],
      category: "Set Operations"
    },
    {
      name: "Union of Sets",
      formula: "A set that contains all elements from either or both of the sets being combined.",
      fields: [],
      category: "Set Operations"
    },
    {
      name: "Intersection of Sets",
      formula: "A set containing only the elements that are common to all sets being compared.",
      fields: [],
      category: "Set Operations"
    },
    {
      name: "Disjoint Sets",
      formula: "Sets that have no elements in common.",
      fields: [],
      category: "Set Operations"
    },
    {
      name: "Venn Diagram",
      formula: "A graphical representation of sets and their relationships using overlapping circles.",
      fields: [],
      category: "Set Operations"
    },
    {
      name: "Complement of a Set",
      formula: "The set of elements in the sample space that are not in the given set.",
      fields: [],
      category: "Set Operations"
    },
    {
      name: "De Morgan's Laws",
      formula: "Mathematical rules relating the complement of a union or intersection of sets to the intersection or union of their complements.",
      fields: [],
      category: "Set Operations"
    },
    {
      name: "Relative Frequency",
      formula: "The ratio of the number of times an event occurs to the total number of trials or observations.",
      fields: [],
      category: "Basic Probability"
    },
    {
      name: "Probability Measure",
      formula: "A function assigning a probability value to events within a sample space while satisfying certain axioms.",
      fields: [],
      category: "Basic Probability"
    },
    {
      name: "Axiomatic Probability",
      formula: "A formal framework defining probability using a set of axioms ensuring logical consistency.",
      fields: [],
      category: "Basic Probability"
    },
    {
      name: "Elementary Properties of Probability",
      formula: "Basic rules of probability, including values between 0 and 1, and relationships between events like union and intersection.",
      fields: [],
      category: "Basic Probability"
    },
    {
      name: "Equally Likely Events",
      formula: "Events with the same probability of occurrence in an experiment.",
      fields: [],
      category: "Basic Probability"
    },
    {
      name: "Conditional Probability",
      formula: "The probability of one event occurring given that another event has occurred.",
      fields: [],
      category: "Conditional Probability"
    },
    {
      name: "Bayes' Rule",
      formula: "A formula to update the probability of an event based on new information about related events.",
      fields: [],
      category: "Conditional Probability"
    },
    {
      name: "Total Probability",
      formula: "A theorem that expresses the probability of an event as the sum of probabilities of it occurring under different conditions.",
      fields: [],
      category: "Conditional Probability"
    },
    {
      name: "Independent Events",
      formula: "Events whose occurrences are not influenced by each other.",
      fields: [],
      category: "Basic Probability"
    },
    {
      name: "Mutual Exclusiveness",
      formula: "A condition where two or more events cannot occur simultaneously.",
      fields: [],
      category: "Basic Probability"
    },
    {
      name: "Bonferroni's Inequality",
      formula: "A relationship providing bounds for the probability of the union of events.",
      fields: [],
      category: "Inequalities"
    },
    {
      name: "Boole's Inequality",
      formula: "An upper bound on the probability of the union of several events.",
      fields: [],
      category: "Inequalities"
    },
    {
      name: "Bernoulli Experiment",
      formula: "A random experiment with exactly two possible outcomes, typically labeled as success and failure.",
      fields: [],
      category: "Random Variables"
    },
    {
      name: "Sequence of Bernoulli Trials",
      formula: "Repeated independent Bernoulli experiments where the probability of success remains constant across trials.",
      fields: [],
      category: "Random Variables"
    },
    {
      name: "Random Variable",
      formula: "A function that assigns numerical values to outcomes in a sample space, enabling the study of probabilities of events.",
      fields: [],
      category: "Random Variables"
    },
    {
      name: "Cumulative Distribution Function",
      formula: "A function that gives the probability that a random variable is less than or equal to a given value.",
      fields: [],
      category: "Distribution Functions"
    },
    {
      name: "Probability Mass Function",
      formula: "A function that specifies the probability of each possible value for a discrete random variable.",
      fields: [],
      category: "Distribution Functions"
    },
    {
      name: "Probability Density Function",
      formula: "A function describing the likelihood of a continuous random variable taking on a specific value within an interval.",
      fields: [],
      category: "Distribution Functions"
    },
    {
      name: "Discrete Random Variable",
      formula: "A random variable with a countable set of possible values.",
      fields: [],
      category: "Random Variables"
    },
    {
      name: "Continuous Random Variable",
      formula: "A random variable with an uncountable set of values, typically forming an interval on the real number line.",
      fields: [],
      category: "Random Variables"
    },
    {
      name: "Expected Value",
      formula: "The weighted average of all possible values of a random variable, reflecting its long-term average.",
      fields: [],
      category: "Statistical Measures"
    },
    {
      name: "Variance",
      formula: "A measure of the spread or dispersion of a random variable, calculated as the average squared deviation from the mean.",
      fields: [],
      category: "Statistical Measures"
    },
    {
      name: "Standard Deviation",
      formula: "The square root of the variance, providing a measure of spread in the same units as the random variable.",
      fields: [],
      category: "Statistical Measures"
    },
    {
      name: "Bernoulli Distribution",
      formula: "A discrete distribution describing the outcome of a single trial with two possible outcomes, success and failure.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Binomial Distribution",
      formula: "A discrete distribution of the number of successes in a fixed number of independent Bernoulli trials.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Poisson Distribution",
      formula: "A discrete distribution modeling the number of events occurring in a fixed interval, assuming events occur independently.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Uniform Distribution",
      formula: "A distribution where all outcomes in a specified range are equally likely.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Exponential Distribution",
      formula: "A continuous distribution describing the time between events in a Poisson process, with the memoryless property.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Normal Distribution",
      formula: "A continuous distribution characterized by its bell-shaped curve, symmetric about the mean.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Rayleigh Distribution",
      formula: "A continuous distribution often used in signal processing, describing the magnitude of a vector in two dimensions.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Gamma Distribution",
      formula: "A continuous distribution that generalizes the exponential distribution, used in reliability and queuing models.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Markov Property",
      formula: "The memoryless property where the future state depends only on the current state and not on past states.",
      fields: [],
      category: "Advanced Concepts"
    },
    {
      name: "Central Limit Theorem",
      formula: "A theorem stating that the sum of many independent random variables tends toward a normal distribution, regardless of the original distributions.",
      fields: [],
      category: "Advanced Concepts"
    },
    {
      name: "Hypergeometric Distribution",
      formula: "A discrete distribution describing probabilities in draws without replacement from a finite population.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Geometric Distribution",
      formula: "A discrete distribution representing the number of trials needed to get the first success in repeated Bernoulli trials.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Chebyshev's Inequality",
      formula: "A statistical inequality providing a bound on the probability that a random variable deviates from its mean.",
      fields: [],
      category: "Inequalities"
    },
    {
      name: "Markov Inequality",
      formula: "An inequality bounding the probability of a non-negative random variable exceeding a given value.",
      fields: [],
      category: "Inequalities"
    },
    {
      name: "Bivariate Random Variable",
      formula: "A pair of random variables considered together, forming a two-dimensional vector defined on the same sample space.",
      fields: [],
      category: "Multivariate Probability"
    },
    {
      name: "Joint Cumulative Distribution Function",
      formula: "A function that gives the probability that two random variables simultaneously take on values less than or equal to specific values.",
      fields: [],
      category: "Multivariate Probability"
    },
    {
      name: "Marginal Distribution",
      formula: "The probability distribution of one random variable obtained by summing or integrating out the other variable in a joint distribution.",
      fields: [],
      category: "Multivariate Probability"
    },
    {
      name: "Joint Probability Mass Function",
      formula: "A function giving the probability that two discrete random variables simultaneously take on specific values.",
      fields: [],
      category: "Multivariate Probability"
    },
    {
      name: "Joint Probability Density Function",
      formula: "A function representing the probability density of two continuous random variables taking on specific values.",
      fields: [],
      category: "Multivariate Probability"
    },
    {
      name: "Covariance",
      formula: "A measure of how two random variables change together, indicating the direction of their relationship.",
      fields: [],
      category: "Statistical Measures"
    },
    {
      name: "Correlation Coefficient",
      formula: "A normalized measure of the linear relationship between two variables, ranging from -1 to 1.",
      fields: [],
      category: "Statistical Measures"
    },
    {
      name: "Conditional Probability Mass Function",
      formula: "The probability distribution of a discrete random variable given that another discrete random variable takes a specific value.",
      fields: [],
      category: "Conditional Probability"
    },
    {
      name: "Conditional Probability Density Function",
      formula: "The probability density of a continuous random variable given that another continuous random variable takes a specific value.",
      fields: [],
      category: "Conditional Probability"
    },
    {
      name: "Conditional Expectation",
      formula: "The expected value of one random variable given the value of another random variable.",
      fields: [],
      category: "Statistical Measures"
    },
    {
      name: "Conditional Variance",
      formula: "The variance of a random variable given that another random variable takes on a specific value.",
      fields: [],
      category: "Statistical Measures"
    },
    {
      name: "N-Variate Random Variables",
      formula: "A set of multiple random variables considered as a vector, defining a multi-dimensional space.",
      fields: [],
      category: "Multivariate Probability"
    },
    {
      name: "Multinomial Distribution",
      formula: "A generalization of the binomial distribution for more than two possible outcomes in each trial.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Bivariate Normal Distribution",
      formula: "A distribution where two continuous random variables are jointly normally distributed.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "N-Variate Normal Distribution",
      formula: "A generalization of the bivariate normal distribution to more than two dimensions.",
      fields: [],
      category: "Probability Distributions"
    },
    {
      name: "Independent Random Variables",
      formula: "Random variables whose outcomes do not influence each other's probabilities.",
      fields: [],
      category: "Random Variables"
    },
    {
      name: "Orthogonal Random Variables",
      formula: "Random variables with zero covariance, indicating no linear relationship.",
      fields: [],
      category: "Random Variables"
    },
    {
      name: "Uncorrelated Random Variables",
      formula: "Random variables with zero correlation coefficient, implying no linear relationship.",
      fields: [],
      category: "Random Variables"
    },
    {
      name: "Moment of a Random Variable",
      formula: "A quantitative measure of the shape of the variable's probability distribution, derived as the expected value of its powers.",
      fields: [],
      category: "Statistical Measures"
    },
    {
      name: "Central Limit Theorem for N-Variate",
      formula: "A theorem stating that the sum of multiple independent random variables approximates a multivariate normal distribution under certain conditions.",
      fields: [],
      category: "Advanced Concepts"
    },
    {
      name: "Function of a Random Variable",
      formula: "A rule that assigns a new random variable based on a transformation of an existing one, typically denoted as Y=g(X).",
      fields: [],
      category: "Advanced Concepts"
    },
    {
      name: "Probability Density Function of a Transformed Variable",
      formula: "The function that describes the distribution of probabilities for a random variable obtained through transformation.",
      fields: [],
      category: "Distribution Functions"
    },
    {
      name: "Moment Generating Function",
      formula: "A function used to describe all moments of a random variable, defined as the expected value of e^(tX) for a real parameter t.",
      fields: [],
      category: "Advanced Concepts"
    },
    {
      name: "Characteristic Function",
      formula: "The Fourier transform of a probability distribution, useful for studying the properties and behaviors of random variables.",
      fields: [],
      category: "Advanced Concepts"
  },
  {
    name: "Weak Law of Large Numbers",
    formula: "A theorem stating that the sample mean of independent, identically distributed random variables converges in probability to their true mean as the sample size increases.",
    fields: [],
    category: "Advanced Concepts"
  },
  {
    name: "Strong Law of Large Numbers",
    formula: "A theorem that states the sample mean almost surely converges to the true mean as the sample size grows infinitely large.",
    fields: [],
    category: "Advanced Concepts"
  },
  {
    name: "Central Limit Theorem",
    formula: "A fundamental result in probability theory stating that the sum of a large number of independent, identically distributed random variables will be approximately normally distributed.",
    fields: [],
    category: "Advanced Concepts"
  }
];

export default probabilityTermsList;