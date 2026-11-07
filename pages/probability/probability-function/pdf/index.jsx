import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import continuousPdfDiagrams from '@/app/components/visualizations/probability/continuous-distribution/continuousPdfDiagrams'
import continuousCdfDiagrams from '@/app/components/visualizations/probability/continuous-distribution/CDF/continuousCdfDiagrams'
import distributionExplorerDiagrams from '@/app/components/probability/explorers/distributions/distributionExplorerDiagrams'
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import FormulaSheet from '@/app/components/infographics/FormulaSheet/FormulaSheet'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import NotationCheatSheet from '@/app/components/infographics/NotationCheatSheet/NotationCheatSheet'
import probRandomVarsNotationSheet from '@/app/components/infographics/NotationCheatSheet/sheets/probability-random-variables'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import { tableHeaders } from '@/app/styles/theme'
import TheoremCard from '@/app/components/infographics/TheoremCard/TheoremCard'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'


export async function getStaticProps(){
const keyWords = [
  "probability density function",
  "PDF probability",
  "continuous probability distribution",
  "continuous random variable",
  "probability density",
  "PDF formula",
  "PDF axioms",
  "PDF to CDF",
  "CDF to PDF",
  "change of variables PDF",
  "Jacobian transformation PDF",
  "expected value continuous",
  "variance continuous",
  "uniform exponential normal PDF",
  "area under PDF curve",
]

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





// Concept introduction (section 1, "Definition & Physical Intuition") —
// template C, failure first. Running instance: X uniform on [0, 0.5], whose
// density is 2 everywhere. Old obj1 text is kept in sectionsContent.obj1,
// unused; its three headings, nine passages, three formula boxes, link, two
// examples, the u_1_0 demo frame, its line and the punchline are carried in
// unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciUniformTable = ciTableOpen(['interval', 'width', 'probability = 2 × width']) +
  ciRow(['[0.1, 0.2]', '0.1', '0.2']) +
  ciRow(['[0.1, 0.11]', '0.01', '0.02'], { shade: true }) +
  ciRow(['the single point 0.1', '0', '0'], { color: '#a4243b', cols: [2] }) +
  ciRow(['the whole of [0, 0.5]', '0.5', '1'], { shade: true, last: true, color: '#2563EB', cols: [2] }) +
  '</tbody></table>'

const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
- [Probability Density Function](!/probability/definitions#probability_density_function) — $f_X(x)$, density for continuous variables
- [PDF of a Transformed Variable](!/probability/definitions#pdf_of_transformed_variable) — density of $Y = g(X)$ derived from density of $X$
- [Continuous Random Variable](!/probability/definitions#continuous_random_variable) — the type described by a PDF
- [Cumulative Distribution Function](!/probability/definitions#cumulative_distribution_function) — $F_X(x)$, related to the PDF by integration
- [Expected Value](!/probability/definitions#expected_value) — $E[X]$, computed from the PDF
- [Variance](!/probability/definitions#variance) — $\\operatorname{Var}(X)$, computed from the PDF`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
  link: '',
},

  obj1: {
    title: `Definition & Physical Intuition`,
    content: `
## What is a PDF?

A PDF (Probability Density Function) describes how probability is distributed across a continuous [random variable](!/probability/random-variables). Unlike discrete variables where probability sits at specific points, continuous variables spread probability across intervals.

Think of it like the density of a material. A steel rod doesn't have "weight at a point"—it has density (mass per unit length). Similarly, a continuous random variable doesn't have "probability at a point"—it has probability density.

## The Zero Probability Paradox

For any specific value $a$:

@academic[formula_callout:Definition & Physical Intuition
$$P(X = a) = 0$$]@

This seems impossible. How can every individual outcome have zero probability, yet something must happen?

The resolution: Probability for continuous variables lives in intervals, not points. A single point is infinitesimally thin—it has no width, so it captures no probability mass. Just as a geometric point on a line has zero length, a single value in a continuous distribution has zero probability.

@academic[example:Example
Pick a random number between 0 and 1. What's $P(X = 0.5)$? Exactly zero. What's $P(0.49 < X < 0.51)$? Positive. Probability only exists across ranges.]@

## Density ≠ Probability

The PDF value $f(x)$ is **not** a probability. It's a density—a rate of probability per unit.

@academic[formula_callout:Probability of Interval Continuous
$$P(a \\leq X \\leq b) = \\int_a^b f(x)dx$$
/probability/formulas#probability_of_interval_continuous]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

Probability is the **area** under the curve, not the height. This means $f(x)$ can exceed 1, unlike a PMF where $p(x) \\leq 1$ always.

@academic[example:Example
Uniform [distribution](!/probability/distributions) on $[0, 0.5]$ has $f(x) = 2$. The density is 2, but the total probability integrates to 1.]@

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
 

  obj3: {
    title:`PDF Notation`,
    lead:`A function name with a subscript for the variable, and an integral wherever a probability is wanted — the notation itself says that a density is not a probability. All are catalogued among the [probability symbols](!/math-symbols/probability).`,
    inherited:`The full account of these marks — including the density-may-exceed-one warning — lives at [probability function notation](!/probability/probability-function#notation); the mass function $p_X(x)$ at [PMF notation](!/probability/probability-function/pmf#13).`,
    entries:[
      {
        id:'density',
        tex:`$f_X(x)$`,
        read:`f sub X of x — the density of X at x`,
        means:`The PDF of the random variable $X$ evaluated at the value $x$: a probability density at that point, not a probability.`,
        cases:`The subscript keeps several variables apart — $f_X(x)$, $f_Y(y)$, $f_T(t)$. With only one variable in play it can be dropped: $f(x)$.`,
        confusedWith:`The PMF $p(x)$. One needs integrating to give a probability; the other gives the probability directly.`,
      },
      {
        id:'interval-probability',
        tex:`$P(a \\leq X \\leq b)$`,
        read:`the probability that X lies between a and b`,
        means:`Probability comes from integrating the density over an interval: $P(a \\leq X \\leq b) = \\int_a^b f_X(x)\\,dx$.`,
      },
      {
        id:'point-probability',
        tex:`$P(X = a) = 0$`,
        read:`the probability that X equals a is zero`,
        means:`Point probabilities are always zero: $\\int_a^a f_X(x)\\,dx = 0$, whatever the density at $a$.`,
      },
    ],
    symbolsHref:`/math-symbols/probability`,
    symbolsLabel:`All probability symbols`,
    parentHref:`/probability`,
    parentLabel:`Probability`,
    content: `@academic[formula_callout:Notation
$$f_X(x)$$]@

@academic[formula_callout:Probability of Interval Continuous
$$P(a \\leq X \\leq b) = \\int_a^b f_X(x)dx$$
/probability/formulas#probability_of_interval_continuous]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,
    before: ``,
    after: ``,
    link: '',
  },
 

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

**Unbounded Support:** The random variable can take values extending to infinity in both directions.

Example: [Normal distribution](!/probability/distributions/continuous/normal) on $(-\\infty, \\infty)$. Support is the entire real line. Density never truly reaches zero, though it becomes negligible far from the mean.

**Half-Bounded Support:** Bounded on one side, unbounded on the other.

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) on $[0, \\infty)$. Support starts at 0 and extends infinitely rightward.

Example: Gamma distribution on $[0, \\infty)$.

## Why Support Matters

The support determines:
• Where to integrate when computing probabilities
• What values are possible vs. impossible
• The limits of integration: $P(X \\in A) = \\int_{A \\cap \\text{Support}} f_X(x)dx$

@academic[pitfall,aside:true,width:35%:Using the formula outside the support
Integrating $2e^{-2x}$ from $-\\infty$ to $1$ for an exponential with $\\lambda = 2$ diverges, because the formula grows without bound for $x < 0$. The density is $0$ there, so $P(X < 1) = \\int_0^1 2e^{-2x}\\,dx = 1 - e^{-2} \\approx 0.865$.
[Read more](!#pitfall-using-the-formula-outside-the-support)]@

When computing $P(X \\in A)$ for some set $A$, only integrate over the intersection of $A$ with the support. Outside the support contributes nothing—integrating over those regions just adds zeros.
    `,
    before: ``,
    after: ``,
    link: '',
  },
 

  obj5: {
    title: `The Two Fundamental Axioms`,
    content: `
Every valid PDF must satisfy two non-negotiable rules. Just like the [PMF](!/probability/probability-function/pmf#3) in the discrete case, the PDF must obey the same foundational constraints.

## Axiom 1: Non-Negativity

@academic[formula_callout:PDF Non-negativity
$$f_X(x) \\geq 0 \\text{ for all } x$$
/probability/formulas#pdf_non-negativity]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

Density cannot be negative. Ever.

Each point gets zero or positive density. If $f(5) = -0.3$, you've made an error. Fix it.

## Axiom 2: Normalization

@academic[formula_callout:PDF Normalization
$$\\int_{-\\infty}^{\\infty} f_X(x)dx = 1$$
/probability/formulas#pdf_normalization]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

The total area under the density curve must equal exactly 1.

This is your total probability budget. The entire curve must integrate to 1—no more, no less.

@academic[fact,aside:true,width:35%:A density need not fade far out
Let $f(x) = n$ on $\\left[n, n + \\frac{1}{n \\cdot 2^n}\\right]$ for each whole number $n \\geq 1$ and $0$ elsewhere. The rectangles have areas $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\ldots$, which add up to $1$, so $f$ is a valid density whose peaks grow without bound far out.]@

On an unbounded support the budget is spread over an infinitely long stretch of the line. The area out there is a sum of infinitely many pieces, one for each unit of length, and normalization only asks that these pieces add up to 1. It says nothing directly about how tall the curve may be at any particular place, near the center or far out in the tail.

@academic[example:Example
[Uniform distribution](!/probability/distributions/continuous/uniform) on $[0, 2]$ has $f(x) = \\frac{1}{2}$ for $x \\in [0,2]$.

Check: $\\int_0^2 \\frac{1}{2}dx = \\frac{1}{2} \\cdot 2 = 1$. ✓]@

@academic[example:Example
[Exponential distribution](!/probability/distributions/continuous/exponential) with $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$.

Check: $\\int_0^{\\infty} \\lambda e^{-\\lambda x}dx = \\lambda \\cdot \\frac{1}{\\lambda} = 1$. ✓]@

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

@academic[formula_callout:Representations: The Three Views
$$f(x) = \\begin{cases} 
\\frac{1}{b-a} & \\text{if } x \\in [a, b] \\\\
0 & \\text{otherwise}
\\end{cases}$$]@

Example: [Exponential distribution](!/probability/distributions/continuous/exponential):

@academic[formula_callout:Representations: The Three Views
$$f(x) = \\begin{cases} 
\\lambda e^{-\\lambda x} & \\text{if } x \\geq 0 \\\\
0 & \\text{if } x < 0
\\end{cases}$$]@

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

@academic[formula_callout:Building a PDF (From Story to Math)
$$f(t) = \\lambda e^{-\\lambda t} \\text{ for } t \\geq 0$$]@

**Step 4: Verify the Axioms**

Check non-negativity: Is $f(x) \\geq 0$ everywhere? Yes, exponential is always positive.

Check normalization: Does it integrate to 1?

@academic[formula_callout:Building a PDF (From Story to Math)
$$\\int_0^{\\infty} \\lambda e^{-\\lambda t}dt = \\lambda \\cdot \\frac{1}{\\lambda} = 1$$ ✓]@

See [axioms](!/probability/axioms) for the fundamental requirements.

**Step 5: Write the PDF in Standard Form**

Express the function clearly, including the support.

@academic[formula_callout:Building a PDF (From Story to Math)
$$f_T(t) = \\begin{cases} 
\\lambda e^{-\\lambda t} & \\text{if } t \\geq 0 \\\\
0 & \\text{if } t < 0
\\end{cases}$$]@

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
 
  obj8: {
    title: `Calculations Using the PDF`,
    content: `
Once you have a PDF, you can compute probabilities for any [event](!/probability/events) involving the [random variable](!/probability/random-variables). Unlike PMF, all calculations require integration.

## Interval Probabilities

The core calculation: probability over an interval equals the area under the curve.

@academic[formula_callout:Probability of Interval Continuous
$$P(a \\leq X \\leq b) = \\int_a^b f_X(x)dx$$
/probability/formulas#probability_of_interval_continuous]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[0, 10]$ with $f(x) = \\frac{1}{10}$.

@academic[formula_callout:Calculations Using the PDF
$$P(3 \\leq X \\leq 7) = \\int_3^7 \\frac{1}{10}dx = \\frac{1}{10} \\cdot 4 = 0.4$$]@

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) with $f(x) = 2e^{-2x}$ for $x \\geq 0$.

@academic[formula_callout:Calculations Using the PDF
$$P(1 \\leq X \\leq 3) = \\int_1^3 2e^{-2x}dx = [-e^{-2x}]_1^3 = e^{-2} - e^{-6} \\approx 0.133$$]@

@academic[pitfall,aside:true,width:35%:Dropping the minus sign of the antiderivative
Taking $e^{-2x}$ as the antiderivative of $2e^{-2x}$ gives $e^{-6} - e^{-2} \\approx -0.133$, a negative probability. The antiderivative is $-e^{-2x}$, so $P(1 \\leq X \\leq 3) = e^{-2} - e^{-6} \\approx 0.133$.
[Read more](!#pitfall-dropping-the-minus-sign-of-the-antiderivative)]@

The exponential example follows the pattern every interval probability uses: find an antiderivative of the density, evaluate it at the upper limit, and subtract its value at the lower limit. Because this density decreases, the interval $[1, 3]$ holds far less probability than the interval $[0, 2]$ of the same length, which holds $1 - e^{-4} \\approx 0.982$.

## Inequalities Are Irrelevant

For continuous variables, endpoint inclusion doesn't matter:

@academic[formula_callout:Calculations Using the PDF
$$P(X < a) = P(X \\leq a)$$]@
@academic[formula_callout:Calculations Using the PDF
$$P(X > a) = P(X \\geq a)$$]@
@academic[formula_callout:Calculations Using the PDF
$$P(a < X < b) = P(a \\leq X \\leq b)$$]@

Why? Because $P(X = a) = 0$ for any single point. Adding or removing a zero-probability point doesn't change the total.

@academic[example:Example
$P(X < 5) = P(X \\leq 5)$ exactly. No approximation, no difference.]@

## Tail Probabilities

Probability beyond a threshold:

@academic[formula_callout:Calculations Using the PDF
$$P(X > a) = \\int_a^{\\infty} f_X(x)dx = 1 - P(X \\leq a)$$]@

@academic[formula_callout:Calculations Using the PDF
$$P(X < a) = \\int_{-\\infty}^a f_X(x)dx$$]@

Example: [Exponential](!/probability/distributions/continuous/exponential) with $\\lambda = 0.5$.

@academic[formula_callout:Calculations Using the PDF
$$P(X > 2) = \\int_2^{\\infty} 0.5e^{-0.5x}dx = e^{-1} \\approx 0.368$$]@

## Complement Rule

Use the complement when integration is easier in the opposite direction:

@academic[formula_callout:Calculations Using the PDF
$$P(X \\notin A) = 1 - P(X \\in A)$$]@

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
 
  obj9: {
    title: `Derived Properties: Location Measures`,
    content: `
The PDF contains all the information about a [random variable](!/probability/random-variables). From it, we can compute summary measures that describe where the distribution is centered.

## Expected Value (Mean)

The [expected value](!/probability/expected-value) is the probability-weighted average across all possible values, computed via integration.

@academic[formula_callout:Expected Value (Continuous)
$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f_X(x)dx$$
/probability/formulas#expected_value_continuous]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

Each value $x$ contributes based on its density weight. Think of it as the balance point of the density curve.

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[0, 10]$ with $f(x) = \\frac{1}{10}$.

@academic[formula_callout:Derived Properties: Location Measures
$$E[X] = \\int_0^{10} x \\cdot \\frac{1}{10}dx = \\frac{1}{10} \\cdot \\frac{x^2}{2}\\Big|_0^{10} = \\frac{1}{10} \\cdot 50 = 5$$]@

The mean sits at the midpoint, as expected from symmetry.

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) with $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$.

@academic[formula_callout:Derived Properties: Location Measures
$$E[X] = \\int_0^{\\infty} x \\cdot \\lambda e^{-\\lambda x}dx = \\frac{1}{\\lambda}$$]@

The mean depends inversely on the rate parameter.

## Median

The median is the value $m$ that splits the probability in half.

@academic[formula_callout:Derived Properties: Location Measures
$$P(X \\leq m) = \\int_{-\\infty}^m f_X(x)dx = 0.5$$]@

It's the point where the [CDF](!/probability/cdf) equals 0.5.

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) with parameter $\\lambda$.

@academic[formula_callout:Derived Properties: Location Measures
$$\\int_0^m \\lambda e^{-\\lambda x}dx = 1 - e^{-\\lambda m} = 0.5$$]@

@academic[formula_callout:Derived Properties: Location Measures
$$e^{-\\lambda m} = 0.5 \\implies m = \\frac{\\ln(2)}{\\lambda}$$]@

For symmetric distributions, median equals mean. For skewed distributions, they differ.

## Mode

The mode is the value where the PDF reaches its maximum.

@academic[formula_callout:Derived Properties: Location Measures
$$\\text{mode} = \\arg\\max_x f_X(x)$$]@

Found by solving $f'_X(x) = 0$ and checking the second derivative, or at an end of the support when the density is highest there.

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
 
  obj10: {
    title: `Derived Properties: Spread Measures`,
    content: `
Location tells you where the distribution centers. Spread tells you how widely values scatter around that center.

## Variance

[Variance](!/probability/variance) quantifies the average squared deviation from the mean, computed through integration.

@academic[formula_callout:Derived Properties: Spread Measures
$$\\text{Var}(X) = \\int_{-\\infty}^{\\infty} (x - E[X])^2 \\cdot f_X(x)dx$$]@

Each squared distance from the mean is weighted by density. High-density regions far from the mean contribute heavily to variance.

Computational shortcut:

@academic[formula_callout:Variance Computational Formula
$$\\text{Var}(X) = E[X^2] - (E[X])^2$$
/probability/formulas#variance_computational_formula]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

where $E[X^2] = \\int_{-\\infty}^{\\infty} x^2 \\cdot f_X(x)dx$

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[a, b]$.

@academic[formula_callout:Continuous Uniform Variance
$$\\text{Var}(X) = \\frac{(b-a)^2}{12}$$
/probability/formulas#continuous_uniform_variance]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

Wider intervals produce larger variance.

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) with parameter $\\lambda$.

@academic[formula_callout:Exponential Variance
$$\\text{Var}(X) = \\frac{1}{\\lambda^2}$$
/probability/formulas#exponential_variance]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

Variance decreases as the rate parameter increases.

## Standard Deviation

Standard deviation is $\\sqrt{\\text{Var}(X)}$, bringing spread back to the original measurement units.

@academic[formula_callout:Derived Properties: Spread Measures
$$\\text{SD}(X) = \\sqrt{\\text{Var}(X)}$$]@

For the [exponential](!/probability/distributions/continuous/exponential): $\\text{SD}(X) = \\frac{1}{\\lambda}$

Standard deviation has the same dimensionality as $X$ itself, making interpretation more direct than variance.

## Interquartile Range

The IQR measures spread using percentiles rather than deviations from the mean.

@academic[formula_callout:Derived Properties: Spread Measures
$$\\text{IQR} = Q_3 - Q_1$$]@

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

@academic[formula_callout:PDF of Linear Transformation
$$f_Y(y) = \\frac{1}{|a|} f_X\\left(\\frac{y - b}{a}\\right)$$
/probability/formulas#pdf_of_linear_transformation]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

The factor $\\frac{1}{|a|}$ appears because scaling the variable by $a$ compresses or stretches the density axis.

Example: If $X$ is [uniform](!/probability/distributions/continuous/uniform) on $[0, 1]$ with $f_X(x) = 1$, then $Y = 3X$ has:

@academic[formula_callout:Transformations (Change of Variables)
$$f_Y(y) = \\frac{1}{3} \\cdot 1 = \\frac{1}{3} \\text{ for } y \\in [0, 3]$$]@

The density drops to $\\frac{1}{3}$ because the interval stretched by factor 3.

@academic[pitfall,aside:true,width:35%:Leaving out the factor 1/|a|
Writing $f_Y(y) = f_X\\left(\\frac{y}{3}\\right) = 1$ on $[0, 3]$ substitutes without the factor, and the area under $f_Y$ becomes $3$. With the factor, $f_Y(y) = \\frac{1}{3} \\cdot 1 = \\frac{1}{3}$ and the area is $1$.
[Read more](!#pitfall-leaving-out-the-factor-1-a)]@

Two things happen in the linear formula. The argument $\\frac{y - b}{a}$ sends each value $y$ back to the value of $X$ it came from, which fixes where the density sits on the new axis. The factor in front sets how tall the density is there.

Example: $Y = X + 5$ shifts the distribution but doesn't change density shape:

@academic[formula_callout:Transformations (Change of Variables)
$$f_Y(y) = f_X(y - 5)$$]@

## General Transformations (Invertible)

For invertible $g$ (strictly increasing or decreasing), the transformation formula includes the Jacobian:

@academic[formula_callout:PDF of Monotone Transformation
$$f_Y(y) = f_X(g^{-1}(y)) \\cdot \\left|\\frac{d}{dy}g^{-1}(y)\\right|$$
/probability/formulas#pdf_of_monotone_transformation]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

The derivative term $\\left|\\frac{d}{dy}g^{-1}(y)\\right|$ is the Jacobian—it measures how $g$ locally stretches or compresses space.

Alternative form using $g'(x)$:

@academic[formula_callout:Transformations (Change of Variables)
$$f_Y(y) = f_X(x) \\cdot \\frac{1}{|g'(x)|}$$ where $x = g^{-1}(y)$]@

Example: $Y = X^2$ for $X > 0$. Then $g^{-1}(y) = \\sqrt{y}$ and $\\frac{d}{dy}\\sqrt{y} = \\frac{1}{2\\sqrt{y}}$.

@academic[formula_callout:Transformations (Change of Variables)
$$f_Y(y) = f_X(\\sqrt{y}) \\cdot \\frac{1}{2\\sqrt{y}}$$]@

@academic[fact,aside:true,width:35%:Squares pile up near zero
If $X$ is uniform on $[0, 1]$, then $Y = X^2$ has density $\\frac{1}{2\\sqrt{y}}$, which grows without bound as $y \\to 0$. A tenth of all the probability lands in $[0, 0.01]$, because $Y \\leq 0.01$ exactly when $X \\leq 0.1$, yet the total area is still $\\int_0^1 \\frac{1}{2\\sqrt{y}}\\,dy = 1$.]@

Take $X$ uniform on $[0, 1]$, so that $f_X = 1$ there and $Y = X^2$ also stays inside $[0, 1]$. Squaring moves every value strictly between $0$ and $1$ downward, and it squeezes the values near $0$ hardest: $0.1$ becomes $0.01$, and $0.01$ becomes $0.0001$. Probability that was spread over a stretch of $x$ values now sits on a much shorter stretch of $y$ values.

Another route to the same density goes through the CDF of $Y$: find $F_Y$ first, then differentiate.

@academic[formula_callout:CDF Method for Transformations
$$F_Y(y) = P(g(X) \\leq y)$$
/probability/formulas#cdf_method_for_transformations]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

## Why the Absolute Value?

The Jacobian includes $|\\cdot|$ because density must remain non-negative. Whether $g$ increases or decreases, the density adjustment stays positive.

Probability is preserved: $P(a \\leq X \\leq b) = P(g(a) \\leq Y \\leq g(b))$ for increasing $g$ (for decreasing $g$ the bounds swap: $P(g(b) \\leq Y \\leq g(a))$)

The Jacobian ensures total area under the new PDF still integrates to 1.

## Non-Invertible Transformations

When $g$ is not one-to-one, multiple $x$ values map to the same $y$. Sum their contributions:

@academic[formula_callout:Transformations (Change of Variables)
$$f_Y(y) = \\sum_{x: g(x) = y} \\frac{f_X(x)}{|g'(x)|}$$]@

This generalizes the invertible case by collecting all pre-images.

## Key Insight

Transformations redistribute probability density across a new domain. The Jacobian factor adjusts for how the transformation stretches or compresses regions, ensuring probability conservation. Density can change dramatically even when total probability stays fixed at 1.
    `,
    before: ``,
    after: ``,
    link: '',
  },


  obj12: {
    title: `Connection to CDF (The Fundamental Theorem)`,
    content: `
The PDF and the [CDF](!/probability/cdf) (Cumulative Distribution Function) are two representations of the same probability [distribution](!/probability/distributions). They are connected through the fundamental operations of calculus: integration and differentiation.

## From PDF to CDF (Integration)

The CDF accumulates probability from the PDF through integration:

@academic[formula_callout:Connection to CDF (The Fundamental Theorem)
$$F_X(x) = P(X \\leq x) = \\int_{-\\infty}^x f_X(t)dt$$]@

The CDF at any point equals the total area under the PDF curve from $-\\infty$ up to that point.

Example: [Exponential distribution](!/probability/distributions/continuous/exponential) with $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$.

@academic[formula_callout:Connection to CDF (The Fundamental Theorem)
$$F_X(x) = \\int_0^x \\lambda e^{-\\lambda t}dt = 1 - e^{-\\lambda x} \\text{ for } x \\geq 0$$]@

Example: [Uniform distribution](!/probability/distributions/continuous/uniform) on $[0, 10]$ with $f(x) = \\frac{1}{10}$.

@academic[formula_callout:Connection to CDF (The Fundamental Theorem)
$$F_X(x) = \\int_0^x \\frac{1}{10}dt = \\frac{x}{10} \\text{ for } x \\in [0, 10]$$]@

@academic[rule_plain:The CDF is continuous and always increasing (or at least non-decreasing) for continuous [random variables](!/probability/random-variables).]@

## From CDF to PDF (Differentiation)

The PDF is the derivative of the CDF:

@academic[formula_callout:PDF as CDF Derivative
$$f_X(x) = \\frac{d}{dx}F_X(x)$$
/probability/formulas#pdf_as_cdf_derivative]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

The PDF gives the instantaneous rate at which probability accumulates—the slope of the CDF curve.

Example: [Exponential](!/probability/distributions/continuous/exponential) with $F_X(x) = 1 - e^{-\\lambda x}$.

@academic[formula_callout:Connection to CDF (The Fundamental Theorem)
$$f_X(x) = \\frac{d}{dx}(1 - e^{-\\lambda x}) = \\lambda e^{-\\lambda x}$$]@

Example: [Uniform](!/probability/distributions/continuous/uniform) with $F_X(x) = \\frac{x}{10}$ on $[0, 10]$.

@academic[formula_callout:Connection to CDF (The Fundamental Theorem)
$$f_X(x) = \\frac{d}{dx}\\left(\\frac{x}{10}\\right) = \\frac{1}{10}$$]@

Constant derivative produces constant density.

## The Fundamental Theorem Connection

This relationship is the Fundamental Theorem of Calculus applied to probability:

@academic[formula_callout:Connection to CDF (The Fundamental Theorem)
$$\\frac{d}{dx}\\int_{-\\infty}^x f_X(t)dt = f_X(x)$$]@

Integration builds up cumulative probability. Differentiation recovers the density function. They are inverse operations.

## Graphical Relationship

- **PDF:** Shows where density concentrates (peaks and valleys)
- **[CDF](!/probability/cdf):** Shows accumulated probability (always rising, reaches 1)

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



## PDF Patterns

Each PDF has characteristic behavior: where density concentrates, how it spreads, whether it's symmetric or skewed, how parameters reshape the curve. These patterns reflect the underlying random process and determine the [distribution's](!/probability/distributions) [expected value](!/probability/expected-value) and [variance](!/probability/variance). Recognizing PDF shapes helps identify which distribution models your data.
    `,
    before: ``,
    after: ``,
    link: '',
  },


  obj14: {
    title: `Common Mistakes`,
    content: `
## Confusing Density with Probability

The PDF value $f(x)$ is not $P(X = x)$. For continuous [random variables](!/probability/random-variables), $P(X = x) = 0$ always. The PDF gives density—a rate of probability per unit, not probability itself.

Don't say "the probability at $x = 5$ is 0.8" when $f(5) = 0.8$. Say "the density at $x = 5$ is 0.8."

## Thinking PDF Values Cannot Exceed 1

Unlike PMF values which must satisfy $p(x) \\leq 1$, PDF values can be arbitrarily large. The constraint is that the total area integrates to 1, not that individual heights stay below 1.

@academic[example:Example
[Uniform distribution](!/probability/distributions/continuous/uniform) on $[0, 0.1]$ has $f(x) = 10$. This is perfectly valid.]@

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
  },
  formulaSummary: {
    title: `Formula Summary`,
    content: `This summary sorts the formulas of the page into five families: the density and its axioms, computing probabilities, location and spread, transformations, and the connection to the CDF. Each family has a line on what it covers, and each formula a note on what it gives with a link to the section that explains it. The buttons above the cards show one family at a time.

The first family states that single points carry no probability, that probability is area, and the two axioms. The second handles endpoints and tails. The third gives the mean, median, mode, variance and standard deviation. The last two find the density of a transformed variable and move between density and CDF.`,
    before: ``,
    after: `Every probability from a density is an area, so the work is always an integral over the right region. Read a value of the density as a rate, never as a probability: it can be larger than one, while the area under the whole curve is exactly one.`,
    link: '',
  },
  obj16: {
    title: `Common Pitfalls`,
    content: `Each of the three mistakes below is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.`,
    before: ``,
    after: `Each slip loses a piece when a density is integrated or transformed. The formula holds only on its support, the antiderivative of $e^{-2x}$ is $-\\frac{1}{2}e^{-2x}$, and the density of $aX + b$ carries the factor $\\frac{1}{|a|}$. Checking that every probability lies between $0$ and $1$, differentiating the antiderivative, or integrating the new density, catches each slip.`,
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


// FAQ pass: the definition, the axioms and the CDF connection each name
// their own h2. Kept the point-probability and density-above-1 questions —
// this is the dedicated page for densities, so it takes both from the
// bridge pages that were carrying them (probability/sets and the parent
// probability-function). Anchors avoid obj2 and obj14, which exist in
// sectionsContent but are commented out of the render array.
// FAQ pass 2026-10-31: kept all five. Added the density that does not fade
// far out (fact box under "The Two Fundamental Axioms") and the unbounded
// density of X squared (fact box under "Transformations"); no heading asks
// either. The three pitfalls are calculus slips, not searched questions.
const faqQuestions = {
  obj1: {
    question: "Why is the probability at a single point zero for a continuous variable?",
    answer: "Because probability is the area under the density, and a single point has no width. Integrating f over an interval of zero length gives zero, whatever the density's height there. This does not mean the value cannot occur — every observation lands on some point. It means probability for a continuous variable lives on intervals, never on individual points.",
    sectionId: "8"
  },
  obj2: {
    question: "Can a PDF value exceed 1?",
    answer: "Yes. A PMF returns probabilities, so its values are capped at 1; a PDF returns density, which has no such ceiling. What must equal 1 is the total area, not any height. A [uniform distribution](!/probability/distributions/continuous/uniform) on [0, 0.1] has f(x) = 10 across that interval — perfectly valid, since 10 × 0.1 = 1.",
    sectionId: "5"
  },
  obj3: {
    question: "Does it matter whether you use < or ≤ for a continuous variable?",
    answer: "No — they give identical answers. P(X < a) and P(X ≤ a) differ by the single point a, which carries zero probability, so all four of <, ≤, >, ≥ agree. This is the opposite of the discrete case, where including or excluding an endpoint changes the answer by that value's whole probability.",
    sectionId: "8"
  },
  obj4: {
    question: "What does the value of a PDF actually tell you?",
    answer: "A rate, not a probability. f(5) = 0.8 means the density at 5 is 0.8 — roughly, probability per unit of x in that neighborhood — not that anything has probability 0.8. To get a probability you integrate over an interval. Saying “the probability at x = 5 is 0.8” is the phrasing to avoid.",
    sectionId: "1"
  },
  obj5: {
    question: "Why does the change-of-variables formula need an absolute value?",
    answer: "To keep the density non-negative. Transforming a variable multiplies the density by the derivative of the inverse map, and that derivative is negative whenever the transformation reverses direction. Without the absolute value the result would be a negative density, violating the [axioms](!/probability/axioms). The bars record that only the magnitude of the stretch matters, not its orientation.",
    sectionId: "11"
  },
  obj6: {
    question: "Does a PDF have to approach zero far out in the tails?",
    answer: "No. Normalization only asks that the total area be $1$; it says nothing about the height at any particular place. Let $f(x) = n$ on $\\left[n, n + \\frac{1}{n \\cdot 2^n}\\right]$ for each whole number $n \\geq 1$ and $0$ elsewhere. The rectangles have areas $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\ldots$, which add up to $1$, so $f$ is a valid density whose peaks grow without bound far out.",
    sectionId: "5"
  },
  obj7: {
    question: "Can a PDF go to infinity and still be valid?",
    answer: "Yes, as long as the area stays $1$. If $X$ is uniform on $[0, 1]$, then $Y = X^2$ has density $\\frac{1}{2\\sqrt{y}}$, which grows without bound as $y \\to 0$, yet $\\int_0^1 \\frac{1}{2\\sqrt{y}}\\,dy = 1$. Squaring crowds the values toward $0$: a tenth of all the probability lands in $[0, 0.01]$, because $Y \\leq 0.01$ exactly when $X \\leq 0.1$.",
    sectionId: "11"
  },
}




const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Probability Density Function (PDF)",
    "description": "Learn the probability density function: definition, axioms, support, PDF-CDF relationship, expected value, variance, transformations, and common continuous PDFs.",
    "url": "https://www.learnmathclass.com/probability/probability-function/pdf",
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
      "name": "Probability Density Function"
    },
    "teaches": [
      "Definition of the PDF and why density differs from probability",
      "Support of a continuous random variable and the two fundamental axioms of a PDF",
      "Computing interval probabilities, tail probabilities, and using the complement rule",
      "Expected value, median, mode, variance, and standard deviation from a PDF",
      "Change of variables, the Jacobian, and how transformations reshape a PDF",
      "Connection between PDF and CDF via integration and differentiation, with examples from uniform, normal, exponential, and beta distributions"
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
        "name": "Probability Density Function (PDF)",
        "item": "https://www.learnmathclass.com/probability/probability-function/pdf"
      }
    ]
  }
}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const pfBox = (h, a, b, c) => [
    { fn: () => h, from: a, to: b, ends: [null, null], color: c },
    { fn: (x) => (x - a) * 1e6, from: a, to: a + h / 1e6, ends: [null, null], color: c },
    { fn: (x) => (b - x) * 1e6, from: b - h / 1e6, to: b, ends: [null, null], color: c }];
  const pfPx = (x, w) => x / w * 388;
  const fpDensityTall = { kind: 'pieces', svgTitle: 'Uniform density on [0, 0.5]: height 2, width 0.5, total area 1', xRange: [-0.25, 1.4], yRange: [0, 2.5], xStep: 0.25, yStep: 0.5, xLetter: 'x', yLetter: 'f(x)',
    pieces: pfBox(2, 0, 0.5, 'f'),
    notes: [{ x: 0.62, y: 2.2, text: 'height f(x) = 2: above 1', pos: 'e', color: 'f' }, { x: 0.62, y: 1.95, text: 'width 0.5', pos: 'e' }, { x: 0.62, y: 1.7, text: 'area 0.5 · 2 = 1', pos: 'e', color: 'r' }, { x: 0.62, y: 1.2, text: 'P(0.1 < X < 0.2) = 0.1 · 2 = 0.2', pos: 'e' }],
    caption: 'Density can exceed 1; only the total area must be 1' };
  const fpStretch = { kind: 'pieces', svgTitle: 'X uniform on [0, 1] with density 1, and Y = 3X uniform on [0, 3] with density 1/3: three times as wide, a third as tall', xRange: [-0.3, 3.6], yRange: [0, 1.3], xStep: 0.5, yStep: 0.5, xLetter: 'value', yLetter: 'density',
    pieces: [].concat(pfBox(1, 0, 1, 'f'), pfBox(1 / 3, 0, 3, 'r')),
    notes: [{ x: 1.1, y: 1.0, text: 'X uniform on [0, 1]: f = 1', pos: 'e', color: 'f' }, { x: 1.1, y: 0.8, text: 'Y = 3X on [0, 3]: f = 1/3', pos: 'e', color: 'r' }, { x: 1.1, y: 0.6, text: 'both areas equal 1', pos: 'e' }],
    caption: 'Stretching by 3 divides the density by 3' };
  const conceptIntroFigures = {
    uniformTable: ciUniformTable,
  };

  const demoUnits = {
    u_1_0: demoUnitFrame({
      svg: continuousPdfDiagrams['normal-pdf'],
      caption: 'Normal density, mean 0, standard deviation 1',
      text: 'Density is probability per unit length: the curve is highest at the mean, where a small interval captures the most probability, and the probability of any interval is the area above it. The height 0.4 at the centre is not itself a probability. Toggle to the CDF view and see the accumulated area on the',
      href: '/probability/visual-tools/probability-function/continuous',
      linkText: 'PDF visualizer',
    }),
    u_12_1: demoUnitFrame({
      svg: continuousCdfDiagrams.normal,
      caption: 'Normal CDF, mean 0, standard deviation 1',
      text: 'The CDF is the running area under the density, so its slope at any point is the density there: the S-curve is steepest at the mean where the bell is highest and flattens in the tails where the bell is low. Differentiating F recovers f and integrating f recovers F. Move along the curve and compare slope with density on the',
      href: '/probability/visual-tools/cdf/continuous',
      linkText: 'continuous CDF visualizer',
    }),
    u_13_2: demoUnitFrame({
      svg: distributionExplorerDiagrams['exponential-pdf'],
      caption: 'Exponential density, lambda = 1, with the mean marked',
      text: 'The catalogue of continuous densities includes this decaying curve for waiting times, the flat uniform density and the normal bell; each is a different rule for spreading unit area over the line. The explorer marks the mean on each, here at 1 over lambda. Compare the three shapes and their parameters on the',
      href: '/probability/visual-tools/distributions/exponential',
      linkText: 'distribution explorer',
    }),
    densityTall: demoUnitFrame({
      svg: renderFunctionPlotV4(fpDensityTall),
      caption: 'A density taller than 1',
      text: 'The uniform density on [0, 0.5] from the page\'s example. It must enclose area 1 over an interval only 0.5 wide, so its height is 2. That breaks no rule: the axioms ask only that f is never negative and that the total area is 1. Probabilities come from areas, never from heights: P(0.1 &lt; X &lt; 0.2) = 0.1 &#183; 2 = 0.2.',
    }),
    stretch: demoUnitFrame({
      svg: renderFunctionPlotV4(fpStretch),
      caption: 'Change of variables: Y = 3X',
      text: 'X is uniform on [0, 1] with density 1 (blue). Multiplying by 3 spreads the same probability over [0, 3], three times as wide, so the density of Y = 3X must drop to 1/3 (amber) for the area to stay 1. This is the factor |d/dy g&#8315;&#185;(y)| = 1/3 in the change-of-variables formula.',
    }),
  };

  const pdfViewTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Three views of one density',
    preface: 'A probability density function can be drawn, written as a formula, or listed as numbers. Each view answers different questions.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Probability is area',
    conclusion: 'Whichever view you use, the height is a density; probabilities come from the area under the curve.',
    root: { name: 'Representing a PDF', sub: '3 views' },
    children: [
      { id: 'graph', name: 'Graphical', items: [ { label: 'Reads', text: 'height = density, area = probability' }, { label: 'Examples', text: 'normal, exponential curves' } ] },
      { id: 'func', name: 'Functional', items: [ { label: 'Reads', text: 'an explicit $f(x)$, often piecewise' }, { label: 'Examples', text: 'uniform, exponential formulas' } ] },
      { id: 'num', name: 'Numerical', items: [ { label: 'Reads', text: 'tabulated values' }, { label: 'Examples', text: 'normal CDF tables' } ] },
    ],
  };
  // TheoremCard data (pdf-cdf-chain); every fact is from the section text
  const pdfCdfChain = {
    header: { kicker: 'PDF and CDF', title: 'PDF to CDF and back', lede: 'Two representations of one distribution, linked by integration and differentiation.' },
    chain: [
      { name: 'PDF', text: '$f_X(x)$', items: ['Exponential: $\\lambda e^{-\\lambda x}$ for $x \\geq 0$', 'Uniform on $[0, 10]$: $\\frac{1}{10}$'], edge: 'integrate' },
      { name: 'CDF', text: '$F_X(x) = \\int_{-\\infty}^{x} f_X(t)\\, dt$', items: ['Exponential: $1 - e^{-\\lambda x}$', 'Uniform: $\\frac{x}{10}$ on $[0, 10]$', 'Continuous and non-decreasing'], edge: 'differentiate' },
      { name: 'Back to the PDF', text: '$f_X(x) = \\dfrac{d}{dx} F_X(x)$', items: ['The Fundamental Theorem of Calculus applied to probability', 'Steeper CDF, higher PDF; flat CDF, zero density'] },
    ],
  };


  // MistakeFix batch 18, 2026-11-04: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj16 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'using-the-formula-outside-the-support', name: `Using the formula outside the support`, errorAt: 0,
        what: `A density is given by a formula on its support and is $0$ elsewhere. When a probability is set up, the formula is integrated over the whole interval of the event, including the part that lies outside the support.`,
        wrong: [`For the exponential density $f(x) = 2e^{-2x}$, $x \\geq 0$,
$$P(X < 1) = \\int_{-\\infty}^{1} 2e^{-2x}\\,dx$$
$$= \\left[-e^{-2x}\\right]_{-\\infty}^{1}$$`, `As $x \\to -\\infty$, $e^{-2x}$ grows without bound, so the integral diverges.`],
        right: [`The density is $0$ for $x < 0$, so only the part of the event inside the support counts.`, `$$P(X < 1) = \\int_{0}^{1} 2e^{-2x}\\,dx$$
$$= \\left[-e^{-2x}\\right]_{0}^{1}$$
$$= 1 - e^{-2} \\approx 0.865$$`],
        why: `The formula is the part of the PDF that is written large, while the condition $x \\geq 0$ sits beside it and is easy to drop. The tail formula $P(X < a) = \\int_{-\\infty}^{a} f_X(x)\\,dx$ then invites the lower limit $-\\infty$.`,
        check: `A probability is a number between $0$ and $1$. An infinite or negative result, or one above $1$, means the integral has run where the density is $0$. Writing the support next to the limits before integrating catches it.` },
      { id: 'dropping-the-minus-sign-of-the-antiderivative', name: `Dropping the minus sign of the antiderivative`, errorAt: 0,
        what: `An interval probability for the exponential density is set up correctly, but the antiderivative of $e^{-2x}$ is taken without the factor that comes from the chain rule, so its sign is lost.`,
        wrong: [`$$\\int_1^3 2e^{-2x}\\,dx = \\left[e^{-2x}\\right]_1^3$$
$$= e^{-6} - e^{-2} \\approx 0.0025 - 0.1353$$
$$= -0.133$$`],
        right: [`Differentiating $-e^{-2x}$ gives $2e^{-2x}$, so $-e^{-2x}$ is the antiderivative.`, `$$\\int_1^3 2e^{-2x}\\,dx = \\left[-e^{-2x}\\right]_1^3$$
$$= -e^{-6} + e^{-2} \\approx 0.133$$`],
        why: `$e^{x}$ is its own antiderivative, and that rule is carried over to $e^{-2x}$ without accounting for the inner factor $-2$.`,
        check: `Differentiate the antiderivative and compare it with the density; $\\frac{d}{dx}e^{-2x} = -2e^{-2x}$, which has the wrong sign. A negative probability is always a sign of an error.` },
      { id: 'leaving-out-the-factor-1-a', name: `Leaving out the factor 1/|a|`, errorAt: 0,
        what: `The PDF of a linear transformation $Y = aX + b$ is found by substituting $\\frac{y - b}{a}$ into $f_X$, and the factor $\\frac{1}{|a|}$ in front is left out.`,
        wrong: [`For $X$ uniform on $[0, 1]$ and $Y = 3X$,
$$f_Y(y) = f_X\\left(\\frac{y}{3}\\right) = 1 \\text{ for } y \\in [0, 3]$$`, `The area under this function is $1 \\cdot 3 = 3$.`],
        right: [`The factor $\\frac{1}{|a|} = \\frac{1}{3}$ scales the height.`, `$$f_Y(y) = \\frac{1}{3} f_X\\left(\\frac{y}{3}\\right)$$
$$= \\frac{1}{3} \\text{ for } y \\in [0, 3]$$`, `The area is $\\frac{1}{3} \\cdot 3 = 1$.`],
        why: `For a PMF the substitution alone is correct, because each value keeps its own probability when it is moved. A density is probability per unit length, and stretching the axis by a factor $3$ spreads the same probability over three times the length.`,
        check: `Integrate the new density over its support. If the area is not $1$, the factor is missing; here the wrong answer has area $3$, exactly $|a|$.` },
    ],
  };

  // Formula Summary 2026-11-07: the page's own formulas.
  const formulaSummaryData = {
    theme: { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' },
    groups: [
      { id: 'basics', name: 'Density and its axioms', sub: 'A density is a rate of probability per unit, not a probability.', pairs: [
        [{ formula: '$P(X = a) = 0$', text: 'Every single value has probability zero, the paradox [definition and physical intuition](!#1) starts from.' },
         { formula: '$\\displaystyle P(a \\leq X \\leq b) = \\int_a^b f_X(x)dx$', text: 'Probability is the area under the density over an interval, the core calculation of [calculations using the PDF](!#8).' }],
        [{ formula: '$f_X(x) \\geq 0$', text: 'The density is zero or positive for every $x$, the first of [the two axioms](!#5).' },
         { formula: '$\\displaystyle \\int_{-\\infty}^{\\infty} f_X(x)dx = 1$', text: 'The total area under the density is one, the second of [the two axioms](!#5).' }],
      ] },
      { id: 'calc', name: 'Computing probabilities', sub: 'Endpoints do not matter, and tails come from one integral or its complement.', pairs: [
        [{ formula: '$P(X < a) = P(X \\leq a)$', text: 'Adding or removing a single point changes nothing, so strict and non-strict inequalities agree ([calculations](!#8)).' },
         { formula: '$\\displaystyle P(X < a) = \\int_{-\\infty}^a f_X(x)dx$', text: 'The lower tail is the area to the left of $a$ ([calculations using the PDF](!#8)).' }],
        [{ formula: '$\\displaystyle P(X > a) = \\int_a^{\\infty} f_X(x)dx = 1 - P(X \\leq a)$', text: 'The upper tail, by integration or by the complement, whichever is easier ([calculations](!#8)).' }, ''],
      ] },
      { id: 'measures', name: 'Location and spread', sub: 'The mean, median, mode and spread measures computed from the density.', pairs: [
        [{ formula: '$\\displaystyle E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f_X(x)dx$', text: 'The balance point of the density curve, from [location measures](!#9).' },
         { formula: '$\\displaystyle P(X \\leq m) = \\int_{-\\infty}^m f_X(x)dx = 0.5$', text: 'The median splits the area in half, where the CDF equals one half ([location measures](!#9)).' }],
        [{ formula: '$\\text{mode} = \\arg\\max_x f_X(x)$', text: 'The highest point of the density, possibly at an end of the support ([location measures](!#9)).' },
         { formula: '$\\displaystyle \\text{Var}(X) = \\int_{-\\infty}^{\\infty} (x - E[X])^2 \\cdot f_X(x)dx$', text: 'Squared distances from the mean, weighted by density, from [spread measures](!#10).' }],
        [{ formula: '$\\text{Var}(X) = E[X^2] - (E[X])^2$', text: 'The shortcut, with $E[X^2]$ also found by integrating against the density ([spread measures](!#10)).' },
         { formula: '$\\text{SD}(X) = \\sqrt{\\text{Var}(X)}$', text: 'Brings the spread back to the original units, next to the interquartile range $Q_3 - Q_1$ in [spread measures](!#10).' }],
      ] },
      { id: 'transform', name: 'Transformations', sub: 'The density of a new variable $Y = g(X)$.', pairs: [
        [{ formula: '$\\displaystyle f_Y(y) = \\frac{1}{|a|} f_X\\left(\\frac{y - b}{a}\\right)$', text: 'For $Y = aX + b$ with $a \\neq 0$; the factor in front rescales the height ([transformations](!#11)).' },
         { formula: '$\\displaystyle f_Y(y) = f_X(g^{-1}(y)) \\cdot \\left|\\frac{d}{dy}g^{-1}(y)\\right|$', text: 'For an invertible $g$; the derivative term measures how $g$ stretches or compresses ([transformations](!#11)).' }],
        [{ formula: '$F_Y(y) = P(g(X) \\leq y)$', text: 'The CDF method: find the CDF of $Y$ first, then differentiate ([transformations](!#11)).' },
         { formula: "$\\displaystyle f_Y(y) = \\sum_{x: g(x) = y} \\frac{f_X(x)}{|g'(x)|}$", text: 'When $g$ is not one-to-one, add the contributions of every $x$ that maps to $y$ ([transformations](!#11)).' }],
      ] },
      { id: 'cdf', name: 'Connection to the CDF', sub: 'Integrating the density gives the CDF, and differentiating the CDF gives the density back.', pairs: [
        [{ formula: '$\\displaystyle F_X(x) = P(X \\leq x) = \\int_{-\\infty}^x f_X(t)dt$', text: 'The accumulated area up to $x$, from [connection to CDF](!#12).' },
         { formula: '$\\displaystyle f_X(x) = \\frac{d}{dx}F_X(x)$', text: 'The density is the slope of the CDF, the fundamental theorem at work ([connection to CDF](!#12)).' }],
      ] },
    ],
  };

   return {
  props:{
    formulaSummaryData,
    pitfallData,
      pdfCdfChain,
    pdfViewTree,
    demoUnits,
    conceptIntroFigures,
     sectionsContent,
     introContent,
     faqQuestions,
     schemas,
     seoData: {
       title: "Probability Density Function (PDF) | Learn Math Class",
       description: "Learn the probability density function: definition, axioms, support, PDF-CDF relationship, expected value, variance, transformations, and common continuous PDFs.",
       keywords: keyWords.join(", "),
       url: "/probability/probability-function/pdf",
       name: "Probability Density Function (PDF)"
     },
   }
}
   }

const theoremTheme = { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' }

export default function PDFPage({ formulaSummaryData, pitfallData,pdfCdfChain, pdfViewTree, seoData, sectionsContent, introContent, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template C (failure first).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `For a discrete variable the probability function gives P(X = x). Try the same reading for a continuous one.`,
        content: [
          `## What is a PDF?`,
          `A PDF (Probability Density Function) describes how probability is distributed across a continuous [random variable](!/probability/random-variables). Unlike discrete variables where probability sits at specific points, continuous variables spread probability across intervals.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        tone: 'break',
        lead: `Uniform on [0, 0.5] has f(x) = 2 at every point — and a probability of 2 is impossible.`,
        content: [
          ciTable('uniformTable'),
          `Read as an area, height times width, the same $2$ gives sensible probabilities, and the whole interval gets exactly $1$.`,
        ],
      },
      {
        id: 'diagnosis',
        lead: `A single point has no width, so it carries no probability; only intervals do.`,
        content: [
          `## The Zero Probability Paradox`,
          `For any specific value $a$:`,
          `@academic[formula_callout:Definition & Physical Intuition
$$P(X = a) = 0$$]@`,
          `This seems impossible. How can every individual outcome have zero probability, yet something must happen?`,
          `The resolution: Probability for continuous variables lives in intervals, not points. A single point is infinitesimally thin—it has no width, so it captures no probability mass. Just as a geometric point on a line has zero length, a single value in a continuous distribution has zero probability.`,
          `@academic[example:Example
Pick a random number between 0 and 1. What's $P(X = 0.5)$? Exactly zero. What's $P(0.49 < X < 0.51)$? Positive. Probability only exists across ranges.]@`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The [probability density function](!/probability/definitions#probability_density_function) $f$ of a continuous random variable gives probabilities as areas: $P(a \\le X \\le b) = \\int_a^b f(x)\\,dx$.`,
        formula: [
          `## Density ≠ Probability`,
          `The PDF value $f(x)$ is **not** a probability. It's a density—a rate of probability per unit.`,
          `@academic[formula_callout:Probability of Interval Continuous
$$P(a \\leq X \\leq b) = \\int_a^b f(x)dx$$
/probability/formulas#probability_of_interval_continuous]@`,
          `@academic[formulas_link:Browse all probability formulas
/probability/formulas]@`,
          `Probability is the **area** under the curve, not the height. This means $f(x)$ can exceed 1, unlike a PMF where $p(x) \\leq 1$ always.`,
        ],
        footer: `So for the uniform variable on $[0, 0.5]$, $P(0.1 \\le X \\le 0.2) = 2 \\times 0.1 = 0.2$.`,
      },
      {
        id: 'kind',
        lead: `Density is probability per unit length, as a rod has mass per unit length.`,
        content: [
          `Think of it like the density of a material. A steel rod doesn't have "weight at a point"—it has density (mass per unit length). Similarly, a continuous random variable doesn't have "probability at a point"—it has probability density.`,
          `The PDF is the continuous analog of mass in the discrete case. Where mass concentrates at points, density spreads across regions.`,
          <div key={'unit-u_1_0'} dangerouslySetInnerHTML={{ __html: demoUnits.u_1_0 }} />,
          `@academic[punchline:For a continuous variable a single point carries no probability; probability is the area under the density over an interval.]@`,
        ],
      },
      {
        id: 'caveat',
        lead: `A density can be larger than 1; only its total area is fixed.`,
        content: [
          `@academic[example:Example
Uniform [distribution](!/probability/distributions) on $[0, 0.5]$ has $f(x) = 2$. The density is 2, but the total probability integrates to 1.]@`,
          `The notation for all of this is fixed next.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers notation, the support, the two axioms, the three views of a PDF, building one from a story, calculations, location and spread measures, change of variables, the link with the CDF and the densities of common distributions.`,
      },
    ],
  }
    
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
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
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
          <NotationSection
            key={'notation-obj3'}
            title={sectionsContent.obj3.title}
            lead={sectionsContent.obj3.lead}
            inherited={sectionsContent.obj3.inherited}
            entries={sectionsContent.obj3.entries}
            symbolsHref={sectionsContent.obj3.symbolsHref}
            symbolsLabel={sectionsContent.obj3.symbolsLabel}
            parentHref={sectionsContent.obj3.parentHref}
            parentLabel={sectionsContent.obj3.parentLabel}
            theme={'navy'}
          />,
          <NotationCheatSheet
            key={'notation-sheet'}
            sheet={probRandomVarsNotationSheet}
            current={'/probability/probability-function/pdf'}
          />,
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
                  <div key={'unit-densityTall'} dangerouslySetInnerHTML={{ __html: demoUnits.densityTall }} />,
          `Narrow the interval to [0, 0.1] and the height rises to 10, still a valid density.`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <DiagramFrame
            key={'obj6-diagram'}
            id="pdf-representations-tree"
            title="Three views of a PDF"
            source="/probability/probability-function/pdf"
          >
            <TopDownTree data={pdfViewTree} />
          </DiagramFrame>,
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
                  <div key={'unit-stretch'} dangerouslySetInnerHTML={{ __html: demoUnits.stretch }} />,
          `A shift, Y = X + 5, moves the rectangle without changing its height.`,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
                  <div key={'unit-u_12_1'} dangerouslySetInnerHTML={{ __html: demoUnits.u_12_1 }} />,
          `The named continuous families are catalogued next.`,
          <DiagramFrame
            key={'obj12-theorem'}
            id="pdf-cdf-chain"
            title="PDF to CDF and back"
            source="/probability/probability-function/pdf"
            before={`The two representations are linked by the two operations of calculus. The chain runs the loop once, with the page’s exponential and uniform examples.`}
            after={`Integration builds up cumulative probability; differentiation recovers the density. The steeper the CDF, the higher the PDF.`}
          >
            <TheoremCard data={pdfCdfChain} variant="chain" theme={theoremTheme} />
          </DiagramFrame>,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
                  <div key={'unit-u_13_2'} dangerouslySetInnerHTML={{ __html: demoUnits.u_13_2 }} />,
          `Each family has its own page with parameters, moments and applications.`,
        ]
    },
    {
        id:'formula-summary',
        title:sectionsContent.formulaSummary.title,
        link:sectionsContent.formulaSummary.link,
        content:[
          sectionsContent.formulaSummary.content,
          <DiagramFrame
            key={'formula-summary'}
            id="pdf-formula-summary"
            title="PDF formulas"
            source="/probability/probability-function/pdf"
            related={{ href: '/probability/formulas', label: 'All probability formulas' }}
            after={sectionsContent.formulaSummary.after}
          >
            <FormulaSheet data={formulaSummaryData} variant="grouped" />
          </DiagramFrame>,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj16.title,
        link:'',
        content:[
          sectionsContent.obj16.content,
          <DiagramFrame
            key={'obj16-mistakes'}
            id="pdf-pitfalls"
            title="Common pitfalls with the PDF"
            source="/probability/probability-function/pdf"
            after={sectionsContent.obj16.after}
          >
            <MistakeFix data={pitfallData} variant="trace" />
          </DiagramFrame>,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`PDF FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Probability Density Function (PDF)</h1>
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
