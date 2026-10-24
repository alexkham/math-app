// tables-optimized: v4 | 2026-05-24 | 3 tables (obj1 aggregation, obj11 aggregation, obj13 summary capstone)
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


export async function getStaticProps(){
const keyWords = [
  "evaluating limits",
  "how to find limits",
  "direct substitution limit",
  "indeterminate form 0/0",
  "factoring limits",
  "rationalizing limits",
  "conjugate multiplication limits",
  "limit techniques calculus",
  "cancel common factors limit",
  "solve limits step by step",
  "limits with radicals",
  "combining fractions limits",
  "limit examples worked",
  "algebraic limit techniques",
  "indeterminate forms calculus"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj1 — aggregation: function classes where direct substitution works
const obj1Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Function class</th>
      <th style="${tableHeaders.aggregation}">Direct substitution gives the limit when…</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always — polynomials are continuous everywhere</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational p(x) / q(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">q(a) ≠ 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exponential a<sup>x</sup>&nbsp;(a &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always — continuous everywhere</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithm ln x (and log<sub>b</sub> x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a &gt; 0 — defined only on the positive reals</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trig: sin x, cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always — continuous everywhere</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trig: tan x, sec x, csc x, cot x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a is not a vertical asymptote of the function</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Sums, products, and compositions of the above</td>
      <td style="padding: 12px 15px; color: #34495e;">each piece is continuous at the relevant input</td>
    </tr>
  </tbody>
</table>
`

// obj11 — aggregation: sign analysis for nonzero-numerator over zero-denominator
const obj11Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Numerator sign at a</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Denominator sign as x → a</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Resulting limit</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">positive (+)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">small positive (0⁺)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">+∞</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">positive (+)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">small negative (0⁻)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−∞</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">negative (−)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">small positive (0⁺)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−∞</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">negative (−)</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">small negative (0⁻)</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">+∞</td>
    </tr>
  </tbody>
</table>
`

// obj13 — summary capstone: master technique catalog
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary} text-align: center;">Step</th>
      <th style="${tableHeaders.summary}">Trigger</th>
      <th style="${tableHeaders.summary}">Technique</th>
      <th style="${tableHeaders.summary} text-align: center;">Section</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any limit — always start here</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">direct substitution; if the result is defined and finite, that is the limit</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0/0 with a polynomial numerator and denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor both, cancel the shared (x − a) factor, substitute again</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0/0 with radicals (square roots, etc.)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply numerator and denominator by the conjugate, simplify the difference of squares, cancel</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0/0 with shared factor hidden inside parens or powers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">expand or simplify the algebra until the (x − a) factor emerges, then cancel</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">6</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0/0 with a difference of fractions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">combine over a common denominator; the simplified numerator usually reveals the shared factor</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">7</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∞/∞ for a rational function as x → ±∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">divide every term by the highest power of x in the denominator — see <a href="/calculus/limits/infinity" style="${linkStyle}">limits and infinity</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">8</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">7</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">expression resembles a known trig/exp form</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rewrite to match a <a href="/calculus/limits/special" style="${linkStyle}">special limit</a> (sin u / u, (e<sup>u</sup>−1)/u, etc.) and apply</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">9</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">8</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">absolute values, piecewise functions, or potential left/right asymmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">evaluate the <a href="/calculus/limits/one-sided" style="${linkStyle}">one-sided limits</a> separately; agreement determines whether the two-sided limit exists</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">10</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">9</td>
      <td style="padding: 12px 15px; color: #34495e;">nonzero / 0 (not indeterminate — limit is infinite)</td>
      <td style="padding: 12px 15px; color: #34495e;">sign-analyze numerator and denominator near a from each side to identify +∞ or −∞</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">11</td>
    </tr>
  </tbody>
</table>
`

const sectionsContent = {
  // ─── /calculus/limits/evaluating ──────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Limit](!/calculus/definitions#limit) — the value being computed
- [Indeterminate Form](!/calculus/definitions#indeterminate_form) — $\\frac{0}{0}$ and related forms that require algebraic resolution
- [Continuity](!/calculus/definitions#continuity) — when present, direct substitution gives the limit
- [One-Sided Limit](!/calculus/definitions#one_sided_limit) — needed when left and right behavior differ`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Direct Substitution — Try This First`,
    content: `
Before attempting any technique, substitute $a$ into $f(x)$ directly. If the result is a finite number with no division by zero, that number is the limit:

@academic[formula_callout:Direct Substitution — Try This First
$$\\lim_{x \\to a} f(x) = f(a)$$]@

This works for:

- Polynomials — always
- Rational functions — when the denominator is nonzero at $a$
- Exponential, logarithmic, and trigonometric functions — at points in their domains
- Sums, products, and compositions of continuous functions

Direct substitution exploits [continuity](!/calculus/limits/continuity). When $f$ is continuous at $a$, the limit equals the function value by definition.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `When Direct Substitution Fails`,
    content: `
Substitution fails when it produces an undefined or indeterminate expression. The most common outcome is $0/0$: both numerator and denominator evaluate to zero.

For example:

@academic[formula_callout:When Direct Substitution Fails
$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$]@

Substituting $x = 2$ gives $\\dfrac{0}{0}$. This does not mean the limit is zero, undefined, or nonexistent. It means the expression's behavior near $x = 2$ is not yet determined—more work is needed.

The $0/0$ form indicates that both numerator and denominator share a common factor of $(x - 2)$. Removing this factor reveals the limit.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Indeterminate Forms`,
    content: `
Several forms signal that [limit rules](!/calculus/limits/rules) cannot be applied directly:

@academic[formula_callout:Indeterminate Forms
$$\\frac{0}{0} \\qquad \\frac{\\infty}{\\infty} \\qquad 0 \\cdot \\infty \\qquad \\infty - \\infty$$]@

@academic[formula_callout:Indeterminate Forms
$$0^0 \\qquad 1^\\infty \\qquad \\infty^0$$]@

@academic[fact,aside:true,width:35%:A rule bought from Bernoulli
The rule for $\\frac{0}{0}$ named after L'Hôpital was found by his teacher Johann Bernoulli. In 1694 the Marquis de L'Hôpital agreed to pay Bernoulli 300 livres a year for his discoveries, and in 1696 he printed the rule in his textbook, the first on differential calculus.]@

Each form represents a competition between opposing tendencies. In $0/0$, both numerator and denominator vanish—which vanishes faster determines the limit. In $\\infty - \\infty$, both terms grow without bound—their difference depends on relative growth rates.

The techniques on this page settle the competition by algebra: they rewrite the expression until the competing parts can be compared directly. Once derivatives are available, one more tool handles most $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$ forms at once. When $f$ and $g$ both tend to $0$, or both to $\\infty$, and the limit of $\\frac{f'(x)}{g'(x)}$ exists, the limit of $\\frac{f(x)}{g(x)}$ equals it. This is L'Hôpital's rule.

Indeterminate forms require transformation. The goal is to rewrite the expression so that substitution or [limit rules](!/calculus/limits/rules) apply.
`,
    before: ``,
    after: ``,
    link: ``
  },
  notation: {
    title: `Notation of Indeterminate Forms`,
    lead: `The seven form-labels, the lookalikes that are not on the list, and the one piece of working notation every evaluation chain depends on.`,
    inherited: `$\\lim$ and DNE — [two-sided limits](!/calculus/limits/two-sided); $\\infty$ and its signs — [limits at infinity](!/calculus/limits/infinity).`,
    entries: [
      {
        id: 'quotient-forms',
        tex: `$\\frac{0}{0}$ · $\\frac{\\infty}{\\infty}$`,
        read: `Zero over zero; infinity over infinity`,
        means: `Diagnoses, not fractions. Each records what substitution reported and announces that the contest between numerator and denominator is still undecided. No arithmetic is being performed.`,
        cases: `$0/0$ at a finite point — a shared factor is hiding, removed in **Factoring and Canceling** below. $\\infty/\\infty$ — a growth-rate contest, settled by dominant terms on [limits at infinity](!/calculus/limits/infinity) or by L'Hôpital once [derivative rules](!/calculus/derivatives/rules) are available.`,
        alsoWritten: `Quoted — “the form $0/0$” — in careful texts, stressing label over value.`,
        confusedWith: `An answer. $0/0$ does not mean the limit is $0$, undefined, or nonexistent — it means undetermined, and any of those outcomes is still possible.`,
      },
      {
        id: 'other-forms',
        tex: `$0 \\cdot \\infty$ · $\\infty - \\infty$ · $0^0$ · $1^{\\infty}$ · $\\infty^0$`,
        read: `The product, difference, and power indeterminate forms`,
        means: `The same undecided-contest idea in three more shapes: a vanishing factor against an exploding one, two explosions subtracted, and exponentials pulling in opposite directions.`,
        cases: `$0 \\cdot \\infty$ — rewrite as a quotient to join the entry above. $\\infty - \\infty$ — combine into one fraction. The power trio — take logarithms, which turns each into $0 \\cdot \\infty$.`,
        alsoWritten: `$\\infty \\cdot 0$, order immaterial.`,
        confusedWith: `$1^{\\infty}$ with plain powers of one. The base is not exactly $1$ — it **approaches** $1$ while the exponent explodes, which is how $\\left(1 + \\frac{1}{n}\\right)^n$ reaches $e$ on [special limits](!/calculus/limits/special).`,
      },
      {
        id: 'determinate-lookalikes',
        tex: `$\\frac{1}{0}$ · $\\frac{0}{\\infty}$ · $\\infty + \\infty$`,
        read: `The determinate lookalikes`,
        means: `Not on the list. In each, one tendency wins outright: $1/0$ forces unboundedness, $0/\\infty$ forces $0$, $\\infty + \\infty$ forces $\\infty$. No contest, no further work — only sign analysis remains.`,
        cases: `$1/0$ resolves to an [infinite limit](!/calculus/limits/infinity) once the sign is read off each side, as in **Sign Analysis Near the Point** below.`,
        confusedWith: `Membership in the indeterminate list. Students promote $1/0$ to indeterminate because it fails substitution — but failing substitution and being undecided are different events; $1/0$ has a verdict.`,
      },
      {
        id: 'carried-lim',
        tex: `$\\lim \\cdots = \\lim \\cdots = L$`,
        read: `The evaluation chain`,
        means: `Working notation: every intermediate line keeps its own $\\lim$. The algebra rewrites the expression **inside** the operator; $\\lim$ drops only at the substitution step, when a number finally appears.`,
        cases: `The cancellations along the chain are legal because $x \\neq a$ throughout — the punctured $0 < |x - a|$ carried by every [limit](!/calculus/limits/two-sided).`,
        confusedWith: `Dropping $\\lim$ after the first line. The naked middle lines then assert that $\\frac{x^2 - 4}{x - 2}$ **equals** $x + 2$ — false at $x = 2$; only their limits agree. The commonest written error in submitted work.`,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/limits`,
    parentLabel: `Limits`,
  },
  obj4: {
    title: `Factoring and Canceling`,
    content: `
When substitution into a rational function yields $0/0$, the numerator and denominator share a common factor. Factor both, cancel the shared factor, then substitute.

@academic[formula_callout:Factoring and Canceling
$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$]@

Factor the numerator:

@academic[formula_callout:Factoring and Canceling
$$= \\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2}$$]@

Cancel $(x - 2)$:

@academic[formula_callout:Factoring and Canceling
$$= \\lim_{x \\to 2} (x + 2) = 4$$]@

@academic[pitfall,aside:true,width:35%:Cancelling terms instead of factors
Striking out an $x$ in $x^2$ and in $x - 2$ turns $\\frac{x^2 - 4}{x - 2}$ into $\\frac{x - 4}{-2}$, which tends to $1$ as $x \\to 2$. Factoring first gives $\\frac{(x - 2)(x + 2)}{x - 2} = x + 2$, and the limit is $4$.
[Read more](!#pitfalls)]@

The cancellation is valid because the limit considers $x$ near $2$, not at $2$. For $x \\neq 2$, the factor $(x - 2)$ is nonzero and cancels legitimately.

The same three steps handle any rational function that gives $0/0$ at a point $a$. A polynomial that is $0$ at $a$ has $(x - a)$ as a factor, so in a $0/0$ form both the numerator and the denominator contain it. Cancelling it once is often enough; if substitution still gives $0/0$, the factor is present again and the step is repeated.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Rationalizing — Conjugate Multiplication`,
    content: `
When radicals appear and substitution fails, multiply by the conjugate to eliminate the radical.

@academic[formula_callout:Rationalizing — Conjugate Multiplication
$$\\lim_{x \\to 0} \\frac{\\sqrt{x + 1} - 1}{x}$$]@

Substituting gives $0/0$. Multiply numerator and denominator by $\\sqrt{x + 1} + 1$:

@academic[formula_callout:Rationalizing — Conjugate Multiplication
$$= \\lim_{x \\to 0} \\frac{(\\sqrt{x + 1} - 1)(\\sqrt{x + 1} + 1)}{x(\\sqrt{x + 1} + 1)}$$]@

The numerator becomes a difference of squares:

@academic[formula_callout:Rationalizing — Conjugate Multiplication
$$= \\lim_{x \\to 0} \\frac{(x + 1) - 1}{x(\\sqrt{x + 1} + 1)} = \\lim_{x \\to 0} \\frac{x}{x(\\sqrt{x + 1} + 1)}$$]@

Cancel $x$:

@academic[formula_callout:Rationalizing — Conjugate Multiplication
$$= \\lim_{x \\to 0} \\frac{1}{\\sqrt{x + 1} + 1} = \\frac{1}{2}$$]@

@academic[pitfall,aside:true,width:35%:Multiplying only the numerator
Multiplying just the top by $\\sqrt{x + 1} + 1$ turns the expression into $\\frac{x}{x} = 1$, a different function, and gives the limit $1$. Multiplying top and bottom keeps the value: $\\frac{1}{\\sqrt{x + 1} + 1} \\to \\frac{1}{2}$.
[Read more](!#pitfalls)]@

The factor $\\dfrac{\\sqrt{x + 1} + 1}{\\sqrt{x + 1} + 1}$ equals $1$ for every $x$ near $0$, so multiplying by it changes the form of the expression and not its value. What the new form gains is the difference of squares in the numerator: the radical disappears, and the factor $x$ that caused the $0/0$ comes out into the open, where it can be cancelled against the $x$ in the denominator.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Expanding and Simplifying`,
    content: `
Sometimes expanding a product or simplifying a complex fraction reveals the cancellation needed.

@academic[formula_callout:Expanding and Simplifying
$$\\lim_{x \\to 1} \\frac{(x + 1)^2 - 4}{x - 1}$$]@

Expand the numerator:

@academic[formula_callout:Expanding and Simplifying
$$= \\lim_{x \\to 1} \\frac{x^2 + 2x + 1 - 4}{x - 1} = \\lim_{x \\to 1} \\frac{x^2 + 2x - 3}{x - 1}$$]@

Factor:

@academic[formula_callout:Expanding and Simplifying
$$= \\lim_{x \\to 1} \\frac{(x - 1)(x + 3)}{x - 1} = \\lim_{x \\to 1} (x + 3) = 4$$]@

The initial form obscured the factor of $(x - 1)$; expansion made it visible.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Combining Fractions`,
    content: `
When the expression involves a difference of fractions, combine them over a common denominator.

@academic[formula_callout:Combining Fractions
$$\\lim_{x \\to 1} \\left( \\frac{1}{x - 1} - \\frac{2}{x^2 - 1} \\right)$$]@

Note that $x^2 - 1 = (x - 1)(x + 1)$. Rewrite with common denominator:

@academic[formula_callout:Combining Fractions
$$= \\lim_{x \\to 1} \\left( \\frac{x + 1}{(x - 1)(x + 1)} - \\frac{2}{(x - 1)(x + 1)} \\right)$$]@

@academic[formula_callout:Combining Fractions
$$= \\lim_{x \\to 1} \\frac{x + 1 - 2}{(x - 1)(x + 1)} = \\lim_{x \\to 1} \\frac{x - 1}{(x - 1)(x + 1)}$$]@

Cancel $(x - 1)$:

@academic[formula_callout:Combining Fractions
$$= \\lim_{x \\to 1} \\frac{1}{x + 1} = \\frac{1}{2}$$]@
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Multiplying by Strategic Forms of 1`,
    content: `
For [limits at infinity](!/calculus/limits/infinity), divide numerator and denominator by the highest power of $x$ in the denominator.

@academic[formula_callout:Multiplying by Strategic Forms of 1
$$\\lim_{x \\to \\infty} \\frac{3x^2 + 5x - 1}{2x^2 - 7}$$]@

Divide every term by $x^2$:

@academic[formula_callout:Multiplying by Strategic Forms of 1
$$= \\lim_{x \\to \\infty} \\frac{3 + \\frac{5}{x} - \\frac{1}{x^2}}{2 - \\frac{7}{x^2}}$$]@

As $x \\to \\infty$, terms with $x$ in the denominator vanish:

@academic[formula_callout:Multiplying by Strategic Forms of 1
$$= \\frac{3 + 0 - 0}{2 - 0} = \\frac{3}{2}$$]@

@academic[pitfall,aside:true,width:35%:Setting infinity over infinity to 1
Reading $\\frac{\\infty}{\\infty}$ as $1$ gives $1$ for $\\lim_{x \\to \\infty} \\frac{3x^2 + 5x - 1}{2x^2 - 7}$. At $x = 1000$ the quotient is already about $1.50$; dividing by $x^2$ gives the limit $\\frac{3}{2}$.
[Read more](!#pitfalls)]@

This technique isolates the dominant terms that control behavior at infinity.

Dividing by $x^2$ is the strategic form of $1$ in this example: dividing the numerator and the denominator by the same nonzero quantity leaves the value of the quotient unchanged for every $x \\neq 0$. After the division the numerator tends to $3$ and the denominator to $2$, the two leading coefficients. For a rational function whose numerator and denominator have the same degree, the limit at infinity is always the ratio of the leading coefficients.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Using Known Limits`,
    content: `
Recognize when parts of an expression match [special limits](!/calculus/limits/special) and rewrite accordingly.

@academic[formula_callout:Using Known Limits
$$\\lim_{x \\to 0} \\frac{\\sin 3x}{x}$$]@

Rewrite to match the standard form $\\dfrac{\\sin u}{u}$:

@academic[formula_callout:Using Known Limits
$$= \\lim_{x \\to 0} \\frac{\\sin 3x}{x} \\cdot \\frac{3}{3} = 3 \\cdot \\lim_{x \\to 0} \\frac{\\sin 3x}{3x}$$]@

Let $u = 3x$. As $x \\to 0$, $u \\to 0$:

@academic[formula_callout:Using Known Limits
$$= 3 \\cdot \\lim_{u \\to 0} \\frac{\\sin u}{u} = 3 \\cdot 1 = 3$$]@

@academic[pitfall,aside:true,width:35%:Using the special limit without matching the argument
Treating $\\frac{\\sin 3x}{x}$ as $\\frac{\\sin u}{u}$ gives $1$, but the denominator is $x$, not $3x$. At $x = 0.01$ the quotient is about $2.9996$; matching the argument gives $3$.
[Read more](!#pitfalls)]@

The factor $\\dfrac{3}{3}$ equals $1$, so it changes the form of the expression and not its value. Its job is to make the denominator equal to the argument of the sine, so that the substitution $u = 3x$ produces the standard form exactly. The factor $3$ left outside the limit is what carries the answer.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `One-Sided Evaluation`,
    content: `
When [one-sided limits](!/calculus/limits/one-sided) differ, evaluate each separately.

@academic[formula_callout:One-Sided Evaluation
$$\\lim_{x \\to 0} \\frac{|x|}{x}$$]@

For $x > 0$: $|x| = x$, so $\\dfrac{|x|}{x} = 1$

For $x < 0$: $|x| = -x$, so $\\dfrac{|x|}{x} = -1$

@academic[formula_callout:One-Sided Evaluation
$$\\lim_{x \\to 0^+} \\frac{|x|}{x} = 1 \\qquad \\lim_{x \\to 0^-} \\frac{|x|}{x} = -1$$]@

@academic[pitfall,aside:true,width:35%:Dropping the absolute value
Replacing $|x|$ by $x$ simplifies $\\frac{|x|}{x}$ to $1$ and gives the limit $1$. That holds only for $x > 0$; for $x < 0$, $|x| = -x$ and the quotient is $-1$, so the left-hand limit is $-1$.
[Read more](!#pitfalls)]@

The one-sided limits differ, so the two-sided limit does not exist.

Absolute values, piecewise definitions and other expressions whose formula changes at the point all call for this split. Each side is evaluated with the formula that holds on that side, and only then are the two results compared. The point itself plays no part: $\\frac{|x|}{x}$ has no value at $0$, and the limit is decided by the values on either side.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj11: {
    title: `Sign Analysis Near the Point`,
    content: `
When a limit involves potential division by zero with a nonzero numerator, determine the sign to identify $+\\infty$ or $-\\infty$.

@academic[formula_callout:Sign Analysis Near the Point
$$\\lim_{x \\to 3^+} \\frac{x + 1}{x - 3}$$]@

At $x = 3$: numerator $= 4 > 0$, denominator $\\to 0$.

For $x$ slightly greater than $3$: $x - 3 > 0$ (small positive).

Positive divided by small positive gives large positive:

@academic[formula_callout:Sign Analysis Near the Point
$$\\lim_{x \\to 3^+} \\frac{x + 1}{x - 3} = +\\infty$$]@

From the left, $x - 3 < 0$, so:

@academic[formula_callout:Sign Analysis Near the Point
$$\\lim_{x \\to 3^-} \\frac{x + 1}{x - 3} = -\\infty$$]@
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj12: {
    title: `Worked Examples`,
    content: `
## Example 1: Factoring

@academic[formula_callout:Worked Examples
$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3}(x + 3) = 6$$]@

## Example 2: Rationalizing

@academic[formula_callout:Worked Examples
$$\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4} = \\lim_{x \\to 4} \\frac{(\\sqrt{x} - 2)(\\sqrt{x} + 2)}{(x - 4)(\\sqrt{x} + 2)} = \\lim_{x \\to 4} \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)} = \\frac{1}{4}$$]@

## Example 3: Using Special Limits

@academic[formula_callout:Cosine Quadratic Limit at Zero
$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$$
/calculus/formulas#cosine_quadratic_limit_at_zero]@

@academic[formulas_link:Browse all calculus formulas
/calculus/formulas]@

This follows from the [special limit](!/calculus/limits/special) $\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^2} = \\dfrac{1}{2}$.

## Example 4: Combining Fractions

@academic[formula_callout:Worked Examples
$$\\lim_{x \\to 2} \\left( \\frac{1}{x - 2} - \\frac{4}{x^2 - 4} \\right) = \\lim_{x \\to 2} \\frac{x + 2 - 4}{(x-2)(x+2)} = \\lim_{x \\to 2} \\frac{x - 2}{(x-2)(x+2)} = \\frac{1}{4}$$]@
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj13: {
    title: `Summary: The Limit Evaluation Playbook`,
    content: `
Every limit evaluation problem on this page follows the same arc: try direct substitution first, then classify the indeterminate form, then pick the technique that resolves it. The table below collects the nine moves in priority order — start at the top and move down only as needed. The right side of each row notes where on this page (or which sibling page) the move is detailed.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj14: {
    title: `Common Pitfalls`,
    content: `
Six mistakes cause most wrong answers when limits are evaluated by algebra. Five of them are marked where they happen in the sections above; the first is the one the section on failed substitution warns against. Here each is worked through in full, with the wrong and the right working side by side.

**Reading 0/0 as the answer**

Substitution gives $\\dfrac{0}{0}$, and that result is turned into an answer: $0$ because the numerator is $0$, $1$ because the two parts are equal, or "does not exist" because of the division by zero.

Wrong working: substituting $x = 2$ into $\\dfrac{x^2 - 4}{x - 2}$ gives $\\dfrac{0}{0}$, so $\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2} = 0$.

Right working: $\\dfrac{0}{0}$ only says that more work is needed. Factoring gives $\\lim_{x \\to 2} \\dfrac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$.

Why it happens: $\\dfrac{0}{0}$ looks like a number, and three familiar rules each seem to apply to it: $0$ over anything is $0$, anything over itself is $1$, and division by $0$ is undefined. They contradict each other, which is exactly why the form decides nothing.

How to check: evaluate the expression at points close to $2$. At $x = 2.01$ it gives $4.01$ and at $x = 1.99$ it gives $3.99$, far from $0$ and closing in on $4$.

**Cancelling terms instead of factors**

In a fraction such as $\\dfrac{x^2 - 4}{x - 2}$, matching symbols are struck out of single terms of the numerator and the denominator, before anything has been factored.

Wrong working: strike one $x$ out of $x^2$ and the $x$ out of $x - 2$, leaving $\\dfrac{x - 4}{-2}$. Substituting $x = 2$ gives $\\dfrac{-2}{-2} = 1$.

Right working: factor first. $\\dfrac{x^2 - 4}{x - 2} = \\dfrac{(x - 2)(x + 2)}{x - 2} = x + 2$ for $x \\neq 2$, and the limit is $2 + 2 = 4$.

Why it happens: cancelling works on factors, $\\dfrac{x \\cdot a}{x \\cdot b} = \\dfrac{a}{b}$, and the same crossing out looks just as natural inside sums, where it does not hold.

How to check: compare the original and the rewritten expression at any convenient value. At $x = 3$ the original gives $\\dfrac{9 - 4}{3 - 2} = 5$, the wrong form gives $\\dfrac{3 - 4}{-2} = 0.5$, and $x + 2$ gives $5$.

**Multiplying only the numerator**

When rationalizing, the conjugate is multiplied into the numerator only. The expression that results is a different function, and its limit is a different number.

Wrong working: $\\dfrac{(\\sqrt{x + 1} - 1)(\\sqrt{x + 1} + 1)}{x} = \\dfrac{(x + 1) - 1}{x} = \\dfrac{x}{x} = 1$, so the limit is $1$.

Right working: multiply the numerator and the denominator by $\\sqrt{x + 1} + 1$, which multiplies the expression by $1$. Then $\\dfrac{x}{x(\\sqrt{x + 1} + 1)} = \\dfrac{1}{\\sqrt{x + 1} + 1}$, and the limit as $x \\to 0$ is $\\dfrac{1}{1 + 1} = \\dfrac{1}{2}$.

Why it happens: the conjugate is thought of as a tool for removing the radical from the numerator, and the denominator, which has no radical, seems to need nothing.

How to check: the rewritten expression must have the same value as the original at any allowed $x$. At $x = 3$ the original gives $\\dfrac{2 - 1}{3} = \\dfrac{1}{3}$; the right form gives $\\dfrac{1}{2 + 1} = \\dfrac{1}{3}$, the wrong form gives $1$.

**Setting infinity over infinity to 1**

As $x \\to \\infty$, the numerator and the denominator both grow without bound, and $\\dfrac{\\infty}{\\infty}$ is cancelled to $1$ as if $\\infty$ were a number.

Wrong working: in $\\lim_{x \\to \\infty} \\dfrac{3x^2 + 5x - 1}{2x^2 - 7}$ both parts tend to $\\infty$, so the limit is $\\dfrac{\\infty}{\\infty} = 1$.

Right working: divide every term by $x^2$. The expression becomes $\\dfrac{3 + \\frac{5}{x} - \\frac{1}{x^2}}{2 - \\frac{7}{x^2}}$, which tends to $\\dfrac{3}{2}$.

Why it happens: a number divided by itself is $1$, and $\\infty$ is handled like a number. But the two infinities can grow at different rates: $\\dfrac{x^2}{x}$ is also of the form $\\dfrac{\\infty}{\\infty}$ and tends to $\\infty$, while $\\dfrac{x}{x^2}$ tends to $0$.

How to check: evaluate at a large $x$. At $x = 1000$ the quotient is $\\dfrac{3004999}{1999993} \\approx 1.5025$, close to $1.5$ and not to $1$.

**Using the special limit without matching the argument**

The special limit $\\lim_{u \\to 0} \\dfrac{\\sin u}{u} = 1$ is applied to an expression that has the sine of one quantity over a different quantity.

Wrong working: $\\lim_{x \\to 0} \\dfrac{\\sin 3x}{x} = 1$, by the special limit.

Right working: the denominator has to match the argument of the sine. $\\dfrac{\\sin 3x}{x} = 3 \\cdot \\dfrac{\\sin 3x}{3x}$, and with $u = 3x$ the limit is $3 \\cdot 1 = 3$.

Why it happens: the expression has the shape "sine of something over something", and the pattern is recognized by its shape before the two somethings are compared.

How to check: evaluate at a small $x$. At $x = 0.01$, $\\dfrac{\\sin 0.03}{0.01} \\approx 2.9996$. For small angles $\\sin 3x \\approx 3x$, which also points to $3$.

**Dropping the absolute value**

The absolute value is removed as if $|x| = x$ for all $x$, so the expression is simplified to a single formula and only one limit is computed.

Wrong working: $\\dfrac{|x|}{x} = \\dfrac{x}{x} = 1$, so $\\lim_{x \\to 0} \\dfrac{|x|}{x} = 1$.

Right working: $|x| = x$ only for $x \\geq 0$. For $x > 0$ the quotient is $1$, and for $x < 0$ it is $\\dfrac{-x}{x} = -1$. The one-sided limits are $1$ and $-1$, so the two-sided limit does not exist.

Why it happens: the values pictured for $x$ are usually positive, and for those the absolute value changes nothing.

How to check: try one negative value. At $x = -0.1$ the quotient is $\\dfrac{0.1}{-0.1} = -1$, not $1$.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {

     id:"intro",

  title: `When Substitution Fails`,
  content: `
The simplest approach to any limit is direct substitution: plug in the value and compute. For polynomials, this always works. For rational functions away from zeros of the denominator, it works just as well. But substitution has limits of its own.

When plugging in produces $0/0$, the expression is indeterminate—neither the numerator nor denominator alone determines the result. The limit might be any finite number, or infinite, or nonexistent. The form $0/0$ signals that cancellation is hiding the true behavior, and algebraic work is required to reveal it.

This page covers the core techniques: factoring, rationalizing, and algebraic manipulation. Each method transforms an indeterminate expression into one where substitution succeeds.
`
};


// FAQ pass: cut ten case-A questions — direct substitution, indeterminate
// forms, factoring, rationalizing, expanding, combining fractions, sign
// analysis and worked examples each have an h2 stating the answer; limits at
// infinity and special limits are owned by their dedicated pages. Kept the
// 0/0 question, extended; invented three from the notation section, whose
// entries no heading surfaces.
const faqQuestions = {
  obj1: {
    question: "What does 0/0 mean when evaluating a limit?",
    answer: "It is a diagnosis, not an answer. Substitution produced 0/0, which records only that the contest between numerator and denominator is still undecided — no arithmetic has been performed. The limit may yet turn out to be any number, or infinite, or nonexistent. Usually a shared factor is hiding in the expression, and factoring then canceling it resolves the form.",
    sectionId: "3"
  },
  obj2: {
    question: "Is 1/0 an indeterminate form?",
    answer: "No. Indeterminate means undecided, and 1/0 has a verdict: a nonzero numerator over a vanishing denominator forces the magnitude to grow without bound. Only the sign is left to settle, by checking each side separately. Students often promote 1/0 to the indeterminate list because it fails direct substitution, but failing substitution and being undecided are different events.",
    sectionId: "notation"
  },
  obj3: {
    question: "Why is 1 to the power of infinity indeterminate?",
    answer: "Because the base is never exactly 1 — it only approaches 1 while the exponent explodes, and the two tendencies pull against each other. A base slightly above 1 raised to a huge power grows without bound; slightly below 1, it collapses toward zero. That balance is why (1 + 1/n) to the n approaches e rather than 1. See [special limits](!/calculus/limits/special).",
    sectionId: "notation"
  },
  obj4: {
    question: "Do you need to write lim on every line?",
    answer: "Yes, until the substitution step. The algebra rewrites the expression inside the operator, so each intermediate line keeps its own lim; the symbol drops only once a number finally appears. Omitting it makes the middle lines claim that (x² − 4)/(x − 2) equals x + 2, which is false at x = 2 — only their limits agree.",
    sectionId: "notation"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Evaluating Limits",
    "description": "Master limit evaluation techniques: direct substitution, factoring, rationalizing with conjugates, combining fractions, and using special limits. Solve indeterminate forms step by step.",
    "url": "https://www.learnmathclass.com/calculus/limits/evaluating",
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
      "name": "Evaluating Limits"
    },
    "teaches": [
      "Direct substitution for continuous functions",
      "Recognizing and handling indeterminate forms",
      "Factoring and canceling common factors",
      "Rationalizing with conjugate multiplication",
      "Combining fractions and expanding expressions",
      "Using special limits and sign analysis",
      "The limit-evaluation playbook"
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
        "name": "Limits",
        "item": "https://www.learnmathclass.com/calculus/limits"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Evaluating Limits",
        "item": "https://www.learnmathclass.com/calculus/limits/evaluating"
      }
    ]
  }
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const leSign = (x) => (x + 1) / (x - 3);
  const fpHoleLimit = { kind: 'pieces', svgTitle: '(x^2 - 4)/(x - 2) is the line x + 2 with a hole at (2, 4): substitution gives 0/0 but the limit is 4', xRange: [-1, 5], yRange: [-1, 7],
    pieces: [
      { fn: (x) => x + 2, from: -1, to: 2, ends: [null, 'open'], color: 'f' },
      { fn: (x) => x + 2, from: 2, to: 5, ends: ['open', null], color: 'f', label: { text: 'y = (x² − 4)/(x − 2)', x: 2.9, y: 4.9, pos: 'se' } },
    ],
    vlines: [{ x: 2 }],
    notes: [{ x: 0.2, y: 6.4, text: 'at x = 2: 0/0, no value', pos: 'e', color: 'r' }, { x: 0.2, y: 5.7, text: 'heights near x = 2 → 4', pos: 'e', color: 'f' }],
    caption: '0/0 at the point, yet the limit is 4: the graph has only a hole' };
  const fpSignAnalysis = { kind: 'pieces', svgTitle: '(x + 1)/(x - 3): just right of 3 the quotient is large positive, just left large negative', xRange: [-2, 8], yRange: [-12, 12], yStep: 4,
    pieces: [
      { fn: leSign, from: -2, to: 2.67, ends: [null, null], color: 'f' },
      { fn: leSign, from: 3.36, to: 8, ends: [null, null], color: 'f', label: { text: 'y = (x + 1)/(x − 3)', x: 4.5, y: leSign(4.5), pos: 'ne' } },
    ],
    vlines: [{ x: 3, label: 'x = 3' }],
    notes: [{ x: 3.8, y: 10.2, text: '4 / (small +) → +∞', pos: 'e', color: 'r' }, { x: -1.9, y: -10.2, text: '4 / (small −) → −∞', pos: 'e', color: 'r' }],
    caption: 'The sign of the small denominator decides +∞ or −∞' };
  const demoUnits = {
    onesided: demoUnitFrame({
      svg: functionLimitDiagrams.jump,
      caption: 'Step at x = 0: left limit 0, right limit 1',
      text: 'Evaluated from the left the probe heads to 0, from the right to 1; the two one-sided limits are perfectly well defined and simply differ, so the two-sided limit does not exist. Any expression that changes formula at a point, like |x|/x, has to be evaluated this way. Read each side separately on the',
      href: '/calculus/visual-tools/limit',
      linkText: 'limit explorer',
    }),
    holeLimit: demoUnitFrame({
      svg: renderFunctionPlotV4(fpHoleLimit),
      caption: 'What 0/0 hides',
      text: 'The section&#8217;s (x&#178; &#8722; 4)/(x &#8722; 2). For every x &#8800; 2 it equals x + 2, so its graph is that line with a single point missing at (2, 4): substituting x = 2 gives 0/0 because the formula has no value there. The heights on both sides still close in on 4, and the limit is 4. 0/0 says only that more work is needed, which factoring and canceling then supplies.',
    }),
    signAnalysis: demoUnitFrame({
      svg: renderFunctionPlotV4(fpSignAnalysis),
      caption: 'Which infinity, from which side',
      text: 'The section&#8217;s (x + 1)/(x &#8722; 3) near x = 3. The numerator stays near 4 while the denominator shrinks to 0. Just right of 3 the denominator is a small positive number, so the quotient is a large positive number and the graph shoots up; just left of 3 it is a small negative number and the graph drops. So the right-hand limit is +&#8734; and the left-hand limit is &#8722;&#8734;.',
    }),
  };

return {
  props: {
    demoUnits,
    sectionsContent,
    introContent,
    obj1Table,
    obj11Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Evaluating Limits: Techniques & Examples | Learn Math Class",
      description: "Master limit evaluation techniques: direct substitution, factoring, rationalizing with conjugates, combining fractions, and using special limits. Solve indeterminate forms step by step.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/evaluating",
      name: "Evaluating Limits"
    },
  }
}
   }

export default function PageTemplate({seoData, sectionsContent, introContent, obj1Table, obj11Table, summaryTable, faqQuestions, schemas, demoUnits}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
          <div key={'obj1-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj1Table }} />,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key={'unit-holeLimit'} dangerouslySetInnerHTML={{ __html: demoUnits.holeLimit }} />,
          `Factoring in section 4 removes the common factor x − 2 and fills in the value 4.`,
          `@academic[punchline:A $0/0$ from substitution decides nothing: the limit has to be read from the values near the point.]@`,
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
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          `@academic[punchline:Cancelling is allowed because a limit never uses the value at the point, only the values around it.]@`,
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
                  <div key={'unit-onesided'} dangerouslySetInnerHTML={{ __html: demoUnits.onesided }} />,
          `When the two sides agree the one-sided evaluation was unnecessary; when they differ it was the whole answer.`,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div key={'unit-signAnalysis'} dangerouslySetInnerHTML={{ __html: demoUnits.signAnalysis }} />,
          `Because the two sides disagree, the two-sided limit at 3 does not exist, not even as ∞.`,
          <div key={'obj11-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj11Table }} />,
          `@academic[punchline:A nonzero number over a vanishing denominator always blows up; the signs on each side decide which infinity.]@`,
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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Evaluating Limits FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Evaluating Limits</h1>
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