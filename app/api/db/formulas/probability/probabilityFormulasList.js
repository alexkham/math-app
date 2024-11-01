const probabilityFormulaList = [
    {
        name: "Simple Probability",
        formula: "$P(A) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}}$",
        fields: {
            "Explanation": "Calculates the probability of event A happening when all outcomes are equally likely, quantifying how likely a specific event is to occur.",
            "$P(A)$": "Probability of event A occurring.",
            "A": "Event whose probability is being calculated.",
            "Number of favorable outcomes": "Count of outcomes that qualify as event A occurring.",
            "Total number of possible outcomes": "Count of all possible outcomes in the sample space.",
            "Example": "Flipping a fair coin, probability of heads: $P(Heads) = \\frac{1}{2}$",
            "Use Cases": "Simple games of chance, basic statistical calculations."
        },
        category: "Basic Principles"
    },
    {
        name: "Addition Rule for Mutually Exclusive Events",
        formula: "$P(A \\cup B) = P(A) + P(B)$",
        fields: {
            "Explanation": "Calculates the probability of either of two mutually exclusive events occurring, summing their individual probabilities since they cannot happen simultaneously.",
            "$P(A), P(B)$": "Probabilities of mutually exclusive events A and B occurring independently.",
            "A, B": "Mutually exclusive events; cannot both occur at the same time.",
            "Example": "Rolling a die, probability of rolling a 2 or a 5: $P(2 \\cup 5) = \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$",
            "Use Cases": "Scenarios where no two events can happen at the same time."
        },
        category: "Rules of Probability"
    },
    {
        name: "Multiplication Rule for Independent Events",
        formula: "$P(A \\cap B) = P(A) \\times P(B)$",
        fields: {
            "Explanation": "Calculates the probability of both events A and B occurring simultaneously, assuming the events do not influence each other.",
            "$P(A), P(B)$": "Probabilities of independent events A and B occurring independently.",
            "A, B": "Independent events; occurrence of one does not affect the occurrence of the other.",
            "Example": "Flipping two coins, both being heads: $P(Heads \\cap Heads) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$",
            "Use Cases": "Analyzing scenarios with multiple independent trials."
        },
        category: "Rules of Probability"
    },
    {
        name: "Conditional Probability",
        formula: "$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$",
        fields: {
            "Explanation": "Measures the probability of event A occurring given that event B has already occurred, assessing how B influences A.",
            "$P(A \\cap B)$": "Probability of both events A and B happening together.",
            "$P(A), P(B)$": "Probabilities of A and B where B's occurrence affects the likelihood of A.",
            "Example": "Drawing two cards, probability second card is an ace given the first was an ace: $P(Ace_2 \\mid Ace_1) = \\frac{3}{51}$",
            "Use Cases": "Situations where prior information about one event affects the outcome of another."
        },
        category: "Advanced Probabilities"
    },
    {
        name: "Bayes' Theorem",
        formula: "$P(A \\mid B) = \\frac{P(B \\mid A) \\times P(A)}{P(B)}$",
        fields: {
            "Explanation": "Updates the probability of event A occurring based on the occurrence of event B, integrating prior belief (prior probability) with new evidence.",
            "$P(A), P(B), P(B \\mid A)$": "Initial or prior probability of A occurring, overall probability of B, and probability of B given A.",
            "A, B": "Events where B's occurrence provides evidence about A's likelihood.",
            "Example": "Disease with 1% prevalence, 99% sensitive test, probability of disease given a positive test: Calculated using Bayes' Theorem.",
            "Use Cases": "Medical testing, machine learning algorithms, updating predictions with new information."
        },
        category: "Advanced Probabilities"
    }
];

export default probabilityFormulaList;
