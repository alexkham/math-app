const probabilityFormulaList = [
    {
        name: "Simple Probability",
        formula: "$P(A) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}}$",
        fields: {
            "Explanation": "Calculates the probability of event A happening when all outcomes are equally likely, quantifying how likely a specific event is to occur.",
            "$P(A)$": "Probability of event A occurring.",
            "$A$": "Event whose probability is being calculated.",
            "Number of favorable outcomes": "Count of outcomes that qualify as event A occurring.",
            "Total number of possible outcomes": "Count of all possible outcomes in the sample space.",
            "Example": "Flipping a fair coin, probability of heads: $P(Heads) = \\frac{1}{2}$",
            "Use Cases": "Simple games of chance, basic statistical calculations."
        },
        category: "Basic Principles"
    },
    {
        name: "Probability Range of an Event",
        formula: ` $0 \\leq P(A) \\leq 1$ `,
        fields: {
            "Explanation": "The probability of any event is quantified on a scale from 0 to 1, inclusive. A probability of 0 indicates an event is impossible and will not occur under any circumstances. A probability of 1 indicates an event is certain to occur. Probabilities between 0 and 1 indicate the likelihood of the event's occurrence, with values closer to 1 suggesting a higher probability and values closer to 0 suggesting a lower probability.",
            "$A$":"Event ",
            "$P(A)$":"Prabability of $A$.",
            "Example": "0 - Rolling a 7 on a standard six-sided die; 1 - Drawing any card from a full deck of cards; Between 0 and 1 - Flipping a coin and it landing on heads, which has a probability of 0.5.",
            "Use Cases": "This fundamental concept is used in all fields involving probability calculations, including statistics, risk assessment, finance, science, and engineering."
        },
        category: "Basic Principles"
    },
    
    {
        name: "Complement Rule",
        formula: "$P(A') + P(A) = 1$",
        fields: {
            "Explanation": "States that the probability of an event occurring plus the probability of its complement (the event not occurring) equals one. This is because the event and its complement together encompass all possible outcomes.",
            "$P(A')$": "Probability of the complement of event A, which is the event not occurring.",
            "$P(A)$": "Probability of event A occurring.",
            "Example": "If there is a 30% chance it will rain tomorrow (P(A) = 0.30), then there is a 70% chance it will not rain (P(A') = 0.70).",
            "Formula Derivation": "Derived from the definition of probability space, where the total probability is 1. Thus, $P(A') = 1 - P(A)$.",
            "Use Cases": "Frequently used to simplify calculations where it is easier to calculate the chance of something not happening rather than it happening, such as in quality control or risk assessment scenarios."
        },
        category: "Basic Principles"
    },
    // {
    //     name: "Addition Rule for Mutually Exclusive (Disjoint) Events",
    //     formula: "$P(A \\cup B) = P(A) + P(B)$",
    //     fields: {
    //         "Explanation": "Calculates the probability of either of two mutually exclusive events occurring, summing their individual probabilities since they cannot happen simultaneously.",
    //         "$P(A), P(B)$": "Probabilities of mutually exclusive events A and B occurring independently.",
    //         "$A, B$": "Mutually exclusive events; cannot both occur at the same time.",
    //         "Example": "Rolling a die, probability of rolling a 2 or a 5: $P(2 \\cup 5) = \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$",
    //         "Use Cases": "Scenarios where no two events can happen at the same time."
    //     },
    //     category: "Disjoint Events"
    // },
    // {
    //     name: "Multiplication Rule for Independent Events",
    //     formula: "$P(A \\cap B) = P(A) \\times P(B)$",
    //     fields: {
    //         "Explanation": "Calculates the probability of both events A and B occurring simultaneously, assuming the events do not influence each other.",
    //         "$P(A), P(B)$": "Probabilities of independent events A and B occurring independently.",
    //         "$A, B$": "Independent events; occurrence of one does not affect the occurrence of the other.",
    //         "Example": "Flipping two coins, both being heads: $P(Heads \\cap Heads) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$",
    //         "Use Cases": "Analyzing scenarios with multiple independent trials."
    //     },
    //     category: "Independent Events"
    // },
   

    {
        name: "Conditional Probability Basic Formula",
        formula: "$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$",
        fields: {
            "Explanation": "Measures the probability of event A occurring given that event B has already occurred, assessing how B influences A.",
            "$P(A \\cap B)$": "Probability of both events A and B happening together.",
            "$P(A), P(B)$": "Probabilities of A and B where B's occurrence affects the likelihood of A.",
            "Example": "Drawing two cards, probability second card is an ace given the first was an ace: $P(Ace_2 \\mid Ace_1) = \\frac{3}{51}$",
            "Use Cases": "Situations where prior information about one event affects the outcome of another."
        },
        category: "Conditional Probability"
    },
    {
        name: "Bayes' Theorem",
        formula: "$P(A \\mid B) = \\frac{P(B \\mid A) \\times P(A)}{P(B)}$",
        fields: {
            "Explanation": "Updates the probability of event A occurring based on the occurrence of event B, integrating prior belief (prior probability) with new evidence.",
            "$P(A), P(B), P(B \\mid A)$": "Initial or prior probability of A occurring, overall probability of B, and probability of B given A.",
            "$A, B$": "Events where B's occurrence provides evidence about A's likelihood.",
            "Example": "Disease with 1% prevalence, 99% sensitive test, probability of disease given a positive test: Calculated using Bayes' Theorem.",
            "Use Cases": "Medical testing, machine learning algorithms, updating predictions with new information."
        },
        category: "Advanced Probabilities"
    },
    {
        name: "Probability of Both Events Occurring (Multiplication Rule)",
        formula: "$P(A \\cap B) = P(A) \\times P(B)$",
        fields: {
            "Explanation": "Calculates the probability that both events A and B occur simultaneously. It assumes that A and B are independent, meaning the occurrence of A does not affect the occurrence of B, and vice versa.",
            "$P(A \\cap B)$": "Probability of both events A and B occurring together.",
            "$P(A)$, $P(B)$": "Probability of event A occurring independently, and probability of event B occurring independently.",
            "Example": "Flipping two fair coins, the probability of both being heads: $P(Heads \\cap Heads) = P(Heads) \\times P(Heads) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$",
            "Use Cases": "Used in scenarios involving multiple independent trials or events."
        },
        category: "Independent Events"
    },
    {
        name: "Probability of Either Event Occurring (Addition Rule)",
        formula: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
        fields: {
            "Explanation": "This rule calculates the probability that at least one of the events A or B occurs, adjusting for the overlap by subtracting the probability of both occurring together.",
            "$P(A \\cup B)$": "Probability of either event A or event B occurring.",
            "Adjusted Formula for Independence": "$P(A \\cup B) = P(A) + P(B) - P(A) \\times P(B)$",
            "Example": "For rolling a die, the probability of rolling a 2 or a 5: $P(2 \\cup 5) = P(2) + P(5) - P(2) \\times P(5) = \\frac{1}{6} + \\frac{1}{6} - \\frac{1}{6} \\times \\frac{1}{6} = \\frac{11}{36}$",
            "Use Cases": "Useful in evaluating the likelihood of multiple possible outcomes where events are independent."
        },
        category: "Independent Events"
    },
    {
        name: "Probability of At Least One Event Not Occurring",
        formula: "$P(\\neg A \\cap \\neg B) = P(\\neg A) \\times P(\\neg B)$",
        fields: {
            "Explanation": "Calculates the probability that neither event A nor event B occurs, using the complement rule for each event.",
            "$P(\\neg A \\cap \\neg B)$": "Probability of neither event A nor event B occurring.",
            "$P(\\neg A)$, $P(\\neg B)$": "Complements of probabilities of A and B occurring, respectively.",
            "Example": "If the probability of rain on any given day is 0.20, then the probability of no rain for two independent days is: $P(\\neg Rain1 \\cap \\neg Rain2) = (1 - 0.20) \\times (1 - 0.20) = 0.64$",
            "Use Cases": "Important in scenarios where the non-occurrence of multiple independent events is critical, such as in reliability engineering."
        },
        category: "Independent Events"
    },
    {
        name: "Probability of Exactly One Event Occurring",
        formula: "$P(\\text{exactly one of } A \\text{ or } B) = P(A \\cap \\neg B) + P(\\neg A \\cap B)$",
        fields: {
            "Explanation": "Determines the probability of exactly one of the two events occurring, not both.",
            "Detailed Formula": "For independent events: $P(\\text{exactly one of } A \\text{ or } B) = P(A) \\times (1 - P(B)) + (1 - P(A)) \\times P(B)$",
            "Example": "Using a deck of cards, the probability that one draws an ace or a king, but not both: $P(Ace \\cap \\neg King) + P(\\neg Ace \\cap King)$",
            "Use Cases": "Used in analytical models where exclusive outcomes are analyzed."
        },
        category: "Independent Events"
    },
    {
        name: "General Formula for Multiple Independent Events",
        formula: "$P(A \\cap B \\cap C) = P(A) \\times P(B) \\times P(C)$",
        fields: {
            "Explanation": "Extends the multiplication rule to any number of events, calculating the probability that all specified independent events occur.",
            "$P(A \\cap B \\cap C)$": "Probability of events A, B, and C all occurring together.",
            "$P(A)$, $P(B)$, $P(C)$": "Individual Probabilities of $A$,$B$ and $C$ .",
            "Example": "For three independent events each with a 50% chance of occurring, the probability of all occurring is: $0.5 \\times 0.5 \\times 0.5 = 0.125$",
            "Use Cases": "Applicable in complex systems where multiple independent events must be simultaneously considered, such as in network reliability."
        },
        category: "Independent Events"
    },
    {
        name: "Probability of Both Disjoint Events Occurring",
        formula: "$P(A \\cap B) = 0$",
        fields: {
            "Explanation": `Since disjoint events cannot occur simultaneously, the probability of both occurring at the same time is zero.
             This formula pretty much holds the essense of disjoint events definition : chance that both of them happen is equal to zero.  `,
            "$P(A \\cap B)$": "Probability of both disjoint events A and B occurring together.",
            "Example": "If event A is drawing a heart from a deck of cards and event B is drawing a spade, since one draw cannot be both a heart and a spade, $P(A \\cap B) = 0$.",
            "Use Cases": "Applicable in any scenario where two or more outcomes are mutually exclusive."
        },
        category: "Disjoint Events"
    },
    {
        name: "Probability of Either Disjoint Event Occurring (Addition Rule)",
        formula: "$P(A \\cup B) = P(A) + P(B)$",
        fields: {
            "Explanation": "The probability of either disjoint event occurring is the sum of their individual probabilities, because there is no overlap between them.",
            "$P(A \\cup B)$": "Probability of either disjoint event A or event B occurring.",
            "Example": "If event A is drawing a heart (25% chance) and event B is drawing a spade (25% chance) from a deck, $P(A \\cup B) = 25% + 25% = 50%$.",
            "Use Cases": "Useful in determining the likelihood of one of several exclusive events occurring."
        },
        category: "Disjoint Events"
    },
    {
        name: "Probability of Neither Disjoint Event Occurring",
        formula: "$P(\\neg A \\cap \\neg B) = P(\\neg A) \\times P(\\neg B)$",
        fields: {
            "Explanation": "Calculates the probability that neither disjoint event occurs, assuming each event’s non-occurrence is independent of the other.",
            "$P(\\neg A \\cap \\neg B)$": "Probability of neither disjoint event A nor event B occurring.",
            "Example": "If the probability of not drawing a heart is 75% and not drawing a spade is 75%, then $P(\\neg A \\cap \\neg B) = 75% \\times 75% = 56.25%$.",
            "Use Cases": "Important for risk assessment and contingency planning in mutually exclusive scenarios."
        },
        category: "Disjoint Events"
    },
    {
        name: "Conditional Probability for Disjoint Events",
        formula: "$P(A \\mid B) = 0$ and $P(B \\mid A) = 0$",
        fields: {
            "Explanation": "If one disjoint event occurs, the other cannot possibly happen, thus the conditional probability is zero.",
            "$P(A \\mid B)$ and $P(B \\mid A)$": "Probability of A given B and probability of B given A, respectively, for disjoint events.",
            "Example": "If event A has already occurred (e.g., a heart was drawn), the probability of event B (drawing a spade) occurring is 0.",
            "Use Cases": "Used in scenarios where the occurrence of one outcome precludes the occurrence of others."
        },
        category: "Disjoint Events"
    },
    {
        name: "Generalization to Multiple Disjoint Events",
        formula: "$P(A \\cup B \\cup C \\cup \\ldots) = P(A) + P(B) + P(C) + \\ldots$",
        fields: {
            "Explanation": "For multiple disjoint events, the probability of any event occurring is the sum of the probabilities of each event.",
            "Extended Formula": "General formula for the union of multiple disjoint events.",
            "Example": "The probability of drawing a heart, a spade, or a diamond from a deck of cards.",
            "Use Cases": "Useful in complex scenarios involving several mutually exclusive outcomes."
        },
        category: "Disjoint Events"
    },
    {
        name: "Probability Mass Function (PMF)",
        formula: "$P(X = k) = \\binom{n}{k} p^{k} (1 - p)^{n - k}$",
        fields: {
            "Explanation": "Calculates the probability of exactly $k$ successes in $n$ independent Bernoulli trials, each with success probability $p$.",
            "$P(X = k)$": "Probability of getting exactly $k$ successes.",
            "$\\binom{n}{k}$": "Binomial coefficient representing the number of ways to choose $k$ successes from $n$ trials.",
            "$n$": "Total number of trials.",
            "$k$": "Number of successful trials.",
            "$p$": "Probability of success on a single trial.",
            "$1 - p$": "Probability of failure on a single trial.",
            "Example": "If $n = 5$, $p = 0.6$, and $k = 3$, then $P(X = 3) = \\binom{5}{3} (0.6)^3 (0.4)^2 \\approx 0.3456$.",
            "Use Cases": "Used to find the likelihood of a specific number of successes in processes like quality control, clinical trials, and survey analysis."
        },
        category: "Binomial Distribution"
    },
    {
        name: "Cumulative Distribution Function (CDF)",
        formula: "$P(X \\leq k) = \\sum_{i=0}^{k} \\binom{n}{i} p^{i} (1 - p)^{n - i}$",
        fields: {
            "Explanation": "Calculates the probability of obtaining at most $k$ successes in $n$ trials.",
            "$P(X \\leq k)$": "Probability of getting $k$ or fewer successes.",
            "$\\sum_{i=0}^{k}$": "Summation from $i = 0$ to $i = k$.",
            "Variables": "All other variables are as previously defined in the PMF.",
            "Example": "For $n = 5$, $p = 0.6$, and $k = 3$, $P(X \\leq 3)$ sums the probabilities for $k = 0$ to $k = 3$.",
            "Use Cases": "Assessing cumulative probabilities in risk assessment and reliability engineering."
        },
        category: "Binomial Distribution"
    },
    {
        name: "Mean (Expected Value)",
        formula: "$\\mu = E[X] = n p$",
        fields: {
            "Explanation": "Provides the average number of successes expected over $n$ trials.",
            "$\\mu$": "Mean or expected number of successes.",
            "$E[X]$": "Expected value of the random variable $X$.",
            "$n$": "Total number of trials.",
            "$p$": "Probability of success on a single trial.",
            "Example": "If $n = 10$ and $p = 0.5$, then $\\mu = 10 \\times 0.5 = 5$.",
            "Use Cases": "Predicting average outcomes in repeated experiments like manufacturing defects."
        },
        category: "Binomial Distribution"
    },
    {
        name: "Variance",
        formula: "$\\sigma^2 = \\operatorname{Var}(X) = n p (1 - p)$",
        fields: {
            "Explanation": "Measures the dispersion of the number of successes around the mean.",
            "$\\sigma^2$": "Variance of the random variable $X$.",
            "$\\operatorname{Var}(X)$": "Variance notation.",
            "$n$": "Total number of trials.",
            "$p$": "Probability of success on a single trial.",
            "$1 - p$": "Probability of failure on a single trial.",
            "Example": "For $n = 10$ and $p = 0.5$, $\\sigma^2 = 10 \\times 0.5 \\times 0.5 = 2.5$.",
            "Use Cases": "Assessing variability in outcomes for quality assurance and forecasting."
        },
        category: "Binomial Distribution"
    },
    {
        name: "Standard Deviation",
        formula: "$\\sigma = \\sqrt{n p (1 - p)}$",
        fields: {
            "Explanation": "Represents the average distance of the data from the mean.",
            "$\\sigma$": "Standard deviation of the random variable $X$.",
            "$n$, $p$, $1 - p$": "As previously defined.",
            "Example": "With $n = 10$ and $p = 0.5$, $\\sigma = \\sqrt{10 \\times 0.5 \\times 0.5} \\approx 1.5811$.",
            "Use Cases": "Used to understand the spread of binomial outcomes in fields like finance and epidemiology."
        },
        category: "Binomial Distribution"
    },
    {
        name: "Probability Mass Function (PMF)",
        formula: "$P(X = k) = \\frac{e^{-\\lambda} \\lambda^{k}}{k!}$",
        fields: {
            "Explanation": "Calculates the probability of observing exactly $k$ events in a fixed interval when events occur independently at a constant average rate $\\lambda$.",
            "$P(X = k)$": "Probability of exactly $k$ occurrences in the interval.",
            "$e^{-\\lambda}$": "The probability of zero occurrences.",
            "$\\lambda^{k}$": "Mean number of occurrences raised to the $k$-th power.",
            "$k!$": "Factorial of $k$, the number of occurrences.",
            "$\\lambda$": "Average rate of occurrence (mean number of events per interval).",
            "$k$": "Number of occurrences (non-negative integer).",
            "Example": "If $\\lambda = 4$ and $k = 2$, then $P(X = 2) = \\frac{e^{-4} \\times 4^{2}}{2!} \\approx 0.1465$.",
            "Use Cases": "Modeling the number of rare events over a fixed period, such as the number of incoming calls to a call center in an hour."
        },
        category: "Poisson Distribution"
    },
    {
        name: "Cumulative Distribution Function (CDF)",
        formula: "$P(X \\leq k) = e^{-\\lambda} \\sum_{i=0}^{k} \\frac{\\lambda^{i}}{i!}$",
        fields: {
            "Explanation": "Calculates the probability of observing up to $k$ events in a fixed interval.",
            "$P(X \\leq k)$": "Probability of $k$ or fewer occurrences.",
            "$\\sum_{i=0}^{k}$": "Summation from $i = 0$ to $i = k$.",
            "$\\lambda$": "Average rate of occurrence.",
            "$i!$": "Factorial of $i$, each term in the sum.",
            "Example": "For $\\lambda = 3$ and $k = 2$, $P(X \\leq 2) = e^{-3} \\left( \\frac{3^{0}}{0!} + \\frac{3^{1}}{1!} + \\frac{3^{2}}{2!} \\right) \\approx 0.4232$.",
            "Use Cases": "Assessing cumulative probabilities, such as the probability of observing a certain number of defects in a batch."
        },
        category: "Poisson Distribution"
    },
    {
        name: "Mean (Expected Value)",
        formula: "$\\mu = E[X] = \\lambda$",
        fields: {
            "Explanation": "Represents the average number of events occurring in the given interval.",
            "$\\mu$": "Mean or expected value of the distribution.",
            "$E[X]$": "Expected value operator.",
            "$\\lambda$": "Average rate of occurrence.",
            "Example": "If $\\lambda = 5$, then $\\mu = 5$.",
            "Use Cases": "Predicting average outcomes in processes like arrival rates, such as customers entering a store per hour."
        },
        category: "Poisson Distribution"
    },
    {
        name: "Variance",
        formula: "$\\sigma^2 = \\operatorname{Var}(X) = \\lambda$",
        fields: {
            "Explanation": "Measures the dispersion of the number of events around the mean.",
            "$\\sigma^2$": "Variance of the distribution.",
            "$\\operatorname{Var}(X)$": "Variance operator.",
            "$\\lambda$": "Average rate of occurrence.",
            "Example": "If $\\lambda = 5$, then $\\sigma^2 = 5$.",
            "Use Cases": "Assessing variability in event counts for planning and resource allocation."
        },
        category: "Poisson Distribution"
    },
    {
        name: "Standard Deviation",
        formula: "$\\sigma = \\sqrt{\\lambda}$",
        fields: {
            "Explanation": "Represents the average distance of the data from the mean.",
            "$\\sigma$": "Standard deviation of the distribution.",
            "$\\lambda$": "Average rate of occurrence.",
            "Example": "If $\\lambda = 5$, then $\\sigma = \\sqrt{5} \\approx 2.2361$.",
            "Use Cases": "Understanding the spread of Poisson-distributed outcomes in fields like telecommunications and biology."
        },
        category: "Poisson Distribution"
    },
    {
        name: "Probability Mass Function (PMF)",
        formula: "$P(X = k) = (1 - p)^{k - 1} p$",
        fields: {
            "Explanation": "Calculates the probability that the first success occurs on the $k$-th trial.",
            "$P(X = k)$": "Probability that the first success occurs on trial $k$.",
            "$p$": "Probability of success on each trial.",
            "$1 - p$": "Probability of failure on each trial.",
            "$k$": "Trial number on which the first success occurs ($k = 1, 2, 3, \\dots$).",
            "Example": "If $p = 0.3$ and $k = 4$, then $P(X = 4) = (1 - 0.3)^{4 - 1} \\times 0.3 = (0.7)^{3} \\times 0.3 \\approx 0.1029$.",
            "Use Cases": "Used to model the number of trials needed to get the first success, such as in quality control testing or reliability analysis."
        },
        category: "Geometric Distribution"
    },
    {
        name: "Cumulative Distribution Function (CDF)",
        formula: "$P(X \\leq k) = 1 - (1 - p)^{k}$",
        fields: {
            "Explanation": "Calculates the probability that the first success occurs on or before the $k$-th trial.",
            "$P(X \\leq k)$": "Probability that the first success occurs on or before trial $k$.",
            "$p$": "Probability of success on each trial.",
            "$1 - p$": "Probability of failure on each trial.",
            "$k$": "Trial number ($k = 1, 2, 3, \\dots$).",
            "Example": "For $p = 0.3$ and $k = 4$, $P(X \\leq 4) = 1 - (1 - 0.3)^{4} = 1 - (0.7)^{4} \\approx 0.7599$.",
            "Use Cases": "Assessing the likelihood of achieving the first success within a certain number of trials."
        },
        category: "Geometric Distribution"
    },
    {
        name: "Mean (Expected Value)",
        formula: "$\\mu = E[X] = \\frac{1}{p}$",
        fields: {
            "Explanation": "Represents the average number of trials required to achieve the first success.",
            "$\\mu$": "Mean or expected value of the distribution.",
            "$p$": "Probability of success on each trial.",
            "Example": "If $p = 0.3$, then $\\mu = \\frac{1}{0.3} \\approx 3.3333$.",
            "Use Cases": "Predicting average trial counts in processes like quality inspections or repeated experiments."
        },
        category: "Geometric Distribution"
    },
    {
        name: "Variance",
        formula: "$\\sigma^2 = \\operatorname{Var}(X) = \\frac{1 - p}{p^{2}}$",
        fields: {
            "Explanation": "Measures the dispersion of the number of trials around the mean.",
            "$\\sigma^2$": "Variance of the distribution.",
            "$p$": "Probability of success on each trial.",
            "$1 - p$": "Probability of failure on each trial.",
            "Example": "If $p = 0.3$, then $\\sigma^2 = \\frac{1 - 0.3}{(0.3)^{2}} = \\frac{0.7}{0.09} \\approx 7.7778$.",
            "Use Cases": "Assessing variability in the number of trials needed for the first success."
        },
        category: "Geometric Distribution"
    },
    {
        name: "Standard Deviation",
        formula: "$\\sigma = \\sqrt{\\frac{1 - p}{p^{2}}}$",
        fields: {
            "Explanation": "Represents the average distance of the number of trials from the mean.",
            "$\\sigma$": "Standard deviation of the distribution.",
            "$p$": "Probability of success on each trial.",
            "$1 - p$": "Probability of failure on each trial.",
            "Example": "If $p = 0.3$, then $\\sigma = \\sqrt{\\frac{1 - 0.3}{(0.3)^{2}}} \\approx \\sqrt{7.7778} \\approx 2.7889$.",
            "Use Cases": "Understanding the spread of trials needed to achieve the first success."
        },
        category: "Geometric Distribution"
    },
    {
        name: "Probability Mass Function (PMF)",
        formula: "$P(X = k) = \\binom{k - 1}{r - 1} p^{r} (1 - p)^{k - r}$",
        fields: {
            "Explanation": "Calculates the probability that the $r$-th success occurs on the $k$-th trial.",
            "$P(X = k)$": "Probability that the $r$-th success occurs on trial $k$.",
            "$\\binom{k - 1}{r - 1}$": "Binomial coefficient representing the number of ways to arrange $r - 1$ successes in $k - 1$ trials.",
            "$p$": "Probability of success on each trial.",
            "$1 - p$": "Probability of failure on each trial.",
            "$k$": "Trial number on which the $r$-th success occurs ($k = r, r+1, r+2, \\dots$).",
            "$r$": "Number of successes to be achieved.",
            "Example": "If $p = 0.4$, $r = 3$, and $k = 7$, then $P(X = 7) = \\binom{6}{2} (0.4)^{3} (0.6)^{4} \\approx 0.0595$.",
            "Use Cases": "Used to model the number of trials needed to achieve a specified number of successes, such as in reliability testing or sequential analysis."
        },
        category: "Negative Binomial Distribution"
    },
    {
        name: "Cumulative Distribution Function (CDF)",
        formula: "$P(X \\leq k) = I_{p}(r, k - r + 1)$",
        fields: {
            "Explanation": "Calculates the probability that the $r$-th success occurs on or before the $k$-th trial using the regularized incomplete beta function.",
            "$P(X \\leq k)$": "Probability that the $r$-th success occurs on or before trial $k$.",
            "$I_{p}(a, b)$": "Regularized incomplete beta function.",
            "$p$": "Probability of success on each trial.",
            "$k$": "Trial number.",
            "$r$": "Number of successes.",
            "Example": "For $p = 0.4$, $r = 3$, and $k = 7$, $P(X \\leq 7)$ can be calculated using the cumulative sum of PMF values or the incomplete beta function.",
            "Use Cases": "Assessing the likelihood of achieving $r$ successes within a certain number of trials."
        },
        category: "Negative Binomial Distribution"
    },
    {
        name: "Mean (Expected Value)",
        formula: "$\\mu = E[X] = \\frac{r}{p}$",
        fields: {
            "Explanation": "Represents the average number of trials required to achieve $r$ successes.",
            "$\\mu$": "Mean or expected value of the distribution.",
            "$r$": "Number of successes.",
            "$p$": "Probability of success on each trial.",
            "Example": "If $r = 3$ and $p = 0.4$, then $\\mu = \\frac{3}{0.4} = 7.5$.",
            "Use Cases": "Predicting average trial counts in processes like quality control or repeated experiments until a certain number of successes are achieved."
        },
        category: "Negative Binomial Distribution"
    },
    {
        name: "Variance",
        formula: "$\\sigma^2 = \\operatorname{Var}(X) = \\frac{r (1 - p)}{p^{2}}$",
        fields: {
            "Explanation": "Measures the dispersion of the number of trials around the mean.",
            "$\\sigma^2$": "Variance of the distribution.",
            "$r$": "Number of successes.",
            "$p$": "Probability of success on each trial.",
            "$1 - p$": "Probability of failure on each trial.",
            "Example": "If $r = 3$ and $p = 0.4$, then $\\sigma^2 = \\frac{3 \\times 0.6}{(0.4)^{2}} = 11.25$.",
            "Use Cases": "Assessing variability in the number of trials needed for achieving $r$ successes."
        },
        category: "Negative Binomial Distribution"
    },
    {
        name: "Standard Deviation",
        formula: "$\\sigma = \\sqrt{\\frac{r (1 - p)}{p^{2}}}$",
        fields: {
            "Explanation": "Represents the average distance of the number of trials from the mean.",
            "$\\sigma$": "Standard deviation of the distribution.",
            "$r$": "Number of successes.",
            "$p$": "Probability of success on each trial.",
            "$1 - p$": "Probability of failure on each trial.",
            "Example": "If $r = 3$ and $p = 0.4$, then $\\sigma = \\sqrt{11.25} \\approx 3.3541$.",
            "Use Cases": "Understanding the spread of trials needed to achieve $r$ successes."
        },
        category: "Negative Binomial Distribution"
    },
    {
        name: "Probability Mass Function (PMF)",
        formula: "$P(X = k) = \\frac{\\binom{K}{k} \\binom{N - K}{n - k}}{\\binom{N}{n}}$",
        fields: {
            "Explanation": "Calculates the probability of observing exactly $k$ successes in $n$ draws without replacement from a finite population.",
            "$P(X = k)$": "Probability of getting exactly $k$ successes.",
            "$\\binom{K}{k}$": "Number of ways to choose $k$ successes from $K$ total successes in the population.",
            "$\\binom{N - K}{n - k}$": "Number of ways to choose $n - k$ failures from $N - K$ total failures.",
            "$\\binom{N}{n}$": "Total number of ways to choose $n$ items from $N$ total items.",
            "$N$": "Total number of items in the population.",
            "$K$": "Total number of successes in the population.",
            "$n$": "Number of draws or trials.",
            "$k$": "Number of observed successes.",
            "Example": "If $N = 50$, $K = 10$, $n = 5$, and $k = 2$, then $P(X = 2) = \\frac{\\binom{10}{2} \\binom{40}{3}}{\\binom{50}{5}}$.",
            "Use Cases": "Used in scenarios involving sampling without replacement, such as quality control inspection or lotteries."
        },
        category: "Hypergeometric Distribution"
    },
    {
        name: "Mean (Expected Value)",
        formula: "$\\mu = E[X] = n \\left( \\frac{K}{N} \\right)$",
        fields: {
            "Explanation": "Represents the average number of successes expected in $n$ draws.",
            "$\\mu$": "Mean or expected value of the distribution.",
            "$n$": "Number of draws.",
            "$K$": "Total number of successes in the population.",
            "$N$": "Total number of items in the population.",
            "Example": "If $N = 50$, $K = 10$, and $n = 5$, then $\\mu = 5 \\left( \\frac{10}{50} \\right) = 1$.",
            "Use Cases": "Predicting the average number of successes in random sampling without replacement."
        },
        category: "Hypergeometric Distribution"
    },
    {
        name: "Variance",
        formula: "$\\sigma^2 = \\operatorname{Var}(X) = n \\left( \\frac{K}{N} \\right) \\left( \\frac{N - K}{N} \\right) \\left( \\frac{N - n}{N - 1} \\right)$",
        fields: {
            "Explanation": "Measures the dispersion of the number of successes around the mean.",
            "$\\sigma^2$": "Variance of the distribution.",
            "$n$": "Number of draws.",
            "$K$": "Total number of successes in the population.",
            "$N$": "Total number of items in the population.",
            "$N - K$": "Total number of failures in the population.",
            "$N - n$": "Number of items not drawn.",
            "$N - 1$": "Adjustment for finite population.",
            "Example": "If $N = 50$, $K = 10$, and $n = 5$, then $\\sigma^2 = 5 \\left( \\frac{10}{50} \\right) \\left( \\frac{40}{50} \\right) \\left( \\frac{45}{49} \\right) \\approx 0.9184$.",
            "Use Cases": "Assessing variability in outcomes when sampling without replacement."
        },
        category: "Hypergeometric Distribution"
    },
    {
        name: "Standard Deviation",
        formula: "$\\sigma = \\sqrt{n \\left( \\frac{K}{N} \\right) \\left( \\frac{N - K}{N} \\right) \\left( \\frac{N - n}{N - 1} \\right)}$",
        fields: {
            "Explanation": "Represents the average distance of the number of successes from the mean.",
            "$\\sigma$": "Standard deviation of the distribution.",
            "Variables": "All other variables are as previously defined.",
            "Example": "Using the previous variance example, $\\sigma = \\sqrt{0.9184} \\approx 0.9583$.",
            "Use Cases": "Understanding the spread of the number of successes in sampling without replacement."
        },
        category: "Hypergeometric Distribution"
    },
    {
        name: "Probability of At Least $k$ Successes",
        formula: "$P(X \\geq k) = 1 - \\sum_{i=0}^{k - 1} P(X = i)$",
        fields: {
            "Explanation": "Calculates the probability of observing at least $k$ successes in $n$ draws.",
            "$P(X \\geq k)$": "Probability of $k$ or more successes.",
            "$\\sum_{i=0}^{k - 1} P(X = i)$": "Sum of probabilities of observing fewer than $k$ successes.",
            "$P(X = i)$": "PMF evaluated at $i$ successes.",
            "Example": "To find $P(X \\geq 2)$, compute $1 - [P(X = 0) + P(X = 1)]$.",
            "Use Cases": "Assessing the likelihood of meeting or exceeding a certain number of successes."
        },
        category: "Hypergeometric Distribution"
    },
    {
        name: "Probability Mass Function (PMF)",
        formula: "$P(X_1 = x_1, \\dots, X_k = x_k) = \\frac{n!}{x_1! x_2! \\dots x_k!} p_1^{x_1} p_2^{x_2} \\dots p_k^{x_k}$",
        fields: {
            "Explanation": "Calculates the probability of obtaining a specific combination of counts $(x_1, x_2, \\dots, x_k)$ in $n$ independent trials, where each trial can result in one of $k$ possible outcomes.",
            "$P(X_1 = x_1, \\dots, X_k = x_k)$": "Probability of observing counts $x_1, x_2, \\dots, x_k$ for outcomes $1$ to $k$ respectively.",
            "$n$": "Total number of independent trials.",
            "$x_i$": "Number of times outcome $i$ occurs, where $\\sum_{i=1}^{k} x_i = n$.",
            "$p_i$": "Probability of outcome $i$ on a single trial, where $\\sum_{i=1}^{k} p_i = 1$.",
            "$n!$": "Factorial of $n$.",
            "$x_i!$": "Factorial of $x_i$.",
            "Example": "If $n = 5$, $k = 3$, $p_1 = 0.2$, $p_2 = 0.5$, $p_3 = 0.3$, and we observe counts $x_1 = 1$, $x_2 = 2$, $x_3 = 2$, then $P = \\frac{5!}{1! 2! 2!} (0.2)^1 (0.5)^2 (0.3)^2 \\approx 0.135$.",
            "Use Cases": "Used in experiments with more than two possible outcomes per trial, such as dice rolls, categorical data analysis, or genetic allele frequencies."
        },
        category: "Multinomial Distribution"
    },
    {
        name: "Mean (Expected Value) of Each Outcome",
        formula: "$E[X_i] = n p_i$",
        fields: {
            "Explanation": "Represents the average number of times outcome $i$ is expected to occur in $n$ trials.",
            "$E[X_i]$": "Expected value of the count for outcome $i$.",
            "$n$": "Total number of trials.",
            "$p_i$": "Probability of outcome $i$.",
            "Example": "For $n = 10$ and $p_2 = 0.4$, $E[X_2] = 10 \\times 0.4 = 4$.",
            "Use Cases": "Predicting average counts of each category in repeated experiments."
        },
        category: "Multinomial Distribution"
    },
    {
        name: "Variance of Each Outcome",
        formula: "$\\operatorname{Var}(X_i) = n p_i (1 - p_i)$",
        fields: {
            "Explanation": "Measures the dispersion of the count for outcome $i$ around its mean.",
            "$\\operatorname{Var}(X_i)$": "Variance of the count for outcome $i$.",
            "$n$": "Total number of trials.",
            "$p_i$": "Probability of outcome $i$.",
            "$1 - p_i$": "Probability of not observing outcome $i$.",
            "Example": "For $n = 10$ and $p_2 = 0.4$, $\\operatorname{Var}(X_2) = 10 \\times 0.4 \\times 0.6 = 2.4$.",
            "Use Cases": "Assessing variability in counts for each category."
        },
        category: "Multinomial Distribution"
    },
    {
        name: "Covariance Between Outcomes",
        formula: "$\\operatorname{Cov}(X_i, X_j) = -n p_i p_j$",
        fields: {
            "Explanation": "Measures the degree to which counts of outcomes $i$ and $j$ vary together.",
            "$\\operatorname{Cov}(X_i, X_j)$": "Covariance between counts of outcomes $i$ and $j$.",
            "$n$": "Total number of trials.",
            "$p_i$, $p_j$": "Probabilities of outcomes $i$ and $j$, respectively.",
            "Example": "For $n = 10$, $p_1 = 0.2$, $p_2 = 0.5$, $\\operatorname{Cov}(X_1, X_2) = -10 \\times 0.2 \\times 0.5 = -1$.",
            "Use Cases": "Understanding the negative dependence between category counts in multinomial experiments."
        },
        category: "Multinomial Distribution"
    },
    {
        name: "Correlation Coefficient Between Outcomes",
        formula: "$\\rho_{ij} = \\frac{\\operatorname{Cov}(X_i, X_j)}{\\sqrt{\\operatorname{Var}(X_i) \\operatorname{Var}(X_j)}} = \\frac{-p_i p_j}{\\sqrt{p_i (1 - p_i) p_j (1 - p_j)}}$",
        fields: {
            "Explanation": "Quantifies the linear relationship between counts of outcomes $i$ and $j$.",
            "$\\rho_{ij}$": "Correlation coefficient between counts of outcomes $i$ and $j$.",
            "$\\operatorname{Cov}(X_i, X_j)$": "Covariance between counts of outcomes $i$ and $j$.",
            "$\\operatorname{Var}(X_i)$, $\\operatorname{Var}(X_j)$": "Variances of counts of outcomes $i$ and $j$, respectively.",
            "$p_i$, $p_j$": "Probabilities of outcomes $i$ and $j$.",
            "Example": "Using previous values, $\\rho_{12} = \\frac{-0.2 \\times 0.5}{\\sqrt{0.2 \\times 0.8 \\times 0.5 \\times 0.5}} \\approx -0.577$.",
            "Use Cases": "Assessing the strength of the relationship between category counts."
        },
        category: "Multinomial Distribution"
    },
    {
        name: "Probability Mass Function (PMF)",
        formula: "$P(X = k) = \\frac{1}{b - a + 1}$",
        fields: {
            "Explanation": "Calculates the probability of the discrete random variable $X$ taking on a specific integer value $k$ within the range from $a$ to $b$, where all outcomes are equally likely.",
            "$P(X = k)$": "Probability that $X$ equals $k$.",
            "$a$": "Minimum integer value in the distribution's range.",
            "$b$": "Maximum integer value in the distribution's range.",
            "$k$": "An integer within the range $a \\leq k \\leq b$.",
            "$b - a + 1$": "Total number of possible integer values in the range.",
            "Example": "If $a = 1$ and $b = 6$ (like a fair die), then $P(X = 3) = \\frac{1}{6}$.",
            "Use Cases": "Modeling situations where a finite number of outcomes are equally likely, such as rolling a fair die or selecting a random card from a deck."
        },
        category: "Discrete Uniform Distribution"
    },
    {
        name: "Mean (Expected Value)",
        formula: "$\\mu = E[X] = \\frac{a + b}{2}$",
        fields: {
            "Explanation": "Represents the average value of the distribution, calculated as the midpoint of the range.",
            "$\\mu$": "Mean or expected value of the distribution.",
            "$a$": "Minimum integer value.",
            "$b$": "Maximum integer value.",
            "Example": "For $a = 1$ and $b = 6$, $\\mu = \\frac{1 + 6}{2} = 3.5$.",
            "Use Cases": "Determining the average expected outcome in uniformly random scenarios."
        },
        category: "Discrete Uniform Distribution"
    },
    {
        name: "Variance",
        formula: "$\\sigma^2 = \\operatorname{Var}(X) = \\frac{(b - a + 1)^2 - 1}{12}$",
        fields: {
            "Explanation": "Measures the dispersion of the values around the mean.",
            "$\\sigma^2$": "Variance of the distribution.",
            "$a$": "Minimum integer value.",
            "$b$": "Maximum integer value.",
            "$b - a + 1$": "Total number of possible integer values.",
            "Example": "For $a = 1$ and $b = 6$, $\\sigma^2 = \\frac{(6 - 1 + 1)^2 - 1}{12} = \\frac{36 - 1}{12} = \\frac{35}{12} \\approx 2.9167$.",
            "Use Cases": "Assessing the spread of outcomes in uniformly random scenarios."
        },
        category: "Discrete Uniform Distribution"
    },
    {
        name: "Standard Deviation",
        formula: "$\\sigma = \\sqrt{\\frac{(b - a + 1)^2 - 1}{12}}$",
        fields: {
            "Explanation": "Represents the average distance of the values from the mean.",
            "$\\sigma$": "Standard deviation of the distribution.",
            "Variables": "All other variables are as previously defined.",
            "Example": "Using the previous variance example, $\\sigma = \\sqrt{2.9167} \\approx 1.7078$.",
            "Use Cases": "Understanding the spread of uniformly distributed discrete outcomes."
        },
        category: "Discrete Uniform Distribution"
    },
    {
        name: "Cumulative Distribution Function (CDF)",
        formula: "$P(X \\leq k) = \\frac{k - a + 1}{b - a + 1}$ for $k = a, a+1, \\dots, b$",
        fields: {
            "Explanation": "Calculates the probability that the random variable $X$ is less than or equal to a specific value $k$.",
            "$P(X \\leq k)$": "Cumulative probability up to and including $k$.",
            "$a$": "Minimum integer value.",
            "$b$": "Maximum integer value.",
            "$k$": "An integer within the range $a \\leq k \\leq b$.",
            "Example": "For $a = 1$, $b = 6$, and $k = 3$, $P(X \\leq 3) = \\frac{3 - 1 + 1}{6 - 1 + 1} = \\frac{3}{6} = 0.5$.",
            "Use Cases": "Determining cumulative probabilities in uniformly random discrete events."
        },
        category: "Discrete Uniform Distribution"
    },
    {
        name: "Probability Mass Function (PMF)",
        formula: "$P(X = k) = \\frac{\\binom{k - 1}{r - 1} \\binom{N - k}{K - r}}{\\binom{N}{K}}$",
        fields: {
            "Explanation": "Calculates the probability that the $r$-th success occurs on the $k$-th trial when sampling without replacement from a finite population.",
            "$P(X = k)$": "Probability that the $r$-th success occurs on trial $k$.",
            "$\\binom{k - 1}{r - 1}$": "Number of ways to choose $r - 1$ successes in the first $k - 1$ trials.",
            "$\\binom{N - k}{K - r}$": "Number of ways to choose the remaining $K - r$ successes from the remaining $N - k$ items.",
            "$\\binom{N}{K}$": "Total number of ways to choose $K$ successes from $N$ items.",
            "$N$": "Total number of items in the population.",
            "$K$": "Total number of successes in the population.",
            "$k$": "Trial number on which the $r$-th success occurs ($k = r, r+1, \\dots, N - K + r$).",
            "$r$": "Number of successes to be achieved.",
            "Example": "If $N = 20$, $K = 5$, $r = 2$, and $k = 4$, then $P(X = 4) = \\frac{\\binom{3}{1} \\binom{16}{3}}{\\binom{20}{5}} \\approx 0.2381$.",
            "Use Cases": "Used to model the number of trials needed to achieve $r$ successes without replacement, such as in card games or quality inspections."
        },
        category: "Negative Hypergeometric Distribution"
    },
    {
        name: "Mean (Expected Value)",
        formula: "$\\mu = E[X] = \\frac{r(N + 1)}{K + 1}$",
        fields: {
            "Explanation": "Represents the average number of trials required to achieve $r$ successes when sampling without replacement.",
            "$\\mu$": "Mean or expected value of the distribution.",
            "$r$": "Number of successes to be achieved.",
            "$N$": "Total number of items in the population.",
            "$K$": "Total number of successes in the population.",
            "Example": "If $N = 20$, $K = 5$, and $r = 2$, then $\\mu = \\frac{2 \\times 21}{5 + 1} = 7$.",
            "Use Cases": "Predicting average trial counts in processes like drawing specific cards from a deck without replacement."
        },
        category: "Negative Hypergeometric Distribution"
    },
    {
        name: "Variance",
        formula: "$\\sigma^2 = \\frac{r (N + 1)(N - K)(N - r)}{(K + 1)^{2} (K + 2)}$",
        fields: {
            "Explanation": "Measures the dispersion of the number of trials around the mean.",
            "$\\sigma^2$": "Variance of the distribution.",
            "$r$": "Number of successes to be achieved.",
            "$N$": "Total number of items in the population.",
            "$K$": "Total number of successes in the population.",
            "$N - K$": "Number of failures in the population.",
            "$N - r$": "Number of items not yet drawn after achieving $r$ successes.",
            "Example": "If $N = 20$, $K = 5$, and $r = 2$, then $\\sigma^2 = \\frac{2 \\times 21 \\times 15 \\times 18}{(5 + 1)^{2} \\times 7} \\approx 5.7143$.",
            "Use Cases": "Assessing variability in the number of trials needed for achieving $r$ successes without replacement."
        },
        category: "Negative Hypergeometric Distribution"
    },
    {
        name: "Standard Deviation",
        formula: "$\\sigma = \\sqrt{\\frac{r (N + 1)(N - K)(N - r)}{(K + 1)^{2} (K + 2)}}$",
        fields: {
            "Explanation": "Represents the average distance of the number of trials from the mean.",
            "$\\sigma$": "Standard deviation of the distribution.",
            "Variables": "All other variables are as previously defined.",
            "Example": "Using the previous variance example, $\\sigma = \\sqrt{5.7143} \\approx 2.3917$.",
            "Use Cases": "Understanding the spread of trials needed to achieve $r$ successes without replacement."
        },
        category: "Negative Hypergeometric Distribution"
    },
    {
        name: "Cumulative Distribution Function (CDF)",
        formula: "$P(X \\leq k) = 1 - \\frac{\\binom{N - r}{k - r} \\binom{r - 1}{r - 1}}{\\binom{N}{k}}$",
        fields: {
            "Explanation": "Calculates the probability that the $r$-th success occurs on or before the $k$-th trial.",
            "$P(X \\leq k)$": "Probability that the $r$-th success occurs on or before trial $k$.",
            "$\\binom{N - r}{k - r}$": "Number of ways to choose $k - r$ failures from $N - r$ failures.",
            "$\\binom{N}{k}$": "Total number of ways to choose $k$ items from $N$ items.",
            "$k$": "Trial number.",
            "Example": "For $N = 20$, $K = 5$, $r = 2$, and $k = 7$, compute $P(X \\leq 7)$ accordingly.",
            "Use Cases": "Assessing the likelihood of achieving $r$ successes within a certain number of trials when sampling without replacement."
        },
        category: "Negative Hypergeometric Distribution"
    },
    {
        name: "Probability Mass Function (PMF)",
        formula: "$P(X = k) = -\\frac{1}{\\ln(1 - p)} \\frac{p^{k}}{k}$",
        fields: {
            "Explanation": "Calculates the probability of the discrete random variable $X$ taking on the value $k$, where $k$ represents the number of failures required to get the first success in a logarithmic series.",
            "$P(X = k)$": "Probability that $X$ equals $k$.",
            "$p$": "Parameter of the distribution, such that $0 < p < 1$.",
            "$k$": "A positive integer ($k = 1, 2, 3, \\dots$).",
            "$\\ln(1 - p)$": "Natural logarithm of $1 - p$, normalizing constant.",
            "Example": "If $p = 0.5$ and $k = 3$, then $P(X = 3) = -\\frac{1}{\\ln(1 - 0.5)} \\frac{(0.5)^{3}}{3} \\approx 0.0625$.",
            "Use Cases": "Modeling species abundance in ecology, or the number of times a rare event occurs."
        },
        category: "Logarithmic Distribution"
    },
    {
        name: "Mean (Expected Value)",
        formula: "$\\mu = E[X] = \\frac{-p}{(1 - p) \\ln(1 - p)}$",
        fields: {
            "Explanation": "Represents the average value of the distribution.",
            "$\\mu$": "Mean or expected value of the distribution.",
            "$p$": "Parameter of the distribution.",
            "$\\ln(1 - p)$": "Natural logarithm of $1 - p$.",
            "$1 - p$": "Complement of parameter $p$.",
            "Example": "If $p = 0.5$, then $\\mu = \\frac{-0.5}{(0.5)(-0.6931)} \\approx 1.4427$.",
            "Use Cases": "Determining the average number of occurrences in phenomena following a logarithmic distribution."
        },
        category: "Logarithmic Distribution"
    },
    {
        name: "Variance",
        formula: "$\\sigma^2 = \\operatorname{Var}(X) = \\frac{-p (p + \\ln(1 - p))}{(1 - p)^{2} [\\ln(1 - p)]^{2}}$",
        fields: {
            "Explanation": "Measures the dispersion of the values around the mean.",
            "$\\sigma^2$": "Variance of the distribution.",
            "$p$": "Parameter of the distribution.",
            "$\\ln(1 - p)$": "Natural logarithm of $1 - p$.",
            "$1 - p$": "Complement of parameter $p$.",
            "Example": "If $p = 0.5$, calculate $\\sigma^2$ accordingly.",
            "Use Cases": "Assessing the spread of outcomes in logarithmically distributed data."
        },
        category: "Logarithmic Distribution"
    },
    {
        name: "Standard Deviation",
        formula: "$\\sigma = \\sqrt{\\operatorname{Var}(X)}$",
        fields: {
            "Explanation": "Represents the average distance of the values from the mean.",
            "$\\sigma$": "Standard deviation of the distribution.",
            "$\\operatorname{Var}(X)$": "Variance of the distribution.",
            "Example": "Calculate $\\sigma$ using the variance from the previous example.",
            "Use Cases": "Understanding the spread of logarithmically distributed discrete outcomes."
        },
        category: "Logarithmic Distribution"
    },
    {
        name: "Generating Function",
        formula: "$G_X(s) = \\frac{\\ln(1 - p s)}{\\ln(1 - p)}$",
        fields: {
            "Explanation": "Generates the probabilities of the distribution and can be used to find moments.",
            "$G_X(s)$": "Probability generating function of the distribution.",
            "$p$": "Parameter of the distribution.",
            "$s$": "Dummy variable used in generating functions.",
            "$\\ln(1 - p s)$": "Natural logarithm of $1 - p s$.",
            "$\\ln(1 - p)$": "Natural logarithm of $1 - p$.",
            "Example": "For $p = 0.5$, compute $G_X(s)$ accordingly.",
            "Use Cases": "Used in advanced probability to derive properties of the distribution."
        },
        category: "Logarithmic Distribution"
    },











   
];

export default probabilityFormulaList;
