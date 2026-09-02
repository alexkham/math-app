// tables-optimized: v4 | 2026-05-24 | 3 tables (obj3 aggregation, obj9 aggregation, obj11 summary capstone)
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
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  "special limits calculus",
  "limit sin x over x",
  "sin x divided by x limit",
  "limit e^x minus 1 over x",
  "definition of e limit",
  "1 minus cos x over x",
  "trigonometric limits",
  "exponential limits",
  "logarithmic limits",
  "limits to memorize",
  "squeeze theorem limit",
  "growth rate comparison limits",
  "indeterminate form 0/0",
  "fundamental limit calculus",
  "ln(1+x) over x limit"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj3 — aggregation: trigonometric special limits (covers obj2 + obj3)
const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Limit (x → 0)</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Value</th>
      <th style="${tableHeaders.aggregation}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin x / x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the fundamental trig limit; x in radians</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(1 − cos x) / x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">derived via conjugate trick (see obj4 below)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(1 − cos x) / x²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sharper version with higher-order denominator</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">tan x / x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor as (sin x / x) · (1 / cos x), each → 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">x / sin x</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">1</td>
      <td style="padding: 12px 15px; color: #34495e;">reciprocal of the fundamental trig limit</td>
    </tr>
  </tbody>
</table>
`

// obj9 — aggregation: growth-rate comparisons as x → ∞
const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Pair</th>
      <th style="${tableHeaders.aggregation}">Slower grower</th>
      <th style="${tableHeaders.aggregation}">Faster grower</th>
      <th style="${tableHeaders.aggregation}">Limit (x → ∞)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithmic vs polynomial</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ln x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sup>n</sup>, any n &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ln x / x<sup>n</sup> → 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial vs natural exponential</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sup>n</sup>, any n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e<sup>x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sup>n</sup> / e<sup>x</sup> → 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Polynomial vs general exponential</td>
      <td style="padding: 12px 15px; color: #34495e;">x<sup>n</sup>, any n</td>
      <td style="padding: 12px 15px; color: #34495e;">a<sup>x</sup>, any a &gt; 1</td>
      <td style="padding: 12px 15px; color: #34495e;">x<sup>n</sup> / a<sup>x</sup> → 0</td>
    </tr>
  </tbody>
</table>
`

// obj11 — summary capstone: master reference of all special limits
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Family</th>
      <th style="${tableHeaders.summary}">Limit</th>
      <th style="${tableHeaders.summary} text-align: center;">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → 0</sub> sin x / x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → 0</sub> (1 − cos x) / x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → 0</sub> (1 − cos x) / x²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1/2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → 0</sub> tan x / x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → 0</sub> x / sin x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exponential</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → 0</sub> (e<sup>x</sup> − 1) / x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exponential</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → 0</sub> (a<sup>x</sup> − 1) / x &nbsp;(a &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">ln a</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exponential</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → 0</sub> ln(1 + x) / x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Definition of e</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → ∞</sub> (1 + 1/x)<sup>x</sup> = lim<sub>x → 0</sub> (1 + x)<sup>1/x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">e</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithmic (boundary)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → 0⁺</sub> x ln x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithmic (boundary)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → 0⁺</sub> x<sup>n</sup> ln x &nbsp;(n &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Growth-rate (x → ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → ∞</sub> ln x / x<sup>n</sup> &nbsp;(n &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Growth-rate (x → ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → ∞</sub> x<sup>n</sup> / e<sup>x</sup> &nbsp;(any n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Growth-rate (x → ∞)</td>
      <td style="padding: 12px 15px; color: #34495e;">lim<sub>x → ∞</sub> x<sup>n</sup> / a<sup>x</sup> &nbsp;(any n, a &gt; 1)</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">0</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/limits/special ─────────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Limit](!/calculus/definitions#limit) — the object whose value these results establish
// - [Indeterminate Form](!/calculus/definitions#indeterminate_form) — each special limit arises from an indeterminate form`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Why Memorize Special Limits?`,
//     content: `
// Special limits resist direct computation. Substitution yields indeterminate forms, and algebraic manipulation alone cannot resolve them without circular reasoning or advanced tools.

// Their values come from geometric arguments, series expansions, or the definitions of the functions involved. Once established, these limits become permanent tools in the calculus toolkit.

// Memorizing them provides immediate payoff:

// - Faster problem-solving when these forms appear
// - Building blocks for evaluating more complex limits
// - Foundation for understanding derivatives of transcendental functions
// - Recognition of patterns that guide algebraic manipulation
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj2: {
//     title: `The Fundamental Trigonometric Limit`,
//     content: `
// $$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$

// This limit requires $x$ measured in radians. Direct substitution gives $0/0$, revealing nothing.

// The standard proof uses the unit circle. For small positive $x$, three quantities satisfy:

// $$\\sin x < x < \\tan x$$

// Dividing by $\\sin x$:

// $$1 < \\frac{x}{\\sin x} < \\frac{1}{\\cos x}$$

// Taking reciprocals and applying the [Squeeze Theorem](!/calculus/limits/rules):

// $$\\cos x < \\frac{\\sin x}{x} < 1$$

// As $x \\to 0$, $\\cos x \\to 1$, so $\\dfrac{\\sin x}{x}$ is squeezed to $1$.

// This limit determines the derivative of $\\sin x$: the fact that $(\\sin x)' = \\cos x$ depends entirely on this result.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj3: {
//     title: `Related Trigonometric Limits`,
//     content: `
// Several limits follow from the fundamental trigonometric limit.

// $$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$$

// $$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$$

// $$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$$

// $$\\lim_{x \\to 0} \\frac{x}{\\sin x} = 1$$

// The last follows by taking the reciprocal: if $\\dfrac{\\sin x}{x} \\to 1$, then $\\dfrac{x}{\\sin x} \\to 1$ as well.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj4: {
//     title: `Deriving (1 − cos x)/x = 0`,
//     content: `
// Start with the expression and multiply by the conjugate:

// $$\\frac{1 - \\cos x}{x} \\cdot \\frac{1 + \\cos x}{1 + \\cos x} = \\frac{1 - \\cos^2 x}{x(1 + \\cos x)} = \\frac{\\sin^2 x}{x(1 + \\cos x)}$$

// Rewrite as a product:

// $$= \\frac{\\sin x}{x} \\cdot \\frac{\\sin x}{1 + \\cos x}$$

// As $x \\to 0$:

// $$\\frac{\\sin x}{x} \\to 1 \\qquad \\frac{\\sin x}{1 + \\cos x} \\to \\frac{0}{2} = 0$$

// Therefore:

// $$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 1 \\cdot 0 = 0$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj5: {
//     title: `The Natural Exponential Limit`,
//     content: `
// $$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$$

// Direct substitution gives $0/0$. This limit defines the derivative of $e^x$ at $x = 0$:

// $$\\frac{d}{dx} e^x \\bigg|_{x=0} = \\lim_{h \\to 0} \\frac{e^{0+h} - e^0}{h} = \\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$$

// The exponential function is the unique function satisfying $f'(x) = f(x)$ with $f(0) = 1$. This limit is the cornerstone of that property.

// An equivalent form:

// $$\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj6: {
//     title: `Related Exponential Limits`,
//     content: `
// For any base $a > 0$:

// $$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$$

// When $a = e$, this reduces to the natural exponential limit since $\\ln e = 1$.

// For the natural logarithm:

// $$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$$

// This can be seen by substituting $u = \\ln(1 + x)$, so $e^u = 1 + x$ and $x = e^u - 1$. As $x \\to 0$, $u \\to 0$:

// $$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = \\lim_{u \\to 0} \\frac{u}{e^u - 1} = 1$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj7: {
//     title: `The Definition of e`,
//     content: `
// The number $e$ emerges from limits:

// $$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$$

// Equivalently, using discrete notation:

// $$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$$

// Another form with $x \\to 0$:

// $$\\lim_{x \\to 0} (1 + x)^{1/x} = e$$

// The value is $e \\approx 2.71828$. This limit arises naturally in compound interest: if interest is compounded $n$ times per year at annual rate $100\\%$, the growth factor over one year is $(1 + 1/n)^n$, which approaches $e$ as $n \\to \\infty$.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj8: {
//     title: `Limits Involving Logarithms`,
//     content: `
// Logarithms grow slowly—slower than any positive power of $x$.

// $$\\lim_{x \\to 0^+} x \\ln x = 0$$

// This is a $0 \\cdot (-\\infty)$ form. As $x \\to 0^+$, $x$ vanishes while $\\ln x \\to -\\infty$. The factor $x$ wins: the product approaches $0$.

// $$\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = 0$$

// As $x \\to \\infty$, both numerator and denominator grow, but $x$ grows faster than $\\ln x$. The ratio vanishes.

// More generally, for any $n > 0$:

// $$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\qquad \\lim_{x \\to 0^+} x^n \\ln x = 0$$

// Logarithms lose to any positive power.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj9: {
//     title: `Growth Rate Comparisons`,
//     content: `
// As $x \\to \\infty$, functions grow at different rates. The hierarchy:

// $$\\text{logarithmic} \\ll \\text{polynomial} \\ll \\text{exponential}$$

// Specifically:

// $$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\quad \\text{for any } n > 0$$

// $$\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0 \\quad \\text{for any } n$$

// $$\\lim_{x \\to \\infty} \\frac{x^n}{a^x} = 0 \\quad \\text{for any } a > 1 \\text{ and any } n$$

// Exponentials dominate polynomials, which dominate logarithms. These comparisons determine which terms control behavior in [limits at infinity](!/calculus/limits/infinity).
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj10: {
//     title: `Using Special Limits`,
//     content: `
// Rewrite expressions to match known forms.

// ## Example 1

// $$\\lim_{x \\to 0} \\frac{\\sin 5x}{3x}$$

// Rewrite to expose the standard form:

// $$= \\frac{5}{3} \\cdot \\lim_{x \\to 0} \\frac{\\sin 5x}{5x} = \\frac{5}{3} \\cdot 1 = \\frac{5}{3}$$

// ## Example 2

// $$\\lim_{x \\to 0} \\frac{e^{4x} - 1}{x}$$

// Factor out the coefficient:

// $$= 4 \\cdot \\lim_{x \\to 0} \\frac{e^{4x} - 1}{4x} = 4 \\cdot 1 = 4$$

// ## Example 3

// $$\\lim_{x \\to 0} \\frac{\\tan x}{x} = \\lim_{x \\to 0} \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x} = 1 \\cdot 1 = 1$$

// Recognizing patterns and factoring to match special limits streamlines computation.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj11: {
//     title: `Summary: Master Reference of Special Limits`,
//     content: `
// Every limit on this page appears repeatedly throughout calculus, and pattern-matching against them is the first move for any indeterminate-form limit. The table below collects them in one master reference, grouped by family — trigonometric, exponential, the definition of e, boundary-behavior logarithmic limits, and growth-rate comparisons as x → ∞. The first useful question to ask about an unfamiliar limit is whether it can be massaged into one of these forms; very often, the answer is yes.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   }
// };


// formulas-optimized: v1 | 2026-06-09 | 10 callouts (obj2, obj3, obj3, obj3, obj5, obj6, obj7, obj8, obj9, obj9)
const sectionsContent = {
  // ─── /calculus/limits/special ─────────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Limit](!/calculus/definitions#limit) — the object whose value these results establish
- [Indeterminate Form](!/calculus/definitions#indeterminate_form) — each special limit arises from an indeterminate form`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Why Memorize Special Limits?`,
    content: `
Special limits resist direct computation. Substitution yields indeterminate forms, and algebraic manipulation alone cannot resolve them without circular reasoning or advanced tools.

Their values come from geometric arguments, series expansions, or the definitions of the functions involved. Once established, these limits become permanent tools in the calculus toolkit.

Memorizing them provides immediate payoff:

- Faster problem-solving when these forms appear
- Building blocks for evaluating more complex limits
- Foundation for understanding derivatives of transcendental functions
- Recognition of patterns that guide algebraic manipulation
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `The Fundamental Trigonometric Limit`,
    content: `
@academic[formula_callout:Sine Limit at Zero
$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$
/calculus/formulas#sine_limit_at_zero]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

This limit requires $x$ measured in radians. Direct substitution gives $0/0$, revealing nothing.

The standard proof uses the unit circle. For small positive $x$, three quantities satisfy:

$$\\sin x < x < \\tan x$$

Dividing by $\\sin x$:

$$1 < \\frac{x}{\\sin x} < \\frac{1}{\\cos x}$$

Taking reciprocals and applying the [Squeeze Theorem](!/calculus/limits/rules):

$$\\cos x < \\frac{\\sin x}{x} < 1$$

As $x \\to 0$, $\\cos x \\to 1$, so $\\dfrac{\\sin x}{x}$ is squeezed to $1$.

This limit determines the derivative of $\\sin x$: the fact that $(\\sin x)' = \\cos x$ depends entirely on this result.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Related Trigonometric Limits`,
    content: `
Several limits follow from the fundamental trigonometric limit.

@academic[formula_callout:Cosine Limit at Zero
$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$$
/calculus/formulas#cosine_limit_at_zero]@

@academic[formula_callout:Cosine Quadratic Limit at Zero
$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$$
/calculus/formulas#cosine_quadratic_limit_at_zero]@

@academic[formula_callout:Tangent Limit at Zero
$$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$$
/calculus/formulas#tangent_limit_at_zero]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

$$\\lim_{x \\to 0} \\frac{x}{\\sin x} = 1$$

The last follows by taking the reciprocal: if $\\dfrac{\\sin x}{x} \\to 1$, then $\\dfrac{x}{\\sin x} \\to 1$ as well.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Deriving (1 − cos x)/x = 0`,
    content: `
Start with the expression and multiply by the conjugate:

$$\\frac{1 - \\cos x}{x} \\cdot \\frac{1 + \\cos x}{1 + \\cos x} = \\frac{1 - \\cos^2 x}{x(1 + \\cos x)} = \\frac{\\sin^2 x}{x(1 + \\cos x)}$$

Rewrite as a product:

$$= \\frac{\\sin x}{x} \\cdot \\frac{\\sin x}{1 + \\cos x}$$

As $x \\to 0$:

$$\\frac{\\sin x}{x} \\to 1 \\qquad \\frac{\\sin x}{1 + \\cos x} \\to \\frac{0}{2} = 0$$

Therefore:

$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 1 \\cdot 0 = 0$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `The Natural Exponential Limit`,
    content: `
@academic[formula_callout:Exponential Limit at Zero
$$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$$
/calculus/formulas#exponential_limit_at_zero]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

Direct substitution gives $0/0$. This limit defines the derivative of $e^x$ at $x = 0$:

$$\\frac{d}{dx} e^x \\bigg|_{x=0} = \\lim_{h \\to 0} \\frac{e^{0+h} - e^0}{h} = \\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$$

The exponential function is the unique function satisfying $f'(x) = f(x)$ with $f(0) = 1$. This limit is the cornerstone of that property.

An equivalent form:

$$\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Related Exponential Limits`,
    content: `
For any base $a > 0$:

$$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$$

When $a = e$, this reduces to the natural exponential limit since $\\ln e = 1$.

For the natural logarithm:

@academic[formula_callout:Logarithm Taylor Limit
$$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$$
/calculus/formulas#logarithm_taylor_limit]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

This can be seen by substituting $u = \\ln(1 + x)$, so $e^u = 1 + x$ and $x = e^u - 1$. As $x \\to 0$, $u \\to 0$:

$$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = \\lim_{u \\to 0} \\frac{u}{e^u - 1} = 1$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `The Definition of e`,
    content: `
The number $e$ emerges from limits:

@academic[formula_callout:Definition of e as a Limit
$$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$$
/calculus/formulas#definition_of_e_as_a_limit]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

Equivalently, using discrete notation:

$$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$$

Another form with $x \\to 0$:

$$\\lim_{x \\to 0} (1 + x)^{1/x} = e$$

The value is $e \\approx 2.71828$. This limit arises naturally in compound interest: if interest is compounded $n$ times per year at annual rate $100\\%$, the growth factor over one year is $(1 + 1/n)^n$, which approaches $e$ as $n \\to \\infty$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Limits Involving Logarithms`,
    content: `
Logarithms grow slowly—slower than any positive power of $x$.

@academic[formula_callout:x ln x Limit at Zero
$$\\lim_{x \\to 0^+} x \\ln x = 0$$
/calculus/formulas#x_ln_x_limit_at_zero]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

This is a $0 \\cdot (-\\infty)$ form. As $x \\to 0^+$, $x$ vanishes while $\\ln x \\to -\\infty$. The factor $x$ wins: the product approaches $0$.

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = 0$$

As $x \\to \\infty$, both numerator and denominator grow, but $x$ grows faster than $\\ln x$. The ratio vanishes.

More generally, for any $n > 0$:

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\qquad \\lim_{x \\to 0^+} x^n \\ln x = 0$$

Logarithms lose to any positive power.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Growth Rate Comparisons`,
    content: `
As $x \\to \\infty$, functions grow at different rates. The hierarchy:

$$\\text{logarithmic} \\ll \\text{polynomial} \\ll \\text{exponential}$$

Specifically:

@academic[formula_callout:Polynomial Beats Logarithm
$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0, \\quad n > 0$$
/calculus/formulas#polynomial_beats_logarithm]@

@academic[formula_callout:Exponential Beats Polynomial
$$\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0$$
/calculus/formulas#exponential_beats_polynomial]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

$$\\lim_{x \\to \\infty} \\frac{x^n}{a^x} = 0 \\quad \\text{for any } a > 1 \\text{ and any } n$$

Exponentials dominate polynomials, which dominate logarithms. These comparisons determine which terms control behavior in [limits at infinity](!/calculus/limits/infinity).
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Using Special Limits`,
    content: `
Rewrite expressions to match known forms.

## Example 1

$$\\lim_{x \\to 0} \\frac{\\sin 5x}{3x}$$

Rewrite to expose the standard form:

$$= \\frac{5}{3} \\cdot \\lim_{x \\to 0} \\frac{\\sin 5x}{5x} = \\frac{5}{3} \\cdot 1 = \\frac{5}{3}$$

## Example 2

$$\\lim_{x \\to 0} \\frac{e^{4x} - 1}{x}$$

Factor out the coefficient:

$$= 4 \\cdot \\lim_{x \\to 0} \\frac{e^{4x} - 1}{4x} = 4 \\cdot 1 = 4$$

## Example 3

$$\\lim_{x \\to 0} \\frac{\\tan x}{x} = \\lim_{x \\to 0} \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x} = 1 \\cdot 1 = 1$$

Recognizing patterns and factoring to match special limits streamlines computation.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj11: {
    title: `Summary: Master Reference of Special Limits`,
    content: `
Every limit on this page appears repeatedly throughout calculus, and pattern-matching against them is the first move for any indeterminate-form limit. The table below collects them in one master reference, grouped by family — trigonometric, exponential, the definition of e, boundary-behavior logarithmic limits, and growth-rate comparisons as x → ∞. The first useful question to ask about an unfamiliar limit is whether it can be massaged into one of these forms; very often, the answer is yes.
`,
    before: ``,
    after: ``,
    link: ``
  }
};


const introContent = {
   id:"intro",

  title: `Limits Worth Memorizing`,
  content: `
Certain limits appear so frequently in calculus that recognizing them on sight saves considerable effort. Each of these limits yields an indeterminate form under direct substitution—typically $0/0$—yet each has a definite, well-established value.

These special limits are not mere curiosities. The limit $\\dfrac{\\sin x}{x} \\to 1$ underlies the derivatives of all trigonometric functions. The limit $\\dfrac{e^x - 1}{x} \\to 1$ defines what makes the exponential function special. The limit $(1 + 1/x)^x \\to e$ provides one definition of $e$ itself.

Knowing these limits transforms difficult calculations into straightforward applications. When a complicated expression can be massaged into a form matching one of these patterns, the work is essentially done.
`
};


// FAQ pass: cut six case-A questions — why memorize, (1 − cos x)/x (its h2
// carries the formula and the answer), the definition of e, growth rates,
// using special limits, and x·ln(x). Kept four formula-shaped queries: this
// page titles its sections descriptively ("The Fundamental Trigonometric
// Limit"), so the formulas people actually search for match no heading.
const faqQuestions = {
  obj1: {
    question: "What is the limit of sin(x)/x as x approaches 0?",
    answer: "The limit equals 1, with x measured in radians. Direct substitution gives 0/0, so the standard proof uses the unit circle inequality sin x < x < tan x, which rearranges to cos x < sin(x)/x < 1. Since cos x approaches 1, the Squeeze Theorem forces the middle term to 1. This result is what makes the derivative of sin x equal cos x.",
    sectionId: "2"
  },
  obj2: {
    question: "What is the limit of (e^x − 1)/x as x approaches 0?",
    answer: "The limit equals 1. Direct substitution gives 0/0, but the expression is exactly the difference quotient for e^x at x = 0, so the limit is the derivative of e^x there. Its value of 1 is what makes e the unique base whose exponential function is its own derivative, with f(0) = 1.",
    sectionId: "5"
  },
  obj3: {
    question: "What is the limit of ln(1+x)/x as x approaches 0?",
    answer: "The limit equals 1. Substituting u = ln(1 + x) gives x = e^u − 1, and as x approaches 0 so does u, turning the expression into u/(e^u − 1) — the reciprocal of the natural exponential limit, which is also 1. The two results are the same fact viewed from opposite sides.",
    sectionId: "6"
  },
  obj4: {
    question: "What is the limit of (a^x − 1)/x as x approaches 0?",
    answer: "For any base a > 0, the limit equals ln a. This generalizes the natural exponential limit: setting a = e gives ln e = 1, recovering the familiar result. The appearance of ln a here is why the derivative of a^x is a^x·ln a rather than simply a^x, and why base e is the convenient choice.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Special Limits in Calculus",
    "description": "Master special limits: sin(x)/x, (e^x-1)/x, definition of e, logarithmic limits, and growth rate comparisons. Essential limits to memorize for calculus.",
    "url": "https://www.learnmathclass.com/calculus/limits/special",
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
      "name": "Special Limits"
    },
    "teaches": [
      "The fundamental trigonometric limit sin(x)/x = 1",
      "Related trigonometric limits including (1-cos x)/x",
      "The natural exponential limit (e^x - 1)/x = 1",
      "Definition of e as a limit",
      "Logarithmic limits and growth rate comparisons",
      "Techniques for applying special limits to evaluate other limits",
      "Master reference of all special limits"
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
        "name": "Special Limits",
        "item": "https://www.learnmathclass.com/calculus/limits/special"
      }
    ]
  }
}


return {
  props: {
    sectionsContent,
    introContent,
    obj3Table,
    obj9Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Special Limits: sin(x)/x, e^x, and More | Learn Math Class",
      description: "Master special limits: sin(x)/x, (e^x-1)/x, definition of e, logarithmic limits, and growth rate comparisons. Essential limits to memorize for calculus.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/special",
      name: "Special Limits in Calculus"
    },
  }
}

}

export default function SpecialPage({seoData, sectionsContent, introContent, obj3Table, obj9Table, summaryTable, faqQuestions, schemas}) {

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
          <div key={'obj3-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj3Table }} />,
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
          <div key={'obj9-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj9Table }} />,
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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Special Limits FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Special Limits</h1>
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