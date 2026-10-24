// tables-optimized: v4 | 2026-05-24 | 2 tables (obj4 aggregation, obj9 summary capstone)
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


export async function getStaticProps(){
const keyWords = [
  "two-sided limit",
  "two-sided limit definition",
  "limit from both sides",
  "left and right limit equal",
  "limit existence condition",
  "lim x approaches a",
  "jump discontinuity limit",
  "limit does not exist",
  "evaluating two-sided limits",
  "continuous function limit",
  "direct substitution limit",
  "derivative as limit",
  "one-sided limits equal two-sided",
  "limit notation calculus"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj4 — aggregation: how two-sided limits fail, broken down by one-sided behavior
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Failure mode</th>
      <th style="${tableHeaders.aggregation}">Left-hand limit at a</th>
      <th style="${tableHeaders.aggregation}">Right-hand limit at a</th>
      <th style="${tableHeaders.aggregation}">Why two-sided fails</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Jump discontinuity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, equals L<sub>1</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, equals L<sub>2</sub> ≠ L<sub>1</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">both sides settle, but on different values</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Infinite disagreement</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">→ −∞ (or +∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">→ the opposite ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">neither side is finite, and they head opposite directions</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Oscillation</td>
      <td style="padding: 12px 15px; color: #34495e;">does not exist</td>
      <td style="padding: 12px 15px; color: #34495e;">(or does not exist)</td>
      <td style="padding: 12px 15px; color: #34495e;">at least one side never settles on any value</td>
    </tr>
  </tbody>
</table>
`

// obj9 — summary capstone: where two-sided limits appear across calculus
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Setting</th>
      <th style="${tableHeaders.summary}">Two-sided limit involved</th>
      <th style="${tableHeaders.summary}">Why agreement from both sides matters</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">The basic limit notation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → a</sub> f(x) = L</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the no-superscript form is the default, requiring both sides to reach the same L</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/limits/continuity" style="${linkStyle}">Continuity at a point</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → a</sub> f(x) = f(a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a function isn&apos;t continuous if it only matches f(a) from one direction</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/derivatives" style="${linkStyle}">Derivative at a point</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>h → 0</sub> [f(a + h) − f(a)] / h</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">differentiability requires the same instantaneous slope from both sides; corners and cusps fail here</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Domain boundary (exception)</td>
      <td style="padding: 12px 15px; color: #34495e;">only a <a href="/calculus/limits/one-sided" style="${linkStyle}">one-sided limit</a> exists, e.g. lim<sub>x → 0⁺</sub> √x</td>
      <td style="padding: 12px 15px; color: #34495e;">when the function isn&apos;t defined on one side, two-sided isn&apos;t available — the one-sided limit takes over as the appropriate concept</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/limits/two-sided ───────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Limit](!/calculus/definitions#limit) — the value approached from both directions simultaneously
// - [One-Sided Limit](!/calculus/definitions#one_sided_limit) — directional components of the two-sided limit
// - [Continuity](!/calculus/definitions#continuity) — holds when the two-sided limit equals the function value`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `What is a Two-Sided Limit?`,
//     content: `
// The standard limit notation

// $$\\lim_{x \\to a} f(x) = L$$

// means $x$ approaches $a$ from both directions. Values slightly less than $a$ and values slightly greater than $a$ must both send $f(x)$ toward the same number $L$.

// No superscript appears on the $a$—this absence signals the two-sided requirement. The function must exhibit consistent behavior from the left and from the right. When you trace the graph toward $x = a$ from either direction, both traces must converge to the same $y$-value.

// The two-sided limit is the default interpretation whenever limit notation appears without further qualification.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj2: {
//     title: `The Existence Condition`,
//     content: `
// A two-sided limit exists if and only if both [one-sided limits](!/calculus/limits/one-sided) exist and are equal. Formally:

// $$\\lim_{x \\to a} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$

// Three conditions must hold. First, the left-hand limit $\\lim_{x \\to a^-} f(x)$ must exist. Second, the right-hand limit $\\lim_{x \\to a^+} f(x)$ must exist. Third, these two values must be identical.

// If the one-sided limits differ, the two-sided limit does not exist. If either one-sided limit fails to exist (due to oscillation or unbounded behavior), the two-sided limit also fails to exist.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj3: {
//     title: `Visualizing Two-Sided Approach`,
//     content: `
// Imagine tracing the graph of $f$ with your finger, moving toward $x = a$ from the left. Note the $y$-value your finger approaches. Now repeat from the right. If both traces converge to the same height, the two-sided limit exists and equals that height.

// The function value $f(a)$ is irrelevant to this process. The graph might have a hole at $x = a$, or the point might be displaced from where the traces converge. The limit cares only about approach, not arrival.

// A filled or open circle at $x = a$ tells you about $f(a)$, but the limit depends on the curve's behavior as it approaches that $x$-coordinate from both sides.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj4: {
//     title: `When Two-Sided Limits Fail to Exist`,
//     content: `
// Several scenarios cause two-sided limits to fail.

// ## Jump Discontinuity

// The left-hand and right-hand limits both exist but differ. For a piecewise function defined by

// $$f(x) = \\begin{cases} x + 1 & x < 3 \\\\ x - 1 & x \\geq 3 \\end{cases}$$

// the left-hand limit at $x = 3$ is $4$ while the right-hand limit is $2$. No single value works for both directions.

// ## Infinite Disagreement

// One side may tend toward $+\\infty$ while the other tends toward $-\\infty$. For $f(x) = 1/(x - 2)$, approaching $x = 2$ from the right gives $+\\infty$, while approaching from the left gives $-\\infty$. The two-sided limit does not exist.

// ## Oscillation

// If the function oscillates without settling from at least one direction, the corresponding one-sided limit fails to exist, and so does the two-sided limit.

// Each failure mode reveals different information about the function's structure near the point.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj5: {
//     title: `Continuous Functions and Two-Sided Limits`,
//     content: `
// For [continuous](!/calculus/limits/continuity) functions, evaluating limits is straightforward: substitute and compute. The definition of continuity at $x = a$ requires

// $$\\lim_{x \\to a} f(x) = f(a)$$

// When this holds, the limit equals the function value. Polynomials, exponentials, sine, cosine, and many standard functions are continuous everywhere on their domains. For these, direct substitution yields the limit immediately.

// Rational functions are continuous wherever the denominator is nonzero. At points where the denominator vanishes, continuity fails and direct substitution does not apply—[other techniques](!/calculus/limits/evaluating) are needed.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj6: {
//     title: `Evaluating Two-Sided Limits`,
//     content: `
// Begin with direct substitution. If $f(a)$ is defined and no indeterminate form arises, then

// $$\\lim_{x \\to a} f(x) = f(a)$$

// If substitution produces $0/0$, $\\infty/\\infty$, or another indeterminate form, algebraic manipulation is required. Factor and cancel common terms, rationalize radicals, or simplify complex fractions until substitution becomes possible.

// For example:

// $$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x + 3) = 6$$

// The [evaluating limits](!/calculus/limits/evaluating) page covers these techniques in detail.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj7: {
//     title: `Two-Sided Limits at Boundary Points`,
//     content: `
// At the edge of a function's domain, only one direction of approach is available. The square root function $\\sqrt{x}$ is defined only for $x \\geq 0$, so at $x = 0$, only the right-hand limit makes sense:

// $$\\lim_{x \\to 0^+} \\sqrt{x} = 0$$

// There is no left-hand limit because negative inputs lie outside the domain. In such cases, the [one-sided limit](!/calculus/limits/one-sided) is the only meaningful limit.

// Context determines interpretation. When a function's domain naturally restricts approach to one side, the one-sided limit serves as the appropriate limit concept at that boundary.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj8: {
//     title: `Relationship to Derivatives`,
//     content: `
// The derivative of $f$ at $x = a$ is defined as a two-sided limit:

// $$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

// The variable $h$ approaches $0$ from both positive and negative values. Positive $h$ corresponds to approaching from the right; negative $h$ corresponds to approaching from the left. Differentiability requires the same rate of change from both directions.

// If only one direction yields a limit, we obtain a one-sided derivative. A function can have a left derivative and a right derivative that differ, in which case the two-sided derivative does not exist at that point.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj9: {
//     title: `Summary: Where Two-Sided Limits Appear in Calculus`,
//     content: `
// The two-sided limit is the default notion of approach in calculus, and that default carries weight: most of the key definitions in the subject are stated as two-sided limits. The table below collects three settings where the two-sided form is structurally required, plus the one common exception — a domain boundary, where two-sided approach isn&apos;t even available. In every case, the requirement that the function agree from both sides isn&apos;t decorative; it&apos;s what makes the underlying definition well-posed.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   }
// };



// formulas-optimized: v1 | 2026-06-09 | 1 callout (obj2)
const sectionsContent = {
  // ─── /calculus/limits/two-sided ───────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Limit](!/calculus/definitions#limit) — the value approached from both directions simultaneously
- [One-Sided Limit](!/calculus/definitions#one_sided_limit) — directional components of the two-sided limit
- [Continuity](!/calculus/definitions#continuity) — holds when the two-sided limit equals the function value`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `What is a Two-Sided Limit?`,
    content: `
The standard limit notation

@academic[formula_callout:What is a Two-Sided Limit?
$$\\lim_{x \\to a} f(x) = L$$]@

means $x$ approaches $a$ from both directions. Values slightly less than $a$ and values slightly greater than $a$ must both send $f(x)$ toward the same number $L$.

@academic[fact,aside:true,width:35%:Limit $0$ at every point
Thomae's function of 1875 is $\\frac{1}{q}$ at each fraction $\\frac{p}{q}$ in lowest terms and $0$ at each irrational. Near any point only finitely many fractions have a small denominator, so from both sides the values close in on $0$ everywhere, though at every fraction the function sits above $0$.]@

No superscript appears on the $a$—this absence signals the two-sided requirement. The function must exhibit consistent behavior from the left and from the right. When you trace the graph toward $x = a$ from either direction, both traces must converge to the same $y$-value.

Tracing with a finger assumes a graph that can be drawn without lifting the pen. The definition itself asks for less: only that the values on both sides come close to $L$, whatever the graph looks like between them and at $a$ itself.

The two-sided limit is the default interpretation whenever limit notation appears without further qualification.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `The Existence Condition`,
    content: `
A two-sided limit exists if and only if both [one-sided limits](!/calculus/limits/one-sided) exist and are equal. Formally:

@academic[formula_callout:Two-Sided Limit Existence Theorem
$$\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$
/calculus/formulas#two-sided_limit_existence_theorem]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Checking only one side
Computing only the right-hand limit of $f(x) = x^2$ for $x < 1$ and $2x$ for $x \\geq 1$ gives $2$ and the claim $\\lim_{x \\to 1} f(x) = 2$. The left-hand limit is $1$, so the two-sided limit does not exist.
[Read more](!#pitfalls)]@

Three conditions must hold. First, the left-hand limit $\\lim_{x \\to a^-} f(x)$ must exist. Second, the right-hand limit $\\lim_{x \\to a^+} f(x)$ must exist. Third, these two values must be identical.

If the one-sided limits differ, the two-sided limit does not exist. If either one-sided limit fails to exist (due to oscillation or unbounded behavior), the two-sided limit also fails to exist.
`,
    before: ``,
    after: ``,
    link: ``
  },
  notation: {
    title: `The Default Limit Notation`,
    lead: `The base marks every later limit page decorates. What the bare, superscript-free form asserts — and the shorthand for when it asserts nothing.`,
    inherited: `The superscripts $a^{-}$ and $a^{+}$ in the existence criterion above belong to [one-sided limits](!/calculus/limits/one-sided).`,
    entries: [
      {
        id: 'arrow-approaches',
        tex: `$x \\to a$`,
        read: `x approaches a`,
        means: `Approach from **both sides at once** — no superscript, no preferred direction, and $x$ never equals $a$. LaTeX @[\\to]@; the [mathematical keyboard](!/keyboard) carries $\\rightarrow$ in its arrow set.`,
        cases: `Superscript added — directional, owned by [one-sided limits](!/calculus/limits/one-sided). $\\infty$ in place of $a$ — the approach never arrives, [limits at infinity](!/calculus/limits/infinity). In the [derivative](!/calculus/derivatives) definition the moving variable is renamed: $h \\to 0$.`,
        alsoWritten: `“Tends to” in British texts, “approaches” in American ones. The arrow itself appeared around 1905 (Leathem) and became standard through Hardy's **A Course of Pure Mathematics** (1908); before it, texts put $x = a$ under the lim.`,
        confusedWith: `Not an equality in motion. $0 < |x - a|$ holds the whole way — reading the arrow as “set $x = a$” is the substitution error the limit concept exists to avoid.`,
        sameGlyphElsewhere: `The same arrow writes [function mapping](!/functions/basics) $f: A \\to B$ and [logical implication](!/logic/propositional-logic/semantics/implication) $p \\to q$ — unrelated jobs.`,
      },
      {
        id: 'lim-operator',
        tex: `$\\lim\\limits_{x \\to a} f(x) = L$`,
        read: `The limit of f of x, as x approaches a, equals L`,
        means: `One indivisible operator — nothing is multiplied. $x$ is a bound variable: $L$ depends on $f$ and $a$, never on $x$. The [LaTeX reference](!/latex) writes it @[\\lim_{x \\to a}]@.`,
        cases: `Displayed, the condition sits under the operator; inline it slides to a subscript — same command. The $= L$ form asserts existence, so it may only be written once the criterion in **The Existence Condition** above is met.`,
        alsoWritten: `$f(x) \\to L$ as $x \\to a$ — the arrow form, standard in running prose where a displayed operator would be heavy.`,
        confusedWith: `$L$ is not $f(a)$. Hole at $a$, displaced point, undefined value — the limit ignores all three; [continuity](!/calculus/limits/continuity) is precisely the claim that $L$ and $f(a)$ coincide.`,
      },
      {
        id: 'dne',
        tex: `$\\lim\\limits_{x \\to a} f(x)$ DNE`,
        read: `The limit does not exist — D N E`,
        means: `A verdict, not a value. DNE cannot be computed with or set equal to anything — once it holds, the $= L$ form is unavailable.`,
        cases: `The three routes — jump, opposite infinities, oscillation — are catalogued in **When Two-Sided Limits Fail to Exist** below. A limit that is $\\infty$ is its own case: the $= \\infty$ notation describes **how** existence fails and belongs to [infinite limits](!/calculus/limits/infinity).`,
        alsoWritten: `Spelled out “does not exist” in analysis texts; DNE is classroom and exam shorthand, rarely printed.`,
        confusedWith: `Not the same as $f(a)$ undefined. $\\frac{\\sin x}{x}$ at $0$: no value, limit exists. The floor function at an integer: value exists, limit DNE. Independent questions.`,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/limits`,
    parentLabel: `Limits`,
  },
  obj3: {
    title: `Visualizing Two-Sided Approach`,
    content: `
Imagine tracing the graph of $f$ with your finger, moving toward $x = a$ from the left. Note the $y$-value your finger approaches. Now repeat from the right. If both traces converge to the same height, the two-sided limit exists and equals that height.

@academic[pitfall,aside:true,width:35%:Reading the limit off the dot
Answering $5$ for $f(x) = x + 1$ when $x \\neq 2$, with $f(2) = 5$, reads the plotted point. Both traces head to height $3$, so $\\lim_{x \\to 2} f(x) = 3$ while $f(2) = 5$.
[Read more](!#pitfalls)]@

The function value $f(a)$ is irrelevant to this process. The graph might have a hole at $x = a$, or the point might be displaced from where the traces converge. The limit cares only about approach, not arrival.

A filled or open circle at $x = a$ tells you about $f(a)$, but the limit depends on the curve's behavior as it approaches that $x$-coordinate from both sides.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `When Two-Sided Limits Fail to Exist`,
    content: `
Several scenarios cause two-sided limits to fail.

## Jump Discontinuity

The left-hand and right-hand limits both exist but differ. For a piecewise function defined by

@academic[formula_callout:When Two-Sided Limits Fail to Exist
$$f(x) = \\begin{cases} x + 1 & x < 3 \\\\ x - 1 & x \\geq 3 \\end{cases}$$]@

the left-hand limit at $x = 3$ is $4$ while the right-hand limit is $2$. No single value works for both directions.

## Infinite Disagreement

One side may tend toward $+\\infty$ while the other tends toward $-\\infty$. For $f(x) = 1/(x - 2)$, approaching $x = 2$ from the right gives $+\\infty$, while approaching from the left gives $-\\infty$. The two-sided limit does not exist.

@academic[pitfall,aside:true,width:35%:Writing the limit as infinity
Writing $\\lim_{x \\to 2} \\frac{1}{x - 2} = \\infty$ because the values blow up drops the signs. The left side heads to $-\\infty$ and the right side to $+\\infty$, so the two-sided limit does not exist.
[Read more](!#pitfalls)]@

A short table of values shows the split. At $x = 2.01$ and $x = 2.001$ the function equals $100$ and $1000$; at $x = 1.99$ and $x = 1.999$ it equals $-100$ and $-1000$. The size grows without bound on both sides of $x = 2$, but the two sides never share a sign.

## Oscillation

If the function oscillates without settling from at least one direction, the corresponding one-sided limit fails to exist, and so does the two-sided limit.

Each failure mode reveals different information about the function's structure near the point.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Continuous Functions and Two-Sided Limits`,
    content: `
For [continuous](!/calculus/limits/continuity) functions, evaluating limits is straightforward: substitute and compute. The definition of continuity at $x = a$ requires

@academic[formula_callout:Continuous Functions and Two-Sided Limits
$$\\lim_{x \\to a} f(x) = f(a)$$]@

When this holds, the limit equals the function value. Polynomials, exponentials, sine, cosine, and many standard functions are continuous everywhere on their domains. For these, direct substitution yields the limit immediately.

@academic[rule_plain:Rational functions are continuous wherever the denominator is nonzero.]@

At points where the denominator vanishes, continuity fails and direct substitution does not apply—[other techniques](!/calculus/limits/evaluating) are needed.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Evaluating Two-Sided Limits`,
    content: `
Begin with direct substitution. If $f(a)$ is defined and no indeterminate form arises, then

@academic[formula_callout:Evaluating Two-Sided Limits
$$\\lim_{x \\to a} f(x) = f(a)$$]@

If substitution produces $0/0$, $\\infty/\\infty$, or another indeterminate form, algebraic manipulation is required. Factor and cancel common terms, rationalize radicals, or simplify complex fractions until substitution becomes possible.

For example:

@academic[formula_callout:Evaluating Two-Sided Limits
$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x + 3) = 6$$]@

@academic[pitfall,aside:true,width:35%:Stopping at 0/0
Substituting $x = 3$ into $\\frac{x^2 - 9}{x - 3}$ gives $\\frac{0}{0}$, and the limit is declared undefined or nonexistent. The form only says more work is needed: after cancelling, the limit is $6$.
[Read more](!#pitfalls)]@

The cancellation is legitimate because the limit never uses the value at $x = 3$ itself. For every $x \\neq 3$ the two expressions are equal, so they approach the same number. The original function has a hole at $x = 3$, while $x + 3$ passes through the point $(3, 6)$.

The [evaluating limits](!/calculus/limits/evaluating) page covers these techniques in detail.

@academic[punchline:Two expressions that agree everywhere near $a$, except possibly at $a$ itself, have the same limit at $a$.]@
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Two-Sided Limits at Boundary Points`,
    content: `
At the edge of a function's domain, only one direction of approach is available. The square root function $\\sqrt{x}$ is defined only for $x \\geq 0$, so at $x = 0$, only the right-hand limit makes sense:

@academic[formula_callout:Two-Sided Limits at Boundary Points
$$\\lim_{x \\to 0^+} \\sqrt{x} = 0$$]@

There is no left-hand limit because negative inputs lie outside the domain. In such cases, the [one-sided limit](!/calculus/limits/one-sided) is the only meaningful limit.

Context determines interpretation. When a function's domain naturally restricts approach to one side, the one-sided limit serves as the appropriate limit concept at that boundary.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Relationship to Derivatives`,
    content: `
The derivative of $f$ at $x = a$ is defined as a two-sided limit:

@academic[formula_callout:Relationship to Derivatives
$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$]@

@academic[pitfall,aside:true,width:35%:Mistaking continuity for differentiability
Calling $|x|$ differentiable at $0$ because $\\lim_{x \\to 0} |x| = 0 = f(0)$ only checks continuity. The quotient $\\frac{|h|}{h}$ is $1$ for $h > 0$ and $-1$ for $h < 0$, so $f'(0)$ does not exist.
[Read more](!#pitfalls)]@

The variable $h$ approaches $0$ from both positive and negative values. Positive $h$ corresponds to approaching from the right; negative $h$ corresponds to approaching from the left. Differentiability requires the same rate of change from both directions.

If only one direction yields a limit, we obtain a one-sided derivative. A function can have a left derivative and a right derivative that differ, in which case the two-sided derivative does not exist at that point.

@academic[punchline:A derivative is a two-sided limit, so at a corner, where the slopes from the two sides differ, it does not exist.]@
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Summary: Where Two-Sided Limits Appear in Calculus`,
    content: `
The two-sided limit is the default notion of approach in calculus, and that default carries weight: most of the key definitions in the subject are stated as two-sided limits. The table below collects three settings where the two-sided form is structurally required, plus the one common exception — a domain boundary, where two-sided approach isn&apos;t even available. In every case, the requirement that the function agree from both sides isn&apos;t decorative; it&apos;s what makes the underlying definition well-posed.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Common Pitfalls`,
    content: `Five mistakes account for most wrong answers with two-sided limits. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Checking only one side**

To find $\\lim_{x \\to a} f(x)$, only one direction is examined, usually the piece of the formula that holds at $x = a$, and its value is reported as the limit. The other side is never computed, so a disagreement goes unnoticed.

Wrong working: for $f(x) = x^2$ when $x < 1$ and $f(x) = 2x$ when $x \\geq 1$,
$$\\lim_{x \\to 1^+} 2x = 2, \\quad \\text{so} \\quad \\lim_{x \\to 1} f(x) = 2$$

Right working: compute both sides and compare them.
$$\\lim_{x \\to 1^-} x^2 = 1, \\qquad \\lim_{x \\to 1^+} 2x = 2$$
Since $1 \\neq 2$, the two-sided limit does not exist.

Why it happens: for continuous functions one side always gives the right answer, so the habit of checking a single direction works until the first piecewise function.

How to check: evaluate the function on both sides of the point. Here $f(0.99) = 0.9801$ and $f(1.01) = 2.02$; values that close in on two different numbers mean there is no limit.

**Reading the limit off the dot**

When a graph has a displaced point, the height of the filled dot at $x = a$ is taken as the limit, instead of the height the curve approaches.

Wrong working: for $f(x) = x + 1$ when $x \\neq 2$ and $f(2) = 5$, the graph shows $f(2) = 5$, so $\\lim_{x \\to 2} f(x) = 5$.

Right working: the limit uses only values with $x \\neq 2$, where $f(x) = x + 1$.
$$\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} (x + 1) = 3$$
The value $f(2) = 5$ plays no part.

Why it happens: for most functions met early on, the limit and the value are the same number, so the two are treated as one thing.

How to check: read values near $a$, not at $a$. Here $f(1.99) = 2.99$ and $f(2.01) = 3.01$, both close to $3$. A limit that differs from $f(a)$ simply means the function is not [continuous](!/calculus/limits/continuity) there.

**Writing the limit as infinity**

Near a vertical asymptote the values grow without bound, and the two-sided limit is written as $\\infty$ without checking the sign on each side.

Wrong working: dividing by a number close to $0$ gives a huge number, so
$$\\lim_{x \\to 2} \\frac{1}{x - 2} = \\infty$$

Right working: take the sides separately. For $x < 2$ the denominator is a small negative number, for $x > 2$ a small positive one.
$$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty, \\qquad \\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$
The sides head in opposite directions, so the two-sided limit does not exist, not even as an infinite limit.

Why it happens: the rule that a tiny denominator gives a huge value is remembered for the size only, and the sign of the denominator is lost.

How to check: substitute one value on each side. $x = 1.99$ gives $-100$ and $x = 2.01$ gives $100$. Writing $= \\infty$ for a two-sided limit is correct only when both sides go to $+\\infty$, as for $\\frac{1}{(x - 2)^2}$ at $x = 2$.

**Stopping at 0/0**

Direct substitution produces $\\frac{0}{0}$, and that result is taken as the answer: the limit is declared undefined, nonexistent, or equal to $0$.

Wrong working:
$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\frac{9 - 9}{3 - 3} = \\frac{0}{0}, \\quad \\text{so the limit does not exist}$$

Right working: factor the numerator and cancel, which is allowed because $x \\neq 3$ throughout.
$$\\frac{x^2 - 9}{x - 3} = \\frac{(x - 3)(x + 3)}{x - 3} = x + 3 \\quad (x \\neq 3), \\qquad \\lim_{x \\to 3} (x + 3) = 6$$

Why it happens: substitution is the first tool learned, and $\\frac{0}{0}$ looks like a final result. It only says that the function has no value at $x = 3$, which a limit never needed.

How to check: evaluate near the point. $x = 2.99$ gives $5.99$ and $x = 3.01$ gives $6.01$, both close to $6$.

**Mistaking continuity for differentiability**

A function whose two-sided limit at $a$ equals $f(a)$ is continuous there, and that is taken as proof that the derivative at $a$ exists too.

Wrong working: $\\lim_{x \\to 0} |x| = 0 = f(0)$, so $|x|$ is continuous at $0$ and therefore differentiable at $0$.

Right working: the derivative is its own two-sided limit, of the difference quotient.
$$\\frac{f(0 + h) - f(0)}{h} = \\frac{|h|}{h} = \\begin{cases} 1 & h > 0 \\\\ -1 & h < 0 \\end{cases}$$
The one-sided limits are $1$ and $-1$. They differ, so $f'(0)$ does not exist, although $|x|$ is continuous at $0$.

Why it happens: both ideas are two-sided limits at the same point, and every differentiable function is continuous, so the reverse direction feels true as well.

How to check: at a suspected corner, compute the slope from each side. For $|x|$ the slope is $-1$ on the left and $1$ on the right; any mismatch means no derivative.
`,
    before: ``,
    after: ``,
    link: ``
  }
};



const introContent = {
   id:"intro",

  title: `Both Directions at Once`,
  content: `
When we write the limit notation without any superscript—just $x \\to a$—we demand that the function approach the same value from both sides. This is the two-sided limit, the default meaning of the word "limit" in calculus.

The formal statement

@academic[formula_callout:Summary: Where Two-Sided Limits Appear in Calculus
$$\\lim_{x \\to a} f(x) = L$$]@

requires that $f(x)$ approach $L$ as $x$ approaches $a$ through values both less than and greater than $a$. Neither direction gets special treatment. If the function behaves differently on the left than on the right, no two-sided limit exists.

This requirement is stringent but essential. Derivatives, integrals, and continuity all rely on two-sided limits. A function that approaches different values from different directions exhibits a fundamental asymmetry—a break in behavior that prevents the limit machinery from producing a single answer.
`
};



// FAQ pass: cut all eight. Definition, existence condition, visualization and
// failure modes each have an h2 stating the answer; continuity, evaluating and
// the derivative definition are owned by their dedicated pages. Invented two
// from the notation section and reframed the boundary-point question, which is
// the one place the heading names a topic without answering the yes/no.
const faqQuestions = {
  obj1: {
    question: "What does DNE mean in calculus?",
    answer: "DNE stands for “does not exist” — a verdict about a limit, not a value the limit takes. Once a limit is DNE you cannot compute with it or set it equal to anything. It is also independent of whether f(a) is defined: sin(x)/x has no value at 0 yet its limit exists, while the floor function has a value at every integer but no limit there.",
    sectionId: "notation"
  },
  obj2: {
    question: "In a limit, does x ever actually equal a?",
    answer: "No. The condition 0 < |x − a| holds the whole way, so x stays strictly away from a while getting arbitrarily close to it. The arrow describes an approach, not an equality in motion. Reading x → a as an instruction to set x = a is precisely the substitution error the limit concept exists to avoid, and it is why a limit can exist where the function has no value.",
    sectionId: "notation"
  },
  obj3: {
    question: "Can a two-sided limit exist at the endpoint of a domain?",
    answer: "Not in the full two-sided sense. At a domain endpoint only one direction of approach is available, so the two-sided limit is unavailable there while the one-sided limit remains perfectly meaningful. For √x at 0 nothing lies to the left, so the right-hand limit is the appropriate concept. See [one-sided limits](!/calculus/limits/one-sided) for that treatment.",
    sectionId: "7"
  }
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Two-Sided Limits",
    "description": "Learn two-sided limits: definition, existence conditions requiring equal one-sided limits, evaluation techniques, failure modes, and connection to derivatives.",
    "url": "https://www.learnmathclass.com/calculus/limits/two-sided",
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
      "name": "Two-Sided Limits"
    },
    "teaches": [
      "Definition of two-sided limits",
      "Existence condition: both one-sided limits must be equal",
      "Visualizing approach from both directions",
      "Failure modes: jump discontinuity, infinite disagreement, oscillation",
      "Evaluating limits with direct substitution and algebraic techniques",
      "Connection between two-sided limits and derivatives",
      "Where two-sided limits appear across calculus"
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
        "name": "Two-Sided Limits",
        "item": "https://www.learnmathclass.com/calculus/limits/two-sided"
      }
    ]
  }
}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpApproachNotArrival = { kind: 'pieces', svgTitle: 'f(x) = x^2 except f(1) = 3: both sides approach height 1 at x = 1, so the limit is 1 though f(1) = 3', xRange: [-0.5, 2.5], yRange: [-0.5, 4.5],
    pieces: [
      { fn: (x) => x * x, from: -0.5, to: 1, ends: [null, 'open'], color: 'f' },
      { fn: (x) => x * x, from: 1, to: 2.1, ends: ['open', null], color: 'f', label: { text: 'y = x² (x ≠ 1)', x: 1.75, y: 3.06, pos: 'se' } },
      { fn: () => 3, from: 1, to: 1, ends: ['closed', 'closed'], color: 'r' },
    ],
    vlines: [{ x: 1 }],
    notes: [{ x: 1.08, y: 3.0, text: 'f(1) = 3', pos: 'e', color: 'r' }, { x: 1.08, y: 0.75, text: 'limit = 1 from both sides', pos: 'e', color: 'f' }, { x: 0.08, y: 4.2, text: 'limit ignores f(1)', pos: 'e', color: 'r' }],
    caption: 'The limit follows the approach, not the plotted point at x = 1' };
  const demoUnits = {
    approach: demoUnitFrame({
      svg: functionLimitDiagrams.continuous,
      caption: 'x&#178; at x = 1: both probes converge on 1',
      text: 'The left probe at 0.5 reads 0.25 and the right one at 1.5 reads 2.25, and as both move toward 1 the readings meet at 1: the two traces of the section converge to the same height, so the two-sided limit exists and equals f(1). Drag the probes in from both sides on the',
      href: '/calculus/visual-tools/limit',
      linkText: 'limit explorer',
    }),
    fail: demoUnitFrame({
      svg: functionLimitDiagrams.jump,
      caption: 'Step at x = 0: the two traces end at different heights',
      text: 'Traced from the left the function heads to 0, from the right to 1: two well-defined one-sided limits that disagree, so the two-sided limit does not exist. This is the jump case of the section; the infinite and oscillating cases fail for different reasons. Watch the two probes refuse to meet on the',
      href: '/calculus/visual-tools/limit',
      linkText: 'limit explorer',
    }),
    approachNotArrival: demoUnitFrame({
      svg: renderFunctionPlotV4(fpApproachNotArrival),
      caption: 'Approach, not arrival',
      text: 'A function equal to x&#178; everywhere except at x = 1, where the value is moved up to f(1) = 3 (the amber dot). Tracing the curve toward x = 1 from the left, the height heads to 1; tracing from the right, it also heads to 1, toward the open circle. Both traces agree, so the two-sided limit is 1. The plotted point at height 3 plays no part: the limit depends only on the approach.',
    }),
  };

  const twoSidedFailTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Three ways a two-sided limit fails',
    preface: 'A two-sided limit exists only when both one-sided limits exist and agree. It fails in three distinct ways.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Check each side separately',
    conclusion: 'Compute the left and right limits on their own first; the failure type is visible as soon as you compare them. See [one-sided limits](!/calculus/limits/one-sided).',
    root: { name: 'When a two-sided limit fails', sub: '3 ways' },
    children: [
      { id: 'jump', name: 'Jump', items: [ { label: 'One-sided limits', text: 'finite but different' }, { label: 'Example', text: 'a piecewise function: 4 on one side, 2 on the other' } ] },
      { id: 'inf', name: 'Infinite disagreement', items: [ { label: 'One-sided limits', text: '$+\\infty$ on one side, $-\\infty$ on the other' }, { label: 'Example', text: '$1/(x - 2)$ at $x = 2$' } ] },
      { id: 'osc', name: 'Oscillation', items: [ { label: 'One-sided limits', text: 'at least one never settles' } ] },
    ],
  };

return {
  props: {
    twoSidedFailTree,
    demoUnits,
    sectionsContent,
    introContent,
    obj4Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Two-Sided Limits: Definition & Existence | Learn Math Class",
      description: "Learn two-sided limits: definition, existence conditions requiring equal one-sided limits, evaluation techniques, failure modes, and connection to derivatives.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/two-sided",
      name: "Two-Sided Limits"
    },
  }
}
   }


 export default function TwoSidedPage({twoSidedFailTree, seoData, sectionsContent, introContent, obj4Table, summaryTable, faqQuestions, schemas, demoUnits}) {

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
                  <div key={'unit-approach'} dangerouslySetInnerHTML={{ __html: demoUnits.approach }} />,
          `The picture is the definition: one target reached from two directions.`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key={'unit-approachNotArrival'} dangerouslySetInnerHTML={{ __html: demoUnits.approachNotArrival }} />,
          `If f(1) were moved back to 1, the limit would not change; only continuity at 1 would be restored.`,
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
                  <div key={'unit-fail'} dangerouslySetInnerHTML={{ __html: demoUnits.fail }} />,
          `In every failure mode the two traces either disagree, run away, or never settle.`,
          <DiagramFrame
            key={'obj4-diagram'}
            id="two-sided-limit-failures-tree"
            title="Three ways a two-sided limit fails"
            source="/calculus/limits/two-sided"
          >
            <TopDownTree data={twoSidedFailTree} />
          </DiagramFrame>,
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
        title:`Two-Sided Limits FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Two-Sided Limits</h1>
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