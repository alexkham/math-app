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


//   const sectionsContent = {
//   obj1: {
//     title: `Definition & Physical Intuition`,
//     content: `
    
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `The Domain (Support)`,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `The Two Fundamental Axioms`,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Representations`,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Calculations Using the PDF`,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Derived Properties (Moments via Calculus)`,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Connection to CDF (The Fundamental Theorem)`,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Transformations (Change of Variables)`,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj9: {
//     title: `The Famous Families`,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj10: {
//     title: ``,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj11: {
//     title: ``,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj12: {
//     title: ``,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj13: {
//     title: ``,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj14: {
//     title: ``,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj15: {
//     title: ``,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: '',
//   }
// }


const sectionsContent = {
  // obj1: {
  //   title: `Definition & Physical Intuition`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj1: {
    title: `Definition & Physical Intuition`,
    content: `
## What is a PDF?

A PDF (Probability Density Function) describes how probability is distributed across a continuous [random variable](!/probability/random-variables). Unlike discrete variables where probability sits at specific points, continuous variables spread probability across intervals.

Think of it like the density of a material. A steel rod doesn't have "weight at a point"—it has density (mass per unit length). Similarly, a continuous random variable doesn't have "probability at a point"—it has probability density.

## The Zero Probability Paradox

For any specific value $a$:

$$P(X = a) = 0$$

This seems impossible. How can every individual outcome have zero probability, yet something must happen?

The resolution: Probability for continuous variables lives in intervals, not points. A single point is infinitesimally thin—it has no width, so it captures no probability mass. Just as a geometric point on a line has zero length, a single value in a continuous distribution has zero probability.

Example: Pick a random number between 0 and 1. What's $P(X = 0.5)$? Exactly zero. What's $P(0.49 < X < 0.51)$? Positive. Probability only exists across ranges.

## Density ≠ Probability

The PDF value $f(x)$ is **not** a probability. It's a density—a rate of probability per unit.

$$P(a \\leq X \\leq b) = \\int_a^b f(x)dx$$

Probability is the **area** under the curve, not the height. This means $f(x)$ can exceed 1, unlike a PMF where $p(x) \\leq 1$ always.

Example: Uniform [distribution](!/probability/distributions) on $[0, 0.5]$ has $f(x) = 2$. The density is 2, but the total probability integrates to 1.

The PDF is the continuous analog of mass in the discrete case. Where mass concentrates at points, density spreads across regions.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Mass vs. Density`,
    content: ``,
    before: ``,
    after: ``,
    link: '',
  },
  // obj3: {
  //   title: `Notation`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj3: {
    title: `Notation`,
    content: `
The PDF uses specific notation to represent density functions.

For [random variable](!/probability/random-variables) $X$:

$$f_X(x)$$

$f_X(x)$: The PDF of random variable $X$ evaluated at value $x$.

This gives the probability density at point $x$, not the probability itself.

## Why the Subscript?

When working with multiple random variables, the subscript keeps them distinct:

• $f_X(x)$: PDF of variable $X$
• $f_Y(y)$: PDF of variable $Y$
• $f_T(t)$: PDF of variable $T$

With only one variable in context, you can drop the subscript and write $f(x)$.

## Relationship to Probability

The PDF connects to probability through integration:

$$P(a \\leq X \\leq b) = \\int_a^b f_X(x)dx$$

The density function $f_X(x)$ must be integrated over an interval to yield probability.

Point probabilities are always zero: $P(X = a) = \\int_a^a f_X(x)dx = 0$

The notation emphasizes that $f(x)$ is fundamentally different from the PMF notation $p(x)$—one requires integration to get probability, the other gives probability directly.

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj4: {
  //   title: `The Domain (Support)`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },


  obj4: {
    title: `The Domain (Support)`,
    content: `
The **support** of a PDF is the set of values where the density is nonzero—the region where probability can be found.

Formally: The support of $X$ is $\\{x : f_X(x) > 0\\}$.

Outside the support, $f_X(x) = 0$. No probability density exists there.

## Types of Support

**Bounded Support:** The [random variable](!/probability/random-variables) is confined to a finite interval.

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[0, 1]$. Support is $[0, 1]$. Outside this interval, $f(x) = 0$.

Example: Beta [distribution](!/probability/distributions) on $[0, 1]$. All probability density concentrates within the unit interval.

**Unbounded Support:** The random variable can take values extending to infinity in one or both directions.

Example: [Normal distribution](!/probability/distributions/continuous/normal) on $(-\\infty, \\infty)$. Support is the entire real line. Density never truly reaches zero, though it becomes negligible far from the mean.

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) on $[0, \\infty)$. Support starts at 0 and extends infinitely rightward.

**Half-Bounded Support:** Bounded on one side, unbounded on the other.

Example: Exponential, Gamma distributions on $[0, \\infty)$.

## Why Support Matters

The support determines:
• Where to integrate when computing probabilities
• What values are possible vs. impossible
• The limits of integration: $P(X \\in A) = \\int_{A \\cap \\text{Support}} f_X(x)dx$

When computing $P(X \\in A)$ for some set $A$, only integrate over the intersection of $A$ with the support. Outside the support contributes nothing—integrating over those regions just adds zeros.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj5: {
  //   title: `The Two Fundamental Axioms`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj5: {
    title: `The Two Fundamental Axioms`,
    content: `
Every valid PDF must satisfy two non-negotiable rules. Just like the [PMF](!/probability/probability-function/pmf#3) in the discrete case, the PDF must obey the same foundational constraints.

## Axiom 1: Non-Negativity

$$f_X(x) \\geq 0 \\text{ for all } x$$

Density cannot be negative. Ever.

Each point gets zero or positive density. If $f(5) = -0.3$, you've made an error. Fix it.

## Axiom 2: Normalization

$$\\int_{-\\infty}^{\\infty} f_X(x)dx = 1$$

The total area under the density curve must equal exactly 1.

This is your total probability budget. The entire curve must integrate to 1—no more, no less.

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[0, 2]$ has $f(x) = \\frac{1}{2}$ for $x \\in [0,2]$.

Check: $\\int_0^2 \\frac{1}{2}dx = \\frac{1}{2} \\cdot 2 = 1$. ✓

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) with $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$.

Check: $\\int_0^{\\infty} \\lambda e^{-\\lambda x}dx = \\lambda \\cdot \\frac{1}{\\lambda} = 1$. ✓

## Validation Process

To verify a function is a valid PDF:
1. Check $f(x) \\geq 0$ everywhere in the support
2. Integrate over the entire support
3. Confirm the integral equals 1

If either axiom fails, you don't have a valid probability density function.

These two axioms are fundamental for both [PMF](!/probability/probability-function/pmf#3) and PDF. See [axioms](!/probability/axioms) for the foundational probability principles.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj6: {
  //   title: `Representations: The Three Views`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj6: {
    title: `Representations: The Three Views`,
    content: `
A PDF can be represented in three equivalent ways. Each offers different insights into how probability density distributes.

## Graphical Representation

The PDF appears as a smooth curve on the x-y plane. The x-axis shows values of the [random variable](!/probability/random-variables), the y-axis shows density.

Key features:
• **Height** represents density, not probability
• **Area under the curve** represents probability
• **Peaks** indicate regions of high likelihood
• The curve must stay non-negative
• Total area under the entire curve equals 1

Example: The [normal distribution](!/probability/distributions/continuous/normal) shows a symmetric bell curve centered at the mean. The peak occurs at the mode, and density decreases smoothly on both sides.

Example: The [exponential distribution](!/probability/distributions/continuous/exponential) starts at maximum density and decays monotonically toward zero.

## Functional Representation

The PDF is defined by an explicit mathematical function $f(x)$.

Often piece-wise, depending on the support:

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[a, b]$:

$$f(x) = \\begin{cases} 
\\frac{1}{b-a} & \\text{if } x \\in [a, b] \\\\
0 & \\text{otherwise}
\\end{cases}$$

Example: [Exponential distribution](!/probability/distributions/continuous/exponential):

$$f(x) = \\begin{cases} 
\\lambda e^{-\\lambda x} & \\text{if } x \\geq 0 \\\\
0 & \\text{if } x < 0
\\end{cases}$$

The functional form makes computation possible—you can integrate it to find probabilities.

## Numerical/Tabular Representation

While less common than for PMF, PDFs can be approximated through discretization or represented via [CDF](!/probability/cdf) values at specific points.

Tables of the standard [normal distribution](!/probability/distributions/continuous/normal) CDF values are common because the PDF integral has no closed form.

Software implementations often store PDFs as arrays of evaluated points for computational efficiency.

## Why Three Views?

• **Graphical:** Best for intuition and visualization
• **Functional:** Best for calculation and analysis  
• **Numerical:** Best for computation and approximation

All three describe the same density, just from different perspectives.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj7: {
  //   title: `Building a PDF (From Story to Math)`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },


  obj7: {
    title: `Building a PDF (From Story to Math)`,
    content: `
Every PDF starts with a story—the situation, the process, the experiment. Your job is to translate that concrete setup into mathematical form.

## The Construction Process

**Step 1: Identify the Random Variable**

What continuous quantity are you measuring? Define it clearly.

Example: "Measure the time until a lightbulb fails" → Let $T$ = time to failure (in hours).

**Step 2: Determine the Support**

What values can the [random variable](!/probability/random-variables) take? Is it bounded or unbounded?

Example: Time to failure must be positive. Support is $[0, \\infty)$.

**Step 3: Construct the Density Function**

Use physical reasoning, symmetry, or modeling assumptions to derive $f(x)$.

Methods:
• **Uniform spread:** If all values in an interval are equally likely, use constant density
• **Exponential decay:** If likelihood decreases at a constant rate, use exponential form
• **Symmetry:** If the situation is symmetric around a center, build a symmetric density
• **Maximum entropy:** Choose the density with maximum uncertainty given constraints

Example: Lightbulb with constant failure rate $\\lambda$. The memoryless property suggests:

$$f(t) = \\lambda e^{-\\lambda t} \\text{ for } t \\geq 0$$

**Step 4: Verify the Axioms**

Check non-negativity: Is $f(x) \\geq 0$ everywhere? Yes, exponential is always positive.

Check normalization: Does it integrate to 1?

$$\\int_0^{\\infty} \\lambda e^{-\\lambda t}dt = \\lambda \\cdot \\frac{1}{\\lambda} = 1$$ ✓

See [axioms](!/probability/axioms) for the fundamental requirements.

**Step 5: Write the PDF in Standard Form**

Express the function clearly, including the support.

$$f_T(t) = \\begin{cases} 
\\lambda e^{-\\lambda t} & \\text{if } t \\geq 0 \\\\
0 & \\text{if } t < 0
\\end{cases}$$

## From Physical Setup to Mathematical Object

The key skill is moving from a concrete scenario to a precise density function. Ask:
• What values are possible?
• How does likelihood vary across those values?
• Does the assignment satisfy the [axioms](!/probability/axioms)?

Once built, the PDF becomes a complete mathematical description of the [random variable's](!/probability/random-variables) behavior.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj8: {
  //   title: `Calculations Using the PDF`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj8: {
    title: `Calculations Using the PDF`,
    content: `
Once you have a PDF, you can compute probabilities for any [event](!/probability/events) involving the [random variable](!/probability/random-variables). Unlike PMF, all calculations require integration.

## Interval Probabilities

The core calculation: probability over an interval equals the area under the curve.

$$P(a \\leq X \\leq b) = \\int_a^b f_X(x)dx$$

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[0, 10]$ with $f(x) = \\frac{1}{10}$.

$$P(3 \\leq X \\leq 7) = \\int_3^7 \\frac{1}{10}dx = \\frac{1}{10} \\cdot 4 = 0.4$$

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) with $f(x) = 2e^{-2x}$ for $x \\geq 0$.

$$P(1 \\leq X \\leq 3) = \\int_1^3 2e^{-2x}dx = [-e^{-2x}]_1^3 = e^{-2} - e^{-6} \\approx 0.133$$

## Inequalities Are Irrelevant

For continuous variables, endpoint inclusion doesn't matter:

$$P(X < a) = P(X \\leq a)$$
$$P(X > a) = P(X \\geq a)$$
$$P(a < X < b) = P(a \\leq X \\leq b)$$

Why? Because $P(X = a) = 0$ for any single point. Adding or removing a zero-probability point doesn't change the total.

Example: $P(X < 5) = P(X \\leq 5)$ exactly. No approximation, no difference.

## Tail Probabilities

Probability beyond a threshold:

$$P(X > a) = \\int_a^{\\infty} f_X(x)dx = 1 - P(X \\leq a)$$

$$P(X < a) = \\int_{-\\infty}^a f_X(x)dx$$

Example: [Exponential](!/probability/distributions/continuous/exponential) with $\\lambda = 0.5$.

$$P(X > 2) = \\int_2^{\\infty} 0.5e^{-0.5x}dx = e^{-1} \\approx 0.368$$

## Complement Rule

Use the complement when integration is easier in the opposite direction:

$$P(X \\notin A) = 1 - P(X \\in A)$$

Example: $P(X > 10) = 1 - P(X \\leq 10)$

## The Core Pattern

Every probability question reduces to:
1. Identify the interval or region
2. Set up the integral with correct bounds
3. Integrate the PDF over that region
4. Evaluate

The PDF gives complete information. If you know $f_X(x)$ for all $x$, you can answer any probability question about $X$.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj9: {
  //   title: `Derived Properties: Location Measures`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },
  obj9: {
    title: `Derived Properties: Location Measures`,
    content: `
The PDF contains all the information about a [random variable](!/probability/random-variables). From it, we can compute summary measures that describe where the distribution is centered.

## Expected Value (Mean)

The [expected value](!/probability/expected-value) is the probability-weighted average across all possible values, computed via integration.

$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f_X(x)dx$$

Each value $x$ contributes based on its density weight. Think of it as the balance point of the density curve.

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[0, 10]$ with $f(x) = \\frac{1}{10}$.

$$E[X] = \\int_0^{10} x \\cdot \\frac{1}{10}dx = \\frac{1}{10} \\cdot \\frac{x^2}{2}\\Big|_0^{10} = \\frac{1}{10} \\cdot 50 = 5$$

The mean sits at the midpoint, as expected from symmetry.

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) with $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$.

$$E[X] = \\int_0^{\\infty} x \\cdot \\lambda e^{-\\lambda x}dx = \\frac{1}{\\lambda}$$

The mean depends inversely on the rate parameter.

## Median

The median is the value $m$ that splits the probability in half.

$$P(X \\leq m) = \\int_{-\\infty}^m f_X(x)dx = 0.5$$

It's the point where the [CDF](!/probability/cdf) equals 0.5.

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) with parameter $\\lambda$.

$$\\int_0^m \\lambda e^{-\\lambda x}dx = 1 - e^{-\\lambda m} = 0.5$$

$$e^{-\\lambda m} = 0.5 \\implies m = \\frac{\\ln(2)}{\\lambda}$$

For symmetric distributions, median equals mean. For skewed distributions, they differ.

## Mode

The mode is the value where the PDF reaches its maximum.

$$\\text{mode} = \\arg\\max_x f_X(x)$$

Found by solving $f'_X(x) = 0$ and checking the second derivative.

Example: [Normal distribution](!/probability/distributions/continuous/normal) with mean $\\mu$ and standard deviation $\\sigma$. The mode is $\\mu$, where the bell curve peaks.

Example: [Exponential distribution](!/probability/distributions/continuous/exponential). The mode is 0, where density is highest before it decays.

A distribution can have multiple modes if the PDF has several local maxima.

## Why These Matter

Location measures summarize where the distribution sits on the number line. They answer: "What's a typical value?" Each measure captures a different notion of "typical."
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj10: {
  //   title: `Derived Properties: Spread Measures`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj10: {
    title: `Derived Properties: Spread Measures`,
    content: `
Location tells you where the distribution centers. Spread tells you how widely values scatter around that center.

## Variance

[Variance](!/probability/variance) quantifies the average squared deviation from the mean, computed through integration.

$$\\text{Var}(X) = \\int_{-\\infty}^{\\infty} (x - E[X])^2 \\cdot f_X(x)dx$$

Each squared distance from the mean is weighted by density. High-density regions far from the mean contribute heavily to variance.

Computational shortcut:

$$\\text{Var}(X) = E[X^2] - (E[X])^2$$

where $E[X^2] = \\int_{-\\infty}^{\\infty} x^2 \\cdot f_X(x)dx$

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[a, b]$.

$$\\text{Var}(X) = \\frac{(b-a)^2}{12}$$

Wider intervals produce larger variance.

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) with parameter $\\lambda$.

$$\\text{Var}(X) = \\frac{1}{\\lambda^2}$$

Variance decreases as the rate parameter increases.

## Standard Deviation

Standard deviation is $\\sqrt{\\text{Var}(X)}$, bringing spread back to the original measurement units.

$$\\text{SD}(X) = \\sqrt{\\text{Var}(X)}$$

For the [exponential](!/probability/distributions/continuous/exponential): $\\text{SD}(X) = \\frac{1}{\\lambda}$

Standard deviation has the same dimensionality as $X$ itself, making interpretation more direct than variance.

## Interquartile Range

The IQR measures spread using percentiles rather than deviations from the mean.

$$\\text{IQR} = Q_3 - Q_1$$

where $Q_1$ is the 25th percentile and $Q_3$ is the 75th percentile.

Find quartiles by solving: $\\int_{-\\infty}^{Q_1} f_X(x)dx = 0.25$ and $\\int_{-\\infty}^{Q_3} f_X(x)dx = 0.75$

IQR is robust to outliers and heavy tails—extreme values don't affect it the way they affect variance.

## What Spread Reveals

Narrow spread means values cluster tightly, making individual outcomes more predictable. Wide spread means values scatter broadly, increasing uncertainty about any single observation. Two distributions with identical means can behave completely differently based on their spread.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj11: {
  //   title: `Transformations (Change of Variables)`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj11: {
    title: `Transformations (Change of Variables)`,
    content: `
Apply a function to a [random variable](!/probability/random-variables), and you create a new random variable with its own PDF. The transformation process requires careful handling of how density changes.

## The Transformation Problem

Start with random variable $X$ with PDF $f_X(x)$.

Apply function $g$ to get $Y = g(X)$.

The new PDF $f_Y(y)$ must account for how $g$ stretches or compresses intervals—this affects density.

## Linear Transformations

For $Y = aX + b$ where $a \\neq 0$:

$$f_Y(y) = \\frac{1}{|a|} f_X\\left(\\frac{y - b}{a}\\right)$$

The factor $\\frac{1}{|a|}$ appears because scaling the variable by $a$ compresses or stretches the density axis.

Example: If $X$ is [uniform](!/probability/distributions/continuous/uniform) on $[0, 1]$ with $f_X(x) = 1$, then $Y = 3X$ has:

$$f_Y(y) = \\frac{1}{3} \\cdot 1 = \\frac{1}{3} \\text{ for } y \\in [0, 3]$$

The density drops to $\\frac{1}{3}$ because the interval stretched by factor 3.

Example: $Y = X + 5$ shifts the distribution but doesn't change density shape:

$$f_Y(y) = f_X(y - 5)$$

## General Transformations (Invertible)

For invertible $g$ (strictly increasing or decreasing), the transformation formula includes the Jacobian:

$$f_Y(y) = f_X(g^{-1}(y)) \\cdot \\left|\\frac{d}{dy}g^{-1}(y)\\right|$$

The derivative term $\\left|\\frac{d}{dy}g^{-1}(y)\\right|$ is the Jacobian—it measures how $g$ locally stretches or compresses space.

Alternative form using $g'(x)$:

$$f_Y(y) = f_X(x) \\cdot \\frac{1}{|g'(x)|}$$ where $x = g^{-1}(y)$

Example: $Y = X^2$ for $X > 0$. Then $g^{-1}(y) = \\sqrt{y}$ and $\\frac{d}{dy}\\sqrt{y} = \\frac{1}{2\\sqrt{y}}$.

$$f_Y(y) = f_X(\\sqrt{y}) \\cdot \\frac{1}{2\\sqrt{y}}$$

## Why the Absolute Value?

The Jacobian includes $|\\cdot|$ because density must remain non-negative. Whether $g$ increases or decreases, the density adjustment stays positive.

Probability is preserved: $P(a \\leq X \\leq b) = P(g(a) \\leq Y \\leq g(b))$

The Jacobian ensures total area under the new PDF still integrates to 1.

## Non-Invertible Transformations

When $g$ is not one-to-one, multiple $x$ values map to the same $y$. Sum their contributions:

$$f_Y(y) = \\sum_{x: g(x) = y} f_X(x) \\cdot \\left|\\frac{d}{dy}g^{-1}(y)\\right|$$

This generalizes the invertible case by collecting all pre-images.

## Key Insight

Transformations redistribute probability density across a new domain. The Jacobian factor adjusts for how the transformation stretches or compresses regions, ensuring probability conservation. Density can change dramatically even when total probability stays fixed at 1.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj12: {
  //   title: `Connection to CDF (The Fundamental Theorem)`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj12: {
    title: `Connection to CDF (The Fundamental Theorem)`,
    content: `
The PDF and the [CDF](!/probability/cdf) (Cumulative Distribution Function) are two representations of the same probability [distribution](!/probability/distributions). They are connected through the fundamental operations of calculus: integration and differentiation.

## From PDF to CDF (Integration)

The CDF accumulates probability from the PDF through integration:

$$F_X(x) = P(X \\leq x) = \\int_{-\\infty}^x f_X(t)dt$$

The CDF at any point equals the total area under the PDF curve from $-\\infty$ up to that point.

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) with $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$.

$$F_X(x) = \\int_0^x \\lambda e^{-\\lambda t}dt = 1 - e^{-\\lambda x} \\text{ for } x \\geq 0$$

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[0, 10]$ with $f(x) = \\frac{1}{10}$.

$$F_X(x) = \\int_0^x \\frac{1}{10}dt = \\frac{x}{10} \\text{ for } x \\in [0, 10]$$

The CDF is continuous and always increasing (or at least non-decreasing) for continuous [random variables](!/probability/random-variables).

## From CDF to PDF (Differentiation)

The PDF is the derivative of the CDF:

$$f_X(x) = \\frac{d}{dx}F_X(x)$$

The PDF gives the instantaneous rate at which probability accumulates—the slope of the CDF curve.

Example: [Exponential](!/probability/distributions/continuous/exponential) with $F_X(x) = 1 - e^{-\\lambda x}$.

$$f_X(x) = \\frac{d}{dx}(1 - e^{-\\lambda x}) = \\lambda e^{-\\lambda x}$$

Example: [Uniform](!/probability/distributions/continuous/uniform) with $F_X(x) = \\frac{x}{10}$ on $[0, 10]$.

$$f_X(x) = \\frac{d}{dx}\\left(\\frac{x}{10}\\right) = \\frac{1}{10}$$

Constant derivative produces constant density.

## The Fundamental Theorem Connection

This relationship is the Fundamental Theorem of Calculus applied to probability:

$$\\frac{d}{dx}\\int_{-\\infty}^x f_X(t)dt = f_X(x)$$

Integration builds up cumulative probability. Differentiation recovers the density function. They are inverse operations.

## Graphical Relationship

- **PDF:** Shows where density concentrates (peaks and valleys)
- **CDF:** Shows accumulated probability (always rising, reaches 1)

The steeper the CDF at point $x$, the higher the PDF at that point. Flat regions in the CDF correspond to zero density in the PDF.

## Why Both Exist

The PDF answers: "How dense is probability at this point?"

The [CDF](!/probability/cdf) answers: "What's the probability of at most this value?"

Different questions favor different representations. The PDF is better for understanding density and finding modes. The CDF is better for computing cumulative probabilities and percentiles. Both describe the same underlying [distribution](!/probability/distributions) completely.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj13: {
  //   title: `PDFs of Common Continuous Distributions`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj13: {
    title: `PDFs of Common Continuous Distributions`,
    content: `
Certain probability scenarios appear so frequently that their PDFs have been studied, named, and cataloged. These are the [standard continuous distributions](!/probability/distributions/continuous).

Each [distribution](!/probability/distributions) models a specific type of random process. Once you recognize the pattern, you can use the established PDF formula instead of deriving it from scratch.

## Uniform Distribution

PDF: $f(x) = \\frac{1}{b-a}$ for $x \\in [a, b]$, zero elsewhere.

The PDF is completely flat—constant density across the entire support. Probability spreads evenly, with no value more likely than any other. This represents maximum uncertainty given only the interval bounds. The PDF height equals $\\frac{1}{\\text{interval length}}$ to ensure total area equals 1. For $[0, 1]$, density is exactly 1. For $[0, 10]$, density drops to $\\frac{1}{10}$.

[Read More About Uniform Distribution](!/probability/distributions/continuous/uniform)

## Normal (Gaussian) Distribution

PDF: $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ for $x \\in (-\\infty, \\infty)$

The PDF forms the iconic bell curve—symmetric, smooth, and unimodal. The peak sits at the mean $\\mu$, where density is maximized. Density decreases symmetrically on both sides following the exponential of a quadratic. The parameter $\\sigma$ controls spread: small $\\sigma$ creates a narrow, tall peak; large $\\sigma$ creates a wide, flat curve. The PDF never reaches zero but becomes negligibly small beyond $\\mu \\pm 3\\sigma$. The exponential decay ensures finite total area despite infinite support. This is the most important [distribution](!/probability/distributions) in statistics due to the Central Limit Theorem.

[Read More About Normal Distribution](!/probability/distributions/continuous/normal)

## Exponential Distribution

PDF: $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$, zero for $x < 0$

The PDF starts at maximum density $\\lambda$ at $x = 0$ and decays exponentially toward zero. It decreases monotonically—no peaks or valleys, just continuous decline. The rate parameter $\\lambda$ controls how fast decay occurs: high $\\lambda$ produces rapid drop-off and concentration near zero; low $\\lambda$ produces slow decay and spread across larger values. The exponential PDF has the memoryless property—the remaining distribution shape doesn't depend on how much time has passed. Each step multiplies density by constant factor $e^{-\\lambda}$. Despite infinite support, the integral converges to 1 due to exponential shrinkage.

[Read More About Exponential Distribution](!/probability/distributions/continuous/exponential)

## Beta Distribution

PDF: $f(x) = \\frac{x^{\\alpha-1}(1-x)^{\\beta-1}}{B(\\alpha, \\beta)}$ for $x \\in [0, 1]$

The PDF is remarkably flexible, changing shape dramatically based on parameters $\\alpha$ and $\\beta$. For $\\alpha, \\beta > 1$, it's unimodal with peak inside $(0, 1)$. For $\\alpha, \\beta < 1$, it's U-shaped with density concentrating at the endpoints. For $\\alpha = \\beta$, it's symmetric around $\\frac{1}{2}$. For $\\alpha \\neq \\beta$, it's skewed. The normalizing constant $B(\\alpha, \\beta)$ ensures integration to 1. As $\\alpha$ increases, mass shifts toward 1; as $\\beta$ increases, mass shifts toward 0. Special case: $\\alpha = \\beta = 1$ reduces to [uniform](!/probability/distributions/continuous/uniform) on $[0, 1]$. The bounded support makes it ideal for modeling proportions, probabilities, and rates.

[Read More About Beta Distribution](!/probability/distributions/continuous/beta)

## PDF Patterns

Each PDF has characteristic behavior: where density concentrates, how it spreads, whether it's symmetric or skewed, how parameters reshape the curve. These patterns reflect the underlying random process and determine the [distribution's](!/probability/distributions) [expected value](!/probability/expected-value) and [variance](!/probability/variance). Recognizing PDF shapes helps identify which distribution models your data.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj14: {
  //   title: `Common Mistakes`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj14: {
    title: `Common Mistakes`,
    content: `
## Confusing Density with Probability

The PDF value $f(x)$ is not $P(X = x)$. For continuous [random variables](!/probability/random-variables), $P(X = x) = 0$ always. The PDF gives density—a rate of probability per unit, not probability itself.

Don't say "the probability at $x = 5$ is 0.8" when $f(5) = 0.8$. Say "the density at $x = 5$ is 0.8."

## Thinking PDF Values Cannot Exceed 1

Unlike PMF values which must satisfy $p(x) \\leq 1$, PDF values can be arbitrarily large. The constraint is that the total area integrates to 1, not that individual heights stay below 1.

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[0, 0.1]$ has $f(x) = 10$. This is perfectly valid.

Don't reject a PDF just because $f(x) > 1$ somewhere.

## Assigning Point Probabilities

For continuous variables, $P(X = a) = 0$ for any specific value $a$. Probability only exists over intervals.

Don't compute $P(X = 3.7)$ and expect a nonzero answer. Instead compute $P(3.6 < X < 3.8)$.

## Treating Inequalities as Different

The statements $P(X < a)$, $P(X \\leq a)$, $P(X > a)$, and $P(X \\geq a)$ differ by single points, which have zero probability.

Don't worry about whether to use strict or non-strict inequalities in continuous cases—they're identical. $P(X < 5) = P(X \\leq 5)$ exactly.

## Forgetting Absolute Value in Transformations

When transforming variables, the Jacobian requires $\\left|\\frac{d}{dy}g^{-1}(y)\\right|$, not just $\\frac{d}{dy}g^{-1}(y)$.

Don't drop the absolute value. Negative derivatives would produce negative densities, violating the [axioms](!/probability/axioms).

## Wrong Integration Bounds

When computing $P(a \\leq X \\leq b)$, integrate from $a$ to $b$, not beyond the support.

Don't integrate $\\int_0^{10}$ when the support is $[2, 8]$. The PDF is zero outside the support, but incorrect bounds can lead to errors or wasted computation.

## Summing Instead of Integrating

PDFs require integration, not summation. You cannot add up $f(x)$ values at discrete points.

Don't treat a PDF like a PMF. $P(X \\in A) = \\int_A f(x)dx$, not $\\sum_{x \\in A} f(x)$.

## Ignoring Support Constraints

Evaluating the PDF outside its support should give zero, but formulas don't always enforce this automatically.

Don't plug $x = -5$ into an [exponential](!/probability/distributions/continuous/exponential) PDF formula defined for $x \\geq 0$ without checking the domain first. Always respect the support boundaries.

## Normalization Errors When Building PDFs

When constructing a custom PDF, verify $\\int_{-\\infty}^{\\infty} f(x)dx = 1$. Many candidate functions fail this test.

Don't assume your function is a valid PDF without checking both [axioms](!/probability/axioms): non-negativity and normalization.

## Confusing PDF with CDF

The PDF is $f(x)$, the derivative of the [CDF](!/probability/cdf). The CDF is $F(x)$, the integral of the PDF. They serve different purposes and have different properties.

Don't use $f(x)$ when you need cumulative probability—that's $F(x) = \\int_{-\\infty}^x f(t)dt$.
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
  title: "Probability in the Continuous Case",
  content: `
 When a random variable can vary continuously over an interval, probability is no longer assigned to individual points. Instead, probability is described through a density function that spreads likelihood smoothly across ranges of values.

This page introduces the Probability Density Function (PDF) as the core mathematical object behind continuous probability models. It explains how probability is recovered from areas under curves, why single points have zero probability, and how calculus—through integration and differentiation—governs every meaningful calculation involving continuous random variables.

The goal is not to catalog distributions, but to understand what a PDF is, how it works, and why it replaces discrete probability functions in the continuous setting.
  `
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Probability Density Function (PDF) | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/probability-function/pdf",
         name: "name"
      },
        
       }
    }
   }

export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    // {
    //     id:'2',
    //     title:sectionsContent.obj2.title,
    //     link:sectionsContent.obj2.link,
    //     content:[
    //       sectionsContent.obj2.content,
    //     ]
    // },
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
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Density Function (PDF)</h1>
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
