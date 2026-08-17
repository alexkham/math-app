
// // tables-optimized: v4 | 2026-05-18 | 3 tables (obj2 aggregation, obj7 comparison, obj8 summary capstone)
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import '../../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import { tableHeaders } from '@/app/styles/theme'


// export async function getStaticProps(){

//  const keyWords = [
//   "cofactors",
//   "minors determinant",
//   "Laplace expansion",
//   "cofactor expansion",
//   "adjugate matrix",
//   "cofactor matrix",
//   "determinant expansion",
//   "signed minor",
//   "checkerboard sign pattern",
//   "classical adjoint",
//   "expand along row",
//   "expand along column",
//   "adjugate inverse formula",
//   "matrix minor"
// ]

// const linkStyle = 'color: inherit; text-decoration: underline;'

// // ---------- TABLES ----------

// // obj2 — aggregation: minors and cofactors for the running 3×3 example,
// // with the sign factor (-1)^(i+j) made explicit so the contrast is scannable.
// const obj2Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation} text-align: center;">Position (i, j)</th>
//       <th style="${tableHeaders.aggregation} text-align: center;">Minor M<sub>ij</sub></th>
//       <th style="${tableHeaders.aggregation} text-align: center;">Sign (−1)<sup>i+j</sup></th>
//       <th style="${tableHeaders.aggregation} text-align: center;">Cofactor C<sub>ij</sub></th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(1, 1)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">20</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">+</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">20</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(1, 2)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">8</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">−</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−8</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(1, 3)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−12</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">+</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−12</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(2, 1)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">29</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">−</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−29</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(2, 2)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">8</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">+</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">8</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(2, 3)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−18</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">−</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">18</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(3, 1)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−13</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">+</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−13</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(3, 2)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−4</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">−</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">(3, 3)</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">6</td>
//       <td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold;">+</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">6</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj7 — comparison/data: cofactor expansion vs row reduction by matrix size
// const obj7Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison} text-align: center;">Matrix size n</th>
//       <th style="${tableHeaders.comparison} text-align: center;">Cofactor expansion ≈ n!</th>
//       <th style="${tableHeaders.comparison} text-align: center;">Row reduction ≈ (2/3)n³</th>
//       <th style="${tableHeaders.comparison} text-align: center;">Ratio</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">24</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 43</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">cofactor faster</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">5</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">120</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 83</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 1.4×</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">10</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 3.6 million</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 670</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 5400×</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">20</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">≈ 2.4 × 10<sup>18</sup></td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">≈ 5,300</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">≈ 5 × 10<sup>14</sup>×</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj8 — summary capstone: the minor → cofactor → cofactor matrix → adjugate chain
// const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Object</th>
//       <th style="${tableHeaders.summary}">Definition</th>
//       <th style="${tableHeaders.summary}">Shape</th>
//       <th style="${tableHeaders.summary}">Role in the chain</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Minor M<sub>ij</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">determinant of the (n−1) × (n−1) submatrix left after deleting row i and column j</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a number</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unsigned building block</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cofactor C<sub>ij</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">C<sub>ij</sub> = (−1)<sup>i+j</sup> M<sub>ij</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a number</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">signed minor; coefficient in the Laplace expansion</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Laplace expansion</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(A) = Σ<sub>j</sub> a<sub>ij</sub> C<sub>ij</sub> (any fixed row i) = Σ<sub>i</sub> a<sub>ij</sub> C<sub>ij</sub> (any fixed column j)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a number</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">how cofactors compute det(A)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cofactor matrix cof(A)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">matrix whose (i, j) entry is C<sub>ij</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n × n matrix</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">collects every cofactor in one matrix</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Adjugate adj(A)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">adj(A) = cof(A)<sup>T</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n × n matrix</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">satisfies A · adj(A) = det(A) · I</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Inverse formula</td>
//       <td style="padding: 12px 15px; color: #34495e;">A<sup>−1</sup> = adj(A) / det(A)</td>
//       <td style="padding: 12px 15px; color: #34495e;">n × n matrix</td>
//       <td style="padding: 12px 15px; color: #34495e;">valid when det(A) ≠ 0; end of the chain</td>
//     </tr>
//   </tbody>
// </table>
// `


// // const sectionsContent = {
// //   obj1: {
// //     title: `Minors`,
// //     content: `Given an $n \\times n$ matrix $A$, the $(i,j)$ minor $M_{ij}$ is the determinant of the $(n-1) \\times (n-1)$ submatrix that remains after removing row $i$ and column $j$. The minor is itself a determinant — a number, not a matrix.

// // For a $3 \\times 3$ matrix

// // $$A = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix}$$

// // there are nine minors, one for each entry. Deleting row $1$ and column $1$ leaves $\\begin{pmatrix} 3 & -2 \\\\ 1 & 6 \\end{pmatrix}$, so $M_{11} = 3 \\cdot 6 - (-2) \\cdot 1 = 20$. Deleting row $1$ and column $2$ leaves $\\begin{pmatrix} 0 & -2 \\\\ 4 & 6 \\end{pmatrix}$, so $M_{12} = 0 \\cdot 6 - (-2) \\cdot 4 = 8$. Deleting row $1$ and column $3$ leaves $\\begin{pmatrix} 0 & 3 \\\\ 4 & 1 \\end{pmatrix}$, so $M_{13} = 0 \\cdot 1 - 3 \\cdot 4 = -12$.

// // Continuing this way produces all nine values:

// // $$M_{21} = 5 \\cdot 6 - 1 \\cdot 1 = 29, \\quad M_{22} = 2 \\cdot 6 - 1 \\cdot 4 = 8, \\quad M_{23} = 2 \\cdot 1 - 5 \\cdot 4 = -18$$

// // $$M_{31} = 5 \\cdot (-2) - 1 \\cdot 3 = -13, \\quad M_{32} = 2 \\cdot (-2) - 1 \\cdot 0 = -4, \\quad M_{33} = 2 \\cdot 3 - 5 \\cdot 0 = 6$$

// // For a $4 \\times 4$ matrix, each minor is a $3 \\times 3$ determinant. For a $5 \\times 5$ matrix, each minor is $4 \\times 4$. The recursive chain continues until reaching $1 \\times 1$ sub-determinants, where the minor is simply the lone entry.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `Cofactors and the Sign Pattern`,
// //     content: `The cofactor $C_{ij}$ attaches a prescribed sign to the minor:

// // $$C_{ij} = (-1)^{i+j} M_{ij}$$

// // The exponent $i + j$ determines whether the sign is positive or negative. When $i + j$ is even, the cofactor equals the minor; when $i + j$ is odd, the cofactor is the negative of the minor. This produces a checkerboard of signs across the matrix:

// // $$\\begin{pmatrix} + & - & + & - \\\\ - & + & - & + \\\\ + & - & + & - \\\\ - & + & - & + \\end{pmatrix}$$

// // The pattern always starts with $+$ at position $(1,1)$ and alternates from there. The sign depends entirely on the position — the actual entries of the matrix play no role in determining it.

// // Using the $3 \\times 3$ matrix from the previous section, the cofactors are:

// // $$C_{11} = (+1)(20) = 20, \\quad C_{12} = (-1)(8) = -8, \\quad C_{13} = (+1)(-12) = -12$$

// // $$C_{21} = (-1)(29) = -29, \\quad C_{22} = (+1)(8) = 8, \\quad C_{23} = (-1)(-18) = 18$$

// // $$C_{31} = (+1)(-13) = -13, \\quad C_{32} = (-1)(-4) = 4, \\quad C_{33} = (+1)(6) = 6$$

// // Comparing cofactors to minors, entries at even-sum positions are unchanged while entries at odd-sum positions flip sign.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `Laplace Expansion Along a Row`,
// //     content: `The determinant of $A$ can be computed by selecting any row $i$ and summing the products of each entry in that row with its cofactor:

// // $$\\det(A) = \\sum_{j=1}^{n} a_{ij} \\, C_{ij} = \\sum_{j=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$$

// // The remarkable fact is that every row produces the same number. Expanding along row $1$, row $2$, or row $n$ all yield the same determinant. This is not obvious from the formula itself — the proof relies on the algebraic [properties](!/linear-algebra/determinants/properties) of the determinant or on the permutation-based definition.

// // ## Worked Example: 4×4 Matrix

// // $$A = \\begin{pmatrix} 1 & 3 & 0 & 2 \\\\ -1 & 0 & 2 & 1 \\\\ 0 & 4 & -1 & 3 \\\\ 2 & 1 & 0 & -2 \\end{pmatrix}$$

// // Expanding along row $1$:

// // $$\\det(A) = 1 \\cdot C_{11} + 3 \\cdot C_{12} + 0 \\cdot C_{13} + 2 \\cdot C_{14}$$

// // The zero entry at position $(1,3)$ eliminates one $3 \\times 3$ determinant entirely. The three remaining cofactors require expanding the sub-determinants:

// // $$M_{11} = \\det\\begin{pmatrix} 0 & 2 & 1 \\\\ 4 & -1 & 3 \\\\ 1 & 0 & -2 \\end{pmatrix} = 0(2 - 0) - 2(-8 - 3) + 1(0 + 1) = 0 + 22 + 1 = 23$$

// // $$M_{12} = \\det\\begin{pmatrix} -1 & 2 & 1 \\\\ 0 & -1 & 3 \\\\ 2 & 0 & -2 \\end{pmatrix} = -1(2 - 0) - 2(0 - 6) + 1(0 + 2) = -2 + 12 + 2 = 12$$

// // $$M_{14} = \\det\\begin{pmatrix} -1 & 0 & 2 \\\\ 0 & 4 & -1 \\\\ 2 & 1 & 0 \\end{pmatrix} = -1(0 + 1) - 0(0 + 2) + 2(0 - 8) = -1 + 0 - 16 = -17$$

// // Applying the signs: $C_{11} = +23$, $C_{12} = -12$, $C_{14} = +(-17) = -17$. The determinant is

// // $$\\det(A) = 1(23) + 3(-12) + 0 + 2(-17) = 23 - 36 - 34 = -47$$

// // ## Verification via a Different Row

// // Expanding the same matrix along row $3$ (which has a zero in the first position) would produce the same value $-47$, confirming that the choice of row is purely a matter of computational convenience.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Laplace Expansion Along a Column`,
// //     content: `The expansion formula works identically along columns. Fixing column $j$:

// // $$\\det(A) = \\sum_{i=1}^{n} a_{ij} \\, C_{ij} = \\sum_{i=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$$

// // That column expansion gives the same result as row expansion follows from [transpose invariance](!/linear-algebra/determinants/properties): since $\\det(A^T) = \\det(A)$, expanding $A$ along column $j$ is the same as expanding $A^T$ along row $j$.

// // The practical consequence is that before starting any cofactor expansion, the first step should be to scan the matrix for the row or column containing the most zeros. Each zero entry eliminates an entire sub-determinant from the sum.

// // ## Worked Example

// // $$B = \\begin{pmatrix} 3 & 0 & 0 \\\\ 1 & -2 & 5 \\\\ 4 & 0 & 7 \\end{pmatrix}$$

// // Column $2$ has two zeros. Expanding along column $2$:

// // $$\\det(B) = 0 \\cdot C_{12} + (-2) \\cdot C_{22} + 0 \\cdot C_{32} = (-2) \\cdot C_{22}$$

// // The minor $M_{22}$ is the $2 \\times 2$ determinant from deleting row $2$ and column $2$:

// // $$M_{22} = \\det\\begin{pmatrix} 3 & 0 \\\\ 4 & 7 \\end{pmatrix} = 21$$

// // Since $C_{22} = (-1)^{2+2}(21) = 21$, we get $\\det(B) = (-2)(21) = -42$.

// // An expansion along row $1$ or column $1$ would require more terms but produce the same result. The column $2$ expansion reduced the work to a single $2 \\times 2$ determinant.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `The Cofactor Matrix`,
// //     content: `The cofactor matrix of $A$, sometimes written $\\text{cof}(A)$, is the $n \\times n$ matrix whose $(i,j)$ entry is the cofactor $C_{ij}$. It is not the matrix of minors — the sign factors $(-1)^{i+j}$ are already incorporated.

// // For the $3 \\times 3$ matrix used earlier,

// // $$A = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix}$$

// // the cofactor matrix is

// // $$\\text{cof}(A) = \\begin{pmatrix} 20 & -8 & -12 \\\\ -29 & 8 & 18 \\\\ -13 & 4 & 6 \\end{pmatrix}$$

// // where each entry was computed in the earlier sections. As a check, the Laplace expansion along row $1$ should give $\\det(A) = 2(20) + 5(-8) + 1(-12) = 40 - 40 - 12 = -12$. Along row $2$: $0(-29) + 3(8) + (-2)(18) = 0 + 24 - 36 = -12$. Along row $3$: $4(-13) + 1(4) + 6(6) = -52 + 4 + 36 = -12$. All three rows agree.

// // The cofactor matrix encodes every possible cofactor expansion simultaneously — each row of $\\text{cof}(A)$ contains the cofactors needed for expansion along the corresponding row of $A$, and each column contains those needed for column expansion.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `The Adjugate`,
// //     content: `The adjugate (also called the classical adjoint) of $A$ is the transpose of the cofactor matrix:

// // $$\\operatorname{adj}(A) = \\text{cof}(A)^T$$

// // For the running example:

// // $$\\operatorname{adj}(A) = \\begin{pmatrix} 20 & -29 & -13 \\\\ -8 & 8 & 4 \\\\ -12 & 18 & 6 \\end{pmatrix}$$

// // ## The Fundamental Identity

// // The adjugate satisfies

// // $$A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I$$

// // To see why, consider the $(i,k)$ entry of the product $A \\cdot \\operatorname{adj}(A)$. This is $\\sum_{j=1}^{n} a_{ij} \\cdot [\\operatorname{adj}(A)]_{jk} = \\sum_{j=1}^{n} a_{ij} \\, C_{kj}$. When $i = k$, this sum is exactly the Laplace expansion of $\\det(A)$ along row $i$, so the diagonal entries equal $\\det(A)$. When $i \\neq k$, the sum pairs the entries of row $i$ with the cofactors of a different row $k$. This is equivalent to computing the determinant of a matrix with two identical rows (row $i$ appears in both its own position and row $k$'s), which is always zero. So the off-diagonal entries vanish.

// // ## Verification

// // With $\\det(A) = -12$:

// // $$A \\cdot \\operatorname{adj}(A) = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix} \\begin{pmatrix} 20 & -29 & -13 \\\\ -8 & 8 & 4 \\\\ -12 & 18 & 6 \\end{pmatrix} = \\begin{pmatrix} -12 & 0 & 0 \\\\ 0 & -12 & 0 \\\\ 0 & 0 & -12 \\end{pmatrix} = -12 \\, I$$

// // This identity is the foundation of the [adjugate inverse formula](!/linear-algebra/determinants/applications): dividing both sides by $\\det(A)$ gives $A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)$, valid whenever $\\det(A) \\neq 0$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Computational Cost`,
// //     content: `Cofactor expansion is a recursive algorithm. Each $n \\times n$ determinant spawns $n$ sub-problems of size $(n-1) \\times (n-1)$. Without any zero entries to prune terms, the total number of multiplications satisfies the recurrence $T(n) = n \\cdot T(n-1)$, which gives $T(n) = O(n!)$.

// // To put this in concrete terms: a $10 \\times 10$ determinant via cofactor expansion requires roughly $10! \\approx 3.6$ million multiplications. A $20 \\times 20$ determinant would require over $2 \\times 10^{18}$ — well beyond the reach of any computer running a naive recursive implementation. Row reduction, by contrast, computes the same determinant in roughly $\\frac{2}{3}n^3$ operations: about $670$ for $n = 10$ and about $5300$ for $n = 20$.

// // This cost difference does not make cofactor expansion useless. For matrices up to $4 \\times 4$, the expansion is fast enough to do by hand and gives the exact symbolic result. For matrices with many zero entries, the effective cost drops dramatically because each zero eliminates an entire recursive branch. In symbolic computation — where entries are polynomials or formal expressions rather than numbers — cofactor expansion preserves structure that row reduction would obscure.

// // The Laplace expansion is best understood as a theoretical instrument. It defines what the determinant is, establishes its algebraic properties, and produces the adjugate and the cofactor structure. For numerical computation on anything larger than a small matrix, the [row-reduction approach](!/linear-algebra/determinants/properties) is the practical choice.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Summary: The Cofactor Construction Chain`,
// //     content: `The objects introduced above — minor, cofactor, cofactor matrix, adjugate — form a single construction chain, each built from the previous one and culminating in the inverse formula. The table below collects each link in the chain alongside its definition, its shape (number or matrix), and the role it plays in connecting one stage to the next.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }



// // formulas-injected: v1 | 2026-06-16 | 7 callouts (obj1 minor_definition prose, obj2 cofactor_definition direct, obj3 laplace_row_expansion direct, obj4 laplace_column_expansion direct, obj5 cofactor_matrix_definition prose, obj6 adjugate_definition direct + adjugate_identity direct)

// const sectionsContent = {
//   obj1: {
//     title: `Minors`,
//     content: `Given an $n \\times n$ matrix $A$, the $(i,j)$ minor $M_{ij}$ is the determinant of the $(n-1) \\times (n-1)$ submatrix that remains after removing row $i$ and column $j$. The minor is itself a determinant — a number, not a matrix.

// Formally:

// @academic[formula_callout:minor_definition|Minor Definition|$$M_{ij} = \\det\\!\\left(A^{(i,j)}\\right)$$]@
// @academic[formulas_link:/linear-algebra/formulas#minor_definition]@

// where $A^{(i,j)}$ denotes the submatrix of $A$ with row $i$ and column $j$ removed.

// For a $3 \\times 3$ matrix

// $$A = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix}$$

// there are nine minors, one for each entry. Deleting row $1$ and column $1$ leaves $\\begin{pmatrix} 3 & -2 \\\\ 1 & 6 \\end{pmatrix}$, so $M_{11} = 3 \\cdot 6 - (-2) \\cdot 1 = 20$. Deleting row $1$ and column $2$ leaves $\\begin{pmatrix} 0 & -2 \\\\ 4 & 6 \\end{pmatrix}$, so $M_{12} = 0 \\cdot 6 - (-2) \\cdot 4 = 8$. Deleting row $1$ and column $3$ leaves $\\begin{pmatrix} 0 & 3 \\\\ 4 & 1 \\end{pmatrix}$, so $M_{13} = 0 \\cdot 1 - 3 \\cdot 4 = -12$.

// Continuing this way produces all nine values:

// $$M_{21} = 5 \\cdot 6 - 1 \\cdot 1 = 29, \\quad M_{22} = 2 \\cdot 6 - 1 \\cdot 4 = 8, \\quad M_{23} = 2 \\cdot 1 - 5 \\cdot 4 = -18$$

// $$M_{31} = 5 \\cdot (-2) - 1 \\cdot 3 = -13, \\quad M_{32} = 2 \\cdot (-2) - 1 \\cdot 0 = -4, \\quad M_{33} = 2 \\cdot 3 - 5 \\cdot 0 = 6$$

// For a $4 \\times 4$ matrix, each minor is a $3 \\times 3$ determinant. For a $5 \\times 5$ matrix, each minor is $4 \\times 4$. The recursive chain continues until reaching $1 \\times 1$ sub-determinants, where the minor is simply the lone entry.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Cofactors and the Sign Pattern`,
//     content: `The cofactor $C_{ij}$ attaches a prescribed sign to the minor:

// @academic[formula_callout:cofactor_definition|Cofactor Definition|$$C_{ij} = (-1)^{i+j} \\, M_{ij}$$]@
// @academic[formulas_link:/linear-algebra/formulas#cofactor_definition]@

// The exponent $i + j$ determines whether the sign is positive or negative. When $i + j$ is even, the cofactor equals the minor; when $i + j$ is odd, the cofactor is the negative of the minor. This produces a checkerboard of signs across the matrix:

// $$\\begin{pmatrix} + & - & + & - \\\\ - & + & - & + \\\\ + & - & + & - \\\\ - & + & - & + \\end{pmatrix}$$

// The pattern always starts with $+$ at position $(1,1)$ and alternates from there. The sign depends entirely on the position — the actual entries of the matrix play no role in determining it.

// Using the $3 \\times 3$ matrix from the previous section, the cofactors are:

// $$C_{11} = (+1)(20) = 20, \\quad C_{12} = (-1)(8) = -8, \\quad C_{13} = (+1)(-12) = -12$$

// $$C_{21} = (-1)(29) = -29, \\quad C_{22} = (+1)(8) = 8, \\quad C_{23} = (-1)(-18) = 18$$

// $$C_{31} = (+1)(-13) = -13, \\quad C_{32} = (-1)(-4) = 4, \\quad C_{33} = (+1)(6) = 6$$

// Comparing cofactors to minors, entries at even-sum positions are unchanged while entries at odd-sum positions flip sign.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Laplace Expansion Along a Row`,
//     content: `The determinant of $A$ can be computed by selecting any row $i$ and summing the products of each entry in that row with its cofactor:

// @academic[formula_callout:laplace_row_expansion|Laplace Row Expansion|$$\\det(A) = \\sum_{j=1}^{n} a_{ij} \\, C_{ij} \\qquad \\text{for any fixed row } i$$]@
// @academic[formulas_link:/linear-algebra/formulas#laplace_row_expansion]@

// Expanded with the explicit sign factor: $\\det(A) = \\sum_{j=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$.

// The remarkable fact is that every row produces the same number. Expanding along row $1$, row $2$, or row $n$ all yield the same determinant. This is not obvious from the formula itself — the proof relies on the algebraic [properties](!/linear-algebra/determinants/properties) of the determinant or on the permutation-based definition.

// ## Worked Example: 4×4 Matrix

// $$A = \\begin{pmatrix} 1 & 3 & 0 & 2 \\\\ -1 & 0 & 2 & 1 \\\\ 0 & 4 & -1 & 3 \\\\ 2 & 1 & 0 & -2 \\end{pmatrix}$$

// Expanding along row $1$:

// $$\\det(A) = 1 \\cdot C_{11} + 3 \\cdot C_{12} + 0 \\cdot C_{13} + 2 \\cdot C_{14}$$

// The zero entry at position $(1,3)$ eliminates one $3 \\times 3$ determinant entirely. The three remaining cofactors require expanding the sub-determinants:

// $$M_{11} = \\det\\begin{pmatrix} 0 & 2 & 1 \\\\ 4 & -1 & 3 \\\\ 1 & 0 & -2 \\end{pmatrix} = 0(2 - 0) - 2(-8 - 3) + 1(0 + 1) = 0 + 22 + 1 = 23$$

// $$M_{12} = \\det\\begin{pmatrix} -1 & 2 & 1 \\\\ 0 & -1 & 3 \\\\ 2 & 0 & -2 \\end{pmatrix} = -1(2 - 0) - 2(0 - 6) + 1(0 + 2) = -2 + 12 + 2 = 12$$

// $$M_{14} = \\det\\begin{pmatrix} -1 & 0 & 2 \\\\ 0 & 4 & -1 \\\\ 2 & 1 & 0 \\end{pmatrix} = -1(0 + 1) - 0(0 + 2) + 2(0 - 8) = -1 + 0 - 16 = -17$$

// Applying the signs: $C_{11} = +23$, $C_{12} = -12$, $C_{14} = +(-17) = -17$. The determinant is

// $$\\det(A) = 1(23) + 3(-12) + 0 + 2(-17) = 23 - 36 - 34 = -47$$

// ## Verification via a Different Row

// Expanding the same matrix along row $3$ (which has a zero in the first position) would produce the same value $-47$, confirming that the choice of row is purely a matter of computational convenience.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Laplace Expansion Along a Column`,
//     content: `The expansion formula works identically along columns. Fixing column $j$:

// @academic[formula_callout:laplace_column_expansion|Laplace Column Expansion|$$\\det(A) = \\sum_{i=1}^{n} a_{ij} \\, C_{ij} \\qquad \\text{for any fixed column } j$$]@
// @academic[formulas_link:/linear-algebra/formulas#laplace_column_expansion]@

// Expanded with the explicit sign factor: $\\det(A) = \\sum_{i=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$.

// That column expansion gives the same result as row expansion follows from [transpose invariance](!/linear-algebra/determinants/properties): since $\\det(A^T) = \\det(A)$, expanding $A$ along column $j$ is the same as expanding $A^T$ along row $j$.

// The practical consequence is that before starting any cofactor expansion, the first step should be to scan the matrix for the row or column containing the most zeros. Each zero entry eliminates an entire sub-determinant from the sum.

// ## Worked Example

// $$B = \\begin{pmatrix} 3 & 0 & 0 \\\\ 1 & -2 & 5 \\\\ 4 & 0 & 7 \\end{pmatrix}$$

// Column $2$ has two zeros. Expanding along column $2$:

// $$\\det(B) = 0 \\cdot C_{12} + (-2) \\cdot C_{22} + 0 \\cdot C_{32} = (-2) \\cdot C_{22}$$

// The minor $M_{22}$ is the $2 \\times 2$ determinant from deleting row $2$ and column $2$:

// $$M_{22} = \\det\\begin{pmatrix} 3 & 0 \\\\ 4 & 7 \\end{pmatrix} = 21$$

// Since $C_{22} = (-1)^{2+2}(21) = 21$, we get $\\det(B) = (-2)(21) = -42$.

// An expansion along row $1$ or column $1$ would require more terms but produce the same result. The column $2$ expansion reduced the work to a single $2 \\times 2$ determinant.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `The Cofactor Matrix`,
//     content: `The cofactor matrix of $A$, sometimes written $\\text{cof}(A)$, is the $n \\times n$ matrix whose $(i,j)$ entry is the cofactor $C_{ij}$:

// @academic[formula_callout:cofactor_matrix_definition|Cofactor Matrix Definition|$$\\operatorname{cof}(A) = \\bigl[C_{ij}\\bigr]_{n \\times n}$$]@
// @academic[formulas_link:/linear-algebra/formulas#cofactor_matrix_definition]@

// It is not the matrix of minors — the sign factors $(-1)^{i+j}$ are already incorporated.

// For the $3 \\times 3$ matrix used earlier,

// $$A = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix}$$

// the cofactor matrix is

// $$\\text{cof}(A) = \\begin{pmatrix} 20 & -8 & -12 \\\\ -29 & 8 & 18 \\\\ -13 & 4 & 6 \\end{pmatrix}$$

// where each entry was computed in the earlier sections. As a check, the Laplace expansion along row $1$ should give $\\det(A) = 2(20) + 5(-8) + 1(-12) = 40 - 40 - 12 = -12$. Along row $2$: $0(-29) + 3(8) + (-2)(18) = 0 + 24 - 36 = -12$. Along row $3$: $4(-13) + 1(4) + 6(6) = -52 + 4 + 36 = -12$. All three rows agree.

// The cofactor matrix encodes every possible cofactor expansion simultaneously — each row of $\\text{cof}(A)$ contains the cofactors needed for expansion along the corresponding row of $A$, and each column contains those needed for column expansion.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `The Adjugate`,
//     content: `The adjugate (also called the classical adjoint) of $A$ is the transpose of the cofactor matrix:

// @academic[formula_callout:adjugate_definition|Adjugate Definition|$$\\operatorname{adj}(A) = \\operatorname{cof}(A)^T$$]@
// @academic[formulas_link:/linear-algebra/formulas#adjugate_definition]@

// For the running example:

// $$\\operatorname{adj}(A) = \\begin{pmatrix} 20 & -29 & -13 \\\\ -8 & 8 & 4 \\\\ -12 & 18 & 6 \\end{pmatrix}$$

// ## The Fundamental Identity

// The adjugate satisfies

// @academic[formula_callout:adjugate_identity|Adjugate Identity|$$A \\cdot \\operatorname{adj}(A) = \\operatorname{adj}(A) \\cdot A = \\det(A) \\, I$$]@
// @academic[formulas_link:/linear-algebra/formulas#adjugate_identity]@

// To see why, consider the $(i,k)$ entry of the product $A \\cdot \\operatorname{adj}(A)$. This is $\\sum_{j=1}^{n} a_{ij} \\cdot [\\operatorname{adj}(A)]_{jk} = \\sum_{j=1}^{n} a_{ij} \\, C_{kj}$. When $i = k$, this sum is exactly the Laplace expansion of $\\det(A)$ along row $i$, so the diagonal entries equal $\\det(A)$. When $i \\neq k$, the sum pairs the entries of row $i$ with the cofactors of a different row $k$. This is equivalent to computing the determinant of a matrix with two identical rows (row $i$ appears in both its own position and row $k$'s), which is always zero. So the off-diagonal entries vanish.

// ## Verification

// With $\\det(A) = -12$:

// $$A \\cdot \\operatorname{adj}(A) = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix} \\begin{pmatrix} 20 & -29 & -13 \\\\ -8 & 8 & 4 \\\\ -12 & 18 & 6 \\end{pmatrix} = \\begin{pmatrix} -12 & 0 & 0 \\\\ 0 & -12 & 0 \\\\ 0 & 0 & -12 \\end{pmatrix} = -12 \\, I$$

// This identity is the foundation of the [adjugate inverse formula](!/linear-algebra/determinants/applications): dividing both sides by $\\det(A)$ gives $A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)$, valid whenever $\\det(A) \\neq 0$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Computational Cost`,
//     content: `Cofactor expansion is a recursive algorithm. Each $n \\times n$ determinant spawns $n$ sub-problems of size $(n-1) \\times (n-1)$. Without any zero entries to prune terms, the total number of multiplications satisfies the recurrence $T(n) = n \\cdot T(n-1)$, which gives $T(n) = O(n!)$.

// To put this in concrete terms: a $10 \\times 10$ determinant via cofactor expansion requires roughly $10! \\approx 3.6$ million multiplications. A $20 \\times 20$ determinant would require over $2 \\times 10^{18}$ — well beyond the reach of any computer running a naive recursive implementation. Row reduction, by contrast, computes the same determinant in roughly $\\frac{2}{3}n^3$ operations: about $670$ for $n = 10$ and about $5300$ for $n = 20$.

// This cost difference does not make cofactor expansion useless. For matrices up to $4 \\times 4$, the expansion is fast enough to do by hand and gives the exact symbolic result. For matrices with many zero entries, the effective cost drops dramatically because each zero eliminates an entire recursive branch. In symbolic computation — where entries are polynomials or formal expressions rather than numbers — cofactor expansion preserves structure that row reduction would obscure.

// The Laplace expansion is best understood as a theoretical instrument. It defines what the determinant is, establishes its algebraic properties, and produces the adjugate and the cofactor structure. For numerical computation on anything larger than a small matrix, the [row-reduction approach](!/linear-algebra/determinants/properties) is the practical choice.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Summary: The Cofactor Construction Chain`,
//     content: `The objects introduced above — minor, cofactor, cofactor matrix, adjugate — form a single construction chain, each built from the previous one and culminating in the inverse formula. The table below collects each link in the chain alongside its definition, its shape (number or matrix), and the role it plays in connecting one stage to the next.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


// const introContent = {
//     id: "intro",
//   title: `Expanding Along Any Row or Column`,
//   content: `The cofactor expansion generalizes the recursive pattern seen in the 3×3 case to matrices of arbitrary size. By systematically pairing each entry with a signed sub-determinant, it reduces an n×n determinant to n determinants of size (n−1)×(n−1), with complete freedom in choosing which row or column drives the expansion.`,
// }


// const faqQuestions = {
//   obj1: {
//     question: "What is a minor of a matrix?",
//     answer: "The (i,j) minor Mᵢⱼ is the determinant of the (n-1)×(n-1) submatrix remaining after deleting row i and column j. It's a number, not a matrix. A 3×3 matrix has nine minors; a 4×4 has sixteen.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What is a cofactor?",
//     answer: "The cofactor Cᵢⱼ = (-1)^(i+j) Mᵢⱼ is the minor with a sign attached. The sign follows a checkerboard pattern: + at (1,1), alternating from there. When i+j is even, cofactor equals minor; when odd, it's negated.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "What is Laplace expansion along a row?",
//     answer: "Laplace expansion computes det(A) by summing each entry in a chosen row times its cofactor: det(A) = Σ aᵢⱼ·Cᵢⱼ. Every row gives the same result. Choose the row with the most zeros to minimize work.",
//     sectionId: "3"
//   },
//   obj4: {
//     question: "Can you expand a determinant along a column?",
//     answer: "Yes. Column expansion works identically: det(A) = Σ aᵢⱼ·Cᵢⱼ summing over rows i for fixed column j. This equals row expansion because det(Aᵀ) = det(A). Always scan for the row or column with the most zeros first.",
//     sectionId: "4"
//   },
//   obj5: {
//     question: "What is the cofactor matrix?",
//     answer: "The cofactor matrix cof(A) has the cofactor Cᵢⱼ at position (i,j). It encodes all possible cofactor expansions: row i of cof(A) contains cofactors for expanding along row i of A. Note: signs are already incorporated.",
//     sectionId: "5"
//   },
//   obj6: {
//     question: "What is the adjugate matrix?",
//     answer: "The adjugate adj(A) = cof(A)ᵀ is the transpose of the cofactor matrix. It satisfies A·adj(A) = det(A)·I. When det(A) ≠ 0, this gives the inverse formula: A⁻¹ = adj(A)/det(A).",
//     sectionId: "6"
//   },
//   obj7: {
//     question: "How expensive is cofactor expansion?",
//     answer: "Cofactor expansion costs O(n!) operations — impractical for n > 10. Row reduction computes the same determinant in O(n³). Cofactor expansion remains useful for small matrices, symbolic computation, and deriving the adjugate formula.",
//     sectionId: "7"
//   }
// }

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Cofactors and Laplace Expansion",
//     "description": "Learn minors, cofactors, and Laplace expansion for determinants. Includes the cofactor matrix, adjugate, inverse formula, worked examples for 3×3 and 4×4 matrices, and computational cost analysis.",
//     "url": "https://www.learnmathclass.com/linear-algebra/determinants/cofactors",
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
//       "name": "Cofactors and Laplace Expansion"
//     },
//     "teaches": [
//       "Computing minors of a matrix",
//       "Cofactors and the checkerboard sign pattern",
//       "Laplace expansion along rows and columns",
//       "The cofactor matrix",
//       "The adjugate and A·adj(A) = det(A)·I",
//       "Adjugate formula for matrix inverse",
//       "Computational complexity of cofactor expansion"
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
//         "name": "Linear Algebra",
//         "item": "https://www.learnmathclass.com/linear-algebra"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Determinants",
//         "item": "https://www.learnmathclass.com/linear-algebra/determinants"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Cofactors and Laplace Expansion",
//         "item": "https://www.learnmathclass.com/linear-algebra/determinants/cofactors"
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
//   props: {
//     sectionsContent,
//     introContent,
//     obj2Table,
//     obj7Table,
//     summaryTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Cofactors: Minors, Laplace Expansion & Adjugate | Learn Math Class",
//       description: "Learn minors, cofactors, and Laplace expansion for determinants. Includes the cofactor matrix, adjugate, inverse formula, worked examples for 3×3 and 4×4 matrices, and computational cost analysis.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/determinants/cofactors",
//       name: "Cofactors and Laplace Expansion"
//     },
//   }
// }
//    }

//    export default function CofactorsPage({
//      seoData,
//      sectionsContent,
//      introContent,
//      obj2Table,
//      obj7Table,
//      summaryTable,
//      faqQuestions,
//      schemas,
//    }) {

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
//           <div
//             key={'obj2-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj2Table }}
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
//  <Head>
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Minors, Cofactors, and the Adjugate</h1>
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
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


// tables-optimized: v4 | 2026-05-18 | 3 tables (obj2 aggregation, obj7 comparison, obj8 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


export async function getStaticProps(){

 const keyWords = [
  "cofactors",
  "minors determinant",
  "Laplace expansion",
  "cofactor expansion",
  "adjugate matrix",
  "cofactor matrix",
  "determinant expansion",
  "signed minor",
  "checkerboard sign pattern",
  "classical adjoint",
  "expand along row",
  "expand along column",
  "adjugate inverse formula",
  "matrix minor"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj2 — aggregation: minors and cofactors for the running 3×3 example,
// with the sign factor (-1)^(i+j) made explicit so the contrast is scannable.
const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Position (i, j)</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Minor M<sub>ij</sub></th>
      <th style="${tableHeaders.aggregation} text-align: center;">Sign (−1)<sup>i+j</sup></th>
      <th style="${tableHeaders.aggregation} text-align: center;">Cofactor C<sub>ij</sub></th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(1, 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">20</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">20</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(1, 2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">8</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−8</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(1, 3)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−12</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−12</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(2, 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">29</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−29</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(2, 2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">8</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">8</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(2, 3)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−18</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">18</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(3, 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−13</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−13</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">(3, 2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">(3, 3)</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">6</td>
      <td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold;">+</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">6</td>
    </tr>
  </tbody>
</table>
`

// obj7 — comparison/data: cofactor expansion vs row reduction by matrix size
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison} text-align: center;">Matrix size n</th>
      <th style="${tableHeaders.comparison} text-align: center;">Cofactor expansion ≈ n!</th>
      <th style="${tableHeaders.comparison} text-align: center;">Row reduction ≈ (2/3)n³</th>
      <th style="${tableHeaders.comparison} text-align: center;">Ratio</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">24</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 43</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">cofactor faster</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">120</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 83</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 1.4×</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">10</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 3.6 million</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 670</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">≈ 5400×</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">20</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">≈ 2.4 × 10<sup>18</sup></td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">≈ 5,300</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">≈ 5 × 10<sup>14</sup>×</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary capstone: the minor → cofactor → cofactor matrix → adjugate chain
// obj8 — one chain: each definition exists to make the next one possible
const cofactorChain = {
  kicker: 'Determinants \u00B7 cofactors',
  title: 'The cofactor construction chain',
  tallyLabel: 'steps',
  intro: 'Six definitions in strict order, each built from the one above it. Read alone they look like six pieces of terminology; read as a chain they are one construction, and the last step is what the first five were for.',
  footnote: 'Nothing in this chain is a good way to compute anything. A minor is a determinant, so each level multiplies the work by $n$ \u2014 which is why [row reduction](!/linear-algebra/linear-systems/gaussian-elimination) computes determinants and factorization computes inverses. The chain earns its place by giving a closed form, not a method.',
  groups: [
    {
      heading: 'Building a number',
      identities: [
        {
          name: 'Minor',
          anchor: '#1',
          formula: '$M_{ij} = \\det(A$ with row $i$, column $j$ deleted$)$',
          condition: 'a number; unsigned',
          note: 'The raw building block, and note it is itself a determinant \u2014 the definition is recursive, which is where the cost comes from. For a $3 \\times 3$ matrix each minor is a $2 \\times 2$ determinant; for a $4 \\times 4$ each is a $3 \\times 3$, and so on down.',
        },
        {
          name: 'Cofactor',
          anchor: '#2',
          formula: '$C_{ij} = (-1)^{i+j} M_{ij}$',
          condition: 'a number; signed',
          strict: true,
          note: 'The minor with a checkerboard sign attached. The sign is not decoration \u2014 it is what makes the expansion below add up to the determinant rather than to nothing in particular, and dropping it is the most common error in the whole construction.',
        },
        {
          name: 'Laplace expansion',
          anchor: '#3',
          formula: '$\\det(A) = \\sum_j a_{ij}C_{ij}$',
          condition: 'any single row or column',
          key: true,
          note: 'Where the cofactors do their work. Any row or column gives the same answer \u2014 a consequence of [transpose invariance](!/linear-algebra/determinants/properties) \u2014 so choose the one with the most zeros, since each zero entry removes an entire minor from the calculation.',
        },
      ],
    },
    {
      heading: 'Building a matrix',
      identities: [
        {
          name: 'Cofactor matrix',
          anchor: '#5',
          formula: '$\\operatorname{cof}(A)_{ij} = C_{ij}$',
          condition: 'an $n \\times n$ matrix',
          note: 'Every cofactor collected in position. On its own it does nothing; it exists to be transposed in the next step, which is the only reason to compute all $n^2$ of them rather than the single row the expansion needs.',
        },
        {
          name: 'Adjugate',
          anchor: '#6',
          formula: '$\\operatorname{adj}(A) = \\operatorname{cof}(A)^{\\mathsf{T}}$',
          condition: '$A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I$',
          key: true,
          note: 'The transpose, and the identity beside it is the whole point of the chain. It holds for **every** square matrix including singular ones \u2014 when $\\det(A) = 0$ it says $A \\cdot \\operatorname{adj}(A) = O$, which is a real statement rather than a failure.',
        },
        {
          name: 'Inverse formula',
          anchor: '#6',
          formula: '$A^{-1} = \\dfrac{1}{\\det A}\\operatorname{adj}(A)$',
          condition: '$\\det(A) \\neq 0$',
          strict: true,
          note: 'Divide the identity above by $\\det(A)$ and the [inverse](!/linear-algebra/matrix/inverse) falls out. This is the end of the chain and its justification \u2014 an explicit formula for every entry of the inverse in terms of the entries of $A$.',
        },
      ],
    },
  ],
}


// const sectionsContent = {
//   obj1: {
//     title: `Minors`,
//     content: `Given an $n \\times n$ matrix $A$, the $(i,j)$ minor $M_{ij}$ is the determinant of the $(n-1) \\times (n-1)$ submatrix that remains after removing row $i$ and column $j$. The minor is itself a determinant — a number, not a matrix.

// For a $3 \\times 3$ matrix

// $$A = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix}$$

// there are nine minors, one for each entry. Deleting row $1$ and column $1$ leaves $\\begin{pmatrix} 3 & -2 \\\\ 1 & 6 \\end{pmatrix}$, so $M_{11} = 3 \\cdot 6 - (-2) \\cdot 1 = 20$. Deleting row $1$ and column $2$ leaves $\\begin{pmatrix} 0 & -2 \\\\ 4 & 6 \\end{pmatrix}$, so $M_{12} = 0 \\cdot 6 - (-2) \\cdot 4 = 8$. Deleting row $1$ and column $3$ leaves $\\begin{pmatrix} 0 & 3 \\\\ 4 & 1 \\end{pmatrix}$, so $M_{13} = 0 \\cdot 1 - 3 \\cdot 4 = -12$.

// Continuing this way produces all nine values:

// $$M_{21} = 5 \\cdot 6 - 1 \\cdot 1 = 29, \\quad M_{22} = 2 \\cdot 6 - 1 \\cdot 4 = 8, \\quad M_{23} = 2 \\cdot 1 - 5 \\cdot 4 = -18$$

// $$M_{31} = 5 \\cdot (-2) - 1 \\cdot 3 = -13, \\quad M_{32} = 2 \\cdot (-2) - 1 \\cdot 0 = -4, \\quad M_{33} = 2 \\cdot 3 - 5 \\cdot 0 = 6$$

// For a $4 \\times 4$ matrix, each minor is a $3 \\times 3$ determinant. For a $5 \\times 5$ matrix, each minor is $4 \\times 4$. The recursive chain continues until reaching $1 \\times 1$ sub-determinants, where the minor is simply the lone entry.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Cofactors and the Sign Pattern`,
//     content: `The cofactor $C_{ij}$ attaches a prescribed sign to the minor:

// $$C_{ij} = (-1)^{i+j} M_{ij}$$

// The exponent $i + j$ determines whether the sign is positive or negative. When $i + j$ is even, the cofactor equals the minor; when $i + j$ is odd, the cofactor is the negative of the minor. This produces a checkerboard of signs across the matrix:

// $$\\begin{pmatrix} + & - & + & - \\\\ - & + & - & + \\\\ + & - & + & - \\\\ - & + & - & + \\end{pmatrix}$$

// The pattern always starts with $+$ at position $(1,1)$ and alternates from there. The sign depends entirely on the position — the actual entries of the matrix play no role in determining it.

// Using the $3 \\times 3$ matrix from the previous section, the cofactors are:

// $$C_{11} = (+1)(20) = 20, \\quad C_{12} = (-1)(8) = -8, \\quad C_{13} = (+1)(-12) = -12$$

// $$C_{21} = (-1)(29) = -29, \\quad C_{22} = (+1)(8) = 8, \\quad C_{23} = (-1)(-18) = 18$$

// $$C_{31} = (+1)(-13) = -13, \\quad C_{32} = (-1)(-4) = 4, \\quad C_{33} = (+1)(6) = 6$$

// Comparing cofactors to minors, entries at even-sum positions are unchanged while entries at odd-sum positions flip sign.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Laplace Expansion Along a Row`,
//     content: `The determinant of $A$ can be computed by selecting any row $i$ and summing the products of each entry in that row with its cofactor:

// $$\\det(A) = \\sum_{j=1}^{n} a_{ij} \\, C_{ij} = \\sum_{j=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$$

// The remarkable fact is that every row produces the same number. Expanding along row $1$, row $2$, or row $n$ all yield the same determinant. This is not obvious from the formula itself — the proof relies on the algebraic [properties](!/linear-algebra/determinants/properties) of the determinant or on the permutation-based definition.

// ## Worked Example: 4×4 Matrix

// $$A = \\begin{pmatrix} 1 & 3 & 0 & 2 \\\\ -1 & 0 & 2 & 1 \\\\ 0 & 4 & -1 & 3 \\\\ 2 & 1 & 0 & -2 \\end{pmatrix}$$

// Expanding along row $1$:

// $$\\det(A) = 1 \\cdot C_{11} + 3 \\cdot C_{12} + 0 \\cdot C_{13} + 2 \\cdot C_{14}$$

// The zero entry at position $(1,3)$ eliminates one $3 \\times 3$ determinant entirely. The three remaining cofactors require expanding the sub-determinants:

// $$M_{11} = \\det\\begin{pmatrix} 0 & 2 & 1 \\\\ 4 & -1 & 3 \\\\ 1 & 0 & -2 \\end{pmatrix} = 0(2 - 0) - 2(-8 - 3) + 1(0 + 1) = 0 + 22 + 1 = 23$$

// $$M_{12} = \\det\\begin{pmatrix} -1 & 2 & 1 \\\\ 0 & -1 & 3 \\\\ 2 & 0 & -2 \\end{pmatrix} = -1(2 - 0) - 2(0 - 6) + 1(0 + 2) = -2 + 12 + 2 = 12$$

// $$M_{14} = \\det\\begin{pmatrix} -1 & 0 & 2 \\\\ 0 & 4 & -1 \\\\ 2 & 1 & 0 \\end{pmatrix} = -1(0 + 1) - 0(0 + 2) + 2(0 - 8) = -1 + 0 - 16 = -17$$

// Applying the signs: $C_{11} = +23$, $C_{12} = -12$, $C_{14} = +(-17) = -17$. The determinant is

// $$\\det(A) = 1(23) + 3(-12) + 0 + 2(-17) = 23 - 36 - 34 = -47$$

// ## Verification via a Different Row

// Expanding the same matrix along row $3$ (which has a zero in the first position) would produce the same value $-47$, confirming that the choice of row is purely a matter of computational convenience.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Laplace Expansion Along a Column`,
//     content: `The expansion formula works identically along columns. Fixing column $j$:

// $$\\det(A) = \\sum_{i=1}^{n} a_{ij} \\, C_{ij} = \\sum_{i=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$$

// That column expansion gives the same result as row expansion follows from [transpose invariance](!/linear-algebra/determinants/properties): since $\\det(A^T) = \\det(A)$, expanding $A$ along column $j$ is the same as expanding $A^T$ along row $j$.

// The practical consequence is that before starting any cofactor expansion, the first step should be to scan the matrix for the row or column containing the most zeros. Each zero entry eliminates an entire sub-determinant from the sum.

// ## Worked Example

// $$B = \\begin{pmatrix} 3 & 0 & 0 \\\\ 1 & -2 & 5 \\\\ 4 & 0 & 7 \\end{pmatrix}$$

// Column $2$ has two zeros. Expanding along column $2$:

// $$\\det(B) = 0 \\cdot C_{12} + (-2) \\cdot C_{22} + 0 \\cdot C_{32} = (-2) \\cdot C_{22}$$

// The minor $M_{22}$ is the $2 \\times 2$ determinant from deleting row $2$ and column $2$:

// $$M_{22} = \\det\\begin{pmatrix} 3 & 0 \\\\ 4 & 7 \\end{pmatrix} = 21$$

// Since $C_{22} = (-1)^{2+2}(21) = 21$, we get $\\det(B) = (-2)(21) = -42$.

// An expansion along row $1$ or column $1$ would require more terms but produce the same result. The column $2$ expansion reduced the work to a single $2 \\times 2$ determinant.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `The Cofactor Matrix`,
//     content: `The cofactor matrix of $A$, sometimes written $\\text{cof}(A)$, is the $n \\times n$ matrix whose $(i,j)$ entry is the cofactor $C_{ij}$. It is not the matrix of minors — the sign factors $(-1)^{i+j}$ are already incorporated.

// For the $3 \\times 3$ matrix used earlier,

// $$A = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix}$$

// the cofactor matrix is

// $$\\text{cof}(A) = \\begin{pmatrix} 20 & -8 & -12 \\\\ -29 & 8 & 18 \\\\ -13 & 4 & 6 \\end{pmatrix}$$

// where each entry was computed in the earlier sections. As a check, the Laplace expansion along row $1$ should give $\\det(A) = 2(20) + 5(-8) + 1(-12) = 40 - 40 - 12 = -12$. Along row $2$: $0(-29) + 3(8) + (-2)(18) = 0 + 24 - 36 = -12$. Along row $3$: $4(-13) + 1(4) + 6(6) = -52 + 4 + 36 = -12$. All three rows agree.

// The cofactor matrix encodes every possible cofactor expansion simultaneously — each row of $\\text{cof}(A)$ contains the cofactors needed for expansion along the corresponding row of $A$, and each column contains those needed for column expansion.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `The Adjugate`,
//     content: `The adjugate (also called the classical adjoint) of $A$ is the transpose of the cofactor matrix:

// $$\\operatorname{adj}(A) = \\text{cof}(A)^T$$

// For the running example:

// $$\\operatorname{adj}(A) = \\begin{pmatrix} 20 & -29 & -13 \\\\ -8 & 8 & 4 \\\\ -12 & 18 & 6 \\end{pmatrix}$$

// ## The Fundamental Identity

// The adjugate satisfies

// $$A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I$$

// To see why, consider the $(i,k)$ entry of the product $A \\cdot \\operatorname{adj}(A)$. This is $\\sum_{j=1}^{n} a_{ij} \\cdot [\\operatorname{adj}(A)]_{jk} = \\sum_{j=1}^{n} a_{ij} \\, C_{kj}$. When $i = k$, this sum is exactly the Laplace expansion of $\\det(A)$ along row $i$, so the diagonal entries equal $\\det(A)$. When $i \\neq k$, the sum pairs the entries of row $i$ with the cofactors of a different row $k$. This is equivalent to computing the determinant of a matrix with two identical rows (row $i$ appears in both its own position and row $k$'s), which is always zero. So the off-diagonal entries vanish.

// ## Verification

// With $\\det(A) = -12$:

// $$A \\cdot \\operatorname{adj}(A) = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix} \\begin{pmatrix} 20 & -29 & -13 \\\\ -8 & 8 & 4 \\\\ -12 & 18 & 6 \\end{pmatrix} = \\begin{pmatrix} -12 & 0 & 0 \\\\ 0 & -12 & 0 \\\\ 0 & 0 & -12 \\end{pmatrix} = -12 \\, I$$

// This identity is the foundation of the [adjugate inverse formula](!/linear-algebra/determinants/applications): dividing both sides by $\\det(A)$ gives $A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)$, valid whenever $\\det(A) \\neq 0$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Computational Cost`,
//     content: `Cofactor expansion is a recursive algorithm. Each $n \\times n$ determinant spawns $n$ sub-problems of size $(n-1) \\times (n-1)$. Without any zero entries to prune terms, the total number of multiplications satisfies the recurrence $T(n) = n \\cdot T(n-1)$, which gives $T(n) = O(n!)$.

// To put this in concrete terms: a $10 \\times 10$ determinant via cofactor expansion requires roughly $10! \\approx 3.6$ million multiplications. A $20 \\times 20$ determinant would require over $2 \\times 10^{18}$ — well beyond the reach of any computer running a naive recursive implementation. Row reduction, by contrast, computes the same determinant in roughly $\\frac{2}{3}n^3$ operations: about $670$ for $n = 10$ and about $5300$ for $n = 20$.

// This cost difference does not make cofactor expansion useless. For matrices up to $4 \\times 4$, the expansion is fast enough to do by hand and gives the exact symbolic result. For matrices with many zero entries, the effective cost drops dramatically because each zero eliminates an entire recursive branch. In symbolic computation — where entries are polynomials or formal expressions rather than numbers — cofactor expansion preserves structure that row reduction would obscure.

// The Laplace expansion is best understood as a theoretical instrument. It defines what the determinant is, establishes its algebraic properties, and produces the adjugate and the cofactor structure. For numerical computation on anything larger than a small matrix, the [row-reduction approach](!/linear-algebra/determinants/properties) is the practical choice.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Summary: The Cofactor Construction Chain`,
//     content: `The objects introduced above — minor, cofactor, cofactor matrix, adjugate — form a single construction chain, each built from the previous one and culminating in the inverse formula. The table below collects each link in the chain alongside its definition, its shape (number or matrix), and the role it plays in connecting one stage to the next.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }



// formulas-injected: v1 | 2026-06-16 | 7 callouts (obj1 minor_definition prose, obj2 cofactor_definition direct, obj3 laplace_row_expansion direct, obj4 laplace_column_expansion direct, obj5 cofactor_matrix_definition prose, obj6 adjugate_definition direct + adjugate_identity direct)

const sectionsContent = {
  obj1: {
    title: `Minors`,
    content: `Given an $n \\times n$ matrix $A$, the $(i,j)$ minor $M_{ij}$ is the determinant of the $(n-1) \\times (n-1)$ submatrix that remains after removing row $i$ and column $j$. The minor is itself a determinant — a number, not a matrix.

Formally:

@academic[formula_callout:minor_definition|Minor Definition|$$M_{ij} = \\det\\!\\left(A^{(i,j)}\\right)$$]@
@academic[formulas_link:/linear-algebra/formulas#minor_definition]@

where $A^{(i,j)}$ denotes the submatrix of $A$ with row $i$ and column $j$ removed.

For a $3 \\times 3$ matrix

$$A = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix}$$

there are nine minors, one for each entry. Deleting row $1$ and column $1$ leaves $\\begin{pmatrix} 3 & -2 \\\\ 1 & 6 \\end{pmatrix}$, so $M_{11} = 3 \\cdot 6 - (-2) \\cdot 1 = 20$. Deleting row $1$ and column $2$ leaves $\\begin{pmatrix} 0 & -2 \\\\ 4 & 6 \\end{pmatrix}$, so $M_{12} = 0 \\cdot 6 - (-2) \\cdot 4 = 8$. Deleting row $1$ and column $3$ leaves $\\begin{pmatrix} 0 & 3 \\\\ 4 & 1 \\end{pmatrix}$, so $M_{13} = 0 \\cdot 1 - 3 \\cdot 4 = -12$.

Continuing this way produces all nine values:

$$M_{21} = 5 \\cdot 6 - 1 \\cdot 1 = 29, \\quad M_{22} = 2 \\cdot 6 - 1 \\cdot 4 = 8, \\quad M_{23} = 2 \\cdot 1 - 5 \\cdot 4 = -18$$

$$M_{31} = 5 \\cdot (-2) - 1 \\cdot 3 = -13, \\quad M_{32} = 2 \\cdot (-2) - 1 \\cdot 0 = -4, \\quad M_{33} = 2 \\cdot 3 - 5 \\cdot 0 = 6$$

For a $4 \\times 4$ matrix, each minor is a $3 \\times 3$ determinant. For a $5 \\times 5$ matrix, each minor is $4 \\times 4$. The recursive chain continues until reaching $1 \\times 1$ sub-determinants, where the minor is simply the lone entry.`,
    before: ``,
    after: ``,
    link: ``,
  },
  notation: {
    title: `Cofactor Notation`,
    lead: `Capital letters that secretly name numbers, a superscript that deletes instead of multiplying, and an operator with a dangerous old name.`,
    inherited: `$\\det$ and its bars — [determinant notation](!/linear-algebra/determinants/properties#notation); $(a_{ij})$ and $A^{T}$ — [matrix notation](!/linear-algebra/matrix/operations#notation); $\\Sigma$ — [sequence notation](!/algebra/sequences/arithmetic#notation).`,
    entries: [
      {
        id: 'capital-scalars',
        tex: `$M_{ij}$ · $C_{ij}$`,
        read: `The minor and cofactor at position i, j`,
        means: `A convention wrinkle: capitals usually name matrices, but $M_{ij}$ and $C_{ij}$ are *numbers* — determinants of submatrices, defined in **Minors** and **Cofactors and the Sign Pattern** above and below. The double subscript locates which entry they belong to; the capital honours their determinant ancestry.`,
        cases: `The letters regroup into genuine matrices one level up: the cofactor matrix $C = (C_{ij})$ collects all $n^2$ cofactors — a matrix whose entries are the capital-named scalars.`,
        alsoWritten: `$A_{ij}$ for the cofactor in many Russian and older texts — colliding head-on with the entry notation $a_{ij}$, which is why $C_{ij}$ won.`,
        confusedWith: `Submatrices. $M_{ij}$ is not the deleted-row-and-column *matrix* — it is that matrix's determinant; the matrix itself needs its own mark, next entry.`,
      },
      {
        id: 'deletion-superscript',
        tex: `$A^{(i,j)}$`,
        read: `A with row i and column j removed`,
        means: `A parenthesized superscript that *deletes*: the $(n-1) \\times (n-1)$ submatrix left after striking row $i$ and column $j$. The parentheses are load-bearing — they fence the indices off from the exponent reading.`,
        cases: `The same fencing device appears wherever a superscript must not mean a power: the $n$-th [derivative](!/calculus/derivatives/higher-order#notation) $f^{(n)}$ uses identical armor. Un-parenthesized, $A^{ij}$ would collide with powers and tensor conventions at once.`,
        alsoWritten: `$A_{\\hat{i}\\hat{j}}$ with deletion hats, or verbal “the $(i,j)$ submatrix” — no universal standard exists; every text declares its own mark.`,
        confusedWith: `A power or an entry. Three decorations, three meanings: $a_{ij}$ selects an entry, $A^n$ multiplies, $A^{(i,j)}$ deletes — subscript, superscript, and fenced superscript all working different jobs on one letter.`,
      },
      {
        id: 'adjugate-mark',
        tex: `$\\operatorname{adj}(A) = C^{T}$`,
        read: `The adjugate of A — the transpose of the cofactor matrix`,
        means: `The transpose inside the definition is the notation trap: the adjugate is *not* the cofactor matrix but its transpose, and forgetting the flip is the classic error in the inverse formula of **The Adjugate** below.`,
        cases: `Its one starring role: $A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)$ — the closed-form [inverse](!/linear-algebra/matrix/inverse), where the adjugate carries all the cofactor bookkeeping.`,
        alsoWritten: `$\\operatorname{adj} A$ without parentheses; older texts say “classical adjoint” and write $\\operatorname{adj}$ the same way.`,
        confusedWith: `The modern adjoint. In advanced linear algebra “adjoint” means the conjugate transpose $A^{*}$ — an unrelated operation. The name migrated; the word “adjugate” exists precisely to escape the collision, and careful reading of older texts must check which one “adjoint” means.`,
      },
    ],
    symbolsHref: `/math-symbols/linear-algebra`,
    symbolsLabel: `All linear algebra symbols`,
    parentHref: `/linear-algebra/determinants`,
    parentLabel: `Determinants`,
  },
  obj2: {
    title: `Cofactors and the Sign Pattern`,
    content: `The cofactor $C_{ij}$ attaches a prescribed sign to the minor:

@academic[formula_callout:cofactor_definition|Cofactor Definition|$$C_{ij} = (-1)^{i+j} \\, M_{ij}$$]@
@academic[formulas_link:/linear-algebra/formulas#cofactor_definition]@

The exponent $i + j$ determines whether the sign is positive or negative. When $i + j$ is even, the cofactor equals the minor; when $i + j$ is odd, the cofactor is the negative of the minor. This produces a checkerboard of signs across the matrix:

$$\\begin{pmatrix} + & - & + & - \\\\ - & + & - & + \\\\ + & - & + & - \\\\ - & + & - & + \\end{pmatrix}$$

The pattern always starts with $+$ at position $(1,1)$ and alternates from there. The sign depends entirely on the position — the actual entries of the matrix play no role in determining it.

Using the $3 \\times 3$ matrix from the previous section, the cofactors are:

$$C_{11} = (+1)(20) = 20, \\quad C_{12} = (-1)(8) = -8, \\quad C_{13} = (+1)(-12) = -12$$

$$C_{21} = (-1)(29) = -29, \\quad C_{22} = (+1)(8) = 8, \\quad C_{23} = (-1)(-18) = 18$$

$$C_{31} = (+1)(-13) = -13, \\quad C_{32} = (-1)(-4) = 4, \\quad C_{33} = (+1)(6) = 6$$

Comparing cofactors to minors, entries at even-sum positions are unchanged while entries at odd-sum positions flip sign.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Laplace Expansion Along a Row`,
    content: `The determinant of $A$ can be computed by selecting any row $i$ and summing the products of each entry in that row with its cofactor:

@academic[formula_callout:laplace_row_expansion|Laplace Row Expansion|$$\\det(A) = \\sum_{j=1}^{n} a_{ij} \\, C_{ij} \\qquad \\text{for any fixed row } i$$]@
@academic[formulas_link:/linear-algebra/formulas#laplace_row_expansion]@

Expanded with the explicit sign factor: $\\det(A) = \\sum_{j=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$.

The remarkable fact is that every row produces the same number. Expanding along row $1$, row $2$, or row $n$ all yield the same determinant. This is not obvious from the formula itself — the proof relies on the algebraic [properties](!/linear-algebra/determinants/properties) of the determinant or on the permutation-based definition.

## Worked Example: 4×4 Matrix

$$A = \\begin{pmatrix} 1 & 3 & 0 & 2 \\\\ -1 & 0 & 2 & 1 \\\\ 0 & 4 & -1 & 3 \\\\ 2 & 1 & 0 & -2 \\end{pmatrix}$$

Expanding along row $1$:

$$\\det(A) = 1 \\cdot C_{11} + 3 \\cdot C_{12} + 0 \\cdot C_{13} + 2 \\cdot C_{14}$$

The zero entry at position $(1,3)$ eliminates one $3 \\times 3$ determinant entirely. The three remaining cofactors require expanding the sub-determinants:

$$M_{11} = \\det\\begin{pmatrix} 0 & 2 & 1 \\\\ 4 & -1 & 3 \\\\ 1 & 0 & -2 \\end{pmatrix} = 0(2 - 0) - 2(-8 - 3) + 1(0 + 1) = 0 + 22 + 1 = 23$$

$$M_{12} = \\det\\begin{pmatrix} -1 & 2 & 1 \\\\ 0 & -1 & 3 \\\\ 2 & 0 & -2 \\end{pmatrix} = -1(2 - 0) - 2(0 - 6) + 1(0 + 2) = -2 + 12 + 2 = 12$$

$$M_{14} = \\det\\begin{pmatrix} -1 & 0 & 2 \\\\ 0 & 4 & -1 \\\\ 2 & 1 & 0 \\end{pmatrix} = -1(0 + 1) - 0(0 + 2) + 2(0 - 8) = -1 + 0 - 16 = -17$$

Applying the signs: $C_{11} = +23$, $C_{12} = -12$, $C_{14} = +(-17) = -17$. The determinant is

$$\\det(A) = 1(23) + 3(-12) + 0 + 2(-17) = 23 - 36 - 34 = -47$$

## Verification via a Different Row

Expanding the same matrix along row $3$ (which has a zero in the first position) would produce the same value $-47$, confirming that the choice of row is purely a matter of computational convenience.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Laplace Expansion Along a Column`,
    content: `The expansion formula works identically along columns. Fixing column $j$:

@academic[formula_callout:laplace_column_expansion|Laplace Column Expansion|$$\\det(A) = \\sum_{i=1}^{n} a_{ij} \\, C_{ij} \\qquad \\text{for any fixed column } j$$]@
@academic[formulas_link:/linear-algebra/formulas#laplace_column_expansion]@

Expanded with the explicit sign factor: $\\det(A) = \\sum_{i=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$.

That column expansion gives the same result as row expansion follows from [transpose invariance](!/linear-algebra/determinants/properties): since $\\det(A^T) = \\det(A)$, expanding $A$ along column $j$ is the same as expanding $A^T$ along row $j$.

The practical consequence is that before starting any cofactor expansion, the first step should be to scan the matrix for the row or column containing the most zeros. Each zero entry eliminates an entire sub-determinant from the sum.

## Worked Example

$$B = \\begin{pmatrix} 3 & 0 & 0 \\\\ 1 & -2 & 5 \\\\ 4 & 0 & 7 \\end{pmatrix}$$

Column $2$ has two zeros. Expanding along column $2$:

$$\\det(B) = 0 \\cdot C_{12} + (-2) \\cdot C_{22} + 0 \\cdot C_{32} = (-2) \\cdot C_{22}$$

The minor $M_{22}$ is the $2 \\times 2$ determinant from deleting row $2$ and column $2$:

$$M_{22} = \\det\\begin{pmatrix} 3 & 0 \\\\ 4 & 7 \\end{pmatrix} = 21$$

Since $C_{22} = (-1)^{2+2}(21) = 21$, we get $\\det(B) = (-2)(21) = -42$.

An expansion along row $1$ or column $1$ would require more terms but produce the same result. The column $2$ expansion reduced the work to a single $2 \\times 2$ determinant.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Cofactor Matrix`,
    content: `The cofactor matrix of $A$, sometimes written $\\text{cof}(A)$, is the $n \\times n$ matrix whose $(i,j)$ entry is the cofactor $C_{ij}$:

@academic[formula_callout:cofactor_matrix_definition|Cofactor Matrix Definition|$$\\operatorname{cof}(A) = \\bigl[C_{ij}\\bigr]_{n \\times n}$$]@
@academic[formulas_link:/linear-algebra/formulas#cofactor_matrix_definition]@

It is not the matrix of minors — the sign factors $(-1)^{i+j}$ are already incorporated.

For the $3 \\times 3$ matrix used earlier,

$$A = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix}$$

the cofactor matrix is

$$\\text{cof}(A) = \\begin{pmatrix} 20 & -8 & -12 \\\\ -29 & 8 & 18 \\\\ -13 & 4 & 6 \\end{pmatrix}$$

where each entry was computed in the earlier sections. As a check, the Laplace expansion along row $1$ should give $\\det(A) = 2(20) + 5(-8) + 1(-12) = 40 - 40 - 12 = -12$. Along row $2$: $0(-29) + 3(8) + (-2)(18) = 0 + 24 - 36 = -12$. Along row $3$: $4(-13) + 1(4) + 6(6) = -52 + 4 + 36 = -12$. All three rows agree.

The cofactor matrix encodes every possible cofactor expansion simultaneously — each row of $\\text{cof}(A)$ contains the cofactors needed for expansion along the corresponding row of $A$, and each column contains those needed for column expansion.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The Adjugate`,
    content: `The adjugate (also called the classical adjoint) of $A$ is the transpose of the cofactor matrix:

@academic[formula_callout:adjugate_definition|Adjugate Definition|$$\\operatorname{adj}(A) = \\operatorname{cof}(A)^T$$]@
@academic[formulas_link:/linear-algebra/formulas#adjugate_definition]@

For the running example:

$$\\operatorname{adj}(A) = \\begin{pmatrix} 20 & -29 & -13 \\\\ -8 & 8 & 4 \\\\ -12 & 18 & 6 \\end{pmatrix}$$

## The Fundamental Identity

The adjugate satisfies

@academic[formula_callout:adjugate_identity|Adjugate Identity|$$A \\cdot \\operatorname{adj}(A) = \\operatorname{adj}(A) \\cdot A = \\det(A) \\, I$$]@
@academic[formulas_link:/linear-algebra/formulas#adjugate_identity]@

To see why, consider the $(i,k)$ entry of the product $A \\cdot \\operatorname{adj}(A)$. This is $\\sum_{j=1}^{n} a_{ij} \\cdot [\\operatorname{adj}(A)]_{jk} = \\sum_{j=1}^{n} a_{ij} \\, C_{kj}$. When $i = k$, this sum is exactly the Laplace expansion of $\\det(A)$ along row $i$, so the diagonal entries equal $\\det(A)$. When $i \\neq k$, the sum pairs the entries of row $i$ with the cofactors of a different row $k$. This is equivalent to computing the determinant of a matrix with two identical rows (row $i$ appears in both its own position and row $k$'s), which is always zero. So the off-diagonal entries vanish.

## Verification

With $\\det(A) = -12$:

$$A \\cdot \\operatorname{adj}(A) = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix} \\begin{pmatrix} 20 & -29 & -13 \\\\ -8 & 8 & 4 \\\\ -12 & 18 & 6 \\end{pmatrix} = \\begin{pmatrix} -12 & 0 & 0 \\\\ 0 & -12 & 0 \\\\ 0 & 0 & -12 \\end{pmatrix} = -12 \\, I$$

This identity is the foundation of the [adjugate inverse formula](!/linear-algebra/determinants/applications): dividing both sides by $\\det(A)$ gives $A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)$, valid whenever $\\det(A) \\neq 0$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Computational Cost`,
    content: `Cofactor expansion is a recursive algorithm. Each $n \\times n$ determinant spawns $n$ sub-problems of size $(n-1) \\times (n-1)$. Without any zero entries to prune terms, the total number of multiplications satisfies the recurrence $T(n) = n \\cdot T(n-1)$, which gives $T(n) = O(n!)$.

To put this in concrete terms: a $10 \\times 10$ determinant via cofactor expansion requires roughly $10! \\approx 3.6$ million multiplications. A $20 \\times 20$ determinant would require over $2 \\times 10^{18}$ — well beyond the reach of any computer running a naive recursive implementation. Row reduction, by contrast, computes the same determinant in roughly $\\frac{2}{3}n^3$ operations: about $670$ for $n = 10$ and about $5300$ for $n = 20$.

This cost difference does not make cofactor expansion useless. For matrices up to $4 \\times 4$, the expansion is fast enough to do by hand and gives the exact symbolic result. For matrices with many zero entries, the effective cost drops dramatically because each zero eliminates an entire recursive branch. In symbolic computation — where entries are polynomials or formal expressions rather than numbers — cofactor expansion preserves structure that row reduction would obscure.

The Laplace expansion is best understood as a theoretical instrument. It defines what the determinant is, establishes its algebraic properties, and produces the adjugate and the cofactor structure. For numerical computation on anything larger than a small matrix, the [row-reduction approach](!/linear-algebra/determinants/properties) is the practical choice.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Summary: The Cofactor Construction Chain`,
    content: `The objects introduced above — minor, cofactor, cofactor matrix, adjugate — form a single construction chain, each built from the previous one and culminating in the inverse formula. The table below collects each link in the chain alongside its definition, its shape (number or matrix), and the role it plays in connecting one stage to the next.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


const introContent = {
    id: "intro",
  title: `Expanding Along Any Row or Column`,
  content: `The cofactor expansion generalizes the recursive pattern seen in the 3×3 case to matrices of arbitrary size. By systematically pairing each entry with a signed sub-determinant, it reduces an n×n determinant to n determinants of size (n−1)×(n−1), with complete freedom in choosing which row or column drives the expansion.`,
}


const faqQuestions = {
  obj1: {
    question: "What is a minor of a matrix?",
    answer: "The (i,j) minor Mᵢⱼ is the determinant of the (n-1)×(n-1) submatrix remaining after deleting row i and column j. It's a number, not a matrix. A 3×3 matrix has nine minors; a 4×4 has sixteen.",
    sectionId: "1"
  },
  obj2: {
    question: "What is a cofactor?",
    answer: "The cofactor Cᵢⱼ = (-1)^(i+j) Mᵢⱼ is the minor with a sign attached. The sign follows a checkerboard pattern: + at (1,1), alternating from there. When i+j is even, cofactor equals minor; when odd, it's negated.",
    sectionId: "2"
  },
  obj3: {
    question: "What is Laplace expansion along a row?",
    answer: "Laplace expansion computes det(A) by summing each entry in a chosen row times its cofactor: det(A) = Σ aᵢⱼ·Cᵢⱼ. Every row gives the same result. Choose the row with the most zeros to minimize work.",
    sectionId: "3"
  },
  obj4: {
    question: "Can you expand a determinant along a column?",
    answer: "Yes. Column expansion works identically: det(A) = Σ aᵢⱼ·Cᵢⱼ summing over rows i for fixed column j. This equals row expansion because det(Aᵀ) = det(A). Always scan for the row or column with the most zeros first.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the cofactor matrix?",
    answer: "The cofactor matrix cof(A) has the cofactor Cᵢⱼ at position (i,j). It encodes all possible cofactor expansions: row i of cof(A) contains cofactors for expanding along row i of A. Note: signs are already incorporated.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the adjugate matrix?",
    answer: "The adjugate adj(A) = cof(A)ᵀ is the transpose of the cofactor matrix. It satisfies A·adj(A) = det(A)·I. When det(A) ≠ 0, this gives the inverse formula: A⁻¹ = adj(A)/det(A).",
    sectionId: "6"
  },
  obj7: {
    question: "How expensive is cofactor expansion?",
    answer: "Cofactor expansion costs O(n!) operations — impractical for n > 10. Row reduction computes the same determinant in O(n³). Cofactor expansion remains useful for small matrices, symbolic computation, and deriving the adjugate formula.",
    sectionId: "7"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Cofactors and Laplace Expansion",
    "description": "Learn minors, cofactors, and Laplace expansion for determinants. Includes the cofactor matrix, adjugate, inverse formula, worked examples for 3×3 and 4×4 matrices, and computational cost analysis.",
    "url": "https://www.learnmathclass.com/linear-algebra/determinants/cofactors",
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
      "name": "Cofactors and Laplace Expansion"
    },
    "teaches": [
      "Computing minors of a matrix",
      "Cofactors and the checkerboard sign pattern",
      "Laplace expansion along rows and columns",
      "The cofactor matrix",
      "The adjugate and A·adj(A) = det(A)·I",
      "Adjugate formula for matrix inverse",
      "Computational complexity of cofactor expansion"
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
        "name": "Linear Algebra",
        "item": "https://www.learnmathclass.com/linear-algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Determinants",
        "item": "https://www.learnmathclass.com/linear-algebra/determinants"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Cofactors and Laplace Expansion",
        "item": "https://www.learnmathclass.com/linear-algebra/determinants/cofactors"
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
  props: {
    sectionsContent,
    introContent,
    obj2Table,
    obj7Table,
    cofactorChain,
    faqQuestions,
    schemas,
    seoData: {
      title: "Cofactors: Minors, Laplace Expansion & Adjugate | Learn Math Class",
      description: "Learn minors, cofactors, and Laplace expansion for determinants. Includes the cofactor matrix, adjugate, inverse formula, worked examples for 3×3 and 4×4 matrices, and computational cost analysis.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/determinants/cofactors",
      name: "Cofactors and Laplace Expansion"
    },
  }
}
   }

   export default function CofactorsPage({
     seoData,
     sectionsContent,
     introContent,
     obj2Table,
     obj7Table,
     cofactorChain,
     faqQuestions,
     schemas,
   }) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
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
          <div
            key={'obj2-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj2Table }}
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
          <div
            key={'obj7-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj7Table }}
          />,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          `These six are a chain rather than a list, and the order is not negotiable: a cofactor needs a minor, an expansion needs cofactors, the cofactor matrix collects them, the adjugate transposes it, and the inverse formula divides by the determinant. Each definition exists because the next one requires it, which is why the terminology is worth learning in one pass rather than six.`,
          <DiagramFrame
            key={'obj8-diagram'}
            id="cofactor-chain"
            title="The cofactor construction chain"
            source="/linear-algebra/determinants/cofactors"
          >
            <IdentitySheet data={cofactorChain} theme="navy" variant="ledger" />
          </DiagramFrame>,
          `The identity $A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I$ is the destination, and it is more general than the inverse formula it produces. It holds for every square matrix, singular ones included — where it says $A \\cdot \\operatorname{adj}(A) = O$, which is informative rather than vacuous. Dividing by $\\det(A)$ is the last step, and it is the only step that requires a hypothesis.`,
          `None of this is how anything is computed. A minor is a determinant, so every level of the recursion multiplies the work by another factor of $n$ — the adjugate of a $5 \\times 5$ matrix means twenty-five $4 \\times 4$ determinants, each of which means four $3 \\times 3$ determinants. Reduction computes a determinant in $\\tfrac{2}{3}n^3$ operations and factorization inverts in $2n^3$. What the chain provides instead is a closed form, and closed forms are what proofs and symbolic work need.`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Minors, Cofactors, and the Adjugate</h1>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}