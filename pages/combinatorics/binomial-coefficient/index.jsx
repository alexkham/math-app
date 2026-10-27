
// // tables-optimized: v4 | 2026-05-26 | 3 tables (obj2 aggregation, obj3 aggregation, obj6 summary capstone)
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import NotationSection from '@/app/components/page-components/content-components/NotationSection'
// import { tableHeaders } from '@/app/styles/theme'


// export async function getStaticProps(){

//   const keyWords = [
//     'binomial coefficient',
//     'n choose k',
//     'binomial coefficient formula',
//     'binomial coefficient identities',
//     'Pascal triangle',
//     'Pascal rule',
//     'combinations formula',
//     'multinomial coefficient',
//     'Vandermonde identity',
//     'hockey stick identity',
//     'binomial symmetry',
//     'row sum binomial',
//     'nCk formula',
//     'combinatorial identities'
//   ]

//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />


// // URL: /combinatorics/binomial-coefficient

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj2 — aggregation: every named binomial-coefficient identity in one card
//   const obj2Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Identity</th>
//       <th style="${tableHeaders.aggregation}">Formula</th>
//       <th style="${tableHeaders.aggregation}">Combinatorial meaning</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetry</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, k) = C(n, n − k)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">choosing the k included items ↔ choosing the n − k excluded items</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Pascal&apos;s rule</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, k) = C(n−1, k−1) + C(n−1, k)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a fixed element is either in the subset or out of it</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Absorption</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">k · C(n, k) = n · C(n−1, k−1)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">choose a k-subset, then distinguish one of its members</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row sum</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Σ<sub>k=0</sub><sup>n</sup> C(n, k) = 2<sup>n</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total number of subsets of an n-set</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Alternating row sum</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Σ<sub>k=0</sub><sup>n</sup> (−1)<sup>k</sup> C(n, k) = 0 for n ≥ 1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">even-sized subsets and odd-sized subsets are equally numerous</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vandermonde&apos;s identity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(m+n, r) = Σ<sub>k=0</sub><sup>r</sup> C(m, k) C(n, r−k)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">partition the chosen items between the two source sets</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Hockey stick</td>
//       <td style="padding: 12px 15px; color: #34495e;">Σ<sub>i=k</sub><sup>n</sup> C(i, k) = C(n+1, k+1)</td>
//       <td style="padding: 12px 15px; color: #34495e;">a diagonal sum in Pascal&apos;s triangle equals a single entry one row below</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj3 — aggregation: the named diagonal sequences in Pascal's triangle
//   const obj3Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Diagonal</th>
//       <th style="${tableHeaders.aggregation}">Sequence name</th>
//       <th style="${tableHeaders.aggregation}">First few values</th>
//       <th style="${tableHeaders.aggregation}">Closed form (n-th)</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1st (k = 0)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">constants</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1, 1, 1, 1, …</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">2nd (k = 1)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">natural numbers</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1, 2, 3, 4, …</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">3rd (k = 2)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">triangular numbers</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1, 3, 6, 10, 15, …</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n(n+1) ⁄ 2</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">4th (k = 3)</td>
//       <td style="padding: 12px 15px; color: #34495e;">tetrahedral numbers</td>
//       <td style="padding: 12px 15px; color: #34495e;">1, 4, 10, 20, 35, …</td>
//       <td style="padding: 12px 15px; color: #34495e;">n(n+1)(n+2) ⁄ 6</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj6 — summary capstone: formula, boundary values, generalizations
//   const capstoneTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Concept</th>
//       <th style="${tableHeaders.summary}">Statement</th>
//       <th style="${tableHeaders.summary}">Example</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Standard formula</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, k) = n! ⁄ (k! · (n − k)!) for 0 ≤ k ≤ n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(5, 2) = 120 ⁄ (2 · 6) = 10</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Combinatorial meaning</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">number of k-element subsets of an n-element set</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2-subsets of {a, b, c, d, e}: 10</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Read aloud</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;n choose k&quot;</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(5, 2) reads &quot;5 choose 2&quot;</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Edge values</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, 0) = C(n, n) = 1 for every n ≥ 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(7, 0) = C(7, 7) = 1</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linear values</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, 1) = C(n, n − 1) = n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(7, 1) = 7</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Out of range</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n, k) = 0 whenever k &gt; n or k &lt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(3, 5) = 0</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Real upper index</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(x, k) = x(x−1)(x−2)…(x−k+1) ⁄ k! — a polynomial of degree k in x</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(½, 2) = (½ · −½) ⁄ 2 = −1⁄8</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Pascal&apos;s-triangle row</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row n holds C(n, 0), C(n, 1), …, C(n, n)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row 4: 1, 4, 6, 4, 1</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multinomial generalization</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(n; k₁, …, k<sub>r</sub>) = n! ⁄ (k₁! · k₂! · … · k<sub>r</sub>!) with k₁+…+k<sub>r</sub> = n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C(6; 2, 2, 2) = 720 ⁄ 8 = 90</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Where it appears</td>
//       <td style="padding: 12px 15px; color: #34495e;">subset counts, polynomial expansions (<a href="/combinatorics/binomial-theorem" style="${linkStyle}">binomial theorem</a>), discrete probability (binomial distribution), finite-difference calculus</td>
//       <td style="padding: 12px 15px; color: #34495e;">(x + y)<sup>n</sup> coefficients are C(n, k)</td>
//     </tr>
//   </tbody>
// </table>
// `

// // const sectionsContent = {
// //   obj1: {
// //     title: `Definition and Notation`,
// //     content: `
// // For non-negative integers $n$ and $k$ with $0 \\le k \\le n$, the binomial coefficient is

// // $$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

// // Boundary cases follow directly: $\\binom{n}{0} = \\binom{n}{n} = 1$ for every $n \\ge 0$, and $\\binom{n}{k} = 0$ whenever $k > n$. The expression is read aloud as "$n$ choose $k$".

// // ## Notation Variants

// // Several notations are in use for the same object:

// // • $\\binom{n}{k}$ — the standard modern form, used throughout mathematics
// // • $C(n,k)$ — common in introductory texts
// // • $C_n^k$ or $C_k^n$ — used in some European traditions; the position of the subscript and superscript varies by source
// // • \${}_nC_k$ — the form most calculator displays use

// // ## Generalization to Real Upper Index

// // The definition extends beyond non-negative integers by rewriting the numerator as a descending product:

// // $$\\binom{x}{k} = \\frac{x(x-1)(x-2)\\cdots(x-k+1)}{k!}.$$

// // Here $x$ can be any real or complex number and $k$ remains a non-negative integer. The numerator is a polynomial of degree $k$ in $x$, so $\\binom{x}{k}$ is itself a polynomial in $x$. This is the form that appears in Newton's generalized binomial theorem, where the upper index is no longer required to be a non-negative integer.

// // The combinatorial interpretation — the number of [combinations](!/combinatorics/combinations) of $k$ items chosen from $n$ — remains the most intuitive entry point, but the algebraic definition is what extends to non-integer settings.

// //  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Combinatorics Symbols and Notations](!/math-symbols/combinatorics) →@

// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj2: {
// //     title: `Identities`,
// //     content: `
// // The binomial coefficient satisfies a network of identities, many of which are not visible from the counting interpretation alone.

// // ## Symmetry

// // $$\\binom{n}{k} = \\binom{n}{n-k}.$$

// // Choosing which $k$ items to include is equivalent to choosing which $n-k$ items to exclude.

// // ## Pascal's Rule

// // $$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}.$$

// // Fix a particular element of the $n$-set. A $k$-subset either contains that element — in which case the remaining $k-1$ items come from the other $n-1$ — or does not, in which case all $k$ items come from the other $n-1$. The two cases partition the $k$-subsets, and adding their counts gives the identity. This recursion is the foundation of Pascal's triangle.

// // ## Absorption Identity

// // $$k \\binom{n}{k} = n \\binom{n-1}{k-1}.$$

// // Both sides count the number of ways to choose a $k$-element subset and then designate one of its members as distinguished.

// // ## Row Sum

// // $$\\sum_{k=0}^{n} \\binom{n}{k} = 2^n.$$

// // The total number of subsets of an $n$-set, summed over all possible sizes, equals the size of the power set.

// // ## Alternating Row Sum

// // $$\\sum_{k=0}^{n} (-1)^k \\binom{n}{k} = 0 \\quad \\text{for } n \\ge 1.$$

// // The number of even-sized subsets of an $n$-set equals the number of odd-sized subsets.

// // ## Vandermonde's Identity

// // $$\\binom{m+n}{r} = \\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r-k}.$$

// // Choosing $r$ items from the disjoint union of an $m$-set and an $n$-set partitions according to how many of the chosen items come from each side.

// // ## Hockey Stick Identity

// // $$\\sum_{i=k}^{n} \\binom{i}{k} = \\binom{n+1}{k+1}.$$

// // A sum running down a diagonal of Pascal's triangle equals a single entry one row below.

// // Most of these identities admit both algebraic and combinatorial proofs. The combinatorial proofs typically use [double counting](!/combinatorics/counting-principles#double): the same set is enumerated by two different strategies, and the two expressions for its size are equated.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj3: {
// //     title: `Pascal's Triangle`,
// //     content: `
// // Pascal's rule arranges all binomial coefficients into a triangular array. Row $n$, indexed starting from row $0$, contains the $n+1$ values

// // $$\\binom{n}{0}, \\binom{n}{1}, \\ldots, \\binom{n}{n}.$$

// // Each interior entry equals the sum of the two entries directly above it — the visual form of Pascal's rule.

// // ## What the Triangle Encodes

// // The symmetry identity $\\binom{n}{k} = \\binom{n}{n-k}$ is immediate from the array: each row reads the same forwards and backwards.

// // The diagonals of the triangle hold familiar sequences:

// // • The first diagonal contains the constants $1, 1, 1, \\ldots$
// // • The second contains the natural numbers $1, 2, 3, 4, \\ldots$
// // • The third contains the triangular numbers $1, 3, 6, 10, \\ldots$
// // • The fourth contains the tetrahedral numbers $1, 4, 10, 20, \\ldots$

// // Sums along the shallow diagonals — diagonals that move one step down and one step left at each entry — produce the Fibonacci numbers.

// // The row sums double at each step, since $\\sum_k \\binom{n}{k} = 2^n$.

// // ## Computing Coefficients

// // For computing individual binomial coefficients, Pascal's triangle is the most efficient route when the values needed are small. Beyond moderate size, the explicit formula or the absorption identity is faster.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj4: {
// //     title: `The Multinomial Coefficient`,
// //     content: `
// // The binomial coefficient counts ways to split $n$ items into two groups of sizes $k$ and $n-k$. The multinomial coefficient is the natural generalization to more than two groups.

// // ## Definition

// // For non-negative integers $k_1, k_2, \\ldots, k_r$ with $k_1 + k_2 + \\cdots + k_r = n$,

// // $$\\binom{n}{k_1, k_2, \\ldots, k_r} = \\frac{n!}{k_1! \\, k_2! \\, \\cdots \\, k_r!}.$$

// // The binomial coefficient is the case $r = 2$:

// // $$\\binom{n}{k} = \\binom{n}{k, \\, n-k}.$$

// // ## Combinatorial Interpretation

// // The multinomial coefficient counts the number of distinct arrangements of $n$ items in which $k_1$ are of type 1, $k_2$ are of type 2, and so on through $k_r$ items of type $r$. This is the same count that appears in [permutations with identical items](!/combinatorics/permutations#identical) — the two viewpoints (partitioning into groups versus arranging with repetition of types) refer to the same enumeration.

// // The multinomial coefficient is also the natural coefficient in the [multinomial theorem](!/combinatorics/binomial-theorem), which expands $(x_1 + x_2 + \\cdots + x_r)^n$.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj5: {
// //     title: `Related Concepts`,
// //     content: `
// // • [Probability](!/probability/distributions/discrete/binomial) — the binomial distribution and several related discrete distributions are built directly on the binomial coefficient.

// // • [Algebra](!/algebra) — polynomial identities, generating functions, and finite difference calculus all rely on binomial expansions and binomial-coefficient identities.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj6: {
// //     title: `Binomial Coefficient at a Glance`,
// //     content: `
// // The page covered the formal definition and notation, the network of identities the coefficient satisfies, the Pascal&apos;s-triangle organization, and the multinomial generalization. The table below collects the formula, boundary values, and generalizations in one reference card.
// // `,
// //     before: ``,
// //     between: ``,
// //     after: ``,
// //     link: '',
// //   },
// // };


// // URL: /combinatorics/binomial-coefficient

// // formulas-optimized: v1 | 2026-06-11 | 10 callouts (obj1 ×2, obj2 ×7, obj4 ×1)
// // Skipped (empty link.url in data): Sum of Squares of Binomial Coefficients, Newton's Generalized Binomial Theorem
// const sectionsContent = {
//   obj1: {
//     title: `Definition`,
//     content: `
// For non-negative integers $n$ and $k$ with $0 \\le k \\le n$, the binomial coefficient is

// @academic[formula_callout:Binomial Coefficient
// $$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$
// /combinatorics/formulas#binomial_coefficient]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// Boundary cases follow directly: $\\binom{n}{0} = \\binom{n}{n} = 1$ for every $n \\ge 0$, and $\\binom{n}{k} = 0$ whenever $k > n$.

// ## Generalization to Real Upper Index

// The definition extends beyond non-negative integers by rewriting the numerator as a descending product:

// @academic[formula_callout:Generalized Binomial Coefficient
// $$\\binom{x}{k} = \\frac{x(x-1)(x-2) \\cdots (x-k+1)}{k!}, \\quad k \\in \\mathbb{Z}_{\\ge 0}, \\; x \\in \\mathbb{R} \\text{ (or } \\mathbb{C}\\text{)}.$$
// /combinatorics/formulas#generalized_binomial_coefficient]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// Here $x$ can be any real or complex number and $k$ remains a non-negative integer. The numerator is a polynomial of degree $k$ in $x$, so $\\binom{x}{k}$ is itself a polynomial in $x$. This is the form that appears in Newton's generalized binomial theorem, where the upper index is no longer required to be a non-negative integer.

// The combinatorial interpretation — the number of [combinations](!/combinatorics/combinations) of $k$ items chosen from $n$ — remains the most intuitive entry point, but the algebraic definition is what extends to non-integer settings.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   notation: {
//     title: `Binomial Coefficient Notation`,
//     lead: `One object, four spellings, and a stack that is not a fraction. The read-aloud form — "$n$ choose $k$" — is the key that unlocks all of them; in [LaTeX](!/latex) the stacked form is @[\\binom{n}{k}]@.`,
//     inherited: `$n!$ inside every formula is owned by [permutation notation](!/combinatorics/permutations#notation); the multinomial extension $\\binom{n}{k_1, \\ldots, k_r}$ is built in **The Multinomial Coefficient** below.`,
//     entries: [
//       {
//         id: 'stacked-binom',
//         tex: `$\\binom{n}{k}$`,
//         read: `n choose k`,
//         means: `The standard modern form: two numbers stacked in parentheses, no bar between them — the top chooses from, the bottom chooses how many. Reading it as a fraction is the founding error; $\\binom{6}{2} = 15$, not $3$.`,
//         cases: `The same mark survives the definition's stretch: $\\binom{x}{k}$ with real or complex upper index — **Generalization to Real Upper Index** above — and grows extra lower entries in the multinomial form of **The Multinomial Coefficient** below.`,
//         sameGlyphElsewhere: `A two-entry [column vector](!/linear-algebra/vectors/basic-operations#notation) wears identical clothing — two stacked numbers in parentheses; context (counting versus coordinates) is the only separator.`,
//       },
//       {
//         id: 'functional-calculator',
//         tex: `$C(n, k)$ · $_nC_k$`,
//         read: `C n k; n choose k on a calculator`,
//         means: `The linear spellings: $C(n, k)$ in introductory texts — function notation borrowed for a count — and $_nC_k$ on calculator keys and displays, the combinatorial sibling of $_nP_r$ from [permutation notation](!/combinatorics/permutations#notation).`,
//         cases: `All spellings agree with the stacked form: $C(n, k) = {}_nC_k = \\binom{n}{k}$; the linear forms survive where stacking is impossible — plain-text input, spreadsheet formulas, calculator screens.`,
//         confusedWith: `A function named C. $C(n, k)$ looks like an evaluation of some function $C$ — harmless until $C$ is also a constant or a circle in the same problem; the stacked form dodges the letter entirely.`,
//       },
//       {
//         id: 'european-position',
//         tex: `$C_n^k$ vs $C_k^n$`,
//         read: `C with n and k in the corners — order varies`,
//         means: `The European corner forms: French and Russian traditions attach $n$ and $k$ as subscript and superscript — but which corner holds which number varies by country and by book. The mark alone does not say.`,
//         cases: `Where the convention is fixed it is fixed hard — Russian texts write $C_n^k$ with the pool $n$ below; some French sources invert. Checking against a known value ($C_5^2 = 10$ or $C_2^5$?) settles any book in one line.`,
//         confusedWith: `A power. $C_n^k$ reads dangerously like "$C_n$ raised to the $k$" — the superscript is an index, not an exponent; the same crowded-corner hazard the [inverse marks](!/functions/inverse#2) live with.`,
//       },
//     ],
//     symbolsHref: `/math-symbols/combinatorics`,
//     symbolsLabel: `All combinatorics symbols`,
//     parentHref: `/combinatorics`,
//     parentLabel: `Combinatorics`,
//   },

//   obj2: {
//     title: `Identities`,
//     content: `
// The binomial coefficient satisfies a network of identities, many of which are not visible from the counting interpretation alone.

// ## Symmetry

// @academic[formula_callout:Binomial Symmetry Identity
// $$\\binom{n}{k} = \\binom{n}{n-k}.$$
// /combinatorics/formulas#binomial_symmetry_identity]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// Choosing which $k$ items to include is equivalent to choosing which $n-k$ items to exclude.

// ## Pascal's Rule

// @academic[formula_callout:Pascal's Rule
// $$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}.$$
// /combinatorics/formulas#pascals_rule]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// Fix a particular element of the $n$-set. A $k$-subset either contains that element — in which case the remaining $k-1$ items come from the other $n-1$ — or does not, in which case all $k$ items come from the other $n-1$. The two cases partition the $k$-subsets, and adding their counts gives the identity. This recursion is the foundation of Pascal's triangle.

// ## Absorption Identity

// @academic[formula_callout:Absorption Identity
// $$k \\binom{n}{k} = n \\binom{n-1}{k-1}.$$
// /combinatorics/formulas#absorption_identity]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// Both sides count the number of ways to choose a $k$-element subset and then designate one of its members as distinguished.

// ## Row Sum

// @academic[formula_callout:Binomial Row Sum
// $$\\sum_{k=0}^{n} \\binom{n}{k} = 2^n.$$
// /combinatorics/formulas#binomial_row_sum]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// The total number of subsets of an $n$-set, summed over all possible sizes, equals the size of the power set.

// ## Alternating Row Sum

// @academic[formula_callout:Alternating Binomial Sum
// $$\\sum_{k=0}^{n} (-1)^k \\binom{n}{k} = 0, \\quad n \\ge 1.$$
// /combinatorics/formulas#alternating_binomial_sum]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// The number of even-sized subsets of an $n$-set equals the number of odd-sized subsets.

// ## Vandermonde's Identity

// @academic[formula_callout:Vandermonde's Identity
// $$\\binom{m+n}{r} = \\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r-k}.$$
// /combinatorics/formulas#vandermondes_identity]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

// Choosing $r$ items from the disjoint union of an $m$-set and an $n$-set partitions according to how many of the chosen items come from each side.

// ## Hockey Stick Identity

// @academic[formula_callout:Hockey Stick Identity
// $$\\sum_{i=k}^{n} \\binom{i}{k} = \\binom{n+1}{k+1}.$$
// /combinatorics/formulas#hockey_stick_identity]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

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

// @academic[formula_callout:Multinomial Coefficient
// $$\\binom{n}{k_1, k_2, \\ldots, k_r} = \\frac{n!}{k_1! \\, k_2! \\cdots k_r!}, \\quad k_1 + k_2 + \\cdots + k_r = n.$$
// /combinatorics/formulas#multinomial_coefficient]@

// @academic[formulas_link:Browse all combinatorics formulas
// /combinatorics/formulas]@

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

// const introContent = {
//   id: 'intro',
//   title: `The Object Behind Combinations`,
//   content: `
// The combination formula $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ first appears as the answer to a counting question: how many $k$-element subsets does an $n$-element set have? But the same expression turns up in far more than subset-counting problems. It organizes polynomial expansions, governs probability distributions, encodes symmetric structures, and satisfies a network of identities that have nothing obvious to do with subsets.

// Treating $\\binom{n}{k}$ as a stand-alone mathematical object — independent of any specific counting scenario — reveals structure that the counting interpretation alone does not expose. This page covers the formal definition and notation, the algebraic identities the coefficient satisfies, the visual organization of all binomial coefficients into Pascal's triangle, and the generalization to multinomial coefficients.
// `,
// };

// const faqQuestions = {
//   obj1: {
//     question: "What is a binomial coefficient?",
//     answer: "A binomial coefficient C(n,k), read 'n choose k', is defined as n! / (k!·(n-k)!) for non-negative integers n and k with k ≤ n. Combinatorially it counts the number of k-element subsets of an n-element set, but the same object also organizes polynomial expansions and probability distributions."
//   },
//   obj2: {
//     question: "What is Pascal's rule?",
//     answer: "Pascal's rule states C(n,k) = C(n-1, k-1) + C(n-1, k). Fixing one element of the n-set partitions the k-subsets into those that contain it and those that do not, and the two case counts sum to the total. This recursion is what generates Pascal's triangle."
//   },
//   obj3: {
//     question: "What is the symmetry identity for binomial coefficients?",
//     answer: "The symmetry identity is C(n,k) = C(n, n-k). Choosing which k items to include from an n-set is equivalent to choosing which n-k items to exclude, so both selections are counted by the same coefficient. The identity is visible in Pascal's triangle as left-right reflection within each row."
//   },
//   obj4: {
//     question: "What is Vandermonde's identity?",
//     answer: "Vandermonde's identity states C(m+n, r) = sum from k=0 to r of C(m,k)·C(n, r-k). Choosing r items from the union of an m-set and a disjoint n-set partitions according to how many come from each side, giving the convolution sum on the right."
//   },
//   obj5: {
//     question: "What is the multinomial coefficient?",
//     answer: "The multinomial coefficient C(n; k_1, k_2, ..., k_r) = n! / (k_1!·k_2!·...·k_r!) generalizes the binomial coefficient to more than two groups, with k_1 + k_2 + ... + k_r = n. It counts arrangements of n items where k_i are of type i, and appears in the multinomial theorem."
//   }
// }

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Binomial Coefficient",
//     "description": "Binomial coefficient n choose k: formula, key identities including Pascal's rule and Vandermonde, Pascal's triangle, and the multinomial generalization.",
//     "url": "https://www.learnmathclass.com/combinatorics/binomial-coefficient",
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
//       "name": "Binomial Coefficient"
//     },
//     "teaches": [
//       "Definition and notation of binomial coefficients",
//       "Extension to real and complex upper index",
//       "Core identities including symmetry, Pascal's rule, and absorption",
//       "Pascal's triangle structure and its diagonal sequences",
//       "Vandermonde's identity and the hockey stick identity",
//       "Multinomial coefficient as the generalization to more than two groups"
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
//         "name": "Combinatorics",
//         "item": "https://www.learnmathclass.com/combinatorics"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Binomial Coefficient",
//         "item": "https://www.learnmathclass.com/combinatorics/binomial-coefficient"
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


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          obj2Table,
//          obj3Table,
//          capstoneTable,
//          faqQuestions,
//          schemas,
//           seoData: {
//         title: "Binomial Coefficient Formula & Identities | Learn Math Class",
//         description: "Binomial coefficient n choose k: formula, key identities including Pascal's rule and Vandermonde, Pascal's triangle, and the multinomial generalization.",
//         keywords: keyWords.join(", "),
//         url: "/combinatorics/binomial-coefficient",
//          name: "Binomial Coefficient"
//       },
        
//        }
//     }
//    }

// export default function BinomialCoefficientPage({seoData, sectionsContent, introContent, obj2Table, obj3Table, capstoneTable, faqQuestions, schemas}) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const genericSections=[
//     // {
//     //     id:'0',
//     //     title:sectionsContent.obj0.title,
//     //     link:sectionsContent.obj0.link,
//     //     content:[
//     //       sectionsContent.obj0.content,
//     //     ]
//     // },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'notation',
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
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
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
//           <div key={'obj3-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj3Table }} />,
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
//           <div key={'capstone-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: capstoneTable }} />,
//         ]
//     },
//     // {
//     //     id:'7',
//     //     title:sectionsContent.obj7.title,
//     //     link:sectionsContent.obj7.link,
//     //     content:[
//     //       sectionsContent.obj7.content,
//     //     ]
//     // },
//     // {
//     //     id:'8',
//     //     title:sectionsContent.obj8.title,
//     //     link:sectionsContent.obj8.link,
//     //     content:[
//     //       sectionsContent.obj8.content,
//     //     ]
//     // },
//     // {
//     //     id:'9',
//     //     title:sectionsContent.obj9.title,
//     //     link:sectionsContent.obj9.link,
//     //     content:[
//     //       sectionsContent.obj9.content,
//     //     ]
//     // },
//     // {
//     //     id:'10',
//     //     title:sectionsContent.obj10.title,
//     //     link:sectionsContent.obj10.link,
//     //     content:[
//     //       sectionsContent.obj10.content,
//     //     ]
//     // },
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
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
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Binomial Coefficient</h1>
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
//     {/* <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    /> */}
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


// tables-optimized: v4 | 2026-05-26 | 3 tables (obj2 aggregation, obj3 aggregation, obj6 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import pascalTriangleDiagrams from '@/app/components/combinatorics/new-visualizers/general/pascalTriangleDiagrams'
import renderBinomialCurve from '@/app/utils/illustrations/combinatorics/binomial/binomialCurve'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


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
// Concept introduction (section 1) — template F, collapse. Running instance:
// C(4, 2) = 6 — the Pascal tool's identity state (row 4, entry 2, with its two
// parents). Old obj1 text is kept in sectionsContent.obj1, unused; its four
// formula widgets, the demo frame with its line, and three sentences are
// carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciBothTable = ciTableOpen(['row n', 'triangle entry 2', 'pairs from n items', 'count']) +
  ciRow(['2', '1', '{1,2}', '1']) +
  ciRow(['3', '1 + 2 = 3', '{1,2} {1,3} {2,3}', '3'], { shade: true }) +
  ciRow(['4', '3 + 3 = 6', '{1,2} {1,3} {1,4} {2,3} {2,4} {3,4}', '6'], { last: true, color: '#2563EB', cols: [1, 3] }) +
  '</tbody></table>'
const ciSplitTable = ciTableOpen(['pairs from {1, 2, 3, 4}', 'which ones', 'how many']) +
  ciRow(['containing 4', '{1,4} {2,4} {3,4}', '3 — pick 1 more of 3'], {}) +
  ciRow(['not containing 4', '{1,2} {1,3} {2,3}', '3 — pick 2 of 3'], { shade: true }) +
  ciRow(['all pairs', '', '3 + 3 = 6'], { last: true, color: '#2563EB', cols: [2] }) +
  '</tbody></table>'

const sectionsContent = {
  obj1: {
    title: `Definition`,
    content: `
For non-negative integers $n$ and $k$ with $0 \\le k \\le n$, the binomial coefficient is

@academic[formula_callout:Binomial Coefficient
$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$
/combinatorics/formulas#binomial_coefficient]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

Boundary cases follow directly: $\\binom{n}{0} = \\binom{n}{n} = 1$ for every $n \\ge 0$, and $\\binom{n}{k} = 0$ whenever $k > n$.

## Generalization to Real Upper Index

The definition extends beyond non-negative integers by rewriting the numerator as a descending product:

@academic[formula_callout:Generalized Binomial Coefficient
$$\\binom{x}{k} = \\frac{x(x-1)(x-2) \\cdots (x-k+1)}{k!}, \\quad k \\in \\mathbb{Z}_{\\ge 0}, \\; x \\in \\mathbb{R} \\text{ (or } \\mathbb{C}\\text{)}.$$
/combinatorics/formulas#generalized_binomial_coefficient]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

Here $x$ can be any real or complex number and $k$ remains a non-negative integer. The numerator is a polynomial of degree $k$ in $x$, so $\\binom{x}{k}$ is itself a polynomial in $x$. This is the form that appears in Newton's generalized binomial theorem, where the upper index is no longer required to be a non-negative integer.

The combinatorial interpretation — the number of [combinations](!/combinatorics/combinations) of $k$ items chosen from $n$ — remains the most intuitive entry point, but the algebraic definition is what extends to non-integer settings.

To evaluate the factorials in this formula for specific values, use the [factorial calculator](!/calculators/factorial-calculator).
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  notation: {
    title: `Binomial Coefficient Notation`,
    lead: `One object, four spellings, and a stack that is not a fraction. The read-aloud form — "$n$ choose $k$" — is the key that unlocks all of them; in [LaTeX](!/latex) the stacked form is @[\\binom{n}{k}]@.`,
    inherited: `$n!$ inside every formula is owned by [permutation notation](!/combinatorics/permutations#notation); the multinomial extension $\\binom{n}{k_1, \\ldots, k_r}$ is built in **The Multinomial Coefficient** below.`,
    entries: [
      {
        id: 'stacked-binom',
        tex: `$\\binom{n}{k}$`,
        read: `n choose k`,
        means: `The standard modern form: two numbers stacked in parentheses, no bar between them — the top chooses from, the bottom chooses how many. Reading it as a fraction is the founding error; $\\binom{6}{2} = 15$, not $3$.`,
        cases: `The same mark survives the definition's stretch: $\\binom{x}{k}$ with real or complex upper index — **Generalization to Real Upper Index** above — and grows extra lower entries in the multinomial form of **The Multinomial Coefficient** below.`,
        sameGlyphElsewhere: `A two-entry [column vector](!/linear-algebra/vectors/basic-operations#notation) wears identical clothing — two stacked numbers in parentheses; context (counting versus coordinates) is the only separator.`,
      },
      {
        id: 'functional-calculator',
        tex: `$C(n, k)$ · $_nC_k$`,
        read: `C n k; n choose k on a calculator`,
        means: `The linear spellings: $C(n, k)$ in introductory texts — function notation borrowed for a count — and $_nC_k$ on calculator keys and displays, the combinatorial sibling of $_nP_r$ from [permutation notation](!/combinatorics/permutations#notation).`,
        cases: `All spellings agree with the stacked form: $C(n, k) = {}_nC_k = \\binom{n}{k}$; the linear forms survive where stacking is impossible — plain-text input, spreadsheet formulas, calculator screens.`,
        confusedWith: `A function named C. $C(n, k)$ looks like an evaluation of some function $C$ — harmless until $C$ is also a constant or a circle in the same problem; the stacked form dodges the letter entirely.`,
      },
      {
        id: 'european-position',
        tex: `$C_n^k$ vs $C_k^n$`,
        read: `C with n and k in the corners — order varies`,
        means: `The European corner forms: French and Russian traditions attach $n$ and $k$ as subscript and superscript — but which corner holds which number varies by country and by book. The mark alone does not say.`,
        cases: `Where the convention is fixed it is fixed hard — Russian texts write $C_n^k$ with the pool $n$ below; some French sources invert. Checking against a known value ($C_5^2 = 10$ or $C_2^5$?) settles any book in one line.`,
        confusedWith: `A power. $C_n^k$ reads dangerously like "$C_n$ raised to the $k$" — the superscript is an index, not an exponent; the same crowded-corner hazard the [inverse marks](!/functions/inverse#2) live with.`,
      },
    ],
    symbolsHref: `/math-symbols/combinatorics`,
    symbolsLabel: `All combinatorics symbols`,
    parentHref: `/combinatorics`,
    parentLabel: `Combinatorics`,
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

@academic[fact,aside:true,width:35%:Found in China in 1303
Zhu Shijie wrote this identity in his Jade Mirror of the Four Unknowns in 1303, together with a drawing of the triangle. Vandermonde published it in 1772, about 470 years later, and the name stayed with him.]@

Choosing $r$ items from the disjoint union of an $m$-set and an $n$-set partitions according to how many of the chosen items come from each side.

Take $m = n = 3$ and $r = 3$. The $3$ chosen items can include $0$, $1$, $2$ or $3$ from the first group, so $\\binom{6}{3} = 1 \\cdot 1 + 3 \\cdot 3 + 3 \\cdot 3 + 1 \\cdot 1 = 20$. With $m = n = r$ in general, the identity becomes $\\binom{2n}{n} = \\sum_{k} \\binom{n}{k}^2$: the squares of the entries of row $n$ add up to the middle entry of row $2n$.

## Hockey Stick Identity

@academic[formula_callout:Hockey Stick Identity
$$\\sum_{i=k}^{n} \\binom{i}{k} = \\binom{n+1}{k+1}.$$
/combinatorics/formulas#hockey_stick_identity]@

@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@

A sum running down a diagonal of Pascal's triangle equals a single entry one row below.

@academic[pitfall,aside:true,width:35%:Taking the entry from the last row of the sum
Writing $\\sum_{i=2}^{5} \\binom{i}{2}$ as $\\binom{5}{3} = 10$ stops one row too early and gives half the actual total. The upper index is $n + 1$: $\\binom{6}{3} = 20$.
[Read more](!#pitfalls)]@

Take $k = 2$ and $n = 5$. The sum $\\binom{2}{2} + \\binom{3}{2} + \\binom{4}{2} + \\binom{5}{2} = 1 + 3 + 6 + 10 = 20$ adds the first four triangular numbers, which run down one diagonal of the triangle. The identity names this total as a single coefficient, so a long diagonal sum never has to be added term by term.

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

@academic[formula_callout:Pascal's Triangle
$$\\binom{n}{0}, \\binom{n}{1}, \\ldots, \\binom{n}{n}.$$]@

@academic[rule:Pascal's Rule
Each interior entry equals the sum of the two entries directly above it — the visual form of Pascal's rule.]@

@academic[pitfall,aside:true,width:35%:Counting rows and positions from 1
Calling the top $1$ row $1$ and the left edge position $1$ reads $\\binom{5}{2}$ off the row $1, 4, 6, 4, 1$ as $4$. Counting both from $0$, row $5$ is $1, 5, 10, 10, 5, 1$ and $\\binom{5}{2} = 10$.
[Read more](!#pitfalls)]@

To read a value off the triangle, locate it by two counts: the row, counted down from the single $1$ at the top, and the position within the row, counted from the left edge. Both counts follow the indices of $\\binom{n}{k}$, so a lookup in the triangle needs no formula at all. For small $n$ this is the quickest way to get a binomial coefficient, and it shows the neighbouring values at the same time.

## What the Triangle Encodes

The symmetry identity $\\binom{n}{k} = \\binom{n}{n-k}$ is immediate from the array: each row reads the same forwards and backwards.

The diagonals of the triangle hold familiar sequences:

• The first diagonal contains the constants $1, 1, 1, \\ldots$
• The second contains the natural numbers $1, 2, 3, 4, \\ldots$
• The third contains the triangular numbers $1, 3, 6, 10, \\ldots$
• The fourth contains the tetrahedral numbers $1, 4, 10, 20, \\ldots$

@academic[fact,aside:true,width:35%:Odd entries draw Sierpiński's triangle
Shade the odd entries and the triangle fills with blank triangles inside blank triangles, the fractal Sierpiński described in 1915. By Lucas' theorem, $\\binom{n}{k}$ is odd exactly when every binary digit $1$ of $k$ is also a $1$ of $n$, so in row $64 = 1000000_2$ only the two end entries are odd.]@

Sums along the shallow diagonals — diagonals that move one step down and one step left at each entry — produce the Fibonacci numbers.

The row sums double at each step, since $\\sum_k \\binom{n}{k} = 2^n$.

Parity follows a pattern of its own. Pascal's rule adds the two entries above, and odd plus even is odd while odd plus odd and even plus even are even, so the odd entries of each row are fixed by those of the row before. Marking only whether each entry is odd or even, row after row, turns the array into a picture in two colours.

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

@academic[formula_callout:The Multinomial Coefficient
$$\\binom{n}{k} = \\binom{n}{k, \\, n-k}.$$]@

## Combinatorial Interpretation

The multinomial coefficient counts the number of distinct arrangements of $n$ items in which $k_1$ are of type 1, $k_2$ are of type 2, and so on through $k_r$ items of type $r$. This is the same count that appears in [permutations with identical items](!/combinatorics/permutations#identical) — the two viewpoints (partitioning into groups versus arranging with repetition of types) refer to the same enumeration.

@academic[pitfall,aside:true,width:35%:Using the multinomial for unnamed groups
Using $\\binom{6}{2, 2, 2} = 90$ for the ways to split $6$ people into $3$ pairs counts each split $3! = 6$ times, once for every way of naming the pairs. The number of pairings is $90 / 6 = 15$.
[Read more](!#pitfalls)]@

In the group reading, each group has its own size and its own name: group $1$ receives $k_1$ items, group $2$ receives $k_2$ items, and so on.

@academic[example:Example
Splitting $6$ people into a team for Monday, a team for Tuesday and a team for Wednesday, two people each, is counted by $\\binom{6}{2, 2, 2} = \\frac{6!}{2!\\,2!\\,2!} = 90$.]@

It is the same number as the arrangements of the letters $A, A, B, B, C, C$: line the people up and write under each one the letter of that person's team.

The multinomial coefficient is also the natural coefficient in the [multinomial theorem](!/combinatorics/binomial-theorem), which expands $(x_1 + x_2 + \\cdots + x_r)^n$.

@academic[punchline:Sharing items among named groups and arranging a word with repeated letters are one count, $\\frac{n!}{k_1! \\, k_2! \\cdots k_r!}$.]@
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
  pitfalls: {
    title: `Common Pitfalls`,
    content: `Four mistakes come up again and again when working with binomial coefficients. Each is marked where it happens in the sections above. Here each is worked through in full, with the wrong and the right working side by side.

**Dropping the k! in the denominator**

The binomial coefficient is computed as the product $n(n-1)\\cdots(n-k+1)$ alone, without dividing by $k!$. That product counts ordered selections, in which the same group picked in a different order is counted again.

Wrong working: the number of ways to choose $2$ of $50$ items is given as $50 \\cdot 49 = 2450$.

Right working: $\\binom{50}{2} = \\frac{50!}{2!\\,48!} = \\frac{50 \\cdot 49}{2!} = \\frac{2450}{2} = 1225$.

Why it happens: after the factorials cancel, the product on top looks like the whole computation, and the small $k!$ underneath is easy to forget. The same product without the division is the correct count of [permutations](!/combinatorics/permutations), so it looks familiar.

How to check: try a case small enough to list. The pairs from $\\{1, 2, 3\\}$ are $\\{1, 2\\}$, $\\{1, 3\\}$ and $\\{2, 3\\}$: three of them, while $3 \\cdot 2 = 6$. A product without $k!$ is always $k!$ times too large.

**Taking the entry from the last row of the sum**

The hockey stick sum $\\sum_{i=k}^{n} \\binom{i}{k}$ is written as a coefficient from row $n$, where the sum stops, instead of from the row below it.

Wrong working: $\\binom{2}{2} + \\binom{3}{2} + \\binom{4}{2} + \\binom{5}{2} = \\binom{5}{3} = 10$.

Right working: the identity gives $\\binom{n+1}{k+1}$ with $n = 5$ and $k = 2$, so the sum is $\\binom{6}{3} = 20$. Adding directly confirms it: $1 + 3 + 6 + 10 = 20$.

Why it happens: the upper limit of the sum is $n$, and that $n$ is copied into the answer without the shift. In the triangle, the total sits one row below the last term of the diagonal, a step that is easy to miss.

How to check: add the first two terms by hand. $\\binom{2}{2} + \\binom{3}{2} = 1 + 3 = 4 = \\binom{4}{3}$, while the last row of that sum gives $\\binom{3}{3} = 1$.

**Counting rows and positions from 1**

Pascal's triangle is read with the top row as row $1$ and the left edge as position $1$. The triangle is indexed from $0$ in both directions, so this lands one row above and one position to the left of the intended entry.

Wrong working: for $\\binom{5}{2}$, the fifth row from the top is $1, 4, 6, 4, 1$, its second number is $4$, and $\\binom{5}{2} = 4$ is reported.

Right working: the top row is row $0$, so row $5$ is $1, 5, 10, 10, 5, 1$. Its positions are $k = 0, 1, \\ldots, 5$, and position $2$ is the third number: $\\binom{5}{2} = 10$.

Why it happens: everyday counting starts at $1$, and the triangle carries no labels. The count from $0$ comes from the left edge $\\binom{n}{0} = 1$ and the single entry $\\binom{0}{0} = 1$ at the top.

How to check: row $n$ has $n + 1$ entries, and its second entry is $\\binom{n}{1} = n$. Row $5$ must start $1, 5$; a row that starts $1, 4$ is row $4$.

**Using the multinomial for unnamed groups**

The multinomial coefficient is used to split items into groups of equal size that have no names. The coefficient counts splits into named groups, so each split into unnamed groups is counted once for every way of naming them.

Wrong working: the number of ways to pair up $6$ people is given as $\\binom{6}{2, 2, 2} = \\frac{720}{8} = 90$.

Right working: the $90$ counts splits into a first, a second and a third pair. Any one pairing can be labelled in $3! = 6$ ways, so the number of pairings is $\\frac{90}{6} = 15$.

Why it happens: the formula has a slot for each group size, and nothing in it asks whether the groups have names. When the sizes are all different, the sizes themselves tell the groups apart and no division is needed, which makes the equal-size case easy to overlook.

How to check: count directly. Person $1$ has $5$ possible partners, then the first person left over has $3$, and the last two form the final pair: $5 \\cdot 3 \\cdot 1 = 15$.`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
  faq: {
    title: `Binomial Coefficient FAQ`,
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
    question: "How do you read the notation n choose k?",
    answer: "As the number of ways to select k items from n when order does not matter. The stacked pair in brackets carries no fraction bar, despite looking like one, and is spoken as n choose k rather than n over k. Writing it as a fraction is a frequent transcription error.",
    sectionId: "notation"
  },
  obj2: {
    question: "Why does choosing k items equal choosing n minus k?",
    answer: "Because selecting which items to take is the same decision as selecting which to leave behind. Every choice of k determines a unique choice of the remaining items, so the two counts match exactly. This symmetry halves the work when computing values near the middle of a row of Pascal's triangle.",
    sectionId: "2"
  },
  obj3: {
    question: "What is Pascal's rule?",
    answer: "It says each binomial coefficient is the sum of the two directly above it. The reason is a case split: either a particular item is included in the selection or it is not, and counting both cases separately gives the two terms. This rule is what builds Pascal's triangle row by row.",
    sectionId: "3"
  },
  obj4: {
    question: "Why is zero factorial equal to one?",
    answer: "Because there is exactly one way to arrange nothing: the empty arrangement. Defining it as one also keeps the formulas consistent, since choosing all n items or choosing none should both give a count of one, and only this convention makes the binomial coefficient formula produce that.",
    sectionId: "1"
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

}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const bcGeneral = {
    kind: 'polynomial', k: 2, xRange: [-1.5, 4.5], yRange: [-1, 8],
    svgTitle: 'C(x, 2) as a curve through the counts C(n, 2)',
    curveLabel: { text: 'C(x, 2) = x(x \u2212 1)/2', x: 3.1, y: 7.4 },
    labelDy: { 2: -12 },
    extra: [{ x: -1, label: 'x = \u22121: value 1' }, { x: 2.5, label: 'x = 5/2: value 15/8' }],
  };

  const conceptIntroFigures = {
    identity: pascalTriangleDiagrams.identity,
    bothTable: ciBothTable,
    splitTable: ciSplitTable,
  };

  const demoUnits = {
    symmetry: demoUnitFrame({
      svg: pascalTriangleDiagrams.symmetry,
      caption: 'C(7,2) = C(7,5) = 21',
      text: 'The two highlighted entries sit at mirrored positions in the same row and hold the same value, which is the identity C(n,k) = C(n,n&#8722;k) drawn rather than proved. Choosing which 2 of 7 items to take is the same act as choosing which 5 to leave, and the array makes that restatement visible as a reflection. Move the focus along a row and watch its mirror move with it on the',
      href: '/combinatorics/visual-tools/pascal-triangle',
      linkText: 'Pascal&#8217;s triangle visualizer',
    }),
    generalizedC2: demoUnitFrame({
      svg: renderBinomialCurve(bcGeneral),
      caption: 'One polynomial through the counts',
      text: 'For k = 2 the descending-product form gives C(x, 2) = x(x &#8722; 1)/2, a parabola in x. At x = 0, 1, 2, 3, 4 it passes through 0, 0, 1, 3, 6 &#8212; the number of ways to choose 2 items from x. Between and beyond those points the same formula still returns a value: 15/8 at x = 5/2, and 1 at x = &#8722;1. Those values count nothing; they are what the algebraic definition adds, and what Newton&#8217;s generalized binomial theorem uses.',
    }),
  };

   return {
      props:{
    demoUnits,
    conceptIntroFigures,
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

export default function BinomialCoefficientPage({seoData, sectionsContent, introContent, obj2Table, obj3Table, capstoneTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template F (collapse).
  const conceptIntro = {
    beats: [
      {
        id: 'triangle',
        lead: `One account is a triangle of numbers built by adding.`,
        content: `Start with $1$ at the top. Each row begins and ends with $1$, and every number inside is the sum of the two just above it. Row $4$ reads $1, 4, 6, 4, 1$, and its middle entry $6$ comes from $3 + 3$ in row $3$. Nothing about choosing or counting is involved — only adding.`,
        visual: ciSvg('identity'),
        caption: `The highlighted cell is row $4$, entry $2$, holding $6$; the two cells feeding it are $3$ and $3$. The same state is on the [Pascal's triangle explorer](!/combinatorics/visual-tools/pascal-triangle).`,
      },
      {
        id: 'second',
        lead: `The other account is a count: how many ways to choose k items from n.`,
        content: `Take $4$ items, numbered $1$ to $4$, and ask how many different pairs can be picked when order does not matter — the [combinations](!/combinatorics/combinations) of $2$ from $4$. This is a question about groups of objects, with no triangle and no adding in sight.`,
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Both accounts give the same numbers.`,
        content: [
          `Put the triangle's entry and the actual list of pairs side by side for a few rows.`,
          ciTable('bothTable'),
          `Row by row the two columns agree: $1$, $3$, $6$. Listing the pairs of $\\{1, 2, 3, 4\\}$ gives exactly six, the number the triangle produced by adding $3 + 3$.`,
        ],
      },
      {
        id: 'agree',
        lead: `They had to agree, because counting pairs splits the same way the triangle adds.`,
        content: [
          `Sort the pairs by whether they contain the last item, $4$.`,
          ciTable('splitTable'),
          `Pairs with $4$ need one more item from the other three: $3$ ways. Pairs without $4$ are pairs from three items: $3$ ways. That is the triangle's rule — an entry is the sum of the two above it — read as a statement about choosing. The two accounts were never separate: the triangle is the table of these counts.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `For non-negative integers $n$ and $k$ with $0 \\le k \\le n$, the [binomial coefficient](!/combinatorics/definitions#binomial_coefficient) $\\binom{n}{k}$ is the number that both accounts describe — entry $k$ of row $n$, the number of ways to choose $k$ of $n$ items — and it equals`,
        formula: `@academic[formula_callout:Binomial Coefficient
$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$
/combinatorics/formulas#binomial_coefficient]@`,
        footer: `@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@`,
      },
      {
        id: 'kind',
        lead: `A binomial coefficient is a whole number, and its formula extends to a polynomial.`,
        content: [
          `For whole-number $n$ and $k$ it is a count, so always a non-negative integer. Boundary cases follow directly: $\\binom{n}{0} = \\binom{n}{n} = 1$ for every $n \\ge 0$, and $\\binom{n}{k} = 0$ whenever $k > n$.`,
          `The formula itself does not need $n$ to be a whole number:`,
          `@academic[formula_callout:Generalized Binomial Coefficient
$$\\binom{x}{k} = \\frac{x(x-1)(x-2) \\cdots (x-k+1)}{k!}, \\quad k \\in \\mathbb{Z}_{\\ge 0}, \\; x \\in \\mathbb{R} \\text{ (or } \\mathbb{C}\\text{)}.$$
/combinatorics/formulas#generalized_binomial_coefficient]@`,
          `@academic[formulas_link:Browse all combinatorics formulas
/combinatorics/formulas]@`,
          `Here $x$ can be any real or complex number and $k$ remains a non-negative integer. The numerator is a polynomial of degree $k$ in $x$, so $\\binom{x}{k}$ is itself a polynomial in $x$. This is the form that appears in Newton's generalized binomial theorem, where the upper index is no longer required to be a non-negative integer.`,
          <div key={'unit-generalizedC2'} dangerouslySetInnerHTML={{ __html: demoUnits.generalizedC2 }} />,
          `For any k the curve is a polynomial of degree k, and it vanishes at x = 0, 1, ..., k - 1: fewer than k items leave no way to choose k.`,
        ],
      },
      {
        id: 'caveat',
        lead: `Reach for the triangle, the count or the formula depending on the job.`,
        content: [
          `The triangle is quickest for small $n$ and makes identities visible — symmetry, row sums, the adding rule. The count is what gives a binomial coefficient its meaning in a problem. The factorial formula is the one to compute with once $n$ is large: no one builds row $50$ by hand, but $\\binom{50}{2} = \\frac{50 \\cdot 49}{2} = 1225$ takes a line.`,
          `@academic[pitfall,aside:true,width:35%:Dropping the k! in the denominator
Computing $\\binom{50}{2}$ as $50 \\cdot 49 = 2450$ counts ordered picks, so every pair is counted twice. Dividing by $2! = 2$ gives $\\binom{50}{2} = 1225$.
[Read more](!#pitfalls)]@`,
          `The factorial formula cancels down to a short product before any large factorial is computed: $\\frac{n!}{k!\\,(n-k)!} = \\frac{n(n-1)\\cdots(n-k+1)}{k!}$, with $k$ factors on top. The top counts the ways to pick $k$ items one after another, as a first, a second and so on. The bottom counts the orders in which the same $k$ items can be picked, which is why it appears whenever order does not matter.`,
          `To evaluate the factorials in this formula for specific values, use the [factorial calculator](!/calculators/factorial-calculator).`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers the notation, the identities that connect binomial coefficients, Pascal's triangle in detail, and the multinomial coefficient; the [binomial theorem](!/combinatorics/binomial-theorem) page shows the same numbers as the coefficients of $(a + b)^n$.`,
      },
    ],
  }

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
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
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
          `@academic[punchline:A binomial identity is usually a statement about subsets, and counting those subsets two ways is the shortest proof.]@`,
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
                  <div key={'unit-symmetry'} dangerouslySetInnerHTML={{ __html: demoUnits.symmetry }} />,
          `The diagonals and the shallow-diagonal sums above are read off the same array, so each one is another identity that the arrangement makes obvious.`,
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
        id:'pitfalls',
        title:sectionsContent.pitfalls.title,
        link:sectionsContent.pitfalls.link,
        content:[
          sectionsContent.pitfalls.content,
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