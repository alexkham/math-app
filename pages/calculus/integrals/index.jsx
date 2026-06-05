
// tables-optimized: v4 | 2026-05-24 | 4 tables (obj2 comparison, obj7 aggregation, obj8 aggregation, obj11 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  "integrals calculus",
  "integration",
  "definite integral",
  "indefinite integral",
  "antiderivative",
  "fundamental theorem of calculus",
  "integration techniques",
  "integration by parts",
  "substitution method",
  "improper integrals",
  "Riemann sum",
  "area under curve",
  "integration rules",
  "integral formulas",
  "accumulation"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj2 — comparison: definite vs indefinite integrals
const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Aspect</th>
      <th style="${tableHeaders.comparison}">Definite integral ∫<sub>a</sub><sup>b</sup> f(x) dx</th>
      <th style="${tableHeaders.comparison}">Indefinite integral ∫ f(x) dx</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Bounds of integration</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">present (a and b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">absent</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Result type</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a number</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a family of functions F(x) + C</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Geometric meaning</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">signed area between f and the x-axis on [a, b]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no fixed geometry — represents all antiderivatives</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Constant of integration</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cancels in F(b) − F(a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">essential — the &quot;+ C&quot;</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Typical use</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">accumulated quantity (distance, work, mass, probability)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">finding the function whose derivative is f</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Connection</td>
      <td style="padding: 12px 15px; color: #34495e;">evaluated via FTC: F(b) − F(a)</td>
      <td style="padding: 12px 15px; color: #34495e;">supplies the F used by FTC</td>
    </tr>
  </tbody>
</table>
`

// obj7 — aggregation: integration techniques
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Technique</th>
      <th style="${tableHeaders.aggregation}">What it reverses</th>
      <th style="${tableHeaders.aggregation}">Typical setup</th>
      <th style="${tableHeaders.aggregation}">Best when</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Substitution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">chain rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">let u = g(x); du = g&apos;(x) dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an inner function and its derivative both appear in the integrand</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Integration by parts</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">product rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ u dv = uv − ∫ v du</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integrand is a product of unrelated factors (e.g., x · eˣ, x · ln x)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Partial fractions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">addition of fractions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">decompose P(x)/Q(x) into simpler rational pieces</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integrand is a rational function with factorable denominator</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Trigonometric substitution</td>
      <td style="padding: 12px 15px; color: #34495e;">Pythagorean identities</td>
      <td style="padding: 12px 15px; color: #34495e;">x = a sin θ, a tan θ, or a sec θ depending on the radical</td>
      <td style="padding: 12px 15px; color: #34495e;">integrand contains √(a² − x²), √(a² + x²), or √(x² − a²)</td>
    </tr>
  </tbody>
</table>
`

// obj8 — aggregation: special integrals
const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 90%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Integrand</th>
      <th style="${tableHeaders.aggregation}">Antiderivative</th>
      <th style="${tableHeaders.aggregation}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x<sup>n</sup>&nbsp;&nbsp;(n ≠ −1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sup>n+1</sup> / (n+1) + C</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">power rule for integrals</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 / x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ln|x| + C</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">handles the n = −1 case excluded above</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">e<sup>x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e<sup>x</sup> + C</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">its own antiderivative</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−cos x + C</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sign flips relative to the derivative</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin x + C</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no sign change</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">1 / (1 + x²)</td>
      <td style="padding: 12px 15px; color: #34495e;">arctan x + C</td>
      <td style="padding: 12px 15px; color: #34495e;">reverses the derivative of arctan</td>
    </tr>
  </tbody>
</table>
`

// obj11 — summary capstone: integrals subtree navigation map
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Subtopic</th>
      <th style="${tableHeaders.summary}">Key idea</th>
      <th style="${tableHeaders.summary}">When you need it</th>
      <th style="${tableHeaders.summary}">Subpage</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Definite integrals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">signed area under a curve via limit of Riemann sums</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">computing an accumulated total over an interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/definite" style="${linkStyle}">definite</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Indefinite integrals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the family F(x) + C of antiderivatives of f</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">recovering a function from its derivative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/indefinite" style="${linkStyle}">indefinite</a></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Integration rules</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">linearity and the Fundamental Theorem of Calculus</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">splitting integrals and evaluating with antiderivatives</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/rules" style="${linkStyle}">rules</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Techniques</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">substitution, parts, partial fractions, trig substitution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the integrand does not match a known form directly</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/techniques" style="${linkStyle}">techniques</a></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Special integrals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard formulas worth memorizing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">recognizing common building-block patterns</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/special" style="${linkStyle}">special</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Improper integrals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integrals over infinite intervals or with unbounded integrands</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">interval is unbounded or integrand blows up</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/improper" style="${linkStyle}">improper</a></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Evaluating integrals</td>
      <td style="padding: 12px 15px; color: #34495e;">recognize, apply, verify by differentiating the result</td>
      <td style="padding: 12px 15px; color: #34495e;">working a concrete integral from start to finish</td>
      <td style="padding: 12px 15px; color: #34495e;"><a href="/calculus/integrals/evaluating" style="${linkStyle}">evaluating</a></td>
    </tr>
  </tbody>
</table>
`

const sectionsContent = {
  // ─── /calculus/integrals (hub) ────────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
## Indefinite

- [Antiderivative](!/calculus/definitions#antiderivative) — a function $F$ with $F'(x) = f(x)$
- [Indefinite Integral](!/calculus/definitions#indefinite_integral) — the family $F(x) + C$ of all antiderivatives

## Definite

- [Definite Integral](!/calculus/definitions#definite_integral) — accumulated signed area over $[a, b]$
- [Riemann Sum](!/calculus/definitions#riemann_sum) — rectangular approximation whose limit defines the integral
- [Bounds of Integration](!/calculus/definitions#bounds_of_integration) — lower and upper limits $a$, $b$
- [Signed Area](!/calculus/definitions#signed_area) — area above the axis minus area below
- [Average Value of a Function](!/calculus/definitions#average_value_of_a_function) — $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$

## Components

- [Integrand](!/calculus/definitions#integrand) — the function being integrated

## Extensions

- [Improper Integral](!/calculus/definitions#improper_integral) — infinite interval or unbounded integrand`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `The Idea of Accumulation`,
    content: `
Integration answers questions about totals. Given how fast something changes at each moment, what is the cumulative effect over an interval?

Consider velocity. If $v(t)$ gives your speed at time $t$, then the integral

$$\\int_a^b v(t)\\, dt$$

computes the total distance traveled from time $a$ to time $b$. The function $v(t)$ describes instantaneous rates; the integral accumulates those rates into a total.

This pattern appears throughout mathematics and science:

• Integrate force over distance to get work
• Integrate density over volume to get mass
• Integrate a probability density to get probability
• Integrate marginal cost to get total cost

The integral formalizes "continuous summation"—adding contributions that vary smoothly rather than in discrete chunks.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Two Types of Integrals`,
    content: `
The integral symbol carries two distinct meanings depending on context.

## Definite Integrals

$$\\int_a^b f(x)\\, dx$$

The limits $a$ and $b$ bound the region of integration. The result is a number representing accumulated quantity—area, volume, total change, or another aggregate measure.

## Indefinite Integrals

$$\\int f(x)\\, dx = F(x) + C$$

No limits appear. The result is a family of functions—all antiderivatives of $f(x)$, differing by an arbitrary constant $C$.

The same symbol serves both purposes. Context determines which interpretation applies: limits present means definite, limits absent means indefinite.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Notation and Terminology`,
    content: `
The integral notation carries specific meaning in each component.

The integral sign $\\int$ is an elongated S, standing for "sum." It originated with Leibniz, who conceived integration as summing infinitesimal pieces.

The integrand $f(x)$ is the function being integrated. It describes what is accumulated at each point.

The differential $dx$ indicates the variable of integration and represents an infinitesimal width. Together, $f(x)\\, dx$ represents an infinitesimal contribution to the total.

For definite integrals, the limits of integration $a$ and $b$ specify where accumulation begins and ends:

$$\\int_a^b f(x)\\, dx$$

The lower limit $a$ appears at the bottom of the integral sign, the upper limit $b$ at the top.

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Definite Integrals`,
    content: `
The [definite integral](!/calculus/integrals/definite) computes signed area—the area between a curve and the $x$-axis, with regions below the axis counted as negative.

$$\\int_a^b f(x)\\, dx$$

Positive where $f(x) > 0$, negative where $f(x) < 0$. The integral sums these signed contributions.

Rigorously, the definite integral arises as a limit of Riemann sums. Partition the interval $[a, b]$ into subintervals, approximate the area with rectangles, and take the limit as the rectangles become infinitely thin. This construction gives precise meaning to "area under a curve."
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/definite`
  },
  obj5: {
    title: `Indefinite Integrals`,
    content: `
The [indefinite integral](!/calculus/integrals/indefinite) reverses differentiation. If $F'(x) = f(x)$, then $F$ is an antiderivative of $f$, and we write:

$$\\int f(x)\\, dx = F(x) + C$$

The constant $C$ is essential. Since the derivative of any constant is zero, infinitely many functions share the same derivative. The "$+ C$" represents this entire family.

Finding antiderivatives is the core skill of indefinite integration. Unlike differentiation, which follows systematic rules, integration often requires insight, technique, and pattern recognition.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/indefinite`
  },
  obj6: {
    title: `Integration Rules`,
    content: `
[Integration rules](!/calculus/integrals/rules) provide the algebraic structure for computing integrals.

Linearity allows integrals to be split and scaled:

$$\\int [f(x) + g(x)]\\, dx = \\int f(x)\\, dx + \\int g(x)\\, dx$$

$$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$

The Fundamental Theorem of Calculus connects definite and indefinite integrals. If $F$ is any antiderivative of $f$:

$$\\int_a^b f(x)\\, dx = F(b) - F(a)$$

This theorem transforms the problem of computing areas into the problem of finding antiderivatives—a profound simplification.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/rules`
  },
  obj7: {
    title: `Integration Techniques`,
    content: `
Not every function yields to direct antidifferentiation. [Integration techniques](!/calculus/integrals/techniques) provide methods for transforming difficult integrals into manageable ones.

**Substitution** reverses the chain rule. Identify an inner function and its derivative, change variables, and integrate.

**Integration by parts** reverses the product rule:

$$\\int u\\, dv = uv - \\int v\\, du$$

**Partial fractions** decompose rational functions into simpler pieces. **Trigonometric substitution** handles integrals involving square roots of quadratics.

Choosing the right technique is an acquired skill—pattern recognition developed through practice.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/techniques`
  },
  obj8: {
    title: `Special Integrals`,
    content: `
Certain [special integrals](!/calculus/integrals/special) appear so frequently that memorizing them accelerates all subsequent work.

$$\\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

$$\\int \\frac{1}{x}\\, dx = \\ln|x| + C$$

$$\\int e^x\\, dx = e^x + C$$

$$\\int \\sin x\\, dx = -\\cos x + C \\qquad \\int \\cos x\\, dx = \\sin x + C$$

$$\\int \\frac{1}{1 + x^2}\\, dx = \\arctan x + C$$

These formulas serve as building blocks. Complex integrals often reduce to combinations of these standard forms.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/special`
  },
  obj9: {
    title: `Improper Integrals`,
    content: `
Standard definite integrals require finite intervals and bounded integrands. [Improper integrals](!/calculus/integrals/improper) extend integration beyond these constraints.

Integrals over infinite intervals:

$$\\int_1^{\\infty} \\frac{1}{x^2}\\, dx = \\lim_{b \\to \\infty} \\int_1^b \\frac{1}{x^2}\\, dx = 1$$

Integrals of unbounded functions:

$$\\int_0^1 \\frac{1}{\\sqrt{x}}\\, dx = \\lim_{a \\to 0^+} \\int_a^1 \\frac{1}{\\sqrt{x}}\\, dx = 2$$

An improper integral converges if the limit exists and is finite; otherwise it diverges. The distinction matters—some infinite regions have finite area, others do not.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/improper`
  },
  obj10: {
    title: `Evaluating Integrals`,
    content: `
[Evaluating integrals](!/calculus/integrals/evaluating) combines all the preceding ideas: recognize the form, apply appropriate techniques, and verify the result.

Start with direct antidifferentiation. If the integrand matches a known form, apply the formula. If not, consider substitution, parts, or other techniques.

For definite integrals, set up the problem correctly: identify bounds, express the integrand in terms of the integration variable, and apply the Fundamental Theorem.

Verification is simple: differentiate your answer. The derivative of the antiderivative should return the original integrand. This check catches algebraic errors and sign mistakes.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/evaluating`
  },
  obj11: {
    title: `Summary: A Map of the Integrals Subtree`,
    content: `
The seven subtopics covered in the sections above are different facets of the same underlying tool: recovering totals from rates, and reversing differentiation. The table below collects them in one place, pairing each subtopic with its key idea, the situation that calls for it, and a direct link to its dedicated page. Read it as a navigation map for the rest of this chapter — the row matching a given problem points to where to start.
`,
    before: ``,
    after: ``,
    link: ``
  }
};


const introContent = {
  id: "intro",
  title: `The Art of Accumulation`,
  content: `
Differentiation asks: given a quantity, how fast is it changing? Integration asks the reverse: given a rate of change, what is the total accumulated quantity? These two questions form the twin pillars of calculus.

The integral sign $\\int$ represents summation taken to its limit—adding infinitely many infinitely small pieces. When you integrate a velocity function, you recover distance traveled. When you integrate a density function, you recover total mass. The pattern repeats across physics, economics, and probability: rates become totals through integration.

Two distinct but related concepts share this notation. The definite integral

$$\\int_a^b f(x)\\, dx$$

computes a number—the signed area under a curve, the accumulated quantity between two bounds. The indefinite integral

$$\\int f(x)\\, dx$$

finds a function—the antiderivative whose derivative returns the original integrand. The Fundamental Theorem of Calculus reveals these as two faces of the same idea.
`
};


const faqQuestions = {
  obj1: {
    question: "What is integration in calculus?",
    answer: "Integration computes accumulated totals from rates of change. Given a velocity function, integrating yields total distance traveled. The integral formalizes continuous summation — adding infinitely many infinitesimal contributions to get a total.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the difference between definite and indefinite integrals?",
    answer: "A definite integral has bounds (a to b) and produces a number representing accumulated quantity. An indefinite integral has no bounds and produces a family of functions (antiderivatives) differing by a constant C.",
    sectionId: "2"
  },
  obj3: {
    question: "What is an antiderivative?",
    answer: "An antiderivative F(x) of f(x) is a function whose derivative equals f(x). The indefinite integral finds all antiderivatives, written as F(x) + C where C is an arbitrary constant representing the infinite family of solutions.",
    sectionId: "5"
  },
  obj4: {
    question: "What is the Fundamental Theorem of Calculus?",
    answer: "The Fundamental Theorem connects definite and indefinite integrals. If F is any antiderivative of f, then the definite integral from a to b equals F(b) - F(a). This transforms area computation into finding antiderivatives.",
    sectionId: "6"
  },
  obj5: {
    question: "What are the main integration techniques?",
    answer: "Key techniques include substitution (reversing chain rule), integration by parts (reversing product rule), partial fractions (decomposing rational functions), and trigonometric substitution (for square roots of quadratics).",
    sectionId: "7"
  },
  obj6: {
    question: "What are improper integrals?",
    answer: "Improper integrals extend integration to infinite intervals or unbounded functions. They are defined as limits: the integral converges if the limit exists and is finite, diverges otherwise. Some infinite regions have finite area.",
    sectionId: "9"
  },
  obj7: {
    question: "How do you verify an integral is correct?",
    answer: "Differentiate your answer. The derivative of the antiderivative should return the original integrand. This check catches algebraic errors and sign mistakes, since differentiation is more straightforward than integration.",
    sectionId: "10"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Integrals in Calculus",
    "description": "Master integrals: definite and indefinite integrals, antiderivatives, Fundamental Theorem of Calculus, integration techniques (substitution, parts, partial fractions), special integrals, and improper integrals.",
    "url": "https://www.learnmathclass.com/calculus/integrals",
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
      "name": "Integrals in Calculus"
    },
    "teaches": [
      "The concept of accumulation",
      "Definite vs indefinite integrals",
      "Integral notation and terminology",
      "Antiderivatives and the constant C",
      "Fundamental Theorem of Calculus",
      "Integration techniques",
      "Special integral formulas",
      "Improper integrals and convergence",
      "Navigation map of the integrals subtree"
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
    obj2Table,
    obj7Table,
    obj8Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Integrals: Definite, Indefinite & Techniques | Learn Math Class",
      description: "Master integrals: definite and indefinite integrals, antiderivatives, Fundamental Theorem of Calculus, integration techniques (substitution, parts, partial fractions), special integrals, and improper integrals.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals",
      name: "Integrals in Calculus"
    },
  }
}
   }

export default function IntegralsPage({seoData, sectionsContent, introContent, obj2Table, obj7Table, obj8Table, summaryTable, faqQuestions, schemas}) {

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
          <div key={'obj8-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj8Table }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Integrals</h1>
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