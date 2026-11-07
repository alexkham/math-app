

// tables-optimized: v4 | 2026-05-24 | 2 tables (obj4 aggregation, obj8 summary capstone)
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
import functionFTCDiagrams from '@/app/components/functions/ftc/functionFTCDiagrams'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import NotationCheatSheet from '@/app/components/infographics/NotationCheatSheet/NotationCheatSheet'
import integralsNotationSheet from '@/app/components/infographics/NotationCheatSheet/sheets/calculus-integrals'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import FormulaSheet from '@/app/components/infographics/FormulaSheet/FormulaSheet'


export async function getStaticProps(){
const keyWords = [
  "indefinite integral",
  "antiderivative",
  "constant of integration",
  "indefinite integral notation",
  "basic antiderivative formulas",
  "power rule integration",
  "integral of x^n",
  "linearity of integrals",
  "verify antiderivative",
  "indefinite vs definite integral",
  "find antiderivative",
  "integration calculus",
  "integral plus C",
  "reverse differentiation"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj4 — aggregation: the page's own minimal antiderivative reference
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Integrand f(x)</th>
      <th style="${tableHeaders.aggregation}">∫ f(x) dx</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x<sup>n</sup>&nbsp;&nbsp;(n ≠ −1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sup>n+1</sup> / (n + 1) + C</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 / x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ln |x| + C</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">e<sup>x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e<sup>x</sup> + C</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin x + C</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">sin x</td>
      <td style="padding: 12px 15px; color: #34495e;">−cos x + C</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary capstone: the indefinite-integration workflow
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary} text-align: center;">Step</th>
      <th style="${tableHeaders.summary}">Action</th>
      <th style="${tableHeaders.summary}">Where the detail lives</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Recognize the form — does the integrand match a known antiderivative formula?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/special" style="${linkStyle}">special integrals</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Apply linearity — split sums and factor out constants to reduce to known pieces</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/rules" style="${linkStyle}">integration rules</a></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Compute the antiderivative F(x) — apply a formula directly, or use a technique to transform the integrand first</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/techniques" style="${linkStyle}">techniques</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Add the constant of integration — the answer is F(x) + C, never just F(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">section 2 above (constant of integration)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; color: #34495e;">Verify by differentiating — F&apos;(x) should return the original integrand f(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">section 6 above (verifying antiderivatives)</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/integrals/indefinite ───────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Antiderivative](!/calculus/definitions#antiderivative) — a function whose derivative is $f$
// - [Indefinite Integral](!/calculus/definitions#indefinite_integral) — $\\int f(x)\\,dx = F(x) + C$, the full family
// - [Integrand](!/calculus/definitions#integrand) — the function $f(x)$ being integrated
// - [Definite Integral](!/calculus/definitions#definite_integral) — connected by the Fundamental Theorem`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Antiderivatives`,
//     content: `
// A function $F$ is an antiderivative of $f$ if:

// $$F'(x) = f(x)$$

// The antiderivative reverses differentiation. Given $f(x) = 2x$, the function $F(x) = x^2$ is an antiderivative because $(x^2)' = 2x$.

// But $F(x) = x^2 + 5$ is also an antiderivative—its derivative is likewise $2x$. So is $x^2 - 17$, or $x^2 + \\pi$. Any function of the form $x^2 + C$ differentiates to $2x$.

// Antiderivatives are not unique. They form a family of functions, all differing by constants.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj2: {
//     title: `The Constant of Integration`,
//     content: `
// If $F(x)$ is one antiderivative of $f(x)$, then every antiderivative has the form:

// $$F(x) + C$$

// where $C$ is an arbitrary constant. This follows from a basic fact: if two functions have the same derivative on an interval, they differ by a constant.

// The "$+ C$" in indefinite integrals is not optional notation—it represents the complete answer. Omitting it gives only one member of the family when infinitely many exist.

// Initial conditions pin down $C$. If you know that $F(0) = 3$, for instance, you can solve for the specific constant that satisfies this requirement.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj3: {
//     title: `Notation`,
//     content: `
// The indefinite integral is written:

// $$\\int f(x)\\, dx = F(x) + C$$

// The integral sign $\\int$ without limits indicates an indefinite integral. The integrand $f(x)$ is the function being integrated. The differential $dx$ specifies the variable.

// The result is a function (or family of functions), not a number. This contrasts with the [definite integral](!/calculus/integrals/definite), which produces a numerical value.

// The notation mirrors the definite integral deliberately. The Fundamental Theorem of Calculus connects them: indefinite integrals provide the antiderivatives that definite integrals evaluate.

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Symbols and Notations](!/math-symbols/calculus) →@

// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj4: {
//     title: `Basic Antiderivative Formulas`,
//     content: `
// Several antiderivatives appear constantly and should be memorized.

// **Power rule** (for $n \\neq -1$):

// $$\\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C$$

// **Reciprocal:**

// $$\\int \\frac{1}{x}\\, dx = \\ln|x| + C$$

// **Exponential:**

// $$\\int e^x\\, dx = e^x + C$$

// **Trigonometric:**

// $$\\int \\cos x\\, dx = \\sin x + C \\qquad \\int \\sin x\\, dx = -\\cos x + C$$

// The [special integrals](!/calculus/integrals/special) page provides a more complete list.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj5: {
//     title: `Linearity of Indefinite Integrals`,
//     content: `
// Indefinite integrals obey the same [linearity rules](!/calculus/integrals/rules) as definite integrals.

// **Sum rule:**

// $$\\int [f(x) + g(x)]\\, dx = \\int f(x)\\, dx + \\int g(x)\\, dx$$

// **Constant multiple rule:**

// $$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$

// These rules reduce complex integrands to combinations of simpler ones. For example:

// $$\\int (3x^2 + 5x - 2)\\, dx = 3 \\cdot \\frac{x^3}{3} + 5 \\cdot \\frac{x^2}{2} - 2x + C = x^3 + \\frac{5x^2}{2} - 2x + C$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj6: {
//     title: `Verifying Antiderivatives`,
//     content: `
// Integration has a built-in check: differentiate your answer.

// If $\\int f(x)\\, dx = F(x) + C$, then $F'(x)$ must equal $f(x)$. If it doesn't, an error occurred.

// For example, suppose you compute:

// $$\\int \\sec^2 x\\, dx = \\tan x + C$$

// Verify: $(\\tan x)' = \\sec^2 x$. Correct.

// This check catches sign errors, missing constants, and algebraic mistakes. It works because differentiation is mechanical—once you have a candidate antiderivative, verification is straightforward.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj7: {
//     title: `Connection to Definite Integrals`,
//     content: `
// Indefinite and definite integrals serve different purposes but are linked by the Fundamental Theorem of Calculus.

// The indefinite integral finds antiderivatives:

// $$\\int f(x)\\, dx = F(x) + C$$

// The definite integral uses an antiderivative to compute accumulated quantity:

// $$\\int_a^b f(x)\\, dx = F(b) - F(a)$$

// The constant $C$ cancels when evaluating $F(b) - F(a)$, so any antiderivative works. This connection, detailed on the [rules](!/calculus/integrals/rules) page, is why mastering indefinite integration enables computation of definite integrals.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj8: {
//     title: `Summary: The Indefinite-Integration Workflow`,
//     content: `
// Every indefinite integral on this page follows the same five-step procedure, whether the integrand is a single power function or a complicated composition that requires a technique. The table below collects the workflow with a pointer to the sibling page where each step&apos;s detail lives — special integrals for the formula library, rules for linearity and the FTC, techniques for transformations. Use this as a reminder while working a problem: every step matters, and skipping the final verification is the single most common source of errors.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   }
// };

// formulas-optimized: v1 | 2026-06-09 | 1 callout (obj2)
// Concept introduction (section 2, "The Constant of Integration") —
// template A, definition last. Running instance: the antiderivatives of 2x,
// x² − 2, x² and x² + 3, one parabola shifted. Old obj2 text is kept in
// sectionsContent.obj2, unused; its formula box, formulas link, fact aside
// and five passages are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciFamilyTable = ciTableOpen(['function', 'derivative', 'slope at x = 1', 'value at x = 0']) +
  ciRow(['x² − 2', '2x', '2', '−2']) +
  ciRow(['x²', '2x', '2', '0'], { shade: true }) +
  ciRow(['x² + 3', '2x', '2', '3']) +
  ciRow(['x² + C', '2x', '2', 'C'], { shade: true, last: true, color: '#2563EB' }) +
  '</tbody></table>'

const sectionsContent = {
  // ─── /calculus/integrals/indefinite ───────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Antiderivative](!/calculus/definitions#antiderivative) — a function whose derivative is $f$
- [Indefinite Integral](!/calculus/definitions#indefinite_integral) — $\\int f(x)\\,dx = F(x) + C$, the full family
- [Integrand](!/calculus/definitions#integrand) — the function $f(x)$ being integrated
- [Definite Integral](!/calculus/definitions#definite_integral) — connected by the Fundamental Theorem`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Antiderivatives`,
    content: `
A function $F$ is an antiderivative of $f$ if:

@academic[formula_callout:Antiderivatives
$$F'(x) = f(x)$$]@

The antiderivative reverses differentiation. Given $f(x) = 2x$, the function $F(x) = x^2$ is an antiderivative because $(x^2)' = 2x$.

But $F(x) = x^2 + 5$ is also an antiderivative—its derivative is likewise $2x$. So is $x^2 - 17$, or $x^2 + \\pi$. Any function of the form $x^2 + C$ differentiates to $2x$.

@academic[rule_plain:Antiderivatives are not unique. They form a family of functions, all differing by constants.]@
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `The Constant of Integration`,
    content: `
If $F(x)$ is one antiderivative of $f(x)$, then every antiderivative has the form:

@academic[formula_callout:Antiderivative Family
$$\\int f(x)\\, dx = F(x) + C \\quad \\text{where } F'(x) = f(x)$$
/calculus/formulas#antiderivative_family]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

where $C$ is an arbitrary constant. This follows from a basic fact: if two functions have the same derivative on an interval, they differ by a constant.

The "$+ C$" in indefinite integrals is not optional notation—it represents the complete answer. Omitting it gives only one member of the family when infinitely many exist.

@academic[fact,aside:true,width:35%:The power rule's limit is $\\ln x$
As $n$ approaches $-1$, the antiderivative $\\frac{x^{n+1} - 1}{n+1}$ approaches $\\ln x$ for every $x > 0$, the very function the power rule cannot give at $n = -1$. The constant does the work: at $n = -0.999$ and $x = 2$ it gives $0.6934$, against $\\ln 2 \\approx 0.6931$, while $\\frac{x^{n+1}}{n+1}$ alone blows up.]@

Initial conditions pin down $C$. If you know that $F(0) = 3$, for instance, you can solve for the specific constant that satisfies this requirement.

One condition can also fix $C$ for a whole family of integrands at once. For $f(x) = x^n$ with $n \\neq -1$, the condition $F(1) = 0$ gives $C = -\\frac{1}{n+1}$ and the antiderivative $\\frac{x^{n+1} - 1}{n+1}$. At $n = -1$ the power rule itself breaks down, since its denominator $n + 1$ is $0$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  notation: {
    title: `Indefinite Integral Notation`,
    lead: `The three-part symbol, the constant that is not optional, and the case convention that carries the whole subject.`,
    inherited: `$dx$ as a differential — [differentials](!/calculus/derivatives/differentials#notation); the prime — [the derivative function](!/calculus/derivatives/function#notation).`,
    entries: [
      {
        id: 'integral-sign',
        tex: `$\\int f(x)\\, dx$`,
        read: `The indefinite integral of f of x, d x`,
        means: `Leibniz's elongated S, for **summa**. No limits on the sign — indefinite: the output is a family of functions, not a number. $f(x)$ is the integrand; $dx$ names the variable and closes it off. The [mathematical keyboard](!/keyboard) carries $\\int$.`,
        cases: `With limits attached it becomes the [definite integral](!/calculus/integrals/definite) — a number, a different object, same glyph. Under substitution the $dx$ is a live [differential](!/calculus/derivatives/differentials#notation): $du = g'(x)\\,dx$ is real algebra, not bookkeeping.`,
        alsoWritten: `$\\int dx\\, f(x)$ — differential first, standard in physics texts, where the variable announces itself before a long integrand.`,
        confusedWith: `$dx$ as decoration. Dropping it leaves the variable unnamed — $\\int 2t\\,dx$ and $\\int 2t\\,dt$ are different answers.`,
      },
      {
        id: 'plus-c',
        tex: `$F(x) + C$`,
        read: `F of x, plus C`,
        means: `The general antiderivative. “$+C$” is part of the answer, not a garnish — **The Constant of Integration** above insists on it. One symbol, ranging over all reals, carries the entire family.`,
        cases: `Sums take a single $C$ — the pieces' constants merge on arrival. For $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ the honest version has a separate constant on each side of $0$; the single $C$ is the standard abbreviation.`,
        alsoWritten: `$K$, or $c_1$, when $C$ is spoken for — any letter declared arbitrary.`,
        confusedWith: `The critical number $c$ of [graph analysis](!/calculus/derivatives/graph-analysis#notation) — one fixed, found point; this $C$ is deliberately free. In [definite integrals](!/calculus/integrals/definite) it cancels, which is why it never appears there.`,
      },
      {
        id: 'capital-pairing',
        tex: `$F'(x) = f(x)$`,
        read: `F prime equals f`,
        means: `The case convention: a capital letter names an antiderivative of its own lowercase. The letter case **is** the claim — writing $F$ asserts $F' = f$ with no further words.`,
        cases: `$G/g$, $H/h$ work identically. The pairing carries into the Fundamental Theorem, $\\int_a^b f(x)\\,dx = F(b) - F(a)$ — **Connection to Definite Integrals** below.`,
        alsoWritten: `$F = \\int f$ — operator shorthand, bare sign and no variables, common on blackboards.`,
        confusedWith: `“$F$ is **the** antiderivative.” $F$ is one member — the family is $F + C$, and uniqueness fails by exactly a constant.`,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/integrals`,
    parentLabel: `Integrals`,
  },
  obj4: {
    title: `Basic Antiderivative Formulas`,
    content: `
Several antiderivatives appear constantly and should be memorized.

**Power rule** (for $n \\neq -1$):

@academic[formula_callout:Basic Antiderivative Formulas
$$\\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C$$]@

**Reciprocal:**

@academic[formula_callout:Reciprocal Antiderivative
$$\\int \\frac{1}{x}\\, dx = \\ln|x| + C$$
/calculus/formulas#reciprocal_antiderivative]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Using the power rule on 1/x
Writing $\\frac{1}{x}$ as $x^{-1}$ and applying the power rule gives $\\frac{x^{0}}{0}$, a division by zero. The power rule excludes $n = -1$; the antiderivative is $\\ln|x| + C$.
[Read more](!#pitfall-using-the-power-rule-on-1-x)]@

The reciprocal formula fills the one gap in the power rule. Its antiderivative is a logarithm, not a power of $x$, and the absolute value lets one formula serve both sides of $0$: for $x > 0$, $(\\ln x)' = \\frac{1}{x}$, and for $x < 0$, $(\\ln(-x))' = \\frac{-1}{-x} = \\frac{1}{x}$. At $x = 0$ itself neither $\\frac{1}{x}$ nor $\\ln|x|$ is defined.

**Exponential:**

@academic[formula_callout:Exponential Antiderivative
$$\\int e^x\\, dx = e^x + C$$
/calculus/formulas#exponential_antiderivative]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

**Trigonometric:**

@academic[formula_callout:Basic Antiderivative Formulas
$$\\int \\cos x\\, dx = \\sin x + C \\qquad \\int \\sin x\\, dx = -\\cos x + C$$]@

@academic[pitfall,aside:true,width:35%:Losing the minus sign in the sine integral
Writing $\\int \\sin x\\, dx = \\cos x + C$ gives a function whose derivative is $-\\sin x$, not $\\sin x$. The correct antiderivative is $-\\cos x + C$.
[Read more](!#pitfall-losing-the-minus-sign-in-the-sine-integral)]@

Both trigonometric formulas are derivatives read backwards, which is also the fastest way to recall them: $(\\sin x)' = \\cos x$ and $(-\\cos x)' = \\sin x$. A quick derivative of a candidate answer settles which function goes with which, and with which sign, without memorizing a separate table.

The [special integrals](!/calculus/integrals/special) page provides a more complete list.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Linearity of Indefinite Integrals`,
    content: `
Indefinite integrals obey the same [linearity rules](!/calculus/integrals/rules) as definite integrals.

**Sum rule:**

@academic[formula_callout:Linearity of Indefinite Integrals
$$\\int [f(x) + g(x)]\\, dx = \\int f(x)\\, dx + \\int g(x)\\, dx$$]@

**Constant multiple rule:**

@academic[formula_callout:Constant Multiple Rule (Integrals)
$$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$
/calculus/formulas#constant_multiple_rule_integrals]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

These rules reduce complex integrands to combinations of simpler ones. For example:

@academic[formula_callout:Linearity of Indefinite Integrals
$$\\int (3x^2 + 5x - 2)\\, dx = 3 \\cdot \\frac{x^3}{3} + 5 \\cdot \\frac{x^2}{2} - 2x + C = x^3 + \\frac{5x^2}{2} - 2x + C$$]@

@academic[pitfall,aside:true,width:35%:Pulling a variable out of the integral
Moving $x$ out of $\\int x \\cdot 2x\\, dx$ as if it were a constant gives $x \\cdot x^2 + C = x^3 + C$, whose derivative is $3x^2$, not $2x^2$. Multiplying first, $\\int 2x^2\\, dx = \\frac{2x^3}{3} + C$.
[Read more](!#pitfall-pulling-a-variable-out-of-the-integral)]@

In the example, the coefficients $3$, $5$ and $-2$ are fixed numbers, so each one passes through the integral sign unchanged, and what is left in each term is a power of $x$ that the power rule handles. The same two steps, splitting the sum and then taking out the numbers, turn any polynomial into a list of power-rule integrals with a single $+ C$ at the end.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Verifying Antiderivatives`,
    content: `
Integration has a built-in check: differentiate your answer.

If $\\int f(x)\\, dx = F(x) + C$, then $F'(x)$ must equal $f(x)$. If it doesn't, an error occurred.

For example, suppose you compute:

@academic[formula_callout:Antiderivative of Secant Squared
$$\\int \\sec^2 x\\, dx = \\tan x + C$$
/calculus/formulas#antiderivative_of_secant_squared]@

@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@

Verify: $(\\tan x)' = \\sec^2 x$. Correct.

@academic[fact,aside:true,width:35%:An antiderivative no formula can write
$e^{-x^2}$ is continuous, so it has antiderivatives, such as $\\int_0^x e^{-t^2}\\, dt$. Yet in the 1830s Joseph Liouville proved that none of them is a finite formula in powers, roots, exponentials, logarithms and trigonometric functions; the same holds for $\\frac{\\sin x}{x}$.]@

This check catches sign errors, missing constants, and algebraic mistakes. It works because differentiation is mechanical—once you have a candidate antiderivative, verification is straightforward.

The two directions are not equally easy. Differentiating a formula built from powers, roots, exponentials, logarithms and trigonometric functions always succeeds, and the result is again such a formula. Going backwards there is no rule that always works, so a candidate antiderivative is often found by trying, and the derivative check is what confirms it.

@academic[punchline:Finding an antiderivative may take ingenuity, but checking one always takes a single differentiation.]@
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Connection to Definite Integrals`,
    content: `
Indefinite and definite integrals serve different purposes but are linked by the Fundamental Theorem of Calculus.

The indefinite integral finds antiderivatives:

@academic[formula_callout:Connection to Definite Integrals
$$\\int f(x)\\, dx = F(x) + C$$]@

The definite integral uses an antiderivative to compute accumulated quantity:

@academic[formula_callout:Connection to Definite Integrals
$$\\int_a^b f(x)\\, dx = F(b) - F(a)$$]@

@academic[rule_corollary_plain:The constant $C$ cancels when evaluating $F(b) - F(a)$, so any antiderivative works.]@

This connection, detailed on the [rules](!/calculus/integrals/rules) page, is why mastering indefinite integration enables computation of definite integrals.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Summary: The Indefinite-Integration Workflow`,
    content: `
Every indefinite integral on this page follows the same five-step procedure, whether the integrand is a single power function or a complicated composition that requires a technique. The table below collects the workflow with a pointer to the sibling page where each step&apos;s detail lives — special integrals for the formula library, rules for linearity and the FTC, techniques for transformations. Use this as a reminder while working a problem: every step matters, and skipping the final verification is the single most common source of errors.
`,
    before: ``,
    after: ``,
    link: ``
  },
  formulaSummary: {
    title: `Formula Summary`,
    content: `This summary collects the formulas of the page on ten cards. Each card gives the name, the formula and a line on what it says, with a link to the section that explains it; a badge at the bottom of a card states a condition where one applies.

The first two cards define an antiderivative and the whole family of them, written with the constant of integration. Five basic formulas follow: the power rule, the reciprocal, the exponential, sine and cosine, and secant squared. The two linearity rules come next, and the last card links the indefinite integral to the definite one through the Fundamental Theorem.`,
    before: ``,
    after: `Every formula on these cards can be checked in one step by differentiating the right-hand side, which should return the integrand. That check, together with the constant of integration on every answer, catches most mistakes before they spread.`,
    link: '',
  },
  obj9: {
    title: `Common Pitfalls`,
    content: `Four mistakes cause most wrong answers in basic indefinite integration. Three of them are marked where they happen in the sections above; the first is the one the section on the constant of integration warns against. Here each is worked through in full, with the wrong and the right working side by side.`,
    before: ``,
    after: `Each slip loses part of the antiderivative. Every indefinite integral carries $+ C$; $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$, because the power rule fails at $-1$; $\\int \\sin x\\,dx = -\\cos x + C$; and a variable factor cannot be taken outside the integral. Differentiating the answer catches each slip.`,
    link: ``
  }
};



const introContent = {
  title: `Reversing Differentiation`,
  content: `
Differentiation takes a function and produces its rate of change. The indefinite integral reverses this process: given a rate of change, find the original function.

If $F'(x) = f(x)$, then $F$ is an antiderivative of $f$. The indefinite integral collects all such antiderivatives:

@academic[formula_callout:Indefinite Integral
$$\\int f(x)\\, dx = F(x) + C$$]@

The constant $C$ reflects a fundamental ambiguity. Since the derivative of any constant is zero, functions differing by a constant share the same derivative. The family $F(x) + C$ captures every function whose derivative equals $f(x)$.

Finding antiderivatives is the central challenge. Unlike differentiation, which follows mechanical rules, integration demands pattern recognition, technique, and sometimes ingenuity.
`
};

// FAQ pass: all seven originals named their own h2 — antiderivatives, the
// constant of integration, notation, basic formulas, linearity, verifying,
// and the definite connection. That resolves the hub's deferred claim on
// "What is an antiderivative?": the h2 answers it, so no page needs the
// entry. Replaced with the theorem behind + C, the initial-condition
// procedure, and the three notation traps.
// FAQ pass 2026-10-31: kept all five. Added whether every antiderivative is
// an accumulation function (the figure card under "Antiderivatives") and
// ln x as the power rule's limit at n = -1 (the fact box under "The Constant
// of Integration"). Left the separate constants of ln|x| + C to the special
// page, whose 1/x answer already states them.
const faqQuestions = {
  obj1: {
    question: "Why do all antiderivatives of a function differ by a constant?",
    answer: "Because two functions with the same derivative on an interval can only differ by a constant. If F′ = G′ then (F − G)′ = 0, and a function whose derivative is zero everywhere on an interval is constant. So once you find one antiderivative F, the whole family is F + C — nothing outside that form can have the right derivative.",
    sectionId: "2"
  },
  obj2: {
    question: "Do you need a separate + C for each term?",
    answer: "No — one constant covers the whole answer. Integrating term by term, each piece contributes its own arbitrary constant, but a sum of arbitrary constants is just another arbitrary constant, so they merge into a single C. Writing C₁ + C₂ + C₃ is not wrong, only redundant. Collapse them and write + C once, at the end.",
    sectionId: "3"
  },
  obj3: {
    question: "How do you find the value of C?",
    answer: "You need one known value of the antiderivative — an initial condition. Integrate to get F(x) + C, substitute the known point, and solve. If ∫2x dx = x² + C and you are told F(0) = 3, then 0² + C = 3, so C = 3 and F(x) = x² + 3. Without such a condition, C stays arbitrary.",
    sectionId: "2"
  },
  obj4: {
    question: "Does the dx in an integral actually matter?",
    answer: "Yes — it names the variable of integration, and dropping it leaves the expression ambiguous. ∫2t dx and ∫2t dt have different answers: the first treats t as a constant and gives 2tx + C, the second integrates in t and gives t² + C. The dx is also a live [differential](!/calculus/derivatives/differentials#notation) under substitution.",
    sectionId: "3"
  },
  obj5: {
    question: "Why is an antiderivative written with a capital F?",
    answer: "It is a case convention that carries a claim: writing F for an antiderivative of f asserts F′ = f without saying so in words. The same pairing works for G and g, or H and h. It is what makes the Fundamental Theorem readable as F(b) − F(a) — the capital signals which function is the antiderivative.",
    sectionId: "3"
  },
  obj6: {
    question: "Is every antiderivative of the form $\\int_a^x f(t)\\, dt$?",
    answer: "No. Moving the starting point $a$ shifts the accumulation function by a constant, but not always by every constant. For $f(x) = 2x$, $\\int_a^x 2t\\, dt = x^2 - a^2$, so the starting point only reaches $x^2 + C$ with $C \\le 0$; $x^2 + 5$ is an antiderivative that no choice of $a$ produces. What always holds is that every antiderivative is one accumulation function plus a constant.",
    sectionId: "1"
  },
  obj7: {
    question: "How is $\\ln x$ connected to the power rule?",
    answer: "It is the power rule's limit at $n = -1$. Choosing the constant so that $F(1) = 0$ turns $\\int x^n\\, dx$ into $\\frac{x^{n+1} - 1}{n+1}$, and as $n \\to -1$ this approaches $\\ln x$ for every $x > 0$. At $n = -0.999$ and $x = 2$ it gives about $0.6934$, against $\\ln 2 \\approx 0.6931$. Without the $-1$ that the constant supplies, $\\frac{x^{n+1}}{n+1}$ blows up instead.",
    sectionId: "2"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Indefinite Integrals",
    "description": "Learn indefinite integrals and antiderivatives: the constant of integration, notation, basic formulas (power rule, exponential, trig), linearity rules, verification, and connection to definite integrals.",
    "url": "https://www.learnmathclass.com/calculus/integrals/indefinite",
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
      "name": "Indefinite Integrals"
    },
    "teaches": [
      "Definition and properties of antiderivatives",
      "The constant of integration and its meaning",
      "Indefinite integral notation",
      "Basic antiderivative formulas",
      "Linearity rules for indefinite integrals",
      "Verifying antiderivatives by differentiation",
      "The indefinite-integration workflow"
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
        "name": "Indefinite Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals/indefinite"
      }
    ]
  }
}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const inPx = (x) => x / 3 * 388;
  const fpConstCancels = { kind: 'pieces', svgTitle: 'x^2 and x^2 + 2 rise by the same 3 from x = 1 to x = 2: the constant cancels in F(b) - F(a)', xRange: [0, 3], yRange: [-1, 9],
    pieces: [
      { fn: (x) => x * x + 2, from: 0, to: 2.6, ends: [null, null], color: 'g', label: { text: 'x² + 2', x: 0.35, y: 2.12, pos: 'n' } },
      { fn: (x) => x * x, from: 0, to: 2.9, ends: [null, null], color: 'f', label: { text: 'x²', x: 2.6, y: 6.76, pos: 'se' } },
    ],
    vlines: [{ x: 1, label: 'a = 1' }, { x: 2, label: 'b = 2' }],
    yBars: [{ from: 1, to: 4, color: 'f', dx: inPx(2) + 10 }, { from: 3, to: 6, color: 'g', dx: inPx(2) - 10 }],
    points: [{ x: 1, y: 1 }, { x: 2, y: 4 }, { x: 1, y: 3 }, { x: 2, y: 6 }],
    notes: [{ x: 2.12, y: 2.4, text: '4 − 1 = 3', pos: 'e', color: 'f' }, { x: 1.45, y: 6.6, text: '6 − 3 = 3', pos: 'e', color: 'g' }],
    caption: 'Any antiderivative gives the same F(b) − F(a): the + C cancels' };
  const fpCiFamily = { kind: 'pieces', svgTitle: 'x squared minus 2, x squared and x squared plus 3: the same parabola shifted, all with slope 2 at x = 1', xRange: [-2.2, 3.4], yRange: [-3, 8.5], xStep: 1, yStep: 1,
    pieces: [
      { fn: (x) => x * x + 3, from: -2.2, to: 2.1, ends: [null, null], color: 'r', label: { text: 'x² + 3', x: 2.1, y: 7.41, pos: 'e' } },
      { fn: (x) => x * x, from: -2.2, to: 2.1, ends: [null, null], color: 'f', label: { text: 'x²', x: 2.1, y: 4.41, pos: 'e' } },
      { fn: (x) => x * x - 2, from: -2.2, to: 2.1, ends: [null, null], color: 'g', label: { text: 'x² − 2', x: 2.1, y: 2.41, pos: 'e' } },
    ],
    points: [{ x: 1, y: 4 }, { x: 1, y: 1 }, { x: 1, y: -1 }],
    notes: [{ x: 1.15, y: -2.2, text: 'at x = 1 every curve has slope 2', pos: 'e' }],
    caption: 'One parabola, shifted up and down: all have derivative 2x' };
  const conceptIntroFigures = {
    familyTable: ciFamilyTable,
    family: renderFunctionPlotV4(fpCiFamily),
  };

  const demoUnits = {
    anti: demoUnitFrame({
      svg: functionFTCDiagrams.quadratic,
      caption: 'F(x) = &#8747;&#8320;&#739; t&#178; dt = x&#179;/3 is an antiderivative of x&#178;',
      text: 'The lower curve is f(t) = t&#178; and the upper one is the area accumulated under it from 0; the slope of the upper curve at any x equals the height of the lower one there, which is what F&#8242; = f means. Start the accumulation from a different a and the upper curve shifts by a constant: the + C of the indefinite integral. Change the starting point and watch the whole antiderivative slide on the',
      href: '/calculus/visual-tools/fundamental-theorem',
      linkText: 'fundamental theorem of calculus visualizer',
    }),
    constCancels: demoUnitFrame({
      svg: renderFunctionPlotV4(fpConstCancels),
      caption: 'Why the + C drops out of a definite integral',
      text: 'x&#178; and x&#178; + 2 are two antiderivatives of 2x, one sitting 2 units above the other. Between a = 1 and b = 2 the lower curve rises from 1 to 4 and the upper from 3 to 6: the same rise of 3 (the two columns). Shifting a curve up moves both endpoints by the same amount, so F(b) &#8722; F(a) is the same for every member of the family and equals &#8747;&#8321;&#178; 2x dx = 3.',
    }),
  };

  // MistakeFix batch 14, 2026-11-03: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj9 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'forgetting-the-c', name: `Forgetting the + C`, errorAt: 0,
        what: `The antiderivative is found correctly, but the answer is written as $F(x)$ alone. That names one antiderivative where the indefinite integral asks for all of them, and it leaves nothing to adjust when an initial condition has to be met.`,
        wrong: [`$\\int 2x\\, dx = x^2$. With the condition $F(0) = 3$, this gives $F(0) = 0^2 = 0$, and there is no constant left to fix it.`],
        right: [`$\\int 2x\\, dx = x^2 + C$. The condition gives $0^2 + C = 3$, so $C = 3$ and $F(x) = x^2 + 3$.`],
        why: `Differentiation wipes out constants, so the constant is invisible when the derivative is read backwards. In definite integrals the constant cancels and is never written, and the habit carries over.`,
        check: `Every indefinite integral has exactly one arbitrary constant. Before an initial condition is used, there must be a $C$ in the answer to solve for.` },
      { id: 'using-the-power-rule-on-1-x', name: `Using the power rule on 1/x`, errorAt: 0,
        what: `The integrand $\\frac{1}{x}$ is rewritten as $x^{-1}$ and the power rule is applied as for any other power. With $n = -1$ the rule's denominator $n + 1$ is $0$.`,
        wrong: [`$\\int x^{-1}\\, dx = \\frac{x^{-1+1}}{-1+1} + C = \\frac{x^{0}}{0} + C$, which is undefined.`],
        right: [`The power rule holds only for $n \\neq -1$. The reciprocal formula covers this case: $\\int \\frac{1}{x}\\, dx = \\ln|x| + C$.`],
        why: `$x^{-1}$ looks like every other power of $x$, and the condition $n \\neq -1$ stands beside the rule, where it is easy to skip.`,
        check: `Differentiate. $(\\ln|x|)' = \\frac{1}{x}$ for every $x \\neq 0$. No power of $x$ can work: $(x^k)' = kx^{k-1}$ has the exponent $-1$ only when $k = 0$, and then the derivative is $0$.` },
      { id: 'losing-the-minus-sign-in-the-sine-integral', name: `Losing the minus sign in the sine integral`, errorAt: 0,
        what: `The antiderivatives of $\\sin x$ and $\\cos x$ are recalled from the derivative table, and the minus sign ends up on the wrong formula or disappears.`,
        wrong: [`$\\int \\sin x\\, dx = \\cos x + C$, or $\\int \\cos x\\, dx = -\\sin x + C$.`],
        right: [`$\\int \\sin x\\, dx = -\\cos x + C$, because $(-\\cos x)' = -(-\\sin x) = \\sin x$. And $\\int \\cos x\\, dx = \\sin x + C$, because $(\\sin x)' = \\cos x$.`],
        why: `In the derivative table the minus sign belongs to the cosine, $(\\cos x)' = -\\sin x$. Read backwards, the sign moves to the other formula, and it is easy to leave it where it was.`,
        check: `Differentiate the answer. $(\\cos x)' = -\\sin x$ has the wrong sign. A definite value also catches it: $\\int_0^{\\pi} \\sin x\\, dx$ is the area under one arch of the sine, which is positive. With $-\\cos x$ it is $-\\cos \\pi + \\cos 0 = 2$; with $\\cos x$ it would be $\\cos \\pi - \\cos 0 = -2$.` },
      { id: 'pulling-a-variable-out-of-the-integral', name: `Pulling a variable out of the integral`, errorAt: 0,
        what: `The constant multiple rule lets a number pass through the integral sign. A factor that contains $x$ is moved out the same way, and only the rest is integrated.`,
        wrong: [`$\\int x \\cdot 2x\\, dx = x \\int 2x\\, dx = x \\cdot x^2 + C = x^3 + C$.`],
        right: [`Multiply first, $x \\cdot 2x = 2x^2$, then $\\int 2x^2\\, dx = 2 \\cdot \\frac{x^3}{3} + C = \\frac{2x^3}{3} + C$.`],
        why: `In $\\int c \\cdot f(x)\\, dx$ the constant stands in front of the function, just where a variable factor would stand, and the condition that $c$ does not change with $x$ is easy to overlook.`,
        check: `Differentiate. $(x^3)' = 3x^2$, not $2x^2$; $\\left(\\frac{2x^3}{3}\\right)' = 2x^2$.` },
    ],
  };

  // Formula Summary 2026-11-07: the page's own formulas.
  const formulaSummaryData = {
    theme: { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' },
    items: [
      { name: 'Antiderivative', formula: "$F'(x) = f(x)$", restriction: 'one function among infinitely many',
        text: '$F$ is an antiderivative of $f$ when its derivative gives back $f$, as [antiderivatives](!#1) defines.' },
      { name: 'Antiderivative family', formula: "$\\displaystyle \\int f(x)\\, dx = F(x) + C \\quad \\text{where } F'(x) = f(x)$", restriction: 'the $+ C$ is part of the answer',
        text: 'Antiderivatives on an interval differ by a constant, so one of them gives them all, as [the constant of integration](!#2) explains.' },
      { name: 'Power rule', formula: '$\\displaystyle \\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C$', restriction: '$n \\neq -1$',
        text: 'Raise the exponent by one and divide by the new exponent; see [basic antiderivative formulas](!#4).' },
      { name: 'Reciprocal', formula: '$\\displaystyle \\int \\frac{1}{x}\\, dx = \\ln|x| + C$', restriction: '$x \\neq 0$',
        text: 'Fills the one gap in the power rule; the absolute value covers both sides of $0$ ([basic antiderivative formulas](!#4)).' },
      { name: 'Exponential', formula: '$\\displaystyle \\int e^x\\, dx = e^x + C$',
        text: 'The exponential is its own antiderivative, as [basic antiderivative formulas](!#4) lists.' },
      { name: 'Sine and cosine', formula: '$\\displaystyle \\int \\cos x\\, dx = \\sin x + C \\qquad \\int \\sin x\\, dx = -\\cos x + C$', restriction: 'the minus sign belongs to the sine',
        text: 'Each reverses a derivative from the trigonometric list, from [basic antiderivative formulas](!#4).' },
      { name: 'Secant squared', formula: '$\\displaystyle \\int \\sec^2 x\\, dx = \\tan x + C$',
        text: 'Checked by differentiating: $(\\tan x)\' = \\sec^2 x$, as [verifying antiderivatives](!#6) does.' },
      { name: 'Sum rule', formula: '$\\displaystyle \\int [f(x) + g(x)]\\, dx = \\int f(x)\\, dx + \\int g(x)\\, dx$',
        text: 'A sum is integrated one term at a time, as [linearity](!#5) shows.' },
      { name: 'Constant multiple rule', formula: '$\\displaystyle \\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$', restriction: 'constants only, not functions of $x$',
        text: 'A fixed number passes through the integral sign unchanged ([linearity](!#5)).' },
      { name: 'Connection to definite integrals', formula: '$\\displaystyle \\int_a^b f(x)\\, dx = F(b) - F(a)$',
        text: 'An antiderivative evaluated at the two limits gives the definite integral, as [connection to definite integrals](!#7) shows.' },
    ],
  };

  return {
  props: {
    formulaSummaryData,
    pitfallData,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj4Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Indefinite Integrals: Antiderivatives & Formulas | Learn Math Class",
      description: "Learn indefinite integrals and antiderivatives: the constant of integration, notation, basic formulas (power rule, exponential, trig), linearity rules, verification, and connection to definite integrals.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/indefinite",
      name: "Indefinite Integrals"
    },
  }
}
   }

export default function PageTemplate({ formulaSummaryData, pitfallData,seoData, sectionsContent, introContent, obj4Table, summaryTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 2 concept introduction — template A (definition last).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `Differentiation turns x² into 2x. Going backwards, from 2x to the function it came from, has more than one answer.`,
        content: [
          `$x^2$, $x^2 + 5$ and $x^2 - 17$ all have derivative $2x$, as the previous section showed. So the question "which function has derivative $2x$?" is answered not by one function but by a whole family.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `The family is one parabola slid up and down: at every x, all its members have the same slope.`,
        content: [
          ciTable('familyTable'),
        ],
        visual: ciSvg('family'),
      },
      {
        id: 'pattern',
        lead: `One answer plus a free constant describes the whole family.`,
        content: [
          `If $F(x)$ is one antiderivative of $f(x)$, then every antiderivative has the form:`,
          `$$F(x) + C$$`,
          `where $C$ is an arbitrary constant. This follows from a basic fact: if two functions have the same derivative on an interval, they differ by a constant.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The [indefinite integral](!/calculus/definitions#indefinite_integral) of $f$, written $\\int f(x)\\, dx$, is the whole family of its [antiderivatives](!/calculus/definitions#antiderivative): $F(x) + C$, where $F'(x) = f(x)$ and $C$ is any constant.`,
        formula: [
          `@academic[formula_callout:Antiderivative Family
$$\\int f(x)\\, dx = F(x) + C \\quad \\text{where } F'(x) = f(x)$$
/calculus/formulas#antiderivative_family]@`,
          `@academic[formulas_link:Browse all integral formulas
/calculus/formulas]@`,
        ],
        footer: `So $\\int 2x\\, dx = x^2 + C$.`,
      },
      {
        id: 'kind',
        lead: `An indefinite integral is a family of functions — not a single function, and not a number.`,
        content: [
          `The "$+ C$" in indefinite integrals is not optional notation—it represents the complete answer. Omitting it gives only one member of the family when infinitely many exist.`,
          `A definite integral, by contrast, is a single number; there the $+ C$ cancels, as [connection to definite integrals](!/calculus/integrals/indefinite#7) shows.`,
        ],
      },
      {
        id: 'caveat',
        lead: `To single out one member of the family, one more fact is needed: the function's value at some point.`,
        content: [
          `Initial conditions pin down $C$. If you know that $F(0) = 3$, for instance, you can solve for the specific constant that satisfies this requirement.`,
          `One condition can also fix $C$ for a whole family of integrands at once. For $f(x) = x^n$ with $n \\neq -1$, the condition $F(1) = 0$ gives $C = -\\frac{1}{n+1}$ and the antiderivative $\\frac{x^{n+1} - 1}{n+1}$. At $n = -1$ the power rule itself breaks down, since its denominator $n + 1$ is $0$.`,
          `@academic[fact,aside:true,width:35%:The power rule's limit is $\\ln x$
As $n$ approaches $-1$, the antiderivative $\\frac{x^{n+1} - 1}{n+1}$ approaches $\\ln x$ for every $x > 0$, the very function the power rule cannot give at $n = -1$. The constant does the work: at $n = -0.999$ and $x = 2$ it gives $0.6934$, against $\\ln 2 \\approx 0.6931$, while $\\frac{x^{n+1}}{n+1}$ alone blows up.]@`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers notation, the basic antiderivative formulas, linearity, verifying antiderivatives, and the connection to definite integrals.`,
      },
    ],
  }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
                  <div key={'unit-anti'} dangerouslySetInnerHTML={{ __html: demoUnits.anti }} />,
          `Every antiderivative of f is one of these accumulation curves, shifted.`,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          <ConceptIntro key={'obj2-intro'} data={conceptIntro} />,
        ]
    },
    {
        id:'3',
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
          <NotationCheatSheet
            key={'notation-sheet'}
            sheet={integralsNotationSheet}
            current={'/calculus/integrals/indefinite'}
          />,
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
          <div key={'unit-constCancels'} dangerouslySetInnerHTML={{ __html: demoUnits.constCancels }} />,
          `That is why a definite integral needs no + C, while an indefinite one does.`,
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
        id:'formula-summary',
        title:sectionsContent.formulaSummary.title,
        link:sectionsContent.formulaSummary.link,
        content:[
          sectionsContent.formulaSummary.content,
          <DiagramFrame
            key={'formula-summary'}
            id="indefinite-integral-formula-summary"
            title="Indefinite integral formulas"
            source="/calculus/integrals/indefinite"
            related={{ href: '/calculus/formulas', label: 'All calculus formulas' }}
            after={sectionsContent.formulaSummary.after}
          >
            <FormulaSheet data={formulaSummaryData} variant="tiles" />
          </DiagramFrame>,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <DiagramFrame
            key={'obj9-mistakes'}
            id="indefinite-integral-pitfalls"
            title="Common pitfalls with indefinite integrals"
            source="/calculus/integrals/indefinite"
            after={sectionsContent.obj9.after}
          >
            <MistakeFix data={pitfallData} variant="trace" />
          </DiagramFrame>,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Indefinite Integrals FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Indefinite Integrals</h1>
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