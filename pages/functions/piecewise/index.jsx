// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import NotationSection from '@/app/components/page-components/content-components/NotationSection'
// import { tableHeaders } from '@/app/styles/theme'


// export async function getStaticProps(){

//   const keyWords=[
//     'piecewise functions',
//     'piecewise defined function',
//     'graphing piecewise functions',
//     'evaluating piecewise functions',
//     'piecewise notation',
//     'step functions',
//     'absolute value piecewise',
//     'piecewise domain',
//     'piecewise continuity',
//     'piecewise function examples',
//     'writing piecewise functions',
//     'piecewise function range',
//     'floor function',
//     'piecewise real world applications'
//   ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj7 — comparison: continuity test on a continuous case vs a discontinuous case
//   const obj7Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Function and boundary</th>
//       <th style="${tableHeaders.comparison} text-align: center;">Left limit (x → c⁻)</th>
//       <th style="${tableHeaders.comparison} text-align: center;">Right limit (x → c⁺)</th>
//       <th style="${tableHeaders.comparison} text-align: center;">f(c)</th>
//       <th style="${tableHeaders.comparison} text-align: center;">Continuous at c?</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x² (x ≤ 2), 4x − 4 (x &gt; 2); at c = 2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">x + 1 (x &lt; 3), 2x − 3 (x ≥ 3); at c = 3</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">4</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">3</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">3</td>
//       <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj9 — comparison: floor vs ceiling
//   const obj9Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Function</th>
//       <th style="${tableHeaders.comparison}">Definition</th>
//       <th style="${tableHeaders.comparison}">Segment shape</th>
//       <th style="${tableHeaders.comparison}">Examples</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Floor ⌊x⌋</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">greatest integer ≤ x</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal segment on [n, n+1) at height n — closed left, open right</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">⌊2.7⌋ = 2, ⌊−1.3⌋ = −2, ⌊5⌋ = 5</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Ceiling ⌈x⌉</td>
//       <td style="padding: 12px 15px; color: #34495e;">least integer ≥ x</td>
//       <td style="padding: 12px 15px; color: #34495e;">horizontal segment on (n−1, n] at height n — open left, closed right</td>
//       <td style="padding: 12px 15px; color: #34495e;">⌈2.7⌉ = 3, ⌈−1.3⌉ = −1, ⌈5⌉ = 5</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj10 — aggregation: real-world piecewise applications
//   const obj10Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Situation</th>
//       <th style="${tableHeaders.aggregation}">Threshold(s)</th>
//       <th style="${tableHeaders.aggregation}">Piecewise structure</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Tax brackets</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">income levels (e.g., $10,000, $40,000)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">tax rate increases at each bracket boundary; pieces are continuous (rates align at thresholds)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Shipping costs</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">weight bands (under 1 lb, 1–5 lb, over 5 lb)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">flat fee for first band, then per-unit surcharge added above</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Utility rates</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">usage tier (e.g., 500 kWh)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one rate up to the tier, a higher rate beyond</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Parking fees</td>
//       <td style="padding: 12px 15px; color: #34495e;">time periods (first hour, next two, beyond)</td>
//       <td style="padding: 12px 15px; color: #34495e;">different rate per time period; often a free or fixed first piece</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj12 — aggregation: six common mistakes
//   const obj12Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Mistake</th>
//       <th style="${tableHeaders.aggregation}">What goes wrong</th>
//       <th style="${tableHeaders.aggregation}">How to avoid it</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Using the wrong piece at a boundary</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">wrong output at boundary inputs</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">check inequality symbols — the piece with ≤ or ≥ owns the boundary</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Overlapping conditions</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function is ambiguous where conditions overlap</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">pair ≤ with &gt;, or &lt; with ≥, so each boundary lives in exactly one piece</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Gaps in conditions</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function undefined on some intervals</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">verify conditions cover the entire intended domain</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Assuming continuity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">misreading behavior at boundaries</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always check that adjacent pieces produce the same value at the boundary</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Forgetting endpoint markers</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">graph is incomplete or misleading</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solid dot for included endpoint, open dot for excluded — for every piece transition</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Evaluating all pieces at one input</td>
//       <td style="padding: 12px 15px; color: #34495e;">wrong answer or confusion about which output applies</td>
//       <td style="padding: 12px 15px; color: #34495e;">only the piece whose condition the input satisfies should be used</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj13 — summary capstone: workflow for working with a piecewise function
//   const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Task</th>
//       <th style="${tableHeaders.summary}">What to do</th>
//       <th style="${tableHeaders.summary}">Watch out for</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Evaluate at a specific input</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">identify which condition the input satisfies; apply that formula only</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">boundary points — the inequality symbols decide which piece owns the boundary</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Graph the function</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">graph each piece on its interval and combine</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use solid dots for included endpoints, open dots for excluded</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Find the domain</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">take the union of the intervals stated by the conditions</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">also check each formula&apos;s natural restrictions (denominators, square roots, logs)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Find the range</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">find the outputs of each piece on its interval, then take the union</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">gaps in the range can appear if no piece covers some y-values</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Check continuity at a boundary c</td>
//       <td style="padding: 12px 15px; color: #34495e;">compute left limit, right limit, and f(c)</td>
//       <td style="padding: 12px 15px; color: #34495e;">all three must agree — any mismatch is a discontinuity</td>
//     </tr>
//   </tbody>
// </table>
// `


//   const sectionsContent = {

//     obj0 : {
//   title: `Key Terms`,
//   content: `
// ## Core
 
// • [Piecewise Function](!/functions/definitions#piecewise_function) — multiple formulas, each governing a different part of the domain
// • [Domain](!/functions/definitions#domain) — the union of all intervals covered by the pieces
// • [Range](!/functions/definitions#range) — the union of each piece's outputs on its interval
 
// ## Related Types
 
// • [Absolute Value Function](!/functions/definitions#absolute_value_function) — the most familiar piecewise function, with two linear pieces meeting at a vertex
// • [Constant Function](!/functions/definitions#constant_function) — each piece of a step function is constant
// `,
//   before: ``,
//   after: `
 
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
//   link: '',
// },

//   obj1: {
//     title: `What is a Piecewise Function`,
//     content: `A piecewise function is defined by multiple formulas, each applying to a different part of the [domain](!/functions/domain). Rather than one rule governing all inputs, separate rules govern separate intervals.

// The function remains a function — each input still produces exactly one output. But which formula produces that output depends on where the input falls.

// A simple example:

// $$f(x) = \\begin{cases} x + 1 & \\text{if } x < 0 \\\\ x^2 & \\text{if } x \\geq 0 \\end{cases}$$

// For negative inputs, use $x + 1$. For non-negative inputs, use $x^2$. At $x = -3$, the output is $-3 + 1 = -2$. At $x = 2$, the output is $2^2 = 4$. At $x = 0$, the boundary, the condition $x \\geq 0$ applies, giving $0^2 = 0$.

// Each piece can be any type of function — linear, quadratic, constant, radical, or otherwise. The pieces join together at boundary points, sometimes connecting smoothly, sometimes jumping abruptly.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   notation: {
//     title: `Piecewise Notation`,
//     lead: `One function, several formulas — held together by a single brace, split apart by a boundary handshake, and drawn with a two-dot code. The grammar rules (each input matches exactly one row) are what make the stack a function at all.`,
//     inherited: `$f(x)$ and evaluation come from [function notation](!/functions/basics#5); the inequality signs and chains in the conditions from [inequality notation](!/algebra/inequalities/linear#notation); the intervals they encode from [domain notation](!/functions/domain#2).`,
//     entries: [
//       {
//         id: 'cases-brace',
//         tex: `$\\begin{cases} 2x & x < 0 \\\\ 5 & x \\geq 0 \\end{cases}$`,
//         read: `f defined by cases`,
//         means: `The single left brace stacks formula–condition rows and means "use the row whose condition holds". No right brace ever closes it — the layout itself, produced by the @[cases]@ environment in [LaTeX](!/latex), is the notation.`,
//         cases: `Rows read "formula, if condition" — two rows or ten, the grammar is identical; the conditions must be mutually exclusive and cover the whole domain, or the stack stops defining a function.`,
//         confusedWith: `Set braces. The same glyph collects members in $\\{2, 5, 7\\}$ — there a brace pair encloses a [finite set](!/functions/range#2); here one unpaired brace selects a row. Twins in shape, strangers in meaning.`,
//       },
//       {
//         id: 'boundary-handshake',
//         tex: `$x < 1$ · $x \\geq 1$`,
//         read: `x below one; x at least one`,
//         means: `The boundary handshake: adjacent conditions split each cut point so it belongs to exactly one row — strict on one side, or-equal on the other. Which row owns the boundary is a decision the inequality symbols record.`,
//         cases: `Compound conditions chain — $1 \\leq x < 4$, the [chained inequality](!/algebra/inequalities/linear#notation) doing interval work inline; at evaluation time the handshake picks the piece, the drill of **Evaluating Piecewise Functions** below.`,
//         confusedWith: `Symmetric inclusion. Writing $x \\leq 1$ and $x \\geq 1$ on adjacent rows double-books the boundary — legal only when both formulas agree there, a silent contradiction when they do not.`,
//       },
//       {
//         id: 'dot-code',
//         tex: `$\\bullet$ · $\\circ$`,
//         read: `solid dot in, open dot out`,
//         means: `The graphical half of the handshake: a solid dot marks an included endpoint, an open circle an excluded one — the number-line code of [domain notation](!/functions/domain#2), promoted to curve endpoints in **Graphing Piecewise Functions** below.`,
//         cases: `At each jump of a discontinuous graph, one solid and one open dot share a vertical line — the picture of exactly-one-row membership; two solid dots stacked vertically draw something that fails to be a function.`,
//         confusedWith: `The composition ring. The open dot on a graph is a hole, not the $\\circ$ of [composition](!/functions/composition#2) — position separates them: one sits on a curve, the other between function names.`,
//       },
//     ],
//     symbolsHref: `/math-symbols/functions`,
//     symbolsLabel: `All function symbols`,
//     parentHref: `/functions`,
//     parentLabel: `Functions`,
//   },

//   obj3: {
//     title: `Evaluating Piecewise Functions`,
//     content: `To evaluate a piecewise function at a specific input:

// Step 1: Determine which condition the input satisfies.

// Step 2: Use the corresponding formula to compute the output.

// Only one piece applies to each input. The other formulas are irrelevant for that evaluation.

// Let $f(x) = \\begin{cases} 3x + 2 & \\text{if } x < 1 \\\\ x^2 - 1 & \\text{if } x \\geq 1 \\end{cases}$

// Find $f(-2)$: Since $-2 < 1$, use $3x + 2$. $f(-2) = 3(-2) + 2 = -4$.

// Find $f(1)$: Since $1 \\geq 1$, use $x^2 - 1$. $f(1) = 1 - 1 = 0$.

// Find $f(4)$: Since $4 \\geq 1$, use $x^2 - 1$. $f(4) = 16 - 1 = 15$.

// Boundary points require attention. The condition that includes the boundary (with $\\leq$ or $\\geq$) determines which formula to use. At $x = 1$ above, the condition $x \\geq 1$ applies, not $x < 1$.

// Errors often occur at boundaries when the wrong piece is selected. Always check the inequality symbols carefully.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Graphing Piecewise Functions`,
//     content: `To [graph](!/functions/graphs) a piecewise function, graph each piece on its designated interval, then combine them.

// Step 1: Identify each piece and its interval.

// Step 2: Graph each piece as if it were defined everywhere, but only draw the portion within its interval.

// Step 3: Mark endpoints appropriately — solid dot for included endpoints, open dot for excluded endpoints.

// For $f(x) = \\begin{cases} x + 3 & \\text{if } x < 1 \\\\ 2x - 1 & \\text{if } x \\geq 1 \\end{cases}$:

// The first piece is a line with slope $1$, drawn for $x < 1$. At $x = 1$, this piece gives $1 + 3 = 4$, but $x = 1$ is excluded, so place an open dot at $(1, 4)$.

// The second piece is a line with slope $2$, drawn for $x \\geq 1$. At $x = 1$, this piece gives $2(1) - 1 = 1$, and $x = 1$ is included, so place a solid dot at $(1, 1)$.

// The graph shows two line segments that do not connect — there is a jump at $x = 1$ from height $1$ to (approaching) height $4$.

// The visual reveals discontinuities. Pieces that connect smoothly indicate continuity at that boundary. Pieces that don't connect indicate a jump.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Domain of Piecewise Functions`,
//     content: `The [domain](!/functions/domain) of a piecewise function is the union of all intervals covered by its pieces.

// If the pieces cover all real numbers without gaps, the domain is $(-\\infty, \\infty)$.

// If the pieces leave gaps, the domain excludes those intervals.

// For $f(x) = \\begin{cases} x^2 & \\text{if } x \\leq -1 \\\\ \\sqrt{x} & \\text{if } x \\geq 0 \\end{cases}$:

// The first piece covers $(-\\infty, -1]$. The second covers $[0, \\infty)$. The interval $(-1, 0)$ is not covered by either piece.

// Domain: $(-\\infty, -1] \\cup [0, \\infty)$.

// Additionally, each piece must be valid on its interval. A piece involving $\\sqrt{x - 3}$ on $[0, 5]$ would require $x \\geq 3$ for the formula to work, potentially reducing the effective domain of that piece to $[3, 5]$.

// The domain is determined by both the stated conditions and the natural restrictions of each formula. Both must be satisfied.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Range of Piecewise Functions`,
//     content: `The [range](!/functions/range) of a piecewise function is the union of the ranges of all pieces, restricted to their respective intervals.

// Each piece contributes outputs from its portion of the domain. The combined range collects all these outputs.

// For $f(x) = \\begin{cases} 2 & \\text{if } x < 0 \\\\ x + 1 & \\text{if } x \\geq 0 \\end{cases}$:

// The first piece is constant at $2$ for all $x < 0$. It contributes $\\{2\\}$ to the range.

// The second piece is linear starting at $x = 0$. At $x = 0$, output is $1$. As $x \\to \\infty$, output $\\to \\infty$. This piece contributes $[1, \\infty)$ to the range.

// Combined range: $\\{2\\} \\cup [1, \\infty) = [1, \\infty)$ (since $2$ is already in $[1, \\infty)$).

// Finding the range may require analyzing each piece separately — finding minima, maxima, and behavior on each interval — then combining results.

// Discontinuities can create gaps in the range if no piece produces certain values, or they can be invisible in the range if different pieces cover those values.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Continuity of Piecewise Functions`,
//     content: `A piecewise function is [continuous](!/functions/properties) at a boundary point if the two pieces meeting there produce the same value. The graph connects without a jump.

// For continuity at $x = c$ where two pieces meet:

// $$\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)$$

// The left piece's limit, the right piece's limit, and the actual value at $c$ must all agree.

// For $f(x) = \\begin{cases} x^2 & \\text{if } x \\leq 2 \\\\ 4x - 4 & \\text{if } x > 2 \\end{cases}$:

// At $x = 2$: Left piece gives $2^2 = 4$. Right piece as $x \\to 2^+$ gives $4(2) - 4 = 4$. Both equal $4$.

// The function is continuous at $x = 2$. The pieces connect.

// For $g(x) = \\begin{cases} x + 1 & \\text{if } x < 3 \\\\ 2x - 3 & \\text{if } x \\geq 3 \\end{cases}$:

// At $x = 3$: Left piece as $x \\to 3^-$ gives $3 + 1 = 4$. Right piece gives $2(3) - 3 = 3$.

// The limits differ ($4 \\neq 3$), so the function is discontinuous at $x = 3$. There is a jump.

// The table below collects both cases — the continuous example and the discontinuous example — with the three values that must agree for continuity and the verdict at each boundary.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Absolute Value as Piecewise`,
//     content: `The absolute value function is the most familiar piecewise function:

// $$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

// For non-negative inputs, the output equals the input. For negative inputs, the output equals the negation of the input (making it positive).

// The [graph](!/functions/graphs) is V-shaped with vertex at the origin. The right arm has slope $1$; the left arm has slope $-1$. The pieces meet at $(0, 0)$ and connect continuously — both pieces give $0$ at $x = 0$.

// Transformed absolute value functions shift the V:

// $$f(x) = |x - 3| + 2 = \\begin{cases} (x - 3) + 2 & \\text{if } x \\geq 3 \\\\ -(x - 3) + 2 & \\text{if } x < 3 \\end{cases} = \\begin{cases} x - 1 & \\text{if } x \\geq 3 \\\\ -x + 5 & \\text{if } x < 3 \\end{cases}$$

// The vertex moves to $(3, 2)$.

// Equations involving absolute values often require piecewise analysis. Solving $|x - 2| = 5$ means considering both pieces: $x - 2 = 5$ (giving $x = 7$) and $-(x - 2) = 5$ (giving $x = -3$).`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Step Functions`,
//     content: `Step functions are piecewise functions where each piece is constant. The graph consists of horizontal segments with jumps between them — like a staircase.

// The floor function $\\lfloor x \\rfloor$ returns the greatest integer less than or equal to $x$:

// $$\\lfloor 2.7 \\rfloor = 2, \\quad \\lfloor -1.3 \\rfloor = -2, \\quad \\lfloor 5 \\rfloor = 5$$

// The graph has horizontal segments at each integer height, jumping up at each integer input. The segment at height $n$ covers $[n, n+1)$ — closed on the left, open on the right.

// The ceiling function $\\lceil x \\rceil$ returns the least integer greater than or equal to $x$:

// $$\\lceil 2.7 \\rceil = 3, \\quad \\lceil -1.3 \\rceil = -1, \\quad \\lceil 5 \\rceil = 5$$

// The segments cover $(n-1, n]$ — open on the left, closed on the right.

// Both functions have jump discontinuities at every integer. The [domain](!/functions/domain) is all real numbers; the [range](!/functions/range) is all integers $\\mathbb{Z}$.

// Step functions model situations with discrete jumps: postage rates by weight, tax brackets, rounding rules. The table below pairs the floor and ceiling functions side by side to highlight the small but important differences between them.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj10: {
//     title: `Real-World Applications`,
//     content: `Piecewise functions naturally model situations where rules change at thresholds.

// Tax brackets: Income tax rates increase at certain income levels. Income below $\\$10{,}000$ might be taxed at $10\\%$, income from $\\$10{,}000$ to $\\$40{,}000$ at $20\\%$, and income above $\\$40{,}000$ at $30\\%$.

// $$T(x) = \\begin{cases} 0.10x & \\text{if } x \\leq 10000 \\\\ 1000 + 0.20(x - 10000) & \\text{if } 10000 < x \\leq 40000 \\\\ 7000 + 0.30(x - 40000) & \\text{if } x > 40000 \\end{cases}$$

// Shipping costs: Packages under $1$ pound cost $\\$5$. Packages from $1$ to $5$ pounds cost $\\$5$ plus $\\$2$ per additional pound. Packages over $5$ pounds cost $\\$13$ plus $\\$1.50$ per additional pound.

// Utility rates: Electricity might cost one rate for the first $500$ kWh and a higher rate beyond that threshold.

// Parking fees: First hour free, next two hours at one rate, additional hours at another rate.

// In each case, the rule changes at specific boundaries, and the piecewise function captures this structure mathematically. The table below collects four common application patterns with their threshold structure.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj11: {
//     title: `Writing Piecewise Functions`,
//     content: `Constructing a piecewise function from a description or [graph](!/functions/graphs) requires identifying the pieces and their intervals.

// From a graph:

// Step 1: Identify distinct segments or curves.

// Step 2: Determine the formula for each segment (line, parabola, constant, etc.).

// Step 3: Identify the interval each segment covers, noting open or closed endpoints.

// Step 4: Write the piecewise notation with each formula and its condition.

// From a verbal description:

// Step 1: Identify the thresholds where rules change.

// Step 2: Write the formula for each region between thresholds.

// Step 3: Specify conditions using inequalities.

// Example: "A plumber charges $\\$50$ for the first hour and $\\$30$ for each additional hour."

// Let $C(t)$ be the cost for $t$ hours of work ($t > 0$):

// $$C(t) = \\begin{cases} 50 & \\text{if } 0 < t \\leq 1 \\\\ 50 + 30(t - 1) & \\text{if } t > 1 \\end{cases}$$

// Simplifying the second piece: $50 + 30t - 30 = 30t + 20$.

// $$C(t) = \\begin{cases} 50 & \\text{if } 0 < t \\leq 1 \\\\ 30t + 20 & \\text{if } t > 1 \\end{cases}$$`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj12: {
//     title: `Common Mistakes`,
//     content: `Several errors recur when working with piecewise functions.

// Using the wrong piece at a boundary: At $x = 3$ with conditions $x < 3$ and $x \\geq 3$, the second piece applies, not the first. The inequality symbols determine which piece owns the boundary.

// Overlapping conditions: Writing $x \\leq 2$ and $x \\geq 2$ creates overlap at $x = 2$. Both pieces claim this input, making the function ambiguous. Use $x < 2$ and $x \\geq 2$, or $x \\leq 2$ and $x > 2$.

// Gaps in conditions: Writing $x < 1$ and $x > 3$ leaves $[1, 3]$ undefined. Unless this gap is intentional (limiting the domain), conditions should cover all intended inputs.

// Assuming continuity: Not all piecewise functions are continuous. Checking whether pieces connect at boundaries is essential — do not assume they do.

// Forgetting endpoint markers when graphing: Open and closed dots distinguish included from excluded endpoints. Without them, the graph is incomplete and potentially misleading.

// Evaluating all pieces instead of one: Only the piece whose condition the input satisfies should be used. The other formulas do not apply to that input.

// The table below collects each mistake with the specific problem it causes and the rule of thumb that prevents it.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj13: {
//     title: `Workflow Summary`,
//     content: `Most of the tasks on this page — evaluating a piecewise function at an input, graphing it, finding its domain or range, checking continuity at a boundary — share the same general principle: handle each piece on its own interval, then combine. The table below collects the five core tasks with the procedure for each and the pitfall to watch for, useful as a checklist when working through a new piecewise function from scratch.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

// }

//  const introContent = {
//   id: "intro",
//   title: "Different Rules for Different Regions",
//   content: `Not every function follows a single formula across its entire domain. Tax rates change at income thresholds. Shipping costs jump at weight limits. A ball's height follows one equation while rising and another while falling. These situations demand functions that switch rules depending on where the input lands.

// A piecewise function divides its [domain](!/functions/domain) into intervals, assigning a different formula to each piece. The function is defined everywhere it needs to be, but no single expression covers all cases. Instead, a collection of expressions — each with its own territory — combines to form one coherent function.`
// }



//   const faqQuestions = {
//     q1: {
//       question: "What is a piecewise function?",
//       answer: "A piecewise function is defined by multiple formulas, each applying to a different part of the domain. Rather than one rule governing all inputs, separate rules govern separate intervals. Each input still produces exactly one output, but which formula is used depends on where the input falls."
//     },
//     q2: {
//       question: "How do you evaluate a piecewise function?",
//       answer: "To evaluate a piecewise function, first determine which condition the input satisfies, then use the corresponding formula to compute the output. Only one piece applies to each input — the other formulas are irrelevant for that evaluation. Pay special attention at boundary points, since the inequality symbols determine which piece owns the boundary."
//     },
//     q3: {
//       question: "How do you graph a piecewise function?",
//       answer: "To graph a piecewise function, graph each piece on its designated interval and combine them. Draw each piece only within its specified interval, then mark endpoints with solid dots for included endpoints and open dots for excluded endpoints. The resulting graph may show connected pieces indicating continuity, or gaps and jumps indicating discontinuities."
//     },
//     q4: {
//       question: "What is the domain of a piecewise function?",
//       answer: "The domain of a piecewise function is the union of all intervals covered by its pieces. If the pieces cover all real numbers without gaps, the domain is all real numbers. If pieces leave gaps, those intervals are excluded from the domain. Each piece must also be valid on its interval, accounting for any natural restrictions such as square roots or denominators."
//     },
//     q5: {
//       question: "How is the absolute value function related to piecewise functions?",
//       answer: "The absolute value function is the most familiar piecewise function, defined as x when x is non-negative and -x when x is negative. Its graph is V-shaped with vertex at the origin, and the pieces connect continuously at x = 0. Transformed absolute value functions shift the vertex, and equations involving absolute values often require piecewise analysis to solve."
//     }
//   }

//   const seoData = {
//     title: "Piecewise Functions - Definition, Graphing & Examples",
//     description: "Learn how to define, evaluate, and graph piecewise functions. Step-by-step examples covering notation, continuity, and real-world applications of piecewise-defined functions.",
//     keywords: keyWords.join(", "),
//     url: "/functions/piecewise",
//     name: "Piecewise Functions"
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": seoData.name,
//       "description": seoData.description,
//       "url": `https://www.learnmathclass.com${seoData.url}`,
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class",
//         "url": "https://www.learnmathclass.com"
//       },
//       "teaches": [
//         "What a piecewise function is and how it differs from a standard function",
//         "Piecewise function notation using brace notation and inequality conditions",
//         "How to evaluate piecewise functions at specific input values",
//         "How to graph piecewise functions with correct endpoint markers",
//         "How to determine the domain and range of piecewise functions",
//         "How to analyze continuity of piecewise functions at boundary points"
//       ]
//     },
//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Functions",
//           "item": "https://www.learnmathclass.com/functions"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": seoData.name,
//           "item": `https://www.learnmathclass.com${seoData.url}`
//         }
//       ]
//     },
//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": faqQuestions.q1.question,
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": faqQuestions.q1.answer
//           }
//         },
//         {
//           "@type": "Question",
//           "name": faqQuestions.q2.question,
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": faqQuestions.q2.answer
//           }
//         },
//         {
//           "@type": "Question",
//           "name": faqQuestions.q3.question,
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": faqQuestions.q3.answer
//           }
//         },
//         {
//           "@type": "Question",
//           "name": faqQuestions.q4.question,
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": faqQuestions.q4.answer
//           }
//         },
//         {
//           "@type": "Question",
//           "name": faqQuestions.q5.question,
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": faqQuestions.q5.answer
//           }
//         }
//       ]
//     }
//   }

//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          obj7Table,
//          obj9Table,
//          obj10Table,
//          obj12Table,
//          summaryTable,
//          faqQuestions,
//          schemas,
//           seoData: {
//         title: "Piecewise Functions - Definition, Graphing & Examples",
//         description: "Learn how to define, evaluate, and graph piecewise functions. Step-by-step examples covering notation, continuity, and real-world applications of piecewise-defined functions.",
//         keywords: keyWords.join(", "),
//         url: "/functions/piecewise",
//          name: "Piecewise Functions"
//       },
//        }
//     }
//    }

// export default function PiecewisePage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj7Table,
//   obj9Table,
//   obj10Table,
//   obj12Table,
//   summaryTable,
//   faqQuestions,
//   schemas
// }) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const genericSections=[
//      {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//         ]
//     },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.notation.title,
//         link:``,
//         content:[
//           <NotationSection
//             key={'notation'}
//             title={sectionsContent.notation.title}
//             lead={sectionsContent.notation.lead}
//             inherited={sectionsContent.notation.inherited}
//             entries={sectionsContent.notation.entries}
//             symbolsHref={sectionsContent.notation.symbolsHref}
//             symbolsLabel={sectionsContent.notation.symbolsLabel}
//             parentHref={sectionsContent.notation.parentHref}
//             parentLabel={sectionsContent.notation.parentLabel}
//             theme={'navy'}
//           />,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//           <div
//             key={'obj7-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj7Table }}
//           />,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//           <div
//             key={'obj9-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj9Table }}
//           />,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//           <div
//             key={'obj10-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj10Table }}
//           />,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//           <div
//             key={'obj12-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj12Table }}
//           />,
//         ]
//     },
//     {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//           <div
//             key={'summary-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: summaryTable }}
//           />,
//         ]
//     },

// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />

//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />

//   <meta name="robots" content="index, follow" />

//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify(schemas.learningResource)
//     }}
//   />
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar
//            side='right'
//            // topOffset='65px'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          />
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Piecewise Functions</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"

//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//        <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import functionPiecewiseDiagrams from '@/app/components/functions/piecewise/functionPiecewiseDiagrams'
import renderFunctionPlotV2 from '@/app/utils/illustrations/functions/graphs/functionPlot.v2'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'


export async function getStaticProps(){

  const keyWords=[
    'piecewise functions',
    'piecewise defined function',
    'graphing piecewise functions',
    'evaluating piecewise functions',
    'piecewise notation',
    'step functions',
    'absolute value piecewise',
    'piecewise domain',
    'piecewise continuity',
    'piecewise function examples',
    'writing piecewise functions',
    'piecewise function range',
    'floor function',
    'piecewise real world applications'
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj7 — comparison: continuity test on a continuous case vs a discontinuous case
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Function and boundary</th>
      <th style="${tableHeaders.comparison} text-align: center;">Left limit (x → c⁻)</th>
      <th style="${tableHeaders.comparison} text-align: center;">Right limit (x → c⁺)</th>
      <th style="${tableHeaders.comparison} text-align: center;">f(c)</th>
      <th style="${tableHeaders.comparison} text-align: center;">Continuous at c?</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x² (x ≤ 2), 4x − 4 (x &gt; 2); at c = 2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">x + 1 (x &lt; 3), 2x − 3 (x ≥ 3); at c = 3</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">4</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">3</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">3</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — comparison: floor vs ceiling
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Function</th>
      <th style="${tableHeaders.comparison}">Definition</th>
      <th style="${tableHeaders.comparison}">Segment shape</th>
      <th style="${tableHeaders.comparison}">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Floor ⌊x⌋</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">greatest integer ≤ x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal segment on [n, n+1) at height n — closed left, open right</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">⌊2.7⌋ = 2, ⌊−1.3⌋ = −2, ⌊5⌋ = 5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Ceiling ⌈x⌉</td>
      <td style="padding: 12px 15px; color: #34495e;">least integer ≥ x</td>
      <td style="padding: 12px 15px; color: #34495e;">horizontal segment on (n−1, n] at height n — open left, closed right</td>
      <td style="padding: 12px 15px; color: #34495e;">⌈2.7⌉ = 3, ⌈−1.3⌉ = −1, ⌈5⌉ = 5</td>
    </tr>
  </tbody>
</table>
`

  // obj10 — aggregation: real-world piecewise applications
  const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Situation</th>
      <th style="${tableHeaders.aggregation}">Threshold(s)</th>
      <th style="${tableHeaders.aggregation}">Piecewise structure</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Tax brackets</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">income levels (e.g., $10,000, $40,000)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">tax rate increases at each bracket boundary; pieces are continuous (rates align at thresholds)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Shipping costs</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">weight bands (under 1 lb, 1–5 lb, over 5 lb)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">flat fee for first band, then per-unit surcharge added above</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Utility rates</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">usage tier (e.g., 500 kWh)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one rate up to the tier, a higher rate beyond</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Parking fees</td>
      <td style="padding: 12px 15px; color: #34495e;">time periods (first hour, next two, beyond)</td>
      <td style="padding: 12px 15px; color: #34495e;">different rate per time period; often a free or fixed first piece</td>
    </tr>
  </tbody>
</table>
`

  // obj12 — aggregation: six common mistakes
  const obj12Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Mistake</th>
      <th style="${tableHeaders.aggregation}">What goes wrong</th>
      <th style="${tableHeaders.aggregation}">How to avoid it</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Using the wrong piece at a boundary</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">wrong output at boundary inputs</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">check inequality symbols — the piece with ≤ or ≥ owns the boundary</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Overlapping conditions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function is ambiguous where conditions overlap</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">pair ≤ with &gt;, or &lt; with ≥, so each boundary lives in exactly one piece</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Gaps in conditions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function undefined on some intervals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">verify conditions cover the entire intended domain</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Assuming continuity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">misreading behavior at boundaries</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always check that adjacent pieces produce the same value at the boundary</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Forgetting endpoint markers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">graph is incomplete or misleading</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solid dot for included endpoint, open dot for excluded — for every piece transition</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Evaluating all pieces at one input</td>
      <td style="padding: 12px 15px; color: #34495e;">wrong answer or confusion about which output applies</td>
      <td style="padding: 12px 15px; color: #34495e;">only the piece whose condition the input satisfies should be used</td>
    </tr>
  </tbody>
</table>
`

  // obj13 — summary capstone: workflow for working with a piecewise function
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Task</th>
      <th style="${tableHeaders.summary}">What to do</th>
      <th style="${tableHeaders.summary}">Watch out for</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Evaluate at a specific input</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">identify which condition the input satisfies; apply that formula only</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">boundary points — the inequality symbols decide which piece owns the boundary</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Graph the function</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">graph each piece on its interval and combine</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use solid dots for included endpoints, open dots for excluded</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Find the domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">take the union of the intervals stated by the conditions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">also check each formula&apos;s natural restrictions (denominators, square roots, logs)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Find the range</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">find the outputs of each piece on its interval, then take the union</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">gaps in the range can appear if no piece covers some y-values</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Check continuity at a boundary c</td>
      <td style="padding: 12px 15px; color: #34495e;">compute left limit, right limit, and f(c)</td>
      <td style="padding: 12px 15px; color: #34495e;">all three must agree — any mismatch is a discontinuity</td>
    </tr>
  </tbody>
</table>
`


  const sectionsContent = {

    obj0 : {
  title: `Key Terms`,
  content: `
## Core
 
• [Piecewise Function](!/functions/definitions#piecewise_function) — multiple formulas, each governing a different part of the domain
• [Domain](!/functions/definitions#domain) — the union of all intervals covered by the pieces
• [Range](!/functions/definitions#range) — the union of each piece's outputs on its interval
 
## Related Types
 
• [Absolute Value Function](!/functions/definitions#absolute_value_function) — the most familiar piecewise function, with two linear pieces meeting at a vertex
• [Constant Function](!/functions/definitions#constant_function) — each piece of a step function is constant
`,
  before: ``,
  after: `
 
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
  link: '',
},

  obj1: {
    title: `What is a Piecewise Function`,
    content: `A piecewise function is defined by multiple formulas, each applying to a different part of the [domain](!/functions/domain). Rather than one rule governing all inputs, separate rules govern separate intervals.

The function remains a function — each input still produces exactly one output. But which formula produces that output depends on where the input falls.

A simple example:

$$f(x) = \\begin{cases} x + 1 & \\text{if } x < 0 \\\\ x^2 & \\text{if } x \\geq 0 \\end{cases}$$

For negative inputs, use $x + 1$. For non-negative inputs, use $x^2$. At $x = -3$, the output is $-3 + 1 = -2$. At $x = 2$, the output is $2^2 = 4$. At $x = 0$, the boundary, the condition $x \\geq 0$ applies, giving $0^2 = 0$.

Each piece can be any type of function — linear, quadratic, constant, radical, or otherwise. The pieces join together at boundary points, sometimes connecting smoothly, sometimes jumping abruptly.`,
    before: ``,
    after: ``,
    link: '',
  },

  notation: {
    title: `Piecewise Notation`,
    lead: `One function, several formulas — held together by a single brace, split apart by a boundary handshake, and drawn with a two-dot code. The grammar rules (each input matches exactly one row) are what make the stack a function at all.`,
    inherited: `$f(x)$ and evaluation come from [function notation](!/functions/basics#5); the inequality signs and chains in the conditions from [inequality notation](!/algebra/inequalities/linear#notation); the intervals they encode from [domain notation](!/functions/domain#2).`,
    entries: [
      {
        id: 'cases-brace',
        tex: `$\\begin{cases} 2x & x < 0 \\\\ 5 & x \\geq 0 \\end{cases}$`,
        read: `f defined by cases`,
        means: `The single left brace stacks formula–condition rows and means "use the row whose condition holds". No right brace ever closes it — the layout itself, produced by the @[cases]@ environment in [LaTeX](!/latex), is the notation.`,
        cases: `Rows read "formula, if condition" — two rows or ten, the grammar is identical; the conditions must be mutually exclusive and cover the whole domain, or the stack stops defining a function.`,
        confusedWith: `Set braces. The same glyph collects members in $\\{2, 5, 7\\}$ — there a brace pair encloses a [finite set](!/functions/range#2); here one unpaired brace selects a row. Twins in shape, strangers in meaning.`,
      },
      {
        id: 'boundary-handshake',
        tex: `$x < 1$ · $x \\geq 1$`,
        read: `x below one; x at least one`,
        means: `The boundary handshake: adjacent conditions split each cut point so it belongs to exactly one row — strict on one side, or-equal on the other. Which row owns the boundary is a decision the inequality symbols record.`,
        cases: `Compound conditions chain — $1 \\leq x < 4$, the [chained inequality](!/algebra/inequalities/linear#notation) doing interval work inline; at evaluation time the handshake picks the piece, the drill of **Evaluating Piecewise Functions** below.`,
        confusedWith: `Symmetric inclusion. Writing $x \\leq 1$ and $x \\geq 1$ on adjacent rows double-books the boundary — legal only when both formulas agree there, a silent contradiction when they do not.`,
      },
      {
        id: 'dot-code',
        tex: `$\\bullet$ · $\\circ$`,
        read: `solid dot in, open dot out`,
        means: `The graphical half of the handshake: a solid dot marks an included endpoint, an open circle an excluded one — the number-line code of [domain notation](!/functions/domain#2), promoted to curve endpoints in **Graphing Piecewise Functions** below.`,
        cases: `At each jump of a discontinuous graph, one solid and one open dot share a vertical line — the picture of exactly-one-row membership; two solid dots stacked vertically draw something that fails to be a function.`,
        confusedWith: `The composition ring. The open dot on a graph is a hole, not the $\\circ$ of [composition](!/functions/composition#2) — position separates them: one sits on a curve, the other between function names.`,
      },
    ],
    symbolsHref: `/math-symbols/functions`,
    symbolsLabel: `All function symbols`,
    parentHref: `/functions`,
    parentLabel: `Functions`,
  },

  obj3: {
    title: `Evaluating Piecewise Functions`,
    content: `To evaluate a piecewise function at a specific input:

Step 1: Determine which condition the input satisfies.

Step 2: Use the corresponding formula to compute the output.

Only one piece applies to each input. The other formulas are irrelevant for that evaluation.

Let $f(x) = \\begin{cases} 3x + 2 & \\text{if } x < 1 \\\\ x^2 - 1 & \\text{if } x \\geq 1 \\end{cases}$

Find $f(-2)$: Since $-2 < 1$, use $3x + 2$. $f(-2) = 3(-2) + 2 = -4$.

Find $f(1)$: Since $1 \\geq 1$, use $x^2 - 1$. $f(1) = 1 - 1 = 0$.

Find $f(4)$: Since $4 \\geq 1$, use $x^2 - 1$. $f(4) = 16 - 1 = 15$.

Boundary points require attention. The condition that includes the boundary (with $\\leq$ or $\\geq$) determines which formula to use. At $x = 1$ above, the condition $x \\geq 1$ applies, not $x < 1$.

Errors often occur at boundaries when the wrong piece is selected. Always check the inequality symbols carefully.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Graphing Piecewise Functions`,
    content: `To [graph](!/functions/graphs) a piecewise function, graph each piece on its designated interval, then combine them.

Step 1: Identify each piece and its interval.

Step 2: Graph each piece as if it were defined everywhere, but only draw the portion within its interval.

Step 3: Mark endpoints appropriately — solid dot for included endpoints, open dot for excluded endpoints.

For $f(x) = \\begin{cases} x + 3 & \\text{if } x < 1 \\\\ 2x - 1 & \\text{if } x \\geq 1 \\end{cases}$:

The first piece is a line with slope $1$, drawn for $x < 1$. At $x = 1$, this piece gives $1 + 3 = 4$, but $x = 1$ is excluded, so place an open dot at $(1, 4)$.

The second piece is a line with slope $2$, drawn for $x \\geq 1$. At $x = 1$, this piece gives $2(1) - 1 = 1$, and $x = 1$ is included, so place a solid dot at $(1, 1)$.

The graph shows two line segments that do not connect — there is a jump at $x = 1$ from height $1$ to (approaching) height $4$.

The visual reveals discontinuities. Pieces that connect smoothly indicate continuity at that boundary. Pieces that don't connect indicate a jump.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Domain of Piecewise Functions`,
    content: `The [domain](!/functions/domain) of a piecewise function is the union of all intervals covered by its pieces.

If the pieces cover all real numbers without gaps, the domain is $(-\\infty, \\infty)$.

If the pieces leave gaps, the domain excludes those intervals.

For $f(x) = \\begin{cases} x^2 & \\text{if } x \\leq -1 \\\\ \\sqrt{x} & \\text{if } x \\geq 0 \\end{cases}$:

The first piece covers $(-\\infty, -1]$. The second covers $[0, \\infty)$. The interval $(-1, 0)$ is not covered by either piece.

Domain: $(-\\infty, -1] \\cup [0, \\infty)$.

Additionally, each piece must be valid on its interval. A piece involving $\\sqrt{x - 3}$ on $[0, 5]$ would require $x \\geq 3$ for the formula to work, potentially reducing the effective domain of that piece to $[3, 5]$.

The domain is determined by both the stated conditions and the natural restrictions of each formula. Both must be satisfied.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Range of Piecewise Functions`,
    content: `The [range](!/functions/range) of a piecewise function is the union of the ranges of all pieces, restricted to their respective intervals.

Each piece contributes outputs from its portion of the domain. The combined range collects all these outputs.

For $f(x) = \\begin{cases} 2 & \\text{if } x < 0 \\\\ x + 1 & \\text{if } x \\geq 0 \\end{cases}$:

The first piece is constant at $2$ for all $x < 0$. It contributes $\\{2\\}$ to the range.

The second piece is linear starting at $x = 0$. At $x = 0$, output is $1$. As $x \\to \\infty$, output $\\to \\infty$. This piece contributes $[1, \\infty)$ to the range.

Combined range: $\\{2\\} \\cup [1, \\infty) = [1, \\infty)$ (since $2$ is already in $[1, \\infty)$).

Finding the range may require analyzing each piece separately — finding minima, maxima, and behavior on each interval — then combining results.

Discontinuities can create gaps in the range if no piece produces certain values, or they can be invisible in the range if different pieces cover those values.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Continuity of Piecewise Functions`,
    content: `A piecewise function is [continuous](!/functions/properties) at a boundary point if the two pieces meeting there produce the same value. The graph connects without a jump.

For continuity at $x = c$ where two pieces meet:

$$\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)$$

The left piece's limit, the right piece's limit, and the actual value at $c$ must all agree.

For $f(x) = \\begin{cases} x^2 & \\text{if } x \\leq 2 \\\\ 4x - 4 & \\text{if } x > 2 \\end{cases}$:

At $x = 2$: Left piece gives $2^2 = 4$. Right piece as $x \\to 2^+$ gives $4(2) - 4 = 4$. Both equal $4$.

The function is continuous at $x = 2$. The pieces connect.

For $g(x) = \\begin{cases} x + 1 & \\text{if } x < 3 \\\\ 2x - 3 & \\text{if } x \\geq 3 \\end{cases}$:

At $x = 3$: Left piece as $x \\to 3^-$ gives $3 + 1 = 4$. Right piece gives $2(3) - 3 = 3$.

The limits differ ($4 \\neq 3$), so the function is discontinuous at $x = 3$. There is a jump.

The table below collects both cases — the continuous example and the discontinuous example — with the three values that must agree for continuity and the verdict at each boundary.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Absolute Value as Piecewise`,
    content: `The absolute value function is the most familiar piecewise function:

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

For non-negative inputs, the output equals the input. For negative inputs, the output equals the negation of the input (making it positive).

The [graph](!/functions/graphs) is V-shaped with vertex at the origin. The right arm has slope $1$; the left arm has slope $-1$. The pieces meet at $(0, 0)$ and connect continuously — both pieces give $0$ at $x = 0$.

Transformed absolute value functions shift the V:

$$f(x) = |x - 3| + 2 = \\begin{cases} (x - 3) + 2 & \\text{if } x \\geq 3 \\\\ -(x - 3) + 2 & \\text{if } x < 3 \\end{cases} = \\begin{cases} x - 1 & \\text{if } x \\geq 3 \\\\ -x + 5 & \\text{if } x < 3 \\end{cases}$$

The vertex moves to $(3, 2)$.

Equations involving absolute values often require piecewise analysis. Solving $|x - 2| = 5$ means considering both pieces: $x - 2 = 5$ (giving $x = 7$) and $-(x - 2) = 5$ (giving $x = -3$).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Step Functions`,
    content: `Step functions are piecewise functions where each piece is constant. The graph consists of horizontal segments with jumps between them — like a staircase.

The floor function $\\lfloor x \\rfloor$ returns the greatest integer less than or equal to $x$:

$$\\lfloor 2.7 \\rfloor = 2, \\quad \\lfloor -1.3 \\rfloor = -2, \\quad \\lfloor 5 \\rfloor = 5$$

The graph has horizontal segments at each integer height, jumping up at each integer input. The segment at height $n$ covers $[n, n+1)$ — closed on the left, open on the right.

The ceiling function $\\lceil x \\rceil$ returns the least integer greater than or equal to $x$:

$$\\lceil 2.7 \\rceil = 3, \\quad \\lceil -1.3 \\rceil = -1, \\quad \\lceil 5 \\rceil = 5$$

The segments cover $(n-1, n]$ — open on the left, closed on the right.

Both functions have jump discontinuities at every integer. The [domain](!/functions/domain) is all real numbers; the [range](!/functions/range) is all integers $\\mathbb{Z}$.

Step functions model situations with discrete jumps: postage rates by weight, tax brackets, rounding rules. The table below pairs the floor and ceiling functions side by side to highlight the small but important differences between them.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Real-World Applications`,
    content: `Piecewise functions naturally model situations where rules change at thresholds.

Tax brackets: Income tax rates increase at certain income levels. Income below $\\$10{,}000$ might be taxed at $10\\%$, income from $\\$10{,}000$ to $\\$40{,}000$ at $20\\%$, and income above $\\$40{,}000$ at $30\\%$.

$$T(x) = \\begin{cases} 0.10x & \\text{if } x \\leq 10000 \\\\ 1000 + 0.20(x - 10000) & \\text{if } 10000 < x \\leq 40000 \\\\ 7000 + 0.30(x - 40000) & \\text{if } x > 40000 \\end{cases}$$

Shipping costs: Packages under $1$ pound cost $\\$5$. Packages from $1$ to $5$ pounds cost $\\$5$ plus $\\$2$ per additional pound. Packages over $5$ pounds cost $\\$13$ plus $\\$1.50$ per additional pound.

Utility rates: Electricity might cost one rate for the first $500$ kWh and a higher rate beyond that threshold.

Parking fees: First hour free, next two hours at one rate, additional hours at another rate.

In each case, the rule changes at specific boundaries, and the piecewise function captures this structure mathematically. The table below collects four common application patterns with their threshold structure.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Writing Piecewise Functions`,
    content: `Constructing a piecewise function from a description or [graph](!/functions/graphs) requires identifying the pieces and their intervals.

From a graph:

Step 1: Identify distinct segments or curves.

Step 2: Determine the formula for each segment (line, parabola, constant, etc.).

Step 3: Identify the interval each segment covers, noting open or closed endpoints.

Step 4: Write the piecewise notation with each formula and its condition.

From a verbal description:

Step 1: Identify the thresholds where rules change.

Step 2: Write the formula for each region between thresholds.

Step 3: Specify conditions using inequalities.

Example: "A plumber charges $\\$50$ for the first hour and $\\$30$ for each additional hour."

Let $C(t)$ be the cost for $t$ hours of work ($t > 0$):

$$C(t) = \\begin{cases} 50 & \\text{if } 0 < t \\leq 1 \\\\ 50 + 30(t - 1) & \\text{if } t > 1 \\end{cases}$$

Simplifying the second piece: $50 + 30t - 30 = 30t + 20$.

$$C(t) = \\begin{cases} 50 & \\text{if } 0 < t \\leq 1 \\\\ 30t + 20 & \\text{if } t > 1 \\end{cases}$$`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Common Mistakes`,
    content: `Several errors recur when working with piecewise functions.

Using the wrong piece at a boundary: At $x = 3$ with conditions $x < 3$ and $x \\geq 3$, the second piece applies, not the first. The inequality symbols determine which piece owns the boundary.

Overlapping conditions: Writing $x \\leq 2$ and $x \\geq 2$ creates overlap at $x = 2$. Both pieces claim this input, making the function ambiguous. Use $x < 2$ and $x \\geq 2$, or $x \\leq 2$ and $x > 2$.

Gaps in conditions: Writing $x < 1$ and $x > 3$ leaves $[1, 3]$ undefined. Unless this gap is intentional (limiting the domain), conditions should cover all intended inputs.

Assuming continuity: Not all piecewise functions are continuous. Checking whether pieces connect at boundaries is essential — do not assume they do.

Forgetting endpoint markers when graphing: Open and closed dots distinguish included from excluded endpoints. Without them, the graph is incomplete and potentially misleading.

Evaluating all pieces instead of one: Only the piece whose condition the input satisfies should be used. The other formulas do not apply to that input.

The table below collects each mistake with the specific problem it causes and the rule of thumb that prevents it.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Workflow Summary`,
    content: `Most of the tasks on this page — evaluating a piecewise function at an input, graphing it, finding its domain or range, checking continuity at a boundary — share the same general principle: handle each piece on its own interval, then combine. The table below collects the five core tasks with the procedure for each and the pitfall to watch for, useful as a checklist when working through a new piecewise function from scratch.`,
    before: ``,
    after: ``,
    link: '',
  },

  faq: {
    title: `Piecewise Functions FAQ`,
  },
}

 const introContent = {
  id: "intro",
  title: "Different Rules for Different Regions",
  content: `Not every function follows a single formula across its entire domain. Tax rates change at income thresholds. Shipping costs jump at weight limits. A ball's height follows one equation while rising and another while falling. These situations demand functions that switch rules depending on where the input lands.

A piecewise function divides its [domain](!/functions/domain) into intervals, assigning a different formula to each piece. The function is defined everywhere it needs to be, but no single expression covers all cases. Instead, a collection of expressions — each with its own territory — combines to form one coherent function.`
}



const faqQuestions = {
  obj1: {
    question: "How do you evaluate a piecewise function at a point?",
    answer: "Find which condition the input satisfies, then use only that branch. Check the inequalities carefully at boundary values, since one branch usually includes the endpoint and the other excludes it. Substituting into the wrong piece, or into several pieces at once, is the usual mistake.",
    sectionId: "3"
  },
  obj2: {
    question: "When do you use an open circle and when a filled one?",
    answer: "A filled circle marks an endpoint the branch includes, matching a condition written with less-than-or-equal. An open circle marks one it excludes, matching a strict inequality. At any boundary exactly one branch owns the point, so exactly one circle is filled, which is what keeps the rule single-valued.",
    sectionId: "4"
  },
  obj3: {
    question: "How do you check whether a piecewise function is continuous?",
    answer: "Look only at the boundaries, since each branch is usually continuous on its own. At each boundary, evaluate the branch approaching from the left and the branch approaching from the right. Matching values mean the graph connects; different values mean a jump. A single value defined there is not enough on its own.",
    sectionId: "7"
  },
  obj4: {
    question: "How is the absolute value function a piecewise function?",
    answer: "It is defined by two branches: the input itself when it is non-negative, and the negated input when it is negative. This is why the graph is a V, with the corner sitting where the two branches meet at zero. Rewriting absolute values this way is how equations containing them are usually solved.",
    sectionId: "8"
  },
  obj5: {
    question: "What is the domain of a piecewise function?",
    answer: "The union of the intervals its branches cover, minus any gap none of them account for. If the conditions leave a value unassigned the function is simply undefined there. Overlapping conditions are worse: they assign two outputs to one input, which stops the rule being a function at all.",
    sectionId: "5"
  }
}

  const seoData = {
    title: "Piecewise Functions - Definition, Graphing & Examples",
    description: "Learn how to define, evaluate, and graph piecewise functions. Step-by-step examples covering notation, continuity, and real-world applications of piecewise-defined functions.",
    keywords: keyWords.join(", "),
    url: "/functions/piecewise",
    name: "Piecewise Functions"
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      },
      "teaches": [
        "What a piecewise function is and how it differs from a standard function",
        "Piecewise function notation using brace notation and inequality conditions",
        "How to evaluate piecewise functions at specific input values",
        "How to graph piecewise functions with correct endpoint markers",
        "How to determine the domain and range of piecewise functions",
        "How to analyze continuity of piecewise functions at boundary points"
      ]
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
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seoData.name,
          "item": `https://www.learnmathclass.com${seoData.url}`
        }
      ]
    },
  }


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpTwoRules = {
    kind: 'pieces', svgTitle: 'f(x) = x + 1 for x < 0 and x^2 for x >= 0, evaluated at -3, 0 and 2', xRange: [-4, 3], yRange: [-3, 6],
    pieces: [
      { fn: (x) => x + 1, from: -4, to: 0, ends: [null, 'open'], color: 'f', label: { text: 'x + 1 for x < 0', x: -1.3, y: -2.3, pos: 'n' } },
      { fn: (x) => x * x, from: 0, to: 2.45, ends: ['closed', null], color: 'g', label: { text: 'x² for x ≥ 0', x: 1.7, y: 5.2, pos: 'w' } },
    ],
    points: [{ x: -3, y: -2, label: 'f(−3) = −2', pos: 'w' }, { x: 2, y: 4, label: 'f(2) = 4', pos: 'e' }],
    notes: [{ x: 0.15, y: -1, text: 'f(0) = 0: x ≥ 0 owns 0', pos: 'e', color: 'g' }, { x: 0, y: 1, text: '(0, 1) open: not used', pos: 'nw', color: 'f' }],
    caption: 'Two formulas on two intervals, still one output per input',
  };
  const fpDrawJump = {
    kind: 'pieces', svgTitle: 'Graphing x + 3 for x < 1 and 2x - 1 for x >= 1', xRange: [-3, 4], yRange: [-1, 7],
    pieces: [
      { fn: (x) => x + 3, from: -3, to: 1, ends: [null, 'open'], color: 'f', ghost: [[1, 4]], label: { text: 'x + 3 for x < 1', x: -0.8, y: 0, pos: 'n' } },
      { fn: (x) => 2 * x - 1, from: 1, to: 4, ends: ['closed', null], color: 'g', ghost: [[0, 1]], label: { text: '2x − 1 for x ≥ 1', x: 3.3, y: 6.2, pos: 'w' } },
    ],
    notes: [{ x: 1, y: 4, text: '(1, 4) excluded: open dot', pos: 'nw', color: 'f' }, { x: 1, y: 1, text: '(1, 1) included: solid dot', pos: 'e', color: 'g' }],
    caption: 'Each line kept only on its interval; the dots show who owns x = 1',
  };
  const fpPieceDomain = {
    kind: 'domainOpen', svgTitle: 'Domain of x^2 for x <= -1 and sqrt x for x >= 0', range: [-4, 4],
    rows: [
      { label: 'x² covers x ≤ −1', color: 'f', segs: [[null, -1, false, false]], tag: { text: '(−∞, −1]', x: 2.5 } },
      { label: '√x covers x ≥ 0', color: 'g', segs: [[0, null, false]], tag: { text: '[0, ∞)', x: 2.5 } },
      { label: 'Dom f: no piece covers (−1, 0)', color: 'r', segs: [[null, -1, false, false], [0, null, false]], tag: { text: '(−∞, −1] ∪ [0, ∞)', x: 2.3 } },
    ],
    caption: 'The domain is the union of the pieces’ intervals — gaps stay out',
  };
  const fpRangeUnion = {
    kind: 'pieces', svgTitle: 'Range of 2 for x < 0 and x + 1 for x >= 0 is [1, inf)', xRange: [-4, 4], yRange: [-1, 6],
    pieces: [
      { fn: () => 2, from: -4, to: 0, ends: [null, 'open'], color: 'g', label: { text: '2 for x < 0', x: -2.5, y: 2, pos: 'n' } },
      { fn: (x) => x + 1, from: 0, to: 5, ends: ['closed', null], color: 'f', label: { text: 'x + 1 for x ≥ 0', x: 2.2, y: 3.2, pos: 'se' } },
    ],
    yBars: [{ from: 1, to: 7, color: 'r', label: 'outputs [1, ∞)', labelY: 4.6, dx: 0 }],
    notes: [{ x: -2.5, y: 2, text: '{2} is already inside [1, ∞)', pos: 's', color: 'g' }],
    caption: 'Range = {2} ∪ [1, ∞) = [1, ∞)',
  };
  const fpPlumber = {
    kind: 'pieces', svgTitle: 'Plumber cost C(t): 50 for the first hour, then 30t + 20', xRange: [0, 4], yRange: [0, 120], yStep: 20, xLetter: 't', yLetter: 'C',
    pieces: [
      { fn: () => 50, from: 0, to: 1, ends: ['open', 'closed'], color: 'g', label: { text: '$50 flat', x: 0.5, y: 50, pos: 'n' } },
      { fn: (t) => 30 * t + 20, from: 1, to: 4, ends: ['open', null], color: 'f', label: { text: '30t + 20: +$30 per extra hour', x: 2.5, y: 25, pos: 'n' } },
    ],
    vlines: [{ x: 1, label: 'threshold t = 1' }],
    points: [{ x: 3, y: 110, label: 'C(3) = 110', pos: 'se' }],
    caption: 'The rule changes at t = 1 hour; the cost C does not jump',
  };

  const demoUnits = {
    jump: demoUnitFrame({
      svg: functionPiecewiseDiagrams.jump,
      caption: 'x + 1 for x &lt; 0, x &#8722; 1 for x &#8805; 0: a jump at 0',
      text: 'The two pieces meet the boundary x = 0 at different heights, 1 from the left and &#8722;1 from the right, so the graph jumps; the open dot marks the value the left piece approaches but does not take, the closed dot the value the function actually has. Continuity at the boundary would need the two dots to coincide. Move the pieces until they meet on the',
      href: '/functions/visual-tools/piecewise',
      linkText: 'piecewise function explorer',
    }),
    abs: demoUnitFrame({
      svg: functionPiecewiseDiagrams.absvalue,
      caption: '|x| as two pieces: &#8722;x then x',
      text: 'The left ray is the line y = &#8722;x on x &lt; 0 and the right ray is y = x on x &#8805; 0; the two pieces meet at the origin at the same height, so the V is continuous even though its formula changes there. The closed dot at 0 belongs to the right piece. Rebuild the V from its two pieces on the',
      href: '/functions/visual-tools/piecewise',
      linkText: 'piecewise function explorer',
    }),
    step: demoUnitFrame({
      svg: functionPiecewiseDiagrams.heaviside,
      caption: 'The Heaviside step: &#8722;1 then 1',
      text: 'Each piece is a constant, so the graph is two horizontal segments with a jump of 2 at x = 0; the open and closed dots record which piece owns the boundary. Every step function is built this way, one flat piece per interval. Try the three-piece sign function on the',
      href: '/functions/visual-tools/piecewise',
      linkText: 'piecewise function explorer',
    }),
    twoRules: demoUnitFrame({
      svg: renderFunctionPlotV4(fpTwoRules),
      caption: 'One function, two formulas',
      text: 'The section\'s example: x + 1 for x &lt; 0 (blue) and x&#178; for x &#8805; 0 (navy). Each input falls in exactly one interval, so exactly one formula runs: f(&#8722;3) = &#8722;2 from the first, f(2) = 4 from the second. At the boundary x = 0 the condition x &#8805; 0 applies, so f(0) = 0; the first piece&#8217;s end at (0, 1) is open and never used.',
    }),
    drawJump: demoUnitFrame({
      svg: renderFunctionPlotV4(fpDrawJump),
      caption: 'Graph each piece on its own interval',
      text: 'Each line is drawn as if it ran everywhere (faint dashes), then only its own interval is kept. At x = 1 the first piece would give 4, but x = 1 is excluded, so (1, 4) gets an open dot; the second piece gives 1 and includes x = 1, so (1, 1) gets a solid dot. The gap between the two dots is the jump.',
    }),
    domainGap: demoUnitFrame({
      svg: renderFunctionPlotV2(fpPieceDomain),
      caption: 'Two intervals, one domain with a gap',
      text: 'x&#178; is used only for x &#8804; &#8722;1 and &#8730;x only for x &#8805; 0. Laying the two intervals on one line and keeping everything either piece covers gives (&#8722;&#8734;, &#8722;1] &#8746; [0, &#8734;); the inputs between &#8722;1 and 0 belong to no piece, so they are not in the domain.',
    }),
    rangeUnion: demoUnitFrame({
      svg: renderFunctionPlotV4(fpRangeUnion),
      caption: 'Collecting the outputs of each piece',
      text: 'The constant piece outputs only 2; the line x + 1, starting at (0, 1) with a solid dot, outputs every value from 1 upward. The amber bar on the y-axis is the union of the two: 2 already lies in [1, &#8734;), so the range is [1, &#8734;).',
    }),
    plumber: demoUnitFrame({
      svg: renderFunctionPlotV4(fpPlumber),
      caption: 'The plumber\'s charge as a graph',
      text: 'C(t) = 50 for 0 &lt; t &#8804; 1 and 30t + 20 for t &gt; 1. The flat piece is the first-hour charge; after the threshold at one hour, the line climbs $30 per hour. Both pieces give $50 at t = 1, so the graph has no jump, and three hours cost C(3) = $110.',
    }),
  };

   return {
      props:{
    demoUnits,
         sectionsContent,
         introContent,
         obj7Table,
         obj9Table,
         obj10Table,
         obj12Table,
         summaryTable,
         faqQuestions,
         schemas,
          seoData: {
        title: "Piecewise Functions - Definition, Graphing & Examples",
        description: "Learn how to define, evaluate, and graph piecewise functions. Step-by-step examples covering notation, continuity, and real-world applications of piecewise-defined functions.",
        keywords: keyWords.join(", "),
        url: "/functions/piecewise",
         name: "Piecewise Functions"
      },
       }
    }
   }

export default function PiecewisePage({
  seoData,
  sectionsContent,
  introContent,
  obj7Table,
  obj9Table,
  obj10Table,
  obj12Table,
  summaryTable,
  faqQuestions,
  schemas, demoUnits
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
          <div key={'unit-twoRules'} dangerouslySetInnerHTML={{ __html: demoUnits.twoRules }} />,
          `Which formula applies is decided by the input, never by choice.`,
        ]
    },
    {
        id:'2',
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
          <div key={'unit-drawJump'} dangerouslySetInnerHTML={{ __html: demoUnits.drawJump }} />,
          `Open and closed dots are part of the graph, not decoration: they say which piece owns each boundary.`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'unit-domainGap'} dangerouslySetInnerHTML={{ __html: demoUnits.domainGap }} />,
          `Remember to intersect each interval with what its own formula allows.`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'unit-rangeUnion'} dangerouslySetInnerHTML={{ __html: demoUnits.rangeUnion }} />,
          `A piece's outputs can hide inside another piece's range, as the constant 2 does here.`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div
            key={'obj7-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj7Table }}
          />,
                  <div key={'unit-jump'} dangerouslySetInnerHTML={{ __html: demoUnits.jump }} />,
          `Checking continuity at a boundary is therefore a matter of comparing two limits with one value.`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
                  <div key={'unit-abs'} dangerouslySetInnerHTML={{ __html: demoUnits.abs }} />,
          `Most functions with a corner are piecewise in this same quiet way.`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div
            key={'obj9-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj9Table }}
          />,
                  <div key={'unit-step'} dangerouslySetInnerHTML={{ __html: demoUnits.step }} />,
          `Step functions model anything that changes only at thresholds.`,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div
            key={'obj10-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj10Table }}
          />,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div key={'unit-plumber'} dangerouslySetInnerHTML={{ __html: demoUnits.plumber }} />,
          `Drawing the function is a quick check that the written pieces match the description.`,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div
            key={'obj12-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj12Table }}
          />,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },

    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:sectionsContent.faq.title,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Piecewise Functions</h1>
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