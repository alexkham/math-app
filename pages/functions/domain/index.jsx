

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
//     'domain of a function',
//     'finding domain',
//     'domain restrictions',
//     'domain notation',
//     'interval notation domain',
//     'rational function domain',
//     'radical function domain',
//     'natural domain',
//     'domain from graph',
//     'how to find domain',
//     'domain and range',
//     'set builder notation domain',
//     'logarithmic function domain',
//     'restricted domain',
//   ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj2 — aggregation (reference): notations for expressing domain
//   const obj2Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Notation</th>
//       <th style="${tableHeaders.aggregation}">Form</th>
//       <th style="${tableHeaders.aggregation}">Example</th>
//       <th style="${tableHeaders.aggregation}">Note</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Interval</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parentheses and brackets around endpoints</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[2, 5), (−∞, 3]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bracket includes the endpoint; parenthesis excludes it; ∞ always takes a parenthesis</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Set-builder</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{x | defining condition}</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{x | x ≥ 0}</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">handles complex conditions intervals cannot easily express</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inequality</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">condition stated directly on x</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≥ 0; &nbsp; −3 &lt; x ≤ 7</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">natural form when a restriction is being derived</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Union (disconnected)</td>
//       <td style="padding: 12px 15px; color: #34495e;">two or more intervals joined with ∪</td>
//       <td style="padding: 12px 15px; color: #34495e;">(−∞, −1) ∪ (1, ∞)</td>
//       <td style="padding: 12px 15px; color: #34495e;">used when the domain skips a value or interval</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj7 — aggregation: trigonometric functions and their domain restrictions
//   const obj7Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Function</th>
//       <th style="${tableHeaders.aggregation}">Defined as</th>
//       <th style="${tableHeaders.aggregation}">Where undefined</th>
//       <th style="${tableHeaders.aggregation}">Domain</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">—</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">never</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real numbers</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">—</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">never</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real numbers</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">tan(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin(x) ⁄ cos(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where cos(x) = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ π⁄2 + nπ</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cot(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(x) ⁄ sin(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where sin(x) = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ nπ</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sec(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ cos(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where cos(x) = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ π⁄2 + nπ</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">csc(x)</td>
//       <td style="padding: 12px 15px; color: #34495e;">1 ⁄ sin(x)</td>
//       <td style="padding: 12px 15px; color: #34495e;">where sin(x) = 0</td>
//       <td style="padding: 12px 15px; color: #34495e;">x ≠ nπ</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj9 — aggregation: visual cues for reading domain from a graph
//   const obj9Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Visual cue</th>
//       <th style="${tableHeaders.aggregation}">What it means for the domain</th>
//       <th style="${tableHeaders.aggregation}">Notation impact</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Solid dot at endpoint</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">endpoint is included</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use bracket — [ or ]</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Open dot at endpoint</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">endpoint is excluded</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use parenthesis — ( or )</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical asymptote at x = a</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">value a is excluded; graph approaches but never reaches</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">domain splits at a using ∪</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Gap in the graph</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">interval missing — no curve exists there</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two or more disjoint intervals joined by ∪</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Arrow at end of curve</td>
//       <td style="padding: 12px 15px; color: #34495e;">graph continues indefinitely in that direction</td>
//       <td style="padding: 12px 15px; color: #34495e;">extend to −∞ or +∞ with a parenthesis</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj11 — summary capstone: domain restriction rule by function type
//   const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Function type</th>
//       <th style="${tableHeaders.summary}">Restriction rule</th>
//       <th style="${tableHeaders.summary}">Example</th>
//       <th style="${tableHeaders.summary}">Resulting domain</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = 2x + 5</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">denominator ≠ 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = 1 ⁄ (x − 2)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, 2) ∪ (2, ∞)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Even radical</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">radicand ≥ 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = √(x − 5)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[5, ∞)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Odd radical</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = ∛(x − 5)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithmic</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">argument &gt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = ln(x − 4)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(4, ∞)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric (tan, cot, sec, csc)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">underlying sin or cos ≠ 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">tan(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ π⁄2 + nπ</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Combined</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">intersect every individual restriction</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = √x ⁄ (x − 3)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, 3) ∪ (3, ∞)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Contextual / modeled</td>
//       <td style="padding: 12px 15px; color: #34495e;">constrained by physical meaning of the variable</td>
//       <td style="padding: 12px 15px; color: #34495e;">h(t) = −16t² + 64t (projectile)</td>
//       <td style="padding: 12px 15px; color: #34495e;">[0, 4]</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // ---------- SECTIONS ----------

//   const sectionsContent = {

//     obj0 :{
//   title: `Key Terms`,
//   content: `
// • [Domain](!/functions/definitions#domain) — the set of all valid inputs for a function
// • [Range](!/functions/definitions#range) — the set of all outputs; domain and range together frame the complete picture
// • [Function](!/functions/definitions#function) — a rule together with a domain; the function is incomplete without it
// • [Inverse Function](!/functions/definitions#inverse_function) — restricting the domain can create an inverse where none existed
// `,
//   before: ``,
//   after: `
 
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
//   link: '',
// },

//   obj1: {
//     title: `What is Domain`,
//     content: `The domain of a function is the set of all inputs for which the function produces a valid output. It includes every value that can be substituted into the function and yield a real number result.

// A function is not just a rule — it is a rule together with a domain. The expression $f(x) = x^2$ describes a rule, but the function is not complete until the domain is specified. Often the domain is implicit: all real numbers for which the formula makes sense. Sometimes it is explicitly restricted to match a context or application.

// The domain answers a simple question: what can go in? For $f(x) = 2x + 5$, any real number works — there are no divisions, no roots, no restrictions. The domain is all real numbers, written $(-\\infty, \\infty)$ in interval notation or $\\mathbb{R}$ in set notation.

// For $f(x) = 1/x$, the input $x = 0$ fails because division by zero is undefined. Every other real number works. The domain is all real numbers except zero: $(-\\infty, 0) \\cup (0, \\infty)$.

// The domain is distinct from the [range](!/functions/range), which describes outputs rather than inputs. Together they frame the complete input-output picture of a function.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   notation: {
//     title: `Domain Notation`,
//     lead: `Four spellings for one set: intervals, the set-builder bar, bare inequalities, and the union glue for disconnected pieces — all collected among the [function symbols](!/math-symbols/functions), and compared side by side in the table below. The number-line picture (solid dot in, open dot out) is the graphical twin of the bracket rules.`,
//     inherited: `The inequality signs themselves — $<$, $\\leq$ and their chains — are owned by [inequality notation](!/algebra/inequalities/linear#notation), which also carries the endpoint fine print (Bourbaki's reversed brackets, the $\\infty$ rule's rationale); $f(x)$ comes from [function notation](!/functions/basics#5).`,
//     entries: [
//       {
//         id: 'interval-brackets',
//         tex: `$[2, 5)$`,
//         read: `the interval from two, included, to five, excluded`,
//         means: `Bracket in, parenthesis out: $[2, 5)$ holds everything from $2$ to $5$, keeping $2$, dropping $5$. One symbol pair per endpoint, each deciding membership independently.`,
//         cases: `Infinity always takes the parenthesis — $(-\\infty, 3]$ — because no set reaches it; half-open intervals like $[0, 2\\pi)$ are the standard trick for one-copy-per-cycle work in [trigonometry](!/trigonometry/equations#notation).`,
//         confusedWith: `A coordinate point. $(2, 5)$ is simultaneously an open interval and a point in the plane — and a [vector](!/linear-algebra/vectors/basic-operations#notation); only context says whether the pair is a set or a location.`,
//       },
//       {
//         id: 'set-builder',
//         tex: `$\\{x \\mid x \\geq 0\\}$`,
//         read: `the set of all x such that x is at least zero`,
//         means: `The set-builder bar: left of $\\mid$ names the variable, right of it states the admission test — "such that" is the reading. It handles conditions intervals cannot spell, and the braces are [set-theory marks](!/set-theory/basics) on loan.`,
//         cases: `The colon variant $\\{x : x \\geq 0\\}$ is the same statement — common where the bar could collide with absolute value; fuller spellings declare the universe first: $\\{x \\in \\mathbb{R} \\mid x \\geq 0\\}$.`,
//         confusedWith: `Divisibility's bar. In number theory $a \\mid b$ means "$a$ divides $b$" — the same stroke, an unrelated claim; inside braces it is always "such that".`,
//       },
//       {
//         id: 'union-glue',
//         tex: `$(-\\infty, -1) \\cup (1, \\infty)$`,
//         read: `the union of two intervals`,
//         means: `The glue for disconnected domains: $\\cup$ joins pieces into one set, reading as "or" — a number qualifies by landing in either interval. Rational functions manufacture these in **Finding Domain: Rational Functions** below.`,
//         cases: `Each excluded point splits the line once — two exclusions, three pieces: $(-\\infty, -3) \\cup (-3, 3) \\cup (3, \\infty)$; the alternative spelling $\\mathbb{R} \\setminus \\{2\\}$ says "all reals except $2$" in one stroke.`,
//         confusedWith: `Intersection. $\\cup$ collects, $\\cap$ filters — a domain written with $\\cap$ by reflex is usually empty; the cup opens upward to "hold everything", the standard memory hook.`,
//       },
//     ],
//     symbolsHref: `/math-symbols/functions`,
//     symbolsLabel: `All function symbols`,
//     parentHref: `/functions`,
//     parentLabel: `Functions`,
//   },

//   obj3: {
//     title: `Natural Domain vs Restricted Domain`,
//     content: `The natural domain of a function is the largest set of real numbers for which the formula produces real output. It is determined entirely by the algebraic expression — no external constraints, no contextual limitations.

// For $f(x) = \\sqrt{x - 3}$, the natural domain is $[3, \\infty)$ because the radicand $x - 3$ must be non-negative. For $g(x) = \\ln(x)$, the natural domain is $(0, \\infty)$ because logarithms require positive arguments. The natural domain follows from the mathematics alone.

// A restricted domain is a deliberate limitation imposed beyond what the formula requires. The function $f(x) = x^2$ has natural domain $(-\\infty, \\infty)$, but restricting to $[0, \\infty)$ makes the function one-to-one, which is necessary for constructing an [inverse](!/functions/inverse).

// Context often restricts domain. A function modeling the height of a projectile might be $h(t) = -16t^2 + 64t$, which algebraically accepts any real $t$. But if the projectile launches at $t = 0$ and lands at $t = 4$, the meaningful domain is $[0, 4]$. Negative time and post-landing time carry no physical significance.

// The implied domain is the natural domain assumed when no domain is explicitly stated. Unless context or instruction specifies otherwise, assume the domain is as large as the formula allows.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Finding Domain: Rational Functions`,
//     content: `A rational function is a ratio of two polynomials. The fundamental restriction is that the denominator cannot equal zero — division by zero is undefined.

// To find the domain of a rational function, set the denominator equal to zero and solve. The solutions are the excluded values; everything else is in the domain.

// For $f(x) = \\dfrac{x + 3}{x - 2}$, set $x - 2 = 0$ to find $x = 2$. The domain is all real numbers except $2$:

// $$(-\\infty, 2) \\cup (2, \\infty)$$

// For $g(x) = \\dfrac{5}{x^2 - 9}$, factor the denominator: $x^2 - 9 = (x-3)(x+3)$. Setting each factor to zero gives $x = 3$ and $x = -3$. The domain is:

// $$(-\\infty, -3) \\cup (-3, 3) \\cup (3, \\infty)$$

// For $h(x) = \\dfrac{x}{x^2 + 1}$, the denominator $x^2 + 1$ is always positive — it has no real roots. No value of $x$ makes it zero. The domain is all real numbers: $(-\\infty, \\infty)$.

// The numerator does not affect domain. A zero in the numerator makes the function equal zero, which is a valid output. Only zeros in the denominator create exclusions.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Finding Domain: Radical Functions`,
//     content: `Radical functions involve roots — square roots, cube roots, fourth roots, and so on. The domain restrictions depend on whether the root index is even or odd.

// Even roots (square root, fourth root, sixth root) require the radicand to be non-negative. Negative numbers have no real even roots. For $f(x) = \\sqrt{x - 5}$, the radicand $x - 5$ must satisfy $x - 5 \\geq 0$, giving $x \\geq 5$. The domain is $[5, \\infty)$.

// Odd roots (cube root, fifth root) accept any real number. The cube root of $-8$ is $-2$, a perfectly valid real number. For $g(x) = \\sqrt[3]{x - 5}$, no restriction applies. The domain is $(-\\infty, \\infty)$.

// More complex radicands require solving inequalities. For $f(x) = \\sqrt{6 - 2x}$, set $6 - 2x \\geq 0$:

// $$6 \\geq 2x$$
// $$3 \\geq x$$

// The domain is $(-\\infty, 3]$.

// Nested radicals compound the restrictions. For $f(x) = \\sqrt{\\sqrt{x} - 1}$, both layers impose conditions. The inner radical requires $x \\geq 0$. The outer radical requires $\\sqrt{x} - 1 \\geq 0$, which means $\\sqrt{x} \\geq 1$, so $x \\geq 1$. The domain is $[1, \\infty)$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Finding Domain: Logarithmic Functions`,
//     content: `Logarithmic functions require their argument to be strictly positive. The logarithm of zero is undefined, and the logarithm of a negative number has no real value.

// For $f(x) = \\log(x)$ or $f(x) = \\ln(x)$, the domain is $(0, \\infty)$ — all positive real numbers.

// When the argument is an expression, set that expression greater than zero and solve. For $f(x) = \\ln(x - 4)$, require $x - 4 > 0$:

// $$x > 4$$

// The domain is $(4, \\infty)$.

// For $g(x) = \\log(3 - x)$, require $3 - x > 0$:

// $$3 > x$$

// The domain is $(-\\infty, 3)$.

// Quadratic or factorable arguments require careful sign analysis. For $h(x) = \\ln(x^2 - 4)$, factor: $x^2 - 4 = (x-2)(x+2)$. This expression is positive when $x < -2$ or $x > 2$. The domain is:

// $$(-\\infty, -2) \\cup (2, \\infty)$$

// Note the strict inequality: unlike square roots, logarithms exclude the boundary where the argument equals zero.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Finding Domain: Trigonometric Functions`,
//     content: `The basic trigonometric functions sine and cosine accept all real numbers — they have no domain restrictions. But tangent, cotangent, secant, and cosecant are defined as ratios, and ratios fail when the denominator is zero.

// Tangent is defined as $\\tan(x) = \\sin(x)/\\cos(x)$. It is undefined where $\\cos(x) = 0$, which occurs at $x = \\dfrac{\\pi}{2} + n\\pi$ for any integer $n$. The domain excludes these points.

// Secant is $\\sec(x) = 1/\\cos(x)$, undefined at the same points as tangent.

// Cotangent is $\\cot(x) = \\cos(x)/\\sin(x)$, undefined where $\\sin(x) = 0$: at $x = n\\pi$ for any integer $n$.

// Cosecant is $\\csc(x) = 1/\\sin(x)$, undefined at the same points as cotangent.

// Inverse trigonometric functions have restricted domains matching the ranges of the original functions. The function $\\arcsin(x)$ requires $-1 \\leq x \\leq 1$. The function $\\arccos(x)$ has the same restriction. The function $\\arctan(x)$ accepts all real numbers.

// When trigonometric functions appear inside other operations, combine the restrictions. For $f(x) = \\sqrt{\\sin(x)}$, the domain consists of all $x$ where $\\sin(x) \\geq 0$ — the intervals where the sine function is non-negative.

// The table below collects the six basic trigonometric functions with where each becomes undefined and the resulting domain exclusion.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Finding Domain: Combined Functions`,
//     content: `When multiple operations appear in a single function, every restriction applies simultaneously. The domain is the intersection of all individual requirements.

// For $f(x) = \\dfrac{\\sqrt{x}}{x - 3}$, two restrictions arise. The square root requires $x \\geq 0$. The denominator requires $x \\neq 3$. Both must hold, so the domain is $[0, 3) \\cup (3, \\infty)$.

// For $g(x) = \\ln(x - 1) + \\sqrt{5 - x}$, the logarithm requires $x - 1 > 0$, giving $x > 1$. The square root requires $5 - x \\geq 0$, giving $x \\leq 5$. The intersection is $(1, 5]$.

// For $h(x) = \\dfrac{1}{\\sqrt{x - 2}}$, the square root requires $x - 2 \\geq 0$, and the denominator requires $\\sqrt{x-2} \\neq 0$. Together these demand $x - 2 > 0$, so $x > 2$. The domain is $(2, \\infty)$.

// A systematic approach prevents errors: list each operation that imposes a restriction, solve each restriction separately, then intersect all the resulting conditions. Overlapping constraints narrow the domain; contradictory constraints can eliminate it entirely.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Domain from Graph`,
//     content: `When a function is given as a graph rather than a formula, the domain is read as the horizontal extent — the set of $x$-values for which the graph exists.

// Trace the graph from left to right. Where does it start? Where does it end? Does it continue indefinitely in either direction? The answers define the domain.

// Solid dots indicate included endpoints. If the graph ends at a solid dot at $x = 3$, then $3$ is in the domain, and the interval is closed at that end: use a bracket.

// Open dots indicate excluded endpoints. If the graph ends at an open dot at $x = 3$, then $3$ is not in the domain, and the interval is open at that end: use a parenthesis.

// Vertical asymptotes signal domain exclusions. If the graph approaches but never touches a vertical line at $x = 2$, then $2$ is not in the domain. The domain splits into separate intervals on either side of the asymptote.

// Gaps in the graph appear as breaks — intervals where no curve exists. A graph defined for $x < -1$ and $x > 1$ but missing in between has domain $(-\\infty, -1) \\cup (1, \\infty)$.

// Arrows at the ends of a graph indicate indefinite continuation. An arrow pointing right means the graph extends toward $+\\infty$; an arrow pointing left means it extends toward $-\\infty$.

// The table below collects the visual cues that signal domain features on a graph and the notation each implies.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj10: {
//     title: `Domain from Context`,
//     content: `When a function models a real-world situation, the context imposes restrictions that pure algebra does not.

// Time is typically non-negative. A function $h(t)$ giving the height of a ball after $t$ seconds has no meaning for $t < 0$. The domain starts at $t = 0$, regardless of whether the formula accepts negative values.

// Quantities like length, area, population, and count must be non-negative. A function $A(r) = \\pi r^2$ giving the area of a circle requires $r \\geq 0$, even though the formula works for negative $r$.

// Physical upper bounds also restrict domain. A function modeling the number of items produced in a day has a maximum determined by capacity. A function for temperature in a specific experiment operates within measured bounds.

// Discrete quantities may restrict the domain to integers. A function $P(n)$ giving profit based on $n$ units sold makes sense only for whole numbers $n = 0, 1, 2, 3, \\ldots$

// Contextual domain is a modeling decision, not a calculation. It requires understanding what the variables represent and what values are meaningful in the situation. A formula may allow $x = -5$, but if $x$ represents the number of employees, that value is nonsense.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj11: {
//     title: `Domain Rules at a Glance`,
//     content: `Finding the domain reduces to a small set of restriction rules — one or two per function type. The table below collects the rule for each function type covered above with a representative example and the resulting domain. It works as a study card and as a checklist when analyzing an unfamiliar expression: identify the operations involved, look up each restriction, then intersect the results.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

// }


//  const introContent = {
//   id: "intro",
//   title: "Where Functions Live",
//   content: `Every function has boundaries. Some inputs work, others do not. The square root function refuses negative numbers. The reciprocal function cannot accept zero. A function modeling time accepts no moments before the clock starts.

// The domain is the complete set of inputs for which the function produces valid output. It answers the question: what values can this function actually process? Finding the domain means identifying every restriction — every value that causes division by zero, every radicand that turns negative, every argument that falls outside the reach of the rule.`
// }



//   const faqQuestions = {
//     q1: {
//       question: "What is the domain of a function?",
//       answer: "The domain of a function is the set of all inputs for which the function produces a valid output. It includes every value that can be substituted into the function and yield a real number result. Together with the range, it frames the complete input-output picture of a function.",
//     },
//     q2: {
//       question: "How do you find the domain of a rational function?",
//       answer: "To find the domain of a rational function, set the denominator equal to zero and solve for the excluded values. Every real number except those solutions is in the domain. The numerator does not affect the domain — only zeros in the denominator create exclusions.",
//     },
//     q3: {
//       question: "What is the domain of a radical function with an even root?",
//       answer: "Even roots such as square roots require the radicand to be non-negative, since negative numbers have no real even roots. Set the radicand greater than or equal to zero and solve the resulting inequality to find the domain. For example, for f(x) = sqrt(x - 5), the domain is [5, infinity).",
//     },
//     q4: {
//       question: "How do you read the domain from a graph?",
//       answer: "When reading domain from a graph, trace the horizontal extent — the set of x-values for which the graph exists. Solid dots mark included endpoints (use brackets) and open dots mark excluded endpoints (use parentheses). Vertical asymptotes and gaps in the graph also indicate values excluded from the domain.",
//     },
//     q5: {
//       question: "What is the difference between natural domain and restricted domain?",
//       answer: "The natural domain is the largest set of real numbers for which the formula produces real output, determined entirely by the algebraic expression. A restricted domain is a deliberate limitation imposed beyond what the formula requires, often to match a real-world context or to make a function one-to-one for finding its inverse.",
//     },
//   }

//   const seoData = {
//     title: "Domain of a Function - How to Find It | Learn Math Class",
//     description: "Learn how to find the domain of any function including rational, radical, logarithmic, and composite functions. Step-by-step methods with interval notation examples.",
//     keywords: keyWords.join(", "),
//     url: "/functions/domain",
//     name: "Domain of a Function",
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": seoData.name,
//       "description": seoData.description,
//       "url": `https://www.learnmathclass.com${seoData.url}`,
//       "inLanguage": "en-US",
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class",
//         "url": "https://www.learnmathclass.com",
//       },
//       "publisher": {
//         "@type": "Organization",
//         "name": "Learn Math Class",
//         "url": "https://www.learnmathclass.com",
//       },
//       "teaches": [
//         "What is the domain of a function",
//         "How to express domain using interval and set-builder notation",
//         "Natural domain versus restricted domain",
//         "Finding domain of rational and radical functions",
//         "Finding domain of logarithmic and trigonometric functions",
//         "How to determine domain from a graph or real-world context",
//       ],
//       "educationalLevel": "High School",
//       "learningResourceType": "Article",
//     },
//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com",
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Functions",
//           "item": "https://www.learnmathclass.com/functions",
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": seoData.name,
//           "item": `https://www.learnmathclass.com${seoData.url}`,
//         },
//       ],
//     },
//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.values(faqQuestions).map((faq) => ({
//         "@type": "Question",
//         "name": faq.question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": faq.answer,
//         },
//       })),
//     },
//   }

//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          obj2Table,
//          obj7Table,
//          obj9Table,
//          summaryTable,
//          faqQuestions,
//          schemas,
//           seoData: {
//         title: "Domain of a Function - How to Find It | Learn Math Class",
//         description: "Learn how to find the domain of any function including rational, radical, logarithmic, and composite functions. Step-by-step methods with interval notation examples.",
//         keywords: keyWords.join(", "),
//         url: "/functions/domain",
//          name: "Domain of a Function"
//       },
//        }
//     }
//    }

// export default function DomainPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj2Table,
//   obj7Table,
//   obj9Table,
//   summaryTable,
//   faqQuestions,
//   schemas,
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
//           <div key={'obj2-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj2Table }} />,
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
//           <div key={'obj7-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj7Table }} />,
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
//           <div key={'obj9-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj9Table }} />,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//           <div key={'summary-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
//         ]
//     },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },

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
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
//   />
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
//   />
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Domain</h1>
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
import functionDomainDiagrams from '@/app/components/functions/domain/functionDomainDiagrams'
import renderFunctionPlot from '@/app/utils/illustrations/functions/graphs/functionPlot'
import renderFunctionPlotV2 from '@/app/utils/illustrations/functions/graphs/functionPlot.v2'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){

  const keyWords=[
    'domain of a function',
    'finding domain',
    'domain restrictions',
    'domain notation',
    'interval notation domain',
    'rational function domain',
    'radical function domain',
    'natural domain',
    'domain from graph',
    'how to find domain',
    'domain and range',
    'set builder notation domain',
    'logarithmic function domain',
    'restricted domain',
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — aggregation (reference): notations for expressing domain
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Notation</th>
      <th style="${tableHeaders.aggregation}">Form</th>
      <th style="${tableHeaders.aggregation}">Example</th>
      <th style="${tableHeaders.aggregation}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parentheses and brackets around endpoints</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[2, 5), (−∞, 3]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bracket includes the endpoint; parenthesis excludes it; ∞ always takes a parenthesis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Set-builder</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{x | defining condition}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{x | x ≥ 0}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">handles complex conditions intervals cannot easily express</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inequality</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">condition stated directly on x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≥ 0; &nbsp; −3 &lt; x ≤ 7</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">natural form when a restriction is being derived</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Union (disconnected)</td>
      <td style="padding: 12px 15px; color: #34495e;">two or more intervals joined with ∪</td>
      <td style="padding: 12px 15px; color: #34495e;">(−∞, −1) ∪ (1, ∞)</td>
      <td style="padding: 12px 15px; color: #34495e;">used when the domain skips a value or interval</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — aggregation: trigonometric functions and their domain restrictions
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Function</th>
      <th style="${tableHeaders.aggregation}">Defined as</th>
      <th style="${tableHeaders.aggregation}">Where undefined</th>
      <th style="${tableHeaders.aggregation}">Domain</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">—</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">never</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real numbers</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">—</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">never</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real numbers</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">tan(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin(x) ⁄ cos(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where cos(x) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ π⁄2 + nπ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cot(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(x) ⁄ sin(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where sin(x) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ nπ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sec(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ cos(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where cos(x) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ π⁄2 + nπ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">csc(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">1 ⁄ sin(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">where sin(x) = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">x ≠ nπ</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — aggregation: visual cues for reading domain from a graph
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Visual cue</th>
      <th style="${tableHeaders.aggregation}">What it means for the domain</th>
      <th style="${tableHeaders.aggregation}">Notation impact</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Solid dot at endpoint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">endpoint is included</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use bracket — [ or ]</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Open dot at endpoint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">endpoint is excluded</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use parenthesis — ( or )</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical asymptote at x = a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">value a is excluded; graph approaches but never reaches</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">domain splits at a using ∪</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Gap in the graph</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">interval missing — no curve exists there</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two or more disjoint intervals joined by ∪</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Arrow at end of curve</td>
      <td style="padding: 12px 15px; color: #34495e;">graph continues indefinitely in that direction</td>
      <td style="padding: 12px 15px; color: #34495e;">extend to −∞ or +∞ with a parenthesis</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — summary capstone: domain restriction rule by function type
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Function type</th>
      <th style="${tableHeaders.summary}">Restriction rule</th>
      <th style="${tableHeaders.summary}">Example</th>
      <th style="${tableHeaders.summary}">Resulting domain</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = 2x + 5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rational</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">denominator ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = 1 ⁄ (x − 2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, 2) ∪ (2, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Even radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">radicand ≥ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = √(x − 5)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[5, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Odd radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = ∛(x − 5)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithmic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">argument &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = ln(x − 4)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(4, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric (tan, cot, sec, csc)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">underlying sin or cos ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">tan(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≠ π⁄2 + nπ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Combined</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">intersect every individual restriction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = √x ⁄ (x − 3)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, 3) ∪ (3, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Contextual / modeled</td>
      <td style="padding: 12px 15px; color: #34495e;">constrained by physical meaning of the variable</td>
      <td style="padding: 12px 15px; color: #34495e;">h(t) = −16t² + 64t (projectile)</td>
      <td style="padding: 12px 15px; color: #34495e;">[0, 4]</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS ----------

  // Concept introduction (section 1, "What is Domain") — template G,
  // exclusion. Running instance: f(x) = 1/x, tried on five inputs. Old obj1
  // text (five paragraphs) is kept in sectionsContent.obj1, unused; the
  // paragraphs and the allReals demo frame with its line are carried in
  // unchanged.
  const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
  const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
    cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
  const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
  const ciCandTable = ciTableOpen(['input x', 'what f(x) = 1/x asks for']) +
    ciRow(['−2', '1 ÷ (−2)']) +
    ciRow(['0.5', '1 ÷ 0.5'], { shade: true }) +
    ciRow(['0', '1 ÷ 0']) +
    ciRow(['3', '1 ÷ 3'], { shade: true }) +
    ciRow(['100', '1 ÷ 100'], { last: true }) +
    '</tbody></table>'
  const ciSortTable = ciTableOpen(['input x', 'f(x)', 'gets an output?']) +
    ciRow(['−2', '−0.5', 'yes']) +
    ciRow(['0.5', '2', 'yes'], { shade: true }) +
    ciRow(['0', 'undefined', 'no'], { color: '#a4243b', cols: [1, 2] }) +
    ciRow(['3', '0.333…', 'yes'], { shade: true }) +
    ciRow(['100', '0.01', 'yes'], { last: true }) +
    '</tbody></table>'
  const fpCiDomain = {
    kind: 'domainOpen', svgTitle: 'Domain of 1/x: every real number except 0', range: [-3, 3],
    rows: [
      { label: 'Dom f(x) = 1/x', color: 'f', segs: [[null, 0, false, true], [0, null, true]], tag: { text: 'x ≠ 0', x: 2 } },
    ],
    includedNote: 'allowed input', excludedNote: 'left out',
    caption: 'The whole line with one point removed',
  };

  const sectionsContent = {

    obj0 :{
  title: `Key Terms`,
  content: `
• [Domain](!/functions/definitions#domain) — the set of all valid inputs for a function
• [Range](!/functions/definitions#range) — the set of all outputs; domain and range together frame the complete picture
• [Function](!/functions/definitions#function) — a rule together with a domain; the function is incomplete without it
• [Inverse Function](!/functions/definitions#inverse_function) — restricting the domain can create an inverse where none existed
`,
  before: ``,
  after: `
 
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
  link: '',
},

  obj1: {
    title: `What is Domain`,
    content: `The domain of a function is the set of all inputs for which the function produces a valid output. It includes every value that can be substituted into the function and yield a real number result.

A function is not just a rule — it is a rule together with a domain. The expression $f(x) = x^2$ describes a rule, but the function is not complete until the domain is specified. Often the domain is implicit: all real numbers for which the formula makes sense. Sometimes it is explicitly restricted to match a context or application.

The domain answers a simple question: what can go in? For $f(x) = 2x + 5$, any real number works — there are no divisions, no roots, no restrictions. The domain is all real numbers, written $(-\\infty, \\infty)$ in interval notation or $\\mathbb{R}$ in set notation.

For $f(x) = 1/x$, the input $x = 0$ fails because division by zero is undefined. Every other real number works. The domain is all real numbers except zero: $(-\\infty, 0) \\cup (0, \\infty)$.

The domain is distinct from the [range](!/functions/range), which describes outputs rather than inputs. Together they frame the complete input-output picture of a function.`,
    before: ``,
    after: ``,
    link: '',
  },

  notation: {
    title: `Domain Notation`,
    lead: `Four spellings for one set: intervals, the set-builder bar, bare inequalities, and the union glue for disconnected pieces — all collected among the [function symbols](!/math-symbols/functions), and compared side by side in the table below. The number-line picture (solid dot in, open dot out) is the graphical twin of the bracket rules.`,
    inherited: `The inequality signs themselves — $<$, $\\leq$ and their chains — are owned by [inequality notation](!/algebra/inequalities/linear#notation), which also carries the endpoint fine print (Bourbaki's reversed brackets, the $\\infty$ rule's rationale); $f(x)$ comes from [function notation](!/functions/basics#5).`,
    entries: [
      {
        id: 'interval-brackets',
        tex: `$[2, 5)$`,
        read: `the interval from two, included, to five, excluded`,
        means: `Bracket in, parenthesis out: $[2, 5)$ holds everything from $2$ to $5$, keeping $2$, dropping $5$. One symbol pair per endpoint, each deciding membership independently.`,
        cases: `Infinity always takes the parenthesis — $(-\\infty, 3]$ — because no set reaches it; half-open intervals like $[0, 2\\pi)$ are the standard trick for one-copy-per-cycle work in [trigonometry](!/trigonometry/equations#notation).`,
        confusedWith: `A coordinate point. $(2, 5)$ is simultaneously an open interval and a point in the plane — and a [vector](!/linear-algebra/vectors/basic-operations#notation); only context says whether the pair is a set or a location.`,
      },
      {
        id: 'set-builder',
        tex: `$\\{x \\mid x \\geq 0\\}$`,
        read: `the set of all x such that x is at least zero`,
        means: `The set-builder bar: left of $\\mid$ names the variable, right of it states the admission test — "such that" is the reading. It handles conditions intervals cannot spell, and the braces are [set-theory marks](!/set-theory/basics) on loan.`,
        cases: `The colon variant $\\{x : x \\geq 0\\}$ is the same statement — common where the bar could collide with absolute value; fuller spellings declare the universe first: $\\{x \\in \\mathbb{R} \\mid x \\geq 0\\}$.`,
        confusedWith: `Divisibility's bar. In number theory $a \\mid b$ means "$a$ divides $b$" — the same stroke, an unrelated claim; inside braces it is always "such that".`,
      },
      {
        id: 'union-glue',
        tex: `$(-\\infty, -1) \\cup (1, \\infty)$`,
        read: `the union of two intervals`,
        means: `The glue for disconnected domains: $\\cup$ joins pieces into one set, reading as "or" — a number qualifies by landing in either interval. Rational functions manufacture these in **Finding Domain: Rational Functions** below.`,
        cases: `Each excluded point splits the line once — two exclusions, three pieces: $(-\\infty, -3) \\cup (-3, 3) \\cup (3, \\infty)$; the alternative spelling $\\mathbb{R} \\setminus \\{2\\}$ says "all reals except $2$" in one stroke.`,
        confusedWith: `Intersection. $\\cup$ collects, $\\cap$ filters — a domain written with $\\cap$ by reflex is usually empty; the cup opens upward to "hold everything", the standard memory hook.`,
      },
    ],
    symbolsHref: `/math-symbols/functions`,
    symbolsLabel: `All function symbols`,
    parentHref: `/functions`,
    parentLabel: `Functions`,
  },

  obj3: {
    title: `Natural Domain vs Restricted Domain`,
    content: `The natural domain of a function is the largest set of real numbers for which the formula produces real output. It is determined entirely by the algebraic expression — no external constraints, no contextual limitations.

@academic[fact,aside:true,width:35%:One root or two changes the domain
$\\sqrt{x - 1}\\,\\sqrt{x + 1}$ needs both radicands non-negative, so its natural domain is $[1, \\infty)$. Written as one root, $\\sqrt{x^2 - 1}$, it needs only the product to be non-negative, and the domain gains the whole ray $(-\\infty, -1]$.]@

For $f(x) = \\sqrt{x - 3}$, the natural domain is $[3, \\infty)$ because the radicand $x - 3$ must be non-negative. For $g(x) = \\ln(x)$, the natural domain is $(0, \\infty)$ because logarithms require positive arguments. The natural domain follows from the mathematics alone.

A restricted domain is a deliberate limitation imposed beyond what the formula requires. The function $f(x) = x^2$ has natural domain $(-\\infty, \\infty)$, but restricting to $[0, \\infty)$ makes the function one-to-one, which is necessary for constructing an [inverse](!/functions/inverse).

Context often restricts domain. A function modeling the height of a projectile might be $h(t) = -16t^2 + 64t$, which algebraically accepts any real $t$. But if the projectile launches at $t = 0$ and lands at $t = 4$, the meaningful domain is $[0, 4]$. Negative time and post-landing time carry no physical significance.

The implied domain is the natural domain assumed when no domain is explicitly stated. Unless context or instruction specifies otherwise, assume the domain is as large as the formula allows.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Finding Domain: Rational Functions`,
    content: `A rational function is a ratio of two polynomials.

@academic[rule_plain:The fundamental restriction is that the denominator cannot equal zero — division by zero is undefined.]@

To find the domain of a rational function, set the denominator equal to zero and solve. The solutions are the excluded values; everything else is in the domain.

For $f(x) = \\dfrac{x + 3}{x - 2}$, set $x - 2 = 0$ to find $x = 2$. The domain is all real numbers except $2$:

@academic[formula_callout:Finding Domain: Rational Functions
$$(-\\infty, 2) \\cup (2, \\infty)$$]@

For $g(x) = \\dfrac{5}{x^2 - 9}$, factor the denominator: $x^2 - 9 = (x-3)(x+3)$. Setting each factor to zero gives $x = 3$ and $x = -3$. The domain is:

@academic[formula_callout:Finding Domain: Rational Functions
$$(-\\infty, -3) \\cup (-3, 3) \\cup (3, \\infty)$$]@

For $h(x) = \\dfrac{x}{x^2 + 1}$, the denominator $x^2 + 1$ is always positive — it has no real roots. No value of $x$ makes it zero. The domain is all real numbers: $(-\\infty, \\infty)$.

@academic[pitfall,aside:true,width:35%:Cancelling before finding the domain
Simplifying $f(x) = \\dfrac{x^2 - 4}{x - 2}$ to $x + 2$ first and reading the domain from that gives all real numbers. The original denominator is zero at $x = 2$, so $f(2)$ is undefined and the domain is $(-\\infty, 2) \\cup (2, \\infty)$.
[Read more](!#pitfalls)]@

The numerator does not affect domain. A zero in the numerator makes the function equal zero, which is a valid output. Only zeros in the denominator create exclusions.

Some rational functions have a factor shared by the numerator and the denominator. Factoring both parts brings it into view, and cancelling it leaves a simpler formula that is easier to evaluate and to graph. At the value where the shared factor is zero, the graph shows a hole rather than a vertical asymptote.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Finding Domain: Radical Functions`,
    content: `Radical functions involve roots — square roots, cube roots, fourth roots, and so on. The domain restrictions depend on whether the root index is even or odd.

@academic[rule_plain:Even roots (square root, fourth root, sixth root) require the radicand to be non-negative.]@

Negative numbers have no real even roots. For $f(x) = \\sqrt{x - 5}$, the radicand $x - 5$ must satisfy $x - 5 \\geq 0$, giving $x \\geq 5$. The domain is $[5, \\infty)$.

@academic[fact,aside:true,width:35%:$x^x$ has a domain full of holes
For negative $x$, $x^x$ is real only when $x$ is a fraction whose denominator in lowest terms is odd: $(-\\frac{1}{3})^{-1/3} = -\\sqrt[3]{3}$, but $(-\\frac{1}{2})^{-1/2}$ needs the square root of a negative number. Both kinds of input lie between any two negative numbers, so on that side the domain contains no interval at all.]@

Odd roots (cube root, fifth root) accept any real number. The cube root of $-8$ is $-2$, a perfectly valid real number. For $g(x) = \\sqrt[3]{x - 5}$, no restriction applies. The domain is $(-\\infty, \\infty)$.

Fractional exponents follow the same rule, because $x^{\\frac{1}{n}}$ is another way to write $\\sqrt[n]{x}$. With the fraction in lowest terms, an odd denominator, as in $x^{\\frac{2}{3}}$, lets negative inputs through, while an even one, as in $x^{\\frac{3}{4}}$, shuts them out. When the exponent itself changes with the input, the denominator has to be checked again for every single $x$.

More complex radicands require solving inequalities. For $f(x) = \\sqrt{6 - 2x}$, set $6 - 2x \\geq 0$:

@academic[formula_callout:Finding Domain: Radical Functions
$$6 \\geq 2x$$]@
@academic[formula_callout:Finding Domain: Radical Functions
$$3 \\geq x$$]@

The domain is $(-\\infty, 3]$.

@academic[pitfall,aside:true,width:35%:Not flipping the inequality
Solving $6 - 2x \\geq 0$ as $-2x \\geq -6$ and then $x \\geq 3$ keeps the sign when dividing by $-2$. At $x = 4$ the radicand is $-2$; the sign must flip, giving $x \\leq 3$ and the domain $(-\\infty, 3]$.
[Read more](!#pitfalls)]@

The direction of the inequality carries the whole answer here: it decides whether the domain runs to the left or to the right of the boundary point $x = 3$. The boundary point itself is included, because a radicand of $0$ gives $\\sqrt{0} = 0$, a valid output.

Nested radicals compound the restrictions.

@academic[example:Example
For $f(x) = \\sqrt{\\sqrt{x} - 1}$, both layers impose conditions. The inner radical requires $x \\geq 0$. The outer radical requires $\\sqrt{x} - 1 \\geq 0$, which means $\\sqrt{x} \\geq 1$, so $x \\geq 1$. The domain is $[1, \\infty)$.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Finding Domain: Logarithmic Functions`,
    content: `@academic[rule_plain:Logarithmic functions require their argument to be strictly positive.]@

The logarithm of zero is undefined, and the logarithm of a negative number has no real value.

For $f(x) = \\log(x)$ or $f(x) = \\ln(x)$, the domain is $(0, \\infty)$ — all positive real numbers.

When the argument is an expression, set that expression greater than zero and solve. For $f(x) = \\ln(x - 4)$, require $x - 4 > 0$:

@academic[formula_callout:Finding Domain: Logarithmic Functions
$$x > 4$$]@

The domain is $(4, \\infty)$.

For $g(x) = \\log(3 - x)$, require $3 - x > 0$:

@academic[formula_callout:Finding Domain: Logarithmic Functions
$$3 > x$$]@

The domain is $(-\\infty, 3)$.

Quadratic or factorable arguments require careful sign analysis. For $h(x) = \\ln(x^2 - 4)$, factor: $x^2 - 4 = (x-2)(x+2)$. This expression is positive when $x < -2$ or $x > 2$. The domain is:

@academic[formula_callout:Finding Domain: Logarithmic Functions
$$(-\\infty, -2) \\cup (2, \\infty)$$]@

@academic[pitfall,aside:true,width:35%:Losing the negative interval
Treating $x^2 - 4 > 0$ like an equation, $x^2 > 4$ so $x > 2$, drops half the domain. At $x = -3$ the argument is $5$ and $\\ln(5)$ is defined; the domain is $(-\\infty, -2) \\cup (2, \\infty)$.
[Read more](!#pitfalls)]@

Sign analysis works with the roots of the argument, here $x = -2$ and $x = 2$. They split the number line into three intervals, and on each one $x^2 - 4$ keeps a single sign: positive on the two outer intervals, negative between the roots. Only the intervals where the argument is positive enter the domain.

Note the strict inequality: unlike square roots, logarithms exclude the boundary where the argument equals zero.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Finding Domain: Trigonometric Functions`,
    content: `The basic trigonometric functions sine and cosine accept all real numbers — they have no domain restrictions. But tangent, cotangent, secant, and cosecant are defined as ratios, and ratios fail when the denominator is zero.

Tangent is defined as $\\tan(x) = \\sin(x)/\\cos(x)$. It is undefined where $\\cos(x) = 0$, which occurs at $x = \\dfrac{\\pi}{2} + n\\pi$ for any integer $n$. The domain excludes these points.

Secant is $\\sec(x) = 1/\\cos(x)$, undefined at the same points as tangent.

Cotangent is $\\cot(x) = \\cos(x)/\\sin(x)$, undefined where $\\sin(x) = 0$: at $x = n\\pi$ for any integer $n$.

Cosecant is $\\csc(x) = 1/\\sin(x)$, undefined at the same points as cotangent.

Inverse trigonometric functions have restricted domains matching the ranges of the original functions. The function $\\arcsin(x)$ requires $-1 \\leq x \\leq 1$. The function $\\arccos(x)$ has the same restriction. The function $\\arctan(x)$ accepts all real numbers.

When trigonometric functions appear inside other operations, combine the restrictions. For $f(x) = \\sqrt{\\sin(x)}$, the domain consists of all $x$ where $\\sin(x) \\geq 0$ — the intervals where the sine function is non-negative.

The table below collects the six basic trigonometric functions with where each becomes undefined and the resulting domain exclusion.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Finding Domain: Combined Functions`,
    content: `@academic[rule_plain:When multiple operations appear in a single function, every restriction applies simultaneously. The domain is the intersection of all individual requirements.]@

@academic[example:Example
For $f(x) = \\dfrac{\\sqrt{x}}{x - 3}$, two restrictions arise. The square root requires $x \\geq 0$. The denominator requires $x \\neq 3$. Both must hold, so the domain is $[0, 3) \\cup (3, \\infty)$.]@

@academic[example:Example
For $g(x) = \\ln(x - 1) + \\sqrt{5 - x}$, the logarithm requires $x - 1 > 0$, giving $x > 1$. The square root requires $5 - x \\geq 0$, giving $x \\leq 5$. The intersection is $(1, 5]$.]@

@academic[example:Example
For $h(x) = \\dfrac{1}{\\sqrt{x - 2}}$, the square root requires $x - 2 \\geq 0$, and the denominator requires $\\sqrt{x-2} \\neq 0$. Together these demand $x - 2 > 0$, so $x > 2$. The domain is $(2, \\infty)$.]@

@academic[pitfall,aside:true,width:35%:Joining restrictions with or
Combining $x > 1$ and $x \\leq 5$ for $g(x) = \\ln(x - 1) + \\sqrt{5 - x}$ with "or" gives all real numbers. At $x = 6$, $\\sqrt{5 - 6} = \\sqrt{-1}$ is not real; both conditions must hold, so the domain is $(1, 5]$.
[Read more](!#pitfalls)]@

A systematic approach prevents errors: list each operation that imposes a restriction, solve each restriction separately, then intersect all the resulting conditions. Overlapping constraints narrow the domain; contradictory constraints can eliminate it entirely.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Domain from Graph`,
    content: `When a function is given as a graph rather than a formula, the domain is read as the horizontal extent — the set of $x$-values for which the graph exists.

@academic[pitfall,aside:true,width:35%:Reading the vertical extent
For a curve rising from a solid dot at $(-2, 1)$ to one at $(4, 7)$, reading the heights gives $[1, 7]$, which is the range. The domain is read along the $x$-axis: $[-2, 4]$.
[Read more](!#pitfalls)]@

Trace the graph from left to right. Where does it start? Where does it end? Does it continue indefinitely in either direction? The answers define the domain.

Solid dots indicate included endpoints. If the graph ends at a solid dot at $x = 3$, then $3$ is in the domain, and the interval is closed at that end: use a bracket.

Open dots indicate excluded endpoints. If the graph ends at an open dot at $x = 3$, then $3$ is not in the domain, and the interval is open at that end: use a parenthesis.

Vertical asymptotes signal domain exclusions. If the graph approaches but never touches a vertical line at $x = 2$, then $2$ is not in the domain. The domain splits into separate intervals on either side of the asymptote.

Gaps in the graph appear as breaks — intervals where no curve exists. A graph defined for $x < -1$ and $x > 1$ but missing in between has domain $(-\\infty, -1) \\cup (1, \\infty)$.

Arrows at the ends of a graph indicate indefinite continuation. An arrow pointing right means the graph extends toward $+\\infty$; an arrow pointing left means it extends toward $-\\infty$.

The table below collects the visual cues that signal domain features on a graph and the notation each implies.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Domain from Context`,
    content: `When a function models a real-world situation, the context imposes restrictions that pure algebra does not.

Time is typically non-negative. A function $h(t)$ giving the height of a ball after $t$ seconds has no meaning for $t < 0$. The domain starts at $t = 0$, regardless of whether the formula accepts negative values.

Quantities like length, area, population, and count must be non-negative. A function $A(r) = \\pi r^2$ giving the area of a circle requires $r \\geq 0$, even though the formula works for negative $r$.

Physical upper bounds also restrict domain. A function modeling the number of items produced in a day has a maximum determined by capacity. A function for temperature in a specific experiment operates within measured bounds.

Discrete quantities may restrict the domain to integers. A function $P(n)$ giving profit based on $n$ units sold makes sense only for whole numbers $n = 0, 1, 2, 3, \\ldots$

Contextual domain is a modeling decision, not a calculation. It requires understanding what the variables represent and what values are meaningful in the situation. A formula may allow $x = -5$, but if $x$ represents the number of employees, that value is nonsense.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Domain Rules at a Glance`,
    content: `Finding the domain reduces to a small set of restriction rules — one or two per function type. The table below collects the rule for each function type covered above with a representative example and the resulting domain. It works as a study card and as a checklist when analyzing an unfamiliar expression: identify the operations involved, look up each restriction, then intersect the results.`,
    before: ``,
    after: ``,
    link: '',
  },

  pitfalls: {
    title: `Common Pitfalls`,
    content: `Five mistakes come up again and again when finding a domain. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Cancelling before finding the domain**

A rational function is simplified first, by cancelling a factor shared by the numerator and the denominator, and the domain is then read from the simplified formula. The cancelled factor takes its zero with it, so a value the original function excludes slips back in.

Wrong working: $f(x) = \\dfrac{x^2 - 4}{x - 2} = \\dfrac{(x - 2)(x + 2)}{x - 2} = x + 2$, a line, so the domain is $(-\\infty, \\infty)$.

Right working: the domain comes from the original denominator. $x - 2 = 0$ gives $x = 2$, so the domain is $(-\\infty, 2) \\cup (2, \\infty)$. On that domain $f(x) = x + 2$, and the graph is the line $y = x + 2$ with a hole at $(2, 4)$.

Why it happens: the simplified formula looks like the same function and is easier to work with, and the cancellation hides the step where $x = 2$ was lost.

How to check: substitute each candidate exclusion into the formula as given. $f(2) = \\dfrac{4 - 4}{2 - 2} = \\dfrac{0}{0}$, which is undefined, so $2$ cannot be in the domain.

**Not flipping the inequality**

The radicand condition is solved by dividing by a negative number, and the inequality sign is kept as it was. The domain then lands on the wrong side of the boundary point.

Wrong working: $6 - 2x \\geq 0$, so $-2x \\geq -6$, so $x \\geq 3$, and the domain is given as $[3, \\infty)$.

Right working: dividing by $-2$ reverses the sign, so $-2x \\geq -6$ gives $x \\leq 3$ and the domain is $(-\\infty, 3]$. Moving $2x$ to the other side, as in the section above, avoids the division altogether: $6 \\geq 2x$, so $3 \\geq x$.

Why it happens: in equations, dividing both sides by a negative number needs no extra care, and the habit is carried over to inequalities.

How to check: test a value from the claimed domain. $x = 4$ gives $\\sqrt{6 - 8} = \\sqrt{-2}$, which is not real, so $[3, \\infty)$ cannot be right; $x = 0$ gives $\\sqrt{6}$, which is real.

**Losing the negative interval**

A quadratic condition on a logarithm's argument is solved like an equation: the square root of both sides is taken and only the positive root is kept. The interval to the left of the negative root disappears.

Wrong working: $x^2 - 4 > 0$, so $x^2 > 4$, so $x > 2$, and the domain is given as $(2, \\infty)$.

Right working: $x^2 > 4$ means $|x| > 2$, that is $x < -2$ or $x > 2$. Sign analysis of $(x - 2)(x + 2)$ agrees: positive for $x < -2$, negative for $-2 < x < 2$, positive for $x > 2$. The domain is $(-\\infty, -2) \\cup (2, \\infty)$.

Why it happens: square roots are usually taken as positive, and for an inequality the square root step really produces an absolute value, which splits into two pieces.

How to check: test a negative value. $x = -3$ gives $x^2 - 4 = 9 - 4 = 5 > 0$, so $\\ln(5)$ exists and $-3$ belongs to the domain.

**Joining restrictions with or**

Each restriction of a combined function is solved correctly, but the results are joined as a union, as if meeting any one condition were enough.

Wrong working: for $g(x) = \\ln(x - 1) + \\sqrt{5 - x}$, the conditions are $x > 1$ or $x \\leq 5$. Every real number satisfies at least one of them, so the domain is given as $(-\\infty, \\infty)$.

Right working: both parts must be defined at the same input, so both conditions must hold at once: $x > 1$ and $x \\leq 5$. The domain is the intersection, $(1, 5]$.

Why it happens: each condition reads like a list of allowed values, and lists are merged by collecting. Domains of a single restriction are also often written with $\\cup$, which makes the union feel like the normal way to join pieces.

How to check: test a value outside the intersection. At $x = 6$, $\\ln(5)$ exists but $\\sqrt{-1}$ does not; at $x = 0$, $\\sqrt{5}$ exists but $\\ln(-1)$ does not. In both cases $g$ is undefined.

**Reading the vertical extent**

On a graph, the domain is read off the vertical axis, from the heights the curve covers. That set is the range, not the domain.

Wrong working: a curve rises from a solid dot at $(-2, 1)$ to a solid dot at $(4, 7)$. It covers heights from $1$ to $7$, so the domain is given as $[1, 7]$.

Right working: the domain is the horizontal extent. The curve starts at $x = -2$ and ends at $x = 4$, both endpoints included, so the domain is $[-2, 4]$. The interval $[1, 7]$ is the range.

Why it happens: domain and range are learned together, and on a graph both are intervals read off an axis, so the axes are easily swapped.

How to check: the domain is a set of inputs, and inputs sit on the horizontal axis. A vertical line at $x = -2$ touches the graph; one at $x = -3$ misses it, so $-3$ is outside the domain.`,
    before: ``,
    after: ``,
    link: '',
  },

  faq: {
    title: `Domain FAQ`,
  },
}


 const introContent = {
  id: "intro",
  title: "Where Functions Live",
  content: `Every function has boundaries. Some inputs work, others do not. The square root function refuses negative numbers. The reciprocal function cannot accept zero. A function modeling time accepts no moments before the clock starts.

The domain is the complete set of inputs for which the function produces valid output. It answers the question: what values can this function actually process? Finding the domain means identifying every restriction — every value that causes division by zero, every radicand that turns negative, every argument that falls outside the reach of the rule.`
}



const faqQuestions = {
  obj1: {
    question: "Why can't the denominator be zero when finding a domain?",
    answer: "Because division by zero produces no number at all, so the function has no output there. Finding the domain of a fraction therefore means solving for the values that make the bottom vanish and excluding exactly those. Every other real number stays in, however awkward the expression looks.",
    sectionId: "4"
  },
  obj2: {
    question: "What is the domain of a radical function with an even root?",
    answer: "Everything that keeps the expression under the root non-negative. Even roots of negative numbers have no real value, so you set the radicand greater than or equal to zero and solve. Odd roots have no such restriction, since cube roots of negatives exist, which is why the parity of the root matters.",
    sectionId: "5"
  },
  obj3: {
    question: "Why does the domain of a logarithm exclude zero and negative numbers?",
    answer: "Because a logarithm asks what power produces a given value, and raising a positive base to any real power always yields a positive result. No exponent produces zero or a negative number, so the question has no answer there. The argument of the log must therefore be strictly greater than zero.",
    sectionId: "6"
  },
  obj4: {
    question: "How do you find the domain of a function with both a fraction and a square root?",
    answer: "Apply every restriction and keep only what survives all of them. Set the even radicand to be non-negative, set each denominator to be non-zero, and take the intersection of the resulting sets. Missing one condition is the usual failure, since each part of the expression restricts the domain independently.",
    sectionId: "8"
  },
  obj5: {
    question: "What is the difference between interval notation and set-builder notation?",
    answer: "Interval notation lists the endpoints with brackets, using square brackets when the endpoint is included and round ones when it is not. Set-builder states a condition instead, as the set of all x satisfying some inequality. Both describe the same collection; interval notation is more compact, set-builder more flexible for scattered exclusions.",
    sectionId: "2"
  }
}

  const seoData = {
    title: "Domain of a Function - How to Find It | Learn Math Class",
    description: "Learn how to find the domain of any function including rational, radical, logarithmic, and composite functions. Step-by-step methods with interval notation examples.",
    keywords: keyWords.join(", "),
    url: "/functions/domain",
    name: "Domain of a Function",
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "inLanguage": "en-US",
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com",
      },
      "teaches": [
        "What is the domain of a function",
        "How to express domain using interval and set-builder notation",
        "Natural domain versus restricted domain",
        "Finding domain of rational and radical functions",
        "Finding domain of logarithmic and trigonometric functions",
        "How to determine domain from a graph or real-world context",
      ],
      "educationalLevel": "High School",
      "learningResourceType": "Article",
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seoData.name,
          "item": `https://www.learnmathclass.com${seoData.url}`,
        },
      ],
    },
  }


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpNaturalRestricted = {
    kind: 'domain', svgTitle: 'Natural domain of h(t) against the restricted domain [0, 4]', range: [-2, 7],
    rows: [
      { label: 'natural domain of h(t) = −16t² + 64t', from: null, to: null, color: 'f', tag: { text: '(−∞, ∞)', x: 5.5 } },
      { label: 'restricted by the flight: launch to landing', from: 0, to: 4, color: 'r', tag: { text: '[0, 4]', x: 5.6 } },
    ],
    caption: 'The formula accepts every t; the situation keeps only 0 ≤ t ≤ 4',
  };

  const fpCombinedDomain = {
    kind: 'domainOpen', svgTitle: 'Domain of sqrt(x)/(x - 3): [0, 3) union (3, inf)', range: [-2, 7],
    rows: [
      { label: 'the root needs x ≥ 0', color: 'f', segs: [[0, null, false]], tag: { text: '[0, ∞)', x: 5.5 } },
      { label: 'the denominator needs x − 3 ≠ 0', color: 'g', segs: [[null, 3, false, true], [3, null, true]], tag: { text: 'x ≠ 3', x: 5.5 } },
      { label: 'Dom f(x) = √x / (x − 3)', color: 'r', segs: [[0, 3, false, true], [3, null, true]], tag: { text: '[0, 3) ∪ (3, ∞)', x: 5.2 } },
    ],
    caption: 'All restrictions at once: keep only inputs that pass every one',
  };

  const conceptIntroFigures = {
    candTable: ciCandTable,
    sortTable: ciSortTable,
    line: renderFunctionPlotV2(fpCiDomain),
  };

  const demoUnits = {
    rational: demoUnitFrame({
      svg: functionDomainDiagrams.reciprocal,
      caption: 'f(x) = 1/x: every real except 0',
      text: 'The band on the axis covers the whole line except for one open dot at 0, where the denominator vanishes and the curve breaks into two branches. Everything else is a valid input. Move to a rational function with two excluded points on the',
      href: '/functions/visual-tools/domain',
      linkText: 'domain explorer',
    }),
    radical: demoUnitFrame({
      svg: functionDomainDiagrams.sqrt,
      caption: 'f(x) = &#8730;x: inputs from 0 onward',
      text: 'Negative inputs have no real square root, so the band starts at 0 with a closed dot, 0 itself being allowed, and runs to the right. An odd root would have no such cut. Compare the square root with the logarithm, whose cut is open, on the',
      href: '/functions/visual-tools/domain',
      linkText: 'domain explorer',
    }),
    log: demoUnitFrame({
      svg: functionDomainDiagrams.logarithmic,
      caption: 'f(x) = ln x: inputs strictly greater than 0',
      text: 'The band covers only the positive half of the axis and the dot at 0 is open: the logarithm of 0 is undefined and the curve plunges toward the vertical asymptote there without ever reaching it. This is the one restriction with a strict inequality. See the asymptote and the open endpoint together on the',
      href: '/functions/visual-tools/domain',
      linkText: 'domain explorer',
    }),
    allReals: demoUnitFrame({
      svg: functionDomainDiagrams.linearScale,
      caption: 'Nothing to rule out',
      text: 'A line like f(x) = 2x has no division, no root and no logarithm, so no input can fail: the graph runs on forever in both directions and every real number on the x-axis has a point above or below it. The domain is (&#8722;&#8734;, &#8734;). Compare functions with real restrictions on the',
      href: '/functions/visual-tools/domain',
      linkText: 'domain visualizer',
    }),
    naturalRestricted: demoUnitFrame({
      svg: renderFunctionPlot(fpNaturalRestricted),
      caption: 'What the formula allows, what the situation allows',
      text: 'The projectile\'s height formula h(t) = &#8722;16t&#178; + 64t gives an output for every real t, so its natural domain is all real numbers. The situation keeps only the flight itself: from launch at t = 0 to landing at t = 4. The restricted domain [0, 4] is a choice made outside the formula, sitting inside the natural domain.',
    }),
    combinedDomain: demoUnitFrame({
      svg: renderFunctionPlotV2(fpCombinedDomain),
      caption: 'Two restrictions, one domain',
      text: 'f(x) = &#8730;x / (x &#8722; 3), the section\'s first example. The square root keeps x &#8805; 0; the denominator removes the single point x = 3. Writing each restriction on its own line and keeping only what survives both gives [0, 3) &#8746; (3, &#8734;): 0 is included (filled dot), 3 is excluded (hollow dot).',
    }),
  };

   return {
      props:{
    demoUnits,
    conceptIntroFigures,
         sectionsContent,
         introContent,
         obj2Table,
         obj7Table,
         obj9Table,
         summaryTable,
         faqQuestions,
         schemas,
          seoData: {
        title: "Domain of a Function - How to Find It | Learn Math Class",
        description: "Learn how to find the domain of any function including rational, radical, logarithmic, and composite functions. Step-by-step methods with interval notation examples.",
        keywords: keyWords.join(", "),
        url: "/functions/domain",
         name: "Domain of a Function"
      },
       }
    }
   }

export default function DomainPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj7Table,
  obj9Table,
  summaryTable,
  faqQuestions,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template G (exclusion).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `Feed some numbers into f(x) = 1/x: they all look like reasonable inputs.`,
        content: [
          `Negative, fractional, zero, small, large — nothing about these five numbers suggests that any of them should be refused.`,
          ciTable('candTable'),
        ],
      },
      {
        id: 'sort',
        kind: 'instance',
        lead: `Four of them come back with an output; one does not.`,
        content: [
          ciTable('sortTable'),
        ],
      },
      {
        id: 'fault',
        lead: `0 fails because 1 ÷ 0 has no answer; the others pass because division by anything else is fine.`,
        content: [
          `$1 \\div 0$ would have to be a number that gives $1$ when multiplied by $0$, and every number times $0$ is $0$. Nothing about the size or sign of an input matters here: $-2$ and $100$ pass just as easily as $0.5$. The only thing $\\frac{1}{x}$ cannot survive is a zero in its denominator.`,
        ],
      },
      {
        id: 'rule',
        lead: `The rule: an input is allowed exactly when the formula can be carried out on it.`,
        content: [
          `Think of a ticket barrier: it does not care who you are, only whether your ticket works. For $\\frac{1}{x}$ every ticket works except $0$.`,
          `For $f(x) = 1/x$, the input $x = 0$ fails because division by zero is undefined. Every other real number works. The domain is all real numbers except zero: $(-\\infty, 0) \\cup (0, \\infty)$.`,
        ],
        visual: ciSvg('line'),
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The [domain](!/functions/definitions#domain) of a function is the set of all inputs for which it produces a valid output.`,
        footer: `So the domain of $f(x) = \\frac{1}{x}$ is every real number except $0$: $(-\\infty, 0) \\cup (0, \\infty)$.`,
      },
      {
        id: 'kind',
        lead: `A domain is a set of numbers, and it is part of the function itself.`,
        content: [
          `The domain of a function is the set of all inputs for which the function produces a valid output. It includes every value that can be substituted into the function and yield a real number result.`,
          `A function is not just a rule — it is a rule together with a domain. The expression $f(x) = x^2$ describes a rule, but the function is not complete until the domain is specified. Often the domain is implicit: all real numbers for which the formula makes sense. Sometimes it is explicitly restricted to match a context or application.`,
          `The domain answers a simple question: what can go in? For $f(x) = 2x + 5$, any real number works — there are no divisions, no roots, no restrictions. The domain is all real numbers, written $(-\\infty, \\infty)$ in interval notation or $\\mathbb{R}$ in set notation.`,
          <div key={'unit-allReals'} dangerouslySetInnerHTML={{ __html: demoUnits.allReals }} />,
          `For f(x) = 1/x the picture changes: a single gap at x = 0 is all that is missing.`,
        ],
      },
      {
        id: 'caveat',
        lead: `The rejected input is not lost for good: a different function can take it in.`,
        content: [
          `$0$ is outside the domain of $\\frac{1}{x}$, but nothing stops a new function from using the same formula for $x \\neq 0$ and a separate value at $0$ — it is simply a different function, with a different domain. Domains can also be cut down on purpose, as the next sections on [natural and restricted domains](!/functions/domain#3) show.`,
          `The domain is distinct from the [range](!/functions/range), which describes outputs rather than inputs. Together they frame the complete input-output picture of a function.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers domain notation, natural and restricted domains, finding the domain of rational, radical, logarithmic, trigonometric and combined functions, and reading the domain from a graph or a context.`,
      },
    ],
  }

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
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
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
          <div key={'unit-naturalRestricted'} dangerouslySetInnerHTML={{ __html: demoUnits.naturalRestricted }} />,
          `A restricted domain can never be larger than the natural one: it only removes inputs the formula would otherwise accept.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
                  <div key={'unit-rational'} dangerouslySetInnerHTML={{ __html: demoUnits.rational }} />,
          `The excluded values are the vertical asymptotes or holes of the graph.`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
                  <div key={'unit-radical'} dangerouslySetInnerHTML={{ __html: demoUnits.radical }} />,
          `Whether the endpoint is included is the difference between the closed dot here and the open one for the logarithm.`,
          `@academic[punchline:The index decides: even roots refuse negative radicands, odd roots accept every real number.]@`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
                  <div key={'unit-log'} dangerouslySetInnerHTML={{ __html: demoUnits.log }} />,
          `Combined functions intersect all such restrictions, which the next section takes up.`,
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
          `@academic[punchline:Sine and cosine take every input; the other four fail exactly where the sine or cosine they divide by is zero.]@`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'unit-combinedDomain'} dangerouslySetInnerHTML={{ __html: demoUnits.combinedDomain }} />,
          `The same line-by-line method handles any number of restrictions: one line per requirement, then the overlap.`,
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
          `@academic[punchline:On a graph, the domain is the shadow the curve casts on the x-axis.]@`,
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
        id:'pitfalls',
        title:sectionsContent.pitfalls.title,
        link:sectionsContent.pitfalls.link,
        content:[
          sectionsContent.pitfalls.content,
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
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },

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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Domain of a Function</h1>
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