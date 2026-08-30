// // // tables-optimized: v4 | 2026-05-18 | 2 tables (obj2 aggregation, obj11 summary capstone)
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
// //   "Cholesky decomposition",
// //   "Cholesky factorization",
// //   "LL^T factorization",
// //   "symmetric positive definite matrix",
// //   "Cholesky algorithm",
// //   "positive definiteness test",
// //   "Cholesky vs LU",
// //   "LDL^T decomposition",
// //   "Cholesky solve linear system",
// //   "matrix square root",
// //   "covariance matrix Cholesky",
// //   "pivoted Cholesky",
// //   "Cholesky computational cost",
// //   "lower triangular factorization"
// // ]

// //   const linkStyle = 'color: inherit; text-decoration: underline;'

// //   // ---------- TABLES ----------

// //   // obj2 — aggregation: equivalent characterizations of positive definiteness
// //   const obj2Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.aggregation}">Criterion</th>
// //       <th style="${tableHeaders.aggregation}">Condition</th>
// //       <th style="${tableHeaders.aggregation}">Computational cost</th>
// //       <th style="${tableHeaders.aggregation}">When most useful</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Definition</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = A<sup>T</sup> and x<sup>T</sup>Ax &gt; 0 for every x ≠ 0</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">not directly testable</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">theoretical reasoning, proofs</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/eigen" style="${linkStyle}">Eigenvalues</a></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every eigenvalue λ<sub>i</sub> &gt; 0</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">O(n<sup>3</sup>) (full eigenvalue computation)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when eigenvalues are needed anyway</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Leading principal minors</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/determinants" style="${linkStyle}">determinant</a> of every upper-left k × k submatrix &gt; 0</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n determinants, O(n<sup>4</sup>) total</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">small matrices, exact arithmetic</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Cholesky pivots</td>
// //       <td style="padding: 12px 15px; color: #34495e;">every algorithm pivot (under the square root) &gt; 0</td>
// //       <td style="padding: 12px 15px; color: #34495e;">n<sup>3</sup>/3 (and yields L as a byproduct)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">practical default: test and factor in one pass</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// //   // obj11 — summary capstone: matrix property → Cholesky outcome
// //   const summaryTable = `
// // <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.summary}">Matrix property</th>
// //       <th style="${tableHeaders.summary} text-align: center;">A = LL<sup>T</sup> exists?</th>
// //       <th style="${tableHeaders.summary}">Algorithm behavior</th>
// //       <th style="${tableHeaders.summary}">Remedy / interpretation</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetric positive definite</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">yes, uniquely</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">runs to completion with strictly positive diagonal of L</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard solver — use directly</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetric positive semi-definite (some λ = 0)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">not in standard form; <a href="#10" style="${linkStyle}">pivoted form exists</a></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">encounters a zero diagonal in L</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use pivoted Cholesky PAP<sup>T</sup> = LL<sup>T</sup>, or regularize with A + εI</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetric indefinite</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">no</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">negative value under the square root halts the algorithm</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use LDL<sup>T</sup> with symmetric pivoting, or a different decomposition</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Non-symmetric</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">no</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the form A = LL<sup>T</sup> requires A = A<sup>T</sup></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use <a href="/linear-algebra/decompositions/lower-upper" style="${linkStyle}">LU</a> instead</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Numerically near-singular SPD</td>
// //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">yes, but ill-conditioned</td>
// //       <td style="padding: 12px 15px; color: #34495e;">runs, but small pivots amplify rounding error in L</td>
// //       <td style="padding: 12px 15px; color: #34495e;">add small regularization εI; monitor smallest pivot</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // const sectionsContent = {
// // //   obj1: {
// // //     title: `What Cholesky Decomposition Is`,
// // //     content: `The Cholesky decomposition writes a [symmetric](!/linear-algebra/matrix/types) positive definite [matrix](!/linear-algebra/matrix) $A$ as

// // // $$A = LL^T$$

// // // where $L$ is lower [triangular](!/linear-algebra/matrix/types) with strictly positive diagonal entries. The matrix $L$ is the Cholesky factor — the matrix "square root" of $A$ in the sense that $A$ is reconstructed by multiplying $L$ by its own [transpose](!/linear-algebra/matrix/operations).

// // // The factorization is unique: for a given symmetric positive definite $A$, there is exactly one lower triangular $L$ with positive diagonal satisfying $A = LL^T$. The convention can also be written $A = R^TR$ with $R = L^T$ upper triangular — the choice between lower and upper is a matter of convention.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj2: {
// // //     title: `Existence: Symmetric Positive Definite Matrices`,
// // //     content: `The Cholesky factorization exists if and only if $A$ is symmetric and positive definite. Symmetry means $A = A^T$. Positive definiteness means $\\mathbf{x}^TA\\mathbf{x} > 0$ for every nonzero vector $\\mathbf{x}$.

// // // Several equivalent conditions characterize positive definiteness: all [eigenvalues](!/linear-algebra/eigen) of $A$ are strictly positive; all leading principal minors (the [determinants](!/linear-algebra/determinants) of the upper-left $k \\times k$ submatrices) are positive; all pivots in [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) (without pivoting) are positive.

// // // If either symmetry or positive definiteness fails, the Cholesky algorithm breaks down. A non-symmetric matrix has no $LL^T$ form. A symmetric matrix that is positive semi-definite (some eigenvalue is zero) produces a zero on the diagonal of $L$. An indefinite matrix (eigenvalues of both signs) produces a negative number under the square root, halting the algorithm.

// // // These equivalent characterizations differ in computational cost and in when each is the practical tool of choice.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj3: {
// // //     title: `The Algorithm`,
// // //     content: `The Cholesky factor $L$ is computed column by column, from left to right.

// // // For column $j$, the diagonal entry is

// // // $$l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$$

// // // and the sub-diagonal entries (for $i > j$) are

// // // $$l_{ij} = \\frac{1}{l_{jj}}\\left(a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk}\\right)$$

// // // The square root in the diagonal formula is always real and positive because positive definiteness guarantees that the expression under the root is strictly positive at every step.

// // // ## Worked Example

// // // For $A = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix}$:

// // // $l_{11} = \\sqrt{4} = 2$. $l_{21} = 2/2 = 1$. $l_{31} = -2/2 = -1$.

// // // $l_{22} = \\sqrt{5 - 1^2} = \\sqrt{4} = 2$. $l_{32} = (1 - (-1)(1))/2 = 2/2 = 1$.

// // // $l_{33} = \\sqrt{6 - (-1)^2 - 1^2} = \\sqrt{4} = 2$.

// // // $$L = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 2 & 0 \\\\ -1 & 1 & 2 \\end{pmatrix}$$

// // // Verification: $LL^T = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix} = A$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj4: {
// // //     title: `Solving Systems with Cholesky`,
// // //     content: `Given $A = LL^T$, the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ is solved in two steps:

// // // Forward substitution: solve $L\\mathbf{y} = \\mathbf{b}$ for $\\mathbf{y}$. Cost: $O(n^2)$.

// // // Back substitution: solve $L^T\\mathbf{x} = \\mathbf{y}$ for $\\mathbf{x}$. Cost: $O(n^2)$.

// // // The structure is identical to [LU](!/linear-algebra/decompositions/lower-upper), but only one triangular factor needs to be stored. The other is its transpose, which costs nothing extra — the same array of numbers is read in reverse order.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj5: {
// // //     title: `Computational Cost`,
// // //     content: `The Cholesky factorization requires roughly $\\frac{1}{3}n^3$ arithmetic operations — exactly half the cost of [LU](!/linear-algebra/decompositions/lower-upper) factorization ($\\frac{2}{3}n^3$). The saving comes from symmetry: the lower triangle of $A$ determines the upper triangle ($a_{ij} = a_{ji}$), so only half the entries need processing.

// // // Each triangular solve costs $O(n^2)$. For a single system, the total is $\\frac{1}{3}n^3 + O(n^2)$. For $k$ systems sharing the same coefficient matrix, the cost is $\\frac{1}{3}n^3 + 2kn^2$.

// // // For large symmetric positive definite systems, Cholesky is the fastest direct solver available. It is roughly twice as fast as LU and requires roughly half the storage (only the lower triangle of $L$).`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj6: {
// // //     title: `No Pivoting Needed`,
// // //     content: `Unlike LU, the Cholesky algorithm never requires row swaps. Positive definiteness guarantees that the quantity under the square root is strictly positive at every step — no zero or negative pivots can occur.

// // // This makes the algorithm simpler (no permutation matrix to track), more stable (no near-zero pivots to amplify errors), and more predictable (the algorithm either runs to completion or breaks down, with no ambiguity).

// // // If the algorithm encounters a non-positive value under the square root, the matrix is not positive definite. The breakdown happens at the first index $j$ where the leading $j \\times j$ principal submatrix fails to be positive definite. This makes Cholesky an efficient positive definiteness test: attempt the factorization and check whether it succeeds.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj7: {
// // //     title: `Cholesky as a Positive Definiteness Test`,
// // //     content: `The Cholesky algorithm tests positive definiteness as a side effect of factoring. If $A = LL^T$ completes with all diagonal entries of $L$ strictly positive, $A$ is positive definite. If the algorithm breaks down at any step, $A$ is not positive definite.

// // // This is often more practical than computing all [eigenvalues](!/linear-algebra/eigen) (also $O(n^3)$ but with a larger constant) or checking all leading principal minors (which requires $n$ [determinant](!/linear-algebra/determinants) computations).

// // // The test is binary: the factorization either succeeds or fails. When it succeeds, $L$ is available for immediate use in system solving. When it fails, the index at which it breaks indicates which leading submatrix is the first to lose positive definiteness.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj8: {
// // //     title: `Where Cholesky Appears`,
// // //     content: `Symmetric positive definite matrices appear throughout applied mathematics, and Cholesky is the default solver for all of them.

// // // The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ produce a symmetric positive definite matrix $A^TA$ (when $A$ has full column [rank](!/linear-algebra/matrix/rank)). Cholesky on $A^TA$ solves least squares, though [QR](!/linear-algebra/decompositions/qr) is preferred for numerical stability.

// // // Covariance matrices in statistics are symmetric positive semi-definite (positive definite when no variable is a linear combination of the others). Cholesky is used to sample from multivariate normal distributions: if $\\Sigma = LL^T$, then $L\\mathbf{z}$ (with $\\mathbf{z}$ standard normal) has distribution $\\mathcal{N}(\\mathbf{0}, \\Sigma)$.

// // // Stiffness matrices in finite element analysis are symmetric positive definite. Newton's method in optimization solves $H\\mathbf{d} = -\\nabla f$ where $H$ (the Hessian) is positive definite at a strict local minimum. In both cases, Cholesky is the standard solver.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj9: {
// // //     title: `Cholesky and LU: The Relationship`,
// // //     content: `For a symmetric positive definite matrix, [LU](!/linear-algebra/decompositions/lower-upper) factorization without pivoting always succeeds and produces $A = L_U D L_U^T$, where $L_U$ is unit lower triangular and $D$ is diagonal with positive entries. This is the $LDL^T$ decomposition.

// // // The Cholesky factor is $L_{\\text{Chol}} = L_U D^{1/2}$ — the unit lower triangular factor with $\\sqrt{D}$ absorbed into it. Equivalently, $A = (L_U D^{1/2})(L_U D^{1/2})^T = LL^T$.

// // // Cholesky is the symmetric-positive-definite specialization of LU. It exploits $A = A^T$ to halve the work and the storage, and it exploits positive definiteness to eliminate the need for pivoting. The $LDL^T$ variant avoids square roots entirely (computing $D$ and $L_U$ separately) and is sometimes preferred when the square roots are expensive or when the matrix is only positive semi-definite.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj10: {
// // //     title: `The Semi-Definite and Rank-Deficient Case`,
// // //     content: `A symmetric positive semi-definite matrix ($\\mathbf{x}^TA\\mathbf{x} \\geq 0$ with equality for some nonzero $\\mathbf{x}$) has at least one zero eigenvalue. The standard Cholesky factorization breaks down when it encounters the corresponding zero diagonal entry.

// // // Pivoted Cholesky handles this case: $PAP^T = LL^T$ with a [permutation](!/linear-algebra/matrix/types) matrix $P$ and $L$ possibly having some zero diagonal entries. The permutation reorders the rows and columns to push the rank deficiency to the end.

// // // In practice, numerical near-singularity — eigenvalues very close to zero but not exactly zero — is more common than exact singularity. A condition-number-based threshold determines which eigenvalues are treated as zero. Adding a small regularization $\\epsilon I$ to $A$ (making it $A + \\epsilon I$, which is positive definite for any $\\epsilon > 0$) is a common remedy that restores the standard Cholesky factorization at the cost of a controlled perturbation.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   // NEW capstone section: obj11
// // //   obj11: {
// // //     title: `Summary: Matrix Property and Cholesky Outcome`,
// // //     content: `The behavior of the Cholesky algorithm depends entirely on what kind of matrix it is asked to factor — positive definite, positive semi-definite, indefinite, non-symmetric, or merely near-singular. The table below collects each scenario, what the algorithm does in each case, and the standard remedy when the straightforward $A = LL^T$ form does not apply. The "positive semi-definite" row links back to the pivoted-Cholesky treatment above.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // // }

// // // linear-algebra/decompositions/cholesky — sectionsContent with formula callouts (v1)
// // // 3 callouts injected: obj1 (Cholesky Decomposition), obj3 (Diagonal Formula + Off-Diagonal Formula)
// // // Worked example $$ displays in obj3 preserved untouched (derivation steps, not canonical formulas)

// // const sectionsContent = {
// //   obj1: {
// //     title: `What Cholesky Decomposition Is`,
// //     content: `The Cholesky decomposition writes a [symmetric](!/linear-algebra/matrix/types) positive definite [matrix](!/linear-algebra/matrix) $A$ as

// // @academic[formula_callout:cholesky_decomposition|Cholesky Decomposition|$$A = LL^T$$]@
// // @academic[formulas_link:/linear-algebra/formulas#cholesky_decomposition]@

// // where $L$ is lower [triangular](!/linear-algebra/matrix/types) with strictly positive diagonal entries. The matrix $L$ is the Cholesky factor — the matrix "square root" of $A$ in the sense that $A$ is reconstructed by multiplying $L$ by its own [transpose](!/linear-algebra/matrix/operations).

// // The factorization is unique: for a given symmetric positive definite $A$, there is exactly one lower triangular $L$ with positive diagonal satisfying $A = LL^T$. The convention can also be written $A = R^TR$ with $R = L^T$ upper triangular — the choice between lower and upper is a matter of convention.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `Existence: Symmetric Positive Definite Matrices`,
// //     content: `The Cholesky factorization exists if and only if $A$ is symmetric and positive definite. Symmetry means $A = A^T$. Positive definiteness means $\\mathbf{x}^TA\\mathbf{x} > 0$ for every nonzero vector $\\mathbf{x}$.

// // Several equivalent conditions characterize positive definiteness: all [eigenvalues](!/linear-algebra/eigen) of $A$ are strictly positive; all leading principal minors (the [determinants](!/linear-algebra/determinants) of the upper-left $k \\times k$ submatrices) are positive; all pivots in [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) (without pivoting) are positive.

// // If either symmetry or positive definiteness fails, the Cholesky algorithm breaks down. A non-symmetric matrix has no $LL^T$ form. A symmetric matrix that is positive semi-definite (some eigenvalue is zero) produces a zero on the diagonal of $L$. An indefinite matrix (eigenvalues of both signs) produces a negative number under the square root, halting the algorithm.

// // These equivalent characterizations differ in computational cost and in when each is the practical tool of choice.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `The Algorithm`,
// //     content: `The Cholesky factor $L$ is computed column by column, from left to right.

// // For column $j$, the diagonal entry is

// // @academic[formula_callout:cholesky_diagonal_formula|Cholesky Diagonal Formula|$$l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#cholesky_diagonal_formula]@

// // and the sub-diagonal entries (for $i > j$) are

// // @academic[formula_callout:cholesky_off_diagonal_formula|Cholesky Off-Diagonal Formula|$$l_{ij} = \\frac{1}{l_{jj}}\\left(a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk}\\right)$$]@
// // @academic[formulas_link:/linear-algebra/formulas#cholesky_off_diagonal_formula]@

// // The square root in the diagonal formula is always real and positive because positive definiteness guarantees that the expression under the root is strictly positive at every step.

// // ## Worked Example

// // For $A = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix}$:

// // $l_{11} = \\sqrt{4} = 2$. $l_{21} = 2/2 = 1$. $l_{31} = -2/2 = -1$.

// // $l_{22} = \\sqrt{5 - 1^2} = \\sqrt{4} = 2$. $l_{32} = (1 - (-1)(1))/2 = 2/2 = 1$.

// // $l_{33} = \\sqrt{6 - (-1)^2 - 1^2} = \\sqrt{4} = 2$.

// // $$L = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 2 & 0 \\\\ -1 & 1 & 2 \\end{pmatrix}$$

// // Verification: $LL^T = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix} = A$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Solving Systems with Cholesky`,
// //     content: `Given $A = LL^T$, the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ is solved in two steps:

// // Forward substitution: solve $L\\mathbf{y} = \\mathbf{b}$ for $\\mathbf{y}$. Cost: $O(n^2)$.

// // Back substitution: solve $L^T\\mathbf{x} = \\mathbf{y}$ for $\\mathbf{x}$. Cost: $O(n^2)$.

// // The structure is identical to [LU](!/linear-algebra/decompositions/lower-upper), but only one triangular factor needs to be stored. The other is its transpose, which costs nothing extra — the same array of numbers is read in reverse order.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Computational Cost`,
// //     content: `The Cholesky factorization requires roughly $\\frac{1}{3}n^3$ arithmetic operations — exactly half the cost of [LU](!/linear-algebra/decompositions/lower-upper) factorization ($\\frac{2}{3}n^3$). The saving comes from symmetry: the lower triangle of $A$ determines the upper triangle ($a_{ij} = a_{ji}$), so only half the entries need processing.

// // Each triangular solve costs $O(n^2)$. For a single system, the total is $\\frac{1}{3}n^3 + O(n^2)$. For $k$ systems sharing the same coefficient matrix, the cost is $\\frac{1}{3}n^3 + 2kn^2$.

// // For large symmetric positive definite systems, Cholesky is the fastest direct solver available. It is roughly twice as fast as LU and requires roughly half the storage (only the lower triangle of $L$).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `No Pivoting Needed`,
// //     content: `Unlike LU, the Cholesky algorithm never requires row swaps. Positive definiteness guarantees that the quantity under the square root is strictly positive at every step — no zero or negative pivots can occur.

// // This makes the algorithm simpler (no permutation matrix to track), more stable (no near-zero pivots to amplify errors), and more predictable (the algorithm either runs to completion or breaks down, with no ambiguity).

// // If the algorithm encounters a non-positive value under the square root, the matrix is not positive definite. The breakdown happens at the first index $j$ where the leading $j \\times j$ principal submatrix fails to be positive definite. This makes Cholesky an efficient positive definiteness test: attempt the factorization and check whether it succeeds.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Cholesky as a Positive Definiteness Test`,
// //     content: `The Cholesky algorithm tests positive definiteness as a side effect of factoring. If $A = LL^T$ completes with all diagonal entries of $L$ strictly positive, $A$ is positive definite. If the algorithm breaks down at any step, $A$ is not positive definite.

// // This is often more practical than computing all [eigenvalues](!/linear-algebra/eigen) (also $O(n^3)$ but with a larger constant) or checking all leading principal minors (which requires $n$ [determinant](!/linear-algebra/determinants) computations).

// // The test is binary: the factorization either succeeds or fails. When it succeeds, $L$ is available for immediate use in system solving. When it fails, the index at which it breaks indicates which leading submatrix is the first to lose positive definiteness.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Where Cholesky Appears`,
// //     content: `Symmetric positive definite matrices appear throughout applied mathematics, and Cholesky is the default solver for all of them.

// // The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ produce a symmetric positive definite matrix $A^TA$ (when $A$ has full column [rank](!/linear-algebra/matrix/rank)). Cholesky on $A^TA$ solves least squares, though [QR](!/linear-algebra/decompositions/qr) is preferred for numerical stability.

// // Covariance matrices in statistics are symmetric positive semi-definite (positive definite when no variable is a linear combination of the others). Cholesky is used to sample from multivariate normal distributions: if $\\Sigma = LL^T$, then $L\\mathbf{z}$ (with $\\mathbf{z}$ standard normal) has distribution $\\mathcal{N}(\\mathbf{0}, \\Sigma)$.

// // Stiffness matrices in finite element analysis are symmetric positive definite. Newton's method in optimization solves $H\\mathbf{d} = -\\nabla f$ where $H$ (the Hessian) is positive definite at a strict local minimum. In both cases, Cholesky is the standard solver.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Cholesky and LU: The Relationship`,
// //     content: `For a symmetric positive definite matrix, [LU](!/linear-algebra/decompositions/lower-upper) factorization without pivoting always succeeds and produces $A = L_U D L_U^T$, where $L_U$ is unit lower triangular and $D$ is diagonal with positive entries. This is the $LDL^T$ decomposition.

// // The Cholesky factor is $L_{\\text{Chol}} = L_U D^{1/2}$ — the unit lower triangular factor with $\\sqrt{D}$ absorbed into it. Equivalently, $A = (L_U D^{1/2})(L_U D^{1/2})^T = LL^T$.

// // Cholesky is the symmetric-positive-definite specialization of LU. It exploits $A = A^T$ to halve the work and the storage, and it exploits positive definiteness to eliminate the need for pivoting. The $LDL^T$ variant avoids square roots entirely (computing $D$ and $L_U$ separately) and is sometimes preferred when the square roots are expensive or when the matrix is only positive semi-definite.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `The Semi-Definite and Rank-Deficient Case`,
// //     content: `A symmetric positive semi-definite matrix ($\\mathbf{x}^TA\\mathbf{x} \\geq 0$ with equality for some nonzero $\\mathbf{x}$) has at least one zero eigenvalue. The standard Cholesky factorization breaks down when it encounters the corresponding zero diagonal entry.

// // Pivoted Cholesky handles this case: $PAP^T = LL^T$ with a [permutation](!/linear-algebra/matrix/types) matrix $P$ and $L$ possibly having some zero diagonal entries. The permutation reorders the rows and columns to push the rank deficiency to the end.

// // In practice, numerical near-singularity — eigenvalues very close to zero but not exactly zero — is more common than exact singularity. A condition-number-based threshold determines which eigenvalues are treated as zero. Adding a small regularization $\\epsilon I$ to $A$ (making it $A + \\epsilon I$, which is positive definite for any $\\epsilon > 0$) is a common remedy that restores the standard Cholesky factorization at the cost of a controlled perturbation.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `Summary: Matrix Property and Cholesky Outcome`,
// //     content: `The behavior of the Cholesky algorithm depends entirely on what kind of matrix it is asked to factor — positive definite, positive semi-definite, indefinite, non-symmetric, or merely near-singular. The table below collects each scenario, what the algorithm does in each case, and the standard remedy when the straightforward $A = LL^T$ form does not apply. The "positive semi-definite" row links back to the pivoted-Cholesky treatment above.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }




// // const introContent = {
// //   title: `The Square Root of a Symmetric Positive Definite Matrix`,
// //   content: `The Cholesky decomposition factors a symmetric positive definite matrix as A = LLᵀ, where L is lower triangular with positive diagonal entries. It exploits symmetry to achieve half the cost of LU, requires no pivoting, and doubles as a positive definiteness test. It is the fastest direct solver for the class of matrices that appears most often in optimization, statistics, and simulation.`,
// // }


// // const faqQuestions = {
// //   obj1: {
// //     question: "What is the Cholesky decomposition?",
// //     answer: "The Cholesky decomposition writes a symmetric positive definite matrix A as A = LLᵀ, where L is lower triangular with strictly positive diagonal entries. It is the unique matrix square root in this form and is the fastest direct solver for symmetric positive definite systems.",
// //     sectionId: "1"
// //   },
// //   obj2: {
// //     question: "When does the Cholesky decomposition exist?",
// //     answer: "The Cholesky factorization exists if and only if the matrix is symmetric and positive definite — meaning xᵀAx > 0 for every nonzero vector x. Equivalently, all eigenvalues must be strictly positive. If the matrix is only positive semi-definite or indefinite, the standard algorithm breaks down.",
// //     sectionId: "2"
// //   },
// //   obj3: {
// //     question: "How is Cholesky different from LU decomposition?",
// //     answer: "Cholesky exploits symmetry and positive definiteness to achieve half the cost of LU (n³/3 vs 2n³/3 operations), requires no pivoting, and stores only one triangular factor since the other is its transpose. Cholesky is the symmetric-positive-definite specialization of LU.",
// //     sectionId: "9"
// //   },
// //   obj4: {
// //     question: "Why does Cholesky not require pivoting?",
// //     answer: "Positive definiteness guarantees that every quantity under the square root during the algorithm is strictly positive. No zero or negative pivots can occur, so row swaps are never needed. If the algorithm encounters a non-positive value, the matrix is not positive definite.",
// //     sectionId: "6"
// //   },
// //   obj5: {
// //     question: "Where is Cholesky decomposition used?",
// //     answer: "Cholesky appears in solving normal equations for least squares, sampling from multivariate normal distributions using covariance matrices, finite element stiffness matrices, and Newton's method in optimization. It is the default solver whenever the matrix is symmetric positive definite.",
// //     sectionId: "8"
// //   }
// // }


// // const schemas = {
// //   learningResource: {
// //     "@context": "https://schema.org",
// //     "@type": "LearningResource",
// //     "name": "Cholesky Decomposition",
// //     "description": "Cholesky decomposition A = LLᵀ for symmetric positive definite matrices: algorithm, worked example, system solving, computational cost, positive definiteness test, and applications.",
// //     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/cholesky",
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
// //       "name": "Cholesky Decomposition"
// //     },
// //     "teaches": [
// //       "Cholesky factorization A = LLᵀ",
// //       "Existence conditions: symmetric positive definite",
// //       "Column-by-column Cholesky algorithm",
// //       "Forward and back substitution for system solving",
// //       "Cholesky as a positive definiteness test",
// //       "Relationship to LU and LDLᵀ decompositions",
// //       "Applications in statistics, optimization, and simulation",
// //       "How algorithm behavior depends on matrix property (SPD, PSD, indefinite, non-symmetric, near-singular) and the appropriate remedy in each case"
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
// //         "name": "Decompositions",
// //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 4,
// //         "name": "Cholesky Decomposition",
// //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/cholesky"
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



// //   return {
// //   props:{
// //     sectionsContent,
// //     introContent,
// //     obj2Table,
// //     summaryTable,
// //     faqQuestions,
// //     schemas,
// //     seoData: {
// //       title: "Cholesky Decomposition: Algorithm & Uses | Learn Math Class",
// //       description: "Cholesky decomposition A = LLᵀ for symmetric positive definite matrices: algorithm, worked example, system solving, computational cost, positive definiteness test, and applications.",
// //       keywords: keyWords.join(", "),
// //       url: "/linear-algebra/decompositions/cholesky",
// //       name: "Cholesky Decomposition"
// //     },
// //   }
// // }
// //    }
// // export default function PageTemplate({
// //   seoData,
// //   sectionsContent,
// //   introContent,
// //   obj2Table,
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
// //           <div key={'obj2-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: obj2Table }} />,
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
// //     // obj10 was previously commented out in the source; uncommented so the
// //     // "Semi-Definite and Rank-Deficient Case" content actually renders.
// //     {
// //         id:'10',
// //         title:sectionsContent.obj10.title,
// //         link:sectionsContent.obj10.link,
// //         content:[
// //           sectionsContent.obj10.content,
// //         ]
// //     },
// //     // NEW capstone section: obj11
// //     {
// //         id:'11',
// //         title:sectionsContent.obj11.title,
// //         link:sectionsContent.obj11.link,
// //         content:[
// //           sectionsContent.obj11.content,
// //           <div key={'summary-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
// //         ]
// //     },
// //     // {
// //     //     id:'12',
// //     //     title:sectionsContent.obj12.title,
// //     //     link:sectionsContent.obj12.link,
// //     //     content:[
// //     //       sectionsContent.obj12.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'13',
// //     //     title:sectionsContent.obj13.title,
// //     //     link:sectionsContent.obj13.link,
// //     //     content:[
// //     //       sectionsContent.obj13.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'14',
// //     //     title:sectionsContent.obj14.title,
// //     //     link:sectionsContent.obj14.link,
// //     //     content:[
// //     //       sectionsContent.obj14.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'15',
// //     //     title:sectionsContent.obj15.title,
// //     //     link:sectionsContent.obj15.link,
// //     //     content:[
// //     //       sectionsContent.obj15.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },

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
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cholesky Decomposition</h1>
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


// // tables-optimized: v4 | 2026-05-18 | 2 tables (obj2 aggregation, obj11 summary capstone)
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
//   "Cholesky decomposition",
//   "Cholesky factorization",
//   "LL^T factorization",
//   "symmetric positive definite matrix",
//   "Cholesky algorithm",
//   "positive definiteness test",
//   "Cholesky vs LU",
//   "LDL^T decomposition",
//   "Cholesky solve linear system",
//   "matrix square root",
//   "covariance matrix Cholesky",
//   "pivoted Cholesky",
//   "Cholesky computational cost",
//   "lower triangular factorization"
// ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj2 — aggregation: equivalent characterizations of positive definiteness
//   const obj2Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Criterion</th>
//       <th style="${tableHeaders.aggregation}">Condition</th>
//       <th style="${tableHeaders.aggregation}">Computational cost</th>
//       <th style="${tableHeaders.aggregation}">When most useful</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Definition</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = A<sup>T</sup> and x<sup>T</sup>Ax &gt; 0 for every x ≠ 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">not directly testable</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">theoretical reasoning, proofs</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/eigen" style="${linkStyle}">Eigenvalues</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every eigenvalue λ<sub>i</sub> &gt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">O(n<sup>3</sup>) (full eigenvalue computation)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when eigenvalues are needed anyway</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Leading principal minors</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/determinants" style="${linkStyle}">determinant</a> of every upper-left k × k submatrix &gt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n determinants, O(n<sup>4</sup>) total</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">small matrices, exact arithmetic</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Cholesky pivots</td>
//       <td style="padding: 12px 15px; color: #34495e;">every algorithm pivot (under the square root) &gt; 0</td>
//       <td style="padding: 12px 15px; color: #34495e;">n<sup>3</sup>/3 (and yields L as a byproduct)</td>
//       <td style="padding: 12px 15px; color: #34495e;">practical default: test and factor in one pass</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj11 — summary capstone: matrix property → Cholesky outcome
//   // obj11 — how the algorithm responds to each class of matrix
//   const choleskyOutcomes = {
//     kicker: 'Decompositions \u00B7 Cholesky',
//     title: 'What the algorithm does with each matrix',
//     tallyLabel: 'cases',
//     intro: 'The algorithm is also a test. Feed it a matrix and how it terminates classifies the matrix \u2014 completion means positive definite, and each way of failing identifies a different reason.',
//     footnote: 'This is why Cholesky is the standard positive-definiteness test. Computing eigenvalues to check they are all positive costs $O(n^3)$ with an iterative method and gives approximate answers; running Cholesky costs $\\tfrac{1}{3}n^3$, terminates in finitely many steps, and answers exactly \u2014 with the factorization in hand as a byproduct when the answer is yes.',
//     groups: [
//       {
//         heading: 'The algorithm completes',
//         identities: [
//           {
//             name: 'Symmetric positive definite',
//             anchor: '#2',
//             formula: '$A = LL^{\\mathsf{T}}$, all $\\ell_{ii} > 0$',
//             condition: 'all $\\lambda_i > 0$',
//             key: true,
//             note: 'The intended case. Every square root is taken of a strictly positive number, the diagonal of $L$ comes out positive, and the factorization is unique. Half the cost of [LU](!/linear-algebra/decompositions/lower-upper) because symmetry means only one triangle is computed.',
//           },
//           {
//             name: 'Near-singular but definite',
//             anchor: '#7',
//             formula: 'runs; $\\ell_{ii}$ very small',
//             condition: 'smallest $\\lambda$ near zero',
//             strict: true,
//             note: 'Completes without complaint while the accuracy quietly degrades \u2014 small pivots amplify rounding into $L$. The failure is silent, so the smallest diagonal entry is worth monitoring; adding $\\varepsilon I$ regularizes at the cost of solving a slightly different problem.',
//           },
//         ],
//       },
//       {
//         heading: 'The algorithm halts \u2014 and the halt is the answer',
//         identities: [
//           {
//             name: 'Positive semi-definite',
//             anchor: '#10',
//             formula: 'zero appears on the diagonal of $L$',
//             condition: 'some $\\lambda_i = 0$',
//             note: 'Rank-deficient rather than wrong. Pivoted Cholesky, $P^{\\mathsf{T}}AP = LL^{\\mathsf{T}}$, handles it by reordering so the zeros arrive last \u2014 the factorization exists but is no longer unique.',
//           },
//           {
//             name: 'Symmetric indefinite',
//             anchor: '#7',
//             formula: 'negative under the square root',
//             condition: 'some $\\lambda_i < 0$',
//             key: true,
//             note: 'No real $L$ exists, and the algorithm discovers this the moment it tries. Use $LDL^{\\mathsf{T}}$, which permits negative entries in $D$ and so handles any symmetric matrix \u2014 at the price of no longer testing definiteness.',
//           },
//           {
//             name: 'Not symmetric',
//             anchor: '#9',
//             formula: '$A = LL^{\\mathsf{T}}$ is impossible',
//             condition: 'fails before it starts',
//             note: 'Any product $LL^{\\mathsf{T}}$ is symmetric by construction, so a non-symmetric $A$ has no such factorization whatever its eigenvalues are. This is a precondition rather than an outcome \u2014 check symmetry first and use LU if it fails.',
//           },
//         ],
//       },
//     ],
//   }

// // const sectionsContent = {
// //   obj1: {
// //     title: `What Cholesky Decomposition Is`,
// //     content: `The Cholesky decomposition writes a [symmetric](!/linear-algebra/matrix/types) positive definite [matrix](!/linear-algebra/matrix) $A$ as

// // $$A = LL^T$$

// // where $L$ is lower [triangular](!/linear-algebra/matrix/types) with strictly positive diagonal entries. The matrix $L$ is the Cholesky factor — the matrix "square root" of $A$ in the sense that $A$ is reconstructed by multiplying $L$ by its own [transpose](!/linear-algebra/matrix/operations).

// // The factorization is unique: for a given symmetric positive definite $A$, there is exactly one lower triangular $L$ with positive diagonal satisfying $A = LL^T$. The convention can also be written $A = R^TR$ with $R = L^T$ upper triangular — the choice between lower and upper is a matter of convention.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `Existence: Symmetric Positive Definite Matrices`,
// //     content: `The Cholesky factorization exists if and only if $A$ is symmetric and positive definite. Symmetry means $A = A^T$. Positive definiteness means $\\mathbf{x}^TA\\mathbf{x} > 0$ for every nonzero vector $\\mathbf{x}$.

// // Several equivalent conditions characterize positive definiteness: all [eigenvalues](!/linear-algebra/eigen) of $A$ are strictly positive; all leading principal minors (the [determinants](!/linear-algebra/determinants) of the upper-left $k \\times k$ submatrices) are positive; all pivots in [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) (without pivoting) are positive.

// // If either symmetry or positive definiteness fails, the Cholesky algorithm breaks down. A non-symmetric matrix has no $LL^T$ form. A symmetric matrix that is positive semi-definite (some eigenvalue is zero) produces a zero on the diagonal of $L$. An indefinite matrix (eigenvalues of both signs) produces a negative number under the square root, halting the algorithm.

// // These equivalent characterizations differ in computational cost and in when each is the practical tool of choice.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `The Algorithm`,
// //     content: `The Cholesky factor $L$ is computed column by column, from left to right.

// // For column $j$, the diagonal entry is

// // $$l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$$

// // and the sub-diagonal entries (for $i > j$) are

// // $$l_{ij} = \\frac{1}{l_{jj}}\\left(a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk}\\right)$$

// // The square root in the diagonal formula is always real and positive because positive definiteness guarantees that the expression under the root is strictly positive at every step.

// // ## Worked Example

// // For $A = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix}$:

// // $l_{11} = \\sqrt{4} = 2$. $l_{21} = 2/2 = 1$. $l_{31} = -2/2 = -1$.

// // $l_{22} = \\sqrt{5 - 1^2} = \\sqrt{4} = 2$. $l_{32} = (1 - (-1)(1))/2 = 2/2 = 1$.

// // $l_{33} = \\sqrt{6 - (-1)^2 - 1^2} = \\sqrt{4} = 2$.

// // $$L = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 2 & 0 \\\\ -1 & 1 & 2 \\end{pmatrix}$$

// // Verification: $LL^T = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix} = A$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Solving Systems with Cholesky`,
// //     content: `Given $A = LL^T$, the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ is solved in two steps:

// // Forward substitution: solve $L\\mathbf{y} = \\mathbf{b}$ for $\\mathbf{y}$. Cost: $O(n^2)$.

// // Back substitution: solve $L^T\\mathbf{x} = \\mathbf{y}$ for $\\mathbf{x}$. Cost: $O(n^2)$.

// // The structure is identical to [LU](!/linear-algebra/decompositions/lower-upper), but only one triangular factor needs to be stored. The other is its transpose, which costs nothing extra — the same array of numbers is read in reverse order.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Computational Cost`,
// //     content: `The Cholesky factorization requires roughly $\\frac{1}{3}n^3$ arithmetic operations — exactly half the cost of [LU](!/linear-algebra/decompositions/lower-upper) factorization ($\\frac{2}{3}n^3$). The saving comes from symmetry: the lower triangle of $A$ determines the upper triangle ($a_{ij} = a_{ji}$), so only half the entries need processing.

// // Each triangular solve costs $O(n^2)$. For a single system, the total is $\\frac{1}{3}n^3 + O(n^2)$. For $k$ systems sharing the same coefficient matrix, the cost is $\\frac{1}{3}n^3 + 2kn^2$.

// // For large symmetric positive definite systems, Cholesky is the fastest direct solver available. It is roughly twice as fast as LU and requires roughly half the storage (only the lower triangle of $L$).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `No Pivoting Needed`,
// //     content: `Unlike LU, the Cholesky algorithm never requires row swaps. Positive definiteness guarantees that the quantity under the square root is strictly positive at every step — no zero or negative pivots can occur.

// // This makes the algorithm simpler (no permutation matrix to track), more stable (no near-zero pivots to amplify errors), and more predictable (the algorithm either runs to completion or breaks down, with no ambiguity).

// // If the algorithm encounters a non-positive value under the square root, the matrix is not positive definite. The breakdown happens at the first index $j$ where the leading $j \\times j$ principal submatrix fails to be positive definite. This makes Cholesky an efficient positive definiteness test: attempt the factorization and check whether it succeeds.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Cholesky as a Positive Definiteness Test`,
// //     content: `The Cholesky algorithm tests positive definiteness as a side effect of factoring. If $A = LL^T$ completes with all diagonal entries of $L$ strictly positive, $A$ is positive definite. If the algorithm breaks down at any step, $A$ is not positive definite.

// // This is often more practical than computing all [eigenvalues](!/linear-algebra/eigen) (also $O(n^3)$ but with a larger constant) or checking all leading principal minors (which requires $n$ [determinant](!/linear-algebra/determinants) computations).

// // The test is binary: the factorization either succeeds or fails. When it succeeds, $L$ is available for immediate use in system solving. When it fails, the index at which it breaks indicates which leading submatrix is the first to lose positive definiteness.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Where Cholesky Appears`,
// //     content: `Symmetric positive definite matrices appear throughout applied mathematics, and Cholesky is the default solver for all of them.

// // The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ produce a symmetric positive definite matrix $A^TA$ (when $A$ has full column [rank](!/linear-algebra/matrix/rank)). Cholesky on $A^TA$ solves least squares, though [QR](!/linear-algebra/decompositions/qr) is preferred for numerical stability.

// // Covariance matrices in statistics are symmetric positive semi-definite (positive definite when no variable is a linear combination of the others). Cholesky is used to sample from multivariate normal distributions: if $\\Sigma = LL^T$, then $L\\mathbf{z}$ (with $\\mathbf{z}$ standard normal) has distribution $\\mathcal{N}(\\mathbf{0}, \\Sigma)$.

// // Stiffness matrices in finite element analysis are symmetric positive definite. Newton's method in optimization solves $H\\mathbf{d} = -\\nabla f$ where $H$ (the Hessian) is positive definite at a strict local minimum. In both cases, Cholesky is the standard solver.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Cholesky and LU: The Relationship`,
// //     content: `For a symmetric positive definite matrix, [LU](!/linear-algebra/decompositions/lower-upper) factorization without pivoting always succeeds and produces $A = L_U D L_U^T$, where $L_U$ is unit lower triangular and $D$ is diagonal with positive entries. This is the $LDL^T$ decomposition.

// // The Cholesky factor is $L_{\\text{Chol}} = L_U D^{1/2}$ — the unit lower triangular factor with $\\sqrt{D}$ absorbed into it. Equivalently, $A = (L_U D^{1/2})(L_U D^{1/2})^T = LL^T$.

// // Cholesky is the symmetric-positive-definite specialization of LU. It exploits $A = A^T$ to halve the work and the storage, and it exploits positive definiteness to eliminate the need for pivoting. The $LDL^T$ variant avoids square roots entirely (computing $D$ and $L_U$ separately) and is sometimes preferred when the square roots are expensive or when the matrix is only positive semi-definite.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `The Semi-Definite and Rank-Deficient Case`,
// //     content: `A symmetric positive semi-definite matrix ($\\mathbf{x}^TA\\mathbf{x} \\geq 0$ with equality for some nonzero $\\mathbf{x}$) has at least one zero eigenvalue. The standard Cholesky factorization breaks down when it encounters the corresponding zero diagonal entry.

// // Pivoted Cholesky handles this case: $PAP^T = LL^T$ with a [permutation](!/linear-algebra/matrix/types) matrix $P$ and $L$ possibly having some zero diagonal entries. The permutation reorders the rows and columns to push the rank deficiency to the end.

// // In practice, numerical near-singularity — eigenvalues very close to zero but not exactly zero — is more common than exact singularity. A condition-number-based threshold determines which eigenvalues are treated as zero. Adding a small regularization $\\epsilon I$ to $A$ (making it $A + \\epsilon I$, which is positive definite for any $\\epsilon > 0$) is a common remedy that restores the standard Cholesky factorization at the cost of a controlled perturbation.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   // NEW capstone section: obj11
// //   obj11: {
// //     title: `Summary: Matrix Property and Cholesky Outcome`,
// //     content: `The behavior of the Cholesky algorithm depends entirely on what kind of matrix it is asked to factor — positive definite, positive semi-definite, indefinite, non-symmetric, or merely near-singular. The table below collects each scenario, what the algorithm does in each case, and the standard remedy when the straightforward $A = LL^T$ form does not apply. The "positive semi-definite" row links back to the pivoted-Cholesky treatment above.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }

// // linear-algebra/decompositions/cholesky — sectionsContent with formula callouts (v1)
// // 3 callouts injected: obj1 (Cholesky Decomposition), obj3 (Diagonal Formula + Off-Diagonal Formula)
// // Worked example $$ displays in obj3 preserved untouched (derivation steps, not canonical formulas)

// const sectionsContent = {
//   obj1: {
//     title: `What Cholesky Decomposition Is`,
//     content: `The Cholesky decomposition writes a [symmetric](!/linear-algebra/matrix/types) positive definite [matrix](!/linear-algebra/matrix) $A$ as

// @academic[formula_callout:cholesky_decomposition|Cholesky Decomposition|$$A = LL^T$$]@
// @academic[formulas_link:/linear-algebra/formulas#cholesky_decomposition]@

// where $L$ is lower [triangular](!/linear-algebra/matrix/types) with strictly positive diagonal entries. The matrix $L$ is the Cholesky factor — the matrix "square root" of $A$ in the sense that $A$ is reconstructed by multiplying $L$ by its own [transpose](!/linear-algebra/matrix/operations).

// The factorization is unique: for a given symmetric positive definite $A$, there is exactly one lower triangular $L$ with positive diagonal satisfying $A = LL^T$. The convention can also be written $A = R^TR$ with $R = L^T$ upper triangular — the choice between lower and upper is a matter of convention.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Existence: Symmetric Positive Definite Matrices`,
//     content: `The Cholesky factorization exists if and only if $A$ is symmetric and positive definite. Symmetry means $A = A^T$. Positive definiteness means $\\mathbf{x}^TA\\mathbf{x} > 0$ for every nonzero vector $\\mathbf{x}$.

// Several equivalent conditions characterize positive definiteness: all [eigenvalues](!/linear-algebra/eigen) of $A$ are strictly positive; all leading principal minors (the [determinants](!/linear-algebra/determinants) of the upper-left $k \\times k$ submatrices) are positive; all pivots in [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) (without pivoting) are positive.

// If either symmetry or positive definiteness fails, the Cholesky algorithm breaks down. A non-symmetric matrix has no $LL^T$ form. A symmetric matrix that is positive semi-definite (some eigenvalue is zero) produces a zero on the diagonal of $L$. An indefinite matrix (eigenvalues of both signs) produces a negative number under the square root, halting the algorithm.

// These equivalent characterizations differ in computational cost and in when each is the practical tool of choice.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Algorithm`,
//     content: `The Cholesky factor $L$ is computed column by column, from left to right.

// For column $j$, the diagonal entry is

// @academic[formula_callout:cholesky_diagonal_formula|Cholesky Diagonal Formula|$$l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$$]@
// @academic[formulas_link:/linear-algebra/formulas#cholesky_diagonal_formula]@

// and the sub-diagonal entries (for $i > j$) are

// @academic[formula_callout:cholesky_off_diagonal_formula|Cholesky Off-Diagonal Formula|$$l_{ij} = \\frac{1}{l_{jj}}\\left(a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk}\\right)$$]@
// @academic[formulas_link:/linear-algebra/formulas#cholesky_off_diagonal_formula]@

// The square root in the diagonal formula is always real and positive because positive definiteness guarantees that the expression under the root is strictly positive at every step.

// ## Worked Example

// For $A = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix}$:

// $l_{11} = \\sqrt{4} = 2$. $l_{21} = 2/2 = 1$. $l_{31} = -2/2 = -1$.

// $l_{22} = \\sqrt{5 - 1^2} = \\sqrt{4} = 2$. $l_{32} = (1 - (-1)(1))/2 = 2/2 = 1$.

// $l_{33} = \\sqrt{6 - (-1)^2 - 1^2} = \\sqrt{4} = 2$.

// $$L = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 2 & 0 \\\\ -1 & 1 & 2 \\end{pmatrix}$$

// Verification: $LL^T = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix} = A$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Solving Systems with Cholesky`,
//     content: `Given $A = LL^T$, the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ is solved in two steps:

// Forward substitution: solve $L\\mathbf{y} = \\mathbf{b}$ for $\\mathbf{y}$. Cost: $O(n^2)$.

// Back substitution: solve $L^T\\mathbf{x} = \\mathbf{y}$ for $\\mathbf{x}$. Cost: $O(n^2)$.

// The structure is identical to [LU](!/linear-algebra/decompositions/lower-upper), but only one triangular factor needs to be stored. The other is its transpose, which costs nothing extra — the same array of numbers is read in reverse order.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Computational Cost`,
//     content: `The Cholesky factorization requires roughly $\\frac{1}{3}n^3$ arithmetic operations — exactly half the cost of [LU](!/linear-algebra/decompositions/lower-upper) factorization ($\\frac{2}{3}n^3$). The saving comes from symmetry: the lower triangle of $A$ determines the upper triangle ($a_{ij} = a_{ji}$), so only half the entries need processing.

// Each triangular solve costs $O(n^2)$. For a single system, the total is $\\frac{1}{3}n^3 + O(n^2)$. For $k$ systems sharing the same coefficient matrix, the cost is $\\frac{1}{3}n^3 + 2kn^2$.

// For large symmetric positive definite systems, Cholesky is the fastest direct solver available. It is roughly twice as fast as LU and requires roughly half the storage (only the lower triangle of $L$).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `No Pivoting Needed`,
//     content: `Unlike LU, the Cholesky algorithm never requires row swaps. Positive definiteness guarantees that the quantity under the square root is strictly positive at every step — no zero or negative pivots can occur.

// This makes the algorithm simpler (no permutation matrix to track), more stable (no near-zero pivots to amplify errors), and more predictable (the algorithm either runs to completion or breaks down, with no ambiguity).

// If the algorithm encounters a non-positive value under the square root, the matrix is not positive definite. The breakdown happens at the first index $j$ where the leading $j \\times j$ principal submatrix fails to be positive definite. This makes Cholesky an efficient positive definiteness test: attempt the factorization and check whether it succeeds.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Cholesky as a Positive Definiteness Test`,
//     content: `The Cholesky algorithm tests positive definiteness as a side effect of factoring. If $A = LL^T$ completes with all diagonal entries of $L$ strictly positive, $A$ is positive definite. If the algorithm breaks down at any step, $A$ is not positive definite.

// This is often more practical than computing all [eigenvalues](!/linear-algebra/eigen) (also $O(n^3)$ but with a larger constant) or checking all leading principal minors (which requires $n$ [determinant](!/linear-algebra/determinants) computations).

// The test is binary: the factorization either succeeds or fails. When it succeeds, $L$ is available for immediate use in system solving. When it fails, the index at which it breaks indicates which leading submatrix is the first to lose positive definiteness.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Where Cholesky Appears`,
//     content: `Symmetric positive definite matrices appear throughout applied mathematics, and Cholesky is the default solver for all of them.

// The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ produce a symmetric positive definite matrix $A^TA$ (when $A$ has full column [rank](!/linear-algebra/matrix/rank)). Cholesky on $A^TA$ solves least squares, though [QR](!/linear-algebra/decompositions/qr) is preferred for numerical stability.

// Covariance matrices in statistics are symmetric positive semi-definite (positive definite when no variable is a linear combination of the others). Cholesky is used to sample from multivariate normal distributions: if $\\Sigma = LL^T$, then $L\\mathbf{z}$ (with $\\mathbf{z}$ standard normal) has distribution $\\mathcal{N}(\\mathbf{0}, \\Sigma)$.

// Stiffness matrices in finite element analysis are symmetric positive definite. Newton's method in optimization solves $H\\mathbf{d} = -\\nabla f$ where $H$ (the Hessian) is positive definite at a strict local minimum. In both cases, Cholesky is the standard solver.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Cholesky and LU: The Relationship`,
//     content: `For a symmetric positive definite matrix, [LU](!/linear-algebra/decompositions/lower-upper) factorization without pivoting always succeeds and produces $A = L_U D L_U^T$, where $L_U$ is unit lower triangular and $D$ is diagonal with positive entries. This is the $LDL^T$ decomposition.

// The Cholesky factor is $L_{\\text{Chol}} = L_U D^{1/2}$ — the unit lower triangular factor with $\\sqrt{D}$ absorbed into it. Equivalently, $A = (L_U D^{1/2})(L_U D^{1/2})^T = LL^T$.

// Cholesky is the symmetric-positive-definite specialization of LU. It exploits $A = A^T$ to halve the work and the storage, and it exploits positive definiteness to eliminate the need for pivoting. The $LDL^T$ variant avoids square roots entirely (computing $D$ and $L_U$ separately) and is sometimes preferred when the square roots are expensive or when the matrix is only positive semi-definite.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `The Semi-Definite and Rank-Deficient Case`,
//     content: `A symmetric positive semi-definite matrix ($\\mathbf{x}^TA\\mathbf{x} \\geq 0$ with equality for some nonzero $\\mathbf{x}$) has at least one zero eigenvalue. The standard Cholesky factorization breaks down when it encounters the corresponding zero diagonal entry.

// Pivoted Cholesky handles this case: $PAP^T = LL^T$ with a [permutation](!/linear-algebra/matrix/types) matrix $P$ and $L$ possibly having some zero diagonal entries. The permutation reorders the rows and columns to push the rank deficiency to the end.

// In practice, numerical near-singularity — eigenvalues very close to zero but not exactly zero — is more common than exact singularity. A condition-number-based threshold determines which eigenvalues are treated as zero. Adding a small regularization $\\epsilon I$ to $A$ (making it $A + \\epsilon I$, which is positive definite for any $\\epsilon > 0$) is a common remedy that restores the standard Cholesky factorization at the cost of a controlled perturbation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Summary: Matrix Property and Cholesky Outcome`,
//     content: `The behavior of the Cholesky algorithm depends entirely on what kind of matrix it is asked to factor — positive definite, positive semi-definite, indefinite, non-symmetric, or merely near-singular. The table below collects each scenario, what the algorithm does in each case, and the standard remedy when the straightforward $A = LL^T$ form does not apply. The "positive semi-definite" row links back to the pivoted-Cholesky treatment above.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }




// const introContent = {
//   title: `The Square Root of a Symmetric Positive Definite Matrix`,
//   content: `The Cholesky decomposition factors a symmetric positive definite matrix as A = LLᵀ, where L is lower triangular with positive diagonal entries. It exploits symmetry to achieve half the cost of LU, requires no pivoting, and doubles as a positive definiteness test. It is the fastest direct solver for the class of matrices that appears most often in optimization, statistics, and simulation.`,
// }


// const faqQuestions = {
//   obj1: {
//     question: "What is the Cholesky decomposition?",
//     answer: "The Cholesky decomposition writes a symmetric positive definite matrix A as A = LLᵀ, where L is lower triangular with strictly positive diagonal entries. It is the unique matrix square root in this form and is the fastest direct solver for symmetric positive definite systems.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "When does the Cholesky decomposition exist?",
//     answer: "The Cholesky factorization exists if and only if the matrix is symmetric and positive definite — meaning xᵀAx > 0 for every nonzero vector x. Equivalently, all eigenvalues must be strictly positive. If the matrix is only positive semi-definite or indefinite, the standard algorithm breaks down.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "How is Cholesky different from LU decomposition?",
//     answer: "Cholesky exploits symmetry and positive definiteness to achieve half the cost of LU (n³/3 vs 2n³/3 operations), requires no pivoting, and stores only one triangular factor since the other is its transpose. Cholesky is the symmetric-positive-definite specialization of LU.",
//     sectionId: "9"
//   },
//   obj4: {
//     question: "Why does Cholesky not require pivoting?",
//     answer: "Positive definiteness guarantees that every quantity under the square root during the algorithm is strictly positive. No zero or negative pivots can occur, so row swaps are never needed. If the algorithm encounters a non-positive value, the matrix is not positive definite.",
//     sectionId: "6"
//   },
//   obj5: {
//     question: "Where is Cholesky decomposition used?",
//     answer: "Cholesky appears in solving normal equations for least squares, sampling from multivariate normal distributions using covariance matrices, finite element stiffness matrices, and Newton's method in optimization. It is the default solver whenever the matrix is symmetric positive definite.",
//     sectionId: "8"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Cholesky Decomposition",
//     "description": "Cholesky decomposition A = LLᵀ for symmetric positive definite matrices: algorithm, worked example, system solving, computational cost, positive definiteness test, and applications.",
//     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/cholesky",
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
//       "name": "Cholesky Decomposition"
//     },
//     "teaches": [
//       "Cholesky factorization A = LLᵀ",
//       "Existence conditions: symmetric positive definite",
//       "Column-by-column Cholesky algorithm",
//       "Forward and back substitution for system solving",
//       "Cholesky as a positive definiteness test",
//       "Relationship to LU and LDLᵀ decompositions",
//       "Applications in statistics, optimization, and simulation",
//       "How algorithm behavior depends on matrix property (SPD, PSD, indefinite, non-symmetric, near-singular) and the appropriate remedy in each case"
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
//         "name": "Decompositions",
//         "item": "https://www.learnmathclass.com/linear-algebra/decompositions"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Cholesky Decomposition",
//         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/cholesky"
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



//   return {
//   props:{
//     sectionsContent,
//     introContent,
//     obj2Table,
//     choleskyOutcomes,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Cholesky Decomposition: Algorithm & Uses | Learn Math Class",
//       description: "Cholesky decomposition A = LLᵀ for symmetric positive definite matrices: algorithm, worked example, system solving, computational cost, positive definiteness test, and applications.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/decompositions/cholesky",
//       name: "Cholesky Decomposition"
//     },
//   }
// }
//    }
// export default function PageTemplate({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj2Table,
//   choleskyOutcomes,
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
//     // obj10 was previously commented out in the source; uncommented so the
//     // "Semi-Definite and Rank-Deficient Case" content actually renders.
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     // NEW capstone section: obj11
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//           `Read the table below as a diagnostic rather than a list of caveats. Cholesky is unusual among algorithms in that its failure modes are informative: it does not merely stop, it stops in a way that identifies what is wrong with the matrix. The split is between the cases that run to completion and the cases where the halt itself is the answer.`,
//           <DiagramFrame
//             key={'obj11-diagram'}
//             id="cholesky-outcomes"
//             title="What the algorithm does with each matrix"
//             source="/linear-algebra/decompositions/cholesky"
//           >
//             <IdentitySheet data={choleskyOutcomes} theme="navy" variant="ledger" />
//           </DiagramFrame>,
//           `That property is what makes it the standard definiteness test. The alternative is computing every eigenvalue and checking the signs, which costs more, converges iteratively rather than terminating, and returns approximations that then have to be judged against zero. Cholesky answers in $\\tfrac{1}{3}n^3$ operations, finishes in a fixed number of steps, and hands back the factorization as well when the answer is yes.`,
//           `One case deserves separate attention because it does not announce itself. A matrix that is positive definite but nearly singular runs to completion — no error, no halt — while the small pivots quietly amplify rounding error through $L$. The result looks like a successful factorization and is not a reliable one, which is why the smallest diagonal entry of $L$ is worth reading rather than assuming.`,
//         ]
//     },
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cholesky Decomposition</h1>
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
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// tables-optimized: v4 | 2026-05-18 | 2 tables (obj2 aggregation, obj11 summary capstone)
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
  "Cholesky decomposition",
  "Cholesky factorization",
  "LL^T factorization",
  "symmetric positive definite matrix",
  "Cholesky algorithm",
  "positive definiteness test",
  "Cholesky vs LU",
  "LDL^T decomposition",
  "Cholesky solve linear system",
  "matrix square root",
  "covariance matrix Cholesky",
  "pivoted Cholesky",
  "Cholesky computational cost",
  "lower triangular factorization"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — aggregation: equivalent characterizations of positive definiteness
  // obj2 — four equivalent criteria, at wildly different prices
  const definitenessTests = {
    kicker: 'Decompositions \u00B7 positive definiteness',
    title: 'Four criteria, four prices',
    tallyLabel: 'criteria',
    intro: 'All four decide the same question and any of them could serve as the definition. What separates them is cost \u2014 from not computable at all to cheaper than anything else on the page.',
    footnote: 'They are equivalent, so the choice is purely practical: the definition for proving, the eigenvalues when they are wanted anyway, the minors for small symbolic matrices, and Cholesky whenever the answer is actually needed. That the cheapest test also produces a useful factorization is what makes it the standard one.',
    slots: [
      { key: 'condition', label: 'condition' },
      { key: 'cost',      label: 'cost' },
      { key: 'useFor',    label: 'use it when' },
    ],
    groups: [
      {
        heading: 'Not a computation',
        types: [
          {
            name: 'The definition',
            anchor: '#2',
            shape: 'symmetric',
            condition: 'the statement itself',
            properties: {
              condition: '$\\mathbf{x}^{\\mathsf{T}}A\\mathbf{x} > 0$ for every $\\mathbf{x} \\neq \\mathbf{0}$',
              cost: 'not directly testable',
              useFor: 'proofs and derivations',
            },
            note: 'Quantified over infinitely many vectors, so it cannot be checked by evaluation. Its value is in arguments \u2014 it is the form every other criterion is proved equivalent to.',
          },
        ],
      },
      {
        heading: 'Computable, expensive',
        types: [
          {
            name: 'Eigenvalue signs',
            anchor: '#2',
            shape: 'diagonal',
            condition: 'all $\\lambda_i > 0$',
            properties: {
              condition: 'every eigenvalue strictly positive',
              cost: '$O(n^3)$, iterative',
              useFor: 'the eigenvalues are wanted anyway',
            },
            note: 'Correct and slow. The computation converges rather than terminating, and it returns approximations that then have to be judged against zero \u2014 which is precisely the comparison a near-singular matrix makes unreliable.',
          },
          {
            name: 'Leading principal minors',
            anchor: '#2',
            shape: 'upper',
            condition: 'every upper-left $k \\times k$ determinant $> 0$',
            properties: {
              condition: '$\\det A_k > 0$ for $k = 1, \\ldots, n$',
              cost: '$n$ determinants',
              useFor: 'small or symbolic matrices',
            },
            note: 'Sylvester\u2019s criterion. Note it is the **leading** minors only \u2014 all $2^n - 1$ principal minors would be needed for semi-definiteness, which is why the semi-definite case is so much harder to test.',
          },
        ],
      },
      {
        heading: 'Computable, cheapest',
        types: [
          {
            name: 'Cholesky attempt',
            anchor: '#7',
            shape: 'lower',
            condition: 'the algorithm runs to completion',
            properties: {
              condition: 'no negative under a square root',
              cost: '$\\tfrac{1}{3}n^3$, terminating',
              useFor: 'whenever the answer is needed',
            },
            note: 'Cheaper than the eigenvalues, exact rather than approximate, and finishes in a fixed number of steps. Success returns the factorization as well \u2014 so the test costs nothing beyond work you would have done anyway if the answer is yes.',
          },
        ],
      },
    ],
  }

  // obj11 — summary capstone: matrix property → Cholesky outcome
  // obj11 — how the algorithm responds to each class of matrix
  const choleskyOutcomes = {
    kicker: 'Decompositions \u00B7 Cholesky',
    title: 'What the algorithm does with each matrix',
    tallyLabel: 'cases',
    intro: 'The algorithm is also a test. Feed it a matrix and how it terminates classifies the matrix \u2014 completion means positive definite, and each way of failing identifies a different reason.',
    footnote: 'This is why Cholesky is the standard positive-definiteness test. Computing eigenvalues to check they are all positive costs $O(n^3)$ with an iterative method and gives approximate answers; running Cholesky costs $\\tfrac{1}{3}n^3$, terminates in finitely many steps, and answers exactly \u2014 with the factorization in hand as a byproduct when the answer is yes.',
    groups: [
      {
        heading: 'The algorithm completes',
        identities: [
          {
            name: 'Symmetric positive definite',
            anchor: '#2',
            formula: '$A = LL^{\\mathsf{T}}$, all $\\ell_{ii} > 0$',
            condition: 'all $\\lambda_i > 0$',
            key: true,
            note: 'The intended case. Every square root is taken of a strictly positive number, the diagonal of $L$ comes out positive, and the factorization is unique. Half the cost of [LU](!/linear-algebra/decompositions/lower-upper) because symmetry means only one triangle is computed.',
          },
          {
            name: 'Near-singular but definite',
            anchor: '#7',
            formula: 'runs; $\\ell_{ii}$ very small',
            condition: 'smallest $\\lambda$ near zero',
            strict: true,
            note: 'Completes without complaint while the accuracy quietly degrades \u2014 small pivots amplify rounding into $L$. The failure is silent, so the smallest diagonal entry is worth monitoring; adding $\\varepsilon I$ regularizes at the cost of solving a slightly different problem.',
          },
        ],
      },
      {
        heading: 'The algorithm halts \u2014 and the halt is the answer',
        identities: [
          {
            name: 'Positive semi-definite',
            anchor: '#10',
            formula: 'zero appears on the diagonal of $L$',
            condition: 'some $\\lambda_i = 0$',
            note: 'Rank-deficient rather than wrong. Pivoted Cholesky, $P^{\\mathsf{T}}AP = LL^{\\mathsf{T}}$, handles it by reordering so the zeros arrive last \u2014 the factorization exists but is no longer unique.',
          },
          {
            name: 'Symmetric indefinite',
            anchor: '#7',
            formula: 'negative under the square root',
            condition: 'some $\\lambda_i < 0$',
            key: true,
            note: 'No real $L$ exists, and the algorithm discovers this the moment it tries. Use $LDL^{\\mathsf{T}}$, which permits negative entries in $D$ and so handles any symmetric matrix \u2014 at the price of no longer testing definiteness.',
          },
          {
            name: 'Not symmetric',
            anchor: '#9',
            formula: '$A = LL^{\\mathsf{T}}$ is impossible',
            condition: 'fails before it starts',
            note: 'Any product $LL^{\\mathsf{T}}$ is symmetric by construction, so a non-symmetric $A$ has no such factorization whatever its eigenvalues are. This is a precondition rather than an outcome \u2014 check symmetry first and use LU if it fails.',
          },
        ],
      },
    ],
  }

// const sectionsContent = {
//   obj1: {
//     title: `What Cholesky Decomposition Is`,
//     content: `The Cholesky decomposition writes a [symmetric](!/linear-algebra/matrix/types) positive definite [matrix](!/linear-algebra/matrix) $A$ as

// $$A = LL^T$$

// where $L$ is lower [triangular](!/linear-algebra/matrix/types) with strictly positive diagonal entries. The matrix $L$ is the Cholesky factor — the matrix "square root" of $A$ in the sense that $A$ is reconstructed by multiplying $L$ by its own [transpose](!/linear-algebra/matrix/operations).

// The factorization is unique: for a given symmetric positive definite $A$, there is exactly one lower triangular $L$ with positive diagonal satisfying $A = LL^T$. The convention can also be written $A = R^TR$ with $R = L^T$ upper triangular — the choice between lower and upper is a matter of convention.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Existence: Symmetric Positive Definite Matrices`,
//     content: `The Cholesky factorization exists if and only if $A$ is symmetric and positive definite. Symmetry means $A = A^T$. Positive definiteness means $\\mathbf{x}^TA\\mathbf{x} > 0$ for every nonzero vector $\\mathbf{x}$.

// Several equivalent conditions characterize positive definiteness: all [eigenvalues](!/linear-algebra/eigen) of $A$ are strictly positive; all leading principal minors (the [determinants](!/linear-algebra/determinants) of the upper-left $k \\times k$ submatrices) are positive; all pivots in [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) (without pivoting) are positive.

// If either symmetry or positive definiteness fails, the Cholesky algorithm breaks down. A non-symmetric matrix has no $LL^T$ form. A symmetric matrix that is positive semi-definite (some eigenvalue is zero) produces a zero on the diagonal of $L$. An indefinite matrix (eigenvalues of both signs) produces a negative number under the square root, halting the algorithm.

// These equivalent characterizations differ in computational cost and in when each is the practical tool of choice.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Algorithm`,
//     content: `The Cholesky factor $L$ is computed column by column, from left to right.

// For column $j$, the diagonal entry is

// $$l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$$

// and the sub-diagonal entries (for $i > j$) are

// $$l_{ij} = \\frac{1}{l_{jj}}\\left(a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk}\\right)$$

// The square root in the diagonal formula is always real and positive because positive definiteness guarantees that the expression under the root is strictly positive at every step.

// ## Worked Example

// For $A = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix}$:

// $l_{11} = \\sqrt{4} = 2$. $l_{21} = 2/2 = 1$. $l_{31} = -2/2 = -1$.

// $l_{22} = \\sqrt{5 - 1^2} = \\sqrt{4} = 2$. $l_{32} = (1 - (-1)(1))/2 = 2/2 = 1$.

// $l_{33} = \\sqrt{6 - (-1)^2 - 1^2} = \\sqrt{4} = 2$.

// $$L = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 2 & 0 \\\\ -1 & 1 & 2 \\end{pmatrix}$$

// Verification: $LL^T = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix} = A$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Solving Systems with Cholesky`,
//     content: `Given $A = LL^T$, the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ is solved in two steps:

// Forward substitution: solve $L\\mathbf{y} = \\mathbf{b}$ for $\\mathbf{y}$. Cost: $O(n^2)$.

// Back substitution: solve $L^T\\mathbf{x} = \\mathbf{y}$ for $\\mathbf{x}$. Cost: $O(n^2)$.

// The structure is identical to [LU](!/linear-algebra/decompositions/lower-upper), but only one triangular factor needs to be stored. The other is its transpose, which costs nothing extra — the same array of numbers is read in reverse order.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Computational Cost`,
//     content: `The Cholesky factorization requires roughly $\\frac{1}{3}n^3$ arithmetic operations — exactly half the cost of [LU](!/linear-algebra/decompositions/lower-upper) factorization ($\\frac{2}{3}n^3$). The saving comes from symmetry: the lower triangle of $A$ determines the upper triangle ($a_{ij} = a_{ji}$), so only half the entries need processing.

// Each triangular solve costs $O(n^2)$. For a single system, the total is $\\frac{1}{3}n^3 + O(n^2)$. For $k$ systems sharing the same coefficient matrix, the cost is $\\frac{1}{3}n^3 + 2kn^2$.

// For large symmetric positive definite systems, Cholesky is the fastest direct solver available. It is roughly twice as fast as LU and requires roughly half the storage (only the lower triangle of $L$).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `No Pivoting Needed`,
//     content: `Unlike LU, the Cholesky algorithm never requires row swaps. Positive definiteness guarantees that the quantity under the square root is strictly positive at every step — no zero or negative pivots can occur.

// This makes the algorithm simpler (no permutation matrix to track), more stable (no near-zero pivots to amplify errors), and more predictable (the algorithm either runs to completion or breaks down, with no ambiguity).

// If the algorithm encounters a non-positive value under the square root, the matrix is not positive definite. The breakdown happens at the first index $j$ where the leading $j \\times j$ principal submatrix fails to be positive definite. This makes Cholesky an efficient positive definiteness test: attempt the factorization and check whether it succeeds.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Cholesky as a Positive Definiteness Test`,
//     content: `The Cholesky algorithm tests positive definiteness as a side effect of factoring. If $A = LL^T$ completes with all diagonal entries of $L$ strictly positive, $A$ is positive definite. If the algorithm breaks down at any step, $A$ is not positive definite.

// This is often more practical than computing all [eigenvalues](!/linear-algebra/eigen) (also $O(n^3)$ but with a larger constant) or checking all leading principal minors (which requires $n$ [determinant](!/linear-algebra/determinants) computations).

// The test is binary: the factorization either succeeds or fails. When it succeeds, $L$ is available for immediate use in system solving. When it fails, the index at which it breaks indicates which leading submatrix is the first to lose positive definiteness.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Where Cholesky Appears`,
//     content: `Symmetric positive definite matrices appear throughout applied mathematics, and Cholesky is the default solver for all of them.

// The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ produce a symmetric positive definite matrix $A^TA$ (when $A$ has full column [rank](!/linear-algebra/matrix/rank)). Cholesky on $A^TA$ solves least squares, though [QR](!/linear-algebra/decompositions/qr) is preferred for numerical stability.

// Covariance matrices in statistics are symmetric positive semi-definite (positive definite when no variable is a linear combination of the others). Cholesky is used to sample from multivariate normal distributions: if $\\Sigma = LL^T$, then $L\\mathbf{z}$ (with $\\mathbf{z}$ standard normal) has distribution $\\mathcal{N}(\\mathbf{0}, \\Sigma)$.

// Stiffness matrices in finite element analysis are symmetric positive definite. Newton's method in optimization solves $H\\mathbf{d} = -\\nabla f$ where $H$ (the Hessian) is positive definite at a strict local minimum. In both cases, Cholesky is the standard solver.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Cholesky and LU: The Relationship`,
//     content: `For a symmetric positive definite matrix, [LU](!/linear-algebra/decompositions/lower-upper) factorization without pivoting always succeeds and produces $A = L_U D L_U^T$, where $L_U$ is unit lower triangular and $D$ is diagonal with positive entries. This is the $LDL^T$ decomposition.

// The Cholesky factor is $L_{\\text{Chol}} = L_U D^{1/2}$ — the unit lower triangular factor with $\\sqrt{D}$ absorbed into it. Equivalently, $A = (L_U D^{1/2})(L_U D^{1/2})^T = LL^T$.

// Cholesky is the symmetric-positive-definite specialization of LU. It exploits $A = A^T$ to halve the work and the storage, and it exploits positive definiteness to eliminate the need for pivoting. The $LDL^T$ variant avoids square roots entirely (computing $D$ and $L_U$ separately) and is sometimes preferred when the square roots are expensive or when the matrix is only positive semi-definite.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `The Semi-Definite and Rank-Deficient Case`,
//     content: `A symmetric positive semi-definite matrix ($\\mathbf{x}^TA\\mathbf{x} \\geq 0$ with equality for some nonzero $\\mathbf{x}$) has at least one zero eigenvalue. The standard Cholesky factorization breaks down when it encounters the corresponding zero diagonal entry.

// Pivoted Cholesky handles this case: $PAP^T = LL^T$ with a [permutation](!/linear-algebra/matrix/types) matrix $P$ and $L$ possibly having some zero diagonal entries. The permutation reorders the rows and columns to push the rank deficiency to the end.

// In practice, numerical near-singularity — eigenvalues very close to zero but not exactly zero — is more common than exact singularity. A condition-number-based threshold determines which eigenvalues are treated as zero. Adding a small regularization $\\epsilon I$ to $A$ (making it $A + \\epsilon I$, which is positive definite for any $\\epsilon > 0$) is a common remedy that restores the standard Cholesky factorization at the cost of a controlled perturbation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   // NEW capstone section: obj11
//   obj11: {
//     title: `Summary: Matrix Property and Cholesky Outcome`,
//     content: `The behavior of the Cholesky algorithm depends entirely on what kind of matrix it is asked to factor — positive definite, positive semi-definite, indefinite, non-symmetric, or merely near-singular. The table below collects each scenario, what the algorithm does in each case, and the standard remedy when the straightforward $A = LL^T$ form does not apply. The "positive semi-definite" row links back to the pivoted-Cholesky treatment above.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }

// linear-algebra/decompositions/cholesky — sectionsContent with formula callouts (v1)
// 3 callouts injected: obj1 (Cholesky Decomposition), obj3 (Diagonal Formula + Off-Diagonal Formula)
// Worked example $$ displays in obj3 preserved untouched (derivation steps, not canonical formulas)

const sectionsContent = {
  obj1: {
    title: `What Cholesky Decomposition Is`,
    content: `The Cholesky decomposition writes a [symmetric](!/linear-algebra/matrix/types) positive definite [matrix](!/linear-algebra/matrix) $A$ as

@academic[formula_callout:cholesky_decomposition|Cholesky Decomposition|$$A = LL^T$$]@
@academic[formulas_link:/linear-algebra/formulas#cholesky_decomposition]@

where $L$ is lower [triangular](!/linear-algebra/matrix/types) with strictly positive diagonal entries. The matrix $L$ is the Cholesky factor — the matrix "square root" of $A$ in the sense that $A$ is reconstructed by multiplying $L$ by its own [transpose](!/linear-algebra/matrix/operations).

The factorization is unique: for a given symmetric positive definite $A$, there is exactly one lower triangular $L$ with positive diagonal satisfying $A = LL^T$. The convention can also be written $A = R^TR$ with $R = L^T$ upper triangular — the choice between lower and upper is a matter of convention.`,
    before: ``,
    after: ``,
    link: ``,
  },
  notation: {
    title: `Cholesky Notation`,
    lead: `One letter does the work of two, a word that sounds like a claim about entries is a claim about something else entirely, and a set of quotation marks marks the one place the wording is loose.`,
    inherited: `The habit of naming a factorisation by its factors is described at [the singular value decomposition](!/linear-algebra/decompositions/svd), and the unit diagonal, the multiplier entries and the one-sided permutation $PA = LU$ at [LU](!/linear-algebra/decompositions/lower-upper). Transpose notation itself belongs to [matrix operations](!/linear-algebra/matrix/operations).`,
    entries: [
      {
        id: `one-letter-twice`,
        tex: `A = LL^{T}`,
        read: `A equals L times L transpose`,
        means: `Every other factorisation on this site names its factors with separate letters. Here there is one factor, written twice, and the second appearance is fully determined by the first. That is the notation carrying a fact: $LL^{T}$ comes out symmetric no matter what $L$ is, so the shape of the equation already restricts which matrices can appear on the left.`,
        cases: `Only the lower triangle of $L$ is ever stored. The transposed copy is the same array of numbers read in the other direction, which is where the halved storage comes from.`,
        alsoWritten: `The upper-first spelling $A = R^{T}R$ with $R = L^{T}$ is the identical factorisation, and both are called the Cholesky decomposition. Which one a library returns is a convention, not a result.`,
        confusedWith: `Reading the second factor as an independent unknown to be found. There is nothing to solve for beyond $L$ — the algorithm produces one triangular matrix and the equation supplies the rest.`,
        sameGlyphElsewhere: `$L$ is also the lower factor at [LU](!/linear-algebra/decompositions/lower-upper), where it is unit lower triangular and its partner $U$ is independent. The two $L$ matrices of one symmetric $A$ are different matrices.`,
      },
      {
        id: `positive-definite-form`,
        tex: `\\mathbf{x}^{T}A\\mathbf{x} > 0 \\quad \\text{for all } \\mathbf{x} \\neq \\mathbf{0}`,
        read: `x transpose A x is greater than zero for every nonzero vector x`,
        means: `The sandwich collapses to a single number: a row times a matrix times a column leaves a scalar, not a matrix. **Positive** in the name **positive definite** describes those numbers and nothing else. **Definite** carries the strictness — every nonzero $\\mathbf{x}$, with no exceptions allowed.`,
        cases: `Semi-definite weakens $>$ to $\\geq$, admitting vectors the form sends to zero. Indefinite means both signs occur. Each weakening changes exactly one symbol and changes which factorisation exists.`,
        alsoWritten: `Compressed to $A \\succ 0$, with the curved comparison sign chosen precisely so it cannot be read entrywise; $A \\succeq 0$ is the semi-definite case. Plain $A > 0$ appears too and is ambiguous for that reason.`,
        confusedWith: `Taking **positive** to describe the entries of $A$. The worked example on this page is positive definite and contains $-2$ and $-1$; a matrix whose entries are all positive need not be positive definite. The two properties are unrelated.`,
        sameGlyphElsewhere: ``,
      },
      {
        id: `square-root-quotes`,
        tex: `LL^{T} = A, \\qquad LL \\neq A`,
        read: `L times L transpose is A, but L times L is not`,
        means: `$L$ is described as a matrix square root, and the quotation marks around that phrase are doing real work. A square root normally multiplies by itself; this one multiplies by its transpose. $LL$ is again lower triangular and cannot equal a full symmetric $A$.`,
        cases: `A genuine matrix square root exists: the unique symmetric positive definite $S$ with $SS = A$, built from the eigenvalues. It is a different matrix from $L$ — $S$ is symmetric, $L$ is triangular — and it costs far more to compute.`,
        alsoWritten: `The true root is written $A^{1/2}$. The Cholesky factor is written $L$ and should not inherit that exponent.`,
        confusedWith: `Writing $A^{1/2}$ for the Cholesky factor. Both reproduce $A$ through a product, and they are not the same matrix; substituting one for the other silently changes any result that depends on symmetry.`,
        sameGlyphElsewhere: ``,
      },
      {
        id: `two-sided-permutation`,
        tex: `PAP^{T} = LL^{T}`,
        read: `P A P transpose equals L L transpose`,
        means: `$P$ stands on both sides because one side alone would break the symmetry the method depends on. Multiplying on the left reorders the rows; multiplying by $P^{T}$ on the right applies the same reordering to the columns, so an entry and its mirror image move together and the result is still symmetric.`,
        cases: `Since $P$ is a permutation, $P^{T} = P^{-1}$, so $PAP^{T}$ is [similar](!/linear-algebra/transformations/basis-change) to $A$: the eigenvalues are untouched, and with them positive definiteness. Reordering is safe here in a way that is not obvious from the symbols.`,
        alsoWritten: `Written $P^{T}AP$ when the permutation is defined in the opposite direction, which describes the same reordering with $P$ replaced by its inverse.`,
        confusedWith: `The one-sided $PA = LU$ at [LU](!/linear-algebra/decompositions/lower-upper). There the swaps act on rows only, because nothing about $LU$ requires symmetry; copying that form here would produce a matrix with no Cholesky factorisation at all.`,
        sameGlyphElsewhere: ``,
      },
      {
        id: `ldl-variant`,
        tex: `A = LDL^{T}, \\qquad L_{\\text{Chol}} = L_UD^{1/2}`,
        read: `A equals L D L transpose, and the Cholesky factor is the unit lower triangular L times the square root of D`,
        means: `The two factorisations differ only in whether the diagonal is carried separately. In $LDL^{T}$ the triangular factor has ones on its diagonal and $D$ holds the positive numbers; the Cholesky factor absorbs $\\sqrt{D}$ and gives up the ones.`,
        cases: `$D^{1/2}$ means the diagonal matrix of square roots of the entries. For a diagonal matrix that happens to agree with the genuine matrix square root, which is why the exponent passes here without comment and would not for a general matrix.`,
        alsoWritten: `$LDL^{T}$ is the square-root-free variant, computing $D$ and the unit factor separately. It survives some semi-definite matrices that break the standard algorithm.`,
        confusedWith: `The two lower triangular factors of one $A$. They differ by a diagonal scaling and sources write $L$ for both, so a factor taken from one formula and used in the other is wrong by exactly $D^{1/2}$.`,
        sameGlyphElsewhere: `$D$ holds eigenvalues at [diagonalization](!/linear-algebra/eigen/diagonalization) and pivots here. Both are diagonal matrices of positive numbers for a positive definite $A$, and they are not the same numbers.`,
      },
    ],
    symbolsHref: `/math-symbols/linear-algebra`,
    symbolsLabel: `All linear algebra symbols`,
    parentHref: `/linear-algebra/decompositions`,
    parentLabel: `Matrix decompositions`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Existence: Symmetric Positive Definite Matrices`,
    content: `The Cholesky factorization exists if and only if $A$ is symmetric and positive definite. Symmetry means $A = A^T$. Positive definiteness means $\\mathbf{x}^TA\\mathbf{x} > 0$ for every nonzero vector $\\mathbf{x}$.

Several equivalent conditions characterize positive definiteness: all [eigenvalues](!/linear-algebra/eigen) of $A$ are strictly positive; all leading principal minors (the [determinants](!/linear-algebra/determinants) of the upper-left $k \\times k$ submatrices) are positive; all pivots in [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) (without pivoting) are positive.

If either symmetry or positive definiteness fails, the Cholesky algorithm breaks down. A non-symmetric matrix has no $LL^T$ form. A symmetric matrix that is positive semi-definite (some eigenvalue is zero) produces a zero on the diagonal of $L$. An indefinite matrix (eigenvalues of both signs) produces a negative number under the square root, halting the algorithm.

These equivalent characterizations differ in computational cost and in when each is the practical tool of choice.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Algorithm`,
    content: `The Cholesky factor $L$ is computed column by column, from left to right.

For column $j$, the diagonal entry is

@academic[formula_callout:cholesky_diagonal_formula|Cholesky Diagonal Formula|$$l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$$]@
@academic[formulas_link:/linear-algebra/formulas#cholesky_diagonal_formula]@

and the sub-diagonal entries (for $i > j$) are

@academic[formula_callout:cholesky_off_diagonal_formula|Cholesky Off-Diagonal Formula|$$l_{ij} = \\frac{1}{l_{jj}}\\left(a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk}\\right)$$]@
@academic[formulas_link:/linear-algebra/formulas#cholesky_off_diagonal_formula]@

The square root in the diagonal formula is always real and positive because positive definiteness guarantees that the expression under the root is strictly positive at every step.

## Worked Example

For $A = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix}$:

$l_{11} = \\sqrt{4} = 2$. $l_{21} = 2/2 = 1$. $l_{31} = -2/2 = -1$.

$l_{22} = \\sqrt{5 - 1^2} = \\sqrt{4} = 2$. $l_{32} = (1 - (-1)(1))/2 = 2/2 = 1$.

$l_{33} = \\sqrt{6 - (-1)^2 - 1^2} = \\sqrt{4} = 2$.

$$L = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 2 & 0 \\\\ -1 & 1 & 2 \\end{pmatrix}$$

Verification: $LL^T = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix} = A$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Solving Systems with Cholesky`,
    content: `Given $A = LL^T$, the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ is solved in two steps:

Forward substitution: solve $L\\mathbf{y} = \\mathbf{b}$ for $\\mathbf{y}$. Cost: $O(n^2)$.

Back substitution: solve $L^T\\mathbf{x} = \\mathbf{y}$ for $\\mathbf{x}$. Cost: $O(n^2)$.

The structure is identical to [LU](!/linear-algebra/decompositions/lower-upper), but only one triangular factor needs to be stored. The other is its transpose, which costs nothing extra — the same array of numbers is read in reverse order.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Computational Cost`,
    content: `The Cholesky factorization requires roughly $\\frac{1}{3}n^3$ arithmetic operations — exactly half the cost of [LU](!/linear-algebra/decompositions/lower-upper) factorization ($\\frac{2}{3}n^3$). The saving comes from symmetry: the lower triangle of $A$ determines the upper triangle ($a_{ij} = a_{ji}$), so only half the entries need processing.

Each triangular solve costs $O(n^2)$. For a single system, the total is $\\frac{1}{3}n^3 + O(n^2)$. For $k$ systems sharing the same coefficient matrix, the cost is $\\frac{1}{3}n^3 + 2kn^2$.

For large symmetric positive definite systems, Cholesky is the fastest direct solver available. It is roughly twice as fast as LU and requires roughly half the storage (only the lower triangle of $L$).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `No Pivoting Needed`,
    content: `Unlike LU, the Cholesky algorithm never requires row swaps. Positive definiteness guarantees that the quantity under the square root is strictly positive at every step — no zero or negative pivots can occur.

This makes the algorithm simpler (no permutation matrix to track), more stable (no near-zero pivots to amplify errors), and more predictable (the algorithm either runs to completion or breaks down, with no ambiguity).

If the algorithm encounters a non-positive value under the square root, the matrix is not positive definite. The breakdown happens at the first index $j$ where the leading $j \\times j$ principal submatrix fails to be positive definite. This makes Cholesky an efficient positive definiteness test: attempt the factorization and check whether it succeeds.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Cholesky as a Positive Definiteness Test`,
    content: `The Cholesky algorithm tests positive definiteness as a side effect of factoring. If $A = LL^T$ completes with all diagonal entries of $L$ strictly positive, $A$ is positive definite. If the algorithm breaks down at any step, $A$ is not positive definite.

This is often more practical than computing all [eigenvalues](!/linear-algebra/eigen) (also $O(n^3)$ but with a larger constant) or checking all leading principal minors (which requires $n$ [determinant](!/linear-algebra/determinants) computations).

The test is binary: the factorization either succeeds or fails. When it succeeds, $L$ is available for immediate use in system solving. When it fails, the index at which it breaks indicates which leading submatrix is the first to lose positive definiteness.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Where Cholesky Appears`,
    content: `Symmetric positive definite matrices appear throughout applied mathematics, and Cholesky is the default solver for all of them.

The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ produce a symmetric positive definite matrix $A^TA$ (when $A$ has full column [rank](!/linear-algebra/matrix/rank)). Cholesky on $A^TA$ solves least squares, though [QR](!/linear-algebra/decompositions/qr) is preferred for numerical stability.

Covariance matrices in statistics are symmetric positive semi-definite (positive definite when no variable is a linear combination of the others). Cholesky is used to sample from multivariate normal distributions: if $\\Sigma = LL^T$, then $L\\mathbf{z}$ (with $\\mathbf{z}$ standard normal) has distribution $\\mathcal{N}(\\mathbf{0}, \\Sigma)$.

Stiffness matrices in finite element analysis are symmetric positive definite. Newton's method in optimization solves $H\\mathbf{d} = -\\nabla f$ where $H$ (the Hessian) is positive definite at a strict local minimum. In both cases, Cholesky is the standard solver.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Cholesky and LU: The Relationship`,
    content: `For a symmetric positive definite matrix, [LU](!/linear-algebra/decompositions/lower-upper) factorization without pivoting always succeeds and produces $A = L_U D L_U^T$, where $L_U$ is unit lower triangular and $D$ is diagonal with positive entries. This is the $LDL^T$ decomposition.

The Cholesky factor is $L_{\\text{Chol}} = L_U D^{1/2}$ — the unit lower triangular factor with $\\sqrt{D}$ absorbed into it. Equivalently, $A = (L_U D^{1/2})(L_U D^{1/2})^T = LL^T$.

Cholesky is the symmetric-positive-definite specialization of LU. It exploits $A = A^T$ to halve the work and the storage, and it exploits positive definiteness to eliminate the need for pivoting. The $LDL^T$ variant avoids square roots entirely (computing $D$ and $L_U$ separately) and is sometimes preferred when the square roots are expensive or when the matrix is only positive semi-definite.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `The Semi-Definite and Rank-Deficient Case`,
    content: `A symmetric positive semi-definite matrix ($\\mathbf{x}^TA\\mathbf{x} \\geq 0$ with equality for some nonzero $\\mathbf{x}$) has at least one zero eigenvalue. The standard Cholesky factorization breaks down when it encounters the corresponding zero diagonal entry.

Pivoted Cholesky handles this case: $PAP^T = LL^T$ with a [permutation](!/linear-algebra/matrix/types) matrix $P$ and $L$ possibly having some zero diagonal entries. The permutation reorders the rows and columns to push the rank deficiency to the end.

In practice, numerical near-singularity — eigenvalues very close to zero but not exactly zero — is more common than exact singularity. A condition-number-based threshold determines which eigenvalues are treated as zero. Adding a small regularization $\\epsilon I$ to $A$ (making it $A + \\epsilon I$, which is positive definite for any $\\epsilon > 0$) is a common remedy that restores the standard Cholesky factorization at the cost of a controlled perturbation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Summary: Matrix Property and Cholesky Outcome`,
    content: `The behavior of the Cholesky algorithm depends entirely on what kind of matrix it is asked to factor — positive definite, positive semi-definite, indefinite, non-symmetric, or merely near-singular. The table below collects each scenario, what the algorithm does in each case, and the standard remedy when the straightforward $A = LL^T$ form does not apply. The "positive semi-definite" row links back to the pivoted-Cholesky treatment above.`,
    before: ``,
    after: ``,
    link: ``,
  },
}




const introContent = {
  title: `The Square Root of a Symmetric Positive Definite Matrix`,
  content: `The Cholesky decomposition factors a symmetric positive definite matrix as A = LLᵀ, where L is lower triangular with positive diagonal entries. It exploits symmetry to achieve half the cost of LU, requires no pivoting, and doubles as a positive definiteness test. It is the fastest direct solver for the class of matrices that appears most often in optimization, statistics, and simulation.`,
}


const faqQuestions = {
  obj1: {
    question: "What is the Cholesky decomposition?",
    answer: "The Cholesky decomposition writes a symmetric positive definite matrix A as A = LLᵀ, where L is lower triangular with strictly positive diagonal entries. It is the unique matrix square root in this form and is the fastest direct solver for symmetric positive definite systems.",
    sectionId: "1"
  },
  obj2: {
    question: "When does the Cholesky decomposition exist?",
    answer: "The Cholesky factorization exists if and only if the matrix is symmetric and positive definite — meaning xᵀAx > 0 for every nonzero vector x. Equivalently, all eigenvalues must be strictly positive. If the matrix is only positive semi-definite or indefinite, the standard algorithm breaks down.",
    sectionId: "2"
  },
  obj3: {
    question: "How is Cholesky different from LU decomposition?",
    answer: "Cholesky exploits symmetry and positive definiteness to achieve half the cost of LU (n³/3 vs 2n³/3 operations), requires no pivoting, and stores only one triangular factor since the other is its transpose. Cholesky is the symmetric-positive-definite specialization of LU.",
    sectionId: "9"
  },
  obj4: {
    question: "Why does Cholesky not require pivoting?",
    answer: "Positive definiteness guarantees that every quantity under the square root during the algorithm is strictly positive. No zero or negative pivots can occur, so row swaps are never needed. If the algorithm encounters a non-positive value, the matrix is not positive definite.",
    sectionId: "6"
  },
  obj5: {
    question: "Where is Cholesky decomposition used?",
    answer: "Cholesky appears in solving normal equations for least squares, sampling from multivariate normal distributions using covariance matrices, finite element stiffness matrices, and Newton's method in optimization. It is the default solver whenever the matrix is symmetric positive definite.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Cholesky Decomposition",
    "description": "Cholesky decomposition A = LLᵀ for symmetric positive definite matrices: algorithm, worked example, system solving, computational cost, positive definiteness test, and applications.",
    "url": "https://www.learnmathclass.com/linear-algebra/decompositions/cholesky",
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
      "name": "Cholesky Decomposition"
    },
    "teaches": [
      "Cholesky factorization A = LLᵀ",
      "Existence conditions: symmetric positive definite",
      "Column-by-column Cholesky algorithm",
      "Forward and back substitution for system solving",
      "Cholesky as a positive definiteness test",
      "Relationship to LU and LDLᵀ decompositions",
      "Applications in statistics, optimization, and simulation",
      "How algorithm behavior depends on matrix property (SPD, PSD, indefinite, non-symmetric, near-singular) and the appropriate remedy in each case"
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
        "name": "Decompositions",
        "item": "https://www.learnmathclass.com/linear-algebra/decompositions"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Cholesky Decomposition",
        "item": "https://www.learnmathclass.com/linear-algebra/decompositions/cholesky"
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
    definitenessTests,
    choleskyOutcomes,
    faqQuestions,
    schemas,
    seoData: {
      title: "Cholesky Decomposition: Algorithm & Uses | Learn Math Class",
      description: "Cholesky decomposition A = LLᵀ for symmetric positive definite matrices: algorithm, worked example, system solving, computational cost, positive definiteness test, and applications.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/decompositions/cholesky",
      name: "Cholesky Decomposition"
    },
  }
}
   }
export default function PageTemplate({
  seoData,
  sectionsContent,
  introContent,
  definitenessTests,
  choleskyOutcomes,
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
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <DiagramFrame
            key={'obj2-diagram'}
            id="definiteness-tests"
            title="Four criteria, four prices"
            source="/linear-algebra/decompositions/cholesky"
          >
            <ObjectTypeProfile data={definitenessTests} theme="navy" variant="grid" />
          </DiagramFrame>,
          `Reading down the cost column is the argument for the last row. The definition cannot be evaluated at all, being quantified over infinitely many vectors; the eigenvalue test converges rather than terminating and returns numbers that must then be compared against zero; the minors need $n$ determinants. Cholesky settles the question in $\\tfrac{1}{3}n^3$ operations, terminates, and hands back the factorization when the answer is yes — so the test is free whenever the answer was the one you wanted.`,
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
    // obj10 was previously commented out in the source; uncommented so the
    // "Semi-Definite and Rank-Deficient Case" content actually renders.
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    // NEW capstone section: obj11
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          `Read the table below as a diagnostic rather than a list of caveats. Cholesky is unusual among algorithms in that its failure modes are informative: it does not merely stop, it stops in a way that identifies what is wrong with the matrix. The split is between the cases that run to completion and the cases where the halt itself is the answer.`,
          <DiagramFrame
            key={'obj11-diagram'}
            id="cholesky-outcomes"
            title="What the algorithm does with each matrix"
            source="/linear-algebra/decompositions/cholesky"
          >
            <IdentitySheet data={choleskyOutcomes} theme="navy" variant="ledger" />
          </DiagramFrame>,
          `That property is what makes it the standard definiteness test. The alternative is computing every eigenvalue and checking the signs, which costs more, converges iteratively rather than terminating, and returns approximations that then have to be judged against zero. Cholesky answers in $\\tfrac{1}{3}n^3$ operations, finishes in a fixed number of steps, and hands back the factorization as well when the answer is yes.`,
          `One case deserves separate attention because it does not announce itself. A matrix that is positive definite but nearly singular runs to completion — no error, no halt — while the small pivots quietly amplify rounding error through $L$. The result looks like a successful factorization and is not a reliable one, which is why the smallest diagonal entry of $L$ is worth reading rather than assuming.`,
        ]
    },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cholesky Decomposition</h1>
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