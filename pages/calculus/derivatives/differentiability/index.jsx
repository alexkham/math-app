
  
// tables-optimized: v4 | 2026-05-24 | 3 tables (obj7 aggregation, obj8 aggregation, obj10 summary capstone)
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
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){
// Concept introduction (section 1) — template B, definition first. Running
// instance: f(x) = x² at x = 1, with |x| at 0 as the contrast. Old obj1 text
// is kept in sectionsContent.obj1, unused; its formula box is carried in
// unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciQuotientTable = ciTableOpen(['h', '(1 + h)²', 'difference quotient', 'equals 2 + h']) +
  ciRow(['0.1', '1.21', '0.21 / 0.1', '2.1']) +
  ciRow(['0.01', '1.0201', '0.0201 / 0.01', '2.01'], { shade: true }) +
  ciRow(['0.001', '1.002001', '0.002001 / 0.001', '2.001']) +
  ciRow(['−0.001', '0.998001', '−0.001999 / −0.001', '1.999'], { shade: true }) +
  ciRow(['−0.01', '0.9801', '−0.0199 / −0.01', '1.99']) +
  ciRow(['−0.1', '0.81', '−0.19 / −0.1', '1.9'], { shade: true, last: true }) +
  '</tbody></table>'
const ciCornerTable = ciTableOpen(['h', '|h| / h']) +
  ciRow(['0.1, 0.01, 0.001, …', '1'], { color: '#2563EB', cols: [1] }) +
  ciRow(['−0.1, −0.01, −0.001, …', '−1'], { shade: true, last: true, color: '#a4243b', cols: [1] }) +
  '</tbody></table>'

const keyWords = [
  "differentiability",
  "differentiable function",
  "differentiability vs continuity",
  "when is a function differentiable",
  "corner derivative",
  "cusp calculus",
  "vertical tangent",
  "one-sided derivative",
  "non-differentiable function",
  "differentiability definition",
  "left-hand right-hand derivative",
  "differentiability implies continuity",
  "derivative does not exist",
  "piecewise function differentiable"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj7 — aggregation: one-sided derivatives reference
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Derivative</th>
      <th style="${tableHeaders.aggregation}">Notation</th>
      <th style="${tableHeaders.aggregation}">Defining limit</th>
      <th style="${tableHeaders.aggregation}">Where it is the natural object</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Left-hand</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;₋(a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>h→0⁻</sub> [f(a+h) − f(a)] / h</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">right endpoint of an interval; left side of a piecewise boundary</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Right-hand</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;₊(a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>h→0⁺</sub> [f(a+h) − f(a)] / h</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">left endpoint of an interval; right side of a piecewise boundary</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Two-sided</td>
      <td style="padding: 12px 15px; color: #34495e;">f&apos;(a)</td>
      <td style="padding: 12px 15px; color: #34495e;">requires f&apos;₋(a) = f&apos;₊(a), both finite</td>
      <td style="padding: 12px 15px; color: #34495e;">interior points; the standard derivative</td>
    </tr>
  </tbody>
</table>
`

// obj8 — aggregation: differentiability on intervals
const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Setting</th>
      <th style="${tableHeaders.aggregation}">Differentiable means</th>
      <th style="${tableHeaders.aggregation}">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Open interval (a, b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f differentiable at every point in (a, b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no endpoint conditions — endpoints are excluded</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Closed interval [a, b]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">differentiable on (a, b); right-hand derivative at a; left-hand derivative at b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">required hypothesis for MVT and Rolle&apos;s Theorem</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Piecewise boundary at a</td>
      <td style="padding: 12px 15px; color: #34495e;">f continuous at a AND f&apos;₋(a) = f&apos;₊(a) (both finite)</td>
      <td style="padding: 12px 15px; color: #34495e;">continuity alone is not enough — |x| is continuous at 0 but not differentiable</td>
    </tr>
  </tbody>
</table>
`

// obj10 — summary capstone: typology of differentiability failure modes
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Failure mode</th>
      <th style="${tableHeaders.summary}">Left-hand f&apos;(a)</th>
      <th style="${tableHeaders.summary}">Right-hand f&apos;(a)</th>
      <th style="${tableHeaders.summary}">Continuous at a?</th>
      <th style="${tableHeaders.summary}">Canonical example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Corner</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">finite</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">finite, different from left</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = |x| at x = 0 (slopes −1 and +1)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cusp</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">±∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∓∞ (opposite sign)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = x<sup>2/3</sup> at x = 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical tangent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">±∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">±∞ (same sign as left)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = x<sup>1/3</sup> at x = 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Discontinuity</td>
      <td style="padding: 12px 15px; color: #34495e;">undefined or DNE</td>
      <td style="padding: 12px 15px; color: #34495e;">undefined or DNE</td>
      <td style="padding: 12px 15px; color: #34495e;">no</td>
      <td style="padding: 12px 15px; color: #34495e;">step function at the jump; 1/x at 0</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/derivatives/differentiability ──────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Differentiability](!/calculus/definitions#differentiability) — the limit defining the derivative exists and is finite
// - [Derivative](!/calculus/definitions#derivative) — the object whose existence differentiability governs
// - [Continuity](!/calculus/definitions#continuity) — differentiability implies continuity, but not the reverse
// - [Tangent Line](!/calculus/definitions#tangent_line) — exists at differentiable points; absent at corners, cusps, vertical tangents`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `The Definition of Differentiability`,
//     content: `
// A function $f$ is differentiable at $x = a$ if the limit

// $$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

// exists and is finite. This is a two-sided [limit](!/calculus/limits/two-sided): the difference quotient must approach the same finite value whether $h \\to 0^+$ or $h \\to 0^-$.

// Geometrically, differentiability at $a$ means the graph of $f$ has a well-defined, non-vertical tangent line at $(a, f(a))$. The secant lines through $(a, f(a))$ and nearby points converge to a single line regardless of the direction of approach.

// If the limit does not exist, or if it equals $\\pm\\infty$, or if $f(a)$ itself is undefined, then $f$ is not differentiable at $a$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Differentiability Implies Continuity`,
//     content: `
// If $f$ is differentiable at $a$, then $f$ is continuous at $a$. The proof is direct.

// Rewrite $f(x) - f(a)$ as

// $$f(x) - f(a) = \\frac{f(x) - f(a)}{x - a} \\cdot (x - a)$$

// As $x \\to a$, the first factor approaches $f'(a)$ (which exists by assumption) and the second factor approaches $0$. Their product approaches $f'(a) \\cdot 0 = 0$, so $\\lim_{x \\to a} f(x) = f(a)$.

// This establishes a hierarchy: differentiability is a stronger condition than continuity. Every differentiable function is continuous, but the reverse implication fails. The functions that are continuous but not differentiable at a point form a significant and instructive class.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Corners`,
//     content: `
// A corner occurs when the left-hand and right-hand derivatives both exist as finite numbers but disagree.

// $$\\lim_{h \\to 0^-} \\frac{f(a + h) - f(a)}{h} \\neq \\lim_{h \\to 0^+} \\frac{f(a + h) - f(a)}{h}$$

// The graph makes a sharp turn at $x = a$—two distinct tangent directions meeting at a single point. The function is continuous at $a$ (no break in the graph), but the two-sided limit of the difference quotient fails to exist because the one-sided limits differ.

// The standard example is $f(x) = |x|$ at $x = 0$. The left-hand derivative is $-1$ and the right-hand derivative is $+1$. The graph forms a V-shape, and no single straight line can serve as a tangent. More generally, any piecewise linear function with a slope change at a junction has a corner there.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Cusps`,
//     content: `
// A cusp occurs when both one-sided derivatives are infinite but with opposite signs. As $h \\to 0^+$, the difference quotient approaches $+\\infty$ (or $-\\infty$), and as $h \\to 0^-$, it approaches the opposite.

// The graph comes to a sharp point where the curve doubles back on itself with vertical tangent directions from both sides. Unlike a corner, the slopes do not stay finite—they blow up.

// The standard example is $f(x) = x^{2/3}$ at $x = 0$. The derivative $f'(x) = \\frac{2}{3}x^{-1/3}$ tends to $+\\infty$ from the right and $-\\infty$ from the left. The graph has a pointed tip at the origin, sharper than any corner. The function is continuous at $x = 0$, but the infinite and opposing slopes prevent differentiability.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Vertical Tangents`,
//     content: `
// A vertical tangent occurs when the two-sided limit of the difference quotient exists but equals $+\\infty$ or $-\\infty$. Both sides agree on the direction—unlike a cusp—but the slope is infinite.

// The standard example is $f(x) = x^{1/3}$ at $x = 0$. The derivative formula $f'(x) = \\frac{1}{3}x^{-2/3}$ gives $f'(x) \\to +\\infty$ as $x \\to 0$ from either side. The graph passes smoothly through the origin with no sharp point, but the tangent line there is the vertical line $x = 0$.

// A vertical tangent line has undefined slope, so the derivative does not exist in the usual sense. The function is continuous and the graph is smooth, yet the rate of change is unbounded at that point. This is the mildest form of non-differentiability—the geometry is clean, but the numerical value of the derivative is not finite.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Discontinuities`,
//     content: `
// If $f$ is not [continuous](!/calculus/limits/continuity) at $a$, then $f$ is not differentiable at $a$. Since differentiability implies continuity, any discontinuity automatically rules out differentiability.

// At a jump discontinuity, the function leaps from one value to another. No tangent line can bridge the gap. At an infinite discontinuity (vertical asymptote), the function blows up—there is no point $(a, f(a))$ through which a tangent could pass. At a removable discontinuity, the limit exists but either $f(a)$ is undefined or differs from the limit; redefining $f(a)$ to equal the limit restores continuity and may restore differentiability.

// Discontinuities are the most straightforward obstruction to differentiability. The other failure modes—corners, cusps, vertical tangents—are subtler because the function is continuous at the problematic point.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `One-Sided Derivatives`,
//     content: `
// The left-hand derivative of $f$ at $a$ is

// $$f'_-(a) = \\lim_{h \\to 0^-} \\frac{f(a + h) - f(a)}{h}$$

// and the right-hand derivative is

// $$f'_+(a) = \\lim_{h \\to 0^+} \\frac{f(a + h) - f(a)}{h}$$

// The two-sided derivative $f'(a)$ exists if and only if both one-sided derivatives exist, are finite, and are equal: $f'_-(a) = f'_+(a)$.

// One-sided derivatives appear naturally at endpoints of closed intervals, where only one direction of approach is available. They also arise at boundaries of piecewise functions, where different formulas govern the left and right sides. Checking whether the one-sided derivatives match at a boundary is the standard test for differentiability of a piecewise-defined function.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Differentiability on Intervals`,
//     content: `
// A function is differentiable on an open interval $(a, b)$ if it is differentiable at every point in $(a, b)$. No endpoint conditions are needed because open intervals exclude their endpoints.

// On a closed interval $[a, b]$, the convention is: $f$ is differentiable on $(a, b)$ and possesses a right-hand derivative at $a$ and a left-hand derivative at $b$. This mirrors the definition of [continuity on a closed interval](!/calculus/limits/continuity) and ensures that derivative-based theorems—the Mean Value Theorem, Rolle's Theorem—apply on $[a, b]$.

// For piecewise functions defined on adjacent intervals, differentiability at each interior boundary requires two conditions: continuity at the boundary (the pieces connect) and agreement of the one-sided derivatives (the pieces connect smoothly). Continuity alone is not sufficient—$f(x) = |x|$ is continuous at $x = 0$ but not differentiable there.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj9: {
//     title: `Pathological Examples`,
//     content: `
// The gap between continuity and differentiability extends further than isolated points. The Weierstrass function, constructed in 1872, is continuous at every real number but differentiable at none. Its graph is an infinitely jagged curve with no smooth segments anywhere.

// This is not an isolated curiosity. Entire families of continuous-but-nowhere-differentiable functions exist, and they arise naturally in fractal geometry and stochastic processes. Brownian motion paths, for instance, are almost surely continuous everywhere and differentiable nowhere.

// These examples demonstrate that differentiability is a genuinely restrictive condition. Continuity guarantees an unbroken graph; differentiability demands a smooth one. Most "natural" functions in calculus—polynomials, trigonometric functions, exponentials—are differentiable on their entire domains, which can create the false impression that differentiability is routine. The pathological cases reveal that smooth behavior is special, not default.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj10: {
//     title: `Summary: A Typology of Differentiability Failure`,
//     content: `
// The failure modes covered above—corners, cusps, vertical tangents, and discontinuities—each block differentiability through a different mechanism and leave a different signature on the graph. The table below collects them in parallel, organized by what the one-sided derivatives do, whether the function remains continuous at the problem point, and a canonical example for each. Reading across a row identifies the mode; reading down a column reveals what changes from one mode to the next.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };

// formulas-optimized: v1 | 2026-06-09 | 2 callouts (obj2, obj7)
const sectionsContent = {
  // ─── /calculus/derivatives/differentiability ──────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Differentiability](!/calculus/definitions#differentiability) — the limit defining the derivative exists and is finite
- [Derivative](!/calculus/definitions#derivative) — the object whose existence differentiability governs
- [Continuity](!/calculus/definitions#continuity) — differentiability implies continuity, but not the reverse
- [Tangent Line](!/calculus/definitions#tangent_line) — exists at differentiable points; absent at corners, cusps, vertical tangents`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `The Definition of Differentiability`,
    content: `
A function $f$ is differentiable at $x = a$ if the limit

@academic[formula_callout:The Definition of Differentiability
$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$]@

exists and is finite. This is a two-sided [limit](!/calculus/limits/two-sided): the difference quotient must approach the same finite value whether $h \\to 0^+$ or $h \\to 0^-$.

Geometrically, differentiability at $a$ means the graph of $f$ has a well-defined, non-vertical tangent line at $(a, f(a))$. The secant lines through $(a, f(a))$ and nearby points converge to a single line regardless of the direction of approach.

If the limit does not exist, or if it equals $\\pm\\infty$, or if $f(a)$ itself is undefined, then $f$ is not differentiable at $a$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  notation: {
    title: `Differentiability Notation`,
    lead: `The one-sided derivative marks, the infinite-slope verdict, and what “differentiable on $[a,b]$” actually promises.`,
    inherited: `The base $f'$ and the difference quotient — [the derivative function](!/calculus/derivatives/function#notation); the superscript directions on limits — [one-sided limits](!/calculus/limits/one-sided).`,
    entries: [
      {
        id: 'one-sided-derivatives',
        tex: `$f'_{-}(a)$ · $f'_{+}(a)$`,
        read: `f prime minus at a; f prime plus at a`,
        means: `Left- and right-hand derivatives — the difference quotient limited from one side, defined in **One-Sided Derivatives** below. Watch where the sign sits: **subscript on the prime**, not superscript on the point — here the direction belongs to the operation, not to $a$.`,
        cases: `Differentiable at $a$ iff both exist, finite, and equal. Endpoints of $[a,b]$ get one apiece. Piecewise boundaries need two checks: continuity, then $f'_{-} = f'_{+}$.`,
        alsoWritten: `$f'(a^{-})$, $f'(a^{+})$ — the superscript variant, riskier because of the collision below.`,
        confusedWith: `$\\lim_{x \\to a^{+}} f'(x)$ — the one-sided limit **of the derivative**, a different object. For $x^2\\sin(1/x)$ at $0$ the right-hand derivative exists (it is $0$) while the limit of $f'$ does not — see [Continuity of the Derivative](!/calculus/derivatives/function#7).`,
      },
      {
        id: 'infinite-derivative',
        tex: `$f'(a) = \\pm\\infty$`,
        read: `The derivative is infinite`,
        means: `The equals-sign abuse imported from [infinite limits](!/calculus/limits/infinity#notation): a verdict, not a value. Differentiability demands a **finite** limit, so this equation announces failure — but the cleanest kind, a vertical tangent.`,
        cases: `Both sides infinite, same sign — vertical tangent, **Vertical Tangents** below. Opposite signs — cusp. Finite but unequal — corner: no infinity involved, the failure is disagreement.`,
        alsoWritten: `$|f'(x)| \\to \\infty$ as $x \\to a$ — the form careful texts use to avoid the abuse.`,
        confusedWith: `A derivative that “exists and is infinite”. In the definition, existence **means** finite — $= \\infty$ is one of the ways existence fails, not a value of it.`,
      },
      {
        id: 'differentiable-on-interval',
        tex: `$f$ differentiable on $[a,b]$`,
        read: `f is differentiable on the closed interval from a to b`,
        means: `A convention, not just a quantifier: two-sided derivatives throughout $(a,b)$, plus $f'_{+}(a)$ and $f'_{-}(b)$ at the ends — mirroring [continuity on a closed interval](!/calculus/limits/continuity#notation).`,
        cases: `Open $(a,b)$ — two-sided everywhere, no endpoint clause. The closed-interval convention is what lets Rolle and the Mean Value Theorem state their hypotheses on $[a,b]$ at all.`,
        alsoWritten: `$f \\in C^1[a,b]$ when $f'$ is moreover continuous — one rung up the [smoothness ladder](!/calculus/derivatives/higher-order#9).`,
        confusedWith: `Two-sided differentiability at every point of $[a,b]$ — impossible at the endpoints, where one side of the quotient has nothing to stand on.`,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/derivatives`,
    parentLabel: `Derivatives`,
  },
  obj2: {
    title: `Differentiability Implies Continuity`,
    content: `
If $f$ is differentiable at $a$, then $f$ is continuous at $a$. The proof is direct.

@academic[formula_callout:Differentiability Implies Continuity
$$f \\text{ differentiable at } a \\implies f \\text{ continuous at } a$$
/calculus/formulas#differentiability_implies_continuity]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

Rewrite $f(x) - f(a)$ as

@academic[formula_callout:Differentiability Implies Continuity
$$f(x) - f(a) = \\frac{f(x) - f(a)}{x - a} \\cdot (x - a)$$]@

@academic[fact,aside:true,width:35%:Differentiable at one point only
Let $f(x) = x^2$ for rational $x$ and $f(x) = 0$ for irrational $x$. Its difference quotient at $0$ is at most $|h|$ in size, so $f'(0) = 0$, yet $f$ is not continuous at any other point.]@

As $x \\to a$, the first factor approaches $f'(a)$ (which exists by assumption) and the second factor approaches $0$. Their product approaches $f'(a) \\cdot 0 = 0$, so $\\lim_{x \\to a} f(x) = f(a)$.

The argument is local. It starts from the derivative at the single point $a$ and ends with continuity at that same point, and at no step does it look at the values of $f$ at points near $a$. A derivative at one point is a statement about that point alone.

This establishes a hierarchy: differentiability is a stronger condition than continuity. Every differentiable function is continuous, but the reverse implication fails. The functions that are continuous but not differentiable at a point form a significant and instructive class.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Corners`,
    content: `
A corner occurs when the left-hand and right-hand derivatives both exist as finite numbers but disagree.

@academic[formula_callout:Corners
$$\\lim_{h \\to 0^-} \\frac{f(a + h) - f(a)}{h} \\neq \\lim_{h \\to 0^+} \\frac{f(a + h) - f(a)}{h}$$]@

The graph makes a sharp turn at $x = a$—two distinct tangent directions meeting at a single point. The function is continuous at $a$ (no break in the graph), but the two-sided limit of the difference quotient fails to exist because the one-sided limits differ.

@academic[pitfall,aside:true,width:35%:Assuming every absolute value makes a corner
Seeing $|x|$ in $f(x) = x|x|$ and declaring a corner at $0$ skips the computation. The quotient is $\\frac{h|h|}{h} = |h|$, which tends to $0$ from both sides, so $f'(0) = 0$ and there is no corner.
[Read more](!#pitfalls)]@

The standard example is $f(x) = |x|$ at $x = 0$. The left-hand derivative is $-1$ and the right-hand derivative is $+1$. The graph forms a V-shape, and no single straight line can serve as a tangent. More generally, any piecewise linear function with a slope change at a junction has a corner there.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Cusps`,
    content: `
A cusp occurs when both one-sided derivatives are infinite but with opposite signs. As $h \\to 0^+$, the difference quotient approaches $+\\infty$ (or $-\\infty$), and as $h \\to 0^-$, it approaches the opposite.

The graph comes to a sharp point where the curve doubles back on itself with vertical tangent directions from both sides. Unlike a corner, the slopes do not stay finite—they blow up.

@academic[pitfall,aside:true,width:35%:Checking only one side
For $f(x) = x^{4/5}$ at $0$, checking only $h > 0$ gives the quotient $h^{-1/5} \\to +\\infty$ and suggests a vertical tangent. For $h < 0$ the quotient is negative and tends to $-\\infty$, so the point is a cusp.
[Read more](!#pitfalls)]@

The standard example is $f(x) = x^{2/3}$ at $x = 0$. The derivative $f'(x) = \\frac{2}{3}x^{-1/3}$ tends to $+\\infty$ from the right and $-\\infty$ from the left. The graph has a pointed tip at the origin, sharper than any corner. The function is continuous at $x = 0$, but the infinite and opposing slopes prevent differentiability.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Vertical Tangents`,
    content: `
A vertical tangent occurs when the two-sided limit of the difference quotient exists but equals $+\\infty$ or $-\\infty$. Both sides agree on the direction—unlike a cusp—but the slope is infinite.

The standard example is $f(x) = x^{1/3}$ at $x = 0$. The derivative formula $f'(x) = \\frac{1}{3}x^{-2/3}$ gives $f'(x) \\to +\\infty$ as $x \\to 0$ from either side. The graph passes smoothly through the origin with no sharp point, but the tangent line there is the vertical line $x = 0$.

A vertical tangent line has undefined slope, so the derivative does not exist in the usual sense. The function is continuous and the graph is smooth, yet the rate of change is unbounded at that point. This is the mildest form of non-differentiability—the geometry is clean, but the numerical value of the derivative is not finite.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Discontinuities`,
    content: `
@academic[rule_corollary_plain:If $f$ is not [continuous](!/calculus/limits/continuity) at $a$, then $f$ is not differentiable at $a$.]@

Since differentiability implies continuity, any discontinuity automatically rules out differentiability.

At a jump discontinuity, the function leaps from one value to another. No tangent line can bridge the gap. At an infinite discontinuity (vertical asymptote), the function blows up—even if $f(a)$ is assigned a value, the graph near $a$ does not approach the point $(a, f(a))$, so no tangent can pass through it. At a removable discontinuity, the limit exists but either $f(a)$ is undefined or differs from the limit; redefining $f(a)$ to equal the limit restores continuity and may restore differentiability.

Discontinuities are the most straightforward obstruction to differentiability. The other failure modes—corners, cusps, vertical tangents—are subtler because the function is continuous at the problematic point.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `One-Sided Derivatives`,
    content: `
The left-hand derivative of $f$ at $a$ is

@academic[formula_callout:One-Sided Derivatives
$$f'_-(a) = \\lim_{h \\to 0^-} \\frac{f(a + h) - f(a)}{h}$$]@

and the right-hand derivative is

@academic[formula_callout:One-Sided Derivatives
$$f'_+(a) = \\lim_{h \\to 0^+} \\frac{f(a + h) - f(a)}{h}$$]@

@academic[formula_callout:One-Sided Derivative
$$f'_-(a) = \\lim_{h \\to 0^-} \\frac{f(a + h) - f(a)}{h} \\qquad f'_+(a) = \\lim_{h \\to 0^+} \\frac{f(a + h) - f(a)}{h}$$
/calculus/formulas#one-sided_derivative]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

@academic[rule_theorem_plain:The two-sided derivative $f'(a)$ exists if and only if both one-sided derivatives exist, are finite, and are equal: $f'_-(a) = f'_+(a)$.]@

@academic[pitfall,aside:true,width:35%:Differentiating the pieces instead of using f(a)
For $f(x) = x^2$ on $x \\leq 1$ and $2x + 1$ on $x > 1$, the piece formulas give slopes $2$ and $2$ at $x = 1$. But $f(1) = 1$ while the right piece tends to $3$, so $f'_+(1) = \\lim_{h \\to 0^+} \\frac{2 + 2h}{h} = +\\infty$ and $f$ is not differentiable at $1$.
[Read more](!#pitfalls)]@

One-sided derivatives appear naturally at endpoints of closed intervals, where only one direction of approach is available. They also arise at boundaries of piecewise functions, where different formulas govern the left and right sides. Checking whether the one-sided derivatives match at a boundary is the standard test for differentiability of a piecewise-defined function.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Differentiability on Intervals`,
    content: `
A function is differentiable on an open interval $(a, b)$ if it is differentiable at every point in $(a, b)$. No endpoint conditions are needed because open intervals exclude their endpoints.

On a closed interval $[a, b]$, the convention is: $f$ is differentiable on $(a, b)$ and possesses a right-hand derivative at $a$ and a left-hand derivative at $b$. This mirrors the definition of [continuity on a closed interval](!/calculus/limits/continuity) and ensures that derivative-based theorems—the Mean Value Theorem, Rolle's Theorem—apply on $[a, b]$.

For piecewise functions defined on adjacent intervals, differentiability at each interior boundary requires two conditions: continuity at the boundary (the pieces connect) and agreement of the one-sided derivatives (the pieces connect smoothly). Continuity alone is not sufficient—$f(x) = |x|$ is continuous at $x = 0$ but not differentiable there.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Pathological Examples`,
    content: `
The gap between continuity and differentiability extends further than isolated points. The Weierstrass function, constructed in 1872, is continuous at every real number but differentiable at none. Its graph is an infinitely jagged curve with no smooth segments anywhere.

@academic[fact,aside:true,width:35%:A tangent anywhere is the exception
In 1931 Banach and Mazurkiewicz proved that, in the sense of Baire category, a typical continuous function on $[0, 1]$ has a derivative at no point. The reason: zigzags with huge slopes can be added to any continuous graph while moving it as little as you like.]@

This is not an isolated curiosity. Entire families of continuous-but-nowhere-differentiable functions exist, and they arise naturally in fractal geometry and stochastic processes. Brownian motion paths, for instance, are almost surely continuous everywhere and differentiable nowhere.

These examples demonstrate that differentiability is a genuinely restrictive condition. Continuity guarantees an unbroken graph; differentiability demands a smooth one. Most "natural" functions in calculus—polynomials, trigonometric functions, exponentials—are differentiable on their entire domains, which can create the false impression that differentiability is routine. The pathological cases reveal that smooth behavior is special, not default.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj10: {
    title: `Summary: A Typology of Differentiability Failure`,
    content: `
The failure modes covered above—corners, cusps, vertical tangents, and discontinuities—each block differentiability through a different mechanism and leave a different signature on the graph. The table below collects them in parallel, organized by what the one-sided derivatives do, whether the function remains continuous at the problem point, and a canonical example for each. Reading across a row identifies the mode; reading down a column reveals what changes from one mode to the next.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj11: {
    title: `Common Pitfalls`,
    content: `
Four mistakes cause most wrong verdicts about differentiability. Three of them are marked where they happen in the sections above; the first is the one the sections on continuity and on intervals warn against. Here each is worked through in full, with the wrong and the right working side by side.

**Assuming continuity guarantees a derivative**

Because differentiability implies continuity, the converse is assumed as well: a function whose graph has no break at a point is taken to have a derivative there.

Wrong working: $f(x) = |x - 2|$ is continuous at $x = 2$, so $f'(2)$ exists, and by symmetry $f'(2) = 0$.

Right working: the difference quotient is $\\frac{f(2 + h) - f(2)}{h} = \\frac{|h|}{h}$, which is $1$ for $h > 0$ and $-1$ for $h < 0$. The one-sided derivatives $-1$ and $1$ disagree, so $f'(2)$ does not exist.

Why it happens: the implication is learned as a link between the two words, and the direction gets lost. An unbroken graph also looks well behaved enough to have a slope.

How to check: compute the quotient for one small positive and one small negative $h$. At $h = 0.01$ it is $1$, at $h = -0.01$ it is $-1$.

**Assuming every absolute value makes a corner**

An absolute value in the formula is taken as proof of a corner, and the function is declared non-differentiable at the point where the inside is $0$, without computing anything.

Wrong working: $f(x) = x|x|$ contains $|x|$, which has a corner at $0$, so $f$ has a corner at $0$ and $f'(0)$ does not exist.

Right working: $f(0) = 0$, and the difference quotient is $\\frac{h|h|}{h} = |h|$, which tends to $0$ from both sides. So $f'(0) = 0$. Piece by piece, $f(x) = x^2$ for $x \\geq 0$ and $f(x) = -x^2$ for $x < 0$, and both have slope $0$ at $0$.

Why it happens: the corner of $|x|$ is remembered as a property of the symbol rather than as the result of a computation. The extra factor $x$ flattens the graph near $0$ and removes the corner.

How to check: evaluate the quotient. At $h = 0.01$ and at $h = -0.01$ it is $0.01$, small on both sides and shrinking with $h$.

**Checking only one side**

To tell a cusp from a vertical tangent, the slope is examined for positive $h$ (or positive $x$) only, and the sign on the other side is never checked.

Wrong working: for $f(x) = x^{4/5}$, $f'(x) = \\frac{4}{5}x^{-1/5}$ grows without bound as $x \\to 0^+$, so $f'(x) \\to +\\infty$ and the graph has a vertical tangent at $0$.

Right working: the quotient is $\\frac{f(h) - f(0)}{h} = \\frac{h^{4/5}}{h} = h^{-1/5}$. For $h > 0$ it tends to $+\\infty$. For $h < 0$, $h^{1/5}$ is negative, so $h^{-1/5}$ is negative and tends to $-\\infty$. The signs are opposite, so $0$ is a cusp, as for $x^{2/3}$.

Why it happens: small positive numbers are the default test values, and the formula $x^{-1/5}$ does not show its sign for negative $x$ at a glance.

How to check: try one value on each side. At $h = 10^{-5}$ the quotient is $10$; at $h = -10^{-5}$ it is $-10$. The values of $f$ give a second check: $x^{4/5} \\geq 0$ on both sides of $0$, so the graph comes down to the origin and goes back up, which is the shape of a cusp; a vertical tangent such as $x^{1/3}$ passes from negative to positive values.

**Differentiating the pieces instead of using f(a)**

At the boundary of a piecewise function, each piece's formula is differentiated and the two slopes are compared, without checking that the pieces meet.

Wrong working: for $f(x) = x^2$ on $x \\leq 1$ and $f(x) = 2x + 1$ on $x > 1$, the left formula has derivative $2x$, which is $2$ at $x = 1$, and the right formula has derivative $2$. The slopes match, so $f'(1) = 2$.

Right working: first check continuity. $f(1) = 1$ from the left piece, but the right piece tends to $2 \\cdot 1 + 1 = 3$, so $f$ jumps at $1$. The right-hand derivative uses $f(1)$: $\\lim_{h \\to 0^+} \\frac{2(1 + h) + 1 - 1}{h} = \\lim_{h \\to 0^+} \\frac{2 + 2h}{h} = +\\infty$. So $f$ is not differentiable at $1$; it is not even continuous there.

Why it happens: the derivative of a piece's formula is the slope of that piece's own graph. It knows nothing about the value $f(1)$ or about whether the two graphs touch.

How to check: before comparing slopes, put the boundary value into both formulas. Here they give $1$ and $3$, which settles the question. The quotient confirms it: at $h = 0.01$ the right-hand quotient is $202$.
`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: `intro`,
  title: `When the Derivative Exists — and When It Does Not`,
  content: `
Differentiability is not automatic. The [limit definition](!/calculus/derivatives) requires a specific limit to exist and be finite, and many functions fail this requirement at certain points. A corner produces two competing slopes. A cusp sends the slope to infinity from both sides. A vertical tangent gives an infinite slope. A discontinuity removes the foundation entirely.

Each failure mode has a distinct geometric signature, and recognizing them is essential for correctly applying derivative-based analysis. Differentiability also relates precisely to [continuity](!/calculus/limits/continuity): every differentiable function is continuous, but continuous functions need not be differentiable. The gap between these two properties is wider than it first appears.
`
};


// FAQ pass: all eight originals named their own h2 — definition, implies
// continuity, corners, cusps, vertical tangents, discontinuities, one-sided
// derivatives, intervals. Replaced with the two notation traps, the
// corner/cusp contrast (only the summary table draws it), the piecewise
// boundary test, and Weierstrass, whose h2 reads "Pathological Examples".
const faqQuestions = {
  obj1: {
    question: "Can a derivative be infinite?",
    answer: "No. In the definition, existence means the limit is finite, so writing f′(a) = ±∞ records a failure rather than a value — a borrowed abuse of the equals sign from [infinite limits](!/calculus/limits/infinity#notation). Careful texts write |f′(x)| → ∞ instead. Geometrically this is the mildest failure: a tangent line still exists, it is just vertical, so it has no slope.",
    sectionId: "notation"
  },
  obj2: {
    question: "Is a cusp the same as a corner?",
    answer: "No. Both are sharp points on a continuous graph, but the one-sided derivatives behave differently. At a corner they are finite and unequal — |x| at 0 gives −1 and +1. At a cusp they are both infinite with opposite signs, as with x^(2/3) at 0, so the curve doubles back on itself. A cusp is the sharper of the two.",
    sectionId: "10"
  },
  obj3: {
    question: "How do you check whether a piecewise function is differentiable at a boundary?",
    answer: "Two conditions, in order. First check continuity at the boundary — the two pieces must agree on the value there, or differentiability is impossible. Then compute the one-sided derivatives from each piece separately and check that they are equal and finite. Continuity alone is not enough: |x| is continuous at 0 but its one-sided derivatives are −1 and +1.",
    sectionId: "8"
  },
  obj4: {
    question: "Is there a function that is continuous everywhere but differentiable nowhere?",
    answer: "Yes. The Weierstrass function, constructed in 1872, is continuous at every real number and differentiable at none — its graph is jagged at every scale with no smooth segment anywhere. Such functions are not isolated curiosities: they appear throughout fractal geometry, and the paths of Brownian motion are almost surely continuous everywhere and differentiable nowhere.",
    sectionId: "9"
  },
  obj5: {
    question: "Does the one-sided derivative equal the one-sided limit of f′?",
    answer: "Not necessarily — they are different objects. The right-hand derivative limits the difference quotient at the single point a, while the one-sided limit of f′ asks what the derivative function approaches near a. For x²sin(1/x) at 0 the right-hand derivative exists and equals 0, yet f′ has no limit there because it oscillates.",
    sectionId: "notation"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Differentiability",
    "description": "Understand differentiability: definition, relationship to continuity, and why derivatives fail at corners, cusps, vertical tangents, and discontinuities. One-sided derivatives explained.",
    "url": "https://www.learnmathclass.com/calculus/derivatives/differentiability",
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
      "name": "Differentiability"
    },
    "teaches": [
      "Definition of differentiability",
      "Differentiability implies continuity",
      "Corners, cusps, and vertical tangents",
      "When derivatives fail to exist",
      "One-sided derivatives",
      "Differentiability on intervals",
      "Pathological continuous-but-nondifferentiable functions"
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
        "name": "Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Differentiability",
        "item": "https://www.learnmathclass.com/calculus/derivatives/differentiability"
      }
    ]
  }
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpCorner = { kind: 'pieces', svgTitle: '|x| has slope -1 on the left and +1 on the right: two tangent directions at the corner', xRange: [-3, 3], yRange: [-2, 3],
    pieces: [
      { fn: (x) => -x, from: 99, to: 99, ends: [null, null], color: 'r', ghost: [[0, 2.2]] },
      { fn: (x) => x, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[-2.2, 0]] },
      { fn: (x) => Math.abs(x), from: -3, to: 3, ends: [null, null], color: 'f', label: { text: 'y = |x|', x: 2.4, y: 2.4, pos: 'nw' } },
    ],
    points: [{ x: 0, y: 0 }],
    notes: [{ x: -2.95, y: -0.6, text: 'slope +1 continued', pos: 'e', color: 'g' }, { x: 1.15, y: -0.6, text: 'slope −1 continued', pos: 'e', color: 'r' }],
    caption: 'A corner: two finite one-sided slopes that disagree, so no tangent' };
  const fpCusp = { kind: 'pieces', svgTitle: 'x^(2/3) has a cusp at 0: the slope goes to minus infinity from the left and plus infinity from the right', xRange: [-3, 3], yRange: [-1, 3],
    pieces: [{ fn: (x) => Math.cbrt(x * x), from: -3, to: 3, ends: [null, null], color: 'f', label: { text: 'y = x^(2/3)', x: 1.8, y: Math.cbrt(1.8 * 1.8), pos: 'se' } }],
    points: [{ x: 0, y: 0 }],
    notes: [{ x: -2.9, y: 2.6, text: 'both sides arrive vertically', pos: 'e', color: 'r' }, { x: -2.9, y: -0.6, text: 'slope → −∞', pos: 'e', color: 'r' }, { x: 0.5, y: -0.6, text: 'slope → +∞', pos: 'e', color: 'r' }],
    caption: 'A cusp: one-sided slopes are infinite with opposite signs' };
  const fpVertTangent = { kind: 'pieces', svgTitle: 'x^(1/3) passes smoothly through 0 with a vertical tangent: the slope goes to plus infinity from both sides', xRange: [-3, 3], yRange: [-2, 2],
    pieces: [{ fn: (x) => Math.cbrt(x), from: -3, to: 3, ends: [null, null], color: 'f', label: { text: 'y = x^(1/3)', x: 1.6, y: Math.cbrt(1.6), pos: 'se' } }],
    points: [{ x: 0, y: 0 }],
    vlines: [{ x: 0, label: 'tangent: x = 0' }],
    notes: [{ x: -2.9, y: -1.6, text: 'slope → +∞ from both sides', pos: 'e', color: 'r' }],
    caption: 'A vertical tangent: no sharp point, but the slope is infinite' };
  // Concept introduction figures (section 1), one running instance: x² at x = 1.
  const fpCiSmooth = { kind: 'pieces', svgTitle: 'y = x^2 has one tangent line at x = 1', xRange: [-1, 3], yRange: [-1, 5],
    pieces: [
      { fn: (x) => x * x, from: -1, to: 2.2, ends: [null, null], color: 'f', label: { text: 'y = x²', x: -0.9, y: 1.6, pos: 'e' } },
      { fn: (x) => 2 * x - 1, from: 0, to: 2.8, ends: [null, null], color: 'g', label: { text: 'one tangent', x: 2.2, y: 3.2, pos: 'e' } },
    ],
    points: [{ x: 1, y: 1 }],
    caption: 'x² at x = 1: one tangent' };
  const fpCiCorner = { kind: 'pieces', svgTitle: 'y = |x| has two directions at x = 0', xRange: [-2, 2], yRange: [-1, 2.5],
    pieces: [
      { fn: (x) => Math.abs(x), from: -2, to: 2, ends: [null, null], color: 'f', label: { text: 'y = |x|', x: -1.9, y: 2.2, pos: 'e' } },
      { fn: (x) => x, from: 0, to: 0.001, ends: [null, null], color: 'g', ghost: [[-1, 0]] },
      { fn: (x) => -x, from: 0, to: 0.001, ends: [null, null], color: 'g', ghost: [[0, 1]] },
    ],
    points: [{ x: 0, y: 0 }],
    caption: '|x| at x = 0: two directions' };
  const fpCiSecants = { kind: 'pieces', svgTitle: 'Secants of y = x^2 through (1, 1) close in on the tangent of slope 2', xRange: [-0.5, 2.5], yRange: [-2, 6],
    pieces: [
      { fn: (x) => x * x, from: -0.5, to: 2.45, ends: [null, null], color: 'f' },
      { fn: (x) => 3 * x - 2, from: 2.4, to: 2.401, ends: [null, null], color: 'g', ghost: [[0, 2.4]] },
      { fn: (x) => 2.5 * x - 1.5, from: 2.4, to: 2.401, ends: [null, null], color: 'g', ghost: [[0, 2.4]] },
      { fn: (x) => 2 * x - 1, from: 0, to: 2.4, ends: [null, null], color: 'g' },
    ],
    points: [{ x: 1, y: 1 }, { x: 2, y: 4 }, { x: 1.5, y: 2.25 }],
    notes: [{ x: 1.15, y: -0.85, text: 'h = 1: slope 3 (dashed)', pos: 'e' },
      { x: 1.15, y: -1.35, text: 'h = 0.5: slope 2.5 (dashed)', pos: 'e' },
      { x: 1.15, y: -1.85, text: 'h → 0: slope 2 (solid)', pos: 'e', color: 'r' }],
    caption: 'As h shrinks, the secants settle on one line' };

  const conceptIntroFigures = {
    smooth: renderFunctionPlotV4(fpCiSmooth),
    corner: renderFunctionPlotV4(fpCiCorner),
    secants: renderFunctionPlotV4(fpCiSecants),
    quotientTable: ciQuotientTable,
    cornerTable: ciCornerTable,
  };

  const demoUnits = {
    jump: demoUnitFrame({
      svg: functionContinuityDiagrams.jump,
      caption: 'Jump at x = 0: the two sides disagree',
      text: 'Approaching zero from the left the function heads to 0, from the right it sits at 1, and the checker&#8217;s three conditions fail at the second: no two-sided limit, so no continuity, so no derivative. A tangent line would have to be two different lines at once. Test any breakpoint against the three conditions on the',
      href: '/calculus/visual-tools/continuity',
      linkText: 'continuity checker',
    }),
    corner: demoUnitFrame({
      svg: renderFunctionPlotV4(fpCorner),
      caption: 'Two slopes at one point',
      text: 'The section&#8217;s f(x) = |x| at x = 0. Coming from the left the graph has slope &#8722;1, and continuing that line past 0 gives the amber dashes; coming from the right it has slope +1, continued as the navy dashes. Both one-sided slopes are finite, but they point in different directions, so no single tangent line fits the corner.',
    }),
    cusp: demoUnitFrame({
      svg: renderFunctionPlotV4(fpCusp),
      caption: 'Infinite slopes from opposite sides',
      text: 'The section&#8217;s x^(2/3) at x = 0. Near the origin both branches turn steeply toward the vertical: from the left the slope heads to &#8722;&#8734;, from the right to +&#8734;. The graph is unbroken but comes to a sharp point, and the two infinite slopes have opposite signs, so f&#8242;(0) does not exist.',
    }),
    vertTangent: demoUnitFrame({
      svg: renderFunctionPlotV4(fpVertTangent),
      caption: 'A smooth curve with a vertical tangent',
      text: 'The section&#8217;s x^(1/3) at x = 0. The curve passes through the origin without a sharp point and stands vertical there: the slope grows to +&#8734; from both sides, and the tangent is the dashed line x = 0. The tangent exists as a line, but its slope is not a number, so the function is not differentiable at 0.',
    }),
  };

  const differentiabilityFailureTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Four ways a derivative can fail',
    preface: 'A function can fail to be differentiable at a point in four distinct ways. Three of them keep the function continuous.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Continuity is not enough',
    conclusion: 'A corner, a cusp or a vertical tangent can sit on a continuous graph. Only a discontinuity rules out differentiability before any derivative is computed.',
    root: { name: 'Differentiability failure', sub: '4 types' },
    children: [
      { id: 'corner', name: 'Corner', symbol: '$|x|$ at $0$', items: [
        { label: 'One-sided derivatives', text: 'finite but unequal' }, { label: 'Continuous', text: 'yes' } ] },
      { id: 'cusp', name: 'Cusp', symbol: '$x^{2/3}$ at $0$', items: [
        { label: 'One-sided derivatives', text: 'infinite, opposite signs' }, { label: 'Continuous', text: 'yes' } ] },
      { id: 'vert', name: 'Vertical tangent', symbol: '$x^{1/3}$ at $0$', items: [
        { label: 'Derivative limit', text: '$\\pm\\infty$ from both sides' }, { label: 'Continuous', text: 'yes, smooth graph' } ] },
      { id: 'disc', name: 'Discontinuity', flag: true, warn: 'not continuous, so not differentiable', items: [
        { label: 'Kinds', text: 'jump, infinite or removable' } ] },
    ],
    legend: [{ label: 'continuous but not differentiable' }, { label: 'not even continuous', tone: 'warn' }],
  };

  return {
  props: {
    differentiabilityFailureTree,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj7Table,
    obj8Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Differentiability: Corners, Cusps & Continuity | Learn Math Class",
      description: "Understand differentiability: definition, relationship to continuity, and why derivatives fail at corners, cusps, vertical tangents, and discontinuities. One-sided derivatives explained.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/differentiability",
      name: "Differentiability"
    },
  }
}
   }

export default function PageTemplate({differentiabilityFailureTree, seoData, sectionsContent, introContent, obj7Table, obj8Table, summaryTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciPair = (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 14px' }}>
      {['smooth', 'corner'].map((k) => (
        <div key={k} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[k] }} />
      ))}
    </div>
  )

  // Section 1 concept introduction — template B (definition first).
  const conceptIntro = {
    beats: [
      {
        id: 'difficulty',
        lead: `The derivative formula can always be written down, but it does not always give a number.`,
        content: `The rules of differentiation hand out a slope at every point, as if every graph had one. Most do: at $x = 1$ the curve $y = x^2$ has exactly one tangent line. But at $x = 0$ the graph of $y = |x|$ comes in at one angle and leaves at another, and "the slope there" has no single answer. Something has to say in advance which points get a derivative and which do not.`,
        visual: ciPair,
        caption: `Left: $y = x^2$ and its one tangent at $(1, 1)$. Right: $y = |x|$, whose two dashed directions at $(0, 0)$ disagree.`,
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A function $f$ is [differentiable](!/calculus/definitions#differentiability) at $x = a$ if the limit below exists and is finite:`,
        formula: `@academic[formula_callout:The Definition of Differentiability
$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$]@`,
        visual: ciSvg('secants'),
        caption: `Each dashed secant joins $(1, 1)$ to a point $h$ further along $y = x^2$; its slope is the difference quotient. As $h$ shrinks the secants settle on the solid tangent, slope $2$ — the limit in the box.`,
        footer: `This is a two-sided [limit](!/calculus/limits/two-sided): the difference quotient must approach the same finite value whether $h \\to 0^+$ or $h \\to 0^-$.`,
      },
      {
        id: 'kind',
        lead: `Differentiability is a property of a function at a point: it either holds there or it does not.`,
        content: `It is a yes-or-no question asked of one function at one point. When the answer is yes, the limit is a number — the derivative $f'(a)$, the slope of the tangent. So $x^2$ is differentiable at $1$ with $f'(1) = 2$; the same function at another point is a separate question with its own answer.`,
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `On numbers, the difference quotient of x² at 1 closes in on 2 from both sides.`,
        content: [
          `For $f(x) = x^2$ at $a = 1$, the quotient is $\\frac{(1 + h)^2 - 1}{h}$. Take $h$ smaller and smaller, positive and negative.`,
          ciTable('quotientTable'),
          `The last column is always $2 + h$, since $(1 + h)^2 - 1 = 2h + h^2$. Positive $h$ approaches $2$ from above, negative $h$ from below, and both sides agree: the limit exists, it is finite, and $f'(1) = 2$.`,
        ],
      },
      {
        id: 'verification',
        lead: `The definition keeps its promises.`,
        content: `It promised a tangent line, and there is one: through $(1, 1)$ with slope $2$, the line $y = 2x - 1$, which touches $y = x^2$ only at that point, because $x^2 - (2x - 1) = (x - 1)^2 \\geq 0$. It also promised that a differentiable function cannot jump: as $h \\to 0$ the top of the quotient, $f(1 + h) - f(1)$, must go to $0$ for the quotient to stay finite, so $f(1 + h) \\to f(1)$. Being differentiable forces being continuous.`,
      },
      {
        id: 'caveat',
        tone: 'break',
        lead: `The converse fails: a continuous function can still lack a derivative.`,
        content: [
          `Run the same test on $|x|$ at $0$. The quotient is $\\frac{|h|}{h}$, and it never settles on one number.`,
          ciTable('cornerTable'),
          `Each side has its own limit, $1$ and $-1$, but they disagree, so the two-sided limit does not exist — even though $|x|$ has no break at $0$. If the limit does not exist, or if it equals $\\pm\\infty$, or if $f(a)$ itself is undefined, then $f$ is not differentiable at $a$.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page goes through the notation, why differentiability implies continuity, each way a derivative can fail — corners, cusps, vertical tangents and discontinuities — one-sided derivatives, differentiability on intervals, and pathological examples.`,
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
          <div key={'unit-corner'} dangerouslySetInnerHTML={{ __html: demoUnits.corner }} />,
          `Any piecewise-linear graph with a change of slope has a corner at the join.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'unit-cusp'} dangerouslySetInnerHTML={{ __html: demoUnits.cusp }} />,
          `Compare section 5: there the infinite slopes have the same sign and the curve does not turn back.`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'unit-vertTangent'} dangerouslySetInnerHTML={{ __html: demoUnits.vertTangent }} />,
          `Compare section 4: here both sides agree on +∞, so the curve has no sharp point, only a vertical tangent.`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
                  <div key={'unit-jump'} dangerouslySetInnerHTML={{ __html: demoUnits.jump }} />,
          `Continuity is thus the first gate a function must pass before differentiability can even be asked about.`,
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
          `@academic[punchline:Two pieces join differentiably only when they meet and their slopes agree at the join.]@`,
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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
          <DiagramFrame
            key={'obj10-diagram'}
            id="differentiability-failure-tree"
            title="Four ways differentiability fails"
            source="/calculus/derivatives/differentiability"
          >
            <TopDownTree data={differentiabilityFailureTree} />
          </DiagramFrame>,
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
        title:`Differentiability FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Differentiability</h1>
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