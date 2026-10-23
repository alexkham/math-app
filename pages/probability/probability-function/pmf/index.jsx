// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import { pmfData } from '@/app/api/db/diagrams/pages/probability/probability-function/pmf/template'
// import DiscreteProbabilityDistributions from '@/app/components/visualizations/probability/discrete-distribution/DiscreteProbabilityDistributions'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){
// const keyWords = [
//   "probability mass function",
//   "PMF probability",
//   "discrete probability distribution",
//   "discrete random variable",
//   "PMF formula",
//   "PMF axioms",
//   "PMF to CDF",
//   "CDF to PMF",
//   "PMF vs PDF",
//   "expected value discrete",
//   "variance discrete",
//   "binomial PMF",
//   "geometric PMF",
//   "poisson PMF",
//   "PMF transformations",
// ]

//   // •

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,

// const sectionsContent = {
//   obj0: {
//   title: `Key Terms`,
//   content: `
// - [Probability Mass Function](!/probability/definitions#probability_mass_function) — $p_X(x) = P(X = x)$ for discrete variables
// - [Discrete Random Variable](!/probability/definitions#discrete_random_variable) — the type of variable described by a PMF
// - [Cumulative Distribution Function](!/probability/definitions#cumulative_distribution_function) — $F_X(x)$, related to the PMF by summation
// - [Expected Value](!/probability/definitions#expected_value) — $E[X]$, computed from the PMF
// - [Variance](!/probability/definitions#variance) — $\\operatorname{Var}(X)$, computed from the PMF`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
//   link: '',
// },
 
//   obj1: {
//     title: `Definition & Physical Intuition`,
//     content: `
// ## What is a PMF?

// A PMF gives the probability that a discrete random variable lands on each specific value.

// Think of it like placing weights on a number line. Each possible outcome gets a weight equal to its probability. Where you put more weight, that outcome is more likely.

// Example: Roll a fair die. Put weight $\\frac{1}{6}$ at positions 1, 2, 3, 4, 5, and 6. Each spot has equal probability.

// Example: Roll a loaded die favoring 6. Put weight $\\frac{1}{2}$ at position 6, and split the remaining $\\frac{1}{2}$ among the other five faces.

// The weights must sum to 1—that's your total probability budget.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 

//   obj2: {
//     title: `The Domain (Support)`,
//     content: `
// The **support** of a PMF is the set of values where the probability is nonzero—the places where probability mass actually sits.

// Formally: The support of $X$ is $\\{x : p_X(x) > 0\\}$.

// Think of it as the active zone. Outside the support, $p_X(x) = 0$. Nothing happens there.

// ## Types of Support

// **Finite Support:** The random variable can take only a limited number of values.

// Example: A fair die. Support is $\\{1, 2, 3, 4, 5, 6\\}$. Six values, finite.

// Example: Flip a coin 10 times, count heads. Support is $\\{0, 1, 2, \\ldots, 10\\}$. Eleven values, finite.

// **Infinite Support:** The random variable can take infinitely many values, but still countable.

// Example: Flip a coin until you get heads. Count the number of flips. Support is $\\{1, 2, 3, 4, \\ldots\\}$. Could go on forever.

// Example: Number of emails you receive in a day (Poisson model). Support is $\\{0, 1, 2, 3, \\ldots\\}$. No upper bound.

// ## Why Support Matters

// **The support tells you**:
// • Where to look for probability
// • What values are possible vs. impossible
// • How to set up calculations (sums over the support)

// If you're computing $P(X \\in A)$ for some set $A$, you only sum over values in $A$ that are also in the support. Outside the support contributes nothing.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 
//   obj3: {
//     title: `The Two Fundamental Axioms`,
//     content: `
// Every valid PMF must satisfy two non-negotiable rules. Break either one, and you don't have a PMF.

// ## Axiom 1: Non-Negativity

// $$p_X(x) \\geq 0 \\text{ for all } x$$

// Probabilities cannot be negative. Ever.

// Each point gets zero or positive mass. If $p_X(5) = -0.2$, you've made an error. Fix it.

// ## Axiom 2: Normalization

// $$\\sum_{x \\in \\text{Support}} p_X(x) = 1$$

// All probabilities across the entire support must sum to exactly 1.

// This is your total probability budget. You must allocate all of it, and you can't overspend.

// Example: Fair die. $p_X(k) = \\frac{1}{6}$ for $k \\in \\{1,2,3,4,5,6\\}$.

// Check: $6 \\times \\frac{1}{6} = 1$. ✓

// Example: Loaded die with $p_X(6) = \\frac{1}{2}$ and $p_X(k) = \\frac{1}{10}$ for $k \\in \\{1,2,3,4,5\\}$.

// Check: $\\frac{1}{2} + 5 \\times \\frac{1}{10} = \\frac{1}{2} + \\frac{1}{2} = 1$. ✓

// ## What These Axioms Guarantee

// Together, these axioms ensure:
// • No impossible probabilities (negative or greater than 1)
// • Complete accounting (all outcomes covered)
// • Consistency with basic probability theory

// Violate either axiom, and your probability model breaks. These are the foundation everything else builds on.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
  
  
 
//   obj4: {
//     title: `Representations: The Three Views`,
//     content: `
// A PMF can be represented in three equivalent ways. Each offers different insights into how probability mass distributes.

// ## Graphical Representation

// The PMF appears as a series of vertical bars (lollipop diagram) or dots on the x-y plane. The x-axis shows values of the [random variable](!/probability/random-variables), the y-axis shows probability.

// Key features:
// - **Height** of each bar represents probability at that point
// - **Bars are discrete** — isolated points, not continuous curves
// - **All heights must be non-negative**
// - **Sum of all heights equals 1**

// Example: Fair die PMF shows six bars of equal height $\\frac{1}{6}$ at positions 1, 2, 3, 4, 5, 6.

// Example: [Binomial distribution](!/probability/distributions/discrete/binomial) with $n=10, p=0.5$ shows bars concentrated near the center (around 5) with symmetric decay on both sides.

// ## Functional Representation

// The PMF is defined by an explicit mathematical formula $p_X(k)$.

// Example: Fair die:

// $$p_X(k) = \\begin{cases} 
// \\frac{1}{6} & \\text{if } k \\in \\{1, 2, 3, 4, 5, 6\\} \\\\
// 0 & \\text{otherwise}
// \\end{cases}$$

// Example: [Geometric distribution](!/probability/distributions/discrete/geometric):

// $$p_X(k) = (1-p)^{k-1}p \\text{ for } k \\in \\{1, 2, 3, \\ldots\\}$$

// The functional form allows direct computation of probabilities and derivation of properties like [expected value](!/probability/expected-value) and [variance](!/probability/variance).

// ## Tabular Representation

// The PMF can be displayed as a table listing each value and its probability.

// Example: Roll two dice, sum the results:



// `,
//     before: ``,
//     after: `
//     Tables are especially useful when the PMF doesn't follow a simple formula or when presenting empirical data.

// ## Why Three Views?

// - **Graphical:** Best for intuition and pattern recognition
// - **Functional:** Best for calculation and theoretical analysis
// - **Tabular:** Best for lookup and concrete examples

// All three describe the same probability distribution, just from different perspectives. Choose the representation that best serves your immediate purpose.
    
//     `,
//     link: '',
//   },
 
//   obj5: {
//     title: `Building a PMF (From Story to Math)`,
//     content: `
// Every PMF starts with a story—the situation, the process, the experiment. Your job is to translate that story into mathematical form.

// ## The Construction Process

// **Step 1: Identify the Random Variable**

// What are you counting or measuring? Define it clearly.

// Example: "Flip a coin 3 times, count heads" → Let $X$ = number of heads.

// **Step 2: Determine the Support**

// What values can the [random variable](!/probability/random-variables) take?

// Example: $X$ can be 0, 1, 2, or 3. Support is $\\{0, 1, 2, 3\\}$.

// **Step 3: Assign Probabilities**

// For each value in the support, determine its probability. Use counting, [combinatorics](!/probability/combinatorics), symmetry, or physical reasoning.

// Example: Fair coin, 3 flips.
// • $P(X = 0) = \\frac{1}{8}$ (only TTT)
// • $P(X = 1) = \\frac{3}{8}$ (HTT, THT, TTH)
// • $P(X = 2) = \\frac{3}{8}$ (HHT, HTH, THH)
// • $P(X = 3) = \\frac{1}{8}$ (only HHH)

// **Step 4: Verify the Axioms**

// Check non-negativity: All probabilities ≥ 0? Yes.

// Check normalization: Do they sum to 1?

// $\\frac{1}{8} + \\frac{3}{8} + \\frac{3}{8} + \\frac{1}{8} = 1$ ✓

// These are the two fundamental [axioms](!/probability/axioms) every PMF must satisfy.

// **Step 5: Write the PMF**

// Express the pattern as a formula if possible, or as a table.

// Formula: $p_X(k) = \\binom{3}{k} \\left(\\frac{1}{2}\\right)^3$ for $k \\in \\{0,1,2,3\\}$

// ## From Physical Setup to Mathematical Object

// The key skill is moving from a concrete scenario to a precise probability function. Ask:
// • What outcomes are possible?
// • How likely is each one?
// • Does the assignment satisfy the [axioms](!/probability/axioms)?

// Once built, the PMF becomes a complete mathematical description of the [random variable's](!/probability/random-variables) behavior.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
 

//   obj6: {
//     title: `Calculations Using the PMF`,
//     content: `
// Once you have a PMF, you can compute probabilities for any [event](!/probability/events) involving the [random variable](!/probability/random-variables).

// ## Single Point Probabilities

// The PMF directly gives the probability of any specific value.

// $P(X = k) = p_X(k)$

// Example: Roll a fair die. $P(X = 4) = \\frac{1}{6}$

// ## Range Probabilities

// To find $P(X \\in A)$ for some set $A$, sum the PMF over all values in $A$.

// $P(X \\in A) = \\sum_{k \\in A} p_X(k)$

// Example: $P(X \\leq 3) = p_X(1) + p_X(2) + p_X(3) = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{2}$

// Example: $P(2 \\leq X \\leq 5) = p_X(2) + p_X(3) + p_X(4) + p_X(5) = \\frac{4}{6} = \\frac{2}{3}$

// ## Complement Probabilities

// To find $P(X \\notin A)$, use the complement rule.

// $P(X \\notin A) = 1 - P(X \\in A)$

// Example: $P(X > 3) = 1 - P(X \\leq 3) = 1 - \\frac{1}{2} = \\frac{1}{2}$

// ## The Core Pattern

// Every probability question reduces to:
// 1. Identify which values satisfy the condition
// 2. Sum the PMF over those values
// 3. Simplify

// The PMF is your complete toolkit. If you know $p_X(k)$ for all $k$, you can answer any probability question about $X$.
    
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   // obj7: {
//   //   title: `Derived Properties: Location Measures`,
//   //   content: ``,
//   //   before: ``,
//   //   after: ``,
//   //   link: '',
//   // },

//   obj7: {
//     title: `Derived Properties: Location Measures`,
//     content: `
// The PMF contains all the information about a [random variable](!/probability/random-variables). From it, we can compute summary measures that describe where the distribution is centered.

// ## Expected Value (Mean)

// The [expected value](!/probability/expected-value) is the probability-weighted average of all possible values.

// $$E[X] = \\sum_{k \\in \\text{Support}} k \\cdot p_X(k)$$

// Think of it as the center of mass. Each value $k$ contributes based on its probability weight.

// Example: Fair die. 

// $$E[X] = 1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{6} + 3 \\cdot \\frac{1}{6} + 4 \\cdot \\frac{1}{6} + 5 \\cdot \\frac{1}{6} + 6 \\cdot \\frac{1}{6} = \\frac{21}{6} = 3.5$$

// The average outcome over many rolls is 3.5.

// ## Median

// The median is the value that splits the probability in half. It's the point where $P(X \\leq m) \\geq 0.5$ and $P(X \\geq m) \\geq 0.5$.

// For discrete distributions, the median may not be unique if probability mass is concentrated at specific points.

// Example: Fair die. The median is between 3 and 4, often reported as 3.5.

// ## Mode

// The mode is the value with the highest probability.

// $$\\text{mode} = \\arg\\max_k p_X(k)$$

// Example: Loaded die with $p_X(6) = \\frac{1}{2}$ and $p_X(k) = \\frac{1}{10}$ for $k \\in \\{1,2,3,4,5\\}$. Mode is 6.

// A distribution can have multiple modes if several values share the maximum probability.

// ## Why These Matter

// Location measures summarize where the distribution sits on the number line. They answer: "What's a typical value?" Each measure captures a different notion of "typical."
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   // obj8: {
//   //   title: `Derived Properties: Spread Measures`,
//   //   content: ``,
//   //   before: ``,
//   //   after: ``,
//   //   link: '',
//   // },
//   obj8: {
//     title: `Derived Properties: Spread Measures`,
//     content: `
// While [location](!/probability/probability-function/pmf#7) tells you where the distribution is centered. Spread tells you how much the values vary around that center.

// ## Variance

// [Variance](!/probability/variance) quantifies the average squared deviation from the mean. It's calculated directly from the PMF:

// $$\\text{Var}(X) = \\sum_{k \\in \\text{Support}} (k - E[X])^2 \\cdot p_X(k)$$

// Each value's squared distance from the mean is weighted by its probability. High-probability values far from the mean increase variance significantly.

// Computational shortcut: $\\text{Var}(X) = E[X^2] - (E[X])^2$

// ## Standard Deviation

// Standard deviation is simply $\\sqrt{\\text{Var}(X)}$. It measures spread in the original units, making it more interpretable than variance.

// A die with $\\text{SD}(X) \\approx 1.71$ means outcomes typically deviate about 1.7 units from the mean.

// ## Range

// The range is the span of the support: maximum value minus minimum value.

// For a fair die: Range = $6 - 1 = 5$

// Range ignores probability—it treats rare and common outcomes equally. A single extreme value in the support sets the range, regardless of how unlikely it is.

// ## What Spread Reveals

// Two distributions can share the same mean but behave completely differently. One might cluster tightly around the center; another might scatter values widely. Spread measures capture this distinction. They tell you how predictable individual outcomes are.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   // obj9: {
//   //   title: `Transformations`,
//   //   content: ``,
//   //   before: ``,
//   //   after: ``,
//   //   link: '',
//   // },

//   obj9: {
//     title: `Transformations`,
//     content: `
// If we take some [random variable](!/probability/random-variables) $X$ and apply function $g$ the result $Y=g(X)$ will be a new random variable.

// ## The Transformation Process

// Start with random variable $X$ with PMF $p_X(x)$.

// Apply function $g$ to get $Y = g(X)$.

// The new PMF $p_Y(y)$ is found by collecting all the probability mass from $X$ values that map to each $y$ value.

// $$p_Y(y) = \\sum_{x: g(x) = y} p_X(x)$$

// Sum over all $x$ values that produce the same $y$ after transformation.

// ## Linear Transformations

// For $Y = aX + b$ where $a \\neq 0$:

// $$p_Y(y) = p_X\\left(\\frac{y - b}{a}\\right)$$

// The support shifts and scales accordingly.

// Example: If $X$ is a fair die, then $Y = 2X$ has support $\\{2, 4, 6, 8, 10, 12\\}$ with $p_Y(k) = \\frac{1}{6}$ for each value.

// Example: $Y = X + 3$ shifts the die to support $\\{4, 5, 6, 7, 8, 9\\}$ with probabilities unchanged.

// ## Non-Injective Transformations

// When multiple $x$ values map to the same $y$, their probabilities combine.

// Example: $X$ is a fair die, $Y = (X - 3.5)^2$ (squared distance from mean).

// Multiple values map to the same squared distance:
// • $p_Y(6.25) = p_X(1) + p_X(6) = \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$
// • $p_Y(2.25) = p_X(2) + p_X(5) = \\frac{1}{3}$
// • $p_Y(0.25) = p_X(3) + p_X(4) = \\frac{1}{3}$

// ## Effect on Expected Value

// For any transformation $g$:

// $$E[g(X)] = \\sum_{x} g(x) \\cdot p_X(x)$$

// You don't need to find $p_Y(y)$ first. Work directly with the original PMF.

// Linear transformations follow: $E[aX + b] = aE[X] + b$

// ## Key Insight

// Transformations create new [random variables](!/probability/random-variables), but the underlying probability structure stays connected to the original PMF. You're redistributing the same total probability mass, just arranging it differently.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   // obj10: {
//   //   title: `Connection to CDF`,
//   //   content: ``,
//   //   before: ``,
//   //   after: ``,
//   //   link: '',
//   // },


//   obj10: {
//     title: `Connection to CDF`,
//     content: `
// The PMF and the [CDF](!/probability/cdf) (Cumulative Distribution Function) are two ways to describe the same [probability distribution](!/probability/distributions). Each contains complete information about the [random variable](!/probability/random-variables).

// ## From PMF to CDF

// The [CDF](!/probability/cdf) accumulates probability from the PMF:

// $$F_X(x) = P(X \\leq x) = \\sum_{k \\leq x} p_X(k)$$

// The CDF at any point equals the sum of all PMF values up to and including that point.

// Example: Fair die.
// - $F_X(3) = p_X(1) + p_X(2) + p_X(3) = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{2}$
// - $F_X(5.7) = p_X(1) + \\cdots + p_X(5) = \\frac{5}{6}$

// The CDF is a step function for discrete variables—it jumps at each value in the support, with jump height equal to the PMF at that point.

// ## From CDF to PMF

// Recover the PMF by taking differences in the CDF:

// $$p_X(k) = F_X(k) - F_X(k^-)$$

// where $k^-$ represents the value just before $k$ in the support.

// For the fair die: $p_X(3) = F_X(3) - F_X(2) = \\frac{3}{6} - \\frac{2}{6} = \\frac{1}{6}$

// ## Why Both Exist

// The PMF provides the probability of the [random variable](!/probability/random-variables) taking exactly a particular value and thus shows how probability distributes among all individual values of the domain.

// The [CDF](!/probability/cdf) answers the question: "What's the probability of at most this value?" and shows how probability accumulates across the domain.

// Different questions favor different representations. The PMF is more direct for point probabilities. The CDF is better for cumulative and range probabilities. Both describe the same underlying [distribution](!/probability/distributions) completely.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
  
// //   obj11: {
// //     title: `PMFs of Common Discrete Distributions`,
// //     content: `
// // The [standard discrete distributions](!/probability/distributions/discrete) each have distinct PMF shapes and behaviors.

// // ## Binomial Distribution

// // PMF: $p_X(k) = \\binom{n}{k} p^k (1-p)^{n-k}$ for $k \\in \\{0, 1, \\ldots, n\\}$

// // The PMF is symmetric when $p = 0.5$. For $p < 0.5$, mass concentrates toward 0. For $p > 0.5$, mass concentrates toward $n$. Maximum probability occurs near $np$.

// // [Read More About Binomial Distribution](!/probability/distributions/discrete/binomial)

// // ## Geometric Distribution

// // PMF: $p_X(k) = (1-p)^{k-1} p$ for $k \\in \\{1, 2, 3, \\ldots\\}$

// // The PMF decreases monotonically. Maximum mass is always at $k=1$. The tail decays exponentially—each step multiplies by $(1-p)$.

// // [Read More About Geometric Distribution](!/probability/distributions/discrete/geometric)

// // ## Poisson Distribution

// // PMF: $p_X(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k \\in \\{0, 1, 2, \\ldots\\}$

// // The PMF rises from 0, peaks near $\\lambda$, then decays. For large $\\lambda$, the shape becomes approximately bell-shaped. Small $\\lambda$ produces strong right skew.

// // [Read More About Poisson Distribution](!/probability/distributions/discrete/poisson)

// // ## Negative Binomial Distribution

// // PMF: $p_X(k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}$ for $k \\in \\{r, r+1, r+2, \\ldots\\}$

// // The PMF starts at $k=r$ and decreases. Shape similar to geometric but shifted and spread based on $r$. Higher $r$ shifts the mode rightward.

// // [Read More About Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)

// // ## Hypergeometric Distribution

// // PMF: $p_X(k) = \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$

// // The PMF is unimodal with peak near $n \\cdot \\frac{K}{N}$. Shape resembles [binomial](!/probability/distributions/discrete/binomial) but with finite population correction. More concentrated than binomial.

// // [Read More About Hypergeometric Distribution](!/probability/distributions/discrete/hypergeometric)

// // ## Discrete Uniform Distribution

// // PMF: $p_X(k) = \\frac{1}{n}$ for $k \\in \\{a, a+1, \\ldots, b\\}$ where $n = b - a + 1$

// // The PMF is flat—constant across the entire support. No value is more likely than any other. The only distribution with no peak.

// // [Read More About Discrete Uniform Distribution](!/probability/distributions/discrete/uniform)

// // ## PMF Patterns

// // Each PMF has characteristic behavior: where mass concentrates, how it spreads, whether it's symmetric or skewed. These patterns reflect the underlying random process and determine the [distribution's](!/probability/distributions) [expected value](!/probability/expected-value) and [variance](!/probability/variance).
// //     `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
//   // obj12: {
//   //   title: `Common Mistakes`,
//   //   content: ``,
//   //   before: ``,
//   //   after: ``,
//   //   link: '',
//   // },
// obj11: {
//     title: `PMFs of Common Discrete Distributions`,
//     content: `
// The [standard discrete distributions](!/probability/distributions/discrete) each have distinct PMF shapes and behaviors.

// ## Binomial Distribution

// PMF: $p_X(k) = \\binom{n}{k} p^k (1-p)^{n-k}$ for $k \\in \\{0, 1, \\ldots, n\\}$

// The PMF is symmetric when $p = 0.5$, creating a bell-shaped pattern centered at $\\frac{n}{2}$. For $p < 0.5$, mass concentrates toward 0, creating right skew. For $p > 0.5$, mass concentrates toward $n$, creating left skew. The peak occurs near $np$, which is also the [expected value](!/probability/expected-value). As $n$ increases, the PMF spreads wider but maintains its shape relative to $p$. The binomial coefficient $\\binom{n}{k}$ creates the characteristic rise and fall pattern, with probabilities increasing until the mode and then decreasing. For extreme values of $p$ near 0 or 1, the distribution becomes highly skewed with most mass concentrated at one end.

// [Read More About Binomial Distribution](!/probability/distributions/discrete/binomial)

// ## Geometric Distribution

// PMF: $p_X(k) = (1-p)^{k-1} p$ for $k \\in \\{1, 2, 3, \\ldots\\}$

// The PMF decreases monotonically—it never increases. Maximum mass always sits at $k=1$, the first possible value. Each subsequent value has probability $(1-p)$ times the previous, creating exponential decay. For $p$ close to 1, the PMF drops sharply, concentrating almost all mass at small values. For $p$ close to 0, the PMF decays slowly, spreading mass across many values. The geometric PMF has the memoryless property: the shape of the tail remains proportional regardless of where you start. Unlike bounded distributions, the tail extends infinitely but thins out rapidly. The ratio between consecutive probabilities is constant: $\\frac{p_X(k+1)}{p_X(k)} = (1-p)$ always.

// [Read More About Geometric Distribution](!/probability/distributions/discrete/geometric)

// ## Poisson Distribution

// PMF: $p_X(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k \\in \\{0, 1, 2, \\ldots\\}$

// The PMF starts at $p_X(0) = e^{-\\lambda}$, rises to a peak near $\\lambda$, then decays toward zero. For small $\\lambda$ (less than 1), the mode is at 0 and the PMF shows strong right skew. For moderate $\\lambda$ (around 5-10), the PMF becomes roughly symmetric and bell-shaped. For large $\\lambda$ (greater than 20), the PMF looks nearly normal. The rise-and-fall pattern is governed by the competition between $\\lambda^k$ (which grows) and $k!$ (which grows faster). The peak shifts rightward as $\\lambda$ increases, and the spread increases proportionally—both mean and [variance](!/probability/variance) equal $\\lambda$. The Poisson PMF never reaches zero for any finite $k$, though it becomes negligibly small far from $\\lambda$.

// [Read More About Poisson Distribution](!/probability/distributions/discrete/poisson)

// ## Negative Binomial Distribution

// PMF: $p_X(k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}$ for $k \\in \\{r, r+1, r+2, \\ldots\\}$

// The PMF starts at $k=r$ (the minimum possible value) and typically decreases from there, though for small $p$ it may first increase slightly before declining. This is essentially a sum of $r$ independent geometric [random variables](!/probability/random-variables), so its shape resembles a widened, shifted geometric distribution. As $r$ increases, the mode shifts rightward and the distribution spreads out. The parameter $p$ controls the decay rate: high $p$ produces fast decay and concentration near $r$, while low $p$ produces slow decay and a long tail. When $r=1$, this reduces exactly to the geometric distribution. The PMF has heavier tails than the [Poisson](!/probability/distributions/discrete/poisson), making it useful for overdispersed count data. The ratio test shows probabilities eventually decrease monotonically, though the initial behavior depends on both parameters.

// [Read More About Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)

// ## Hypergeometric Distribution

// PMF: $p_X(k) = \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$

// The PMF is unimodal with a peak near $n \\cdot \\frac{K}{N}$, the expected proportion of successes. The shape closely resembles the [binomial](!/probability/distributions/discrete/binomial) distribution but is slightly more concentrated—sampling without replacement reduces [variance](!/probability/variance). Unlike binomial, the hypergeometric support is finite and bounded by the population constraints: $k$ cannot exceed either $K$ (total successes available) or $n$ (sample size). As the population size $N$ grows relative to sample size $n$, the hypergeometric PMF converges to binomial with $p = \\frac{K}{N}$. For small populations or large samples, the distinction from binomial becomes significant. The PMF is symmetric when $K = \\frac{N}{2}$, left-skewed when $K > \\frac{N}{2}$, and right-skewed when $K < \\frac{N}{2}$. The finite population creates a correction factor that shrinks variance compared to binomial sampling with replacement.

// [Read More About Hypergeometric Distribution](!/probability/distributions/discrete/hypergeometric)

// ## Discrete Uniform Distribution

// PMF: $p_X(k) = \\frac{1}{n}$ for $k \\in \\{a, a+1, \\ldots, b\\}$ where $n = b - a + 1$

// The PMF is completely flat—constant probability across the entire support. No value is more likely than any other, making this the only distribution with no peak or mode (every value is equally modal). This represents maximum uncertainty given only knowledge of the support boundaries. The PMF has zero skewness and is perfectly symmetric around the midpoint $\\frac{a+b}{2}$. Adding or removing even one value from the support changes all probabilities—with $n$ values, each gets exactly $\\frac{1}{n}$ of the total probability mass. The uniform PMF serves as a reference distribution: deviations from uniformity indicate structure or bias in the data. Despite its simplicity, the discrete uniform appears frequently in practice: fair dice, random selection, lottery draws. The PMF provides no information about which specific value will occur—all are equally plausible.

// [Read More About Discrete Uniform Distribution](!/probability/distributions/discrete/uniform)

// ## PMF Patterns

// Each PMF has characteristic behavior: where mass concentrates, how it spreads, whether it's symmetric or skewed, how parameters affect shape. These patterns reflect the underlying random process and determine the [distribution's](!/probability/distributions) [expected value](!/probability/expected-value) and [variance](!/probability/variance). Recognizing PMF shapes helps identify which distribution models your data.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj12: {
//     title: `Common Mistakes`,
//     content: `
// ## Confusing PMF with PDF

// The PMF applies only to discrete [random variables](!/probability/random-variables). For continuous variables, you need a PDF (Probability Density Function). The PMF gives exact point probabilities: $P(X = k)$. The PDF does not—for continuous variables, $P(X = x) = 0$ for any specific point.

// Don't apply PMF formulas to continuous data, and don't try to use PDF methods on discrete outcomes.

// ## Forgetting to Check the Axioms

// Not every function is a valid PMF. Before using any assignment as a PMF, verify:

// - Non-negativity: $p_X(k) \\geq 0$ for all $k$
// - Normalization: $\\sum_k p_X(k) = 1$

// If either fails, you don't have a valid probability model. See [axioms](!/probability/axioms).

// ## Summing Over the Wrong Set

// When computing $P(X \\in A)$, sum only over values in both $A$ and the support. Don't include values outside the support—they contribute zero anyway. Don't skip values inside the support that belong to $A$.

// Example: For a die, $P(X > 4) = p_X(5) + p_X(6)$, not $p_X(4) + p_X(5) + p_X(6)$.

// ## Treating Probabilities as Fixed

// The PMF depends on parameters. Change the parameters, and the entire PMF changes. A [binomial](!/probability/distributions/discrete/binomial) PMF with $p = 0.3$ looks completely different from one with $p = 0.7$, even with the same $n$.

// Don't assume a distribution has one "standard" PMF—parameters matter.

// ## Confusing Support with Domain

// The support is where $p_X(k) > 0$. Outside the support, $p_X(k) = 0$. The PMF is technically defined everywhere, but only the support matters for calculations.

// Don't waste time summing over values where the PMF is zero.

// ## Ignoring Discrete Structure

// Discrete [random variables](!/probability/random-variables) take isolated values, not continuous ranges. $P(2 < X < 3)$ might be zero if nothing sits between 2 and 3. Don't treat discrete variables as if they vary smoothly.

// Always check whether your variable is discrete or continuous before choosing methods.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj13: {
//     title: `Notation`,
//     content: `The PMF uses specific notation to map outcomes to probabilities.

// For random variable $X$:

// $$p_X(x) = P(X = x)$$

// $p_X(x)$: The PMF of random variable $X$ evaluated at value $x$.

// $P(X = x)$: The probability that $X$ equals exactly $x$.

// ### Why the Subscript?

// When dealing with multiple random variables, the subscript keeps them distinct:

// • $p_X(x)$: PMF of variable $X$
// • $p_Y(y)$: PMF of variable $Y$
// • $p_{N}(n)$: PMF of variable $N$

// With only one variable in context, you can drop the subscript and write $p(x)$.

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj14: {
//     title: `Mass vs. Density`,
//     content: `
// The PMF is one of two ways to describe probability distributions. The key distinction is whether your variable takes discrete values or continuous values.

// **PMF (Mass):** For discrete random variables. Probability concentrates at specific points. You can ask "What's $P(X = 5)$?" and get a number.

// Example: Dice rolls, coin flips, number of customers.

//   **PDF (Density):** For continuous random variables. Probability spreads across intervals. $P(X = 5) = 0$ for any exact point—you need ranges like $P(4.9 < X < 5.1)$.

// Example: Height, weight, time measurements.

// The PMF gives exact point probabilities. The PDF doesn't—it only gives probabilities over intervals.


//     `,
//     before: ``,
//     after: `
  
//     `,
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

//   const introContent = {
//   id: "intro",
//   title: " Probability in the Discrete Case",
//   content: `
//  When a random variable can take only isolated, countable values, probability is assigned directly to those values rather than spread over intervals. Each possible outcome carries a specific “mass” that reflects how likely it is to occur.

// This page develops the Probability Mass Function (PMF) as the fundamental object governing discrete random variables. It shows how probability is distributed across individual points, how these masses must satisfy basic axioms, and how they support calculations such as event probabilities, averages, and variability. The emphasis is on understanding the structure and behavior of discrete probability models, not just listing particular distributions.
//   `
// }


// const faqQuestions = {
//   obj1: {
//     question: "What is a probability mass function (PMF)?",
//     answer: "A probability mass function p_X(x) gives the probability that a discrete random variable X takes exactly the value x. It is defined as p_X(x) = P(X = x). The PMF assigns probability directly to each value in the support of X, and the total of all these probabilities equals 1."
//   },
//   obj2: {
//     question: "What two axioms must every valid PMF satisfy?",
//     answer: "First, non-negativity: p_X(x) must be greater than or equal to zero for all x. Second, normalization: the sum of p_X(x) over all values in the support must equal exactly 1. Any function that fails either condition is not a valid probability mass function."
//   },
//   obj3: {
//     question: "What is the difference between a PMF and a PDF?",
//     answer: "A PMF describes discrete random variables, where probability concentrates at specific points and P(X = x) can be a nonzero value. A PDF describes continuous random variables, where probability spreads across intervals and P(X = x) equals zero at every individual point. PMF values are probabilities; PDF values are densities."
//   },
//   obj4: {
//     question: "How are the PMF and CDF related?",
//     answer: "The CDF F_X(x) is obtained by summing the PMF over all values less than or equal to x: F_X(x) equals the sum of p_X(k) for k less than or equal to x. The PMF is recovered from the CDF by taking the size of each jump: p_X(k) equals F_X(k) minus F_X(k-1). For discrete variables, the CDF is a step function."
//   },
//   obj5: {
//     question: "How do you compute the expected value and variance from a PMF?",
//     answer: "The expected value is E[X] = sum of k times p_X(k) over all values k in the support. The variance is Var(X) = sum of (k minus E[X]) squared times p_X(k), or equivalently E[X squared] minus (E[X]) squared. Both summaries are computed directly from the PMF by weighting outcomes by their probabilities."
//   },
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Probability Mass Function (PMF)",
//     "description": "Learn the probability mass function: definition, axioms, support, PMF-CDF relationship, expected value, variance, transformations, and common discrete PMFs.",
//     "url": "https://www.learnmathclass.com/probability/probability-function/pmf",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Probability Mass Function"
//     },
//     "teaches": [
//       "Definition of the PMF and the distinction between mass and density",
//       "Support of a discrete random variable and the two fundamental axioms of a PMF",
//       "Computing point probabilities, range probabilities, and using the complement rule",
//       "Expected value, median, mode, variance, and standard deviation from a PMF",
//       "Transformations of discrete random variables and how to derive the PMF of Y = g(X)",
//       "Connection between PMF and CDF, and PMF shapes of binomial, geometric, Poisson, negative binomial, hypergeometric, and discrete uniform distributions"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Probability",
//         "item": "https://www.learnmathclass.com/probability"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Probability Function",
//         "item": "https://www.learnmathclass.com/probability/probability-function"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Probability Mass Function (PMF)",
//         "item": "https://www.learnmathclass.com/probability/probability-function/pmf"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }

// // const generalTable = `
// // <table style="border-collapse: collapse; margin: 20px auto; font-family: Arial, sans-serif; font-size: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
// //   <thead>
// //     <tr style="background: linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%);">
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">Sum (k)</th>
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">2</th>
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">3</th>
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">4</th>
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">5</th>
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">6</th>
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">7</th>
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">8</th>
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">9</th>
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">10</th>
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">11</th>
// //       <th style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; color: #495057;">12</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background-color: #ffffff;">
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; font-weight: 600; background-color: #f8f9fa; color: #495057;">p<sub>X</sub>(k)</td>
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">1/36</td>
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">2/36</td>
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">3/36</td>
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">4/36</td>
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">5/36</td>
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529; background-color: #e3f2fd; font-weight: 600;">6/36</td>
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">5/36</td>
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">4/36</td>
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">3/36</td>
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">2/36</td>
// //       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">1/36</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

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
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">6/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">5/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">4/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">3/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">2/36</td>
//       <td style="border: 2px solid #dee2e6; padding: 12px 16px; text-align: center; color: #212529;">1/36</td>
//     </tr>
//   </tbody>
// </table>
// `


//   return {
//   props:{
//      sectionsContent,
//      introContent,
//      generalTable,
//      faqQuestions,
//      schemas,
//      seoData: {
//        title: "Probability Mass Function (PMF) | Learn Math Class",
//        description: "Learn the probability mass function: definition, axioms, support, PMF-CDF relationship, expected value, variance, transformations, and common discrete PMFs.",
//        keywords: keyWords.join(", "),
//        url: "/probability/probability-function/pmf",
//        name: "Probability Mass Function (PMF)"
//      },
//    }
// }
//    }

// export default function PMFPage({seoData, sectionsContent, introContent, generalTable, faqQuestions, schemas}) {
    
//   const genericSections=[
//      {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//           sectionsContent.obj0.after,
//         ]
//     },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//                 <div key={'mass'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   pmfData['probability at points'].svg
//                   }} />,
//         ]
//     },
//     {
//         id:'14',
//         title:sectionsContent.obj14.title,
//         link:sectionsContent.obj14.link,
//         content:[
//           sectionsContent.obj14.content,
//            <div key={'mass vs density'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   pmfData['pmf vs pdf'].svg
//                   }} />,
//                 //    sectionsContent.obj14.after,

//                 //     <div key={'mass'} style={{
//                 //     textAlign: 'center',
//                 //     transform: 'scale(0.98)',
//                 //     transformOrigin: 'center',
//                 //     marginTop:'50px',
//                 //     marginLeft:'-150px'
//                 //   }} dangerouslySetInnerHTML={{ 
//                 //     __html:   pmfData['probability at points'].svg
//                 //   }} />,
//         ]
//     },
//      {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//           <div style={{transform:'scale(1.15)'}} dangerouslySetInnerHTML={{ __html: generalTable }} key="table" />,
//           sectionsContent.obj4.after,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//            <div key={'discrete'} style={{transform:'scale(0.8)'}}>
//                     <DiscreteProbabilityDistributions/>
//                   </div>,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
   
    
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   return (
//    <>
//   <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.learningResource)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Probability Mass Functions (PMF)</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//      <KeyTermsCard
//   id="0"
//   title={sectionsContent.obj0.title}
//   content={sectionsContent.obj0.content}
//   after={sectionsContent.obj0.after}
//   variant="light"
// />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// tables-optimized: v4 | 2026-05-22 | 7 tables (obj4 comparison, obj5 process, obj6 aggregation, obj7/8 aggregation, obj11 comparison, obj12 aggregation, summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import { pmfData } from '@/app/api/db/diagrams/pages/probability/probability-function/pmf/template'
import DiscreteProbabilityDistributions from '@/app/components/visualizations/probability/discrete-distribution/DiscreteProbabilityDistributions'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import discretePmfDiagrams from '@/app/components/visualizations/probability/discrete-distribution/discretePmfDiagrams'
import discreteCdfDiagrams from '@/app/components/visualizations/probability/discrete-distribution/CDFs/discreteCdfDiagrams'
import distributionExplorerDiagrams from '@/app/components/probability/explorers/distributions/distributionExplorerDiagrams'
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){
const keyWords = [
  "probability mass function",
  "PMF probability",
  "discrete probability distribution",
  "discrete random variable",
  "PMF formula",
  "PMF axioms",
  "PMF to CDF",
  "CDF to PMF",
  "PMF vs PDF",
  "expected value discrete",
  "variance discrete",
  "binomial PMF",
  "geometric PMF",
  "poisson PMF",
  "PMF transformations",
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- v4 TABLES ----------

  // obj4 — comparison: three representations of a PMF
  const representationsTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Representation</th>
      <th style="${tableHeaders.comparison}">Best for</th>
      <th style="${tableHeaders.comparison}">Form</th>
      <th style="${tableHeaders.comparison}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Graphical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">intuition; seeing shape, peaks, and tails</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vertical bars (lollipops) or impulses at each value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">six bars of height 1/6 for a fair die</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Functional</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">calculation; deriving properties analytically</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">explicit mathematical formula p<sub>X</sub>(k)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">p<sub>X</sub>(k) = (1&minus;p)<sup>k&minus;1</sup>&middot;p (geometric)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Tabular</td>
      <td style="padding: 12px 15px; color: #34495e;">lookup; concrete cases and empirical data</td>
      <td style="padding: 12px 15px; color: #34495e;">value-probability listing</td>
      <td style="padding: 12px 15px; color: #34495e;">the dice-sum table shown above</td>
    </tr>
  </tbody>
</table>
`

  // obj5 — process: 5-step construction of a PMF
  const constructionTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Step</th>
      <th style="${tableHeaders.aggregation}">Action</th>
      <th style="${tableHeaders.aggregation}">Example: 3 coin flips, X = number of heads</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Identify the random variable</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">let X = number of heads in 3 fair flips</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Determine the support</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">support = {0, 1, 2, 3}</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Assign a probability to each value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X=0) = 1/8; P(X=1) = 3/8; P(X=2) = 3/8; P(X=3) = 1/8</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Verify the <a href="/probability/axioms" style="${linkStyle}">axioms</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all probabilities &ge; 0 &#10003;; sum = 1/8 + 3/8 + 3/8 + 1/8 = 1 &#10003;</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; color: #34495e;">Write the PMF (formula or table)</td>
      <td style="padding: 12px 15px; color: #34495e;">p<sub>X</sub>(k) = C(3, k) &middot; (1/2)<sup>3</sup> for k &isin; {0, 1, 2, 3}</td>
    </tr>
  </tbody>
</table>
`

  // obj6 — aggregation: three calculation patterns
  const calculationsTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Probability type</th>
      <th style="${tableHeaders.aggregation}">Formula</th>
      <th style="${tableHeaders.aggregation}">Fair-die example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Single point</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X = k) = p<sub>X</sub>(k)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X = 4) = 1/6</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Range / event</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X &isin; A) = &Sigma;<sub>k &isin; A</sub> p<sub>X</sub>(k)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X &le; 3) = 1/6 + 1/6 + 1/6 = 1/2</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Complement</td>
      <td style="padding: 12px 15px; color: #34495e;">P(X &notin; A) = 1 &minus; P(X &isin; A)</td>
      <td style="padding: 12px 15px; color: #34495e;">P(X &gt; 3) = 1 &minus; 1/2 = 1/2</td>
    </tr>
  </tbody>
</table>
`

  // obj7/obj8 combined — aggregation: summary measures (location + spread)
  const measuresTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Measure</th>
      <th style="${tableHeaders.aggregation}">Category</th>
      <th style="${tableHeaders.aggregation}">What it captures</th>
      <th style="${tableHeaders.aggregation}">Formula from the PMF</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/expected-value" style="${linkStyle}">Expected value</a> (mean)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Location</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">center of mass &mdash; the probability-weighted average outcome</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[X] = &Sigma;<sub>k</sub> k &middot; p<sub>X</sub>(k)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Median</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Location</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">value that splits the probability into halves</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">smallest m with P(X &le; m) &ge; 0.5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Mode</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Location</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the most likely value (highest PMF)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">argmax<sub>k</sub> p<sub>X</sub>(k)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/variance" style="${linkStyle}">Variance</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Spread</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">average squared deviation from the mean</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Var(X) = &Sigma;<sub>k</sub> (k &minus; E[X])<sup>2</sup> &middot; p<sub>X</sub>(k)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Standard deviation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Spread</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">spread expressed in the same units as X</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&radic;Var(X)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Range</td>
      <td style="padding: 12px 15px; color: #34495e;">Spread</td>
      <td style="padding: 12px 15px; color: #34495e;">span of the support (ignores probability)</td>
      <td style="padding: 12px 15px; color: #34495e;">max(support) &minus; min(support)</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — comparison: 6 common discrete distributions
  const distributionsTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Distribution</th>
      <th style="${tableHeaders.comparison}">PMF</th>
      <th style="${tableHeaders.comparison}">Support</th>
      <th style="${tableHeaders.comparison}">Shape &amp; key behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/distributions/discrete/binomial" style="${linkStyle}">Binomial(n, p)</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, k) &middot; p<sup>k</sup>(1&minus;p)<sup>n&minus;k</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{0, 1, &hellip;, n}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bell-shaped at p = 0.5; peak near np; skewed when p &ne; 0.5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/distributions/discrete/geometric" style="${linkStyle}">Geometric(p)</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(1&minus;p)<sup>k&minus;1</sup> &middot; p</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{1, 2, 3, &hellip;}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">monotonically decreasing; peak at k = 1; exponential decay</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/distributions/discrete/poisson" style="${linkStyle}">Poisson(&lambda;)</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&lambda;<sup>k</sup> &middot; e<sup>&minus;&lambda;</sup> / k!</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{0, 1, 2, &hellip;}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rises to a peak near &lambda; then decays; approximately normal for large &lambda;</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/distributions/discrete/negative-binomial" style="${linkStyle}">Negative Binomial(r, p)</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(k&minus;1, r&minus;1) &middot; p<sup>r</sup>(1&minus;p)<sup>k&minus;r</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{r, r+1, r+2, &hellip;}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum of r geometrics; heavier tail than Poisson; reduces to geometric for r = 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/distributions/discrete/hypergeometric" style="${linkStyle}">Hypergeometric(N, K, n)</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(K, k) &middot; C(N&minus;K, n&minus;k) / C(N, n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bounded by N, K, n (max(0, n&minus;N+K) to min(n, K))</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unimodal; peak near n &middot; K/N; more concentrated than binomial (finite population)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/probability/distributions/discrete/uniform" style="${linkStyle}">Discrete Uniform(a, b)</a></td>
      <td style="padding: 12px 15px; color: #34495e;">1 / (b &minus; a + 1)</td>
      <td style="padding: 12px 15px; color: #34495e;">{a, a+1, &hellip;, b}</td>
      <td style="padding: 12px 15px; color: #34495e;">flat &mdash; every value equally likely; no peak</td>
    </tr>
  </tbody>
</table>
`

  // obj12 — aggregation: 6 common mistakes
  const mistakesTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Mistake</th>
      <th style="${tableHeaders.aggregation}">Wrong thinking</th>
      <th style="${tableHeaders.aggregation}">Correct view</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Confusing PMF with PDF</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">applying PMF formulas to continuous data</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the PMF is discrete-only; for continuous variables use a PDF, and P(X = x) = 0 for any single point</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Skipping axiom verification</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">assuming any function is a valid PMF</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">check p<sub>X</sub>(k) &ge; 0 everywhere and &Sigma; p<sub>X</sub>(k) = 1 before using</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Summing over the wrong set</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">including non-support values, or skipping support values that belong to A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum only over values in both A and the support &mdash; outside the support contributes zero</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Treating probabilities as fixed</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">assuming a distribution has one &ldquo;standard&rdquo; PMF</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parameters change the PMF entirely &mdash; binomial with p = 0.3 looks nothing like p = 0.7</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Confusing support with domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">summing over the whole real line, or over values where p<sub>X</sub> is zero</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">only the support matters; outside it the PMF is zero and contributes nothing</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Ignoring discrete structure</td>
      <td style="padding: 12px 15px; color: #34495e;">treating discrete variables as smooth or continuous</td>
      <td style="padding: 12px 15px; color: #34495e;">discrete values are isolated; P(2 &lt; X &lt; 3) may be exactly 0 if no value sits between 2 and 3</td>
    </tr>
  </tbody>
</table>
`

  // summary capstone — 8 aspects × statement × example/formula
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Aspect</th>
      <th style="${tableHeaders.summary}">Statement</th>
      <th style="${tableHeaders.summary}">Example or formula</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What a PMF is</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a function p<sub>X</sub>(x) = P(X = x) for a discrete random variable</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">fair die: p<sub>X</sub>(k) = 1/6 for k &isin; {1, &hellip;, 6}</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Support</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the set of values where p<sub>X</sub>(x) &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">finite ({1, &hellip;, 6}) or infinite countable ({1, 2, 3, &hellip;})</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Two axioms</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">non-negative everywhere; total over the support equals 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">p<sub>X</sub>(k) &ge; 0 for all k; &Sigma; p<sub>X</sub>(k) = 1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Three representations</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">graphical, functional, tabular &mdash; the same PMF viewed three ways</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bars at each value; a formula; a value-probability table</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Computing event probabilities</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum the PMF over the values that make up the event</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X &le; 3) for a die = p<sub>X</sub>(1) + p<sub>X</sub>(2) + p<sub>X</sub>(3) = 1/2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Summary measures</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">location (mean, median, mode) and spread (variance, SD, range) &mdash; all computed from the PMF</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[X] = &Sigma; k &middot; p<sub>X</sub>(k); Var(X) = &Sigma; (k &minus; E[X])<sup>2</sup> &middot; p<sub>X</sub>(k)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Connection to the <a href="/probability/cdf" style="${linkStyle}">CDF</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">accumulate the PMF to get the CDF; differ to recover the PMF</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">F<sub>X</sub>(x) = &Sigma;<sub>k &le; x</sub> p<sub>X</sub>(k); p<sub>X</sub>(k) = F<sub>X</sub>(k) &minus; F<sub>X</sub>(k<sup>&minus;</sup>)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Common forms</td>
      <td style="padding: 12px 15px; color: #34495e;">named discrete distributions, each with a characteristic PMF shape</td>
      <td style="padding: 12px 15px; color: #34495e;">binomial, geometric, Poisson, negative binomial, hypergeometric, discrete uniform</td>
    </tr>
  </tbody>
</table>
`

const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
- [Probability Mass Function](!/probability/definitions#probability_mass_function) — $p_X(x) = P(X = x)$ for discrete variables
- [Discrete Random Variable](!/probability/definitions#discrete_random_variable) — the type of variable described by a PMF
- [Cumulative Distribution Function](!/probability/definitions#cumulative_distribution_function) — $F_X(x)$, related to the PMF by summation
- [Expected Value](!/probability/definitions#expected_value) — $E[X]$, computed from the PMF
- [Variance](!/probability/definitions#variance) — $\\operatorname{Var}(X)$, computed from the PMF`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
  link: '',
},
 
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
 
  obj3: {
    title: `The Two Fundamental Axioms`,
    content: `
Every valid PMF must satisfy two non-negotiable rules. Break either one, and you don't have a PMF.

## Axiom 1: Non-Negativity

@academic[formula_callout:PMF Non-negativity
$$p_X(x) \\geq 0 \\text{ for all } x$$
/probability/formulas#pmf_non-negativity]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

Probabilities cannot be negative. Ever.

Each point gets zero or positive mass. If $p_X(5) = -0.2$, you've made an error. Fix it.

## Axiom 2: Normalization

@academic[formula_callout:PMF Normalization
$$\\sum_{x \\in \\text{Support}} p_X(x) = 1$$
/probability/formulas#pmf_normalization]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

All probabilities across the entire support must sum to exactly 1.

This is your total probability budget. You must allocate all of it, and you can't overspend.

@academic[example:Example
Fair die. $p_X(k) = \\frac{1}{6}$ for $k \\in \\{1,2,3,4,5,6\\}$.

Check: $6 \\times \\frac{1}{6} = 1$. ✓]@

@academic[example:Example
Loaded die with $p_X(6) = \\frac{1}{2}$ and $p_X(k) = \\frac{1}{10}$ for $k \\in \\{1,2,3,4,5\\}$.

Check: $\\frac{1}{2} + 5 \\times \\frac{1}{10} = \\frac{1}{2} + \\frac{1}{2} = 1$. ✓]@

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

@academic[formula_callout:Representations: The Three Views
$$p_X(k) = \\begin{cases} 
\\frac{1}{6} & \\text{if } k \\in \\{1, 2, 3, 4, 5, 6\\} \\\\
0 & \\text{otherwise}
\\end{cases}$$]@

Example: [Geometric distribution](!/probability/distributions/discrete/geometric):

@academic[formula_callout:Representations: The Three Views
$$p_X(k) = (1-p)^{k-1}p \\text{ for } k \\in \\{1, 2, 3, \\ldots\\}$$]@

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

@academic[example:Example
Fair coin, 3 flips.
• $P(X = 0) = \\frac{1}{8}$ (only TTT)
• $P(X = 1) = \\frac{3}{8}$ (HTT, THT, TTH)
• $P(X = 2) = \\frac{3}{8}$ (HHT, HTH, THH)
• $P(X = 3) = \\frac{1}{8}$ (only HHH)]@

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
 

  obj6: {
    title: `Calculations Using the PMF`,
    content: `
Once you have a PMF, you can compute probabilities for any [event](!/probability/events) involving the [random variable](!/probability/random-variables).

## Single Point Probabilities

The PMF directly gives the probability of any specific value.

$P(X = k) = p_X(k)$

@academic[example:Example
Roll a fair die. $P(X = 4) = \\frac{1}{6}$]@

## Range Probabilities

To find $P(X \\in A)$ for some set $A$, sum the PMF over all values in $A$.

$P(X \\in A) = \\sum_{k \\in A} p_X(k)$

Example: $P(X \\leq 3) = p_X(1) + p_X(2) + p_X(3) = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{2}$

Example: $P(2 \\leq X \\leq 5) = p_X(2) + p_X(3) + p_X(4) + p_X(5) = \\frac{4}{6} = \\frac{2}{3}$

## Complement Probabilities

To find $P(X \\notin A)$, use the complement rule.

$P(X \\notin A) = 1 - P(X \\in A)$

@academic[example:Example
$P(X > 3) = 1 - P(X \\leq 3) = 1 - \\frac{1}{2} = \\frac{1}{2}$]@

@academic[pitfall,aside:true,width:35%:Using the wrong complement
Writing $P(X > 3) = 1 - P(X < 3)$ leaves the face $3$ in neither event and gives $1 - \\frac{2}{6} = \\frac{2}{3}$. The complement of $X > 3$ is $X \\leq 3$, so $P(X > 3) = 1 - \\frac{1}{2} = \\frac{1}{2}$.
[Read more](!#12)]@

The complement rule needs the two events to split the support exactly: every value of $X$ lies in one of them and none lies in both. For the die, the faces $1, 2, 3$ make up the event $X \\leq 3$ and the faces $4, 5, 6$ make up its complement, three faces of mass $\\frac{1}{6}$ on each side.

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

@academic[formula_callout:Derived Properties: Location Measures
$$E[X] = \\sum_{k \\in \\text{Support}} k \\cdot p_X(k)$$]@

Think of it as the center of mass. Each value $k$ contributes based on its probability weight.

Example: Fair die. 

@academic[formula_callout:Derived Properties: Location Measures
$$E[X] = 1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{6} + 3 \\cdot \\frac{1}{6} + 4 \\cdot \\frac{1}{6} + 5 \\cdot \\frac{1}{6} + 6 \\cdot \\frac{1}{6} = \\frac{21}{6} = 3.5$$]@

The average outcome over many rolls is 3.5.

@academic[pitfall,aside:true,width:35%:Averaging the values without weights
For the loaded die, $\\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3.5$ treats every face as equally likely. Weighting each face by its probability, $E[X] = \\frac{1}{10}(1 + 2 + 3 + 4 + 5) + \\frac{1}{2} \\cdot 6 = 1.5 + 3 = 4.5$.
[Read more](!#12)]@

For the fair die every weight is the same, $\\frac{1}{6}$, so each face pulls on the balance point equally and the mean lands exactly in the middle of the support. When the weights differ, as on the loaded die from the axioms section, the faces that carry more probability pull the center of mass toward themselves.

## Median

The median is the value that splits the probability in half. It's the point where $P(X \\leq m) \\geq 0.5$ and $P(X \\geq m) \\geq 0.5$.

For discrete distributions, the median may not be unique if probability mass is concentrated at specific points.

@academic[example:Example
Fair die. The median is between 3 and 4, often reported as 3.5.]@

## Mode

The mode is the value with the highest probability.

@academic[formula_callout:Derived Properties: Location Measures
$$\\text{mode} = \\arg\\max_k p_X(k)$$]@

@academic[example:Example
Loaded die with $p_X(6) = \\frac{1}{2}$ and $p_X(k) = \\frac{1}{10}$ for $k \\in \\{1,2,3,4,5\\}$. Mode is 6.]@

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

@academic[formula_callout:Derived Properties: Spread Measures
$$\\text{Var}(X) = \\sum_{k \\in \\text{Support}} (k - E[X])^2 \\cdot p_X(k)$$]@

Each value's squared distance from the mean is weighted by its probability. High-probability values far from the mean increase variance significantly.

Computational shortcut: $\\text{Var}(X) = E[X^2] - (E[X])^2$

@academic[pitfall,aside:true,width:35%:Subtracting the mean instead of its square
For the fair die, $E[X^2] - E[X] = \\frac{91}{6} - 3.5 = \\frac{35}{3} \\approx 11.67$. The shortcut subtracts the squared mean: $\\frac{91}{6} - 3.5^2 = \\frac{35}{12} \\approx 2.92$.
[Read more](!#12)]@

For the fair die, the shortcut needs two averages taken with the same weights $\\frac{1}{6}$: $E[X^2]$, the average of the squared faces $1, 4, 9, 16, 25, 36$, which is $\\frac{91}{6}$, and the mean $E[X] = 3.5$ found in the location section. The shortcut saves computing six separate deviations from the mean and squaring each one.

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
If we take some [random variable](!/probability/random-variables) $X$ and apply function $g$ the result $Y=g(X)$ will be a new random variable.

## The Transformation Process

Start with random variable $X$ with PMF $p_X(x)$.

Apply function $g$ to get $Y = g(X)$.

The new PMF $p_Y(y)$ is found by collecting all the probability mass from $X$ values that map to each $y$ value.

@academic[formula_callout:Transformations
$$p_Y(y) = \\sum_{x: g(x) = y} p_X(x)$$]@

Sum over all $x$ values that produce the same $y$ after transformation.

## Linear Transformations

For $Y = aX + b$ where $a \\neq 0$:

@academic[formula_callout:Transformations
$$p_Y(y) = p_X\\left(\\frac{y - b}{a}\\right)$$]@

The support shifts and scales accordingly.

Example: If $X$ is a fair die, then $Y = 2X$ has support $\\{2, 4, 6, 8, 10, 12\\}$ with $p_Y(k) = \\frac{1}{6}$ for each value.

Example: $Y = X + 3$ shifts the die to support $\\{4, 5, 6, 7, 8, 9\\}$ with probabilities unchanged.

## Non-Injective Transformations

When multiple $x$ values map to the same $y$, their probabilities combine.

@academic[example:Example
$X$ is a fair die, $Y = (X - 3.5)^2$ (squared distance from mean).

Multiple values map to the same squared distance:
• $p_Y(6.25) = p_X(1) + p_X(6) = \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$
• $p_Y(2.25) = p_X(2) + p_X(5) = \\frac{1}{3}$
• $p_Y(0.25) = p_X(3) + p_X(4) = \\frac{1}{3}$]@

## Effect on Expected Value

For any transformation $g$:

@academic[formula_callout:LOTUS Discrete
$$E[g(X)] = \\sum_{x} g(x) \\cdot p_X(x)$$
/probability/formulas#lotus_discrete]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

You don't need to find $p_Y(y)$ first. Work directly with the original PMF.

Linear transformations follow: $E[aX + b] = aE[X] + b$

@academic[pitfall,aside:true,width:35%:Applying the function to the mean
For $Y = (X - 3.5)^2$, plugging in the mean gives $(E[X] - 3.5)^2 = 0$, yet $Y$ is never $0$. Averaging $g(x)$ over the PMF gives $E[Y] = \\frac{0.25 + 2.25 + 6.25}{3} = \\frac{35}{12}$.
[Read more](!#12)]@

The linear rule lets the mean pass straight through the transformation: scale and shift $X$, and its mean is scaled and shifted in the same way. The squared distance $Y = (X - 3.5)^2$ from the example above is not of this form. It bends the number line, folding faces from both sides of $3.5$ onto the same value.

## Key Insight

Transformations create new [random variables](!/probability/random-variables), but the underlying probability structure stays connected to the original PMF. You're redistributing the same total probability mass, just arranging it differently.
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

@academic[formula_callout:Connection to CDF
$$F_X(x) = P(X \\leq x) = \\sum_{k \\leq x} p_X(k)$$]@

The CDF at any point equals the sum of all PMF values up to and including that point.

@academic[example:Example
Fair die.
- $F_X(3) = p_X(1) + p_X(2) + p_X(3) = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{2}$
- $F_X(5.7) = p_X(1) + \\cdots + p_X(5) = \\frac{5}{6}$]@

@academic[rule_plain:The CDF is a step function for discrete variables—it jumps at each value in the support, with jump height equal to the PMF at that point.]@

## From CDF to PMF

Recover the PMF by taking differences in the CDF:

@academic[formula_callout:Connection to CDF
$$p_X(k) = F_X(k) - F_X(k^-)$$]@

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

The PMF starts at $k=r$ (the minimum possible value). For $r = 1$ it decreases from there; for $r \\geq 2$ it first rises whenever $p < 1 - \\frac{1}{r}$, peaks, and then declines. This is essentially a sum of $r$ independent geometric [random variables](!/probability/random-variables), so its shape resembles a widened, shifted geometric distribution. As $r$ increases, the mode shifts rightward and the distribution spreads out. The parameter $p$ controls the decay rate: high $p$ produces fast decay and concentration near $r$, while low $p$ produces slow decay and a long tail. When $r=1$, this reduces exactly to the geometric distribution. The PMF has heavier tails than the [Poisson](!/probability/distributions/discrete/poisson), making it useful for overdispersed count data. The ratio test shows probabilities eventually decrease monotonically, though the initial behavior depends on both parameters.

[Read More About Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial)

## Hypergeometric Distribution

PMF: $p_X(k) = \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$

The PMF is unimodal with a peak near $n \\cdot \\frac{K}{N}$, the expected proportion of successes. The shape closely resembles the [binomial](!/probability/distributions/discrete/binomial) distribution but is slightly more concentrated—sampling without replacement reduces [variance](!/probability/variance). Unlike binomial, the hypergeometric support is finite and bounded by the population constraints: $k$ cannot exceed either $K$ (total successes available) or $n$ (sample size). As the population size $N$ grows relative to sample size $n$, the hypergeometric PMF converges to binomial with $p = \\frac{K}{N}$. For small populations or large samples, the distinction from binomial becomes significant. The PMF is symmetric when $K = \\frac{N}{2}$, left-skewed when $K > \\frac{N}{2}$, and right-skewed when $K < \\frac{N}{2}$. The finite population creates a correction factor that shrinks variance compared to binomial sampling with replacement.

[Read More About Hypergeometric Distribution](!/probability/distributions/discrete/hypergeometric)

## Discrete Uniform Distribution

PMF: $p_X(k) = \\frac{1}{n}$ for $k \\in \\{a, a+1, \\ldots, b\\}$ where $n = b - a + 1$

The PMF is completely flat—constant probability across the entire support. No value is more likely than any other, so there is no single peak: every value in the support is a mode. This represents maximum uncertainty given only knowledge of the support boundaries. The PMF has zero skewness and is perfectly symmetric around the midpoint $\\frac{a+b}{2}$. Adding or removing even one value from the support changes all probabilities—with $n$ values, each gets exactly $\\frac{1}{n}$ of the total probability mass. The uniform PMF serves as a reference distribution: deviations from uniformity indicate structure or bias in the data. Despite its simplicity, the discrete uniform appears frequently in practice: fair dice, random selection, lottery draws. The PMF provides no information about which specific value will occur—all are equally plausible.

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

**Using the wrong complement**

The probability of an event is found as one minus the probability of the opposite event, but the opposite event is written with the wrong inequality, so a boundary value falls into neither event.

Wrong working: for a fair die,
$$P(X > 3) = 1 - P(X < 3) = 1 - \\frac{2}{6} = \\frac{2}{3}$$

Right working: the complement of $X > 3$ is $X \\leq 3$, the faces $1, 2, 3$.
$$P(X > 3) = 1 - P(X \\leq 3) = 1 - \\frac{3}{6} = \\frac{1}{2}$$

Why it happens: the opposite of "greater than" is read as "less than", and for continuous variables that slip costs nothing, since a single point has probability zero. For a discrete variable the boundary value carries its own mass.

How to check: list the values of the event and of its complement. Together they must cover the support exactly once: here $\\{4, 5, 6\\}$ and $\\{1, 2, 3\\}$. With $X < 3$ the face $3$ is in neither list, and the wrong answer exceeds the direct count $p_X(4) + p_X(5) + p_X(6) = \\frac{1}{2}$ by exactly $p_X(3) = \\frac{1}{6}$.

**Averaging the values without weights**

The expected value is taken as the plain average of the values in the support, as if each were equally likely, and the PMF is not used.

Wrong working: for the loaded die with $p_X(6) = \\frac{1}{2}$ and $p_X(k) = \\frac{1}{10}$ for $k \\in \\{1, 2, 3, 4, 5\\}$,
$$E[X] = \\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3.5$$

Right working: each value is multiplied by its probability.
$$E[X] = \\frac{1}{10}(1 + 2 + 3 + 4 + 5) + \\frac{1}{2} \\cdot 6 = 1.5 + 3 = 4.5$$

Why it happens: for a fair die the plain average and the weighted average agree, and the fair die is usually the first example met.

How to check: compare the answer with where the mass sits. Half the probability is on the face $6$, so the mean must lie well above the midpoint $3.5$ of the faces.

**Subtracting the mean instead of its square**

In the shortcut $\\text{Var}(X) = E[X^2] - (E[X])^2$, the mean is subtracted as it is, without being squared.

Wrong working: for a fair die, $E[X^2] = \\frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\frac{91}{6}$ and $E[X] = 3.5$, so
$$\\text{Var}(X) = \\frac{91}{6} - 3.5 = \\frac{35}{3} \\approx 11.67$$

Right working: the mean is squared before it is subtracted.
$$\\text{Var}(X) = \\frac{91}{6} - 3.5^2 = \\frac{182}{12} - \\frac{147}{12} = \\frac{35}{12} \\approx 2.92$$

Why it happens: the formula holds two quantities that look alike, $E[X^2]$ and $(E[X])^2$, and after the work of computing $E[X^2]$ the second square is easy to drop.

How to check: take the square root. The wrong variance gives a standard deviation of about $3.42$, more than the largest distance of any face from the mean, $6 - 3.5 = 2.5$. The right one gives $\\sqrt{35/12} \\approx 1.71$, the value quoted in the standard deviation section.

**Applying the function to the mean**

The expected value of $g(X)$ is needed, and $g$ is applied to $E[X]$ instead of to each value of $X$ before averaging.

Wrong working: for a fair die and $Y = (X - 3.5)^2$,
$$E[Y] = (E[X] - 3.5)^2 = (3.5 - 3.5)^2 = 0$$

Right working: by LOTUS, each value $g(x)$ is weighted by $p_X(x) = \\frac{1}{6}$.
$$E[Y] = \\frac{6.25 + 2.25 + 0.25 + 0.25 + 2.25 + 6.25}{6} = \\frac{17.5}{6} = \\frac{35}{12}$$

Why it happens: for a linear function the shortcut is correct, $E[aX + b] = aE[X] + b$, and it is easy to carry it over to functions that are not linear.

How to check: look at the values $Y$ can take. $Y$ is always $0.25$, $2.25$ or $6.25$, and an expected value lies between the smallest and the largest value of the variable, so $E[Y]$ cannot be $0$.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj13: {
    title: `PMF Notation`,
    lead: `Three marks on this page are not about $p$ itself but about the set it is summed over, and each writes that set a different way.`,
    inherited: `The capital/lowercase split $X$ versus $x$, the operator $P(\\cdot)$ and the mass/density pair $p$ versus $f$ all belong to [the probability function](!/probability/probability-function#notation). The cumulative $F_X$ and the $\\leq$ convention are at [the CDF](!/probability/cdf#notation), and the signature $X: \\Omega \\to \\mathbb{R}$ at [random variables](!/probability/random-variables#notation).`,
    entries: [
      {
        id: `support-set-builder`,
        tex: `$\\{x : p_X(x) > 0\\}$`,
        read: `the set of x such that p of x is greater than zero — the support of X`,
        means: `The support is defined by a condition, not listed. The strict $> 0$ is the whole definition: a value belongs exactly when it carries probability, so values the variable can never take are excluded rather than assigned zero.`,
        cases: `The PMF itself is defined everywhere and returns $0$ off the support, so the function's domain and its support are different sets. Only the support matters in a sum, since the rest contributes nothing.`,
        alsoWritten: `Written $\\operatorname{supp}(X)$, or named $S$ or $S_X$ and then used as a set. Concrete supports are given as rosters instead — $\\{1,2,3,4,5,6\\}$ for a die, $\\{0,1,2,\\ldots\\}$ with an ellipsis when infinite.`,
        confusedWith: `Reading the support as the list of values the variable **is** rather than the values it **can be with positive probability**. A value sitting inside the roster but carrying probability $0$ is not in the support.`,
        sameGlyphElsewhere: ``,
      },
      {
        id: `sum-over-a-set`,
        tex: `$\\sum_{x \\in \\text{Support}} p_X(x) = 1$`,
        read: `the sum of p of x, over all x in the support, equals one`,
        means: `The index under the sigma is a **set membership**, not a counter running from one bound to another. There is no start value and no end value — the sum ranges over whatever the support contains, which may be finite or infinite.`,
        cases: `Because off-support values contribute $0$, summing over the support and summing over every real $x$ give the same answer. The support form is written because it is the one that can actually be computed.`,
        alsoWritten: `Compressed to $\\sum_x p_X(x) = 1$ with the set left implicit, or spelled $\\sum_{k=0}^{n}$ once the support is known to be a run of integers.`,
        confusedWith: `Treating it as an ordinary indexed sum and looking for the limits. There are none to find; the limits are replaced by a membership test.`,
        sameGlyphElsewhere: ``,
      },
      {
        id: `sum-over-a-condition`,
        tex: `$p_Y(y) = \\sum_{x\\,:\\,g(x) = y} p_X(x)$`,
        read: `p of y equals the sum of p of x over every x for which g of x equals y`,
        means: `Here the index is a **condition on the answer**: collect every input the transformation sends to this particular $y$, and add their probabilities. The colon reads **such that**, the same role it plays in the support above.`,
        cases: `When $g$ is one-to-one the condition picks out a single $x$ and the sum has one term, which is why the linear case collapses to $p_X\\!\\left(\\frac{y-b}{a}\\right)$ with no sigma at all. The sum is there for the many-to-one case, where probability from several inputs piles onto one output.`,
        alsoWritten: `Written $\\sum_{x \\in g^{-1}(y)}$ using the preimage, which says the same thing as a set rather than as a test.`,
        confusedWith: `Expecting $p_Y$ to be $p_X$ with $y$ substituted in. Transforming a variable moves mass and can merge it; the sigma is the merging.`,
        sameGlyphElsewhere: ``,
      },
    ],
    symbolsHref: `/math-symbols/probability`,
    symbolsLabel: `All probability symbols`,
    parentHref: `/probability/probability-function`,
    parentLabel: `Probability function`,
    legacy: `The PMF uses specific notation to map outcomes to probabilities.

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

The full account of these marks — the mass/density split, the subscript conventions, and the confusions they invite — lives at [probability function notation](!/probability/probability-function#notation).

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
  summary: {
    title: `PMF at a Glance`,
    content: `The page has unpacked the probability mass function from many angles — from its defining axioms and three modes of representation through summary measures, transformations, and the family of common discrete distributions. The table below collects the essentials into a single reference card, pairing each aspect of the PMF with its concise statement and a concrete formula or example.`,
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
  title: " Probability in the Discrete Case",
  content: `
 When a random variable can take only isolated, countable values, probability is assigned directly to those values rather than spread over intervals. Each possible outcome carries a specific “mass” that reflects how likely it is to occur.

This page develops the Probability Mass Function (PMF) as the fundamental object governing discrete random variables. It shows how probability is distributed across individual points, how these masses must satisfy basic axioms, and how they support calculations such as event probabilities, averages, and variability. The emphasis is on understanding the structure and behavior of discrete probability models, not just listing particular distributions.
  `
}


// FAQ pass: the definition, the axioms, the CDF connection and the
// expectation/variance formulas each name their own h2. The PMF-vs-PDF
// question goes on two counts: this page has a "Mass vs. Density" heading,
// and the parent page owns the comparison since it spans both children.
// Replaced with discrete-specific traps from Common Mistakes; the notation
// section here defers to probability-function#notation for the P/p split.
const faqQuestions = {
  obj1: {
    question: "Does P(X > 4) include 4?",
    answer: "No — a strict inequality excludes the endpoint. For a die, P(X > 4) is p(5) + p(6), not p(4) + p(5) + p(6). This matters far more for discrete variables than continuous ones: dropping or adding a single value changes the answer by that value's whole probability, whereas for a continuous variable an endpoint contributes nothing.",
    sectionId: "12"
  },
  obj2: {
    question: "Why can P(2 < X < 3) be zero for a discrete variable?",
    answer: "Because a discrete variable takes isolated values, and there may be nothing between 2 and 3 for it to land on. An interval containing no point of the support carries no probability at all. Continuous variables never behave this way — any interval of positive length inside their support carries positive probability.",
    sectionId: "12"
  },
  obj3: {
    question: "What is the difference between the support and the domain of a PMF?",
    answer: "The PMF is technically defined everywhere — it returns 0 outside the values the variable can take. The support is the smaller set where p_X(k) > 0. Only the support matters for calculations, since summing over anything else adds zeros. The two words are often used loosely as synonyms, but the distinction saves wasted work on infinite domains.",
    sectionId: "2"
  },
  obj4: {
    question: "When do you need the subscript in p_X(x)?",
    answer: "Only when more than one variable is in play. The subscript names which variable the function belongs to, so p_X(x) and p_Y(y) stay distinct on the same page. With a single variable in context you can drop it and write p(x). It becomes mandatory once joint and marginal functions appear together.",
    sectionId: "13"
  },
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Probability Mass Function (PMF)",
    "description": "Learn the probability mass function: definition, axioms, support, PMF-CDF relationship, expected value, variance, transformations, and common discrete PMFs.",
    "url": "https://www.learnmathclass.com/probability/probability-function/pmf",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Probability Mass Function"
    },
    "teaches": [
      "Definition of the PMF and the distinction between mass and density",
      "Support of a discrete random variable and the two fundamental axioms of a PMF",
      "Computing point probabilities, range probabilities, and using the complement rule",
      "Expected value, median, mode, variance, and standard deviation from a PMF",
      "Transformations of discrete random variables and how to derive the PMF of Y = g(X)",
      "Connection between PMF and CDF, and PMF shapes of binomial, geometric, Poisson, negative binomial, hypergeometric, and discrete uniform distributions"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
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
        "name": "Probability Function",
        "item": "https://www.learnmathclass.com/probability/probability-function"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Probability Mass Function (PMF)",
        "item": "https://www.learnmathclass.com/probability/probability-function/pmf"
      }
    ]
  }
}

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



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const pfBox = (h, a, b, c) => [
    { fn: () => h, from: a, to: b, ends: [null, null], color: c },
    { fn: (x) => (x - a) * 1e6, from: a, to: a + h / 1e6, ends: [null, null], color: c },
    { fn: (x) => (b - x) * 1e6, from: b - h / 1e6, to: b, ends: [null, null], color: c }];
  const pfPx = (x, w) => x / w * 388;
  const fpDieRange = { kind: 'pieces', svgTitle: 'Fair die PMF with the bars for 2, 3, 4 and 5 highlighted: P(2 to 5) = 4/6', xRange: [-0.5, 7], yRange: [0, 0.25], xLetter: 'k',
    pieces: [{ fn: () => 0, from: -0.5, to: -0.5, ends: [null, null], color: 'g' }],
    yBars: [1, 2, 3, 4, 5, 6].map((k) => ({ from: 0, to: 1 / 6, color: k >= 2 && k <= 5 ? 'r' : 'f', dx: pfPx(k, 7.5) })),
    notes: [{ x: 0.3, y: 0.235, text: 'P(2 ≤ X ≤ 5) = 1/6 + 1/6 + 1/6 + 1/6 = 4/6', pos: 'e', color: 'r' }, { x: 0.3, y: 0.205, text: 'endpoints 2 and 5 included', pos: 'e' }],
    caption: 'A range probability: add the bars inside it' };
  const fpSquareCollapse = { kind: 'pieces', svgTitle: 'Y = (X - 3.5) squared for a fair die: faces 3 and 4 give 0.25, faces 2 and 5 give 2.25, faces 1 and 6 give 6.25, each with probability 1/3', xRange: [-0.5, 7], yRange: [0, 0.42], xLetter: 'y', yLetter: 'P(Y = y)',
    pieces: [{ fn: () => 0, from: -0.5, to: -0.5, ends: [null, null], color: 'g' }],
    yBars: [0.25, 2.25, 6.25].map((y) => ({ from: 0, to: 1 / 3, color: 'r', dx: pfPx(y, 7.5) })),
    notes: [{ x: 0.2, y: 0.36, text: 'faces 3, 4', pos: 'ne', color: 'r' }, { x: 2.25, y: 0.36, text: 'faces 2, 5', pos: 'n', color: 'r' }, { x: 6.25, y: 0.36, text: 'faces 1, 6', pos: 'n', color: 'r' }, { x: 3, y: 0.25, text: 'two faces per value:', pos: 'e' }, { x: 3, y: 0.22, text: '1/6 + 1/6 = 1/3 each', pos: 'e' }],
    caption: 'Six faces, three values: the probabilities pool' };
  const demoUnits = {
    u_1_0: demoUnitFrame({
      svg: discretePmfDiagrams.binomial,
      caption: 'Binomial PMF, n = 10, p = 0.5',
      text: 'Each bar is a weight placed on a value of the discrete variable: the height at k is P(X = k), the weights add to 1 and the number line between the integers carries nothing. Here the heaviest weight sits at 5. Switch families and watch the weights redistribute on the',
      href: '/probability/visual-tools/probability-function/discrete',
      linkText: 'PMF visualizer',
    }),
    u_10_1: demoUnitFrame({
      svg: discreteCdfDiagrams.binomial,
      caption: 'Binomial CDF, n = 10, p = 0.5',
      text: 'Adding the PMF bars from the left produces a staircase: each riser at k has height P(X = k), so the PMF is recovered from the CDF by taking differences of consecutive steps, and the CDF from the PMF by running sums. The two descriptions carry the same information. Compare the risers with the bars on the',
      href: '/probability/visual-tools/cdf/discrete',
      linkText: 'discrete CDF explorer',
    }),
    u_11_2: demoUnitFrame({
      svg: distributionExplorerDiagrams['uniform-discrete-pmf'],
      caption: 'Discrete uniform PMF with its mean marked',
      text: 'The catalogue of discrete mass functions ranges from the flat uniform pattern shown here through the peaked binomial and Poisson shapes to the decaying geometric tail; each is a different rule for splitting unit mass across integers. The explorer marks the mean of each. Compare the six families side by side on the',
      href: '/probability/visual-tools/distributions/uniform-discrete',
      linkText: 'distribution explorer',
    }),
    dieRange: demoUnitFrame({
      svg: renderFunctionPlotV4(fpDieRange),
      caption: 'A range probability as bars',
      text: 'The fair-die PMF with the four bars for 2, 3, 4 and 5 picked out. A range probability is the sum of the bars inside the range: P(2 &#8804; X &#8804; 5) = 4 &#183; 1/6 = 2/3. Both endpoints count because they are possible values; with a PMF, &#8804; and &lt; give different answers.',
    }),
    squareCollapse: demoUnitFrame({
      svg: renderFunctionPlotV4(fpSquareCollapse),
      caption: 'A transformation that merges values',
      text: 'Y = (X &#8722; 3.5)&#178; for a fair die. Faces 3 and 4 are both 0.5 from the mean, so both give Y = 0.25; faces 2 and 5 give 2.25; faces 1 and 6 give 6.25. Six equally likely faces become three values, each collecting two faces: p_Y(y) = 1/6 + 1/6 = 1/3.',
    }),
  };

  const pmfViewTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Three views of one PMF',
    preface: 'A probability mass function can be drawn as bars, written as a formula, or laid out as a table.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Every view sums to 1',
    conclusion: 'Bar heights, formula values and table entries are all probabilities, and in every view they add up to 1.',
    root: { name: 'Representing a PMF', sub: '3 views' },
    children: [
      { id: 'graph', name: 'Graphical', items: [ { label: 'Reads', text: 'bars; height = probability' } ] },
      { id: 'func', name: 'Functional', items: [ { label: 'Reads', text: 'a formula $p_X(k)$' }, { label: 'Examples', text: 'a die, the geometric distribution' } ] },
      { id: 'tab', name: 'Tabular', items: [ { label: 'Reads', text: 'a value-probability table' }, { label: 'Example', text: 'the sum of two dice' } ] },
    ],
  };

  return {
  props:{
    pmfViewTree,
    demoUnits,
     sectionsContent,
     introContent,
     generalTable,
     representationsTable,
     constructionTable,
     calculationsTable,
     measuresTable,
     distributionsTable,
     mistakesTable,
     summaryTable,
     faqQuestions,
     schemas,
     seoData: {
       title: "Probability Mass Function (PMF) | Learn Math Class",
       description: "Learn the probability mass function: definition, axioms, support, PMF-CDF relationship, expected value, variance, transformations, and common discrete PMFs.",
       keywords: keyWords.join(", "),
       url: "/probability/probability-function/pmf",
       name: "Probability Mass Function (PMF)"
     },
   }
}
   }

export default function PMFPage({pmfViewTree, 
  seoData,
  sectionsContent,
  introContent,
  generalTable,
  representationsTable,
  constructionTable,
  calculationsTable,
  measuresTable,
  distributionsTable,
  mistakesTable,
  summaryTable,
  faqQuestions,
  schemas, demoUnits
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
          sectionsContent.obj0.after,
        ]
    },
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
                  <div key={'unit-u_1_0'} dangerouslySetInnerHTML={{ __html: demoUnits.u_1_0 }} />,
          `The set of values that carry weight is the support, defined next.`,
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
        link:'',
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.obj13.title}
            lead={sectionsContent.obj13.lead}
            inherited={sectionsContent.obj13.inherited}
            entries={sectionsContent.obj13.entries}
            symbolsHref={sectionsContent.obj13.symbolsHref}
            symbolsLabel={sectionsContent.obj13.symbolsLabel}
            parentHref={sectionsContent.obj13.parentHref}
            parentLabel={sectionsContent.obj13.parentLabel}
            theme={'navy'}
          />,
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
          <div key={'representations-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: representationsTable }} />,
          <DiagramFrame
            key={'obj4-diagram'}
            id="pmf-representations-tree"
            title="Three views of a PMF"
            source="/probability/probability-function/pmf"
          >
            <TopDownTree data={pmfViewTree} />
          </DiagramFrame>,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'construction-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: constructionTable }} />,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'calculations-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: calculationsTable }} />,
                  <div key={'unit-dieRange'} dangerouslySetInnerHTML={{ __html: demoUnits.dieRange }} />,
            `P(2 < X < 5) would drop both end bars: 2/6.`,
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
          <div key={'measures-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: measuresTable }} />,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
                  <div key={'unit-squareCollapse'} dangerouslySetInnerHTML={{ __html: demoUnits.squareCollapse }} />,
          `E[Y] = (0.25 + 2.25 + 6.25)/3 = 35/12, the variance of the die.`,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
                  <div key={'unit-u_10_1'} dangerouslySetInnerHTML={{ __html: demoUnits.u_10_1 }} />,
          `The common discrete families are catalogued next.`,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div key={'distributions-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: distributionsTable }} />,
           <div key={'discrete'} style={{transform:'scale(0.8)'}}>
                    <DiscreteProbabilityDistributions/>
                  </div>,
                  <div key={'unit-u_11_2'} dangerouslySetInnerHTML={{ __html: demoUnits.u_11_2 }} />,
          `Common mistakes with these functions are collected next.`,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key={'mistakes-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: mistakesTable }} />,
        ]
    },
    {
        id:'summary',
        title:sectionsContent.summary.title,
        link:sectionsContent.summary.link,
        content:[
          sectionsContent.summary.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`PMF FAQ`,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
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
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Probability Mass Functions (PMF)</h1>
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
     <KeyTermsCard
  id="0"
  title={sectionsContent.obj0.title}
  content={sectionsContent.obj0.content}
  after={sectionsContent.obj0.after}
  variant="light"
/>
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}