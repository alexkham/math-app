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
import ContinuousUniformDistribution from '@/app/components/visualizations/probability/continuous-distribution/ContinuousUniformDistribution'
import ContinuousUniformDistributionCDF from '@/app/components/visualizations/probability/continuous-distribution/CDF/ContinuousUniformDistributionCDF'
import ContinuousUniformCalculator from '@/app/components/calculators/probability/distributions/continuous/UniformDistributionCalculator'


export async function getStaticProps(){

  const keyWords=['','','','','']

  // •

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@




  //   const sectionsContent={

  //   obj1:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  
  //   },
  //   obj2:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  
  //   obj3:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj4:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj5:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj6:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj7:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj8:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj9:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj10:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj11:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj12:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj13:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },
  //   obj14:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },


  //   obj15:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   }
  
  // }


  
    const sectionsContent={

    obj1:{
      title:`The Probabilistic Experiment Behind continuous uniform distribution`,
      content:`
      The probabilistic experiment behind the continuous uniform distribution begins with the assumption that an outcome can occur anywhere within a fixed interval, and that no location inside that interval is preferred over another. The key idea is not randomness over trials, but randomness over position or value. Once the bounds of the interval are set, the experiment treats every point between them as equally plausible.

This type of experiment arises when the only information available is that a value lies somewhere between two limits, and there is no mechanism that biases one sub-interval over another. The uncertainty is purely geometric: probability corresponds to relative length, not to isolated points. Because the outcomes form a continuum, individual values have zero probability; only ranges matter.

The defining feature of this experiment is complete symmetry across the interval. If one interval is twice as long as another, it is twice as likely to contain the outcome. Nothing else distinguishes outcomes.

Like the [discrete uniform distribution](!/probability/distributions/discrete/uniform), the continuous uniform distribution is built on the idea of complete symmetry, no outcome is favored over another. The difference lies only in how probability is assigned: [discrete uniform](!/probability/distributions/discrete/uniform) spreads probability across a finite set of distinct values, while continuous uniform spreads it evenly across an entire interval, with probability determined by length rather than individual points.
      `,
      before:``,
      after:``,
      link:'',
      example:`
      **Example**:

Choose a real number at random between 0 and 10, with no additional information. The chance that the number lies between 2 and 4 depends only on the interval length (2 units), not on where it sits inside the range.
      `,
  
  
    },
    obj2:{
      title:`Notation`,
      content:`
      $X \\sim U(a, b)$ — distribution of the [random variable](!/probability/random-variables).

$X \\sim \\text{Uniform}(a, b)$ — alternative explicit form.

$U(a, b)$ or $\\text{Unif}(a, b)$ — used to denote the distribution itself (not the [random variable](!/probability/random-variables)).

$U(0, 1)$ — the standard uniform distribution on the unit interval.

**Note:** The continuous uniform distribution is distinct from the discrete uniform distribution. The continuous version has a probability density function, while the discrete version has a probability mass function.
      
      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
      `,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Parameters`,
      content:`
      **a**: lower bound of the interval, where $a \\in \\mathbb{R}$

**b**: upper bound of the interval, where $b \\in \\mathbb{R}$ and $b > a$

The continuous uniform distribution is fully characterized by these two parameters. **a** and **b** define the endpoints of the interval where the random variable can take values. The distribution assigns equal probability density to every point in this interval, making it the simplest continuous distribution.
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
      content:`
      <h3 style="color: #1e40af;">Probability Density Function (PDF)</h3>
The **probability density function (PDF)** of a **continuous uniform distribution** is given by:

$$f(x) = \\begin{cases} \\frac{1}{b-a} & \\text{if } a \\leq x \\leq b \\\\ 0 & \\text{otherwise} \\end{cases}$$

### Intuition Behind the Formula

 **Constant Density**: The uniform distribution has a flat, rectangular shape. The probability density is the same at every point within the interval [a, b].

 **Parameters**:
  • $a$: The minimum value the [random variable](!/probability/random-variables) can take
  • $b$: The maximum value the [random variable](!/probability/random-variables) can take
  • The width of the interval is $b - a$

 **Support (Range of the Random Variable)**:
  • The [random variable](!/probability/random-variables) $X$ can take any value in the closed interval: $[a, b]$
  • Outside this interval, the probability density is zero
  • The **support** is the finite interval [a, b]

 **Logic Behind the Formula**:
  • $\\frac{1}{b-a}$: The constant density ensures the total area under the curve equals 1
  • The height of the rectangle is $\\frac{1}{b-a}$ and the width is $b-a$, so area = height × width = 1
  • All subintervals of the same length have equal probability
  • The total area under the curve equals 1:
  
  $$\\int_{a}^{b} \\frac{1}{b-a}\\,dx = \\frac{1}{b-a} \\cdot (b-a) = 1$$

**Practical Example:** A bus arrives at a stop every 10 minutes. If you arrive at a random time, your wait time $X$ follows $U(0, 10)$. The PDF is $f(x) = \\frac{1}{10} = 0.1$ for $0 \\leq x \\leq 10$. Any 2-minute interval within this range has the same probability: $P(3 \\leq X \\leq 5) = P(7 \\leq X \\leq 9) = 0.1 \\times 2 = 0.2$.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Cumulative Distribution Function (CDF)`,
      content:`<h3 style="color: #1e3a8a;">Cumulative Distribution Function (CDF)</h3>
The **cumulative distribution function (CDF)** gives the probability that $X$ is less than or equal to a specific value:

$$F(x) = \\begin{cases} 0 & \\text{if } x < a \\\\ \\frac{x-a}{b-a} & \\text{if } a \\leq x \\leq b \\\\ 1 & \\text{if } x > b \\end{cases}$$

**Key Properties**:
 • $F(a) = 0$ (no probability mass below the lower bound)
 • $F(b) = 1$ (all probability mass is within [a, b])
 • The [CDF(Cumulative Density Function)](!/probability/cdf) increases linearly from 0 to 1 within the interval [a, b]
 • For any $x$ in [a, b], $F(x)$ represents the fraction of the interval covered from $a$ to $x$

**Practical Use:** The [CDF(Cumulative Density Function)](!/probability/cdf) for the uniform distribution is particularly simple. To find $P(X \\leq x)$ when $X \\sim U(0, 10)$ and $x = 3$: $F(3) = \\frac{3-0}{10-0} = 0.3$, meaning 30% of values fall below 3. For any probability calculation: $P(c \\leq X \\leq d) = F(d) - F(c) = \\frac{d-a}{b-a} - \\frac{c-a}{b-a} = \\frac{d-c}{b-a}$.
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
For continuous distributions, the expected value emerges from integrating the product of each value with its density across the entire support. Applying the [continuous expected value definition](!/probability/expected-value#continuous) to the uniform distribution:

$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f(x) \\, dx$$

### Formula

$$E[X] = \\frac{a + b}{2}$$

Where:
$a$ = minimum value of the interval
$b$ = maximum value of the interval

### Derivation and Intuition

The continuous uniform distribution has PDF $f(x) = \\frac{1}{b-a}$ for $a \\leq x \\leq b$, and 0 elsewhere. Computing the expected value:

$$E[X] = \\int_{a}^{b} x \\cdot \\frac{1}{b-a} \\, dx = \\frac{1}{b-a} \\int_{a}^{b} x \\, dx$$

$$E[X] = \\frac{1}{b-a} \\left[\\frac{x^2}{2}\\right]_{a}^{b} = \\frac{1}{b-a} \\cdot \\frac{b^2 - a^2}{2}$$

$$E[X] = \\frac{1}{b-a} \\cdot \\frac{(b-a)(b+a)}{2} = \\frac{b+a}{2}$$

The result $E[X] = \\frac{a+b}{2}$ is the midpoint of the interval $[a, b]$. This makes perfect intuitive sense: when all values in an interval are equally likely, the average value is simply the center of that interval. The distribution is perfectly symmetric, and the expected value is the balance point.

This formula is identical to the [discrete uniform distribution](!/probability/distributions/discrete/uniform#expected-value), showing that whether we count discrete equally-spaced values or measure continuous equally-dense values, the average lands at the center.

### Example

Suppose a bus arrives randomly between 2:00 PM and 2:30 PM, modeled as uniform on the interval $[0, 30]$ minutes after 2:00 PM:

$$E[X] = \\frac{0 + 30}{2} = 15 \\text{ minutes}$$

The expected arrival time is 2:15 PM, exactly halfway through the 30-minute window. If you repeatedly sample random arrival times, the long-run average will converge to 15 minutes after 2:00 PM.
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
The [variance](!/probability/variance#calculate) of a continuous random variable quantifies the spread of values around the [expected value (mean)](!/probability/expected-value). For continuous distributions, it is calculated through integration:

$$\\mathrm{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 f(x) \\, dx$$

Alternatively, using the computational formula:

$$\\mathrm{Var}(X) = \\mathbb{E}[X^2] - \\mu^2$$

For the **continuous uniform distribution**, this calculation produces a simple relationship with the interval length.

### Formula

$$\\mathrm{Var}(X) = \\frac{(b-a)^2}{12}$$

Where:
$a$ = minimum value of the interval
$b$ = maximum value of the interval

### Derivation and Intuition

Starting with the computational formula, we need to calculate $\\mathbb{E}[X^2]$.

We know from the expected value section that $\\mu = \\frac{a+b}{2}$.

The continuous uniform distribution has PDF $f(x) = \\frac{1}{b-a}$ for $a \\leq x \\leq b$:

$$\\mathbb{E}[X^2] = \\int_{a}^{b} x^2 \\cdot \\frac{1}{b-a} \\, dx = \\frac{1}{b-a} \\int_{a}^{b} x^2 \\, dx$$

$$\\mathbb{E}[X^2] = \\frac{1}{b-a} \\left[\\frac{x^3}{3}\\right]_{a}^{b} = \\frac{1}{b-a} \\cdot \\frac{b^3 - a^3}{3}$$

Using the factorization $b^3 - a^3 = (b-a)(b^2 + ab + a^2)$:

$$\\mathbb{E}[X^2] = \\frac{b^2 + ab + a^2}{3}$$

Applying the computational formula:

$$\\mathrm{Var}(X) = \\frac{b^2 + ab + a^2}{3} - \\left(\\frac{a+b}{2}\\right)^2$$

After algebraic simplification:

$$\\mathrm{Var}(X) = \\frac{(b-a)^2}{12}$$

The result $\\mathrm{Var}(X) = \\frac{(b-a)^2}{12}$ shows that variance depends only on the interval width $(b-a)$. The divisor of 12 appears because probability mass is spread uniformly—not concentrated anywhere. A wider interval means greater spread; location doesn't matter, only the range size.

This formula mirrors the [discrete uniform distribution](!/probability/distributions/discrete/uniform#variance), differing only in technical details between continuous and discrete cases.

### Standard Deviation

$$\\sigma = \\frac{b-a}{\\sqrt{12}} = \\frac{b-a}{2\\sqrt{3}} \\approx 0.289(b-a)$$

### Example

Suppose a bus arrives randomly between 2:00 PM and 2:30 PM, modeled as uniform on the interval $[0, 30]$ minutes:

$$\\mathrm{Var}(X) = \\frac{(30-0)^2}{12} = \\frac{900}{12} = 75 \\text{ minutes}^2$$

$$\\sigma = \\frac{30}{\\sqrt{12}} \\approx 8.66 \\text{ minutes}$$

The variance of 75 min² and standard deviation of about 8.66 minutes indicate moderate spread. While the expected arrival is 15 minutes after 2:00 PM, typical variations are around ±8.66 minutes, meaning arrivals between roughly 6 and 24 minutes are common.
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

For the continuous uniform distribution, every value in the support has the same density:

$$\\text{Mode} = \\text{Any value in } [a, b]$$

**Intuition:** The continuous uniform [PDF](!/probability/probability-function/pdf) is constant:

$$f(x) = \\frac{1}{b-a} \\text{ for } a \\leq x \\leq b$$

Since the density function is flat across the entire interval, there is no single peak. Every point in $[a, b]$ is equally probable in terms of density, so every value is technically a [mode](!/probability/mode).

This is the continuous analog of the [discrete uniform distribution](!/probability/distributions/discrete/uniform#mode), where all outcomes are equally likely.

**Example:** 
For a bus arriving uniformly between 2:00 PM and 2:30 PM (interval $[0, 30]$ minutes):

Mode = Any value in [0, 30]

There is no "most likely" arrival time—all times are equally probable. The density is constant at $f(x) = \\frac{1}{30}$ across the entire half-hour window.

### Median

The [median](!/probability/median) is the value $m$ such that $P(X \\leq m) = 0.5$—the point that divides the distribution's probability in half.

For the continuous uniform distribution, the [median](!/probability/median) is:

$$\\text{Median} = \\frac{a + b}{2}$$

**Derivation:** Using the [CDF](!/probability/cdf) for the uniform distribution:

$$F(x) = \\frac{x - a}{b - a} \\text{ for } a \\leq x \\leq b$$

Setting $F(m) = 0.5$:

$$\\frac{m - a}{b - a} = 0.5$$

$$m - a = 0.5(b - a)$$

$$m = a + 0.5(b - a) = \\frac{a + b}{2}$$

**Intuition:** Because the distribution is perfectly symmetric and uniform, the point that divides probability in half is simply the midpoint of the interval. This also equals the [mean](!/probability/expected-value), as with all symmetric distributions.

**Example:**
For a bus arriving uniformly between 2:00 PM and 2:30 PM (interval $[0, 30]$ minutes):

$$\\text{Median} = \\frac{0 + 30}{2} = 15 \\text{ minutes}$$

Half of arrivals occur before 2:15 PM, and half occur after. This is also the [mean](!/probability/expected-value) arrival time.

**Properties:**
• For the continuous uniform distribution: median = [mean](!/probability/expected-value) = $\\frac{a+b}{2}$
• The [mode](!/probability/mode) is not uniquely defined (all values equally dense)
• Perfect symmetry ensures median and mean coincide
• The median depends only on the endpoints $a$ and $b$, not on the interval width directly
• This matches the [discrete uniform distribution](!/probability/distributions/discrete/uniform#median), where the median is also the midpoint
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

### Finding Quantiles for the Continuous Uniform Distribution

For a continuous uniform distribution on the interval $[a, b]$, the [CDF](!/probability/cdf) is:

$$F(x) = \\frac{x - a}{b - a} \\text{ for } a \\leq x \\leq b$$

To find the $p$-th quantile, we solve $F(x_p) = p$:

$$\\frac{x_p - a}{b - a} = p$$

$$x_p - a = p(b - a)$$

$$x_p = a + p(b - a)$$

This gives the simple quantile formula:

$$x_p = a + p(b - a)$$

The $p$-th quantile is located a fraction $p$ of the way from $a$ to $b$ along the interval. This linear relationship makes quantiles for the uniform distribution particularly intuitive.

### Common Percentiles

**25th Percentile (First Quartile, Q1):**

$$x_{0.25} = a + 0.25(b - a) = a + \\frac{b - a}{4} = \\frac{3a + b}{4}$$

About 25% of values fall below this point, located one-quarter of the way from $a$ to $b$.

**50th Percentile (Median, Q2):**

$$x_{0.50} = a + 0.50(b - a) = a + \\frac{b - a}{2} = \\frac{a + b}{2}$$

This is the [median](!/probability/median), located exactly at the midpoint.

**75th Percentile (Third Quartile, Q3):**

$$x_{0.75} = a + 0.75(b - a) = a + \\frac{3(b - a)}{4} = \\frac{a + 3b}{4}$$

About 75% of values fall below this point, located three-quarters of the way from $a$ to $b$.

**Interquartile Range (IQR):**

$$\\text{IQR} = Q3 - Q1 = \\frac{a + 3b}{4} - \\frac{3a + b}{4} = \\frac{b - a}{2}$$

The IQR spans exactly half the total interval width, containing the middle 50% of the distribution.

### Example

For a bus arriving uniformly between 2:00 PM and 2:30 PM (interval $[0, 30]$ minutes):

**25th percentile:** $0 + 0.25(30 - 0) = 7.5$ minutes

25% of arrivals occur before 2:07:30 PM.

**50th percentile:** $0 + 0.50(30 - 0) = 15$ minutes

Half of arrivals occur before 2:15 PM (the [median](!/probability/median)).

**75th percentile:** $0 + 0.75(30 - 0) = 22.5$ minutes

75% of arrivals occur before 2:22:30 PM.

**IQR:** $22.5 - 7.5 = 15$ minutes

The middle 50% of arrivals span a 15-minute window from 2:07:30 PM to 2:22:30 PM.

### Other Notable Percentiles

**10th percentile:** $x_{0.10} = a + 0.10(b - a)$ (10% of values below this)

**90th percentile:** $x_{0.90} = a + 0.90(b - a)$ (90% of values below this)

**95th percentile:** $x_{0.95} = a + 0.95(b - a)$ (95% of values below this)

For the uniform distribution, every percentile divides the interval proportionally—the $p$-th percentile is always located at position $p$ along the interval from $a$ to $b$. This makes the uniform distribution the simplest case for understanding quantiles.
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
The continuous uniform distribution models situations where any value within an interval is equally likely, representing complete uncertainty within defined bounds.

### Common Applications

**Random Number Generation:**
• Computational random number generators produce uniform $[0,1]$ values
• Simulations and Monte Carlo methods
• Cryptographic applications
• Statistical sampling algorithms

**Scheduling and Timing:**
• Random arrival times within a window
• Bus/train arrival when schedule unknown
• Meeting start times with imprecise information
• Random delays or offsets

**Physical and Geometric Problems:**
• Random point selection on a line segment or interval
• Angle measurements in certain contexts
• Rounding errors in numerical computations
• Random coordinates within bounded regions

**Decision Making Under Ignorance:**
• Modeling complete uncertainty about a parameter
• Bayesian prior distributions (non-informative priors)
• Initial estimates before data collection

### Why It Appears

The uniform distribution represents maximum entropy—when you know only the minimum and maximum possible values, the uniform distribution assumes nothing else. It's the "default" model for complete ignorance within bounds.

It also serves as the foundation for generating other distributions: by transforming uniform $[0,1]$ random variables using inverse [CDF](!/probability/cdf) methods, any continuous distribution can be simulated.

### Example Application

A digital clock displays time in whole minutes. When you glance at it, the actual time has passed some fraction into the current minute. This fraction is uniformly distributed on $[0, 1)$ minutes, with [mean](!/probability/expected-value) 30 seconds.

For scheduling, if a bus arrives "sometime between 2:00 and 2:30" with no further information, modeling arrival time as $\\text{Uniform}(0, 30)$ minutes reflects complete uncertainty, giving an expected wait of 15 minutes.
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
The continuous uniform distribution, while mathematically simple, exhibits several special cases and edge behaviors worth understanding.

### Unit Interval Uniform Distribution

When $a = 0$ and $b = 1$, we obtain the **standard uniform distribution** $\\text{Uniform}(0, 1)$:

$$f(x) = 1 \\text{ for } 0 \\leq x \\leq 1$$

This is the fundamental distribution in random number generation—all other continuous distributions can be generated by transforming uniform $[0, 1]$ random variables using the inverse [CDF](!/probability/cdf) method.

Any uniform random variable $X \\sim \\text{Uniform}(a, b)$ can be transformed to standard uniform:

$$U = \\frac{X - a}{b - a} \\sim \\text{Uniform}(0, 1)$$

### As Interval Width Approaches Zero

As $b - a \\to 0$ (with midpoint $\\frac{a+b}{2}$ held constant), the uniform distribution degenerates to a point mass:

$$\\lim_{b \\to a} \\text{Uniform}(a, b) = \\delta_{\\frac{a+b}{2}}$$

All probability concentrates at a single value. The distribution becomes deterministic—no randomness remains.

### As Interval Width Increases

As $b - a \\to \\infty$, the interval grows without bound:

• The density $f(x) = \\frac{1}{b-a} \\to 0$ (probability spreads thinner)
• [Variance](!/probability/variance) $\\frac{(b-a)^2}{12} \\to \\infty$ (uncertainty grows)
• The distribution can no longer be normalized over the entire real line

Unlike the normal distribution, a uniform distribution over $(-\\infty, \\infty)$ cannot exist as a proper probability distribution.

### Symmetric Interval Around Zero

When $a = -c$ and $b = c$ for some $c > 0$, the distribution is symmetric around zero:

$$X \\sim \\text{Uniform}(-c, c)$$

Properties:
• [Mean](!/probability/expected-value) $= 0$
• [Variance](!/probability/variance) $= \\frac{(2c)^2}{12} = \\frac{c^2}{3}$
• Useful for modeling symmetric errors or deviations

### Limiting Behavior and Connections

**Relationship to Discrete Uniform:**
The continuous uniform is the limiting case of the [discrete uniform distribution](!/probability/distributions/discrete/uniform) as the number of possible values increases and their spacing decreases:

$$\\lim_{n \\to \\infty} \\text{DiscreteUniform}\\{a, a + \\Delta, a + 2\\Delta, \\ldots, b\\} \\to \\text{Uniform}(a, b)$$

where $\\Delta = \\frac{b-a}{n}$ as the grid becomes infinitely fine.

**Maximum Entropy:**
Among all continuous distributions on $[a, b]$, the uniform distribution has **maximum entropy**—it represents the state of complete ignorance about where in the interval a value might fall.

**Sum of Uniforms:**
Unlike the normal and exponential distributions, sums of uniform random variables do **not** remain uniform. Instead, the sum of $n$ independent $\\text{Uniform}(0, 1)$ variables approaches normal by the [Central Limit Theorem](!/probability/central-limit-theorem).

### Practical Implications

**Measurement Rounding:**
Digital instruments that round to the nearest unit create uniform rounding errors on $[-0.5, 0.5]$. As precision decreases (rounding to nearest 10, 100, etc.), the interval widens proportionally.

**Bounded Uncertainty:**
When you know a parameter lies between $a$ and $b$ but have no other information, the uniform prior represents minimal assumptions—neither favoring high values nor low values within the range.
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
The continuous uniform distribution has simple mathematical properties stemming from its constant density across the support interval.

### Symmetry

The uniform distribution is **perfectly symmetric** around its midpoint $\\frac{a+b}{2}$:

$$f\\left(\\frac{a+b}{2} + x\\right) = f\\left(\\frac{a+b}{2} - x\\right) \\text{ for } |x| \\leq \\frac{b-a}{2}$$

This symmetry implies:
• [Mean](!/probability/expected-value) = [Median](!/probability/median) = $\\frac{a+b}{2}$
• [Mode](!/probability/mode) is not uniquely defined (all values equally probable)
• The distribution is mirror-symmetric about its center

### Skewness

$$\\text{Skewness} = 0$$

Zero skewness confirms perfect symmetry. The uniform distribution has no tendency toward either tail—both sides balance exactly.

### Kurtosis

$$\\text{Kurtosis} = 1.8$$

$$\\text{Excess Kurtosis} = -1.2$$

The uniform distribution has **negative excess kurtosis** (platykurtic). With kurtosis 1.8 < 3, it has lighter tails than the normal distribution. The flat shape means probability is spread evenly rather than concentrated at the center or in the tails.

### Tail Behavior

The uniform distribution has **no tails** in the traditional sense:

$$f(x) = \\begin{cases} \\frac{1}{b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{otherwise} \\end{cases}$$

Probability density is constant within $[a, b]$ and exactly zero outside this interval. There is an abrupt cutoff at the boundaries—no gradual decay.

This represents the opposite extreme from heavy-tailed distributions:
• No values outside $[a, b]$ are possible
• All values within $[a, b]$ are equally likely
• No concept of "rare extreme events"

### Unique Mathematical Properties

**Constant Density:**
The defining property is uniform density:

$$f(x) = \\frac{1}{b-a} \\text{ for all } x \\in [a, b]$$

This makes many calculations algebraically simple.

**Maximum Entropy on Bounded Interval:**
Among all continuous distributions on $[a, b]$, the uniform distribution has the highest entropy:

$$H = \\ln(b - a)$$

It represents maximum uncertainty or minimum information—complete ignorance about where in $[a, b]$ a value falls.

**Probability Proportional to Length:**
For any subinterval $[c, d] \\subseteq [a, b]$:

$$P(c \\leq X \\leq d) = \\frac{d - c}{b - a}$$

Probability is simply the length of the subinterval divided by the total interval length.

**Independence from Location:**
The distribution shape depends only on interval width $b - a$, not on location. Shifting the interval preserves all distributional properties:

$$\\text{Uniform}(a, b) \\stackrel{d}{=} \\text{Uniform}(a+c, b+c) \\text{ for any } c$$

### Useful Identities

**Linear Transformation:**
If $X \\sim \\text{Uniform}(a, b)$, then:

$$Y = cX + d \\sim \\text{Uniform}(ca + d, cb + d) \\text{ for } c > 0$$

Linear transformations preserve uniformity (with appropriate parameter adjustments).

**Standardization:**
Any uniform variable can be transformed to standard uniform:

$$U = \\frac{X - a}{b - a} \\sim \\text{Uniform}(0, 1)$$

**Inverse CDF Method:**
The uniform [CDF](!/probability/cdf) is:

$$F(x) = \\frac{x - a}{b - a}$$

with inverse:

$$F^{-1}(p) = a + p(b - a)$$

This makes generating uniform random variables and computing [quantiles](!/probability/median) trivial.

**Order Statistics:**
For $n$ independent $\\text{Uniform}(0, 1)$ variables, the $k$-th order statistic follows a Beta$(k, n-k+1)$ distribution. The minimum and maximum have simple distributions:

$$\\min(X_1, \\ldots, X_n) \\sim \\text{Uniform}(a, a + \\frac{b-a}{n})$$ (approximately, for large $n$)

**Not Closed Under Addition:**
Unlike the normal distribution, sums of independent uniform variables do **not** remain uniform. Instead, the sum approaches normal by the [Central Limit Theorem](!/probability/central-limit-theorem).
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
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Continuous Uniform](!/probability/distributions/continuous/uniform#12) →@
            `,
                 calculators:`            
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Discrete Distributions Probability Calculators ](!/probability/calculators/continuous-distributions) →@
        `,
  
    },
  
  }

  const introContent = {
  id: "intro",
  title: "Continuous Uniform Distribution: Equal Likelihood Over an Interval",
  content: `
  The probabilistic experiment behind the continuous uniform distribution consists of selecting a value at random from a fixed interval, where no value within the interval is preferred over another. Any subinterval of equal length has the same probability of being selected. The randomness lies purely in position within the interval, not in frequency or accumulation of events.
  `
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Continuous Uniform Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/continuous/uniform",
         name: "name"
      },
        
       }
    }
   }

export default function ContinuousUniformDistributionPage({seoData,sectionsContent , introContent}) {

    
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
          
      <div key={'notation-uniform'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
                {processContent(sectionsContent.obj2.content,)}
            </div>,
          // sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          // sectionsContent.obj3.content,
           <div key={'parameters-uniform'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
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
          <div key={'pdf-uniform'} style={{transform:'scale(0.8)'}}>
          <ContinuousUniformDistribution/>
          </div>,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
           <div key={'cdf-uniform'} style={{transform:'scale(0.8)'}}>
          <ContinuousUniformDistributionCDF/>
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
          <ContinuousUniformCalculator/>,
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
    // {
    //     id:'16',
    //     title:sectionsContent.obj16.title,
    //     link:sectionsContent.obj16.link,
    //     content:[
    //       sectionsContent.obj16.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Continuous Uniform Distribution</h1>
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
