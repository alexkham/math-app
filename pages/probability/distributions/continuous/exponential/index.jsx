import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../../pages/pages.css'
import Head from 'next/head'
import { processContent } from '@/app/utils/contentProcessor'
import ExponentialDistribution from '@/app/components/visualizations/probability/continuous-distribution/ExponentialDistribution'
import ExponentialDistributionCDF from '@/app/components/visualizations/probability/continuous-distribution/CDF/ExponentialDistributionCDF'
import ExponentialDistributionCalculator from '@/app/components/calculators/probability/distributions/continuous/ExponentialDistributionCalculator'


export async function getStaticProps(){

  const keyWords=['','','','','']

  // •

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@




    const sectionsContent={

    obj1:{
      title:`The Probabilistic Experiment Behind exponential distribution`,
      content:`
      The probabilistic experiment behind the exponential distribution focuses on waiting time rather than counts or measurements. The experiment observes how long it takes until a particular event happens, under the assumption that the event occurs continuously and unpredictably, but at a steady average rate.

A defining characteristic of this experiment is lack of memory. The process does not “age”: the chance that the [event](!/probability/events) occurs in the next instant does not depend on how much time has already passed. Waiting longer provides no advantage or disadvantage—the system resets at every moment.

This framework applies when [events](!/probability/events) occur [independently](!/probability/independence), one at a time, and without buildup or anticipation. Time is continuous, and probability accumulates smoothly as time passes.

The exponential distribution captures the idea that short waiting times are common, while long waits are possible but become progressively more rare.
      `,
      before:``,
      after:``,
      link:'',
      example:`
    **Example**:

Consider the time until the next phone call arrives at a quiet call center where calls come in at a stable average rate. Whether the last call arrived a second ago or an hour ago does not affect the likelihood of receiving the next one in the coming minute.
`,
  
  
    },
    obj2:{
      title:`Notation`,
      content:`
      $X \\sim \\text{Exp}(\\lambda)$ — distribution of the [random variable](!/probability/random-variables) (rate parameterization).

$X \\sim \\text{Exponential}(\\lambda)$ — alternative explicit form.

$\\text{Exp}(\\lambda)$ — used to denote the distribution itself (not the [random variable](!/probability/random-variables)).

$X \\sim \\text{Exp}(\\beta)$ — scale parameterization where $\\beta = 1/\\lambda$ is the mean.

**Note:** Always check whether the parameter represents the rate (λ) or the scale (β = 1/λ). Statistical software may use either convention. The rate parameterization is more common in probability theory.
      
      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
      `,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Parameters`,
      content:`
      **λ** (lambda): rate parameter, where $\\lambda > 0$

The exponential distribution is fully characterized by a single parameter. 
**λ** represents the average rate at which events occur per unit time. 
Alternatively, the distribution is sometimes parameterized by $\\beta = 1/\\lambda$, the scale parameter, which represents the mean waiting time. 
Higher λ means events occur more frequently (shorter waiting times), while lower λ means events are more rare (longer waiting times).
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:`Support (Range)`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`Probability Density Function (PDF) and Support (Range)`,
      content:`<h3 style="color: #1e40af;">Probability Density Function (PDF)</h3>
The **probability density function (PDF)** of an **exponential distribution** is given by:

$$f(x) = \\begin{cases} \\lambda e^{-\\lambda x} & \\text{if } x \\geq 0 \\\\ 0 & \\text{if } x < 0 \\end{cases}$$

### Intuition Behind the Formula

 **Decreasing Density**: The exponential distribution has its highest density at x = 0 and decreases exponentially as x increases. This reflects that shorter waiting times are more likely than longer ones.

 **Parameters**:
  • $\\lambda$: The rate parameter controls how quickly the density decreases
  • Higher $\\lambda$ means steeper decline (events happen more frequently)
  • Lower $\\lambda$ means gentler decline (events happen less frequently)

 **Support (Range of the Random Variable)**:
  • The [random variable](!/probability/random-variables) $X$ can take any non-negative value: $[0, \\infty)$
  • Time cannot be negative, so the support starts at zero
  • Theoretically unbounded above, though very large values have low probability
  • The **support** is the half-infinite interval $[0, \\infty)$

 **Logic Behind the Formula**:
  • $\\lambda$: The rate parameter also serves as the initial density at x = 0
  • $e^{-\\lambda x}$: Exponential decay function ensuring rapid decrease for larger x
  • The decay rate is proportional to λ: faster decay for larger λ
  • The total area under the curve equals 1:
  
  $$\\int_{0}^{\\infty} \\lambda e^{-\\lambda x}\\,dx = \\lambda \\left[-\\frac{1}{\\lambda}e^{-\\lambda x}\\right]_{0}^{\\infty} = 1$$

**Practical Example:** Customer service calls arrive at a help desk at an average rate of 5 per hour, so $\\lambda = 5$. The time $X$ (in hours) until the next call follows $\\text{Exp}(5)$. The PDF is $f(x) = 5e^{-5x}$ for $x \\geq 0$. The probability of waiting less than 6 minutes (0.1 hours) is $P(X \\leq 0.1) = 1 - e^{-5(0.1)} \\approx 0.393$, or about 39.3%.

      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Cumulative Distribution Function (CDF)`,
      content:`
      <h3 style="color: #1e3a8a;">Cumulative Distribution Function (CDF)</h3>
The **cumulative distribution function (CDF)** gives the probability that $X$ is less than or equal to a specific value:

$$F(x) = \\begin{cases} 0 & \\text{if } x < 0 \\\\ 1 - e^{-\\lambda x} & \\text{if } x \\geq 0 \\end{cases}$$

**Key Properties**:
• $F(0) = 0$ (no probability mass below zero)
• $F(x) \\to 1$ as $x \\to \\infty$ (all probability is non-negative)
• The CDF increases from 0 to 1, starting slowly and approaching 1 asymptotically
• For any $x \\geq 0$, $P(X > x) = 1 - F(x) = e^{-\\lambda x}$ (survival function)

**Memoryless Property**: The exponential distribution is the only continuous distribution with the memoryless property: $P(X > s + t \\mid X > s) = P(X > t)$. In terms of the CDF: knowing that $X > s$ doesn't change the probability that $X > s + t$ relative to waiting an additional time $t$ from the start.

**Practical Use:** The exponential CDF is one of the simplest to work with. To find $P(X \\leq x)$ when $X \\sim \\text{Exp}(3)$ and $x = 2$: $F(2) = 1 - e^{-3(2)} = 1 - e^{-6} \\approx 0.9975$, meaning about 99.75% of values fall below 2. The complementary probability $P(X > 2) = e^{-6} \\approx 0.0025$.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    // obj7:{
    //   title:`Expected Value (mean)`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj7: {
  title: `Expected Value (Mean)`,
  content: `
Computing the mean of a continuous random variable involves integration rather than summation, weighting each point by its probability density. The [continuous expected value framework](!/probability/expected-value#continuous) applies directly to the exponential distribution:

$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f(x) \\, dx$$

### Formula

$$E[X] = \\frac{1}{\\lambda}$$

Where:
$\\lambda$ = the rate parameter (events per unit time)

### Derivation and Intuition

The exponential distribution has PDF $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$. Computing the expected value:

$$E[X] = \\int_{0}^{\\infty} x \\cdot \\lambda e^{-\\lambda x} \\, dx$$

Using integration by parts with $u = x$ and $dv = \\lambda e^{-\\lambda x} dx$:

$$E[X] = \\left[-x e^{-\\lambda x}\\right]_{0}^{\\infty} + \\int_{0}^{\\infty} e^{-\\lambda x} \\, dx$$

The first term vanishes at both limits. For the second term:

$$E[X] = \\int_{0}^{\\infty} e^{-\\lambda x} \\, dx = \\left[-\\frac{1}{\\lambda} e^{-\\lambda x}\\right]_{0}^{\\infty} = 0 - \\left(-\\frac{1}{\\lambda}\\right) = \\frac{1}{\\lambda}$$

The result $E[X] = \\frac{1}{\\lambda}$ captures an intuitive relationship: if events occur at rate $\\lambda$ per unit time, then the average waiting time until the next event is $\\frac{1}{\\lambda}$ time units. A higher rate means shorter average wait times; a lower rate means longer waits.

This parallels the [geometric distribution](!/probability/distributions/discrete/geometric#expected-value), which models waiting in discrete trials. The exponential distribution is the continuous analog, modeling waiting in continuous time.

### Example

Suppose customers arrive at a store at an average rate of $\\lambda = 3$ customers per hour:

$$E[X] = \\frac{1}{3} \\text{ hours} = 20 \\text{ minutes}$$

The expected time until the next customer arrives is 20 minutes. If the rate increases to $\\lambda = 6$ customers per hour, the expected wait drops to $\\frac{1}{6}$ hours, or 10 minutes.
  `,
  before: ``,
  after: ``,
  link: '',
},
    // obj8:{
    //   title:`Variance and Standard Deviation`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj8: {
  title: `Variance and Standard Deviation`,
  content: `
The [variance](!/probability/variance#calculate) of a continuous random variable quantifies the spread of values around the mean. For continuous distributions, it is calculated through integration:

$$\\mathrm{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 f(x) \\, dx$$

Alternatively, using the computational formula:

$$\\mathrm{Var}(X) = \\mathbb{E}[X^2] - \\mu^2$$

For the **exponential distribution**, this calculation reveals how the spread relates to the rate parameter.

### Formula

$$\\mathrm{Var}(X) = \\frac{1}{\\lambda^2}$$

Where:
$\\lambda$ = the rate parameter (events per unit time)

### Derivation and Intuition

Starting with the computational formula, we need to calculate $\\mathbb{E}[X^2]$.

We know from the expected value section that $\\mu = \\frac{1}{\\lambda}$.

The exponential distribution has PDF $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$:

$$\\mathbb{E}[X^2] = \\int_{0}^{\\infty} x^2 \\cdot \\lambda e^{-\\lambda x} \\, dx$$

Using integration by parts twice (or the gamma function), we obtain:

$$\\mathbb{E}[X^2] = \\frac{2}{\\lambda^2}$$

Applying the computational formula:

$$\\mathrm{Var}(X) = \\frac{2}{\\lambda^2} - \\left(\\frac{1}{\\lambda}\\right)^2 = \\frac{2}{\\lambda^2} - \\frac{1}{\\lambda^2} = \\frac{1}{\\lambda^2}$$

The result $\\mathrm{Var}(X) = \\frac{1}{\\lambda^2}$ shows that variance decreases rapidly as the rate increases. When events occur frequently (large $\\lambda$), waiting times are consistently short with little variability. When events are rare (small $\\lambda$), waiting times become both long and highly variable. The quadratic relationship means doubling the rate reduces variance by a factor of four.

Notably, for the exponential distribution, the standard deviation equals the mean—a unique property that doesn't hold for most distributions.

### Standard Deviation

$$\\sigma = \\frac{1}{\\lambda}$$

### Example

Suppose customers arrive at a store at an average rate of $\\lambda = 3$ customers per hour:

$$\\mathrm{Var}(X) = \\frac{1}{(3)^2} = \\frac{1}{9} \\text{ hours}^2 \\approx 0.111 \\text{ hours}^2$$

$$\\sigma = \\frac{1}{3} \\text{ hours} = 20 \\text{ minutes}$$

The standard deviation of 20 minutes equals the mean waiting time of 20 minutes. This indicates substantial variability: sometimes the next customer arrives in just a few minutes, other times you might wait 40+ minutes, even though the average is 20 minutes.
  `,
  before: ``,
  after: ``,
  link: '',
},
    // obj9:{
    //   title:`Mode and Median`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj9: {
  title: `Mode and Median`,
  content: `### Mode

The [mode](!/probability/mode) is the value where the [probability density function](!/probability/probability-function/pdf) reaches its maximum—the peak of the distribution curve.

For the exponential distribution, the [mode](!/probability/mode) is always:

$$\\text{Mode} = 0$$

**Intuition:** The exponential [PDF](!/probability/probability-function/pdf) is $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$, which is a monotonically decreasing function. The density is highest at $x = 0$ and decreases exponentially as $x$ increases.

At $x = 0$: $f(0) = \\lambda$

For any $x > 0$: $f(x) = \\lambda e^{-\\lambda x} < \\lambda$

The maximum always occurs at the left boundary of the support. This reflects the nature of waiting times—the shortest possible wait (zero) is always the most probable density value, though the probability of any exact value is zero (as with all continuous distributions).

**Example:** 
For customer arrivals with $\\lambda = 3$ per hour:

Mode = 0

The density is highest at zero waiting time, then decays exponentially. While you can't actually wait exactly zero time, the probability density is concentrated near zero, making very short waits most likely.

### Median

The [median](!/probability/median) is the value $m$ such that $P(X \\leq m) = 0.5$—the point that divides the distribution's probability in half.

For the exponential distribution, the [median](!/probability/median) can be found using the [CDF](!/probability/cdf) $F(x) = 1 - e^{-\\lambda x}$:

Setting $F(m) = 0.5$:

$$1 - e^{-\\lambda m} = 0.5$$

$$e^{-\\lambda m} = 0.5$$

$$-\\lambda m = \\ln(0.5) = -\\ln(2)$$

$$m = \\frac{\\ln(2)}{\\lambda}$$

The median is:

$$\\text{Median} = \\frac{\\ln(2)}{\\lambda} \\approx \\frac{0.693}{\\lambda}$$

**Example:**
For customer arrivals with $\\lambda = 3$ per hour:

$$\\text{Median} = \\frac{\\ln(2)}{3} \\approx \\frac{0.693}{3} \\approx 0.231 \\text{ hours} \\approx 13.9 \\text{ minutes}$$

Half of the waiting times are less than 13.9 minutes, and half are greater.

**Properties:**
• The exponential distribution is right-skewed: mode < median < [mean](!/probability/expected-value)
• Mode = 0, Median = $\\frac{\\ln(2)}{\\lambda} \\approx 0.693 \\times \\frac{1}{\\lambda}$, Mean = $\\frac{1}{\\lambda}$
• The median is always smaller than the [mean](!/probability/expected-value): about 69.3% of the mean value
• This reflects the right skew—most observations cluster near zero, but occasional long waits pull the mean higher
• The relationship Median/Mean ≈ 0.693 holds for all exponential distributions regardless of $\\lambda$
  `,
  before: ``,
  after: ``,
  link: '',
},
    // obj10:{
    //   title:`Quantiles/Percentiles`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj10: {
  title: `Quantiles/Percentiles`,
  content: `
A **quantile** is a value that divides the distribution at a specific probability threshold. The $p$-th quantile $x_p$ satisfies:

$$P(X \\leq x_p) = p$$

where $0 < p < 1$. 

**Percentiles** are quantiles expressed as percentages: the $k$-th percentile corresponds to the quantile at $p = k/100$. For example, the 25th percentile is the 0.25 quantile, the 50th percentile is the [median](!/probability/median), and the 75th percentile is the 0.75 quantile.

Quantiles are found by inverting the [CDF](!/probability/cdf): if $F(x_p) = p$, then $x_p = F^{-1}(p)$.

### Finding Quantiles for the Exponential Distribution

For an exponential distribution with rate parameter $\\lambda$, the [CDF](!/probability/cdf) is:

$$F(x) = 1 - e^{-\\lambda x}$$

To find the $p$-th quantile, we solve $F(x_p) = p$:

$$1 - e^{-\\lambda x_p} = p$$

$$e^{-\\lambda x_p} = 1 - p$$

$$-\\lambda x_p = \\ln(1 - p)$$

$$x_p = -\\frac{\\ln(1 - p)}{\\lambda} = \\frac{-\\ln(1 - p)}{\\lambda}$$

This gives the general quantile formula:

$$x_p = \\frac{-\\ln(1 - p)}{\\lambda}$$

Unlike the normal distribution, the exponential distribution has a closed-form expression for quantiles—no tables or numerical methods needed.

### Common Percentiles

**25th Percentile (First Quartile, Q1):**

$$x_{0.25} = \\frac{-\\ln(1 - 0.25)}{\\lambda} = \\frac{-\\ln(0.75)}{\\lambda} = \\frac{0.288}{\\lambda}$$

About 25% of waiting times are less than $\\frac{0.288}{\\lambda}$.

**50th Percentile (Median, Q2):**

$$x_{0.50} = \\frac{-\\ln(1 - 0.50)}{\\lambda} = \\frac{-\\ln(0.50)}{\\lambda} = \\frac{\\ln(2)}{\\lambda} \\approx \\frac{0.693}{\\lambda}$$

This matches the [median](!/probability/median) derived earlier.

**75th Percentile (Third Quartile, Q3):**

$$x_{0.75} = \\frac{-\\ln(1 - 0.75)}{\\lambda} = \\frac{-\\ln(0.25)}{\\lambda} = \\frac{1.386}{\\lambda}$$

About 75% of waiting times are less than $\\frac{1.386}{\\lambda}$.

**Interquartile Range (IQR):**

$$\\text{IQR} = Q3 - Q1 = \\frac{1.386}{\\lambda} - \\frac{0.288}{\\lambda} = \\frac{1.098}{\\lambda}$$

The IQR contains the middle 50% of the distribution.

### Example

For customer arrivals with $\\lambda = 3$ per hour:

**25th percentile:** $\\frac{0.288}{3} = 0.096$ hours $\\approx 5.8$ minutes

25% of waits are less than 5.8 minutes.

**50th percentile:** $\\frac{0.693}{3} = 0.231$ hours $\\approx 13.9$ minutes

Half of waits are less than 13.9 minutes (the [median](!/probability/median)).

**75th percentile:** $\\frac{1.386}{3} = 0.462$ hours $\\approx 27.7$ minutes

75% of waits are less than 27.7 minutes.

**IQR:** $\\frac{1.098}{3} = 0.366$ hours $\\approx 22$ minutes

The middle 50% of waiting times span about 22 minutes.

### Other Notable Percentiles

**90th percentile:** $x_{0.90} = \\frac{-\\ln(0.10)}{\\lambda} = \\frac{2.303}{\\lambda}$ (only 10% of waits exceed this)

**95th percentile:** $x_{0.95} = \\frac{-\\ln(0.05)}{\\lambda} = \\frac{2.996}{\\lambda}$ (only 5% of waits exceed this)

**99th percentile:** $x_{0.99} = \\frac{-\\ln(0.01)}{\\lambda} = \\frac{4.605}{\\lambda}$ (only 1% of waits exceed this)

The exponential distribution's right skew means that while most observations cluster near zero, the upper percentiles can be quite large relative to the [mean](!/probability/expected-value) $\\frac{1}{\\lambda}$.
  `,
  before: ``,
  after: ``,
  link: '',
},
    obj11:{
      title:`Moment Generating Function`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    // obj12:{
    //   title:`Real-World Examples and Common Applications`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj12: {
  title: `Real-World Examples and Common Applications`,
  content: `
The [exponential distribution](!/probability/distributions/continuous/exponential) models waiting times and lifetimes when events occur randomly and independently at a constant rate.

### Common Applications

**Reliability Engineering and Survival Analysis:**
• Component failure times (electronics, mechanical parts)
• System reliability modeling
• Time until equipment breakdown
• Light bulb lifetimes

**Queueing Theory and Service Systems:**
• Time between customer arrivals
• Call center inter-arrival times
• Web server request intervals
• Traffic flow patterns

**Physics and Natural Sciences:**
• Radioactive decay intervals
• Time between cosmic ray detections
• Molecular collision intervals
• Photon emission times

**Insurance and Actuarial Science:**
• Time until next insurance claim
• Inter-occurrence times for accidents
• Time between policy cancellations

### Why It Appears

The exponential distribution is the continuous analog of the [geometric distribution](!/probability/distributions/discrete/geometric). It emerges naturally from [Poisson processes](!/probability/distributions/discrete/poisson)—when events occur at rate $\\lambda$, the time until the next event follows an exponential distribution with the same rate parameter.

The **memoryless property** makes it unique: $P(X > s + t \\mid X > s) = P(X > t)$. Past waiting time provides no information about future waiting time.

### Example Application

A web server receives requests at an average rate of 120 per hour ($\\lambda = 2$ per minute). The time between consecutive requests follows $\\text{Exp}(2)$.

The [median](!/probability/median) wait between requests is $\\frac{\\ln(2)}{2} \\approx 0.35$ minutes (21 seconds). However, 10% of inter-arrival times exceed $\\frac{2.3}{2} = 1.15$ minutes, requiring server capacity planning for occasional gaps.
  `,
  before: ``,
  after: ``,
  link: '',
},
    obj13:{
      title:`Interactive Calculator`,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    // obj14:{
    //   title:`Special Cases`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
    //   link:'',
  
    // },

    obj14: {
  title: `Special Cases`,
  content: `
The exponential distribution has several special cases and limiting behaviors that reveal its connections to other distributions and its unique mathematical properties.

### Unit Exponential Distribution

When $\\lambda = 1$, we obtain the **unit exponential distribution** $\\text{Exp}(1)$:

$$f(x) = e^{-x} \\text{ for } x \\geq 0$$

This simplified form is often used in theoretical work. Any exponential random variable $X \\sim \\text{Exp}(\\lambda)$ can be transformed to unit exponential:

$$Y = \\lambda X \\sim \\text{Exp}(1)$$

### As λ → 0 (Rate Decreases)

As $\\lambda \\to 0$, events become increasingly rare:

• The [mean](!/probability/expected-value) $\\frac{1}{\\lambda} \\to \\infty$ (average wait grows without bound)
• The distribution becomes more spread out
• Most probability mass shifts toward larger values
• The density near zero approaches zero

This represents the limit of extremely infrequent events.

### As λ → ∞ (Rate Increases)

As $\\lambda \\to \\infty$, events occur nearly instantaneously:

• The [mean](!/probability/expected-value) $\\frac{1}{\\lambda} \\to 0$ (average wait shrinks to zero)
• All probability concentrates near zero
• The distribution degenerates toward a point mass at zero

This represents the limit where waiting time becomes negligible.

### Limiting Behavior and Connections

**Relationship to Poisson:**
The exponential distribution is intimately connected to the [Poisson distribution](!/probability/distributions/discrete/poisson). If events follow a Poisson process with rate $\\lambda$, then:

• The time until the first event is $\\text{Exp}(\\lambda)$
• The time between consecutive events is $\\text{Exp}(\\lambda)$

The exponential is the continuous-time analog of the [geometric distribution](!/probability/distributions/discrete/geometric).

**Minimum of Exponentials:**
If $X_1 \\sim \\text{Exp}(\\lambda_1)$ and $X_2 \\sim \\text{Exp}(\\lambda_2)$ are independent, then:

$$\\min(X_1, X_2) \\sim \\text{Exp}(\\lambda_1 + \\lambda_2)$$

The minimum waiting time has rate equal to the sum of rates. This property is crucial in reliability theory (system fails when first component fails).

**Memoryless Property:**
The exponential distribution is the **only continuous distribution** with the memoryless property:

$$P(X > s + t \\mid X > s) = P(X > t)$$

This makes it the natural choice for modeling random failures and arrivals.

### Practical Implications

**Reliability Analysis:**
When $\\lambda$ is very small (reliable components), failures are rare and the exponential model applies over long time spans. As $\\lambda$ increases (less reliable components), the model still applies but predicts more frequent failures.

**Queueing Systems:**
In service systems, when $\\lambda$ is large (high arrival rate), the system stays busy. As $\\lambda$ decreases (low traffic), the server experiences longer idle periods between customers.
  `,
  before: ``,
  after: ``,
  link: '',
},


    // obj15:{
  
    //   title:`Properties`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
  
    obj15: {
  title: `Properties`,
  content: `
The exponential distribution has several distinctive properties, most notably the memoryless property that uniquely characterizes it among continuous distributions.

### Symmetry

The exponential distribution is **not symmetric**. It has:
• Support on $[0, \\infty)$ only
• Maximum density at $x = 0$
• Long right tail extending to infinity
• Strong positive skew

### Skewness

$$\\text{Skewness} = 2$$

The skewness coefficient of 2 indicates substantial right skew. Most probability mass concentrates near zero, but the long tail pulls the [mean](!/probability/expected-value) rightward.

### Kurtosis

$$\\text{Kurtosis} = 9$$

$$\\text{Excess Kurtosis} = 6$$

High kurtosis (9 versus 3 for normal) indicates the exponential distribution has heavier tails than the normal distribution. Extreme values occur more frequently than in normal or uniform distributions.

### Tail Behavior

The exponential distribution has **exponentially decaying right tail**:

$$f(x) = \\lambda e^{-\\lambda x} \\to 0 \\text{ as } x \\to \\infty$$

The tail decreases exponentially, which is:
• Heavier than normal tails (which decay like $e^{-x^2}$)
• Lighter than polynomial tails (like power laws)
• Characteristic of many natural decay processes

Probabilities in the tail:
• $P(X > \\frac{2}{\\lambda}) = e^{-2} \\approx 0.135$ (13.5%)
• $P(X > \\frac{3}{\\lambda}) = e^{-3} \\approx 0.050$ (5%)
• $P(X > \\frac{5}{\\lambda}) = e^{-5} \\approx 0.007$ (0.7%)

### Unique Mathematical Properties

**Memoryless Property (Defining Characteristic):**
$$P(X > s + t \\mid X > s) = P(X > t) \\text{ for all } s, t \\geq 0$$

The exponential is the **only continuous distribution** with this property. Past waiting time provides no information about future waiting time. This makes it ideal for modeling random arrivals and failures without aging effects.

Equivalently:
$$P(X > s + t) = P(X > s) \\cdot P(X > t)$$

**Constant Hazard Rate:**
The hazard function (instantaneous failure rate) is constant:

$$h(x) = \\frac{f(x)}{1 - F(x)} = \\frac{\\lambda e^{-\\lambda x}}{e^{-\\lambda x}} = \\lambda$$

The failure rate doesn't depend on age—components don't "wear out" under the exponential model.

**Closure Under Minimum:**
If $X_1 \\sim \\text{Exp}(\\lambda_1)$ and $X_2 \\sim \\text{Exp}(\\lambda_2)$ are independent:

$$\\min(X_1, X_2) \\sim \\text{Exp}(\\lambda_1 + \\lambda_2)$$

The minimum of exponentials is exponential with rate equal to the sum of rates.

**Scaling Property:**
If $X \\sim \\text{Exp}(\\lambda)$, then for any $c > 0$:

$$cX \\sim \\text{Exp}(\\lambda/c)$$

Rescaling by $c$ divides the rate by $c$.

### Useful Identities

**Relationship to Poisson:**
If events follow a [Poisson process](!/probability/distributions/discrete/poisson) with rate $\\lambda$, the time between events is $\\text{Exp}(\\lambda)$. The number of events in time $t$ is $\\text{Poisson}(\\lambda t)$.

**Mean Equals Standard Deviation:**
$$E[X] = \\sigma = \\frac{1}{\\lambda}$$

This unique relationship (mean = standard deviation) holds only for the exponential distribution.

**Lack of Memory Formula:**
$$E[X - t \\mid X > t] = E[X] = \\frac{1}{\\lambda}$$

The expected remaining waiting time equals the original expected waiting time—knowing you've already waited $t$ time units doesn't change your expectation.

**Survival Function:**
$$S(x) = P(X > x) = e^{-\\lambda x}$$

Simple exponential decay makes many calculations tractable.

**Sum of Exponentials:**
The sum of $n$ independent $\\text{Exp}(\\lambda)$ variables follows a Gamma$(n, \\lambda)$ distribution, generalizing the exponential.
  `,
  before: ``,
  after: ``,
  link: '',
},
    obj16:{
  
      title:`Related Distributions`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj17:{
  
      title:`Parameter Estimation`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
     links:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      examples:`
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Exponential](!/probability/distributions/continuous/uniform#12) →@
            `,
               calculators:`            
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Discrete Distributions Probability Calculators ](!/probability/calculators/continuous-distributions) →@
        `,
  
    },
  
  }


  const introContent = {
  id: "intro",
  title: "Exponential Distribution: Waiting Time Until an Event Occurs",
  content: `
  The exponential distribution models an experiment where events occur continuously and independently at a constant average rate, and the random variable measures the waiting time until the next event occurs. There are no discrete trials and no fixed endpoint; time flows continuously until the event happens. The defining feature of this experiment is that the probability of waiting longer depends only on the current moment, not on how much time has already passed.
  `
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Exponential Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/continuous/exponential",
         name: "name"
      },
        
       }
    }
   }

export default function ExponbentialDistributionPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
          sectionsContent.obj1.example,
          sectionsContent.links.examples,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          // sectionsContent.obj2.content,
          
    <div key={'notation-exponential'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
              {processContent(sectionsContent.obj2.content,)}
          </div>,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          // sectionsContent.obj3.content,
           <div key={'parameters-exponential'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
                      {processContent(sectionsContent.obj3.content,)}
                  </div>,
        ]
    },
    // {
    //     id:'4',
    //     title:sectionsContent.obj4.title,
    //     link:sectionsContent.obj4.link,
    //     content:[
    //       sectionsContent.obj4.content,
    //     ]
    // },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
           <div key={'pdf-exponential'} style={{transform:'scale(0.8)'}}>
                   
                    <ExponentialDistribution/>
                    </div>,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
            <div key={'cdf-exponential'} style={{transform:'scale(0.8)'}}>
                   
                    <ExponentialDistributionCDF/>
                    </div>,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <ExponentialDistributionCalculator/>,
          sectionsContent.links.calculators,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
    {
        id:'16',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
        ]
    },
    // {
    //     id:'17',
    //     title:sectionsContent.obj17.title,
    //     link:sectionsContent.obj17.link,
    //     content:[
    //       sectionsContent.obj17.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
]

  return (
   <>
   <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Exponential Distribution</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
    secondaryNavMode="siblings"  // or "siblings"
    secondaryNavTitle="Other Continuous Distributions" 
   
   />
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
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
