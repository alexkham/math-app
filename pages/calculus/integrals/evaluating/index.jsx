// tables-optimized: v4 | 2026-05-24 | 3 tables (obj6 aggregation, obj7 aggregation, obj9 summary capstone)
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
  "evaluating integrals",
  "how to solve integrals",
  "integral evaluation techniques",
  "direct antidifferentiation",
  "completing the square integral",
  "piecewise function integral",
  "absolute value integral",
  "symmetry in integrals",
  "even odd function integral",
  "integral common mistakes",
  "check integral answer",
  "definite integral setup",
  "integral step by step",
  "antiderivative calculus"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj6 — aggregation: special-structure shortcuts (covers obj4 + obj5 + obj6)
const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Structure in integrand</th>
      <th style="${tableHeaders.aggregation}">Recognize when…</th>
      <th style="${tableHeaders.aggregation}">Strategy</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Absolute value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|g(x)| appears in the integrand</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">split the interval where g(x) = 0; use the sign of g on each piece to drop the bars</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Piecewise function</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">different formulas govern different subintervals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">split at the piece boundaries, integrate each subinterval, add via <a href="/calculus/integrals/rules" style="${linkStyle}">additivity</a></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Even function on [−a, a]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(−x) = f(x), symmetric interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>−a</sub><sup>a</sup> f(x) dx = 2 ∫<sub>0</sub><sup>a</sup> f(x) dx — half the work</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Odd function on [−a, a]</td>
      <td style="padding: 12px 15px; color: #34495e;">f(−x) = −f(x), symmetric interval</td>
      <td style="padding: 12px 15px; color: #34495e;">∫<sub>−a</sub><sup>a</sup> f(x) dx = 0 — answer is immediate</td>
    </tr>
  </tbody>
</table>
`

// obj7 — aggregation: common pitfalls and their fixes
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Pitfall</th>
      <th style="${tableHeaders.aggregation}">Why it&apos;s wrong</th>
      <th style="${tableHeaders.aggregation}">Correct form</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Forgetting + C</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an indefinite integral represents a family of antiderivatives, not just one</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always finish indefinite results with + C</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Dropping the absolute value in ln</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ 1/x dx = ln x is invalid for x &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ 1/x dx = ln|x| + C</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sign error in u-substitution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">if u = −x then du has its own sign</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">du = −dx, not dx</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Forgetting to convert limits</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x-limits are wrong once the integrand is in u</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">convert the limits to u-values, or substitute back to x before evaluating</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Missing a discontinuity</td>
      <td style="padding: 12px 15px; color: #34495e;">integral looks proper but the integrand blows up on the interval</td>
      <td style="padding: 12px 15px; color: #34495e;">recognize as <a href="/calculus/integrals/improper" style="${linkStyle}">improper</a> and split at the singularity (e.g. ∫<sub>−1</sub><sup>1</sup> 1/x² dx at x = 0)</td>
    </tr>
  </tbody>
</table>
`

// obj9 — summary capstone: evaluation strategy ladder
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary} text-align: center;">Step</th>
      <th style="${tableHeaders.summary}">What to do</th>
      <th style="${tableHeaders.summary}">Why this step</th>
      <th style="${tableHeaders.summary}">Where to look</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Simplify the integrand — expand, split fractions, separate terms</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">algebraic cleanup often reveals matches to known formulas</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">obj1 above</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Apply direct antidifferentiation — match the integrand to a standard form</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">fastest path when it works</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/special" style="${linkStyle}">special integrals</a></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Look for disguised standard forms — complete the square, rewrite constants</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">catches near-misses before reaching for heavier tools</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">obj2 above</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Check for special structure — absolute value, piecewise, symmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dedicated shortcuts avoid heavy machinery (and the odd-function rule answers in one step)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">obj4 – obj6 above</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Reach for a technique — substitution, parts, partial fractions, trig sub</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when none of the above moves close the gap</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/techniques" style="${linkStyle}">techniques</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">6</td>
      <td style="padding: 12px 15px; color: #34495e;">Verify — differentiate the antiderivative; check sign and reasonableness for definite results</td>
      <td style="padding: 12px 15px; color: #34495e;">catches algebra and sign errors before they propagate</td>
      <td style="padding: 12px 15px; color: #34495e;">obj7 &amp; obj8 above</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/integrals/evaluating ───────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Definite Integral](!/calculus/definitions#definite_integral) — correct setup: bounds, integrand, variable
// - [Indefinite Integral](!/calculus/definitions#indefinite_integral) — always includes $+ C$
// - [Antiderivative](!/calculus/definitions#antiderivative) — differentiate to verify: $F'(x)$ should return $f(x)$
// - [Integrand](!/calculus/definitions#integrand) — simplify before reaching for techniques
// - [Bounds of Integration](!/calculus/definitions#bounds_of_integration) — convert when substituting in definite integrals`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Direct Antidifferentiation`,
//     content: `
// Try the straightforward approach first. Does the integrand match a standard form?

// $$\\int (3x^2 + 5e^x - \\sec^2 x)\\, dx$$

// Apply linearity and known formulas:

// $$= 3 \\cdot \\frac{x^3}{3} + 5e^x - \\tan x + C = x^3 + 5e^x - \\tan x + C$$

// Algebraic simplification often reveals standard forms:

// $$\\int \\frac{x^3 + 1}{x}\\, dx = \\int \\left(x^2 + \\frac{1}{x}\\right)\\, dx = \\frac{x^3}{3} + \\ln|x| + C$$

// Expand, simplify, and separate before reaching for techniques.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj2: {
//     title: `Recognizing Standard Forms`,
//     content: `
// Many integrals are disguised versions of basic formulas.

// **Completing the square** transforms quadratics:

// $$\\int \\frac{1}{x^2 + 4x + 8}\\, dx = \\int \\frac{1}{(x+2)^2 + 4}\\, dx$$

// This matches $\\int \\dfrac{1}{u^2 + a^2}\\, du = \\dfrac{1}{a}\\arctan\\dfrac{u}{a} + C$ with $u = x + 2$ and $a = 2$.

// **Rewriting constants** exposes patterns:

// $$\\int \\frac{1}{\\sqrt{9 - x^2}}\\, dx = \\int \\frac{1}{\\sqrt{3^2 - x^2}}\\, dx = \\arcsin\\frac{x}{3} + C$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj3: {
//     title: `Setting Up Definite Integrals`,
//     content: `
// For [definite integrals](!/calculus/integrals/definite), correct setup is essential.

// **Identify the variable:** What quantity varies, and over what range?

// **Express the integrand:** Write the quantity being accumulated in terms of the integration variable.

// **Determine bounds:** Where does accumulation begin and end?

// **Example:** Find the area under $y = x^2$ from $x = 0$ to $x = 3$.

// $$\\text{Area} = \\int_0^3 x^2\\, dx = \\frac{x^3}{3}\\Big|_0^3 = \\frac{27}{3} - 0 = 9$$

// Check reasonableness: the area should be positive and between $0 \\cdot 3 = 0$ and $9 \\cdot 3 = 27$.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj4: {
//     title: `Handling Absolute Values`,
//     content: `
// Absolute values require splitting the integral where the argument changes sign.

// $$\\int_{-2}^{3} |x|\\, dx$$

// Since $|x| = -x$ for $x < 0$ and $|x| = x$ for $x \\geq 0$:

// $$= \\int_{-2}^{0} (-x)\\, dx + \\int_0^3 x\\, dx$$

// $$= \\left[-\\frac{x^2}{2}\\right]_{-2}^{0} + \\left[\\frac{x^2}{2}\\right]_0^3 = (0 - (-2)) + \\left(\\frac{9}{2} - 0\\right) = 2 + \\frac{9}{2} = \\frac{13}{2}$$

// Note: $\\left|\\int f\\right| \\neq \\int |f|$ in general.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj5: {
//     title: `Piecewise Functions`,
//     content: `
// Split the integral at boundaries between pieces and apply [additivity](!/calculus/integrals/rules):

// $$\\int_a^c f(x)\\, dx = \\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx$$

// **Example:** For $f(x) = \\begin{cases} x^2 & x < 1 \\\\ 2x & x \\geq 1 \\end{cases}$, evaluate $\\int_0^2 f(x)\\, dx$.

// $$= \\int_0^1 x^2\\, dx + \\int_1^2 2x\\, dx = \\frac{x^3}{3}\\Big|_0^1 + x^2\\Big|_1^2$$

// $$= \\frac{1}{3} + (4 - 1) = \\frac{1}{3} + 3 = \\frac{10}{3}$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj6: {
//     title: `Symmetry Shortcuts`,
//     content: `
// Symmetric integrands over symmetric intervals simplify dramatically.

// **Even functions** satisfy $f(-x) = f(x)$:

// $$\\int_{-a}^{a} f(x)\\, dx = 2\\int_0^a f(x)\\, dx$$

// **Odd functions** satisfy $f(-x) = -f(x)$:

// $$\\int_{-a}^{a} f(x)\\, dx = 0$$

// **Example:**

// $$\\int_{-3}^{3} x^3\\, dx = 0 \\quad \\text{(odd function)}$$

// $$\\int_{-2}^{2} x^4\\, dx = 2\\int_0^2 x^4\\, dx = 2 \\cdot \\frac{32}{5} = \\frac{64}{5} \\quad \\text{(even function)}$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj7: {
//     title: `Common Pitfalls`,
//     content: `
// **Forgetting $+C$:** Indefinite integrals always include the constant of integration.

// **Dropping absolute values:** The antiderivative of $1/x$ is $\\ln|x| + C$, not $\\ln x + C$.

// **Sign errors in substitution:** When $u = -x$, then $du = -dx$, not $dx$.

// **Forgetting to convert limits:** In definite integrals with substitution, either convert the limits to $u$-values or substitute back to $x$ before evaluating.

// **Missing discontinuities:** An integral like $\\int_{-1}^{1} \\dfrac{1}{x^2}\\, dx$ is improper—the integrand is unbounded at $x = 0$.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj8: {
//     title: `Checking Your Answer`,
//     content: `
// **Differentiate:** The derivative of your antiderivative should return the integrand. This catches algebraic and sign errors.

// **Verify:** For $\\int \\sec^2 x\\, dx = \\tan x + C$, check: $(\\tan x)' = \\sec^2 x$. Correct.

// **Estimate:** For definite integrals, check that the answer is reasonable. A positive integrand on $[a,b]$ with $a < b$ should yield a positive result. The value should lie between $m(b-a)$ and $M(b-a)$ where $m$ and $M$ bound the integrand.

// **Numerical check:** When possible, compare to a calculator or numerical approximation.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj9: {
//     title: `Summary: The Evaluation Strategy Ladder`,
//     content: `
// The sections above lay out a natural order of attack for any integral: start simple, escalate only as needed, and verify at the end. The table below collects this six-step ladder with a pointer to the right section or sibling page for each step. Used as a checklist, it prevents the most common failure mode of integration — reaching for heavy techniques before trying the lighter moves that would have worked.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   }
// };





// formulas-optimized: v1 | 2026-06-09 | 2 callouts (obj6)
const sectionsContent = {
  // ─── /calculus/integrals/evaluating ───────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Definite Integral](!/calculus/definitions#definite_integral) — correct setup: bounds, integrand, variable
- [Indefinite Integral](!/calculus/definitions#indefinite_integral) — always includes $+ C$
- [Antiderivative](!/calculus/definitions#antiderivative) — differentiate to verify: $F'(x)$ should return $f(x)$
- [Integrand](!/calculus/definitions#integrand) — simplify before reaching for techniques
- [Bounds of Integration](!/calculus/definitions#bounds_of_integration) — convert when substituting in definite integrals`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Direct Antidifferentiation`,
    content: `
Try the straightforward approach first. Does the integrand match a standard form?

$$\\int (3x^2 + 5e^x - \\sec^2 x)\\, dx$$

Apply linearity and known formulas:

$$= 3 \\cdot \\frac{x^3}{3} + 5e^x - \\tan x + C = x^3 + 5e^x - \\tan x + C$$

Algebraic simplification often reveals standard forms:

$$\\int \\frac{x^3 + 1}{x}\\, dx = \\int \\left(x^2 + \\frac{1}{x}\\right)\\, dx = \\frac{x^3}{3} + \\ln|x| + C$$

Expand, simplify, and separate before reaching for techniques.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Recognizing Standard Forms`,
    content: `
Many integrals are disguised versions of basic formulas.

**Completing the square** transforms quadratics:

$$\\int \\frac{1}{x^2 + 4x + 8}\\, dx = \\int \\frac{1}{(x+2)^2 + 4}\\, dx$$

This matches $\\int \\dfrac{1}{u^2 + a^2}\\, du = \\dfrac{1}{a}\\arctan\\dfrac{u}{a} + C$ with $u = x + 2$ and $a = 2$.

**Rewriting constants** exposes patterns:

$$\\int \\frac{1}{\\sqrt{9 - x^2}}\\, dx = \\int \\frac{1}{\\sqrt{3^2 - x^2}}\\, dx = \\arcsin\\frac{x}{3} + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Setting Up Definite Integrals`,
    content: `
For [definite integrals](!/calculus/integrals/definite), correct setup is essential.

**Identify the variable:** What quantity varies, and over what range?

**Express the integrand:** Write the quantity being accumulated in terms of the integration variable.

**Determine bounds:** Where does accumulation begin and end?

**Example:** Find the area under $y = x^2$ from $x = 0$ to $x = 3$.

$$\\text{Area} = \\int_0^3 x^2\\, dx = \\frac{x^3}{3}\\Big|_0^3 = \\frac{27}{3} - 0 = 9$$

Check reasonableness: the area should be positive and between $0 \\cdot 3 = 0$ and $9 \\cdot 3 = 27$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Handling Absolute Values`,
    content: `
Absolute values require splitting the integral where the argument changes sign.

$$\\int_{-2}^{3} |x|\\, dx$$

Since $|x| = -x$ for $x < 0$ and $|x| = x$ for $x \\geq 0$:

$$= \\int_{-2}^{0} (-x)\\, dx + \\int_0^3 x\\, dx$$

$$= \\left[-\\frac{x^2}{2}\\right]_{-2}^{0} + \\left[\\frac{x^2}{2}\\right]_0^3 = (0 - (-2)) + \\left(\\frac{9}{2} - 0\\right) = 2 + \\frac{9}{2} = \\frac{13}{2}$$

Note: $\\left|\\int f\\right| \\neq \\int |f|$ in general.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Piecewise Functions`,
    content: `
Split the integral at boundaries between pieces and apply [additivity](!/calculus/integrals/rules):

$$\\int_a^c f(x)\\, dx = \\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx$$

**Example:** For $f(x) = \\begin{cases} x^2 & x < 1 \\\\ 2x & x \\geq 1 \\end{cases}$, evaluate $\\int_0^2 f(x)\\, dx$.

$$= \\int_0^1 x^2\\, dx + \\int_1^2 2x\\, dx = \\frac{x^3}{3}\\Big|_0^1 + x^2\\Big|_1^2$$

$$= \\frac{1}{3} + (4 - 1) = \\frac{1}{3} + 3 = \\frac{10}{3}$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Symmetry Shortcuts`,
    content: `
Symmetric integrands over symmetric intervals simplify dramatically.

**Even functions** satisfy $f(-x) = f(x)$:

@academic[formula_callout:Even Function Symmetry
$$\\int_{-a}^{a} f(x)\\, dx = 2 \\int_0^a f(x)\\, dx \\quad \\text{when } f(-x) = f(x)$$
/calculus/integrals/formulas#even_function_symmetry]@

**Odd functions** satisfy $f(-x) = -f(x)$:

@academic[formula_callout:Odd Function Symmetry
$$\\int_{-a}^{a} f(x)\\, dx = 0 \\quad \\text{when } f(-x) = -f(x)$$
/calculus/integrals/formulas#odd_function_symmetry]@

@academic[formulas_link:Browse all integral formulas
/calculus/integrals/formulas]@

**Example:**

$$\\int_{-3}^{3} x^3\\, dx = 0 \\quad \\text{(odd function)}$$

$$\\int_{-2}^{2} x^4\\, dx = 2\\int_0^2 x^4\\, dx = 2 \\cdot \\frac{32}{5} = \\frac{64}{5} \\quad \\text{(even function)}$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Common Pitfalls`,
    content: `
**Forgetting $+C$:** Indefinite integrals always include the constant of integration.

**Dropping absolute values:** The antiderivative of $1/x$ is $\\ln|x| + C$, not $\\ln x + C$.

**Sign errors in substitution:** When $u = -x$, then $du = -dx$, not $dx$.

**Forgetting to convert limits:** In definite integrals with substitution, either convert the limits to $u$-values or substitute back to $x$ before evaluating.

**Missing discontinuities:** An integral like $\\int_{-1}^{1} \\dfrac{1}{x^2}\\, dx$ is improper—the integrand is unbounded at $x = 0$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Checking Your Answer`,
    content: `
**Differentiate:** The derivative of your antiderivative should return the integrand. This catches algebraic and sign errors.

**Verify:** For $\\int \\sec^2 x\\, dx = \\tan x + C$, check: $(\\tan x)' = \\sec^2 x$. Correct.

**Estimate:** For definite integrals, check that the answer is reasonable. A positive integrand on $[a,b]$ with $a < b$ should yield a positive result. The value should lie between $m(b-a)$ and $M(b-a)$ where $m$ and $M$ bound the integrand.

**Numerical check:** When possible, compare to a calculator or numerical approximation.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Summary: The Evaluation Strategy Ladder`,
    content: `
The sections above lay out a natural order of attack for any integral: start simple, escalate only as needed, and verify at the end. The table below collects this six-step ladder with a pointer to the right section or sibling page for each step. Used as a checklist, it prevents the most common failure mode of integration — reaching for heavy techniques before trying the lighter moves that would have worked.
`,
    before: ``,
    after: ``,
    link: ``
  }
};


const introContent = {
  id: `intro`,
  title: `Putting It All Together`,
  content: `
Evaluating integrals draws on everything: recognizing standard forms, selecting appropriate techniques, handling special cases, and verifying results. The process is part pattern recognition, part strategic choice, part careful execution.

Start simple. Direct antidifferentiation works more often than expected—many integrals match [known formulas](!/calculus/integrals/special) or yield to basic algebra. When direct methods fail, systematically consider substitution, parts, and other [techniques](!/calculus/integrals/techniques).

For definite integrals, setup matters as much as computation. Identify the correct bounds, express the integrand properly, and watch for discontinuities that signal [improper integrals](!/calculus/integrals/improper). A well-posed integral is half solved.
`
};



const faqQuestions = {
  obj1: {
    question: "What is direct antidifferentiation?",
    answer: "Direct antidifferentiation means applying known formulas and linearity directly to find the integral. Simplify the integrand first—expand, separate terms, rewrite fractions—then match each piece to a standard antiderivative formula.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you recognize standard integral forms?",
    answer: "Many integrals are disguised versions of basic formulas. Completing the square transforms quadratics into arctan or arcsin forms. Rewriting constants like √(9−x²) as √(3²−x²) reveals the arcsin pattern. Look for these hidden structures before using advanced techniques.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you set up a definite integral?",
    answer: "Identify the variable and its range, express the integrand in terms of that variable, and determine the bounds where accumulation begins and ends. Check that the answer is reasonable—positive integrand with a < b should give positive result.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you integrate absolute value functions?",
    answer: "Split the integral at points where the argument changes sign. For ∫|x| dx from -2 to 3, split at x = 0: integrate -x from -2 to 0, then x from 0 to 3. The absolute value of an integral does not equal the integral of the absolute value.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you integrate piecewise functions?",
    answer: "Split the integral at the boundaries between pieces using additivity: ∫ₐᶜ f = ∫ₐᵇ f + ∫ᵇᶜ f. Integrate each piece using its formula over its subinterval, then add the results.",
    sectionId: "5"
  },
  obj6: {
    question: "How does symmetry simplify integrals?",
    answer: "For integrals over symmetric intervals [-a, a]: even functions (f(-x) = f(x)) give ∫₋ₐᵃ f = 2∫₀ᵃ f; odd functions (f(-x) = -f(x)) give ∫₋ₐᵃ f = 0. This can eliminate half the work or give the answer immediately.",
    sectionId: "6"
  },
  obj7: {
    question: "What are common integration mistakes?",
    answer: "Common errors include: forgetting +C in indefinite integrals, dropping absolute values in ln|x|, sign errors in substitution (if u = -x then du = -dx), forgetting to convert limits in substitution, and missing discontinuities that make integrals improper.",
    sectionId: "7"
  },
  obj8: {
    question: "How do you check an integral answer?",
    answer: "Differentiate your antiderivative—it should return the integrand. For definite integrals, verify the answer is reasonable: correct sign, value between m(b−a) and M(b−a) where m and M bound the integrand. Compare to numerical approximation when possible.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Evaluating Integrals",
    "description": "Master integral evaluation: direct antidifferentiation, recognizing standard forms, definite integral setup, absolute values, piecewise functions, symmetry shortcuts, and avoiding common mistakes.",
    "url": "https://www.learnmathclass.com/calculus/integrals/evaluating",
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
      "name": "Evaluating Integrals"
    },
    "teaches": [
      "Direct antidifferentiation and simplification",
      "Recognizing standard forms through algebraic manipulation",
      "Setting up definite integrals correctly",
      "Handling absolute values and piecewise functions",
      "Using symmetry to simplify integrals",
      "Avoiding common integration mistakes",
      "The evaluation strategy ladder"
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
        "name": "Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Evaluating Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals/evaluating"
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
    obj6Table,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Evaluating Integrals: Strategy & Examples | Learn Math Class",
      description: "Master integral evaluation: direct antidifferentiation, recognizing standard forms, definite integral setup, absolute values, piecewise functions, symmetry shortcuts, and avoiding common mistakes.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/evaluating",
      name: "Evaluating Integrals"
    },
  }
}
   }

export default function PageTemplate({seoData, sectionsContent, introContent, obj6Table, obj7Table, summaryTable, faqQuestions, schemas}) {

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
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'obj6-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj6Table }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Evaluating Integrals</h1>
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