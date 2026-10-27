// // // tables-optimized: v4 | 2026-05-24 | 2 tables (obj3 comparison, obj11 summary capstone)
// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import React from 'react'
// // import '../../../../pages/pages.css'
// // import Head from 'next/head'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // import { tableHeaders } from '@/app/styles/theme'


// // export async function getStaticProps(){
// // const keyWords = [
// //   "one-sided limits",
// //   "left-hand limit",
// //   "right-hand limit",
// //   "limit from the left",
// //   "limit from the right",
// //   "x approaches a minus",
// //   "x approaches a plus",
// //   "one-sided limit notation",
// //   "piecewise function limits",
// //   "jump discontinuity",
// //   "one-sided limit examples",
// //   "evaluate one-sided limits",
// //   "vertical asymptote one-sided",
// //   "one-sided continuity"
// // ]

// // const linkStyle = 'color: inherit; text-decoration: underline;'

// // // ─── TABLES ───────────────────────────────────────────────────────────────

// // // obj3 — comparison (decision matrix): two-sided existence given LHL & RHL
// // const obj3Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.comparison}">Left-hand limit at a</th>
// //       <th style="${tableHeaders.comparison}">Right-hand limit at a</th>
// //       <th style="${tableHeaders.comparison} text-align: center;">Match?</th>
// //       <th style="${tableHeaders.comparison}">Two-sided limit at a</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">exists, = L</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, = L</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, equals L</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">exists, = L<sub>1</sub></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, = L<sub>2</sub> ≠ L<sub>1</sub></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does not exist (jump-style failure)</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">exists</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does not exist</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">—</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does not exist</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">does not exist</td>
// //       <td style="padding: 12px 15px; color: #34495e;">exists or does not exist</td>
// //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">—</td>
// //       <td style="padding: 12px 15px; color: #34495e;">does not exist</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // obj11 — summary capstone: situations requiring one-sided analysis
// // const summaryTable = `
// // <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.summary}">Situation</th>
// //       <th style="${tableHeaders.summary}">Why one-sided analysis is required</th>
// //       <th style="${tableHeaders.summary}">Pattern of one-sided limits</th>
// //       <th style="${tableHeaders.summary} text-align: center;">Section</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Piecewise function at a boundary</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a different formula applies on each side of the boundary</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use the left-side formula for LHL, the right-side formula for RHL; check whether they agree</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj4</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Jump discontinuity</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function jumps from one value to another at the point</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">LHL = L<sub>1</sub>, RHL = L<sub>2</sub>, with L<sub>1</sub> ≠ L<sub>2</sub>; both finite</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj5</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical asymptote</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function is unbounded near the point; signs may differ by direction</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">LHL = ±∞ and RHL = ±∞, possibly with opposite signs — see <a href="/calculus/limits/infinity" style="${linkStyle}">limits and infinity</a></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj6</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Domain boundary (radicals, etc.)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function is only defined on one side of the boundary point</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">only one one-sided limit is meaningful; the other isn&apos;t defined</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj7</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Closed-interval endpoint</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuity at a or b on [a, b] can only be tested from inside the interval</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuous-from-right at a, continuous-from-left at b</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj9</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Corner point (one-sided derivatives)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">instantaneous rate of change differs left vs right at a kink</td>
// //       <td style="padding: 12px 15px; color: #34495e;">left-derivative ≠ right-derivative ⇒ function is not differentiable at the point</td>
// //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">obj10</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // const sectionsContent = {
// // //   // ─── /calculus/limits/one-sided ───────────────────────────────────────────

// // //   obj0: {
// // //     title: `Key Terms`,
// // //     content: `
// // // - [One-Sided Limit](!/calculus/definitions#one_sided_limit) — limit from one direction: $\\lim_{x \\to a^-}$ or $\\lim_{x \\to a^+}$
// // // - [Limit](!/calculus/definitions#limit) — exists when both one-sided limits agree
// // // - [Discontinuity](!/calculus/definitions#discontinuity) — jump discontinuities have differing one-sided limits
// // // - [Continuity](!/calculus/definitions#continuity) — one-sided continuity at interval endpoints`,
// // //     before: ``,
// // //     after: `
// // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
// // //     link: '',
// // //   },

// // //   obj1: {
// // //     title: `Left-Hand Limits`,
// // //     content: `
// // // The left-hand limit uses a minus superscript:

// // // $$\\lim_{x \\to a^-} f(x)$$

// // // This notation means $x$ approaches $a$ through values strictly less than $a$. You move along the $x$-axis from the left, getting closer to $a$ but never reaching or passing it.

// // // Alternative notations include $\\lim_{x \\to a-} f(x)$ and $\\lim_{x \\uparrow a} f(x)$. Some texts describe this as approaching "from below" since smaller $x$-values lie below $a$ on the number line.

// // // The left-hand limit asks: as $x$ increases toward $a$, what value does $f(x)$ approach?
// // // `,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``
// // //   },
// // //   obj2: {
// // //     title: `Right-Hand Limits`,
// // //     content: `
// // // The right-hand limit uses a plus superscript:

// // // $$\\lim_{x \\to a^+} f(x)$$

// // // This notation means $x$ approaches $a$ through values strictly greater than $a$. You move along the $x$-axis from the right, getting closer to $a$ but never reaching or passing it.

// // // Alternative notations include $\\lim_{x \\to a+} f(x)$ and $\\lim_{x \\downarrow a} f(x)$. Some texts describe this as approaching "from above" since larger $x$-values lie above $a$ on the number line.

// // // The right-hand limit asks: as $x$ decreases toward $a$, what value does $f(x)$ approach?
// // // `,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``
// // //   },
// // //   obj3: {
// // //     title: `The Connection to Two-Sided Limits`,
// // //     content: `
// // // The [two-sided limit](!/calculus/limits/two-sided) exists if and only if both one-sided limits exist and are equal:

// // // $$\\lim_{x \\to a} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$

// // // One-sided limits decompose the two-sided limit into its directional components. Checking whether a two-sided limit exists often begins with computing the one-sided limits separately.

// // // If the one-sided limits exist but differ, the two-sided limit does not exist. If either one-sided limit fails to exist (due to oscillation or unbounded behavior), the two-sided limit also fails.
// // // `,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``
// // //   },
// // //   obj4: {
// // //     title: `Piecewise Functions`,
// // //     content: `
// // // Functions defined by different formulas on different intervals require one-sided limit analysis at the boundaries between pieces.

// // // Consider:

// // // $$f(x) = \\begin{cases} x^2 & x < 2 \\\\ 3x - 2 & x \\geq 2 \\end{cases}$$

// // // At $x = 2$, the left-hand limit uses the formula $x^2$:

// // // $$\\lim_{x \\to 2^-} x^2 = 4$$

// // // The right-hand limit uses the formula $3x - 2$:

// // // $$\\lim_{x \\to 2^+} (3x - 2) = 4$$

// // // Since both one-sided limits equal $4$, the two-sided limit exists and equals $4$. If the formulas had produced different values, the two-sided limit would not exist.
// // // `,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``
// // //   },
// // //   obj5: {
// // //     title: `Jump Discontinuities`,
// // //     content: `
// // // A [jump discontinuity](!/calculus/limits/continuity) occurs when both one-sided limits exist but differ. The function "jumps" from one value to another at the point.

// // // The floor function $\\lfloor x \\rfloor$ provides a standard example. At any integer $n$:

// // // $$\\lim_{x \\to n^-} \\lfloor x \\rfloor = n - 1$$

// // // $$\\lim_{x \\to n^+} \\lfloor x \\rfloor = n$$

// // // The left-hand limit gives the integer below, while the right-hand limit gives the integer itself. The function jumps by $1$ at each integer. No two-sided limit exists at these points because the one-sided limits disagree.
// // // `,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``
// // //   },
// // //   obj6: {
// // //     title: `One-Sided Limits at Vertical Asymptotes`,
// // //     content: `
// // // Near a vertical asymptote, one-sided limits typically equal $+\\infty$ or $-\\infty$. The sign can differ depending on the direction of approach.

// // // For $f(x) = \\dfrac{1}{x - 2}$:

// // // $$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty$$

// // // $$\\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$

// // // From the left, $x - 2$ is a small negative number, so the reciprocal is a large negative number. From the right, $x - 2$ is a small positive number, so the reciprocal is a large positive number.

// // // The [limits and infinity](!/calculus/limits/infinity) page covers infinite limits in detail.
// // // `,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``
// // //   },
// // //   obj7: {
// // //     title: `One-Sided Limits and Square Roots`,
// // //     content: `
// // // Expressions involving square roots often force one-sided analysis due to domain restrictions.

// // // The expression $\\sqrt{4 - x}$ requires $4 - x \\geq 0$, meaning $x \\leq 4$. At $x = 4$, only the left-hand limit is meaningful:

// // // $$\\lim_{x \\to 4^-} \\sqrt{4 - x} = 0$$

// // // Similarly, $\\sqrt{x - 4}$ requires $x \\geq 4$, so at $x = 4$, only the right-hand limit applies:

// // // $$\\lim_{x \\to 4^+} \\sqrt{x - 4} = 0$$

// // // Domain boundaries naturally restrict limits to one side.
// // // `,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``
// // //   },
// // //   obj8: {
// // //     title: `Evaluating One-Sided Limits`,
// // //     content: `
// // // The same [techniques](!/calculus/limits/evaluating) used for two-sided limits apply: direct substitution, factoring, rationalizing. The difference lies in tracking which side you approach from.

// // // Sign analysis becomes critical. For the expression $\\dfrac{|x|}{x}$:

// // // $$\\lim_{x \\to 0^+} \\frac{|x|}{x} = \\frac{x}{x} = 1$$

// // // $$\\lim_{x \\to 0^-} \\frac{|x|}{x} = \\frac{-x}{x} = -1$$

// // // When $x > 0$, the absolute value $|x| = x$. When $x < 0$, the absolute value $|x| = -x$. The direction of approach determines which case applies.
// // // `,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``
// // //   },
// // //   obj9: {
// // //     title: `One-Sided Continuity`,
// // //     content: `
// // // A function can be [continuous](!/calculus/limits/continuity) from one side without being continuous from the other.

// // // Continuous from the left at $a$:

// // // $$\\lim_{x \\to a^-} f(x) = f(a)$$

// // // Continuous from the right at $a$:

// // // $$\\lim_{x \\to a^+} f(x) = f(a)$$

// // // Full continuity at $a$ requires both. On a closed interval $[a, b]$, continuity means: continuous on the open interval $(a, b)$, continuous from the right at $a$, and continuous from the left at $b$.
// // // `,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``
// // //   },
// // //   obj10: {
// // //     title: `Applications of One-Sided Limits`,
// // //     content: `
// // // One-sided limits appear throughout calculus and its applications.

// // // ## Endpoint Behavior

// // // On closed intervals, function behavior at endpoints can only be examined from one direction. The limit from within the interval captures the boundary behavior.

// // // ## Classifying Discontinuities

// // // Determining whether a discontinuity is a jump, removable, or infinite requires comparing one-sided limits to each other and to the function value.

// // // ## Piecewise Models

// // // Real-world models often switch formulas at threshold values—tax brackets, shipping rates, material phase changes. One-sided limits detect whether the transition is smooth or abrupt.

// // // ## One-Sided Derivatives

// // // A function may have different instantaneous rates of change from the left and right at a corner point. One-sided derivatives capture this asymmetry.
// // // `,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``
// // //   },
// // //   obj11: {
// // //     title: `Summary: Where One-Sided Limits Are Essential`,
// // //     content: `
// // // One-sided limits aren&apos;t just a finer-grained version of the two-sided limit — they&apos;re the right tool for a handful of specific situations where two-sided analysis either fails or doesn&apos;t apply. The table below collects six such situations, pairing each with its diagnostic pattern: what the LHL and RHL typically look like, and why the one-sided form is structurally required. Recognizing the situation often points directly at the right technique.
// // // `,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``
// // //   }
// // // };


// // // formulas-optimized: v1 | 2026-06-09 | 1 callout (obj9)
// // const sectionsContent = {
// //   // ─── /calculus/limits/one-sided ───────────────────────────────────────────

// //   obj0: {
// //     title: `Key Terms`,
// //     content: `
// // - [One-Sided Limit](!/calculus/definitions#one_sided_limit) — limit from one direction: $\\lim_{x \\to a^-}$ or $\\lim_{x \\to a^+}$
// // - [Limit](!/calculus/definitions#limit) — exists when both one-sided limits agree
// // - [Discontinuity](!/calculus/definitions#discontinuity) — jump discontinuities have differing one-sided limits
// // - [Continuity](!/calculus/definitions#continuity) — one-sided continuity at interval endpoints`,
// //     before: ``,
// //     after: `
// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
// //     link: '',
// //   },

// //   obj1: {
// //     title: `Left-Hand Limits`,
// //     content: `
// // The left-hand limit uses a minus superscript:

// // $$\\lim_{x \\to a^-} f(x)$$

// // This notation means $x$ approaches $a$ through values strictly less than $a$. You move along the $x$-axis from the left, getting closer to $a$ but never reaching or passing it.

// // Alternative notations include $\\lim_{x \\to a-} f(x)$ and $\\lim_{x \\uparrow a} f(x)$. Some texts describe this as approaching "from below" since smaller $x$-values lie below $a$ on the number line. All the variants appear among the [calculus symbols](!/math-symbols/calculus).

// // The left-hand limit asks: as $x$ increases toward $a$, what value does $f(x)$ approach?
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj2: {
// //     title: `Right-Hand Limits`,
// //     content: `
// // The right-hand limit uses a plus superscript:

// // $$\\lim_{x \\to a^+} f(x)$$

// // This notation means $x$ approaches $a$ through values strictly greater than $a$. You move along the $x$-axis from the right, getting closer to $a$ but never reaching or passing it.

// // Alternative notations include $\\lim_{x \\to a+} f(x)$ and $\\lim_{x \\downarrow a} f(x)$. Some texts describe this as approaching "from above" since larger $x$-values lie above $a$ on the number line.

// // The right-hand limit asks: as $x$ decreases toward $a$, what value does $f(x)$ approach?
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj3: {
// //     title: `The Connection to Two-Sided Limits`,
// //     content: `
// // The [two-sided limit](!/calculus/limits/two-sided) exists if and only if both one-sided limits exist and are equal:

// // $$\\lim_{x \\to a} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$

// // One-sided limits decompose the two-sided limit into its directional components. Checking whether a two-sided limit exists often begins with computing the one-sided limits separately.

// // If the one-sided limits exist but differ, the two-sided limit does not exist. If either one-sided limit fails to exist (due to oscillation or unbounded behavior), the two-sided limit also fails.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj4: {
// //     title: `Piecewise Functions`,
// //     content: `
// // Functions defined by different formulas on different intervals require one-sided limit analysis at the boundaries between pieces.

// // Consider:

// // $$f(x) = \\begin{cases} x^2 & x < 2 \\\\ 3x - 2 & x \\geq 2 \\end{cases}$$

// // At $x = 2$, the left-hand limit uses the formula $x^2$:

// // $$\\lim_{x \\to 2^-} x^2 = 4$$

// // The right-hand limit uses the formula $3x - 2$:

// // $$\\lim_{x \\to 2^+} (3x - 2) = 4$$

// // Since both one-sided limits equal $4$, the two-sided limit exists and equals $4$. If the formulas had produced different values, the two-sided limit would not exist.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj5: {
// //     title: `Jump Discontinuities`,
// //     content: `
// // A [jump discontinuity](!/calculus/limits/continuity) occurs when both one-sided limits exist but differ. The function "jumps" from one value to another at the point.

// // The floor function $\\lfloor x \\rfloor$ provides a standard example. At any integer $n$:

// // $$\\lim_{x \\to n^-} \\lfloor x \\rfloor = n - 1$$

// // $$\\lim_{x \\to n^+} \\lfloor x \\rfloor = n$$

// // The left-hand limit gives the integer below, while the right-hand limit gives the integer itself. The function jumps by $1$ at each integer. No two-sided limit exists at these points because the one-sided limits disagree.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj6: {
// //     title: `One-Sided Limits at Vertical Asymptotes`,
// //     content: `
// // Near a vertical asymptote, one-sided limits typically equal $+\\infty$ or $-\\infty$. The sign can differ depending on the direction of approach.

// // For $f(x) = \\dfrac{1}{x - 2}$:

// // $$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty$$

// // $$\\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$

// // From the left, $x - 2$ is a small negative number, so the reciprocal is a large negative number. From the right, $x - 2$ is a small positive number, so the reciprocal is a large positive number.

// // The [limits and infinity](!/calculus/limits/infinity) page covers infinite limits in detail.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj7: {
// //     title: `One-Sided Limits and Square Roots`,
// //     content: `
// // Expressions involving square roots often force one-sided analysis due to domain restrictions.

// // The expression $\\sqrt{4 - x}$ requires $4 - x \\geq 0$, meaning $x \\leq 4$. At $x = 4$, only the left-hand limit is meaningful:

// // $$\\lim_{x \\to 4^-} \\sqrt{4 - x} = 0$$

// // Similarly, $\\sqrt{x - 4}$ requires $x \\geq 4$, so at $x = 4$, only the right-hand limit applies:

// // $$\\lim_{x \\to 4^+} \\sqrt{x - 4} = 0$$

// // Domain boundaries naturally restrict limits to one side.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj8: {
// //     title: `Evaluating One-Sided Limits`,
// //     content: `
// // The same [techniques](!/calculus/limits/evaluating) used for two-sided limits apply: direct substitution, factoring, rationalizing. The difference lies in tracking which side you approach from.

// // Sign analysis becomes critical. For the expression $\\dfrac{|x|}{x}$:

// // $$\\lim_{x \\to 0^+} \\frac{|x|}{x} = \\frac{x}{x} = 1$$

// // $$\\lim_{x \\to 0^-} \\frac{|x|}{x} = \\frac{-x}{x} = -1$$

// // When $x > 0$, the absolute value $|x| = x$. When $x < 0$, the absolute value $|x| = -x$. The direction of approach determines which case applies.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj9: {
// //     title: `One-Sided Continuity`,
// //     content: `
// // A function can be [continuous](!/calculus/limits/continuity) from one side without being continuous from the other.

// // Continuous from the left at $a$:

// // $$\\lim_{x \\to a^-} f(x) = f(a)$$

// // Continuous from the right at $a$:

// // $$\\lim_{x \\to a^+} f(x) = f(a)$$

// // @academic[formula_callout:One-Sided Continuity
// // $$f \\text{ right-continuous at } a \\iff \\lim_{x \\to a^+} f(x) = f(a); \\quad f \\text{ left-continuous at } a \\iff \\lim_{x \\to a^-} f(x) = f(a)$$
// // /calculus/formulas#one_sided_continuity]@

// // @academic[formulas_link:Browse all limit formulas
// // /calculus/formulas]@

// // Full continuity at $a$ requires both. On a closed interval $[a, b]$, continuity means: continuous on the open interval $(a, b)$, continuous from the right at $a$, and continuous from the left at $b$.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj10: {
// //     title: `Applications of One-Sided Limits`,
// //     content: `
// // One-sided limits appear throughout calculus and its applications.

// // ## Endpoint Behavior

// // On closed intervals, function behavior at endpoints can only be examined from one direction. The limit from within the interval captures the boundary behavior.

// // ## Classifying Discontinuities

// // Determining whether a discontinuity is a jump, removable, or infinite requires comparing one-sided limits to each other and to the function value.

// // ## Piecewise Models

// // Real-world models often switch formulas at threshold values—tax brackets, shipping rates, material phase changes. One-sided limits detect whether the transition is smooth or abrupt.

// // ## One-Sided Derivatives

// // A function may have different instantaneous rates of change from the left and right at a corner point. One-sided derivatives capture this asymmetry.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj11: {
// //     title: `Summary: Where One-Sided Limits Are Essential`,
// //     content: `
// // One-sided limits aren&apos;t just a finer-grained version of the two-sided limit — they&apos;re the right tool for a handful of specific situations where two-sided analysis either fails or doesn&apos;t apply. The table below collects six such situations, pairing each with its diagnostic pattern: what the LHL and RHL typically look like, and why the one-sided form is structurally required. Recognizing the situation often points directly at the right technique.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   }
// // };



// // const introContent = {
// //    id:"intro",

// //   title: `Approaching From One Direction`,

// //   content: `
// // Sometimes a function behaves differently depending on which side you approach from. A piecewise function may follow one formula for $x < a$ and a different formula for $x > a$. A rational function may blow up to $+\\infty$ on one side and $-\\infty$ on the other. In these situations, one-sided limits become essential.

// // The left-hand limit examines behavior as $x$ approaches $a$ through values less than $a$. The right-hand limit examines behavior through values greater than $a$. Each direction gets its own answer, and those answers need not agree.

// // One-sided limits serve as the building blocks for two-sided limits. The two-sided limit exists precisely when both one-sided limits exist and match. When they differ, the one-sided limits capture the full story that a single two-sided limit cannot tell.
// // `
// // };

// // const faqQuestions = {
// //   obj1: {
// //     question: "What is a left-hand limit?",
// //     answer: "A left-hand limit, written lim(x→a⁻) f(x), examines function behavior as x approaches a through values strictly less than a. You move along the x-axis from the left, getting closer to a but never reaching it.",
// //     sectionId: "1"
// //   },
// //   obj2: {
// //     question: "What is a right-hand limit?",
// //     answer: "A right-hand limit, written lim(x→a⁺) f(x), examines function behavior as x approaches a through values strictly greater than a. You move along the x-axis from the right, getting closer to a but never reaching it.",
// //     sectionId: "2"
// //   },
// //   obj3: {
// //     question: "How do one-sided limits relate to two-sided limits?",
// //     answer: "The two-sided limit exists if and only if both one-sided limits exist and are equal. If the left-hand and right-hand limits differ, or if either fails to exist, the two-sided limit does not exist.",
// //     sectionId: "3"
// //   },
// //   obj4: {
// //     question: "How do you find limits of piecewise functions?",
// //     answer: "At boundaries between pieces, evaluate each one-sided limit using the formula that applies on that side. For example, at x = 2 where f(x) = x² for x < 2 and f(x) = 3x−2 for x ≥ 2, use x² for the left limit and 3x−2 for the right limit.",
// //     sectionId: "4"
// //   },
// //   obj5: {
// //     question: "What is a jump discontinuity?",
// //     answer: "A jump discontinuity occurs when both one-sided limits exist but differ. The function 'jumps' from one value to another at that point. The floor function ⌊x⌋ has jump discontinuities at every integer, jumping by 1 each time.",
// //     sectionId: "5"
// //   },
// //   obj6: {
// //     question: "How do one-sided limits behave at vertical asymptotes?",
// //     answer: "Near vertical asymptotes, one-sided limits typically equal +∞ or −∞, and the sign can differ by direction. For f(x) = 1/(x−2), the left limit at x = 2 is −∞ while the right limit is +∞.",
// //     sectionId: "6"
// //   },
// //   obj7: {
// //     question: "Why do square roots require one-sided limits?",
// //     answer: "Square root expressions have domain restrictions. For √(4−x), the domain requires x ≤ 4, so at x = 4 only the left-hand limit is meaningful. Domain boundaries naturally restrict limits to one side.",
// //     sectionId: "7"
// //   },
// //   obj8: {
// //     question: "How do you evaluate one-sided limits?",
// //     answer: "Use the same techniques as two-sided limits—direct substitution, factoring, rationalizing—but track which side you approach from. Sign analysis is critical: for |x|/x, the left limit at 0 is −1 while the right limit is +1.",
// //     sectionId: "8"
// //   },
// //   obj9: {
// //     question: "What is one-sided continuity?",
// //     answer: "A function is continuous from the left at a if lim(x→a⁻) f(x) = f(a), and continuous from the right if lim(x→a⁺) f(x) = f(a). Full continuity requires both. On closed intervals, endpoints use one-sided continuity.",
// //     sectionId: "9"
// //   }
// // }


// // const schemas = {
// //   learningResource: {
// //     "@context": "https://schema.org",
// //     "@type": "LearningResource",
// //     "name": "One-Sided Limits",
// //     "description": "Learn one-sided limits: left-hand and right-hand limit notation, piecewise functions, jump discontinuities, vertical asymptotes, and one-sided continuity.",
// //     "url": "https://www.learnmathclass.com/calculus/limits/one-sided",
// //     "inLanguage": "en-US",
// //     "learningResourceType": "Explanation",
// //     "educationalLevel": "High School, College",
// //     "educationalUse": "Learning",
// //     "audience": {
// //       "@type": "EducationalAudience",
// //       "educationalRole": "student"
// //     },
// //     "about": {
// //       "@type": "Thing",
// //       "name": "One-Sided Limits"
// //     },
// //     "teaches": [
// //       "Left-hand limit notation and meaning",
// //       "Right-hand limit notation and meaning",
// //       "Connection between one-sided and two-sided limits",
// //       "Evaluating limits of piecewise functions",
// //       "Jump discontinuities and vertical asymptotes",
// //       "One-sided continuity on closed intervals",
// //       "Use-case taxonomy for one-sided analysis"
// //     ],
// //     "keywords": keyWords.join(", "),
// //     "author": {
// //       "@type": "Organization",
// //       "name": "Learn Math Class"
// //     },
// //     "publisher": {
// //       "@type": "Organization",
// //       "name": "Learn Math Class"
// //     },
// //     "datePublished": "2024-01-15",
// //     "dateModified": new Date().toISOString()
// //   },

// //   breadcrumb: {
// //     "@context": "https://schema.org",
// //     "@type": "BreadcrumbList",
// //     "itemListElement": [
// //       {
// //         "@type": "ListItem",
// //         "position": 1,
// //         "name": "Home",
// //         "item": "https://www.learnmathclass.com"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 2,
// //         "name": "Calculus",
// //         "item": "https://www.learnmathclass.com/calculus"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 3,
// //         "name": "Limits",
// //         "item": "https://www.learnmathclass.com/calculus/limits"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 4,
// //         "name": "One-Sided Limits",
// //         "item": "https://www.learnmathclass.com/calculus/limits/one-sided"
// //       }
// //     ]
// //   },

// //   faq: {
// //     "@context": "https://schema.org",
// //     "@type": "FAQPage",
// //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// //       "@type": "Question",
// //       "name": faqQuestions[key].question,
// //       "acceptedAnswer": {
// //         "@type": "Answer",
// //         "text": faqQuestions[key].answer
// //       }
// //     }))
// //   }
// // }


// // return {
// //   props: {
// //     sectionsContent,
// //     introContent,
// //     obj3Table,
// //     summaryTable,
// //     faqQuestions,
// //     schemas,
// //     seoData: {
// //       title: "One-Sided Limits: Left & Right Approach | Learn Math Class",
// //       description: "Learn one-sided limits: left-hand and right-hand limit notation, piecewise functions, jump discontinuities, vertical asymptotes, and one-sided continuity.",
// //       keywords: keyWords.join(", "),
// //       url: "/calculus/limits/one-sided",
// //       name: "One-Sided Limits"
// //     },
// //   }
// // }
// //    }


// // export default function OneSidedPage({seoData, sectionsContent, introContent, obj3Table, summaryTable, faqQuestions, schemas}) {

// //   const tableWrapStyle = { margin: '20px auto', width: '100%' }

// //   const genericSections=[
// //     {
// //         id:'1',
// //         title:sectionsContent.obj1.title,
// //         link:sectionsContent.obj1.link,
// //         content:[
// //           sectionsContent.obj1.content,
// //         ]
// //     },
// //     {
// //         id:'2',
// //         title:sectionsContent.obj2.title,
// //         link:sectionsContent.obj2.link,
// //         content:[
// //           sectionsContent.obj2.content,
// //         ]
// //     },
// //     {
// //         id:'3',
// //         title:sectionsContent.obj3.title,
// //         link:sectionsContent.obj3.link,
// //         content:[
// //           sectionsContent.obj3.content,
// //           <div key={'obj3-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: obj3Table }} />,
// //         ]
// //     },
// //     {
// //         id:'4',
// //         title:sectionsContent.obj4.title,
// //         link:sectionsContent.obj4.link,
// //         content:[
// //           sectionsContent.obj4.content,
// //         ]
// //     },
// //     {
// //         id:'5',
// //         title:sectionsContent.obj5.title,
// //         link:sectionsContent.obj5.link,
// //         content:[
// //           sectionsContent.obj5.content,
// //         ]
// //     },
// //     {
// //         id:'6',
// //         title:sectionsContent.obj6.title,
// //         link:sectionsContent.obj6.link,
// //         content:[
// //           sectionsContent.obj6.content,
// //         ]
// //     },
// //     {
// //         id:'7',
// //         title:sectionsContent.obj7.title,
// //         link:sectionsContent.obj7.link,
// //         content:[
// //           sectionsContent.obj7.content,
// //         ]
// //     },
// //     {
// //         id:'8',
// //         title:sectionsContent.obj8.title,
// //         link:sectionsContent.obj8.link,
// //         content:[
// //           sectionsContent.obj8.content,
// //         ]
// //     },
// //     {
// //         id:'9',
// //         title:sectionsContent.obj9.title,
// //         link:sectionsContent.obj9.link,
// //         content:[
// //           sectionsContent.obj9.content,
// //         ]
// //     },
// //     {
// //         id:'10',
// //         title:sectionsContent.obj10.title,
// //         link:sectionsContent.obj10.link,
// //         content:[
// //           sectionsContent.obj10.content,
// //         ]
// //     },
// //     {
// //         id:'11',
// //         title:sectionsContent.obj11.title,
// //         link:sectionsContent.obj11.link,
// //         content:[
// //           sectionsContent.obj11.content,
// //           <div key={'summary-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
// //         ]
// //     },
// // ]

// //   return (
// //    <>

// // <Head>
// //   <title>{seoData.title}</title>
// //   <meta name="description" content={seoData.description} />
// //   <meta name="keywords" content={seoData.keywords} />
// //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// //   <meta property="og:title" content={seoData.title} />
// //   <meta property="og:description" content={seoData.description} />
// //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //   <meta property="og:type" content="article" />
// //   <meta property="og:site_name" content="Learn Math Class" />
  
// //   <meta name="twitter:card" content="summary" />
// //   <meta name="twitter:title" content={seoData.title} />
// //   <meta name="twitter:description" content={seoData.description} />
  
// //   <meta name="robots" content="index, follow" />
  
// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify(schemas.learningResource)
// //     }}
// //   />

// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify(schemas.breadcrumb)
// //     }}
// //   />

// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify(schemas.faq)
// //     }}
// //   />
// // </Head>

// //    {/* <GenericNavbar/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar 
// //            side='right'
// //            // topOffset='65px' 
// //            sidebarWidth='45px'
// //            panelWidth='200px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          /> 
// //    <Breadcrumb/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>One-Sided Limits</h1>
// //    <br/>
// //    <br/>
// //    <SectionTableOfContents sections={genericSections}
// //     showSecondaryNav={true}
// //          secondaryNavMode="siblings"  // or "children"
// //          secondaryNavTitle="More in this Section"
   
// //    />
// //    <br/>
// //    <br/>
// //    <br/>
// //     <IntroSection 
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //            backgroundColor='#f9fafb'
// //           //  "#f2f2f2"
// //           textColor="#06357a"
// //         />
// //    <br/>
// //    <KeyTermsCard
// //   id="0"
// //   title={sectionsContent.obj0.title}
// //   content={sectionsContent.obj0.content}
// //   after={sectionsContent.obj0.after}
// //   variant="light"
// // />
// //    <br/>
// //    <Sections sections={genericSections.slice(1)}/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }



// // tables-optimized: v4 | 2026-05-24 | 2 tables (obj3 comparison, obj11 summary capstone)
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import { tableHeaders } from '@/app/styles/theme'
// import NotationSection from '@/app/components/page-components/content-components/NotationSection'


// export async function getStaticProps(){
// const keyWords = [
//   "one-sided limits",
//   "left-hand limit",
//   "right-hand limit",
//   "limit from the left",
//   "limit from the right",
//   "x approaches a minus",
//   "x approaches a plus",
//   "one-sided limit notation",
//   "piecewise function limits",
//   "jump discontinuity",
//   "one-sided limit examples",
//   "evaluate one-sided limits",
//   "vertical asymptote one-sided",
//   "one-sided continuity"
// ]

// const linkStyle = 'color: inherit; text-decoration: underline;'

// // ─── TABLES ───────────────────────────────────────────────────────────────

// // obj3 — comparison (decision matrix): two-sided existence given LHL & RHL
// const obj3Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Left-hand limit at a</th>
//       <th style="${tableHeaders.comparison}">Right-hand limit at a</th>
//       <th style="${tableHeaders.comparison} text-align: center;">Match?</th>
//       <th style="${tableHeaders.comparison}">Two-sided limit at a</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">exists, = L</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, = L</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, equals L</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">exists, = L<sub>1</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, = L<sub>2</sub> ≠ L<sub>1</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does not exist (jump-style failure)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">exists</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does not exist</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">—</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does not exist</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">does not exist</td>
//       <td style="padding: 12px 15px; color: #34495e;">exists or does not exist</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">—</td>
//       <td style="padding: 12px 15px; color: #34495e;">does not exist</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj11 — summary capstone: situations requiring one-sided analysis
// const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Situation</th>
//       <th style="${tableHeaders.summary}">Why one-sided analysis is required</th>
//       <th style="${tableHeaders.summary}">Pattern of one-sided limits</th>
//       <th style="${tableHeaders.summary} text-align: center;">Section</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Piecewise function at a boundary</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a different formula applies on each side of the boundary</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use the left-side formula for LHL, the right-side formula for RHL; check whether they agree</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj4</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Jump discontinuity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function jumps from one value to another at the point</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">LHL = L<sub>1</sub>, RHL = L<sub>2</sub>, with L<sub>1</sub> ≠ L<sub>2</sub>; both finite</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj5</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical asymptote</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function is unbounded near the point; signs may differ by direction</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">LHL = ±∞ and RHL = ±∞, possibly with opposite signs — see <a href="/calculus/limits/infinity" style="${linkStyle}">limits and infinity</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj6</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Domain boundary (radicals, etc.)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function is only defined on one side of the boundary point</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">only one one-sided limit is meaningful; the other isn&apos;t defined</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj7</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Closed-interval endpoint</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuity at a or b on [a, b] can only be tested from inside the interval</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuous-from-right at a, continuous-from-left at b</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">obj9</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Corner point (one-sided derivatives)</td>
//       <td style="padding: 12px 15px; color: #34495e;">instantaneous rate of change differs left vs right at a kink</td>
//       <td style="padding: 12px 15px; color: #34495e;">left-derivative ≠ right-derivative ⇒ function is not differentiable at the point</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">obj10</td>
//     </tr>
//   </tbody>
// </table>
// `

// // const sectionsContent = {
// //   // ─── /calculus/limits/one-sided ───────────────────────────────────────────

// //   obj0: {
// //     title: `Key Terms`,
// //     content: `
// // - [One-Sided Limit](!/calculus/definitions#one_sided_limit) — limit from one direction: $\\lim_{x \\to a^-}$ or $\\lim_{x \\to a^+}$
// // - [Limit](!/calculus/definitions#limit) — exists when both one-sided limits agree
// // - [Discontinuity](!/calculus/definitions#discontinuity) — jump discontinuities have differing one-sided limits
// // - [Continuity](!/calculus/definitions#continuity) — one-sided continuity at interval endpoints`,
// //     before: ``,
// //     after: `
// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
// //     link: '',
// //   },

// //   obj1: {
// //     title: `Left-Hand Limits`,
// //     content: `
// // The left-hand limit uses a minus superscript:

// // $$\\lim_{x \\to a^-} f(x)$$

// // This notation means $x$ approaches $a$ through values strictly less than $a$. You move along the $x$-axis from the left, getting closer to $a$ but never reaching or passing it.

// // Alternative notations include $\\lim_{x \\to a-} f(x)$ and $\\lim_{x \\uparrow a} f(x)$. Some texts describe this as approaching "from below" since smaller $x$-values lie below $a$ on the number line.

// // The left-hand limit asks: as $x$ increases toward $a$, what value does $f(x)$ approach?
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj2: {
// //     title: `Right-Hand Limits`,
// //     content: `
// // The right-hand limit uses a plus superscript:

// // $$\\lim_{x \\to a^+} f(x)$$

// // This notation means $x$ approaches $a$ through values strictly greater than $a$. You move along the $x$-axis from the right, getting closer to $a$ but never reaching or passing it.

// // Alternative notations include $\\lim_{x \\to a+} f(x)$ and $\\lim_{x \\downarrow a} f(x)$. Some texts describe this as approaching "from above" since larger $x$-values lie above $a$ on the number line.

// // The right-hand limit asks: as $x$ decreases toward $a$, what value does $f(x)$ approach?
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj3: {
// //     title: `The Connection to Two-Sided Limits`,
// //     content: `
// // The [two-sided limit](!/calculus/limits/two-sided) exists if and only if both one-sided limits exist and are equal:

// // $$\\lim_{x \\to a} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$

// // One-sided limits decompose the two-sided limit into its directional components. Checking whether a two-sided limit exists often begins with computing the one-sided limits separately.

// // If the one-sided limits exist but differ, the two-sided limit does not exist. If either one-sided limit fails to exist (due to oscillation or unbounded behavior), the two-sided limit also fails.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj4: {
// //     title: `Piecewise Functions`,
// //     content: `
// // Functions defined by different formulas on different intervals require one-sided limit analysis at the boundaries between pieces.

// // Consider:

// // $$f(x) = \\begin{cases} x^2 & x < 2 \\\\ 3x - 2 & x \\geq 2 \\end{cases}$$

// // At $x = 2$, the left-hand limit uses the formula $x^2$:

// // $$\\lim_{x \\to 2^-} x^2 = 4$$

// // The right-hand limit uses the formula $3x - 2$:

// // $$\\lim_{x \\to 2^+} (3x - 2) = 4$$

// // Since both one-sided limits equal $4$, the two-sided limit exists and equals $4$. If the formulas had produced different values, the two-sided limit would not exist.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj5: {
// //     title: `Jump Discontinuities`,
// //     content: `
// // A [jump discontinuity](!/calculus/limits/continuity) occurs when both one-sided limits exist but differ. The function "jumps" from one value to another at the point.

// // The floor function $\\lfloor x \\rfloor$ provides a standard example. At any integer $n$:

// // $$\\lim_{x \\to n^-} \\lfloor x \\rfloor = n - 1$$

// // $$\\lim_{x \\to n^+} \\lfloor x \\rfloor = n$$

// // The left-hand limit gives the integer below, while the right-hand limit gives the integer itself. The function jumps by $1$ at each integer. No two-sided limit exists at these points because the one-sided limits disagree.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj6: {
// //     title: `One-Sided Limits at Vertical Asymptotes`,
// //     content: `
// // Near a vertical asymptote, one-sided limits typically equal $+\\infty$ or $-\\infty$. The sign can differ depending on the direction of approach.

// // For $f(x) = \\dfrac{1}{x - 2}$:

// // $$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty$$

// // $$\\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$

// // From the left, $x - 2$ is a small negative number, so the reciprocal is a large negative number. From the right, $x - 2$ is a small positive number, so the reciprocal is a large positive number.

// // The [limits and infinity](!/calculus/limits/infinity) page covers infinite limits in detail.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj7: {
// //     title: `One-Sided Limits and Square Roots`,
// //     content: `
// // Expressions involving square roots often force one-sided analysis due to domain restrictions.

// // The expression $\\sqrt{4 - x}$ requires $4 - x \\geq 0$, meaning $x \\leq 4$. At $x = 4$, only the left-hand limit is meaningful:

// // $$\\lim_{x \\to 4^-} \\sqrt{4 - x} = 0$$

// // Similarly, $\\sqrt{x - 4}$ requires $x \\geq 4$, so at $x = 4$, only the right-hand limit applies:

// // $$\\lim_{x \\to 4^+} \\sqrt{x - 4} = 0$$

// // Domain boundaries naturally restrict limits to one side.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj8: {
// //     title: `Evaluating One-Sided Limits`,
// //     content: `
// // The same [techniques](!/calculus/limits/evaluating) used for two-sided limits apply: direct substitution, factoring, rationalizing. The difference lies in tracking which side you approach from.

// // Sign analysis becomes critical. For the expression $\\dfrac{|x|}{x}$:

// // $$\\lim_{x \\to 0^+} \\frac{|x|}{x} = \\frac{x}{x} = 1$$

// // $$\\lim_{x \\to 0^-} \\frac{|x|}{x} = \\frac{-x}{x} = -1$$

// // When $x > 0$, the absolute value $|x| = x$. When $x < 0$, the absolute value $|x| = -x$. The direction of approach determines which case applies.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj9: {
// //     title: `One-Sided Continuity`,
// //     content: `
// // A function can be [continuous](!/calculus/limits/continuity) from one side without being continuous from the other.

// // Continuous from the left at $a$:

// // $$\\lim_{x \\to a^-} f(x) = f(a)$$

// // Continuous from the right at $a$:

// // $$\\lim_{x \\to a^+} f(x) = f(a)$$

// // Full continuity at $a$ requires both. On a closed interval $[a, b]$, continuity means: continuous on the open interval $(a, b)$, continuous from the right at $a$, and continuous from the left at $b$.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj10: {
// //     title: `Applications of One-Sided Limits`,
// //     content: `
// // One-sided limits appear throughout calculus and its applications.

// // ## Endpoint Behavior

// // On closed intervals, function behavior at endpoints can only be examined from one direction. The limit from within the interval captures the boundary behavior.

// // ## Classifying Discontinuities

// // Determining whether a discontinuity is a jump, removable, or infinite requires comparing one-sided limits to each other and to the function value.

// // ## Piecewise Models

// // Real-world models often switch formulas at threshold values—tax brackets, shipping rates, material phase changes. One-sided limits detect whether the transition is smooth or abrupt.

// // ## One-Sided Derivatives

// // A function may have different instantaneous rates of change from the left and right at a corner point. One-sided derivatives capture this asymmetry.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   },
// //   obj11: {
// //     title: `Summary: Where One-Sided Limits Are Essential`,
// //     content: `
// // One-sided limits aren&apos;t just a finer-grained version of the two-sided limit — they&apos;re the right tool for a handful of specific situations where two-sided analysis either fails or doesn&apos;t apply. The table below collects six such situations, pairing each with its diagnostic pattern: what the LHL and RHL typically look like, and why the one-sided form is structurally required. Recognizing the situation often points directly at the right technique.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: ``
// //   }
// // };


// // formulas-optimized: v1 | 2026-06-09 | 1 callout (obj9)
// const sectionsContent = {
//   // ─── /calculus/limits/one-sided ───────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [One-Sided Limit](!/calculus/definitions#one_sided_limit) — limit from one direction: $\\lim_{x \\to a^-}$ or $\\lim_{x \\to a^+}$
// - [Limit](!/calculus/definitions#limit) — exists when both one-sided limits agree
// - [Discontinuity](!/calculus/definitions#discontinuity) — jump discontinuities have differing one-sided limits
// - [Continuity](!/calculus/definitions#continuity) — one-sided continuity at interval endpoints`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Left-Hand Limits`,
//     content: `
// The left-hand limit uses a minus superscript:

// $$\\lim_{x \\to a^-} f(x)$$

// This notation means $x$ approaches $a$ through values strictly less than $a$. You move along the $x$-axis from the left, getting closer to $a$ but never reaching or passing it.

// Alternative notations include $\\lim_{x \\to a-} f(x)$ and $\\lim_{x \\uparrow a} f(x)$. Some texts describe this as approaching "from below" since smaller $x$-values lie below $a$ on the number line. All the variants appear among the [calculus symbols](!/math-symbols/calculus).

// The left-hand limit asks: as $x$ increases toward $a$, what value does $f(x)$ approach?
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj2: {
//     title: `Right-Hand Limits`,
//     content: `
// The right-hand limit uses a plus superscript:

// $$\\lim_{x \\to a^+} f(x)$$

// This notation means $x$ approaches $a$ through values strictly greater than $a$. You move along the $x$-axis from the right, getting closer to $a$ but never reaching or passing it.

// Alternative notations include $\\lim_{x \\to a+} f(x)$ and $\\lim_{x \\downarrow a} f(x)$. Some texts describe this as approaching "from above" since larger $x$-values lie above $a$ on the number line.

// The right-hand limit asks: as $x$ decreases toward $a$, what value does $f(x)$ approach?
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj3: {
//     title: `The Connection to Two-Sided Limits`,
//     content: `
// The [two-sided limit](!/calculus/limits/two-sided) exists if and only if both one-sided limits exist and are equal:

// $$\\lim_{x \\to a} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$

// One-sided limits decompose the two-sided limit into its directional components. Checking whether a two-sided limit exists often begins with computing the one-sided limits separately.

// If the one-sided limits exist but differ, the two-sided limit does not exist. If either one-sided limit fails to exist (due to oscillation or unbounded behavior), the two-sided limit also fails.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   notation: {
//     title: `Reading the One-Sided Notation`,
//     lead: `The two sections above introduced the minus and plus superscripts in passing. This section is about the marks themselves: the three competing traditions you will meet across textbooks, the shorthand for a one-sided **value** rather than a one-sided limit, and the two places the superscript is routinely misread.`,
//     inherited: `$\\lim$ and $\\to$ keep the meanings given on [Limits](!/calculus/limits). The criterion that both sides must agree is stated in **The Connection to Two-Sided Limits** above.`,
//     entries: [
//       {
//         id: 'left-hand-limit',
//         tex: `$\\lim\\limits_{x \\to a^{-}} f(x)$`,
//         read: `The limit of f of x as x approaches a from the left`,
//         means: `The superscript minus is a **direction, not an operation**. It restricts $x$ to values strictly below $a$ and says nothing about the sign of anything. The function need not be defined at $a$ at all &mdash; that is the whole point of a limit, and it stays true one-sided. The [LaTeX reference](!/latex) writes it @[\\lim_{x \\to a^{-}}]@.`,
//         cases: `At an interior point both sides exist and the [two-sided limit](!/calculus/limits/two-sided) is the question worth asking. At the left endpoint of a domain there is nothing below $a$, so only the right-hand limit exists and [continuity](!/calculus/limits/continuity) there is one-sided by necessity. Across a jump in a [piecewise function](!/functions/piecewise) both sides exist and disagree.`,
//         alsoWritten: `$\\lim\\limits_{x \\to a-0} f(x)$ &mdash; the Russian and Eastern European tradition, standard in Fichtenholz and Demidovich, where $-0$ reads as &ldquo;a shade below&rdquo;. $\\lim\\limits_{x \\uparrow a} f(x)$ &mdash; common in analysis and measure theory, where the arrow stresses that $x$ climbs monotonically toward $a$; the [mathematical keyboard](!/keyboard) carries $\\uparrow$ under its arrow set. $\\lim\\limits_{x \\to a,\\, x<a} f(x)$ &mdash; the explicit-condition form favoured in French texts, which simply spells out what the superscript abbreviates.`,
//         confusedWith: `$a^{-}$ is not $-a$, and it is not $a-1$. Nothing is being subtracted. The clearest case is $x \\to 0^{-}$: this means approaching zero **through negative numbers**, not approaching some quantity called negative zero. The superscript modifies the approach, never the number.`,
//         sameGlyphElsewhere: `A superscript $-1$ marks the [inverse function](!/functions/inverse) &mdash; the same corner of the symbol doing an unrelated job. The one place the usage genuinely carries over is probability, where $F(x^{-})$ is the left limit of a [distribution function](!/probability/distributions): same notation, same meaning, different subject.`,
//       },
//       {
//         id: 'right-hand-limit',
//         tex: `$\\lim\\limits_{x \\to a^{+}} f(x)$`,
//         read: `The limit of f of x as x approaches a from the right`,
//         means: `The mirror of the left-hand form: $x$ is restricted to values strictly above $a$. Worth reading aloud as &ldquo;from above&rdquo; rather than &ldquo;from the right&rdquo;, because right and greater only coincide while you are looking at a horizontal axis.`,
//         cases: `This is the side that survives at a **left** endpoint &mdash; on $[a,b]$ the only limit available at $a$ is the right-hand one. It is also the side that defines right-continuity, the convention every cumulative [distribution function](!/probability/distributions) obeys.`,
//         alsoWritten: `$\\lim\\limits_{x \\to a+0} f(x)$ and $\\lim\\limits_{x \\downarrow a} f(x)$, matching the two traditions above; the [mathematical keyboard](!/keyboard) has $\\downarrow$ beside $\\uparrow$.`,
//         confusedWith: `The arrow pairing runs opposite to intuition: $\\uparrow$ goes with the **minus** superscript and $\\downarrow$ goes with the **plus**. The arrow describes how $x$ travels &mdash; climbing from below, or descending from above &mdash; while the superscript names the side it started on. Anyone who learns one form and later meets the other swaps them at least once.`,
//         sameGlyphElsewhere: ``,
//       },
//       {
//         id: 'one-sided-value',
//         tex: `$f(a^{-})$ &nbsp;&middot;&nbsp; $f(a^{+})$`,
//         read: `f of a minus, f of a plus`,
//         means: `Shorthand for the **value** of the one-sided limit, not for evaluating $f$ at some point called $a^{-}$. No such point exists. $f(a^{-})$ is simply a compact way of writing $\\lim\\limits_{x \\to a^{-}} f(x)$ when the limit has to appear several times in one formula.`,
//         cases: `The shorthand earns its keep wherever both sides appear together. A Fourier series converges at a jump to the midpoint $\\tfrac{1}{2}\\left[f(a^{-}) + f(a^{+})\\right]$, which is unreadable written out in full. Right-continuity is stated as $f(a) = f(a^{+})$. The size of a jump in a [piecewise function](!/functions/piecewise) is $f(a^{+}) - f(a^{-})$.`,
//         alsoWritten: `$f(a-0)$ and $f(a+0)$, following the same tradition that writes $x \\to a-0$.`,
//         confusedWith: `$f(a)$ is the actual value of the function at $a$ &mdash; a third number, which may equal one side, both, or neither, and may not exist at all. A removable discontinuity is exactly the case $f(a^{-}) = f(a^{+}) \\neq f(a)$, and it becomes invisible the moment the three are treated as one object.`,
//         sameGlyphElsewhere: ``,
//       },
//     ],
//     symbolsHref: `/math-symbols/calculus`,
//     symbolsLabel: `All calculus symbols`,
//     parentHref: `/calculus/limits`,
//     parentLabel: `Limits`,
//   },

//   obj4: {
//     title: `Piecewise Functions`,
//     content: `
// Functions defined by different formulas on different intervals require one-sided limit analysis at the boundaries between pieces.

// Consider:

// $$f(x) = \\begin{cases} x^2 & x < 2 \\\\ 3x - 2 & x \\geq 2 \\end{cases}$$

// At $x = 2$, the left-hand limit uses the formula $x^2$:

// $$\\lim_{x \\to 2^-} x^2 = 4$$

// The right-hand limit uses the formula $3x - 2$:

// $$\\lim_{x \\to 2^+} (3x - 2) = 4$$

// Since both one-sided limits equal $4$, the two-sided limit exists and equals $4$. If the formulas had produced different values, the two-sided limit would not exist.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj5: {
//     title: `Jump Discontinuities`,
//     content: `
// A [jump discontinuity](!/calculus/limits/continuity) occurs when both one-sided limits exist but differ. The function "jumps" from one value to another at the point.

// The floor function $\\lfloor x \\rfloor$ provides a standard example. At any integer $n$:

// $$\\lim_{x \\to n^-} \\lfloor x \\rfloor = n - 1$$

// $$\\lim_{x \\to n^+} \\lfloor x \\rfloor = n$$

// The left-hand limit gives the integer below, while the right-hand limit gives the integer itself. The function jumps by $1$ at each integer. No two-sided limit exists at these points because the one-sided limits disagree.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj6: {
//     title: `One-Sided Limits at Vertical Asymptotes`,
//     content: `
// Near a vertical asymptote, one-sided limits typically equal $+\\infty$ or $-\\infty$. The sign can differ depending on the direction of approach.

// For $f(x) = \\dfrac{1}{x - 2}$:

// $$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty$$

// $$\\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$

// From the left, $x - 2$ is a small negative number, so the reciprocal is a large negative number. From the right, $x - 2$ is a small positive number, so the reciprocal is a large positive number.

// The [limits and infinity](!/calculus/limits/infinity) page covers infinite limits in detail.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj7: {
//     title: `One-Sided Limits and Square Roots`,
//     content: `
// Expressions involving square roots often force one-sided analysis due to domain restrictions.

// The expression $\\sqrt{4 - x}$ requires $4 - x \\geq 0$, meaning $x \\leq 4$. At $x = 4$, only the left-hand limit is meaningful:

// $$\\lim_{x \\to 4^-} \\sqrt{4 - x} = 0$$

// Similarly, $\\sqrt{x - 4}$ requires $x \\geq 4$, so at $x = 4$, only the right-hand limit applies:

// $$\\lim_{x \\to 4^+} \\sqrt{x - 4} = 0$$

// Domain boundaries naturally restrict limits to one side.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj8: {
//     title: `Evaluating One-Sided Limits`,
//     content: `
// The same [techniques](!/calculus/limits/evaluating) used for two-sided limits apply: direct substitution, factoring, rationalizing. The difference lies in tracking which side you approach from.

// Sign analysis becomes critical. For the expression $\\dfrac{|x|}{x}$:

// $$\\lim_{x \\to 0^+} \\frac{|x|}{x} = \\frac{x}{x} = 1$$

// $$\\lim_{x \\to 0^-} \\frac{|x|}{x} = \\frac{-x}{x} = -1$$

// When $x > 0$, the absolute value $|x| = x$. When $x < 0$, the absolute value $|x| = -x$. The direction of approach determines which case applies.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj9: {
//     title: `One-Sided Continuity`,
//     content: `
// A function can be [continuous](!/calculus/limits/continuity) from one side without being continuous from the other.

// Continuous from the left at $a$:

// $$\\lim_{x \\to a^-} f(x) = f(a)$$

// Continuous from the right at $a$:

// $$\\lim_{x \\to a^+} f(x) = f(a)$$

// @academic[formula_callout:One-Sided Continuity
// $$f \\text{ right-continuous at } a \\iff \\lim_{x \\to a^+} f(x) = f(a); \\quad f \\text{ left-continuous at } a \\iff \\lim_{x \\to a^-} f(x) = f(a)$$
// /calculus/formulas#one_sided_continuity]@

// @academic[formulas_link:Browse all limit formulas
// /calculus/formulas]@

// Full continuity at $a$ requires both. On a closed interval $[a, b]$, continuity means: continuous on the open interval $(a, b)$, continuous from the right at $a$, and continuous from the left at $b$.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj10: {
//     title: `Applications of One-Sided Limits`,
//     content: `
// One-sided limits appear throughout calculus and its applications.

// ## Endpoint Behavior

// On closed intervals, function behavior at endpoints can only be examined from one direction. The limit from within the interval captures the boundary behavior.

// ## Classifying Discontinuities

// Determining whether a discontinuity is a jump, removable, or infinite requires comparing one-sided limits to each other and to the function value.

// ## Piecewise Models

// Real-world models often switch formulas at threshold values—tax brackets, shipping rates, material phase changes. One-sided limits detect whether the transition is smooth or abrupt.

// ## One-Sided Derivatives

// A function may have different instantaneous rates of change from the left and right at a corner point. One-sided derivatives capture this asymmetry.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj11: {
//     title: `Summary: Where One-Sided Limits Are Essential`,
//     content: `
// One-sided limits aren&apos;t just a finer-grained version of the two-sided limit — they&apos;re the right tool for a handful of specific situations where two-sided analysis either fails or doesn&apos;t apply. The table below collects six such situations, pairing each with its diagnostic pattern: what the LHL and RHL typically look like, and why the one-sided form is structurally required. Recognizing the situation often points directly at the right technique.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   }
// };



// const introContent = {
//    id:"intro",

//   title: `Approaching From One Direction`,

//   content: `
// Sometimes a function behaves differently depending on which side you approach from. A piecewise function may follow one formula for $x < a$ and a different formula for $x > a$. A rational function may blow up to $+\\infty$ on one side and $-\\infty$ on the other. In these situations, one-sided limits become essential.

// The left-hand limit examines behavior as $x$ approaches $a$ through values less than $a$. The right-hand limit examines behavior through values greater than $a$. Each direction gets its own answer, and those answers need not agree.

// One-sided limits serve as the building blocks for two-sided limits. The two-sided limit exists precisely when both one-sided limits exist and match. When they differ, the one-sided limits capture the full story that a single two-sided limit cannot tell.
// `
// };

// const faqQuestions = {
//   obj1: {
//     question: "What is a left-hand limit?",
//     answer: "A left-hand limit, written lim(x→a⁻) f(x), examines function behavior as x approaches a through values strictly less than a. You move along the x-axis from the left, getting closer to a but never reaching it.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What is a right-hand limit?",
//     answer: "A right-hand limit, written lim(x→a⁺) f(x), examines function behavior as x approaches a through values strictly greater than a. You move along the x-axis from the right, getting closer to a but never reaching it.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "How do one-sided limits relate to two-sided limits?",
//     answer: "The two-sided limit exists if and only if both one-sided limits exist and are equal. If the left-hand and right-hand limits differ, or if either fails to exist, the two-sided limit does not exist.",
//     sectionId: "3"
//   },
//   obj4: {
//     question: "How do you find limits of piecewise functions?",
//     answer: "At boundaries between pieces, evaluate each one-sided limit using the formula that applies on that side. For example, at x = 2 where f(x) = x² for x < 2 and f(x) = 3x−2 for x ≥ 2, use x² for the left limit and 3x−2 for the right limit.",
//     sectionId: "5"
//   },
//   obj5: {
//     question: "What is a jump discontinuity?",
//     answer: "A jump discontinuity occurs when both one-sided limits exist but differ. The function 'jumps' from one value to another at that point. The floor function ⌊x⌋ has jump discontinuities at every integer, jumping by 1 each time.",
//     sectionId: "6"
//   },
//   obj6: {
//     question: "How do one-sided limits behave at vertical asymptotes?",
//     answer: "Near vertical asymptotes, one-sided limits typically equal +∞ or −∞, and the sign can differ by direction. For f(x) = 1/(x−2), the left limit at x = 2 is −∞ while the right limit is +∞.",
//     sectionId: "7"
//   },
//   obj7: {
//     question: "Why do square roots require one-sided limits?",
//     answer: "Square root expressions have domain restrictions. For √(4−x), the domain requires x ≤ 4, so at x = 4 only the left-hand limit is meaningful. Domain boundaries naturally restrict limits to one side.",
//     sectionId: "8"
//   },
//   obj8: {
//     question: "How do you evaluate one-sided limits?",
//     answer: "Use the same techniques as two-sided limits—direct substitution, factoring, rationalizing—but track which side you approach from. Sign analysis is critical: for |x|/x, the left limit at 0 is −1 while the right limit is +1.",
//     sectionId: "9"
//   },
//   obj9: {
//     question: "What is one-sided continuity?",
//     answer: "A function is continuous from the left at a if lim(x→a⁻) f(x) = f(a), and continuous from the right if lim(x→a⁺) f(x) = f(a). Full continuity requires both. On closed intervals, endpoints use one-sided continuity.",
//     sectionId: "10"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "One-Sided Limits",
//     "description": "Learn one-sided limits: left-hand and right-hand limit notation, piecewise functions, jump discontinuities, vertical asymptotes, and one-sided continuity.",
//     "url": "https://www.learnmathclass.com/calculus/limits/one-sided",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "One-Sided Limits"
//     },
//     "teaches": [
//       "Left-hand limit notation and meaning",
//       "Right-hand limit notation and meaning",
//       "Connection between one-sided and two-sided limits",
//       "Evaluating limits of piecewise functions",
//       "Jump discontinuities and vertical asymptotes",
//       "One-sided continuity on closed intervals",
//       "Use-case taxonomy for one-sided analysis"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Calculus",
//         "item": "https://www.learnmathclass.com/calculus"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Limits",
//         "item": "https://www.learnmathclass.com/calculus/limits"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "One-Sided Limits",
//         "item": "https://www.learnmathclass.com/calculus/limits/one-sided"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }


// return {
//   props: {
//     sectionsContent,
//     introContent,
//     obj3Table,
//     summaryTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "One-Sided Limits: Left & Right Approach | Learn Math Class",
//       description: "Learn one-sided limits: left-hand and right-hand limit notation, piecewise functions, jump discontinuities, vertical asymptotes, and one-sided continuity.",
//       keywords: keyWords.join(", "),
//       url: "/calculus/limits/one-sided",
//       name: "One-Sided Limits"
//     },
//   }
// }
//    }


// export default function OneSidedPage({seoData, sectionsContent, introContent, obj3Table, summaryTable, faqQuestions, schemas}) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const genericSections=[
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
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//           <div key={'obj3-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj3Table }} />,
//         ]
//     },
//     {
//         id:'4',
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
//         id:'5',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//           <div key={'summary-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
//         ]
//     },
// ]

//   return (
//    <>

// <Head>
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>One-Sided Limits</h1>
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
//    <KeyTermsCard
//   id="0"
//   title={sectionsContent.obj0.title}
//   content={sectionsContent.obj0.content}
//   after={sectionsContent.obj0.after}
//   variant="light"
// />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


// tables-optimized: v4 | 2026-05-24 | 2 tables (obj3 comparison, obj11 summary capstone)
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
import functionContinuityDiagrams from '@/app/components/functions/continuity/functionContinuityDiagrams'
import renderFunctionPlotV2 from '@/app/utils/illustrations/functions/graphs/functionPlot.v2'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){
const keyWords = [
  "one-sided limits",
  "left-hand limit",
  "right-hand limit",
  "limit from the left",
  "limit from the right",
  "x approaches a minus",
  "x approaches a plus",
  "one-sided limit notation",
  "piecewise function limits",
  "jump discontinuity",
  "one-sided limit examples",
  "evaluate one-sided limits",
  "vertical asymptote one-sided",
  "one-sided continuity"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj3 — comparison (decision matrix): two-sided existence given LHL & RHL
const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Left-hand limit at a</th>
      <th style="${tableHeaders.comparison}">Right-hand limit at a</th>
      <th style="${tableHeaders.comparison} text-align: center;">Match?</th>
      <th style="${tableHeaders.comparison}">Two-sided limit at a</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">exists, = L</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, = L</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, equals L</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">exists, = L<sub>1</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists, = L<sub>2</sub> ≠ L<sub>1</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does not exist (jump-style failure)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">exists</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does not exist</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">—</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does not exist</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">does not exist</td>
      <td style="padding: 12px 15px; color: #34495e;">exists or does not exist</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">—</td>
      <td style="padding: 12px 15px; color: #34495e;">does not exist</td>
    </tr>
  </tbody>
</table>
`

// obj11 — summary capstone: situations requiring one-sided analysis
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Situation</th>
      <th style="${tableHeaders.summary}">Why one-sided analysis is required</th>
      <th style="${tableHeaders.summary}">Pattern of one-sided limits</th>
      <th style="${tableHeaders.summary} text-align: center;">Section</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Piecewise function at a boundary</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a different formula applies on each side of the boundary</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use the left-side formula for LHL, the right-side formula for RHL; check whether they agree</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Jump discontinuity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function jumps from one value to another at the point</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">LHL = L<sub>1</sub>, RHL = L<sub>2</sub>, with L<sub>1</sub> ≠ L<sub>2</sub>; both finite</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">6</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical asymptote</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function is unbounded near the point; signs may differ by direction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">LHL = ±∞ and RHL = ±∞, possibly with opposite signs — see <a href="/calculus/limits/infinity" style="${linkStyle}">limits and infinity</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">7</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Domain boundary (radicals, etc.)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function is only defined on one side of the boundary point</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">only one one-sided limit is meaningful; the other isn&apos;t defined</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">8</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Closed-interval endpoint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuity at a or b on [a, b] can only be tested from inside the interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuous-from-right at a, continuous-from-left at b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">10</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Corner point (one-sided derivatives)</td>
      <td style="padding: 12px 15px; color: #34495e;">instantaneous rate of change differs left vs right at a kink</td>
      <td style="padding: 12px 15px; color: #34495e;">left-derivative ≠ right-derivative ⇒ function is not differentiable at the point</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">11</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/limits/one-sided ───────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [One-Sided Limit](!/calculus/definitions#one_sided_limit) — limit from one direction: $\\lim_{x \\to a^-}$ or $\\lim_{x \\to a^+}$
// - [Limit](!/calculus/definitions#limit) — exists when both one-sided limits agree
// - [Discontinuity](!/calculus/definitions#discontinuity) — jump discontinuities have differing one-sided limits
// - [Continuity](!/calculus/definitions#continuity) — one-sided continuity at interval endpoints`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Left-Hand Limits`,
//     content: `
// The left-hand limit uses a minus superscript:

// $$\\lim_{x \\to a^-} f(x)$$

// This notation means $x$ approaches $a$ through values strictly less than $a$. You move along the $x$-axis from the left, getting closer to $a$ but never reaching or passing it.

// Alternative notations include $\\lim_{x \\to a-} f(x)$ and $\\lim_{x \\uparrow a} f(x)$. Some texts describe this as approaching "from below" since smaller $x$-values lie below $a$ on the number line.

// The left-hand limit asks: as $x$ increases toward $a$, what value does $f(x)$ approach?
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj2: {
//     title: `Right-Hand Limits`,
//     content: `
// The right-hand limit uses a plus superscript:

// $$\\lim_{x \\to a^+} f(x)$$

// This notation means $x$ approaches $a$ through values strictly greater than $a$. You move along the $x$-axis from the right, getting closer to $a$ but never reaching or passing it.

// Alternative notations include $\\lim_{x \\to a+} f(x)$ and $\\lim_{x \\downarrow a} f(x)$. Some texts describe this as approaching "from above" since larger $x$-values lie above $a$ on the number line.

// The right-hand limit asks: as $x$ decreases toward $a$, what value does $f(x)$ approach?
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj3: {
//     title: `The Connection to Two-Sided Limits`,
//     content: `
// The [two-sided limit](!/calculus/limits/two-sided) exists if and only if both one-sided limits exist and are equal:

// $$\\lim_{x \\to a} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$

// One-sided limits decompose the two-sided limit into its directional components. Checking whether a two-sided limit exists often begins with computing the one-sided limits separately.

// If the one-sided limits exist but differ, the two-sided limit does not exist. If either one-sided limit fails to exist (due to oscillation or unbounded behavior), the two-sided limit also fails.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj4: {
//     title: `Piecewise Functions`,
//     content: `
// Functions defined by different formulas on different intervals require one-sided limit analysis at the boundaries between pieces.

// Consider:

// $$f(x) = \\begin{cases} x^2 & x < 2 \\\\ 3x - 2 & x \\geq 2 \\end{cases}$$

// At $x = 2$, the left-hand limit uses the formula $x^2$:

// $$\\lim_{x \\to 2^-} x^2 = 4$$

// The right-hand limit uses the formula $3x - 2$:

// $$\\lim_{x \\to 2^+} (3x - 2) = 4$$

// Since both one-sided limits equal $4$, the two-sided limit exists and equals $4$. If the formulas had produced different values, the two-sided limit would not exist.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj5: {
//     title: `Jump Discontinuities`,
//     content: `
// A [jump discontinuity](!/calculus/limits/continuity) occurs when both one-sided limits exist but differ. The function "jumps" from one value to another at the point.

// The floor function $\\lfloor x \\rfloor$ provides a standard example. At any integer $n$:

// $$\\lim_{x \\to n^-} \\lfloor x \\rfloor = n - 1$$

// $$\\lim_{x \\to n^+} \\lfloor x \\rfloor = n$$

// The left-hand limit gives the integer below, while the right-hand limit gives the integer itself. The function jumps by $1$ at each integer. No two-sided limit exists at these points because the one-sided limits disagree.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj6: {
//     title: `One-Sided Limits at Vertical Asymptotes`,
//     content: `
// Near a vertical asymptote, one-sided limits typically equal $+\\infty$ or $-\\infty$. The sign can differ depending on the direction of approach.

// For $f(x) = \\dfrac{1}{x - 2}$:

// $$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty$$

// $$\\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$

// From the left, $x - 2$ is a small negative number, so the reciprocal is a large negative number. From the right, $x - 2$ is a small positive number, so the reciprocal is a large positive number.

// The [limits and infinity](!/calculus/limits/infinity) page covers infinite limits in detail.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj7: {
//     title: `One-Sided Limits and Square Roots`,
//     content: `
// Expressions involving square roots often force one-sided analysis due to domain restrictions.

// The expression $\\sqrt{4 - x}$ requires $4 - x \\geq 0$, meaning $x \\leq 4$. At $x = 4$, only the left-hand limit is meaningful:

// $$\\lim_{x \\to 4^-} \\sqrt{4 - x} = 0$$

// Similarly, $\\sqrt{x - 4}$ requires $x \\geq 4$, so at $x = 4$, only the right-hand limit applies:

// $$\\lim_{x \\to 4^+} \\sqrt{x - 4} = 0$$

// Domain boundaries naturally restrict limits to one side.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj8: {
//     title: `Evaluating One-Sided Limits`,
//     content: `
// The same [techniques](!/calculus/limits/evaluating) used for two-sided limits apply: direct substitution, factoring, rationalizing. The difference lies in tracking which side you approach from.

// Sign analysis becomes critical. For the expression $\\dfrac{|x|}{x}$:

// $$\\lim_{x \\to 0^+} \\frac{|x|}{x} = \\frac{x}{x} = 1$$

// $$\\lim_{x \\to 0^-} \\frac{|x|}{x} = \\frac{-x}{x} = -1$$

// When $x > 0$, the absolute value $|x| = x$. When $x < 0$, the absolute value $|x| = -x$. The direction of approach determines which case applies.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj9: {
//     title: `One-Sided Continuity`,
//     content: `
// A function can be [continuous](!/calculus/limits/continuity) from one side without being continuous from the other.

// Continuous from the left at $a$:

// $$\\lim_{x \\to a^-} f(x) = f(a)$$

// Continuous from the right at $a$:

// $$\\lim_{x \\to a^+} f(x) = f(a)$$

// Full continuity at $a$ requires both. On a closed interval $[a, b]$, continuity means: continuous on the open interval $(a, b)$, continuous from the right at $a$, and continuous from the left at $b$.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj10: {
//     title: `Applications of One-Sided Limits`,
//     content: `
// One-sided limits appear throughout calculus and its applications.

// ## Endpoint Behavior

// On closed intervals, function behavior at endpoints can only be examined from one direction. The limit from within the interval captures the boundary behavior.

// ## Classifying Discontinuities

// Determining whether a discontinuity is a jump, removable, or infinite requires comparing one-sided limits to each other and to the function value.

// ## Piecewise Models

// Real-world models often switch formulas at threshold values—tax brackets, shipping rates, material phase changes. One-sided limits detect whether the transition is smooth or abrupt.

// ## One-Sided Derivatives

// A function may have different instantaneous rates of change from the left and right at a corner point. One-sided derivatives capture this asymmetry.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj11: {
//     title: `Summary: Where One-Sided Limits Are Essential`,
//     content: `
// One-sided limits aren&apos;t just a finer-grained version of the two-sided limit — they&apos;re the right tool for a handful of specific situations where two-sided analysis either fails or doesn&apos;t apply. The table below collects six such situations, pairing each with its diagnostic pattern: what the LHL and RHL typically look like, and why the one-sided form is structurally required. Recognizing the situation often points directly at the right technique.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   }
// };


// formulas-optimized: v1 | 2026-06-09 | 1 callout (obj9)
// Concept introduction (section 1) — template C, failure first. Running
// instance: the limit tool's jump state, f(x) = x for x < 0 and x + 1 for
// x ≥ 0, at a = 0. Old obj1 text is kept in sectionsContent.obj1, unused; its
// formula box and three sentences are carried in unchanged. Section 2
// (right-hand limits) is unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciJumpTable = ciTableOpen(['from the left: x', 'f(x)', 'from the right: x', 'f(x)']) +
  ciRow(['−0.1', '−0.1', '0.1', '1.1']) +
  ciRow(['−0.01', '−0.01', '0.01', '1.01'], { shade: true }) +
  ciRow(['−0.001', '−0.001', '0.001', '1.001']) +
  ciRow(['heading to', '0', 'heading to', '1'], { shade: true, last: true, color: '#a4243b', cols: [1, 3] }) +
  '</tbody></table>'

const sectionsContent = {
  // ─── /calculus/limits/one-sided ───────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [One-Sided Limit](!/calculus/definitions#one_sided_limit) — limit from one direction: $\\lim_{x \\to a^-}$ or $\\lim_{x \\to a^+}$
- [Limit](!/calculus/definitions#limit) — exists when both one-sided limits agree
- [Discontinuity](!/calculus/definitions#discontinuity) — jump discontinuities have differing one-sided limits
- [Continuity](!/calculus/definitions#continuity) — one-sided continuity at interval endpoints`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Left-Hand Limits`,
    content: `
The left-hand limit uses a minus superscript:

@academic[formula_callout:Left-Hand Limits
$$\\lim_{x \\to a^-} f(x)$$]@

This notation means $x$ approaches $a$ through values strictly less than $a$. You move along the $x$-axis from the left, getting closer to $a$ but never reaching or passing it.

Alternative notations include $\\lim_{x \\to a-} f(x)$ and $\\lim_{x \\uparrow a} f(x)$. Some texts describe this as approaching "from below" since smaller $x$-values lie below $a$ on the number line. All the variants appear among the [calculus symbols](!/math-symbols/calculus).

The left-hand limit asks: as $x$ increases toward $a$, what value does $f(x)$ approach?
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Right-Hand Limits`,
    content: `
The right-hand limit uses a plus superscript:

@academic[formula_callout:Right-Hand Limits
$$\\lim_{x \\to a^+} f(x)$$]@

This notation means $x$ approaches $a$ through values strictly greater than $a$. You move along the $x$-axis from the right, getting closer to $a$ but never reaching or passing it.

Alternative notations include $\\lim_{x \\to a+} f(x)$ and $\\lim_{x \\downarrow a} f(x)$. Some texts describe this as approaching "from above" since larger $x$-values lie above $a$ on the number line.

The right-hand limit asks: as $x$ decreases toward $a$, what value does $f(x)$ approach?
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `The Connection to Two-Sided Limits`,
    content: `
The [two-sided limit](!/calculus/limits/two-sided) exists if and only if both one-sided limits exist and are equal:

@academic[formula_callout:The Connection to Two-Sided Limits
$$\\lim_{x \\to a} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$]@

@academic[fact,aside:true,width:35%:Bounded, yet no limit from either side
On $(0, 0.001)$ alone, $\\frac{1}{x}$ runs from $1000$ up to infinity, so $\\sin\\frac{1}{x}$ takes every value in $[-1, 1]$ infinitely often. The same happens on $(-0.001, 0)$, so neither one-sided limit at $0$ exists.]@

One-sided limits decompose the two-sided limit into its directional components. Checking whether a two-sided limit exists often begins with computing the one-sided limits separately.

If the one-sided limits exist but differ, the two-sided limit does not exist. If either one-sided limit fails to exist (due to oscillation or unbounded behavior), the two-sided limit also fails.

Oscillation is the less familiar of the two failures. A function can stay bounded near $a$, never running off to infinity, and still never settle on one height from either side: as $x$ closes in on $a$, its values keep sweeping up and down without end.
`,
    before: ``,
    after: ``,
    link: ``
  },
  notation: {
    title: `Reading the One-Sided Notation`,
    lead: `The two sections above introduced the minus and plus superscripts in passing. This section is about the marks themselves: the three competing traditions you will meet across textbooks, the shorthand for a one-sided **value** rather than a one-sided limit, and the two places the superscript is routinely misread.`,
    inherited: `$\\lim$ and $\\to$ keep the meanings given on [Limits](!/calculus/limits). The criterion that both sides must agree is stated in **The Connection to Two-Sided Limits** above.`,
    entries: [
      {
        id: 'left-hand-limit',
        tex: `$\\lim\\limits_{x \\to a^{-}} f(x)$`,
        read: `The limit of f of x as x approaches a from the left`,
        means: `The superscript minus is a **direction, not an operation**. It restricts $x$ to values strictly below $a$ and says nothing about the sign of anything. The function need not be defined at $a$ at all — that is the whole point of a limit, and it stays true one-sided. The [LaTeX reference](!/latex) writes it @[\\lim_{x \\to a^{-}}]@.`,
        cases: `At an interior point both sides exist and the [two-sided limit](!/calculus/limits/two-sided) is the question worth asking. At the left endpoint of a domain there is nothing below $a$, so only the right-hand limit exists and [continuity](!/calculus/limits/continuity) there is one-sided by necessity. Across a jump in a [piecewise function](!/functions/piecewise) both sides exist and disagree.`,
        alsoWritten: `$\\lim\\limits_{x \\to a-0} f(x)$ — the Russian and Eastern European tradition, standard in Fichtenholz and Demidovich, where $-0$ reads as “a shade below”. $\\lim\\limits_{x \\uparrow a} f(x)$ — common in analysis and measure theory, where the arrow stresses that $x$ climbs monotonically toward $a$; the [mathematical keyboard](!/keyboard) carries $\\uparrow$ under its arrow set. $\\lim\\limits_{x \\to a,\\, x<a} f(x)$ — the explicit-condition form favoured in French texts, which simply spells out what the superscript abbreviates.`,
        confusedWith: `$a^{-}$ is not $-a$, and it is not $a-1$. Nothing is being subtracted. The clearest case is $x \\to 0^{-}$: this means approaching zero **through negative numbers**, not approaching some quantity called negative zero. The superscript modifies the approach, never the number.`,
        sameGlyphElsewhere: `A superscript $-1$ marks the [inverse function](!/functions/inverse) — the same corner of the symbol doing an unrelated job. The one place the usage genuinely carries over is probability, where $F(x^{-})$ is the left limit of a [distribution function](!/probability/distributions): same notation, same meaning, different subject.`,
      },
      {
        id: 'right-hand-limit',
        tex: `$\\lim\\limits_{x \\to a^{+}} f(x)$`,
        read: `The limit of f of x as x approaches a from the right`,
        means: `The mirror of the left-hand form: $x$ is restricted to values strictly above $a$. Worth reading aloud as “from above” rather than “from the right”, because right and greater only coincide while you are looking at a horizontal axis.`,
        cases: `This is the side that survives at a **left** endpoint — on $[a,b]$ the only limit available at $a$ is the right-hand one. It is also the side that defines right-continuity, the convention every cumulative [distribution function](!/probability/distributions) obeys.`,
        alsoWritten: `$\\lim\\limits_{x \\to a+0} f(x)$ and $\\lim\\limits_{x \\downarrow a} f(x)$, matching the two traditions above; the [mathematical keyboard](!/keyboard) has $\\downarrow$ beside $\\uparrow$.`,
        confusedWith: `The arrow pairing runs opposite to intuition: $\\uparrow$ goes with the **minus** superscript and $\\downarrow$ goes with the **plus**. The arrow describes how $x$ travels — climbing from below, or descending from above — while the superscript names the side it started on. Anyone who learns one form and later meets the other swaps them at least once.`,
        sameGlyphElsewhere: ``,
      },
      {
        id: 'one-sided-value',
        tex: `$f(a^{-})$  ·  $f(a^{+})$`,
        read: `f of a minus, f of a plus`,
        means: `Shorthand for the **value** of the one-sided limit, not for evaluating $f$ at some point called $a^{-}$. No such point exists. $f(a^{-})$ is simply a compact way of writing $\\lim\\limits_{x \\to a^{-}} f(x)$ when the limit has to appear several times in one formula.`,
        cases: `The shorthand earns its keep wherever both sides appear together. A Fourier series converges at a jump to the midpoint $\\tfrac{1}{2}\\left[f(a^{-}) + f(a^{+})\\right]$, which is unreadable written out in full. Right-continuity is stated as $f(a) = f(a^{+})$. The size of a jump in a [piecewise function](!/functions/piecewise) is $f(a^{+}) - f(a^{-})$.`,
        alsoWritten: `$f(a-0)$ and $f(a+0)$, following the same tradition that writes $x \\to a-0$.`,
        confusedWith: `$f(a)$ is the actual value of the function at $a$ — a third number, which may equal one side, both, or neither, and may not exist at all. A removable discontinuity is exactly the case $f(a^{-}) = f(a^{+}) \\neq f(a)$, and it becomes invisible the moment the three are treated as one object.`,
        sameGlyphElsewhere: ``,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/limits`,
    parentLabel: `Limits`,
  },

  obj4: {
    title: `Piecewise Functions`,
    content: `
Functions defined by different formulas on different intervals require one-sided limit analysis at the boundaries between pieces.

Consider:

@academic[formula_callout:Piecewise Functions
$$f(x) = \\begin{cases} x^2 & x < 2 \\\\ 3x - 2 & x \\geq 2 \\end{cases}$$]@

At $x = 2$, the left-hand limit uses the formula $x^2$:

@academic[formula_callout:Piecewise Functions
$$\\lim_{x \\to 2^-} x^2 = 4$$]@

The right-hand limit uses the formula $3x - 2$:

@academic[formula_callout:Piecewise Functions
$$\\lim_{x \\to 2^+} (3x - 2) = 4$$]@

@academic[pitfall,aside:true,width:35%:Using the wrong piece
Taking both sides from the piece that holds at $x = 2$: for $x^2$ when $x < 2$ and $3x$ when $x \\geq 2$, that gives $6$ from both sides. The left side uses $x^2$ and gives $4$, so the limit does not exist.
[Read more](!#pitfalls)]@

Since both one-sided limits equal $4$, the two-sided limit exists and equals $4$. If the formulas had produced different values, the two-sided limit would not exist.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Jump Discontinuities`,
    content: `
A [jump discontinuity](!/calculus/limits/continuity) occurs when both one-sided limits exist but differ. The function "jumps" from one value to another at the point.

The floor function $\\lfloor x \\rfloor$ provides a standard example. At any integer $n$:

@academic[formula_callout:Jump Discontinuities
$$\\lim_{x \\to n^-} \\lfloor x \\rfloor = n - 1$$]@

@academic[formula_callout:Jump Discontinuities
$$\\lim_{x \\to n^+} \\lfloor x \\rfloor = n$$]@

@academic[pitfall,aside:true,width:35%:Plugging in the integer
Substituting $x = 2$ gives $\\lfloor 2 \\rfloor = 2$ as the left-hand limit. Just left of $2$, at $x = 1.9$ or $1.99$, the floor is $1$, so $\\lim_{x \\to 2^-} \\lfloor x \\rfloor = 1$.
[Read more](!#pitfalls)]@

The left-hand limit gives the integer below, while the right-hand limit gives the integer itself. The function jumps by $1$ at each integer. No two-sided limit exists at these points because the one-sided limits disagree.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `One-Sided Limits at Vertical Asymptotes`,
    content: `
Near a vertical asymptote, one-sided limits typically equal $+\\infty$ or $-\\infty$. The sign can differ depending on the direction of approach.

For $f(x) = \\dfrac{1}{x - 2}$:

@academic[formula_callout:One-Sided Limits at Vertical Asymptotes
$$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty$$]@

@academic[formula_callout:One-Sided Limits at Vertical Asymptotes
$$\\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$]@

@academic[pitfall,aside:true,width:35%:Ignoring the sign of the denominator
Treating $\\lim_{x \\to 3^-} \\frac{x}{x - 3}$ as a number over something tiny gives $+\\infty$. For $x < 3$ the denominator is negative while the numerator is near $3$, so the limit is $-\\infty$; at $x = 2.99$ the value is $-299$.
[Read more](!#pitfalls)]@

From the left, $x - 2$ is a small negative number, so the reciprocal is a large negative number. From the right, $x - 2$ is a small positive number, so the reciprocal is a large positive number.

The [limits and infinity](!/calculus/limits/infinity) page covers infinite limits in detail.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `One-Sided Limits and Square Roots`,
    content: `
Expressions involving square roots often force one-sided analysis due to domain restrictions.

The expression $\\sqrt{4 - x}$ requires $4 - x \\geq 0$, meaning $x \\leq 4$. At $x = 4$, only the left-hand limit is meaningful:

@academic[formula_callout:One-Sided Limits and Square Roots
$$\\lim_{x \\to 4^-} \\sqrt{4 - x} = 0$$]@

Similarly, $\\sqrt{x - 4}$ requires $x \\geq 4$, so at $x = 4$, only the right-hand limit applies:

@academic[formula_callout:One-Sided Limits and Square Roots
$$\\lim_{x \\to 4^+} \\sqrt{x - 4} = 0$$]@

Domain boundaries naturally restrict limits to one side.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Evaluating One-Sided Limits`,
    content: `
The same [techniques](!/calculus/limits/evaluating) used for two-sided limits apply: direct substitution, factoring, rationalizing. The difference lies in tracking which side you approach from.

Sign analysis becomes critical. For the expression $\\dfrac{|x|}{x}$:

@academic[formula_callout:Evaluating One-Sided Limits
$$\\lim_{x \\to 0^+} \\frac{|x|}{x} = \\lim_{x \\to 0^+} \\frac{x}{x} = 1$$]@

@academic[formula_callout:Evaluating One-Sided Limits
$$\\lim_{x \\to 0^-} \\frac{|x|}{x} = \\lim_{x \\to 0^-} \\frac{-x}{x} = -1$$]@

@academic[pitfall,aside:true,width:35%:Dropping the absolute value bars
Treating $|x - 2|$ as $x - 2$ in $\\lim_{x \\to 2^-} \\frac{x^2 - 4}{|x - 2|}$ cancels to $x + 2$ and gives $4$. For $x < 2$, $|x - 2| = 2 - x$, so the quotient is $-(x + 2)$ and the limit is $-4$.
[Read more](!#pitfalls)]@

When $x > 0$, the absolute value $|x| = x$. When $x < 0$, the absolute value $|x| = -x$. The direction of approach determines which case applies.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `One-Sided Continuity`,
    content: `
A function can be [continuous](!/calculus/limits/continuity) from one side without being continuous from the other.

Continuous from the left at $a$:

@academic[formula_callout:One-Sided Continuity
$$\\lim_{x \\to a^-} f(x) = f(a)$$]@

Continuous from the right at $a$:

@academic[formula_callout:One-Sided Continuity
$$\\lim_{x \\to a^+} f(x) = f(a)$$]@

@academic[formula_callout:One-Sided Continuity
$$f \\text{ right-continuous at } a \\iff \\lim_{x \\to a^+} f(x) = f(a); \\quad f \\text{ left-continuous at } a \\iff \\lim_{x \\to a^-} f(x) = f(a)$$
/calculus/formulas#one-sided_continuity]@

@academic[formulas_link:Browse all limit formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Checking continuity from one side
Calling the step $f(x) = x$ for $x < 0$, $f(x) = x + 1$ for $x \\geq 0$ continuous at $0$ because $\\lim_{x \\to 0^+} f(x) = 1 = f(0)$ checks one side only. The left-hand limit is $0$, so $f$ is right-continuous at $0$ but not continuous.
[Read more](!#pitfalls)]@

Full continuity at $a$ requires both. On a closed interval $[a, b]$, continuity means: continuous on the open interval $(a, b)$, continuous from the right at $a$, and continuous from the left at $b$.

@academic[punchline:Continuity at a point is two one-sided checks against $f(a)$; at an endpoint of an interval only one of them exists.]@
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Applications of One-Sided Limits`,
    content: `
One-sided limits appear throughout calculus and its applications.

## Endpoint Behavior

On closed intervals, function behavior at endpoints can only be examined from one direction. The limit from within the interval captures the boundary behavior.

## Classifying Discontinuities

Determining whether a discontinuity is a jump, removable, or infinite requires comparing one-sided limits to each other and to the function value.

## Piecewise Models

@academic[fact,aside:true,width:35%:A higher bracket never cuts your pay
Each bracket's rate applies only to the income above its threshold, so the tax owed has equal one-sided limits at every threshold: its graph bends there but never jumps. A raise that crosses into a higher bracket always leaves more after tax.]@

Real-world models often switch formulas at threshold values—tax brackets, shipping rates, material phase changes. One-sided limits detect whether the transition is smooth or abrupt.

Income tax is a familiar case. In a bracket system the income scale is cut at a few thresholds, and each bracket carries its own tax rate. The tax owed is then a piecewise function of income, with a new formula taking over at every threshold, and the question is what happens to the amount owed just below and just above each one.

## One-Sided Derivatives

A function may have different instantaneous rates of change from the left and right at a corner point. One-sided derivatives capture this asymmetry.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj11: {
    title: `Summary: Where One-Sided Limits Are Essential`,
    content: `
One-sided limits aren&apos;t just a finer-grained version of the two-sided limit — they&apos;re the right tool for a handful of specific situations where two-sided analysis either fails or doesn&apos;t apply. The table below collects six such situations, pairing each with its diagnostic pattern: what the LHL and RHL typically look like, and why the one-sided form is structurally required. Recognizing the situation often points directly at the right technique.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj12: {
    title: `Common Pitfalls`,
    content: `Five mistakes account for most wrong answers with one-sided limits. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Using the wrong piece**

At a boundary between the pieces of a piecewise function, both one-sided limits are computed from the formula that holds at the boundary point itself, so the left side never uses its own formula.

Wrong working: for $f(x) = x^2$ when $x < 2$ and $f(x) = 3x$ when $x \\geq 2$, the point $x = 2$ belongs to the piece $3x$, so
$$\\lim_{x \\to 2^-} f(x) = 3 \\cdot 2 = 6, \\qquad \\lim_{x \\to 2^+} f(x) = 6, \\qquad \\lim_{x \\to 2} f(x) = 6$$

Right working: each side uses the formula that holds on that side.
$$\\lim_{x \\to 2^-} x^2 = 4, \\qquad \\lim_{x \\to 2^+} 3x = 6$$
Since $4 \\neq 6$, the two-sided limit does not exist.

Why it happens: the boundary point is listed in one of the pieces, and that piece feels like the formula at $2$. A left-hand limit never uses $x = 2$ itself, only values below it.

How to check: pick one value on each side and ask which condition it meets. $x = 1.99$ satisfies $x < 2$ and gives $1.99^2 = 3.9601$; $x = 2.01$ satisfies $x \\geq 2$ and gives $6.03$.

**Plugging in the integer**

The left-hand limit of the floor function at an integer is found by substituting the integer, which gives the function value instead of the value approached from below.

Wrong working:
$$\\lim_{x \\to 2^-} \\lfloor x \\rfloor = \\lfloor 2 \\rfloor = 2$$

Right working: for $1 \\leq x < 2$ the floor is $1$, so the function is constant at $1$ just left of $2$.
$$\\lim_{x \\to 2^-} \\lfloor x \\rfloor = 1, \\qquad \\lim_{x \\to 2^+} \\lfloor x \\rfloor = 2$$
The value $\\lfloor 2 \\rfloor = 2$ matches the right side only.

Why it happens: direct substitution is the reflex, and it works for continuous functions. At a jump the value at the point belongs to one side only.

How to check: evaluate just inside the side being approached. $\\lfloor 1.99 \\rfloor = 1$ and $\\lfloor 1.999 \\rfloor = 1$; a substituted answer that differs from these is wrong.

**Ignoring the sign of the denominator**

Near a vertical asymptote the size of the quotient is found correctly, but its sign is assumed to be positive.

Wrong working: as $x \\to 3^-$ the numerator tends to $3$ and the denominator to $0$, so the quotient is $3$ divided by something tiny, and
$$\\lim_{x \\to 3^-} \\frac{x}{x - 3} = +\\infty$$

Right working: for $x$ slightly less than $3$, $x - 3$ is a small negative number while $x$ is close to $3$, which is positive. A positive number over a small negative one is a large negative number.
$$\\lim_{x \\to 3^-} \\frac{x}{x - 3} = -\\infty, \\qquad \\lim_{x \\to 3^+} \\frac{x}{x - 3} = +\\infty$$

Why it happens: the rule that a tiny denominator gives a huge value is remembered without the sign, and $x - 3$ is handled as if it were $|x - 3|$.

How to check: substitute one value on the side. $x = 2.99$ gives $\\frac{2.99}{-0.01} = -299$.

**Dropping the absolute value bars**

In a quotient with an absolute value, $|x - a|$ is replaced by $x - a$ and cancelled, without checking which side of $a$ is being approached.

Wrong working:
$$\\lim_{x \\to 2^-} \\frac{x^2 - 4}{|x - 2|} = \\lim_{x \\to 2^-} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2^-} (x + 2) = 4$$

Right working: for $x < 2$, $x - 2$ is negative, so $|x - 2| = -(x - 2)$.
$$\\lim_{x \\to 2^-} \\frac{(x - 2)(x + 2)}{-(x - 2)} = \\lim_{x \\to 2^-} \\big(-(x + 2)\\big) = -4$$
From the right $|x - 2| = x - 2$ and the limit is $4$, so the two-sided limit does not exist.

Why it happens: once the numerator is factored, the bars look like decoration, and the case $|u| = u$ is the one that comes to mind.

How to check: substitute a value on the side. $x = 1.99$ gives $\\frac{3.9601 - 4}{0.01} = -3.99$, close to $-4$.

**Checking continuity from one side**

Continuity at a point is tested with one one-sided limit only. When that side matches $f(a)$, the function is called continuous.

Wrong working: for $f(x) = x$ when $x < 0$ and $f(x) = x + 1$ when $x \\geq 0$,
$$\\lim_{x \\to 0^+} (x + 1) = 1 = f(0), \\quad \\text{so } f \\text{ is continuous at } 0$$

Right working: the right side shows only that $f$ is continuous from the right at $0$. The left side gives
$$\\lim_{x \\to 0^-} x = 0 \\neq 1 = f(0)$$
so $f$ is not continuous from the left, and therefore not continuous at $0$.

Why it happens: the side whose formula contains the point is checked first, and it agrees with $f(a)$ whenever that piece is continuous.

How to check: write down all three numbers, $f(a^-)$, $f(a^+)$ and $f(a)$, and require them to be equal. Here they are $0$, $1$ and $1$. Only at an endpoint of a closed interval is one side enough.
`,
    before: ``,
    after: ``,
    link: ``
  }
};



const introContent = {
   id:"intro",

  title: `Approaching From One Direction`,

  content: `
Sometimes a function behaves differently depending on which side you approach from. A piecewise function may follow one formula for $x < a$ and a different formula for $x > a$. A rational function may blow up to $+\\infty$ on one side and $-\\infty$ on the other. In these situations, one-sided limits become essential.

The left-hand limit examines behavior as $x$ approaches $a$ through values less than $a$. The right-hand limit examines behavior through values greater than $a$. Each direction gets its own answer, and those answers need not agree.

One-sided limits serve as the building blocks for two-sided limits. The two-sided limit exists precisely when both one-sided limits exist and match. When they differ, the one-sided limits capture the full story that a single two-sided limit cannot tell.
`
};

// FAQ pass: cut seven case-A questions — left-hand, right-hand, the two-sided
// connection, jump discontinuities, vertical asymptotes, evaluating, and
// one-sided continuity each have an h2 stating the answer. (The two-sided
// comparison deferred here from the hub is settled by the h2 "The Connection
// to Two-Sided Limits", so it needs no entry on either page.) Kept the
// piecewise and square-root questions, both extended; invented two from the
// notation section, whose entries no heading surfaces.
const faqQuestions = {
  obj1: {
    question: "What does x → 0⁻ mean?",
    answer: "The superscript marks a direction, not an operation. Nothing is being subtracted: 0⁻ is not −0 and not 0 − 1. Writing x → 0⁻ means x approaches zero through negative values, staying strictly below it. There is no point called “negative zero” being approached — the superscript modifies the approach, never the number itself.",
    sectionId: "4"
  },
  obj2: {
    question: "What does f(a⁻) mean?",
    answer: "It is shorthand for the value of the left-hand limit, lim(x→a⁻) f(x) — not the result of evaluating f at some point called a⁻, since no such point exists. The notation earns its keep when both sides appear together: the size of a jump is f(a⁺) − f(a⁻), and right-continuity is written f(a) = f(a⁺).",
    sectionId: "4"
  },
  obj3: {
    question: "How do you find limits of piecewise functions?",
    answer: "At a boundary between pieces, evaluate each one-sided limit using the formula that applies on that side. Where f(x) = x² for x < 2 and f(x) = 3x − 2 for x ≥ 2, the left limit at 2 uses x² and gives 4, while the right limit uses 3x − 2 and also gives 4. Since they agree, the two-sided limit exists.",
    sectionId: "5"
  },
  obj4: {
    question: "Why do square roots require one-sided limits?",
    answer: "Because a square root restricts the domain, and a limit can only approach through points where the function is defined. The expression √(4 − x) needs x ≤ 4, so at x = 4 nothing lies to the right and only the left-hand limit is meaningful. Mirror image for √(x − 4): only the right-hand limit exists at 4.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "One-Sided Limits",
    "description": "Learn one-sided limits: left-hand and right-hand limit notation, piecewise functions, jump discontinuities, vertical asymptotes, and one-sided continuity.",
    "url": "https://www.learnmathclass.com/calculus/limits/one-sided",
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
      "name": "One-Sided Limits"
    },
    "teaches": [
      "Left-hand limit notation and meaning",
      "Right-hand limit notation and meaning",
      "Connection between one-sided and two-sided limits",
      "Evaluating limits of piecewise functions",
      "Jump discontinuities and vertical asymptotes",
      "One-sided continuity on closed intervals",
      "Use-case taxonomy for one-sided analysis"
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
        "name": "One-Sided Limits",
        "item": "https://www.learnmathclass.com/calculus/limits/one-sided"
      }
    ]
  }
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpPiecewiseMeet = { kind: 'pieces', svgTitle: 'x^2 for x < 2 and 3x - 2 for x >= 2 both approach 4 at x = 2, so the two-sided limit is 4', xRange: [0, 4], yRange: [-1, 10],
    pieces: [
      { fn: (x) => x * x, from: 0, to: 2, ends: [null, 'open'], color: 'f', label: { text: 'x² (x < 2)', x: 1.2, y: 1.44, pos: 'se' } },
      { fn: (x) => 3 * x - 2, from: 2, to: 4, ends: ['closed', null], color: 'r', label: { text: '3x − 2 (x ≥ 2)', x: 3.1, y: 7.3, pos: 'nw' } },
    ],
    vlines: [{ x: 2 }],
    notes: [{ x: 0.1, y: 9.2, text: 'from the left: 2² = 4', pos: 'e', color: 'f' }, { x: 0.1, y: 8.2, text: 'from the right: 3·2 − 2 = 4', pos: 'e', color: 'r' }, { x: 2.1, y: 2.4, text: 'both sides → 4', pos: 'e' }],
    caption: 'Same one-sided limits from two formulas: the limit at 2 is 4' };
  const fpSignFn = { kind: 'pieces', svgTitle: '|x|/x is -1 for x < 0 and +1 for x > 0 and undefined at 0: the one-sided limits are -1 and 1', xRange: [-3, 3], yRange: [-2, 2],
    pieces: [
      { fn: () => -1, from: -3, to: 0, ends: [null, 'open'], color: 'r', label: { text: 'x < 0: |x|/x = −1', x: -2.9, y: -1, pos: 'n' } },
      { fn: () => 1, from: 0, to: 3, ends: ['open', null], color: 'f', label: { text: 'x > 0: |x|/x = 1', x: 1.5, y: 1, pos: 'n' } },
    ],
    notes: [{ x: 0.15, y: -0.5, text: 'no value at 0', pos: 'e' }, { x: -2.9, y: 1.7, text: 'left −1, right 1: no limit at 0', pos: 'e', color: 'r' }],
    caption: '|x|/x: −1 from the left, 1 from the right, no limit at 0' };
  // Concept introduction figures (section 1), one running instance: the jump at 0.
  const fpCiSides = { kind: 'domainOpen', svgTitle: 'Two ways to approach a point: from the left and from the right', range: [-3, 3],
    rows: [
      { label: 'from the left: x < 0', color: 'g', segs: [[null, 0, false, true]], tag: { text: 'x → 0⁻', x: 1.2 } },
      { label: 'from the right: x > 0', color: 'f', segs: [[0, null, true]], tag: { text: 'x → 0⁺', x: 1.6 } },
    ],
    caption: 'Every approach to 0 comes from one side or the other' };

  const conceptIntroFigures = {
    sides: renderFunctionPlotV2(fpCiSides),
    jump: functionLimitDiagrams.jump,
    jumpTable: ciJumpTable,
  };

  const demoUnits = {
    connection: demoUnitFrame({
      svg: functionLimitDiagrams.onesided,
      caption: '&#8730;x at 0: a right-hand limit with no left-hand partner',
      text: 'Only the right probe can be placed, and it heads to 0; with no function to the left there is no left-hand limit to compare it with, so the two-sided limit is not defined at this endpoint although the one-sided one is. The equivalence in this section needs both sides to exist and agree. Try both probes on the',
      href: '/calculus/visual-tools/limit',
      linkText: 'limit explorer',
    }),
    staircase: demoUnitFrame({
      svg: functionContinuityDiagrams.staircase,
      caption: 'The floor function: a jump at every integer',
      text: 'At each integer the function steps up by one: the left-hand limit is the lower step and the right-hand limit the upper one, so the two never agree and every integer is a jump discontinuity. Between integers the function is constant and perfectly continuous. Test the checker at an integer and at a non-integer on the',
      href: '/calculus/visual-tools/continuity',
      linkText: 'continuity checker',
    }),
    asymptote: demoUnitFrame({
      svg: functionLimitDiagrams['infinite-jump'],
      caption: '1/x at 0: &#8722;&#8734; on the left, +&#8734; on the right',
      text: 'The probes at &#177;0.5 read &#8722;2 and 2 and run off in opposite directions as they close in, which is exactly the sign pattern the section derives for 1/(x &#8722; 2) at 2: the side decides the sign. Watch the two readings separate on the',
      href: '/calculus/visual-tools/limit',
      linkText: 'limit explorer',
    }),
    piecewiseMeet: demoUnitFrame({
      svg: renderFunctionPlotV4(fpPiecewiseMeet),
      caption: 'Two formulas meeting at x = 2',
      text: 'The section&#8217;s f(x) = x&#178; for x &lt; 2 and 3x &#8722; 2 for x &#8805; 2. Approaching 2 from the left, the blue piece x&#178; heads to 4; from the right, the amber piece 3x &#8722; 2 also heads to 4, and f(2) = 4 as well. Because the two one-sided limits agree, the two-sided limit exists and equals 4. The graph still bends at the join, but that affects the derivative, not the limit.',
    }),
    signFn: demoUnitFrame({
      svg: renderFunctionPlotV4(fpSignFn),
      caption: '|x|/x on each side of 0',
      text: 'The section&#8217;s |x|/x. For every positive x, |x| = x and the quotient is 1; for every negative x, |x| = &#8722;x and the quotient is &#8722;1. The graph is two flat rays with open ends at 0, where the expression has no value. The right-hand limit is 1, the left-hand limit is &#8722;1, and since they differ the two-sided limit at 0 does not exist.',
    }),
  };

return {
  props: {
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj3Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "One-Sided Limits: Left & Right Approach | Learn Math Class",
      description: "Learn one-sided limits: left-hand and right-hand limit notation, piecewise functions, jump discontinuities, vertical asymptotes, and one-sided continuity.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/one-sided",
      name: "One-Sided Limits"
    },
  }
}
   }


export default function OneSidedPage({seoData, sectionsContent, introContent, obj3Table, summaryTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template C (failure first).
  const conceptIntro = {
    beats: [
      {
        id: 'assumption',
        lead: `It is natural to expect a graph to head toward one height near any point.`,
        content: `For a smooth curve, and even for a curve with a single missing point, the values near $x = 0$ close in on one number, whichever way $x$ comes from. A limit has only ever needed $x$ to get close to $0$; nobody asked from which side, because the answer never depended on it.`,
        visual: ciSvg('sides'),
        caption: `The two ways $x$ can approach $0$: through values less than $0$, or through values greater than $0$.`,
      },
      {
        id: 'break',
        kind: 'instance',
        tone: 'break',
        lead: `At a jump, the two sides head for different heights.`,
        content: [
          `Take $f(x) = x$ for $x < 0$ and $f(x) = x + 1$ for $x \\geq 0$, and approach $0$ from each side.`,
          ciTable('jumpTable'),
          `Values to the left close in on $0$; values to the right close in on $1$. There is no single number the function approaches at $0$, so $\\lim_{x \\to 0} f(x)$ does not exist — yet each side, on its own, is perfectly well behaved.`,
        ],
        visual: ciSvg('jump'),
        caption: `The step at $x = 0$: the left branch arrives at height $0$ with an open circle, the right branch starts at height $1$ with a filled one. The same state is on the [limit explorer](!/calculus/visual-tools/limit).`,
      },
      {
        id: 'diagnosis',
        lead: `The break was readable in advance: the two sides follow two different rules.`,
        content: `Left of $0$ the function is $x$, right of $0$ it is $x + 1$. Each formula on its own has an obvious value at $0$ — $0$ and $1$. A two-sided limit asks the two rules to agree, and here they were never going to. The fix is to stop asking for agreement and ask each side separately.`,
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The left-hand [one-sided limit](!/calculus/definitions#one_sided_limit) of $f$ at $a$ is the value $f(x)$ approaches as $x$ approaches $a$ through values less than $a$; the right-hand limit uses values greater than $a$. The left-hand limit is written`,
        formula: `@academic[formula_callout:Left-Hand Limits
$$\\lim_{x \\to a^-} f(x)$$]@`,
        footer: `For the step: $\\lim_{x \\to 0^-} f(x) = 0$ and $\\lim_{x \\to 0^+} f(x) = 1$. The right-hand notation is in the next section.`,
      },
      {
        id: 'kind',
        lead: `Each one-sided limit is a number, attached to a function, a point and a side.`,
        content: [
          `This notation means $x$ approaches $a$ through values strictly less than $a$. You move along the $x$-axis from the left, getting closer to $a$ but never reaching or passing it.`,
          `Alternative notations include $\\lim_{x \\to a-} f(x)$ and $\\lim_{x \\uparrow a} f(x)$. Some texts describe this as approaching "from below" since smaller $x$-values lie below $a$ on the number line. All the variants appear among the [calculus symbols](!/math-symbols/calculus).`,
          `The left-hand limit asks: as $x$ increases toward $a$, what value does $f(x)$ approach?`,
        ],
      },
      {
        id: 'caveat',
        lead: `Read backwards, the failure becomes a test for the two-sided limit.`,
        content: `A two-sided limit exists exactly when both one-sided limits exist and are equal. So the check runs: compute each side; if they match, that common value is the limit; if they differ, as at the step, there is none. [Section 3](!/calculus/limits/one-sided#3) states this as an equivalence.`,
      },
      {
        id: 'exit',
        content: `The rest of the page gives right-hand limits, the connection to two-sided limits, how to evaluate one-sided limits, and where they are needed: piecewise functions, step functions, infinite one-sided limits, endpoints of domains, and continuity from one side.`,
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
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key={'obj3-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj3Table }} />,
                  <div key={'unit-connection'} dangerouslySetInnerHTML={{ __html: demoUnits.connection }} />,
          `The two-sided limit is a conclusion drawn from the one-sided ones, never the other way round.`,
        ]
    },
    {
        id:'4',
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
        id:'5',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
                  <div key={'unit-piecewiseMeet'} dangerouslySetInnerHTML={{ __html: demoUnits.piecewiseMeet }} />,
          `Changing the right piece to 3x would give a right limit of 6: a jump, and no two-sided limit.`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
                  <div key={'unit-staircase'} dangerouslySetInnerHTML={{ __html: demoUnits.staircase }} />,
          `The one-sided limits at a jump are the two values the function is torn between.`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
                  <div key={'unit-asymptote'} dangerouslySetInnerHTML={{ __html: demoUnits.asymptote }} />,
          `Near an asymptote the side of approach is the only thing that determines the sign.`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
                  <div key={'unit-signFn'} dangerouslySetInnerHTML={{ __html: demoUnits.signFn }} />,
          `Redefining the value at 0 cannot help: no single number is close to both −1 and 1.`,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`One-Sided Limits FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>One-Sided Limits</h1>
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