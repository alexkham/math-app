// tables-optimized: v4 | 2026-05-24 | 3 tables (obj8 aggregation, obj9 aggregation, obj13 summary capstone)
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
import functionContinuityDiagrams from '@/app/components/functions/continuity/functionContinuityDiagrams'
import functionLimitDiagrams from '@/app/components/functions/limit/functionLimitDiagrams'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline/TaxonomyOutline'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){
const keyWords = [
  "continuity calculus",
  "continuous function definition",
  "types of discontinuities",
  "removable discontinuity",
  "jump discontinuity",
  "infinite discontinuity",
  "intermediate value theorem",
  "IVT calculus",
  "continuous at a point",
  "continuity on interval",
  "limit equals function value",
  "oscillating discontinuity",
  "continuous functions list",
  "discontinuity types calculus",
  "IVT root finding"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj8 — aggregation: master discontinuity classification (covers obj4 + obj5-8)
const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Discontinuity type</th>
      <th style="${tableHeaders.aggregation}">Which condition fails</th>
      <th style="${tableHeaders.aggregation}">Graph signal</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Removable?</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Removable</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">limit exists, but f(a) is undefined OR f(a) ≠ lim<sub>x → a</sub> f(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a single hole in the curve at (a, L)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Jump</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">both <a href="/calculus/limits/one-sided" style="${linkStyle}">one-sided limits</a> exist but differ — two-sided limit fails to exist</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a step / gap between two finite levels</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Infinite</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">at least one one-sided limit is ±∞ — limit fails to exist (in the finite sense)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/limits/infinity" style="${linkStyle}">vertical asymptote</a> at x = a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Oscillating</td>
      <td style="padding: 12px 15px; color: #34495e;">function oscillates without settling — limit fails to exist</td>
      <td style="padding: 12px 15px; color: #34495e;">infinitely many swings as x → a (e.g. sin(1/x))</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
    </tr>
  </tbody>
</table>
`

// obj9 — aggregation: standard continuous function library with possible discontinuity types
const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Function class</th>
      <th style="${tableHeaders.aggregation}">Continuous on</th>
      <th style="${tableHeaders.aggregation}">Possible discontinuities</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all of ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational p(x) / q(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{x : q(x) ≠ 0}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">removable (if p and q share a root) or infinite (if only q vanishes)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exponential a<sup>x</sup>&nbsp;(a &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all of ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithm ln x &nbsp;(and log<sub>b</sub> x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">infinite at x = 0 (vertical asymptote; undefined for x ≤ 0)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trig sin x, cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all of ℝ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trig tan x, sec x, csc x, cot x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">domain of the function (excludes its asymptotes)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">infinite at each asymptote (periodic)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Root <sup>n</sup>√x</td>
      <td style="padding: 12px 15px; color: #34495e;">odd n: all of ℝ. even n: [0, ∞)</td>
      <td style="padding: 12px 15px; color: #34495e;">none in the interior; for even n the function is undefined for x &lt; 0</td>
    </tr>
  </tbody>
</table>
`

// obj13 — summary capstone: where continuity appears as a hypothesis
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Where continuity appears</th>
      <th style="${tableHeaders.summary}">Required form</th>
      <th style="${tableHeaders.summary}">What it enables</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/limits/evaluating" style="${linkStyle}">Evaluating limits by substitution</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f continuous at a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → a</sub> f(x) = f(a) — the limit reduces to plugging in</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Algebraic <a href="/calculus/limits/rules" style="${linkStyle}">limit rules</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f and g continuous at a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f ± g, f · g, and f / g (where g(a) ≠ 0) inherit continuity at a</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Composition rule for limits</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">g continuous at a; f continuous at g(a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f∘g continuous at a; limits pass through the outer function</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Analysis on a closed interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuous on [a, b] via <a href="/calculus/limits/one-sided" style="${linkStyle}">one-sided continuity</a> at endpoints</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the function is well-behaved across the full closed interval — endpoints included</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Intermediate Value Theorem</td>
      <td style="padding: 12px 15px; color: #34495e;">continuous on [a, b]</td>
      <td style="padding: 12px 15px; color: #34495e;">f attains every value between f(a) and f(b) — guarantees roots when the sign changes</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/limits/continuity ──────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Continuity](!/calculus/definitions#continuity) — $\\lim_{x \\to a} f(x) = f(a)$, three conditions in one equation
// - [Discontinuity](!/calculus/definitions#discontinuity) — removable, jump, infinite, or oscillating
// - [Limit](!/calculus/definitions#limit) — the two-sided limit must exist for continuity to hold
// - [One-Sided Limit](!/calculus/definitions#one_sided_limit) — one-sided continuity at endpoints of closed intervals
// - [Asymptote](!/calculus/definitions#asymptote) — infinite discontinuities produce vertical asymptotes`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `The Intuitive Idea`,
//     content: `
// A continuous function has no breaks in its graph. You can trace the curve without lifting your pen. The function value at each point matches what the surrounding values predict.

// Intuitively, small changes in input produce small changes in output. There are no surprises—no sudden jumps, no missing points, no explosions to infinity.

// This matches everyday experience. Temperature varies continuously throughout the day. Position changes continuously as you walk. Discontinuities—sudden jumps or gaps—signal something unusual: a switch being flipped, a boundary being crossed.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj2: {
//     title: `The Formal Definition`,
//     content: `
// A function $f$ is continuous at $x = a$ if three conditions hold:

// **1.** $f(a)$ is defined — the function has a value at $a$

// **2.** $\\lim_{x \\to a} f(x)$ exists — the [two-sided limit](!/calculus/limits/two-sided) exists

// **3.** $\\lim_{x \\to a} f(x) = f(a)$ — the limit equals the function value

// All three conditions must hold. The single equation

// $$\\lim_{x \\to a} f(x) = f(a)$$

// encapsulates all three: the right side requires $f(a)$ to exist, the left side requires the limit to exist, and the equality requires them to match.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj3: {
//     title: `Continuity on Intervals`,
//     content: `
// A function is continuous on an open interval $(a, b)$ if it is continuous at every point in that interval.

// For closed intervals $[a, b]$, the definition adjusts at endpoints where only one direction of approach is available:

// - Continuous on $(a, b)$
// - Right-continuous at $a$: $\\lim_{x \\to a^+} f(x) = f(a)$
// - Left-continuous at $b$: $\\lim_{x \\to b^-} f(x) = f(b)$

// [One-sided continuity](!/calculus/limits/one-sided) handles the boundaries where the domain restricts approach to a single direction.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj4: {
//     title: `Types of Discontinuities`,
//     content: `
// Discontinuities are classified by which condition fails and how.

// **Removable discontinuity:** The limit exists, but $f(a)$ is undefined or $f(a) \\neq \\lim_{x \\to a} f(x)$

// **Jump discontinuity:** Both one-sided limits exist but differ

// **Infinite discontinuity:** At least one one-sided limit is $\\pm\\infty$

// **Oscillating discontinuity:** The limit fails to exist due to oscillation

// Each type reveals different information about the function's behavior and determines whether the discontinuity can be "fixed."
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj5: {
//     title: `Removable Discontinuity`,
//     content: `
// A removable discontinuity occurs when the limit exists but differs from the function value (or the function is undefined).

// Consider:

// $$f(x) = \\frac{x^2 - 1}{x - 1}$$

// For $x \\neq 1$, this simplifies to $x + 1$. The limit as $x \\to 1$ is $2$. But $f(1)$ is undefined—division by zero.

// The graph shows a hole at $(1, 2)$. The discontinuity is removable because redefining $f(1) = 2$ fills the hole and makes the function continuous.

// Removable discontinuities are "accidents" that can be repaired with a single point adjustment.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj6: {
//     title: `Jump Discontinuity`,
//     content: `
// A jump discontinuity occurs when both [one-sided limits](!/calculus/limits/one-sided) exist but are unequal:

// $$\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$$

// The function "jumps" from one value to another at $x = a$.

// The floor function $\\lfloor x \\rfloor$ jumps at every integer. At $x = 2$:

// $$\\lim_{x \\to 2^-} \\lfloor x \\rfloor = 1 \\qquad \\lim_{x \\to 2^+} \\lfloor x \\rfloor = 2$$

// No single value of $f(2)$ can equal both one-sided limits. The discontinuity cannot be removed—the gap is intrinsic to the function's definition.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj7: {
//     title: `Infinite Discontinuity`,
//     content: `
// An infinite discontinuity occurs when the function blows up—at least one one-sided limit equals $\\pm\\infty$.

// For $f(x) = \\dfrac{1}{x}$ at $x = 0$:

// $$\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty \\qquad \\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$$

// The graph has a [vertical asymptote](!/calculus/limits/infinity) at $x = 0$. No finite value can serve as $f(0)$ because the function escapes to infinity from both sides.

// Infinite discontinuities mark points where the function is fundamentally unbounded.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj8: {
//     title: `Oscillating Discontinuity`,
//     content: `
// An oscillating discontinuity occurs when the function oscillates without settling, preventing the limit from existing.

// The classic example is $f(x) = \\sin(1/x)$ at $x = 0$. As $x \\to 0$, the argument $1/x \\to \\pm\\infty$, causing sine to oscillate between $-1$ and $1$ infinitely often.

// No single value $L$ works because the function repeatedly swings away from any candidate. The limit does not exist—not because of a jump or blowup, but because of uncontrolled oscillation.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj9: {
//     title: `Continuous Functions — The Standard Library`,
//     content: `
// Many familiar functions are continuous on their entire domains:

// - **Polynomials:** continuous everywhere

// - **Rational functions:** continuous except where the denominator is zero

// - **Trigonometric functions:** $\\sin x$, $\\cos x$ continuous everywhere; $\\tan x$, $\\sec x$, etc. continuous where defined

// - **Exponential functions:** $e^x$, $a^x$ continuous everywhere

// - **Logarithmic functions:** $\\ln x$, $\\log_a x$ continuous on $(0, \\infty)$

// - **Root functions:** $\\sqrt[n]{x}$ continuous on their domains

// For these functions, [evaluating limits](!/calculus/limits/evaluating) reduces to direct substitution.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj10: {
//     title: `Combinations of Continuous Functions`,
//     content: `
// Continuity is preserved under standard operations. If $f$ and $g$ are continuous at $a$, then so are:

// $$f + g \\qquad f - g \\qquad f \\cdot g \\qquad \\frac{f}{g} \\;(\\text{if } g(a) \\neq 0)$$

// Compositions also preserve continuity: if $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then $f \\circ g$ is continuous at $a$.

// These [limit rules](!/calculus/limits/rules) carry over directly to continuity, since continuity is defined in terms of limits.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj11: {
//     title: `The Intermediate Value Theorem (IVT)`,
//     content: `
// If $f$ is continuous on $[a, b]$ and $k$ is any value between $f(a)$ and $f(b)$, then $f(c) = k$ for some $c$ in $(a, b)$.

// $$f(a) < k < f(b) \\quad \\Longrightarrow \\quad f(c) = k \\text{ for some } c \\in (a, b)$$

// Continuous functions hit every intermediate value—no skipping. The graph cannot jump from $f(a)$ to $f(b)$ without passing through every height in between.

// This theorem guarantees existence. It says a $c$ exists but does not tell you where or whether it is unique.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj12: {
//     title: `Using IVT to Locate Roots`,
//     content: `
// A sign change guarantees a root. If $f$ is continuous on $[a, b]$ with:

// $$f(a) < 0 \\quad \\text{and} \\quad f(b) > 0$$

// then $f(c) = 0$ for some $c \\in (a, b)$.

// **Example:** Show that $x^3 - x - 1 = 0$ has a solution in $(1, 2)$.

// Let $f(x) = x^3 - x - 1$.

// $$f(1) = 1 - 1 - 1 = -1 < 0$$
// $$f(2) = 8 - 2 - 1 = 5 > 0$$

// Since $f$ is continuous and changes sign, IVT guarantees a root between $1$ and $2$.

// The bisection method refines this: repeatedly halve the interval, keeping the half where the sign change occurs, to approximate the root to any desired precision.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj13: {
//     title: `Summary: Where Continuity Is the Hypothesis`,
//     content: `
// Continuity isn&apos;t just a property a function might happen to have; it&apos;s a hypothesis that unlocks a long list of useful results across the limits subtree and beyond. The table below collects five places where this page&apos;s definition of continuity does the work — from the everyday move of direct substitution for limits, through the algebraic and composition rules, to the Intermediate Value Theorem. In each row, the required form of continuity is the condition that turns the right-hand result into a guarantee.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   }
// };

// formulas-optimized: v1 | 2026-06-09 | 3 callouts (obj2, obj10, obj11)
// Concept introduction (section 1) — template G, exclusion. Candidates: the
// continuity tool's smooth, hole, jump and asymptote states. Section 1 had
// no widgets; its old text stays in sectionsContent.obj1, unused. The formal
// definition with its formula box stays in section 2, unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciSortTable = ciTableOpen(['graph', 'a value at the point?', 'values nearby settle?', 'do they match?']) +
  ciRow(['A · smooth', 'yes', 'yes', 'yes'], { color: '#2563EB' }) +
  ciRow(['B · hole', 'no', 'yes', '—'], { shade: true }) +
  ciRow(['C · jump', 'yes', 'no: two different levels', '—']) +
  ciRow(['D · asymptote', 'no', 'no: they run off to infinity', '—'], { shade: true, last: true }) +
  '</tbody></table>'
const ciRescueTable = ciTableOpen(['failed at the point', 'can one value fix it?']) +
  ciRow(['hole, or a wrong value', 'yes: set f(a) to the value nearby points approach'], { color: '#2563EB', cols: [1] }) +
  ciRow(['jump', 'no: the two sides approach different levels'], { shade: true }) +
  ciRow(['asymptote', 'no: there is no level to fill in'], { last: true }) +
  '</tbody></table>'

const sectionsContent = {
  // ─── /calculus/limits/continuity ──────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Continuity](!/calculus/definitions#continuity) — $\\lim_{x \\to a} f(x) = f(a)$, three conditions in one equation
- [Discontinuity](!/calculus/definitions#discontinuity) — removable, jump, infinite, or oscillating
- [Limit](!/calculus/definitions#limit) — the two-sided limit must exist for continuity to hold
- [One-Sided Limit](!/calculus/definitions#one_sided_limit) — one-sided continuity at endpoints of closed intervals
- [Asymptote](!/calculus/definitions#asymptote) — infinite discontinuities produce vertical asymptotes`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `The Intuitive Idea`,
    content: `
A continuous function has no breaks in its graph. You can trace the curve without lifting your pen. The function value at each point matches what the surrounding values predict.

Intuitively, small changes in input produce small changes in output. There are no surprises—no sudden jumps, no missing points, no explosions to infinity.

This matches everyday experience. Temperature varies continuously throughout the day. Position changes continuously as you walk. Discontinuities—sudden jumps or gaps—signal something unusual: a switch being flipped, a boundary being crossed.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `The Formal Definition`,
    content: `
A function $f$ is continuous at $x = a$ if three conditions hold:

**1.** $f(a)$ is defined — the function has a value at $a$

**2.** $\\lim_{x \\to a} f(x)$ exists — the [two-sided limit](!/calculus/limits/two-sided) exists

**3.** $\\lim_{x \\to a} f(x) = f(a)$ — the limit equals the function value

All three conditions must hold. The single equation

@academic[formula_callout:Continuity at a Point
$$f \\text{ continuous at } a \\iff \\lim_{x \\to a} f(x) = f(a)$$
/calculus/formulas#continuity_at_a_point]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

encapsulates all three: the right side requires $f(a)$ to exist, the left side requires the limit to exist, and the equality requires them to match.

@academic[pitfall,aside:true,width:35%:Stopping after two conditions
Seeing that $f(1)$ is defined and $\\lim_{x \\to 1} f(x)$ exists, and calling $f$ continuous, skips condition 3. For $f(x) = x^2$ when $x \\neq 1$ and $f(1) = 3$, the limit is $1 \\neq 3$, so $f$ is not continuous at $1$.
[Read more](!#pitfalls)]@

In practice the conditions are checked in this order, at one specific point $a$. The first is about the single number $f(a)$, the second about the values of $f$ at points near $a$, and the third compares the two numbers these steps produce. The second condition deliberately ignores $f(a)$: the limit is built from values near $a$, never from the value at $a$ itself.
`,
    before: ``,
    after: ``,
    link: ``
  },
  notation: {
    title: `Continuity Notation`,
    lead: `What the single equation packs in, its one-sided halves, and the class mark that turns “continuous on” into set membership.`,
    inherited: `Base $\\lim$ and DNE — [two-sided limits](!/calculus/limits/two-sided); the superscripts — [one-sided limits](!/calculus/limits/one-sided); $\\pm\\infty$ — [limits at infinity](!/calculus/limits/infinity).`,
    entries: [
      {
        id: 'continuity-equation',
        tex: `$\\lim\\limits_{x \\to a} f(x) = f(a)$`,
        read: `The limit of f at a equals f of a`,
        means: `Three claims in one equation — $f(a)$ exists, the [two-sided limit](!/calculus/limits/two-sided) exists, they match. Fail any one and the equation is false or meaningless.`,
        cases: `Interior point — as written. Open interval $(a,b)$ — the equation at every point. Closed $[a,b]$ — endpoints switch to the one-sided form below.`,
        alsoWritten: `Epsilon-delta: $|x - a| < \\delta \\Rightarrow |f(x) - f(a)| < \\varepsilon$. Note the missing $0 <$ — unlike a limit's punctured $0 < |x - a|$, continuity lets $x = a$ in.`,
        confusedWith: `A computation rule. “Evaluate by substitution” is what continuity **licenses**, not what defines it — quoting substitution to prove continuity runs in a circle.`,
      },
      {
        id: 'one-sided-continuity',
        tex: `$\\lim\\limits_{x \\to a^{+}} f(x) = f(a)$`,
        read: `f is right-continuous at a`,
        means: `The continuity equation restricted to one side. The superscript machinery belongs to [one-sided limits](!/calculus/limits/one-sided); this page adds the equality with $f(a)$.`,
        cases: `Left endpoint of $[a,b]$ — right-continuity is all that is asked; the right endpoint mirrors it with $b^{-}$. Every cumulative [distribution function](!/probability/distributions) is right-continuous by convention — this equation is its defining property.`,
        alsoWritten: `$f(a^{+}) = f(a)$, in the one-sided value shorthand.`,
        confusedWith: `Full continuity. At an interior point one-sided continuity is strictly weaker — the floor function is right-continuous everywhere yet jumps at every integer, as in **Jump Discontinuity** below.`,
      },
      {
        id: 'c-class',
        tex: `$f \\in C[a,b]$`,
        read: `f is in C of a, b`,
        means: `Class membership: $C[a,b]$ is the set of all functions continuous on $[a,b]$, $C(I)$ on an interval $I$. Theorem hypotheses shrink to $f \\in C[a,b]$ instead of a sentence.`,
        cases: `$C^0$ — the same class with its ladder rung showing; the ladder $C^1, C^2, \\ldots, C^\\infty$ counts continuous derivatives and is climbed on [higher-order derivatives](!/calculus/derivatives/higher-order#9).`,
        alsoWritten: `$C^0[a,b]$; $C(X)$ in topology, for continuous functions on a space $X$.`,
        confusedWith: `Function arguments. The brackets are the interval's own — $C[a,b]$ is not $C$ evaluated at $a$ and $b$.`,
        sameGlyphElsewhere: `Roman $C$ also counts [combinations](!/combinatorics/combinations) $C(n,r)$, and blackboard $\\mathbb{C}$ names the [complex numbers](!/complex-numbers/basics) — unrelated jobs for one letter.`,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/limits`,
    parentLabel: `Limits`,
  },
  obj3: {
    title: `Continuity on Intervals`,
    content: `
A function is continuous on an open interval $(a, b)$ if it is continuous at every point in that interval.

For closed intervals $[a, b]$, the definition adjusts at endpoints where only one direction of approach is available:

- Continuous on $(a, b)$
- Right-continuous at $a$: $\\lim_{x \\to a^+} f(x) = f(a)$
- Left-continuous at $b$: $\\lim_{x \\to b^-} f(x) = f(b)$

@academic[pitfall,aside:true,width:35%:Asking for a two-sided limit at an endpoint
Rejecting $\\sqrt{x}$ on $[0, 4]$ because there are no values left of $0$, and so no two-sided limit there, asks too much. At a left endpoint only the right side counts: $\\lim_{x \\to 0^+} \\sqrt{x} = 0 = \\sqrt{0}$, and $\\sqrt{x}$ is continuous on $[0, 4]$.
[Read more](!#pitfalls)]@

[One-sided continuity](!/calculus/limits/one-sided) handles the boundaries where the domain restricts approach to a single direction.

Root functions are where this comes up most often. The domain of $\\sqrt{x}$ ends at $0$, so on an interval such as $[0, 4]$ the left endpoint can be approached only from the right. The same happens at the right endpoint of $[-3, 1]$ for $\\sqrt{1 - x}$, whose domain ends at $1$ and which can be approached there only from the left.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Types of Discontinuities`,
    content: `
Discontinuities are classified by which condition fails and how.

**Removable discontinuity:** The limit exists, but $f(a)$ is undefined or $f(a) \\neq \\lim_{x \\to a} f(x)$

**Jump discontinuity:** Both one-sided limits exist but differ

**Infinite discontinuity:** At least one one-sided limit is $\\pm\\infty$

**Oscillating discontinuity:** The limit fails to exist due to oscillation

Each type reveals different information about the function's behavior and determines whether the discontinuity can be "fixed."
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Removable Discontinuity`,
    content: `
A removable discontinuity occurs when the limit exists but differs from the function value (or the function is undefined).

Consider:

@academic[formula_callout:Removable Discontinuity
$$f(x) = \\frac{x^2 - 1}{x - 1}$$]@

For $x \\neq 1$, this simplifies to $x + 1$. The limit as $x \\to 1$ is $2$. But $f(1)$ is undefined—division by zero.

@academic[pitfall,aside:true,width:35%:Reading the value off the simplified formula
Cancelling to $x + 1$ and then setting $f(1) = 1 + 1 = 2$ treats $f$ as $x + 1$ at $x = 1$ as well, and calls it continuous. The original formula gives $\\frac{0}{0}$ at $1$, so $f(1)$ is undefined and $f$ is discontinuous there.
[Read more](!#pitfalls)]@

The graph shows a hole at $(1, 2)$. The discontinuity is removable because redefining $f(1) = 2$ fills the hole and makes the function continuous.

Removable discontinuities are "accidents" that can be repaired with a single point adjustment.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Jump Discontinuity`,
    content: `
A jump discontinuity occurs when both [one-sided limits](!/calculus/limits/one-sided) exist but are unequal:

@academic[formula_callout:Jump Discontinuity
$$\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$$]@

The function "jumps" from one value to another at $x = a$.

The floor function $\\lfloor x \\rfloor$ jumps at every integer. At $x = 2$:

@academic[formula_callout:Jump Discontinuity
$$\\lim_{x \\to 2^-} \\lfloor x \\rfloor = 1 \\qquad \\lim_{x \\to 2^+} \\lfloor x \\rfloor = 2$$]@

@academic[fact,aside:true,width:35%:Increasing functions can only jump
A function that never decreases has both one-sided limits at every point, so each of its discontinuities is a jump. It can jump at every fraction, but never at uncountably many points: each jump skips an interval of heights, the skipped intervals never overlap, and each contains a fraction of its own.]@

No single value of $f(2)$ can equal both one-sided limits. The discontinuity cannot be removed—the gap is intrinsic to the function's definition.

The floor function never decreases: as $x$ moves to the right, $\\lfloor x \\rfloor$ either stays where it is or steps up. Many step functions met in practice behave the same way, such as a parking fee charged for each started hour, or the number of people who have entered a building by time $t$. For any function of this kind, the values just to the left of a point can never lie above the values just to its right.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Infinite Discontinuity`,
    content: `
An infinite discontinuity occurs when the function blows up—at least one one-sided limit equals $\\pm\\infty$.

For $f(x) = \\dfrac{1}{x}$ at $x = 0$:

@academic[formula_callout:Infinite Discontinuity
$$\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty \\qquad \\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$$]@

@academic[pitfall,aside:true,width:35%:Calling every zero of the denominator an asymptote
Taking $x = 1$ as a vertical asymptote of $\\frac{x^2 - 1}{x - 1}$ because its denominator is $0$ there misses the cancellation: near $1$ the function equals $x + 1$, which tends to $2$, so the graph has a hole. Cancel common factors first; a zero left in the denominator, as with $\\frac{1}{x}$ at $0$, gives the asymptote.
[Read more](!#pitfalls)]@

The graph has a [vertical asymptote](!/calculus/limits/infinity) at $x = 0$. No finite value can serve as $f(0)$ because the function escapes to infinity from both sides.

Infinite discontinuities mark points where the function is fundamentally unbounded.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Oscillating Discontinuity`,
    content: `
An oscillating discontinuity occurs when the function oscillates without settling, preventing the limit from existing.

The classic example is $f(x) = \\sin(1/x)$ at $x = 0$. As $x \\to 0$, the argument $1/x \\to \\pm\\infty$, causing sine to oscillate between $-1$ and $1$ infinitely often.

No single value $L$ works because the function repeatedly swings away from any candidate. The limit does not exist—not because of a jump or blowup, but because of uncontrolled oscillation.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Continuous Functions — The Standard Library`,
    content: `
Many familiar functions are continuous on their entire domains:

- **Polynomials:** continuous everywhere

- **Rational functions:** continuous except where the denominator is zero

- **Trigonometric functions:** $\\sin x$, $\\cos x$ continuous everywhere; $\\tan x$, $\\sec x$, etc. continuous where defined

- **Exponential functions:** $e^x$, $a^x$ continuous everywhere

- **Logarithmic functions:** $\\ln x$, $\\log_a x$ continuous on $(0, \\infty)$

- **Root functions:** $\\sqrt[n]{x}$ continuous on their domains

For these functions, [evaluating limits](!/calculus/limits/evaluating) reduces to direct substitution.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Combinations of Continuous Functions`,
    content: `
Continuity is preserved under standard operations. If $f$ and $g$ are continuous at $a$, then so are:

@academic[formula_callout:Continuity Preserved Under Operations
$$f, g \\text{ continuous at } a \\implies f \\pm g, \\; cf, \\; f \\cdot g, \\; f/g \\;(g(a) \\neq 0), \\; f \\circ g \\;(f \\text{ continuous at } g(a)) \\text{ continuous at } a$$
/calculus/formulas#continuity_preserved_under_operations]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

Compositions also preserve continuity: if $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then $f \\circ g$ is continuous at $a$.

These [limit rules](!/calculus/limits/rules) carry over directly to continuity, since continuity is defined in terms of limits.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj11: {
    title: `The Intermediate Value Theorem (IVT)`,
    content: `
If $f$ is continuous on $[a, b]$ and $k$ is any value between $f(a)$ and $f(b)$, then $f(c) = k$ for some $c$ in $(a, b)$.

@academic[formula_callout:Intermediate Value Theorem
$$f \\text{ continuous on } [a,b], \\; k \\text{ between } f(a) \\text{ and } f(b) \\implies \\exists\\, c \\in (a,b) \\text{ with } f(c) = k$$
/calculus/formulas#intermediate_value_theorem]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Reading the theorem backwards
For $f(x) = x^2$ on $[-1, 1]$, $f(-1) = f(1) = 1$, and concluding from this that $f$ never takes the value $0$ reverses the theorem. It speaks only about values between $f(a)$ and $f(b)$; here $f(0) = 0$.
[Read more](!#pitfalls)]@

Continuous functions hit every intermediate value—no skipping. The graph cannot jump from $f(a)$ to $f(b)$ without passing through every height in between.

This theorem guarantees existence. It says a $c$ exists but does not tell you where or whether it is unique.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj12: {
    title: `Using IVT to Locate Roots`,
    content: `
A sign change guarantees a root. If $f$ is continuous on $[a, b]$ with:

@academic[formula_callout:Using IVT to Locate Roots
$$f(a) < 0 \\quad \\text{and} \\quad f(b) > 0$$]@

then $f(c) = 0$ for some $c \\in (a, b)$.

@academic[example:Example
Show that $x^3 - x - 1 = 0$ has a solution in $(1, 2)$.

Let $f(x) = x^3 - x - 1$.

$$f(1) = 1 - 1 - 1 = -1 < 0$$
$$f(2) = 8 - 2 - 1 = 5 > 0$$

Since $f$ is continuous and changes sign, IVT guarantees a root between $1$ and $2$.]@

@academic[pitfall,aside:true,width:35%:Skipping the continuity check
Citing only the sign change of $f(x) = \\frac{1}{x}$, $f(-1) = -1 < 0 < 1 = f(1)$, predicts a root in $(-1, 1)$, yet $\\frac{1}{x} = 0$ has no solution. $f$ is not continuous at $0$, so the theorem does not apply on $[-1, 1]$.
[Read more](!#pitfalls)]@

The argument rests on two separate facts about $f$. The signs at the endpoints come from evaluating $f(1)$ and $f(2)$; continuity on the whole of $[1, 2]$ comes from knowing that $x^3 - x - 1$ is a polynomial. Only together do they force the graph to meet the $x$-axis somewhere between $1$ and $2$.

The bisection method refines this: repeatedly halve the interval, keeping the half where the sign change occurs, to approximate the root to any desired precision.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj13: {
    title: `Summary: Where Continuity Is the Hypothesis`,
    content: `
Continuity isn&apos;t just a property a function might happen to have; it&apos;s a hypothesis that unlocks a long list of useful results across the limits subtree and beyond. The table below collects five places where this page&apos;s definition of continuity does the work — from the everyday move of direct substitution for limits, through the algebraic and composition rules, to the Intermediate Value Theorem. In each row, the required form of continuity is the condition that turns the right-hand result into a guarantee.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj14: {
    title: `Common Pitfalls`,
    content: `
Six mistakes cause most wrong answers about continuity. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Stopping after two conditions**

The function has a value at the point and a limit there, and it is declared continuous without the two numbers being compared. This happens most often with functions defined piecewise, where the value at the point is assigned separately from the formula around it.

Wrong working: let $f(x) = x^2$ for $x \\neq 1$ and $f(1) = 3$. Then $f(1) = 3$ is defined, and $\\lim_{x \\to 1} f(x) = 1^2 = 1$ exists, so $f$ is continuous at $1$.

Right working: condition 3 asks whether the limit equals the value. Here $\\lim_{x \\to 1} f(x) = 1$ and $f(1) = 3$, and $1 \\neq 3$, so $f$ is not continuous at $1$. The discontinuity is removable: redefining $f(1) = 1$ repairs it.

Why it happens: conditions 1 and 2 are the ones that take work, the evaluation and the limit. Once both have succeeded, the comparison looks automatic and is left out.

How to check: write the equation $\\lim_{x \\to a} f(x) = f(a)$ with both sides filled in by numbers. Here it reads $1 = 3$, which is false.

**Asking for a two-sided limit at an endpoint**

At the endpoint of a closed interval, the two-sided limit is demanded, as at an interior point. When the function is not defined on one side, the limit seems not to exist and the function is declared discontinuous.

Wrong working: on $[0, 4]$, the function $\\sqrt{x}$ has no values for $x < 0$, so $\\lim_{x \\to 0^-} \\sqrt{x}$ does not exist, so there is no two-sided limit at $0$, so $\\sqrt{x}$ is not continuous on $[0, 4]$.

Right working: on a closed interval, only right-continuity is required at the left endpoint and only left-continuity at the right endpoint. Here $\\lim_{x \\to 0^+} \\sqrt{x} = 0 = \\sqrt{0}$ and $\\lim_{x \\to 4^-} \\sqrt{x} = 2 = \\sqrt{4}$, and $\\sqrt{x}$ is continuous at every point of $(0, 4)$. So $\\sqrt{x}$ is continuous on $[0, 4]$.

Why it happens: continuity at a point is learned with the two-sided limit, and that version is then applied at endpoints unchanged.

How to check: ask whether the interval, or the domain, contains points on both sides of the point. If it contains points on one side only, the one-sided limit from that side is the one to compute.

**Reading the value off the simplified formula**

A formula that gives $0/0$ at a point is simplified, and the simplified formula is then used to supply the missing value, as if the two formulas were the same function.

Wrong working: $f(x) = \\dfrac{x^2 - 1}{x - 1} = \\dfrac{(x - 1)(x + 1)}{x - 1} = x + 1$, so $f(1) = 2 = \\lim_{x \\to 1} f(x)$, and $f$ is continuous at $1$.

Right working: the cancellation holds only for $x \\neq 1$. At $x = 1$ the original formula gives $\\dfrac{1 - 1}{1 - 1} = \\dfrac{0}{0}$, so $f(1)$ is undefined and condition 1 fails. The limit is $2$, so the discontinuity is removable. The function $x + 1$ is the repaired function, a different function from $f$.

Why it happens: in algebra, simplifying an expression is treated as producing an equal expression, and the restriction $x \\neq 1$ disappears from view once the factor has been cancelled.

How to check: substitute the point into the original formula, never into the simplified one. If the original gives $0/0$, the function has no value there.

**Calling every zero of the denominator an asymptote**

For a rational function, every zero of the denominator is taken to be a vertical asymptote, and so an infinite discontinuity.

Wrong working: the denominator of $\\dfrac{x^2 - 1}{x - 1}$ is $0$ at $x = 1$, so the graph has a vertical asymptote at $x = 1$ and the discontinuity is infinite.

Right working: the numerator is also $0$ at $x = 1$, and the two share the factor $x - 1$. For $x \\neq 1$ the function equals $x + 1$, which tends to $2$ as $x \\to 1$. The limit exists, so the discontinuity is removable: a hole at $(1, 2)$. Compare $\\dfrac{1}{x}$ at $0$: nothing cancels, the numerator stays $1$, and the one-sided limits are $-\\infty$ and $+\\infty$.

Why it happens: division by zero is associated with blowing up, and for the first examples met, such as $\\dfrac{1}{x}$, it does.

How to check: substitute the point into the numerator as well. A nonzero number over $0$ gives an infinite discontinuity. If both are $0$, cancel the common factor and look again. Values near the point show it too: $\\dfrac{x^2 - 1}{x - 1}$ gives $2.01$ at $x = 1.01$ and $1.99$ at $x = 0.99$, with no sign of blowing up.

**Reading the theorem backwards**

When the value $k$ does not lie between $f(a)$ and $f(b)$, for instance when $f(a)$ and $f(b)$ have the same sign and $k = 0$, the theorem is taken to say that $f$ never reaches $k$ on $[a, b]$.

Wrong working: $f(x) = x^2$ on $[-1, 1]$ has $f(-1) = 1$ and $f(1) = 1$. There is no sign change, so $x^2 = 0$ has no solution in $(-1, 1)$.

Right working: the theorem only goes one way. If $f$ is continuous and $k$ lies between $f(a)$ and $f(b)$, then $f(c) = k$ for some $c$; if $k$ does not lie between them, the theorem says nothing. Here $f(0) = 0$, so the equation has the solution $x = 0$.

Why it happens: the theorem is used as a test for roots, and a test is expected to answer both yes and no.

How to check: read a missing sign change as "no conclusion", not as "no root". Evaluating at an interior point settles it here: $f(0) = 0$.

**Skipping the continuity check**

A sign change of $f$ at the two endpoints is taken as enough to guarantee a root, without checking that $f$ is continuous on the whole interval.

Wrong working: $f(x) = \\dfrac{1}{x}$ has $f(-1) = -1 < 0$ and $f(1) = 1 > 0$, so by the theorem $\\dfrac{1}{c} = 0$ for some $c$ in $(-1, 1)$.

Right working: $\\dfrac{1}{x}$ is undefined at $0$, which lies in $[-1, 1]$, so $f$ is not continuous on $[-1, 1]$ and the theorem does not apply. In fact $\\dfrac{1}{c}$ is never $0$: the sign changes across the vertical asymptote at $x = 0$, not through a root.

Why it happens: in most exercises the function is a polynomial, continuity holds automatically, and checking it becomes a step that is easy to skip.

How to check: list the points of $[a, b]$ where $f$ is undefined or changes formula, such as zeros of a denominator or the break points of a piecewise definition. If there are any, continuity on $[a, b]$ has to be settled before the theorem is used.
`,
    before: ``,
    after: ``,
    link: ``
  }
};


const introContent = {
    id:"intro",
  title: `Where Limits Meet Function Values`,
  content: `
A function is continuous at a point when its limit there equals its actual value. No gap, no jump, no missing point—the function does exactly what its nearby behavior predicts.

This simple requirement has profound consequences. Continuous functions behave predictably: you can evaluate limits by direct substitution, the graph has no breaks, and values change gradually rather than abruptly.

Discontinuities occur when something fails. The function might be undefined at the point, the limit might not exist, or the limit might exist but differ from the function value. Classifying what goes wrong reveals the nature of the break and whether it can be repaired.
`
};

// FAQ pass: cut all twelve. Every question mapped to an h2 stating its answer
// — including the three-conditions query, which "The Formal Definition"
// answers in its opening line, and the four discontinuity types, each with its
// own heading. Invented three from the notation section, whose entries no
// heading surfaces.
const faqQuestions = {
  obj1: {
    question: "What does f ∈ C[a,b] mean?",
    answer: "It says f belongs to C[a,b], the set of all functions continuous on the closed interval [a, b]. The brackets are the interval’s own, not arguments to C. Writing it this way shrinks a theorem hypothesis from a sentence to one symbol. The same class is also written C⁰ — the bottom rung of the ladder C¹, C², …, C^∞, which counts [continuous derivatives](!/calculus/derivatives/higher-order#9).",
    sectionId: "notation"
  },
  obj2: {
    question: "How does the epsilon-delta definition of continuity differ from the one for limits?",
    answer: "By a single missing condition. A limit requires 0 < |x − a| < δ, deliberately puncturing the point so that x never equals a. Continuity drops the 0 <, writing |x − a| < δ implies |f(x) − f(a)| < ε, which lets x = a into the argument. That inclusion is exactly what forces the value at a to agree with the surrounding behavior.",
    sectionId: "notation"
  },
  obj3: {
    question: "Can you prove a function is continuous by substitution?",
    answer: "No — that reasoning runs in a circle. Evaluating a limit by substituting the point is something continuity licenses, not something that establishes it; substitution works precisely because the function is already known to be continuous there. To prove continuity, check the three conditions directly or cite a theorem, such as the continuity of polynomials or of sums and products of continuous functions.",
    sectionId: "notation"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Continuity",
    "description": "Learn continuity in calculus: formal definition, types of discontinuities (removable, jump, infinite, oscillating), continuous functions, and the Intermediate Value Theorem for finding roots.",
    "url": "https://www.learnmathclass.com/calculus/limits/continuity",
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
      "name": "Continuity in Calculus"
    },
    "teaches": [
      "Formal definition of continuity at a point",
      "Continuity on open and closed intervals",
      "Types of discontinuities: removable, jump, infinite, oscillating",
      "Standard continuous functions and their domains",
      "Combinations and compositions of continuous functions",
      "Intermediate Value Theorem and root finding",
      "Where continuity appears as a hypothesis in calculus"
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
        "name": "Continuity",
        "item": "https://www.learnmathclass.com/calculus/limits/continuity"
      }
    ]
  }
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const ctF = (x) => x ** 3 - 3 * x, ctG = (x) => x ** 3 - x - 1;
  const ctRoots = [-1.5321, 0.3473, 1.8794];
  const fpIvtLevel = { kind: 'pieces', svgTitle: 'x^3 - 3x on [-2, 2.2] runs from -2 to about 4.05, so it takes the value 1 somewhere; here at three points', xRange: [-2.5, 2.5], yRange: [-3, 5],
    pieces: [
      { fn: () => 1, from: 99, to: 99, ends: [null, null], color: 'r', ghost: [[-2.5, 2.5]], label: { text: 'k = 1', x: -2.4, y: 1, pos: 'ne' } },
      { fn: ctF, from: -2, to: 2.2, ends: ['closed', 'closed'], color: 'f', label: { text: 'y = x³ − 3x', x: 2.1, y: ctF(2.1), pos: 'w' } },
    ],
    points: ctRoots.map((c) => ({ x: c, y: 1 })),
    notes: [{ x: -2.4, y: -2.5, text: 'f(−2) = −2 < 1 < f(2.2) ≈ 4.05', pos: 'e' }, { x: 0.2, y: -2.5, text: 'three c with f(c) = 1', pos: 'e', color: 'r' }],
    caption: 'IVT promises at least one c with f(c) = k; here there are three' };
  const fpBisection = { kind: 'pieces', svgTitle: 'x^3 - x - 1 is -1 at 1 and 5 at 2; halving the interval at 1.5 and 1.25 traps the root near 1.32', xRange: [0.8, 2.2], yRange: [-2, 6],
    pieces: [{ fn: ctG, from: 0.8, to: 2.1, ends: [null, null], color: 'f', label: { text: 'y = x³ − x − 1', x: 1.95, y: ctG(1.95), pos: 'w' } }],
    points: [{ x: 1, y: -1, label: 'f(1) = −1', pos: 'se' }, { x: 2, y: 5, label: 'f(2) = 5', pos: 'w' }, { x: 1.5, y: ctG(1.5), label: 'f(1.5) > 0', pos: 'nw' }, { x: 1.25, y: ctG(1.25), label: 'f(1.25) < 0', pos: 'se' }],
    vlines: [{ x: 1.25 }, { x: 1.5 }],
    notes: [{ x: 0.85, y: 5.4, text: 'sign change on [1.25, 1.5]: the root is there', pos: 'e', color: 'r' }],
    caption: 'Each halving keeps the half where the sign changes' };
  const conceptIntroFigures = {
    smooth: functionContinuityDiagrams.smooth,
    hole: functionContinuityDiagrams.hole,
    jump: functionContinuityDiagrams.jump,
    asymptote: functionContinuityDiagrams.asymptote,
    sortTable: ciSortTable,
    rescueTable: ciRescueTable,
  };

  const demoUnits = {
    three: demoUnitFrame({
      svg: functionContinuityDiagrams.wrongvalue,
      caption: 'Condition 3 fails: lim f(x) &#8800; f(1)',
      text: 'The checker tests the three conditions in order: here f(1) is defined and the two-sided limit exists, but the marked point sits away from the limit, so the equality in condition 3 fails and the verdict is discontinuous. One relocated point would make the function continuous. Run the three-step check on any example on the',
      href: '/calculus/visual-tools/continuity',
      linkText: 'continuity checker',
    }),
    removable: demoUnitFrame({
      svg: functionContinuityDiagrams.hole,
      caption: 'Hole at x = 1: removable',
      text: 'The limit at 1 exists and equals 2, but the function has no value there; filling the single missing point would make the curve continuous, which is why the discontinuity is called removable. The simplified formula x + 1 is exactly that repaired function. Compare the hole with the repaired curve on the',
      href: '/calculus/visual-tools/continuity',
      linkText: 'continuity checker',
    }),
    jump: demoUnitFrame({
      svg: functionContinuityDiagrams.jump,
      caption: 'Jump at x = 0: left limit 0, right limit 1',
      text: 'From the left the function approaches 0, from the right it approaches 1, and no single value could bridge the gap: the two-sided limit does not exist, so condition 2 fails. The size of the jump is the difference of the two one-sided limits. Read the two one-sided values on the',
      href: '/calculus/visual-tools/continuity',
      linkText: 'continuity checker',
    }),
    infinite: demoUnitFrame({
      svg: functionContinuityDiagrams.asymptote,
      caption: 'Asymptote at x = 0: the limit is infinite',
      text: 'Approaching 0 the function runs off the top or bottom of the picture: at least one one-sided limit is infinite, so there is no finite limit and no value that could be assigned. The vertical line x = 0 is the asymptote the curve hugs. Watch the readings blow up on the',
      href: '/calculus/visual-tools/continuity',
      linkText: 'continuity checker',
    }),
    oscillating: demoUnitFrame({
      svg: functionLimitDiagrams.oscillating,
      caption: 'sin(1/x) near 0: no limit at all',
      text: 'The probes at &#177;0.5 read sin 2 &#8776; 0.91, but moving them inward the readings swing between &#8722;1 and 1 faster and faster, never settling: the limit fails to exist not by running away but by refusing to choose. No value of f(0) could make this continuous. Squeeze the probes and watch the readings swing on the',
      href: '/calculus/visual-tools/limit',
      linkText: 'limit explorer',
    }),
    ivtLevel: demoUnitFrame({
      svg: renderFunctionPlotV4(fpIvtLevel),
      caption: 'Every height in between is reached',
      text: 'f(x) = x&#179; &#8722; 3x is continuous on [&#8722;2, 2.2], starts at f(&#8722;2) = &#8722;2 and ends at about 4.05. Any level between those two heights, such as the dashed k = 1, must be crossed: the unbroken curve cannot get from below the line to above it without meeting it. Here it meets it three times. The theorem only promises at least one such c, not where it is or how many there are.',
    }),
    bisection: demoUnitFrame({
      svg: renderFunctionPlotV4(fpBisection),
      caption: 'Trapping a root by halving',
      text: 'The section&#8217;s f(x) = x&#179; &#8722; x &#8722; 1 is negative at 1 and positive at 2, so a root lies between. f(1.5) &#8776; 0.875 is positive, so the root is in [1, 1.5]; f(1.25) &#8776; &#8722;0.30 is negative, so it is in [1.25, 1.5], between the dashed lines. Each step halves the interval that must contain the root; the root itself is about 1.3247.',
    }),
  };

  const discontinuityTypes = {
    legend: [
      { label: 'the limit exists: one value repairs it', tone: 'accent' },
      { label: 'the limit does not exist: nothing repairs it', tone: 'warm' },
    ],
    nodes: [
      {
        name: 'Removable',
        def: 'the limit exists; the fault is a single value, so redefining $f(a)$ makes the function continuous',
        children: [
          { name: '[Hole](!/calculus/limits/continuity#5)', def: '$f(a)$ is undefined', example: '$(x^2 - 1)/(x - 1)$ at $x = 1$: limit $2$, no value' },
          { name: 'Misplaced value', def: '$f(a)$ exists but differs from the limit', example: 'the point sits off the curve' },
        ],
      },
      {
        name: 'Non-removable',
        def: 'the limit does not exist; no single value of $f(a)$ can fix it',
        children: [
          { name: '[Jump](!/calculus/limits/continuity#6)', def: 'both one-sided limits exist but differ', example: '$\\lfloor x \\rfloor$ at $x = 2$: $1$ from the left, $2$ from the right', flag: true },
          { name: '[Infinite](!/calculus/limits/continuity#7)', def: 'at least one one-sided limit is $\\pm\\infty$', example: '$1/x$ at $x = 0$', flag: true },
          { name: '[Oscillating](!/calculus/limits/continuity#8)', def: 'the limit fails to exist because the function oscillates without settling', example: '$\\sin(1/x)$ at $x = 0$', flag: true },
        ],
      },
    ],
  };

return {
  props: {
    demoUnits,
    conceptIntroFigures,
    discontinuityTypes,
    sectionsContent,
    introContent,
    obj8Table,
    obj9Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Continuity: Definition, Types & IVT | Learn Math Class",
      description: "Learn continuity in calculus: formal definition, types of discontinuities (removable, jump, infinite, oscillating), continuous functions, and the Intermediate Value Theorem for finding roots.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/continuity",
      name: "Continuity"
    },
  }
}
   }

const siteTheme = {
  title: '#06357A', titleSoft: '#bfdbfe', titleLine: '#2563EB',
  accent: '#2563EB', indigoSoft: '#dbeafe', line2: '#bfdbfe',
  panelSoft: '#eff6ff', panelSofter: '#f8fafc',
  warm: '#B45309', warmSoft: '#fef3c7', warmLine: '#fcd34d', warmInk: '#92400e',
}

export default function ContinuityPage({seoData, sectionsContent, introContent, discontinuityTypes, obj8Table, obj9Table, summaryTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciCandidates = (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 14px' }}>
      {[['smooth', 'A · smooth'], ['hole', 'B · hole'], ['jump', 'C · jump'], ['asymptote', 'D · asymptote']].map(([k, label]) => (
        <div key={k} style={{ textAlign: 'center' }}>
          <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[k] }} />
          <div style={{ fontWeight: 700, color: '#06357a', fontSize: '15px', margin: '-4px 0 6px' }}>{label}</div>
        </div>
      ))}
    </div>
  )

  // Section 1 concept introduction — template G (exclusion).
  const conceptIntro = {
    beats: [
      {
        id: 'candidates',
        lead: `Four graphs, each looked at around one marked point — which of them is continuous there?`,
        content: `Away from their marked points all four behave alike: the graph is one unbroken curve. At the marked point they differ. Before giving the property a name, look at what each graph does exactly there.`,
        visual: ciCandidates,
        caption: `A: $x^2$, smooth everywhere. B: a point missing at $x = 1$. C: a step at $x = 0$. D: a vertical asymptote. These are frozen states of the [continuity explorer](!/calculus/visual-tools/continuity).`,
      },
      {
        id: 'sort',
        kind: 'instance',
        lead: `Only A passes; B, C and D each break at the point.`,
        content: [
          `Ask the same three questions of every graph at its marked point.`,
          ciTable('sortTable'),
          `Only A answers yes three times. Each of the others fails at least one question, and which one it fails is what tells them apart.`,
        ],
      },
      {
        id: 'fault',
        lead: `Each failure is at one exact place, and the near-misses do not fail at all.`,
        content: `B fails because the point itself is missing — the curve on both sides heads for one height, but nothing sits there. C fails because the two sides head for two different heights. D fails because the values near the point do not settle at all. One more case looks harmless but also fails: a curve whose nearby values head for one height while the dot at the point sits somewhere else, a wrong value. The near-misses pass. $|x|$ has a sharp corner at $0$, but nothing is missing or misplaced, so it is continuous there — a corner is not a break. And a curve can be continuous at a point however steep it is, as long as it arrives.`,
      },
      {
        id: 'rule',
        lead: `The rule: the value at the point is what the nearby values approach.`,
        content: `A function is continuous at a point when the function value at each point matches what the surrounding values predict: nearby inputs give outputs closing in on a height, and the point sits exactly at that height. Informally, you can trace the curve without lifting your pen. That picture works for whole stretches of a graph, but it breaks down for strange functions and says nothing about a single point — which is why the rule is stated with a limit, one point at a time.`,
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A function $f$ is [continuous](!/calculus/definitions#continuity) at $x = a$ if its [limit](!/calculus/limits) as $x$ approaches $a$ exists and equals its value there: $\\lim_{x \\to a} f(x) = f(a)$.`,
        footer: `The next section takes this one equation apart into the three conditions it contains.`,
      },
      {
        id: 'kind',
        lead: `Continuity is a property of a function at a point; on an interval, it holds at every point.`,
        content: `It is a yes-or-no question about one point. A function continuous at every point of an interval is continuous on that interval, and that is the everyday sense of the word: small changes in input produce small changes in output. Temperature varies continuously throughout the day. Position changes continuously as you walk. Discontinuities—sudden jumps or gaps—signal something unusual: a switch being flipped, a boundary being crossed.`,
      },
      {
        id: 'caveat',
        lead: `Some rejected graphs can be repaired with a single value; others cannot.`,
        content: [
          `Whether one changed value would fix the failure sorts the discontinuities into kinds.`,
          ciTable('rescueTable'),
          `B is repaired by giving the function the value $2$ at $x = 1$; C and D stay broken whatever value is chosen.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page states the definition formally, then goes through each kind of discontinuity — removable, jump, infinite, oscillating — one-sided continuity, continuity on intervals, the functions that are continuous everywhere, and the theorems that continuity guarantees.`,
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
                  <div key={'unit-three'} dangerouslySetInnerHTML={{ __html: demoUnits.three }} />,
          `Each way the three conditions can fail has a name, and the next sections take them in turn.`,
          `@academic[punchline:Continuity at a point is one equation, limit equals value, and it fails when either side is missing or the two disagree.]@`,
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
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          `The four types sort into two groups by one question: does the limit at the point exist? If it does, the fault is confined to a single value and can be repaired by redefining $f(a)$. If it does not, no choice of $f(a)$ can help, and the three ways the limit can fail give the three remaining types.`,
          <DiagramFrame
            key={'obj4-diagram'}
            id="discontinuity-types"
            title="Four discontinuities, two groups: repairable or not"
            source="/calculus/limits/continuity"
          >
            <TaxonomyOutline data={discontinuityTypes} variant="outline" exportable={false} theme={siteTheme} />
          </DiagramFrame>,
          `The group is settled before $f(a)$ is even looked at: compute the two one-sided limits. If they agree and are finite, the discontinuity is removable and only $f(a)$ needs checking. If they disagree, it is a jump; if one of them is infinite, it is infinite; if neither settles on a value, it is oscillating. Each type is taken up in its own section below.`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
                  <div key={'unit-removable'} dangerouslySetInnerHTML={{ __html: demoUnits.removable }} />,
          `Removable discontinuities are the mild case: the function is continuous except for a bookkeeping error at one point.`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
                  <div key={'unit-jump'} dangerouslySetInnerHTML={{ __html: demoUnits.jump }} />,
          `Jumps are the natural discontinuities of piecewise definitions and of the floor and ceiling functions.`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
                  <div key={'unit-infinite'} dangerouslySetInnerHTML={{ __html: demoUnits.infinite }} />,
          `Infinite discontinuities mark the vertical asymptotes of rational functions.`,
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
                  <div key={'unit-oscillating'} dangerouslySetInnerHTML={{ __html: demoUnits.oscillating }} />,
          `Oscillating discontinuities are rare in practice but show that the limit can fail without any value being infinite.`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div key={'obj9-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj9Table }} />,
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
          <div key={'unit-ivtLevel'} dangerouslySetInnerHTML={{ __html: demoUnits.ivtLevel }} />,
          `Without continuity the guarantee fails: a jump can skip a level entirely.`,
          `@academic[fact,aside:true,width:35%:Two opposite points, one temperature
At any moment some pair of opposite points on the equator has exactly the same temperature. Let $g$ be the temperature at a point minus the temperature at the point opposite; going halfway round turns $g$ into $-g$, so the continuous $g$ cannot keep one sign and is $0$ somewhere.]@

The theorem is often applied to a function built for the purpose rather than to the one in the question. To show that two continuous quantities $p$ and $q$ are equal somewhere on $[a, b]$, apply it to their difference $g = p - q$, which is continuous too. If $g$ is negative at one end and positive at the other, then $g(c) = 0$ for some $c$, and so $p(c) = q(c)$. Nothing more about $p$ and $q$ needs to be known than their continuity and the two signs.`,
          `@academic[punchline:A continuous function cannot skip a value on its way, so solutions exist even when no one can say where.]@`,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key={'unit-bisection'} dangerouslySetInnerHTML={{ __html: demoUnits.bisection }} />,
          `Ten halvings shrink [1, 2] to an interval shorter than 0.001.`,
          `@academic[punchline:A sign change in a continuous function proves a root exists, and repeated halving pins it down to any accuracy.]@`,
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
        title:`Continuity FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Continuity of Limits</h1>
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