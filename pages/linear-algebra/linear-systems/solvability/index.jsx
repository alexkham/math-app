
// // // tables-optimized: v4 | 2026-05-18 | 3 tables (obj8 aggregation, obj10 aggregation, obj11 summary capstone)
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
// // const keyWords = [
// //   "solvability linear systems",
// //   "existence uniqueness solutions",
// //   "Rouché-Capelli theorem",
// //   "rank condition solvability",
// //   "consistent inconsistent system",
// //   "overdetermined system",
// //   "underdetermined system",
// //   "unique solution condition",
// //   "infinitely many solutions",
// //   "column space solvability",
// //   "solution set structure",
// //   "affine subspace coset",
// //   "square system determinant",
// //   "least squares overdetermined"
// // ]

// // const linkStyle = 'color: inherit; text-decoration: underline;'

// // // ---------- TABLES ----------

// // // obj8 — aggregation: solvability behavior by matrix shape, consolidating obj6 / obj7 / obj8
// // const obj8Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.aggregation}">Shape</th>
// //       <th style="${tableHeaders.aggregation}">Distinguishing condition</th>
// //       <th style="${tableHeaders.aggregation}">Existence for a given b</th>
// //       <th style="${tableHeaders.aggregation}">Uniqueness</th>
// //       <th style="${tableHeaders.aggregation}">Practical approach</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square (m = n), det(A) ≠ 0</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) = n; A invertible</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always exists for every b</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always unique</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = A⁻¹b; or Gaussian elimination</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square (m = n), det(A) = 0</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) &lt; n; A singular</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">depends on b — exists iff b ∈ Col(A)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">never unique (when it exists)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row reduce [A | b]; compare ranks</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Overdetermined (m &gt; n)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is tall; column space is a proper subspace of ℝᵐ</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unusual — most b fall outside Col(A)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unique when it exists and rank(A) = n</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when inconsistent: <a href="/linear-algebra/orthogonality/least-squares" style="${linkStyle}">least squares</a> via AᵀA x̂ = Aᵀb</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Underdetermined (m &lt; n)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">A is wide; rank ≤ m &lt; n forces free variables</td>
// //       <td style="padding: 12px 15px; color: #34495e;">depends on b — exists iff rank(A) = rank([A | b])</td>
// //       <td style="padding: 12px 15px; color: #34495e;">never unique; at least n − m free parameters</td>
// //       <td style="padding: 12px 15px; color: #34495e;">minimum-norm via pseudoinverse Aᵀ(AAᵀ)⁻¹b, or other selection criterion</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // obj10 — aggregation: the solution-set decomposition x = xp + xh
// // const obj10Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sed-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.aggregation}">Component</th>
// //       <th style="${tableHeaders.aggregation}">Symbol</th>
// //       <th style="${tableHeaders.aggregation}">Where it comes from</th>
// //       <th style="${tableHeaders.aggregation}">What it captures</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Particular solution</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>p</sub></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any one vector satisfying A x<sub>p</sub> = b</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the &quot;forced&quot; part; the response to the right-hand side b</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Homogeneous part</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>h</sub></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any vector in Null(A), i.e. A x<sub>h</sub> = 0</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the &quot;free&quot; directions along which the solution can shift</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Complete solution</td>
// //       <td style="padding: 12px 15px; color: #34495e;">x = x<sub>p</sub> + x<sub>h</sub></td>
// //       <td style="padding: 12px 15px; color: #34495e;">sum over all x<sub>h</sub> ∈ Null(A)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">affine flat of dimension n − rank(A) through x<sub>p</sub></td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // obj11 — summary capstone: solvability questions and answers
// // const summaryTable = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.summary}">Question about A x = b</th>
// //       <th style="${tableHeaders.summary}">Answer</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Does a solution exist?</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes ⟺ rank(A) = rank([A | b]); equivalently, b ∈ Col(A) (Rouché–Capelli)</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">If so, is the solution unique?</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes ⟺ rank(A) = n; equivalently, Null(A) = {0} (no free variables)</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What does the solution set look like?</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{x<sub>p</sub> + x<sub>h</sub> : x<sub>h</sub> ∈ Null(A)} — affine flat of dimension n − rank(A)</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">A is square with det(A) ≠ 0?</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unique solution for every b: x = A⁻¹b</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Overdetermined (m &gt; n) and no exact solution?</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use least squares: x̂ minimizes ‖Ax − b‖² via AᵀA x̂ = Aᵀb</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Underdetermined (m &lt; n), need a specific x?</td>
// //       <td style="padding: 12px 15px; color: #34495e;">apply a selection criterion: minimum norm via the pseudoinverse, or sparsity, or physical constraints</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `


// // // const sectionsContent = {
// // //   obj1: {
// // //     title: `The Two Questions`,
// // //     content: `Given the system $A\\mathbf{x} = \\mathbf{b}$ with $A$ of size $m \\times n$, two logically independent questions arise.

// // // Existence: is there at least one vector $\\mathbf{x}$ satisfying $A\\mathbf{x} = \\mathbf{b}$? This asks whether $\\mathbf{b}$ lies in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // Uniqueness: if a solution exists, is it the only one? This asks whether the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ is trivial.

// // // The two questions are independent — existence can hold without uniqueness, and non-existence makes uniqueness moot. Both are answered by the [rank](!/linear-algebra/matrix/rank) of $A$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj2: {
// // //     title: `The Existence Condition`,
// // //     content: `The system $A\\mathbf{x} = \\mathbf{b}$ has at least one solution if and only if

// // // $$\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$$

// // // When this condition holds, $\\mathbf{b}$ is already a linear combination of the columns of $A$, so appending $\\mathbf{b}$ as an extra column does not introduce a new independent direction — the rank stays the same.

// // // When the condition fails — $\\text{rank}([A \\mid \\mathbf{b}]) > \\text{rank}(A)$ — the vector $\\mathbf{b}$ is not in the column space. In the [echelon form](!/linear-algebra/linear-systems/echelon-form) of the augmented matrix, this appears as a row $[0 \\; 0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$: the equation $0 = d$ has no solution, and the system is inconsistent.

// // // Since appending one column can increase the rank by at most $1$, the only possibilities are $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A)$ (consistent) or $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A) + 1$ (inconsistent).`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj3: {
// // //     title: `The Uniqueness Condition`,
// // //     content: `When a solution exists, it is unique if and only if

// // // $$\\text{rank}(A) = n$$

// // // where $n$ is the number of unknowns. Full column rank means every column of $A$ contains a pivot, leaving no free variables. The null space is $\\{\\mathbf{0}\\}$, so the particular solution $\\mathbf{x}_p$ stands alone with nothing to add.

// // // When $\\text{rank}(A) < n$, there are $n - \\text{rank}(A)$ free variables. Each free variable parametrizes a direction along which the solution can move without violating the equations. The solution set is infinite — a translated copy of the null space, which has dimension $n - \\text{rank}(A)$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj4: {
// // //     title: `The Three Cases Combined`,
// // //     content: `Putting existence and uniqueness together, every linear system falls into exactly one of three cases.

// // // $\\text{rank}(A) < \\text{rank}([A \\mid \\mathbf{b}])$: no solution. The system is inconsistent.

// // // $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) = n$: exactly one solution. The system is consistent and fully determined.

// // // $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) < n$: infinitely many solutions. The system is consistent but underdetermined, with $n - \\text{rank}(A)$ free parameters.

// // // There is no case with a finite number of solutions greater than one. If two distinct solutions exist, their difference lies in the null space, which is a [subspace](!/linear-algebra/vector-spaces/subspaces) — and a nontrivial subspace contains infinitely many vectors, generating infinitely many solutions.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj5: {
// // //     title: `The Rouché–Capelli Theorem`,
// // //     content: `The existence condition $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$ is known as the Rouché–Capelli theorem (or the Kronecker–Capelli theorem in some traditions). It states:

// // // The system $A\\mathbf{x} = \\mathbf{b}$ is consistent if and only if the coefficient matrix and the augmented matrix have the same rank. When consistent, the solution set has dimension $n - \\text{rank}(A)$.

// // // The theorem unifies the existence and dimension questions into a single rank comparison. It applies to every linear system regardless of the shape of $A$ — square, tall, or wide. The proof follows directly from the column-space interpretation: $\\mathbf{b} \\in \\text{Col}(A)$ if and only if adding $\\mathbf{b}$ as a column does not increase the rank.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj6: {
// // //     title: `Square Systems`,
// // //     content: `When $A$ is $n \\times n$, the [determinant](!/linear-algebra/determinants) provides the sharpest diagnostic.

// // // If $\\det(A) \\neq 0$: the matrix is [invertible](!/linear-algebra/matrix/inverse), the rank is $n$, and the system $A\\mathbf{x} = \\mathbf{b}$ has exactly one solution for every $\\mathbf{b}$. The solution is $\\mathbf{x} = A^{-1}\\mathbf{b}$, or equivalently, the solution obtained by [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Existence and uniqueness both hold universally — the right-hand side does not matter.

// // // If $\\det(A) = 0$: the matrix is singular, the rank is less than $n$, and the outcome depends on $\\mathbf{b}$. For some $\\mathbf{b}$ (those in the column space), infinitely many solutions exist. For other $\\mathbf{b}$ (those outside the column space), no solution exists. The determinant test determines whether the coefficient matrix is adequate; the rank comparison with the augmented matrix determines whether the specific $\\mathbf{b}$ is reachable.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj7: {
// // //     title: `Overdetermined Systems`,
// // //     content: `When $m > n$ — more equations than unknowns — the system is overdetermined. The coefficient matrix is tall, and generically, no solution exists.

// // // The column space of $A$ is at most $n$-dimensional inside $\\mathbb{R}^m$. When $m > n$, this column space is a proper subspace — most vectors in $\\mathbb{R}^m$ lie outside it. A randomly chosen $\\mathbf{b}$ will almost certainly not be in the column space, making the system inconsistent.

// // // A solution exists only when $\\mathbf{b}$ happens to lie in the column space — when the extra equations are consistent with the first $n$. When a solution does exist and $\\text{rank}(A) = n$, it is unique.

// // // When no exact solution exists, the [least-squares](!/linear-algebra/orthogonality/least-squares) approach finds the $\\hat{\\mathbf{x}}$ that minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ — the closest approximation. The least-squares solution satisfies the normal equations $A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}$ and is the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{b}$ onto the column space.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj8: {
// // //     title: `Underdetermined Systems`,
// // //     content: `When $m < n$ — fewer equations than unknowns — the system is underdetermined. If a solution exists, it is never unique: the rank cannot exceed $m$, which is less than $n$, so at least $n - m$ free variables remain.

// // // The solution set, when nonempty, is an affine subspace of dimension at least $n - m$. Multiple vectors $\\mathbf{x}$ satisfy the equations, and additional criteria beyond the linear system itself are needed to select a preferred one.

// // // Common selection criteria include minimum norm (the $\\mathbf{x}$ closest to $\\mathbf{0}$, given by the pseudoinverse $\\mathbf{x} = A^T(AA^T)^{-1}\\mathbf{b}$), sparsity (the $\\mathbf{x}$ with the fewest nonzero entries, central to compressed sensing), and physical constraints (bounds or nonnegativity in engineering applications).

// // // Underdetermined systems are not defective — they arise naturally whenever a problem has more degrees of freedom than constraints. The linear system identifies the feasible set; the selection criterion picks a point within it.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj9: {
// // //     title: `Geometric Interpretation`,
// // //     content: `Each equation $a_{i1}x_1 + a_{i2}x_2 + \\cdots + a_{in}x_n = b_i$ defines a hyperplane in $\\mathbb{R}^n$ — a flat set of dimension $n - 1$. The solution set of the full system is the intersection of all $m$ hyperplanes.

// // // When the system is inconsistent, the hyperplanes have no common point. In $\\mathbb{R}^2$ this means parallel lines. In $\\mathbb{R}^3$ it can mean parallel planes, or planes arranged in a triangular prism where each pair intersects but no point lies on all three.

// // // When the system has a unique solution, the hyperplanes meet at a single point. This requires at least $n$ independent equations — enough to cut the solution space down from $n$ dimensions to $0$.

// // // When the system has infinitely many solutions, the hyperplanes meet along a flat of dimension $n - r$, where $r = \\text{rank}(A)$. Each independent equation reduces the dimension of the intersection by one, and the rank counts how many equations cut independently. The remaining $n - r$ dimensions are the free directions in the solution set.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj10: {
// // //     title: `Structure of the Solution Set`,
// // //     content: `When $A\\mathbf{x} = \\mathbf{b}$ is consistent, the complete solution set has the form

// // // $$\\{\\mathbf{x}_p + \\mathbf{x}_h : \\mathbf{x}_h \\in \\text{Null}(A)\\}$$

// // // where $\\mathbf{x}_p$ is any one particular solution. This set is a coset of the null space — the null space translated by $\\mathbf{x}_p$. In geometric terms, it is an affine subspace: a [subspace](!/linear-algebra/vector-spaces/subspaces) shifted away from the origin.

// // // The dimension of the solution set equals the dimension of the null space: $n - \\text{rank}(A)$. When this is $0$, the solution set is a single point $\\{\\mathbf{x}_p\\}$. When it is $1$, the solution set is a line. When it is $2$, a plane. The shape is always a flat, and the null space determines its orientation.

// // // The particular solution $\\mathbf{x}_p$ captures the effect of the right-hand side $\\mathbf{b}$. The [homogeneous](!/linear-algebra/linear-systems/homogeneous) component $\\mathbf{x}_h$ captures the inherent freedom in the system — the directions along which the solution can shift without violating any equation. This decomposition into "forced" and "free" parts is one of the most fundamental structural results in linear algebra.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj11: {
// // //     title: `Summary: Solvability Questions Answered`,
// // //     content: `The two foundational questions about A·x = b — existence and uniqueness — together with the structure of the solution set and the special behavior of square, overdetermined, and underdetermined shapes, can be collected as a six-row Q&A reference. The table below pairs each question a reader might bring to a linear system with the answer in terms of rank, determinant, or solution-set structure.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // // }

// // // formulas-injected: v1 | 2026-06-16 | 2 callouts (obj5 solvability_rank_criterion direct, obj10 solution_structure_decomposition direct)

// // const sectionsContent = {
// //   obj1: {
// //     title: `The Two Questions`,
// //     content: `Given the system $A\\mathbf{x} = \\mathbf{b}$ with $A$ of size $m \\times n$, two logically independent questions arise.

// // Existence: is there at least one vector $\\mathbf{x}$ satisfying $A\\mathbf{x} = \\mathbf{b}$? This asks whether $\\mathbf{b}$ lies in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // Uniqueness: if a solution exists, is it the only one? This asks whether the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ is trivial.

// // The two questions are independent — existence can hold without uniqueness, and non-existence makes uniqueness moot. Both are answered by the [rank](!/linear-algebra/matrix/rank) of $A$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `The Existence Condition`,
// //     content: `The system $A\\mathbf{x} = \\mathbf{b}$ has at least one solution if and only if

// // $$\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$$

// // When this condition holds, $\\mathbf{b}$ is already a linear combination of the columns of $A$, so appending $\\mathbf{b}$ as an extra column does not introduce a new independent direction — the rank stays the same.

// // When the condition fails — $\\text{rank}([A \\mid \\mathbf{b}]) > \\text{rank}(A)$ — the vector $\\mathbf{b}$ is not in the column space. In the [echelon form](!/linear-algebra/linear-systems/echelon-form) of the augmented matrix, this appears as a row $[0 \\; 0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$: the equation $0 = d$ has no solution, and the system is inconsistent.

// // Since appending one column can increase the rank by at most $1$, the only possibilities are $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A)$ (consistent) or $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A) + 1$ (inconsistent).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `The Uniqueness Condition`,
// //     content: `When a solution exists, it is unique if and only if

// // $$\\text{rank}(A) = n$$

// // where $n$ is the number of unknowns. Full column rank means every column of $A$ contains a pivot, leaving no free variables. The null space is $\\{\\mathbf{0}\\}$, so the particular solution $\\mathbf{x}_p$ stands alone with nothing to add.

// // When $\\text{rank}(A) < n$, there are $n - \\text{rank}(A)$ free variables. Each free variable parametrizes a direction along which the solution can move without violating the equations. The solution set is infinite — a translated copy of the null space, which has dimension $n - \\text{rank}(A)$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `The Three Cases Combined`,
// //     content: `Putting existence and uniqueness together, every linear system falls into exactly one of three cases.

// // $\\text{rank}(A) < \\text{rank}([A \\mid \\mathbf{b}])$: no solution. The system is inconsistent.

// // $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) = n$: exactly one solution. The system is consistent and fully determined.

// // $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) < n$: infinitely many solutions. The system is consistent but underdetermined, with $n - \\text{rank}(A)$ free parameters.

// // There is no case with a finite number of solutions greater than one. If two distinct solutions exist, their difference lies in the null space, which is a [subspace](!/linear-algebra/vector-spaces/subspaces) — and a nontrivial subspace contains infinitely many vectors, generating infinitely many solutions.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `The Rouché–Capelli Theorem`,
// //     content: `The existence condition $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$ is known as the Rouché–Capelli theorem (or the Kronecker–Capelli theorem in some traditions):

// // @academic[formula_callout:solvability_rank_criterion|Solvability Rank Criterion|$$A\\mathbf{x} = \\mathbf{b} \\text{ consistent} \\iff \\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$$]@
// // @academic[formulas_link:/linear-algebra/formulas#solvability_rank_criterion]@

// // When consistent, the solution set has dimension $n - \\text{rank}(A)$.

// // The theorem unifies the existence and dimension questions into a single rank comparison. It applies to every linear system regardless of the shape of $A$ — square, tall, or wide. The proof follows directly from the column-space interpretation: $\\mathbf{b} \\in \\text{Col}(A)$ if and only if adding $\\mathbf{b}$ as a column does not increase the rank.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Square Systems`,
// //     content: `When $A$ is $n \\times n$, the [determinant](!/linear-algebra/determinants) provides the sharpest diagnostic.

// // If $\\det(A) \\neq 0$: the matrix is [invertible](!/linear-algebra/matrix/inverse), the rank is $n$, and the system $A\\mathbf{x} = \\mathbf{b}$ has exactly one solution for every $\\mathbf{b}$. The solution is $\\mathbf{x} = A^{-1}\\mathbf{b}$, or equivalently, the solution obtained by [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Existence and uniqueness both hold universally — the right-hand side does not matter.

// // If $\\det(A) = 0$: the matrix is singular, the rank is less than $n$, and the outcome depends on $\\mathbf{b}$. For some $\\mathbf{b}$ (those in the column space), infinitely many solutions exist. For other $\\mathbf{b}$ (those outside the column space), no solution exists. The determinant test determines whether the coefficient matrix is adequate; the rank comparison with the augmented matrix determines whether the specific $\\mathbf{b}$ is reachable.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Overdetermined Systems`,
// //     content: `When $m > n$ — more equations than unknowns — the system is overdetermined. The coefficient matrix is tall, and generically, no solution exists.

// // The column space of $A$ is at most $n$-dimensional inside $\\mathbb{R}^m$. When $m > n$, this column space is a proper subspace — most vectors in $\\mathbb{R}^m$ lie outside it. A randomly chosen $\\mathbf{b}$ will almost certainly not be in the column space, making the system inconsistent.

// // A solution exists only when $\\mathbf{b}$ happens to lie in the column space — when the extra equations are consistent with the first $n$. When a solution does exist and $\\text{rank}(A) = n$, it is unique.

// // When no exact solution exists, the [least-squares](!/linear-algebra/orthogonality/least-squares) approach finds the $\\hat{\\mathbf{x}}$ that minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ — the closest approximation. The least-squares solution satisfies the normal equations $A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}$ and is the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{b}$ onto the column space.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Underdetermined Systems`,
// //     content: `When $m < n$ — fewer equations than unknowns — the system is underdetermined. If a solution exists, it is never unique: the rank cannot exceed $m$, which is less than $n$, so at least $n - m$ free variables remain.

// // The solution set, when nonempty, is an affine subspace of dimension at least $n - m$. Multiple vectors $\\mathbf{x}$ satisfy the equations, and additional criteria beyond the linear system itself are needed to select a preferred one.

// // Common selection criteria include minimum norm (the $\\mathbf{x}$ closest to $\\mathbf{0}$, given by the pseudoinverse $\\mathbf{x} = A^T(AA^T)^{-1}\\mathbf{b}$), sparsity (the $\\mathbf{x}$ with the fewest nonzero entries, central to compressed sensing), and physical constraints (bounds or nonnegativity in engineering applications).

// // Underdetermined systems are not defective — they arise naturally whenever a problem has more degrees of freedom than constraints. The linear system identifies the feasible set; the selection criterion picks a point within it.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Geometric Interpretation`,
// //     content: `Each equation $a_{i1}x_1 + a_{i2}x_2 + \\cdots + a_{in}x_n = b_i$ defines a hyperplane in $\\mathbb{R}^n$ — a flat set of dimension $n - 1$. The solution set of the full system is the intersection of all $m$ hyperplanes.

// // When the system is inconsistent, the hyperplanes have no common point. In $\\mathbb{R}^2$ this means parallel lines. In $\\mathbb{R}^3$ it can mean parallel planes, or planes arranged in a triangular prism where each pair intersects but no point lies on all three.

// // When the system has a unique solution, the hyperplanes meet at a single point. This requires at least $n$ independent equations — enough to cut the solution space down from $n$ dimensions to $0$.

// // When the system has infinitely many solutions, the hyperplanes meet along a flat of dimension $n - r$, where $r = \\text{rank}(A)$. Each independent equation reduces the dimension of the intersection by one, and the rank counts how many equations cut independently. The remaining $n - r$ dimensions are the free directions in the solution set.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Structure of the Solution Set`,
// //     content: `When $A\\mathbf{x} = \\mathbf{b}$ is consistent, the complete solution set has the form

// // @academic[formula_callout:solution_structure_decomposition|Solution Structure Decomposition|$$\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h, \\quad \\mathbf{x}_h \\in \\text{Null}(A)$$]@
// // @academic[formulas_link:/linear-algebra/formulas#solution_structure_decomposition]@

// // where $\\mathbf{x}_p$ is any one particular solution and $\\mathbf{x}_h$ ranges over the null space. Equivalently, the solution set is $\\{\\mathbf{x}_p + \\mathbf{x}_h : \\mathbf{x}_h \\in \\text{Null}(A)\\}$ — a coset of the null space, the null space translated by $\\mathbf{x}_p$. In geometric terms, it is an affine subspace: a [subspace](!/linear-algebra/vector-spaces/subspaces) shifted away from the origin.

// // The dimension of the solution set equals the dimension of the null space: $n - \\text{rank}(A)$. When this is $0$, the solution set is a single point $\\{\\mathbf{x}_p\\}$. When it is $1$, the solution set is a line. When it is $2$, a plane. The shape is always a flat, and the null space determines its orientation.

// // The particular solution $\\mathbf{x}_p$ captures the effect of the right-hand side $\\mathbf{b}$. The [homogeneous](!/linear-algebra/linear-systems/homogeneous) component $\\mathbf{x}_h$ captures the inherent freedom in the system — the directions along which the solution can shift without violating any equation. This decomposition into &quot;forced&quot; and &quot;free&quot; parts is one of the most fundamental structural results in linear algebra.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `Summary: Solvability Questions Answered`,
// //     content: `The two foundational questions about A·x = b — existence and uniqueness — together with the structure of the solution set and the special behavior of square, overdetermined, and underdetermined shapes, can be collected as a six-row Q&amp;A reference. The table below pairs each question a reader might bring to a linear system with the answer in terms of rank, determinant, or solution-set structure.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }



// //  const introContent = {
// //   title: `When Solutions Exist and When They Are Unique`,
// //   content: `Two separate questions govern every linear system: does at least one solution exist, and if so, is that solution the only one? The rank of the coefficient matrix answers both. A single integer determines whether the system is inconsistent, uniquely solvable, or infinitely underdetermined — and characterizes the geometry of the solution set in each case.`,
// // }

// // const faqQuestions = {
// //   obj1: {
// //     question: "When does a linear system have a solution?",
// //     answer: "The system Ax = b has a solution if and only if rank(A) = rank([A | b]), meaning b lies in the column space of A. If appending b as a column increases the rank, the system is inconsistent and no solution exists.",
// //     sectionId: "2"
// //   },
// //   obj2: {
// //     question: "When is the solution unique?",
// //     answer: "When a solution exists, it is unique if and only if rank(A) = n (the number of unknowns). Full column rank means no free variables and a trivial null space. When rank(A) < n, there are n − rank(A) free parameters and infinitely many solutions.",
// //     sectionId: "3"
// //   },
// //   obj3: {
// //     question: "What is the Rouché-Capelli theorem?",
// //     answer: "The Rouché-Capelli theorem states that Ax = b is consistent if and only if the coefficient matrix and the augmented matrix have the same rank. When consistent, the solution set has dimension n − rank(A). It unifies existence and dimension into a single rank comparison.",
// //     sectionId: "5"
// //   },
// //   obj4: {
// //     question: "What happens with overdetermined systems?",
// //     answer: "When there are more equations than unknowns (m > n), no exact solution usually exists because most vectors b lie outside the column space. When no exact solution exists, the least-squares approach finds the x that minimizes ‖Ax − b‖² by solving the normal equations AᵀAx = Aᵀb.",
// //     sectionId: "7"
// //   },
// //   obj5: {
// //     question: "What is the structure of the solution set?",
// //     answer: "When consistent, the solution set is {xₚ + xₕ : xₕ ∈ Null(A)} — the null space translated by a particular solution. Its dimension equals n − rank(A). When this is 0, the solution is a single point. When positive, it is a line, plane, or higher-dimensional flat.",
// //     sectionId: "10"
// //   }
// // }


// // const schemas = {
// //   learningResource: {
// //     "@context": "https://schema.org",
// //     "@type": "LearningResource",
// //     "name": "Solvability of Linear Systems",
// //     "description": "Solvability of linear systems: existence and uniqueness via rank, Rouché-Capelli theorem, three cases, square and rectangular systems, overdetermined least squares, and solution set structure.",
// //     "url": "https://www.learnmathclass.com/linear-algebra/linear-systems/solvability",
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
// //       "name": "Solvability of Linear Systems"
// //     },
// //     "teaches": [
// //       "Existence condition via rank comparison",
// //       "Uniqueness condition via full column rank",
// //       "The three cases: none, unique, infinitely many",
// //       "Rouché-Capelli theorem",
// //       "Square systems and the determinant test",
// //       "Overdetermined systems and least squares",
// //       "Underdetermined systems and minimum norm",
// //       "Geometric interpretation as hyperplane intersections",
// //       "Solution set as translated null space"
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
// //         "name": "Linear Systems",
// //         "item": "https://www.learnmathclass.com/linear-algebra/linear-systems"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 4,
// //         "name": "Solvability",
// //         "item": "https://www.learnmathclass.com/linear-algebra/linear-systems/solvability"
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

// // //    return {
// // //       props:{
// // //          sectionsContent,
// // //          introContent,
// // //           seoData: {
// // //         title: "Title | Learn Math Class",
// // //         description: "Metadescription",
// // //         keywords: keyWords.join(", "),
// // //         url: "/linear-algebra/linear-systems/solvability",
// // //          name: "name"
// // //       },
        
// // //        }
// // //     }

// // return {
// //   props:{
// //     sectionsContent,
// //     introContent,
// //     obj8Table,
// //     obj10Table,
// //     summaryTable,
// //     faqQuestions,
// //     schemas,
// //     seoData: {
// //       title: "Solvability: Existence & Uniqueness | Learn Math Class",
// //       description: "Solvability of linear systems: existence and uniqueness via rank, Rouché-Capelli theorem, three cases, square and rectangular systems, overdetermined least squares, and solution set structure.",
// //       keywords: keyWords.join(", "),
// //       url: "/linear-algebra/linear-systems/solvability",
// //       name: "Solvability of Linear Systems"
// //     },
// //   }
// // }
// //    }

// // // export default function PageTemplate({seoData,sectionsContent , introContent}) {
// // export default function SolvabilityPage({
// //   seoData,
// //   sectionsContent,
// //   introContent,
// //   obj8Table,
// //   obj10Table,
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
// //         ]
// //     },
// //     {
// //         id:'8',
// //         title:sectionsContent.obj8.title,
// //         link:sectionsContent.obj8.link,
// //         content:[
// //           sectionsContent.obj8.content,
// //           <div
// //             key={'obj8-table'}
// //             style={tableWrapStyle}
// //             dangerouslySetInnerHTML={{ __html: obj8Table }}
// //           />,
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
// //           <div
// //             key={'obj10-table'}
// //             style={tableWrapStyle}
// //             dangerouslySetInnerHTML={{ __html: obj10Table }}
// //           />,
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
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Solvability of Linear Systems</h1>
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



// // tables-optimized: v4 | 2026-05-18 | 3 tables (obj8 aggregation, obj10 aggregation, obj11 summary capstone)
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
// const keyWords = [
//   "solvability linear systems",
//   "existence uniqueness solutions",
//   "Rouché-Capelli theorem",
//   "rank condition solvability",
//   "consistent inconsistent system",
//   "overdetermined system",
//   "underdetermined system",
//   "unique solution condition",
//   "infinitely many solutions",
//   "column space solvability",
//   "solution set structure",
//   "affine subspace coset",
//   "square system determinant",
//   "least squares overdetermined"
// ]

// const linkStyle = 'color: inherit; text-decoration: underline;'

// // ---------- TABLES ----------

// // obj8 — aggregation: solvability behavior by matrix shape, consolidating obj6 / obj7 / obj8
// const obj8Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Shape</th>
//       <th style="${tableHeaders.aggregation}">Distinguishing condition</th>
//       <th style="${tableHeaders.aggregation}">Existence for a given b</th>
//       <th style="${tableHeaders.aggregation}">Uniqueness</th>
//       <th style="${tableHeaders.aggregation}">Practical approach</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square (m = n), det(A) ≠ 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) = n; A invertible</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always exists for every b</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always unique</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = A⁻¹b; or Gaussian elimination</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square (m = n), det(A) = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) &lt; n; A singular</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">depends on b — exists iff b ∈ Col(A)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">never unique (when it exists)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row reduce [A | b]; compare ranks</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Overdetermined (m &gt; n)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is tall; column space is a proper subspace of ℝᵐ</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unusual — most b fall outside Col(A)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unique when it exists and rank(A) = n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when inconsistent: <a href="/linear-algebra/orthogonality/least-squares" style="${linkStyle}">least squares</a> via AᵀA x̂ = Aᵀb</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Underdetermined (m &lt; n)</td>
//       <td style="padding: 12px 15px; color: #34495e;">A is wide; rank ≤ m &lt; n forces free variables</td>
//       <td style="padding: 12px 15px; color: #34495e;">depends on b — exists iff rank(A) = rank([A | b])</td>
//       <td style="padding: 12px 15px; color: #34495e;">never unique; at least n − m free parameters</td>
//       <td style="padding: 12px 15px; color: #34495e;">minimum-norm via pseudoinverse Aᵀ(AAᵀ)⁻¹b, or other selection criterion</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj10 — aggregation: the solution-set decomposition x = xp + xh
// const obj10Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sed-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Component</th>
//       <th style="${tableHeaders.aggregation}">Symbol</th>
//       <th style="${tableHeaders.aggregation}">Where it comes from</th>
//       <th style="${tableHeaders.aggregation}">What it captures</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Particular solution</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>p</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any one vector satisfying A x<sub>p</sub> = b</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the &quot;forced&quot; part; the response to the right-hand side b</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Homogeneous part</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>h</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any vector in Null(A), i.e. A x<sub>h</sub> = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the &quot;free&quot; directions along which the solution can shift</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Complete solution</td>
//       <td style="padding: 12px 15px; color: #34495e;">x = x<sub>p</sub> + x<sub>h</sub></td>
//       <td style="padding: 12px 15px; color: #34495e;">sum over all x<sub>h</sub> ∈ Null(A)</td>
//       <td style="padding: 12px 15px; color: #34495e;">affine flat of dimension n − rank(A) through x<sub>p</sub></td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj11 — summary capstone: solvability questions and answers
// // obj11 — the two rank comparisons, then what to do when the answer is unwelcome
// const solvabilityQuestions = {
//   kicker: 'Linear systems \u00B7 solvability',
//   title: 'Every solvability question, answered by rank',
//   tallyLabel: 'questions',
//   intro: 'Two comparisons settle existence and uniqueness completely. Everything below them is what to do once the answer is known \u2014 and the shape of the system determines which of those situations you are in.',
//   footnote: 'The whole of solvability is two numbers compared three ways: $\\operatorname{rank}(A)$ against $\\operatorname{rank}([A \\mid \\mathbf{b}])$ decides existence, and $\\operatorname{rank}(A)$ against $n$ decides uniqueness. Both come from one [reduction](!/linear-algebra/linear-systems/echelon-form), which is why the two questions are never asked separately in practice.',
//   groups: [
//     {
//       heading: 'The two questions',
//       identities: [
//         {
//           name: 'Does a solution exist?',
//           anchor: '#2',
//           formula: '$\\operatorname{rank}(A) = \\operatorname{rank}([A \\mid \\mathbf{b}])$',
//           condition: 'equivalently $\\mathbf{b} \\in \\operatorname{Col}(A)$',
//           key: true,
//           note: 'Rouch\u00e9\u2013Capelli. If the augmented column raises the rank, it contributes a direction the columns of $A$ cannot reach, and the reduction reports this as a row reading $0 = d$. Existence is a question about $\\mathbf{b}$, not about $A$.',
//         },
//         {
//           name: 'Is the solution unique?',
//           anchor: '#3',
//           formula: '$\\operatorname{rank}(A) = n$',
//           condition: 'equivalently $\\operatorname{Null}(A) = \\{\\mathbf{0}\\}$',
//           key: true,
//           note: 'A pivot in every column means no free variables. Note this says nothing about whether a solution exists \u2014 uniqueness is a question about $A$ alone, which is why the two conditions are independent and both must be checked.',
//         },
//         {
//           name: 'What does the solution set look like?',
//           anchor: '#10',
//           formula: '$\\mathbf{x}_p + \\operatorname{Null}(A)$',
//           condition: 'when a solution exists',
//           note: 'One particular solution plus the entire null space. The set is a point when the nullity is zero, a line when it is one, a plane when it is two \u2014 never anything else, because it is always a translated [subspace](!/linear-algebra/vector-spaces/subspaces).',
//         },
//       ],
//     },
//     {
//       heading: 'What the shape of the system implies',
//       identities: [
//         {
//           name: 'Square and nonsingular',
//           anchor: '#6',
//           formula: '$\\mathbf{x} = A^{-1}\\mathbf{b}$',
//           condition: '$m = n$ and $\\det A \\neq 0$',
//           note: 'Both conditions hold at once and for every $\\mathbf{b}$ \u2014 the only case where the answer is unconditional. In practice solve by [factorization](!/linear-algebra/decompositions/lower-upper) rather than by forming the inverse; the formula is a statement about existence, not a method.',
//         },
//         {
//           name: 'Overdetermined, inconsistent',
//           anchor: '#7',
//           formula: '$A^{\\mathsf{T}}A\\hat{\\mathbf{x}} = A^{\\mathsf{T}}\\mathbf{b}$',
//           condition: '$m > n$, no exact solution',
//           strict: true,
//           note: 'More equations than unknowns usually means no solution at all, so the question changes: least squares minimises $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ instead of solving. The answer is the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{b}$ onto the column space \u2014 the closest reachable point.',
//         },
//         {
//           name: 'Underdetermined',
//           anchor: '#8',
//           formula: 'infinitely many; choose one',
//           condition: '$m < n$, consistent',
//           strict: true,
//           note: 'Fewer equations than unknowns leaves free variables, so a solution is never unique and the algebra cannot pick between them. The criterion comes from outside: minimum norm via the pseudoinverse, sparsity, or a physical constraint the model imposes.',
//         },
//       ],
//     },
//   ],
// }


// // const sectionsContent = {
// //   obj1: {
// //     title: `The Two Questions`,
// //     content: `Given the system $A\\mathbf{x} = \\mathbf{b}$ with $A$ of size $m \\times n$, two logically independent questions arise.

// // Existence: is there at least one vector $\\mathbf{x}$ satisfying $A\\mathbf{x} = \\mathbf{b}$? This asks whether $\\mathbf{b}$ lies in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // Uniqueness: if a solution exists, is it the only one? This asks whether the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ is trivial.

// // The two questions are independent — existence can hold without uniqueness, and non-existence makes uniqueness moot. Both are answered by the [rank](!/linear-algebra/matrix/rank) of $A$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `The Existence Condition`,
// //     content: `The system $A\\mathbf{x} = \\mathbf{b}$ has at least one solution if and only if

// // $$\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$$

// // When this condition holds, $\\mathbf{b}$ is already a linear combination of the columns of $A$, so appending $\\mathbf{b}$ as an extra column does not introduce a new independent direction — the rank stays the same.

// // When the condition fails — $\\text{rank}([A \\mid \\mathbf{b}]) > \\text{rank}(A)$ — the vector $\\mathbf{b}$ is not in the column space. In the [echelon form](!/linear-algebra/linear-systems/echelon-form) of the augmented matrix, this appears as a row $[0 \\; 0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$: the equation $0 = d$ has no solution, and the system is inconsistent.

// // Since appending one column can increase the rank by at most $1$, the only possibilities are $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A)$ (consistent) or $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A) + 1$ (inconsistent).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `The Uniqueness Condition`,
// //     content: `When a solution exists, it is unique if and only if

// // $$\\text{rank}(A) = n$$

// // where $n$ is the number of unknowns. Full column rank means every column of $A$ contains a pivot, leaving no free variables. The null space is $\\{\\mathbf{0}\\}$, so the particular solution $\\mathbf{x}_p$ stands alone with nothing to add.

// // When $\\text{rank}(A) < n$, there are $n - \\text{rank}(A)$ free variables. Each free variable parametrizes a direction along which the solution can move without violating the equations. The solution set is infinite — a translated copy of the null space, which has dimension $n - \\text{rank}(A)$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `The Three Cases Combined`,
// //     content: `Putting existence and uniqueness together, every linear system falls into exactly one of three cases.

// // $\\text{rank}(A) < \\text{rank}([A \\mid \\mathbf{b}])$: no solution. The system is inconsistent.

// // $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) = n$: exactly one solution. The system is consistent and fully determined.

// // $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) < n$: infinitely many solutions. The system is consistent but underdetermined, with $n - \\text{rank}(A)$ free parameters.

// // There is no case with a finite number of solutions greater than one. If two distinct solutions exist, their difference lies in the null space, which is a [subspace](!/linear-algebra/vector-spaces/subspaces) — and a nontrivial subspace contains infinitely many vectors, generating infinitely many solutions.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `The Rouché–Capelli Theorem`,
// //     content: `The existence condition $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$ is known as the Rouché–Capelli theorem (or the Kronecker–Capelli theorem in some traditions). It states:

// // The system $A\\mathbf{x} = \\mathbf{b}$ is consistent if and only if the coefficient matrix and the augmented matrix have the same rank. When consistent, the solution set has dimension $n - \\text{rank}(A)$.

// // The theorem unifies the existence and dimension questions into a single rank comparison. It applies to every linear system regardless of the shape of $A$ — square, tall, or wide. The proof follows directly from the column-space interpretation: $\\mathbf{b} \\in \\text{Col}(A)$ if and only if adding $\\mathbf{b}$ as a column does not increase the rank.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Square Systems`,
// //     content: `When $A$ is $n \\times n$, the [determinant](!/linear-algebra/determinants) provides the sharpest diagnostic.

// // If $\\det(A) \\neq 0$: the matrix is [invertible](!/linear-algebra/matrix/inverse), the rank is $n$, and the system $A\\mathbf{x} = \\mathbf{b}$ has exactly one solution for every $\\mathbf{b}$. The solution is $\\mathbf{x} = A^{-1}\\mathbf{b}$, or equivalently, the solution obtained by [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Existence and uniqueness both hold universally — the right-hand side does not matter.

// // If $\\det(A) = 0$: the matrix is singular, the rank is less than $n$, and the outcome depends on $\\mathbf{b}$. For some $\\mathbf{b}$ (those in the column space), infinitely many solutions exist. For other $\\mathbf{b}$ (those outside the column space), no solution exists. The determinant test determines whether the coefficient matrix is adequate; the rank comparison with the augmented matrix determines whether the specific $\\mathbf{b}$ is reachable.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Overdetermined Systems`,
// //     content: `When $m > n$ — more equations than unknowns — the system is overdetermined. The coefficient matrix is tall, and generically, no solution exists.

// // The column space of $A$ is at most $n$-dimensional inside $\\mathbb{R}^m$. When $m > n$, this column space is a proper subspace — most vectors in $\\mathbb{R}^m$ lie outside it. A randomly chosen $\\mathbf{b}$ will almost certainly not be in the column space, making the system inconsistent.

// // A solution exists only when $\\mathbf{b}$ happens to lie in the column space — when the extra equations are consistent with the first $n$. When a solution does exist and $\\text{rank}(A) = n$, it is unique.

// // When no exact solution exists, the [least-squares](!/linear-algebra/orthogonality/least-squares) approach finds the $\\hat{\\mathbf{x}}$ that minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ — the closest approximation. The least-squares solution satisfies the normal equations $A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}$ and is the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{b}$ onto the column space.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Underdetermined Systems`,
// //     content: `When $m < n$ — fewer equations than unknowns — the system is underdetermined. If a solution exists, it is never unique: the rank cannot exceed $m$, which is less than $n$, so at least $n - m$ free variables remain.

// // The solution set, when nonempty, is an affine subspace of dimension at least $n - m$. Multiple vectors $\\mathbf{x}$ satisfy the equations, and additional criteria beyond the linear system itself are needed to select a preferred one.

// // Common selection criteria include minimum norm (the $\\mathbf{x}$ closest to $\\mathbf{0}$, given by the pseudoinverse $\\mathbf{x} = A^T(AA^T)^{-1}\\mathbf{b}$), sparsity (the $\\mathbf{x}$ with the fewest nonzero entries, central to compressed sensing), and physical constraints (bounds or nonnegativity in engineering applications).

// // Underdetermined systems are not defective — they arise naturally whenever a problem has more degrees of freedom than constraints. The linear system identifies the feasible set; the selection criterion picks a point within it.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Geometric Interpretation`,
// //     content: `Each equation $a_{i1}x_1 + a_{i2}x_2 + \\cdots + a_{in}x_n = b_i$ defines a hyperplane in $\\mathbb{R}^n$ — a flat set of dimension $n - 1$. The solution set of the full system is the intersection of all $m$ hyperplanes.

// // When the system is inconsistent, the hyperplanes have no common point. In $\\mathbb{R}^2$ this means parallel lines. In $\\mathbb{R}^3$ it can mean parallel planes, or planes arranged in a triangular prism where each pair intersects but no point lies on all three.

// // When the system has a unique solution, the hyperplanes meet at a single point. This requires at least $n$ independent equations — enough to cut the solution space down from $n$ dimensions to $0$.

// // When the system has infinitely many solutions, the hyperplanes meet along a flat of dimension $n - r$, where $r = \\text{rank}(A)$. Each independent equation reduces the dimension of the intersection by one, and the rank counts how many equations cut independently. The remaining $n - r$ dimensions are the free directions in the solution set.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Structure of the Solution Set`,
// //     content: `When $A\\mathbf{x} = \\mathbf{b}$ is consistent, the complete solution set has the form

// // $$\\{\\mathbf{x}_p + \\mathbf{x}_h : \\mathbf{x}_h \\in \\text{Null}(A)\\}$$

// // where $\\mathbf{x}_p$ is any one particular solution. This set is a coset of the null space — the null space translated by $\\mathbf{x}_p$. In geometric terms, it is an affine subspace: a [subspace](!/linear-algebra/vector-spaces/subspaces) shifted away from the origin.

// // The dimension of the solution set equals the dimension of the null space: $n - \\text{rank}(A)$. When this is $0$, the solution set is a single point $\\{\\mathbf{x}_p\\}$. When it is $1$, the solution set is a line. When it is $2$, a plane. The shape is always a flat, and the null space determines its orientation.

// // The particular solution $\\mathbf{x}_p$ captures the effect of the right-hand side $\\mathbf{b}$. The [homogeneous](!/linear-algebra/linear-systems/homogeneous) component $\\mathbf{x}_h$ captures the inherent freedom in the system — the directions along which the solution can shift without violating any equation. This decomposition into "forced" and "free" parts is one of the most fundamental structural results in linear algebra.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `Summary: Solvability Questions Answered`,
// //     content: `The two foundational questions about A·x = b — existence and uniqueness — together with the structure of the solution set and the special behavior of square, overdetermined, and underdetermined shapes, can be collected as a six-row Q&A reference. The table below pairs each question a reader might bring to a linear system with the answer in terms of rank, determinant, or solution-set structure.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }

// // formulas-injected: v1 | 2026-06-16 | 2 callouts (obj5 solvability_rank_criterion direct, obj10 solution_structure_decomposition direct)

// const sectionsContent = {
//   obj1: {
//     title: `The Two Questions`,
//     content: `Given the system $A\\mathbf{x} = \\mathbf{b}$ with $A$ of size $m \\times n$, two logically independent questions arise.

// Existence: is there at least one vector $\\mathbf{x}$ satisfying $A\\mathbf{x} = \\mathbf{b}$? This asks whether $\\mathbf{b}$ lies in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// Uniqueness: if a solution exists, is it the only one? This asks whether the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ is trivial.

// The two questions are independent — existence can hold without uniqueness, and non-existence makes uniqueness moot. Both are answered by the [rank](!/linear-algebra/matrix/rank) of $A$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Existence Condition`,
//     content: `The system $A\\mathbf{x} = \\mathbf{b}$ has at least one solution if and only if

// $$\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$$

// When this condition holds, $\\mathbf{b}$ is already a linear combination of the columns of $A$, so appending $\\mathbf{b}$ as an extra column does not introduce a new independent direction — the rank stays the same.

// When the condition fails — $\\text{rank}([A \\mid \\mathbf{b}]) > \\text{rank}(A)$ — the vector $\\mathbf{b}$ is not in the column space. In the [echelon form](!/linear-algebra/linear-systems/echelon-form) of the augmented matrix, this appears as a row $[0 \\; 0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$: the equation $0 = d$ has no solution, and the system is inconsistent.

// Since appending one column can increase the rank by at most $1$, the only possibilities are $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A)$ (consistent) or $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A) + 1$ (inconsistent).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Uniqueness Condition`,
//     content: `When a solution exists, it is unique if and only if

// $$\\text{rank}(A) = n$$

// where $n$ is the number of unknowns. Full column rank means every column of $A$ contains a pivot, leaving no free variables. The null space is $\\{\\mathbf{0}\\}$, so the particular solution $\\mathbf{x}_p$ stands alone with nothing to add.

// When $\\text{rank}(A) < n$, there are $n - \\text{rank}(A)$ free variables. Each free variable parametrizes a direction along which the solution can move without violating the equations. The solution set is infinite — a translated copy of the null space, which has dimension $n - \\text{rank}(A)$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `The Three Cases Combined`,
//     content: `Putting existence and uniqueness together, every linear system falls into exactly one of three cases.

// $\\text{rank}(A) < \\text{rank}([A \\mid \\mathbf{b}])$: no solution. The system is inconsistent.

// $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) = n$: exactly one solution. The system is consistent and fully determined.

// $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) < n$: infinitely many solutions. The system is consistent but underdetermined, with $n - \\text{rank}(A)$ free parameters.

// There is no case with a finite number of solutions greater than one. If two distinct solutions exist, their difference lies in the null space, which is a [subspace](!/linear-algebra/vector-spaces/subspaces) — and a nontrivial subspace contains infinitely many vectors, generating infinitely many solutions.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `The Rouché–Capelli Theorem`,
//     content: `The existence condition $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$ is known as the Rouché–Capelli theorem (or the Kronecker–Capelli theorem in some traditions):

// @academic[formula_callout:solvability_rank_criterion|Solvability Rank Criterion|$$A\\mathbf{x} = \\mathbf{b} \\text{ consistent} \\iff \\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$$]@
// @academic[formulas_link:/linear-algebra/formulas#solvability_rank_criterion]@

// When consistent, the solution set has dimension $n - \\text{rank}(A)$.

// The theorem unifies the existence and dimension questions into a single rank comparison. It applies to every linear system regardless of the shape of $A$ — square, tall, or wide. The proof follows directly from the column-space interpretation: $\\mathbf{b} \\in \\text{Col}(A)$ if and only if adding $\\mathbf{b}$ as a column does not increase the rank.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Square Systems`,
//     content: `When $A$ is $n \\times n$, the [determinant](!/linear-algebra/determinants) provides the sharpest diagnostic.

// If $\\det(A) \\neq 0$: the matrix is [invertible](!/linear-algebra/matrix/inverse), the rank is $n$, and the system $A\\mathbf{x} = \\mathbf{b}$ has exactly one solution for every $\\mathbf{b}$. The solution is $\\mathbf{x} = A^{-1}\\mathbf{b}$, or equivalently, the solution obtained by [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Existence and uniqueness both hold universally — the right-hand side does not matter.

// If $\\det(A) = 0$: the matrix is singular, the rank is less than $n$, and the outcome depends on $\\mathbf{b}$. For some $\\mathbf{b}$ (those in the column space), infinitely many solutions exist. For other $\\mathbf{b}$ (those outside the column space), no solution exists. The determinant test determines whether the coefficient matrix is adequate; the rank comparison with the augmented matrix determines whether the specific $\\mathbf{b}$ is reachable.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Overdetermined Systems`,
//     content: `When $m > n$ — more equations than unknowns — the system is overdetermined. The coefficient matrix is tall, and generically, no solution exists.

// The column space of $A$ is at most $n$-dimensional inside $\\mathbb{R}^m$. When $m > n$, this column space is a proper subspace — most vectors in $\\mathbb{R}^m$ lie outside it. A randomly chosen $\\mathbf{b}$ will almost certainly not be in the column space, making the system inconsistent.

// A solution exists only when $\\mathbf{b}$ happens to lie in the column space — when the extra equations are consistent with the first $n$. When a solution does exist and $\\text{rank}(A) = n$, it is unique.

// When no exact solution exists, the [least-squares](!/linear-algebra/orthogonality/least-squares) approach finds the $\\hat{\\mathbf{x}}$ that minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ — the closest approximation. The least-squares solution satisfies the normal equations $A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}$ and is the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{b}$ onto the column space.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Underdetermined Systems`,
//     content: `When $m < n$ — fewer equations than unknowns — the system is underdetermined. If a solution exists, it is never unique: the rank cannot exceed $m$, which is less than $n$, so at least $n - m$ free variables remain.

// The solution set, when nonempty, is an affine subspace of dimension at least $n - m$. Multiple vectors $\\mathbf{x}$ satisfy the equations, and additional criteria beyond the linear system itself are needed to select a preferred one.

// Common selection criteria include minimum norm (the $\\mathbf{x}$ closest to $\\mathbf{0}$, given by the pseudoinverse $\\mathbf{x} = A^T(AA^T)^{-1}\\mathbf{b}$), sparsity (the $\\mathbf{x}$ with the fewest nonzero entries, central to compressed sensing), and physical constraints (bounds or nonnegativity in engineering applications).

// Underdetermined systems are not defective — they arise naturally whenever a problem has more degrees of freedom than constraints. The linear system identifies the feasible set; the selection criterion picks a point within it.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Geometric Interpretation`,
//     content: `Each equation $a_{i1}x_1 + a_{i2}x_2 + \\cdots + a_{in}x_n = b_i$ defines a hyperplane in $\\mathbb{R}^n$ — a flat set of dimension $n - 1$. The solution set of the full system is the intersection of all $m$ hyperplanes.

// When the system is inconsistent, the hyperplanes have no common point. In $\\mathbb{R}^2$ this means parallel lines. In $\\mathbb{R}^3$ it can mean parallel planes, or planes arranged in a triangular prism where each pair intersects but no point lies on all three.

// When the system has a unique solution, the hyperplanes meet at a single point. This requires at least $n$ independent equations — enough to cut the solution space down from $n$ dimensions to $0$.

// When the system has infinitely many solutions, the hyperplanes meet along a flat of dimension $n - r$, where $r = \\text{rank}(A)$. Each independent equation reduces the dimension of the intersection by one, and the rank counts how many equations cut independently. The remaining $n - r$ dimensions are the free directions in the solution set.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Structure of the Solution Set`,
//     content: `When $A\\mathbf{x} = \\mathbf{b}$ is consistent, the complete solution set has the form

// @academic[formula_callout:solution_structure_decomposition|Solution Structure Decomposition|$$\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h, \\quad \\mathbf{x}_h \\in \\text{Null}(A)$$]@
// @academic[formulas_link:/linear-algebra/formulas#solution_structure_decomposition]@

// where $\\mathbf{x}_p$ is any one particular solution and $\\mathbf{x}_h$ ranges over the null space. Equivalently, the solution set is $\\{\\mathbf{x}_p + \\mathbf{x}_h : \\mathbf{x}_h \\in \\text{Null}(A)\\}$ — a coset of the null space, the null space translated by $\\mathbf{x}_p$. In geometric terms, it is an affine subspace: a [subspace](!/linear-algebra/vector-spaces/subspaces) shifted away from the origin.

// The dimension of the solution set equals the dimension of the null space: $n - \\text{rank}(A)$. When this is $0$, the solution set is a single point $\\{\\mathbf{x}_p\\}$. When it is $1$, the solution set is a line. When it is $2$, a plane. The shape is always a flat, and the null space determines its orientation.

// The particular solution $\\mathbf{x}_p$ captures the effect of the right-hand side $\\mathbf{b}$. The [homogeneous](!/linear-algebra/linear-systems/homogeneous) component $\\mathbf{x}_h$ captures the inherent freedom in the system — the directions along which the solution can shift without violating any equation. This decomposition into &quot;forced&quot; and &quot;free&quot; parts is one of the most fundamental structural results in linear algebra.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Summary: Solvability Questions Answered`,
//     content: `The two foundational questions about A·x = b — existence and uniqueness — together with the structure of the solution set and the special behavior of square, overdetermined, and underdetermined shapes, can be collected as a six-row Q&amp;A reference. The table below pairs each question a reader might bring to a linear system with the answer in terms of rank, determinant, or solution-set structure.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }



//  const introContent = {
//   title: `When Solutions Exist and When They Are Unique`,
//   content: `Two separate questions govern every linear system: does at least one solution exist, and if so, is that solution the only one? The rank of the coefficient matrix answers both. A single integer determines whether the system is inconsistent, uniquely solvable, or infinitely underdetermined — and characterizes the geometry of the solution set in each case.`,
// }

// const faqQuestions = {
//   obj1: {
//     question: "When does a linear system have a solution?",
//     answer: "The system Ax = b has a solution if and only if rank(A) = rank([A | b]), meaning b lies in the column space of A. If appending b as a column increases the rank, the system is inconsistent and no solution exists.",
//     sectionId: "2"
//   },
//   obj2: {
//     question: "When is the solution unique?",
//     answer: "When a solution exists, it is unique if and only if rank(A) = n (the number of unknowns). Full column rank means no free variables and a trivial null space. When rank(A) < n, there are n − rank(A) free parameters and infinitely many solutions.",
//     sectionId: "3"
//   },
//   obj3: {
//     question: "What is the Rouché-Capelli theorem?",
//     answer: "The Rouché-Capelli theorem states that Ax = b is consistent if and only if the coefficient matrix and the augmented matrix have the same rank. When consistent, the solution set has dimension n − rank(A). It unifies existence and dimension into a single rank comparison.",
//     sectionId: "5"
//   },
//   obj4: {
//     question: "What happens with overdetermined systems?",
//     answer: "When there are more equations than unknowns (m > n), no exact solution usually exists because most vectors b lie outside the column space. When no exact solution exists, the least-squares approach finds the x that minimizes ‖Ax − b‖² by solving the normal equations AᵀAx = Aᵀb.",
//     sectionId: "7"
//   },
//   obj5: {
//     question: "What is the structure of the solution set?",
//     answer: "When consistent, the solution set is {xₚ + xₕ : xₕ ∈ Null(A)} — the null space translated by a particular solution. Its dimension equals n − rank(A). When this is 0, the solution is a single point. When positive, it is a line, plane, or higher-dimensional flat.",
//     sectionId: "10"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Solvability of Linear Systems",
//     "description": "Solvability of linear systems: existence and uniqueness via rank, Rouché-Capelli theorem, three cases, square and rectangular systems, overdetermined least squares, and solution set structure.",
//     "url": "https://www.learnmathclass.com/linear-algebra/linear-systems/solvability",
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
//       "name": "Solvability of Linear Systems"
//     },
//     "teaches": [
//       "Existence condition via rank comparison",
//       "Uniqueness condition via full column rank",
//       "The three cases: none, unique, infinitely many",
//       "Rouché-Capelli theorem",
//       "Square systems and the determinant test",
//       "Overdetermined systems and least squares",
//       "Underdetermined systems and minimum norm",
//       "Geometric interpretation as hyperplane intersections",
//       "Solution set as translated null space"
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
//         "name": "Linear Systems",
//         "item": "https://www.learnmathclass.com/linear-algebra/linear-systems"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Solvability",
//         "item": "https://www.learnmathclass.com/linear-algebra/linear-systems/solvability"
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

// //    return {
// //       props:{
// //          sectionsContent,
// //          introContent,
// //           seoData: {
// //         title: "Title | Learn Math Class",
// //         description: "Metadescription",
// //         keywords: keyWords.join(", "),
// //         url: "/linear-algebra/linear-systems/solvability",
// //          name: "name"
// //       },
        
// //        }
// //     }

// return {
//   props:{
//     sectionsContent,
//     introContent,
//     obj8Table,
//     obj10Table,
//     solvabilityQuestions,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Solvability: Existence & Uniqueness | Learn Math Class",
//       description: "Solvability of linear systems: existence and uniqueness via rank, Rouché-Capelli theorem, three cases, square and rectangular systems, overdetermined least squares, and solution set structure.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/linear-systems/solvability",
//       name: "Solvability of Linear Systems"
//     },
//   }
// }
//    }

// // export default function PageTemplate({seoData,sectionsContent , introContent}) {
// export default function SolvabilityPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj8Table,
//   obj10Table,
//   solvabilityQuestions,
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
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//           <div
//             key={'obj8-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj8Table }}
//           />,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//           <div
//             key={'obj10-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj10Table }}
//           />,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//           `The first group below is the theory and the second is what to do about it. Existence and uniqueness are each a single rank comparison, and they are independent — a system can have solutions without having one solution, or have at most one without having any. The second group takes the cases where the answer is unwelcome and says what replaces the original question.`,
//           <DiagramFrame
//             key={'obj11-diagram'}
//             id="solvability-questions"
//             title="Every solvability question, answered by rank"
//             source="/linear-algebra/linear-systems/solvability"
//           >
//             <IdentitySheet data={solvabilityQuestions} theme="navy" variant="ledger" />
//           </DiagramFrame>,
//           `Both comparisons come out of the same reduction, which is why they are never computed separately. Reduce $[A \\mid \\mathbf{b}]$ once: a contradiction row settles existence, and the count of pivot columns settles uniqueness. Nothing else is needed, and no determinant is involved — which matters because the determinant test only applies to square systems, while these two apply to every system.`,
//           `The last two rows are worth reading as a change of question rather than a failure. An overdetermined system usually has no solution, so least squares asks for the closest approximation instead and answers with a projection. An underdetermined system has too many, so a selection criterion is imposed from outside the algebra — minimum norm, sparsity, or whatever the model requires. In both cases the linear algebra is finished; what remains is deciding what you wanted.`,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Solvability of Linear Systems</h1>
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


// tables-optimized: v4 | 2026-05-18 | 3 tables (obj8 aggregation, obj10 aggregation, obj11 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
import ObjectTypeProfile from '@/app/components/infographics/linear-algebra/ObjectTypeProfile'
import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


export async function getStaticProps(){
const keyWords = [
  "solvability linear systems",
  "existence uniqueness solutions",
  "Rouché-Capelli theorem",
  "rank condition solvability",
  "consistent inconsistent system",
  "overdetermined system",
  "underdetermined system",
  "unique solution condition",
  "infinitely many solutions",
  "column space solvability",
  "solution set structure",
  "affine subspace coset",
  "square system determinant",
  "least squares overdetermined"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj8 — aggregation: solvability behavior by matrix shape, consolidating obj6 / obj7 / obj8
const systemShapes = {
  kicker: 'Linear systems \u00B7 by shape',
  title: 'What the shape of A predicts',
  tallyLabel: 'shapes',
  intro: 'Before any reduction, the shape of $A$ narrows what can happen. It never settles the question \u2014 $\\mathbf{b}$ still decides existence \u2014 but it says which outcomes are available and which are ruled out.',
  footnote: 'Shape constrains, rank decides. A wide matrix cannot have a unique solution whatever $\\mathbf{b}$ is; a tall one usually has none. What no shape determines is existence, which depends on whether $\\mathbf{b}$ lies in the column space \u2014 and that is a fact about $\\mathbf{b}$, not about the dimensions.',
  slots: [
    { key: 'existence',   label: 'existence' },
    { key: 'uniqueness',  label: 'uniqueness' },
    { key: 'approach',    label: 'practical approach' },
  ],
  groups: [
    {
      heading: 'Square',
      types: [
        {
          name: 'Nonsingular',
          anchor: '#6',
          shape: 'identity',
          condition: '$m = n$, $\\det A \\neq 0$',
          properties: {
            existence: 'always, for every $\\mathbf{b}$',
            uniqueness: 'always unique',
            approach: 'factorize once, solve per $\\mathbf{b}$',
          },
          note: 'The only row where both answers are unconditional. Every question about this system is settled by $A$ alone \u2014 $\\mathbf{b}$ never enters the decision, only the answer.',
        },
        {
          name: 'Singular',
          anchor: '#6',
          shape: 'block',
          condition: '$m = n$, $\\det A = 0$',
          properties: {
            existence: 'iff $\\mathbf{b} \\in \\operatorname{Col}(A)$',
            uniqueness: 'never, when it exists',
            approach: 'reduce $[A \\mid \\mathbf{b}]$, compare ranks',
          },
          note: 'Square but rank-deficient, so it behaves like an underdetermined system despite the shape. Free variables exist, so a solution is either absent or infinite \u2014 never exactly one.',
        },
      ],
    },
    {
      heading: 'More equations than unknowns',
      types: [
        {
          name: 'Overdetermined',
          anchor: '#7',
          shape: 'lower',
          condition: '$m > n$ \u2014 tall',
          properties: {
            existence: 'unusual \u2014 most $\\mathbf{b}$ miss $\\operatorname{Col}(A)$',
            uniqueness: 'unique when it exists and $\\operatorname{rank}(A) = n$',
            approach: '[least squares](!/linear-algebra/orthogonality/least-squares) when inconsistent',
          },
          note: 'The column space is at most $n$-dimensional inside $\\mathbb{R}^m$, so it is a thin slice and a randomly chosen $\\mathbf{b}$ almost never lands in it. This is the case where the question changes from solving to approximating.',
        },
      ],
    },
    {
      heading: 'More unknowns than equations',
      types: [
        {
          name: 'Underdetermined',
          anchor: '#8',
          shape: 'upper',
          condition: '$m < n$ \u2014 wide',
          properties: {
            existence: 'iff $\\operatorname{rank}(A) = \\operatorname{rank}([A \\mid \\mathbf{b}])$',
            uniqueness: 'never \u2014 at least $n - m$ free parameters',
            approach: 'impose a criterion: minimum norm, sparsity',
          },
          note: 'Rank cannot exceed $m$, which is below $n$, so free variables are guaranteed by the shape alone. Uniqueness is impossible here regardless of $\\mathbf{b}$ \u2014 the only row where the shape rules out an outcome outright.',
        },
      ],
    },
  ],
}

// obj10 — aggregation: the solution-set decomposition x = xp + xh
const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sed-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Component</th>
      <th style="${tableHeaders.aggregation}">Symbol</th>
      <th style="${tableHeaders.aggregation}">Where it comes from</th>
      <th style="${tableHeaders.aggregation}">What it captures</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Particular solution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>p</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any one vector satisfying A x<sub>p</sub> = b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the &quot;forced&quot; part; the response to the right-hand side b</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Homogeneous part</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>h</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any vector in Null(A), i.e. A x<sub>h</sub> = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the &quot;free&quot; directions along which the solution can shift</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Complete solution</td>
      <td style="padding: 12px 15px; color: #34495e;">x = x<sub>p</sub> + x<sub>h</sub></td>
      <td style="padding: 12px 15px; color: #34495e;">sum over all x<sub>h</sub> ∈ Null(A)</td>
      <td style="padding: 12px 15px; color: #34495e;">affine flat of dimension n − rank(A) through x<sub>p</sub></td>
    </tr>
  </tbody>
</table>
`

// obj11 — summary capstone: solvability questions and answers
// obj11 — the two rank comparisons, then what to do when the answer is unwelcome
const solvabilityQuestions = {
  kicker: 'Linear systems \u00B7 solvability',
  title: 'Every solvability question, answered by rank',
  tallyLabel: 'questions',
  intro: 'Two comparisons settle existence and uniqueness completely. Everything below them is what to do once the answer is known \u2014 and the shape of the system determines which of those situations you are in.',
  footnote: 'The whole of solvability is two numbers compared three ways: $\\operatorname{rank}(A)$ against $\\operatorname{rank}([A \\mid \\mathbf{b}])$ decides existence, and $\\operatorname{rank}(A)$ against $n$ decides uniqueness. Both come from one [reduction](!/linear-algebra/linear-systems/echelon-form), which is why the two questions are never asked separately in practice.',
  groups: [
    {
      heading: 'The two questions',
      identities: [
        {
          name: 'Does a solution exist?',
          anchor: '#2',
          formula: '$\\operatorname{rank}(A) = \\operatorname{rank}([A \\mid \\mathbf{b}])$',
          condition: 'equivalently $\\mathbf{b} \\in \\operatorname{Col}(A)$',
          key: true,
          note: 'Rouch\u00e9\u2013Capelli. If the augmented column raises the rank, it contributes a direction the columns of $A$ cannot reach, and the reduction reports this as a row reading $0 = d$. Existence is a question about $\\mathbf{b}$, not about $A$.',
        },
        {
          name: 'Is the solution unique?',
          anchor: '#3',
          formula: '$\\operatorname{rank}(A) = n$',
          condition: 'equivalently $\\operatorname{Null}(A) = \\{\\mathbf{0}\\}$',
          key: true,
          note: 'A pivot in every column means no free variables. Note this says nothing about whether a solution exists \u2014 uniqueness is a question about $A$ alone, which is why the two conditions are independent and both must be checked.',
        },
        {
          name: 'What does the solution set look like?',
          anchor: '#10',
          formula: '$\\mathbf{x}_p + \\operatorname{Null}(A)$',
          condition: 'when a solution exists',
          note: 'One particular solution plus the entire null space. The set is a point when the nullity is zero, a line when it is one, a plane when it is two \u2014 never anything else, because it is always a translated [subspace](!/linear-algebra/vector-spaces/subspaces).',
        },
      ],
    },
    {
      heading: 'What the shape of the system implies',
      identities: [
        {
          name: 'Square and nonsingular',
          anchor: '#6',
          formula: '$\\mathbf{x} = A^{-1}\\mathbf{b}$',
          condition: '$m = n$ and $\\det A \\neq 0$',
          note: 'Both conditions hold at once and for every $\\mathbf{b}$ \u2014 the only case where the answer is unconditional. In practice solve by [factorization](!/linear-algebra/decompositions/lower-upper) rather than by forming the inverse; the formula is a statement about existence, not a method.',
        },
        {
          name: 'Overdetermined, inconsistent',
          anchor: '#7',
          formula: '$A^{\\mathsf{T}}A\\hat{\\mathbf{x}} = A^{\\mathsf{T}}\\mathbf{b}$',
          condition: '$m > n$, no exact solution',
          strict: true,
          note: 'More equations than unknowns usually means no solution at all, so the question changes: least squares minimises $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ instead of solving. The answer is the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{b}$ onto the column space \u2014 the closest reachable point.',
        },
        {
          name: 'Underdetermined',
          anchor: '#8',
          formula: 'infinitely many; choose one',
          condition: '$m < n$, consistent',
          strict: true,
          note: 'Fewer equations than unknowns leaves free variables, so a solution is never unique and the algebra cannot pick between them. The criterion comes from outside: minimum norm via the pseudoinverse, sparsity, or a physical constraint the model imposes.',
        },
      ],
    },
  ],
}


// const sectionsContent = {
//   obj1: {
//     title: `The Two Questions`,
//     content: `Given the system $A\\mathbf{x} = \\mathbf{b}$ with $A$ of size $m \\times n$, two logically independent questions arise.

// Existence: is there at least one vector $\\mathbf{x}$ satisfying $A\\mathbf{x} = \\mathbf{b}$? This asks whether $\\mathbf{b}$ lies in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// Uniqueness: if a solution exists, is it the only one? This asks whether the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ is trivial.

// The two questions are independent — existence can hold without uniqueness, and non-existence makes uniqueness moot. Both are answered by the [rank](!/linear-algebra/matrix/rank) of $A$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Existence Condition`,
//     content: `The system $A\\mathbf{x} = \\mathbf{b}$ has at least one solution if and only if

// $$\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$$

// When this condition holds, $\\mathbf{b}$ is already a linear combination of the columns of $A$, so appending $\\mathbf{b}$ as an extra column does not introduce a new independent direction — the rank stays the same.

// When the condition fails — $\\text{rank}([A \\mid \\mathbf{b}]) > \\text{rank}(A)$ — the vector $\\mathbf{b}$ is not in the column space. In the [echelon form](!/linear-algebra/linear-systems/echelon-form) of the augmented matrix, this appears as a row $[0 \\; 0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$: the equation $0 = d$ has no solution, and the system is inconsistent.

// Since appending one column can increase the rank by at most $1$, the only possibilities are $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A)$ (consistent) or $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A) + 1$ (inconsistent).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Uniqueness Condition`,
//     content: `When a solution exists, it is unique if and only if

// $$\\text{rank}(A) = n$$

// where $n$ is the number of unknowns. Full column rank means every column of $A$ contains a pivot, leaving no free variables. The null space is $\\{\\mathbf{0}\\}$, so the particular solution $\\mathbf{x}_p$ stands alone with nothing to add.

// When $\\text{rank}(A) < n$, there are $n - \\text{rank}(A)$ free variables. Each free variable parametrizes a direction along which the solution can move without violating the equations. The solution set is infinite — a translated copy of the null space, which has dimension $n - \\text{rank}(A)$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `The Three Cases Combined`,
//     content: `Putting existence and uniqueness together, every linear system falls into exactly one of three cases.

// $\\text{rank}(A) < \\text{rank}([A \\mid \\mathbf{b}])$: no solution. The system is inconsistent.

// $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) = n$: exactly one solution. The system is consistent and fully determined.

// $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) < n$: infinitely many solutions. The system is consistent but underdetermined, with $n - \\text{rank}(A)$ free parameters.

// There is no case with a finite number of solutions greater than one. If two distinct solutions exist, their difference lies in the null space, which is a [subspace](!/linear-algebra/vector-spaces/subspaces) — and a nontrivial subspace contains infinitely many vectors, generating infinitely many solutions.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `The Rouché–Capelli Theorem`,
//     content: `The existence condition $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$ is known as the Rouché–Capelli theorem (or the Kronecker–Capelli theorem in some traditions). It states:

// The system $A\\mathbf{x} = \\mathbf{b}$ is consistent if and only if the coefficient matrix and the augmented matrix have the same rank. When consistent, the solution set has dimension $n - \\text{rank}(A)$.

// The theorem unifies the existence and dimension questions into a single rank comparison. It applies to every linear system regardless of the shape of $A$ — square, tall, or wide. The proof follows directly from the column-space interpretation: $\\mathbf{b} \\in \\text{Col}(A)$ if and only if adding $\\mathbf{b}$ as a column does not increase the rank.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Square Systems`,
//     content: `When $A$ is $n \\times n$, the [determinant](!/linear-algebra/determinants) provides the sharpest diagnostic.

// If $\\det(A) \\neq 0$: the matrix is [invertible](!/linear-algebra/matrix/inverse), the rank is $n$, and the system $A\\mathbf{x} = \\mathbf{b}$ has exactly one solution for every $\\mathbf{b}$. The solution is $\\mathbf{x} = A^{-1}\\mathbf{b}$, or equivalently, the solution obtained by [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Existence and uniqueness both hold universally — the right-hand side does not matter.

// If $\\det(A) = 0$: the matrix is singular, the rank is less than $n$, and the outcome depends on $\\mathbf{b}$. For some $\\mathbf{b}$ (those in the column space), infinitely many solutions exist. For other $\\mathbf{b}$ (those outside the column space), no solution exists. The determinant test determines whether the coefficient matrix is adequate; the rank comparison with the augmented matrix determines whether the specific $\\mathbf{b}$ is reachable.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Overdetermined Systems`,
//     content: `When $m > n$ — more equations than unknowns — the system is overdetermined. The coefficient matrix is tall, and generically, no solution exists.

// The column space of $A$ is at most $n$-dimensional inside $\\mathbb{R}^m$. When $m > n$, this column space is a proper subspace — most vectors in $\\mathbb{R}^m$ lie outside it. A randomly chosen $\\mathbf{b}$ will almost certainly not be in the column space, making the system inconsistent.

// A solution exists only when $\\mathbf{b}$ happens to lie in the column space — when the extra equations are consistent with the first $n$. When a solution does exist and $\\text{rank}(A) = n$, it is unique.

// When no exact solution exists, the [least-squares](!/linear-algebra/orthogonality/least-squares) approach finds the $\\hat{\\mathbf{x}}$ that minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ — the closest approximation. The least-squares solution satisfies the normal equations $A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}$ and is the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{b}$ onto the column space.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Underdetermined Systems`,
//     content: `When $m < n$ — fewer equations than unknowns — the system is underdetermined. If a solution exists, it is never unique: the rank cannot exceed $m$, which is less than $n$, so at least $n - m$ free variables remain.

// The solution set, when nonempty, is an affine subspace of dimension at least $n - m$. Multiple vectors $\\mathbf{x}$ satisfy the equations, and additional criteria beyond the linear system itself are needed to select a preferred one.

// Common selection criteria include minimum norm (the $\\mathbf{x}$ closest to $\\mathbf{0}$, given by the pseudoinverse $\\mathbf{x} = A^T(AA^T)^{-1}\\mathbf{b}$), sparsity (the $\\mathbf{x}$ with the fewest nonzero entries, central to compressed sensing), and physical constraints (bounds or nonnegativity in engineering applications).

// Underdetermined systems are not defective — they arise naturally whenever a problem has more degrees of freedom than constraints. The linear system identifies the feasible set; the selection criterion picks a point within it.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Geometric Interpretation`,
//     content: `Each equation $a_{i1}x_1 + a_{i2}x_2 + \\cdots + a_{in}x_n = b_i$ defines a hyperplane in $\\mathbb{R}^n$ — a flat set of dimension $n - 1$. The solution set of the full system is the intersection of all $m$ hyperplanes.

// When the system is inconsistent, the hyperplanes have no common point. In $\\mathbb{R}^2$ this means parallel lines. In $\\mathbb{R}^3$ it can mean parallel planes, or planes arranged in a triangular prism where each pair intersects but no point lies on all three.

// When the system has a unique solution, the hyperplanes meet at a single point. This requires at least $n$ independent equations — enough to cut the solution space down from $n$ dimensions to $0$.

// When the system has infinitely many solutions, the hyperplanes meet along a flat of dimension $n - r$, where $r = \\text{rank}(A)$. Each independent equation reduces the dimension of the intersection by one, and the rank counts how many equations cut independently. The remaining $n - r$ dimensions are the free directions in the solution set.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Structure of the Solution Set`,
//     content: `When $A\\mathbf{x} = \\mathbf{b}$ is consistent, the complete solution set has the form

// $$\\{\\mathbf{x}_p + \\mathbf{x}_h : \\mathbf{x}_h \\in \\text{Null}(A)\\}$$

// where $\\mathbf{x}_p$ is any one particular solution. This set is a coset of the null space — the null space translated by $\\mathbf{x}_p$. In geometric terms, it is an affine subspace: a [subspace](!/linear-algebra/vector-spaces/subspaces) shifted away from the origin.

// The dimension of the solution set equals the dimension of the null space: $n - \\text{rank}(A)$. When this is $0$, the solution set is a single point $\\{\\mathbf{x}_p\\}$. When it is $1$, the solution set is a line. When it is $2$, a plane. The shape is always a flat, and the null space determines its orientation.

// The particular solution $\\mathbf{x}_p$ captures the effect of the right-hand side $\\mathbf{b}$. The [homogeneous](!/linear-algebra/linear-systems/homogeneous) component $\\mathbf{x}_h$ captures the inherent freedom in the system — the directions along which the solution can shift without violating any equation. This decomposition into "forced" and "free" parts is one of the most fundamental structural results in linear algebra.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Summary: Solvability Questions Answered`,
//     content: `The two foundational questions about A·x = b — existence and uniqueness — together with the structure of the solution set and the special behavior of square, overdetermined, and underdetermined shapes, can be collected as a six-row Q&A reference. The table below pairs each question a reader might bring to a linear system with the answer in terms of rank, determinant, or solution-set structure.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }

// formulas-injected: v1 | 2026-06-16 | 2 callouts (obj5 solvability_rank_criterion direct, obj10 solution_structure_decomposition direct)

const sectionsContent = {
  obj1: {
    title: `The Two Questions`,
    content: `Given the system $A\\mathbf{x} = \\mathbf{b}$ with $A$ of size $m \\times n$, two logically independent questions arise.

Existence: is there at least one vector $\\mathbf{x}$ satisfying $A\\mathbf{x} = \\mathbf{b}$? This asks whether $\\mathbf{b}$ lies in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

Uniqueness: if a solution exists, is it the only one? This asks whether the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ is trivial.

The two questions are independent — existence can hold without uniqueness, and non-existence makes uniqueness moot. Both are answered by the [rank](!/linear-algebra/matrix/rank) of $A$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Existence Condition`,
    content: `The system $A\\mathbf{x} = \\mathbf{b}$ has at least one solution if and only if

$$\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$$

When this condition holds, $\\mathbf{b}$ is already a linear combination of the columns of $A$, so appending $\\mathbf{b}$ as an extra column does not introduce a new independent direction — the rank stays the same.

When the condition fails — $\\text{rank}([A \\mid \\mathbf{b}]) > \\text{rank}(A)$ — the vector $\\mathbf{b}$ is not in the column space. In the [echelon form](!/linear-algebra/linear-systems/echelon-form) of the augmented matrix, this appears as a row $[0 \\; 0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$: the equation $0 = d$ has no solution, and the system is inconsistent.

Since appending one column can increase the rank by at most $1$, the only possibilities are $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A)$ (consistent) or $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A) + 1$ (inconsistent).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Uniqueness Condition`,
    content: `When a solution exists, it is unique if and only if

$$\\text{rank}(A) = n$$

where $n$ is the number of unknowns. Full column rank means every column of $A$ contains a pivot, leaving no free variables. The null space is $\\{\\mathbf{0}\\}$, so the particular solution $\\mathbf{x}_p$ stands alone with nothing to add.

When $\\text{rank}(A) < n$, there are $n - \\text{rank}(A)$ free variables. Each free variable parametrizes a direction along which the solution can move without violating the equations. The solution set is infinite — a translated copy of the null space, which has dimension $n - \\text{rank}(A)$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Three Cases Combined`,
    content: `Putting existence and uniqueness together, every linear system falls into exactly one of three cases.

$\\text{rank}(A) < \\text{rank}([A \\mid \\mathbf{b}])$: no solution. The system is inconsistent.

$\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) = n$: exactly one solution. The system is consistent and fully determined.

$\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) < n$: infinitely many solutions. The system is consistent but underdetermined, with $n - \\text{rank}(A)$ free parameters.

There is no case with a finite number of solutions greater than one. If two distinct solutions exist, their difference lies in the null space, which is a [subspace](!/linear-algebra/vector-spaces/subspaces) — and a nontrivial subspace contains infinitely many vectors, generating infinitely many solutions.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Rouché–Capelli Theorem`,
    content: `The existence condition $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$ is known as the Rouché–Capelli theorem (or the Kronecker–Capelli theorem in some traditions):

@academic[formula_callout:solvability_rank_criterion|Solvability Rank Criterion|$$A\\mathbf{x} = \\mathbf{b} \\text{ consistent} \\iff \\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$$]@
@academic[formulas_link:/linear-algebra/formulas#solvability_rank_criterion]@

When consistent, the solution set has dimension $n - \\text{rank}(A)$.

The theorem unifies the existence and dimension questions into a single rank comparison. It applies to every linear system regardless of the shape of $A$ — square, tall, or wide. The proof follows directly from the column-space interpretation: $\\mathbf{b} \\in \\text{Col}(A)$ if and only if adding $\\mathbf{b}$ as a column does not increase the rank.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Square Systems`,
    content: `When $A$ is $n \\times n$, the [determinant](!/linear-algebra/determinants) provides the sharpest diagnostic.

If $\\det(A) \\neq 0$: the matrix is [invertible](!/linear-algebra/matrix/inverse), the rank is $n$, and the system $A\\mathbf{x} = \\mathbf{b}$ has exactly one solution for every $\\mathbf{b}$. The solution is $\\mathbf{x} = A^{-1}\\mathbf{b}$, or equivalently, the solution obtained by [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Existence and uniqueness both hold universally — the right-hand side does not matter.

If $\\det(A) = 0$: the matrix is singular, the rank is less than $n$, and the outcome depends on $\\mathbf{b}$. For some $\\mathbf{b}$ (those in the column space), infinitely many solutions exist. For other $\\mathbf{b}$ (those outside the column space), no solution exists. The determinant test determines whether the coefficient matrix is adequate; the rank comparison with the augmented matrix determines whether the specific $\\mathbf{b}$ is reachable.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Overdetermined Systems`,
    content: `When $m > n$ — more equations than unknowns — the system is overdetermined. The coefficient matrix is tall, and generically, no solution exists.

The column space of $A$ is at most $n$-dimensional inside $\\mathbb{R}^m$. When $m > n$, this column space is a proper subspace — most vectors in $\\mathbb{R}^m$ lie outside it. A randomly chosen $\\mathbf{b}$ will almost certainly not be in the column space, making the system inconsistent.

A solution exists only when $\\mathbf{b}$ happens to lie in the column space — when the extra equations are consistent with the first $n$. When a solution does exist and $\\text{rank}(A) = n$, it is unique.

When no exact solution exists, the [least-squares](!/linear-algebra/orthogonality/least-squares) approach finds the $\\hat{\\mathbf{x}}$ that minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ — the closest approximation. The least-squares solution satisfies the normal equations $A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}$ and is the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{b}$ onto the column space.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Underdetermined Systems`,
    content: `When $m < n$ — fewer equations than unknowns — the system is underdetermined. If a solution exists, it is never unique: the rank cannot exceed $m$, which is less than $n$, so at least $n - m$ free variables remain.

The solution set, when nonempty, is an affine subspace of dimension at least $n - m$. Multiple vectors $\\mathbf{x}$ satisfy the equations, and additional criteria beyond the linear system itself are needed to select a preferred one.

Common selection criteria include minimum norm (the $\\mathbf{x}$ closest to $\\mathbf{0}$, given by the pseudoinverse $\\mathbf{x} = A^T(AA^T)^{-1}\\mathbf{b}$), sparsity (the $\\mathbf{x}$ with the fewest nonzero entries, central to compressed sensing), and physical constraints (bounds or nonnegativity in engineering applications).

Underdetermined systems are not defective — they arise naturally whenever a problem has more degrees of freedom than constraints. The linear system identifies the feasible set; the selection criterion picks a point within it.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Geometric Interpretation`,
    content: `Each equation $a_{i1}x_1 + a_{i2}x_2 + \\cdots + a_{in}x_n = b_i$ defines a hyperplane in $\\mathbb{R}^n$ — a flat set of dimension $n - 1$. The solution set of the full system is the intersection of all $m$ hyperplanes.

When the system is inconsistent, the hyperplanes have no common point. In $\\mathbb{R}^2$ this means parallel lines. In $\\mathbb{R}^3$ it can mean parallel planes, or planes arranged in a triangular prism where each pair intersects but no point lies on all three.

When the system has a unique solution, the hyperplanes meet at a single point. This requires at least $n$ independent equations — enough to cut the solution space down from $n$ dimensions to $0$.

When the system has infinitely many solutions, the hyperplanes meet along a flat of dimension $n - r$, where $r = \\text{rank}(A)$. Each independent equation reduces the dimension of the intersection by one, and the rank counts how many equations cut independently. The remaining $n - r$ dimensions are the free directions in the solution set.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Structure of the Solution Set`,
    content: `When $A\\mathbf{x} = \\mathbf{b}$ is consistent, the complete solution set has the form

@academic[formula_callout:solution_structure_decomposition|Solution Structure Decomposition|$$\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h, \\quad \\mathbf{x}_h \\in \\text{Null}(A)$$]@
@academic[formulas_link:/linear-algebra/formulas#solution_structure_decomposition]@

where $\\mathbf{x}_p$ is any one particular solution and $\\mathbf{x}_h$ ranges over the null space. Equivalently, the solution set is $\\{\\mathbf{x}_p + \\mathbf{x}_h : \\mathbf{x}_h \\in \\text{Null}(A)\\}$ — a coset of the null space, the null space translated by $\\mathbf{x}_p$. In geometric terms, it is an affine subspace: a [subspace](!/linear-algebra/vector-spaces/subspaces) shifted away from the origin.

The dimension of the solution set equals the dimension of the null space: $n - \\text{rank}(A)$. When this is $0$, the solution set is a single point $\\{\\mathbf{x}_p\\}$. When it is $1$, the solution set is a line. When it is $2$, a plane. The shape is always a flat, and the null space determines its orientation.

The particular solution $\\mathbf{x}_p$ captures the effect of the right-hand side $\\mathbf{b}$. The [homogeneous](!/linear-algebra/linear-systems/homogeneous) component $\\mathbf{x}_h$ captures the inherent freedom in the system — the directions along which the solution can shift without violating any equation. This decomposition into &quot;forced&quot; and &quot;free&quot; parts is one of the most fundamental structural results in linear algebra.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Summary: Solvability Questions Answered`,
    content: `The two foundational questions about A·x = b — existence and uniqueness — together with the structure of the solution set and the special behavior of square, overdetermined, and underdetermined shapes, can be collected as a six-row Q&amp;A reference. The table below pairs each question a reader might bring to a linear system with the answer in terms of rank, determinant, or solution-set structure.`,
    before: ``,
    after: ``,
    link: ``,
  },
}



 const introContent = {
  title: `When Solutions Exist and When They Are Unique`,
  content: `Two separate questions govern every linear system: does at least one solution exist, and if so, is that solution the only one? The rank of the coefficient matrix answers both. A single integer determines whether the system is inconsistent, uniquely solvable, or infinitely underdetermined — and characterizes the geometry of the solution set in each case.`,
}

const faqQuestions = {
  obj1: {
    question: "When does a linear system have a solution?",
    answer: "The system Ax = b has a solution if and only if rank(A) = rank([A | b]), meaning b lies in the column space of A. If appending b as a column increases the rank, the system is inconsistent and no solution exists.",
    sectionId: "2"
  },
  obj2: {
    question: "When is the solution unique?",
    answer: "When a solution exists, it is unique if and only if rank(A) = n (the number of unknowns). Full column rank means no free variables and a trivial null space. When rank(A) < n, there are n − rank(A) free parameters and infinitely many solutions.",
    sectionId: "3"
  },
  obj3: {
    question: "What is the Rouché-Capelli theorem?",
    answer: "The Rouché-Capelli theorem states that Ax = b is consistent if and only if the coefficient matrix and the augmented matrix have the same rank. When consistent, the solution set has dimension n − rank(A). It unifies existence and dimension into a single rank comparison.",
    sectionId: "5"
  },
  obj4: {
    question: "What happens with overdetermined systems?",
    answer: "When there are more equations than unknowns (m > n), no exact solution usually exists because most vectors b lie outside the column space. When no exact solution exists, the least-squares approach finds the x that minimizes ‖Ax − b‖² by solving the normal equations AᵀAx = Aᵀb.",
    sectionId: "7"
  },
  obj5: {
    question: "What is the structure of the solution set?",
    answer: "When consistent, the solution set is {xₚ + xₕ : xₕ ∈ Null(A)} — the null space translated by a particular solution. Its dimension equals n − rank(A). When this is 0, the solution is a single point. When positive, it is a line, plane, or higher-dimensional flat.",
    sectionId: "10"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Solvability of Linear Systems",
    "description": "Solvability of linear systems: existence and uniqueness via rank, Rouché-Capelli theorem, three cases, square and rectangular systems, overdetermined least squares, and solution set structure.",
    "url": "https://www.learnmathclass.com/linear-algebra/linear-systems/solvability",
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
      "name": "Solvability of Linear Systems"
    },
    "teaches": [
      "Existence condition via rank comparison",
      "Uniqueness condition via full column rank",
      "The three cases: none, unique, infinitely many",
      "Rouché-Capelli theorem",
      "Square systems and the determinant test",
      "Overdetermined systems and least squares",
      "Underdetermined systems and minimum norm",
      "Geometric interpretation as hyperplane intersections",
      "Solution set as translated null space"
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
        "name": "Linear Systems",
        "item": "https://www.learnmathclass.com/linear-algebra/linear-systems"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Solvability",
        "item": "https://www.learnmathclass.com/linear-algebra/linear-systems/solvability"
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

//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/linear-systems/solvability",
//          name: "name"
//       },
        
//        }
//     }

return {
  props:{
    sectionsContent,
    introContent,
    systemShapes,
    obj10Table,
    solvabilityQuestions,
    faqQuestions,
    schemas,
    seoData: {
      title: "Solvability: Existence & Uniqueness | Learn Math Class",
      description: "Solvability of linear systems: existence and uniqueness via rank, Rouché-Capelli theorem, three cases, square and rectangular systems, overdetermined least squares, and solution set structure.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/linear-systems/solvability",
      name: "Solvability of Linear Systems"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function SolvabilityPage({
  seoData,
  sectionsContent,
  introContent,
  systemShapes,
  obj10Table,
  solvabilityQuestions,
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
          <DiagramFrame
            key={'obj8-diagram'}
            id="system-shapes"
            title="What the shape of A predicts"
            source="/linear-algebra/linear-systems/solvability"
          >
            <ObjectTypeProfile data={systemShapes} theme="navy" variant="grid" />
          </DiagramFrame>,
          `Read down the uniqueness column and the shape does more work than down the existence column. A wide matrix can never have a unique solution — rank is capped by $m$, which is below $n$, so free variables are guaranteed before $\\mathbf{b}$ is even mentioned. Existence is different: every row except the first says "depends on $\\mathbf{b}$", because whether $\\mathbf{b}$ lies in the column space is not a fact about the dimensions of $A$ at all.`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div
            key={'obj10-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj10Table }}
          />,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          `The first group below is the theory and the second is what to do about it. Existence and uniqueness are each a single rank comparison, and they are independent — a system can have solutions without having one solution, or have at most one without having any. The second group takes the cases where the answer is unwelcome and says what replaces the original question.`,
          <DiagramFrame
            key={'obj11-diagram'}
            id="solvability-questions"
            title="Every solvability question, answered by rank"
            source="/linear-algebra/linear-systems/solvability"
          >
            <IdentitySheet data={solvabilityQuestions} theme="navy" variant="ledger" />
          </DiagramFrame>,
          `Both comparisons come out of the same reduction, which is why they are never computed separately. Reduce $[A \\mid \\mathbf{b}]$ once: a contradiction row settles existence, and the count of pivot columns settles uniqueness. Nothing else is needed, and no determinant is involved — which matters because the determinant test only applies to square systems, while these two apply to every system.`,
          `The last two rows are worth reading as a change of question rather than a failure. An overdetermined system usually has no solution, so least squares asks for the closest approximation instead and answers with a projection. An underdetermined system has too many, so a selection criterion is imposed from outside the algebra — minimum norm, sparsity, or whatever the model requires. In both cases the linear algebra is finished; what remains is deciding what you wanted.`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Solvability of Linear Systems</h1>
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