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
import NotationSection from '@/app/components/page-components/content-components/NotationSection'


export async function getStaticProps(){

 const keyWords = [
  "integer part",
  "fractional part",
  "floor function",
  "ceiling function",
  "greatest integer function",
  "floor of a negative number",
  "fractional part of a negative number",
  "floor vs truncate",
  "rounding rules",
  "round half to even",
  "floor and ceiling properties",
  "floor function graph",
  "fractional part graph",
  "floor division",
  "floor and modulo"
]

// ─── TABLES ───────────────────────────────────────────────────────────────

const td = 'padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;'
const tdC = td + ' text-align: center;'
const tdKey = 'padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;'
const tableOpen = (style, heads, center) => `
<table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>${heads.map((h, i) => `<th style="${style}${center && i ? ' text-align: center;' : ''}">${h}</th>`).join('')}</tr>
  </thead>
  <tbody>`
const tableRows = (rows, center) => rows.map((r, i) =>
  `<tr${i % 2 === 0 ? ' style="background: #f8f9fa;"' : ''}><td style="${tdKey}">${r[0]}</td>${r.slice(1).map((c) => `<td style="${center ? tdC : td}">${c}</td>`).join('')}</tr>`).join('') + `
  </tbody>
</table>`

// obj4 — comparison: the same operations on positive and negative inputs
const negativeTable = tableOpen(tableHeaders.comparison, ['x', '⌊x⌋ (floor)', '⌈x⌉ (ceiling)', 'drop the decimals', '{x} (fractional part)'], true) + tableRows([
  ['3.7', '3', '4', '3', '0.7'],
  ['−3.7', '−4', '−3', '−3', '0.3'],
  ['0.5', '0', '1', '0', '0.5'],
  ['−0.5', '−1', '0', '0', '0.5'],
  ['5', '5', '5', '5', '0'],
  ['−5', '−5', '−5', '−5', '0'],
], true)

// obj5 — aggregation: rounding methods side by side
const roundingTable = tableOpen(tableHeaders.aggregation, ['x', 'floor', 'ceiling', 'toward zero', 'half up ⌊x + ½⌋', 'half away from zero', 'half to even'], true) + tableRows([
  ['2.4', '2', '3', '2', '2', '2', '2'],
  ['2.5', '2', '3', '2', '3', '3', '2'],
  ['3.5', '3', '4', '3', '4', '4', '4'],
  ['−2.5', '−3', '−2', '−2', '−2', '−3', '−2'],
  ['−2.6', '−3', '−2', '−2', '−3', '−3', '−3'],
], true)

// obj6 — comparison: properties
const propertiesTable = tableOpen(tableHeaders.comparison, ['Property', 'Rule', 'Example']) + tableRows([
  ['Bounds', '⌊x⌋ ≤ x &lt; ⌊x⌋ + 1, &nbsp;equivalently x − 1 &lt; ⌊x⌋ ≤ x', '⌊2.3⌋ = 2 ≤ 2.3 &lt; 3'],
  ['Range of the fractional part', '0 ≤ {x} &lt; 1', '{−0.1} = 0.9'],
  ['Integers are fixed', '⌊n⌋ = ⌈n⌉ = n and {n} = 0 for integer n', '⌊−4⌋ = −4'],
  ['Adding an integer', '⌊x + n⌋ = ⌊x⌋ + n, &nbsp;{x + n} = {x}', '⌊7.2⌋ = ⌊0.2⌋ + 7 = 7'],
  ['Floor and ceiling', '⌈x⌉ = −⌊−x⌋', '⌈2.3⌉ = −⌊−2.3⌋ = −(−3) = 3'],
  ['Gap between them', '⌈x⌉ − ⌊x⌋ = 0 for integers, 1 otherwise', '⌈2.3⌉ − ⌊2.3⌋ = 1'],
  ['Opposites', '⌊x⌋ + ⌊−x⌋ = 0 for integers, −1 otherwise', '⌊2.3⌋ + ⌊−2.3⌋ = 2 − 3 = −1'],
  ['Sums', '⌊x⌋ + ⌊y⌋ ≤ ⌊x + y⌋ ≤ ⌊x⌋ + ⌊y⌋ + 1', '⌊0.6 + 0.6⌋ = 1, &nbsp;⌊0.6⌋ + ⌊0.6⌋ = 0'],
  ['Nested division', '⌊⌊x⌋ / n⌋ = ⌊x / n⌋ for positive integer n', '⌊⌊7.9⌋ / 2⌋ = ⌊3.5⌋ = 3 = ⌊3.95⌋'],
])

// obj11 — summary capstone
const summaryTable = tableOpen(tableHeaders.summary, ['Idea', 'Statement', 'Example']) + tableRows([
  ['Floor (integer part)', '⌊x⌋ is the greatest integer ≤ x', '⌊3.7⌋ = 3, &nbsp;⌊−3.7⌋ = −4'],
  ['Ceiling', '⌈x⌉ is the least integer ≥ x', '⌈3.2⌉ = 4, &nbsp;⌈−3.2⌉ = −3'],
  ['Fractional part', '{x} = x − ⌊x⌋, always in [0, 1)', '{3.7} = 0.7, &nbsp;{−3.7} = 0.3'],
  ['Negative numbers', 'floor moves down, away from zero; dropping the decimals moves toward zero', '⌊−3.7⌋ = −4, trunc(−3.7) = −3'],
  ['Rounding', 'nearest integer; ties need a rule', '2.5 → 3 (half up) or 2 (half to even)'],
  ['Integers pass through', '⌊x + n⌋ = ⌊x⌋ + n', '⌊7.2⌋ = 7'],
  ['Division', 'q = ⌊a / n⌋, &nbsp;r = a − n⌊a / n⌋', '−23 ÷ 5: q = −5, r = 2'],
  ['Counting', '⌊N / k⌋ multiples of k up to N; ⌈N / k⌉ groups of k to hold N', '⌈50 / 12⌉ = 5 buses'],
  ['Graphs', '⌊x⌋ is a staircase; {x} is a sawtooth; both jump at every integer', 'jump of 1 at x = 2'],
])

    const sectionsContent={

   obj0: {
  title: `Key Terms`,
  content: `
- [Floor](!/arithmetic/definitions#floor) — the greatest integer less than or equal to a number; also called the integer part
- [Ceiling](!/arithmetic/definitions#ceiling) — the least integer greater than or equal to a number
- [Fractional Part](!/arithmetic/definitions#fractional_part) — what remains after the floor is subtracted, always between $0$ and $1$
- [Remainder](!/arithmetic/definitions#remainder) — computed from the floor of a quotient`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@`,
  link: '',
},

    obj1: {
  title: `The Integer Part (Floor)`,
  content: `The integer part of a real number $x$, also called its floor, is the greatest integer that is less than or equal to $x$. It is written $\\lfloor x \\rfloor$.

@academic[formula_callout:The Integer Part (Floor)
$$\\lfloor x \\rfloor = n \\quad \\text{where } n \\text{ is the integer with } n \\leq x < n + 1$$]@

On the number line, the floor is found by moving left from $x$ to the nearest integer, or staying put if $x$ is already an integer.

@academic[example:Example
$\\lfloor 3.7 \\rfloor = 3$, $\\; \\lfloor 5 \\rfloor = 5$, $\\; \\lfloor \\pi \\rfloor = 3$, $\\; \\lfloor 0.99 \\rfloor = 0$.]@

@academic[pitfall,aside:true,width:35%:Dropping the decimals of a negative number
Writing $\\lfloor -3.7 \\rfloor = -3$. But $-3$ is greater than $-3.7$, so it is not below it. The greatest integer below $-3.7$ is $-4$.
[Read more](!#11)]@

For negative numbers, moving left means moving away from zero. The integers just around $-3.7$ are $-4$ and $-3$, and only $-4$ is at most $-3.7$:

@academic[example:Example
$\\lfloor -3.7 \\rfloor = -4$, $\\; \\lfloor -0.2 \\rfloor = -1$, $\\; \\lfloor -5 \\rfloor = -5$.]@

Older books write the floor as $[x]$ and call it the greatest integer function. The notation $\\lfloor x \\rfloor$, with bars that have only a bottom edge, shows the direction: down.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `The Ceiling`,
  content: `The ceiling is the mirror image of the floor: the least integer that is greater than or equal to $x$, written $\\lceil x \\rceil$.

@academic[formula_callout:The Ceiling
$$\\lceil x \\rceil = n \\quad \\text{where } n \\text{ is the integer with } n - 1 < x \\leq n$$]@

On the number line, the ceiling is found by moving right to the nearest integer, or staying put at an integer.

@academic[example:Example
$\\lceil 3.2 \\rceil = 4$, $\\; \\lceil 5 \\rceil = 5$, $\\; \\lceil -3.2 \\rceil = -3$, $\\; \\lceil -0.9 \\rceil = 0$.]@

For an integer, floor and ceiling are equal. For any other number, the ceiling is exactly one more than the floor: $\\lceil x \\rceil = \\lfloor x \\rfloor + 1$.

@academic[pitfall,aside:true,width:35%:Adding 1 to an integer
Using $\\lceil x \\rceil = \\lfloor x \\rfloor + 1$ for every $x$ gives $\\lceil 5 \\rceil = 6$. At an integer nothing moves: $\\lceil 5 \\rceil = 5$.
[Read more](!#11)]@

The two are linked by a sign change: $\\lceil x \\rceil = -\\lfloor -x \\rfloor$. Negating flips the number line, so moving right becomes moving left.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `The Fractional Part`,
  content: `The fractional part of $x$ is what is left after the integer part is taken away. It is written $\\{x\\}$.

@academic[formula_callout:The Fractional Part
$$\\{x\\} = x - \\lfloor x \\rfloor, \\qquad 0 \\leq \\{x\\} < 1$$]@

Every real number splits into its two parts: $x = \\lfloor x \\rfloor + \\{x\\}$. The integer part says which unit interval $x$ is in; the fractional part says how far $x$ is from the left end of that interval.

@academic[example:Example
$\\{3.7\\} = 3.7 - 3 = 0.7$, $\\; \\{5\\} = 0$, $\\; \\{\\pi\\} = \\pi - 3 \\approx 0.14159$.]@

@academic[pitfall,aside:true,width:35%:A negative fractional part
Writing $\\{-3.7\\} = -0.7$. With the floor $\\lfloor -3.7 \\rfloor = -4$, the fractional part is $-3.7 - (-4) = 0.3$, never negative.
[Read more](!#11)]@

For a negative number the fractional part is not the digits after the decimal point:

@academic[example:Example
$\\{-3.7\\} = -3.7 - \\lfloor -3.7 \\rfloor = -3.7 - (-4) = 0.3$. On the number line, $-3.7$ lies $0.3$ to the right of $-4$.]@

Some calculators and texts define the fractional part of a negative number as $x$ minus its truncation, which gives $-0.7$ here and keeps the sign. The definition with the floor is the standard one in mathematics, and the only one with $0 \\leq \\{x\\} < 1$ for every $x$.`,
  before: ``,
  after: ``,
  link: '',
},

    notation:{
      title:`Integer Part Notation`,
      lead:`Brackets that keep only one edge, braces for what is left over, and a rounding rule built from the floor — the page's four ways of cutting a real number to an integer.`,
      inherited:`The condition $n \\leq x < n + 1$ is a half-open interval, read as in [interval notation](!/algebra/inequalities#3); remainders come from [divisibility notation](!/arithmetic/divisibility#2).`,
      entries:[
        {
          id:'floor',
          tex:`$\\lfloor x \\rfloor$`,
          read:`floor of x — the integer part of x`,
          means:`The greatest integer at most $x$: the integer $n$ with $n \\leq x < n + 1$. Only the bottom edges of the brackets are drawn — the direction is down, toward $-\\infty$, never toward zero.`,
          cases:`For negative inputs, down means away from zero: $\\lfloor -3.7 \\rfloor = -4$, not $-3$. At an integer nothing moves: $\\lfloor 5 \\rfloor = 5$.`,
          alsoWritten:`$[x]$ — older books, under the name greatest integer function. $\\text{floor}(x)$, $\\text{INT}(x)$ — calculators, spreadsheets and code ([section 10](!#10)).`,
          confusedWith:`Truncation. Cutting off the decimals agrees with the floor only for $x \\geq 0$: truncating $-3.7$ gives $-3$, the floor gives $-4$.`,
          sameGlyphElsewhere:`$[x]$ — the old floor — is also plain grouping brackets and, with two entries, the [closed interval](!/algebra/inequalities#3) $[a, b]$. The one-edged brackets replaced it for that reason.`,
        },
        {
          id:'ceiling',
          tex:`$\\lceil x \\rceil$`,
          read:`ceiling of x`,
          means:`The least integer at least $x$: the integer $n$ with $n - 1 < x \\leq n$. Top edges only — the direction is up, toward $+\\infty$.`,
          cases:`Off the integers, $\\lceil x \\rceil = \\lfloor x \\rfloor + 1$; on an integer the two coincide, $\\lceil 5 \\rceil = 5$. The mirror rule $\\lceil x \\rceil = -\\lfloor -x \\rfloor$ turns any ceiling into a floor.`,
          alsoWritten:`$\\text{ceil}(x)$, $\\text{CEILING}(x)$ — calculators and code.`,
          confusedWith:`Rounding away from zero. For negatives the ceiling moves toward zero: $\\lceil -3.2 \\rceil = -3$, not $-4$.`,
        },
        {
          id:'fractional-part',
          tex:`$\\{x\\}$`,
          read:`fractional part of x`,
          means:`What the floor leaves behind: $\\{x\\} = x - \\lfloor x \\rfloor$, always with $0 \\leq \\{x\\} < 1$. The two brackets rebuild the number: $x = \\lfloor x \\rfloor + \\{x\\}$.`,
          cases:`Negative inputs: $\\{-3.7\\} = 0.3$, not $-0.7$ — the digits after the point are not the fractional part. Every integer has $\\{x\\} = 0$.`,
          alsoWritten:`$\\text{frac}(x)$; $x \\bmod 1$ — the remainder on division by $1$.`,
          confusedWith:`The truncation version some calculators use, which returns $-0.7$ for $-3.7$ and breaks the range $0 \\leq \\{x\\} < 1$.`,
          sameGlyphElsewhere:`Set braces: $\\{x\\}$ is also the [one-element set](!/set-theory/basics#2) holding $x$. Where both could appear, write $\\text{frac}(x)$.`,
        },
        {
          id:'round',
          tex:`$\\text{round}(x) = \\left\\lfloor x + \\tfrac{1}{2} \\right\\rfloor$`,
          read:`x rounded to the nearest integer`,
          means:`Rounding built from the floor: shift by one half, then floor. This version sends ties up: $2.5 \\to 3$, $-2.5 \\to -2$.`,
          cases:`Three tie rules are in use — half up, half away from zero, half to even ([section 5](!#5)). They disagree only at exact halves.`,
          alsoWritten:`$\\lfloor x \\rceil$ — mixed brackets, occasionally used for the nearest integer; $\\text{ROUND}(x, 0)$ in spreadsheets.`,
          confusedWith:`Rounding in code. Python sends $2.5$ to $2$ (half to even), while the formula above gives $3$.`,
        },
      ],
      symbolsHref:`/math-symbols/arithmetic`,
      symbolsLabel:`All arithmetic symbols`,
      parentHref:`/arithmetic`,
      parentLabel:`Arithmetic`,
      before:``,
      after:``,
    },

obj4: {
  title: `Negative Numbers`,
  content: `For positive numbers, the floor is the same as dropping the digits after the decimal point. For negative numbers it is not, and this is where almost every mistake with floor and fractional part happens.

Dropping the decimals, called truncation, always moves toward zero. The floor always moves down. For positive numbers down is toward zero, so the two agree; for negative numbers down is away from zero, so they differ by one.

@academic[rule_plain:For a negative number that is not an integer, truncation gives the ceiling, not the floor: dropping the decimals of $-3.7$ gives $-3 = \\lceil -3.7 \\rceil$.]@

The table compares the operations on pairs of opposite numbers. The fractional parts of $3.7$ and $-3.7$ are $0.7$ and $0.3$, which add up to $1$; for every non-integer $x$, $\\{x\\} + \\{-x\\} = 1$.

The same difference splits [modulo of negative numbers](!/arithmetic/modulo/negative-numbers#4) into two conventions: [truncated division](!/arithmetic/modulo/negative-numbers#3) rounds the quotient toward zero, floored division rounds it down.`,
  before: ``,
  after: ``,
  link: '',
},

obj5: {
  title: `Rounding to the Nearest Integer`,
  content: `Rounding picks the nearest integer. Floor and ceiling give the two candidates; rounding chooses whichever is closer.

@academic[formula_callout:Rounding to the Nearest Integer
$$\\text{round}(x) = \\left\\lfloor x + \\tfrac{1}{2} \\right\\rfloor$$]@

Adding $\\frac{1}{2}$ before taking the floor moves every number whose fractional part is at least $\\frac{1}{2}$ past the next integer. So $2.4$ becomes $\\lfloor 2.9 \\rfloor = 2$ and $2.6$ becomes $\\lfloor 3.1 \\rfloor = 3$.

The only real choice is what to do with a tie, a number exactly halfway between two integers. Three rules are in common use:

- **Half up**: ties go up, toward $+\\infty$. This is the formula above: $2.5 \\to 3$ and $-2.5 \\to -2$.
- **Half away from zero**: ties go away from zero, the usual school rule: $2.5 \\to 3$ and $-2.5 \\to -3$.
- **Half to even**: ties go to the even neighbour: $2.5 \\to 2$, $3.5 \\to 4$. Rounding a long list this way pushes up and down equally often, so totals do not drift; banks, and some programming languages such as Python, use it for that reason.

The rules disagree only on ties. For every other number, all three give the nearest integer.`,
  before: ``,
  after: ``,
  link: '',
},

obj6: {
  title: `Properties of Floor, Ceiling and Fractional Part`,
  content: `The rules below hold for every real $x$ and $y$ and every integer $n$.

@academic[rule_plain:An integer can be moved in and out of the floor: $\\lfloor x + n \\rfloor = \\lfloor x \\rfloor + n$. A number that is not an integer cannot.]@

The second half of the rule is where errors come from. In general $\\lfloor x + y \\rfloor \\neq \\lfloor x \\rfloor + \\lfloor y \\rfloor$: the two fractional parts may add up to more than $1$ and carry an extra unit. For the same reason $\\lfloor 2x \\rfloor$ is not $2\\lfloor x \\rfloor$: $\\lfloor 2 \\cdot 1.6 \\rfloor = 3$, while $2\\lfloor 1.6 \\rfloor = 2$.`,
  before: ``,
  after: ``,
  link: '',
},

obj7: {
  title: `The Graphs`,
  content: `The graph of $y = \\lfloor x \\rfloor$ is a staircase. On each interval $[n, n + 1)$ the function is constant at $n$, so the graph is a horizontal step with a filled dot at the left end, which belongs to the step, and a hollow dot at the right end, which does not. At every integer the graph jumps up by $1$.

The graph of $y = \\{x\\}$ is a sawtooth. On each interval $[n, n + 1)$ it equals $x - n$: it rises with slope $1$ from $0$ toward $1$, then drops back to $0$ at the next integer. It repeats with period $1$, and its range is $[0, 1)$.

Both functions are continuous everywhere except at the integers, where they have [jump discontinuities](!/calculus/limits/one-sided): the limit from the left of $\\lfloor x \\rfloor$ at $x = n$ is $n - 1$, the limit from the right is $n$. Between the integers the floor is constant, so its derivative there is $0$.

The [step functions](!/functions/families#13) section of the function families page and the [step functions](!/functions/piecewise#9) section of the piecewise functions page treat these graphs as functions.`,
  before: ``,
  after: ``,
  link: '',
},

obj8: {
  title: `Floor and Division`,
  content: `Dividing an integer $a$ by a positive integer $n$ gives a quotient and a remainder. The floor computes both.

@academic[formula_callout:Floor and Division
$$q = \\left\\lfloor \\frac{a}{n} \\right\\rfloor, \\qquad r = a - n\\left\\lfloor \\frac{a}{n} \\right\\rfloor = a \\bmod n$$]@

@academic[example:Example
$23 \\div 5$: $\\; q = \\lfloor 4.6 \\rfloor = 4$ and $r = 23 - 5 \\cdot 4 = 3$, so $23 = 5 \\cdot 4 + 3$.]@

@academic[example:Example
$-23 \\div 5$: $\\; q = \\lfloor -4.6 \\rfloor = -5$ and $r = -23 - 5 \\cdot (-5) = 2$, so $-23 = 5 \\cdot (-5) + 2$.]@

The remainder is also the fractional part of the quotient, scaled back up: $r = n \\left\\{ \\frac{a}{n} \\right\\}$. For $-23 \\div 5$, $\\{-4.6\\} = 0.4$ and $5 \\cdot 0.4 = 2$.

Because the floor always rounds down, this remainder is always in $\\{0, 1, \\ldots, n - 1\\}$, even for a negative $a$. That is the convention used for [modulo](!/arithmetic/modulo) in mathematics; the [modulo calculator](!/calculators/modulo-calculator) shows the steps for any pair of numbers.`,
  before: ``,
  after: ``,
  link: '',
},

obj9: {
  title: `Counting with Floor and Ceiling`,
  content: `Many counting questions ask how many whole things fit, or how many are needed. The first kind is answered by a floor, the second by a ceiling.

@academic[example:Example
How many multiples of $7$ are there from $1$ to $100$? $\\; 100 \\div 7 \\approx 14.29$, and $\\lfloor 14.29 \\rfloor = 14$: they are $7, 14, \\ldots, 98$.]@

@academic[example:Example
$50$ students travel in buses that seat $12$. $\\; 50 \\div 12 \\approx 4.17$. Full buses: $\\lfloor 4.17 \\rfloor = 4$, carrying $48$ students. Buses needed so that nobody is left behind: $\\lceil 4.17 \\rceil = 5$.]@

@academic[example:Example
How many digits does $4821$ have? $\\; \\log_{10} 4821 \\approx 3.68$, and $\\lfloor 3.68 \\rfloor + 1 = 4$. In general a positive integer $N$ has $\\lfloor \\log_{10} N \\rfloor + 1$ digits.]@

The test for which one to use: if a part that does not fill a whole group is dropped, use the floor; if it still needs a group of its own, use the ceiling.`,
  before: ``,
  after: ``,
  link: '',
},

obj10: {
  title: `In Calculators and Programming Languages`,
  content: `Software offers floor, ceiling, truncation and rounding as separate operations, and the names do not always say which is which.

- Floor and ceiling: $\\texttt{floor}$ and $\\texttt{ceil}$ in most languages, and $\\texttt{INT}$ in spreadsheets, which rounds down: $\\texttt{INT}(-3.7) = -4$.
- Truncation: converting to an integer type usually truncates. In Python, C and Java, the conversion of $-3.7$ gives $-3$; JavaScript has $\\texttt{Math.trunc}$.
- Integer division: Python's $\\texttt{//}$ floors, so $-7 \\; \\texttt{//} \\; 2 = -4$. In C and Java, integer division truncates and gives $-3$. JavaScript has no integer division: $-7 / 2 = -3.5$, and $\\texttt{Math.trunc}$ turns it into $-3$.
- Rounding ties: Python's $\\texttt{round}$ rounds half to even, so $\\texttt{round}(2.5) = 2$. JavaScript's $\\texttt{Math.round}$ rounds half up, so $\\texttt{Math.round}(-2.5) = -2$.

Positive test inputs cannot tell these apart. Code that floors, truncates or rounds should always be tested with a negative number and with a value exactly halfway between two integers.`,
  before: ``,
  after: ``,
  link: '',
},

obj11: {
  title: `Common Pitfalls`,
  content: `**Dropping the decimals of a negative number**

The floor of a negative number is found by deleting the digits after the decimal point.

Wrong working: $\\lfloor -3.7 \\rfloor = -3$.

Right working: the floor is the greatest integer at most $-3.7$. Since $-3 > -3.7$, it does not qualify; $-4 \\leq -3.7$ does. So $\\lfloor -3.7 \\rfloor = -4$.

Why it happens: for positive numbers, deleting the decimals and taking the floor give the same result, so the floor is remembered as "delete the decimals".

How to check: the floor must not be greater than the number. On the number line, it is on the left of $x$ or at $x$.

**A negative fractional part**

The fractional part of a negative number is read off as the digits after the decimal point, with a minus sign.

Wrong working: $\\{-3.7\\} = -0.7$.

Right working: $\\{-3.7\\} = -3.7 - \\lfloor -3.7 \\rfloor = -3.7 - (-4) = 0.3$.

Why it happens: the fractional part is thought of as "the decimal digits" rather than as $x - \\lfloor x \\rfloor$.

How to check: the fractional part is always in $[0, 1)$, and $\\lfloor x \\rfloor + \\{x\\}$ must give back $x$: $-4 + 0.3 = -3.7$.

**Adding 1 to an integer**

The ceiling is computed as the floor plus one, without checking whether $x$ is an integer.

Wrong working: $\\lceil 5 \\rceil = \\lfloor 5 \\rfloor + 1 = 6$, and so $\\lceil 60 / 12 \\rceil = 6$ buses for $60$ students in buses of $12$.

Right working: an integer is its own ceiling, $\\lceil 5 \\rceil = 5$: five buses are enough.

Why it happens: $\\lceil x \\rceil = \\lfloor x \\rfloor + 1$ is true for every non-integer, so the exception is forgotten.

How to check: test the case where the division comes out exact.

**Splitting the floor over a sum**

The floor is distributed over a sum or pulled out of a multiple.

Wrong working: $\\lfloor 0.6 + 0.6 \\rfloor = \\lfloor 0.6 \\rfloor + \\lfloor 0.6 \\rfloor = 0$, and $\\lfloor 2 \\cdot 1.6 \\rfloor = 2 \\lfloor 1.6 \\rfloor = 2$.

Right working: $\\lfloor 1.2 \\rfloor = 1$ and $\\lfloor 3.2 \\rfloor = 3$. Only an integer term can be taken out: $\\lfloor x + n \\rfloor = \\lfloor x \\rfloor + n$.

Why it happens: the floor is treated like a linear operation, such as multiplying by a constant.

How to check: add the fractional parts. If they sum to $1$ or more, the floor of the sum is one larger than the sum of the floors.`,
  before: ``,
  after: ``,
  link: '',
},

    obj12:{
      title:`Summary: Integer and Fractional Part at a Glance`,
      content:`The definitions, the behaviour on negative numbers, the rules and the uses on this page reduce to the table below.`,
      before:``,
      after:``,
      link:'',
    },

  }


  const introContent = {
  id: "intro",
  title: "Splitting a Number in Two",
  content: `Every real number is an integer plus a part between $0$ and $1$: $3.7 = 3 + 0.7$. The integer part is the floor $\\lfloor x \\rfloor$, and what is left is the fractional part $\\{x\\}$. For positive numbers both are what one would expect. For negative numbers the standard definitions give $\\lfloor -3.7 \\rfloor = -4$ and $\\{-3.7\\} = 0.3$, and most of this page is about why. The page also covers the ceiling, rounding, and the link to division and [modulo](!/arithmetic/modulo).`
}

// FAQ pass 2026-10-31: cut "What is the integer part of a number?" (the h2
// The Integer Part (Floor) answers it), "What is the floor of a negative
// number?" (the h2 Negative Numbers answers it, and the floor-vs-truncation
// question already gives the same -3.7 example) and "How is the floor
// function used to compute a remainder?" (the h2 Floor and Division answers
// it). Kept the fractional-part, truncation and 2.5 questions, renumbered.
// Added the floor of a sum (Properties table and paragraph), floor or
// ceiling in word problems (the test under Counting with Floor and Ceiling)
// and spreadsheet INT on negatives (In Calculators and Programming Languages).
const faqQuestions = {
  obj1: {
    question: "What is the fractional part of a negative number?",
    answer: "With the standard definition {x} = x − ⌊x⌋, the fractional part is always between 0 and 1. For −3.7 it is −3.7 − (−4) = 0.3, not −0.7. Some calculators use a sign-keeping version instead and give −0.7.",
    sectionId: "3"
  },
  obj2: {
    question: "What is the difference between floor and truncation?",
    answer: "Floor rounds down, toward negative infinity; truncation deletes the decimal digits, which rounds toward zero. They agree for positive numbers and differ by one for negative non-integers: ⌊−3.7⌋ = −4, while truncating −3.7 gives −3.",
    sectionId: "4"
  },
  obj3: {
    question: "Why does 2.5 sometimes round to 2?",
    answer: "Under the rule round half to even, a number exactly halfway between two integers goes to the even one: 2.5 rounds to 2 and 3.5 to 4. Python's round function and many financial systems use this rule because it keeps totals from drifting upward.",
    sectionId: "5"
  },
  obj4: {
    question: "Does the floor of a sum equal the sum of the floors?",
    answer: "No, not in general. The fractional parts can add up to $1$ or more and carry an extra unit: $\\lfloor 0.6 + 0.6 \\rfloor = 1$, while $\\lfloor 0.6 \\rfloor + \\lfloor 0.6 \\rfloor = 0$. The floor of the sum is always equal to the sum of the floors or one more. Only an integer can be moved out freely, $\\lfloor x + n \\rfloor = \\lfloor x \\rfloor + n$, so $\\lfloor 2 \\cdot 1.6 \\rfloor = 3$ while $2\\lfloor 1.6 \\rfloor = 2$.",
    sectionId: "6"
  },
  obj5: {
    question: "Should you use floor or ceiling in a word problem?",
    answer: "It depends on what happens to the part left over. If an incomplete group is simply dropped, use the floor; if it still needs a group of its own, use the ceiling. With $50$ students and buses seating $12$, $50 \\div 12 \\approx 4.17$: $\\lfloor 4.17 \\rfloor = 4$ buses are full, but $\\lceil 4.17 \\rceil = 5$ buses are needed. When the division is exact, as with $60$ students, both give $5$.",
    sectionId: "9"
  },
  obj6: {
    question: "Does the INT function in a spreadsheet round negative numbers down?",
    answer: "Yes. Spreadsheet $\\texttt{INT}$ is the floor, so $\\texttt{INT}(-3.7) = -4$, not $-3$. Converting $-3.7$ to an integer type in Python, C or Java truncates instead and gives $-3$. Integer division splits the same way: Python's $\\texttt{//}$ floors, so $-7 \\; \\texttt{//} \\; 2 = -4$, while C and Java truncate to $-3$. Positive inputs cannot tell these apart, so test with a negative number.",
    sectionId: "10"
  },
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Integer and Fractional Part",
    "description": "Integer part (floor), ceiling and fractional part of a number: definitions, negative numbers, rounding rules, properties, graphs, the link to division and modulo, and counting problems.",
    "url": "https://www.learnmathclass.com/arithmetic/integer-part",
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
      "name": "Floor, Ceiling and Fractional Part"
    },
    "teaches": [
      "The floor (integer part) of a real number",
      "The ceiling of a real number",
      "The fractional part and why it is never negative",
      "Floor versus truncation for negative numbers",
      "Rounding rules and ties",
      "Properties of floor, ceiling and fractional part",
      "The staircase and sawtooth graphs",
      "Quotient and remainder with the floor",
      "Counting problems with floor and ceiling"
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
        "name": "Arithmetic",
        "item": "https://www.learnmathclass.com/arithmetic"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Integer and Fractional Part",
        "item": "https://www.learnmathclass.com/arithmetic/integer-part"
      }
    ]
  }
}


  // Figures: a frozen picture and an explanation panel in one frame, built
  // here and rendered as content-array items.
  const fpFloorCeil = { kind: 'pieces', svgTitle: 'Number line: the floor of 2.6 is 2 and its ceiling 3; the floor of −2.3 is −3 and its ceiling −2', xRange: [-4.5, 4.5], yRange: [-1.6, 1.6], xStep: 1, yStep: 5, xLetter: ' ', yLetter: ' ',
    pieces: [
      { fn: () => 0.7, from: 2, to: 2.6, ends: ['closed', null], color: 'g', label: { text: '⌊2.6⌋ = 2', x: 2.3, y: 0.7, pos: 'n' } },
      { fn: () => -0.7, from: 2.6, to: 3, ends: [null, 'closed'], color: 'f', label: { text: '⌈2.6⌉ = 3', x: 2.8, y: -0.7, pos: 's' } },
      { fn: () => 0.7, from: -3, to: -2.3, ends: ['closed', null], color: 'g', label: { text: '⌊−2.3⌋ = −3', x: -2.65, y: 0.7, pos: 'n' } },
      { fn: () => -0.7, from: -2.3, to: -2, ends: [null, 'closed'], color: 'f', label: { text: '⌈−2.3⌉ = −2', x: -2.15, y: -0.7, pos: 's' } },
    ],
    points: [{ x: 2.6, y: 0 }, { x: -2.3, y: 0 }],
    caption: 'Floor goes left, ceiling goes right' };
  const fpRound = { kind: 'pieces', svgTitle: 'Number line: every number from 1.5 up to but not including 2.5 rounds to 2; from 2.5 up to 3.5 rounds to 3', xRange: [0.5, 4.5], yRange: [-1.6, 1.6], xStep: 1, yStep: 5, xLetter: ' ', yLetter: ' ',
    pieces: [
      { fn: () => 0.7, from: 1.5, to: 2.5, ends: ['closed', 'open'], color: 'f', label: { text: 'rounds to 2', x: 2, y: 0.7, pos: 'n' } },
      { fn: () => -0.7, from: 2.5, to: 3.5, ends: ['closed', 'open'], color: 'g', label: { text: 'rounds to 3', x: 3, y: -0.7, pos: 's' } },
    ],
    points: [{ x: 2.5, y: 0, label: '2.5', pos: 'ne' }],
    caption: 'Round half up: each integer owns [n − ½, n + ½)' };
  const stairPieces = [{ fn: () => -4, from: -3.5, to: -3, ends: [null, 'open'], color: 'f' }]
    .concat([-3, -2, -1, 0, 1, 2].map((n) => ({ fn: () => n, from: n, to: n + 1, ends: ['closed', 'open'], color: 'f' })))
    .concat([{ fn: () => 3, from: 3, to: 3.5, ends: ['closed', null], color: 'f' }]);
  stairPieces[6].label = { text: 'y = ⌊x⌋', x: 2.5, y: 2, pos: 'n' };
  const fpStair = { kind: 'pieces', svgTitle: 'Staircase graph of y = floor of x: horizontal steps of length 1, filled dot at the left end of each step, hollow dot at the right end', xRange: [-3.5, 3.5], yRange: [-4.5, 3.5], xStep: 1, yStep: 1,
    pieces: stairPieces, caption: 'y = ⌊x⌋' };
  const sawPieces = [{ fn: (x) => x + 4, from: -3.5, to: -3, ends: [null, 'open'], color: 'g' }]
    .concat([-3, -2, -1, 0, 1, 2].map((n) => ({ fn: (x) => x - n, from: n, to: n + 1, ends: ['closed', 'open'], color: 'g' })))
    .concat([{ fn: (x) => x - 3, from: 3, to: 3.5, ends: ['closed', null], color: 'g' }]);
  const fpSaw = { kind: 'pieces', svgTitle: 'Sawtooth graph of the fractional part y = x minus floor of x: on each unit interval it rises from 0 toward 1, then drops back to 0', xRange: [-3.5, 3.5], yRange: [-0.6, 1.6], xStep: 1, yStep: 1,
    pieces: sawPieces,
    notes: [{ x: -3.4, y: 1.45, text: 'y = {x} = x − ⌊x⌋', pos: 'e' }],
    caption: 'y = {x}' };
  const fpGroups = { kind: 'pieces', svgTitle: 'Number line from 0 to 60 with multiples of 12 marked: 50 lies between 48 and 60, so 4 full groups of 12 fit and 5 groups are needed', xRange: [-3, 63], yRange: [-1.6, 1.6], xStep: 12, yStep: 5, xLetter: ' ', yLetter: ' ',
    pieces: [
      { fn: () => 0.7, from: 0, to: 48, ends: ['closed', 'closed'], color: 'f', label: { text: '⌊50 / 12⌋ = 4 full buses', x: 24, y: 0.7, pos: 'n' } },
      { fn: () => -0.7, from: 0, to: 60, ends: ['closed', 'closed'], color: 'g', label: { text: '⌈50 / 12⌉ = 5 buses', x: 30, y: -0.7, pos: 's' } },
    ],
    points: [{ x: 50, y: 0, label: '50', pos: 'ne' }],
    caption: '50 students, buses of 12' };
  const figures = {
    floorCeil: demoUnitFrame({
      svg: renderFunctionPlotV4(fpFloorCeil),
      caption: 'Floor and ceiling on the number line',
      text: 'The amber dots are 2.6 and &#8722;2.3. The upper segments run left to the floor, the lower ones right to the ceiling. For &#8722;2.3, moving left reaches &#8722;3, so &#8970;&#8722;2.3&#8971; = &#8722;3: the floor of a negative number is further from zero than the number.',
    }),
    round: demoUnitFrame({
      svg: renderFunctionPlotV4(fpRound),
      caption: 'Which numbers round to which integer',
      text: 'Each integer collects the numbers within &#189; of it. Under round half up, the tie 2.5 belongs to the interval of 3: the filled dot at 2.5 is on the lower segment, and the hollow dot on the upper one marks that 2.5 does not round to 2.',
    }),
    stair: demoUnitFrame({
      svg: renderFunctionPlotV4(fpStair),
      caption: 'The staircase',
      text: 'Each step covers one interval [n, n + 1) at height n. The filled dot shows that the left end belongs to the step; the hollow dot shows that the right end does not, because at the next integer the floor has already jumped up by 1.',
    }),
    saw: demoUnitFrame({
      svg: renderFunctionPlotV4(fpSaw),
      caption: 'The sawtooth',
      text: 'Between consecutive integers the fractional part rises with slope 1 from 0 toward 1, never reaching it. At each integer it drops back to 0. The graph to the left of 0 is identical to the graph on the right: {&#8722;0.3} = 0.7, the same height as {0.7}.',
    }),
    groups: demoUnitFrame({
      svg: renderFunctionPlotV4(fpGroups),
      caption: 'Floor counts full groups, ceiling counts groups needed',
      text: 'The tick marks are the multiples of 12. The amber dot, 50, lies between 48 and 60. Four full buses carry 48 students; the 2 left over still need a bus of their own, so the number of buses is the next multiple up: 5.',
    }),
  };

return {
  props:{
    figures,
    sectionsContent,
    introContent,
    negativeTable,
    roundingTable,
    propertiesTable,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Integer and Fractional Part: Floor, Ceiling & Rounding | Learn Math Class",
      description: "Integer part (floor), ceiling and fractional part of a number: definitions, negative numbers, rounding rules, properties, graphs, the link to division and modulo, and counting problems.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/integer-part",
      name: "Integer and Fractional Part"
    },
  }
}
   }


export default function IntegerPartPage({seoData, sectionsContent, introContent, negativeTable, roundingTable, propertiesTable, summaryTable, faqQuestions, schemas, figures}) {

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
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key={'fig-floorceil'} dangerouslySetInnerHTML={{ __html: figures.floorCeil }} />,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          `@academic[punchline:Every real number is its floor plus its fractional part, $x = \\lfloor x \\rfloor + \\{x\\}$, and the fractional part is never negative.]@`,
        ]
    },
    {
        id:'notation',
        title:sectionsContent.notation.title,
        link:'',
        content:[
          <NotationSection
            key={'notation-notation'}
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
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'negative-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: negativeTable }} />,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'fig-round'} dangerouslySetInnerHTML={{ __html: figures.round }} />,
          <div key={'rounding-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: roundingTable }} />,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'properties-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: propertiesTable }} />,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'fig-stair'} dangerouslySetInnerHTML={{ __html: figures.stair }} />,
          <div key={'fig-saw'} dangerouslySetInnerHTML={{ __html: figures.saw }} />,
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
          <div key={'fig-groups'} dangerouslySetInnerHTML={{ __html: figures.groups }} />,
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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Integer and Fractional Part FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Integer and Fractional Part</h1>
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
