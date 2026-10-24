// tables-optimized: v4 | 2026-05-24 | 3 tables (obj6 aggregation, obj7 aggregation, obj9 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
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
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">section 1 above</td>
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
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">section 2 above</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Check for special structure — absolute value, piecewise, symmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dedicated shortcuts avoid heavy machinery (and the odd-function rule answers in one step)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sections 4–6 above</td>
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
      <td style="padding: 12px 15px; color: #34495e;">sections 7 &amp; 8 above</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/integrals/evaluating ───────────────────────────────────────


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

@academic[formula_callout:Direct Antidifferentiation
$$\\int (3x^2 + 5e^x - \\sec^2 x)\\, dx$$]@

Apply linearity and known formulas:

@academic[formula_callout:Direct Antidifferentiation
$$= 3 \\cdot \\frac{x^3}{3} + 5e^x - \\tan x + C = x^3 + 5e^x - \\tan x + C$$]@

Algebraic simplification often reveals standard forms:

@academic[formula_callout:Direct Antidifferentiation
$$\\int \\frac{x^3 + 1}{x}\\, dx = \\int \\left(x^2 + \\frac{1}{x}\\right)\\, dx = \\frac{x^3}{3} + \\ln|x| + C$$]@

@academic[pitfall,aside:true,width:35%:Integrating the top and bottom separately
Integrating $x^3 + 1$ and $x$ on their own gives $\\frac{x^4/4 + x}{x^2/2} = \\frac{x^2}{2} + \\frac{2}{x}$, whose derivative at $x = 1$ is $-1$, while the integrand there is $2$. Splitting the fraction first gives $\\frac{x^3}{3} + \\ln|x| + C$.
[Read more](!#7)]@

Expand, simplify, and separate before reaching for techniques.

Here the denominator is a single term, so the fraction breaks into one fraction per term of the numerator: $\\frac{x^3 + 1}{x} = \\frac{x^3}{x} + \\frac{1}{x}$. Each piece is then a power of $x$, and the two standard forms $\\int x^n\\, dx$ and $\\int \\frac{1}{x}\\, dx$ finish the job. Linearity does the rest, one term at a time.
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

@academic[formula_callout:Recognizing Standard Forms
$$\\int \\frac{1}{x^2 + 4x + 8}\\, dx = \\int \\frac{1}{(x+2)^2 + 4}\\, dx$$]@

This matches $\\int \\dfrac{1}{u^2 + a^2}\\, du = \\dfrac{1}{a}\\arctan\\dfrac{u}{a} + C$ with $u = x + 2$ and $a = 2$.

@academic[pitfall,aside:true,width:35%:Forgetting the factor in front of arctan
Finishing with $\\arctan(x + 2) + C$ uses the formula for $a = 1$: its derivative is $\\frac{1}{(x + 2)^2 + 1}$, not $\\frac{1}{(x + 2)^2 + 4}$. With $a = 2$ the answer is $\\frac{1}{2}\\arctan\\frac{x + 2}{2} + C$.
[Read more](!#7)]@

Completing the square is the move for a quadratic that does not factor. The discriminant of $x^2 + 4x + 8$ is $16 - 32 = -16 < 0$, so there are no real roots to split the fraction with. Writing $x^2 + 4x + 8 = (x + 2)^2 + 4$ puts the variable part into $u^2$ and leaves the constant $4 = 2^2$ as $a^2$.

**Rewriting constants** exposes patterns:

@academic[formula_callout:Recognizing Standard Forms
$$\\int \\frac{1}{\\sqrt{9 - x^2}}\\, dx = \\int \\frac{1}{\\sqrt{3^2 - x^2}}\\, dx = \\arcsin\\frac{x}{3} + C$$]@

@academic[punchline:Many integrals that look new are standard forms in disguise; completing the square or rewriting a constant reveals them.]@
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

@academic[example:Example
Find the area under $y = x^2$ from $x = 0$ to $x = 3$.

$$\\text{Area} = \\int_0^3 x^2\\, dx = \\frac{x^3}{3}\\Big|_0^3 = \\frac{27}{3} - 0 = 9$$

Check reasonableness: the area should be positive and between $0 \\cdot 3 = 0$ and $9 \\cdot 3 = 27$.]@
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Handling Absolute Values`,
    content: `
Absolute values require splitting the integral where the argument changes sign.

@academic[formula_callout:Handling Absolute Values
$$\\int_{-2}^{3} |x|\\, dx$$]@

Since $|x| = -x$ for $x < 0$ and $|x| = x$ for $x \\geq 0$:

@academic[formula_callout:Handling Absolute Values
$$= \\int_{-2}^{0} (-x)\\, dx + \\int_0^3 x\\, dx$$]@

@academic[formula_callout:Handling Absolute Values
$$= \\left[-\\frac{x^2}{2}\\right]_{-2}^{0} + \\left[\\frac{x^2}{2}\\right]_0^3 = (0 - (-2)) + \\left(\\frac{9}{2} - 0\\right) = 2 + \\frac{9}{2} = \\frac{13}{2}$$]@

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

@academic[formula_callout:Piecewise Functions
$$\\int_a^c f(x)\\, dx = \\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx$$]@

@academic[example:Example
For $f(x) = \\begin{cases} x^2 & x < 1 \\\\ 2x & x \\geq 1 \\end{cases}$, evaluate $\\int_0^2 f(x)\\, dx$.

$$= \\int_0^1 x^2\\, dx + \\int_1^2 2x\\, dx = \\frac{x^3}{3}\\Big|_0^1 + x^2\\Big|_1^2$$

$$= \\frac{1}{3} + (4 - 1) = \\frac{1}{3} + 3 = \\frac{10}{3}$$]@

@academic[pitfall,aside:true,width:35%:Using one formula on the whole interval
Integrating $x^2$ over all of $[0, 2]$ gives $\\frac{8}{3}$, and using $2x$ throughout gives $4$. Neither is the integral of $f$, which is $\\frac{1}{3} + 3 = \\frac{10}{3}$.
[Read more](!#7)]@

The boundaries between the pieces are the only places where the integral has to be cut, and the number of pieces sets the number of integrals to add. The value of $f$ at the single point $x = 1$ does not affect either integral, so it makes no difference which piece the boundary point belongs to. A function with three or more pieces is handled the same way, with one integral per piece.
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
/calculus/formulas#even_function_symmetry]@

**Odd functions** satisfy $f(-x) = -f(x)$:

@academic[formula_callout:Odd Function Symmetry
$$\\int_{-a}^{a} f(x)\\, dx = 0 \\quad \\text{when } f(-x) = -f(x)$$
/calculus/formulas#odd_function_symmetry]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

@academic[example:Example

$$\\int_{-3}^{3} x^3\\, dx = 0 \\quad \\text{(odd function)}$$

$$\\int_{-2}^{2} x^4\\, dx = 2\\int_0^2 x^4\\, dx = 2 \\cdot \\frac{32}{5} = \\frac{64}{5} \\quad \\text{(even function)}$$]@

@academic[pitfall,aside:true,width:35%:Missing the even part of the integrand
Seeing $x^3$ in $\\int_{-2}^{2} (x^3 + 1)\\, dx$ and answering $0$ ignores the even term $1$. Only the $x^3$ part cancels, so the integral is $0 + 2 \\cdot 2 = 4$.
[Read more](!#7)]@

Both shortcuts rest on comparing $f(-x)$ with $f(x)$. In the first example $(-x)^3 = -x^3$, so the region on $[-3, 0]$ is the region on $[0, 3]$ reflected below the axis. In the second $(-x)^4 = x^4$, and the two halves are equal. Replacing $x$ by $-x$ takes one line and settles which shortcut, if any, applies.

The same comparison works for any interval, with the reflection taken about its midpoint. On $[a, b]$ the substitution $x \\to a + b - x$ swaps the two endpoints and covers the same points in reverse order, so $\\int_a^b f(x)\\, dx = \\int_a^b f(a + b - x)\\, dx$. Adding the two forms gives $2\\int_a^b f(x)\\, dx = \\int_a^b \\left[f(x) + f(a + b - x)\\right] dx$.

@academic[fact,aside:true,width:35%:A Putnam integral solved by reflection
Putnam 1980 asked for $\\int_0^{\\pi/2} \\frac{dx}{1 + (\\tan x)^{\\sqrt{2}}}$. Since $\\tan\\left(\\frac{\\pi}{2} - x\\right) = \\frac{1}{\\tan x}$, the reflection turns the integrand $g$ into $1 - g$, so twice the integral is $\\frac{\\pi}{2}$ and the answer is $\\frac{\\pi}{4}$.]@

When $f(x) + f(a + b - x)$ is simpler than $f(x)$, for example a constant, the right-hand side is easy to evaluate even when $f$ alone is not. Halving it gives the integral without any antiderivative of $f$, in the same way as the odd and even shortcuts give theirs. Such pairings are rare, but checking for one costs a single substitution, and it is worth doing whenever the integrand is built from functions that trade places under the reflection, such as $\\sin x$ and $\\cos x$ on $\\left[0, \\frac{\\pi}{2}\\right]$.
`,
    before: ``,
    after: ``,
    link: ``
  },
 obj7: {
    title: `Common Pitfalls`,
    content: `
**Forgetting the constant of integration:** Indefinite integrals always include $+C$.

**Dropping absolute values:** The antiderivative of $1/x$ is $\\ln|x| + C$, not $\\ln x + C$.

**Sign errors in substitution:** When $u = -x$, then $du = -dx$, not $dx$.

**Forgetting to convert limits:** In definite integrals with substitution, either convert the limits to $u$-values or substitute back to $x$ before evaluating.

**Missing discontinuities:** An integral like $\\int_{-1}^{1} \\dfrac{1}{x^2}\\, dx$ is improper—the integrand is unbounded at $x = 0$.

**Integrating the top and bottom separately**

A fraction is integrated by finding an antiderivative of the numerator and one of the denominator and dividing the two, as if integration had a quotient rule that works that way.

Wrong working: $\\int \\dfrac{x^3 + 1}{x}\\, dx = \\dfrac{\\int (x^3 + 1)\\, dx}{\\int x\\, dx} = \\dfrac{x^4/4 + x}{x^2/2} = \\dfrac{x^2}{2} + \\dfrac{2}{x}$.

Right working: split the fraction first. $\\dfrac{x^3 + 1}{x} = x^2 + \\dfrac{1}{x}$, so $\\int \\dfrac{x^3 + 1}{x}\\, dx = \\dfrac{x^3}{3} + \\ln|x| + C$.

Why it happens: an integral does split over a sum, term by term, and the same splitting looks just as natural over a quotient. There is no such rule for quotients; even for derivatives, the quotient rule is not the quotient of the derivatives.

How to check: differentiate the answer. $\\left(\\dfrac{x^2}{2} + \\dfrac{2}{x}\\right)' = x - \\dfrac{2}{x^2}$, which is $-1$ at $x = 1$, while the integrand there is $\\dfrac{1 + 1}{1} = 2$. $\\left(\\dfrac{x^3}{3} + \\ln|x|\\right)' = x^2 + \\dfrac{1}{x}$, which is $2$ at $x = 1$.

**Forgetting the factor in front of arctan**

Completing the square brings the integral to the form $\\int \\dfrac{1}{u^2 + a^2}\\, du$, and it is finished as $\\arctan u + C$, which is the formula for $a = 1$ only.

Wrong working: $\\int \\dfrac{1}{x^2 + 4x + 8}\\, dx = \\int \\dfrac{1}{(x + 2)^2 + 4}\\, dx = \\arctan(x + 2) + C$.

Right working: with $u = x + 2$ and $a = 2$, $\\int \\dfrac{1}{(x + 2)^2 + 4}\\, dx = \\dfrac{1}{2}\\arctan\\dfrac{x + 2}{2} + C$.

Why it happens: $\\int \\dfrac{1}{1 + u^2}\\, du = \\arctan u + C$ is the version learned first, and for $a = 1$ both the factor $\\dfrac{1}{a}$ and the division inside the arctan disappear.

How to check: differentiate. $\\left(\\arctan(x + 2)\\right)' = \\dfrac{1}{(x + 2)^2 + 1} = \\dfrac{1}{x^2 + 4x + 5}$, the wrong constant. $\\left(\\dfrac{1}{2}\\arctan\\dfrac{x + 2}{2}\\right)' = \\dfrac{1}{2} \\cdot \\dfrac{1/2}{1 + \\frac{(x + 2)^2}{4}} = \\dfrac{1}{(x + 2)^2 + 4}$, the integrand.

**Using one formula on the whole interval**

A piecewise function is integrated with one of its formulas over the whole interval, usually the first one or the easier one, and the boundary between the pieces is ignored.

Wrong working: for $f(x) = x^2$ when $x < 1$ and $f(x) = 2x$ when $x \\geq 1$, $\\int_0^2 f(x)\\, dx = \\int_0^2 x^2\\, dx = \\dfrac{8}{3}$. Using the other formula throughout gives $\\int_0^2 2x\\, dx = 4$, just as wrong.

Right working: split at $x = 1$. $\\int_0^1 x^2\\, dx + \\int_1^2 2x\\, dx = \\dfrac{1}{3} + 3 = \\dfrac{10}{3}$.

Why it happens: the integral is written with a single symbol $f$, so $\\int_0^2 f(x)\\, dx$ looks like one integral. The cases are read once at the start and then forgotten.

How to check: list the subintervals used and match each one to the case of $f$ that holds there. Integrating $x^2$ on $[1, 2]$ uses the wrong formula: at $x = 1.5$, for instance, $f(1.5) = 3$, not $1.5^2 = 2.25$.

**Missing the even part of the integrand**

An integrand on a symmetric interval contains an odd term such as $x^3$, and the whole integral is set to $0$, although another term is even.

Wrong working: $x^3$ is odd, so $\\int_{-2}^{2} (x^3 + 1)\\, dx = 0$.

Right working: split by linearity. $\\int_{-2}^{2} x^3\\, dx + \\int_{-2}^{2} 1\\, dx = 0 + 2\\int_0^2 1\\, dx = 0 + 4 = 4$. Directly: $\\left[\\dfrac{x^4}{4} + x\\right]_{-2}^{2} = (4 + 2) - (4 - 2) = 4$.

Why it happens: the odd rule gives the answer with no work, so it is tempting to use it as soon as an odd power appears, and the eye stops at the leading term.

How to check: test $f(-x) = -f(x)$ for the whole integrand at one point. For $f(x) = x^3 + 1$, $f(-1) = 0$ while $-f(1) = -2$, so $f$ is not odd.
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

@academic[fact,aside:true,width:35%:Simpson's rule is exact for cubics
Built to be exact for parabolas, the rule is exact for every cubic too: the cubic term, written as $(x - m)^3$, is odd about $m$, so its integral and its share of the formula are both $0$. For $x^4$ on $[0, 2]$ it gives $\\frac{20}{3}$ instead of $\\frac{32}{5}$.]@

A numerical check can be done by hand with only three values of the integrand. Simpson's rule estimates $\\int_a^b f(x)\\, dx$ as $\\frac{b - a}{6}\\left[f(a) + 4f(m) + f(b)\\right]$, where $m$ is the midpoint of $[a, b]$. For the area under $y = x^2$ on $[0, 3]$ from the setup example it gives $\\frac{3}{6}\\left(0 + 4 \\cdot 2.25 + 9\\right) = 9$, the exact value. For a curve far from a parabola, the interval is cut into several pieces and the rule is applied to each, and the estimate improves quickly as the pieces get shorter.
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



// FAQ pass: all eight originals named their own h2 — direct
// antidifferentiation, recognizing forms, setting up, absolute values,
// piecewise, symmetry, pitfalls, checking. The piecewise h2 here is why the
// question belongs to no FAQ block, and why the entry I had put on the
// rules page has been swapped out. Replaced with four results the headings
// state without explaining.
const faqQuestions = {
  obj1: {
    question: "How do you integrate a fraction like (x³ + 1)/x?",
    answer: "Divide term by term before integrating. (x³ + 1)/x becomes x² + 1/x, and each piece is a standard form, giving x³/3 + ln|x| + C. There is no quotient rule for integration, so a fraction usually has to be rewritten as a sum, expanded, or split before any formula applies.",
    sectionId: "1"
  },
  obj2: {
    question: "When do you complete the square to evaluate an integral?",
    answer: "When the integrand holds an irreducible quadratic that almost matches an arctan or arcsin form. Rewriting x² + 4x + 8 as (x + 2)² + 4 turns ∫1/(x² + 4x + 8) dx into the arctan pattern with u = x + 2 and a = 2. The same move rewrites 9 − x² as 3² − x² to expose arcsin.",
    sectionId: "2"
  },
  obj3: {
    question: "Is the absolute value of an integral the same as the integral of the absolute value?",
    answer: "No — |∫f| ≤ ∫|f|, and they are usually unequal. Integrating f lets positive and negative regions cancel before you take the absolute value; integrating |f| flips the negative parts up first, so nothing cancels. For f(x) = x on [−1, 1], the first is 0 and the second is 1.",
    sectionId: "4"
  },
  obj4: {
    question: "Why is the integral of an odd function over a symmetric interval zero?",
    answer: "Because the two halves cancel exactly. An odd function satisfies f(−x) = −f(x), so whatever signed area accumulates on [0, a] is matched by the negative of it on [−a, 0], and the sum is 0 for every a. Even functions do the opposite: the halves match in sign, so the integral is twice the half.",
    sectionId: "6"
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
  }
}

  const evStrips = (fn, a, b, n, xr, colorOf, base = 0) => Array.from({ length: n }, (_, i) => { const x = a + (i + 0.5) * (b - a) / n, y = fn(x); return { from: Math.min(base, y), to: Math.max(base, y), color: colorOf(x, y), dx: (x - Math.max(0, xr[0])) / (xr[1] - xr[0]) * 388 }; });
  const evAbsBars = evStrips(Math.abs, -2, 3, 30, [-3, 4], (x) => (x < 0 ? 'r' : 'f'));
  const evOddBars = evStrips((x) => x ** 3, -3, 3, 36, [-4, 4], (x, y) => (y >= 0 ? 'f' : 'r'));
  const fpAbsSplit = { kind: 'pieces', svgTitle: 'The integral of |x| from -2 to 3 is two triangles: area 2 on the left and 9/2 on the right, total 13/2', xRange: [-3, 4], yRange: [-1, 4],
    pieces: [{ fn: Math.abs, from: -2.6, to: 3.6, ends: [null, null], color: 'f', label: { text: 'y = |x|', x: 3.3, y: 3.3, pos: 'w' } }],
    yBars: evAbsBars,
    vlines: [{ x: -2 }, { x: 3 }],
    notes: [{ x: -1.6, y: 0.55, text: '2', pos: 'e', color: 'r' }, { x: 1.85, y: 0.9, text: '9/2', pos: 'e', color: 'f' }, { x: -2.9, y: 3.6, text: 'split at 0: 2 + 9/2 = 13/2', pos: 'e', color: 'r' }],
    caption: 'Split where |x| changes formula: −x on the left, x on the right' };
  const fpOddCancel = { kind: 'pieces', svgTitle: 'x^3 on [-3, 3] is odd: the area below the axis on the left mirrors the area above on the right, so the integral is 0', xRange: [-4, 4], yRange: [-30, 30], yStep: 10,
    pieces: [{ fn: (x) => x ** 3, from: -3.1, to: 3.1, ends: [null, null], color: 'f', label: { text: 'y = x³', x: 2.2, y: 2.2 ** 3, pos: 'nw' } }],
    yBars: evOddBars,
    notes: [{ x: 1.9, y: 4, text: '+81/4', pos: 'e', color: 'f' }, { x: -2.75, y: -5, text: '−81/4', pos: 'e', color: 'r' }, { x: -3.9, y: 26, text: 'odd: the halves cancel, total 0', pos: 'e', color: 'r' }],
    caption: 'An odd integrand over [−a, a]: mirror-image areas of opposite sign' };
  const fpImproperTrap = { kind: 'pieces', svgTitle: '1/x^2 is positive on [-1, 1] but unbounded at 0; the naive antiderivative calculation gives -2, which is wrong', xRange: [-1.5, 1.5], yRange: [-3, 12],
    pieces: [
      { fn: (x) => 1 / (x * x), from: -1.5, to: -0.29, ends: [null, null], color: 'f' },
      { fn: (x) => 1 / (x * x), from: 0.29, to: 1.5, ends: [null, null], color: 'f', label: { text: 'y = 1/x²', x: 0.55, y: 1 / 0.3025, pos: 'e' } },
    ],
    vlines: [{ x: -1 }, { x: 1 }],
    notes: [{ x: -1.45, y: 11, text: 'positive, unbounded at 0', pos: 'e' }, { x: -1.45, y: -1.4, text: 'naive [−1/x]: −2', pos: 'e', color: 'r' }, { x: -1.45, y: -2.4, text: 'a negative area: wrong', pos: 'e', color: 'r' }],
    caption: 'An unbounded integrand makes the integral improper; here it diverges' };
  const demoUnits = {
    absSplit: demoUnitFrame({
      svg: renderFunctionPlotV4(fpAbsSplit),
      caption: 'Splitting at the sign change',
      text: 'The section&#8217;s &#8747; from &#8722;2 to 3 of |x| dx. Left of 0 the integrand is &#8722;x and the region is a triangle with base 2 and height 2, area 2 (amber). Right of 0 it is x and the triangle has base 3 and height 3, area 9/2 (blue). The integral is the sum of the two pieces, 13/2; a single antiderivative over the whole interval would miss the change of formula at 0.',
    }),
    oddCancel: demoUnitFrame({
      svg: renderFunctionPlotV4(fpOddCancel),
      caption: 'Odd symmetry cancels',
      text: 'The section&#8217;s &#8747; from &#8722;3 to 3 of x&#179; dx. x&#179; is odd, so the region on [&#8722;3, 0] is the region on [0, 3] turned upside down: the same area, 81/4, but below the axis. The two signed areas cancel and the integral is 0 without any antiderivative. For an even function the two halves would match with the same sign, giving twice the right-hand half.',
    }),
    improperTrap: demoUnitFrame({
      svg: renderFunctionPlotV4(fpImproperTrap),
      caption: 'A positive integrand with a negative answer',
      text: 'The section&#8217;s &#8747; from &#8722;1 to 1 of dx/x&#178;. The integrand is positive at every x &#8800; 0, so any area it encloses must be positive. Plugging the endpoints into the antiderivative &#8722;1/x gives &#8722;1 &#8722; 1 = &#8722;2, which cannot be right. The fundamental theorem needs a continuous integrand, and 1/x&#178; blows up at 0; treated as an improper integral, each half diverges.',
    }),
  };

  return {
  props: {
    sectionsContent,
    introContent,
    obj6Table,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    demoUnits,
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

export default function PageTemplate({seoData, sectionsContent, introContent, obj6Table, obj7Table, summaryTable, faqQuestions, schemas, demoUnits}) {

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
          <div key={'unit-absSplit'} dangerouslySetInnerHTML={{ __html: demoUnits.absSplit }} />,
          `Integrating x over the whole interval would give 5/2: the left triangle would count as negative.`,
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
          <div key={'unit-oddCancel'} dangerouslySetInnerHTML={{ __html: demoUnits.oddCancel }} />,
          `The shortcut needs a symmetric interval: over [−3, 2] the halves no longer match.`,
          `@academic[punchline:Check symmetry before integrating: on $[-a, a]$ odd parts cancel to zero and even parts need only half the interval.]@`,
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
          <div key={'unit-improperTrap'} dangerouslySetInnerHTML={{ __html: demoUnits.improperTrap }} />,
          `Before evaluating, check that the integrand is continuous on the whole closed interval.`,
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
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Evaluating Integrals FAQ`,
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
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}