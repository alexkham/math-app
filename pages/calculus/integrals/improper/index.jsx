
// tables-optimized: v4 | 2026-05-24 | 3 tables (obj3 aggregation, obj5 comparison, obj8 summary capstone)
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
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import functionLimitDiagrams from '@/app/components/functions/limit/functionLimitDiagrams'
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){
const keyWords = [
  "improper integrals",
  "improper integral convergence",
  "improper integral divergence",
  "infinite limits integration",
  "unbounded integrand",
  "p-test improper integrals",
  "comparison test integrals",
  "limit comparison test",
  "integral to infinity",
  "vertical asymptote integral",
  "improper integral examples",
  "convergent improper integral",
  "divergent improper integral",
  "evaluate improper integral"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj3 — aggregation: setup patterns for improper integrals (covers obj2 + obj3)
const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Improper feature</th>
      <th style="${tableHeaders.aggregation}">Setup as a limit</th>
      <th style="${tableHeaders.aggregation}">Convergence requirement</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Upper limit = ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>a</sub><sup>∞</sup> f(x) dx = lim<sub>b → ∞</sub> ∫<sub>a</sub><sup>b</sup> f(x) dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">single limit must exist and be finite</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Lower limit = −∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>−∞</sub><sup>b</sup> f(x) dx = lim<sub>a → −∞</sub> ∫<sub>a</sub><sup>b</sup> f(x) dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">single limit must exist and be finite</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Both limits infinite</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>−∞</sub><sup>∞</sup> f(x) dx = ∫<sub>−∞</sub><sup>c</sup> f + ∫<sub>c</sub><sup>∞</sup> f &nbsp;(any finite c)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">both pieces must converge independently</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Asymptote at left endpoint a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>a</sub><sup>b</sup> f(x) dx = lim<sub>t → a⁺</sub> ∫<sub>t</sub><sup>b</sup> f(x) dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">single one-sided limit must exist and be finite</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Asymptote at right endpoint b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>a</sub><sup>b</sup> f(x) dx = lim<sub>t → b⁻</sub> ∫<sub>a</sub><sup>t</sup> f(x) dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">single one-sided limit must exist and be finite</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Asymptote at interior point c</td>
      <td style="padding: 12px 15px; color: #34495e;">split at c: lim<sub>t → c⁻</sub> ∫<sub>a</sub><sup>t</sup> f &nbsp;+&nbsp; lim<sub>s → c⁺</sub> ∫<sub>s</sub><sup>b</sup> f</td>
      <td style="padding: 12px 15px; color: #34495e;">both one-sided limits must converge independently</td>
    </tr>
  </tbody>
</table>
`

// obj5 — comparison: the p-test convergence boundary
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Form</th>
      <th style="${tableHeaders.comparison} text-align: center;">p &gt; 1</th>
      <th style="${tableHeaders.comparison} text-align: center;">p = 1</th>
      <th style="${tableHeaders.comparison} text-align: center;">p &lt; 1</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">∫<sub>1</sub><sup>∞</sup> (1 / x<sup>p</sup>) dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">converges</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">diverges</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">diverges</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">∫<sub>0</sub><sup>1</sup> (1 / x<sup>p</sup>) dx</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold;">diverges</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold;">diverges</td>
      <td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold;">converges</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary capstone: tests for improper integral convergence
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Test</th>
      <th style="${tableHeaders.summary}">When to use</th>
      <th style="${tableHeaders.summary}">Conclusion</th>
      <th style="${tableHeaders.summary}">Example or benchmark</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Direct evaluation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an antiderivative is available</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exact value if the limit is finite; otherwise diverges</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>1</sub><sup>∞</sup> 1/x² dx = 1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">p-test at ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integrand behaves like 1/x<sup>p</sup> as x → ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">converges iff p &gt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>1</sub><sup>∞</sup> 1/x<sup>p</sup> dx (benchmark)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">p-test near 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integrand behaves like 1/x<sup>p</sup> as x → 0⁺</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">converges iff p &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>0</sub><sup>1</sup> 1/√x dx (p = 1/2)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Direct comparison</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f ≥ 0 and bounded above by convergent g, or below by divergent g</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f inherits the convergence behavior of the comparator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1/(x² + 1) &lt; 1/x² &nbsp;⇒&nbsp; ∫ 1/(x² + 1) converges</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Limit comparison</td>
      <td style="padding: 12px 15px; color: #34495e;">f, g &gt; 0 and lim<sub>x → ∞</sub> f/g = L with 0 &lt; L &lt; ∞</td>
      <td style="padding: 12px 15px; color: #34495e;">∫ f and ∫ g both converge or both diverge</td>
      <td style="padding: 12px 15px; color: #34495e;">x/(x³ + 5) ~ 1/x² &nbsp;⇒&nbsp; ∫ x/(x³ + 5) converges</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/integrals/improper ─────────────────────────────────────────

 
// formulas-optimized: v1 | 2026-06-09 | 3 callouts (obj2, obj3, obj5)
// Concept introduction (section 1) — template H, open question. Running
// instance: the area under 1/x² from 1 to infinity. Old obj1 text is kept in
// sectionsContent.obj1, unused; its three formula boxes and the unbounded demo
// frame with its line are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciApproachTable = ciTableOpen(['stop at b', 'area from 1 to b: 1 − 1/b', 'still missing']) +
  ciRow(['2', '0.5', '0.5']) +
  ciRow(['5', '0.8', '0.2'], { shade: true }) +
  ciRow(['10', '0.9', '0.1']) +
  ciRow(['100', '0.99', '0.01'], { shade: true }) +
  ciRow(['1000', '0.999', '0.001'], { last: true }) +
  '</tbody></table>'
const ciTwinTable = ciTableOpen(['stop at b', 'under 1/x²: 1 − 1/b', 'under 1/x: ln b']) +
  ciRow(['10', '0.9', '2.30']) +
  ciRow(['100', '0.99', '4.61'], { shade: true }) +
  ciRow(['1000', '0.999', '6.91']) +
  ciRow(['10⁶', '0.999999', '13.82'], { shade: true, last: true, color: '#a4243b', cols: [2] }) +
  '</tbody></table>'

const sectionsContent = {
  // ─── /calculus/integrals/improper ─────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Improper Integral](!/calculus/definitions#improper_integral) — infinite interval or unbounded integrand, evaluated as a limit
- [Definite Integral](!/calculus/definitions#definite_integral) — improper integrals extend the definite integral framework
- [Bounds of Integration](!/calculus/definitions#bounds_of_integration) — one or both bounds may be $\\pm\\infty$
- [Limit](!/calculus/definitions#limit) — convergence or divergence determined by whether the limit exists`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `What Makes an Integral Improper?`,
    content: `
An integral is improper if it involves:

**Infinite limits of integration:** The interval extends to $\\infty$ or $-\\infty$

@academic[formula_callout:What Makes an Integral Improper?
$$\\int_1^{\\infty} \\frac{1}{x^2}\\, dx$$]@

**Unbounded integrand:** The function has a vertical asymptote within or at the boundary of the interval

@academic[formula_callout:What Makes an Integral Improper?
$$\\int_0^1 \\frac{1}{\\sqrt{x}}\\, dx$$]@

Both conditions can occur simultaneously. The integral

@academic[formula_callout:What Makes an Integral Improper?
$$\\int_0^{\\infty} \\frac{1}{\\sqrt{x}(1 + x)}\\, dx$$]@

has an infinite upper limit and an unbounded integrand at $x = 0$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Infinite Limits of Integration`,
    content: `
Replace the infinite limit with a finite variable and take a limit.

**Type 1:** Upper limit infinite

@academic[formula_callout:Improper Integral (Infinite Limits)
$$\\int_a^{\\infty} f(x)\\, dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\, dx$$
/calculus/formulas#improper_integral_infinite_limits]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

**Type 2:** Lower limit infinite

@academic[formula_callout:Infinite Limits of Integration
$$\\int_{-\\infty}^b f(x)\\, dx = \\lim_{a \\to -\\infty} \\int_a^b f(x)\\, dx$$]@

**Type 3:** Both limits infinite

@academic[formula_callout:Infinite Limits of Integration
$$\\int_{-\\infty}^{\\infty} f(x)\\, dx = \\int_{-\\infty}^c f(x)\\, dx + \\int_c^{\\infty} f(x)\\, dx$$]@

@academic[pitfall,aside:true,width:35%:Running both ends out together
Using one variable for both ends gives $\\lim_{R \\to \\infty} \\int_{-R}^{R} \\frac{2x}{1 + x^2}\\, dx = 0$. Split at $c = 0$ instead: $\\int_0^b \\frac{2x}{1 + x^2}\\, dx = \\ln(1 + b^2) \\to \\infty$, so the integral diverges.
[Read more](!#pitfalls)]@

Both integrals must converge independently. The choice of $c$ is arbitrary—any finite value works.

Splitting turns one integral with two infinite ends into two integrals with one infinite end each: a Type 2 integral on $(-\\infty, c]$ and a Type 1 integral on $[c, \\infty)$. Moving $c$ shifts area from one piece to the other, which changes the two pieces but not whether they converge, and not what they add up to.
`,
    before: ``,
    after: ``,
    link: ``
  },
  notation: {
    title: `Improper Integral Notation`,
    lead: `A symbol that quietly means a limit, the scaffold that makes the limit visible, and the verdict vocabulary that comes with it.`,
    inherited: `$\\int_a^b$ and its parts — [definite integrals](!/calculus/integrals/definite#2); $\\infty$ and $\\lim = \\infty$ — [limits at infinity](!/calculus/limits/infinity#notation); one-sided arrows — [one-sided limits](!/calculus/limits/one-sided).`,
    entries: [
      {
        id: 'infinity-bound',
        tex: `$\\int_a^{\\infty} f(x)\\, dx$`,
        read: `The integral from a to infinity`,
        means: `$\\infty$ in the bound is not a point — the whole symbol is **defined** as $\\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx$, the scaffold of **Infinite Limits of Integration** above. The compact form hides the limit; the definition is the limit.`,
        cases: `Lower bound $-\\infty$ mirrors it. Both bounds infinite — split at an arbitrary $c$, and **each half must converge on its own**.`,
        alsoWritten: `$\\int_a^{+\\infty}$, with the sign spelled out — matching the signed-infinity tradition of [limits at infinity](!/calculus/limits/infinity#notation).`,
        confusedWith: `The symmetric limit $\\lim_{R \\to \\infty} \\int_{-R}^{R}$ — Cauchy's principal value, written $\\mathrm{PV}\\!\\int$. Not the same object: $\\int_{-\\infty}^{\\infty} x\\,dx$ diverges, while its principal value is $0$. Tying the two ends to one variable changes the definition.`,
      },
      {
        id: 'limit-scaffold',
        tex: `$\\lim\\limits_{t \\to b^{-}} \\int_a^t f(x)\\, dx$`,
        read: `The limit, as t approaches b from below, of the integral from a to t`,
        means: `The scaffold for an unbounded integrand: the bad endpoint is replaced by a variable that approaches it **from inside the interval** — the [one-sided](!/calculus/limits/one-sided) superscript carries the direction. Nothing in $\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ announces impropriety; the integrand has to be inspected, then the scaffold written.`,
        cases: `Asymptote at the left endpoint — $t \\to a^{+}$; at the right — $t \\to b^{-}$; at an interior $c$ — two scaffolds with **independent** letters $t$ and $s$, as in **Discontinuous Integrands** below.`,
        alsoWritten: `$\\varepsilon$-style: $\\lim_{\\varepsilon \\to 0^{+}} \\int_a^{b-\\varepsilon}$, common in analysis texts, where the small excision is named directly.`,
        confusedWith: `One letter for both halves of an interior split. That ties the two limits together — a hidden principal value again — and can declare a divergent integral finite.`,
      },
      {
        id: 'convergence-verdicts',
        tex: `converges · diverges · $\\int < \\infty$`,
        read: `The integral converges; the integral diverges`,
        means: `Verdicts about the defining limit, as in **Convergence vs Divergence** below. Only after “converges” is the equation form $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx = 1$ legitimate — the value **is** the limit.`,
        cases: `Divergence comes in two species: $= \\infty$, borrowing the equals-abuse of [infinite limits](!/calculus/limits/infinity#notation), or by oscillation — $\\int_0^{\\infty} \\sin x\\,dx$ — where no verdict value exists at all.`,
        alsoWritten: `$\\int_a^{\\infty} |f| < \\infty$ — the analyst's shorthand for “converges absolutely”, an inequality doing the work of a sentence.`,
        confusedWith: `“Diverges” with “equals infinity”. Every $= \\infty$ diverges; not every divergence is an $\\infty$ — the oscillating case fails without ever growing.`,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/integrals`,
    parentLabel: `Integrals`,
  },
 obj3: {
    title: `Discontinuous Integrands`,
    content: `
When $f$ has a vertical asymptote at $c$ within $[a, b]$, split the integral and use limits.

**Asymptote at left endpoint:**

@academic[formula_callout:Discontinuous Integrands
$$\\int_a^b f(x)\\, dx = \\lim_{t \\to a^+} \\int_t^b f(x)\\, dx$$]@

**Asymptote at right endpoint:**

@academic[formula_callout:Discontinuous Integrands
$$\\int_a^b f(x)\\, dx = \\lim_{t \\to b^-} \\int_a^t f(x)\\, dx$$]@

**Asymptote at interior point:**

@academic[formula_callout:Discontinuous Integrands
$$\\int_a^b f(x)\\, dx = \\lim_{t \\to c^-} \\int_a^t f(x)\\, dx + \\lim_{s \\to c^+} \\int_s^b f(x)\\, dx$$]@

@academic[formula_callout:Improper Integral (Discontinuous Integrand)
$$\\int_a^b f(x)\\, dx = \\lim_{t \\to b^-} \\int_a^t f(x)\\, dx \\quad \\text{when } f \\text{ has an asymptote at } b$$
/calculus/formulas#improper_integral_discontinuous_integrand]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Missing an asymptote inside the interval
Evaluating $\\int_{-1}^{1} \\frac{1}{x^2}\\, dx$ straight through gives $\\left[-\\frac{1}{x}\\right]_{-1}^{1} = -2$, a negative value for a positive integrand. Split at $0$: $\\int_s^1 \\frac{1}{x^2}\\, dx = \\frac{1}{s} - 1 \\to \\infty$ as $s \\to 0^+$, so the integral diverges.
[Read more](!#pitfalls)]@

Both limits must exist independently.

The interior case is the one the notation does not announce: both endpoints are ordinary numbers, and the asymptote shows only when the integrand is checked at every point between them. Once it is found at $c$, cutting the interval there turns each piece into an endpoint case, with its own variable and its own one-sided limit.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Convergence vs Divergence`,
    content: `
An improper integral **converges** if the defining limit exists and is finite. It **diverges** if the limit is infinite or fails to exist.

**Convergent example:**

@academic[formula_callout:Convergence vs Divergence
$$\\int_1^{\\infty} \\frac{1}{x^2}\\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_1^b = \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + 1\\right) = 1$$]@

**Divergent example:**

@academic[formula_callout:Convergence vs Divergence
$$\\int_1^{\\infty} \\frac{1}{x}\\, dx = \\lim_{b \\to \\infty} [\\ln x]_1^b = \\lim_{b \\to \\infty} \\ln b = \\infty$$]@

@academic[pitfall,aside:true,width:35%:Taking a vanishing integrand as enough
Concluding convergence from $f(x) \\to 0$ fails for $\\frac{1}{\\sqrt{x}}$: it tends to $0$, but $\\int_1^b \\frac{1}{\\sqrt{x}}\\, dx = 2\\sqrt{b} - 2 \\to \\infty$. So $\\int_1^{\\infty} \\frac{1}{\\sqrt{x}}\\, dx$ diverges.
[Read more](!#pitfalls)]@

Convergence depends on how fast the integrand decays. The $1/x^2$ decays fast enough; $1/x$ does not.

How fast is measured against powers of $x$. At $x = 100$, $\\frac{1}{x^2} = 0.0001$ while $\\frac{1}{x} = 0.01$, a hundred times larger, and the ratio between them is $x$ itself, so the gap keeps widening as $x$ grows. The p-test in the next section turns this comparison into a rule.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `The p-Test`,
    content: `
The integrals of $1/x^p$ serve as benchmarks.

**At infinity:**

@academic[formula_callout:p-Test for Improper Integrals
$$\\int_1^{\\infty} \\frac{1}{x^p}\\, dx \\quad \\begin{cases} \\text{converges} & p > 1 \\\\ \\text{diverges} & p \\leq 1 \\end{cases}$$
/calculus/formulas#p-test_for_improper_integrals]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

**At zero:**

@academic[formula_callout:The p-Test
$$\\int_0^1 \\frac{1}{x^p}\\, dx \\quad \\begin{cases} \\text{converges} & p < 1 \\\\ \\text{diverges} & p \\geq 1 \\end{cases}$$]@

@academic[pitfall,aside:true,width:35%:Using the rule for infinity near zero
Calling $\\int_0^1 \\frac{1}{x^{3/2}}\\, dx$ convergent because $p = \\frac{3}{2} > 1$ uses the wrong half of the test. $\\int_t^1 x^{-3/2}\\, dx = \\frac{2}{\\sqrt{t}} - 2 \\to \\infty$ as $t \\to 0^+$, so it diverges.
[Read more](!#pitfalls)]@

The boundary case $p = 1$ always diverges—$\\int 1/x\\, dx = \\ln|x|$, which is unbounded both as $x \\to \\infty$ and as $x \\to 0^+$.

The two halves of the test point in opposite directions because the trouble sits at opposite ends. On $[1, \\infty)$ a larger $p$ makes $\\frac{1}{x^p}$ smaller, so the tail is thinner. On $(0, 1]$ a larger $p$ makes $\\frac{1}{x^p}$ larger, so the spike near $0$ is taller.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Comparison Test`,
    content: `
Compare an unknown integral to one with known behavior.

**Direct comparison:** For $f(x) \\geq 0$ and $g(x) \\geq 0$:

If $f(x) \\leq g(x)$ and $\\int g$ converges, then $\\int f$ converges.

If $f(x) \\geq g(x)$ and $\\int g$ diverges, then $\\int f$ diverges.

@academic[example:Example
Does $\\int_1^{\\infty} \\frac{1}{x^2 + 1}\\, dx$ converge?

Since $\\dfrac{1}{x^2 + 1} < \\dfrac{1}{x^2}$ and $\\int_1^{\\infty} \\dfrac{1}{x^2}\\, dx$ converges, the given integral converges by comparison.]@

@academic[fact,aside:true,width:35%:Finite volume, infinite surface area
Spinning $y = \\frac{1}{x}$ for $x \\geq 1$ about the $x$-axis gives a horn of volume $\\pi \\int_1^{\\infty} \\frac{dx}{x^2} = \\pi$. Its surface integrand $\\frac{2\\pi}{x}\\sqrt{1 + \\frac{1}{x^4}}$ lies above $\\frac{2\\pi}{x}$, so by comparison its surface area is infinite (Torricelli, 1644).]@

The second half of the test runs the other way. To show that an integral diverges, look for a smaller integrand whose integral is already known to diverge, usually $\\frac{1}{x}$ or another power with $p \\leq 1$.

@academic[example:Example
For example, $\\sqrt{x^2 + 1} > x$, so $\\frac{\\sqrt{x^2 + 1}}{x^2} > \\frac{1}{x}$ on $[1, \\infty)$, and $\\int_1^{\\infty} \\frac{\\sqrt{x^2 + 1}}{x^2}\\, dx$ diverges by comparison with $\\int_1^{\\infty} \\frac{1}{x}\\, dx$.]@

Nothing here needs an antiderivative. The square root never has to be integrated: one inequality between the integrands settles the verdict, as long as it holds for every $x \\geq 1$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Limit Comparison Test`,
    content: `
When direct comparison is awkward, use limits.

For $f(x) > 0$ and $g(x) > 0$, if:

@academic[formula_callout:Limit Comparison Test
$$\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = L \\quad \\text{where } 0 < L < \\infty$$]@

then $\\int f$ and $\\int g$ both converge or both diverge.

@academic[example:Example
Does $\\int_1^{\\infty} \\frac{x}{x^3 + 5}\\, dx$ converge?

Compare to $g(x) = 1/x^2$:

$$\\lim_{x \\to \\infty} \\frac{x/(x^3 + 5)}{1/x^2} = \\lim_{x \\to \\infty} \\frac{x^3}{x^3 + 5} = 1$$

Since $\\int_1^{\\infty} 1/x^2\\, dx$ converges, so does the given integral.]@

@academic[fact,aside:true,width:35%:Converging only by cancellation
$\\int_0^{\\infty} \\frac{\\sin x}{x}\\, dx = \\frac{\\pi}{2}$, yet $\\int_0^{\\infty} \\frac{|\\sin x|}{x}\\, dx$ diverges. Each arch of $|\\sin x|$ from $k\\pi$ to $(k + 1)\\pi$ adds at least $\\frac{2}{(k + 1)\\pi}$, and these add up like $1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots$; only the changing signs keep the first integral finite.]@

Both comparison tests are stated for integrands that stay positive. Their verdicts rest on area piling up, and positive area can only pile up. An integrand that changes sign has positive and negative pieces that can partly cancel, so the tests are applied to $|f|$ instead: if $\\int_a^{\\infty} |f(x)|\\, dx$ converges, then $\\int_a^{\\infty} f(x)\\, dx$ converges too, and the integral is said to converge absolutely. For an integrand that never changes sign this adds nothing new, since then $|f|$ is $f$ or $-f$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Summary: Tests for Improper Integral Convergence`,
    content: `
Determining whether an improper integral converges or diverges typically uses one of a small set of standard tests. The table below collects them in one place, pairing each test with the kind of integrand it suits, the conclusion it produces, and a worked benchmark from the sections above. Read the &quot;When to use&quot; column first when scanning an unfamiliar integral; the right row points directly to the test that settles convergence.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Common Pitfalls`,
    content: `
Five mistakes cause most wrong verdicts on improper integrals. Four of them are marked where they happen in the sections above; the fifth is the one-way rule that the section on the comparison test warns about. Here each is worked through in full, with the wrong and the right working side by side.

**Running both ends out together**

An integral over the whole real line is evaluated with one variable at both ends, $\\int_{-R}^{R}$, and $R$ is sent to $\\infty$. For an odd integrand the two halves cancel at every $R$, and the result looks like a convergent value.

Wrong working: $\\int_{-R}^{R} \\dfrac{2x}{1 + x^2}\\, dx = \\left[\\ln(1 + x^2)\\right]_{-R}^{R} = \\ln(1 + R^2) - \\ln(1 + R^2) = 0$, so $\\int_{-\\infty}^{\\infty} \\dfrac{2x}{1 + x^2}\\, dx = 0$.

Right working: split at $c = 0$. $\\int_0^{\\infty} \\dfrac{2x}{1 + x^2}\\, dx = \\lim_{b \\to \\infty} \\ln(1 + b^2) = \\infty$. One piece diverges, so the whole integral diverges, whatever the other piece does.

Why it happens: the symmetric limit is shorter and gives a tidy answer, and the rule that an odd function integrates to $0$ over $[-a, a]$ makes $0$ look right. That rule is for finite intervals; on the whole line, the definition asks for two separate limits.

How to check: let the two ends move at different speeds. $\\int_{-R}^{2R} \\dfrac{2x}{1 + x^2}\\, dx = \\ln\\dfrac{1 + 4R^2}{1 + R^2} \\to \\ln 4 \\approx 1.39$, not $0$. A value that depends on how the ends move is not a limit of the integral.

**Missing an asymptote inside the interval**

Both endpoints are ordinary numbers, but the integrand blows up between them. The antiderivative is evaluated at the endpoints as if the integral were proper.

Wrong working: $\\int_{-1}^{1} \\dfrac{1}{x^2}\\, dx = \\left[-\\dfrac{1}{x}\\right]_{-1}^{1} = -1 - 1 = -2$.

Right working: split at $0$. $\\int_{-1}^{1} \\dfrac{1}{x^2}\\, dx = \\lim_{t \\to 0^-} \\int_{-1}^{t} \\dfrac{1}{x^2}\\, dx + \\lim_{s \\to 0^+} \\int_{s}^{1} \\dfrac{1}{x^2}\\, dx$. The second piece is $\\lim_{s \\to 0^+} \\left(\\dfrac{1}{s} - 1\\right) = \\infty$, so the integral diverges.

Why it happens: the Fundamental Theorem of Calculus needs a continuous integrand on $[a, b]$, and that condition is easy to skip because the formula still produces a number.

How to check: look at the sign. $\\dfrac{1}{x^2}$ is positive at every $x \\neq 0$, so a negative result is impossible. Then check the integrand at every point of the interval: its denominator is $0$ at $x = 0$, inside $[-1, 1]$.

**Taking a vanishing integrand as enough**

The integrand tends to $0$ as $x \\to \\infty$, and the area under it is taken to be finite for that reason alone.

Wrong working: $\\dfrac{1}{\\sqrt{x}} \\to 0$ as $x \\to \\infty$, so $\\int_1^{\\infty} \\dfrac{1}{\\sqrt{x}}\\, dx$ converges.

Right working: $\\int_1^b x^{-1/2}\\, dx = \\left[2\\sqrt{x}\\right]_1^b = 2\\sqrt{b} - 2 \\to \\infty$, so the integral diverges. The p-test gives the same verdict, since $p = \\frac{1}{2} \\leq 1$.

Why it happens: every convergent example on $[1, \\infty)$ has an integrand that shrinks to $0$, so shrinking looks like the reason for convergence. It is only part of it; the integrand must shrink fast enough.

How to check: compute the area up to a large $b$. At $b = 10000$ it is already $2 \\cdot 100 - 2 = 198$ and still growing.

**Using the rule for infinity near zero**

The p-test condition for $[1, \\infty)$, $p > 1$, is applied to an integral on $[0, 1]$, where the condition is reversed.

Wrong working: $\\int_0^1 \\dfrac{1}{x^{3/2}}\\, dx$ converges because $p = \\frac{3}{2} > 1$.

Right working: $\\int_t^1 x^{-3/2}\\, dx = \\left[-2x^{-1/2}\\right]_t^1 = -2 + \\dfrac{2}{\\sqrt{t}} \\to \\infty$ as $t \\to 0^+$, so the integral diverges. Near zero, $\\int_0^1 \\dfrac{1}{x^p}\\, dx$ converges only for $p < 1$.

Why it happens: "converges for $p > 1$" is the version met first and remembered, often without the interval it belongs to.

How to check: ask where the trouble is. At infinity the integrand must be small, and a larger $p$ makes it smaller. Near $0$ the integrand is large, and a larger $p$ makes it larger: at $x = 0.01$, $x^{-3/2} = 1000$ while $x^{-1/2} = 10$.

**Comparing in the wrong direction**

The integrand lies below a divergent integrand, and the integral is declared divergent. Direct comparison gives no verdict in that case.

Wrong working: on $[1, \\infty)$, $\\dfrac{1}{x^2 + 1} < \\dfrac{1}{x}$, and $\\int_1^{\\infty} \\dfrac{1}{x}\\, dx$ diverges, so $\\int_1^{\\infty} \\dfrac{1}{x^2 + 1}\\, dx$ diverges.

Right working: compare with $\\dfrac{1}{x^2}$ instead. $\\dfrac{1}{x^2 + 1} < \\dfrac{1}{x^2}$ and $\\int_1^{\\infty} \\dfrac{1}{x^2}\\, dx$ converges, so the integral converges. Its value is $\\lim_{b \\to \\infty} (\\arctan b - \\arctan 1) = \\dfrac{\\pi}{2} - \\dfrac{\\pi}{4} = \\dfrac{\\pi}{4}$.

Why it happens: the test has two halves, and being smaller than something infinite sounds as if it should say something.

How to check: before concluding, read the inequality. To prove convergence, $f$ must lie below a convergent integrand; to prove divergence, above a divergent one. Below a divergent integrand, or above a convergent one, decides nothing.
`,
    before: ``,
    after: ``,
    link: ``
  }
};


const introContent = {
  id: `intro`,
  title: `Integrating Beyond Bounds`,
  content: `
Standard definite integrals require finite intervals and bounded integrands. Improper integrals remove these restrictions, extending integration to infinite intervals and functions with vertical asymptotes.

The key idea: replace the problematic bound or point with a variable, compute the resulting proper integral, then take a limit. If the limit exists and is finite, the improper integral converges to that value. If not, it diverges.

Some infinite regions have finite area. The region under $1/x^2$ from $1$ to $\\infty$ has area exactly $1$. Other infinite regions have infinite area—the region under $1/x$ from $1$ to $\\infty$ diverges. The distinction matters throughout mathematics and physics.
`
};



// FAQ pass: all seven originals named their own h2 — what makes an integral
// improper, infinite limits, discontinuous integrands, convergence vs
// divergence, the p-test, comparison, limit comparison. That settles the
// hub's deferred "What are improper integrals?": the h2 answers it, so no
// page needs the entry. Replaced with the traps — impropriety you have to
// notice, limits that must not be tied together, and the two divergences.
const faqQuestions = {
  obj1: {
    question: "How do you know an integral is improper if it looks normal?",
    answer: "Inspect the integrand, because nothing in the notation warns you. ∫₀¹ (1/√x) dx looks like an ordinary definite integral, but the integrand blows up at x = 0, so it is improper and needs a limit. Applying the Fundamental Theorem straight to it happens to work here; on a divergent example it would produce a confident, wrong number.",
    sectionId: "notation"
  },
  obj2: {
    question: "Why must an integral from −∞ to ∞ be split into two separate limits?",
    answer: "Because tying both ends to one variable changes the definition. Split at any finite c and require each half to converge on its own. The symmetric version, letting −R and R run out together, is Cauchy's principal value — a different object. The integral of x over the whole line diverges, yet its principal value is 0.",
    sectionId: "notation"
  },
  obj3: {
    question: "Does an integral that diverges always equal infinity?",
    answer: "No. Divergence comes in two species. One is growth without bound, written = ∞ by the same equals-sign abuse used for [infinite limits](!/calculus/limits/infinity#notation). The other is oscillation: ∫₀^∞ sin x dx never settles and never grows, so no value exists at all. Every integral equal to infinity diverges, but not every divergent integral is infinite.",
    sectionId: "notation"
  },
  obj4: {
    question: "Why do the two sides of an interior asymptote need separate limits?",
    answer: "Because one variable for both sides secretly cancels the two infinities against each other. With an asymptote at c inside [a, b], write the left limit as t → c⁻ and the right as s → c⁺, using independent letters. Both must converge on their own; a shared letter can declare a divergent integral finite.",
    sectionId: "3"
  },
  obj5: {
    question: "Why does the p-test flip between infinity and zero?",
    answer: "Because the danger sits at opposite ends. Out at infinity, ∫₁^∞ (1/xᵖ) dx converges when p > 1 — the integrand has to decay fast enough. Near zero, ∫₀¹ (1/xᵖ) dx converges when p < 1 — the blow-up has to be mild enough. Larger p helps at infinity and hurts at zero. At p = 1 both diverge.",
    sectionId: "5"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Improper Integrals",
    "description": "Learn improper integrals: infinite limits, unbounded integrands, convergence vs divergence, the p-test, comparison test, and limit comparison test for determining convergence.",
    "url": "https://www.learnmathclass.com/calculus/integrals/improper",
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
      "name": "Improper Integrals"
    },
    "teaches": [
      "What makes an integral improper",
      "Handling infinite limits of integration",
      "Handling discontinuous integrands",
      "Convergence vs divergence of improper integrals",
      "The p-test for 1/xᵖ integrals",
      "Comparison and limit comparison tests",
      "Master reference of convergence tests"
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
        "name": "Improper Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals/improper"
      }
    ]
  }
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const imBars = Array.from({ length: 40 }, (_, i) => { const x = 1 + (i + 0.5) * 5 / 40; return { from: 0, to: 1 / (x * x + 1), color: 'f', dx: x / 6 * 388 }; });
  const fpAreaSoFar = { kind: 'pieces', svgTitle: 'Area under 1/x^2 from 1 to b is 1 - 1/b and levels off at 1; area under 1/x is ln b and keeps growing', xRange: [0, 20], yRange: [0, 3.5], xStep: 2, xLetter: 'b',
    pieces: [
      { fn: () => 1, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[0, 20]], label: { text: 'limit 1', x: 19.5, y: 1, pos: 'nw' } },
      { fn: (b) => 1 - 1 / b, from: 1, to: 20, ends: ['closed', null], color: 'f', label: { text: 'under 1/x²: 1 − 1/b', x: 11, y: 1 - 1 / 11, pos: 'se' } },
      { fn: Math.log, from: 1, to: 20, ends: ['closed', null], color: 'r', label: { text: 'under 1/x: ln b', x: 9, y: Math.log(9), pos: 'nw' } },
    ],
    notes: [{ x: 0.4, y: 3.2, text: 'area from 1 to b, as b grows', pos: 'e' }],
    caption: '1/x² totals 1; 1/x totals ln b, which never stops growing' };
  const fpCompare = { kind: 'pieces', svgTitle: '1/(x^2 + 1) lies below 1/x^2 on [1, infinity); the larger area is 1, so the smaller area is finite', xRange: [0, 6], yRange: [0, 1.2], xLetter: 'x',
    pieces: [
      { fn: (x) => 1 / (x * x), from: 0.95, to: 6, ends: [null, null], color: 'r', label: { text: '1/x²: total area 1', x: 1.6, y: 1 / 2.56, pos: 'ne' } },
      { fn: (x) => 1 / (x * x + 1), from: 1, to: 6, ends: ['closed', null], color: 'f', label: { text: '1/(x² + 1)', x: 3.2, y: 1 / 11.24, pos: 'n' } },
    ],
    yBars: imBars,
    vlines: [{ x: 1 }],
    notes: [{ x: 2.6, y: 0.95, text: 'smaller integrand, area at most 1', pos: 'e', color: 'f' }],
    caption: 'Trapped under a convergent integral, the smaller one converges too' };
  // Concept introduction figures (section 1), one running instance: 1/x² from 1 on.
  const fpCiTail = { kind: 'pieces', svgTitle: 'y = 1/x^2 from x = 1 onward never reaches the axis', xRange: [0, 10], yRange: [0, 1.2],
    pieces: [
      { fn: (x) => 1 / (x * x), from: 1, to: 10, ends: ['closed', null], color: 'f', label: { text: 'y = 1/x²', x: 1.5, y: 1 / 2.25, pos: 'ne' } },
    ],
    vlines: [{ x: 1, label: 'x = 1' }],
    notes: [{ x: 4.5, y: 0.5, text: 'the region runs on to the right forever', pos: 'e', color: 'r' }],
    caption: 'Ever thinner, but it never ends' };

  const conceptIntroFigures = {
    tail: renderFunctionPlotV4(fpCiTail),
    approachTable: ciApproachTable,
    twinTable: ciTwinTable,
  };

  const demoUnits = {
    unbounded: demoUnitFrame({
      svg: functionLimitDiagrams['infinite-pos'],
      caption: '1/x&#178; near x = 0: the integrand is unbounded',
      text: 'Both probes, at &#8722;0.5 and 0.5, read 4, and moving them inward sends the values to infinity: the curve has a vertical asymptote at 0, so no rectangle of finite height can cover the region beside it. An integral across this point must stop short at t and let t approach 0 in a limit. Squeeze the probes toward the asymptote on the',
      href: '/calculus/visual-tools/limit',
      linkText: 'limit explorer',
    }),
    areaSoFar: demoUnitFrame({
      svg: renderFunctionPlotV4(fpAreaSoFar),
      caption: 'Area so far, as the upper limit grows',
      text: 'For each upper limit b, the curves show the area from 1 to b. Under 1/x&#178; the area is 1 &#8722; 1/b: it climbs quickly and then flattens against the dashed level 1, so &#8747;&#8321;^&#8734; dx/x&#178; converges to 1. Under 1/x the area is ln b: it slows down but never levels off, so &#8747;&#8321;^&#8734; dx/x diverges. The integrands differ only in how fast they decay.',
    }),
    compare: demoUnitFrame({
      svg: renderFunctionPlotV4(fpCompare),
      caption: 'Comparison: trapped below a finite area',
      text: 'The section&#8217;s 1/(x&#178; + 1) on [1, &#8734;) lies below 1/x&#178; at every x. The shaded region under the smaller curve is therefore contained in the region under the larger one, whose total area is 1. A region inside a finite area is finite, so &#8747;&#8321;^&#8734; dx/(x&#178; + 1) converges; its value is &#960;/4.',
    }),
  };

  const improperTestTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Three tests for improper integrals',
    preface: 'Most improper integrals cannot be evaluated directly. These three tests decide convergence by comparing with integrals whose behaviour is known.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Start from the p-test',
    conclusion: 'The p-test supplies the benchmarks; comparison and limit comparison carry a benchmark\'s verdict over to the integral you have.',
    root: { name: 'Convergence tests', sub: 'for improper integrals' },
    children: [
      { id: 'p', name: 'p-test', symbol: '$\\int_1^\\infty \\frac{1}{x^p}\\,dx$', items: [
        { label: 'Verdict', text: 'converges exactly when $p > 1$' } ] },
      { id: 'comp', name: 'Comparison', items: [
        { label: 'How', text: 'bound by a known integral' } ], flag: true, warn: 'works in one direction only' },
      { id: 'lim', name: 'Limit comparison', items: [
        { label: 'How', text: 'ratio limit finite and positive' }, { label: 'Verdict', text: 'both integrals behave the same' } ] },
    ],
  };

  return {
  props: {
    improperTestTree,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj3Table,
    obj5Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Improper Integrals: Convergence & Tests | Learn Math Class",
      description: "Learn improper integrals: infinite limits, unbounded integrands, convergence vs divergence, the p-test, comparison test, and limit comparison test for determining convergence.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/improper",
      name: "Improper Integrals"
    },
  }
}
   }

export default function PageTemplate({improperTestTree, seoData, sectionsContent, introContent, obj3Table, obj5Table, summaryTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template H (open question).
  const conceptIntro = {
    beats: [
      {
        id: 'question',
        lead: `How much area lies under y = 1/x² from x = 1 onward, with no end?`,
        content: [
          `The region under the curve gets thinner and thinner but never stops. It is a fair question whether its total area is some finite number or simply infinite. Written as an integral, the question is`,
          `@academic[formula_callout:What Makes an Integral Improper?
$$\\int_1^{\\infty} \\frac{1}{x^2}\\, dx$$]@`,
        ],
        visual: ciSvg('tail'),
        caption: `The region starts at $x = 1$ and continues past every number on the axis.`,
      },
      {
        id: 'deadend',
        lead: `The definite integral, as defined so far, cannot answer it.`,
        content: [
          `A definite integral runs between two numbers, and $\\infty$ is not a number: there is no right-hand endpoint to evaluate an antiderivative at, and no finite interval to cut into rectangles. The same trouble appears when the interval is finite but the function is not — here the integrand blows up at $x = 0$:`,
          `@academic[formula_callout:What Makes an Integral Improper?
$$\\int_0^1 \\frac{1}{\\sqrt{x}}\\, dx$$]@`,
          `Both conditions can occur simultaneously. The integral`,
          `@academic[formula_callout:What Makes an Integral Improper?
$$\\int_0^{\\infty} \\frac{1}{\\sqrt{x}(1 + x)}\\, dx$$]@`,
          `has an infinite upper limit and an unbounded integrand at $x = 0$.`,
          <div key={'unit-unbounded'} dangerouslySetInnerHTML={{ __html: demoUnits.unbounded }} />,
        ],
      },
      {
        id: 'approach',
        kind: 'instance',
        lead: `Stopping at a finite point, and moving that point outward, gets close to an answer.`,
        content: [
          `Replace $\\infty$ by a number $b$. From $1$ to $b$ the integral is an ordinary one: $\\int_1^b \\frac{1}{x^2}\\, dx = 1 - \\frac{1}{b}$. Now push $b$ out.`,
          ciTable('approachTable'),
          `The area so far keeps growing, but by less and less, and what is still missing shrinks toward $0$. The total heads for $1$.`,
          `Both kinds of impropriety are handled the same way: replace the bad endpoint by a variable and take a limit.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `An [improper integral](!/calculus/definitions#improper_integral) is an integral over an infinite interval, or of a function that is unbounded on the interval. Its value is defined as the limit of ordinary definite integrals, for example $\\int_a^{\\infty} f(x)\\, dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\, dx$.`,
        footer: `It converges when that limit is a finite number and diverges otherwise. Here $\\int_1^{\\infty} \\frac{1}{x^2}\\, dx = 1$.`,
      },
      {
        id: 'kind',
        lead: `An improper integral is a number when it converges, and a verdict of divergence when it does not.`,
        content: `When the limit exists, the improper integral is one number — an infinitely long region with finite area, as here. When the limit does not exist, there is no number at all, only the statement that the integral diverges.`,
      },
      {
        id: 'caveat',
        tone: 'break',
        lead: `A table of values suggests an answer but does not prove it.`,
        content: [
          `Compare $\\frac{1}{x}$, a curve that looks almost the same.`,
          ciTable('twinTable'),
          `The second column also grows by less and less, and from a table alone it could pass for levelling off. It does not: $\\ln b$ grows without bound, so $\\int_1^{\\infty} \\frac{1}{x}\\, dx$ diverges. What settles the first column is algebra, not the table — $1 - \\frac{1}{b}$ really does tend to $1$. Deciding which case you are in, without a table, is what the rest of this page is about.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page defines each type precisely — infinite limits of integration and unbounded integrands — then gives the notation, the p-integral test, worked convergence and divergence, and the comparison tests that decide convergence without computing the integral.`,
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
        ]
    },
    {
        id:'notation',
        title:sectionsContent.notation.title,
        link:``,
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.notation.title}
            lead={sectionsContent.notation.lead}
            inherited={sectionsContent.notation.inherited}
            entries={sectionsContent.notation.entries}
            symbolsHref={sectionsContent.notation.symbolsHref}
            symbolsLabel={sectionsContent.notation.symbolsLabel}
            parentHref={sectionsContent.notation.parentHref}
            parentLabel={sectionsContent.notation.parentLabel}
            theme={'navy'}
          />,
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
          `@academic[punchline:Every trouble spot, an infinite end or an asymptote, gets its own limit, and the integral converges only if each one does.]@`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'unit-areaSoFar'} dangerouslySetInnerHTML={{ __html: demoUnits.areaSoFar }} />,
          `1/x is the boundary case p = 1 of the p-test: any power above 1 levels off.`,
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
          `@academic[punchline:For powers of $x$ the dividing line is $\\frac{1}{x}$: decay faster at infinity, or blow up slower at zero, and the area is finite.]@`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'unit-compare'} dangerouslySetInnerHTML={{ __html: demoUnits.compare }} />,
          `The test only works one way: lying below a divergent integral proves nothing.`,
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
          <DiagramFrame
            key={'obj8-diagram'}
            id="improper-convergence-tests-tree"
            title="Convergence tests for improper integrals"
            source="/calculus/integrals/improper"
          >
            <TopDownTree data={improperTestTree} />
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
        title:`Improper Integrals FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Improper Integrals</h1>
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