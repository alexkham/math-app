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
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">lim<sub>x → ±∞</sub> f(x) = ±∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function grows without bound in that direction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no horizontal asymptote there</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">lim<sub>x → a</sub> f(x) = ±∞ &nbsp;(one or both sides)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">output blows up near a finite point a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vertical asymptote x = a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj8, obj9</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational p/q, &nbsp;deg p &lt; deg q</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">denominator dominates</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal asymptote y = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj4, obj5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational p/q, &nbsp;deg p = deg q</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">leading-degree terms balance</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal asymptote y = (leading p) / (leading q)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj4, obj5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational p/q, &nbsp;deg p &gt; deg q</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">numerator dominates</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no horizontal asymptote (function escapes to ±∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Mixed exponential / logarithmic</td>
      <td style="padding: 12px 15px; color: #34495e;">apply the <a href="/calculus/limits/special" style="${linkStyle}">growth-rate hierarchy</a> (log ≪ poly ≪ exp)</td>
      <td style="padding: 12px 15px; color: #34495e;">depends on which family dominates — see obj11, obj12 above</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">obj6, obj11, obj12</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/limits/infinity ────────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Asymptote](!/calculus/definitions#asymptote) — horizontal ($y = L$) and vertical ($x = a$) boundary lines
// - [Limit](!/calculus/definitions#limit) — limits at infinity and infinite limits
// - [One-Sided Limit](!/calculus/definitions#one_sided_limit) — one-sided infinite limits at vertical asymptotes`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Two Distinct Concepts`,
//     content: `
// The notation distinguishes two cases:

// **Limits at infinity:** The input grows without bound.

// $$\\lim_{x \\to \\infty} f(x) \\qquad \\lim_{x \\to -\\infty} f(x)$$

// **Infinite limits:** The output grows without bound.

// $$\\lim_{x \\to a} f(x) = \\infty \\qquad \\lim_{x \\to a} f(x) = -\\infty$$

// In the first case, $x$ escapes to infinity while we track where $f(x)$ goes. In the second case, $x$ approaches a finite value $a$ while $f(x)$ escapes to infinity.

// Both use the infinity symbol, but in opposite roles.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj2: {
//     title: `Limits at Infinity — Horizontal Behavior`,
//     content: `
// The limit

// $$\\lim_{x \\to \\infty} f(x) = L$$

// means $f(x)$ approaches $L$ as $x$ increases without bound. No matter how close to $L$ you demand, sufficiently large $x$ will place $f(x)$ within that tolerance.

// Similarly:

// $$\\lim_{x \\to -\\infty} f(x) = M$$

// means $f(x)$ approaches $M$ as $x$ decreases without bound.

// These limits describe end behavior—the function's long-run tendency. The limit may be a finite number, $\\infty$, $-\\infty$, or may not exist (if the function oscillates).
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj3: {
//     title: `Horizontal Asymptotes`,
//     content: `
// If $\\lim_{x \\to \\infty} f(x) = L$ where $L$ is finite, the line $y = L$ is a horizontal asymptote. The graph approaches this line as $x \\to \\infty$.

// A function can have:

// - No horizontal asymptote (if the limit is infinite or doesn't exist)
// - One horizontal asymptote (same limit in both directions)
// - Two horizontal asymptotes (different finite limits as $x \\to \\infty$ and $x \\to -\\infty$)

// For example:

// $$f(x) = \\frac{2x + 1}{x - 3}$$

// $$\\lim_{x \\to \\infty} f(x) = 2 \\qquad \\lim_{x \\to -\\infty} f(x) = 2$$

// The line $y = 2$ is a horizontal asymptote in both directions.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj4: {
//     title: `Evaluating Limits at Infinity — Rational Functions`,
//     content: `
// For rational functions, divide numerator and denominator by the highest power of $x$ in the denominator.

// $$\\lim_{x \\to \\infty} \\frac{3x^2 + 5x - 1}{2x^2 - 7}$$

// Divide by $x^2$:

// $$= \\lim_{x \\to \\infty} \\frac{3 + \\frac{5}{x} - \\frac{1}{x^2}}{2 - \\frac{7}{x^2}} = \\frac{3 + 0 - 0}{2 - 0} = \\frac{3}{2}$$

// Terms with $x$ in the denominator vanish as $x \\to \\infty$. Only the leading coefficients survive.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj5: {
//     title: `Dominant Term Analysis`,
//     content: `
// As $x \\to \\infty$, the highest-degree terms control behavior. Lower-degree terms become negligible.

// For $\\dfrac{p(x)}{q(x)}$ where $p$ has degree $m$ and $q$ has degree $n$:

// **Case $m < n$:** The limit is $0$. The denominator grows faster.

// $$\\lim_{x \\to \\infty} \\frac{x + 1}{x^3 - 2} = 0$$

// **Case $m = n$:** The limit is the ratio of leading coefficients.

// $$\\lim_{x \\to \\infty} \\frac{4x^2 + x}{2x^2 + 5} = \\frac{4}{2} = 2$$

// **Case $m > n$:** The limit is $\\pm\\infty$. The numerator grows faster.

// $$\\lim_{x \\to \\infty} \\frac{x^3}{x + 1} = \\infty$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj6: {
//     title: `Growth Rates — The Hierarchy`,
//     content: `
// Different function types grow at fundamentally different rates as $x \\to \\infty$:

// $$\\text{logarithmic} \\ll \\text{polynomial} \\ll \\text{exponential}$$

// Any exponential eventually overtakes any polynomial:

// $$\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0 \\quad \\text{for any } n$$

// Any polynomial eventually overtakes any logarithm:

// $$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\quad \\text{for any } n > 0$$

// These [special limits](!/calculus/limits/special) determine which terms dominate in mixed expressions.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj7: {
//     title: `Infinite Limits — Vertical Behavior`,
//     content: `
// The notation

// $$\\lim_{x \\to a} f(x) = \\infty$$

// means $f(x)$ grows without bound as $x$ approaches $a$. For any large number $M$, values of $x$ sufficiently close to $a$ make $f(x) > M$.

// Similarly:

// $$\\lim_{x \\to a} f(x) = -\\infty$$

// means $f(x)$ becomes arbitrarily negative.

// These are not limits in the usual sense—$\\infty$ is not a number. The notation describes unbounded behavior, not convergence to a value.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj8: {
//     title: `Vertical Asymptotes`,
//     content: `
// If any of the following hold:

// $$\\lim_{x \\to a^+} f(x) = \\pm\\infty \\qquad \\lim_{x \\to a^-} f(x) = \\pm\\infty$$

// then the line $x = a$ is a vertical asymptote. The graph shoots up or down near $x = a$.

// Vertical asymptotes typically occur where the denominator of a rational function equals zero while the numerator does not.

// For $f(x) = \\dfrac{1}{x - 2}$, the denominator vanishes at $x = 2$. The line $x = 2$ is a vertical asymptote.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj9: {
//     title: `Sign Analysis for Infinite Limits`,
//     content: `
// To determine whether a limit is $+\\infty$ or $-\\infty$, analyze the sign of the expression near the point.

// $$\\lim_{x \\to 2^+} \\frac{1}{x - 2}$$

// For $x$ slightly greater than $2$: $x - 2 > 0$ (small positive), so $\\dfrac{1}{x-2}$ is large positive.

// $$\\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$

// For $x$ slightly less than $2$: $x - 2 < 0$ (small negative), so $\\dfrac{1}{x-2}$ is large negative.

// $$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj10: {
//     title: `One-Sided Infinite Limits`,
//     content: `
// The [one-sided limits](!/calculus/limits/one-sided) from the left and right may both be infinite but with opposite signs.

// For $f(x) = \\dfrac{1}{x - 2}$:

// $$\\lim_{x \\to 2^-} f(x) = -\\infty \\qquad \\lim_{x \\to 2^+} f(x) = +\\infty$$

// The two-sided limit does not exist because the sides disagree—even though both are "infinite."

// For $f(x) = \\dfrac{1}{(x-2)^2}$:

// $$\\lim_{x \\to 2^-} f(x) = +\\infty \\qquad \\lim_{x \\to 2^+} f(x) = +\\infty$$

// Both sides agree, so we write $\\lim_{x \\to 2} f(x) = +\\infty$.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj11: {
//     title: `Limits of Exponentials at Infinity`,
//     content: `
// The exponential function $e^x$ exhibits contrasting behavior in opposite directions:

// $$\\lim_{x \\to \\infty} e^x = \\infty$$

// $$\\lim_{x \\to -\\infty} e^x = 0$$

// As $x \\to \\infty$, exponential growth is unbounded. As $x \\to -\\infty$, the function decays toward zero.

// For $e^{-x}$, the behavior reverses:

// $$\\lim_{x \\to \\infty} e^{-x} = 0$$

// $$\\lim_{x \\to -\\infty} e^{-x} = \\infty$$

// The horizontal asymptote $y = 0$ appears in the direction where the exponent goes to $-\\infty$.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj12: {
//     title: `Limits of Logarithms Toward Zero and Infinity`,
//     content: `
// The natural logarithm is defined only for $x > 0$. Its behavior at the boundaries:

// $$\\lim_{x \\to \\infty} \\ln x = \\infty$$

// The logarithm grows without bound, but slowly—slower than any positive power of $x$.

// $$\\lim_{x \\to 0^+} \\ln x = -\\infty$$

// As $x$ approaches zero from the right, $\\ln x$ plunges to $-\\infty$. The line $x = 0$ is a vertical asymptote for $\\ln x$.

// The one-sided notation is essential: $\\ln x$ is undefined for $x \\leq 0$, so no left-hand limit exists at $x = 0$.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj13: {
//     title: `Summary: Master Diagnostic for Limits and Asymptotes`,
//     content: `
// Every type of infinity behavior on this page maps cleanly to a graph feature: finite limits at ±∞ create horizontal asymptotes, infinite limits at finite a create vertical asymptotes, and the relative degree of a rational function&apos;s numerator and denominator determines exactly which case applies. The table below collects the diagnostic patterns in one master reference — given an observed limit form, it points to what that form means and what asymptote (if any) it produces.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   }
// };


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

$$\\lim_{x \\to \\infty} f(x) \\qquad \\lim_{x \\to -\\infty} f(x)$$

**Infinite limits:** The output grows without bound.

$$\\lim_{x \\to a} f(x) = \\infty \\qquad \\lim_{x \\to a} f(x) = -\\infty$$

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

$$\\lim_{x \\to \\infty} f(x) = L$$

means $f(x)$ approaches $L$ as $x$ increases without bound. No matter how close to $L$ you demand, sufficiently large $x$ will place $f(x)$ within that tolerance.

Similarly:

$$\\lim_{x \\to -\\infty} f(x) = M$$

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
/calculus/limits/formulas#horizontal_asymptote_condition]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

A function can have:

- No horizontal asymptote (if the limit is infinite or doesn't exist)
- One horizontal asymptote (same limit in both directions)
- Two horizontal asymptotes (different finite limits as $x \\to \\infty$ and $x \\to -\\infty$)

For example:

$$f(x) = \\frac{2x + 1}{x - 3}$$

$$\\lim_{x \\to \\infty} f(x) = 2 \\qquad \\lim_{x \\to -\\infty} f(x) = 2$$

The line $y = 2$ is a horizontal asymptote in both directions.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Evaluating Limits at Infinity — Rational Functions`,
    content: `
For rational functions, divide numerator and denominator by the highest power of $x$ in the denominator.

$$\\lim_{x \\to \\infty} \\frac{3x^2 + 5x - 1}{2x^2 - 7}$$

Divide by $x^2$:

$$= \\lim_{x \\to \\infty} \\frac{3 + \\frac{5}{x} - \\frac{1}{x^2}}{2 - \\frac{7}{x^2}} = \\frac{3 + 0 - 0}{2 - 0} = \\frac{3}{2}$$

Terms with $x$ in the denominator vanish as $x \\to \\infty$. Only the leading coefficients survive.
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

**Case $m < n$:** The limit is $0$. The denominator grows faster.

$$\\lim_{x \\to \\infty} \\frac{x + 1}{x^3 - 2} = 0$$

**Case $m = n$:** The limit is the ratio of leading coefficients.

$$\\lim_{x \\to \\infty} \\frac{4x^2 + x}{2x^2 + 5} = \\frac{4}{2} = 2$$

**Case $m > n$:** The limit is $\\pm\\infty$. The numerator grows faster.

$$\\lim_{x \\to \\infty} \\frac{x^3}{x + 1} = \\infty$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Growth Rates — The Hierarchy`,
    content: `
Different function types grow at fundamentally different rates as $x \\to \\infty$:

$$\\text{logarithmic} \\ll \\text{polynomial} \\ll \\text{exponential}$$

Any exponential eventually overtakes any polynomial:

$$\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0 \\quad \\text{for any } n$$

Any polynomial eventually overtakes any logarithm:

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\quad \\text{for any } n > 0$$

These [special limits](!/calculus/limits/special) determine which terms dominate in mixed expressions.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Infinite Limits — Vertical Behavior`,
    content: `
The notation

$$\\lim_{x \\to a} f(x) = \\infty$$

means $f(x)$ grows without bound as $x$ approaches $a$. For any large number $M$, values of $x$ sufficiently close to $a$ make $f(x) > M$.

Similarly:

$$\\lim_{x \\to a} f(x) = -\\infty$$

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
/calculus/limits/formulas#vertical_asymptote_condition]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

then the line $x = a$ is a vertical asymptote. The graph shoots up or down near $x = a$.

Vertical asymptotes typically occur where the denominator of a rational function equals zero while the numerator does not.

For $f(x) = \\dfrac{1}{x - 2}$, the denominator vanishes at $x = 2$. The line $x = 2$ is a vertical asymptote.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Sign Analysis for Infinite Limits`,
    content: `
To determine whether a limit is $+\\infty$ or $-\\infty$, analyze the sign of the expression near the point.

$$\\lim_{x \\to 2^+} \\frac{1}{x - 2}$$

For $x$ slightly greater than $2$: $x - 2 > 0$ (small positive), so $\\dfrac{1}{x-2}$ is large positive.

$$\\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$

For $x$ slightly less than $2$: $x - 2 < 0$ (small negative), so $\\dfrac{1}{x-2}$ is large negative.

$$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty$$
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

$$\\lim_{x \\to 2^-} f(x) = -\\infty \\qquad \\lim_{x \\to 2^+} f(x) = +\\infty$$

The two-sided limit does not exist because the sides disagree—even though both are "infinite."

For $f(x) = \\dfrac{1}{(x-2)^2}$:

$$\\lim_{x \\to 2^-} f(x) = +\\infty \\qquad \\lim_{x \\to 2^+} f(x) = +\\infty$$

Both sides agree, so we write $\\lim_{x \\to 2} f(x) = +\\infty$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj11: {
    title: `Limits of Exponentials at Infinity`,
    content: `
The exponential function $e^x$ exhibits contrasting behavior in opposite directions:

@academic[formula_callout:Exponential End Behavior
$$\\lim_{x \\to \\infty} e^x = \\infty, \\qquad \\lim_{x \\to -\\infty} e^x = 0$$
/calculus/limits/formulas#exponential_end_behavior]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

As $x \\to \\infty$, exponential growth is unbounded. As $x \\to -\\infty$, the function decays toward zero.

For $e^{-x}$, the behavior reverses:

$$\\lim_{x \\to \\infty} e^{-x} = 0$$

$$\\lim_{x \\to -\\infty} e^{-x} = \\infty$$

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

$$\\lim_{x \\to \\infty} \\ln x = \\infty$$

The logarithm grows without bound, but slowly—slower than any positive power of $x$.

$$\\lim_{x \\to 0^+} \\ln x = -\\infty$$

As $x$ approaches zero from the right, $\\ln x$ plunges to $-\\infty$. The line $x = 0$ is a vertical asymptote for $\\ln x$.

@academic[formula_callout:Logarithm End Behavior
$$\\lim_{x \\to \\infty} \\ln x = \\infty, \\qquad \\lim_{x \\to 0^+} \\ln x = -\\infty$$
/calculus/limits/formulas#logarithm_end_behavior]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

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

const faqQuestions = {
  obj1: {
    question: "What is the difference between limits at infinity and infinite limits?",
    answer: "Limits at infinity describe what happens as the input x grows without bound (x → ∞). Infinite limits describe what happens when the output f(x) grows without bound as x approaches a finite value. Both use the infinity symbol but in opposite roles.",
    sectionId: "1"
  },
  obj2: {
    question: "What does limit as x approaches infinity mean?",
    answer: "The notation lim(x→∞) f(x) = L means f(x) approaches L as x increases without bound. No matter how close to L you demand, sufficiently large x will place f(x) within that tolerance. This describes the function's end behavior.",
    sectionId: "2"
  },
  obj3: {
    question: "What is a horizontal asymptote?",
    answer: "If lim(x→∞) f(x) = L where L is finite, the line y = L is a horizontal asymptote. A function can have zero, one, or two horizontal asymptotes depending on whether the limits exist and match in both directions.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you evaluate limits at infinity for rational functions?",
    answer: "Divide numerator and denominator by the highest power of x in the denominator. Terms with x in the denominator vanish as x → ∞, leaving only the leading coefficients. The result depends on comparing the degrees of numerator and denominator.",
    sectionId: "4"
  },
  obj5: {
    question: "What is dominant term analysis?",
    answer: "As x → ∞, the highest-degree terms control behavior. If the numerator degree is less than denominator degree, the limit is 0. If equal, it's the ratio of leading coefficients. If greater, the limit is ±∞.",
    sectionId: "5"
  },
  obj6: {
    question: "How do growth rates compare: logarithms, polynomials, and exponentials?",
    answer: "The hierarchy is: logarithmic ≪ polynomial ≪ exponential. Any exponential eventually overtakes any polynomial (x^n/e^x → 0), and any polynomial eventually overtakes any logarithm (ln(x)/x^n → 0).",
    sectionId: "6"
  },
  obj7: {
    question: "What does it mean when a limit equals infinity?",
    answer: "The notation lim(x→a) f(x) = ∞ means f(x) grows without bound as x approaches a. For any large number M, values of x sufficiently close to a make f(x) > M. This is not convergence to a value but describes unbounded behavior.",
    sectionId: "7"
  },
  obj8: {
    question: "What is a vertical asymptote?",
    answer: "If lim(x→a⁺) f(x) = ±∞ or lim(x→a⁻) f(x) = ±∞, then x = a is a vertical asymptote. The graph shoots up or down near x = a. These typically occur where a rational function's denominator equals zero while the numerator doesn't.",
    sectionId: "8"
  },
  obj9: {
    question: "How do you determine if an infinite limit is positive or negative?",
    answer: "Use sign analysis near the point. Check whether the expression is positive or negative for values slightly greater than and slightly less than the point. For 1/(x−2), x slightly above 2 gives positive output (+∞), while x slightly below gives negative (−∞).",
    sectionId: "9"
  },
  obj10: {
    question: "Can one-sided infinite limits differ in sign?",
    answer: "Yes. For f(x) = 1/(x−2), the left limit is −∞ and the right limit is +∞. The two-sided limit doesn't exist because the sides disagree. However, for f(x) = 1/(x−2)², both sides are +∞, so the two-sided limit is +∞.",
    sectionId: "10"
  },
  obj11: {
    question: "What are the limits of e^x at positive and negative infinity?",
    answer: "As x → ∞, e^x → ∞ (unbounded exponential growth). As x → −∞, e^x → 0 (decay toward zero). The horizontal asymptote y = 0 appears in the direction where the exponent goes to −∞.",
    sectionId: "11"
  },
  obj12: {
    question: "What are the limits of ln(x) at zero and infinity?",
    answer: "As x → ∞, ln(x) → ∞ (grows slowly, slower than any positive power). As x → 0⁺, ln(x) → −∞, so x = 0 is a vertical asymptote. The one-sided notation is essential since ln(x) is undefined for x ≤ 0.",
    sectionId: "12"
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
  },

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Object.keys(faqQuestions).map(key => ({
      "@type": "Question",
      "name": faqQuestions[key].question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqQuestions[key].answer
      }
    }))
  }
}


return {
  props: {
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

export default function InfinityPage({seoData, sectionsContent, introContent, obj5Table, obj10Table, obj12Table, summaryTable, faqQuestions, schemas}) {

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
          <div key={'obj10-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj10Table }} />,
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

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
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
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}