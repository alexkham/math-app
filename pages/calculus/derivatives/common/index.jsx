

// tables-optimized: v4 | 2026-05-24 | 3 tables (obj2 aggregation, obj5 aggregation, obj8 summary capstone)
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
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import functionDerivativeDiagrams from '@/app/components/functions/derivative/functionDerivativeDiagrams'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline/TaxonomyOutline'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){
const keyWords = [
  "common derivatives",
  "derivative formulas",
  "power rule derivative",
  "derivative of sin cos",
  "derivative of e^x",
  "derivative of ln x",
  "trigonometric derivatives",
  "exponential derivative",
  "logarithm derivative",
  "polynomial derivative",
  "derivative of tan x",
  "derivative of sec x",
  "basic derivative formulas",
  "derivative table calculus"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj2 — aggregation: power rule across exponent types
const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Exponent type</th>
      <th style="${tableHeaders.aggregation}">Function</th>
      <th style="${tableHeaders.aggregation}">Derivative</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Positive integer</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x⁵</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5x⁴</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Negative integer</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x⁻³ = 1/x³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−3x⁻⁴</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Positive fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sup>1/2</sup> = √x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(1/2)x<sup>−1/2</sup> = 1/(2√x)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Negative fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sup>−1/2</sup> = 1/√x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−(1/2)x<sup>−3/2</sup></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Irrational</td>
      <td style="padding: 12px 15px; color: #34495e;">x<sup>π</sup></td>
      <td style="padding: 12px 15px; color: #34495e;">π · x<sup>π−1</sup></td>
    </tr>
  </tbody>
</table>
`

// obj5 — aggregation: the six trigonometric derivatives
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Function</th>
      <th style="${tableHeaders.aggregation}">Derivative</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Sign</th>
      <th style="${tableHeaders.aggregation}">Where derivative is undefined</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">nowhere (defined on all ℝ)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−sin x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">nowhere (defined on all ℝ)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">tan x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sec² x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = π/2 + kπ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cot x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−csc² x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = kπ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sec x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sec x · tan x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = π/2 + kπ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">csc x</td>
      <td style="padding: 12px 15px; color: #34495e;">−csc x · cot x</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">−</td>
      <td style="padding: 12px 15px; color: #34495e;">x = kπ</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary capstone: master reference of common derivatives
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Family</th>
      <th style="${tableHeaders.summary}">Function f(x)</th>
      <th style="${tableHeaders.summary}">Derivative f&apos;(x)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Constant</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">c</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sup>n</sup>&nbsp;&nbsp;(n ∈ ℝ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n · x<sup>n−1</sup></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−sin x</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">tan x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sec² x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cot x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−csc² x</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sec x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sec x · tan x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">csc x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−csc x · cot x</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exponential</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e<sup>x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e<sup>x</sup></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exponential</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>x</sup>&nbsp;&nbsp;(a &gt; 0, a ≠ 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>x</sup> · ln a</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithmic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ln x&nbsp;&nbsp;(x &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 / x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Logarithmic</td>
      <td style="padding: 12px 15px; color: #34495e;">log<sub>a</sub> x&nbsp;&nbsp;(a &gt; 0, a ≠ 1)</td>
      <td style="padding: 12px 15px; color: #34495e;">1 / (x · ln a)</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/derivatives/common ─────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Derivative](!/calculus/definitions#derivative) — the formulas on this page give $f'(x)$ for standard functions
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative) — repeated differentiation of these standard forms`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Constant Functions`,
//     content: `
// For any constant $c$:

// $$\\frac{d}{dx}[c] = 0$$

// The graph of a constant function is a horizontal line. Every secant line through two points on it has slope zero, so the tangent line at every point also has slope zero. From the limit definition, the difference quotient $\\frac{c - c}{h} = 0$ for all $h \\neq 0$, and the limit is $0$.

// Under differentiation, constant terms vanish. In any sum $f(x) + c$, the constant contributes nothing to the derivative: $\\frac{d}{dx}[f(x) + c] = f'(x)$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Power Functions`,
//     content: `
// For any real exponent $n$:

// $$\\frac{d}{dx}[x^n] = nx^{n-1}$$

// The rule applies uniformly across exponent types. Positive integers: $\\frac{d}{dx}[x^5] = 5x^4$. Negative integers: $\\frac{d}{dx}[x^{-3}] = -3x^{-4}$. Fractions: $\\frac{d}{dx}[x^{1/2}] = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Irrational exponents: $\\frac{d}{dx}[x^\\pi] = \\pi x^{\\pi - 1}$.

// For positive integer $n$, the proof expands $(x+h)^n$ using the binomial theorem. The leading term after cancellation is $nx^{n-1}h$, and dividing by $h$ and taking the limit gives $nx^{n-1}$. All higher-order terms contain $h$ as a factor and vanish in the limit.

// Extension to negative and fractional exponents uses the quotient rule and the chain rule respectively, or alternatively [logarithmic differentiation](!/calculus/derivatives/techniques): writing $x^n = e^{n \\ln x}$ and applying the chain rule gives $\\frac{d}{dx}[x^n] = e^{n \\ln x} \\cdot \\frac{n}{x} = x^n \\cdot \\frac{n}{x} = nx^{n-1}$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Polynomials`,
//     content: `
// A polynomial $p(x) = a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0$ is differentiated term by term using the power rule, constant multiple rule, and sum rule:

// $$p'(x) = na_n x^{n-1} + (n-1)a_{n-1}x^{n-2} + \\cdots + a_1$$

// Each term drops its degree by one. The constant term $a_0$ disappears. A polynomial of degree $n$ has a derivative of degree $n - 1$.

// Polynomials are [differentiable](!/calculus/derivatives/differentiability) at every real number. Their derivatives are again polynomials, so the process can be repeated indefinitely. After $n$ differentiations, a degree-$n$ polynomial becomes a constant $n! \\cdot a_n$. One more differentiation yields zero, and all subsequent derivatives remain zero. This termination property distinguishes polynomials from transcendental functions, whose derivatives cycle or persist indefinitely.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Trigonometric Functions — Sine and Cosine`,
//     content: `
// The two fundamental trigonometric derivatives are:

// $$\\frac{d}{dx}[\\sin x] = \\cos x \\qquad \\qquad \\frac{d}{dx}[\\cos x] = -\\sin x$$

// The sine derivative is proved from the limit definition. Expanding $\\sin(x + h)$ using the angle addition formula gives $\\sin x \\cos h + \\cos x \\sin h$. The difference quotient becomes

// $$\\frac{\\sin x(\\cos h - 1) + \\cos x \\sin h}{h} = \\sin x \\cdot \\frac{\\cos h - 1}{h} + \\cos x \\cdot \\frac{\\sin h}{h}$$

// The [special limits](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$ and $\\lim_{h \\to 0} \\frac{\\cos h - 1}{h} = 0$ yield the result: $\\cos x$.

// The cosine derivative follows similarly, or by differentiating $\\cos x = \\sin(\\pi/2 - x)$ using the chain rule. The negative sign in $(\\cos x)' = -\\sin x$ is essential and a frequent source of error.

// Repeated differentiation cycles with period four: $\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$. This periodicity extends to [higher-order derivatives](!/calculus/derivatives/higher-order): $\\frac{d^n}{dx^n}[\\sin x] = \\sin(x + n\\pi/2)$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Trigonometric Functions — Tangent, Cotangent, Secant, Cosecant`,
//     content: `
// The remaining four trigonometric derivatives follow from sine and cosine via the quotient rule or rewriting in terms of sine and cosine.

// $$\\frac{d}{dx}[\\tan x] = \\sec^2 x \\qquad \\qquad \\frac{d}{dx}[\\cot x] = -\\csc^2 x$$

// $$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x \\qquad \\qquad \\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$

// For $\\tan x = \\frac{\\sin x}{\\cos x}$, the quotient rule gives $\\frac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$.

// A pattern runs through the six derivatives: the cofunctions—$\\cos$, $\\cot$, $\\csc$—each carry a negative sign in their derivatives, while $\\sin$, $\\tan$, $\\sec$ do not. This sign pattern is worth noting as a memory aid rather than a coincidence.

// Each derivative is valid on the domain of the original function. The derivatives of $\\tan x$ and $\\sec x$ are undefined at $x = \\pi/2 + k\\pi$ (where $\\cos x = 0$). The derivatives of $\\cot x$ and $\\csc x$ are undefined at $x = k\\pi$ (where $\\sin x = 0$).
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Exponential Functions`,
//     content: `
// The natural exponential function has the unique property of being its own derivative:

// $$\\frac{d}{dx}[e^x] = e^x$$

// No other function satisfies $f'(x) = f(x)$ except constant multiples $Ce^x$. This self-replicating property is what makes $e$ the natural base for exponential functions.

// The proof from the limit definition uses the [special limit](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$. The difference quotient for $e^x$ factors as $e^x \\cdot \\frac{e^h - 1}{h}$, and the limit gives $e^x \\cdot 1 = e^x$.

// For a general base $a > 0$, $a \\neq 1$:

// $$\\frac{d}{dx}[a^x] = a^x \\ln a$$

// This follows from rewriting $a^x = e^{x \\ln a}$ and applying the chain rule. The factor $\\ln a$ is constant—it scales the derivative. When $a = e$, $\\ln a = 1$ and the factor disappears, confirming the special role of base $e$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Logarithmic Functions`,
//     content: `
// The natural logarithm has derivative:

// $$\\frac{d}{dx}[\\ln x] = \\frac{1}{x} \\qquad x > 0$$

// This can be derived by [implicit differentiation](!/calculus/derivatives/techniques). If $y = \\ln x$, then $e^y = x$. Differentiating both sides: $e^y \\frac{dy}{dx} = 1$, so $\\frac{dy}{dx} = \\frac{1}{e^y} = \\frac{1}{x}$.

// Alternatively, the limit definition gives $\\lim_{h \\to 0} \\frac{\\ln(x+h) - \\ln x}{h} = \\lim_{h \\to 0} \\frac{1}{h}\\ln\\left(\\frac{x+h}{x}\\right) = \\lim_{h \\to 0} \\frac{1}{h}\\ln\\left(1 + \\frac{h}{x}\\right)$, which evaluates to $\\frac{1}{x}$ using the limit definition of $e$.

// For a general base $a > 0$, $a \\neq 1$:

// $$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$

// This follows from the change of base formula $\\log_a x = \\frac{\\ln x}{\\ln a}$ and the constant multiple rule. The natural logarithm gives the simplest derivative—another reason $e$ is the preferred base.

// The function $\\ln|x|$ extends the domain to all $x \\neq 0$, and its derivative is $\\frac{1}{x}$ for both positive and negative $x$. This extended form appears frequently in [integration](!/calculus/integrals).
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Summary of Common Derivatives`,
//     content: `
// The complete set of common derivative formulas:

// $$\\frac{d}{dx}[c] = 0 \\qquad \\frac{d}{dx}[x^n] = nx^{n-1}$$

// $$\\frac{d}{dx}[\\sin x] = \\cos x \\qquad \\frac{d}{dx}[\\cos x] = -\\sin x$$

// $$\\frac{d}{dx}[\\tan x] = \\sec^2 x \\qquad \\frac{d}{dx}[\\cot x] = -\\csc^2 x$$

// $$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x \\qquad \\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$

// $$\\frac{d}{dx}[e^x] = e^x \\qquad \\frac{d}{dx}[a^x] = a^x \\ln a$$

// $$\\frac{d}{dx}[\\ln x] = \\frac{1}{x} \\qquad \\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$

// These twelve formulas, combined with the [differentiation rules](!/calculus/derivatives/rules), handle every explicit function built from powers, trigonometric functions, exponentials, and logarithms. Functions involving inverse trigonometric, hyperbolic, or piecewise definitions require the additional formulas collected in [derivatives of special functions](!/calculus/derivatives/special). The master reference card below collects everything in one place, grouped by function family for quick lookup.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


// formulas-optimized: v1 | 2026-06-09 | 10 callouts (obj4, obj5, obj6, obj7)
const sectionsContent = {
  // ─── /calculus/derivatives/common ─────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Derivative](!/calculus/definitions#derivative) — the formulas on this page give $f'(x)$ for standard functions
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative) — repeated differentiation of these standard forms`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Constant Functions`,
    content: `
For any constant $c$:

@academic[formula_callout:Constant Rule (Derivatives)
$$\\frac{d}{dx}[c] = 0$$
/calculus/formulas#constant_rule_derivatives]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Applying the power rule to a constant
Reading $e^3$ as a power and writing $\\frac{d}{dx}[e^3] = 3e^2$ treats a number as a function of $x$. $e^3 \\approx 20.09$ is a constant, so its derivative is $0$.
[Read more](!#pitfalls)]@

The graph of a constant function is a horizontal line. Every secant line through two points on it has slope zero, so the tangent line at every point also has slope zero. From the limit definition, the difference quotient $\\frac{c - c}{h} = 0$ for all $h \\neq 0$, and the limit is $0$.

Under differentiation, constant terms vanish. In any sum $f(x) + c$, the constant contributes nothing to the derivative: $\\frac{d}{dx}[f(x) + c] = f'(x)$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Power Functions`,
    content: `
For any real exponent $n$:

@academic[formula_callout:Power Rule (Derivatives)
$$\\frac{d}{dx}[x^n] = nx^{n-1}$$
/calculus/formulas#power_rule_derivatives]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

The rule applies uniformly across exponent types. Positive integers: $\\frac{d}{dx}[x^5] = 5x^4$. Negative integers: $\\frac{d}{dx}[x^{-3}] = -3x^{-4}$. Fractions: $\\frac{d}{dx}[x^{1/2}] = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Irrational exponents: $\\frac{d}{dx}[x^\\pi] = \\pi x^{\\pi - 1}$.

For positive integer $n$, the proof expands $(x+h)^n$ using the binomial theorem. The leading term after cancellation is $nx^{n-1}h$, and dividing by $h$ and taking the limit gives $nx^{n-1}$. All higher-order terms contain $h$ as a factor and vanish in the limit.

@academic[pitfall,aside:true,width:35%:Lowering a negative exponent toward zero
Computing $-3 + 1$ instead of $-3 - 1$ turns $\\frac{d}{dx}[x^{-3}]$ into $-3x^{-2}$, which is $-0.75$ at $x = 2$. The rule always subtracts $1$: the derivative is $-3x^{-4}$, which is $-0.1875$ at $x = 2$.
[Read more](!#pitfalls)]@

Extension to negative and fractional exponents uses the quotient rule and the chain rule respectively, or alternatively [logarithmic differentiation](!/calculus/derivatives/techniques): writing $x^n = e^{n \\ln x}$ and applying the chain rule gives $\\frac{d}{dx}[x^n] = e^{n \\ln x} \\cdot \\frac{n}{x} = x^n \\cdot \\frac{n}{x} = nx^{n-1}$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Polynomials`,
    content: `
A polynomial $p(x) = a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0$ is differentiated term by term using the power rule, constant multiple rule, and sum rule:

@academic[formula_callout:Polynomials
$$p'(x) = na_n x^{n-1} + (n-1)a_{n-1}x^{n-2} + \\cdots + a_1$$]@

Each term drops its degree by one. The constant term $a_0$ disappears. A polynomial of degree $n$ has a derivative of degree $n - 1$.

Polynomials are [differentiable](!/calculus/derivatives/differentiability) at every real number. Their derivatives are again polynomials, so the process can be repeated indefinitely. After $n$ differentiations, a degree-$n$ polynomial becomes a constant $n! \\cdot a_n$. One more differentiation yields zero, and all subsequent derivatives remain zero. This termination property distinguishes polynomials from transcendental functions, whose derivatives cycle or persist indefinitely.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Trigonometric Functions — Sine and Cosine`,
    content: `
The two fundamental trigonometric derivatives are:

@academic[formula_callout:Derivative of Sine
$$\\frac{d}{dx}[\\sin x] = \\cos x$$
/calculus/formulas#derivative_of_sine]@

@academic[formula_callout:Derivative of Cosine
$$\\frac{d}{dx}[\\cos x] = -\\sin x$$
/calculus/formulas#derivative_of_cosine]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

The sine derivative is proved from the limit definition. Expanding $\\sin(x + h)$ using the angle addition formula gives $\\sin x \\cos h + \\cos x \\sin h$. The difference quotient becomes

@academic[formula_callout:Trigonometric Functions — Sine and Cosine
$$\\frac{\\sin x(\\cos h - 1) + \\cos x \\sin h}{h} = \\sin x \\cdot \\frac{\\cos h - 1}{h} + \\cos x \\cdot \\frac{\\sin h}{h}$$]@

The [special limits](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$ and $\\lim_{h \\to 0} \\frac{\\cos h - 1}{h} = 0$ yield the result: $\\cos x$.

@academic[fact,aside:true,width:35%:Degrees would spoil the formula
Measured in degrees, $\\frac{d}{dx}[\\sin x^\\circ] = \\frac{\\pi}{180}\\cos x^\\circ \\approx 0.01745\\cos x^\\circ$, because $\\frac{\\sin h}{h}$ tends to $1$ only when $h$ is in radians. Radians are the one unit that makes the extra factor exactly $1$.]@

All the trigonometric formulas on this page measure $x$ in radians. On the unit circle, an angle of $h$ radians cuts off an arc of length exactly $h$, and for small $h$ the height $\\sin h$ of the arc's endpoint is almost the arc itself. That is the geometric content of $\\frac{\\sin h}{h} \\to 1$.

The cosine derivative follows similarly, or by differentiating $\\cos x = \\sin(\\pi/2 - x)$ using the chain rule. The negative sign in $(\\cos x)' = -\\sin x$ is essential and a frequent source of error.

Repeated differentiation cycles with period four: $\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$. This periodicity extends to [higher-order derivatives](!/calculus/derivatives/higher-order): $\\frac{d^n}{dx^n}[\\sin x] = \\sin(x + n\\pi/2)$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Trigonometric Functions — Tangent, Cotangent, Secant, Cosecant`,
    content: `
The remaining four trigonometric derivatives follow from sine and cosine via the quotient rule or rewriting in terms of sine and cosine.

@academic[formula_callout:Derivative of Tangent
$$\\frac{d}{dx}[\\tan x] = \\sec^2 x$$
/calculus/formulas#derivative_of_tangent]@

@academic[formula_callout:Derivative of Cotangent
$$\\frac{d}{dx}[\\cot x] = -\\csc^2 x$$
/calculus/formulas#derivative_of_cotangent]@

@academic[formula_callout:Derivative of Secant
$$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$$
/calculus/formulas#derivative_of_secant]@

@academic[formula_callout:Derivative of Cosecant
$$\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$
/calculus/formulas#derivative_of_cosecant]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

For $\\tan x = \\frac{\\sin x}{\\cos x}$, the quotient rule gives $\\frac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$.

A pattern runs through the six derivatives: the cofunctions—$\\cos$, $\\cot$, $\\csc$—each carry a negative sign in their derivatives, while $\\sin$, $\\tan$, $\\sec$ do not. This sign pattern is not a coincidence, and it makes a useful memory aid.

Each derivative is valid on the domain of the original function. The derivatives of $\\tan x$ and $\\sec x$ are undefined at $x = \\pi/2 + k\\pi$ (where $\\cos x = 0$). The derivatives of $\\cot x$ and $\\csc x$ are undefined at $x = k\\pi$ (where $\\sin x = 0$).
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Exponential Functions`,
    content: `
The natural exponential function has the unique property of being its own derivative:

@academic[formula_callout:Derivative of Natural Exponential
$$\\frac{d}{dx}[e^x] = e^x$$
/calculus/formulas#derivative_of_natural_exponential]@

@academic[rule_theorem_plain:No other function satisfies $f'(x) = f(x)$ except constant multiples $Ce^x$.]@

This self-replicating property is what makes $e$ the natural base for exponential functions.

The proof from the limit definition uses the [special limit](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$. The difference quotient for $e^x$ factors as $e^x \\cdot \\frac{e^h - 1}{h}$, and the limit gives $e^x \\cdot 1 = e^x$.

For a general base $a > 0$, $a \\neq 1$:

@academic[formula_callout:Derivative of General Exponential
$$\\frac{d}{dx}[a^x] = a^x \\ln a$$
/calculus/formulas#derivative_of_general_exponential]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Using the power rule on an exponential
Bringing the exponent down turns $\\frac{d}{dx}[2^x]$ into $x \\cdot 2^{x-1}$, which is $0$ at $x = 0$. The variable is in the exponent, so the derivative is $2^x \\ln 2$, which is $\\ln 2 \\approx 0.693$ at $x = 0$.
[Read more](!#pitfalls)]@

This follows from rewriting $a^x = e^{x \\ln a}$ and applying the chain rule. The factor $\\ln a$ is constant—it scales the derivative. When $a = e$, $\\ln a = 1$ and the factor disappears, confirming the special role of base $e$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Logarithmic Functions`,
    content: `
The natural logarithm has derivative:

@academic[formula_callout:Derivative of Natural Logarithm
$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$
/calculus/formulas#derivative_of_natural_logarithm]@

This can be derived by [implicit differentiation](!/calculus/derivatives/techniques). If $y = \\ln x$, then $e^y = x$. Differentiating both sides: $e^y \\frac{dy}{dx} = 1$, so $\\frac{dy}{dx} = \\frac{1}{e^y} = \\frac{1}{x}$.

Alternatively, the limit definition gives $\\lim_{h \\to 0} \\frac{\\ln(x+h) - \\ln x}{h} = \\lim_{h \\to 0} \\frac{1}{h}\\ln\\left(\\frac{x+h}{x}\\right) = \\lim_{h \\to 0} \\frac{1}{h}\\ln\\left(1 + \\frac{h}{x}\\right)$, which evaluates to $\\frac{1}{x}$ using the limit definition of $e$.

For a general base $a > 0$, $a \\neq 1$:

@academic[formula_callout:Derivative of General Logarithm
$$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$
/calculus/formulas#derivative_of_general_logarithm]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Dropping the factor ln a
Using $\\frac{1}{x}$ as the derivative of $\\log_{10} x$ gives slope $1$ at $x = 1$. The factor $\\frac{1}{\\ln 10}$ is missing: the derivative is $\\frac{1}{x \\ln 10}$, about $0.434$ at $x = 1$.
[Read more](!#pitfalls)]@

This follows from the change of base formula $\\log_a x = \\frac{\\ln x}{\\ln a}$ and the constant multiple rule. The natural logarithm gives the simplest derivative—another reason $e$ is the preferred base.

@academic[rule_plain:The function $\\ln|x|$ extends the domain to all $x \\neq 0$, and its derivative is $\\frac{1}{x}$ for both positive and negative $x$.]@

This extended form appears frequently in [integration](!/calculus/integrals).
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Summary of Common Derivatives`,
    content: `
The complete set of common derivative formulas:

@academic[formula_callout:Summary of Common Derivatives
$$\\frac{d}{dx}[c] = 0 \\qquad \\frac{d}{dx}[x^n] = nx^{n-1}$$]@

@academic[formula_callout:Summary of Common Derivatives
$$\\frac{d}{dx}[\\sin x] = \\cos x \\qquad \\frac{d}{dx}[\\cos x] = -\\sin x$$]@

@academic[formula_callout:Summary of Common Derivatives
$$\\frac{d}{dx}[\\tan x] = \\sec^2 x \\qquad \\frac{d}{dx}[\\cot x] = -\\csc^2 x$$]@

@academic[formula_callout:Summary of Common Derivatives
$$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x \\qquad \\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$]@

@academic[formula_callout:Summary of Common Derivatives
$$\\frac{d}{dx}[e^x] = e^x \\qquad \\frac{d}{dx}[a^x] = a^x \\ln a$$]@

@academic[formula_callout:Summary of Common Derivatives
$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x} \\qquad \\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$]@

These twelve formulas, combined with the [differentiation rules](!/calculus/derivatives/rules), handle every explicit function built from powers, trigonometric functions, exponentials, and logarithms. Functions involving inverse trigonometric, hyperbolic, or piecewise definitions require the additional formulas collected in [derivatives of special functions](!/calculus/derivatives/special). The master reference card below collects everything in one place, grouped by function family for quick lookup.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Common Pitfalls`,
    content: `
Five mistakes account for most wrong answers when these formulas are applied. Four of them are marked where they happen in the sections above; the sign of the cosine derivative is the one the sine and cosine section warns against. Here each is worked through in full, with the wrong and the right working side by side.

**Applying the power rule to a constant**

A constant written as a power, such as $e^3$, $\\pi^2$ or $5^4$, is differentiated as if its base were the variable.

Wrong working: $\\frac{d}{dx}[e^3] = 3e^2$, by the power rule.

Right working: $e^3 \\approx 20.09$ is a fixed number; nothing in it depends on $x$. By the constant rule, $\\frac{d}{dx}[e^3] = 0$.

Why it happens: the expression has the shape "something to a power", and the power rule is matched by shape. The rule is about $x^n$, where the base is the variable and the exponent is fixed.

How to check: look for $x$. If the expression contains no $x$, its graph is a horizontal line and the derivative is $0$.

**Lowering a negative exponent toward zero**

With a negative exponent, $1$ is added to it instead of subtracted, so the new exponent moves toward zero.

Wrong working: $\\frac{d}{dx}[x^{-3}] = -3x^{-3 + 1} = -3x^{-2}$. At $x = 2$ this gives $-\\frac{3}{4} = -0.75$.

Right working: the rule gives $n - 1$, and $-3 - 1 = -4$. So $\\frac{d}{dx}[x^{-3}] = -3x^{-4}$, and at $x = 2$ this is $-\\frac{3}{16} = -0.1875$.

Why it happens: for positive exponents, subtracting $1$ makes the exponent smaller in size, and that habit is carried over. For negative exponents, subtracting $1$ makes the exponent larger in size.

How to check: compute a difference quotient. For $f(x) = x^{-3}$, $\\frac{f(2.001) - f(2)}{0.001} \\approx -0.1873$, close to $-0.1875$ and far from $-0.75$.

**Dropping the minus sign on the cosine derivative**

The derivative of $\\cos x$ is written as $\\sin x$, without the minus sign, by analogy with $\\frac{d}{dx}[\\sin x] = \\cos x$.

Wrong working: $\\frac{d}{dx}[\\cos x] = \\sin x$, so the slope of $\\cos x$ at $x = \\frac{\\pi}{2}$ is $\\sin \\frac{\\pi}{2} = 1$.

Right working: $\\frac{d}{dx}[\\cos x] = -\\sin x$, so the slope at $x = \\frac{\\pi}{2}$ is $-1$.

Why it happens: the two formulas are learned as a pair, and the pair looks symmetric. It is not: going from sine to cosine keeps the sign, going from cosine to sine changes it.

How to check: think of the graph. Between $0$ and $\\pi$ the cosine falls from $1$ to $-1$, so its slope there must be negative, and $-\\sin x$ is negative on that interval.

**Using the power rule on an exponential**

In $2^x$ the variable is the exponent, but the power rule is applied as if it were $x^n$: the exponent is brought down and lowered by one.

Wrong working: $\\frac{d}{dx}[2^x] = x \\cdot 2^{x - 1}$. At $x = 0$ this gives $0$.

Right working: the exponential rule applies. $\\frac{d}{dx}[2^x] = 2^x \\ln 2$, and at $x = 0$ this is $\\ln 2 \\approx 0.693$.

Why it happens: $x^2$ and $2^x$ use the same symbols, and the power rule is the first rule learned, so it is applied by habit.

How to check: compute a difference quotient at $x = 0$. $\\frac{2^{0.001} - 2^0}{0.001} \\approx 0.6934$, which is not $0$. An exponential with a base above $1$ is always increasing, so its slope cannot be $0$ anywhere.

**Dropping the factor ln a**

The derivative of $\\log_a x$ is written as $\\frac{1}{x}$, the formula for the natural logarithm, for every base.

Wrong working: $\\frac{d}{dx}[\\log_{10} x] = \\frac{1}{x}$, so the slope at $x = 1$ is $1$.

Right working: $\\log_{10} x = \\frac{\\ln x}{\\ln 10}$, so $\\frac{d}{dx}[\\log_{10} x] = \\frac{1}{x \\ln 10}$. At $x = 1$ this is $\\frac{1}{\\ln 10} \\approx 0.434$.

Why it happens: $\\frac{1}{x}$ is the logarithm derivative used most often, and the base is easy to overlook.

How to check: compute a difference quotient at $x = 1$. $\\frac{\\log_{10} 1.001 - \\log_{10} 1}{0.001} \\approx 0.4341$, close to $0.434$ and not $1$. Only for base $e$, where $\\ln e = 1$, is the derivative exactly $\\frac{1}{x}$.
`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: `intro`,
  title: `The Core Derivative Library`,
  content: `
A small collection of derivative formulas covers the vast majority of differentiation work. Polynomials, trigonometric functions, exponentials, and logarithms appear constantly, and their derivatives should be available from memory. Every more complex derivative—a composition, a product, an implicitly defined relation—ultimately reduces to these building blocks combined through [differentiation rules](!/calculus/derivatives/rules).

Each formula below is provable from the [limit definition](!/calculus/derivatives). For some, the proof is a direct algebraic manipulation of the difference quotient. For others, it requires [special limits](!/calculus/limits/special) such as $\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$. The proofs confirm the formulas; the formulas replace the proofs in daily computation.
`
};


// FAQ pass: cut four case-A questions — constants, polynomials, sine/cosine
// and the summary each have a heading naming them; the power rule is owned by
// /calculus/derivatives/rules. This page groups formulas under category
// headings ("Exponential Functions") while people search by formula, so the
// specific formulas kept below match no heading. Two invented from the
// general-base results buried in closing paragraphs.
const faqQuestions = {
  obj1: {
    question: "What is the derivative of e^x?",
    answer: "It is e^x — the natural exponential is its own derivative. No other function has this property except constant multiples Ce^x, and that self-replication is what makes e the natural base. The proof factors the difference quotient as e^x · (e^h − 1)/h and applies the [special limit](!/calculus/limits/special) (e^h − 1)/h → 1.",
    sectionId: "6"
  },
  obj2: {
    question: "What is the derivative of ln x?",
    answer: "It is 1/x. The quickest derivation is implicit: if y = ln x then e^y = x, and differentiating gives e^y · dy/dx = 1, so dy/dx = 1/e^y = 1/x. The extended form ln|x| has the same derivative 1/x for every x ≠ 0, which is why it appears throughout [integration](!/calculus/integrals).",
    sectionId: "7"
  },
  obj3: {
    question: "What is the derivative of a^x?",
    answer: "For any base a > 0 with a ≠ 1, the derivative is a^x · ln a. It follows from rewriting a^x as e^(x ln a) and applying the chain rule, which leaves the constant factor ln a scaling the result. When a = e the factor becomes ln e = 1 and disappears — the reason base e is treated as the natural choice.",
    sectionId: "6"
  },
  obj4: {
    question: "What is the derivative of tan x?",
    answer: "It is sec²x. Writing tan x as sin x / cos x and applying the quotient rule gives (cos x · cos x − sin x · (−sin x)) / cos²x, whose numerator collapses to cos²x + sin²x = 1 by the Pythagorean identity, leaving 1/cos²x = sec²x. The companion results are cot′ = −csc²x, sec′ = sec x tan x and csc′ = −csc x cot x.",
    sectionId: "5"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Common Derivatives",
    "description": "Essential derivative formulas: constants, power rule, polynomials, trigonometric functions (sin, cos, tan, sec), exponentials (e^x, a^x), and logarithms (ln x, log_a x).",
    "url": "https://www.learnmathclass.com/calculus/derivatives/common",
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
      "name": "Common Derivatives"
    },
    "teaches": [
      "Derivatives of constants and power functions",
      "Polynomial differentiation",
      "Trigonometric function derivatives",
      "Exponential function derivatives",
      "Logarithmic function derivatives",
      "Complete derivative formula table"
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
        "name": "Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Common Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives/common"
      }
    ]
  }
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const demoUnits = {
    power: demoUnitFrame({
      svg: functionDerivativeDiagrams.quadratic,
      caption: 'f(x) = x&#178; and f&#8242;(x) = 2x, marked at x = 1',
      text: 'The upper curve is the function, the lower one its derivative, and at x = 1 the marker reads f&#8242;(1) = 2, the slope of the parabola there. The derivative is a straight line because bringing the exponent down leaves degree one: that is the power rule drawn out. Move the marker and watch the slope of the parabola track the height of the line on the',
      href: '/calculus/visual-tools/derivative',
      linkText: 'derivative explorer',
    }),
    trig: demoUnitFrame({
      svg: functionDerivativeDiagrams.sine,
      caption: 'f(x) = sin x and f&#8242;(x) = cos x, marked at x = 1',
      text: 'The derivative curve peaks where the sine climbs fastest, at x = 0, and crosses zero where the sine tops out, at &#960;/2: the cosine is the sine&#8217;s slope read off point by point. At x = 1 the marker reads cos 1 &#8776; 0.54. Slide the marker to a peak of the sine and watch the derivative hit zero on the',
      href: '/calculus/visual-tools/derivative',
      linkText: 'derivative explorer',
    }),
    exp: demoUnitFrame({
      svg: functionDerivativeDiagrams.exponential,
      caption: 'f(x) = e&#739; and f&#8242;(x) = e&#739; coincide',
      text: 'The two curves lie exactly on top of each other: at every x the slope of e&#739; equals its height, so at x = 1 both readings are e &#8776; 2.72. No other function has this property, which is why e is the natural base. Check any point and see the two readouts agree on the',
      href: '/calculus/visual-tools/derivative',
      linkText: 'derivative explorer',
    }),
    log: demoUnitFrame({
      svg: functionDerivativeDiagrams.logarithm,
      caption: 'f(x) = ln x and f&#8242;(x) = 1/x, marked at x = 1',
      text: 'The logarithm climbs steeply near zero and flattens as x grows, and its derivative curve 1/x records exactly that: large on the left, small on the right, equal to 1 at x = 1 where the marker sits. Move the marker toward zero and watch the slope reading run away on the',
      href: '/calculus/visual-tools/derivative',
      linkText: 'derivative explorer',
    }),
  };

  const commonDerivativesOutline = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Twelve derivatives in five families',
    preface: 'Every derivative on this page belongs to one of five families. Learn the family and the members follow.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'The building blocks',
    conclusion: 'These twelve are the starting points; the [derivative rules](!/calculus/derivatives/rules) combine them into the derivative of almost any function.',
    showLevels: true,
    nodes: [
      { id: 'root', name: 'Common derivatives', children: [
        { id: 'c', name: 'Constant', children: [
          { id: 'c1', name: 'c', example: '0' },
        ] },
        { id: 'p', name: 'Power', children: [
          { id: 'p1', name: 'xⁿ', def: 'n ∈ ℝ', example: 'n · xⁿ⁻¹' },
        ] },
        { id: 't', name: 'Trigonometric', children: [
          { id: 't1', name: 'sin x', example: 'cos x' },
          { id: 't2', name: 'cos x', example: '−sin x' },
          { id: 't3', name: 'tan x', example: 'sec² x' },
          { id: 't4', name: 'cot x', example: '−csc² x' },
          { id: 't5', name: 'sec x', example: 'sec x · tan x' },
          { id: 't6', name: 'csc x', example: '−csc x · cot x' },
        ] },
        { id: 'e', name: 'Exponential', children: [
          { id: 'e1', name: 'eˣ', example: 'eˣ' },
          { id: 'e2', name: 'aˣ', def: 'a > 0, a ≠ 1', example: 'aˣ · ln a' },
        ] },
        { id: 'l', name: 'Logarithmic', children: [
          { id: 'l1', name: 'ln x', def: 'x > 0', example: '1 / x' },
          { id: 'l2', name: 'logₐ x', def: 'a > 0, a ≠ 1', example: '1 / (x · ln a)' },
        ] },
      ] },
    ],
  };

  return {
  props: {
    commonDerivativesOutline,
    demoUnits,
    sectionsContent,
    introContent,
    obj2Table,
    obj5Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Common Derivatives: Formulas & Examples | Learn Math Class",
      description: "Essential derivative formulas: constants, power rule, polynomials, trigonometric functions (sin, cos, tan, sec), exponentials (e^x, a^x), and logarithms (ln x, log_a x).",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/common",
      name: "Common Derivatives"
    },
  }
}
   }

export default function PageTemplate({commonDerivativesOutline, seoData, sectionsContent, introContent, obj2Table, obj5Table, summaryTable, faqQuestions, schemas, demoUnits}) {

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
          <div key={'obj2-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj2Table }} />,
                  <div key={'unit-power'} dangerouslySetInnerHTML={{ __html: demoUnits.power }} />,
          `Every polynomial derivative is this picture repeated term by term.`,
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
                  <div key={'unit-trig'} dangerouslySetInnerHTML={{ __html: demoUnits.trig }} />,
          `The quarter-period shift between a function and its derivative is the whole content of these two formulas.`,
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
          `@academic[punchline:Every trigonometric derivative comes from those of sine and cosine, through the quotient rule.]@`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
                  <div key={'unit-exp'} dangerouslySetInnerHTML={{ __html: demoUnits.exp }} />,
          `Every other exponential differs from its derivative only by the constant factor ln a.`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
                  <div key={'unit-log'} dangerouslySetInnerHTML={{ __html: demoUnits.log }} />,
          `The reciprocal derivative is what makes the logarithm the antiderivative of 1/x.`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
          <DiagramFrame
            key={'obj8-diagram'}
            id="common-derivatives-outline"
            title="Common derivatives by family"
            source="/calculus/derivatives/common"
          >
            <TaxonomyOutline data={commonDerivativesOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
          </DiagramFrame>,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Common Derivatives FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Common Derivatives</h1>
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