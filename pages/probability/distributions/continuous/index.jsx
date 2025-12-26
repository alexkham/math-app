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


//   normal:{
//   title:`Normal Distribution`,
//   content:``,
//   before:``,
//   after:``,
//   checklist:`<h2 style="color: #52525b; margin-top: 0; font-size: 20px;">
// <span style="background: #71717a; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">✓</span>
// Checklist for Identifying a Normal Distribution
// </h2>
// ✔ Data clusters symmetrically around a central value (the mean).<br>
// ✔ Most values fall near the mean, with frequency decreasing as you move away.<br>
// ✔ The distribution is bell-shaped and symmetric.<br>
// ✔ <strong>Random variable X</strong> represents continuous measurements that can be positive or negative.<br>
// ✔ Applicable to natural phenomena, measurement errors, and sums of random variables (Central Limit Theorem).`,

//   parameters:`<h3 style="color: #475569; margin-top: 0; font-size: 18px;">
// <span style="background: #64748b; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">θ</span>
// Parameters of Normal Distribution
// </h3>
// <strong>μ</strong> (mu): mean or center of the distribution, where $\\mu \\in \\mathbb{R}$

// <strong>σ</strong> (sigma): standard deviation, measuring spread around the mean, where $\\sigma > 0$

// <div style="background: #f1f5f9; border-left: 3px solid #64748b; padding: 12px 16px; margin: 12px 0; border-radius: 4px; font-size: 14px;">
// The normal distribution is fully characterized by these two parameters. <strong>μ</strong> determines the location (where the peak sits on the number line), while <strong>σ</strong> controls the spread (how wide or narrow the bell curve is). Variance is $\\sigma^2$, but we typically use $\\sigma$ as the primary parameter since it's in the same units as the data.
// </div>`,

//   notation:`<h3 style="color: #334155; margin-top: 0; font-size: 18px;">
// <span style="background: #94a3b8; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">N</span>
// Notations Used
// </h3>
// <strong>$X \\sim N(\\mu, \\sigma^2)$</strong> — distribution of the random variable (variance notation).

// <strong>$X \\sim \\text{Normal}(\\mu, \\sigma^2)$</strong> — alternative explicit form.

// <strong>$N(\\mu, \\sigma^2)$</strong> — used to denote the distribution itself (not the random variable).

// <strong>$N(0, 1)$</strong> — the standard normal distribution ($\\mu = 0, \\sigma = 1$).

// <strong>$Z \\sim N(0, 1)$</strong> — conventional notation for a standard normal random variable.

// <div style="background: #e0f2fe; border-left: 3px solid #0ea5e9; padding: 12px 16px; margin: 12px 0; border-radius: 4px; font-size: 14px;">
// <strong>Note:</strong> Some texts use $N(\\mu, \\sigma)$ with standard deviation instead of variance. Always check which convention is being used. Statistical software often defaults to variance notation.
// </div>

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,

//   pdf:`<h3 style="color: #1e40af; margin-top: 0; font-size: 18px;">
// <span style="background: #3b82f6; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">f(x)</span>
// Probability Density Function (PDF)
// </h3>

// The <strong>probability density function (PDF)</strong> of a <strong>normal distribution</strong> is given by:

// $$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}, \\quad -\\infty < x < \\infty$$

// ### Intuition Behind the Formula

// * **Bell-Shaped Curve**: The normal distribution creates a symmetric, bell-shaped curve centered at $\\mu$.

// * **Parameters**:
//   * $\\mu$: The mean determines where the center of the bell sits
//   * $\\sigma$: The standard deviation controls the width of the bell
//   * $\\sigma^2$: The variance ($\\sigma$ squared) appears in the exponent

// * **Support (Range of the Random Variable)**:
//   * The random variable $X$ can take any real value: $(-\\infty, +\\infty)$
//   * While theoretically unbounded, approximately 99.7% of values fall within $\\mu \\pm 3\\sigma$
//   * The <strong>support</strong> is the entire real line

// * **Logic Behind the Formula**:
//   * $\\frac{1}{\\sigma\\sqrt{2\\pi}}$: Normalization constant ensuring total area equals 1
//   * $(x-\\mu)^2$: Squared distance from the mean (makes curve symmetric)
//   * $e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$: Exponential decay as you move away from $\\mu$
//   * The total area under the curve equals 1:
  
//   $$\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$$

// <div style="background: #dbeafe; border-left: 3px solid #3b82f6; padding: 12px 16px; margin: 12px 0; border-radius: 4px; font-size: 14px;">
// <strong>Practical Example:</strong> Human heights follow approximately a normal distribution. If adult male heights have $\\mu = 175$ cm and $\\sigma = 7$ cm, then $X \\sim N(175, 49)$. The PDF tells us the relative likelihood of observing different heights, with the peak at 175 cm and decreasing probability as we move toward very short or very tall individuals.
// </div>`,

//   cdf:`<h3 style="color: #1e3a8a; margin-top: 0; font-size: 18px;">
// <span style="background: #2563eb; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">F(x)</span>
// Cumulative Distribution Function (CDF)
// </h3>

// The <strong>cumulative distribution function (CDF)</strong> gives the probability that $X$ is less than or equal to a specific value:

// $$F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(t-\\mu)^2}{2\\sigma^2}}\\,dt$$

// **Standard Normal CDF**: For the standard normal distribution $N(0, 1)$, the CDF is traditionally denoted by $\\Phi(z)$:

// $$\\Phi(z) = P(Z \\leq z) = \\int_{-\\infty}^{z} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{t^2}{2}}\\,dt$$

// **Key Properties**:
// * $F(-\\infty) = 0$ and $F(+\\infty) = 1$
// * $F(\\mu) = 0.5$ (the mean is the 50th percentile)
// * The CDF is strictly increasing and S-shaped
// * Any normal CDF can be expressed using the standard normal: $F(x) = \\Phi\\left(\\frac{x-\\mu}{\\sigma}\\right)$

// <div style="background: #bfdbfe; border-left: 3px solid #2563eb; padding: 12px 16px; margin: 12px 0; border-radius: 4px; font-size: 14px;">
// <strong>Practical Use:</strong> The normal CDF has no closed-form expression, so we use tables, calculators, or software. To find $P(X \\leq 180)$ when $X \\sim N(175, 49)$, convert to standard normal: $Z = (180-175)/7 \\approx 0.714$, then look up $\\Phi(0.714) \\approx 0.762$, meaning about 76.2% of values fall below 180.
// </div>`,

//   meanVariance:`<h3 style="color: #1e3a8a; margin-top: 0; font-size: 18px;">
// <span style="background: #1d4ed8; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">μ,σ²</span>
// Mean and Variance
// </h3>

// **Expected Value (Mean)**:

// $$E[X] = \\mu$$

// The mean of a normal distribution is simply the parameter $\\mu$. This is also the median and mode—all three measures of center coincide for the normal distribution due to its symmetry.

// **Variance**:

// $$\\text{Var}(X) = \\sigma^2$$

// The variance equals the parameter $\\sigma^2$. This measures the average squared deviation from the mean.

// **Standard Deviation**:

// $$\\text{SD}(X) = \\sigma$$

// Standard deviation $\\sigma$ is more interpretable than variance because it's in the same units as the original data. It represents the typical distance of observations from the mean.

// <div style="background: #93c5fd; border-left: 3px solid #1d4ed8; padding: 12px 16px; margin: 12px 0; border-radius: 4px; font-size: 14px;">
// <strong>Empirical Rule (68-95-99.7)</strong>:<br>
// - Approximately 68% of data falls within $\\mu \\pm \\sigma$<br>
// - Approximately 95% of data falls within $\\mu \\pm 2\\sigma$<br>
// - Approximately 99.7% of data falls within $\\mu \\pm 3\\sigma$
// </div>`,

//   keyProperties:`<h3 style="color: #1e3a8a; margin-top: 0; font-size: 18px;">
// <span style="background: #1e40af; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">★</span>
// Key Properties and Special Characteristics
// </h3>

// **Symmetry**: The normal distribution is perfectly symmetric about its mean. This means $P(X \\leq \\mu - a) = P(X \\geq \\mu + a)$ for any value $a$.

// **Unimodal**: The distribution has a single peak (mode) at $x = \\mu$, where the probability density is highest.

// **Asymptotic**: The tails approach (but never touch) the horizontal axis as $x \\to \\pm\\infty$. Theoretically, any value is possible, though extreme values are increasingly unlikely.

// **Central Limit Theorem**: Perhaps the most important property—the sum or average of independent random variables tends toward a normal distribution as sample size increases, regardless of the original distribution (with some conditions).

// **Linear Transformations**: If $X \\sim N(\\mu, \\sigma^2)$, then $aX + b \\sim N(a\\mu + b, a^2\\sigma^2)$. This property preserves normality under scaling and shifting.

// **Standardization**: Any normal random variable can be standardized: $Z = \\frac{X - \\mu}{\\sigma}$ gives $Z \\sim N(0, 1)$, the standard normal distribution.

// **Sums of Normals**: If $X_1 \\sim N(\\mu_1, \\sigma_1^2)$ and $X_2 \\sim N(\\mu_2, \\sigma_2^2)$ are independent, then $X_1 + X_2 \\sim N(\\mu_1 + \\mu_2, \\sigma_1^2 + \\sigma_2^2)$.

// **Maximum Entropy**: Among all distributions with specified mean and variance, the normal distribution has the maximum entropy (it's the "least informative" or "most random" distribution given those constraints).

// <div style="background: rgba(255,255,255,0.3); border-left: 3px solid #1e40af; padding: 12px 16px; margin: 12px 0; border-radius: 4px; font-size: 14px;">
// <strong>Why It Matters:</strong> The normal distribution appears throughout statistics because of the Central Limit Theorem. Many statistical methods (t-tests, ANOVA, regression) assume normality or rely on it through the CLT. Understanding these properties helps you recognize when normal approximations are appropriate and when they break down.
// </div>`
// },

normal:{
  title:`Normal Distribution`,
  content:``,
  before:``,
  after:``,
  
//  checklist:`<h2 style="color: #52525b;"><span style="background: #71717a; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">✓</span>Checklist for Identifying a Normal Distribution</h2>
// ✔ Data clusters symmetrically around a central value (the mean).
// ✔ Most values fall near the mean, with frequency decreasing as you move away.
// ✔ The distribution is bell-shaped and symmetric.
// ✔ Random variable X represents continuous measurements that can be positive or negative.
// ✔ Applicable to natural phenomena, measurement errors, and sums of random variables (Central Limit Theorem).`,

checklist:`<h2 style="color: #52525b;"> Checklist for Identifying a Normal Distribution</h2>
✔ Data clusters symmetrically around a central value (the mean).
✔ Most values fall near the mean, with frequency decreasing as you move away.
✔ The distribution is bell-shaped and symmetric.
✔ Random variable X represents continuous measurements that can be positive or negative.
✔ Applicable to natural phenomena, measurement errors, and sums of random variables (Central Limit Theorem).
`,
//  

parameters:`<h3 style="color: #475569;">Parameters of Normal Distribution</h3>
**μ** (mu): mean or center of the distribution, where $\\mu \\in \\mathbb{R}$

**σ** (sigma): standard deviation, measuring spread around the mean, where $\\sigma > 0$

The normal distribution is fully characterized by these two parameters. **μ** determines the location (where the peak sits on the number line), while **σ** controls the spread (how wide or narrow the bell curve is). Variance is $\\sigma^2$, but we typically use $\\sigma$ as the primary parameter since it's in the same units as the data.`,


//   notation:`<h3 style="color: #334155;">
// <span style="background: #94a3b8; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">N</span>
// Notations Used
// </h3>
// **$X \\sim N(\\mu, \\sigma^2)$** — distribution of the random variable (variance notation).

// **$X \\sim \\text{Normal}(\\mu, \\sigma^2)$** — alternative explicit form.

// **$N(\\mu, \\sigma^2)$** — used to denote the distribution itself (not the random variable).

// **$N(0, 1)$** — the standard normal distribution ($\\mu = 0, \\sigma = 1$).

// **$Z \\sim N(0, 1)$** — conventional notation for a standard normal random variable.

// **Note:** Some texts use $N(\\mu, \\sigma)$ with standard deviation instead of variance. Always check which convention is being used. Statistical software often defaults to variance notation.

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,

 notation:`<h3 style="color: #334155;">Notations Used</h3>
$X \\sim N(\\mu, \\sigma^2)$ — distribution of the random variable (variance notation).

$X \\sim \\text{Normal}(\\mu, \\sigma^2)$ — alternative explicit form.

$N(\\mu, \\sigma^2)$ — used to denote the distribution itself (not the random variable).

$N(0, 1)$ — the standard normal distribution ($\\mu = 0, \\sigma = 1$).

$Z \\sim N(0, 1)$ — conventional notation for a standard normal random variable.

**Note:** Some texts use $N(\\mu, \\sigma)$ with standard deviation instead of variance. Always check which convention is being used. Statistical software often defaults to variance notation.

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,


// pdf:`<h3 style="color: #1e40af;">
// <span style="background: #3b82f6; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">f(x)</span>
// Probability Density Function (PDF)
// </h3>

// The **probability density function (PDF)** of a **normal distribution** is given by:

// $$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}, \\quad -\\infty < x < \\infty$$

// ### Intuition Behind the Formula

// * **Bell-Shaped Curve**: The normal distribution creates a symmetric, bell-shaped curve centered at $\\mu$.

// * **Parameters**:
//   * $\\mu$: The mean determines where the center of the bell sits
//   * $\\sigma$: The standard deviation controls the width of the bell
//   * $\\sigma^2$: The variance ($\\sigma$ squared) appears in the exponent

// * **Support (Range of the Random Variable)**:
//   * The random variable $X$ can take any real value: $(-\\infty, +\\infty)$
//   * While theoretically unbounded, approximately 99.7% of values fall within $\\mu \\pm 3\\sigma$
//   * The **support** is the entire real line

// * **Logic Behind the Formula**:
//   * $\\frac{1}{\\sigma\\sqrt{2\\pi}}$: Normalization constant ensuring total area equals 1
//   * $(x-\\mu)^2$: Squared distance from the mean (makes curve symmetric)
//   * $e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$: Exponential decay as you move away from $\\mu$
//   * The total area under the curve equals 1:
  
//   $$\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$$

// **Practical Example:** Human heights follow approximately a normal distribution. If adult male heights have $\\mu = 175$ cm and $\\sigma = 7$ cm, then $X \\sim N(175, 49)$. The PDF tells us the relative likelihood of observing different heights, with the peak at 175 cm and decreasing probability as we move toward very short or very tall individuals.`,

pdf:`<h3 style="color: #1e40af;">Probability Density Function (PDF)</h3>
The **probability density function (PDF)** of a **normal distribution** is given by:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}, \\quad -\\infty < x < \\infty$$

### Intuition Behind the Formula

* **Bell-Shaped Curve**: The normal distribution creates a symmetric, bell-shaped curve centered at $\\mu$.

* **Parameters**:
  * $\\mu$: The mean determines where the center of the bell sits
  * $\\sigma$: The standard deviation controls the width of the bell
  * $\\sigma^2$: The variance ($\\sigma$ squared) appears in the exponent

* **Support (Range of the Random Variable)**:
  * The random variable $X$ can take any real value: $(-\\infty, +\\infty)$
  * While theoretically unbounded, approximately 99.7% of values fall within $\\mu \\pm 3\\sigma$
  * The **support** is the entire real line

* **Logic Behind the Formula**:
  * $\\frac{1}{\\sigma\\sqrt{2\\pi}}$: Normalization constant ensuring total area equals 1
  * $(x-\\mu)^2$: Squared distance from the mean (makes curve symmetric)
  * $e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$: Exponential decay as you move away from $\\mu$
  * The total area under the curve equals 1:
  
  $$\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$$

**Practical Example:** Human heights follow approximately a normal distribution. If adult male heights have $\\mu = 175$ cm and $\\sigma = 7$ cm, then $X \\sim N(175, 49)$. The PDF tells us the relative likelihood of observing different heights, with the peak at 175 cm and decreasing probability as we move toward very short or very tall individuals.`,  


cdf:`<h3 style="color: #1e3a8a;">
<span style="background: #2563eb; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">F(x)</span>
Cumulative Distribution Function (CDF)
</h3>

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

  meanVariance:`<h3 style="color: #1e3a8a;">
<span style="background: #1d4ed8; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">μ,σ²</span>
Mean and Variance
</h3>

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
- Approximately 68% of data falls within $\\mu \\pm \\sigma$
- Approximately 95% of data falls within $\\mu \\pm 2\\sigma$
- Approximately 99.7% of data falls within $\\mu \\pm 3\\sigma$`,

  keyProperties:`<h3 style="color: #1e3a8a;">
<span style="background: #1e40af; color: white; padding: 5px 14px; border-radius: 4px; margin-right: 10px; font-weight: 600; font-size: 14px; display: inline-block;">★</span>
Key Properties and Special Characteristics
</h3>

**Symmetry**: The normal distribution is perfectly symmetric about its mean. This means $P(X \\leq \\mu - a) = P(X \\geq \\mu + a)$ for any value $a$.

**Unimodal**: The distribution has a single peak (mode) at $x = \\mu$, where the probability density is highest.

**Asymptotic**: The tails approach (but never touch) the horizontal axis as $x \\to \\pm\\infty$. Theoretically, any value is possible, though extreme values are increasingly unlikely.

**Central Limit Theorem**: Perhaps the most important property—the sum or average of independent random variables tends toward a normal distribution as sample size increases, regardless of the original distribution (with some conditions).

**Linear Transformations**: If $X \\sim N(\\mu, \\sigma^2)$, then $aX + b \\sim N(a\\mu + b, a^2\\sigma^2)$. This property preserves normality under scaling and shifting.

**Standardization**: Any normal random variable can be standardized: $Z = \\frac{X - \\mu}{\\sigma}$ gives $Z \\sim N(0, 1)$, the standard normal distribution.

**Sums of Normals**: If $X_1 \\sim N(\\mu_1, \\sigma_1^2)$ and $X_2 \\sim N(\\mu_2, \\sigma_2^2)$ are independent, then $X_1 + X_2 \\sim N(\\mu_1 + \\mu_2, \\sigma_1^2 + \\sigma_2^2)$.

**Maximum Entropy**: Among all distributions with specified mean and variance, the normal distribution has the maximum entropy (it's the "least informative" or "most random" distribution given those constraints).

**Why It Matters:** The normal distribution appears throughout statistics because of the Central Limit Theorem. Many statistical methods (t-tests, ANOVA, regression) assume normality or rely on it through the CLT. Understanding these properties helps you recognize when normal approximations are appropriate and when they break down.`
},


uniform:{
      title:`Uniform Continuous Distribution`,
      content:``,
      before:``,
      after:``,
  
    },
  
    exponential:{
  
      title:`Exponential Distribution`,
      content:``,
      before:``,
      after:``,
  
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
Understanding whether your random variable is continuous or discrete determines which distribution family to use and how to calculate probabilities. The distinction fundamentally changes your mathematical approach.

[Discrete distributions](!/probability/distributions/discrete) deal with countable outcomes—things you can list individually. When you [roll dice](!/probability/models/dice-roll), count defective items, or track the number of customers arriving, you're working with discrete random variables. Here, each specific outcome has a non-zero probability, and you calculate probabilities by summing values from a probability mass function (PMF). On a graph, discrete distributions appear as distinct bars or points.

**Continuous distributions** handle measurements that flow along a continuum—height, time, temperature, distance. The underlying random variable can assume infinitely many values within any interval. Since individual points have probability zero, you must calculate probabilities over ranges by integrating the probability density function (PDF). Graphs show smooth curves where area represents probability.

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
The [CDF](!/probability/cdf), $F(x)$, gives the probability that the random variable is less than or equal to x. Calculated by integrating the PDF from negative infinity to x, it always ranges from 0 to 1 and is non-decreasing.

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

The cumulative distribution function F(x) = P(X ≤ x) answers the question "what's the probability the random variable is at most x?" This is directly usable. If you need P(X ≤ 5), just evaluate F(5). For P(X > 5), use 1 - F(5). For P(3 < X ≤ 7), calculate F(7) - F(3). The CDF eliminates the need for integration in many practical problems.

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
Transforming random variables is a powerful technique that simplifies calculations, enables comparisons across different scales, and reveals relationships between distributions. Understanding how transformations affect continuous distributions is essential for practical statistical work.

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

Changing parameters reshapes the distribution dynamically. For the normal distribution, increasing σ flattens and widens the curve (more spread), while decreasing σ makes it taller and narrower (less spread). The mean μ slides the entire curve left or right without changing its shape. For the exponential distribution, increasing λ compresses probability toward zero (faster decay), while decreasing λ stretches it out (slower decay). Interactive visualizers let you manipulate parameters and immediately see these effects, building intuition about how distributions behave.

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
    link:'',
    content:[
        <SvgDiagram
            key={'normal'}
            layout='horizontal'
            data={distributionsDiagramsData['normal distribution']}
        />,
        
       <div key={'checklist-normal'} style={{background: 'linear-gradient(to right, #fafafa 0%, #f5f5f5 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #e5e7eb'}}>
            {processContent(sectionsContent.normal.checklist)}
        </div>,
        // <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1'}}>
        //     {processContent(sectionsContent.normal.parameters)}
        // </div>,
        <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1'}}>
    {processContent(sectionsContent.normal.parameters)}
</div>,
        <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8'}}>
            {processContent(sectionsContent.normal.notation)}
        </div>,
        
        <div key={'pdf-normal'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa'}}>
            {processContent(sectionsContent.normal.pdf)}
        </div>,
        
        <div key={'cdf-normal'} style={{background: 'linear-gradient(to right, #dbeafe 0%, #bfdbfe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #3b82f6'}}>
            {processContent(sectionsContent.normal.cdf)}
        </div>,
        
        <div key={'meanVariance-normal'} style={{background: 'linear-gradient(to right, #bfdbfe 0%, #93c5fd 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #2563eb'}}>
            {processContent(sectionsContent.normal.meanVariance)}
        </div>,
        
        <div key={'keyProperties-normal'} style={{background: 'linear-gradient(to right, #93c5fd 0%, #60a5fa 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #1d4ed8'}}>
            {processContent(sectionsContent.normal.keyProperties)}
        </div>,
    ]
},
    {
        id:'uniform',
        title:sectionsContent.uniform.title,
        link:'',
        content:[
          
             <SvgDiagram
            key={'uniform'}
    layout='horizontal'
   
    data={distributionsDiagramsData['continuous uniform distribution']}
    />,
          
        ]
    },
    {
        id:'exponential',
        title:sectionsContent.exponential.title,
        link:'',
        content:[
             <SvgDiagram
            key={'exponential'}
    layout='horizontal'
   
    data={distributionsDiagramsData['exponential distribution']}
    />,
        ]
    },
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
   <SectionTableOfContents sections={genericSections}/>
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
