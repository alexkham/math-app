

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

$$\\frac{d}{dx}[c] = 0$$

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

$$\\frac{d}{dx}[x^n] = nx^{n-1}$$

The rule applies uniformly across exponent types. Positive integers: $\\frac{d}{dx}[x^5] = 5x^4$. Negative integers: $\\frac{d}{dx}[x^{-3}] = -3x^{-4}$. Fractions: $\\frac{d}{dx}[x^{1/2}] = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Irrational exponents: $\\frac{d}{dx}[x^\\pi] = \\pi x^{\\pi - 1}$.

For positive integer $n$, the proof expands $(x+h)^n$ using the binomial theorem. The leading term after cancellation is $nx^{n-1}h$, and dividing by $h$ and taking the limit gives $nx^{n-1}$. All higher-order terms contain $h$ as a factor and vanish in the limit.

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

$$p'(x) = na_n x^{n-1} + (n-1)a_{n-1}x^{n-2} + \\cdots + a_1$$

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

$$\\frac{\\sin x(\\cos h - 1) + \\cos x \\sin h}{h} = \\sin x \\cdot \\frac{\\cos h - 1}{h} + \\cos x \\cdot \\frac{\\sin h}{h}$$

The [special limits](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$ and $\\lim_{h \\to 0} \\frac{\\cos h - 1}{h} = 0$ yield the result: $\\cos x$.

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

A pattern runs through the six derivatives: the cofunctions—$\\cos$, $\\cot$, $\\csc$—each carry a negative sign in their derivatives, while $\\sin$, $\\tan$, $\\sec$ do not. This sign pattern is worth noting as a memory aid rather than a coincidence.

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

No other function satisfies $f'(x) = f(x)$ except constant multiples $Ce^x$. This self-replicating property is what makes $e$ the natural base for exponential functions.

The proof from the limit definition uses the [special limit](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$. The difference quotient for $e^x$ factors as $e^x \\cdot \\frac{e^h - 1}{h}$, and the limit gives $e^x \\cdot 1 = e^x$.

For a general base $a > 0$, $a \\neq 1$:

@academic[formula_callout:Derivative of General Exponential
$$\\frac{d}{dx}[a^x] = a^x \\ln a$$
/calculus/formulas#derivative_of_general_exponential]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

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

This follows from the change of base formula $\\log_a x = \\frac{\\ln x}{\\ln a}$ and the constant multiple rule. The natural logarithm gives the simplest derivative—another reason $e$ is the preferred base.

The function $\\ln|x|$ extends the domain to all $x \\neq 0$, and its derivative is $\\frac{1}{x}$ for both positive and negative $x$. This extended form appears frequently in [integration](!/calculus/integrals).
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Summary of Common Derivatives`,
    content: `
The complete set of common derivative formulas:

$$\\frac{d}{dx}[c] = 0 \\qquad \\frac{d}{dx}[x^n] = nx^{n-1}$$

$$\\frac{d}{dx}[\\sin x] = \\cos x \\qquad \\frac{d}{dx}[\\cos x] = -\\sin x$$

$$\\frac{d}{dx}[\\tan x] = \\sec^2 x \\qquad \\frac{d}{dx}[\\cot x] = -\\csc^2 x$$

$$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x \\qquad \\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$

$$\\frac{d}{dx}[e^x] = e^x \\qquad \\frac{d}{dx}[a^x] = a^x \\ln a$$

$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x} \\qquad \\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$

These twelve formulas, combined with the [differentiation rules](!/calculus/derivatives/rules), handle every explicit function built from powers, trigonometric functions, exponentials, and logarithms. Functions involving inverse trigonometric, hyperbolic, or piecewise definitions require the additional formulas collected in [derivatives of special functions](!/calculus/derivatives/special). The master reference card below collects everything in one place, grouped by function family for quick lookup.
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


  return {
  props: {
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

export default function PageTemplate({seoData, sectionsContent, introContent, obj2Table, obj5Table, summaryTable, faqQuestions, schemas}) {

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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}