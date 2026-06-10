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
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0/0 with a polynomial numerator and denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor both, cancel the shared (x − a) factor, substitute again</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0/0 with radicals (square roots, etc.)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply numerator and denominator by the conjugate, simplify the difference of squares, cancel</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0/0 with shared factor hidden inside parens or powers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">expand or simplify the algebra until the (x − a) factor emerges, then cancel</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj6</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0/0 with a difference of fractions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">combine over a common denominator; the simplified numerator usually reveals the shared factor</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj7</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∞/∞ for a rational function as x → ±∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">divide every term by the highest power of x in the denominator — see <a href="/calculus/limits/infinity" style="${linkStyle}">limits and infinity</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj8</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">7</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">expression resembles a known trig/exp form</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rewrite to match a <a href="/calculus/limits/special" style="${linkStyle}">special limit</a> (sin u / u, (e<sup>u</sup>−1)/u, etc.) and apply</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj9</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">8</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">absolute values, piecewise functions, or potential left/right asymmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">evaluate the <a href="/calculus/limits/one-sided" style="${linkStyle}">one-sided limits</a> separately; agreement determines whether the two-sided limit exists</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj10</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">9</td>
      <td style="padding: 12px 15px; color: #34495e;">nonzero / 0 (not indeterminate — limit is infinite)</td>
      <td style="padding: 12px 15px; color: #34495e;">sign-analyze numerator and denominator near a from each side to identify +∞ or −∞</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">obj11</td>
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

$$\\lim_{x \\to a} f(x) = f(a)$$

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

$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$

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

$$\\frac{0}{0} \\qquad \\frac{\\infty}{\\infty} \\qquad 0 \\cdot \\infty \\qquad \\infty - \\infty$$

$$0^0 \\qquad 1^\\infty \\qquad \\infty^0$$

Each form represents a competition between opposing tendencies. In $0/0$, both numerator and denominator vanish—which vanishes faster determines the limit. In $\\infty - \\infty$, both terms grow without bound—their difference depends on relative growth rates.

Indeterminate forms require transformation. The goal is to rewrite the expression so that substitution or [limit rules](!/calculus/limits/rules) apply.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Factoring and Canceling`,
    content: `
When substitution yields $0/0$, the numerator and denominator share a common factor. Factor both, cancel the shared factor, then substitute.

$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$

Factor the numerator:

$$= \\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2}$$

Cancel $(x - 2)$:

$$= \\lim_{x \\to 2} (x + 2) = 4$$

The cancellation is valid because the limit considers $x$ near $2$, not at $2$. For $x \\neq 2$, the factor $(x - 2)$ is nonzero and cancels legitimately.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Rationalizing — Conjugate Multiplication`,
    content: `
When radicals appear and substitution fails, multiply by the conjugate to eliminate the radical.

$$\\lim_{x \\to 0} \\frac{\\sqrt{x + 1} - 1}{x}$$

Substituting gives $0/0$. Multiply numerator and denominator by $\\sqrt{x + 1} + 1$:

$$= \\lim_{x \\to 0} \\frac{(\\sqrt{x + 1} - 1)(\\sqrt{x + 1} + 1)}{x(\\sqrt{x + 1} + 1)}$$

The numerator becomes a difference of squares:

$$= \\lim_{x \\to 0} \\frac{(x + 1) - 1}{x(\\sqrt{x + 1} + 1)} = \\lim_{x \\to 0} \\frac{x}{x(\\sqrt{x + 1} + 1)}$$

Cancel $x$:

$$= \\lim_{x \\to 0} \\frac{1}{\\sqrt{x + 1} + 1} = \\frac{1}{2}$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Expanding and Simplifying`,
    content: `
Sometimes expanding a product or simplifying a complex fraction reveals the cancellation needed.

$$\\lim_{x \\to 1} \\frac{(x + 1)^2 - 4}{x - 1}$$

Expand the numerator:

$$= \\lim_{x \\to 1} \\frac{x^2 + 2x + 1 - 4}{x - 1} = \\lim_{x \\to 1} \\frac{x^2 + 2x - 3}{x - 1}$$

Factor:

$$= \\lim_{x \\to 1} \\frac{(x - 1)(x + 3)}{x - 1} = \\lim_{x \\to 1} (x + 3) = 4$$

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

$$\\lim_{x \\to 1} \\left( \\frac{1}{x - 1} - \\frac{2}{x^2 - 1} \\right)$$

Note that $x^2 - 1 = (x - 1)(x + 1)$. Rewrite with common denominator:

$$= \\lim_{x \\to 1} \\left( \\frac{x + 1}{(x - 1)(x + 1)} - \\frac{2}{(x - 1)(x + 1)} \\right)$$

$$= \\lim_{x \\to 1} \\frac{x + 1 - 2}{(x - 1)(x + 1)} = \\lim_{x \\to 1} \\frac{x - 1}{(x - 1)(x + 1)}$$

Cancel $(x - 1)$:

$$= \\lim_{x \\to 1} \\frac{1}{x + 1} = \\frac{1}{2}$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Multiplying by Strategic Forms of 1`,
    content: `
For [limits at infinity](!/calculus/limits/infinity), divide numerator and denominator by the highest power of $x$ in the denominator.

$$\\lim_{x \\to \\infty} \\frac{3x^2 + 5x - 1}{2x^2 - 7}$$

Divide every term by $x^2$:

$$= \\lim_{x \\to \\infty} \\frac{3 + \\frac{5}{x} - \\frac{1}{x^2}}{2 - \\frac{7}{x^2}}$$

As $x \\to \\infty$, terms with $x$ in the denominator vanish:

$$= \\frac{3 + 0 - 0}{2 - 0} = \\frac{3}{2}$$

This technique isolates the dominant terms that control behavior at infinity.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Using Known Limits`,
    content: `
Recognize when parts of an expression match [special limits](!/calculus/limits/special) and rewrite accordingly.

$$\\lim_{x \\to 0} \\frac{\\sin 3x}{x}$$

Rewrite to match the standard form $\\dfrac{\\sin u}{u}$:

$$= \\lim_{x \\to 0} \\frac{\\sin 3x}{x} \\cdot \\frac{3}{3} = 3 \\cdot \\lim_{x \\to 0} \\frac{\\sin 3x}{3x}$$

Let $u = 3x$. As $x \\to 0$, $u \\to 0$:

$$= 3 \\cdot \\lim_{u \\to 0} \\frac{\\sin u}{u} = 3 \\cdot 1 = 3$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `One-Sided Evaluation`,
    content: `
When [one-sided limits](!/calculus/limits/one-sided) differ, evaluate each separately.

$$\\lim_{x \\to 0} \\frac{|x|}{x}$$

For $x > 0$: $|x| = x$, so $\\dfrac{|x|}{x} = 1$

For $x < 0$: $|x| = -x$, so $\\dfrac{|x|}{x} = -1$

$$\\lim_{x \\to 0^+} \\frac{|x|}{x} = 1 \\qquad \\lim_{x \\to 0^-} \\frac{|x|}{x} = -1$$

The one-sided limits differ, so the two-sided limit does not exist.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj11: {
    title: `Sign Analysis Near the Point`,
    content: `
When a limit involves potential division by zero with a nonzero numerator, determine the sign to identify $+\\infty$ or $-\\infty$.

$$\\lim_{x \\to 3^+} \\frac{x + 1}{x - 3}$$

At $x = 3$: numerator $= 4 > 0$, denominator $\\to 0$.

For $x$ slightly greater than $3$: $x - 3 > 0$ (small positive).

Positive divided by small positive gives large positive:

$$\\lim_{x \\to 3^+} \\frac{x + 1}{x - 3} = +\\infty$$

From the left, $x - 3 < 0$, so:

$$\\lim_{x \\to 3^-} \\frac{x + 1}{x - 3} = -\\infty$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj12: {
    title: `Worked Examples`,
    content: `
## Example 1: Factoring

$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3}(x + 3) = 6$$

## Example 2: Rationalizing

$$\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4} = \\lim_{x \\to 4} \\frac{(\\sqrt{x} - 2)(\\sqrt{x} + 2)}{(x - 4)(\\sqrt{x} + 2)} = \\lim_{x \\to 4} \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)} = \\frac{1}{4}$$

## Example 3: Using Special Limits

$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$$

This follows from the [special limit](!/calculus/limits/special) $\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^2} = \\dfrac{1}{2}$.

## Example 4: Combining Fractions

$$\\lim_{x \\to 2} \\left( \\frac{1}{x - 2} - \\frac{4}{x^2 - 4} \\right) = \\lim_{x \\to 2} \\frac{x + 2 - 4}{(x-2)(x+2)} = \\lim_{x \\to 2} \\frac{x - 2}{(x-2)(x+2)} = \\frac{1}{4}$$
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


const faqQuestions = {
  obj1: {
    question: "What is direct substitution for limits?",
    answer: "Direct substitution means plugging the value a into f(x). If the result is a finite number with no division by zero, that number is the limit. This works for polynomials, rational functions where the denominator is nonzero, and compositions of continuous functions.",
    sectionId: "1"
  },
  obj2: {
    question: "What does 0/0 mean when evaluating a limit?",
    answer: "The form 0/0 is indeterminate—it doesn't determine the limit's value. It signals that both numerator and denominator share a common factor that must be canceled. The limit might be any finite number, infinite, or nonexistent; more work is needed.",
    sectionId: "2"
  },
  obj3: {
    question: "What are the indeterminate forms in calculus?",
    answer: "The indeterminate forms are 0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, 1^∞, and ∞⁰. Each represents a competition between opposing tendencies. These forms require transformation before limit rules can be applied.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you use factoring to evaluate limits?",
    answer: "When substitution yields 0/0, factor both numerator and denominator to find the common factor causing the zeros. Cancel this factor, then substitute. The cancellation is valid because the limit considers x near a, not at a.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the conjugate method for limits with radicals?",
    answer: "When radicals cause 0/0, multiply numerator and denominator by the conjugate (same terms, opposite sign). This creates a difference of squares that eliminates the radical, allowing cancellation and substitution.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you evaluate limits by expanding expressions?",
    answer: "Sometimes expanding a product or simplifying a complex fraction reveals the common factor needed for cancellation. Expand the expression, simplify, factor to find the shared term, cancel, then substitute.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you evaluate limits involving difference of fractions?",
    answer: "Combine the fractions over a common denominator. This often reveals a common factor in the resulting numerator that cancels with a factor in the denominator, resolving the indeterminate form.",
    sectionId: "7"
  },
  obj8: {
    question: "How do you evaluate limits at infinity for rational functions?",
    answer: "Divide every term in numerator and denominator by the highest power of x in the denominator. As x → ∞, terms with x in the denominator vanish, leaving only the dominant terms that determine the limit.",
    sectionId: "8"
  },
  obj9: {
    question: "How do you use special limits to evaluate other limits?",
    answer: "Rewrite the expression to match known forms like sin(u)/u → 1 or (eᵘ−1)/u → 1. Factor out constants and substitute variables so the expression matches the standard pattern, then apply the memorized result.",
    sectionId: "9"
  },
  obj10: {
    question: "How do you evaluate limits involving absolute value?",
    answer: "Evaluate one-sided limits separately. For x > 0 and x < 0, the absolute value |x| equals x and −x respectively. If the one-sided limits differ, the two-sided limit does not exist.",
    sectionId: "10"
  },
  obj11: {
    question: "How do you determine if a limit is positive or negative infinity?",
    answer: "Use sign analysis near the point. Check the sign of numerator and denominator separately for values slightly above and below the point. Positive over small positive gives +∞; positive over small negative gives −∞.",
    sectionId: "11"
  },
  obj12: {
    question: "What are common limit evaluation examples?",
    answer: "Common examples include factoring (x²−9)/(x−3), rationalizing (√x−2)/(x−4), using special limits for trigonometric expressions, and combining fractions to reveal cancellable factors. Each transforms 0/0 into a determinate form.",
    sectionId: "12"
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

export default function PageTemplate({seoData, sectionsContent, introContent, obj1Table, obj11Table, summaryTable, faqQuestions, schemas}) {

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
          <div key={'obj11-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj11Table }} />,
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
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}