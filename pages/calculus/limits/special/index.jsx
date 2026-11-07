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
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import { tableHeaders } from '@/app/styles/theme'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline/TaxonomyOutline'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import FormulaSheet from '@/app/components/infographics/FormulaSheet/FormulaSheet'
import BeforeAfter from '@/app/components/infographics/BeforeAfter/BeforeAfter'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'


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
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">derived via conjugate trick (see section 4 below)</td>
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
// Concept introduction (section 1, "Why Memorize Special Limits?") —
// template C, failure first. Running instance: sin x / x near 0, where
// substitution gives 0/0 but the values close in on 1. Old obj1 text is kept
// in sectionsContent.obj1, unused; its three passages and list are carried
// in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciSineTable = ciTableOpen(['x (radians)', 'sin x / x']) +
  ciRow(['0', '0/0 — no value'], { color: '#a4243b', cols: [1] }) +
  ciRow(['0.5', '0.95885'], { shade: true }) +
  ciRow(['0.1', '0.99833']) +
  ciRow(['0.01', '0.99998'], { shade: true, last: true, color: '#2563EB', cols: [1] }) +
  '</tbody></table>'

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

@academic[formula_callout:The Fundamental Trigonometric Limit
$$\\sin x < x < \\tan x$$]@

Dividing by $\\sin x$:

@academic[formula_callout:The Fundamental Trigonometric Limit
$$1 < \\frac{x}{\\sin x} < \\frac{1}{\\cos x}$$]@

Taking reciprocals and applying the [Squeeze Theorem](!/calculus/limits/rules):

@academic[formula_callout:The Fundamental Trigonometric Limit
$$\\cos x < \\frac{\\sin x}{x} < 1$$]@

As $x \\to 0$, $\\cos x \\to 1$, so $\\dfrac{\\sin x}{x}$ is squeezed to $1$.

@academic[fact,aside:true,width:35%:Why a pendulum keeps time
The pull that brings a pendulum back is proportional to $\\sin \\theta$. Replacing $\\sin \\theta$ by $\\theta$ gives the period $2\\pi\\sqrt{L/g}$, the same for every width of swing; the exact period at $10^\\circ$ is only $0.19\\%$ longer, at $30^\\circ$ about $1.7\\%$.]@

Read as an approximation, the limit says that for a small angle measured in radians, $\\sin x$ and $x$ are nearly the same number: $\\sin 0.1 \\approx 0.09983$, less than $0.2\\%$ below $0.1$. The relative gap shrinks with the angle, roughly like $\\frac{x^2}{6}$. This is why physics and engineering often replace $\\sin x$ by $x$ as long as an angle stays small: $x$ is far easier to compute with, and the error stays under control.

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

@academic[formula_callout:Related Trigonometric Limits
$$\\lim_{x \\to 0} \\frac{x}{\\sin x} = 1$$]@

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

@academic[formula_callout:Deriving (1 − cos x)/x = 0
$$\\frac{1 - \\cos x}{x} \\cdot \\frac{1 + \\cos x}{1 + \\cos x} = \\frac{1 - \\cos^2 x}{x(1 + \\cos x)} = \\frac{\\sin^2 x}{x(1 + \\cos x)}$$]@

Rewrite as a product:

@academic[formula_callout:Deriving (1 − cos x)/x = 0
$$= \\frac{\\sin x}{x} \\cdot \\frac{\\sin x}{1 + \\cos x}$$]@

As $x \\to 0$:

@academic[formula_callout:Deriving (1 − cos x)/x = 0
$$\\frac{\\sin x}{x} \\to 1 \\qquad \\frac{\\sin x}{1 + \\cos x} \\to \\frac{0}{2} = 0$$]@

Therefore:

@academic[formula_callout:Deriving (1 − cos x)/x = 0
$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 1 \\cdot 0 = 0$$]@

@academic[pitfall,aside:true,width:35%:Copying the value of the sine limit
Reading $\\frac{1 - \\cos x}{x}$ as a variant of $\\frac{\\sin x}{x}$ gives the limit $1$. At $x = 0.1$ the quotient is only about $0.05$; the product above gives $1 \\cdot 0 = 0$.
[Read more](!#pitfall-copying-the-value-of-the-sine-limit)]@

The conjugate turns a quotient that no rule handles directly into a product of two factors whose limits are already known. The first factor is the fundamental trigonometric limit and tends to $1$. The second can be found by substitution, because its denominator tends to $2$ and not to $0$, and it is this factor that decides the value of the whole limit.
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

@academic[formula_callout:The Natural Exponential Limit
$$\\frac{d}{dx} e^x \\bigg|_{x=0} = \\lim_{h \\to 0} \\frac{e^{0+h} - e^0}{h} = \\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$$]@

@academic[rule_theorem_plain:The exponential function is the unique function satisfying $f'(x) = f(x)$ with $f(0) = 1$.]@

This limit is the cornerstone of that property.

The same limit, written in $h$:

@academic[formula_callout:The Natural Exponential Limit
$$\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$$]@

@academic[punchline:Of all exponential functions, only $e^x$ leaves $x = 0$ with slope exactly $1$, and that is why it is its own derivative.]@
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Related Exponential Limits`,
    content: `
For any base $a > 0$:

@academic[formula_callout:Related Exponential Limits
$$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$$]@

When $a = e$, this reduces to the natural exponential limit since $\\ln e = 1$.

@academic[pitfall,aside:true,width:35%:Using the base-e value for every base
Applying $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$ to $\\frac{2^x - 1}{x}$ gives the limit $1$. At $x = 0.001$ the quotient is about $0.6934$; the limit is $\\ln 2 \\approx 0.693$.
[Read more](!#pitfall-using-the-base-e-value-for-every-base)]@

The base enters the answer only through its natural logarithm. A base larger than $e$ gives a limit larger than $1$, a base between $1$ and $e$ gives a limit between $0$ and $1$, and a base between $0$ and $1$ gives a negative limit, because then $a^x - 1$ and $x$ have opposite signs.

For the natural logarithm:

@academic[formula_callout:Logarithm Taylor Limit
$$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$$
/calculus/formulas#logarithm_taylor_limit]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

This can be seen by substituting $u = \\ln(1 + x)$, so $e^u = 1 + x$ and $x = e^u - 1$. As $x \\to 0$, $u \\to 0$:

@academic[formula_callout:Related Exponential Limits
$$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = \\lim_{u \\to 0} \\frac{u}{e^u - 1} = 1$$]@

@academic[fact,aside:true,width:35%:The rule of 72 comes from this limit
Money growing at $r\\%$ a year doubles in about $\\frac{72}{r}$ years. Since $\\ln(1 + x) \\approx x$, the exact time $\\frac{\\ln 2}{\\ln(1 + r/100)}$ is close to $\\frac{69.3}{r}$; 72 makes up for $\\ln(1 + x)$ lying a little below $x$, and at $8\\%$ the exact time is $9.01$ years.]@

Near $0$, then, $\\ln(1 + x)$ and $x$ are almost the same number: $\\ln 1.05 \\approx 0.0488$, against $0.05$. Growth problems use this constantly. An amount that grows by the fraction $x$ each year is multiplied by $(1 + x)^n$ after $n$ years, so it has doubled once $n \\ln(1 + x) = \\ln 2$, that is, after $\\frac{\\ln 2}{\\ln(1 + x)}$ years. At a rate of $5\\%$ a year that comes to about $14.2$ years.
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

@academic[formula_callout:The Definition of e
$$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$$]@

Another form with $x \\to 0$:

@academic[formula_callout:The Definition of e
$$\\lim_{x \\to 0} (1 + x)^{1/x} = e$$]@

@academic[pitfall,aside:true,width:35%:Letting the base reach 1 first
Sending $1 + \\frac{1}{x}$ to $1$ and then raising it to the power $x$ gives $1^x = 1$. The base and the exponent change together: at $x = 100$ the value is already about $2.705$, and the limit is $e$.
[Read more](!#pitfall-letting-the-base-reach-1-first)]@

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

@academic[formula_callout:Limits Involving Logarithms
$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = 0$$]@

As $x \\to \\infty$, both numerator and denominator grow, but $x$ grows faster than $\\ln x$. The ratio vanishes.

More generally, for any $n > 0$:

@academic[formula_callout:Limits Involving Logarithms
$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\qquad \\lim_{x \\to 0^+} x^n \\ln x = 0$$]@

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

@academic[formula_callout:Growth Rate Comparisons
$$\\text{logarithmic} \\ll \\text{polynomial} \\ll \\text{exponential}$$]@

Specifically:

@academic[formula_callout:Polynomial Beats Logarithm
$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0, \\quad n > 0$$
/calculus/formulas#polynomial_beats_logarithm]@

@academic[formula_callout:Exponential Beats Polynomial
$$\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0$$
/calculus/formulas#exponential_beats_polynomial]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

@academic[formula_callout:Growth Rate Comparisons
$$\\lim_{x \\to \\infty} \\frac{x^n}{a^x} = 0 \\quad \\text{for any } a > 1 \\text{ and any } n$$]@

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

@academic[formula_callout:Using Special Limits
$$\\lim_{x \\to 0} \\frac{\\sin 5x}{3x}$$]@

Rewrite to expose the standard form:

@academic[formula_callout:Using Special Limits
$$= \\frac{5}{3} \\cdot \\lim_{x \\to 0} \\frac{\\sin 5x}{5x} = \\frac{5}{3} \\cdot 1 = \\frac{5}{3}$$]@

@academic[pitfall,aside:true,width:35%:Using the special limit without matching the argument
Treating $\\frac{\\sin 5x}{3x}$ as $\\frac{\\sin u}{u}$ gives $1$, but the denominator is $3x$, not $5x$. At $x = 0.01$ the quotient is about $1.666$; matching the argument gives $\\frac{5}{3}$.
[Read more](!#pitfall-using-the-special-limit-without-matching-the-argument)]@

The $5$ inside the sine has to appear in the denominator as well, which is why the expression is multiplied and divided by $5$. The $3$ that was already in the denominator is not part of the standard form; it stays outside the limit as a divisor, next to the factor $5$ that the rewriting brought out.

## Example 2

@academic[formula_callout:Using Special Limits
$$\\lim_{x \\to 0} \\frac{e^{4x} - 1}{x}$$]@

Factor out the coefficient:

@academic[formula_callout:Using Special Limits
$$= 4 \\cdot \\lim_{x \\to 0} \\frac{e^{4x} - 1}{4x} = 4 \\cdot 1 = 4$$]@

## Example 3

@academic[formula_callout:Using Special Limits
$$\\lim_{x \\to 0} \\frac{\\tan x}{x} = \\lim_{x \\to 0} \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x} = 1 \\cdot 1 = 1$$]@

Recognizing patterns and factoring to match special limits streamlines computation.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj11: {
    title: `Summary: Master Reference of Special Limits`,
    content: `This summary collects the fourteen special limits of the page in five families. Each family has a line on where its variable is heading, and each limit a short note on where it comes from, with a link to its section. The buttons above the cards show one family at a time.

The trigonometric family holds the sine limit, its reciprocal, two cosine limits and the tangent limit; the exponential family, the natural exponential limit, its version for any base and the logarithm limit. Then come the two forms of the definition of e, two logarithmic limits at zero and three growth-rate limits at infinity. Matching an indeterminate limit to one of these forms is the first move, and it very often works.`,
    formulaSheetAfter: `A special limit applies only to its exact shape: the same quantity inside the function and in the denominator, with that quantity tending to the point the limit names. Multiplying and dividing by a constant usually brings an expression into that shape before the known value is used.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj12: {
    title: `Common Pitfalls`,
    content: `Five mistakes cause most wrong answers when special limits are used. Four of them are marked where they happen in the sections above; the first is the one the section on the fundamental trigonometric limit warns about. Here each is worked through in full, with the wrong and the right working side by side.`,
    before: ``,
    after: `Each slip copies a special limit without its conditions. $\\frac{\\sin x}{x} \\to 1$ needs radians, $\\frac{1 - \\cos x}{x} \\to 0$, $\\frac{a^x - 1}{x} \\to \\ln a$, $\\left(1 + \\frac{1}{x}\\right)^x \\to e$ because the base and the exponent move together, and $\\frac{\\sin 5x}{3x} \\to \\frac{5}{3}$. Evaluating at a small or a large $x$ catches each slip.`,
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
// FAQ pass 2026-10-31: kept all four. Added the value in degrees (figure note
// and first pitfall), the small-angle replacement with the pendulum fact box
// (both in "The Fundamental Trigonometric Limit") and the rule of 72 (fact box
// under "Related Exponential Limits"); no heading asks any of them.
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
  },
  obj5: {
    question: "What is the limit of sin(x)/x if x is in degrees?",
    answer: "It is $\\frac{\\pi}{180} \\approx 0.01745$, not $1$. An angle of $x$ degrees is $\\frac{\\pi x}{180}$ radians, so the quotient is $\\frac{\\pi}{180} \\cdot \\frac{\\sin(\\pi x / 180)}{\\pi x / 180}$, and the second factor tends to $1$. In degree mode a calculator gives $\\frac{\\sin 1}{1} \\approx 0.017452$. The value $1$ holds only in radians, which is why calculus measures angles that way.",
    sectionId: "2"
  },
  obj6: {
    question: "Why can sin x be replaced by x for small angles?",
    answer: "Because $\\frac{\\sin x}{x} \\to 1$: for a small angle in radians the two are nearly the same number. $\\sin 0.1 \\approx 0.09983$, less than 0.2% below $0.1$, and the relative gap shrinks roughly like $\\frac{x^2}{6}$. The pendulum period $2\\pi\\sqrt{L/g}$ rests on this replacement; the exact period is only 0.19% longer for a swing of $10^\\circ$ and about 1.7% longer for $30^\\circ$.",
    sectionId: "2"
  },
  obj7: {
    question: "Where does the rule of 72 come from?",
    answer: "From the limit $\\frac{\\ln(1 + x)}{x} \\to 1$. Money growing at $r$ percent a year doubles after $\\frac{\\ln 2}{\\ln(1 + r/100)}$ years, and since $\\ln(1 + x) \\approx x$ for small $x$, that is close to $\\frac{69.3}{r}$. The number 72 makes up for $\\ln(1 + x)$ lying a little below $x$. At 8% the exact doubling time is 9.01 years, against the rule's 9.",
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


  const slSinc = (x) => (x === 0 ? 1 : Math.sin(x) / x);
  const slSeq = (n) => (1 + 1 / n) ** n;
  const slDots = Array.from({ length: 12 }, (_, i) => ({ fn: slSeq, from: i + 1, to: i + 1, ends: ['closed', 'closed'], color: 'f' }));
  const fpSincSqueeze = { kind: 'pieces', svgTitle: 'sin x / x lies between cos x and 1 near 0 and has a hole at (0, 1): its limit is 1', xRange: [-3.2, 3.2], yRange: [-1.2, 1.4],
    pieces: [
      { fn: () => 1, from: 99, to: 99, ends: [null, null], color: 'r', ghost: [[-3.2, 3.2]], label: { text: 'y = 1', x: 2.4, y: 1, pos: 'n' } },
      { fn: Math.cos, from: -3.2, to: 3.2, ends: [null, null], color: 'g', label: { text: 'cos x', x: 2.2, y: Math.cos(2.2), pos: 'e' } },
      { fn: slSinc, from: -3.2, to: 0, ends: [null, 'open'], color: 'f' },
      { fn: slSinc, from: 0, to: 3.2, ends: ['open', null], color: 'f', label: { text: 'sin x / x', x: 1.6, y: slSinc(1.6), pos: 'ne' } },
    ],
    notes: [{ x: -3.1, y: 1.25, text: 'cos x < sin x / x < 1 near 0', pos: 'e', color: 'r' }, { x: 0.2, y: -0.3, text: 'hole at (0, 1)', pos: 'e' }],
    caption: 'Squeezed between cos x and 1, sin x / x must approach 1' };
  const fpEulerSeq = { kind: 'pieces', svgTitle: '(1 + 1/n)^n for n = 1 to 12: 2, 2.25, 2.37, ... rising toward e = 2.718', xRange: [0, 13], yRange: [1.8, 2.9], xLetter: 'n',
    pieces: [{ fn: () => Math.E, from: 99, to: 99, ends: [null, null], color: 'r', ghost: [[0, 13]], label: { text: 'e ≈ 2.718', x: 12.8, y: Math.E, pos: 'nw' } }, ...slDots],
    notes: [{ x: 1.2, y: 2.0, text: 'n = 1: 2', pos: 'e', color: 'f' }, { x: 2.2, y: 2.22, text: 'n = 2: 2.25', pos: 'e', color: 'f' }, { x: 10.2, y: 2.55, text: 'n = 12: 2.613', pos: 'e', color: 'f' }],
    caption: '(1 + 1/n)ⁿ climbs toward e but never reaches it' };
  const conceptIntroFigures = {
    sineTable: ciSineTable,
  };

  const demoUnits = {
    sincSqueeze: demoUnitFrame({
      svg: renderFunctionPlotV4(fpSincSqueeze),
      caption: 'sin x / x between cos x and 1',
      text: 'The section&#8217;s squeeze, drawn. Near 0 (in radians) the curve sin x / x lies above cos x and below the dashed line y = 1; at x = 0 itself it has no value, only a hole at (0, 1). Both bounds tend to 1 as x &#8594; 0, so the trapped curve tends to 1 as well. That is why lim sin x / x = 1 even though substituting 0 gives 0/0.',
    }),
    eulerSeq: demoUnitFrame({
      svg: renderFunctionPlotV4(fpEulerSeq),
      caption: 'Compounding toward e',
      text: 'The terms (1 + 1/n)&#8319; for n = 1 to 12: 2, 2.25, 2.370, 2.441, &#8230;, 2.613. Each one is the growth factor of a year at 100% interest compounded n times. More frequent compounding always helps, so the dots keep rising, but by less and less, and they stay below the dashed level e &#8776; 2.718, which they approach as n grows without bound.',
    }),
  };

  const specialLimitsOutline = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Fourteen limits in five families',
    preface: 'The special limits on this page group by the functions involved and by where x is heading.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Two directions',
    conclusion: 'The trigonometric and exponential limits look at x → 0; the growth-rate limits look at x → ∞ and rank logarithms below powers below exponentials.',
    showLevels: true,
    nodes: [
      { id: 'root', name: 'Special limits', children: [
        { id: 't', name: 'Trigonometric, x → 0', children: [
          { id: 't1', name: 'sin x / x', example: '1' },
          { id: 't2', name: '(1 − cos x) / x', example: '0' },
          { id: 't3', name: '(1 − cos x) / x²', example: '1/2' },
          { id: 't4', name: 'tan x / x', example: '1' },
          { id: 't5', name: 'x / sin x', example: '1' },
        ] },
        { id: 'e', name: 'Exponential, x → 0', children: [
          { id: 'e1', name: '(eˣ − 1) / x', example: '1' },
          { id: 'e2', name: '(aˣ − 1) / x', def: 'a > 0', example: 'ln a' },
          { id: 'e3', name: 'ln(1 + x) / x', example: '1' },
        ] },
        { id: 'd', name: 'Definition of e', children: [
          { id: 'd1', name: '(1 + 1/x)ˣ as x → ∞', def: 'equivalently (1 + x)¹ᐟˣ as x → 0', example: 'e' },
        ] },
        { id: 'l', name: 'Logarithmic boundary, x → 0⁺', children: [
          { id: 'l1', name: 'x ln x', example: '0' },
          { id: 'l2', name: 'xⁿ ln x', def: 'n > 0', example: '0' },
        ] },
        { id: 'g', name: 'Growth rate, x → ∞', children: [
          { id: 'g1', name: 'ln x / xⁿ', def: 'n > 0', example: '0' },
          { id: 'g2', name: 'xⁿ / eˣ', def: 'any n', example: '0' },
          { id: 'g3', name: 'xⁿ / aˣ', def: 'any n, a > 1', example: '0' },
        ] },
      ] },
    ],
  };

  // BeforeAfter (obj4): (1 − cos x)/x turned into a product of two known limits by the conjugate
  const oneMinusCosSteps = {
    header: {
      kicker: 'Special limits',
      title: 'Deriving (1 − cos x)/x → 0',
      lede: 'The conjugate turns a quotient that no rule handles directly into a product of two factors whose limits are already known.',
    },
    steps: [
      { id: 'quotient', label: 'No rule applies', stamp: 'Before', expr: '$\\dfrac{1 - \\cos x}{x}$',
        move: { label: 'Multiply by the conjugate', note: 'top and bottom by 1 + cos x, then 1 − cos²x = sin²x' } },
      { id: 'fraction', label: 'One fraction', expr: '$\\dfrac{\\sin^2 x}{x(1 + \\cos x)}$',
        move: { label: 'Rewrite as a product', note: 'split sin²x into sin x · sin x' } },
      { id: 'product', label: 'Product of known limits', expr: '$\\dfrac{\\sin x}{x} \\cdot \\dfrac{\\sin x}{1 + \\cos x}$',
        move: { label: 'Let x → 0', note: 'the first factor tends to 1, the second to 0/2 = 0' } },
      { id: 'limit', label: 'Limit', stamp: 'After', expr: '$\\lim\\limits_{x \\to 0} \\dfrac{1 - \\cos x}{x} = 1 \\cdot 0 = 0$',
        detailsLabel: 'Why not 1?',
        detailsTitle: '',
        details: 'Reading $\\frac{1 - \\cos x}{x}$ as a variant of $\\frac{\\sin x}{x}$ gives the limit $1$. At $x = 0.1$ the quotient is only about $0.05$.' },
    ],
  };

  // MistakeFix batch 15, 2026-11-03: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj12 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'measuring-the-angle-in-degrees', name: `Measuring the angle in degrees`, errorAt: 0,
        what: `The limit $\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$ is used with $x$ measured in degrees, often because the calculator is set to degree mode.`,
        wrong: [`With $x$ in degrees, $\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$, by the fundamental trigonometric limit.`],
        right: [`An angle of $x$ degrees is $\\dfrac{\\pi x}{180}$ radians, so the quotient is $\\dfrac{\\sin(\\pi x / 180)}{x} = \\dfrac{\\pi}{180} \\cdot \\dfrac{\\sin(\\pi x / 180)}{\\pi x / 180}$. With $u = \\dfrac{\\pi x}{180}$ the limit is $\\dfrac{\\pi}{180} \\cdot 1 = \\dfrac{\\pi}{180} \\approx 0.01745$.`],
        why: `The formula is written without units, and degrees are the unit used for angles everywhere outside calculus. The proof compares $x$ with lengths on the unit circle, and $x$ is a length there only when it is measured in radians.`,
        check: `In degree mode a calculator gives $\\dfrac{\\sin 1}{1} \\approx 0.017452$, close to $\\dfrac{\\pi}{180}$ and nowhere near $1$. In radian mode $\\dfrac{\\sin 0.01}{0.01} \\approx 0.99998$.` },
      { id: 'copying-the-value-of-the-sine-limit', name: `Copying the value of the sine limit`, errorAt: 0,
        what: `The quotient $\\dfrac{1 - \\cos x}{x}$ gives $\\dfrac{0}{0}$ at $x = 0$ and has a trigonometric numerator, just like $\\dfrac{\\sin x}{x}$, and it is given the same value. A related slip gives it the value $\\dfrac{1}{2}$, which belongs to the version with $x^2$ in the denominator.`,
        wrong: [`$\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x} = 1$, as for $\\dfrac{\\sin x}{x}$.`],
        right: [`Multiply by the conjugate $1 + \\cos x$ in the numerator and the denominator. Then $\\dfrac{1 - \\cos x}{x} = \\dfrac{\\sin x}{x} \\cdot \\dfrac{\\sin x}{1 + \\cos x}$, and the limit is $1 \\cdot \\dfrac{0}{2} = 0$.`],
        why: `The two quotients look alike and stand side by side in the same table. But near $0$ the numerator $1 - \\cos x$ is much smaller than $\\sin x$: it behaves like $\\dfrac{x^2}{2}$, not like $x$.`,
        check: `Evaluate at small $x$. At $x = 0.1$ the quotient is about $0.04996$, and at $x = 0.01$ about $0.0050$, closing in on $0$. Dividing by $x^2$ instead gives about $0.4996$ at $x = 0.1$, which is the limit $\\dfrac{1}{2}$ of the other version.` },
      { id: 'using-the-base-e-value-for-every-base', name: `Using the base-e value for every base`, errorAt: 0,
        what: `The natural exponential limit $\\lim_{x \\to 0} \\dfrac{e^x - 1}{x} = 1$ is applied to $\\dfrac{a^x - 1}{x}$ with a base other than $e$.`,
        wrong: [`$\\lim_{x \\to 0} \\dfrac{2^x - 1}{x} = 1$.`],
        right: [`Write $2^x = e^{x \\ln 2}$. Then $\\dfrac{2^x - 1}{x} = \\ln 2 \\cdot \\dfrac{e^{x \\ln 2} - 1}{x \\ln 2}$, and with $u = x \\ln 2$ the limit is $\\ln 2 \\cdot 1 = \\ln 2 \\approx 0.693$.`],
        why: `The base-$e$ limit is learned first, and its value $1$ is taken to belong to the shape "power minus one over $x$" rather than to the base $e$.`,
        check: `Evaluate at a small $x$. At $x = 0.001$ the quotient is about $0.6934$. The base $a = 1$ also shows that the value cannot be $1$ for every base: $\\dfrac{1^x - 1}{x} = 0$ for every $x \\neq 0$.` },
      { id: 'letting-the-base-reach-1-first', name: `Letting the base reach 1 first`, errorAt: 0,
        what: `In $\\left(1 + \\dfrac{1}{x}\\right)^x$ the base is sent to its limit $1$ while the exponent is treated as fixed, and the result is $1$ raised to a power.`,
        wrong: [`$1 + \\dfrac{1}{x} \\to 1$, so $\\lim_{x \\to \\infty} \\left(1 + \\dfrac{1}{x}\\right)^x = 1^{\\infty} = 1$.`],
        right: [`$1^{\\infty}$ is an indeterminate form. Take the logarithm: $\\ln\\left(1 + \\dfrac{1}{x}\\right)^x = x \\ln\\left(1 + \\dfrac{1}{x}\\right)$. With $t = \\dfrac{1}{x}$ this is $\\dfrac{\\ln(1 + t)}{t}$, which tends to $1$ as $t \\to 0^+$, by the logarithm limit in Related Exponential Limits. So the limit is $e^1 = e$.`],
        why: `$1$ to any power is $1$, and the two limits are taken one after the other, as if the base could settle before the exponent grows. They change together, and the small excess of the base over $1$ is compounded $x$ times.`,
        check: `Evaluate at a few large $x$. At $x = 10$ the value is about $2.594$ and at $x = 100$ about $2.705$, rising toward $2.718$ and far from $1$.` },
      { id: 'using-the-special-limit-without-matching-the-argument', name: `Using the special limit without matching the argument`, errorAt: 0,
        what: `The special limit $\\lim_{u \\to 0} \\dfrac{\\sin u}{u} = 1$ is applied to an expression that has the sine of one quantity over a different quantity.`,
        wrong: [`$\\lim_{x \\to 0} \\dfrac{\\sin 5x}{3x} = 1$, by the special limit.`],
        right: [`The denominator has to match the argument of the sine. $\\dfrac{\\sin 5x}{3x} = \\dfrac{5}{3} \\cdot \\dfrac{\\sin 5x}{5x}$, and with $u = 5x$ the limit is $\\dfrac{5}{3} \\cdot 1 = \\dfrac{5}{3}$.`],
        why: `The expression has the shape "sine of something over something", and the pattern is recognized by its shape before the two somethings are compared.`,
        check: `Evaluate at a small $x$. At $x = 0.01$, $\\dfrac{\\sin 0.05}{0.03} \\approx 1.666$. For small angles $\\sin 5x \\approx 5x$, so the quotient is close to $\\dfrac{5x}{3x} = \\dfrac{5}{3}$.` },
    ],
  };

  // Formula Summary 2026-11-07: the page's own formulas, replacing the summary table summaryTable.
  const formulaSummaryData = {
    theme: { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' },
    groups: [
      { id: 'trig', name: 'Trigonometric', sub: 'Five limits as $x \\to 0$, all with $x$ measured in radians.', pairs: [
        [{ formula: '$\\displaystyle \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$', text: 'The fundamental limit, squeezed between $\\cos x$ and $1$ in [the fundamental trigonometric limit](!#2).' },
         { formula: '$\\displaystyle \\lim_{x \\to 0} \\frac{x}{\\sin x} = 1$', text: 'Its reciprocal, which tends to $1$ as well, among [the related trigonometric limits](!#3).' }],
        [{ formula: '$\\displaystyle \\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$', text: 'Multiplying by the conjugate turns it into a product of two known limits, as [the derivation](!#4) shows.' },
         { formula: '$\\displaystyle \\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$', text: 'The same numerator over $x^2$ gives a nonzero limit, listed with [the related trigonometric limits](!#3).' }],
        [{ formula: '$\\displaystyle \\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$', text: 'Since $\\tan x = \\sin x / \\cos x$ and $\\cos x \\to 1$, it equals the fundamental limit; see [the related trigonometric limits](!#3).' }, ''],
      ] },
      { id: 'exp', name: 'Exponential', sub: 'Three limits as $x \\to 0$ built on the number $e$.', pairs: [
        [{ formula: '$\\displaystyle \\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$', text: 'It is the derivative of $e^x$ at $x = 0$, as [the natural exponential limit](!#5) shows.' },
         { formula: '$\\displaystyle \\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$', text: 'For any base $a > 0$ the base enters only through $\\ln a$, and $a = e$ gives back the limit beside it ([related exponential limits](!#6)).' }],
        [{ formula: '$\\displaystyle \\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$', text: 'The substitution $u = \\ln(1 + x)$ turns it into the exponential limit, as [related exponential limits](!#6) shows.' }, ''],
      ] },
      { id: 'e', name: 'Definition of e', sub: 'One number, $e \\approx 2.71828$, in two equivalent forms.', pairs: [
        [{ formula: '$\\displaystyle \\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$', text: 'Compounding $n$ times a year at a rate of $100\\%$ gives the growth factor $(1 + 1/n)^n$, which tends to $e$; see [the definition of e](!#7).' },
         { formula: '$\\displaystyle \\lim_{x \\to 0} (1 + x)^{1/x} = e$', text: 'The same limit written with $x \\to 0$, the second form in [the definition of e](!#7).' }],
      ] },
      { id: 'log', name: 'Logarithmic at zero', sub: 'Boundary limits as $x \\to 0^+$, the only side where $\\ln x$ is defined.', pairs: [
        [{ formula: '$\\displaystyle \\lim_{x \\to 0^+} x \\ln x = 0$', text: 'A $0 \\cdot (-\\infty)$ form in which the factor $x$ wins, from [limits involving logarithms](!#8).' },
         { formula: '$\\displaystyle \\lim_{x \\to 0^+} x^n \\ln x = 0$', text: 'For any $n > 0$, a positive power of $x$ still beats the logarithm, as [limits involving logarithms](!#8) states.' }],
      ] },
      { id: 'growth', name: 'Growth rates', sub: 'Limits as $x \\to \\infty$ that rank logarithms below powers and powers below exponentials.', pairs: [
        [{ formula: '$\\displaystyle \\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0$', text: 'For any $n > 0$, a positive power of $x$ outgrows $\\ln x$, from [growth rate comparisons](!#9).' }, ''],
        [{ formula: '$\\displaystyle \\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0$', text: 'For any $n$, the exponential outgrows every power of $x$; see [growth rate comparisons](!#9).' },
         { formula: '$\\displaystyle \\lim_{x \\to \\infty} \\frac{x^n}{a^x} = 0$', text: 'The same holds for any base $a > 1$ and any $n$, as [growth rate comparisons](!#9) states.' }],
      ] },
    ],
  };

return {
  props: {
    formulaSummaryData,
    pitfallData,
    specialLimitsOutline,
    oneMinusCosSteps,
    sectionsContent,
    introContent,
    obj3Table,
    obj9Table,
    summaryTable,
    faqQuestions,
    schemas,
    demoUnits,
    conceptIntroFigures,
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

export default function SpecialPage({ formulaSummaryData, pitfallData,specialLimitsOutline, oneMinusCosSteps, seoData, sectionsContent, introContent, obj3Table, obj9Table, summaryTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template C (failure first).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `Most limits are found by substituting the value: the limit of x² + 1 as x approaches 2 is 5.`,
        content: [
          `Substitution works whenever the function is continuous at the point. Try it on $\\frac{\\sin x}{x}$ at $x = 0$.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        tone: 'break',
        lead: `Substituting x = 0 gives 0/0 — yet the values close in on 1.`,
        content: [
          ciTable('sineTable'),
          `The table suggests the answer, but no algebraic rearrangement of $\\frac{\\sin x}{x}$ removes the $0/0$.`,
        ],
      },
      {
        id: 'diagnosis',
        lead: `Substitution and algebra give out, so the value has to come from somewhere else.`,
        content: [
          `Special limits resist direct computation. Substitution yields indeterminate forms, and algebraic manipulation alone cannot resolve them without circular reasoning or advanced tools.`,
          `Their values come from geometric arguments, series expansions, or the definitions of the functions involved. Once established, these limits become permanent tools in the calculus toolkit.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A **special limit** is a limit that substitution turns into an indeterminate form, whose value is proved once — by geometry, a series or a definition — and from then on used as a known result.`,
        footer: `So $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ is a special limit; its proof with the unit circle is in [the fundamental trigonometric limit](!/calculus/limits/special#2).`,
      },
      {
        id: 'kind',
        lead: `Special limits are proved once and then used as tools.`,
        content: [
          `Memorizing them provides immediate payoff:`,
          `- Faster problem-solving when these forms appear
- Building blocks for evaluating more complex limits
- Foundation for understanding derivatives of transcendental functions
- Recognition of patterns that guide algebraic manipulation`,
        ],
      },
      {
        id: 'caveat',
        lead: `The sine limit equals 1 only when x is measured in radians.`,
        content: [
          `With $x$ in degrees, $\\frac{\\sin x}{x}$ tends to $\\frac{\\pi}{180} \\approx 0.01745$ instead. Radian measure is what makes the value come out as $1$.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers the trigonometric limits, the exponential limits and the definition of $e$, limits with logarithms, growth rates, how special limits are used, a summary and common pitfalls.`,
      },
    ],
  }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key={'unit-sincSqueeze'} dangerouslySetInnerHTML={{ __html: demoUnits.sincSqueeze }} />,
          `In degrees the same quotient tends to π/180, which is why calculus uses radians.`,
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
          `@academic[punchline:Every trigonometric limit in this table comes from $\\frac{\\sin x}{x} \\to 1$ by algebra alone, with no new geometry.]@`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <DiagramFrame
            key={'obj4-diagram'}
            id="one-minus-cos-steps"
            title="Deriving lim (1 − cos x)/x = 0"
            source="/calculus/limits/special"
            before={"The section's derivation, one move at a time. Watch the quotient become a product of two factors with known limits."}
            after={"The second factor decides the value: its denominator tends to $2$, not to $0$, so it can be found by substitution."}
          >
            <BeforeAfter
              data={oneMinusCosSteps}
              variant="progression"
              theme={{ title: '#06357A', accent: '#2563EB', warm: '#B45309', panelSoft: '#e8eefc', indigoSoft: '#e8eefc' }}
            />
          </DiagramFrame>,
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
          <div key={'unit-eulerSeq'} dangerouslySetInnerHTML={{ __html: demoUnits.eulerSeq }} />,
          `The approach is slow: at n = 1000 the value is still 2.7169, short of e by about 0.0014.`,
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
          <DiagramFrame
            key={'formula-summary'}
            id="special-limit-formula-summary"
            title="Special limits"
            source="/calculus/limits/special"
            related={{ href: '/calculus/formulas', label: 'All calculus formulas' }}
            after={sectionsContent.obj11.formulaSheetAfter}
          >
            <FormulaSheet data={formulaSummaryData} variant="grouped" />
          </DiagramFrame>,
          <DiagramFrame
            key={'obj11-diagram'}
            id="special-limits-outline"
            title="Special limits by family"
            source="/calculus/limits/special"
          >
            <TaxonomyOutline data={specialLimitsOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
          </DiagramFrame>,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <DiagramFrame
            key={'obj12-mistakes'}
            id="special-limit-pitfalls"
            title="Common pitfalls with special limits"
            source="/calculus/limits/special"
            after={sectionsContent.obj12.after}
          >
            <MistakeFix data={pitfallData} variant="trace" />
          </DiagramFrame>,
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
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}