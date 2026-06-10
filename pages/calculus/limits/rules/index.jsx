
// tables-optimized: v4 | 2026-05-24 | 3 tables (obj12 aggregation, obj15 aggregation, obj16 summary capstone)
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
  "limit rules",
  "limit laws calculus",
  "sum rule limits",
  "product rule limits",
  "quotient rule limits",
  "power rule limits",
  "squeeze theorem",
  "limit of polynomial",
  "limit of rational function",
  "composition limit rule",
  "constant multiple limit",
  "indeterminate forms",
  "limit properties",
  "how to evaluate limits",
  "limit theorems"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj12 — aggregation: when direct substitution applies (covers obj11 + obj12)
const obj12Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Function class at x = a</th>
      <th style="${tableHeaders.aggregation}">lim<sub>x → a</sub></th>
      <th style="${tableHeaders.aggregation}">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial p(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">p(a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">direct substitution always works (continuous everywhere)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational p(x)/q(x), &nbsp;q(a) ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">p(a) / q(a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">direct substitution works</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational p(x)/q(x), &nbsp;q(a) = 0, &nbsp;p(a) ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">±∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">limit is infinite; analyze sign near a to determine + or −</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Rational p(x)/q(x), &nbsp;p(a) = q(a) = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">0 / 0 indeterminate</td>
      <td style="padding: 12px 15px; color: #34495e;">factor and cancel the common root, then re-evaluate — see <a href="/calculus/limits/evaluating" style="${linkStyle}">evaluating limits</a></td>
    </tr>
  </tbody>
</table>
`

// obj15 — aggregation: indeterminate forms and which rule fails
const obj15Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Indeterminate form</th>
      <th style="${tableHeaders.aggregation}">Arising from</th>
      <th style="${tableHeaders.aggregation}">Rule that fails</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">0 / 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f → 0 divided by g → 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">quotient rule (denominator limit is 0)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">∞ / ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f → ∞ divided by g → ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">quotient rule (neither side is finite)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">0 · ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f → 0 multiplied by g → ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">product rule (one factor not finite)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">∞ − ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f → ∞ minus g → ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">difference rule (both quantities not finite)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">0<sup>0</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f → 0 raised to g → 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">power rule (subtle interaction between base and exponent)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1<sup>∞</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f → 1 raised to g → ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">power rule (the limit of 1 + 1/x to the x is e, not 1)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">∞<sup>0</sup></td>
      <td style="padding: 12px 15px; color: #34495e;">f → ∞ raised to g → 0</td>
      <td style="padding: 12px 15px; color: #34495e;">power rule (subtle interaction between base and exponent)</td>
    </tr>
  </tbody>
</table>
`

// obj16 — summary capstone: master reference of limit rules
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Rule</th>
      <th style="${tableHeaders.summary}">Statement</th>
      <th style="${tableHeaders.summary}">Conditions</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Constant</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → a</sub> c = c</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always — no conditions</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Identity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → a</sub> x = a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always — no conditions</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum / Difference</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim (f ± g) = L ± M</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">both component limits exist</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Constant multiple</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim (c · f) = c · L</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the limit of f exists; c any real constant</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim (f · g) = L · M</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">both component limits exist</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quotient</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim (f / g) = L / M</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">both component limits exist AND M ≠ 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim f<sup>n</sup> = L<sup>n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n positive integer; rational n requires L &gt; 0 (or L ≥ 0 when denominator is odd)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim &nbsp;<sup>n</sup>√f = <sup>n</sup>√L</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">odd n: all L; even n: L ≥ 0 and f ≥ 0 near a</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Absolute value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim |f| = |L|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the limit of f exists (converse does not hold)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Composition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim f(g(x)) = f(L)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim g(x) = L AND f is <a href="/calculus/limits/continuity" style="${linkStyle}">continuous</a> at L</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Squeeze Theorem</td>
      <td style="padding: 12px 15px; color: #34495e;">lim f = L</td>
      <td style="padding: 12px 15px; color: #34495e;">g(x) ≤ f(x) ≤ h(x) near a, with lim g = lim h = L</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/limits/rules ───────────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Limit](!/calculus/definitions#limit) — the object these rules operate on
// - [Indeterminate Form](!/calculus/definitions#indeterminate_form) — signals that limit rules cannot be applied directly
// - [Continuity](!/calculus/definitions#continuity) — continuous functions allow limits to pass through compositions`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Why Limit Rules Matter`,
//     content: `
// Without rules, evaluating even simple limits would require returning to the definition each time. The definition asks whether $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close to $a$. Proving this directly for each new function is tedious.

// Limit rules provide shortcuts. Once you establish that basic limits exist—constants, the identity function, standard functions—you can combine them using algebraic rules to handle complex expressions.

// The rules also reveal structure. They show that limits behave like algebraic operations in many ways, which is why calculus meshes so naturally with algebra.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj2: {
//     title: `Limit of a Constant`,
//     content: `
// For any constant $c$:

// $$\\lim_{x \\to a} c = c$$

// A constant function $f(x) = c$ outputs the same value regardless of input. As $x$ approaches $a$, the output remains $c$. The limit is simply $c$.

// This rule seems trivial but serves as a foundation. Combined with other rules, it handles constant terms in any expression.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj3: {
//     title: `Limit of the Identity Function`,
//     content: `
// For the identity function $f(x) = x$:

// $$\\lim_{x \\to a} x = a$$

// As $x$ approaches $a$, the value of $x$ approaches $a$. This tautology provides the base case for handling any polynomial: every polynomial is built from constants and powers of $x$, and this rule handles the linear term.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj4: {
//     title: `Sum and Difference Rules`,
//     content: `
// If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then:

// $$\\lim_{x \\to a} [f(x) + g(x)] = L + M$$

// $$\\lim_{x \\to a} [f(x) - g(x)] = L - M$$

// The limit of a sum is the sum of the limits. The limit of a difference is the difference of the limits.

// Both component limits must exist. If either fails to exist, these rules do not apply. The indeterminate form $\\infty - \\infty$ illustrates what can go wrong: two quantities both growing without bound may have a difference that converges, diverges, or oscillates.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj5: {
//     title: `Constant Multiple Rule`,
//     content: `
// If $\\lim_{x \\to a} f(x) = L$ and $c$ is a constant:

// $$\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot L$$

// Constants factor out of limits. This is a special case of the product rule where one factor is constant, but it appears frequently enough to state separately.

// Scaling a function by a constant scales its limit by the same constant.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj6: {
//     title: `Product Rule`,
//     content: `
// If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then:

// $$\\lim_{x \\to a} [f(x) \\cdot g(x)] = L \\cdot M$$

// The limit of a product is the product of the limits. This extends to any finite number of factors: if each factor has a limit, the product's limit equals the product of those limits.

// The indeterminate form $0 \\cdot \\infty$ shows the rule's limitation. When one factor approaches $0$ while the other grows without bound, the product's behavior depends on the relative rates—it might approach $0$, $\\infty$, or any finite value.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj7: {
//     title: `Quotient Rule`,
//     content: `
// If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$ with $M \\neq 0$, then:

// $$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{L}{M}$$

// The limit of a quotient is the quotient of the limits, provided the denominator's limit is nonzero.

// When $M = 0$, the rule fails. If $L \\neq 0$ and $M = 0$, the limit is typically infinite (analyze the sign to determine $+\\infty$ or $-\\infty$). If both $L = 0$ and $M = 0$, you have the indeterminate form $0/0$, requiring [further techniques](!/calculus/limits/evaluating).
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj8: {
//     title: `Power Rule`,
//     content: `
// If $\\lim_{x \\to a} f(x) = L$ and $n$ is a positive integer:

// $$\\lim_{x \\to a} [f(x)]^n = L^n$$

// Repeated application of the product rule yields this result. The limit of a power is the power of the limit.

// For rational exponents:

// $$\\lim_{x \\to a} [f(x)]^{m/n} = L^{m/n}$$

// provided $L > 0$ (or $L \\geq 0$ when $n$ is odd). Root functions require care with domain restrictions.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj9: {
//     title: `Root Rule`,
//     content: `
// If $\\lim_{x \\to a} f(x) = L$ and the $n$-th root exists:

// $$\\lim_{x \\to a} \\sqrt[n]{f(x)} = \\sqrt[n]{L}$$

// For odd $n$, this holds for all real $L$. For even $n$, the rule requires $L \\geq 0$ and $f(x) \\geq 0$ near $a$.

// This is the power rule with exponent $1/n$. The limit of a root is the root of the limit, provided the root is defined.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj10: {
//     title: `Absolute Value Rule`,
//     content: `
// If $\\lim_{x \\to a} f(x) = L$, then:

// $$\\lim_{x \\to a} |f(x)| = |L|}$$

// The limit of an absolute value is the absolute value of the limit.

// The converse does not hold: $\\lim_{x \\to a} |f(x)}|$ may exist even when $\\lim_{x \\to a} f(x)$ does not. For example, $|(-1)^n|}$ equals $1$ for all $n$, but $(-1)^n$ has no limit as $n \\to \\infty$.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj11: {
//     title: `Limits of Polynomials`,
//     content: `
// For any polynomial $p(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$:

// $$\\lim_{x \\to a} p(x) = p(a)$$

// Direct substitution always works for polynomials. This follows from applying the sum, constant multiple, and power rules to each term.

// Polynomials are [continuous](!/calculus/limits/continuity) everywhere, so the limit at any point equals the function value at that point.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj12: {
//     title: `Limits of Rational Functions`,
//     content: `
// For a rational function $r(x) = \\dfrac{p(x)}{q(x)}$ where $p$ and $q$ are polynomials:

// $$\\lim_{x \\to a} r(x) = \\frac{p(a)}{q(a)} \\quad \\text{provided } q(a) \\neq 0$$

// When the denominator is nonzero at $a$, substitute directly. When $q(a) = 0$, the quotient rule fails and [other techniques](!/calculus/limits/evaluating) are needed.

// If $q(a) = 0$ but $p(a) \\neq 0$, the limit is infinite. If both $p(a) = 0$ and $q(a) = 0$, factor and cancel the common root before substituting.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj13: {
//     title: `Composition Rule`,
//     content: `
// If $\\lim_{x \\to a} g(x) = L$ and $f$ is [continuous](!/calculus/limits/continuity) at $L$, then:

// $$\\lim_{x \\to a} f(g(x)) = f(L)$$

// The limit passes through continuous functions. You first find the limit of the inner function, then apply the outer function to that limit.

// Continuity of $f$ at $L$ is essential. Without it, the behavior of $f$ near $L$ might not match $f(L)$, and the rule fails.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj14: {
//     title: `The Squeeze Theorem`,
//     content: `
// Suppose $g(x) \\leq f(x) \\leq h(x)$ for all $x$ near $a$ (except possibly at $a$ itself). If:

// $$\\lim_{x \\to a} g(x) = L \\quad \\text{and} \\quad \\lim_{x \\to a} h(x) = L$$

// then:

// $$\\lim_{x \\to a} f(x) = L$$

// The function $f$ is trapped between two functions that converge to the same limit. It has nowhere to go but $L$.

// This theorem proves the [special limit](!/calculus/limits/special) $\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$ through a geometric argument that bounds $\\dfrac{\\sin x}{x}$ between $\\cos x$ and $1$ near zero.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj15: {
//     title: `When Rules Fail`,
//     content: `
// Every rule requires component limits to exist. When they don't, the rule cannot be applied directly.

// Indeterminate forms signal this breakdown:

// - $\\dfrac{0}{0}$ — quotient rule fails
// - $\\dfrac{\\infty}{\\infty}$ — quotient rule fails
// - $0 \\cdot \\infty$ — product rule fails
// - $\\infty - \\infty$ — difference rule fails
// - $0^0$, $1^\\infty$, $\\infty^0$ — power rule fails

// These forms require transformation before rules apply. Factor and cancel, rationalize, rewrite in equivalent forms—the goal is to eliminate the indeterminate form so that limit rules can finish the computation.

// The [evaluating limits](!/calculus/limits/evaluating) page covers techniques for resolving these cases.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj16: {
//     title: `Summary: Master Reference of Limit Rules`,
//     content: `
// The rules above split into three families: the basic facts (constant, identity), the algebraic combination rules (sum/difference, constant multiple, product, quotient, power, root, absolute value), and the advanced rules (composition, Squeeze Theorem). The table below collects all eleven in one place with each rule&apos;s precise conditions, since the conditions — not the formulas — are what distinguish correct application from a misuse that produces a wrong answer.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   }
// };


// formulas-optimized: v1 | 2026-06-09 | 13 callouts (obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14)
const sectionsContent = {
  // ─── /calculus/limits/rules ───────────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Limit](!/calculus/definitions#limit) — the object these rules operate on
- [Indeterminate Form](!/calculus/definitions#indeterminate_form) — signals that limit rules cannot be applied directly
- [Continuity](!/calculus/definitions#continuity) — continuous functions allow limits to pass through compositions`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Why Limit Rules Matter`,
    content: `
Without rules, evaluating even simple limits would require returning to the definition each time. The definition asks whether $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close to $a$. Proving this directly for each new function is tedious.

Limit rules provide shortcuts. Once you establish that basic limits exist—constants, the identity function, standard functions—you can combine them using algebraic rules to handle complex expressions.

The rules also reveal structure. They show that limits behave like algebraic operations in many ways, which is why calculus meshes so naturally with algebra.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Limit of a Constant`,
    content: `
For any constant $c$:

@academic[formula_callout:Limit of a Constant
$$\\lim_{x \\to a} c = c$$
/calculus/limits/formulas#limit_of_a_constant]@

A constant function $f(x) = c$ outputs the same value regardless of input. As $x$ approaches $a$, the output remains $c$. The limit is simply $c$.

This rule seems trivial but serves as a foundation. Combined with other rules, it handles constant terms in any expression.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Limit of the Identity Function`,
    content: `
For the identity function $f(x) = x$:

@academic[formula_callout:Limit of the Identity Function
$$\\lim_{x \\to a} x = a$$
/calculus/limits/formulas#limit_of_the_identity_function]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

As $x$ approaches $a$, the value of $x$ approaches $a$. This tautology provides the base case for handling any polynomial: every polynomial is built from constants and powers of $x$, and this rule handles the linear term.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Sum and Difference Rules`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then:

@academic[formula_callout:Sum and Difference Rule (Limits)
$$\\lim_{x \\to a} [f(x) \\pm g(x)] = \\lim_{x \\to a} f(x) \\pm \\lim_{x \\to a} g(x)$$
/calculus/limits/formulas#sum_and_difference_rule_limits]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

The limit of a sum is the sum of the limits. The limit of a difference is the difference of the limits.

Both component limits must exist. If either fails to exist, these rules do not apply. The indeterminate form $\\infty - \\infty$ illustrates what can go wrong: two quantities both growing without bound may have a difference that converges, diverges, or oscillates.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Constant Multiple Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and $c$ is a constant:

@academic[formula_callout:Constant Multiple Rule (Limits)
$$\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot \\lim_{x \\to a} f(x)$$
/calculus/limits/formulas#constant_multiple_rule_limits]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

Constants factor out of limits. This is a special case of the product rule where one factor is constant, but it appears frequently enough to state separately.

Scaling a function by a constant scales its limit by the same constant.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Product Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then:

@academic[formula_callout:Product Rule (Limits)
$$\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)$$
/calculus/limits/formulas#product_rule_limits]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

The limit of a product is the product of the limits. This extends to any finite number of factors: if each factor has a limit, the product's limit equals the product of those limits.

The indeterminate form $0 \\cdot \\infty$ shows the rule's limitation. When one factor approaches $0$ while the other grows without bound, the product's behavior depends on the relative rates—it might approach $0$, $\\infty$, or any finite value.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Quotient Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$ with $M \\neq 0$, then:

@academic[formula_callout:Quotient Rule (Limits)
$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}, \\quad \\lim_{x \\to a} g(x) \\neq 0$$
/calculus/limits/formulas#quotient_rule_limits]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

The limit of a quotient is the quotient of the limits, provided the denominator's limit is nonzero.

When $M = 0$, the rule fails. If $L \\neq 0$ and $M = 0$, the limit is typically infinite (analyze the sign to determine $+\\infty$ or $-\\infty$). If both $L = 0$ and $M = 0$, you have the indeterminate form $0/0$, requiring [further techniques](!/calculus/limits/evaluating).
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Power Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and $n$ is a positive integer:

@academic[formula_callout:Power Rule (Limits)
$$\\lim_{x \\to a} [f(x)]^n = \\left[\\lim_{x \\to a} f(x)\\right]^n$$
/calculus/limits/formulas#power_rule_limits]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

Repeated application of the product rule yields this result. The limit of a power is the power of the limit.

For rational exponents:

$$\\lim_{x \\to a} [f(x)]^{m/n} = L^{m/n}$$

provided $L > 0$ (or $L \\geq 0$ when $n$ is odd). Root functions require care with domain restrictions.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Root Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and the $n$-th root exists:

@academic[formula_callout:Root Rule (Limits)
$$\\lim_{x \\to a} \\sqrt[n]{f(x)} = \\sqrt[n]{\\lim_{x \\to a} f(x)}$$
/calculus/limits/formulas#root_rule_limits]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

For odd $n$, this holds for all real $L$. For even $n$, the rule requires $L \\geq 0$ and $f(x) \\geq 0$ near $a$.

This is the power rule with exponent $1/n$. The limit of a root is the root of the limit, provided the root is defined.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Absolute Value Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$, then:

@academic[formula_callout:Absolute Value Rule (Limits)
$$\\lim_{x \\to a} |f(x)| = \\left|\\lim_{x \\to a} f(x)\\right|$$
/calculus/limits/formulas#absolute_value_rule_limits]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

The limit of an absolute value is the absolute value of the limit.

The converse does not hold: $\\lim_{x \\to a} |f(x)}|$ may exist even when $\\lim_{x \\to a} f(x)$ does not. For example, $|(-1)^n|}$ equals $1$ for all $n$, but $(-1)^n$ has no limit as $n \\to \\infty$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj11: {
    title: `Limits of Polynomials`,
    content: `
For any polynomial $p(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$:

@academic[formula_callout:Limit of a Polynomial
$$\\lim_{x \\to a} p(x) = p(a)$$
/calculus/limits/formulas#limit_of_a_polynomial]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

Direct substitution always works for polynomials. This follows from applying the sum, constant multiple, and power rules to each term.

Polynomials are [continuous](!/calculus/limits/continuity) everywhere, so the limit at any point equals the function value at that point.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj12: {
    title: `Limits of Rational Functions`,
    content: `
For a rational function $r(x) = \\dfrac{p(x)}{q(x)}$ where $p$ and $q$ are polynomials:

@academic[formula_callout:Limit of a Rational Function
$$\\lim_{x \\to a} \\frac{p(x)}{q(x)} = \\frac{p(a)}{q(a)}, \\quad q(a) \\neq 0$$
/calculus/limits/formulas#limit_of_a_rational_function]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

When the denominator is nonzero at $a$, substitute directly. When $q(a) = 0$, the quotient rule fails and [other techniques](!/calculus/limits/evaluating) are needed.

If $q(a) = 0$ but $p(a) \\neq 0$, the limit is infinite. If both $p(a) = 0$ and $q(a) = 0$, factor and cancel the common root before substituting.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj13: {
    title: `Composition Rule`,
    content: `
If $\\lim_{x \\to a} g(x) = L$ and $f$ is [continuous](!/calculus/limits/continuity) at $L$, then:

@academic[formula_callout:Composition Rule (Limits)
$$\\lim_{x \\to a} f(g(x)) = f\\left(\\lim_{x \\to a} g(x)\\right) \\quad \\text{if } f \\text{ continuous at } \\lim_{x \\to a} g(x)$$
/calculus/limits/formulas#composition_rule_limits]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

The limit passes through continuous functions. You first find the limit of the inner function, then apply the outer function to that limit.

Continuity of $f$ at $L$ is essential. Without it, the behavior of $f$ near $L$ might not match $f(L)$, and the rule fails.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj14: {
    title: `The Squeeze Theorem`,
    content: `
Suppose $g(x) \\leq f(x) \\leq h(x)$ for all $x$ near $a$ (except possibly at $a$ itself). If:

$$\\lim_{x \\to a} g(x) = L \\quad \\text{and} \\quad \\lim_{x \\to a} h(x) = L$$

then:

$$\\lim_{x \\to a} f(x) = L$$

@academic[formula_callout:Squeeze Theorem
$$g(x) \\leq f(x) \\leq h(x) \\text{ near } a, \\; \\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L \\implies \\lim_{x \\to a} f(x) = L$$
/calculus/limits/formulas#squeeze_theorem]@

@academic[formulas_link:Browse all limit formulas
/calculus/limits/formulas]@

The function $f$ is trapped between two functions that converge to the same limit. It has nowhere to go but $L$.

This theorem proves the [special limit](!/calculus/limits/special) $\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$ through a geometric argument that bounds $\\dfrac{\\sin x}{x}$ between $\\cos x$ and $1$ near zero.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj15: {
    title: `When Rules Fail`,
    content: `
Every rule requires component limits to exist. When they don't, the rule cannot be applied directly.

Indeterminate forms signal this breakdown:

- $\\dfrac{0}{0}$ — quotient rule fails
- $\\dfrac{\\infty}{\\infty}$ — quotient rule fails
- $0 \\cdot \\infty$ — product rule fails
- $\\infty - \\infty$ — difference rule fails
- $0^0$, $1^\\infty$, $\\infty^0$ — power rule fails

These forms require transformation before rules apply. Factor and cancel, rationalize, rewrite in equivalent forms—the goal is to eliminate the indeterminate form so that limit rules can finish the computation.

The [evaluating limits](!/calculus/limits/evaluating) page covers techniques for resolving these cases.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj16: {
    title: `Summary: Master Reference of Limit Rules`,
    content: `
The rules above split into three families: the basic facts (constant, identity), the algebraic combination rules (sum/difference, constant multiple, product, quotient, power, root, absolute value), and the advanced rules (composition, Squeeze Theorem). The table below collects all eleven in one place with each rule&apos;s precise conditions, since the conditions — not the formulas — are what distinguish correct application from a misuse that produces a wrong answer.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {
  id: `intro`,
  title: `Breaking Limits Into Pieces`,
  content: `
Computing limits directly from definitions—chasing epsilons and deltas—is rigorous but impractical for everyday calculation. The power of limit rules lies in decomposition: break a complicated expression into simpler parts, find the limit of each part, then reassemble.

These rules reflect the algebraic structure of limits. The limit of a sum is the sum of the limits. The limit of a product is the product of the limits. Such properties hold because limits preserve algebraic operations, provided the component limits exist.

That final condition is crucial. Every rule listed here requires the individual limits to exist before the rule applies. When a limit yields an indeterminate form, the rules do not directly help—algebraic manipulation must come first.
`
};



const faqQuestions = {
  obj1: {
    question: "Why do limit rules matter?",
    answer: "Limit rules provide shortcuts that avoid returning to the epsilon-delta definition for each new function. Once basic limits are established, you combine them using algebraic rules to handle complex expressions efficiently.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the limit of a constant?",
    answer: "For any constant c, lim(x→a) c = c. A constant function outputs the same value regardless of input, so as x approaches a, the output remains c. This foundational rule handles constant terms in any expression.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the limit of the identity function?",
    answer: "For f(x) = x, lim(x→a) x = a. As x approaches a, the value of x approaches a. This provides the base case for polynomials since every polynomial is built from constants and powers of x.",
    sectionId: "3"
  },
  obj4: {
    question: "What are the sum and difference rules for limits?",
    answer: "If lim f(x) = L and lim g(x) = M, then lim[f(x) + g(x)] = L + M and lim[f(x) − g(x)] = L − M. The limit of a sum is the sum of limits; the limit of a difference is the difference of limits. Both component limits must exist.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the constant multiple rule for limits?",
    answer: "If lim f(x) = L and c is a constant, then lim[c·f(x)] = c·L. Constants factor out of limits. Scaling a function by a constant scales its limit by the same constant.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the product rule for limits?",
    answer: "If lim f(x) = L and lim g(x) = M, then lim[f(x)·g(x)] = L·M. The limit of a product is the product of the limits. This extends to any finite number of factors.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the quotient rule for limits?",
    answer: "If lim f(x) = L and lim g(x) = M with M ≠ 0, then lim[f(x)/g(x)] = L/M. The limit of a quotient is the quotient of limits, provided the denominator's limit is nonzero. When M = 0, the rule fails.",
    sectionId: "7"
  },
  obj8: {
    question: "What is the power rule for limits?",
    answer: "If lim f(x) = L and n is a positive integer, then lim[f(x)]ⁿ = Lⁿ. The limit of a power is the power of the limit. For rational exponents, the rule requires L > 0 (or L ≥ 0 when n is odd).",
    sectionId: "8"
  },
  obj9: {
    question: "What is the root rule for limits?",
    answer: "If lim f(x) = L and the n-th root exists, then lim ⁿ√f(x) = ⁿ√L. For odd n, this holds for all real L. For even n, it requires L ≥ 0 and f(x) ≥ 0 near a.",
    sectionId: "9"
  },
  obj10: {
    question: "What is the absolute value rule for limits?",
    answer: "If lim f(x) = L, then lim|f(x)| = |L|. The limit of an absolute value is the absolute value of the limit. The converse does not hold—|f(x)| may have a limit even when f(x) does not.",
    sectionId: "10"
  },
  obj11: {
    question: "How do you find limits of polynomials?",
    answer: "For any polynomial p(x), lim(x→a) p(x) = p(a). Direct substitution always works for polynomials. This follows from applying sum, constant multiple, and power rules to each term.",
    sectionId: "11"
  },
  obj12: {
    question: "How do you find limits of rational functions?",
    answer: "For r(x) = p(x)/q(x), if q(a) ≠ 0 then lim r(x) = p(a)/q(a). Substitute directly when the denominator is nonzero. When q(a) = 0, factor and cancel common roots or use other techniques.",
    sectionId: "12"
  },
  obj13: {
    question: "What is the composition rule for limits?",
    answer: "If lim g(x) = L and f is continuous at L, then lim f(g(x)) = f(L). The limit passes through continuous functions. Find the inner limit first, then apply the outer function to that limit.",
    sectionId: "13"
  },
  obj14: {
    question: "What is the Squeeze Theorem?",
    answer: "If g(x) ≤ f(x) ≤ h(x) near a, and lim g(x) = lim h(x) = L, then lim f(x) = L. The function f is trapped between two functions converging to the same limit, so f must also converge to L.",
    sectionId: "14"
  },
  obj15: {
    question: "When do limit rules fail?",
    answer: "Rules fail when component limits don't exist. Indeterminate forms (0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, 1^∞, ∞⁰) signal this breakdown. These require algebraic transformation before rules can be applied.",
    sectionId: "15"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Limit Rules",
    "description": "Complete guide to limit laws: sum, difference, product, quotient, power, and root rules. Plus polynomial limits, rational function limits, composition rule, and the Squeeze Theorem.",
    "url": "https://www.learnmathclass.com/calculus/limits/rules",
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
      "name": "Limit Rules"
    },
    "teaches": [
      "Basic limit laws (constant, identity, sum, difference)",
      "Product, quotient, and constant multiple rules",
      "Power and root rules for limits",
      "Limits of polynomials and rational functions",
      "Composition rule and Squeeze Theorem",
      "When limit rules fail: indeterminate forms",
      "Master reference of all limit rules"
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
        "name": "Limit Rules",
        "item": "https://www.learnmathclass.com/calculus/limits/rules"
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
    obj12Table,
    obj15Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Limit Rules: Laws & Theorems | Learn Math Class",
      description: "Complete guide to limit laws: sum, difference, product, quotient, power, and root rules. Plus polynomial limits, rational function limits, composition rule, and the Squeeze Theorem.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/rules",
      name: "Limit Rules"
    },
  }
}
   }

export default function RulesPage({seoData, sectionsContent, introContent, obj12Table, obj15Table, summaryTable, faqQuestions, schemas}) {

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
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key={'obj12-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj12Table }} />,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
          <div key={'obj15-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj15Table }} />,
        ]
    },
    {
        id:'16',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Rules of Limits</h1>
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