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
import { pmfData } from '@/app/api/db/diagrams/pages/probability/probability-function/pmf/template'
import DiscreteDistributionsCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/DiscreteProbabilityCDF'
import DiscreteProbabilityDistributions from '@/app/components/visualizations/probability/discrete-distribution/DiscreteProbabilityDistributions'


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

const sectionsContent = {
  obj1: {
    title: `Definition & Physical Intuition`,
    content: `
## What is a PMF?

A PMF gives the probability that a discrete random variable lands on each specific value.

Think of it like placing weights on a number line. Each possible outcome gets a weight equal to its probability. Where you put more weight, that outcome is more likely.

Example: Roll a fair die. Put weight $\\frac{1}{6}$ at positions 1, 2, 3, 4, 5, and 6. Each spot has equal probability.

Example: Roll a loaded die favoring 6. Put weight $\\frac{1}{2}$ at position 6, and split the remaining $\\frac{1}{2}$ among the other five faces.

The weights must sum to 1—that's your total probability budget.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj2: {
  //   title: `The Domain (Support)`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj2: {
    title: `The Domain (Support)`,
    content: `
The **support** of a PMF is the set of values where the probability is nonzero—the places where probability mass actually sits.

Formally: The support of $X$ is $\\{x : p_X(x) > 0\\}$.

Think of it as the active zone. Outside the support, $p_X(x) = 0$. Nothing happens there.

## Types of Support

**Finite Support:** The random variable can take only a limited number of values.

Example: A fair die. Support is $\\{1, 2, 3, 4, 5, 6\\}$. Six values, finite.

Example: Flip a coin 10 times, count heads. Support is $\\{0, 1, 2, \\ldots, 10\\}$. Eleven values, finite.

**Infinite Support:** The random variable can take infinitely many values, but still countable.

Example: Flip a coin until you get heads. Count the number of flips. Support is $\\{1, 2, 3, 4, \\ldots\\}$. Could go on forever.

Example: Number of emails you receive in a day (Poisson model). Support is $\\{0, 1, 2, 3, \\ldots\\}$. No upper bound.

## Why Support Matters

**The support tells you**:
• Where to look for probability
• What values are possible vs. impossible
• How to set up calculations (sums over the support)

If you're computing $P(X \\in A)$ for some set $A$, you only sum over values in $A$ that are also in the support. Outside the support contributes nothing.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj3: {
  //   title: `The Two Fundamental Axioms`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },
  obj3: {
    title: `The Two Fundamental Axioms`,
    content: `
Every valid PMF must satisfy two non-negotiable rules. Break either one, and you don't have a PMF.

## Axiom 1: Non-Negativity

$$p_X(x) \\geq 0 \\text{ for all } x$$

Probabilities cannot be negative. Ever.

Each point gets zero or positive mass. If $p_X(5) = -0.2$, you've made an error. Fix it.

## Axiom 2: Normalization

$$\\sum_{x \\in \\text{Support}} p_X(x) = 1$$

All probabilities across the entire support must sum to exactly 1.

This is your total probability budget. You must allocate all of it, and you can't overspend.

Example: Fair die. $p_X(k) = \\frac{1}{6}$ for $k \\in \\{1,2,3,4,5,6\\}$.

Check: $6 \\times \\frac{1}{6} = 1$. ✓

Example: Loaded die with $p_X(6) = \\frac{1}{2}$ and $p_X(k) = \\frac{1}{10}$ for $k \\in \\{1,2,3,4,5\\}$.

Check: $\\frac{1}{2} + 5 \\times \\frac{1}{10} = \\frac{1}{2} + \\frac{1}{2} = 1$. ✓

## What These Axioms Guarantee

Together, these axioms ensure:
• No impossible probabilities (negative or greater than 1)
• Complete accounting (all outcomes covered)
• Consistency with basic probability theory

Violate either axiom, and your probability model breaks. These are the foundation everything else builds on.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  
  
  // obj4: {
  //   title: `Representations: The Three Views`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj4: {
    title: `Representations: The Three Views`,
    content: `
A PMF can be represented in three equivalent ways. Each offers different insights into how probability mass distributes.

## Graphical Representation

The PMF appears as a series of vertical bars (lollipop diagram) or dots on the x-y plane. The x-axis shows values of the [random variable](!/probability/random-variables), the y-axis shows probability.

Key features:
- **Height** of each bar represents probability at that point
- **Bars are discrete** — isolated points, not continuous curves
- **All heights must be non-negative**
- **Sum of all heights equals 1**

Example: Fair die PMF shows six bars of equal height $\\frac{1}{6}$ at positions 1, 2, 3, 4, 5, 6.

Example: [Binomial distribution](!/probability/distributions/discrete/binomial) with $n=10, p=0.5$ shows bars concentrated near the center (around 5) with symmetric decay on both sides.

## Functional Representation

The PMF is defined by an explicit mathematical formula $p_X(k)$.

Example: Fair die:

$$p_X(k) = \\begin{cases} 
\\frac{1}{6} & \\text{if } k \\in \\{1, 2, 3, 4, 5, 6\\} \\\\
0 & \\text{otherwise}
\\end{cases}$$

Example: [Geometric distribution](!/probability/distributions/discrete/geometric):

$$p_X(k) = (1-p)^{k-1}p \\text{ for } k \\in \\{1, 2, 3, \\ldots\\}$$

The functional form allows direct computation of probabilities and derivation of properties like [expected value](!/probability/expected-value) and [variance](!/probability/variance).

## Tabular Representation

The PMF can be displayed as a table listing each value and its probability.

Example: Roll two dice, sum the results:



`,
    before: ``,
    after: `
    Tables are especially useful when the PMF doesn't follow a simple formula or when presenting empirical data.

## Why Three Views?

- **Graphical:** Best for intuition and pattern recognition
- **Functional:** Best for calculation and theoretical analysis
- **Tabular:** Best for lookup and concrete examples

All three describe the same probability distribution, just from different perspectives. Choose the representation that best serves your immediate purpose.
    
    `,
    link: '',
  },
  // obj5: {
  //   title: `Building a PMF (From Story to Math)`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },
  obj5: {
    title: `Building a PMF (From Story to Math)`,
    content: `
Every PMF starts with a story—the situation, the process, the experiment. Your job is to translate that story into mathematical form.

## The Construction Process

**Step 1: Identify the Random Variable**

What are you counting or measuring? Define it clearly.

Example: "Flip a coin 3 times, count heads" → Let $X$ = number of heads.

**Step 2: Determine the Support**

What values can the [random variable](!/probability/random-variables) take?

Example: $X$ can be 0, 1, 2, or 3. Support is $\\{0, 1, 2, 3\\}$.

**Step 3: Assign Probabilities**

For each value in the support, determine its probability. Use counting, [combinatorics](!/probability/combinatorics), symmetry, or physical reasoning.

Example: Fair coin, 3 flips.
• $P(X = 0) = \\frac{1}{8}$ (only TTT)
• $P(X = 1) = \\frac{3}{8}$ (HTT, THT, TTH)
• $P(X = 2) = \\frac{3}{8}$ (HHT, HTH, THH)
• $P(X = 3) = \\frac{1}{8}$ (only HHH)

**Step 4: Verify the Axioms**

Check non-negativity: All probabilities ≥ 0? Yes.

Check normalization: Do they sum to 1?

$\\frac{1}{8} + \\frac{3}{8} + \\frac{3}{8} + \\frac{1}{8} = 1$ ✓

These are the two fundamental [axioms](!/probability/axioms) every PMF must satisfy.

**Step 5: Write the PMF**

Express the pattern as a formula if possible, or as a table.

Formula: $p_X(k) = \\binom{3}{k} \\left(\\frac{1}{2}\\right)^3$ for $k \\in \\{0,1,2,3\\}$

## From Physical Setup to Mathematical Object

The key skill is moving from a concrete scenario to a precise probability function. Ask:
• What outcomes are possible?
• How likely is each one?
• Does the assignment satisfy the [axioms](!/probability/axioms)?

Once built, the PMF becomes a complete mathematical description of the [random variable's](!/probability/random-variables) behavior.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj6: {
  //   title: `Calculations Using the PMF`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj6: {
    title: `Calculations Using the PMF`,
    content: `
Once you have a PMF, you can compute probabilities for any [event](!/probability/events) involving the [random variable](!/probability/random-variables).

## Single Point Probabilities

The PMF directly gives the probability of any specific value.

$P(X = k) = p_X(k)$

Example: Roll a fair die. $P(X = 4) = \\frac{1}{6}$

## Range Probabilities

To find $P(X \\in A)$ for some set $A$, sum the PMF over all values in $A$.

$P(X \\in A) = \\sum_{k \\in A} p_X(k)$

Example: $P(X \\leq 3) = p_X(1) + p_X(2) + p_X(3) = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{2}$

Example: $P(2 \\leq X \\leq 5) = p_X(2) + p_X(3) + p_X(4) + p_X(5) = \\frac{4}{6} = \\frac{2}{3}$

## Complement Probabilities

To find $P(X \\notin A)$, use the complement rule.

$P(X \\notin A) = 1 - P(X \\in A)$

Example: $P(X > 3) = 1 - P(X \\leq 3) = 1 - \\frac{1}{2} = \\frac{1}{2}$

## The Core Pattern

Every probability question reduces to:
1. Identify which values satisfy the condition
2. Sum the PMF over those values
3. Simplify

The PMF is your complete toolkit. If you know $p_X(k)$ for all $k$, you can answer any probability question about $X$.
    
`,
    before: ``,
    after: ``,
    link: '',
  },
  // obj7: {
  //   title: `Derived Properties: Location Measures`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj7: {
    title: `Derived Properties: Location Measures`,
    content: `
The PMF contains all the information about a [random variable](!/probability/random-variables). From it, we can compute summary measures that describe where the distribution is centered.

## Expected Value (Mean)

The [expected value](!/probability/expected-value) is the probability-weighted average of all possible values.

$$E[X] = \\sum_{k \\in \\text{Support}} k \\cdot p_X(k)$$

Think of it as the center of mass. Each value $k$ contributes based on its probability weight.

Example: Fair die. 

$$E[X] = 1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{6} + 3 \\cdot \\frac{1}{6} + 4 \\cdot \\frac{1}{6} + 5 \\cdot \\frac{1}{6} + 6 \\cdot \\frac{1}{6} = \\frac{21}{6} = 3.5$$

The average outcome over many rolls is 3.5.

## Median

The median is the value that splits the probability in half. It's the point where $P(X \\leq m) \\geq 0.5$ and $P(X \\geq m) \\geq 0.5$.

For discrete distributions, the median may not be unique if probability mass is concentrated at specific points.

Example: Fair die. The median is between 3 and 4, often reported as 3.5.

## Mode

The mode is the value with the highest probability.

$$\\text{mode} = \\arg\\max_k p_X(k)$$

Example: Loaded die with $p_X(6) = \\frac{1}{2}$ and $p_X(k) = \\frac{1}{10}$ for $k \\in \\{1,2,3,4,5\\}$. Mode is 6.

A distribution can have multiple modes if several values share the maximum probability.

## Why These Matter

Location measures summarize where the distribution sits on the number line. They answer: "What's a typical value?" Each measure captures a different notion of "typical."
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj8: {
  //   title: `Derived Properties: Spread Measures`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },
  obj8: {
    title: `Derived Properties: Spread Measures`,
    content: `
While [location](!/probability/probability-function/pmf#7) tells you where the distribution is centered. Spread tells you how much the values vary around that center.

## Variance

[Variance](!/probability/variance) quantifies the average squared deviation from the mean. It's calculated directly from the PMF:

$$\\text{Var}(X) = \\sum_{k \\in \\text{Support}} (k - E[X])^2 \\cdot p_X(k)$$

Each value's squared distance from the mean is weighted by its probability. High-probability values far from the mean increase variance significantly.

Computational shortcut: $\\text{Var}(X) = E[X^2] - (E[X])^2$

## Standard Deviation

Standard deviation is simply $\\sqrt{\\text{Var}(X)}$. It measures spread in the original units, making it more interpretable than variance.

A die with $\\text{SD}(X) \\approx 1.71$ means outcomes typically deviate about 1.7 units from the mean.

## Range

The range is the span of the support: maximum value minus minimum value.

For a fair die: Range = $6 - 1 = 5$

Range ignores probability—it treats rare and common outcomes equally. A single extreme value in the support sets the range, regardless of how unlikely it is.

## What Spread Reveals

Two distributions can share the same mean but behave completely differently. One might cluster tightly around the center; another might scatter values widely. Spread measures capture this distinction. They tell you how predictable individual outcomes are.
    `,
    before: ``,
    after: ``,
    link: '',
  },

  // obj9: {
  //   title: `Transformations`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

  obj9: {
    title: `Transformations`,
    content: `
If we take some [random variable](!/probabilioty/random-variables) $X$ and apply function $g$ the result $Y=g(X)$ will be a new random variable.

## The Transformation Process

Start with random variable $X$ with PMF $p_X(x)$.

Apply function $g$ to get $Y = g(X)$.

The new PMF $p_Y(y)$ is found by collecting all the probability mass from $X$ values that map to each $y$ value.

$$p_Y(y) = \\sum_{x: g(x) = y} p_X(x)$$

Sum over all $x$ values that produce the same $y$ after transformation.

## Linear Transformations

For $Y = aX + b$ where $a \\neq 0$:

$$p_Y(y) = p_X\\left(\\frac{y - b}{a}\\right)$$

The support shifts and scales accordingly.

Example: If $X$ is a fair die, then $Y = 2X$ has support $\\{2, 4, 6, 8, 10, 12\\}$ with $p_Y(k) = \\frac{1}{6}$ for each value.

Example: $Y = X + 3$ shifts the die to support $\\{4, 5, 6, 7, 8, 9\\}$ with probabilities unchanged.

## Non-Injective Transformations

When multiple $x$ values map to the same $y$, their probabilities combine.

Example: $X$ is a fair die, $Y = (X - 3.5)^2$ (squared distance from mean).

Multiple values map to the same squared distance:
• $p_Y(6.25) = p_X(1) + p_X(6) = \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$
• $p_Y(2.25) = p_X(2) + p_X(5) = \\frac{1}{3}$
• $p_Y(0.25) = p_X(3) + p_X(4) = \\frac{1}{3}$

## Effect on Expected Value

For any transformation $g$:

$$E[g(X)] = \\sum_{x} g(x) \\cdot p_X(x)$$

You don't need to find $p_Y(y)$ first. Work directly with the original PMF.

Linear transformations follow: $E[aX + b] = aE[X] + b$

## Key Insight

Transformations create new [random variables](!/probabilioty/random-variables), but the underlying probability structure stays connected to the original PMF. You're redistributing the same total probability mass, just arranging it differently.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj10: {
  //   title: `Connection to CDF`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },


  obj10: {
    title: `Connection to CDF`,
    content: `
The PMF and the [CDF](!/probability/cdf) (Cumulative Distribution Function) are two ways to describe the same [probability distribution](!/probability/distributions). Each contains complete information about the [random variable](!/probability/random-variables).

## From PMF to CDF

The [CDF](!/probability/cdf) accumulates probability from the PMF:

$$F_X(x) = P(X \\leq x) = \\sum_{k \\leq x} p_X(k)$$

The CDF at any point equals the sum of all PMF values up to and including that point.

Example: Fair die.
- $F_X(3) = p_X(1) + p_X(2) + p_X(3) = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{2}$
- $F_X(5.7) = p_X(1) + \\cdots + p_X(5) = \\frac{5}{6}$

The CDF is a step function for discrete variables—it jumps at each value in the support, with jump height equal to the PMF at that point.

## From CDF to PMF

Recover the PMF by taking differences in the CDF:

$$p_X(k) = F_X(k) - F_X(k^-)$$

where $k^-$ represents the value just before $k$ in the support.

For the fair die: $p_X(3) = F_X(3) - F_X(2) = \\frac{3}{6} - \\frac{2}{6} = \\frac{1}{6}$

## Why Both Exist

The PMF provides the probability of the [random variable](!/probability/random-variables) taking exactly a particular value and thus shows how probability distributes among all individual values of the domain.

The [CDF](!/probability/cdf) answers the question: "What's the probability of at most this value?" and shows how probability accumulates across the domain.

Different questions favor different representations. The PMF is more direct for point probabilities. The CDF is better for cumulative and range probabilities. Both describe the same underlying [distribution](!/probability/distributions) completely.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  // obj11: {
  //   title: `The Famous Families`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },

//   obj11: {
//     title: `PMFs of Common Discrete Distributions`,
//     content: `
// The [standard discrete distributions](!/probability/distributions/discrete) each have distinct PMF shapes and behaviors.

// ## Binomial Distribution

// PMF: $p_X(k) = \\binom{n}{k} p^k (1-p)^{n-k}$ for $k \\in \\{0, 1, \\ldots, n\\}$

// The PMF is symmetric when $p = 0.5$. For $p < 0.5$, mass concentrates toward 0. For $p > 0.5$, mass concentrates toward $n$. Maximum probability occurs near $np$.

// [Read More About Binomial Distribution](!/probability/distributions/discrete/binomial)

// ## Geometric Distribution

// PMF: $p_X(k) = (1-p)^{k-1} p$ for $k \\in \\{1, 2, 3, \\ldots\\}$

// The PMF decreases monotonically. Maximum mass is always at $k=1$. The tail decays exponentially—each step multiplies by $(1-p)$.

// [Read More About Geometric Distribution](!/probability/distributions/discrete/geometric)

// ## Poisson Distribution

// PMF: $p_X(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k \\in \\{0, 1, 2, \\ldots\\}$

// The PMF rises from 0, peaks near $\\lambda$, then decays. For large $\\lambda$, the shape becomes approximately bell-shaped. Small $\\lambda$ produces strong right skew.

// [Read More About Poisson Distribution](!/probability/distributions/discrete/poisson)

// ## Negative Binomial Distribution

// PMF: $p_X(k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}$ for $k \\in \\{r, r+1, r+2, \\ldots\\}$

// The PMF starts at $k=r$ and decreases. Shape similar to geometric but shifted and spread based on $r$. Higher $r$ shifts the mode rightward.

// [Read More About Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)

// ## Hypergeometric Distribution

// PMF: $p_X(k) = \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$

// The PMF is unimodal with peak near $n \\cdot \\frac{K}{N}$. Shape resembles [binomial](!/probability/distributions/discrete/binomial) but with finite population correction. More concentrated than binomial.

// [Read More About Hypergeometric Distribution](!/probability/distributions/discrete/hypergeometric)

// ## Discrete Uniform Distribution

// PMF: $p_X(k) = \\frac{1}{n}$ for $k \\in \\{a, a+1, \\ldots, b\\}$ where $n = b - a + 1$

// The PMF is flat—constant across the entire support. No value is more likely than any other. The only distribution with no peak.

// [Read More About Discrete Uniform Distribution](!/probability/distributions/discrete/uniform)

// ## PMF Patterns

// Each PMF has characteristic behavior: where mass concentrates, how it spreads, whether it's symmetric or skewed. These patterns reflect the underlying random process and determine the [distribution's](!/probability/distributions) [expected value](!/probability/expected-value) and [variance](!/probability/variance).
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
  // obj12: {
  //   title: `Common Mistakes`,
  //   content: ``,
  //   before: ``,
  //   after: ``,
  //   link: '',
  // },
obj11: {
    title: `PMFs of Common Discrete Distributions`,
    content: `
The [standard discrete distributions](!/probability/distributions/discrete) each have distinct PMF shapes and behaviors.

## Binomial Distribution

PMF: $p_X(k) = \\binom{n}{k} p^k (1-p)^{n-k}$ for $k \\in \\{0, 1, \\ldots, n\\}$

The PMF is symmetric when $p = 0.5$, creating a bell-shaped pattern centered at $\\frac{n}{2}$. For $p < 0.5$, mass concentrates toward 0, creating right skew. For $p > 0.5$, mass concentrates toward $n$, creating left skew. The peak occurs near $np$, which is also the [expected value](!/probability/expected-value). As $n$ increases, the PMF spreads wider but maintains its shape relative to $p$. The binomial coefficient $\\binom{n}{k}$ creates the characteristic rise and fall pattern, with probabilities increasing until the mode and then decreasing. For extreme values of $p$ near 0 or 1, the distribution becomes highly skewed with most mass concentrated at one end.

[Read More About Binomial Distribution](!/probability/distributions/discrete/binomial)

## Geometric Distribution

PMF: $p_X(k) = (1-p)^{k-1} p$ for $k \\in \\{1, 2, 3, \\ldots\\}$

The PMF decreases monotonically—it never increases. Maximum mass always sits at $k=1$, the first possible value. Each subsequent value has probability $(1-p)$ times the previous, creating exponential decay. For $p$ close to 1, the PMF drops sharply, concentrating almost all mass at small values. For $p$ close to 0, the PMF decays slowly, spreading mass across many values. The geometric PMF has the memoryless property: the shape of the tail remains proportional regardless of where you start. Unlike bounded distributions, the tail extends infinitely but thins out rapidly. The ratio between consecutive probabilities is constant: $\\frac{p_X(k+1)}{p_X(k)} = (1-p)$ always.

[Read More About Geometric Distribution](!/probability/distributions/discrete/geometric)

## Poisson Distribution

PMF: $p_X(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k \\in \\{0, 1, 2, \\ldots\\}$

The PMF starts at $p_X(0) = e^{-\\lambda}$, rises to a peak near $\\lambda$, then decays toward zero. For small $\\lambda$ (less than 1), the mode is at 0 and the PMF shows strong right skew. For moderate $\\lambda$ (around 5-10), the PMF becomes roughly symmetric and bell-shaped. For large $\\lambda$ (greater than 20), the PMF looks nearly normal. The rise-and-fall pattern is governed by the competition between $\\lambda^k$ (which grows) and $k!$ (which grows faster). The peak shifts rightward as $\\lambda$ increases, and the spread increases proportionally—both mean and [variance](!/probability/variance) equal $\\lambda$. The Poisson PMF never reaches zero for any finite $k$, though it becomes negligibly small far from $\\lambda$.

[Read More About Poisson Distribution](!/probability/distributions/discrete/poisson)

## Negative Binomial Distribution

PMF: $p_X(k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}$ for $k \\in \\{r, r+1, r+2, \\ldots\\}$

The PMF starts at $k=r$ (the minimum possible value) and typically decreases from there, though for small $p$ it may first increase slightly before declining. This is essentially a sum of $r$ independent geometric [random variables](!/probability/random-variables), so its shape resembles a widened, shifted geometric distribution. As $r$ increases, the mode shifts rightward and the distribution spreads out. The parameter $p$ controls the decay rate: high $p$ produces fast decay and concentration near $r$, while low $p$ produces slow decay and a long tail. When $r=1$, this reduces exactly to the geometric distribution. The PMF has heavier tails than the [Poisson](!/probability/distributions/discrete/poisson), making it useful for overdispersed count data. The ratio test shows probabilities eventually decrease monotonically, though the initial behavior depends on both parameters.

[Read More About Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)

## Hypergeometric Distribution

PMF: $p_X(k) = \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$

The PMF is unimodal with a peak near $n \\cdot \\frac{K}{N}$, the expected proportion of successes. The shape closely resembles the [binomial](!/probability/distributions/discrete/binomial) distribution but is slightly more concentrated—sampling without replacement reduces [variance](!/probability/variance). Unlike binomial, the hypergeometric support is finite and bounded by the population constraints: $k$ cannot exceed either $K$ (total successes available) or $n$ (sample size). As the population size $N$ grows relative to sample size $n$, the hypergeometric PMF converges to binomial with $p = \\frac{K}{N}$. For small populations or large samples, the distinction from binomial becomes significant. The PMF is symmetric when $K = \\frac{N}{2}$, left-skewed when $K > \\frac{N}{2}$, and right-skewed when $K < \\frac{N}{2}$. The finite population creates a correction factor that shrinks variance compared to binomial sampling with replacement.

[Read More About Hypergeometric Distribution](!/probability/distributions/discrete/hypergeometric)

## Discrete Uniform Distribution

PMF: $p_X(k) = \\frac{1}{n}$ for $k \\in \\{a, a+1, \\ldots, b\\}$ where $n = b - a + 1$

The PMF is completely flat—constant probability across the entire support. No value is more likely than any other, making this the only distribution with no peak or mode (every value is equally modal). This represents maximum uncertainty given only knowledge of the support boundaries. The PMF has zero skewness and is perfectly symmetric around the midpoint $\\frac{a+b}{2}$. Adding or removing even one value from the support changes all probabilities—with $n$ values, each gets exactly $\\frac{1}{n}$ of the total probability mass. The uniform PMF serves as a reference distribution: deviations from uniformity indicate structure or bias in the data. Despite its simplicity, the discrete uniform appears frequently in practice: fair dice, random selection, lottery draws. The PMF provides no information about which specific value will occur—all are equally plausible.

[Read More About Discrete Uniform Distribution](!/probability/distributions/discrete/uniform)

## PMF Patterns

Each PMF has characteristic behavior: where mass concentrates, how it spreads, whether it's symmetric or skewed, how parameters affect shape. These patterns reflect the underlying random process and determine the [distribution's](!/probability/distributions) [expected value](!/probability/expected-value) and [variance](!/probability/variance). Recognizing PMF shapes helps identify which distribution models your data.
    `,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Common Mistakes`,
    content: `
## Confusing PMF with PDF

The PMF applies only to discrete [random variables](!/probability/random-variables). For continuous variables, you need a PDF (Probability Density Function). The PMF gives exact point probabilities: $P(X = k)$. The PDF does not—for continuous variables, $P(X = x) = 0$ for any specific point.

Don't apply PMF formulas to continuous data, and don't try to use PDF methods on discrete outcomes.

## Forgetting to Check the Axioms

Not every function is a valid PMF. Before using any assignment as a PMF, verify:

- Non-negativity: $p_X(k) \\geq 0$ for all $k$
- Normalization: $\\sum_k p_X(k) = 1$

If either fails, you don't have a valid probability model. See [axioms](!/probability/axioms).

## Summing Over the Wrong Set

When computing $P(X \\in A)$, sum only over values in both $A$ and the support. Don't include values outside the support—they contribute zero anyway. Don't skip values inside the support that belong to $A$.

Example: For a die, $P(X > 4) = p_X(5) + p_X(6)$, not $p_X(4) + p_X(5) + p_X(6)$.

## Treating Probabilities as Fixed

The PMF depends on parameters. Change the parameters, and the entire PMF changes. A [binomial](!/probability/distributions/discrete/binomial) PMF with $p = 0.3$ looks completely different from one with $p = 0.7$, even with the same $n$.

Don't assume a distribution has one "standard" PMF—parameters matter.

## Confusing Support with Domain

The support is where $p_X(k) > 0$. Outside the support, $p_X(k) = 0$. The PMF is technically defined everywhere, but only the support matters for calculations.

Don't waste time summing over values where the PMF is zero.

## Ignoring Discrete Structure

Discrete [random variables](!/probability/random-variables) take isolated values, not continuous ranges. $P(2 < X < 3)$ might be zero if nothing sits between 2 and 3. Don't treat discrete variables as if they vary smoothly.

Always check whether your variable is discrete or continuous before choosing methods.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj13: {
    title: `Notation`,
    content: `The PMF uses specific notation to map outcomes to probabilities.

For random variable $X$:

$$p_X(x) = P(X = x)$$

$p_X(x)$: The PMF of random variable $X$ evaluated at value $x$.

$P(X = x)$: The probability that $X$ equals exactly $x$.

### Why the Subscript?

When dealing with multiple random variables, the subscript keeps them distinct:

• $p_X(x)$: PMF of variable $X$
• $p_Y(y)$: PMF of variable $Y$
• $p_{N}(n)$: PMF of variable $N$

With only one variable in context, you can drop the subscript and write $p(x)$.

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj14: {
    title: `Mass vs. Density`,
    content: `
The PMF is one of two ways to describe probability distributions. The key distinction is whether your variable takes discrete values or continuous values.

**PMF (Mass):** For discrete random variables. Probability concentrates at specific points. You can ask "What's $P(X = 5)$?" and get a number.

Example: Dice rolls, coin flips, number of customers.

  **PDF (Density):** For continuous random variables. Probability spreads across intervals. $P(X = 5) = 0$ for any exact point—you need ranges like $P(4.9 < X < 5.1)$.

Example: Height, weight, time measurements.

The PMF gives exact point probabilities. The PDF doesn't—it only gives probabilities over intervals.


    `,
    before: ``,
    after: `
  
    `,
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
  title: " Probability in the Discrete Case",
  content: `
 When a random variable can take only isolated, countable values, probability is assigned directly to those values rather than spread over intervals. Each possible outcome carries a specific “mass” that reflects how likely it is to occur.

This page develops the Probability Mass Function (PMF) as the fundamental object governing discrete random variables. It shows how probability is distributed across individual points, how these masses must satisfy basic axioms, and how they support calculations such as event probabilities, averages, and variability. The emphasis is on understanding the structure and behavior of discrete probability models, not just listing particular distributions.
  `
}

// const generalTable = `
// <table style="border-collapse: collapse; margin: 20px auto; font-family: Arial, sans-serif; font-size: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
//   <thead>
//     <tr style="background: linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%);">
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">Sum (k)</th>
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">2</th>
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">3</th>
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">4</th>
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">5</th>
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">6</th>
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">7</th>
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">8</th>
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">9</th>
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">10</th>
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">11</th>
//       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">12</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background-color: #ffffff;">
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; background-color: #f8f9fa; color: #495057;">p<sub>X</sub>(k)</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">1/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">2/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">3/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">4/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">5/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529; background-color: #e3f2fd; font-weight: 600;">6/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">5/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">4/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">3/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">2/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">1/36</td>
//     </tr>
//   </tbody>
// </table>
// `

const generalTable = `
<table style="border-collapse: collapse; margin: 20px auto; font-family: Arial, sans-serif; font-size: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%);">
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">Sum (k)</th>
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">2</th>
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">3</th>
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">4</th>
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">5</th>
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">6</th>
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">7</th>
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">8</th>
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">9</th>
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">10</th>
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">11</th>
      <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">12</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #ffffff;">
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; background-color: #f8f9fa; color: #495057;">p<sub>X</sub>(k)</td>
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">1/36</td>
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">2/36</td>
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">3/36</td>
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">4/36</td>
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">5/36</td>
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">6/36</td>
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">5/36</td>
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">4/36</td>
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">3/36</td>
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">2/36</td>
      <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">1/36</td>
    </tr>
  </tbody>
</table>
`


   return {
      props:{
         sectionsContent,
         introContent,
         generalTable,
          seoData: {
        title: "Probability Mass Functions (PMF) | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/probability-function/pmf",
         name: "name"
      },
        
       }
    }
   }

export default function PMFPage({seoData,sectionsContent , introContent ,generalTable}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
                <div key={'mass'} style={{
                    textAlign: 'center',
                    transform: 'scale(0.98)',
                    transformOrigin: 'center',
                    marginTop:'50px',
                    marginLeft:'-150px'
                  }} dangerouslySetInnerHTML={{ 
                    __html:   pmfData['probability at points'].svg
                  }} />,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
           <div key={'mass vs density'} style={{
                    textAlign: 'center',
                    transform: 'scale(0.98)',
                    transformOrigin: 'center',
                    marginTop:'50px',
                    marginLeft:'-150px'
                  }} dangerouslySetInnerHTML={{ 
                    __html:   pmfData['pmf vs pdf'].svg
                  }} />,
                //    sectionsContent.obj14.after,

                //     <div key={'mass'} style={{
                //     textAlign: 'center',
                //     transform: 'scale(0.98)',
                //     transformOrigin: 'center',
                //     marginTop:'50px',
                //     marginLeft:'-150px'
                //   }} dangerouslySetInnerHTML={{ 
                //     __html:   pmfData['probability at points'].svg
                //   }} />,
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
          <div style={{transform:'scale(1.15)'}} dangerouslySetInnerHTML={{ __html: generalTable }} key="table" />,
          sectionsContent.obj4.after,
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
           <div key={'discrete'} style={{transform:'scale(0.8)'}}>
                    <DiscreteProbabilityDistributions/>
                  </div>,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Mass Functions (PMF)</h1>
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
