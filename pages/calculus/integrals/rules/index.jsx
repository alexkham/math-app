
// tables-optimized: v4 | 2026-05-24 | 2 tables (obj7 comparison, obj9 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import functionFTCDiagrams from '@/app/components/functions/ftc/functionFTCDiagrams'


export async function getStaticProps(){
const keyWords = [
  "integration rules",
  "integral properties",
  "fundamental theorem of calculus",
  "sum rule integration",
  "constant multiple rule integral",
  "additivity of integrals",
  "reversing integration limits",
  "FTC part 1",
  "FTC part 2",
  "integral comparison properties",
  "linearity of integrals",
  "antiderivative evaluation",
  "definite integral rules",
  "integration calculus laws"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj7 — comparison: Fundamental Theorem of Calculus, Part 1 vs Part 2
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Aspect</th>
      <th style="${tableHeaders.comparison}">FTC — Part 1</th>
      <th style="${tableHeaders.comparison}">FTC — Part 2</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Statement</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">F(x) = ∫<sub>a</sub><sup>x</sup> f(t) dt &nbsp;⇒&nbsp; F&apos;(x) = f(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What it does</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">differentiating an integral recovers the integrand</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integrating a derivative recovers the function (up to endpoints)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Hypothesis</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f is continuous on [a, b]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">F is any antiderivative of f on [a, b]</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Main role</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">existence — guarantees every continuous function has an antiderivative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">computation — turns area into endpoint evaluation</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Typical use</td>
      <td style="padding: 12px 15px; color: #34495e;">differentiate accumulation functions; theoretical arguments</td>
      <td style="padding: 12px 15px; color: #34495e;">evaluate definite integrals via F(b) − F(a)</td>
    </tr>
  </tbody>
</table>
`

// obj9 — summary capstone: master reference of integration rules
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Rule</th>
      <th style="${tableHeaders.summary}">Statement</th>
      <th style="${tableHeaders.summary}">Applies to</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum / difference</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">definite &amp; indefinite</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Constant multiple</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ c · f(x) dx = c · ∫ f(x) dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">definite &amp; indefinite</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linearity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ [a f(x) + b g(x)] dx = a ∫ f(x) dx + b ∫ g(x) dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">definite &amp; indefinite</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Additivity over intervals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>a</sub><sup>b</sup> f dx + ∫<sub>b</sub><sup>c</sup> f dx = ∫<sub>a</sub><sup>c</sup> f dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">definite only</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Reversing limits</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>a</sub><sup>b</sup> f dx = − ∫<sub>b</sub><sup>a</sup> f dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">definite only</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Empty interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>a</sub><sup>a</sup> f dx = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">definite only</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">FTC — Part 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">d/dx [ ∫<sub>a</sub><sup>x</sup> f(t) dt ] = f(x), assuming f continuous</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">definite with variable upper limit</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">FTC — Part 2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a), for any antiderivative F</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">definite only</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Nonnegativity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) ≥ 0 on [a, b] &nbsp;⇒&nbsp; ∫<sub>a</sub><sup>b</sup> f dx ≥ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">definite only</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Monotonicity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) ≤ g(x) on [a, b] &nbsp;⇒&nbsp; ∫<sub>a</sub><sup>b</sup> f dx ≤ ∫<sub>a</sub><sup>b</sup> g dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">definite only</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Bounding</td>
      <td style="padding: 12px 15px; color: #34495e;">m ≤ f(x) ≤ M on [a, b] &nbsp;⇒&nbsp; m(b − a) ≤ ∫<sub>a</sub><sup>b</sup> f dx ≤ M(b − a)</td>
      <td style="padding: 12px 15px; color: #34495e;">definite only</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/integrals/rules ────────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Definite Integral](!/calculus/definitions#definite_integral) — the object these rules govern
// - [Indefinite Integral](!/calculus/definitions#indefinite_integral) — linearity applies to both definite and indefinite forms
// - [Antiderivative](!/calculus/definitions#antiderivative) — the Fundamental Theorem connects antiderivatives to definite integrals`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Sum and Difference Rules`,
//     content: `
// Integrals distribute over addition and subtraction:

// $$\\int [f(x) + g(x)]\\, dx = \\int f(x)\\, dx + \\int g(x)\\, dx$$

// $$\\int [f(x) - g(x)]\\, dx = \\int f(x)\\, dx - \\int g(x)\\, dx$$

// These rules apply to both definite and indefinite integrals. They allow complex integrands to be broken into simpler pieces, each handled separately.

// For example:

// $$\\int (x^3 + \\sin x)\\, dx = \\int x^3\\, dx + \\int \\sin x\\, dx = \\frac{x^4}{4} - \\cos x + C$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj2: {
//     title: `Constant Multiple Rule`,
//     content: `
// Constants factor out of integrals:

// $$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$

// This holds for any constant $c$. The rule simplifies computation by separating numerical coefficients from the integration process.

// For example:

// $$\\int 7e^x\\, dx = 7 \\int e^x\\, dx = 7e^x + C$$

// Combined with the sum rule, linearity handles any linear combination:

// $$\\int [af(x) + bg(x)]\\, dx = a\\int f(x)\\, dx + b\\int g(x)\\, dx$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj3: {
//     title: `Additivity Over Intervals`,
//     content: `
// For [definite integrals](!/calculus/integrals/definite), integration over adjacent intervals combines:

// $$\\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx = \\int_a^c f(x)\\, dx$$

// This property allows splitting an integral at any intermediate point. It proves essential for piecewise functions, where different formulas apply on different subintervals.

// The property extends naturally: an integral over $[a, d]$ equals the sum of integrals over $[a, b]$, $[b, c]$, and $[c, d]$ for any $a < b < c < d$.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj4: {
//     title: `Reversing Limits of Integration`,
//     content: `
// Swapping the limits of a definite integral negates the result:

// $$\\int_a^b f(x)\\, dx = -\\int_b^a f(x)\\, dx$$

// This follows from the Riemann sum definition. Integrating from $a$ to $b$ accumulates in one direction; integrating from $b$ to $a$ accumulates in the reverse direction.

// A useful consequence: if $a = b$, the integral vanishes:

// $$\\int_a^a f(x)\\, dx = 0$$

// No interval means no accumulation.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj5: {
//     title: `Fundamental Theorem of Calculus — Part 1`,
//     content: `
// Define the accumulation function:

// $$F(x) = \\int_a^x f(t)\\, dt$$

// Part 1 of the Fundamental Theorem states that if $f$ is continuous, then $F$ is differentiable and:

// $$F'(x) = f(x)$$

// Differentiation undoes integration. The rate of change of accumulated area equals the integrand's value at the boundary.

// This result establishes that every continuous function has an antiderivative—namely, its accumulation function. The theorem guarantees antiderivatives exist, even when no elementary formula expresses them.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj6: {
//     title: `Fundamental Theorem of Calculus — Part 2`,
//     content: `
// If $F$ is any antiderivative of $f$ (meaning $F'(x) = f(x)$), then:

// $$\\int_a^b f(x)\\, dx = F(b) - F(a)$$

// This is the computational engine of integral calculus. Rather than computing limits of Riemann sums, find an antiderivative and evaluate at the endpoints.

// The notation $F(x)\\Big|_a^b$ or $[F(x)]_a^b$ means $F(b) - F(a)$.

// Example:

// $$\\int_1^3 x^2\\, dx = \\frac{x^3}{3}\\Big|_1^3 = \\frac{27}{3} - \\frac{1}{3} = \\frac{26}{3}$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj7: {
//     title: `Why Differentiation and Integration Are Inverses`,
//     content: `
// The two parts of the Fundamental Theorem express inverse relationships.

// **Part 1:** Differentiating an integral recovers the integrand.

// $$\\frac{d}{dx} \\int_a^x f(t)\\, dt = f(x)$$

// **Part 2:** Integrating a derivative recovers the function (up to boundary values).

// $$\\int_a^b F'(x)\\, dx = F(b) - F(a)$$

// These are two directions of the same relationship. Integration accumulates; differentiation measures instantaneous rate. Each operation undoes the other, connecting the geometry of area to the algebra of rates of change.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj8: {
//     title: `Comparison Properties`,
//     content: `
// Inequalities between integrands yield inequalities between integrals.

// **Nonnegativity:** If $f(x) \\geq 0$ on $[a, b]$, then:

// $$\\int_a^b f(x)\\, dx \\geq 0$$

// **Monotonicity:** If $f(x) \\leq g(x)$ on $[a, b]$, then:

// $$\\int_a^b f(x)\\, dx \\leq \\int_a^b g(x)\\, dx$$

// **Bounding:** If $m \\leq f(x) \\leq M$ on $[a, b]$, then:

// $$m(b - a) \\leq \\int_a^b f(x)\\, dx \\leq M(b - a)$$

// These properties enable estimation when exact computation is difficult or impossible.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj9: {
//     title: `Summary: All Integration Rules at a Glance`,
//     content: `
// The rules covered in the sections above fall into three groups — algebraic rules of linearity, properties of the interval of integration, and the Fundamental Theorem in its two parts — capped by the comparison properties that govern inequalities. The master reference below collects every rule on this page in one table, with a third column flagging whether each applies to both definite and indefinite integrals or to definite integrals only. Use it as a single-glance reminder while working problems; each row points back to the section above where the rule is derived and discussed.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   }
// };



// formulas-optimized: v1 | 2026-06-09 | 9 callouts (obj1, obj2, obj3, obj4, obj5, obj6, obj8)
const sectionsContent = {
  // ─── /calculus/integrals/rules ────────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Definite Integral](!/calculus/definitions#definite_integral) — the object these rules govern
- [Indefinite Integral](!/calculus/definitions#indefinite_integral) — linearity applies to both definite and indefinite forms
- [Antiderivative](!/calculus/definitions#antiderivative) — the Fundamental Theorem connects antiderivatives to definite integrals`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Sum and Difference Rules`,
    content: `
Integrals distribute over addition and subtraction:

@academic[formula_callout:Sum and Difference Rule (Integrals)
$$\\int [f(x) \\pm g(x)]\\, dx = \\int f(x)\\, dx \\pm \\int g(x)\\, dx$$
/calculus/formulas#sum_and_difference_rule_integrals]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

@academic[fact,aside:true,width:35%:Two hopeless integrals, one easy sum
Neither $\\int e^{x^2}\\, dx$ nor $\\int 2x^2 e^{x^2}\\, dx$ can be written with elementary functions, yet their sum is easy: $\\int (1 + 2x^2)\\, e^{x^2}\\, dx = x e^{x^2} + C$, because the product rule gives $(x e^{x^2})' = e^{x^2} + 2x^2 e^{x^2}$.]@

These rules apply to both definite and indefinite integrals. They allow complex integrands to be broken into simpler pieces, each handled separately.

The rule can be read in either direction. From left to right it breaks one integral into several; from right to left it gathers several integrals into one. A split helps only when every piece can be integrated on its own, so the pieces are worth checking before the integral is taken apart.

For example:

@academic[formula_callout:Sum and Difference Rules
$$\\int (x^3 + \\sin x)\\, dx = \\int x^3\\, dx + \\int \\sin x\\, dx = \\frac{x^4}{4} - \\cos x + C$$]@

@academic[pitfall,aside:true,width:35%:Splitting a product like a sum
Integrating each factor of $\\int x \\cdot x\\, dx$ separately gives $\\frac{x^2}{2} \\cdot \\frac{x^2}{2} = \\frac{x^4}{4} + C$, whose derivative is $x^3$, not $x^2$. Multiplying first, $\\int x^2\\, dx = \\frac{x^3}{3} + C$.
[Read more](!#pitfalls)]@

In the example the two terms are integrated independently: $x^3$ by the power rule and $\\sin x$ from the trigonometric formulas, and the two results are simply added, with one constant for the whole answer. The sum rule is what allows this, and it holds because differentiation splits over sums in the same way: $(F + G)' = F' + G'$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Constant Multiple Rule`,
    content: `
Constants factor out of integrals:

@academic[formula_callout:Constant Multiple Rule (Integrals)
$$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$
/calculus/formulas#constant_multiple_rule_integrals]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

This holds for any constant $c$. The rule simplifies computation by separating numerical coefficients from the integration process.

For example:

@academic[formula_callout:Constant Multiple Rule
$$\\int 7e^x\\, dx = 7 \\int e^x\\, dx = 7e^x + C$$]@

Combined with the sum rule, linearity handles any linear combination:

@academic[formula_callout:Constant Multiple Rule
$$\\int [af(x) + bg(x)]\\, dx = a\\int f(x)\\, dx + b\\int g(x)\\, dx$$]@

@academic[pitfall,aside:true,width:35%:Pulling a variable out of the integral
Moving $x$ out of $\\int x \\cos x\\, dx$ gives $x \\sin x + C$, whose derivative is $\\sin x + x \\cos x$. Only constants come out; the correct result, by integration by parts, is $x \\sin x + \\cos x + C$.
[Read more](!#pitfalls)]@

The coefficients $a$ and $b$ here are fixed numbers, like the $7$ in the example above. Once they are taken out, what remains inside each integral is a single function, and the work reduces to finding $\\int f(x)\\, dx$ and $\\int g(x)\\, dx$ separately and combining the two results with the same coefficients.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Additivity Over Intervals`,
    content: `
For [definite integrals](!/calculus/integrals/definite), integration over adjacent intervals combines:

@academic[formula_callout:Additivity Over Intervals
$$\\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx = \\int_a^c f(x)\\, dx$$
/calculus/formulas#additivity_over_intervals]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Not splitting where the formula changes
Integrating $|x|$ on $[-1, 2]$ with the single antiderivative $\\frac{x^2}{2}$ gives $2 - \\frac{1}{2} = \\frac{3}{2}$. Splitting at $0$: $\\int_{-1}^0 (-x)\\, dx + \\int_0^2 x\\, dx = \\frac{1}{2} + 2 = \\frac{5}{2}$.
[Read more](!#pitfalls)]@

This property allows splitting an integral at any intermediate point. It proves essential for piecewise functions, where different formulas apply on different subintervals.

The property extends naturally: an integral over $[a, d]$ equals the sum of integrals over $[a, b]$, $[b, c]$, and $[c, d]$ for any $a < b < c < d$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Reversing Limits of Integration`,
    content: `
Swapping the limits of a definite integral negates the result:

@academic[formula_callout:Reversing Limits of Integration
$$\\int_a^b f(x)\\, dx = -\\int_b^a f(x)\\, dx$$
/calculus/formulas#reversing_limits_of_integration]@

This follows from the Riemann sum definition. Integrating from $a$ to $b$ accumulates in one direction; integrating from $b$ to $a$ accumulates in the reverse direction.

A useful consequence: if $a = b$, the integral vanishes:

@academic[formula_callout:Zero-Width Interval
$$\\int_a^a f(x)\\, dx = 0$$
/calculus/formulas#zero-width_interval]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

No interval means no accumulation.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Fundamental Theorem of Calculus — Part 1`,
    content: `
Define the accumulation function:

@academic[formula_callout:Fundamental Theorem of Calculus — Part 1
$$F(x) = \\int_a^x f(t)\\, dt$$]@

Part 1 of the Fundamental Theorem states that if $f$ is continuous, then $F$ is differentiable and:

@academic[formula_callout:Fundamental Theorem of Calculus — Part 1
$$F'(x) = f(x)$$]@

@academic[formula_callout:Fundamental Theorem of Calculus, Part 1
$$\\frac{d}{dx}\\left[\\int_a^x f(t)\\, dt\\right] = f(x) \\quad \\text{when } f \\text{ is continuous}$$
/calculus/formulas#fundamental_theorem_of_calculus,_part_1]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Subtracting the lower limit in Part 1
Mixing Part 1 with Part 2 gives $\\frac{d}{dx}\\int_1^x t^2\\, dt = x^2 - 1$. The integral is $\\frac{x^3}{3} - \\frac{1}{3}$, and the constant $-\\frac{1}{3}$ differentiates to $0$, so the derivative is $x^2$.
[Read more](!#pitfalls)]@

Differentiation undoes integration. The rate of change of accumulated area equals the integrand's value at the boundary.

This result establishes that every continuous function has an antiderivative—namely, its accumulation function. The theorem guarantees antiderivatives exist, even when no elementary formula expresses them.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Fundamental Theorem of Calculus — Part 2`,
    content: `
If $F$ is any antiderivative of $f$ (meaning $F'(x) = f(x)$), then:

@academic[formula_callout:Fundamental Theorem of Calculus, Part 2
$$\\int_a^b f(x)\\, dx = F(b) - F(a) \\quad \\text{where } F'(x) = f(x)$$
/calculus/formulas#fundamental_theorem_of_calculus,_part_2]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

This is the computational engine of integral calculus. Rather than computing limits of Riemann sums, find an antiderivative and evaluate at the endpoints.

The notation $F(x)\\Big|_a^b$ or $[F(x)]_a^b$ means $F(b) - F(a)$.

Example:

@academic[formula_callout:Fundamental Theorem of Calculus — Part 2
$$\\int_1^3 x^2\\, dx = \\frac{x^3}{3}\\Big|_1^3 = \\frac{27}{3} - \\frac{1}{3} = \\frac{26}{3}$$]@

@academic[pitfall,aside:true,width:35%:Subtracting in the wrong order
Computing $F(1) - F(3)$ for $\\int_1^3 x^2\\, dx$ gives $\\frac{1}{3} - \\frac{27}{3} = -\\frac{26}{3}$. The upper limit comes first: $F(3) - F(1) = \\frac{26}{3}$.
[Read more](!#pitfalls)]@

The antiderivative $\\frac{x^3}{3}$ is evaluated twice, once at each endpoint, and the constant of integration is left out because it would cancel. Since $x^2 > 0$ on $[1, 3]$, the result must be positive, and $\\frac{26}{3} \\approx 8.67$ has a sensible size: the region lies under a curve that rises from height $1$ to height $9$ over a width of $2$, so its area is between $2$ and $18$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Why Differentiation and Integration Are Inverses`,
    content: `
The two parts of the Fundamental Theorem express inverse relationships.

**Part 1:** Differentiating an integral recovers the integrand.

@academic[formula_callout:Fundamental Theorem of Calculus, Part 1
$$\\frac{d}{dx} \\int_a^x f(t)\\, dt = f(x)$$
/calculus/formulas#fundamental_theorem_of_calculus,_part_1]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

**Part 2:** Integrating a derivative recovers the function (up to boundary values).

@academic[formula_callout:Why Differentiation and Integration Are Inverses
$$\\int_a^b F'(x)\\, dx = F(b) - F(a)$$]@

These are two directions of the same relationship. Integration accumulates; differentiation measures instantaneous rate. Each operation undoes the other, connecting the geometry of area to the algebra of rates of change.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Comparison Properties`,
    content: `
Inequalities between integrands yield inequalities between integrals.

**Nonnegativity:** If $f(x) \\geq 0$ on $[a, b]$, then:

@academic[formula_callout:Comparison Properties
$$\\int_a^b f(x)\\, dx \\geq 0$$]@

**Monotonicity:** If $f(x) \\leq g(x)$ on $[a, b]$, then:

@academic[formula_callout:Comparison Property (Integrals)
$$f(x) \\leq g(x) \\text{ on } [a, b] \\implies \\int_a^b f(x)\\, dx \\leq \\int_a^b g(x)\\, dx$$
/calculus/formulas#comparison_property_integrals]@

**Bounding:** If $m \\leq f(x) \\leq M$ on $[a, b]$, then:

@academic[formula_callout:Bounding Property (Integrals)
$$m \\leq f(x) \\leq M \\text{ on } [a, b] \\implies m(b - a) \\leq \\int_a^b f(x)\\, dx \\leq M(b - a)$$
/calculus/formulas#bounding_property_integrals]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

@academic[fact,aside:true,width:35%:$\\pi$ falls just short of $\\frac{22}{7}$
$\\int_0^1 \\frac{x^4(1 - x)^4}{1 + x^2}\\, dx = \\frac{22}{7} - \\pi$. Since $\\frac{1}{2} \\leq \\frac{1}{1 + x^2} \\leq 1$ on $[0, 1]$, monotonicity traps this integral between $\\frac{1}{1260}$ and $\\frac{1}{630}$, so $\\pi$ is smaller than $\\frac{22}{7}$, but only just.]@

These properties enable estimation when exact computation is difficult or impossible.

Comparison can also settle questions that do not look like questions about area. If a number can be written as the integral of an integrand whose sign is known, the sign of the number follows at once, and bounding the integrand from above and below tells how large the number is. The work lies in finding such an integral; checking the inequalities is usually easy.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Summary: All Integration Rules at a Glance`,
    content: `
The rules covered in the sections above fall into three groups — algebraic rules of linearity, properties of the interval of integration, and the Fundamental Theorem in its two parts — capped by the comparison properties that govern inequalities. The master reference below collects every rule on this page in one table, with a third column flagging whether each applies to both definite and indefinite integrals or to definite integrals only. Use it as a single-glance reminder while working problems; each row points back to the section above where the rule is derived and discussed.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Common Pitfalls`,
    content: `
Five mistakes cause most wrong answers when these rules are applied. Each is marked where it happens in the sections above. Here each is worked through in full, with the wrong and the right working side by side.

**Splitting a product like a sum**

The sum rule splits an integral over $+$ and $-$. The same split is applied to a product: each factor is integrated separately and the results are multiplied.

Wrong working: $\\int x \\cdot x\\, dx = \\left(\\int x\\, dx\\right)\\left(\\int x\\, dx\\right) = \\frac{x^2}{2} \\cdot \\frac{x^2}{2} = \\frac{x^4}{4} + C$.

Right working: multiply first, $x \\cdot x = x^2$, then $\\int x^2\\, dx = \\frac{x^3}{3} + C$.

Why it happens: integrals split over sums, and the pattern is extended by analogy. Derivatives do not split over products either: $(fg)' = f'g + fg'$, not $f'g'$.

How to check: differentiate. $\\left(\\frac{x^4}{4}\\right)' = x^3$, not $x^2$; $\\left(\\frac{x^3}{3}\\right)' = x^2$.

**Pulling a variable out of the integral**

The constant multiple rule moves a number out of the integral. A factor that depends on $x$ is moved out the same way, and only the rest is integrated.

Wrong working: $\\int x \\cos x\\, dx = x \\int \\cos x\\, dx = x \\sin x + C$.

Right working: the factor $x$ changes with $x$, so it has to stay inside. This integral needs [integration by parts](!/calculus/integrals/techniques), which gives $x \\sin x + \\cos x + C$.

Why it happens: in $\\int c \\cdot f(x)\\, dx$ the constant stands in front of the function, just where a variable factor would stand, and the condition that $c$ does not change with $x$ is easy to overlook.

How to check: differentiate. $(x \\sin x)' = \\sin x + x \\cos x$, which has an extra $\\sin x$. $(x \\sin x + \\cos x)' = \\sin x + x \\cos x - \\sin x = x \\cos x$.

**Not splitting where the formula changes**

An integrand whose formula changes inside the interval, such as $|x|$ on $[-1, 2]$, is integrated with one antiderivative across the whole interval.

Wrong working: treat $|x|$ as $x$, so $\\int_{-1}^2 |x|\\, dx = \\frac{x^2}{2}\\Big|_{-1}^2 = 2 - \\frac{1}{2} = \\frac{3}{2}$.

Right working: $|x| = -x$ on $[-1, 0]$ and $|x| = x$ on $[0, 2]$. By additivity, $\\int_{-1}^0 (-x)\\, dx + \\int_0^2 x\\, dx = \\frac{1}{2} + 2 = \\frac{5}{2}$.

Why it happens: for positive $x$ the absolute value changes nothing, so the formula for positive $x$ is used everywhere.

How to check: the graph of $|x|$ on $[-1, 2]$ encloses two triangles with the axis, of areas $\\frac{1}{2} \\cdot 1 \\cdot 1 = \\frac{1}{2}$ and $\\frac{1}{2} \\cdot 2 \\cdot 2 = 2$, total $\\frac{5}{2}$. The wrong working also treats $\\int_{-1}^0 x\\, dx = -\\frac{1}{2}$ as part of the integral of $|x|$, a negative piece for an integrand that is never negative.

**Subtracting the lower limit in Part 1**

The derivative of an accumulation function $\\int_a^x f(t)\\, dt$ is written as $f(x) - f(a)$, as if Part 1 also produced a difference of endpoint values.

Wrong working: $\\frac{d}{dx}\\int_1^x t^2\\, dt = x^2 - 1^2 = x^2 - 1$.

Right working: $\\int_1^x t^2\\, dt = \\frac{x^3}{3} - \\frac{1}{3}$. The second term is a constant, with derivative $0$, so $\\frac{d}{dx}\\int_1^x t^2\\, dt = x^2$. The lower limit does not appear in the answer.

Why it happens: Part 2 always produces a difference $F(b) - F(a)$, and the habit of subtracting something at the lower limit carries over to Part 1.

How to check: changing the lower limit only shifts the accumulation function by a constant, so it cannot change the derivative. With $a = 0$, $\\int_0^x t^2\\, dt = \\frac{x^3}{3}$, whose derivative is again $x^2$.

**Subtracting in the wrong order**

In Part 2 the antiderivative is evaluated at both endpoints, but the subtraction is done the wrong way round: the value at the upper limit is taken away from the value at the lower limit.

Wrong working: $\\int_1^3 x^2\\, dx = F(1) - F(3) = \\frac{1}{3} - \\frac{27}{3} = -\\frac{26}{3}$. That is the value of $\\int_3^1 x^2\\, dx$, the integral with its limits reversed.

Right working: $\\int_1^3 x^2\\, dx = F(3) - F(1) = \\frac{27}{3} - \\frac{1}{3} = \\frac{26}{3}$.

Why it happens: the lower limit is read first, as in $[1, 3]$, so it is often evaluated first and ends up first in the subtraction.

How to check: the sign. $x^2 \\geq 0$ on $[1, 3]$, so by nonnegativity the integral cannot be negative. The bounding property gives the size: between $1 \\cdot 2 = 2$ and $9 \\cdot 2 = 18$.
`,
    before: ``,
    after: ``,
    link: ``
  }
};



const introContent = {
  id: `intro`,
  title: `The Algebra of Integrals`,
  content: `
Integration obeys algebraic rules that mirror those of differentiation. Sums split, constants factor out, and intervals combine. These properties transform complex integrals into manageable pieces.

The deepest result is the Fundamental Theorem of Calculus, which bridges the two faces of integration. Part 1 says differentiation undoes integration. Part 2 says definite integrals can be computed via antiderivatives:

@academic[formula_callout:Fundamental Theorem of Calculus, Part 2
$$\\int_a^b f(x)\\, dx = F(b) - F(a)$$]@

This theorem converts area computation—a limiting process involving infinite sums—into simple evaluation of an antiderivative at two points. It explains why mastering indefinite integration unlocks definite integration as well.
`
};


// FAQ pass: all eight originals named their own h2 — sum/difference,
// constant multiple, additivity, reversing limits, FTC Parts 1 and 2, the
// inverse relationship, and comparison. Kept the hub's deferred claim on
// the Fundamental Theorem as a single unified question, since the page
// splits it across three headings and none of them serves that query.
// The rest are consequences the headings state without explaining — note
// the linearity question states what linearity does NOT cover, which the
// two linearity sections never say. Piecewise integration is owned by the
// evaluating page, whose h2 names it outright.
const faqQuestions = {
  obj1: {
    question: "What is the Fundamental Theorem of Calculus?",
    answer: "It comes in two parts, and together they say differentiation and integration undo each other. Part 1: differentiating an accumulation function returns the integrand, d/dx ∫ₐˣ f(t) dt = f(x). Part 2: if F′ = f, then ∫ₐᵇ f(x) dx = F(b) − F(a). Part 1 guarantees antiderivatives exist; Part 2 turns area into arithmetic on two endpoint values.",
    sectionId: "7"
  },
  obj2: {
    question: "Does every continuous function have an antiderivative?",
    answer: "Yes. Part 1 of the Fundamental Theorem builds one directly: for continuous f, the accumulation function F(x) = ∫ₐˣ f(t) dt satisfies F′ = f. The catch is that existence does not mean you can write it down. Functions like e^(−x²) have perfectly good [antiderivatives](!/calculus/definitions#antiderivative) that no combination of elementary functions expresses.",
    sectionId: "5"
  },
  obj3: {
    question: "Why does reversing the limits of integration flip the sign?",
    answer: "Because the Riemann sum runs in the opposite direction. Going from a to b, each subinterval width Δx is positive; going from b to a, the same widths come out negative, so every term in the sum changes sign and so does the total. The same reasoning gives ∫ₐᵃ f(x) dx = 0: no interval, no accumulation.",
    sectionId: "4"
  },
  obj4: {
    question: "Can you split the integral of a product into two integrals?",
    answer: "No. Linearity covers sums and constant multiples only: ∫[f + g] = ∫f + ∫g and ∫cf = c∫f. There is no matching rule for products or quotients — ∫fg is not ∫f · ∫g, and ∫(f/g) is not ∫f ÷ ∫g. A product needs a technique such as integration by parts or substitution instead.",
    sectionId: "1"
  },
  obj5: {
    question: "How can you estimate an integral without computing it?",
    answer: "Bound the integrand. If m ≤ f(x) ≤ M on [a, b], then m(b − a) ≤ ∫ₐᵇ f(x) dx ≤ M(b − a) — the integral is trapped between the areas of two rectangles. Comparison works the same way: if f ≤ g on the interval then ∫f ≤ ∫g, so a function you can integrate bounds one you cannot.",
    sectionId: "8"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Integration Rules",
    "description": "Master integration rules: sum, difference, constant multiple, additivity over intervals, the Fundamental Theorem of Calculus (Parts 1 & 2), and comparison properties.",
    "url": "https://www.learnmathclass.com/calculus/integrals/rules",
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
      "name": "Integration Rules"
    },
    "teaches": [
      "Sum and difference rules for integrals",
      "Constant multiple and linearity rules",
      "Additivity over intervals and reversing limits",
      "Fundamental Theorem of Calculus Part 1",
      "Fundamental Theorem of Calculus Part 2",
      "Comparison and bounding properties",
      "Master reference table of integration rules"
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
        "name": "Integration Rules",
        "item": "https://www.learnmathclass.com/calculus/integrals/rules"
      }
    ]
  }
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const rbBars = Array.from({ length: 30 }, (_, i) => { const x = 1 + (i + 0.5) * 3 / 30; return { from: 0, to: Math.sqrt(x), color: 'f', dx: x / 5 * 388 }; });
  const fpBounds = { kind: 'pieces', svgTitle: 'sqrt x on [1, 4] lies between 1 and 2, so its integral 14/3 lies between 1 x 3 = 3 and 2 x 3 = 6', xRange: [0, 5], yRange: [-0.5, 2.8],
    pieces: [
      { fn: () => 2, from: 99, to: 99, ends: [null, null], color: 'r', ghost: [[1, 4]], label: { text: 'M = 2: box area 6', x: 2.5, y: 2, pos: 'n' } },
      { fn: () => 1, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[1, 4]], label: { text: 'm = 1: box area 3', x: 2.5, y: 1, pos: 's' } },
      { fn: Math.sqrt, from: 0, to: 4.8, ends: [null, null], color: 'f', label: { text: 'y = √x', x: 4.4, y: Math.sqrt(4.4), pos: 'se' } },
    ],
    yBars: rbBars,
    vlines: [{ x: 1 }, { x: 4 }],
    notes: [{ x: 0.1, y: 2.55, text: '3 ≤ area under √x on [1, 4] = 14/3 ≤ 6', pos: 'e', color: 'r' }],
    caption: 'm(b − a) ≤ integral ≤ M(b − a): the area sits between two boxes' };
  const demoUnits = {
    ftc1: demoUnitFrame({
      svg: functionFTCDiagrams.cubic,
      caption: 'F(x) = &#8747;&#8320;&#710;x t&#179; dt with x = 2: F&#8242;(2) = f(2) = 8',
      text: 'The accumulation function is the upper curve; at the right edge x = 2 its slope equals the height of the integrand there, 8. Nudging x to the right adds a thin strip of area whose height is f(x) and whose width is the nudge, so the rate at which area accumulates is f(x) itself. Move the edge and compare the slope above with the height below on the',
      href: '/calculus/visual-tools/fundamental-theorem',
      linkText: 'fundamental theorem of calculus visualizer',
    }),
    bounds: demoUnitFrame({
      svg: renderFunctionPlotV4(fpBounds),
      caption: 'Bounding an integral between two boxes',
      text: 'On [1, 4] the function &#8730;x stays between m = 1 and M = 2. The shaded area under the curve therefore contains the box of height 1 over the interval, area 1 &#183; 3 = 3, and fits inside the box of height 2, area 2 &#183; 3 = 6. So 3 &#8804; &#8747;&#8321;&#8308; &#8730;x dx &#8804; 6 before any antiderivative is found; the exact value is 14/3 &#8776; 4.67.',
    }),
  };

  return {
  props: {
    demoUnits,
    sectionsContent,
    introContent,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Integration Rules & Fundamental Theorem | Learn Math Class",
      description: "Master integration rules: sum, difference, constant multiple, additivity over intervals, the Fundamental Theorem of Calculus (Parts 1 & 2), and comparison properties.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/rules",
      name: "Integration Rules"
    },
  }
}

   }

export default function RulesPage({seoData, sectionsContent, introContent, obj7Table, summaryTable, faqQuestions, schemas, demoUnits}) {

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
                  <div key={'unit-ftc1'} dangerouslySetInnerHTML={{ __html: demoUnits.ftc1 }} />,
          `Part 1 is the statement that accumulating and differentiating undo each other.`,
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
          `@academic[punchline:Because differentiation and integration undo each other, every derivative formula read backwards is an integration formula.]@`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'unit-bounds'} dangerouslySetInnerHTML={{ __html: demoUnits.bounds }} />,
          `Splitting [1, 4] and bounding each piece separately would tighten both estimates.`,
          `@academic[punchline:An integral that cannot be computed can still be trapped between integrals that can.]@`,
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
    {
        id:'pitfalls',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Integration Rules FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Integration Rules</h1>
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