import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '@/pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){

 const keyWords = [
  "absolute value",
  "absolute value definition",
  "what is absolute value",
  "absolute value of a number",
  "absolute value as distance",
  "absolute value properties",
  "absolute value piecewise definition",
  "square root of x squared",
  "triangle inequality",
  "removing absolute value bars",
  "graph of absolute value",
  "absolute value function",
  "absolute value calculus",
  "derivative of absolute value",
  "distance between two numbers"
]

// ─── TABLES ───────────────────────────────────────────────────────────────

const td = 'padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;'
const tdKey = 'padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;'
const tableOpen = (style, heads) => `
<table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>${heads.map((h) => `<th style="${style}">${h}</th>`).join('')}</tr>
  </thead>
  <tbody>`
const tableRows = (rows) => rows.map((r, i) =>
  `<tr${i % 2 === 0 ? ' style="background: #f8f9fa;"' : ''}><td style="${tdKey}">${r[0]}</td>${r.slice(1).map((c) => `<td style="${td}">${c}</td>`).join('')}</tr>`).join('') + `
  </tbody>
</table>`

// obj4 — comparison: the rules the bars obey
const propertiesTable = tableOpen(tableHeaders.comparison, ['Property', 'Rule', 'Example']) + tableRows([
  ['Never negative', '|a| ≥ 0', '|−5| = 5'],
  ['Zero only at zero', '|a| = 0 exactly when a = 0', '|0| = 0'],
  ['Opposites', '|−a| = |a|', '|−7| = |7| = 7'],
  ['Product', '|ab| = |a| · |b|', '|(−3)(4)| = 12 = 3 · 4'],
  ['Quotient', '|a / b| = |a| / |b|, &nbsp;b ≠ 0', '|−8 / 2| = 4 = 8 / 2'],
  ['Powers', '|aⁿ| = |a|ⁿ', '|(−2)³| = 8 = 2³'],
  ['Square', '|a|² = a²', '|−5|² = 25 = (−5)²'],
  ['Square root', '√(a²) = |a|', '√((−5)²) = 5'],
  ['Bounds', '−|a| ≤ a ≤ |a|', '−5 ≤ −5 ≤ 5'],
  ['Triangle inequality', '|a + b| ≤ |a| + |b|', '|3 + (−5)| = 2 ≤ 8'],
  ['Reverse triangle inequality', '| |a| − |b| | ≤ |a − b|', '| 3 − 5 | = 2 ≤ |3 − (−5)| = 8'],
])

// obj9 — aggregation: the standard equation and inequality forms
const formsTable = tableOpen(tableHeaders.aggregation, ['Form', 'Equivalent statement', 'Example', 'Solution']) + tableRows([
  ['|A| = k, &nbsp;k > 0', 'A = k &nbsp;or&nbsp; A = −k', '|x − 3| = 2', 'x = 1 or x = 5'],
  ['|A| < k, &nbsp;k > 0', '−k < A < k', '|x − 3| < 2', '1 < x < 5'],
  ['|A| > k, &nbsp;k > 0', 'A < −k &nbsp;or&nbsp; A > k', '|x − 3| > 2', 'x < 1 or x > 5'],
  ['|A| = 0', 'A = 0', '|x − 3| = 0', 'x = 3'],
  ['|A| = k &nbsp;or&nbsp; |A| < k, &nbsp;k < 0', 'impossible', '|x − 3| = −2', 'no solution'],
  ['|A| > k, &nbsp;k < 0', 'always true', '|x − 3| > −2', 'every real x'],
])

// obj13 — summary capstone
const summaryTable = tableOpen(tableHeaders.summary, ['Idea', 'Statement', 'Example']) + tableRows([
  ['Meaning', '|x| is the distance from x to 0', '|−3| = |3| = 3'],
  ['Definition', '|x| = x for x ≥ 0, &nbsp;|x| = −x for x &lt; 0', '|−6| = −(−6) = 6'],
  ['Distance between numbers', '|a − b|', 'distance from −2 to 5 is 7'],
  ['What splits over the bars', 'products and quotients; never sums or differences', '|−2 · 3| = 6, &nbsp;|3 − 8| ≠ 3 − 8'],
  ['Square roots', '√(x²) = |x|', '√((−4)²) = 4'],
  ['Triangle inequality', '|a + b| ≤ |a| + |b|, equal exactly when ab ≥ 0', '|2 + (−5)| = 3 &lt; 7'],
  ['Removing the bars', 'split where the inside is 0; use A or −A on each side', '|x − 2| = 2 − x for x &lt; 2'],
  ['Graph', 'y = a|x − h| + k is a V with vertex (h, k)', 'y = 2|x − 1| − 3: vertex (1, −3)'],
  ['Calculus', 'continuous everywhere, corner at 0; ∫ 1/x dx = ln|x| + C', 'slopes −1 and 1 meet at 0'],
])

    const sectionsContent={

   obj0: {
  title: `Key Terms`,
  content: `
- [Absolute Value](!/algebra/definitions#absolute_value) — the distance of a number from zero on the number line
- [Absolute Value Function](!/functions/definitions#absolute_value_function) — the function $f(x) = |x|$ and its V-shaped graph
- [Principal Root](!/algebra/definitions#principal_root) — the non-negative root, which is why $\\sqrt{x^2} = |x|$
- [Absolute Value Inequality](!/algebra/definitions#absolute_value_inequality) — an inequality whose solutions are read as distances`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},

    obj1: {
  title: `What Absolute Value Measures`,
  content: `The absolute value of a real number $x$, written $|x|$, is the distance from $x$ to $0$ on the number line.

Distance has no direction, so a number and its opposite have the same absolute value. Both $-3$ and $3$ lie three units from zero, so $|-3| = 3$ and $|3| = 3$. The bars keep the size of a number and discard its sign.

@academic[example:Example
$|-12| = 12$, $\\; |7.5| = 7.5$, $\\; |0| = 0$, $\\; \\left|-\\frac{2}{3}\\right| = \\frac{2}{3}$.]@

The bars are also grouping symbols, like parentheses: the expression inside is simplified first, and only then is the absolute value taken.

@academic[pitfall,aside:true,width:35%:Splitting the bars over a difference
Writing $|3 - 8| = |3| - |8| = -5$ produces a negative absolute value, which is impossible. Simplify inside first: $|3 - 8| = |-5| = 5$.
[Read more](!#pitfall-splitting-the-bars-over-a-sum-or-difference)]@

@academic[example:Example
$|3 - 8| = |-5| = 5$. $\\;$ $|2 \\cdot (-4) + 1| = |-7| = 7$. $\\;$ $|4| - |-9| = 4 - 9 = -5$, because here the bars close before the subtraction.]@

A minus sign outside the bars is not touched by them: $-|-4| = -(4) = -4$. The absolute value itself is never negative, but its opposite can be.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `The Piecewise Definition`,
  content: `Distance is the idea; the working definition is a rule with two cases.

@academic[formula_callout:The Piecewise Definition
$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$]@

For $x \\geq 0$, the number already equals its distance from zero and is left unchanged. For $x < 0$, the rule returns $-x$, the opposite of $x$.

@academic[pitfall,aside:true,width:35%:Reading −x as a negative number
Seeing $|x| = -x$ and concluding that $|x|$ is negative. In this case $x$ itself is negative, so $-x$ is positive: $|-6| = -(-6) = 6$.
[Read more](!#pitfall-reading-x-as-a-negative-number)]@

The second case looks as if it produced a negative number, but it does the reverse. When $x$ is negative, $-x$ is positive: for $x = -6$, $-x = -(-6) = 6$. The minus sign in $-x$ means "the opposite of $x$", not "a negative number".

@academic[example:Example
For $x = 4$: the first case applies, $|4| = 4$. For $x = -2.5$: the second case applies, $|-2.5| = -(-2.5) = 2.5$.]@

The two cases agree at $x = 0$, where both give $0$, so the boundary point could go in either one. Putting it in the first case, $x \\geq 0$, is the usual convention.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Absolute Value as Distance Between Numbers`,
  content: `Subtracting two numbers gives a signed gap: positive or negative depending on the order. The bars remove the sign, so the order no longer matters.

@academic[formula_callout:Absolute Value as Distance Between Numbers
$$\\text{distance between } a \\text{ and } b = |a - b| = |b - a|$$]@

@academic[example:Example
The distance between $-2$ and $5$ is $|5 - (-2)| = |7| = 7$, and in the other order $|-2 - 5| = |-7| = 7$.]@

The definition of $|x|$ is the special case $b = 0$: $|x| = |x - 0|$, the distance from $x$ to $0$.

This reading turns statements about absolute value into statements about position:

- $|x - 3| = 2$ asks for the numbers at distance $2$ from $3$: they are $1$ and $5$.
- $|x - 3| < 2$ asks for the numbers closer than $2$ to $3$: the open interval $(1, 5)$.
- $|x + 4|$ is the distance from $x$ to $-4$, because $x + 4 = x - (-4)$.

The same picture is used to solve [absolute value equations](!/algebra/equations/absolute-value) and [absolute value inequalities](!/algebra/inequalities/absolute-value) without algebra.`,
  before: ``,
  after: ``,
  link: '',
},

obj4: {
  title: `Properties of Absolute Value`,
  content: `For all real numbers $a$ and $b$, the bars obey the rules below.

@academic[rule_plain:Absolute value passes through multiplication and division: $|ab| = |a|\\,|b|$ and $\\left|\\frac{a}{b}\\right| = \\frac{|a|}{|b|}$ for $b \\neq 0$. It does not pass through addition or subtraction.]@

The product rule holds because the size of a product is the product of the sizes, and the sign is decided separately. For sums there is no such rule: $|3 + (-5)| = 2$, while $|3| + |-5| = 8$. The best that can be said about a sum is the triangle inequality.`,
  before: ``,
  after: ``,
  link: '',
},

obj5: {
  title: `Square Roots and Squares`,
  content: `The square root symbol always means the principal root, the non-negative one. So $\\sqrt{x^2}$ is the non-negative number whose square is $x^2$, and that number is $|x|$, not $x$.

@academic[formula_callout:Square Roots and Squares
$$\\sqrt{x^2} = |x|$$]@

@academic[pitfall,aside:true,width:35%:Writing √(x²) = x
For $x = -4$ this gives $\\sqrt{(-4)^2} = -4$, a negative square root. In fact $\\sqrt{16} = 4 = |-4|$.
[Read more](!#pitfall-writing-root-of-x-squared-x)]@

@academic[example:Example
For $x = -4$: $\\sqrt{(-4)^2} = \\sqrt{16} = 4 = |-4|$. For $x = 4$: $\\sqrt{16} = 4 = |4|$. The answer is $|x|$ in both cases.]@

The same holds for every even root, $\\sqrt[4]{x^4} = |x|$, but not for odd roots: $\\sqrt[3]{(-2)^3} = -2$, so $\\sqrt[3]{x^3} = x$. The [properties of roots](!/algebra/roots/properties) page covers the general rule.

Squaring goes the other way and removes bars: $|x|^2 = x^2$, because squaring discards the sign just as the bars do. This is why $|A| = |B|$ holds exactly when $A^2 = B^2$, which gives a second way to solve [equations with absolute value on both sides](!/algebra/equations/absolute-value#4).`,
  before: ``,
  after: ``,
  link: '',
},

obj6: {
  title: `The Triangle Inequality`,
  content: `The absolute value of a sum is at most the sum of the absolute values.

@academic[formula_callout:The Triangle Inequality
$$|a + b| \\leq |a| + |b|$$]@

When $a$ and $b$ have the same sign, nothing cancels and the two sides are equal: $|2 + 5| = 7 = |2| + |5|$. When the signs differ, part of one number cancels part of the other, and the left side is smaller: $|2 + (-5)| = 3$, while $|2| + |-5| = 7$.

@academic[rule_plain:$|a + b| = |a| + |b|$ exactly when $ab \\geq 0$, that is, when $a$ and $b$ do not have opposite signs.]@

On the number line: start at $0$, take a step of $a$, then a step of $b$. The walk covers $|a| + |b|$ in total, but if the second step turns back, the end point $a + b$ is closer to the start than that.

Replacing $b$ by $b - a$ and rearranging gives the reverse form, $\\big||a| - |b|\\big| \\leq |a - b|$: two numbers are at least as far apart as their distances from zero differ.

The same inequality holds for complex numbers, where $a$, $b$ and $a + b$ form the sides of an actual triangle. The proof and the reverse form are on the [modulus of complex numbers](!/complex-numbers/absolute-value) page.`,
  before: ``,
  after: ``,
  link: '',
},

obj7: {
  title: `Removing the Bars`,
  content: `To rewrite an expression without bars, split at the point where the inside equals zero. On the side where the inside $A$ is non-negative, replace $|A|$ by $A$; on the side where it is negative, replace $|A|$ by $-A$.

@academic[example:Example
$|x - 2|$ is zero at $x = 2$. For $x \\geq 2$: $|x - 2| = x - 2$. For $x < 2$: $|x - 2| = -(x - 2) = 2 - x$.]@

@academic[pitfall,aside:true,width:35%:Negating only the first term
For $x < 5$, writing $|x - 5| = -x - 5$. At $x = 2$ this gives $-7$, but $|2 - 5| = 3$. The whole inside changes sign: $-(x - 5) = 5 - x$.
[Read more](!#pitfall-negating-only-the-first-term)]@

With several absolute values, each one has its own split point. Together the split points cut the number line into intervals, and on each interval every inside expression keeps one sign.

@academic[example:Example
Simplify $f(x) = |x - 2| + |x + 1|$. The split points are $x = -1$ and $x = 2$.

For $x < -1$, both insides are negative: $f(x) = -(x - 2) - (x + 1) = -2x + 1$.

For $-1 \\leq x < 2$, only $x + 1$ is non-negative: $f(x) = -(x - 2) + (x + 1) = 3$.

For $x \\geq 2$, both are non-negative: $f(x) = (x - 2) + (x + 1) = 2x - 1$.

Check one point in each interval: $f(-2) = 4 + 1 = 5 = -2(-2) + 1$, $\\; f(0) = 2 + 1 = 3$, $\\; f(3) = 1 + 4 = 5 = 2(3) - 1$.]@

The result is a [piecewise function](!/functions/piecewise#8). Every expression built from absolute values of linear terms becomes one this way.`,
  before: ``,
  after: ``,
  link: '',
},

obj8: {
  title: `The Graph of the Absolute Value Function`,
  content: `The graph of $y = |x|$ follows the two cases of the definition: the line $y = x$ for $x \\geq 0$ and the line $y = -x$ for $x < 0$. The two half-lines meet at the origin and form a V.

- The vertex $(0, 0)$ is the lowest point; the range is $[0, \\infty)$.
- The graph is symmetric about the $y$-axis, because $|-x| = |x|$: the function is even.
- The slope is $-1$ on the left and $1$ on the right.

Shifting and stretching move the V without changing its shape. The graph of $y = a|x - h| + k$ has its vertex at $(h, k)$, opens upward when $a > 0$ and downward when $a < 0$, and has slopes $-a$ and $a$ on the two sides.

@academic[example:Example
$y = 2|x - 1| - 3$ has its vertex at $(1, -3)$, opens upward, and has slopes $-2$ and $2$. It crosses the $x$-axis where $|x - 1| = \\frac{3}{2}$: at $x = -\\frac{1}{2}$ and $x = \\frac{5}{2}$.]@

The [absolute value function](!/functions/families#12) section of the function families page places this graph among the other basic shapes.`,
  before: ``,
  after: ``,
  link: '',
},

obj9: {
  title: `Absolute Value in Equations and Inequalities`,
  content: `Equations and inequalities with absolute value all reduce to a few forms. In each, $A$ stands for the expression inside the bars and $k$ for a constant.

The two signs of $k$ behave differently. An absolute value is never negative, so $|A| = k$ and $|A| < k$ have no solutions when $k < 0$, and $|A| > k$ holds for every $x$.

The full methods, with expressions on both sides and quadratic insides, are on the [absolute value equations](!/algebra/equations/absolute-value) and [absolute value inequalities](!/algebra/inequalities/absolute-value) pages. To check an answer, use the [absolute value equation calculator](!/algebra/calculators/equations/absolute-value).`,
  before: ``,
  after: ``,
  link: '',
},

obj10: {
  title: `Absolute Value in Calculus`,
  content: `The function $|x|$ is the standard example of a function that is continuous but not differentiable.

**Continuity.** The graph has no gaps or jumps: $|x|$ is continuous at every real number.

**The corner at 0.** To the left of $0$ the slope is $-1$; to the right it is $1$. The two one-sided derivatives disagree, so $|x|$ has no derivative at $0$. The [corners](!/calculus/derivatives/differentiability#3) section of the differentiability page treats this case.

**The derivative elsewhere.** For $x \\neq 0$:

@academic[formula_callout:Absolute Value in Calculus
$$\\frac{d}{dx}|x| = \\frac{x}{|x|} = \\begin{cases} -1 & \\text{if } x < 0 \\\\ 1 & \\text{if } x > 0 \\end{cases}$$]@

**One-sided limits.** The quotient $\\frac{|x|}{x}$ approaches $-1$ from the left and $1$ from the right, so its two-sided limit at $0$ does not exist. See [one-sided limits](!/calculus/limits/one-sided).

**Antiderivatives.** $\\int |x|\\,dx = \\frac{x|x|}{2} + C$. The bars also appear in $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$: the logarithm accepts only positive inputs, while $\\frac{1}{x}$ is defined for negative $x$ as well, and the bars cover both sides. This formula is listed with the [basic antiderivatives](!/calculus/integrals/indefinite#4).

**Area.** An integral counts area below the axis as negative; the integral of $|f(x)|$ counts all of it as positive. For example, $\\int_{-1}^{2} |x|\\,dx = \\frac{1}{2} + 2 = \\frac{5}{2}$, while $\\int_{-1}^{2} x\\,dx = \\frac{3}{2}$.`,
  before: ``,
  after: ``,
  link: '',
},

obj11: {
  title: `Absolute Value Beyond the Real Numbers`,
  content: `The idea of size without direction carries over to other kinds of numbers.

For a complex number $z = a + bi$, the absolute value, also called the modulus, is $|z| = \\sqrt{a^2 + b^2}$: the distance from $z$ to the origin in the complex plane. When $b = 0$ it reduces to the ordinary absolute value, $\\sqrt{a^2} = |a|$. See [modulus of complex numbers](!/complex-numbers/absolute-value).

For a vector, the same role is played by its length, written $\\|v\\|$.

In every setting, four rules hold: the size is never negative, it is zero only for zero, it multiplies over products, and it obeys the triangle inequality. These four rules are what make a quantity a measure of size.`,
  before: ``,
  after: ``,
  link: '',
},

obj12: {
  title: `Common Pitfalls`,
  content: `Four slips account for most wrong answers with absolute values. Each one is worked through below, with the wrong and the right working side by side, the reason it happens and a quick way to check.`,
  before: ``,
  after: `Three of these slips come from losing track of a sign: reading $-x$ as negative, dropping the bars around $\\sqrt{x^2}$, and changing the sign of only part of the inside. The fourth shares the bars out over a sum, which works only over a product. In every case a number settles it: an absolute value is never negative, and one test value from the case being worked on shows whether the rewritten form still agrees.`,
  link: '',
},

    obj13:{
      title:`Summary: Absolute Value at a Glance`,
      content:`The definition, the rules, the graph and the calculus facts on this page reduce to the table below.`,
      before:``,
      after:``,
      link:'',
    },

  }


  const introContent = {
  id: "intro",
  title: "Distance Without Direction",
  content: `The absolute value of a number is its distance from zero. It keeps the size of the number and discards the sign: $|-5| = 5$ and $|5| = 5$. This page covers what the bars mean, the rules they obey, how to remove them, and where they appear in graphs and calculus. For solving, see [absolute value equations](!/algebra/equations/absolute-value) and [absolute value inequalities](!/algebra/inequalities/absolute-value).`
}

// FAQ pass 2026-10-31: cut "What is the absolute value of a number?" and
// "How do you remove absolute value bars?" (they restate the h2s "What
// Absolute Value Measures" and "Removing the Bars"); moved "Can an absolute
// value be negative?" from section 2 to the properties table (section 4).
// Added |x + 4| as distance to -4 (one line under "Absolute Value as Distance
// Between Numbers"), -|x| against |-x| (one sentence under "What Absolute
// Value Measures") and the antiderivative of |x| (one line under "Absolute
// Value in Calculus"). The constant sum |x - a| + |x - b| is left to
// equations/absolute-value, whose h2s own it.
const faqQuestions = {
  obj1: {
    question: "Can an absolute value be negative?",
    answer: "No. A distance is never negative, so |x| ≥ 0 for every real x, and |x| = 0 only when x = 0. An expression such as −|4| = −4 is negative, but that is the opposite of an absolute value, not an absolute value.",
    sectionId: "4"
  },
  obj2: {
    question: "Is the square root of x squared equal to x?",
    answer: "Only when x ≥ 0. In general √(x²) = |x|, because the square root symbol always gives the non-negative root. For x = −4, √((−4)²) = √16 = 4, not −4.",
    sectionId: "5"
  },
  obj3: {
    question: "Is |a + b| equal to |a| + |b|?",
    answer: "Not in general. The triangle inequality says |a + b| ≤ |a| + |b|, with equality exactly when a and b do not have opposite signs. For example, |2 + (−5)| = 3, while |2| + |−5| = 7. Absolute value does split over products: |ab| = |a| · |b|.",
    sectionId: "6"
  },
  obj4: {
    question: "Why is |x| not differentiable at 0?",
    answer: "The graph of |x| has a corner at 0: the slope is −1 just to the left and 1 just to the right. The two one-sided derivatives disagree, so no single derivative exists there, even though |x| is continuous at 0.",
    sectionId: "10"
  },
  obj5: {
    question: "Why is $|x + 4|$ the distance to $-4$ and not to $4$?",
    answer: "Because the distance reading needs a difference. The distance between $x$ and $b$ is $|x - b|$, so $x + 4$ has to be rewritten first as $x - (-4)$, and the point it measures from is $-4$. That makes $|x + 4| = 1$ a question about the numbers one unit from $-4$: they are $-5$ and $-3$, and both check, since $|-1| = |1| = 1$.",
    sectionId: "3"
  },
  obj6: {
    question: "Is $-|x|$ the same as $|-x|$?",
    answer: "No. In $|-x|$ the minus sign is inside the bars, and a number and its opposite lie the same distance from zero, so $|-x| = |x|$ and $|-4| = 4$. In $-|x|$ the minus sign is outside, so it acts after the bars: $-|-4| = -(4) = -4$. The first is never negative; the second is never positive.",
    sectionId: "1"
  },
  obj7: {
    question: "What is the antiderivative of $|x|$?",
    answer: "$\\int |x|\\,dx = \\frac{x|x|}{2} + C$, one formula for both sides of $0$. Differentiating checks it: for $x > 0$ the function is $\\frac{x^2}{2}$, with derivative $x$, and for $x < 0$ it is $-\\frac{x^2}{2}$, with derivative $-x$, and both equal $|x|$. Unlike $|x|$ itself, $\\frac{x|x|}{2}$ has no corner at $0$; its slope there is $0$.",
    sectionId: "10"
  },
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Absolute Value",
    "description": "Absolute value explained: distance from zero, the piecewise definition, distance between numbers, properties, √(x²) = |x|, the triangle inequality, removing the bars, the graph of |x| and absolute value in calculus.",
    "url": "https://www.learnmathclass.com/algebra/absolute-value",
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
      "name": "Absolute Value"
    },
    "teaches": [
      "Absolute value as distance from zero",
      "The piecewise definition of absolute value",
      "Distance between two numbers as |a − b|",
      "Properties of absolute value",
      "Why the square root of x squared is |x|",
      "The triangle inequality",
      "Rewriting expressions without absolute value bars",
      "The graph of y = |x| and its transformations",
      "Absolute value in limits, derivatives and integrals"
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
    "datePublished": "2026-10-29",
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
        "name": "Absolute Value",
        "item": "https://www.learnmathclass.com/algebra/absolute-value"
      }
    ]
  }
}


  // Figures: a frozen picture and an explanation panel in one frame, built
  // here and rendered as content-array items.
  const fpLine = { kind: 'pieces', svgTitle: 'Number line: −3 and 3 are both three units from zero', xRange: [-5.5, 5.5], yRange: [-1.6, 1.6], xStep: 1, yStep: 5, xLetter: ' ', yLetter: ' ',
    pieces: [
      { fn: () => 0, from: -3, to: 0, ends: ['closed', null], color: 'r', label: { text: '|−3| = 3', x: -1.5, y: 0, pos: 'n' } },
      { fn: () => 0, from: 0, to: 3, ends: [null, 'closed'], color: 'f', label: { text: '|3| = 3', x: 1.5, y: 0, pos: 'n' } },
    ],
    caption: 'Same distance, opposite sides' };
  const fpDistance = { kind: 'pieces', svgTitle: 'Number line: the distance from −2 to 5 is 7; the numbers with |x − 3| < 2 fill the open interval from 1 to 5', xRange: [-3.5, 7.5], yRange: [-1.6, 1.6], xStep: 1, yStep: 5, xLetter: ' ', yLetter: ' ',
    pieces: [
      { fn: () => 0.7, from: -2, to: 5, ends: ['closed', 'closed'], color: 'r', label: { text: '|5 − (−2)| = 7', x: 1.5, y: 0.7, pos: 'n' } },
      { fn: () => -0.7, from: 1, to: 5, ends: ['open', 'open'], color: 'f', label: { text: '|x − 3| < 2', x: 3, y: -0.7, pos: 's' } },
    ],
    points: [{ x: 3, y: -0.7 }],
    caption: 'Distances between numbers' };
  const fpCaseSplit = { kind: 'pieces', svgTitle: 'Graph of f(x) = |x − 2| + |x + 1|: the line −2x + 1 left of −1, the constant 3 between −1 and 2, the line 2x − 1 right of 2', xRange: [-3.5, 4.5], yRange: [-0.5, 8.5], xStep: 1, yStep: 1,
    pieces: [
      { fn: (x) => -2 * x + 1, from: -3.5, to: -1, ends: [null, 'closed'], color: 'f', label: { text: '−2x + 1', x: -2.6, y: 6.2, pos: 'w' } },
      { fn: () => 3, from: -1, to: 2, ends: ['closed', 'closed'], color: 'g', label: { text: '3', x: 0.5, y: 3, pos: 'n' } },
      { fn: (x) => 2 * x - 1, from: 2, to: 4.5, ends: ['closed', null], color: 'f', label: { text: '2x − 1', x: 3.6, y: 6.2, pos: 'e' } },
    ],
    vlines: [{ x: -1, label: 'x = −1' }, { x: 2, label: 'x = 2' }],
    caption: 'f(x) = |x − 2| + |x + 1|' };
  const fpGraph = { kind: 'pieces', svgTitle: 'Graph of y = |x|: the half-line y = −x for x < 0 and y = x for x ≥ 0, meeting at the vertex (0, 0)', xRange: [-4.5, 4.5], yRange: [-2.5, 4.5], xStep: 1, yStep: 1,
    pieces: [
      { fn: (x) => -x, from: -4.5, to: 0, ends: [null, null], color: 'g', label: { text: 'y = −x', x: -3, y: 3, pos: 'w' }, ghost: [[0, 2.5]] },
      { fn: (x) => x, from: 0, to: 4.5, ends: [null, null], color: 'f', label: { text: 'y = x', x: 3, y: 3, pos: 'e' }, ghost: [[-2.5, 0]] },
    ],
    points: [{ x: 0, y: 0, label: 'vertex (0, 0)', pos: 'se' }],
    caption: 'y = |x|' };
  const figures = {
    line: demoUnitFrame({
      svg: renderFunctionPlotV4(fpLine),
      caption: 'Absolute value as distance from zero',
      text: 'The amber segment runs from &#8722;3 to 0, the blue one from 0 to 3. Both are three units long, so |&#8722;3| = |3| = 3. The sign says which side of zero a number is on; the absolute value says only how far.',
    }),
    distance: demoUnitFrame({
      svg: renderFunctionPlotV4(fpDistance),
      caption: 'Absolute value as distance between numbers',
      text: 'Top: the gap from &#8722;2 to 5 is |5 &#8722; (&#8722;2)| = 7, whichever number is subtracted from which. Bottom: |x &#8722; 3| &lt; 2 collects every number less than 2 away from 3, the open interval from 1 to 5. The hollow ends are 1 and 5 themselves, which are exactly 2 away.',
    }),
    caseSplit: demoUnitFrame({
      svg: renderFunctionPlotV4(fpCaseSplit),
      caption: 'Removing the bars piece by piece',
      text: 'The dashed lines are the split points, where x + 1 and x &#8722; 2 change sign. Each interval gets its own formula. Between &#8722;1 and 2 the graph is flat at 3: there the two distances, from x to 2 and from x to &#8722;1, always add up to the distance between &#8722;1 and 2.',
    }),
    graph: demoUnitFrame({
      svg: renderFunctionPlotV4(fpGraph),
      caption: 'The V shape',
      text: 'The graph keeps the part of y = x on the right and the part of y = &#8722;x on the left; the faded dashed continuations are the halves the bars throw away. The two half-lines meet at the vertex, where the slope jumps from &#8722;1 to 1.',
    }),
  };

  // MistakeFix 2026-11-01: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj12 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'splitting-the-bars-over-a-sum-or-difference', name: `Splitting the bars over a sum or difference`, errorAt: 0,
        what: `The bars are distributed over the terms inside, as if they were a factor.`,
        wrong: [`$|3 - 8| = |3| - |8| = 3 - 8 = -5$, and $|x + 2| = |x| + 2$.`],
        right: [`Simplify inside first, $|3 - 8| = |-5| = 5$. The expression $|x + 2|$ cannot be split; it is $x + 2$ for $x \\geq -2$ and $-x - 2$ for $x < -2$.`],
        why: `The product rule $|ab| = |a|\\,|b|$ is true, and it is carried over to sums, where it fails.`,
        check: `An absolute value can never be negative, so $-5$ is wrong on sight. For the expression, test a negative value: at $x = -5$, $|-5 + 2| = 3$, but $|-5| + 2 = 7$.` },
      { id: 'reading-x-as-a-negative-number', name: `Reading −x as a negative number`, errorAt: 0,
        what: `The case $|x| = -x$ is read as "the absolute value is negative".`,
        wrong: [`"For $x < 0$, $|x| = -x$, so on this side the absolute value is negative."`],
        right: [`On this side $x$ is negative, so $-x$ is positive. For $x = -6$, $|x| = -(-6) = 6$.`],
        why: `A minus sign in front of a letter is read as a negative number, when it means the opposite of whatever the letter stands for.`,
        check: `Substitute a number from the case. Any negative $x$ gives a positive $-x$.` },
      { id: 'writing-root-of-x-squared-x', name: `Writing √(x²) = x`, errorAt: 0,
        what: `The square root and the square are treated as canceling.`,
        wrong: [`$\\sqrt{x^2} = x$, so $\\sqrt{(-4)^2} = -4$.`],
        right: [`$\\sqrt{(-4)^2} = \\sqrt{16} = 4$. In general $\\sqrt{x^2} = |x|$.`],
        why: `For non-negative $x$ the square root and the square do undo each other, and the rule is remembered without its condition.`,
        check: `A square root symbol never gives a negative result. If the answer can be negative, bars are missing.` },
      { id: 'negating-only-the-first-term', name: `Negating only the first term`, errorAt: 0,
        what: `When the inside is negative, the minus sign is applied to the first term only.`,
        wrong: [`For $x < 5$, $|x - 5| = -x - 5$.`],
        right: [`The whole inside changes sign, $|x - 5| = -(x - 5) = 5 - x$.`],
        why: `The parentheses around $x - 5$ are left out when $-A$ is written down.`,
        check: `Test a value from the interval. At $x = 2$, $|2 - 5| = 3$ and $5 - 2 = 3$, while $-2 - 5 = -7$.` },
    ],
  };

return {
  props:{
    pitfallData,
    figures,
    sectionsContent,
    introContent,
    propertiesTable,
    formsTable,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Absolute Value: Definition, Properties & Distance | Learn Math Class",
      description: "Absolute value explained: distance from zero, the piecewise definition, distance between numbers, properties, √(x²) = |x|, the triangle inequality, removing the bars, the graph of |x| and absolute value in calculus.",
      keywords: keyWords.join(", "),
      url: "/algebra/absolute-value",
      name: "Absolute Value"
    },
  }
}
   }


export default function AbsoluteValuePage({ pitfallData,seoData, sectionsContent, introContent, propertiesTable, formsTable, summaryTable, faqQuestions, schemas, figures}) {

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
          <div key={'fig-line'} dangerouslySetInnerHTML={{ __html: figures.line }} />,
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
          <div key={'fig-distance'} dangerouslySetInnerHTML={{ __html: figures.distance }} />,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'properties-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: propertiesTable }} />,
          `@academic[punchline:Absolute value splits over products and quotients, never over sums and differences.]@`,
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
          <div key={'fig-casesplit'} dangerouslySetInnerHTML={{ __html: figures.caseSplit }} />,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'fig-graph'} dangerouslySetInnerHTML={{ __html: figures.graph }} />,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div key={'forms-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: formsTable }} />,
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
          <DiagramFrame
            key={'obj12-mistakes'}
            id="absolute-value-pitfalls"
            title="Common pitfalls with absolute values"
            source="/algebra/absolute-value"
            after={sectionsContent.obj12.after}
          >
            <MistakeFix data={pitfallData} variant="trace" />
          </DiagramFrame>,
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
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Absolute Value FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Absolute Value</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
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
