

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
import DiscreteUniformCalculator from '@/app/components/calculators/probability/distributions/UniformDistributionCalculator'
import BinomialCalculator from '@/app/components/calculators/probability/distributions/BinomialDistributionCalculator'
import GeometricDistributionCalculator from '@/app/components/calculators/probability/distributions/GeometricDistributionCalculator'
import NegativeBinomialCalculator from '@/app/components/calculators/probability/distributions/NegativeBinomialCalculator'
import HypergeometricCalculator from '@/app/components/calculators/probability/distributions/HypergeometricDistributionCalculator'
import PoissonCalculator from '@/app/components/calculators/probability/distributions/PoissonDistributionCalculator'
import { useSearchParams } from 'next/navigation'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'

// the six calculators of the frame (module scope, so the frame's tab state is not reset by a re-render of the page or of a demo)
const DISTRIBUTION_COMPONENTS = [
  { id: 1, name: 'Discrete Uniform Distribution Calculator', key: 'uniform', component: DiscreteUniformCalculator },
  { id: 2, name: 'Binomial Distribution Calculator', key: 'binomial', component: BinomialCalculator },
  { id: 3, name: 'Geometric Distribution Calculator', key: 'geometric', component: GeometricDistributionCalculator },
  { id: 4, name: 'Negative Binomial Distribution Calculator', key: 'negative-binomial', component: NegativeBinomialCalculator },
  { id: 5, name: 'Hypergeometric Distribution Calculator', key: 'hypergeometric', component: HypergeometricCalculator },
  { id: 6, name: 'Poisson Distribution Calculator', key: 'poisson', component: PoissonCalculator },
]


/* calculators-mesh: finished 2026-10-16 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/probability/calculators/discrete-distributions" in calculators-mesh-registry.json (same folder): 9 usage sections, each with a demo; 42 panel notes (6 calculators x 7 keys); 25 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
export async function getStaticProps(){

  const keyWords = [
    'discrete distribution calculator',
    'binomial distribution calculator',
    'poisson distribution calculator',
    'geometric distribution calculator',
    'hypergeometric distribution',
    'negative binomial calculator',
    'discrete uniform distribution',
    'probability mass function',
    'discrete probability calculator',
    'PMF calculator',
    'binomial probability',
    'poisson probability calculator',
    'discrete random variable',
    'probability distribution tool',
    'statistical distribution calculator'
  ]

  const menuItems = [
    {
      title: "Probability Calculators",
      link: "/probability/calculators"
    },
    {
      title: "Continuous Distributions Calculator",
      link: "/probability/calculators/continuous-distributions"
    },
    {
      title: "Statistics Calculator",
      link: "/calculators/statistics-calculator"
    },
  ]

  const sectionsContent = {
    obj1: {
      title: `Selecting Probability Query Types`,
      content: `Each distribution calculator offers six query modes for flexible probability calculations. **All values (full distribution)** displays the complete probability mass function across all possible outcomes, showing the PMF chart and detailed probability table. This mode reveals the distribution's shape and identifies the most likely values.

**P(X = k)** calculates the exact probability of a specific outcome. For a binomial distribution with n=10 and p=0.5, P(X=5) gives the probability of exactly 5 successes. This mode uses the distribution's PMF formula directly.

**P(X < k)** computes cumulative probability for values strictly less than k, summing probabilities from the minimum up to k-1. **P(X ≤ k)** includes k itself in the sum. These queries answer questions like "What's the probability of fewer than 3 defects?" versus "At most 3 defects?"

**P(X > k)** and **P(X ≥ k)** calculate right-tail probabilities, useful for questions like "What's the probability of exceeding 10 events?" The greater-than query sums from k+1 onward, while greater-or-equal starts at k. All calculators display results prominently with the query notation and six-decimal precision.

Changing the type clears the result and empties the $k$ box (the $x$ box of the uniform calculator), so type the value again and click Calculate. The six types are compared in [Understanding PMF vs CDF](!#understanding-pmf-vs-cdf), and each has its own section, starting with [The Full Distribution Query](!#the-full-distribution-query).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Using the Discrete Uniform Calculator`,
      content: `The discrete uniform distribution models scenarios where all outcomes have equal probability, like rolling a fair die or drawing a random integer. Enter **a (minimum)** as the smallest possible value and **b (maximum)** as the largest. For a standard die, set a=1 and b=6.

The calculator computes n = b - a + 1 (count of possible values) and probability = 1/n for each outcome. The PMF chart displays uniform-height bars showing equal probabilities. Mean equals (a+b)/2, the midpoint of the range. Variance follows the formula ((n²-1)/12).

Query specific values to see how uniform probability works. For a=1, b=6, P(X=3) = 1/6 ≈ 0.1667, identical to any other face. P(X ≤ 2) = 2/6 = 0.3333 since two values (1,2) fall in that range. The uniform distribution serves as a baseline for comparing more complex distributions and models perfectly random selection.

Both boxes take whole numbers only (a decimal is refused with "Must be an integer"), and $b$ must exceed $a$, otherwise Calculate answers "b must be greater than a"; a query value outside $a \\ldots b$ is refused with "x must be between a and b". The result cards show $n$, $P(X = x)$, the mean and the variance; for $a = 1$, $b = 6$ they read $6$, $0.1667$, $3.5000$ and $2.9167$. The formulas are explained in [The Discrete Uniform Distribution](!#the-discrete-uniform-distribution).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Calculating Binomial Distribution Probabilities`,
      content: `The binomial distribution models the number of successes in a fixed number of independent trials, each with the same success probability. Enter **n (number of trials)** as the total independent repetitions and **p (success probability)** as the probability for each trial, between 0 and 1.

For coin flipping, n=10 flips with p=0.5 for a fair coin models total heads. For manufacturing quality control with 2% defect rate, use p=0.02 with n equal to sample size. The calculator displays the PMF chart showing the distribution's shape—symmetric when p=0.5, right-skewed when p<0.5, left-skewed when p>0.5.

Mean equals np (expected successes), variance equals np(1-p). For n=20, p=0.3, expect 6 successes on average with variance 4.2. The PMF uses the formula C(n,k) × p^k × (1-p)^(n-k) where C(n,k) is the binomial coefficient "n choose k."

Query P(X=k) for exact probabilities, P(X≤k) for cumulative "at most k successes." The binomial models coin flips, quality control sampling, survey responses, medical trials—any scenario with fixed trials and constant success probability.

The $n$ box takes a positive whole number, the $p$ box a decimal between $0$ and $1$ (digits and a point only), and $k$ may not exceed $n$ ("k cannot exceed n"). For $n = 10$, $p = 0.5$ the cards show $q = 0.5000$, mean $5.0000$, variance $2.5000$ and standard deviation $1.5811$; $P(X = 5) = 0.246094$ and $P(X \\le 3) = 0.171875$. The formula is explained in [The Binomial Distribution](!#the-binomial-distribution).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Working with Geometric Distribution`,
      content: `The geometric distribution models the number of trials needed until the first success occurs. Unlike binomial which fixes trial count, geometric asks "How many attempts until success?" Enter **p (success probability)** as the constant probability for each trial.

For p=0.2 (20% success rate), the calculator shows probabilities for needing 1, 2, 3... trials. P(X=1) = p (immediate success), P(X=2) = (1-p)×p (fail then succeed), and so on. The PMF chart displays exponentially decreasing bars—early success is most likely, long sequences less probable.

Mean equals 1/p, the expected number of trials. For p=0.2, expect 5 trials on average until first success. Variance equals (1-p)/p². Standard deviation measures spread around this expectation. The distribution has infinite support (theoretically could take forever), but the calculator displays up to reasonable maximum based on negligible probabilities.

Use geometric for questions like "How many job applications until an offer?" or "Attempts needed to roll a six?" The memoryless property means past failures don't affect future trial probabilities—each attempt has the same success chance regardless of history.

This calculator counts trials, so $k$ starts at $1$ ("Must be a positive integer"). For $p = 0.2$ the cards show mean $5.0000$ and variance $20.0000$; $P(X = 5) = 0.081920$ and $P(X > 5) = 0.327680$, the chance that the first five trials all fail. The formula is explained in [The Geometric Distribution](!#the-geometric-distribution).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Negative Binomial Distribution Calculator`,
      content: `The negative binomial distribution generalizes the geometric distribution, modeling failures before achieving a target number of successes. Enter **r (number of successes)** as the target success count and **p (success probability)** as the probability per trial.

For r=5, p=0.3, the calculator shows the distribution of failures before the 5th success. The random variable X represents failure count, not total trials. Mean equals r(1-p)/p, expected failures before r successes. For r=5, p=0.3, expect about 11.67 failures before accumulating 5 successes.

Variance equals r(1-p)/p², measuring variability in failure count. The PMF uses binomial coefficients: C(k+r-1, k) × p^r × (1-p)^k where k is the number of failures. The distribution resembles binomial but extends indefinitely since failure count is unbounded.

When r=1, negative binomial reduces to geometric distribution. Use this for scenarios like "How many defective items before finding 10 acceptable ones?" or "Customer rejections before closing 3 sales?" The calculator handles both specific failure counts P(X=k) and cumulative queries P(X≤k) for "at most k failures."

Here $k$ counts failures, so it starts at $0$ ("Must be a non-negative integer"). For $r = 5$, $p = 0.3$ the cards show mean $11.6667$ and variance $38.8889$; $P(X = 10) = 0.068710$ and $P(X \\le 10) = 0.484509$. The formula is explained in [The Negative Binomial Distribution](!#the-negative-binomial-distribution).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Hypergeometric Distribution for Sampling Without Replacement`,
      content: `The hypergeometric distribution models sampling without replacement from a finite population containing two types of items. Enter **N (population size)** as total items, **K (success states)** as items of the target type, and **n (sample size)** as the number drawn.

For drawing cards from a 52-card deck, N=52 total cards, K=13 hearts, n=5 cards drawn. The calculator computes probabilities for k hearts in the 5-card hand. Unlike binomial (which assumes replacement), hypergeometric accounts for changing probabilities as items are removed.

Mean equals nK/N, expected successes in the sample. For N=100 items with K=30 defective, drawing n=10 gives mean 3 defective items. Variance equals n×K×(N-K)×(N-n)/(N²×(N-1)), incorporating the finite population correction factor.

The PMF uses the formula: [C(K,k) × C(N-K, n-k)] / C(N,n) where C denotes combinations. Valid k values range from max(0, n-(N-K)) to min(n,K)—you can't draw more hearts than exist or more cards than sampled.

Use hypergeometric for quality control (sampling from production batch), lottery probabilities (drawing winning numbers), or ecological sampling (capturing tagged animals). The distribution approaches binomial as N→∞ with K/N=p constant.

The calculator refuses $K > N$ ("K cannot exceed N") and $n > N$ ("n cannot exceed N"), and a $k$ outside the valid range is refused with "k must be between …". For $N = 52$, $K = 13$, $n = 5$ the cards show mean $1.2500$ and variance $0.8640$, and $P(X = 3) = 0.081543$ is the chance of exactly three hearts in a five-card hand. The formula is explained in [The Hypergeometric Distribution](!#the-hypergeometric-distribution).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Poisson Distribution for Event Counts`,
      content: `The Poisson distribution models the number of events occurring in a fixed interval when events happen independently at a constant average rate. Enter **λ (lambda - average rate)** as the expected event count per interval.

For λ=3.5 events per hour, the calculator shows probabilities for 0, 1, 2, 3... events in an hour. P(X=0) = e^(-λ) gives the probability of zero events. The PMF peak occurs near λ—the most likely outcome approximates the average rate.

Mean and variance both equal λ, a unique Poisson property. For λ=5, expect 5 events with variance 5 and standard deviation √5 ≈ 2.236. The distribution is right-skewed for small λ, approaches symmetry as λ increases. When λ>10, normal approximation becomes accurate.

The PMF formula: P(X=k) = (λ^k × e^(-λ)) / k! where k is the event count. The calculator sums probabilities for cumulative queries. P(X≤3) for λ=5 gives probability of 3 or fewer events, useful for capacity planning.

Apply Poisson to phone calls per hour, website visits per day, radioactive decay counts, rare disease cases, customer arrivals, or any scenario with independent events at constant rate. The distribution assumes infinite potential events in the interval with very small individual probabilities. For the formula worked out step by step, PMF and CDF charts, and all comparison types, see the [Poisson distribution calculator](!/probability/visual-tools/distributions/poisson).

The $\\lambda$ box takes any positive decimal. For $\\lambda = 3.5$ the cards show mean $3.5000$ and variance $3.5000$; $P(X = 5) = 0.132169$ and $P(X \\le 3) = 0.536633$. The formula is explained in [The Poisson Distribution](!#the-poisson-distribution).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Are Discrete Probability Distributions?`,
      content: `A discrete probability distribution describes the probabilities of countable outcomes for a random variable. Unlike continuous distributions which assign probability to intervals, discrete distributions assign probability to specific values: 0 heads, 1 head, 2 heads, etc.

The **probability mass function (PMF)** gives P(X=k) for each possible value k. PMF values must be non-negative and sum to 1 across all possible outcomes. The PMF completely characterizes the distribution—knowing all individual probabilities determines every property.

Discrete distributions model counted phenomena: number of successes, defects, events, trials, or occurrences. The random variable takes integer values (sometimes all non-negative integers, sometimes a finite range). Examples include coin flips (0 to n heads), website visits (0 to infinity), cards drawn (0 to min(n,K) target cards).

Key properties include mean μ (expected value, center of distribution), variance σ² (spread around mean), and standard deviation σ (variance square root). The cumulative distribution function (CDF) gives P(X≤k), accumulating probabilities from minimum to k.

For comprehensive theory on discrete probability distributions including derivations, properties, and applications, see [discrete probability distributions theory](!/probability/distributions/discrete#what).

The PMF itself is defined in [Definition and physical intuition](!/probability/probability-function/pmf#1) and its two rules in [The two fundamental axioms](!/probability/probability-function/pmf#3); the CDF is introduced in [From events to random variables](!/probability/cdf#1).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Choosing the Right Discrete Distribution`,
      content: `Selecting the appropriate distribution requires matching the scenario's structure to distribution assumptions. [Discrete Uniform](!#the-discrete-uniform-distribution) applies when all outcomes are equally likely with known minimum and maximum: dice rolls, random integer selection, lottery numbers.

[Binomial](!#the-binomial-distribution) suits fixed trial counts with constant success probability and independence: quality control samples, coin flipping, survey yes/no responses, multiple choice guessing. Each trial must be independent with identical success chance.

[Geometric](!#the-geometric-distribution) models waiting time until first success when trials are independent with constant probability: attempts until sale, rolls until six, iterations until convergence. Use when counting trials, not successes.

[Negative Binomial](!#the-negative-binomial-distribution) generalizes geometric to multiple successes: failures before r-th success, defects before finding r acceptable items. Reduces to geometric when r=1. Appropriate when counting failures while waiting for fixed success count.

[Hypergeometric](!#the-hypergeometric-distribution) handles sampling without replacement from finite populations with two categories: card hands, quality sampling from batches, capture-recapture methods. Critical when sample size is substantial relative to population—replacement assumption breaks down.

[Poisson](!#the-poisson-distribution) applies to rare events in fixed intervals when occurrences are independent with constant rate: phone calls per hour, website hits, accidents per month, rare disease cases. Works when individual event probability is tiny but opportunities are numerous. Approximates binomial when n is large, p is small, and np is moderate.

Each of the six distributions has its own section on this page, linked above, and its own lesson; the lesson hub compares them in [Types of discrete distributions](!/probability/distributions/discrete#types) and [Discrete vs continuous](!/probability/distributions/discrete#vs).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Understanding PMF vs CDF`,
      content: `The **probability mass function (PMF)** gives the probability of each exact value: P(X=k). For a die, PMF(3) = 1/6, the probability of rolling exactly 3. PMF bars in calculator charts show these individual probabilities. PMF values must be non-negative and sum to 1.

The **cumulative distribution function (CDF)** gives P(X≤k), the probability of at most k: all values from minimum through k. For a die, CDF(3) = 3/6 = 0.5, the probability of rolling 1, 2, or 3. CDF is the sum of PMF values up to k.

CDF increases from 0 to 1 as k increases. For discrete distributions, CDF is a step function—flat between integer values, jumping upward at each possible outcome by the PMF value. CDF(k) - CDF(k-1) equals PMF(k), relating the functions.

PMF answers "exactly k" questions while CDF answers "at most k" questions. Calculate P(X>k) as 1 - CDF(k). Calculate P(a < X ≤ b) as CDF(b) - CDF(a). The calculator query options implement these relationships: P(X<k) = CDF(k-1), P(X≤k) = CDF(k), P(X>k) = 1 - CDF(k), P(X≥k) = 1 - CDF(k-1).

The **CDF visualizer tools** display step functions showing cumulative probability accumulation, complementing the PMF bar charts in these calculators.

The six query types of the calculators are each explained in their own section: [The Full Distribution Query](!#the-full-distribution-query), [Exact Probability P(X = k)](!#exact-probability-p-x-k), [Strictly Less Than: P(X < k)](!#strictly-less-than-p-x-k), [At Most: P(X ≤ k)](!#at-most-p-x-k), [Strictly Greater Than: P(X > k)](!#strictly-greater-than-p-x-k) and [At Least: P(X ≥ k)](!#at-least-p-x-k). The relation between the two functions is taught in [Connection to CDF](!/probability/probability-function/pmf#10) and [The CDF of a discrete variable](!/probability/cdf#discrete).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Probability Tools and Calculators`,
      content: `**[Continuous Distributions Calculator](!/probability/calculators/continuous-distributions)** - Compute probabilities for normal, exponential, and uniform continuous distributions with PDF and CDF.

**[Probability Distribution Explorer](!/probability/visual-tools/distributions)** - Interactive visualization comparing multiple distributions side-by-side with parameter adjustments.

**[Expected Value Calculator](!/probability/calculators/expected-value)** - Calculate expected values, variance, and higher moments for discrete and continuous distributions.

**[CDF Visualizer](!/probability/visual-tools/cdf)** - Generate cumulative distribution function plots for discrete and continuous distributions.

**[Normal Distribution Calculator](!/probability/calculators/continuous-distributions#working-with-normal-distribution-calculator)** - Dedicated normal distribution tool with z-score calculations and percentile lookups.

**[Binomial Probability Calculator](!/probability/calculators/discrete-distributions#calculating-binomial-distribution-probabilities)** - Standalone binomial calculator with additional features for hypothesis testing.

**Poisson Process Simulator** - Simulate Poisson processes over time with arrival visualization and statistics.

**[Probability Mass Function Plotter](!/probability/visual-tools/probability-function)** - Create custom PMF plots for user-defined discrete distributions.

**[Statistical Distribution Reference](!/probability/distributions)** - Comprehensive guide to all probability distributions with formulas, properties, and applications.

The distributions behind these tools are taught in [Discrete distributions](!/probability/distributions/discrete#what) and the PMF they share in [PMFs of common discrete distributions](!/probability/probability-function/pmf#11).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj12: {
      title: `Switching Between the Six Calculators`,
      content: `The row of buttons above the calculator holds the six tools of this page: **Discrete Uniform**, **Binomial**, **Geometric**, **Negative Binomial**, **Hypergeometric** and **Poisson Distribution Calculator**. The page opens on the uniform calculator; click a button to switch, and the blue heading of the card names the active tool. Each calculator keeps its own boxes, so the values you typed into one are not carried into another, and the result of the tool you leave is dropped when you come back to it.

Adding ?tab=2 to ?tab=6 after the page address opens a given calculator directly, in the order of the buttons; the buttons themselves do not change the address. Every tool has the same layout: the **Probability Type** box, its parameter boxes, the **Calculate** and **Reset** buttons, the result cards and, in the full-distribution mode, the PMF chart. The panel on the right of each tool explains the active calculator and the chosen query type. Which tool fits which situation is explained in [Choosing the Right Discrete Distribution](!#choosing-the-right-discrete-distribution).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj13: {
      title: `Calculating, Reading the Results and Resetting`,
      content: `The **Calculate** button stays grey until every required box holds a valid value: the parameters, and the $k$ (or $x$) box for every query type except the full distribution. While you type, a red note under a box flags a value of the wrong kind at once, such as "Must be a positive integer" or "Must be between 0 and 1"; relations between boxes are checked when you click, for example "b must be greater than a", "k cannot exceed n" or "K cannot exceed N", and the result stays empty until the note is cleared.

A successful click fills the right-hand side. For a query type other than the full distribution, the first card shows the query in symbols, such as $P(X = 5)$, with its probability to six decimals. Below it the parameter cards follow: the mean $\\mu$ and the variance $\\sigma^2$ in every tool, plus the tool's own quantities, $n$ and $P(X = x)$ for the uniform calculator, $q = 1 - p$ and the standard deviation for the binomial one. **Distribution Info** repeats the PMF formula, and in the full-distribution mode the PMF chart and the value list follow. **Reset** empties every box of the active tool and removes its result; the query type and the other five tools are left as they were. For the die, $a = 1$, $b = 6$, the cards read $n = 6$, $P(X = x) = 0.1667$, mean $3.5000$, variance $2.9167$. What the mean and variance of a discrete distribution measure is explained in [What Are Discrete Probability Distributions?](!#what-are-discrete-probability-distributions).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj14: {
      title: `The Discrete Uniform Distribution`,
      content: `The discrete uniform distribution puts the same probability on each of the whole numbers from $a$ to $b$: there are $n = b - a + 1$ values and $P(X = x) = \\frac{1}{n}$ for every one of them, $0$ elsewhere. A fair die is the standard case, $a = 1$, $b = 6$, $P(X = x) = \\frac{1}{6}$.

The mean is the midpoint $\\frac{a + b}{2}$ and the variance is $\\frac{n^2 - 1}{12}$; for the die, $3.5$ and $\\frac{35}{12} \\approx 2.9167$. Cumulative questions are counts: $P(X \\le x) = \\frac{x - a + 1}{n}$, so $P(X \\le 2) = \\frac{2}{6}$ for the die. A common slip is to use $b - a$ for the number of values; the count includes both ends, which is why $n = b - a + 1$.

The lesson derives the PMF in [Probability mass function and support](!/probability/distributions/discrete/uniform#4), the CDF in [Cumulative distribution function](!/probability/distributions/discrete/uniform#5), and the mean and variance in [Expected value](!/probability/distributions/discrete/uniform#6) and [Variance and standard deviation](!/probability/distributions/discrete/uniform#7); the hub entry is [Discrete uniform](!/probability/distributions/discrete#uniform).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj15: {
      title: `The Binomial Distribution`,
      content: `The binomial distribution counts the successes in $n$ independent trials that each succeed with probability $p$. Its PMF is $P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$ for $k = 0, 1, \\ldots, n$: the binomial coefficient counts the ways to place $k$ successes among $n$ trials, and the powers give the probability of one such arrangement.

The mean is $np$ and the variance $np(1 - p)$. For $n = 10$ fair coin flips, $p = 0.5$: the mean is $5$, the variance $2.5$, and $P(X = 5) = \\binom{10}{5} / 2^{10} = 252 / 1024 \\approx 0.246094$; the chance of at most $3$ heads is $(1 + 10 + 45 + 120) / 1024 \\approx 0.171875$. A common mistake is to apply the binomial when draws are made without replacement from a small population; then the trials are not independent and the hypergeometric distribution is the right model.

The lesson builds the PMF in [Probability mass function and support](!/probability/distributions/discrete/binomial#4), the parameters in [Parameters](!/probability/distributions/discrete/binomial#2), and the mean and variance in [Expected value](!/probability/distributions/discrete/binomial#6) and [Variance and standard deviation](!/probability/distributions/discrete/binomial#7); the hub entry is [Binomial](!/probability/distributions/discrete#binomial).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj16: {
      title: `The Geometric Distribution`,
      content: `The geometric distribution counts the trials up to and including the first success, when every trial succeeds independently with probability $p$. Its PMF is $P(X = k) = (1 - p)^{k - 1} p$ for $k = 1, 2, 3, \\ldots$: $k - 1$ failures, then one success. The tail is simple, $P(X > k) = (1 - p)^k$, the chance that the first $k$ trials all fail.

The mean is $\\frac{1}{p}$ and the variance $\\frac{1 - p}{p^2}$. For $p = 0.2$: mean $5$, variance $20$, $P(X = 5) = 0.8^4 \\cdot 0.2 = 0.08192$ and $P(X > 5) = 0.8^5 = 0.32768$. The distribution is memoryless: after any number of failures, the number of further trials needed has the same distribution as at the start. The common mistake is mixing the two conventions, trials until success (support from $1$, used by this calculator) and failures before success (support from $0$); the means differ by exactly $1$.

The lesson covers the PMF in [Probability mass function and support](!/probability/distributions/discrete/geometric#4), the CDF in [Cumulative distribution function](!/probability/distributions/discrete/geometric#5), and the moments in [Expected value](!/probability/distributions/discrete/geometric#6) and [Variance and standard deviation](!/probability/distributions/discrete/geometric#7); the hub entry is [Geometric](!/probability/distributions/discrete#geometric).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj17: {
      title: `The Negative Binomial Distribution`,
      content: `The negative binomial distribution counts the failures that occur before the $r$-th success in independent trials with success probability $p$. Its PMF is $P(X = k) = \\binom{k + r - 1}{k} p^r (1 - p)^k$ for $k = 0, 1, 2, \\ldots$: the last trial is the $r$-th success, and the coefficient counts the arrangements of the other $r - 1$ successes among the first $k + r - 1$ trials.

The mean is $\\frac{r(1 - p)}{p}$ and the variance $\\frac{r(1 - p)}{p^2}$. For $r = 5$, $p = 0.3$: mean $\\frac{5 \\cdot 0.7}{0.3} \\approx 11.6667$, variance $\\approx 38.8889$, and $P(X = 10) = \\binom{14}{10} \\cdot 0.3^5 \\cdot 0.7^{10} \\approx 0.068710$. With $r = 1$ the distribution is the geometric distribution in its failures-before-success form. The common mistake is to read $k$ as the total number of trials; the total is $k + r$.

The lesson derives the PMF in [Probability mass function and support](!/probability/distributions/discrete/negative-binomial#4) and the moments in [Expected value](!/probability/distributions/discrete/negative-binomial#6) and [Variance and standard deviation](!/probability/distributions/discrete/negative-binomial#7); the hub entry is [Negative binomial](!/probability/distributions/discrete#negative_binomial).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj18: {
      title: `The Hypergeometric Distribution`,
      content: `The hypergeometric distribution counts the successes in a sample of $n$ items drawn without replacement from a population of $N$ items of which $K$ are successes. Its PMF is $P(X = k) = \\frac{\\binom{K}{k}\\binom{N - K}{n - k}}{\\binom{N}{n}}$ for $k$ from $\\max(0, n - (N - K))$ to $\\min(n, K)$: favourable hands over all hands.

The mean is $\\frac{nK}{N}$ and the variance $\\frac{nK(N - K)(N - n)}{N^2 (N - 1)}$; the last factor, $\\frac{N - n}{N - 1}$, is the finite population correction that makes the variance smaller than the binomial $np(1 - p)$. For a five-card hand from a deck, $N = 52$, $K = 13$ hearts, $n = 5$: mean $1.25$, variance $\\approx 0.8640$, and $P(X = 3) = \\frac{\\binom{13}{3}\\binom{39}{2}}{\\binom{52}{5}} = \\frac{286 \\cdot 741}{2598960} \\approx 0.081543$. The common mistake is to use the binomial with $p = K / N$; that assumes replacement and overstates the spread.

The lesson covers the setting in [The probabilistic experiment](!/probability/distributions/discrete/hypergeometric#1), the PMF in [Probability mass function and support](!/probability/distributions/discrete/hypergeometric#4), and the moments in [Expected value](!/probability/distributions/discrete/hypergeometric#6) and [Variance and standard deviation](!/probability/distributions/discrete/hypergeometric#7); the hub entry is [Hypergeometric](!/probability/distributions/discrete#hypergeometric).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj19: {
      title: `The Poisson Distribution`,
      content: `The Poisson distribution counts events that occur independently at a constant average rate $\\lambda$ per interval. Its PMF is $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k = 0, 1, 2, \\ldots$, and both the mean and the variance equal $\\lambda$.

For $\\lambda = 3.5$ calls per hour: $P(X = 0) = e^{-3.5} \\approx 0.030197$, $P(X = 5) = \\frac{3.5^5 e^{-3.5}}{120} \\approx 0.132169$, and the chance of at most $3$ calls is $e^{-3.5}(1 + 3.5 + 6.125 + 7.1458) \\approx 0.536633$. The Poisson distribution approximates the binomial when $n$ is large and $p$ small with $np = \\lambda$. The common mistake is to use a rate for the wrong interval: $3.5$ per hour is $7$ per two hours, so $\\lambda$ must be rescaled with the interval before $k$ is queried.

The lesson derives the PMF in [Probability mass function and support](!/probability/distributions/discrete/poisson#4), the CDF in [Cumulative distribution function](!/probability/distributions/discrete/poisson#5), and the moments in [Expected value](!/probability/distributions/discrete/poisson#6) and [Variance and standard deviation](!/probability/distributions/discrete/poisson#7); the hub entry is [Poisson](!/probability/distributions/discrete#poisson).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj20: {
      title: `The Full Distribution Query`,
      content: `**All values (full distribution)** is the opening query type of every calculator. It needs only the parameters: Calculate then lists $P(X = k)$ for every value of the support, up to a display cap for the distributions with an infinite support (the geometric, negative binomial and Poisson calculators stop a few standard deviations past the mean), draws the PMF chart and shows the mean and the variance. No $k$ box is shown in this mode.

Use it first to see the shape of the distribution: the die gives six equal bars of $\\frac{1}{6}$, ten fair coin flips give a symmetric hump around $5$, and $\\lambda = 3.5$ gives a right-skewed hump peaking at $3$. The probabilities in the list sum to $1$ (to rounding), which is the second axiom of a PMF. The PMF and its two rules are taught in [The two fundamental axioms](!/probability/probability-function/pmf#3) and the three ways to show it in [Representations: the three views](!/probability/probability-function/pmf#4).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj21: {
      title: `Exact Probability P(X = k)`,
      content: `**P(X = k)** gives the probability of one exact value, read straight from the PMF; the uniform calculator calls the value $x$. Type the parameters, choose this type, type $k$ and click Calculate: the answer is shown with six decimals under its label, for example $P(X = 5) = 0.246094$ for ten fair coin flips, $P(X = 3) = 0.166667$ for a die, $P(X = 5) = 0.132169$ for $\\lambda = 3.5$.

The value must lie in the support: the binomial calculator refuses $k > n$, the uniform one refuses $x$ outside $a \\ldots b$, and the geometric one needs $k \\ge 1$. The usual mistake is to answer an "at most" question with an exact probability; "at most $k$" needs the sum in [At Most: P(X ≤ k)](!#at-most-p-x-k). Working with single PMF values is taught in [Calculations using the PMF](!/probability/probability-function/pmf#6).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj22: {
      title: `Strictly Less Than: P(X < k)`,
      content: `**P(X < k)** is the probability that $X$ is strictly smaller than $k$: the sum of the PMF over all support values below $k$, so $k$ itself is left out. For a die, $P(X < 3) = P(1) + P(2) = \\frac{2}{6} \\approx 0.333333$; for the geometric distribution with $p = 0.2$, $P(X < 5) = 1 - 0.8^4 = 0.5904$.

In CDF terms this is $F(k - 1)$, one step before the CDF value at $k$. The common mistake is to read "fewer than 3" as "3 or fewer"; the two differ by exactly $P(X = k)$, which is why the calculator offers both this type and [At Most: P(X ≤ k)](!#at-most-p-x-k). The step shape of a discrete CDF, which makes this distinction matter, is taught in [The CDF of a discrete variable](!/probability/cdf#discrete).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj23: {
      title: `At Most: P(X ≤ k)`,
      content: `**P(X ≤ k)** is the cumulative distribution function $F(k)$: the sum of the PMF over every support value up to and including $k$. For a die, $P(X \\le 2) = \\frac{2}{6} \\approx 0.333333$; for ten fair coin flips, $P(X \\le 3) = 0.171875$; for $\\lambda = 3.5$, $P(X \\le 3) = 0.536633$.

This is the query behind "at most", "no more than" and "up to" questions, and the one whose values the CDF table of a textbook lists. The difference $F(k) - F(k - 1)$ recovers $P(X = k)$, and $1 - F(k)$ gives the right tail, so every other query type can be written with this one. The CDF is defined in [The definition of the CDF](!/probability/cdf#definition) and its use in [Using the CDF](!/probability/cdf#using).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj24: {
      title: `Strictly Greater Than: P(X > k)`,
      content: `**P(X > k)** is the right tail without $k$: the probability of a value strictly above $k$, equal to $1 - F(k)$. For the geometric distribution with $p = 0.2$ it has a closed form, $P(X > 5) = 0.8^5 = 0.32768$, the chance that the first five trials all fail; for a die, $P(X > 3) = \\frac{3}{6}$.

For an infinite support the calculator sums the complement rather than the tail itself, which is also the quickest way by hand: compute $F(k)$ and subtract from $1$. The usual mistake is to answer "more than $k$" with $1 - F(k - 1)$, which includes $k$; that is the next type, [At Least: P(X ≥ k)](!#at-least-p-x-k). Complements and tails are covered in [Calculations using the PMF](!/probability/probability-function/pmf#6) and [Connection to CDF](!/probability/probability-function/pmf#10).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj25: {
      title: `At Least: P(X ≥ k)`,
      content: `**P(X ≥ k)** is the right tail including $k$: $1 - F(k - 1)$, the probability of $k$ or more. For a die, $P(X \\ge 3) = \\frac{4}{6} \\approx 0.666667$; for the geometric distribution with $p = 0.2$, $P(X \\ge 5) = 0.8^4 = 0.4096$, the chance that the first four trials fail.

This is the query behind "at least", "no fewer than" and "$k$ or more" questions, and the one used for a $p$-value style question such as "how likely are $8$ or more heads in $10$ flips", which gives $\\frac{45 + 10 + 1}{1024} \\approx 0.054688$. The difference between this type and [Strictly Greater Than: P(X > k)](!#strictly-greater-than-p-x-k) is exactly $P(X = k)$. The relation to the CDF is taught in [Connection to CDF](!/probability/probability-function/pmf#10) and [The CDF of a discrete variable](!/probability/cdf#discrete).`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is the difference between discrete and continuous probability distributions?",
      answer: "Discrete distributions assign probabilities to countable outcomes (0, 1, 2, 3...) using a probability mass function (PMF). Continuous distributions assign probabilities to intervals of real numbers using a probability density function (PDF). Discrete distributions model counted phenomena like coin flips or defects. Continuous distributions model measured quantities like height or time."
    },
    obj2: {
      question: "When should I use binomial vs hypergeometric distribution?",
      answer: "Use binomial when sampling with replacement or when the population is effectively infinite—each trial has constant success probability. Use hypergeometric when sampling without replacement from a finite population—probabilities change as items are removed. If sample size is small relative to population (<5%), binomial approximates hypergeometric well."
    },
    obj3: {
      question: "What does the lambda parameter mean in Poisson distribution?",
      answer: "Lambda (λ) represents the average rate of events per interval. For λ=3.5, expect 3.5 events on average in the time/space interval. Lambda is both the mean and variance of the Poisson distribution. Higher λ values increase both the expected count and variability. The distribution peaks near λ—the most likely outcome approximates the average rate."
    },
    obj4: {
      question: "How do I interpret P(X ≤ k) vs P(X < k) in the calculators?",
      answer: "P(X ≤ k) includes k itself: the probability of at most k, meaning k or fewer. P(X < k) excludes k: the probability of strictly less than k, meaning up to k-1. For discrete distributions, P(X < k) = P(X ≤ k-1). The difference equals P(X = k). Use ≤ for 'at most' questions, < for 'fewer than' questions."
    },
    obj5: {
      question: "What is the relationship between geometric and negative binomial distributions?",
      answer: "The geometric distribution is a special case of negative binomial with r=1 success. Geometric models trials until first success, while negative binomial models failures before the r-th success. Both involve independent trials with constant success probability. Negative binomial generalizes geometric from 'wait for one success' to 'wait for r successes.'"
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Discrete Probability Distributions Calculator",
      "description": "Comprehensive calculator for six discrete probability distributions: uniform, binomial, geometric, negative binomial, hypergeometric, and Poisson. Features PMF visualization, statistical analysis, and flexible probability queries.",
      "url": "https://www.learnmathclass.com/probability/calculators/discrete-distributions",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Six discrete distribution calculators in one interface",
        "Discrete uniform, binomial, geometric, negative binomial, hypergeometric, Poisson",
        "Six query types: exact probability, cumulative less/greater, inequalities",
        "Interactive PMF bar chart visualization",
        "Complete distribution statistics: mean, variance, standard deviation",
        "Full probability mass function tables",
        "Real-time input validation with error messages",
        "PMF formula display with mathematical notation",
        "Tabbed interface for easy distribution switching",
        "Calculate and reset functions for each distribution"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
    },
    
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Probability",
          "item": "https://www.learnmathclass.com/probability"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Calculators",
          "item": "https://www.learnmathclass.com/probability/calculators"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Discrete Distributions",
          "item": "https://www.learnmathclass.com/probability/calculators/discrete-distributions"
        }
      ]
    },
    
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqQuestions[key].answer
        }
      }))
    }
  }

  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }

  const detailInstructions = [
    `Pick a calculator with the six buttons above the card: Discrete Uniform, Binomial, Geometric, Negative Binomial, Hypergeometric or Poisson; each keeps its own values. [Learn more about switching calculators](!#switching-between-the-six-calculators)`,
    `Pick a **Probability Type**: the full distribution, or one of P(X = k), P(X < k), P(X ≤ k), P(X > k), P(X ≥ k); changing it clears the result and the k box. [Learn more about the query types](!#selecting-probability-query-types)`,
    `Type the parameters of the chosen distribution, for example **a** and **b** for the uniform calculator or **n** and **p** for the binomial one; a red note flags a value of the wrong kind at once. [Learn more about the uniform calculator](!#using-the-discrete-uniform-calculator)`,
    `For a query other than the full distribution, type the value **k** (the uniform calculator calls it **x**) in the box that appears below the parameters. [Learn more about binomial probabilities](!#calculating-binomial-distribution-probabilities)`,
    `Click **Calculate**; it stays grey until every box is valid. The query card shows the probability to six decimals, then the cards for the mean, the variance and the tool's own quantities. [Learn more about the results](!#calculating-reading-the-results-and-resetting)`,
    `In the full-distribution mode, read the PMF chart and the value list under the cards; **Distribution Info** repeats the formula. [Learn more about the Poisson calculator](!#poisson-distribution-for-event-counts)`,
    `Read the panel on the right: it explains the active calculator and, once you pick one, the chosen query type, with links to the sections below. [Learn more about the geometric calculator](!#working-with-geometric-distribution)`,
    `Click **Reset** to empty the boxes of the active tool and remove its result; the other tools are left as they were. [Learn more about resetting](!#calculating-reading-the-results-and-resetting)`,
  ];
  const ddExplanations = {
    'uniform': {
      main: { title: 'Discrete Uniform Distribution', content: `Equal probability $\\frac{1}{n}$ for each of the $n = b - a + 1$ whole numbers from $a$ to $b$; mean $\\frac{a + b}{2}$, variance $\\frac{n^2 - 1}{12}$. [Learn more about the discrete uniform distribution](!#the-discrete-uniform-distribution) · [All discrete distributions](!#choosing-the-right-discrete-distribution)` },
      all: { title: 'Full distribution', content: `Lists $P(X = x)$ for every value of the discrete uniform distribution (up to the display cap), draws the PMF chart and shows the mean and the variance. [Learn more about the full distribution](!#the-full-distribution-query) · [All query types](!#understanding-pmf-vs-cdf)` },
      equal: { title: 'P(X = x)', content: `Gives the probability of one exact value of the discrete uniform distribution, read from its PMF. [Learn more about exact probabilities](!#exact-probability-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      less: { title: 'P(X < x)', content: `Sums the PMF of the discrete uniform distribution over the values below $x$, leaving $x$ out: the CDF one step earlier, $F(x - 1)$. [Learn more about strictly less than](!#strictly-less-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      lessEqual: { title: 'P(X ≤ x)', content: `Sums the PMF of the discrete uniform distribution over the values up to and including $x$: the cumulative distribution function $F(x)$. [Learn more about at most](!#at-most-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greater: { title: 'P(X > x)', content: `Gives the right tail of the discrete uniform distribution without $x$: $1 - F(x)$. [Learn more about strictly greater than](!#strictly-greater-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greaterEqual: { title: 'P(X ≥ x)', content: `Gives the right tail of the discrete uniform distribution including $x$: $1 - F(x - 1)$. [Learn more about at least](!#at-least-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
    },
    'binomial': {
      main: { title: 'Binomial Distribution', content: `Counts the successes in $n$ independent trials with success probability $p$: $P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$; mean $np$, variance $np(1 - p)$. [Learn more about the binomial distribution](!#the-binomial-distribution) · [All discrete distributions](!#choosing-the-right-discrete-distribution)` },
      all: { title: 'Full distribution', content: `Lists $P(X = k)$ for every value of the binomial distribution (up to the display cap), draws the PMF chart and shows the mean and the variance. [Learn more about the full distribution](!#the-full-distribution-query) · [All query types](!#understanding-pmf-vs-cdf)` },
      equal: { title: 'P(X = k)', content: `Gives the probability of one exact value of the binomial distribution, read from its PMF. [Learn more about exact probabilities](!#exact-probability-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      less: { title: 'P(X < k)', content: `Sums the PMF of the binomial distribution over the values below $k$, leaving $k$ out: the CDF one step earlier, $F(k - 1)$. [Learn more about strictly less than](!#strictly-less-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      lessEqual: { title: 'P(X ≤ k)', content: `Sums the PMF of the binomial distribution over the values up to and including $k$: the cumulative distribution function $F(k)$. [Learn more about at most](!#at-most-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greater: { title: 'P(X > k)', content: `Gives the right tail of the binomial distribution without $k$: $1 - F(k)$. [Learn more about strictly greater than](!#strictly-greater-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greaterEqual: { title: 'P(X ≥ k)', content: `Gives the right tail of the binomial distribution including $k$: $1 - F(k - 1)$. [Learn more about at least](!#at-least-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
    },
    'geometric': {
      main: { title: 'Geometric Distribution', content: `Counts the trials up to the first success: $P(X = k) = (1 - p)^{k - 1} p$ for $k \\ge 1$; mean $\\frac{1}{p}$, variance $\\frac{1 - p}{p^2}$. [Learn more about the geometric distribution](!#the-geometric-distribution) · [All discrete distributions](!#choosing-the-right-discrete-distribution)` },
      all: { title: 'Full distribution', content: `Lists $P(X = k)$ for every value of the geometric distribution (up to the display cap), draws the PMF chart and shows the mean and the variance. [Learn more about the full distribution](!#the-full-distribution-query) · [All query types](!#understanding-pmf-vs-cdf)` },
      equal: { title: 'P(X = k)', content: `Gives the probability of one exact value of the geometric distribution, read from its PMF. [Learn more about exact probabilities](!#exact-probability-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      less: { title: 'P(X < k)', content: `Sums the PMF of the geometric distribution over the values below $k$, leaving $k$ out: the CDF one step earlier, $F(k - 1)$. [Learn more about strictly less than](!#strictly-less-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      lessEqual: { title: 'P(X ≤ k)', content: `Sums the PMF of the geometric distribution over the values up to and including $k$: the cumulative distribution function $F(k)$. [Learn more about at most](!#at-most-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greater: { title: 'P(X > k)', content: `Gives the right tail of the geometric distribution without $k$: $1 - F(k)$. [Learn more about strictly greater than](!#strictly-greater-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greaterEqual: { title: 'P(X ≥ k)', content: `Gives the right tail of the geometric distribution including $k$: $1 - F(k - 1)$. [Learn more about at least](!#at-least-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
    },
    'negative-binomial': {
      main: { title: 'Negative Binomial Distribution', content: `Counts the failures before the $r$-th success: $P(X = k) = \\binom{k + r - 1}{k} p^r (1 - p)^k$ for $k \\ge 0$; mean $\\frac{r(1 - p)}{p}$. [Learn more about the negative binomial distribution](!#the-negative-binomial-distribution) · [All discrete distributions](!#choosing-the-right-discrete-distribution)` },
      all: { title: 'Full distribution', content: `Lists $P(X = k)$ for every value of the negative binomial distribution (up to the display cap), draws the PMF chart and shows the mean and the variance. [Learn more about the full distribution](!#the-full-distribution-query) · [All query types](!#understanding-pmf-vs-cdf)` },
      equal: { title: 'P(X = k)', content: `Gives the probability of one exact value of the negative binomial distribution, read from its PMF. [Learn more about exact probabilities](!#exact-probability-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      less: { title: 'P(X < k)', content: `Sums the PMF of the negative binomial distribution over the values below $k$, leaving $k$ out: the CDF one step earlier, $F(k - 1)$. [Learn more about strictly less than](!#strictly-less-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      lessEqual: { title: 'P(X ≤ k)', content: `Sums the PMF of the negative binomial distribution over the values up to and including $k$: the cumulative distribution function $F(k)$. [Learn more about at most](!#at-most-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greater: { title: 'P(X > k)', content: `Gives the right tail of the negative binomial distribution without $k$: $1 - F(k)$. [Learn more about strictly greater than](!#strictly-greater-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greaterEqual: { title: 'P(X ≥ k)', content: `Gives the right tail of the negative binomial distribution including $k$: $1 - F(k - 1)$. [Learn more about at least](!#at-least-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
    },
    'hypergeometric': {
      main: { title: 'Hypergeometric Distribution', content: `Counts the successes in $n$ draws without replacement from $N$ items with $K$ successes: $P(X = k) = \\binom{K}{k}\\binom{N - K}{n - k} / \\binom{N}{n}$; mean $\\frac{nK}{N}$. [Learn more about the hypergeometric distribution](!#the-hypergeometric-distribution) · [All discrete distributions](!#choosing-the-right-discrete-distribution)` },
      all: { title: 'Full distribution', content: `Lists $P(X = k)$ for every value of the hypergeometric distribution (up to the display cap), draws the PMF chart and shows the mean and the variance. [Learn more about the full distribution](!#the-full-distribution-query) · [All query types](!#understanding-pmf-vs-cdf)` },
      equal: { title: 'P(X = k)', content: `Gives the probability of one exact value of the hypergeometric distribution, read from its PMF. [Learn more about exact probabilities](!#exact-probability-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      less: { title: 'P(X < k)', content: `Sums the PMF of the hypergeometric distribution over the values below $k$, leaving $k$ out: the CDF one step earlier, $F(k - 1)$. [Learn more about strictly less than](!#strictly-less-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      lessEqual: { title: 'P(X ≤ k)', content: `Sums the PMF of the hypergeometric distribution over the values up to and including $k$: the cumulative distribution function $F(k)$. [Learn more about at most](!#at-most-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greater: { title: 'P(X > k)', content: `Gives the right tail of the hypergeometric distribution without $k$: $1 - F(k)$. [Learn more about strictly greater than](!#strictly-greater-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greaterEqual: { title: 'P(X ≥ k)', content: `Gives the right tail of the hypergeometric distribution including $k$: $1 - F(k - 1)$. [Learn more about at least](!#at-least-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
    },
    'poisson': {
      main: { title: 'Poisson Distribution', content: `Counts events at a constant average rate $\\lambda$: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k \\ge 0$; mean and variance both $\\lambda$. [Learn more about the Poisson distribution](!#the-poisson-distribution) · [All discrete distributions](!#choosing-the-right-discrete-distribution)` },
      all: { title: 'Full distribution', content: `Lists $P(X = k)$ for every value of the Poisson distribution (up to the display cap), draws the PMF chart and shows the mean and the variance. [Learn more about the full distribution](!#the-full-distribution-query) · [All query types](!#understanding-pmf-vs-cdf)` },
      equal: { title: 'P(X = k)', content: `Gives the probability of one exact value of the Poisson distribution, read from its PMF. [Learn more about exact probabilities](!#exact-probability-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      less: { title: 'P(X < k)', content: `Sums the PMF of the Poisson distribution over the values below $k$, leaving $k$ out: the CDF one step earlier, $F(k - 1)$. [Learn more about strictly less than](!#strictly-less-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      lessEqual: { title: 'P(X ≤ k)', content: `Sums the PMF of the Poisson distribution over the values up to and including $k$: the cumulative distribution function $F(k)$. [Learn more about at most](!#at-most-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greater: { title: 'P(X > k)', content: `Gives the right tail of the Poisson distribution without $k$: $1 - F(k)$. [Learn more about strictly greater than](!#strictly-greater-than-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
      greaterEqual: { title: 'P(X ≥ k)', content: `Gives the right tail of the Poisson distribution including $k$: $1 - F(k - 1)$. [Learn more about at least](!#at-least-p-x-k) · [All query types](!#understanding-pmf-vs-cdf)` },
    },
  };
  const demos = {
    'switching-between-the-six-calculators': {
      title: 'Three of the six calculators',
      component: 'uniform',
      frame: true,
      scale: 0.4,
      minHeight: 416,
      script: [
        { say: 'CLICK Binomial Distribution Calculator\nThe card changes: boxes for n and p, the heading names the tool.', at: 'tr' },
        { click: { button: 'Binomial Distribution Calculator', exact: true } },
        { wait: 2600 },
        { say: 'CLICK Poisson Distribution Calculator\nOne parameter box, λ.', at: 'tr' },
        { click: { button: 'Poisson Distribution Calculator', exact: true } },
        { wait: 2600 },
        { say: 'CLICK Discrete Uniform Distribution Calculator\nBack to the first tool; its boxes are still empty.', at: 'tr' },
        { click: { button: 'Discrete Uniform Distribution Calculator', exact: true } },
        { wait: 2400 },
      ],
    },
    'selecting-probability-query-types': {
      title: 'Three query types on ten coin flips',
      component: 'binomial',
      frame: false,
      scale: 0.4,
      minHeight: 416,
      script: [
        { say: 'TYPE 10 and 0.5, CLICK Calculate\nThe full distribution: eleven bars, mean 5.0000, variance 2.5000.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '10' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '0.5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X = k), TYPE 5, CLICK Calculate\nThe result is cleared on the pick; P(X = 5) = 0.246094.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'equal' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X ≤ k), TYPE 3, CLICK Calculate\nP(X ≤ 3) = 0.171875: the sum of the first four bars.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'lessEqual' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '3' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
      ],
    },
    'using-the-discrete-uniform-calculator': {
      title: 'A die: the full distribution, P(X ≤ 2), a value outside the range',
      component: 'uniform',
      frame: false,
      scale: 0.4,
      minHeight: 416,
      script: [
        { say: 'TYPE 1 and 6, CLICK Calculate\nn = 6, P(X = x) = 0.1667, mean 3.5000, variance 2.9167; six equal bars.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '1' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '6' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X ≤ x), TYPE 2, CLICK Calculate\nP(X ≤ 2) = 0.333333.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'lessEqual' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '2' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'TYPE 7 as x, CLICK Calculate\nRefused: x must be between 1 and 6.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '7' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 2600 },
      ],
    },
    'calculating-binomial-distribution-probabilities': {
      title: 'Ten coin flips: full distribution, P(X = 5), k above n',
      component: 'binomial',
      frame: false,
      scale: 0.4,
      minHeight: 416,
      script: [
        { say: 'TYPE 10 and 0.5, CLICK Calculate\nq = 0.5000, mean 5.0000, variance 2.5000, std dev 1.5811; a symmetric hump.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '10' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '0.5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X = k), TYPE 5, CLICK Calculate\nP(X = 5) = 0.246094.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'equal' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'TYPE 12 as k, CLICK Calculate\nRefused: k cannot exceed n.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '12' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 2600 },
      ],
    },
    'working-with-geometric-distribution': {
      title: 'p = 0.2: full distribution, P(X = 5), P(X > 5)',
      component: 'geometric',
      frame: false,
      scale: 0.4,
      minHeight: 416,
      script: [
        { say: 'TYPE 0.2, CLICK Calculate\nMean 5.0000, variance 20.0000; the bars fall by a fifth each step.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '0.2' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X = k), TYPE 5, CLICK Calculate\nP(X = 5) = 0.081920: four failures, then a success.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'equal' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X > k), TYPE 5, CLICK Calculate\nP(X > 5) = 0.327680 = 0.8⁵: five failures in a row.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'greater' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
      ],
    },
    'negative-binomial-distribution-calculator': {
      title: 'r = 5, p = 0.3: full distribution, P(X = 10), P(X ≤ 10)',
      component: 'negative-binomial',
      frame: false,
      scale: 0.4,
      minHeight: 416,
      script: [
        { say: 'TYPE 5 and 0.3, CLICK Calculate\nMean 11.6667, variance 38.8889: failures before the fifth success.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '5' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '0.3' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X = k), TYPE 10, CLICK Calculate\nP(X = 10) = 0.068710.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'equal' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '10' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X ≤ k), TYPE 10, CLICK Calculate\nP(X ≤ 10) = 0.484509.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'lessEqual' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '10' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
      ],
    },
    'hypergeometric-distribution-for-sampling-without-replacement': {
      title: 'A five-card hand: full distribution, P(X = 3), K above N',
      component: 'hypergeometric',
      frame: false,
      scale: 0.4,
      minHeight: 416,
      script: [
        { say: 'TYPE 52, 13 and 5, CLICK Calculate\nMean 1.2500, variance 0.8640: hearts in a five-card hand.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '52' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '13' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X = k), TYPE 3, CLICK Calculate\nP(X = 3) = 0.081543: exactly three hearts.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'equal' },
        { set: { css: 'input[type="text"]', nth: 3 }, value: '3' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'TYPE 60 as K, CLICK Calculate\nRefused: K cannot exceed N.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '60' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 2600 },
      ],
    },
    'poisson-distribution-for-event-counts': {
      title: 'λ = 3.5: full distribution, P(X = 5), P(X ≤ 3)',
      component: 'poisson',
      frame: false,
      scale: 0.4,
      minHeight: 416,
      script: [
        { say: 'TYPE 3.5, CLICK Calculate\nMean 3.5000, variance 3.5000; the hump peaks at 3.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '3.5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X = k), TYPE 5, CLICK Calculate\nP(X = 5) = 0.132169.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'equal' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X ≤ k), TYPE 3, CLICK Calculate\nP(X ≤ 3) = 0.536633.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'lessEqual' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '3' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
      ],
    },
    'calculating-reading-the-results-and-resetting': {
      title: 'A refused pair, the result cards, Reset',
      component: 'uniform',
      frame: false,
      scale: 0.4,
      minHeight: 416,
      script: [
        { say: 'TYPE 6 and 1, CLICK Calculate\nRefused: b must be greater than a.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '6' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '1' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 2600 },
        { say: 'TYPE 1 and 6, CLICK Calculate\nThe cards: n = 6, P(X = x) = 0.1667, mean 3.5000, variance 2.9167, then the chart.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '1' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '6' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3200 },
        { say: 'CLICK Reset\nBoxes empty, result gone; the query type stays.', at: 'tr' },
        { click: { button: 'Reset', exact: true } },
        { wait: 2400 },
      ],
    },
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      menuItems,
      detailInstructions,
      ddExplanations,
      demos,
      seoData: {
        title: "Discrete Distributions Calculator | 6 Distribution Tools",
        description: "Calculate probabilities for binomial, Poisson, geometric, hypergeometric, negative binomial, and uniform distributions with PMF charts and statistics.",
        keywords: keyWords.join(", "),
        url: "/probability/calculators/discrete-distributions",
        name: "Discrete Distributions Calculator"
      },
    }
  }
}

export default function DistributionsCalculatorPage({seoData, sectionsContent, introContent, faqQuestions, schemas, menuItems, detailInstructions = [], ddExplanations = null, demos = {}}) {

  const searchParams = useSearchParams()
  const tab = searchParams.get('tab')
  const initialTab = tab ? parseInt(tab) : 1

  // the calculator a demo drives: the whole frame (tab bar + active tool) or one tool with its own panel texts
  const demoTool = (slug) => {
    const d = demos[slug]
    if (d.frame) return <GenericMultiComponentFrame components={DISTRIBUTION_COMPONENTS} explanations={ddExplanations || {}} initialActive={1} buttonMinWidth="160px" primaryColor="#007bff" />
    const Tool = DISTRIBUTION_COMPONENTS.find((c) => c.key === d.component).component
    return <Tool explanations={ddExplanations ? ddExplanations[d.component] : undefined} />
  }
  const demoPlayer = (slug) => (
    <ToolDemoPlayer
      key={`demo-${slug}`}
      script={demos[slug].script}
      title={demos[slug].title}
      label={`Demo: ${demos[slug].title}`}
      scale={demos[slug].scale || 0.4}
      minHeight={demos[slug].minHeight || undefined}
      renderText={processContent}
    >
      {demoTool(slug)}
    </ToolDemoPlayer>
  )
  const genericSections = [
    { id: 'switching-between-the-six-calculators', title: sectionsContent.obj12.title, link: sectionsContent.obj12.link, content: [demoPlayer('switching-between-the-six-calculators'), sectionsContent.obj12.content] },
    { id: 'selecting-probability-query-types', title: sectionsContent.obj1.title, link: sectionsContent.obj1.link, content: [demoPlayer('selecting-probability-query-types'), sectionsContent.obj1.content] },
    { id: 'using-the-discrete-uniform-calculator', title: sectionsContent.obj2.title, link: sectionsContent.obj2.link, content: [demoPlayer('using-the-discrete-uniform-calculator'), sectionsContent.obj2.content] },
    { id: 'calculating-binomial-distribution-probabilities', title: sectionsContent.obj3.title, link: sectionsContent.obj3.link, content: [demoPlayer('calculating-binomial-distribution-probabilities'), sectionsContent.obj3.content] },
    { id: 'working-with-geometric-distribution', title: sectionsContent.obj4.title, link: sectionsContent.obj4.link, content: [demoPlayer('working-with-geometric-distribution'), sectionsContent.obj4.content] },
    { id: 'negative-binomial-distribution-calculator', title: sectionsContent.obj5.title, link: sectionsContent.obj5.link, content: [demoPlayer('negative-binomial-distribution-calculator'), sectionsContent.obj5.content] },
    { id: 'hypergeometric-distribution-for-sampling-without-replacement', title: sectionsContent.obj6.title, link: sectionsContent.obj6.link, content: [demoPlayer('hypergeometric-distribution-for-sampling-without-replacement'), sectionsContent.obj6.content] },
    { id: 'poisson-distribution-for-event-counts', title: sectionsContent.obj7.title, link: sectionsContent.obj7.link, content: [demoPlayer('poisson-distribution-for-event-counts'), sectionsContent.obj7.content] },
    { id: 'calculating-reading-the-results-and-resetting', title: sectionsContent.obj13.title, link: sectionsContent.obj13.link, content: [demoPlayer('calculating-reading-the-results-and-resetting'), sectionsContent.obj13.content] },
    { id: 'what-are-discrete-probability-distributions', title: sectionsContent.obj8.title, link: sectionsContent.obj8.link, content: [sectionsContent.obj8.content] },
    { id: 'choosing-the-right-discrete-distribution', title: sectionsContent.obj9.title, link: sectionsContent.obj9.link, content: [sectionsContent.obj9.content] },
    { id: 'the-discrete-uniform-distribution', title: sectionsContent.obj14.title, link: sectionsContent.obj14.link, content: [sectionsContent.obj14.content] },
    { id: 'the-binomial-distribution', title: sectionsContent.obj15.title, link: sectionsContent.obj15.link, content: [sectionsContent.obj15.content] },
    { id: 'the-geometric-distribution', title: sectionsContent.obj16.title, link: sectionsContent.obj16.link, content: [sectionsContent.obj16.content] },
    { id: 'the-negative-binomial-distribution', title: sectionsContent.obj17.title, link: sectionsContent.obj17.link, content: [sectionsContent.obj17.content] },
    { id: 'the-hypergeometric-distribution', title: sectionsContent.obj18.title, link: sectionsContent.obj18.link, content: [sectionsContent.obj18.content] },
    { id: 'the-poisson-distribution', title: sectionsContent.obj19.title, link: sectionsContent.obj19.link, content: [sectionsContent.obj19.content] },
    { id: 'understanding-pmf-vs-cdf', title: sectionsContent.obj10.title, link: sectionsContent.obj10.link, content: [sectionsContent.obj10.content] },
    { id: 'the-full-distribution-query', title: sectionsContent.obj20.title, link: sectionsContent.obj20.link, content: [sectionsContent.obj20.content] },
    { id: 'exact-probability-p-x-k', title: sectionsContent.obj21.title, link: sectionsContent.obj21.link, content: [sectionsContent.obj21.content] },
    { id: 'strictly-less-than-p-x-k', title: sectionsContent.obj22.title, link: sectionsContent.obj22.link, content: [sectionsContent.obj22.content] },
    { id: 'at-most-p-x-k', title: sectionsContent.obj23.title, link: sectionsContent.obj23.link, content: [sectionsContent.obj23.content] },
    { id: 'strictly-greater-than-p-x-k', title: sectionsContent.obj24.title, link: sectionsContent.obj24.link, content: [sectionsContent.obj24.content] },
    { id: 'at-least-p-x-k', title: sectionsContent.obj25.title, link: sectionsContent.obj25.link, content: [sectionsContent.obj25.content] },
    { id: 'related-probability-tools-and-calculators', title: sectionsContent.obj11.title, link: sectionsContent.obj11.link, content: [sectionsContent.obj11.content] },
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
        
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
        />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
        />
      </Head>

      {/* <GenericNavbar/> */}
    
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Discrete Distributions Calculator</h1>
      <div style={{marginBottom:'20px'}}>
        <ExplanationDetails instructions={detailInstructions} title='How to use Discrete Distributions Calculator' />
      </div>
      <br/>
      <VerticalButtonGroup 
        items={menuItems}
        width="250px" 
        theme='vivid'
        isSticky={true}
        verticalOffset='200px'
      />
      <div style={{marginTop:'-220px'}}>
        <GenericMultiComponentFrame
          components={DISTRIBUTION_COMPONENTS}
          explanations={ddExplanations || {}}
          initialActive={initialTab}
          buttonMinWidth="160px"
          primaryColor="#007bff"
        />
      </div>
      <br/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <IntroSection 
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor="#f2f2f2"
        textColor="#34383c"
      /> */}
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}