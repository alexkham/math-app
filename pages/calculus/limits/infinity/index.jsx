// tables-optimized: v4 | 2026-05-24 | 4 tables (obj5 aggregation, obj10 comparison, obj12 aggregation, obj13 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import functionLimitDiagrams from '@/app/components/functions/limit/functionLimitDiagrams'
import Hierarchy from '@/app/components/infographics/Hierarchy/Hierarchy'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import FunctionAnalysis from '@/app/components/infographics/FunctionAnalysis/FunctionAnalysis'


export async function getStaticProps(){
const keyWords = [
  "limits at infinity",
  "infinite limits",
  "limit as x approaches infinity",
  "horizontal asymptote",
  "vertical asymptote",
  "end behavior calculus",
  "dominant term analysis",
  "limits of rational functions",
  "growth rate comparison",
  "limit equals infinity",
  "evaluate limits at infinity",
  "exponential limits infinity",
  "logarithm limits infinity",
  "sign analysis infinite limits",
  "asymptote calculus"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj5 — aggregation: dominant-term cases for rational functions
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Degree relation</th>
      <th style="${tableHeaders.aggregation}">lim<sub>x → ∞</sub> p(x)/q(x)</th>
      <th style="${tableHeaders.aggregation}">Why</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">deg p &lt; deg q</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">denominator grows faster than numerator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x + 1) / (x³ − 2) → 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">deg p = deg q</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ratio of leading coefficients</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">scales tie; only leading terms survive</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(4x² + x) / (2x² + 5) → 4 / 2 = 2</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">deg p &gt; deg q</td>
      <td style="padding: 12px 15px; color: #34495e;">±∞</td>
      <td style="padding: 12px 15px; color: #34495e;">numerator grows faster than denominator; sign from leading-coefficient ratio</td>
      <td style="padding: 12px 15px; color: #34495e;">x³ / (x + 1) → ∞</td>
    </tr>
  </tbody>
</table>
`

// obj10 — comparison: one-sided infinite-limit patterns at vertical asymptotes
const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Function near x = a</th>
      <th style="${tableHeaders.comparison} text-align: center;">LHL at a</th>
      <th style="${tableHeaders.comparison} text-align: center;">RHL at a</th>
      <th style="${tableHeaders.comparison}">Two-sided</th>
      <th style="${tableHeaders.comparison}">Asymptote pattern</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 / (x − a) &nbsp;(odd power)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">+∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does not exist (signs disagree)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vertical asymptote; graph plunges on one side, soars on the other</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">1 / (x − a)² &nbsp;(even power)</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">+∞</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">+∞</td>
      <td style="padding: 12px 15px; color: #34495e;">+∞ (sides agree)</td>
      <td style="padding: 12px 15px; color: #34495e;">vertical asymptote; graph soars on both sides</td>
    </tr>
  </tbody>
</table>
`

// obj12 — aggregation: exponential and logarithmic limits at boundaries (covers obj11 + obj12)
const obj12Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Function</th>
      <th style="${tableHeaders.aggregation}">Direction</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Limit</th>
      <th style="${tableHeaders.aggregation}">Asymptote signal</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">e<sup>x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x → ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no horizontal asymptote on the right</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">e<sup>x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x → −∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal asymptote y = 0 on the left</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">e<sup>−x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x → ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal asymptote y = 0 on the right</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">e<sup>−x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x → −∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no horizontal asymptote on the left</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">ln x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x → ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no horizontal asymptote; grows slowly (slower than any positive power)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">ln x</td>
      <td style="padding: 12px 15px; color: #34495e;">x → 0⁺</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">−∞</td>
      <td style="padding: 12px 15px; color: #34495e;">vertical asymptote x = 0 (right-hand limit only — ln undefined for x ≤ 0)</td>
    </tr>
  </tbody>
</table>
`

// obj13 — summary capstone: master infinity diagnostic
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Observed pattern</th>
      <th style="${tableHeaders.summary}">What it signals</th>
      <th style="${tableHeaders.summary}">Resulting graph feature</th>
      <th style="${tableHeaders.summary} text-align: center;">Section</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">lim<sub>x → ±∞</sub> f(x) = L &nbsp;(finite)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">end behavior settles to a single value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal asymptote y = L in that direction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">lim<sub>x → ±∞</sub> f(x) = ±∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function grows without bound in that direction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no horizontal asymptote there</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">lim<sub>x → a</sub> f(x) = ±∞ &nbsp;(one or both sides)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">output blows up near a finite point a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vertical asymptote x = a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">8, 9</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational p/q, &nbsp;deg p &lt; deg q</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">denominator dominates</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal asymptote y = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4, 5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational p/q, &nbsp;deg p = deg q</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">leading-degree terms balance</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal asymptote y = (leading p) / (leading q)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4, 5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational p/q, &nbsp;deg p &gt; deg q</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">numerator dominates</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no horizontal asymptote (function escapes to ±∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Mixed exponential / logarithmic</td>
      <td style="padding: 12px 15px; color: #34495e;">apply the <a href="/calculus/limits/special" style="${linkStyle}">growth-rate hierarchy</a> (log ≪ poly ≪ exp)</td>
      <td style="padding: 12px 15px; color: #34495e;">depends on which family dominates — see sections 11 and 12 above</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">6, 11, 12</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/limits/infinity ────────────────────────────────────────────


// formulas-optimized: v1 | 2026-06-09 | 4 callouts (obj3, obj8, obj11, obj12)
const sectionsContent = {
  // ─── /calculus/limits/infinity ────────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Asymptote](!/calculus/definitions#asymptote) — horizontal ($y = L$) and vertical ($x = a$) boundary lines
- [Limit](!/calculus/definitions#limit) — limits at infinity and infinite limits
- [One-Sided Limit](!/calculus/definitions#one_sided_limit) — one-sided infinite limits at vertical asymptotes`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Two Distinct Concepts`,
    content: `
The notation distinguishes two cases:

**Limits at infinity:** The input grows without bound.

@academic[formula_callout:Two Distinct Concepts
$$\\lim_{x \\to \\infty} f(x) \\qquad \\lim_{x \\to -\\infty} f(x)$$]@

**Infinite limits:** The output grows without bound.

@academic[formula_callout:Two Distinct Concepts
$$\\lim_{x \\to a} f(x) = \\infty \\qquad \\lim_{x \\to a} f(x) = -\\infty$$]@

In the first case, $x$ escapes to infinity while we track where $f(x)$ goes. In the second case, $x$ approaches a finite value $a$ while $f(x)$ escapes to infinity.

Both use the infinity symbol, but in opposite roles.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Limits at Infinity — Horizontal Behavior`,
    content: `
The limit

@academic[formula_callout:Limits at Infinity — Horizontal Behavior
$$\\lim_{x \\to \\infty} f(x) = L$$]@

means $f(x)$ approaches $L$ as $x$ increases without bound. No matter how close to $L$ you demand, sufficiently large $x$ will place $f(x)$ within that tolerance.

Similarly:

@academic[formula_callout:Limits at Infinity — Horizontal Behavior
$$\\lim_{x \\to -\\infty} f(x) = M$$]@

means $f(x)$ approaches $M$ as $x$ decreases without bound.

These limits describe end behavior—the function's long-run tendency. The limit may be a finite number, $\\infty$, $-\\infty$, or may not exist (if the function oscillates).
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Horizontal Asymptotes`,
    content: `
If $\\lim_{x \\to \\infty} f(x) = L$ where $L$ is finite, the line $y = L$ is a horizontal asymptote. The graph approaches this line as $x \\to \\infty$.

@academic[formula_callout:Horizontal Asymptote Condition
$$\\lim_{x \\to \\infty} f(x) = L \\;\\text{ or }\\; \\lim_{x \\to -\\infty} f(x) = L \\implies y = L \\text{ is a horizontal asymptote}$$
/calculus/formulas#horizontal_asymptote_condition]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

A function can have:

- No horizontal asymptote (if the limit is infinite or doesn't exist)
- One horizontal asymptote (the same finite limit in both directions, or a finite limit in only one direction, as with $e^x$ as $x \\to -\\infty$)
- Two horizontal asymptotes (different finite limits as $x \\to \\infty$ and $x \\to -\\infty$)

For example:

@academic[formula_callout:Horizontal Asymptotes
$$f(x) = \\frac{2x + 1}{x - 3}$$]@

@academic[formula_callout:Horizontal Asymptotes
$$\\lim_{x \\to \\infty} f(x) = 2 \\qquad \\lim_{x \\to -\\infty} f(x) = 2$$]@

The line $y = 2$ is a horizontal asymptote in both directions.

@academic[fact,aside:true,width:35%:Crossing an asymptote infinitely often
$\\frac{\\sin x}{x}$ tends to $0$ as $x \\to \\infty$, so $y = 0$ is its horizontal asymptote. Yet it equals $0$ at every nonzero multiple of $\\pi$: the graph crosses the line infinitely many times, with swings that shrink like $\\frac{1}{x}$.]@

The definition of a horizontal asymptote asks only that the values of $f$ close in on $L$ far out. It says nothing about the side from which they approach, or about whether the graph ever reaches the line. For this function the gap to the line is $\\frac{2x + 1}{x - 3} - 2 = \\frac{7}{x - 3}$, positive for $x > 3$ and negative for $x < 3$. So the graph stays above $y = 2$ on the right and below it on the left, and it never meets the line at all.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Evaluating Limits at Infinity — Rational Functions`,
    content: `
For rational functions, divide numerator and denominator by the highest power of $x$ in the denominator.

@academic[formula_callout:Evaluating Limits at Infinity — Rational Functions
$$\\lim_{x \\to \\infty} \\frac{3x^2 + 5x - 1}{2x^2 - 7}$$]@

Divide by $x^2$:

@academic[formula_callout:Evaluating Limits at Infinity — Rational Functions
$$= \\lim_{x \\to \\infty} \\frac{3 + \\frac{5}{x} - \\frac{1}{x^2}}{2 - \\frac{7}{x^2}} = \\frac{3 + 0 - 0}{2 - 0} = \\frac{3}{2}$$]@

@academic[pitfall,aside:true,width:35%:Setting infinity over infinity to 1
Putting $x = \\infty$ into $\\frac{3x^2 + 5x - 1}{2x^2 - 7}$ gives $\\frac{\\infty}{\\infty}$, and cancelling that to $1$ treats $\\infty$ as a number. At $x = 1000$ the quotient is already about $1.50$; dividing by $x^2$ gives the limit $\\frac{3}{2}$.
[Read more](!#pitfalls)]@

Terms with $x$ in the denominator vanish as $x \\to \\infty$. Only the leading coefficients survive.

Dividing by $x^2$ changes the form of the quotient and not its value: for every $x \\neq 0$, the numerator and the denominator are divided by the same nonzero number. After the division each part has a finite limit, $3$ on top and $2$ below, so the limit of the quotient is the quotient of those two limits.
`,
    before: ``,
    after: ``,
    link: ``
  },
 obj5: {
    title: `Dominant Term Analysis`,
    content: `
As $x \\to \\infty$, the highest-degree terms control behavior. Lower-degree terms become negligible.

For $\\dfrac{p(x)}{q(x)}$ where $p$ has degree $m$ and $q$ has degree $n$:

**Case** $m < n$**:** The limit is $0$. The denominator grows faster.

@academic[formula_callout:Dominant Term Analysis
$$\\lim_{x \\to \\infty} \\frac{x + 1}{x^3 - 2} = 0$$]@

**Case** $m = n$**:** The limit is the ratio of leading coefficients.

@academic[formula_callout:Dominant Term Analysis
$$\\lim_{x \\to \\infty} \\frac{4x^2 + x}{2x^2 + 5} = \\frac{4}{2} = 2$$]@

**Case** $m > n$**:** The limit is $\\pm\\infty$. The numerator grows faster.

@academic[formula_callout:Dominant Term Analysis
$$\\lim_{x \\to \\infty} \\frac{x^3}{x + 1} = \\infty$$]@

@academic[pitfall,aside:true,width:35%:Taking the first coefficients instead of the leading ones
Reading $\\frac{7 + 4x^2}{x + 2x^2}$ from the left takes $7$ and $1$ as the coefficients and gives the limit $7$. The leading terms are $4x^2$ and $2x^2$, so the limit is $\\frac{4}{2} = 2$.
[Read more](!#pitfalls)]@

In all three cases the comparison is between the leading terms: the term with the highest power of $x$ in the numerator and the one in the denominator. The degrees $m$ and $n$ are the exponents of those two terms, and when $m = n$ their coefficients give the limit. All the other terms only affect how quickly the quotient settles down or grows, not where it goes.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Growth Rates — The Hierarchy`,
    content: `
Different function types grow at fundamentally different rates as $x \\to \\infty$:

@academic[formula_callout:Growth Rates — The Hierarchy
$$\\text{logarithmic} \\ll \\text{polynomial} \\ll \\text{exponential}$$]@

Any exponential eventually overtakes any polynomial:

@academic[formula_callout:Exponential Beats Polynomial
$$\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0 \\quad \\text{for any } n$$
/calculus/formulas#exponential_beats_polynomial]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

Any polynomial eventually overtakes any logarithm:

@academic[formula_callout:Polynomial Beats Logarithm
$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\quad \\text{for any } n > 0$$
/calculus/formulas#polynomial_beats_logarithm]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

@academic[fact,aside:true,width:35%:$\\ln x$ leads $x^{0.1}$ past $10^{15}$
Past $x \\approx 3$, $\\ln x$ runs ahead of $x^{0.1}$, and the power catches up only near $x \\approx 3.4 \\times 10^{15}$, where both are about $36$. Writing $x = e^t$ shows why: the race becomes $t$ against $e^{t/10}$.]@

These [special limits](!/calculus/limits/special) determine which terms dominate in mixed expressions.

Both limits say who wins in the end and nothing about when. The comparison is between the functions themselves, so a small power such as $x^{0.1}$ still counts as a polynomial-type term and still beats $\\ln x$ eventually. Before that happens, the two can trade places, and the weaker family can lead for a long stretch of $x$. A limit at infinity looks only at the far end, however late the final order sets in.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Infinite Limits — Vertical Behavior`,
    content: `
The notation

@academic[formula_callout:Infinite Limits — Vertical Behavior
$$\\lim_{x \\to a} f(x) = \\infty$$]@

means $f(x)$ grows without bound as $x$ approaches $a$. For any large number $M$, values of $x$ sufficiently close to $a$ make $f(x) > M$.

Similarly:

@academic[formula_callout:Infinite Limits — Vertical Behavior
$$\\lim_{x \\to a} f(x) = -\\infty$$]@

means $f(x)$ becomes arbitrarily negative.

These are not limits in the usual sense—$\\infty$ is not a number. The notation describes unbounded behavior, not convergence to a value.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Vertical Asymptotes`,
    content: `
If any of the following hold:

@academic[formula_callout:Vertical Asymptote Condition
$$\\lim_{x \\to a^-} f(x) = \\pm\\infty \\;\\text{ or }\\; \\lim_{x \\to a^+} f(x) = \\pm\\infty \\implies x = a \\text{ is a vertical asymptote}$$
/calculus/formulas#vertical_asymptote_condition]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

then the line $x = a$ is a vertical asymptote. The graph shoots up or down near $x = a$.

Vertical asymptotes typically occur where the denominator of a rational function equals zero while the numerator does not.

@academic[pitfall,aside:true,width:35%:Calling every zero of the denominator an asymptote
Placing an asymptote at $x = 2$ for $\\frac{x^2 - 4}{x - 2}$ because the denominator vanishes there ignores that the numerator vanishes too. The function equals $x + 2$ for $x \\neq 2$, so the limit is $4$: a hole, not an asymptote.
[Read more](!#pitfalls)]@

For $f(x) = \\dfrac{1}{x - 2}$, the denominator vanishes at $x = 2$. The line $x = 2$ is a vertical asymptote.

Here the numerator is the constant $1$, so near $x = 2$ the quotient is $1$ divided by a number close to $0$. At $x = 2.01$ it equals $100$ and at $x = 1.99$ it equals $-100$. Moving closer to $2$ makes the values grow without bound in size on both sides, which is what puts the asymptote at $x = 2$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Sign Analysis for Infinite Limits`,
    content: `
To determine whether a limit is $+\\infty$ or $-\\infty$, analyze the sign of the expression near the point.

@academic[formula_callout:Sign Analysis for Infinite Limits
$$\\lim_{x \\to 2^+} \\frac{1}{x - 2}$$]@

For $x$ slightly greater than $2$: $x - 2 > 0$ (small positive), so $\\dfrac{1}{x-2}$ is large positive.

@academic[formula_callout:Sign Analysis for Infinite Limits
$$\\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$]@

For $x$ slightly less than $2$: $x - 2 < 0$ (small negative), so $\\dfrac{1}{x-2}$ is large negative.

@academic[formula_callout:Sign Analysis for Infinite Limits
$$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty$$]@

@academic[pitfall,aside:true,width:35%:Ignoring the sign of the numerator
Reading only the small positive denominator in $\\lim_{x \\to 2^+} \\frac{x - 5}{x - 2}$ gives $+\\infty$. The numerator tends to $-3$, so the quotient is negative near $2$ and the limit is $-\\infty$.
[Read more](!#pitfalls)]@

The same reading works for any quotient whose numerator tends to a nonzero number while the denominator tends to $0$. Near the point the numerator stays close to its limit, so its sign does not change, while the denominator is a small number whose sign depends on the side of approach. The size of the quotient grows without bound, and the signs of the two parts decide its direction, as in ordinary division.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `One-Sided Infinite Limits`,
    content: `
The [one-sided limits](!/calculus/limits/one-sided) from the left and right may both be infinite but with opposite signs.

For $f(x) = \\dfrac{1}{x - 2}$:

@academic[formula_callout:One-Sided Infinite Limits
$$\\lim_{x \\to 2^-} f(x) = -\\infty \\qquad \\lim_{x \\to 2^+} f(x) = +\\infty$$]@

The two-sided limit does not exist because the sides disagree—even though both are "infinite."

For $f(x) = \\dfrac{1}{(x-2)^2}$:

@academic[formula_callout:One-Sided Infinite Limits
$$\\lim_{x \\to 2^-} f(x) = +\\infty \\qquad \\lim_{x \\to 2^+} f(x) = +\\infty$$]@

Both sides agree, so we write $\\lim_{x \\to 2} f(x) = +\\infty$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  notation: {
    title: `Infinity Symbol Notation`,
    lead: `One glyph, opposite jobs: under the lim as a direction for $x$, after the equals sign as a verdict about $f$. The entries keep them apart.`,
    inherited: `$\\lim$, the bare arrow and DNE belong to [two-sided limits](!/calculus/limits/two-sided); the superscripts $a^{-}$, $a^{+}$ to [one-sided limits](!/calculus/limits/one-sided).`,
    entries: [
      {
        id: 'infinity-symbol',
        tex: `$\\infty$`,
        read: `Infinity`,
        means: `Not a number — a name for unboundedness. It never enters arithmetic and appears only inside limit statements. LaTeX @[\\infty]@; the [mathematical keyboard](!/keyboard) carries $\\infty$.`,
        cases: `$+\\infty$ and $-\\infty$ — the two ends of the real line. Bare $\\infty$ conventionally means $+\\infty$ in real calculus.`,
        alsoWritten: `$+\\infty$ spelled with its sign in French and Eastern European texts, which reserve the bare glyph for the unsigned point of projective geometry.`,
        confusedWith: `A number that obeys arithmetic. $\\infty - \\infty$ and $\\infty/\\infty$ have no fixed value — they are the [indeterminate forms](!/calculus/limits/evaluating#notation) of limit evaluation.`,
        sameGlyphElsewhere: `In [set theory](!/set-theory/cardinality) infinite sizes are ℵ₀, 𝔠 — provably different infinities, a distinction the calculus symbol never makes.`,
      },
      {
        id: 'x-to-infinity',
        tex: `$x \\to \\infty$`,
        read: `As x approaches infinity`,
        means: `The input escapes: eventually beyond every bound. No point is being approached — shorthand, not location.`,
        cases: `$x \\to -\\infty$ — the other end; the two directions are independent, which is how a function earns two different asymptotes in **Horizontal Asymptotes** above. With an integer index, $n \\to \\infty$, the same notation runs through sequences and series.`,
        alsoWritten: `$x \\to +\\infty$, matching the signed tradition above.`,
        confusedWith: `“Plug in a huge number.” Nothing is substituted — $\\infty$ never enters $f$; the limit describes the trend, in **Limits at Infinity — Horizontal Behavior** above.`,
      },
      {
        id: 'equals-infinity',
        tex: `$\\lim\\limits_{x \\to a} f(x) = \\infty$`,
        read: `The limit is infinity`,
        means: `An abuse of the equals sign that stuck. The limit **does not exist** — but fails in the most informative way, unbounded growth, so the $=$ records behavior rather than a value.`,
        cases: `One-sided versions carry the [superscripts](!/calculus/limits/one-sided) and diagnose the lines in **Vertical Asymptotes** above, sign determined as in **Sign Analysis** above. The two-sided form is only legal when both sides agree on the same signed infinity — **One-Sided Infinite Limits** above.`,
        alsoWritten: `$f(x) \\to \\infty$ as $x \\to a$ — arrow form. Stricter analysis texts refuse the $=$ entirely and write “increases without bound”.`,
        confusedWith: `“Exists, and its value is infinity.” In real-valued calculus it does not exist; only on the extended real line is the equation literal — which is why the abuse survives.`,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/limits`,
    parentLabel: `Limits`,
  },
  obj11: {
    title: `Limits of Exponentials at Infinity`,
    content: `
The exponential function $e^x$ exhibits contrasting behavior in opposite directions:

@academic[formula_callout:Exponential End Behavior
$$\\lim_{x \\to \\infty} e^x = \\infty, \\qquad \\lim_{x \\to -\\infty} e^x = 0$$
/calculus/formulas#exponential_end_behavior]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

As $x \\to \\infty$, exponential growth is unbounded. As $x \\to -\\infty$, the function decays toward zero.

For $e^{-x}$, the behavior reverses:

@academic[formula_callout:Limits of Exponentials at Infinity
$$\\lim_{x \\to \\infty} e^{-x} = 0$$]@

@academic[formula_callout:Limits of Exponentials at Infinity
$$\\lim_{x \\to -\\infty} e^{-x} = \\infty$$]@

The horizontal asymptote $y = 0$ appears in the direction where the exponent goes to $-\\infty$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj12: {
    title: `Limits of Logarithms Toward Zero and Infinity`,
    content: `
The natural logarithm is defined only for $x > 0$. Its behavior at the boundaries:

@academic[formula_callout:Limits of Logarithms Toward Zero and Infinity
$$\\lim_{x \\to \\infty} \\ln x = \\infty$$]@

The logarithm grows without bound, but slowly—slower than any positive power of $x$.

@academic[formula_callout:Limits of Logarithms Toward Zero and Infinity
$$\\lim_{x \\to 0^+} \\ln x = -\\infty$$]@

As $x$ approaches zero from the right, $\\ln x$ plunges to $-\\infty$. The line $x = 0$ is a vertical asymptote for $\\ln x$.

@academic[formula_callout:Logarithm End Behavior
$$\\lim_{x \\to \\infty} \\ln x = \\infty, \\qquad \\lim_{x \\to 0^+} \\ln x = -\\infty$$
/calculus/formulas#logarithm_end_behavior]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

The one-sided notation is essential: $\\ln x$ is undefined for $x \\leq 0$, so no left-hand limit exists at $x = 0$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj13: {
    title: `Summary: Master Diagnostic for Limits and Asymptotes`,
    content: `
Every type of infinity behavior on this page maps cleanly to a graph feature: finite limits at ±∞ create horizontal asymptotes, infinite limits at finite a create vertical asymptotes, and the relative degree of a rational function&apos;s numerator and denominator determines exactly which case applies. The table below collects the diagnostic patterns in one master reference — given an observed limit form, it points to what that form means and what asymptote (if any) it produces.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj14: {
    title: `Common Pitfalls`,
    content: `
Four mistakes cause most wrong answers with limits at infinity and infinite limits. Each is marked where it happens in the sections above. Here each is worked through in full, with the wrong and the right working side by side.

**Setting infinity over infinity to 1**

As $x \\to \\infty$ the numerator and the denominator both grow without bound, and $\\dfrac{\\infty}{\\infty}$ is cancelled to $1$ as if $\\infty$ were a number.

Wrong working: in $\\lim_{x \\to \\infty} \\dfrac{3x^2 + 5x - 1}{2x^2 - 7}$ both parts tend to $\\infty$, so the limit is $\\dfrac{\\infty}{\\infty} = 1$.

Right working: divide every term by $x^2$. The expression becomes $\\dfrac{3 + \\frac{5}{x} - \\frac{1}{x^2}}{2 - \\frac{7}{x^2}}$, which tends to $\\dfrac{3 + 0 - 0}{2 - 0} = \\dfrac{3}{2}$.

Why it happens: a number divided by itself is $1$, and $\\infty$ is handled like a number. But the two parts can grow at different rates: $\\dfrac{x^2}{x}$ also has the form $\\dfrac{\\infty}{\\infty}$ and tends to $\\infty$, while $\\dfrac{x}{x^2}$ tends to $0$.

How to check: evaluate at a large $x$. At $x = 1000$ the quotient is $\\dfrac{3004999}{1999993} \\approx 1.5025$, close to $1.5$ and not to $1$.

**Taking the first coefficients instead of the leading ones**

When a polynomial is not written in descending powers, its first coefficient is not its leading coefficient. The ratio of the first coefficients is then read off as the limit, and it has nothing to do with the limit.

Wrong working: in $\\lim_{x \\to \\infty} \\dfrac{7 + 4x^2}{x + 2x^2}$ the first coefficients are $7$ and $1$, so the limit is $\\dfrac{7}{1} = 7$.

Right working: the leading terms are $4x^2$ and $2x^2$, so $m = n = 2$. Dividing every term by $x^2$ gives $\\dfrac{\\frac{7}{x^2} + 4}{\\frac{1}{x} + 2}$, which tends to $\\dfrac{0 + 4}{0 + 2} = 2$.

Why it happens: polynomials are usually written with the highest power first, so "leading" and "first" are taken to mean the same thing.

How to check: rewrite both polynomials in descending powers before reading anything off, or evaluate at a large $x$. At $x = 1000$ the quotient is $\\dfrac{4000007}{2001000} \\approx 1.999$, close to $2$ and far from $7$.

**Calling every zero of the denominator an asymptote**

A vertical asymptote is placed at every point where the denominator is $0$, without a check of the numerator there. If the numerator is also $0$, the form is $\\dfrac{0}{0}$, and the graph may have only a hole.

Wrong working: the denominator of $\\dfrac{x^2 - 4}{x - 2}$ vanishes at $x = 2$, so $x = 2$ is a vertical asymptote.

Right working: the numerator is also $0$ at $x = 2$. Factoring gives $\\dfrac{(x - 2)(x + 2)}{x - 2} = x + 2$ for $x \\neq 2$, so $\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2} = 4$. The limit is finite: the graph is the line $y = x + 2$ with a hole at $(2, 4)$, and there is no vertical asymptote.

Why it happens: in the simplest examples, such as $\\dfrac{1}{x - 2}$, the numerator is a constant, and the zero of the denominator is all there is to check.

How to check: substitute the zero of the denominator into the numerator. A nonzero value means an asymptote; a zero means the limit has to be computed first. Here, at $x = 2.01$ the quotient is $\\dfrac{2.01^2 - 4}{0.01} = 4.01$, which stays bounded.

**Ignoring the sign of the numerator**

In a one-sided infinite limit the sign is read from the denominator alone: a small positive denominator is taken to mean $+\\infty$, whatever the numerator does.

Wrong working: as $x \\to 2^+$, $x - 2$ is a small positive number, so $\\lim_{x \\to 2^+} \\dfrac{x - 5}{x - 2} = +\\infty$.

Right working: the numerator tends to $2 - 5 = -3$, which is negative. A negative number divided by a small positive number is a large negative number, so $\\lim_{x \\to 2^+} \\dfrac{x - 5}{x - 2} = -\\infty$.

Why it happens: in the standard example $\\dfrac{1}{x - 2}$ the numerator is $1$, so the sign of the quotient is the sign of the denominator, and that shortcut is carried over to quotients where it no longer holds.

How to check: evaluate just to the right of the point. At $x = 2.01$ the quotient is $\\dfrac{-2.99}{0.01} = -299$.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {
     id:"intro",

  title: `Beyond All Bounds`,
  content: `
Infinity enters limits in two distinct ways. When we write $x \\to \\infty$, we ask what happens to a function as its input grows without bound. When we write $f(x) \\to \\infty$, we describe a function whose output grows without bound as the input approaches some value.

These are different phenomena requiring different analyses. Limits at infinity reveal end behavior—how a function settles (or doesn't) as $x$ moves far from the origin. Infinite limits reveal explosive behavior—where a function blows up as $x$ approaches a finite point.

Both concepts connect to asymptotes. Horizontal asymptotes arise from finite limits at infinity. Vertical asymptotes arise from infinite limits at finite points. Together they sketch a function's large-scale structure.
`
};

// FAQ pass: cut nine case-A questions — horizontal behavior, horizontal and
// vertical asymptotes, rational functions, dominant terms, growth rates, sign
// analysis, one-sided infinite limits and logarithms each have an h2 stating
// the answer. Also cut "what does it mean when a limit equals infinity":
// /calculus/limits owns that as the existence question. Kept the two-concepts
// distinction and the exponential formula query; invented two from the
// notation section.
const faqQuestions = {
  obj1: {
    question: "What is the difference between limits at infinity and infinite limits?",
    answer: "They describe opposite situations. A limit at infinity asks what f(x) does as x escapes beyond every bound; a finite answer gives a horizontal asymptote. An infinite limit asks what happens as x approaches a finite point where f grows without bound, which gives a vertical asymptote. The first puts ∞ under the lim, the second after the equals sign.",
    sectionId: "1"
  },
  obj2: {
    question: "Is infinity a number?",
    answer: "No. In calculus ∞ is a name for unboundedness rather than a value, and it never enters arithmetic — which is why ∞ − ∞ and ∞/∞ are indeterminate forms instead of computations. It appears only inside limit statements. [Set theory](!/set-theory/cardinality) does treat infinite sizes as objects and distinguishes ℵ₀ from 𝔠, but the calculus symbol draws no such distinction.",
    sectionId: "notation"
  },
  obj3: {
    question: "Does x → ∞ mean plugging in a huge number?",
    answer: "No. Nothing is substituted — ∞ never enters the function. The notation says the input escapes beyond every bound, and the limit records the resulting trend in f. Testing one large value can suggest an answer but never establishes it, because the behavior has to hold past every bound, not past a single chosen number.",
    sectionId: "notation"
  },
  obj4: {
    question: "What is the limit of e^x as x approaches negative infinity?",
    answer: "It is 0. As x decreases without bound, e^x decays toward zero without ever reaching it, making the x-axis a horizontal asymptote on the left. The other direction reverses completely: as x increases without bound, e^x grows without bound, so there is no horizontal asymptote on the right.",
    sectionId: "11"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Limits and Infinity",
    "description": "Master limits at infinity and infinite limits: horizontal and vertical asymptotes, dominant term analysis, growth rate hierarchy, and evaluating limits of rational, exponential, and logarithmic functions.",
    "url": "https://www.learnmathclass.com/calculus/limits/infinity",
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
      "name": "Limits and Infinity"
    },
    "teaches": [
      "Distinction between limits at infinity and infinite limits",
      "Horizontal asymptotes from limits at infinity",
      "Evaluating limits of rational functions using dominant terms",
      "Growth rate hierarchy: logarithmic, polynomial, exponential",
      "Vertical asymptotes from infinite limits",
      "Sign analysis for determining ±∞",
      "Master diagnostic mapping limit forms to graph features"
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
        "name": "Calculus",
        "item": "https://www.learnmathclass.com/calculus"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Limits",
        "item": "https://www.learnmathclass.com/calculus/limits"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Limits and Infinity",
        "item": "https://www.learnmathclass.com/calculus/limits/infinity"
      }
    ]
  }
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const inR = (x) => (2 * x + 1) / (x - 3);
  const fpHorizAsym = { kind: 'pieces', svgTitle: '(2x + 1)/(x - 3) approaches the horizontal asymptote y = 2 as x goes to infinity and to minus infinity', xRange: [-12, 18], yRange: [-6, 10], xStep: 3, yStep: 2,
    pieces: [
      { fn: () => 2, from: 99, to: 99, ends: [null, null], color: 'r', ghost: [[-12, 18]], label: { text: 'y = 2', x: -11.5, y: 2, pos: 'ne' } },
      { fn: inR, from: -12, to: 2.3, ends: [null, null], color: 'f' },
      { fn: inR, from: 3.85, to: 18, ends: [null, null], color: 'f', label: { text: 'y = (2x + 1)/(x − 3)', x: 9, y: inR(9), pos: 'ne' } },
    ],
    vlines: [{ x: 3, label: 'x = 3' }],
    notes: [{ x: -11.5, y: -4.5, text: 'x → −∞: from below', pos: 'e', color: 'r' }, { x: 6.2, y: 7.8, text: 'x → ∞: from above', pos: 'e', color: 'r' }],
    caption: 'Both ends settle onto y = 2, the ratio of leading coefficients' };
  const fpGrowthRace = { kind: 'pieces', svgTitle: 'x^3 leads e^x for a while, but e^x overtakes it after x about 4.54 and the ratio x^3/e^x tends to 0', xRange: [0, 7], yRange: [-20, 300], yStep: 50,
    pieces: [
      { fn: (x) => x ** 3, from: 0, to: 6.6, ends: [null, null], color: 'g', label: { text: 'x³', x: 6.3, y: 6.3 ** 3, pos: 'se' } },
      { fn: Math.exp, from: 0, to: 5.7, ends: [null, null], color: 'f', label: { text: 'eˣ', x: 5.5, y: Math.exp(5.5), pos: 'nw' } },
      { fn: (x) => 20 * Math.log(Math.max(x, 0.01)), from: 1, to: 7, ends: [null, null], color: 'r', label: { text: '20 ln x', x: 6.5, y: 20 * Math.log(6.5), pos: 'n' } },
    ],
    points: [{ x: 4.536, y: 4.536 ** 3, label: 'eˣ passes x³ at x ≈ 4.54', pos: 'nw' }],
    caption: 'Logarithm ≪ power ≪ exponential: the exponential wins in the end' };
  const demoUnits = {
    vertical: demoUnitFrame({
      svg: functionLimitDiagrams['infinite-pos'],
      caption: '1/x&#178;: a vertical asymptote at x = 0',
      text: 'Both probes read 4 at &#177;0.5 and grow without bound as they move in: both one-sided limits are +&#8734;, which is the condition for a vertical asymptote at x = 0. The curve approaches the line without ever reaching it. Move the probes inward and watch the readings climb on the',
      href: '/calculus/visual-tools/limit',
      linkText: 'limit explorer',
    }),
    opposite: demoUnitFrame({
      svg: functionLimitDiagrams['infinite-jump'],
      caption: '1/x near 0: &#8722;&#8734; from the left, +&#8734; from the right',
      text: 'The left probe reads &#8722;2 and the right one 2, and moving inward they diverge in opposite directions: the two one-sided infinite limits have opposite signs, so the curve leaves the picture downward on one side of the asymptote and upward on the other. The two-sided limit does not exist even as an infinite limit. Compare the two signs on the',
      href: '/calculus/visual-tools/limit',
      linkText: 'limit explorer',
    }),
    horizAsym: demoUnitFrame({
      svg: renderFunctionPlotV4(fpHorizAsym),
      caption: 'A horizontal asymptote at both ends',
      text: 'The section&#8217;s (2x + 1)/(x &#8722; 3). Far to the right the graph sits just above the dashed line y = 2 and closes in on it; far to the left it sits just below it and closes in from beneath. Both limits at infinity equal 2, the ratio of the leading coefficients 2/1, so y = 2 is the horizontal asymptote in both directions. Near x = 3 the same function has a vertical asymptote instead.',
    }),
    growthRace: demoUnitFrame({
      svg: renderFunctionPlotV4(fpGrowthRace),
      caption: 'Exponential beats power beats logarithm',
      text: 'On [0, 7]: x&#179; pulls ahead of e&#739; for a while, but e&#739; catches it at x &#8776; 4.54 and from then on leaves it further and further behind, so x&#179;/e&#739; &#8594; 0. The logarithm, even multiplied by 20, barely rises on this scale and is overtaken by x&#179; almost at once. The ordering ln x &#8810; x&#8319; &#8810; e&#739; holds for every power n; a larger n only delays the crossing.',
    }),
  };

  const growthRateLevels = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Who wins as $x \\to \\infty$',
    preface: 'Different function types grow at fundamentally different rates. Each level eventually overtakes every function on the levels below it.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'What the rank buys',
    conclusion: 'Any exponential beats any polynomial, $\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0$, and any polynomial beats any logarithm, $\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0$ for $n > 0$.',
    axis: { top: 'fastest', label: 'growth rate', bottom: 'slowest' },
    levels: [
      { id: 'exp', name: 'Exponential', sub: '$e^x$, $2^x$' },
      { id: 'poly', name: 'Polynomial', sub: '$x^n$' },
      { id: 'log', name: 'Logarithmic', sub: '$\\ln x$' },
    ],
  };

  const horizontalAsymptoteProfile = {
    header: { kicker: 'a horizontal asymptote, both ends', title: 'Profile of the example', formula: '$f(x) = \\frac{2x + 1}{x - 3}$' },
    quickStats: [ { n: '2', label: 'limit at ±∞' }, { n: '0', label: 'crossings' } ],
    graph: {
      xRange: [-10, 16], yRange: [-4, 8],
      points: Array.from({ length: 521 }, (_, i) => { const x = -10 + i * 0.05; return [Number(x.toFixed(2)), Math.abs(x - 3) < 1e-9 ? null : Number(((2 * x + 1) / (x - 3)).toFixed(4))]; }),
      xTicks: [-10, -5, 0, 3, 5, 10, 15], yTicks: [-4, 0, 2, 4, 8],
      asymptotes: [{ y: 2 }],
    },
    features: [
      { id: 'ha', kind: 'warm', points: [{ x: -9, y: 2, r: 0 }, { x: 15, y: 2, r: 0 }] },
    ],
    intervals: [
      { label: 'vs y = 2', spans: [
        { from: null, to: 3, kind: 'neg', text: 'below the line' },
        { from: 3, to: null, kind: 'pos', text: 'above the line' },
      ] },
    ],
    properties: [
      { name: 'Key points', rows: [
        { featureId: 'ha', label: 'Asymptote', value: 'y = 2, both ends', tone: 'warm' },
      ] },
      { name: 'Global', rows: [
        { label: 'Limits', value: '$\\lim_{x \\to \\pm\\infty} f(x) = 2$' },
        { label: 'Gap to the line', value: '$f(x) - 2 = \\frac{7}{x - 3}$' },
        { label: 'Side', value: 'above for $x > 3$, below for $x < 3$' },
        { label: 'Crossings', value: 'none', tone: 'na', sub: '$\\frac{7}{x - 3}$ is never zero' },
      ] },
    ],
  };

return {
  props: {
    horizontalAsymptoteProfile,
    growthRateLevels,
    demoUnits,
    sectionsContent,
    introContent,
    obj5Table,
    obj10Table,
    obj12Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Limits and Infinity: Asymptotes & End Behavior | Learn Math Class",
      description: "Master limits at infinity and infinite limits: horizontal and vertical asymptotes, dominant term analysis, growth rate hierarchy, and evaluating limits of rational, exponential, and logarithmic functions.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/infinity",
      name: "Limits and Infinity"
    },
  }
}
   }

const hierarchyTheme = { title: '#06357A', accent: '#2563EB', warm: '#B45309' }

export default function InfinityPage({horizontalAsymptoteProfile, growthRateLevels, seoData, sectionsContent, introContent, obj5Table, obj10Table, obj12Table, summaryTable, faqQuestions, schemas, demoUnits}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

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
          <div key={'unit-horizAsym'} dangerouslySetInnerHTML={{ __html: demoUnits.horizAsym }} />,
          `A graph may cross its horizontal asymptote; the asymptote only describes the far ends.`,
          `The example as a full picture: $f(x) = \\frac{2x + 1}{x - 3}$ against its horizontal asymptote $y = 2$, with the side of the line it keeps on each end and the gap $\\frac{7}{x - 3}$ that decides it.`,
          <DiagramFrame
            key={'obj3-profile'}
            id="horizontal-asymptote-profile"
            title="Profile of (2x + 1)/(x − 3)"
            source="/calculus/limits/infinity"
          >
            <FunctionAnalysis data={horizontalAsymptoteProfile} theme={{ title: '#06357A', curve: '#06357A', accent: '#2563EB', warm: '#0284C7', warmInk: '#0369A1' }} />
          </DiagramFrame>,
          `The strip makes the sign of the gap visible: left of $x = 3$ the graph approaches $y = 2$ from below, right of it from above, and on neither side does it touch the line. A different function could cross its asymptote many times; this one, with a gap that is never zero, cannot.`,
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
          <div key={'obj5-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj5Table }} />,
          `@academic[punchline:Far out, a rational function is ruled by its two leading terms; the others change only the speed, never the destination.]@`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'unit-growthRace'} dangerouslySetInnerHTML={{ __html: demoUnits.growthRace }} />,
          `For x¹⁰ the crossing with eˣ comes only near x ≈ 35.8, but it does come.`,
          <DiagramFrame
            key={'obj6-diagram'}
            id="growth-rate-pyramid"
            title="Growth rates as x → ∞"
            source="/calculus/limits/infinity"
          >
            <Hierarchy data={growthRateLevels} variant="pyramid" exportable={false} theme={hierarchyTheme} />
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
                  <div key={'unit-vertical'} dangerouslySetInnerHTML={{ __html: demoUnits.vertical }} />,
          `A vertical asymptote is thus an infinite limit drawn as a line.`,
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
          <div key={'obj10-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj10Table }} />,
                  <div key={'unit-opposite'} dangerouslySetInnerHTML={{ __html: demoUnits.opposite }} />,
          `Sign analysis decides which direction each side takes; the asymptote itself is the same line either way.`,
        ]
    },
    {
        id:'notation',
        title:sectionsContent.notation.title,
        link:``,
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.notation.title}
            lead={sectionsContent.notation.lead}
            inherited={sectionsContent.notation.inherited}
            entries={sectionsContent.notation.entries}
            symbolsHref={sectionsContent.notation.symbolsHref}
            symbolsLabel={sectionsContent.notation.symbolsLabel}
            parentHref={sectionsContent.notation.parentHref}
            parentLabel={sectionsContent.notation.parentLabel}
            theme={'navy'}
          />,
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
          <div key={'obj12-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj12Table }} />,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Limits and Infinity FAQ`,
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
]

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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Infinite Limits and Limits at Infinity</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
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
   <KeyTermsCard
  id="0"
  title={sectionsContent.obj0.title}
  content={sectionsContent.obj0.content}
  after={sectionsContent.obj0.after}
  variant="light"
/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}