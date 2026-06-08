import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){

  const keyWords=['function families','parent functions','linear function','quadratic function','exponential function','polynomial functions','rational functions','absolute value function','square root function','types of functions','function classification','logarithmic function','cubic function','radical functions']

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — aggregation: identifying a family from each representation
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Source</th>
      <th style="${tableHeaders.aggregation}">What to look for</th>
      <th style="${tableHeaders.aggregation}">Family-specific clues</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Equation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the defining algebraic operation or structure</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x in the exponent → exponential; x under a radical → radical; ratio of polynomials → rational; highest power of x = n → polynomial of degree n</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Graph</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">overall shape and key features</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">straight line → linear; parabola → quadratic; S-curve → cubic; periodic wave → trigonometric; asymptotes → rational or exponential</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Table of values</td>
      <td style="padding: 12px 15px; color: #34495e;">how outputs change as inputs step uniformly</td>
      <td style="padding: 12px 15px; color: #34495e;">constant differences between outputs → linear; constant ratios → exponential; symmetric pattern around a center → quadratic</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — comparison: nth root by parity
  const obj11Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">n parity</th>
      <th style="${tableHeaders.comparison}">Domain</th>
      <th style="${tableHeaders.comparison}">Range</th>
      <th style="${tableHeaders.comparison}">Symmetry</th>
      <th style="${tableHeaders.comparison}">Shape</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Even n (4th, 6th, ...)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none — only the right half exists</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">resembles √x: starts at origin, increasing, concave down; higher even roots flatter near 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Odd n (5th, 7th, ...)</td>
      <td style="padding: 12px 15px; color: #34495e;">(−∞, ∞)</td>
      <td style="padding: 12px 15px; color: #34495e;">(−∞, ∞)</td>
      <td style="padding: 12px 15px; color: #34495e;">odd — point symmetry about the origin</td>
      <td style="padding: 12px 15px; color: #34495e;">resembles ∛x: S-curve through origin; higher odd roots flatter</td>
    </tr>
  </tbody>
</table>
`

  // obj17 — aggregation: growth rate hierarchy
  const obj17Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Family</th>
      <th style="${tableHeaders.aggregation}">Examples</th>
      <th style="${tableHeaders.aggregation}">Growth speed for large x</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithmic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ln(x), log₁₀(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">slowest — unbounded but very gradual</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Root functions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√x, ∛x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">slow — increases but below linear</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linear</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x, 2x − 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">constant rate of change</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial (degree ≥ 2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x², x³, x⁴</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">accelerating — faster than linear</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Exponential</td>
      <td style="padding: 12px 15px; color: #34495e;">2ˣ, eˣ</td>
      <td style="padding: 12px 15px; color: #34495e;">fastest — eventually overtakes any polynomial</td>
    </tr>
  </tbody>
</table>
`

  // obj18 — summary capstone: all families at a glance
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Family</th>
      <th style="${tableHeaders.summary}">Parent form</th>
      <th style="${tableHeaders.summary}">Domain</th>
      <th style="${tableHeaders.summary}">Range</th>
      <th style="${tableHeaders.summary}">Defining feature</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Constant</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = c</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{c}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal line</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linear</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">mx + b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">constant slope, straight line</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quadratic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ax² + bx + c</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[k, ∞) or (−∞, k]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parabola with vertex (h, k)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cubic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ax³ + …</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">S-curve; up to 2 turning points</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Higher polynomial (deg n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">aₙxⁿ + … + a₀</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ (odd n) or bounded one side (even n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">up to n zeros, n − 1 turning points; smooth everywhere</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(x) ⁄ Q(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ excluding zeros of Q</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">varies</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vertical and horizontal asymptotes; holes possible</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">starts at origin, concave down, gradually rising</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cube root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∛x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">S-curve through origin; odd symmetry</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">nth root, even n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x^(1⁄n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">flatter generalization of √x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">nth root, odd n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x^(1⁄n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">flatter generalization of ∛x</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Absolute value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|x|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">V-shape with vertex at origin</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Step (floor / ceiling)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">⌊x⌋, ⌈x⌉</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℤ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">staircase — horizontal segments with jumps</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exponential</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a · bˣ (b &gt; 0, b ≠ 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(0, ∞) or (−∞, 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rapid growth or decay; horizontal asymptote y = 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithmic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">logₐ(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverse of exp; vertical asymptote x = 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sine / cosine</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin(x), cos(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−1, 1]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">periodic wave, period 2π</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Tangent</td>
      <td style="padding: 12px 15px; color: #34495e;">tan(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">ℝ excl. π⁄2 + nπ</td>
      <td style="padding: 12px 15px; color: #34495e;">ℝ</td>
      <td style="padding: 12px 15px; color: #34495e;">period π; vertical asymptotes at excluded points</td>
    </tr>
  </tbody>
</table>
`


//   const sectionsContent = {

//     obj0 : {
//   title: `Key Terms`,
//   content: `
// ## Families on This Page
 
// • [Parent Function](!/functions/definitions#parent_function) — simplest member of each family, the baseline for transformations
// • [Constant Function](!/functions/definitions#constant_function) — $f(x) = c$, horizontal line
// • [Linear Function](!/functions/definitions#linear_function) — $f(x) = mx + b$, straight line
// • [Quadratic Function](!/functions/definitions#quadratic_function) — $f(x) = ax^2 + bx + c$, parabola
// • [Absolute Value Function](!/functions/definitions#absolute_value_function) — $f(x) = |x|$, V-shape
 
// ## Classification
 
// • [Piecewise Function](!/functions/definitions#piecewise_function) — different formulas on different intervals
// • [One-to-One Function](!/functions/definitions#one_to_one_function) — determines which families have inverses
// • [Increasing Function](!/functions/definitions#increasing_function) — characterizes monotonic families like exponentials and logarithms
// `,
//   before: ``,
//   after: `
 
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
//   link: '',
// },

//   obj1: {
//     title: `What is a Function Family`,
//     content: `A function family is a collection of functions sharing the same fundamental structure. Members of a family are defined by a common formula type, with parameters that vary from one member to another.

// The linear family consists of all functions of the form $f(x) = mx + b$. The parameters $m$ and $b$ vary, but every member is a line. Change $m$, and the slope changes. Change $b$, and the line shifts vertically. The underlying linearity persists.

// The quadratic family consists of all functions of the form $f(x) = ax^2 + bx + c$ with $a \\neq 0$. Every member is a parabola. The parameters control opening direction, width, and position, but the parabolic shape is fixed.

// Each family has a parent function — the simplest representative, typically with parameters set to produce the most basic shape. For linear functions, the parent is $f(x) = x$. For quadratics, it is $f(x) = x^2$. Other family members arise through [transformations](!/functions/transformations) of the parent.

// Recognizing family membership enables prediction. Knowing a function is exponential immediately suggests rapid growth or decay, a horizontal asymptote, and a [domain](!/functions/domain) of all real numbers.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Identifying Function Families`,
//     content: `Identifying a function's family requires recognizing its structural features — the algebraic form, the [graph](!/functions/graphs) shape, or the behavior pattern.

// From an equation: Look for the defining operation. A polynomial in $x$ with highest power $2$ is quadratic. A ratio of polynomials is rational. An expression with $x$ in the exponent is exponential. An expression with $x$ under a radical is a radical function.

// From a graph: Look for characteristic shapes. A straight line indicates linear. A U-shape or inverted U indicates quadratic. An S-curve passing through the origin suggests cubic. A curve with asymptotes suggests rational or exponential. Periodic waves indicate trigonometric.

// From a table: Look for patterns in how outputs change. Constant differences between successive outputs suggest linear. Constant ratios suggest exponential. Symmetric patterns around a central point suggest quadratic.

// Some functions belong to multiple families depending on perspective. The function $f(x) = x^4$ is polynomial (degree four) and also a power function. Context determines which classification is most useful.

// The table below collects the diagnostic clues by source — equation, graph, or table — alongside the family-specific signs that point to each common family.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Constant Functions`,
//     content: `A constant function has the form $f(x) = c$ where $c$ is a fixed number. Every input produces the same output.

// The [graph](!/functions/graphs) is a horizontal line at height $c$. It extends infinitely left and right, never rising, never falling.

// [Domain](!/functions/domain): all real numbers $(-\\infty, \\infty)$.

// [Range](!/functions/range): the single value $\\{c\\}$.

// Constant functions are technically polynomials of degree $0$ (when $c \\neq 0$). They are also the simplest [piecewise](!/functions/piecewise) building blocks — each piece of a step function is constant.

// Key [properties](!/functions/properties): Even symmetry (symmetric about the $y$-axis). Neither increasing nor decreasing — perfectly flat. Bounded both above and below by the constant value itself. Continuous everywhere.

// As limiting behavior, other functions may approach constant functions. A rational function with horizontal asymptote $y = 3$ behaves increasingly like the constant function $f(x) = 3$ as $|x| \\to \\infty$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Linear Functions`,
//     content: `A linear function has the form $f(x) = mx + b$ where $m$ is the slope and $b$ is the $y$-intercept. The [graph](!/functions/graphs) is a straight line.

// The slope $m$ determines direction and steepness. When $m > 0$, the line rises from left to right. When $m < 0$, it falls. When $m = 0$, the line is horizontal (a constant function). Larger $|m|$ means steeper slope.

// The $y$-intercept $b$ is the output when $x = 0$ — where the line crosses the vertical axis.

// [Domain](!/functions/domain): all real numbers.

// [Range](!/functions/range): all real numbers (when $m \\neq 0$).

// Linear functions have constant rate of change — the slope. Moving one unit right always changes the output by exactly $m$ units.

// Every linear function with $m \\neq 0$ is one-to-one, passing the horizontal line test. Its [inverse](!/functions/inverse) is also linear: $f^{-1}(x) = \\dfrac{x - b}{m}$.

// The parent linear function is $f(x) = x$ — slope $1$, passing through the origin at $45°$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Quadratic Functions`,
//     content: `A quadratic function has the form $f(x) = ax^2 + bx + c$ where $a \\neq 0$. The [graph](!/functions/graphs) is a parabola.

// When $a > 0$, the parabola opens upward with a minimum at the vertex. When $a < 0$, it opens downward with a maximum at the vertex. Larger $|a|$ makes the parabola narrower; smaller $|a|$ makes it wider.

// The vertex occurs at $x = -\\dfrac{b}{2a}$. The vertex form $f(x) = a(x - h)^2 + k$ places the vertex at $(h, k)$ and shows transformations explicitly.

// [Domain](!/functions/domain): all real numbers.

// [Range](!/functions/range): $[k, \\infty)$ when $a > 0$; $(-\\infty, k]$ when $a < 0$.

// Quadratics have axis of symmetry — the vertical line through the vertex. They are not one-to-one on their natural domain but become one-to-one when restricted to one side of the vertex.

// Zeros (if real) are found by factoring, completing the square, or the quadratic formula. The discriminant $b^2 - 4ac$ determines whether there are two, one, or no real zeros.

// The parent quadratic function is $f(x) = x^2$ — vertex at the origin, opening upward.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Cubic Functions`,
//     content: `A cubic function has the form $f(x) = ax^3 + bx^2 + cx + d$ where $a \\neq 0$. The [graph](!/functions/graphs) has an S-curve shape with possible turning points.

// When $a > 0$, the function falls on the far left and rises on the far right. When $a < 0$, it rises on the far left and falls on the far right. The ends always go in opposite directions.

// [Domain](!/functions/domain): all real numbers.

// [Range](!/functions/range): all real numbers.

// Every cubic has at least one real zero — the S-curve must cross the $x$-axis somewhere. It may have one, two, or three real zeros depending on its specific coefficients.

// Cubics have at most two turning points (local maximum and minimum). Some cubics, like $f(x) = x^3$, have no turning points — they increase throughout.

// The inflection point, where concavity changes, occurs at $x = -\\dfrac{b}{3a}$. The parent cubic $f(x) = x^3$ has its inflection point at the origin, with odd symmetry about that point.

// Cubic functions are one-to-one only when they have no turning points (monotonic cubics). The parent $f(x) = x^3$ is one-to-one, with [inverse](!/functions/inverse) $f^{-1}(x) = \\sqrt[3]{x}$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Higher-Degree Polynomial Functions`,
//     content: `Polynomial functions of degree $n \\geq 4$ extend the patterns established by quadratics and cubics.

// $$f(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0, \\quad a_n \\neq 0$$

// [Domain](!/functions/domain): all real numbers.

// [Range](!/functions/range): all real numbers for odd degree; bounded on one side for even degree.

// End behavior depends on degree and leading coefficient. Even degree: both ends go the same direction (up if $a_n > 0$, down if $a_n < 0$). Odd degree: ends go opposite directions.

// A polynomial of degree $n$ has at most $n$ real zeros and at most $n - 1$ turning points.

// Degree $4$ (quartic): up to four zeros, up to three turning points, W-shape or M-shape possible.

// Degree $5$ (quintic): up to five zeros, up to four turning points, always crosses the $x$-axis at least once.

// The [graph](!/functions/graphs) is always smooth — no corners, breaks, or asymptotes. Polynomials are continuous everywhere and have derivatives of all orders.

// Higher-degree polynomials are covered in detail in the algebra section on polynomials.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Rational Functions`,
//     content: `A rational function is a ratio of two polynomials:

// $$f(x) = \\frac{P(x)}{Q(x)}$$

// The [domain](!/functions/domain) excludes values where $Q(x) = 0$. These exclusions create vertical asymptotes or holes.

// Vertical asymptotes occur where $Q(x) = 0$ and $P(x) \\neq 0$. The function approaches $\\pm\\infty$ near these values.

// Holes (removable discontinuities) occur where both $P(x) = 0$ and $Q(x) = 0$ share a common factor. The graph has a gap at that point.

// Horizontal asymptotes describe end behavior:
// - Degree of $P <$ degree of $Q$: horizontal asymptote at $y = 0$.
// - Degrees equal: horizontal asymptote at $y = \\dfrac{\\text{leading coefficient of } P}{\\text{leading coefficient of } Q}$.
// - Degree of $P >$ degree of $Q$: no horizontal asymptote (oblique asymptote if degree difference is $1$).

// The simplest rational function is $f(x) = \\dfrac{1}{x}$, with vertical asymptote at $x = 0$, horizontal asymptote at $y = 0$, and hyperbolic shape with branches in quadrants I and III.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Square Root Function`,
//     content: `The square root function has the form $f(x) = \\sqrt{x}$ or, more generally, $f(x) = \\sqrt{g(x)}$.

// The parent function $f(x) = \\sqrt{x}$ starts at the origin and rises gradually to the right, curving ever more gently.

// [Domain](!/functions/domain): $[0, \\infty)$ — the radicand must be non-negative.

// [Range](!/functions/range): $[0, \\infty)$ — square roots are non-negative.

// The [graph](!/functions/graphs) is the right half of a parabola lying on its side. It is the [inverse](!/functions/inverse) of $f(x) = x^2$ restricted to $[0, \\infty)$.

// Key [properties](!/functions/properties): Increasing on entire domain. Concave down — the rate of increase slows. One-to-one. Continuous on its domain.

// The function increases without bound but ever more slowly: $\\sqrt{100} = 10$, $\\sqrt{10000} = 100$. Doubling the input does not double the output.

// Transformations shift the starting point. For $f(x) = \\sqrt{x - h} + k$, the graph starts at $(h, k)$ instead of the origin.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj10: {
//     title: `Cube Root Function`,
//     content: `The cube root function has the form $f(x) = \\sqrt[3]{x}$ or $f(x) = x^{1/3}$.

// Unlike the square root, the cube root accepts negative inputs. Every real number has a real cube root.

// [Domain](!/functions/domain): all real numbers $(-\\infty, \\infty)$.

// [Range](!/functions/range): all real numbers $(-\\infty, \\infty)$.

// The [graph](!/functions/graphs) passes through the origin and extends in both directions, with an S-like shape but gentler than a cubic. It flattens as $|x|$ increases.

// Key [properties](!/functions/properties): Odd symmetry about the origin — $f(-x) = -f(x)$. Increasing on entire domain. Concave up for $x < 0$, concave down for $x > 0$, with inflection point at the origin. One-to-one.

// The cube root function is the [inverse](!/functions/inverse) of $f(x) = x^3$. Both functions have domain and range all real numbers, and both are one-to-one.

// Growth is slower than linear: $\\sqrt[3]{1000} = 10$, $\\sqrt[3]{1000000} = 100$. The cube root tames large numbers, making them more manageable.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj11: {
//     title: `Other Radical Functions`,
//     content: `The $n$th root function $f(x) = \\sqrt[n]{x} = x^{1/n}$ generalizes square and cube roots.

// For even $n$ (fourth root, sixth root, etc.):
// - [Domain](!/functions/domain): $[0, \\infty)$
// - [Range](!/functions/range): $[0, \\infty)$
// - Behavior resembles square root — starting at origin, increasing, concave down
// - Higher even roots are flatter near the origin and rise more slowly

// For odd $n$ (fifth root, seventh root, etc.):
// - Domain: all real numbers
// - Range: all real numbers
// - Behavior resembles cube root — S-shaped curve through origin
// - Odd symmetry about the origin
// - Higher odd roots are flatter, rising and falling more slowly

// All $n$th root functions are one-to-one. Each is the [inverse](!/functions/inverse) of the corresponding power function $x^n$ (with appropriate domain restriction for even $n$).

// Radical functions with expressions under the root — like $f(x) = \\sqrt{x^2 + 1}$ or $f(x) = \\sqrt[3]{2x - 5}$ — combine radical behavior with [transformations](!/functions/transformations) and [compositions](!/functions/composition).

// The table below sets the even-n and odd-n cases side by side with their domains, ranges, symmetry, and characteristic shape.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj12: {
//     title: `Absolute Value Function`,
//     content: `The absolute value function $f(x) = |x|$ returns the distance of $x$ from zero — always non-negative.

// The [piecewise](!/functions/piecewise) definition:

// $$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

// [Domain](!/functions/domain): all real numbers.

// [Range](!/functions/range): $[0, \\infty)$.

// The [graph](!/functions/graphs) is V-shaped with vertex at the origin. The right arm has slope $1$; the left arm has slope $-1$. The pieces meet at the vertex, connecting continuously but with a sharp corner.

// Key [properties](!/functions/properties): Even symmetry — $|{-x}| = |x|$. Decreasing on $(-\\infty, 0)$, increasing on $(0, \\infty)$. Not one-to-one (fails horizontal line test). Not differentiable at $x = 0$ (sharp corner).

// Transformations: $f(x) = a|x - h| + k$ has vertex at $(h, k)$. The coefficient $a$ controls steepness and direction (opening upward if $a > 0$, downward if $a < 0$).

// Equations with absolute values often split into cases: $|x - 3| = 5$ means $x - 3 = 5$ or $x - 3 = -5$, giving $x = 8$ or $x = -2$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj13: {
//     title: `Step Functions`,
//     content: `Step functions are [piecewise](!/functions/piecewise) functions where each piece is constant. The [graph](!/functions/graphs) consists of horizontal segments with jumps between them.

// The floor function $\\lfloor x \\rfloor$ returns the greatest integer less than or equal to $x$:

// $$\\lfloor 2.7 \\rfloor = 2, \\quad \\lfloor -0.3 \\rfloor = -1, \\quad \\lfloor 4 \\rfloor = 4$$

// The ceiling function $\\lceil x \\rceil$ returns the least integer greater than or equal to $x$:

// $$\\lceil 2.7 \\rceil = 3, \\quad \\lceil -0.3 \\rceil = 0, \\quad \\lceil 4 \\rceil = 4$$

// [Domain](!/functions/domain): all real numbers.

// [Range](!/functions/range): all integers $\\mathbb{Z}$.

// Both functions have jump discontinuities at every integer. The floor function is continuous from the right; the ceiling function is continuous from the left.

// Applications include rounding, pricing tiers (postage by weight), and converting continuous quantities to discrete categories. Any situation where values snap to fixed levels suggests a step function model.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj14: {
//     title: `Exponential Functions`,
//     content: `An exponential function has the form $f(x) = a \\cdot b^x$ where $b > 0$, $b \\neq 1$, and $a \\neq 0$. The variable appears in the exponent.

// When $b > 1$: exponential growth. The function increases rapidly as $x$ increases, approaching $0$ as $x \\to -\\infty$.

// When $0 < b < 1$: exponential decay. The function decreases rapidly as $x$ increases, approaching $0$ as $x \\to \\infty$.

// [Domain](!/functions/domain): all real numbers.

// [Range](!/functions/range): $(0, \\infty)$ when $a > 0$; $(-\\infty, 0)$ when $a < 0$.

// Key [properties](!/functions/properties): Horizontal asymptote at $y = 0$. Always positive (when $a > 0$). One-to-one. Continuous everywhere.

// The natural exponential $f(x) = e^x$ uses base $e \\approx 2.718$. It is ubiquitous in calculus because it is its own derivative.

// Exponential functions are [inverses](!/functions/inverse) of logarithmic functions with the same base. This connection makes logarithms essential for solving exponential equations.

// Detailed treatment appears in the algebra section on exponential functions.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj15: {
//     title: `Logarithmic Functions`,
//     content: `A logarithmic function has the form $f(x) = \\log_b(x)$ where $b > 0$ and $b \\neq 1$. It is the [inverse](!/functions/inverse) of the exponential function with the same base.

// The logarithm answers: to what power must $b$ be raised to produce $x$?

// $$\\log_b(x) = y \\iff b^y = x$$

// [Domain](!/functions/domain): $(0, \\infty)$ — only positive inputs.

// [Range](!/functions/range): all real numbers.

// The [graph](!/functions/graphs) passes through $(1, 0)$ since $\\log_b(1) = 0$. It has a vertical asymptote at $x = 0$. When $b > 1$, the function increases slowly. When $0 < b < 1$, it decreases.

// Key [properties](!/functions/properties): One-to-one. Continuous on its domain. Unbounded above and below, but grows very slowly.

// Common bases: $\\log_{10}(x) = \\log(x)$ (common logarithm), $\\log_e(x) = \\ln(x)$ (natural logarithm).

// Logarithms convert multiplication to addition: $\\log(ab) = \\log(a) + \\log(b)$. This property underlies their historical use in computation and their modern role in scaling (decibels, pH, Richter scale).

// Detailed treatment appears in the algebra section on logarithms.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj16: {
//     title: `Trigonometric Functions`,
//     content: `The trigonometric functions arise from the unit circle and model periodic phenomena.

// Sine: $f(x) = \\sin(x)$
// - [Domain](!/functions/domain): all real numbers
// - [Range](!/functions/range): $[-1, 1]$
// - Period: $2\\pi$
// - Odd function: $\\sin(-x) = -\\sin(x)$

// Cosine: $f(x) = \\cos(x)$
// - Domain: all real numbers
// - Range: $[-1, 1]$
// - Period: $2\\pi$
// - Even function: $\\cos(-x) = \\cos(x)$

// Tangent: $f(x) = \\tan(x)$
// - Domain: all real numbers except $x = \\dfrac{\\pi}{2} + n\\pi$
// - Range: all real numbers
// - Period: $\\pi$
// - Vertical asymptotes at excluded points

// Reciprocal functions — cosecant, secant, cotangent — are defined as reciprocals of sine, cosine, and tangent respectively.

// All trigonometric functions are periodic, repeating their values at regular intervals. Amplitude, period, and phase shift can be modified through [transformations](!/functions/transformations).

// [Inverse trigonometric functions](!/functions/inverse) exist on restricted domains where the original functions are one-to-one.

// Detailed treatment appears in the trigonometry section.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj17: {
//     title: `Comparing Function Families`,
//     content: `Different families exhibit different growth rates, domain restrictions, and characteristic behaviors.

// Growth comparison for large $x$:
// - Logarithmic grows slowest: $\\ln(x)$
// - Root functions: $\\sqrt{x}$, $\\sqrt[3]{x}$
// - Linear: $x$
// - Polynomial: $x^2$, $x^3$, etc.
// - Exponential grows fastest: $2^x$, $e^x$

// Eventually, exponentials overtake any polynomial, and polynomials overtake any logarithm.

// Domain comparison:
// - All reals: polynomials, odd-root functions, exponentials, sine, cosine
// - Restricted: even-root functions ($x \\geq 0$), logarithms ($x > 0$), rational (excludes zeros of denominator)

// Invertibility:
// - Always one-to-one: linear (non-constant), exponential, logarithmic, cubic (if monotonic), odd roots
// - Not one-to-one without restriction: quadratic, absolute value, even powers, sine, cosine

// Periodicity:
// - Periodic: trigonometric functions
// - Non-periodic: all polynomial, rational, exponential, logarithmic, radical functions

// Each family has its natural applications. Linear for constant rates. Quadratic for projectile motion. Exponential for growth and decay. Trigonometric for cycles. Choosing the right family is the first step in mathematical modeling.

// The table below puts the growth ranking in compact form with representative examples — handy when comparing how fast different families ultimately grow.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj18: {
//     title: `Families at a Glance`,
//     content: `The page covers more than a dozen function families, each with its own algebraic structure, characteristic graph, domain restrictions, and identifying features. The table below collects them all in one place — useful as a reference card when classifying an unfamiliar function or recalling a family's key properties at a glance.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

// }

const sectionsContent = {

    obj0 : {
  title: `Key Terms`,
  content: `
## Families on This Page
 
• [Parent Function](!/functions/definitions#parent_function) — simplest member of each family, the baseline for transformations
• [Constant Function](!/functions/definitions#constant_function) — $f(x) = c$, horizontal line
• [Linear Function](!/functions/definitions#linear_function) — $f(x) = mx + b$, straight line
• [Quadratic Function](!/functions/definitions#quadratic_function) — $f(x) = ax^2 + bx + c$, parabola
• [Absolute Value Function](!/functions/definitions#absolute_value_function) — $f(x) = |x|$, V-shape
 
## Classification
 
• [Piecewise Function](!/functions/definitions#piecewise_function) — different formulas on different intervals
• [One-to-One Function](!/functions/definitions#one_to_one_function) — determines which families have inverses
• [Increasing Function](!/functions/definitions#increasing_function) — characterizes monotonic families like exponentials and logarithms
`,
  before: ``,
  after: `
 
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
  link: '',
},

  obj1: {
    title: `What is a Function Family`,
    content: `A function family is a collection of functions sharing the same fundamental structure. Members of a family are defined by a common formula type, with parameters that vary from one member to another.

The linear family consists of all functions of the form $f(x) = mx + b$. The parameters $m$ and $b$ vary, but every member is a line. Change $m$, and the slope changes. Change $b$, and the line shifts vertically. The underlying linearity persists.

The quadratic family consists of all functions of the form $f(x) = ax^2 + bx + c$ with $a \\neq 0$. Every member is a parabola. The parameters control opening direction, width, and position, but the parabolic shape is fixed.

Each family has a parent function — the simplest representative, typically with parameters set to produce the most basic shape. For linear functions, the parent is $f(x) = x$. For quadratics, it is $f(x) = x^2$. Other family members arise through [transformations](!/functions/transformations) of the parent.

Recognizing family membership enables prediction. Knowing a function is exponential immediately suggests rapid growth or decay, a horizontal asymptote, and a [domain](!/functions/domain) of all real numbers.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Identifying Function Families`,
    content: `Identifying a function's family requires recognizing its structural features — the algebraic form, the [graph](!/functions/graphs) shape, or the behavior pattern.

From an equation: Look for the defining operation. A polynomial in $x$ with highest power $2$ is quadratic. A ratio of polynomials is rational. An expression with $x$ in the exponent is exponential. An expression with $x$ under a radical is a radical function.

From a graph: Look for characteristic shapes. A straight line indicates linear. A U-shape or inverted U indicates quadratic. An S-curve passing through the origin suggests cubic. A curve with asymptotes suggests rational or exponential. Periodic waves indicate trigonometric.

From a table: Look for patterns in how outputs change. Constant differences between successive outputs suggest linear. Constant ratios suggest exponential. Symmetric patterns around a central point suggest quadratic.

Some functions belong to multiple families depending on perspective. The function $f(x) = x^4$ is polynomial (degree four) and also a power function. Context determines which classification is most useful.

The table below collects the diagnostic clues by source — equation, graph, or table — alongside the family-specific signs that point to each common family.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Constant Functions`,
    content: `A constant function has the form $f(x) = c$ where $c$ is a fixed number. Every input produces the same output.

The [graph](!/functions/graphs) is a horizontal line at height $c$. It extends infinitely left and right, never rising, never falling.

[Domain](!/functions/domain): all real numbers $(-\\infty, \\infty)$.

[Range](!/functions/range): the single value $\\{c\\}$.

Constant functions are technically polynomials of degree $0$ (when $c \\neq 0$). They are also the simplest [piecewise](!/functions/piecewise) building blocks — each piece of a step function is constant.

Key [properties](!/functions/properties): Even symmetry (symmetric about the $y$-axis). Neither increasing nor decreasing — perfectly flat. Bounded both above and below by the constant value itself. Continuous everywhere.

As limiting behavior, other functions may approach constant functions. A rational function with horizontal asymptote $y = 3$ behaves increasingly like the constant function $f(x) = 3$ as $|x| \\to \\infty$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Linear Functions`,
    content: `A linear function has the form:

@academic[formula_callout:Slope Intercept Form
$$f(x) = mx + b$$
/functions/formulas#slope_intercept_form]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

where $m$ is the slope and $b$ is the $y$-intercept. The [graph](!/functions/graphs) is a straight line.

The slope $m$ determines direction and steepness. When $m > 0$, the line rises from left to right. When $m < 0$, it falls. When $m = 0$, the line is horizontal (a constant function). Larger $|m|$ means steeper slope.

The $y$-intercept $b$ is the output when $x = 0$ — where the line crosses the vertical axis.

[Domain](!/functions/domain): all real numbers.

[Range](!/functions/range): all real numbers (when $m \\neq 0$).

Linear functions have constant rate of change — the slope. Moving one unit right always changes the output by exactly $m$ units.

Every linear function with $m \\neq 0$ is one-to-one, passing the horizontal line test. Its [inverse](!/functions/inverse) is also linear: $f^{-1}(x) = \\dfrac{x - b}{m}$.

The parent linear function is $f(x) = x$ — slope $1$, passing through the origin at $45°$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Quadratic Functions`,
    content: `A quadratic function has the form:

@academic[formula_callout:Standard Form Quadratic
$$f(x) = ax^2 + bx + c$$
/functions/formulas#standard_form_quadratic]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

where $a \\neq 0$. The [graph](!/functions/graphs) is a parabola.

When $a > 0$, the parabola opens upward with a minimum at the vertex. When $a < 0$, it opens downward with a maximum at the vertex. Larger $|a|$ makes the parabola narrower; smaller $|a|$ makes it wider.

The vertex sits on the axis of symmetry:

@academic[formula_callout:Axis of Symmetry
$$x = -\\frac{b}{2a}$$
/functions/formulas#axis_of_symmetry]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

The vertex form places the vertex at $(h, k)$ explicitly and shows transformations directly:

@academic[formula_callout:Vertex Form Quadratic
$$f(x) = a(x - h)^2 + k$$
/functions/formulas#vertex_form_quadratic]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

The vertex's coordinates can be recovered from the standard-form coefficients directly:

@academic[formula_callout:Vertex from Coefficients
$$h = -\\frac{b}{2a}, \\quad k = f(h)$$
/functions/formulas#vertex_from_coefficients]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

[Domain](!/functions/domain): all real numbers.

[Range](!/functions/range): $[k, \\infty)$ when $a > 0$; $(-\\infty, k]$ when $a < 0$.

Quadratics have axis of symmetry — the vertical line through the vertex. They are not one-to-one on their natural domain but become one-to-one when restricted to one side of the vertex.

Zeros (if real) are found by factoring, completing the square, or the quadratic formula. The discriminant $b^2 - 4ac$ determines whether there are two, one, or no real zeros.

The parent quadratic function is $f(x) = x^2$ — vertex at the origin, opening upward.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Cubic Functions`,
    content: `A cubic function has the form $f(x) = ax^3 + bx^2 + cx + d$ where $a \\neq 0$. The [graph](!/functions/graphs) has an S-curve shape with possible turning points.

When $a > 0$, the function falls on the far left and rises on the far right. When $a < 0$, it rises on the far left and falls on the far right. The ends always go in opposite directions.

[Domain](!/functions/domain): all real numbers.

[Range](!/functions/range): all real numbers.

Every cubic has at least one real zero — the S-curve must cross the $x$-axis somewhere. It may have one, two, or three real zeros depending on its specific coefficients.

Cubics have at most two turning points (local maximum and minimum). Some cubics, like $f(x) = x^3$, have no turning points — they increase throughout.

The inflection point, where concavity changes, occurs at $x = -\\dfrac{b}{3a}$. The parent cubic $f(x) = x^3$ has its inflection point at the origin, with odd symmetry about that point.

Cubic functions are one-to-one only when they have no turning points (monotonic cubics). The parent $f(x) = x^3$ is one-to-one, with [inverse](!/functions/inverse) $f^{-1}(x) = \\sqrt[3]{x}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Higher-Degree Polynomial Functions`,
    content: `Polynomial functions of degree $n \\geq 4$ extend the patterns established by quadratics and cubics.

$$f(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0, \\quad a_n \\neq 0$$

[Domain](!/functions/domain): all real numbers.

[Range](!/functions/range): all real numbers for odd degree; bounded on one side for even degree.

End behavior depends on degree and leading coefficient. Even degree: both ends go the same direction (up if $a_n > 0$, down if $a_n < 0$). Odd degree: ends go opposite directions.

A polynomial of degree $n$ has at most $n$ real zeros and at most $n - 1$ turning points.

Degree $4$ (quartic): up to four zeros, up to three turning points, W-shape or M-shape possible.

Degree $5$ (quintic): up to five zeros, up to four turning points, always crosses the $x$-axis at least once.

The [graph](!/functions/graphs) is always smooth — no corners, breaks, or asymptotes. Polynomials are continuous everywhere and have derivatives of all orders.

Higher-degree polynomials are covered in detail in the algebra section on polynomials.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Rational Functions`,
    content: `A rational function is a ratio of two polynomials:

$$f(x) = \\frac{P(x)}{Q(x)}$$

The [domain](!/functions/domain) excludes values where $Q(x) = 0$. These exclusions create vertical asymptotes or holes.

Vertical asymptotes occur where the denominator vanishes but the numerator does not. Formally:

@academic[formula_callout:Vertical Asymptote Rational
$$x = a \\quad \\text{where } Q(a) = 0 \\text{ and } P(a) \\neq 0$$
/functions/formulas#vertical_asymptote_rational]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

The function approaches $\\pm\\infty$ near these values.

Holes (removable discontinuities) occur where both $P(x) = 0$ and $Q(x) = 0$ share a common factor. The graph has a gap at that point.

Horizontal asymptotes describe end behavior. When the degrees of numerator and denominator are equal, the asymptote sits at the ratio of leading coefficients:

@academic[formula_callout:Horizontal Asymptote Equal Degree
$$y = \\frac{a_n}{b_m} \\quad \\text{when } \\deg P = \\deg Q$$
/functions/formulas#horizontal_asymptote_equal_degree]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

When the numerator's degree is lower than the denominator's, the asymptote is the $x$-axis itself:

@academic[formula_callout:Horizontal Asymptote Numerator Lower
$$y = 0 \\quad \\text{when } \\deg P < \\deg Q$$
/functions/formulas#horizontal_asymptote_numerator_lower]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

When the numerator's degree exceeds the denominator's, there is no horizontal asymptote — an oblique asymptote appears when the degree difference is exactly $1$.

The simplest rational function is $f(x) = \\dfrac{1}{x}$, with vertical asymptote at $x = 0$, horizontal asymptote at $y = 0$, and hyperbolic shape with branches in quadrants I and III.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Square Root Function`,
    content: `The square root function has the form $f(x) = \\sqrt{x}$ or, more generally, $f(x) = \\sqrt{g(x)}$.

The parent function $f(x) = \\sqrt{x}$ starts at the origin and rises gradually to the right, curving ever more gently.

[Domain](!/functions/domain): $[0, \\infty)$ — the radicand must be non-negative.

[Range](!/functions/range): $[0, \\infty)$ — square roots are non-negative.

The [graph](!/functions/graphs) is the right half of a parabola lying on its side. It is the [inverse](!/functions/inverse) of $f(x) = x^2$ restricted to $[0, \\infty)$.

Key [properties](!/functions/properties): Increasing on entire domain. Concave down — the rate of increase slows. One-to-one. Continuous on its domain.

The function increases without bound but ever more slowly: $\\sqrt{100} = 10$, $\\sqrt{10000} = 100$. Doubling the input does not double the output.

Transformations shift the starting point. For $f(x) = \\sqrt{x - h} + k$, the graph starts at $(h, k)$ instead of the origin.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Cube Root Function`,
    content: `The cube root function has the form $f(x) = \\sqrt[3]{x}$ or $f(x) = x^{1/3}$.

Unlike the square root, the cube root accepts negative inputs. Every real number has a real cube root.

[Domain](!/functions/domain): all real numbers $(-\\infty, \\infty)$.

[Range](!/functions/range): all real numbers $(-\\infty, \\infty)$.

The [graph](!/functions/graphs) passes through the origin and extends in both directions, with an S-like shape but gentler than a cubic. It flattens as $|x|$ increases.

Key [properties](!/functions/properties): Odd symmetry about the origin — $f(-x) = -f(x)$. Increasing on entire domain. Concave up for $x < 0$, concave down for $x > 0$, with inflection point at the origin. One-to-one.

The cube root function is the [inverse](!/functions/inverse) of $f(x) = x^3$. Both functions have domain and range all real numbers, and both are one-to-one.

Growth is slower than linear: $\\sqrt[3]{1000} = 10$, $\\sqrt[3]{1000000} = 100$. The cube root tames large numbers, making them more manageable.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Other Radical Functions`,
    content: `The $n$th root function $f(x) = \\sqrt[n]{x} = x^{1/n}$ generalizes square and cube roots.

For even $n$ (fourth root, sixth root, etc.):
- [Domain](!/functions/domain): $[0, \\infty)$
- [Range](!/functions/range): $[0, \\infty)$
- Behavior resembles square root — starting at origin, increasing, concave down
- Higher even roots are flatter near the origin and rise more slowly

For odd $n$ (fifth root, seventh root, etc.):
- Domain: all real numbers
- Range: all real numbers
- Behavior resembles cube root — S-shaped curve through origin
- Odd symmetry about the origin
- Higher odd roots are flatter, rising and falling more slowly

All $n$th root functions are one-to-one. Each is the [inverse](!/functions/inverse) of the corresponding power function $x^n$ (with appropriate domain restriction for even $n$).

Radical functions with expressions under the root — like $f(x) = \\sqrt{x^2 + 1}$ or $f(x) = \\sqrt[3]{2x - 5}$ — combine radical behavior with [transformations](!/functions/transformations) and [compositions](!/functions/composition).

The table below sets the even-n and odd-n cases side by side with their domains, ranges, symmetry, and characteristic shape.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Absolute Value Function`,
    content: `The absolute value function $f(x) = |x|$ returns the distance of $x$ from zero — always non-negative.

The [piecewise](!/functions/piecewise) definition:

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

[Domain](!/functions/domain): all real numbers.

[Range](!/functions/range): $[0, \\infty)$.

The [graph](!/functions/graphs) is V-shaped with vertex at the origin. The right arm has slope $1$; the left arm has slope $-1$. The pieces meet at the vertex, connecting continuously but with a sharp corner.

Key [properties](!/functions/properties): Even symmetry — $|{-x}| = |x|$. Decreasing on $(-\\infty, 0)$, increasing on $(0, \\infty)$. Not one-to-one (fails horizontal line test). Not differentiable at $x = 0$ (sharp corner).

Transformations: $f(x) = a|x - h| + k$ has vertex at $(h, k)$. The coefficient $a$ controls steepness and direction (opening upward if $a > 0$, downward if $a < 0$).

Equations with absolute values often split into cases: $|x - 3| = 5$ means $x - 3 = 5$ or $x - 3 = -5$, giving $x = 8$ or $x = -2$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Step Functions`,
    content: `Step functions are [piecewise](!/functions/piecewise) functions where each piece is constant. The [graph](!/functions/graphs) consists of horizontal segments with jumps between them.

The floor function $\\lfloor x \\rfloor$ returns the greatest integer less than or equal to $x$:

$$\\lfloor 2.7 \\rfloor = 2, \\quad \\lfloor -0.3 \\rfloor = -1, \\quad \\lfloor 4 \\rfloor = 4$$

The ceiling function $\\lceil x \\rceil$ returns the least integer greater than or equal to $x$:

$$\\lceil 2.7 \\rceil = 3, \\quad \\lceil -0.3 \\rceil = 0, \\quad \\lceil 4 \\rceil = 4$$

[Domain](!/functions/domain): all real numbers.

[Range](!/functions/range): all integers $\\mathbb{Z}$.

Both functions have jump discontinuities at every integer. The floor function is continuous from the right; the ceiling function is continuous from the left.

Applications include rounding, pricing tiers (postage by weight), and converting continuous quantities to discrete categories. Any situation where values snap to fixed levels suggests a step function model.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Exponential Functions`,
    content: `An exponential function has the form $f(x) = a \\cdot b^x$ where $b > 0$, $b \\neq 1$, and $a \\neq 0$. The variable appears in the exponent.

When $b > 1$: exponential growth. The function increases rapidly as $x$ increases, approaching $0$ as $x \\to -\\infty$.

When $0 < b < 1$: exponential decay. The function decreases rapidly as $x$ increases, approaching $0$ as $x \\to \\infty$.

[Domain](!/functions/domain): all real numbers.

[Range](!/functions/range): $(0, \\infty)$ when $a > 0$; $(-\\infty, 0)$ when $a < 0$.

Key [properties](!/functions/properties): Horizontal asymptote at $y = 0$. Always positive (when $a > 0$). One-to-one. Continuous everywhere.

The natural exponential $f(x) = e^x$ uses base $e \\approx 2.718$. It is ubiquitous in calculus because it is its own derivative.

Exponential functions are [inverses](!/functions/inverse) of logarithmic functions with the same base. This connection makes logarithms essential for solving exponential equations.

Detailed treatment appears in the algebra section on exponential functions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Logarithmic Functions`,
    content: `A logarithmic function has the form $f(x) = \\log_b(x)$ where $b > 0$ and $b \\neq 1$. It is the [inverse](!/functions/inverse) of the exponential function with the same base.

The logarithm answers: to what power must $b$ be raised to produce $x$?

$$\\log_b(x) = y \\iff b^y = x$$

[Domain](!/functions/domain): $(0, \\infty)$ — only positive inputs.

[Range](!/functions/range): all real numbers.

The [graph](!/functions/graphs) passes through $(1, 0)$ since $\\log_b(1) = 0$. It has a vertical asymptote at $x = 0$. When $b > 1$, the function increases slowly. When $0 < b < 1$, it decreases.

Key [properties](!/functions/properties): One-to-one. Continuous on its domain. Unbounded above and below, but grows very slowly.

Common bases: $\\log_{10}(x) = \\log(x)$ (common logarithm), $\\log_e(x) = \\ln(x)$ (natural logarithm).

Logarithms convert multiplication to addition: $\\log(ab) = \\log(a) + \\log(b)$. This property underlies their historical use in computation and their modern role in scaling (decibels, pH, Richter scale).

Detailed treatment appears in the algebra section on logarithms.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Trigonometric Functions`,
    content: `The trigonometric functions arise from the unit circle and model periodic phenomena.

Sine: $f(x) = \\sin(x)$
- [Domain](!/functions/domain): all real numbers
- [Range](!/functions/range): $[-1, 1]$
- Period: $2\\pi$
- Odd function: $\\sin(-x) = -\\sin(x)$

Cosine: $f(x) = \\cos(x)$
- Domain: all real numbers
- Range: $[-1, 1]$
- Period: $2\\pi$
- Even function: $\\cos(-x) = \\cos(x)$

Tangent: $f(x) = \\tan(x)$
- Domain: all real numbers except $x = \\dfrac{\\pi}{2} + n\\pi$
- Range: all real numbers
- Period: $\\pi$
- Vertical asymptotes at excluded points

Reciprocal functions — cosecant, secant, cotangent — are defined as reciprocals of sine, cosine, and tangent respectively.

All trigonometric functions are periodic, repeating their values at regular intervals. Amplitude, period, and phase shift can be modified through [transformations](!/functions/transformations).

[Inverse trigonometric functions](!/functions/inverse) exist on restricted domains where the original functions are one-to-one.

Detailed treatment appears in the trigonometry section.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj17: {
    title: `Comparing Function Families`,
    content: `Different families exhibit different growth rates, domain restrictions, and characteristic behaviors.

Growth comparison for large $x$:
- Logarithmic grows slowest: $\\ln(x)$
- Root functions: $\\sqrt{x}$, $\\sqrt[3]{x}$
- Linear: $x$
- Polynomial: $x^2$, $x^3$, etc.
- Exponential grows fastest: $2^x$, $e^x$

Eventually, exponentials overtake any polynomial, and polynomials overtake any logarithm.

Domain comparison:
- All reals: polynomials, odd-root functions, exponentials, sine, cosine
- Restricted: even-root functions ($x \\geq 0$), logarithms ($x > 0$), rational (excludes zeros of denominator)

Invertibility:
- Always one-to-one: linear (non-constant), exponential, logarithmic, cubic (if monotonic), odd roots
- Not one-to-one without restriction: quadratic, absolute value, even powers, sine, cosine

Periodicity:
- Periodic: trigonometric functions
- Non-periodic: all polynomial, rational, exponential, logarithmic, radical functions

Each family has its natural applications. Linear for constant rates. Quadratic for projectile motion. Exponential for growth and decay. Trigonometric for cycles. Choosing the right family is the first step in mathematical modeling.

The table below puts the growth ranking in compact form with representative examples — handy when comparing how fast different families ultimately grow.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj18: {
    title: `Families at a Glance`,
    content: `The page covers more than a dozen function families, each with its own algebraic structure, characteristic graph, domain restrictions, and identifying features. The table below collects them all in one place — useful as a reference card when classifying an unfamiliar function or recalling a family's key properties at a glance.`,
    before: ``,
    after: ``,
    link: '',
  },

}



 const introContent = {
  id: "intro",
  title: "The Shape of Functions",
  content: `Functions cluster into families. Linear functions form one family — all straight lines, differing only in slope and position. Quadratic functions form another — all parabolas, differing in width, direction, and location. Each family shares a common algebraic structure that produces a characteristic shape.

Recognizing a function's family reveals its behavior before any calculation begins. A quadratic has a vertex and opens up or down. An exponential grows without bound or decays toward zero. A rational function may have asymptotes. The family determines these broad features; the specific parameters determine the details.`
}




  const faqQuestions = {
    q1: {
      question: "What is a function family in math?",
      answer: "A function family is a collection of functions sharing the same fundamental structure, defined by a common formula type with parameters that vary from one member to another. Each family has a parent function — the simplest representative with parameters set to produce the most basic shape. Recognizing family membership enables prediction of behavior before any calculation begins."
    },
    q2: {
      question: "What are the most common function families?",
      answer: "The most common function families include linear, quadratic, cubic, polynomial, rational, exponential, logarithmic, radical (square root and cube root), absolute value, step, and trigonometric functions. Each family has a characteristic graph shape and algebraic structure that distinguishes it from the others."
    },
    q3: {
      question: "How do you identify which function family a function belongs to?",
      answer: "You can identify a function's family from its equation, graph, or a table of values. From an equation, look for the defining operation — a variable in the exponent signals exponential, a ratio of polynomials signals rational, and so on. From a graph, look for characteristic shapes such as a straight line for linear, a U-shape for quadratic, or asymptotes for rational and exponential functions."
    },
    q4: {
      question: "What is the parent function of the quadratic family?",
      answer: "The parent function of the quadratic family is f(x) = x², with its vertex at the origin and opening upward. All other quadratic functions arise through transformations of this parent — shifting, stretching, compressing, or reflecting. The vertex form f(x) = a(x - h)² + k makes these transformations explicit."
    },
    q5: {
      question: "How do exponential and logarithmic function families relate to each other?",
      answer: "Exponential and logarithmic functions are inverse function families — each undoes the other. The exponential function f(x) = bˣ has domain all real numbers and range (0, ∞), while the logarithmic function f(x) = log_b(x) has domain (0, ∞) and range all real numbers. This inverse relationship means their graphs are reflections of each other across the line y = x."
    }
  }

  const seoData = {
    title: "Function Families: Types, Graphs & Properties",
    description: "Learn all major function families including linear, quadratic, exponential, logarithmic, rational, and radical functions. Explore their graphs, properties, and how to identify each type.",
    keywords: keyWords.join(", "),
    url: "/functions/families",
    name: "Function Families"
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "inLanguage": "en-US",
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      },
      "teaches": [
        "What a function family is and how parent functions work",
        "How to identify function families from equations, graphs, and tables",
        "Properties and graphs of linear and quadratic functions",
        "Exponential growth and decay versus logarithmic functions",
        "Rational, radical, and absolute value function families",
        "Comparing growth rates and domains across all function families",
        "A consolidated reference of every common function family with domain, range, and key features"
      ]
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
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seoData.name,
          "item": `https://www.learnmathclass.com${seoData.url}`
        }
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": faqQuestions.q1.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q1.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q2.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q2.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q3.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q3.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q4.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q4.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q5.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q5.answer }
        }
      ]
    }
  }

   return {
      props:{
         sectionsContent,
         introContent,
         obj2Table,
         obj11Table,
         obj17Table,
         summaryTable,
         faqQuestions,
         schemas,
          seoData: {
        title: "Function Families: Types, Graphs & Properties",
        description: "Learn all major function families including linear, quadratic, exponential, logarithmic, rational, and radical functions. Explore their graphs, properties, and how to identify each type.",
        keywords: keyWords.join(", "),
        url: "/functions/families",
         name: "Function Families"
      },
       }
    }
   }

export default function FamiliesPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj11Table,
  obj17Table,
  summaryTable,
  faqQuestions,
  schemas
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
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
          <div
            key={'obj2-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj2Table }}
          />,
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
          <div
            key={'obj11-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj11Table }}
          />,
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
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
    {
        id:'16',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
        ]
    },
    {
        id:'17',
        title:sectionsContent.obj17.title,
        link:sectionsContent.obj17.link,
        content:[
          sectionsContent.obj17.content,
          <div
            key={'obj17-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj17Table }}
          />,
        ]
    },
    {
        id:'18',
        title:sectionsContent.obj18.title,
        link:sectionsContent.obj18.link,
        content:[
          sectionsContent.obj18.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Function Families</h1>
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