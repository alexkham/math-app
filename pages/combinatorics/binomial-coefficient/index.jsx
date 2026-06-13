
// tables-optimized: v4 | 2026-05-26 | 3 tables (obj2 aggregation, obj3 aggregation, obj6 summary capstone)
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
    'binomial coefficient',
    'n choose k',
    'binomial coefficient formula',
    'binomial coefficient identities',
    'Pascal triangle',
    'Pascal rule',
    'combinations formula',
    'multinomial coefficient',
    'Vandermonde identity',
    'hockey stick identity',
    'binomial symmetry',
    'row sum binomial',
    'nCk formula',
    'combinatorial identities'
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


// URL: /combinatorics/binomial-coefficient

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — aggregation: every named binomial-coefficient identity in one card
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Identity</th>
      <th style="${tableHeaders.aggregation}">Formula</th>
      <th style="${tableHeaders.aggregation}">Combinatorial meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, k) = C(n, n − k)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">choosing the k included items ↔ choosing the n − k excluded items</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Pascal&apos;s rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, k) = C(n−1, k−1) + C(n−1, k)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a fixed element is either in the subset or out of it</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Absorption</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">k · C(n, k) = n · C(n−1, k−1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">choose a k-subset, then distinguish one of its members</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Σ<sub>k=0</sub><sup>n</sup> C(n, k) = 2<sup>n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total number of subsets of an n-set</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Alternating row sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Σ<sub>k=0</sub><sup>n</sup> (−1)<sup>k</sup> C(n, k) = 0 for n ≥ 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">even-sized subsets and odd-sized subsets are equally numerous</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vandermonde&apos;s identity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(m+n, r) = Σ<sub>k=0</sub><sup>r</sup> C(m, k) C(n, r−k)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">partition the chosen items between the two source sets</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Hockey stick</td>
      <td style="padding: 12px 15px; color: #34495e;">Σ<sub>i=k</sub><sup>n</sup> C(i, k) = C(n+1, k+1)</td>
      <td style="padding: 12px 15px; color: #34495e;">a diagonal sum in Pascal&apos;s triangle equals a single entry one row below</td>
    </tr>
  </tbody>
</table>
`

  // obj3 — aggregation: the named diagonal sequences in Pascal's triangle
  const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Diagonal</th>
      <th style="${tableHeaders.aggregation}">Sequence name</th>
      <th style="${tableHeaders.aggregation}">First few values</th>
      <th style="${tableHeaders.aggregation}">Closed form (n-th)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1st (k = 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">constants</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1, 1, 1, 1, …</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">2nd (k = 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">natural numbers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1, 2, 3, 4, …</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">3rd (k = 2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">triangular numbers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1, 3, 6, 10, 15, …</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n(n+1) ⁄ 2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">4th (k = 3)</td>
      <td style="padding: 12px 15px; color: #34495e;">tetrahedral numbers</td>
      <td style="padding: 12px 15px; color: #34495e;">1, 4, 10, 20, 35, …</td>
      <td style="padding: 12px 15px; color: #34495e;">n(n+1)(n+2) ⁄ 6</td>
    </tr>
  </tbody>
</table>
`

  // obj6 — summary capstone: formula, boundary values, generalizations
  const capstoneTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Concept</th>
      <th style="${tableHeaders.summary}">Statement</th>
      <th style="${tableHeaders.summary}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Standard formula</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, k) = n! ⁄ (k! · (n − k)!) for 0 ≤ k ≤ n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(5, 2) = 120 ⁄ (2 · 6) = 10</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Combinatorial meaning</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">number of k-element subsets of an n-element set</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2-subsets of {a, b, c, d, e}: 10</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Read aloud</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;n choose k&quot;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(5, 2) reads &quot;5 choose 2&quot;</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Edge values</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, 0) = C(n, n) = 1 for every n ≥ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(7, 0) = C(7, 7) = 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linear values</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, 1) = C(n, n − 1) = n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(7, 1) = 7</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Out of range</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, k) = 0 whenever k &gt; n or k &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(3, 5) = 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Real upper index</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(x, k) = x(x−1)(x−2)…(x−k+1) ⁄ k! — a polynomial of degree k in x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(½, 2) = (½ · −½) ⁄ 2 = −1⁄8</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Pascal&apos;s-triangle row</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row n holds C(n, 0), C(n, 1), …, C(n, n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row 4: 1, 4, 6, 4, 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multinomial generalization</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n; k₁, …, k<sub>r</sub>) = n! ⁄ (k₁! · k₂! · … · k<sub>r</sub>!) with k₁+…+k<sub>r</sub> = n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(6; 2, 2, 2) = 720 ⁄ 8 = 90</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Where it appears</td>
      <td style="padding: 12px 15px; color: #34495e;">subset counts, polynomial expansions (<a href="/combinatorics/binomial-theorem" style="${linkStyle}">binomial theorem</a>), discrete probability (binomial distribution), finite-difference calculus</td>
      <td style="padding: 12px 15px; color: #34495e;">(x + y)<sup>n</sup> coefficients are C(n, k)</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   obj1: {
//     title: `Definition and Notation`,
//     content: `
// For non-negative integers $n$ and $k$ with $0 \\le k \\le n$, the binomial coefficient is

// $$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

// Boundary cases follow directly: $\\binom{n}{0} = \\binom{n}{n} = 1$ for every $n \\ge 0$, and $\\binom{n}{k} = 0$ whenever $k > n$. The expression is read aloud as "$n$ choose $k$".

// ## Notation Variants

// Several notations are in use for the same object:

// • $\\binom{n}{k}$ — the standard modern form, used throughout mathematics
// • $C(n,k)$ — common in introductory texts
// • $C_n^k$ or $C_k^n$ — used in some European traditions; the position of the subscript and superscript varies by source
// • \${}_nC_k$ — the form most calculator displays use

// ## Generalization to Real Upper Index

// The definition extends beyond non-negative integers by rewriting the numerator as a descending product:

// $$\\binom{x}{k} = \\frac{x(x-1)(x-2)\\cdots(x-k+1)}{k!}.$$

// Here $x$ can be any real or complex number and $k$ remains a non-negative integer. The numerator is a polynomial of degree $k$ in $x$, so $\\binom{x}{k}$ is itself a polynomial in $x$. This is the form that appears in Newton's generalized binomial theorem, where the upper index is no longer required to be a non-negative integer.

// The combinatorial interpretation — the number of [combinations](!/combinatorics/combinations) of $k$ items chosen from $n$ — remains the most intuitive entry point, but the algebraic definition is what extends to non-integer settings.

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Combinatorics Symbols and Notations](!/math-symbols/combinatorics) →@

// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Identities`,
//     content: `
// The binomial coefficient satisfies a network of identities, many of which are not visible from the counting interpretation alone.

// ## Symmetry

// $$\\binom{n}{k} = \\binom{n}{n-k}.$$

// Choosing which $k$ items to include is equivalent to choosing which $n-k$ items to exclude.

// ## Pascal's Rule

// $$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}.$$

// Fix a particular element of the $n$-set. A $k$-subset either contains that element — in which case the remaining $k-1$ items come from the other $n-1$ — or does not, in which case all $k$ items come from the other $n-1$. The two cases partition the $k$-subsets, and adding their counts gives the identity. This recursion is the foundation of Pascal's triangle.

// ## Absorption Identity

// $$k \\binom{n}{k} = n \\binom{n-1}{k-1}.$$

// Both sides count the number of ways to choose a $k$-element subset and then designate one of its members as distinguished.

// ## Row Sum

// $$\\sum_{k=0}^{n} \\binom{n}{k} = 2^n.$$

// The total number of subsets of an $n$-set, summed over all possible sizes, equals the size of the power set.

// ## Alternating Row Sum

// $$\\sum_{k=0}^{n} (-1)^k \\binom{n}{k} = 0 \\quad \\text{for } n \\ge 1.$$

// The number of even-sized subsets of an $n$-set equals the number of odd-sized subsets.

// ## Vandermonde's Identity

// $$\\binom{m+n}{r} = \\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r-k}.$$

// Choosing $r$ items from the disjoint union of an $m$-set and an $n$-set partitions according to how many of the chosen items come from each side.

// ## Hockey Stick Identity

// $$\\sum_{i=k}^{n} \\binom{i}{k} = \\binom{n+1}{k+1}.$$

// A sum running down a diagonal of Pascal's triangle equals a single entry one row below.

// Most of these identities admit both algebraic and combinatorial proofs. The combinatorial proofs typically use [double counting](!/combinatorics/counting-principles#double): the same set is enumerated by two different strategies, and the two expressions for its size are equated.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Pascal's Triangle`,
//     content: `
// Pascal's rule arranges all binomial coefficients into a triangular array. Row $n$, indexed starting from row $0$, contains the $n+1$ values

// $$\\binom{n}{0}, \\binom{n}{1}, \\ldots, \\binom{n}{n}.$$

// Each interior entry equals the sum of the two entries directly above it — the visual form of Pascal's rule.

// ## What the Triangle Encodes

// The symmetry identity $\\binom{n}{k} = \\binom{n}{n-k}$ is immediate from the array: each row reads the same forwards and backwards.

// The diagonals of the triangle hold familiar sequences:

// • The first diagonal contains the constants $1, 1, 1, \\ldots$
// • The second contains the natural numbers $1, 2, 3, 4, \\ldots$
// • The third contains the triangular numbers $1, 3, 6, 10, \\ldots$
// • The fourth contains the tetrahedral numbers $1, 4, 10, 20, \\ldots$

// Sums along the shallow diagonals — diagonals that move one step down and one step left at each entry — produce the Fibonacci numbers.

// The row sums double at each step, since $\\sum_k \\binom{n}{k} = 2^n$.

// ## Computing Coefficients

// For computing individual binomial coefficients, Pascal's triangle is the most efficient route when the values needed are small. Beyond moderate size, the explicit formula or the absorption identity is faster.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `The Multinomial Coefficient`,
//     content: `
// The binomial coefficient counts ways to split $n$ items into two groups of sizes $k$ and $n-k$. The multinomial coefficient is the natural generalization to more than two groups.

// ## Definition

// For non-negative integers $k_1, k_2, \\ldots, k_r$ with $k_1 + k_2 + \\cdots + k_r = n$,

// $$\\binom{n}{k_1, k_2, \\ldots, k_r} = \\frac{n!}{k_1! \\, k_2! \\, \\cdots \\, k_r!}.$$

// The binomial coefficient is the case $r = 2$:

// $$\\binom{n}{k} = \\binom{n}{k, \\, n-k}.$$

// ## Combinatorial Interpretation

// The multinomial coefficient counts the number of distinct arrangements of $n$ items in which $k_1$ are of type 1, $k_2$ are of type 2, and so on through $k_r$ items of type $r$. This is the same count that appears in [permutations with identical items](!/combinatorics/permutations#identical) — the two viewpoints (partitioning into groups versus arranging with repetition of types) refer to the same enumeration.

// The multinomial coefficient is also the natural coefficient in the [multinomial theorem](!/combinatorics/binomial-theorem), which expands $(x_1 + x_2 + \\cdots + x_r)^n$.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Related Concepts`,
//     content: `
// • [Probability](!/probability/distributions/discrete/binomial) — the binomial distribution and several related discrete distributions are built directly on the binomial coefficient.

// • [Algebra](!/algebra) — polynomial identities, generating functions, and finite difference calculus all rely on binomial expansions and binomial-coefficient identities.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Binomial Coefficient at a Glance`,
//     content: `
// The page covered the formal definition and notation, the network of identities the coefficient satisfies, the Pascal&apos;s-triangle organization, and the multinomial generalization. The table below collects the formula, boundary values, and generalizations in one reference card.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
// };


// URL: /combinatorics/binomial-coefficient

// formulas-optimized: v1 | 2026-06-11 | 10 callouts (obj1 ×2, obj2 ×7, obj4 ×1)
// Skipped (empty link.url in data): Sum of Squares of Binomial Coefficients, Newton's Generalized Binomial Theorem
const sectionsContent = {
  obj1: {
    title: `Definition and Notation`,
    content: `
For non-negative integers $n$ and $k$ with $0 \\le k \\le n$, the binomial coefficient is

@academic[formula_callout:Binomial Coefficient
$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$
/combinatorics/formulas#binomial_coefficient]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

Boundary cases follow directly: $\\binom{n}{0} = \\binom{n}{n} = 1$ for every $n \\ge 0$, and $\\binom{n}{k} = 0$ whenever $k > n$. The expression is read aloud as "$n$ choose $k$".

## Notation Variants

Several notations are in use for the same object:

• $\\binom{n}{k}$ — the standard modern form, used throughout mathematics
• $C(n,k)$ — common in introductory texts
• $C_n^k$ or $C_k^n$ — used in some European traditions; the position of the subscript and superscript varies by source
• \${}_nC_k$ — the form most calculator displays use

## Generalization to Real Upper Index

The definition extends beyond non-negative integers by rewriting the numerator as a descending product:

@academic[formula_callout:Generalized Binomial Coefficient
$$\\binom{x}{k} = \\frac{x(x-1)(x-2) \\cdots (x-k+1)}{k!}, \\quad k \\in \\mathbb{Z}_{\\ge 0}, \\; x \\in \\mathbb{R} \\text{ (or } \\mathbb{C}\\text{)}.$$
/combinatorics/formulas#generalized_binomial_coefficient]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

Here $x$ can be any real or complex number and $k$ remains a non-negative integer. The numerator is a polynomial of degree $k$ in $x$, so $\\binom{x}{k}$ is itself a polynomial in $x$. This is the form that appears in Newton's generalized binomial theorem, where the upper index is no longer required to be a non-negative integer.

The combinatorial interpretation — the number of [combinations](!/combinatorics/combinations) of $k$ items chosen from $n$ — remains the most intuitive entry point, but the algebraic definition is what extends to non-integer settings.

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Combinatorics Symbols and Notations](!/math-symbols/combinatorics) →@

`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Identities`,
    content: `
The binomial coefficient satisfies a network of identities, many of which are not visible from the counting interpretation alone.

## Symmetry

@academic[formula_callout:Binomial Symmetry Identity
$$\\binom{n}{k} = \\binom{n}{n-k}.$$
/combinatorics/formulas#binomial_symmetry_identity]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

Choosing which $k$ items to include is equivalent to choosing which $n-k$ items to exclude.

## Pascal's Rule

@academic[formula_callout:Pascal's Rule
$$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}.$$
/combinatorics/formulas#pascals_rule]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

Fix a particular element of the $n$-set. A $k$-subset either contains that element — in which case the remaining $k-1$ items come from the other $n-1$ — or does not, in which case all $k$ items come from the other $n-1$. The two cases partition the $k$-subsets, and adding their counts gives the identity. This recursion is the foundation of Pascal's triangle.

## Absorption Identity

@academic[formula_callout:Absorption Identity
$$k \\binom{n}{k} = n \\binom{n-1}{k-1}.$$
/combinatorics/formulas#absorption_identity]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

Both sides count the number of ways to choose a $k$-element subset and then designate one of its members as distinguished.

## Row Sum

@academic[formula_callout:Binomial Row Sum
$$\\sum_{k=0}^{n} \\binom{n}{k} = 2^n.$$
/combinatorics/formulas#binomial_row_sum]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

The total number of subsets of an $n$-set, summed over all possible sizes, equals the size of the power set.

## Alternating Row Sum

@academic[formula_callout:Alternating Binomial Sum
$$\\sum_{k=0}^{n} (-1)^k \\binom{n}{k} = 0, \\quad n \\ge 1.$$
/combinatorics/formulas#alternating_binomial_sum]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

The number of even-sized subsets of an $n$-set equals the number of odd-sized subsets.

## Vandermonde's Identity

@academic[formula_callout:Vandermonde's Identity
$$\\binom{m+n}{r} = \\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r-k}.$$
/combinatorics/formulas#vandermondes_identity]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

Choosing $r$ items from the disjoint union of an $m$-set and an $n$-set partitions according to how many of the chosen items come from each side.

## Hockey Stick Identity

@academic[formula_callout:Hockey Stick Identity
$$\\sum_{i=k}^{n} \\binom{i}{k} = \\binom{n+1}{k+1}.$$
/combinatorics/formulas#hockey_stick_identity]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

A sum running down a diagonal of Pascal's triangle equals a single entry one row below.

Most of these identities admit both algebraic and combinatorial proofs. The combinatorial proofs typically use [double counting](!/combinatorics/counting-principles#double): the same set is enumerated by two different strategies, and the two expressions for its size are equated.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Pascal's Triangle`,
    content: `
Pascal's rule arranges all binomial coefficients into a triangular array. Row $n$, indexed starting from row $0$, contains the $n+1$ values

$$\\binom{n}{0}, \\binom{n}{1}, \\ldots, \\binom{n}{n}.$$

Each interior entry equals the sum of the two entries directly above it — the visual form of Pascal's rule.

## What the Triangle Encodes

The symmetry identity $\\binom{n}{k} = \\binom{n}{n-k}$ is immediate from the array: each row reads the same forwards and backwards.

The diagonals of the triangle hold familiar sequences:

• The first diagonal contains the constants $1, 1, 1, \\ldots$
• The second contains the natural numbers $1, 2, 3, 4, \\ldots$
• The third contains the triangular numbers $1, 3, 6, 10, \\ldots$
• The fourth contains the tetrahedral numbers $1, 4, 10, 20, \\ldots$

Sums along the shallow diagonals — diagonals that move one step down and one step left at each entry — produce the Fibonacci numbers.

The row sums double at each step, since $\\sum_k \\binom{n}{k} = 2^n$.

## Computing Coefficients

For computing individual binomial coefficients, Pascal's triangle is the most efficient route when the values needed are small. Beyond moderate size, the explicit formula or the absorption identity is faster.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `The Multinomial Coefficient`,
    content: `
The binomial coefficient counts ways to split $n$ items into two groups of sizes $k$ and $n-k$. The multinomial coefficient is the natural generalization to more than two groups.

## Definition

For non-negative integers $k_1, k_2, \\ldots, k_r$ with $k_1 + k_2 + \\cdots + k_r = n$,

@academic[formula_callout:Multinomial Coefficient
$$\\binom{n}{k_1, k_2, \\ldots, k_r} = \\frac{n!}{k_1! \\, k_2! \\cdots k_r!}, \\quad k_1 + k_2 + \\cdots + k_r = n.$$
/combinatorics/formulas#multinomial_coefficient]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

The binomial coefficient is the case $r = 2$:

$$\\binom{n}{k} = \\binom{n}{k, \\, n-k}.$$

## Combinatorial Interpretation

The multinomial coefficient counts the number of distinct arrangements of $n$ items in which $k_1$ are of type 1, $k_2$ are of type 2, and so on through $k_r$ items of type $r$. This is the same count that appears in [permutations with identical items](!/combinatorics/permutations#identical) — the two viewpoints (partitioning into groups versus arranging with repetition of types) refer to the same enumeration.

The multinomial coefficient is also the natural coefficient in the [multinomial theorem](!/combinatorics/binomial-theorem), which expands $(x_1 + x_2 + \\cdots + x_r)^n$.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Related Concepts`,
    content: `
• [Probability](!/probability/distributions/discrete/binomial) — the binomial distribution and several related discrete distributions are built directly on the binomial coefficient.

• [Algebra](!/algebra) — polynomial identities, generating functions, and finite difference calculus all rely on binomial expansions and binomial-coefficient identities.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Binomial Coefficient at a Glance`,
    content: `
The page covered the formal definition and notation, the network of identities the coefficient satisfies, the Pascal&apos;s-triangle organization, and the multinomial generalization. The table below collects the formula, boundary values, and generalizations in one reference card.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
};

const introContent = {
  id: 'intro',
  title: `The Object Behind Combinations`,
  content: `
The combination formula $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ first appears as the answer to a counting question: how many $k$-element subsets does an $n$-element set have? But the same expression turns up in far more than subset-counting problems. It organizes polynomial expansions, governs probability distributions, encodes symmetric structures, and satisfies a network of identities that have nothing obvious to do with subsets.

Treating $\\binom{n}{k}$ as a stand-alone mathematical object — independent of any specific counting scenario — reveals structure that the counting interpretation alone does not expose. This page covers the formal definition and notation, the algebraic identities the coefficient satisfies, the visual organization of all binomial coefficients into Pascal's triangle, and the generalization to multinomial coefficients.
`,
};

const faqQuestions = {
  obj1: {
    question: "What is a binomial coefficient?",
    answer: "A binomial coefficient C(n,k), read 'n choose k', is defined as n! / (k!·(n-k)!) for non-negative integers n and k with k ≤ n. Combinatorially it counts the number of k-element subsets of an n-element set, but the same object also organizes polynomial expansions and probability distributions."
  },
  obj2: {
    question: "What is Pascal's rule?",
    answer: "Pascal's rule states C(n,k) = C(n-1, k-1) + C(n-1, k). Fixing one element of the n-set partitions the k-subsets into those that contain it and those that do not, and the two case counts sum to the total. This recursion is what generates Pascal's triangle."
  },
  obj3: {
    question: "What is the symmetry identity for binomial coefficients?",
    answer: "The symmetry identity is C(n,k) = C(n, n-k). Choosing which k items to include from an n-set is equivalent to choosing which n-k items to exclude, so both selections are counted by the same coefficient. The identity is visible in Pascal's triangle as left-right reflection within each row."
  },
  obj4: {
    question: "What is Vandermonde's identity?",
    answer: "Vandermonde's identity states C(m+n, r) = sum from k=0 to r of C(m,k)·C(n, r-k). Choosing r items from the union of an m-set and a disjoint n-set partitions according to how many come from each side, giving the convolution sum on the right."
  },
  obj5: {
    question: "What is the multinomial coefficient?",
    answer: "The multinomial coefficient C(n; k_1, k_2, ..., k_r) = n! / (k_1!·k_2!·...·k_r!) generalizes the binomial coefficient to more than two groups, with k_1 + k_2 + ... + k_r = n. It counts arrangements of n items where k_i are of type i, and appears in the multinomial theorem."
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Binomial Coefficient",
    "description": "Binomial coefficient n choose k: formula, key identities including Pascal's rule and Vandermonde, Pascal's triangle, and the multinomial generalization.",
    "url": "https://www.learnmathclass.com/combinatorics/binomial-coefficient",
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
      "name": "Binomial Coefficient"
    },
    "teaches": [
      "Definition and notation of binomial coefficients",
      "Extension to real and complex upper index",
      "Core identities including symmetry, Pascal's rule, and absorption",
      "Pascal's triangle structure and its diagonal sequences",
      "Vandermonde's identity and the hockey stick identity",
      "Multinomial coefficient as the generalization to more than two groups"
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
        "name": "Combinatorics",
        "item": "https://www.learnmathclass.com/combinatorics"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Binomial Coefficient",
        "item": "https://www.learnmathclass.com/combinatorics/binomial-coefficient"
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
         obj2Table,
         obj3Table,
         capstoneTable,
         faqQuestions,
         schemas,
          seoData: {
        title: "Binomial Coefficient Formula & Identities | Learn Math Class",
        description: "Binomial coefficient n choose k: formula, key identities including Pascal's rule and Vandermonde, Pascal's triangle, and the multinomial generalization.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/binomial-coefficient",
         name: "Binomial Coefficient"
      },
        
       }
    }
   }

export default function BinomialCoefficientPage({seoData, sectionsContent, introContent, obj2Table, obj3Table, capstoneTable, faqQuestions, schemas}) {

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
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
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
          <div key={'capstone-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: capstoneTable }} />,
        ]
    },
    // {
    //     id:'7',
    //     title:sectionsContent.obj7.title,
    //     link:sectionsContent.obj7.link,
    //     content:[
    //       sectionsContent.obj7.content,
    //     ]
    // },
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Binomial Coefficient</h1>
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