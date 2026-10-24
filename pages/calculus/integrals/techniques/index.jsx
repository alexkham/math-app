// tables-optimized: v4 | 2026-05-24 | 3 tables (obj4 aggregation, obj5 aggregation, obj8 summary capstone)
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
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){
const keyWords = [
  "integration techniques",
  "u-substitution",
  "integration by parts",
  "trigonometric integrals",
  "trigonometric substitution",
  "partial fractions integration",
  "how to integrate",
  "substitution method calculus",
  "LIATE rule",
  "integration methods",
  "advanced integration",
  "integrate sin cos powers",
  "rational function integration",
  "choosing integration technique"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj4 — aggregation: trig integral strategies by power pattern
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Power pattern</th>
      <th style="${tableHeaders.aggregation}">Strategy</th>
      <th style="${tableHeaders.aggregation}">Substitution</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Odd power of sin x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">save one sin x, rewrite the rest using sin²x = 1 − cos²x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">u = cos x, du = −sin x dx</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Odd power of cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">save one cos x, rewrite the rest using cos²x = 1 − sin²x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">u = sin x, du = cos x dx</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Both powers even</td>
      <td style="padding: 12px 15px; color: #34495e;">apply half-angle identities to lower the powers</td>
      <td style="padding: 12px 15px; color: #34495e;">none directly — reduce, then integrate term by term</td>
    </tr>
  </tbody>
</table>
`

// obj5 — aggregation: trigonometric substitutions by radical form
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Radical in integrand</th>
      <th style="${tableHeaders.aggregation}">Substitution</th>
      <th style="${tableHeaders.aggregation}">Radical simplifies to</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">√(a² − x²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = a sin θ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a cos θ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">√(a² + x²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = a tan θ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a sec θ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">√(x² − a²)</td>
      <td style="padding: 12px 15px; color: #34495e;">x = a sec θ</td>
      <td style="padding: 12px 15px; color: #34495e;">a tan θ</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary capstone: master technique reference with selection signal
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Technique</th>
      <th style="${tableHeaders.summary}">What it reverses</th>
      <th style="${tableHeaders.summary}">Recognize when…</th>
      <th style="${tableHeaders.summary}">Setup</th>
      <th style="${tableHeaders.summary}">Example trigger</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">u-substitution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">chain rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integrand contains a function and its derivative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">u = g(x), du = g&apos;(x) dx; rewrite and integrate in u</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ 2x cos(x²) dx</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Integration by parts</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">product rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">product of unrelated factors (poly · exp, poly · trig, log · poly)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ u dv = uv − ∫ v du; LIATE picks u</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ x eˣ dx</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric integrals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Pythagorean &amp; half-angle identities</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">powers and products of sin x, cos x (and tan, sec variants)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">save a factor; convert via identity; substitute u = sin x or cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ sin³ x dx</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric substitution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Pythagorean identity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integrand contains √(a² − x²), √(a² + x²), or √(x² − a²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = a sin θ, a tan θ, or a sec θ depending on the radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ 1 / √(1 − x²) dx</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Partial fractions</td>
      <td style="padding: 12px 15px; color: #34495e;">addition of rational fractions</td>
      <td style="padding: 12px 15px; color: #34495e;">rational function with a factorable denominator</td>
      <td style="padding: 12px 15px; color: #34495e;">decompose into A/(x − r) + B/(x − s) + … and integrate each piece</td>
      <td style="padding: 12px 15px; color: #34495e;">∫ 1 / (x² − 1) dx</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/integrals/techniques ───────────────────────────────────────


// formulas-optimized: v1 | 2026-06-09 | 2 callouts (obj2, obj3)
const sectionsContent = {
  // ─── /calculus/integrals/techniques ───────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Integrand](!/calculus/definitions#integrand) — the expression being transformed into a recognizable form
- [Indefinite Integral](!/calculus/definitions#indefinite_integral) — the target: find the antiderivative family
- [Definite Integral](!/calculus/definitions#definite_integral) — substitution in definite integrals requires converting bounds`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Why Techniques Are Needed`,
    content: `
Differentiation follows mechanical rules: the derivative of any elementary function can be computed by applying chain, product, and quotient rules systematically.

Integration has no such universal algorithm.

@academic[rule_theorem_plain:Some elementary functions have no elementary antiderivative.]@

Others have antiderivatives that are difficult to find without insight.

Techniques bridge this gap. They transform integrands into forms matching [known formulas](!/calculus/integrals/special). The transformation might involve changing variables, splitting products, or decomposing fractions—whatever reveals the underlying structure.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Substitution (u-Substitution)`,
    content: `
Substitution reverses the chain rule. If the integrand contains a function and its derivative, substitution simplifies.

**Method:** Let $u = g(x)$, so $du = g'(x)\\, dx$. Replace all $x$-expressions with $u$-expressions and integrate.

@academic[formula_callout:Substitution Rule
$$\\int f(g(x))\\, g'(x)\\, dx = \\int f(u)\\, du \\quad \\text{with } u = g(x)$$
/calculus/formulas#substitution_rule]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

@academic[example:Example

$$\\int 2x \\cos(x^2)\\, dx$$

Let $u = x^2$, so $du = 2x\\, dx$:

$$= \\int \\cos u\\, du = \\sin u + C = \\sin(x^2) + C$$]@

For definite integrals, convert the limits: when $x = a$, $u = g(a)$; when $x = b$, $u = g(b)$.

@academic[pitfall,aside:true,width:35%:Keeping the x-bounds after substituting
Evaluating $\\sin u$ from $0$ to $2$, the old $x$-bounds of $\\int_0^2 2x\\cos(x^2)\\, dx$, gives $\\sin 2 \\approx 0.909$. In $u = x^2$ the bounds are $0$ and $4$, and the integral is $\\sin 4 \\approx -0.757$.
[Read more](!#pitfalls)]@

The bounds of a definite integral are values of the variable of integration. In $\\int_0^2 2x\\cos(x^2)\\, dx$ the numbers $0$ and $2$ are values of $x$; after the substitution $u = x^2$ the integral runs over values of $u$, and the antiderivative $\\sin u$ is a function of $u$. Converting the bounds at the moment of substitution means the evaluation never has to return to $x$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  notation: {
    title: `Notation Inside the Techniques`,
    lead: `Substitution's paired equations, the four-slot ledger of parts, and the substitution that runs backwards — the bookkeeping is the technique.`,
    inherited: `The integral signs — [indefinite](!/calculus/integrals/indefinite#3) and [definite](!/calculus/integrals/definite#2); the algebra of $du$ — [differentials](!/calculus/derivatives/differentials#notation).`,
    entries: [
      {
        id: 'u-substitution-pair',
        tex: `$u = g(x)$, $\\; du = g'(x)\\,dx$`,
        read: `Let u equal g of x, so d u equals g prime of x, d x`,
        means: `A change of name recorded as two equations — and the second is real [differential](!/calculus/derivatives/differentials#notation) algebra, not ritual. Everything must convert: integrand, $dx$, all of it, as in **Substitution** above.`,
        cases: `In a definite integral the bounds convert too, and the transition is often labelled on the sign itself: $\\int_{x=a}^{x=b}$ becomes $\\int_{u=g(a)}^{u=g(b)}$ — after which there is no going back to $x$. The alternative workflow keeps the $x$-bounds and back-substitutes $u = g(x)$ before evaluating; both are legal, mixing them is not.`,
        alsoWritten: `$w$ or $t$ when $u$ is spoken for; the final return to $x$ is the “back-substitution” step.`,
        confusedWith: `A partial conversion. $\\int \\cos u \\,dx$ — one variable in the integrand, another in the differential — is meaningless; a leftover $x$ under a $du$ means the substitution was not completed.`,
      },
      {
        id: 'parts-ledger',
        tex: `$\\int u\\, dv = uv - \\int v\\, du$`,
        read: `The integral of u d v equals u v minus the integral of v d u`,
        means: `Parts **factors** the integrand into two slots: $u$, destined for differentiation, and $dv$, destined for integration — and $dv$ swallows the $dx$. The four-slot ledger $u, du, dv, v$ organises the whole computation in **Integration by Parts** below.`,
        cases: `Choosing $u$ follows LIATE — logarithmic, inverse trig, algebraic, trigonometric, exponential — a classroom mnemonic, not a theorem; it fails often enough to keep judgment in the loop.`,
        alsoWritten: `$\\int u\\,v'\\,dx = uv - \\int u'\\,v\\,dx$ — the prime form, standard in European texts, where the differential never appears bare.`,
        confusedWith: `Substitution's $u$. Same letter, different job: substitution's $u$ **renames the variable**; parts' $u$ **labels a factor** and $x$ remains the variable throughout. Writing $dv$ without its $dx$ is the commonest ledger slip.`,
      },
      {
        id: 'reverse-substitution',
        tex: `$x = a\\sin\\theta$`,
        read: `Let x equal a sine theta`,
        means: `Substitution running backwards: the **old** variable is expressed through the new one, opposite in direction to $u = g(x)$. The radical collapses through a Pythagorean identity, as in **Trigonometric Substitution** below.`,
        cases: `Three radical shapes, three choices: $\\sqrt{a^2 - x^2} \\to x = a\\sin\\theta$; $\\sqrt{a^2 + x^2} \\to x = a\\tan\\theta$; $\\sqrt{x^2 - a^2} \\to x = a\\sec\\theta$. The answer returns to $x$ through $\\theta = \\arcsin\\frac{x}{a}$ and a reference triangle.`,
        alsoWritten: `Hyperbolic versions — $x = a\\sinh t$ — in analysis and European texts, trading the identity $1 - \\sin^2 = \\cos^2$ for $\\cosh^2 - \\sinh^2 = 1$.`,
        confusedWith: `The $u$-direction. Here the new variable is **not** a function of $x$ you can read off — inverting requires the [inverse trig functions](!/functions/inverse), and the domain restriction on $\\theta$ is what makes the inversion legal.`,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/integrals`,
    parentLabel: `Integrals`,
  },
obj3: {
    title: `Integration by Parts`,
    content: `
Integration by parts reverses the product rule:

@academic[formula_callout:Integration by Parts
$$\\int u\\, dv = uv - \\int v\\, du$$
/calculus/formulas#integration_by_parts]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

**Method:** Identify factors $u$ and $dv$ in the integrand. Differentiate $u$ to get $du$; integrate $dv$ to get $v$. Apply the formula.

@academic[example:Example

$$\\int x e^x\\, dx$$

Let $u = x$ and $dv = e^x\\, dx$. Then $du = dx$ and $v = e^x$:

$$= xe^x - \\int e^x\\, dx = xe^x - e^x + C = e^x(x - 1) + C$$]@

@academic[pitfall,aside:true,width:35%:Dropping the minus sign
Adding the second integral instead of subtracting it gives $\\int x e^x\\, dx = xe^x + e^x + C$, whose derivative is $xe^x + 2e^x$. Subtracting gives $xe^x - e^x + C$, whose derivative is $xe^x$.
[Read more](!#pitfalls)]@

The formula comes from integrating the product rule $(uv)' = u'v + uv'$ and solving for $\\int u\\, dv$, which is why the second integral is subtracted. In the example, $u = x$ and $v = e^x$ give $uv = xe^x$, and the integral left over, $\\int v\\, du = \\int e^x\\, dx$, is simple enough to finish at once.

The formula accepts any split of the integrand, even an odd one. For $\\int \\frac{1}{x}\\, dx$, take $u = \\frac{1}{x}$ and $dv = dx$; then $du = -\\frac{1}{x^2}\\, dx$ and $v = x$, and the formula gives $\\int \\frac{1}{x}\\, dx = x \\cdot \\frac{1}{x} - \\int x \\left(-\\frac{1}{x^2}\\right) dx = 1 + \\int \\frac{1}{x}\\, dx$. The split is legal, but it only returns the integral it started from.

@academic[fact,aside:true,width:35%:Parts seems to prove $0 = 1$
Subtracting $\\int \\frac{1}{x}\\, dx$ from both sides of $\\int \\frac{1}{x}\\, dx = 1 + \\int \\frac{1}{x}\\, dx$ leaves $0 = 1$. Nothing is broken: each indefinite integral stands for the whole family $\\ln|x| + C$, and two members of that family may differ by $1$.]@

**Choosing the first factor:** LIATE guides selection—Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. Earlier types typically make better choices for $u$.

The two splits above show what the choice decides. In both, the formula moves the derivative from $v$ to $u$: with $u = x$ in $\\int x e^x\\, dx$ the integral left behind is $\\int e^x\\, dx$, simpler than the original, while $u = \\frac{1}{x}$ in $\\int \\frac{1}{x}\\, dx$ leaves the original integral unchanged. A choice is good when the factor chosen as $u$ becomes simpler after differentiation and $dv$ can still be integrated.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Trigonometric Integrals`,
    content: `
Integrals involving powers of sine and cosine require strategic use of identities.

**Odd power of sine:** Save one $\\sin x$, convert remaining $\\sin^2 x = 1 - \\cos^2 x$, substitute $u = \\cos x$.

**Odd power of cosine:** Save one $\\cos x$, convert remaining $\\cos^2 x = 1 - \\sin^2 x$, substitute $u = \\sin x$.

**Both powers even:** Use half-angle identities:

@academic[formula_callout:Trigonometric Integrals
$$\\sin^2 x = \\frac{1 - \\cos 2x}{2} \\qquad \\cos^2 x = \\frac{1 + \\cos 2x}{2}$$]@

@academic[example:Example

$$\\int \\sin^3 x\\, dx = \\int \\sin x (1 - \\cos^2 x)\\, dx$$

Let $u = \\cos x$:

$$= -\\int (1 - u^2)\\, du = -u + \\frac{u^3}{3} + C = -\\cos x + \\frac{\\cos^3 x}{3} + C$$]@

@academic[pitfall,aside:true,width:35%:Losing the sign of du
Taking $du = \\sin x\\, dx$ for $u = \\cos x$ gives $\\int \\sin^3 x\\, dx = \\cos x - \\frac{\\cos^3 x}{3} + C$, whose derivative is $-\\sin^3 x$. With $du = -\\sin x\\, dx$ the answer is $-\\cos x + \\frac{\\cos^3 x}{3} + C$.
[Read more](!#pitfalls)]@

The saved factor $\\sin x$ is what makes the substitution possible: together with $dx$ it is matched against $du$ for $u = \\cos x$, and the remaining even power becomes a polynomial in $u$. For an odd power of cosine the roles swap, and $\\cos x\\, dx$ is matched against $du$ for $u = \\sin x$. In both cases the answer can be checked by differentiating it back to the integrand.
`,
    before: ``,
    after: ``,
    link: ``
  },
obj5: {
    title: `Trigonometric Substitution`,
    content: `
Square roots of quadratics suggest trigonometric substitutions.

**For** $\\sqrt{a^2 - x^2}$**:** Let $x = a\\sin\\theta$, so $\\sqrt{a^2 - x^2} = a\\cos\\theta$

**For** $\\sqrt{a^2 + x^2}$**:** Let $x = a\\tan\\theta$, so $\\sqrt{a^2 + x^2} = a\\sec\\theta$

**For** $\\sqrt{x^2 - a^2}$**:** Let $x = a\\sec\\theta$, so $\\sqrt{x^2 - a^2} = a\\tan\\theta$

@academic[example:Example

$$\\int \\frac{1}{\\sqrt{1 - x^2}}\\, dx$$

Let $x = \\sin\\theta$, so $dx = \\cos\\theta\\, d\\theta$ and $\\sqrt{1 - x^2} = \\cos\\theta$:

$$= \\int \\frac{\\cos\\theta}{\\cos\\theta}\\, d\\theta = \\int d\\theta = \\theta + C = \\arcsin x + C$$]@

@academic[pitfall,aside:true,width:35%:Replacing dx with dθ
Swapping $dx$ for $d\\theta$ without the factor $\\cos\\theta$ leaves $\\int \\frac{d\\theta}{\\cos\\theta} = \\ln|\\sec\\theta + \\tan\\theta| + C$, a different function. With $dx = \\cos\\theta\\, d\\theta$ the cosines cancel and the answer is $\\arcsin x + C$.
[Read more](!#pitfalls)]@

The substitution $x = \\sin\\theta$ is applied to the whole integral. It rewrites the radical $\\sqrt{1 - x^2}$ as $\\cos\\theta$, and differentiating it gives the differential $dx$ in terms of $d\\theta$; the integrand in $\\theta$ is built from both. At the end, $\\theta = \\arcsin x$ returns the answer to the original variable.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Partial Fractions`,
    content: `
Rational functions—polynomials divided by polynomials—decompose into simpler fractions.

**Method:** Factor the denominator. Write the fraction as a sum of terms with linear or irreducible quadratic denominators. Solve for coefficients. Integrate each term.

@academic[example:Example

$$\\int \\frac{1}{x^2 - 1}\\, dx = \\int \\frac{1}{(x-1)(x+1)}\\, dx$$

Decompose:

$$\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$$

Solving gives $A = 1/2$, $B = -1/2$:

$$= \\frac{1}{2}\\int \\frac{1}{x-1}\\, dx - \\frac{1}{2}\\int \\frac{1}{x+1}\\, dx = \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$$]@

@academic[pitfall,aside:true,width:35%:Taking the log of the whole denominator
Writing $\\ln|x^2 - 1| + C$ for $\\int \\frac{1}{x^2 - 1}\\, dx$ gives a function whose derivative is $\\frac{2x}{x^2 - 1}$, not $\\frac{1}{x^2 - 1}$. The decomposition gives $\\frac{1}{2}\\ln|x - 1| - \\frac{1}{2}\\ln|x + 1| + C$.
[Read more](!#pitfalls)]@

Each simple fraction integrates on its own: a constant over a linear factor $x - r$ gives that constant times $\\ln|x - r|$, because the derivative of $x - r$ is $1$. The two logarithms can be combined at the end into $\\frac{1}{2}\\ln\\left|\\frac{x - 1}{x + 1}\\right| + C$, a single term with the same derivative.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Choosing the Right Technique`,
    content: `
Pattern recognition guides technique selection.

**Substitution:** Look for a function paired with its derivative. Expressions like $f(g(x)) \\cdot g'(x)$ signal substitution with $u = g(x)$.

**Parts:** Products of different function types—polynomial times exponential, polynomial times trigonometric, logarithm times polynomial.

**Trigonometric integrals:** Powers of $\\sin x$ and $\\cos x$, products of trigonometric functions.

**Trigonometric substitution:** Square roots of $a^2 - x^2$, $a^2 + x^2$, or $x^2 - a^2$.

**Partial fractions:** Rational functions with factorable denominators.

@academic[fact,aside:true,width:35%:One substitution for every trig fraction
With $t = \\tan\\frac{x}{2}$, $\\sin x = \\frac{2t}{1 + t^2}$, $\\cos x = \\frac{1 - t^2}{1 + t^2}$ and $dx = \\frac{2\\, dt}{1 + t^2}$. Every rational expression in $\\sin x$ and $\\cos x$ becomes a rational function of $t$, so partial fractions can always finish it.]@

Multiple techniques often combine. A problem might require substitution followed by parts, or partial fractions followed by a trigonometric integral.

Some combinations are planned from the start. An integrand such as $\\frac{1}{2 + \\cos x}$ is a fraction built from $\\cos x$, with no odd power to save and no radical to replace, so none of the trigonometric patterns above fits it directly. A substitution can still turn it into a rational function of a new variable, and partial fractions take over from there.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Summary: The Techniques at a Glance`,
    content: `
The techniques covered above all share the same goal—reshape the integrand until it matches a [known formula](!/calculus/integrals/special)—but each one reverses a different differentiation rule and is triggered by a different signal in the integrand. The table below collects all five in one place, pairing each technique with what it reverses, the pattern that signals it, the standard setup, and a canonical example. Read the &quot;Recognize when…&quot; column first when scanning an unfamiliar integral; read across the row once a match is found.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Common Pitfalls`,
    content: `
Five mistakes cause many of the wrong answers when these techniques are carried out. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Keeping the x-bounds after substituting**

In a definite integral, the integrand and $dx$ are rewritten in $u$, but the bounds are left as they were. The antiderivative in $u$ is then evaluated at numbers that are values of $x$.

Wrong working: with $u = x^2$, $\\int_0^2 2x\\cos(x^2)\\, dx$ becomes $\\int_0^2 \\cos u\\, du = \\sin 2 - \\sin 0 \\approx 0.909$.

Right working: when $x = 0$, $u = 0$; when $x = 2$, $u = 4$. So the integral is $\\int_0^4 \\cos u\\, du = \\sin 4 - \\sin 0 \\approx -0.757$.

Why it happens: the bounds are written once, at the start, and are read as part of the integral sign rather than as values of a particular variable.

How to check: take the other route. Back-substitute to get the antiderivative $\\sin(x^2)$ and evaluate it at the $x$-bounds: $\\sin(2^2) - \\sin(0^2) = \\sin 4$. The two routes must agree.

**Dropping the minus sign**

In integration by parts, $uv - \\int v\\, du$ is written with a plus sign, so the second integral is added instead of subtracted.

Wrong working: $\\int x e^x\\, dx = xe^x + \\int e^x\\, dx = xe^x + e^x + C$.

Right working: $\\int x e^x\\, dx = xe^x - \\int e^x\\, dx = xe^x - e^x + C = e^x(x - 1) + C$.

Why it happens: the product rule has a plus sign, and the parts formula is remembered by its shape. The minus only appears when $\\int v\\, du$ is moved to the other side of the integrated product rule.

How to check: differentiate the answer. $(xe^x + e^x)' = xe^x + 2e^x$, which is not the integrand; $(xe^x - e^x)' = e^x + xe^x - e^x = xe^x$, which is.

**Losing the sign of du**

With $u = \\cos x$, the differential is taken as $du = \\sin x\\, dx$ instead of $du = -\\sin x\\, dx$, and the whole answer comes out with the wrong sign.

Wrong working: $\\int \\sin x (1 - \\cos^2 x)\\, dx = \\int (1 - u^2)\\, du = u - \\frac{u^3}{3} + C = \\cos x - \\frac{\\cos^3 x}{3} + C$.

Right working: $\\sin x\\, dx = -du$, so the integral is $-\\int (1 - u^2)\\, du = -\\cos x + \\frac{\\cos^3 x}{3} + C$.

Why it happens: the derivative of $\\sin x$ is $\\cos x$ with no sign, and the same is expected the other way round.

How to check: on $[0, \\pi]$ the integrand $\\sin^3 x$ is never negative, so $\\int_0^\\pi \\sin^3 x\\, dx$ must be positive. The right answer gives $\\left(1 - \\frac{1}{3}\\right) - \\left(-1 + \\frac{1}{3}\\right) = \\frac{4}{3}$; the wrong one gives $-\\frac{4}{3}$.

**Replacing dx with dθ**

In a trigonometric substitution, the radical is rewritten in $\\theta$, but $dx$ is replaced by $d\\theta$ alone, without the factor that comes from differentiating $x = \\sin\\theta$.

Wrong working: $\\int \\frac{1}{\\sqrt{1 - x^2}}\\, dx = \\int \\frac{1}{\\cos\\theta}\\, d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C = \\ln\\left|\\frac{1 + x}{\\sqrt{1 - x^2}}\\right| + C$.

Right working: $dx = \\cos\\theta\\, d\\theta$, so $\\int \\frac{\\cos\\theta}{\\cos\\theta}\\, d\\theta = \\theta + C = \\arcsin x + C$.

Why it happens: in $u$-substitution the new differential is often just $du$, and the habit carries over to a substitution that runs the other way, where $x$ is the function of $\\theta$.

How to check: differentiate the answer in $x$. The wrong answer has derivative $\\frac{1}{1 - x^2}$, not $\\frac{1}{\\sqrt{1 - x^2}}$; at $x = 0.6$ these are $1.5625$ and $1.25$.

**Taking the log of the whole denominator**

The rule $\\int \\frac{1}{x}\\, dx = \\ln|x| + C$ is stretched to any denominator, so $\\frac{1}{x^2 - 1}$ is integrated straight to a logarithm of $x^2 - 1$ without being decomposed.

Wrong working: $\\int \\frac{1}{x^2 - 1}\\, dx = \\ln|x^2 - 1| + C$.

Right working: decompose first. $\\frac{1}{x^2 - 1} = \\frac{1/2}{x - 1} - \\frac{1/2}{x + 1}$, so the integral is $\\frac{1}{2}\\ln|x - 1| - \\frac{1}{2}\\ln|x + 1| + C$.

Why it happens: the rule $\\int \\frac{f'(x)}{f(x)}\\, dx = \\ln|f(x)| + C$ is remembered without its condition. It needs the derivative of the denominator in the numerator, here $2x$, and the numerator is $1$.

How to check: differentiate. $\\frac{d}{dx}\\ln|x^2 - 1| = \\frac{2x}{x^2 - 1}$, which at $x = 2$ is $\\frac{4}{3}$, while the integrand at $x = 2$ is $\\frac{1}{3}$.
`,
    before: ``,
    after: ``,
    link: ``
  }
};


const introContent = {
  id: `intro`,
  title: `Beyond Direct Formulas`,
  content: `
Most functions resist direct antidifferentiation. The integral of $e^{x^2}$ has no elementary formula. Even innocuous-looking expressions like $\\sqrt{1 + x^3}$ lack closed-form antiderivatives.

Integration techniques transform difficult integrals into tractable ones. Substitution reverses the chain rule. Integration by parts reverses the product rule. Partial fractions decompose rational functions. Trigonometric methods handle roots and powers.

No single algorithm covers all cases—unlike differentiation, which follows systematic rules. Success requires recognizing which technique applies and executing it correctly. This pattern-matching skill develops through practice.
`
};



// FAQ pass: all seven originals named their own h2 — why techniques exist,
// substitution, parts, trigonometric integrals, trig substitution, partial
// fractions, and choosing between them. That also settles the hub's
// deferred "What are the main integration techniques?": every technique has
// a heading, so no page needs the entry. Replaced with the execution traps,
// which live almost entirely in the notation section.
const faqQuestions = {
  obj1: {
    question: "Do you have to change the limits when you use u-substitution?",
    answer: "You have two legal options, and the only mistake is mixing them. Either convert the bounds — when x = a, u = g(a) — and finish entirely in u, never returning to x; or keep the original x-bounds, back-substitute u = g(x) to get the answer in x, and only then evaluate. Evaluating u-bounds against an x-expression is the error.",
    sectionId: "notation"
  },
  obj2: {
    question: "What does it mean if there's a leftover x after substituting?",
    answer: "It means the substitution is incomplete, and the expression is meaningless as written. Something like ∫cos u dx mixes one variable in the integrand with another in the differential. Every x must convert, the integrand and the dx alike. A stray x usually signals that the chosen u does not have its derivative present.",
    sectionId: "2"
  },
  obj3: {
    question: "Is the u in integration by parts the same as the u in u-substitution?",
    answer: "No — same letter, different job. In substitution, u renames the variable: everything converts and x disappears. In integration by parts, u labels one factor of the integrand and x remains the variable throughout; the ledger is u, du, dv, v. Reading a parts problem as a substitution, or the reverse, is a common source of stuck work.",
    sectionId: "notation"
  },
  obj4: {
    question: "Does LIATE always work?",
    answer: "No. LIATE — logarithmic, inverse trig, algebraic, trigonometric, exponential — is a classroom mnemonic for choosing u in integration by parts, not a theorem. It picks well most of the time, but it fails often enough that judgment stays in the loop. If the resulting ∫v du is harder than what you started with, swap the roles.",
    sectionId: "3"
  },
  obj5: {
    question: "Why is trigonometric substitution written x = a sin θ instead of u = g(x)?",
    answer: "Because it runs backwards. Ordinary substitution names the new variable as a function of the old one; trigonometric substitution expresses the old variable through the new one, which is what lets a Pythagorean identity collapse the radical. The price is that returning to x needs an inverse trig function, a reference triangle, and a domain restriction on θ.",
    sectionId: "5"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Integration Techniques",
    "description": "Master integration techniques: u-substitution, integration by parts (LIATE), trigonometric integrals, trig substitution, partial fractions, and how to choose the right method.",
    "url": "https://www.learnmathclass.com/calculus/integrals/techniques",
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
      "name": "Integration Techniques"
    },
    "teaches": [
      "Why integration techniques are necessary",
      "U-substitution method",
      "Integration by parts with LIATE rule",
      "Trigonometric integrals with powers of sine and cosine",
      "Trigonometric substitution for square roots",
      "Partial fraction decomposition",
      "Technique selection by pattern recognition"
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
        "name": "Integration Techniques",
        "item": "https://www.learnmathclass.com/calculus/integrals/techniques"
      }
    ]
  }
}


  const pfA = (x) => 0.5 / (x - 1), pfB = (x) => -0.5 / (x + 1), pfF = (x) => 1 / (x * x - 1);
  const fpPartialFractions = { kind: 'pieces', svgTitle: '1/(x^2 - 1) is the sum of 1/2 over (x - 1) and -1/2 over (x + 1): each piece has one asymptote, the sum has both', xRange: [-3.5, 3.5], yRange: [-4, 4],
    pieces: [
      { fn: pfA, from: 99, to: 99, ends: [null, null], color: 'r', ghost: [[-3.5, 0.88], [1.13, 3.5]] },
      { fn: pfB, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[-3.5, -1.13], [-0.88, 3.5]] },
      { fn: pfF, from: -3.5, to: -1.13, ends: [null, null], color: 'f' },
      { fn: pfF, from: -0.87, to: 0.87, ends: [null, null], color: 'f' },
      { fn: pfF, from: 1.13, to: 3.5, ends: [null, null], color: 'f' },
    ],
    vlines: [{ x: -1, label: 'x = −1' }, { x: 1, label: 'x = 1' }],
    notes: [{ x: 1.4, y: 3.4, text: 'blue: 1/(x² − 1)', pos: 'e', color: 'f' }, { x: 1.4, y: 2.9, text: 'amber: (1/2)/(x − 1)', pos: 'e', color: 'r' }, { x: 1.4, y: 2.4, text: 'navy: −(1/2)/(x + 1)', pos: 'e', color: 'g' }],
    caption: 'Two simple fractions, one asymptote each, add up to the original' };
  const demoUnits = {
    partialFractions: demoUnitFrame({
      svg: renderFunctionPlotV4(fpPartialFractions),
      caption: 'A fraction taken apart',
      text: 'The section&#8217;s 1/(x&#178; &#8722; 1) (blue) has two vertical asymptotes, at x = &#8722;1 and x = 1. The decomposition writes it as (1/2)/(x &#8722; 1) (amber dashes), which carries only the asymptote at 1, plus &#8722;(1/2)/(x + 1) (navy dashes), which carries only the one at &#8722;1. Adding the two dashed curves point by point gives the blue curve, and each simple piece integrates to a logarithm.',
    }),
  };

  const integrationTechniqueTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Read the integrand first',
    preface: 'The shape of the integrand points to the technique. Each card names the pattern to look for.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Match the pattern, then commit',
    conclusion: 'Substitution and parts cover most integrals; trigonometric methods and partial fractions handle the specialised shapes.',
    root: { name: 'Integration techniques', sub: '5 methods' },
    children: [
      { id: 'sub', name: 'Substitution', items: [
        { label: 'Look for', text: '$f(g(x)) \\cdot g\'(x)$' }, { label: 'Move', text: 'let $u = g(x)$' } ] },
      { id: 'parts', name: 'Integration by parts', items: [
        { label: 'Look for', text: 'products of different function types' }, { label: 'Examples', text: 'polynomial × exponential, polynomial × trig, log × polynomial' } ] },
      { id: 'trig', name: 'Trigonometric integrals', items: [
        { label: 'Look for', text: 'powers or products of $\\sin$ and $\\cos$' } ] },
      { id: 'tsub', name: 'Trigonometric substitution', items: [
        { label: 'Look for', text: '$\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, $\\sqrt{x^2 - a^2}$' } ] },
      { id: 'pf', name: 'Partial fractions', items: [
        { label: 'Look for', text: 'rational functions with a factorable denominator' } ] },
    ],
  };

  return {
  props: {
    integrationTechniqueTree,
    sectionsContent,
    introContent,
    obj4Table,
    obj5Table,
    summaryTable,
    faqQuestions,
    schemas,
    demoUnits,
    seoData: {
      title: "Integration Techniques: Substitution, Parts & More | Learn Math Class",
      description: "Master integration techniques: u-substitution, integration by parts (LIATE), trigonometric integrals, trig substitution, partial fractions, and how to choose the right method.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/techniques",
      name: "Integration Techniques"
    },
  }
}
   }

export default function PageTemplate({integrationTechniqueTree, seoData, sectionsContent, introContent, obj4Table, obj5Table, summaryTable, faqQuestions, schemas, demoUnits}) {

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
          `@academic[punchline:Integration by parts moves the derivative from one factor to the other, and it pays off only when the integral left behind is simpler.]@`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'obj4-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj4Table }} />,
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
          `@academic[punchline:A trigonometric substitution trades a square root for a Pythagorean identity, and the radical collapses to a single trigonometric factor.]@`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'unit-partialFractions'} dangerouslySetInnerHTML={{ __html: demoUnits.partialFractions }} />,
          `Each factor of the denominator contributes one simple fraction with its own asymptote.`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <DiagramFrame
            key={'obj7-diagram'}
            id="integration-techniques-tree"
            title="Choosing an integration technique"
            source="/calculus/integrals/techniques"
          >
            <TopDownTree data={integrationTechniqueTree} />
          </DiagramFrame>,
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
        title:`Integration Techniques FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Integration Techniques</h1>
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