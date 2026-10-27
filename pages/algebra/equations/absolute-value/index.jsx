
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import { tableHeaders } from '@/app/styles/theme'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import equationVisualizerDiagrams from '@/app/components/algebra/equations/visualizer/equationVisualizerDiagrams'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'



export async function getStaticProps(){
const keyWords = [
  "absolute value equations",
  "solving absolute value equations",
  "case splitting method",
  "absolute value definition",
  "distance on number line",
  "piecewise absolute value",
  "absolute value both sides",
  "multiple absolute value terms",
  "critical points method",
  "extraneous solutions absolute value",
  "geometric interpretation",
  "absolute value equals zero",
  "interval method",
  "absolute value examples"
]

const linkStyle = 'color: inherit; text-decoration: underline;'


// ---------- TABLES ----------

// obj2 — comparison: three cases of |A| = B by sign of B
const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison} text-align: center;">Sign of B</th>
      <th style="${tableHeaders.comparison}">Resulting case(s)</th>
      <th style="${tableHeaders.comparison}">Solution count</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">B &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = B  or  A = −B</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two (typically)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">B = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">B &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e;">(impossible — absolute value is never negative)</td>
      <td style="padding: 12px 15px; color: #34495e;">none — empty set</td>
    </tr>
  </tbody>
</table>
`


// obj5 — aggregation (worked example): interval analysis of |x−1| + |x+3| = 8
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Interval</th>
      <th style="${tableHeaders.aggregation}">|x − 1|</th>
      <th style="${tableHeaders.aggregation}">|x + 3|</th>
      <th style="${tableHeaders.aggregation}">Equation becomes</th>
      <th style="${tableHeaders.aggregation}">Result</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x &lt; −3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−(x − 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−(x + 3)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−2x − 2 = 8</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = −5  <span style="color:#27ae60;font-weight:bold;">✓</span></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">−3 ≤ x ≤ 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−(x − 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x + 3)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4 = 8</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no solution  <span style="color:#e74c3c;font-weight:bold;">✗</span></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">x &gt; 1</td>
      <td style="padding: 12px 15px; color: #34495e;">(x − 1)</td>
      <td style="padding: 12px 15px; color: #34495e;">(x + 3)</td>
      <td style="padding: 12px 15px; color: #34495e;">2x + 2 = 8</td>
      <td style="padding: 12px 15px; color: #34495e;">x = 3  <span style="color:#27ae60;font-weight:bold;">✓</span></td>
    </tr>
  </tbody>
</table>
`


// obj7 — aggregation: geometric interpretation taxonomy
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Equation form</th>
      <th style="${tableHeaders.aggregation}">Geometric question</th>
      <th style="${tableHeaders.aggregation}">Solution</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|x − a| = d</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">which points are exactly d units from a?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = a + d  and  x = a − d</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|x − a| = |x − b|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">which point is equidistant from a and b?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = (a + b) ⁄ 2  (midpoint)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|x − a| + |x − b| = d, d &lt; |a − b|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total distance less than the gap?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none (impossible)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|x − a| + |x − b| = d, d = |a − b|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total distance equals the gap?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every x in [a, b]</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">|x − a| + |x − b| = d, d &gt; |a − b|</td>
      <td style="padding: 12px 15px; color: #34495e;">total distance greater than the gap?</td>
      <td style="padding: 12px 15px; color: #34495e;">two points, one outside each endpoint</td>
    </tr>
  </tbody>
</table>
`


// obj8 — summary: capstone of equation forms
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Equation form</th>
      <th style="${tableHeaders.summary}">Method</th>
      <th style="${tableHeaders.summary}">Number of solutions</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|A| = k, k &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">split into A = k and A = −k; solve each</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two (typically)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|A| = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve A = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|A| = k, k &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none — read off immediately</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none (empty set)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|f(x)| = k, k &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">split into f(x) = k and f(x) = −k; solve each by appropriate method</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">depends on f</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|f(x)| = |g(x)|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f = g or f = −g (or square both sides; verify)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">depends on f, g</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|f(x)| = g(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">split into two cases; require g(x) ≥ 0 at each candidate</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">verify carefully — squaring risks <a href="/algebra/definitions#extraneous_solution" style="${linkStyle}">extraneous solutions</a></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Multiple |…| terms (sum/difference)</td>
      <td style="padding: 12px 15px; color: #34495e;">interval method: find critical points, solve on each interval using piecewise definition</td>
      <td style="padding: 12px 15px; color: #34495e;">varies; verify each candidate lies in its interval</td>
    </tr>
  </tbody>
</table>
`


// ---------- SECTIONS ----------

//  const sectionsContent = {

// obj0: {
//   title: `Key Terms`,
//   content: `
// ## Core Concept

// - [Absolute Value](!/algebra/definitions#absolute_value) — the distance of a number from zero, always non-negative

// ## Equation Solving

// - [Conditional Equation](!/algebra/definitions#conditional_equation) — $|f(x)| = k$ with $k > 0$ splits into two conditional equations
// - [Contradiction](!/algebra/definitions#contradiction) — $|f(x)| = k$ with $k < 0$ has no solution
// - [Solution Set](!/algebra/definitions#solution_set) — typically two values from the two cases
// - [Extraneous Solution](!/algebra/definitions#extraneous_solution) — may arise when squaring to eliminate absolute values

// ## Formulas Used on This Page

// - [Absolute Value Equation](!/algebra/formulas#absolute_value_equation) — $|p| = b \\implies p = b \\text{ or } p = -b$
// `,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
// `,
//   link: '',
// },
//   obj1: {
//     title: `Definition of Absolute Value`,
//     content: `The absolute value of a real number $x$, written $|x|$, is defined piecewise:

// $$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

// The notation $-x$ in the second case does not mean "a negative number." It means "the opposite of $x$." When $x$ is already negative, $-x$ is positive. The absolute value function takes any input and returns a non-negative output: $|x| \\geq 0$ for every real $x$, with equality only when $x = 0$.

// Geometrically, $|x|$ is the distance from $x$ to the origin on the number line. The number $-7$ sits $7$ units from zero, so $|-7| = 7$. The number $4$ sits $4$ units from zero, so $|4| = 4$. Distance is inherently non-negative, which is why absolute value never produces a negative result.

// This non-negativity has an immediate consequence for equations: if $|f(x)| = k$ and $k < 0$, the equation has no solution. No expression inside absolute value bars can produce a negative output. The sign of the right-hand side is the first thing to check before any case analysis begins.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `The Basic Equation`,
//     content: `The equation $|A| = B$, where $A$ is an expression and $B$ is a constant, has three possible structures depending on the sign of $B$.

// When $B > 0$, the equation splits into two cases: $A = B$ or $A = -B$. Both must be solved, and both solutions (if they exist) belong to the solution set. The equation $|2x - 3| = 7$ becomes $2x - 3 = 7$ or $2x - 3 = -7$, giving $x = 5$ or $x = -2$.

// When $B = 0$, the equation reduces to a single case: $A = 0$. There is no split because zero is its own opposite. The equation $|4x + 1| = 0$ gives $4x + 1 = 0$, so $x = -\\frac{1}{4}$.

// When $B < 0$, no solution exists. The equation $|x + 3| = -2$ asks for a non-negative quantity to equal $-2$, which is impossible. The solution set is empty, and no algebra is needed to determine this.

// Checking the sign of the right-hand side before proceeding is not a shortcut — it is the logical first step. A negative right-hand side eliminates the equation immediately, and recognizing this saves the effort of setting up cases that cannot produce valid solutions.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Solving Equations of the Form |f(x)| = k`,
//     content: `When the expression inside the absolute value is a function of $x$ rather than $x$ alone, the case-splitting method applies in the same way. The equation $|f(x)| = k$ (with $k > 0$) generates two separate equations:

// $$f(x) = k \\quad \\text{and} \\quad f(x) = -k$$

// Each equation is solved independently using whatever method the form of $f(x)$ requires. The union of both solution sets is the complete answer.

// When $f(x)$ is linear, each case produces a [linear equation](!/algebra/equations/linear) with exactly one solution, so the original absolute value equation has exactly two solutions (assuming $k > 0$). The equation $|3x + 5| = 11$ yields $3x + 5 = 11$ (so $x = 2$) and $3x + 5 = -11$ (so $x = -\\frac{16}{3}$).

// When $f(x)$ is quadratic, each case is a [quadratic equation](!/algebra/equations/quadratic) that may contribute zero, one, or two solutions. The equation $|x^2 - 4| = 5$ splits into $x^2 - 4 = 5$ and $x^2 - 4 = -5$. The first gives $x^2 = 9$, so $x = \\pm 3$. The second gives $x^2 = -1$, which has no real solutions. The complete solution set is $\\{-3, 3\\}$.

// The method extends to any expression inside the absolute value. The internal structure determines how hard each case is to solve, but the case-splitting framework is always the same.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Equations with Absolute Value on Both Sides`,
//     content: `When absolute value appears on both sides — $|f(x)| = |g(x)|$ — the equation asserts that two expressions are equal in magnitude, possibly differing in sign. This decomposes into two cases:

// $$f(x) = g(x) \\quad \\text{or} \\quad f(x) = -g(x)$$

// Each case is solved separately, and the results are combined.

// The equation $|2x - 1| = |x + 4|$ produces two equations. From $2x - 1 = x + 4$: $x = 5$. From $2x - 1 = -(x + 4)$: $2x - 1 = -x - 4$, so $3x = -3$ and $x = -1$. Both candidates should be verified: $|2(5) - 1| = |9| = 9$ and $|5 + 4| = |9| = 9$, confirming $x = 5$. Similarly, $|2(-1) - 1| = |-3| = 3$ and $|-1 + 4| = |3| = 3$, confirming $x = -1$. The solution set is $\\{-1, 5\\}$.

// An alternative approach uses the algebraic identity $|A| = |B|$ if and only if $A^2 = B^2$. Squaring both sides removes all absolute value bars at once, producing the equation $(2x - 1)^2 = (x + 4)^2$. Expanding and simplifying yields a polynomial equation. This method is algebraically equivalent to case-splitting but carries a risk: squaring can introduce extraneous solutions, so every candidate must be checked in the original equation.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Equations with Multiple Absolute Value Terms`,
//     content: `Equations containing two or more absolute value terms — such as $|x - 1| + |x + 3| = 8$ — cannot be handled by a single case split. Each absolute value expression changes its behavior at a critical point where the expression inside equals zero, and the equation must be analyzed separately on each interval defined by these critical points.

// For $|x - 1| + |x + 3| = 8$, the critical points are $x = 1$ and $x = -3$. These divide the number line into three intervals: $x < -3$, $-3 \\leq x \\leq 1$, and $x > 1$. On each interval, every absolute value expression has a definite sign, so the piecewise definition removes the bars entirely.

// On $x < -3$: both $x - 1 < 0$ and $x + 3 < 0$, so the equation becomes $-(x - 1) + (-(x + 3)) = 8$, which simplifies to $-2x - 2 = 8$, giving $x = -5$. Since $-5 < -3$, this value lies in the interval and is valid.

// On $-3 \\leq x \\leq 1$: $x - 1 \\leq 0$ and $x + 3 \\geq 0$, so the equation becomes $-(x - 1) + (x + 3) = 8$, which simplifies to $4 = 8$. This is false, so no solution exists in this interval.

// On $x > 1$: both expressions are positive, so the equation becomes $(x - 1) + (x + 3) = 8$, giving $2x + 2 = 8$ and $x = 3$. Since $3 > 1$, this is valid.

// The solution set is $\\{-5, 3\\}$. The interval method is systematic: identify critical points, solve on each interval using the appropriate piecewise form, and verify that each candidate belongs to the interval where it was derived.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Absolute Value and Extraneous Solutions`,
//     content: `The case-splitting method, when applied correctly, does not generate extraneous solutions. Each case defines a condition under which the absolute value expression takes a specific sign, and solving within that condition produces only valid results — provided the solution is checked against the interval constraint.

// Extraneous solutions enter through a different route: squaring. The equation $|x - 2| = 3x - 4$ can be solved by case-splitting (the reliable method) or by squaring both sides to obtain $(x - 2)^2 = (3x - 4)^2$. Squaring eliminates the absolute value but is not reversible — it treats $|A| = B$ and $|A| = -B$ identically, and if $B$ takes negative values for some $x$, those values may appear as solutions to the squared equation without satisfying the original.

// For this equation, case-splitting gives two cases. From $x - 2 = 3x - 4$: $x = 1$. Check: $|1 - 2| = 1$ and $3(1) - 4 = -1$. Since $1 \\neq -1$, this candidate is extraneous. From $-(x - 2) = 3x - 4$: $-x + 2 = 3x - 4$, so $x = \\frac{3}{2}$. Check: $|\\frac{3}{2} - 2| = \\frac{1}{2}$ and $3(\\frac{3}{2}) - 4 = \\frac{1}{2}$. This one holds. The only solution is $x = \\frac{3}{2}$.

// The first candidate failed because the right-hand side $3x - 4$ was negative at $x = 1$. An absolute value equation $|A| = B$ requires $B \\geq 0$ at the solution point. This constraint is automatically enforced by careful case-splitting but easily missed when squaring.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Geometric Interpretation`,
//     content: `Absolute value measures distance on the number line, and this interpretation converts many equations into geometric statements that can be read directly.

// The equation $|x - a| = d$ asks: which points on the number line are exactly $d$ units from $a$? There are two such points, one on each side: $x = a + d$ and $x = a - d$. The solutions are symmetric about $a$, and $a$ is their midpoint. The equation $|x - 5| = 3$ has solutions $x = 8$ and $x = 2$, both exactly $3$ units from $5$.

// The equation $|x - a| = |x - b|$ asks: which point is equidistant from $a$ and $b$? On the number line, exactly one point lies at equal distance from two distinct fixed points — the midpoint $x = \\frac{a + b}{2}$. The equation $|x - 1| = |x - 7|$ has the single solution $x = 4$, the midpoint of $1$ and $7$.

// The equation $|x - a| + |x - b| = d$ asks: which points have the property that their total distance to $a$ and $b$ equals $d$? The minimum possible value of $|x - a| + |x - b|$ is $|a - b|$ (achieved by any $x$ between $a$ and $b$). If $d < |a - b|$, no solution exists. If $d = |a - b|$, every point in the closed interval $[a, b]$ is a solution. If $d > |a - b|$, exactly two solutions exist, one beyond each endpoint.

// These geometric readings do not replace the algebraic method, but they provide a check on the number and location of solutions before any computation begins.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Summary of Absolute Value Equation Forms`,
//     content: `The forms covered above all fit a small set of patterns. The table below collects them with the recommended method for each and the typical number of solutions to expect. The constraint $|A| \\geq 0$ is the unifying logic: every method either uses it directly (case-splitting) or has to verify it after the fact (squaring).`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };



// Concept introduction (section 2, "The Basic Equation") — template C,
// failure first. Running instance: |2x − 3| = 7, the section's own example.
// Old obj2 text is kept in sectionsContent.obj2, unused; its formula box with
// link, pitfall aside, seven passages, obj2Table and the punchline are
// carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciCheckTable = ciTableOpen(['x', '2x − 3', '|2x − 3|', 'equals 7?']) +
  ciRow(['5', '7', '7', 'yes — found by dropping the bars']) +
  ciRow(['−2', '−7', '7', 'yes — missed'], { shade: true, last: true, color: '#a4243b', cols: [3] }) +
  '</tbody></table>'

const sectionsContent = {

  obj0: {
    title: `Key Terms`,
    content: `
## Core Concept

- [Absolute Value](!/algebra/definitions#absolute_value) — the distance of a number from zero, always non-negative

## Equation Solving

- [Conditional Equation](!/algebra/definitions#conditional_equation) — $|f(x)| = k$ with $k > 0$ splits into two conditional equations
- [Contradiction](!/algebra/definitions#contradiction) — $|f(x)| = k$ with $k < 0$ has no solution
- [Solution Set](!/algebra/definitions#solution_set) — typically two values from the two cases
- [Extraneous Solution](!/algebra/definitions#extraneous_solution) — may arise when squaring to eliminate absolute values

## Formulas Used on This Page

- [Absolute Value Equation](!/algebra/formulas#absolute_value_equation) — $|p| = b \\implies p = b \\text{ or } p = -b$
`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
`,
    link: '',
  },

  obj1: {
    title: `Definition of Absolute Value`,
    content: `The absolute value of a real number $x$, written $|x|$, is defined piecewise:

@academic[formula_callout:Definition of Absolute Value
$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$]@

The notation $-x$ in the second case does not mean "a negative number." It means "the opposite of $x$." When $x$ is already negative, $-x$ is positive.

@academic[rule_plain:The absolute value function takes any input and returns a non-negative output: $|x| \\geq 0$ for every real $x$, with equality only when $x = 0$.]@

Geometrically, $|x|$ is the distance from $x$ to the origin on the number line. The number $-7$ sits $7$ units from zero, so $|-7| = 7$. The number $4$ sits $4$ units from zero, so $|4| = 4$. Distance is inherently non-negative, which is why absolute value never produces a negative result.

This non-negativity has an immediate consequence for equations: if $|f(x)| = k$ and $k < 0$, the equation has no solution. No expression inside absolute value bars can produce a negative output. The sign of the right-hand side is the first thing to check before any case analysis begins.`,
    before: ``,
    after: ``,
    link: '',
  },
  notation: {
    title: `Absolute Value Notation`,
    lead: `The bars as a bracket pair, the most overloaded glyph in mathematics, and the algebraic alias that lets the bars be squared away.`,
    inherited: `The $\\pm$ behind every case split — [radical notation](!/algebra/roots/properties#notation); the cases brace in the definition — [piecewise functions](!/functions/piecewise).`,
    entries: [
      {
        id: 'bars-as-brackets',
        tex: `$|a + b|$`,
        read: `The absolute value of the whole quantity a plus b`,
        means: `The bars are a bracket pair: everything between them is one block, evaluated first — like the radical's vinculum, an invisible parenthesis with a built-in operation. The [mathematical keyboard](!/keyboard) inserts the pair without typing either bar.`,
        cases: `Nested bars are legal but hard on the eye: $\\left||x| - 1\\right|$ resolves inside-out. Print sizes the outer pair taller; handwriting has no such mercy, which is why worked solutions relabel the inner block instead.`,
        alsoWritten: `$\\operatorname{abs}(x)$ — the functional spelling, universal in programming, rare in print.`,
        confusedWith: `A distributable mark. $|a + b| \\neq |a| + |b|$ in general — the gap between them is the triangle inequality $|a+b| \\leq |a| + |b|$, and treating the bars like a factor erases it.`,
      },
      {
        id: 'overloaded-pipes',
        tex: `$|x|$ · $|z|$ · $|A|$ · $|M|$`,
        read: `The same two bars, four different jobs`,
        means: `The vertical pair is the most overloaded bracket in mathematics. Here it means distance to zero, per the **Definition** above — and only some of its other jobs keep that meaning.`,
        cases: `$|z|$ on a [complex number](!/complex-numbers/basics) is the **same** idea — distance to the origin, plane instead of line. $\\|v\\|$ doubles the bars for vector length. Both generalize this page's bars honestly.`,
        confusedWith: `The unrelated jobs. $|A|$ on a set is [cardinality](!/set-theory/basics) — a count; $|M|$ on a matrix is the [determinant](!/linear-algebra/determinants) — which can be **negative**: the one place the bars carry no non-negativity promise at all.`,
      },
      {
        id: 'sqrt-alias',
        tex: `$|x| = \\sqrt{x^2}$`,
        read: `The absolute value is the square root of the square`,
        means: `The bars have an algebraic alias: squaring erases the sign, the principal root keeps the result non-negative. One identity, two directions — it defines $|x|$ without cases, and it lets equations shed their bars by squaring.`,
        cases: `$|A| = |B|$ is equivalent to $A^2 = B^2$ — the squaring route for **Equations with Absolute Value on Both Sides** below. Calculus leans on the alias too: $\\sqrt{x^2}$ differentiates where the piecewise form needs case-work.`,
        alsoWritten: `$\\max(x, -x)$ — the order-theoretic spelling, common in analysis.`,
        confusedWith: `$\\sqrt{x^2} = x$, with the bars dropped. That identity is false for negative $x$ — the whole story is told at [the even-root identity](!/algebra/roots/properties#notation), whose answer is exactly these bars.`,
      },
    ],
    symbolsHref: `/math-symbols/algebra`,
    symbolsLabel: `All algebra symbols`,
    parentHref: `/algebra/equations`,
    parentLabel: `Equations`,
  },

  obj2: {
    title: `The Basic Equation`,
    content: `The equation $|A| = B$, where $A$ is an expression and $B$ is a constant, has three possible structures depending on the sign of $B$.

When $B > 0$, the equation splits into two cases:

@academic[formula_callout:Absolute Value Equation
$$|p| = b \\implies p = b \\text{ or } p = -b \\quad (b > 0)$$
/algebra/formulas#absolute_value_equation]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

Both must be solved, and both solutions (if they exist) belong to the solution set. The equation $|2x - 3| = 7$ becomes $2x - 3 = 7$ or $2x - 3 = -7$, giving $x = 5$ or $x = -2$.

When $B = 0$, the equation reduces to a single case: $A = 0$. There is no split because zero is its own opposite. The equation $|4x + 1| = 0$ gives $4x + 1 = 0$, so $x = -\\frac{1}{4}$.

When $B < 0$, no solution exists. The equation $|x + 3| = -2$ asks for a non-negative quantity to equal $-2$, which is impossible. The solution set is empty, and no algebra is needed to determine this.

@academic[pitfall,aside:true,width:35%:Splitting a negative right-hand side
Splitting $|x + 3| = -2$ into $x + 3 = -2$ or $x + 3 = 2$ gives $x = -5$ or $x = -1$, but both make $|x + 3| = 2$, not $-2$. The equation has no solution.
[Read more](!#pitfalls)]@

Checking the sign of the right-hand side before proceeding is not a shortcut — it is the logical first step. A negative right-hand side eliminates the equation immediately, and recognizing this saves the effort of setting up cases that cannot produce valid solutions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Solving Equations of the Form |f(x)| = k`,
    content: `When the expression inside the absolute value is a function of $x$ rather than $x$ alone, the case-splitting method applies in the same way. The equation $|f(x)| = k$ (with $k > 0$) generates two separate equations:

@academic[formula_callout:Solving Equations of the Form |f(x)| = k
$$f(x) = k \\quad \\text{and} \\quad f(x) = -k$$]@

Each equation is solved independently using whatever method the form of $f(x)$ requires. The union of both solution sets is the complete answer.

When $f(x)$ is linear, each case produces a [linear equation](!/algebra/equations/linear) with exactly one solution, so the original absolute value equation has exactly two solutions (assuming $k > 0$). The equation $|3x + 5| = 11$ yields $3x + 5 = 11$ (so $x = 2$) and $3x + 5 = -11$ (so $x = -\\frac{16}{3}$).

When $f(x)$ is quadratic, each case is a [quadratic equation](!/algebra/equations/quadratic) that may contribute zero, one, or two solutions.

@academic[example:Example
The equation $|x^2 - 4| = 5$ splits into $x^2 - 4 = 5$ and $x^2 - 4 = -5$. The first gives $x^2 = 9$, so $x = \\pm 3$. The second gives $x^2 = -1$, which has no real solutions. The complete solution set is $\\{-3, 3\\}$.]@

@academic[pitfall,aside:true,width:35%:Dropping the negative case
Solving $|3x + 5| = 11$ only as $3x + 5 = 11$ gives $x = 2$ and stops there. The case $3x + 5 = -11$ adds $x = -\\frac{16}{3}$, so the solution set is $\\left\\{-\\frac{16}{3}, 2\\right\\}$.
[Read more](!#pitfalls)]@

The method extends to any expression inside the absolute value. The internal structure determines how hard each case is to solve, but the case-splitting framework is always the same.

To solve your own absolute value equation with each case shown, use the [absolute value equation solver](!/algebra/calculators/equations/absolute-value).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Equations with Absolute Value on Both Sides`,
    content: `When absolute value appears on both sides — $|f(x)| = |g(x)|$ — the equation asserts that two expressions are equal in magnitude, possibly differing in sign. This decomposes into two cases:

@academic[formula_callout:Equations with Absolute Value on Both Sides
$$f(x) = g(x) \\quad \\text{or} \\quad f(x) = -g(x)$$]@

Each case is solved separately, and the results are combined.

@academic[example:Example
The equation $|2x - 1| = |x + 4|$ produces two equations. From $2x - 1 = x + 4$: $x = 5$. From $2x - 1 = -(x + 4)$: $2x - 1 = -x - 4$, so $3x = -3$ and $x = -1$. Both candidates should be verified: $|2(5) - 1| = |9| = 9$ and $|5 + 4| = |9| = 9$, confirming $x = 5$. Similarly, $|2(-1) - 1| = |-3| = 3$ and $|-1 + 4| = |3| = 3$, confirming $x = -1$. The solution set is $\\{-1, 5\\}$.]@

@academic[pitfall,aside:true,width:35%:Negating only the first term
Writing the second case of $|2x - 1| = |x + 4|$ as $2x - 1 = -x + 4$ gives $x = \\frac{5}{3}$, where the sides are $\\frac{7}{3}$ and $\\frac{17}{3}$. Negating the whole side, $-(x + 4) = -x - 4$, gives $x = -1$.
[Read more](!#pitfalls)]@

The second case is where the sign change enters. Its right-hand side is $-g(x)$, the opposite of the entire expression on the right, which for this equation is $-(x + 4) = -x - 4$. Both candidates are then confirmed by substitution, as above.

@academic[rule_plain:An alternative approach uses the algebraic identity $|A| = |B|$ if and only if $A^2 = B^2$.]@

Squaring both sides removes all absolute value bars at once, producing the equation $(2x - 1)^2 = (x + 4)^2$. Expanding and simplifying yields a polynomial equation. This method is algebraically equivalent to case-splitting: both sides are non-negative, so $A^2 = B^2$ holds exactly when $|A| = |B|$, and squaring introduces no extraneous solutions here. Checking the candidates in the original equation is still a good habit against arithmetic slips.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Equations with Multiple Absolute Value Terms`,
    content: `Equations containing two or more absolute value terms — such as $|x - 1| + |x + 3| = 8$ — cannot be handled by a single case split. Each absolute value expression changes its behavior at a critical point where the expression inside equals zero, and the equation must be analyzed separately on each interval defined by these critical points.

@academic[fact,aside:true,width:35%:A whole interval of solutions
Between $-3$ and $1$ the two distances always add up to $4$, the gap between the critical points. So $|x - 1| + |x + 3| = 4$ is solved by every $x$ in $[-3, 1]$: infinitely many solutions from two linear pieces.]@

For $|x - 1| + |x + 3| = 8$, the critical points are $x = 1$ and $x = -3$. These divide the number line into three intervals: $x < -3$, $-3 \\leq x \\leq 1$, and $x > 1$. On each interval, every absolute value expression has a definite sign, so the piecewise definition removes the bars entirely.

On $x < -3$: both $x - 1 < 0$ and $x + 3 < 0$, so the equation becomes $-(x - 1) + (-(x + 3)) = 8$, which simplifies to $-2x - 2 = 8$, giving $x = -5$. Since $-5 < -3$, this value lies in the interval and is valid.

On $-3 \\leq x \\leq 1$: $x - 1 \\leq 0$ and $x + 3 \\geq 0$, so the equation becomes $-(x - 1) + (x + 3) = 8$, which simplifies to $4 = 8$. This is false, so no solution exists in this interval.

On $x > 1$: both expressions are positive, so the equation becomes $(x - 1) + (x + 3) = 8$, giving $2x + 2 = 8$ and $x = 3$. Since $3 > 1$, this is valid.

@academic[pitfall,aside:true,width:35%:Keeping a candidate outside its interval
Solving $|x - 1| + |x + 3| = 3$ piece by piece gives $x = -\\frac{5}{2}$ on $x < -3$ and $x = \\frac{1}{2}$ on $x > 1$. Neither lies in its interval, and both give a sum of $4$, so there is no solution.
[Read more](!#pitfalls)]@

The solution set is $\\{-5, 3\\}$. The interval method is systematic: identify critical points, solve on each interval using the appropriate piecewise form, and verify that each candidate belongs to the interval where it was derived.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Absolute Value and Extraneous Solutions`,
    content: `The case-splitting method, when applied correctly, does not generate extraneous solutions. Each case defines a condition under which the absolute value expression takes a specific sign, and solving within that condition produces only valid results — provided the solution is checked against the interval constraint.

Extraneous solutions enter through a different route: squaring.

@academic[example:Example
The equation $|x - 2| = 3x - 4$ can be solved by case-splitting (the reliable method) or by squaring both sides to obtain $(x - 2)^2 = (3x - 4)^2$. Squaring eliminates the absolute value but is not reversible — it treats $|A| = B$ and $|A| = -B$ identically, and if $B$ takes negative values for some $x$, those values may appear as solutions to the squared equation without satisfying the original.

For this equation, case-splitting gives two cases. From $x - 2 = 3x - 4$: $x = 1$. Check: $|1 - 2| = 1$ and $3(1) - 4 = -1$. Since $1 \\neq -1$, this candidate is extraneous. From $-(x - 2) = 3x - 4$: $-x + 2 = 3x - 4$, so $x = \\frac{3}{2}$. Check: $|\\frac{3}{2} - 2| = \\frac{1}{2}$ and $3(\\frac{3}{2}) - 4 = \\frac{1}{2}$. This one holds. The only solution is $x = \\frac{3}{2}$.]@

The first candidate failed because the right-hand side $3x - 4$ was negative at $x = 1$.

@academic[rule_plain:An absolute value equation $|A| = B$ requires $B \\geq 0$ at the solution point.]@

This constraint is automatically enforced by careful case-splitting but easily missed when squaring.

@academic[pitfall,aside:true,width:35%:Keeping a root where the right side is negative
Accepting both cases of $|x + 3| = 2x$ keeps $x = -1$ beside $x = 3$. At $x = -1$ the right side is $2x = -2$ while $|x + 3| = 2$, so the only solution is $x = 3$.
[Read more](!#pitfalls)]@

The constraint matters whenever the right-hand side contains $x$, because then its sign changes along the number line. Each case produces a candidate, and the right-hand side is evaluated at that candidate before it joins the solution set.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Geometric Interpretation`,
    content: `Absolute value measures distance on the number line, and this interpretation converts many equations into geometric statements that can be read directly.

The equation $|x - a| = d$ asks: which points on the number line are exactly $d$ units from $a$? There are two such points, one on each side: $x = a + d$ and $x = a - d$. The solutions are symmetric about $a$, and $a$ is their midpoint. The equation $|x - 5| = 3$ has solutions $x = 8$ and $x = 2$, both exactly $3$ units from $5$.

The equation $|x - a| = |x - b|$ asks: which point is equidistant from $a$ and $b$?

@academic[rule_theorem_plain:On the number line, exactly one point lies at equal distance from two distinct fixed points — the midpoint $x = \\frac{a + b}{2}$.]@

The equation $|x - 1| = |x - 7|$ has the single solution $x = 4$, the midpoint of $1$ and $7$.

The equation $|x - a| + |x - b| = d$ asks: which points have the property that their total distance to $a$ and $b$ equals $d$? The minimum possible value of $|x - a| + |x - b|$ is $|a - b|$ (achieved by any $x$ between $a$ and $b$). If $d < |a - b|$, no solution exists. If $d = |a - b|$, every point in the closed interval $[a, b]$ is a solution. If $d > |a - b|$, exactly two solutions exist, one beyond each endpoint.

These geometric readings do not replace the algebraic method, but they provide a check on the number and location of solutions before any computation begins.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Summary of Absolute Value Equation Forms`,
    content: `The forms covered above all fit a small set of patterns. The table below collects them with the recommended method for each and the typical number of solutions to expect. The constraint $|A| \\geq 0$ is the unifying logic: every method either uses it directly (case-splitting) or has to verify it after the fact (squaring).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Common Pitfalls`,
    content: `Five mistakes account for most wrong answers to absolute value equations. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Splitting a negative right-hand side**

The right-hand side is a negative constant, but the equation is split into two cases as if it were positive, and the two results are reported as solutions.

Wrong working:
$$|x + 3| = -2 \\implies x + 3 = -2 \\text{ or } x + 3 = 2 \\implies x = -5 \\text{ or } x = -1$$

Right working: an absolute value is never negative, so $|x + 3|$ cannot equal $-2$ for any $x$. The equation has no solution.

Why it happens: the split into $p = b$ or $p = -b$ becomes a reflex, and it is applied before anyone looks at the condition $b > 0$.

How to check: substitute the results. $x = -5$ gives $|-2| = 2$, and $x = -1$ gives $|2| = 2$; neither equals $-2$.

**Dropping the negative case**

Only the case with the positive right-hand side is solved, so one of the two solutions is missing.

Wrong working:
$$|3x + 5| = 11 \\implies 3x + 5 = 11 \\implies x = 2$$

Right working: both cases are solved.
$$3x + 5 = 11 \\implies x = 2 \\qquad 3x + 5 = -11 \\implies 3x = -16 \\implies x = -\\frac{16}{3}$$
The solution set is $\\left\\{-\\frac{16}{3}, 2\\right\\}$.

Why it happens: removing the bars looks like removing a pair of brackets, and a linear equation is expected to have one answer.

How to check: the inside $3x + 5$ can be $11$ or $-11$, and both have absolute value $11$. Substituting $x = -\\frac{16}{3}$ gives $|-16 + 5| = |-11| = 11$.

**Negating only the first term**

In the second case of $|f(x)| = |g(x)|$, the minus sign is attached to the first term of $g(x)$ instead of to the whole expression.

Wrong working:
$$|2x - 1| = |x + 4| \\implies 2x - 1 = -x + 4 \\implies 3x = 5 \\implies x = \\frac{5}{3}$$

Right working: the whole expression is negated.
$$2x - 1 = -(x + 4) = -x - 4 \\implies 3x = -3 \\implies x = -1$$
Together with $x = 5$ from the first case, the solution set is $\\{-1, 5\\}$.

Why it happens: the brackets around $x + 4$ are dropped when the minus sign is written, so the sign reaches only the $x$.

How to check: substitute. $x = \\frac{5}{3}$ gives $\\frac{7}{3}$ on the left and $\\frac{17}{3}$ on the right, which differ. $x = -1$ gives $3$ on both sides.

**Keeping a candidate outside its interval**

Each interval between the critical points gives its own equation, and the solution of that equation is kept without checking that it lies in the interval.

Wrong working: for $|x - 1| + |x + 3| = 3$, each interval is solved and its result is kept.
$$x < -3: \\quad -2x - 2 = 3 \\implies x = -\\frac{5}{2}$$
$$-3 \\leq x \\leq 1: \\quad 4 = 3, \\text{ no solution}$$
$$x > 1: \\quad 2x + 2 = 3 \\implies x = \\frac{1}{2}$$
Both values are reported as solutions.

Right working: $-\\frac{5}{2}$ is not less than $-3$, and $\\frac{1}{2}$ is not greater than $1$, so both are rejected. The equation has no solution.

Why it happens: each piece is a plain linear equation whose answer looks final, and the interval it came from is written at the top of the working and forgotten by the end.

How to check: substitute into the original. Both values give $|x - 1| + |x + 3| = 4$, not $3$. The distance reading agrees: the total distance from $x$ to $1$ and to $-3$ is never less than $4$.

**Keeping a root where the right side is negative**

The right-hand side contains $x$, both cases are solved, and both results are kept without checking the sign of the right-hand side.

Wrong working:
$$|x + 3| = 2x \\implies x + 3 = 2x \\text{ or } x + 3 = -2x \\implies x = 3 \\text{ or } x = -1$$

Right working: $|A| = B$ requires $B \\geq 0$. At $x = 3$ the right side is $6$ and $|3 + 3| = 6$, so $x = 3$ holds. At $x = -1$ the right side is $-2$, so $x = -1$ is extraneous. The only solution is $x = 3$.

Why it happens: with a positive constant on the right, both cases always survive, and that habit carries over to right-hand sides that change sign.

How to check: substitute each candidate into the original equation. $x = -1$ gives $|2| = 2$ on the left and $-2$ on the right.`,
    before: ``,
    after: ``,
    link: '',
  },
};




 const introContent = {
  id: 'intro',
  title: `Distance, Cases, and the Geometry of the Number Line`,
  content: `The absolute value function strips a number of its sign, returning its distance from zero on the number line. When this function wraps around an expression containing an unknown, the resulting equation splits into cases — each case a separate equation to solve, each constrained to the interval where that case applies. Absolute value equations are not inherently difficult, but they demand a structured approach. The case-splitting method is the reliable path, and the geometric interpretation as distance often reveals the answer faster than the algebra.`,
};

const faqQuestions = {
  obj1: {
    question: "Does $|a + b|$ equal $|a| + |b|$?",
    answer: "Not in general. The bars are a bracket pair, not a factor that distributes across a sum, so the inside is evaluated first: $|3 + (-5)| = 2$, while $|3| + |-5| = 8$. What always holds is the weaker triangle inequality $|a + b| \\leq |a| + |b|$, with equality only when $a$ and $b$ share a sign.",
    sectionId: "notation"
  },
  obj2: {
    question: "Why do vertical bars mean different things in different places?",
    answer: "They are the most overloaded bracket in mathematics. Some uses keep this meaning: $|z|$ for a [complex number](!/complex-numbers/basics) is still distance to the origin, and $\\|v\\|$ doubles the bars for vector length. Others do not: $|A|$ on a set is [cardinality](!/set-theory/basics), a count, and $|M|$ on a matrix is the [determinant](!/linear-algebra/determinants), which can be negative.",
    sectionId: "notation"
  },
  obj3: {
    question: "Can you get rid of absolute value bars by squaring?",
    answer: "Yes, when both sides carry bars. Because $|x| = \\sqrt{x^2}$, the equation $|A| = |B|$ is equivalent to $A^2 = B^2$, which turns a case analysis into one polynomial equation. It does not work for $|A| = k$ with a bare constant, where squaring introduces the spurious branch $A = -k$ unless $k \\geq 0$ is checked first.",
    sectionId: "notation"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Absolute Value Equations",
    "description": "Master absolute value equations: piecewise definition, case-splitting method, equations with absolute value on both sides, multiple terms with critical points, extraneous solutions, and geometric distance interpretation.",
    "url": "https://www.learnmathclass.com/algebra/equations/absolute-value",
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
      "name": "Absolute Value Equations"
    },
    "teaches": [
      "Definition of absolute value",
      "Basic equation |A| = B structure",
      "Case-splitting method for |f(x)| = k",
      "Equations with absolute value on both sides",
      "Multiple absolute value terms and intervals",
      "Recognizing extraneous solutions",
      "Geometric interpretation as distance"
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
        "name": "Algebra",
        "item": "https://www.learnmathclass.com/algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Equations",
        "item": "https://www.learnmathclass.com/algebra/equations"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Absolute Value Equations",
        "item": "https://www.learnmathclass.com/algebra/equations/absolute-value"
      }
    ]
  },
}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpAbsQuadratic = { kind: 'pieces', svgTitle: '|x^2 - 4| = 5 at x = 3 and x = -3 only', xRange: [-4, 4], yRange: [-6, 8],
    pieces: [
      { fn: (x) => x * x - 4, from: 9, to: 9, ends: [null, null], color: 'g', ghost: [[-4, 4]] },
      { fn: () => -5, from: 9, to: 9, ends: [null, null], color: 'r', ghost: [[-4, 4]], label: { text: 'y = −5: never reached', x: 2, y: -5, pos: 's' } },
      { fn: (x) => Math.abs(x * x - 4), from: -4, to: 4, ends: [null, null], color: 'f' },
      { fn: () => 5, from: -4, to: 4, ends: [null, null], color: 'g', label: { text: 'y = 5', x: -1.4, y: 5, pos: 'n' } },
    ],
    points: [{ x: -3, y: 5, label: 'x = −3', pos: 'sw' }, { x: 3, y: 5, label: 'x = 3', pos: 'se' }],
    notes: [{ x: -3.9, y: -4.2, text: 'dashed: x² − 4', pos: 'e', color: 'g' }],
    caption: '|x² − 4| = 5 only at x = ±3: the case x² − 4 = −5 has no solution' };
  const fpAbsBothSides = { kind: 'pieces', svgTitle: '|2x - 1| = |x + 4| at x = -1 and x = 5', xRange: [-6, 7], yRange: [-1, 12],
    pieces: [
      { fn: (x) => Math.abs(2 * x - 1), from: -6, to: 7, ends: [null, null], color: 'f', label: { text: '|2x − 1|', x: 6.1, y: 11.2, pos: 'w' } },
      { fn: (x) => Math.abs(x + 4), from: -6, to: 7, ends: [null, null], color: 'g', label: { text: '|x + 4|', x: -3, y: 3.6, pos: 'n' } },
    ],
    points: [{ x: -1, y: 3, label: 'x = −1', pos: 'e' }, { x: 5, y: 9, label: 'x = 5', pos: 'se' }],
    caption: 'Equal magnitudes twice: 2x − 1 = x + 4 and 2x − 1 = −(x + 4)' };
  const fpAbsExtraneous = { kind: 'pieces', svgTitle: '|x - 2| = 3x - 4 holds only at x = 3/2; x = 1 is extraneous', xRange: [-1, 4], yRange: [-3, 6],
    pieces: [
      { fn: (x) => Math.abs(x - 2), from: -1, to: 4, ends: [null, null], color: 'f', label: { text: '|x − 2|', x: -0.5, y: 3.3, pos: 'n' } },
      { fn: (x) => 3 * x - 4, from: -1, to: 4, ends: [null, null], color: 'g', label: { text: '3x − 4', x: 3.2, y: 5.6, pos: 'w' } },
    ],
    vlines: [{ x: 1, label: 'x = 1: extraneous' }],
    points: [{ x: 1.5, y: 0.5 }],
    notes: [{ x: 1.38, y: 0.3, text: 'x = 3/2', pos: 'w', color: 'r' }, { x: 1, y: 0.85, text: '|x − 2| = 1', pos: 'w', color: 'f' }, { x: 1, y: -1, text: '3x − 4 = −1', pos: 'w', color: 'g' }],
    caption: 'Squaring keeps x = 1, but there |x − 2| = 1 while 3x − 4 = −1' };

  const fpCiAbs = { kind: 'pieces', svgTitle: 'y = |2x - 3| meets y = 7 at x = -2 and x = 5',
    xRange: [-4, 7], yRange: [-1, 11],
    pieces: [
      { fn: (x) => Math.abs(2 * x - 3), from: -4, to: 7, ends: [null, null], color: 'f', label: { text: 'y = |2x − 3|', x: 3.4, y: 1.3, pos: 'e' } },
      { fn: () => 7, from: -4, to: 7, ends: [null, null], color: 'g', label: { text: 'y = 7', x: 6.4, y: 7, pos: 'n' } },
    ],
    points: [{ x: -2, y: 7, label: 'x = −2', pos: 'sw' }, { x: 5, y: 7, label: 'x = 5', pos: 'se' }],
    caption: 'the V shape reaches height 7 twice' }
  const conceptIntroFigures = {
    abs: renderFunctionPlotV4(fpCiAbs),
    checkTable: ciCheckTable,
  };

  const demoUnits = {
    basic: demoUnitFrame({
      svg: equationVisualizerDiagrams['abs-two'],
      caption: '|x| = 3 has solutions x = &#8722;3 and x = 3',
      text: 'The level y = 3 cuts both arms of the V, so B &gt; 0 gives two solutions; at B = 0 the level touches only the corner and there is one; below the axis the level misses the graph and there is none. The three structures of the section are three positions of one line. Slide the level through the three cases on the',
      href: '/algebra/visual-tools/equation',
      linkText: 'equation visual explorer',
    }),
    negativeSide: demoUnitFrame({
      svg: equationVisualizerDiagrams['abs-none'],
      caption: '|x| + 5 = 2: no solution',
      text: 'The V-shaped curve |x| + 5 never drops below 5, so it never reaches the level 2: the equation, which says |x| = &#8722;3, asks a distance to be negative and has no solution. Checking the sign of the right-hand side settles this before any case split. Slide the level and watch solutions appear on the',
      href: '/algebra/visual-tools/equation',
      linkText: 'equation visual explorer',
    }),
    absQuadratic: demoUnitFrame({
      svg: renderFunctionPlotV4(fpAbsQuadratic),
      caption: 'Two cases, one of them empty',
      text: 'The section\'s |x&#178; &#8722; 4| = 5. The bars fold the dipping part of x&#178; &#8722; 4 (dashed) up above the axis. The case x&#178; &#8722; 4 = 5 meets the level at x = &#177;3; the case x&#178; &#8722; 4 = &#8722;5 would need the dashed parabola to reach &#8722;5, which it never does, so it adds nothing. The solution set is {&#8722;3, 3}.',
    }),
    absBothSides: demoUnitFrame({
      svg: renderFunctionPlotV4(fpAbsBothSides),
      caption: 'Two V-shapes, two crossings',
      text: 'The section\'s |2x &#8722; 1| = |x + 4|, each side drawn as its own V. They meet where the magnitudes agree: at x = 5 the insides are equal (9 and 9), and at x = &#8722;1 they are opposites (&#8722;3 and 3). These are exactly the two cases f(x) = g(x) and f(x) = &#8722;g(x).',
    }),
    absExtraneous: demoUnitFrame({
      svg: renderFunctionPlotV4(fpAbsExtraneous),
      caption: 'Where squaring goes wrong',
      text: 'The section\'s |x &#8722; 2| = 3x &#8722; 4. The V and the line meet once, at x = 3/2. Squaring both sides also produces x = 1, but on the dashed line x = 1 the two sides are 1 and &#8722;1: equal in square, not in value. Because the right side is negative there, x = 1 is extraneous.',
    }),
  };

return {
  props: {
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj2Table,
    obj5Table,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Absolute Value Equations: Case-Splitting Method | Learn Math Class",
      description: "Master absolute value equations: piecewise definition, case-splitting method, equations with absolute value on both sides, multiple terms with critical points, extraneous solutions, and geometric distance interpretation.",
      keywords: keyWords.join(", "),
      url: "/algebra/equations/absolute-value",
      name: "Absolute Value Equations"
    },
  }
}

}

export default function AbsoluteValueEquationsPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj5Table,
  obj7Table,
  summaryTable,
  faqQuestions,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 2 concept introduction — template C (failure first).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `The obvious move with |2x − 3| = 7 is to drop the bars and solve what is left.`,
        content: [
          `Without the bars, $2x - 3 = 7$ gives $2x = 10$ and $x = 5$. Checking it: $|2 \\cdot 5 - 3| = |7| = 7$. It works, so the job looks done.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        tone: 'break',
        lead: `But x = −2 works too — and dropping the bars never finds it.`,
        content: [
          `At $x = -2$ the inside is $-7$, and the bars turn it into $7$. The graph shows the problem: the V shape reaches height $7$ in two places, and the shortcut found only one.`,
          ciTable('checkTable'),
        ],
        visual: ciSvg('abs'),
      },
      {
        id: 'diagnosis',
        lead: `The loss was predictable: absolute value forgets the sign, so two numbers have absolute value 7.`,
        content: [
          `Being "7 kilometres from home" does not say in which direction — east or west both qualify. In the same way $|p| = 7$ allows $p = 7$ and $p = -7$, and dropping the bars keeps only the first.`,
          `The equation $|A| = B$, where $A$ is an expression and $B$ is a constant, has three possible structures depending on the sign of $B$.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `An absolute value equation has the unknown inside [absolute value](!/algebra/definitions#absolute_value) bars. For a positive constant $b$: $|p| = b$ exactly when $p = b$ or $p = -b$; $|p| = 0$ exactly when $p = 0$; and $|p| = b$ with $b < 0$ has no solution.`,
        formula: [
          `When $B > 0$, the equation splits into two cases:`,
          `@academic[formula_callout:Absolute Value Equation
$$|p| = b \\implies p = b \\text{ or } p = -b \\quad (b > 0)$$
/algebra/formulas#absolute_value_equation]@`,
          `@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@`,
        ],
        footer: `So $|2x - 3| = 7$ means $2x - 3 = 7$ or $2x - 3 = -7$: $x = 5$ or $x = -2$.`,
      },
      {
        id: 'kind',
        lead: `It is an equation that splits into cases — usually two, sometimes one or none.`,
        content: [
          `Both must be solved, and both solutions (if they exist) belong to the solution set. The equation $|2x - 3| = 7$ becomes $2x - 3 = 7$ or $2x - 3 = -7$, giving $x = 5$ or $x = -2$.`,
          `When $B = 0$, the equation reduces to a single case: $A = 0$. There is no split because zero is its own opposite. The equation $|4x + 1| = 0$ gives $4x + 1 = 0$, so $x = -\\frac{1}{4}$.`,
          <div key={'obj2-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{ __html: obj2Table }} />,
          `@academic[punchline:The sign of the right-hand side decides the split: two cases when positive, one when zero, none when negative.]@`,
        ],
      },
      {
        id: 'caveat',
        lead: `Read backwards, the cases give a test to run first: look at the sign of the right-hand side.`,
        content: [
          `When $B < 0$, no solution exists. The equation $|x + 3| = -2$ asks for a non-negative quantity to equal $-2$, which is impossible. The solution set is empty, and no algebra is needed to determine this.`,
          `@academic[pitfall,aside:true,width:35%:Splitting a negative right-hand side
Splitting $|x + 3| = -2$ into $x + 3 = -2$ or $x + 3 = 2$ gives $x = -5$ or $x = -1$, but both make $|x + 3| = 2$, not $-2$. The equation has no solution.
[Read more](!#pitfalls)]@`,
          `Checking the sign of the right-hand side before proceeding is not a shortcut — it is the logical first step. A negative right-hand side eliminates the equation immediately, and recognizing this saves the effort of setting up cases that cannot produce valid solutions.`,
          `When the inside is a longer expression, the same split applies to it as a whole, as the [next section](!/algebra/equations/absolute-value#3) shows.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers equations of the form |f(x)| = k, absolute values on both sides, several absolute value terms, and extraneous solutions.`,
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
          sectionsContent.obj0.after,
        ]
    },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
          <div key={'unit-negativeSide'} dangerouslySetInnerHTML={{ __html: demoUnits.negativeSide }} />,
          `A negative right-hand side means an empty solution set, whatever is inside the bars.`,
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
                  <div key={'unit-basic'} dangerouslySetInnerHTML={{ __html: demoUnits.basic }} />,
          `Everything else on this page is this picture with a more complicated expression inside the bars.`,
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
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key={'unit-absQuadratic'} dangerouslySetInnerHTML={{ __html: demoUnits.absQuadratic }} />,
          `Each case is solved by its own method, and only real solutions join the set.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'unit-absBothSides'} dangerouslySetInnerHTML={{ __html: demoUnits.absBothSides }} />,
          `Checking both candidates in the original equation confirms the picture.`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div
            key={'obj5-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj5Table }}
          />,
          `@academic[punchline:Cut the number line wherever an expression inside the bars is zero, and on each piece the bars simply disappear.]@`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'unit-absExtraneous'} dangerouslySetInnerHTML={{ __html: demoUnits.absExtraneous }} />,
          `Case-splitting with an interval check avoids the extraneous root that squaring creates.`,
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
          `@academic[punchline:An absolute value equation is a question about distances, and the number line often answers it before any algebra.]@`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Absolute Value Equations FAQ`,
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
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar
           side='right'
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Equations with Absolute Value</h1>
   <br/>
   <br/>
   <SectionTableOfContents
     sections={genericSections}
     showSecondaryNav={true}
     secondaryNavMode="siblings"
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
   </>
  )
}