

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

  const keyWords=[
    'domain of a function',
    'finding domain',
    'domain restrictions',
    'domain notation',
    'interval notation domain',
    'rational function domain',
    'radical function domain',
    'natural domain',
    'domain from graph',
    'how to find domain',
    'domain and range',
    'set builder notation domain',
    'logarithmic function domain',
    'restricted domain',
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — aggregation (reference): notations for expressing domain
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Notation</th>
      <th style="${tableHeaders.aggregation}">Form</th>
      <th style="${tableHeaders.aggregation}">Example</th>
      <th style="${tableHeaders.aggregation}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parentheses and brackets around endpoints</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[2, 5), (−∞, 3]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bracket includes the endpoint; parenthesis excludes it; ∞ always takes a parenthesis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Set-builder</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{x | defining condition}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{x | x ≥ 0}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">handles complex conditions intervals cannot easily express</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inequality</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">condition stated directly on x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≥ 0; &nbsp; −3 &lt; x ≤ 7</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">natural form when a restriction is being derived</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Union (disconnected)</td>
      <td style="padding: 12px 15px; color: #34495e;">two or more intervals joined with ∪</td>
      <td style="padding: 12px 15px; color: #34495e;">(−∞, −1) ∪ (1, ∞)</td>
      <td style="padding: 12px 15px; color: #34495e;">used when the domain skips a value or interval</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — aggregation: trigonometric functions and their domain restrictions
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Function</th>
      <th style="${tableHeaders.aggregation}">Defined as</th>
      <th style="${tableHeaders.aggregation}">Where undefined</th>
      <th style="${tableHeaders.aggregation}">Domain</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">—</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">never</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real numbers</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">—</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">never</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real numbers</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">tan(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin(x) ⁄ cos(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where cos(x) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ π⁄2 + nπ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cot(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(x) ⁄ sin(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where sin(x) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ nπ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sec(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ cos(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where cos(x) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ π⁄2 + nπ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">csc(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">1 ⁄ sin(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">where sin(x) = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">x ≠ nπ</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — aggregation: visual cues for reading domain from a graph
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Visual cue</th>
      <th style="${tableHeaders.aggregation}">What it means for the domain</th>
      <th style="${tableHeaders.aggregation}">Notation impact</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Solid dot at endpoint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">endpoint is included</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use bracket — [ or ]</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Open dot at endpoint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">endpoint is excluded</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use parenthesis — ( or )</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical asymptote at x = a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">value a is excluded; graph approaches but never reaches</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">domain splits at a using ∪</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Gap in the graph</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">interval missing — no curve exists there</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two or more disjoint intervals joined by ∪</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Arrow at end of curve</td>
      <td style="padding: 12px 15px; color: #34495e;">graph continues indefinitely in that direction</td>
      <td style="padding: 12px 15px; color: #34495e;">extend to −∞ or +∞ with a parenthesis</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — summary capstone: domain restriction rule by function type
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Function type</th>
      <th style="${tableHeaders.summary}">Restriction rule</th>
      <th style="${tableHeaders.summary}">Example</th>
      <th style="${tableHeaders.summary}">Resulting domain</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = 2x + 5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">denominator ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = 1 ⁄ (x − 2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, 2) ∪ (2, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Even radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">radicand ≥ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = √(x − 5)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[5, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Odd radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = ∛(x − 5)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithmic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">argument &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = ln(x − 4)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(4, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric (tan, cot, sec, csc)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">underlying sin or cos ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">tan(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ π⁄2 + nπ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Combined</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">intersect every individual restriction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = √x ⁄ (x − 3)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, 3) ∪ (3, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Contextual / modeled</td>
      <td style="padding: 12px 15px; color: #34495e;">constrained by physical meaning of the variable</td>
      <td style="padding: 12px 15px; color: #34495e;">h(t) = −16t² + 64t (projectile)</td>
      <td style="padding: 12px 15px; color: #34495e;">[0, 4]</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS ----------

  const sectionsContent = {

    obj0 :{
  title: `Key Terms`,
  content: `
• [Domain](!/functions/definitions#domain) — the set of all valid inputs for a function
• [Range](!/functions/definitions#range) — the set of all outputs; domain and range together frame the complete picture
• [Function](!/functions/definitions#function) — a rule together with a domain; the function is incomplete without it
• [Inverse Function](!/functions/definitions#inverse_function) — restricting the domain can create an inverse where none existed
`,
  before: ``,
  after: `
 
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
  link: '',
},

  obj1: {
    title: `What is Domain`,
    content: `The domain of a function is the set of all inputs for which the function produces a valid output. It includes every value that can be substituted into the function and yield a real number result.

A function is not just a rule — it is a rule together with a domain. The expression $f(x) = x^2$ describes a rule, but the function is not complete until the domain is specified. Often the domain is implicit: all real numbers for which the formula makes sense. Sometimes it is explicitly restricted to match a context or application.

The domain answers a simple question: what can go in? For $f(x) = 2x + 5$, any real number works — there are no divisions, no roots, no restrictions. The domain is all real numbers, written $(-\\infty, \\infty)$ in interval notation or $\\mathbb{R}$ in set notation.

For $f(x) = 1/x$, the input $x = 0$ fails because division by zero is undefined. Every other real number works. The domain is all real numbers except zero: $(-\\infty, 0) \\cup (0, \\infty)$.

The domain is distinct from the [range](!/functions/range), which describes outputs rather than inputs. Together they frame the complete input-output picture of a function.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Expressing Domain`,
    content: `Domain can be expressed in several equivalent notations, each suited to different contexts.

Interval notation uses parentheses and brackets to describe continuous sets. A parenthesis excludes the endpoint; a bracket includes it. The interval $[2, 5)$ contains all numbers from $2$ to $5$, including $2$ but excluding $5$. The interval $(-\\infty, 3]$ contains all numbers up to and including $3$. Infinity always takes a parenthesis because infinity is not a number that can be reached.

Set-builder notation describes the domain by a defining property. The set $\\{x \\mid x \\geq 0\\}$ reads "the set of all $x$ such that $x$ is greater than or equal to zero." This notation handles complex conditions that intervals cannot easily express.

Inequality notation states the condition directly: $x \\geq 0$ or $-3 < x \\leq 7$. This form appears often in contexts where the domain restriction is being derived or explained.

Graphical representation shows the domain on a number line. A solid dot marks an included endpoint; an open dot marks an excluded one. Shading indicates the included values.

Disconnected domains use union notation. The domain $(-\\infty, -1) \\cup (1, \\infty)$ consists of all numbers less than $-1$ together with all numbers greater than $1$, excluding everything in between.

The table below collects these notations side by side with their forms and representative examples.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Natural Domain vs Restricted Domain`,
    content: `The natural domain of a function is the largest set of real numbers for which the formula produces real output. It is determined entirely by the algebraic expression — no external constraints, no contextual limitations.

For $f(x) = \\sqrt{x - 3}$, the natural domain is $[3, \\infty)$ because the radicand $x - 3$ must be non-negative. For $g(x) = \\ln(x)$, the natural domain is $(0, \\infty)$ because logarithms require positive arguments. The natural domain follows from the mathematics alone.

A restricted domain is a deliberate limitation imposed beyond what the formula requires. The function $f(x) = x^2$ has natural domain $(-\\infty, \\infty)$, but restricting to $[0, \\infty)$ makes the function one-to-one, which is necessary for constructing an [inverse](!/functions/inverse).

Context often restricts domain. A function modeling the height of a projectile might be $h(t) = -16t^2 + 64t$, which algebraically accepts any real $t$. But if the projectile launches at $t = 0$ and lands at $t = 4$, the meaningful domain is $[0, 4]$. Negative time and post-landing time carry no physical significance.

The implied domain is the natural domain assumed when no domain is explicitly stated. Unless context or instruction specifies otherwise, assume the domain is as large as the formula allows.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Finding Domain: Rational Functions`,
    content: `A rational function is a ratio of two polynomials. The fundamental restriction is that the denominator cannot equal zero — division by zero is undefined.

To find the domain of a rational function, set the denominator equal to zero and solve. The solutions are the excluded values; everything else is in the domain.

For $f(x) = \\dfrac{x + 3}{x - 2}$, set $x - 2 = 0$ to find $x = 2$. The domain is all real numbers except $2$:

$$(-\\infty, 2) \\cup (2, \\infty)$$

For $g(x) = \\dfrac{5}{x^2 - 9}$, factor the denominator: $x^2 - 9 = (x-3)(x+3)$. Setting each factor to zero gives $x = 3$ and $x = -3$. The domain is:

$$(-\\infty, -3) \\cup (-3, 3) \\cup (3, \\infty)$$

For $h(x) = \\dfrac{x}{x^2 + 1}$, the denominator $x^2 + 1$ is always positive — it has no real roots. No value of $x$ makes it zero. The domain is all real numbers: $(-\\infty, \\infty)$.

The numerator does not affect domain. A zero in the numerator makes the function equal zero, which is a valid output. Only zeros in the denominator create exclusions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Finding Domain: Radical Functions`,
    content: `Radical functions involve roots — square roots, cube roots, fourth roots, and so on. The domain restrictions depend on whether the root index is even or odd.

Even roots (square root, fourth root, sixth root) require the radicand to be non-negative. Negative numbers have no real even roots. For $f(x) = \\sqrt{x - 5}$, the radicand $x - 5$ must satisfy $x - 5 \\geq 0$, giving $x \\geq 5$. The domain is $[5, \\infty)$.

Odd roots (cube root, fifth root) accept any real number. The cube root of $-8$ is $-2$, a perfectly valid real number. For $g(x) = \\sqrt[3]{x - 5}$, no restriction applies. The domain is $(-\\infty, \\infty)$.

More complex radicands require solving inequalities. For $f(x) = \\sqrt{6 - 2x}$, set $6 - 2x \\geq 0$:

$$6 \\geq 2x$$
$$3 \\geq x$$

The domain is $(-\\infty, 3]$.

Nested radicals compound the restrictions. For $f(x) = \\sqrt{\\sqrt{x} - 1}$, both layers impose conditions. The inner radical requires $x \\geq 0$. The outer radical requires $\\sqrt{x} - 1 \\geq 0$, which means $\\sqrt{x} \\geq 1$, so $x \\geq 1$. The domain is $[1, \\infty)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Finding Domain: Logarithmic Functions`,
    content: `Logarithmic functions require their argument to be strictly positive. The logarithm of zero is undefined, and the logarithm of a negative number has no real value.

For $f(x) = \\log(x)$ or $f(x) = \\ln(x)$, the domain is $(0, \\infty)$ — all positive real numbers.

When the argument is an expression, set that expression greater than zero and solve. For $f(x) = \\ln(x - 4)$, require $x - 4 > 0$:

$$x > 4$$

The domain is $(4, \\infty)$.

For $g(x) = \\log(3 - x)$, require $3 - x > 0$:

$$3 > x$$

The domain is $(-\\infty, 3)$.

Quadratic or factorable arguments require careful sign analysis. For $h(x) = \\ln(x^2 - 4)$, factor: $x^2 - 4 = (x-2)(x+2)$. This expression is positive when $x < -2$ or $x > 2$. The domain is:

$$(-\\infty, -2) \\cup (2, \\infty)$$

Note the strict inequality: unlike square roots, logarithms exclude the boundary where the argument equals zero.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Finding Domain: Trigonometric Functions`,
    content: `The basic trigonometric functions sine and cosine accept all real numbers — they have no domain restrictions. But tangent, cotangent, secant, and cosecant are defined as ratios, and ratios fail when the denominator is zero.

Tangent is defined as $\\tan(x) = \\sin(x)/\\cos(x)$. It is undefined where $\\cos(x) = 0$, which occurs at $x = \\dfrac{\\pi}{2} + n\\pi$ for any integer $n$. The domain excludes these points.

Secant is $\\sec(x) = 1/\\cos(x)$, undefined at the same points as tangent.

Cotangent is $\\cot(x) = \\cos(x)/\\sin(x)$, undefined where $\\sin(x) = 0$: at $x = n\\pi$ for any integer $n$.

Cosecant is $\\csc(x) = 1/\\sin(x)$, undefined at the same points as cotangent.

Inverse trigonometric functions have restricted domains matching the ranges of the original functions. The function $\\arcsin(x)$ requires $-1 \\leq x \\leq 1$. The function $\\arccos(x)$ has the same restriction. The function $\\arctan(x)$ accepts all real numbers.

When trigonometric functions appear inside other operations, combine the restrictions. For $f(x) = \\sqrt{\\sin(x)}$, the domain consists of all $x$ where $\\sin(x) \\geq 0$ — the intervals where the sine function is non-negative.

The table below collects the six basic trigonometric functions with where each becomes undefined and the resulting domain exclusion.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Finding Domain: Combined Functions`,
    content: `When multiple operations appear in a single function, every restriction applies simultaneously. The domain is the intersection of all individual requirements.

For $f(x) = \\dfrac{\\sqrt{x}}{x - 3}$, two restrictions arise. The square root requires $x \\geq 0$. The denominator requires $x \\neq 3$. Both must hold, so the domain is $[0, 3) \\cup (3, \\infty)$.

For $g(x) = \\ln(x - 1) + \\sqrt{5 - x}$, the logarithm requires $x - 1 > 0$, giving $x > 1$. The square root requires $5 - x \\geq 0$, giving $x \\leq 5$. The intersection is $(1, 5]$.

For $h(x) = \\dfrac{1}{\\sqrt{x - 2}}$, the square root requires $x - 2 \\geq 0$, and the denominator requires $\\sqrt{x-2} \\neq 0$. Together these demand $x - 2 > 0$, so $x > 2$. The domain is $(2, \\infty)$.

A systematic approach prevents errors: list each operation that imposes a restriction, solve each restriction separately, then intersect all the resulting conditions. Overlapping constraints narrow the domain; contradictory constraints can eliminate it entirely.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Domain from Graph`,
    content: `When a function is given as a graph rather than a formula, the domain is read as the horizontal extent — the set of $x$-values for which the graph exists.

Trace the graph from left to right. Where does it start? Where does it end? Does it continue indefinitely in either direction? The answers define the domain.

Solid dots indicate included endpoints. If the graph ends at a solid dot at $x = 3$, then $3$ is in the domain, and the interval is closed at that end: use a bracket.

Open dots indicate excluded endpoints. If the graph ends at an open dot at $x = 3$, then $3$ is not in the domain, and the interval is open at that end: use a parenthesis.

Vertical asymptotes signal domain exclusions. If the graph approaches but never touches a vertical line at $x = 2$, then $2$ is not in the domain. The domain splits into separate intervals on either side of the asymptote.

Gaps in the graph appear as breaks — intervals where no curve exists. A graph defined for $x < -1$ and $x > 1$ but missing in between has domain $(-\\infty, -1) \\cup (1, \\infty)$.

Arrows at the ends of a graph indicate indefinite continuation. An arrow pointing right means the graph extends toward $+\\infty$; an arrow pointing left means it extends toward $-\\infty$.

The table below collects the visual cues that signal domain features on a graph and the notation each implies.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Domain from Context`,
    content: `When a function models a real-world situation, the context imposes restrictions that pure algebra does not.

Time is typically non-negative. A function $h(t)$ giving the height of a ball after $t$ seconds has no meaning for $t < 0$. The domain starts at $t = 0$, regardless of whether the formula accepts negative values.

Quantities like length, area, population, and count must be non-negative. A function $A(r) = \\pi r^2$ giving the area of a circle requires $r \\geq 0$, even though the formula works for negative $r$.

Physical upper bounds also restrict domain. A function modeling the number of items produced in a day has a maximum determined by capacity. A function for temperature in a specific experiment operates within measured bounds.

Discrete quantities may restrict the domain to integers. A function $P(n)$ giving profit based on $n$ units sold makes sense only for whole numbers $n = 0, 1, 2, 3, \\ldots$

Contextual domain is a modeling decision, not a calculation. It requires understanding what the variables represent and what values are meaningful in the situation. A formula may allow $x = -5$, but if $x$ represents the number of employees, that value is nonsense.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Domain Rules at a Glance`,
    content: `Finding the domain reduces to a small set of restriction rules — one or two per function type. The table below collects the rule for each function type covered above with a representative example and the resulting domain. It works as a study card and as a checklist when analyzing an unfamiliar expression: identify the operations involved, look up each restriction, then intersect the results.`,
    before: ``,
    after: ``,
    link: '',
  },

}


 const introContent = {
  id: "intro",
  title: "Where Functions Live",
  content: `Every function has boundaries. Some inputs work, others do not. The square root function refuses negative numbers. The reciprocal function cannot accept zero. A function modeling time accepts no moments before the clock starts.

The domain is the complete set of inputs for which the function produces valid output. It answers the question: what values can this function actually process? Finding the domain means identifying every restriction — every value that causes division by zero, every radicand that turns negative, every argument that falls outside the reach of the rule.`
}



  const faqQuestions = {
    q1: {
      question: "What is the domain of a function?",
      answer: "The domain of a function is the set of all inputs for which the function produces a valid output. It includes every value that can be substituted into the function and yield a real number result. Together with the range, it frames the complete input-output picture of a function.",
    },
    q2: {
      question: "How do you find the domain of a rational function?",
      answer: "To find the domain of a rational function, set the denominator equal to zero and solve for the excluded values. Every real number except those solutions is in the domain. The numerator does not affect the domain — only zeros in the denominator create exclusions.",
    },
    q3: {
      question: "What is the domain of a radical function with an even root?",
      answer: "Even roots such as square roots require the radicand to be non-negative, since negative numbers have no real even roots. Set the radicand greater than or equal to zero and solve the resulting inequality to find the domain. For example, for f(x) = sqrt(x - 5), the domain is [5, infinity).",
    },
    q4: {
      question: "How do you read the domain from a graph?",
      answer: "When reading domain from a graph, trace the horizontal extent — the set of x-values for which the graph exists. Solid dots mark included endpoints (use brackets) and open dots mark excluded endpoints (use parentheses). Vertical asymptotes and gaps in the graph also indicate values excluded from the domain.",
    },
    q5: {
      question: "What is the difference between natural domain and restricted domain?",
      answer: "The natural domain is the largest set of real numbers for which the formula produces real output, determined entirely by the algebraic expression. A restricted domain is a deliberate limitation imposed beyond what the formula requires, often to match a real-world context or to make a function one-to-one for finding its inverse.",
    },
  }

  const seoData = {
    title: "Domain of a Function - How to Find It | Learn Math Class",
    description: "Learn how to find the domain of any function including rational, radical, logarithmic, and composite functions. Step-by-step methods with interval notation examples.",
    keywords: keyWords.join(", "),
    url: "/functions/domain",
    name: "Domain of a Function",
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
        "url": "https://www.learnmathclass.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com",
      },
      "teaches": [
        "What is the domain of a function",
        "How to express domain using interval and set-builder notation",
        "Natural domain versus restricted domain",
        "Finding domain of rational and radical functions",
        "Finding domain of logarithmic and trigonometric functions",
        "How to determine domain from a graph or real-world context",
      ],
      "educationalLevel": "High School",
      "learningResourceType": "Article",
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seoData.name,
          "item": `https://www.learnmathclass.com${seoData.url}`,
        },
      ],
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.values(faqQuestions).map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  }

   return {
      props:{
         sectionsContent,
         introContent,
         obj2Table,
         obj7Table,
         obj9Table,
         summaryTable,
         faqQuestions,
         schemas,
          seoData: {
        title: "Domain of a Function - How to Find It | Learn Math Class",
        description: "Learn how to find the domain of any function including rational, radical, logarithmic, and composite functions. Step-by-step methods with interval notation examples.",
        keywords: keyWords.join(", "),
        url: "/functions/domain",
         name: "Domain of a Function"
      },
       }
    }
   }

export default function DomainPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj7Table,
  obj9Table,
  summaryTable,
  faqQuestions,
  schemas,
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
          <div key={'obj7-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj7Table }} />,
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
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Domain</h1>
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