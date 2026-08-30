// // // tables-optimized: v4 | 2026-05-18 | 3 tables (obj7 aggregation, obj9 comparison, obj11 summary capstone)
// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import React from 'react'
// // import '../../../pages.css'
// // import Head from 'next/head'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // import { tableHeaders } from '@/app/styles/theme'


// // export async function getStaticProps(){

// //  const keyWords = [
// //   "Gram-Schmidt process",
// //   "Gram-Schmidt orthogonalization",
// //   "QR decomposition",
// //   "orthogonal basis construction",
// //   "orthonormalization",
// //   "Gram-Schmidt algorithm",
// //   "QR factorization",
// //   "modified Gram-Schmidt",
// //   "orthogonalize vectors",
// //   "QR least squares",
// //   "Legendre polynomials Gram-Schmidt",
// //   "Householder reflections",
// //   "orthonormal basis from basis",
// //   "Gram-Schmidt example"
// // ]

// // const linkStyle = 'color: inherit; text-decoration: underline;'

// // // ---------- TABLES ----------

// // // obj7 — aggregation: what the Q and R factors of A = QR contain
// // const obj7Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.aggregation}">Component of A = Q R</th>
// //       <th style="${tableHeaders.aggregation}">Description</th>
// //       <th style="${tableHeaders.aggregation}">Properties / formula</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Q &nbsp;(m × n)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns are the normalized Gram–Schmidt outputs q<sub>j</sub> = u<sub>j</sub> / ‖u<sub>j</sub>‖</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Qᵀ Q = I<sub>n</sub>; Q Qᵀ is the <a href="/linear-algebra/orthogonality/projections" style="${linkStyle}">projection</a> matrix onto Col(A)</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">R &nbsp;(n × n)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">upper triangular matrix of coefficients tying the original columns back to the q<sub>i</sub>&apos;s</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">R<sub>ij</sub> = q<sub>i</sub> · a<sub>j</sub> for i ≤ j; R<sub>ij</sub> = 0 for i &gt; j</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Diagonal entry R<sub>jj</sub></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the length of the j-th Gram–Schmidt output</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">R<sub>jj</sub> = ‖u<sub>j</sub>‖ &gt; 0; positivity gives uniqueness of QR</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Off-diagonal entry R<sub>ij</sub>&nbsp; (i &lt; j)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dot products computed during Gram–Schmidt</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">R<sub>ij</sub> = q<sub>i</sub> · a<sub>j</sub> — coefficient of q<sub>i</sub> in the expansion of a<sub>j</sub></td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Column-recovery formula</td>
// //       <td style="padding: 12px 15px; color: #34495e;">how each original column a<sub>j</sub> is recovered from Q and R</td>
// //       <td style="padding: 12px 15px; color: #34495e;">a<sub>j</sub> = R<sub>1j</sub> q<sub>1</sub> + R<sub>2j</sub> q<sub>2</sub> + … + R<sub>jj</sub> q<sub>j</sub></td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // obj9 — comparison: orthogonalization methods by stability and use case
// // const obj9Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.comparison}">Method</th>
// //       <th style="${tableHeaders.comparison}">How it computes the orthogonal set / QR</th>
// //       <th style="${tableHeaders.comparison}">Numerical stability</th>
// //       <th style="${tableHeaders.comparison}">Typical use</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Classical Gram–Schmidt</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">at step j, all projections of the original v<sub>j</sub> onto u<sub>1</sub>, …, u<sub>j−1</sub> are computed and subtracted at once</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">poor — orthogonality can be lost when input vectors are nearly dependent; errors accumulate</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">textbook / illustrative use; abstract inner product spaces where exact arithmetic is available</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Modified Gram–Schmidt</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">v<sub>j</sub> is updated in place after each individual projection is subtracted</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">significantly better than classical; identical result in exact arithmetic</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">educational software, moderate-precision floating-point work</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Householder reflections</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a sequence of orthogonal reflections is applied to A to zero out below-diagonal entries column by column</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">backward stable — the gold standard in numerical linear algebra</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">default QR routine in LAPACK, NumPy, MATLAB, and most numerical libraries</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Givens rotations</td>
// //       <td style="padding: 12px 15px; color: #34495e;">a sequence of 2 × 2 plane rotations zeros out individual entries one at a time</td>
// //       <td style="padding: 12px 15px; color: #34495e;">backward stable; lets the algorithm target nonzero entries only</td>
// //       <td style="padding: 12px 15px; color: #34495e;">sparse matrices with structured zeros; updating an existing QR factorization</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // obj11 — summary capstone: Gram–Schmidt across settings (input → IP → output)
// // const summaryTable = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.summary}">Input</th>
// //       <th style="${tableHeaders.summary}">Inner product / setting</th>
// //       <th style="${tableHeaders.summary}">Output of Gram–Schmidt</th>
// //       <th style="${tableHeaders.summary}">What is obtained</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Independent vectors v<sub>1</sub>, …, v<sub>k</sub> in ℝⁿ</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard dot product u · v</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">orthogonal set {u<sub>1</sub>, …, u<sub>k</sub>} with same span at every step</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">orthogonal basis for Span{v<sub>1</sub>, …, v<sub>k</sub>}</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Same input, plus normalization step q<sub>j</sub> = u<sub>j</sub> / ‖u<sub>j</sub>‖</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard dot product</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/orthogonality/orthogonal-sets" style="${linkStyle}">orthonormal</a> set {q<sub>1</sub>, …, q<sub>k</sub>} with q<sub>i</sub> · q<sub>j</sub> = δ<sub>ij</sub></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">orthonormal basis for the same subspace</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Columns of a full-column-rank matrix A (m × n)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard dot product on column vectors</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Q (m × n, orthonormal columns) and R (n × n, upper triangular, positive diagonal)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">thin <a href="/linear-algebra/decompositions/qr" style="${linkStyle}">QR decomposition</a> A = Q R</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">{1, x, x²} in 𝒫<sub>2</sub></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">⟨p, q⟩ = ∫<sub>−1</sub><sup>1</sup> p(x) q(x) dx</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P<sub>0</sub>(x) = 1, P<sub>1</sub>(x) = x, P<sub>2</sub>(x) = ½(3x² − 1) (up to normalization)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the first three <strong>Legendre polynomials</strong></td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Selected functions in C[0, 2π]</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">⟨f, g⟩ = ∫<sub>0</sub><sup>2π</sup> f(x) g(x) dx</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sines and cosines remain orthogonal across the chosen frequencies</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">orthogonal basis underlying <strong>Fourier analysis</strong></td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Independent v<sub>1</sub>, …, v<sub>k</sub> in any inner product space V</td>
// //       <td style="padding: 12px 15px; color: #34495e;">general ⟨·, ·⟩</td>
// //       <td style="padding: 12px 15px; color: #34495e;">orthonormal {q<sub>1</sub>, …, q<sub>k</sub>} with same span</td>
// //       <td style="padding: 12px 15px; color: #34495e;">constructive proof that every finite-dimensional <a href="/linear-algebra/orthogonality/inner-product" style="${linkStyle}">inner product space</a> has an orthonormal basis</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `


// // // const sectionsContent = {
// // //   obj1: {
// // //     title: `The Goal`,
// // //     content: `The input is a set of [linearly independent](!/linear-algebra/vector-spaces/linear-independence) vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$ in an [inner product](!/linear-algebra/orthogonality/inner-product) space. The output is an [orthogonal](!/linear-algebra/orthogonality/orthogonal-sets) set $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\dots, \\mathbf{u}_k\\}$ satisfying two conditions: the vectors are pairwise perpendicular ($\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ for $i \\neq j$), and they [span](!/linear-algebra/vector-spaces/span) the same subspace ($\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$ at every step $j$).

// // // Optionally, each $\\mathbf{u}_i$ is normalized to unit length, producing an orthonormal set $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_k\\}$.

// // // The process is the constructive proof that every finite-dimensional inner product space has an orthonormal [basis](!/linear-algebra/vector-spaces). Given any basis, Gram-Schmidt produces an orthonormal one for the same space.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj2: {
// // //     title: `The Algorithm: Two Vectors`,
// // //     content: `Start with two independent vectors $\\mathbf{v}_1$ and $\\mathbf{v}_2$.

// // // Set $\\mathbf{u}_1 = \\mathbf{v}_1$.

// // // Subtract the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{v}_2$ onto $\\mathbf{u}_1$:

// // // $$\\mathbf{u}_2 = \\mathbf{v}_2 - \\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\,\\mathbf{u}_1$$

// // // The subtracted term is the component of $\\mathbf{v}_2$ along $\\mathbf{u}_1$. Removing it leaves only the component perpendicular to $\\mathbf{u}_1$, so $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$.

// // // ## Worked Example

// // // $\\mathbf{v}_1 = (1, 1, 0)$, $\\mathbf{v}_2 = (1, 0, 1)$.

// // // $\\mathbf{u}_1 = (1, 1, 0)$. $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1}{2}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{1}{2}(1, 1, 0) = (\\frac{1}{2}, -\\frac{1}{2}, 1)$.

// // // Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{2} - \\frac{1}{2} + 0 = 0$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj3: {
// // //     title: `The Algorithm: General Case`,
// // //     content: `For $k$ independent vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$:

// // // $$\\mathbf{u}_1 = \\mathbf{v}_1$$

// // // $$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\mathbf{u}_i \\cdot \\mathbf{v}_j}{\\mathbf{u}_i \\cdot \\mathbf{u}_i}\\,\\mathbf{u}_i \\qquad \\text{for } j = 2, 3, \\dots, k$$

// // // At each step, $\\mathbf{v}_j$ has its projections onto all previously computed orthogonal vectors subtracted. What remains is the component of $\\mathbf{v}_j$ perpendicular to $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$.

// // // Because $\\mathbf{v}_j$ is independent of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}\\}$ — and therefore not in $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ — this perpendicular component is nonzero. So each $\\mathbf{u}_j \\neq \\mathbf{0}$, and the process never breaks down.

// // // At every stage, $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$. The span is preserved because each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and the earlier $\\mathbf{u}_i$'s (which are themselves combinations of $\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}$).`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj4: {
// // //     title: `Normalization`,
// // //     content: `After computing the orthogonal set $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\}$, normalization produces an orthonormal set:

// // // $$\\mathbf{q}_i = \\frac{\\mathbf{u}_i}{\\|\\mathbf{u}_i\\|}$$

// // // Each vector is divided by its length, making $\\|\\mathbf{q}_i\\| = 1$ while preserving direction. The resulting set satisfies $\\mathbf{q}_i \\cdot \\mathbf{q}_j = \\delta_{ij}$.

// // // Normalization can be done at each step (normalize $\\mathbf{u}_j$ immediately before moving to $\\mathbf{v}_{j+1}$) or all at the end. The result is the same in exact arithmetic. In practice, normalizing at each step is slightly preferable for numerical stability, as it keeps the vectors well-scaled throughout the computation.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj5: {
// // //     title: `Worked Example: Three Vectors in R³`,
// // //     content: `Orthogonalize $\\mathbf{v}_1 = (1, 1, 1)$, $\\mathbf{v}_2 = (1, 0, 1)$, $\\mathbf{v}_3 = (0, 1, 1)$.

// // // $\\mathbf{u}_1 = (1, 1, 1)$.

// // // For $\\mathbf{u}_2$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1 + 0 + 1}{3} = \\frac{2}{3}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{2}{3}(1, 1, 1) = (\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3})$.

// // // Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{3} - \\frac{2}{3} + \\frac{1}{3} = 0$.

// // // For $\\mathbf{u}_3$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_3}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{0 + 1 + 1}{3} = \\frac{2}{3}$ and $\\frac{\\mathbf{u}_2 \\cdot \\mathbf{v}_3}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2} = \\frac{0 - \\frac{2}{3} + \\frac{1}{3}}{\\frac{1}{9} + \\frac{4}{9} + \\frac{1}{9}} = \\frac{-\\frac{1}{3}}{\\frac{6}{9}} = \\frac{-1}{2}$.

// // // $\\mathbf{u}_3 = (0, 1, 1) - \\frac{2}{3}(1, 1, 1) - (-\\frac{1}{2})(\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3}) = (0, 1, 1) - (\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}) + (\\frac{1}{6}, -\\frac{1}{3}, \\frac{1}{6}) = (-\\frac{1}{2}, 0, \\frac{1}{2})$.

// // // Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = -\\frac{1}{2} + 0 + \\frac{1}{2} = 0$ and $\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = -\\frac{1}{6} + 0 + \\frac{1}{6} = 0$.

// // // Normalizing: $\\|\\mathbf{u}_1\\| = \\sqrt{3}$, $\\|\\mathbf{u}_2\\| = \\sqrt{6}/3$, $\\|\\mathbf{u}_3\\| = 1/\\sqrt{2}$. The orthonormal basis is $\\{\\mathbf{u}_1/\\sqrt{3}, \\; 3\\mathbf{u}_2/\\sqrt{6}, \\; \\sqrt{2}\\,\\mathbf{u}_3\\}$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj6: {
// // //     title: `Why It Works`,
// // //     content: `At each step, $\\mathbf{u}_j$ is constructed as $\\mathbf{v}_j$ minus everything in $\\mathbf{v}_j$ that lies in the subspace $W_{j-1} = \\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$. Since $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ is orthogonal, the projection formula decomposes cleanly into independent terms — one projection per basis vector.

// // // What remains after subtraction is the component of $\\mathbf{v}_j$ [orthogonal](!/linear-algebra/orthogonality) to $W_{j-1}$. This component is nonzero because $\\mathbf{v}_j \\notin W_{j-1}$ — guaranteed by the independence of the original set.

// // // The span is preserved at each step. Each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and $\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}$, and each earlier $\\mathbf{u}_i$ is a combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_i$. So $\\mathbf{u}_j \\in \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$, and the reverse inclusion follows because $\\mathbf{v}_j$ can be recovered from $\\mathbf{u}_j$ and the earlier $\\mathbf{u}_i$'s.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj7: {
// // //     title: `The QR Decomposition`,
// // //     content: `Applying Gram-Schmidt to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of an $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ (with independent columns) produces the [QR decomposition](!/linear-algebra/decompositions/qr):

// // // $$A = QR$$

// // // $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns (the normalized $\\mathbf{q}_i$'s). $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

// // // The entries of $R$ are the dot products computed during Gram-Schmidt: $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ for $i \\leq j$, and $R_{ij} = 0$ for $i > j$ (because $\\mathbf{a}_j$'s projection onto $\\mathbf{q}_i$ is zero when $i > j$ — that direction hasn't been subtracted yet).

// // // The factorization captures two complementary pieces of information. $Q$ stores the orthonormal directions. $R$ stores the coefficients that express the original columns in terms of those directions: $\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj8: {
// // //     title: `QR and Least Squares`,
// // //     content: `The QR decomposition provides a numerically superior method for solving [least-squares](!/linear-algebra/orthogonality/least-squares) problems.

// // // The normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ can be rewritten using $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (which is invertible since $R$ has positive diagonal):

// // // $$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

// // // This is an upper triangular system, solved by back substitution. The computation $Q^T\\mathbf{b}$ is just $n$ dot products (one per column of $Q$).

// // // The QR approach avoids forming $A^TA$ explicitly. This matters because the condition number of $A^TA$ is the square of the condition number of $A$ — squaring amplifies rounding errors. Working with $Q$ and $R$ directly preserves the original conditioning and is the standard method for least squares in numerical software.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj9: {
// // //     title: `Numerical Stability`,
// // //     content: `Classical Gram-Schmidt (as presented above) can lose orthogonality in floating-point arithmetic. When the input vectors are nearly dependent, the computed $\\mathbf{u}_j$'s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

// // // Modified Gram-Schmidt addresses this by reorganizing the computation. Instead of computing all projections using the original $\\mathbf{v}_j$, modified Gram-Schmidt updates $\\mathbf{v}_j$ in place after each projection is subtracted. At step $j$, first subtract the projection onto $\\mathbf{u}_1$ from $\\mathbf{v}_j$, then subtract the projection onto $\\mathbf{u}_2$ from the updated $\\mathbf{v}_j$, and so on. The mathematical result is identical in exact arithmetic, but the modified version is significantly more stable numerically.

// // // Householder reflections provide an even more robust alternative for computing the QR factorization. Householder-based QR achieves backward stability — the gold standard in numerical linear algebra — and is the default algorithm in most software libraries.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj10: {
// // //     title: `Gram-Schmidt on Abstract Inner Product Spaces`,
// // //     content: `The algorithm works in any [inner product](!/linear-algebra/orthogonality/inner-product) space — the dot product is replaced by the general inner product $\\langle \\cdot, \\cdot \\rangle$, and the formulas are otherwise identical:

// // // $$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\langle \\mathbf{u}_i, \\mathbf{v}_j \\rangle}{\\langle \\mathbf{u}_i, \\mathbf{u}_i \\rangle}\\,\\mathbf{u}_i$$

// // // Orthogonalizing $\\{1, x, x^2\\}$ in the polynomial space $\\mathcal{P}_2$ with the inner product $\\langle p, q \\rangle = \\int_{-1}^{1} p(x)q(x)\\,dx$ produces the Legendre polynomials (up to normalization): $P_0(x) = 1$, $P_1(x) = x$, $P_2(x) = \\frac{1}{2}(3x^2 - 1)$. The polynomial $x$ is already orthogonal to $1$ under this inner product (the integral of an odd function over a symmetric interval is zero), so the first subtraction has no effect.

// // // On the function space $C[0, 2\\pi]$ with $\\langle f, g \\rangle = \\int_0^{2\\pi} f(x)g(x)\\,dx$, orthogonalizing appropriate function sets produces Fourier bases. The algorithm is identical in structure to the $\\mathbb{R}^n$ version — only the inner product changes.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj11: {
// // //     title: `Summary: Gram-Schmidt Across Settings`,
// // //     content: `Gram-Schmidt operates uniformly across many settings — ℝⁿ with the standard dot product, polynomial spaces with integral inner products, function spaces in Fourier analysis, and abstract inner product spaces in general. The table below collects the main contexts in which the process is applied, alongside the input, the inner product used, and what the algorithm produces in each case.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // // }

// // // formulas-injected: v1 | 2026-06-16 | 1 callout (obj3 gram_schmidt_process direct)

// // const sectionsContent = {
// //   obj1: {
// //     title: `The Goal`,
// //     content: `The input is a set of [linearly independent](!/linear-algebra/vector-spaces/linear-independence) vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$ in an [inner product](!/linear-algebra/orthogonality/inner-product) space. The output is an [orthogonal](!/linear-algebra/orthogonality/orthogonal-sets) set $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\dots, \\mathbf{u}_k\\}$ satisfying two conditions: the vectors are pairwise perpendicular ($\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ for $i \\neq j$), and they [span](!/linear-algebra/vector-spaces/span) the same subspace ($\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$ at every step $j$).

// // Optionally, each $\\mathbf{u}_i$ is normalized to unit length, producing an orthonormal set $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_k\\}$.

// // The process is the constructive proof that every finite-dimensional inner product space has an orthonormal [basis](!/linear-algebra/vector-spaces). Given any basis, Gram-Schmidt produces an orthonormal one for the same space.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `The Algorithm: Two Vectors`,
// //     content: `Start with two independent vectors $\\mathbf{v}_1$ and $\\mathbf{v}_2$.

// // Set $\\mathbf{u}_1 = \\mathbf{v}_1$.

// // Subtract the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{v}_2$ onto $\\mathbf{u}_1$:

// // $$\\mathbf{u}_2 = \\mathbf{v}_2 - \\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\,\\mathbf{u}_1$$

// // The subtracted term is the component of $\\mathbf{v}_2$ along $\\mathbf{u}_1$. Removing it leaves only the component perpendicular to $\\mathbf{u}_1$, so $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$.

// // ## Worked Example

// // $\\mathbf{v}_1 = (1, 1, 0)$, $\\mathbf{v}_2 = (1, 0, 1)$.

// // $\\mathbf{u}_1 = (1, 1, 0)$. $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1}{2}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{1}{2}(1, 1, 0) = (\\frac{1}{2}, -\\frac{1}{2}, 1)$.

// // Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{2} - \\frac{1}{2} + 0 = 0$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `The Algorithm: General Case`,
// //     content: `For $k$ independent vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$:

// // $$\\mathbf{u}_1 = \\mathbf{v}_1$$

// // @academic[formula_callout:gram_schmidt_process|Gram-Schmidt Process|$$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\mathbf{u}_i \\cdot \\mathbf{v}_j}{\\mathbf{u}_i \\cdot \\mathbf{u}_i}\\,\\mathbf{u}_i \\quad \\text{for } j = 2, 3, \\dots, k$$]@
// // @academic[formulas_link:/linear-algebra/formulas#gram_schmidt_process]@

// // At each step, $\\mathbf{v}_j$ has its projections onto all previously computed orthogonal vectors subtracted. What remains is the component of $\\mathbf{v}_j$ perpendicular to $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$.

// // Because $\\mathbf{v}_j$ is independent of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}\\}$ — and therefore not in $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ — this perpendicular component is nonzero. So each $\\mathbf{u}_j \\neq \\mathbf{0}$, and the process never breaks down.

// // At every stage, $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$. The span is preserved because each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and the earlier $\\mathbf{u}_i$&apos;s (which are themselves combinations of $\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}$).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Normalization`,
// //     content: `After computing the orthogonal set $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\}$, normalization produces an orthonormal set:

// // $$\\mathbf{q}_i = \\frac{\\mathbf{u}_i}{\\|\\mathbf{u}_i\\|}$$

// // Each vector is divided by its length, making $\\|\\mathbf{q}_i\\| = 1$ while preserving direction. The resulting set satisfies $\\mathbf{q}_i \\cdot \\mathbf{q}_j = \\delta_{ij}$.

// // Normalization can be done at each step (normalize $\\mathbf{u}_j$ immediately before moving to $\\mathbf{v}_{j+1}$) or all at the end. The result is the same in exact arithmetic. In practice, normalizing at each step is slightly preferable for numerical stability, as it keeps the vectors well-scaled throughout the computation.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Worked Example: Three Vectors in R³`,
// //     content: `Orthogonalize $\\mathbf{v}_1 = (1, 1, 1)$, $\\mathbf{v}_2 = (1, 0, 1)$, $\\mathbf{v}_3 = (0, 1, 1)$.

// // $\\mathbf{u}_1 = (1, 1, 1)$.

// // For $\\mathbf{u}_2$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1 + 0 + 1}{3} = \\frac{2}{3}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{2}{3}(1, 1, 1) = (\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3})$.

// // Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{3} - \\frac{2}{3} + \\frac{1}{3} = 0$.

// // For $\\mathbf{u}_3$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_3}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{0 + 1 + 1}{3} = \\frac{2}{3}$ and $\\frac{\\mathbf{u}_2 \\cdot \\mathbf{v}_3}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2} = \\frac{0 - \\frac{2}{3} + \\frac{1}{3}}{\\frac{1}{9} + \\frac{4}{9} + \\frac{1}{9}} = \\frac{-\\frac{1}{3}}{\\frac{6}{9}} = \\frac{-1}{2}$.

// // $\\mathbf{u}_3 = (0, 1, 1) - \\frac{2}{3}(1, 1, 1) - (-\\frac{1}{2})(\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3}) = (0, 1, 1) - (\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}) + (\\frac{1}{6}, -\\frac{1}{3}, \\frac{1}{6}) = (-\\frac{1}{2}, 0, \\frac{1}{2})$.

// // Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = -\\frac{1}{2} + 0 + \\frac{1}{2} = 0$ and $\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = -\\frac{1}{6} + 0 + \\frac{1}{6} = 0$.

// // Normalizing: $\\|\\mathbf{u}_1\\| = \\sqrt{3}$, $\\|\\mathbf{u}_2\\| = \\sqrt{6}/3$, $\\|\\mathbf{u}_3\\| = 1/\\sqrt{2}$. The orthonormal basis is $\\{\\mathbf{u}_1/\\sqrt{3}, \\; 3\\mathbf{u}_2/\\sqrt{6}, \\; \\sqrt{2}\\,\\mathbf{u}_3\\}$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Why It Works`,
// //     content: `At each step, $\\mathbf{u}_j$ is constructed as $\\mathbf{v}_j$ minus everything in $\\mathbf{v}_j$ that lies in the subspace $W_{j-1} = \\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$. Since $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ is orthogonal, the projection formula decomposes cleanly into independent terms — one projection per basis vector.

// // What remains after subtraction is the component of $\\mathbf{v}_j$ [orthogonal](!/linear-algebra/orthogonality) to $W_{j-1}$. This component is nonzero because $\\mathbf{v}_j \\notin W_{j-1}$ — guaranteed by the independence of the original set.

// // The span is preserved at each step. Each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and $\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}$, and each earlier $\\mathbf{u}_i$ is a combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_i$. So $\\mathbf{u}_j \\in \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$, and the reverse inclusion follows because $\\mathbf{v}_j$ can be recovered from $\\mathbf{u}_j$ and the earlier $\\mathbf{u}_i$&apos;s.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `The QR Decomposition`,
// //     content: `Applying Gram-Schmidt to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of an $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ (with independent columns) produces the [QR decomposition](!/linear-algebra/decompositions/qr):

// // $$A = QR$$

// // $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns (the normalized $\\mathbf{q}_i$&apos;s). $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

// // The entries of $R$ are the dot products computed during Gram-Schmidt: $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ for $i \\leq j$, and $R_{ij} = 0$ for $i > j$ (because $\\mathbf{a}_j$&apos;s projection onto $\\mathbf{q}_i$ is zero when $i > j$ — that direction hasn&apos;t been subtracted yet).

// // The factorization captures two complementary pieces of information. $Q$ stores the orthonormal directions. $R$ stores the coefficients that express the original columns in terms of those directions: $\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `QR and Least Squares`,
// //     content: `The QR decomposition provides a numerically superior method for solving [least-squares](!/linear-algebra/orthogonality/least-squares) problems.

// // The normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ can be rewritten using $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (which is invertible since $R$ has positive diagonal):

// // $$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

// // This is an upper triangular system, solved by back substitution. The computation $Q^T\\mathbf{b}$ is just $n$ dot products (one per column of $Q$).

// // The QR approach avoids forming $A^TA$ explicitly. This matters because the condition number of $A^TA$ is the square of the condition number of $A$ — squaring amplifies rounding errors. Working with $Q$ and $R$ directly preserves the original conditioning and is the standard method for least squares in numerical software.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Numerical Stability`,
// //     content: `Classical Gram-Schmidt (as presented above) can lose orthogonality in floating-point arithmetic. When the input vectors are nearly dependent, the computed $\\mathbf{u}_j$&apos;s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

// // Modified Gram-Schmidt addresses this by reorganizing the computation. Instead of computing all projections using the original $\\mathbf{v}_j$, modified Gram-Schmidt updates $\\mathbf{v}_j$ in place after each projection is subtracted. At step $j$, first subtract the projection onto $\\mathbf{u}_1$ from $\\mathbf{v}_j$, then subtract the projection onto $\\mathbf{u}_2$ from the updated $\\mathbf{v}_j$, and so on. The mathematical result is identical in exact arithmetic, but the modified version is significantly more stable numerically.

// // Householder reflections provide an even more robust alternative for computing the QR factorization. Householder-based QR achieves backward stability — the gold standard in numerical linear algebra — and is the default algorithm in most software libraries.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Gram-Schmidt on Abstract Inner Product Spaces`,
// //     content: `The algorithm works in any [inner product](!/linear-algebra/orthogonality/inner-product) space — the dot product is replaced by the general inner product $\\langle \\cdot, \\cdot \\rangle$, and the formulas are otherwise identical:

// // $$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\langle \\mathbf{u}_i, \\mathbf{v}_j \\rangle}{\\langle \\mathbf{u}_i, \\mathbf{u}_i \\rangle}\\,\\mathbf{u}_i$$

// // Orthogonalizing $\\{1, x, x^2\\}$ in the polynomial space $\\mathcal{P}_2$ with the inner product $\\langle p, q \\rangle = \\int_{-1}^{1} p(x)q(x)\\,dx$ produces the Legendre polynomials (up to normalization): $P_0(x) = 1$, $P_1(x) = x$, $P_2(x) = \\frac{1}{2}(3x^2 - 1)$. The polynomial $x$ is already orthogonal to $1$ under this inner product (the integral of an odd function over a symmetric interval is zero), so the first subtraction has no effect.

// // On the function space $C[0, 2\\pi]$ with $\\langle f, g \\rangle = \\int_0^{2\\pi} f(x)g(x)\\,dx$, orthogonalizing appropriate function sets produces Fourier bases. The algorithm is identical in structure to the $\\mathbb{R}^n$ version — only the inner product changes.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `Summary: Gram-Schmidt Across Settings`,
// //     content: `Gram-Schmidt operates uniformly across many settings — ℝⁿ with the standard dot product, polynomial spaces with integral inner products, function spaces in Fourier analysis, and abstract inner product spaces in general. The table below collects the main contexts in which the process is applied, alongside the input, the inner product used, and what the algorithm produces in each case.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }



// //  const introContent = {
// //   title: `Converting Any Basis into an Orthogonal One`,
// //   content: `The Gram-Schmidt process takes a set of linearly independent vectors and produces an orthogonal (or orthonormal) set spanning the same subspace. It works by sequentially stripping each vector of its components along previously computed directions, leaving only the perpendicular remainder. The result is a constructive proof that orthonormal bases always exist — and the matrix version of this process is the QR decomposition.`,
// // }

// // const faqQuestions = {
// //   obj1: {
// //     question: "What does the Gram-Schmidt process do?",
// //     answer: "The Gram-Schmidt process converts a set of linearly independent vectors into an orthogonal (or orthonormal) set spanning the same subspace. It works by sequentially subtracting from each vector its projections onto all previously computed orthogonal directions, leaving only the perpendicular remainder.",
// //     sectionId: "1"
// //   },
// //   obj2: {
// //     question: "What is the Gram-Schmidt formula?",
// //     answer: "For each vector vⱼ, compute uⱼ = vⱼ − Σ(uᵢ·vⱼ / uᵢ·uᵢ)uᵢ, summing over all previously computed orthogonal vectors u₁ through uⱼ₋₁. Each term subtracts the projection of vⱼ onto one orthogonal direction. Optionally normalize each uⱼ to unit length.",
// //     sectionId: "3"
// //   },
// //   obj3: {
// //     question: "What is the QR decomposition?",
// //     answer: "The QR decomposition A = QR results from applying Gram-Schmidt to the columns of A. The matrix Q has orthonormal columns (the normalized output of Gram-Schmidt), and R is upper triangular with entries recording the dot products computed during the process.",
// //     sectionId: "7"
// //   },
// //   obj4: {
// //     question: "Why is QR better than normal equations for least squares?",
// //     answer: "Forming AᵀA squares the condition number of A, amplifying rounding errors. The QR decomposition reduces least squares to the triangular system Rx̂ = Qᵀb, which preserves the original conditioning. This makes QR the standard algorithm in numerical software.",
// //     sectionId: "8"
// //   },
// //   obj5: {
// //     question: "What is the difference between classical and modified Gram-Schmidt?",
// //     answer: "Classical Gram-Schmidt computes all projections using the original vector vⱼ. Modified Gram-Schmidt updates vⱼ in place after each projection subtraction. The results are identical in exact arithmetic, but modified Gram-Schmidt is significantly more stable in floating-point computation.",
// //     sectionId: "9"
// //   }
// // }

// // const schemas = {
// //   learningResource: {
// //     "@context": "https://schema.org",
// //     "@type": "LearningResource",
// //     "name": "Gram-Schmidt Process",
// //     "description": "The Gram-Schmidt orthogonalization process: algorithm, worked examples, normalization, QR decomposition, least-squares connection, numerical stability, and abstract inner product spaces.",
// //     "url": "https://www.learnmathclass.com/linear-algebra/orthogonality/gram-schmidt",
// //     "inLanguage": "en-US",
// //     "learningResourceType": "Explanation",
// //     "educationalLevel": "College",
// //     "educationalUse": "Learning",
// //     "audience": {
// //       "@type": "EducationalAudience",
// //       "educationalRole": "student"
// //     },
// //     "about": {
// //       "@type": "Thing",
// //       "name": "Gram-Schmidt Process"
// //     },
// //     "teaches": [
// //       "Gram-Schmidt orthogonalization algorithm",
// //       "Step-by-step projection subtraction",
// //       "Normalization to orthonormal sets",
// //       "QR decomposition from Gram-Schmidt",
// //       "QR-based least-squares solution",
// //       "Classical vs modified Gram-Schmidt stability",
// //       "Gram-Schmidt on abstract inner product spaces"
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
// //         "name": "Linear Algebra",
// //         "item": "https://www.learnmathclass.com/linear-algebra"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 3,
// //         "name": "Orthogonality",
// //         "item": "https://www.learnmathclass.com/linear-algebra/orthogonality"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 4,
// //         "name": "Gram-Schmidt Process",
// //         "item": "https://www.learnmathclass.com/linear-algebra/orthogonality/gram-schmidt"
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

// //   //  return {
// //   //     props:{
// //   //        sectionsContent,
// //   //        introContent,
// //   //         seoData: {
// //   //       title: "Gram Schmidt | Learn Math Class",
// //   //       description: "Metadescription",
// //   //       keywords: keyWords.join(", "),
// //   //       url: "/linear-algebra/orthogonality/gram-schmidt",
// //   //        name: "name"
// //   //     },
        
// //   //      }
// //   //   }

// //   return {
// //   props:{
// //     sectionsContent,
// //     introContent,
// //     obj7Table,
// //     obj9Table,
// //     summaryTable,
// //     faqQuestions,
// //     schemas,
// //     seoData: {
// //       title: "Gram-Schmidt Process & QR Decomposition | Learn Math Class",
// //       description: "The Gram-Schmidt orthogonalization process: algorithm, worked examples, normalization, QR decomposition, least-squares connection, numerical stability, and abstract inner product spaces.",
// //       keywords: keyWords.join(", "),
// //       url: "/linear-algebra/orthogonality/gram-schmidt",
// //       name: "Gram-Schmidt Process"
// //     },
// //   }
// // }
// //    }

// // // export default function GramSchmidtPage({seoData,sectionsContent , introContent}) {
// // export default function GramSchmidtsPage({
// //   seoData,
// //   sectionsContent,
// //   introContent,
// //   obj7Table,
// //   obj9Table,
// //   summaryTable,
// //   faqQuestions,
// //   schemas,
// // }) {

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
// //           <div
// //             key={'obj7-table'}
// //             style={tableWrapStyle}
// //             dangerouslySetInnerHTML={{ __html: obj7Table }}
// //           />,
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
// //           <div
// //             key={'obj9-table'}
// //             style={tableWrapStyle}
// //             dangerouslySetInnerHTML={{ __html: obj9Table }}
// //           />,
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
// //           <div
// //             key={'summary-table'}
// //             style={tableWrapStyle}
// //             dangerouslySetInnerHTML={{ __html: summaryTable }}
// //           />,
// //         ]
// //     },
// // ]

// //   return (
// //    <>
// //    {/* <Head>
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
// //       __html: JSON.stringify({
// //         "@context": "https://schema.org",
// //         "@type": "WebPage",
// //         "name": seoData.name,
// //         "description": seoData.description,
// //         "keywords": seoData.keywords,
// //         "url": `https://www.learnmathclass.com${seoData.url}`,
// //         "dateModified": new Date().toISOString(),
// //         "inLanguage": "en-US",
// //         "mainEntity": {
// //           "@type": "Article",
// //           "name": seoData.name,
// //           "dateModified": new Date().toISOString(),
// //           "author": {
// //             "@type": "Organization",
// //             "name": "Learn Math Class"
// //           }
// //         }
// //       })
// //     }}
// //   />
// // </Head> */}


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
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Gram Schmidt Process</h1>
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
// //    <br/>
// //    <Sections sections={genericSections}/>
// //    <br/>
// //    <br/>
  
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }


// // tables-optimized: v4 | 2026-05-18 | 3 tables (obj7 aggregation, obj9 comparison, obj11 summary capstone)
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import { tableHeaders } from '@/app/styles/theme'
// import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
// import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


// export async function getStaticProps(){

//  const keyWords = [
//   "Gram-Schmidt process",
//   "Gram-Schmidt orthogonalization",
//   "QR decomposition",
//   "orthogonal basis construction",
//   "orthonormalization",
//   "Gram-Schmidt algorithm",
//   "QR factorization",
//   "modified Gram-Schmidt",
//   "orthogonalize vectors",
//   "QR least squares",
//   "Legendre polynomials Gram-Schmidt",
//   "Householder reflections",
//   "orthonormal basis from basis",
//   "Gram-Schmidt example"
// ]

// const linkStyle = 'color: inherit; text-decoration: underline;'

// // ---------- TABLES ----------

// // obj7 — aggregation: what the Q and R factors of A = QR contain
// const obj7Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Component of A = Q R</th>
//       <th style="${tableHeaders.aggregation}">Description</th>
//       <th style="${tableHeaders.aggregation}">Properties / formula</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Q &nbsp;(m × n)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns are the normalized Gram–Schmidt outputs q<sub>j</sub> = u<sub>j</sub> / ‖u<sub>j</sub>‖</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Qᵀ Q = I<sub>n</sub>; Q Qᵀ is the <a href="/linear-algebra/orthogonality/projections" style="${linkStyle}">projection</a> matrix onto Col(A)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">R &nbsp;(n × n)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">upper triangular matrix of coefficients tying the original columns back to the q<sub>i</sub>&apos;s</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">R<sub>ij</sub> = q<sub>i</sub> · a<sub>j</sub> for i ≤ j; R<sub>ij</sub> = 0 for i &gt; j</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Diagonal entry R<sub>jj</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the length of the j-th Gram–Schmidt output</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">R<sub>jj</sub> = ‖u<sub>j</sub>‖ &gt; 0; positivity gives uniqueness of QR</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Off-diagonal entry R<sub>ij</sub>&nbsp; (i &lt; j)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dot products computed during Gram–Schmidt</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">R<sub>ij</sub> = q<sub>i</sub> · a<sub>j</sub> — coefficient of q<sub>i</sub> in the expansion of a<sub>j</sub></td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Column-recovery formula</td>
//       <td style="padding: 12px 15px; color: #34495e;">how each original column a<sub>j</sub> is recovered from Q and R</td>
//       <td style="padding: 12px 15px; color: #34495e;">a<sub>j</sub> = R<sub>1j</sub> q<sub>1</sub> + R<sub>2j</sub> q<sub>2</sub> + … + R<sub>jj</sub> q<sub>j</sub></td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj9 — comparison: orthogonalization methods by stability and use case
// const obj9Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Method</th>
//       <th style="${tableHeaders.comparison}">How it computes the orthogonal set / QR</th>
//       <th style="${tableHeaders.comparison}">Numerical stability</th>
//       <th style="${tableHeaders.comparison}">Typical use</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Classical Gram–Schmidt</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">at step j, all projections of the original v<sub>j</sub> onto u<sub>1</sub>, …, u<sub>j−1</sub> are computed and subtracted at once</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">poor — orthogonality can be lost when input vectors are nearly dependent; errors accumulate</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">textbook / illustrative use; abstract inner product spaces where exact arithmetic is available</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Modified Gram–Schmidt</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">v<sub>j</sub> is updated in place after each individual projection is subtracted</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">significantly better than classical; identical result in exact arithmetic</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">educational software, moderate-precision floating-point work</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Householder reflections</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a sequence of orthogonal reflections is applied to A to zero out below-diagonal entries column by column</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">backward stable — the gold standard in numerical linear algebra</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">default QR routine in LAPACK, NumPy, MATLAB, and most numerical libraries</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Givens rotations</td>
//       <td style="padding: 12px 15px; color: #34495e;">a sequence of 2 × 2 plane rotations zeros out individual entries one at a time</td>
//       <td style="padding: 12px 15px; color: #34495e;">backward stable; lets the algorithm target nonzero entries only</td>
//       <td style="padding: 12px 15px; color: #34495e;">sparse matrices with structured zeros; updating an existing QR factorization</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj11 — summary capstone: Gram–Schmidt across settings (input → IP → output)
// // obj11 — the same algorithm across settings, sorted by what the inner product is
// const gramSchmidtSettings = {
//   kicker: 'Orthogonality \u00B7 Gram\u2013Schmidt',
//   title: 'The same algorithm across settings',
//   tallyLabel: 'settings',
//   intro: 'The procedure never changes \u2014 subtract projections, optionally normalise. What changes from row to row is only the inner product being used, and with it what the word &quot;orthogonal&quot; turns out to mean.',
//   footnote: 'The algorithm only ever calls two things: the inner product and scalar multiplication. It never inspects what a vector is, which is why the same code orthogonalizes tuples, polynomials and functions without modification \u2014 and why it constitutes a constructive proof that every finite-dimensional [inner product space](!/linear-algebra/orthogonality/inner-product) has an orthonormal basis.',
//   groups: [
//     {
//       heading: 'The dot product on \u211D\u207F',
//       identities: [
//         {
//           name: 'Orthogonal basis',
//           anchor: '#3',
//           formula: '$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i<j} \\operatorname{proj}_{\\mathbf{u}_i}(\\mathbf{v}_j)$',
//           condition: 'input independent',
//           note: 'Each vector loses everything it shares with the ones already processed, leaving the perpendicular remainder. The span is preserved at every prefix, so the output describes the same subspace as the input \u2014 differently oriented, not differently sized.',
//         },
//         {
//           name: 'Orthonormal basis',
//           anchor: '#4',
//           formula: '$\\mathbf{q}_j = \\mathbf{u}_j / \\|\\mathbf{u}_j\\|$',
//           condition: 'one extra division per vector',
//           note: 'Normalisation is a separate step and strictly optional \u2014 orthogonality is already achieved. It is worth doing because projection onto an orthonormal set is a bare dot product, with no denominator to carry.',
//         },
//         {
//           name: 'QR decomposition',
//           anchor: '#7',
//           formula: '$A = QR$, $R$ upper triangular',
//           condition: '$A$ of full column rank',
//           key: true,
//           note: 'Run the algorithm on the columns of $A$ and the outputs are the columns of $Q$; the projection coefficients discarded along the way are exactly the entries of $R$. The factorization is the algorithm with its bookkeeping written down \u2014 see [QR](!/linear-algebra/decompositions/qr).',
//         },
//       ],
//     },
//     {
//       heading: 'Other inner products',
//       identities: [
//         {
//           name: 'Polynomials',
//           anchor: '#10',
//           formula: '$\\langle p, q \\rangle = \\int_{-1}^{1} p(x)q(x)\\,dx$',
//           condition: 'applied to $\\{1, x, x^2, \\ldots\\}$',
//           note: 'The monomials are independent but not orthogonal under this product. Orthogonalizing them produces the Legendre polynomials \u2014 which is to say Legendre polynomials are not a discovery so much as what Gram\u2013Schmidt returns when handed the obvious basis.',
//         },
//         {
//           name: 'Functions',
//           anchor: '#10',
//           formula: '$\\langle f, g \\rangle = \\int_0^{2\\pi} f(x)g(x)\\,dx$',
//           condition: 'sines and cosines',
//           note: 'Here the algorithm has almost nothing to do: distinct frequencies are already orthogonal under this product, so it only normalises. That is the fact the Fourier basis rests on, and the reason a Fourier coefficient is a single integral rather than a linear system.',
//         },
//         {
//           name: 'Any inner product space',
//           anchor: '#10',
//           formula: 'orthonormal $\\{\\mathbf{q}_1, \\ldots, \\mathbf{q}_n\\}$',
//           condition: 'finite-dimensional, any $\\langle \\cdot, \\cdot \\rangle$',
//           key: true,
//           note: 'The general statement the rows above are instances of. Because the algorithm terminates and uses only the axioms, it proves the existence of an orthonormal basis rather than assuming it \u2014 a constructive proof, not an abstract one.',
//         },
//       ],
//     },
//   ],
// }


// // const sectionsContent = {
// //   obj1: {
// //     title: `The Goal`,
// //     content: `The input is a set of [linearly independent](!/linear-algebra/vector-spaces/linear-independence) vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$ in an [inner product](!/linear-algebra/orthogonality/inner-product) space. The output is an [orthogonal](!/linear-algebra/orthogonality/orthogonal-sets) set $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\dots, \\mathbf{u}_k\\}$ satisfying two conditions: the vectors are pairwise perpendicular ($\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ for $i \\neq j$), and they [span](!/linear-algebra/vector-spaces/span) the same subspace ($\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$ at every step $j$).

// // Optionally, each $\\mathbf{u}_i$ is normalized to unit length, producing an orthonormal set $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_k\\}$.

// // The process is the constructive proof that every finite-dimensional inner product space has an orthonormal [basis](!/linear-algebra/vector-spaces). Given any basis, Gram-Schmidt produces an orthonormal one for the same space.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `The Algorithm: Two Vectors`,
// //     content: `Start with two independent vectors $\\mathbf{v}_1$ and $\\mathbf{v}_2$.

// // Set $\\mathbf{u}_1 = \\mathbf{v}_1$.

// // Subtract the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{v}_2$ onto $\\mathbf{u}_1$:

// // $$\\mathbf{u}_2 = \\mathbf{v}_2 - \\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\,\\mathbf{u}_1$$

// // The subtracted term is the component of $\\mathbf{v}_2$ along $\\mathbf{u}_1$. Removing it leaves only the component perpendicular to $\\mathbf{u}_1$, so $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$.

// // ## Worked Example

// // $\\mathbf{v}_1 = (1, 1, 0)$, $\\mathbf{v}_2 = (1, 0, 1)$.

// // $\\mathbf{u}_1 = (1, 1, 0)$. $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1}{2}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{1}{2}(1, 1, 0) = (\\frac{1}{2}, -\\frac{1}{2}, 1)$.

// // Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{2} - \\frac{1}{2} + 0 = 0$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `The Algorithm: General Case`,
// //     content: `For $k$ independent vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$:

// // $$\\mathbf{u}_1 = \\mathbf{v}_1$$

// // $$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\mathbf{u}_i \\cdot \\mathbf{v}_j}{\\mathbf{u}_i \\cdot \\mathbf{u}_i}\\,\\mathbf{u}_i \\qquad \\text{for } j = 2, 3, \\dots, k$$

// // At each step, $\\mathbf{v}_j$ has its projections onto all previously computed orthogonal vectors subtracted. What remains is the component of $\\mathbf{v}_j$ perpendicular to $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$.

// // Because $\\mathbf{v}_j$ is independent of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}\\}$ — and therefore not in $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ — this perpendicular component is nonzero. So each $\\mathbf{u}_j \\neq \\mathbf{0}$, and the process never breaks down.

// // At every stage, $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$. The span is preserved because each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and the earlier $\\mathbf{u}_i$'s (which are themselves combinations of $\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}$).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Normalization`,
// //     content: `After computing the orthogonal set $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\}$, normalization produces an orthonormal set:

// // $$\\mathbf{q}_i = \\frac{\\mathbf{u}_i}{\\|\\mathbf{u}_i\\|}$$

// // Each vector is divided by its length, making $\\|\\mathbf{q}_i\\| = 1$ while preserving direction. The resulting set satisfies $\\mathbf{q}_i \\cdot \\mathbf{q}_j = \\delta_{ij}$.

// // Normalization can be done at each step (normalize $\\mathbf{u}_j$ immediately before moving to $\\mathbf{v}_{j+1}$) or all at the end. The result is the same in exact arithmetic. In practice, normalizing at each step is slightly preferable for numerical stability, as it keeps the vectors well-scaled throughout the computation.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Worked Example: Three Vectors in R³`,
// //     content: `Orthogonalize $\\mathbf{v}_1 = (1, 1, 1)$, $\\mathbf{v}_2 = (1, 0, 1)$, $\\mathbf{v}_3 = (0, 1, 1)$.

// // $\\mathbf{u}_1 = (1, 1, 1)$.

// // For $\\mathbf{u}_2$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1 + 0 + 1}{3} = \\frac{2}{3}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{2}{3}(1, 1, 1) = (\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3})$.

// // Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{3} - \\frac{2}{3} + \\frac{1}{3} = 0$.

// // For $\\mathbf{u}_3$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_3}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{0 + 1 + 1}{3} = \\frac{2}{3}$ and $\\frac{\\mathbf{u}_2 \\cdot \\mathbf{v}_3}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2} = \\frac{0 - \\frac{2}{3} + \\frac{1}{3}}{\\frac{1}{9} + \\frac{4}{9} + \\frac{1}{9}} = \\frac{-\\frac{1}{3}}{\\frac{6}{9}} = \\frac{-1}{2}$.

// // $\\mathbf{u}_3 = (0, 1, 1) - \\frac{2}{3}(1, 1, 1) - (-\\frac{1}{2})(\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3}) = (0, 1, 1) - (\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}) + (\\frac{1}{6}, -\\frac{1}{3}, \\frac{1}{6}) = (-\\frac{1}{2}, 0, \\frac{1}{2})$.

// // Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = -\\frac{1}{2} + 0 + \\frac{1}{2} = 0$ and $\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = -\\frac{1}{6} + 0 + \\frac{1}{6} = 0$.

// // Normalizing: $\\|\\mathbf{u}_1\\| = \\sqrt{3}$, $\\|\\mathbf{u}_2\\| = \\sqrt{6}/3$, $\\|\\mathbf{u}_3\\| = 1/\\sqrt{2}$. The orthonormal basis is $\\{\\mathbf{u}_1/\\sqrt{3}, \\; 3\\mathbf{u}_2/\\sqrt{6}, \\; \\sqrt{2}\\,\\mathbf{u}_3\\}$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Why It Works`,
// //     content: `At each step, $\\mathbf{u}_j$ is constructed as $\\mathbf{v}_j$ minus everything in $\\mathbf{v}_j$ that lies in the subspace $W_{j-1} = \\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$. Since $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ is orthogonal, the projection formula decomposes cleanly into independent terms — one projection per basis vector.

// // What remains after subtraction is the component of $\\mathbf{v}_j$ [orthogonal](!/linear-algebra/orthogonality) to $W_{j-1}$. This component is nonzero because $\\mathbf{v}_j \\notin W_{j-1}$ — guaranteed by the independence of the original set.

// // The span is preserved at each step. Each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and $\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}$, and each earlier $\\mathbf{u}_i$ is a combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_i$. So $\\mathbf{u}_j \\in \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$, and the reverse inclusion follows because $\\mathbf{v}_j$ can be recovered from $\\mathbf{u}_j$ and the earlier $\\mathbf{u}_i$'s.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `The QR Decomposition`,
// //     content: `Applying Gram-Schmidt to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of an $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ (with independent columns) produces the [QR decomposition](!/linear-algebra/decompositions/qr):

// // $$A = QR$$

// // $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns (the normalized $\\mathbf{q}_i$'s). $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

// // The entries of $R$ are the dot products computed during Gram-Schmidt: $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ for $i \\leq j$, and $R_{ij} = 0$ for $i > j$ (because $\\mathbf{a}_j$'s projection onto $\\mathbf{q}_i$ is zero when $i > j$ — that direction hasn't been subtracted yet).

// // The factorization captures two complementary pieces of information. $Q$ stores the orthonormal directions. $R$ stores the coefficients that express the original columns in terms of those directions: $\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `QR and Least Squares`,
// //     content: `The QR decomposition provides a numerically superior method for solving [least-squares](!/linear-algebra/orthogonality/least-squares) problems.

// // The normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ can be rewritten using $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (which is invertible since $R$ has positive diagonal):

// // $$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

// // This is an upper triangular system, solved by back substitution. The computation $Q^T\\mathbf{b}$ is just $n$ dot products (one per column of $Q$).

// // The QR approach avoids forming $A^TA$ explicitly. This matters because the condition number of $A^TA$ is the square of the condition number of $A$ — squaring amplifies rounding errors. Working with $Q$ and $R$ directly preserves the original conditioning and is the standard method for least squares in numerical software.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Numerical Stability`,
// //     content: `Classical Gram-Schmidt (as presented above) can lose orthogonality in floating-point arithmetic. When the input vectors are nearly dependent, the computed $\\mathbf{u}_j$'s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

// // Modified Gram-Schmidt addresses this by reorganizing the computation. Instead of computing all projections using the original $\\mathbf{v}_j$, modified Gram-Schmidt updates $\\mathbf{v}_j$ in place after each projection is subtracted. At step $j$, first subtract the projection onto $\\mathbf{u}_1$ from $\\mathbf{v}_j$, then subtract the projection onto $\\mathbf{u}_2$ from the updated $\\mathbf{v}_j$, and so on. The mathematical result is identical in exact arithmetic, but the modified version is significantly more stable numerically.

// // Householder reflections provide an even more robust alternative for computing the QR factorization. Householder-based QR achieves backward stability — the gold standard in numerical linear algebra — and is the default algorithm in most software libraries.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Gram-Schmidt on Abstract Inner Product Spaces`,
// //     content: `The algorithm works in any [inner product](!/linear-algebra/orthogonality/inner-product) space — the dot product is replaced by the general inner product $\\langle \\cdot, \\cdot \\rangle$, and the formulas are otherwise identical:

// // $$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\langle \\mathbf{u}_i, \\mathbf{v}_j \\rangle}{\\langle \\mathbf{u}_i, \\mathbf{u}_i \\rangle}\\,\\mathbf{u}_i$$

// // Orthogonalizing $\\{1, x, x^2\\}$ in the polynomial space $\\mathcal{P}_2$ with the inner product $\\langle p, q \\rangle = \\int_{-1}^{1} p(x)q(x)\\,dx$ produces the Legendre polynomials (up to normalization): $P_0(x) = 1$, $P_1(x) = x$, $P_2(x) = \\frac{1}{2}(3x^2 - 1)$. The polynomial $x$ is already orthogonal to $1$ under this inner product (the integral of an odd function over a symmetric interval is zero), so the first subtraction has no effect.

// // On the function space $C[0, 2\\pi]$ with $\\langle f, g \\rangle = \\int_0^{2\\pi} f(x)g(x)\\,dx$, orthogonalizing appropriate function sets produces Fourier bases. The algorithm is identical in structure to the $\\mathbb{R}^n$ version — only the inner product changes.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `Summary: Gram-Schmidt Across Settings`,
// //     content: `Gram-Schmidt operates uniformly across many settings — ℝⁿ with the standard dot product, polynomial spaces with integral inner products, function spaces in Fourier analysis, and abstract inner product spaces in general. The table below collects the main contexts in which the process is applied, alongside the input, the inner product used, and what the algorithm produces in each case.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }

// // formulas-injected: v1 | 2026-06-16 | 1 callout (obj3 gram_schmidt_process direct)

// const sectionsContent = {
//   obj1: {
//     title: `The Goal`,
//     content: `The input is a set of [linearly independent](!/linear-algebra/vector-spaces/linear-independence) vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$ in an [inner product](!/linear-algebra/orthogonality/inner-product) space. The output is an [orthogonal](!/linear-algebra/orthogonality/orthogonal-sets) set $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\dots, \\mathbf{u}_k\\}$ satisfying two conditions: the vectors are pairwise perpendicular ($\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ for $i \\neq j$), and they [span](!/linear-algebra/vector-spaces/span) the same subspace ($\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$ at every step $j$).

// Optionally, each $\\mathbf{u}_i$ is normalized to unit length, producing an orthonormal set $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_k\\}$.

// The process is the constructive proof that every finite-dimensional inner product space has an orthonormal [basis](!/linear-algebra/vector-spaces). Given any basis, Gram-Schmidt produces an orthonormal one for the same space.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Algorithm: Two Vectors`,
//     content: `Start with two independent vectors $\\mathbf{v}_1$ and $\\mathbf{v}_2$.

// Set $\\mathbf{u}_1 = \\mathbf{v}_1$.

// Subtract the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{v}_2$ onto $\\mathbf{u}_1$:

// $$\\mathbf{u}_2 = \\mathbf{v}_2 - \\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\,\\mathbf{u}_1$$

// The subtracted term is the component of $\\mathbf{v}_2$ along $\\mathbf{u}_1$. Removing it leaves only the component perpendicular to $\\mathbf{u}_1$, so $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$.

// ## Worked Example

// $\\mathbf{v}_1 = (1, 1, 0)$, $\\mathbf{v}_2 = (1, 0, 1)$.

// $\\mathbf{u}_1 = (1, 1, 0)$. $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1}{2}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{1}{2}(1, 1, 0) = (\\frac{1}{2}, -\\frac{1}{2}, 1)$.

// Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{2} - \\frac{1}{2} + 0 = 0$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Algorithm: General Case`,
//     content: `For $k$ independent vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$:

// $$\\mathbf{u}_1 = \\mathbf{v}_1$$

// @academic[formula_callout:gram_schmidt_process|Gram-Schmidt Process|$$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\mathbf{u}_i \\cdot \\mathbf{v}_j}{\\mathbf{u}_i \\cdot \\mathbf{u}_i}\\,\\mathbf{u}_i \\quad \\text{for } j = 2, 3, \\dots, k$$]@
// @academic[formulas_link:/linear-algebra/formulas#gram_schmidt_process]@

// At each step, $\\mathbf{v}_j$ has its projections onto all previously computed orthogonal vectors subtracted. What remains is the component of $\\mathbf{v}_j$ perpendicular to $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$.

// Because $\\mathbf{v}_j$ is independent of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}\\}$ — and therefore not in $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ — this perpendicular component is nonzero. So each $\\mathbf{u}_j \\neq \\mathbf{0}$, and the process never breaks down.

// At every stage, $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$. The span is preserved because each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and the earlier $\\mathbf{u}_i$&apos;s (which are themselves combinations of $\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}$).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Normalization`,
//     content: `After computing the orthogonal set $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\}$, normalization produces an orthonormal set:

// $$\\mathbf{q}_i = \\frac{\\mathbf{u}_i}{\\|\\mathbf{u}_i\\|}$$

// Each vector is divided by its length, making $\\|\\mathbf{q}_i\\| = 1$ while preserving direction. The resulting set satisfies $\\mathbf{q}_i \\cdot \\mathbf{q}_j = \\delta_{ij}$.

// Normalization can be done at each step (normalize $\\mathbf{u}_j$ immediately before moving to $\\mathbf{v}_{j+1}$) or all at the end. The result is the same in exact arithmetic. In practice, normalizing at each step is slightly preferable for numerical stability, as it keeps the vectors well-scaled throughout the computation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Worked Example: Three Vectors in R³`,
//     content: `Orthogonalize $\\mathbf{v}_1 = (1, 1, 1)$, $\\mathbf{v}_2 = (1, 0, 1)$, $\\mathbf{v}_3 = (0, 1, 1)$.

// $\\mathbf{u}_1 = (1, 1, 1)$.

// For $\\mathbf{u}_2$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1 + 0 + 1}{3} = \\frac{2}{3}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{2}{3}(1, 1, 1) = (\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3})$.

// Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{3} - \\frac{2}{3} + \\frac{1}{3} = 0$.

// For $\\mathbf{u}_3$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_3}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{0 + 1 + 1}{3} = \\frac{2}{3}$ and $\\frac{\\mathbf{u}_2 \\cdot \\mathbf{v}_3}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2} = \\frac{0 - \\frac{2}{3} + \\frac{1}{3}}{\\frac{1}{9} + \\frac{4}{9} + \\frac{1}{9}} = \\frac{-\\frac{1}{3}}{\\frac{6}{9}} = \\frac{-1}{2}$.

// $\\mathbf{u}_3 = (0, 1, 1) - \\frac{2}{3}(1, 1, 1) - (-\\frac{1}{2})(\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3}) = (0, 1, 1) - (\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}) + (\\frac{1}{6}, -\\frac{1}{3}, \\frac{1}{6}) = (-\\frac{1}{2}, 0, \\frac{1}{2})$.

// Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = -\\frac{1}{2} + 0 + \\frac{1}{2} = 0$ and $\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = -\\frac{1}{6} + 0 + \\frac{1}{6} = 0$.

// Normalizing: $\\|\\mathbf{u}_1\\| = \\sqrt{3}$, $\\|\\mathbf{u}_2\\| = \\sqrt{6}/3$, $\\|\\mathbf{u}_3\\| = 1/\\sqrt{2}$. The orthonormal basis is $\\{\\mathbf{u}_1/\\sqrt{3}, \\; 3\\mathbf{u}_2/\\sqrt{6}, \\; \\sqrt{2}\\,\\mathbf{u}_3\\}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Why It Works`,
//     content: `At each step, $\\mathbf{u}_j$ is constructed as $\\mathbf{v}_j$ minus everything in $\\mathbf{v}_j$ that lies in the subspace $W_{j-1} = \\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$. Since $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ is orthogonal, the projection formula decomposes cleanly into independent terms — one projection per basis vector.

// What remains after subtraction is the component of $\\mathbf{v}_j$ [orthogonal](!/linear-algebra/orthogonality) to $W_{j-1}$. This component is nonzero because $\\mathbf{v}_j \\notin W_{j-1}$ — guaranteed by the independence of the original set.

// The span is preserved at each step. Each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and $\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}$, and each earlier $\\mathbf{u}_i$ is a combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_i$. So $\\mathbf{u}_j \\in \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$, and the reverse inclusion follows because $\\mathbf{v}_j$ can be recovered from $\\mathbf{u}_j$ and the earlier $\\mathbf{u}_i$&apos;s.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `The QR Decomposition`,
//     content: `Applying Gram-Schmidt to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of an $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ (with independent columns) produces the [QR decomposition](!/linear-algebra/decompositions/qr):

// $$A = QR$$

// $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns (the normalized $\\mathbf{q}_i$&apos;s). $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

// The entries of $R$ are the dot products computed during Gram-Schmidt: $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ for $i \\leq j$, and $R_{ij} = 0$ for $i > j$ (because $\\mathbf{a}_j$&apos;s projection onto $\\mathbf{q}_i$ is zero when $i > j$ — that direction hasn&apos;t been subtracted yet).

// The factorization captures two complementary pieces of information. $Q$ stores the orthonormal directions. $R$ stores the coefficients that express the original columns in terms of those directions: $\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `QR and Least Squares`,
//     content: `The QR decomposition provides a numerically superior method for solving [least-squares](!/linear-algebra/orthogonality/least-squares) problems.

// The normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ can be rewritten using $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (which is invertible since $R$ has positive diagonal):

// $$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

// This is an upper triangular system, solved by back substitution. The computation $Q^T\\mathbf{b}$ is just $n$ dot products (one per column of $Q$).

// The QR approach avoids forming $A^TA$ explicitly. This matters because the condition number of $A^TA$ is the square of the condition number of $A$ — squaring amplifies rounding errors. Working with $Q$ and $R$ directly preserves the original conditioning and is the standard method for least squares in numerical software.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Numerical Stability`,
//     content: `Classical Gram-Schmidt (as presented above) can lose orthogonality in floating-point arithmetic. When the input vectors are nearly dependent, the computed $\\mathbf{u}_j$&apos;s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

// Modified Gram-Schmidt addresses this by reorganizing the computation. Instead of computing all projections using the original $\\mathbf{v}_j$, modified Gram-Schmidt updates $\\mathbf{v}_j$ in place after each projection is subtracted. At step $j$, first subtract the projection onto $\\mathbf{u}_1$ from $\\mathbf{v}_j$, then subtract the projection onto $\\mathbf{u}_2$ from the updated $\\mathbf{v}_j$, and so on. The mathematical result is identical in exact arithmetic, but the modified version is significantly more stable numerically.

// Householder reflections provide an even more robust alternative for computing the QR factorization. Householder-based QR achieves backward stability — the gold standard in numerical linear algebra — and is the default algorithm in most software libraries.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Gram-Schmidt on Abstract Inner Product Spaces`,
//     content: `The algorithm works in any [inner product](!/linear-algebra/orthogonality/inner-product) space — the dot product is replaced by the general inner product $\\langle \\cdot, \\cdot \\rangle$, and the formulas are otherwise identical:

// $$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\langle \\mathbf{u}_i, \\mathbf{v}_j \\rangle}{\\langle \\mathbf{u}_i, \\mathbf{u}_i \\rangle}\\,\\mathbf{u}_i$$

// Orthogonalizing $\\{1, x, x^2\\}$ in the polynomial space $\\mathcal{P}_2$ with the inner product $\\langle p, q \\rangle = \\int_{-1}^{1} p(x)q(x)\\,dx$ produces the Legendre polynomials (up to normalization): $P_0(x) = 1$, $P_1(x) = x$, $P_2(x) = \\frac{1}{2}(3x^2 - 1)$. The polynomial $x$ is already orthogonal to $1$ under this inner product (the integral of an odd function over a symmetric interval is zero), so the first subtraction has no effect.

// On the function space $C[0, 2\\pi]$ with $\\langle f, g \\rangle = \\int_0^{2\\pi} f(x)g(x)\\,dx$, orthogonalizing appropriate function sets produces Fourier bases. The algorithm is identical in structure to the $\\mathbb{R}^n$ version — only the inner product changes.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Summary: Gram-Schmidt Across Settings`,
//     content: `Gram-Schmidt operates uniformly across many settings — ℝⁿ with the standard dot product, polynomial spaces with integral inner products, function spaces in Fourier analysis, and abstract inner product spaces in general. The table below collects the main contexts in which the process is applied, alongside the input, the inner product used, and what the algorithm produces in each case.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }



//  const introContent = {
//   title: `Converting Any Basis into an Orthogonal One`,
//   content: `The Gram-Schmidt process takes a set of linearly independent vectors and produces an orthogonal (or orthonormal) set spanning the same subspace. It works by sequentially stripping each vector of its components along previously computed directions, leaving only the perpendicular remainder. The result is a constructive proof that orthonormal bases always exist — and the matrix version of this process is the QR decomposition.`,
// }

// const faqQuestions = {
//   obj1: {
//     question: "What does the Gram-Schmidt process do?",
//     answer: "The Gram-Schmidt process converts a set of linearly independent vectors into an orthogonal (or orthonormal) set spanning the same subspace. It works by sequentially subtracting from each vector its projections onto all previously computed orthogonal directions, leaving only the perpendicular remainder.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What is the Gram-Schmidt formula?",
//     answer: "For each vector vⱼ, compute uⱼ = vⱼ − Σ(uᵢ·vⱼ / uᵢ·uᵢ)uᵢ, summing over all previously computed orthogonal vectors u₁ through uⱼ₋₁. Each term subtracts the projection of vⱼ onto one orthogonal direction. Optionally normalize each uⱼ to unit length.",
//     sectionId: "3"
//   },
//   obj3: {
//     question: "What is the QR decomposition?",
//     answer: "The QR decomposition A = QR results from applying Gram-Schmidt to the columns of A. The matrix Q has orthonormal columns (the normalized output of Gram-Schmidt), and R is upper triangular with entries recording the dot products computed during the process.",
//     sectionId: "7"
//   },
//   obj4: {
//     question: "Why is QR better than normal equations for least squares?",
//     answer: "Forming AᵀA squares the condition number of A, amplifying rounding errors. The QR decomposition reduces least squares to the triangular system Rx̂ = Qᵀb, which preserves the original conditioning. This makes QR the standard algorithm in numerical software.",
//     sectionId: "8"
//   },
//   obj5: {
//     question: "What is the difference between classical and modified Gram-Schmidt?",
//     answer: "Classical Gram-Schmidt computes all projections using the original vector vⱼ. Modified Gram-Schmidt updates vⱼ in place after each projection subtraction. The results are identical in exact arithmetic, but modified Gram-Schmidt is significantly more stable in floating-point computation.",
//     sectionId: "9"
//   }
// }

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Gram-Schmidt Process",
//     "description": "The Gram-Schmidt orthogonalization process: algorithm, worked examples, normalization, QR decomposition, least-squares connection, numerical stability, and abstract inner product spaces.",
//     "url": "https://www.learnmathclass.com/linear-algebra/orthogonality/gram-schmidt",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Gram-Schmidt Process"
//     },
//     "teaches": [
//       "Gram-Schmidt orthogonalization algorithm",
//       "Step-by-step projection subtraction",
//       "Normalization to orthonormal sets",
//       "QR decomposition from Gram-Schmidt",
//       "QR-based least-squares solution",
//       "Classical vs modified Gram-Schmidt stability",
//       "Gram-Schmidt on abstract inner product spaces"
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
//         "name": "Orthogonality",
//         "item": "https://www.learnmathclass.com/linear-algebra/orthogonality"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Gram-Schmidt Process",
//         "item": "https://www.learnmathclass.com/linear-algebra/orthogonality/gram-schmidt"
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

//   //  return {
//   //     props:{
//   //        sectionsContent,
//   //        introContent,
//   //         seoData: {
//   //       title: "Gram Schmidt | Learn Math Class",
//   //       description: "Metadescription",
//   //       keywords: keyWords.join(", "),
//   //       url: "/linear-algebra/orthogonality/gram-schmidt",
//   //        name: "name"
//   //     },
        
//   //      }
//   //   }

//   return {
//   props:{
//     sectionsContent,
//     introContent,
//     obj7Table,
//     obj9Table,
//     gramSchmidtSettings,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Gram-Schmidt Process & QR Decomposition | Learn Math Class",
//       description: "The Gram-Schmidt orthogonalization process: algorithm, worked examples, normalization, QR decomposition, least-squares connection, numerical stability, and abstract inner product spaces.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/orthogonality/gram-schmidt",
//       name: "Gram-Schmidt Process"
//     },
//   }
// }
//    }

// // export default function GramSchmidtPage({seoData,sectionsContent , introContent}) {
// export default function GramSchmidtsPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj7Table,
//   obj9Table,
//   gramSchmidtSettings,
//   faqQuestions,
//   schemas,
// }) {

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
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//           <div
//             key={'obj9-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj9Table }}
//           />,
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
//           `What follows is one algorithm listed six times. The steps are identical in every row — subtract the projections onto what has already been processed, then optionally divide by the length. The only thing that varies is which inner product those projections are computed with, and the grouping below separates the familiar dot product from the integrals that replace it elsewhere.`,
//           <DiagramFrame
//             key={'obj11-diagram'}
//             id="gram-schmidt-settings"
//             title="The same algorithm across settings"
//             source="/linear-algebra/orthogonality/gram-schmidt"
//           >
//             <IdentitySheet data={gramSchmidtSettings} theme="navy" variant="ledger" />
//           </DiagramFrame>,
//           `The second group is where the generality earns its keep. Under the integral inner product on $[-1, 1]$ the monomials $1, x, x^2$ are independent but not orthogonal, and orthogonalizing them yields the Legendre polynomials — so those are not a separate construction but simply what this algorithm returns when handed the obvious basis. Under the inner product on $[0, 2\\pi]$, sines and cosines of distinct frequencies are already orthogonal, and the algorithm finds nothing to subtract.`,
//           `That last observation is why a Fourier coefficient is a single integral rather than the solution of a linear system: the basis was orthogonal before anyone asked. The algorithm never inspects what a vector is — it calls the inner product and scalar multiplication and nothing else — which is what lets the same procedure serve tuples, polynomials and functions, and what makes it a constructive proof that every finite-dimensional inner product space has an orthonormal basis.`,
//         ]
//     },
// ]

//   return (
//    <>
//    {/* <Head>
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
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head> */}


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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Gram Schmidt Process</h1>
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



// tables-optimized: v4 | 2026-05-18 | 3 tables (obj7 aggregation, obj9 comparison, obj11 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
import ObjectTypeProfile from '@/app/components/infographics/linear-algebra/ObjectTypeProfile'
import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


export async function getStaticProps(){

 const keyWords = [
  "Gram-Schmidt process",
  "Gram-Schmidt orthogonalization",
  "QR decomposition",
  "orthogonal basis construction",
  "orthonormalization",
  "Gram-Schmidt algorithm",
  "QR factorization",
  "modified Gram-Schmidt",
  "orthogonalize vectors",
  "QR least squares",
  "Legendre polynomials Gram-Schmidt",
  "Householder reflections",
  "orthonormal basis from basis",
  "Gram-Schmidt example"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj7 — aggregation: what the Q and R factors of A = QR contain
const qrFromGramSchmidt = {
  kicker: 'Orthogonality \u00B7 QR',
  title: 'Where each factor comes from',
  tallyLabel: 'factors',
  intro: 'Running Gram\u2013Schmidt on the columns of $A$ produces both factors at once. $Q$ is the output and $R$ is the bookkeeping \u2014 the coefficients that were subtracted along the way, kept rather than discarded.',
  footnote: 'This is why [QR](!/linear-algebra/decompositions/qr) is not a separate algorithm from Gram\u2013Schmidt so much as its record. Every projection coefficient computed during orthogonalization is an entry of $R$, and $R$ is triangular precisely because $\\mathbf{v}_j$ is only ever projected onto vectors that came before it.',
  slots: [
    { key: 'entries',    label: 'entries' },
    { key: 'properties', label: 'properties' },
    { key: 'meaning',    label: 'what it records' },
  ],
  groups: [
    {
      heading: 'The output',
      types: [
        {
          name: 'Q \u2014 orthonormal columns',
          anchor: '#7',
          shape: 'orthogonal',
          condition: '$m \\times n$',
          properties: {
            entries: '$\\mathbf{q}_j = \\mathbf{u}_j / \\|\\mathbf{u}_j\\|$',
            properties: '$Q^{\\mathsf{T}}Q = I_n$',
            meaning: 'an orthonormal basis for $\\operatorname{Col}(A)$',
          },
          note: 'The normalized Gram\u2013Schmidt outputs, in the order they were produced. Note $QQ^{\\mathsf{T}}$ is not the identity but the [projection](!/linear-algebra/orthogonality/projections) matrix onto the column space \u2014 a different object entirely, and a useful one.',
        },
      ],
    },
    {
      heading: 'The bookkeeping',
      types: [
        {
          name: 'R \u2014 upper triangular',
          anchor: '#7',
          shape: 'upper',
          condition: '$n \\times n$',
          properties: {
            entries: '$r_{ij} = \\mathbf{q}_i \\cdot \\mathbf{v}_j$',
            properties: 'diagonal $r_{jj} = \\|\\mathbf{u}_j\\|>0$',
            meaning: 'the coefficients discarded during orthogonalization',
          },
          note: 'Each entry is a projection coefficient computed on the way to $\\mathbf{q}_j$. Triangular because $\\mathbf{v}_j$ is projected only onto earlier vectors, so $r_{ij} = 0$ whenever $i > j$ \u2014 the shape is a consequence of the order, not an extra requirement.',
        },
      ],
    },
  ],
}

// obj9 — comparison: orthogonalization methods by stability and use case
const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Method</th>
      <th style="${tableHeaders.comparison}">How it computes the orthogonal set / QR</th>
      <th style="${tableHeaders.comparison}">Numerical stability</th>
      <th style="${tableHeaders.comparison}">Typical use</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Classical Gram–Schmidt</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">at step j, all projections of the original v<sub>j</sub> onto u<sub>1</sub>, …, u<sub>j−1</sub> are computed and subtracted at once</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">poor — orthogonality can be lost when input vectors are nearly dependent; errors accumulate</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">textbook / illustrative use; abstract inner product spaces where exact arithmetic is available</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Modified Gram–Schmidt</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">v<sub>j</sub> is updated in place after each individual projection is subtracted</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">significantly better than classical; identical result in exact arithmetic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">educational software, moderate-precision floating-point work</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Householder reflections</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a sequence of orthogonal reflections is applied to A to zero out below-diagonal entries column by column</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">backward stable — the gold standard in numerical linear algebra</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">default QR routine in LAPACK, NumPy, MATLAB, and most numerical libraries</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Givens rotations</td>
      <td style="padding: 12px 15px; color: #34495e;">a sequence of 2 × 2 plane rotations zeros out individual entries one at a time</td>
      <td style="padding: 12px 15px; color: #34495e;">backward stable; lets the algorithm target nonzero entries only</td>
      <td style="padding: 12px 15px; color: #34495e;">sparse matrices with structured zeros; updating an existing QR factorization</td>
    </tr>
  </tbody>
</table>
`

// obj11 — summary capstone: Gram–Schmidt across settings (input → IP → output)
// obj11 — the same algorithm across settings, sorted by what the inner product is
const gramSchmidtSettings = {
  kicker: 'Orthogonality \u00B7 Gram\u2013Schmidt',
  title: 'The same algorithm across settings',
  tallyLabel: 'settings',
  intro: 'The procedure never changes \u2014 subtract projections, optionally normalise. What changes from row to row is only the inner product being used, and with it what the word &quot;orthogonal&quot; turns out to mean.',
  footnote: 'The algorithm only ever calls two things: the inner product and scalar multiplication. It never inspects what a vector is, which is why the same code orthogonalizes tuples, polynomials and functions without modification \u2014 and why it constitutes a constructive proof that every finite-dimensional [inner product space](!/linear-algebra/orthogonality/inner-product) has an orthonormal basis.',
  groups: [
    {
      heading: 'The dot product on \u211D\u207F',
      identities: [
        {
          name: 'Orthogonal basis',
          anchor: '#3',
          formula: '$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i<j} \\operatorname{proj}_{\\mathbf{u}_i}(\\mathbf{v}_j)$',
          condition: 'input independent',
          note: 'Each vector loses everything it shares with the ones already processed, leaving the perpendicular remainder. The span is preserved at every prefix, so the output describes the same subspace as the input \u2014 differently oriented, not differently sized.',
        },
        {
          name: 'Orthonormal basis',
          anchor: '#4',
          formula: '$\\mathbf{q}_j = \\mathbf{u}_j / \\|\\mathbf{u}_j\\|$',
          condition: 'one extra division per vector',
          note: 'Normalisation is a separate step and strictly optional \u2014 orthogonality is already achieved. It is worth doing because projection onto an orthonormal set is a bare dot product, with no denominator to carry.',
        },
        {
          name: 'QR decomposition',
          anchor: '#7',
          formula: '$A = QR$, $R$ upper triangular',
          condition: '$A$ of full column rank',
          key: true,
          note: 'Run the algorithm on the columns of $A$ and the outputs are the columns of $Q$; the projection coefficients discarded along the way are exactly the entries of $R$. The factorization is the algorithm with its bookkeeping written down \u2014 see [QR](!/linear-algebra/decompositions/qr).',
        },
      ],
    },
    {
      heading: 'Other inner products',
      identities: [
        {
          name: 'Polynomials',
          anchor: '#10',
          formula: '$\\langle p, q \\rangle = \\int_{-1}^{1} p(x)q(x)\\,dx$',
          condition: 'applied to $\\{1, x, x^2, \\ldots\\}$',
          note: 'The monomials are independent but not orthogonal under this product. Orthogonalizing them produces the Legendre polynomials \u2014 which is to say Legendre polynomials are not a discovery so much as what Gram\u2013Schmidt returns when handed the obvious basis.',
        },
        {
          name: 'Functions',
          anchor: '#10',
          formula: '$\\langle f, g \\rangle = \\int_0^{2\\pi} f(x)g(x)\\,dx$',
          condition: 'sines and cosines',
          note: 'Here the algorithm has almost nothing to do: distinct frequencies are already orthogonal under this product, so it only normalises. That is the fact the Fourier basis rests on, and the reason a Fourier coefficient is a single integral rather than a linear system.',
        },
        {
          name: 'Any inner product space',
          anchor: '#10',
          formula: 'orthonormal $\\{\\mathbf{q}_1, \\ldots, \\mathbf{q}_n\\}$',
          condition: 'finite-dimensional, any $\\langle \\cdot, \\cdot \\rangle$',
          key: true,
          note: 'The general statement the rows above are instances of. Because the algorithm terminates and uses only the axioms, it proves the existence of an orthonormal basis rather than assuming it \u2014 a constructive proof, not an abstract one.',
        },
      ],
    },
  ],
}


// const sectionsContent = {
//   obj1: {
//     title: `The Goal`,
//     content: `The input is a set of [linearly independent](!/linear-algebra/vector-spaces/linear-independence) vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$ in an [inner product](!/linear-algebra/orthogonality/inner-product) space. The output is an [orthogonal](!/linear-algebra/orthogonality/orthogonal-sets) set $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\dots, \\mathbf{u}_k\\}$ satisfying two conditions: the vectors are pairwise perpendicular ($\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ for $i \\neq j$), and they [span](!/linear-algebra/vector-spaces/span) the same subspace ($\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$ at every step $j$).

// Optionally, each $\\mathbf{u}_i$ is normalized to unit length, producing an orthonormal set $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_k\\}$.

// The process is the constructive proof that every finite-dimensional inner product space has an orthonormal [basis](!/linear-algebra/vector-spaces). Given any basis, Gram-Schmidt produces an orthonormal one for the same space.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Algorithm: Two Vectors`,
//     content: `Start with two independent vectors $\\mathbf{v}_1$ and $\\mathbf{v}_2$.

// Set $\\mathbf{u}_1 = \\mathbf{v}_1$.

// Subtract the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{v}_2$ onto $\\mathbf{u}_1$:

// $$\\mathbf{u}_2 = \\mathbf{v}_2 - \\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\,\\mathbf{u}_1$$

// The subtracted term is the component of $\\mathbf{v}_2$ along $\\mathbf{u}_1$. Removing it leaves only the component perpendicular to $\\mathbf{u}_1$, so $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$.

// ## Worked Example

// $\\mathbf{v}_1 = (1, 1, 0)$, $\\mathbf{v}_2 = (1, 0, 1)$.

// $\\mathbf{u}_1 = (1, 1, 0)$. $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1}{2}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{1}{2}(1, 1, 0) = (\\frac{1}{2}, -\\frac{1}{2}, 1)$.

// Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{2} - \\frac{1}{2} + 0 = 0$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Algorithm: General Case`,
//     content: `For $k$ independent vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$:

// $$\\mathbf{u}_1 = \\mathbf{v}_1$$

// $$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\mathbf{u}_i \\cdot \\mathbf{v}_j}{\\mathbf{u}_i \\cdot \\mathbf{u}_i}\\,\\mathbf{u}_i \\qquad \\text{for } j = 2, 3, \\dots, k$$

// At each step, $\\mathbf{v}_j$ has its projections onto all previously computed orthogonal vectors subtracted. What remains is the component of $\\mathbf{v}_j$ perpendicular to $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$.

// Because $\\mathbf{v}_j$ is independent of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}\\}$ — and therefore not in $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ — this perpendicular component is nonzero. So each $\\mathbf{u}_j \\neq \\mathbf{0}$, and the process never breaks down.

// At every stage, $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$. The span is preserved because each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and the earlier $\\mathbf{u}_i$'s (which are themselves combinations of $\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}$).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Normalization`,
//     content: `After computing the orthogonal set $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\}$, normalization produces an orthonormal set:

// $$\\mathbf{q}_i = \\frac{\\mathbf{u}_i}{\\|\\mathbf{u}_i\\|}$$

// Each vector is divided by its length, making $\\|\\mathbf{q}_i\\| = 1$ while preserving direction. The resulting set satisfies $\\mathbf{q}_i \\cdot \\mathbf{q}_j = \\delta_{ij}$.

// Normalization can be done at each step (normalize $\\mathbf{u}_j$ immediately before moving to $\\mathbf{v}_{j+1}$) or all at the end. The result is the same in exact arithmetic. In practice, normalizing at each step is slightly preferable for numerical stability, as it keeps the vectors well-scaled throughout the computation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Worked Example: Three Vectors in R³`,
//     content: `Orthogonalize $\\mathbf{v}_1 = (1, 1, 1)$, $\\mathbf{v}_2 = (1, 0, 1)$, $\\mathbf{v}_3 = (0, 1, 1)$.

// $\\mathbf{u}_1 = (1, 1, 1)$.

// For $\\mathbf{u}_2$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1 + 0 + 1}{3} = \\frac{2}{3}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{2}{3}(1, 1, 1) = (\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3})$.

// Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{3} - \\frac{2}{3} + \\frac{1}{3} = 0$.

// For $\\mathbf{u}_3$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_3}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{0 + 1 + 1}{3} = \\frac{2}{3}$ and $\\frac{\\mathbf{u}_2 \\cdot \\mathbf{v}_3}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2} = \\frac{0 - \\frac{2}{3} + \\frac{1}{3}}{\\frac{1}{9} + \\frac{4}{9} + \\frac{1}{9}} = \\frac{-\\frac{1}{3}}{\\frac{6}{9}} = \\frac{-1}{2}$.

// $\\mathbf{u}_3 = (0, 1, 1) - \\frac{2}{3}(1, 1, 1) - (-\\frac{1}{2})(\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3}) = (0, 1, 1) - (\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}) + (\\frac{1}{6}, -\\frac{1}{3}, \\frac{1}{6}) = (-\\frac{1}{2}, 0, \\frac{1}{2})$.

// Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = -\\frac{1}{2} + 0 + \\frac{1}{2} = 0$ and $\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = -\\frac{1}{6} + 0 + \\frac{1}{6} = 0$.

// Normalizing: $\\|\\mathbf{u}_1\\| = \\sqrt{3}$, $\\|\\mathbf{u}_2\\| = \\sqrt{6}/3$, $\\|\\mathbf{u}_3\\| = 1/\\sqrt{2}$. The orthonormal basis is $\\{\\mathbf{u}_1/\\sqrt{3}, \\; 3\\mathbf{u}_2/\\sqrt{6}, \\; \\sqrt{2}\\,\\mathbf{u}_3\\}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Why It Works`,
//     content: `At each step, $\\mathbf{u}_j$ is constructed as $\\mathbf{v}_j$ minus everything in $\\mathbf{v}_j$ that lies in the subspace $W_{j-1} = \\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$. Since $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ is orthogonal, the projection formula decomposes cleanly into independent terms — one projection per basis vector.

// What remains after subtraction is the component of $\\mathbf{v}_j$ [orthogonal](!/linear-algebra/orthogonality) to $W_{j-1}$. This component is nonzero because $\\mathbf{v}_j \\notin W_{j-1}$ — guaranteed by the independence of the original set.

// The span is preserved at each step. Each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and $\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}$, and each earlier $\\mathbf{u}_i$ is a combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_i$. So $\\mathbf{u}_j \\in \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$, and the reverse inclusion follows because $\\mathbf{v}_j$ can be recovered from $\\mathbf{u}_j$ and the earlier $\\mathbf{u}_i$'s.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `The QR Decomposition`,
//     content: `Applying Gram-Schmidt to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of an $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ (with independent columns) produces the [QR decomposition](!/linear-algebra/decompositions/qr):

// $$A = QR$$

// $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns (the normalized $\\mathbf{q}_i$'s). $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

// The entries of $R$ are the dot products computed during Gram-Schmidt: $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ for $i \\leq j$, and $R_{ij} = 0$ for $i > j$ (because $\\mathbf{a}_j$'s projection onto $\\mathbf{q}_i$ is zero when $i > j$ — that direction hasn't been subtracted yet).

// The factorization captures two complementary pieces of information. $Q$ stores the orthonormal directions. $R$ stores the coefficients that express the original columns in terms of those directions: $\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `QR and Least Squares`,
//     content: `The QR decomposition provides a numerically superior method for solving [least-squares](!/linear-algebra/orthogonality/least-squares) problems.

// The normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ can be rewritten using $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (which is invertible since $R$ has positive diagonal):

// $$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

// This is an upper triangular system, solved by back substitution. The computation $Q^T\\mathbf{b}$ is just $n$ dot products (one per column of $Q$).

// The QR approach avoids forming $A^TA$ explicitly. This matters because the condition number of $A^TA$ is the square of the condition number of $A$ — squaring amplifies rounding errors. Working with $Q$ and $R$ directly preserves the original conditioning and is the standard method for least squares in numerical software.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Numerical Stability`,
//     content: `Classical Gram-Schmidt (as presented above) can lose orthogonality in floating-point arithmetic. When the input vectors are nearly dependent, the computed $\\mathbf{u}_j$'s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

// Modified Gram-Schmidt addresses this by reorganizing the computation. Instead of computing all projections using the original $\\mathbf{v}_j$, modified Gram-Schmidt updates $\\mathbf{v}_j$ in place after each projection is subtracted. At step $j$, first subtract the projection onto $\\mathbf{u}_1$ from $\\mathbf{v}_j$, then subtract the projection onto $\\mathbf{u}_2$ from the updated $\\mathbf{v}_j$, and so on. The mathematical result is identical in exact arithmetic, but the modified version is significantly more stable numerically.

// Householder reflections provide an even more robust alternative for computing the QR factorization. Householder-based QR achieves backward stability — the gold standard in numerical linear algebra — and is the default algorithm in most software libraries.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Gram-Schmidt on Abstract Inner Product Spaces`,
//     content: `The algorithm works in any [inner product](!/linear-algebra/orthogonality/inner-product) space — the dot product is replaced by the general inner product $\\langle \\cdot, \\cdot \\rangle$, and the formulas are otherwise identical:

// $$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\langle \\mathbf{u}_i, \\mathbf{v}_j \\rangle}{\\langle \\mathbf{u}_i, \\mathbf{u}_i \\rangle}\\,\\mathbf{u}_i$$

// Orthogonalizing $\\{1, x, x^2\\}$ in the polynomial space $\\mathcal{P}_2$ with the inner product $\\langle p, q \\rangle = \\int_{-1}^{1} p(x)q(x)\\,dx$ produces the Legendre polynomials (up to normalization): $P_0(x) = 1$, $P_1(x) = x$, $P_2(x) = \\frac{1}{2}(3x^2 - 1)$. The polynomial $x$ is already orthogonal to $1$ under this inner product (the integral of an odd function over a symmetric interval is zero), so the first subtraction has no effect.

// On the function space $C[0, 2\\pi]$ with $\\langle f, g \\rangle = \\int_0^{2\\pi} f(x)g(x)\\,dx$, orthogonalizing appropriate function sets produces Fourier bases. The algorithm is identical in structure to the $\\mathbb{R}^n$ version — only the inner product changes.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Summary: Gram-Schmidt Across Settings`,
//     content: `Gram-Schmidt operates uniformly across many settings — ℝⁿ with the standard dot product, polynomial spaces with integral inner products, function spaces in Fourier analysis, and abstract inner product spaces in general. The table below collects the main contexts in which the process is applied, alongside the input, the inner product used, and what the algorithm produces in each case.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }

// formulas-injected: v1 | 2026-06-16 | 1 callout (obj3 gram_schmidt_process direct)

const sectionsContent = {
  obj1: {
    title: `The Goal`,
    content: `The input is a set of [linearly independent](!/linear-algebra/vector-spaces/linear-independence) vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$ in an [inner product](!/linear-algebra/orthogonality/inner-product) space. The output is an [orthogonal](!/linear-algebra/orthogonality/orthogonal-sets) set $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\dots, \\mathbf{u}_k\\}$ satisfying two conditions: the vectors are pairwise perpendicular ($\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ for $i \\neq j$), and they [span](!/linear-algebra/vector-spaces/span) the same subspace ($\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$ at every step $j$).

Optionally, each $\\mathbf{u}_i$ is normalized to unit length, producing an orthonormal set $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_k\\}$.

The process is the constructive proof that every finite-dimensional inner product space has an orthonormal [basis](!/linear-algebra/vector-spaces). Given any basis, Gram-Schmidt produces an orthonormal one for the same space.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Algorithm: Two Vectors`,
    content: `Start with two independent vectors $\\mathbf{v}_1$ and $\\mathbf{v}_2$.

Set $\\mathbf{u}_1 = \\mathbf{v}_1$.

Subtract the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{v}_2$ onto $\\mathbf{u}_1$:

$$\\mathbf{u}_2 = \\mathbf{v}_2 - \\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\,\\mathbf{u}_1$$

The subtracted term is the component of $\\mathbf{v}_2$ along $\\mathbf{u}_1$. Removing it leaves only the component perpendicular to $\\mathbf{u}_1$, so $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$.

## Worked Example

$\\mathbf{v}_1 = (1, 1, 0)$, $\\mathbf{v}_2 = (1, 0, 1)$.

$\\mathbf{u}_1 = (1, 1, 0)$. $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1}{2}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{1}{2}(1, 1, 0) = (\\frac{1}{2}, -\\frac{1}{2}, 1)$.

Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{2} - \\frac{1}{2} + 0 = 0$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Algorithm: General Case`,
    content: `For $k$ independent vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$:

$$\\mathbf{u}_1 = \\mathbf{v}_1$$

@academic[formula_callout:gram_schmidt_process|Gram-Schmidt Process|$$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\mathbf{u}_i \\cdot \\mathbf{v}_j}{\\mathbf{u}_i \\cdot \\mathbf{u}_i}\\,\\mathbf{u}_i \\quad \\text{for } j = 2, 3, \\dots, k$$]@
@academic[formulas_link:/linear-algebra/formulas#gram_schmidt_process]@

At each step, $\\mathbf{v}_j$ has its projections onto all previously computed orthogonal vectors subtracted. What remains is the component of $\\mathbf{v}_j$ perpendicular to $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$.

Because $\\mathbf{v}_j$ is independent of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}\\}$ — and therefore not in $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ — this perpendicular component is nonzero. So each $\\mathbf{u}_j \\neq \\mathbf{0}$, and the process never breaks down.

At every stage, $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$. The span is preserved because each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and the earlier $\\mathbf{u}_i$&apos;s (which are themselves combinations of $\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}$).`,
    before: ``,
    after: ``,
    link: ``,
  },

  notation: {
    title: `Gram-Schmidt Notation`,
    lead: `An algorithm's notation has to record not just what the objects are but the order they were built in — so this page runs three letters for three stages of the same vector, and a sum whose upper limit moves with the step it appears in. All catalogued among the [linear algebra symbols](!/math-symbols/linear-algebra).`,
    inherited: `$\\operatorname{proj}$ and its subscript come from [projection notation](!/linear-algebra/orthogonality/projections#notation); the dot from [dot product notation](!/linear-algebra/vectors/dot-product#notation); $\\|\\mathbf{v}\\|$ and the unit hat from [norm notation](!/linear-algebra/vectors/magnitude#notation); $\\operatorname{Span}$ from [span notation](!/linear-algebra/vector-spaces/span#notation); $\\delta_{ij}$ and $Q$ from [orthogonal set notation](!/linear-algebra/orthogonality/orthogonal-sets#notation).`,
    entries: [
      {
        id: 'letter-pipeline',
        tex: `$\\mathbf{v}_j \\to \\mathbf{u}_j \\to \\mathbf{e}_j$`,
        read: `input, orthogonalised, normalised`,
        means: `Three letters for three stages of the same vector: $\\mathbf{v}_j$ is what you started with, $\\mathbf{u}_j$ what survives after the projections are removed, and $\\mathbf{e}_j$ the unit version — **Normalization** below performs that last step. The subscript stays fixed across all three; only the letter records how far the vector has been processed.`,
        cases: `Sources that skip the orthogonal stage write $\\mathbf{q}_j$ directly for the normalised output, matching the $Q$ of the decomposition below; others reuse $\\mathbf{v}_j$ throughout and overwrite in place, which is how the algorithm is actually implemented but loses the ability to refer to an earlier stage.`,
        confusedWith: `$\\mathbf{e}_j$ as a standard basis vector. Here it is the $j$-th vector **this process produced**, not the $j$-th axis — the letter is borrowed for "unit vector", and only the surrounding construction says which unit vector is meant.`,
      },
      {
        id: 'moving-upper-limit',
        tex: `$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\operatorname{proj}_{\\mathbf{u}_i}(\\mathbf{v}_j)$`,
        read: `subtract the projections onto everything built so far`,
        means: `The upper limit is the notational content: $j-1$ means **everything already constructed**, so the sum's length grows as the algorithm proceeds and the formula refers to its own earlier outputs. This is a recursive definition written as a formula, not a closed expression.`,
        cases: `The first step is the empty case — at $j = 1$ the sum has no terms, which is why $\\mathbf{u}_1 = \\mathbf{v}_1$ needs no separate rule; and the projections are onto the $\\mathbf{u}_i$, never the $\\mathbf{v}_i$, which is the one substitution that silently breaks the algorithm.`,
        confusedWith: `A fixed sum over all $k$ vectors. Reading the limit as $k$ rather than $j-1$ asks the formula to use vectors that do not exist yet — the range is the whole reason the construction terminates.`,
      },
      {
        id: 'qr-contract',
        tex: `$A = QR$`,
        read: `A factors into an orthonormal Q and an upper-triangular R`,
        means: `Letters as a contract, in the family pattern [decomposition notation](!/linear-algebra/decompositions/svd#notation) describes: $Q$ carries the orthonormal columns this process produces, $R$ collects the coefficients it discarded along the way — **The QR Decomposition** below reads them off directly.`,
        cases: `$R$ comes out upper triangular for a reason the notation encodes: $\\mathbf{v}_j$ is built only from $\\mathbf{u}_1, \\dots, \\mathbf{u}_j$, so every entry below the diagonal is a coefficient that was never used.`,
        confusedWith: `$R$ as the real numbers. Blackboard $\\mathbb{R}$ is the field; italic $R$ here is one specific triangular matrix, and the two sit close together in exactly the equations where both appear.`,
      },
    ],
    symbolsHref: `/math-symbols/linear-algebra`,
    symbolsLabel: `All linear algebra symbols`,
    parentHref: `/linear-algebra/orthogonality`,
    parentLabel: `Orthogonality`,
    before: ``,
    after: ``,
    link: ``,
  },

  obj4: {
    title: `Normalization`,
    content: `After computing the orthogonal set $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\}$, normalization produces an orthonormal set:

$$\\mathbf{q}_i = \\frac{\\mathbf{u}_i}{\\|\\mathbf{u}_i\\|}$$

Each vector is divided by its length, making $\\|\\mathbf{q}_i\\| = 1$ while preserving direction. The resulting set satisfies $\\mathbf{q}_i \\cdot \\mathbf{q}_j = \\delta_{ij}$.

Normalization can be done at each step (normalize $\\mathbf{u}_j$ immediately before moving to $\\mathbf{v}_{j+1}$) or all at the end. The result is the same in exact arithmetic. In practice, normalizing at each step is slightly preferable for numerical stability, as it keeps the vectors well-scaled throughout the computation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Worked Example: Three Vectors in R³`,
    content: `Orthogonalize $\\mathbf{v}_1 = (1, 1, 1)$, $\\mathbf{v}_2 = (1, 0, 1)$, $\\mathbf{v}_3 = (0, 1, 1)$.

$\\mathbf{u}_1 = (1, 1, 1)$.

For $\\mathbf{u}_2$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1 + 0 + 1}{3} = \\frac{2}{3}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{2}{3}(1, 1, 1) = (\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3})$.

Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{3} - \\frac{2}{3} + \\frac{1}{3} = 0$.

For $\\mathbf{u}_3$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_3}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{0 + 1 + 1}{3} = \\frac{2}{3}$ and $\\frac{\\mathbf{u}_2 \\cdot \\mathbf{v}_3}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2} = \\frac{0 - \\frac{2}{3} + \\frac{1}{3}}{\\frac{1}{9} + \\frac{4}{9} + \\frac{1}{9}} = \\frac{-\\frac{1}{3}}{\\frac{6}{9}} = \\frac{-1}{2}$.

$\\mathbf{u}_3 = (0, 1, 1) - \\frac{2}{3}(1, 1, 1) - (-\\frac{1}{2})(\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3}) = (0, 1, 1) - (\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}) + (\\frac{1}{6}, -\\frac{1}{3}, \\frac{1}{6}) = (-\\frac{1}{2}, 0, \\frac{1}{2})$.

Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = -\\frac{1}{2} + 0 + \\frac{1}{2} = 0$ and $\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = -\\frac{1}{6} + 0 + \\frac{1}{6} = 0$.

Normalizing: $\\|\\mathbf{u}_1\\| = \\sqrt{3}$, $\\|\\mathbf{u}_2\\| = \\sqrt{6}/3$, $\\|\\mathbf{u}_3\\| = 1/\\sqrt{2}$. The orthonormal basis is $\\{\\mathbf{u}_1/\\sqrt{3}, \\; 3\\mathbf{u}_2/\\sqrt{6}, \\; \\sqrt{2}\\,\\mathbf{u}_3\\}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Why It Works`,
    content: `At each step, $\\mathbf{u}_j$ is constructed as $\\mathbf{v}_j$ minus everything in $\\mathbf{v}_j$ that lies in the subspace $W_{j-1} = \\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$. Since $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ is orthogonal, the projection formula decomposes cleanly into independent terms — one projection per basis vector.

What remains after subtraction is the component of $\\mathbf{v}_j$ [orthogonal](!/linear-algebra/orthogonality) to $W_{j-1}$. This component is nonzero because $\\mathbf{v}_j \\notin W_{j-1}$ — guaranteed by the independence of the original set.

The span is preserved at each step. Each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and $\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}$, and each earlier $\\mathbf{u}_i$ is a combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_i$. So $\\mathbf{u}_j \\in \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$, and the reverse inclusion follows because $\\mathbf{v}_j$ can be recovered from $\\mathbf{u}_j$ and the earlier $\\mathbf{u}_i$&apos;s.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The QR Decomposition`,
    content: `Applying Gram-Schmidt to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of an $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ (with independent columns) produces the [QR decomposition](!/linear-algebra/decompositions/qr):

$$A = QR$$

$Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns (the normalized $\\mathbf{q}_i$&apos;s). $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

The entries of $R$ are the dot products computed during Gram-Schmidt: $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ for $i \\leq j$, and $R_{ij} = 0$ for $i > j$ (because $\\mathbf{a}_j$&apos;s projection onto $\\mathbf{q}_i$ is zero when $i > j$ — that direction hasn&apos;t been subtracted yet).

The factorization captures two complementary pieces of information. $Q$ stores the orthonormal directions. $R$ stores the coefficients that express the original columns in terms of those directions: $\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `QR and Least Squares`,
    content: `The QR decomposition provides a numerically superior method for solving [least-squares](!/linear-algebra/orthogonality/least-squares) problems.

The normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ can be rewritten using $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (which is invertible since $R$ has positive diagonal):

$$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

This is an upper triangular system, solved by back substitution. The computation $Q^T\\mathbf{b}$ is just $n$ dot products (one per column of $Q$).

The QR approach avoids forming $A^TA$ explicitly. This matters because the condition number of $A^TA$ is the square of the condition number of $A$ — squaring amplifies rounding errors. Working with $Q$ and $R$ directly preserves the original conditioning and is the standard method for least squares in numerical software.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Numerical Stability`,
    content: `Classical Gram-Schmidt (as presented above) can lose orthogonality in floating-point arithmetic. When the input vectors are nearly dependent, the computed $\\mathbf{u}_j$&apos;s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

Modified Gram-Schmidt addresses this by reorganizing the computation. Instead of computing all projections using the original $\\mathbf{v}_j$, modified Gram-Schmidt updates $\\mathbf{v}_j$ in place after each projection is subtracted. At step $j$, first subtract the projection onto $\\mathbf{u}_1$ from $\\mathbf{v}_j$, then subtract the projection onto $\\mathbf{u}_2$ from the updated $\\mathbf{v}_j$, and so on. The mathematical result is identical in exact arithmetic, but the modified version is significantly more stable numerically.

Householder reflections provide an even more robust alternative for computing the QR factorization. Householder-based QR achieves backward stability — the gold standard in numerical linear algebra — and is the default algorithm in most software libraries.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Gram-Schmidt on Abstract Inner Product Spaces`,
    content: `The algorithm works in any [inner product](!/linear-algebra/orthogonality/inner-product) space — the dot product is replaced by the general inner product $\\langle \\cdot, \\cdot \\rangle$, and the formulas are otherwise identical:

$$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\langle \\mathbf{u}_i, \\mathbf{v}_j \\rangle}{\\langle \\mathbf{u}_i, \\mathbf{u}_i \\rangle}\\,\\mathbf{u}_i$$

Orthogonalizing $\\{1, x, x^2\\}$ in the polynomial space $\\mathcal{P}_2$ with the inner product $\\langle p, q \\rangle = \\int_{-1}^{1} p(x)q(x)\\,dx$ produces the Legendre polynomials (up to normalization): $P_0(x) = 1$, $P_1(x) = x$, $P_2(x) = \\frac{1}{2}(3x^2 - 1)$. The polynomial $x$ is already orthogonal to $1$ under this inner product (the integral of an odd function over a symmetric interval is zero), so the first subtraction has no effect.

On the function space $C[0, 2\\pi]$ with $\\langle f, g \\rangle = \\int_0^{2\\pi} f(x)g(x)\\,dx$, orthogonalizing appropriate function sets produces Fourier bases. The algorithm is identical in structure to the $\\mathbb{R}^n$ version — only the inner product changes.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Summary: Gram-Schmidt Across Settings`,
    content: `Gram-Schmidt operates uniformly across many settings — ℝⁿ with the standard dot product, polynomial spaces with integral inner products, function spaces in Fourier analysis, and abstract inner product spaces in general. The table below collects the main contexts in which the process is applied, alongside the input, the inner product used, and what the algorithm produces in each case.`,
    before: ``,
    after: ``,
    link: ``,
  },
}



 const introContent = {
  title: `Converting Any Basis into an Orthogonal One`,
  content: `The Gram-Schmidt process takes a set of linearly independent vectors and produces an orthogonal (or orthonormal) set spanning the same subspace. It works by sequentially stripping each vector of its components along previously computed directions, leaving only the perpendicular remainder. The result is a constructive proof that orthonormal bases always exist — and the matrix version of this process is the QR decomposition.`,
}

const faqQuestions = {
  obj1: {
    question: "What does the Gram-Schmidt process do?",
    answer: "The Gram-Schmidt process converts a set of linearly independent vectors into an orthogonal (or orthonormal) set spanning the same subspace. It works by sequentially subtracting from each vector its projections onto all previously computed orthogonal directions, leaving only the perpendicular remainder.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the Gram-Schmidt formula?",
    answer: "For each vector vⱼ, compute uⱼ = vⱼ − Σ(uᵢ·vⱼ / uᵢ·uᵢ)uᵢ, summing over all previously computed orthogonal vectors u₁ through uⱼ₋₁. Each term subtracts the projection of vⱼ onto one orthogonal direction. Optionally normalize each uⱼ to unit length.",
    sectionId: "3"
  },
  obj3: {
    question: "What is the QR decomposition?",
    answer: "The QR decomposition A = QR results from applying Gram-Schmidt to the columns of A. The matrix Q has orthonormal columns (the normalized output of Gram-Schmidt), and R is upper triangular with entries recording the dot products computed during the process.",
    sectionId: "7"
  },
  obj4: {
    question: "Why is QR better than normal equations for least squares?",
    answer: "Forming AᵀA squares the condition number of A, amplifying rounding errors. The QR decomposition reduces least squares to the triangular system Rx̂ = Qᵀb, which preserves the original conditioning. This makes QR the standard algorithm in numerical software.",
    sectionId: "8"
  },
  obj5: {
    question: "What is the difference between classical and modified Gram-Schmidt?",
    answer: "Classical Gram-Schmidt computes all projections using the original vector vⱼ. Modified Gram-Schmidt updates vⱼ in place after each projection subtraction. The results are identical in exact arithmetic, but modified Gram-Schmidt is significantly more stable in floating-point computation.",
    sectionId: "9"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Gram-Schmidt Process",
    "description": "The Gram-Schmidt orthogonalization process: algorithm, worked examples, normalization, QR decomposition, least-squares connection, numerical stability, and abstract inner product spaces.",
    "url": "https://www.learnmathclass.com/linear-algebra/orthogonality/gram-schmidt",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Gram-Schmidt Process"
    },
    "teaches": [
      "Gram-Schmidt orthogonalization algorithm",
      "Step-by-step projection subtraction",
      "Normalization to orthonormal sets",
      "QR decomposition from Gram-Schmidt",
      "QR-based least-squares solution",
      "Classical vs modified Gram-Schmidt stability",
      "Gram-Schmidt on abstract inner product spaces"
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
        "name": "Orthogonality",
        "item": "https://www.learnmathclass.com/linear-algebra/orthogonality"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Gram-Schmidt Process",
        "item": "https://www.learnmathclass.com/linear-algebra/orthogonality/gram-schmidt"
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

  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Gram Schmidt | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/linear-algebra/orthogonality/gram-schmidt",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props:{
    sectionsContent,
    introContent,
    qrFromGramSchmidt,
    obj9Table,
    gramSchmidtSettings,
    faqQuestions,
    schemas,
    seoData: {
      title: "Gram-Schmidt Process & QR Decomposition | Learn Math Class",
      description: "The Gram-Schmidt orthogonalization process: algorithm, worked examples, normalization, QR decomposition, least-squares connection, numerical stability, and abstract inner product spaces.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/orthogonality/gram-schmidt",
      name: "Gram-Schmidt Process"
    },
  }
}
   }

// export default function GramSchmidtPage({seoData,sectionsContent , introContent}) {
export default function GramSchmidtsPage({
  seoData,
  sectionsContent,
  introContent,
  qrFromGramSchmidt,
  obj9Table,
  gramSchmidtSettings,
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
        ]
    },
    {
        id:'notation',
        title:sectionsContent.notation.title,
        link:'',
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
          <DiagramFrame
            key={'obj7-diagram'}
            id="qr-from-gram-schmidt"
            title="Where each factor comes from"
            source="/linear-algebra/orthogonality/gram-schmidt"
          >
            <ObjectTypeProfile data={qrFromGramSchmidt} theme="navy" variant="grid" />
          </DiagramFrame>,
          `The triangularity of $R$ is worth seeing as a consequence rather than a condition. At step $j$ the algorithm projects $\\mathbf{v}_j$ onto $\\mathbf{q}_1, \\ldots, \\mathbf{q}_{j-1}$ and no others, so every coefficient with $i > j$ is zero because that projection was never computed. Nothing was imposed on the shape — it fell out of processing the columns in order.`,
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
          <div
            key={'obj9-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj9Table }}
          />,
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
          `What follows is one algorithm listed six times. The steps are identical in every row — subtract the projections onto what has already been processed, then optionally divide by the length. The only thing that varies is which inner product those projections are computed with, and the grouping below separates the familiar dot product from the integrals that replace it elsewhere.`,
          <DiagramFrame
            key={'obj11-diagram'}
            id="gram-schmidt-settings"
            title="The same algorithm across settings"
            source="/linear-algebra/orthogonality/gram-schmidt"
          >
            <IdentitySheet data={gramSchmidtSettings} theme="navy" variant="ledger" />
          </DiagramFrame>,
          `The second group is where the generality earns its keep. Under the integral inner product on $[-1, 1]$ the monomials $1, x, x^2$ are independent but not orthogonal, and orthogonalizing them yields the Legendre polynomials — so those are not a separate construction but simply what this algorithm returns when handed the obvious basis. Under the inner product on $[0, 2\\pi]$, sines and cosines of distinct frequencies are already orthogonal, and the algorithm finds nothing to subtract.`,
          `That last observation is why a Fourier coefficient is a single integral rather than the solution of a linear system: the basis was orthogonal before anyone asked. The algorithm never inspects what a vector is — it calls the inner product and scalar multiplication and nothing else — which is what lets the same procedure serve tuples, polynomials and functions, and what makes it a constructive proof that every finite-dimensional inner product space has an orthonormal basis.`,
        ]
    },
]

  return (
   <>
   {/* <Head>
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head> */}


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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Gram Schmidt Process</h1>
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