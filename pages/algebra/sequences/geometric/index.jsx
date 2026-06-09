// tables-optimized: v4 | 2026-06-03 | 3 tables (obj1 aggregation, obj3 aggregation, obj8 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  "geometric sequence",
  "geometric progression",
  "common ratio",
  "geometric sequence formula",
  "general term geometric sequence",
  "geometric series",
  "sum of geometric series",
  "infinite geometric series",
  "geometric series formula",
  "geometric mean",
  "recursive formula geometric sequence",
  "explicit formula geometric sequence",
  "nth term geometric sequence",
  "convergent geometric series",
  "geometric sequence examples",
]

  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj1 — aggregation: how the sequence and series behave across the r-regimes
  const obj1Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Range of r</th>
      <th style="${tableHeaders.aggregation}">Term behavior</th>
      <th style="${tableHeaders.aggregation}">Series behavior</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">r &gt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same-sign terms grow without bound</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diverges</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2, 6, 18, 54, … (r = 3)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0 &lt; r &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same-sign terms decay toward 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">converges to a₁ ⁄ (1 − r)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">81, 27, 9, 3, 1, … (r = 1⁄3)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">−1 &lt; r &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">signs alternate, magnitudes decay toward 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">converges to a₁ ⁄ (1 − r)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8, −4, 2, −1, 0.5, … (r = −1⁄2)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">r &lt; −1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">signs alternate, magnitudes grow unbounded</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diverges</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4, −8, 16, −32, … (r = −2)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">r = 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">constant: every term equals a₁ (also <a href="/algebra/sequences/arithmetic" style="${linkStyle}">arithmetic</a> with d = 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diverges: S<sub>n</sub> = n · a₁</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5, 5, 5, 5, …</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">r = −1</td>
      <td style="padding: 12px 15px; color: #34495e;">oscillates between ±a₁ at constant magnitude</td>
      <td style="padding: 12px 15px; color: #34495e;">diverges: partial sums oscillate, never settle</td>
      <td style="padding: 12px 15px; color: #34495e;">7, −7, 7, −7, …</td>
    </tr>
  </tbody>
</table>
`

  // obj3 — aggregation: the standard "find the missing quantity" problem types
  const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Given</th>
      <th style="${tableHeaders.aggregation}">Find</th>
      <th style="${tableHeaders.aggregation}">Equation / approach</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a₁, r, n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sub>n</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sub>n</sub> = a₁ · r<sup>n−1</sup> — substitute directly</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a₁ = 3, r = 2 → a₁₀ = 3 · 2⁹ = 1536</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a₁, a<sub>n</sub>, n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r = (a<sub>n</sub> ⁄ a₁)<sup>1 ⁄ (n−1)</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a₁ = 5, a₄ = 40 → r³ = 8 → r = 2</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a<sub>n</sub>, r, n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a₁</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a₁ = a<sub>n</sub> ⁄ r<sup>n−1</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a₆ = 96, r = 2 → a₁ = 96 ⁄ 32 = 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a₁, r, a value v</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n (position of v)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n = 1 + log<sub>r</sub>(v ⁄ a₁); use <a href="/algebra/logarithms" style="${linkStyle}">logarithms</a> if powers aren&apos;t clean</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a₁ = 4, r = 3, v = 2916 → 3<sup>n−1</sup> = 729 → n = 7</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Two non-consecutive terms</td>
      <td style="padding: 12px 15px; color: #34495e;">a₁ and r</td>
      <td style="padding: 12px 15px; color: #34495e;">divide the two equations to isolate a power of r</td>
      <td style="padding: 12px 15px; color: #34495e;">a₂ = 6, a₅ = 162 → r³ = 27 → r = 3, a₁ = 2</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — summary capstone: every formula and property at a glance
  const capstoneTable = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Concept</th>
      <th style="${tableHeaders.summary}">Formula / property</th>
      <th style="${tableHeaders.summary}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Common ratio</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r = a<sub>n+1</sub> ⁄ a<sub>n</sub> (constant; r ≠ 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5, 15, 45, 135 → r = 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Explicit (n-th term)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sub>n</sub> = a₁ · r<sup>n−1</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a₁ = 3, r = 2 → a<sub>n</sub> = 3 · 2<sup>n−1</sup></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Recursive</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a₁ = c; a<sub>n</sub> = r · a<sub>n−1</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply each term by r to step forward</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Finite series sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">S<sub>n</sub> = a₁ · (1 − r<sup>n</sup>) ⁄ (1 − r) for r ≠ 1; if r = 1 then S<sub>n</sub> = n · a₁</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 + 2 + 4 + … + 2⁹ = 1023</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Infinite series sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">S = a₁ ⁄ (1 − r), valid only when |r| &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1⁄2 + 1⁄4 + 1⁄8 + … = 1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Geometric-mean property</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">for positive terms, a<sub>n</sub> = √(a<sub>n−1</sub> · a<sub>n+1</sub>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">interior term = √(neighbor product)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inserting k means between a, b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r = (b ⁄ a)<sup>1 ⁄ (k+1)</sup>; inserts a·r, a·r², …, a·r<sup>k</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 means between 2 and 162 → r = 3 gives 6, 18, 54</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">AM–GM inequality</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">G ≤ A (equality iff all values are equal); extends to H ≤ G ≤ A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(ab) ≤ (a + b) ⁄ 2</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Compared with <a href="/algebra/sequences/arithmetic" style="${linkStyle}">arithmetic</a></td>
      <td style="padding: 12px 15px; color: #34495e;">arithmetic = linear (a<sub>n</sub> ∝ n); geometric = exponential (a<sub>n</sub> ∝ r<sup>n</sup>)</td>
      <td style="padding: 12px 15px; color: #34495e;">3, 6, 9, 12 (arithmetic) vs 3, 6, 12, 24 (geometric)</td>
    </tr>
  </tbody>
</table>
`

//   const sectionsContent = {
//   obj1: {
//     title: `Definition`,
//     content: `A geometric sequence is a sequence in which consecutive terms have a constant ratio $r$:

// $$\\frac{a_{n+1}}{a_n} = r \\quad \\text{for all } n$$

// Starting from a first term $a_1 \\neq 0$, the sequence unfolds as $a_1, a_1 r, a_1 r^2, a_1 r^3, \\ldots$. The general term is:

// $$a_n = a_1 \\cdot r^{n-1}$$

// The ratio $r$ determines the sequence's character. When $r > 1$, the terms grow without bound: $2, 6, 18, 54, \\ldots$ with $r = 3$. When $0 < r < 1$, the terms decay toward zero: $81, 27, 9, 3, 1, \\ldots$ with $r = \\frac{1}{3}$. When $r < 0$, the terms alternate in sign: $4, -8, 16, -32, \\ldots$ with $r = -2$.

// The case $r = 1$ produces a constant sequence — every term equals $a_1$. The case $r = 0$ is excluded because every term after the first would be zero, and the ratio $\\frac{a_{n+1}}{a_n}$ would be undefined.

// Where an [arithmetic sequence](!/algebra/sequences/arithmetic) is linear — its terms lie on a straight line when plotted against their indices — a geometric sequence is exponential. The general term $a_1 \\cdot r^{n-1}$ is an [exponential function](!/algebra/powers/exponential-functions) of $n$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Identifying Geometric Sequences`,
//     content: `To test whether a sequence is geometric, compute the ratio of consecutive terms. If every ratio equals the same value, the sequence is geometric and that value is $r$.

// The sequence $5, 15, 45, 135$ has ratios $3, 3, 3$. All equal, so it is geometric with $r = 3$.

// The sequence $12, 6, 3, 1.5$ has ratios $0.5, 0.5, 0.5$. Geometric with $r = \\frac{1}{2}$.

// The sequence $1, 2, 4, 7$ has ratios $2, 2, 1.75$. The final ratio differs, so the sequence is not geometric.

// A constant sequence like $5, 5, 5, 5$ is both arithmetic (with $d = 0$) and geometric (with $r = 1$). This is the only type of sequence that belongs to both families.

// As with arithmetic sequences, a finite sample cannot confirm a geometric pattern with certainty. The sequence $2, 4, 8$ could continue as $16, 32, \\ldots$ (geometric with $r = 2$) or as $14, 22, \\ldots$ (not geometric). The defining rule, not the sample, is what settles the classification.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Finding Terms`,
//     content: `The explicit formula $a_n = a_1 \\cdot r^{n-1}$ contains four quantities. Given any three, the fourth can be found.

// Finding a specific term: if $a_1 = 3$ and $r = 2$, then $a_{10} = 3 \\cdot 2^9 = 1536$.

// Finding the common ratio: if $a_1 = 5$ and $a_4 = 40$, then $40 = 5 \\cdot r^3$, so $r^3 = 8$ and $r = 2$.

// Finding the first term: if $a_6 = 96$ and $r = 2$, then $96 = a_1 \\cdot 2^5$, so $a_1 = 3$.

// Finding the position of a term: if $a_1 = 4$, $r = 3$, and some term equals $2916$, then $2916 = 4 \\cdot 3^{n-1}$, so $3^{n-1} = 729 = 3^6$ and $n = 7$. When the arithmetic does not produce a clean [power](!/algebra/powers), solving for $n$ requires [logarithms](!/algebra/logarithms): $n - 1 = \\frac{\\ln(a_n / a_1)}{\\ln r}$.

// When two non-consecutive terms are given — say $a_2 = 6$ and $a_5 = 162$ — write both in terms of $a_1$ and $r$: $a_1 r = 6$ and $a_1 r^4 = 162$. Dividing gives $r^3 = 27$, so $r = 3$, and back-substituting gives $a_1 = 2$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Recursive Formula`,
//     content: `The recursive definition of a geometric sequence specifies a starting value and a multiplicative rule:

// $$a_1 = c, \\quad a_n = r \\cdot a_{n-1}$$

// Each term is produced by multiplying the preceding term by $r$. This makes the constant-ratio structure explicit but requires computing all earlier terms to reach a later one.

// Converting between forms works the same way as for arithmetic sequences. Applying the recursive rule $n - 1$ times gives $a_n = c \\cdot r^{n-1}$, recovering the explicit formula. In the other direction, dividing $a_n = a_1 r^{n-1}$ by $a_{n-1} = a_1 r^{n-2}$ yields $\\frac{a_n}{a_{n-1}} = r$, which gives the recursive rule $a_n = r \\cdot a_{n-1}$.

// Both representations define the same sequence. The explicit form is better for computing isolated terms; the recursive form emphasizes the multiplicative process and connects to models where each step scales the previous state by a fixed factor.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Finite Geometric Series`,
//     content: `The sum of the first $n$ terms of a geometric sequence is:

// $$S_n = a_1 + a_1 r + a_1 r^2 + \\cdots + a_1 r^{n-1}$$

// The closed form is:

// $$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r} \\quad (r \\neq 1)$$

// The derivation uses a telescoping trick. Multiply $S_n$ by $r$:

// $$rS_n = a_1 r + a_1 r^2 + \\cdots + a_1 r^n$$

// Subtract from the original sum:

// $$S_n - rS_n = a_1 - a_1 r^n$$

// Factor:

// $$S_n(1 - r) = a_1(1 - r^n)$$

// Divide by $1 - r$ to isolate $S_n$. When $r = 1$, every term equals $a_1$ and $S_n = na_1$.

// For example, the sum $1 + 2 + 4 + 8 + \\cdots + 2^9$ has $a_1 = 1$, $r = 2$, and $n = 10$:

// $$S_{10} = 1 \\cdot \\frac{1 - 2^{10}}{1 - 2} = \\frac{1 - 1024}{-1} = 1023$$`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Infinite Geometric Series`,
//     content: `When $|r| < 1$, the terms of a geometric sequence shrink toward zero, and the partial sums $S_n$ approach a finite limit as $n \\to \\infty$. Since $r^n \\to 0$, the finite sum formula $S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$ simplifies to:

// $$S = \\frac{a_1}{1 - r} \\quad (|r| < 1)$$

// The series $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$ has $a_1 = \\frac{1}{2}$ and $r = \\frac{1}{2}$, so $S = \\frac{1/2}{1 - 1/2} = 1$. Adding half of the remaining distance at each step eventually fills the full unit.

// Repeating decimals provide another illustration. The decimal $0.333\\ldots = \\frac{3}{10} + \\frac{3}{100} + \\frac{3}{1000} + \\cdots$ is a geometric series with $a_1 = \\frac{3}{10}$ and $r = \\frac{1}{10}$, summing to $\\frac{3/10}{9/10} = \\frac{1}{3}$.

// When $|r| \\geq 1$, the terms do not diminish (or grow in magnitude), and the partial sums grow without bound. The series diverges and no finite sum exists. The boundary case $r = -1$ produces partial sums that oscillate between $a_1$ and $0$ without settling — this too is divergent.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Geometric Mean`,
//     content: `The geometric mean of two positive numbers $a$ and $b$ is:

// $$G = \\sqrt{ab}$$

// In a geometric sequence with positive terms, every term is the geometric mean of its two neighbors:

// $$a_n = \\sqrt{a_{n-1} \\cdot a_{n+1}}$$

// This follows from the constant-ratio property: $a_{n-1} = \\frac{a_n}{r}$ and $a_{n+1} = a_n r$, so $a_{n-1} \\cdot a_{n+1} = a_n^2$.

// Inserting geometric means between two positive values $a$ and $b$ requires placing $k$ terms so that the resulting $k + 2$ values form a geometric sequence. The common ratio must be $r = \\left(\\frac{b}{a}\\right)^{1/(k+1)}$, and the inserted terms are $ar, ar^2, \\ldots, ar^k$.

// The AM–GM inequality states that for any set of positive numbers, the geometric mean never exceeds the [arithmetic mean](!/algebra/sequences/arithmetic#6):

// $$G \\leq A$$

// Equality holds only when all values are identical. This inequality extends to include the [harmonic mean](!/algebra/sequences/harmonic#4): $H \\leq G \\leq A$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Geometric Sequences at a Glance`,
//     content: `The page defined the common ratio, derived the explicit and recursive formulas, the finite-series telescoping sum, the infinite-series convergence rule, and the geometric-mean property. The table below collects each formula with a representative example for quick reference.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// }

// /algebra/sequences/geometric — sectionsContent v2
// 7 callouts: obj1 (2), obj4 (1), obj5 (1), obj6 (1), obj7 (2). obj2/obj3/obj8 untouched.

const sectionsContent = {
  obj1: {
    title: `Definition`,
    content: `A geometric sequence is a sequence in which consecutive terms have a constant ratio $r$:

@academic[formula_callout:Common Ratio
$$\\frac{a_{n+1}}{a_n} = r$$
/algebra/formulas#common_ratio]@

Starting from a first term $a_1 \\neq 0$, the sequence unfolds as $a_1, a_1 r, a_1 r^2, a_1 r^3, \\ldots$. The general term is:

@academic[formula_callout:General Term (Geometric Sequence)
$$a_n = a_1 \\cdot r^{n-1}$$
/algebra/formulas#general_term_geometric_sequence]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The ratio $r$ determines the sequence's character. When $r > 1$, the terms grow without bound: $2, 6, 18, 54, \\ldots$ with $r = 3$. When $0 < r < 1$, the terms decay toward zero: $81, 27, 9, 3, 1, \\ldots$ with $r = \\frac{1}{3}$. When $r < 0$, the terms alternate in sign: $4, -8, 16, -32, \\ldots$ with $r = -2$.

The case $r = 1$ produces a constant sequence — every term equals $a_1$. The case $r = 0$ is excluded because every term after the first would be zero, and the ratio $\\frac{a_{n+1}}{a_n}$ would be undefined.

Where an [arithmetic sequence](!/algebra/sequences/arithmetic) is linear — its terms lie on a straight line when plotted against their indices — a geometric sequence is exponential. The general term $a_1 \\cdot r^{n-1}$ is an [exponential function](!/algebra/powers/exponential-functions) of $n$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Identifying Geometric Sequences`,
    content: `To test whether a sequence is geometric, compute the ratio of consecutive terms. If every ratio equals the same value, the sequence is geometric and that value is $r$.

The sequence $5, 15, 45, 135$ has ratios $3, 3, 3$. All equal, so it is geometric with $r = 3$.

The sequence $12, 6, 3, 1.5$ has ratios $0.5, 0.5, 0.5$. Geometric with $r = \\frac{1}{2}$.

The sequence $1, 2, 4, 7$ has ratios $2, 2, 1.75$. The final ratio differs, so the sequence is not geometric.

A constant sequence like $5, 5, 5, 5$ is both arithmetic (with $d = 0$) and geometric (with $r = 1$). This is the only type of sequence that belongs to both families.

As with arithmetic sequences, a finite sample cannot confirm a geometric pattern with certainty. The sequence $2, 4, 8$ could continue as $16, 32, \\ldots$ (geometric with $r = 2$) or as $14, 22, \\ldots$ (not geometric). The defining rule, not the sample, is what settles the classification.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Finding Terms`,
    content: `The explicit formula $a_n = a_1 \\cdot r^{n-1}$ contains four quantities. Given any three, the fourth can be found.

Finding a specific term: if $a_1 = 3$ and $r = 2$, then $a_{10} = 3 \\cdot 2^9 = 1536$.

Finding the common ratio: if $a_1 = 5$ and $a_4 = 40$, then $40 = 5 \\cdot r^3$, so $r^3 = 8$ and $r = 2$.

Finding the first term: if $a_6 = 96$ and $r = 2$, then $96 = a_1 \\cdot 2^5$, so $a_1 = 3$.

Finding the position of a term: if $a_1 = 4$, $r = 3$, and some term equals $2916$, then $2916 = 4 \\cdot 3^{n-1}$, so $3^{n-1} = 729 = 3^6$ and $n = 7$. When the arithmetic does not produce a clean [power](!/algebra/powers), solving for $n$ requires [logarithms](!/algebra/logarithms): $n - 1 = \\frac{\\ln(a_n / a_1)}{\\ln r}$.

When two non-consecutive terms are given — say $a_2 = 6$ and $a_5 = 162$ — write both in terms of $a_1$ and $r$: $a_1 r = 6$ and $a_1 r^4 = 162$. Dividing gives $r^3 = 27$, so $r = 3$, and back-substituting gives $a_1 = 2$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Recursive Formula`,
    content: `The recursive definition of a geometric sequence specifies a starting value and a multiplicative rule:

@academic[formula_callout:Recursive Form (Geometric Sequence)
$$a_1 = c, \\quad a_n = r \\cdot a_{n-1}$$
/algebra/formulas#recursive_form_geometric_sequence]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

Each term is produced by multiplying the preceding term by $r$. This makes the constant-ratio structure explicit but requires computing all earlier terms to reach a later one.

Converting between forms works the same way as for arithmetic sequences. Applying the recursive rule $n - 1$ times gives $a_n = c \\cdot r^{n-1}$, recovering the explicit formula. In the other direction, dividing $a_n = a_1 r^{n-1}$ by $a_{n-1} = a_1 r^{n-2}$ yields $\\frac{a_n}{a_{n-1}} = r$, which gives the recursive rule $a_n = r \\cdot a_{n-1}$.

Both representations define the same sequence. The explicit form is better for computing isolated terms; the recursive form emphasizes the multiplicative process and connects to models where each step scales the previous state by a fixed factor.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Finite Geometric Series`,
    content: `The sum of the first $n$ terms of a geometric sequence is:

$$S_n = a_1 + a_1 r + a_1 r^2 + \\cdots + a_1 r^{n-1}$$

The closed form is:

@academic[formula_callout:Finite Geometric Series Sum
$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r} \\quad (r \\neq 1)$$
/algebra/formulas#finite_geometric_series_sum]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The derivation uses a telescoping trick. Multiply $S_n$ by $r$:

$$rS_n = a_1 r + a_1 r^2 + \\cdots + a_1 r^n$$

Subtract from the original sum:

$$S_n - rS_n = a_1 - a_1 r^n$$

Factor:

$$S_n(1 - r) = a_1(1 - r^n)$$

Divide by $1 - r$ to isolate $S_n$. When $r = 1$, every term equals $a_1$ and $S_n = na_1$.

For example, the sum $1 + 2 + 4 + 8 + \\cdots + 2^9$ has $a_1 = 1$, $r = 2$, and $n = 10$:

$$S_{10} = 1 \\cdot \\frac{1 - 2^{10}}{1 - 2} = \\frac{1 - 1024}{-1} = 1023$$`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Infinite Geometric Series`,
    content: `When $|r| < 1$, the terms of a geometric sequence shrink toward zero, and the partial sums $S_n$ approach a finite limit as $n \\to \\infty$. Since $r^n \\to 0$, the finite sum formula $S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$ simplifies to:

@academic[formula_callout:Infinite Geometric Series Sum
$$S = \\frac{a_1}{1 - r} \\quad (|r| < 1)$$
/algebra/formulas#infinite_geometric_series_sum]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The series $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$ has $a_1 = \\frac{1}{2}$ and $r = \\frac{1}{2}$, so $S = \\frac{1/2}{1 - 1/2} = 1$. Adding half of the remaining distance at each step eventually fills the full unit.

Repeating decimals provide another illustration. The decimal $0.333\\ldots = \\frac{3}{10} + \\frac{3}{100} + \\frac{3}{1000} + \\cdots$ is a geometric series with $a_1 = \\frac{3}{10}$ and $r = \\frac{1}{10}$, summing to $\\frac{3/10}{9/10} = \\frac{1}{3}$.

When $|r| \\geq 1$, the terms do not diminish (or grow in magnitude), and the partial sums grow without bound. The series diverges and no finite sum exists. The boundary case $r = -1$ produces partial sums that oscillate between $a_1$ and $0$ without settling — this too is divergent.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Geometric Mean`,
    content: `The geometric mean of two positive numbers $a$ and $b$ is:

@academic[formula_callout:Geometric Mean
$$G = \\sqrt{ab}$$
/algebra/formulas#geometric_mean]@

In a geometric sequence with positive terms, every term is the geometric mean of its two neighbors:

@academic[formula_callout:Geometric Mean Property
$$a_n = \\sqrt{a_{n-1} \\cdot a_{n+1}}$$
/algebra/formulas#geometric_mean_property]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

This follows from the constant-ratio property: $a_{n-1} = \\frac{a_n}{r}$ and $a_{n+1} = a_n r$, so $a_{n-1} \\cdot a_{n+1} = a_n^2$.

Inserting geometric means between two positive values $a$ and $b$ requires placing $k$ terms so that the resulting $k + 2$ values form a geometric sequence. The common ratio must be $r = \\left(\\frac{b}{a}\\right)^{1/(k+1)}$, and the inserted terms are $ar, ar^2, \\ldots, ar^k$.

The AM–GM inequality states that for any set of positive numbers, the geometric mean never exceeds the [arithmetic mean](!/algebra/sequences/arithmetic#6):

$$G \\leq A$$

Equality holds only when all values are identical. This inequality extends to include the [harmonic mean](!/algebra/sequences/harmonic#4): $H \\leq G \\leq A$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Geometric Sequences at a Glance`,
    content: `The page defined the common ratio, derived the explicit and recursive formulas, the finite-series telescoping sum, the infinite-series convergence rule, and the geometric-mean property. The table below collects each formula with a representative example for quick reference.`,
    before: ``,
    after: ``,
    link: '',
  },
}



 const introContent = {
  id: 'intro',
  title: `Constant Ratio`,
  content: `A geometric sequence multiplies each term by the same fixed factor to produce the next. That factor — the common ratio — controls whether the sequence grows, decays, oscillates, or converges. Geometric sequences appear wherever quantities scale by a constant proportion, and their series formulas include one of the few cases where an infinite sum has a finite closed form.`,
}

const faqQuestions = {
  obj1: {
    question: "What is a geometric sequence?",
    answer: "A geometric sequence is a sequence in which consecutive terms have a constant ratio called the common ratio, denoted r. Starting from a nonzero first term a_1, each subsequent term is obtained by multiplying the previous one by r, producing the pattern a_1, a_1 r, a_1 r squared, and so on."
  },
  obj2: {
    question: "What is the formula for the nth term of a geometric sequence?",
    answer: "The general term of a geometric sequence is a_n = a_1 times r raised to the power n minus 1, where a_1 is the first term, r is the common ratio, and n is the position. This explicit formula gives any term directly without computing the ones before it."
  },
  obj3: {
    question: "What is the sum of a geometric series?",
    answer: "The sum of the first n terms of a geometric sequence is S_n = a_1 times (1 minus r to the power n) divided by (1 minus r), valid when r is not equal to 1. When r equals 1, every term is a_1 and the sum is simply n times a_1. The formula is derived using a telescoping subtraction trick."
  },
  obj4: {
    question: "When does an infinite geometric series converge?",
    answer: "An infinite geometric series converges when the absolute value of the common ratio r is less than 1. In that case, the sum equals a_1 divided by (1 minus r). When the absolute value of r is greater than or equal to 1, the terms do not diminish and the series diverges with no finite sum."
  },
  obj5: {
    question: "What is the geometric mean in a geometric sequence?",
    answer: "The geometric mean of two positive numbers a and b is the square root of their product. In a geometric sequence with positive terms, every interior term equals the geometric mean of its two neighbors. The AM-GM inequality states that the geometric mean never exceeds the arithmetic mean, with equality only when all values are identical."
  },
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Geometric Sequences and Series",
    "description": "Learn geometric sequences: definition, common ratio, nth term formula, recursive form, finite and infinite geometric series, and geometric mean with examples.",
    "url": "https://www.learnmathclass.com/algebra/sequences/geometric",
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
      "name": "Geometric Sequences"
    },
    "teaches": [
      "Definition of a geometric sequence and the common ratio",
      "Explicit formula a_n = a_1 times r to the n minus 1 for the general term",
      "Identifying geometric sequences by checking constant ratios",
      "Finding any unknown quantity from a_n, a_1, n, and r",
      "Finite geometric series formula and its derivation by telescoping",
      "Infinite geometric series convergence and the geometric mean property"
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
        "name": "Sequences",
        "item": "https://www.learnmathclass.com/algebra/sequences"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Geometric Sequences",
        "item": "https://www.learnmathclass.com/algebra/sequences/geometric"
      }
    ]
  },

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Object.keys(faqQuestions).map(key => ({
      "@type": "Question",
      "name": faqQuestions[key].question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqQuestions[key].answer
      }
    }))
  }
}

   return {
  props:{
     sectionsContent,
     introContent,
     obj1Table,
     obj3Table,
     capstoneTable,
     faqQuestions,
     schemas,
     seoData: {
       title: "Geometric Sequences & Series Formula | Learn Math Class",
       description: "Learn geometric sequences: definition, common ratio, nth term formula, recursive form, finite and infinite geometric series, and geometric mean with examples.",
       keywords: keyWords.join(", "),
       url: "/algebra/sequences/geometric",
       name: "Geometric Sequences and Series"
     },
   }
}
   }

export default function GeometricSequencesPage({seoData, sectionsContent, introContent, obj1Table, obj3Table, capstoneTable, faqQuestions, schemas}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
          <div key={'obj1-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj1Table }} />,
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
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
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
          <div key={'capstone-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: capstoneTable }} />,
        ]
    },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
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
    
]

  return (
   <>
 <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Geometric Sequences</h1>
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
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}