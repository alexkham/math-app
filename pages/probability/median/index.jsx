import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import GenericTable from '@/app/components/generic-table/GenericTable'


export async function getStaticProps(){

  const keyWords=['','','','','']

  // •

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


const sectionsContent = {
  // obj1: {
  //   title: `Definition and Concept`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj1: {
  title: `Definition and Concept`,
  content: `
The **median** is the value that splits a [probability distribution](!/probability/distributions) exactly in half. It's the point where half the probability lies below and half lies above.

## What is the Median?

For any probability distribution, the median is the 50th percentile—the value $m$ that divides the total probability into two equal parts:

• **Discrete distributions**: The value $m$ where cumulative probability reaches or exceeds 0.5 from both directions
• **Continuous distributions**: The unique value $m$ where $P(X \\leq m) = 0.5$

If you draw [random variables](!/probability/random-variables) from the distribution repeatedly, half will fall below the median and half will fall above it.

## Median as a Measure of Central Tendency

The median is one of three primary measures describing where a distribution centers, alongside the [mean](!/probability/expected-value) and [mode](!/probability/mode).

Unlike the mean, which balances all values through weighted averaging, the median simply identifies the middle position. It cares only about ranking values, not their magnitudes—making it resistant to extreme observations that would distort the mean.

## Why the Median Matters

The median provides crucial insight into distribution structure:

• **Where is the center?** The median marks the probability midpoint
• **How symmetric is the distribution?** Comparing median to mean reveals skewness
• **Are there outliers?** The median stays stable when extreme values appear

For income data, housing prices, or any measurement prone to outliers, the median often represents the "typical" value better than the mean does.

## Median vs Other Measures

The median behaves distinctly from mean and mode:

• **Robustness**: Extreme values beyond the 50% threshold have zero influence
• **Always unique for continuous distributions**: Unlike the mode, which can be multiple or absent
• **May differ from mean**: Skewed distributions separate median and mean substantially
• **Interpretability**: Represents an achievable middle value, not an abstract balance point

The median complements mean and mode by revealing the distribution's center through probability division rather than probability weighting or probability concentration.
  `,
  before: ``,
  after: ``,
  link: '',
},
  // obj2: {
  //   title: `Median for Discrete Distributions`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

//   obj2: {
//   title: `Median for Discrete Distributions`,
//   content: `
// For [discrete distributions](!/probability/distributions/discrete), the median is the smallest value where cumulative probability reaches or crosses the halfway point.

// ## Definition

// The median of a discrete [random variable](!/probability/random-variables) $X$ is the smallest value $m$ satisfying both conditions:

// $$P(X \\leq m) \\geq 0.5 \\quad \\text{and} \\quad P(X \\geq m) \\geq 0.5$$

// This ensures that at least half the probability lies below (or at) $m$, and at least half lies above (or at) $m$.

// ## Why Two Conditions?

// The discrete nature creates jumps in the [cumulative distribution function](!/probability/cdf). A single value might satisfy one condition but not the other.

// The two-condition definition guarantees the median genuinely divides probability, even when the CDF jumps past 0.5 without landing exactly on it.

// ## How to Find the Median

// Unlike [expected value](!/probability/expected-value), there's no universal formula. Find the median through cumulative probability:

// 1. Calculate the [CDF](!/probability/cdf): $F(k) = P(X \\leq k)$ for each value in the support
// 2. Identify where $F(k)$ first reaches or exceeds 0.5
// 3. Verify both conditions hold at that value
// 4. If multiple consecutive values satisfy both conditions, any of them qualifies as a median

// ## Examples Across Distributions

// [Discrete Uniform](!/probability/distributions/discrete/uniform) on $\\{1, 2, 3, 4, 5\\}$: Each value has probability $\\frac{1}{5} = 0.2$. The CDF reaches $F(3) = 0.6 \\geq 0.5$, and $P(X \\geq 3) = 0.6 \\geq 0.5$. Median = $3$.

// [Geometric](!/probability/distributions/discrete/geometric) with parameter $p$: The median is $m = \\lceil \\frac{-\\ln(2)}{\\ln(1-p)} \\rceil$, where $\\lceil \\cdot \\rceil$ denotes rounding up.

// Example: For $p = 0.3$, median = $\\lceil 1.98 \\rceil = 2$.

// [Binomial](!/probability/distributions/discrete/binomial): No simple closed form exists. The median typically falls near $np$ but requires numerical evaluation of the CDF or reference tables.

// [Poisson](!/probability/distributions/discrete/poisson): For large $\\lambda$, the median approximately equals $\\lambda$. For smaller values, consult tables or compute the CDF directly.

// ## Non-Uniqueness

// Discrete distributions can have multiple medians when the CDF jumps from below 0.5 to above 0.5 in a single step, landing on exactly 0.5 at the jump point.

// Example: [Discrete Uniform](!/probability/distributions/discrete/uniform) on $\\{1, 2, 3, 4\\}$ has CDF values $0.25, 0.5, 0.75, 1.0$. Both $2$ and $3$ satisfy the median conditions. Either value is a valid median.

// ## Visual Identification

// On a cumulative probability plot, the median is where the step function first touches or crosses the horizontal line at 0.5. The discrete jumps make this crossing potentially ambiguous.

// ## Key Properties

// - The median always lies within the support
// - Finding it requires evaluating the CDF, not the [PMF](!/probability/probability-function/pmf) directly
// - Multiple values may qualify as medians in certain cases
// - Unlike the [mode](!/probability/mode), the median depends on cumulative structure, not individual probabilities
// - Changing tail probabilities can shift the median, even if the most probable value stays fixed
//   `,
//   before: ``,
//   after: ``,
//   link: '',
// },

obj2: {
  title: `Median for Discrete Distributions`,
  content: `
For [discrete distributions](!/probability/distributions/discrete), the median is the smallest value where cumulative probability reaches or crosses the halfway point.

## Definition

The median of a discrete [random variable](!/probability/random-variables) $X$ is the smallest value $m$ satisfying both conditions:

$$P(X \\leq m) \\geq 0.5 \\quad \\text{and} \\quad P(X \\geq m) \\geq 0.5$$

This ensures that at least half the probability lies below (or at) $m$, and at least half lies above (or at) $m$.

## Why Two Conditions?

The discrete nature creates jumps in the [cumulative distribution function](!/probability/cdf). A single value might satisfy one condition but not the other.

The two-condition definition guarantees the median genuinely divides probability, even when the CDF jumps past 0.5 without landing exactly on it.

## How to Find the Median

Unlike [expected value](!/probability/expected-value), there's no universal formula. Find the median through cumulative probability:

1. Calculate the [CDF](!/probability/cdf): $F(k) = P(X \\leq k)$ for each value in the support
2. Identify where $F(k)$ first reaches or exceeds 0.5
3. Verify both conditions hold at that value
4. If multiple consecutive values satisfy both conditions, any of them qualifies as a median

## Medians for Common Discrete Distributions

[Discrete Uniform](!/probability/distributions/discrete/uniform) on $\\{a, a+1, \\ldots, b\\}$

Median: $\\frac{a+b}{2}$ when $a+b$ is even

When $a+b$ is odd, both $\\frac{a+b-1}{2}$ and $\\frac{a+b+1}{2}$ satisfy the median conditions.

Example: Uniform on $\\{1,2,3,4,5\\}$ has median $3$

[Binomial](!/probability/distributions/discrete/binomial) with parameters $n$ and $p$

Median: No simple closed form. Approximation: median $\\approx np$ for large $n$

Requires numerical computation or tables for exact values.

Example: For $n=10, p=0.5$, numerical evaluation gives median $= 5$

[Geometric](!/probability/distributions/discrete/geometric) with parameter $p$

Median: $m = \\lceil \\frac{-\\ln(2)}{\\ln(1-p)} \\rceil$

Example: For $p = 0.3$, median $= \\lceil 1.98 \\rceil = 2$

[Negative Binomial](!/probability/distributions/discrete/negative-binomial) with parameters $r$ and $p$

Median: No closed form. Must evaluate [CDF](!/probability/cdf) numerically.

[Hypergeometric](!/probability/distributions/discrete/hypergeometric) with parameters $N, K, n$

Median: No closed form. Numerical evaluation required.

[Poisson](!/probability/distributions/discrete/poisson) with parameter $\\lambda$

Median: Approximation: median $\\approx \\lambda + \\frac{1}{3} - \\frac{0.02}{\\lambda}$ for large $\\lambda$

For small $\\lambda$, numerical evaluation of the [CDF](!/probability/cdf) is necessary.

## Non-Uniqueness

Discrete distributions can have multiple medians when the CDF jumps from below 0.5 to above 0.5 in a single step, landing on exactly 0.5 at the jump point.

Example: [Discrete Uniform](!/probability/distributions/discrete/uniform) on $\\{1, 2, 3, 4\\}$ has CDF values $0.25, 0.5, 0.75, 1.0$. Both $2$ and $3$ satisfy the median conditions. Either value is a valid median.

## Visual Identification

On a cumulative probability plot, the median is where the step function first touches or crosses the horizontal line at 0.5. The discrete jumps make this crossing potentially ambiguous.

## Key Properties

• The median always lies within the support
• Finding it requires evaluating the CDF, not the [PMF](!/probability/probability-function/pmf) directly
• Multiple values may qualify as medians in certain cases
• Unlike the [mode](!/probability/mode), the median depends on cumulative structure, not individual probabilities
• Changing tail probabilities can shift the median, even if the most probable value stays fixed
  `,
  before: ``,
  after: ``,
  link: '',
},
  // obj3: {
  //   title: `Median for Continuous Distributions`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

//   obj3: {
//   title: `Median for Continuous Distributions`,
//   content: `
// For [continuous distributions](!/probability/distributions/continuous), the median is the unique value where the [cumulative distribution function](!/probability/cdf) equals exactly 0.5.

// ## Definition

// The median of a continuous [random variable](!/probability/random-variables) $X$ is the value $m$ satisfying:

// $$F(m) = P(X \\leq m) = 0.5$$

// Equivalently, using the [probability density function](!/probability/probability-function/pdf):

// $$\\int_{-\\infty}^{m} f(x)dx = 0.5$$

// This is the point that divides the area under the density curve into two equal halves.

// ## How to Find the Median

// The median can often be found analytically by solving the CDF equation:

// 1. Write the [CDF](!/probability/cdf): $F(x) = P(X \\leq x)$
// 2. Set $F(m) = 0.5$
// 3. Solve for $m$ algebraically
// 4. Use the inverse CDF when it exists: $m = F^{-1}(0.5)$

// When no closed-form inverse exists, numerical methods locate the median through root-finding algorithms.

// ## Examples Across Distributions

// [Normal Distribution](!/probability/distributions/continuous/normal): The median equals the mean $\\mu$. Symmetry places the 50th percentile at the center of the bell curve.

// [Exponential Distribution](!/probability/distributions/continuous/exponential): The CDF is $F(x) = 1 - e^{-\\lambda x}$. Setting $F(m) = 0.5$ gives:

// $$1 - e^{-\\lambda m} = 0.5$$

// $$e^{-\\lambda m} = 0.5$$

// $$m = \\frac{\\ln(2)}{\\lambda}$$

// Median = $\\frac{\\ln(2)}{\\lambda} \\approx \\frac{0.693}{\\lambda}$.

// [Uniform Distribution](!/probability/distributions/continuous/uniform) on $[a, b]$: The CDF is $F(x) = \\frac{x-a}{b-a}$. Setting $F(m) = 0.5$ yields:

// $$\\frac{m-a}{b-a} = 0.5$$

// $$m = \\frac{a+b}{2}$$

// The median sits at the midpoint of the interval.

// **Beta Distribution**: For general parameters $\\alpha$ and $\\beta$, no closed form exists. Numerical methods are required, except for special symmetric cases like $\\alpha = \\beta$ where the median equals 0.5.

// ## Uniqueness

// Continuous distributions with strictly increasing CDFs have exactly one median. The smoothness of the CDF eliminates the ambiguity present in discrete cases.

// If the CDF has flat regions (constant over an interval), any value in that interval satisfies the median definition, creating non-uniqueness.

// ## Relationship to Density

// The median need not coincide with the peak of the [PDF](!/probability/probability-function/pdf). Skewed distributions separate the median from the [mode](!/probability/mode).

// The median divides probability mass equally, while the mode identifies maximum density. These are distinct concepts that align only in symmetric distributions.

// ## Visual Identification

// On a density curve, the median is the vertical line that splits the area under the curve into two equal parts. For symmetric distributions, this line passes through the peak. For skewed distributions, the median sits between the [mode](!/probability/mode) and [mean](!/probability/expected-value).

// ## Key Properties

// - Continuous distributions typically have a unique median
// - The median can be found by solving $F(m) = 0.5$ or using $F^{-1}(0.5)$
// - Unlike discrete cases, ties are impossible due to the smooth nature of the CDF
// - The median is always in the interior of the support for distributions with unbounded support
// - For bounded support, the median may approach but typically doesn't reach the boundaries
//   `,
//   before: ``,
//   after: ``,
//   link: '',
// },
  // obj4: {
  //   title: `Discrete vs Continuous Median`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },
// obj3: {
//   title: `Median for Continuous Distributions`,
//   content: `
// For [continuous distributions](!/probability/distributions/continuous), the median is the unique value where the [cumulative distribution function](!/probability/cdf) equals exactly 0.5.

// ## Definition

// The median of a continuous [random variable](!/probability/random-variables) $X$ is the value $m$ satisfying:

// $$F(m) = P(X \\leq m) = 0.5$$

// Equivalently, using the [probability density function](!/probability/probability-function/pdf):

// $$\\int_{-\\infty}^{m} f(x)dx = 0.5$$

// This is the point that divides the area under the density curve into two equal halves.

// ## How to Find the Median

// The median can often be found analytically by solving the CDF equation:

// 1. Write the [CDF](!/probability/cdf): $F(x) = P(X \\leq x)$
// 2. Set $F(m) = 0.5$
// 3. Solve for $m$ algebraically
// 4. Use the inverse CDF when it exists: $m = F^{-1}(0.5)$

// When no closed-form inverse exists, numerical methods locate the median through root-finding algorithms.

// ## Medians for Common Continuous Distributions

// [Continuous Uniform](!/probability/distributions/continuous/uniform) on $[a, b]$

// Median: $m = \\frac{a+b}{2}$

// The midpoint of the interval.

// [Normal](!/probability/distributions/continuous/normal) with parameters $\\mu, \\sigma$

// Median: $m = \\mu$

// Symmetry ensures median equals [mean](!/probability/expected-value).

// [Exponential](!/probability/distributions/continuous/exponential) with rate parameter $\\lambda$

// Median: $m = \\frac{\\ln(2)}{\\lambda} \\approx \\frac{0.693}{\\lambda}$

// Derivation: The CDF is $F(x) = 1 - e^{-\\lambda x}$. Setting $F(m) = 0.5$ gives:

// $$1 - e^{-\\lambda m} = 0.5$$

// $$e^{-\\lambda m} = 0.5$$

// $$m = \\frac{\\ln(2)}{\\lambda}$$

// Beta Distribution with parameters $\\alpha, \\beta$

// Median: No general closed form except for special cases

// When $\\alpha = \\beta$, median $= 0.5$ by symmetry

// Numerical methods required for general $\\alpha, \\beta$

// Gamma Distribution with shape $k$ and rate $\\theta$

// Median: No closed form

// For $k=1$, reduces to exponential with median $\\frac{\\ln(2)}{\\theta}$

// Numerical evaluation required for $k > 1$

// Weibull Distribution with shape $k$ and scale $\\lambda$

// Median: $m = \\lambda (\\ln 2)^{1/k}$

// Derived from the [CDF](!/probability/cdf) $F(x) = 1 - e^{-(x/\\lambda)^k}$

// Cauchy Distribution with location $x_0$ and scale $\\gamma$

// Median: $m = x_0$

// The median equals the location parameter. The [mean](!/probability/expected-value) does not exist for this distribution.

// Lognormal Distribution with parameters $\\mu, \\sigma$

// Median: $m = e^\\mu$

// The median of the lognormal equals the exponential of the underlying normal's mean.

// Triangular Distribution on $[a, c, b]$ with mode $c$

// Median depends on the position of mode $c$:

// If $c \\geq \\frac{a+b}{2}$: median $= a + \\sqrt{\\frac{(b-a)(c-a)}{2}}$

// If $c < \\frac{a+b}{2}$: median $= b - \\sqrt{\\frac{(b-a)(b-c)}{2}}$

// ## Uniqueness

// Continuous distributions with strictly increasing CDFs have exactly one median. The smoothness of the CDF eliminates the ambiguity present in discrete cases.

// If the CDF has flat regions (constant over an interval), any value in that interval satisfies the median definition, creating non-uniqueness.

// ## Relationship to Density

// The median need not coincide with the peak of the [PDF](!/probability/probability-function/pdf). Skewed distributions separate the median from the [mode](!/probability/mode).

// The median divides probability mass equally, while the mode identifies maximum density. These are distinct concepts that align only in symmetric distributions.

// ## Visual Identification

// On a density curve, the median is the vertical line that splits the area under the curve into two equal parts. For symmetric distributions, this line passes through the peak. For skewed distributions, the median sits between the [mode](!/probability/mode) and [mean](!/probability/expected-value).

// ## Key Properties

// - Continuous distributions typically have a unique median
// - The median can be found by solving $F(m) = 0.5$ or using $F^{-1}(0.5)$
// - Unlike discrete cases, ties are impossible due to the smooth nature of the CDF
// - The median is always in the interior of the support for distributions with unbounded support
// - For bounded support, the median may approach but typically doesn't reach the boundaries
//   `,
//   before: ``,
//   after: ``,
//   link: '',
// },

obj3: {
  title: `Median for Continuous Distributions`,
  content: `
For [continuous distributions](!/probability/distributions/continuous), the median is the unique value where the [cumulative distribution function](!/probability/cdf) equals exactly 0.5.

## Definition

The median of a continuous [random variable](!/probability/random-variables) $X$ is the value $m$ satisfying:

$$F(m) = P(X \\leq m) = 0.5$$

Equivalently, using the [probability density function](!/probability/probability-function/pdf):

$$\\int_{-\\infty}^{m} f(x)dx = 0.5$$

This is the point that divides the area under the density curve into two equal halves.

## How to Find the Median

The median can often be found analytically by solving the CDF equation:

1. Write the [CDF](!/probability/cdf): $F(x) = P(X \\leq x)$
2. Set $F(m) = 0.5$
3. Solve for $m$ algebraically
4. Use the inverse CDF when it exists: $m = F^{-1}(0.5)$

When no closed-form inverse exists, numerical methods locate the median through root-finding algorithms.

## Medians for Common Continuous Distributions

[Continuous Uniform](!/probability/distributions/continuous/uniform) on $[a, b]$

Median: $m = \\frac{a+b}{2}$

The midpoint of the interval.

[Normal](!/probability/distributions/continuous/normal) with parameters $\\mu, \\sigma$

Median: $m = \\mu$

Symmetry ensures median equals [mean](!/probability/expected-value).

[Exponential](!/probability/distributions/continuous/exponential) with rate parameter $\\lambda$

Median: $m = \\frac{\\ln(2)}{\\lambda} \\approx \\frac{0.693}{\\lambda}$

Derivation: The CDF is $F(x) = 1 - e^{-\\lambda x}$. Setting $F(m) = 0.5$ gives:

$$1 - e^{-\\lambda m} = 0.5$$

$$e^{-\\lambda m} = 0.5$$

$$m = \\frac{\\ln(2)}{\\lambda}$$

Beta Distribution with parameters $\\alpha, \\beta$

Median: No general closed form except for special cases

When $\\alpha = \\beta$, median $= 0.5$ by symmetry

Numerical methods required for general $\\alpha, \\beta$

Gamma Distribution with shape $k$ and rate $\\theta$

Median: No closed form

For $k=1$, reduces to exponential with median $\\frac{\\ln(2)}{\\theta}$

Numerical evaluation required for $k > 1$

Weibull Distribution with shape $k$ and scale $\\lambda$

Median: $m = \\lambda (\\ln 2)^{1/k}$

Derived from the [CDF](!/probability/cdf) $F(x) = 1 - e^{-(x/\\lambda)^k}$

Cauchy Distribution with location $x_0$ and scale $\\gamma$

Median: $m = x_0$

The median equals the location parameter. The [mean](!/probability/expected-value) does not exist for this distribution.

Lognormal Distribution with parameters $\\mu, \\sigma$

Median: $m = e^\\mu$

The median of the lognormal equals the exponential of the underlying normal's mean.

Triangular Distribution on $[a, c, b]$ with mode $c$

Median depends on the position of mode $c$:

If $c \\geq \\frac{a+b}{2}$: median $= a + \\sqrt{\\frac{(b-a)(c-a)}{2}}$

If $c < \\frac{a+b}{2}$: median $= b - \\sqrt{\\frac{(b-a)(b-c)}{2}}$

## Uniqueness

Continuous distributions with strictly increasing CDFs have exactly one median. The smoothness of the CDF eliminates the ambiguity present in discrete cases.

If the CDF has flat regions (constant over an interval), any value in that interval satisfies the median definition, creating non-uniqueness.

## Relationship to Density

The median need not coincide with the peak of the [PDF](!/probability/probability-function/pdf). Skewed distributions separate the median from the [mode](!/probability/mode).

The median divides probability mass equally, while the mode identifies maximum density. These are distinct concepts that align only in symmetric distributions.

## Visual Identification

On a density curve, the median is the vertical line that splits the area under the curve into two equal parts. For symmetric distributions, this line passes through the peak. For skewed distributions, the median sits between the [mode](!/probability/mode) and [mean](!/probability/expected-value).

## Key Properties

• Continuous distributions typically have a unique median
• The median can be found by solving $F(m) = 0.5$ or using $F^{-1}(0.5)$
• Unlike discrete cases, ties are impossible due to the smooth nature of the CDF
• The median is always in the interior of the support for distributions with unbounded support
• For bounded support, the median may approach but typically doesn't reach the boundaries
  `,
  before: ``,
  after: ``,
  link: '',
},
  obj4: {
  title: `Discrete vs Continuous Median`,
  content: `
The median behaves differently for discrete and continuous distributions due to fundamental differences in how probability distributes.

## Uniqueness

[Continuous distributions](!/probability/distributions/continuous): The median is unique. The [CDF](!/probability/cdf) is smooth and crosses 0.5 at exactly one point.

[Discrete distributions](!/probability/distributions/discrete): Multiple values may satisfy the median conditions when the CDF jumps from below 0.5 to above 0.5 in a single step.

Example: Discrete uniform on $\\{1, 2, 3, 4\\}$ has both 2 and 3 as valid medians.

## Definition Complexity

Continuous case: Simple condition $F(m) = 0.5$

Discrete case: Requires both $P(X \\leq m) \\geq 0.5$ and $P(X \\geq m) \\geq 0.5$ to handle probability jumps properly

The two-condition requirement for discrete distributions ensures the median genuinely divides probability despite the CDF's discontinuities.

## Computational Methods

Continuous: Solve $F(m) = 0.5$ analytically or use inverse CDF $F^{-1}(0.5)$

Discrete: Evaluate the CDF at each support value, find where cumulative probability first reaches 0.5, verify both conditions

Continuous distributions often have closed-form median expressions. Discrete distributions typically require numerical evaluation or lookup tables.

## Median as an Interval

Discrete: When multiple values satisfy the conditions, the median is technically an interval rather than a single point

Continuous: Always a single point (except for pathological cases with flat CDF regions)

In practice, discrete medians are reported as the smallest qualifying value, even when an interval exists.

## Visual Differences

Continuous: The [PDF](!/probability/probability-function/pdf) curve shows the median as the vertical line splitting area equally

Discrete: The [PMF](!/probability/probability-function/pmf) bar chart requires examining cumulative probabilities to locate the median

Identifying the median visually is more intuitive for continuous distributions than discrete ones.

## Impact on Calculations

Continuous: Integration yields exact median through $\\int_{-\\infty}^{m} f(x)dx = 0.5$

Discrete: Summation requires careful handling of boundary cases: $\\sum_{k \\leq m} P(X = k) \\geq 0.5$

The discrete case demands attention to whether inequalities are strict or non-strict.

## Relationship to Other Measures

Both types: Median can differ from [mean](!/probability/expected-value) and [mode](!/probability/mode) in skewed distributions

Continuous: The separation is smooth and predictable based on distribution shape

Discrete: The separation can be irregular due to probability concentration at specific points

## Why Continuous is Simpler

The smoothness of continuous CDFs eliminates ambiguity. Every strictly increasing CDF crosses 0.5 at exactly one location, making median identification straightforward.

Discrete distributions introduce complexity through jumps, ties, and the possibility of no value landing precisely at the 50% cumulative probability mark.
  `,
  before: ``,
  after: ``,
  link: '',
},
  // obj5: {
  //   title: `Median vs Mean vs Mode`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj5: {
  title: `Median, Mean, and Mode Compared`,
  content: `
Three measures describe where distributions center: median, [mean](!/probability/expected-value), and [mode](!/probability/mode). Each reveals different structural features.

## Quick Definitions

Median: The 50th percentile that divides total probability equally

[Mean](!/probability/expected-value): Weighted balance point calculated from all values

[Mode](!/probability/mode): Peak location—where probability or density reaches maximum

## Symmetric Distributions

When distributions mirror themselves around a center point, all three measures collapse to the same value.

[Normal distribution](!/probability/distributions/continuous/normal): median = mean = mode = $\\mu$

[Discrete Uniform](!/probability/distributions/discrete/uniform) on $\\{1,2,3,4,5\\}$: all three equal $3$

Perfect symmetry forces the probability split, the balance point, and the peak to occupy identical positions.

## Skewed Distributions

Asymmetry separates the three measures in consistent patterns.

Right skew (tail stretches toward larger values):

$$\\text{mode} < \\text{median} < \\text{mean}$$

Extreme large values drag the mean rightward. The median holds closer to the probability bulk. The mode stays fixed at the density peak.

[Exponential distribution](!/probability/distributions/continuous/exponential): mode = $0$, median = $\\frac{\\ln(2)}{\\lambda}$, mean = $\\frac{1}{\\lambda}$

Left skew (tail stretches toward smaller values):

$$\\text{mean} < \\text{median} < \\text{mode}$$

The ordering reverses—mean pulled left, mode anchored at the right peak.

## Comparison Table
  `,
  before: ``,
  after: `

## Robustness Differences

Mean: Vulnerable. One extreme observation can shift it substantially.

Median: Resistant. Values beyond the 50% threshold have no influence.

[Mode](!/probability/mode): Immune. Tail behavior irrelevant unless it creates a new peak.

Income data illustrates this: billionaires inflate the mean drastically while leaving median and mode nearly unchanged.

## Selection Criteria

Choose median for:
• Skewed distributions
• Data contaminated by outliers
• Representing a "central" value that's actually achievable
• Reporting typical values when extremes distort the mean

Choose mean for:
• Symmetric data without extreme values
• Leveraging mathematical properties (additivity, scaling)
• Incorporating all observations equally

Choose mode for:
• Categorical outcomes (colors, brands, types)
• Identifying the most frequent occurrence
• Detecting multiple concentration points

## Spatial Relationships

Symmetric case: All three occupy the same point at distribution center.

Right-skewed case: Mode sits at the left peak, median slightly right, mean furthest right chasing the tail.

Left-skewed case: Reversed ordering with mean leftmost, mode rightmost.

The median always falls between the mode and mean in skewed distributions, acting as a compromise measure that balances probability division against probability concentration.
  `,
  link: '',
},
  // obj6: {
  //   title: `Properties of the Median`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj6: {
  title: `Properties of the Median`,
  content: `
The median exhibits specific mathematical behaviors that distinguish it from other central tendency measures.

## Minimizes Absolute Deviation

The median minimizes the [expected value](!/probability/expected-value) of absolute deviation:

$$\\text{median}(X) = \\arg\\min_m E[|X - m|]$$

Among all possible values $m$, the median produces the smallest average absolute distance from $X$. This contrasts with the [mean](!/probability/expected-value), which minimizes squared deviations: $E[(X - \\mu)^2]$.

## Transformation Under Linear Operations

For a [random variable](!/probability/random-variables) $X$ with median $m$, consider the transformation $Y = aX + b$ where $a \\neq 0$.

The median of $Y$ is:

$$\\text{median}(Y) = a \\cdot \\text{median}(X) + b$$

Linear transformations shift and scale the median predictably. Multiply by $a$, add $b$—the middle point moves accordingly.

Example: If $X$ has median $4$, then $Y = 3X - 2$ has median $3(4) - 2 = 10$.

## Invariance Under Monotonic Transformations

For strictly monotonic functions $g$ (always increasing or always decreasing):

$$\\text{median}(g(X)) = g(\\text{median}(X))$$

If $g$ is strictly increasing, it preserves the ordering of values, so the 50th percentile stays at the same relative position.

Example: If $X$ has median $5$, then $Y = X^2$ has median $25$ (assuming $X > 0$).

This property holds for the median and [mode](!/probability/mode) but fails for the [mean](!/probability/expected-value).

## Robustness to Outliers

The median completely ignores values beyond the 50th percentile threshold. Extreme observations in either tail have zero impact on the median as long as they don't cross the middle rank.

Change every value above the median by any amount—the median stays fixed as long as the cumulative probability structure at the 50th percentile remains unchanged.

This makes the median ideal for data with contamination or measurement errors in the tails.

## Uniqueness for Continuous Distributions

[Continuous distributions](!/probability/distributions/continuous) with strictly increasing [CDFs](!/probability/cdf) have exactly one median. The smoothness eliminates ambiguity.

[Discrete distributions](!/probability/distributions/discrete) may have multiple medians when the CDF jumps across 0.5.

## Relationship to Symmetry

For symmetric distributions centered at $c$:

$$\\text{median}(X) = c = \\text{mean}(X)$$

Symmetry forces the 50th percentile and the balance point to coincide at the center of symmetry.

Skewed distributions separate median from [mean](!/probability/expected-value), with the median positioned between the [mode](!/probability/mode) and mean.

## Independence from Distribution Spread

The median reveals nothing about [variance](!/probability/variance) or spread. Two distributions can share the same median while having vastly different variability.

Example: [Normal distributions](!/probability/distributions/continuous/normal) $N(0, 1)$ and $N(0, 100)$ both have median $0$, yet spread differs by a factor of 100.

The median operates independently of scale—it tracks the probability midpoint, not dispersion.

## No Additivity

Unlike the [mean](!/probability/expected-value), medians don't add:

$$\\text{median}(X + Y) \\neq \\text{median}(X) + \\text{median}(Y)$$

Even for independent $X$ and $Y$, the 50th percentile of the sum doesn't generally equal the sum of individual 50th percentiles.

This limits the median's usefulness in probability calculations involving sums or combinations.
  `,
  before: ``,
  after: ``,
  link: '',
},
  // obj7: {
  //   title: `How to Find the Median`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },
  obj7: {
  title: `How to Find the Median`,
  content: `
The method for finding the median depends on whether the distribution is discrete or continuous.

## For Discrete Distributions

**Step 1: Calculate the CDF**

Compute cumulative probabilities $F(k) = P(X \\leq k)$ for each value in the support using the [probability mass function](!/probability/probability-function/pmf).

**Step 2: Find where CDF reaches 0.5**

Identify the smallest value $k$ where $F(k) \\geq 0.5$.

**Step 3: Verify both conditions**

Check that both $P(X \\leq k) \\geq 0.5$ and $P(X \\geq k) \\geq 0.5$ hold.

**Step 4: Handle non-uniqueness**

If multiple consecutive values satisfy both conditions, any of them qualifies as a median. Report the smallest value or acknowledge the interval.

**Example**: [Binomial](!/probability/distributions/discrete/binomial) with $n = 10, p = 0.5$

Compute CDF values for $k = 0, 1, 2, \\ldots, 10$. The CDF reaches $F(5) = 0.623 \\geq 0.5$, and $P(X \\geq 5) = 0.623 \\geq 0.5$.

Median = $5$.

**Shortcut for known distributions**: Many standard distributions have analytical approximations or tables:
• [Geometric](!/probability/distributions/discrete/geometric): median = $\\lceil \\frac{-\\ln(2)}{\\ln(1-p)} \\rceil$
• [Poisson](!/probability/distributions/discrete/poisson): median $\\approx \\lambda$ for large $\\lambda$

## For Continuous Distributions

**Step 1: Write the CDF**

Start with the [cumulative distribution function](!/probability/cdf) $F(x) = P(X \\leq x)$.

**Step 2: Set equation to 0.5**

Solve $F(m) = 0.5$ for $m$.

**Step 3: Solve algebraically**

Use inverse CDF when it exists: $m = F^{-1}(0.5)$.

Rearrange the equation to isolate $m$ and solve directly.

**Step 4: Apply numerical methods if needed**

When no closed form exists, use root-finding algorithms:
• Bisection method
• Newton-Raphson method
• Built-in quantile functions in statistical software

**Example**: [Exponential distribution](!/probability/distributions/continuous/exponential) with rate $\\lambda$

The CDF is $F(x) = 1 - e^{-\\lambda x}$.

Setting $F(m) = 0.5$:

$$1 - e^{-\\lambda m} = 0.5$$

$$e^{-\\lambda m} = 0.5$$

$$-\\lambda m = \\ln(0.5)$$

$$m = \\frac{-\\ln(0.5)}{\\lambda} = \\frac{\\ln(2)}{\\lambda}$$

Median = $\\frac{\\ln(2)}{\\lambda}$.

**Example**: [Normal distribution](!/probability/distributions/continuous/normal) with parameters $\\mu, \\sigma$

By symmetry, the median equals the [mean](!/probability/expected-value):

Median = $\\mu$.

No calculation needed for symmetric distributions.

## Using Statistical Software

Modern software provides built-in median functions.

These functions implement the inverse CDF method automatically.

## From Sample Data

When working with observed data rather than theoretical distributions:

**Step 1: Sort the data**

Arrange values in ascending order: $x_1 \\leq x_2 \\leq \\cdots \\leq x_n$.

**Step 2: Find the middle**

For odd sample size $n$: median = $x_{(n+1)/2}$

For even sample size $n$: median = $\\frac{x_{n/2} + x_{n/2+1}}{2}$

**Example**: Data $\\{3, 7, 1, 9, 5\\}$

Sorted: $\\{1, 3, 5, 7, 9\\}$

Median = $5$ (middle value).

**Example**: Data $\\{3, 7, 1, 9\\}$

Sorted: $\\{1, 3, 7, 9\\}$

Median = $\\frac{3 + 7}{2} = 5$.

## Visual Methods

For quick estimation:

Discrete: Examine the cumulative probability plot, find where steps cross 0.5

Continuous: Locate the area split point on the [PDF](!/probability/probability-function/pdf) curve where left area equals right area

Visual methods provide intuition but lack precision for formal analysis.
  `,
  before: ``,
  after: ``,
  link: '',
},
  
  // obj8: {
  //   title: `Median as the 50th Percentile`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj8: {
  title: `Median as the 50th Percentile`,
  content: `
The median is the 50th percentile of a distribution—the value below which 50% of the probability lies.

## Percentiles and Quantiles

A percentile divides a distribution at a specific cumulative probability. The $p$-th percentile is the value $x_p$ where:

$$P(X \\leq x_p) = \\frac{p}{100}$$

The median is the special case where $p = 50$:

$$P(X \\leq m) = 0.5$$

Quantiles use fractional notation instead of percentages. The 0.5-quantile equals the 50th percentile equals the median.

## Relationship to Quartiles

Quartiles divide the distribution into four equal parts:

• First quartile $Q_1$ (25th percentile): $P(X \\leq Q_1) = 0.25$
• Second quartile $Q_2$ (50th percentile): $P(X \\leq Q_2) = 0.5$ — this is the median
• Third quartile $Q_3$ (75th percentile): $P(X \\leq Q_3) = 0.75$

The median sits at the center of the quartile structure, with equal probability mass on each side.

## Five-Number Summary

The median anchors the five-number summary used in descriptive statistics:

$$\\text{Minimum, } Q_1, \\text{ Median, } Q_3, \\text{ Maximum}$$

This summary captures distribution shape through five key positions. Box plots visualize this summary, displaying the median as the central line inside the box.

## Interquartile Range

The interquartile range (IQR) measures spread using quartiles:

$$\\text{IQR} = Q_3 - Q_1$$

This range contains the middle 50% of the distribution, centered at the median. The IQR provides a robust measure of spread that ignores extreme values, complementing the median's role as a robust measure of center.

## General Percentile Formula

For continuous distributions, the $p$-th percentile solves:

$$F(x_p) = p$$

Using the inverse [CDF](!/probability/cdf):

$$x_p = F^{-1}(p)$$

The median is $F^{-1}(0.5)$.

For discrete distributions, the $p$-th percentile is the smallest value $x$ where:

$$P(X \\leq x) \\geq p$$

## Extension to Other Percentiles

Beyond quartiles, distributions can be divided into:

• Deciles: 10th, 20th, ..., 90th percentiles (divide into 10 parts)
• Percentiles: 1st through 99th percentiles (divide into 100 parts)
• Any quantile: solve $F(x) = q$ for any $0 < q < 1$

The median generalizes to arbitrary probability splits. Just as the median splits at 0.5, other percentiles split at different thresholds.

## Why the 50th Percentile Matters

The 50th percentile is unique among percentiles:

• Divides probability exactly in half
• Minimizes absolute deviation $E[|X - m|]$
• Robust to extreme values in either tail
• Natural midpoint for symmetric distributions

Other percentiles describe spread or tail behavior, but the median describes central location through probability balance.

## Computing Other Percentiles

The same methods used to find the median apply to any percentile:

Continuous: Solve $F(x_p) = p$ or use $x_p = F^{-1}(p)$

Discrete: Find smallest $x$ where $P(X \\leq x) \\geq p$

Statistical software provides quantile functions: qnorm(p) in R, ppf(p) in Python's scipy.stats.

## Median vs Mean in Percentile Context

The [mean](!/probability/expected-value) is not a percentile—it's a weighted average, not a cumulative probability threshold.

The median answers "what value splits the distribution?" The mean answers "what is the balance point?" These are fundamentally different questions that happen to coincide for symmetric distributions.
  `,
  before: ``,
  after: ``,
  link: '',
},
  obj9: {
    title: `Median in Practice`,
    content: ``,
    before: ``,
    after: ``,
    link: '',
  },
  obj10: {
    title: `Median for Common Distributions`,
    content: ``,
    before: ``,
    after: ``,
    link: '',
  },
  // obj11: {
  //   title: `Special Cases and Edge Cases`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj11: {
  title: `Special Cases and Edge Cases`,
  content: `
Certain distributions exhibit unusual median behavior that deviates from standard patterns.

## Distributions Where Median Equals Mean

Symmetric distributions have medians at their center of symmetry, which coincides with the [mean](!/probability/expected-value).

[Normal](!/probability/distributions/continuous/normal): median = mean = $\\mu$

[Uniform distributions](!/probability/distributions/continuous/uniform): median = mean = $\\frac{a+b}{2}$

Any distribution with mirror symmetry around a point $c$ has median = mean = $c$.

## Distributions Where Median Differs Substantially from Mean

Skewed distributions separate median and [mean](!/probability/expected-value) significantly.

[Exponential](!/probability/distributions/continuous/exponential): median = $\\frac{\\ln(2)}{\\lambda} \\approx 0.693/\\lambda$, mean = $\\frac{1}{\\lambda}$

The gap is approximately $0.307/\\lambda$. For $\\lambda = 1$, median $\\approx 0.693$ while mean $= 1$.

Lognormal: Highly right-skewed with median $< $ mean. The median is $e^\\mu$ while the mean is $e^{\\mu + \\sigma^2/2}$, which can be orders of magnitude larger.

## Non-Unique Medians in Discrete Distributions

[Discrete Uniform](!/probability/distributions/discrete/uniform) on even number of values has two medians.

Example: Uniform on $\\{1,2,3,4\\}$ has medians at both $2$ and $3$ since the [CDF](!/probability/cdf) equals exactly $0.5$ at $2$.

[Binomial](!/probability/distributions/discrete/binomial) can have two medians when the CDF jumps from below $0.5$ to above $0.5$ while passing through exactly $0.5$.

## Distributions with No Mean but Well-Defined Median

Cauchy Distribution: The median equals the location parameter $x_0$, but the [mean](!/probability/expected-value) does not exist due to heavy tails.

The median provides a measure of central tendency when the mean fails.

Student's t-distribution with $\\nu = 1$ (Cauchy): median = $0$, mean undefined.

## Median at Distribution Boundaries

Some distributions can have medians at the edge of their support.

Degenerate distribution at $c$: Every observation equals $c$, so median = $c$ trivially.

Beta distributions with extreme skew can push the median very close to boundaries $0$ or $1$, though typically not exactly at them unless the distribution degenerates.

## Multiple Medians in Continuous Distributions

Continuous distributions with flat [CDF](!/probability/cdf) regions (constant over an interval) have infinitely many medians.

If $F(x) = 0.5$ for all $x \\in [a,b]$, then every value in $[a,b]$ qualifies as a median.

This occurs in pathological constructed distributions, not in standard families.

## Median When Support Changes

Truncated distributions alter the median by restricting the support.

Truncating the [normal distribution](!/probability/distributions/continuous/normal) to $[0, \\infty)$ shifts the median away from $\\mu$ toward positive values since negative values are removed.

The median of the truncated distribution must be recalculated using the new [CDF](!/probability/cdf) on the restricted support.

## Mixture Distributions

Combining distributions can create medians that don't match either component.

Mixture: $0.5 \\cdot N(0,1) + 0.5 \\cdot N(10,1)$

The median falls near $5$ (the midpoint between the two [modes](!/probability/mode)), despite neither component having a median near $5$.

## Median for Discrete Distributions with Gaps

Distributions with gaps in the support (missing values) require careful [CDF](!/probability/cdf) evaluation.

Example: Support $\\{1, 2, 5, 6\\}$ with equal probabilities. The CDF jumps from $0.5$ at $k=2$ to $0.75$ at $k=5$. The median is $2$ since it's the smallest value where $F(k) \\geq 0.5$.

## When Median Analysis Fails

For distributions with no clear cumulative structure or undefined [CDFs](!/probability/cdf), the median concept becomes meaningless.

Empirical data with heavy discretization or rounding may show artificial median values that don't reflect the underlying continuous distribution.
  `,
  before: ``,
  after: ``,
  link: '',
},
  // obj12: {
  //   title: `Notation`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj12: {
  title: `Notation`,
  content: `
The median has several standard notations used across probability and statistics literature.

## Common Notations

The most widely used notation is:

$$\\text{median}(X)$$

This explicitly labels the measure being computed.

Alternative notations include:

$$\\text{Med}(X)$$

A compact abbreviation.

$$\\tilde{x}$$ or $$\\tilde{\\mu}$$

The tilde symbol over a variable, commonly used to distinguish median from [mean](!/probability/expected-value) $\\mu$ or sample mean $\\bar{x}$.

$$Q_2$$

The median as the second quartile.

$$m$$

A simple variable for the median value.

## Relationship to Quantile Notation

The median is mathematically expressed as the 0.5-quantile or 50th percentile:

$$\\text{median}(X) = F^{-1}(0.5)$$

where $F^{-1}$ denotes the inverse [cumulative distribution function](!/probability/cdf).

Alternative quantile notations:

$$x_{0.5}$$ or $$Q_{0.5}$$

Both indicate the value at cumulative probability 0.5.

## In Statistical Context

Sample median (from data) vs population median (from distribution) may be distinguished:

$\\tilde{x}$ or $\\text{median}(\\text{sample})$ for the observed median

$m$ or $\\text{median}(X)$ for the theoretical population median

Context usually makes this distinction clear without special notation.

## Comparison with Mean Notation

[Mean](!/probability/expected-value): $\\mu$, $E[X]$, or $\\bar{x}$ (sample mean)

Median: $\\tilde{x}$, $\\text{Med}(X)$, or $Q_2$

The tilde distinguishes median from mean in formulas where both appear.

## No Universal Standard

Unlike [variance](!/probability/variance) ($\\sigma^2$ or $\\text{Var}(X)$), the median lacks a single universally adopted symbol. Different sources use different conventions.

Always define your notation explicitly when writing technical work to avoid confusion.

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
  `,
  before: ``,
  after: ``,
  link: '',
},
  // obj13: {
  //   title: `Common Mistakes`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj13: {
  title: `Common Mistakes`,
  content: `
Several recurring errors appear when working with the median.

## Confusing Median with Mean

The two measures are fundamentally different:

Median = 50th percentile

[Mean](!/probability/expected-value) = weighted average

Using "median" when you mean "average" is incorrect. The median identifies the middle value by probability rank, not the balance point of all values.

## Assuming Median Always Equals Mean

The median equals the [mean](!/probability/expected-value) only for symmetric distributions.

Skewed distributions separate them substantially. [Exponential distributions](!/probability/distributions/continuous/exponential) have median far below the mean.

Never assume equality without checking distribution symmetry.

## Forgetting the Two-Condition Rule for Discrete Distributions

[Discrete distributions](!/probability/distributions/discrete) require both $P(X \\leq m) \\geq 0.5$ and $P(X \\geq m) \\geq 0.5$.

Checking only one condition can give incorrect results when the [CDF](!/probability/cdf) jumps past 0.5.

Always verify both conditions hold.

## Assuming the Median is Always Unique

[Discrete distributions](!/probability/distributions/discrete) can have multiple medians when the CDF lands exactly on 0.5.

Example: [Discrete Uniform](!/probability/distributions/discrete/uniform) on $\\{1,2,3,4\\}$ has both $2$ and $3$ as valid medians.

Never assume exactly one median without checking the probability structure.

## Computing Median from PMF Instead of CDF

The median requires cumulative probability, not individual probabilities.

Finding the median from the [PMF](!/probability/probability-function/pmf) directly without accumulation leads to errors.

Always work with the [CDF](!/probability/cdf) when locating the median.

## Thinking Median Must Be in the Dataset

For continuous distributions, the median is any value satisfying $F(m) = 0.5$, which may not appear in observed data.

For even-sized samples, the sample median is often the average of two middle values, creating a median not present in the original dataset.

The median is a calculated position, not necessarily an observed value.

## Using Median When Mean is More Appropriate

The median is ideal for skewed data and outlier resistance, but the [mean](!/probability/expected-value) has superior mathematical properties for symmetric distributions.

The mean supports algebraic operations (additivity, scaling) that the median lacks.

Choose based on distribution shape and analysis goals, not by default.

## Assuming Median is Always "Central"

The median marks the 50th percentile, which may not align with intuitive notions of "center."

For highly skewed distributions, the median sits far from the [mode](!/probability/mode) or the bulk of probability mass.

The median represents probability division, not necessarily spatial centrality.

## Confusing Median with Mode

Median = probability split point

[Mode](!/probability/mode) = peak probability

These are distinct concepts. The [Exponential distribution](!/probability/distributions/continuous/exponential) has mode at $0$ but median at $\\frac{\\ln(2)}{\\lambda}$.

Never use the terms interchangeably.

## Treating Sample Median as Population Median

The median observed in finite data may not reflect the true population median, especially with small samples.

Sampling variability affects median estimation. Confidence intervals help quantify uncertainty.

Large samples and clear distribution structure increase reliability.

## Ignoring Median for Ordinal or Ranked Data

When data is naturally ranked but not numerically meaningful (like satisfaction ratings), the median often provides more interpretable results than the [mean](!/probability/expected-value).

Calculating a mean of $\\{$poor, fair, good, excellent$\\}$ coded as $\\{1,2,3,4\\}$ assumes equal spacing that may not exist. The median respects the ordering without assuming equal intervals.
  `,
  before: ``,
  after: ``,
  link: '',
},
  // obj14: {
  //   title: `Related Concepts`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj14: {
  title: `Related Concepts`,
  content: `
The median connects to numerous other probability and statistics concepts.

## Other Measures of Central Tendency

[Mean (Expected Value)](!/probability/expected-value): The probability-weighted average of all values. Balances the distribution.

[Mode](!/probability/mode): The value with maximum probability or density. Identifies the peak.

These three measures work together to characterize where distributions center and how they're shaped.

## Measures of Dispersion

[Variance](!/probability/variance): Quantifies spread around the mean. High variance means values scatter widely.

Interquartile Range (IQR): Measures spread using quartiles: $Q_3 - Q_1$. Robust to outliers like the median.

The median reveals the center while dispersion measures reveal spread. Both are needed for complete distribution description.

## Percentiles and Quantiles

The median is the 50th percentile or 0.5-quantile. It generalizes to other probability thresholds:

Quartiles: $Q_1$ (25th), $Q_2$ (median), $Q_3$ (75th)

Deciles: 10th, 20th, ..., 90th percentiles

Any quantile $q$: solves $F(x) = q$

Percentiles divide probability by cumulative area; the median is the special case at 0.5.

## Cumulative Distribution Function

[CDF](!/probability/cdf): The median solves $F(m) = 0.5$.

The inverse CDF $F^{-1}$ maps probabilities to values: $m = F^{-1}(0.5)$.

Understanding the CDF is essential for finding medians.

## Probability Functions

[Probability Mass Function (PMF)](!/probability/probability-function/pmf): For discrete distributions, accumulating the PMF gives the CDF needed to find the median.

[Probability Density Function (PDF)](!/probability/probability-function/pdf): For continuous distributions, integrating the PDF to 0.5 locates the median.

The median depends on cumulative structure, not pointwise probabilities or densities directly.

## Skewness

Skewness measures asymmetry. The relative positions of median, [mean](!/probability/expected-value), and [mode](!/probability/mode) directly indicate skewness direction:

Right skew: mode $< $ median $< $ mean

Left skew: mean $< $ median $< $ mode

Symmetric: mode = median = mean

## Specific Distribution Families

[Discrete Distributions](!/probability/distributions/discrete): Binomial, Geometric, Poisson, and others each have characteristic median behaviors.

[Continuous Distributions](!/probability/distributions/continuous): Normal, Exponential, Beta, and others show diverse median patterns.

Understanding distribution-specific medians helps identify which model fits observed data.

## Robustness

The median is a robust statistic—resistant to outliers and extreme values.

Median Absolute Deviation (MAD): A robust measure of spread based on the median: $\\text{MAD} = \\text{median}(|X - \\text{median}(X)|)$.

Robust methods use the median as a foundational concept for estimation in contaminated data.

## Order Statistics

In a sample of size $n$, the median is the middle order statistic.

For odd $n$: median is the $\\frac{n+1}{2}$-th smallest value

For even $n$: median is the average of the $\\frac{n}{2}$-th and $\\frac{n}{2}+1$-th smallest values

Order statistics formalize ranking and selection procedures.

## Optimization

The median minimizes absolute deviation: $E[|X - m|]$ is minimized at the median.

The [mean](!/probability/expected-value) minimizes squared deviation: $E[(X - \\mu)^2]$ is minimized at the mean.

These optimization properties distinguish the two measures fundamentally.
  `,
  before: ``,
  after: ``,
  link: '',
},

  obj15: {
    title: ``,
    content: ``,
    before: ``,
    after: ``,
    link: '',
  }
}

  const introContent = {
  id: "intro",
  title: "The Central Value by Position",
  content: `
Not all measures of central tendency are based on averaging. Some describe position rather than magnitude.

This page introduces the median as the value that divides a distribution into two equally weighted halves. It focuses on how the median is defined through ordering and cumulative probability, and why it remains stable even when extreme values distort other measures of center.`
}

const centralTendencyComparisonData = {
  tableTitle: 'Comparing Median, Mean, and Mode',
  rows: [
    {
      feature: 'Definition',
      median: 'Value at 50th percentile',
      mean: 'Probability-weighted average',
      mode: 'Value with highest probability'
    },
    {
      feature: 'Calculation',
      median: 'Find cumulative 0.5 point',
      mean: 'Weight all values',
      mode: 'Find maximum'
    },
    {
      feature: 'Uniqueness',
      median: 'Single value (continuous)',
      mean: 'Single value',
      mode: 'Can have multiple'
    },
    {
      feature: 'Outlier impact',
      median: 'None',
      mean: 'Strong',
      mode: 'None'
    },
    {
      feature: 'Data type',
      median: 'Numerical only',
      mean: 'Numerical only',
      mode: 'Any (including categorical)'
    },
    {
      feature: 'Interpretation',
      median: 'Middle value',
      mean: 'Average outcome',
      mode: 'Most likely value'
    },
    {
      feature: 'Skewness indication',
      median: 'Between mode and mean',
      mean: 'Pulled by tail',
      mode: 'At peak'
    }
  ]
};


   return {
      props:{
         sectionsContent,
         introContent,
         centralTendencyComparisonData,
          seoData: {
        title: "Median | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/median",
         name: "name"
      },
        
       }
    }
   }

export default function MedianPage({seoData,sectionsContent , introContent,
  centralTendencyComparisonData,
}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'comparison'} style={{width:'80%',margin:'auto'}}>
           <GenericTable  tableData={centralTendencyComparisonData} theme='lightBlue'
          cellFontSize={'16px'}
          headerFontSize={'18px'}/>,
          </div>,
          sectionsContent.obj5.after,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
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
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Median</h1>
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
