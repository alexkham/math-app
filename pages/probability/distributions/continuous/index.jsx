import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import { distributionsDiagramsData } from '@/app/api/db/diagrams/probability/distributions'
import SvgDiagram from '@/app/components/diagrams/render-svg/SvgDiagram'
import { processContent } from '@/app/utils/contentProcessor'


export async function getStaticProps(){

  const keyWords=['continuous distribution','probability','probability distribution',
    'random variable','continuous distribution function',
    'continuous uniform','continuous uniform distribution',
    'probability density function uniform distribution','']

    const sectionsContent={


normal:{
  title:`Normal Distribution`,
  content:``,
  before:``,
  after:``,
  
checklist:`<h2 style="color: #52525b;"> Checklist for Identifying a Normal Distribution</h2>
✔ Data clusters symmetrically around a central value (the mean).
✔ Most values fall near the mean, with frequency decreasing as you move away.
✔ The distribution is bell-shaped and symmetric.
✔ [Random variable](!/probability/random-variables) X represents continuous measurements that can be positive or negative.
✔ Applicable to natural phenomena, measurement errors, and sums of random variables (Central Limit Theorem).
`,
 

parameters:`<h3 style="color: #475569;">Parameters of Normal Distribution</h3>
**μ** (mu): mean or center of the distribution, where $\\mu \\in \\mathbb{R}$

**σ** (sigma): standard deviation, measuring spread around the mean, where $\\sigma > 0$

The normal distribution is fully characterized by these two parameters. **μ** determines the location (where the peak sits on the number line), while **σ** controls the spread (how wide or narrow the bell curve is). [Variance](!/probability/variance) is $\\sigma^2$, but we typically use $\\sigma$ as the primary parameter since it's in the same units as the data.`,


 notation:`<h3 style="color: #334155;">Notations Used</h3>
$X \\sim N(\\mu, \\sigma^2)$ — distribution of the [random variable](!/probability/random-variables) ([variance](!/probability/variance) notation).

$X \\sim \\text{Normal}(\\mu, \\sigma^2)$ — alternative explicit form.

$N(\\mu, \\sigma^2)$ — used to denote the distribution itself (not the [random variable](!/probability/random-variables)
).

$N(0, 1)$ — the standard normal distribution ($\\mu = 0, \\sigma = 1$).

$Z \\sim N(0, 1)$ — conventional notation for a standard normal [random variable](!/probability/random-variables)
.

**Note:** Some texts use $N(\\mu, \\sigma)$ with standard deviation instead of variance. Always check which convention is being used. Statistical software often defaults to variance notation.

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,



pdf:`<h3 style="color: #1e40af;">Probability Density Function (PDF)</h3>
The **probability density function (PDF)** of a **normal distribution** is given by:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}, \\quad -\\infty < x < \\infty$$

### Intuition Behind the Formula

* **Bell-Shaped Curve**: The normal distribution creates a symmetric, bell-shaped curve centered at $\\mu$.

* **Parameters**:
  * $\\mu$: The mean determines where the center of the bell sits
  * $\\sigma$: The standard deviation controls the width of the bell
  * $\\sigma^2$: The [variance](!/probability/variance) ($\\sigma$ squared) appears in the exponent

* **Support** (Range of the [Random Variable](!/probability/random-variables)):
  * The [random variable](!/probability/random-variables) $X$ can take any real value: $(-\\infty, +\\infty)$
  * While theoretically unbounded, approximately 99.7% of values fall within $\\mu \\pm 3\\sigma$
  * The **support** is the entire real line

* **Logic Behind the Formula**:
  * $\\frac{1}{\\sigma\\sqrt{2\\pi}}$: Normalization constant ensuring total area equals 1
  * $(x-\\mu)^2$: Squared distance from the mean (makes curve symmetric)
  * $e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$: Exponential decay as you move away from $\\mu$
  * The total area under the curve equals 1:
  
  $$\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$$

**Practical Example:** Human heights follow approximately a normal distribution. If adult male heights have $\\mu = 175$ cm and $\\sigma = 7$ cm, then $X \\sim N(175, 49)$. The PDF tells us the relative likelihood of observing different heights, with the peak at 175 cm and decreasing probability as we move toward very short or very tall individuals.`,

cdf:`<h3 style="color: #1e3a8a;">Cumulative Distribution Function (CDF)</h3>
The **cumulative distribution function (CDF)** gives the probability that $X$ is less than or equal to a specific value:

$$F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(t-\\mu)^2}{2\\sigma^2}}\\,dt$$

**Standard Normal CDF**: For the standard normal distribution $N(0, 1)$, the CDF is traditionally denoted by $\\Phi(z)$:

$$\\Phi(z) = P(Z \\leq z) = \\int_{-\\infty}^{z} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{t^2}{2}}\\,dt$$

**Key Properties**:
* $F(-\\infty) = 0$ and $F(+\\infty) = 1$
* $F(\\mu) = 0.5$ (the mean is the 50th percentile)
* The CDF is strictly increasing and S-shaped
* Any normal CDF can be expressed using the standard normal: $F(x) = \\Phi\\left(\\frac{x-\\mu}{\\sigma}\\right)$

**Practical Use:** The normal CDF has no closed-form expression, so we use tables, calculators, or software. To find $P(X \\leq 180)$ when $X \\sim N(175, 49)$, convert to standard normal: $Z = (180-175)/7 \\approx 0.714$, then look up $\\Phi(0.714) \\approx 0.762$, meaning about 76.2% of values fall below 180.`,

meanVariance:`<h3 style="color: #1e3a8a;">Mean and Variance</h3>
**Expected Value (Mean)**:

$$E[X] = \\mu$$

The mean of a normal distribution is simply the parameter $\\mu$. This is also the median and mode—all three measures of center coincide for the normal distribution due to its symmetry.

**Variance**:

$$\\text{Var}(X) = \\sigma^2$$

The variance equals the parameter $\\sigma^2$. This measures the average squared deviation from the mean.

**Standard Deviation**:

$$\\text{SD}(X) = \\sigma$$

Standard deviation $\\sigma$ is more interpretable than variance because it's in the same units as the original data. It represents the typical distance of observations from the mean.

**Empirical Rule (68-95-99.7)**:
• Approximately 68% of data falls within $\\mu \\pm \\sigma$
• Approximately 95% of data falls within $\\mu \\pm 2\\sigma$
• Approximately 99.7% of data falls within $\\mu \\pm 3\\sigma$`,

link:'/probability/distributions/continuous/normal',

keyProperties:`<h3 style="color: #1e3a8a;">Key Properties and Special Characteristics</h3>
**Symmetry**: The normal distribution is perfectly symmetric about its mean. This means $P(X \\leq \\mu - a) = P(X \\geq \\mu + a)$ for any value $a$.

**Unimodal**: The distribution has a single peak (mode) at $x = \\mu$, where the probability density is highest.

**Asymptotic**: The tails approach (but never touch) the horizontal axis as $x \\to \\pm\\infty$. Theoretically, any value is possible, though extreme values are increasingly unlikely.

**Central Limit Theorem**: Perhaps the most important property—the sum or average of independent random variables tends toward a normal distribution as sample size increases, regardless of the original distribution (with some conditions).

**Linear Transformations**: If $X \\sim N(\\mu, \\sigma^2)$, then $aX + b \\sim N(a\\mu + b, a^2\\sigma^2)$. This property preserves normality under scaling and shifting.

**Standardization**: Any normal [random variable](!/probability/random-variables) can be standardized: $Z = \\frac{X - \\mu}{\\sigma}$ gives $Z \\sim N(0, 1)$, the standard normal distribution.

**Sums of Normals**: If $X_1 \\sim N(\\mu_1, \\sigma_1^2)$ and $X_2 \\sim N(\\mu_2, \\sigma_2^2)$ are independent, then $X_1 + X_2 \\sim N(\\mu_1 + \\mu_2, \\sigma_1^2 + \\sigma_2^2)$.

**Maximum Entropy**: Among all distributions with specified mean and variance, the normal distribution has the maximum entropy (it's the "least informative" or "most random" distribution given those constraints).

**Why It Matters:** The normal distribution appears throughout statistics because of the Central Limit Theorem. Many statistical methods (t-tests, ANOVA, regression) assume normality or rely on it through the CLT. Understanding these properties helps you recognize when normal approximations are appropriate and when they break down.`,
},


// uniform:{
//       title:`Uniform Continuous Distribution`,
//       content:``,
//       before:``,
//       after:``,
  
//     },
uniform:{
  title:`Continuous Uniform Distribution`,
  content:``,
  before:``,
  after:``,
  link:'/probability/distributions/continuous/uniform',
  
  checklist:`<h2 style="color: #52525b;"> Checklist for Identifying a Continuous Uniform Distribution</h2>
✔ All values in a continuous interval are equally likely.
✔ The probability density is constant across the entire range.
✔ The distribution has a rectangular shape when graphed.
✔ Random variable X can take any value within a finite interval [a, b].
✔ Often models situations with complete uncertainty within known bounds.`,


  parameters:`<h3 style="color: #475569;">Parameters of Continuous Uniform Distribution</h3>
**a**: lower bound of the interval, where $a \\in \\mathbb{R}$

**b**: upper bound of the interval, where $b \\in \\mathbb{R}$ and $b > a$

The continuous uniform distribution is fully characterized by these two parameters. **a** and **b** define the endpoints of the interval where the random variable can take values. The distribution assigns equal probability density to every point in this interval, making it the simplest continuous distribution.`,

  notation:`<h3 style="color: #334155;">Notations Used</h3>
$X \\sim U(a, b)$ — distribution of the [random variable](!/probability/random-variables).

$X \\sim \\text{Uniform}(a, b)$ — alternative explicit form.

$U(a, b)$ or $\\text{Unif}(a, b)$ — used to denote the distribution itself (not the [random variable](!/probability/random-variables)).

$U(0, 1)$ — the standard uniform distribution on the unit interval.

**Note:** The continuous uniform distribution is distinct from the discrete uniform distribution. The continuous version has a probability density function, while the discrete version has a probability mass function.

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,

  pdf:`<h3 style="color: #1e40af;">Probability Density Function (PDF)</h3>
The **probability density function (PDF)** of a **continuous uniform distribution** is given by:

$$f(x) = \\begin{cases} \\frac{1}{b-a} & \\text{if } a \\leq x \\leq b \\\\ 0 & \\text{otherwise} \\end{cases}$$

### Intuition Behind the Formula

* **Constant Density**: The uniform distribution has a flat, rectangular shape. The probability density is the same at every point within the interval [a, b].

* **Parameters**:
  * $a$: The minimum value the [random variable](!/probability/random-variables) can take
  * $b$: The maximum value the [random variable](!/probability/random-variables) can take
  * The width of the interval is $b - a$

* **Support (Range of the Random Variable)**:
  * The [random variable](!/probability/random-variables) $X$ can take any value in the closed interval: $[a, b]$
  * Outside this interval, the probability density is zero
  * The **support** is the finite interval [a, b]

* **Logic Behind the Formula**:
  * $\\frac{1}{b-a}$: The constant density ensures the total area under the curve equals 1
  * The height of the rectangle is $\\frac{1}{b-a}$ and the width is $b-a$, so area = height × width = 1
  * All subintervals of the same length have equal probability
  * The total area under the curve equals 1:
  
  $$\\int_{a}^{b} \\frac{1}{b-a}\\,dx = \\frac{1}{b-a} \\cdot (b-a) = 1$$

**Practical Example:** A bus arrives at a stop every 10 minutes. If you arrive at a random time, your wait time $X$ follows $U(0, 10)$. The PDF is $f(x) = \\frac{1}{10} = 0.1$ for $0 \\leq x \\leq 10$. Any 2-minute interval within this range has the same probability: $P(3 \\leq X \\leq 5) = P(7 \\leq X \\leq 9) = 0.1 \\times 2 = 0.2$.`,

  cdf:`<h3 style="color: #1e3a8a;">Cumulative Distribution Function (CDF)</h3>
The **cumulative distribution function (CDF)** gives the probability that $X$ is less than or equal to a specific value:

$$F(x) = \\begin{cases} 0 & \\text{if } x < a \\\\ \\frac{x-a}{b-a} & \\text{if } a \\leq x \\leq b \\\\ 1 & \\text{if } x > b \\end{cases}$$

**Key Properties**:
* $F(a) = 0$ (no probability mass below the lower bound)
* $F(b) = 1$ (all probability mass is within [a, b])
* The [CDF(Cumulative Density Function)](!/probability/cdf) increases linearly from 0 to 1 within the interval [a, b]
* For any $x$ in [a, b], $F(x)$ represents the fraction of the interval covered from $a$ to $x$

**Practical Use:** The [CDF(Cumulative Density Function)](!/probability/cdf) for the uniform distribution is particularly simple. To find $P(X \\leq x)$ when $X \\sim U(0, 10)$ and $x = 3$: $F(3) = \\frac{3-0}{10-0} = 0.3$, meaning 30% of values fall below 3. For any probability calculation: $P(c \\leq X \\leq d) = F(d) - F(c) = \\frac{d-a}{b-a} - \\frac{c-a}{b-a} = \\frac{d-c}{b-a}$.`,

  meanVariance:`<h3 style="color: #1e3a8a;">Mean and Variance</h3>
**Expected Value (Mean)**:

$$E[X] = \\frac{a+b}{2}$$

The [expected value](!/probability/expected-value) of a uniform distribution is simply the midpoint of the interval. This reflects the distribution's perfect symmetry—the expected value lies exactly halfway between the bounds.

**Variance**:

$$\\text{Var}(X) = \\frac{(b-a)^2}{12}$$

The [variance](!/probability/variance) measures spread around the [mean](!/probability/expected-value). It depends on the square of the interval width. A wider interval means more variability in possible values.

**Standard Deviation**:

$$\\text{SD}(X) = \\frac{b-a}{\\sqrt{12}} = \\frac{b-a}{2\\sqrt{3}}$$

Standard deviation is approximately 28.9% of the interval width. For a uniform distribution on [0, 10], the standard deviation is about 2.89.

**Properties**:
• The median equals the mean: both are $(a+b)/2$
• Any value has equal density, but the distribution still has a well-defined center and spread
• Approximately 86.6% of values fall within one standard deviation of the mean (compared to 68% for normal)`,

  keyProperties:`<h3 style="color: #1e3a8a;">Key Properties and Special Characteristics</h3>
**Perfect Symmetry**: The uniform distribution is symmetric about its mean $(a+b)/2$. The probability density is identical at equal distances from the center: $f(\\mu - d) = f(\\mu + d)$ for any $d$.

**Memoryless in Relative Terms**: While not memoryless in the exponential sense, the uniform distribution has no "preferred" region—every subinterval of equal length has equal probability.

**Bounded Support**: Unlike the normal or [exponential distributions](!probability/distributions/continuous#exponential), the uniform distribution has strict bounds. Values outside [a, b] have zero probability, making it ideal for modeling quantities with known limits.

**Maximum Entropy**: Among all continuous distributions with bounded support [a, b], the uniform distribution has maximum entropy. It represents complete uncertainty about where the value will fall within the interval—no region is favored over any other.

**Linear CDF**: The [CDF](!/probability/cdf) increases at a constant rate within [a, b]. This linearity makes probability calculations particularly straightforward and intuitive.

**Transformation Properties**: Linear transformations preserve uniformity. If $X \\sim U(a, b)$, then $cX + d \\sim U(ca + d, cb + d)$ for $c > 0$. This includes the important case that $\\frac{X-a}{b-a} \\sim U(0, 1)$, the standard uniform.

**Relation to Other Distributions**: The standard uniform $U(0, 1)$ is fundamental in probability theory and simulation. Most random number generators produce uniform random numbers, which can then be transformed to generate samples from any other distribution using the inverse transform method.

**Order Statistics**: For a sample from $U(0, 1)$, the order statistics have well-known beta distributions, making the uniform distribution central to the study of order statistics.

**Why It Matters:** The uniform distribution represents the principle of indifference—when all outcomes in an interval are equally likely. It's essential for modeling complete uncertainty within known bounds, serves as the foundation for random number generation, and appears in numerous statistical procedures and simulation methods.`,
},  
 



// exponential:{
  
//       title:`Exponential Distribution`,
//       content:``,
//       before:``,
//       after:``,
  
//     },
    

exponential:{
  title:`Exponential Distribution`,
  content:``,
  before:``,
  link:'/probability/distributions/continuous/exponential',
  after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use continuous distributions calculator](!/probability/calculator/continuous-distributions?tab=2) →@`,
  
  checklist:`<h2 style="color: #52525b;"> Checklist for Identifying an Exponential Distribution</h2>
✔ Models the time until an event occurs in a continuous process.
✔ Events occur independently at a constant average rate.
✔ The distribution is memoryless: past waiting time doesn't affect future waiting time.
✔ Random variable X represents waiting time, which is always non-negative.
✔ Commonly used for modeling lifetimes, time between arrivals, and decay processes.`,

  parameters:`<h3 style="color: #475569;">Parameters of Exponential Distribution</h3>
**λ** (lambda): rate parameter, where $\\lambda > 0$

The exponential distribution is fully characterized by a single parameter. **λ** represents the average rate at which events occur per unit time. Alternatively, the distribution is sometimes parameterized by $\\beta = 1/\\lambda$, the scale parameter, which represents the mean waiting time. Higher λ means events occur more frequently (shorter waiting times), while lower λ means events are rarer (longer waiting times).`,

  notation:`<h3 style="color: #334155;">Notations Used</h3>
$X \\sim \\text{Exp}(\\lambda)$ — distribution of the [random variable](!/probability/random-variables) (rate parameterization).

$X \\sim \\text{Exponential}(\\lambda)$ — alternative explicit form.

$\\text{Exp}(\\lambda)$ — used to denote the distribution itself (not the [random variable](!/probability/random-variables)).

$X \\sim \\text{Exp}(\\beta)$ — scale parameterization where $\\beta = 1/\\lambda$ is the mean.

**Note:** Always check whether the parameter represents the rate (λ) or the scale (β = 1/λ). Statistical software may use either convention. The rate parameterization is more common in probability theory.

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,

  pdf:`<h3 style="color: #1e40af;">Probability Density Function (PDF)</h3>
The **probability density function (PDF)** of an **exponential distribution** is given by:

$$f(x) = \\begin{cases} \\lambda e^{-\\lambda x} & \\text{if } x \\geq 0 \\\\ 0 & \\text{if } x < 0 \\end{cases}$$

### Intuition Behind the Formula

* **Decreasing Density**: The exponential distribution has its highest density at x = 0 and decreases exponentially as x increases. This reflects that shorter waiting times are more likely than longer ones.

* **Parameters**:
  * $\\lambda$: The rate parameter controls how quickly the density decreases
  * Higher $\\lambda$ means steeper decline (events happen more frequently)
  * Lower $\\lambda$ means gentler decline (events happen less frequently)

* **Support (Range of the Random Variable)**:
  * The [random variable](!/probability/random-variables) $X$ can take any non-negative value: $[0, \\infty)$
  * Time cannot be negative, so the support starts at zero
  * Theoretically unbounded above, though very large values have low probability
  * The **support** is the half-infinite interval $[0, \\infty)$

* **Logic Behind the Formula**:
  * $\\lambda$: The rate parameter also serves as the initial density at x = 0
  * $e^{-\\lambda x}$: Exponential decay function ensuring rapid decrease for larger x
  * The decay rate is proportional to λ: faster decay for larger λ
  * The total area under the curve equals 1:
  
  $$\\int_{0}^{\\infty} \\lambda e^{-\\lambda x}\\,dx = \\lambda \\left[-\\frac{1}{\\lambda}e^{-\\lambda x}\\right]_{0}^{\\infty} = 1$$

**Practical Example:** Customer service calls arrive at a help desk at an average rate of 5 per hour, so $\\lambda = 5$. The time $X$ (in hours) until the next call follows $\\text{Exp}(5)$. The PDF is $f(x) = 5e^{-5x}$ for $x \\geq 0$. The probability of waiting less than 6 minutes (0.1 hours) is $P(X \\leq 0.1) = 1 - e^{-5(0.1)} \\approx 0.393$, or about 39.3%.`,

  cdf:`<h3 style="color: #1e3a8a;">Cumulative Distribution Function (CDF)</h3>
The **cumulative distribution function (CDF)** gives the probability that $X$ is less than or equal to a specific value:

$$F(x) = \\begin{cases} 0 & \\text{if } x < 0 \\\\ 1 - e^{-\\lambda x} & \\text{if } x \\geq 0 \\end{cases}$$

**Key Properties**:
* $F(0) = 0$ (no probability mass below zero)
* $F(x) \\to 1$ as $x \\to \\infty$ (all probability is non-negative)
* The CDF increases from 0 to 1, starting slowly and approaching 1 asymptotically
* For any $x \\geq 0$, $P(X > x) = 1 - F(x) = e^{-\\lambda x}$ (survival function)

**Memoryless Property**: The exponential distribution is the only continuous distribution with the memoryless property: $P(X > s + t \\mid X > s) = P(X > t)$. In terms of the CDF: knowing that $X > s$ doesn't change the probability that $X > s + t$ relative to waiting an additional time $t$ from the start.

**Practical Use:** The exponential CDF is one of the simplest to work with. To find $P(X \\leq x)$ when $X \\sim \\text{Exp}(3)$ and $x = 2$: $F(2) = 1 - e^{-3(2)} = 1 - e^{-6} \\approx 0.9975$, meaning about 99.75% of values fall below 2. The complementary probability $P(X > 2) = e^{-6} \\approx 0.0025$.`,

  meanVariance:`<h3 style="color: #1e3a8a;">Mean and Variance</h3>
**Expected Value (Mean)**:

$$E[X] = \\frac{1}{\\lambda}$$

The mean of an exponential distribution is the reciprocal of the rate parameter. If events occur at rate λ per unit time, the average waiting time is 1/λ. For example, if λ = 5 events per hour, the mean wait time is 1/5 = 0.2 hours (12 minutes).

**Variance**:

$$\\text{Var}(X) = \\frac{1}{\\lambda^2}$$

The variance equals the square of the mean. This unique relationship means that knowing the mean completely determines the variance, and vice versa. Higher variability accompanies longer average wait times.

**Standard Deviation**:

$$\\text{SD}(X) = \\frac{1}{\\lambda}$$

Remarkably, the standard deviation equals the mean for the exponential distribution. This means the typical deviation from the mean is as large as the mean itself, reflecting the distribution's high skewness and long right tail.

**Properties**:
• The median is $\\ln(2)/\\lambda \\approx 0.693/\\lambda$, which is always less than the mean (reflecting right skewness)
• The mode is 0 (the most likely value is the shortest possible wait time)
• The coefficient of variation is always 1, regardless of λ`,

  keyProperties:`<h3 style="color: #1e3a8a;">Key Properties and Special Characteristics</h3>
**Memoryless Property**: The exponential distribution's most distinctive feature. If $X \\sim \\text{Exp}(\\lambda)$, then $P(X > s + t \\mid X > s) = P(X > t)$ for all $s, t \\geq 0$. The amount of time already waited doesn't affect the distribution of remaining waiting time. This is the continuous analog of the geometric distribution's memoryless property.

**Heavy Right Tail**: The distribution is strongly right-skewed with a long tail extending toward infinity. While most values cluster near zero, there's always some probability of observing very large values. The skewness coefficient is exactly 2 for all exponential distributions.

**Constant Hazard Rate**: The hazard rate (instantaneous failure rate) is constant and equal to λ. This means the risk of an event occurring in the next instant remains the same regardless of how much time has passed. This property is equivalent to memorylessness.

**Relation to Poisson Process**: If events occur according to a Poisson process with rate λ, the time between consecutive events follows an exponential distribution with parameter λ. Conversely, if inter-arrival times are exponential with rate λ, the counting process is Poisson with rate λ.

**Minimum of Exponentials**: If $X_1, X_2, \\ldots, X_n$ are independent exponential random variables with rates $\\lambda_1, \\lambda_2, \\ldots, \\lambda_n$, then $\\min(X_1, X_2, \\ldots, X_n) \\sim \\text{Exp}(\\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n)$. The minimum of exponentials is exponential with rate equal to the sum of rates.

**Sum of Exponentials**: The sum of $n$ independent $\\text{Exp}(\\lambda)$ random variables follows a gamma distribution with shape parameter $n$ and rate parameter λ. This connects the exponential to the broader gamma family.

**Lack of Memory in Reliability**: In reliability engineering, the memoryless property implies that a component with exponential lifetime doesn't age—its probability of failure in the next time unit is the same whether it's new or has been functioning for years. This makes exponential distributions suitable for modeling random failures but not wear-out failures.

**Transformation Properties**: If $X \\sim \\text{Exp}(\\lambda)$, then $cX \\sim \\text{Exp}(\\lambda/c)$ for $c > 0$. Scaling time scales the rate inversely.

**Why It Matters:** The exponential distribution is fundamental in queuing theory, reliability analysis, and survival analysis. Its memoryless property makes it mathematically tractable while providing reasonable models for many random arrival and failure processes. It's the continuous-time analog of the geometric distribution and serves as the building block for more complex models like the gamma and Weibull distributions.`,
},

what:{
      title:`What Makes a Distribution Continuous`,
      content:`A continuous probability distribution describes the behavior of a continuous [random variable](!/probability/random-variables)—one that can take any value within a given range, rather than being limited to distinct, separate values. Unlike [discrete distributions](!/probability/distributions/discrete) where you can list individual outcomes (like rolling a 1, 2, 3, 4, 5, or 6 on a die), continuous distributions involve measurements that flow seamlessly along a continuum.

The key characteristic is that the probability of any single exact value is actually zero. This might seem counterintuitive, but consider measuring someone's height: the probability of someone being exactly 170.00000... centimeters tall (with infinite precision) is essentially zero. Instead, we calculate probabilities over intervals—like the probability of someone being between 170 and 171 cm tall.

Mathematically, these distributions are described by a probability density function (PDF), where the area under the curve represents probability. The total area under the PDF always equals 1, representing certainty that some outcome will occur. To find the probability of a value falling within a specific range, we integrate the PDF over that interval—a process closely related to finding expected values and other moments of the distribution.

Common examples include the normal distribution (describing heights, test scores, measurement errors), the exponential distribution (modeling time between events), and the uniform distribution (representing equally likely outcomes across a range). These distributions are fundamental tools for modeling real-world phenomena involving measurements, time, distance, and other continuous variables.
`,
      before:``,
      after:``,
  
    },


    vs:{
  
      title:`Continuous vs Discrete Distributions`,
      content:`
Understanding whether your [random variable](!/probability/random-variables) is continuous or discrete determines which distribution family to use and how to calculate probabilities. The distinction fundamentally changes your mathematical approach.

[Discrete distributions](!/probability/distributions/discrete) deal with countable outcomes—things you can list individually. When you [roll dice](!/probability/models/dice-roll), count defective items, or track the number of customers arriving, you're working with discrete random variables. Here, each specific outcome has a non-zero probability, and you calculate probabilities by summing values from a probability mass function (PMF). On a graph, discrete distributions appear as distinct bars or points.

**Continuous distributions** handle measurements that flow along a continuum—height, time, temperature, distance. The underlying [random variable](!/probability/random-variables) can assume infinitely many values within any interval. Since individual points have probability zero, you must calculate probabilities over ranges by integrating the probability density function (PDF). Graphs show smooth curves where area represents probability.

**Choosing the right type:**
• Can you count the possible outcomes? Use discrete (binomial, Poisson, geometric)
• Are you measuring something? Use continuous (normal, exponential, uniform)
• Does your data come in whole numbers from counting? Discrete
• Does your data involve decimals from measurement? Continuous

**In practice, this means:**
• A) Discrete: work with individual probabilities; Continuous: work with probability densities
• B) Discrete: sum probabilities; Continuous: integrate over intervals
• C) Discrete: bars on graphs; Continuous: smooth curves where area matters

`,
      before:``,
      after:``,
  
    },
    types:{
  
      title:`Types of Continuous Distributions`,
      content:`
Different continuous distributions model different types of real-world phenomena. Here are the most commonly encountered distributions and their typical applications:

[Normal (Gaussian) Distribution](!/probability/distributions/continuous#normal)
The bell-shaped curve that appears everywhere in nature and statistics. Models heights, test scores, measurement errors, and countless natural phenomena. Central to the Central Limit Theorem.

[Uniform Distribution](!/probability/distributions/continuous#uniform)
All values in a range are equally likely. Models random selection, rounding errors, or situations with no preference for any particular value within bounds.

[Exponential Distribution](!/probability/distributions/continuous#exponential)
Models waiting times between events in a Poisson process. Used for time until failure, time between arrivals, or radioactive decay. Memoryless property makes it unique.

**Beta Distribution**
Bounded between 0 and 1, perfect for modeling probabilities, proportions, and percentages. Highly flexible shape based on two parameters.

**Gamma Distribution**
Generalizes the exponential distribution to model waiting time for multiple events. Common in queuing theory and rainfall modeling.

**Chi-Squared Distribution**
Sum of squared normal variables. Fundamental in hypothesis testing, confidence intervals, and goodness-of-fit tests.

**Student's t-Distribution**
Similar to normal but with heavier tails. Used when sample sizes are small or population variance is unknown.

**Weibull Distribution**
Models lifetime and failure rates in reliability engineering. Shape parameter determines whether failure rate increases, decreases, or remains constant.

**Lognormal Distribution**
When the logarithm of a variable is normally distributed. Models income, particle sizes, stock prices, and anything involving multiplicative processes.

Classifying distributions into types helps you match real-world problems to the right mathematical model—whether you're analyzing lifetimes, measurements, or proportions. While all continuous distributions share common features like probability density functions and integration-based calculations(like [expected value](!/probability/expected-value), [variance](!/probability/variance) , standard deviation etc), they differ in shape, support, parameters, and the specific phenomena they best represent.

`,
      before:``,
      after:``,
  
    },
    shared:{
  
      title:`Shared Properties Across Continuous Distributions`,
      content:`
Despite their different shapes and applications, all continuous distributions share a fundamental mathematical structure. Understanding these common properties allows you to work with any continuous distribution using the same conceptual framework.

**Probability Density Function (PDF)**
Every continuous distribution has a PDF, $f(x)$, that describes the relative likelihood of values. While the formula changes between distributions, the PDF always integrates to 1 over the entire support.

**Cumulative Distribution Function (CDF)**
The [CDF](!/probability/cdf), $F(x)$, gives the probability that the [random variable](!/probability/random-variables) is less than or equal to x. Calculated by integrating the PDF from negative infinity to x, it always ranges from 0 to 1 and is non-decreasing.

**Mean (Expected Value)**
[Expected Value](!/probability/expected-value) is the center of mass of the distribution, calculated as the integral of x·f(x). Different distributions have different formulas, but the concept remains constant—it's where the distribution "balances."

**Variance and Standard Deviation**
Measures of spread around the mean. [Variance](!/probability/variance) is the expected value of squared deviations from the mean, while standard deviation is its square root, providing a measure in the original units.

**Quantiles and Percentiles**
The inverse of the CDF, quantiles identify values below which a given percentage of the distribution falls. The median (50th percentile) and quartiles work the same way across all continuous distributions.

These shared properties mean that once you understand how to work with one continuous distribution, you have the tools to work with any of them—only the specific formulas change.

`,
      before:``,
      after:``,
  
    },
    differ:{
  
      title:`How Continuous Distributions Differ`,
      content:`
While all continuous distributions share common mathematical properties, each type serves a distinct purpose. Understanding what makes them different helps you select the right distribution for your specific problem.

**Support: Where Values Can Exist**
Distributions differ fundamentally in their domain. The [normal](!/probability/distributions/continuous#normal) distribution spans the entire real line (-∞, +∞), suitable for measurements that can be positive or negative. The exponential distribution is restricted to non-negative values [0, ∞), perfect for waiting times that cannot be negative. The uniform and beta distributions have finite support [a, b] and [0, 1] respectively, ideal for bounded measurements like proportions or percentages.

**Shape: Symmetry and Skewness**
Some distributions are perfectly symmetric ([normal](!/probability/distributions/continuous#normal), [uniform](!/probability/distributions/continuous#uniform)), while others exhibit skewness. The exponential distribution is heavily right-skewed with most probability near zero. The beta distribution can be symmetric, left-skewed, right-skewed, or U-shaped depending on its parameters. Shape matters because it reflects the underlying process—symmetric for balanced phenomena, skewed for processes with natural boundaries or accumulation patterns.

**Modeling Intent: What They Represent**
Each distribution evolved to model specific phenomena. The [normal](!/probability/distributions/continuous#normal) distribution captures additive processes and measurement errors. The exponential models time between random events. The lognormal describes multiplicative processes like income or stock prices. The Weibull handles failure rates that change over time. Choosing correctly means matching your data's generation process to the distribution's assumptions.

**Parameter Roles: Control and Flexibility**
Parameters serve different purposes across distributions. Location parameters (μ) shift the distribution horizontally. Scale parameters (σ) control spread. Shape parameters (like those in beta or Weibull) fundamentally alter the curve's form. Some distributions need just one parameter (exponential), while others require two or more (normal, beta) for adequate flexibility.

This diversity exists because real-world phenomena are diverse—no single distribution can model waiting times, proportions, measurements, and failure rates equally well.`,
      before:``,
      after:``,
  
    },
    relations:{
  
      title:`Relationships Between Distributions`,
      content:`
Continuous distributions aren't isolated mathematical objects—they're interconnected through special cases, generalizations, and limiting behaviors. Understanding these relationships reveals deeper structure in probability theory and helps you navigate between distributions efficiently.

**Hierarchical Relationships**
Some distributions are generalizations of others. The gamma distribution generalizes the exponential: when the shape parameter equals 1, you get the exponential distribution back. Similarly, the chi-squared distribution is a special case of the gamma distribution. The beta distribution with parameters (1,1) becomes the uniform distribution on [0,1]. These hierarchies mean mastering one distribution gives you insight into several others.

**Transformations and Derived Distributions**
New distributions arise from transforming existing ones. If X follows a [normal](!/probability/distributions/continuous#normal) distribution, then e^X follows a lognormal distribution—the transformation creates a fundamentally different shape. The chi-squared distribution emerges when you sum squared standard normal variables. Taking the ratio of two chi-squared variables (properly scaled) yields a Student's t-distribution. These connections explain why certain distributions appear in statistical testing.

**Limiting Behaviors**
As parameters change, distributions can converge to others. The Student's t-distribution approaches the [normal](!/probability/distributions/continuous#normal) distribution as degrees of freedom increase—its heavier tails gradually thin out. The binomial distribution (discrete) approaches the normal distribution under certain conditions, bridging the discrete-continuous divide. The Poisson process generates exponential waiting times, linking discrete event counts to continuous time intervals.

**Why This Matters**
Recognizing relationships helps you choose distributions more strategically, understand why certain distributions appear in formulas, and see probability theory as a unified system rather than a collection of unrelated formulas. When you know the normal and understand transformations, the lognormal becomes intuitive rather than arbitrary.

`,
      before:``,
      after:``,
  
    },
    decision:{
  
      title:`Choosing the Right Distribution`,
      content:`
Selecting the appropriate continuous distribution is crucial for accurate modeling and analysis. Rather than memorizing formulas, focus on understanding the data-generating process and key characteristics of your measurements.

**Ask These Key Questions**

**What is the support?** Can your variable be negative, or only positive? If measuring time, distance, or counts, you need distributions with support [0, ∞) like exponential or gamma. For measurements that can go either direction (temperature changes, financial returns), consider the normal distribution. For bounded quantities like proportions or percentages, use beta or uniform distributions.

**What generated this data?** Understanding the underlying process is more important than fitting curves. Are you measuring time between events? Use exponential. Modeling lifetimes where failure rates change? Try Weibull. Dealing with products of random effects or growth processes? Consider lognormal. Measuring errors or natural variations? Normal distribution is likely appropriate.

**Is the data symmetric or skewed?** Plot your data first. Symmetric, bell-shaped data suggests normal or t-distributions. Right-skewed data (long tail toward higher values) points to exponential, lognormal, or gamma. Left-skewed data is rarer but might indicate a reflected distribution or beta with certain parameters.

**Common Mistakes to Avoid**

Don't choose distributions solely by visual fit without considering the process. A skewed dataset might look exponential but actually be lognormal—the difference matters for predictions. Avoid using normal distributions for strictly positive data just because it's familiar. Don't ignore natural boundaries—modeling proportions with a normal distribution can predict impossible values below 0 or above 1.

When uncertain, let the data's origin guide you: what physical or logical process created these numbers? Match that process to the distribution's assumptions.

`,
      before:``,
      after:``,
  
    },
    working:{
  
      title:`Working with PDFs and CDFs`,
      content:`
Understanding probability density functions and cumulative distribution functions conceptually is one thing—knowing how to use them for actual calculations is another. Here's how these tools work in practice.

**The PDF: Density, Not Probability**

The probability density function f(x) tells you the relative likelihood of values, but f(x) itself is not a probability. In fact, f(x) can exceed 1, which would be impossible for a probability. Think of the PDF as describing the "concentration" of probability at different points. To find actual probabilities, you must integrate the PDF over an interval: P(a ≤ X ≤ b) = ∫[a to b] f(x)dx. This integral gives you the area under the curve between a and b.

**The CDF: Your Probability Calculator**

The cumulative distribution function F(x) = P(X ≤ x) answers the question "what's the probability the [random variable](!/probability/random-variables) is at most x?" This is directly usable. If you need P(X ≤ 5), just evaluate F(5). For P(X > 5), use 1 - F(5). For P(3 < X ≤ 7), calculate F(7) - F(3). The CDF eliminates the need for integration in many practical problems.

**The Fundamental Relationship**

The PDF and CDF are intimately connected: F(x) = ∫[-∞ to x] f(t)dt, and conversely, f(x) = dF(x)/dx. The CDF is the accumulated area under the PDF from the left, while the PDF is the rate of change of the CDF. This means if you have one, you can find the other through calculus.

**Practical Workflow**

For hand calculations with standard distributions, use CDF tables or software rather than integrating PDFs manually. For non-standard problems, numerical integration works. Most statistical software provides both PDF values (for plotting) and CDF values (for probability calculations).

`,
      before:``,
      after:``,
  
    },
    parameters:{
  
      title:`Parameter Estimation`,
      content:`
When you have real-world data and believe it follows a particular distribution type, you still need to determine the specific parameter values that best fit your observations. Parameter estimation is the bridge between theoretical distributions and practical data analysis.

**Why Parameters Matter**

A [normal](!/probability/distributions/continuous#normal) distribution isn't useful until you know its mean μ and standard deviation σ. An exponential distribution requires its rate parameter λ. These parameters shape the distribution to match your specific dataset. Poor parameter estimates lead to inaccurate predictions and flawed decision-making.

**Method of Moments**

The simplest approach matches theoretical moments to sample moments. For a [normal](!/probability/distributions/continuous#normal) distribution, estimate μ with the sample mean x̄ and σ² with the sample variance s². For an exponential distribution, estimate λ as 1/x̄ since the theoretical mean equals 1/λ. This method is intuitive and computationally straightforward, though not always the most efficient.

**Maximum Likelihood Estimation (MLE)**

MLE finds parameter values that make the observed data most probable. You construct a likelihood function—the probability of seeing your data given certain parameters—and maximize it. For many standard distributions, MLE formulas are well-established. For the normal distribution, MLE actually gives the same estimates as the method of moments. For others like the Weibull distribution, MLE requires numerical optimization but provides more accurate estimates, especially with smaller samples.

**Choosing Your Method**

Method of moments is quick and works well for simple distributions and large samples. MLE is preferred when you need optimal estimates, work with complex distributions, or have limited data. Modern statistical software handles both methods automatically, but understanding the principles helps you interpret results and recognize when estimates might be unreliable.`,
      before:``,
      after:``,
  
    },
    transformations:{
  
      title:`Transformations and Standardization`,
      content:`
Transforming [random variables](!/probability/random-variables) is a powerful technique that simplifies calculations, enables comparisons across different scales, and reveals relationships between distributions. Understanding how transformations affect continuous distributions is essential for practical statistical work.

**The Standard Normal Distribution**

The most important transformation in statistics converts any normal distribution to the standard normal with mean 0 and variance 1. Using the transformation Z = (X - μ)/σ, you standardize your variable. This Z-score tells you how many standard deviations a value is from the mean. Why standardize? Because we have extensive tables and software for the standard normal, and all normal distribution problems reduce to this single reference distribution.

**Linear Transformations**

When you transform X to Y = aX + b, the distribution shifts and scales predictably. Adding b shifts the distribution's location—if X ~ N(μ, σ²), then X + b ~ N(μ + b, σ²). Multiplying by a scales both location and spread—if X ~ N(μ, σ²), then aX ~ N(aμ, a²σ²). This applies to any continuous distribution: linear transformations preserve the family while changing parameters.

**Nonlinear Transformations**

Nonlinear transformations create entirely new distributions. Taking e^X when X is normal produces a lognormal distribution. Squaring a standard normal variable gives a chi-squared distribution with 1 degree of freedom. Taking the logarithm of a lognormal variable returns you to the normal distribution. These transformations explain why certain distributions appear in specific contexts and provide tools for normalizing skewed data.

**Practical Applications**

Standardization enables fair comparisons—comparing test scores from different exams, or measurements in different units. Transformations can stabilize variance, meet statistical assumptions, or reveal linear relationships hidden in raw data. Understanding transformations means recognizing that the same underlying randomness can manifest in multiple distributional forms depending on how you measure or scale it.`,
      before:``,
      after:``,
  
    },
    visualization:{
  
      title:`Visualization and Interpretation`,
      content:`
Visual representation transforms abstract mathematical concepts into intuitive understanding. Learning to read and interpret distribution graphs is essential for working effectively with continuous probability.

**Density Curves as Shapes**

The probability density function appears as a smooth curve when plotted. The shape tells a story: a normal distribution's symmetric bell curve shows values clustering symmetrically around the mean. An exponential distribution's steep decline from the origin reveals that small values are most likely, with probability dropping off rapidly. A uniform distribution's flat horizontal line indicates all values are equally probable. Shape recognition helps you identify distributions in real data and understand their behavior at a glance.

**Probability as Area**

The fundamental principle of continuous distributions is that probability equals area under the density curve. To find P(2 ≤ X ≤ 5), locate 2 and 5 on the horizontal axis and measure the area between them under the curve. A wider interval captures more area, hence higher probability. The total area under any PDF always equals 1, representing certainty that some outcome will occur. This visual interpretation makes integration meaningful—you're literally measuring regions under curves.

**Parameter Effects on Shape and Spread**

Changing parameters reshapes the distribution dynamically. For the normal distribution, increasing σ flattens and widens the curve (more spread), while decreasing σ makes it taller and narrower (less spread). The mean μ slides the entire curve left or right without changing its shape. For the [exponential distribution](!/probability/distributions/continuous#exponential), increasing λ compresses probability toward zero (faster decay), while decreasing λ stretches it out (slower decay). Interactive visualizers let you manipulate parameters and immediately see these effects, building intuition about how distributions behave.

`,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
  
  }


  const introContent = {
  id: "intro",
  title: "Continuous Probability Models",
  content: `
Continuous probability distributions model random variables whose possible values lie on intervals rather than isolated points.
In these models, probabilities are assigned to ranges of values using density functions, and individual points have probability zero.
This section organizes continuous distributions, highlights their shared structure, and provides access to individual distribution models.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/continuous",
         name: "name"
      },
        
       }
    }
   }

export default function ContinuousDistributionsPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[

    {
        id:'what',
        title:sectionsContent.what.title,
        link:'',
        content:[
          sectionsContent.what.content,
        ]
    },
    {
        id:'vs',
        title:sectionsContent.vs.title,
        link:'',
        content:[
          sectionsContent.vs.content,
        ]
    },
    {
        id:'types',
        title:sectionsContent.types.title,
        link:'',
        content:[
          sectionsContent.types.content,
        ]
    },
     {
        id:'decision',
        title:sectionsContent.decision.title,
        link:'',
        content:[
          sectionsContent.decision.content,
        ]
    },
    // {
    //     id:'normal',
    //     title:sectionsContent.normal.title,
    //     link:'',
    //     content:[

       
    //          <SvgDiagram
    //         key={'normal'}
    // layout='horizontal'
   
    // data={distributionsDiagramsData['normal distribution']}
    // />,

    //    sectionsContent.normal.checklist,
    //     sectionsContent.normal.parameters,
    //     sectionsContent.normal.notation,
    //     sectionsContent.normal.pdf,
    //     sectionsContent.normal.cdf,
    //     sectionsContent.normal.meanVariance,
    //     sectionsContent.normal.keyProperties,


    //     ]
    // },

    {
    id:'normal',
    title:sectionsContent.normal.title,
    link:sectionsContent.normal.link,
    content:[
        <SvgDiagram
            key={'normal'}
            layout='horizontal'
            data={distributionsDiagramsData['normal distribution']}
        />,
        
       <div key={'checklist-normal'} style={{background: 'linear-gradient(to right, #fafafa 0%, #f5f5f5 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #e5e7eb',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.normal.checklist)}
        </div>,
        // <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1'}}>
        //     {processContent(sectionsContent.normal.parameters)}
        // </div>,
//         <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,
        
        <div key={'pdf-normal'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.normal.pdf)}
        </div>,
        
        <div key={'cdf-normal'} style={{background: 'linear-gradient(to right, #dbeafe 0%, #bfdbfe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #3b82f6',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.normal.cdf)}
        </div>,
        
        <div key={'meanVariance-normal'} style={{background: 'linear-gradient(to right, #bfdbfe 0%, #93c5fd 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #2563eb',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.normal.meanVariance)}
        </div>,
        
        <div key={'keyProperties-normal'} style={{background: 'linear-gradient(to right, #93c5fd 0%, #60a5fa 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #1d4ed8',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.normal.keyProperties)}
        </div>,
    ]
},


{
    id:'uniform',
    title:sectionsContent.uniform.title,
    link:sectionsContent.uniform.link,
    content:[
        <SvgDiagram
            key={'uniform'}
            layout='horizontal'
            data={distributionsDiagramsData['continuous uniform distribution']}
        />,
        
        <div key={'checklist-uniform'} style={{background: 'linear-gradient(to right, #fafafa 0%, #f5f5f5 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #e5e7eb',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.uniform.checklist)}
        </div>,
        
        // <div key={'parameters-uniform'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.uniform.parameters)}
        // </div>,
        
        // <div key={'notation-uniform'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.uniform.notation)}
        // </div>,
        
        <div key={'pdf-uniform'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.uniform.pdf)}
        </div>,
        
        <div key={'cdf-uniform'} style={{background: 'linear-gradient(to right, #dbeafe 0%, #bfdbfe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #3b82f6',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.uniform.cdf)}
        </div>,
        
        <div key={'meanVariance-uniform'} style={{background: 'linear-gradient(to right, #bfdbfe 0%, #93c5fd 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #2563eb',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.uniform.meanVariance)}
        </div>,
        
        <div key={'keyProperties-uniform'} style={{background: 'linear-gradient(to right, #93c5fd 0%, #60a5fa 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #1d4ed8',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.uniform.keyProperties)}
        </div>,
    ]
},
    // {
    //     id:'uniform',
    //     title:sectionsContent.uniform.title,
    //     link:'',
    //     content:[
          
    //          <SvgDiagram
    //         key={'uniform'}
    // layout='horizontal'
   
    // data={distributionsDiagramsData['continuous uniform distribution']}
    // />,
          
    //     ]
    // },

    {
    id:'exponential',
    title:sectionsContent.exponential.title,
    link:sectionsContent.exponential.link,
    content:[
        <SvgDiagram
            key={'exponential'}
            layout='horizontal'
            data={distributionsDiagramsData['exponential distribution']}
        />,
        
        <div key={'checklist-exponential'} style={{background: 'linear-gradient(to right, #fafafa 0%, #f5f5f5 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #e5e7eb',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.exponential.checklist)}
        </div>,
        
        // <div key={'parameters-exponential'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.exponential.parameters)}
        // </div>,
        
        // <div key={'notation-exponential'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.exponential.notation)}
        // </div>,
        
        <div key={'pdf-exponential'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.exponential.pdf)}
        </div>,
        
        <div key={'cdf-exponential'} style={{background: 'linear-gradient(to right, #dbeafe 0%, #bfdbfe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #3b82f6',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.exponential.cdf)}
        </div>,
        
        <div key={'meanVariance-exponential'} style={{background: 'linear-gradient(to right, #bfdbfe 0%, #93c5fd 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #2563eb',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.exponential.meanVariance)}
        </div>,
        
        <div key={'keyProperties-exponential'} style={{background: 'linear-gradient(to right, #93c5fd 0%, #60a5fa 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #1d4ed8',transform:'scale(0.9)'}}>
            {processContent(sectionsContent.exponential.keyProperties)}
        </div>,
    ]
},
    // {
    //     id:'exponential',
    //     title:sectionsContent.exponential.title,
    //     link:'',
    //     content:[
    //          <SvgDiagram
    //         key={'exponential'}
    // layout='horizontal'
   
    // data={distributionsDiagramsData['exponential distribution']}
    // />,
    //     ]
    // },
     {
        id:'shared',
        title:sectionsContent.shared.title,
        link:'',
        content:[
          sectionsContent.shared.content,
        ]
    },
    {
        id:'differ',
        title:sectionsContent.differ.title,
        link:'',
        content:[
          sectionsContent.differ.content,
        ]
    },
    {
        id:'relations',
        title:sectionsContent.relations.title,
        link:'',
        content:[
          sectionsContent.relations.content,
        ]
    },
    {
        id:'working',
        title:sectionsContent.working.title,
        link:'',
        content:[
          sectionsContent.working.content,
        ]
    },
    {
        id:'parameters',
        title:sectionsContent.parameters.title,
        link:'',
        content:[
          sectionsContent.parameters.content,
        ]
    },
    {
        id:'transformations',
        title:sectionsContent.transformations.title,
        link:'',
        content:[
          sectionsContent.transformations.content,
        ]
    },
    {
        id:'visualization',
        title:sectionsContent.visualization.title,
        link:'',
        content:[
          sectionsContent.visualization.content,
        ]
    },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // }
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Continuous Distributions</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
    secondaryNavMode="siblings"  // or "siblings"
    secondaryNavTitle="Other Pages in Probability Section" 
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
