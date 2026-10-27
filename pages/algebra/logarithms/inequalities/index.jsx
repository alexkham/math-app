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
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){
const keyWords = [
  "logarithmic inequalities",
  "solve log inequalities",
  "log inequality examples",
  "logarithm inequality rules",
  "log base greater than 1",
  "log base less than 1",
  "when to flip inequality sign log",
  "log inequality domain",
  "compound log inequalities",
  "solving ln inequalities",
  "logarithmic inequality steps",
  "log x greater than",
  "log inequality direction",
  "monotonicity logarithm",
  "log inequality graphical"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // Direction rules — comparison: how each inequality form converts under each base case
  // (placed after obj3, since it consolidates obj1 + obj2 + obj3)
  const directionTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Inequality form</th>
      <th style="${tableHeaders.comparison} text-align: center;">Base a &gt; 1<br/>(direction preserved)</th>
      <th style="${tableHeaders.comparison} text-align: center;">Base 0 &lt; a &lt; 1<br/>(direction reversed)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(x) &gt; k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">x &gt; aᵏ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">x &lt; aᵏ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(x) &lt; k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">x &lt; aᵏ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">x &gt; aᵏ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(M) &gt; logₐ(N)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">M &gt; N</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">M &lt; N</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">logₐ(M) &lt; logₐ(N)</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">M &lt; N</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">M &gt; N</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — summary capstone: the page's techniques in one place
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Situation</th>
      <th style="${tableHeaders.summary}">Technique</th>
      <th style="${tableHeaders.summary}">Worked example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Single log vs constant, base &gt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">convert with direction preserved</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₂(x) &gt; 3 → x &gt; 8</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Single log vs constant, 0 &lt; base &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">convert with direction reversed</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₍₁⁄₂₎(x) &gt; 3 → x &lt; 1⁄8</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logs on both sides, same base</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">drop the logs; reverse the comparison if base &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₃(2x+1) &gt; log₃(x+4) → x &gt; 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Composite argument</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve algebraically, then intersect with the domain (every argument &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₂(x−3) &gt; 1 → x &gt; 5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Compound (bounded)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">split into two inequalities, solve each, intersect</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 &lt; log₂(x) &lt; 4 → 2 &lt; x &lt; 16</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multiple logs, same base</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">condense with logarithm rules first, then convert</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₂(x) + log₂(x−2) &gt; 3 → x &gt; 4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Visual check</td>
      <td style="padding: 12px 15px; color: #34495e;">read &quot;curve above the line y = k&quot; on the <a href="/algebra/logarithms/graphs" style="${linkStyle}">graph</a> — direction follows whether the curve rises or falls</td>
      <td style="padding: 12px 15px; color: #34495e;">a &gt; 1: solution to the right; 0 &lt; a &lt; 1: solution to the left</td>
    </tr>
  </tbody>
</table>
`


// Concept introduction (section 1, "Base Greater Than One: Direction
// Preserved") — template C, failure first. Running instance: log₂(x) < 3.
// Old obj1 text is kept in sectionsContent.obj1, unused; its theorem box, two
// formula boxes with their lead-ins, two example boxes and two passages are
// carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciTestTable = ciTableOpen(['x', 'claimed by "x < 8"?', 'log₂(x)', 'really log₂(x) < 3?']) +
  ciRow(['−1', 'yes', 'undefined', 'no'], { color: '#a4243b', cols: [2, 3] }) +
  ciRow(['0', 'yes', 'undefined', 'no'], { shade: true, color: '#a4243b', cols: [2, 3] }) +
  ciRow(['4', 'yes', '2', 'yes']) +
  ciRow(['8', 'no', '3', 'no'], { shade: true }) +
  ciRow(['10', 'no', '≈ 3.32', 'no'], { last: true }) +
  '</tbody></table>'

const sectionsContent = {
  
obj0: {
  title: `Key Terms`,
  content: `
## Inequality Concepts
 
- [Logarithmic Inequality](!/algebra/definitions#logarithmic_inequality) — inequality direction depends on whether the base is greater than or less than $1$
- [Monotonicity](!/algebra/definitions#monotonicity) — the property that controls whether direction is preserved or reversed
- [Base (of a Logarithm)](!/algebra/definitions#base_(of_a_logarithm)) — $a > 1$ preserves direction; $0 < a < 1$ reverses it
- [Argument (of a Logarithm)](!/algebra/definitions#argument_(of_a_logarithm)) — domain restriction: all arguments must remain positive`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Base Greater Than One: Direction Preserved`,
    content: `@academic[rule_theorem_plain:When $a > 1$, the function $f(x) = \\log_a(x)$ is strictly increasing.]@

Larger inputs produce larger outputs, so inequality direction is preserved when converting between logarithmic and exponential forms.

For $\\log_a(x) > k$ with $a > 1$:
@academic[formula_callout:Base Greater Than One: Direction Preserved
$$\\log_a(x) > k \\implies x > a^k$$]@

For $\\log_a(x) < k$ with $a > 1$:
@academic[formula_callout:Base Greater Than One: Direction Preserved
$$\\log_a(x) < k \\implies x < a^k$$]@

@academic[example:Example
Solve $\\log_2(x) > 3$.
$$x > 2^3$$
$$x > 8$$

Combined with the domain requirement $x > 0$, the solution is $x > 8$.]@

@academic[example:Example
Solve $\\log_5(x) \\leq 2$.
$$x \\leq 5^2$$
$$x \\leq 25$$

With domain: $0 < x \\leq 25$.]@

To solve your own logarithmic inequality with each step shown, use the [logarithmic inequality solver](!/algebra/calculators/inequalities/logarithmic).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Base Between Zero and One: Direction Reversed`,
    content: `@academic[rule_theorem_plain:When $0 < a < 1$, the function $f(x) = \\log_a(x)$ is strictly decreasing.]@

Larger inputs produce smaller outputs, so inequality direction reverses.

For $\\log_a(x) > k$ with $0 < a < 1$:
@academic[formula_callout:Base Between Zero and One: Direction Reversed
$$\\log_a(x) > k \\implies x < a^k$$]@

For $\\log_a(x) < k$ with $0 < a < 1$:
@academic[formula_callout:Base Between Zero and One: Direction Reversed
$$\\log_a(x) < k \\implies x > a^k$$]@

@academic[example:Example
Solve $\\log_{1/2}(x) > 3$.

Since the base $1/2 < 1$, reverse the inequality:
$$x < \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$$

With domain: $0 < x < \\frac{1}{8}$.]@

@academic[example:Example
Solve $\\log_{0.1}(x) \\leq -2$.

Reverse direction:
$$x \\geq (0.1)^{-2} = 100$$

Solution: $x \\geq 100$.]@

@academic[pitfall,aside:true,width:35%:Keeping the direction with a base below 1
Solving $\\log_{1/2}(x) > 3$ as $x > \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$ keeps the sign, as for a base above 1. But $\\log_{1/2}$ is decreasing, so the sign flips: $0 < x < \\frac{1}{8}$.
[Read more](!#pitfalls)]@

In both examples the base lies between $0$ and $1$, and the step from logarithmic form to exponential form is where this matters. The comparison with $a^k$ is built exactly as for a base greater than one: the base is raised to the power $k$ and set against the argument.

What changes is the meaning of that comparison. A decreasing logarithm sends larger arguments to smaller values, so the solutions sit on the opposite side of $a^k$ from where the same steps would place them for a base like $2$ or $10$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Logarithms on Both Sides`,
    content: `When the same base appears on both sides, use monotonicity to compare arguments directly.

For $a > 1$:
@academic[formula_callout:Logarithms on Both Sides
$$\\log_a(M) > \\log_a(N) \\implies M > N$$]@

For $0 < a < 1$:
@academic[formula_callout:Logarithms on Both Sides
$$\\log_a(M) > \\log_a(N) \\implies M < N$$]@

@academic[example:Example
Solve $\\log_3(2x + 1) > \\log_3(x + 4)$ where base $3 > 1$.
$$2x + 1 > x + 4$$
$$x > 3$$

Check domain: $2x + 1 > 0$ requires $x > -1/2$; $x + 4 > 0$ requires $x > -4$. The intersection with $x > 3$ is simply $x > 3$.]@

@academic[example:Example
Solve $\\log_{1/3}(x - 1) < \\log_{1/3}(5)$ where base $1/3 < 1$.

Reverse when comparing arguments:
$$x - 1 > 5$$
$$x > 6$$

Domain requires $x - 1 > 0$, so $x > 1$. Final solution: $x > 6$.]@

@academic[pitfall,aside:true,width:35%:Checking only one argument
Solving $\\log_2(x) > \\log_2(3 - x)$ by comparing arguments gives $x > \\frac{3}{2}$, which includes $x = 4$, where $\\log_2(3 - x) = \\log_2(-1)$ is undefined. Both arguments must be positive, $0 < x < 3$, so the answer is $\\frac{3}{2} < x < 3$.
[Read more](!#pitfalls)]@

Dropping the logarithms turns the inequality into a plain comparison of the two arguments, and from there the work is ordinary algebra. The step is valid because the logarithm is monotonic: it keeps the order of its inputs when the base is greater than one and reverses it when the base is between zero and one.

Each logarithm in the original inequality carries its own argument, and each argument brings its own condition on $x$. In the two examples above, both conditions are written out next to the algebraic result before the final answer is read off.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Domain Considerations`,
    content: `@academic[rule_plain:Every logarithmic argument must be positive.]@

This constraint intersects with the algebraic solution, often restricting the answer.

Two cases show how this plays out. In the first, the domain changes nothing; in the second, it cuts the answer down.

@academic[example:Example
Solve $\\log_2(x - 3) > 1$.

Algebraically:
$$x - 3 > 2^1 = 2$$
$$x > 5$$

Domain: $x - 3 > 0 \\implies x > 3$.

Intersection: $x > 5$ satisfies $x > 3$, so the solution is $x > 5$.]@

Here the domain condition $x > 3$ is already implied by $x > 5$, so the intersection keeps the algebraic answer unchanged. The next inequality is different.

@academic[example:Example
Solve $\\log_4(x + 2) < 0$.

Algebraically:
$$x + 2 < 4^0 = 1$$
$$x < -1$$

Domain: $x + 2 > 0 \\implies x > -2$.

Intersection: $-2 < x < -1$.]@

@academic[pitfall,aside:true,width:35%:Forgetting the domain
Solving $\\log_4(x + 2) < 0$ to $x < -1$ keeps values like $x = -3$, where $\\log_4(x + 2)$ is undefined. With the domain $x > -2$, the answer is $-2 < x < -1$.
[Read more](!#pitfalls)]@

In both examples the final answer comes from two separate conditions. One is the inequality solved for the argument; the other is the domain condition that keeps the argument positive.

The algebra alone describes where the inequality would hold if the logarithm were defined everywhere. The domain then removes the values of $x$ where it is not defined at all, which is why the second example ends with a bounded interval rather than a ray.

The same three steps apply to every inequality in the sections that follow: find the domain, solve, then intersect.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Compound Inequalities`,
    content: `Compound inequalities bound the logarithm between two values.

@academic[example:Example
Solve $1 < \\log_2(x) < 4$.

Split into two inequalities with base $2 > 1$:
$$\\log_2(x) > 1 \\implies x > 2$$
$$\\log_2(x) < 4 \\implies x < 16$$

Combined: $2 < x < 16$.]@

@academic[example:Example
Solve $-1 \\leq \\log_3(x + 1) \\leq 2$.

$$\\log_3(x+1) \\geq -1 \\implies x + 1 \\geq 3^{-1} = \\frac{1}{3} \\implies x \\geq -\\frac{2}{3}$$
$$\\log_3(x+1) \\leq 2 \\implies x + 1 \\leq 9 \\implies x \\leq 8$$

Domain: $x + 1 > 0 \\implies x > -1$.

Intersection: $-\\frac{2}{3} \\leq x \\leq 8$ already satisfies $x > -1$.

Solution: $-\\frac{2}{3} \\leq x \\leq 8$.]@`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Inequalities with Combined Logarithms`,
    content: `When [logarithm rules](!/algebra/logarithms/rules) are needed, condense first, then solve.

@academic[example:Example
Solve $\\log_2(x) + \\log_2(x - 2) > 3$.

Condense:
$$\\log_2(x(x - 2)) > 3$$
$$\\log_2(x^2 - 2x) > 3$$

Since base $2 > 1$:
$$x^2 - 2x > 8$$
$$x^2 - 2x - 8 > 0$$
$$(x - 4)(x + 2) > 0$$

This holds when $x < -2$ or $x > 4$.

Domain: $x > 0$ and $x - 2 > 0$ gives $x > 2$.

Intersection with $x > 4$ or $x < -2$: only $x > 4$ survives.

Solution: $x > 4$.]@

@academic[pitfall,aside:true,width:35%:Taking the domain after condensing
The condensed $\\log_2(x^2 - 2x)$ is defined for every negative $x$ too, so $x = -3$ seems to solve it: $\\log_2(15) > 3$. But $\\log_2(-3)$ does not exist. The domain comes from the original terms, $x > 2$, so the answer is $x > 4$.
[Read more](!#pitfalls)]@

Condensing turns the sum into a single logarithm, which can then be compared with $3$ exactly as in the earlier sections. The comparison produces a quadratic inequality, and a quadratic inequality usually has two solution intervals, one on each side of its roots.

Which of those intervals belong to the answer is not decided by the quadratic. It is decided by the conditions on $x$ that the problem started with.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Graphical Interpretation`,
    content: `The [graph](!/algebra/logarithms/graphs) of $y = \\log_a(x)$ provides visual understanding of why direction depends on base.

@academic[fact,aside:true,width:35%:The flip is a hidden minus sign
Since $\\log_{1/a}(x) = -\\log_a(x)$, each falling curve is a rising one flipped over the $x$-axis. So $\\log_{1/2}(x) > 3$ is just $\\log_2(x) < -3$: the same reversal as multiplying both sides by $-1$.]@

For $a > 1$, the curve rises from left to right. The inequality $\\log_a(x) > k$ asks: where is the curve above the horizontal line $y = k$? Since the curve is increasing, this occurs to the right of the intersection point — for $x > a^k$.

For $0 < a < 1$, the curve falls from left to right. The inequality $\\log_a(x) > k$ asks the same question, but now the curve is above the line to the left of the intersection — for $x < a^k$.

The vertical asymptote at $x = 0$ visually enforces the domain restriction. No portion of the graph exists for $x \\leq 0$, so no solutions can come from that region.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Summary of Techniques`,
    content: `Solving logarithmic inequalities reduces to a small set of techniques selected by the form of the inequality. The base sets the direction, the form sets the conversion, and the domain trims the result. The table below collects each situation handled on this page with the technique and a worked example.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Common Pitfalls`,
    content: `Four mistakes account for most wrong answers to logarithmic inequalities. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Keeping the direction with a base below 1**

The base lies between $0$ and $1$, but the conversion to exponential form is done exactly as for a base greater than $1$, so the inequality sign is kept.

Wrong working:
$$\\log_{1/2}(x) > 3 \\implies x > \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$$

Right working: $\\log_{1/2}$ is decreasing, so the sign flips when the logarithm is removed.
$$\\log_{1/2}(x) > 3 \\implies x < \\frac{1}{8}$$
With the domain $x > 0$, the solution is $0 < x < \\frac{1}{8}$.

Why it happens: the step "raise the base to both sides" is first learned with bases like $2$ or $10$, where it keeps the sign, and the base check gets skipped.

How to check: test one value from the answer. $x = 1$ lies in the wrong answer, and $\\log_{1/2}(1) = 0$, which is not greater than $3$. A value from the right answer, $x = \\frac{1}{16}$, gives $\\log_{1/2}\\left(\\frac{1}{16}\\right) = 4 > 3$.

**Checking only one argument**

When logarithms with the same base stand on both sides, the arguments are compared directly, and the condition on one of the arguments is lost.

Wrong working:
$$\\log_2(x) > \\log_2(3 - x) \\implies x > 3 - x \\implies x > \\frac{3}{2}$$

Right working: both arguments must be positive, $x > 0$ and $3 - x > 0$, so $0 < x < 3$. Intersecting with $x > \\frac{3}{2}$ gives $\\frac{3}{2} < x < 3$.

Why it happens: once the logarithms are dropped, the inequality looks like an ordinary linear one, and the conditions that came with the arguments disappear with them.

How to check: take a value from the wrong answer outside the right one. $x = 4$ gives $\\log_2(3 - 4) = \\log_2(-1)$, which is undefined. A value from the right answer, $x = 2$, gives $\\log_2(2) = 1 > \\log_2(1) = 0$.

**Forgetting the domain**

The inequality is solved for the argument, and the work stops there; the condition that the argument is positive is never written down.

Wrong working:
$$\\log_4(x + 2) < 0 \\implies x + 2 < 4^0 = 1 \\implies x < -1$$

Right working: the domain is $x + 2 > 0$, so $x > -2$. Intersecting with $x < -1$ gives $-2 < x < -1$.

Why it happens: the algebra ends with an inequality in $x$ that looks finished, and nothing in it signals that part of it lies where the logarithm does not exist.

How to check: test a value from the wrong answer that lies outside the right one. $x = -3$ gives $\\log_4(-1)$, which is undefined. A value from the right answer, $x = -1.5$, gives $\\log_4(0.5) = -\\frac{1}{2} < 0$.

**Taking the domain after condensing**

Two logarithms are condensed into one, and the domain is read from the condensed form instead of from the original terms.

Wrong working: from $\\log_2(x^2 - 2x) > 3$, the domain is taken as $x^2 - 2x > 0$, that is $x < 0$ or $x > 2$. Solving $x^2 - 2x > 8$ gives $x < -2$ or $x > 4$, and both intervals are kept.

Right working: the original inequality $\\log_2(x) + \\log_2(x - 2) > 3$ needs $x > 0$ and $x - 2 > 0$, so $x > 2$. Of the two intervals, only $x > 4$ survives.

Why it happens: the product rule $\\log_a(M) + \\log_a(N) = \\log_a(MN)$ holds only when $M$ and $N$ are both positive, but the product $MN$ is also positive when both are negative. The condensed logarithm is defined on a larger set than the pair it came from.

How to check: substitute a value from the extra interval into the original inequality. $x = -3$ satisfies the condensed form, $\\log_2(15) > 3$, but the original needs $\\log_2(-3)$, which is undefined. A value from the right answer, $x = 5$, gives $\\log_2(5) + \\log_2(3) = \\log_2(15) > 3$.`,
    before: ``,
    after: ``,
    link: '',
  },
};

  const introContent = {
  id: "intro",
 title: `When Direction Depends on Base`,
  content: `Solving [logarithmic](!/algebra/logarithms) inequalities follows similar algebraic steps as [equations](!/algebra/logarithms/equations), with one critical addition: the base determines whether inequality direction is preserved or reversed. This behavior stems from the [monotonicity property](!/algebra/logarithms/properties) — logarithms with base greater than one are increasing functions, while those with base between zero and one are decreasing.`,
};


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Logarithmic Inequalities",
    "description": "Learn to solve logarithmic inequalities: when to preserve or reverse direction based on base, domain restrictions, compound inequalities, and graphical interpretation.",
    "url": "https://www.learnmathclass.com/algebra/logarithms/inequalities",
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
      "name": "Logarithmic Inequalities"
    },
    "teaches": [
      "Solving log inequalities with base > 1",
      "Solving log inequalities with 0 < base < 1",
      "Comparing logarithms on both sides",
      "Domain restrictions in log inequalities",
      "Compound logarithmic inequalities",
      "Combining logarithms in inequalities",
      "Graphical interpretation"
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
        "name": "Logarithms",
        "item": "https://www.learnmathclass.com/algebra/logarithms"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Logarithmic Inequalities",
        "item": "https://www.learnmathclass.com/algebra/logarithms/inequalities"
      }
    ]
  }
}



  const fpLogIneqDomain = { kind: 'pieces', svgTitle: 'log4(x + 2) < 0 on -2 < x < -1', xRange: [-3, 3], yRange: [-3, 2],
    pieces: [{ fn: (x) => Math.log(x + 2) / Math.log(4), from: -1.995, to: 3, ends: [null, null], color: 'f', label: { text: 'y = log₄(x + 2)', x: 2.5, y: Math.log(4.5) / Math.log(4), pos: 'n' } }],
    vlines: [{ x: -2, label: 'x = −2: domain edge' }],
    points: [{ x: -1, y: 0, label: 'x = −1', pos: 'se' }],
    notes: [{ x: -1.85, y: -2.5, text: 'below 0 for −2 < x < −1', pos: 'e', color: 'r' }],
    caption: 'log₄(x + 2) < 0 only on −2 < x < −1' };
  const fpLogIneqBand = { kind: 'pieces', svgTitle: '1 < log2 x < 4 exactly for 2 < x < 16', xRange: [0, 18], yRange: [-2, 5],
    pieces: [
      { fn: () => 1, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[0, 18]], label: { text: 'y = 1', x: 17, y: 1, pos: 's' } },
      { fn: () => 4, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[0, 18]], label: { text: 'y = 4', x: 1, y: 4, pos: 'n' } },
      { fn: (x) => Math.log2(x), from: 0.25, to: 18, ends: [null, null], color: 'f', label: { text: 'y = log₂ x', x: 17, y: Math.log2(17), pos: 's' } },
    ],
    points: [{ x: 2, y: 1, label: '(2, 1)', pos: 'se' }, { x: 16, y: 4, label: '(16, 4)', pos: 'nw' }],
    notes: [{ x: 5, y: 0.5, text: 'solution 2 < x < 16', pos: 'e', color: 'r' }],
    caption: 'Squeezing log₂ x between 1 and 4 squeezes x between 2¹ and 2⁴' };
  const fpLogIneqBase = { kind: 'pieces', svgTitle: 'log2 x > 1 for x > 2, but log1/2 x > 1 for 0 < x < 1/2', xRange: [0, 5], yRange: [-3, 3],
    pieces: [
      { fn: (x) => Math.log2(x), from: 0.13, to: 5, ends: [null, null], color: 'f', label: { text: 'log₂ x', x: 4.6, y: Math.log2(4.6), pos: 'n' } },
      { fn: (x) => -Math.log2(x), from: 0.13, to: 5, ends: [null, null], color: 'g', label: { text: 'log₁/₂ x', x: 4.6, y: -Math.log2(4.6), pos: 's' } },
      { fn: () => 1, from: 0, to: 5, ends: [null, null], color: 'r', label: { text: 'y = 1', x: 4.6, y: 1, pos: 's' } },
    ],
    points: [{ x: 2, y: 1, label: 'x = 2', pos: 'se' }, { x: 0.5, y: 1, label: 'x = 1/2', pos: 'ne' }],
    notes: [{ x: 2.2, y: 2.6, text: 'log₂ x > 1 for x > 2', pos: 'e', color: 'f' }, { x: 0.6, y: -1.6, text: 'log₁/₂ x > 1 for 0 < x < 1/2', pos: 'e', color: 'g' }],
    caption: 'Same inequality, opposite sides: the base decides the direction' };

  const conceptIntroFigures = {
    testTable: ciTestTable,
  };

  const demoUnits = {
    domainEdge: demoUnitFrame({
      svg: renderFunctionPlotV4(fpLogIneqDomain),
      caption: 'The domain closes the interval',
      text: 'The section\'s log&#8324;(x + 2) &lt; 0. The algebra gives x + 2 &lt; 1, so x &lt; &#8722;1, a ray running off to the left. But the graph starts at the dashed line x = &#8722;2, where the argument reaches 0, and nothing exists to its left. The curve is below the axis only between that wall and x = &#8722;1: the solution is &#8722;2 &lt; x &lt; &#8722;1.',
    }),
    band: demoUnitFrame({
      svg: renderFunctionPlotV4(fpLogIneqBand),
      caption: 'Bounding a logarithm on both sides',
      text: 'The section\'s 1 &lt; log&#8322; x &lt; 4. The curve sits between the two dashed levels exactly while x runs from 2 to 16: it crosses y = 1 at x = 2&#185; = 2 and y = 4 at x = 2&#8308; = 16. Because base 2 is greater than 1, both bounds keep their direction when converted.',
    }),
    base: demoUnitFrame({
      svg: renderFunctionPlotV4(fpLogIneqBase),
      caption: 'Why the base decides the direction',
      text: 'log&#8322; x and log&#8321;&#8260;&#8322; x against the same level y = 1. The rising curve log&#8322; x is above the level to the right of its crossing, so log&#8322; x &gt; 1 means x &gt; 2. The falling curve log&#8321;&#8260;&#8322; x is above the level to the left of its crossing, so log&#8321;&#8260;&#8322; x &gt; 1 means 0 &lt; x &lt; 1/2. The same inequality has its answer on opposite sides.',
    }),
  };

return {
  props: {
    sectionsContent,
    introContent,
    directionTable,
    summaryTable,
    schemas,
    demoUnits,
    conceptIntroFigures,
    seoData: {
      title: "Logarithmic Inequalities: Solving by Base Type | Learn Math Class",
      description: "Learn to solve logarithmic inequalities: when to preserve or reverse direction based on base, domain restrictions, compound inequalities, and graphical interpretation.",
      keywords: keyWords.join(", "),
      url: "/algebra/logarithms/inequalities",
      name: "Logarithmic Inequalities"
    },
  }
}
   }

// export default function InequalitiesPage({seoData,sectionsContent , introContent}) {


export default function InequalitiesPage({
  seoData,
  sectionsContent,
  introContent,
  directionTable,
  summaryTable,
  schemas,
  demoUnits,
  conceptIntroFigures,
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template C (failure first).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `A logarithmic equation is solved by switching to exponential form — so an inequality should work the same way.`,
        content: [
          `$\\log_2(x) = 3$ becomes $x = 2^3 = 8$. By the same move, $\\log_2(x) < 3$ would become $x < 8$.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        tone: 'break',
        lead: `Test a few numbers: "x < 8" lets in values the original inequality cannot even evaluate.`,
        content: [
          `Every number below 8 is claimed as a solution — including $-1$ and $0$, where $\\log_2$ is not defined at all.`,
          ciTable('testTable'),
        ],
      },
      {
        id: 'diagnosis',
        lead: `The failure was predictable: converting forgot that a logarithm only accepts positive inputs.`,
        content: [
          `Two separate facts are at work. The direction of the sign survives because $\\log_2$ is increasing, the way a higher reading on a thermometer always means a warmer day. But the conversion says nothing about the domain, and that has to be added back by hand.`,
          `@academic[rule_theorem_plain:When $a > 1$, the function $f(x) = \\log_a(x)$ is strictly increasing.]@`,
          `Larger inputs produce larger outputs, so inequality direction is preserved when converting between logarithmic and exponential forms.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [logarithmic inequality](!/algebra/definitions#logarithmic_inequality) compares a logarithm of the unknown with a value using $<$, $\\leq$, $>$ or $\\geq$. For a base $a > 1$: $\\log_a(x) < k$ exactly when $0 < x < a^k$, and $\\log_a(x) > k$ exactly when $x > a^k$.`,
        formula: [
          `For $\\log_a(x) > k$ with $a > 1$:
@academic[formula_callout:Base Greater Than One: Direction Preserved
$$\\log_a(x) > k \\implies x > a^k$$]@`,
          `For $\\log_a(x) < k$ with $a > 1$:
@academic[formula_callout:Base Greater Than One: Direction Preserved
$$\\log_a(x) < k \\implies x < a^k$$]@`,
        ],
        footer: `So $\\log_2(x) < 3$ has the solution $0 < x < 8$, not $x < 8$.`,
      },
      {
        id: 'kind',
        lead: `Its solution is an interval of positive numbers, bounded by a power of the base.`,
        content: [
          `@academic[example:Example
Solve $\\log_2(x) > 3$.
$$x > 2^3$$
$$x > 8$$

Combined with the domain requirement $x > 0$, the solution is $x > 8$.]@`,
          `@academic[example:Example
Solve $\\log_5(x) \\leq 2$.
$$x \\leq 5^2$$
$$x \\leq 25$$

With domain: $0 < x \\leq 25$.]@`,
          `To solve your own logarithmic inequality with each step shown, use the [logarithmic inequality solver](!/algebra/calculators/inequalities/logarithmic).`,
        ],
      },
      {
        id: 'caveat',
        lead: `Read backwards, the diagnosis becomes a test: check the domain, and check whether the base keeps the direction.`,
        content: `Any proposed solution can be tested by putting a value back in; a value that makes the argument zero or negative is out. And the direction is kept only because the base is greater than $1$ — with a base between $0$ and $1$ the logarithm decreases and the sign flips, as the next section, [base between zero and one](!/algebra/logarithms/inequalities#2), shows.`,
      },
      {
        id: 'exit',
        content: `The rest of the page covers bases below one, logarithms on both sides, domain considerations, compound inequalities, combined logarithms and the graphical view.`,
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
          <div
            key={'direction-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: directionTable }}
          />,
          `@academic[punchline:Logarithms can be dropped from both sides because they are monotonic; the conditions on their arguments cannot.]@`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'unit-domainEdge'} dangerouslySetInnerHTML={{ __html: demoUnits.domainEdge }} />,
          `State the domain first; the algebraic answer is then cut to fit it.`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'unit-band'} dangerouslySetInnerHTML={{ __html: demoUnits.band }} />,
          `With a base between 0 and 1, both bounds would flip and swap ends.`,
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
          <div key={'unit-base'} dangerouslySetInnerHTML={{ __html: demoUnits.base }} />,
          `The wall at x = 0 also bounds the decreasing case from the left.`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Logarithmic Inequalities</h1>
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