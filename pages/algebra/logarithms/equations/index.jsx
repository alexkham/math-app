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


export async function getStaticProps(){
const keyWords = [
  "logarithmic equations",
  "solve log equations",
  "log equation examples",
  "solving exponential equations with logarithms",
  "logarithm equation solver",
  "how to solve log equations",
  "extraneous solutions logarithms",
  "domain restrictions logarithms",
  "log equals constant",
  "combining logarithms to solve",
  "one-to-one property logarithms",
  "exponential equation logarithm",
  "log x equals",
  "ln equation solving",
  "logarithmic equations step by step"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj5 — aggregation: discipline of checking algebraic solutions against domain
  const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Equation</th>
      <th style="${tableHeaders.aggregation}">Algebraic solutions</th>
      <th style="${tableHeaders.aggregation}">Domain requirement</th>
      <th style="${tableHeaders.aggregation}">Verdict after check</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">log₂(x) + log₂(x − 2) = 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = 4 or x = −2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x &gt; 0 and x − 2 &gt; 0 → x &gt; 2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">keep x = 4; reject x = −2 (extraneous)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">log(x) + log(x − 3) = 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = 5 or x = −2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x &gt; 0 and x − 3 &gt; 0 → x &gt; 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">keep x = 5; reject x = −2</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">log₃(x − 5) + log₃(x + 1) = 2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = 2 ± 3√2 ≈ 6.24 or −2.24</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x − 5 &gt; 0 and x + 1 &gt; 0 → x &gt; 5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">keep x = 2 + 3√2; reject the other</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">ln(x²) = ln(9)</td>
      <td style="padding: 12px 15px; color: #34495e;">x = 3 or x = −3</td>
      <td style="padding: 12px 15px; color: #34495e;">x² &gt; 0 → x ≠ 0 (both candidates fine)</td>
      <td style="padding: 12px 15px; color: #34495e;">keep both x = 3 and x = −3</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — aggregation (reference): which log to take, by exponential form
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Exponential form</th>
      <th style="${tableHeaders.aggregation}">Recommended logarithm</th>
      <th style="${tableHeaders.aggregation}">Resulting expression for x</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">aˣ = B (any positive base a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">either log or ln</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = log(B) ⁄ log(a) = ln(B) ⁄ ln(a)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">eˣ = B (base e)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ln (cleaner — no division)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = ln(B)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">10ˣ = B (base 10)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log (cleaner — no division)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = log(B)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">aᵐˣ⁺ⁿ = bᵖˣ⁺ʳ (different bases)</td>
      <td style="padding: 12px 15px; color: #34495e;">either; ln conventional</td>
      <td style="padding: 12px 15px; color: #34495e;">expand (mx+n)·ln(a) = (px+r)·ln(b), then solve a linear equation in x</td>
    </tr>
  </tbody>
</table>
`

  // obj10 — summary capstone
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Equation form</th>
      <th style="${tableHeaders.summary}">Method</th>
      <th style="${tableHeaders.summary}">Worked example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(x) = k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">convert to exponential form: x = aᵏ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₂(x) = 5 → x = 32</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(M) = logₐ(N)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">apply the one-to-one property: M = N</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₄(3x+2) = log₄(x+10) → x = 4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum or difference of logs = k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">condense with logarithm rules, then convert</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₂(x) + log₂(x−2) = 3 → x = 4</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quadratic in logₐ(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">substitute u = logₐ(x), solve, back-substitute</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(log₂x)² − 5log₂x + 6 = 0 → x = 4 or 8</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">aˣ = B (no matching bases)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">take log or ln of both sides, then divide</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3ˣ = 7 → x = log(7) ⁄ log(3) ≈ 1.771</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">aᵐˣ⁺ⁿ = bᵖˣ⁺ʳ</td>
      <td style="padding: 12px 15px; color: #34495e;">take logs, expand, collect x terms, solve linear equation</td>
      <td style="padding: 12px 15px; color: #34495e;">2ˣ⁺³ = 5ˣ⁻¹ → x ≈ 4.026</td>
    </tr>
  </tbody>
</table>
`


const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
## Equation Concepts
 
- [Logarithmic Equation](!/algebra/definitions#logarithmic_equation) — an equation where the variable appears inside a logarithm
- [One-to-One Property](!/algebra/definitions#one-to-one_property) — if $\\log_a(M) = \\log_a(N)$ then $M = N$
- [Argument (of a Logarithm)](!/algebra/definitions#argument_(of_a_logarithm)) — all arguments must be positive; solutions violating this are extraneous
 
## Rules Used
 
- [Product Rule (Logarithms)](!/algebra/definitions#product_rule_(logarithms)) — combining sums of logarithms
- [Power Rule (Logarithms)](!/algebra/definitions#power_rule_(logarithms)) — moving coefficients into exponents
- [Change of Base Formula](!/algebra/definitions#change_of_base_formula) — solving exponential equations via logarithms`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
 
  obj1: {
    title: `Basic Form: Logarithm Equals a Constant`,
    content: `The simplest logarithmic equation has the form $\\log_a(x) = k$, where $k$ is a constant.

Convert to exponential form using the definition: $\\log_a(x) = k$ means $a^k = x$.

@academic[example:Example
Solve $\\log_2(x) = 5$.
$$x = 2^5 = 32$$]@

@academic[example:Example
Solve $\\log_3(x) = -2$.
$$x = 3^{-2} = \\frac{1}{9}$$]@

@academic[example:Example
Solve $\\ln(x) = 4$.
$$x = e^4 \\approx 54.598$$]@

@academic[pitfall,aside:true,width:35%:Swapping the base and the exponent
Rewriting $\\log_2(x) = 5$ as $x = 5^2 = 25$ raises the wrong number to the wrong power, and $\\log_2(25) \\approx 4.64$, not $5$. The correct answer is $x = 2^5 = 32$.
[Read more](!#pitfalls)]@

In each of these examples the conversion uses the same three numbers: the base, the value of the logarithm, and the argument. The base of the logarithm becomes the base of the power, the value $k$ becomes the exponent, and the argument is what that power equals.

Once the equation is in exponential form, the logarithm is gone and only arithmetic remains. For $\\ln(x) = 4$ the base is $e$, so the answer is a power of $e$.

When the argument is an expression, solve the resulting equation:

@academic[example:Example
Solve $\\log_5(2x - 1) = 2$.
$$2x - 1 = 5^2 = 25$$
$$2x = 26$$
$$x = 13$$]@

To solve your own logarithmic equation with each step shown, use the [logarithmic equation solver](!/algebra/calculators/equations/logarithmic).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Logarithms on Both Sides`,
    content: `@academic[rule:One-to-one property
When the same logarithm base appears on both sides, apply the one-to-one property: if $\\log_a(M) = \\log_a(N)$, then $M = N$.]@

@academic[example:Example
Solve $\\log_4(3x + 2) = \\log_4(x + 10)$.
$$3x + 2 = x + 10$$
$$2x = 8$$
$$x = 4$$

Verification: $\\log_4(3(4) + 2) = \\log_4(14)$ and $\\log_4(4 + 10) = \\log_4(14)$. Both arguments are positive, and the equation holds.]@

@academic[example:Example
Solve $\\ln(x^2) = \\ln(9)$.
$$x^2 = 9$$
$$x = \\pm 3$$

Check both: $\\ln((-3)^2) = \\ln(9)$ works, and $\\ln((3)^2) = \\ln(9)$ works. Both solutions are valid.]@

@academic[pitfall,aside:true,width:35%:Rejecting the negative root
Dropping $x = -3$ because it is negative, or because $\\ln(x^2)$ was first rewritten as $2\\ln(x)$, leaves only $x = 3$. But $(-3)^2 = 9 > 0$, so both $x = 3$ and $x = -3$ solve the equation.
[Read more](!#pitfalls)]@

In both examples the logarithms have the same base, so they are removed in one step and the equation becomes a statement about the arguments alone. What remains is ordinary algebra: a linear equation in the first case and a quadratic one in the second.

The domain check is then made on the arguments as they appear in the original equation. In the second example the argument is $x^2$, not $x$, and its sign is what decides which roots stand.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Combining Logarithms`,
    content: `When multiple logarithms appear, use the [rules](!/algebra/logarithms/rules) to condense them into a single logarithm, then apply previous techniques.

@academic[example:Example
Solve $\\log_2(x) + \\log_2(x - 2) = 3$.

Condense using the product rule:
$$\\log_2(x(x - 2)) = 3$$
$$\\log_2(x^2 - 2x) = 3$$

Convert to exponential form:
$$x^2 - 2x = 2^3 = 8$$
$$x^2 - 2x - 8 = 0$$
$$(x - 4)(x + 2) = 0$$
$$x = 4 \\text{ or } x = -2$$

Check domain: $x = 4$ gives $\\log_2(4) + \\log_2(2)$, both defined. $x = -2$ gives $\\log_2(-2)$, undefined. Reject $x = -2$.

Solution: $x = 4$.]@

@academic[pitfall,aside:true,width:35%:Turning a sum of logarithms into the logarithm of a sum
Condensing $\\log_2(x) + \\log_2(x - 2)$ to $\\log_2(2x - 2)$ gives $2x - 2 = 8$, so $x = 5$, but $\\log_2(5) + \\log_2(3) = \\log_2(15) \\neq 3$. The product rule gives $x(x - 2) = 8$, so $x = 4$.
[Read more](!#pitfalls)]@

The condensing step is what makes the equation solvable: two logarithms with the same base become one, and the equation takes the basic form of the first section. The rule used here is the product rule, which joins the arguments $x$ and $x - 2$ into a single expression.

After the conversion to exponential form the equation is a quadratic in $x$, and a quadratic can have two roots. Each root is then checked in the original equation, where both logarithms still stand separately.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Domain Restrictions`,
    content: `Every argument of every logarithm in the original equation must be positive. Identify these restrictions before solving.

For $\\log_a(f(x))$ to be defined, $f(x) > 0$.

@academic[example:Example
In $\\log_3(x - 5) + \\log_3(x + 1) = 2$, the restrictions are:
$$x - 5 > 0 \\implies x > 5$$
$$x + 1 > 0 \\implies x > -1$$

The intersection is $x > 5$. Any solution must satisfy $x > 5$.]@

Solving:
@academic[formula_callout:Domain Restrictions
$$\\log_3((x-5)(x+1)) = 2$$]@
@academic[formula_callout:Domain Restrictions
$$(x-5)(x+1) = 9$$]@
@academic[formula_callout:Domain Restrictions
$$x^2 - 4x - 5 = 9$$]@
@academic[formula_callout:Domain Restrictions
$$x^2 - 4x - 14 = 0$$]@
@academic[formula_callout:Domain Restrictions
$$x = \\frac{4 \\pm \\sqrt{16 + 56}}{2} = \\frac{4 \\pm \\sqrt{72}}{2} = 2 \\pm 3\\sqrt{2}$$]@

Since $3\\sqrt{2} \\approx 4.24$, we have $x \\approx 6.24$ or $x \\approx -2.24$. Only $x = 2 + 3\\sqrt{2}$ satisfies $x > 5$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Extraneous Solutions`,
    content: `Extraneous solutions arise when algebraic manipulation produces values that violate the original equation's domain. Always substitute back into the original equation.

@academic[example:Example
Solve $\\log(x) + \\log(x - 3) = 1$.

$$\\log(x(x-3)) = 1$$
$$x(x-3) = 10$$
$$x^2 - 3x - 10 = 0$$
$$(x-5)(x+2) = 0$$
$$x = 5 \\text{ or } x = -2$$

Check $x = 5$: $\\log(5) + \\log(2)$ — both defined, sum equals $\\log(10) = 1$. Valid.

Check $x = -2$: $\\log(-2)$ — undefined. Extraneous.]@

@academic[pitfall,aside:true,width:35%:Checking roots in the condensed equation
Testing $x = -2$ in $\\log(x(x-3)) = 1$ gives $\\log((-2)(-5)) = \\log(10) = 1$, so it seems to pass. In the original, $\\log(-2)$ is undefined, so the only solution is $x = 5$.
[Read more](!#pitfalls)]@

The squaring, factoring, or combining steps do not "create" these solutions — they were always algebraic solutions to the transformed equation. The domain restrictions eliminate them.

The same discipline applies across every equation that combines logarithms. The table below collects four equations from this page that produce extra algebraic candidates and shows the domain check that eliminates the extraneous ones.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Equations Requiring Substitution`,
    content: `Some equations have a quadratic structure in the logarithm. Substitution simplifies the algebra.

@academic[example:Example
Solve $(\\log_2(x))^2 - 5\\log_2(x) + 6 = 0$.

Let $u = \\log_2(x)$:
$$u^2 - 5u + 6 = 0$$
$$(u - 2)(u - 3) = 0$$
$$u = 2 \\text{ or } u = 3$$

Back-substitute:
$$\\log_2(x) = 2 \\implies x = 4$$
$$\\log_2(x) = 3 \\implies x = 8$$

Both satisfy $x > 0$. Solutions: $x = 4$ and $x = 8$.]@

@academic[example:Example
Solve $\\ln(x) + \\frac{6}{\\ln(x)} = 5$.

Let $u = \\ln(x)$:
$$u + \\frac{6}{u} = 5$$
$$u^2 + 6 = 5u$$
$$u^2 - 5u + 6 = 0$$
$$(u-2)(u-3) = 0$$

Back-substitute: $x = e^2$ or $x = e^3$.]@`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Solving Exponential Equations via Logarithms`,
    content: `When an exponential equation cannot be solved by matching bases, take the logarithm of both sides.

@academic[example:Example
Solve $3^x = 7$.

No integer power of $3$ equals $7$. Take logarithms:
$$\\log(3^x) = \\log(7)$$
$$x \\cdot \\log(3) = \\log(7)$$
$$x = \\frac{\\log(7)}{\\log(3)} \\approx \\frac{0.845}{0.477} \\approx 1.771$$]@

@academic[pitfall,aside:true,width:35%:Turning the quotient into a difference
Rewriting $\\frac{\\log(7)}{\\log(3)}$ as $\\log(7) - \\log(3) = \\log\\left(\\frac{7}{3}\\right)$ gives $x \\approx 0.368$, and $3^{0.368} \\approx 1.5$, not $7$. The correct value is $x \\approx 1.771$.
[Read more](!#pitfalls)]@

The power rule is what moves the unknown out of the exponent: $\\log(3^x)$ becomes $x \\cdot \\log(3)$, a product of $x$ and a fixed number. Dividing both sides by that number isolates $x$.

The answer is therefore a fraction with one logarithm on top and another underneath. Each is a plain decimal, $\\log(7) \\approx 0.845$ and $\\log(3) \\approx 0.477$, and the final value comes from dividing one by the other.

Either $\\log$ or $\\ln$ works — the ratio is identical.

@academic[example:Example
Solve $5^{2x+1} = 12$.

$$\\ln(5^{2x+1}) = \\ln(12)$$
$$(2x+1)\\ln(5) = \\ln(12)$$
$$2x + 1 = \\frac{\\ln(12)}{\\ln(5)}$$
$$2x = \\frac{\\ln(12)}{\\ln(5)} - 1$$
$$x = \\frac{1}{2}\\left(\\frac{\\ln(12)}{\\ln(5)} - 1\\right) \\approx 0.272$$]@

@academic[fact,aside:true,width:35%:No fraction solves $3^x = 7$
The answer $\\log_3(7) \\approx 1.771$ is irrational. If it were a fraction $\\frac{p}{q}$, raising $3^{p/q} = 7$ to the power $q$ would give $3^p = 7^q$, but no power of $3$ is divisible by $7$.]@

In both examples the answer is left as a quotient of logarithms or rounded to a decimal, not written as an exact fraction. An exact value appears only when the right side is a recognizable power of the base: $3^x = 81$ gives $x = 4$, and $8^x = 2$ gives $x = \\frac{1}{3}$ because $8^{1/3} = 2$. For $3^x = 7$ the logarithm does the work, and a calculator supplies the digits.

To evaluate the final logarithm numerically, use the [log calculator](!/calculators/log-calculator).

@academic[punchline:Taking logarithms of both sides brings an unknown exponent down into an ordinary product that algebra can solve.]@`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Exponentials on Both Sides`,
    content: `When exponential expressions with different bases appear on both sides, logarithms bring down both exponents.

@academic[example:Example
Solve $2^{x+3} = 5^{x-1}$.

Take logarithms:
$$\\ln(2^{x+3}) = \\ln(5^{x-1})$$
$$(x+3)\\ln(2) = (x-1)\\ln(5)$$

Expand:
$$x\\ln(2) + 3\\ln(2) = x\\ln(5) - \\ln(5)$$

Collect $x$ terms:
$$x\\ln(2) - x\\ln(5) = -\\ln(5) - 3\\ln(2)$$
$$x(\\ln(2) - \\ln(5)) = -\\ln(5) - 3\\ln(2)$$
$$x = \\frac{-\\ln(5) - 3\\ln(2)}{\\ln(2) - \\ln(5)} = \\frac{\\ln(5) + 3\\ln(2)}{\\ln(5) - \\ln(2)}$$

Numerically: $x = \\frac{1.609 + 2.079}{1.609 - 0.693} = \\frac{3.688}{0.916} \\approx 4.026$.]@`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Choosing Common or Natural Logarithm`,
    content: `When taking logarithms to solve exponential equations, either base produces the same answer.

For $3^x = 7$:
@academic[formula_callout:Choosing Common or Natural Logarithm
$$x = \\frac{\\log(7)}{\\log(3)} = \\frac{\\ln(7)}{\\ln(3)} = \\log_3(7)$$]@

All three expressions are equal by the change of base formula.

Practical considerations:

- If the base is $e$, use $\\ln$: solving $e^{2x} = 5$ gives $2x = \\ln(5)$, no division needed.

- If the base is $10$, use $\\log$: solving $10^{x-1} = 50$ gives $x - 1 = \\log(50)$.

- Otherwise, either works. Choose based on calculator availability or notational preference.

The expressions $\\log(7)/\\log(3)$ and $\\ln(7)/\\ln(3)$ compute to identical decimal values.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj10: {
    title: `Summary of Solving Methods`,
    content: `The page covers two related families of equations: equations whose unknown sits inside a logarithm, and exponential equations solved by taking a logarithm of both sides. The same toolkit — convert, condense, apply the one-to-one property, substitute, and check the domain — handles every form. The table below collects each equation form with its method and a worked example, in the order the page introduces them.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj11: {
    title: `Common Pitfalls`,
    content: `Five mistakes come up again and again in logarithmic equations. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Swapping the base and the exponent**

A logarithm is converted to exponential form, but the base and the value of the logarithm trade places, so the value is raised to the power of the base.

Wrong working:
$$\\log_2(x) = 5 \\implies x = 5^2 = 25$$

Right working: $\\log_a(x) = k$ means $a^k = x$, so the base $2$ is raised to the power $5$.
$$\\log_2(x) = 5 \\implies x = 2^5 = 32$$

Why it happens: the equation holds two small numbers, and the conversion is remembered as "one number to the power of the other" without which one is the base.

How to check: raise the base to the value of the logarithm and compare with the answer. $2^5 = 32$, not $25$; indeed $\\log_2(25) \\approx 4.64$, while $\\log_2(32) = 5$.

**Rejecting the negative root**

An equation such as $\\ln(x^2) = \\ln(9)$ produces a negative root, and it is thrown out on the belief that logarithmic equations never have negative solutions. The same loss happens when $\\ln(x^2)$ is rewritten as $2\\ln(x)$ before solving.

Wrong working:
$$\\ln(x^2) = \\ln(9) \\implies 2\\ln(x) = \\ln(9) \\implies \\ln(x) = \\ln(3) \\implies x = 3$$

Right working: the one-to-one property gives $x^2 = 9$, so $x = 3$ or $x = -3$. The argument is $x^2$, which equals $9$ for both values, so both solutions stand.

Why it happens: the rule "the argument must be positive" is remembered as "$x$ must be positive". The power rule $\\log_a(M^p) = p\\log_a(M)$ needs $M > 0$, so using it with $M = x$ quietly adds the condition $x > 0$.

How to check: substitute the negative root into the original equation. $x = -3$ gives $\\ln((-3)^2) = \\ln(9)$, which is true.

**Turning a sum of logarithms into the logarithm of a sum**

Two logarithms with the same base are added, and the sum is condensed by adding the arguments instead of multiplying them.

Wrong working:
$$\\log_2(x) + \\log_2(x - 2) = 3 \\implies \\log_2(2x - 2) = 3 \\implies 2x - 2 = 8 \\implies x = 5$$

Right working: the product rule gives $\\log_2(x(x - 2)) = 3$, so $x^2 - 2x = 8$ and $(x - 4)(x + 2) = 0$. Of $x = 4$ and $x = -2$, only $x = 4$ keeps both arguments positive.

Why it happens: the plus sign between the logarithms looks as if it should carry over to the arguments. The product rule turns a product inside into a sum outside, not a sum into a sum.

How to check: substitute the answer into the original equation. $x = 5$ gives $\\log_2(5) + \\log_2(3) = \\log_2(15) \\approx 3.907$, not $3$. $x = 4$ gives $\\log_2(4) + \\log_2(2) = 2 + 1 = 3$.

**Checking roots in the condensed equation**

The roots of the quadratic are tested, but in the condensed equation rather than in the original one, so an extraneous root passes the test.

Wrong working: $\\log(x) + \\log(x - 3) = 1$ is condensed to $\\log(x(x - 3)) = 1$, with roots $x = 5$ and $x = -2$. In the condensed form $x = -2$ gives $\\log((-2)(-5)) = \\log(10) = 1$, so both roots are kept.

Right working: in the original equation $x = -2$ gives $\\log(-2)$, which is undefined, so it is rejected. $x = 5$ gives $\\log(5) + \\log(2) = \\log(10) = 1$. The only solution is $x = 5$.

Why it happens: the condensed equation is the last line written before the quadratic, so it is the one at hand. But it is defined on a larger set: the product $x(x - 3)$ is also positive when both factors are negative.

How to check: write the domain from the original terms before solving. Here $x > 0$ and $x - 3 > 0$ give $x > 3$, and any root outside it is rejected at once.

**Turning the quotient into a difference**

The answer to an exponential equation is a quotient of two logarithms, and it is mistaken for the quotient rule, so the division is replaced by a subtraction.

Wrong working:
$$x = \\frac{\\log(7)}{\\log(3)} = \\log(7) - \\log(3) = \\log\\left(\\frac{7}{3}\\right) \\approx 0.368$$

Right working: the two logarithms are separate numbers, divided as they stand.
$$x = \\frac{\\log(7)}{\\log(3)} \\approx \\frac{0.845}{0.477} \\approx 1.771$$

Why it happens: the quotient rule $\\log\\left(\\frac{M}{N}\\right) = \\log(M) - \\log(N)$ also has a fraction and a difference in it. There the fraction is inside one logarithm; here it is a fraction of two logarithms. The only rule that applies to it is the change of base formula, which turns it into $\\log_3(7)$, not into a difference.

How to check: substitute the answer into the original equation. $3^{0.368} \\approx 1.50$, far from $7$, while $3^{1.771} \\approx 7.00$.`,
    before: ``,
    after: ``,
    link: '',
  },
};

  const introContent = {
  id: "intro",
  title: `Isolating the Variable Inside the Logarithm`,
  content: `Equations containing [logarithms](!/algebra/logarithms) require techniques that exploit the definition and [properties](!/algebra/logarithms/properties) of logarithmic functions. Converting to exponential form, applying the one-to-one property, and using [logarithm rules](!/algebra/logarithms/rules) to combine expressions — these methods reduce logarithmic equations to algebraic ones. Every solution must be verified against domain restrictions, as the solving process can introduce extraneous values.`,
};


const faqQuestions = {
  obj1: {
    question: "Do you always reject negative solutions in logarithmic equations?",
    answer: "No. What has to be positive is each argument, not the value of $x$ itself. Solving $\\ln(x^2) = \\ln(9)$ gives $x = \\pm 3$, and both are valid because $(-3)^2 = 9$ is positive. Contrast $\\log(x) + \\log(x - 3) = 1$, where $x = -2$ fails only because it makes $\\log(-2)$ undefined.",
    sectionId: "2"
  },
  obj2: {
    question: "Where do extraneous solutions in logarithmic equations come from?",
    answer: "Condensing widens the domain. In $\\log_3(x - 5) + \\log_3(x + 1) = 2$ the original requires $x > 5$, but the condensed form $\\log_3((x-5)(x+1)) = 2$ only requires the product to be positive, which also permits $x < -1$. The algebra invents nothing; the extra root genuinely solves the condensed equation, and the original domain is what rules it out.",
    sectionId: "5"
  },
  obj3: {
    question: "Do substitution problems like $(\\log_2 x)^2 - 5\\log_2 x + 6 = 0$ need a domain check?",
    answer: "Rarely, because back-substitution takes care of it. Solving $\\log_2 x = u$ gives $x = 2^u$, which is positive for every real $u$, so the domain condition holds automatically and nothing is rejected. Substitution does not widen the domain the way condensing does. The exception is a substitution that divides, as in $\\ln x + \\frac{6}{\\ln x} = 5$, which needs $\\ln x \\neq 0$.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Logarithmic Equations",
    "description": "Learn to solve logarithmic equations: convert to exponential form, use one-to-one property, combine logs, handle domain restrictions, and solve exponential equations with logs.",
    "url": "https://www.learnmathclass.com/algebra/logarithms/equations",
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
      "name": "Logarithmic Equations"
    },
    "teaches": [
      "Converting logarithmic equations to exponential form",
      "One-to-one property for equal logarithms",
      "Combining logarithms using rules",
      "Domain restrictions and checking solutions",
      "Identifying extraneous solutions",
      "Substitution for quadratic-type log equations",
      "Solving exponential equations using logarithms"
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
        "name": "Algebra",
        "item": "https://www.learnmathclass.com/algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Logarithms",
        "item": "https://www.learnmathclass.com/algebra/logarithms"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Logarithmic Equations",
        "item": "https://www.learnmathclass.com/algebra/logarithms/equations"
      }
    ]
  }
}


  const fpLogCombined = { kind: 'pieces', svgTitle: 'log2 x + log2(x - 2) = 3 only at x = 4; the curve exists for x > 2', xRange: [-3, 9], yRange: [-3, 6],
    pieces: [
      { fn: (x) => Math.log2(x) + Math.log2(x - 2), from: 2.02, to: 9, ends: [null, null], color: 'f', label: { text: 'log₂ x + log₂(x − 2)', x: 2.6, y: 5.6, pos: 'e' } },
      { fn: () => 3, from: -3, to: 9, ends: [null, null], color: 'g', label: { text: 'y = 3', x: 8.5, y: 3, pos: 's' } },
    ],
    vlines: [{ x: 2 }],
    points: [{ x: 4, y: 3, label: 'x = 4', pos: 'se' }],
    notes: [{ x: 2.1, y: -2.6, text: 'domain: x > 2', pos: 'e' }, { x: 5, y: -0.8, text: 'x = −2 is rejected:', pos: 'e', color: 'r' },
      { x: 5, y: -1.6, text: 'log₂(−2) is undefined', pos: 'e', color: 'r' }],
    caption: 'Only x = 4 survives: the left side exists only for x > 2' };
  const fpLogQuadratic = { kind: 'pieces', svgTitle: '(log2 x)^2 - 5 log2 x + 6 = 0 at x = 4 and x = 8', xRange: [0, 10], yRange: [-1, 8],
    pieces: [{ fn: (x) => Math.log2(x) ** 2 - 5 * Math.log2(x) + 6, from: 0.05, to: 10, ends: [null, null], color: 'f', label: { text: '(log₂ x)² − 5 log₂ x + 6', x: 1.3, y: 5.5, pos: 'e' } }],
    points: [{ x: 4, y: 0 }, { x: 8, y: 0 }],
    notes: [{ x: 3, y: 7.4, text: 'u = log₂ x: u² − 5u + 6 = 0, so u = 2 or 3', pos: 'e', color: 'g' },
      { x: 3, y: 6.6, text: 'x = 2² = 4 or x = 2³ = 8', pos: 'e', color: 'r' }],
    caption: 'Quadratic in log₂ x: zeros at x = 4 and x = 8' };
  const fpExpBothSides = { kind: 'pieces', svgTitle: '2^(x + 3) = 5^(x - 1) at x approximately 4.026', xRange: [0, 5], yRange: [0, 300], yStep: 50,
    pieces: [
      { fn: (x) => 2 ** (x + 3), from: 0, to: 5, ends: [null, null], color: 'f', label: { text: '2ˣ⁺³', x: 4.6, y: 2 ** 7.6, pos: 'se' } },
      { fn: (x) => 5 ** (x - 1), from: 0, to: 5, ends: [null, null], color: 'g', label: { text: '5ˣ⁻¹', x: 4.2, y: 5 ** 3.2, pos: 'w' } },
    ],
    points: [{ x: 4.026, y: 2 ** 7.026, label: 'x ≈ 4.026', pos: 'nw' }],
    notes: [{ x: 0.1, y: 280, text: 'x = (ln 5 + 3 ln 2)/(ln 5 − ln 2) ≈ 4.026', pos: 'e', color: 'r' }],
    caption: '2ˣ⁺³ = 5ˣ⁻¹: the faster-growing 5ˣ⁻¹ overtakes at x ≈ 4.026' };

  const demoUnits = {
    combined: demoUnitFrame({
      svg: renderFunctionPlotV4(fpLogCombined),
      caption: 'Why x = &#8722;2 is thrown out',
      text: 'The section\'s log&#8322; x + log&#8322;(x &#8722; 2) = 3. The left side only exists for x &gt; 2, where both arguments are positive, so its graph starts at the dashed line. It meets the level 3 once, at x = 4. Condensing to x&#178; &#8722; 2x = 8 also produces x = &#8722;2, but no part of the graph lives there: log&#8322;(&#8722;2) is undefined, so the candidate is rejected.',
    }),
    logQuadratic: demoUnitFrame({
      svg: renderFunctionPlotV4(fpLogQuadratic),
      caption: 'A quadratic hiding inside a logarithm',
      text: 'The section\'s (log&#8322; x)&#178; &#8722; 5 log&#8322; x + 6 = 0. In terms of u = log&#8322; x it is u&#178; &#8722; 5u + 6 = 0, with u = 2 or u = 3, so x = 4 or x = 8. The graph confirms both: it reaches zero exactly there, dipping slightly below the axis between them.',
    }),
    bothSides: demoUnitFrame({
      svg: renderFunctionPlotV4(fpExpBothSides),
      caption: 'Two exponentials with different bases',
      text: 'The section\'s 2&#739;&#8314;&#179; = 5&#739;&#8315;&#185;. The left side starts higher, but base 5 grows faster, so the two curves cross exactly once. Taking logarithms of both sides brings the exponents down and gives x = (ln 5 + 3 ln 2)/(ln 5 &#8722; ln 2) &#8776; 4.026, the crossing in the graph.',
    }),
  };

return {
  props: {
    sectionsContent,
    introContent,
    obj5Table,
    obj9Table,
    summaryTable,
    faqQuestions,
    schemas,
    demoUnits,
    seoData: {
      title: "Logarithmic Equations: Solving Methods & Examples | Learn Math Class",
      description: "Learn to solve logarithmic equations: convert to exponential form, use one-to-one property, combine logs, handle domain restrictions, and solve exponential equations with logs.",
      keywords: keyWords.join(", "),
      url: "/algebra/logarithms/equations",
      name: "Logarithmic Equations"
    },
  }
}
   }

// export default function EquationsPage({seoData,sectionsContent , introContent}) {
export default function EquationsPage({
  seoData,
  sectionsContent,
  introContent,
  obj5Table,
  obj9Table,
  summaryTable,
  faqQuestions,
  schemas,
  demoUnits,
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
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key={'unit-combined'} dangerouslySetInnerHTML={{ __html: demoUnits.combined }} />,
          `Checking each candidate against the domain is the step that cannot be skipped.`,
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
          <div
            key={'obj5-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj5Table }}
          />,
          `@academic[punchline:Algebra solves the transformed equation; only the domain of the original equation decides which roots are answers.]@`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'unit-logQuadratic'} dangerouslySetInnerHTML={{ __html: demoUnits.logQuadratic }} />,
          `Each value of u gives one x, because log₂ x is one-to-one.`,
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
          <div key={'unit-bothSides'} dangerouslySetInnerHTML={{ __html: demoUnits.bothSides }} />,
          `Either ln or log gives the same crossing; only the arithmetic differs.`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div
            key={'obj9-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj9Table }}
          />,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Logarithmic Equations FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Logarithmic Equations</h1>
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