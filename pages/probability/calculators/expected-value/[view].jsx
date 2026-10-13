
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import AffiliateBlock from '@/app/components/affiliates/AffiliateBlock'
import { COURSES } from '@/app/components/affiliates/courses'
import React from 'react'
import Head from 'next/head'
import DirectExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/DirectExpectedValueCalculator'
import RawDataExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/RawDataExpectedValueCalculator'
import GroupedDataExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/GroupedDataExpectedValueCalculator'
import DiscreteUniformExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/DiscreteUniformExpectedValueCalculator'
import BinomialExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/BinomialExpectedValueCalculator'
import GeometricExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/GeometricExpectedValueCalculator'
import NegativeBinomialExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/NegativeBinomialExpectedValueCalculator'
import HypergeometricExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/HypergeometricExpectedValueCalculator'
import PoissonExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/PoissonExpectedValueCalculator'
import ContinuousUniformExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/ContinuousUniformExpectedValueCalculator'
import ExponentialExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/ExponentialExpectedValueCalculator'
import NormalExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/NormalDistributionExpectedValueCalculator'
import '../../../../pages/pages.css'



export async function getStaticPaths() {
  const paths = [
    { params: { view: 'direct-data' } },
    { params: { view: 'raw-data' } },
    { params: { view: 'grouped-data' } },
    { params: { view: 'discrete-uniform' } },
    { params: { view: 'binomial' } },
    { params: { view: 'geometric' } },
    { params: { view: 'negative-binomial' } },
    { params: { view: 'hypergeometric' } },
    { params: { view: 'poisson' } },
    { params: { view: 'continuous-uniform' } },
    { params: { view: 'exponential' } },
    { params: { view: 'normal' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { view } = params;

  const viewConfig = {
    'direct-data': {
      componentName: 'DirectExpectedValueCalculator',
      title: 'Expected Value Calculator - Direct Data | Learn Math Class',
      description: 'Calculate expected value from a probability distribution table. Enter values and their probabilities to compute the mean with step-by-step solutions.',
      keywords: ['expected value calculator', 'direct data', 'probability table', 'mean calculator', 'discrete probability'],
      h1Title: 'Expected Value Calculator - Direct Data',
      url: '/probability/calculators/expected-value/direct-data',
      name: 'Expected Value Calculator - Direct Data'
    },
    'raw-data': {
      componentName: 'RawDataExpectedValueCalculator',
      title: 'Expected Value Calculator - Raw Data | Learn Math Class',
      description: 'Calculate expected value from a list of raw data values. Enter your dataset to compute the mean with detailed calculations.',
      keywords: ['expected value calculator', 'raw data', 'dataset mean', 'average calculator', 'data analysis'],
      h1Title: 'Expected Value Calculator - Raw Data',
      url: '/probability/calculators/expected-value/raw-data',
      name: 'Expected Value Calculator - Raw Data'
    },
    'grouped-data': {
      componentName: 'GroupedDataExpectedValueCalculator',
      title: 'Expected Value Calculator - Grouped Data | Learn Math Class',
      description: 'Calculate expected value from grouped frequency data. Enter class intervals and frequencies to compute the mean with step-by-step solutions.',
      keywords: ['expected value calculator', 'grouped data', 'frequency distribution', 'class intervals', 'grouped mean'],
      h1Title: 'Expected Value Calculator - Grouped Data',
      url: '/probability/calculators/expected-value/grouped-data',
      name: 'Expected Value Calculator - Grouped Data'
    },
    'discrete-uniform': {
      componentName: 'DiscreteUniformExpectedValueCalculator',
      title: 'Discrete Uniform Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for discrete uniform distribution. Enter minimum and maximum values to compute E[X] = (a + b) / 2 with formula explanation.',
      keywords: ['discrete uniform expected value', 'uniform distribution mean', 'expected value calculator', 'discrete uniform'],
      h1Title: 'Discrete Uniform Expected Value Calculator',
      url: '/probability/calculators/expected-value/discrete-uniform',
      name: 'Discrete Uniform Expected Value Calculator'
    },
    'binomial': {
      componentName: 'BinomialExpectedValueCalculator',
      title: 'Binomial Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for binomial distribution. Enter n trials and probability p to compute E[X] = np with detailed formula breakdown.',
      keywords: ['binomial expected value', 'binomial mean calculator', 'np formula', 'binomial distribution'],
      h1Title: 'Binomial Expected Value Calculator',
      url: '/probability/calculators/expected-value/binomial',
      name: 'Binomial Expected Value Calculator'
    },
    'geometric': {
      componentName: 'GeometricExpectedValueCalculator',
      title: 'Geometric Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for geometric distribution. Enter probability p to compute E[X] = 1/p with formula explanation.',
      keywords: ['geometric expected value', 'geometric mean calculator', '1/p formula', 'geometric distribution'],
      h1Title: 'Geometric Expected Value Calculator',
      url: '/probability/calculators/expected-value/geometric',
      name: 'Geometric Expected Value Calculator'
    },
    'negative-binomial': {
      componentName: 'NegativeBinomialExpectedValueCalculator',
      title: 'Negative Binomial Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for negative binomial distribution. Enter r successes and probability p to compute E[X] = r/p with detailed steps.',
      keywords: ['negative binomial expected value', 'negative binomial mean', 'r/p formula', 'negative binomial distribution'],
      h1Title: 'Negative Binomial Expected Value Calculator',
      url: '/probability/calculators/expected-value/negative-binomial',
      name: 'Negative Binomial Expected Value Calculator'
    },
    'hypergeometric': {
      componentName: 'HypergeometricExpectedValueCalculator',
      title: 'Hypergeometric Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for hypergeometric distribution. Enter population parameters to compute E[X] = n(K/N) with formula explanation.',
      keywords: ['hypergeometric expected value', 'hypergeometric mean', 'sampling without replacement', 'hypergeometric distribution'],
      h1Title: 'Hypergeometric Expected Value Calculator',
      url: '/probability/calculators/expected-value/hypergeometric',
      name: 'Hypergeometric Expected Value Calculator'
    },
    'poisson': {
      componentName: 'PoissonExpectedValueCalculator',
      title: 'Poisson Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for Poisson distribution. Enter rate parameter λ to compute E[X] = λ with detailed formula breakdown.',
      keywords: ['poisson expected value', 'poisson mean calculator', 'lambda parameter', 'poisson distribution'],
      h1Title: 'Poisson Expected Value Calculator',
      url: '/probability/calculators/expected-value/poisson',
      name: 'Poisson Expected Value Calculator'
    },
    'continuous-uniform': {
      componentName: 'ContinuousUniformExpectedValueCalculator',
      title: 'Continuous Uniform Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for continuous uniform distribution. Enter interval [a,b] to compute E[X] = (a + b) / 2 with formula explanation.',
      keywords: ['continuous uniform expected value', 'uniform distribution mean', 'expected value calculator', 'continuous uniform'],
      h1Title: 'Continuous Uniform Expected Value Calculator',
      url: '/probability/calculators/expected-value/continuous-uniform',
      name: 'Continuous Uniform Expected Value Calculator'
    },
    'exponential': {
      componentName: 'ExponentialExpectedValueCalculator',
      title: 'Exponential Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for exponential distribution. Enter rate parameter λ to compute E[X] = 1/λ with detailed formula breakdown.',
      keywords: ['exponential expected value', 'exponential mean calculator', '1/lambda formula', 'exponential distribution'],
      h1Title: 'Exponential Expected Value Calculator',
      url: '/probability/calculators/expected-value/exponential',
      name: 'Exponential Expected Value Calculator'
    },
    'normal': {
      componentName: 'NormalExpectedValueCalculator',
      title: 'Normal Distribution Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for normal distribution. Enter mean μ to compute E[X] = μ with formula explanation and standard deviation context.',
      keywords: ['normal expected value', 'normal mean calculator', 'gaussian distribution', 'mu parameter', 'normal distribution'],
      h1Title: 'Normal Distribution Expected Value Calculator',
      url: '/probability/calculators/expected-value/normal',
      name: 'Normal Distribution Expected Value Calculator'
    }
  };

  const config = viewConfig[view];

  const viewSections = {
    'direct-data': {
      obj1: {
        title: `Expected Value from a Probability Table`,
        content: `When the possible values of a random variable and their probabilities are known, the [expected value](!/probability/expected-value) is the probability-weighted average of those values. Each value contributes in proportion to how likely it is, so rare large values count less than common small ones.

A probability table is valid only when every probability lies between $0$ and $1$ and the probabilities add up to exactly $1$. If they add up to something else, either a value is missing or a probability is wrong, and the result would not be a true expected value. The expected value does not have to be one of the listed values: a variable that takes only the values $0$ and $1$ can have an expected value of $0.3$.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a discrete random variable with values $x_1, x_2, \\ldots, x_n$ and probabilities $p_1, p_2, \\ldots, p_n$:

$$E[X] = \\sum_{i=1}^{n} x_i \\, p_i$$

Example: a game pays nothing with probability $0.5$, 10 dollars with probability $0.3$ and 50 dollars with probability $0.2$. The probabilities add up to $1$, so the table is valid. Then

$$E[X] = 0(0.5) + 10(0.3) + 50(0.2) = 0 + 3 + 10 = 13$$

On average the game pays 13 dollars per play. If a ticket costs 15 dollars, a player loses 2 dollars per play in the long run.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Probability tables appear wherever outcomes and their chances are known in advance. Insurers use them to price policies: the expected payout per policy sets the minimum premium. Games of chance are judged by their expected value per play, which shows whether the house has an edge. In business, expected profit compares options whose results are uncertain, such as launching a product that may sell well, average or poorly.

The same table also gives the [variance](!/probability/variance), which measures how far the results spread around the expected value. Two games with the same expected value can carry very different risk.`,
        link: '',
      },
    },
    'raw-data': {
      obj1: {
        title: `Expected Value from Raw Data`,
        content: `When the data is a plain list of observed values, each value is treated as equally likely. The expected value is then the arithmetic mean: the sum of the values divided by how many there are. Repeated values are simply counted each time they appear, which gives them more weight automatically.

This is the empirical version of the [expected value](!/probability/expected-value). It describes the center of the data you have collected, and it estimates the expected value of the process that produced the data. The more values in the list, the closer this estimate tends to be to the true long-run average.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For data values $x_1, x_2, \\ldots, x_n$:

$$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i$$

Example: the scores $4, 7, 7, 8, 9$ have sum $4 + 7 + 7 + 8 + 9 = 35$ and $n = 5$, so

$$\\bar{x} = \\frac{35}{5} = 7$$

The same result comes from a frequency view: the value $7$ appears twice out of five, so it gets weight $\\frac{2}{5}$, while each other value gets weight $\\frac{1}{5}$. Then $4 \\cdot \\frac{1}{5} + 7 \\cdot \\frac{2}{5} + 8 \\cdot \\frac{1}{5} + 9 \\cdot \\frac{1}{5} = 7$.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `The mean of raw data is the most common summary in statistics. It gives the average test score of a class, the average daily temperature over a month, or the average time customers wait in a queue.

The mean is sensitive to extreme values. In the list $2, 3, 3, 4, 38$ the mean is $10$, although four of the five values are below $5$. When a few large values dominate, the [median](!/probability/median) often describes a typical value better.`,
        link: '',
      },
    },
    'grouped-data': {
      obj1: {
        title: `Expected Value from Grouped Data`,
        content: `Grouped data gives class intervals and how many observations fall in each, but not the exact values. To estimate the mean, every observation in a class is replaced by the class midpoint, and each midpoint is weighted by the class frequency.

The result is an estimate, not the exact mean. It is accurate when the values inside each class are spread fairly evenly around the midpoint. Narrow classes give a better estimate than wide ones, because the midpoint is then closer to every value in the class.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `With class midpoints $m_i$ and frequencies $f_i$:

$$\\bar{x} \\approx \\frac{\\sum f_i \\, m_i}{\\sum f_i}$$

Example: test scores grouped as $0$–$10$ (frequency $2$), $10$–$20$ (frequency $5$) and $20$–$30$ (frequency $3$). The midpoints are $5$, $15$ and $25$. Then

$$\\sum f_i m_i = 2(5) + 5(15) + 3(25) = 10 + 75 + 75 = 160$$

and $\\sum f_i = 10$, so the estimated mean is $\\frac{160}{10} = 16$.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Grouped data is common when results are published as frequency tables instead of raw lists: income bands in a census, age groups in a survey, or ranges of test scores. Histograms show the same information as bars.

The midpoint method is the standard way to estimate the mean from such tables. When the last class is open-ended, such as "50 or more", it has no midpoint, and an assumed upper limit has to be chosen before the mean can be estimated.`,
        link: '',
      },
    },
    'discrete-uniform': {
      obj1: {
        title: `The Discrete Uniform Distribution`,
        content: `A [discrete uniform distribution](!/probability/distributions/discrete/uniform) gives equal probability to every integer from $a$ to $b$. There are $n = b - a + 1$ possible values, each with probability $\\frac{1}{n}$. A fair six-sided die is the standard example: the values $1$ to $6$ each have probability $\\frac{1}{6}$.

Because the values are evenly spaced and equally likely, the distribution is symmetric about the middle of the range. The expected value is therefore the midpoint of $a$ and $b$, even when that midpoint is not itself a possible value.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a discrete uniform distribution on the integers $a, a + 1, \\ldots, b$:

$$E[X] = \\frac{a + b}{2}$$

Example: for a fair die, $a = 1$ and $b = 6$, so

$$E[X] = \\frac{1 + 6}{2} = 3.5$$

The same value comes from the definition: $\\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = \\frac{21}{6} = 3.5$. No single roll gives $3.5$; it is the long-run average of many rolls. The variance is $\\frac{n^2 - 1}{12}$, which for the die is $\\frac{35}{12} \\approx 2.92$.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `The discrete uniform distribution models any choice where all options are equally likely: rolling a fair die, drawing a ticket from a well-mixed set of numbered tickets, or a random number generator that picks an integer in a range.

It is also a starting point for checking fairness. If a die is rolled many times and the average is far from $3.5$, that is evidence the die is not fair.`,
        link: '',
      },
    },
    'binomial': {
      obj1: {
        title: `The Binomial Distribution`,
        content: `The [binomial distribution](!/probability/distributions/discrete/binomial) counts the number of successes in $n$ independent trials, where each trial succeeds with the same probability $p$. The number of heads in $10$ coin tosses and the number of defective items in a batch of $50$ are typical examples.

Its expected value has a simple meaning: each trial contributes $p$ successes on average, and there are $n$ trials. This works because the count of successes is the sum of $n$ [indicator variables](!/probability/indicators), one per trial, each with expected value $p$.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a binomial random variable with $n$ trials and success probability $p$:

$$E[X] = np$$

Example: a multiple-choice test has $20$ questions with $4$ options each. A student who guesses every answer succeeds on each question with $p = \\frac{1}{4}$. Then

$$E[X] = 20 \\cdot \\frac{1}{4} = 5$$

On average the student gets $5$ questions right. The variance is $np(1 - p) = 20 \\cdot \\frac{1}{4} \\cdot \\frac{3}{4} = 3.75$, so the standard deviation is about $1.94$.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Binomial models appear wherever a fixed number of independent yes-or-no trials is repeated. Quality control uses $np$ to predict how many defective items a batch will contain. In medicine, it gives the expected number of patients who respond to a treatment with a known success rate. In marketing, it estimates how many of $n$ contacted customers will buy.

The model requires the trials to be independent and $p$ to stay the same. When items are drawn without replacement from a small population, the hypergeometric distribution fits better.`,
        link: '',
      },
    },
    'geometric': {
      obj1: {
        title: `The Geometric Distribution`,
        content: `The [geometric distribution](!/probability/distributions/discrete/geometric) counts the number of independent trials needed to get the first success, where each trial succeeds with probability $p$. Here $X$ includes the successful trial, so its possible values are $1, 2, 3, \\ldots$

The expected value answers the question "how long do I wait on average?" The smaller the success probability, the longer the expected wait. The distribution is memoryless: after any number of failures, the expected number of further trials is the same as at the start.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `When $X$ counts the trials up to and including the first success:

$$E[X] = \\frac{1}{p}$$

Example: rolling a die until the first $6$ appears, with $p = \\frac{1}{6}$:

$$E[X] = \\frac{1}{1/6} = 6$$

It takes $6$ rolls on average. Some books count only the failures before the first success; that version has expected value $\\frac{1 - p}{p}$, which is $5$ for the die. Both describe the same experiment.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Geometric models describe waiting for a first success: the number of sales calls until the first sale, the number of attempts to pass a test, or the number of products tested until the first defective one.

With a success rate of $p = 0.05$, the expected number of attempts is $\\frac{1}{0.05} = 20$. This helps with planning: it sets how many attempts to budget for on average, although any single run can take much longer.`,
        link: '',
      },
    },
    'negative-binomial': {
      obj1: {
        title: `The Negative Binomial Distribution`,
        content: `The [negative binomial distribution](!/probability/distributions/discrete/negative-binomial) counts the number of independent trials needed to get $r$ successes, where each trial succeeds with probability $p$. It generalizes the geometric distribution, which is the case $r = 1$.

The expected value follows from splitting the wait into $r$ stages. Waiting for each success takes $\\frac{1}{p}$ trials on average, and the $r$ waits add up. In this version $X$ counts all trials, including the $r$ successes.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `When $X$ counts the trials needed for $r$ successes:

$$E[X] = \\frac{r}{p}$$

Example: a basketball player makes each free throw with probability $p = 0.8$. The expected number of attempts to make $4$ free throws is

$$E[X] = \\frac{4}{0.8} = 5$$

Some books count only the failures before the $r$-th success. That version has expected value $\\frac{r(1 - p)}{p}$, which is $1$ here: on average $5$ attempts, of which $1$ is a miss.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `The negative binomial distribution is used when a fixed number of successes is the goal: the number of calls needed to make $10$ sales, the number of inspections needed to find $3$ defective parts, or the number of trials needed to recruit $r$ patients for a study.

The failure-count version is also used for count data that varies more than a Poisson model allows, such as the number of accidents per driver or the number of insurance claims per customer.`,
        link: '',
      },
    },
    'hypergeometric': {
      obj1: {
        title: `The Hypergeometric Distribution`,
        content: `The [hypergeometric distribution](!/probability/distributions/discrete/hypergeometric) counts the successes in a sample of size $n$ drawn without replacement from a population of size $N$ that contains $K$ successes. Each draw changes what remains, so the draws are not independent.

The expected value is still simple: the sample is expected to have the same share of successes as the population. The population share is $\\frac{K}{N}$, and a sample of $n$ items contains $n$ times that share on average.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a sample of size $n$ from a population of $N$ items with $K$ successes:

$$E[X] = n \\cdot \\frac{K}{N}$$

Example: a box of $50$ parts contains $5$ defective ones, and $10$ parts are drawn without replacement. Then

$$E[X] = 10 \\cdot \\frac{5}{50} = 1$$

On average the sample contains $1$ defective part. The mean is the same as for a binomial model with $p = \\frac{K}{N}$, but the variance is smaller by the factor $\\frac{N - n}{N - 1}$, because drawing without replacement reduces the spread.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Hypergeometric models fit sampling from a finite group without putting items back: inspecting a sample from a production lot, the number of aces in a five-card poker hand, or the number of matching numbers on a lottery ticket.

For a five-card hand from a $52$-card deck with $4$ aces, the expected number of aces is $5 \\cdot \\frac{4}{52} = \\frac{5}{13} \\approx 0.385$. When the population is much larger than the sample, the binomial distribution gives almost the same answers.`,
        link: '',
      },
    },
    'poisson': {
      obj1: {
        title: `The Poisson Distribution`,
        content: `The [Poisson distribution](!/probability/distributions/discrete/poisson) counts how many events happen in a fixed interval of time or space when events occur independently at a constant average rate. The parameter $\\lambda$ is that average count per interval.

The expected value is exactly the rate parameter, which is what makes the distribution easy to use: if a call center receives $12$ calls per hour on average, the expected number of calls in an hour is $12$. The variance is also $\\lambda$, so the mean and the spread grow together.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a Poisson random variable with rate $\\lambda$:

$$E[X] = \\lambda, \\qquad \\text{Var}(X) = \\lambda$$

Example: a website gets an average of $3$ sign-ups per hour. For one hour, $E[X] = 3$. For a $4$-hour period the rate scales with the length of the interval, so $\\lambda = 3 \\cdot 4 = 12$ and the expected number of sign-ups is $12$.

The probability of no sign-ups in one hour is $P(X = 0) = e^{-3} \\approx 0.050$.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Poisson models count rare, independent events over an interval: emails arriving per hour, typing errors per page, accidents at a junction per month, or decays of a radioactive sample per second.

The expected value sets staffing and capacity: a help desk that expects $\\lambda = 8$ tickets per hour plans for at least that load. The model breaks down when events cluster, for example when one failure triggers others, because the events are then no longer independent.`,
        link: '',
      },
    },
    'continuous-uniform': {
      obj1: {
        title: `The Continuous Uniform Distribution`,
        content: `A [continuous uniform distribution](!/probability/distributions/continuous/uniform) spreads probability evenly over an interval $[a, b]$. Every subinterval of the same length has the same probability, and the density is constant at $\\frac{1}{b - a}$.

Because the density is flat, the distribution balances at the middle of the interval. The expected value is the midpoint $\\frac{a + b}{2}$, the same formula as for the discrete uniform case, though here every real number in the interval is possible.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a continuous uniform random variable on $[a, b]$:

$$E[X] = \\frac{a + b}{2}, \\qquad \\text{Var}(X) = \\frac{(b - a)^2}{12}$$

Example: a bus arrives at a random time between $0$ and $20$ minutes after you reach the stop. The expected wait is

$$E[X] = \\frac{0 + 20}{2} = 10 \\text{ minutes}$$

The variance is $\\frac{20^2}{12} \\approx 33.3$, so the standard deviation is about $5.8$ minutes.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `The continuous uniform distribution models a quantity that is equally likely to fall anywhere in a range: a random arrival time within a window, the position of a break along a rod, or rounding errors, which are roughly uniform between $-0.5$ and $0.5$ units.

Random number generators produce uniform values on $[0, 1]$, and these are the basis for simulating other distributions.`,
        link: '',
      },
    },
    'exponential': {
      obj1: {
        title: `The Exponential Distribution`,
        content: `The [exponential distribution](!/probability/distributions/continuous/exponential) models the waiting time until the next event when events happen at a constant average rate $\\lambda$. It is the continuous counterpart of the geometric distribution, and it is linked to the Poisson distribution: if events arrive at rate $\\lambda$ per unit of time, the time between events is exponential.

The expected waiting time is the reciprocal of the rate. A higher rate means events come more often, so the average wait is shorter.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For an exponential random variable with rate $\\lambda$:

$$E[X] = \\frac{1}{\\lambda}, \\qquad \\text{Var}(X) = \\frac{1}{\\lambda^2}$$

Example: a server fails at an average rate of $\\lambda = 0.5$ times per year. The expected time until the next failure is

$$E[X] = \\frac{1}{0.5} = 2 \\text{ years}$$

Watch the units: the rate and the expected time use the same unit of time. Some books describe the distribution by its mean $\\beta = \\frac{1}{\\lambda}$ instead of its rate.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Exponential models describe waiting times: time until the next customer arrives, the lifetime of an electronic part with no wear-out, or the time between earthquakes in a region.

The distribution is memoryless. If a part with an expected life of $2$ years has already worked for $1$ year, its expected remaining life is still $2$ years. This fits random failures, but not parts that wear out with age.`,
        link: '',
      },
    },
    'normal': {
      obj1: {
        title: `The Normal Distribution`,
        content: `The [normal distribution](!/probability/distributions/continuous/normal) is the bell-shaped distribution described by two parameters: the mean $\\mu$ and the standard deviation $\\sigma$. It is symmetric about $\\mu$, so the expected value, the median and the mode are all equal to $\\mu$.

Unlike most distributions, the normal distribution takes its expected value directly as a parameter. Changing $\\sigma$ makes the bell wider or narrower but does not move its center.`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a normal random variable with mean $\\mu$ and standard deviation $\\sigma$:

$$E[X] = \\mu, \\qquad \\text{Var}(X) = \\sigma^2$$

Example: adult heights in a population are modeled as normal with $\\mu = 170$ cm and $\\sigma = 8$ cm. The expected height is $170$ cm. About $68\\%$ of heights lie within one standard deviation of the mean, between $162$ and $178$ cm, and about $95\\%$ lie within two, between $154$ and $186$ cm.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Normal models describe measurements that come from many small independent effects: heights and weights, measurement errors, test scores, and variation in manufactured parts.

The [central limit theorem](!/probability/central-limit-theorem) explains why the normal distribution appears so often: averages of many independent values are close to normal whatever the shape of the original distribution. Normal tables and $z$-scores, $z = \\frac{x - \\mu}{\\sigma}$, then give the probabilities.`,
        link: '',
      },
    },
  };


  const sectionsContent = viewSections[view] || {
    obj1: {
      title: `Understanding Expected Value`,
      content: ``,
      link: '',
    },
    obj2: {
      title: `Formula and Calculation`,
      content: ``,
      link: '',
    },
    obj3: {
      title: `Applications`,
      content: ``,
      link: '',
    }
  };

  const introContent = {
    id: "intro",
    title: "Calculate Expected Value",
    content: `Use the calculator below to compute the expected value with step-by-step solutions and detailed explanations.`
  };

  return {
    props: {
      sectionsContent,
      introContent,
      seoData: {
        title: config.title,
        description: config.description,
        keywords: config.keywords.join(", "),
        url: config.url,
        name: config.name
      },
      componentName: config.componentName,
      h1Title: config.h1Title
    }
  };
}

export default function ExpectedValueCalculatorPage({ seoData, sectionsContent, introContent, componentName, h1Title }) {

  const genericSections = [
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [sectionsContent.obj1.content]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [sectionsContent.obj2.content]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [sectionsContent.obj3.content]
    }
  ];

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
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": seoData.name,
              "description": seoData.description,
              "keywords": seoData.keywords,
              "url": `https://www.learnmathclass.com${seoData.url}`,
              "dateModified": new Date().toISOString(),
              "inLanguage": "en-US",
              "mainEntity": {
                "@type": "Article",
                "name": seoData.name,
                "dateModified": new Date().toISOString(),
                "author": {
                  "@type": "Organization",
                  "name": "Learn Math Class"
                }
              }
            })
          }}
        />
      </Head>

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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
        {h1Title}
      </h1>
      <br/>

      <div className="calculator-widget"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        transform:'scale(0.95)',
      }}>
        {/* Basic Calculators */}
        {componentName === 'DirectExpectedValueCalculator' && <DirectExpectedValueCalculator/>}
        {componentName === 'RawDataExpectedValueCalculator' && <RawDataExpectedValueCalculator/>}
        {componentName === 'GroupedDataExpectedValueCalculator' && <GroupedDataExpectedValueCalculator/>}

        {/* Discrete Distribution Calculators */}
        {componentName === 'DiscreteUniformExpectedValueCalculator' && <DiscreteUniformExpectedValueCalculator/>}
        {componentName === 'BinomialExpectedValueCalculator' && <BinomialExpectedValueCalculator/>}
        {componentName === 'GeometricExpectedValueCalculator' && <GeometricExpectedValueCalculator/>}
        {componentName === 'NegativeBinomialExpectedValueCalculator' && <NegativeBinomialExpectedValueCalculator/>}
        {componentName === 'HypergeometricExpectedValueCalculator' && <HypergeometricExpectedValueCalculator/>}
        {componentName === 'PoissonExpectedValueCalculator' && <PoissonExpectedValueCalculator/>}

        {/* Continuous Distribution Calculators */}
        {componentName === 'ContinuousUniformExpectedValueCalculator' && <ContinuousUniformExpectedValueCalculator/>}
        {componentName === 'ExponentialExpectedValueCalculator' && <ExponentialExpectedValueCalculator/>}
        {componentName === 'NormalExpectedValueCalculator' && <NormalExpectedValueCalculator/>}
      </div>

      <div style={{maxWidth:'1160px',margin:'0 auto',padding:'0 20px'}}>
        <AffiliateBlock variant="strip" {...COURSES.probability} headline="Expected value is the start of random variables" />
      </div>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <IntroSection 
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      />
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}