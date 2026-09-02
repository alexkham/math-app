
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import DiscreteProbabilityDistributions from '@/app/components/visualizations/probability/discrete-distribution/DiscreteProbabilityDistributions'
import ContinuousProbabilityDistributions from '@/app/components/visualizations/probability/continuous-distribution/ContinuousProbabilityDistribution'
import discretePmfDiagrams from '@/app/components/visualizations/probability/discrete-distribution/discretePmfDiagrams'
import continuousPdfDiagrams from '@/app/components/visualizations/probability/continuous-distribution/continuousPdfDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'discrete' } },
    { params: { view: 'continuous' } }
  ];

  return { paths, fallback: false };
}


export async function getStaticProps({ params }){

  const viewConfig = {
    'discrete': {
      component: 'DiscreteProbability',
      title: "Discrete Probability Distributions - Interactive PMF Visualizer | Learn Math Class",
      description: "Interactive discrete probability distribution visualizer with Binomial, Poisson, Geometric and more. Explore probability mass functions with real-time parameter controls and calculations.",
      keywords: [
        'discrete probability distribution',
        'probability mass function',
        'PMF calculator',
        'binomial distribution',
        'Poisson distribution',
        'geometric distribution',
        'discrete random variable',
        'interactive PMF',
        'probability mass calculator',
        'discrete distribution visualizer',
        'hypergeometric distribution',
        'negative binomial distribution',
        'PMF interactive tool',
        'discrete probability calculator',
        'probability mass function graph'
      ],
      url: "/probability/visual-tools/probability-function/discrete",
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="30" x2="18" y2="62" stroke="#AFA9EC" stroke-width="1.6"/><line x1="30" y1="20" x2="30" y2="62" stroke="#AFA9EC" stroke-width="1.6"/><line x1="42" y1="36" x2="42" y2="62" stroke="#AFA9EC" stroke-width="1.6"/><line x1="54" y1="26" x2="54" y2="62" stroke="#AFA9EC" stroke-width="1.6"/><line x1="66" y1="46" x2="66" y2="62" stroke="#AFA9EC" stroke-width="1.6"/><circle cx="18" cy="30" r="3.4" fill="#AFA9EC" stroke="#3C3489" stroke-width="1.1"/><circle cx="30" cy="20" r="3.4" fill="#AFA9EC" stroke="#3C3489" stroke-width="1.1"/><circle cx="42" cy="36" r="3.4" fill="#AFA9EC" stroke="#3C3489" stroke-width="1.1"/><circle cx="54" cy="26" r="3.4" fill="#AFA9EC" stroke="#3C3489" stroke-width="1.1"/><circle cx="66" cy="46" r="3.4" fill="#AFA9EC" stroke="#3C3489" stroke-width="1.1"/><line x1="10" y1="62" x2="74" y2="62" stroke="#B5D4F4" stroke-width="1.1"/><text x="40" y="74" font-family="Georgia,serif" font-size="7" fill="#CECBF6" text-anchor="middle" font-style="italic">P(X = x)</text></svg>`,
      category: "Probability Functions & CDF",
      name: "Discrete Probability Distributions",
      h1: "Discrete Probability Distribution Visualizer",
      introTitle: "Understanding Discrete Probability Distributions",
      introContent: "Discrete probability distributions describe random variables with countable outcomes. The probability mass function (PMF) assigns exact probabilities to specific values. Explore six fundamental discrete distributions with interactive parameter controls.",
      sectionsContent: {
        obj1: {
          title: `Selecting a Distribution Type`,
          content: `Click the distribution tabs at the top to switch between six discrete distributions. Each tab shows the distribution name: Discrete Uniform, Binomial, Geometric, Negative Binomial, Hypergeometric, and Poisson. The selected distribution displays in blue with its parameter controls below. Start with Discrete Uniform for the simplest case, or jump directly to the distribution relevant to your problem. Each distribution has a brief description underneath its name explaining what it models. The tool remembers your last selection, making it easy to compare distributions by switching back and forth.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj2: {
          title: `Adjusting Distribution Parameters`,
          content: `Use the sliders to change distribution parameters and watch the bar chart update instantly. Each distribution has different parameters: Binomial uses $n$ (number of trials) and $p$ (success probability), while Poisson uses only $\\lambda$ (rate parameter). Drag sliders smoothly or click anywhere on the slider track to jump to that value. The current parameter values display next to each slider label. For the Hypergeometric distribution, note that the number of draws and success states cannot exceed the population size. The tool automatically constrains parameters to valid ranges. Experiment with extreme parameter values to see how distributions behave at their limits.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj3: {
          title: `Reading the Bar Chart`,
          content: `The bar chart displays probability values on the vertical axis and possible outcome values on the horizontal axis. Each bar height represents the probability of that specific outcome occurring. Taller bars indicate more likely values. The chart automatically scales to show all bars clearly, adjusting the vertical axis as you change parameters. Hover over any bar to see the exact probability value displayed in a tooltip. The tooltip shows both the outcome value $k$ and its probability $P(X = k)$ to six decimal places. For distributions with many possible values, the chart shows only values with non-negligible probability. Compare bar heights directly to understand relative likelihoods.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj4: {
          title: `Understanding Probability Values`,
          content: `All probability values fall between 0 and 1, where 0 means impossible and 1 means certain. Values close to 0 indicate unlikely outcomes, while values near 1 indicate highly likely outcomes. The sum of all bar heights always equals exactly 1, representing certainty that one of the outcomes will occur. For symmetric distributions like Binomial with $p = 0.5$, the highest bars cluster around the center. For skewed distributions like Geometric, the highest bar appears on one side with a long tail extending in the other direction. Notice how probability spreads out as you increase variance parameters. When comparing distributions, similar shapes suggest similar probabilistic behavior.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj5: {
          title: `Comparing Distribution Shapes`,
          content: `Switch between distributions to observe different probability patterns. The Discrete Uniform creates equal-height bars across all values in its range. Binomial distributions form bell-shaped patterns that become more symmetric as $n$ increases. Geometric distributions always show exponential decay with the highest probability at the first value. Poisson distributions shift rightward as $\\lambda$ increases, transitioning from highly skewed to approximately symmetric. Negative Binomial distributions extend the geometric pattern, showing where the $r$-th success is likely to occur. Hypergeometric distributions resemble Binomial but account for sampling without replacement. Understanding these shape differences helps you select the appropriate distribution for your scenario.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj6: {
          title: `Working with Different Scenarios`,
          content: `Each distribution models specific real-world scenarios. Use Binomial for fixed-trial experiments like flipping a coin 10 times or testing 50 items for defects. Choose Poisson for rare events occurring over time, such as website visits per hour or earthquakes per year. Select Geometric when counting trials until the first success, like rolling dice until you get a six. Negative Binomial extends this to count trials until the $r$-th success. Use Hypergeometric when sampling without replacement from a finite population, such as drawing cards or selecting items from a batch. The parameter controls let you adjust scenarios to match your specific situation. The explanation panel provides formulas and typical applications for the selected distribution.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj7: {
          title: `What is a Probability Mass Function?`,
          content: `The probability mass function (PMF) assigns a probability to each discrete value a random variable can take. Written as $P(X = k)$, it gives the probability that random variable $X$ equals exactly $k$. The PMF must satisfy two properties: each probability is between 0 and 1, and all probabilities sum to 1. For example, a fair six-sided die has PMF $P(X = k) = 1/6$ for $k = 1, 2, 3, 4, 5, 6$. The PMF differs from the **probability density function** used for continuous variables. For comprehensive coverage of **random variables**, **expectation**, and **variance** calculations using PMFs, see our detailed probability theory pages.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj8: {
          title: `Binomial Distribution Fundamentals`,
          content: `The Binomial distribution models the number of successes in $n$ independent trials, each with success probability $p$. Its PMF is $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$, where $\\binom{n}{k}$ is the binomial coefficient. The expected value is $E[X] = np$ and variance is $\\text{Var}(X) = np(1-p)$. As $n$ increases with $p$ fixed, the distribution becomes more bell-shaped and approximates a Normal distribution. When $n$ is large and $p$ is small such that $np$ remains moderate, it approximates a Poisson distribution. For detailed derivations of Binomial properties, applications in **hypothesis testing**, and connections to **combinatorics**, see our Binomial distribution theory page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj9: {
          title: `Poisson Distribution Basics`,
          content: `The Poisson distribution describes the number of events occurring in a fixed interval when events happen at a constant average rate $\\lambda$. Its PMF is $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$. Both the mean and variance equal $\\lambda$. This distribution applies when events occur independently and the average rate stays constant. The Poisson approximates Binomial when $n$ is large, $p$ is small, and $np \\approx \\lambda$. Common applications include modeling rare events, arrivals in queueing systems, and defects in manufacturing. For in-depth coverage of Poisson process theory, **exponential distribution** connections, and statistical inference with Poisson data, see our detailed Poisson distribution page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj10: {
          title: `Geometric vs Negative Binomial`,
          content: `The Geometric distribution models trials until the first success, with PMF $P(X = k) = (1-p)^{k-1} p$. It has the memoryless property: the probability of success in future trials doesn't depend on past failures. The Negative Binomial generalizes this to count trials until the $r$-th success. Its PMF is $P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}$. When $r = 1$, Negative Binomial reduces to Geometric. Both distributions are right-skewed with exponential decay. For comprehensive theory on these distributions, their role in **survival analysis**, and applications in **sequential experiments**, see our detailed pages on Geometric and Negative Binomial distributions.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj11: {
          title: `When to Use Each Distribution`,
          content: `Choose Discrete Uniform when all outcomes in a range are equally likely, such as rolling a fair die or selecting a random integer. Use Binomial for counting successes in a fixed number of independent trials with constant success probability. Select Poisson when counting rare events over time or space intervals with a constant average rate. Choose Geometric when counting trials until the first success occurs. Use Negative Binomial when counting trials until $r$ successes occur, generalizing the geometric case. Select Hypergeometric when sampling without replacement from a finite population, where the composition of remaining items changes after each draw. The key distinction is whether sampling is with replacement (Binomial) or without replacement (Hypergeometric).`,
          before: ``,
          after: ``,
          link: '',
        },
        obj12: {
          title: `Related Probability Concepts`,
          content: `**Expected Value Calculator** - Compute the mean of discrete probability distributions to find the long-run average outcome.

**Variance Calculator** - Calculate the spread of probability distributions to quantify uncertainty around the expected value.

**Cumulative Distribution Function** - The CDF gives probabilities of being less than or equal to a value, computed by summing the PMF.

**Continuous Probability Distributions** - For uncountable outcomes like measurements, explore probability density functions instead.

**Combinatorics** - Understanding combinations and permutations is essential for calculating binomial and hypergeometric probabilities.

**Random Variables** - Learn about discrete random variables, their properties, and how probability mass functions define their behavior.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj13: {
          title: `Discrete Uniform: Six Equal Bars`,
          content: `At the opening range $a = 1$ to $b = 6$ — a fair die — the chart shows six bars of identical height $1/6 = 0.1667$. The six sum to exactly $1$.

Equal heights are the visual signature of a uniform distribution, and they are why every value is its own mode.`,
          before: ``,
          after: `A uniform PMF is the only one on this page with no peak. Because every bar is the same height, the distribution has no single most likely outcome — formally, all six values are modes.

The mean is $\\frac{a+b}{2} = 3.5$, which is not one of the six possible values. That is worth pausing on: a distribution's mean need not be an outcome it can produce, and the fair die is the standard example.`,
          link: '',
        },

        obj14: {
          title: `Binomial: a Symmetric Peak at the Mean`,
          content: `With $n = 10$ and $p = 0.5$ the chart shows eleven bars, $k = 0$ through $10$, summing to exactly $1$. The tallest is at $k = 5$ with $P(X = 5) = 0.2461$.

The shape is symmetric because $p = 0.5$ makes the binomial coefficients palindromic.`,
          before: ``,
          after: `Every bar height here is a binomial coefficient over $2^{10} = 1024$: the row $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$. The peak $252/1024 = 0.2461$ is the tallest bar the chart will show for this distribution.

Note how modest that peak is. Even the single most likely outcome happens under a quarter of the time, and the two extremes at $k = 0$ and $k = 10$ have probability $1/1024 \\approx 0.001$ each — visible as bars barely off the axis. Ten coin flips give five heads more often than any other single count, but usually give something else.`,
          link: '',
        },

        obj15: {
          title: `Geometric: Decay from the First Bar`,
          content: `With $p = 0.3$ the tallest bar is the first one, $P(X = 1) = 0.3$, and each bar after it is $0.7$ times the one before.

The mode of a geometric distribution is always $k = 1$, whatever $p$ is: the single most likely number of trials until the first success is one trial.`,
          before: ``,
          after: `The constant ratio between neighbouring bars is the memoryless property drawn out. Having already failed $k$ times, the chance of succeeding on the next trial is still $p$ — so the staircase looks the same from wherever you start.

One detail about this chart specifically. The tool's builder drops any bar with probability at or below $0.001$, so the plot stops at $k = 16$ and the bars shown sum to $0.9967$ rather than $1$. The missing $0.33\\%$ is real probability living past the right edge, not an error: the geometric support is unbounded, and the tool has to stop somewhere. The same filter applies to the negative binomial and to no other distribution here.`,
          link: '',
        },

        obj16: {
          title: `Negative Binomial: the Peak Moves Off the First Bar`,
          content: `With $r = 3$ and $p = 0.4$ the bars start at $k = 3$ — three successes need at least three trials — and the tallest is at $k = 5$ with $P(X = 5) = 0.1382$.

Setting $r = 1$ would collapse this exactly to the geometric case, peak and all.`,
          before: ``,
          after: `That shift of the peak away from the left edge is the whole difference between waiting for one success and waiting for several. A single success is most likely to arrive immediately; three successes are not, because the first two have to happen first.

The mean is $r/p = 7.5$, well to the right of the mode at $5$ — a right-skewed distribution, which the long thin tail on the chart shows directly. As with the geometric, the $0.001$ filter truncates that tail, so the plotted bars sum to $0.9976$.`,
          link: '',
        },

        obj17: {
          title: `Hypergeometric: Sampling Without Replacement`,
          content: `With a population of $N = 50$ containing $K = 20$ successes and $n = 10$ draws, the bars run $k = 0$ to $10$ and sum to exactly $1$. The peak is at $k = 4$ with $P(X = 4) = 0.2801$.

That peak sits at the mean $n \\cdot \\frac{K}{N} = 10 \\times 0.4 = 4$.`,
          before: ``,
          after: `Compare this with the binomial. A binomial with $n = 10$ and $p = 0.4$ has the same mean of $4$, but a *wider* spread: its variance is $np(1-p) = 2.4$ against the hypergeometric's $2.4 \\times \\frac{N-n}{N-1} = 2.4 \\times \\frac{40}{49} \\approx 1.96$.

That extra factor is the finite population correction, and it is always less than 1 when $n > 1$. Sampling without replacement is self-correcting — every success drawn makes the next success slightly less likely — so outcomes cluster more tightly around the mean than independent trials would.`,
          link: '',
        },

        obj18: {
          title: `Poisson: Two Modes at an Integer Rate`,
          content: `At $\\lambda = 3$ the bars run $k = 0$ to $18$ and sum to $1$. The chart has **two** equally tall bars, at $k = 2$ and $k = 3$, both at $P = 0.2240$.

That is not a coincidence or a rounding artefact.`,
          before: ``,
          after: `Consecutive Poisson probabilities are related by $\\frac{P(k)}{P(k-1)} = \\frac{\\lambda}{k}$, so the ratio is exactly $1$ when $k = \\lambda$. Whenever $\\lambda$ is a whole number the distribution has two modes, at $\\lambda - 1$ and $\\lambda$; here $P(2) = \\frac{9e^{-3}}{2}$ and $P(3) = \\frac{27e^{-3}}{6}$, and both come to $0.2240$.

Nudge $\\lambda$ off an integer and one bar wins: the mode becomes $\\lfloor \\lambda \\rfloor$ alone. It is the clearest thing on this page that you can check by eye and then confirm with one line of algebra.`,
          link: '',
        }
      },
      faqQuestions: {
        obj1: {
          question: "What is a probability mass function?",
          answer: "A probability mass function (PMF) assigns a probability to each possible value of a discrete random variable. It specifies P(X = k) for every k in the variable's range. All probabilities must be between 0 and 1, and they must sum to exactly 1."
        },
        obj2: {
          question: "How do you calculate probabilities with discrete distributions?",
          answer: "Use the distribution's probability mass function formula with your specific parameters. Substitute the parameters and the value k you're interested in, then evaluate the formula. For ranges, sum the PMF values across all k in that range."
        },
        obj3: {
          question: "When should you use a Binomial distribution?",
          answer: "Use Binomial when you have a fixed number of independent trials, each with the same probability of success, and you're counting the total number of successes. Examples include coin flips, quality control testing, and survey responses."
        },
        obj4: {
          question: "What's the difference between Geometric and Negative Binomial distributions?",
          answer: "Geometric counts trials until the first success occurs. Negative Binomial generalizes this to count trials until r successes occur. When r equals 1, Negative Binomial reduces to Geometric. Both model sequential trials with constant success probability."
        },
        obj5: {
          question: "How does Poisson distribution relate to Binomial distribution?",
          answer: "Poisson approximates Binomial when n is large, p is small, and their product np remains moderate. This makes Poisson useful for modeling rare events. The Poisson parameter λ equals np from the Binomial setup."
        }
      }
    },
    
    'continuous': {
      component: 'ContinuousProbability',
      title: "Continuous Probability Distributions - Interactive PDF Visualizer | Learn Math Class",
      description: "Interactive continuous probability distribution visualizer with Normal, Exponential, Uniform distributions. Explore probability density functions with real-time PDF/CDF toggle and parameter controls.",
      keywords: [
        'continuous probability distribution',
        'probability density function',
        'PDF calculator',
        'normal distribution',
        'Gaussian distribution',
        'exponential distribution',
        'uniform distribution',
        'continuous random variable',
        'interactive PDF',
        'probability density calculator',
        'bell curve visualizer',
        'CDF calculator',
        'PDF vs CDF',
        'continuous probability calculator',
        'probability density graph'
      ],
      url: "/probability/visual-tools/probability-function/continuous",
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M 12 62 C 26 62, 28 20, 42 20 C 56 20, 58 62, 72 62 Z" fill="#FAC775" fill-opacity="0.45"/><path d="M 12 62 C 26 62, 28 20, 42 20 C 56 20, 58 62, 72 62" fill="none" stroke="#FAC775" stroke-width="2.1"/><line x1="10" y1="62" x2="74" y2="62" stroke="#B5D4F4" stroke-width="1.1"/><text x="42" y="48" font-family="Georgia,serif" font-size="7.5" fill="#412402" text-anchor="middle" font-style="italic">area = 1</text></svg>`,
      category: "Probability Functions & CDF",
      name: "Continuous Probability Distributions",
      h1: "Continuous Probability Distribution Visualizer",
      introTitle: "Understanding Continuous Probability Distributions",
      introContent: "Continuous probability distributions describe random variables that can take any value in an interval. The probability density function (PDF) shows relative likelihood, while the cumulative distribution function (CDF) shows accumulated probability. Explore three fundamental continuous distributions with interactive controls.",
      sectionsContent: {
        obj1: {
          title: `Selecting a Distribution Type`,
          content: `Click the distribution tabs at the top to switch between three continuous distributions: Uniform, Normal (Gaussian), and Exponential. The selected distribution appears highlighted in blue. Each distribution has a brief description explaining its key characteristics. The Uniform distribution shows constant density over an interval. The Normal distribution displays the classic bell curve shape, symmetric around its mean. The Exponential distribution models waiting times with exponential decay. The tool maintains your previous parameter settings when switching between distributions, making it easy to compare how different distributions behave with similar parameter ranges.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj2: {
          title: `Using the PDF vs CDF Toggle`,
          content: `Toggle between PDF (Probability Density Function) and CDF (Cumulative Distribution Function) views using the buttons above the chart. The PDF view shows the density curve, indicating relative likelihood at each point. Higher curves mean greater density, though the height itself is not a probability. The CDF view shows cumulative probability, displaying $P(X \\leq x)$ at each point. The CDF always increases from 0 to 1, creating an S-shaped curve for most distributions. Switch between views to understand how density accumulates into probability. The PDF shows where probability is concentrated, while the CDF shows total probability up to any point. Both views use the same parameters, so changes in one immediately reflect in the other.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj3: {
          title: `Adjusting Distribution Parameters`,
          content: `Use the sliders to adjust parameters specific to each distribution. For the Uniform distribution, set the lower bound $a$ and upper bound $b$ to define the interval. The Normal distribution uses mean $\\mu$ to shift the curve left or right, and standard deviation $\\sigma$ to control spread. Larger $\\sigma$ creates wider, flatter curves; smaller $\\sigma$ creates taller, narrower curves. The Exponential distribution uses rate parameter $\\lambda$, where larger values create steeper decay and smaller expected values. Drag sliders smoothly or click to jump to specific values. Parameter values display next to each label. The curve updates instantly as you adjust parameters, providing immediate visual feedback on how parameters affect distribution shape.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj4: {
          title: `Reading the Curve`,
          content: `The horizontal axis shows the random variable's values, while the vertical axis shows either density (PDF) or cumulative probability (CDF). For PDF views, curve height indicates relative likelihood. Higher sections correspond to more probable regions, but remember that height is density, not probability. Probability requires integrating the PDF over an interval. For CDF views, the curve height directly gives $P(X \\leq x)$. At any point $x$, read up to the curve and across to the vertical axis to find the cumulative probability. Hover over the curve to see exact values in a tooltip. The tooltip displays both the $x$ value and the corresponding function value (density or cumulative probability) to four decimal places.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj5: {
          title: `Understanding Density vs Probability`,
          content: `Probability density is not the same as probability. Density can exceed 1, especially for narrow distributions concentrated in small intervals. The Normal distribution with small standard deviation can have peak densities much greater than 1. Probability is the area under the PDF curve over an interval, not the height. For any single point, probability equals zero in continuous distributions. To find probability for an interval $[a, b]$, integrate the PDF: $P(a \\leq X \\leq b) = \\int_a^b f(x)dx$. The CDF provides this directly: $P(a \\leq X \\leq b) = F(b) - F(a)$. The total area under any PDF always equals 1, ensuring all possible outcomes have probability 1 collectively.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj6: {
          title: `Comparing Distribution Shapes`,
          content: `Each distribution has distinctive shape characteristics. The Uniform distribution shows a flat, rectangular shape in PDF view, with constant density across the interval and zero outside. Its CDF is a straight diagonal line within the interval. The Normal distribution creates the famous bell curve in PDF view, symmetric and smooth with a single peak at the mean. Its CDF is an S-curve, transitioning smoothly from 0 to 1. The Exponential distribution shows exponential decay in PDF view, starting at its maximum and decreasing rapidly. Its CDF rises quickly then gradually approaches 1. Switch between distributions and adjust parameters to see how shapes transform. Understanding these shape patterns helps identify which distribution best models your data.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj7: {
          title: `What is a Probability Density Function?`,
          content: `The probability density function (PDF) describes the relative likelihood of a continuous random variable taking values near each point. Written as $f(x)$, the PDF must be non-negative everywhere and integrate to 1 over its entire range. Unlike discrete PMFs that give exact probabilities, PDFs give density. Probability comes from integration: $P(a \\leq X \\leq b) = \\int_a^b f(x)dx$. The height $f(x)$ indicates relative likelihood but is not itself a probability. Regions with higher PDF have greater probability per unit width. For comprehensive theory on **continuous random variables**, **integration**, and **cumulative distribution functions**, see our detailed probability density function page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj8: {
          title: `Normal Distribution Fundamentals`,
          content: `The Normal distribution, also called Gaussian, is the most important continuous distribution. Its PDF is $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$. The parameters $\\mu$ (mean) and $\\sigma$ (standard deviation) determine location and spread. The distribution is perfectly symmetric around $\\mu$. The **68-95-99.7 rule** states that approximately 68% of values fall within one standard deviation of the mean, 95% within two, and 99.7% within three. The **Central Limit Theorem** explains why Normal distributions appear throughout nature and statistics. For detailed coverage of **z-scores**, **standardization**, and applications in **statistical inference**, see our Normal distribution theory page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj9: {
          title: `Exponential Distribution Basics`,
          content: `The Exponential distribution models the time between events in a Poisson process. Its PDF is $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$, where $\\lambda$ is the rate parameter. Both the expected value and standard deviation equal $1/\\lambda$. The distribution has the memoryless property: the probability of an event in the next interval doesn't depend on how much time has passed. This makes it unique among continuous distributions. Common applications include modeling equipment lifetimes, waiting times, and radioactive decay. For comprehensive coverage of the **Poisson process**, **memoryless property**, and connections to **reliability theory**, see our Exponential distribution page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj10: {
          title: `Understanding Integration and Area`,
          content: `Integration calculates the area under the PDF curve, converting density into probability. The definite integral $\\int_a^b f(x)dx$ gives $P(a \\leq X \\leq b)$, the probability that $X$ falls between $a$ and $b$. For the entire range, $\\int_{-\\infty}^{\\infty} f(x)dx = 1$, ensuring probabilities sum to certainty. The CDF is the integral of the PDF from negative infinity to $x$: $F(x) = \\int_{-\\infty}^{x} f(t)dt$. Most continuous distributions lack simple closed-form solutions for these integrals, requiring numerical methods. For detailed coverage of **integration techniques**, **numerical integration**, and **CDF properties**, see our comprehensive probability theory pages.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj11: {
          title: `When to Use Each Distribution`,
          content: `Choose the Uniform distribution when all values in an interval are equally likely, such as random positions on a board or random timestamps within a window. Use the Normal distribution for measurements affected by many small independent factors, including heights, weights, test scores, and measurement errors. The **Central Limit Theorem** justifies Normal assumptions for sample means. Select the Exponential distribution for time until an event occurs, especially in memoryless scenarios like equipment failure or radioactive decay. If data shows decay that depends on history, consider other distributions like Weibull. For symmetric data with heavier tails than Normal, consider Student's t-distribution. Match your distribution choice to your data's shape and the process generating it.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj12: {
          title: `Related Probability Concepts`,
          content: `**Cumulative Distribution Function** - The CDF gives accumulated probability, calculated by integrating the PDF from negative infinity to any point.

**Discrete Probability Distributions** - For countable outcomes, use probability mass functions rather than density functions.

**Standard Normal Distribution** - The special case of Normal with mean 0 and standard deviation 1, used for **z-score** transformations.

**Central Limit Theorem** - Explains why sample means follow Normal distributions regardless of the population distribution.

**Expected Value and Variance** - Learn to calculate these summary statistics by integrating with the PDF.

**Statistical Inference** - Apply continuous distributions to **confidence intervals**, **hypothesis testing**, and **estimation**.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj13: {
          title: `Continuous Uniform: a Flat Density and a Straight CDF`,
          content: `With $a = 0$ and $b = 10$ the PDF view is a flat plateau at $f(x) = \\frac{1}{b-a} = 0.1$ between the bounds and zero outside. Switch the toggle and the CDF view is a straight line of slope $0.1$ rising from $0$ to $1$.

The two stills below are the same distribution under the two toggle positions.`,
          before: ``,
          after: `Seeing them together makes the relationship concrete: the CDF's slope *is* the PDF's height. A flat density gives a straight-line CDF, and the two corners in the CDF are exactly where the density jumps from $0$ to $0.1$ and back.

Notice that the density value $0.1$ is not a probability. $P(X = 3) = 0$ here, as it is for any continuous variable. What $0.1$ means is probability per unit of $x$, so the probability of landing in an interval of width $2$ is $0.2$ — you have to multiply by a width before you get a probability at all.`,
          link: '',
        },

        obj14: {
          title: `Normal: the Bell and the Sigmoid`,
          content: `At $\\mu = 0$ and $\\sigma = 1$ the PDF view peaks at $f(0) = \\frac{1}{\\sqrt{2\\pi}} = 0.3989$, and the CDF view is the symmetric S-curve crossing $0.5$ at the mean.

The tool plots the window $\\mu \\pm 4\\sigma$.`,
          before: ``,
          after: `The peak height is worth reading carefully, because it is the clearest illustration that a density can exceed any bound. Here it is $0.399$, comfortably under 1 — but shrink $\\sigma$ and the peak rises without limit, since the area must stay at 1. A density above 1 is perfectly legal; a probability above 1 is not.

The two views also locate $\\sigma$ differently. On the PDF it is the distance from the peak to the inflection points; on the CDF it is where the curve stops steepening. Same number, two quite different visual cues, which is the reason for having the toggle at all.`,
          link: '',
        },

        obj15: {
          title: `Exponential: Peak at Zero, Tail Without End`,
          content: `At $\\lambda = 1$ the PDF view starts at its maximum, $f(0) = \\lambda = 1$, and decays; the CDF view rises steeply then flattens toward $1$.

The tool plots $x$ from $0$ out to $5/\\lambda$.`,
          before: ``,
          after: `The exponential is the one distribution here whose density is largest at the very edge of its support. There is no interior peak: the most probable region is always immediately after zero, whatever $\\lambda$ is.

The right edge of the window is the detail to carry away. The plotted CDF ends at about $0.9931$, not $1$, and the missing $0.69\\%$ is spread over the infinite tail beyond. The PDF view makes the same point differently — the curve is visibly still above zero when the plot stops, so there is clearly more distribution to the right than the window shows.`,
          link: '',
        }
      },
      faqQuestions: {
        obj1: {
          question: "What is a probability density function?",
          answer: "A probability density function (PDF) describes the relative likelihood of a continuous random variable at each point. The PDF itself gives density, not probability. Probabilities are calculated by integrating the PDF over intervals. The area under the entire PDF curve equals 1."
        },
        obj2: {
          question: "How do you calculate probability with continuous distributions?",
          answer: "Calculate probability by integrating the PDF over the desired interval. Use P(a ≤ X ≤ b) = ∫[a to b] f(x)dx. Alternatively, use the CDF: P(a ≤ X ≤ b) = F(b) - F(a), where F is the cumulative distribution function."
        },
        obj3: {
          question: "Why is the probability of an exact value zero?",
          answer: "In continuous distributions, there are infinitely many possible values. The probability of any single exact value is zero because a point has zero width. Probabilities only make sense over intervals with positive width, calculated through integration."
        },
        obj4: {
          question: "What's the difference between PDF and CDF?",
          answer: "PDF (probability density function) shows relative likelihood and requires integration to find probabilities. CDF (cumulative distribution function) directly gives P(X ≤ x) without integration. The CDF is the integral of the PDF from negative infinity to x."
        },
        obj5: {
          question: "When should you use a Normal distribution?",
          answer: "Use Normal distribution for measurements affected by many independent random factors, such as heights, weights, test scores, and errors. The Central Limit Theorem makes Normal appropriate for sample means. Normal fits symmetric data without heavy tails or extreme outliers."
        }
      }
    }
  };

  const currentConfig = viewConfig[params.view];


  /* ---- frozen-state demonstration units (Line 1) ----
     Both charts are recharts, which cannot be rendered to a string at build
     time, so the two diagrams modules port them: the components' own data
     builders and PMF/PDF helpers, evaluated at their default sliders. The
     continuous tool has a second state axis - the PDF/CDF toggle - so each of
     its three distributions is frozen twice and the pair is shown in one unit. */
  const unit = (svg, caption, text) => demoUnitFrame({ svg, caption, text })
  const D = discretePmfDiagrams
  const C = continuousPdfDiagrams

  const unitsByView = {
    discrete: {
      discreteUniform: unit(D.discreteUniform, 'Discrete uniform, a = 1 to b = 6',
        'Six bars of identical height 1/6 = 0.1667 summing to exactly 1. No peak, so every value is a ' +
        'mode - and the mean, 3.5, is not one of the six possible outcomes.'),
      binomial: unit(D.binomial, 'Binomial, n = 10, p = 0.5',
        'Eleven bars summing to 1, symmetric about the peak at k = 5 where P = 0.2461 = 252/1024. The ' +
        'extremes at k = 0 and k = 10 are 1/1024 each, barely off the axis.'),
      geometric: unit(D.geometric, 'Geometric, p = 0.3',
        'The first bar is tallest at 0.3, and each after it is 0.7 times the last. The tool drops bars ' +
        'under 0.001, so the plot stops at k = 16 and the bars sum to 0.9967, not 1.'),
      negativeBinomial: unit(D.negativeBinomial, 'Negative binomial, r = 3, p = 0.4',
        'Support starts at k = 3 and the peak has moved off the first bar to k = 5, P = 0.1382. The ' +
        'mean, 7.5, sits well right of the mode - a right-skewed shape.'),
      hypergeometric: unit(D.hypergeometric, 'Hypergeometric, N = 50, K = 20, n = 10',
        'Eleven bars summing to 1, peaking at the mean k = 4 with P = 0.2801. Tighter than a binomial ' +
        'with the same mean, by the finite population correction (N-n)/(N-1).'),
      poisson: unit(D.poisson, 'Poisson, lambda = 3',
        'Two equally tall bars, at k = 2 and k = 3, both 0.2240. Consecutive Poisson probabilities are ' +
        'in ratio lambda/k, which is exactly 1 at k = lambda, so an integer rate gives two modes.'),
    },
    continuous: {
      uniform: unit([C['uniform-pdf'], C['uniform-cdf']], 'Continuous uniform on [0, 10]: PDF above, CDF below',
        'A flat density of 0.1 and a straight-line CDF of slope 0.1. The CDF slope IS the PDF height, ' +
        'and its two corners are where the density jumps from 0 to 0.1 and back.'),
      normal: unit([C['normal-pdf'], C['normal-cdf']], 'Normal, mean 0, sigma 1: PDF above, CDF below',
        'The bell peaks at 1/sqrt(2 pi) = 0.3989 and the sigmoid crosses 0.5 at the mean. Shrink sigma ' +
        'and the peak rises without limit - a density may exceed 1, a probability may not.'),
      exponential: unit([C['exponential-pdf'], C['exponential-cdf']], 'Exponential, lambda = 1: PDF above, CDF below',
        'Density is largest at the very edge of the support, f(0) = 1, with no interior peak. The ' +
        'plotted CDF ends at 0.9931 - the remaining 0.69% lies past the right edge of the window.'),
    },
  }

  // this page previously built its sections from a hand-written list of numeric
  // ids; replaced with an explicit per-view slug list
  const orderByView = {
    discrete: [
      ['obj1', 'selecting-a-distribution'],
      ['obj2', 'adjusting-parameters'],
      ['obj3', 'reading-the-bar-chart'],
      ['obj13', 'discrete-uniform', 'discreteUniform'],
      ['obj14', 'binomial', 'binomial'],
      ['obj15', 'geometric', 'geometric'],
      ['obj16', 'negative-binomial', 'negativeBinomial'],
      ['obj17', 'hypergeometric', 'hypergeometric'],
      ['obj18', 'poisson', 'poisson'],
      ['obj4', 'understanding-probability-values'],
      ['obj5', 'comparing-distribution-shapes'],
      ['obj6', 'working-with-scenarios'],
      ['obj7', 'what-is-a-pmf'],
      ['obj8', 'binomial-fundamentals'],
      ['obj9', 'poisson-basics'],
      ['obj10', 'geometric-vs-negative-binomial'],
      ['obj11', 'when-to-use-each-distribution'],
      ['obj12', 'related-concepts'],
    ],
    continuous: [
      ['obj1', 'selecting-a-distribution'],
      ['obj2', 'the-pdf-cdf-toggle'],
      ['obj3', 'adjusting-parameters'],
      ['obj13', 'continuous-uniform', 'uniform'],
      ['obj14', 'normal', 'normal'],
      ['obj15', 'exponential', 'exponential'],
      ['obj4', 'reading-the-curve'],
      ['obj5', 'density-vs-probability'],
      ['obj6', 'comparing-distribution-shapes'],
      ['obj7', 'what-is-a-pdf'],
      ['obj8', 'normal-fundamentals'],
      ['obj9', 'exponential-basics'],
      ['obj10', 'integration-and-area'],
      ['obj11', 'when-to-use-each-distribution'],
      ['obj12', 'related-concepts'],
    ],
  }

  /* ---- per-distribution notes appended to the tool's own explanation (Line 1)
     Both components already had `explanationsOverride`, but that REPLACES their
     built-in text. An additive `explanationsAppend` prop was added to each so the
     tool's explanation survives and this link is appended to it. Both panels
     render through processContent, so these use markdown anchors. */
  const note = (slug, label) => ` [Learn more about ${label}](!#${slug})`

  const appendByView = {
    discrete: {
      discreteUniform: note('discrete-uniform', 'the discrete uniform PMF'),
      binomial: note('binomial', 'the binomial PMF'),
      geometric: note('geometric', 'the geometric PMF'),
      negativeBinomial: note('negative-binomial', 'the negative binomial PMF'),
      hypergeometric: note('hypergeometric', 'the hypergeometric PMF'),
      poisson: note('poisson', 'the Poisson PMF'),
    },
    continuous: {
      uniform: note('continuous-uniform', 'the continuous uniform density'),
      normal: note('normal', 'the normal density'),
      exponential: note('exponential', 'the exponential density'),
    },
  }

  const stateUnits = unitsByView[params.view] || {}
  const sectionOrder = orderByView[params.view] || []
  const explanationsAppend = appendByView[params.view] || {}
  const sectionsContent = currentConfig.sectionsContent;
  const faqQuestions = currentConfig.faqQuestions;
  
  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": currentConfig.name,
      "description": currentConfig.description,
      "url": `https://www.learnmathclass.com${currentConfig.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": params.view === 'discrete' ? [
        "Interactive visualization of six discrete probability distributions",
        "Real-time parameter adjustment with instant bar chart updates",
        "Binomial, Poisson, Geometric, Negative Binomial, Hypergeometric, and Discrete Uniform distributions",
        "Hover tooltips showing exact probability values to six decimal places",
        "Detailed explanations with formulas, expected values, and variance calculations",
        "Visual comparison of distribution shapes across different parameter values",
        "Educational panel with real-world applications and usage examples"
      ] : [
        "Interactive visualization of three fundamental continuous distributions",
        "Toggle between PDF (probability density) and CDF (cumulative) views",
        "Normal (Gaussian), Exponential, and Continuous Uniform distributions",
        "Real-time parameter adjustment with instant curve updates",
        "Hover tooltips showing exact density or probability values to four decimal places",
        "Detailed explanations with formulas, mean, variance, and applications",
        "Visual comparison of distribution shapes and characteristics"
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
      "keywords": currentConfig.keywords.join(", ")
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
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/probability/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Probability Functions",
          "item": "https://www.learnmathclass.com/probability/visual-tools/probability-function"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": currentConfig.name,
          "item": `https://www.learnmathclass.com${currentConfig.url}`
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
  };

  const introContent = {
    id: "intro",
    title: currentConfig.introTitle,
    content: currentConfig.introContent
  };

   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: currentConfig.keywords.join(", "),
        url: currentConfig.url,
        name: currentConfig.name
      },
      currentView: params.view,
      stateUnits,
      sectionOrder,
      explanationsAppend,
      componentName: currentConfig.component,
      h1Title: currentConfig.h1
       }
    }
   }

export default function ProbabilityFunctionViewPage({seoData, sectionsContent, stateUnits, sectionOrder, explanationsAppend, introContent, faqQuestions, schemas, currentView, componentName, h1Title}) {

    
  const genericSections = (sectionOrder || []).map(([obj, id, unitKey]) => {
    const src = sectionsContent[obj]
    if (!src || !src.title) return null
    const body = [ src.content ]
    if (unitKey && stateUnits[unitKey]) {
      body.push(<div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />)
      if (src.after) body.push(src.after)
    }
    return { id, title: src.title, link: src.link || '', content: body }
  }).filter(Boolean);

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
      __html: JSON.stringify(schemas.webApplication)
    }}
  />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
    }}
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>{h1Title}</h1>
   <br/>
   <div style={{transform:'scale(0.8)'}}>
   {componentName === 'DiscreteProbability' && (
     <DiscreteProbabilityDistributions explanationsAppend={explanationsAppend}/>
   )}
   
   {componentName === 'ContinuousProbability' && (
     <ContinuousProbabilityDistributions explanationsAppend={explanationsAppend}/>
   )}
   </div>
   
   <br/>
   <SectionTableOfContents sections={genericSections}/>
   <br/>
   <br/>
   <br/>
    {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          textColor="#06357a"
        /> */}
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}